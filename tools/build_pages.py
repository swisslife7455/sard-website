"""Build the static Arabic page (/ar/index.html) and the FAQ schema for both languages.

Run after any change to index.html or app.js:
    python3 tools/build_pages.py

It renders index.html in a headless browser (English, then Arabic), reads the FAQ,
writes FAQPage JSON-LD into index.html, and saves a fully rendered Arabic copy to
ar/index.html with Arabic title/description/canonical and ../ asset paths.
"""
import json, pathlib, re
from playwright.sync_api import sync_playwright

ROOT = pathlib.Path(__file__).resolve().parent.parent
SITE = "https://sardstudio971.com/"
START, END = "<!--FAQ-SCHEMA-->", "<!--/FAQ-SCHEMA-->"

AR_TITLE = "سرد · استوديو بودكاست ومحتوى في دبي"
AR_DESC = ("سرد استوديو بودكاست وصناعة محتوى في دبي: خمس مساحات تصوير، تصوير بعدة كاميرات، "
           "مشغّل في كل جلسة، وصف سيارات مجاني. احجز من 300 درهم للساعة.")
AR_OG_DESC = "المجلس مجلسك، والهوا هواك. خمس مساحات، تصوير بعدة كاميرات، وصف سيارات مجاني."


def faq_schema(pairs, lang):
    data = {"@context": "https://schema.org", "@type": "FAQPage", "inLanguage": lang,
            "mainEntity": [{"@type": "Question", "name": q,
                            "acceptedAnswer": {"@type": "Answer", "text": a}} for q, a in pairs]}
    return f'{START}\n<script type="application/ld+json">{json.dumps(data, ensure_ascii=False)}</script>\n{END}'


def put_schema(html, block):
    if START in html:
        return re.sub(re.escape(START) + r".*?" + re.escape(END), lambda m: block, html, flags=re.S)
    return html.replace("</head>", block + "\n</head>", 1)


def render(page_url, locale):
    with sync_playwright() as p:
        b = p.chromium.launch()
        ctx = b.new_context(locale=locale)
        pg = ctx.new_page()
        pg.goto(page_url)
        pg.wait_for_function("document.documentElement.lang.length>0")
        pairs = pg.eval_on_selector_all(
            ".faq details", "els=>els.map(d=>[d.querySelector('summary').textContent.trim(),d.querySelector('p').textContent.trim()])")
        html = "<!doctype html>\n" + pg.evaluate("document.documentElement.outerHTML")
        b.close()
    return pairs, html


def to_ar_paths(html):
    # prefix relative href/src with ../ (leave absolute, hash, mailto, tel and already-relative alone)
    return re.sub(r'\b(href|src)="(?!https?:|#|mailto:|tel:|/|\.\./|data:)([^"]+)"', r'\1="../\2"', html)


def main():
    idx = ROOT / "index.html"
    url = idx.as_uri()

    en_pairs, _ = render(url, "en-US")
    src = idx.read_text(encoding="utf-8")
    src = put_schema(src, faq_schema(en_pairs, "en"))
    idx.write_text(src, encoding="utf-8")

    ar_pairs, ar = render(idx.as_uri(), "ar-AE")
    if "lang=\"ar\"" not in ar[:300]:
        raise SystemExit("Arabic render failed: page did not switch to Arabic")
    ar = ar.replace("<html ", "<html data-ar-page ", 1)
    ar = re.sub(r"<title>.*?</title>", f"<title>{AR_TITLE}</title>", ar, count=1, flags=re.S)
    ar = re.sub(r'<meta name="description" content="[^"]*">', f'<meta name="description" content="{AR_DESC}">', ar, count=1)
    ar = ar.replace(f'<link rel="canonical" href="{SITE}">', f'<link rel="canonical" href="{SITE}ar/">', 1)
    ar = ar.replace(f'<meta property="og:url" content="{SITE}">', f'<meta property="og:url" content="{SITE}ar/">', 1)
    ar = re.sub(r'<meta property="og:title" content="[^"]*">', f'<meta property="og:title" content="{AR_TITLE}">', ar, count=1)
    ar = re.sub(r'<meta property="og:description" content="[^"]*">', f'<meta property="og:description" content="{AR_OG_DESC}">', ar, count=1)
    ar = ar.replace('<meta property="og:locale" content="en_AE">', '<meta property="og:locale" content="ar_AE">', 1)
    ar = ar.replace('<meta property="og:locale:alternate" content="ar_AE">', '<meta property="og:locale:alternate" content="en_AE">', 1)
    ar = put_schema(ar, faq_schema(ar_pairs, "ar"))
    ar = to_ar_paths(ar)
    out = ROOT / "ar" / "index.html"
    out.parent.mkdir(exist_ok=True)
    out.write_text(ar, encoding="utf-8")
    print(f"index.html: {len(en_pairs)} FAQ items · ar/index.html: {len(ar_pairs)} FAQ items, {len(ar)//1024} KB")


if __name__ == "__main__":
    main()
