"""Build step for sardstudio971.com. Run after any change to index.html, app.js, site.js, config.js or styles.css:

    python3 tools/build_pages.py

What it does
1. Stamps ?v=<hash> on app.js / site.js / config.js / styles.css links so browsers never mix old and new files.
2. Renders index.html in a headless browser (English, then Arabic) and writes the FAQ schema into both.
3. Writes /ar/index.html (fully rendered Arabic home page with Arabic title/description/canonical).
4. Generates real, indexable pages in both languages:
      /packages/  /studio/  /contact/  /studio/<space>/   and the same under /ar/
   Packages / Studio / Contact reuse the text from index.html; space pages use SPACES below.
5. Rewrites sitemap.xml with every page and its language alternate.
"""
import hashlib, html, json, pathlib, re
from playwright.sync_api import sync_playwright

ROOT = pathlib.Path(__file__).resolve().parent.parent
SITE = "https://sardstudio971.com"
START, END = "<!--FAQ-SCHEMA-->", "<!--/FAQ-SCHEMA-->"
ASSETS = ("app.js", "site.js", "config.js", "styles.css")

AR_TITLE = "استوديو بودكاست في دبي | سرد · القوز"
AR_DESC = "سرد استوديو بودكاست وفيديو في القوز، دبي: 5 مساحات تصوير، تصوير بعدة كاميرات، مشغّل في كل جلسة وصف سيارات مجاني. من 300 درهم للساعة."
AR_OG_DESC = "المجلس مجلسك، والهوا هواك. خمس مساحات، تصوير بعدة كاميرات، مشغّل في كل جلسة وصف سيارات مجاني في القوز، دبي."

# ---------------------------------------------------------------- copy for the generated pages
UI = {
    "home": ("Home", "الرئيسية"), "packages": ("Packages", "الباقات"), "studio": ("The Studio", "الاستوديو"),
    "contact": ("Contact", "تواصل"), "book": ("Book now", "احجز الآن"), "lang": ("العربية", "English"),
    "best": ("Best for", "مناسبة لـ"), "incl": ("What's included", "وش يشمل الحجز"),
    "from": ("From", "من"), "perh": ("AED / hour", "درهم / ساعة"),
    "min1": ("1-hour minimum", "حد أدنى ساعة"), "min2": ("2-hour minimum", "حد أدنى ساعتين"),
    "pnote": ("Includes an operator, your raw files the same day and 5% VAT.", "يشمل المشغّل وملفاتك الخام بنفس اليوم وضريبة القيمة المضافة 5%."),
    "bookSpace": ("Book this space", "احجز هالمساحة"), "bookEp": ("Book a full Episode · AED 990", "احجز حلقة كاملة · 990 درهم"),
    "ask": ("Ask on WhatsApp", "اسأل على الواتساب"), "others": ("Other spaces at Sard", "مساحات ثانية في سرد"),
    "rate": ("AED {r} / hour", "{r} درهم / ساعة"), "where": ("28B Street, Al Quoz Industrial Area, Dubai · free valet", "شارع 28B، القوز الصناعية، دبي · صف سيارات مجاني"),
}

