/* =========================
   HELPERS
========================= */
const qs = (s) => document.querySelector(s);
const qsa = (s) => document.querySelectorAll(s);

/* =========================
   SCROLL REVEAL
========================= */
const revealEls = qsa(".reveal");
const revealOnScroll = () => {
  const trigger = window.innerHeight * 0.85;
  revealEls.forEach(el => {
    const { top } = el.getBoundingClientRect();
    if (top < trigger) el.classList.add("active");
  });
};
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

/* =========================
   MOBILE MENU
========================= */
const hamburger = qs("#hamburger");
const mobileMenu = qs("#mobileMenu");

if (hamburger && mobileMenu) {
  hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });

  qsa(".mobile a").forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
    });
  });
}

/* =========================
   LANGUAGE SWITCHER UI
========================= */
const langBtn = qs("#langBtn");
const langMenu = qs("#langMenu");
const langLabel = qs("#langLabel");

if (langBtn && langMenu) {
  langBtn.addEventListener("click", () => {
    langMenu.classList.toggle("active");
  });

  document.addEventListener("click", (e) => {
    if (!langBtn.contains(e.target) && !langMenu.contains(e.target)) {
      langMenu.classList.remove("active");
    }
  });
}

/* =========================
   TRANSLATIONS (100% coverage)
   - text: data-i18n
   - placeholder: data-i18n-placeholder
========================= */
const i18n = {
  nl: {
    /* language labels */
    "lang.title": "Taal",
    "lang.nl": "Nederlands",
    "lang.en": "English",
    "lang.ar": "العربية",

    /* brand/meta */
    "brand.tag": "Barbershop • Assen",
    "meta.call": "Bel",
    "meta.whatsapp": "WhatsApp",
    "meta.addressLine": "Adres: Zaagmolen, 9401 BR , Assen",
    "meta.opening": "Openingstijden: Ma–Za 10:00–18:00",

    /* nav */
    "nav.home": "Home",
    "nav.about": "Over ons",
    "nav.services": "Diensten",
    "nav.gallery": "Galerij",
    "nav.reviews": "Reviews",
    "nav.contact": "Contact",

    /* hero */
    "hero.title": "Modern. Clean. Premium.",
    "hero.text": "Een luxe barbershop ervaring: strakke fades, perfecte baard, en een relaxte sfeer.",
    "hero.pill1": "Hygiëne & schoon",
    "hero.pill2": "Professionele cuts",
    "hero.pill3": "Premium uitstraling",
    "hero.cardText": "Top service, strak resultaat, relaxte sfeer.",
    "hero.openToday": "Open vandaag",
    "hero.scroll": "Scroll",

    /* CTA */
    "cta.bookNow": "Boek nu",
    "cta.callNow": "Bel direct",
    "cta.whatsapp": "WhatsApp",

    /* About */
    "about.title": "Over ons",
    "about.subtitle": "Professionele coupes, strakke resultaten en een ontspannen sfeer.",
    "about.p1": "Bij Star Kapper ben je aan het juiste adres voor knippen, scheren, stylen, haarverzorging en meer. Wij helpen heren, dames én kinderen aan een frisse look die past bij hun stijl.",
    "about.p2": " Je bent welkom op afspraak, maar zonder afspraak binnenlopen is ook mogelijk. Kwaliteit, hygiëne en een strak resultaat staan bij ons altijd voorop.",
    "about.f1t": "Hygiëne eerst",
    "about.f1d": "Schone werkplek & materialen.",
    "about.f2t": "Ervaring & vakmanschap",
    "about.f2d": "Moderne technieken & advies.",
    "about.f3t": "Relaxte sfeer",
    "about.f3d": "Comfortabele stoelen & lighting.",
    "about.cta": "Bekijk diensten",

    /* Services */
    "services.title": "Diensten & Prijzen",
    "services.subtitle": "Kies je service en boek meteen.",
    "services.book": "Boek",
    "services.notice": "Let op voor dames: stuur vooraf een duidelijke beschrijving of voorbeeldfoto via WhatsApp.",

    "services.s1t": "Heren knippen",
    "services.s1d": "Strakke knipbeurt met nette afwerking.",
    "services.s1p": "€ 20",

    "services.s2t": "Baard scheren",
    "services.s2d": "Gladde en verzorgde scheerbeurt.",
    "services.s2p": "€ 10",

    "services.s3t": "Haar en baard",
    "services.s3d": "Complete look met strakke afwerking.",
    "services.s3p": "€ 25",

    "services.s4t": "Kinderen",
    "services.s4d": "Zacht en kindvriendelijk geknipt.",
    "services.s4p": "€ 10",

    "services.s5t": "Tondeuze knippen",
    "services.s5d": "Snel en strak met de tondeuse.",
    "services.s5p": "€ 15",

    "services.s6t": "Dames knippen",
    "services.s6d": "Knipbeurt naar wens.",
    "services.s6p": "€ 25",

    "services.s7t": "Wassen, knippen, föhnen",
    "services.s7d": "Wassen + knip + föhn.",
    "services.s7p": "€ 29",

    "services.s8t": "Haar verven",
    "services.s8d": "Kleur op maat met een nette afwerking.",
    "services.s8p": "€ 19",

    "services.s11t": "Dames verven",
    "services.s11d": "Haarkleuring voor dames (op aanvraag).",
    "services.s11p": "€ 25",

    "services.s9t": "Gezichtsharsen",
    "services.s9d": "Snel, zacht en schoon.",
    "services.s9p": "€ 10",

    "services.s10t": "Gezichtsmassage",
    "services.s10d": "Ontspanning en een frisse uitstraling.",
    "services.s10p": "€ 15",
    "services.s12t": "Anders",



    /* Gallery */
    "gallery.title": "Galerij",


    /* Reviews */
    "reviews.title": "Reviews",
    "reviews.subtitle": "Klanten komen terug voor kwaliteit, netheid en resultaat.",
    "reviews.outOf": "/5",
    "reviews.note": "Gebaseerd op klantbeoordelingen.",
    "reviews.r1": "“Super netjes en professioneel. Fade is perfect.”",
    "reviews.r2": "“Goede sfeer, schone zaak, en top service.”",
    "reviews.r3": "“Baard trim is strak, precies zoals ik wil.”",
    "reviews.cta": "Laat een review achter",

    /* Hours */
    "hours.title": "Officiële openingstijden",
    "hours.subtitle": "Bekijk hieronder onze vaste openingstijden.",
    "hours.cardLabel": "Openingstijden",
    "hours.monDay": "Maandag",
    "hours.monTime": "van 10:00 tot 18:00",
    "hours.tueDay": "Dinsdag",
    "hours.tueTime": "van 10:00 tot 18:00",
    "hours.wedDay": "Woensdag",
    "hours.wedTime": "van 10:00 tot 18:00",
    "hours.thuDay": "Donderdag",
    "hours.thuTime": "van 10:00 tot 18:00",
    "hours.friDay": "Vrijdag",
    "hours.friTime": "van 10:00 tot 20:00",
    "hours.satDay": "Zaterdag",
    "hours.satTime": "van 10:00 tot 20:00",
    "hours.sunDay": "Zondag",
    "hours.sunTime": "raadpleeg Google Maps voor de openingstijden",

    /* Contact */
    "contact.title": "Contact & Route",
    "contact.subtitle": "Boek snel via WhatsApp of bel direct. Route vind je hieronder op de kaart.",
    "contact.addressT": "Adres",
    "contact.addressV": "Zaagmolen, 9401 BR Assen",
    "contact.phoneT": "Telefoon",
    "contact.waT": "WhatsApp",
    "contact.waLink": "Chat via WhatsApp",
    "contact.formTitle": "Snel boeken / bericht",
    "contact.mapNote": "Werkt de kaart niet? Open de route in Google Maps.",
    "contact.openMap": "Open kaart",
    "contact.socialTitle": "Volg ons op",

    /* Form */
    "form.nameLabel": "Naam",
    "form.serviceLabel": "Dienst",
    "form.messageLabel": "Bericht",
    "form.send": "Verstuur",
    "form.note": "*Na verzenden openen we WhatsApp met een kant-en-klare tekst (geen server nodig).",
    "form.namePh": "Naam",
    "form.messagePh": "Bericht...",

    /* Footer */
    "footer.tag": "Barbershop • Assen",
    "footer.rights": "Alle rechten voorbehouden.",
    "footer.poweredText": "Ontwikkeld door"

  },

  en: {
    "lang.title": "Language",
    "lang.nl": "Nederlands",
    "lang.en": "English",
    "lang.ar": "Arabic",

    "brand.tag": "Barbershop • Assen",
    "meta.call": "Call",
    "meta.whatsapp": "WhatsApp",
    "meta.addressLine": "Address: Zaagmolen, 9401 BR Assen",
    "meta.opening": "Opening hours: Mon–Sat 10:00–18:00",

    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.gallery": "Gallery",
    "nav.reviews": "Reviews",
    "nav.contact": "Contact",

    "hero.title": "Modern. Clean. Premium.",
    "hero.text": "A luxury barbershop experience: clean fades, sharp beard, and a relaxed vibe.",
    "hero.pill1": "Clean & hygienic",
    "hero.pill2": "Professional cuts",
    "hero.pill3": "Premium look",
    "hero.cardText": "Top service, sharp results, relaxed atmosphere.",
    "hero.openToday": "Open today",
    "hero.scroll": "Scroll",

    "cta.bookNow": "Book now",
    "cta.callNow": "Call now",
    "cta.whatsapp": "WhatsApp",

    "about.title": "About us",
    "about.subtitle": "Professional cuts, clean results, and a relaxed atmosphere.",
    "about.p1": "At Star Kapper, you are at the right place for haircuts, shaving, styling, hair care, and more. We welcome men, women, and children, always aiming for a fresh look that suits your style.",
    "about.p2": "Our salon is located in Assen and is easy to reach. You are welcome with or without an appointment. Quality, hygiene, and sharp results are always our top priority.",
    "about.f1t": "Hygiene first",
    "about.f1d": "Clean workspace & tools.",
    "about.f2t": "Experience & craft",
    "about.f2d": "Modern techniques & advice.",
    "about.f3t": "Relaxed vibe",
    "about.f3d": "Comfortable chairs & lighting.",
    "about.cta": "View services",

    "services.title": "Services & Prices",
    "services.subtitle": "Choose a service and book instantly.",
    "services.book": "Book",
    "services.notice": "Notice for ladies: please send a clear description or example photo via WhatsApp.",

    "services.s1t": "Men’s haircut",
    "services.s1d": "Clean cut with a neat finish.",
    "services.s1p": "€ 20",

    "services.s2t": "Men’s beard shave",
    "services.s2d": "Smooth and clean shave.",
    "services.s2p": "€ 10",

    "services.s3t": "Hair & beard",
    "services.s3d": "Complete look with a sharp finish.",
    "services.s3p": "€ 25",

    "services.s4t": "Kids",
    "services.s4d": "Gentle and child-friendly haircut.",
    "services.s4p": "€ 10",

    "services.s5t": "Clipper cut",
    "services.s5d": "Fast and clean with clippers.",
    "services.s5p": "€ 15",

    "services.s6t": "Women’s haircut",
    "services.s6d": "Cut tailored to your preference.",
    "services.s6p": "€ 25",

    "services.s7t": "Wash, cut & blow-dry",
    "services.s7d": "Wash + cut + blow-dry.",
    "services.s7p": "€ 29",

    "services.s8t": "Hair coloring",
    "services.s8d": "Custom color with a neat result.",
    "services.s8p": "€ 19",

    "services.s11t": "Women’s hair coloring",
    "services.s11d": "Hair coloring for women (on request).",
    "services.s11p": "€ 25",

    "services.s9t": "Face waxing",
    "services.s9d": "Quick, gentle and clean.",
    "services.s9p": "€ 10",

    "services.s10t": "Face massage",
    "services.s10d": "Relaxation and a refreshing touch.",
    "services.s10p": "€ 15",

    "services.s12t": "Other",


    "gallery.title": "Gallery",


    "reviews.title": "Reviews",
    "reviews.subtitle": "Clients come back for quality, cleanliness, and results.",
    "reviews.outOf": "/5",
    "reviews.note": "Based on customer reviews.",
    "reviews.r1": "“Super clean and professional. Fade is perfect.”",
    "reviews.r2": "“Great vibe, clean shop, and top service.”",
    "reviews.r3": "“Beard trim is sharp — exactly how I want it.”",
    "reviews.cta": "Leave a review",

    /* Hours */
    "hours.title": "Official opening hours",
    "hours.subtitle": "See our regular opening hours below.",
    "hours.cardLabel": "Opening hours",
    "hours.monDay": "Monday",
    "hours.monTime": "10:00–18:00",
    "hours.tueDay": "Tuesday",
    "hours.tueTime": "10:00–18:00",
    "hours.wedDay": "Wednesday",
    "hours.wedTime": "10:00–18:00",
    "hours.thuDay": "Thursday",
    "hours.thuTime": "10:00–18:00",
    "hours.friDay": "Friday",
    "hours.friTime": "10:00–20:00",
    "hours.satDay": "Saturday",
    "hours.satTime": "10:00–20:00",
    "hours.sunDay": "Sunday",
    "hours.sunTime": "check Google Maps for opening hours",

    "contact.title": "Contact & Location",
    "contact.subtitle": "Book fast via WhatsApp or call directly. Find the route on the map below.",
    "contact.addressT": "Address",
    "contact.addressV": "Zaagmolen, 9401 BR Assen",
    "contact.phoneT": "Phone",
    "contact.waT": "WhatsApp",
    "contact.waLink": "Chat via WhatsApp",
    "contact.formTitle": "Quick booking / message",
    "contact.mapNote": "Map not loading? Open the route in Google Maps.",
    "contact.openMap": "Open map",
    "contact.socialTitle": "Follow us on",


    "form.nameLabel": "Name",
    "form.serviceLabel": "Service",
    "form.messageLabel": "Message",
    "form.send": "Send",
    "form.note": "*After sending, WhatsApp opens with a ready message (no server needed).",
    "form.namePh": "Name",
    "form.messagePh": "Message...",

    "footer.tag": "Barbershop • Assen",
    "footer.rights": "All rights reserved.",
    "footer.poweredText": "Powered by"

  },

  ar: {
    "lang.title": "اللغة",
    "lang.nl": "هولندية",
    "lang.en": "إنجليزية",
    "lang.ar": "العربية",

    "brand.tag": "صالون حلاقة • آسن",
    "meta.call": "اتصل",
    "meta.whatsapp": "واتساب",
    "meta.addressLine": "العنوان: Zaagmolen, 9401 BR Assen، آسن",
    "meta.opening": "ساعات العمل: الإثنين–السبت 10:00–18:00",

    "nav.home": "الرئيسية",
    "nav.about": "من نحن",
    "nav.services": "الخدمات",
    "nav.gallery": "المعرض",
    "nav.reviews": "التقييمات",
    "nav.contact": "تواصل",

    "hero.title": "عصري. نظيف. فاخر.",
    "hero.text": "تجربة حلاقة فاخرة: فيدات نظيفة، لحية مرتبة، وأجواء هادئة.",
    "hero.pill1": "نظافة وتعقيم",
    "hero.pill2": "حلاقة احترافية",
    "hero.pill3": "مظهر فاخر",
    "hero.cardText": "خدمة ممتازة ونتيجة نظيفة وأجواء مريحة.",
    "hero.openToday": "مفتوح اليوم",
    "hero.scroll": "مرر للأسفل",

    "cta.bookNow": "احجز الآن",
    "cta.callNow": "اتصل الآن",
    "cta.whatsapp": "واتساب",

    "about.title": "من نحن",
    "about.subtitle": "قصّات احترافية، نتائج نظيفة، وأجواء مريحة.",
    "about.p1": "في صالون النجم نقدم خدمات قص الشعر، الحلاقة، التصفيف، والعناية بالشعر وأكثر. نرحب بالرجال والنساء والأطفال ونحرص دائمًا على مظهر أنيق يناسب ذوقك.",
    "about.p2": "يقع صالوننا في آسن وسهل الوصول إليه. يمكنك الحجز مسبقًا، كما يمكنك الحضور بدون موعد. الجودة، النظافة، والنتائج المتقنة هي أولويتنا دائمًا.",
    "about.f1t": "النظافة أولاً",
    "about.f1d": "مكان وأدوات نظيفة دائمًا.",
    "about.f2t": "خبرة واحتراف",
    "about.f2d": "تقنيات حديثة ونصائح مناسبة.",
    "about.f3t": "أجواء مريحة",
    "about.f3d": "كراسي مريحة وإضاءة جميلة.",
    "about.cta": "شاهد الخدمات",

    "services.title": "الخدمات والأسعار",
    "services.subtitle": "اختر الخدمة واحجز مباشرة.",
    "services.book": "احجز",
    "services.notice": "تنبيه للسيدات: يرجى إرسال وصف واضح أو صورة توضيحية لطريقة الحلاقة أو العناية بالشعر عبر واتساب.",

    "services.s1t": "قص شعر رجالي",
    "services.s1d": "قص نظيف ولمسة مرتبة",
    "services.s1p": "€ 20",

    "services.s2t": "حلاقة ذقن رجالي",
    "services.s2d": "حلاقة ناعمة ونظيفة",
    "services.s2p": "€ 10",

    "services.s3t": "شعر ولحية",
    "services.s3d": "لوك كامل ولمسة نظيفة",
    "services.s3p": "€ 25",

    "services.s4t": "أطفال",
    "services.s4d": "حلاقة لطيفة وآمنة",
    "services.s4p": "€ 10",

    "services.s5t": "حلاقة بالماكينة",
    "services.s5d": "سريعة ومرتبة بالماكينة",
    "services.s5p": "€ 15",

    "services.s6t": "قص شعر نسائي",
    "services.s6d": "قص حسب رغبتك",
    "services.s6p": "€ 25",

    "services.s7t": "غسل وقص وسشوار",
    "services.s7d": "غسل + قص + سشوار",
    "services.s7p": "€ 29",

    "services.s8t": "صبغ الشعر",
    "services.s8d": "لون مناسب ونتيجة نظيفة",
    "services.s8p": "€ 19",

    "services.s11t": "صبغ السيدات",
    "services.s11d": "صبغ شعر للسيدات (حسب الطلب)",
    "services.s11p": "€ 25",

    "services.s9t": "شمع الوجه",
    "services.s9d": "تنظيف سريع ولطيف",
    "services.s9p": "€ 10",

    "services.s10t": "مساج الوجه",
    "services.s10d": "استرخاء ولمسة منعشة",
    "services.s10p": "€ 15",
    "services.s12t": "أخرى",



    "gallery.title": "معرض الصور",

    "reviews.title": "آراء العملاء",
    "reviews.subtitle": "الزبائن يرجعون للجودة والنظافة والنتيجة.",
    "reviews.outOf": "/5",
    "reviews.note": "بناءً على تقييمات العملاء.",
    "reviews.r1": "“نظيف جدًا واحترافي. الفيد ممتاز.”",
    "reviews.r2": "“أجواء جميلة، محل نظيف وخدمة رائعة.”",
    "reviews.r3": "“تهذيب اللحية مرتب جدًا مثل ما أريد.”",
    "reviews.cta": "اكتب تقييمك",

    /* Hours */
    "hours.title": "أوقات العمل الرسمية",
    "hours.subtitle": "اطّلع على أوقات العمل الرسمية أدناه.",
    "hours.cardLabel": "ساعات العمل",
    "hours.monDay": "الاثنين",
    "hours.monTime": "من 10:00 إلى 18:00",
    "hours.tueDay": "الثلاثاء",
    "hours.tueTime": "من 10:00 إلى 18:00",
    "hours.wedDay": "الأربعاء",
    "hours.wedTime": "من 10:00 إلى 18:00",
    "hours.thuDay": "الخميس",
    "hours.thuTime": "من 10:00 إلى 18:00",
    "hours.friDay": "الجمعة",
    "hours.friTime": "من 10:00 إلى 20:00",
    "hours.satDay": "السبت",
    "hours.satTime": "من 10:00 إلى 20:00",
    "hours.sunDay": "الأحد",
    "hours.sunTime": "راجع خرائط Google لمعرفة أوقات العمل",

    "contact.title": "التواصل والموقع",
    "contact.subtitle": "احجز عبر واتساب أو اتصل مباشرة. تجد الموقع في الخريطة بالأسفل.",
    "contact.addressT": "العنوان",
    "contact.addressV": "Zaagmolen, 9401 BR Assen",
    "contact.phoneT": "الهاتف",
    "contact.waT": "واتساب",
    "contact.waLink": "تواصل عبر واتساب",
    "contact.formTitle": "حجز سريع / رسالة",
    "contact.mapNote": "إذا لم تعمل الخريطة، افتح الموقع في خرائط Google.",
    "contact.openMap": "فتح الخريطة",
    "contact.socialTitle": "تابعنا على",

    "form.nameLabel": "الاسم",
    "form.serviceLabel": "الخدمة",
    "form.messageLabel": "الرسالة",
    "form.send": "إرسال",
    "form.note": "*بعد الإرسال سيتم فتح واتساب برسالة جاهزة (بدون سيرفر).",
    "form.namePh": "اكتب اسمك",
    "form.messagePh": "اكتب رسالتك...",

    "footer.tag": "صالون حلاقة • آسن",
    "footer.rights": "جميع الحقوق محفوظة.",
    "footer.poweredText": "تم التطوير بواسطة"

  }
};

