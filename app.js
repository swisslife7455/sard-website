(function(){
const C=window.SARD||{};
const T={
nHome:["Home","الرئيسية"],nPackages:["Packages","الباقات"],nStudio:["The Studio","الاستوديو"],nContact:["Contact","تواصل"],nBook:["Book","احجز"],bookNow:["Book now","احجز الآن"],
kick:["Podcast & content studio · Dubai","استوديو بودكاست ومحتوى · دبي"],
h1:["Pull up a chair. You're on air.","تفضّل، أنت على الهوا."],
sub:["Walk in, talk, and walk out with content ready to post. We handle the cameras, the sound and the edit. You just bring the story.","تعال، احكِ، واطلع ومحتواك جاهز للنشر. الكاميرات والصوت والمونتاج علينا، وعليك الحكاية بس."],
offerB:["AED 990","990 درهم"],offerT:["Opening offer: your first full Episode, for the first 30 guests","عرض الافتتاح: حلقتك الأولى كاملة، لأول 30 ضيف"],
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
flag:["OPENING OFFER","عرض الافتتاح"],ep1:["2-hour studio block","ساعتين في الاستوديو"],ep2:["Full edit, up to 60 min","مونتاج كامل حتى 60 دقيقة"],ep3:["3 vertical clips + thumbnail","3 مقاطع عمودية + صورة غلاف"],ep4:["Delivered in 5 working days","التسليم خلال 5 أيام عمل"],
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
q1:["What would you like to book?","شو تبا تحجز؟"],oSe:["From AED 300 / hour","من 300 درهم / ساعة"],oSeD:["Studio, operator, raw files same day","استوديو ومشغّل وملفات خام بنفس اليوم"],oEpD:["Recording + full edit + 3 clips","تسجيل + مونتاج كامل + 3 مقاطع"],oBig:["Series or Original?","سلسلة أو إنتاج خاص؟"],oBigD:["These start with a short call. See packages.","تبدأ بمكالمة قصيرة. شوف الباقات."],
whichSpace:["Which space?","أي مساحة؟"],greenSm:["AED 400/h · 2h min","400 درهم/ساعة · ساعتين حد أدنى"],howLong:["How many hours?","كم ساعة؟"],longer:["Need more than 3 hours? Message us and we'll hold the day.","تحتاج أكثر من 3 ساعات؟ راسلنا ونحجز لك اليوم."],next:["Next","التالي"],back:["← Back","رجوع →"],
q2:["Pick a time, add your details and pay","اختر الوقت، أضف بياناتك وادفع"],calWait:["Loading the studio calendar…","جاري تحميل تقويم الاستوديو…"],
waBookP:["Online payment opens very soon. For now, send us your booking on WhatsApp and we'll confirm your time and send a secure payment link.","الدفع الإلكتروني قريباً. حالياً أرسل لنا حجزك على الواتساب، ونأكد الموعد ونرسل لك رابط دفع آمن."],waBookBtn:["Send booking on WhatsApp","أرسل الحجز على الواتساب"],
doneH:["You're on air.","أنت على الهوا."],doneP:["Your booking is confirmed and a confirmation email is on its way. Want subtitles, extra clips or a rush edit? Message us and we'll add them.","حجزك مؤكد ورسالة التأكيد في طريقها لبريدك. تبا ترجمة أو مقاطع إضافية أو مونتاج مستعجل؟ راسلنا ونضيفها لك."],doneWa:["Add extras on WhatsApp","أضف الإضافات على الواتساب"],
sumH:["Your booking","حجزك"],sPkg:["Package","الباقة"],sTotal:["Total","المجموع"],sNote:["Includes 5% VAT. Free rescheduling up to 48 hours before.","شامل الضريبة 5%. تغيير الموعد مجاني قبل 48 ساعة."],
fTerms:["Terms","الشروط"],fPrivacy:["Privacy","الخصوصية"],fRefunds:["Cancellations & refunds","الإلغاء والاسترجاع"],
valet:["Valet parking · 5 studio spaces · Dubai","خدمة صف السيارات · 5 مساحات تصوير · دبي"],valetFree:["Free valet parking · 5 studio spaces · Dubai","صف سيارات مجاني · 5 مساحات تصوير · دبي"],
ratesH:["Hourly rates by space","الأسعار بالساعة حسب المساحة"],thSpace:["Space","المساحة"],thBest:["Best for","مناسبة لـ"],thRate:["AED / hour","درهم / ساعة"],thMin:["Minimum","الحد الأدنى"],
bf1:["Conversations and podcasts","الحوارات والبودكاست"],bf2:["Interviews and business content","المقابلات ومحتوى الأعمال"],bf3:["Bold, modern content","محتوى عصري وجريء"],bf4:["Ads, explainers, creative reels","الإعلانات والشروحات والريلز"],bf5:["Solo episodes, reels, voice-overs","الحلقات الفردية والريلز والتعليق الصوتي"],
min1:["1 hour","ساعة"],min2:["1 hour","ساعة"],min3:["1 hour","ساعة"],min4:["2 hours","ساعتين"],min5:["1 hour","ساعة"],
sp_majlis:["The Majlis Lounge","المجلس"],sp_desk:["The Desk","المكتب"],sp_glow:["The Glow Lounge","صالة الضوء"],sp_green:["The Green Screen","الشاشة الخضراء"],sp_solo:["The Solo Corner","الركن"],
pSession:["The Session","جلسة"],pEpisode:["The Episode","حلقة"],hrs:["hr","ساعة"],aed:["AED","درهم"]
};
if(C.valetFree){T.se4=["Free valet parking","صف سيارات مجاني"];T.v6=T.se4;T.valet=T.valetFree;}
let L=0;
try{const s=localStorage.getItem("sard-lang");if(s==="ar")L=1;else if(!s&&(navigator.language||"").startsWith("ar"))L=1;}catch(e){}
const t=k=>(T[k]||[k,k])[L];
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const lang=o=>o?(L?o.ar:o.en):"";

function waLink(text){return C.whatsapp?`https://wa.me/${C.whatsapp}?text=${encodeURIComponent(text)}`:"#contact";}
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
$("#lang").addEventListener("click",()=>{L=1-L;try{localStorage.setItem("sard-lang",L?"ar":"en")}catch(e){}applyLang();});

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
function pick(p){S.pkg=p;$$(".opt[data-pkg]").forEach(o=>o.setAttribute("aria-pressed",o.dataset.pkg===p));$("#spaceBox").hidden=false;$$(".sp").forEach(b=>{const k=b.dataset.space;b.hidden=(p==="episode"&&(k==="green"||k==="solo"));});if(p==="episode"&&(S.space==="green"||S.space==="solo"))S.space=null;$("#hoursBox").hidden=!(p==="session"&&S.space);$("#n1").disabled=!(S.pkg&&S.space);render();}
function pickSpace(k){S.space=k;const m=SPACES[k].min;if(S.hours<m)S.hours=m;$$(".sp").forEach(b=>b.setAttribute("aria-pressed",b.dataset.space===k));$("#hoursBox").hidden=S.pkg!=="session";$("#n1").disabled=!(S.pkg&&S.space);render();}
$$(".sp").forEach(b=>b.addEventListener("click",()=>pickSpace(b.dataset.space)));
$$(".opt[data-pkg]").forEach(o=>o.addEventListener("click",()=>pick(o.dataset.pkg)));
$("#hMinus").addEventListener("click",()=>{S.hours=Math.max(S.space?SPACES[S.space].min:1,S.hours-1);render();});
$("#hPlus").addEventListener("click",()=>{S.hours=Math.min(MAXH,S.hours+1);render();});
function show(n){[1,2,3].forEach(i=>$("#s"+i).hidden=i!==n);$$("#stepper span").forEach((s,i)=>{s.className=i+1<n?"done":i+1===n?"on":"";});}
$("#n1").addEventListener("click",()=>{show(2);loadBooking();});
$$("[data-back]").forEach(b=>b.addEventListener("click",()=>show(+b.dataset.back)));

function slug(){return S.pkg==="episode"?`episode-${S.space}`:`${S.space}-${S.hours}h`;}
function summaryText(lg){const l=L;L=lg;const s=(S.pkg==="session"?`${t("pSession")} · ${S.hours} ${t("hrs")}`:t("pEpisode"))+` · ${t("sp_"+S.space)} · ${t("aed")} ${total().toLocaleString("en-US")}`;L=l;return s;}
let calReady=false;
function loadCalScript(){
  if(window.Cal)return;
  (function(C,A,Lb){let p=function(a,ar){a.q.push(ar);};let d=C.document;C.Cal=C.Cal||function(){let cal=C.Cal;let ar=arguments;if(!cal.loaded){cal.ns={};cal.q=cal.q||[];d.head.appendChild(d.createElement("script")).src=A;cal.loaded=true;}if(ar[0]===Lb){const api=function(){p(api,arguments);};const namespace=ar[1];api.q=api.q||[];if(typeof namespace==="string"){cal.ns[namespace]=cal.ns[namespace]||api;p(cal.ns[namespace],ar);p(cal,["initNamespace",namespace]);}else p(cal,ar);return;}p(cal,ar);};})(window,"https://app.cal.com/embed/embed.js","init");
  Cal("init",{origin:"https://cal.com"});
  Cal("ui",{theme:"light",cssVarsPerTheme:{light:{"cal-brand":"#FF6B1A"}},hideEventTypeDetails:false,layout:"month_view"});
  Cal("on",{action:"bookingSuccessful",callback:()=>show(3)});
}
function loadBooking(){
  const box=$("#cal"),wa=$("#waBook");
  if(!C.calUser){box.hidden=true;wa.hidden=false;
    const msg=(L?"هلا سرد، أبا أحجز: ":"Hi Sard, I'd like to book: ")+summaryText(L)+(L?"\nالموعد المفضل: ":"\nPreferred day and time: ");
    $("#waBookBtn").href=waLink(msg);if(!C.whatsapp){$("#waBookBtn").removeAttribute("target");$("#waBookBtn").dataset.go="contact";}
    return;}
  wa.hidden=true;box.hidden=false;box.innerHTML="";
  loadCalScript();
  Cal("inline",{elementOrSelector:"#cal",calLink:`${C.calUser}/${slug()}`,layout:"month_view",config:{layout:"month_view"}});
}
function total(){if(!S.pkg||!S.space)return 0;return S.pkg==="session"?SPACES[S.space].rate*S.hours:990;}
function render(){
  $("#hOut").textContent=`${S.hours} ${t("hrs")}`;
  $("#sumPkg").textContent=S.pkg?(S.pkg==="session"?`${t("pSession")} · ${S.hours} ${t("hrs")}`:t("pEpisode"))+(S.space?` · ${t("sp_"+S.space)}`:""):"—";
  $("#sumTotal").textContent=`${t("aed")} ${total().toLocaleString("en-US")}`;
}
applyLang();
go(location.hash.slice(1)||"home",false);
})();