PAGES = {
    "packages": {
        "img": "og.jpg",
        "title": ("Podcast Studio Prices in Dubai · Packages from AED 300 | Sard", "أسعار استوديو البودكاست في دبي · باقات من 300 درهم | سرد"),
        "desc": ("Clear podcast studio prices in Dubai: studio hire from AED 300/hour with an operator, full edited episodes from AED 990, and monthly series. VAT included.",
                 "أسعار واضحة لاستوديو البودكاست في دبي: حجز بالساعة من 300 درهم مع المشغّل، حلقات كاملة مع المونتاج من 990 درهم، وباقات شهرية. شاملة الضريبة."),
        "h1": ("Podcast studio prices and packages", "أسعار وباقات استوديو البودكاست"),
        "intro": ("Every booking includes the studio, an operator and your raw files the same day. Pick hourly studio time, a fully edited episode, or a monthly series.",
                  "كل حجز يشمل الاستوديو والمشغّل وملفاتك الخام بنفس اليوم. اختر الحجز بالساعة، أو حلقة كاملة مع المونتاج، أو باقة شهرية."),
    },
    "studio": {
        "img": "lounge-wide.jpg",
        "title": ("Podcast & Video Studio Sets in Al Quoz, Dubai | Sard", "مساحات استوديو البودكاست والفيديو في القوز، دبي | سرد"),
        "desc": ("Five podcast and video sets in one building in Al Quoz, Dubai: a majlis lounge, an interview desk, an LED glow lounge, a green screen and a solo booth.",
                 "خمس مساحات للبودكاست والفيديو في مبنى واحد بالقوز، دبي: مجلس، مكتب للمقابلات، صالة ضوء بجدار LED، شاشة خضراء، وركن فردي."),
        "h1": ("Five podcast and video sets in Al Quoz", "خمس مساحات للبودكاست والفيديو في القوز"),
        "intro": ("Choose the set that fits your show. Every space comes with multi-camera recording, broadcast microphones and an operator, all under one roof with free valet at the door.",
                  "اختر المساحة اللي تناسب برنامجك. كل مساحة فيها تصوير بعدة كاميرات ومايكات احترافية ومشغّل، وكلها تحت سقف واحد مع صف سيارات مجاني عند الباب."),
    },
    "contact": {
        "img": "og.jpg",
        "title": ("Contact & Location · Sard Podcast Studio, Al Quoz, Dubai", "تواصل والموقع · استوديو سرد للبودكاست، القوز دبي"),
        "desc": ("Sard podcast studio is at 28B Street, Al Quoz Industrial Area, Dubai, in the OUDCRAFT building. Open daily 9 AM–11 PM, free valet. WhatsApp +971 50 572 5515.",
                 "استوديو سرد للبودكاست في شارع 28B، القوز الصناعية، دبي، في مبنى OUDCRAFT. مفتوح يومياً 9 صباحاً–11 مساءً، صف سيارات مجاني. واتساب 971505725515."),
        "h1": ("Visit Sard in Al Quoz, Dubai", "زورنا في سرد بالقوز، دبي"),
        "intro": ("", ""),
    },
}

