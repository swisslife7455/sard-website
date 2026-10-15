(function(){
const C=window.SARD||{};
const T={
nHome:["Home","الرئيسية"],nPackages:["Packages","الباقات"],nStudio:["The Studio","الاستوديو"],nContact:["Contact","تواصل"],nBook:["Book","احجز"],bookNow:["Book now","احجز الآن"],
kick:["Podcast & content studio · Dubai","استوديو بودكاست ومحتوى · دبي"],
h1:["Pull up a chair. You're on air.","تفضّل، أنت على الهوا."],
sub:["Walk in, talk, and walk out with content ready to post. We handle the cameras, the sound and the edit. You just bring the story.","تعال، احكِ، واطلع ومحتواك جاهز للنشر. الكاميرات والصوت والمونتاج علينا، وعليك الحكاية بس."],
offerB:["AED 990","990 درهم"],offerT:["Opening offer: your first full Episode with 5 clips, for the first 30 guests","عرض الافتتاح: حلقتك الأولى كاملة مع 5 مقاطع، لأول 30 ضيف"],
cta1:["Book your chair","احجز كرسيك"],cta2:["See packages","شوف الباقات"],
howH:["How it works","كيف نشتغل"],
s1h:["Book online","احجز أونلاين"],s1p:["Pick a space and a time. Pay by card or Apple Pay in two minutes.","اختر المساحة والوقت، وادفع بالبطاقة أو Apple Pay في دقيقتين."],
s2h:["Come in, have coffee","تفضّل، القهوة جاهزة"],s2p:["Leave your car with our valet. We welcome you like a majlis, check your sound and settle you in.","اترك سيارتك مع خدمة صف السيارات، ونستقبلك مثل المجلس ونجرب الصوت ونجهزك."],
s3h:["Talk","احكِ"],s3p:["Our operator runs the cameras and the audio. You focus on the conversation.","المشغّل يدير الكاميرات والصوت، وأنت ركّز على الحوار."],
s4h:["Post it","انشر"],s4p:["Raw files the same day. Edited episode and clips within five working days.","الملفات الخام بنفس اليوم، والحلقة والمقاطع خلال خمسة أيام عمل."],
galH:["Inside Sard","من داخل سرد"],
whyH:["Why Sard","ليش سرد"],
w1h:["An operator in every session","مشغّل في كل جلسة"],w1p:["You never touch a button. We run the cameras, lights and sound.","ما تلمس ولا زر. الكاميرات والإضاءة والصوت علينا."],
w2h:["Five spaces, one address","خمس مساحات في مكان واحد"],w2p:["A majlis, a desk, a glow lounge, a green screen and a solo corner.","مجلس، ومكتب، وصالة ضوء، وشاشة خضراء، وركن فردي."],
w3h:["Valet at the door","صف السيارات عند الباب"],w3p:["No circling for parking before you record.","لا تدوّر على موقف قبل التسجيل."],
w4h:["Raw files the same day","الملفات الخام بنفس اليوم"],w4p:["Leave with your footage. Edits and clips follow within five working days.","تطلع وملفاتك معك، والمونتاج والمقاطع خلال خمسة أيام عمل."],
faqH:["Questions","أسئلة"],
fq1:["Do I need any equipment or experience?","أحتاج معدات أو خبرة؟"],fa1:["No. Bring yourself and your guests. Microphones, cameras, lights and an operator are included.","لا. تعال أنت وضيوفك. المايكات والكاميرات والإضاءة والمشغّل كلها مشمولة."],
fq2:["What do I get at the end of a session?","شو أستلم بعد الجلسة؟"],fa2:["Your raw multi-camera video and audio the same day. With The Episode you also get a full edit, three vertical clips and a thumbnail within five working days.","الفيديو والصوت الخام من كل الكاميرات بنفس اليوم. ومع باقة الحلقة تستلم مونتاج كامل و3 مقاطع عمودية وصورة غلاف خلال خمسة أيام عمل."],
fq3:["How many people can be on camera?","كم شخص يقدر يكون أمام الكاميرا؟"],fa3:["It depends on the space. The Solo Corner is made for one person; the Majlis Lounge and the Desk seat a host with guests. Tell us your line-up and we'll suggest the right space.","حسب المساحة. الركن مخصص لشخص واحد، والمجلس والمكتب يتسعون للمقدّم وضيوفه. قل لنا كم شخص ونقترح لك المساحة المناسبة."],
fq4:["Can I reschedule?","أقدر أغيّر الموعد؟"],fa4:["Yes, free of charge up to 48 hours before your session. See our cancellation and refund policy for the details.","نعم، مجاناً قبل 48 ساعة من الجلسة. التفاصيل في سياسة الإلغاء والاسترجاع."],
fq5:["Do you work with brands and agencies?","تشتغلون مع الشركات والوكالات؟"],fa5:["Yes. The Series and The Original packages cover recurring shows and full productions. Message us and we'll plan it with you.","نعم. باقة السلسلة والإنتاج الخاص للبرامج المستمرة والإنتاج الكامل. راسلنا ونخطط لها معك."],
pkH:["Packages","الباقات"],perHr:["AED / hour","درهم / ساعة"],perMo:["AED / month","درهم / شهر"],perSeason:["AED / season","درهم / موسم"],from:["from","من"],
se1:["Any of our 5 spaces + operator","أي مساحة من الخمس + المشغّل"],se2:["Multi-camera video and audio","تصوير بعدة كاميرات وصوت احترافي"],se3:["Raw files the same day","الملفات الخام بنفس اليوم"],se4:["Valet parking","خدمة صف السيارات"],
flag:["OPENING OFFER","عرض الافتتاح"],ep1:["2-hour studio block","ساعتين في الاستوديو"],ep2:["Full edit, up to 60 min","مونتاج كامل حتى 60 دقيقة"],ep3:["3 vertical clips + thumbnail (5 with the opening offer)","3 مقاطع عمودية + صورة غلاف (5 مع عرض الافتتاح)"],ep4:["Delivered in 5 working days","التسليم خلال 5 أيام عمل"],
sr1:["4 Episodes a month","4 حلقات شهرياً"],sr2:["16 clips + posting calendar","16 مقطع + جدول نشر"],sr3:["Priority time slots","أولوية في المواعيد"],sr4:["3-month minimum","3 أشهر كحد أدنى"],
or1:["Show concept and format","فكرة البرنامج وشكله"],or2:["Host preparation","تجهيز المقدّم"],or3:["Full production","إنتاج كامل"],or4:["For brands and agencies","للعلامات التجارية والوكالات"],
bookThis:["Book","احجز"],talk:["Talk to us","تواصل معنا"],enquire:["Enquire","استفسر"],
vat:["All prices are in AED and include 5% VAT. Add-ons: extra clip 200 · subtitles 350 · 48-hour rush edit 350 · live-stream setup 200/hour.","كل الأسعار بالدرهم وشاملة ضريبة القيمة المضافة 5%. إضافات: مقطع إضافي 200 · ترجمة 350 · مونتاج مستعجل خلال 48 ساعة 350 · بث مباشر 200 / ساعة."],
polH:["Booking rules","سياسة الحجز"],polLink:["Full cancellation & refund policy →","سياسة الإلغاء والاسترجاع كاملة ←"],pol1:["Reschedule for free up to 48 hours before your session.","تغيير الموعد مجاني قبل 48 ساعة من الجلسة."],pol2:["Cancel within 48 hours and 50% becomes studio credit for 90 days.","الإلغاء خلال 48 ساعة: 50% رصيد في الاستوديو لمدة 90 يوم."],pol3:["No-shows are not refunded.","عدم الحضور بدون استرجاع."],pol4:["Sessions end on time, so the next guest can start on time.","الجلسة تنتهي في وقتها احتراماً للضيف اللي بعدك."],
stH:["Five spaces, one studio","خمس مساحات، استوديو واحد"],
expH:["The experience","التجربة"],expP:["You're greeted at the door, offered Arabic coffee and given a quick sound check before the red light comes on. Our operator runs everything from the cameras to the lighting, so you only have to talk.","نستقبلك عند الباب، ونقدّم لك القهوة العربية، ونجرب الصوت قبل ما يشتغل الضوء الأحمر. المشغّل يدير كل شي من الكاميرات للإضاءة، وأنت عليك تحكي بس."],
k1:["Spaces","المساحات"],v1:["5 sets, one building","5 مساحات في مكان واحد"],k2:["Cameras","الكاميرات"],v2:["Multi-camera, several angles","تصوير بعدة كاميرات وزوايا"],k3:["Audio","الصوت"],v3:["RØDE microphones and mixer","مايكات ومكسر RØDE"],k4:["Formats","الصيغ"],v4:["16:9 video + 9:16 vertical clips","فيديو 16:9 + مقاطع عمودية 9:16"],k5:["Location","الموقع"],k6:["Parking","المواقف"],v6:["Valet parking","خدمة صف السيارات"],
ctH:["Visit or message us","زورنا أو راسلنا"],cAddr:["Address","العنوان"],cHours:["Hours","أوقات العمل"],ctP:["The fastest way to reach us is WhatsApp. We reply quickly during studio hours.","أسرع طريقة توصل لنا هي الواتساب، ونرد بسرعة خلال أوقات العمل."],ctWa:["Message us on WhatsApp","راسلنا على الواتساب"],ctMap:["Open in Google Maps","افتح في خرائط Google"],
bkH:["Book your chair","احجز كرسيك"],st1:["Space","المساحة"],st2:["Date, details & payment","الموعد والبيانات والدفع"],st3:["Confirmed","تم التأكيد"],
q1:["What would you like to book?","شو تبا تحجز؟"],oSe:["From AED 300 / hour","من 300 درهم / ساعة"],oSeD:["Studio, operator, raw files same day","استوديو ومشغّل وملفات خام بنفس اليوم"],oEpD:["Recording + full edit + 5 clips (opening offer)","تسجيل + مونتاج كامل + 5 مقاطع (عرض الافتتاح)"],oBig:["Series or Original?","سلسلة أو إنتاج خاص؟"],oBigD:["These start with a short call. See packages.","تبدأ بمكالمة قصيرة. شوف الباقات."],
whichSpace:["Which space?","أي مساحة؟"],greenSm:["AED 400/h · 2h min","400 درهم/ساعة · ساعتين حد أدنى"],howLong:["How many hours?","كم ساعة؟"],longer:["Need more than 3 hours? Message us and we'll hold the day.","تحتاج أكثر من 3 ساعات؟ راسلنا ونحجز لك اليوم."],next:["Next","التالي"],back:["← Back","رجوع →"],
q2:["Pick a time, add your details and pay","اختر الوقت، أضف بياناتك وادفع"],calWait:["Loading the studio calendar…","جاري تحميل تقويم الاستوديو…"],
waBookP:["Online payment opens very soon. For now, send us your booking on WhatsApp and we'll confirm your time and how to pay.","الدفع الإلكتروني قريباً. حالياً أرسل لنا حجزك على الواتساب، ونأكد لك الموعد وطريقة الدفع."],waBookBtn:["Send booking on WhatsApp","أرسل الحجز على الواتساب"],
doneH:["You're on air.","أنت على الهوا."],doneP:["Your booking is confirmed and a confirmation email is on its way. Want subtitles, extra clips or a rush edit? Message us and we'll add them.","حجزك مؤكد ورسالة التأكيد في طريقها لبريدك. تبا ترجمة أو مقاطع إضافية أو مونتاج مستعجل؟ راسلنا ونضيفها لك."],doneWa:["Add extras on WhatsApp","أضف الإضافات على الواتساب"],
sumH:["Your booking","حجزك"],sPkg:["Package","الباقة"],sTotal:["Total","المجموع"],sNote:["Includes 5% VAT. Free rescheduling up to 48 hours before.","شامل الضريبة 5%. تغيير الموعد مجاني قبل 48 ساعة."],
fTerms:["Terms","الشروط"],fPrivacy:["Privacy","الخصوصية"],fRefunds:["Cancellations & refunds","الإلغاء والاسترجاع"],
valet:["Valet parking · 5 studio spaces · Dubai","خدمة صف السيارات · 5 مساحات تصوير · دبي"],valetFree:["Free valet parking · 5 studio spaces · Dubai","صف سيارات مجاني · 5 مساحات تصوير · دبي"],
ratesH:["Hourly rates by space","الأسعار بالساعة حسب المساحة"],thSpace:["Space","المساحة"],thBest:["Best for","مناسبة لـ"],thRate:["AED / hour","درهم / ساعة"],thMin:["Minimum","الحد الأدنى"],
bf1:["Conversations and podcasts","الحوارات والبودكاست"],bf2:["Interviews and business content","المقابلات ومحتوى الأعمال"],bf3:["Bold, modern content","محتوى عصري وجريء"],bf4:["Ads, explainers, creative reels","الإعلانات والشروحات والريلز"],bf5:["Solo episodes, reels, voice-overs","الحلقات الفردية والريلز والتعليق الصوتي"],
min1:["1 hour","ساعة"],min2:["1 hour","ساعة"],min3:["1 hour","ساعة"],min4:["2 hours","ساعتين"],min5:["1 hour","ساعة"],
sp_majlis:["The Majlis Lounge","المجلس"],sp_desk:["The Desk","المكتب"],sp_glow:["The Glow Lounge","صالة الضوء"],sp_green:["The Green Screen","الشاشة الخضراء"],sp_solo:["The Solo Corner","الركن"],
asH:["Book with confidence","احجز وأنت مرتاح"],
as1h:["Free rescheduling","تغيير الموعد مجاناً"],as1p:["Move your session up to 48 hours before it starts.","غيّر موعدك قبل 48 ساعة من الجلسة."],
as2h:["Full refund","استرجاع كامل"],as2p:["Cancel 48 hours or more before and get all your money back.","ألغِ قبل 48 ساعة أو أكثر واسترجع مبلغك كامل."],
as3h:["You own your content","المحتوى ملكك"],as3p:["Every recording and edit we deliver is yours.","كل تسجيل ومونتاج نسلّمه لك هو ملكك."],
as4h:["Clear prices","أسعار واضحة"],as4p:["Shown in AED with 5% VAT included. No hidden fees.","بالدرهم وشاملة ضريبة 5%، بدون رسوم مخفية."],
kitH:["In every session","في كل جلسة"],kit1:["RØDE broadcast mics and boom arms","مايكات RØDE احترافية وأذرع تثبيت"],kit2:["RØDECaster sound mixer","ميكسر صوت RØDECaster"],kit3:["Godox FS200 soft lighting","إضاءة Godox FS200 ناعمة"],kit4:["Multi-camera video, 16:9 and 9:16","تصوير بعدة كاميرات، أفقي وعمودي"],
mapHint:["Sard is in the same building as OUDCRAFT, 28B Street, Al Quoz. Free valet at the door.","سرد في نفس مبنى OUDCRAFT، شارع 28B، القوز. صف السيارات مجاني عند الباب."],
mapGo:["Get directions →","الاتجاهات ←"],
pw:["Powered by Swissulife","بدعم من Swissulife"],
fq6:["Where are you, and is there parking?","وين مكانكم، وفيه مواقف؟"],fa6:["28B Street, Al Quoz Industrial Area, Dubai, in the same building as OUDCRAFT. Valet parking at the door is free.","شارع 28B، منطقة القوز الصناعية، دبي، في نفس مبنى OUDCRAFT. وصف السيارات عند الباب مجاني."],
waFloat:["Chat on WhatsApp","كلّمنا واتساب"],
ckP:["We use cookies to see which ads bring visitors and to improve this site.","نستخدم ملفات تعريف الارتباط لنعرف أي إعلان جاب الزوار ولتحسين الموقع."],ckYes:["Accept","موافق"],ckNo:["Decline","رفض"],ckMore:["Privacy","الخصوصية"],
st2:["Date & time","اليوم والوقت"],st3:["Your details","بياناتك"],st4:["Request sent","تم إرسال الطلب"],
q2:["Pick a day and a time","اختر اليوم والوقت"],q3:["Your details","بياناتك"],
today:["Today","اليوم"],tomorrow:["Tomorrow","بكرة"],tzNote:["Dubai time (GMT+4)","بتوقيت دبي"],lgFree:["Available","متاح"],lgTaken:["Booked","محجوز"],
availLoading:["Checking availability…","جاري التحقق من المواعيد المتاحة…"],availLive:["Live availability from the studio calendar.","المواعيد محدّثة مباشرة من تقويم الاستوديو."],noDays:["No free slots in the next three weeks. Message us on WhatsApp and we'll find you a time.","ما في مواعيد متاحة خلال الأسابيع الثلاثة القادمة. راسلنا على الواتساب ونلقى لك وقت."],
fName:["Full name","الاسم الكامل"],fPhone:["Mobile (WhatsApp)","رقم الجوال (واتساب)"],fPeople:["People on camera","عدد الأشخاص أمام الكاميرا"],fType:["What are you recording?","شو بتسجّل؟"],fNotes:["Anything we should prepare? (optional)","تبا نجهّز لك شي؟ (اختياري)"],
tyPodcast:["Podcast","بودكاست"],tyInterview:["Interview","مقابلة"],tyReels:["Reels / short videos","ريلز ومقاطع قصيرة"],tyAd:["Ad or brand content","إعلان أو محتوى لعلامة تجارية"],tyOther:["Something else","شي ثاني"],
reqP:["Your slot is held while we confirm it on WhatsApp, usually within an hour during studio hours. Payment details come with the confirmation.","نحجز لك الموعد مبدئياً لين نأكده على الواتساب، عادة خلال ساعة في أوقات العمل. وتوصلك تفاصيل الدفع مع التأكيد."],
sendReq:["Send booking request on WhatsApp","أرسل طلب الحجز على الواتساب"],
errName:["Please add your name.","اكتب اسمك لو سمحت."],errPhone:["Please add a valid mobile number, e.g. +971 50 123 4567.","اكتب رقم جوال صحيح، مثل ‎+971 50 123 4567‎."],
reqH:["Request sent","تم إرسال طلبك"],reqDone:["WhatsApp has opened with your booking details. Press send there, and we'll confirm your slot and payment details shortly.","فتحنا لك الواتساب وفيه تفاصيل حجزك. اضغط إرسال، ونأكد لك الموعد وتفاصيل الدفع قريباً."],
refL:["Booking reference","رقم الطلب"],reopenWa:["Open WhatsApp again","افتح الواتساب مرة ثانية"],sWhen:["When","الموعد"],
pSession:["The Session","جلسة"],pEpisode:["The Episode","حلقة"],hrs:["hr","ساعة"],aed:["AED","درهم"]
};
if(!C.calUser){T.s1h=["Pick your space","اختر مساحتك"];T.s1p=["Choose a space and a time, send it to us on WhatsApp, and we confirm your slot.","اختر المساحة والوقت، وأرسلها لنا على الواتساب، ونأكد لك الموعد."];}
if(C.valetFree){T.se4=["Free valet parking","صف سيارات مجاني"];T.v6=T.se4;T.valet=T.valetFree;}
const AR_PAGE=document.documentElement.hasAttribute("data-ar-page");
const BASE=AR_PAGE?location.pathname.replace(/ar\/[^/]*$/,""):location.pathname.replace(/[^/]*$/,"");
let L=AR_PAGE?1:0;
if(!AR_PAGE){try{const s=localStorage.getItem("sard-lang");if(s==="ar"&&!/[?&]lang=en/.test(location.search)){location.replace(BASE+"ar/"+location.search+location.hash);}else if(!s&&(navigator.language||"").startsWith("ar"))L=1;}catch(e){}}
const t=k=>(T[k]||[k,k])[L];
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const lang=o=>o?(L?o.ar:o.en):"";

// remember where a visitor came from (ad campaign, Instagram bio, etc.) so WhatsApp enquiries show it
let REF="";
try{const q=new URLSearchParams(location.search);const r=[q.get("utm_source"),q.get("utm_campaign")||q.get("ref")].filter(Boolean).join("-");
  if(r)sessionStorage.setItem("sard-ref",r.slice(0,40));else if(q.get("fbclid"))sessionStorage.setItem("sard-ref",sessionStorage.getItem("sard-ref")||"meta");else if(q.get("gclid"))sessionStorage.setItem("sard-ref",sessionStorage.getItem("sard-ref")||"google");
  REF=sessionStorage.getItem("sard-ref")||"";}catch(e){}
function waLink(text){return C.whatsapp?`https://wa.me/${C.whatsapp}?text=${encodeURIComponent(text+(REF?`\n[ref: ${REF}]`:""))}`:"#contact";}
const WA_TXT={
  hello:["Hi Sard, I'd like to ask about recording at the studio.","هلا سرد، عندي استفسار عن التسجيل في الاستوديو."],
  series:["Hi Sard, I'm interested in The Series package (4 episodes a month).","هلا سرد، مهتم بباقة السلسلة (4 حلقات شهرياً)."],
  original:["Hi Sard, I'd like to discuss The Original package for a full production.","هلا سرد، أبا أتكلم عن باقة الإنتاج الخاص."],
  addons:["Hi Sard, I just booked and I'd like to add extras to my session.","هلا سرد، حجزت للتو وأبا أضيف إضافات على جلستي."]
};

function applyConfig(){
  $$('[data-cfg="address"]').forEach(e=>e.textContent=lang(C.address)||"Dubai");
  $$('[data-cfg="hours"]').forEach(e=>e.textContent=lang(C.hours));
  $$('[data-cfg="phone"]').forEach(e=>{e.textContent=C.whatsapp?("+"+C.whatsapp.replace(/^(\d{3})(\d{2})(\d{3})(\d+)$/,"$1 $2 $3 $4")):"—";e.dir="ltr";});
  $$('[data-cfg="maps"]').forEach(e=>{if(C.mapsUrl)e.href=C.mapsUrl;else e.hidden=true;});
  $$("[data-wa]").forEach(a=>{const k=a.dataset.wa;a.href=waLink(WA_TXT[k][L]);if(!C.whatsapp){a.removeAttribute("target");a.dataset.go="contact";}});
}
function applyLang(){
  document.documentElement.lang=L?"ar":"en";document.documentElement.dir=L?"rtl":"ltr";
  $$("[data-i]").forEach(el=>{const k=el.getAttribute("data-i");if(T[k])el.textContent=T[k][L];});
  $("#lang").textContent=L?"English":"العربية";
  applyConfig();render();
}
$("#lang").addEventListener("click",()=>{const toAr=!L;try{localStorage.setItem("sard-lang",toAr?"ar":"en")}catch(e){}
  if(AR_PAGE&&!toAr){location.href=BASE+location.search.replace(/([?&])lang=ar&?/,"$1")+location.hash;return;}
  if(!AR_PAGE&&toAr){location.href=BASE+"ar/"+location.search+location.hash;return;}
  L=toAr?1:0;applyLang();});

// pages via #hash so links can be shared
const PAGES=["home","packages","studio","contact","book"];
function go(p,push){if(!PAGES.includes(p))p="home";$$(".page").forEach(x=>x.hidden=x.id!=="p-"+p);$$("nav.tabs button").forEach(b=>b.setAttribute("aria-current",b.dataset.go===p?"page":"false"));if(push!==false&&location.hash!=="#"+p)history.pushState(null,"","#"+p);window.scrollTo({top:0});}
window.addEventListener("popstate",()=>go(location.hash.slice(1)||"home",false));
document.addEventListener("click",e=>{
  const g=e.target.closest("[data-go]");if(g){e.preventDefault();go(g.dataset.go);}
  const b=e.target.closest("[data-book]");if(b){go("book");pick(b.dataset.book);}
});

// booking
const S={pkg:null,space:null,hours:1};
const SPACES={majlis:{rate:450,min:1},desk:{rate:450,min:1},glow:{rate:450,min:1},green:{rate:400,min:2},solo:{rate:300,min:1}};
const MAXH=3;
function pick(p){S.pkg=p;S.start=null;$$(".opt[data-pkg]").forEach(o=>o.setAttribute("aria-pressed",o.dataset.pkg===p));$("#spaceBox").hidden=false;$$(".sp").forEach(b=>{const k=b.dataset.space;b.hidden=(p==="episode"&&(k==="green"||k==="solo"));});if(p==="episode"&&(S.space==="green"||S.space==="solo"))S.space=null;$("#hoursBox").hidden=!(p==="session"&&S.space);$("#n1").disabled=!(S.pkg&&S.space);render();}
function pickSpace(k){S.space=k;S.start=null;const m=SPACES[k].min;if(S.hours<m)S.hours=m;$$(".sp").forEach(b=>b.setAttribute("aria-pressed",b.dataset.space===k));$("#hoursBox").hidden=S.pkg!=="session";$("#n1").disabled=!(S.pkg&&S.space);render();}
$$(".sp").forEach(b=>b.addEventListener("click",()=>pickSpace(b.dataset.space)));
$$(".opt[data-pkg]").forEach(o=>o.addEventListener("click",()=>pick(o.dataset.pkg)));
$("#hMinus").addEventListener("click",()=>{S.start=null;S.hours=Math.max(S.space?SPACES[S.space].min:1,S.hours-1);render();});
$("#hPlus").addEventListener("click",()=>{S.start=null;S.hours=Math.min(MAXH,S.hours+1);render();});
function show(n){[1,2,3,4].forEach(i=>$("#s"+i).hidden=i!==n);$$("#stepper span").forEach((s,i)=>{s.className=i+1<n?"done":i+1===n?"on":"";});
  const top=$("#p-book");if(top&&n>1)top.scrollIntoView({behavior:"smooth",block:"start"});}
$("#n1").addEventListener("click",()=>{show(2);loadBooking();track("begin_checkout",{package:S.pkg,space:S.space,value:total(),currency:"AED"});});
$$("[data-back]").forEach(b=>b.addEventListener("click",()=>show(+b.dataset.back)));

function slug(){return S.pkg==="episode"?`episode-${S.space}`:`${S.space}-${S.hours}h`;}
function loadCalScript(){
  if(window.Cal)return;
  (function(C,A,Lb){let p=function(a,ar){a.q.push(ar);};let d=C.document;C.Cal=C.Cal||function(){let cal=C.Cal;let ar=arguments;if(!cal.loaded){cal.ns={};cal.q=cal.q||[];d.head.appendChild(d.createElement("script")).src=A;cal.loaded=true;}if(ar[0]===Lb){const api=function(){p(api,arguments);};const namespace=ar[1];api.q=api.q||[];if(typeof namespace==="string"){cal.ns[namespace]=cal.ns[namespace]||api;p(cal.ns[namespace],ar);p(cal,["initNamespace",namespace]);}else p(cal,ar);return;}p(cal,ar);};})(window,"https://app.cal.com/embed/embed.js","init");
  Cal("init",{origin:"https://cal.com"});
  Cal("ui",{theme:"light",cssVarsPerTheme:{light:{"cal-brand":"#FF6B1A"}},hideEventTypeDetails:false,layout:"month_view"});
  Cal("on",{action:"bookingSuccessful",callback:()=>show(4)});
}

/* ---------- WhatsApp booking with day/time picker ---------- */
const TZ="Asia/Dubai",OFF=4; // Dubai is UTC+4 all year
const OPEN=+C.open||9,CLOSE=+C.close||23,LEAD=(C.leadHours!=null?+C.leadHours:3),AHEAD=+C.daysAhead||21;
let AV={busy:[],closed:[]},AVloaded=false,AVsource="";
S.day=null;S.start=null; // day = "YYYY-MM-DD" (Dubai), start = hour (Dubai)
function dur(){return S.pkg==="episode"?2:S.hours;}
function dubaiNow(){const d=new Date(Date.now()+OFF*36e5);return{y:d.getUTCFullYear(),m:d.getUTCMonth(),d:d.getUTCDate(),h:d.getUTCHours()+d.getUTCMinutes()/60};}
function ms(day,h){const[y,m,d]=day.split("-").map(Number);return Date.UTC(y,m-1,d,0,0)+(h-OFF)*36e5;}
function iso(day,h){const x=new Date(ms(day,h)+OFF*36e5);const p=n=>String(n).padStart(2,"0");return `${x.getUTCFullYear()}-${p(x.getUTCMonth()+1)}-${p(x.getUTCDate())}T${p(x.getUTCHours())}:${p(x.getUTCMinutes())}:00+04:00`;}
function dayKey(offset){const n=dubaiNow();const x=new Date(Date.UTC(n.y,n.m,n.d+offset));return x.toISOString().slice(0,10);}
const loc=()=>L?"ar-AE":"en-GB";
function fmtDay(day,opts){return new Intl.DateTimeFormat(loc(),Object.assign({timeZone:"UTC"},opts)).format(new Date(day+"T00:00:00Z"));}
function fmtTime(day,h){return new Intl.DateTimeFormat(L?"ar-AE":"en-US",{timeZone:TZ,hour:"numeric",minute:"2-digit",numberingSystem:"latn"}).format(new Date(ms(day,h)));}
function clash(day,h){const a=ms(day,h),b=a+dur()*36e5;
  if((AV.closed||[]).includes(day))return true;
  return (AV.busy||[]).some(x=>{const sp=x.space||"all";if(sp!=="all"&&sp!==S.space)return false;const xs=Date.parse(x.s),xe=Date.parse(x.e);return a<xe&&b>xs;});}
function slotOK(day,h){return h>=OPEN&&h+dur()<=CLOSE&&ms(day,h)>=Date.now()+LEAD*36e5&&!clash(day,h);}
function dayHasSlots(day){for(let h=OPEN;h+dur()<=CLOSE;h++)if(slotOK(day,h))return true;return false;}
async function loadAvail(){
  if(AVloaded)return;
  const tries=C.bookingApi?[C.bookingApi+(C.bookingApi.includes("?")?"&":"?")+"days="+AHEAD,"availability.json"]:[ (AR_PAGE?"../":"")+"availability.json"];
  for(const u of tries){try{const r=await fetch(u,{cache:"no-store"});if(!r.ok)continue;const j=await r.json();if(j&&Array.isArray(j.busy)){AV=j;AVsource=u===tries[0]&&C.bookingApi?"live":"file";AVloaded=true;return;}}catch(e){}}
  AVloaded=true;AVsource="none";
}
function renderPicker(){
  const days=$("#days");days.innerHTML="";
  let first=null;
  for(let i=0;i<AHEAD;i++){const k=dayKey(i);const ok=dayHasSlots(k);if(ok&&!first)first=k;
    const b=document.createElement("button");b.type="button";b.className="day";b.dataset.day=k;b.disabled=!ok;b.setAttribute("aria-pressed",String(S.day===k));
    b.innerHTML=`<small>${i===0?t("today"):i===1?t("tomorrow"):fmtDay(k,{weekday:"short"})}</small><b>${fmtDay(k,{day:"numeric",numberingSystem:"latn"})}</b><small>${fmtDay(k,{month:"short"})}</small>`;
    b.onclick=()=>{S.day=k;S.start=null;renderPicker();};days.appendChild(b);}
  if(!S.day||!dayHasSlots(S.day)){S.day=first;S.start=null;$$("#days .day").forEach(b=>b.setAttribute("aria-pressed",String(b.dataset.day===S.day)));}
  const sl=$("#slots");sl.innerHTML="";
  $("#dayLabel").textContent=S.day?fmtDay(S.day,{weekday:"long",day:"numeric",month:"long"}):"";
  if(S.day){for(let h=OPEN;h+dur()<=CLOSE;h++){const ok=slotOK(S.day,h);const past=ms(S.day,h)<Date.now()+LEAD*36e5;if(past)continue;
    const b=document.createElement("button");b.type="button";b.className="slot";b.disabled=!ok;b.setAttribute("aria-pressed",String(S.start===h));
    b.textContent=fmtTime(S.day,h);b.title=`${fmtTime(S.day,h)} – ${fmtTime(S.day,h+dur())}`;
    b.onclick=()=>{S.start=h;renderPicker();};sl.appendChild(b);}}
  $("#availNote").textContent=!S.day?t("noDays"):AVsource==="live"?t("availLive"):"";
  $("#n2").disabled=S.start==null;
  render();
}
async function loadBooking(){
  const box=$("#cal"),pk=$("#picker");
  if(C.calUser){pk.hidden=true;$("#n2").hidden=true;box.hidden=false;box.innerHTML="";loadCalScript();
    Cal("inline",{elementOrSelector:"#cal",calLink:`${C.calUser}/${slug()}`,layout:"month_view",config:{layout:"month_view"}});return;}
  box.hidden=true;pk.hidden=false;
  if(!AVloaded){$("#availNote").textContent=t("availLoading");await loadAvail();}
  renderPicker();
}
$("#n2").addEventListener("click",()=>{if(S.start==null)return;show(3);try{const d=JSON.parse(localStorage.getItem("sard-guest")||"{}");if(d.name&&!$("#fName").value)$("#fName").value=d.name;if(d.phone&&!$("#fPhone").value)$("#fPhone").value=d.phone;}catch(e){}$("#fName").focus({preventScroll:true});});

function bookingRef(){const p=n=>String(n).padStart(2,"0");return `SRD-${S.day.slice(5,7)}${S.day.slice(8,10)}-${p(S.start)}00-${Math.random().toString(36).slice(2,4).toUpperCase()}`;}
function pkgName(lg){return lg?(S.pkg==="episode"?"حلقة (ساعتين، مونتاج كامل، 5 مقاطع)":`جلسة (${({1:"ساعة واحدة",2:"ساعتان",3:"3 ساعات"})[S.hours]})`):(S.pkg==="episode"?"The Episode (2 hours, full edit, 5 clips)":`The Session (${S.hours} hour${S.hours>1?"s":""})`);}
function buildMessage(d){
  const l0=L;const lg=L;
  const dayTxt=fmtDay(S.day,{weekday:"long",day:"numeric",month:"long",year:"numeric",numberingSystem:"latn"});
  const time=`${fmtTime(S.day,S.start)} – ${fmtTime(S.day,S.start+dur())}`;
  const sp=t("sp_"+S.space),tot=total().toLocaleString("en-US");
  const types={podcast:["Podcast","بودكاست"],interview:["Interview","مقابلة"],reels:["Reels / short videos","ريلز ومقاطع قصيرة"],ad:["Ad or brand content","إعلان أو محتوى لعلامة تجارية"],other:["Other","أخرى"]};
  const ppl=lg?({"1":"شخص واحد","2":"شخصان","3":"3 أشخاص","4":"4 أشخاص أو أكثر"})[d.people]:({"1":"1 person","2":"2 people","3":"3 people","4":"4 or more people"})[d.people];
  const ph=/^\+971\d{9}$/.test(d.phone)?d.phone.replace(/^\+971(\d{2})(\d{3})(\d{4})$/,"+971 $1 $2 $3"):d.phone;
  const lines=lg?[
    "السلام عليكم، أود حجز موعد في استوديو سرد.","",
    `*طلب حجز · ${d.ref}*`,
    `• الباقة: ${pkgName(1)}`,`• المساحة: ${sp}`,`• التاريخ: ${dayTxt}`,`• الوقت: ${time} (بتوقيت دبي)`,
    `• أمام الكاميرا: ${ppl}`,`• نوع التسجيل: ${types[d.type][1]}`,`• المجموع: ${tot} درهم (شامل ضريبة القيمة المضافة 5%)`,"",
    `الاسم: ${d.name}`,`الجوال: \u200E${ph}\u200E`].concat(d.notes?[`ملاحظات: ${d.notes}`]:[]).concat(["","أرجو تأكيد الموعد وإرسال تفاصيل الدفع. شكراً لكم."])
  :[
    "Hello Sard Studio, I'd like to book a session.","",
    `*Booking request · ${d.ref}*`,
    `• Package: ${pkgName(0)}`,`• Space: ${sp}`,`• Date: ${dayTxt}`,`• Time: ${time} (Dubai time)`,
    `• On camera: ${ppl}`,`• Recording: ${types[d.type][0]}`,`• Total: AED ${tot} (incl. 5% VAT)`,"",
    `Name: ${d.name}`,`Mobile: ${ph}`].concat(d.notes?[`Notes: ${d.notes}`]:[]).concat(["","Please confirm my slot and send the payment details. Thank you."]);
  L=l0;return lines.join("\n");
}
function normPhone(v){let s=(v||"").replace(/[^\d+]/g,"");if(s.startsWith("00"))s="+"+s.slice(2);if(/^05\d{8}$/.test(s))s="+971"+s.slice(1);if(/^5\d{8}$/.test(s))s="+971"+s;return s;}
$("#sendReq").addEventListener("click",()=>{
  const err=$("#fErr");err.hidden=true;
  const name=$("#fName").value.trim().replace(/\s+/g," "),phone=normPhone($("#fPhone").value);
  if(name.length<2){err.textContent=t("errName");err.hidden=false;$("#fName").focus();return;}
  if(!/^\+?\d{8,15}$/.test(phone)){err.textContent=t("errPhone");err.hidden=false;$("#fPhone").focus();return;}
  if(S.start==null||!slotOK(S.day,S.start)){show(2);renderPicker();return;}
  const d={ref:bookingRef(),name,phone,people:$("#fPeople").value,type:$("#fType").value,notes:$("#fNotes").value.trim().slice(0,300)};
  try{localStorage.setItem("sard-guest",JSON.stringify({name,phone}))}catch(e){}
  const msg=buildMessage(d),url=waLink(msg);
  // alert the studio (calendar hold + email) — fire-and-forget, never blocks the guest
  if(C.bookingApi&&!$("#fHp").value){try{fetch(C.bookingApi,{method:"POST",mode:"no-cors",keepalive:true,body:JSON.stringify({
    ref:d.ref,name,phone,people:d.people,type:d.type,notes:d.notes,pkg:S.pkg,hours:dur(),space:S.space,spaceName:T["sp_"+S.space][0],
    start:iso(S.day,S.start),end:iso(S.day,S.start+dur()),total:total(),lang:L?"ar":"en",ref_source:REF||"direct",page:location.href.split("#")[0]})});}catch(e){}}
  track("lead",{method:"booking_request",package:S.pkg,space:S.space,value:total(),currency:"AED"});
  // mark the slot as taken on this device so it doesn't show as free if they come back
  AV.busy=(AV.busy||[]).concat([{s:iso(S.day,S.start),e:iso(S.day,S.start+dur()),space:S.space}]);
  window.open(url,"_blank","noopener");
  $("#doneTitle").textContent=t("reqH");$("#doneText").textContent=t("reqDone");
  $("#refBox").hidden=false;$("#refBox").innerHTML=`<span>${t("refL")}</span><b dir="ltr">${d.ref}</b><span>${$("#sumWhen").textContent}</span>`;
  const re=$("#reopenWa");re.href=url;re.hidden=false;$("#addonsBtn").hidden=true;
  show(4);
});

function total(){if(!S.pkg||!S.space)return 0;return S.pkg==="session"?SPACES[S.space].rate*S.hours:990;}
function render(){
  $("#hOut").textContent=`${S.hours} ${t("hrs")}`;
  $("#sumPkg").textContent=S.pkg?(S.pkg==="session"?`${t("pSession")} · ${S.hours} ${t("hrs")}`:t("pEpisode"))+(S.space?` · ${t("sp_"+S.space)}`:""):"—";
  $("#sumWhen").textContent=(S.day&&S.start!=null)?`${fmtDay(S.day,{weekday:"short",day:"numeric",month:"short"})} · ${fmtTime(S.day,S.start)} – ${fmtTime(S.day,S.start+dur())}`:"—";
  $("#sumTotal").textContent=`${t("aed")} ${total().toLocaleString("en-US")}`;
}
// ---------- analytics: Meta Pixel + Google Analytics 4, loaded only after consent ----------
const HAS_TRACK=!!(C.metaPixel||C.ga4);
function loadTracking(){
  if(window.__sardTrack)return;window.__sardTrack=1;
  if(C.metaPixel){!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version="2.0";n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");fbq("init",C.metaPixel);fbq("track","PageView");}
  if(C.ga4){const s=document.createElement("script");s.async=1;s.src="https://www.googletagmanager.com/gtag/js?id="+C.ga4;document.head.appendChild(s);window.dataLayer=window.dataLayer||[];window.gtag=function(){dataLayer.push(arguments)};gtag("js",new Date());gtag("config",C.ga4);}
}
function track(name,params){params=Object.assign({lang:L?"ar":"en",ref:REF||"direct"},params||{});
  const fb={lead:"Contact",begin_checkout:"InitiateCheckout",view_item:"ViewContent"}[name];
  try{if(window.fbq&&fb)fbq("track",fb,params);if(window.gtag)gtag("event",name,params);}catch(e){}}
window.sardTrack=track;
function consentUI(){
  const bar=$("#consent");if(!bar||!HAS_TRACK)return;
  let c=null;try{c=localStorage.getItem("sard-consent")}catch(e){}
  if(c==="yes"){loadTracking();return;}if(c==="no")return;
  bar.hidden=false;
  $("#ckYes").onclick=()=>{try{localStorage.setItem("sard-consent","yes")}catch(e){}bar.hidden=true;loadTracking();};
  $("#ckNo").onclick=()=>{try{localStorage.setItem("sard-consent","no")}catch(e){}bar.hidden=true;};
}
document.addEventListener("click",e=>{
  const w=e.target.closest('a[href*="wa.me/"]');if(w)track("lead",{method:"whatsapp",where:w.dataset.wa||w.id||"link"});
});
// floating WhatsApp button appears once the visitor scrolls past the hero
(function(){const f=$("#waFloat");if(!f)return;const onS=()=>f.classList.toggle("show",scrollY>420);addEventListener("scroll",onS,{passive:true});onS();})();
applyLang();
go(location.hash.slice(1)||"home",false);
consentUI();
})();
