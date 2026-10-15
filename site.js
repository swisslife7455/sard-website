/* Shared on every page: ad-source tagging, WhatsApp links, consent + analytics, floating WhatsApp button. */
(function(){
const C=window.SARD||{};
const isAr=()=>document.documentElement.lang==="ar";
// remember where a visitor came from (ad campaign, Instagram bio…) so WhatsApp enquiries show it
let REF="";
try{const q=new URLSearchParams(location.search);const r=[q.get("utm_source"),q.get("utm_campaign")||q.get("ref")].filter(Boolean).join("-");
  if(r)sessionStorage.setItem("sard-ref",r.slice(0,40));else if(q.get("fbclid"))sessionStorage.setItem("sard-ref",sessionStorage.getItem("sard-ref")||"meta");else if(q.get("gclid"))sessionStorage.setItem("sard-ref",sessionStorage.getItem("sard-ref")||"google");
  REF=sessionStorage.getItem("sard-ref")||"";}catch(e){}
function waLink(text){return C.whatsapp?`https://wa.me/${C.whatsapp}?text=${encodeURIComponent(text)}`:"#contact";}
function withRef(url){if(!REF||!/wa\.me\//.test(url)||/%5Bref%3A|\[ref:/.test(url))return url;
  return /[?&]text=/.test(url)?url+encodeURIComponent(`\n[ref: ${REF}]`):url+(url.includes("?")?"&":"?")+"text="+encodeURIComponent(`[ref: ${REF}]`);}
const HAS_TRACK=!!(C.metaPixel||C.ga4);
function loadTracking(){
  if(window.__sardTrack)return;window.__sardTrack=1;
  if(C.metaPixel){!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version="2.0";n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");fbq("init",C.metaPixel);fbq("track","PageView");}
  if(C.ga4){const s=document.createElement("script");s.async=1;s.src="https://www.googletagmanager.com/gtag/js?id="+C.ga4;document.head.appendChild(s);window.dataLayer=window.dataLayer||[];window.gtag=function(){dataLayer.push(arguments)};gtag("js",new Date());gtag("config",C.ga4);}
}
function track(name,params){params=Object.assign({lang:isAr()?"ar":"en",ref:REF||"direct",page:location.pathname},params||{});
  const fb={lead:"Contact",begin_checkout:"InitiateCheckout",view_item:"ViewContent"}[name];
  try{if(window.fbq&&fb)fbq("track",fb,params);if(window.gtag)gtag("event",name,params);}catch(e){}}
function consentUI(){
  const bar=document.getElementById("consent");if(!bar||!HAS_TRACK)return;
  let c=null;try{c=localStorage.getItem("sard-consent")}catch(e){}
  if(c==="yes"){loadTracking();return;}if(c==="no")return;
  bar.hidden=false;
  document.getElementById("ckYes").onclick=()=>{try{localStorage.setItem("sard-consent","yes")}catch(e){}bar.hidden=true;loadTracking();};
  document.getElementById("ckNo").onclick=()=>{try{localStorage.setItem("sard-consent","no")}catch(e){}bar.hidden=true;};
}
document.addEventListener("click",e=>{
  const w=e.target.closest('a[href*="wa.me/"]');
  if(w){w.href=withRef(w.href);track("lead",{method:"whatsapp",where:w.dataset.wa||w.id||"link"});}
  const l=e.target.closest("[data-setlang]");if(l){try{localStorage.setItem("sard-lang",l.dataset.setlang)}catch(e){}}
});
function floatBtn(){const f=document.getElementById("waFloat");if(!f)return;const onS=()=>f.classList.toggle("show",scrollY>420);addEventListener("scroll",onS,{passive:true});onS();}
window.SardSite={get ref(){return REF},waLink,withRef,track};
window.sardTrack=track;
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",()=>{consentUI();floatBtn();});else{consentUI();floatBtn();}
})();