SPACES = [
    {"slug": "majlis", "key": "majlis", "rate": 450, "min": 1, "episode": True,
     "imgs": ["lounge-wide.jpg", "lounge-chair.jpg", "lounge-lights.jpg"],
     "name": ("The Majlis Lounge", "المجلس"),
     "title": ("The Majlis Lounge · Podcast Set in Dubai | Sard", "المجلس · استوديو بودكاست في دبي | سرد"),
     "desc": ("Sard's signature podcast set in Al Quoz, Dubai: two deep armchairs, warm lit shelving and broadcast mics. AED 450/hour with an operator, or a full edited Episode.",
              "مساحة البودكاست الأساسية في سرد بالقوز، دبي: كرسيين مريحين، رفوف خشبية بإضاءة دافئة ومايكات احترافية. 450 درهم للساعة مع المشغّل، أو حلقة كاملة."),
     "lead": ("Our signature podcast set. Two deep armchairs face each other across a low table, framed by warm wooden shelving and soft amber light, with broadcast microphones on boom arms. It is built for long, relaxed conversations that look as good as they sound.",
              "مساحتنا الأساسية للبودكاست. كرسيين واسعين متقابلين حول طاولة منخفضة، مع رفوف خشبية وإضاءة دافئة ومايكات احترافية على أذرع تثبيت. مصمّمة للحوارات الطويلة والمريحة اللي تطلع حلوة بالصوت والصورة."),
     "best": (["Conversation podcasts", "Guest interviews", "Long-form episodes"], ["بودكاست حواري", "مقابلات مع ضيوف", "حلقات طويلة"]),
     "incl": (["Set up for a host and a guest; more people on request", "RØDE broadcast microphones on boom arms", "Multi-camera video, wide and close-ups, 16:9 and 9:16", "An operator runs cameras, sound and lighting"],
              ["مجهّزة لمقدّم وضيف، ونجهّز لأشخاص أكثر عند الطلب", "مايكات RØDE احترافية على أذرع تثبيت", "تصوير بعدة كاميرات، لقطات واسعة وقريبة، أفقي وعمودي", "مشغّل يدير الكاميرات والصوت والإضاءة"])},
    {"slug": "desk", "key": "desk", "rate": 450, "min": 1, "episode": True,
     "imgs": ["desk.jpg"],
     "name": ("The Desk", "المكتب"),
     "title": ("The Desk · Interview & Business Podcast Set, Dubai | Sard", "المكتب · استوديو مقابلات وبودكاست أعمال في دبي | سرد"),
     "desc": ("A clean interview set in Al Quoz, Dubai: a desk for two, leather chairs, warm walls and broadcast mics. Made for business podcasts. AED 450/hour with an operator.",
              "مساحة مقابلات أنيقة في القوز، دبي: مكتب لشخصين، كراسي جلد، جدران دافئة ومايكات احترافية. مثالية لبودكاست الأعمال. 450 درهم للساعة مع المشغّل."),
     "lead": ("A focused, professional set for interviews and business conversations. Two leather chairs face each other across a desk, against warm terracotta walls and lit shelving, with a broadcast microphone for each speaker.",
              "مساحة احترافية ومركّزة للمقابلات وحوارات الأعمال. كرسيين جلد متقابلين على مكتب، مع جدران بلون التراكوتا ورفوف مضاءة، ومايك احترافي لكل متحدث."),
     "best": (["Business and finance podcasts", "Founder and expert interviews", "Company content and announcements"], ["بودكاست الأعمال والمال", "مقابلات المؤسسين والخبراء", "محتوى الشركات والإعلانات الرسمية"]),
     "incl": (["Desk set for two speakers facing each other", "RØDE broadcast microphones on desk-mounted boom arms", "Multi-camera video, 16:9 and 9:16", "An operator runs cameras, sound and lighting"],
              ["مكتب لمتحدثين متقابلين", "مايكات RØDE احترافية على أذرع مثبتة على المكتب", "تصوير بعدة كاميرات، أفقي وعمودي", "مشغّل يدير الكاميرات والصوت والإضاءة"])},
    {"slug": "glow", "key": "glow", "rate": 450, "min": 1, "episode": True,
     "imgs": ["glow.jpg"],
     "name": ("The Glow Lounge", "صالة الضوء"),
     "title": ("The Glow Lounge · LED Wall Content Set, Dubai | Sard", "صالة الضوء · مساحة محتوى بجدار إضاءة في دبي | سرد"),
     "desc": ("A bold content set in Al Quoz, Dubai with a glowing LED wall and two lounge chairs. Made for modern podcasts, reels and lifestyle content. AED 450/hour.",
              "مساحة محتوى جريئة في القوز، دبي بجدار إضاءة LED وكرسيين مريحين. مصمّمة للبودكاست العصري والريلز ومحتوى اللايف ستايل. 450 درهم للساعة."),
     "lead": ("Our boldest set. A wall of glowing lights wraps the corner behind two sculpted lounge chairs, giving every shot colour and depth straight out of the camera. Made for content that needs to stop the scroll.",
              "أجرأ مساحاتنا. جدار من الأضواء يلف الزاوية خلف كرسيين بتصميم مميّز، ويعطي كل لقطة ألوان وعمق من الكاميرا مباشرة. مصمّمة للمحتوى اللي يوقّف السكرول."),
     "best": (["Youth and lifestyle podcasts", "Reels and short-form video", "Music, culture and entertainment"], ["بودكاست الشباب واللايف ستايل", "الريلز والفيديوهات القصيرة", "الموسيقى والثقافة والترفيه"]),
     "incl": (["Two lounge chairs in front of an LED light wall", "Microphones set up for every speaker", "Multi-camera video, 16:9 and 9:16", "An operator runs cameras, sound and lighting"],
              ["كرسيين أمام جدار إضاءة LED", "مايكات لكل متحدث", "تصوير بعدة كاميرات، أفقي وعمودي", "مشغّل يدير الكاميرات والصوت والإضاءة"])},
    {"slug": "green-screen", "key": "green", "rate": 400, "min": 2, "episode": False,
     "imgs": ["greenscreen.jpg"],
     "name": ("The Green Screen", "الشاشة الخضراء"),
     "title": ("Green Screen Studio in Dubai · From AED 400/hr | Sard", "استوديو شاشة خضراء في دبي · من 400 درهم للساعة | سرد"),
     "desc": ("Green screen studio in Al Quoz, Dubai for ads, explainers and creative reels. Lit chroma set with an operator, AED 400/hour, 2-hour minimum.",
              "استوديو شاشة خضراء في القوز، دبي للإعلانات والفيديوهات التعليمية والريلز الإبداعية. مع إضاءة ومشغّل، 400 درهم للساعة وحد أدنى ساعتين."),
     "lead": ("A fully lit green screen set for anything that needs a different world behind you: product ads, explainer videos, presenter-led content and creative reels. Our operator lights it evenly so the background keys out cleanly.",
              "مساحة شاشة خضراء بإضاءة كاملة لأي محتوى يحتاج خلفية مختلفة: إعلانات المنتجات، الفيديوهات التعليمية، المحتوى بتقديم مذيع، والريلز الإبداعية. المشغّل يضبط الإضاءة بالتساوي عشان تنفصل الخلفية بنظافة."),
     "best": (["Ads and product videos", "Explainers and online courses", "Creative reels with custom backgrounds"], ["الإعلانات وفيديوهات المنتجات", "الشروحات والدورات الأونلاين", "ريلز إبداعية بخلفيات مخصّصة"]),
     "incl": (["Green screen walls and floor, evenly lit", "Multi-camera video, 16:9 and 9:16", "Microphones for the presenter and guests", "2-hour minimum, so there's time to set up and shoot"],
              ["جدران وأرضية خضراء بإضاءة متساوية", "تصوير بعدة كاميرات، أفقي وعمودي", "مايكات للمقدّم والضيوف", "حد أدنى ساعتين، عشان يكفي الوقت للتجهيز والتصوير"])},
    {"slug": "solo", "key": "solo", "rate": 300, "min": 1, "episode": False,
     "imgs": ["solo-wide.jpg", "solo-portrait.jpg"],
     "name": ("The Solo Corner", "الركن"),
     "title": ("The Solo Corner · Solo Podcast & Voice-over Booth, Dubai | Sard", "الركن · بودكاست فردي وتعليق صوتي في دبي | سرد"),
     "desc": ("A quiet, acoustically treated corner in Al Quoz, Dubai for solo podcasts, voice-overs and talking-head reels. From AED 300/hour with an operator.",
              "ركن هادئ ومعزول صوتياً في القوز، دبي للبودكاست الفردي والتعليق الصوتي وفيديوهات الريلز. من 300 درهم للساعة مع المشغّل."),
     "lead": ("A quiet corner lined with acoustic panels, one comfortable armchair and a broadcast microphone on a boom arm. It is our most affordable space and the easiest way to record solo episodes, voice-overs and talking-head videos.",
              "ركن هادئ مبطّن بألواح عزل صوتي، فيه كرسي مريح ومايك احترافي على ذراع تثبيت. أوفر مساحاتنا وأسهل طريقة لتسجيل الحلقات الفردية والتعليق الصوتي وفيديوهات التحدّث للكاميرا."),
     "best": (["Solo podcast episodes", "Voice-overs and audio ads", "Talking-head reels and course videos"], ["حلقات بودكاست فردية", "تعليق صوتي وإعلانات صوتية", "ريلز وفيديوهات دورات"]),
     "incl": (["Acoustically treated corner for clean sound", "RØDE broadcast microphone on a boom arm", "Camera set up for 16:9 and 9:16", "An operator runs everything, so you just talk"],
              ["ركن معزول صوتياً لصوت نظيف", "مايك RØDE احترافي على ذراع تثبيت", "كاميرا مجهّزة للتصوير الأفقي والعمودي", "المشغّل يدير كل شي، وأنت بس احكِ"])},
]
SLUG = {s["key"]: s["slug"] for s in SPACES}
IMG_SPACE = {"lounge-chair.jpg": "majlis", "lounge-wide.jpg": "majlis", "desk.jpg": "desk", "glow.jpg": "glow", "greenscreen.jpg": "green", "solo-portrait.jpg": "solo"}


