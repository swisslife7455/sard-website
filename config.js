/* ===== SARD SITE SETTINGS — the only block that needs editing =====
   After editing, run `python3 tools/build_pages.py` and push. */
window.SARD = {
  whatsapp: "971505725515",            // digits only, e.g. "971501234567"
  calUser: "",             // Cal.com username, e.g. "sard"  (empty = bookings go to WhatsApp)
  address: { en: "28B Street, Al Quoz Industrial Area, Dubai", ar: "شارع 28B، منطقة القوز الصناعية، دبي" },
  mapsUrl: "https://www.google.com/maps/place/OUDCRAFT/@25.1166783,55.2200037,17z/data=!3m1!4b1!4m6!3m5!1s0x3e5f6b79da6e845f:0xbc6174357ef54df5!8m2!3d25.1166783!4d55.2200037",             // Google Maps share link
  hours: { en: "Daily · 9 AM – 11 PM", ar: "يومياً · 9 صباحاً – 11 مساءً" },
  valetFree: true,         // true = "Free valet parking"
  instagram: "sard.studio.971",
  metaPixel: "",           // Meta Pixel ID (digits) — paste to switch on ad tracking
  ga4: "",                 // Google Analytics 4 ID, e.g. "G-XXXXXXX"
  bookingApi: "",          // Google Apps Script web-app URL: live availability + booking alerts
  open: 9, close: 23,      // studio hours (24h, Dubai time)
  leadHours: 3,            // earliest bookable start = now + this many hours
  daysAhead: 21
};