/* =========================
APPLY LANGUAGE
========================= */
function applyLang(lang) {
  const isRTL = lang === "ar";

  document.documentElement.lang = lang;
  document.documentElement.dir = isRTL ? "rtl" : "ltr";

  // label on navbar
  if (langLabel) langLabel.textContent = lang.toUpperCase();

  // data-i18n -> textContent
  qsa("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const value = i18n?.[lang]?.[key];
    if (typeof value === "string") el.textContent = value;
  });

  // placeholders
  qsa("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    const value = i18n?.[lang]?.[key];
    if (typeof value === "string") el.setAttribute("placeholder", value);
  });

  // store
  localStorage.setItem("lang", lang);
}

/* =========================
  INIT LANGUAGE
  - Default NL
========================= */
const savedLang = localStorage.getItem("lang") || "nl";
applyLang(savedLang);

/* =========================
  CLICK EVENTS (Navbar menu items)
========================= */
qsa(".lang__item").forEach(btn => {
  btn.addEventListener("click", () => {
    const { lang } = btn.dataset;
    applyLang(lang);
    if (langMenu) langMenu.classList.remove("active");
  });
});

/* mobile quick buttons */
qsa(".langQuick").forEach(btn => {
  btn.addEventListener("click", () => {
    const { lang } = btn.dataset;
    applyLang(lang);
  });
});

/* =========================
  YEAR
========================= */
const yearEl = qs("#year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* =========================
QUICK FORM -> WHATSAPP (translated message)
========================= */
const form = qs("#quickForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const lang = document.documentElement.lang || "nl";

    const name = qs("#name")?.value?.trim() || "";
    const serviceSelect = qs("#service");
    const service = serviceSelect ? serviceSelect.options[serviceSelect.selectedIndex].text : "";
    const msg = qs("#msg")?.value?.trim() || "";

    // Build message by language
    let text = "";
    if (lang === "ar") {
      text =
        `الاسم: ${name}\n` +
        `الخدمة: ${service}\n` +
        `الرسالة: ${msg}`;
    } else if (lang === "en") {
      text =
        `Name: ${name}\n` +
        `Service: ${service}\n` +
        `Message: ${msg}`;
    } else {
      text =
        `Naam: ${name}\n` +
        `Dienst: ${service}\n` +
        `Bericht: ${msg}`;
    }

    const phone = "31685254263"; // <-- ضع رقمك هنا بدون +
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  });
}