# ---------------------------------------------------------------- helpers
def esc(s):
    return html.escape(s, quote=True)


def faq_schema(pairs, lang):
    data = {"@context": "https://schema.org", "@type": "FAQPage", "inLanguage": lang,
            "mainEntity": [{"@type": "Question", "name": q, "acceptedAnswer": {"@type": "Answer", "text": a}} for q, a in pairs]}
    return f'{START}\n<script type="application/ld+json">{json.dumps(data, ensure_ascii=False)}</script>\n{END}'


def put_schema(doc, block):
    if START in doc:
        return re.sub(re.escape(START) + r".*?" + re.escape(END), lambda m: block, doc, flags=re.S)
    return doc.replace("</head>", block + "\n</head>", 1)


def versions():
    return {f: hashlib.sha1((ROOT / f).read_bytes()).hexdigest()[:8] for f in ASSETS}


def stamp(doc, vers):
    for f, v in vers.items():
        doc = re.sub(r'((?:src|href)="(?:\.\./|/)?)' + re.escape(f) + r'(?:\?v=[0-9a-f]+)?"', lambda m: f'{m.group(1)}{f}?v={v}"', doc)
    return doc


def stamp_files(vers):
    for n in ("index.html", "terms.html", "privacy.html", "refunds.html", "404.html"):
        p = ROOT / n
        if p.exists():
            p.write_text(stamp(p.read_text(encoding="utf-8"), vers), encoding="utf-8")


EXTRACT_JS = """() => {
  const g = id => { const e = document.getElementById(id); return e ? e.outerHTML : ''; };
  const inner = id => { const e = document.getElementById(id); return e ? e.innerHTML : ''; };
  return {
    pairs: [...document.querySelectorAll('.faq details')].map(d => [d.querySelector('summary').textContent.trim(), d.querySelector('p').textContent.trim()]),
    html: '<!doctype html>\\n' + document.documentElement.outerHTML,
    packages: inner('p-packages'), studio: inner('p-studio'), contact: inner('p-contact'),
    footer: document.querySelector('footer').outerHTML, wa: g('waFloat'), consent: g('consent'),
    style: (document.querySelector('style') || {outerHTML: ''}).outerHTML
  };
}"""


def render(locale):
    with sync_playwright() as p:
        b = p.chromium.launch()
        pg = b.new_context(locale=locale).new_page()
        pg.goto((ROOT / "index.html").as_uri())
        pg.wait_for_function("document.documentElement.lang.length>0")
        snap = pg.evaluate(EXTRACT_JS)
        b.close()
    return snap


def lang_prefix(ar):
    return "/ar" if ar else ""


def ar_links(doc):
    """Point root-absolute page links at the Arabic versions."""
    doc = re.sub(r'href="/"', 'href="/ar/"', doc)
    doc = re.sub(r'href="/(packages|studio|contact)/', r'href="/ar/\1/', doc)
    doc = re.sub(r'href="/\?', 'href="/ar/?', doc)
    doc = re.sub(r'href="/#', 'href="/ar/#', doc)
    return doc


def rel_to_root(doc):
    """Relative asset/legal links (img/x.jpg, terms.html) → root-absolute, for pages in sub-folders."""
    return re.sub(r'\b(href|src)="(?!https?:|#|mailto:|tel:|/|data:)([^"]+)"', r'\1="/\2"', doc)


def clean(doc):
    doc = re.sub(r'\sdata-(?:i|cfg|valet\d?|go)="[^"]*"', "", doc)
    doc = re.sub(r'\sdata-valet\d?(?=[\s>])', "", doc)
    return doc


def books_to_links(doc, ar):
    home = "/ar/" if ar else "/"
    doc = re.sub(r'<button([^>]*?)\sdata-book="(\w+)"([^>]*)>(.*?)</button>',
                 lambda m: f'<a{m.group(1)} href="{home}?pkg={m.group(2)}#book"{m.group(3)}>{m.group(4)}</a>', doc, flags=re.S)
    return doc


def link_space_cards(doc, ar):
    def repl(m):
        img = m.group(2)
        key = IMG_SPACE.get(img)
        if not key:
            return m.group(0)
        href = f'{lang_prefix(ar)}/studio/{SLUG[key]}/'
        return f'<a class="space" href="{href}">{m.group(1)}{m.group(3)}</a>'
    return re.sub(r'<div class="space">(<img src="(?:/)?img/([\w-]+\.jpg)"[^>]*>)(.*?</div>)</div>', repl, doc, flags=re.S)


def header(ar, current, alt_url):
    i = 1 if ar else 0
    p = lang_prefix(ar)
    nav = [("home", f"{p}/"), ("packages", f"{p}/packages/"), ("studio", f"{p}/studio/"), ("contact", f"{p}/contact/")]
    links = "".join(f'<a href="{h}"{" aria-current=\"page\"" if k == current else ""}>{UI[k][i]}</a>' for k, h in nav)
    return (f'<header class="site"><div class="wrap">'
            f'<a class="logo-btn" href="{p}/" aria-label="Sard home"><span class="logo" style="--s:34px"><span class="a">سرد</span><span class="e">sard</span></span></a>'
            f'<nav class="tabs" aria-label="Pages">{links}</nav>'
            f'<div class="hright"><a class="lang" href="{alt_url}" data-setlang="{"en" if ar else "ar"}" hreflang="{"en" if ar else "ar"}" lang="{"en" if ar else "ar"}">{UI["lang"][i]}</a>'
            f'<a class="btn" href="{p}/#book">{UI["book"][i]}</a></div></div></header>')


def crumbs(ar, trail):
    i = 1 if ar else 0
    p = lang_prefix(ar)
    items = [(UI["home"][i], f"{p}/")] + trail
    html_ = '<nav class="crumbs" aria-label="Breadcrumb">' + '<span aria-hidden="true">›</span>'.join(
        (f'<a href="{u}">{esc(n)}</a>' if u else f'<span aria-current="page">{esc(n)}</span>') for n, u in items) + "</nav>"
    schema = {"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [
        {"@type": "ListItem", "position": n + 1, "name": name, "item": SITE + (u or "")} for n, (name, u) in enumerate(items) if u is not None]}
    return html_, schema


def page_doc(ar, path, title, desc, img, body, schemas, vers, snap):
    i = 1 if ar else 0
    url = SITE + lang_prefix(ar) + path
    en_url, ar_url = SITE + path, SITE + "/ar" + path
    alt = (path if ar else "/ar" + path)
    lang, dirn = ("ar", "rtl") if ar else ("en", "ltr")
    foot, wa, consent = snap["footer"], snap["wa"], snap["consent"]
    tail = clean(rel_to_root(foot + "\n" + wa + "\n" + consent))
    if ar:
        tail = ar_links(tail)
    ld = "".join(f'<script type="application/ld+json">{json.dumps(s, ensure_ascii=False)}</script>' for s in schemas)
    doc = f'''<!doctype html>
<html lang="{lang}" dir="{dirn}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>{esc(title)}</title>
<meta name="description" content="{esc(desc)}">
<link rel="canonical" href="{url}">
<link rel="alternate" hreflang="en" href="{en_url}">
<link rel="alternate" hreflang="ar" href="{ar_url}">
<link rel="alternate" hreflang="x-default" href="{en_url}">
<meta name="theme-color" content="#0E3B3A">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Sard Studio">
<meta property="og:title" content="{esc(title)}">
<meta property="og:description" content="{esc(desc)}">
<meta property="og:image" content="{SITE}/img/{img}">
<meta property="og:url" content="{url}">
<meta property="og:locale" content="{"ar_AE" if ar else "en_AE"}">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/img/apple-touch-icon.png">
<link rel="preload" href="/fonts/plex-arabic-400.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="/styles.css">
{ld}
</head>
<body class="sub">
{snap["style"]}
{header(ar, path.strip("/").split("/")[0] or "home", alt)}
<main>
{body}
</main>
{tail}
<script src="/config.js"></script>
<script src="/site.js"></script>
</body>
</html>
'''
    return stamp(doc, vers)


def section_page(key, ar, snap, vers):
    i = 1 if ar else 0
    meta = PAGES[key]
    inner = snap[key]
    inner = inner.replace(" hidden", "", 0)
    inner = rel_to_root(inner)
    inner = books_to_links(inner, ar)
    if key == "studio":
        inner = link_space_cards(inner, ar)
    inner = clean(inner)
    if ar:
        inner = ar_links(inner)
    cr, crs = crumbs(ar, [(UI[key][i], None)])
    intro = f'<p class="lead">{esc(meta["intro"][i])}</p>' if meta["intro"][i] else ""
    head = f'<section class="teal pagehead"><div class="wrap">{cr}<h1>{esc(meta["h1"][i])}</h1>{intro}</div></section>'
    schemas = [crs]
    if key == "contact":
        schemas.append({"@context": "https://schema.org", "@type": "ContactPage", "about": {"@id": SITE + "/#business"}})
    return page_doc(ar, f"/{key}/", meta["title"][i], meta["desc"][i], meta["img"], head + inner, schemas, vers, snap)


def wa_href(text):
    return "https://wa.me/971505725515?text=" + re.sub(r"%20", "%20", __import__("urllib.parse").parse.quote(text))


def space_page(sp, ar, snap, vers):
    i = 1 if ar else 0
    p = lang_prefix(ar)
    name = sp["name"][i]
    cr, crs = crumbs(ar, [(UI["studio"][i], f"{p}/studio/"), (name, None)])
    other = sp["name"][1 - i]
    imgs = sp["imgs"]
    main_img = f'<img class="sp-main" src="/img/{imgs[0]}" alt="{esc(name)} – {"استوديو بودكاست في دبي" if ar else "podcast studio set in Al Quoz, Dubai"}">'
    thumbs = "".join(f'<img src="/img/{im}" alt="{esc(name)} {"في سرد، دبي" if ar else "at Sard, Dubai"}" loading="lazy">' for im in imgs[1:])
    best = "".join(f"<li>{esc(x)}</li>" for x in sp["best"][i])
    incl = "".join(f"<li>{esc(x)}</li>" for x in sp["incl"][i])
    ask_txt = (f"هلا سرد، عندي سؤال عن {name}." if ar else f"Hi Sard, I have a question about {name}.")
    ep = (f'<a class="btn ghost" href="{p}/?pkg=episode&amp;space={sp["key"]}#book">{UI["bookEp"][i]}</a>' if sp["episode"] else "")
    body = f'''<section class="teal sp-top"><div class="wrap">{cr}
<div class="sp-grid">
  <div class="sp-text">
    <h1>{esc(name)}</h1><p class="ruqaa sp-alt" lang="{"en" if ar else "ar"}">{esc(other)}</p>
    <p class="lead">{esc(sp["lead"][i])}</p>
    <div class="sp-price"><span class="small">{UI["from"][i]}</span><b>{sp["rate"]}</b><span>{UI["perh"][i]}</span><span class="tag">{UI["min2" if sp["min"] == 2 else "min1"][i]}</span></div>
    <p class="small muted">{UI["pnote"][i]}</p>
    <div class="ctas"><a class="btn" href="{p}/?pkg=session&amp;space={sp["key"]}#book">{UI["bookSpace"][i]}</a>{ep}<a class="btn wa" href="{wa_href(ask_txt)}" target="_blank" rel="noopener" data-wa="space">{UI["ask"][i]}</a></div>
  </div>
  <div class="sp-media">{main_img}{('<div class="sp-thumbs">' + thumbs + '</div>') if thumbs else ''}</div>
</div></div></section>
<section class="block sp-info"><div class="wrap"><div class="grid g2">
  <div><h2>{UI["best"][i]}</h2><ul class="ticks">{best}</ul></div>
  <div><h2>{UI["incl"][i]}</h2><ul class="ticks">{incl}</ul><p class="small muted">{UI["where"][i]}</p></div>
</div></div></section>
<section class="block sp-others"><div class="wrap"><h2>{UI["others"][i]}</h2><div class="others">'''
    for o in SPACES:
        if o is sp:
            continue
        body += (f'<a href="{p}/studio/{o["slug"]}/"><img src="/img/{o["imgs"][0]}" alt="{esc(o["name"][i])}" loading="lazy">'
                 f'<b>{esc(o["name"][i])}</b><span>{UI["rate"][i].format(r=o["rate"])}</span></a>')
    body += "</div></div></section>"
    schema = {"@context": "https://schema.org", "@type": "Service",
              "name": f'{sp["name"][i]} · {"استوديو بودكاست" if ar else "podcast studio hire"}',
              "serviceType": "Podcast and video studio hire", "description": sp["desc"][i],
              "provider": {"@id": SITE + "/#business"}, "areaServed": {"@type": "City", "name": "Dubai"},
              "image": f"{SITE}/img/{imgs[0]}",
              "offers": {"@type": "Offer", "price": str(sp["rate"]), "priceCurrency": "AED", "url": f"{SITE}{p}/studio/{sp['slug']}/",
                         "priceSpecification": {"@type": "UnitPriceSpecification", "price": str(sp["rate"]), "priceCurrency": "AED", "unitText": "hour"}}}
    return page_doc(ar, f"/studio/{sp['slug']}/", sp["title"][i], sp["desc"][i], imgs[0], body, [crs, schema], vers, snap)


def write(path, doc):
    out = ROOT / path.lstrip("/") / "index.html"
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(doc, encoding="utf-8")


def sitemap(paths):
    rows = []
    for path, pr in paths:
        for loc in (SITE + path, SITE + "/ar" + path):
            rows.append(f'  <url><loc>{loc}</loc><changefreq>weekly</changefreq><priority>{pr}</priority>\n'
                        f'    <xhtml:link rel="alternate" hreflang="en" href="{SITE + path}"/>\n'
                        f'    <xhtml:link rel="alternate" hreflang="ar" href="{SITE + "/ar" + path}"/></url>')
    for legal in ("terms.html", "privacy.html", "refunds.html"):
        rows.append(f"  <url><loc>{SITE}/{legal}</loc><priority>0.2</priority></url>")
    (ROOT / "sitemap.xml").write_text('<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n'
                                      + "\n".join(rows) + "\n</urlset>\n", encoding="utf-8")


def main():
    vers = versions()
    stamp_files(vers)
    print("asset versions:", vers)

    en = render("en-US")
    idx = ROOT / "index.html"
    idx.write_text(put_schema(idx.read_text(encoding="utf-8"), faq_schema(en["pairs"], "en")), encoding="utf-8")

    ar = render("ar-AE")
    doc = ar["html"]
    if 'lang="ar"' not in doc[:300]:
        raise SystemExit("Arabic render failed: page did not switch to Arabic")
    doc = doc.replace("<html ", "<html data-ar-page ", 1)
    doc = re.sub(r"<title>.*?</title>", f"<title>{AR_TITLE}</title>", doc, count=1, flags=re.S)
    doc = re.sub(r'<meta name="description" content="[^"]*">', f'<meta name="description" content="{AR_DESC}">', doc, count=1)
    doc = doc.replace(f'<link rel="canonical" href="{SITE}/">', f'<link rel="canonical" href="{SITE}/ar/">', 1)
    doc = doc.replace(f'<meta property="og:url" content="{SITE}/">', f'<meta property="og:url" content="{SITE}/ar/">', 1)
    doc = re.sub(r'<meta property="og:title" content="[^"]*">', f'<meta property="og:title" content="{AR_TITLE}">', doc, count=1)
    doc = re.sub(r'<meta property="og:description" content="[^"]*">', f'<meta property="og:description" content="{AR_OG_DESC}">', doc, count=1)
    doc = doc.replace('<meta property="og:locale" content="en_AE">', '<meta property="og:locale" content="ar_AE">', 1)
    doc = doc.replace('<meta property="og:locale:alternate" content="ar_AE">', '<meta property="og:locale:alternate" content="en_AE">', 1)
    doc = put_schema(doc, faq_schema(ar["pairs"], "ar"))
    doc = re.sub(r'\b(href|src)="(?!https?:|#|mailto:|tel:|/|\.\./|data:)([^"]+)"', r'\1="../\2"', doc)
    doc = ar_links(doc)
    (ROOT / "ar").mkdir(exist_ok=True)
    (ROOT / "ar" / "index.html").write_text(doc, encoding="utf-8")

    built = [("/", "1.0")]
    for is_ar, snap in ((False, en), (True, ar)):
        for key in ("packages", "studio", "contact"):
            write(lang_prefix(is_ar) + f"/{key}/", section_page(key, is_ar, snap, vers))
        for sp in SPACES:
            write(lang_prefix(is_ar) + f"/studio/{sp['slug']}/", space_page(sp, is_ar, snap, vers))
    built += [("/packages/", "0.9"), ("/studio/", "0.9"), ("/contact/", "0.7")] + [(f"/studio/{s['slug']}/", "0.8") for s in SPACES]
    sitemap(built)
    print(f"built home (en+ar) + {2 * (3 + len(SPACES))} sub-pages · FAQ items en={len(en['pairs'])} ar={len(ar['pairs'])}")


if __name__ == "__main__":
    main()
