import { O as Observer, S as SearchRiseSet, B as Body, a as SearchAltitude, e as e_tilt, A as AstroTime, b as SunPosition, E as EclipticGeoMoon, c as SearchLocalSolarEclipse, N as NextLocalSolarEclipse, d as SearchGlobalSolarEclipse, f as NextGlobalSolarEclipse, g as SearchLunarEclipse, h as NextLunarEclipse, M as MakeTime, i as Equator, H as Horizon, j as SiderealTime, G as GeoVector, k as Ecliptic, l as HelioVector, m as EclipseKind, R as RotateVector, n as Rotation_EQJ_ECT, o as AngleFromSun } from "./vendor-astronomy-C8JZdkQu.js";
const MONTH_CATEGORIES_HI = [
  { month: 1, monthNumber: 1, shortHi: "जनवरी", labelHi: "जनवरी (माह १)", vedicMaasHi: "पौष – माघ", icon: "sun" },
  { month: 2, monthNumber: 2, shortHi: "फरवरी", labelHi: "फरवरी (माह २)", vedicMaasHi: "माघ – फाल्गुन", icon: "trishul" },
  { month: 3, monthNumber: 3, shortHi: "मार्च", labelHi: "मार्च (माह ३)", vedicMaasHi: "फाल्गुन – चैत्र", icon: "palette" },
  { month: 4, monthNumber: 4, shortHi: "अप्रैल", labelHi: "अप्रैल (माह ४)", vedicMaasHi: "चैत्र – वैशाख", icon: "dhanush" },
  { month: 5, monthNumber: 5, shortHi: "मई", labelHi: "मई (माह ५)", vedicMaasHi: "वैशाख – ज्येष्ठ", icon: "ratna" },
  { month: 6, monthNumber: 6, shortHi: "जून", labelHi: "जून (माह ६)", vedicMaasHi: "ज्येष्ठ – आषाढ़", icon: "wind" },
  { month: 7, monthNumber: 7, shortHi: "जुलाई", labelHi: "जुलाई (माह ७)", vedicMaasHi: "आषाढ़ – श्रावण", icon: "lotus" },
  { month: 8, monthNumber: 8, shortHi: "अगस्त", labelHi: "अगस्त (माह ८)", vedicMaasHi: "श्रावण – भाद्रपद", icon: "bansuri" },
  { month: 9, monthNumber: 9, shortHi: "सितंबर", labelHi: "सितंबर (माह ९)", vedicMaasHi: "भाद्रपद – आश्विन", icon: "tilak" },
  { month: 10, monthNumber: 10, shortHi: "अक्टूबर", labelHi: "अक्टूबर (माह १०)", vedicMaasHi: "आश्विन – कार्तिक", icon: "lotus" },
  { month: 11, monthNumber: 11, shortHi: "नवंबर", labelHi: "नवंबर (माह ११)", vedicMaasHi: "कार्तिक – मार्गशीर्ष", icon: "diya" },
  { month: 12, monthNumber: 12, shortHi: "दिसंबर", labelHi: "दिसंबर (माह १२)", vedicMaasHi: "मार्गशीर्ष – पौष", icon: "book" },
  { month: 0, monthNumber: 0, shortHi: "मासिक व्रत", labelHi: "मासिक व्रत (हर माह)", vedicMaasHi: "एकादशी • प्रदोष • पूर्णिमा", icon: "om" },
  { month: -7, monthNumber: -7, shortHi: "७ वार थीम", labelHi: "७ वार नित्य थीम (दिन अनुसार)", vedicMaasHi: "रवि • सोम • मंगल • बुध • गुरु • शुक्र • शनि", icon: "sparkles" }
];
const DEFAULT_VEDIC_THEME = {
  id: "default-vedic-royal",
  monthNumber: 0,
  monthLabelHi: "नित्य राजसी थीम",
  nameHi: "सनातन वैदिक स्वर्ण-राजसी थीम (मूल स्वरूप)",
  nameEn: "Default Vedic Royal Spiritual Theme (Original)",
  subDayLabelHi: "नित्य वैदिक पंचांग एवं ज्योतिष दर्शन",
  deityIcon: "om",
  sacredMantra: "ॐ स्वस्ति न इन्द्रो वृद्धश्रवाः स्वस्ति नः पूषा विश्ववेदाः । स्वस्ति नस्तार्क्ष्यो अरिष्टनेमिः स्वस्ति नो बृहस्पतिर्दधातु ॥",
  bannerGreetingHi: "श्री ज्योतिष वैदिक संस्थान — पण्डित जी ऑनलाइन में आपका हार्दिक अभिनन्दन",
  bannerSubtitleHi: "सटीक दृक् गणितीय पंचांग, दैनिक राशिफल, शुभ मुहूर्त एवं डिजिटल मंदिर दर्शन",
  ctaLabelHi: "डिजिटल मंदिर दर्शन",
  ctaTargetTab: "mandir",
  themeClassName: "theme-default-vedic",
  primaryHex: "#581c87",
  accentHex: "#f59e0b",
  glowRgba: "rgba(245, 158, 11, 0.28)",
  headerGradientClass: "from-[#12071f]/95 via-[#180a05]/95 to-[#0c0502]/95",
  headerBorderClass: "border-amber-500/30 shadow-[0_6px_30px_rgba(245,158,11,0.12)]",
  bannerBgClass: "bg-gradient-to-r from-[#240b36]/95 via-[#3b1219]/95 to-[#1f092b]/95",
  bannerBorderClass: "border-amber-500/35",
  badgeClass: "bg-amber-500/20 text-amber-200 border-amber-400/40",
  ctaButtonClass: "bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-stone-950 hover:from-amber-400 hover:to-orange-400 shadow-[0_0_15px_rgba(245,158,11,0.4)]",
  accentTextClass: "text-amber-300",
  priority: 1
};
const SEVEN_VAAR_THEMES = {
  0: {
    id: "day-sunday-surya",
    monthNumber: -7,
    monthLabelHi: "७ वार नित्य थीम",
    nameHi: "रविवार — भगवान श्री सूर्य देव (तेज, यश व आरोग्य)",
    nameEn: "Sunday - Lord Surya Dev (Radiance & Vitality)",
    subDayLabelHi: "रविवार विशेष • भुवन भास्कर सूर्य देव पूजन, गायत्री मंत्र व आदित्य हृदय स्तोत्र",
    deityIcon: "sun",
    sacredMantra: "ॐ घृणिः सूर्याय नमः • ॐ सूर्याय नमः ॥",
    bannerGreetingHi: "रविवार का पावन दिन — भुवन भास्कर भगवान श्री सूर्य नारायण आपके जीवन में आरोग्य, तेज, यश और सकारात्मक ऊर्जा का संचार करें",
    bannerSubtitleHi: "रविवार को तांबे के पात्र से सूर्य देव को कुमकुम-अक्षत युक्त अर्घ्य दें तथा गायत्री मंत्र का जप करें",
    ctaLabelHi: "आज का सूर्योदय व राहुकाल",
    ctaTargetTab: "panchang",
    themeClassName: "theme-day-sunday",
    primaryHex: "#ea580c",
    accentHex: "#fbbf24",
    glowRgba: "rgba(251, 191, 36, 0.35)",
    headerGradientClass: "from-[#290f05]/95 via-[#1a0a03]/95 to-[#0e0501]/95",
    headerBorderClass: "border-amber-500/45 shadow-[0_6px_26px_rgba(245,158,11,0.22)]",
    bannerBgClass: "bg-gradient-to-r from-[#381305] via-[#2a0e04] to-[#1a0902]",
    bannerBorderClass: "border-amber-500/55",
    badgeClass: "bg-amber-500/25 text-amber-100 border-amber-400/60",
    ctaButtonClass: "bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-400 text-stone-950",
    accentTextClass: "text-amber-300",
    priority: 15
  },
  1: {
    id: "day-monday-shiva",
    monthNumber: -7,
    monthLabelHi: "७ वार नित्य थीम",
    nameHi: "सोमवार — देवाधिदेव महादेव शिव एवं चन्द्र देव",
    nameEn: "Monday - Lord Shiva & Chandra Dev (Peace & Calm)",
    subDayLabelHi: "सोमवार विशेष • देवाधिदेव महादेव शिव रुद्राभिषेक, बिल्वपत्र अर्पण व महामृत्युंजय जप",
    deityIcon: "trishul",
    sacredMantra: "ॐ नमः शिवाय • ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम् । उर्वारुकमिव बन्धनान्मृत्योर्मुक्षीय मामृतात् ॥",
    bannerGreetingHi: "सोमवार का पावन दिन — आशुतोष भगवान भोलेनाथ एवं चन्द्र देव आपके जीवन में असीम शांति, शीतलता, आरोग्य और मनोकामना सिद्धि प्रदान करें",
    bannerSubtitleHi: 'सोमवार को शिवलिंग पर शुद्ध जल, गोदुग्ध, श्वेत चंदन व बिल्वपत्र अर्पण करें तथा पंचाक्षरी मंत्र "ॐ नमः शिवाय" का जप करें',
    ctaLabelHi: "डिजिटल शिव मंदिर दर्शन",
    ctaTargetTab: "mandir",
    themeClassName: "theme-day-monday",
    primaryHex: "#0284c7",
    accentHex: "#38bdf8",
    glowRgba: "rgba(56, 189, 248, 0.35)",
    headerGradientClass: "from-[#031c36]/95 via-[#07192b]/95 to-[#020b14]/95",
    headerBorderClass: "border-sky-400/45 shadow-[0_6px_26px_rgba(56,189,248,0.22)]",
    bannerBgClass: "bg-gradient-to-r from-[#08284d] via-[#0b2b52] to-[#041529]",
    bannerBorderClass: "border-sky-400/55",
    badgeClass: "bg-sky-500/25 text-sky-100 border-sky-300/60",
    ctaButtonClass: "bg-gradient-to-r from-sky-400 via-cyan-300 to-teal-300 text-stone-950",
    accentTextClass: "text-sky-200",
    priority: 15
  },
  2: {
    id: "day-tuesday-hanuman",
    monthNumber: -7,
    monthLabelHi: "७ वार नित्य थीम",
    nameHi: "मंगलवार — संकटमोचन श्री हनुमान जी एवं मंगल देव",
    nameEn: "Tuesday - Lord Hanuman & Mangal Dev (Strength & Courage)",
    subDayLabelHi: "मंगलवार विशेष • पवनपुत्र श्री हनुमान जी महाराज, सिंदूर अर्पण, हनुमान चालीसा व सुंदरकांड",
    deityIcon: "dhwaja",
    sacredMantra: "ॐ हं हनुमते नमः • अतुलितबलधामं हेमशैलाभदेहं दनुजवनकृशानुं ज्ञानिनामग्रगण्यम् । सकलगुणनिधानं वानराणामधीशं रघुपतिप्रियभक्तं वातजातं नमामि ॥",
    bannerGreetingHi: "मंगलवार का पावन दिन — संकटमोचन वीर हनुमान जी महाराज आपके समस्त कष्टों, भय, अमंगलों और संकटों का निवारण करें",
    bannerSubtitleHi: "मंगलवार को हनुमान जी को सिंदूर, चमेली का तेल व बूंदी/लड्डू अर्पण करें तथा श्री हनुमान चालीसा अथवा बजरंग बाण का पाठ करें",
    ctaLabelHi: "सम्पूर्ण हनुमान चालीसा पाठ",
    ctaTargetTab: "dharm-gyan",
    themeClassName: "theme-day-tuesday",
    primaryHex: "#dc2626",
    accentHex: "#f97316",
    glowRgba: "rgba(239, 68, 68, 0.35)",
    headerGradientClass: "from-[#300909]/95 via-[#200806]/95 to-[#120302]/95",
    headerBorderClass: "border-red-500/45 shadow-[0_6px_26px_rgba(239,68,68,0.22)]",
    bannerBgClass: "bg-gradient-to-r from-[#450a0a] via-[#330808] to-[#1c0404]",
    bannerBorderClass: "border-red-500/55",
    badgeClass: "bg-red-500/25 text-red-100 border-red-400/60",
    ctaButtonClass: "bg-gradient-to-r from-red-500 via-orange-500 to-amber-400 text-white",
    accentTextClass: "text-orange-300",
    priority: 15
  },
  3: {
    id: "day-wednesday-ganesha",
    monthNumber: -7,
    monthLabelHi: "७ वार नित्य थीम",
    nameHi: "बुधवार — प्रथम पूज्य श्री गणेश जी एवं बुध देव",
    nameEn: "Wednesday - Lord Ganesha & Budha Dev (Wisdom & Prosperity)",
    subDayLabelHi: "बुधवार विशेष • विघ्नहर्ता श्री गणेश जी, दूर्वा दल अर्पण, मोदक भोग व संकटनाशन स्तोत्र",
    deityIcon: "tilak",
    sacredMantra: "ॐ गं गणपतये नमः • वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ । निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥",
    bannerGreetingHi: "बुधवार का पावन दिन — प्रथम पूज्य विघ्नहर्ता भगवान श्री गणेश जी एवं बुध देव आपके कार्यों के समस्त विघ्नों को हरें और सद्बुद्धि प्रदान करें",
    bannerSubtitleHi: "बुधवार को श्री गणेश जी को २१ दूर्वा दल, मोदक अथवा लड्डू अर्पण करें तथा संकटनाशन गणेश स्तोत्र का पाठ करें",
    ctaLabelHi: "डिजिटल गणेश मंदिर दर्शन",
    ctaTargetTab: "mandir",
    themeClassName: "theme-day-wednesday",
    primaryHex: "#059669",
    accentHex: "#10b981",
    glowRgba: "rgba(16, 185, 129, 0.35)",
    headerGradientClass: "from-[#032417]/95 via-[#051c14]/95 to-[#020e0a]/95",
    headerBorderClass: "border-emerald-500/45 shadow-[0_6px_26px_rgba(16,185,129,0.22)]",
    bannerBgClass: "bg-gradient-to-r from-[#064e3b] via-[#043327] to-[#021f18]",
    bannerBorderClass: "border-emerald-400/55",
    badgeClass: "bg-emerald-500/25 text-emerald-100 border-emerald-300/60",
    ctaButtonClass: "bg-gradient-to-r from-emerald-500 via-teal-400 to-yellow-300 text-stone-950",
    accentTextClass: "text-emerald-200",
    priority: 15
  },
  4: {
    id: "day-thursday-vishnu",
    monthNumber: -7,
    monthLabelHi: "७ वार नित्य थीम",
    nameHi: "गुरुवार — भगवान श्री हरि विष्णु एवं देवगुरु बृहस्पति",
    nameEn: "Thursday - Lord Vishnu & Brihaspati Dev (Fortune & Grace)",
    subDayLabelHi: "गुरुवार विशेष • जगत्पालक भगवान श्री हरि विष्णु, पीताम्बर, तुलसी दल व सत्यनारायण कथा",
    deityIcon: "lotus",
    sacredMantra: "ॐ नमो भगवते वासुदेवाय • ॐ बृं बृहस्पतये नमः ॥",
    bannerGreetingHi: "गुरुवार का पावन दिन — जगत्पालक भगवान श्री हरि विष्णु एवं देवगुरु बृहस्पति आपके जीवन में ज्ञान, सौभाग्य, धर्म व ऐश्वर्य की वृद्धि करें",
    bannerSubtitleHi: "गुरुवार को भगवान विष्णु को पीले पुष्प, केला, चना दाल व गुड़ का भोग लगाएं तथा ॐ नमो भगवते वासुदेवाय मंत्र का स्मरण करें",
    ctaLabelHi: "श्री सत्यनारायण कथा व पूजा",
    ctaTargetTab: "dharm-gyan",
    themeClassName: "theme-day-thursday",
    primaryHex: "#d97706",
    accentHex: "#facc15",
    glowRgba: "rgba(250, 204, 21, 0.35)",
    headerGradientClass: "from-[#291b03]/95 via-[#1f1402]/95 to-[#0f0a01]/95",
    headerBorderClass: "border-amber-400/45 shadow-[0_6px_26px_rgba(250,204,21,0.22)]",
    bannerBgClass: "bg-gradient-to-r from-[#452702] via-[#331c02] to-[#1c0f01]",
    bannerBorderClass: "border-amber-400/55",
    badgeClass: "bg-yellow-500/25 text-yellow-100 border-yellow-300/60",
    ctaButtonClass: "bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 text-stone-950",
    accentTextClass: "text-yellow-300",
    priority: 15
  },
  5: {
    id: "day-friday-lakshmi",
    monthNumber: -7,
    monthLabelHi: "७ वार नित्य थीम",
    nameHi: "शुक्रवार — जगज्जननी माँ महालक्ष्मी एवं माँ दुर्गा",
    nameEn: "Friday - Maa Mahalakshmi & Maa Durga (Wealth & Splendor)",
    subDayLabelHi: "शुक्रवार विशेष • धनदात्री माँ महालक्ष्मी, कमल पुष्प अर्पण, श्री सूक्त व कनकधारा स्तोत्र",
    deityIcon: "lotus",
    sacredMantra: "ॐ श्रीं ह्रीं क्लीं महालक्ष्म्यै नमः • ॐ दुं दुर्गायै नमः ॥",
    bannerGreetingHi: "शुक्रवार का पावन दिन — अष्टलक्ष्मी स्वरूपा माँ महालक्ष्मी एवं माँ भगवती दुर्गा आपके घर-परिवार को सुख, शांति, वैभव और अखंड समृद्धि से परिपूर्ण करें",
    bannerSubtitleHi: "शुक्रवार को माँ महालक्ष्मी को लाल पुष्प, खीर अथवा श्वेत मिष्ठान्न का भोग लगाएं तथा श्री सूक्त व कनकधारा स्तोत्र का पाठ करें",
    ctaLabelHi: "माँ लक्ष्मी व दुर्गा आरती",
    ctaTargetTab: "dharm-gyan",
    themeClassName: "theme-day-friday",
    primaryHex: "#db2777",
    accentHex: "#f472b6",
    glowRgba: "rgba(244, 114, 182, 0.35)",
    headerGradientClass: "from-[#300520]/95 via-[#200315]/95 to-[#10010b]/95",
    headerBorderClass: "border-pink-500/45 shadow-[0_6px_26px_rgba(244,114,182,0.22)]",
    bannerBgClass: "bg-gradient-to-r from-[#4c0533] via-[#380425] to-[#1f0215]",
    bannerBorderClass: "border-pink-400/55",
    badgeClass: "bg-pink-500/25 text-pink-100 border-pink-300/60",
    ctaButtonClass: "bg-gradient-to-r from-pink-500 via-rose-400 to-amber-300 text-stone-950",
    accentTextClass: "text-pink-300",
    priority: 15
  },
  6: {
    id: "day-saturday-shani",
    monthNumber: -7,
    monthLabelHi: "७ वार नित्य थीम",
    nameHi: "शनिवार — कर्मफलदाता शनि देव एवं संकटमोचन",
    nameEn: "Saturday - Lord Shani Dev & Sankatmochan (Justice & Protection)",
    subDayLabelHi: "शनिवार विशेष • न्यायप्रिय शनि देव, सरसों तेल दीप, शनि चालीसा व साढ़ेसाती शांति",
    deityIcon: "scale",
    sacredMantra: "ॐ शं शनैश्चराय नमः • ॐ प्रां प्रीं प्रौं सः शनैश्चराय नमः ॥",
    bannerGreetingHi: "शनिवार का पावन दिन — न्याय के अधिपति कर्मफलदाता शनि देव एवं संकटमोचन हनुमान जी महाराज आपके जीवन से समस्त बाधाओं, भय व पीड़ाओं का निवारण करें",
    bannerSubtitleHi: "शनिवार की संध्या पीपल के वृक्ष अथवा शनि मंदिर में सरसों के तेल का दीपक प्रज्वलित करें तथा श्री शनि चालीसा का पाठ करें",
    ctaLabelHi: "शनि साढ़े साती कैलकुलेटर व उपाय",
    ctaTargetTab: "dharm-gyan",
    themeClassName: "theme-day-saturday",
    primaryHex: "#4f46e5",
    accentHex: "#818cf8",
    glowRgba: "rgba(129, 140, 248, 0.35)",
    headerGradientClass: "from-[#0b0c2a]/95 via-[#0e1026]/95 to-[#040512]/95",
    headerBorderClass: "border-indigo-400/45 shadow-[0_6px_26px_rgba(129,140,248,0.22)]",
    bannerBgClass: "bg-gradient-to-r from-[#17184b] via-[#11133d] to-[#090b24]",
    bannerBorderClass: "border-indigo-400/55",
    badgeClass: "bg-indigo-500/25 text-indigo-100 border-indigo-300/60",
    ctaButtonClass: "bg-gradient-to-r from-indigo-500 via-blue-500 to-amber-300 text-white",
    accentTextClass: "text-indigo-200",
    priority: 15
  }
};
const SEVEN_VAAR_THEMES_LIST = Object.values(SEVEN_VAAR_THEMES);
const FESTIVALS_CONFIG = [
  ...SEVEN_VAAR_THEMES_LIST,
  // ============================================================================
  // माह १ — जनवरी (पौष / माघ): लोहड़ी, मकर संक्रांति, मौनी अमावस्या
  // ============================================================================
  {
    id: "lohri-parv",
    monthNumber: 1,
    monthLabelHi: "जनवरी (पौष-माघ)",
    nameHi: "लोहड़ी एवं अग्नि पूजन महापर्व",
    nameEn: "Lohri & Agni Pujan Parv",
    subDayLabelHi: "पौष संक्रांति पूर्व संध्या • पवित्र अग्नि परिक्रमा एवं तिल-गुड़ अर्पण",
    deityIcon: "havan",
    sacredMantra: "ॐ अग्नये स्वाहा ॥ इदं अग्नये इदं न मम ॥",
    bannerGreetingHi: "लोहड़ी महापर्व की हार्दिक शुभकामनाएं! अग्नि देव आपके घर-परिवार में सुख, समृद्धि और नई ऊर्जा का संचार करें",
    bannerSubtitleHi: "आज सायंकाल पवित्र अग्नि की परिक्रमा कर तिल, गुड़, रेवड़ी व मक्का अर्पित करने से अन्न-धन के भंडार भरे रहते हैं",
    ctaLabelHi: "आज का पंचांग व शुभ चौघड़िया",
    ctaTargetTab: "panchang",
    themeClassName: "theme-lohri-agni",
    primaryHex: "#c2410c",
    accentHex: "#f59e0b",
    glowRgba: "rgba(249, 115, 22, 0.42)",
    headerGradientClass: "from-[#3d1202]/95 via-[#260b02]/95 to-[#120501]/95",
    headerBorderClass: "border-orange-400/50 shadow-[0_6px_30px_rgba(249,115,22,0.26)]",
    bannerBgClass: "bg-gradient-to-r from-[#5c1904] via-[#7c2d12] to-[#451a03]",
    bannerBorderClass: "border-orange-400/60",
    badgeClass: "bg-orange-500/25 text-orange-100 border-orange-300/60",
    ctaButtonClass: "bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-500 text-stone-950",
    accentTextClass: "text-orange-200",
    fixedMonthDays: [{ startMM_DD: "01-13", endMM_DD: "01-13" }],
    priority: 95
  },
  {
    id: "makar-sankranti",
    monthNumber: 1,
    monthLabelHi: "जनवरी (पौष-माघ)",
    nameHi: "मकर संक्रांति एवं उत्तरायण महापर्व",
    nameEn: "Makar Sankranti & Uttarayan",
    subDayLabelHi: "सूर्य धनु से मकर राशि प्रवेश • पवित्र नदी स्नान, खिचड़ी व तिल-गुड़ दान",
    deityIcon: "sun",
    sacredMantra: "ॐ एहि सूर्य सहस्रांशो तेजोराशे जगत्पते । अनुकम्पय मां भक्त्या गृहाणार्घ्यं दिवाकर ॥",
    bannerGreetingHi: "मकर संक्रांति एवं उत्तरायण महापर्व की हार्दिक शुभकामनाएं! सूर्य देव आपके जीवन में तेज, यश और नई ऊर्जा का प्रकाश फैलाएं",
    bannerSubtitleHi: "आज पुण्य काल एवं महापुण्य काल में गंगा स्नान, सूर्य अर्घ्य, तिल-गुड़ व वस्त्र दान से अक्षय पुण्य प्राप्त होता है",
    ctaLabelHi: "मकर संक्रांति पुण्य काल देखें",
    ctaTargetTab: "panchang",
    themeClassName: "theme-makar-sankranti",
    primaryHex: "#b45309",
    accentHex: "#fbbf24",
    glowRgba: "rgba(251, 191, 36, 0.42)",
    headerGradientClass: "from-[#381802]/95 via-[#241002]/95 to-[#120701]/95",
    headerBorderClass: "border-amber-400/50 shadow-[0_6px_30px_rgba(251,191,36,0.26)]",
    bannerBgClass: "bg-gradient-to-r from-[#572204] via-[#78350f] to-[#3f1d04]",
    bannerBorderClass: "border-amber-400/60",
    badgeClass: "bg-amber-500/25 text-amber-100 border-amber-300/60",
    ctaButtonClass: "bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-500 text-stone-950",
    accentTextClass: "text-amber-300",
    fixedMonthDays: [{ startMM_DD: "01-14", endMM_DD: "01-15" }],
    priority: 100
  },
  {
    id: "mauni-amavasya",
    monthNumber: 1,
    monthLabelHi: "जनवरी (पौष-माघ)",
    nameHi: "मौनी अमावस्या (माघी अमावस्या महास्नान)",
    nameEn: "Mauni Amavasya — Magha Snan & Pitru Tarpan",
    subDayLabelHi: "माघ कृष्ण अमावस्या • मौन साधना, गंगा स्नान एवं पितृ तर्पण पर्व",
    deityIcon: "wind",
    sacredMantra: "गंगे च यमुने चैव गोदावरि सरस्वति । नर्मदे सिन्धु कावेरि जलेऽस्मिन् सन्निधिं कुरु ॥",
    bannerGreetingHi: "पावन मौनी अमावस्या की हार्दिक शुभकामनाएं! माँ गंगा एवं पितृ देवताओं की कृपा आपके परिवार पर सदैव बनी रहे",
    bannerSubtitleHi: "आज प्रातः मौन रहकर पवित्र नदी या तीर्थ जल से स्नान, तिल दान व पीपल पूजन करने से समस्त दोष शांत होते हैं",
    ctaLabelHi: "आज का स्नान-दान शुभ मुहूर्त",
    ctaTargetTab: "panchang",
    themeClassName: "theme-mauni-amavasya",
    primaryHex: "#1e3a8a",
    accentHex: "#38bdf8",
    glowRgba: "rgba(56, 189, 248, 0.38)",
    headerGradientClass: "from-[#071936]/95 via-[#0f172a]/95 to-[#090d16]/95",
    headerBorderClass: "border-sky-400/45 shadow-[0_6px_28px_rgba(56,189,248,0.22)]",
    bannerBgClass: "bg-gradient-to-r from-[#0c234d] via-[#1e293b] to-[#172554]",
    bannerBorderClass: "border-sky-400/55",
    badgeClass: "bg-sky-500/25 text-sky-100 border-sky-300/60",
    ctaButtonClass: "bg-gradient-to-r from-sky-400 via-cyan-300 to-amber-400 text-stone-950",
    accentTextClass: "text-sky-200",
    vedicRules: [{ hinduMaas: "माघ", tithiIndices: [30] }],
    priority: 95
  },
  // ============================================================================
  // माह २ — फरवरी (माघ / फाल्गुन): वसंत पंचमी, माघी पूर्णिमा, महाशिवरात्रि
  // ============================================================================
  {
    id: "vasant-panchami",
    monthNumber: 2,
    monthLabelHi: "फरवरी (माघ-फाल्गुन)",
    nameHi: "वसंत पंचमी एवं माँ सरस्वती पूजन",
    nameEn: "Vasant Panchami — Saraswati Puja",
    subDayLabelHi: "माघ शुक्ल पंचमी • विद्यारंभ संस्कार, वीणावादिनी पूजन एवं अबूझ शुभ मुहूर्त",
    deityIcon: "veena",
    sacredMantra: "या कुन्देन्दुतुषारहारधवला या शुभ्रवस्त्रावृता, या वीणावरदण्डमण्डितकरा या श्वेतपद्मासना । या ब्रह्माच्युतशंकरप्रभृतिभिर्देवैः सदा वन्दिता, सा मां पातु सरस्वती भगवती निःशेषजाड्यापहा ॥",
    bannerGreetingHi: "वसंत पंचमी एवं सरस्वती पूजा की हार्दिक शुभकामनाएं! माँ शारदा आपको ज्ञान, विद्या, विवेक और कला का आशीर्वाद दें",
    bannerSubtitleHi: "वसंत पंचमी अबूझ मुहूर्त है — आज विद्यारंभ, पुस्तक-कलम पूजन, नामकरण व शुभ संस्कारों के लिए सर्वश्रेष्ठ दिन है",
    ctaLabelHi: "शिशु नामकरण व शुभ मुहूर्त देखें",
    ctaTargetTab: "dharm-gyan",
    themeClassName: "theme-vasant-basanti",
    primaryHex: "#a16207",
    accentHex: "#facc15",
    glowRgba: "rgba(250, 204, 21, 0.45)",
    headerGradientClass: "from-[#362402]/95 via-[#261902]/95 to-[#120b01]/95",
    headerBorderClass: "border-yellow-400/55 shadow-[0_6px_30px_rgba(250,204,21,0.28)]",
    bannerBgClass: "bg-gradient-to-r from-[#573a04] via-[#713f12] to-[#422006]",
    bannerBorderClass: "border-yellow-400/65",
    badgeClass: "bg-yellow-400/30 text-yellow-100 border-yellow-300/60",
    ctaButtonClass: "bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500 text-stone-950",
    accentTextClass: "text-yellow-200",
    vedicRules: [{ hinduMaas: "माघ", tithiIndices: [5] }],
    priority: 98
  },
  {
    id: "maghi-purnima",
    monthNumber: 2,
    monthLabelHi: "फरवरी (माघ-फाल्गुन)",
    nameHi: "माघी पूर्णिमा एवं सत्यनारायण महापूजन",
    nameEn: "Maghi Purnima Mahaparv",
    subDayLabelHi: "माघ शुक्ल पूर्णिमा • कल्पवास समापन, पवित्र तीर्थ स्नान व श्री हरि पूजन",
    deityIcon: "full-moon",
    sacredMantra: "ॐ नमो भगवते वासुदेवाय ॥ शान्ताकारं भुजगशयनं पद्मनाभं सुरेशं विश्वाधारं गगनसदृशं मेघवर्णं शुभाङ्गम् । लक्ष्मीकान्तं कमलनयनं योगिभिर्ध्यानगम्यं वन्दे विष्णुं भवभयहरं सर्वलोकैकनाथम् ॥",
    bannerGreetingHi: "पावन माघी पूर्णिमा की हार्दिक शुभकामनाएं! भगवान श्री सत्यनारायण एवं माँ लक्ष्मी आपके घर सुख-शांति प्रदान करें",
    bannerSubtitleHi: "माघ पूर्णिमा पर प्रयागराज संगम स्नान, सत्यनारायण कथा श्रवण व चंद्र अर्घ्य से अखंड पुण्य की प्राप्ति होती है",
    ctaLabelHi: "श्री हरि विष्णु मंदिर दर्शन",
    ctaTargetTab: "mandir",
    themeClassName: "theme-maghi-purnima",
    primaryHex: "#7c2d12",
    accentHex: "#fde047",
    glowRgba: "rgba(253, 224, 71, 0.4)",
    headerGradientClass: "from-[#2e1703]/95 via-[#1c1026]/95 to-[#0c0712]/95",
    headerBorderClass: "border-yellow-300/50 shadow-[0_6px_28px_rgba(253,224,71,0.24)]",
    bannerBgClass: "bg-gradient-to-r from-[#451a03] via-[#581c87] to-[#3b1504]",
    bannerBorderClass: "border-yellow-300/60",
    badgeClass: "bg-yellow-400/25 text-yellow-100 border-yellow-300/60",
    ctaButtonClass: "bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-400 text-stone-950",
    accentTextClass: "text-yellow-200",
    vedicRules: [{ hinduMaas: "माघ", tithiIndices: [15] }],
    priority: 94
  },
  {
    id: "maha-shivratri",
    monthNumber: 2,
    monthLabelHi: "फरवरी (माघ-फाल्गुन)",
    nameHi: "महाशिवरात्रि महापर्व",
    nameEn: "Maha Shivratri Mahaparv",
    subDayLabelHi: "शिव-शक्ति मिलन महापर्व • चार पहर रुद्राभिषेक एवं निशीथ काल पूजन",
    deityIcon: "trishul",
    sacredMantra: "ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम् । उर्वारुकमिव बन्धनान्मृत्योर्मुक्षीय मामृतात् ॥",
    bannerGreetingHi: "महाशिवरात्रि की हार्दिक शुभकामनाएं! देवाधिदेव महादेव और माँ पार्वती आपकी समस्त मनोकामनाएं पूर्ण करें",
    bannerSubtitleHi: "आज शिवलिंग पर जल, बिल्वपत्र, भस्म अर्पण एवं महामृत्युंजय मंत्र के जाप से अनंत पुण्य फल की प्राप्ति होती है",
    ctaLabelHi: "डिजिटल शिव रुद्राभिषेक करें",
    ctaTargetTab: "mandir",
    themeClassName: "theme-maha-shivratri",
    primaryHex: "#1e3a8a",
    accentHex: "#38bdf8",
    glowRgba: "rgba(56, 189, 248, 0.42)",
    headerGradientClass: "from-[#071636]/95 via-[#0f172a]/95 to-[#090d16]/95",
    headerBorderClass: "border-sky-400/50 shadow-[0_6px_32px_rgba(56,189,248,0.28)]",
    bannerBgClass: "bg-gradient-to-r from-[#0c234d] via-[#1e1b4b] to-[#172554]",
    bannerBorderClass: "border-sky-400/60",
    badgeClass: "bg-sky-500/25 text-sky-200 border-sky-300/60",
    ctaButtonClass: "bg-gradient-to-r from-sky-400 via-cyan-300 to-amber-400 text-stone-950",
    accentTextClass: "text-sky-300",
    dateRanges: [
      { start: "2026-02-15", end: "2026-02-16" },
      { start: "2027-03-06", end: "2027-03-06" }
    ],
    vedicRules: [{ hinduMaas: "फाल्गुन", tithiIndices: [29] }],
    priority: 105
  },
  // ============================================================================
  // माह ३ — मार्च (फाल्गुन / चैत्र): फुलेरा दूज, २-दिवसीय होली, चैत्र नवरात्रि, राम नवमी
  // ============================================================================
  {
    id: "phulera-dooj",
    monthNumber: 3,
    monthLabelHi: "मार्च (फाल्गुन-चैत्र)",
    nameHi: "फुलेरा दूज (ब्रज पुष्प होली एवं अबूझ मुहूर्त)",
    nameEn: "Phulera Dooj — Abujh Shubh Muhurat",
    subDayLabelHi: "फाल्गुन शुक्ल द्वितीया • राधा-कृष्ण पुष्प श्रृंगार एवं विवाह अबूझ मुहूर्त",
    deityIcon: "lotus",
    sacredMantra: "ॐ क्लीं कृष्णाय गोविन्दाय गोपीजनवल्लभाय स्वाहा ॥",
    bannerGreetingHi: "फुलेरा दूज के पावन पर्व की हार्दिक शुभकामनाएं! श्री राधा-माधव आपके जीवन को प्रेम व खुशियों के फूलों से महकाएं",
    bannerSubtitleHi: "फुलेरा दूज वर्ष का पूर्ण दोष-मुक्त अबूझ मुहूर्त है — आज विवाह, गृह प्रवेश व नवीन व्यापार आरंभ करना अत्यंत शुभ है",
    ctaLabelHi: "शुभ विवाह व वाहन मुहूर्त देखें",
    ctaTargetTab: "dharm-gyan",
    themeClassName: "theme-phulera-dooj",
    primaryHex: "#be185d",
    accentHex: "#facc15",
    glowRgba: "rgba(236, 72, 153, 0.4)",
    headerGradientClass: "from-[#3d0722]/95 via-[#260814]/95 to-[#120408]/95",
    headerBorderClass: "border-pink-400/50 shadow-[0_6px_28px_rgba(236,72,153,0.25)]",
    bannerBgClass: "bg-gradient-to-r from-[#590829] via-[#831843] to-[#451a03]",
    bannerBorderClass: "border-pink-400/60",
    badgeClass: "bg-pink-500/25 text-pink-100 border-pink-300/60",
    ctaButtonClass: "bg-gradient-to-r from-pink-400 via-amber-300 to-yellow-400 text-stone-950",
    accentTextClass: "text-pink-200",
    vedicRules: [{ hinduMaas: "फाल्गुन", tithiIndices: [2] }],
    priority: 95
  },
  {
    id: "choti-holi",
    monthNumber: 3,
    monthLabelHi: "मार्च (फाल्गुन-चैत्र)",
    nameHi: "छोटी होली — होलिका दहन महापर्व",
    nameEn: "Choti Holi — Holika Dahan (Holi Day 1)",
    subDayLabelHi: "२-दिवसीय होली महापर्व • दिवस १: फाल्गुन पूर्णिमा एवं होलिका दहन",
    deityIcon: "havan",
    sacredMantra: "असृक्पाभयसंत्रस्तैः कृता त्वं होलि बालिशैः । अतस्त्वां पूजायिष्यामि भूते भूतिप्रदा भव ॥",
    bannerGreetingHi: "छोटी होली एवं होलिका दहन की हार्दिक शुभकामनाएं! अग्नि देव आपके समस्त कष्टों, रोगों व नकारात्मकता का दहन करें",
    bannerSubtitleHi: "आज भद्रा रहित प्रदोष काल में होलिका पूजन, परिक्रमा एवं नई फसल (आखत) अर्पण का परम शुभ मुहूर्त है",
    ctaLabelHi: "होलिका दहन शुभ मुहूर्त देखें",
    ctaTargetTab: "panchang",
    themeClassName: "theme-choti-holi",
    primaryHex: "#c2410c",
    accentHex: "#f97316",
    glowRgba: "rgba(249, 115, 22, 0.45)",
    headerGradientClass: "from-[#3d0e02]/95 via-[#2e0918]/95 to-[#14040a]/95",
    headerBorderClass: "border-orange-500/50 shadow-[0_6px_30px_rgba(249,115,22,0.28)]",
    bannerBgClass: "bg-gradient-to-r from-[#571204] via-[#7c2d12] to-[#580c2f]",
    bannerBorderClass: "border-orange-400/60",
    badgeClass: "bg-orange-500/25 text-orange-200 border-orange-300/60",
    ctaButtonClass: "bg-gradient-to-r from-orange-400 via-amber-500 to-rose-500 text-stone-950",
    accentTextClass: "text-orange-300",
    dateRanges: [
      { start: "2026-03-03", end: "2026-03-03" },
      { start: "2027-03-22", end: "2027-03-22" }
    ],
    vedicRules: [{ hinduMaas: "फाल्गुन", tithiIndices: [15] }],
    priority: 100
  },
  {
    id: "badi-holi",
    monthNumber: 3,
    monthLabelHi: "मार्च (फाल्गुन-चैत्र)",
    nameHi: "बड़ी होली — रंगवाली धुलेंडी महापर्व",
    nameEn: "Badi Rangwali Holi — Dhulandi (Holi Day 2)",
    subDayLabelHi: "२-दिवसीय होली महापर्व • दिवस २: रंगोत्सव, गुलाल एवं बसंत उत्सव",
    deityIcon: "palette",
    sacredMantra: "ॐ नमो भगवते वासुदेवाय ॥ राधे-कृष्ण गोविन्द गोपाल नन्दलाल ॥",
    bannerGreetingHi: "रंगों के महापर्व बड़ी होली (धुलेंडी) की आपको एवं आपके पूरे परिवार को रंगभरी मंगल शुभकामनाएं!",
    bannerSubtitleHi: "राधा-माधव के प्रेम, आनंद और सौहार्द के पावन रंग आपके जीवन में सुख-समृद्धि व नई ऊर्जा का संचार करें",
    ctaLabelHi: "राधा-कृष्ण मंदिर में गुलाल अर्पित करें",
    ctaTargetTab: "mandir",
    themeClassName: "theme-badi-holi",
    primaryHex: "#db2777",
    accentHex: "#f59e0b",
    glowRgba: "rgba(236, 72, 153, 0.45)",
    headerGradientClass: "from-[#4a042e]/95 via-[#2e1042]/95 to-[#082419]/95",
    headerBorderClass: "border-pink-400/55 shadow-[0_8px_34px_rgba(236,72,153,0.3)]",
    bannerBgClass: "bg-gradient-to-r from-[#701a4c] via-[#86198f] to-[#9a3412]",
    bannerBorderClass: "border-pink-400/65",
    badgeClass: "bg-pink-500/30 text-pink-100 border-pink-300/60",
    ctaButtonClass: "bg-gradient-to-r from-pink-400 via-amber-300 to-emerald-400 text-stone-950",
    accentTextClass: "text-pink-200",
    dateRanges: [
      { start: "2026-03-04", end: "2026-03-04" },
      { start: "2027-03-23", end: "2027-03-23" }
    ],
    vedicRules: [{ hinduMaas: "चैत्र", tithiIndices: [16] }],
    priority: 105
  },
  {
    id: "chaitra-navratri",
    monthNumber: 3,
    monthLabelHi: "मार्च (फाल्गुन-चैत्र)",
    nameHi: "चैत्र नवरात्रि एवं हिन्दू नववर्ष (विक्रम संवत)",
    nameEn: "Chaitra Navratri & Hindu Navvarsh",
    subDayLabelHi: "नव संवत्सर शुभारंभ • घटस्थापना एवं माँ शक्ति की नौ दिवसीय आराधना",
    deityIcon: "dhwaja",
    sacredMantra: "ॐ जयन्ती मंगला काली भद्रकाली कपालिनी । दुर्गा क्षमा शिवा धात्री स्वाहा स्वधा नमोऽस्तु ते ॥",
    bannerGreetingHi: "चैत्र नवरात्रि एवं भारतीय नव संवत्सर की हार्दिक शुभकामनाएं! माँ भगवती आपका नया वर्ष मंगलमय बनाएं",
    bannerSubtitleHi: "आज पंचांग श्रवण, नीम-मिश्री प्रसाद ग्रहण एवं कलश स्थापना से वर्ष भर आरोग्य व सौभाग्य की प्राप्ति होती है",
    ctaLabelHi: "आज का नव संवत्सर पंचांग देखें",
    ctaTargetTab: "panchang",
    themeClassName: "theme-chaitra-navratri",
    primaryHex: "#9f1239",
    accentHex: "#fb923c",
    glowRgba: "rgba(244, 63, 94, 0.42)",
    headerGradientClass: "from-[#470618]/95 via-[#2e090c]/95 to-[#140405]/95",
    headerBorderClass: "border-rose-400/50 shadow-[0_6px_30px_rgba(244,63,94,0.28)]",
    bannerBgClass: "bg-gradient-to-r from-[#690820] via-[#7f1d1d] to-[#571204]",
    bannerBorderClass: "border-rose-400/60",
    badgeClass: "bg-rose-500/25 text-rose-100 border-rose-300/60",
    ctaButtonClass: "bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500 text-stone-950",
    accentTextClass: "text-rose-200",
    dateRanges: [
      { start: "2026-03-19", end: "2026-03-26" },
      { start: "2027-04-07", end: "2027-04-14" }
    ],
    vedicRules: [{ hinduMaas: "चैत्र", tithiIndices: [1, 2, 3, 4, 5, 6, 7, 8] }],
    priority: 95
  },
  {
    id: "ram-navami",
    monthNumber: 3,
    monthLabelHi: "मार्च (फाल्गुन-चैत्र)",
    nameHi: "श्री राम नवमी जन्मोत्सव महापर्व",
    nameEn: "Shri Ram Navami Mahotsav",
    subDayLabelHi: "चैत्र शुक्ल नवमी • भगवान श्री रामचन्द्र जी का पावन प्राकट्योत्सव",
    deityIcon: "dhanush",
    sacredMantra: "राम रामेति रामेति रमे रामे मनोरमे । सहस्रनाम तत्तुल्यं रामनाम वरानने ॥",
    bannerGreetingHi: "श्री राम नवमी महापर्व की कोटि-कोटि शुभकामनाएं! प्रभु श्री राम का आशीर्वाद आपके परिवार पर सदैव बना रहे",
    bannerSubtitleHi: "आज मध्याह्न अभिजित मुहूर्त में श्री राम जन्मोत्सव पूजन, रामरक्षा स्तोत्र पाठ व हवन का विशेष महत्व है",
    ctaLabelHi: "श्री राम मंदिर दर्शन व आरती",
    ctaTargetTab: "mandir",
    themeClassName: "theme-ram-navami",
    primaryHex: "#c2410c",
    accentHex: "#facc15",
    glowRgba: "rgba(249, 115, 22, 0.48)",
    headerGradientClass: "from-[#431407]/95 via-[#2e0d02]/95 to-[#140501]/95",
    headerBorderClass: "border-orange-400/60 shadow-[0_6px_32px_rgba(249,115,22,0.32)]",
    bannerBgClass: "bg-gradient-to-r from-[#6b1d05] via-[#9a3412] to-[#571204]",
    bannerBorderClass: "border-amber-400/65",
    badgeClass: "bg-amber-500/30 text-amber-100 border-amber-300/65",
    ctaButtonClass: "bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 text-stone-950",
    accentTextClass: "text-amber-300",
    dateRanges: [
      { start: "2026-03-27", end: "2026-03-27" },
      { start: "2027-04-15", end: "2027-04-15" }
    ],
    vedicRules: [{ hinduMaas: "चैत्र", tithiIndices: [9] }],
    priority: 105
  },
  // ============================================================================
  // माह ४ — अप्रैल (चैत्र / वैशाख): हनुमान जयंती, बैसाखी/मेष संक्रांति, अक्षय तृतीया
  // ============================================================================
  {
    id: "hanuman-jayanti",
    monthNumber: 4,
    monthLabelHi: "अप्रैल (चैत्र-वैशाख)",
    nameHi: "श्री हनुमान जन्मोत्सव महापर्व (चैत्र पूर्णिमा)",
    nameEn: "Shri Hanuman Janmotsav Mahaparv",
    subDayLabelHi: "चैत्र शुक्ल पूर्णिमा • संकटमोचन पवनपुत्र हनुमान जी का प्राकट्योत्सव",
    deityIcon: "dhwaja",
    sacredMantra: "मनोजवं मारुततुल्यवेगं जितेन्द्रियं बुद्धिमतां वरिष्ठम् । वातात्मजं वानरयूथमुख्यं श्रीरामदूतं शरणं प्रपद्ये ॥",
    bannerGreetingHi: "श्री हनुमान जन्मोत्सव की हार्दिक शुभकामनाएं! बजरंगबली आपके जीवन के समस्त संकट हरकर बल, बुद्धि व तेज प्रदान करें",
    bannerSubtitleHi: "आज सिंदूर चोला अर्पण, सुंदरकांड व हनुमान चालीसा पाठ से शनि दोष एवं समस्त बाधाओं का निवारण होता है",
    ctaLabelHi: "हनुमान चालीसा व आरती पाठ",
    ctaTargetTab: "dharm-gyan",
    themeClassName: "theme-hanuman-jayanti",
    primaryHex: "#c2410c",
    accentHex: "#fb923c",
    glowRgba: "rgba(249, 115, 22, 0.45)",
    headerGradientClass: "from-[#431407]/95 via-[#290b02]/95 to-[#120501]/95",
    headerBorderClass: "border-orange-500/55 shadow-[0_6px_30px_rgba(249,115,22,0.3)]",
    bannerBgClass: "bg-gradient-to-r from-[#6b1d05] via-[#9a3412] to-[#450a0a]",
    bannerBorderClass: "border-orange-400/65",
    badgeClass: "bg-orange-500/30 text-orange-100 border-orange-300/60",
    ctaButtonClass: "bg-gradient-to-r from-orange-400 via-amber-400 to-red-500 text-stone-950",
    accentTextClass: "text-orange-200",
    dateRanges: [
      { start: "2026-04-02", end: "2026-04-02" },
      { start: "2027-04-20", end: "2027-04-20" }
    ],
    vedicRules: [{ hinduMaas: "चैत्र", tithiIndices: [15] }],
    priority: 102
  },
  {
    id: "baisakhi-mesha-sankranti",
    monthNumber: 4,
    monthLabelHi: "अप्रैल (चैत्र-वैशाख)",
    nameHi: "मेष संक्रांति (बैसाखी एवं सौर नववर्ष)",
    nameEn: "Mesha Sankranti & Baisakhi",
    subDayLabelHi: "सूर्य का मेष राशि में प्रवेश • खरमास समाप्ति एवं मांगलिक कार्य प्रारंभ",
    deityIcon: "sprout",
    sacredMantra: "ॐ भास्कराय विद्महे महातेजाय धीमहि तन्नो सूर्यः प्रचोदयात् ॥",
    bannerGreetingHi: "मेष संक्रांति एवं बैसाखी महापर्व की हार्दिक शुभकामनाएं! नई फसल और सूर्य देव का तेज आपके घर खुशहाली लाए",
    bannerSubtitleHi: "आज सूर्य के मेष राशि में प्रवेश के साथ मीन मलमास (खरमास) समाप्त होकर विवाह व शुभ कार्य प्रारंभ होते हैं",
    ctaLabelHi: "आज का संक्रांति पुण्य काल देखें",
    ctaTargetTab: "panchang",
    themeClassName: "theme-mesha-sankranti",
    primaryHex: "#b45309",
    accentHex: "#facc15",
    glowRgba: "rgba(250, 204, 21, 0.4)",
    headerGradientClass: "from-[#381802]/95 via-[#1f1c03]/95 to-[#0f0c01]/95",
    headerBorderClass: "border-amber-400/50 shadow-[0_6px_28px_rgba(250,204,21,0.25)]",
    bannerBgClass: "bg-gradient-to-r from-[#572204] via-[#713f12] to-[#365314]",
    bannerBorderClass: "border-amber-400/60",
    badgeClass: "bg-amber-500/25 text-amber-100 border-amber-300/60",
    ctaButtonClass: "bg-gradient-to-r from-yellow-400 via-amber-400 to-emerald-500 text-stone-950",
    accentTextClass: "text-yellow-200",
    fixedMonthDays: [{ startMM_DD: "04-13", endMM_DD: "04-14" }],
    priority: 95
  },
  {
    id: "akshaya-tritiya",
    monthNumber: 4,
    monthLabelHi: "अप्रैल (चैत्र-वैशाख)",
    nameHi: "अक्षय तृतीया महापर्व (अबूझ मुहूर्त)",
    nameEn: "Akshaya Tritiya — Abujh Shubh Muhurat",
    subDayLabelHi: "वैशाख शुक्ल तृतीया • स्वर्ण क्रय, गृह प्रवेश व विवाह का स्वयं-सिद्ध अबूझ मुहूर्त",
    deityIcon: "kalash",
    sacredMantra: "ॐ नमो भगवते वासुदेवाय ॥ ॐ महालक्ष्म्यै च विद्महे विष्णुपत्न्यै च धीमहि तन्नो लक्ष्मीः प्रचोदयात् ॥",
    bannerGreetingHi: "अक्षय तृतीया एवं भगवान परशुराम जन्मोत्सव की हार्दिक शुभकामनाएं! आपके पुण्य, धन व सौभाग्य का कभी क्षय न हो",
    bannerSubtitleHi: "आज के दिन किया गया जप, दान, स्वर्ण-आभूषण व वाहन क्रय अक्षय (अविनाशी) होकर अनंत गुना फल देता है",
    ctaLabelHi: "वाहन व विवाह शुभ मुहूर्त देखें",
    ctaTargetTab: "dharm-gyan",
    themeClassName: "theme-akshaya-tritiya",
    primaryHex: "#92400e",
    accentHex: "#fbbf24",
    glowRgba: "rgba(251, 191, 36, 0.45)",
    headerGradientClass: "from-[#381802]/95 via-[#260e02]/95 to-[#120601]/95",
    headerBorderClass: "border-yellow-400/55 shadow-[0_6px_30px_rgba(251,191,36,0.28)]",
    bannerBgClass: "bg-gradient-to-r from-[#572004] via-[#78350f] to-[#451a03]",
    bannerBorderClass: "border-yellow-400/60",
    badgeClass: "bg-yellow-400/25 text-yellow-100 border-yellow-300/60",
    ctaButtonClass: "bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 text-stone-950",
    accentTextClass: "text-yellow-300",
    dateRanges: [{ start: "2026-04-19", end: "2026-04-20" }],
    vedicRules: [{ hinduMaas: "वैशाख", tithiIndices: [3] }],
    priority: 100
  },
  // ============================================================================
  // माह ५ — मई (वैशाख / ज्येष्ठ): सीता नवमी, बुद्ध पूर्णिमा, शनि जयंती व वट सावित्री
  // ============================================================================
  {
    id: "sita-navami",
    monthNumber: 5,
    monthLabelHi: "मई (वैशाख-ज्येष्ठ)",
    nameHi: "जानकी जयंती (माँ सीता नवमी महापर्व)",
    nameEn: "Janaki Jayanti — Sita Navami",
    subDayLabelHi: "वैशाख शुक्ल नवमी • जनकनंदिनी माँ सीता का पावन प्राकट्योत्सव",
    deityIcon: "lotus",
    sacredMantra: "श्री जानकी रामाभ्यां नमः ॥ उद्भवस्थितिसंहारकारिणीं क्लेशहारिणीम् । सर्वश्रेयस्करीं सीतां नतोऽहं रामवल्लभाम् ॥",
    bannerGreetingHi: "जानकी जयंती (सीता नवमी) की हार्दिक शुभकामनाएं! माँ सीता एवं प्रभु श्री राम आपके घर में सुख, शांति व अखंड सौभाग्य प्रदान करें",
    bannerSubtitleHi: "आज माँ जानकी व श्री राम की संयुक्त पूजा एवं राम शलाका दर्शन से समस्त मनोकामनाएं सिद्ध होती हैं",
    ctaLabelHi: "श्री राम शलाका प्रश्नावली खोलें",
    ctaTargetTab: "dharm-gyan",
    themeClassName: "theme-sita-navami",
    primaryHex: "#9f1239",
    accentHex: "#fbbf24",
    glowRgba: "rgba(244, 63, 94, 0.4)",
    headerGradientClass: "from-[#470519]/95 via-[#2e090c]/95 to-[#140405]/95",
    headerBorderClass: "border-rose-400/50 shadow-[0_6px_28px_rgba(244,63,94,0.25)]",
    bannerBgClass: "bg-gradient-to-r from-[#690820] via-[#881337] to-[#451a03]",
    bannerBorderClass: "border-rose-400/60",
    badgeClass: "bg-rose-500/25 text-rose-100 border-rose-300/60",
    ctaButtonClass: "bg-gradient-to-r from-amber-400 via-orange-400 to-rose-500 text-stone-950",
    accentTextClass: "text-rose-200",
    vedicRules: [{ hinduMaas: "वैशाख", tithiIndices: [9] }],
    priority: 95
  },
  {
    id: "buddha-purnima",
    monthNumber: 5,
    monthLabelHi: "मई (वैशाख-ज्येष्ठ)",
    nameHi: "वैशाख पूर्णिमा (बुद्ध पूर्णिमा एवं पीपल पूर्णिमा)",
    nameEn: "Vaishakha Buddha Purnima",
    subDayLabelHi: "वैशाख शुक्ल पूर्णिमा • श्री हरि कूर्म जयंती, जल-घट दान एवं पीपल पूजन",
    deityIcon: "full-moon",
    sacredMantra: "ॐ नमो भगवते वासुदेवाय ॥ मूलतो ब्रह्मरूपाय मध्यतो विष्णुरूपिणे । अग्रतः शिवरूपाय वृक्षराजाय ते नमः ॥",
    bannerGreetingHi: "पावन वैशाख (पीपल) पूर्णिमा एवं बुद्ध पूर्णिमा की हार्दिक शुभकामनाएं! आपके जीवन में करुणा, शांति व धर्म का प्रकाश रहे",
    bannerSubtitleHi: "वैशाख पूर्णिमा पर पीपल वृक्ष में जल-दूध अर्पण, जल से भरा घड़ा (प्याऊ) दान व सत्यनारायण पूजन अत्यंत पुण्यदायी है",
    ctaLabelHi: "आज का पूर्णिमा पंचांग देखें",
    ctaTargetTab: "panchang",
    themeClassName: "theme-buddha-purnima",
    primaryHex: "#92400e",
    accentHex: "#fde047",
    glowRgba: "rgba(253, 224, 71, 0.4)",
    headerGradientClass: "from-[#361c02]/95 via-[#1f1603]/95 to-[#0f0b01]/95",
    headerBorderClass: "border-yellow-300/50 shadow-[0_6px_28px_rgba(253,224,71,0.24)]",
    bannerBgClass: "bg-gradient-to-r from-[#451a03] via-[#713f12] to-[#3b1504]",
    bannerBorderClass: "border-yellow-300/60",
    badgeClass: "bg-yellow-400/25 text-yellow-100 border-yellow-300/60",
    ctaButtonClass: "bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-400 text-stone-950",
    accentTextClass: "text-yellow-200",
    vedicRules: [{ hinduMaas: "वैशाख", tithiIndices: [15] }],
    priority: 95
  },
  {
    id: "shani-jayanti-vat-savitri",
    monthNumber: 5,
    monthLabelHi: "मई (वैशाख-ज्येष्ठ)",
    nameHi: "श्री शनि जयंती एवं वट सावित्री अमावस्या व्रत",
    nameEn: "Shani Jayanti & Vat Savitri Vrat",
    subDayLabelHi: "ज्येष्ठ कृष्ण अमावस्या • न्याय के देवता शनिदेव प्राकट्योत्सव एवं वट वृक्ष पूजन",
    deityIcon: "shani",
    sacredMantra: "नीलांजनसमाभासं रविपुत्रं यमाग्रजम् । छायामार्तण्डसंभूतं तं नमामि शनैश्चरम् ॥",
    bannerGreetingHi: "श्री शनि जयंती एवं वट सावित्री व्रत की हार्दिक शुभकामनाएं! कर्मफल दाता शनिदेव आपके समस्त कष्टों व साढ़ेसाती दोष का निवारण करें",
    bannerSubtitleHi: "आज शनिदेव का तैलाभिषेक, पीपल के नीचे सरसों तेल का दीपदान एवं वट वृक्ष की परिक्रमा का विशेष फल है",
    ctaLabelHi: "शनि साढ़ेसाती कैलकुलेटर व उपाय",
    ctaTargetTab: "dharm-gyan",
    themeClassName: "theme-shani-jayanti",
    primaryHex: "#1e1b4b",
    accentHex: "#818cf8",
    glowRgba: "rgba(129, 140, 248, 0.42)",
    headerGradientClass: "from-[#0d0b26]/95 via-[#111827]/95 to-[#090d16]/95",
    headerBorderClass: "border-indigo-400/50 shadow-[0_6px_30px_rgba(129,140,248,0.26)]",
    bannerBgClass: "bg-gradient-to-r from-[#1e1b4b] via-[#312e81] to-[#172554]",
    bannerBorderClass: "border-indigo-400/60",
    badgeClass: "bg-indigo-500/25 text-indigo-100 border-indigo-300/60",
    ctaButtonClass: "bg-gradient-to-r from-indigo-400 via-amber-300 to-amber-500 text-stone-950",
    accentTextClass: "text-indigo-200",
    vedicRules: [{ hinduMaas: "ज्येष्ठ", tithiIndices: [30] }],
    priority: 100
  },
  // ============================================================================
  // माह ६ — जून (ज्येष्ठ / आषाढ़): गंगा दशहरा, निर्जला एकादशी, जगन्नाथ रथ यात्रा
  // ============================================================================
  {
    id: "ganga-dussehra",
    monthNumber: 6,
    monthLabelHi: "जून (ज्येष्ठ-आषाढ़)",
    nameHi: "गंगा दशहरा महापर्व (माँ गंगा अवतरण दिवस)",
    nameEn: "Ganga Dussehra Mahaparv",
    subDayLabelHi: "ज्येष्ठ शुक्ल दशमी • हस्त नक्षत्र में पतितपावनी माँ गंगा का पृथ्वी पर अवतरण",
    deityIcon: "wind",
    sacredMantra: "ॐ नमो गंगायै विश्वरूपिण्यै नारायण्यै नमो नमः ॥ गांगं वारि मनोहारि मुरारिचरणच्युतम् । त्रिपुरारिशिरश्चारि पापहारि पुनातु माम् ॥",
    bannerGreetingHi: "गंगा दशहरा महापर्व की हार्दिक शुभकामनाएं! मोक्षदायिनी माँ गंगा आपके दस प्रकार के पापों व तापों का हरण करें",
    bannerSubtitleHi: "आज गंगा स्नान, गंगा स्तोत्र पाठ एवं १० दीपों व १० वस्तुओं के दान से अक्षय पुण्य की प्राप्ति होती है",
    ctaLabelHi: "चार धाम व तीर्थ दर्शन गाइड",
    ctaTargetTab: "dharm-gyan",
    themeClassName: "theme-ganga-dussehra",
    primaryHex: "#0369a1",
    accentHex: "#38bdf8",
    glowRgba: "rgba(56, 189, 248, 0.42)",
    headerGradientClass: "from-[#052338]/95 via-[#082f49]/95 to-[#06131f]/95",
    headerBorderClass: "border-sky-400/50 shadow-[0_6px_30px_rgba(56,189,248,0.26)]",
    bannerBgClass: "bg-gradient-to-r from-[#0c4a6e] via-[#0369a1] to-[#1e3a8a]",
    bannerBorderClass: "border-sky-300/60",
    badgeClass: "bg-sky-500/25 text-sky-100 border-sky-300/60",
    ctaButtonClass: "bg-gradient-to-r from-sky-300 via-cyan-300 to-amber-400 text-stone-950",
    accentTextClass: "text-sky-200",
    vedicRules: [{ hinduMaas: "ज्येष्ठ", tithiIndices: [10] }],
    priority: 100
  },
  {
    id: "nirjala-ekadashi",
    monthNumber: 6,
    monthLabelHi: "जून (ज्येष्ठ-आषाढ़)",
    nameHi: "निर्जला एकादशी महाव्रत (भीमसेनी एकादशी)",
    nameEn: "Nirjala Ekadashi Mahavrat",
    subDayLabelHi: "ज्येष्ठ शुक्ल एकादशी • वर्ष की २४ एकादशियों के बराबर फल देने वाला सर्वश्रेष्ठ व्रत",
    deityIcon: "kalash",
    sacredMantra: "ॐ नमो भगवते वासुदेवाय ॥ एकादश्यां निराहारः स्थित्वाऽहं परेऽहनि । भोक्ष्यामि पुण्डरीकाक्ष शरणं मे भवाच्युत ॥",
    bannerGreetingHi: "पावन निर्जला एकादशी की हार्दिक शुभकामनाएं! भगवान लक्ष्मी-नारायण आपकी समस्त मनोकामनाएं पूर्ण करें",
    bannerSubtitleHi: "आज जल से भरा कलश, मीठा शरबत, खरबूजा, पंखा व अन्न दान करने से संपूर्ण २४ एकादशियों का पुण्य मिलता है",
    ctaLabelHi: "एकादशी व्रत नियम व पारण समय",
    ctaTargetTab: "dharm-gyan",
    themeClassName: "theme-nirjala-ekadashi",
    primaryHex: "#b45309",
    accentHex: "#facc15",
    glowRgba: "rgba(250, 204, 21, 0.42)",
    headerGradientClass: "from-[#381802]/95 via-[#241002]/95 to-[#120701]/95",
    headerBorderClass: "border-amber-400/50 shadow-[0_6px_30px_rgba(250,204,21,0.26)]",
    bannerBgClass: "bg-gradient-to-r from-[#572204] via-[#78350f] to-[#451a03]",
    bannerBorderClass: "border-amber-400/60",
    badgeClass: "bg-amber-500/25 text-amber-100 border-amber-300/60",
    ctaButtonClass: "bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-500 text-stone-950",
    accentTextClass: "text-yellow-200",
    vedicRules: [{ hinduMaas: "ज्येष्ठ", tithiIndices: [11] }],
    priority: 102
  },
  {
    id: "jagannath-rath-yatra",
    monthNumber: 6,
    monthLabelHi: "जून (ज्येष्ठ-आषाढ़)",
    nameHi: "श्री जगन्नाथ रथ यात्रा महोत्सव",
    nameEn: "Shri Jagannath Rath Yatra Mahotsav",
    subDayLabelHi: "आषाढ़ शुक्ल द्वितीया • भगवान जगन्नाथ, बलभद्र एवं सुभद्रा जी की पावन रथ यात्रा",
    deityIcon: "vahan",
    sacredMantra: "नीलाचलनिवासाय नित्याय परमात्मने । बलभद्रसुभद्राभ्यां जगन्नाथाय ते नमः ॥",
    bannerGreetingHi: "श्री जगन्नाथ रथ यात्रा महापर्व की हार्दिक शुभकामनाएं! महाप्रभु जगन्नाथ आपके जीवन रथ को सुख व भक्ति के मार्ग पर ले चलें",
    bannerSubtitleHi: "रथारूढ़ भगवान जगन्नाथ के दर्शन व नाम संकीर्तन मात्र से पुनर्जन्म के बंधनों से मुक्ति मिलती है",
    ctaLabelHi: "डिजिटल मंदिर दर्शन व आरती",
    ctaTargetTab: "mandir",
    themeClassName: "theme-rath-yatra",
    primaryHex: "#b91c1c",
    accentHex: "#facc15",
    glowRgba: "rgba(250, 204, 21, 0.45)",
    headerGradientClass: "from-[#450a0a]/95 via-[#2e1202]/95 to-[#140501]/95",
    headerBorderClass: "border-yellow-400/55 shadow-[0_6px_30px_rgba(250,204,21,0.28)]",
    bannerBgClass: "bg-gradient-to-r from-[#690b0b] via-[#9a3412] to-[#451a03]",
    bannerBorderClass: "border-yellow-400/60",
    badgeClass: "bg-yellow-400/25 text-yellow-100 border-yellow-300/60",
    ctaButtonClass: "bg-gradient-to-r from-yellow-300 via-amber-400 to-red-500 text-stone-950",
    accentTextClass: "text-yellow-300",
    vedicRules: [{ hinduMaas: "आषाढ़", tithiIndices: [2] }],
    priority: 98
  },
  // ============================================================================
  // माह ७ — जुलाई (आषाढ़ / श्रावण): देवशयनी एकादशी, गुरु पूर्णिमा, पवित्र श्रावण मास
  // ============================================================================
  {
    id: "devshayani-ekadashi",
    monthNumber: 7,
    monthLabelHi: "जुलाई (आषाढ़-श्रावण)",
    nameHi: "देवशयनी (हरिशयनी) एकादशी एवं चातुर्मास प्रारंभ",
    nameEn: "Devshayani Ekadashi & Chaturmas Start",
    subDayLabelHi: "आषाढ़ शुक्ल एकादशी • भगवान श्री हरि विष्णु योगनिद्रा एवं चार माह साधना काल प्रारंभ",
    deityIcon: "lotus",
    sacredMantra: "सुप्ते त्वयि जगन्नाथ जमत्सुप्तं भवेदिदम् । विबुद्धे त्वयि बुद्धं च जगत्सर्वं चराचरम् ॥",
    bannerGreetingHi: "पावन देवशयनी एकादशी की हार्दिक शुभकामनाएं! चातुर्मास के इन चार महीनों में आपकी भक्ति, जप व साधना फलीभूत हो",
    bannerSubtitleHi: "आज से चार माह तक भगवद् भजन, मंत्र जप माला, रुद्राभिषेक एवं सत्संग का अनंत गुना आध्यात्मिक फल प्राप्त होता है",
    ctaLabelHi: "डिजिटल मंत्र जप माला खोलें",
    ctaTargetTab: "mandir",
    themeClassName: "theme-devshayani-ekadashi",
    primaryHex: "#1e3a8a",
    accentHex: "#facc15",
    glowRgba: "rgba(250, 204, 21, 0.4)",
    headerGradientClass: "from-[#0a1d42]/95 via-[#1c1603]/95 to-[#0b0901]/95",
    headerBorderClass: "border-amber-400/50 shadow-[0_6px_28px_rgba(250,204,21,0.24)]",
    bannerBgClass: "bg-gradient-to-r from-[#172554] via-[#1e3a8a] to-[#451a03]",
    bannerBorderClass: "border-amber-400/60",
    badgeClass: "bg-amber-500/25 text-amber-100 border-amber-300/60",
    ctaButtonClass: "bg-gradient-to-r from-amber-400 via-yellow-400 to-sky-400 text-stone-950",
    accentTextClass: "text-yellow-200",
    vedicRules: [{ hinduMaas: "आषाढ़", tithiIndices: [11] }],
    priority: 98
  },
  {
    id: "guru-purnima",
    monthNumber: 7,
    monthLabelHi: "जुलाई (आषाढ़-श्रावण)",
    nameHi: "गुरु पूर्णिमा (व्यास पूर्णिमा महापर्व)",
    nameEn: "Guru Purnima — Vyasa Purnima Mahaparv",
    subDayLabelHi: "आषाढ़ शुक्ल पूर्णिमा • महर्षि वेदव्यास जयंती एवं सद्गुरु चरण वंदना पर्व",
    deityIcon: "aarti",
    sacredMantra: "गुरुर्ब्रह्मा गुरुर्विष्णुः गुरुर्देवो महेश्वरः । गुरुः साक्षात् परब्रह्म तस्मै श्रीगुरवे नमः ॥",
    bannerGreetingHi: "पावन गुरु पूर्णिमा महापर्व की हार्दिक शुभकामनाएं! सद्गुरु एवं भगवान वेदव्यास का आशीर्वाद आपके जीवन का पथ आलोकित करे",
    bannerSubtitleHi: "आज गुरु पूजन, गीता-चाणक्य नीति अध्ययन एवं ब्राह्मण-आचार्य सम्मान से अज्ञान के अंधकार का नाश होता है",
    ctaLabelHi: "गीता श्लोक व धर्म ज्ञान कोष",
    ctaTargetTab: "dharm-gyan",
    themeClassName: "theme-guru-purnima",
    primaryHex: "#b45309",
    accentHex: "#fde047",
    glowRgba: "rgba(253, 224, 71, 0.45)",
    headerGradientClass: "from-[#3b1802]/95 via-[#260f02]/95 to-[#120701]/95",
    headerBorderClass: "border-yellow-400/55 shadow-[0_6px_30px_rgba(253,224,71,0.28)]",
    bannerBgClass: "bg-gradient-to-r from-[#5c2104] via-[#7c2d12] to-[#451a03]",
    bannerBorderClass: "border-yellow-400/65",
    badgeClass: "bg-yellow-400/30 text-yellow-100 border-yellow-300/60",
    ctaButtonClass: "bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-500 text-stone-950",
    accentTextClass: "text-yellow-200",
    vedicRules: [{ hinduMaas: "आषाढ़", tithiIndices: [15] }],
    priority: 102
  },
  {
    id: "sawan-maas",
    monthNumber: 7,
    monthLabelHi: "जुलाई (आषाढ़-श्रावण)",
    nameHi: "पवित्र श्रावण मास (सावन शिव आराधना)",
    nameEn: "Pavitra Sawan Maas — Shiva Sadhana",
    subDayLabelHi: "श्रावण मास विशेष • भोलेनाथ जलाभिषेक, कांवड़ यात्रा एवं सावन सोमवार व्रत",
    deityIcon: "dhoop",
    sacredMantra: "ॐ नमः शिवाय ॥ कर्पूरगौरं करुणावतारं संसारसारं भुजगेन्द्रहारम् । सदावसन्तं हृदयारविन्दे भवं भवानीसहितं नमामि ॥",
    bannerGreetingHi: "पवित्र श्रावण मास की हार्दिक शुभकामनाएं! भगवान आशुतोष भोलेनाथ की कृपा आप पर सदैव बनी रहे",
    bannerSubtitleHi: "श्रावण मास में नित्य शिव अभिषेक, रुद्राक्ष धारण एवं पंचाक्षरी मंत्र जाप से जीवन के समस्त दोष शांत होते हैं",
    ctaLabelHi: "मंत्र जप माला व शिव पूजा",
    ctaTargetTab: "mandir",
    themeClassName: "theme-sawan-maas",
    primaryHex: "#065f46",
    accentHex: "#34d399",
    glowRgba: "rgba(52, 211, 153, 0.35)",
    headerGradientClass: "from-[#042f2e]/95 via-[#06281e]/95 to-[#05140f]/95",
    headerBorderClass: "border-emerald-400/45 shadow-[0_6px_28px_rgba(52,211,153,0.22)]",
    bannerBgClass: "bg-gradient-to-r from-[#064e3b] via-[#065f46] to-[#115e59]",
    bannerBorderClass: "border-emerald-400/55",
    badgeClass: "bg-emerald-500/25 text-emerald-200 border-emerald-300/50",
    ctaButtonClass: "bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-400 text-stone-950",
    accentTextClass: "text-emerald-300",
    vedicRules: [
      {
        hinduMaas: "श्रावण",
        tithiIndices: [
          1,
          2,
          4,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30
        ]
      }
    ],
    priority: 65
  },
  // ============================================================================
  // माह ८ — अगस्त (श्रावण / भाद्रपद): हरियाली तीज, नाग पंचमी, रक्षाबंधन, हरतालिका तीज
  // ============================================================================
  {
    id: "hariyali-teej",
    monthNumber: 8,
    monthLabelHi: "अगस्त (श्रावण-भाद्रपद)",
    nameHi: "हरियाली तीज (शिव-गौरी सौभाग्य पर्व)",
    nameEn: "Hariyali Teej — Shiva-Gauri Parv",
    subDayLabelHi: "श्रावण शुक्ल तृतीया • अखंड सौभाग्य, श्रृंगार एवं शिव-पार्वती मिलन उत्सव",
    deityIcon: "dhoop",
    sacredMantra: "ॐ उमाये नमः ॥ ॐ गौरीशंकराभ्यां नमः ॥",
    bannerGreetingHi: "हरियाली तीज के पावन पर्व की हार्दिक शुभकामनाएं! माँ पार्वती और भगवान शिव आपके दांपत्य जीवन को सदैव हरा-भरा व सुखमय रखें",
    bannerSubtitleHi: "आज माँ गौरी को सोलह श्रृंगार अर्पण व शिव-पार्वती पूजन से अखंड सौभाग्य की प्राप्ति होती है",
    ctaLabelHi: "मंदिर दर्शन व आरती करें",
    ctaTargetTab: "mandir",
    themeClassName: "theme-hariyali-teej",
    primaryHex: "#047857",
    accentHex: "#34d399",
    glowRgba: "rgba(16, 185, 129, 0.4)",
    headerGradientClass: "from-[#042f24]/95 via-[#06281e]/95 to-[#05140f]/95",
    headerBorderClass: "border-emerald-400/50 shadow-[0_6px_28px_rgba(16,185,129,0.24)]",
    bannerBgClass: "bg-gradient-to-r from-[#064e3b] via-[#047857] to-[#3f6212]",
    bannerBorderClass: "border-emerald-400/60",
    badgeClass: "bg-emerald-500/25 text-emerald-100 border-emerald-300/60",
    ctaButtonClass: "bg-gradient-to-r from-emerald-400 via-yellow-400 to-amber-500 text-stone-950",
    accentTextClass: "text-emerald-200",
    vedicRules: [{ hinduMaas: "श्रावण", tithiIndices: [3] }],
    priority: 95
  },
  {
    id: "nag-panchami",
    monthNumber: 8,
    monthLabelHi: "अगस्त (श्रावण-भाद्रपद)",
    nameHi: "नाग पंचमी पावन पर्व",
    nameEn: "Nag Panchami Pujan Parv",
    subDayLabelHi: "श्रावण शुक्ल पंचमी • अष्टनाग पूजन, रुद्राभिषेक एवं कालसर्प दोष शांति दिवस",
    deityIcon: "naag",
    sacredMantra: "अनन्तं वासुकिं शेषं पद्मनाभं च कम्बलम् । शंखपालं धृतराष्ट्रं तक्षकं कालियं तथा ॥ एतानि नव नामानि नागानां च महात्मनाम् । सायंकाले पठेन्नित्यं प्रातःकाले विशेषतः ॥",
    bannerGreetingHi: "नाग पंचमी के पावन पर्व की हार्दिक शुभकामनाएं! भगवान भोलेनाथ एवं नाग देवता आपके परिवार की सदैव रक्षा करें",
    bannerSubtitleHi: "आज शिवलिंग अभिषेक एवं नवनाग स्तोत्र के पाठ से कुंडली के राहु-केतु व कालसर्प दोष शांत होते हैं",
    ctaLabelHi: "जन्म कुंडली दोष विचार देखें",
    ctaTargetTab: "kundali",
    themeClassName: "theme-nag-panchami",
    primaryHex: "#065f46",
    accentHex: "#fbbf24",
    glowRgba: "rgba(16, 185, 129, 0.4)",
    headerGradientClass: "from-[#052e24]/95 via-[#171804]/95 to-[#08120c]/95",
    headerBorderClass: "border-emerald-400/50 shadow-[0_6px_28px_rgba(16,185,129,0.24)]",
    bannerBgClass: "bg-gradient-to-r from-[#064e3b] via-[#115e59] to-[#451a03]",
    bannerBorderClass: "border-emerald-400/60",
    badgeClass: "bg-emerald-500/25 text-emerald-100 border-emerald-300/60",
    ctaButtonClass: "bg-gradient-to-r from-amber-400 via-yellow-400 to-emerald-400 text-stone-950",
    accentTextClass: "text-emerald-200",
    vedicRules: [{ hinduMaas: "श्रावण", tithiIndices: [5] }],
    priority: 96
  },
  {
    id: "raksha-bandhan",
    monthNumber: 8,
    monthLabelHi: "अगस्त (श्रावण-भाद्रपद)",
    nameHi: "रक्षाबंधन पावन पर्व (श्रावणी पूर्णिमा)",
    nameEn: "Raksha Bandhan — Shravani Purnima",
    subDayLabelHi: "भाई-बहन के पवित्र स्नेह का पर्व • भद्रा रहित राखी बांधने का शुभ मुहूर्त",
    deityIcon: "rakhi",
    sacredMantra: "येन बद्धो बली राजा दानवेन्द्रो महाबलः । तेन त्वामनुबध्नामि रक्षे मा चल मा चल ॥",
    bannerGreetingHi: "रक्षाबंधन एवं श्रावणी उपाकर्म की हार्दिक शुभकामनाएं! रक्षासूत्र का यह पावन बंधन सदैव आपकी रक्षा करे",
    bannerSubtitleHi: "भद्रा काल को त्यागकर अपराह्न व प्रदोष काल के शुभ चौघड़िया मुहूर्त में वैदिक मंत्रोच्चार के साथ रक्षासूत्र बांधें",
    ctaLabelHi: "आज का राखी शुभ मुहूर्त देखें",
    ctaTargetTab: "panchang",
    themeClassName: "theme-raksha-bandhan",
    primaryHex: "#be185d",
    accentHex: "#fbbf24",
    glowRgba: "rgba(244, 63, 94, 0.4)",
    headerGradientClass: "from-[#3d0722]/95 via-[#260814]/95 to-[#120408]/95",
    headerBorderClass: "border-rose-400/50 shadow-[0_6px_30px_rgba(244,63,94,0.25)]",
    bannerBgClass: "bg-gradient-to-r from-[#590829] via-[#831843] to-[#451a03]",
    bannerBorderClass: "border-rose-400/60",
    badgeClass: "bg-rose-500/25 text-rose-100 border-rose-300/60",
    ctaButtonClass: "bg-gradient-to-r from-amber-400 via-orange-400 to-rose-500 text-stone-950",
    accentTextClass: "text-rose-200",
    dateRanges: [{ start: "2026-08-28", end: "2026-08-28" }],
    vedicRules: [{ hinduMaas: "श्रावण", tithiIndices: [15] }],
    priority: 100
  },
  // ============================================================================
  // माह ९ — सितंबर (भाद्रपद / आश्विन): श्री कृष्ण जन्माष्टमी, गणेशोत्सव, पितृ पक्ष
  // ============================================================================
  {
    id: "janmashtami",
    monthNumber: 9,
    monthLabelHi: "सितंबर (भाद्रपद-आश्विन)",
    nameHi: "श्री कृष्ण जन्माष्टमी महापर्व",
    nameEn: "Shri Krishna Janmashtami Mahotsav",
    subDayLabelHi: "भाद्रपद कृष्ण अष्टमी • रोहिणी नक्षत्र एवं निशीथ काल बाल-गोपाल प्राकट्योत्सव",
    deityIcon: "bansuri",
    sacredMantra: "वसुदेवसुतं देवं कंसचाणूरमर्दनम् । देवकीपरमानन्दं कृष्णं वन्दे जगद्गुरुम् ॥",
    bannerGreetingHi: "श्री कृष्ण जन्माष्टमी की हार्दिक शुभकामनाएं! नन्दलाल लड्डू गोपाल आपके घर को आनंद, प्रेम व सुख से भर दें",
    bannerSubtitleHi: "आज मध्यरात्रि निशीथ काल में भगवान श्री कृष्ण का पंचामृत अभिषेक, माखन-मिश्री भोग व गीता पाठ करें",
    ctaLabelHi: "गीता श्लोक व श्री कृष्ण मंदिर",
    ctaTargetTab: "dharm-gyan",
    themeClassName: "theme-janmashtami-peacock",
    primaryHex: "#1e40af",
    accentHex: "#2dd4bf",
    glowRgba: "rgba(45, 212, 191, 0.42)",
    headerGradientClass: "from-[#081c3d]/95 via-[#07262b]/95 to-[#05101a]/95",
    headerBorderClass: "border-teal-400/50 shadow-[0_6px_32px_rgba(45,212,191,0.28)]",
    bannerBgClass: "bg-gradient-to-r from-[#0f295c] via-[#114247] to-[#1e1b4b]",
    bannerBorderClass: "border-teal-400/60",
    badgeClass: "bg-teal-500/25 text-teal-100 border-teal-300/60",
    ctaButtonClass: "bg-gradient-to-r from-amber-400 via-yellow-400 to-teal-400 text-stone-950",
    accentTextClass: "text-teal-200",
    dateRanges: [
      { start: "2026-09-04", end: "2026-09-04" },
      { start: "2027-08-25", end: "2027-08-25" }
    ],
    vedicRules: [{ hinduMaas: "भाद्रपद", tithiIndices: [23] }],
    priority: 105
  },
  {
    id: "ganesh-utsav",
    monthNumber: 9,
    monthLabelHi: "सितंबर (भाद्रपद-आश्विन)",
    nameHi: "श्री गणेश चतुर्थी एवं गणेशोत्सव",
    nameEn: "Ganesh Chaturthi & Ganeshotsav",
    subDayLabelHi: "विघ्नहर्ता श्री सिद्धिविनायक स्थापना एवं दस दिवसीय गणेश महोत्सव",
    deityIcon: "tilak",
    sacredMantra: "वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ । निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥",
    bannerGreetingHi: "श्री गणेश चतुर्थी महापर्व की हार्दिक शुभकामनाएं! गणपति बप्पा आपके जीवन के सभी विघ्न हरकर रिद्धि-सिद्धि प्रदान करें",
    bannerSubtitleHi: "मध्याह्न काल में श्री गणेश स्थापना, दूर्वा-मोदक अर्पण एवं संकटनाशन गणेश स्तोत्र का पाठ करें",
    ctaLabelHi: "श्री गणेश आरती व पूजन करें",
    ctaTargetTab: "mandir",
    themeClassName: "theme-ganesh-sindoor",
    primaryHex: "#b91c1c",
    accentHex: "#fb923c",
    glowRgba: "rgba(249, 115, 22, 0.45)",
    headerGradientClass: "from-[#450a0a]/95 via-[#2e1003]/95 to-[#140501]/95",
    headerBorderClass: "border-orange-400/55 shadow-[0_6px_32px_rgba(249,115,22,0.28)]",
    bannerBgClass: "bg-gradient-to-r from-[#690b0b] via-[#9a3412] to-[#451a03]",
    bannerBorderClass: "border-orange-400/60",
    badgeClass: "bg-orange-500/30 text-orange-100 border-orange-300/60",
    ctaButtonClass: "bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 text-stone-950",
    accentTextClass: "text-orange-200",
    dateRanges: [
      { start: "2026-09-14", end: "2026-09-25" },
      { start: "2027-09-04", end: "2027-09-14" }
    ],
    vedicRules: [{ hinduMaas: "भाद्रपद", tithiIndices: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14] }],
    priority: 95
  },
  {
    id: "pitru-paksha-shradh",
    monthNumber: 9,
    monthLabelHi: "सितंबर (भाद्रपद-आश्विन)",
    nameHi: "पितृ पक्ष महापर्व (श्राद्ध एवं तर्पण पखवाड़ा)",
    nameEn: "Pitru Paksha — Shradh & Tarpan",
    subDayLabelHi: "आश्विन कृष्ण पक्ष • पूर्वजों के प्रति श्रद्धा, कुतप काल तर्पण एवं पिंडदान",
    deityIcon: "aarti",
    sacredMantra: "ॐ पितृदेवताभ्यो नमः ॥ देवताभ्यः पितृभ्यश्च महायोगिभ्य एव च । नमः स्वधायै स्वाहायै नित्यमेव नमो नमः ॥",
    bannerGreetingHi: "पावन पितृ पक्ष में पूर्वजों को सादर नमन! पितृ देवताओं के आशीर्वाद से आपके कुल, वंश व परिवार में सुख-शांति रहे",
    bannerSubtitleHi: "पितृ पक्ष में मध्याह्न कुतप बेला में जल-तिल तर्पण, ब्राह्मण भोजन एवं पंचबलि कर्म से पितृ दोष शांत होता है",
    ctaLabelHi: "आज की श्राद्ध तिथि व पंचांग",
    ctaTargetTab: "panchang",
    themeClassName: "theme-pitru-paksha",
    primaryHex: "#78350f",
    accentHex: "#f59e0b",
    glowRgba: "rgba(245, 158, 11, 0.35)",
    headerGradientClass: "from-[#291204]/95 via-[#1c0f05]/95 to-[#0f0803]/95",
    headerBorderClass: "border-amber-500/45 shadow-[0_6px_28px_rgba(245,158,11,0.2)]",
    bannerBgClass: "bg-gradient-to-r from-[#3f1d06] via-[#572707] to-[#291204]",
    bannerBorderClass: "border-amber-500/50",
    badgeClass: "bg-amber-500/20 text-amber-200 border-amber-400/50",
    ctaButtonClass: "bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-500 text-stone-950",
    accentTextClass: "text-amber-300",
    dateRanges: [{ start: "2026-09-26", end: "2026-10-10" }],
    vedicRules: [
      {
        hinduMaas: "आश्विन",
        tithiIndices: [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
      }
    ],
    priority: 85
  },
  // ============================================================================
  // माह १० — अक्टूबर (आश्विन / कार्तिक): शारदीय नवरात्रि, दशहरा, शरद पूर्णिमा, करवा चौथ
  // ============================================================================
  {
    id: "sharadiya-navratri",
    monthNumber: 10,
    monthLabelHi: "अक्टूबर (आश्विन-कार्तिक)",
    nameHi: "शारदीय नवरात्रि महापर्व",
    nameEn: "Sharadiya Navratri (9 Days of Maa Durga)",
    subDayLabelHi: "नवदुर्गा शक्ति उपासना • घटस्थापना, अखंड ज्योति एवं दुर्गा सप्तशती पाठ",
    deityIcon: "lotus",
    sacredMantra: "सर्वमंगल मांगल्ये शिवे सर्वार्थ साधिके । शरण्ये त्र्यम्बके गौरि नारायणि नमोऽस्तु ते ॥",
    bannerGreetingHi: "शारदीय नवरात्रि की हार्दिक शुभकामनाएं! जगतजननी माँ जगदम्बा आपके परिवार को शक्ति, सुख व आरोग्य प्रदान करें",
    bannerSubtitleHi: "नवरात्रि के पावन दिनों में माँ भगवती की आरती, चालीसा पाठ व कन्या पूजन से अखंड सौभाग्य प्राप्त होता है",
    ctaLabelHi: "माँ दुर्गा आरती व चालीसा पाठ",
    ctaTargetTab: "dharm-gyan",
    themeClassName: "theme-navratri-shakti",
    primaryHex: "#9f1239",
    accentHex: "#fbbf24",
    glowRgba: "rgba(225, 29, 72, 0.45)",
    headerGradientClass: "from-[#4c0519]/95 via-[#330812]/95 to-[#170408]/95",
    headerBorderClass: "border-rose-500/55 shadow-[0_6px_32px_rgba(225,29,72,0.3)]",
    bannerBgClass: "bg-gradient-to-r from-[#690820] via-[#881337] to-[#571204]",
    bannerBorderClass: "border-rose-400/60",
    badgeClass: "bg-rose-500/30 text-rose-100 border-rose-300/60",
    ctaButtonClass: "bg-gradient-to-r from-amber-400 via-yellow-400 to-rose-500 text-stone-950",
    accentTextClass: "text-rose-200",
    dateRanges: [
      { start: "2026-10-11", end: "2026-10-19" },
      { start: "2027-09-30", end: "2027-10-08" }
    ],
    vedicRules: [{ hinduMaas: "आश्विन", tithiIndices: [1, 2, 3, 4, 5, 6, 7, 8, 9] }],
    priority: 95
  },
  {
    id: "dussehra",
    monthNumber: 10,
    monthLabelHi: "अक्टूबर (आश्विन-कार्तिक)",
    nameHi: "विजयादशमी (दशहरा महापर्व)",
    nameEn: "Vijayadashami — Dussehra Mahaparv",
    subDayLabelHi: "अधर्म पर धर्म की विजय • शस्त्र पूजन, शमी पूजन एवं अबूझ विजय मुहूर्त",
    deityIcon: "dhanush",
    sacredMantra: "श्री रामचन्द्र कृपालु भजु मन हरण भवभय दारुणम् । नवकंज लोचन कंज मुख कर कंज पद कंजारुणम् ॥",
    bannerGreetingHi: "विजयादशमी (दशहरा) महापर्व की हार्दिक शुभकामनाएं! मर्यादा पुरुषोत्तम श्री राम आपके जीवन में सदैव विजय व धर्म स्थापित करें",
    bannerSubtitleHi: "विजयादशमी साढ़े तीन अबूझ मुहूर्तों में से एक है — आज नवीन कार्य, वाहन क्रय व शस्त्र-बही पूजन अत्यंत शुभ है",
    ctaLabelHi: "श्री राम शलाका प्रश्नावली खोलें",
    ctaTargetTab: "dharm-gyan",
    themeClassName: "theme-dussehra-vijaya",
    primaryHex: "#b45309",
    accentHex: "#facc15",
    glowRgba: "rgba(245, 158, 11, 0.45)",
    headerGradientClass: "from-[#3d1602]/95 via-[#290d02]/95 to-[#140601]/95",
    headerBorderClass: "border-amber-400/55 shadow-[0_6px_32px_rgba(245,158,11,0.3)]",
    bannerBgClass: "bg-gradient-to-r from-[#5c1f04] via-[#7c2d12] to-[#451a03]",
    bannerBorderClass: "border-amber-400/65",
    badgeClass: "bg-amber-500/30 text-amber-100 border-amber-300/60",
    ctaButtonClass: "bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 text-stone-950",
    accentTextClass: "text-amber-300",
    dateRanges: [
      { start: "2026-10-20", end: "2026-10-20" },
      { start: "2027-10-09", end: "2027-10-09" }
    ],
    vedicRules: [{ hinduMaas: "आश्विन", tithiIndices: [10] }],
    priority: 100
  },
  {
    id: "sharad-purnima",
    monthNumber: 10,
    monthLabelHi: "अक्टूबर (आश्विन-कार्तिक)",
    nameHi: "शरद पूर्णिमा (कोजागरी लक्ष्मी पूजन व अमृत वर्षा)",
    nameEn: "Sharad Purnima — Kojagari Puja",
    subDayLabelHi: "आश्विन शुक्ल पूर्णिमा • १६ कलाओं से युक्त चंद्रमा, खीर अमृत प्रसाद एवं महालक्ष्मी जागरण",
    deityIcon: "full-moon",
    sacredMantra: "ॐ श्रीं ह्रीं क्लीं त्रिभुवन महालक्ष्म्यै अस्माकं दारिद्र्य नाशय प्रचुर धन देहि देहि क्लीं ह्रीं श्रीं ॐ ॥",
    bannerGreetingHi: "पावन शरद पूर्णिमा एवं कोजागरी उत्सव की हार्दिक शुभकामनाएं! चंद्र देव की अमृत किरणें आपको आरोग्य व समृद्धि प्रदान करें",
    bannerSubtitleHi: "आज रात्रि में चंद्रमा की चांदनी में खीर रखने एवं कोजागरी महालक्ष्मी पूजन से अखंड ऐश्वर्य की प्राप्ति होती है",
    ctaLabelHi: "महालक्ष्मी आरती व मंत्र जाप",
    ctaTargetTab: "mandir",
    themeClassName: "theme-sharad-purnima",
    primaryHex: "#1e3a8a",
    accentHex: "#fde047",
    glowRgba: "rgba(253, 224, 71, 0.42)",
    headerGradientClass: "from-[#091c3d]/95 via-[#172554]/95 to-[#090d16]/95",
    headerBorderClass: "border-yellow-300/50 shadow-[0_6px_30px_rgba(253,224,71,0.26)]",
    bannerBgClass: "bg-gradient-to-r from-[#0f295c] via-[#1e3a8a] to-[#3b1504]",
    bannerBorderClass: "border-yellow-300/60",
    badgeClass: "bg-yellow-400/25 text-yellow-100 border-yellow-300/60",
    ctaButtonClass: "bg-gradient-to-r from-yellow-300 via-amber-400 to-sky-300 text-stone-950",
    accentTextClass: "text-yellow-200",
    dateRanges: [{ start: "2026-10-25", end: "2026-10-26" }],
    vedicRules: [{ hinduMaas: "आश्विन", tithiIndices: [15] }],
    priority: 98
  },
  {
    id: "karwa-chauth",
    monthNumber: 10,
    monthLabelHi: "अक्टूबर (आश्विन-कार्तिक)",
    nameHi: "करवा चौथ व्रत (करक चतुर्थी)",
    nameEn: "Karwa Chauth — Akhand Saubhagya Vrat",
    subDayLabelHi: "कार्तिक कृष्ण चतुर्थी • अखंड सौभाग्य व्रत एवं चंद्रोदय अर्घ्य मुहूर्त",
    deityIcon: "moon",
    sacredMantra: "ॐ शिवायै नमः ॥ ॐ सोमाय नमः ॥ मम सुखसौभाग्यपुत्रपौत्रादि सुस्थिर श्रीप्राप्तये करकचतुर्थी व्रतमहं करिष्ये ॥",
    bannerGreetingHi: "अखंड सौभाग्य के पावन पर्व करवा चौथ की हार्दिक शुभकामनाएं! चौथ माता व चंद्र देव आपका दांपत्य जीवन सुखमय रखें",
    bannerSubtitleHi: "आज के सटीक चंद्रोदय (Moonrise) का समय एवं करवा चौथ पूजा का शुभ चौघड़िया मुहूर्त पंचांग में देखें",
    ctaLabelHi: "आज का चंद्रोदय समय व पंचांग",
    ctaTargetTab: "panchang",
    themeClassName: "theme-karwa-chauth",
    primaryHex: "#9f1239",
    accentHex: "#fda4af",
    glowRgba: "rgba(244, 63, 94, 0.42)",
    headerGradientClass: "from-[#470519]/95 via-[#2b0612]/95 to-[#120307]/95",
    headerBorderClass: "border-rose-400/50 shadow-[0_6px_30px_rgba(244,63,94,0.26)]",
    bannerBgClass: "bg-gradient-to-r from-[#660721] via-[#881337] to-[#4c0519]",
    bannerBorderClass: "border-rose-400/60",
    badgeClass: "bg-rose-500/25 text-rose-100 border-rose-300/60",
    ctaButtonClass: "bg-gradient-to-r from-rose-400 via-amber-300 to-rose-500 text-stone-950",
    accentTextClass: "text-rose-200",
    dateRanges: [
      { start: "2026-10-29", end: "2026-10-29" },
      { start: "2027-10-18", end: "2027-10-18" }
    ],
    vedicRules: [{ hinduMaas: "कार्तिक", tithiIndices: [19] }],
    priority: 100
  },
  // ============================================================================
  // माह ११ — नवंबर (कार्तिक): ५-दिवसीय दीपोत्सव, छठ पूजा, देवउठनी एकादशी, देव दीपावली
  // ============================================================================
  {
    id: "dhanteras",
    monthNumber: 11,
    monthLabelHi: "नवंबर (कार्तिक-मार्गशीर्ष)",
    nameHi: "धनतेरस महापर्व (धन्वंतरि जयंती)",
    nameEn: "Shubh Dhanteras (Deepotsav Day 1)",
    subDayLabelHi: "५-दिवसीय दीपोत्सव • दिवस १: धनतेरस एवं कुबेर-लक्ष्मी पूजन",
    deityIcon: "ratna",
    sacredMantra: "ॐ यक्षाय कुबेराय वैश्रवणाय धनधान्याधिपतये धनधान्यसमृद्धिं मे देहि दापय स्वाहा ॥",
    bannerGreetingHi: "शुभ धनतेरस! भगवान धन्वंतरि, माता लक्ष्मी और कुबेर देव आपके घर धन-धान्य व आरोग्य की वर्षा करें",
    bannerSubtitleHi: "आज सायंकाल प्रदोष काल में यम दीपदान, कुबेर-लक्ष्मी पूजन एवं स्वर्ण-रजत-पात्र क्रय का परम शुभ मुहूर्त है",
    ctaLabelHi: "धनतेरस शुभ मुहूर्त व पूजा",
    ctaTargetTab: "panchang",
    themeClassName: "theme-dhanteras-swarna",
    primaryHex: "#92400e",
    accentHex: "#fbbf24",
    glowRgba: "rgba(251, 191, 36, 0.45)",
    headerGradientClass: "from-[#361700]/95 via-[#240e02]/95 to-[#140701]/95",
    headerBorderClass: "border-yellow-400/50 shadow-[0_6px_32px_rgba(251,191,36,0.28)]",
    bannerBgClass: "bg-gradient-to-r from-[#451a03] via-[#78350f] to-[#451a03]",
    bannerBorderClass: "border-yellow-400/60",
    badgeClass: "bg-yellow-400/25 text-yellow-200 border-yellow-300/60",
    ctaButtonClass: "bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-500 text-stone-950",
    accentTextClass: "text-yellow-300",
    dateRanges: [
      { start: "2026-11-06", end: "2026-11-06" },
      { start: "2027-10-26", end: "2027-10-26" }
    ],
    vedicRules: [{ hinduMaas: "कार्तिक", tithiIndices: [28] }],
    priority: 100
  },
  {
    id: "choti-diwali",
    monthNumber: 11,
    monthLabelHi: "नवंबर (कार्तिक-मार्गशीर्ष)",
    nameHi: "छोटी दिवाली (नरक चतुर्दशी / रूप चौदस)",
    nameEn: "Choti Diwali — Narak Chaturdashi (Deepotsav Day 2)",
    subDayLabelHi: "५-दिवसीय दीपोत्सव • दिवस २: छोटी दिवाली एवं हनुमान जन्मोत्सव",
    deityIcon: "diya",
    sacredMantra: "ॐ हं हनुमते रुद्रात्मकाय हुं फट् ॥ दीपज्योतिः परब्रह्म दीपज्योतिर्जनार्दनः । दीपो हरतु मे पापं संध्यादीप नमोऽस्तु ते ॥",
    bannerGreetingHi: "छोटी दिवाली एवं नरक चतुर्दशी की हार्दिक शुभकामनाएं! आपके जीवन से समस्त अन्धकार व संकट दूर हों",
    bannerSubtitleHi: "आज अभ्यंग स्नान, सायंकाल १४ दीपों का दान एवं श्री हनुमान चालीसा पाठ से अकाल मृत्यु व भय का नाश होता है",
    ctaLabelHi: "डिजिटल मंदिर में दीप जलाएं",
    ctaTargetTab: "mandir",
    themeClassName: "theme-choti-diwali",
    primaryHex: "#9a3412",
    accentHex: "#fb923c",
    glowRgba: "rgba(251, 146, 60, 0.45)",
    headerGradientClass: "from-[#3b1103]/95 via-[#260b02]/95 to-[#140501]/95",
    headerBorderClass: "border-orange-400/50 shadow-[0_6px_32px_rgba(251,146,60,0.28)]",
    bannerBgClass: "bg-gradient-to-r from-[#431407] via-[#7c2d12] to-[#431407]",
    bannerBorderClass: "border-orange-400/60",
    badgeClass: "bg-orange-500/25 text-orange-200 border-orange-300/60",
    ctaButtonClass: "bg-gradient-to-r from-orange-400 via-amber-500 to-red-500 text-stone-950",
    accentTextClass: "text-orange-300",
    dateRanges: [
      { start: "2026-11-07", end: "2026-11-07" },
      { start: "2027-10-27", end: "2027-10-27" }
    ],
    vedicRules: [{ hinduMaas: "कार्तिक", tithiIndices: [29] }],
    priority: 100
  },
  {
    id: "badi-diwali",
    monthNumber: 11,
    monthLabelHi: "नवंबर (कार्तिक-मार्गशीर्ष)",
    nameHi: "शुभ दीपावली (महालक्ष्मी-गणेश महापूजन)",
    nameEn: "Shubh Deepavali — Maha Lakshmi Pujan (Deepotsav Day 3)",
    subDayLabelHi: "५-दिवसीय दीपोत्सव • दिवस ३: बड़ी दीपावली एवं महालक्ष्मी-गणेश महापूजन",
    deityIcon: "lotus",
    sacredMantra: "ॐ श्रीं ह्रीं श्रीं कमले कमलालये प्रसीद प्रसीद श्रीं ह्रीं श्रीं ॐ महालक्ष्म्यै नमः ॥",
    bannerGreetingHi: "शुभ दीपावली! माँ महालक्ष्मी और भगवान श्री गणेश आपके घर-परिवार में सुख, शांति, ऐश्वर्य और अखंड समृद्धि प्रदान करें",
    bannerSubtitleHi: "प्रदोष काल एवं स्थिर लग्न (वृषभ व सिंह लग्न) में श्री गणेश-लक्ष्मी-कुबेर पूजन व दीपमालिका प्रज्वलन करें",
    ctaLabelHi: "महालक्ष्मी आरती व पूजन सामग्री",
    ctaTargetTab: "dharm-gyan",
    themeClassName: "theme-badi-diwali",
    primaryHex: "#b91c1c",
    accentHex: "#facc15",
    glowRgba: "rgba(250, 204, 21, 0.5)",
    headerGradientClass: "from-[#450a0a]/95 via-[#321202]/95 to-[#170502]/95",
    headerBorderClass: "border-yellow-400/65 shadow-[0_8px_36px_rgba(250,204,21,0.35)]",
    bannerBgClass: "bg-gradient-to-r from-[#5c0808] via-[#7f1d1d] to-[#4a1803]",
    bannerBorderClass: "border-yellow-400/70",
    badgeClass: "bg-yellow-400/30 text-yellow-100 border-yellow-300/70",
    ctaButtonClass: "bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-500 text-stone-950",
    accentTextClass: "text-yellow-300",
    dateRanges: [
      { start: "2026-11-08", end: "2026-11-08" },
      { start: "2027-10-28", end: "2027-10-29" }
    ],
    vedicRules: [{ hinduMaas: "कार्तिक", tithiIndices: [30] }],
    priority: 110
  },
  {
    id: "govardhan-puja",
    monthNumber: 11,
    monthLabelHi: "नवंबर (कार्तिक-मार्गशीर्ष)",
    nameHi: "गोवर्धन पूजा एवं अन्नकूट महोत्सव",
    nameEn: "Govardhan Puja & Annakoot (Deepotsav Day 4)",
    subDayLabelHi: "५-दिवसीय दीपोत्सव • दिवस ४: श्री गोवर्धन गिरिराज पूजन व अन्नकूट",
    deityIcon: "sprout",
    sacredMantra: "गोवर्धन धराधार गोकुल त्राणकारक । विष्णुबाहुकृतोच्छ्राय गवां कोटिप्रदो भव ॥",
    bannerGreetingHi: "गोवर्धन पूजा एवं अन्नकूट महापर्व की हार्दिक शुभकामनाएं! भगवान श्री गिरिराज धरण आपके भंडार सदैव भरे रखें",
    bannerSubtitleHi: "आज गोवर्धन महाराज की परिक्रमा, गौ-सेवा एवं छप्पन भोग अन्नकूट प्रसाद अर्पण का परम पुण्यकारी दिवस है",
    ctaLabelHi: "श्री कृष्ण मंदिर दर्शन करें",
    ctaTargetTab: "mandir",
    themeClassName: "theme-govardhan-puja",
    primaryHex: "#15803d",
    accentHex: "#f59e0b",
    glowRgba: "rgba(245, 158, 11, 0.4)",
    headerGradientClass: "from-[#052e16]/95 via-[#1f1603]/95 to-[#0c0801]/95",
    headerBorderClass: "border-emerald-400/45 shadow-[0_6px_30px_rgba(16,185,129,0.22)]",
    bannerBgClass: "bg-gradient-to-r from-[#064e3b] via-[#14532d] to-[#451a03]",
    bannerBorderClass: "border-emerald-400/55",
    badgeClass: "bg-emerald-500/25 text-emerald-200 border-emerald-400/50",
    ctaButtonClass: "bg-gradient-to-r from-amber-400 via-yellow-500 to-emerald-500 text-stone-950",
    accentTextClass: "text-emerald-300",
    dateRanges: [
      { start: "2026-11-09", end: "2026-11-09" },
      { start: "2027-10-30", end: "2027-10-30" }
    ],
    vedicRules: [{ hinduMaas: "कार्तिक", tithiIndices: [1] }],
    priority: 100
  },
  {
    id: "bhai-dooj",
    monthNumber: 11,
    monthLabelHi: "नवंबर (कार्तिक-मार्गशीर्ष)",
    nameHi: "भाई दूज (यम द्वितीया एवं चित्रगुप्त पूजा)",
    nameEn: "Bhai Dooj & Chitragupta Puja (Deepotsav Day 5)",
    subDayLabelHi: "५-दिवसीय दीपोत्सव • दिवस ५: भाई दूज तिलक एवं भगवान चित्रगुप्त पूजन",
    deityIcon: "aarti",
    sacredMantra: "भ्रातुस्तवाग्रजाताहं भुंक्ष्व भक्तमिदं शुभम् । प्रीतये यमराजस्य यमुनाया विशेषतः ॥",
    bannerGreetingHi: "भाई दूज एवं चित्रगुप्त पूजा की मंगल शुभकामनाएं! भाई-बहन का स्नेह और धर्मराज का आशीर्वाद सदैव बना रहे",
    bannerSubtitleHi: "आज प्रातः लाभ/अमृत चौघड़िया व विजय मुहूर्त में भाई को अष्टगंध तिलक करने से दीर्घायु व सौभाग्य की प्राप्ति होती है",
    ctaLabelHi: "आज का तिलक शुभ मुहूर्त देखें",
    ctaTargetTab: "panchang",
    themeClassName: "theme-bhai-dooj",
    primaryHex: "#be185d",
    accentHex: "#fbbf24",
    glowRgba: "rgba(244, 63, 94, 0.38)",
    headerGradientClass: "from-[#3b0724]/95 via-[#270912]/95 to-[#120407]/95",
    headerBorderClass: "border-rose-400/45 shadow-[0_6px_30px_rgba(244,63,94,0.22)]",
    bannerBgClass: "bg-gradient-to-r from-[#500724] via-[#831843] to-[#451a03]",
    bannerBorderClass: "border-rose-400/55",
    badgeClass: "bg-rose-500/25 text-rose-200 border-rose-400/50",
    ctaButtonClass: "bg-gradient-to-r from-amber-400 via-orange-400 to-rose-500 text-stone-950",
    accentTextClass: "text-rose-200",
    dateRanges: [
      { start: "2026-11-10", end: "2026-11-10" },
      { start: "2027-10-31", end: "2027-10-31" }
    ],
    vedicRules: [{ hinduMaas: "कार्तिक", tithiIndices: [2] }],
    priority: 100
  },
  {
    id: "chhath-puja",
    monthNumber: 11,
    monthLabelHi: "नवंबर (कार्तिक-मार्गशीर्ष)",
    nameHi: "लोकआस्था का महापर्व छठ पूजा (सूर्य षष्ठी)",
    nameEn: "Chhath Mahaparv (Nahay Khay to Usha Arghya)",
    subDayLabelHi: "४-दिवसीय सूर्य उपासना • नहाय-खाय, खरना, संध्या अर्घ्य एवं उषा अर्घ्य",
    deityIcon: "sun",
    sacredMantra: "ॐ घृणि सूर्याय नमः ॥ ॐ आदित्याय विद्महे दिवाकराय धीमहि तन्नो सूर्यः प्रचोदयात् ॥",
    bannerGreetingHi: "लोकआस्था के महापर्व छठ पूजा की हार्दिक शुभकामनाएं! भगवान भास्कर एवं छठी मैया आपके परिवार को सुख-समृद्धि व संतान सुख दें",
    bannerSubtitleHi: "आज के सूर्योदय व सूर्यास्त का सटीक अर्घ्य समय हमारे लाइव दृक् पंचांग में अपने शहर के अनुसार देखें",
    ctaLabelHi: "सूर्यास्त व सूर्योदय अर्घ्य समय देखें",
    ctaTargetTab: "panchang",
    themeClassName: "theme-chhath-surya",
    primaryHex: "#b45309",
    accentHex: "#facc15",
    glowRgba: "rgba(250, 204, 21, 0.45)",
    headerGradientClass: "from-[#3d1702]/95 via-[#2e0c02]/95 to-[#140501]/95",
    headerBorderClass: "border-yellow-400/55 shadow-[0_6px_32px_rgba(250,204,21,0.3)]",
    bannerBgClass: "bg-gradient-to-r from-[#612104] via-[#854d0e] to-[#571204]",
    bannerBorderClass: "border-yellow-400/65",
    badgeClass: "bg-yellow-400/25 text-yellow-100 border-yellow-300/60",
    ctaButtonClass: "bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-500 text-stone-950",
    accentTextClass: "text-yellow-300",
    dateRanges: [
      { start: "2026-11-13", end: "2026-11-16" },
      { start: "2027-11-02", end: "2027-11-05" }
    ],
    vedicRules: [{ hinduMaas: "कार्तिक", tithiIndices: [4, 5, 6, 7] }],
    priority: 100
  },
  {
    id: "gopashtami",
    monthNumber: 11,
    monthLabelHi: "नवंबर (कार्तिक-मार्गशीर्ष)",
    nameHi: "गोपाष्टमी महापर्व (गौ-पूजन एवं भगवान श्री गोविन्द आराधना)",
    nameEn: "Gopashtami Mahaparv (Gau Pujan & Govinda Aradhana)",
    subDayLabelHi: "कार्तिक शुक्ल अष्टमी • कामधेनु सुरभि गौ-माता पूजन व गोविन्द वंदन",
    deityIcon: "cow",
    sacredMantra: "ॐ सुरभिभ्यो नमः • सर्वकामप्रदे देवि पावनी नमोऽस्तु ते ॥",
    bannerGreetingHi: "गोपाष्टमी महापर्व की हार्दिक शुभकामनाएं! गौ माता की सेवा और भगवान श्री कृष्ण की कृपा से आपके घर सुख-समृद्धि व आरोग्य आए",
    bannerSubtitleHi: "कार्तिक शुक्ल अष्टमी • गो-पूजन, परिक्रमा एवं गौशाला सेवा का परम पुण्य पर्व",
    ctaLabelHi: "गौ-पूजन विधि व संपूर्ण पंचांग देखें",
    ctaTargetTab: "panchang",
    themeClassName: "theme-gopashtami",
    primaryHex: "#d97706",
    accentHex: "#facc15",
    glowRgba: "rgba(250, 204, 21, 0.45)",
    headerGradientClass: "from-[#302006]/95 via-[#231503]/95 to-[#120a02]/95",
    headerBorderClass: "border-yellow-400/55 shadow-[0_6px_32px_rgba(250,204,21,0.3)]",
    bannerBgClass: "bg-gradient-to-r from-[#422c09] via-[#5c3e0d] to-[#302006]",
    bannerBorderClass: "border-yellow-400/65",
    badgeClass: "bg-yellow-400/25 text-yellow-100 border-yellow-300/60",
    ctaButtonClass: "bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500 text-stone-950",
    accentTextClass: "text-yellow-300",
    dateRanges: [
      { start: "2026-11-17", end: "2026-11-17" },
      { start: "2027-11-06", end: "2027-11-06" }
    ],
    vedicRules: [{ hinduMaas: "कार्तिक", tithiIndices: [8] }],
    priority: 105
  },
  {
    id: "akshaya-navami",
    monthNumber: 11,
    monthLabelHi: "नवंबर (कार्तिक-मार्गशीर्ष)",
    nameHi: "अक्षय नवमी (आंवला नवमी / कूष्माण्डा नवमी)",
    nameEn: "Akshaya Navami (Amla Navami / Kushmanda Navami)",
    subDayLabelHi: "अक्षय नवमी महापर्व • कार्तिक शुक्ल नवमी • सत्ययुग प्रारंभ एवं आंवला वृक्ष पूजन",
    deityIcon: "sprout",
    sacredMantra: "ॐ नमो भगवते वासुदेवाय • धात्रीवृक्ष महाभाग सर्वपापप्रणाशन ॥",
    bannerGreetingHi: "अक्षय नवमी (आंवला नवमी / कूष्माण्डा नवमी) की हार्दिक शुभकामनाएं! भगवान श्री हरि विष्णु व माँ लक्ष्मी आपके जीवन में अक्षय पुण्य व सुख-समृद्धि प्रदान करें",
    bannerSubtitleHi: "कार्तिक शुक्ल नवमी से सत्ययुग का प्रारंभ हुआ था — आज आंवला (धात्री) वृक्ष के नीचे पूजन, परिक्रमा, दीपदान व सात्विक भोजन से अक्षय पुण्य प्राप्त होता है",
    ctaLabelHi: "आज का पंचांग व शुभ मुहूर्त देखें",
    ctaTargetTab: "panchang",
    themeClassName: "theme-akshaya-navami",
    primaryHex: "#047857",
    accentHex: "#facc15",
    glowRgba: "rgba(52, 211, 153, 0.42)",
    headerGradientClass: "from-[#07261a]/95 via-[#0d3826]/95 to-[#04140e]/95",
    headerBorderClass: "border-yellow-400/55 shadow-[0_6px_32px_rgba(250,204,21,0.28)]",
    bannerBgClass: "bg-gradient-to-r from-[#07261a] via-[#064e3b] to-[#302006]",
    bannerBorderClass: "border-yellow-400/65",
    badgeClass: "bg-emerald-500/25 text-yellow-100 border-yellow-300/60",
    ctaButtonClass: "bg-gradient-to-r from-yellow-300 via-amber-400 to-emerald-400 text-stone-950",
    accentTextClass: "text-yellow-300",
    dateRanges: [
      { start: "2026-11-18", end: "2026-11-18" },
      { start: "2027-11-08", end: "2027-11-08" }
    ],
    vedicRules: [{ hinduMaas: "कार्तिक", tithiIndices: [9] }],
    priority: 105
  },
  {
    id: "dev-uthani-ekadashi",
    monthNumber: 11,
    monthLabelHi: "नवंबर (कार्तिक-मार्गशीर्ष)",
    nameHi: "देवउठनी एकादशी एवं तुलसी विवाह महापर्व",
    nameEn: "Dev Uthani Ekadashi & Tulsi Vivah",
    subDayLabelHi: "चातुर्मास समाप्ति • भगवान श्री हरि विष्णु जागरण एवं मांगलिक कार्य शुभारंभ",
    deityIcon: "dhoop",
    sacredMantra: "उत्तिष्ठोत्तिष्ठ गोविन्द त्यज निद्रां जगत्पते । त्वयि सुप्ते जगन्नाथ जगत् सुप्तं भवेदिदम् ॥",
    bannerGreetingHi: "देवउठनी (प्रबोधिनी) एकादशी एवं तुलसी विवाह की हार्दिक शुभकामनाएं! भगवान श्री हरि विष्णु आपके घर मांगलिक खुशियां लाएं",
    bannerSubtitleHi: "आज से चातुर्मास समाप्त होकर विवाह, गृह प्रवेश, मुंडन आदि समस्त शुभ मांगलिक मुहूर्त पुनः प्रारंभ हो रहे हैं",
    ctaLabelHi: "विवाह व शुभ मुहूर्त २०२६-२७ देखें",
    ctaTargetTab: "dharm-gyan",
    themeClassName: "theme-dev-uthani",
    primaryHex: "#047857",
    accentHex: "#fbbf24",
    glowRgba: "rgba(16, 185, 129, 0.4)",
    headerGradientClass: "from-[#042f24]/95 via-[#1c1603]/95 to-[#0d0901]/95",
    headerBorderClass: "border-emerald-400/50 shadow-[0_6px_30px_rgba(16,185,129,0.24)]",
    bannerBgClass: "bg-gradient-to-r from-[#064e3b] via-[#065f46] to-[#451a03]",
    bannerBorderClass: "border-emerald-400/60",
    badgeClass: "bg-emerald-500/25 text-emerald-100 border-emerald-300/60",
    ctaButtonClass: "bg-gradient-to-r from-amber-400 via-yellow-400 to-emerald-500 text-stone-950",
    accentTextClass: "text-emerald-200",
    dateRanges: [
      { start: "2026-11-20", end: "2026-11-21" },
      { start: "2027-11-09", end: "2027-11-10" }
    ],
    vedicRules: [{ hinduMaas: "कार्तिक", tithiIndices: [11, 12] }],
    priority: 100
  },
  {
    id: "vaikuntha-chaturdashi",
    monthNumber: 11,
    monthLabelHi: "नवंबर (कार्तिक-मार्गशीर्ष)",
    nameHi: "बैकुण्ठ चतुर्दशी (हरि-हर मिलन महापर्व)",
    nameEn: "Vaikuntha Chaturdashi (Hari-Hara Milan Mahaparv)",
    subDayLabelHi: "बैकुण्ठ चतुर्दशी • कार्तिक शुक्ल चतुर्दशी • भगवान श्री हरि विष्णु एवं महादेव शिव का पावन हरि-हर मिलन",
    deityIcon: "lotus",
    sacredMantra: "ॐ नमो भगवते वासुदेवाय • ॐ नमः शिवाय • शिवाय विष्णुकायाय शिवरूपाय विष्णवे ॥",
    bannerGreetingHi: "पावन बैकुण्ठ चतुर्दशी (हरि-हर मिलन पर्व) की हार्दिक शुभकामनाएं! भगवान श्री हरि विष्णु और देवाधिदेव महादेव की संयुक्त कृपा आप पर बनी रहे",
    bannerSubtitleHi: "आज भगवान शिव को तुलसी दल और भगवान विष्णु को बिल्वपत्र अर्पित करने तथा १४ दीपों के दान से बैकुण्ठ धाम व अक्षय सुख प्राप्त होता है",
    ctaLabelHi: "डिजिटल मंदिर में हरि-हर दर्शन करें",
    ctaTargetTab: "mandir",
    themeClassName: "theme-vaikuntha-chaturdashi",
    primaryHex: "#6d28d9",
    accentHex: "#facc15",
    glowRgba: "rgba(250, 204, 21, 0.42)",
    headerGradientClass: "from-[#1e1136]/95 via-[#2d1952]/95 to-[#0f081d]/95",
    headerBorderClass: "border-yellow-400/55 shadow-[0_6px_32px_rgba(250,204,21,0.28)]",
    bannerBgClass: "bg-gradient-to-r from-[#1e1136] via-[#3b0764] to-[#1e3a8a]",
    bannerBorderClass: "border-yellow-400/65",
    badgeClass: "bg-purple-500/25 text-yellow-100 border-yellow-300/60",
    ctaButtonClass: "bg-gradient-to-r from-yellow-300 via-amber-400 to-sky-400 text-stone-950",
    accentTextClass: "text-yellow-300",
    dateRanges: [
      { start: "2026-11-23", end: "2026-11-23" },
      { start: "2027-11-12", end: "2027-11-12" }
    ],
    vedicRules: [{ hinduMaas: "कार्तिक", tithiIndices: [14] }],
    priority: 103
  },
  {
    id: "kartik-purnima-dev-diwali",
    monthNumber: 11,
    monthLabelHi: "नवंबर (कार्तिक-मार्गशीर्ष)",
    nameHi: "कार्तिक पूर्णिमा एवं काशी देव दीपावली महापर्व",
    nameEn: "Kartik Purnima & Dev Deepawali",
    subDayLabelHi: "कार्तिक शुक्ल पूर्णिमा • त्रिपुरारि पूर्णिमा, गंगा स्नान एवं देवताओं की दीपावली",
    deityIcon: "diya",
    sacredMantra: "ॐ नमः शिवाय ॥ कीटाः पतंगाः मशकाश्च वृक्षाः जले स्थले ये निवसन्ति जीवाः । दृष्ट्वा प्रदीपं न च जन्मभागिनो भवन्ति नित्यं श्वपचा हि विप्राः ॥",
    bannerGreetingHi: "पावन कार्तिक पूर्णिमा एवं देव दीपावली की हार्दिक शुभकामनाएं! भगवान त्रिपुरारि महादेव व श्री हरि आपका कल्याण करें",
    bannerSubtitleHi: "आज पवित्र नदी स्नान, दीपदान एवं सत्यनारायण पूजन से सहस्र अश्वमेध यज्ञ के समान पुण्य प्राप्त होता है",
    ctaLabelHi: "डिजिटल मंदिर में दीपदान करें",
    ctaTargetTab: "mandir",
    themeClassName: "theme-dev-diwali",
    primaryHex: "#b45309",
    accentHex: "#facc15",
    glowRgba: "rgba(250, 204, 21, 0.45)",
    headerGradientClass: "from-[#3d1702]/95 via-[#290d02]/95 to-[#140501]/95",
    headerBorderClass: "border-yellow-400/55 shadow-[0_6px_32px_rgba(250,204,21,0.3)]",
    bannerBgClass: "bg-gradient-to-r from-[#5c1f04] via-[#7c2d12] to-[#451a03]",
    bannerBorderClass: "border-yellow-400/65",
    badgeClass: "bg-yellow-400/25 text-yellow-100 border-yellow-300/60",
    ctaButtonClass: "bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-500 text-stone-950",
    accentTextClass: "text-yellow-300",
    dateRanges: [{ start: "2026-11-24", end: "2026-11-24" }],
    vedicRules: [{ hinduMaas: "कार्तिक", tithiIndices: [15] }],
    priority: 102
  },
  // ============================================================================
  // माह १२ — दिसंबर (मार्गशीर्ष / पौष): विवाह पंचमी, गीता जयंती/मोक्षदा एकादशी, अन्नपूर्णा जयंती
  // ============================================================================
  {
    id: "vivah-panchami",
    monthNumber: 12,
    monthLabelHi: "दिसंबर (मार्गशीर्ष-पौष)",
    nameHi: "श्री राम-जानकी विवाह पंचमी महापर्व",
    nameEn: "Shri Ram-Janaki Vivah Panchami",
    subDayLabelHi: "मार्गशीर्ष शुक्ल पंचमी • मर्यादा पुरुषोत्तम श्री राम एवं माता सीता का पावन विवाहोत्सव",
    deityIcon: "crown",
    sacredMantra: "जनकसुता जग जननि जानकी । अतिसय प्रिय करुनानिधान की ॥ ताके जुग पद कमल मनावउं । जासु कृपाँ निरमल मति पावउं ॥",
    bannerGreetingHi: "श्री राम-जानकी विवाह पंचमी महापर्व की हार्दिक शुभकामनाएं! सिया-राम की कृपा से आपके परिवार में सुख, प्रेम व मंगल बना रहे",
    bannerSubtitleHi: "आज बालकाण्ड में श्री सीताराम विवाह प्रसंग का पाठ करने से पारिवारिक कलह व विवाह बाधाएं दूर होती हैं",
    ctaLabelHi: "वर-कन्या ३६ गुण मिलान करें",
    ctaTargetTab: "dharm-gyan",
    themeClassName: "theme-vivah-panchami",
    primaryHex: "#9f1239",
    accentHex: "#facc15",
    glowRgba: "rgba(244, 63, 94, 0.42)",
    headerGradientClass: "from-[#470519]/95 via-[#2e090c]/95 to-[#140405]/95",
    headerBorderClass: "border-rose-400/50 shadow-[0_6px_30px_rgba(244,63,94,0.28)]",
    bannerBgClass: "bg-gradient-to-r from-[#690820] via-[#881337] to-[#451a03]",
    bannerBorderClass: "border-rose-400/60",
    badgeClass: "bg-rose-500/25 text-rose-100 border-rose-300/60",
    ctaButtonClass: "bg-gradient-to-r from-amber-400 via-yellow-400 to-rose-500 text-stone-950",
    accentTextClass: "text-rose-200",
    dateRanges: [{ start: "2026-12-14", end: "2026-12-14" }],
    vedicRules: [{ hinduMaas: "मार्गशीर्ष", tithiIndices: [5] }],
    priority: 98
  },
  {
    id: "gita-jayanti-mokshada",
    monthNumber: 12,
    monthLabelHi: "दिसंबर (मार्गशीर्ष-पौष)",
    nameHi: "श्री गीता जयंती एवं मोक्षदा एकादशी महापर्व",
    nameEn: "Shrimad Bhagavad Gita Jayanti & Mokshada Ekadashi",
    subDayLabelHi: "मार्गशीर्ष शुक्ल एकादशी • कुरुक्षेत्र में भगवान श्री कृष्ण द्वारा श्रीमद्भगवद्गीता उपदेश दिवस",
    deityIcon: "book",
    sacredMantra: "सर्वोपनिषदो गावो दोग्धा गोपालनन्दनः । पार्थो वत्सः सुधीर्भोक्ता दुग्धं गीतामृतं महत् ॥",
    bannerGreetingHi: "श्रीमद्भगवद्गीता जयंती एवं मोक्षदा एकादशी की हार्दिक शुभकामनाएं! गीता का दिव्य ज्ञान आपके जीवन को आलोकित करे",
    bannerSubtitleHi: "आज मोक्षदा एकादशी व्रत एवं श्रीमद्भगवद्गीता के श्लोकों का पाठ करने से पितरों को मोक्ष व सद्गति प्राप्त होती है",
    ctaLabelHi: "श्रीमद्भगवद्गीता श्लोक पढ़ें",
    ctaTargetTab: "dharm-gyan",
    themeClassName: "theme-gita-jayanti",
    primaryHex: "#b45309",
    accentHex: "#facc15",
    glowRgba: "rgba(250, 204, 21, 0.45)",
    headerGradientClass: "from-[#381802]/95 via-[#241002]/95 to-[#120701]/95",
    headerBorderClass: "border-yellow-400/55 shadow-[0_6px_30px_rgba(250,204,21,0.28)]",
    bannerBgClass: "bg-gradient-to-r from-[#572204] via-[#78350f] to-[#451a03]",
    bannerBorderClass: "border-yellow-400/65",
    badgeClass: "bg-yellow-400/25 text-yellow-100 border-yellow-300/60",
    ctaButtonClass: "bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-500 text-stone-950",
    accentTextClass: "text-yellow-200",
    dateRanges: [{ start: "2026-12-20", end: "2026-12-20" }],
    vedicRules: [{ hinduMaas: "मार्गशीर्ष", tithiIndices: [11] }],
    priority: 102
  },
  {
    id: "dattatreya-annapurna-jayanti",
    monthNumber: 12,
    monthLabelHi: "दिसंबर (मार्गशीर्ष-पौष)",
    nameHi: "भगवान दत्तात्रेय एवं माँ अन्नपूर्णा जयंती (मार्गशीर्ष पूर्णिमा)",
    nameEn: "Dattatreya & Maa Annapurna Jayanti",
    subDayLabelHi: "मार्गशीर्ष शुक्ल पूर्णिमा • त्रिदेव स्वरूप भगवान दत्तात्रेय व माँ अन्नपूर्णा प्राकट्योत्सव",
    deityIcon: "sprout",
    sacredMantra: "अन्नपूर्णे सदापूर्णे शंकरप्राणवल्लभे । ज्ञानवैराग्यसिद्ध्यर्थं भिक्षां देहि च पार्वति ॥",
    bannerGreetingHi: "माँ अन्नपूर्णा जयंती एवं मार्गशीर्ष पूर्णिमा की हार्दिक शुभकामनाएं! आपके घर की रसोई व अन्न-धन के भंडार सदैव पूर्ण रहें",
    bannerSubtitleHi: "आज रसोई व चूल्हे का पूजन, अन्न दान एवं दत्तात्रेय स्तोत्र के पाठ से घर में कभी धन-धान्य की कमी नहीं होती",
    ctaLabelHi: "डिजिटल मंदिर दर्शन करें",
    ctaTargetTab: "mandir",
    themeClassName: "theme-annapurna-jayanti",
    primaryHex: "#92400e",
    accentHex: "#fbbf24",
    glowRgba: "rgba(251, 191, 36, 0.42)",
    headerGradientClass: "from-[#361700]/95 via-[#240e02]/95 to-[#140701]/95",
    headerBorderClass: "border-amber-400/50 shadow-[0_6px_28px_rgba(251,191,36,0.26)]",
    bannerBgClass: "bg-gradient-to-r from-[#451a03] via-[#78350f] to-[#3f6212]",
    bannerBorderClass: "border-amber-400/60",
    badgeClass: "bg-amber-500/25 text-amber-100 border-amber-300/60",
    ctaButtonClass: "bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-500 text-stone-950",
    accentTextClass: "text-amber-200",
    dateRanges: [{ start: "2026-12-23", end: "2026-12-24" }],
    vedicRules: [{ hinduMaas: "मार्गशीर्ष", tithiIndices: [15] }],
    priority: 96
  },
  // ============================================================================
  // मासिक व्रत (हर महीने आने वाले पावन व्रत: एकादशी, प्रदोष, पूर्णिमा)
  // ============================================================================
  {
    id: "masik-ekadashi-vrat",
    monthNumber: 0,
    monthLabelHi: "मासिक व्रत (हर माह)",
    nameHi: "पावन एकादशी व्रत (श्री हरि विष्णु आराधना)",
    nameEn: "Sacred Ekadashi Vrat",
    subDayLabelHi: "मासिक एकादशी व्रत • भगवान श्री लक्ष्मी-नारायण पूजन, तुलसी अर्पण एवं मंत्र जाप",
    deityIcon: "lotus",
    sacredMantra: "ॐ नमो भगवते वासुदेवाय ॥ ॐ विष्णवे नमः ॥",
    bannerGreetingHi: "पावन एकादशी व्रत की हार्दिक शुभकामनाएं! भगवान श्री हरि विष्णु आपके समस्त पापों का नाश कर सुख-समृद्धि प्रदान करें",
    bannerSubtitleHi: "एकादशी के दिन अन्न त्याग, फलाहार, विष्णु सहस्रनाम पाठ एवं द्वादशी को शुभ मुहूर्त में व्रत पारण करें",
    ctaLabelHi: "एकादशी व्रत व पारण नियम देखें",
    ctaTargetTab: "dharm-gyan",
    themeClassName: "theme-masik-ekadashi",
    primaryHex: "#92400e",
    accentHex: "#facc15",
    glowRgba: "rgba(250, 204, 21, 0.38)",
    headerGradientClass: "from-[#331602]/95 via-[#210d02]/95 to-[#120601]/95",
    headerBorderClass: "border-amber-400/45 shadow-[0_6px_26px_rgba(250,204,21,0.22)]",
    bannerBgClass: "bg-gradient-to-r from-[#451a03] via-[#713f12] to-[#3b1504]",
    bannerBorderClass: "border-amber-400/55",
    badgeClass: "bg-amber-500/25 text-amber-100 border-amber-300/60",
    ctaButtonClass: "bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-500 text-stone-950",
    accentTextClass: "text-amber-200",
    priority: 50
  },
  {
    id: "masik-pradosh-vrat",
    monthNumber: 0,
    monthLabelHi: "मासिक व्रत (हर माह)",
    nameHi: "पावन प्रदोष व्रत (शिव-पार्वती सायंकाल पूजन)",
    nameEn: "Sacred Pradosh Vrat",
    subDayLabelHi: "त्रयोदशी प्रदोष काल • देवाधिदेव महादेव जलाभिषेक एवं संकट निवारण व्रत",
    deityIcon: "trishul",
    sacredMantra: "ॐ नमः शिवाय ॥ ॐ तत्पुरुषाय विद्महे महादेवाय धीमहि तन्नो रुद्रः प्रचोदयात् ॥",
    bannerGreetingHi: "पावन प्रदोष व्रत की हार्दिक शुभकामनाएं! प्रदोष काल में भगवान आशुतोष महादेव की आराधना से समस्त मनोरथ पूर्ण होते हैं",
    bannerSubtitleHi: "सूर्यास्त से ४५ मिनट पूर्व व ४५ मिनट पश्चात प्रदोष काल में शिवलिंग अभिषेक व शिव चालीसा का पाठ करें",
    ctaLabelHi: "डिजिटल शिव मंदिर दर्शन",
    ctaTargetTab: "mandir",
    themeClassName: "theme-masik-pradosh",
    primaryHex: "#1e3a8a",
    accentHex: "#38bdf8",
    glowRgba: "rgba(56, 189, 248, 0.38)",
    headerGradientClass: "from-[#071636]/95 via-[#0f172a]/95 to-[#090d16]/95",
    headerBorderClass: "border-sky-400/45 shadow-[0_6px_26px_rgba(56,189,248,0.22)]",
    bannerBgClass: "bg-gradient-to-r from-[#0c234d] via-[#1e1b4b] to-[#172554]",
    bannerBorderClass: "border-sky-400/55",
    badgeClass: "bg-sky-500/25 text-sky-100 border-sky-300/60",
    ctaButtonClass: "bg-gradient-to-r from-sky-400 via-cyan-300 to-amber-400 text-stone-950",
    accentTextClass: "text-sky-200",
    priority: 48
  },
  {
    id: "masik-purnima-satyanarayan",
    monthNumber: 0,
    monthLabelHi: "मासिक व्रत (हर माह)",
    nameHi: "पावन पूर्णिमा व्रत एवं सत्यनारायण पूजन",
    nameEn: "Sacred Purnima Vrat & Satyanarayan Puja",
    subDayLabelHi: "शुक्ल पक्ष पूर्णिमा • श्री सत्यनारायण कथा, महालक्ष्मी पूजन एवं चन्द्र अर्घ्य",
    deityIcon: "full-moon",
    sacredMantra: "ॐ नमो भगवते वासुदेवाय ॥ ॐ श्रीं ह्रीं क्लीं महालक्ष्म्यै नमः ॥",
    bannerGreetingHi: "पावन पूर्णिमा पर्व की हार्दिक शुभकामनाएं! भगवान श्री सत्यनारायण और माता लक्ष्मी आपके घर सुख-समृद्धि बनाए रखें",
    bannerSubtitleHi: "पूर्णिमा तिथि पर पवित्र नदी स्नान, सत्यनारायण व्रत कथा एवं सायंकाल चन्द्रोदय पर अर्घ्य अर्पण करें",
    ctaLabelHi: "आज का चन्द्रोदय समय व पंचांग",
    ctaTargetTab: "panchang",
    themeClassName: "theme-masik-purnima",
    primaryHex: "#78350f",
    accentHex: "#fde047",
    glowRgba: "rgba(253, 224, 71, 0.38)",
    headerGradientClass: "from-[#2e1703]/95 via-[#1c1026]/95 to-[#0c0712]/95",
    headerBorderClass: "border-yellow-300/45 shadow-[0_6px_26px_rgba(253,224,71,0.22)]",
    bannerBgClass: "bg-gradient-to-r from-[#451a03] via-[#581c87] to-[#3b1504]",
    bannerBorderClass: "border-yellow-300/55",
    badgeClass: "bg-yellow-400/25 text-yellow-100 border-yellow-300/60",
    ctaButtonClass: "bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-400 text-stone-950",
    accentTextClass: "text-yellow-200",
    priority: 45
  }
];
const DEFAULT_ASTRONOMICAL_CONFIG = {
  ayanamsha: "LAHIRI",
  tradition: "PURNIMANTA",
  sampradaya: "SMARTA",
  nodeMode: "TRUE"
};
class VedicCalculationError extends Error {
  code;
  details;
  constructor(code, message, details) {
    super(message);
    this.name = "VedicCalculationError";
    this.code = code;
    this.details = details;
  }
}
const HINDI_GREGORIAN_MONTHS = [
  "जनवरी",
  "फ़रवरी",
  "मार्च",
  "अप्रैल",
  "मई",
  "जून",
  "जुलाई",
  "अगस्त",
  "सितंबर",
  "अक्टूबर",
  "नवंबर",
  "दिसंबर"
];
const HINDI_MONTH_SHORT = [
  "जनवरी",
  "फरवरी",
  "मार्च",
  "अप्रैल",
  "मई",
  "जून",
  "जुलाई",
  "अगस्त",
  "सितंबर",
  "अक्टूबर",
  "नवंबर",
  "दिसंबर"
];
const ENGLISH_MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
const VAAR_LIST = [
  { full: "रविवार", short: "रवि", eng: "Sun" },
  { full: "सोमवार", short: "सोम", eng: "Mon" },
  { full: "मंगलवार", short: "मंगल", eng: "Tue" },
  { full: "बुधवार", short: "बुध", eng: "Wed" },
  { full: "गुरुवार", short: "गुरु", eng: "Thu" },
  { full: "शुक्रवार", short: "शुक्र", eng: "Fri" },
  { full: "शनिवार", short: "शनि", eng: "Sat" }
];
const SHUKLA_TITHIS = [
  "प्रतिपदा",
  "द्वितीया",
  "तृतीया",
  "चतुर्थी",
  "पंचमी",
  "षष्ठी",
  "सप्तमी",
  "अष्टमी",
  "नवमी",
  "दशमी",
  "एकादशी",
  "द्वादशी",
  "त्रयोदशी",
  "चतुर्दशी",
  "पूर्णिमा"
];
const KRISHNA_TITHIS = [
  "प्रतिपदा",
  "द्वितीया",
  "तृतीया",
  "चतुर्थी",
  "पंचमी",
  "षष्ठी",
  "सप्तमी",
  "अष्टमी",
  "नवमी",
  "दशमी",
  "एकादशी",
  "द्वादशी",
  "त्रयोदशी",
  "चतुर्दशी",
  "अमावस्या"
];
const NAKSHATRAS_27 = [
  "अश्विनी",
  "भरणी",
  "कृत्तिका",
  "रोहिणी",
  "मृगशिरा",
  "आर्द्रा",
  "पुनर्वसु",
  "पुष्य",
  "आश्लेषा",
  "मघा",
  "पूर्वाफाल्गुनी",
  "उत्तराफाल्गुनी",
  "हस्त",
  "चित्रा",
  "स्वाति",
  "विशाखा",
  "अनुराधा",
  "ज्येष्ठा",
  "मूल",
  "पूर्वाषाढ़ा",
  "उत्तराषाढ़ा",
  "श्रवण",
  "धनिष्ठा",
  "शतभिषा",
  "पूर्वाभाद्रपदा",
  "उत्तराभाद्रपदा",
  "रेवती"
];
const YOGAS_27 = [
  "विष्कम्भ",
  "प्रीति",
  "आयुष्मान",
  "सौभाग्य",
  "शोभन",
  "अतिगण्ड",
  "सुकर्मा",
  "धृति",
  "शूल",
  "गण्ड",
  "वृद्धि",
  "ध्रुव",
  "व्याघात",
  "हर्षण",
  "वज्र",
  "सिद्धि",
  "व्यतीपात",
  "वरीयान",
  "परिघ",
  "शिव",
  "सिद्ध",
  "साध्य",
  "शुभ",
  "शुक्ल",
  "ब्रह्म",
  "इन्द्र",
  "वैधृति"
];
const KARANAS_11 = [
  "बव",
  "बालव",
  "कौलव",
  "तैतिल",
  "गर",
  "वणिज",
  "विष्टि (भद्रा)",
  "शकुनि",
  "चतुष्पाद",
  "नाग",
  "किंस्तुघ्न"
];
const RASHIS_12 = [
  "मेष राशि",
  "वृषभ राशि",
  "मिथुन राशि",
  "कर्क राशि",
  "सिंह राशि",
  "कन्या राशि",
  "तुला राशि",
  "वृश्चिक राशि",
  "धनु राशि",
  "मकर राशि",
  "कुम्भ राशि",
  "मीन राशि"
];
const HINDU_MAAS_NAMES = [
  "चैत्र",
  "वैशाख",
  "ज्येष्ठ",
  "आषाढ़",
  "श्रावण",
  "भाद्रपद",
  "आश्विन",
  "कार्तिक",
  "मार्गशीर्ष",
  "पौष",
  "माघ",
  "फाल्गुन"
];
const SANKRANTI_NAMES_HI = [
  "मेष संक्रांति (सौर नववर्ष / बैसाखी)",
  "वृषभ संक्रांति",
  "मिथुन संक्रांति",
  "कर्क संक्रांति (दक्षिणायन प्रारंभ)",
  "सिंह संक्रांति",
  "कन्या संक्रांति (विश्वकर्मा पूजन)",
  "तुला संक्रांति",
  "वृश्चिक संक्रांति",
  "धनु संक्रांति (खरमास प्रारंभ)",
  "मकर संक्रांति (उत्तरायण महापर्व)",
  "कुम्भ संक्रांति",
  "मीन संक्रांति (खरमास प्रारंभ)"
];
const SANKRANTI_NAMES_EN = [
  "Mesha Sankranti",
  "Vrishabha Sankranti",
  "Mithuna Sankranti",
  "Karka Sankranti",
  "Simha Sankranti",
  "Kanya Sankranti",
  "Tula Sankranti",
  "Vrishchika Sankranti",
  "Dhanu Sankranti",
  "Makar Sankranti",
  "Kumbha Sankranti",
  "Meena Sankranti"
];
function normalizeDeg(deg) {
  const m = deg % 360;
  return m < 0 ? m + 360 : m;
}
function getBaseTithiNameByIndex(tithiIndex) {
  const normalized = ((Math.round(tithiIndex) - 1) % 30 + 30) % 30;
  if (normalized < 15) return SHUKLA_TITHIS[normalized] || "प्रतिपदा";
  return KRISHNA_TITHIS[normalized - 15] || "प्रतिपदा";
}
function getKaranaNameByIdx60(idx60) {
  const k = (Math.floor(idx60) % 60 + 60) % 60;
  if (k === 0) return KARANAS_11[10];
  if (k >= 57) return KARANAS_11[7 + (k - 57)] || "शकुनि";
  return KARANAS_11[(k - 1) % 7] || "बव";
}
function validateLocation(loc) {
  if (!loc || typeof loc.lat !== "number" || !Number.isFinite(loc.lat) || loc.lat < -90 || loc.lat > 90 || typeof loc.lon !== "number" || !Number.isFinite(loc.lon) || loc.lon < -180 || loc.lon > 180) {
    throw new VedicCalculationError("INVALID_COORDINATES", "Invalid geographical coordinates for Panchang location.", {
      lat: Number(loc?.lat),
      lon: Number(loc?.lon)
    });
  }
}
const _validTzCache = /* @__PURE__ */ new Map();
function isValidIanaTimezone(timeZone) {
  if (!timeZone || typeof timeZone !== "string") return false;
  const cached = _validTzCache.get(timeZone);
  if (cached !== void 0) return cached;
  let valid = false;
  try {
    new Intl.DateTimeFormat("en-US", { timeZone }).format(/* @__PURE__ */ new Date(0));
    valid = true;
  } catch {
    valid = false;
  }
  _validTzCache.set(timeZone, valid);
  return valid;
}
function resolveSafeTimezone(loc) {
  if (loc.timezone && isValidIanaTimezone(loc.timezone)) {
    return loc.timezone;
  }
  const off = Number.isFinite(loc.tzOffsetHours) ? loc.tzOffsetHours : 5.5;
  if (Math.abs(off - 5.5) < 0.05) return "Asia/Kolkata";
  if (Math.abs(off - 5.75) < 0.05) return "Asia/Kathmandu";
  if (Math.abs(off - 4) < 0.05) return "Asia/Dubai";
  if (Math.abs(off - 8) < 0.05) return "Asia/Singapore";
  if (Math.abs(off - 9) < 0.05) return "Asia/Tokyo";
  if (Math.abs(off - 0) < 0.05) return "Europe/London";
  if (Math.abs(off + 5) < 0.05) return "America/New_York";
  if (Math.abs(off + 8) < 0.05) return "America/Los_Angeles";
  if (Math.abs(off - 10) < 0.05) return "Australia/Sydney";
  return "Asia/Kolkata";
}
const _dtfPartsCache = /* @__PURE__ */ new Map();
function getPartsFormatter(timeZone) {
  let fmt = _dtfPartsCache.get(timeZone);
  if (!fmt) {
    fmt = new Intl.DateTimeFormat("en-US", {
      timeZone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      weekday: "short",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hourCycle: "h23"
    });
    _dtfPartsCache.set(timeZone, fmt);
  }
  return fmt;
}
const WEEKDAY_SHORT_MAP = {
  Sun: 0,
  Mon: 1,
  Tue: 2,
  Wed: 3,
  Thu: 4,
  Fri: 5,
  Sat: 6
};
function getLocalDateParts(epochOrDate, timeZone = "Asia/Kolkata") {
  const epochMs = typeof epochOrDate === "number" ? epochOrDate : epochOrDate.getTime();
  const safeTz = isValidIanaTimezone(timeZone) ? timeZone : "Asia/Kolkata";
  const parts = getPartsFormatter(safeTz).formatToParts(new Date(epochMs));
  let year = 2026;
  let month = 1;
  let day = 1;
  let hours = 0;
  let minutes = 0;
  let seconds = 0;
  let weekdayIndex = 0;
  for (const p of parts) {
    if (p.type === "year") year = parseInt(p.value, 10);
    else if (p.type === "month") month = parseInt(p.value, 10);
    else if (p.type === "day") day = parseInt(p.value, 10);
    else if (p.type === "hour") hours = parseInt(p.value, 10) % 24;
    else if (p.type === "minute") minutes = parseInt(p.value, 10);
    else if (p.type === "second") seconds = parseInt(p.value, 10);
    else if (p.type === "weekday") weekdayIndex = WEEKDAY_SHORT_MAP[p.value] ?? 0;
  }
  const wallAsUtc = Date.UTC(year, month - 1, day, hours, minutes, seconds);
  const offsetMinutes = Math.round((wallAsUtc - epochMs) / 6e4);
  const dateKey = `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
  const ampm = hours >= 12 ? "अपराह्न" : hours === 0 ? "रात्रि" : "पूर्वाह्न";
  const dispH = hours % 12 === 0 ? 12 : hours % 12;
  const timeString12h = `${String(dispH).padStart(2, "0")}:${String(minutes).padStart(2, "0")} ${ampm}`;
  return {
    year,
    month,
    day,
    weekdayIndex,
    hours,
    minutes,
    seconds,
    dateKey,
    offsetMinutes,
    timeString12h
  };
}
const MIN_PANCHANG_YEAR = 1600;
const MAX_PANCHANG_YEAR = 2500;
function createSafeUtcDate(year, monthIndex0, day, hour = 0, minute = 0, second = 0) {
  const d = /* @__PURE__ */ new Date(0);
  d.setUTCFullYear(year, monthIndex0, day);
  d.setUTCHours(hour, minute, second, 0);
  return d;
}
function getDaysInMonthSafe(year, month1Based) {
  return createSafeUtcDate(year, month1Based, 0, 12, 0, 0).getUTCDate() || 31;
}
function zonedWallClockToUtcMs(year, month, day, hour = 0, minute = 0, second = 0, timeZone = "Asia/Kolkata") {
  const safeTz = isValidIanaTimezone(timeZone) ? timeZone : "Asia/Kolkata";
  const targetUtcAsWall = createSafeUtcDate(year, month - 1, day, hour, minute, second).getTime();
  let guess = targetUtcAsWall;
  for (let i = 0; i < 3; i++) {
    const observed = getLocalDateParts(guess, safeTz);
    const observedAsWall = createSafeUtcDate(
      observed.year,
      observed.month - 1,
      observed.day,
      observed.hours,
      observed.minutes,
      observed.seconds
    ).getTime();
    const diff = targetUtcAsWall - observedAsWall;
    if (diff === 0) break;
    guess += diff;
  }
  return guess;
}
function getLocalMidnightUtcMs(year, month, day, timeZone = "Asia/Kolkata") {
  return zonedWallClockToUtcMs(year, month, day, 0, 0, 0, timeZone);
}
function formatDateKey(year, month, day) {
  return `${String(year).padStart(4, "0")}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}
function parseDateKey(dateKey) {
  const m = dateKey.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!m) {
    throw new VedicCalculationError("INVALID_DATE", `Invalid dateKey format: ${dateKey}`);
  }
  return {
    year: parseInt(m[1], 10),
    month: parseInt(m[2], 10),
    day: parseInt(m[3], 10)
  };
}
function shiftCivilDate(year, month, day, deltaDays) {
  const d = createSafeUtcDate(year, month - 1, day + deltaDays, 12, 0, 0);
  const y = d.getUTCFullYear();
  const m = d.getUTCMonth() + 1;
  const dy = d.getUTCDate();
  return { year: y, month: m, day: dy, dateKey: formatDateKey(y, m, dy) };
}
function getLocalCalendarGridInfo(year, month) {
  const firstDay = createSafeUtcDate(year, month - 1, 1, 12, 0, 0);
  const startWeekday = firstDay.getUTCDay();
  const daysInMonth = getDaysInMonthSafe(year, month);
  const daysInPrevMonth = createSafeUtcDate(year, month - 1, 0, 12, 0, 0).getUTCDate();
  return { startWeekday, daysInMonth, daysInPrevMonth };
}
function getMsUntilNextZoneMidnight(now = /* @__PURE__ */ new Date(), timeZone = "Asia/Kolkata") {
  const parts = getLocalDateParts(now, timeZone);
  const nextCivil = shiftCivilDate(parts.year, parts.month, parts.day, 1);
  const nextMidnightMs = getLocalMidnightUtcMs(nextCivil.year, nextCivil.month, nextCivil.day, timeZone);
  return Math.max(1e3, nextMidnightMs - now.getTime() + 250);
}
function getTimePrefix(hour24, _minute = 0) {
  const h = (Math.floor(hour24) % 24 + 24) % 24;
  if (h <= 3) return "रात्रि";
  if (h < 12) return "प्रातः";
  if (h <= 15) return "दोपहर";
  if (h <= 19) return "शाम";
  return "रात्रि";
}
function shouldAddNextDay(startHour24, endHour24) {
  const sH = (Math.floor(startHour24) % 24 + 24) % 24;
  const eH = (Math.floor(endHour24) % 24 + 24) % 24;
  if (sH < 12 && eH < 12) return false;
  if (sH >= 12 && eH === 0) return false;
  if (sH >= 12 && eH >= 1 && eH < 12) return true;
  return false;
}
function formatClock12(hour24, minute) {
  const h = (Math.floor(hour24) % 24 + 24) % 24;
  const m = (Math.floor(minute) % 60 + 60) % 60;
  const suffix = h >= 12 ? "PM" : "AM";
  const dispH = h % 12 === 0 ? 12 : h % 12;
  return `${String(dispH).padStart(2, "0")}:${String(m).padStart(2, "0")} ${suffix}`;
}
function formatAstroTimeRange(startHour24, startMinute, endHour24, endMinute, forceNextDay = false) {
  const startPrefix = getTimePrefix(startHour24, startMinute);
  const endPrefix = getTimePrefix(endHour24, endMinute);
  const startClock = formatClock12(startHour24, startMinute);
  const endClock = formatClock12(endHour24, endMinute);
  const startLabel = startPrefix ? `${startPrefix} ${startClock}` : startClock;
  const addNextDay = forceNextDay || shouldAddNextDay(startHour24, endHour24);
  if (addNextDay) {
    const endFull = endPrefix ? `${endPrefix} ${endClock}` : endClock;
    return `${startLabel} – अगले दिन ${endFull}`;
  }
  if (startPrefix === endPrefix) {
    return `${startLabel} – ${endClock}`;
  }
  const endPart = endPrefix ? `${endPrefix} ${endClock}` : endClock;
  return `${startLabel} – ${endPart}`;
}
function normalizeNearestSecondMs(epochMs) {
  return Math.round(epochMs / 1e3) * 1e3;
}
function formatEpochInZoneHi(epochMs, timeZone = "Asia/Kolkata", referenceDateKey, includePostMidnightNote = true) {
  const roundedMs = normalizeNearestSecondMs(epochMs);
  const parts = getLocalDateParts(roundedMs, timeZone);
  const h = parts.hours;
  const m = parts.minutes;
  const s = parts.seconds;
  const isNextCivilDate = Boolean(referenceDateKey && parts.dateKey > referenceDateKey);
  const prefix = getTimePrefix(h, m);
  const clock = formatClock12WithSeconds(h, m, s);
  const core = prefix ? `${prefix} ${clock}` : clock;
  if (isNextCivilDate && includePostMidnightNote) {
    return `अगले दिन ${core}`.replace(/(?:अगले\s+दिन\s+)+/gu, "अगले दिन ");
  }
  return core;
}
function formatClockOnlyInZone(epochMs, timeZone = "Asia/Kolkata") {
  const roundedMs = normalizeNearestSecondMs(epochMs);
  const parts = getLocalDateParts(roundedMs, timeZone);
  return formatClock12WithSeconds(parts.hours, parts.minutes, parts.seconds);
}
function formatWindowRangeInZoneHi(startMs, endMs, timeZone = "Asia/Kolkata", referenceDateKey, prefixNextDayStart = false) {
  return formatWindowRangeExactSecondsInZoneHi(
    startMs,
    endMs,
    timeZone,
    referenceDateKey,
    prefixNextDayStart
  );
}
function formatClock12WithSeconds(hour24, minute, second) {
  const h = (Math.floor(hour24) % 24 + 24) % 24;
  const m = (Math.floor(minute) % 60 + 60) % 60;
  const s = (Math.floor(second) % 60 + 60) % 60;
  const suffix = h >= 12 ? "PM" : "AM";
  const dispH = h % 12 === 0 ? 12 : h % 12;
  return `${String(dispH).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")} ${suffix}`;
}
function formatEpochExactSecondsInZoneHi(epochMs, timeZone = "Asia/Kolkata", referenceDateKey, includePostMidnightNote = true) {
  const roundedSecMs = normalizeNearestSecondMs(epochMs);
  const parts = getLocalDateParts(roundedSecMs, timeZone);
  const isNextCivilDate = Boolean(referenceDateKey && parts.dateKey > referenceDateKey);
  const prefix = getTimePrefix(parts.hours, parts.minutes);
  const clock = formatClock12WithSeconds(parts.hours, parts.minutes, parts.seconds);
  const core = prefix ? `${prefix} ${clock}` : clock;
  if (isNextCivilDate && includePostMidnightNote) {
    return `अगले दिन ${core}`.replace(/(?:अगले\s+दिन\s+)+/gu, "अगले दिन ");
  }
  return core;
}
function formatWindowRangeExactSecondsInZoneHi(startMs, endMs, timeZone = "Asia/Kolkata", referenceDateKey, prefixNextDayStart = false) {
  const startSecMs = normalizeNearestSecondMs(startMs);
  const endSecMs = normalizeNearestSecondMs(endMs);
  const sParts = getLocalDateParts(startSecMs, timeZone);
  const eParts = getLocalDateParts(endSecMs, timeZone);
  const startPrefix = getTimePrefix(sParts.hours, sParts.minutes);
  const endPrefix = getTimePrefix(eParts.hours, eParts.minutes);
  const startClock = formatClock12WithSeconds(sParts.hours, sParts.minutes, sParts.seconds);
  const endClock = formatClock12WithSeconds(eParts.hours, eParts.minutes, eParts.seconds);
  const startLabel = startPrefix ? `${startPrefix} ${startClock}` : startClock;
  const multiDaySpan = endSecMs - startSecMs >= 24 * 36e5;
  const startIsNextDay = Boolean(
    prefixNextDayStart && referenceDateKey && sParts.dateKey > referenceDateKey
  );
  const endCrossesIntoNextDay = Boolean(
    referenceDateKey && !startIsNextDay && eParts.dateKey > referenceDateKey
  );
  const addNextDay = multiDaySpan || endCrossesIntoNextDay || !startIsNextDay && shouldAddNextDay(sParts.hours, eParts.hours);
  let rawRange;
  if (addNextDay) {
    const endFull = endPrefix ? `${endPrefix} ${endClock}` : endClock;
    rawRange = `${startLabel} – अगले दिन ${endFull}`;
  } else if (startPrefix === endPrefix) {
    rawRange = `${startLabel} – ${endClock}`;
  } else {
    const endPart = endPrefix ? `${endPrefix} ${endClock}` : endClock;
    rawRange = `${startLabel} – ${endPart}`;
  }
  if (startIsNextDay) {
    const cleanRange = rawRange.replace(/^अगले\s+दिन\s+/u, "").trim();
    return `अगले दिन ${cleanRange}`;
  }
  return rawRange;
}
function formatDurationExactSecondsHi(durationMs) {
  const totalSec = Math.max(0, Math.round(durationMs / 1e3));
  const hours = Math.floor(totalSec / 3600);
  const minutes = Math.floor(totalSec % 3600 / 60);
  const seconds = totalSec % 60;
  if (hours > 0) {
    return `${hours} घंटे ${String(minutes).padStart(2, "0")} मिनट ${String(seconds).padStart(2, "0")} सेकंड`;
  }
  return `${minutes} मिनट ${String(seconds).padStart(2, "0")} सेकंड`;
}
function toContinuousHoursFromMidnight(targetMs, dayMidnightUtcMs) {
  return (targetMs - dayMidnightUtcMs) / 36e5;
}
const J2000_UTC_MS = Date.UTC(2e3, 0, 1, 12, 0, 0);
const MS_PER_JULIAN_CENTURY = 36525 * 864e5;
function epochMsToJD(epochMs) {
  return epochMs / 864e5 + 24405875e-1;
}
function jdToEpochMs(jd) {
  return (jd - 24405875e-1) * 864e5;
}
const _dpsiHourCache = /* @__PURE__ */ new Map();
function getAyanamshaDeg(epochMs, mode = "LAHIRI") {
  if (mode === "TROPICAL") {
    return 0;
  }
  const t = (epochMs - J2000_UTC_MS) / MS_PER_JULIAN_CENTURY;
  const precession = 1.39697128 * t + 3086e-7 * t * t;
  const hourBucket = Math.round(epochMs / 36e5);
  let dpsiDeg = _dpsiHourCache.get(hourBucket);
  if (dpsiDeg === void 0) {
    dpsiDeg = e_tilt(new AstroTime(new Date(hourBucket * 36e5))).dpsi / 3600;
    if (_dpsiHourCache.size > 16e3) _dpsiHourCache.clear();
    _dpsiHourCache.set(hourBucket, dpsiDeg);
  }
  switch (mode) {
    case "TRUE_CHITRA":
      return 23.8414 + precession + dpsiDeg;
    case "RAMAN":
      return 22.4601 + precession;
    case "KP":
      return 23.7575 + precession + dpsiDeg;
    case "LAHIRI":
    default:
      return 23.8570922 + precession + dpsiDeg;
  }
}
function getApparentSunLonDeg(epochMs) {
  return SunPosition(new Date(epochMs)).elon;
}
function getApparentMoonLonDeg(epochMs) {
  return EclipticGeoMoon(new Date(epochMs)).lon;
}
function getMoonSunElongationDeg(epochMs) {
  return normalizeDeg(getApparentMoonLonDeg(epochMs) - getApparentSunLonDeg(epochMs));
}
function getSiderealSunLonDeg(epochMs, mode = "LAHIRI") {
  return normalizeDeg(getApparentSunLonDeg(epochMs) - getAyanamshaDeg(epochMs, mode));
}
function getSiderealMoonLonDeg(epochMs, mode = "LAHIRI") {
  return normalizeDeg(getApparentMoonLonDeg(epochMs) - getAyanamshaDeg(epochMs, mode));
}
function getSiderealYogaDeg(epochMs, mode = "LAHIRI") {
  return normalizeDeg(getSiderealSunLonDeg(epochMs, mode) + getSiderealMoonLonDeg(epochMs, mode));
}
function getNodeLongitudesDeg(epochMs, mode = "LAHIRI", nodeMode = "TRUE") {
  const T = (epochMs - J2000_UTC_MS) / MS_PER_JULIAN_CENTURY;
  const meanTropOmega = normalizeDeg(
    125.04455501 - 1934.1361849 * T + 20762e-7 * T * T + T * T * T / 467410 - T * T * T * T / 60616e3
  );
  let tropOmega = meanTropOmega;
  if (nodeMode === "TRUE") {
    const rad = Math.PI / 180;
    const D = normalizeDeg(297.8501921 + 445267.1114034 * T - 18819e-7 * T * T);
    const M = normalizeDeg(357.5291092 + 35999.0502909 * T - 1536e-7 * T * T);
    const Mp = normalizeDeg(134.9633964 + 477198.8675055 * T + 87414e-7 * T * T);
    const F = normalizeDeg(93.272095 + 483202.0175233 * T - 36539e-7 * T * T);
    const corrDeg = -1.4979 * Math.sin(2 * (D - F) * rad) - 0.15 * Math.sin(M * rad) - 0.1226 * Math.sin(2 * D * rad) + 0.1176 * Math.sin(2 * F * rad) - 0.0801 * Math.sin(2 * (Mp - F) * rad);
    tropOmega = normalizeDeg(meanTropOmega + corrDeg);
  }
  const ayanamsha = getAyanamshaDeg(epochMs, mode);
  const rahuDeg = normalizeDeg(tropOmega - ayanamsha);
  const ketuDeg = normalizeDeg(rahuDeg + 180);
  return { rahuDeg, ketuDeg };
}
const _dayTimingsCache = /* @__PURE__ */ new Map();
function calculateDayAstronomicalTimings(year, month, day, location) {
  validateLocation(location);
  const timeZone = resolveSafeTimezone(location);
  const elevation = location.elevationMeters ?? (location.id === "rudrapur" ? 214 : 100);
  const cityShort = (location.hindiName || location.name).split(",")[0].trim() || "स्थानीय";
  const cacheKey = `${year}-${month}-${day}_${location.lat.toFixed(4)}_${location.lon.toFixed(4)}_${elevation}_${timeZone}_${cityShort}`;
  const cached = _dayTimingsCache.get(cacheKey);
  if (cached) return cached;
  const observer = new Observer(location.lat, location.lon, elevation);
  const dipMeters = elevation > 600 ? elevation : 0;
  const dayMidnightUtcMs = getLocalMidnightUtcMs(year, month, day, timeZone);
  const nextCivil = shiftCivilDate(year, month, day, 1);
  const nextMidnightUtcMs = getLocalMidnightUtcMs(nextCivil.year, nextCivil.month, nextCivil.day, timeZone);
  const srSearchStart = new Date(dayMidnightUtcMs + 60 * 6e4);
  const srEvt = SearchRiseSet(Body.Sun, observer, 1, srSearchStart, 1, dipMeters);
  let polarFallbackUsed = false;
  const sunriseTimestamp = srEvt ? srEvt.date.getTime() : (() => {
    polarFallbackUsed = true;
    return dayMidnightUtcMs + 6 * 36e5;
  })();
  const ssSearchStart = new Date(sunriseTimestamp + 60 * 6e4);
  const ssEvt = SearchRiseSet(Body.Sun, observer, -1, ssSearchStart, 1, dipMeters);
  const sunsetTimestamp = ssEvt ? ssEvt.date.getTime() : (() => {
    polarFallbackUsed = true;
    return dayMidnightUtcMs + 18 * 36e5;
  })();
  const nextSrSearchStart = new Date(nextMidnightUtcMs + 60 * 6e4);
  const nextSrEvt = SearchRiseSet(Body.Sun, observer, 1, nextSrSearchStart, 1, dipMeters);
  const nextSunriseTimestamp = nextSrEvt ? nextSrEvt.date.getTime() : nextMidnightUtcMs + 6 * 36e5;
  const mrEvt = SearchRiseSet(Body.Moon, observer, 1, new Date(dayMidnightUtcMs), 1.05, dipMeters);
  let moonriseTimestamp = mrEvt ? mrEvt.date.getTime() : null;
  if (moonriseTimestamp !== null && moonriseTimestamp >= nextMidnightUtcMs) {
    moonriseTimestamp = null;
  }
  const msEvt = SearchRiseSet(Body.Moon, observer, -1, new Date(dayMidnightUtcMs), 1.05, dipMeters);
  let moonsetTimestamp = msEvt ? msEvt.date.getTime() : null;
  if (moonsetTimestamp !== null && moonsetTimestamp >= nextMidnightUtcMs) {
    moonsetTimestamp = null;
  }
  let taraUdayaTimestamp = sunsetTimestamp + 38 * 6e4;
  try {
    const twilightEvt = SearchAltitude(
      Body.Sun,
      observer,
      -1,
      new Date(sunsetTimestamp),
      0.5,
      -9
    );
    if (twilightEvt) {
      taraUdayaTimestamp = twilightEvt.date.getTime();
    }
  } catch {
  }
  const cityShortFlat = cityShort.replace(/\s*\(([^()]+)\)/gu, " • $1").trim();
  const sunriseClockHi = `${formatClockOnlyInZone(sunriseTimestamp, timeZone)} (${cityShortFlat})`;
  const sunsetClockHi = `${formatClockOnlyInZone(sunsetTimestamp, timeZone)} (${cityShortFlat})`;
  const moonriseClockHi = moonriseTimestamp !== null ? formatClockOnlyInZone(moonriseTimestamp, timeZone) : "आज चंद्रोदय नहीं";
  const moonsetClockHi = moonsetTimestamp !== null ? formatClockOnlyInZone(moonsetTimestamp, timeZone) : "आज चंद्रास्त नहीं";
  const result = {
    sunriseTimestamp,
    sunsetTimestamp,
    nextSunriseTimestamp,
    moonriseTimestamp,
    moonsetTimestamp,
    taraUdayaTimestamp,
    sunriseContinuousHours: toContinuousHoursFromMidnight(sunriseTimestamp, dayMidnightUtcMs),
    sunsetContinuousHours: toContinuousHoursFromMidnight(sunsetTimestamp, dayMidnightUtcMs),
    nextSunriseContinuousHours: toContinuousHoursFromMidnight(nextSunriseTimestamp, dayMidnightUtcMs),
    dayDurationHours: (sunsetTimestamp - sunriseTimestamp) / 36e5,
    nightDurationHours: (nextSunriseTimestamp - sunsetTimestamp) / 36e5,
    dayMidnightUtcMs,
    sunriseClockHi,
    sunsetClockHi,
    moonriseClockHi,
    moonsetClockHi,
    polarFallbackUsed
  };
  if (_dayTimingsCache.size > 12e3) _dayTimingsCache.clear();
  _dayTimingsCache.set(cacheKey, result);
  return result;
}
function computeDayKaalWindows(timings, location) {
  const { sunriseTimestamp, sunsetTimestamp, nextSunriseTimestamp, taraUdayaTimestamp } = timings;
  const dinamanaMs = sunsetTimestamp - sunriseTimestamp;
  const ratrimanaMs = nextSunriseTimestamp - sunsetTimestamp;
  const oneMuhurtaDayMs = dinamanaMs / 15;
  const oneMuhurtaNightMs = ratrimanaMs / 15;
  const elevation = location.elevationMeters ?? 100;
  const observer = new Observer(location.lat, location.lon, elevation);
  const eveningMr = SearchRiseSet(
    Body.Moon,
    observer,
    1,
    new Date(sunsetTimestamp - 2 * 36e5),
    0.85
  );
  const chandrodayaRef = eveningMr ? eveningMr.date.getTime() : sunsetTimestamp + 2.25 * 36e5;
  const solarMidnightMs = sunsetTimestamp + ratrimanaMs * 0.5;
  const pradoshEndMs = sunsetTimestamp + 144 * 6e4;
  return {
    ARUNODAYA: {
      type: "ARUNODAYA",
      startTimestamp: sunriseTimestamp - 96 * 6e4,
      // 4 Ghatis before Sunrise
      endTimestamp: sunriseTimestamp,
      referenceTimestamp: sunriseTimestamp - 96 * 6e4,
      labelHi: "अरुणोदय काल (सूर्योदय से 4 घटी पूर्व)"
    },
    SUNRISE: {
      type: "SUNRISE",
      startTimestamp: sunriseTimestamp,
      endTimestamp: sunriseTimestamp + 1,
      referenceTimestamp: sunriseTimestamp,
      labelHi: "उदय काल (सूर्योदय)"
    },
    PRATAH: {
      type: "PRATAH",
      startTimestamp: sunriseTimestamp,
      endTimestamp: sunriseTimestamp + 3 * oneMuhurtaDayMs,
      referenceTimestamp: sunriseTimestamp + 1.5 * oneMuhurtaDayMs,
      labelHi: "प्रातः काल (प्रथम 3 मुहूर्त)"
    },
    MADHYAHNA: {
      type: "MADHYAHNA",
      startTimestamp: sunriseTimestamp + 6 * oneMuhurtaDayMs,
      endTimestamp: sunriseTimestamp + 9 * oneMuhurtaDayMs,
      referenceTimestamp: sunriseTimestamp + 0.5 * dinamanaMs,
      labelHi: "मध्याह्न काल (7–9वां मुहूर्त)"
    },
    APARAHNA: {
      type: "APARAHNA",
      startTimestamp: sunriseTimestamp + 9 * oneMuhurtaDayMs,
      endTimestamp: sunriseTimestamp + 12 * oneMuhurtaDayMs,
      referenceTimestamp: sunriseTimestamp + 10.5 * oneMuhurtaDayMs,
      labelHi: "अपराह्न काल (10–12वां मुहूर्त)"
    },
    SUNSET: {
      type: "SUNSET",
      startTimestamp: sunsetTimestamp - 12 * 6e4,
      endTimestamp: sunsetTimestamp + 12 * 6e4,
      referenceTimestamp: sunsetTimestamp,
      labelHi: "सूर्यास्त / गोधूलि बेला"
    },
    PRADOSH: {
      type: "PRADOSH",
      startTimestamp: sunsetTimestamp,
      endTimestamp: pradoshEndMs,
      referenceTimestamp: sunsetTimestamp + 45 * 6e4,
      labelHi: "प्रदोष काल (सूर्यास्त से 144 मिनट)"
    },
    EVENING: {
      type: "EVENING",
      startTimestamp: sunsetTimestamp,
      endTimestamp: taraUdayaTimestamp + 45 * 6e4,
      referenceTimestamp: taraUdayaTimestamp,
      labelHi: "सायंकाल / तारोदय काल"
    },
    CHANDRODAYA: {
      type: "CHANDRODAYA",
      startTimestamp: chandrodayaRef - 15 * 6e4,
      endTimestamp: chandrodayaRef + 45 * 6e4,
      referenceTimestamp: chandrodayaRef,
      labelHi: "चंद्रोदय व्याप्ति काल"
    },
    NISHITHA: {
      type: "NISHITHA",
      startTimestamp: solarMidnightMs - oneMuhurtaNightMs * 0.5,
      endTimestamp: solarMidnightMs + oneMuhurtaNightMs * 0.5,
      referenceTimestamp: solarMidnightMs,
      labelHi: "निशीथ काल (अर्धरात्रि)"
    },
    SOLAR_INGRESS: {
      type: "SOLAR_INGRESS",
      startTimestamp: sunriseTimestamp,
      endTimestamp: nextSunriseTimestamp,
      referenceTimestamp: sunriseTimestamp,
      labelHi: "सूर्य संक्रांति पुण्यकाल"
    }
  };
}
function bisectCrossing(lowMs, highMs, targetUnwrapped, baseAnchorDeg, evalDegFn, isForward) {
  let lo = lowMs;
  let hi = highMs;
  for (let i = 0; i < 28; i++) {
    const mid = (lo + hi) * 0.5;
    const raw = evalDegFn(mid);
    let unwrappedDelta = (raw - baseAnchorDeg + 540) % 360 - 180;
    if (isForward && unwrappedDelta < -90) unwrappedDelta += 360;
    if (!isForward && unwrappedDelta > 90) unwrappedDelta -= 360;
    const val = baseAnchorDeg + unwrappedDelta;
    if (val < targetUnwrapped) {
      lo = mid;
    } else {
      hi = mid;
    }
  }
  return Math.round((lo + hi) * 0.5);
}
function solveMonotonicDivisionIntervals(windowStartMs, windowEndMs, stepDeg, totalSteps, evalDegFn, coarseStepMs = 45 * 6e4) {
  const deg0 = evalDegFn(windowStartMs);
  const idx0 = Math.floor(deg0 / stepDeg) % totalSteps;
  const lowerTargetUnwrapped = Math.floor(deg0 / stepDeg) * stepDeg;
  let prevT = windowStartMs;
  let prevVal = deg0;
  let interval0Start = windowStartMs - 12 * 36e5;
  let prevRaw = deg0;
  for (let iter = 0; iter < 120; iter++) {
    const nextT = prevT - coarseStepMs;
    const rawNext = evalDegFn(nextT);
    const delta = (rawNext - prevRaw + 540) % 360 - 180;
    const nextVal = prevVal + delta;
    if (nextVal <= lowerTargetUnwrapped) {
      interval0Start = bisectCrossing(nextT, prevT, lowerTargetUnwrapped, lowerTargetUnwrapped, evalDegFn, false);
      break;
    }
    prevT = nextT;
    prevVal = nextVal;
    prevRaw = rawNext;
  }
  const boundaries = [
    { index: idx0, boundaryStartMs: interval0Start }
  ];
  let curT = windowStartMs;
  let curVal = deg0;
  let curRaw = deg0;
  let nextBoundaryMultiplier = Math.floor(deg0 / stepDeg) + 1;
  for (let iter = 0; iter < 180; iter++) {
    const nextT = curT + coarseStepMs;
    const rawNext = evalDegFn(nextT);
    const delta = (rawNext - curRaw + 540) % 360 - 180;
    const nextVal = curVal + delta;
    while (nextVal >= nextBoundaryMultiplier * stepDeg) {
      const targetUnwrapped = nextBoundaryMultiplier * stepDeg;
      const targetModulo = (targetUnwrapped % 360 + 360) % 360;
      const crossMs = bisectCrossing(curT, nextT, targetModulo, targetModulo, evalDegFn, true);
      const prevEntry = boundaries[boundaries.length - 1];
      prevEntry.boundaryEndMs = crossMs;
      if (crossMs >= windowEndMs) {
        return boundaries.map((b) => ({
          index: b.index,
          startTimestamp: b.boundaryStartMs,
          endTimestamp: b.boundaryEndMs ?? crossMs
        }));
      }
      const nextIdx = (nextBoundaryMultiplier % totalSteps + totalSteps) % totalSteps;
      boundaries.push({ index: nextIdx, boundaryStartMs: crossMs });
      nextBoundaryMultiplier += 1;
    }
    curT = nextT;
    curVal = nextVal;
    curRaw = rawNext;
  }
  return boundaries.map((b) => ({
    index: b.index,
    startTimestamp: b.boundaryStartMs,
    endTimestamp: b.boundaryEndMs ?? windowEndMs + 12 * 36e5
  }));
}
function buildTithiIntervalsForDay(timings, dateKey, timeZone) {
  const raw = solveMonotonicDivisionIntervals(
    timings.sunriseTimestamp,
    timings.nextSunriseTimestamp,
    12,
    30,
    getMoonSunElongationDeg,
    30 * 6e4
  );
  const kshayaIntervals = [];
  const tithiIntervals = raw.map((seg, i) => {
    const tithiIndex = seg.index + 1;
    const isShukla = tithiIndex <= 15;
    const withinPaksha = isShukla ? tithiIndex : tithiIndex - 15;
    const nameHi = getBaseTithiNameByIndex(tithiIndex);
    const isActiveAtSunrise = i === 0;
    const isKshaya = !isActiveAtSunrise && seg.startTimestamp > timings.sunriseTimestamp && seg.endTimestamp <= timings.nextSunriseTimestamp;
    const item = {
      tithiIndex,
      withinPaksha,
      paksha: isShukla ? "शुक्ल पक्ष" : "कृष्ण पक्ष",
      pakshaShort: isShukla ? "शुक्ल" : "कृष्ण",
      nameHi,
      startTimestamp: seg.startTimestamp,
      endTimestamp: seg.endTimestamp,
      startFormattedHi: formatEpochInZoneHi(seg.startTimestamp, timeZone, dateKey, true),
      endFormattedHi: formatEpochInZoneHi(seg.endTimestamp, timeZone, dateKey, true),
      isActiveAtSunrise,
      isKshaya,
      isVriddhi: false
    };
    if (isKshaya) kshayaIntervals.push(item);
    return item;
  });
  const udayaName2 = tithiIntervals[0]?.nameHi || "";
  const kshayaNames = kshayaIntervals.map((k) => k.nameHi);
  const kshayaPakshaShort = tithiIntervals[0]?.pakshaShort || "शुक्ल";
  const displayLabelHi = kshayaIntervals.length > 0 ? `${kshayaPakshaShort} ${udayaName2} / ${kshayaNames.join(" / ")}` : "";
  return {
    tithiIntervals,
    kshayaTithis: {
      hasKshaya: kshayaIntervals.length > 0,
      kshayaTithiIndices: kshayaIntervals.map((k) => k.tithiIndex),
      kshayaTithiNamesHi: kshayaNames,
      displayLabelHi,
      intervals: kshayaIntervals
    }
  };
}
function detectVriddhiTithi(year, month, day, location, udayaTithi) {
  resolveSafeTimezone(location);
  const currentDateKey = formatDateKey(year, month, day);
  const empty = {
    isVriddhi: false,
    tithiIndex: udayaTithi.tithiIndex,
    tithiNameHi: udayaTithi.nameHi,
    dayPosition: 1,
    firstDateKey: currentDateKey,
    secondDateKey: currentDateKey,
    displayLabelHi: ""
  };
  const prevCivil = shiftCivilDate(year, month, day, -1);
  const prevTimings = calculateDayAstronomicalTimings(prevCivil.year, prevCivil.month, prevCivil.day, location);
  const prevSunriseTithiIdx = Math.floor(getMoonSunElongationDeg(prevTimings.sunriseTimestamp) / 12) + 1;
  if (prevSunriseTithiIdx === udayaTithi.tithiIndex && udayaTithi.startTimestamp <= prevTimings.sunriseTimestamp + 6e4) {
    return {
      isVriddhi: true,
      tithiIndex: udayaTithi.tithiIndex,
      tithiNameHi: udayaTithi.nameHi,
      dayPosition: 2,
      firstDateKey: prevCivil.dateKey,
      secondDateKey: currentDateKey,
      displayLabelHi: `वृद्धि तिथि (${udayaTithi.pakshaShort} ${udayaName(udayaTithi)} — द्वितीय दिन)`
    };
  }
  const nextCivil = shiftCivilDate(year, month, day, 1);
  const nextTimings = calculateDayAstronomicalTimings(nextCivil.year, nextCivil.month, nextCivil.day, location);
  const nextSunriseTithiIdx = Math.floor(getMoonSunElongationDeg(nextTimings.sunriseTimestamp) / 12) + 1;
  if (nextSunriseTithiIdx === udayaTithi.tithiIndex && udayaTithi.endTimestamp >= nextTimings.sunriseTimestamp - 6e4) {
    return {
      isVriddhi: true,
      tithiIndex: udayaTithi.tithiIndex,
      tithiNameHi: udayaTithi.nameHi,
      dayPosition: 1,
      firstDateKey: currentDateKey,
      secondDateKey: nextCivil.dateKey,
      displayLabelHi: `वृद्धि तिथि (${udayaTithi.pakshaShort} ${udayaName(udayaTithi)} — प्रथम दिन)`
    };
  }
  return empty;
}
function udayaName(t) {
  return t.nameHi;
}
function buildAngaIntervalsForDay(timings, dateKey, timeZone, config = DEFAULT_ASTRONOMICAL_CONFIG) {
  const mode = config.ayanamsha;
  const nakRaw = solveMonotonicDivisionIntervals(
    timings.sunriseTimestamp,
    timings.nextSunriseTimestamp,
    360 / 27,
    27,
    (ms) => getSiderealMoonLonDeg(ms, mode),
    30 * 6e4
  );
  const nakshatraIntervals = nakRaw.map((seg) => ({
    index: seg.index,
    nameHi: NAKSHATRAS_27[seg.index] || "अश्विनी",
    startTimestamp: seg.startTimestamp,
    endTimestamp: seg.endTimestamp,
    startFormattedHi: formatEpochInZoneHi(seg.startTimestamp, timeZone, dateKey, true),
    endFormattedHi: formatEpochInZoneHi(seg.endTimestamp, timeZone, dateKey, true)
  }));
  const yogaRaw = solveMonotonicDivisionIntervals(
    timings.sunriseTimestamp,
    timings.nextSunriseTimestamp,
    360 / 27,
    27,
    (ms) => getSiderealYogaDeg(ms, mode),
    30 * 6e4
  );
  const yogaIntervals = yogaRaw.map((seg) => ({
    index: seg.index,
    nameHi: YOGAS_27[seg.index] || "विष्कम्भ",
    startTimestamp: seg.startTimestamp,
    endTimestamp: seg.endTimestamp,
    startFormattedHi: formatEpochInZoneHi(seg.startTimestamp, timeZone, dateKey, true),
    endFormattedHi: formatEpochInZoneHi(seg.endTimestamp, timeZone, dateKey, true)
  }));
  const karanaRaw = solveMonotonicDivisionIntervals(
    timings.sunriseTimestamp,
    timings.nextSunriseTimestamp,
    6,
    60,
    getMoonSunElongationDeg,
    20 * 6e4
  );
  const karanaIntervals = karanaRaw.map((seg) => ({
    index: seg.index,
    nameHi: getKaranaNameByIdx60(seg.index),
    startTimestamp: seg.startTimestamp,
    endTimestamp: seg.endTimestamp,
    startFormattedHi: formatEpochInZoneHi(seg.startTimestamp, timeZone, dateKey, true),
    endFormattedHi: formatEpochInZoneHi(seg.endTimestamp, timeZone, dateKey, true)
  }));
  const rashiRaw = solveMonotonicDivisionIntervals(
    timings.sunriseTimestamp,
    timings.nextSunriseTimestamp,
    30,
    12,
    (ms) => getSiderealMoonLonDeg(ms, mode),
    60 * 6e4
  );
  const chandraRashiIntervals = rashiRaw.map((seg) => ({
    index: seg.index,
    // 0..11
    nameHi: RASHIS_12[seg.index] || "मेष राशि",
    startTimestamp: seg.startTimestamp,
    endTimestamp: seg.endTimestamp,
    startFormattedHi: formatEpochInZoneHi(seg.startTimestamp, timeZone, dateKey, true),
    endFormattedHi: formatEpochInZoneHi(seg.endTimestamp, timeZone, dateKey, true)
  }));
  return {
    nakshatraIntervals,
    yogaIntervals,
    karanaIntervals,
    chandraRashiIntervals
  };
}
function findPanchakStartTimestamp(referenceMs, mode = "LAHIRI") {
  const stepMs = 2 * 36e5;
  let curT = referenceMs;
  let curLon = getSiderealMoonLonDeg(curT, mode);
  if (curLon < 300) return referenceMs;
  for (let i = 0; i < 84; i++) {
    const prevT = curT - stepMs;
    const prevLon = getSiderealMoonLonDeg(prevT, mode);
    if (prevLon < 300 && prevLon >= 240) {
      return bisectCrossing(
        prevT,
        curT,
        300,
        300,
        (ms) => getSiderealMoonLonDeg(ms, mode),
        true
      );
    }
    curT = prevT;
    curLon = prevLon;
  }
  return referenceMs;
}
function findSolarIngressesObservedOnDay(timings, prevSunsetTimestamp, dateKey, location, mode = "LAHIRI") {
  const timeZone = resolveSafeTimezone(location);
  const spanStart = prevSunsetTimestamp;
  const spanEnd = timings.sunsetTimestamp;
  const lonStart = getSiderealSunLonDeg(spanStart, mode);
  const lonEnd = getSiderealSunLonDeg(spanEnd, mode);
  const rashiStart = Math.floor(lonStart / 30) % 12;
  const rashiEnd = Math.floor(lonEnd / 30) % 12;
  if (rashiStart === rashiEnd) return [];
  const targetRashi = rashiEnd;
  const targetDeg = targetRashi * 30;
  const crossMs = bisectCrossing(spanStart, spanEnd, targetDeg, targetDeg, (ms) => getSiderealSunLonDeg(ms, mode), true);
  const GHATI_MS = 24 * 6e4;
  const sr = timings.sunriseTimestamp;
  const ss = timings.sunsetTimestamp;
  const ingressLocalParts = getLocalDateParts(crossMs, timeZone);
  const isEveningNightIngress = ingressLocalParts.hours >= 18;
  const isPreDawnNightIngress = ingressLocalParts.hours < 6;
  const isNightIngress = crossMs < sr || isEveningNightIngress || isPreDawnNightIngress;
  let sankrantiClassHi = "षडशीति संक्रांति";
  let punyaKaalRuleHi = "16 घटी पश्चात";
  let rawPunyaStart = sr;
  let rawPunyaEnd = ss;
  let rawMahaStart = sr;
  let rawMahaEnd = Math.min(ss, sr + 4 * GHATI_MS);
  if (targetRashi === 9) {
    sankrantiClassHi = "अयन संक्रांति (उत्तरायण)";
    punyaKaalRuleHi = isNightIngress ? "निर्णयसिंधु: रात्रि संक्रांति — अगले सूर्योदय से पुण्यकाल" : "40 घटी पश्चात";
    rawPunyaStart = isNightIngress ? sr : Math.max(sr, crossMs);
    rawPunyaEnd = isNightIngress ? Math.min(ss, sr + 40 * GHATI_MS) : Math.min(ss, crossMs + 40 * GHATI_MS);
    rawMahaStart = rawPunyaStart;
    rawMahaEnd = Math.min(rawPunyaEnd, rawPunyaStart + (isNightIngress ? 6 * GHATI_MS : 5 * GHATI_MS));
  } else if (targetRashi === 3) {
    sankrantiClassHi = "अयन संक्रांति (दक्षिणायन)";
    punyaKaalRuleHi = isNightIngress ? "निर्णयसिंधु: रात्रि संक्रांति — पूर्व सायं/प्रातः सूर्योदय पुण्यकाल" : "30 घटी पूर्व";
    if (!isNightIngress && crossMs - sr >= GHATI_MS) {
      rawPunyaStart = Math.max(sr, crossMs - 30 * GHATI_MS);
      rawPunyaEnd = Math.min(ss, crossMs);
      rawMahaEnd = rawPunyaEnd;
      rawMahaStart = Math.max(rawPunyaStart, rawPunyaEnd - 4 * GHATI_MS);
    } else {
      rawPunyaStart = sr;
      rawPunyaEnd = Math.min(ss, sr + 16 * GHATI_MS);
      rawMahaStart = sr;
      rawMahaEnd = Math.min(rawPunyaEnd, sr + 4 * GHATI_MS);
    }
  } else if (targetRashi === 0 || targetRashi === 6) {
    sankrantiClassHi = "विषुव संक्रांति";
    punyaKaalRuleHi = isNightIngress ? "निर्णयसिंधु: रात्रि संक्रांति — सायं/प्रातः पुण्यकाल" : "16 घटी पूर्व एवं पश्चात";
    if (isNightIngress) {
      rawPunyaStart = sr;
      rawPunyaEnd = Math.min(ss, Math.max(sr + 6 * GHATI_MS, crossMs + 16 * GHATI_MS));
      rawMahaStart = sr;
      rawMahaEnd = Math.min(rawPunyaEnd, sr + 4 * GHATI_MS);
    } else {
      rawPunyaStart = Math.max(sr, crossMs - 16 * GHATI_MS);
      rawPunyaEnd = Math.min(ss, crossMs + 16 * GHATI_MS);
      rawMahaStart = Math.max(rawPunyaStart, crossMs - 2 * GHATI_MS);
      rawMahaEnd = Math.min(rawPunyaEnd, crossMs + 2 * GHATI_MS);
    }
  } else if (targetRashi === 1 || targetRashi === 4 || targetRashi === 7 || targetRashi === 10) {
    sankrantiClassHi = "विष्णुपदी संक्रांति";
    punyaKaalRuleHi = isNightIngress ? "निर्णयसिंधु: रात्रि संक्रांति — पूर्व सायं/प्रातः सूर्योदय पुण्यकाल" : "16 घटी पूर्व";
    if (!isNightIngress && crossMs - sr >= GHATI_MS) {
      rawPunyaStart = Math.max(sr, crossMs - 16 * GHATI_MS);
      rawPunyaEnd = Math.min(ss, crossMs);
      rawMahaEnd = rawPunyaEnd;
      rawMahaStart = Math.max(rawPunyaStart, rawPunyaEnd - 4 * GHATI_MS);
    } else {
      rawPunyaStart = sr;
      rawPunyaEnd = Math.min(ss, sr + 16 * GHATI_MS);
      rawMahaStart = sr;
      rawMahaEnd = Math.min(rawPunyaEnd, sr + 4 * GHATI_MS);
    }
  } else {
    sankrantiClassHi = "षडशीति संक्रांति";
    punyaKaalRuleHi = isNightIngress ? "निर्णयसिंधु: रात्रि संक्रांति — अगले सूर्योदय से पुण्यकाल" : "16 घटी पश्चात";
    rawPunyaStart = isNightIngress ? sr : Math.max(sr, crossMs);
    rawPunyaEnd = isNightIngress ? Math.min(ss, sr + 16 * GHATI_MS) : Math.min(ss, crossMs + 16 * GHATI_MS);
    rawMahaStart = rawPunyaStart;
    rawMahaEnd = Math.min(rawPunyaEnd, rawPunyaStart + 4 * GHATI_MS);
  }
  const punyaStartMs = Math.max(sr, Math.min(ss - GHATI_MS, rawPunyaStart));
  const punyaEndMs = Math.min(ss, Math.max(punyaStartMs + GHATI_MS, rawPunyaEnd));
  const mahaStartMs = Math.max(punyaStartMs, Math.min(punyaEndMs - GHATI_MS, rawMahaStart));
  const mahaEndMs = Math.min(punyaEndMs, Math.max(mahaStartMs + GHATI_MS, rawMahaEnd));
  const basePunyaRangeHi = formatWindowRangeInZoneHi(punyaStartMs, punyaEndMs, timeZone, dateKey);
  const nightPunyaNoteHi = isNightIngress ? isEveningNightIngress ? " (निर्णयसिंधु: रात्रि संक्रांति — पूर्व सायं अथवा अगले सूर्योदय से प्रातः पुण्यकाल)" : " (निर्णयसिंधु: उत्तररात्रि संक्रांति — अगले सूर्योदय से प्रातः पुण्यकाल)" : "";
  return [
    {
      rashiIndex: targetRashi,
      sankrantiNameHi: SANKRANTI_NAMES_HI[targetRashi] || "सूर्य संक्रांति",
      sankrantiNameEn: SANKRANTI_NAMES_EN[targetRashi] || "Surya Sankranti",
      sankrantiClassHi,
      punyaKaalRuleHi,
      ingressTimestamp: crossMs,
      ingressFormattedHi: formatEpochInZoneHi(crossMs, timeZone, dateKey, true),
      observedDateKey: dateKey,
      punyaKaalWindow: {
        startTimestamp: punyaStartMs,
        endTimestamp: punyaEndMs,
        labelHi: `${basePunyaRangeHi}${nightPunyaNoteHi}`
      },
      mahaPunyaKaalWindow: {
        startTimestamp: mahaStartMs,
        endTimestamp: mahaEndMs,
        labelHi: formatWindowRangeInZoneHi(mahaStartMs, mahaEndMs, timeZone, dateKey)
      }
    }
  ];
}
function resolveSuryaRashiForPanchangDay(sunriseTimestamp, nextSunriseTimestamp, dateKey, location, mode = "LAHIRI") {
  const timeZone = resolveSafeTimezone(location);
  const lonStart = getSiderealSunLonDeg(sunriseTimestamp, mode);
  const lonEnd = getSiderealSunLonDeg(nextSunriseTimestamp, mode);
  const rashiStart = Math.floor(lonStart / 30) % 12;
  const rashiEnd = Math.floor(lonEnd / 30) % 12;
  const startRashiName = RASHIS_12[rashiStart] || "मेष राशि";
  if (rashiStart === rashiEnd) {
    return {
      suryaRashi: startRashiName,
      hasTransition: false,
      startRashiIndex: rashiStart,
      endRashiIndex: rashiStart
    };
  }
  const targetDeg = rashiEnd * 30;
  const crossMs = bisectCrossing(
    sunriseTimestamp,
    nextSunriseTimestamp,
    targetDeg,
    targetDeg,
    (ms) => getSiderealSunLonDeg(ms, mode),
    true
  );
  const endRashiName = RASHIS_12[rashiEnd] || "मेष राशि";
  const sankrantiShortHi = (SANKRANTI_NAMES_HI[rashiEnd] || "सूर्य संक्रांति").split(" (")[0].trim();
  const rawTimeHi = formatEpochInZoneHi(crossMs, timeZone, dateKey, true);
  const cleanTimeWithTak = rawTimeHi.endsWith("तक") ? rawTimeHi : `${rawTimeHi} तक`;
  return {
    suryaRashi: `${startRashiName} (${cleanTimeWithTak}, फिर ${endRashiName} — ${sankrantiShortHi})`,
    hasTransition: true,
    startRashiIndex: rashiStart,
    endRashiIndex: rashiEnd,
    ingressTimestamp: crossMs,
    ingressFormattedHi: rawTimeHi,
    sankrantiShortHi
  };
}
function computeDurMuhurtaWindows(sunriseTimestamp, sunsetTimestamp, _nextSunriseTimestamp, weekdayIndex, dateKey, timeZone) {
  const oneDayMuhurtaMs = (sunsetTimestamp - sunriseTimestamp) / 15;
  const dayWindow = (muhurtaOneBased) => {
    const s = Math.round((sunriseTimestamp + (muhurtaOneBased - 1) * oneDayMuhurtaMs) / 1e3) * 1e3;
    const e = Math.round((sunriseTimestamp + muhurtaOneBased * oneDayMuhurtaMs) / 1e3) * 1e3;
    return formatWindowRangeInZoneHi(s, e, timeZone, dateKey);
  };
  switch (weekdayIndex) {
    case 0:
      return dayWindow(14);
    case 1:
      return dayWindow(9);
    case 2:
      return dayWindow(4);
    case 3:
      return dayWindow(8);
    case 4:
      return dayWindow(6);
    case 5:
      return dayWindow(4);
    case 6:
      return dayWindow(1);
    default:
      return dayWindow(14);
  }
}
const VARJYAM_GHATI_OFFSETS_27 = [
  50,
  24,
  30,
  40,
  14,
  21,
  30,
  20,
  32,
  30,
  20,
  18,
  21,
  20,
  14,
  14,
  10,
  14,
  20,
  24,
  20,
  10,
  10,
  18,
  16,
  24,
  30
];
function computeVarjyamWindows(nakshatraIntervals, sunriseTimestamp, nextSunriseTimestamp, dateKey, timeZone) {
  const activeWindows = [];
  for (const niv of nakshatraIntervals) {
    const nakSpanMs = niv.endTimestamp - niv.startTimestamp;
    if (nakSpanMs <= 0) continue;
    const ghatiOffset = VARJYAM_GHATI_OFFSETS_27[niv.index % 27] ?? 20;
    const rawStartMs = niv.startTimestamp + ghatiOffset / 60 * nakSpanMs;
    const rawEndMs = rawStartMs + 4 / 60 * nakSpanMs;
    const clipStartMs = Math.max(sunriseTimestamp, rawStartMs);
    const clipEndMs = Math.min(nextSunriseTimestamp, rawEndMs);
    if (clipEndMs - clipStartMs >= 6e4) {
      const rangeStr = formatWindowRangeInZoneHi(clipStartMs, clipEndMs, timeZone, dateKey);
      activeWindows.push(
        nakshatraIntervals.length > 1 ? `${rangeStr} (${niv.nameHi})` : rangeStr
      );
    }
  }
  return activeWindows.length > 0 ? activeWindows.join(" • ") : "आज सूर्योदय से अगले सूर्योदय तक वर्ज्यम् नहीं";
}
const CHALDEAN_HORA_SEQUENCE = [
  {
    planetKey: "sun",
    planetNameHi: "सूर्य होरा",
    planetNameEn: "Sun Hora",
    natureHi: "ऊर्जावान / राजकीय",
    suitableForHi: "राजकीय कार्य, अधिकारी भेंट, स्वास्थ्य व पिता संबंधी कार्य"
  },
  {
    planetKey: "venus",
    planetNameHi: "शुक्र होरा",
    planetNameEn: "Venus Hora",
    natureHi: "अति शुभ / सौम्य",
    suitableForHi: "विवाह, वस्त्र-आभूषण क्रय, वाहन, कला व मांगलिक कार्य"
  },
  {
    planetKey: "mercury",
    planetNameHi: "बुध होरा",
    planetNameEn: "Mercury Hora",
    natureHi: "शुभ / बौद्धिक",
    suitableForHi: "शिक्षा, व्यापार, लेखन, लेखा-जोखा व संवाद प्रारंभ"
  },
  {
    planetKey: "moon",
    planetNameHi: "चन्द्र होरा",
    planetNameEn: "Moon Hora",
    natureHi: "शुभ / सौम्य",
    suitableForHi: "यात्रा, जल व दुग्ध कार्य, मनःशांति व कृषि कार्य"
  },
  {
    planetKey: "saturn",
    planetNameHi: "शनि होरा",
    planetNameEn: "Saturn Hora",
    natureHi: "कठोर / श्रमसाध्य",
    suitableForHi: "भूमि, लोहा, मशीनरी, न्याय व दीर्घकालीन श्रम कार्य"
  },
  {
    planetKey: "jupiter",
    planetNameHi: "गुरु (बृहस्पति) होरा",
    planetNameEn: "Jupiter Hora",
    natureHi: "सर्वश्रेष्ठ शुभ",
    suitableForHi: "पूजा-पाठ, संस्कार, विद्यारंभ, विवाह व धन निवेश"
  },
  {
    planetKey: "mars",
    planetNameHi: "मंगल होरा",
    planetNameEn: "Mars Hora",
    natureHi: "तीव्र / साहसिक",
    suitableForHi: "साहसिक कार्य, भूमि-भवन विवाद व प्रशासनिक निर्णय"
  }
];
const WEEKDAY_TO_CHALDEAN_INDEX = {
  0: 0,
  // Sun -> Sun
  1: 3,
  // Mon -> Moon
  2: 6,
  // Tue -> Mars
  3: 2,
  // Wed -> Mercury
  4: 5,
  // Thu -> Jupiter
  5: 1,
  // Fri -> Venus
  6: 4
  // Sat -> Saturn
};
function computePlanetaryHora(sunriseTimestamp, sunsetTimestamp, nextSunriseTimestamp, weekdayIndex, dateKey, timeZone) {
  const startChaldeanIdx = WEEKDAY_TO_CHALDEAN_INDEX[weekdayIndex] ?? 0;
  const daySpanMs = (sunsetTimestamp - sunriseTimestamp) / 12;
  const nightSpanMs = (nextSunriseTimestamp - sunsetTimestamp) / 12;
  const dayHora = [];
  for (let i = 0; i < 12; i++) {
    const meta = CHALDEAN_HORA_SEQUENCE[(startChaldeanIdx + i) % 7];
    const startTs = sunriseTimestamp + i * daySpanMs;
    const endTs = sunriseTimestamp + (i + 1) * daySpanMs;
    dayHora.push({
      horaIndex: i + 1,
      period: "day",
      planetKey: meta.planetKey,
      planetNameHi: meta.planetNameHi,
      planetNameEn: meta.planetNameEn,
      time: formatWindowRangeInZoneHi(startTs, endTs, timeZone, dateKey),
      startTimestamp: Math.round(startTs),
      endTimestamp: Math.round(endTs),
      natureHi: meta.natureHi,
      suitableForHi: meta.suitableForHi
    });
  }
  const nightHora = [];
  for (let i = 0; i < 12; i++) {
    const meta = CHALDEAN_HORA_SEQUENCE[(startChaldeanIdx + 12 + i) % 7];
    const startTs = sunsetTimestamp + i * nightSpanMs;
    const endTs = sunsetTimestamp + (i + 1) * nightSpanMs;
    nightHora.push({
      horaIndex: i + 1,
      period: "night",
      planetKey: meta.planetKey,
      planetNameHi: meta.planetNameHi,
      planetNameEn: meta.planetNameEn,
      time: formatWindowRangeInZoneHi(startTs, endTs, timeZone, dateKey),
      startTimestamp: Math.round(startTs),
      endTimestamp: Math.round(endTs),
      natureHi: meta.natureHi,
      suitableForHi: meta.suitableForHi
    });
  }
  return { dayHora, nightHora };
}
const SIXTY_SAMVATSARA_NAMES = [
  "प्रभव",
  "विभव",
  "शुक्ल",
  "प्रमोद",
  "प्रजापति",
  "अंगिरा",
  "श्रीमुख",
  "भव",
  "युवा",
  "धाता",
  "ईश्वर",
  "बहुधान्य",
  "प्रमाथी",
  "विक्रम",
  "वृष",
  "चित्रभानु",
  "सुभानु",
  "तारण",
  "पार्थिव",
  "व्यय",
  "सर्वजित्",
  "सर्वधारी",
  "विरोधी",
  "विकृत",
  "खर",
  "नंदन",
  "विजय",
  "जय",
  "मन्मथ",
  "दुर्मुख",
  "हेमलम्ब",
  "विलम्ब",
  "विकारी",
  "शार्वरी",
  "प्लव",
  "शुभकृत",
  "शोभन",
  "क्रोधी",
  "विश्वावसु",
  "पराभव",
  "प्लवंग",
  "कीलक",
  "सौम्य",
  "साधारण",
  "विरोधकृत",
  "परिधावी",
  "प्रमादी",
  "आनंद",
  "राक्षस",
  "अनल (नल)",
  "पिंगल",
  "कालयुक्त",
  "सिद्धार्थी",
  "रौद्र",
  "दुर्मति",
  "दुन्दुभि",
  "रुधिरोद्गारी",
  "रक्ताक्षी",
  "क्रोधन",
  "क्षय"
];
function computeSamvatsaraOrdinal(samvatYear, offset) {
  const idx = ((samvatYear + offset) % 60 + 60) % 60;
  return idx + 1;
}
function getUnifiedSamvatsaraByShaka(shakaSamvat) {
  const index = ((shakaSamvat + 25) % 60 + 60) % 60;
  return {
    index,
    ordinal: index + 1,
    nameHi: SIXTY_SAMVATSARA_NAMES[index] || "रौद्र"
  };
}
function getVikramSamvatsarName(vikramSamvat) {
  return getUnifiedSamvatsaraByShaka(vikramSamvat - 135).nameHi;
}
function getShakaSamvatsarName(shakaSamvat) {
  return getUnifiedSamvatsaraByShaka(shakaSamvat).nameHi;
}
function getSouthIndianSamvatsarName(shakaSamvat) {
  return getUnifiedSamvatsaraByShaka(shakaSamvat).nameHi;
}
const DAY_MS = 864e5;
const MEAN_SYNODIC_MONTH_MS = 29.530588861 * DAY_MS;
const _newMoonAnchorCache = /* @__PURE__ */ new Map();
const _lunarSpanCache = /* @__PURE__ */ new Map();
function bisectNewMoonAround(approxMs) {
  let lo = approxMs - 2.2 * DAY_MS;
  let hi = approxMs + 2.2 * DAY_MS;
  const signedElong = (ms) => {
    const e = getMoonSunElongationDeg(ms);
    return e >= 180 ? e - 360 : e;
  };
  let tries = 0;
  while (signedElong(lo) > 0 && tries < 6) {
    lo -= DAY_MS;
    tries++;
  }
  tries = 0;
  while (signedElong(hi) < 0 && tries < 6) {
    hi += DAY_MS;
    tries++;
  }
  for (let i = 0; i < 32; i++) {
    const mid = (lo + hi) * 0.5;
    if (signedElong(mid) < 0) {
      lo = mid;
    } else {
      hi = mid;
    }
  }
  return Math.round((lo + hi) * 0.5);
}
function findBracketingNewMoons(epochMs) {
  const elong = getMoonSunElongationDeg(epochMs);
  const estPrevMs = epochMs - elong / 360 * MEAN_SYNODIC_MONTH_MS;
  const cacheBucket = Math.round(estPrevMs / (20 * DAY_MS));
  const keyPrev = `nm_${cacheBucket}`;
  let prevAmavasyaMs = _newMoonAnchorCache.get(keyPrev);
  if (prevAmavasyaMs === void 0) {
    prevAmavasyaMs = bisectNewMoonAround(estPrevMs);
    if (_newMoonAnchorCache.size > 2e3) _newMoonAnchorCache.clear();
    _newMoonAnchorCache.set(keyPrev, prevAmavasyaMs);
  }
  if (prevAmavasyaMs > epochMs) {
    const earlier = bisectNewMoonAround(prevAmavasyaMs - MEAN_SYNODIC_MONTH_MS);
    const nextAmavasyaMs2 = prevAmavasyaMs;
    return { prevAmavasyaMs: earlier, nextAmavasyaMs: nextAmavasyaMs2 };
  }
  let nextAmavasyaMs = bisectNewMoonAround(prevAmavasyaMs + MEAN_SYNODIC_MONTH_MS);
  if (nextAmavasyaMs <= epochMs) {
    prevAmavasyaMs = nextAmavasyaMs;
    nextAmavasyaMs = bisectNewMoonAround(prevAmavasyaMs + MEAN_SYNODIC_MONTH_MS);
  }
  return { prevAmavasyaMs, nextAmavasyaMs };
}
function analyzeLunarMonthSpan(prevAmavasyaMs, nextAmavasyaMs, ayanamsha = "LAHIRI") {
  const cacheKey = `${ayanamsha}_${Math.round(prevAmavasyaMs / 6e4)}`;
  const existing = _lunarSpanCache.get(cacheKey);
  if (existing) return existing;
  const lonPrev = getSiderealSunLonDeg(prevAmavasyaMs, ayanamsha);
  const lonNext = getSiderealSunLonDeg(nextAmavasyaMs, ayanamsha);
  const rashiPrev = Math.floor(lonPrev / 30) % 12;
  const rashiNext = Math.floor(lonNext / 30) % 12;
  const stepDiff = (rashiNext - rashiPrev + 12) % 12;
  const sankrantiCountInMonth = stepDiff;
  const isAdhikaMasa = sankrantiCountInMonth === 0;
  const isKshayaMasa = sankrantiCountInMonth >= 2;
  const amantaMasaIndex = isAdhikaMasa ? (rashiNext + 1) % 12 : rashiNext;
  const kshayaSkippedMasaIndex = isKshayaMasa ? (rashiPrev + 1) % 12 : void 0;
  const span = {
    prevAmavasyaMs,
    nextAmavasyaMs,
    amantaMasaIndex,
    isAdhikaMasa,
    isKshayaMasa,
    kshayaSkippedMasaIndex,
    solarRashiAtPrevAmavasya: rashiPrev,
    solarRashiAtNextAmavasya: rashiNext,
    sankrantiCountInMonth
  };
  if (_lunarSpanCache.size > 1500) _lunarSpanCache.clear();
  _lunarSpanCache.set(cacheKey, span);
  return span;
}
function resolveLunarMasaInfo(sunriseTimestamp, gregorianYear, tithiIndexAtSunrise, tradition = "PURNIMANTA", ayanamsha = "LAHIRI", gregorianMonth) {
  const { prevAmavasyaMs, nextAmavasyaMs } = findBracketingNewMoons(sunriseTimestamp);
  const currentSpan = analyzeLunarMonthSpan(prevAmavasyaMs, nextAmavasyaMs, ayanamsha);
  const isShukla = tithiIndexAtSunrise <= 15;
  const paksha = isShukla ? "शुक्ल पक्ष" : "कृष्ण पक्ष";
  const pakshaShort = isShukla ? "शुक्ल" : "कृष्ण";
  const amantaMasaIndex = currentSpan.amantaMasaIndex;
  let purnimantaMasaIndex;
  if (currentSpan.isAdhikaMasa) {
    purnimantaMasaIndex = amantaMasaIndex;
  } else {
    purnimantaMasaIndex = isShukla ? amantaMasaIndex : (amantaMasaIndex + 1) % 12;
  }
  const amantaBase = HINDU_MAAS_NAMES[amantaMasaIndex] || "आश्विन";
  const purnimantaBase = HINDU_MAAS_NAMES[purnimantaMasaIndex] || "आश्विन";
  const amantaPrefix = currentSpan.isAdhikaMasa ? "अधिक " : "";
  const purnimantaPrefix = currentSpan.isAdhikaMasa ? "अधिक " : "";
  const amantaMasaNameHi = `${amantaPrefix}${amantaBase}`;
  const purnimantaMasaNameHi = `${purnimantaPrefix}${purnimantaBase}`;
  const activeMasaIndex = tradition === "AMANTA" ? amantaMasaIndex : purnimantaMasaIndex;
  const activeMasaNameHi = tradition === "AMANTA" ? amantaMasaNameHi : purnimantaMasaNameHi;
  const gMonth = gregorianMonth ?? new Date(sunriseTimestamp).getUTCMonth() + 1;
  let samvatYearTurned;
  if (gMonth <= 2) {
    samvatYearTurned = false;
  } else if (gMonth >= 5) {
    samvatYearTurned = true;
  } else {
    samvatYearTurned = amantaMasaIndex >= 0 && amantaMasaIndex <= 3;
  }
  const vikramSamvat = samvatYearTurned ? gregorianYear + 57 : gregorianYear + 56;
  const shakaSamvat = samvatYearTurned ? gregorianYear - 78 : gregorianYear - 79;
  const vikramSamvatsarName = getVikramSamvatsarName(vikramSamvat);
  const shakaSamvatsarName = getShakaSamvatsarName(shakaSamvat);
  const southIndianSamvatsarName = getSouthIndianSamvatsarName(shakaSamvat);
  const kshayaSkippedMasaNameHi = currentSpan.isKshayaMasa && currentSpan.kshayaSkippedMasaIndex !== void 0 ? HINDU_MAAS_NAMES[currentSpan.kshayaSkippedMasaIndex] : void 0;
  return {
    amantaMasaIndex,
    amantaMasaNameHi,
    purnimantaMasaIndex,
    purnimantaMasaNameHi,
    activeMasaIndex,
    activeMasaNameHi,
    paksha,
    pakshaShort,
    isAdhikaMasa: currentSpan.isAdhikaMasa,
    adhikaType: currentSpan.isAdhikaMasa ? "ADHIKA" : currentSpan.isKshayaMasa ? "KSHAYA" : "NONE",
    kshayaSkippedMasaNameHi,
    solarRashiAtPrevAmavasya: currentSpan.solarRashiAtPrevAmavasya,
    solarRashiAtNextAmavasya: currentSpan.solarRashiAtNextAmavasya,
    prevAmavasyaTimestamp: currentSpan.prevAmavasyaMs,
    nextAmavasyaTimestamp: currentSpan.nextAmavasyaMs,
    sankrantiCountInMonth: currentSpan.sankrantiCountInMonth,
    displayAmantaHi: `${amantaMasaNameHi} मास (अमांत)`,
    displayPurnimantaHi: `${purnimantaMasaNameHi} मास (पूर्णिमांत)`,
    displayActiveHi: `${activeMasaNameHi} मास`,
    vikramSamvat,
    shakaSamvat,
    vikramSamvatsarName,
    shakaSamvatsarName,
    southIndianSamvatsarName
  };
}
function resolveVedicAyanaAndRitu(epochMs, _amantaMasaIndex, ayanamsha = "LAHIRI") {
  const siderealSun = normalizeDeg(getSiderealSunLonDeg(epochMs, ayanamsha));
  const { ritu } = resolveTropicalAyanaAndRitu(epochMs);
  return {
    ayana: siderealSun >= 270 || siderealSun < 90 ? "उत्तरायण" : "दक्षिणायन",
    ritu
  };
}
function resolveTropicalAyanaAndRitu(epochMs) {
  const tropLon = normalizeDeg(getApparentSunLonDeg(epochMs));
  const ayana = tropLon >= 270 || tropLon < 90 ? "उत्तरायण" : "दक्षिणायन";
  const rituArc = Math.floor(normalizeDeg(tropLon - 270) / 60);
  const rituNames = ["शिशिर ऋतु", "वसंत ऋतु", "ग्रीष्म ऋतु", "वर्षा ऋतु", "शरद ऋतु", "हेमंत ऋतु"];
  return {
    ayana,
    ritu: rituNames[rituArc] || "शरद ऋतु"
  };
}
const TAMIL_KEYWORDS = [
  "tamil nadu",
  "tamilnadu",
  "puducherry",
  "pondicherry",
  "chennai",
  "madurai",
  "coimbatore",
  "trichy",
  "tiruchirappalli",
  "salem",
  "tirunelveli",
  "thanjavur",
  "kanchipuram",
  "rameswaram",
  "vellore",
  "erode",
  "thoothukudi",
  "kanyakumari",
  "karaikal",
  "तमिलनाडु",
  "चेन्नई",
  "मदुरै",
  "कोयंबटूर",
  "रामेश्वरम",
  "कांचीपुरम"
];
const KERALA_KEYWORDS = [
  "kerala",
  "lakshadweep",
  "thiruvananthapuram",
  "trivandrum",
  "kochi",
  "cochin",
  "ernakulam",
  "kozhikode",
  "calicut",
  "thrissur",
  "kollam",
  "alappuzha",
  "kannur",
  "kottayam",
  "palakkad",
  "malappuram",
  "idukki",
  "wayanad",
  "kasaragod",
  "guruvayur",
  "sabarimala",
  "केरल",
  "कोच्चि",
  "तिरुवनंतपुरम",
  "त्रिशूर",
  "कोझिकोड"
];
const BENGAL_KEYWORDS = [
  "west bengal",
  "bengal",
  "tripura",
  "kolkata",
  "calcutta",
  "howrah",
  "darjeeling",
  "siliguri",
  "durgapur",
  "asansol",
  "bardhaman",
  "burdwan",
  "malda",
  "murshidabad",
  "nadia",
  "mayapur",
  "hooghly",
  "medinipur",
  "bankura",
  "birbhum",
  "agartala",
  "पश्चिम बंगाल",
  "कोलकाता",
  "दार्जिलिंग",
  "सिलीगुड़ी",
  "त्रिपुरा",
  "मायापुर"
];
const ASSAM_KEYWORDS = [
  "assam",
  "guwahati",
  "dispur",
  "dibrugarh",
  "silchar",
  "jorhat",
  "tezpur",
  "nagaon",
  "tinsukia",
  "sivasagar",
  "kamrup",
  "barpeta",
  "bongaigaon",
  "golaghat",
  "lakhimpur",
  "arunachal",
  "meghalaya",
  "manipur",
  "mizoram",
  "nagaland",
  "shillong",
  "imphal",
  "aizawl",
  "kohima",
  "itanagar",
  "असम",
  "गुवाहाटी",
  "कामाख्या",
  "डिब्रूगढ़",
  "सिलचर"
];
const ODISHA_KEYWORDS = [
  "odisha",
  "orissa",
  "bhubaneswar",
  "puri",
  "cuttack",
  "rourkela",
  "sambalpur",
  "berhampur",
  "brahmapur",
  "balasore",
  "bhadrak",
  "baripada",
  "koraput",
  "angul",
  "dhenkanal",
  "kendrapara",
  "konark",
  "ओडिशा",
  "उड़ीसा",
  "पुरी",
  "भुवनेश्वर",
  "कटक"
];
const GUJARAT_KEYWORDS = [
  "gujarat",
  "ahmedabad",
  "surat",
  "vadodara",
  "baroda",
  "rajkot",
  "bhavnagar",
  "jamnagar",
  "junagadh",
  "gandhinagar",
  "anand",
  "nadiad",
  "bharuch",
  "vapi",
  "valsad",
  "navsari",
  "mehsana",
  "morbi",
  "porbandar",
  "dwarka",
  "somnath",
  "bhuj",
  "kutch",
  "kachchh",
  "saurashtra",
  "daman",
  "diu",
  "silvassa",
  "गुजरात",
  "अहमदाबाद",
  "सूरत",
  "वडोदरा",
  "राजकोट",
  "द्वारका",
  "सोमनाथ",
  "कच्छ"
];
const MAHARASHTRA_KEYWORDS = [
  "maharashtra",
  "goa",
  "mumbai",
  "bombay",
  "pune",
  "nagpur",
  "nashik",
  "nasik",
  "thane",
  "aurangabad",
  "chhatrapati sambhajinagar",
  "solapur",
  "kolhapur",
  "amravati",
  "nanded",
  "sangli",
  "satara",
  "ratnagiri",
  "jalgaon",
  "akola",
  "latur",
  "shirdi",
  "panaji",
  "margao",
  "महाराष्ट्र",
  "मुंबई",
  "पुणे",
  "नागपुर",
  "नासिक",
  "शिरडी",
  "गोवा"
];
const SOUTH_DECCAN_KEYWORDS = [
  "karnataka",
  "andhra pradesh",
  "andhra",
  "telangana",
  "bengaluru",
  "bangalore",
  "mysuru",
  "mysore",
  "mangaluru",
  "mangalore",
  "hubli",
  "belagavi",
  "udupi",
  "hyderabad",
  "secunderabad",
  "warangal",
  "visakhapatnam",
  "vijayawada",
  "tirupati",
  "guntur",
  "nellore",
  "kurnool",
  "rajahmundry",
  "कर्नाटक",
  "बेंगलुरु",
  "आंध्र",
  "तेलंगाना",
  "हैदराबाद",
  "तिरुपति"
];
function buildLocationMatchText(location) {
  if (!location) return "";
  return [
    location.id,
    location.name,
    location.hindiName,
    location.district,
    location.state,
    location.country
  ].filter(Boolean).join(" ").toLowerCase();
}
function hasAnyKeyword(text, list) {
  for (const kw of list) {
    if (text.includes(kw)) return true;
  }
  return false;
}
function getPrimaryRegionScopeForLocation(location) {
  const text = buildLocationMatchText(location);
  if (hasAnyKeyword(text, TAMIL_KEYWORDS)) return "south_tamil";
  if (hasAnyKeyword(text, KERALA_KEYWORDS)) return "south_kerala";
  if (hasAnyKeyword(text, BENGAL_KEYWORDS)) return "east_bengal";
  if (hasAnyKeyword(text, ASSAM_KEYWORDS)) return "east_assam";
  if (hasAnyKeyword(text, ODISHA_KEYWORDS)) return "east_odisha";
  if (hasAnyKeyword(text, GUJARAT_KEYWORDS)) return "west_gujarat";
  if (hasAnyKeyword(text, MAHARASHTRA_KEYWORDS)) return "west_maharashtra";
  if (hasAnyKeyword(text, SOUTH_DECCAN_KEYWORDS)) return "south_deccan";
  if (location && location.lat >= 6 && location.lat <= 37 && location.lon >= 68 && location.lon <= 98) {
    if (location.lat < 13.5 && location.lon < 77.2) return "south_kerala";
    if (location.lat < 13.5 && location.lon >= 77.2) return "south_tamil";
    if (location.lon >= 89.8 && location.lat >= 24 && location.lat <= 28.2) return "east_assam";
    if (location.lon >= 85.8 && location.lon < 89.8 && location.lat >= 21.6 && location.lat <= 27.2) return "east_bengal";
    if (location.lon >= 81.5 && location.lon <= 87.5 && location.lat >= 17.8 && location.lat < 22) return "east_odisha";
  }
  return "north";
}
function doesFestivalScopeMatchLocation(scope, location) {
  if (!scope || scope === "pan_india") return true;
  const primary = getPrimaryRegionScopeForLocation(location);
  return scope === primary;
}
function getFestivalRegionPriorityBonus(scope, location) {
  if (!scope || scope === "pan_india") return 0;
  const primary = getPrimaryRegionScopeForLocation(location);
  return scope === primary ? 6 : -100;
}
const TAMIL_SOLAR_MONTHS = [
  { hi: "चित्तराई", en: "Chithirai" },
  { hi: "वैकासी", en: "Vaikasi" },
  { hi: "आनी", en: "Aani" },
  { hi: "आडी", en: "Aadi" },
  { hi: "आवणी", en: "Avani" },
  { hi: "पुरट्टासी", en: "Purattasi" },
  { hi: "ऐप्पसी", en: "Aippasi" },
  { hi: "कार्तिगै", en: "Karthigai" },
  { hi: "मार्गज़ी", en: "Margazhi" },
  { hi: "थाई", en: "Thai" },
  { hi: "मासी", en: "Maasi" },
  { hi: "पंगुनी", en: "Panguni" }
];
const KERALA_SOLAR_MONTHS = [
  { hi: "मेड़म", en: "Medam" },
  { hi: "इडवम", en: "Edavam" },
  { hi: "मिथुनम", en: "Mithunam" },
  { hi: "कर्कटकम", en: "Karkidakam" },
  { hi: "चिंगम", en: "Chingam" },
  { hi: "कन्नी", en: "Kanni" },
  { hi: "तुलाम", en: "Thulam" },
  { hi: "वृश्चिकम", en: "Vrishchikam" },
  { hi: "धनु", en: "Dhanu" },
  { hi: "मकरम", en: "Makaram" },
  { hi: "कुंभम", en: "Kumbham" },
  { hi: "मीनम", en: "Meenam" }
];
const BENGALI_SOLAR_MONTHS = [
  { hi: "बैशाख", en: "Boishakh" },
  { hi: "ज्यैष्ठ", en: "Joishtho" },
  { hi: "आषाढ़", en: "Asharh" },
  { hi: "श्रावण", en: "Srabon" },
  { hi: "भाद्र", en: "Bhadro" },
  { hi: "आश्विन", en: "Ashwin" },
  { hi: "कार्तिक", en: "Kartik" },
  { hi: "अग्रहायण", en: "Ogrohayon" },
  { hi: "पौष", en: "Poush" },
  { hi: "माघ", en: "Magh" },
  { hi: "फाल्गुन", en: "Falgun" },
  { hi: "चैत्र", en: "Choitro" }
];
const ASSAMESE_SOLAR_MONTHS = [
  { hi: "बोहाग", en: "Bohag" },
  { hi: "जेठ", en: "Jeth" },
  { hi: "आहार", en: "Ahar" },
  { hi: "शाओन", en: "Xaal/Saon" },
  { hi: "भादो", en: "Bhado" },
  { hi: "आहिन", en: "Ahin" },
  { hi: "काति", en: "Kati" },
  { hi: "आघोन", en: "Aghon" },
  { hi: "पुह", en: "Puh" },
  { hi: "माघ", en: "Magh" },
  { hi: "फागुन", en: "Fagun" },
  { hi: "सौत", en: "Sot" }
];
const ODIA_SOLAR_MONTHS = [
  { hi: "बैशाख", en: "Baisakha" },
  { hi: "ज्येष्ठ", en: "Jyestha" },
  { hi: "आषाढ़", en: "Ashadha" },
  { hi: "श्रावण", en: "Shravana" },
  { hi: "भाद्रव", en: "Bhadrava" },
  { hi: "आश्विन", en: "Ashwina" },
  { hi: "कार्तिक", en: "Kartika" },
  { hi: "मार्गशीर्ष", en: "Margashira" },
  { hi: "पौष", en: "Pausha" },
  { hi: "माघ", en: "Magha" },
  { hi: "फाल्गुन", en: "Phalguna" },
  { hi: "चैत्र", en: "Chaitra" }
];
function getSolarSystemForScope(scope) {
  if (scope === "south_tamil") return "tamil";
  if (scope === "south_kerala") return "kerala";
  if (scope === "east_bengal") return "bengali";
  if (scope === "east_assam") return "assamese";
  if (scope === "east_odisha") return "odia";
  return null;
}
const _sankrantiInstantCache = /* @__PURE__ */ new Map();
function signedSolarAngleDiff(lonDeg, targetDeg) {
  let diff = ((lonDeg - targetDeg) % 360 + 360) % 360;
  if (diff > 180) diff -= 360;
  return diff;
}
function findExactSankrantiTimestamp(approxMs, targetRashiIndex, ayanamsha) {
  const normRashi = (targetRashiIndex % 12 + 12) % 12;
  const approxYear = new Date(approxMs).getUTCFullYear();
  const cacheKey = `${approxYear}_${normRashi}_${ayanamsha}`;
  const cached = _sankrantiInstantCache.get(cacheKey);
  if (cached !== void 0 && Math.abs(cached - approxMs) < 120 * 864e5) {
    return cached;
  }
  const targetLon = normRashi * 30;
  let t = approxMs;
  for (let iter = 0; iter < 4; iter++) {
    const lon = getSiderealSunLonDeg(t, ayanamsha);
    const diff = signedSolarAngleDiff(lon, targetLon);
    t -= diff / 0.985647 * 864e5;
  }
  let lo = t - 2 * 864e5;
  let hi = t + 2 * 864e5;
  while (signedSolarAngleDiff(getSiderealSunLonDeg(lo, ayanamsha), targetLon) >= 0) {
    lo -= 2 * 864e5;
  }
  while (signedSolarAngleDiff(getSiderealSunLonDeg(hi, ayanamsha), targetLon) < 0) {
    hi += 2 * 864e5;
  }
  for (let i = 0; i < 36; i++) {
    const mid = (lo + hi) / 2;
    const diff = signedSolarAngleDiff(getSiderealSunLonDeg(mid, ayanamsha), targetLon);
    if (diff < 0) lo = mid;
    else hi = mid;
  }
  const exactMs = Math.round((lo + hi) / 2);
  if (_sankrantiInstantCache.size > 400) _sankrantiInstantCache.clear();
  _sankrantiInstantCache.set(cacheKey, exactMs);
  return exactMs;
}
function resolveRegionalSolarMonthDay1(sankrantiMs, systemId, location) {
  const timeZone = resolveSafeTimezone(location);
  const parts = getLocalDateParts(sankrantiMs, timeZone);
  if (systemId === "bengali" || systemId === "assamese") {
    const nextDay2 = shiftCivilDate(parts.year, parts.month, parts.day, 1);
    return { ...nextDay2, dateKey: formatDateKey(nextDay2.year, nextDay2.month, nextDay2.day) };
  }
  if (systemId === "odia") {
    return {
      year: parts.year,
      month: parts.month,
      day: parts.day,
      dateKey: formatDateKey(parts.year, parts.month, parts.day)
    };
  }
  const dayTimings = calculateDayAstronomicalTimings(parts.year, parts.month, parts.day, location);
  if (systemId === "tamil") {
    if (sankrantiMs < dayTimings.sunsetTimestamp) {
      return {
        year: parts.year,
        month: parts.month,
        day: parts.day,
        dateKey: formatDateKey(parts.year, parts.month, parts.day)
      };
    }
    const nextDay2 = shiftCivilDate(parts.year, parts.month, parts.day, 1);
    return { ...nextDay2, dateKey: formatDateKey(nextDay2.year, nextDay2.month, nextDay2.day) };
  }
  const aparahnaCutoffMs = dayTimings.sunriseTimestamp + 0.6 * (dayTimings.sunsetTimestamp - dayTimings.sunriseTimestamp);
  if (sankrantiMs < aparahnaCutoffMs) {
    return {
      year: parts.year,
      month: parts.month,
      day: parts.day,
      dateKey: formatDateKey(parts.year, parts.month, parts.day)
    };
  }
  const nextDay = shiftCivilDate(parts.year, parts.month, parts.day, 1);
  return { ...nextDay, dateKey: formatDateKey(nextDay.year, nextDay.month, nextDay.day) };
}
function diffCivilDays(a, b) {
  const utcA = Date.UTC(a.year, a.month - 1, a.day, 12, 0, 0);
  const utcB = Date.UTC(b.year, b.month - 1, b.day, 12, 0, 0);
  return Math.round((utcA - utcB) / 864e5);
}
function computeRegionalSolarDate(year, month, day, location, ayanamsha = "LAHIRI", overrideSystemId) {
  const systemId = overrideSystemId || getSolarSystemForScope(getPrimaryRegionScopeForLocation(location));
  if (!systemId) return void 0;
  const timeZone = resolveSafeTimezone(location);
  const noonUtcMs = getLocalMidnightUtcMs(year, month, day, timeZone) + 12 * 36e5;
  const sunLonNoon = getSiderealSunLonDeg(noonUtcMs, ayanamsha);
  const currentRashi = Math.floor(sunLonNoon / 30) % 12;
  const prevRashi = (currentRashi + 11) % 12;
  const nextRashi = (currentRashi + 1) % 12;
  const targetDate = { year, month, day };
  const candidates = [
    { rashi: nextRashi, approxMs: noonUtcMs + 15 * 864e5 },
    { rashi: currentRashi, approxMs: noonUtcMs - 14 * 864e5 },
    { rashi: prevRashi, approxMs: noonUtcMs - 44 * 864e5 }
  ];
  let chosenRashi = currentRashi;
  let chosenDayNum = 1;
  let chosenSankrantiMs = noonUtcMs;
  let chosenDay1Key = formatDateKey(year, month, day);
  for (const cand of candidates) {
    const sankMs = findExactSankrantiTimestamp(cand.approxMs, cand.rashi, ayanamsha);
    const day1 = resolveRegionalSolarMonthDay1(sankMs, systemId, location);
    const delta = diffCivilDays(targetDate, day1);
    if (delta >= 0 && delta <= 32) {
      chosenRashi = cand.rashi;
      chosenDayNum = delta + 1;
      chosenSankrantiMs = sankMs;
      chosenDay1Key = day1.dateKey;
      break;
    }
  }
  const monthTable = systemId === "tamil" ? TAMIL_SOLAR_MONTHS : systemId === "kerala" ? KERALA_SOLAR_MONTHS : systemId === "bengali" ? BENGALI_SOLAR_MONTHS : systemId === "assamese" ? ASSAMESE_SOLAR_MONTHS : ODIA_SOLAR_MONTHS;
  const mInfo = monthTable[chosenRashi] || monthTable[0];
  const systemMeta = {
    tamil: { labelHi: "तमिल सौर पंचांग", ruleHi: "सूर्यास्त संक्रांति नियम" },
    kerala: { labelHi: "मलयालम (कोल्लम) सौर पंचांग", ruleHi: "अपराह्न (3/5 दिनमान) संक्रांति नियम" },
    bengali: { labelHi: "बंगाली (बांग्ला) सौर पंचांग", ruleHi: "अर्धरात्रि संक्रांति नियम" },
    assamese: { labelHi: "असमिया (भास्कराब्द) सौर पंचांग", ruleHi: "अर्धरात्रि संक्रांति नियम" },
    odia: { labelHi: "ओड़िया (अमला) सौर पंचांग", ruleHi: "सूर्योदय संक्रांति नियम" }
  };
  const sankDateParts = getLocalDateParts(chosenSankrantiMs, timeZone);
  const sankrantiFormattedHi = formatEpochInZoneHi(chosenSankrantiMs, timeZone, sankDateParts.dateKey);
  return {
    systemId,
    systemLabelHi: systemMeta[systemId].labelHi,
    ruleLabelHi: systemMeta[systemId].ruleHi,
    solarRashiIndex: chosenRashi,
    solarMonthNameHi: mInfo.hi,
    solarMonthNameEn: mInfo.en,
    solarDayNumber: chosenDayNum,
    formattedHi: `${chosenDayNum} ${mInfo.hi}`,
    formattedFullHi: `${systemMeta[systemId].labelHi}: ${chosenDayNum} ${mInfo.hi} (${mInfo.en} ${chosenDayNum})`,
    sankrantiDateKey: chosenDay1Key,
    sankrantiFormattedHi
  };
}
const SUNRISE_SANDHI_EXACT_NOTE_HI = "आज तिथि सूर्योदय की संधि पर है; पारंपरिक सूर्य-सिद्धांत/काशी/मिथिला पंचांग में १ दिन का अंतर संभव है।";
const MAJOR_PARVA_CATEGORIES = /* @__PURE__ */ new Set([
  "mahaparv",
  "ekadashi",
  "pradosh",
  "purnima",
  "amavasya",
  "vrat"
]);
function detectMajorParvaSunriseSandhi(record, occurrences) {
  if (!occurrences || occurrences.length === 0) return void 0;
  const lunarMajorParvas = occurrences.filter(
    (occ) => occ.kaalApplied !== "SOLAR_INGRESS" && MAJOR_PARVA_CATEGORIES.has(occ.category)
  );
  if (lunarMajorParvas.length === 0) return void 0;
  const sunriseMs = record.sunriseTimestamp;
  const SANDHI_THRESHOLD_MS = 45 * 60 * 1e3;
  let bestDeltaMs = Infinity;
  let bestBoundary = "end";
  let bestTithiName = record.udayaTithi.nameHi;
  const udaya = record.udayaTithi;
  const startDelta = Math.abs(udaya.startTimestamp - sunriseMs);
  const endDelta = Math.abs(udaya.endTimestamp - sunriseMs);
  if (startDelta <= SANDHI_THRESHOLD_MS && startDelta < bestDeltaMs) {
    bestDeltaMs = startDelta;
    bestBoundary = "start";
    bestTithiName = udaya.nameHi;
  }
  if (endDelta <= SANDHI_THRESHOLD_MS && endDelta < bestDeltaMs) {
    bestDeltaMs = endDelta;
    bestBoundary = "end";
    bestTithiName = udaya.nameHi;
  }
  if (!Number.isFinite(bestDeltaMs)) {
    return void 0;
  }
  return {
    isBorderlineSandhi: true,
    deltaMinutes: Math.round(bestDeltaMs / 6e4),
    boundaryType: bestBoundary,
    tithiNameHi: bestTithiName,
    parvaNameHi: lunarMajorParvas[0].nameHi,
    noteHi: SUNRISE_SANDHI_EXACT_NOTE_HI
  };
}
const _yearEclipsesCache = /* @__PURE__ */ new Map();
function normalizeEclipseKind(kind) {
  const k = String(kind).toLowerCase();
  if (k === "total") return "total";
  if (k === "annular") return "annular";
  if (k === "penumbral") return "penumbral";
  return "partial";
}
function getMoonAltitudeDeg(epochMs, observer) {
  const astroTime = MakeTime(new Date(epochMs));
  const eq = Equator(Body.Moon, astroTime, observer, true, true);
  const hor = Horizon(astroTime, observer, eq.ra, eq.dec, "normal");
  return hor.altitude;
}
function getSunAltitudeDeg(epochMs, observer) {
  const astroTime = MakeTime(new Date(epochMs));
  const eq = Equator(Body.Sun, astroTime, observer, true, true);
  const hor = Horizon(astroTime, observer, eq.ra, eq.dec, "normal");
  return hor.altitude;
}
function getYearEclipsesForLocation(year, location) {
  const elev = Math.round(location.elevationMeters ?? (location.id === "rudrapur" ? 214 : 100));
  const cacheKey = `${year}_${location.lat.toFixed(3)}_${location.lon.toFixed(3)}_${elev}`;
  const cached = _yearEclipsesCache.get(cacheKey);
  if (cached) return cached;
  const observer = new Observer(location.lat, location.lon, elev);
  const windowStartMs = Date.UTC(year - 1, 11, 20, 0, 0, 0);
  const windowEndMs = Date.UTC(year + 1, 0, 10, 23, 59, 59);
  const entries = [];
  const localSolarEvents = [];
  try {
    let locSolar = SearchLocalSolarEclipse(new Date(windowStartMs), observer);
    let guard = 0;
    while (locSolar && locSolar.peak.time.date.getTime() <= windowEndMs && guard < 8) {
      localSolarEvents.push(locSolar);
      locSolar = NextLocalSolarEclipse(locSolar.peak.time, observer);
      guard += 1;
    }
  } catch {
  }
  try {
    let gSolar = SearchGlobalSolarEclipse(new Date(windowStartMs));
    let guard = 0;
    while (gSolar && gSolar.peak.date.getTime() <= windowEndMs && guard < 8) {
      const gPeakMs = gSolar.peak.date.getTime();
      const matchedLocal = localSolarEvents.find(
        (ls) => Math.abs(ls.peak.time.date.getTime() - gPeakMs) < 36 * 36e5
      );
      if (matchedLocal) {
        const rawBeginMs = matchedLocal.partial_begin.time.date.getTime();
        const rawPeakMs = matchedLocal.peak.time.date.getTime();
        const rawEndMs = matchedLocal.partial_end.time.date.getTime();
        const maxAlt = Math.max(
          matchedLocal.partial_begin.altitude,
          matchedLocal.peak.altitude,
          matchedLocal.partial_end.altitude
        );
        const obsc = Number.isFinite(matchedLocal.obscuration) ? matchedLocal.obscuration : 0;
        const isVisibleLocally = maxAlt > 0 && obsc > 1e-3;
        let visibleSparshaMs = rawBeginMs;
        let visibleMokshaMs = rawEndMs;
        let visibleMadhyaMs = rawPeakMs;
        let isGrastodaya = false;
        let isGrastasta = false;
        if (isVisibleLocally) {
          if (matchedLocal.partial_begin.altitude <= 0) {
            const sr = SearchRiseSet(Body.Sun, observer, 1, new Date(rawBeginMs), 1);
            if (sr && sr.date.getTime() > rawBeginMs && sr.date.getTime() < rawEndMs) {
              visibleSparshaMs = Math.max(rawBeginMs, sr.date.getTime());
              isGrastodaya = true;
            }
          }
          if (matchedLocal.partial_end.altitude <= 0) {
            const ss = SearchRiseSet(Body.Sun, observer, -1, new Date(rawBeginMs), 1);
            if (ss && ss.date.getTime() > visibleSparshaMs && ss.date.getTime() < rawEndMs) {
              visibleMokshaMs = Math.min(rawEndMs, ss.date.getTime());
              isGrastasta = true;
            }
          }
          visibleMadhyaMs = Math.max(visibleSparshaMs, Math.min(visibleMokshaMs, rawPeakMs));
        }
        entries.push({
          eclipseId: `solar_${new Date(rawPeakMs).toISOString().slice(0, 10)}`,
          body: "solar",
          kind: normalizeEclipseKind(matchedLocal.kind),
          isVisibleLocally,
          isPenumbralLunar: false,
          maxAltitudeDeg: Number(maxAlt.toFixed(2)),
          obscurationPercent: Math.round(obsc * 100),
          sparshaMs: visibleSparshaMs,
          madhyaMs: visibleMadhyaMs,
          mokshaMs: visibleMokshaMs,
          isGrastodaya,
          isGrastasta
        });
      } else {
        const approxAlt = getSunAltitudeDeg(gPeakMs, observer);
        entries.push({
          eclipseId: `solar_${new Date(gPeakMs).toISOString().slice(0, 10)}`,
          body: "solar",
          kind: normalizeEclipseKind(gSolar.kind),
          isVisibleLocally: false,
          isPenumbralLunar: false,
          maxAltitudeDeg: Number(approxAlt.toFixed(2)),
          obscurationPercent: 0,
          sparshaMs: gPeakMs - 90 * 6e4,
          madhyaMs: gPeakMs,
          mokshaMs: gPeakMs + 90 * 6e4
        });
      }
      gSolar = NextGlobalSolarEclipse(gSolar.peak);
      guard += 1;
    }
  } catch {
  }
  try {
    let lunar = SearchLunarEclipse(new Date(windowStartMs));
    let guard = 0;
    while (lunar && lunar.peak.date.getTime() <= windowEndMs && guard < 8) {
      const kind = normalizeEclipseKind(lunar.kind);
      const isPenumbral = kind === "penumbral" || lunar.sd_partial <= 0;
      const peakMs = lunar.peak.date.getTime();
      const halfDurMin = isPenumbral ? Math.max(30, lunar.sd_penum) : lunar.sd_partial;
      const globalSparshaMs = Math.round(peakMs - halfDurMin * 6e4);
      const globalMokshaMs = Math.round(peakMs + halfDurMin * 6e4);
      const samples = 24;
      let maxAlt = -90;
      for (let s = 0; s <= samples; s++) {
        const sampleMs = globalSparshaMs + (globalMokshaMs - globalSparshaMs) * s / samples;
        const alt = getMoonAltitudeDeg(sampleMs, observer);
        if (alt > maxAlt) maxAlt = alt;
      }
      const isVisibleLocally = maxAlt > 0;
      const obsc = Number.isFinite(lunar.obscuration) ? Math.round(lunar.obscuration * 100) : void 0;
      let visibleSparshaMs = globalSparshaMs;
      let visibleMokshaMs = globalMokshaMs;
      let visibleMadhyaMs = peakMs;
      let isGrastodaya = false;
      let isGrastasta = false;
      if (isVisibleLocally) {
        const altAtStart = getMoonAltitudeDeg(globalSparshaMs, observer);
        const altAtEnd = getMoonAltitudeDeg(globalMokshaMs, observer);
        if (altAtStart <= 0) {
          const mr = SearchRiseSet(Body.Moon, observer, 1, new Date(globalSparshaMs), 1);
          if (mr && mr.date.getTime() > globalSparshaMs && mr.date.getTime() < globalMokshaMs) {
            visibleSparshaMs = Math.max(globalSparshaMs, mr.date.getTime());
            isGrastodaya = true;
          }
        }
        if (altAtEnd <= 0) {
          const ms = SearchRiseSet(Body.Moon, observer, -1, new Date(visibleSparshaMs), 1);
          if (ms && ms.date.getTime() > visibleSparshaMs && ms.date.getTime() < globalMokshaMs) {
            visibleMokshaMs = Math.min(globalMokshaMs, ms.date.getTime());
            isGrastasta = true;
          }
        }
        visibleMadhyaMs = Math.max(visibleSparshaMs, Math.min(visibleMokshaMs, peakMs));
      }
      entries.push({
        eclipseId: `lunar_${new Date(peakMs).toISOString().slice(0, 10)}`,
        body: "lunar",
        kind,
        isVisibleLocally,
        isPenumbralLunar: isPenumbral,
        maxAltitudeDeg: Number(maxAlt.toFixed(2)),
        obscurationPercent: obsc,
        sparshaMs: visibleSparshaMs,
        madhyaMs: visibleMadhyaMs,
        mokshaMs: visibleMokshaMs,
        isGrastodaya,
        isGrastasta
      });
      lunar = NextLunarEclipse(lunar.peak);
      guard += 1;
    }
  } catch {
  }
  if (_yearEclipsesCache.size > 200) _yearEclipsesCache.clear();
  _yearEclipsesCache.set(cacheKey, entries);
  return entries;
}
function getEclipseHindiTitle(body, kind) {
  if (body === "solar") {
    if (kind === "total") return { hi: "खग्रास सूर्य ग्रहण", en: "Total Solar Eclipse" };
    if (kind === "annular") return { hi: "कंकणाकृति (वलयाकार) सूर्य ग्रहण", en: "Annular Solar Eclipse" };
    return { hi: "खंडग्रास (आंशिक) सूर्य ग्रहण", en: "Partial Solar Eclipse" };
  }
  if (kind === "total") return { hi: "खग्रास (पूर्ण) चंद्र ग्रहण", en: "Total Lunar Eclipse" };
  if (kind === "partial") return { hi: "खंडग्रास (आंशिक) चंद्र ग्रहण", en: "Partial Lunar Eclipse" };
  return { hi: "उपच्छाया (मांद्य) चंद्र ग्रहण", en: "Penumbral Lunar Eclipse" };
}
function formatDateTimeShortHi(epochMs, timeZone, refDateKey) {
  const parts = getLocalDateParts(epochMs, timeZone);
  const timeStr = formatEpochInZoneHi(epochMs, timeZone, parts.dateKey);
  if (parts.dateKey === refDateKey) {
    return timeStr;
  }
  const monthNames = ["जनवरी", "फरवरी", "मार्च", "अप्रैल", "मई", "जून", "जुलाई", "अगस्त", "सितंबर", "अक्टूबर", "नवंबर", "दिसंबर"];
  return `${parts.day} ${monthNames[parts.month - 1] || ""} • ${timeStr}`;
}
function computeEclipseAndSutakForDay(year, month, day, location) {
  const timeZone = resolveSafeTimezone(location);
  const dateKey = formatDateKey(year, month, day);
  const dayStartMs = getLocalMidnightUtcMs(year, month, day, timeZone);
  const dayEndMs = dayStartMs + 24 * 36e5 - 1e3;
  const yearEntries = getYearEclipsesForLocation(year, location);
  const targetCivil = { year, month, day };
  let bestEntry = null;
  for (const entry2 of yearEntries) {
    const sparshaParts = getLocalDateParts(entry2.sparshaMs, timeZone);
    const mokshaParts = getLocalDateParts(entry2.mokshaMs, timeZone);
    const daysUntilStart = diffCivilDays(
      { year: sparshaParts.year, month: sparshaParts.month, day: sparshaParts.day },
      targetCivil
    );
    const daysUntilEnd = diffCivilDays(
      { year: mokshaParts.year, month: mokshaParts.month, day: mokshaParts.day },
      targetCivil
    );
    const inAlertWindow = daysUntilStart >= 0 && daysUntilStart <= 3 || daysUntilStart < 0 && daysUntilEnd >= 0 || dayStartMs <= entry2.mokshaMs && dayEndMs >= entry2.sparshaMs;
    if (!inAlertWindow) continue;
    if (!bestEntry || Math.abs(daysUntilStart) < Math.abs(bestEntry.daysUntil)) {
      bestEntry = {
        entry: entry2,
        daysUntil: Math.max(0, daysUntilStart),
        eclipseDateKey: sparshaParts.dateKey
      };
    }
  }
  if (!bestEntry) return void 0;
  const { entry, daysUntil, eclipseDateKey } = bestEntry;
  const titles = getEclipseHindiTitle(entry.body, entry.kind);
  const cityShort = (location.hindiName || location.name || "आपके स्थान").split(",")[0].trim();
  const riseLabel = entry.body === "lunar" ? "चंद्रोदय" : "सूर्योदय";
  const setLabel = entry.body === "lunar" ? "चंद्रास्त" : "सूर्यास्त";
  const baseSparshaHi = formatDateTimeShortHi(entry.sparshaMs, timeZone, dateKey);
  const baseMokshaHi = formatDateTimeShortHi(entry.mokshaMs, timeZone, dateKey);
  const sparshaFormattedHi = entry.isGrastodaya ? `${baseSparshaHi} (ग्रस्तोदय — स्थानीय ${riseLabel} से दृश्य)` : baseSparshaHi;
  const madhyaFormattedHi = formatDateTimeShortHi(entry.madhyaMs, timeZone, dateKey);
  const mokshaFormattedHi = entry.isGrastasta ? `${baseMokshaHi} (ग्रस्तास्त — स्थानीय ${setLabel} तक दृश्य)` : baseMokshaHi;
  let sutakApplies = false;
  let sutakHoursBeforeSparsha = 0;
  let sutakStartMs;
  let sutakEndMs;
  let sutakStartFormattedHi;
  let sutakEndFormattedHi;
  let sutakStatusHi = "";
  let sutakExemptionNoteHi;
  let summaryNoteHi = "";
  if (entry.body === "lunar" && entry.isPenumbralLunar) {
    sutakApplies = false;
    sutakStatusHi = "उपच्छाया (मांद्य) चंद्र ग्रहण — शास्त्रानुसार सूतक मान्य नहीं";
    summaryNoteHi = entry.isVisibleLocally ? `${cityShort} में यह केवल उपच्छाया (मांद्य) चंद्र ग्रहण है। धर्मसिंधु व निर्णयसिंधु के अनुसार उपच्छाया ग्रहण में सूतक व यम-नियम लागू नहीं होते।` : `${cityShort} में यह उपच्छाया चंद्र ग्रहण अदृश्य है — सूतक मान्य नहीं।`;
  } else if (!entry.isVisibleLocally) {
    sutakApplies = false;
    sutakStatusHi = "आपके स्थान पर अदृश्य — सूतक मान्य नहीं";
    summaryNoteHi = `खगोलीय गणना के अनुसार यह ${titles.hi} ${cityShort} के क्षितिज से ऊपर दृश्यमान नहीं होगा (सूतक एवं ग्रहण के धार्मिक नियम केवल दृश्य स्थानों पर ही मान्य होते हैं)।`;
  } else {
    sutakApplies = true;
    sutakHoursBeforeSparsha = entry.body === "solar" ? 12 : 9;
    const praharLabel = entry.body === "solar" ? "4 प्रहर (12 घंटे)" : "3 प्रहर (9 घंटे)";
    sutakStartMs = entry.sparshaMs - sutakHoursBeforeSparsha * 36e5;
    sutakEndMs = entry.mokshaMs;
    sutakStartFormattedHi = formatDateTimeShortHi(sutakStartMs, timeZone, dateKey);
    sutakEndFormattedHi = baseMokshaHi;
    const childStartMs = entry.sparshaMs - 3 * 36e5;
    const childStartHi = formatDateTimeShortHi(childStartMs, timeZone, dateKey);
    const localClipNote = entry.isGrastodaya ? ` यह ग्रस्तोदय ग्रहण है — स्थानीय ${riseLabel} से दृश्यमान होगा।` : entry.isGrastasta ? ` यह ग्रस्तास्त ग्रहण है — स्थानीय ${setLabel} तक दृश्यमान रहेगा।` : "";
    sutakStatusHi = `सूतक काल मान्य (${praharLabel} पूर्व से मोक्ष तक): ${sutakStartFormattedHi} से ${sutakEndFormattedHi}`;
    sutakExemptionNoteHi = `विशेष छूट (धर्मसिंधु): बालक, वृद्ध एवं रोगियों के लिए केवल 1 प्रहर (3 घंटे) का सूतक नियम मान्य है (${childStartHi} से प्रारंभ)।`;
    summaryNoteHi = `${cityShort} में यह ${titles.hi} दृश्यमान है।${localClipNote} सूतक काल में देव-मूर्ति स्पर्श व भोजन वर्जित है; ग्रहण काल में मंत्र जप, ध्यान व मोक्ष के उपरांत स्नान-दान श्रेष्ठ फलदायी है।`;
  }
  return {
    eclipseId: entry.eclipseId,
    body: entry.body,
    kind: entry.kind,
    titleHi: titles.hi,
    titleEn: titles.en,
    eclipseDateKey,
    daysUntilEclipse: daysUntil,
    isAlertWindowActive: true,
    isVisibleLocally: entry.isVisibleLocally,
    isPenumbralLunar: entry.isPenumbralLunar,
    maxAltitudeDeg: entry.maxAltitudeDeg,
    obscurationPercent: entry.obscurationPercent,
    sparshaMs: entry.sparshaMs,
    madhyaMs: entry.madhyaMs,
    mokshaMs: entry.mokshaMs,
    sparshaFormattedHi,
    madhyaFormattedHi,
    mokshaFormattedHi,
    sutakApplies,
    sutakHoursBeforeSparsha,
    sutakStartMs,
    sutakEndMs,
    sutakStartFormattedHi,
    sutakEndFormattedHi,
    sutakStatusHi,
    sutakExemptionNoteHi,
    summaryNoteHi
  };
}
const SHUKLA_EKADASHI_NAMES = {
  0: { hi: "कामदा एकादशी", en: "Kamada Ekadashi" },
  1: { hi: "मोहिनी एकादशी", en: "Mohini Ekadashi" },
  2: { hi: "निर्जला एकादशी (भीमसेनी)", en: "Nirjala Ekadashi" },
  3: { hi: "देवशयनी एकादशी (हरिशयनी)", en: "Devshayani Ekadashi" },
  4: { hi: "पुत्रदा एकादशी (श्रावण)", en: "Shravana Putrada Ekadashi" },
  5: { hi: "परिवर्तिनी एकादशी (पद्मा)", en: "Parivartini Ekadashi" },
  6: { hi: "पापांकुशा एकादशी", en: "Papankusha Ekadashi" },
  7: { hi: "देवुत्थान एकादशी (प्रबोधिनी / तुलसी विवाह)", en: "Devutthana Ekadashi" },
  8: { hi: "मोक्षदा एकादशी (गीता जयंती)", en: "Mokshada Ekadashi" },
  9: { hi: "पौष पुत्रदा एकादशी", en: "Pausha Putrada Ekadashi" },
  10: { hi: "जया एकादशी", en: "Jaya Ekadashi" },
  11: { hi: "आमलकी एकादशी (रंगभरी)", en: "Amalaki Ekadashi" }
};
const KRISHNA_EKADASHI_NAMES_PURNIMANTA = {
  0: { hi: "पापमोचिनी एकादशी", en: "Papamochani Ekadashi" },
  1: { hi: "वरूथिनी एकादशी", en: "Varuthini Ekadashi" },
  2: { hi: "अपरा एकादशी (अचला)", en: "Apara Ekadashi" },
  3: { hi: "योगिनी एकादशी", en: "Yogini Ekadashi" },
  4: { hi: "कामिका एकादशी", en: "Kamika Ekadashi" },
  5: { hi: "अजा एकादशी", en: "Aja Ekadashi" },
  6: { hi: "इंदिरा एकादशी (पितृपक्ष)", en: "Indira Ekadashi" },
  7: { hi: "रमा एकादशी", en: "Rama Ekadashi" },
  8: { hi: "उत्पन्ना एकादशी", en: "Utpanna Ekadashi" },
  9: { hi: "सफला एकादशी", en: "Saphala Ekadashi" },
  10: { hi: "षटतिला एकादशी", en: "Shattila Ekadashi" },
  11: { hi: "विजया एकादशी", en: "Vijaya Ekadashi" }
};
const FESTIVAL_RULES_DB = [
  // ---- CHAITRA (Masa 0) — Complete Chaitra Navratri 9-Devi Series ----
  {
    id: "chaitra-navratri-1",
    nameHi: "चैत्र नवरात्रि दिवस १ — घटस्थापना (माँ शैलपुत्री) • गुड़ी पड़वा / हिन्दू नववर्ष",
    nameEn: "Chaitra Navratri Day 1 — Maa Shailputri & Hindu New Year (Gudi Padwa)",
    category: "mahaparv",
    masaIndex: 0,
    masaConvention: "PURNIMANTA",
    paksha: "शुक्ल",
    tithiNumber: 1,
    kaal: "SUNRISE",
    priority: 100,
    skipAdhikaMasa: true,
    seriesId: "chaitra-navratri",
    seriesDay: 1,
    seriesTotalDays: 9,
    specialCondition: "NAVRATRI_SERIES",
    deityHi: "माँ शैलपुत्री (प्रथम नवदुर्गा) एवं श्री ब्रह्मा जी",
    mantraSa: "ॐ देवी शैलपुत्र्यै नमः॥ वन्दे वाञ्छितलाभाय चन्द्रार्धकृतशेखराम्। वृषारूढां शूलधरां शैलपुत्रीं यशस्विनीम्॥",
    mantraMeaningHi: "वृषभ पर विराजमान और समस्त मनोकामनाएं पूर्ण करने वाली माँ शैलपुत्री तथा नवसंवत्सर के आराध्य देवों को नमन।",
    descriptionHi: "चैत्र शुक्ल प्रतिपदा से वासंती (चैत्र) नवरात्रि एवं नूतन विक्रम संवत्सर का शुभारंभ। प्रातः कलश (घट) स्थापना व प्रथम नवदुर्गा माँ शैलपुत्री के पूजन से वर्षभर सुख-समृद्धि आती है।",
    pujaHintHi: "प्रातः शुभ मुहूर्त में मिट्टी के कलश की स्थापना कर जौ बोएं और माँ शैलपुत्री को सफेद/लाल पुष्प व गाय का घी अर्पित करें।"
  },
  {
    id: "chaitra-navratri-2",
    nameHi: "चैत्र नवरात्रि दिवस २ — माँ ब्रह्मचारिणी पूजन",
    nameEn: "Chaitra Navratri Day 2 (Maa Brahmacharini)",
    category: "mahaparv",
    masaIndex: 0,
    masaConvention: "PURNIMANTA",
    paksha: "शुक्ल",
    tithiNumber: 2,
    kaal: "SUNRISE",
    priority: 95,
    skipAdhikaMasa: true,
    seriesId: "chaitra-navratri",
    seriesDay: 2,
    seriesTotalDays: 9,
    specialCondition: "NAVRATRI_SERIES",
    deityHi: "माँ ब्रह्मचारिणी (द्वितीय नवदुर्गा)",
    mantraSa: "ॐ देवी ब्रह्मचारिण्यै नमः॥ दधाना करपद्माभ्यामक्षमालाकमण्डलू। देवी प्रसीदतु मयि ब्रह्मचारिण्यनुत्तमा॥",
    mantraMeaningHi: "तप, संयम, त्याग व ज्ञान की अधिष्ठात्री द्वितीय नवदुर्गा माँ ब्रह्मचारिणी को नमन।",
    descriptionHi: "चैत्र नवरात्रि के द्वितीय दिवस पर तप, सदाचार व सिद्धि प्रदान करने वाली माँ ब्रह्मचारिणी की उपासना की जाती है।",
    pujaHintHi: "माँ ब्रह्मचारिणी को श्वेत सुगंधित पुष्प (चमेली/मोगरा) तथा मिश्री, शक्कर व पंचामृत का भोग अर्पित करें।"
  },
  {
    id: "chaitra-navratri-3",
    nameHi: "चैत्र नवरात्रि दिवस ३ — माँ चन्द्रघण्टा पूजन",
    nameEn: "Chaitra Navratri Day 3 (Maa Chandraghanta)",
    category: "mahaparv",
    masaIndex: 0,
    masaConvention: "PURNIMANTA",
    paksha: "शुक्ल",
    tithiNumber: 3,
    kaal: "SUNRISE",
    priority: 95,
    skipAdhikaMasa: true,
    seriesId: "chaitra-navratri",
    seriesDay: 3,
    seriesTotalDays: 9,
    specialCondition: "NAVRATRI_SERIES",
    deityHi: "माँ चन्द्रघण्टा (तृतीय नवदुर्गा)",
    mantraSa: "ॐ देवी चन्द्रघण्टायै नमः॥ पिण्डजप्रवरारूढा चण्डकोपास्त्रकैर्युता। प्रसादं तनुते मह्यं चन्द्रघण्टेति विश्रुता॥",
    mantraMeaningHi: "मस्तक पर घंटे के आकार का अर्धचंद्र धारण करने वाली भयनाशिनी माँ चन्द्रघण्टा को प्रणाम।",
    descriptionHi: "चैत्र नवरात्रि के तृतीय दिवस पर पराक्रम, शांति व अभय प्रदान करने वाली माँ चन्द्रघण्टा की आराधना की जाती है।",
    pujaHintHi: "माँ चन्द्रघण्टा को लाल गुलाब/कमल पुष्प तथा गाय के दूध की खीर या दुग्ध निर्मित मिठाई अर्पित करें।"
  },
  {
    id: "gangaur-matsya-jayanti",
    nameHi: "गणगौर तीज एवं मत्स्य जयंती",
    nameEn: "Gangaur Teej & Matsya Jayanti",
    category: "vrat",
    masaIndex: 0,
    masaConvention: "PURNIMANTA",
    paksha: "शुक्ल",
    tithiNumber: 3,
    kaal: "SUNRISE",
    priority: 75,
    skipAdhikaMasa: true,
    deityHi: "माँ पार्वती (गौरी), भगवान शिव एवं मत्स्य नारायण",
    mantraSa: "ॐ गौरये नमः॥ सर्वमङ्गलमाङ्गल्ये शिवे सर्वार्थसाधिके।",
    mantraMeaningHi: "अखंड सौभाग्य की दात्री माँ गौरी एवं भगवान शिव को प्रणाम।",
    descriptionHi: "चैत्र शुक्ल तृतीया को अखंड सौभाग्य हेतु शिव-पार्वती का गणगौर पूजन एवं भगवान मत्स्य अवतार की जयंती मनाई जाती है।",
    pujaHintHi: "सुहागिनें माता पार्वती को सुहाग सामग्री अर्पित कर गणगौर पूजन करें।"
  },
  {
    id: "chaitra-navratri-4",
    nameHi: "चैत्र नवरात्रि दिवस ४ — माँ कूष्माण्डा पूजन",
    nameEn: "Chaitra Navratri Day 4 (Maa Kushmanda)",
    category: "mahaparv",
    masaIndex: 0,
    masaConvention: "PURNIMANTA",
    paksha: "शुक्ल",
    tithiNumber: 4,
    kaal: "SUNRISE",
    priority: 95,
    skipAdhikaMasa: true,
    seriesId: "chaitra-navratri",
    seriesDay: 4,
    seriesTotalDays: 9,
    specialCondition: "NAVRATRI_SERIES",
    deityHi: "माँ कूष्माण्डा (चतुर्थ नवदुर्गा)",
    mantraSa: "ॐ देवी कूष्माण्डायै नमः॥ सुरासम्पूर्णकलशं रुधिराप्लुतमेव च। दधाना हस्तपद्माभ्यां कूष्माण्डा शुभदास्तु मे॥",
    mantraMeaningHi: "अपनी मंद मुस्कान से ब्रह्माण्ड की रचना करने वाली माँ कूष्माण्डा को सादर नमन।",
    descriptionHi: "चैत्र नवरात्रि के चतुर्थ दिवस पर आयु, यश, बल व आरोग्य की दात्री माँ कूष्माण्डा का पूजन होता है।",
    pujaHintHi: "माँ कूष्माण्डा को लाल/पीले पुष्प व मालपुआ का नैवेद्य अर्पित कर दुर्गा सप्तशती का पाठ करें।"
  },
  {
    id: "chaitra-navratri-5",
    nameHi: "चैत्र नवरात्रि दिवस ५ — माँ स्कन्दमाता पूजन (श्री पंचमी)",
    nameEn: "Chaitra Navratri Day 5 (Maa Skandamata)",
    category: "mahaparv",
    masaIndex: 0,
    masaConvention: "PURNIMANTA",
    paksha: "शुक्ल",
    tithiNumber: 5,
    kaal: "SUNRISE",
    priority: 95,
    skipAdhikaMasa: true,
    seriesId: "chaitra-navratri",
    seriesDay: 5,
    seriesTotalDays: 9,
    specialCondition: "NAVRATRI_SERIES",
    deityHi: "माँ स्कन्दमाता (पंचम नवदुर्गा)",
    mantraSa: "ॐ देवी स्कन्दमातायै नमः॥ सिंहासनगता नित्यं पद्माश्रितकरद्वया। शुभदास्तु सदा देवी स्कन्दमाता यशस्विनी॥",
    mantraMeaningHi: "भगवान कार्तिकेय (स्कन्द) की माता पद्मासना भगवती स्कन्दमाता को प्रणाम।",
    descriptionHi: "चैत्र नवरात्रि के पंचम दिवस पर वात्सल्य, संतान सुख व बुद्धि प्रदान करने वाली माँ स्कन्दमाता की पूजा की जाती है।",
    pujaHintHi: "माँ स्कन्दमाता को पीले कनेर/कमल पुष्प तथा केले (कदली फल) का नैवेद्य अर्पित करें।"
  },
  {
    id: "chaitra-navratri-6",
    nameHi: "चैत्र नवरात्रि दिवस ६ — माँ कात्यायनी पूजन (चैती छठ / यमुना छठ)",
    nameEn: "Chaitra Navratri Day 6 (Maa Katyayani)",
    category: "mahaparv",
    masaIndex: 0,
    masaConvention: "PURNIMANTA",
    paksha: "शुक्ल",
    tithiNumber: 6,
    kaal: "SUNRISE",
    priority: 95,
    skipAdhikaMasa: true,
    seriesId: "chaitra-navratri",
    seriesDay: 6,
    seriesTotalDays: 9,
    specialCondition: "NAVRATRI_SERIES",
    deityHi: "माँ कात्यायनी (षष्ठ नवदुर्गा)",
    mantraSa: "ॐ देवी कात्यायन्यै नमः॥ चन्द्रहासोज्ज्वलकरा शार्दूलवरवाहना। कात्यायनी शुभं दद्याद्देवी दानवघातिनी॥",
    mantraMeaningHi: "समस्त बाधाओं का संहार कर विवाह, धर्म व अर्थ-काम प्रदान करने वाली माँ कात्यायनी को नमन।",
    descriptionHi: "चैत्र नवरात्रि के षष्ठ दिवस पर माँ कात्यायनी की आराधना के साथ ही चैती छठ व यमुना जयंती का पावन संयोग होता है।",
    pujaHintHi: "माँ कात्यायनी को लाल पुष्प व शहद (मधु) का नैवेद्य अर्पित करें; शीघ्र विवाह व बाधा निवारण हेतु कात्यायनी मंत्र का जप करें।"
  },
  {
    id: "chaitra-navratri-7",
    nameHi: "चैत्र नवरात्रि दिवस ७ — माँ कालरात्रि पूजन (महा सप्तमी)",
    nameEn: "Chaitra Navratri Day 7 (Maa Kalaratri)",
    category: "mahaparv",
    masaIndex: 0,
    masaConvention: "PURNIMANTA",
    paksha: "शुक्ल",
    tithiNumber: 7,
    kaal: "SUNRISE",
    priority: 97,
    skipAdhikaMasa: true,
    seriesId: "chaitra-navratri",
    seriesDay: 7,
    seriesTotalDays: 9,
    specialCondition: "NAVRATRI_SERIES",
    deityHi: "माँ कालरात्रि (सप्तम नवदुर्गा)",
    mantraSa: "ॐ देवी कालरात्र्यै नमः॥ एकवेणी जपाकर्णपूरा नग्ना खरास्थिता। लम्बोष्ठी कर्णिकाकर्णी तैलाभ्यक्तशरीरिणी॥",
    mantraMeaningHi: "समस्त संकट, अकाल भय व नकारात्मक ऊर्जा का नाश करने वाली शुभंकरी माँ कालरात्रि को प्रणाम।",
    descriptionHi: "चैत्र नवरात्रि की महासप्तमी को माँ कालरात्रि के पूजन से भय, शत्रु व राहु-शनि आदि ग्रह बाधाएं शांत होती हैं।",
    pujaHintHi: "माँ कालरात्रि को लाल गुड़हल (जपाकुसुम) व रातरानी के पुष्प तथा गुड़ (Jaggery) का नैवेद्य अर्पित करें।"
  },
  {
    id: "chaitra-navratri-8",
    nameHi: "चैत्र दुर्गा महाष्टमी — माँ महागौरी पूजन एवं कन्या पूजन (दिवस ८)",
    nameEn: "Chaitra Durga Ashtami — Maa Mahagauri (Day 8)",
    category: "mahaparv",
    masaIndex: 0,
    masaConvention: "PURNIMANTA",
    paksha: "शुक्ल",
    tithiNumber: 8,
    kaal: "SUNRISE",
    priority: 100,
    skipAdhikaMasa: true,
    seriesId: "chaitra-navratri",
    seriesDay: 8,
    seriesTotalDays: 9,
    specialCondition: "NAVRATRI_SERIES",
    deityHi: "माँ महागौरी (अष्टम नवदुर्गा)",
    mantraSa: "ॐ देवी महागौर्यै नमः॥ श्वेते वृषे समारूढा श्वेताम्बरधरा शुचिः। महागौरी शुभं दद्यान्महादेवप्रमोददा॥",
    mantraMeaningHi: "सदा पवित्र, अमोघ फलदायिनी और सुख-सौभाग्य प्रदान करने वाली अष्टम नवदुर्गा माँ महागौरी को प्रणाम।",
    descriptionHi: "चैत्र शुक्ल अष्टमी (दुर्गाष्टमी) को माँ महागौरी का पूजन, अष्टमी हवन एवं कुमारी कन्या पूजन किया जाता है।",
    pujaHintHi: "माँ महागौरी को श्वेत/लाल पुष्प, नारियल (श्रीफल) व हलवा-पूड़ी-काले चने का भोग लगाकर नौ कन्याओं का पूजन करें।"
  },
  {
    id: "ram-navami",
    nameHi: "श्री राम नवमी महापर्व • नवरात्रि दिवस ९ (माँ सिद्धिदात्री पूजन एवं पारण)",
    nameEn: "Shri Ram Navami & Navratri Day 9 (Maa Siddhidatri)",
    category: "mahaparv",
    masaIndex: 0,
    masaConvention: "PURNIMANTA",
    paksha: "शुक्ल",
    tithiNumber: 9,
    kaal: "MADHYAHNA",
    priority: 100,
    skipAdhikaMasa: true,
    seriesId: "chaitra-navratri",
    seriesDay: 9,
    seriesTotalDays: 9,
    specialCondition: "NAVRATRI_SERIES",
    deityHi: "मर्यादा पुरुषोत्तम भगवान श्री राम एवं माँ सिद्धिदात्री (नवम नवदुर्गा)",
    mantraSa: "श्री राम जय राम जय जय राम॥ ॐ देवी सिद्धिदात्र्यै नमः॥ सिद्धगन्धर्वयक्षाद्यैरसुरैरमरैरपि। सेव्यमाना सदा भूयात् सिद्धिदा सिद्धिदायिनी॥",
    mantraMeaningHi: "रघुकुल मणि भगवान श्रीरामचंद्र तथा अणिमादि अष्ट सिद्धियों की दात्री नवम नवदुर्गा माँ सिद्धिदात्री को सादर प्रणाम।",
    descriptionHi: "चैत्र शुक्ल नवमी के मध्याह्न काल में भगवान श्री राम का प्राकट्य हुआ एवं नवम दिवस पर माँ सिद्धिदात्री के पूजन, पूर्णाहुति हवन व कन्या पूजन से चैत्र नवरात्रि व्रत पूर्ण होता है।",
    pujaHintHi: "मध्याह्न काल में श्रीराम जन्मोत्सव आरती करें, माँ सिद्धिदात्री को कमल-तिल-हलवा अर्पित कर हवन व कन्या पूजन करें।"
  },
  {
    id: "chaitra-purnima-hanuman",
    nameHi: "चैत्र पूर्णिमा एवं श्री हनुमान जन्मोत्सव (उत्तर भारत)",
    nameEn: "Chaitra Purnima & Hanuman Jayanti",
    category: "purnima",
    masaIndex: 0,
    masaConvention: "PURNIMANTA",
    paksha: "शुक्ल",
    tithiNumber: 15,
    kaal: "SUNRISE",
    priority: 95,
    skipAdhikaMasa: true,
    deityHi: "संकटमोचन श्री हनुमान जी एवं भगवान श्री सत्यनारायण",
    mantraSa: "ॐ हं हनुमते रुद्रात्मकाय हुं फट्॥ अतुलितबलधामं हेमशैलाभदेहम्।",
    mantraMeaningHi: "अतुलित बल के धाम, संकटमोचन पवनपुत्र श्री हनुमान जी को कोटि-कोटि नमन।",
    descriptionHi: "चैत्र शुक्ल पूर्णिमा को अंजनी नंदन श्री हनुमान जी का जन्मोत्सव मनाया जाता है।",
    pujaHintHi: "हनुमान जी को सिंदूर व चमेली का तेल, लड्डू अर्पित कर सुंदरकांड व हनुमान चालीसा का पाठ करें।"
  },
  // ---- VAISHAKHA (Masa 1) ----
  {
    id: "akshaya-tritiya",
    nameHi: "अक्षय तृतीया (आखा तीज) एवं भगवान परशुराम जयंती",
    nameEn: "Akshaya Tritiya & Parashurama Jayanti",
    category: "mahaparv",
    masaIndex: 1,
    masaConvention: "PURNIMANTA",
    paksha: "शुक्ल",
    tithiNumber: 3,
    kaal: "MADHYAHNA",
    priority: 100,
    skipAdhikaMasa: true,
    deityHi: "भगवान श्री हरि विष्णु, माँ महालक्ष्मी एवं भगवान परशुराम",
    mantraSa: "ॐ नमो भगवते वासुदेवाय॥ ॐ श्रीं ह्रीं श्रीं महालक्ष्म्यै नमः॥",
    mantraMeaningHi: "जगत्पालक श्री हरि विष्णु व माँ लक्ष्मी की कृपा से जीवन में अक्षय पुण्य व समृद्धि प्राप्त हो।",
    descriptionHi: "वैशाख शुक्ल तृतीया स्वयं-सिद्ध अबूझ मुहूर्त है। इस दिन किया गया दान, जप व स्वर्ण क्रय अक्षय फल देता है।",
    pujaHintHi: "प्रातः जल से भरा घड़ा व सत्तू दान करें एवं श्री विष्णु-लक्ष्मी पूजन करें।"
  },
  {
    id: "narasimha-jayanti",
    nameHi: "श्री नृसिंह जयंती (वैशाख शुक्ल चतुर्दशी)",
    nameEn: "Narasimha Jayanti",
    category: "vrat",
    masaIndex: 1,
    masaConvention: "PURNIMANTA",
    paksha: "शुक्ल",
    tithiNumber: 14,
    kaal: "EVENING",
    priority: 85,
    skipAdhikaMasa: true,
    deityHi: "भगवान श्री लक्ष्मी-नृसिंह",
    mantraSa: "ॐ उग्रं वीरं महाविष्णुं ज्वलन्तं सर्वतोमुखम्। नृसिंहं भीषणं भद्रं मृत्युमृत्युं नमाम्यहम्॥",
    mantraMeaningHi: "शत्रु-भय का नाश करने वाले महाविष्णु भगवान श्री नृसिंह देव को नमन।",
    descriptionHi: "वैशाख शुक्ल चतुर्दशी की गोधूलि वेला में भगवान श्री नृसिंह का अवतरण हुआ।",
    pujaHintHi: "सायंकाल गोधूलि वेला में भगवान नृसिंह का पानक व फल से अभिषेक व पूजन करें।"
  },
  {
    id: "vaishakha-buddha-purnima",
    nameHi: "वैशाख पूर्णिमा एवं श्री बुद्ध पूर्णिमा",
    nameEn: "Vaishakha Purnima & Buddha Purnima",
    category: "purnima",
    masaIndex: 1,
    masaConvention: "PURNIMANTA",
    paksha: "शुक्ल",
    tithiNumber: 15,
    kaal: "SUNRISE",
    priority: 92,
    skipAdhikaMasa: true,
    deityHi: "भगवान श्री सत्यनारायण एवं भगवान बुद्ध (दशावतार)",
    mantraSa: "ॐ नमो भगवते वासुदेवाय॥",
    mantraMeaningHi: "करुणा व सत्य के प्रतीक भगवान विष्णु को नमन।",
    descriptionHi: "वैशाख पूर्णिमा पर पवित्र नदी स्नान, जल-अन्न दान व श्री सत्यनारायण कथा का विशेष माहात्म्य है।",
    pujaHintHi: "प्रातः तीर्थ स्नान कर तिल-जल दान एवं श्री सत्यनारायण पूजन करें।"
  },
  // ---- JYESHTHA (Masa 2) ----
  {
    id: "vat-savitri-amavasya",
    nameHi: "वट सावित्री व्रत एवं शनि जयंती (ज्येष्ठ अमावस्या)",
    nameEn: "Vat Savitri Vrat & Shani Jayanti",
    category: "amavasya",
    masaIndex: 2,
    masaConvention: "PURNIMANTA",
    paksha: "कृष्ण",
    tithiNumber: 15,
    kaal: "MADHYAHNA",
    priority: 95,
    skipAdhikaMasa: true,
    deityHi: "बरगद (वट वृक्ष), माता सावित्री, श्री सत्यवान एवं शनि देव",
    mantraSa: "अवैधव्यं च सौभाग्यं देहि त्वं मम सुव्रते। ॐ शं शनैश्चराय नमः॥",
    mantraMeaningHi: "माता सावित्री अखंड सौभाग्य प्रदान करें एवं कर्मफलदाता शनि देव कष्ट हरें।",
    descriptionHi: "ज्येष्ठ कृष्ण अमावस्या को उत्तर भारत में वट सावित्री सौभाग्य व्रत एवं श्री शनि जन्मोत्सव मनाया जाता है।",
    pujaHintHi: "वट वृक्ष की १०८ या ७ परिक्रमा कर कच्चा सूत लपेटें तथा सायंकाल शनि देव को तिल तेल अर्पित करें।"
  },
  {
    id: "ganga-dussehra",
    nameHi: "माँ गंगा दशहरा महापर्व",
    nameEn: "Ganga Dussehra",
    category: "mahaparv",
    masaIndex: 2,
    masaConvention: "PURNIMANTA",
    paksha: "शुक्ल",
    tithiNumber: 10,
    kaal: "SUNRISE",
    priority: 96,
    skipAdhikaMasa: true,
    deityHi: "पतितपावनी माँ गंगा एवं देवाधिदेव महादेव",
    mantraSa: "ॐ नमो गंगायै विश्वरूपिण्यै नारायण्यै नमो नमः॥",
    mantraMeaningHi: "दस प्रकार के पापों का हरण करने वाली मोक्षदायिनी माँ गंगा को प्रणाम।",
    descriptionHi: "ज्येष्ठ शुक्ल दशमी को माँ गंगा का पृथ्वी पर अवतरण हुआ था।",
    pujaHintHi: "पवित्र गंगा स्नान (या जल में गंगाजल मिलाकर स्नान) कर दस दीप व फल दान करें।"
  },
  {
    id: "jyeshtha-purnima",
    nameHi: "ज्येष्ठ पूर्णिमा (कबीर जयंती / वट पूर्णिमा)",
    nameEn: "Jyeshtha Purnima",
    category: "purnima",
    masaIndex: 2,
    masaConvention: "PURNIMANTA",
    paksha: "शुक्ल",
    tithiNumber: 15,
    kaal: "SUNRISE",
    priority: 90,
    skipAdhikaMasa: true,
    deityHi: "भगवान श्री हरि विष्णु एवं चंद्र देव",
    mantraSa: "ॐ नमो भगवते वासुदेवाय॥",
    mantraMeaningHi: "जगत के पालनहार भगवान विष्णु को सादर प्रणाम।",
    descriptionHi: "ज्येष्ठ पूर्णिमा को वट पूर्णिमा व्रत, सत्यनारायण कथा एवं दान-पुण्य का विधान है।",
    pujaHintHi: "श्री सत्यनारायण कथा श्रवण कर सायंकाल चंद्र अर्घ्य दें।"
  },
  // ---- ASHADHA (Masa 3) ----
  {
    id: "guru-purnima",
    nameHi: "गुरु पूर्णिमा (व्यास पूर्णिमा / आषाढ़ पूर्णिमा)",
    nameEn: "Guru Purnima (Vyasa Purnima)",
    category: "purnima",
    masaIndex: 3,
    masaConvention: "PURNIMANTA",
    paksha: "शुक्ल",
    tithiNumber: 15,
    kaal: "SUNRISE",
    priority: 98,
    skipAdhikaMasa: true,
    deityHi: "महर्षि वेदव्यास जी एवं सद्गुरु देव",
    mantraSa: "गुरुर्ब्रह्मा गुरुर्विष्णुः गुरुर्देवो महेश्वरः। गुरुः साक्षात् परब्रह्म तस्मै श्रीगुरवे नमः॥",
    mantraMeaningHi: "त्रिदेव स्वरूप परमब्रह्म सद्गुरु देव के चरणों में कोटि-कोटि नमन।",
    descriptionHi: "आषाढ़ शुक्ल पूर्णिमा वेदों के रचयिता महर्षि वेदव्यास जी का प्राकट्य दिवस एवं गुरु पूजन पर्व है।",
    pujaHintHi: "अपने गुरुदेव व माता-पिता का वंदन कर महर्षि वेदव्यास का स्मरण करें।"
  },
  // ---- SHRAVANA (Masa 4) ----
  {
    id: "hariyali-teej",
    nameHi: "हरियाली तीज (श्रावण शुक्ल तृतीया)",
    nameEn: "Hariyali Teej",
    category: "mahaparv",
    masaIndex: 4,
    masaConvention: "PURNIMANTA",
    paksha: "शुक्ल",
    tithiNumber: 3,
    kaal: "SUNRISE",
    priority: 95,
    skipAdhikaMasa: true,
    deityHi: "माता पार्वती (गौरी) एवं देवाधिदेव महादेव",
    mantraSa: "ॐ पार्वत्यै नमः॥ नमः शिवाय शर्वाय सौभाग्यसंततिप्रदाय॥",
    mantraMeaningHi: "अखंड सौभाग्य देने वाले माँ पार्वती व भगवान शंकर को प्रणाम।",
    descriptionHi: "श्रावण शुक्ल तृतीया (हरियाली तीज) शिव-पार्वती के पुनर्मिलन का पावन सौभाग्य पर्व है।",
    pujaHintHi: "हरे वस्त्र व सोलह श्रृंगार धारण कर माँ गौरी-शंकर की पूजा करें।"
  },
  {
    id: "nag-panchami",
    nameHi: "नाग पंचमी महापर्व (श्रावण शुक्ल पंचमी)",
    nameEn: "Nag Panchami",
    category: "mahaparv",
    masaIndex: 4,
    masaConvention: "PURNIMANTA",
    paksha: "शुक्ल",
    tithiNumber: 5,
    kaal: "SUNRISE",
    priority: 94,
    skipAdhikaMasa: true,
    deityHi: "नाग देवता (वासुकि, तक्षक, शेषनाग) एवं भगवान शिव",
    mantraSa: "ॐ भुजंगेशाय विद्महे, सर्पराजाय धीमहि, तन्नो नागः प्रचोदयात्॥",
    mantraMeaningHi: "महादेव के कंठहार स्वरूप दिव्य नाग देवताओं को मेरा नमन।",
    descriptionHi: "श्रावण शुक्ल पंचमी को कालसर्प दोष शांति और कुल रक्षा हेतु नाग देवताओं का पूजन होता है।",
    pujaHintHi: "महादेव व नाग देवता को कच्चा दूध, हल्दी-चंदन व लावा अर्पित करें।"
  },
  {
    id: "raksha-bandhan",
    nameHi: "रक्षाबंधन महापर्व (श्रावणी पूर्णिमा / संस्कृत दिवस)",
    nameEn: "Raksha Bandhan & Shravani Purnima",
    category: "mahaparv",
    masaIndex: 4,
    masaConvention: "PURNIMANTA",
    paksha: "शुक्ल",
    tithiNumber: 15,
    kaal: "APARAHNA",
    priority: 100,
    skipAdhikaMasa: true,
    specialCondition: "RAKSHA_BANDHAN_UDAYA_BHADRA",
    deityHi: "भगवान श्री हरि विष्णु, माता लक्ष्मी एवं महादेव",
    mantraSa: "येन बद्धो बली राजा दानवेन्द्रो महाबलः। तेन त्वामपि बध्नामि रक्षे मा चल मा चल॥",
    mantraMeaningHi: "जिस रक्षासूत्र से राजा बलि को बांधा गया, उसी से आपकी सदैव रक्षा हो।",
    descriptionHi: "श्रावण शुक्ल उदय-व्यापिनी पूर्णिमा (भद्रा-मुक्त काल में) भाई-बहन के पावन स्नेह का रक्षाबंधन महापर्व।",
    pujaHintHi: "भद्रा काल टालकर शुभ मुहूर्त में भाई की कलाई पर रक्षासूत्र बांधें एवं यज्ञोपवीत (जनेऊ) बदलें।"
  },
  // ---- BHADRAPADA (Masa 5) ----
  {
    id: "kajari-teej",
    nameHi: "कजरी तीज (बड़ी तीज / भाद्रपद कृष्ण तृतीया)",
    nameEn: "Kajari Teej",
    category: "vrat",
    masaIndex: 5,
    masaConvention: "PURNIMANTA",
    paksha: "कृष्ण",
    tithiNumber: 3,
    kaal: "CHANDRODAYA",
    priority: 82,
    skipAdhikaMasa: true,
    deityHi: "नीमड़ी माता, माँ पार्वती एवं भगवान शिव",
    mantraSa: "ॐ उमा महेश्वराभ्यां नमः॥",
    mantraMeaningHi: "भगवान शिव एवं माँ पार्वती को प्रणाम।",
    descriptionHi: "भाद्रपद कृष्ण तृतीया को सुहाग व पारिवारिक सुख हेतु कजरी तीज का व्रत व चंद्रोदय अर्घ्य दिया जाता है।",
    pujaHintHi: "सायंकाल नीमड़ी माता की पूजा कर चंद्रोदय पर अर्घ्य दें।"
  },
  {
    id: "krishna-janmashtami",
    nameHi: "श्री कृष्ण जन्माष्टमी महापर्व (गोकुलाष्टमी)",
    nameEn: "Shri Krishna Janmashtami",
    category: "mahaparv",
    masaIndex: 5,
    masaConvention: "PURNIMANTA",
    paksha: "कृष्ण",
    tithiNumber: 8,
    kaal: "NISHITHA",
    priority: 100,
    skipAdhikaMasa: true,
    specialCondition: "JANMASHTAMI_NISHITHA",
    deityHi: "योगेश्वर भगवान श्री कृष्ण (लड्डू गोपाल)",
    mantraSa: "ॐ नमो भगवते वासुदेवाय॥ वसुदेवसुतं देवं कंसचाणूरमर्दनम्। देवकीपरमानन्दं कृष्णं वन्दे जगद्गुरुम्॥",
    mantraMeaningHi: "देवकी-नंदन, जगत के गुरु भगवान श्री कृष्ण को सादर नमन।",
    descriptionHi: "भाद्रपद कृष्ण अष्टमी के निशीथ (अर्धरात्रि) काल में रोहिणी नक्षत्र संयोग में भगवान श्री कृष्ण का जन्म हुआ।",
    pujaHintHi: "मध्यरात्रि निशीथ काल में बाल गोपाल का पंचामृत अभिषेक कर माखन-मिश्री व धनिया पंजीरी का भोग लगाएं।"
  },
  {
    id: "hartalika-teej",
    nameHi: "हरतालिका तीज महाव्रत (भाद्रपद शुक्ल तृतीया)",
    nameEn: "Hartalika Teej",
    category: "mahaparv",
    masaIndex: 5,
    masaConvention: "PURNIMANTA",
    paksha: "शुक्ल",
    tithiNumber: 3,
    kaal: "PRADOSH",
    priority: 97,
    skipAdhikaMasa: true,
    deityHi: "माता पार्वती, भगवान शिव एवं श्री गणेश",
    mantraSa: "ॐ गौरीशंकराय नमः॥ हे गौरी शंकरार्धाङ्गि यथा त्वं शंकरप्रिया॥",
    mantraMeaningHi: "माँ पार्वती के समान अखंड सौभाग्य व भक्ति प्रदान करें।",
    descriptionHi: "भाद्रपद शुक्ल तृतीया को निर्जला रहकर बालू/मिट्टी के शिव-पार्वती की प्रदोष काल में पूजा की जाती है।",
    pujaHintHi: "प्रदोष काल में पार्थिव शिवलिंग व माँ पार्वती का पूजन कर रात्रि जागरण एवं कथा श्रवण करें।"
  },
  {
    id: "ganesh-chaturthi",
    nameHi: "श्री गणेश चतुर्थी महापर्व (विनायक चतुर्थी / गणेश स्थापना)",
    nameEn: "Ganesh Chaturthi",
    category: "mahaparv",
    masaIndex: 5,
    masaConvention: "PURNIMANTA",
    paksha: "शुक्ल",
    tithiNumber: 4,
    kaal: "MADHYAHNA",
    priority: 100,
    skipAdhikaMasa: true,
    deityHi: "प्रथम पूज्य विघ्नहर्ता श्री सिद्धिविनायक गणेश जी",
    mantraSa: "ॐ गं गणपतये नमः॥ वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ। निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥",
    mantraMeaningHi: "समस्त विघ्नों का नाश करने वाले भगवान श्री गणेश मेरे कार्य निर्विघ्न सिद्ध करें।",
    descriptionHi: "भाद्रपद शुक्ल चतुर्थी के मध्याह्न काल में भगवान श्री गणेश का अवतरण हुआ। मध्याह्न में प्रतिमा स्थापना श्रेष्ठ है।",
    pujaHintHi: "मध्याह्न काल में पार्थिव गणपति स्थापना कर दूर्वा, सिंदूर और मोदक अर्पित करें। (आज चंद्र दर्शन निषिद्ध है)।"
  },
  {
    id: "radha-ashtami",
    nameHi: "श्री राधा अष्टमी महापर्व",
    nameEn: "Radha Ashtami",
    category: "mahaparv",
    masaIndex: 5,
    masaConvention: "PURNIMANTA",
    paksha: "शुक्ल",
    tithiNumber: 8,
    kaal: "MADHYAHNA",
    priority: 95,
    skipAdhikaMasa: true,
    deityHi: "लाड़ली श्री राधारानी एवं भगवान श्री कृष्ण",
    mantraSa: "ॐ ह्रीं श्रीराधिकायै नमः॥ वृषभानुसुता देवी कृष्णप्राणाधिका परा॥",
    mantraMeaningHi: "वृषभानु नंदिनी करुणामयी श्री राधारानी को बारंबार प्रणाम।",
    descriptionHi: "भाद्रपद शुक्ल अष्टमी के मध्याह्न काल में बरसाना में श्री राधारानी का प्राकट्य हुआ।",
    pujaHintHi: "मध्याह्न में श्री राधा-कृष्ण का पंचामृत स्नान कर राधा नाम संकीर्तन करें।"
  },
  {
    id: "anant-chaturdashi",
    nameHi: "अनन्त चतुर्दशी एवं श्री गणेश विसर्जन",
    nameEn: "Anant Chaturdashi & Ganesh Visarjan",
    category: "mahaparv",
    masaIndex: 5,
    masaConvention: "PURNIMANTA",
    paksha: "शुक्ल",
    tithiNumber: 14,
    kaal: "SUNRISE",
    priority: 95,
    skipAdhikaMasa: true,
    deityHi: "भगवान श्री अनन्त पद्मनाभ विष्णु एवं श्री गणेश जी",
    mantraSa: "ॐ अनन्ताय नमः॥ नमो नमस्तेऽनन्ताय सहस्रशिरसे नमः॥",
    mantraMeaningHi: "अनन्त स्वरूप भगवान विष्णु व गणपति बप्पा की कृपा बनी रहे।",
    descriptionHi: "भाद्रपद शुक्ल चतुर्दशी को अनंत सूत्र बंधन तथा १० दिवसीय गणेशोत्सव का विसर्जन होता है।",
    pujaHintHi: "भगवान विष्णु की पूजा कर बांह पर १४ गांठ का अनंत सूत्र बांधें।"
  },
  {
    id: "bhadrapada-purnima-shraddh",
    nameHi: "भाद्रपद पूर्णिमा • पितृपक्ष (महालय श्राद्ध) प्रारंभ",
    nameEn: "Bhadrapada Purnima & Pitru Paksha Begins",
    category: "purnima",
    masaIndex: 5,
    masaConvention: "PURNIMANTA",
    paksha: "शुक्ल",
    tithiNumber: 15,
    kaal: "APARAHNA",
    priority: 92,
    skipAdhikaMasa: true,
    deityHi: "श्री सत्यनारायण भगवान एवं पितृ देवता",
    mantraSa: "ॐ नमो भगवते वासुदेवाय॥ देवताभ्यः पितृभ्यश्च महायोगिभ्य एव च॥",
    mantraMeaningHi: "भगवान विष्णु व समस्त पितृ देवों को नमन।",
    descriptionHi: "भाद्रपद पूर्णिमा से प्रोष्ठपदी श्राद्ध व पितृपक्ष का शुभारंभ होता है।",
    pujaHintHi: "प्रातः श्री सत्यनारायण पूजा व अपराह्न में पूर्णिमा श्राद्ध-तर्पण करें।"
  },
  // ---- ASHWIN (Masa 6) ----
  {
    id: "mahalaya-pitru-amavasya",
    nameHi: "सर्वपितृ अमावस्या (महालय अमावस्या / पितृपक्ष समापन)",
    nameEn: "Sarva Pitru Amavasya (Mahalaya)",
    category: "amavasya",
    masaIndex: 6,
    masaConvention: "PURNIMANTA",
    paksha: "कृष्ण",
    tithiNumber: 15,
    kaal: "APARAHNA",
    priority: 98,
    skipAdhikaMasa: true,
    specialCondition: "UDAYA_APARAHNA_PITRU",
    deityHi: "अर्यमा पितृ देव एवं भगवान श्री विष्णु",
    mantraSa: "ॐ अर्यमाय नमः॥ नमः स्वधायै स्वाहायै नित्यमेव नमो नमः॥",
    mantraMeaningHi: "समस्त ज्ञात व अज्ञात पितृ देवताओं की तृप्ति व आशीर्वाद के लिए नमन।",
    descriptionHi: "आश्विन कृष्ण अमावस्या पर समस्त पितरों के निमित्त तर्पण, श्राद्ध व ब्राह्मण भोजन से पितृ दोष दूर होता है।",
    pujaHintHi: "कुतप व अपराह्न काल में तिल-जल तर्पण, पंचबलि कर्म व अन्न-वस्त्र दान करें।"
  },
  // Sharad Navratri Series 1..9 (Ashwin Shukla 1..9)
  {
    id: "sharad-navratri-1",
    nameHi: "शारदीय नवरात्रि दिवस १ — कलश स्थापना (माँ शैलपुत्री)",
    nameEn: "Sharad Navratri Day 1 (Ghatasthapana)",
    category: "mahaparv",
    masaIndex: 6,
    masaConvention: "PURNIMANTA",
    paksha: "शुक्ल",
    tithiNumber: 1,
    kaal: "SUNRISE",
    priority: 100,
    skipAdhikaMasa: true,
    seriesId: "sharad-navratri",
    seriesDay: 1,
    seriesTotalDays: 9,
    deityHi: "माँ शैलपुत्री (प्रथम नवदुर्गा)",
    mantraSa: "ॐ देवी शैलपुत्र्यै नमः॥ वन्दे वाञ्छितलाभाय चन्द्रार्धकृतशेखराम्। वृषारूढां शूलधरां शैलपुत्रीं यशस्विनीम्॥",
    mantraMeaningHi: "हिमालय पुत्री माँ शैलपुत्री हमारे परिवार में शुभ शक्ति, स्थिरता व आरोग्य का संचार करें।",
    descriptionHi: "शारदीय नवरात्रि का प्रथम दिन। शुभ मुहूर्त में कलश स्थापना, जौ रोपण व माँ शैलपुत्री पूजन का विधान है।",
    pujaHintHi: "प्रातः अखंड ज्योति प्रज्वलित कर घटस्थापना करें; माँ को श्वेत/लाल कनेर व गुड़हल पुष्प तथा गाय के शुद्ध घी का नैवेद्य अर्पित करें।"
  },
  {
    id: "sharad-navratri-2",
    nameHi: "शारदीय नवरात्रि दिवस २ — माँ ब्रह्मचारिणी पूजन",
    nameEn: "Sharad Navratri Day 2 (Brahmacharini)",
    category: "mahaparv",
    masaIndex: 6,
    masaConvention: "PURNIMANTA",
    paksha: "शुक्ल",
    tithiNumber: 2,
    kaal: "SUNRISE",
    priority: 95,
    skipAdhikaMasa: true,
    seriesId: "sharad-navratri",
    seriesDay: 2,
    seriesTotalDays: 9,
    deityHi: "माँ ब्रह्मचारिणी (द्वितीय नवदुर्गा)",
    mantraSa: "ॐ देवी ब्रह्मचारिण्यै नमः॥ दधाना करपद्माभ्यामक्षमालाकमण्डलू। देवी प्रसीदतु मयि ब्रह्मचारिण्यनुत्तमा॥",
    mantraMeaningHi: "तप, संयम व ज्ञान की अधिष्ठात्री माँ ब्रह्मचारिणी को नमन।",
    descriptionHi: "नवरात्रि के दूसरे दिन तप, ज्ञान व सिद्धि प्रदाता माँ ब्रह्मचारिणी की उपासना की जाती है।",
    pujaHintHi: "माँ को श्वेत सुगंधित पुष्प (चमेली/मोगरा/गुलदाउदी) तथा शक्कर (मिश्री) व पंचामृत का नैवेद्य अर्पित करें।"
  },
  {
    id: "sharad-navratri-3",
    nameHi: "शारदीय नवरात्रि दिवस ३ — माँ चन्द्रघण्टा पूजन",
    nameEn: "Sharad Navratri Day 3 (Chandraghanta)",
    category: "mahaparv",
    masaIndex: 6,
    masaConvention: "PURNIMANTA",
    paksha: "शुक्ल",
    tithiNumber: 3,
    kaal: "SUNRISE",
    priority: 95,
    skipAdhikaMasa: true,
    seriesId: "sharad-navratri",
    seriesDay: 3,
    seriesTotalDays: 9,
    deityHi: "माँ चन्द्रघण्टा (तृतीय नवदुर्गा)",
    mantraSa: "ॐ देवी चन्द्रघण्टायै नमः॥ पिण्डजप्रवरारूढा चण्डकोपास्त्रकैर्युता। प्रसादं तनुते मह्यं चन्द्रघण्टेति विश्रुता॥",
    mantraMeaningHi: "मस्तक पर घंटे के आकार का अर्धचंद्र धारण करने वाली माँ चन्द्रघण्टा को प्रणाम।",
    descriptionHi: "नवरात्रि के तीसरे दिन भयनाशिनी व पराक्रम दात्री माँ चन्द्रघण्टा का पूजन होता है।",
    pujaHintHi: "माँ को लाल गुलाब या कमल पुष्प तथा गाय के दूध व खीर (दुग्ध निर्मित मिठाई) का नैवेद्य अर्पित करें।"
  },
  {
    id: "sharad-navratri-4",
    nameHi: "शारदीय नवरात्रि दिवस ४ — माँ कूष्माण्डा पूजन",
    nameEn: "Sharad Navratri Day 4 (Kushmanda)",
    category: "mahaparv",
    masaIndex: 6,
    masaConvention: "PURNIMANTA",
    paksha: "शुक्ल",
    tithiNumber: 4,
    kaal: "SUNRISE",
    priority: 95,
    skipAdhikaMasa: true,
    seriesId: "sharad-navratri",
    seriesDay: 4,
    seriesTotalDays: 9,
    deityHi: "माँ कूष्माण्डा (चतुर्थ नवदुर्गा)",
    mantraSa: "ॐ देवी कूष्माण्डायै नमः॥ सुरासम्पूर्णकलशं रुधिराप्लुतमेव च। दधाना हस्तपद्माभ्यां कूष्माण्डा शुभदास्तु मे॥",
    mantraMeaningHi: "ब्रह्माण्ड की सृजनकर्त्री माँ कूष्माण्डा को सादर नमन।",
    descriptionHi: "चतुर्थ दिवस पर तेज, आयु व यश प्रदान करने वाली माँ कूष्माण्डा की आराधना की जाती है।",
    pujaHintHi: "माँ को पीले/लाल कमल व चमेली के पुष्प तथा मालपुआ का नैवेद्य अर्पित कर दुर्गा सप्तशती का पाठ करें।"
  },
  {
    id: "sharad-navratri-5",
    nameHi: "शारदीय नवरात्रि दिवस ५ — माँ स्कन्दमाता पूजन (ललिता पंचमी)",
    nameEn: "Sharad Navratri Day 5 (Skandamata)",
    category: "mahaparv",
    masaIndex: 6,
    masaConvention: "PURNIMANTA",
    paksha: "शुक्ल",
    tithiNumber: 5,
    kaal: "SUNRISE",
    priority: 95,
    skipAdhikaMasa: true,
    seriesId: "sharad-navratri",
    seriesDay: 5,
    seriesTotalDays: 9,
    deityHi: "माँ स्कन्दमाता (पंचम नवदुर्गा)",
    mantraSa: "ॐ देवी स्कन्दमातायै नमः॥ सिंहासनगता नित्यं पद्माश्रितकरद्वया। शुभदास्तु सदा देवी स्कन्दमाता यशस्विनी॥",
    mantraMeaningHi: "भगवान स्कन्द (कार्तिकेय) की माता भगवती को प्रणाम।",
    descriptionHi: "पंचम दिवस पर वात्सल्य, संतान सुख और मोक्षद्वार की दात्री माँ स्कन्दमाता की पूजा होती है।",
    pujaHintHi: "माँ को पीले कनेर व कमल पुष्प तथा केले (कदली फल) का नैवेद्य अर्पित करें।"
  },
  {
    id: "sharad-navratri-6",
    nameHi: "शारदीय नवरात्रि दिवस ६ — माँ कात्यायनी पूजन",
    nameEn: "Sharad Navratri Day 6 (Katyayani)",
    category: "mahaparv",
    masaIndex: 6,
    masaConvention: "PURNIMANTA",
    paksha: "शुक्ल",
    tithiNumber: 6,
    kaal: "SUNRISE",
    priority: 95,
    skipAdhikaMasa: true,
    seriesId: "sharad-navratri",
    seriesDay: 6,
    seriesTotalDays: 9,
    deityHi: "माँ कात्यायनी (षष्ठ नवदुर्गा)",
    mantraSa: "ॐ देवी कात्यायन्यै नमः॥ चन्द्रहासोज्ज्वलकरा शार्दूलवरवाहना। कात्यायनी शुभं दद्याद्देवी दानवघातिनी॥",
    mantraMeaningHi: "शत्रुओं व बाधाओं का मर्दन करने वाली माँ कात्यायनी को नमन।",
    descriptionHi: "षष्ठ दिवस पर धर्म, अर्थ, काम, मोक्ष की दात्री माँ कात्यायनी का पूजन व दुर्गा बोधन होता है।",
    pujaHintHi: "माँ कात्यायनी को लाल गुलाब/गुड़हल के पुष्प तथा शहद (मधु) एवं मीठे पान का नैवेद्य अर्पित करें।"
  },
  {
    id: "sharad-navratri-7",
    nameHi: "शारदीय नवरात्रि दिवस ७ — माँ कालरात्रि पूजन (महा सप्तमी)",
    nameEn: "Sharad Navratri Day 7 (Kalaratri / Maha Saptami)",
    category: "mahaparv",
    masaIndex: 6,
    masaConvention: "PURNIMANTA",
    paksha: "शुक्ल",
    tithiNumber: 7,
    kaal: "SUNRISE",
    priority: 97,
    skipAdhikaMasa: true,
    seriesId: "sharad-navratri",
    seriesDay: 7,
    seriesTotalDays: 9,
    deityHi: "माँ कालरात्रि (सप्तम नवदुर्गा)",
    mantraSa: "ॐ देवी कालरात्र्यै नमः॥ एकवेणी जपाकर्णपूरा नग्ना खरास्थिता। लम्बोष्ठी कर्णिकाकर्णी तैलाभ्यक्तशरीरिणी॥",
    mantraMeaningHi: "समस्त संकट, अकाल भय व तमस का संहार करने वाली शुभंकरी माँ कालरात्रि को प्रणाम।",
    descriptionHi: "महासप्तमी को शुभंकरी माँ कालरात्रि की उपासना से भय, शत्रु व शनि-राहु सहित समस्त ग्रह बाधाएं दूर होती हैं।",
    pujaHintHi: 'ध्यान मंत्र ("जपाकर्णपूरा") के अनुसार माँ कालरात्रि को लाल गुड़हल (जपाकुसुम) एवं रातरानी के पुष्प तथा गुड़ (Jaggery) व गुड़ से बने पुए का नैवेद्य अर्पित करें।'
  },
  {
    id: "sharad-navratri-8",
    nameHi: "दुर्गा महाष्टमी (माँ महागौरी पूजन एवं कन्या पूजन)",
    nameEn: "Durga Maha Ashtami (Mahagauri)",
    category: "mahaparv",
    masaIndex: 6,
    masaConvention: "PURNIMANTA",
    paksha: "शुक्ल",
    tithiNumber: 8,
    kaal: "SUNRISE",
    priority: 100,
    skipAdhikaMasa: true,
    seriesId: "sharad-navratri",
    seriesDay: 8,
    seriesTotalDays: 9,
    deityHi: "माँ महागौरी (अष्टम नवदुर्गा)",
    mantraSa: "ॐ देवी महागौर्यै नमः॥ श्वेते वृषे समारूढा श्वेताम्बरधरा शुचिः। महागौरी शुभं दद्यान्महादेवप्रमोददा॥",
    mantraMeaningHi: "सदा पवित्र, अमोघ फलदायिनी और सुख-सौभाग्य प्रदान करने वाली माँ महागौरी को प्रणाम।",
    descriptionHi: "शारदीय नवरात्रि की महाष्टमी को माँ महागौरी का पूजन, हवन एवं कुमारी कन्या पूजन किया जाता है।",
    pujaHintHi: "माँ को मोगरा/श्वेत-लाल पुष्प, नारियल (श्रीफल) व हलवा-पूड़ी-काले चने का नैवेद्य अर्पित कर नौ कन्याओं का पूजन करें।"
  },
  {
    id: "sharad-navratri-9",
    nameHi: "दुर्गा महानवमी (माँ सिद्धिदात्री पूजन एवं हवन)",
    nameEn: "Maha Navami (Siddhidatri)",
    category: "mahaparv",
    masaIndex: 6,
    masaConvention: "PURNIMANTA",
    paksha: "शुक्ल",
    tithiNumber: 9,
    kaal: "SUNRISE",
    priority: 100,
    skipAdhikaMasa: true,
    seriesId: "sharad-navratri",
    seriesDay: 9,
    seriesTotalDays: 9,
    deityHi: "माँ सिद्धिदात्री (नवम नवदुर्गा)",
    mantraSa: "ॐ देवी सिद्धिदात्र्यै नमः॥ सिद्धगन्धर्वयक्षाद्यैरसुरैरमरैरपि। सेव्यमाना सदा भूयात् सिद्धिदा सिद्धिदायिनी॥",
    mantraMeaningHi: "अणिमादि अष्ट सिद्धियों एवं नव निधियों की दात्री माँ सिद्धिदात्री को सादर नमन।",
    descriptionHi: "महानवमी को माँ सिद्धिदात्री के पूजन, पूर्णाहुति हवन व कन्या पूजन से नवरात्रि अनुष्ठान सिद्ध होता है।",
    pujaHintHi: "माँ को कमल व गुड़हल पुष्प तथा तिल, घृत व हलवा-पूड़ी-चने का नैवेद्य अर्पित कर पूर्णाहुति हवन संपन्न करें।"
  },
  {
    id: "vijayadashami-dussehra",
    nameHi: "विजयादशमी / दशहरा महापर्व (शस्त्र एवं अपराजिता पूजन)",
    nameEn: "Vijayadashami (Dussehra)",
    category: "mahaparv",
    masaIndex: 6,
    masaConvention: "PURNIMANTA",
    paksha: "शुक्ल",
    tithiNumber: 10,
    kaal: "APARAHNA",
    priority: 100,
    skipAdhikaMasa: true,
    specialCondition: "UDAYA_APARAHNA_VIJAY",
    deityHi: "मर्यादा पुरुषोत्तम भगवान श्री राम एवं माँ अपराजिता",
    mantraSa: "श्री राम जय राम जय जय राम॥ अपराजितायै नमः॥",
    mantraMeaningHi: "धर्म की अधर्म पर विजय के प्रतीक प्रभु श्री राम व माँ अपराजिता को नमन।",
    descriptionHi: "आश्विन शुक्ल दशमी के अपराह्न/विजय मुहूर्त में प्रभु श्री राम ने रावण का वध किया था।",
    pujaHintHi: "विजय मुहूर्त में शमी वृक्ष व माँ अपराजिता का पूजन करें, रामायण पाठ करें।"
  },
  {
    id: "sharad-kojagari-purnima",
    nameHi: "शरद पूर्णिमा (कोजागरी लक्ष्मी पूजन / रास पूर्णिमा)",
    nameEn: "Sharad Purnima (Kojagari Purnima)",
    category: "purnima",
    masaIndex: 6,
    masaConvention: "PURNIMANTA",
    paksha: "शुक्ल",
    tithiNumber: 15,
    kaal: "NISHITHA",
    priority: 98,
    skipAdhikaMasa: true,
    deityHi: "माँ महालक्ष्मी, चंद्र देव एवं भगवान श्री कृष्ण",
    mantraSa: "ॐ श्रीं ह्रीं श्रीं कमले कमलालये प्रसीद प्रसीद महालक्ष्म्यै नमः॥",
    mantraMeaningHi: "कोजागरी रात्रि में जागकर आराधना करने वालों पर माँ लक्ष्मी अखंड कृपा बरसाती हैं।",
    descriptionHi: "आश्विन शुक्ल पूर्णिमा की रात्रि को चंद्रमा की सोलह कलाओं से अमृत वर्षा होती है व माँ लक्ष्मी पृथ्वी पर विचरण करती हैं।",
    pujaHintHi: "सायंकाल गाय के दूध की खीर बनाकर चंद्र प्रकाश में रखें एवं माँ लक्ष्मी का रात्रि पूजन करें।"
  },
  // ---- KARTIK (Masa 7 - Purnimanta Krishna starts right after Ashwin Purnima) ----
  {
    id: "karwa-chauth",
    nameHi: "करवा चौथ (करक चतुर्थी / संकष्टी चतुर्थी)",
    nameEn: "Karwa Chauth (Karak Chaturthi)",
    category: "mahaparv",
    masaIndex: 7,
    masaConvention: "PURNIMANTA",
    paksha: "कृष्ण",
    tithiNumber: 4,
    kaal: "CHANDRODAYA",
    priority: 100,
    skipAdhikaMasa: true,
    deityHi: "चौथ माता (माँ गौरी), भगवान शिव, श्री गणेश एवं चंद्र देव",
    mantraSa: "ॐ शिवायै नमः॥ देहि सौभाग्यमारोग्यं देहि मे परमं सुखम्।",
    mantraMeaningHi: "हे माँ गौरी व चंद्र देव! अखंड सौभाग्य व जीवनसाथी की दीर्घायु प्रदान करें।",
    descriptionHi: "कार्तिक कृष्ण चंद्रोदय व्यापिनी चतुर्थी को सुहागिन स्त्रियां पति की दीर्घायु हेतु निर्जला व्रत रखकर चंद्रमा को अर्घ्य देती हैं।",
    pujaHintHi: "सायंकाल चौथ माता कथा सुनें एवं चंद्रोदय पर छलनी से चंद्र दर्शन कर अर्घ्य दें।"
  },
  {
    id: "ahoi-ashtami",
    nameHi: "अहोई अष्टमी व्रत (तारोदय व्यापिनी)",
    nameEn: "Ahoi Ashtami",
    category: "vrat",
    masaIndex: 7,
    masaConvention: "PURNIMANTA",
    paksha: "कृष्ण",
    tithiNumber: 8,
    kaal: "EVENING",
    priority: 95,
    skipAdhikaMasa: true,
    deityHi: "अहोई भगवती (माँ पार्वती) एवं स्याऊ माता",
    mantraSa: "ॐ पार्वत्यै नमः॥ सर्वमङ्गलमाङ्गल्ये शिवे सर्वार्थसाधिके।",
    mantraMeaningHi: "संतानों की रक्षा व उन्नति प्रदान करने वाली माँ अहोई भगवती को प्रणाम।",
    descriptionHi: "कार्तिक कृष्ण सायंकाल तारोदय व्यापिनी अष्टमी को माताएं संतान की दीर्घायु व रक्षा हेतु अहोई अष्टमी व्रत रखती हैं।",
    pujaHintHi: "सायंकाल अहोई माता का पूजन कर रात्रि में तारों को अर्घ्य देकर व्रत खोलें।"
  },
  // Deepotsav 5-Day Mahaparv Series (Kartik Krishna 13..30, Kartik Shukla 1..2 Purnimanta)
  {
    id: "dhanteras",
    nameHi: "धनतेरस (धनत्रयोदशी / भगवान धन्वन्तरि जयंती)",
    nameEn: "Dhanteras (Dhanvantari Jayanti)",
    category: "mahaparv",
    masaIndex: 7,
    masaConvention: "PURNIMANTA",
    paksha: "कृष्ण",
    tithiNumber: 13,
    kaal: "PRADOSH",
    priority: 100,
    skipAdhikaMasa: true,
    seriesId: "deepotsav",
    seriesDay: 1,
    seriesTotalDays: 5,
    deityHi: "भगवान धन्वन्तरि, माँ महालक्ष्मी एवं कुबेर देव",
    mantraSa: "ॐ धन्वन्तराये नमः॥ नमामि धन्वन्तरिमादिदेवं सुरासुरैर्वन्दितपादपद्मम्॥",
    mantraMeaningHi: "उत्तम स्वास्थ्य के अधिष्ठाता भगवान धन्वन्तरि एवं धनपति कुबेर-लक्ष्मी को नमन।",
    descriptionHi: "दीपोत्सव का प्रथम दिवस। प्रदोष व्यापिनी कार्तिक कृष्ण त्रयोदशी को धन्वन्तरि पूजन, यम दीपदान व शुभ क्रय किया जाता है।",
    pujaHintHi: "प्रदोष काल में कुबेर, धन्वन्तरि व माँ लक्ष्मी का पूजन करें और घर के बाहर दक्षिणमुखी यम दीपक जलाएं।"
  },
  {
    id: "narak-chaturdashi",
    nameHi: "नरक चतुर्दशी (रूप चौदस / छोटी दीपावली)",
    nameEn: "Narak Chaturdashi (Chhoti Diwali)",
    category: "mahaparv",
    masaIndex: 7,
    masaConvention: "PURNIMANTA",
    paksha: "कृष्ण",
    tithiNumber: 14,
    kaal: "SUNRISE",
    priority: 98,
    skipAdhikaMasa: true,
    seriesId: "deepotsav",
    seriesDay: 2,
    seriesTotalDays: 5,
    deityHi: "भगवान श्री कृष्ण, माँ काली, श्री हनुमान जी एवं धर्मराज यम",
    mantraSa: "ॐ हं हनुमते नमः॥ यमाय धर्मराजाय मृत्यवे चान्तकाय च॥",
    mantraMeaningHi: "अकाल मृत्यु व रोग से रक्षा करने वाले भगवान श्री कृष्ण, हनुमान जी व धर्मराज यम को नमन।",
    descriptionHi: "दीपोत्सव का द्वितीय दिवस। सूर्योदय पूर्व अभ्यंग स्नान, श्री कृष्ण की नरकासुर पर विजय एवं रात्रि में १४ दीपदान का विधान है।",
    pujaHintHi: "प्रातः तिल के तेल से अभ्यंग स्नान करें व सायंकाल १४ दीपक प्रज्वलित करें।"
  },
  {
    id: "diwali-lakshmi-puja",
    nameHi: "दीपावली महापर्व (श्री महालक्ष्मी, गणेश एवं कुबेर महापूजन)",
    nameEn: "Diwali (Lakshmi Puja)",
    category: "mahaparv",
    masaIndex: 7,
    masaConvention: "PURNIMANTA",
    paksha: "कृष्ण",
    tithiNumber: 15,
    kaal: "PRADOSH",
    priority: 100,
    skipAdhikaMasa: true,
    specialCondition: "DIWALI_PRADOSH_NISHITHA",
    seriesId: "deepotsav",
    seriesDay: 3,
    seriesTotalDays: 5,
    deityHi: "माँ महालक्ष्मी, विघ्नहर्ता श्री गणेश एवं कुबेर देव",
    mantraSa: "ॐ श्रीं ह्रीं श्रीं कमले कमलालये प्रसीद प्रसीद ॐ श्रीं ह्रीं श्रीं महालक्ष्म्यै नमः॥",
    mantraMeaningHi: "समस्त ऐश्वर्य, सौभाग्य व मंगल प्रदान करने वाली माँ महालक्ष्मी व श्री गणेश को सादर प्रणाम।",
    descriptionHi: "दीपोत्सव का मुख्य महापर्व। प्रदोष व निशीथ व्यापिनी कार्तिक अमावस्या को श्री महालक्ष्मी-गणेश पूजन व दीपमाला प्रज्वलित की जाती है।",
    pujaHintHi: "प्रदोष काल व स्थिर वृषभ लग्न में माँ लक्ष्मी-गणेश-कुबेर व बही-खाता का पूजन कर दीपदान करें।"
  },
  {
    id: "govardhan-annakoot",
    nameHi: "गोवर्धन पूजा एवं अन्नकूट महोत्सव (बलि प्रतिपदा)",
    nameEn: "Govardhan Puja & Annakoot",
    category: "mahaparv",
    masaIndex: 7,
    masaConvention: "PURNIMANTA",
    paksha: "शुक्ल",
    tithiNumber: 1,
    kaal: "SUNRISE",
    priority: 99,
    skipAdhikaMasa: true,
    seriesId: "deepotsav",
    seriesDay: 4,
    seriesTotalDays: 5,
    deityHi: "श्री गिरिराज गोवर्धन नाथ (भगवान श्री कृष्ण)",
    mantraSa: "ॐ नमो भगवते वासुदेवाय॥ गोवर्धनधराधार गोकुलत्राणकारक॥",
    mantraMeaningHi: "इन्द्र के कोप से ब्रज की रक्षा करने वाले श्री गिरिराज धरण भगवान श्री कृष्ण को नमन।",
    descriptionHi: "दीपोत्सव का चतुर्थ दिवस। कार्तिक शुक्ल प्रतिपदा को गिरिराज गोवर्धन पूजन व अन्नकूट छप्पन भोग का पर्व मनाया जाता है।",
    pujaHintHi: "गोबर से गिरिराज जी की आकृति बनाकर पूजन व परिक्रमा करें एवं छप्पन/अन्नकूट भोग अर्पित करें।"
  },
  {
    id: "bhai-dooj",
    nameHi: "भैया दूज (यम द्वितीया) एवं श्री चित्रगुप्त पूजा",
    nameEn: "Bhai Dooj (Yama Dwitiya)",
    category: "mahaparv",
    masaIndex: 7,
    masaConvention: "PURNIMANTA",
    paksha: "शुक्ल",
    tithiNumber: 2,
    kaal: "APARAHNA",
    priority: 99,
    skipAdhikaMasa: true,
    seriesId: "deepotsav",
    seriesDay: 5,
    seriesTotalDays: 5,
    deityHi: "भगवान श्री चित्रगुप्त, यमराज एवं यमुना मैया",
    mantraSa: "ॐ चित्रगुप्ताय नमः॥ भ्रातस्तवानुजाताहं भुङ्क्ष्व भक्तमिमं शुभम्॥",
    mantraMeaningHi: "भाई-बहन के पावन प्रेम, दीर्घायु व ज्ञान-लेखनी के अधिष्ठाता श्री चित्रगुप्त जी को प्रणाम।",
    descriptionHi: "दीपोत्सव का पंचम दिवस। कार्तिक शुक्ल द्वितीया को बहन के हाथ से तिलक व भोजन तथा कलम-दवात (चित्रगुप्त) पूजन का विधान है।",
    pujaHintHi: "अपराह्न काल में भाई के मस्तक पर रोली-अक्षत तिलक कर आरती उतारें व श्री चित्रगुप्त पूजन करें।"
  },
  // Chhath Mahaparv 4-Day Series (Kartik Shukla 4, 5, 6, 7)
  {
    id: "chhath-nahay-khay",
    nameHi: "छठ महापर्व दिवस १ — नहाय-खाय",
    nameEn: "Chhath Puja Day 1 — Nahay-Khay",
    category: "mahaparv",
    masaIndex: 7,
    masaConvention: "PURNIMANTA",
    paksha: "शुक्ल",
    tithiNumber: 4,
    kaal: "SUNRISE",
    priority: 97,
    skipAdhikaMasa: true,
    seriesId: "chhath-mahaparv",
    seriesDay: 1,
    seriesTotalDays: 4,
    specialCondition: "CHHATH_SERIES",
    deityHi: "भगवान सूर्य नारायण एवं छठी मैया (षष्ठी देवी)",
    mantraSa: "ॐ घृणि सूर्याय नमः॥",
    mantraMeaningHi: "जगत को तेज व जीवन देने वाले भगवान भास्कर को नमन।",
    descriptionHi: "चतुर्दिवसीय छठ महापर्व का प्रथम दिवस (नहाय-खाय)। कार्तिक शुक्ल चतुर्थी को पवित्र स्नान कर शुद्ध सात्विक कद्दू-भात प्रसाद ग्रहण किया जाता है।",
    pujaHintHi: "प्रातः स्नान व सूर्य अर्घ्य के बाद सेंधा नमक व देसी घी से बने लौकी-भात का सात्विक प्रसाद ग्रहण करें।"
  },
  {
    id: "chhath-kharna",
    nameHi: "छठ महापर्व दिवस २ — खरना (लोहंडा)",
    nameEn: "Chhath Puja Day 2 — Kharna (Lohanda)",
    category: "mahaparv",
    masaIndex: 7,
    masaConvention: "PURNIMANTA",
    paksha: "शुक्ल",
    tithiNumber: 5,
    kaal: "SUNRISE",
    priority: 98,
    skipAdhikaMasa: true,
    seriesId: "chhath-mahaparv",
    seriesDay: 2,
    seriesTotalDays: 4,
    specialCondition: "CHHATH_SERIES",
    deityHi: "भगवान सूर्य नारायण एवं छठी मैया",
    mantraSa: "ॐ घृणि सूर्याय नमः॥ नमः षष्ठ्यै देव्यै॥",
    mantraMeaningHi: "संतान रक्षा व आरोग्य प्रदान करने वाली छठी मैया एवं सूर्य देव को प्रणाम।",
    descriptionHi: "छठ महापर्व का द्वितीय दिवस (खरना)। कार्तिक शुक्ल पंचमी को दिनभर उपवास के बाद सायं गुड़ की खीर का भोग लगाकर ३६ घंटे का निर्जला व्रत प्रारंभ होता है।",
    pujaHintHi: "सायं सूर्यास्त पश्चात मिट्टी के चूल्हे पर बनी गुड़-चावल की खीर व रोटी का छठी मैया को भोग लगाकर प्रसाद ग्रहण करें।"
  },
  {
    id: "chhath-sandhya-arghya",
    nameHi: "छठ महापर्व दिवस ३ — मुख्य डाला छठ (संध्या अर्घ्य)",
    nameEn: "Chhath Puja Day 3 — Sandhya Arghya",
    category: "mahaparv",
    masaIndex: 7,
    masaConvention: "PURNIMANTA",
    paksha: "शुक्ल",
    tithiNumber: 6,
    kaal: "SUNSET",
    priority: 100,
    skipAdhikaMasa: true,
    seriesId: "chhath-mahaparv",
    seriesDay: 3,
    seriesTotalDays: 4,
    specialCondition: "CHHATH_SERIES",
    deityHi: "प्रत्यक्ष देवता भगवान सूर्य नारायण एवं छठी मैया (षष्ठी देवी)",
    mantraSa: "ॐ घृणि सूर्याय नमः॥ आदिदेव नमस्तुभ्यं प्रसीद मम भास्कर। दिवाकर नमस्तुभ्यं प्रभाकर नमोऽस्तु ते॥",
    mantraMeaningHi: "अस्ताचलगामी भगवान भास्कर एवं छठी मैया हमारे कुल-परिवार पर अखंड कृपा बनाए रखें।",
    descriptionHi: "कार्तिक शुक्ल षष्ठी की संध्या को अस्ताचलगामी भगवान सूर्य को प्रथम अर्घ्य (संध्या अर्घ्य) अर्पित किया जाता है।",
    pujaHintHi: "सूर्यास्त वेला में पवित्र जल में खड़े होकर सूप में ठेकुआ, गन्ना, फल व दीप सजाकर अस्ताचलगामी सूर्य को अर्घ्य दें।"
  },
  {
    id: "chhath-usha-arghya",
    nameHi: "छठ महापर्व दिवस ४ — उषा अर्घ्य (सूर्योदय अर्घ्य एवं पारण)",
    nameEn: "Chhath Puja Day 4 — Usha Arghya (Parana)",
    category: "mahaparv",
    masaIndex: 7,
    masaConvention: "PURNIMANTA",
    paksha: "शुक्ल",
    tithiNumber: 7,
    kaal: "SUNRISE",
    priority: 99,
    skipAdhikaMasa: true,
    seriesId: "chhath-mahaparv",
    seriesDay: 4,
    seriesTotalDays: 4,
    specialCondition: "CHHATH_SERIES",
    deityHi: "उदीयमान भगवान सूर्य नारायण एवं छठी मैया",
    mantraSa: "ॐ घृणि सूर्याय आदित्यमूर्तये नमः॥",
    mantraMeaningHi: "उगते हुए भगवान सूर्य नारायण समस्त जगत को आरोग्य व तेजोमय आशीर्वाद प्रदान करें।",
    descriptionHi: "कार्तिक शुक्ल सप्तमी के सूर्योदय पर उगते सूर्य को उषा अर्घ्य देकर ३६ घंटे के निर्जला छठ महाव्रत का पारण किया जाता है।",
    pujaHintHi: "प्रातः सूर्योदय पर दूध व जल से उगते सूर्य को अर्घ्य दें, छठी मैया की आरती कर ठेकुआ व अदरक-जल से व्रत खोलें।"
  },
  {
    id: "gopashtami",
    nameHi: "गोपाष्टमी महापर्व (गौ-माता पूजन एवं श्री गोविन्द आराधना)",
    nameEn: "Gopashtami Mahaparv",
    category: "mahaparv",
    masaIndex: 7,
    masaConvention: "PURNIMANTA",
    paksha: "शुक्ल",
    tithiNumber: 8,
    kaal: "SUNRISE",
    priority: 100,
    skipAdhikaMasa: true,
    deityHi: "कामधेनु सुरभि गौ-माता एवं भगवान श्री गोविन्द कृष्ण",
    mantraSa: "ॐ सुरभियो नमः सर्वकामप्रदे देवि पावनी नमोस्तु ते॥ ॐ क्लीं कृष्णाय गोविन्दाय गोपीजनवल्लभाय स्वाहा॥",
    mantraMeaningHi: "समस्त देवताओं की निवासभूता कामधेनु गौ-माता एवं गोपाल श्री कृष्ण हमारे मनोरथ पूर्ण करें।",
    descriptionHi: "कार्तिक शुक्ल अष्टमी (गोपाष्टमी) के दिन भगवान श्री कृष्ण ने प्रथम बार गौ-चारण लीला प्रारंभ की थी। गौ-पूजन व सेवा का अनंत पुण्यफल है।",
    pujaHintHi: "गौ-माता व बछड़े का श्रृंगार व पूजन कर हरा चारा, गुड़ व आटे की लोई खिलाएं तथा ४ या ७ परिक्रमा करें।"
  },
  {
    id: "akshaya-navami",
    nameHi: "अक्षय नवमी (आंवला नवमी / कूष्माण्डा नवमी)",
    nameEn: "Akshaya Navami (Amla Navami)",
    category: "mahaparv",
    masaIndex: 7,
    masaConvention: "PURNIMANTA",
    paksha: "शुक्ल",
    tithiNumber: 9,
    kaal: "SUNRISE",
    priority: 95,
    skipAdhikaMasa: true,
    deityHi: "भगवान श्री हरि विष्णु, माँ लक्ष्मी एवं आंवला (धात्री) वृक्ष",
    mantraSa: "ॐ नमो भगवते वासुदेवाय॥ धात्री वृक्षाय नमः॥",
    mantraMeaningHi: "आंवला वृक्ष में वास करने वाले भगवान श्री विष्णु व माँ लक्ष्मी को प्रणाम।",
    descriptionHi: "कार्तिक शुक्ल नवमी (अक्षय नवमी) से सत्ययुग का प्रारंभ हुआ था। आंवला वृक्ष के नीचे पूजन व भोजन से अक्षय पुण्य प्राप्त होता है।",
    pujaHintHi: "आंवले के वृक्ष पर दूध-जल अर्पित कर परिक्रमा करें, दीप जलाएं और वहीं सात्विक भोजन प्रसाद ग्रहण करें।"
  },
  {
    id: "tulsi-vivah-devuthani",
    nameHi: "तुलसी विवाह (शालिग्राम-वृन्दा विवाहोत्सव)",
    nameEn: "Tulsi Vivah",
    category: "mahaparv",
    masaIndex: 7,
    masaConvention: "PURNIMANTA",
    paksha: "शुक्ल",
    tithiNumber: 12,
    kaal: "PRADOSH",
    priority: 96,
    skipAdhikaMasa: true,
    deityHi: "भगवान श्री शालिग्राम विष्णु एवं माता तुलसी (वृंदा)",
    mantraSa: "महाप्रसाद जननी सर्व सौभाग्यवर्धिनी। आधि व्याधि हरा नित्यं तुलसी त्वं नमोऽस्तु ते॥",
    mantraMeaningHi: "समस्त सौभाग्य बढ़ाने वाली माता तुलसी एवं भगवान शालिग्राम को नमन।",
    descriptionHi: "कार्तिक शुक्ल द्वादशी के प्रदोष काल में माता तुलसी व भगवान शालिग्राम का दिव्य विवाह सम्पन्न होता है एवं मांगलिक कार्य प्रारंभ होते हैं।",
    pujaHintHi: "सायंकाल तुलसी चौरे को गन्ने के मंडप से सजाकर माता तुलसी को लाल चुनरी व शालिग्राम जी का पूजन करें।"
  },
  {
    id: "vaikuntha-chaturdashi",
    nameHi: "बैकुण्ठ चतुर्दशी (हरि-हर मिलन पर्व)",
    nameEn: "Vaikuntha Chaturdashi",
    category: "mahaparv",
    masaIndex: 7,
    masaConvention: "PURNIMANTA",
    paksha: "शुक्ल",
    tithiNumber: 14,
    kaal: "NISHITHA",
    priority: 92,
    skipAdhikaMasa: true,
    deityHi: "भगवान श्री हरि विष्णु एवं देवाधिदेव महादेव (हरि-हर)",
    mantraSa: "ॐ नमो भगवते वासुदेवाय॥ ॐ नमः शिवाय॥",
    mantraMeaningHi: "भगवान विष्णु और भगवान शिव के एकाकार हरि-हर स्वरूप को सादर नमन।",
    descriptionHi: "कार्तिक शुक्ल चतुर्दशी के निशीथ काल में भगवान विष्णु व भगवान शिव का पावन हरि-हर मिलन होता है।",
    pujaHintHi: "भगवान विष्णु को बिल्वपत्र तथा भगवान शिव को तुलसी दल अर्पित कर ३६५ बत्ती का दीपदान करें।"
  },
  {
    id: "kartik-purnima-dev-deepawali",
    nameHi: "कार्तिक पूर्णिमा (देव दीपावली एवं श्री गुरु नानक देव जयंती)",
    nameEn: "Kartik Purnima & Dev Deepawali",
    category: "purnima",
    masaIndex: 7,
    masaConvention: "PURNIMANTA",
    paksha: "शुक्ल",
    tithiNumber: 15,
    kaal: "PRADOSH",
    priority: 100,
    skipAdhikaMasa: true,
    deityHi: "भगवान श्री हरि विष्णु, महादेव (त्रिपुरारी) एवं माँ गंगा",
    mantraSa: "ॐ नमो भगवते वासुदेवाय॥ नमामि त्रिपुरान्तकं शिवम्॥",
    mantraMeaningHi: "त्रिपुरासुर का संहार करने वाले भगवान शिव एवं श्री विष्णु को सादर प्रणाम।",
    descriptionHi: "कार्तिक पूर्णिमा (देव दीपावली) पर पवित्र गंगा स्नान, काशी घाटों पर दीपदान और भगवान सत्यनारायण पूजन का विशेष पुण्य है।",
    pujaHintHi: "प्रातः पवित्र नदी/तीर्थ स्नान कर सायंकाल तुलसी, घर के द्वार व नदी तट पर घी के दीप जलाएं।"
  },
  // ---- MARGASHIRSHA (Masa 8) ----
  {
    id: "vivah-panchami",
    nameHi: "श्री राम विवाह पंचमी (सीता-राम विवाहोत्सव)",
    nameEn: "Vivah Panchami",
    category: "mahaparv",
    masaIndex: 8,
    masaConvention: "PURNIMANTA",
    paksha: "शुक्ल",
    tithiNumber: 5,
    kaal: "SUNRISE",
    priority: 92,
    skipAdhikaMasa: true,
    deityHi: "भगवान श्री राम एवं जनक नंदिनी माता सीता",
    mantraSa: "श्री राम जय राम जय जय राम॥ जानकीवल्लभाय नमः॥",
    mantraMeaningHi: "जनकपुरी में विवाहोत्सव के आराध्य श्री सीताराम जी को प्रणाम।",
    descriptionHi: "मार्गशीर्ष शुक्ल पंचमी को मर्यादा पुरुषोत्तम श्री राम और माता जानकी का पावन विवाह संपन्न हुआ था।",
    pujaHintHi: "श्रीरामचरितमानस के बालकांड की विवाह प्रसंग चौपाइयों का पाठ कर श्री सीताराम की आरती करें।"
  },
  {
    id: "dattatreya-jayanti",
    nameHi: "श्री दत्तात्रेय जयंती एवं मार्गशीर्ष पूर्णिमा",
    nameEn: "Dattatreya Jayanti & Margashirsha Purnima",
    category: "purnima",
    masaIndex: 8,
    masaConvention: "PURNIMANTA",
    paksha: "शुक्ल",
    tithiNumber: 15,
    kaal: "PRADOSH",
    priority: 92,
    skipAdhikaMasa: true,
    deityHi: "त्रिदेव स्वरूप भगवान श्री दत्तात्रेय एवं चंद्र देव",
    mantraSa: "ॐ द्राँ दत्तात्रेयाय नमः॥ दिगम्बरा दिगम्बरा श्रीपाद वल्लभ दिगम्बरा॥",
    mantraMeaningHi: "ब्रह्मा, विष्णु, महेश के अवतार श्री दत्तात्रेय भगवान को नमन।",
    descriptionHi: "मार्गशीर्ष शुक्ल पूर्णिमा के प्रदोष काल में भगवान श्री दत्तात्रेय का प्राकट्य हुआ।",
    pujaHintHi: "प्रदोष काल में भगवान दत्तात्रेय की आरती कर अन्न-तिल का दान करें।"
  },
  // ---- PAUSHA (Masa 9) ----
  {
    id: "pausha-purnima",
    nameHi: "पौष पूर्णिमा (माघ स्नान प्रारंभ / शाकम्भरी जयंती)",
    nameEn: "Pausha Purnima (Shakambhari Purnima)",
    category: "purnima",
    masaIndex: 9,
    masaConvention: "PURNIMANTA",
    paksha: "शुक्ल",
    tithiNumber: 15,
    kaal: "SUNRISE",
    priority: 90,
    skipAdhikaMasa: true,
    deityHi: "माँ शाकम्भरी देवी, भगवान सूर्य एवं श्री विष्णु",
    mantraSa: "ॐ नमो भगवते वासुदेवाय॥ माँ शाकम्भर्यै नमः॥",
    mantraMeaningHi: "अन्न-शाक की दात्री माँ शाकम्भरी व भगवान विष्णु को प्रणाम।",
    descriptionHi: "पौष पूर्णिमा से प्रयागराज व पवित्र तीर्थों में कल्पवास एवं पावन माघ स्नान का प्रारंभ होता है।",
    pujaHintHi: "प्रातः पवित्र स्नान, सूर्य अर्घ्य व सायंकाल चंद्र अर्घ्य दें।"
  },
  // ---- MAGHA (Masa 10) ----
  {
    id: "mauni-amavasya",
    nameHi: "मौनी अमावस्या (माघी अमावस्या — महास्नान)",
    nameEn: "Mauni Amavasya (Maghi Amavasya)",
    category: "amavasya",
    masaIndex: 10,
    masaConvention: "PURNIMANTA",
    paksha: "कृष्ण",
    tithiNumber: 15,
    kaal: "SUNRISE",
    priority: 98,
    skipAdhikaMasa: true,
    deityHi: "भगवान श्री हरि विष्णु, संगम तीर्थ एवं पितृ देवता",
    mantraSa: "ॐ नमो भगवते वासुदेवाय॥ गङ्गे च यमुने चैव गोदावरि सरस्वति॥",
    mantraMeaningHi: "मौन व्रत व पवित्र स्नान के द्वारा भगवान विष्णु व पितरों की कृपा प्राप्त हो।",
    descriptionHi: "माघ कृष्ण अमावस्या (मौनी अमावस्या) वर्ष की सर्वश्रेष्ठ स्नान-दान अमावस्या मानी जाती है।",
    pujaHintHi: "प्रातः मौन रहकर पवित्र स्नान करें, तिल, गुड़ व ऊनी वस्त्र का दान करें।"
  },
  {
    id: "vasant-panchami",
    nameHi: "बसंत पंचमी (माँ सरस्वती प्राकट्योत्सव)",
    nameEn: "Vasant Panchami (Saraswati Puja)",
    category: "mahaparv",
    masaIndex: 10,
    masaConvention: "PURNIMANTA",
    paksha: "शुक्ल",
    tithiNumber: 5,
    kaal: "MADHYAHNA",
    priority: 100,
    skipAdhikaMasa: true,
    deityHi: "विद्या की अधिष्ठात्री माँ वीणावादिनी सरस्वती",
    mantraSa: "ॐ ऐं सरस्वत्यै ऐं नमः॥ या कुन्देन्दुतुषारहारधवला या शुभ्रवस्त्रावृता॥",
    mantraMeaningHi: "श्वेत कमल पर विराजमान भगवती सरस्वती हमारी बुद्धि को निर्मल ज्ञान दें।",
    descriptionHi: "माघ शुक्ल पंचमी (बसंत पंचमी) माँ सरस्वती के प्राकट्य का स्वयं-सिद्ध अबूझ मुहूर्त है।",
    pujaHintHi: "पीले वस्त्र पहनकर माँ सरस्वती को पीले पुष्प, पुस्तक-लेखनी व केसरिया मीठे चावल अर्पित करें।"
  },
  {
    id: "ratha-saptami",
    nameHi: "रथ सप्तमी / अचला सप्तमी (सूर्य जयंती)",
    nameEn: "Ratha Saptami (Achala Saptami)",
    category: "vrat",
    masaIndex: 10,
    masaConvention: "PURNIMANTA",
    paksha: "शुक्ल",
    tithiNumber: 7,
    kaal: "ARUNODAYA",
    priority: 92,
    skipAdhikaMasa: true,
    deityHi: "प्रत्यक्ष देवता भगवान सूर्य नारायण",
    mantraSa: "ॐ घृणि सूर्याय नमः॥ सप्तसप्तिवहप्रीत सप्तलोकप्रदीपन॥",
    mantraMeaningHi: "सात अश्वों के रथ पर आरूढ़ भगवान सूर्य नारायण समस्त जगत को आरोग्य प्रदान करें।",
    descriptionHi: "माघ शुक्ल अरुणोदय व्यापिनी सप्तमी को भगवान सूर्य ने सात घोड़ों के रथ पर जगत को प्रथम किरण प्रदान की थी।",
    pujaHintHi: "प्रातः अरुणोदय स्नान कर तांबे के पात्र से भगवान सूर्य को अर्घ्य दें।"
  },
  {
    id: "magha-purnima",
    nameHi: "माघ पूर्णिमा (माघ स्नान समापन / संत रविदास जयंती)",
    nameEn: "Magha Purnima",
    category: "purnima",
    masaIndex: 10,
    masaConvention: "PURNIMANTA",
    paksha: "शुक्ल",
    tithiNumber: 15,
    kaal: "SUNRISE",
    priority: 94,
    skipAdhikaMasa: true,
    deityHi: "भगवान श्री हरि विष्णु एवं माँ गंगा",
    mantraSa: "ॐ नमो भगवते वासुदेवाय॥",
    mantraMeaningHi: "माघ स्नान व दान के अधिष्ठाता भगवान श्री विष्णु को नमन।",
    descriptionHi: "माघ शुक्ल पूर्णिमा को सभी देवता प्रयाग संगम में स्नान हेतु आते हैं। आज स्नान-दान व कल्पवास पूर्ण होता है।",
    pujaHintHi: "प्रातः स्नान, तिल दान एवं श्री सत्यनारायण पूजन करें।"
  },
  // ---- PHALGUNA (Masa 11) ----
  {
    id: "maha-shivaratri",
    nameHi: "महाशिवरात्रि महापर्व (निशीथ व्यापिनी)",
    nameEn: "Maha Shivaratri",
    category: "mahaparv",
    masaIndex: 11,
    masaConvention: "PURNIMANTA",
    paksha: "कृष्ण",
    tithiNumber: 14,
    kaal: "NISHITHA",
    priority: 100,
    skipAdhikaMasa: true,
    specialCondition: "SHIVRATRI_NISHITHA",
    deityHi: "देवाधिदेव महादेव शिव शंकर एवं माता पार्वती",
    mantraSa: "ॐ नमः शिवाय॥ कर्पूरगौरं करुणावतारं संसारसारं भुजगेन्द्रहारम्। सदावसन्तं हृदयारविन्दे भवं भवानीसहितं नमामि॥",
    mantraMeaningHi: "शिव-शक्ति के दिव्य महामिलन की पावन रात्रि पर भगवान आशुतोष महादेव को कोटि-कोटि नमन।",
    descriptionHi: "फाल्गुन कृष्ण निशीथ (अर्धरात्रि) व्यापिनी चतुर्दशी को शिव-पार्वती विवाहोत्सव एवं ज्योतिर्लिंग प्राकट्य की महाशिवरात्रि मनाई जाती है।",
    pujaHintHi: "चारों प्रहर एवं निशीथ काल में शिवलिंग का पंचामृत अभिषेक, बिल्वपत्र व रुद्राभिषेक करें।"
  },
  {
    id: "holika-dahan",
    nameHi: "होलिका दहन (फाल्गुन पूर्णिमा — भद्रा रहित प्रदोष)",
    nameEn: "Holika Dahan",
    category: "mahaparv",
    masaIndex: 11,
    masaConvention: "PURNIMANTA",
    paksha: "शुक्ल",
    tithiNumber: 15,
    kaal: "PRADOSH",
    priority: 100,
    skipAdhikaMasa: true,
    specialCondition: "HOLIKA_PRADOSH_BHADRA",
    deityHi: "भगवान श्री नृसिंह, भक्त प्रह्लाद एवं अग्नि देव",
    mantraSa: "ॐ नमो भगवते वासुदेवाय॥ असृक्पा भयसन्त्रस्तैः कृता त्वं होलि बालिशैः॥",
    mantraMeaningHi: "भक्त प्रह्लाद के रक्षक भगवान विष्णु की कृपा से समस्त नकारात्मकता भस्म हो।",
    descriptionHi: "फाल्गुन शुक्ल पूर्णिमा के भद्रा-मुक्त प्रदोष काल में होलिका दहन किया जाता है।",
    pujaHintHi: "प्रदोष काल में भद्रा समाप्ति के उपरांत होलिका पूजन व दहन कर नई फसल (गेहूं की बालियां) भूनें।"
  },
  // ---- ADHIKA MASA SPECIAL EKADASHIS ----
  {
    id: "padmini-ekadashi",
    nameHi: "पद्मिनी (कमला) एकादशी — अधिक मास विशेष",
    nameEn: "Padmini Ekadashi (Adhika Masa)",
    category: "ekadashi",
    masaIndex: null,
    masaConvention: "MONTHLY",
    paksha: "शुक्ल",
    tithiNumber: 11,
    kaal: "SUNRISE",
    priority: 95,
    skipAdhikaMasa: false,
    adhikaOnly: true,
    specialCondition: "EKADASHI_SMARTA_VAISHNAVA",
    deityHi: "पुरुषोत्तम भगवान श्री कृष्ण एवं माता राधा",
    mantraSa: "ॐ नमो भगवते वासुदेवाय॥",
    mantraMeaningHi: "पुरुषोत्तम मास के स्वामी भगवान श्री हरि को नमन।",
    descriptionHi: "अधिक मास (पुरुषोत्तम मास) के शुक्ल पक्ष की परम दुर्लभ पद्मिनी/कमला एकादशी व्रत।",
    pujaHintHi: "प्रातः स्नान कर श्री पुरुषोत्तम विष्णु की पूजा करें और द्वादशी पारण अवधि में व्रत खोलें।"
  },
  {
    id: "parama-ekadashi",
    nameHi: "परमा एकादशी — अधिक मास विशेष",
    nameEn: "Parama Ekadashi (Adhika Masa)",
    category: "ekadashi",
    masaIndex: null,
    masaConvention: "MONTHLY",
    paksha: "कृष्ण",
    tithiNumber: 11,
    kaal: "SUNRISE",
    priority: 95,
    skipAdhikaMasa: false,
    adhikaOnly: true,
    specialCondition: "EKADASHI_SMARTA_VAISHNAVA",
    deityHi: "पुरुषोत्तम भगवान श्री कृष्ण एवं माँ लक्ष्मी",
    mantraSa: "ॐ नमो भगवते वासुदेवाय॥",
    mantraMeaningHi: "अधिक मास की परमा एकादशी के स्वामी भगवान श्री विष्णु को नमन।",
    descriptionHi: "अधिक मास (पुरुषोत्तम मास) के कृष्ण पक्ष की परमा एकादशी दरिद्रता नाशिनी व सिद्धियों की दात्री है।",
    pujaHintHi: "भगवान श्री कृष्ण का पंचामृत अभिषेक व विष्णु सहस्रनाम पाठ करें।"
  },
  // ---- MONTHLY RECURRING VRATS (Work in every Shuddha month; Ekadashi/Pradosh/Chaturthi/Shivratri) ----
  {
    id: "monthly-ekadashi-shukla",
    nameHi: "शुक्ल पक्ष एकादशी व्रत",
    nameEn: "Shukla Paksha Ekadashi",
    category: "ekadashi",
    masaIndex: null,
    masaConvention: "MONTHLY",
    paksha: "शुक्ल",
    tithiNumber: 11,
    kaal: "SUNRISE",
    priority: 92,
    skipAdhikaMasa: true,
    specialCondition: "EKADASHI_SMARTA_VAISHNAVA",
    deityHi: "जगत्पालक भगवान श्री हरि विष्णु एवं माँ महालक्ष्मी",
    mantraSa: "ॐ नमो भगवते वासुदेवाय॥ शान्ताकारं भुजगशयनं पद्मनाभं सुरेशम्॥",
    mantraMeaningHi: "श्री हरि विष्णु की कृपा से समस्त पाप नष्ट होकर धर्म, अर्थ, काम, मोक्ष प्राप्त होते हैं।",
    descriptionHi: "शुक्ल पक्ष एकादशी का पावन वैष्णव व्रत। चावल वर्जित व भगवान विष्णु-तुलसी आराधना का विशेष विधान है।",
    pujaHintHi: "प्रातः पीले पुष्प व तुलसी दल से श्री विष्णु पूजन करें और अगले दिन द्वादशी पारण मुहूर्त में व्रत खोलें।"
  },
  {
    id: "monthly-ekadashi-krishna",
    nameHi: "कृष्ण पक्ष एकादशी व्रत",
    nameEn: "Krishna Paksha Ekadashi",
    category: "ekadashi",
    masaIndex: null,
    masaConvention: "MONTHLY",
    paksha: "कृष्ण",
    tithiNumber: 11,
    kaal: "SUNRISE",
    priority: 92,
    skipAdhikaMasa: true,
    specialCondition: "EKADASHI_SMARTA_VAISHNAVA",
    deityHi: "जगत्पालक भगवान श्री हरि विष्णु एवं माँ महालक्ष्मी",
    mantraSa: "ॐ नमो भगवते वासुदेवाय॥",
    mantraMeaningHi: "समस्त एकादशी व्रतों के आराध्य भगवान श्री हरि विष्णु को सादर प्रणाम।",
    descriptionHi: "कृष्ण पक्ष एकादशी व्रत (स्मार्त/वैष्णव दशमी-विद्धा विचार सहित) से पाप नाश व पुण्य लाभ होता है।",
    pujaHintHi: "भगवान श्री विष्णु का स्मरण, तुलसी अर्पण व निर्धारित द्वादशी पारण समय पर व्रत पूर्ण करें।"
  },
  {
    id: "monthly-pradosh",
    nameHi: "प्रदोष व्रत",
    nameEn: "Pradosh Vrat",
    category: "pradosh",
    masaIndex: null,
    masaConvention: "MONTHLY",
    paksha: "ANY",
    tithiNumber: 13,
    kaal: "PRADOSH",
    priority: 85,
    skipAdhikaMasa: false,
    deityHi: "देवाधिदेव महादेव शिव शंकर एवं माता पार्वती",
    mantraSa: "ॐ नमः शिवाय॥ कर्पूरगौरं करुणावतारं संसारसारं भुजगेन्द्रहारम्॥",
    mantraMeaningHi: "प्रदोष वेला में कैलाश पर तांडव करने वाले भगवान शिव एवं माँ पार्वती को नमन।",
    descriptionHi: "त्रयोदशी तिथि जब सूर्यास्त पश्चात प्रदोष काल में व्याप्त होती है, तब शिव-पार्वती पूजन का प्रदोष व्रत रखा जाता है।",
    pujaHintHi: "सायंकाल प्रदोष वेला में शिवलिंग पर गंगाजल, कच्चा दूध व बिल्वपत्र अर्पित कर प्रदोष कथा सुनें।"
  },
  {
    id: "monthly-sankashti-chaturthi",
    nameHi: "संकष्टी गणेश चतुर्थी",
    nameEn: "Sankashti Chaturthi",
    category: "vrat",
    masaIndex: null,
    masaConvention: "MONTHLY",
    paksha: "कृष्ण",
    tithiNumber: 4,
    kaal: "CHANDRODAYA",
    priority: 80,
    skipAdhikaMasa: false,
    specialCondition: "TUESDAY_CHATURTHI",
    deityHi: "प्रथम पूज्य श्री विघ्नहर्ता गणेश जी",
    mantraSa: "ॐ गं गणपतये नमः॥ वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ॥",
    mantraMeaningHi: "जीवन के सभी संकट दूर करने वाले विघ्नहर्ता श्री गणेश को नमन।",
    descriptionHi: "कृष्ण पक्ष की चंद्रोदय व्यापिनी चतुर्थी को संकष्टी चतुर्थी (मंगलवार पड़ने पर अंगारकी चतुर्थी) मनाई जाती है।",
    pujaHintHi: "दिनभर व्रत रखकर सायंकाल गणपति पूजन करें और चंद्रोदय पर चंद्र देव को अर्घ्य देकर पारण करें।"
  },
  {
    id: "monthly-vinayaka-chaturthi",
    nameHi: "विनायक चतुर्थी",
    nameEn: "Vinayaka Chaturthi",
    category: "vrat",
    masaIndex: null,
    masaConvention: "MONTHLY",
    paksha: "शुक्ल",
    tithiNumber: 4,
    kaal: "MADHYAHNA",
    priority: 76,
    skipAdhikaMasa: false,
    deityHi: "श्री सिद्धिविनायक गणेश जी",
    mantraSa: "ॐ गं गणपतये नमः॥",
    mantraMeaningHi: "बुद्धि, ऋद्धि व सिद्धि के दाता श्री गणेश जी को प्रणाम।",
    descriptionHi: "शुक्ल पक्ष की मध्याह्न व्यापिनी चतुर्थी को विनायक चतुर्थी व्रत किया जाता है।",
    pujaHintHi: "मध्याह्न काल में श्री गणेश जी को दूर्वा व मोदक अर्पित कर अथर्वशीर्ष पाठ करें।"
  },
  {
    id: "monthly-masik-shivaratri",
    nameHi: "मासिक शिवरात्रि",
    nameEn: "Masik Shivaratri",
    category: "vrat",
    masaIndex: null,
    masaConvention: "MONTHLY",
    paksha: "कृष्ण",
    tithiNumber: 14,
    kaal: "NISHITHA",
    priority: 82,
    skipAdhikaMasa: false,
    deityHi: "भगवान शिव एवं माता पार्वती",
    mantraSa: "ॐ नमः शिवाय॥",
    mantraMeaningHi: "निशीथ वेला में आराध्य देवाधिदेव महादेव को प्रणाम।",
    descriptionHi: "प्रत्येक मास के कृष्ण पक्ष की निशीथ (अर्धरात्रि) व्यापिनी चतुर्दशी को मासिक शिवरात्रि मनाई जाती है।",
    pujaHintHi: "निशीथ काल में भगवान शिव का जल व बिल्वपत्र से अभिषेक एवं पंचाक्षरी मंत्र जप करें।"
  },
  {
    id: "monthly-purnima",
    nameHi: "पूर्णिमा व्रत एवं सत्यनारायण पूजा",
    nameEn: "Monthly Purnima Vrat",
    category: "purnima",
    masaIndex: null,
    masaConvention: "MONTHLY",
    paksha: "शुक्ल",
    tithiNumber: 15,
    kaal: "SUNRISE",
    priority: 75,
    skipAdhikaMasa: false,
    deityHi: "भगवान श्री सत्यनारायण एवं चंद्र देव",
    mantraSa: "ॐ नमो भगवते वासुदेवाय॥",
    mantraMeaningHi: "पूर्णिमा तिथि के स्वामी श्री सत्यनारायण व चंद्र देव को प्रणाम।",
    descriptionHi: "पूर्णिमा तिथि पर पवित्र स्नान, दान, श्री सत्यनारायण व्रत कथा और रात्रि चंद्र अर्घ्य का विशेष पुण्यफल है।",
    pujaHintHi: "श्री सत्यनारायण कथा श्रवण करें और सायं चंद्रमा को जल से अर्घ्य दें।"
  },
  {
    id: "monthly-amavasya",
    nameHi: "अमावस्या (पितृ तर्पण एवं स्नान-दान)",
    nameEn: "Monthly Amavasya",
    category: "amavasya",
    masaIndex: null,
    masaConvention: "MONTHLY",
    paksha: "कृष्ण",
    tithiNumber: 15,
    kaal: "APARAHNA",
    priority: 74,
    skipAdhikaMasa: false,
    deityHi: "भगवान श्री विष्णु एवं पितृ देवता",
    mantraSa: "ॐ नमो भगवते वासुदेवाय॥ देवताभ्यः पितृभ्यश्च नमो नमः॥",
    mantraMeaningHi: "पितरों के तर्पण व सद्गति हेतु भगवान विष्णु को प्रणाम।",
    descriptionHi: "अमावस्या तिथि पर पवित्र स्नान, काले तिल से पितृ तर्पण व पीपल वृक्ष पूजन का विधान है।",
    pujaHintHi: "प्रातः तर्पण-अन्नदान करें तथा सायंकाल पीपल वृक्ष के नीचे दीपक जलाएं।"
  },
  {
    id: "bhanu-saptami",
    nameHi: "भानु सप्तमी (रविवार-सप्तमी महासंयोग)",
    nameEn: "Bhanu Saptami",
    category: "vrat",
    masaIndex: null,
    masaConvention: "MONTHLY",
    paksha: "ANY",
    tithiNumber: 7,
    kaal: "SUNRISE",
    priority: 78,
    skipAdhikaMasa: false,
    specialCondition: "SUNDAY_SAPTAMI",
    deityHi: "प्रत्यक्ष देवता भगवान सूर्य नारायण",
    mantraSa: "ॐ घृणि सूर्याय नमः॥ जपाकुसुमसंकाशं काश्यपेयं महाद्युतिम्॥",
    mantraMeaningHi: "रविवार व सप्तमी के संयोग पर भगवान सूर्य नारायण आरोग्य व तेज प्रदान करें।",
    descriptionHi: "सप्तमी तिथि जब रविवार के सूर्योदय में विद्यमान होती है, तो वह आरोग्यदायिनी भानु सप्तमी कहलाती है।",
    pujaHintHi: "तांबे के लोटे से सूर्य देव को अर्घ्य देकर आदित्य हृदय स्तोत्र का पाठ करें।"
  },
  // ==================== REGIONAL LUNAR MAHAPARVAS (PHASE 2 - POINT 6) ====================
  {
    id: "rath-yatra-puri",
    nameHi: "श्री जगन्नाथ रथ यात्रा (पुरी महामहोत्सव)",
    nameEn: "Jagannath Rath Yatra",
    category: "mahaparv",
    regionScope: "east_odisha",
    masaIndex: 3,
    // Ashadha
    masaConvention: "AMANTA",
    paksha: "शुक्ल",
    tithiNumber: 2,
    kaal: "SUNRISE",
    priority: 103,
    skipAdhikaMasa: true,
    deityHi: "महाप्रभु श्री जगन्नाथ, बलभद्र एवं देवी सुभद्रा",
    mantraSa: "ॐ नमो भगवते वासुदेवाय॥ नीलाचलनिवासाय नित्याय परमात्मने॥",
    mantraMeaningHi: "नीलाचल निवासी भगवान श्री जगन्नाथ, बलभद्र व देवी सुभद्रा को कोटि-कोटि नमन।",
    descriptionHi: "आषाढ़ शुक्ल द्वितीया को श्री जगन्नाथ पुरी में महाप्रभु जगन्नाथ, बलभद्र व सुभद्रा जी की विश्व-प्रसिद्ध रथ यात्रा निकाली जाती है।",
    pujaHintHi: "प्रातः भगवान जगन्नाथ जी को तुलसी दल व मालपुआ/खिचड़ी का भोग अर्पित कर कीर्तन करें।"
  },
  {
    id: "bestu-varas-gujarati-new-year",
    nameHi: "बेस्तु वरस (गुजराती नववर्ष — कार्तिकादि विक्रम संवत)",
    nameEn: "Bestu Varas (Gujarati New Year)",
    category: "mahaparv",
    regionScope: "west_gujarat",
    masaIndex: 7,
    // Kartik
    masaConvention: "AMANTA",
    paksha: "शुक्ल",
    tithiNumber: 1,
    kaal: "SUNRISE",
    priority: 105,
    skipAdhikaMasa: true,
    deityHi: "भगवान श्रीकृष्ण (श्रीनाथजी), श्री गणेश एवं माँ महालक्ष्मी",
    mantraSa: "ॐ श्री गणेशाय नमः॥ साल मुबारक — नूतन वर्ष मंगलमयं भवतु॥",
    mantraMeaningHi: "कार्तिकादि गुजराती नववर्ष (बेस्तु वरस) समस्त परिवार के लिए सुख-समृद्धिदायक हो।",
    descriptionHi: "गुजरात की कार्तिकादि विक्रम संवत परंपरा के अनुसार कार्तिक शुक्ल प्रतिपदा को नया विक्रम संवत (बेस्तु वरस) एवं अन्नकूट महापर्व मनाया जाता है।",
    pujaHintHi: "प्रातः देव-दर्शन, नूतन बही-खाता/चोपड़ा पूजन एवं बड़ों का आशीर्वाद लेकर नववर्ष आरंभ करें।"
  },
  {
    id: "gudi-padwa-maharashtra",
    nameHi: "गुड़ी पड़वा (मराठी नववर्ष — चैत्र शुक्ल प्रतिपदा)",
    nameEn: "Gudi Padwa (Marathi New Year)",
    category: "mahaparv",
    regionScope: "west_maharashtra",
    masaIndex: 0,
    // Chaitra
    masaConvention: "AMANTA",
    paksha: "शुक्ल",
    tithiNumber: 1,
    kaal: "SUNRISE",
    priority: 105,
    skipAdhikaMasa: true,
    deityHi: "सृष्टिकर्ता ब्रह्मा जी, श्री विष्णु एवं विजय-ध्वज (गुड़ी)",
    mantraSa: "ॐ ब्रह्मणे नमः॥ ब्रह्मध्वज नमस्तेऽस्तु सर्वाभीष्टफलप्रद॥",
    mantraMeaningHi: "विजय व मंगल के प्रतीक ब्रह्मध्वज (गुड़ी) को प्रणाम, नववर्ष मंगलमय हो।",
    descriptionHi: "महाराष्ट्र व गोवा में चैत्र शुक्ल प्रतिपदा को विजय-ध्वज (गुड़ी) फहराकर शालिवाहन शक नववर्ष महापर्व अत्यंत हर्षोल्लास से मनाया जाता है।",
    pujaHintHi: "सूर्योदय के पश्चात घर के द्वार पर गुड़ी सजाकर पूजन करें एवं नीम-गुड़ का प्रसाद ग्रहण करें।"
  }
];
for (const r of FESTIVAL_RULES_DB) {
  if (r.id === "vasant-panchami") {
    r.kaal = "MADHYAHNA";
  }
}
function findTithiIntervalByWithinPaksha(intervals, withinPaksha, isShukla) {
  return intervals.find(
    (iv) => iv.withinPaksha === withinPaksha && (isShukla ? iv.tithiIndex <= 15 : iv.tithiIndex > 15)
  );
}
function getOverlapDurationMs(aStart, aEnd, bStart, bEnd) {
  return Math.max(0, Math.min(aEnd, bEnd) - Math.max(aStart, bStart));
}
function formatParanaWindow(ekadashiEndMs, paranaDay, timeZone) {
  const dwadashiInterval = paranaDay.tithiIntervals.find((iv) => iv.withinPaksha === 12);
  const sunriseMs = paranaDay.sunriseTimestamp;
  const sunsetMs = paranaDay.sunsetTimestamp;
  const dinamanaMs = sunsetMs - sunriseMs;
  const [, mStr, dStr] = paranaDay.dateKey.split("-");
  const dayNum = parseInt(dStr, 10);
  const monthIdx = parseInt(mStr, 10) - 1;
  const monthNames = ["जनवरी", "फरवरी", "मार्च", "अप्रैल", "मई", "जून", "जुलाई", "अगस्त", "सितंबर", "अक्टूबर", "नवंबर", "दिसंबर"];
  if (!dwadashiInterval || dwadashiInterval.endTimestamp <= sunriseMs + 6e4) {
    const quickEndMs = Math.min(sunsetMs, sunriseMs + 2 * 36e5);
    const timeRange2 = formatWindowRangeInZoneHi(sunriseMs, quickEndMs, timeZone, paranaDay.dateKey);
    return `पारण (${dayNum} ${monthNames[monthIdx] || ""}): ${timeRange2} (द्वादशी क्षय — सूर्योदय उपरांत शीघ्र पारण)`;
  }
  const dwadashiStartMs = Math.min(ekadashiEndMs, dwadashiInterval.startTimestamp);
  const dwadashiEndMs = dwadashiInterval.endTimestamp;
  const dwadashiDurationMs = Math.max(0, dwadashiEndMs - dwadashiStartMs);
  const harivasaraEndMs = dwadashiStartMs + 0.25 * dwadashiDurationMs;
  const pratahCutoffMs = sunriseMs + 0.4 * dinamanaMs;
  const madhyahnaEndMs = sunriseMs + 0.6 * dinamanaMs;
  const harivasaraEndsAfterSunrise = harivasaraEndMs > sunriseMs + 6e4;
  let paranaStartMs = Math.max(sunriseMs, harivasaraEndMs);
  let paranaEndMs;
  let noteSuffix = "";
  if (paranaStartMs >= dwadashiEndMs - 6e4) {
    paranaStartMs = sunriseMs;
    paranaEndMs = Math.max(sunriseMs + 15 * 6e4, Math.min(dwadashiEndMs, pratahCutoffMs));
  } else if (paranaStartMs >= pratahCutoffMs && paranaStartMs < madhyahnaEndMs && dwadashiEndMs > madhyahnaEndMs + 15 * 6e4) {
    paranaStartMs = madhyahnaEndMs;
    paranaEndMs = Math.min(dwadashiEndMs, sunsetMs);
    noteSuffix = harivasaraEndsAfterSunrise ? " (हरिवासर समाप्ति पश्चात — मध्याह्न त्याग, अपराह्न पारण)" : " (मध्याह्न त्याग — अपराह्न पारण)";
  } else if (paranaStartMs < pratahCutoffMs) {
    paranaEndMs = Math.min(dwadashiEndMs, pratahCutoffMs);
    if (harivasaraEndsAfterSunrise) {
      noteSuffix = " (हरिवासर समाप्ति पश्चात)";
    }
  } else {
    paranaEndMs = Math.min(dwadashiEndMs, Math.min(sunsetMs, paranaStartMs + 2.5 * 36e5));
    if (harivasaraEndsAfterSunrise) {
      noteSuffix = " (हरिवासर समाप्ति पश्चात — मध्याह्न त्याग, अपराह्न पारण)";
    }
  }
  if (paranaEndMs > dwadashiEndMs) {
    paranaEndMs = dwadashiEndMs;
  }
  if (paranaEndMs <= paranaStartMs + 6e4) {
    paranaStartMs = Math.max(sunriseMs, dwadashiEndMs - 30 * 6e4);
    paranaEndMs = dwadashiEndMs;
  }
  const timeRange = formatWindowRangeInZoneHi(paranaStartMs, paranaEndMs, timeZone, paranaDay.dateKey);
  return `पारण (${dayNum} ${monthNames[monthIdx] || ""}): ${timeRange}${noteSuffix}`;
}
function enrichEkadashiNames(record, isShukla, sampradaya, baseRule) {
  if (record.lunarMasa.isAdhikaMasa) {
    return {
      nameHi: baseRule.nameHi,
      nameEn: baseRule.nameEn
    };
  }
  const idx = isShukla ? record.lunarMasa.amantaMasaIndex : record.lunarMasa.purnimantaMasaIndex;
  const lookup = isShukla ? SHUKLA_EKADASHI_NAMES[idx] : KRISHNA_EKADASHI_NAMES_PURNIMANTA[idx];
  const baseHi = lookup?.hi || baseRule.nameHi;
  const baseEn = lookup?.en || baseRule.nameEn;
  const nameHi = sampradaya === "VAISHNAVA" ? /\)\s*$/u.test(baseHi) ? baseHi.replace(/\)\s*$/u, " • वैष्णव)") : `${baseHi} (वैष्णव)` : baseHi;
  const nameEn = sampradaya === "VAISHNAVA" ? /\)\s*$/u.test(baseEn) ? baseEn.replace(/\)\s*$/u, " • Vaishnava)") : `${baseEn} (Vaishnava)` : baseEn;
  return { nameHi, nameEn };
}
function resolvePradoshPrefix(weekdayIndex) {
  if (weekdayIndex === 1) return "सोम प्रदोष व्रत";
  if (weekdayIndex === 2) return "भौम प्रदोष व्रत";
  if (weekdayIndex === 6) return "शनि प्रदोष व्रत";
  return "प्रदोष व्रत";
}
function resolveFestivalsForSpan(records, location, config) {
  const timeZone = resolveSafeTimezone(location);
  const byDate = /* @__PURE__ */ new Map();
  const diagnostics = [];
  let deduplicatedCount = 0;
  for (const r of records) {
    byDate.set(r.dateKey, []);
  }
  const pushOccurrence = (occ) => {
    const list = byDate.get(occ.localDate);
    if (!list) return;
    if (list.some((existing) => existing.festivalId === occ.festivalId)) {
      deduplicatedCount += 1;
      return;
    }
    list.push(occ);
  };
  for (const r of records) {
    for (const ing of r.solarIngressesOnDay) {
      const isMakar = ing.rashiIndex === 9;
      pushOccurrence({
        festivalId: `sankranti-${ing.rashiIndex}`,
        nameHi: ing.sankrantiNameHi,
        nameEn: ing.sankrantiNameEn,
        category: isMakar ? "mahaparv" : "vrat",
        regionScope: "pan_india",
        localDate: r.dateKey,
        tradition: config.tradition,
        sampradaya: config.sampradaya,
        kaalApplied: "SOLAR_INGRESS",
        priority: isMakar ? 100 : 88,
        isMonthlyRecurring: false,
        isMultiDaySeries: false,
        vratNoteHi: `संक्रांति समय: ${ing.ingressFormattedHi} • पुण्यकाल: ${ing.punyaKaalWindow.labelHi}`,
        deityHi: "प्रत्यक्ष देवता भगवान सूर्य नारायण (आदित्य देव)",
        mantraSa: "ॐ घृणि सूर्याय आदित्यमूर्तये नमः॥ जपाकुसुमसंकाशं काश्यपेयं महाद्युतिम्॥",
        mantraMeaningHi: "समस्त अंधकार व रोगों का हरण करने वाले भगवान सूर्य नारायण को नमन।",
        descriptionHi: `${ing.sankrantiNameHi} — सूर्य देव के राशि संक्रमण (${ing.ingressFormattedHi}) पर पुण्यकाल (${ing.punyaKaalWindow.labelHi}) में स्नान, सूर्य अर्घ्य व तिल-गुड़ दान का सहस्र गुना अक्षय पुण्य है।`,
        pujaHintHi: `पुण्यकाल (${ing.punyaKaalWindow.labelHi}) में पवित्र स्नान कर तांबे के लोटे से सूर्य को अर्घ्य दें एवं आदित्य हृदय स्तोत्र का पाठ करें।`,
        overlapMinutes: 384
      });
    }
  }
  const activeRegionScope = getPrimaryRegionScopeForLocation(location);
  const recordByDateKey = /* @__PURE__ */ new Map();
  for (const r of records) recordByDateKey.set(r.dateKey, r);
  const yearsInSpan = Array.from(
    new Set(records.map((r) => parseInt(r.dateKey.slice(0, 4), 10)))
  );
  const shiftKey = (dateKey, deltaDays) => {
    const [yy, mm, dd] = dateKey.split("-").map((n) => parseInt(n, 10));
    const shifted = shiftCivilDate(yy, mm, dd, deltaDays);
    return formatDateKey(shifted.year, shifted.month, shifted.day);
  };
  if (activeRegionScope === "south_tamil") {
    for (const yr of yearsInSpan) {
      const approxMakar = Date.UTC(yr, 0, 14, 12, 0, 0);
      const makarMs = findExactSankrantiTimestamp(approxMakar, 9, config.ayanamsha);
      const thaiDay1 = resolveRegionalSolarMonthDay1(makarMs, "tamil", location);
      const pongalSeries = [
        {
          offset: -1,
          id: "pongal-bhogi",
          day: 1,
          nameHi: "भोगी पोंगल (पोंगल महापर्व दिवस 1/4)",
          nameEn: "Bhogi Pongal",
          priority: 98,
          deityHi: "देवराज इंद्र एवं अग्नि देव",
          descHi: "चार दिवसीय तमिल पोंगल पर्व का प्रथम दिन — प्राचीन वस्तुओं के त्याग व नव-सृजन का उत्सव।",
          hintHi: "प्रातः घर की स्वच्छता कर अग्नि व इंद्र देव की आराधना करें।"
        },
        {
          offset: 0,
          id: "pongal-thai",
          day: 2,
          nameHi: "थाई पोंगल / सूर्य पोंगल (1 थाई • पोंगल दिवस 2/4)",
          nameEn: "Thai Pongal",
          priority: 106,
          deityHi: "प्रत्यक्ष देवता भगवान सूर्य नारायण",
          descHi: "तमिल थाई मास के प्रथम दिन नवधान्य व गुड़-दूध से पोंगल पकाकर भगवान सूर्य देव को अर्पित करने का महान फसलोत्सव।",
          hintHi: "सूर्योदय के उपरांत प्रांगण में पोंगल अर्पित कर सूर्य देव को धन्यवाद दें।"
        },
        {
          offset: 1,
          id: "pongal-mattu",
          day: 3,
          nameHi: "मट्टू पोंगल (पोंगल दिवस 3/4 — गोवंश पूजन)",
          nameEn: "Mattu Pongal",
          priority: 98,
          deityHi: "नंदी महाराज एवं गौ माता",
          descHi: "कृषि में सहायक गौ-माता व बैलों के श्रृंगार, पूजन व आभार का पावन पर्व।",
          hintHi: "गौ-माता को हल्दी-कुमकुम, पुष्पमाला व मीठा पोंगल खिलाकर पूजन करें।"
        },
        {
          offset: 2,
          id: "pongal-kaanum",
          day: 4,
          nameHi: "कानुम पोंगल (पोंगल दिवस 4/4)",
          nameEn: "Kaanum Pongal",
          priority: 96,
          deityHi: "भगवान सूर्य नारायण एवं कुलदेवता",
          descHi: "पोंगल का चतुर्थ दिन — परिवारजनों से मिलन, बड़ों का आशीर्वाद एवं पक्षियों को अन्न समर्पण।",
          hintHi: "हल्दी के पत्ते पर अन्न रखकर सपरिवार मंगल कामना करें।"
        }
      ];
      for (const p of pongalSeries) {
        const dk = shiftKey(thaiDay1.dateKey, p.offset);
        if (!recordByDateKey.has(dk)) continue;
        pushOccurrence({
          festivalId: p.id,
          nameHi: p.nameHi,
          nameEn: p.nameEn,
          category: "mahaparv",
          regionScope: "south_tamil",
          localDate: dk,
          tradition: config.tradition,
          sampradaya: config.sampradaya,
          kaalApplied: "SOLAR_INGRESS",
          priority: p.priority,
          isMonthlyRecurring: false,
          isMultiDaySeries: true,
          seriesId: "tamil-pongal",
          seriesDay: p.day,
          seriesTotalDays: 4,
          deityHi: p.deityHi,
          mantraSa: "ॐ घृणि सूर्याय नमः॥",
          mantraMeaningHi: "भगवान सूर्य नारायण समस्त जगत को अन्न, आरोग्य व समृद्धि प्रदान करें।",
          descriptionHi: p.descHi,
          pujaHintHi: p.hintHi,
          overlapMinutes: 720
        });
      }
    }
    const thaiPusamYears = /* @__PURE__ */ new Set();
    const karthigaiYears = /* @__PURE__ */ new Set();
    for (const r of records) {
      const sunRashi = Math.floor(r.sunSiderealDegAtSunrise / 30) % 12;
      const yr = parseInt(r.dateKey.slice(0, 4), 10);
      if (sunRashi === 9 && !thaiPusamYears.has(yr)) {
        const hasPushya = r.nakshatraIntervals.some((n) => n.index === 7);
        const nearPurnima = r.tithiIntervals.some((t) => t.tithiIndex >= 14 && t.tithiIndex <= 16);
        if (hasPushya && nearPurnima) {
          thaiPusamYears.add(yr);
          pushOccurrence({
            festivalId: "thai-pusam",
            nameHi: "थाई पूसम (भगवान मुरुगन महापर्व)",
            nameEn: "Thai Pusam",
            category: "mahaparv",
            regionScope: "south_tamil",
            localDate: r.dateKey,
            tradition: config.tradition,
            sampradaya: config.sampradaya,
            kaalApplied: "SUNRISE",
            priority: 103,
            isMonthlyRecurring: false,
            isMultiDaySeries: false,
            deityHi: "भगवान कार्तिकेय (श्री मुरुगन / सुब्रह्मण्यम स्वामी)",
            mantraSa: "ॐ शारवणभवाय नमः॥",
            mantraMeaningHi: "वेलधारी भगवान श्री मुरुगन समस्त बाधाओं का नाश कर विजय प्रदान करें।",
            descriptionHi: "तमिल थाई मास की पूर्णिमा व पुष्य नक्षत्र के पावन संयोग पर भगवान मुरुगन को समर्पित थाई पूसम महापर्व मनाया जाता है।",
            pujaHintHi: "भगवान कार्तिकेय का अभिषेक करें एवं स्कंद षष्ठी कवच का पाठ करें।",
            overlapMinutes: 600
          });
        }
      }
      if (sunRashi === 7 && !karthigaiYears.has(yr)) {
        const pradoshWin = r.kaalWindows.PRADOSH;
        const krittikaInPradosh = r.nakshatraIntervals.some(
          (n) => n.index === 2 && getOverlapDurationMs(
            n.startTimestamp,
            n.endTimestamp,
            pradoshWin.startTimestamp,
            pradoshWin.endTimestamp
          ) > 0
        );
        const nearPurnima = r.tithiIntervals.some((t) => t.tithiIndex >= 13 && t.tithiIndex <= 16);
        if (krittikaInPradosh && nearPurnima) {
          karthigaiYears.add(yr);
          pushOccurrence({
            festivalId: "karthigai-deepam",
            nameHi: "कार्तिगै दीपम (तिरुवन्नामलाई महादीपम)",
            nameEn: "Karthigai Deepam",
            category: "mahaparv",
            regionScope: "south_tamil",
            localDate: r.dateKey,
            tradition: config.tradition,
            sampradaya: config.sampradaya,
            kaalApplied: "PRADOSH",
            priority: 104,
            isMonthlyRecurring: false,
            isMultiDaySeries: false,
            deityHi: "भगवान अरुणाचलेश्वर (शिव) एवं श्री मुरुगन",
            mantraSa: "ॐ नमः शिवाय॥ अरुणाचल शिवाय नमः॥",
            mantraMeaningHi: "ज्योतिर्मय अरुणाचलेश्वर भगवान शिव समस्त अंधकार का नाश करें।",
            descriptionHi: "तमिल कार्तिगै मास में प्रदोष काल में कृत्तिका नक्षत्र के संयोग पर दीपों का महान उत्सव कार्तिगै दीपम मनाया जाता है।",
            pujaHintHi: "प्रदोष काल (सूर्यास्त के उपरांत) घर व मंदिर में तिल के तेल के दीपक प्रज्वलित करें।",
            overlapMinutes: 144
          });
        }
      }
    }
  }
  if (activeRegionScope === "south_kerala") {
    for (const yr of yearsInSpan) {
      const approxMesha = Date.UTC(yr, 3, 14, 12, 0, 0);
      const meshaMs = findExactSankrantiTimestamp(approxMesha, 0, config.ayanamsha);
      const medamDay1 = resolveRegionalSolarMonthDay1(meshaMs, "kerala", location);
      if (recordByDateKey.has(medamDay1.dateKey)) {
        pushOccurrence({
          festivalId: "vishu-kerala",
          nameHi: "विषु महापर्व (मलयालम नववर्ष — 1 मेड़म)",
          nameEn: "Vishu",
          category: "mahaparv",
          regionScope: "south_kerala",
          localDate: medamDay1.dateKey,
          tradition: config.tradition,
          sampradaya: config.sampradaya,
          kaalApplied: "SOLAR_INGRESS",
          priority: 106,
          isMonthlyRecurring: false,
          isMultiDaySeries: false,
          deityHi: "भगवान श्रीकृष्ण (गुरुवायुरप्पन) एवं भगवान विष्णु",
          mantraSa: "ॐ नमो नारायणाय॥ मंगलं भगवान् विष्णुः मंगलं गरुडध्वजः॥",
          mantraMeaningHi: "मेड़म संक्रांति (विषु) पर भगवान श्रीकृष्ण का विशुकणी दर्शन वर्षभर मंगल प्रदान करे।",
          descriptionHi: "केरल के कोल्लम सौर पंचांग के अनुसार मेड़म मास के प्रथम दिन विशुकणी दर्शन एवं विषु महापर्व मनाया जाता है।",
          pujaHintHi: "ब्रह्म मुहूर्त में विशुकणी (स्वर्ण, चावल, कणिकोन्ना पुष्प व श्रीकृष्ण विग्रह) का दर्शन करें।",
          overlapMinutes: 720
        });
      }
    }
    const onamYears = /* @__PURE__ */ new Set();
    for (const r of records) {
      const sunRashi = Math.floor(r.sunSiderealDegAtSunrise / 30) % 12;
      const yr = parseInt(r.dateKey.slice(0, 4), 10);
      if (sunRashi === 4 && !onamYears.has(yr)) {
        const aparahnaWin = r.kaalWindows.APARAHNA;
        const hasThiruvonam = r.nakshatraIntervals.some(
          (n) => n.index === 21 && getOverlapDurationMs(
            n.startTimestamp,
            n.endTimestamp,
            r.sunriseTimestamp,
            aparahnaWin.endTimestamp
          ) > 0
        );
        if (hasThiruvonam) {
          onamYears.add(yr);
          pushOccurrence({
            festivalId: "onam-thiruvonam",
            nameHi: "ओणम / तिरुवोणम महापर्व (चिंगम श्रवण नक्षत्र)",
            nameEn: "Onam (Thiruvonam)",
            category: "mahaparv",
            regionScope: "south_kerala",
            localDate: r.dateKey,
            tradition: config.tradition,
            sampradaya: config.sampradaya,
            kaalApplied: "APARAHNA",
            priority: 106,
            isMonthlyRecurring: false,
            isMultiDaySeries: false,
            deityHi: "भगवान वामन (श्री महाविष्णु) एवं राजा महाबली",
            mantraSa: "ॐ नमो भगवते वासुदेवाय॥",
            mantraMeaningHi: "भगवान वामन व महाबली की कृपा से समस्त जनमानस में समृद्धि व सद्भाव बना रहे।",
            descriptionHi: "मलयालम चिंगम (सिंह) मास में श्रवण (तिरुवोणम) नक्षत्र के संयोग पर केरल का सर्वोच्च राज्य महापर्व ओणम मनाया जाता है।",
            pujaHintHi: "प्रातः पूक्कलम (पुष्प रंगोली), वामन पूजन एवं पारंपरिक ओणसद्य अर्पित करें।",
            overlapMinutes: 480
          });
        }
      }
    }
  }
  if (activeRegionScope === "east_assam") {
    for (const yr of yearsInSpan) {
      const meshaMs = findExactSankrantiTimestamp(Date.UTC(yr, 3, 14, 12, 0, 0), 0, config.ayanamsha);
      const bohagDay1 = resolveRegionalSolarMonthDay1(meshaMs, "assamese", location);
      if (recordByDateKey.has(bohagDay1.dateKey)) {
        pushOccurrence({
          festivalId: "bohag-bihu",
          nameHi: "बोहाग बिहू / रोंगाली बिहू (असमिया नववर्ष — 1 बोहाग)",
          nameEn: "Bohag Bihu (Rongali Bihu)",
          category: "mahaparv",
          regionScope: "east_assam",
          localDate: bohagDay1.dateKey,
          tradition: config.tradition,
          sampradaya: config.sampradaya,
          kaalApplied: "SOLAR_INGRESS",
          priority: 106,
          isMonthlyRecurring: false,
          isMultiDaySeries: false,
          deityHi: "माँ कामाख्या एवं भगवान सूर्य नारायण",
          mantraSa: "ॐ ऐं ह्रीं क्लीं कामाख्यायै नमः॥",
          mantraMeaningHi: "नूतन असमिया सौर वर्ष (बोहाग बिहू) सुख, समृद्धि एवं नव-उत्साह से परिपूर्ण हो।",
          descriptionHi: "मेष संक्रांति के अगले दिन 1 बोहाग को असम का प्रमुख नववर्ष महापर्व बोहाग (रोंगाली) बिहू मनाया जाता है।",
          pujaHintHi: "प्रातः नामघर व देवालय में दीप प्रज्वलित कर बड़ों का आशीर्वाद लें।",
          overlapMinutes: 720
        });
      }
      const makarMs = findExactSankrantiTimestamp(Date.UTC(yr, 0, 14, 12, 0, 0), 9, config.ayanamsha);
      const maghDay1 = resolveRegionalSolarMonthDay1(makarMs, "assamese", location);
      if (recordByDateKey.has(maghDay1.dateKey)) {
        pushOccurrence({
          festivalId: "magh-bihu",
          nameHi: "माघ बिहू / भोगाली बिहू (1 माघ)",
          nameEn: "Magh Bihu (Bhogali Bihu)",
          category: "mahaparv",
          regionScope: "east_assam",
          localDate: maghDay1.dateKey,
          tradition: config.tradition,
          sampradaya: config.sampradaya,
          kaalApplied: "SOLAR_INGRESS",
          priority: 105,
          isMonthlyRecurring: false,
          isMultiDaySeries: false,
          deityHi: "अग्नि देव एवं भगवान सूर्य नारायण",
          mantraSa: "ॐ अग्नये स्वाहा॥ ॐ घृणि सूर्याय नमः॥",
          mantraMeaningHi: "नवधान्य व अग्नि देव की कृपा से घर में सदा अन्न-धन की समृद्धि बनी रहे।",
          descriptionHi: "मकर संक्रांति के उपरांत 1 माघ को प्रातः मेजी प्रज्वलित कर फसल-कटाई का उत्सव भोगाली (माघ) बिहू मनाया जाता है।",
          pujaHintHi: "प्रातः स्नान कर मेजी पूजन करें एवं तिल-पीठा का प्रसाद वितरित करें।",
          overlapMinutes: 720
        });
      }
      const tulaMs = findExactSankrantiTimestamp(Date.UTC(yr, 9, 17, 12, 0, 0), 6, config.ayanamsha);
      const tulaParts = getLocalDateParts(tulaMs, timeZone);
      if (recordByDateKey.has(tulaParts.dateKey)) {
        pushOccurrence({
          festivalId: "kati-bihu",
          nameHi: "काति बिहू / कोंगाली बिहू (तुला संक्रांति)",
          nameEn: "Kati Bihu (Kongali Bihu)",
          category: "mahaparv",
          regionScope: "east_assam",
          localDate: tulaParts.dateKey,
          tradition: config.tradition,
          sampradaya: config.sampradaya,
          kaalApplied: "SOLAR_INGRESS",
          priority: 102,
          isMonthlyRecurring: false,
          isMultiDaySeries: false,
          deityHi: "माँ तुलसी एवं लक्ष्मी माता",
          mantraSa: "ॐ श्री तुलस्यै नमः॥",
          mantraMeaningHi: "तुलसी व आकाशदीप के प्रकाश से धन-धान्य की रक्षा व समृद्धि हो।",
          descriptionHi: "तुला संक्रांति (आहिन मास के अंतिम दिन) को असम में तुलसी पूजन व खेतों में आकाशदीप प्रज्वलित कर काति बिहू मनाया जाता है।",
          pujaHintHi: "सायंकाल तुलसी चौरे व धान के खेतों में सरसों के तेल का दीपक जलाएं।",
          overlapMinutes: 480
        });
      }
    }
    for (const r of records) {
      const sunAtStart = getSiderealSunLonDeg(r.sunriseTimestamp, config.ayanamsha);
      const sunAtEnd = getSiderealSunLonDeg(r.nextSunriseTimestamp, config.ayanamsha);
      const ardraStartDeg = 66 + 2 / 3;
      if (sunAtStart < ardraStartDeg && sunAtEnd >= ardraStartDeg) {
        pushOccurrence({
          festivalId: "ambubachi-mela",
          nameHi: "अंबुबाची प्रवृत्ति (सूर्य आर्द्रा नक्षत्र प्रवेश — कामाख्या)",
          nameEn: "Ambubachi Mela Start",
          category: "mahaparv",
          regionScope: "east_assam",
          localDate: r.dateKey,
          tradition: config.tradition,
          sampradaya: config.sampradaya,
          kaalApplied: "SOLAR_INGRESS",
          priority: 103,
          isMonthlyRecurring: false,
          isMultiDaySeries: false,
          deityHi: "माँ कामाख्या देवी (नीलाचल शक्तिपीठ)",
          mantraSa: "ॐ ऐं ह्रीं क्लीं कामाख्यायै नमः॥",
          mantraMeaningHi: "आदिशक्ति माँ कामाख्या समस्त सृष्टि का कल्याण करें।",
          descriptionHi: "सूर्य देव के मिथुन राशि अंतर्गत आर्द्रा नक्षत्र (66°40′) में प्रवेश करते ही गुवाहाटी के कामाख्या शक्तिपीठ में चार दिवसीय अंबुबाची पर्व प्रारंभ होता है।",
          pujaHintHi: "अंबुबाची काल में भूमि खनन व कृषि कार्य वर्जित होते हैं; मानस मंत्र जप श्रेष्ठ है।",
          overlapMinutes: 720
        });
      }
    }
  }
  if (activeRegionScope === "east_bengal") {
    for (const yr of yearsInSpan) {
      const meshaMs = findExactSankrantiTimestamp(Date.UTC(yr, 3, 14, 12, 0, 0), 0, config.ayanamsha);
      const boishakhDay1 = resolveRegionalSolarMonthDay1(meshaMs, "bengali", location);
      if (recordByDateKey.has(boishakhDay1.dateKey)) {
        pushOccurrence({
          festivalId: "pohela-boishakh",
          nameHi: "पोइला बैशाख (शुभो नबोबर्षो — बंगाली नववर्ष 1 बैशाख)",
          nameEn: "Pohela Boishakh (Bengali New Year)",
          category: "mahaparv",
          regionScope: "east_bengal",
          localDate: boishakhDay1.dateKey,
          tradition: config.tradition,
          sampradaya: config.sampradaya,
          kaalApplied: "SOLAR_INGRESS",
          priority: 106,
          isMonthlyRecurring: false,
          isMultiDaySeries: false,
          deityHi: "श्री गणेश जी एवं माँ महालक्ष्मी",
          mantraSa: "ॐ श्री गणेशाय नमः॥ शुभो नबोबर्षो — सर्वमंगलं भवतु॥",
          mantraMeaningHi: "बंगाली नववर्ष (पोइला बैशाख) समस्त जनों के लिए सुख, शांति व समृद्धि लाए।",
          descriptionHi: "बंगाली सौर पंचांग के अर्धरात्रि संक्रांति नियम के अनुसार 1 बैशाख को पोइला बैशाख व हाल-खाता पूजन का महापर्व मनाया जाता है।",
          pujaHintHi: "प्रातः गणेश-लक्ष्मी पूजन एवं नवीन बही-खाता (हाल-खाता) का शुभारंभ करें।",
          overlapMinutes: 720
        });
      }
    }
    for (const r of records) {
      if (r.lunarMasa.isAdhikaMasa) continue;
      if (r.lunarMasa.amantaMasaIndex !== 6) continue;
      const ashtami = r.tithiIntervals.find((t) => t.tithiIndex === 8);
      if (!ashtami) continue;
      const junctionMs = ashtami.endTimestamp;
      if (junctionMs < r.sunriseTimestamp || junctionMs >= r.nextSunriseTimestamp) continue;
      const sandhiStartMs = junctionMs - 24 * 6e4;
      const sandhiEndMs = junctionMs + 24 * 6e4;
      const sandhiWindowHi = formatWindowRangeInZoneHi(sandhiStartMs, sandhiEndMs, timeZone, r.dateKey);
      pushOccurrence({
        festivalId: "durga-sandhi-puja",
        nameHi: "दुर्गा संधि पूजा (अष्टमी-नवमी 48 मिनट महासंयोग)",
        nameEn: "Durga Puja Sandhi Puja",
        category: "mahaparv",
        regionScope: "east_bengal",
        localDate: r.dateKey,
        tradition: config.tradition,
        sampradaya: config.sampradaya,
        kaalApplied: "SUNRISE",
        priority: 106,
        isMonthlyRecurring: false,
        isMultiDaySeries: false,
        vratNoteHi: `संधि पूजा मुहूर्त (48 मिनट): ${sandhiWindowHi}`,
        deityHi: "माँ चामुण्डा (महादुर्गा)",
        mantraSa: "ॐ ऐं ह्रीं क्लीं चामुण्डायै विच्चे॥",
        mantraMeaningHi: "अष्टमी व नवमी की पावन संधि में माँ चामुण्डा की आराधना समस्त विघ्नों का नाश करती है।",
        descriptionHi: `आश्विन शुक्ल अष्टमी के अंतिम 24 मिनट एवं नवमी के प्रथम 24 मिनट का दुर्लभ 48 मिनट संधि काल (${sandhiWindowHi}) दुर्गा पूजा का सर्वोच्च पूजन मुहूर्त है।`,
        pujaHintHi: `संधि पूजा मुहूर्त (${sandhiWindowHi}) में 108 कमल पुष्प व 108 दीप प्रज्वलित कर माँ चामुण्डा की आरती करें।`,
        overlapMinutes: 48
      });
    }
  }
  if (activeRegionScope === "east_odisha") {
    for (const yr of yearsInSpan) {
      const mithunaMs = findExactSankrantiTimestamp(Date.UTC(yr, 5, 15, 12, 0, 0), 2, config.ayanamsha);
      const ashadhaDay1 = resolveRegionalSolarMonthDay1(mithunaMs, "odia", location);
      const rajaSeries = [
        {
          offset: -1,
          id: "raja-parba-1",
          day: 1,
          nameHi: "पहिली रज (रज पर्व दिवस 1/3 — ओडिशा)",
          nameEn: "Pahili Raja",
          priority: 101,
          descHi: "ओडिशा के तीन दिवसीय कृषि व धरती माता सम्मान महापर्व रज पर्व का प्रथम दिवस।"
        },
        {
          offset: 0,
          id: "raja-parba-2",
          day: 2,
          nameHi: "रज संक्रांति / मिथुन संक्रांति (रज पर्व दिवस 2/3)",
          nameEn: "Raja Sankranti",
          priority: 105,
          descHi: "मिथुन संक्रांति (1 आषाढ़) पर धरती माता (भूदेवी) के सम्मान व वर्षा ऋतु स्वागत का मुख्य रज पर्व।"
        },
        {
          offset: 1,
          id: "raja-parba-3",
          day: 3,
          nameHi: "भूदाह / बासी रज (रज पर्व दिवस 3/3)",
          nameEn: "Basi Raja",
          priority: 100,
          descHi: "तीन दिवसीय रज पर्व का तृतीय दिवस — इसके अगले दिन वसुमति स्नान संपन्न होता है।"
        }
      ];
      for (const rs of rajaSeries) {
        const dk = shiftKey(ashadhaDay1.dateKey, rs.offset);
        if (!recordByDateKey.has(dk)) continue;
        pushOccurrence({
          festivalId: rs.id,
          nameHi: rs.nameHi,
          nameEn: rs.nameEn,
          category: "mahaparv",
          regionScope: "east_odisha",
          localDate: dk,
          tradition: config.tradition,
          sampradaya: config.sampradaya,
          kaalApplied: "SOLAR_INGRESS",
          priority: rs.priority,
          isMonthlyRecurring: false,
          isMultiDaySeries: true,
          seriesId: "odia-raja-parba",
          seriesDay: rs.day,
          seriesTotalDays: 3,
          deityHi: "भूदेवी (धरती माता) एवं महाप्रभु श्री जगन्नाथ",
          mantraSa: "ॐ वसुन्धरायै नमः॥ समुद्रवसने देवि पर्वतस्तनमण्डले॥",
          mantraMeaningHi: "समस्त जगत को धारण करने वाली धरती माता को नमन।",
          descriptionHi: rs.descHi,
          pujaHintHi: "रज पर्व के तीनों दिन भूमि को विश्राम दें; पारंपरिक पोड़ पीठा का भोग लगाएं।",
          overlapMinutes: 720
        });
      }
    }
  }
  const ekadashiProcessedPakshas = /* @__PURE__ */ new Set();
  for (let i = 0; i < records.length - 1; i++) {
    const rec = records[i];
    const nextRec = records[i + 1];
    for (const isShukla of [true, false]) {
      const targetIdx = isShukla ? 11 : 26;
      const pakshaKey = `${Math.round(rec.lunarMasa.prevAmavasyaTimestamp / 864e5)}_${isShukla ? "S" : "K"}`;
      if (ekadashiProcessedPakshas.has(pakshaKey)) continue;
      const t11OnDay = findTithiIntervalByWithinPaksha(rec.tithiIntervals, 11, isShukla);
      if (!t11OnDay) continue;
      const udayaIdx = rec.udayaTithi.tithiIndex;
      const nextUdayaIdx = nextRec.udayaTithi.tithiIndex;
      const arunoTs = rec.kaalWindows.ARUNODAYA.referenceTimestamp;
      const arunoElong = getMoonSunElongationDeg(arunoTs);
      const arunoTithiIdx = Math.floor(arunoElong / 12) + 1;
      const prevDashamiTarget = isShukla ? 10 : 25;
      const isKshaya11 = t11OnDay.isKshaya;
      const isSunrise11 = udayaIdx === targetIdx;
      const isNextSunrise11 = nextUdayaIdx === targetIdx;
      const isDashamiViddhaAtArunodaya = isSunrise11 && arunoTithiIdx === prevDashamiTarget;
      if (!isSunrise11 && !isKshaya11) {
        continue;
      }
      ekadashiProcessedPakshas.add(pakshaKey);
      let chosenDayIndex = i;
      let vratNoteHi = "शुद्धा एकादशी (स्मार्त एवं वैष्णव दोनों मत से मान्य)";
      if (config.sampradaya === "VAISHNAVA") {
        if (isKshaya11 || isDashamiViddhaAtArunodaya || isNextSunrise11) {
          chosenDayIndex = i + 1;
          vratNoteHi = isDashamiViddhaAtArunodaya ? "वैष्णव एकादशी (पूर्व दिन अरुणोदय दशमी-विद्धा होने से द्वादशी-युता एकादशी मान्य)" : isNextSunrise11 ? "वैष्णव उन्मिलनी/द्वादशी-युता एकादशी (द्वितीय दिन व्रत)" : "वैष्णव एकादशी (क्षय तिथि विचार से द्वादशी-युता एकादशी)";
        }
      } else {
        if (isDashamiViddhaAtArunodaya) {
          chosenDayIndex = i + 1;
          vratNoteHi = "स्मार्त एवं वैष्णव सर्वमान्य एकादशी (पूर्व दिन अरुणोदय दशमी-विद्धा होने से अगले दिन द्वादशी-युता एकादशी मान्य)";
        } else {
          chosenDayIndex = i;
          if (isNextSunrise11) {
            vratNoteHi = "स्मार्त एकादशी (वृद्धि तिथि के प्रथम दिन व्रत; वैष्णव जन अगले दिन व्रत रखें)";
          } else if (isKshaya11) {
            vratNoteHi = "स्मार्त एकादशी (क्षय तिथि विचार से प्रथम दिन मान्य; वैष्णव एकादशी अगले दिन)";
          }
        }
      }
      const fastRec = records[chosenDayIndex];
      const paranaRec = records[chosenDayIndex + 1];
      if (!fastRec) continue;
      const baseRuleId = fastRec.lunarMasa.isAdhikaMasa ? isShukla ? "padmini-ekadashi" : "parama-ekadashi" : isShukla ? "monthly-ekadashi-shukla" : "monthly-ekadashi-krishna";
      const baseRule = FESTIVAL_RULES_DB.find((r) => r.id === baseRuleId) || FESTIVAL_RULES_DB[0];
      const { nameHi, nameEn } = enrichEkadashiNames(fastRec, isShukla, config.sampradaya, baseRule);
      const paranaWindowTextHi = paranaRec ? formatParanaWindow(t11OnDay.endTimestamp, paranaRec, timeZone) : void 0;
      pushOccurrence({
        festivalId: baseRule.id,
        nameHi,
        nameEn,
        category: "ekadashi",
        localDate: fastRec.dateKey,
        tradition: config.tradition,
        sampradaya: config.sampradaya,
        kaalApplied: "SUNRISE",
        priority: baseRule.priority,
        isMonthlyRecurring: true,
        isMultiDaySeries: false,
        paranaWindowTextHi,
        vratNoteHi,
        deityHi: baseRule.deityHi,
        mantraSa: baseRule.mantraSa,
        mantraMeaningHi: baseRule.mantraMeaningHi,
        descriptionHi: `${nameHi} — ${vratNoteHi}${paranaWindowTextHi ? `। ${paranaWindowTextHi}` : ""}।`,
        pujaHintHi: baseRule.pujaHintHi,
        overlapMinutes: 720
      });
      diagnostics.push({
        dateKey: fastRec.dateKey,
        festivalId: baseRule.id,
        nameHi,
        kaalEvaluated: "ARUNODAYA",
        accepted: true,
        reason: vratNoteHi,
        sampradayaApplied: config.sampradaya,
        traditionApplied: config.tradition,
        arunodayaTithiIndex: arunoTithiIdx,
        sunriseTithiIndex: udayaIdx,
        isDashamiViddha: isDashamiViddhaAtArunodaya,
        paranaWindowHi: paranaWindowTextHi
      });
    }
  }
  const namedPurnimaLunations = /* @__PURE__ */ new Set();
  const namedAmavasyaLunations = /* @__PURE__ */ new Set();
  const namedShivaratriLunations = /* @__PURE__ */ new Set();
  for (const rule of FESTIVAL_RULES_DB) {
    if (rule.specialCondition === "EKADASHI_SMARTA_VAISHNAVA") continue;
    if (rule.tithiNumber === null) continue;
    if (!doesFestivalScopeMatchLocation(rule.regionScope, location)) continue;
    const candidates = [];
    for (let idx = 0; idx < records.length; idx++) {
      const rec = records[idx];
      if (rule.adhikaOnly && !rec.lunarMasa.isAdhikaMasa) continue;
      if (rule.skipAdhikaMasa && rec.lunarMasa.isAdhikaMasa) continue;
      const lunationBucket = String(Math.round(rec.lunarMasa.prevAmavasyaTimestamp / 864e5));
      if (rule.id === "monthly-purnima" && namedPurnimaLunations.has(lunationBucket)) continue;
      if (rule.id === "monthly-amavasya" && namedAmavasyaLunations.has(lunationBucket)) continue;
      if (rule.id === "monthly-masik-shivaratri" && namedShivaratriLunations.has(lunationBucket)) continue;
      const weekday = new Date(
        Date.UTC(
          parseInt(rec.dateKey.slice(0, 4), 10),
          parseInt(rec.dateKey.slice(5, 7), 10) - 1,
          parseInt(rec.dateKey.slice(8, 10), 10),
          12,
          0,
          0
        )
      ).getUTCDay();
      if (rule.specialCondition === "SUNDAY_SAPTAMI" && weekday !== 0) continue;
      const hasKshayaShuklaPratipadaOnDay = rule.paksha === "शुक्ल" && rule.tithiNumber === 1 && rec.tithiIntervals.some((t) => t.tithiIndex === 1 && t.isKshaya);
      const hasKshayaKrishnaPratipadaOnDay = rule.paksha === "कृष्ण" && rule.tithiNumber === 1 && rec.tithiIntervals.some((t) => t.tithiIndex === 16 && t.isKshaya);
      if (rule.masaIndex !== null) {
        const dayMasaIdx = rule.masaConvention === "AMANTA" ? rec.lunarMasa.amantaMasaIndex : rec.lunarMasa.purnimantaMasaIndex;
        let effectiveMasaIdx = dayMasaIdx;
        if (hasKshayaShuklaPratipadaOnDay && rec.udayaTithi.tithiIndex === 30) {
          effectiveMasaIdx = (rec.lunarMasa.amantaMasaIndex + 1) % 12;
        } else if (hasKshayaKrishnaPratipadaOnDay && rec.udayaTithi.tithiIndex === 15 && rule.masaConvention !== "AMANTA") {
          effectiveMasaIdx = (rec.lunarMasa.purnimantaMasaIndex + 1) % 12;
        }
        if (effectiveMasaIdx !== rule.masaIndex) continue;
      }
      const rawKaalWin = rec.kaalWindows[rule.kaal];
      const isIstIndiaCity = rec.location.timezone === "Asia/Kolkata" || Math.abs(rec.location.tzOffsetHours - 5.5) < 0.01 && String(rec.location.country || "India").toLowerCase() === "india";
      const istNishitaShiftMs = rule.kaal === "NISHITHA" && isIstIndiaCity ? (rec.location.lon - 82.5) * 4 * 6e4 : 0;
      const kaalWin = istNishitaShiftMs !== 0 ? {
        ...rawKaalWin,
        startTimestamp: rawKaalWin.startTimestamp + istNishitaShiftMs,
        endTimestamp: rawKaalWin.endTimestamp + istNishitaShiftMs,
        referenceTimestamp: rawKaalWin.referenceTimestamp + istNishitaShiftMs
      } : rawKaalWin;
      let matchedInterval;
      let overlapMs = 0;
      const isRakshaBandhan = rule.specialCondition === "RAKSHA_BANDHAN_UDAYA_BHADRA";
      const isHolikaDahan = rule.specialCondition === "HOLIKA_PRADOSH_BHADRA";
      for (const tiv of rec.tithiIntervals) {
        if (tiv.withinPaksha !== rule.tithiNumber) continue;
        if (rule.paksha !== "ANY" && tiv.pakshaShort !== rule.paksha) continue;
        if (isRakshaBandhan) {
          const dayOv = getOverlapDurationMs(
            tiv.startTimestamp,
            tiv.endTimestamp,
            rec.sunriseTimestamp,
            rec.sunsetTimestamp
          );
          const aparahnaOv = getOverlapDurationMs(
            tiv.startTimestamp,
            tiv.endTimestamp,
            kaalWin.startTimestamp,
            kaalWin.endTimestamp
          );
          if (dayOv > 6e4 && (tiv.isActiveAtSunrise || aparahnaOv > 6e4)) {
            matchedInterval = tiv;
            overlapMs = Math.max(dayOv, aparahnaOv);
            break;
          }
        } else if (rule.kaal === "SUNRISE") {
          if (tiv.isActiveAtSunrise || tiv.isKshaya) {
            matchedInterval = tiv;
            overlapMs = tiv.isActiveAtSunrise ? 720 * 6e4 : Math.max(60 * 6e4, tiv.endTimestamp - tiv.startTimestamp);
            break;
          }
        } else if (rule.kaal === "ARUNODAYA") {
          const arunoTs = rec.kaalWindows.ARUNODAYA.referenceTimestamp;
          const arunoTithi = Math.floor(getMoonSunElongationDeg(arunoTs) / 12) + 1;
          const arunoWithin = arunoTithi <= 15 ? arunoTithi : arunoTithi - 15;
          const arunoPaksha = arunoTithi <= 15 ? "शुक्ल" : "कृष्ण";
          if (arunoWithin === rule.tithiNumber && (rule.paksha === "ANY" || arunoPaksha === rule.paksha)) {
            matchedInterval = tiv;
            overlapMs = 96 * 6e4;
            break;
          }
        } else {
          const ov = getOverlapDurationMs(
            tiv.startTimestamp,
            tiv.endTimestamp,
            kaalWin.startTimestamp,
            kaalWin.endTimestamp
          );
          if (ov > 6e4 && ov > overlapMs) {
            matchedInterval = tiv;
            overlapMs = ov;
          }
        }
      }
      if (!matchedInterval || overlapMs <= 0) continue;
      let score = overlapMs / 6e4;
      const containsRef = matchedInterval.startTimestamp <= kaalWin.referenceTimestamp && kaalWin.referenceTimestamp <= matchedInterval.endTimestamp;
      if (containsRef) score += 1e3;
      if (rule.kaal === "SUNRISE") {
        score += rec.vriddhiTithi.isVriddhi && rec.vriddhiTithi.dayPosition === 2 ? -50 : 50;
      }
      const dayBhadraIntervals = isRakshaBandhan || isHolikaDahan ? (rec.karanaIntervals || []).filter(
        (k) => Boolean(k.nameHi && (k.nameHi.includes("विष्टि") || k.nameHi.includes("भद्रा")))
      ) : [];
      if (isRakshaBandhan) {
        const postSunrisePurnimaMs = matchedInterval.isActiveAtSunrise ? Math.max(0, Math.min(matchedInterval.endTimestamp, rec.sunsetTimestamp) - rec.sunriseTimestamp) : 0;
        if (matchedInterval.isActiveAtSunrise && postSunrisePurnimaMs >= 144 * 6e4) {
          score += 3500;
        } else if (matchedInterval.isActiveAtSunrise && postSunrisePurnimaMs >= 48 * 6e4) {
          score += 1800;
        }
        const bhadraAparahnaMs = dayBhadraIntervals.reduce(
          (acc, b) => acc + getOverlapDurationMs(
            b.startTimestamp,
            b.endTimestamp,
            kaalWin.startTimestamp,
            kaalWin.endTimestamp
          ),
          0
        );
        const bhadraDayPurnimaMs = dayBhadraIntervals.reduce(
          (acc, b) => acc + getOverlapDurationMs(
            b.startTimestamp,
            b.endTimestamp,
            Math.max(matchedInterval.startTimestamp, rec.sunriseTimestamp),
            Math.min(matchedInterval.endTimestamp, rec.sunsetTimestamp)
          ),
          0
        );
        if (!matchedInterval.isActiveAtSunrise && bhadraAparahnaMs >= 60 * 6e4) {
          score -= 2500;
        } else if (bhadraDayPurnimaMs > 0) {
          score -= Math.min(400, bhadraDayPurnimaMs / 6e4);
        }
      }
      if (isHolikaDahan) {
        let pradoshBhadraMukhaOverlapMs = 0;
        for (const b of dayBhadraIntervals) {
          const bDur = Math.max(1, b.endTimestamp - b.startTimestamp);
          const mukhaStart = b.startTimestamp + bDur * (7 / 12);
          const mukhaEnd = b.startTimestamp + bDur * (10 / 12);
          pradoshBhadraMukhaOverlapMs += getOverlapDurationMs(
            mukhaStart,
            mukhaEnd,
            kaalWin.startTimestamp,
            kaalWin.endTimestamp
          );
        }
        if (pradoshBhadraMukhaOverlapMs <= 6e4) {
          score += 1200;
        } else {
          score -= Math.min(900, pradoshBhadraMukhaOverlapMs / 6e4 * 8);
        }
      }
      if (rule.specialCondition === "DIWALI_PRADOSH_NISHITHA") {
        const nishitaWin = rec.kaalWindows.NISHITHA;
        const nishitaOv = getOverlapDurationMs(
          matchedInterval.startTimestamp,
          matchedInterval.endTimestamp,
          nishitaWin.startTimestamp,
          nishitaWin.endTimestamp
        );
        if (nishitaOv > 6e4) {
          score += 450;
        }
      }
      if (rule.specialCondition === "UDAYA_APARAHNA_VIJAY") {
        if (matchedInterval.isActiveAtSunrise) {
          score += 220;
        }
        const shravanaAtAparahna = rec.nakshatraIntervals.some(
          (niv) => niv.index === 21 && getOverlapDurationMs(
            niv.startTimestamp,
            niv.endTimestamp,
            kaalWin.startTimestamp,
            kaalWin.endTimestamp
          ) > 0
        );
        if (shravanaAtAparahna) {
          score += 260;
        }
      }
      if (rule.specialCondition === "UDAYA_APARAHNA_PITRU") {
        if (matchedInterval.isActiveAtSunrise) {
          score += 240;
        }
      }
      if (rule.specialCondition === "JANMASHTAMI_NISHITHA") {
        const rohiniAtNishitha = rec.nakshatraIntervals.some(
          (niv) => niv.index === 3 && getOverlapDurationMs(
            niv.startTimestamp,
            niv.endTimestamp,
            kaalWin.startTimestamp,
            kaalWin.endTimestamp
          ) > 0
        );
        if (config.sampradaya === "VAISHNAVA") {
          if (matchedInterval.isActiveAtSunrise) score += 2e3;
          if (rohiniAtNishitha) score += 1500;
        } else {
          if (rohiniAtNishitha) score += 300;
        }
      }
      const pakshaTag = matchedInterval.tithiIndex <= 15 ? "S" : "K";
      const clusterKey = `${lunationBucket}_${pakshaTag}_${rule.tithiNumber}`;
      candidates.push({
        recIndex: idx,
        rec,
        score,
        overlapMinutes: Math.round(overlapMs / 6e4),
        clusterKey,
        lunationBucket
      });
    }
    const grouped = /* @__PURE__ */ new Map();
    for (const c of candidates) {
      const arr = grouped.get(c.clusterKey) || [];
      arr.push(c);
      grouped.set(c.clusterKey, arr);
    }
    for (const [, group] of grouped) {
      group.sort((a, b) => b.score - a.score || a.recIndex - b.recIndex);
      const winner = group[0];
      const rec = winner.rec;
      if (rule.masaIndex !== null && (rule.category === "purnima" || rule.id === "holika-dahan")) {
        namedPurnimaLunations.add(winner.lunationBucket);
      }
      if (rule.masaIndex !== null && (rule.category === "amavasya" || rule.id === "diwali-lakshmi-puja")) {
        namedAmavasyaLunations.add(winner.lunationBucket);
      }
      if (rule.id === "maha-shivaratri") {
        namedShivaratriLunations.add(winner.lunationBucket);
      }
      const wDate = new Date(
        Date.UTC(
          parseInt(rec.dateKey.slice(0, 4), 10),
          parseInt(rec.dateKey.slice(5, 7), 10) - 1,
          parseInt(rec.dateKey.slice(8, 10), 10),
          12,
          0,
          0
        )
      );
      const weekday = wDate.getUTCDay();
      let displayNameHi = rule.nameHi;
      let displayNameEn = rule.nameEn;
      let dynamicVratNoteHi;
      let dynamicDescriptionHi = rule.descriptionHi;
      let dynamicPujaHintHi = rule.pujaHintHi;
      if (rule.id === "monthly-pradosh") {
        const pTitle = resolvePradoshPrefix(weekday);
        const pkLabel = rec.udayaTithi.tithiIndex <= 15 || rec.tithiIntervals.some((t) => t.withinPaksha === 13 && t.tithiIndex <= 15) ? "शुक्ल" : "कृष्ण";
        displayNameHi = `${pTitle} (${pkLabel} त्रयोदशी)`;
      } else if (rule.id === "monthly-sankashti-chaturthi" && weekday === 2) {
        displayNameHi = "अंगारकी संकष्टी गणेश चतुर्थी";
        displayNameEn = "Angarki Sankashti Chaturthi";
      } else if (rule.id === "monthly-purnima") {
        displayNameHi = `${rec.lunarMasa.purnimantaMasaNameHi} पूर्णिमा व्रत एवं सत्यनारायण पूजा`;
      } else if (rule.id === "monthly-amavasya") {
        const prefix = weekday === 1 ? "सोमवती " : weekday === 6 ? "शनैश्चरी " : "";
        displayNameHi = `${prefix}${rec.lunarMasa.purnimantaMasaNameHi} अमावस्या`;
      } else if (rule.id === "krishna-janmashtami") {
        const nishitaWin = rec.kaalWindows.NISHITHA;
        const rohiniIv = rec.nakshatraIntervals.find((niv) => niv.index === 3);
        if (rohiniIv) {
          const rohiniAtNishita = getOverlapDurationMs(
            rohiniIv.startTimestamp,
            rohiniIv.endTimestamp,
            nishitaWin.startTimestamp,
            nishitaWin.endTimestamp
          ) > 0;
          const rohiniSpan = formatWindowRangeInZoneHi(
            Math.max(rohiniIv.startTimestamp, rec.sunriseTimestamp),
            Math.min(rohiniIv.endTimestamp, rec.nextSunriseTimestamp),
            timeZone,
            rec.dateKey
          );
          if (rohiniAtNishita) {
            dynamicVratNoteHi = `रोहिणी नक्षत्र जयंती योग: आज निशीथ काल में रोहिणी नक्षत्र (${rohiniSpan}) का परम शुभ संयोग विद्यमान है।`;
          } else {
            dynamicVratNoteHi = `रोहिणी नक्षत्र योग: आज जन्माष्टमी पर रोहिणी नक्षत्र (${rohiniSpan}) का शुभ संयोग विद्यमान है।`;
          }
          dynamicDescriptionHi = `${rule.descriptionHi} ${dynamicVratNoteHi}`;
        }
      } else if (rule.id === "raksha-bandhan") {
        const daytimeBhadra = (rec.karanaIntervals || []).find(
          (k) => Boolean(k.nameHi && (k.nameHi.includes("विष्टि") || k.nameHi.includes("भद्रा"))) && getOverlapDurationMs(k.startTimestamp, k.endTimestamp, rec.sunriseTimestamp, rec.sunsetTimestamp) > 6e4
        );
        if (daytimeBhadra) {
          const bhStartHi = formatEpochInZoneHi(
            Math.max(daytimeBhadra.startTimestamp, rec.sunriseTimestamp),
            timeZone,
            rec.dateKey
          );
          const bhEndHi = formatEpochInZoneHi(daytimeBhadra.endTimestamp, timeZone, rec.dateKey);
          dynamicVratNoteHi = `भद्रा चेतावनी: आज ${bhStartHi} से ${bhEndHi} तक भद्रा काल है — भद्रा में रक्षासूत्र न बांधें, ${bhEndHi} (भद्रा समाप्ति) के बाद ही राखी बांधें।`;
          dynamicDescriptionHi = `${rule.descriptionHi} ${dynamicVratNoteHi}`;
          dynamicPujaHintHi = `भद्रा समाप्ति (${bhEndHi}) के उपरांत ही भाई की कलाई पर रक्षासूत्र बांधें एवं यज्ञोपवीत बदलें।`;
        } else {
          dynamicVratNoteHi = "भद्रा रहित शुभ श्रावणी पूर्णिमा — प्रातः सूर्योदय से पूर्णिमा समाप्ति तक रक्षासूत्र बांधना शुभ है।";
        }
      } else if (rule.id === "holika-dahan") {
        const pradoshWin = rec.kaalWindows.PRADOSH;
        const bhadraIv = (rec.karanaIntervals || []).find(
          (k) => Boolean(k.nameHi && (k.nameHi.includes("विष्टि") || k.nameHi.includes("भद्रा"))) && getOverlapDurationMs(k.startTimestamp, k.endTimestamp, pradoshWin.startTimestamp, rec.nextSunriseTimestamp) > 6e4
        );
        if (bhadraIv) {
          const bDur = Math.max(1, bhadraIv.endTimestamp - bhadraIv.startTimestamp);
          const mukhaStart = bhadraIv.startTimestamp + bDur * (7 / 12);
          const mukhaEnd = bhadraIv.startTimestamp + bDur * (10 / 12);
          const mukhaRange = formatWindowRangeInZoneHi(mukhaStart, mukhaEnd, timeZone, rec.dateKey);
          const bEndHi = formatEpochInZoneHi(bhadraIv.endTimestamp, timeZone, rec.dateKey);
          dynamicVratNoteHi = `भद्रा मुख (${mukhaRange}) वर्जित — भद्रा मुख त्यागकर प्रदोष/भद्रा समाप्ति (${bEndHi}) अथवा भद्रा पुच्छ में होलिका दहन करें।`;
          dynamicDescriptionHi = `${rule.descriptionHi} ${dynamicVratNoteHi}`;
        } else {
          dynamicVratNoteHi = "भद्रा-मुक्त प्रदोष काल में होलिका दहन परम शुभ है।";
        }
      }
      pushOccurrence({
        festivalId: rule.id,
        nameHi: displayNameHi,
        nameEn: displayNameEn,
        category: rule.category,
        regionScope: rule.regionScope || "pan_india",
        localDate: rec.dateKey,
        tradition: config.tradition,
        sampradaya: config.sampradaya,
        kaalApplied: rule.kaal,
        priority: rule.priority,
        isMonthlyRecurring: rule.masaConvention === "MONTHLY",
        isMultiDaySeries: Boolean(rule.seriesId),
        seriesId: rule.seriesId,
        seriesDay: rule.seriesDay,
        seriesTotalDays: rule.seriesTotalDays,
        vratNoteHi: dynamicVratNoteHi,
        deityHi: rule.deityHi,
        mantraSa: rule.mantraSa,
        mantraMeaningHi: rule.mantraMeaningHi,
        descriptionHi: dynamicDescriptionHi,
        pujaHintHi: dynamicPujaHintHi,
        overlapMinutes: winner.overlapMinutes
      });
      if (rule.id === "holika-dahan") {
        const nextDayKey = shiftKey(rec.dateKey, 1);
        if (recordByDateKey.has(nextDayKey)) {
          pushOccurrence({
            festivalId: "rangwali-holi",
            nameHi: "रंगवाली होली (धुलेंडी / वसंतोत्सव)",
            nameEn: "Rangwali Holi (Dhulandi)",
            category: "mahaparv",
            regionScope: "pan_india",
            localDate: nextDayKey,
            tradition: config.tradition,
            sampradaya: config.sampradaya,
            kaalApplied: "SUNRISE",
            priority: 100,
            isMonthlyRecurring: false,
            isMultiDaySeries: false,
            vratNoteHi: "होलिका दहन के ठीक अगले दिन चैत्र कृष्ण प्रतिपदा / वसंतोत्सव पर रंगवाली होली (धुलेंडी) मनाई जाती है।",
            deityHi: "भगवान श्री राधा-कृष्ण, श्री नृसिंह एवं वसंत देव",
            mantraSa: "ॐ नमो भगवते वासुदेवाय॥ श्री राधाकृष्णाभ्यां नमः॥",
            mantraMeaningHi: "प्रेम, सद्भाव और आनंद के महापर्व होली पर भगवान श्री राधा-कृष्ण की अखंड कृपा बनी रहे।",
            descriptionHi: "होलिका दहन के ठीक अगले दिवस पर रंगों, प्रेम, भाईचारे और वसंत के स्वागत का महापर्व रंगवाली होली (धुलेंडी) मनाया जाता है।",
            pujaHintHi: "प्रातः होलिका की पावन भस्म का तिलक कर भगवान श्री राधा-कृष्ण को गुलाल अर्पित करें और सद्भावपूर्वक होली उत्सव मनाएं।",
            overlapMinutes: 720
          });
        }
      }
      diagnostics.push({
        dateKey: rec.dateKey,
        festivalId: rule.id,
        nameHi: displayNameHi,
        kaalEvaluated: rule.kaal,
        accepted: true,
        reason: `Highest Vyapti score (${winner.score.toFixed(1)}) in cluster ${winner.clusterKey}`,
        sampradayaApplied: config.sampradaya,
        traditionApplied: config.tradition,
        overlapMinutes: winner.overlapMinutes
      });
      for (let j = 1; j < group.length; j++) {
        deduplicatedCount += 1;
        diagnostics.push({
          dateKey: group[j].rec.dateKey,
          festivalId: rule.id,
          nameHi: displayNameHi,
          kaalEvaluated: rule.kaal,
          accepted: false,
          reason: `Suppressed duplicate in cluster ${winner.clusterKey}; won by ${rec.dateKey}`,
          sampradayaApplied: config.sampradaya,
          traditionApplied: config.tradition,
          overlapMinutes: group[j].overlapMinutes
        });
      }
    }
  }
  for (const [dateKey, list] of byDate.entries()) {
    const hasNamedPurnima = list.some(
      (f) => f.category === "purnima" && f.festivalId !== "monthly-purnima"
    );
    const hasNamedAmavasyaOrDiwali = list.some(
      (f) => (f.category === "amavasya" || f.festivalId === "diwali-lakshmi-puja") && f.festivalId !== "monthly-amavasya"
    );
    const hasMahaShivaratri = list.some((f) => f.festivalId === "maha-shivaratri");
    const filtered = list.filter((f) => {
      if (f.festivalId === "monthly-purnima" && hasNamedPurnima) {
        deduplicatedCount += 1;
        return false;
      }
      if (f.festivalId === "monthly-amavasya" && hasNamedAmavasyaOrDiwali) {
        deduplicatedCount += 1;
        return false;
      }
      if (f.festivalId === "monthly-masik-shivaratri" && hasMahaShivaratri) {
        deduplicatedCount += 1;
        return false;
      }
      return true;
    });
    filtered.sort((a, b) => {
      const scoreB = b.priority + getFestivalRegionPriorityBonus(b.regionScope, location);
      const scoreA = a.priority + getFestivalRegionPriorityBonus(a.regionScope, location);
      return scoreB - scoreA;
    });
    byDate.set(dateKey, filtered);
  }
  return {
    byDate,
    diagnostics,
    deduplicatedCount
  };
}
function buildPrimaryAndCombinedFestivalMeta(occurrences) {
  if (!occurrences || occurrences.length === 0) {
    return {};
  }
  const sorted = [...occurrences].sort((a, b) => b.priority - a.priority);
  const primary = sorted[0];
  const primaryCategory = primary.category;
  const combinedDisplayName = sorted.map((o) => o.nameHi).join(" • ");
  return {
    primaryName: primary.nameHi,
    primaryCategory,
    combinedDisplayName,
    primaryOccurrence: primary
  };
}
function validateDailyPanchangRecord(record, occurrences = []) {
  return validatePanchangSpan([record], /* @__PURE__ */ new Map([[record.dateKey, occurrences]]), 0);
}
function validatePanchangSpan(records, occurrencesByDate, deduplicatedFestivalCount = 0, checkedMonths = 1) {
  const errors = [];
  const warnings = [];
  const seenDates = /* @__PURE__ */ new Set();
  const singleDayFestByLunation = /* @__PURE__ */ new Map();
  for (let i = 0; i < records.length; i++) {
    const rec = records[i];
    const dk = rec.dateKey;
    if (seenDates.has(dk)) {
      errors.push({
        code: "DUPLICATE_DATE_KEY",
        severity: "error",
        dateKey: dk,
        message: `Duplicate Gregorian date entry encountered: ${dk}`
      });
    }
    seenDates.add(dk);
    if (!(rec.sunriseTimestamp < rec.sunsetTimestamp && rec.sunsetTimestamp < rec.nextSunriseTimestamp)) {
      errors.push({
        code: "SOLAR_ORDER_INVALID",
        severity: "error",
        dateKey: dk,
        message: `Sunrise/Sunset/NextSunrise ordering broken on ${dk}`
      });
    }
    if (rec.udayaTithi.startTimestamp > rec.sunriseTimestamp + 2e3 || rec.udayaTithi.endTimestamp <= rec.sunriseTimestamp - 2e3) {
      errors.push({
        code: "UDAYA_TITHI_MISMATCH",
        severity: "error",
        dateKey: dk,
        message: `Udaya Tithi (${rec.udayaTithi.nameHi}) interval does not bracket local Sunrise on ${dk}`
      });
    }
    for (const kt of rec.kshayaTithis.intervals) {
      if (kt.startTimestamp <= rec.sunriseTimestamp || kt.endTimestamp > rec.nextSunriseTimestamp + 2e3) {
        errors.push({
          code: "KSHAYA_BOUNDARY_INVALID",
          severity: "error",
          dateKey: dk,
          message: `Kshaya Tithi ${kt.nameHi} violates (Sunrise, NextSunrise] containment on ${dk}`
        });
      }
    }
    if (i > 0) {
      const prev = records[i - 1];
      const prevUtc = Date.parse(`${prev.dateKey}T12:00:00Z`);
      const curUtc = Date.parse(`${dk}T12:00:00Z`);
      const diffDays = Math.round((curUtc - prevUtc) / 864e5);
      if (diffDays !== 1) {
        errors.push({
          code: "GREGORIAN_SEQUENCE_GAP",
          severity: "error",
          dateKey: dk,
          message: `Non-consecutive calendar transition between ${prev.dateKey} and ${dk}`
        });
      }
      const prevIdx = prev.udayaTithi.tithiIndex;
      const curIdx = rec.udayaTithi.tithiIndex;
      const step = (curIdx - prevIdx + 30) % 30;
      if (step > 3) {
        errors.push({
          code: "TITHI_JUMP_ANOMALY",
          severity: "error",
          dateKey: dk,
          message: `Unexpected Tithi jump from ${prevIdx} (${prev.dateKey}) to ${curIdx} (${dk})`
        });
      }
      if (step === 2 && !prev.kshayaTithis.hasKshaya) {
        warnings.push({
          code: "UNFLAGGED_KSHAYA_TRANSITION",
          severity: "warning",
          dateKey: prev.dateKey,
          message: `Tithi stepped by 2 from ${prev.dateKey} to ${dk} without Kshaya marker`
        });
      }
    }
    if (rec.lunarMasa.vikramSamvat - rec.lunarMasa.shakaSamvat !== 135) {
      errors.push({
        code: "SAMVAT_OFFSET_INVALID",
        severity: "error",
        dateKey: dk,
        message: `Vikram Samvat (${rec.lunarMasa.vikramSamvat}) - Shaka Samvat (${rec.lunarMasa.shakaSamvat}) != 135`
      });
    }
    const occs = occurrencesByDate.get(dk) || [];
    const seenFestIdsToday = /* @__PURE__ */ new Set();
    const lunationBucket = Math.round(rec.lunarMasa.prevAmavasyaTimestamp / 864e5);
    for (const occ of occs) {
      if (seenFestIdsToday.has(occ.festivalId)) {
        errors.push({
          code: "DUPLICATE_FESTIVAL_SAME_DAY",
          severity: "error",
          dateKey: dk,
          message: `Duplicate festival ID "${occ.festivalId}" on ${dk}`
        });
      }
      seenFestIdsToday.add(occ.festivalId);
      if (!occ.isMultiDaySeries && occ.festivalId !== "bhanu-saptami" && occ.festivalId !== "monthly-pradosh") {
        const lunFestKey = `${lunationBucket}_${occ.festivalId}`;
        const existingDate = singleDayFestByLunation.get(lunFestKey);
        if (existingDate && existingDate !== dk) {
          errors.push({
            code: "DUPLICATE_FESTIVAL_SAME_LUNATION",
            severity: "error",
            dateKey: dk,
            message: `Single-day festival "${occ.festivalId}" duplicated on ${existingDate} and ${dk} in same lunation`
          });
        }
        singleDayFestByLunation.set(lunFestKey, dk);
      }
      if (occ.category === "ekadashi" && !occ.paranaWindowTextHi) {
        warnings.push({
          code: "EKADASHI_MISSING_PARANA",
          severity: "warning",
          dateKey: dk,
          message: `Ekadashi "${occ.nameHi}" on ${dk} missing Dwadashi Parana window`
        });
      }
    }
  }
  return {
    isValid: errors.length === 0,
    checkedDays: records.length,
    checkedMonths,
    errors,
    warnings,
    deduplicatedFestivalCount
  };
}
const OBSERVANCE_STORAGE_KEY = "panditji_panchang_observance_v1";
const SOUTH_STATES = /* @__PURE__ */ new Set([
  "tamil nadu",
  "kerala",
  "karnataka",
  "andhra pradesh",
  "telangana",
  "puducherry",
  "pondicherry",
  "lakshadweep",
  "andaman and nicobar islands",
  "andaman and nicobar"
]);
const WEST_STATES = /* @__PURE__ */ new Set([
  "maharashtra",
  "gujarat",
  "goa",
  "dadra and nagar haveli and daman and diu",
  "daman and diu",
  "dadra and nagar haveli"
]);
const EAST_SOLAR_STATES = /* @__PURE__ */ new Set([
  "west bengal",
  "assam",
  "odisha",
  "orissa",
  "tripura",
  "manipur",
  "meghalaya",
  "mizoram",
  "nagaland",
  "arunachal pradesh",
  "sikkim"
]);
const NORTH_STATES = /* @__PURE__ */ new Set([
  "uttarakhand",
  "uttar pradesh",
  "bihar",
  "jharkhand",
  "madhya pradesh",
  "rajasthan",
  "haryana",
  "punjab",
  "delhi",
  "nct of delhi",
  "himachal pradesh",
  "jammu and kashmir",
  "ladakh",
  "chandigarh",
  "chhattisgarh"
]);
const NIRAYANA_SOLAR_MASA_LABELS = [
  "मेष (वैशाख / चित्तराई / बोहाग)",
  "वृषभ (ज्येष्ठ / वैकासी / जेठ)",
  "मिथुन (आषाढ़ / आनी / आषाढ़)",
  "कर्क (श्रावण / आडी / शाओन)",
  "सिंह (भाद्रपद / आवणी / भादो)",
  "कन्या (आश्विन / पुरट्टासी / आश्विन)",
  "तुला (कार्तिक / ऐप्पसी / काति)",
  "वृश्चिक (मार्गशीर्ष / कार्तिगै / अघोन)",
  "धनु (पौष / मार्गज़ी / पुष)",
  "मकर (माघ / थाई / माघ)",
  "कुंभ (फाल्गुन / मासी / फागुन)",
  "मीन (चैत्र / पंगुनी / चैत)"
];
let _inMemoryPrefs = {
  mode: "auto"
};
let _prefsLoaded = false;
function loadObservancePrefs() {
  if (_prefsLoaded) return _inMemoryPrefs;
  _prefsLoaded = true;
  if (typeof window === "undefined" || !window.localStorage) {
    return _inMemoryPrefs;
  }
  try {
    const raw = window.localStorage.getItem(OBSERVANCE_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      _inMemoryPrefs = {
        mode: parsed.mode === "manual" ? "manual" : "auto",
        tradition: parsed.tradition === "AMANTA" || parsed.tradition === "PURNIMANTA" ? parsed.tradition : void 0,
        sampradaya: parsed.sampradaya === "SMARTA" || parsed.sampradaya === "VAISHNAVA" ? parsed.sampradaya : void 0,
        ayanamsha: parsed.ayanamsha,
        nodeMode: parsed.nodeMode === "MEAN" ? "MEAN" : parsed.nodeMode === "TRUE" ? "TRUE" : void 0
      };
    }
  } catch {
  }
  return _inMemoryPrefs;
}
function saveObservancePrefs(next) {
  _inMemoryPrefs = next;
  _prefsLoaded = true;
  if (typeof window === "undefined") return;
  try {
    if (window.localStorage) {
      window.localStorage.setItem(OBSERVANCE_STORAGE_KEY, JSON.stringify(next));
    }
  } catch {
  }
}
function dispatchObservanceChanged(state) {
  if (typeof window !== "undefined" && typeof window.dispatchEvent === "function") {
    try {
      window.dispatchEvent(new CustomEvent("panditji_observance_changed", { detail: state }));
    } catch {
    }
  }
}
const GUJARAT_LOCATION_REGEX = /gujarat|kutch|kachchh|saurashtra|ahmedabad|surat|vadodara|baroda|rajkot|dwarka|somnath|bhuj|gandhinagar|gandhidham|jamnagar|junagadh|bhavnagar|porbandar|amreli|anand|bharuch|navsari|valsad|mehsana|patan|palanpur|banaskantha|sabarkantha|dahod|panchmahal|godhra|kheda|nadiad|morbi|surendranagar|botad|veraval|gir somnath|devbhumi dwarka|aravalli|mahisagar|tapi|narmada|chhota udaipur|dang|daman|diu|silvassa|गुजरात|कच्छ|सौराष्ट्र|अहमदाबाद|सूरत|वडोदरा|राजकोट|द्वारका|सोमनाथ|भुज|गांधीनगर|जामनगर|जूनागढ़|भावनगर|पोरबंदर|आणंद|भरूच|नवसारी|वलसाड|मेहसाणा|पाटण|मोरबी|सुरेंद्रनगर|बोटाद|दाहोद|गोधरा|नडियाद|दमन|दीव/u;
function isGujaratLocation(location) {
  if (!location) return false;
  const stateLower = String(location.state || "").trim().toLowerCase();
  if (stateLower === "gujarat" || stateLower.includes("gujarat") || stateLower.includes("daman and diu") || stateLower.includes("dadra and nagar haveli")) {
    return true;
  }
  const blob = `${stateLower} ${location.district || ""} ${location.name || ""} ${location.hindiName || ""}`.toLowerCase();
  return GUJARAT_LOCATION_REGEX.test(blob);
}
function classifyRegionalObservanceProfile(location) {
  const country = String(location?.country || "India").trim().toLowerCase();
  const stateLower = String(location?.state || "").trim().toLowerCase();
  const textBlob = `${stateLower} ${location?.district || ""} ${location?.name || ""} ${location?.hindiName || ""}`.toLowerCase();
  const lat = Number.isFinite(location?.lat) ? Number(location?.lat) : 28.9765;
  const lon = Number.isFinite(location?.lon) ? Number(location?.lon) : 79.3999;
  if (country && country !== "india" && country !== "भारत") {
    return {
      regionId: "GLOBAL_STANDARD",
      regionShortBadgeHi: "वैश्विक दृक मान",
      regionLabelHi: "अंतर्राष्ट्रीय दृक गणित (स्थानीय सूर्योदय व टाइमज़ोन)",
      regionLabelEn: "Global Drik Ganita",
      suggestedTradition: "PURNIMANTA",
      suggestedSampradaya: "SMARTA",
      vikramSamvatStart: "chaitra",
      regionalCalendarNoteHi: "स्थानीय देशांतर, अक्षांश और IANA टाइमज़ोन पर आधारित शुद्ध दृक गणित पंचांग (अमांत व पूर्णिमांत दोनों विकल्प उपलब्ध)।",
      regionalSamvatNoteHi: "चैत्र शुक्ल प्रतिपदा संवत्सर क्रम (ग्लोबल)",
      majorRegionalFestivalsHi: "दीपावली, महाशिवरात्रि, जन्माष्टमी, नवरात्रि, एकादशी व्रत"
    };
  }
  let regionId = null;
  if (SOUTH_STATES.has(stateLower) || /tamil|kerala|karnataka|andhra|telangana|madurai|rameswaram|chennai|bengaluru|bangalore|hyderabad|kochi|tirupati|puducherry|mysuru|mysore|coimbatore|thiruvananthapuram|तमिल|केरल|कर्नाटक|आंध्र|तेलंगाना|मदुरै|रामेश्वरम|चेन्नई|बेंगलुरु|हैदराबाद|तिरुपति|कोच्चि|पुडुचेरी|कोयंबटूर/u.test(
    textBlob
  )) {
    regionId = "SOUTH_AMANTA";
  } else if (WEST_STATES.has(stateLower) || GUJARAT_LOCATION_REGEX.test(textBlob) || /maharashtra|goa|mumbai|pune|nashik|nagpur|shirdi|kolhapur|thane|satara|solapur|aurangabad|sambhajinagar|महाराष्ट्र|गोवा|मुंबई|पुणे|नासिक|नागपुर|शिरडी|कोल्हापुर|ठाणे/u.test(
    textBlob
  )) {
    regionId = "WEST_AMANTA";
  } else if (EAST_SOLAR_STATES.has(stateLower) || /bengal|assam|odisha|orissa|guwahati|kolkata|kamakhya|puri|bhubaneswar|sikkim|tripura|manipur|बंगाल|असम|ओडिशा|गुवाहाटी|कोलकाता|कामाख्या|पुरी|भुवनेश्वर|सिक्किम|त्रिपुरा|मणिपुर/u.test(
    textBlob
  )) {
    regionId = "EAST_SOLAR_GAUDIYA";
  } else if (NORTH_STATES.has(stateLower) || /uttarakhand|uttar pradesh|rudrapur|varanasi|kashi|ayodhya|delhi|ujjain|haridwar|prayagraj|mathura|vrindavan|jaipur|lucknow|patna|indore|bhopal|bihar|madhya pradesh|rajasthan|haryana|punjab|himachal|उत्तराखण्ड|उत्तराखंड|उत्तर प्रदेश|रुद्रपुर|वाराणसी|काशी|अयोध्या|दिल्ली|उज्जैन|हरिद्वार|प्रयागराज|मथुरा|वृंदावन|जयपुर|लखनऊ|पटना|इंदौर|भोपाल|बिहार|मध्य प्रदेश|राजस्थान|हरियाणा|पंजाब|हिमाचल/u.test(
    textBlob
  )) {
    regionId = "NORTH_PURNIMANTA";
  } else {
    if (lat < 16.5) regionId = "SOUTH_AMANTA";
    else if (lon > 87) regionId = "EAST_SOLAR_GAUDIYA";
    else if (lon < 74.5 && lat < 24.5) regionId = "WEST_AMANTA";
    else regionId = "NORTH_PURNIMANTA";
  }
  if (regionId === "SOUTH_AMANTA") {
    const isSolarSouth = /tamil|kerala|madurai|rameswaram|chennai|coimbatore|kochi|thiruvananthapuram/.test(textBlob);
    return {
      regionId: "SOUTH_AMANTA",
      regionShortBadgeHi: isSolarSouth ? "दक्षिण (अमांत / सौर)" : "दक्षिण भारतीय (अमांत)",
      regionLabelHi: isSolarSouth ? "दक्षिण भारतीय पंचांगम् (अमांत चंद्र + तमिल/मलयालम सौर मान)" : "दक्षिण भारतीय पंचांगम् (शालिवाहन शक अमांत मान)",
      regionLabelEn: "South Indian (Amanta / Dravida)",
      suggestedTradition: "AMANTA",
      suggestedSampradaya: "SMARTA",
      vikramSamvatStart: "chaitra",
      regionalCalendarNoteHi: isSolarSouth ? "तमिलनाडु/केरल में चंद्र व्रत अमांत (अमावस्या तक मास) व तमिल/कोल्लम सौर संक्रांति के साथ प्रचलित हैं।" : "आंध्र, तेलंगाना व कर्नाटक में अमांत (अमावस्यांत) चंद्र मास व उगादि (चैत्र शुक्ल प्रतिपदा) संवत्सर प्रचलित है।",
      regionalSamvatNoteHi: "शालिवाहन शक संवत एवं 60-संवत्सर दक्षिण क्रम",
      majorRegionalFestivalsHi: "कार्तिगै दीपम, स्कंद षष्ठी, पोंगल/मकर, वैकुंठ एकादशी, प्रदोषम्, उगादि"
    };
  }
  if (regionId === "WEST_AMANTA") {
    const isGujarati = isGujaratLocation(location) || GUJARAT_LOCATION_REGEX.test(textBlob);
    return {
      regionId: "WEST_AMANTA",
      regionShortBadgeHi: isGujarati ? "गुजराती अमांत (कार्तिकादि)" : "मराठी/पश्चिम अमांत",
      regionLabelHi: isGujarati ? "पश्चिम भारतीय गुजराती पंचांग (कार्तिकादि विक्रम व अमांत मास)" : "पश्चिम भारतीय मराठी/गोवा पंचांग (शक अमांत मास)",
      regionLabelEn: isGujarati ? "Western Indian Gujarati (Kartikadi Amanta)" : "Western Indian (Amanta)",
      suggestedTradition: "AMANTA",
      suggestedSampradaya: "SMARTA",
      vikramSamvatStart: isGujarati ? "kartika" : "chaitra",
      regionalCalendarNoteHi: isGujarati ? "गुजरात में मास अमांत (अमावस्या को समाप्त) होता है तथा नूतन वर्ष कार्तिक शुक्ल प्रतिपदा (बेस्तु वरस) से प्रारंभ होता है।" : "महाराष्ट्र व गोवा में मास अमांत (अमावस्या को समाप्त) होता है तथा नववर्ष चैत्र शुक्ल प्रतिपदा (गुड़ी पड़वा) से प्रारंभ होता है।",
      regionalSamvatNoteHi: isGujarati ? "गुजराती विक्रम संवत (कार्तिकादि — बेस्तु वरस नववर्ष) व अमांत पक्ष" : "शालिवाहन शक संवत (चैत्र गुड़ी पड़वा) व अमांत पक्ष",
      majorRegionalFestivalsHi: "गणेशोत्सव, गुड़ी पड़वा, नूतन वर्ष (बेस्तु वरस), संकष्टी चतुर्थी, आषाढ़ी/कार्तिकी एकादशी"
    };
  }
  if (regionId === "EAST_SOLAR_GAUDIYA") {
    const isOdisha = /odisha|orissa|puri|bhubaneswar|cuttack|konark/.test(textBlob);
    return {
      regionId: "EAST_SOLAR_GAUDIYA",
      regionShortBadgeHi: isOdisha ? "ओडिशा (पूर्णिमांत/वैष्णव)" : "पूर्वी (बंगाल/असम गौड़ीय)",
      regionLabelHi: isOdisha ? "पूर्वी भारतीय ओडिशा पंचांग (पूर्णिमांत + श्री जगन्नाथ वैष्णव)" : "पूर्वी भारतीय बंगाल/असम पंचांग (सौर बंगाब्द/असमिया + गौड़ीय वैष्णव)",
      regionLabelEn: isOdisha ? "Eastern Odisha (Purnimanta Vaishnava)" : "Eastern Bengal/Assam (Solar & Gaudiya)",
      suggestedTradition: isOdisha ? "PURNIMANTA" : "AMANTA",
      suggestedSampradaya: "VAISHNAVA",
      vikramSamvatStart: "chaitra",
      regionalCalendarNoteHi: isOdisha ? "ओडिशा (पुरी पंजिका) में चंद्र मास पूर्णिमांत होता है और एकादशी-व्रत श्री जगन्नाथ वैष्णव नियम से माने जाते हैं।" : "बंगाल व असम में संक्रांति आधारित सौर मास (बंगाब्द/भास्कराब्द) एवं गौड़ीय वैष्णव (दशमी-वेध रहित) एकादशी प्रधान है।",
      regionalSamvatNoteHi: isOdisha ? "उत्कल/शक व पूर्णिमांत मान" : "बंगाब्द / भास्कराब्द (मेष संक्रांति नववर्ष)",
      majorRegionalFestivalsHi: "दुर्गा पूजा, बिहू (संक्रांति), अम्बुबाची, रथ यात्रा, गौड़ीय वैष्णव एकादशी"
    };
  }
  return {
    regionId: "NORTH_PURNIMANTA",
    regionShortBadgeHi: "उत्तर भारतीय (पूर्णिमांत)",
    regionLabelHi: "उत्तर भारतीय काशी/रुद्रपुर पंचांग (पूर्णिमांत + स्मार्त)",
    regionLabelEn: "North Indian (Purnimanta)",
    suggestedTradition: "PURNIMANTA",
    suggestedSampradaya: "SMARTA",
    vikramSamvatStart: "chaitra",
    regionalCalendarNoteHi: "उत्तराखण्ड, उत्तर प्रदेश, बिहार, राजस्थान, मध्य प्रदेश व दिल्ली में मास पूर्णिमांत (पूर्णिमा को समाप्त) होता है।",
    regionalSamvatNoteHi: "चैत्रादि विक्रम संवत एवं पूर्णिमांत शुक्ल-कृष्ण पक्ष",
    majorRegionalFestivalsHi: "छठ महापर्व, देव दीपावली, कांवड़/श्रावण, वसंत पंचमी, होली, रामनवमी"
  };
}
function getActiveObservanceState(location) {
  const prefs = loadObservancePrefs();
  const regionProfile = classifyRegionalObservanceProfile(location);
  const isManualOverride = prefs.mode === "manual";
  const tradition = isManualOverride && prefs.tradition ? prefs.tradition : regionProfile.suggestedTradition;
  const sampradaya = isManualOverride && prefs.sampradaya ? prefs.sampradaya : regionProfile.suggestedSampradaya;
  return {
    mode: isManualOverride ? "manual" : "auto",
    tradition,
    sampradaya,
    ayanamsha: prefs.ayanamsha || DEFAULT_ASTRONOMICAL_CONFIG.ayanamsha,
    nodeMode: prefs.nodeMode || DEFAULT_ASTRONOMICAL_CONFIG.nodeMode || "TRUE",
    regionProfile,
    isManualOverride
  };
}
function setObservanceManualOverride(patch, location) {
  const current = getActiveObservanceState(location);
  const nextPrefs = {
    mode: "manual",
    tradition: patch.tradition ?? current.tradition,
    sampradaya: patch.sampradaya ?? current.sampradaya,
    ayanamsha: patch.ayanamsha ?? current.ayanamsha,
    nodeMode: patch.nodeMode ?? current.nodeMode
  };
  saveObservancePrefs(nextPrefs);
  const nextState = getActiveObservanceState(location);
  dispatchObservanceChanged(nextState);
  return nextState;
}
function resetObservanceToRegionalAuto(location) {
  const current = loadObservancePrefs();
  saveObservancePrefs({
    mode: "auto",
    ayanamsha: current.ayanamsha,
    nodeMode: current.nodeMode
  });
  const nextState = getActiveObservanceState(location);
  dispatchObservanceChanged(nextState);
  return nextState;
}
function getObservanceProfileKey(stateOrRegion, location) {
  if (!stateOrRegion) {
    const active = getActiveObservanceState(location);
    return `${active.regionProfile.regionId}-${active.tradition}-${active.sampradaya}`;
  }
  const regionId = "regionProfile" in stateOrRegion ? stateOrRegion.regionProfile.regionId : stateOrRegion.regionId || classifyRegionalObservanceProfile(location).regionId;
  return `${regionId}-${stateOrRegion.tradition}-${stateOrRegion.sampradaya}`;
}
function computeObservanceDivergenceSummary(record, location, dayOccurrences) {
  const profile = classifyRegionalObservanceProfile(location || record?.location);
  if (!record) {
    return {
      hasAnyDivergence: false,
      masaDiffers: false,
      purnimantaMasaLabelHi: "",
      amantaMasaLabelHi: "",
      masaExplanationHi: profile.regionalCalendarNoteHi,
      ekadashiDiffers: false,
      ekadashiComparisonHi: "चयनित दिन पर एकादशी मतभेद नहीं है।",
      solarMonthNoteHi: "",
      samvatNoteHi: profile.regionalSamvatNoteHi
    };
  }
  const lm = record.lunarMasa;
  const purnimantaMasaLabelHi = `${lm.purnimantaMasaNameHi} ${lm.pakshaShort} पक्ष`;
  const amantaMasaLabelHi = `${lm.amantaMasaNameHi} ${lm.pakshaShort} पक्ष`;
  const masaDiffers = lm.purnimantaMasaIndex !== lm.amantaMasaIndex;
  const masaExplanationHi = masaDiffers ? `कृष्ण पक्ष होने से उत्तर भारत (पूर्णिमांत) में "${purnimantaMasaLabelHi}" तथा दक्षिण/पश्चिम भारत (अमांत) में "${amantaMasaLabelHi}" मान्य है।` : `शुक्ल पक्ष होने से पूर्णिमांत व अमांत दोनों परंपराओं में एकसमान "${lm.activeMasaNameHi} शुक्ल पक्ष" है।`;
  const sunRashiIdx = Math.floor((record.sunSiderealDegAtSunrise % 360 + 360) % 360 / 30);
  const solarMonthNoteHi = `सौर मास (निरयण): ${NIRAYANA_SOLAR_MASA_LABELS[sunRashiIdx] || ""}`;
  const udayaIdx = record.udayaTithi.tithiIndex;
  const hasEkadashiInterval = record.tithiIntervals.some((t) => t.withinPaksha === 11);
  const ekOcc = (dayOccurrences || []).find((o) => o.category === "ekadashi");
  const vratNote = ekOcc?.vratNoteHi || "";
  let ekadashiDiffers = false;
  let ekadashiComparisonHi = "इस तिथि पर स्मार्त एवं वैष्णव व्रत तिथि में कोई विरोध नहीं है।";
  if (udayaIdx === 11 || udayaIdx === 26 || hasEkadashiInterval || ekOcc) {
    if (vratNote.includes("दशमी-विद्धा") || vratNote.includes("वैष्णव जन अगले दिन") || vratNote.includes("उन्मिलनी") || vratNote.includes("द्वितीय दिन") || record.vriddhiTithi?.isVriddhi || record.tithiIntervals.some((t) => t.withinPaksha === 11 && t.isKshaya)) {
      ekadashiDiffers = true;
      ekadashiComparisonHi = "दशमी वेध / वृद्धि-क्षय योग के कारण स्मार्त (गृहस्थ) एकादशी प्रथम सूर्योदय दिन तथा वैष्णव (इस्कॉन/भागवत/गौड़ीय) एकादशी द्वादशी-युता अगले दिन मान्य होती है।";
    } else if (ekOcc) {
      ekadashiComparisonHi = `शुद्धा एकादशी — स्मार्त एवं वैष्णव दोनों परंपराओं में ${ekOcc.localDate} को समान रूप से मान्य।`;
    }
  }
  return {
    hasAnyDivergence: masaDiffers || ekadashiDiffers,
    masaDiffers,
    purnimantaMasaLabelHi,
    amantaMasaLabelHi,
    masaExplanationHi,
    ekadashiDiffers,
    ekadashiComparisonHi,
    solarMonthNoteHi,
    samvatNoteHi: profile.regionalSamvatNoteHi
  };
}
function resolveKartikadiVikramSamvat(northVikramSamvat, amantaMasaIndex) {
  if (typeof amantaMasaIndex !== "number" || !Number.isFinite(amantaMasaIndex)) {
    return { vikramSamvat: northVikramSamvat, isPreBestuVaras: false };
  }
  const idx = (Math.floor(amantaMasaIndex) % 12 + 12) % 12;
  const isPreBestuVaras = idx >= 0 && idx <= 6;
  return {
    vikramSamvat: isPreBestuVaras ? northVikramSamvat - 1 : northVikramSamvat,
    isPreBestuVaras
  };
}
function resolvePrimarySamvatsaraForLocation(day, locationOrName) {
  let locObj;
  if (locationOrName && typeof locationOrName === "object") {
    locObj = locationOrName;
  } else if (typeof locationOrName === "string" && locationOrName.trim()) {
    locObj = {
      id: "custom-name",
      name: locationOrName,
      hindiName: locationOrName,
      state: "",
      country: "India",
      lat: 28.9765,
      lon: 79.3999,
      timezone: "Asia/Kolkata",
      tzOffsetHours: 5.5
    };
  } else if (day.dailyPanchang?.location) {
    locObj = day.dailyPanchang.location;
  } else if (day.locationName) {
    locObj = {
      id: "day-loc-name",
      name: day.locationName,
      hindiName: day.locationName,
      state: "",
      country: "India",
      lat: 28.9765,
      lon: 79.3999,
      timezone: "Asia/Kolkata",
      tzOffsetHours: 5.5
    };
  }
  const profile = classifyRegionalObservanceProfile(locObj);
  const activeTradition = day.tradition || day.dailyPanchang?.config?.tradition || profile.suggestedTradition;
  const northVikramSamvat = Number(day.vikramSamvat || 2083);
  const shakaSamvat = Number(day.shakaSamvat || 1948);
  const amantaMasaIndex = day.lunarMasaInfo?.amantaMasaIndex ?? day.dailyPanchang?.lunarMasa?.amantaMasaIndex;
  const isKartikadiGujarati = activeTradition === "AMANTA" && profile.vikramSamvatStart === "kartika";
  const kartikadiInfo = isKartikadiGujarati ? resolveKartikadiVikramSamvat(northVikramSamvat, amantaMasaIndex) : { vikramSamvat: northVikramSamvat };
  const effectiveVikramSamvat = kartikadiInfo.vikramSamvat;
  const kartikadiTagHi = isKartikadiGujarati ? " (कार्तिकादि)" : "";
  const unifiedOrd = computeSamvatsaraOrdinal(shakaSamvat, 25);
  const unifiedName = getVikramSamvatsarName(shakaSamvat + 135);
  if (isKartikadiGujarati) {
    return {
      regionId: profile.regionId,
      activeCard: "south_solar",
      vikramSamvatStart: "kartika",
      isKartikadiGujarati: true,
      kartikadiTagHi,
      samvatsaraNameHi: unifiedName,
      ordinal: unifiedOrd,
      vikramSamvat: effectiveVikramSamvat,
      northVikramSamvat,
      shakaSamvat,
      eraLabelHi: `विक्रम संवत ${effectiveVikramSamvat} (कार्तिकादि)`,
      traditionTagHi: "गुजराती कार्तिकादि विक्रम संवत / अमांत परंपरा",
      headerLineHi: `विक्रम संवत ${effectiveVikramSamvat} (कार्तिकादि) • '${unifiedName}' संवत्सर (${unifiedOrd}वां)`,
      compactHeaderHi: `विक्रम संवत ${effectiveVikramSamvat} (कार्तिकादि) • '${unifiedName}' संवत्सर`,
      shareSamvatEraLineHi: `विक्रम संवत: ${effectiveVikramSamvat} (कार्तिकादि) | शक संवत: ${shakaSamvat}`,
      shareSamvatsaraLineHi: `संवत्सर: '${unifiedName}' (${unifiedOrd}वां संवत्सर — एकीकृत ६०-वर्षीय संवत्सर चक्र)`,
      shareSamvatEraLineEn: `Vikram Samvat: ${effectiveVikramSamvat} (Kartikadi) | Shaka Samvat: ${shakaSamvat}`,
      shareSamvatsaraLineEn: `Samvatsara: '${unifiedName}' (${unifiedOrd}th Samvatsara — Unified 60-Year Cycle)`
    };
  }
  const isAmantaLocked = activeTradition === "AMANTA";
  if (isAmantaLocked) {
    return {
      regionId: profile.regionId,
      activeCard: "south_solar",
      vikramSamvatStart: "chaitra",
      isKartikadiGujarati: false,
      kartikadiTagHi: "",
      samvatsaraNameHi: unifiedName,
      ordinal: unifiedOrd,
      vikramSamvat: effectiveVikramSamvat,
      northVikramSamvat,
      shakaSamvat,
      eraLabelHi: `शालिवाहन शक ${shakaSamvat}`,
      traditionTagHi: "शालिवाहन शक / अमांत परंपरा",
      headerLineHi: `शालिवाहन शक ${shakaSamvat} ('${unifiedName}' संवत्सर - ${unifiedOrd}वां • अमांत परंपरा)`,
      compactHeaderHi: `'${unifiedName}' संवत्सर (${unifiedOrd}वां — शालिवाहन शक ${shakaSamvat})`,
      shareSamvatEraLineHi: `शालिवाहन शक संवत: ${shakaSamvat} | विक्रम संवत: ${effectiveVikramSamvat}`,
      shareSamvatsaraLineHi: `संवत्सर: '${unifiedName}' (${unifiedOrd}वां संवत्सर — शालिवाहन शक / एकीकृत चक्र)`,
      shareSamvatEraLineEn: `Shalivahana Shaka Samvat: ${shakaSamvat} | Vikram Samvat: ${effectiveVikramSamvat}`,
      shareSamvatsaraLineEn: `Samvatsara: '${unifiedName}' (${unifiedOrd}th Samvatsara — Shalivahana Shaka / Unified Cycle)`
    };
  }
  return {
    regionId: profile.regionId,
    activeCard: "vikram",
    vikramSamvatStart: "chaitra",
    isKartikadiGujarati: false,
    kartikadiTagHi: "",
    samvatsaraNameHi: unifiedName,
    ordinal: unifiedOrd,
    vikramSamvat: effectiveVikramSamvat,
    northVikramSamvat,
    shakaSamvat,
    eraLabelHi: `विक्रम संवत ${effectiveVikramSamvat}`,
    traditionTagHi: "उत्तर भारतीय विक्रम संवत परंपरा",
    headerLineHi: `विक्रम संवत ${effectiveVikramSamvat} ('${unifiedName}' संवत्सर - ${unifiedOrd}वां)`,
    compactHeaderHi: `विक्रम संवत ${effectiveVikramSamvat} ('${unifiedName}' संवत्सर - ${unifiedOrd}वां)`,
    shareSamvatEraLineHi: `विक्रम संवत: ${effectiveVikramSamvat} | शक संवत: ${shakaSamvat}`,
    shareSamvatsaraLineHi: `संवत्सर: '${unifiedName}' (${unifiedOrd}वां संवत्सर — उत्तर भारतीय विक्रम संवत परंपरा)`,
    shareSamvatEraLineEn: `Vikram Samvat: ${effectiveVikramSamvat} | Shaka Samvat: ${shakaSamvat}`,
    shareSamvatsaraLineEn: `Samvatsara: '${unifiedName}' (${unifiedOrd}th Samvatsara — North Indian Vikram Samvat)`
  };
}
const PACKED_INDIA_DISTRICTS = {
  "Andhra Pradesh": "Alluri Sitharama Raju|अल्लूरी सीताराम राजू|18.08|82.66;Anakapalli|अनाकापल्ली|17.69|83.00;Anantapur|अनंतपुर|14.68|77.60;Annamayya|अन्नमय्या|14.06|78.75;Bapatla|बापटला|15.90|80.47;Chittoor|चित्तूर|13.22|79.10;Dr. B. R. Ambedkar Konaseema|कोनसीमा|16.58|82.01;East Godavari|पूर्वी गोदावरी|17.00|81.80;Eluru|एलुरु|16.71|81.10;Guntur|गुंटूर|16.31|80.44;Kakinada|काकीनाडा|16.99|82.25;Krishna|कृष्णा|16.19|81.14;Kurnool|कुरनूल|15.83|78.04;Nandyal|नंद्याल|15.48|78.48;NTR|एनटीआर विजयवाड़ा|16.51|80.65;Palnadu|पलनाडु|16.24|80.05;Parvathipuram Manyam|पार्वतीपुरम मन्यम|18.78|83.43;Prakasam|प्रकाशम|15.51|80.05;Sri Potti Sriramulu Nellore|नेल्लोर|14.44|79.99;Sri Sathya Sai|श्री सत्य साईं|14.17|77.81;Srikakulam|श्रीकाकुलम|18.29|83.90;Tirupati|तिरुपति|13.63|79.42;Visakhapatnam|विशाखापत्तनम|17.69|83.22;Vizianagaram|विजयनगरम|18.11|83.40;West Godavari|पश्चिम गोदावरी|16.54|81.52;YSR Kadapa|कडप्पा|14.47|78.82",
  "Arunachal Pradesh": "Anjaw|अंजाव|27.93|96.83;Bichom|बिचोम|27.31|92.54;Changlang|चांगलांग|27.13|95.74;Dibang Valley|दिबांग घाटी|28.80|95.90;East Kameng|पूर्वी कामेंग|27.36|93.04;East Siang|पूर्वी सियांग|28.07|95.33;Kamle|कामले|27.76|94.08;Keyi Panyor|केयी पन्योर|27.51|93.75;Kra Daadi|क्रा दादी|27.82|93.58;Kurung Kumey|कुरुंग कुमे|27.90|93.35;Lepa Rada|लेपा रादा|27.98|94.69;Lohit|लोहित|27.92|96.17;Longding|लोंगडिंग|26.86|95.32;Lower Dibang Valley|निचली दिबांग घाटी|28.14|95.84;Lower Siang|निचली सियांग|27.64|94.71;Lower Subansiri|निचली सुबनसिरी|27.55|93.83;Namsai|नामसाई|27.67|95.86;Pakke Kessang|पक्के केसांग|27.14|93.26;Papum Pare|पापुम पारे|27.15|93.71;Shi Yomi|शी योमी|28.54|94.13;Siang|सियांग|28.31|94.96;Tawang|तवांग|27.59|91.86;Tirap|तिरप|27.00|95.50;Upper Siang|ऊपरी सियांग|28.62|95.04;Upper Subansiri|ऊपरी सुबनसिरी|27.99|94.22;West Kameng|पश्चिमी कामेंग|27.26|92.42;West Siang|पश्चिमी सियांग|28.17|94.80",
  "Assam": "Bajali|बजाली|26.50|91.18;Baksa|बक्सा|26.64|91.37;Barpeta|बारपेटा|26.32|91.01;Biswanath|विश्वनाथ|26.73|93.15;Bongaigaon|बोंगाईगांव|26.48|90.56;Cachar|कछार|24.83|92.78;Charaideo|चराइदेव|27.02|95.03;Chirang|चिरांग|26.53|90.64;Darrang|दरंग|26.44|92.03;Dhemaji|धेमाजी|27.48|94.56;Dhubri|धुबरी|26.02|89.98;Dibrugarh|डिब्रूगढ़|27.47|94.91;Dima Hasao|दीमा हसाओ|25.17|93.02;Goalpara|गोलपारा|26.18|90.63;Golaghat|गोलाघाट|26.52|93.96;Hailakandi|हैलाकांडी|24.68|92.56;Hojai|होजाई|26.00|92.86;Jorhat|जोरहाट|26.76|94.21;Kamrup|कामरूप|26.20|91.68;Kamrup Metropolitan|कामरूप महानगर|26.14|91.74;Karbi Anglong|कार्बी आंगलोंग|25.84|93.43;Karimganj|करीमगंज|24.87|92.36;Kokrajhar|कोकराझार|26.40|90.27;Lakhimpur|लखीमपुर असम|27.24|94.10;Majuli|माजुली|26.95|94.17;Morigaon|मोरीगांव|26.25|92.34;Nagaon|नगांव|26.35|92.69;Nalbari|नलबाड़ी|26.44|91.44;Sivasagar|शिवसागर|26.98|94.64;Sonitpur|सोनितपुर|26.65|92.79;South Salmara-Mankachar|दक्षिण सलमारा|25.54|89.87;Tamulpur|तामुलपुर|26.63|91.57;Tinsukia|तिनसुकिया|27.49|95.36;Udalguri|उदलगुड़ी|26.75|92.10;West Karbi Anglong|पश्चिमी कार्बी आंगलोंग|25.90|92.57",
  "Bihar": "Araria|अररिया|26.15|87.52;Arwal|अरवल|25.25|84.68;Aurangabad|औरंगाबाद बिहार|24.75|84.37;Banka|बांका|24.89|86.92;Begusarai|बेगूसराय|25.42|86.13;Bhagalpur|भागलपुर|25.24|86.98;Bhojpur|भोजपुर आरा|25.56|84.66;Buxar|बक्सर|25.56|83.98;Darbhanga|दरभंगा|26.15|85.90;East Champaran|पूर्वी चंपारण मोतिहारी|26.65|84.91;Gaya|गया|24.80|85.00;Gopalganj|गोपालगंज|26.47|84.44;Jamui|जमुई|24.92|86.22;Jehanabad|जहानाबाद|25.21|84.99;Kaimur|कैमूर भभुआ|25.04|83.61;Katihar|कटिहार|25.54|87.57;Khagaria|खगड़िया|25.50|86.47;Kishanganj|किशनगंज|26.10|87.94;Lakhisarai|लखीसराय|25.17|86.09;Madhepura|मधेपुरा|25.92|86.79;Madhubani|मधुबनी|26.35|86.07;Munger|मुंगेर|25.37|86.47;Muzaffarpur|मुजफ्फरपुर|26.12|85.39;Nalanda|नालंदा बिहारशरीफ|25.20|85.52;Nawada|नवादा|24.89|85.55;Patna|पटना|25.59|85.14;Purnia|पूर्णिया|25.78|87.48;Rohtas|रोहतास सासाराम|24.95|84.03;Saharsa|सहरसा|25.88|86.60;Samastipur|समस्तीपुर|25.86|85.78;Saran|सारण छपरा|25.78|84.75;Sheikhpura|शेखपुरा|25.14|85.84;Sheohar|शिवहर|26.52|85.29;Sitamarhi|सीतामढ़ी|26.59|85.49;Siwan|सिवान|26.22|84.36;Supaul|सुपौल|26.12|86.60;Vaishali|वैशाली हाजीपुर|25.69|85.21;West Champaran|पश्चिम चंपारण बेतिया|26.80|84.51",
  "Chhattisgarh": "Balod|बालोद|20.73|81.20;Baloda Bazar|बलौदा बाजार|21.66|82.16;Balrampur|बलरामपुर छत्तीसगढ़|23.61|83.61;Bastar|बस्तर जगदलपुर|19.08|82.02;Bemetara|बेमेतरा|21.71|81.53;Bijapur|बीजापुर छत्तीसगढ़|18.85|80.82;Bilaspur|बिलासपुर छत्तीसगढ़|22.08|82.14;Dantewada|दंतेवाड़ा|18.90|81.35;Dhamtari|धमतरी|20.71|81.55;Durg|दुर्ग|21.19|81.28;Gariaband|गरियाबंद|20.64|82.06;Gaurela-Pendra-Marwahi|गौरेला पेंड्रा मरवाही|22.76|81.90;Janjgir-Champa|जांजगीर चांपा|22.01|82.58;Jashpur|जशपुर|22.89|84.14;Kabirdham|कबीरधाम कवर्धा|22.01|81.23;Kanker|कांकेर|20.27|81.49;Khairagarh-Chhuikhadan-Gandai|खैरागढ़|21.42|80.98;Kondagaon|कोंडागांव|19.59|81.66;Korba|कोरबा|22.36|82.75;Koriya|कोरिया बैकुंठपुर|23.26|82.56;Mahasamund|महासमुंद|21.11|82.10;Manendragarh-Chirmiri-Bharatpur|मनेंद्रगढ़|23.21|82.20;Mohla-Manpur-Ambagarh Chowki|मोहला मानपुर|20.58|80.74;Mungeli|मुंगेली|22.07|81.69;Narayanpur|नारायणपुर|19.72|81.25;Raigarh|रायगढ़|21.90|83.40;Raipur|रायपुर|21.25|81.63;Rajnandgaon|राजनांदगांव|21.10|81.03;Sakti|सक्ती|22.03|82.96;Sarangarh-Bilaigarh|सारंगढ़ बिलाईगढ़|21.59|83.07;Sukma|सुकमा|18.39|81.66;Surajpur|सूरजपुर|23.22|82.86;Surguja|सरगुजा अंबिकापुर|23.12|83.20",
  "Goa": "North Goa|उत्तर गोवा पणजी|15.49|73.83;South Goa|दक्षिण गोवा मडगांव|15.27|73.96",
  "Gujarat": "Ahmedabad|अहमदाबाद|23.02|72.57;Amreli|अमरेली|21.60|71.22;Anand|आणंद|22.56|72.93;Aravalli|अरावली मोडासा|23.46|73.30;Banaskantha|बनासकांठा पालनपुर|24.17|72.43;Bharuch|भरूच|21.71|72.99;Bhavnagar|भावनगर|21.76|72.15;Botad|बोटाद|22.17|71.67;Chhota Udaipur|छोटा उदेपुर|22.30|74.01;Dahod|दाहोद|22.83|74.26;Dang|डांग आहवा|20.76|73.69;Devbhumi Dwarka|देवभूमि द्वारका|22.24|68.97;Gandhinagar|गांधीनगर|23.22|72.64;Gir Somnath|गिर सोमनाथ वेरावल|20.91|70.37;Jamnagar|जामनगर|22.47|70.06;Junagadh|जूनागढ़|21.52|70.46;Kheda|खेड़ा नडियाद|22.69|72.86;Kutch|कच्छ भुज|23.24|69.67;Mahisagar|महिसागर लुणावाडा|23.13|73.61;Mehsana|मेहसाणा|23.59|72.37;Morbi|मोरबी|22.82|70.84;Narmada|नर्मदा राजपीपला|21.87|73.50;Navsari|नवसारी|20.95|72.95;Panchmahal|पंचमहल गोधरा|22.78|73.61;Patan|पाटण|23.85|72.13;Porbandar|पोरबंदर|21.64|69.63;Rajkot|राजकोट|22.30|70.80;Sabarkantha|साबरकांठा हिम्मतनगर|23.60|72.96;Surat|सूरत|21.17|72.83;Surendranagar|सुरेंद्रनगर|22.73|71.64;Tapi|तापी व्यारा|21.11|73.40;Vadodara|वडोदरा|22.31|73.18;Valsad|वलसाड|20.60|72.93",
  "Haryana": "Ambala|अंबाला|30.38|76.78;Bhiwani|भिवानी|28.80|76.13;Charkhi Dadri|चरखी दादरी|28.59|76.27;Faridabad|फरीदाबाद|28.41|77.32;Fatehabad|फतेहाबाद|29.52|75.46;Gurugram|गुरुग्राम गुड़गांव|28.46|77.03;Hisar|हिसार|29.15|75.72;Jhajjar|झज्जर|28.61|76.66;Jind|जींद|29.32|76.31;Kaithal|कैथल|29.80|76.40;Karnal|करनाल|29.69|76.99;Kurukshetra|कुरुक्षेत्र|29.97|76.88;Mahendragarh|महेंद्रगढ़ नारनौल|28.04|76.11;Nuh|नूंह मेवात|28.10|77.00;Palwal|पलवल|28.14|77.33;Panchkula|पंचकूला|30.69|76.86;Panipat|पानीपत|29.39|76.96;Rewari|रेवाड़ी|28.20|76.62;Rohtak|रोहतक|28.90|76.61;Sirsa|सिरसा|29.53|75.03;Sonipat|सोनीपत|28.99|77.02;Yamunanagar|यमुनानगर|30.13|77.27",
  "Himachal Pradesh": "Bilaspur|बिलासपुर हिमाचल|31.34|76.76;Chamba|चंबा|32.55|76.13;Hamirpur|हमीरपुर हिमाचल|31.69|76.52;Kangra|कांगड़ा धर्मशाला|32.22|76.32;Kinnaur|किन्नौर रिकांगपिओ|31.54|78.27;Kullu|कुल्लू|31.96|77.11;Lahaul and Spiti|लाहौल स्पीति केलांग|32.57|77.03;Mandi|मंडी|31.71|76.93;Shimla|शिमला|31.10|77.17;Sirmaur|सिरमौर नाहन|30.56|77.29;Solan|सोलन|30.90|77.10;Una|ऊना|31.47|76.27",
  "Jharkhand": "Bokaro|बोकारो|23.67|86.15;Chatra|चतरा|24.21|84.87;Deoghar|देवघर|24.49|86.70;Dhanbad|धनबाद|23.80|86.43;Dumka|दुमका|24.27|87.25;East Singhbhum|पूर्वी सिंहभूम जमशेदपुर|22.80|86.20;Garhwa|गढ़वा|24.16|83.81;Giridih|गिरिडीह|24.19|86.30;Godda|गोड्डा|24.83|87.21;Gumla|गुमला|23.04|84.54;Hazaribagh|हजारीबाग|23.99|85.36;Jamtara|जामताड़ा|23.96|86.80;Khunti|खूंटी|23.07|85.28;Koderma|कोडरमा|24.47|85.59;Latehar|लातेहार|23.74|84.50;Lohardaga|लोहरदगा|23.43|84.68;Pakur|पाकुड़|24.63|87.85;Palamu|पलामू डाल्टनगंज|24.04|84.07;Ramgarh|रामगढ़|23.63|85.52;Ranchi|रांची|23.34|85.31;Sahebganj|साहिबगंज|25.24|87.64;Seraikela Kharsawan|सरायकेला खरसावां|22.70|85.93;Simdega|सिमडेगा|22.62|84.50;West Singhbhum|पश्चिमी सिंहभूम चाईबासा|22.55|85.80",
  "Karnataka": "Bagalkot|बागलकोट|16.17|75.66;Ballari|बल्लारी|15.14|76.92;Belagavi|बेलगावी बेलगाम|15.85|74.50;Bengaluru Rural|बेंगलुरु ग्रामीण|13.29|77.71;Bengaluru Urban|बेंगलुरु|12.97|77.59;Bidar|बीदर|17.91|77.52;Chamarajanagar|चामराजनगर|11.92|76.94;Chikkaballapur|चिक्कबल्लापुर|13.44|77.73;Chikkamagaluru|चिक्कमगलुरु|13.32|75.77;Chitradurga|चित्रदुर्ग|14.23|76.40;Dakshina Kannada|दक्षिण कन्नड़ मंगलुरु|12.91|74.86;Davanagere|दावणगेरे|14.47|75.92;Dharwad|धारवाड़|15.46|75.01;Gadag|गदग|15.43|75.63;Hassan|हासन|13.01|76.10;Haveri|हावेरी|14.79|75.40;Kalaburagi|कलबुर्गी गुलबर्गा|17.33|76.83;Kodagu|कोडगु मडिकेरी|12.42|75.74;Kolar|कोलार|13.14|78.13;Koppal|कोप्पल|15.35|76.15;Mandya|मांड्या|12.52|76.90;Mysuru|मैसूरु मैसूर|12.30|76.64;Raichur|रायचूर|16.21|77.35;Ramanagara|रामनगर|12.72|77.28;Shivamogga|शिवमोग्गा|13.93|75.57;Tumakuru|तुमकुरु|13.34|77.10;Udupi|उडुपी|13.34|74.74;Uttara Kannada|उत्तर कन्नड़ कारवार|14.81|74.13;Vijayanagara|विजयनगर होस्पेट|15.27|76.39;Vijayapura|विजयपुरा बीजापुर|16.83|75.71;Yadgir|यादगीर|16.77|77.14",
  "Kerala": "Alappuzha|अलप्पुझा|9.49|76.33;Ernakulam|एर्नाकुलम कोच्चि|9.98|76.28;Idukki|इडुक्की|9.85|76.97;Kannur|कन्नूर|11.87|75.37;Kasaragod|कासरगोड|12.50|74.99;Kollam|कोल्लम|8.89|76.61;Kottayam|कोट्टायम|9.59|76.52;Kozhikode|कोझिकोड|11.26|75.78;Malappuram|मलप्पुरम|11.05|76.07;Palakkad|पलक्कड़|10.79|76.65;Pathanamthitta|पतनमथिट्टा|9.26|76.79;Thiruvananthapuram|तिरुवनंतपुरम|8.52|76.94;Thrissur|त्रिशूर|10.53|76.21;Wayanad|वायनाड कलपेट्टा|11.61|76.08",
  "Madhya Pradesh": "Agar Malwa|आगर मालवा|23.71|76.01;Alirajpur|अलीराजपुर|22.30|74.36;Anuppur|अनूपपुर|23.10|81.69;Ashoknagar|अशोकनगर|24.58|77.73;Balaghat|बालाघाट|21.81|80.18;Barwani|बड़वानी|22.04|74.90;Betul|बैतूल|21.90|77.90;Bhind|भिंड|26.56|78.79;Bhopal|भोपाल|23.26|77.41;Burhanpur|बुरहानपुर|21.31|76.23;Chhatarpur|छतरपुर|24.92|79.59;Chhindwara|छिंदवाड़ा|22.06|78.94;Damoh|दमोह|23.84|79.44;Datia|दतिया|25.67|78.46;Dewas|देवास|22.97|76.05;Dhar|धार|22.60|75.30;Dindori|डिंडोरी|22.94|81.08;Guna|गुना|24.65|77.31;Gwalior|ग्वालियर|26.22|78.18;Harda|हरदा|22.34|77.09;Indore|इंदौर|22.72|75.86;Jabalpur|जबलपुर|23.18|79.99;Jhabua|झाबुआ|22.77|74.59;Katni|कटनी|23.83|80.40;Khandwa|खंडवा|21.83|76.35;Khargone|खरगोन|21.82|75.61;Maihar|मैहर|24.27|80.76;Mandla|मंडला|22.60|80.37;Mandsaur|मंदसौर|24.07|75.07;Mauganj|मऊगंज|24.67|81.88;Morena|मुरैना|26.50|78.00;Narmadapuram|नर्मदापुरम होशंगाबाद|22.75|77.73;Narsinghpur|नरसिंहपुर|22.95|79.19;Neemuch|नीमच|24.47|74.87;Niwari|निवाड़ी|25.36|78.80;Pandhurna|पांढुर्ना|21.60|78.52;Panna|पन्ना|24.72|80.19;Raisen|रायसेन|23.33|77.78;Rajgarh|राजगढ़|24.01|76.73;Ratlam|रतलाम|23.33|75.04;Rewa|रीवा|24.53|81.30;Sagar|सागर|23.84|78.74;Satna|सतना|24.60|80.83;Sehore|सीहोर|23.20|77.08;Seoni|सिवनी|22.09|79.54;Shahdol|शहडोल|23.30|81.36;Shajapur|शाजापुर|23.43|76.27;Sheopur|श्योपुर|25.67|76.70;Shivpuri|शिवपुरी|25.43|77.66;Sidhi|सीधी|24.41|81.88;Singrauli|सिंगरौली|24.20|82.66;Tikamgarh|टीकमगढ़|24.74|78.83;Ujjain|उज्जैन|23.18|75.78;Umaria|उमरिया|23.52|80.84;Vidisha|विदिशा|23.53|77.81",
  "Maharashtra": "Ahmednagar|अहमदनगर अहिल्यानगर|19.09|74.75;Akola|अकोला|20.70|77.01;Amravati|अमरावती|20.93|77.75;Beed|बीड|18.99|75.76;Bhandara|भंडारा|21.17|79.65;Buldhana|बुलढाणा|20.53|76.18;Chandrapur|चंद्रपुर|19.96|79.30;Chhatrapati Sambhajinagar|छत्रपति संभाजीनगर औरंगाबाद|19.88|75.34;Dharashiv|धाराशिव उस्मानाबाद|18.18|76.04;Dhule|धुले|20.90|74.77;Gadchiroli|गढ़चिरौली|20.18|80.00;Gondia|गोंदिया|21.46|80.19;Hingoli|हिंगोली|19.72|77.15;Jalgaon|जलगांव|21.01|75.56;Jalna|जालना|19.84|75.88;Kolhapur|कोल्हापुर|16.71|74.24;Latur|लातूर|18.41|76.56;Mumbai City|मुंबई|18.94|72.83;Mumbai Suburban|मुंबई उपनगर|19.12|72.86;Nagpur|नागपुर|21.15|79.09;Nanded|नांदेड़|19.14|77.32;Nandurbar|नंदुरबार|21.37|74.24;Nashik|नासिक|20.00|73.79;Palghar|पालघर|19.70|72.77;Parbhani|परभणी|19.26|76.77;Pune|पुणे|18.52|73.86;Raigad|रायगढ़ अलीबाग|18.65|72.88;Ratnagiri|रत्नागिरी|16.99|73.31;Sangli|सांगली|16.85|74.58;Satara|सातारा|17.68|74.02;Sindhudurg|सिंधुदुर्ग|16.11|73.70;Solapur|सोलापुर|17.66|75.91;Thane|ठाणे|19.22|72.98;Wardha|वर्धा|20.75|78.60;Washim|वाशिम|20.11|77.13;Yavatmal|यवतमाल|20.39|78.13",
  "Manipur": "Bishnupur|बिष्णुपुर|24.63|93.77;Chandel|चंदेल|24.33|94.00;Churachandpur|चूड़ाचांदपुर|24.33|93.68;Imphal East|पूर्वी इंफाल|24.82|93.96;Imphal West|पश्चिमी इंफाल|24.81|93.94;Jiribam|जिरीबाम|24.80|93.12;Kakching|ककचिंग|24.50|93.98;Kamjong|कामजोंग|24.86|94.52;Kangpokpi|कांगपोकपी|25.15|93.97;Noney|नोनी|24.87|93.63;Pherzawl|फेरजॉल|24.26|93.21;Senapati|सेनापति|25.27|94.02;Tamenglong|तामेंगलोंग|24.99|93.50;Tengnoupal|तेंगनौपाल|24.38|94.15;Thoubal|थौबल|24.63|94.00;Ukhrul|उखरुल|25.10|94.36",
  "Meghalaya": "East Garo Hills|पूर्वी गारो हिल्स|25.50|90.62;East Jaintia Hills|पूर्वी जयंतिया हिल्स|25.36|92.37;East Khasi Hills|पूर्वी खासी हिल्स शिलांग|25.58|91.89;Eastern West Khasi Hills|पूर्वी पश्चिमी खासी हिल्स|25.56|91.61;North Garo Hills|उत्तरी गारो हिल्स|25.89|90.62;Ri Bhoi|री भोई नोंगपोह|25.90|91.88;South Garo Hills|दक्षिण गारो हिल्स|25.20|90.64;South West Garo Hills|दक्षिण पश्चिम गारो हिल्स|25.47|89.94;South West Khasi Hills|दक्षिण पश्चिम खासी हिल्स|25.32|91.26;West Garo Hills|पश्चिम गारो हिल्स तुरा|25.51|90.22;West Jaintia Hills|पश्चिम जयंतिया हिल्स जोवाई|25.45|92.20;West Khasi Hills|पश्चिम खासी हिल्स नोंगस्टोइन|25.52|91.26",
  "Mizoram": "Aizawl|आइजोल|23.73|92.72;Champhai|चम्फाई|23.46|93.33;Hnahthial|हनाथियाल|22.97|92.93;Khawzawl|खौजोल|23.53|93.18;Kolasib|कोलासिब|24.23|92.68;Lawngtlai|लोंग्तलाई|22.53|92.89;Lunglei|लुंगलेई|22.89|92.73;Mamit|ममित|23.93|92.49;Saiha|सैहा सियाहा|22.49|92.98;Saitual|सैतुअल|23.70|92.96;Serchhip|सेरछिप|23.34|92.86",
  "Nagaland": "Chumoukedima|चुमौकेदिमा|25.79|93.78;Dimapur|दीमापुर|25.91|93.73;Kiphire|किफिरे|25.89|94.78;Kohima|कोहिमा|25.67|94.11;Longleng|लोंगलेंग|26.49|94.81;Mokokchung|मोकोकचुंग|26.32|94.52;Mon|मोन|26.73|95.04;Niuland|निउलैंड|25.91|93.86;Noklak|नोकलाक|26.19|94.99;Peren|पेरेन|25.51|93.74;Phek|फेक|25.66|94.47;Shamator|शमातोर|26.07|94.86;Tseminyu|त्सेमिन्यू|25.93|94.22;Tuensang|तुएनसांग|26.27|94.82;Wokha|वोखा|26.09|94.26;Zunheboto|जुनहेबोटो|26.01|94.52",
  "Odisha": "Angul|अंगुल|20.84|85.10;Balangir|बलांगीर|20.70|83.48;Balasore|बालासोर|21.49|86.93;Bargarh|बरगढ़|21.33|83.62;Bhadrak|भद्रक|21.06|86.50;Boudh|बौद्ध|20.84|84.33;Cuttack|कटक|20.46|85.88;Deogarh|देवगढ़ ओडिशा|21.54|84.73;Dhenkanal|ढेंकनाल|20.66|85.60;Gajapati|गजपति|18.78|84.10;Ganjam|गंजाम छत्रपुर|19.35|84.99;Jagatsinghpur|जगतसिंहपुर|20.26|86.17;Jajpur|जाजपुर|20.85|86.34;Jharsuguda|झारसुगुड़ा|21.86|84.01;Kalahandi|कालाहांडी भवानीपटना|19.91|83.17;Kandhamal|कंधमाल फुलबनी|20.48|84.23;Kendrapara|केंद्रपाड़ा|20.50|86.42;Kendujhar|क्योंझर|21.63|85.58;Khordha|खोरधा भुवनेश्वर|20.18|85.62;Koraput|कोरापुट|18.81|82.71;Malkangiri|मलकानगिरी|18.35|81.89;Mayurbhanj|मयूरभंज बारीपदा|21.93|86.73;Nabarangpur|नवरंगपुर|19.23|82.55;Nayagarh|नयागढ़|20.13|85.10;Nuapada|नुआपड़ा|20.81|82.54;Puri|पुरी|19.81|85.83;Rayagada|रायगढ़ा|19.17|83.42;Sambalpur|संबलपुर|21.47|83.98;Subarnapur|सुवर्णपुर सोनपुर|20.83|83.92;Sundargarh|सुंदरगढ़|22.12|84.03",
  "Punjab": "Amritsar|अमृतसर|31.63|74.87;Barnala|बरनाला|30.38|75.55;Bathinda|बठिंडा|30.21|74.95;Faridkot|फरीदकोट|30.67|74.76;Fatehgarh Sahib|फतेहगढ़ साहिब|30.64|76.39;Fazilka|फाजिल्का|30.40|74.03;Ferozepur|फिरोजपुर|30.93|74.61;Gurdaspur|गुरदासपुर|32.04|75.41;Hoshiarpur|होशियारपुर|31.51|75.91;Jalandhar|जालंधर|31.33|75.58;Kapurthala|कपूरथला|31.38|75.38;Ludhiana|लुधियाना|30.90|75.86;Malerkotla|मालेरकोटला|30.53|75.88;Mansa|मानसा|29.99|75.40;Moga|मोगा|30.82|75.17;Pathankot|पठानकोट|32.27|75.65;Patiala|पटियाला|30.34|76.39;Rupnagar|रूपनगर रोपड़|30.97|76.53;Sahibzada Ajit Singh Nagar|मोहाली|30.70|76.72;Sangrur|संगरूर|30.25|75.84;Shaheed Bhagat Singh Nagar|नवांशहर|31.13|76.12;Sri Muktsar Sahib|मुक्तसर|30.48|74.52;Tarn Taran|तरनतारन|31.45|74.93",
  "Rajasthan": "Ajmer|अजमेर|26.45|74.64;Alwar|अलवर|27.55|76.63;Anupgarh|अनूपगढ़|29.19|73.21;Balotra|बालोतरा|25.83|72.24;Banswara|बांसवाड़ा|23.54|74.44;Baran|बारां|25.10|76.51;Barmer|बाड़मेर|25.75|71.39;Beawar|ब्यावर|26.10|74.32;Bharatpur|भरतपुर|27.22|77.49;Bhilwara|भीलवाड़ा|25.35|74.64;Bikaner|बीकानेर|28.02|73.31;Bundi|बूंदी|25.43|75.64;Chittorgarh|चित्तौड़गढ़|24.89|74.63;Churu|चूरू|28.29|74.96;Dausa|दौसा|26.89|76.33;Deeg|डीग|27.47|77.33;Dholpur|धौलपुर|26.70|77.89;Didwana-Kuchaman|डीडवाना कुचामन|27.40|74.57;Dudu|दूदू|26.68|75.23;Dungarpur|डूंगरपुर|23.84|73.71;Gangapur City|गंगापुर सिटी|26.47|76.72;Hanumangarh|हनुमानगढ़|29.58|74.33;Jaipur|जयपुर|26.91|75.79;Jaipur Rural|जयपुर ग्रामीण|26.95|75.85;Jaisalmer|जैसलमेर|26.92|70.91;Jalore|जालोर|25.35|72.62;Jhalawar|झालावाड़|24.60|76.16;Jhunjhunu|झुंझुनू|28.13|75.40;Jodhpur|जोधपुर|26.24|73.02;Jodhpur Rural|जोधपुर ग्रामीण|26.30|73.08;Karauli|करौली|26.50|77.02;Kekri|केकड़ी|25.97|75.15;Khairthal-Tijara|खैरथल तिजारा|27.80|76.64;Kota|कोटा|25.21|75.86;Kotputli-Behror|कोटपूतली बहरोड़|27.70|76.20;Nagaur|नागौर|27.20|73.74;Neem Ka Thana|नीम का थाना|27.74|75.78;Pali|पाली|25.77|73.32;Phalodi|फलौदी|27.13|72.37;Pratapgarh|प्रतापगढ़ राजस्थान|24.03|74.78;Rajsamand|राजसमंद|25.07|73.88;Salumbar|सलूंबर|24.14|74.05;Sanchore|सांचौर|24.75|71.77;Sawai Madhopur|सवाई माधोपुर|26.02|76.35;Shahpura|शाहपुरा|25.62|74.93;Sikar|सीकर|27.61|75.14;Sirohi|सिरोही|24.88|72.86;Sri Ganganagar|श्री गंगानगर|29.90|73.88;Tonk|टोंक|26.17|75.79;Udaipur|उदयपुर|24.59|73.71",
  "Sikkim": "Gangtok|गंगटोक|27.33|88.61;Gyalshing|ग्यालशिंग|27.29|88.26;Mangan|मंगन|27.51|88.53;Namchi|नामची|27.17|88.36;Pakyong|पाक्योंग|27.24|88.59;Soreng|सोरेंग|27.17|88.20",
  "Tamil Nadu": "Ariyalur|अरियालुर|11.14|79.08;Chengalpattu|चेंगलपट्टू|12.69|79.98;Chennai|चेन्नई|13.08|80.27;Coimbatore|कोयंबटूर|11.02|76.96;Cuddalore|कड्डालोर|11.75|79.77;Dharmapuri|धर्मपुरी|12.12|78.16;Dindigul|डिंडीगुल|10.37|77.98;Erode|इरोड|11.34|77.72;Kallakurichi|कल्लाकुरिची|11.74|78.96;Kanchipuram|कांचीपुरम|12.83|79.70;Kanyakumari|कन्याकुमारी नागरकोइल|8.18|77.41;Karur|करूर|10.96|78.08;Krishnagiri|कृष्णगिरी|12.52|78.21;Madurai|मदुरै|9.93|78.12;Mayiladuthurai|मयिलादुथुरै|11.10|79.65;Nagapattinam|नागपट्टिनम|10.77|79.84;Namakkal|नामक्कल|11.22|78.17;Nilgiris|नीलगिरी ऊटी|11.41|76.70;Perambalur|पेराम्बलुर|11.23|78.88;Pudukkottai|पुदुक्कोट्टई|10.38|78.82;Ramanathapuram|रामनाथपुरम रामेश्वरम|9.36|78.84;Ranipet|रानीपेट|12.93|79.33;Salem|सेलम|11.66|78.15;Sivaganga|शिवगंगा|9.84|78.48;Tenkasi|तेनकासी|8.96|77.32;Thanjavur|तंजावुर|10.79|79.14;Theni|थेनी|10.01|77.48;Thoothukudi|तूतीकोरिन|8.76|78.13;Tiruchirappalli|तिरुचिरापल्ली त्रिची|10.79|78.70;Tirunelveli|तिरुनेलवेली|8.71|77.76;Tirupathur|तिरुपत्तूर|12.50|78.57;Tiruppur|तिरुपुर|11.11|77.34;Tiruvallur|तिरुवल्लूर|13.14|79.91;Tiruvannamalai|तिरुवन्नामलाई|12.23|79.07;Tiruvarur|तिरुवरूर|10.77|79.64;Vellore|वेल्लोर|12.92|79.13;Viluppuram|विलुप्पुरम|11.94|79.49;Virudhunagar|विरुधुनगर|9.59|77.96",
  "Telangana": "Adilabad|आदिलाबाद|19.66|78.53;Bhadradri Kothagudem|भद्राद्री कोठागुडेम|17.55|80.62;Hanumakonda|हनुमाकोंडा|18.00|79.56;Hyderabad|हैदराबाद|17.39|78.49;Jagtial|जगतियाल|18.79|78.91;Jangaon|जनगांव|17.73|79.15;Jayashankar Bhupalpally|जयशंकर भूपालपल्ली|18.43|79.86;Jogulamba Gadwal|गदवाल|16.23|77.80;Kamareddy|कामारेड्डी|18.32|78.34;Karimnagar|करीमनगर|18.44|79.13;Khammam|खम्मम|17.25|80.15;Komaram Bheem Asifabad|आसिफाबाद|19.36|79.29;Mahabubabad|महबूबाबाद|17.60|80.00;Mahabubnagar|महबूबनगर|16.75|78.00;Mancherial|मंचेरियल|18.87|79.44;Medak|मेडक|18.05|78.26;Medchal-Malkajgiri|मेडचल मलकाजगिरी|17.63|78.48;Mulugu|मुलुगु|18.19|79.94;Nagarkurnool|नगरकुरनूल|16.48|78.32;Nalgonda|नलगोंडा|17.06|79.27;Narayanpet|नारायणपेट|16.75|77.50;Nirmal|निर्मल|19.10|78.34;Nizamabad|निजामाबाद|18.67|78.09;Peddapalli|पेड्डापल्ली|18.62|79.38;Rajanna Sircilla|सिरसिला|18.39|78.81;Rangareddy|रंगारेड्डी|17.31|78.48;Sangareddy|संगारेड्डी|17.62|78.08;Siddipet|सिद्दीपेट|18.10|78.85;Suryapet|सूर्यापेट|17.14|79.62;Vikarabad|विकाराबाद|17.34|77.90;Wanaparthy|वनपर्ती|16.36|78.06;Warangal|वारंगल|17.97|79.59;Yadadri Bhuvanagiri|यादाद्री भुवनगिरी|17.51|78.89",
  "Tripura": "Dhalai|धलाई अंबासा|23.92|91.85;Gomati|गोमती उदयपुर त्रिपुरा|23.53|91.49;Khowai|खोवाई|24.07|91.60;North Tripura|उत्तर त्रिपुरा धर्मनगर|24.37|92.17;Sepahijala|सिपाहीजला|23.66|91.32;South Tripura|दक्षिण त्रिपुरा बेलोनिया|23.25|91.45;Unakoti|उनाकोटी कैलाशहर|24.33|92.00;West Tripura|पश्चिम त्रिपुरा अगरतला|23.83|91.29",
  "Uttar Pradesh": "Agra|आगरा|27.18|78.01;Aligarh|अलीगढ़|27.90|78.08;Ambedkar Nagar|अंबेडकर नगर|26.41|82.66;Amethi|अमेठी|26.15|81.81;Amroha|अमरोहा|28.90|78.47;Auraiya|औरैया|26.47|79.51;Ayodhya|अयोध्या फैजाबाद|26.79|82.19;Azamgarh|आजमगढ़|26.07|83.19;Baghpat|बागपत|28.94|77.22;Bahraich|बहराइच|27.57|81.60;Ballia|बलिया|25.76|84.15;Balrampur|बलरामपुर यूपी|27.43|82.18;Banda|बांदा|25.48|80.34;Barabanki|बाराबंकी|26.93|81.19;Bareilly|बरेली|28.37|79.43;Basti|बस्ती|26.81|82.76;Bhadohi|भदोही|25.39|82.57;Bijnor|बिजनौर|29.37|78.14;Budaun|बदायूं|28.04|79.13;Bulandshahr|बुलंदशहर|28.41|77.85;Chandauli|चंदौली|25.26|83.27;Chitrakoot|चित्रकूट|25.20|80.86;Deoria|देवरिया|26.50|83.78;Etah|एटा|27.56|78.67;Etawah|इटावा|26.79|79.02;Farrukhabad|फर्रुखाबाद|27.39|79.58;Fatehpur|फतेहपुर|25.93|80.81;Firozabad|फिरोजाबाद|27.16|78.40;Gautam Buddha Nagar|गौतम बुद्ध नगर नोएडा|28.47|77.50;Ghaziabad|गाजियाबाद|28.67|77.45;Ghazipur|गाजीपुर|25.59|83.58;Gonda|गोंडा|27.13|81.96;Gorakhpur|गोरखपुर|26.76|83.37;Hamirpur|हमीरपुर यूपी|25.95|80.15;Hapur|हापुड़|28.73|77.78;Hardoi|हरदोई|27.40|80.13;Hathras|हाथरस|27.60|78.05;Jalaun|जालौन उरई|25.99|79.45;Jaunpur|जौनपुर|25.75|82.68;Jhansi|झांसी|25.45|78.57;Kannauj|कन्नौज|27.05|79.92;Kanpur Dehat|कानपुर देहात|26.40|79.95;Kanpur Nagar|कानपुर|26.45|80.33;Kasganj|कासगंज|27.81|78.65;Kaushambi|कौशाम्बी|25.53|81.38;Kheri|लखीमपुर खीरी|27.95|80.78;Kushinagar|कुशीनगर पडरौना|26.74|83.89;Lalitpur|ललितपुर|24.69|78.42;Lucknow|लखनऊ|26.85|80.95;Maharajganj|महाराजगंज|27.14|83.56;Mahoba|महोबा|25.29|79.87;Mainpuri|मैनपुरी|27.23|79.03;Mathura|मथुरा|27.49|77.67;Mau|मऊ|25.94|83.56;Meerut|मेरठ|28.98|77.71;Mirzapur|मिर्जापुर|25.13|82.56;Moradabad|मुरादाबाद|28.84|78.77;Muzaffarnagar|मुजफ्फरनगर|29.47|77.71;Pilibhit|पीलीभीत|28.63|79.80;Pratapgarh|प्रतापगढ़ यूपी|25.90|81.94;Prayagraj|प्रयागराज इलाहाबाद|25.44|81.85;Raebareli|रायबरेली|26.23|81.24;Rampur|रामपुर|28.80|79.02;Saharanpur|सहारनपुर|29.97|77.55;Sambhal|संभल|28.59|78.57;Sant Kabir Nagar|संत कबीर नगर खलीलाबाद|26.78|83.07;Shahjahanpur|शाहजहांपुर|27.88|79.91;Shamli|शामली|29.45|77.31;Shravasti|श्रावस्ती|27.50|82.05;Siddharthnagar|सिद्धार्थनगर|27.28|83.10;Sitapur|सीतापुर|27.56|80.68;Sonbhadra|सोनभद्र रॉबर्ट्सगंज|24.69|83.07;Sultanpur|सुल्तानपुर|26.26|82.07;Unnao|उन्नाव|26.55|80.49;Varanasi|वाराणसी काशी|25.32|82.97",
  "Uttarakhand": "Almora|अल्मोड़ा|29.60|79.66;Bageshwar|बागेश्वर|29.84|79.77;Chamoli|चमोली गोपेश्वर|30.41|79.32;Champawat|चंपावत|29.34|80.09;Dehradun|देहरादून|30.32|78.03;Haridwar|हरिद्वार|29.95|78.16;Nainital|नैनीताल|29.39|79.45;Pauri Garhwal|पौड़ी गढ़वाल|30.15|78.78;Pithoragarh|पिथौरागढ़|29.58|80.22;Rudraprayag|रुद्रप्रयाग|30.28|78.98;Tehri Garhwal|टिहरी गढ़वाल|30.38|78.43;Udham Singh Nagar|उधम सिंह नगर रुद्रपुर|28.98|79.40;Uttarkashi|उत्तरकाशी|30.73|78.44",
  "West Bengal": "Alipurduar|अलीपुरद्वार|26.49|89.53;Bankura|बांकुड़ा|23.23|87.07;Birbhum|बीरभूम सिउड़ी|23.91|87.53;Cooch Behar|कूच बिहार|26.32|89.45;Dakshin Dinajpur|दक्षिण दिनाजपुर बालुरघाट|25.22|88.77;Darjeeling|दार्जिलिंग|27.04|88.26;Hooghly|हुगली|22.90|88.39;Howrah|हावड़ा|22.59|88.26;Jalpaiguri|जलपाईगुड़ी|26.52|88.73;Jhargram|झाड़ग्राम|22.45|86.99;Kalimpong|कलिम्पोंग|27.06|88.47;Kolkata|कोलकाता|22.57|88.36;Malda|मालदा|25.01|88.14;Murshidabad|मुर्शिदाबाद बहरामपुर|24.10|88.25;Nadia|नदिया कृष्णानगर|23.41|88.50;North 24 Parganas|उत्तर 24 परगना बारासात|22.72|88.48;Paschim Bardhaman|पश्चिम बर्धमान आसनसोल|23.68|86.98;Paschim Medinipur|पश्चिम मेदिनीपुर|22.42|87.32;Purba Bardhaman|पूर्व बर्धमान|23.23|87.86;Purba Medinipur|पूर्व मेदिनीपुर तामलुक|22.30|87.92;Purulia|पुरुलिया|23.33|86.36;South 24 Parganas|दक्षिण 24 परगना अलीपुर|22.53|88.33;Uttar Dinajpur|उत्तर दिनाजपुर रायगंज|25.62|88.12",
  "Andaman and Nicobar Islands": "Nicobar|निकोबार|9.17|92.78;North and Middle Andaman|उत्तर व मध्य अंडमान|12.92|92.90;South Andaman|दक्षिण अंडमान पोर्ट ब्लेयर|11.62|92.73",
  "Chandigarh": "Chandigarh|चंडीगढ़|30.73|76.78",
  "Dadra and Nagar Haveli and Daman and Diu": "Dadra and Nagar Haveli|दादरा व नगर हवेली सिलवासा|20.27|73.01;Daman|दमन|20.40|72.83;Diu|दीव|20.71|70.99",
  "Delhi": "Central Delhi|मध्य दिल्ली|28.65|77.24;East Delhi|पूर्वी दिल्ली|28.63|77.29;New Delhi|नई दिल्ली|28.61|77.21;North Delhi|उत्तरी दिल्ली|28.70|77.21;North East Delhi|उत्तर पूर्वी दिल्ली|28.69|77.28;North West Delhi|उत्तर पश्चिमी दिल्ली|28.74|77.11;Shahdara|शाहदरा दिल्ली|28.67|77.29;South Delhi|दक्षिण दिल्ली|28.53|77.22;South East Delhi|दक्षिण पूर्वी दिल्ली|28.55|77.26;South West Delhi|दक्षिण पश्चिमी दिल्ली|28.58|77.07;West Delhi|पश्चिमी दिल्ली|28.65|77.10",
  "Jammu and Kashmir": "Anantnag|अनंतनाग|33.73|75.15;Bandipora|बांदीपोरा|34.42|74.64;Baramulla|बारामूला|34.20|74.34;Budgam|बडगाम|34.02|74.73;Doda|डोडा|33.15|75.55;Ganderbal|गांदरबल|34.22|74.77;Jammu|जम्मू|32.73|74.86;Kathua|कठुआ|32.37|75.52;Kishtwar|किश्तवाड़|33.31|75.77;Kulgam|कुलगाम|33.64|75.02;Kupwara|कुपवाड़ा|34.53|74.26;Poonch|पुंछ|33.77|74.09;Pulwama|पुलवामा|33.87|74.90;Rajouri|राजौरी|33.38|74.31;Ramban|रामबन|33.24|75.24;Reasi|रियासी कटरा|33.08|74.84;Samba|सांबा|32.55|75.11;Shopian|शोपियां|33.72|74.83;Srinagar|श्रीनगर|34.08|74.80;Udhampur|उधमपुर|32.92|75.14",
  "Ladakh": "Kargil|कारगिल|34.56|76.13;Leh|लेह|34.15|77.58",
  "Lakshadweep": "Lakshadweep|लक्षद्वीप कवरत्ती|10.57|72.64",
  "Puducherry": "Karaikal|कराईकल|10.93|79.84;Mahe|माहे|11.70|75.54;Puducherry|पुडुचेरी|11.94|79.81;Yanam|यनम|16.73|82.22"
};
let _unpackedCache = null;
function ensureUnpackedDistricts() {
  if (_unpackedCache) return _unpackedCache;
  const list = [];
  for (const [state, raw] of Object.entries(PACKED_INDIA_DISTRICTS)) {
    const stateLower = state.toLowerCase();
    const stateSlug = stateLower.replace(/[^a-z0-9]+/g, "_");
    const items = raw.split(";");
    for (const item of items) {
      if (!item) continue;
      const [enName, hiName, latStr, lonStr] = item.split("|");
      const lat = Number(latStr);
      const lon = Number(lonStr);
      if (!enName || !Number.isFinite(lat) || !Number.isFinite(lon)) continue;
      const slug = enName.toLowerCase().replace(/[^a-z0-9]+/g, "_");
      const loc = {
        id: `ind_dist_${stateSlug}_${slug}`,
        name: `${enName}, ${state}`,
        hindiName: `${hiName || enName}, ${state}`,
        district: enName,
        state,
        country: "India",
        lat,
        lon,
        timezone: "Asia/Kolkata",
        tzOffsetHours: 5.5,
        source: "manual"
      };
      const enLower = enName.toLowerCase();
      const hiLower = (hiName || enName).toLowerCase();
      list.push({
        location: loc,
        searchNorm: `${enLower} ${hiLower} ${stateLower}`,
        enLower,
        hiLower,
        stateLower
      });
    }
  }
  _unpackedCache = list;
  return list;
}
function searchOfflineIndianDistricts(query, limit = 10) {
  const q = (query || "").trim().toLowerCase();
  if (q.length < 2) return [];
  const all = ensureUnpackedDistricts();
  const exact = [];
  const prefix = [];
  const partial = [];
  for (const entry of all) {
    if (entry.enLower === q || entry.hiLower === q) {
      exact.push(entry.location);
    } else if (entry.enLower.startsWith(q) || entry.hiLower.startsWith(q) || entry.hiLower.split(/\s+/).some((tok) => tok.startsWith(q))) {
      prefix.push(entry.location);
    } else if (entry.searchNorm.includes(q)) {
      partial.push(entry.location);
    }
  }
  return [...exact, ...prefix, ...partial].slice(0, limit);
}
function resolveOfflineIndianDistrict(query) {
  const raw = (query || "").trim().toLowerCase();
  if (raw.length < 2) return null;
  const all = ensureUnpackedDistricts();
  const primaryToken = raw.split(",")[0].trim();
  for (const entry of all) {
    if (entry.enLower === raw || entry.hiLower === raw || entry.location.name.toLowerCase() === raw || entry.location.hindiName.toLowerCase() === raw) {
      return entry.location;
    }
  }
  for (const entry of all) {
    if (entry.enLower === primaryToken || entry.hiLower === primaryToken || entry.hiLower.split(/\s+/).includes(primaryToken)) {
      const parts = raw.split(",").map((p) => p.trim()).filter(Boolean);
      if (parts.length > 1) {
        const stateHint = parts[1];
        if (!entry.stateLower.includes(stateHint) && !entry.hiLower.includes(stateHint)) {
          continue;
        }
      }
      return entry.location;
    }
  }
  return null;
}
function findNearestOfflineIndianDistrict(lat, lon) {
  if (!Number.isFinite(lat) || !Number.isFinite(lon)) return null;
  const toRad = (deg) => deg * Math.PI / 180;
  let closest = null;
  let minKm = Infinity;
  for (const entry of ensureUnpackedDistricts()) {
    const dLat = toRad(entry.location.lat - lat);
    const dLon = toRad(entry.location.lon - lon);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(toRad(lat)) * Math.cos(toRad(entry.location.lat)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const km = 6371 * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    if (km < minKm) {
      minKm = km;
      closest = entry.location;
    }
  }
  return closest ? { location: closest, distanceKm: minKm } : null;
}
const INTERNATIONAL_BIRTH_GAZETTEER = [
  // USA
  {
    tokens: ["new york", "nyc", "manhattan", "brooklyn", "queens", "new jersey", "newark", "jersey city", "boston", "philadelphia", "washington", "atlanta", "miami", "orlando", "charlotte", "detroit", "न्यूयॉर्क"],
    label: "New York, USA",
    hindiLabel: "न्यूयॉर्क, अमेरिका (USA)",
    country: "USA",
    lat: 40.7128,
    lon: -74.006,
    timeZone: "America/New_York"
  },
  {
    tokens: ["chicago", "dallas", "houston", "austin", "san antonio", "minneapolis", "st. louis", "nashville", "new orleans", "शिकागो", "ह्यूस्टन", "डलास"],
    label: "Chicago, USA",
    hindiLabel: "शिकागो, अमेरिका (USA)",
    country: "USA",
    lat: 41.8781,
    lon: -87.6298,
    timeZone: "America/Chicago"
  },
  {
    tokens: ["denver", "salt lake", "albuquerque", "colorado", "डेनवर"],
    label: "Denver, USA",
    hindiLabel: "डेनवर, अमेरिका (USA)",
    country: "USA",
    lat: 39.7392,
    lon: -104.9903,
    timeZone: "America/Denver",
    elevationMeters: 1609
  },
  {
    tokens: ["phoenix", "arizona", "tucson", "scottsdale", "फ़ीनिक्स"],
    label: "Phoenix, Arizona, USA",
    hindiLabel: "फ़ीनिक्स, एरिज़ोना (USA)",
    country: "USA",
    lat: 33.4484,
    lon: -112.074,
    timeZone: "America/Phoenix"
  },
  {
    tokens: ["los angeles", "san francisco", "san jose", "san diego", "seattle", "portland", "las vegas", "sacramento", "california", "लॉस एंजेलिस", "सैन फ्रांसिस्को", "सिएटल"],
    label: "Los Angeles, USA",
    hindiLabel: "लॉस एंजेलिस, अमेरिका (USA)",
    country: "USA",
    lat: 34.0522,
    lon: -118.2437,
    timeZone: "America/Los_Angeles"
  },
  {
    tokens: ["honolulu", "hawaii", "होनोलुलु"],
    label: "Honolulu, Hawaii, USA",
    hindiLabel: "होनोलुलु, हवाई (USA)",
    country: "USA",
    lat: 21.3069,
    lon: -157.8583,
    timeZone: "Pacific/Honolulu"
  },
  {
    tokens: ["anchorage", "alaska"],
    label: "Anchorage, Alaska, USA",
    hindiLabel: "एंकोरेज, अलास्का (USA)",
    country: "USA",
    lat: 61.2181,
    lon: -149.9003,
    timeZone: "America/Anchorage"
  },
  // UK
  {
    tokens: ["london", "manchester", "birmingham", "leeds", "liverpool", "bristol", "oxford", "cambridge", "edinburgh", "glasgow", "belfast", "cardiff", "uk", "united kingdom", "england", "britain", "लंदन", "ब्रिटेन", "इंग्लैंड"],
    label: "London, United Kingdom",
    hindiLabel: "लंदन, ब्रिटेन (UK)",
    country: "UK",
    lat: 51.5074,
    lon: -0.1278,
    timeZone: "Europe/London"
  },
  // UAE & Gulf
  {
    tokens: ["dubai", "abu dhabi", "sharjah", "ajman", "ras al khaimah", "fujairah", "uae", "emirates", "दुबई", "अबू धाबी", "शारजाह", "यूएई"],
    label: "Dubai, UAE",
    hindiLabel: "दुबई, संयुक्त अरब अमीरात (UAE)",
    country: "UAE",
    lat: 25.2048,
    lon: 55.2708,
    timeZone: "Asia/Dubai"
  },
  {
    tokens: ["riyadh", "jeddah", "dammam", "mecca", "medina", "saudi", "रियाद"],
    label: "Riyadh, Saudi Arabia",
    hindiLabel: "रियाद, सऊदी अरब",
    country: "Saudi Arabia",
    lat: 24.7136,
    lon: 46.6753,
    timeZone: "Asia/Riyadh"
  },
  {
    tokens: ["doha", "qatar", "दोहा", "क़तर"],
    label: "Doha, Qatar",
    hindiLabel: "दोहा, क़तर",
    country: "Qatar",
    lat: 25.2854,
    lon: 51.531,
    timeZone: "Asia/Qatar"
  },
  {
    tokens: ["muscat", "oman", "मस्कट"],
    label: "Muscat, Oman",
    hindiLabel: "मस्कट, ओमान",
    country: "Oman",
    lat: 23.588,
    lon: 58.3829,
    timeZone: "Asia/Muscat"
  },
  {
    tokens: ["kuwait", "kuwait city", "कुवैत"],
    label: "Kuwait City, Kuwait",
    hindiLabel: "कुवैत सिटी, कुवैत",
    country: "Kuwait",
    lat: 29.3759,
    lon: 47.9774,
    timeZone: "Asia/Kuwait"
  },
  {
    tokens: ["manama", "bahrain", "बहरीन"],
    label: "Manama, Bahrain",
    hindiLabel: "मनामा, बहरीन",
    country: "Bahrain",
    lat: 26.2285,
    lon: 50.586,
    timeZone: "Asia/Bahrain"
  },
  // Canada
  {
    tokens: ["toronto", "brampton", "mississauga", "ottawa", "montreal", "hamilton", "waterloo", "ontario", "quebec", "canada", "टोरंटो", "ब्रैम्पटन", "मॉन्ट्रियल", "कनाडा"],
    label: "Toronto, Canada",
    hindiLabel: "टोरंटो, कनाडा",
    country: "Canada",
    lat: 43.6532,
    lon: -79.3832,
    timeZone: "America/Toronto"
  },
  {
    tokens: ["vancouver", "surrey", "victoria", "british columbia", "वैंकूवर"],
    label: "Vancouver, Canada",
    hindiLabel: "वैंकूवर, कनाडा",
    country: "Canada",
    lat: 49.2827,
    lon: -123.1207,
    timeZone: "America/Vancouver"
  },
  {
    tokens: ["calgary", "edmonton", "alberta", "कैलगरी", "एडमोंटन"],
    label: "Calgary, Canada",
    hindiLabel: "कैलगरी, कनाडा",
    country: "Canada",
    lat: 51.0447,
    lon: -114.0719,
    timeZone: "America/Edmonton",
    elevationMeters: 1045
  },
  {
    tokens: ["winnipeg", "manitoba"],
    label: "Winnipeg, Canada",
    hindiLabel: "विनीपेग, कनाडा",
    country: "Canada",
    lat: 49.8951,
    lon: -97.1384,
    timeZone: "America/Winnipeg"
  },
  // Australia & New Zealand
  {
    tokens: ["sydney", "melbourne", "canberra", "parramatta", "australia", "सिडनी", "मेलबर्न", "ऑस्ट्रेलिया"],
    label: "Sydney, Australia",
    hindiLabel: "सिडनी, ऑस्ट्रेलिया",
    country: "Australia",
    lat: -33.8688,
    lon: 151.2093,
    timeZone: "Australia/Sydney"
  },
  {
    tokens: ["brisbane", "gold coast", "queensland", "ब्रिस्बेन"],
    label: "Brisbane, Australia",
    hindiLabel: "ब्रिस्बेन, ऑस्ट्रेलिया",
    country: "Australia",
    lat: -27.4698,
    lon: 153.0251,
    timeZone: "Australia/Brisbane"
  },
  {
    tokens: ["adelaide", "south australia", "एडिलेड"],
    label: "Adelaide, Australia",
    hindiLabel: "एडिलेड, ऑस्ट्रेलिया",
    country: "Australia",
    lat: -34.9285,
    lon: 138.6007,
    timeZone: "Australia/Adelaide"
  },
  {
    tokens: ["perth", "western australia", "पर्थ"],
    label: "Perth, Australia",
    hindiLabel: "पर्थ, ऑस्ट्रेलिया",
    country: "Australia",
    lat: -31.9505,
    lon: 115.8605,
    timeZone: "Australia/Perth"
  },
  {
    tokens: ["auckland", "wellington", "christchurch", "new zealand", "ऑकलैंड", "न्यूजीलैंड"],
    label: "Auckland, New Zealand",
    hindiLabel: "ऑकलैंड, न्यूज़ीलैंड",
    country: "New Zealand",
    lat: -36.8509,
    lon: 174.7645,
    timeZone: "Pacific/Auckland"
  },
  // South & Southeast Asia
  {
    tokens: ["kathmandu", "pokhara", "lalitpur", "biratnagar", "nepal", "काठमांडू", "नेपाल"],
    label: "Kathmandu, Nepal",
    hindiLabel: "काठमांडू, नेपाल",
    country: "Nepal",
    lat: 27.7172,
    lon: 85.324,
    timeZone: "Asia/Kathmandu",
    elevationMeters: 1400
  },
  {
    tokens: ["singapore", "सिंगापुर"],
    label: "Singapore",
    hindiLabel: "सिंगापुर",
    country: "Singapore",
    lat: 1.3521,
    lon: 103.8198,
    timeZone: "Asia/Singapore"
  },
  {
    tokens: ["kuala lumpur", "malaysia", "penang", "कुआलालंपुर", "मलेशिया"],
    label: "Kuala Lumpur, Malaysia",
    hindiLabel: "कुआलालंपुर, मलेशिया",
    country: "Malaysia",
    lat: 3.139,
    lon: 101.6869,
    timeZone: "Asia/Kuala_Lumpur"
  },
  {
    tokens: ["colombo", "kandy", "sri lanka", "कोलंबो", "श्रीलंका"],
    label: "Colombo, Sri Lanka",
    hindiLabel: "कोलंबो, श्रीलंका",
    country: "Sri Lanka",
    lat: 6.9271,
    lon: 79.8612,
    timeZone: "Asia/Colombo"
  },
  {
    tokens: ["dhaka", "chittagong", "bangladesh", "ढाका", "बांग्लादेश"],
    label: "Dhaka, Bangladesh",
    hindiLabel: "ढाका, बांग्लादेश",
    country: "Bangladesh",
    lat: 23.8103,
    lon: 90.4125,
    timeZone: "Asia/Dhaka"
  },
  {
    tokens: ["karachi", "lahore", "islamabad", "pakistan", "लाहौर", "कराची"],
    label: "Lahore, Pakistan",
    hindiLabel: "लाहौर, पाकिस्तान",
    country: "Pakistan",
    lat: 31.5204,
    lon: 74.3587,
    timeZone: "Asia/Karachi"
  },
  {
    tokens: ["bangkok", "thailand", "बैंकॉक", "थाईलैंड"],
    label: "Bangkok, Thailand",
    hindiLabel: "बैंकॉक, थाईलैंड",
    country: "Thailand",
    lat: 13.7563,
    lon: 100.5018,
    timeZone: "Asia/Bangkok"
  },
  {
    tokens: ["jakarta", "bali", "indonesia", "जकार्ता", "इंडोनेशिया"],
    label: "Jakarta, Indonesia",
    hindiLabel: "जकार्ता, इंडोनेशिया",
    country: "Indonesia",
    lat: -6.2088,
    lon: 106.8456,
    timeZone: "Asia/Jakarta"
  },
  {
    tokens: ["tokyo", "osaka", "kyoto", "japan", "टोक्यो", "जापान"],
    label: "Tokyo, Japan",
    hindiLabel: "टोक्यो, जापान",
    country: "Japan",
    lat: 35.6762,
    lon: 139.6503,
    timeZone: "Asia/Tokyo"
  },
  {
    tokens: ["hong kong", "हांगकांग"],
    label: "Hong Kong",
    hindiLabel: "हांगकांग",
    country: "Hong Kong",
    lat: 22.3193,
    lon: 114.1694,
    timeZone: "Asia/Hong_Kong"
  },
  {
    tokens: ["seoul", "korea", "सियोल"],
    label: "Seoul, South Korea",
    hindiLabel: "सियोल, दक्षिण कोरिया",
    country: "South Korea",
    lat: 37.5665,
    lon: 126.978,
    timeZone: "Asia/Seoul"
  },
  {
    tokens: ["beijing", "shanghai", "china", "बीजिंग", "शंघाई"],
    label: "Shanghai, China",
    hindiLabel: "शंघाई, चीन",
    country: "China",
    lat: 31.2304,
    lon: 121.4737,
    timeZone: "Asia/Shanghai"
  },
  // Europe
  {
    tokens: ["berlin", "munich", "frankfurt", "hamburg", "germany", "बर्लिन", "जर्मनी"],
    label: "Berlin, Germany",
    hindiLabel: "बर्लिन, जर्मनी",
    country: "Germany",
    lat: 52.52,
    lon: 13.405,
    timeZone: "Europe/Berlin"
  },
  {
    tokens: ["paris", "lyon", "france", "पेरिस", "फ़्रांस"],
    label: "Paris, France",
    hindiLabel: "पेरिस, फ्रांस",
    country: "France",
    lat: 48.8566,
    lon: 2.3522,
    timeZone: "Europe/Paris"
  },
  {
    tokens: ["amsterdam", "rotterdam", "netherlands", "holland", "एम्स्टर्डम"],
    label: "Amsterdam, Netherlands",
    hindiLabel: "एम्स्टर्डम, नीदरलैंड",
    country: "Netherlands",
    lat: 52.3676,
    lon: 4.9041,
    timeZone: "Europe/Amsterdam"
  },
  {
    tokens: ["zurich", "geneva", "switzerland", "ज्यूरिख"],
    label: "Zurich, Switzerland",
    hindiLabel: "ज़्यूरिख, स्विट्ज़रलैंड",
    country: "Switzerland",
    lat: 47.3769,
    lon: 8.5417,
    timeZone: "Europe/Zurich"
  },
  {
    tokens: ["rome", "milan", "italy", "रोम", "इटली"],
    label: "Rome, Italy",
    hindiLabel: "रोम, इटली",
    country: "Italy",
    lat: 41.9028,
    lon: 12.4964,
    timeZone: "Europe/Rome"
  },
  {
    tokens: ["madrid", "barcelona", "spain", "मैड्रिड"],
    label: "Madrid, Spain",
    hindiLabel: "मैड्रिड, स्पेन",
    country: "Spain",
    lat: 40.4168,
    lon: -3.7038,
    timeZone: "Europe/Madrid"
  },
  {
    tokens: ["dublin", "ireland", "डबलिन"],
    label: "Dublin, Ireland",
    hindiLabel: "डबलिन, आयरलैंड",
    country: "Ireland",
    lat: 53.3498,
    lon: -6.2603,
    timeZone: "Europe/Dublin"
  },
  {
    tokens: ["moscow", "russia", "मास्को"],
    label: "Moscow, Russia",
    hindiLabel: "मॉस्को, रूस",
    country: "Russia",
    lat: 55.7558,
    lon: 37.6173,
    timeZone: "Europe/Moscow"
  },
  // Africa, Pacific, South America
  {
    tokens: ["mauritius", "port louis", "मॉरीशस"],
    label: "Port Louis, Mauritius",
    hindiLabel: "पोर्ट लुइस, मॉरीशस",
    country: "Mauritius",
    lat: -20.1609,
    lon: 57.5012,
    timeZone: "Indian/Mauritius"
  },
  {
    tokens: ["suva", "fiji", "फ़िजी"],
    label: "Suva, Fiji",
    hindiLabel: "सुवा, फ़िजी",
    country: "Fiji",
    lat: -18.1416,
    lon: 178.4419,
    timeZone: "Pacific/Fiji"
  },
  {
    tokens: ["johannesburg", "cape town", "durban", "south africa", "जोहान्सबर्ग"],
    label: "Johannesburg, South Africa",
    hindiLabel: "जोहान्सबर्ग, दक्षिण अफ्रीका",
    country: "South Africa",
    lat: -26.2041,
    lon: 28.0473,
    timeZone: "Africa/Johannesburg"
  },
  {
    tokens: ["nairobi", "kenya", "नैरोबी"],
    label: "Nairobi, Kenya",
    hindiLabel: "नैरोबी, केन्या",
    country: "Kenya",
    lat: -1.2921,
    lon: 36.8219,
    timeZone: "Africa/Nairobi"
  },
  {
    tokens: ["sao paulo", "rio", "brazil", "ब्राज़ील"],
    label: "Sao Paulo, Brazil",
    hindiLabel: "साओ पाउलो, ब्राज़ील",
    country: "Brazil",
    lat: -23.5505,
    lon: -46.6333,
    timeZone: "America/Sao_Paulo"
  }
];
const COUNTRY_FALLBACK_CENTERS = {
  india: {
    tokens: ["india", "bharat", "भारत"],
    label: "New Delhi, India",
    hindiLabel: "नई दिल्ली, भारत",
    country: "India",
    lat: 28.6139,
    lon: 77.209,
    timeZone: "Asia/Kolkata"
  },
  usa: {
    tokens: ["usa", "united states", "america", "us", "अमेरिका"],
    label: "New York, USA",
    hindiLabel: "न्यूयॉर्क, अमेरिका (USA)",
    country: "USA",
    lat: 40.7128,
    lon: -74.006,
    timeZone: "America/New_York"
  },
  uk: {
    tokens: ["uk", "united kingdom", "britain", "england", "ब्रिटेन"],
    label: "London, UK",
    hindiLabel: "लंदन, ब्रिटेन (UK)",
    country: "UK",
    lat: 51.5074,
    lon: -0.1278,
    timeZone: "Europe/London"
  },
  uae: {
    tokens: ["uae", "united arab emirates", "dubai", "यूएई"],
    label: "Dubai, UAE",
    hindiLabel: "दुबई, UAE",
    country: "UAE",
    lat: 25.2048,
    lon: 55.2708,
    timeZone: "Asia/Dubai"
  },
  canada: {
    tokens: ["canada", "कनाडा"],
    label: "Toronto, Canada",
    hindiLabel: "टोरंटो, कनाडा",
    country: "Canada",
    lat: 43.6532,
    lon: -79.3832,
    timeZone: "America/Toronto"
  },
  australia: {
    tokens: ["australia", "ऑस्ट्रेलिया"],
    label: "Sydney, Australia",
    hindiLabel: "सिडनी, ऑस्ट्रेलिया",
    country: "Australia",
    lat: -33.8688,
    lon: 151.2093,
    timeZone: "Australia/Sydney"
  }
};
function formatUtcOffsetMinutes(offsetMinutes) {
  const sign = offsetMinutes >= 0 ? "+" : "-";
  const abs = Math.abs(Math.round(offsetMinutes));
  const hh = String(Math.floor(abs / 60)).padStart(2, "0");
  const mm = String(abs % 60).padStart(2, "0");
  return `UTC${sign}${hh}:${mm}`;
}
function parseDobAndTime(rawDob, rawBirthTime, uncertainty) {
  let year = 1996;
  let month = 3;
  let day = 10;
  let wasDobInvalid = false;
  const dobMatch = (rawDob || "").trim().match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
  if (dobMatch) {
    const y = parseInt(dobMatch[1], 10);
    const m = parseInt(dobMatch[2], 10);
    const d = parseInt(dobMatch[3], 10);
    const probe = new Date(Date.UTC(y, m - 1, d));
    if (probe.getUTCFullYear() === y && probe.getUTCMonth() === m - 1 && probe.getUTCDate() === d) {
      year = y;
      month = m;
      day = d;
    } else {
      wasDobInvalid = true;
    }
  } else if (rawDob) {
    const parsed = new Date(rawDob);
    if (!Number.isNaN(parsed.getTime())) {
      year = parsed.getUTCFullYear();
      month = parsed.getUTCMonth() + 1;
      day = parsed.getUTCDate();
    } else {
      wasDobInvalid = true;
    }
  } else {
    wasDobInvalid = true;
  }
  let hour = 12;
  let minute = 0;
  let second = 0;
  let wasTimeInvalid = false;
  if (uncertainty === "unknown_noon_fallback" || !(rawBirthTime || "").trim()) {
    if (!(rawBirthTime || "").trim()) wasTimeInvalid = true;
    hour = 12;
    minute = 0;
    second = 0;
  } else {
    const cleanT = rawBirthTime.trim().toUpperCase();
    const ampmMatch = cleanT.match(/^(\d{1,2}):(\d{1,2})(?::(\d{1,2}))?\s*(AM|PM)?$/);
    if (ampmMatch) {
      let h = parseInt(ampmMatch[1], 10);
      const m = parseInt(ampmMatch[2], 10);
      const s = ampmMatch[3] ? parseInt(ampmMatch[3], 10) : 0;
      const mer = ampmMatch[4];
      if (mer === "PM" && h < 12) h += 12;
      if (mer === "AM" && h === 12) h = 0;
      if (h >= 0 && h <= 23 && m >= 0 && m <= 59 && s >= 0 && s <= 59) {
        hour = h;
        minute = m;
        second = s;
      } else {
        wasTimeInvalid = true;
      }
    } else {
      wasTimeInvalid = true;
    }
  }
  const normalizedDob = `${String(year).padStart(4, "0")}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
  const effectiveBirthTime24 = `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}${second > 0 ? `:${String(second).padStart(2, "0")}` : ""}`;
  return {
    dob: normalizedDob,
    year,
    month,
    day,
    hour,
    minute,
    second,
    effectiveBirthTime24,
    wasDobInvalid,
    wasTimeInvalid
  };
}
function resolveBirthLocationAndTimezone(input) {
  const rawPlace = (input.birthPlace || "").trim();
  const rawCountry = (input.country || "").trim();
  const qLower = `${rawPlace} ${rawCountry}`.trim().toLowerCase();
  const hasExplicitCoords = typeof input.latitudeOverride === "number" && Number.isFinite(input.latitudeOverride) && typeof input.longitudeOverride === "number" && Number.isFinite(input.longitudeOverride) && Math.abs(input.latitudeOverride) <= 90 && Math.abs(input.longitudeOverride) <= 180;
  const validTzOverride = input.timeZoneOverride && isValidIanaTimezone(input.timeZoneOverride) ? input.timeZoneOverride : void 0;
  if (hasExplicitCoords && validTzOverride) {
    return {
      displayPlace: rawPlace || `${input.latitudeOverride.toFixed(3)}°, ${input.longitudeOverride.toFixed(3)}°`,
      country: rawCountry || (input.latitudeOverride >= 6 && input.latitudeOverride <= 38 && input.longitudeOverride >= 68 && input.longitudeOverride <= 98 ? "India" : "Global"),
      latitude: Number(input.latitudeOverride.toFixed(4)),
      longitude: Number(input.longitudeOverride.toFixed(4)),
      elevationMeters: typeof input.elevationMetersOverride === "number" && Number.isFinite(input.elevationMetersOverride) ? Math.round(input.elevationMetersOverride) : 100,
      timeZone: validTzOverride,
      source: "explicit-coordinates"
    };
  }
  const coordStrMatch = rawPlace.match(
    /(-?\d+(?:\.\d+)?)\s*°?\s*([NSns])?\s*,\s*(-?\d+(?:\.\d+)?)\s*°?\s*([EWew])?/
  );
  if (coordStrMatch && validTzOverride) {
    let lat = parseFloat(coordStrMatch[1]);
    let lon = parseFloat(coordStrMatch[3]);
    if (coordStrMatch[2]?.toUpperCase() === "S") lat = -Math.abs(lat);
    if (coordStrMatch[4]?.toUpperCase() === "W") lon = -Math.abs(lon);
    return {
      displayPlace: rawPlace,
      country: rawCountry || "Global",
      latitude: Number(lat.toFixed(4)),
      longitude: Number(lon.toFixed(4)),
      elevationMeters: input.elevationMetersOverride ?? 100,
      timeZone: validTzOverride,
      source: "explicit-coordinates"
    };
  }
  if (qLower) {
    for (const seed of INTERNATIONAL_BIRTH_GAZETTEER) {
      if (seed.tokens.some((t) => qLower.includes(t))) {
        return {
          displayPlace: rawPlace || seed.hindiLabel,
          country: rawCountry || seed.country,
          latitude: hasExplicitCoords ? Number(input.latitudeOverride.toFixed(4)) : seed.lat,
          longitude: hasExplicitCoords ? Number(input.longitudeOverride.toFixed(4)) : seed.lon,
          elevationMeters: typeof input.elevationMetersOverride === "number" ? Math.round(input.elevationMetersOverride) : seed.elevationMeters ?? 100,
          timeZone: validTzOverride || seed.timeZone,
          source: "global-gazetteer"
        };
      }
    }
  }
  if (rawPlace) {
    const strictCity = resolveCityCoordinatesStrict(rawPlace);
    if (strictCity) {
      const resolvedTz = validTzOverride || resolveSafeTimezone(strictCity);
      const isPreset = WORLDWIDE_PANCHANG_CITIES.some((c) => c.id === strictCity.id);
      return {
        displayPlace: rawPlace || strictCity.hindiName,
        country: rawCountry || strictCity.country || "India",
        latitude: hasExplicitCoords ? Number(input.latitudeOverride.toFixed(4)) : strictCity.lat,
        longitude: hasExplicitCoords ? Number(input.longitudeOverride.toFixed(4)) : strictCity.lon,
        elevationMeters: typeof input.elevationMetersOverride === "number" ? Math.round(input.elevationMetersOverride) : strictCity.elevationMeters ?? 120,
        timeZone: resolvedTz,
        source: isPreset ? "panchang-preset" : "indian-district"
      };
    }
  }
  if (rawCountry) {
    const cKey = rawCountry.toLowerCase();
    for (const seed of Object.values(COUNTRY_FALLBACK_CENTERS)) {
      if (seed.tokens.some((t) => cKey.includes(t))) {
        return {
          displayPlace: rawPlace || seed.hindiLabel,
          country: seed.country,
          latitude: hasExplicitCoords ? Number(input.latitudeOverride.toFixed(4)) : seed.lat,
          longitude: hasExplicitCoords ? Number(input.longitudeOverride.toFixed(4)) : seed.lon,
          elevationMeters: input.elevationMetersOverride ?? 100,
          timeZone: validTzOverride || seed.timeZone,
          source: "country-capital-fallback"
        };
      }
    }
  }
  if (hasExplicitCoords) {
    const lat = input.latitudeOverride;
    const lon = input.longitudeOverride;
    const inIndiaBox = lat >= 6 && lat <= 38 && lon >= 68 && lon <= 98;
    const tz = validTzOverride || (inIndiaBox ? "Asia/Kolkata" : "UTC");
    return {
      displayPlace: rawPlace || `${lat.toFixed(3)}°, ${lon.toFixed(3)}°`,
      country: rawCountry || (inIndiaBox ? "India" : "Global"),
      latitude: Number(lat.toFixed(4)),
      longitude: Number(lon.toFixed(4)),
      elevationMeters: input.elevationMetersOverride ?? 100,
      timeZone: tz,
      source: "explicit-coordinates"
    };
  }
  return {
    displayPlace: rawPlace || DEFAULT_RUDRAPUR_LOCATION.hindiName,
    country: rawCountry || "India",
    latitude: DEFAULT_RUDRAPUR_LOCATION.lat,
    longitude: DEFAULT_RUDRAPUR_LOCATION.lon,
    elevationMeters: DEFAULT_RUDRAPUR_LOCATION.elevationMeters ?? 214,
    timeZone: validTzOverride || DEFAULT_RUDRAPUR_LOCATION.timezone,
    source: "default-fallback"
  };
}
function inspectHistoricalDstState(year, month, day, hour, minute, second, timeZone) {
  const safeTz = isValidIanaTimezone(timeZone) ? timeZone : "UTC";
  const utcEpochMs = zonedWallClockToUtcMs(year, month, day, hour, minute, second, safeTz);
  const actualParts = getLocalDateParts(utcEpochMs, safeTz);
  const utcOffsetMinutes = actualParts.offsetMinutes;
  const jan1Ms = zonedWallClockToUtcMs(year, 1, 1, 12, 0, 0, safeTz);
  const jul1Ms = zonedWallClockToUtcMs(year, 7, 1, 12, 0, 0, safeTz);
  const janOff = getLocalDateParts(jan1Ms, safeTz).offsetMinutes;
  const julOff = getLocalDateParts(jul1Ms, safeTz).offsetMinutes;
  const standardOffsetMinutes = Math.min(janOff, julOff);
  const maxYearOffset = Math.max(janOff, julOff);
  const dstSavingsMinutes = Math.max(0, utcOffsetMinutes - standardOffsetMinutes);
  const isDstActive = maxYearOffset > standardOffsetMinutes && utcOffsetMinutes > standardOffsetMinutes;
  const isDstNonExistentHour = actualParts.year !== year || actualParts.month !== month || actualParts.day !== day || actualParts.hours !== hour || actualParts.minutes !== minute;
  let isDstAmbiguousHour = false;
  if (!isDstNonExistentHour && maxYearOffset > standardOffsetMinutes) {
    const minus1h = getLocalDateParts(utcEpochMs - 36e5, safeTz);
    const plus1h = getLocalDateParts(utcEpochMs + 36e5, safeTz);
    if (minus1h.offsetMinutes !== utcOffsetMinutes || plus1h.offsetMinutes !== utcOffsetMinutes) {
      const altMinus = getLocalDateParts(utcEpochMs - 36e5, safeTz);
      const altPlus = getLocalDateParts(utcEpochMs + 36e5, safeTz);
      const matchesSameWall = (p) => p.year === year && p.month === month && p.day === day && p.hours === hour && p.minutes === minute;
      isDstAmbiguousHour = matchesSameWall(altMinus) || matchesSameWall(altPlus);
    }
  }
  return {
    utcEpochMs,
    utcOffsetMinutes,
    standardOffsetMinutes,
    isDstActive,
    dstSavingsMinutes,
    isDstAmbiguousHour,
    isDstNonExistentHour
  };
}
function resolveBirthSpaceTime(input) {
  const rawUnc = input.birthTimeUncertainty || "exact";
  const parsed = parseDobAndTime(input.dob, input.birthTime, rawUnc);
  const effectiveUncertainty = parsed.wasTimeInvalid && rawUnc === "exact" ? "unknown_noon_fallback" : rawUnc;
  const loc = resolveBirthLocationAndTimezone({
    birthPlace: input.birthPlace,
    country: input.country,
    timeZoneOverride: input.timeZoneOverride,
    latitudeOverride: input.latitudeOverride,
    longitudeOverride: input.longitudeOverride,
    elevationMetersOverride: input.elevationMetersOverride
  });
  const dstState = inspectHistoricalDstState(
    parsed.year,
    parsed.month,
    parsed.day,
    parsed.hour,
    parsed.minute,
    parsed.second,
    loc.timeZone
  );
  const localObserved = getLocalDateParts(dstState.utcEpochMs, loc.timeZone);
  const julianDayUT = dstState.utcEpochMs / 864e5 + 24405875e-1;
  const utcOffsetFormatted = formatUtcOffsetMinutes(dstState.utcOffsetMinutes);
  const warningsHi = [];
  const warningsEn = [];
  if (parsed.wasDobInvalid) {
    warningsHi.push("जन्म तिथि प्रारूप अस्पष्ट था; डिफ़ॉल्ट मानक तिथि प्रयुक्त की गई है।");
    warningsEn.push("Birth date format was invalid; fallback reference date used.");
  }
  const isBirthTimeUncertain = effectiveUncertainty !== "exact";
  if (effectiveUncertainty === "unknown_noon_fallback") {
    warningsHi.push(
      "सटीक जन्म समय उपलब्ध न होने के कारण मध्याह्न (12:00 PM) मानक संदर्भ लिया गया है। लग्न (D-1) व सूक्ष्म वर्ग (D-9, D-10, D-60) जन्म-समय पर निर्भर हैं, जबकि चंद्र व ग्रहों की स्थिति विश्वसनीय है।"
    );
    warningsEn.push(
      "Exact birth time was not provided; standard local noon (12:00 PM) fallback is used. Lagna (D-1) and fine divisional charts (D-9, D-10, D-60) depend on exact birth time, whereas planetary longitudes remain reliable."
    );
  } else if (effectiveUncertainty === "approximate_1h") {
    warningsHi.push(
      "जन्म समय लगभग (±1 घंटा) अनुमानित है — लग्न संधि और D-9/D-10/D-60 में परिवर्तन संभव है।"
    );
    warningsEn.push(
      "Birth time is approximate (±1 hour) — Ascendant boundary and D-9/D-10/D-60 may shift."
    );
  } else if (effectiveUncertainty === "approximate_15m") {
    warningsHi.push(
      "जन्म समय ±15 मिनट अनुमानित है — D-10, D-30 और D-60 जैसे सूक्ष्म वर्गों में सावधानी रखें।"
    );
    warningsEn.push(
      "Birth time is approximate (±15 min) — verify fine divisional charts like D-10, D-30, and D-60."
    );
  }
  const isBirthPlaceUncertain = loc.source === "default-fallback" || loc.source === "country-capital-fallback";
  if (loc.source === "default-fallback") {
    warningsHi.push(
      `जन्म स्थान "${input.birthPlace || ""}" डेटाबेस में सटीक नहीं मिला, इसलिए रुद्रपुर (28.98°N, 79.40°E) संदर्भ प्रयुक्त हुआ है — सटीक लग्न हेतु निकटतम शहर या अक्षांश-देशांतर चुनें।`
    );
    warningsEn.push(
      `Birthplace "${input.birthPlace || ""}" could not be matched precisely; using default coordinates (28.98°N, 79.40°E). Select a nearby city or coordinates for exact Lagna.`
    );
  } else if (loc.source === "country-capital-fallback") {
    warningsHi.push(
      `शहर के स्थान पर देश की राजधानी (${loc.displayPlace}) के निर्देशांक प्रयुक्त किए गए हैं।`
    );
    warningsEn.push(
      `City was not uniquely resolved; country capital reference (${loc.displayPlace}) is used.`
    );
  }
  if (dstState.isDstNonExistentHour) {
    warningsHi.push(
      `जन्म तिथि को ${loc.timeZone} में Daylight Saving Time (Spring Forward) परिवर्तन के कारण यह घड़ी-समय अस्तित्व में नहीं था; निकटतम वैध स्थानीय समय समायोजित किया गया है।`
    );
    warningsEn.push(
      `Due to DST spring-forward transition in ${loc.timeZone}, the entered wall-clock minute was skipped; adjusted to the nearest valid instant.`
    );
  } else if (dstState.isDstAmbiguousHour) {
    warningsHi.push(
      `जन्म तिथि को ${loc.timeZone} में DST समाप्ति (Fall Back) के कारण यह समय दो बार आया था — कृपया पहले या दूसरे घंटे की पुष्टि करें।`
    );
    warningsEn.push(
      `Birth time fell inside a 1-hour DST fall-back overlap in ${loc.timeZone}; verify whether birth occurred during DST or Standard Time.`
    );
  }
  let historicalTimezoneNoteHi;
  let historicalTimezoneNoteEn;
  if (loc.timeZone === "Asia/Kolkata" && parsed.year >= 1942 && parsed.year <= 1945) {
    historicalTimezoneNoteHi = "ऐतिहासिक सूचना: 1942–1945 के बीच भारत में द्वितीय विश्वयुद्ध काल में अस्थायी +06:30 समय लागू रहा था (IANA Asia/Kolkata इसे ऐतिहासिक रिकॉर्ड अनुसार संभालता है)।";
    historicalTimezoneNoteEn = "Historical note: Between 1942–1945, India observed +06:30 wartime offset (handled historically by IANA Asia/Kolkata).";
  } else if (dstState.isDstActive) {
    historicalTimezoneNoteHi = `ऐतिहासिक DST सक्रिय: जन्म के समय ${loc.timeZone} में Daylight Saving Time (+${dstState.dstSavingsMinutes} मिनट) लागू था (${utcOffsetFormatted})।`;
    historicalTimezoneNoteEn = `Historical DST Active: ${loc.timeZone} observed Daylight Saving Time (+${dstState.dstSavingsMinutes} min) on this birth date (${utcOffsetFormatted}).`;
  }
  const lagnaReliability = effectiveUncertainty === "unknown_noon_fallback" || effectiveUncertainty === "approximate_1h" || loc.source === "default-fallback" ? "low" : effectiveUncertainty === "approximate_15m" || loc.source === "country-capital-fallback" || dstState.isDstAmbiguousHour ? "moderate" : "high";
  return {
    dob: parsed.dob,
    birthTimeInput: input.birthTime || "",
    effectiveBirthTime24: parsed.effectiveBirthTime24,
    year: parsed.year,
    month: parsed.month,
    day: parsed.day,
    hour: parsed.hour,
    minute: parsed.minute,
    second: parsed.second,
    civilWeekdayIndex: localObserved.weekdayIndex,
    birthPlaceDisplay: loc.displayPlace,
    country: loc.country,
    latitude: loc.latitude,
    longitude: loc.longitude,
    elevationMeters: loc.elevationMeters,
    timeZone: loc.timeZone,
    utcOffsetMinutes: dstState.utcOffsetMinutes,
    utcOffsetFormatted,
    standardOffsetMinutes: dstState.standardOffsetMinutes,
    isDstActive: dstState.isDstActive,
    dstSavingsMinutes: dstState.dstSavingsMinutes,
    isDstAmbiguousHour: dstState.isDstAmbiguousHour,
    isDstNonExistentHour: dstState.isDstNonExistentHour,
    utcEpochMs: dstState.utcEpochMs,
    utcIsoString: new Date(dstState.utcEpochMs).toISOString(),
    julianDayUT,
    locationSource: loc.source,
    birthTimeUncertainty: effectiveUncertainty,
    isBirthTimeUncertain,
    isBirthPlaceUncertain,
    lagnaReliability,
    historicalTimezoneNoteHi,
    historicalTimezoneNoteEn,
    warningsHi,
    warningsEn
  };
}
const DEG2RAD$3 = Math.PI / 180;
const RAD2DEG$3 = 180 / Math.PI;
const RASHI_META_12 = [
  { num: 1, hi: "मेष", en: "Aries", lordId: "mars", lordHi: "मंगल" },
  { num: 2, hi: "वृषभ", en: "Taurus", lordId: "venus", lordHi: "शुक्र" },
  { num: 3, hi: "मिथुन", en: "Gemini", lordId: "mercury", lordHi: "बुध" },
  { num: 4, hi: "कर्क", en: "Cancer", lordId: "moon", lordHi: "चंद्र" },
  { num: 5, hi: "सिंह", en: "Leo", lordId: "sun", lordHi: "सूर्य" },
  { num: 6, hi: "कन्या", en: "Virgo", lordId: "mercury", lordHi: "बुध" },
  { num: 7, hi: "तुला", en: "Libra", lordId: "venus", lordHi: "शुक्र" },
  { num: 8, hi: "वृश्चिक", en: "Scorpio", lordId: "mars", lordHi: "मंगल" },
  { num: 9, hi: "धनु", en: "Sagittarius", lordId: "jupiter", lordHi: "गुरु" },
  { num: 10, hi: "मकर", en: "Capricorn", lordId: "saturn", lordHi: "शनि" },
  { num: 11, hi: "कुम्भ", en: "Aquarius", lordId: "saturn", lordHi: "शनि" },
  { num: 12, hi: "मीन", en: "Pisces", lordId: "jupiter", lordHi: "गुरु" }
];
const NAKSHATRA_LORDS_27 = [
  { lordId: "ketu", lordHi: "केतु" },
  { lordId: "venus", lordHi: "शुक्र" },
  { lordId: "sun", lordHi: "सूर्य" },
  { lordId: "moon", lordHi: "चंद्र" },
  { lordId: "mars", lordHi: "मंगल" },
  { lordId: "rahu", lordHi: "राहु" },
  { lordId: "jupiter", lordHi: "गुरु" },
  { lordId: "saturn", lordHi: "शनि" },
  { lordId: "mercury", lordHi: "बुध" },
  { lordId: "ketu", lordHi: "केतु" },
  { lordId: "venus", lordHi: "शुक्र" },
  { lordId: "sun", lordHi: "सूर्य" },
  { lordId: "moon", lordHi: "चंद्र" },
  { lordId: "mars", lordHi: "मंगल" },
  { lordId: "rahu", lordHi: "राहु" },
  { lordId: "jupiter", lordHi: "गुरु" },
  { lordId: "saturn", lordHi: "शनि" },
  { lordId: "mercury", lordHi: "बुध" },
  { lordId: "ketu", lordHi: "केतु" },
  { lordId: "venus", lordHi: "शुक्र" },
  { lordId: "sun", lordHi: "सूर्य" },
  { lordId: "moon", lordHi: "चंद्र" },
  { lordId: "mars", lordHi: "मंगल" },
  { lordId: "rahu", lordHi: "राहु" },
  { lordId: "jupiter", lordHi: "गुरु" },
  { lordId: "saturn", lordHi: "शनि" },
  { lordId: "mercury", lordHi: "बुध" }
];
const BHAVA_TITLES_HI = [
  "तनु भाव (लग्न / व्यक्तित्व)",
  "धन भाव (संपत्ति / वाणी)",
  "सहज भाव (पराक्रम / भाई-बहन)",
  "सुख भाव (माता / भूमि / वाहन)",
  "विद्या-संतान भाव (बुद्धि / प्रेम)",
  "रिपु-रोग भाव (सेवा / ऋण)",
  "कलत्र भाव (विवाह / साझेदारी)",
  "आयु-रंध्र भाव (गूढ़ परिवर्तन)",
  "भाग्य-धर्म भाव (गुरु / तीर्थ)",
  "कर्म भाव (करियर / प्रतिष्ठा)",
  "लाभ भाव (आय / मनोकामना)",
  "व्यय-मोक्ष भाव (विदेश / अध्यात्म)"
];
const PLANET_META = {
  sun: { en: "Sun", hi: "सूर्य", shortHi: "सू", symbol: "☉" },
  moon: { en: "Moon", hi: "चंद्र", shortHi: "चं", symbol: "☽" },
  mars: { en: "Mars", hi: "मंगल", shortHi: "मं", symbol: "♂" },
  mercury: { en: "Mercury", hi: "बुध", shortHi: "बु", symbol: "☿" },
  jupiter: { en: "Jupiter", hi: "गुरु", shortHi: "गु", symbol: "♃" },
  venus: { en: "Venus", hi: "शुक्र", shortHi: "शु", symbol: "♀" },
  saturn: { en: "Saturn", hi: "शनि", shortHi: "श", symbol: "♄" },
  rahu: { en: "Rahu", hi: "राहु", shortHi: "रा", symbol: "☊" },
  ketu: { en: "Ketu", hi: "केतु", shortHi: "के", symbol: "☋" }
};
const COMBUSTION_ORBS = {
  mars: { direct: 17, retro: 17 },
  mercury: { direct: 14, retro: 12 },
  jupiter: { direct: 11, retro: 11 },
  venus: { direct: 10, retro: 8 },
  saturn: { direct: 15, retro: 15 }
};
function isTaraGrahaCombust(planetId, planetSiderealLon, sunSiderealLon, isRetrograde) {
  const id = planetId.toLowerCase();
  const sunSepDeg = id === "sun" ? 0 : angularSeparationDeg$1(planetSiderealLon, sunSiderealLon);
  const orbSpec = COMBUSTION_ORBS[id];
  if (!orbSpec) {
    return { isCombust: false, orbLimit: void 0, sunSepDeg };
  }
  const orbLimit = isRetrograde ? orbSpec.retro : orbSpec.direct;
  return { isCombust: sunSepDeg <= orbLimit, orbLimit, sunSepDeg };
}
function formatPlanetLabel(planet, sunLongitude) {
  const id = planet.id.toLowerCase();
  const shortHi = planet.shortHindi || PLANET_META[id]?.shortHi || planet.id.slice(0, 2);
  const isNodeOrLuminary = id === "sun" || id === "moon" || id === "rahu" || id === "ketu";
  const showRetro = !isNodeOrLuminary && Boolean(planet.isRetrograde);
  let showCombust = false;
  if (!isNodeOrLuminary) {
    const pLon = typeof planet.siderealLonDeg === "number" ? planet.siderealLonDeg : typeof planet.siderealLon === "number" ? planet.siderealLon : void 0;
    if (typeof pLon === "number" && typeof sunLongitude === "number") {
      showCombust = isTaraGrahaCombust(id, pLon, sunLongitude, showRetro).isCombust;
    } else {
      showCombust = Boolean(planet.isCombust);
    }
  }
  return `${shortHi}${showRetro ? "*" : ""}${showCombust ? "^" : ""}`;
}
const AYANAMSHA_LABELS_HI = {
  LAHIRI: "लाहिरी (चैत्रपक्ष / Lahiri Chitrapaksha)",
  TRUE_CHITRA: "ट्रू चित्रा (True Chitra)",
  KP: "कृष्णमूर्ति पद्धति (KP Ayanamsha)",
  RAMAN: "बी.वी. रमन (B.V. Raman)",
  TROPICAL: "सायन (Tropical)"
};
function formatDegToDMS(degVal) {
  const clamped = (degVal % 30 + 30) % 30;
  let d = Math.floor(clamped);
  let remMin = (clamped - d) * 60;
  let m = Math.floor(remMin);
  let s = Math.round((remMin - m) * 60);
  if (s >= 60) {
    s = 0;
    m += 1;
  }
  if (m >= 60) {
    m = 0;
    d = (d + 1) % 30;
  }
  return {
    shortDeg: `${String(d).padStart(2, "0")}° ${String(m).padStart(2, "0")}'`,
    fullDMS: `${String(d).padStart(2, "0")}°${String(m).padStart(2, "0")}'${String(s).padStart(2, "0")}"`,
    degInt: d
  };
}
function angularSeparationDeg$1(a, b) {
  const d = Math.abs(normalizeDeg(a) - normalizeDeg(b));
  return d > 180 ? 360 - d : d;
}
function clockwiseArcSpanDeg(fromDeg, toDeg) {
  return normalizeDeg(toDeg - fromDeg);
}
function isLongitudeInArc(lonDeg, arcStartDeg, arcEndDeg) {
  const span = clockwiseArcSpanDeg(arcStartDeg, arcEndDeg);
  const rel = clockwiseArcSpanDeg(arcStartDeg, lonDeg);
  return rel >= 0 && rel < span;
}
function computeAstronomicalAngles(utcEpochMs, latitude, longitude, ayanamshaDeg) {
  const date = new Date(utcEpochMs);
  const gastHours = SiderealTime(date);
  const gastDeg = gastHours * 15;
  const tilt = e_tilt(MakeTime(date));
  const obliquityDeg = tilt.tobl;
  const ramcDeg = normalizeDeg(gastDeg + longitude);
  const ramc = ramcDeg * DEG2RAD$3;
  const eps = obliquityDeg * DEG2RAD$3;
  const phi = latitude * DEG2RAD$3;
  const ascY = Math.cos(ramc);
  const ascX = -Math.sin(ramc) * Math.cos(eps) - Math.tan(phi) * Math.sin(eps);
  const tropicalAsc = normalizeDeg(Math.atan2(ascY, ascX) * RAD2DEG$3);
  const ascendantSiderealDeg = normalizeDeg(tropicalAsc - ayanamshaDeg);
  const mcY = Math.sin(ramc);
  const mcX = Math.cos(ramc) * Math.cos(eps);
  const tropicalMC = normalizeDeg(Math.atan2(mcY, mcX) * RAD2DEG$3);
  const mcSiderealDeg = normalizeDeg(tropicalMC - ayanamshaDeg);
  return {
    ramcDeg,
    obliquityDeg,
    ascendantSiderealDeg,
    mcSiderealDeg,
    icSiderealDeg: normalizeDeg(mcSiderealDeg + 180),
    descendantSiderealDeg: normalizeDeg(ascendantSiderealDeg + 180)
  };
}
function computeSripatiBhavas(ascSiderealDeg, icSiderealDeg, dscSiderealDeg, mcSiderealDeg) {
  const madhyas = new Array(12);
  const q1 = clockwiseArcSpanDeg(ascSiderealDeg, icSiderealDeg) / 3;
  madhyas[0] = normalizeDeg(ascSiderealDeg);
  madhyas[1] = normalizeDeg(ascSiderealDeg + q1);
  madhyas[2] = normalizeDeg(ascSiderealDeg + 2 * q1);
  const q2 = clockwiseArcSpanDeg(icSiderealDeg, dscSiderealDeg) / 3;
  madhyas[3] = normalizeDeg(icSiderealDeg);
  madhyas[4] = normalizeDeg(icSiderealDeg + q2);
  madhyas[5] = normalizeDeg(icSiderealDeg + 2 * q2);
  const q3 = clockwiseArcSpanDeg(dscSiderealDeg, mcSiderealDeg) / 3;
  madhyas[6] = normalizeDeg(dscSiderealDeg);
  madhyas[7] = normalizeDeg(dscSiderealDeg + q3);
  madhyas[8] = normalizeDeg(dscSiderealDeg + 2 * q3);
  const q4 = clockwiseArcSpanDeg(mcSiderealDeg, ascSiderealDeg) / 3;
  madhyas[9] = normalizeDeg(mcSiderealDeg);
  madhyas[10] = normalizeDeg(mcSiderealDeg + q4);
  madhyas[11] = normalizeDeg(mcSiderealDeg + 2 * q4);
  return madhyas.map((madhyaDeg, idx) => {
    const prevMadhya = madhyas[(idx + 11) % 12];
    const nextMadhya = madhyas[(idx + 1) % 12];
    const sandhiStart = normalizeDeg(prevMadhya + clockwiseArcSpanDeg(prevMadhya, madhyaDeg) * 0.5);
    const sandhiEnd = normalizeDeg(madhyaDeg + clockwiseArcSpanDeg(madhyaDeg, nextMadhya) * 0.5);
    const spanDeg = Number(clockwiseArcSpanDeg(sandhiStart, sandhiEnd).toFixed(2));
    const rashiNum = Math.floor(madhyaDeg / 30) + 1;
    const rMeta = RASHI_META_12[rashiNum - 1];
    return {
      houseNumber: idx + 1,
      bhavaTitleHi: BHAVA_TITLES_HI[idx],
      madhyaSiderealDeg: Number(madhyaDeg.toFixed(4)),
      madhyaRashiNumber: rashiNum,
      madhyaRashiNameHi: rMeta.hi,
      madhyaDMS: formatDegToDMS(madhyaDeg % 30).fullDMS,
      sandhiStartSiderealDeg: Number(sandhiStart.toFixed(4)),
      sandhiStartDMS: `${RASHI_META_12[Math.floor(sandhiStart / 30)].hi} ${formatDegToDMS(sandhiStart % 30).shortDeg}`,
      sandhiEndSiderealDeg: Number(sandhiEnd.toFixed(4)),
      sandhiEndDMS: `${RASHI_META_12[Math.floor(sandhiEnd / 30)].hi} ${formatDegToDMS(sandhiEnd % 30).shortDeg}`,
      spanDeg
    };
  });
}
const SHODASHAVARGA_SPECS = [
  {
    id: "D1",
    nameHi: "D-1 लग्न कुंडली (Rashi Chart)",
    sanskritName: "राशि चक्र (Lagna)",
    significationHi: "सम्पूर्ण व्यक्तित्व, देह, स्वास्थ्य व जीवन की मूल दिशा",
    calculationMethodHi: "प्रत्येक राशि (30°) का पूर्ण 1 भाग (सम्पूर्ण राशि चक्र)",
    calculationMethodEn: "Whole-sign 30° zodiacal division from Sidereal Ascendant",
    birthTimeSensitivity: "moderate",
    limitationsHi: "लग्न औसतन हर ~2 घंटे में बदलता है; संधि के निकट होने पर मिनटों का अंतर भी लग्न बदल सकता है।",
    limitationsEn: "Ascendant changes roughly every ~2 hours; near sign boundaries even minutes matter."
  },
  {
    id: "D2",
    nameHi: "D-2 होरा चक्र (Hora — धन व संपत्ति)",
    sanskritName: "होरा (Hora)",
    significationHi: "संचित धन, समृद्धि और स्व-अर्जित बनाम पारिवारिक धन",
    calculationMethodHi: "पाराशरी सूर्य-चंद्र होरा (15° विभाजन): विषम राशि में 0–15° सिंह, 15–30° कर्क; सम राशि में 0–15° कर्क, 15–30° सिंह",
    calculationMethodEn: "Parashari Hora (15° halves): Odd signs Leo/Cancer; Even signs Cancer/Leo",
    birthTimeSensitivity: "moderate",
    limitationsHi: "केवल सिंह (4) और कर्क (5) दो ही राशियों में ग्रह विभाजित होते हैं; यह धन के झुकाव का सूचक है।",
    limitationsEn: "Places all bodies in Leo or Cancer only; indicates wealth disposition."
  },
  {
    id: "D3",
    nameHi: "D-3 द्रेष्काण (Drekkana — पराक्रम व सहोदर)",
    sanskritName: "द्रेष्काण (Drekkana)",
    significationHi: "साहस, भाई-बहन, छोटे प्रयास और पहल शक्ति",
    calculationMethodHi: "10° के 3 भाग: प्रथम (1वां), द्वितीय (5वां), तृतीय (9वां त्रिकोण राशि)",
    calculationMethodEn: "Three 10° decanates mapped to 1st, 5th, and 9th trine signs",
    birthTimeSensitivity: "moderate",
    limitationsHi: "सटीक भाई-बहन संख्या के बजाय जातक के पराक्रम व सहयोग को दर्शाता है।",
    limitationsEn: "Indicates courage and sibling harmony when D1 is also evaluated."
  },
  {
    id: "D4",
    nameHi: "D-4 चतुर्थांश (Chaturthamsha — भूमि व भाग्य)",
    sanskritName: "चतुर्थांश (Chaturthamsha)",
    significationHi: "अचल संपत्ति, गृह सुख, स्थायी निवास एवं भाग्योदय",
    calculationMethodHi: "7°30′ के 4 भाग: मूल राशि से 1, 4, 7, 10 केंद्र राशियाँ",
    calculationMethodEn: "Four 7.5° parts mapped to 1st, 4th, 7th, and 10th Kendra signs",
    birthTimeSensitivity: "high",
    limitationsHi: "D-4 लग्न लगभग 30 मिनट में बदल जाता है।",
    limitationsEn: "D-4 Ascendant shifts roughly every ~30 minutes."
  },
  {
    id: "D7",
    nameHi: "D-7 सप्तमांश (Saptamsha — संतान व सृजन)",
    sanskritName: "सप्तमांश (Saptamsha)",
    significationHi: "संतान सुख, सृजनात्मकता और वंश परंपरा",
    calculationMethodHi: "4°17′08″ के 7 भाग: विषम राशि में स्वयं से, सम राशि में सप्तम राशि से क्रमिक गणना",
    calculationMethodEn: "Seven ~4.2857° parts: odd counts from same sign, even from 7th sign",
    birthTimeSensitivity: "high",
    limitationsHi: "D-7 लग्न औसतन 17 मिनट में परिवर्तित होता है।",
    limitationsEn: "D-7 Ascendant shifts approximately every 17 minutes."
  },
  {
    id: "D9",
    nameHi: "D-9 नवमांश (Navamsha — विवाह, धर्म व सूक्ष्म बल)",
    sanskritName: "नवमांश (Navamsha)",
    significationHi: "विवाह, जीवनसाथी, धर्म और ग्रहों का आंतरिक फलित बल",
    calculationMethodHi: "3°20′ के 9 भाग: चर राशि में स्वयं से, स्थिर में 9वीं, द्विस्वभाव में 5वीं राशि से (अग्नि→मेष, पृथ्वी→मकर, वायु→तुला, जल→कर्क)",
    calculationMethodEn: "Nine 3°20′ parts starting from Aries (Fire), Capricorn (Earth), Libra (Air), Cancer (Water)",
    birthTimeSensitivity: "high",
    limitationsHi: "D-9 लग्न हर ~13 मिनट में बदलता है — सटीक जन्म समय होने पर ही नवमांश लग्न निर्णायक मानें।",
    limitationsEn: "D-9 Ascendant shifts roughly every ~13 minutes; requires accurate birth time."
  },
  {
    id: "D10",
    nameHi: "D-10 दशमांश (Dashamsha — करियर व कर्म)",
    sanskritName: "दशमांश (Dasamsha)",
    significationHi: "आजीविका, पद-प्रतिष्ठा, व्यापार और सामाजिक योगदान",
    calculationMethodHi: "3° के 10 भाग: विषम राशि में स्वयं से, सम राशि में 9वीं राशि से क्रमिक गणना",
    calculationMethodEn: "Ten 3° parts: odd signs start from same sign, even signs start from 9th sign",
    birthTimeSensitivity: "high",
    limitationsHi: "D-10 लग्न हर ~12 मिनट में बदलता है; संदिग्ध जन्म समय पर D-1 के दशम भाव को प्राथमिकता दें।",
    limitationsEn: "D-10 Ascendant shifts every ~12 minutes; rely on D-1 10th house if time is approximate."
  },
  {
    id: "D12",
    nameHi: "D-12 द्वादशांश (Dwadashamsha — माता-पिता व वंश)",
    sanskritName: "द्वादशांश (Dwadasamsha)",
    significationHi: "माता-पिता से संबंध, पैतृक संस्कार एवं पूर्वज आशीर्वाद",
    calculationMethodHi: "2°30′ के 12 भाग: प्रत्येक राशि में स्वयं उसी राशि से क्रमिक 12 राशियाँ",
    calculationMethodEn: "Twelve 2.5° parts counting sequentially from the occupied sign itself",
    birthTimeSensitivity: "high",
    limitationsHi: "D-12 लग्न ~10 मिनट में परिवर्तित हो जाता है।",
    limitationsEn: "D-12 Ascendant shifts roughly every 10 minutes."
  },
  {
    id: "D16",
    nameHi: "D-16 षोडशांश (Shodashamsha — वाहन व सुख)",
    sanskritName: "षोडशांश (Kalamsa)",
    significationHi: "वाहन, आराम, सुख-साधन एवं मानसिक प्रसन्नता",
    calculationMethodHi: "1°52′30″ के 16 भाग: चर राशि→मेष से, स्थिर→सिंह से, द्विस्वभाव→धनु से",
    calculationMethodEn: "Sixteen 1.875° parts: Movable from Aries, Fixed from Leo, Dual from Sagittarius",
    birthTimeSensitivity: "critical",
    limitationsHi: "D-16 लग्न ~7.5 मिनट में बदलता है; सटीक मिनट-आधारित जन्म समय आवश्यक है।",
    limitationsEn: "D-16 Ascendant shifts every ~7.5 minutes; exact birth time required."
  },
  {
    id: "D20",
    nameHi: "D-20 विंशांश (Vimshamsha — उपासना व साधना)",
    sanskritName: "विंशांश (Vimshamsha)",
    significationHi: "ईश्वर भक्ति, मंत्र सिद्धि, आध्यात्मिक झुकाव व इष्ट-उपासना",
    calculationMethodHi: "1°30′ के 20 भाग: चर→मेष से, स्थिर→धनु से, द्विस्वभाव→सिंह से",
    calculationMethodEn: "Twenty 1.5° parts: Movable from Aries, Fixed from Sagittarius, Dual from Leo",
    birthTimeSensitivity: "critical",
    limitationsHi: "D-20 लग्न हर ~6 मिनट में बदलता है।",
    limitationsEn: "D-20 Ascendant shifts every ~6 minutes."
  },
  {
    id: "D24",
    nameHi: "D-24 चतुर्विंशांश (Siddhamsha — विद्या व शोध)",
    sanskritName: "सिद्धांश (Chaturvimshamsha)",
    significationHi: "उच्च शिक्षा, डिग्री, बौद्धिक निपुणता और ज्ञान साधना",
    calculationMethodHi: "1°15′ के 24 भाग: विषम राशि में सिंह (5) से, सम राशि में कर्क (4) से क्रमिक गणना",
    calculationMethodEn: "Twenty-four 1.25° parts: Odd signs start from Leo, Even signs start from Cancer",
    birthTimeSensitivity: "critical",
    limitationsHi: "D-24 लग्न हर ~5 मिनट में बदलता है।",
    limitationsEn: "D-24 Ascendant shifts every ~5 minutes."
  },
  {
    id: "D27",
    nameHi: "D-27 सप्तविंशांश (Nakshatramsha — शारीरिक बल)",
    sanskritName: "भाम्श (Saptavimshamsha)",
    significationHi: "शारीरिक शक्ति, सहनशक्ति एवं सूक्ष्म प्रतिरक्षा बल",
    calculationMethodHi: "1°06′40″ के 27 भाग: अग्नि→मेष, पृथ्वी→कर्क, वायु→तुला, जल→मकर से प्रारंभ",
    calculationMethodEn: "Twenty-seven ~1.111° parts starting Aries (Fire), Cancer (Earth), Libra (Air), Capricorn (Water)",
    birthTimeSensitivity: "critical",
    limitationsHi: "D-27 लग्न ~4.4 मिनट में परिवर्तित होता है।",
    limitationsEn: "D-27 Ascendant shifts every ~4.4 minutes."
  },
  {
    id: "D30",
    nameHi: "D-30 त्रिंशांश (Trimshamsha — अरिष्ट व चरित्र शुद्धि)",
    sanskritName: "त्रिंशांश (Trimshamsha)",
    significationHi: "संभावित बाधाएँ, रोग प्रवृत्ति व आत्म-अनुशासन से रक्षा",
    calculationMethodHi: "असमान पाराशरी विभाजन: विषम (मेष 5°, कुम्भ 5°, धनु 8°, मिथुन 7°, तुला 5°); सम (वृषभ 5°, कन्या 7°, मीन 8°, मकर 5°, वृश्चिक 5°)",
    calculationMethodEn: "Classical unequal planetary domains (5/5/8/7/5 odd; 5/7/8/5/5 even)",
    birthTimeSensitivity: "critical",
    limitationsHi: "D-30 लग्न कुछ ही मिनटों में बदल सकता है।",
    limitationsEn: "D-30 Ascendant is highly sensitive to birth-time precision."
  },
  {
    id: "D40",
    nameHi: "D-40 खवेदांश (Khavedamsha — मातृकुल व शुभ फल)",
    sanskritName: "खवेदांश (Khavedamsha)",
    significationHi: "मातृपक्ष के संस्कार एवं जीवन में सूक्ष्म शुभ-अशुभ प्रभाव",
    calculationMethodHi: "0°45′ के 40 भाग: विषम राशि में मेष (1) से, सम राशि में तुला (7) से",
    calculationMethodEn: "Forty 0.75° parts: Odd signs start from Aries, Even signs start from Libra",
    birthTimeSensitivity: "critical",
    limitationsHi: "D-40 लग्न ~3 मिनट में बदल जाता है; केवल सटीक समय पर विचारणीय।",
    limitationsEn: "D-40 Ascendant shifts every ~3 minutes; requires exact birth time."
  },
  {
    id: "D45",
    nameHi: "D-45 अक्षवेदांश (Akshavedamsha — पितृकुल व नैतिक बल)",
    sanskritName: "अक्षवेदांश (Akshavedamsha)",
    significationHi: "पितृपक्ष के संस्कार, चारित्रिक दृढ़ता व नैतिक शुद्धता",
    calculationMethodHi: "0°40′ के 45 भाग: चर→मेष से, स्थिर→सिंह से, द्विस्वभाव→धनु से",
    calculationMethodEn: "Forty-five ~0.667° parts: Movable from Aries, Fixed from Leo, Dual from Sagittarius",
    birthTimeSensitivity: "critical",
    limitationsHi: "D-45 लग्न ~2.6 मिनट में बदल जाता है।",
    limitationsEn: "D-45 Ascendant shifts every ~2.6 minutes."
  },
  {
    id: "D60",
    nameHi: "D-60 षष्ट्यंश (Shashtiamsha — सूक्ष्म पूर्वकर्म)",
    sanskritName: "षष्ट्यंश (Shashtiamsha)",
    significationHi: "सूक्ष्मतम कर्मफल, पूर्वजन्म संस्कार एवं गहन फलित निर्णय",
    calculationMethodHi: "0°30′ (आधा अंश) के 60 भाग: पाराशरी सूत्रानुसार (अंश × 2) का 12 से शेष उसी राशि से गिनते हैं",
    calculationMethodEn: "Sixty 0.5° parts per BPHS: floor(deg * 2) modulo 12 counted from base sign",
    birthTimeSensitivity: "critical",
    limitationsHi: "⚠️ अति संवेदनशील: D-60 लग्न लगभग हर 2 मिनट में बदल जाता है! समय ±2 मिनट भी अनिश्चित हो तो D-60 लग्न पर निर्भर न रहें।",
    limitationsEn: "CRITICAL TIME SENSITIVITY: D-60 Ascendant shifts every ~2 minutes; do not rely on D-60 Ascendant unless birth time is verified to the minute."
  }
];
function computeDivisionalRashiBPHS(vargaId, siderealLonDeg) {
  const norm = normalizeDeg(siderealLonDeg);
  const baseRashi = Math.floor(norm / 30) + 1;
  const deg = norm % 30;
  const isOdd = baseRashi % 2 !== 0;
  switch (vargaId) {
    case "D1":
      return baseRashi;
    case "D2":
      return isOdd ? deg < 15 ? 5 : 4 : deg < 15 ? 4 : 5;
    case "D3": {
      const seg = Math.min(2, Math.floor(deg / 10));
      return (baseRashi - 1 + seg * 4) % 12 + 1;
    }
    case "D4": {
      const seg = Math.min(3, Math.floor(deg / 7.5));
      return (baseRashi - 1 + seg * 3) % 12 + 1;
    }
    case "D7": {
      const seg = Math.min(6, Math.floor(deg * 7 / 30));
      const start = isOdd ? baseRashi : (baseRashi - 1 + 6) % 12 + 1;
      return (start - 1 + seg) % 12 + 1;
    }
    case "D9": {
      const seg = Math.min(8, Math.floor(deg * 9 / 30));
      let start = 1;
      if ([1, 5, 9].includes(baseRashi)) start = 1;
      else if ([2, 6, 10].includes(baseRashi)) start = 10;
      else if ([3, 7, 11].includes(baseRashi)) start = 7;
      else start = 4;
      return (start - 1 + seg) % 12 + 1;
    }
    case "D10": {
      const seg = Math.min(9, Math.floor(deg / 3));
      const start = isOdd ? baseRashi : (baseRashi - 1 + 8) % 12 + 1;
      return (start - 1 + seg) % 12 + 1;
    }
    case "D12": {
      const seg = Math.min(11, Math.floor(deg / 2.5));
      return (baseRashi - 1 + seg) % 12 + 1;
    }
    case "D16": {
      const seg = Math.min(15, Math.floor(deg * 16 / 30));
      const start = [1, 4, 7, 10].includes(baseRashi) ? 1 : [2, 5, 8, 11].includes(baseRashi) ? 5 : 9;
      return (start - 1 + seg) % 12 + 1;
    }
    case "D20": {
      const seg = Math.min(19, Math.floor(deg * 20 / 30));
      const start = [1, 4, 7, 10].includes(baseRashi) ? 1 : [2, 5, 8, 11].includes(baseRashi) ? 9 : 5;
      return (start - 1 + seg) % 12 + 1;
    }
    case "D24": {
      const seg = Math.min(23, Math.floor(deg * 24 / 30));
      const start = isOdd ? 5 : 4;
      return (start - 1 + seg) % 12 + 1;
    }
    case "D27": {
      const seg = Math.min(26, Math.floor(deg * 27 / 30));
      const start = [1, 5, 9].includes(baseRashi) ? 1 : [2, 6, 10].includes(baseRashi) ? 4 : [3, 7, 11].includes(baseRashi) ? 7 : 10;
      return (start - 1 + seg) % 12 + 1;
    }
    case "D30": {
      if (isOdd) {
        if (deg < 5) return 1;
        if (deg < 10) return 11;
        if (deg < 18) return 9;
        if (deg < 25) return 3;
        return 7;
      }
      if (deg < 5) return 2;
      if (deg < 12) return 6;
      if (deg < 20) return 12;
      if (deg < 25) return 10;
      return 8;
    }
    case "D40": {
      const seg = Math.min(39, Math.floor(deg * 40 / 30));
      const start = isOdd ? 1 : 7;
      return (start - 1 + seg) % 12 + 1;
    }
    case "D45": {
      const seg = Math.min(44, Math.floor(deg * 45 / 30));
      const start = [1, 4, 7, 10].includes(baseRashi) ? 1 : [2, 5, 8, 11].includes(baseRashi) ? 5 : 9;
      return (start - 1 + seg) % 12 + 1;
    }
    case "D60": {
      const seg = Math.min(59, Math.floor(deg * 2));
      return (baseRashi - 1 + seg) % 12 + 1;
    }
  }
}
function buildWholeSignChart(ascRashiNum, planets, rashiLookup) {
  return Array.from({ length: 12 }, (_, idx) => {
    const houseNumber = idx + 1;
    const rashiNumber = (ascRashiNum - 1 + idx) % 12 + 1;
    const occupants = planets.filter((p) => rashiLookup(p) === rashiNumber).map((p) => ({
      id: p.id,
      hindiName: p.hindiName,
      shortHindi: p.shortHindi,
      symbol: p.symbol,
      degInt: p.degInt,
      fullDMS: p.fullDMS,
      isRetrograde: p.isRetrograde,
      isCombust: p.isCombust,
      chartLabel: p.chartLabel
    }));
    return {
      houseNumber,
      rashiNumber,
      rashiNameHi: RASHI_META_12[rashiNumber - 1].hi,
      planets: occupants
    };
  });
}
function getGeocentricBodyTropicalLon(body, utcEpochMs) {
  const dt0 = new Date(utcEpochMs);
  const dt1 = new Date(utcEpochMs + 864e4);
  const v0 = GeoVector(body, dt0, true);
  const v1 = GeoVector(body, dt1, true);
  const lon0 = normalizeDeg(Ecliptic(v0).elon);
  const lon1 = normalizeDeg(Ecliptic(v1).elon);
  let diff = lon1 - lon0;
  if (diff > 180) diff -= 360;
  if (diff < -180) diff += 360;
  return { tropicalLon: lon0, dailySpeedDeg: diff * 10 };
}
function computeSyncedBirthPanchang(spaceTime, ayanamshaMode, sunTropicalDeg, sunSiderealDeg, moonTropicalDeg, moonSiderealDeg, nakshatraIndex, nakshatraPada, moonWholeSignHouse) {
  const loc = {
    id: "kundali_birth_loc",
    name: spaceTime.birthPlaceDisplay,
    hindiName: spaceTime.birthPlaceDisplay,
    country: spaceTime.country,
    lat: spaceTime.latitude,
    lon: spaceTime.longitude,
    timezone: spaceTime.timeZone,
    tzOffsetHours: spaceTime.utcOffsetMinutes / 60,
    elevationMeters: spaceTime.elevationMeters
  };
  const timings = calculateDayAstronomicalTimings(
    spaceTime.year,
    spaceTime.month,
    spaceTime.day,
    loc
  );
  const isBeforeLocalSunrise = spaceTime.utcEpochMs < timings.sunriseTimestamp;
  const vedicWeekdayIndex = isBeforeLocalSunrise ? (spaceTime.civilWeekdayIndex + 6) % 7 : spaceTime.civilWeekdayIndex;
  const dayForIntervals = isBeforeLocalSunrise ? (() => {
    const prev = new Date(
      Date.UTC(spaceTime.year, spaceTime.month - 1, spaceTime.day) - 864e5
    );
    return calculateDayAstronomicalTimings(
      prev.getUTCFullYear(),
      prev.getUTCMonth() + 1,
      prev.getUTCDate(),
      loc
    );
  })() : timings;
  const { tithiIntervals } = buildTithiIntervalsForDay(
    dayForIntervals,
    spaceTime.dob,
    spaceTime.timeZone
  );
  const { nakshatraIntervals, yogaIntervals, karanaIntervals } = buildAngaIntervalsForDay(
    dayForIntervals,
    spaceTime.dob,
    spaceTime.timeZone,
    { ...DEFAULT_ASTRONOMICAL_CONFIG, ayanamsha: ayanamshaMode }
  );
  const activeTithiIv = tithiIntervals.find(
    (iv) => spaceTime.utcEpochMs >= iv.startTimestamp && spaceTime.utcEpochMs < iv.endTimestamp
  ) || tithiIntervals[0];
  const activeNakIv = nakshatraIntervals.find(
    (iv) => spaceTime.utcEpochMs >= iv.startTimestamp && spaceTime.utcEpochMs < iv.endTimestamp
  ) || nakshatraIntervals[0];
  const activeYogaIv = yogaIntervals.find(
    (iv) => spaceTime.utcEpochMs >= iv.startTimestamp && spaceTime.utcEpochMs < iv.endTimestamp
  ) || yogaIntervals[0];
  const activeKarIv = karanaIntervals.find(
    (iv) => spaceTime.utcEpochMs >= iv.startTimestamp && spaceTime.utcEpochMs < iv.endTimestamp
  ) || karanaIntervals[0];
  const moonSunDiff = normalizeDeg(moonTropicalDeg - sunTropicalDeg);
  const tithiNumber = Math.floor(moonSunDiff / 12) + 1;
  const pakshaHi = tithiNumber <= 15 ? "शुक्ल पक्ष" : "कृष्ण पक्ष";
  const tithiNameHi = getBaseTithiNameByIndex(tithiNumber);
  const yogaIndex = Math.floor(normalizeDeg(moonSiderealDeg + sunSiderealDeg) / (360 / 27)) % 27;
  const karIdx60 = Math.floor(moonSunDiff / 6) % 60;
  const karanaNameHi = getKaranaNameByIdx60(karIdx60);
  const janmaPayaHi = [1, 6, 11].includes(moonWholeSignHouse) ? "स्वर्ण पाया" : [2, 5, 9].includes(moonWholeSignHouse) ? "रजत पाया" : [3, 7, 10].includes(moonWholeSignHouse) ? "ताम्र पाया" : "लौह पाया";
  const VAAR_LORDS_HI = ["सूर्य", "चंद्र", "मंगल", "बुध", "गुरु", "शुक्र", "शनि"];
  return {
    civilWeekdayIndex: spaceTime.civilWeekdayIndex,
    civilVaarHi: VAAR_LIST[spaceTime.civilWeekdayIndex]?.full || "रविवार",
    vedicWeekdayIndex,
    vedicVaarHi: VAAR_LIST[vedicWeekdayIndex]?.full || "रविवार",
    vedicVaarLordHi: VAAR_LORDS_HI[vedicWeekdayIndex] || "सूर्य",
    isBeforeLocalSunrise,
    sunriseHi: timings.sunriseClockHi || formatClockOnlyInZone(timings.sunriseTimestamp, spaceTime.timeZone),
    sunsetHi: timings.sunsetClockHi || formatClockOnlyInZone(timings.sunsetTimestamp, spaceTime.timeZone),
    sunriseTimestampMs: timings.sunriseTimestamp,
    sunsetTimestampMs: timings.sunsetTimestamp,
    tithiNumber,
    tithiNameHi: `${pakshaHi} ${tithiNameHi}`,
    pakshaHi,
    tithiEndTimeHi: activeTithiIv?.endFormattedHi || "",
    nakshatraIndex,
    nakshatraNameHi: NAKSHATRAS_27[nakshatraIndex] || "अश्विनी",
    nakshatraPada,
    nakshatraLordHi: NAKSHATRA_LORDS_27[nakshatraIndex]?.lordHi || "केतु",
    nakshatraEndTimeHi: activeNakIv?.endFormattedHi || "",
    yogaIndex,
    yogaNameHi: YOGAS_27[yogaIndex] || "विष्कम्भ",
    yogaEndTimeHi: activeYogaIv?.endFormattedHi || "",
    karanaNameHi: karanaNameHi || KARANAS_11[0],
    karanaEndTimeHi: activeKarIv?.endFormattedHi || "",
    janmaPayaHi
  };
}
function computeKundaliAstronomy(spaceTime, options) {
  const ayanamshaMode = options?.ayanamshaMode || "LAHIRI";
  const nodeMode = "TRUE";
  const utcMs = spaceTime.utcEpochMs;
  const ayanamshaDeg = getAyanamshaDeg(utcMs, ayanamshaMode);
  const ayanamshaDMS = formatDegToDMS(ayanamshaDeg).fullDMS;
  const angles = computeAstronomicalAngles(
    utcMs,
    spaceTime.latitude,
    spaceTime.longitude,
    ayanamshaDeg
  );
  const ascRashiNumber = Math.floor(angles.ascendantSiderealDeg / 30) + 1;
  const mcRashiNumber = Math.floor(angles.mcSiderealDeg / 30) + 1;
  const rawBhavas = computeSripatiBhavas(
    angles.ascendantSiderealDeg,
    angles.icSiderealDeg,
    angles.descendantSiderealDeg,
    angles.mcSiderealDeg
  );
  const sunTrop0 = getApparentSunLonDeg(utcMs);
  const sunTrop1 = getApparentSunLonDeg(utcMs + 864e4);
  let sunDiff = sunTrop1 - sunTrop0;
  if (sunDiff > 180) sunDiff -= 360;
  if (sunDiff < -180) sunDiff += 360;
  const sunSpeed = sunDiff * 10;
  const moonTrop0 = getApparentMoonLonDeg(utcMs);
  const moonTrop1 = getApparentMoonLonDeg(utcMs + 864e4);
  let moonDiff = moonTrop1 - moonTrop0;
  if (moonDiff > 180) moonDiff -= 360;
  if (moonDiff < -180) moonDiff += 360;
  const moonSpeed = moonDiff * 10;
  const marsGeo = getGeocentricBodyTropicalLon(Body.Mars, utcMs);
  const mercGeo = getGeocentricBodyTropicalLon(Body.Mercury, utcMs);
  const jupGeo = getGeocentricBodyTropicalLon(Body.Jupiter, utcMs);
  const venGeo = getGeocentricBodyTropicalLon(Body.Venus, utcMs);
  const satGeo = getGeocentricBodyTropicalLon(Body.Saturn, utcMs);
  const nodes0 = getNodeLongitudesDeg(utcMs, ayanamshaMode, nodeMode);
  const nodes1 = getNodeLongitudesDeg(utcMs + 864e4, ayanamshaMode, nodeMode);
  let nodeDiff = nodes1.rahuDeg - nodes0.rahuDeg;
  if (nodeDiff > 180) nodeDiff -= 360;
  if (nodeDiff < -180) nodeDiff += 360;
  const nodeSpeed = nodeDiff * 10;
  const sunSiderealDeg = normalizeDeg(sunTrop0 - ayanamshaDeg);
  const moonSiderealDeg = normalizeDeg(moonTrop0 - ayanamshaDeg);
  const sunRashiNum = Math.floor(sunSiderealDeg / 30) + 1;
  const moonRashiNum = Math.floor(moonSiderealDeg / 30) + 1;
  const rawBodies = [
    { id: "sun", tropicalLon: sunTrop0, siderealLon: sunSiderealDeg, dailySpeedDeg: sunSpeed, isRetrograde: false },
    { id: "moon", tropicalLon: moonTrop0, siderealLon: moonSiderealDeg, dailySpeedDeg: moonSpeed, isRetrograde: false },
    {
      id: "mars",
      tropicalLon: marsGeo.tropicalLon,
      siderealLon: normalizeDeg(marsGeo.tropicalLon - ayanamshaDeg),
      dailySpeedDeg: marsGeo.dailySpeedDeg,
      isRetrograde: marsGeo.dailySpeedDeg < 0
    },
    {
      id: "mercury",
      tropicalLon: mercGeo.tropicalLon,
      siderealLon: normalizeDeg(mercGeo.tropicalLon - ayanamshaDeg),
      dailySpeedDeg: mercGeo.dailySpeedDeg,
      isRetrograde: mercGeo.dailySpeedDeg < 0
    },
    {
      id: "jupiter",
      tropicalLon: jupGeo.tropicalLon,
      siderealLon: normalizeDeg(jupGeo.tropicalLon - ayanamshaDeg),
      dailySpeedDeg: jupGeo.dailySpeedDeg,
      isRetrograde: jupGeo.dailySpeedDeg < 0
    },
    {
      id: "venus",
      tropicalLon: venGeo.tropicalLon,
      siderealLon: normalizeDeg(venGeo.tropicalLon - ayanamshaDeg),
      dailySpeedDeg: venGeo.dailySpeedDeg,
      isRetrograde: venGeo.dailySpeedDeg < 0
    },
    {
      id: "saturn",
      tropicalLon: satGeo.tropicalLon,
      siderealLon: normalizeDeg(satGeo.tropicalLon - ayanamshaDeg),
      dailySpeedDeg: satGeo.dailySpeedDeg,
      isRetrograde: satGeo.dailySpeedDeg < 0
    },
    {
      id: "rahu",
      tropicalLon: normalizeDeg(nodes0.rahuDeg + ayanamshaDeg),
      siderealLon: nodes0.rahuDeg,
      dailySpeedDeg: nodeSpeed,
      isRetrograde: false
      // Retrograde is the natural default state of Rahu — never tag as वक्री (*)
    },
    {
      id: "ketu",
      tropicalLon: normalizeDeg(nodes0.ketuDeg + ayanamshaDeg),
      siderealLon: nodes0.ketuDeg,
      dailySpeedDeg: nodeSpeed,
      isRetrograde: false
      // Retrograde is the natural default state of Ketu — never tag as वक्री (*)
    }
  ];
  const nakSpan = 360 / 27;
  const boundaryWarningsHi = [];
  const boundaryWarningsEn = [];
  const ascDegInSign = angles.ascendantSiderealDeg % 30;
  if (ascDegInSign < 1 || ascDegInSign > 29) {
    boundaryWarningsHi.push(
      `लग्न संधि चेतावनी: जन्म लग्न ${RASHI_META_12[ascRashiNumber - 1].hi} राशि में ${ascDegInSign.toFixed(2)}° पर है — जन्म समय में कुछ मिनट का अंतर लग्न बदल सकता है।`
    );
    boundaryWarningsEn.push(
      `Ascendant cusp notice: Ascendant is at ${ascDegInSign.toFixed(2)}° in ${RASHI_META_12[ascRashiNumber - 1].en} — a few minutes shift in birth time changes the Lagna.`
    );
  }
  const planets = rawBodies.map((b) => {
    const meta = PLANET_META[b.id];
    const rashiNumber = Math.floor(b.siderealLon / 30) + 1;
    const rMeta = RASHI_META_12[rashiNumber - 1];
    const degInSign = b.siderealLon % 30;
    const dms = formatDegToDMS(degInSign);
    const nakExact = b.siderealLon / nakSpan;
    const nakIdx = Math.floor(nakExact) % 27;
    const pada = Math.min(4, Math.max(1, Math.floor((nakExact - Math.floor(nakExact)) * 4) + 1));
    const nakLord = NAKSHATRA_LORDS_27[nakIdx];
    const combustCheck = isTaraGrahaCombust(b.id, b.siderealLon, sunSiderealDeg, b.isRetrograde);
    const sunSep = combustCheck.sunSepDeg;
    const orbLimit = combustCheck.orbLimit;
    const isCombust = combustCheck.isCombust;
    const chartLabel = formatPlanetLabel(
      {
        id: b.id,
        shortHindi: meta.shortHi,
        siderealLonDeg: b.siderealLon,
        isRetrograde: b.isRetrograde,
        isCombust
      },
      sunSiderealDeg
    );
    const wholeSignHouse = (rashiNumber - ascRashiNumber + 12) % 12 + 1;
    const chandraHouse = (rashiNumber - moonRashiNum + 12) % 12 + 1;
    const suryaHouse = (rashiNumber - sunRashiNum + 12) % 12 + 1;
    const bhavaMatch = rawBhavas.find(
      (bh) => isLongitudeInArc(b.siderealLon, bh.sandhiStartSiderealDeg, bh.sandhiEndSiderealDeg)
    );
    const bhavaChalitHouse = bhavaMatch ? bhavaMatch.houseNumber : wholeSignHouse;
    const nearRashiSandhi = degInSign < 1 || degInSign > 29;
    const degInNak = b.siderealLon % nakSpan;
    const nearNakshatraSandhi = degInNak < 0.35 || degInNak > nakSpan - 0.35;
    if (b.id === "moon" && nearRashiSandhi) {
      boundaryWarningsHi.push(
        `चंद्र राशि संधि: चंद्रमा ${rMeta.hi} राशि के ${degInSign.toFixed(2)}° पर हैं — जन्म समय व टाइमज़ोन की शुद्धता अत्यंत महत्वपूर्ण है।`
      );
      boundaryWarningsEn.push(
        `Moon Rashi boundary: Moon is at ${degInSign.toFixed(2)}° in ${rMeta.en} — exact birth time and timezone verification is critical.`
      );
    }
    return {
      id: b.id,
      englishName: meta.en,
      hindiName: meta.hi,
      shortHindi: meta.shortHi,
      symbol: meta.symbol,
      tropicalLonDeg: Number(b.tropicalLon.toFixed(4)),
      siderealLonDeg: Number(b.siderealLon.toFixed(4)),
      rashiNumber,
      rashiNameHi: rMeta.hi,
      rashiNameEn: rMeta.en,
      rashiLordHi: rMeta.lordHi,
      rashiLordId: rMeta.lordId,
      degInSign: Number(degInSign.toFixed(4)),
      shortDeg: dms.shortDeg,
      fullDMS: dms.fullDMS,
      degInt: dms.degInt,
      nakshatraIndex: nakIdx,
      nakshatraNameHi: NAKSHATRAS_27[nakIdx],
      nakshatraLordId: nakLord.lordId,
      nakshatraLordHi: nakLord.lordHi,
      pada,
      dailySpeedDeg: Number(b.dailySpeedDeg.toFixed(4)),
      isRetrograde: b.isRetrograde,
      isCombust,
      chartLabel,
      combustionOrbDeg: orbLimit,
      sunSeparationDeg: b.id === "sun" ? void 0 : Number(sunSep.toFixed(2)),
      wholeSignHouse,
      chandraHouse,
      suryaHouse,
      bhavaChalitHouse,
      shiftedInBhavaChalit: bhavaChalitHouse !== wholeSignHouse,
      nearRashiSandhi,
      nearNakshatraSandhi
    };
  });
  const sripatiBhavas = rawBhavas.map((bh) => ({
    ...bh,
    occupantIds: planets.filter((p) => p.bhavaChalitHouse === bh.houseNumber).map((p) => p.id)
  }));
  const lagnaD1 = buildWholeSignChart(ascRashiNumber, planets, (p) => p.rashiNumber);
  const chandra = buildWholeSignChart(moonRashiNum, planets, (p) => p.rashiNumber);
  const surya = buildWholeSignChart(sunRashiNum, planets, (p) => p.rashiNumber);
  const bhavaChalit = sripatiBhavas.map((bh) => ({
    houseNumber: bh.houseNumber,
    rashiNumber: bh.madhyaRashiNumber,
    rashiNameHi: bh.madhyaRashiNameHi,
    planets: planets.filter((p) => p.bhavaChalitHouse === bh.houseNumber).map((p) => ({
      id: p.id,
      hindiName: p.hindiName,
      shortHindi: p.shortHindi,
      symbol: p.symbol,
      degInt: p.degInt,
      fullDMS: p.fullDMS,
      isRetrograde: p.isRetrograde,
      isCombust: p.isCombust,
      chartLabel: p.chartLabel
    }))
  }));
  const shodashavarga = SHODASHAVARGA_SPECS.map((spec) => {
    const ascVargaRashi = computeDivisionalRashiBPHS(spec.id, angles.ascendantSiderealDeg);
    const planetRashis = {};
    for (const pl of planets) {
      planetRashis[pl.id] = computeDivisionalRashiBPHS(spec.id, pl.siderealLonDeg);
    }
    const houses = buildWholeSignChart(ascVargaRashi, planets, (pl) => planetRashis[pl.id]);
    return {
      spec,
      ascendantRashiNumber: ascVargaRashi,
      ascendantRashiNameHi: RASHI_META_12[ascVargaRashi - 1].hi,
      planetRashis,
      houses
    };
  });
  const navamshaChart = shodashavarga.find((v) => v.spec.id === "D9")?.houses || lagnaD1;
  const moonState = planets.find((p) => p.id === "moon");
  const birthPanchang = computeSyncedBirthPanchang(
    spaceTime,
    ayanamshaMode,
    sunTrop0,
    sunSiderealDeg,
    moonTrop0,
    moonSiderealDeg,
    moonState.nakshatraIndex,
    moonState.pada,
    moonState.wholeSignHouse
  );
  return {
    config: {
      system: "Drik Ganita",
      ayanamshaMode,
      ayanamshaLabelHi: AYANAMSHA_LABELS_HI[ayanamshaMode] || AYANAMSHA_LABELS_HI.LAHIRI,
      ayanamshaDeg: Number(ayanamshaDeg.toFixed(6)),
      ayanamshaDMS,
      zodiac: "Sidereal",
      nodeMode,
      houseSystem: "Whole Sign (D1 Rashi) + Sripati Bhava Chalit (MC-derived)",
      ephemerisEngine: "astronomy-engine (VSOP87 / ELP)",
      recordedAtUtc: spaceTime.utcIsoString
    },
    spaceTime,
    angles: {
      ramcDeg: Number(angles.ramcDeg.toFixed(4)),
      obliquityDeg: Number(angles.obliquityDeg.toFixed(4)),
      ascendantSiderealDeg: Number(angles.ascendantSiderealDeg.toFixed(4)),
      ascendantRashiNumber: ascRashiNumber,
      ascendantRashiNameHi: RASHIS_12[ascRashiNumber - 1] || RASHI_META_12[ascRashiNumber - 1].hi,
      ascendantDMS: formatDegToDMS(angles.ascendantSiderealDeg % 30).fullDMS,
      mcSiderealDeg: Number(angles.mcSiderealDeg.toFixed(4)),
      mcRashiNumber,
      mcRashiNameHi: RASHI_META_12[mcRashiNumber - 1].hi,
      mcDMS: formatDegToDMS(angles.mcSiderealDeg % 30).fullDMS,
      icSiderealDeg: Number(angles.icSiderealDeg.toFixed(4)),
      descendantSiderealDeg: Number(angles.descendantSiderealDeg.toFixed(4))
    },
    planets,
    sripatiBhavas,
    mainCharts: {
      lagnaD1,
      chandra,
      surya,
      bhavaChalit,
      navamshaD9: navamshaChart
    },
    shodashavarga,
    birthPanchang,
    boundaryWarningsHi,
    boundaryWarningsEn
  };
}
const SHADBALA_GRAHA_IDS = [
  "sun",
  "moon",
  "mars",
  "mercury",
  "jupiter",
  "venus",
  "saturn"
];
const DEG2RAD$2 = Math.PI / 180;
const RAD2DEG$2 = 180 / Math.PI;
const PARAMA_UCHCHA_LON = {
  sun: 10,
  // Aries 10°
  moon: 33,
  // Taurus 3°
  mars: 298,
  // Capricorn 28°
  mercury: 165,
  // Virgo 15°
  jupiter: 95,
  // Cancer 5°
  venus: 357,
  // Pisces 27°
  saturn: 200
  // Libra 20°
};
const NAISARGIKA_BALA_VIRUPAS = {
  sun: 60,
  moon: 51.43,
  venus: 42.86,
  jupiter: 34.29,
  mercury: 25.71,
  mars: 17.14,
  saturn: 8.57
};
const REQUIRED_SHADBALA_VIRUPAS = {
  sun: 390,
  // 6.5 Rupas
  moon: 360,
  // 6.0 Rupas
  mars: 300,
  // 5.0 Rupas
  mercury: 420,
  // 7.0 Rupas
  jupiter: 390,
  // 6.5 Rupas
  venus: 330,
  // 5.5 Rupas
  saturn: 300
  // 5.0 Rupas
};
const OWN_RASHIS_7 = {
  sun: [5],
  moon: [4],
  mars: [1, 8],
  mercury: [3, 6],
  jupiter: [9, 12],
  venus: [2, 7],
  saturn: [10, 11]
};
const MOOLATRIKONA_D1 = {
  sun: { sign: 5, minDeg: 0, maxDeg: 20 },
  moon: { sign: 2, minDeg: 3, maxDeg: 30 },
  mars: { sign: 1, minDeg: 0, maxDeg: 12 },
  mercury: { sign: 6, minDeg: 15, maxDeg: 20 },
  jupiter: { sign: 9, minDeg: 0, maxDeg: 10 },
  venus: { sign: 7, minDeg: 0, maxDeg: 15 },
  saturn: { sign: 11, minDeg: 0, maxDeg: 20 }
};
const NATURAL_MAITRI = {
  sun: { sun: 1, moon: 1, mars: 1, mercury: 0, jupiter: 1, venus: -1, saturn: -1 },
  moon: { sun: 1, moon: 1, mars: 0, mercury: 1, jupiter: 0, venus: 0, saturn: 0 },
  mars: { sun: 1, moon: 1, mars: 1, mercury: -1, jupiter: 1, venus: 0, saturn: 0 },
  mercury: { sun: 1, moon: -1, mars: 0, mercury: 1, jupiter: 0, venus: 1, saturn: 0 },
  jupiter: { sun: 1, moon: 1, mars: 1, mercury: -1, jupiter: 1, venus: -1, saturn: 0 },
  venus: { sun: -1, moon: -1, mars: 0, mercury: 1, jupiter: 0, venus: 1, saturn: 1 },
  saturn: { sun: -1, moon: -1, mars: -1, mercury: 1, jupiter: 0, venus: 1, saturn: 1 }
};
const WEEKDAY_LORDS = [
  "sun",
  "moon",
  "mars",
  "mercury",
  "jupiter",
  "venus",
  "saturn"
];
const CHALDEAN_ORDER = [
  "saturn",
  "jupiter",
  "mars",
  "sun",
  "venus",
  "mercury",
  "moon"
];
const SAPTAVARGA_IDS = ["D1", "D2", "D3", "D7", "D9", "D12", "D30"];
function angularSep(a, b) {
  const d = Math.abs(normalizeDeg(a) - normalizeDeg(b));
  return d > 180 ? 360 - d : d;
}
function getPlanetMap(report) {
  const map = {};
  for (const p of report.planets) {
    if (p.id !== "rahu" && p.id !== "ketu") {
      map[p.id] = p;
    }
  }
  return map;
}
function isBrightMoon(sunLon, moonLon) {
  const elong = normalizeDeg(moonLon - sunLon);
  return elong >= 90 && elong <= 270;
}
function isMercuryBenefic(planets) {
  const mercRashi = planets.mercury.rashiNumber;
  const sunLon = planets.sun.siderealLonDeg;
  const moonLon = planets.moon.siderealLonDeg;
  const moonIsShubha = isBrightMoon(sunLon, moonLon);
  const beneficsInSameSign = [];
  const maleficsInSameSign = [];
  for (const id of SHADBALA_GRAHA_IDS) {
    if (id === "mercury") continue;
    if (planets[id].rashiNumber !== mercRashi) continue;
    const isBen = id === "jupiter" || id === "venus" || id === "moon" && moonIsShubha;
    if (isBen) beneficsInSameSign.push(id);
    else maleficsInSameSign.push(id);
  }
  if (maleficsInSameSign.length > 0 && beneficsInSameSign.length === 0) {
    return false;
  }
  return true;
}
function computeTatkalikaMaitri(grahaRashi, otherRashi) {
  const rel = (otherRashi - grahaRashi + 12) % 12 + 1;
  return [2, 3, 4, 10, 11, 12].includes(rel) ? 1 : -1;
}
function getSaptavargajaPointsForSign(grahaId, vargaId, signNum, degInSignD1, planetsD1) {
  if (vargaId === "D1") {
    const mt = MOOLATRIKONA_D1[grahaId];
    if (mt.sign === signNum && degInSignD1 >= mt.minDeg && degInSignD1 < mt.maxDeg) {
      return 45;
    }
  }
  if (OWN_RASHIS_7[grahaId].includes(signNum)) {
    return 30;
  }
  const signLord = RASHI_META_12[signNum - 1].lordId;
  if (signLord === grahaId) return 30;
  const nat = NATURAL_MAITRI[grahaId][signLord];
  const tat = computeTatkalikaMaitri(
    planetsD1[grahaId].rashiNumber,
    planetsD1[signLord].rashiNumber
  );
  const compound = nat + tat;
  if (compound >= 2) return 22.5;
  if (compound === 1) return 15;
  if (compound === 0) return 7.5;
  if (compound === -1) return 3.75;
  return 1.875;
}
function computeSthanaBalaForGraha(grahaId, p, planetsD1) {
  const neechaLon = normalizeDeg(PARAMA_UCHCHA_LON[grahaId] + 180);
  const distFromNeecha = angularSep(p.siderealLonDeg, neechaLon);
  const uchchaBala = Number((distFromNeecha / 3).toFixed(2));
  let saptavargajaSum = 0;
  for (const vId of SAPTAVARGA_IDS) {
    const vRashi = computeDivisionalRashiBPHS(vId, p.siderealLonDeg);
    saptavargajaSum += getSaptavargajaPointsForSign(
      grahaId,
      vId,
      vRashi,
      p.degInSign,
      planetsD1
    );
  }
  const saptavargajaBala = Number(saptavargajaSum.toFixed(2));
  const d1Rashi = p.rashiNumber;
  const d9Rashi = computeDivisionalRashiBPHS("D9", p.siderealLonDeg);
  const prefersEven = grahaId === "moon" || grahaId === "venus";
  let ojayugmaBala = 0;
  if (prefersEven) {
    if (d1Rashi % 2 === 0) ojayugmaBala += 15;
    if (d9Rashi % 2 === 0) ojayugmaBala += 15;
  } else {
    if (d1Rashi % 2 === 1) ojayugmaBala += 15;
    if (d9Rashi % 2 === 1) ojayugmaBala += 15;
  }
  const h = p.bhavaChalitHouse;
  const kendradiBala = [1, 4, 7, 10].includes(h) ? 60 : [2, 5, 8, 11].includes(h) ? 30 : 15;
  const decan = Math.min(2, Math.floor(p.degInSign / 10));
  let drekkanaBala = 0;
  if ((grahaId === "sun" || grahaId === "mars" || grahaId === "jupiter") && decan === 0) {
    drekkanaBala = 15;
  } else if ((grahaId === "moon" || grahaId === "venus") && decan === 1) {
    drekkanaBala = 15;
  } else if ((grahaId === "mercury" || grahaId === "saturn") && decan === 2) {
    drekkanaBala = 15;
  }
  const total = Number(
    (uchchaBala + saptavargajaBala + ojayugmaBala + kendradiBala + drekkanaBala).toFixed(2)
  );
  return {
    uchchaBala,
    saptavargajaBala,
    ojayugmaBala,
    kendradiBala,
    drekkanaBala,
    total
  };
}
function computeDigBalaForGraha(grahaId, siderealLonDeg, angles) {
  let zeroCuspDeg = angles.descendantSiderealDeg;
  if (grahaId === "jupiter" || grahaId === "mercury") {
    zeroCuspDeg = angles.descendantSiderealDeg;
  } else if (grahaId === "sun" || grahaId === "mars") {
    zeroCuspDeg = angles.icSiderealDeg;
  } else if (grahaId === "saturn") {
    zeroCuspDeg = angles.ascendantSiderealDeg;
  } else if (grahaId === "moon" || grahaId === "venus") {
    zeroCuspDeg = angles.mcSiderealDeg;
  }
  const dist = angularSep(siderealLonDeg, zeroCuspDeg);
  return Number((dist / 3).toFixed(2));
}
function computeSolarIngressUtcMs(approxUtcMs, targetSiderealLon) {
  let t = approxUtcMs;
  for (let i = 0; i < 6; i++) {
    const cur = getSiderealSunLonDeg(t, "LAHIRI");
    let diff = targetSiderealLon - cur;
    if (diff > 180) diff -= 360;
    if (diff < -180) diff += 360;
    t += diff / 0.9856 * 864e5;
  }
  return t;
}
function getVedicWeekdayIndexAtInstant(utcMs, timeZone, latitude, longitude) {
  const observer = new Observer(latitude, longitude, 0);
  const d = new Date(utcMs);
  const startOfDayUtc = Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate(), 0, 0, 0) - 864e5;
  const rise = SearchRiseSet(Body.Sun, observer, 1, new Date(startOfDayUtc), 3);
  const riseMs = rise ? rise.date.getTime() : utcMs;
  const localFmt = new Intl.DateTimeFormat("en-US", {
    timeZone,
    weekday: "short"
  });
  const wdMap = {
    Sun: 0,
    Mon: 1,
    Tue: 2,
    Wed: 3,
    Thu: 4,
    Fri: 5,
    Sat: 6
  };
  const checkMs = utcMs < riseMs ? utcMs - 864e5 : utcMs;
  const wdStr = localFmt.format(new Date(checkMs));
  return wdMap[wdStr] ?? 0;
}
function computeTemporalLords(report) {
  const st = report.spaceTime;
  const bp = report.birthPanchang;
  const utcMs = st.utcEpochMs;
  const dinaLord = WEEKDAY_LORDS[bp.vedicWeekdayIndex] || "sun";
  const sunriseMs = bp.sunriseTimestampMs;
  const sunsetMs = bp.sunsetTimestampMs;
  const dayLen = Math.max(36e5, sunsetMs - sunriseMs);
  const isDaytime = !bp.isBeforeLocalSunrise && utcMs >= sunriseMs && utcMs < sunsetMs;
  let horaElapsedCount = 0;
  let dayFractionFromSunrise = -1;
  let nightFractionFromSunset = -1;
  if (isDaytime) {
    const frac = (utcMs - sunriseMs) / dayLen;
    dayFractionFromSunrise = Math.min(0.9999, Math.max(0, frac));
    horaElapsedCount = Math.min(11, Math.floor(frac * 12));
  } else {
    const prevSunsetMs = bp.isBeforeLocalSunrise ? sunsetMs - 864e5 : sunsetMs;
    const nextSunriseMs = bp.isBeforeLocalSunrise ? sunriseMs : sunriseMs + 864e5;
    const nightLen = Math.max(36e5, nextSunriseMs - prevSunsetMs);
    const frac = Math.min(0.9999, Math.max(0, (utcMs - prevSunsetMs) / nightLen));
    nightFractionFromSunset = frac;
    horaElapsedCount = 12 + Math.min(11, Math.floor(frac * 12));
  }
  const startChaldeanIdx = CHALDEAN_ORDER.indexOf(dinaLord);
  const horaLord = CHALDEAN_ORDER[(startChaldeanIdx + horaElapsedCount) % 7];
  const solarNoonMs = sunriseMs + dayLen * 0.5;
  let dtNoonHours = Math.abs(utcMs - solarNoonMs) / 36e5;
  if (dtNoonHours > 12) dtNoonHours = Math.abs(24 - dtNoonHours);
  const solarHoursFromNoon = Math.min(12, Math.max(0, dtNoonHours));
  const sunLon = report.planets.find((p) => p.id === "sun")?.siderealLonDeg ?? 0;
  const daysSinceMesha = sunLon / 360 * 365.25636;
  const approxMeshaMs = utcMs - daysSinceMesha * 864e5;
  const exactMeshaMs = computeSolarIngressUtcMs(approxMeshaMs, 0);
  const meshaVedicWd = getVedicWeekdayIndexAtInstant(
    exactMeshaMs,
    st.timeZone,
    st.latitude,
    st.longitude
  );
  const varshaLord = WEEKDAY_LORDS[meshaVedicWd] || "sun";
  const currentSolarMonthIdx = Math.floor(sunLon / 30);
  const degIntoSolarMonth = sunLon - currentSolarMonthIdx * 30;
  const approxMonthStartMs = utcMs - degIntoSolarMonth / 30 * 30.437 * 864e5;
  const exactMonthStartMs = computeSolarIngressUtcMs(
    approxMonthStartMs,
    currentSolarMonthIdx * 30
  );
  const masaVedicWd = getVedicWeekdayIndexAtInstant(
    exactMonthStartMs,
    st.timeZone,
    st.latitude,
    st.longitude
  );
  const masaLord = WEEKDAY_LORDS[masaVedicWd] || "sun";
  return {
    varshaLord,
    masaLord,
    dinaLord,
    horaLord,
    dayFractionFromSunrise,
    nightFractionFromSunset,
    solarHoursFromNoon
  };
}
function getTribhagaLord(dayFraction, nightFraction) {
  if (dayFraction >= 0) {
    if (dayFraction < 1 / 3) return "mercury";
    if (dayFraction < 2 / 3) return "sun";
    return "saturn";
  }
  if (nightFraction < 1 / 3) return "moon";
  if (nightFraction < 2 / 3) return "venus";
  return "mars";
}
function getEquatorialDeclinationDeg(tropicalLonDeg, obliquityDeg, bodyId, utcMs) {
  if (bodyId && utcMs !== void 0) {
    const bodyMap = {
      sun: Body.Sun,
      moon: Body.Moon,
      mars: Body.Mars,
      mercury: Body.Mercury,
      jupiter: Body.Jupiter,
      venus: Body.Venus,
      saturn: Body.Saturn
    };
    const obs = new Observer(0, 0, 0);
    const eq = Equator(bodyMap[bodyId], new Date(utcMs), obs, true, true);
    return eq.dec;
  }
  const sinDec = Math.sin(obliquityDeg * DEG2RAD$2) * Math.sin(tropicalLonDeg * DEG2RAD$2);
  return Math.asin(Math.max(-1, Math.min(1, sinDec))) * RAD2DEG$2;
}
function getEclipticLatitudeDeg(grahaId, utcMs) {
  const bodyMap = {
    sun: Body.Sun,
    moon: Body.Moon,
    mars: Body.Mars,
    mercury: Body.Mercury,
    jupiter: Body.Jupiter,
    venus: Body.Venus,
    saturn: Body.Saturn
  };
  const vec = GeoVector(bodyMap[grahaId], new Date(utcMs), true);
  return Ecliptic(vec).elat;
}
const J2000_MEAN_ELEMENTS = {
  sun: { L0: 280.46646, dailyRate: 0.98564736 },
  mercury: { L0: 252.25091, dailyRate: 4.09233445 },
  venus: { L0: 181.9798, dailyRate: 1.60213034 },
  mars: { L0: 355.433, dailyRate: 0.52402068 },
  jupiter: { L0: 34.35152, dailyRate: 0.08309121 },
  saturn: { L0: 50.07744, dailyRate: 0.03344414 }
};
function getMeanSiderealLon(body, julianDayUT, ayanamshaDeg) {
  const d = julianDayUT - 2451545;
  const el = J2000_MEAN_ELEMENTS[body];
  const meanTrop = normalizeDeg(el.L0 + el.dailyRate * d);
  return normalizeDeg(meanTrop - ayanamshaDeg);
}
function computeCheshtaBalaForGraha(grahaId, p, ayanaBalaSun, pakshaBalaMoonRaw, utcMs, julianDayUT, ayanamshaDeg) {
  if (grahaId === "sun") {
    return Number(Math.min(60, Math.max(0, ayanaBalaSun)).toFixed(2));
  }
  if (grahaId === "moon") {
    return Number(Math.min(60, Math.max(0, pakshaBalaMoonRaw)).toFixed(2));
  }
  const sunMeanSid = getMeanSiderealLon("sun", julianDayUT, ayanamshaDeg);
  let sighrochcha = sunMeanSid;
  let madhya = sunMeanSid;
  if (grahaId === "mercury" || grahaId === "venus") {
    const body = grahaId === "mercury" ? Body.Mercury : Body.Venus;
    const hVec = HelioVector(body, new Date(utcMs));
    const hEcl = Ecliptic(hVec);
    sighrochcha = normalizeDeg(hEcl.elon - ayanamshaDeg);
    madhya = sunMeanSid;
  } else {
    sighrochcha = sunMeanSid;
    madhya = getMeanSiderealLon(grahaId, julianDayUT, ayanamshaDeg);
  }
  const diffMT = normalizeDeg(p.siderealLonDeg - madhya);
  const halfDiff = diffMT > 180 ? (diffMT - 360) * 0.5 : diffMT * 0.5;
  const meanOfMadhyaAndTrue = normalizeDeg(madhya + halfDiff);
  const cheshtaKendra = angularSep(meanOfMadhyaAndTrue, sighrochcha);
  return Number(Math.min(60, Math.max(0, cheshtaKendra / 3)).toFixed(2));
}
function computeParashariAspectVirupas(aspecterId, aspecterLon, targetLon) {
  const d = normalizeDeg(targetLon - aspecterLon);
  let baseAspect = 0;
  if (d >= 30 && d < 60) {
    baseAspect = (d - 30) / 2;
  } else if (d >= 60 && d < 90) {
    baseAspect = 15 + (d - 60);
  } else if (d >= 90 && d < 120) {
    baseAspect = 45 - (d - 90) / 2;
  } else if (d >= 120 && d < 150) {
    baseAspect = 30 - (d - 120);
  } else if (d >= 150 && d < 180) {
    baseAspect = (d - 150) * 2;
  } else if (d >= 180 && d < 300) {
    baseAspect = (300 - d) / 2;
  } else {
    baseAspect = 0;
  }
  let specialBonus = 0;
  if (aspecterId === "saturn") {
    if (d >= 60 && d < 90) specialBonus = 45 * ((90 - d) / 30);
    else if (d >= 270 && d < 300) specialBonus = 45 * ((300 - d) / 30);
  } else if (aspecterId === "mars") {
    if (d >= 90 && d < 120) specialBonus = 15 * ((120 - d) / 30);
    else if (d >= 210 && d < 240) specialBonus = 15 * ((240 - d) / 30);
  } else if (aspecterId === "jupiter") {
    if (d >= 120 && d < 150) specialBonus = 30 * ((150 - d) / 30);
    else if (d >= 240 && d < 270) specialBonus = 30 * ((270 - d) / 30);
  }
  return Math.min(60, Math.max(0, baseAspect + specialBonus));
}
function computeDrikBalaForGraha(targetId, planets, moonIsBenefic, mercuryIsBenefic) {
  const targetLon = planets[targetId].siderealLonDeg;
  let signedSum = 0;
  for (const aspecterId of SHADBALA_GRAHA_IDS) {
    if (aspecterId === targetId) continue;
    const rawAspect = computeParashariAspectVirupas(
      aspecterId,
      planets[aspecterId].siderealLonDeg,
      targetLon
    );
    const quarter = rawAspect * 0.25;
    const isBenefic = aspecterId === "jupiter" || aspecterId === "venus" || aspecterId === "moon" && moonIsBenefic || aspecterId === "mercury" && mercuryIsBenefic;
    signedSum += isBenefic ? quarter : -quarter;
  }
  return Number(signedSum.toFixed(2));
}
function getBhavaRashiNature(rashiNum, degInSign) {
  if (rashiNum === 8) return { nature: "keeta", labelHi: "कीट" };
  if (rashiNum === 4 || rashiNum === 12) return { nature: "jala", labelHi: "जलचर" };
  if (rashiNum === 1 || rashiNum === 2 || rashiNum === 5) {
    return { nature: "chatushpada", labelHi: "चतुष्पद" };
  }
  if (rashiNum === 3 || rashiNum === 6 || rashiNum === 7 || rashiNum === 11) {
    return { nature: "nara", labelHi: "नराश्रय (द्विपद)" };
  }
  if (rashiNum === 9) {
    return degInSign < 15 ? { nature: "nara", labelHi: "नराश्रय (द्विपद)" } : { nature: "chatushpada", labelHi: "चतुष्पद" };
  }
  return degInSign < 15 ? { nature: "chatushpada", labelHi: "चतुष्पद" } : { nature: "jala", labelHi: "जलचर" };
}
function computeBhavaDigBala(houseNum, nature) {
  const zeroHouseMap = {
    nara: 7,
    jala: 10,
    chatushpada: 4,
    keeta: 1
  };
  const zeroH = zeroHouseMap[nature];
  const distHouses = Math.min(
    Math.abs(houseNum - zeroH),
    12 - Math.abs(houseNum - zeroH)
  );
  return Number((distHouses * 10).toFixed(2));
}
function computeBhavaDrishtiBala(cusp, planets, moonIsBenefic, mercuryIsBenefic) {
  let sum = 0;
  for (const id of SHADBALA_GRAHA_IDS) {
    const rawAspect = computeParashariAspectVirupas(
      id,
      planets[id].siderealLonDeg,
      cusp.madhyaSiderealDeg
    );
    if (id === "jupiter") {
      sum += rawAspect;
    } else if (id === "mercury") {
      sum += mercuryIsBenefic ? rawAspect : -rawAspect * 0.25;
    } else if (id === "venus" || id === "moon" && moonIsBenefic) {
      sum += rawAspect * 0.25;
    } else {
      sum -= rawAspect * 0.25;
    }
  }
  return Number(sum.toFixed(2));
}
function computeShadbalaAndBhavaBala(report) {
  const planets = getPlanetMap(report);
  const utcMs = report.spaceTime.utcEpochMs;
  const jd = report.spaceTime.julianDayUT;
  const ayanamshaDeg = report.config.ayanamshaDeg;
  const obliquityDeg = report.angles.obliquityDeg;
  const sunLon = planets.sun.siderealLonDeg;
  const moonLon = planets.moon.siderealLonDeg;
  const moonIsBenefic = isBrightMoon(sunLon, moonLon);
  const mercuryIsBenefic = isMercuryBenefic(planets);
  const temporal = computeTemporalLords(report);
  const tribhagaLord = getTribhagaLord(
    temporal.dayFractionFromSunrise,
    temporal.nightFractionFromSunset
  );
  const moonSunElong = normalizeDeg(moonLon - sunLon);
  const pakshaArc = moonSunElong <= 180 ? moonSunElong : 360 - moonSunElong;
  const pakshaBeneficRaw = pakshaArc / 3;
  const pakshaMaleficRaw = (180 - pakshaArc) / 3;
  const sthanaMap = {};
  const digMap = {};
  const kalaPreYuddhaMap = {};
  const ayanaMap = {};
  for (const id of SHADBALA_GRAHA_IDS) {
    const p = planets[id];
    sthanaMap[id] = computeSthanaBalaForGraha(id, p, planets);
    digMap[id] = computeDigBalaForGraha(id, p.siderealLonDeg, report.angles);
    let natonnataBala = 60;
    if (id !== "mercury") {
      const dayFactor = Math.max(0, 1 - temporal.solarHoursFromNoon / 12);
      if (id === "sun" || id === "jupiter" || id === "venus") {
        natonnataBala = Number((60 * dayFactor).toFixed(2));
      } else {
        natonnataBala = Number((60 * (1 - dayFactor)).toFixed(2));
      }
    }
    let pakshaBala = 0;
    if (id === "moon") {
      pakshaBala = Number((pakshaBeneficRaw * 2).toFixed(2));
    } else if (id === "jupiter" || id === "venus" || id === "mercury" && mercuryIsBenefic) {
      pakshaBala = Number(pakshaBeneficRaw.toFixed(2));
    } else {
      pakshaBala = Number(pakshaMaleficRaw.toFixed(2));
    }
    const tribhagaBala = id === "jupiter" || id === tribhagaLord ? 60 : 0;
    const varshaBala = id === temporal.varshaLord ? 15 : 0;
    const masaBala = id === temporal.masaLord ? 30 : 0;
    const dinaBala = id === temporal.dinaLord ? 45 : 0;
    const horaBala = id === temporal.horaLord ? 60 : 0;
    const decl = getEquatorialDeclinationDeg(p.tropicalLonDeg, obliquityDeg, id, utcMs);
    const maxDecl = 23.45;
    let ayanaSingle = 30;
    if (id === "sun" || id === "mars" || id === "jupiter" || id === "venus") {
      ayanaSingle = (maxDecl + decl) / (2 * maxDecl) * 60;
    } else if (id === "moon" || id === "saturn") {
      ayanaSingle = (maxDecl - decl) / (2 * maxDecl) * 60;
    } else {
      ayanaSingle = (maxDecl + Math.abs(decl)) / (2 * maxDecl) * 60;
    }
    ayanaSingle = Math.min(60, Math.max(0, ayanaSingle));
    const ayanaBala = Number((id === "sun" ? ayanaSingle * 2 : ayanaSingle).toFixed(2));
    ayanaMap[id] = ayanaSingle;
    kalaPreYuddhaMap[id] = {
      natonnataBala,
      pakshaBala,
      tribhagaBala,
      varshaBala,
      masaBala,
      dinaBala,
      horaBala,
      ayanaBala
    };
  }
  const yuddhaDelta = {
    sun: 0,
    moon: 0,
    mars: 0,
    mercury: 0,
    jupiter: 0,
    venus: 0,
    saturn: 0
  };
  const yuddhaParticipants = [];
  const taraIds = ["mars", "mercury", "jupiter", "venus", "saturn"];
  for (let i = 0; i < taraIds.length; i++) {
    for (let j = i + 1; j < taraIds.length; j++) {
      const a = taraIds[i];
      const b = taraIds[j];
      const sep = angularSep(planets[a].siderealLonDeg, planets[b].siderealLonDeg);
      if (sep <= 1) {
        const latA = getEclipticLatitudeDeg(a, utcMs);
        const latB = getEclipticLatitudeDeg(b, utcMs);
        const aWins = Math.abs(latA - latB) > 0.01 ? latA > latB : planets[a].siderealLonDeg < planets[b].siderealLonDeg;
        const winner = aWins ? a : b;
        const loser = aWins ? b : a;
        const baseStrength = (gid) => {
          const k = kalaPreYuddhaMap[gid];
          return sthanaMap[gid].total + digMap[gid] + k.natonnataBala + k.pakshaBala + k.tribhagaBala + k.varshaBala + k.masaBala + k.dinaBala;
        };
        const diff = Math.abs(baseStrength(winner) - baseStrength(loser));
        const transfer = Number((diff * 0.5).toFixed(2));
        yuddhaDelta[winner] += transfer;
        yuddhaDelta[loser] -= transfer;
        yuddhaParticipants.push({
          winner,
          loser,
          separationDeg: Number(sep.toFixed(3)),
          transferVirupas: transfer
        });
      }
    }
  }
  const rawDetails = SHADBALA_GRAHA_IDS.map((id) => {
    const p = planets[id];
    const sthanaBala = sthanaMap[id];
    const digBala = digMap[id];
    const kPre = kalaPreYuddhaMap[id];
    const yuddhaBala = Number(yuddhaDelta[id].toFixed(2));
    const kalaTotal = Number(
      (kPre.natonnataBala + kPre.pakshaBala + kPre.tribhagaBala + kPre.varshaBala + kPre.masaBala + kPre.dinaBala + kPre.horaBala + kPre.ayanaBala + yuddhaBala).toFixed(2)
    );
    const kalaBala = {
      ...kPre,
      yuddhaBala,
      total: kalaTotal
    };
    const cheshtaBala = computeCheshtaBalaForGraha(
      id,
      p,
      ayanaMap.sun,
      pakshaBeneficRaw,
      utcMs,
      jd,
      ayanamshaDeg
    );
    const naisargikaBala = NAISARGIKA_BALA_VIRUPAS[id];
    const drikBala = computeDrikBalaForGraha(
      id,
      planets,
      moonIsBenefic,
      mercuryIsBenefic
    );
    const totalVirupas = Number(
      (sthanaBala.total + digBala + kalaBala.total + cheshtaBala + naisargikaBala + drikBala).toFixed(2)
    );
    const totalRupas = Number((totalVirupas / 60).toFixed(2));
    const requiredVirupas = REQUIRED_SHADBALA_VIRUPAS[id];
    const requiredRupas = Number((requiredVirupas / 60).toFixed(2));
    const strengthRatio = Number((totalVirupas / requiredVirupas).toFixed(2));
    const strengthPct = Math.min(125, Math.max(20, Math.round(strengthRatio * 100)));
    const meetsMinimum = totalVirupas >= requiredVirupas;
    const uch = Math.max(0, Math.min(60, sthanaBala.uchchaBala));
    const che = Math.max(0, Math.min(60, cheshtaBala));
    const ishtaPhala = Number(Math.sqrt(uch * che).toFixed(2));
    const kashtaPhala = Number(Math.sqrt((60 - uch) * (60 - che)).toFixed(2));
    let gradeHi = "बली (सक्षम)";
    let remedyHintHi = `${p.hindiName} का बल संतोषजनक है — स्वाभाविक शुभ फल प्राप्त होंगे।`;
    if (strengthRatio >= 1.2) {
      gradeHi = "अति बली (उत्कृष्ट)";
      remedyHintHi = `${p.hindiName} पूर्ण षड्बल से संपन्न हैं (${totalRupas} रूप) — इस ग्रह के कारकत्व में प्रबल उन्नति।`;
    } else if (meetsMinimum) {
      gradeHi = "बली (सक्षम)";
      remedyHintHi = `${p.hindiName} आवश्यक न्यूनतम (${requiredRupas} रूप) से अधिक बली हैं।`;
    } else if (strengthRatio >= 0.85) {
      gradeHi = "मध्यम (संतुलित)";
      remedyHintHi = `${p.hindiName} न्यूनतम मान से थोड़ा कम है — नियमित मंत्र जप व सात्विक आचरण से बल बढ़ेगा।`;
    } else {
      gradeHi = "निर्बल (उपाय अपेक्षित)";
      remedyHintHi = `${p.hindiName} षड्बल में कमजोर (${totalRupas}/${requiredRupas} रूप) हैं — वैदिक शांति, दान और उपास्य देव स्मरण लाभकारी होगा।`;
    }
    return {
      id,
      hindiName: p.hindiName,
      englishName: p.englishName,
      shortHindi: p.shortHindi,
      symbol: p.symbol,
      sthanaBala,
      digBala,
      kalaBala,
      cheshtaBala,
      naisargikaBala,
      drikBala,
      totalVirupas,
      totalRupas,
      requiredVirupas,
      requiredRupas,
      strengthRatio,
      strengthPct,
      meetsMinimum,
      ishtaPhala,
      kashtaPhala,
      rank: 1,
      gradeHi,
      remedyHintHi,
      temporalLordsContext: {
        varshaLord: temporal.varshaLord,
        masaLord: temporal.masaLord,
        dinaLord: temporal.dinaLord,
        horaLord: temporal.horaLord
      }
    };
  });
  const rankedOrder = [...rawDetails].sort((a, b) => b.strengthRatio - a.strengthRatio);
  rankedOrder.forEach((item, idx) => {
    item.rank = idx + 1;
  });
  const byId = {};
  for (const item of rawDetails) {
    byId[item.id] = item;
  }
  const rawBhavas = report.sripatiBhavas.map((cusp) => {
    const rMeta = RASHI_META_12[cusp.madhyaRashiNumber - 1];
    const lordId = rMeta.lordId;
    const bhavadhipatiBala = byId[lordId].totalVirupas;
    const degInMadhyaSign = cusp.madhyaSiderealDeg % 30;
    const natureInfo = getBhavaRashiNature(cusp.madhyaRashiNumber, degInMadhyaSign);
    const bhavaDigBala = computeBhavaDigBala(cusp.houseNumber, natureInfo.nature);
    const bhavaDrishtiBala = computeBhavaDrishtiBala(
      cusp,
      planets,
      moonIsBenefic,
      mercuryIsBenefic
    );
    const totalVirupas = Number(
      (bhavadhipatiBala + bhavaDigBala + bhavaDrishtiBala).toFixed(2)
    );
    const totalRupas = Number((totalVirupas / 60).toFixed(2));
    let gradeHi = "सबल भाव";
    if (totalRupas >= 8) gradeHi = "अति पुष्ट भाव";
    else if (totalRupas >= 6.5) gradeHi = "सबल भाव";
    else if (totalRupas >= 5.2) gradeHi = "मध्यम भाव";
    else gradeHi = "अल्पबल भाव";
    const summaryHi = `भावेश ${rMeta.lordHi} (${byId[lordId].totalRupas} रूप) + भाव दिग्बल (${bhavaDigBala} विरूप) + भाव दृक् बल (${bhavaDrishtiBala} विरूप) = ${totalRupas} रूप।`;
    return {
      houseNumber: cusp.houseNumber,
      bhavaTitleHi: cusp.bhavaTitleHi,
      rashiNumber: cusp.madhyaRashiNumber,
      rashiNameHi: cusp.madhyaRashiNameHi,
      lordId,
      lordHindi: rMeta.lordHi,
      rashiNatureHi: natureInfo.labelHi,
      bhavadhipatiBala,
      bhavaDigBala,
      bhavaDrishtiBala,
      totalVirupas,
      totalRupas,
      rank: 1,
      gradeHi,
      summaryHi
    };
  });
  const rankedBhavas = [...rawBhavas].sort((a, b) => b.totalVirupas - a.totalVirupas);
  rankedBhavas.forEach((b, idx) => {
    b.rank = idx + 1;
  });
  return {
    planets: rawDetails,
    byId,
    bhavas: rawBhavas,
    strongestGraha: rankedOrder[0].id,
    weakestGraha: rankedOrder[rankedOrder.length - 1].id,
    strongestBhava: rankedBhavas[0].houseNumber,
    weakestBhava: rankedBhavas[rankedBhavas.length - 1].houseNumber,
    varshaLord: temporal.varshaLord,
    masaLord: temporal.masaLord,
    dinaLord: temporal.dinaLord,
    horaLord: temporal.horaLord,
    yuddhaParticipants,
    calculationNotesHi: [
      "षड्बल की गणना बृहत् पाराशर होरा शास्त्र (अध्याय 27) के अनुसार 7 वर्ग (सप्तवर्गजा: D1, D2, D3, D7, D9, D12, D30), वास्तविक लग्न-दशम स्पष्ट से दिग्बल, नतोन्नत-पक्ष-त्रिभाग-अब्द-मास-वार-होरा-अयन-युद्ध कालबल, सूर्य-आधारित चेष्टा बल व निरंतर दृक् बल द्वारा विरूप (शष्ट्यंश) व रूप में की गई है।",
      "भाव बल की गणना श्रीपति भाव-मध्य (Cusps) पर भावाधिपति बल + नराश्रय/जलचर/चतुष्पद/कीट भाव दिग्बल + गुरु-बुध पूर्ण दृष्टि व अन्य ग्रहों की भाव दृक् बल के योग से की गई है।"
    ]
  };
}
const RASHIFAL_CORE_ENGINE_VERSION = "v2.0.0-parashari";
const RASHIFAL_AYANAMSHA_MODE = "LAHIRI";
const RASHIFAL_NODE_MODE = "TRUE";
const RASHI_DEFINITIONS = [
  {
    number: 1,
    id: "mesh",
    nameHi: "मेष",
    nameEn: "Aries",
    lord: "mars",
    lordNameHi: "मंगल",
    lordNameEn: "Mars",
    element: "FIRE",
    elementHi: "अग्नि तत्व",
    modality: "CHARA",
    modalityHi: "चर राशि",
    ishtaDevtaHi: "श्री हनुमान जी",
    beejMantra: "ॐ क्रां क्रीं क्रौं सः भौमाय नमः",
    lettersHi: "चू, चे, चो, ला, ली, लू, ले, लो, अ",
    nakshatrasHi: "अश्विनी, भरणी, कृत्तिका"
  },
  {
    number: 2,
    id: "vrishabh",
    nameHi: "वृषभ",
    nameEn: "Taurus",
    lord: "venus",
    lordNameHi: "शुक्र",
    lordNameEn: "Venus",
    element: "EARTH",
    elementHi: "पृथ्वी तत्व",
    modality: "STHIRA",
    modalityHi: "स्थिर राशि",
    ishtaDevtaHi: "माँ महालक्ष्मी एवं माँ दुर्गा",
    beejMantra: "ॐ द्रां द्रीं द्रौं सः शुक्राय नमः",
    lettersHi: "ई, ऊ, ए, ओ, वा, वी, वू, वे, वो",
    nakshatrasHi: "कृत्तिका, रोहिणी, मृगशिरा"
  },
  {
    number: 3,
    id: "mithun",
    nameHi: "मिथुन",
    nameEn: "Gemini",
    lord: "mercury",
    lordNameHi: "बुध",
    lordNameEn: "Mercury",
    element: "AIR",
    elementHi: "वायु तत्व",
    modality: "DWISWABHAVA",
    modalityHi: "द्विस्वभाव राशि",
    ishtaDevtaHi: "भगवान श्री गणेश एवं श्री नारायण",
    beejMantra: "ॐ ब्रां ब्रीं ब्रौं सः बुधाय नमः",
    lettersHi: "का, की, कू, घ, ङ, छ, के, को, हा",
    nakshatrasHi: "मृगशिरा, आर्द्रा, पुनर्वसु"
  },
  {
    number: 4,
    id: "kark",
    nameHi: "कर्क",
    nameEn: "Cancer",
    lord: "moon",
    lordNameHi: "चंद्रमा",
    lordNameEn: "Moon",
    element: "WATER",
    elementHi: "जल तत्व",
    modality: "CHARA",
    modalityHi: "चर राशि",
    ishtaDevtaHi: "भगवान शिवशंकर एवं माता गौरी",
    beejMantra: "ॐ श्रां श्रीं श्रौं सः चन्द्रमसे नमः",
    lettersHi: "ही, हू, हे, हो, डा, डी, डू, डे, डो",
    nakshatrasHi: "पुनर्वसु, पुष्य, आश्लेषा"
  },
  {
    number: 5,
    id: "simha",
    nameHi: "सिंह",
    nameEn: "Leo",
    lord: "sun",
    lordNameHi: "सूर्य",
    lordNameEn: "Sun",
    element: "FIRE",
    elementHi: "अग्नि तत्व",
    modality: "STHIRA",
    modalityHi: "स्थिर राशि",
    ishtaDevtaHi: "भगवान सूर्यनारायण एवं श्रीराम",
    beejMantra: "ॐ ह्रां ह्रीं ह्रौं सः सूर्याय नमः",
    lettersHi: "मा, मी, मू, मे, मो, टा, टी, टू, टे",
    nakshatrasHi: "मघा, पूर्वाफाल्गुनी, उत्तराफाल्गुनी"
  },
  {
    number: 6,
    id: "kanya",
    nameHi: "कन्या",
    nameEn: "Virgo",
    lord: "mercury",
    lordNameHi: "बुध",
    lordNameEn: "Mercury",
    element: "EARTH",
    elementHi: "पृथ्वी तत्व",
    modality: "DWISWABHAVA",
    modalityHi: "द्विस्वभाव राशि",
    ishtaDevtaHi: "भगवान श्री गणेश एवं माँ गायत्री",
    beejMantra: "ॐ ब्रां ब्रीं ब्रौं सः बुधाय नमः",
    lettersHi: "टो, पा, पी, पू, ष, ण, ठ, पे, पो",
    nakshatrasHi: "उत्तराफाल्गुनी, हस्त, चित्रा"
  },
  {
    number: 7,
    id: "tula",
    nameHi: "तुला",
    nameEn: "Libra",
    lord: "venus",
    lordNameHi: "शुक्र",
    lordNameEn: "Venus",
    element: "AIR",
    elementHi: "वायु तत्व",
    modality: "CHARA",
    modalityHi: "चर राशि",
    ishtaDevtaHi: "माँ महालक्ष्मी एवं माँ संतोषी",
    beejMantra: "ॐ द्रां द्रीं द्रौं सः शुक्राय नमः",
    lettersHi: "रा, री, रू, रे, रो, ता, ती, तू, ते",
    nakshatrasHi: "चित्रा, स्वाति, विशाखा"
  },
  {
    number: 8,
    id: "vrishchik",
    nameHi: "वृश्चिक",
    nameEn: "Scorpio",
    lord: "mars",
    lordNameHi: "मंगल",
    lordNameEn: "Mars",
    element: "WATER",
    elementHi: "जल तत्व",
    modality: "STHIRA",
    modalityHi: "स्थिर राशि",
    ishtaDevtaHi: "श्री हनुमान जी एवं महादेव",
    beejMantra: "ॐ क्रां क्रीं क्रौं सः भौमाय नमः",
    lettersHi: "तो, ना, नी, नू, ने, नो, या, यी, यू",
    nakshatrasHi: "विशाखा, अनुराधा, ज्येष्ठा"
  },
  {
    number: 9,
    id: "dhanu",
    nameHi: "धनु",
    nameEn: "Sagittarius",
    lord: "jupiter",
    lordNameHi: "देवगुरु बृहस्पति",
    lordNameEn: "Jupiter",
    element: "FIRE",
    elementHi: "अग्नि तत्व",
    modality: "DWISWABHAVA",
    modalityHi: "द्विस्वभाव राशि",
    ishtaDevtaHi: "भगवान श्रीहरि विष्णु",
    beejMantra: "ॐ ग्रां ग्रीं ग्रौं सः गुरवे नमः",
    lettersHi: "ये, यो, भा, भी, भू, धा, फा, ढा, भे",
    nakshatrasHi: "मूल, पूर्वाषाढ़ा, उत्तराषाढ़ा"
  },
  {
    number: 10,
    id: "makar",
    nameHi: "मकर",
    nameEn: "Capricorn",
    lord: "saturn",
    lordNameHi: "शनि देव",
    lordNameEn: "Saturn",
    element: "EARTH",
    elementHi: "पृथ्वी तत्व",
    modality: "CHARA",
    modalityHi: "चर राशि",
    ishtaDevtaHi: "शनि देव एवं श्री हनुमान जी",
    beejMantra: "ॐ प्रां प्रीं प्रौं सः शनैश्चराय नमः",
    lettersHi: "भो, जा, जी, खी, खू, खे, खो, गा, गी",
    nakshatrasHi: "उत्तराषाढ़ा, श्रवण, धनिष्ठा"
  },
  {
    number: 11,
    id: "kumbh",
    nameHi: "कुम्भ",
    nameEn: "Aquarius",
    lord: "saturn",
    lordNameHi: "शनि देव",
    lordNameEn: "Saturn",
    element: "AIR",
    elementHi: "वायु तत्व",
    modality: "STHIRA",
    modalityHi: "स्थिर राशि",
    ishtaDevtaHi: "भगवान शिव एवं शनि देव",
    beejMantra: "ॐ प्रां प्रीं प्रौं सः शनैश्चराय नमः",
    lettersHi: "गू, गे, गो, सा, सी, सू, से, सो, दा",
    nakshatrasHi: "धनिष्ठा, शतभिषा, पूर्वाभाद्रपदा"
  },
  {
    number: 12,
    id: "meen",
    nameHi: "मीन",
    nameEn: "Pisces",
    lord: "jupiter",
    lordNameHi: "देवगुरु बृहस्पति",
    lordNameEn: "Jupiter",
    element: "WATER",
    elementHi: "जल तत्व",
    modality: "DWISWABHAVA",
    modalityHi: "द्विस्वभाव राशि",
    ishtaDevtaHi: "भगवान श्री सत्यनारायण एवं माँ लक्ष्मी",
    beejMantra: "ॐ ग्रां ग्रीं ग्रौं सः गुरवे नमः",
    lettersHi: "दी, दू, थ, झ, ञ, दे, दो, चा, ची",
    nakshatrasHi: "पूर्वाभाद्रपदा, उत्तराभाद्रपदा, रेवती"
  }
];
const GRAHA_NAMES = {
  sun: { hi: "सूर्य देव", shortHi: "सूर्य", en: "Sun" },
  moon: { hi: "चंद्र देव", shortHi: "चंद्रमा", en: "Moon" },
  mars: { hi: "मंगल देव", shortHi: "मंगल", en: "Mars" },
  mercury: { hi: "बुध देव", shortHi: "बुध", en: "Mercury" },
  jupiter: { hi: "देवगुरु बृहस्पति", shortHi: "गुरु", en: "Jupiter" },
  venus: { hi: "शुक्र देव", shortHi: "शुक्र", en: "Venus" },
  saturn: { hi: "शनि देव", shortHi: "शनि", en: "Saturn" },
  rahu: { hi: "राहु", shortHi: "राहु", en: "Rahu" },
  ketu: { hi: "केतु", shortHi: "केतु", en: "Ketu" }
};
const ALL_GRAHA_IDS = [
  "sun",
  "moon",
  "mars",
  "mercury",
  "jupiter",
  "venus",
  "saturn",
  "rahu",
  "ketu"
];
const DEFAULT_RASHIFAL_LOCATION = {
  id: "rudrapur",
  name: "Rudrapur, Uttarakhand",
  hindiName: "रुद्रपुर, उत्तराखण्ड",
  district: "Udham Singh Nagar",
  state: "Uttarakhand",
  country: "India",
  lat: 28.9765,
  lon: 79.3999,
  timezone: "Asia/Kolkata",
  tzOffsetHours: 5.5,
  elevationMeters: 214,
  source: "default"
};
function resolveRashiDefinition(rashiNumberOrId) {
  if (typeof rashiNumberOrId === "number" && Number.isFinite(rashiNumberOrId)) {
    const idx = ((Math.round(rashiNumberOrId) - 1) % 12 + 12) % 12;
    return RASHI_DEFINITIONS[idx];
  }
  const clean = String(rashiNumberOrId || "").trim().toLowerCase();
  const found = RASHI_DEFINITIONS.find(
    (r) => r.id === clean || r.nameEn.toLowerCase() === clean || r.nameHi === String(rashiNumberOrId || "").trim() || clean === "singh" && r.id === "simha"
  );
  if (!found) {
    throw new Error(`Invalid Moon Sign (Rashi) identifier: "${rashiNumberOrId}"`);
  }
  return found;
}
function getRelativeHouse(planetSignNumber, moonSignNumber) {
  return ((planetSignNumber - moonSignNumber) % 12 + 12) % 12 + 1;
}
const EXALTATION_SIGN = {
  sun: 1,
  // Aries
  moon: 2,
  // Taurus
  mars: 10,
  // Capricorn
  mercury: 6,
  // Virgo
  jupiter: 4,
  // Cancer
  venus: 12,
  // Pisces
  saturn: 7,
  // Libra
  rahu: 2,
  // Taurus (BPHS / classical convention)
  ketu: 8
  // Scorpio
};
const DEBILITATION_SIGN = {
  sun: 7,
  moon: 8,
  mars: 4,
  mercury: 12,
  jupiter: 10,
  venus: 6,
  saturn: 1,
  rahu: 8,
  ketu: 2
};
const MOOLATRIKONA_RANGE = {
  sun: { sign: 5, minDeg: 0, maxDeg: 20 },
  // Leo 0°-20°
  moon: { sign: 2, minDeg: 3, maxDeg: 30 },
  // Taurus 3°-30° (0°-3° Exaltation peak)
  mars: { sign: 1, minDeg: 0, maxDeg: 12 },
  // Aries 0°-12°
  mercury: { sign: 6, minDeg: 15, maxDeg: 20 },
  // Virgo 15°-20° (0°-15° Exaltation)
  jupiter: { sign: 9, minDeg: 0, maxDeg: 10 },
  // Sagittarius 0°-10°
  venus: { sign: 7, minDeg: 0, maxDeg: 15 },
  // Libra 0°-15°
  saturn: { sign: 11, minDeg: 0, maxDeg: 20 }
  // Aquarius 0°-20°
};
const OWN_SIGNS = {
  sun: [5],
  moon: [4],
  mars: [1, 8],
  mercury: [3, 6],
  jupiter: [9, 12],
  venus: [2, 7],
  saturn: [10, 11],
  rahu: [11],
  ketu: [8]
};
const NATURAL_FRIENDS = {
  sun: ["moon", "mars", "jupiter"],
  moon: ["sun", "mercury"],
  mars: ["sun", "moon", "jupiter"],
  mercury: ["sun", "venus"],
  jupiter: ["sun", "moon", "mars"],
  venus: ["mercury", "saturn"],
  saturn: ["mercury", "venus"],
  rahu: ["venus", "saturn", "mercury"],
  ketu: ["mars", "jupiter", "venus"]
};
const NATURAL_ENEMIES = {
  sun: ["venus", "saturn"],
  moon: [],
  mars: ["mercury"],
  mercury: ["moon"],
  jupiter: ["mercury", "venus"],
  venus: ["sun", "moon"],
  saturn: ["sun", "moon", "mars"],
  rahu: ["sun", "moon", "mars"],
  ketu: ["sun", "moon"]
};
const DIGNITY_LABELS_HI = {
  EXALTED: "उच्चस्थ",
  MOOLATRIKONA: "मूलत्रिकोण",
  OWN_SIGN: "स्वराशि",
  FRIEND: "मित्र राशि",
  NEUTRAL: "सम राशि",
  ENEMY: "शत्रु राशि",
  DEBILITATED: "नीचस्थ"
};
function evaluateGrahaDignity(graha, signNumber, degInSign) {
  if (graha === "moon" && signNumber === 2) {
    return degInSign < 3 ? "EXALTED" : "MOOLATRIKONA";
  }
  if (graha === "mercury" && signNumber === 6) {
    if (degInSign < 15) return "EXALTED";
    if (degInSign < 20) return "MOOLATRIKONA";
    return "OWN_SIGN";
  }
  if (EXALTATION_SIGN[graha] === signNumber) return "EXALTED";
  if (DEBILITATION_SIGN[graha] === signNumber) return "DEBILITATED";
  const mt = MOOLATRIKONA_RANGE[graha];
  if (mt && mt.sign === signNumber && degInSign >= mt.minDeg && degInSign < mt.maxDeg) {
    return "MOOLATRIKONA";
  }
  if (OWN_SIGNS[graha].includes(signNumber)) return "OWN_SIGN";
  const signLord = RASHI_DEFINITIONS[(signNumber - 1 + 12) % 12].lord;
  if (NATURAL_FRIENDS[graha].includes(signLord)) return "FRIEND";
  if (NATURAL_ENEMIES[graha].includes(signLord)) return "ENEMY";
  return "NEUTRAL";
}
const PARASHARI_GOCHAR_RULES = {
  sun: { favorableHouses: [3, 6, 10, 11], vedhaMap: { 3: 9, 6: 12, 10: 4, 11: 5 } },
  moon: { favorableHouses: [1, 3, 6, 7, 10, 11], vedhaMap: { 1: 5, 3: 9, 6: 12, 7: 2, 10: 4, 11: 8 } },
  mars: { favorableHouses: [3, 6, 11], vedhaMap: { 3: 12, 6: 9, 11: 5 } },
  mercury: { favorableHouses: [2, 4, 6, 8, 10, 11], vedhaMap: { 2: 5, 4: 3, 6: 9, 8: 1, 10: 8, 11: 12 } },
  jupiter: { favorableHouses: [2, 5, 7, 9, 11], vedhaMap: { 2: 12, 5: 4, 7: 3, 9: 10, 11: 8 } },
  venus: { favorableHouses: [1, 2, 3, 4, 5, 8, 9, 11, 12], vedhaMap: { 1: 8, 2: 7, 3: 1, 4: 10, 5: 9, 8: 5, 9: 11, 11: 6, 12: 3 } },
  saturn: { favorableHouses: [3, 6, 11], vedhaMap: { 3: 12, 6: 9, 11: 5 } },
  rahu: { favorableHouses: [3, 6, 10, 11], vedhaMap: { 3: 12, 6: 9, 10: 4, 11: 5 } },
  ketu: { favorableHouses: [3, 6, 10, 11], vedhaMap: { 3: 12, 6: 9, 10: 4, 11: 5 } }
};
const PARASHARI_DRISHTI_OFFSETS = {
  sun: [7],
  moon: [7],
  mars: [4, 7, 8],
  mercury: [7],
  jupiter: [5, 7, 9],
  venus: [7],
  saturn: [3, 7, 10],
  rahu: [5, 7, 9],
  ketu: [5, 7, 9]
};
function getCombustionOrbDeg(graha, isRetrograde) {
  switch (graha) {
    case "moon":
      return 12;
    case "mars":
      return 17;
    case "mercury":
      return isRetrograde ? 12 : 14;
    case "jupiter":
      return 11;
    case "venus":
      return isRetrograde ? 8 : 10;
    case "saturn":
      return 15;
    default:
      return null;
  }
}
function angularSeparationDeg(lonA, lonB) {
  const diff = Math.abs(normalizeDeg(lonA) - normalizeDeg(lonB));
  return diff > 180 ? 360 - diff : diff;
}
const ASTRONOMY_PLANET_BODY = {
  mars: Body.Mars,
  mercury: Body.Mercury,
  jupiter: Body.Jupiter,
  venus: Body.Venus,
  saturn: Body.Saturn
};
function getGeocentricApparentEclipticLonDeg(graha, epochMs) {
  if (graha === "sun") return getSiderealSunLonDeg(epochMs, RASHIFAL_AYANAMSHA_MODE) + getAyanamshaDeg(epochMs, RASHIFAL_AYANAMSHA_MODE);
  if (graha === "moon") return getSiderealMoonLonDeg(epochMs, RASHIFAL_AYANAMSHA_MODE) + getAyanamshaDeg(epochMs, RASHIFAL_AYANAMSHA_MODE);
  if (graha === "rahu" || graha === "ketu") {
    const nodes = getNodeLongitudesDeg(epochMs, RASHIFAL_AYANAMSHA_MODE, RASHIFAL_NODE_MODE);
    const sid = graha === "rahu" ? nodes.rahuDeg : nodes.ketuDeg;
    return normalizeDeg(sid + getAyanamshaDeg(epochMs, RASHIFAL_AYANAMSHA_MODE));
  }
  const body = ASTRONOMY_PLANET_BODY[graha];
  if (!body) {
    throw new Error(`Unsupported graha body: ${graha}`);
  }
  const time = MakeTime(new Date(epochMs));
  const geoVec = GeoVector(body, time, true);
  const ectVec = RotateVector(Rotation_EQJ_ECT(time), geoVec);
  return normalizeDeg(Math.atan2(ectVec.y, ectVec.x) * 180 / Math.PI);
}
function getSiderealGrahaLongitudeDeg(graha, epochMs) {
  if (graha === "sun") return getSiderealSunLonDeg(epochMs, RASHIFAL_AYANAMSHA_MODE);
  if (graha === "moon") return getSiderealMoonLonDeg(epochMs, RASHIFAL_AYANAMSHA_MODE);
  if (graha === "rahu" || graha === "ketu") {
    const nodes = getNodeLongitudesDeg(epochMs, RASHIFAL_AYANAMSHA_MODE, RASHIFAL_NODE_MODE);
    return graha === "rahu" ? nodes.rahuDeg : nodes.ketuDeg;
  }
  const tropicalLon = getGeocentricApparentEclipticLonDeg(graha, epochMs);
  const ayanamsha = getAyanamshaDeg(epochMs, RASHIFAL_AYANAMSHA_MODE);
  return normalizeDeg(tropicalLon - ayanamsha);
}
function getGrahaDailySpeedDeg(graha, epochMs) {
  const ONE_HOUR_MS = 36e5;
  const lon0 = getGeocentricApparentEclipticLonDeg(graha, epochMs);
  const lon1 = getGeocentricApparentEclipticLonDeg(graha, epochMs + ONE_HOUR_MS);
  let delta1h = lon1 - lon0;
  if (delta1h > 180) delta1h -= 360;
  if (delta1h < -180) delta1h += 360;
  return delta1h * 24;
}
function isGrahaRetrogradeAt(graha, epochMs) {
  if (graha === "sun" || graha === "moon") return false;
  const speed = getGrahaDailySpeedDeg(graha, epochMs);
  if (graha === "rahu" || graha === "ketu") return speed <= 0;
  return speed < 0;
}
function formatDegMinSec(degInSign) {
  const safe = Math.max(0, Math.min(29.9999, degInSign));
  const d = Math.floor(safe);
  const minFloat = (safe - d) * 60;
  const m = Math.floor(minFloat);
  const s = Math.round((minFloat - m) * 60);
  if (s === 60) {
    return `${String(d).padStart(2, "0")}°${String(m + 1).padStart(2, "0")}'00"`;
  }
  return `${String(d).padStart(2, "0")}°${String(m).padStart(2, "0")}'${String(s).padStart(2, "0")}"`;
}
function getRetrogradeCheshtaBalaScore(graha, dignity) {
  if (graha === "sun" || graha === "moon" || graha === "rahu" || graha === "ketu") {
    return 0;
  }
  const isNaturalBenefic = graha === "jupiter" || graha === "venus" || graha === "mercury";
  if (isNaturalBenefic) {
    if (dignity === "DEBILITATED") return 2.2;
    if (graha === "jupiter" || graha === "venus") return 1.5;
    return 1.1;
  }
  if (dignity === "DEBILITATED") return 0.5;
  return -0.4;
}
function evaluateMoonPakshaInfo(moonLonDeg, sunLonDeg) {
  const elongationDeg = normalizeDeg(moonLonDeg - sunLonDeg);
  const paksha = elongationDeg < 180 ? "SHUKLA" : "KRISHNA";
  const pakshaHi = paksha === "SHUKLA" ? "शुक्ल पक्ष" : "कृष्ण पक्ष";
  const isKsheena = elongationDeg >= 324 || elongationDeg < 12;
  const isBrightStrong = !isKsheena && elongationDeg >= 108 && elongationDeg <= 240;
  if (isKsheena) {
    return {
      elongationDeg: Number(elongationDeg.toFixed(2)),
      paksha,
      pakshaHi,
      isKsheena: true,
      isBrightStrong: false,
      pakshaBalaTier: "KSHEENA_CHANDRA",
      pakshaBalaLabelHi: "क्षीण चंद्रबल (संयम अपेक्षित)",
      scoreDelta: -3.2
    };
  }
  if (isBrightStrong && paksha === "SHUKLA") {
    return {
      elongationDeg: Number(elongationDeg.toFixed(2)),
      paksha,
      pakshaHi,
      isKsheena: false,
      isBrightStrong: true,
      pakshaBalaTier: "POORNA_SHUKLA",
      pakshaBalaLabelHi: "शुक्ल पक्ष के वर्धमान/पूर्ण चंद्रमा (प्रबल पक्ष-बल — मनोबल व स्पष्टता उत्तम)",
      scoreDelta: 2.2
    };
  }
  if (isBrightStrong && paksha === "KRISHNA") {
    return {
      elongationDeg: Number(elongationDeg.toFixed(2)),
      paksha,
      pakshaHi,
      isKsheena: false,
      isBrightStrong: true,
      pakshaBalaTier: "MADHYAM_KRISHNA",
      pakshaBalaLabelHi: "कृष्ण पक्ष के चंद्रमा (पूर्णिमा के निकट उत्तम पक्ष-बल — संयम व स्पष्टता अनुकूल)",
      scoreDelta: 1.4
    };
  }
  if (paksha === "SHUKLA") {
    return {
      elongationDeg: Number(elongationDeg.toFixed(2)),
      paksha,
      pakshaHi,
      isKsheena: false,
      isBrightStrong: false,
      pakshaBalaTier: "VARDHAMANA_SHUKLA",
      pakshaBalaLabelHi: "शुक्ल पक्ष के वर्धमान चंद्रमा (सकारात्मक ऊर्जा व प्रगतिशील पक्ष-बल)",
      scoreDelta: 1
    };
  }
  return {
    elongationDeg: Number(elongationDeg.toFixed(2)),
    paksha,
    pakshaHi,
    isKsheena: false,
    isBrightStrong: false,
    pakshaBalaTier: "MADHYAM_KRISHNA",
    pakshaBalaLabelHi: "कृष्ण पक्ष के चंद्रमा (अंतर्मुखी चिंतन व संयमित गति उपयुक्त)",
    scoreDelta: -0.6
  };
}
const _snapshotCache = /* @__PURE__ */ new Map();
function computeEphemerisSnapshot(epochMs) {
  const roundedMs = Math.round(epochMs / 6e4) * 6e4;
  const cacheKey = String(roundedMs);
  const hit = _snapshotCache.get(cacheKey);
  if (hit) return hit;
  const ayanamshaDeg = getAyanamshaDeg(roundedMs, RASHIFAL_AYANAMSHA_MODE);
  const sunLon = getSiderealGrahaLongitudeDeg("sun", roundedMs);
  const grahas = {};
  for (const id of ALL_GRAHA_IDS) {
    const lon = id === "sun" ? sunLon : getSiderealGrahaLongitudeDeg(id, roundedMs);
    const signIndex0 = Math.floor(lon / 30) % 12;
    const signNumber = signIndex0 + 1;
    const degInSign = lon - signIndex0 * 30;
    const nakFloat = lon / (360 / 27);
    const nakshatraIndex = Math.floor(nakFloat) % 27;
    const nakshatraPada = Math.floor((nakFloat - nakshatraIndex) * 4) % 4 + 1;
    const dailySpeedDeg = getGrahaDailySpeedDeg(id, roundedMs);
    const isRetrograde = id === "sun" || id === "moon" ? false : id === "rahu" || id === "ketu" ? dailySpeedDeg <= 0 : dailySpeedDeg < 0;
    const sunSep = id === "sun" ? 0 : angularSeparationDeg(lon, sunLon);
    const orb = getCombustionOrbDeg(id, isRetrograde);
    const isCombust = orb !== null ? sunSep <= orb : false;
    const dignity = evaluateGrahaDignity(id, signNumber, degInSign);
    const signDef = RASHI_DEFINITIONS[signIndex0];
    grahas[id] = {
      id,
      nameHi: GRAHA_NAMES[id].hi,
      shortHi: GRAHA_NAMES[id].shortHi,
      nameEn: GRAHA_NAMES[id].en,
      siderealLon: Number(lon.toFixed(4)),
      signNumber,
      signNameHi: signDef.nameHi,
      signNameEn: signDef.nameEn,
      degInSign: Number(degInSign.toFixed(4)),
      degDMS: formatDegMinSec(degInSign),
      nakshatraIndex,
      nakshatraNameHi: NAKSHATRAS_27[nakshatraIndex] || "अश्विनी",
      nakshatraPada,
      dailySpeedDeg: Number(dailySpeedDeg.toFixed(4)),
      isRetrograde,
      isCombust,
      sunSeparationDeg: Number(sunSep.toFixed(2)),
      dignity,
      dignityHi: DIGNITY_LABELS_HI[dignity]
    };
  }
  const rahuKetuDiff = Math.abs(
    angularSeparationDeg(grahas.rahu.siderealLon, grahas.ketu.siderealLon) - 180
  );
  if (rahuKetuDiff > 0.05) {
    throw new Error(`Node opposition invariant failed: delta=${rahuKetuDiff}`);
  }
  const moonPaksha = evaluateMoonPakshaInfo(grahas.moon.siderealLon, grahas.sun.siderealLon);
  const snapshot = {
    timestampMs: roundedMs,
    isoUtc: new Date(roundedMs).toISOString(),
    julianDay: Number(epochMsToJD(roundedMs).toFixed(4)),
    ayanamshaDeg: Number(ayanamshaDeg.toFixed(4)),
    ayanamshaDMS: formatDegMinSec(ayanamshaDeg),
    ayanamshaMode: RASHIFAL_AYANAMSHA_MODE,
    nodeMode: RASHIFAL_NODE_MODE,
    moonPaksha,
    grahas
  };
  if (_snapshotCache.size > 4e3) _snapshotCache.clear();
  _snapshotCache.set(cacheKey, snapshot);
  return snapshot;
}
const RASHI_FUNCTIONAL_PROFILES = {
  1: { yogakaraka: null, benefics: ["mars", "sun", "jupiter"], marakas: ["venus", "saturn"] },
  2: { yogakaraka: "saturn", benefics: ["saturn", "venus", "mercury", "sun"], marakas: ["mars", "jupiter"] },
  3: { yogakaraka: null, benefics: ["mercury", "venus", "saturn"], marakas: ["moon", "jupiter", "mars"] },
  4: { yogakaraka: "mars", benefics: ["mars", "moon", "jupiter"], marakas: ["saturn", "sun", "venus"] },
  5: { yogakaraka: "mars", benefics: ["mars", "sun", "jupiter"], marakas: ["saturn", "mercury", "venus"] },
  6: { yogakaraka: null, benefics: ["mercury", "venus", "saturn"], marakas: ["jupiter", "mars"] },
  7: { yogakaraka: "saturn", benefics: ["saturn", "venus", "mercury"], marakas: ["mars", "jupiter"] },
  8: { yogakaraka: null, benefics: ["mars", "jupiter", "moon", "sun"], marakas: ["venus", "mercury"] },
  9: { yogakaraka: null, benefics: ["jupiter", "mars", "sun"], marakas: ["saturn", "mercury", "venus"] },
  10: { yogakaraka: "venus", benefics: ["venus", "saturn", "mercury"], marakas: ["moon", "mars", "jupiter"] },
  11: { yogakaraka: "venus", benefics: ["venus", "saturn", "mercury"], marakas: ["sun", "jupiter", "mars"] },
  12: { yogakaraka: null, benefics: ["jupiter", "moon", "mars"], marakas: ["mercury", "venus", "saturn"] }
};
function getFunctionalHouseLords(moonSignNumber) {
  const moonSign = resolveRashiDefinition(moonSignNumber);
  const profile = RASHI_FUNCTIONAL_PROFILES[moonSign.number] || {
    yogakaraka: null,
    benefics: [moonSign.lord],
    marakas: []
  };
  const houseSignMap = {};
  const houseLordMap = {};
  const lordHousesMap = {
    sun: [],
    moon: [],
    mars: [],
    mercury: [],
    jupiter: [],
    venus: [],
    saturn: [],
    rahu: [],
    ketu: []
  };
  for (let h = 1; h <= 12; h++) {
    const signNum = (moonSign.number - 1 + (h - 1)) % 12 + 1;
    const lord = RASHI_DEFINITIONS[signNum - 1].lord;
    houseSignMap[h] = signNum;
    houseLordMap[h] = lord;
    lordHousesMap[lord].push(h);
  }
  let yogakaraka = profile.yogakaraka;
  const functionalRoleMap = {};
  for (const id of ALL_GRAHA_IDS) {
    if (id === "rahu" || id === "ketu") {
      functionalRoleMap[id] = "MARAKA_OR_MIXED";
      continue;
    }
    const houses = lordHousesMap[id];
    const ownsKendra = houses.some((h) => [4, 7, 10].includes(h));
    const ownsTrikona = houses.some((h) => [5, 9].includes(h));
    const ownsLagna = houses.includes(1);
    const ownsOnlyDusthana = houses.length > 0 && houses.every((h) => [6, 8, 12].includes(h));
    if (profile.yogakaraka === id || ownsKendra && ownsTrikona) {
      functionalRoleMap[id] = "YOGAKARAKA";
      yogakaraka = id;
    } else if (profile.benefics.includes(id) || ownsLagna || ownsTrikona) {
      functionalRoleMap[id] = "BENEFIC_TRIKONA";
    } else if (ownsOnlyDusthana) {
      functionalRoleMap[id] = "DUSTHANA";
    } else if (profile.marakas.includes(id)) {
      functionalRoleMap[id] = "MARAKA_OR_MIXED";
    } else if (ownsKendra) {
      functionalRoleMap[id] = "KENDRA";
    } else {
      functionalRoleMap[id] = "MARAKA_OR_MIXED";
    }
  }
  return {
    moonSign,
    houseSignMap,
    houseLordMap,
    lordHousesMap,
    functionalRoleMap,
    yogakaraka,
    functionalBenefics: [...profile.benefics],
    marakas: [...profile.marakas]
  };
}
function analyzeRelativeTransits(snapshot, moonSignNumber) {
  const lords = getFunctionalHouseLords(moonSignNumber);
  const houseOccupants = {};
  const houseAspectsReceived = {};
  for (let h = 1; h <= 12; h++) {
    houseOccupants[h] = [];
    houseAspectsReceived[h] = [];
  }
  const houseByGraha = {};
  const aspectedHousesByGraha = {};
  for (const id of ALL_GRAHA_IDS) {
    const g = snapshot.grahas[id];
    const h = getRelativeHouse(g.signNumber, lords.moonSign.number);
    houseByGraha[id] = h;
    houseOccupants[h].push(id);
    const offsets = PARASHARI_DRISHTI_OFFSETS[id];
    const targets = offsets.map((off) => (h - 1 + (off - 1)) % 12 + 1);
    aspectedHousesByGraha[id] = targets;
    for (const targetHouse of targets) {
      houseAspectsReceived[targetHouse].push(id);
    }
  }
  const isVedhaExemptPair = (a, b) => {
    if (a === b) return true;
    if (a === "sun" && b === "saturn" || a === "saturn" && b === "sun") return true;
    if (a === "moon" && b === "mercury" || a === "mercury" && b === "moon") return true;
    return false;
  };
  const transits = {};
  for (const id of ALL_GRAHA_IDS) {
    const g = snapshot.grahas[id];
    const h = houseByGraha[id];
    const rule = PARASHARI_GOCHAR_RULES[id];
    const isGocharFavorableRaw = rule.favorableHouses.includes(h);
    const vedhaHouse = rule.vedhaMap[h];
    let vedhaBy = [];
    let vipreetVedhaBy = [];
    if (isGocharFavorableRaw && vedhaHouse) {
      vedhaBy = houseOccupants[vedhaHouse].filter((other) => !isVedhaExemptPair(id, other));
    } else if (!isGocharFavorableRaw) {
      const inverseHouses = [];
      for (const [favHouseStr, vHouse] of Object.entries(rule.vedhaMap)) {
        if (vHouse === h) {
          inverseHouses.push(Number(favHouseStr));
        }
      }
      if (inverseHouses.length > 0) {
        const obstructors = /* @__PURE__ */ new Set();
        for (const invH of inverseHouses) {
          for (const other of houseOccupants[invH] || []) {
            if (!isVedhaExemptPair(id, other)) {
              obstructors.add(other);
            }
          }
        }
        vipreetVedhaBy = Array.from(obstructors);
      }
    }
    const hasVedha = vedhaBy.length > 0;
    const hasVipreetVedha = vipreetVedhaBy.length > 0;
    const conjunctWith = houseOccupants[h].filter((other) => other !== id);
    const aspectedBy = houseAspectsReceived[h].filter((other) => other !== id);
    transits[id] = {
      graha: g,
      houseFromMoon: h,
      ownedHouses: lords.lordHousesMap[id],
      functionalRole: lords.functionalRoleMap[id],
      isFunctionalBenefic: lords.yogakaraka === id || lords.functionalBenefics.includes(id),
      isMaraka: lords.marakas.includes(id),
      isGocharFavorableRaw,
      hasVedha,
      vedhaBy,
      hasVipreetVedha,
      vipreetVedhaBy,
      isEffectiveFavorable: isGocharFavorableRaw && !hasVedha,
      aspectedHouses: aspectedHousesByGraha[id],
      conjunctWith,
      aspectedBy
    };
  }
  const conjunctions = [];
  for (let h = 1; h <= 12; h++) {
    if (houseOccupants[h].length >= 2) {
      const signNum = lords.houseSignMap[h];
      conjunctions.push({
        house: h,
        signNameHi: RASHI_DEFINITIONS[signNum - 1].nameHi,
        planets: [...houseOccupants[h]]
      });
    }
  }
  const satHouse = transits.saturn.houseFromMoon;
  let sadeSatiPhase = "NONE";
  let sadeSatiLabelHi = "शनि गोचर संतुलित (साढ़ेसाती/ढैय्या नहीं)";
  if (satHouse === 12) {
    sadeSatiPhase = "RISING_12TH";
    sadeSatiLabelHi = "शनि साढ़ेसाती (प्रथम चरण — द्वादश भाव)";
  } else if (satHouse === 1) {
    sadeSatiPhase = "PEAK_1ST";
    sadeSatiLabelHi = "शनि साढ़ेसाती (मध्य/शिखर चरण — प्रथम भाव)";
  } else if (satHouse === 2) {
    sadeSatiPhase = "SETTING_2ND";
    sadeSatiLabelHi = "शनि साढ़ेसाती (अंतिम चरण — द्वितीय भाव)";
  } else if (satHouse === 4) {
    sadeSatiPhase = "DHAIYA_4TH";
    sadeSatiLabelHi = "शनि ढैय्या (चतुर्थ भाव — कंटक शनि)";
  } else if (satHouse === 8) {
    sadeSatiPhase = "DHAIYA_8TH";
    sadeSatiLabelHi = "शनि ढैय्या (अष्टम भाव — अष्टम शनि)";
  }
  return {
    moonSign: lords.moonSign,
    snapshot,
    lords,
    transits,
    houseOccupants,
    houseAspectsReceived,
    conjunctions,
    sadeSatiPhase,
    sadeSatiLabelHi
  };
}
function formatDateHiFromParts(year, month, day) {
  return `${day} ${HINDI_GREGORIAN_MONTHS[month - 1] || HINDI_MONTH_SHORT[month - 1]} ${year}`;
}
function bisectBooleanBoundary(lowMs, highMs, predicate) {
  const lowVal = predicate(lowMs);
  let lo = lowMs;
  let hi = highMs;
  for (let i = 0; i < 24; i++) {
    const mid = Math.round((lo + hi) * 0.5);
    if (mid === lo || mid === hi) break;
    if (predicate(mid) === lowVal) {
      lo = mid;
    } else {
      hi = mid;
    }
  }
  return Math.round((lo + hi) * 0.5);
}
function solvePlanetaryIngressesInWindow(startMs, endMs, timeZone, grahas = ["sun", "moon", "mars", "mercury", "jupiter", "venus", "saturn", "rahu", "ketu"]) {
  const events = [];
  for (const graha of grahas) {
    const isLunarNode = graha === "rahu" || graha === "ketu";
    const getIngressLonDeg = (ms) => {
      if (graha === "rahu") return getNodeLongitudesDeg(ms, RASHIFAL_AYANAMSHA_MODE, "MEAN").rahuDeg;
      if (graha === "ketu") return getNodeLongitudesDeg(ms, RASHIFAL_AYANAMSHA_MODE, "MEAN").ketuDeg;
      return getSiderealGrahaLongitudeDeg(graha, ms);
    };
    const stepMs = graha === "moon" ? 3 * 36e5 : graha === "mercury" || graha === "venus" || graha === "sun" ? 6 * 36e5 : 24 * 36e5;
    let prevMs = startMs;
    let prevSign = Math.floor(getIngressLonDeg(prevMs) / 30) % 12 + 1;
    const grahaEvents = [];
    for (let t = startMs + stepMs; t <= endMs + stepMs; t += stepMs) {
      const sampleMs = Math.min(t, endMs);
      const curSign = Math.floor(getIngressLonDeg(sampleMs) / 30) % 12 + 1;
      if (curSign !== prevSign) {
        const crossMs = bisectBooleanBoundary(
          prevMs,
          sampleMs,
          (ms) => Math.floor(getIngressLonDeg(ms) / 30) % 12 + 1 === prevSign
        );
        const speed = getGrahaDailySpeedDeg(graha, crossMs);
        const parts = getLocalDateParts(crossMs, timeZone);
        grahaEvents.push({
          graha,
          grahaNameHi: GRAHA_NAMES[graha].shortHi,
          fromSign: prevSign,
          fromSignNameHi: RASHI_DEFINITIONS[prevSign - 1].nameHi,
          toSign: curSign,
          toSignNameHi: RASHI_DEFINITIONS[curSign - 1].nameHi,
          // Rahu/Ketu are permanently retrograde in mean motion; avoid misleading '(वक्री)' tag
          isRetrogradeIngress: isLunarNode ? false : speed < 0,
          timestampMs: crossMs,
          dateKey: parts.dateKey,
          dateFormattedHi: formatDateHiFromParts(parts.year, parts.month, parts.day),
          timeFormattedHi: formatEpochInZoneHi(crossMs, timeZone, parts.dateKey, false)
        });
        prevSign = curSign;
      }
      prevMs = sampleMs;
      if (sampleMs >= endMs) break;
    }
    if (isLunarNode && grahaEvents.length > 0) {
      const startSign = Math.floor(getIngressLonDeg(startMs) / 30) % 12 + 1;
      const endSign = Math.floor(getIngressLonDeg(endMs) / 30) % 12 + 1;
      if (startSign !== endSign) {
        const expectedRetroToSign = (startSign - 2 + 12) % 12 + 1;
        const settled = [...grahaEvents].reverse().find((ev) => ev.fromSign === startSign && ev.toSign === expectedRetroToSign && ev.toSign === endSign);
        if (settled) {
          events.push(settled);
        }
      }
    } else {
      events.push(...grahaEvents);
    }
  }
  return events.sort((a, b) => a.timestampMs - b.timestampMs);
}
function solveRetrogradeStationsInWindow(startMs, endMs, timeZone, grahas = ["mercury", "venus", "mars", "jupiter", "saturn"]) {
  const events = [];
  const stepMs = 12 * 36e5;
  for (const graha of grahas) {
    let prevMs = startMs;
    let prevRetro = getGrahaDailySpeedDeg(graha, prevMs) < 0;
    for (let t = startMs + stepMs; t <= endMs + stepMs; t += stepMs) {
      const sampleMs = Math.min(t, endMs);
      const curRetro = getGrahaDailySpeedDeg(graha, sampleMs) < 0;
      if (curRetro !== prevRetro) {
        const crossMs = bisectBooleanBoundary(
          prevMs,
          sampleMs,
          (ms) => getGrahaDailySpeedDeg(graha, ms) < 0 === prevRetro
        );
        const signNumber = Math.floor(getSiderealGrahaLongitudeDeg(graha, crossMs) / 30) % 12 + 1;
        const parts = getLocalDateParts(crossMs, timeZone);
        const transition = curRetro ? "RETROGRADE_START" : "DIRECT_START";
        events.push({
          graha,
          grahaNameHi: GRAHA_NAMES[graha].shortHi,
          transition,
          labelHi: transition === "RETROGRADE_START" ? `${GRAHA_NAMES[graha].shortHi} वक्री प्रारंभ (${RASHI_DEFINITIONS[signNumber - 1].nameHi} राशि)` : `${GRAHA_NAMES[graha].shortHi} (वक्री से मार्गी — ${RASHI_DEFINITIONS[signNumber - 1].nameHi} राशि)`,
          signNumber,
          signNameHi: RASHI_DEFINITIONS[signNumber - 1].nameHi,
          timestampMs: crossMs,
          dateKey: parts.dateKey,
          dateFormattedHi: formatDateHiFromParts(parts.year, parts.month, parts.day)
        });
        prevRetro = curRetro;
      }
      prevMs = sampleMs;
      if (sampleMs >= endMs) break;
    }
  }
  return events.sort((a, b) => a.timestampMs - b.timestampMs);
}
function solveCombustionEventsInWindow(startMs, endMs, timeZone, grahas = ["mercury", "venus", "mars", "jupiter", "saturn"]) {
  const events = [];
  const stepMs = 12 * 36e5;
  const isCombustAt = (graha, ms) => {
    const lon = getSiderealGrahaLongitudeDeg(graha, ms);
    const sunLon = getSiderealGrahaLongitudeDeg("sun", ms);
    const isRetro = getGrahaDailySpeedDeg(graha, ms) < 0;
    const orb = getCombustionOrbDeg(graha, isRetro);
    return orb !== null && angularSeparationDeg(lon, sunLon) <= orb;
  };
  for (const graha of grahas) {
    let prevMs = startMs;
    let prevCombust = isCombustAt(graha, prevMs);
    for (let t = startMs + stepMs; t <= endMs + stepMs; t += stepMs) {
      const sampleMs = Math.min(t, endMs);
      const curCombust = isCombustAt(graha, sampleMs);
      if (curCombust !== prevCombust) {
        const crossMs = bisectBooleanBoundary(
          prevMs,
          sampleMs,
          (ms) => isCombustAt(graha, ms) === prevCombust
        );
        const signNumber = Math.floor(getSiderealGrahaLongitudeDeg(graha, crossMs) / 30) % 12 + 1;
        const parts = getLocalDateParts(crossMs, timeZone);
        const transition = curCombust ? "COMBUSTION_START" : "COMBUSTION_END";
        events.push({
          graha,
          grahaNameHi: GRAHA_NAMES[graha].shortHi,
          transition,
          labelHi: transition === "COMBUSTION_START" ? `${GRAHA_NAMES[graha].shortHi} अस्त प्रारंभ (${RASHI_DEFINITIONS[signNumber - 1].nameHi})` : `${GRAHA_NAMES[graha].shortHi} उदय (${RASHI_DEFINITIONS[signNumber - 1].nameHi})`,
          signNumber,
          signNameHi: RASHI_DEFINITIONS[signNumber - 1].nameHi,
          timestampMs: crossMs,
          dateKey: parts.dateKey,
          dateFormattedHi: formatDateHiFromParts(parts.year, parts.month, parts.day)
        });
        prevCombust = curCombust;
      }
      prevMs = sampleMs;
      if (sampleMs >= endMs) break;
    }
  }
  return events.sort((a, b) => a.timestampMs - b.timestampMs);
}
function solveLunarPhaseMilestonesInWindow(startMs, endMs, timeZone) {
  const milestones = [];
  const stepMs = 6 * 36e5;
  let prevMs = startMs;
  let prevElong = getMoonSunElongationDeg(prevMs);
  for (let t = startMs + stepMs; t <= endMs + stepMs; t += stepMs) {
    const sampleMs = Math.min(t, endMs);
    const curElong = getMoonSunElongationDeg(sampleMs);
    if (prevElong < 180 && curElong >= 180) {
      const exactMs = bisectBooleanBoundary(prevMs, sampleMs, (ms) => getMoonSunElongationDeg(ms) < 180);
      const moonSignNumber = Math.floor(getSiderealMoonLonDeg(exactMs, RASHIFAL_AYANAMSHA_MODE) / 30) % 12 + 1;
      const parts = getLocalDateParts(exactMs, timeZone);
      milestones.push({
        type: "PURNIMA",
        labelHi: `पूर्णिमा (${RASHI_DEFINITIONS[moonSignNumber - 1].nameHi} राशि)`,
        moonSignNumber,
        moonSignNameHi: RASHI_DEFINITIONS[moonSignNumber - 1].nameHi,
        timestampMs: exactMs,
        dateKey: parts.dateKey,
        dateFormattedHi: formatDateHiFromParts(parts.year, parts.month, parts.day),
        timeFormattedHi: formatEpochInZoneHi(exactMs, timeZone, parts.dateKey, false)
      });
    }
    if (prevElong > 300 && curElong < 60) {
      const exactMs = bisectBooleanBoundary(prevMs, sampleMs, (ms) => getMoonSunElongationDeg(ms) > 180);
      const moonSignNumber = Math.floor(getSiderealMoonLonDeg(exactMs, RASHIFAL_AYANAMSHA_MODE) / 30) % 12 + 1;
      const parts = getLocalDateParts(exactMs, timeZone);
      milestones.push({
        type: "AMAVASYA",
        labelHi: `अमावस्या (${RASHI_DEFINITIONS[moonSignNumber - 1].nameHi} राशि)`,
        moonSignNumber,
        moonSignNameHi: RASHI_DEFINITIONS[moonSignNumber - 1].nameHi,
        timestampMs: exactMs,
        dateKey: parts.dateKey,
        dateFormattedHi: formatDateHiFromParts(parts.year, parts.month, parts.day),
        timeFormattedHi: formatEpochInZoneHi(exactMs, timeZone, parts.dateKey, false)
      });
    }
    prevMs = sampleMs;
    prevElong = curElong;
    if (sampleMs >= endMs) break;
  }
  return milestones.sort((a, b) => a.timestampMs - b.timestampMs);
}
function solveEclipsesInWindow(startMs, endMs, location) {
  const events = [];
  const timeZone = resolveSafeTimezone(location);
  const observer = new Observer(location.lat, location.lon, location.elevationMeters ?? 100);
  try {
    let solar = SearchGlobalSolarEclipse(new Date(startMs - 2 * 864e5));
    for (let guard = 0; guard < 3; guard++) {
      const peakMs = solar.peak.date.getTime();
      if (peakMs > endMs) break;
      if (peakMs >= startMs && peakMs <= endMs) {
        let isVisibleLocally = false;
        try {
          const localSol = SearchLocalSolarEclipse(new Date(peakMs - 12 * 36e5), observer);
          if (Math.abs(localSol.peak.time.date.getTime() - peakMs) < 12 * 36e5) {
            isVisibleLocally = localSol.peak.altitude > 0;
          }
        } catch {
          isVisibleLocally = false;
        }
        const parts = getLocalDateParts(peakMs, timeZone);
        const sunSignNumber = Math.floor(getSiderealSunLonDeg(peakMs, RASHIFAL_AYANAMSHA_MODE) / 30) % 12 + 1;
        const moonSignNumber = Math.floor(getSiderealMoonLonDeg(peakMs, RASHIFAL_AYANAMSHA_MODE) / 30) % 12 + 1;
        events.push({
          type: "SOLAR",
          kindHi: "सूर्य ग्रहण",
          peakTimestampMs: peakMs,
          dateKey: parts.dateKey,
          dateFormattedHi: formatDateHiFromParts(parts.year, parts.month, parts.day),
          sunSignNumber,
          moonSignNumber,
          signNameHi: RASHI_DEFINITIONS[sunSignNumber - 1].nameHi,
          isVisibleLocally
        });
      }
      solar = NextGlobalSolarEclipse(solar.peak);
    }
  } catch {
  }
  try {
    let lunar = SearchLunarEclipse(new Date(startMs - 2 * 864e5));
    for (let guard = 0; guard < 3; guard++) {
      const peakMs = lunar.peak.date.getTime();
      if (peakMs > endMs) break;
      if (peakMs >= startMs && peakMs <= endMs && lunar.kind !== EclipseKind.Penumbral) {
        let isVisibleLocally = false;
        try {
          const halfPartialMs = Math.max(0, (lunar.sd_partial || 0) * 6e4);
          const checkOffsets = halfPartialMs > 0 ? [-halfPartialMs, -halfPartialMs * 0.5, 0, halfPartialMs * 0.5, halfPartialMs] : [0];
          for (const off of checkOffsets) {
            const sampleDate = new Date(peakMs + off);
            const eq = Equator(Body.Moon, sampleDate, observer, true, true);
            const hor = Horizon(sampleDate, observer, eq.ra, eq.dec, "normal");
            if (hor.altitude > 0) {
              isVisibleLocally = true;
              break;
            }
          }
        } catch {
          isVisibleLocally = false;
        }
        const parts = getLocalDateParts(peakMs, timeZone);
        const sunSignNumber = Math.floor(getSiderealSunLonDeg(peakMs, RASHIFAL_AYANAMSHA_MODE) / 30) % 12 + 1;
        const moonSignNumber = Math.floor(getSiderealMoonLonDeg(peakMs, RASHIFAL_AYANAMSHA_MODE) / 30) % 12 + 1;
        events.push({
          type: "LUNAR",
          kindHi: "चंद्र ग्रहण",
          peakTimestampMs: peakMs,
          dateKey: parts.dateKey,
          dateFormattedHi: formatDateHiFromParts(parts.year, parts.month, parts.day),
          sunSignNumber,
          moonSignNumber,
          signNameHi: RASHI_DEFINITIONS[moonSignNumber - 1].nameHi,
          isVisibleLocally
        });
      }
      lunar = NextLunarEclipse(lunar.peak);
    }
  } catch {
  }
  return events.sort((a, b) => a.peakTimestampMs - b.peakTimestampMs);
}
function assertValidCalendarDate(year, month, day, rawLabel) {
  if (!Number.isInteger(year) || year < 1600 || year > 2500) {
    throw new Error(`Out-of-range year in date "${rawLabel}" (supported: 1600–2500 AD)`);
  }
  if (!Number.isInteger(month) || month < 1 || month > 12) {
    throw new Error(`Invalid month (${month}) in date "${rawLabel}"`);
  }
  const maxDay = getLocalCalendarGridInfo(year, month).daysInMonth;
  if (!Number.isInteger(day) || day < 1 || day > maxDay) {
    throw new Error(`Invalid day (${day}) for ${year}-${month} in date "${rawLabel}"`);
  }
}
function resolveCivilDayBounds(dateInput, location) {
  const timeZone = resolveSafeTimezone(location);
  let year;
  let month;
  let day;
  if (typeof dateInput === "string") {
    const parsed = parseDateKey(dateInput);
    assertValidCalendarDate(parsed.year, parsed.month, parsed.day, dateInput);
    year = parsed.year;
    month = parsed.month;
    day = parsed.day;
  } else {
    if (Number.isNaN(dateInput.getTime())) {
      throw new Error("Invalid Date supplied to resolveCivilDayBounds");
    }
    const parts = getLocalDateParts(dateInput, timeZone);
    year = parts.year;
    month = parts.month;
    day = parts.day;
  }
  const dateKey = formatDateKey(year, month, day);
  const midnightStartMs = getLocalMidnightUtcMs(year, month, day, timeZone);
  const nextDay = shiftCivilDate(year, month, day, 1);
  const midnightEndMs = getLocalMidnightUtcMs(nextDay.year, nextDay.month, nextDay.day, timeZone);
  const middayParts = getLocalDateParts(zonedWallClockToUtcMs(year, month, day, 12, 0, 0, timeZone), timeZone);
  const timings = calculateDayAstronomicalTimings(year, month, day, location);
  return {
    dateKey,
    year,
    month,
    day,
    weekdayIndex: middayParts.weekdayIndex,
    weekdayHi: VAAR_LIST[middayParts.weekdayIndex]?.full || "रविवार",
    dateFormattedHi: `${VAAR_LIST[middayParts.weekdayIndex]?.full || ""}, ${formatDateHiFromParts(year, month, day)}`,
    midnightStartMs,
    midnightEndMs,
    timings
  };
}
function getMondaySundayWeekRange(anchorDateInput, timeZone) {
  const safeTz = timeZone || "Asia/Kolkata";
  let year;
  let month;
  let day;
  if (typeof anchorDateInput === "string") {
    const p = parseDateKey(anchorDateInput);
    assertValidCalendarDate(p.year, p.month, p.day, anchorDateInput);
    year = p.year;
    month = p.month;
    day = p.day;
  } else {
    if (Number.isNaN(anchorDateInput.getTime())) {
      throw new Error("Invalid Date supplied to getMondaySundayWeekRange");
    }
    const p = getLocalDateParts(anchorDateInput, safeTz);
    year = p.year;
    month = p.month;
    day = p.day;
  }
  const anchorMidday = getLocalDateParts(zonedWallClockToUtcMs(year, month, day, 12, 0, 0, safeTz), safeTz);
  const daysSinceMonday = anchorMidday.weekdayIndex === 0 ? 6 : anchorMidday.weekdayIndex - 1;
  const monday = shiftCivilDate(year, month, day, -daysSinceMonday);
  const days = [];
  for (let i = 0; i < 7; i++) {
    const c = shiftCivilDate(monday.year, monday.month, monday.day, i);
    const weekdayIndex = (i + 1) % 7;
    days.push({
      offsetFromMonday: i,
      dateKey: c.dateKey,
      year: c.year,
      month: c.month,
      day: c.day,
      weekdayIndex,
      weekdayHi: VAAR_LIST[weekdayIndex]?.full || "सोमवार",
      shortDateHi: `${c.day} ${HINDI_MONTH_SHORT[c.month - 1] || ""}`
    });
  }
  const sunday = days[6];
  const nextMonday = shiftCivilDate(monday.year, monday.month, monday.day, 7);
  const weekStartMs = getLocalMidnightUtcMs(monday.year, monday.month, monday.day, safeTz);
  const weekEndMs = getLocalMidnightUtcMs(nextMonday.year, nextMonday.month, nextMonday.day, safeTz);
  const rangeLabelHi = `${monday.day} ${HINDI_GREGORIAN_MONTHS[monday.month - 1]} से ${sunday.day} ${HINDI_GREGORIAN_MONTHS[sunday.month - 1]} ${sunday.year}`;
  const rangeLabelEn = `${monday.day} ${ENGLISH_MONTH_NAMES[monday.month - 1].slice(0, 3)} – ${sunday.day} ${ENGLISH_MONTH_NAMES[sunday.month - 1].slice(0, 3)} ${sunday.year}`;
  return {
    weekStartDateKey: monday.dateKey,
    weekEndDateKey: sunday.dateKey,
    weekStartMs,
    weekEndMs,
    days,
    rangeLabelHi,
    rangeLabelEn
  };
}
function getCalendarMonthRange(year, month, timeZone) {
  if (!Number.isInteger(year) || !Number.isInteger(month) || month < 1 || month > 12) {
    throw new Error(`Invalid calendar month: ${year}-${month}`);
  }
  const safeTz = timeZone || "Asia/Kolkata";
  const grid = getLocalCalendarGridInfo(year, month);
  const monthStartDateKey = formatDateKey(year, month, 1);
  const monthEndDateKey = formatDateKey(year, month, grid.daysInMonth);
  const monthStartMs = getLocalMidnightUtcMs(year, month, 1, safeTz);
  const nextMonthFirst = shiftCivilDate(year, month, grid.daysInMonth, 1);
  const monthEndMs = getLocalMidnightUtcMs(
    nextMonthFirst.year,
    nextMonthFirst.month,
    nextMonthFirst.day,
    safeTz
  );
  return {
    year,
    month,
    monthKey: `${year}-${String(month).padStart(2, "0")}`,
    daysInMonth: grid.daysInMonth,
    monthStartDateKey,
    monthEndDateKey,
    monthStartMs,
    monthEndMs,
    monthLabelHi: `${HINDI_GREGORIAN_MONTHS[month - 1]} ${year}`,
    monthLabelEn: `${ENGLISH_MONTH_NAMES[month - 1]} ${year}`
  };
}
const TARA_CATALOG = {
  1: { nameHi: "जन्म तारा", favorable: false, guidanceHi: "आत्मचिंतन, नियमित कार्य व स्वास्थ्य के प्रति सजग रहें।" },
  2: { nameHi: "संपत तारा", favorable: true, guidanceHi: "आर्थिक निर्णय, सौभाग्य और कार्य-सफलता के लिए उत्तम।" },
  3: { nameHi: "विपत तारा", favorable: false, guidanceHi: "नए बड़े जोखिम व विवाद से बचें; धैर्य रखें।" },
  4: { nameHi: "क्षेम तारा", favorable: true, guidanceHi: "सुरक्षा, स्थिरता, परिवार व कल्याणकारी कार्यों हेतु शुभ।" },
  5: { nameHi: "प्रत्यरि तारा", favorable: false, guidanceHi: "अवरोध संभव हैं; वाणी व कार्यनीति में सौम्यता रखें।" },
  6: { nameHi: "साधक तारा", favorable: true, guidanceHi: "लक्ष्य-प्राप्ति, महत्वपूर्ण मीटिंग और कार्यसिद्धि हेतु श्रेष्ठ।" },
  7: { nameHi: "वध (नैधन) तारा", favorable: false, guidanceHi: "जल्दबाजी, जोखिमपूर्ण यात्रा व बड़े निवेश टालना उचित है।" },
  8: { nameHi: "मित्र तारा", favorable: true, guidanceHi: "सहयोग, मित्रता, साझेदारी और सम्मान वृद्धि के लिए शुभ।" },
  9: { nameHi: "अतिमित्र तारा", favorable: true, guidanceHi: "विशेष भाग्योदय, शुभ अवसर और श्रेष्ठ सफलता का योग।" }
};
function computeOptionalTarabala(transitNakshatraIndex, birthNakshatraIndex) {
  if (typeof birthNakshatraIndex !== "number" || !Number.isInteger(birthNakshatraIndex) || birthNakshatraIndex < 0 || birthNakshatraIndex > 26) {
    return null;
  }
  const safeTransit = (transitNakshatraIndex % 27 + 27) % 27;
  const taraNumber = ((safeTransit - birthNakshatraIndex) % 27 + 27) % 27 % 9 + 1;
  const info = TARA_CATALOG[taraNumber];
  return {
    birthNakshatraIndex,
    birthNakshatraNameHi: NAKSHATRAS_27[birthNakshatraIndex],
    transitNakshatraIndex: safeTransit,
    transitNakshatraNameHi: NAKSHATRAS_27[safeTransit],
    taraNumber,
    taraNameHi: info.nameHi,
    isFavorable: info.favorable,
    guidanceHi: info.guidanceHi
  };
}
const RASHI_NAKSHATRA_INDICES = {
  1: [0, 1, 2],
  // मेष: अश्विनी, भरणी, कृत्तिका
  2: [2, 3, 4],
  // वृषभ: कृत्तिका, रोहिणी, मृगशिरा
  3: [4, 5, 6],
  // मिथुन: मृगशिरा, आर्द्रा, पुनर्वसु
  4: [6, 7, 8],
  // कर्क: पुनर्वसु, पुष्य, आश्लेषा
  5: [9, 10, 11],
  // सिंह: मघा, पूर्वाफाल्गुनी, उत्तराफाल्गुनी
  6: [11, 12, 13],
  // कन्या: उत्तराफाल्गुनी, हस्त, चित्रा
  7: [13, 14, 15],
  // तुला: चित्रा, स्वाति, विशाखा
  8: [15, 16, 17],
  // वृश्चिक: विशाखा, अनुराधा, ज्येष्ठा
  9: [18, 19, 20],
  // धनु: मूल, पूर्वाषाढ़ा, उत्तराषाढ़ा
  10: [20, 21, 22],
  // मकर: उत्तराषाढ़ा, श्रवण, धनिष्ठा
  11: [22, 23, 24],
  // कुम्भ: धनिष्ठा, शतभिषा, पूर्वाभाद्रपद
  12: [24, 25, 26]
  // मीन: पूर्वाभाद्रपद, उत्तराभाद्रपद, रेवती
};
const TARA_SHORT_NAME_HI = {
  1: "जन्म",
  2: "संपत",
  3: "विपत",
  4: "क्षेम",
  5: "प्रत्यरि",
  6: "साधक",
  7: "वध",
  8: "मित्र",
  9: "अतिमित्र"
};
const TARA_SHORT_GUIDANCE_HI = {
  1: "आत्मचिंतन व नियमित कार्य हेतु मध्यम",
  2: "धन, सौभाग्य व कार्यसिद्धि हेतु उत्तम",
  3: "नए जोखिम से बचकर धैर्य रखना उचित",
  4: "सुरक्षा व कल्याण हेतु शुभ",
  5: "वाणी व कार्यनीति में सौम्यता अपेक्षित",
  6: "लक्ष्य-प्राप्ति व कार्यसिद्धि हेतु श्रेष्ठ",
  7: "जल्दबाजी व बड़े जोखिम टालना उचित",
  8: "सहयोग, मित्रता व सम्मान वृद्धि हेतु शुभ",
  9: "विशेष भाग्योदय व श्रेष्ठ सफलता हेतु शुभ"
};
function computeRashiWideTarabala(rashiNumber, transitNakshatraIndex) {
  const safeRashi = ((Math.round(rashiNumber) - 1) % 12 + 12) % 12 + 1;
  const safeTransit = (transitNakshatraIndex % 27 + 27) % 27;
  const nakIndices = RASHI_NAKSHATRA_INDICES[safeRashi] || RASHI_NAKSHATRA_INDICES[1];
  const entries = nakIndices.map((nakIdx) => {
    const taraNumber = ((safeTransit - nakIdx) % 27 + 27) % 27 % 9 + 1;
    const info = TARA_CATALOG[taraNumber];
    return {
      birthNakshatraIndex: nakIdx,
      birthNakshatraNameHi: NAKSHATRAS_27[nakIdx],
      taraNumber,
      taraShortHi: TARA_SHORT_NAME_HI[taraNumber] || info.nameHi,
      taraNameHi: info.nameHi,
      isFavorable: info.favorable,
      shortGuidanceHi: TARA_SHORT_GUIDANCE_HI[taraNumber] || info.guidanceHi
    };
  });
  const summaryLineHi = entries.map((e) => `${e.birthNakshatraNameHi} (${e.taraShortHi})`).join(" • ");
  const favorablePriority = [4, 2, 6, 9, 8];
  let best = entries[0];
  let bestRank = 999;
  for (const e of entries) {
    const r = favorablePriority.indexOf(e.taraNumber);
    if (r !== -1 && r < bestRank) {
      bestRank = r;
      best = e;
    }
  }
  const highlightSentenceHi = `${best.birthNakshatraNameHi} नक्षत्र वालों के लिए आज ${best.taraNameHi} है — ${best.shortGuidanceHi}।`;
  return {
    rashiNumber: safeRashi,
    transitNakshatraIndex: safeTransit,
    transitNakshatraNameHi: NAKSHATRAS_27[safeTransit],
    entries,
    summaryLineHi,
    highlightSentenceHi
  };
}
function getPersonalContextCacheHash(ctx) {
  if (!ctx) return "gen";
  const m = ctx.mahadashaLord || "x";
  const a = ctx.antardashaLord || "x";
  const bav = Array.isArray(ctx.moonBavBySign) && ctx.moonBavBySign.length === 12 ? ctx.moonBavBySign.join("") : "x";
  if (m === "x" && a === "x" && bav === "x") return "gen";
  return `p_${m}_${a}_${bav}`;
}
function evaluatePersonalDashaAshtakavarga(params) {
  const { context, analysis, focusSignNumbers, scope } = params;
  if (!context) return null;
  const hasDasha = Boolean(context.mahadashaLord || context.antardashaLord);
  const hasMoonBav = Array.isArray(context.moonBavBySign) && context.moonBavBySign.length === 12;
  const hasSav = Array.isArray(context.savBySign) && context.savBySign.length === 12;
  if (!hasDasha && !hasMoonBav) return null;
  let scoreDelta = 0;
  const insightParts = [];
  const mdLord = context.mahadashaLord;
  const adLord = context.antardashaLord;
  const mdName = mdLord ? GRAHA_NAMES[mdLord].shortHi : "";
  const adName = adLord ? GRAHA_NAMES[adLord].shortHi : "";
  if (mdLord) {
    const tMd = analysis.transits[mdLord];
    if (tMd.isEffectiveFavorable || tMd.isFunctionalBenefic) {
      scoreDelta += tMd.isEffectiveFavorable ? 3.2 : 1.5;
    } else if (!tMd.isGocharFavorableRaw && !tMd.hasVipreetVedha) {
      scoreDelta -= tMd.isMaraka ? 2.5 : 1.4;
    }
    if (tMd.hasVipreetVedha) {
      scoreDelta += 1;
    }
  }
  if (adLord) {
    const tAd = analysis.transits[adLord];
    if (tAd.isEffectiveFavorable) {
      scoreDelta += 2.4;
    } else if (tAd.hasVipreetVedha) {
      scoreDelta += 0.8;
    } else if (!tAd.isGocharFavorableRaw) {
      scoreDelta -= tAd.isMaraka ? 2 : 1.1;
    }
  }
  if (mdLord && adLord) {
    const mdT = analysis.transits[mdLord];
    const adT = analysis.transits[adLord];
    const dashaTone = mdT.isEffectiveFavorable && adT.isEffectiveFavorable ? "प्रबल सहायक और फलदायी" : mdT.isEffectiveFavorable || adT.isEffectiveFavorable ? "संतुलित और क्रमिक प्रगति देने वाला" : "संयम, समीक्षा व धैर्य की अपेक्षा रखने वाला";
    const scopeLabel = scope === "daily" ? "आज" : scope === "weekly" ? "इस सप्ताह" : "इस माह";
    insightParts.push(
      `आपकी सक्रिय विंशोत्तरी ${mdName} महादशा व ${adName} अंतर्दशा का गोचर समन्वय ${scopeLabel} ${dashaTone} है।`
    );
  } else if (mdLord) {
    const mdT = analysis.transits[mdLord];
    insightParts.push(
      `सक्रिय ${mdName} महादशा के स्वामी गोचर में ${mdT.isEffectiveFavorable ? "अनुकूल सहयोग" : "धैर्य व संयम"} का संकेत दे रहे हैं।`
    );
  }
  let moonBavBindus = null;
  let savBindus = null;
  let bavStrengthHi = "";
  const validSigns = focusSignNumbers.filter((s) => s >= 1 && s <= 12);
  if (hasMoonBav && validSigns.length > 0 && context.moonBavBySign) {
    const sumBav = validSigns.reduce((acc, s) => acc + (context.moonBavBySign[s - 1] ?? 4), 0);
    moonBavBindus = Number((sumBav / validSigns.length).toFixed(1));
    if (moonBavBindus >= 5) {
      scoreDelta += scope === "daily" ? 3.5 : 2.5;
      bavStrengthHi = "उत्तम बल";
      insightParts.push(
        `चंद्रमा के भिन्नाष्टकवर्ग में ${moonBavBindus}/8 शुभ बिंदु (उत्तम बल) मिलने से मानसिक स्पष्टता और गोचर फल में वृद्धि होगी।`
      );
    } else if (moonBavBindus >= 4) {
      scoreDelta += 0.8;
      bavStrengthHi = "संतुलित बल";
      insightParts.push(
        `चंद्रमा के भिन्नाष्टकवर्ग में ${moonBavBindus}/8 संतुलित बिंदु हैं, जिससे नियमित प्रयास सार्थक रहेंगे।`
      );
    } else {
      scoreDelta -= scope === "daily" ? 3 : 2;
      bavStrengthHi = "संयम आवश्यक";
      insightParts.push(
        `चंद्रमा के भिन्नाष्टकवर्ग में ${moonBavBindus}/8 कम बिंदु होने के कारण अनावश्यक जोखिम से बचकर धैर्य रखना उत्तम होगा।`
      );
    }
  }
  if (hasSav && validSigns.length > 0 && context.savBySign) {
    const sumSav = validSigns.reduce((acc, s) => acc + (context.savBySign[s - 1] ?? 28), 0);
    savBindus = Math.round(sumSav / validSigns.length);
    if (savBindus >= 30) scoreDelta += 1.2;
    else if (savBindus <= 24) scoreDelta -= 1.2;
  }
  const clampedDelta = Math.max(-7, Math.min(7, Number(scoreDelta.toFixed(1))));
  const badgeParts = [];
  if (mdName && adName) badgeParts.push(`दशा: ${mdName}–${adName}`);
  else if (mdName) badgeParts.push(`महादशा: ${mdName}`);
  if (moonBavBindus !== null) badgeParts.push(`चंद्र अष्टकवर्ग: ${moonBavBindus}/8 (${bavStrengthHi})`);
  return {
    mahadashaLord: mdLord,
    antardashaLord: adLord,
    mahadashaNameHi: mdName,
    antardashaNameHi: adName,
    moonBavBindus,
    savBindus,
    bavStrengthHi,
    scoreDelta: clampedDelta,
    badgeHi: badgeParts.join(" • "),
    insightHi: insightParts.join(" ")
  };
}
const MS_PER_YEAR = 365.2425 * 864e5;
const MS_PER_DAY = 864e5;
const INGRESS_WINDOW_CACHE = /* @__PURE__ */ new Map();
const VIMSHOTTARI_SEQUENCE$1 = [
  {
    id: "ketu",
    hindiName: "केतु",
    years: 7,
    effectHi: "आध्यात्मिक चिंतन, शोध, एकाग्रता एवं पूर्व-संस्कारों के फल का काल।"
  },
  {
    id: "venus",
    hindiName: "शुक्र",
    years: 20,
    effectHi: "भौतिक सुख, कला, वैवाहिक सामंजस्य, वाहन एवं ऐश्वर्य वृद्धि का काल।"
  },
  {
    id: "sun",
    hindiName: "सूर्य",
    years: 6,
    effectHi: "प्रशासनिक सम्मान, आत्मबल, नेतृत्व, पिता-सहयोग व यश वृद्धि का काल।"
  },
  {
    id: "moon",
    hindiName: "चंद्र",
    years: 10,
    effectHi: "मनोबल, जनसंपर्क, पारिवारिक सुख, माता कृपा एवं यात्राओं का काल।"
  },
  {
    id: "mars",
    hindiName: "मंगल",
    years: 7,
    effectHi: "साहस, पराक्रम, भूमि-संपत्ति, तकनीकी दक्षता व निर्णायक कदमों का काल।"
  },
  {
    id: "rahu",
    hindiName: "राहु",
    years: 18,
    effectHi: "महत्वाकांक्षा, नवीन तकनीक, विदेश/बड़े नेटवर्क व अप्रत्याशित अवसरों का काल।"
  },
  {
    id: "jupiter",
    hindiName: "गुरु",
    years: 16,
    effectHi: "ज्ञान, धर्म, संतान सुख, मान-सम्मान, मार्गदर्शन व आर्थिक स्थिरता का काल।"
  },
  {
    id: "saturn",
    hindiName: "शनि",
    years: 19,
    effectHi: "अनुशासन, दीर्घकालिक परिश्रम, न्याय, कर्मफल एवं स्थायी निर्माण का काल।"
  },
  {
    id: "mercury",
    hindiName: "बुध",
    years: 17,
    effectHi: "बुद्धि, व्यापार, लेखन, संवाद कौशल एवं शैक्षणिक उपलब्धियों का काल।"
  }
];
function formatUtcDateHi(utcMs, timeZone) {
  try {
    const parts = new Intl.DateTimeFormat("en-CA", {
      timeZone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    }).formatToParts(new Date(utcMs));
    const y = parts.find((p) => p.type === "year")?.value || "2000";
    const m = parseInt(parts.find((p) => p.type === "month")?.value || "1", 10);
    const d = parseInt(parts.find((p) => p.type === "day")?.value || "1", 10);
    return `${d} ${HINDI_GREGORIAN_MONTHS[m - 1] || m} ${y}`;
  } catch {
    const d = new Date(utcMs);
    return `${d.getUTCDate()} ${HINDI_GREGORIAN_MONTHS[d.getUTCMonth()] || ""} ${d.getUTCFullYear()}`;
  }
}
function formatYearMonthDayDurationHi(yearsFloat) {
  const totalDays = Math.max(0, Math.round(yearsFloat * 365.2425));
  const y = Math.floor(yearsFloat);
  const remAfterY = Math.max(0, yearsFloat - y);
  const mFloat = remAfterY * 12;
  const m = Math.floor(mFloat);
  const d = Math.round((mFloat - m) * 30.4369);
  if (totalDays < 1) return "0 दिन";
  return `${y} वर्ष ${m} माह ${d} दिन`;
}
function computeProgressPct(startMs, endMs, nowMs) {
  if (nowMs <= startMs) return 0;
  if (nowMs >= endMs) return 100;
  return Number(((nowMs - startMs) / Math.max(1, endMs - startMs) * 100).toFixed(1));
}
function buildVimshottariSubPeriods(parentLordId, parentStartMs, parentEndMs, level, nowMs, timeZone, clipBirthMs) {
  const startIdx = VIMSHOTTARI_SEQUENCE$1.findIndex((s) => s.id === parentLordId);
  const safeStartIdx = startIdx >= 0 ? startIdx : 0;
  const fullParentSpanMs = parentEndMs - parentStartMs;
  const out = [];
  let cursor = parentStartMs;
  for (let i = 0; i < 9; i++) {
    const subSpec = VIMSHOTTARI_SEQUENCE$1[(safeStartIdx + i) % 9];
    const subSpanMs = fullParentSpanMs * subSpec.years / 120;
    const rawStart = cursor;
    const rawEnd = cursor + subSpanMs;
    cursor = rawEnd;
    if (clipBirthMs !== void 0 && rawEnd <= clipBirthMs) {
      continue;
    }
    const effectiveStart = clipBirthMs !== void 0 ? Math.max(rawStart, clipBirthMs) : rawStart;
    const effectiveEnd = rawEnd;
    const isCurrent = nowMs >= effectiveStart && nowMs < effectiveEnd;
    const spanYears = (effectiveEnd - effectiveStart) / MS_PER_YEAR;
    const spanDays = Math.max(0.1, (effectiveEnd - effectiveStart) / MS_PER_DAY);
    out.push({
      level,
      lordId: subSpec.id,
      lordHindi: subSpec.hindiName,
      durationYears: Number(spanYears.toFixed(4)),
      durationDays: Number(spanDays.toFixed(1)),
      startUtcMs: effectiveStart,
      endUtcMs: effectiveEnd,
      startDateHi: formatUtcDateHi(effectiveStart, timeZone),
      endDateHi: formatUtcDateHi(effectiveEnd, timeZone),
      isCurrent,
      progressPct: isCurrent ? computeProgressPct(effectiveStart, effectiveEnd, nowMs) : nowMs >= effectiveEnd ? 100 : 0
    });
  }
  return out;
}
function computeVimshottariDashaSystem(report, referenceEpochMs = Date.now()) {
  const moon = report.planets.find((p) => p.id === "moon");
  const birthMs = report.spaceTime.utcEpochMs;
  const tz = report.spaceTime.timeZone;
  const nakSpan = 360 / 27;
  const nakExact = moon.siderealLonDeg / nakSpan;
  const nakIdx = Math.floor(nakExact) % 27;
  const elapsedFrac = nakExact - Math.floor(nakExact);
  const remainingFrac = Math.max(1e-4, 1 - elapsedFrac);
  const startSeqIdx = VIMSHOTTARI_SEQUENCE$1.findIndex((s) => s.id === moon.nakshatraLordId);
  const validStartIdx = startSeqIdx >= 0 ? startSeqIdx : 0;
  const firstSpec = VIMSHOTTARI_SEQUENCE$1[validStartIdx];
  const balanceYears = firstSpec.years * remainingFrac;
  const firstMahaFullStartMs = birthMs - firstSpec.years * elapsedFrac * MS_PER_YEAR;
  const mahadashas = [];
  let mahaCursorMs = firstMahaFullStartMs;
  for (let i = 0; i < 9; i++) {
    const spec = VIMSHOTTARI_SEQUENCE$1[(validStartIdx + i) % 9];
    const fullSpanMs = spec.years * MS_PER_YEAR;
    const rawStartMs = mahaCursorMs;
    const rawEndMs = rawStartMs + fullSpanMs;
    mahaCursorMs = rawEndMs;
    const effectiveStartMs = i === 0 ? birthMs : rawStartMs;
    const effectiveEndMs = rawEndMs;
    const effectiveYears = (effectiveEndMs - effectiveStartMs) / MS_PER_YEAR;
    const isCurrent = referenceEpochMs >= effectiveStartMs && referenceEpochMs < effectiveEndMs;
    const antardashas = buildVimshottariSubPeriods(
      spec.id,
      rawStartMs,
      rawEndMs,
      "ANTARDASHA",
      referenceEpochMs,
      tz,
      i === 0 ? birthMs : void 0
    );
    mahadashas.push({
      level: "MAHADASHA",
      lordId: spec.id,
      lordHindi: spec.hindiName,
      durationYears: Number(effectiveYears.toFixed(3)),
      durationDays: Number(((effectiveEndMs - effectiveStartMs) / MS_PER_DAY).toFixed(1)),
      startUtcMs: effectiveStartMs,
      endUtcMs: effectiveEndMs,
      startDateHi: formatUtcDateHi(effectiveStartMs, tz),
      endDateHi: formatUtcDateHi(effectiveEndMs, tz),
      isCurrent,
      progressPct: isCurrent ? computeProgressPct(effectiveStartMs, effectiveEndMs, referenceEpochMs) : referenceEpochMs >= effectiveEndMs ? 100 : 0,
      effectHi: spec.effectHi,
      antardashas
    });
  }
  let activeMaha = mahadashas.find((m) => m.isCurrent);
  if (!activeMaha) {
    activeMaha = referenceEpochMs < birthMs ? mahadashas[0] : mahadashas[mahadashas.length - 1];
    activeMaha.isCurrent = true;
  }
  const activeAntar = activeMaha.antardashas.find((a) => a.isCurrent) || activeMaha.antardashas[0];
  const activeAntarFullSpanMs = VIMSHOTTARI_SEQUENCE$1.find((s) => s.id === activeMaha.lordId).years * VIMSHOTTARI_SEQUENCE$1.find((s) => s.id === activeAntar.lordId).years * MS_PER_YEAR / 120;
  const activeAntarUnclippedStartMs = activeAntar.endUtcMs - activeAntarFullSpanMs;
  const activeAntardashaPratyantars = buildVimshottariSubPeriods(
    activeAntar.lordId,
    activeAntarUnclippedStartMs,
    activeAntar.endUtcMs,
    "PRATYANTARDASHA",
    referenceEpochMs,
    tz,
    birthMs
  );
  const activePratyantar = activeAntardashaPratyantars.find((p) => p.isCurrent) || activeAntardashaPratyantars[0] || activeAntar;
  const activePratyantarFullSpanMs = activeAntarFullSpanMs * VIMSHOTTARI_SEQUENCE$1.find((s) => s.id === activePratyantar.lordId).years / 120;
  const activePratyantarUnclippedStartMs = activePratyantar.endUtcMs - activePratyantarFullSpanMs;
  const activePratyantarSookshmas = buildVimshottariSubPeriods(
    activePratyantar.lordId,
    activePratyantarUnclippedStartMs,
    activePratyantar.endUtcMs,
    "SOOKSHMADASHA",
    referenceEpochMs,
    tz,
    birthMs
  );
  const activeSookshma = activePratyantarSookshmas.find((s) => s.isCurrent) || activePratyantarSookshmas[0] || activePratyantar;
  return {
    birthNakshatraNameHi: NAKSHATRAS_27[nakIdx] || moon.nakshatraNameHi,
    birthNakshatraLordId: moon.nakshatraLordId,
    birthNakshatraLordHindi: moon.nakshatraLordHi,
    elapsedNakshatraPct: Number((elapsedFrac * 100).toFixed(2)),
    balanceAtBirthHi: `${firstSpec.hindiName} महादशा शेष: ${formatYearMonthDayDurationHi(balanceYears)}`,
    balanceYears: Number(balanceYears.toFixed(4)),
    mahadashas,
    activeMahadasha: activeMaha,
    activeAntardasha: activeAntar,
    activePratyantardasha: activePratyantar,
    activeSookshmadasha: activeSookshma,
    activeAntardashaPratyantars,
    activePratyantarSookshmas
  };
}
const YOGINI_SEQUENCE = [
  {
    index: 1,
    nameHi: "मंगला",
    lordId: "moon",
    lordHindi: "चंद्र",
    years: 1,
    natureHi: "शुभ",
    effectHi: "मंगलकारी कार्यों, मानसिक शांति, धर्म-कर्म एवं शुभ आरंभ की दशा।"
  },
  {
    index: 2,
    nameHi: "पिंगला",
    lordId: "sun",
    lordHindi: "सूर्य",
    years: 2,
    natureHi: "मिश्रित",
    effectHi: "प्रशासनिक सक्रियता, क्रोध पर नियंत्रण, पिता व कार्यक्षेत्र पर विशेष ध्यान की दशा।"
  },
  {
    index: 3,
    nameHi: "धान्या",
    lordId: "jupiter",
    lordHindi: "गुरु",
    years: 3,
    natureHi: "शुभ",
    effectHi: "धन-धान्य वृद्धि, सौभाग्य, शिक्षा, गुरु-कृपा एवं सुख-समृद्धि की दशा।"
  },
  {
    index: 4,
    nameHi: "भ्रामरी",
    lordId: "mars",
    lordHindi: "मंगल",
    years: 4,
    natureHi: "मिश्रित",
    effectHi: "यात्राओं, स्थान परिवर्तन, तीव्र ऊर्जा व अचानक निर्णय लेने की प्रवृत्ति की दशा।"
  },
  {
    index: 5,
    nameHi: "भद्रिका",
    lordId: "mercury",
    lordHindi: "बुध",
    years: 5,
    natureHi: "शुभ",
    effectHi: "व्यापार, वाक्-पटुता, मित्रों से लाभ, पदोन्नति एवं बौद्धिक उत्कर्ष की दशा।"
  },
  {
    index: 6,
    nameHi: "उल्का",
    lordId: "saturn",
    lordHindi: "शनि",
    years: 6,
    natureHi: "संघर्ष/चुनौती",
    effectHi: "कठिन परिश्रम, धैर्य की परीक्षा, व्यय नियंत्रण और सावधानीपूर्वक निर्णय की दशा।"
  },
  {
    index: 7,
    nameHi: "सिद्धा",
    lordId: "venus",
    lordHindi: "शुक्र",
    years: 7,
    natureHi: "शुभ",
    effectHi: "मनोरथ सिद्धि, वैवाहिक/पारिवारिक सुख, वाहन, सम्मान व कलात्मक सफलता की दशा।"
  },
  {
    index: 8,
    nameHi: "संकटा",
    lordId: "rahu",
    lordHindi: "राहु/केतु",
    years: 8,
    natureHi: "संघर्ष/चुनौती",
    effectHi: "अप्रत्याशित परिवर्तन, गुप्त शत्रुओं से सतर्कता एवं आध्यात्मिक संरक्षण आवश्यक।"
  }
];
function computeYoginiDashaSystem(report, referenceEpochMs = Date.now()) {
  const moon = report.planets.find((p) => p.id === "moon");
  const birthMs = report.spaceTime.utcEpochMs;
  const tz = report.spaceTime.timeZone;
  const nakSpan = 360 / 27;
  const nakExact = moon.siderealLonDeg / nakSpan;
  const nakNum1to27 = Math.floor(nakExact) % 27 + 1;
  const elapsedFrac = nakExact - Math.floor(nakExact);
  const rem = (nakNum1to27 + 3) % 8;
  const startSeqIdx = rem === 0 ? 7 : rem - 1;
  const firstYogini = YOGINI_SEQUENCE[startSeqIdx];
  const balanceYears = firstYogini.years * (1 - elapsedFrac);
  const firstFullStartMs = birthMs - firstYogini.years * elapsedFrac * MS_PER_YEAR;
  const mahadashas = [];
  let cursorMs = firstFullStartMs;
  for (let step = 0; step < 24; step++) {
    const spec = YOGINI_SEQUENCE[(startSeqIdx + step) % 8];
    const fullSpanMs = spec.years * MS_PER_YEAR;
    const rawStartMs = cursorMs;
    const rawEndMs = rawStartMs + fullSpanMs;
    cursorMs = rawEndMs;
    const effStartMs = step === 0 ? birthMs : rawStartMs;
    const effYears = Number(((rawEndMs - effStartMs) / MS_PER_YEAR).toFixed(2));
    const isCurrent = referenceEpochMs >= effStartMs && referenceEpochMs < rawEndMs;
    const antarIdxBase = (startSeqIdx + step) % 8;
    const antardashas = [];
    let aCursor = rawStartMs;
    for (let a = 0; a < 8; a++) {
      const aSpec = YOGINI_SEQUENCE[(antarIdxBase + a) % 8];
      const aSpanMs = fullSpanMs * aSpec.years / 36;
      const aStart = aCursor;
      const aEnd = aCursor + aSpanMs;
      aCursor = aEnd;
      if (step === 0 && aEnd <= birthMs) continue;
      const effAStart = step === 0 ? Math.max(aStart, birthMs) : aStart;
      antardashas.push({
        yoginiNameHi: aSpec.nameHi,
        lordHindi: aSpec.lordHindi,
        durationDays: Math.round((aEnd - effAStart) / MS_PER_DAY),
        startUtcMs: effAStart,
        endUtcMs: aEnd,
        startDateHi: formatUtcDateHi(effAStart, tz),
        endDateHi: formatUtcDateHi(aEnd, tz),
        isCurrent: referenceEpochMs >= effAStart && referenceEpochMs < aEnd
      });
    }
    mahadashas.push({
      cycle: Math.floor(step / 8) + 1,
      yoginiNameHi: spec.nameHi,
      lordId: spec.lordId,
      lordHindi: spec.lordHindi,
      years: effYears,
      natureHi: spec.natureHi,
      effectHi: spec.effectHi,
      startUtcMs: effStartMs,
      endUtcMs: rawEndMs,
      startDateHi: formatUtcDateHi(effStartMs, tz),
      endDateHi: formatUtcDateHi(rawEndMs, tz),
      isCurrent,
      antardashas
    });
  }
  let activeMaha = mahadashas.find((m) => m.isCurrent);
  if (!activeMaha) {
    activeMaha = referenceEpochMs < birthMs ? mahadashas[0] : mahadashas[mahadashas.length - 1];
    activeMaha.isCurrent = true;
  }
  const activeAntar = activeMaha.antardashas.find((a) => a.isCurrent) || activeMaha.antardashas[0];
  return {
    startingYoginiHi: firstYogini.nameHi,
    balanceAtBirthHi: `${firstYogini.nameHi} (${firstYogini.lordHindi}) शेष: ${formatYearMonthDayDurationHi(balanceYears)}`,
    mahadashas,
    activeMahadasha: activeMaha,
    activeAntardasha: activeAntar
  };
}
const JAIMINI_VISHAMAPADA_RASHIS = /* @__PURE__ */ new Set([1, 2, 3, 7, 8, 9]);
const EXALTATION_RASHI_BY_GRAHA = {
  sun: 1,
  moon: 2,
  mars: 10,
  mercury: 6,
  jupiter: 4,
  venus: 12,
  saturn: 7,
  rahu: 2,
  ketu: 8
};
const OWN_RASHIS_BY_GRAHA = {
  sun: [5],
  moon: [4],
  mars: [1, 8],
  mercury: [3, 6],
  jupiter: [9, 12],
  venus: [2, 7],
  saturn: [10, 11],
  rahu: [11],
  ketu: [8]
};
function resolveJaiminiDualLord(rashiNumber, planets) {
  const byId = new Map(planets.map((p) => [p.id, p]));
  if (rashiNumber !== 8 && rashiNumber !== 11) {
    const stdLordId = RASHI_META_12[rashiNumber - 1].lordId;
    return {
      lord: byId.get(stdLordId),
      ruleNoteHi: `${RASHI_META_12[rashiNumber - 1].hi} स्वामी ${RASHI_META_12[rashiNumber - 1].lordHi}`
    };
  }
  const lordA = byId.get(rashiNumber === 8 ? "mars" : "saturn");
  const lordB = byId.get(rashiNumber === 8 ? "ketu" : "rahu");
  const conjunctA = planets.filter((p) => p.rashiNumber === lordA.rashiNumber && p.id !== lordA.id).length;
  const conjunctB = planets.filter((p) => p.rashiNumber === lordB.rashiNumber && p.id !== lordB.id).length;
  if (conjunctA !== conjunctB) {
    const winner2 = conjunctA > conjunctB ? lordA : lordB;
    return {
      lord: winner2,
      ruleNoteHi: `युति बल (${Math.max(conjunctA, conjunctB)} सह-ग्रह) से ${winner2.hindiName} प्रभावी`
    };
  }
  const dignityScore = (pl) => {
    if (EXALTATION_RASHI_BY_GRAHA[pl.id] === pl.rashiNumber) return 2;
    if ((OWN_RASHIS_BY_GRAHA[pl.id] || []).includes(pl.rashiNumber)) return 1;
    return 0;
  };
  const digA = dignityScore(lordA);
  const digB = dignityScore(lordB);
  if (digA !== digB) {
    const winner2 = digA > digB ? lordA : lordB;
    const tag = Math.max(digA, digB) === 2 ? "उच्च बल" : "स्वराशि बल";
    return {
      lord: winner2,
      ruleNoteHi: `${tag} से ${winner2.hindiName} प्रभावी स्वामी`
    };
  }
  const winner = lordA.degInSign >= lordB.degInSign ? lordA : lordB;
  return {
    lord: winner,
    ruleNoteHi: `उच्च अंश बल (${winner.degInSign.toFixed(1)}°) से ${winner.hindiName} प्रभावी`
  };
}
function computeJaiminiCharaDashaYears(dashaSign, lordSign) {
  const isOddSign = dashaSign % 2 === 1;
  const dist = isOddSign ? (lordSign - dashaSign + 12) % 12 : (dashaSign - lordSign + 12) % 12;
  return dist === 0 ? 12 : dist;
}
function computeJaiminiSystem(report, referenceEpochMs = Date.now()) {
  const birthMs = report.spaceTime.utcEpochMs;
  const tz = report.spaceTime.timeZone;
  const lagnaRashi = report.angles.ascendantRashiNumber;
  const seven = report.planets.filter((p) => p.id !== "rahu" && p.id !== "ketu").slice().sort((a, b) => b.degInSign - a.degInSign);
  const karakaSpecs = [
    { code: "AK", nameHi: "आत्मकारक (AK)", sigHi: "आत्मा, मुख्य जीवन-उद्देश्य, व्यक्तित्व एवं आत्मबल" },
    { code: "AmK", nameHi: "अमात्यकारक (AmK)", sigHi: "करियर, आजीविका, बुद्धि एवं व्यावसायिक पद" },
    { code: "BK", nameHi: "भ्रातृकारक (BK)", sigHi: "साहस, भाई-बहन एवं गुरुजन-सहयोग" },
    { code: "MK", nameHi: "मातृकारक (MK)", sigHi: "माता, भूमि, मकान, वाहन एवं हृदय-संतोष" },
    { code: "PK", nameHi: "पुत्रकारक (PK)", sigHi: "संतान, उच्च विद्या, मंत्र-प्रज्ञा एवं अनुयायी" },
    { code: "GK", nameHi: "ज्ञातिकारक (GK)", sigHi: "प्रतियोगिता, रोग, ऋण एवं संघर्ष-क्षमता" },
    { code: "DK", nameHi: "दारकारक (DK)", sigHi: "जीवनसाथी, विवाह एवं व्यापारिक साझेदारी" }
  ];
  const karakas = seven.map((pl, idx) => ({
    code: karakaSpecs[idx].code,
    nameHi: karakaSpecs[idx].nameHi,
    planetId: pl.id,
    planetHindi: pl.hindiName,
    degInSign: pl.degInSign,
    degDMS: pl.fullDMS,
    significationHi: karakaSpecs[idx].sigHi
  }));
  const ninthRashi = (lagnaRashi + 8 - 1) % 12 + 1;
  const isDirectSequence = JAIMINI_VISHAMAPADA_RASHIS.has(ninthRashi);
  const sequenceDirectionHi = isDirectSequence ? `सव्य क्रम (Direct) — लग्न से नवम भाव में ${RASHI_META_12[ninthRashi - 1].hi} (विषमपद राशि)` : `अपसव्य क्रम (Reverse) — लग्न से नवम भाव में ${RASHI_META_12[ninthRashi - 1].hi} (समपद राशि)`;
  const charaDasha = [];
  let cursorMs = birthMs;
  for (let step = 0; step < 24; step++) {
    const i = step % 12;
    const cycle = Math.floor(step / 12) + 1;
    const rashiNum = isDirectSequence ? (lagnaRashi - 1 + i) % 12 + 1 : (lagnaRashi - 1 - i + 120) % 12 + 1;
    const rMeta = RASHI_META_12[rashiNum - 1];
    const { lord, ruleNoteHi } = resolveJaiminiDualLord(rashiNum, report.planets);
    const lordRashi = lord.rashiNumber;
    const durationYears = computeJaiminiCharaDashaYears(rashiNum, lordRashi);
    const spanMs = durationYears * MS_PER_YEAR;
    const startMs = cursorMs;
    const endMs = cursorMs + spanMs;
    cursorMs = endMs;
    const isCurrent = referenceEpochMs >= startMs && referenceEpochMs < endMs;
    const signIsDirect = JAIMINI_VISHAMAPADA_RASHIS.has(rashiNum);
    const antarSpanMs = spanMs / 12;
    const antardashas = [];
    for (let a = 0; a < 12; a++) {
      const aRashi = signIsDirect ? (rashiNum - 1 + a) % 12 + 1 : (rashiNum - 1 - a + 120) % 12 + 1;
      const aStart = startMs + a * antarSpanMs;
      const aEnd = startMs + (a + 1) * antarSpanMs;
      antardashas.push({
        rashiNumber: aRashi,
        rashiNameHi: RASHI_META_12[aRashi - 1].hi,
        durationMonths: durationYears,
        startUtcMs: aStart,
        endUtcMs: aEnd,
        startDateHi: formatUtcDateHi(aStart, tz),
        endDateHi: formatUtcDateHi(aEnd, tz),
        isCurrent: referenceEpochMs >= aStart && referenceEpochMs < aEnd
      });
    }
    charaDasha.push({
      cycle,
      rashiNumber: rashiNum,
      rashiNameHi: rMeta.hi,
      effectiveLordId: lord.id,
      effectiveLordHindi: lord.hindiName,
      lordStrengthRuleNoteHi: ruleNoteHi,
      durationYears,
      startUtcMs: startMs,
      endUtcMs: endMs,
      startDateHi: formatUtcDateHi(startMs, tz),
      endDateHi: formatUtcDateHi(endMs, tz),
      isCurrent,
      antardashas
    });
  }
  let activeMaha = charaDasha.find((c) => c.isCurrent);
  if (!activeMaha) {
    activeMaha = referenceEpochMs < birthMs ? charaDasha[0] : charaDasha[charaDasha.length - 1];
    activeMaha.isCurrent = true;
  }
  const activeAntar = activeMaha.antardashas.find((a) => a.isCurrent) || activeMaha.antardashas[0];
  return {
    sequenceDirectionHi,
    karakas,
    charaDasha,
    activeMahadasha: activeMaha,
    activeAntardasha: activeAntar
  };
}
function getHouseDiff(fromRashi, toRashi) {
  return (toRashi - fromRashi + 12) % 12 + 1;
}
function planetAspectsTargetHouse(aspecter, targetRashi) {
  const diff = getHouseDiff(aspecter.rashiNumber, targetRashi);
  if (diff === 7) return true;
  if (aspecter.id === "mars" && (diff === 4 || diff === 8)) return true;
  if (aspecter.id === "jupiter" && (diff === 5 || diff === 9)) return true;
  if (aspecter.id === "saturn" && (diff === 3 || diff === 10)) return true;
  if ((aspecter.id === "rahu" || aspecter.id === "ketu") && (diff === 5 || diff === 9)) return true;
  return false;
}
function angularDistanceDeg(a, b) {
  const d = Math.abs(normalizeDeg(a) - normalizeDeg(b));
  return d > 180 ? 360 - d : d;
}
function evaluateManglikDosha(planets, lagnaRashi, ageYears) {
  const mars = planets.mars;
  planets.moon;
  const venus = planets.venus;
  const jup = planets.jupiter;
  const sat = planets.saturn;
  const manglikHouses = /* @__PURE__ */ new Set([1, 2, 4, 7, 8, 12]);
  const fromLagna = mars.wholeSignHouse;
  const fromMoon = mars.chandraHouse;
  const fromVenus = getHouseDiff(venus.rashiNumber, mars.rashiNumber);
  const inLagna = manglikHouses.has(fromLagna);
  const inMoon = manglikHouses.has(fromMoon);
  const inVenus = manglikHouses.has(fromVenus);
  const isTriggeredRaw = inLagna || inMoon || inVenus;
  const rulesMatchedHi = [];
  if (inLagna) rulesMatchedHi.push(`लग्न कुंडली से मंगल ${fromLagna}वें भाव (${mars.rashiNameHi}) में`);
  if (inMoon) rulesMatchedHi.push(`चंद्र कुंडली से मंगल ${fromMoon}वें भाव में`);
  if (inVenus) rulesMatchedHi.push(`शुक्र से मंगल ${fromVenus}वें भाव में`);
  const pariharRulesHi = [];
  if (isTriggeredRaw) {
    if (mars.rashiNumber === 1 || mars.rashiNumber === 8 || mars.rashiNumber === 10) {
      pariharRulesHi.push(`मंगल स्वराशि/उच्च (${mars.rashiNameHi}) में होने से कुज दोष भंग`);
    }
    if (fromLagna === 2 && (mars.rashiNumber === 3 || mars.rashiNumber === 6)) {
      pariharRulesHi.push("द्वितीय भाव में बुध की राशि (मिथुन/कन्या) होने से मांगलिक परिहार");
    }
    if (fromLagna === 12 && (mars.rashiNumber === 2 || mars.rashiNumber === 7)) {
      pariharRulesHi.push("द्वादश भाव में शुक्र की राशि (वृषभ/तुला) होने से मांगलिक परिहार");
    }
    if (fromLagna === 4 && (mars.rashiNumber === 1 || mars.rashiNumber === 8)) {
      pariharRulesHi.push("चतुर्थ भाव में मेष/वृश्चिक का मंगल होने से दोष निवृत्ति");
    }
    if (fromLagna === 7 && (mars.rashiNumber === 4 || mars.rashiNumber === 10)) {
      pariharRulesHi.push("सप्तम भाव में कर्क/मकर के मंगल का शास्त्रोक्त परिहार");
    }
    if (fromLagna === 8 && (mars.rashiNumber === 9 || mars.rashiNumber === 12)) {
      pariharRulesHi.push("अष्टम भाव में गुरु की राशि (धनु/मीन) होने से मांगलिक परिहार");
    }
    if (lagnaRashi === 4 || lagnaRashi === 5) {
      pariharRulesHi.push("कर्क/सिंह लग्न में मंगल परम योगकारक होने से दोष समाप्त");
    }
    if (jup.rashiNumber === mars.rashiNumber || planetAspectsTargetHouse(jup, mars.rashiNumber)) {
      pariharRulesHi.push("देवगुरु बृहस्पति की मंगल पर युति/शुभ दृष्टि से प्रबल परिहार");
    }
    if (jup.wholeSignHouse === 1 || venus.wholeSignHouse === 1) {
      pariharRulesHi.push("लग्न में गुरु/शुक्र जैसे नैसर्गिक शुभ ग्रह की स्थिति से दोष शांत");
    }
    if (manglikHouses.has(sat.wholeSignHouse) && inLagna) {
      pariharRulesHi.push(`शनि के ${sat.wholeSignHouse}वें भाव में होने से सम-संतुलन परिहार`);
    }
    if (ageYears >= 28) {
      pariharRulesHi.push("28 वर्ष की आयु के पश्चात् मंगल की उग्रता स्वाभाविक रूप से सौम्य होती है");
    }
  }
  const hasStrongCancellation = pariharRulesHi.length >= 2 || pariharRulesHi.some(
    (r) => r.includes("योगकारक") || r.includes("स्वराशि/उच्च") || r.includes("बृहस्पति की मंगल पर")
  );
  const effectiveStatus = !isTriggeredRaw ? "दोष मुक्त" : !inLagna && (inMoon || inVenus) ? "आंशिक / परिहार युक्त" : hasStrongCancellation ? "आंशिक / परिहार युक्त" : "प्रबल सक्रिय";
  return {
    id: "manglik",
    nameHi: "मांगलिक (कुज) दोष परीक्षण",
    isTriggeredRaw,
    isCancelled: isTriggeredRaw && effectiveStatus !== "प्रबल सक्रिय",
    effectiveStatus,
    subTypeHi: effectiveStatus,
    rulesMatchedHi,
    pariharRulesHi,
    explanationHi: !isTriggeredRaw ? `लग्न, चंद्र और शुक्र तीनों से मंगल ${fromLagna}वें / ${fromMoon}वें / ${fromVenus}वें भाव में होने से कुंडली पूर्णतः अमांगलिक (Non-Manglik) है।` : hasStrongCancellation ? `मंगल की स्थिति (${rulesMatchedHi.join("; ")}) से मांगलिक योग बना, किंतु शास्त्रोक्त परिहार (${pariharRulesHi[0]}) के कारण इसका अनिष्ट प्रभाव निष्प्रभावी/आंशिक हो गया है।` : `${rulesMatchedHi.join("; ")} — इससे सक्रिय मांगलिक दोष बन रहा है। विवाह पूर्व अष्टकूट व द्विपक्षीय मंगल मिलान कराना श्रेयस्कर है।`,
    remedyHi: !isTriggeredRaw ? "मंगल शुभ फलप्रद हैं; मंगलवार को श्री हनुमान चालीसा पाठ ऊर्जा वर्धक रहेगा।" : "मंगलवार को श्री हनुमान जी को सिंदूर व चोला अर्पित करें, सुंदरकांड पाठ करें तथा विवाह से पूर्व कुंडली मिलान अवश्य कराएं।"
  };
}
function evaluateKaalsarpDosha(planets, lagnaRashi) {
  const rahu = planets.rahu;
  const ketu = planets.ketu;
  const sevenIds = ["sun", "moon", "mars", "mercury", "jupiter", "venus", "saturn"];
  const allInRahuToKetu = sevenIds.every(
    (id) => normalizeDeg(planets[id].siderealLonDeg - rahu.siderealLonDeg) < 180
  );
  const allInKetuToRahu = sevenIds.every(
    (id) => normalizeDeg(planets[id].siderealLonDeg - ketu.siderealLonDeg) < 180
  );
  const signDiffRK = (ketu.rashiNumber - rahu.rashiNumber + 12) % 12;
  sevenIds.filter((id) => {
    const d = (planets[id].rashiNumber - rahu.rashiNumber + 12) % 12;
    return d > 0 && d < signDiffRK;
  }).length;
  const exactHemmed = allInRahuToKetu || allInKetuToRahu;
  const KAALSARP_NAMES = {
    1: "अनंत कालसर्प योग",
    2: "कुलिक कालसर्प योग",
    3: "वासुकि कालसर्प योग",
    4: "शंखपाल कालसर्प योग",
    5: "पद्म कालसर्प योग",
    6: "महापद्म कालसर्प योग",
    7: "तक्षक कालसर्प योग",
    8: "कर्कोटक कालसर्प योग",
    9: "शंखचूड़ कालसर्प योग",
    10: "घातक कालसर्प योग",
    11: "विषधर कालसर्प योग",
    12: "शेषनाग कालसर्प योग"
  };
  const kType = KAALSARP_NAMES[rahu.wholeSignHouse] || "कालसर्प योग";
  const rulesMatchedHi = [];
  if (exactHemmed) {
    rulesMatchedHi.push(
      `सभी 7 मुख्य ग्रह ${allInRahuToKetu ? "राहु से केतु" : "केतु से राहु"} अक्ष के एक ही ओर (भाव ${rahu.wholeSignHouse}–${ketu.wholeSignHouse}) स्थित हैं`
    );
  }
  const pariharRulesHi = [];
  if (exactHemmed) {
    const conjoinedAxis = sevenIds.filter(
      (id) => planets[id].rashiNumber === rahu.rashiNumber || planets[id].rashiNumber === ketu.rashiNumber
    );
    if (conjoinedAxis.length > 0) {
      pariharRulesHi.push(
        `राहु/केतु के साथ ${conjoinedAxis.map((id) => planets[id].hindiName).join(", ")} की युति होने से अक्ष भंग (आंशिक)`
      );
    }
    const lagnaOutside = lagnaRashi !== rahu.rashiNumber && lagnaRashi !== ketu.rashiNumber && (allInRahuToKetu && (lagnaRashi - rahu.rashiNumber + 12) % 12 > 6 || allInKetuToRahu && (lagnaRashi - ketu.rashiNumber + 12) % 12 > 6);
    if (lagnaOutside) {
      pariharRulesHi.push("जन्म लग्न राहु-केतु अक्ष के बाहर होने से आंशिक मुक्ति");
    }
    if ([1, 4, 7, 10].includes(planets.jupiter.wholeSignHouse)) {
      pariharRulesHi.push("केंद्र भाव में देवगुरु बृहस्पति की उपस्थिति से दोष की तीव्रता कम");
    }
  }
  const isTriggeredRaw = exactHemmed;
  const effectiveStatus = !isTriggeredRaw ? "दोष मुक्त" : pariharRulesHi.length >= 1 ? "आंशिक / परिहार युक्त" : "प्रबल सक्रिय";
  return {
    id: "kaalsarp",
    nameHi: "कालसर्प योग / दोष परीक्षण",
    isTriggeredRaw,
    isCancelled: isTriggeredRaw && effectiveStatus !== "प्रबल सक्रिय",
    effectiveStatus,
    subTypeHi: isTriggeredRaw ? kType : "कालसर्प योग रहित",
    rulesMatchedHi,
    pariharRulesHi,
    explanationHi: !isTriggeredRaw ? "राहु-केतु अक्ष के दोनों ओर ग्रहों का संतुलित वितरण है — कुंडली कालसर्प दोष से पूर्णतः मुक्त है।" : pariharRulesHi.length > 0 ? `कुंडली में ${kType} (${allInRahuToKetu ? "उदित" : "अनुदित"} गोलार्द्ध) बना है, परंतु ${pariharRulesHi.join("; ")} के कारण यह केवल आंशिक प्रभाव देता है।` : `सभी सातों ग्रह राहु और केतु के मध्य आने से ${kType} निर्मित हुआ है। यह जीवन में बड़े संघर्ष के बाद असाधारण उत्थान भी देता है।`,
    remedyHi: !isTriggeredRaw ? "नागपंचमी या श्रावण मास में भगवान शिव का सामान्य जलाभिषेक कल्याणकारी है।" : "सोमवार/नागपंचमी को भगवान शिव का रुद्राभिषेक करें, महामृत्युंजय मंत्र का जप करें तथा राहु-केतु शांति अनुष्ठान कराएं।"
  };
}
function evaluatePitraDosha(planets, lagnaRashi, shadbala) {
  const sun = planets.sun;
  const moon = planets.moon;
  const rahu = planets.rahu;
  const ketu = planets.ketu;
  const saturn = planets.saturn;
  const jup = planets.jupiter;
  const ninthRashi = (lagnaRashi + 8 - 1) % 12 + 1;
  const ninthLordId = RASHI_META_12[ninthRashi - 1].lordId;
  const ninthLord = planets[ninthLordId];
  const rulesMatchedHi = [];
  if (sun.rashiNumber === rahu.rashiNumber || sun.rashiNumber === ketu.rashiNumber) {
    const node = sun.rashiNumber === rahu.rashiNumber ? "राहु" : "केतु";
    rulesMatchedHi.push(`सूर्य (पितृ कारक) की ${node} के साथ भाव ${sun.wholeSignHouse} में युति`);
  }
  if (sun.rashiNumber === saturn.rashiNumber && angularDistanceDeg(sun.siderealLonDeg, saturn.siderealLonDeg) <= 15) {
    rulesMatchedHi.push(`सूर्य व शनि की घनिष्ठ युति (भाव ${sun.wholeSignHouse})`);
  }
  if (rahu.wholeSignHouse === 9 || ketu.wholeSignHouse === 9) {
    rulesMatchedHi.push(`नवम (पितृ-भाग्य) भाव में ${rahu.wholeSignHouse === 9 ? "राहु" : "केतु"} की स्थिति`);
  }
  if ([6, 8, 12].includes(ninthLord.wholeSignHouse) && (ninthLord.rashiNumber === rahu.rashiNumber || ninthLord.rashiNumber === saturn.rashiNumber)) {
    rulesMatchedHi.push(`नवमेश (${ninthLord.hindiName}) का त्रिक भाव (${ninthLord.wholeSignHouse}) में पाप ग्रह से पीड़ित होना`);
  }
  if (moon.wholeSignHouse === 9 && (moon.rashiNumber === rahu.rashiNumber || moon.rashiNumber === saturn.rashiNumber)) {
    rulesMatchedHi.push("नवम भाव में चंद्र-राहु/शनि का संयोग");
  }
  const isTriggeredRaw = rulesMatchedHi.length > 0;
  const pariharRulesHi = [];
  if (isTriggeredRaw) {
    if (planetAspectsTargetHouse(jup, sun.rashiNumber) || jup.rashiNumber === sun.rashiNumber) {
      pariharRulesHi.push("देवगुरु बृहस्पति की सूर्य पर शुभ दृष्टि/युति से पितृ दोष में शांति");
    }
    if (planetAspectsTargetHouse(jup, ninthRashi) || jup.wholeSignHouse === 9) {
      pariharRulesHi.push("नवम भाव पर बृहस्पति की कृपा दृष्टि से प्रबल परिहार");
    }
    if (shadbala && ninthLordId !== "rahu" && ninthLordId !== "ketu" && shadbala.byId[ninthLordId]?.meetsMinimum) {
      pariharRulesHi.push(`नवमेश ${ninthLord.hindiName} षड्बल में पुष्ट होने से आंशिक निवारण`);
    }
  }
  const effectiveStatus = !isTriggeredRaw ? "दोष मुक्त" : pariharRulesHi.length >= 1 && rulesMatchedHi.length === 1 ? "आंशिक / परिहार युक्त" : "प्रबल सक्रिय";
  return {
    id: "pitra",
    nameHi: "पितृ दोष परीक्षण",
    isTriggeredRaw,
    isCancelled: isTriggeredRaw && effectiveStatus !== "प्रबल सक्रिय",
    effectiveStatus,
    subTypeHi: effectiveStatus,
    rulesMatchedHi,
    pariharRulesHi,
    explanationHi: !isTriggeredRaw ? "सूर्य, नवम भाव व नवमेश राहु-केतु/शनि के गंभीर पीड़ा योग से मुक्त हैं — कुंडली पितृ दोष रहित है।" : `${rulesMatchedHi.join("; ")} के कारण पितृ दोष के संकेत हैं${pariharRulesHi.length ? `, हालांकि ${pariharRulesHi.join("; ")} से राहत मिल रही है` : ""}।`,
    remedyHi: !isTriggeredRaw ? "प्रातः सूर्य अर्घ्य व माता-पिता के चरण-वंदन से भाग्य सदैव प्रबल रहेगा।" : "अमावस्या को पितरों के निमित्त तर्पण, अन्न-वस्त्र दान, पीपल को जल तथा श्रीमद्भागवत गीता के 7वें अध्याय का पाठ करें।"
  };
}
function evaluateGrahanDosha(planets) {
  const sun = planets.sun;
  const moon = planets.moon;
  const rahu = planets.rahu;
  const ketu = planets.ketu;
  const jup = planets.jupiter;
  const rulesMatchedHi = [];
  let minOrb = 99;
  let grahanKind = "";
  if (sun.rashiNumber === rahu.rashiNumber || sun.rashiNumber === ketu.rashiNumber) {
    const node = sun.rashiNumber === rahu.rashiNumber ? rahu : ketu;
    const orb = angularDistanceDeg(sun.siderealLonDeg, node.siderealLonDeg);
    minOrb = Math.min(minOrb, orb);
    grahanKind = `सूर्य-${node.hindiName} ग्रहण योग (${orb.toFixed(1)}° अंतर)`;
    rulesMatchedHi.push(`${sun.rashiNameHi} (भाव ${sun.wholeSignHouse}) में ${grahanKind}`);
  }
  if (moon.rashiNumber === rahu.rashiNumber || moon.rashiNumber === ketu.rashiNumber) {
    const node = moon.rashiNumber === rahu.rashiNumber ? rahu : ketu;
    const orb = angularDistanceDeg(moon.siderealLonDeg, node.siderealLonDeg);
    minOrb = Math.min(minOrb, orb);
    const kind = `चंद्र-${node.hindiName} ग्रहण योग (${orb.toFixed(1)}° अंतर)`;
    grahanKind = grahanKind ? `${grahanKind} व ${kind}` : kind;
    rulesMatchedHi.push(`${moon.rashiNameHi} (भाव ${moon.wholeSignHouse}) में ${kind}`);
  }
  const isTriggeredRaw = rulesMatchedHi.length > 0;
  const pariharRulesHi = [];
  if (isTriggeredRaw) {
    if (minOrb > 12) {
      pariharRulesHi.push(`ग्रह व राहु-केतु के मध्य 12° से अधिक का कोणीय अंतर (${minOrb.toFixed(1)}°) होने से प्रभाव क्षीण`);
    }
    if ((sun.rashiNumber === rahu.rashiNumber || sun.rashiNumber === ketu.rashiNumber) && (planetAspectsTargetHouse(jup, sun.rashiNumber) || jup.rashiNumber === sun.rashiNumber)) {
      pariharRulesHi.push("सूर्य-राहु/केतु युति पर देवगुरु बृहस्पति की शुभ दृष्टि से परिहार");
    }
    if ((moon.rashiNumber === rahu.rashiNumber || moon.rashiNumber === ketu.rashiNumber) && (planetAspectsTargetHouse(jup, moon.rashiNumber) || jup.rashiNumber === moon.rashiNumber)) {
      pariharRulesHi.push("चंद्र-राहु/केतु युति पर बृहस्पति की दृष्टि से मन को संरक्षण");
    }
  }
  const effectiveStatus = !isTriggeredRaw ? "दोष मुक्त" : pariharRulesHi.length > 0 ? "आंशिक / परिहार युक्त" : "प्रबल सक्रिय";
  return {
    id: "grahan",
    nameHi: "ग्रहण दोष (सूर्य / चंद्र ग्रहण योग)",
    isTriggeredRaw,
    isCancelled: isTriggeredRaw && effectiveStatus !== "प्रबल सक्रिय",
    effectiveStatus,
    subTypeHi: grahanKind || "ग्रहण दोष रहित",
    rulesMatchedHi,
    pariharRulesHi,
    explanationHi: !isTriggeredRaw ? "सूर्य और चंद्रमा राहु-केतु के साथ युति में नहीं हैं — कुंडली ग्रहण दोष से पूर्णतः मुक्त है।" : `${rulesMatchedHi.join("; ")} से ग्रहण दोष बन रहा है${pariharRulesHi.length ? `; किंतु ${pariharRulesHi.join("; ")}` : ""}।`,
    remedyHi: !isTriggeredRaw ? "सूर्य व चंद्रमा को नित्य प्रणाम मानसिक व आत्मिक तेज प्रदान करता है।" : "सूर्य ग्रहण दोष हेतु आदित्यहृदय स्तोत्र व गुड़-गेहूं दान; चंद्र ग्रहण दोष हेतु सोमवार को शिव अभिषेक व दुग्ध-चावल दान करें।"
  };
}
function evaluateGuruChandalDosha(planets) {
  const jup = planets.jupiter;
  const rahu = planets.rahu;
  const ketu = planets.ketu;
  const withRahu = jup.rashiNumber === rahu.rashiNumber;
  const withKetu = jup.rashiNumber === ketu.rashiNumber;
  const isTriggeredRaw = withRahu || withKetu;
  const rulesMatchedHi = [];
  const pariharRulesHi = [];
  let subTypeHi = "गुरु चांडाल दोष रहित";
  if (isTriggeredRaw) {
    const node = withRahu ? rahu : ketu;
    const orb = angularDistanceDeg(jup.siderealLonDeg, node.siderealLonDeg);
    subTypeHi = withRahu ? "गुरु-राहु चांडाल योग" : "गुरु-केतु योग (आध्यात्मिक)";
    rulesMatchedHi.push(
      `भाव ${jup.wholeSignHouse} (${jup.rashiNameHi}) में बृहस्पति व ${node.hindiName} की युति (${orb.toFixed(1)}° अंतर)`
    );
    if (jup.rashiNumber === 4 || jup.rashiNumber === 9 || jup.rashiNumber === 12) {
      pariharRulesHi.push(`बृहस्पति स्वराशि/उच्च (${jup.rashiNameHi}) में होने से गुरु चांडाल दोष निष्प्रभावी`);
    }
    if (withKetu) {
      pariharRulesHi.push("गुरु-केतु युति मोक्ष व उच्च अध्यात्म की ओर उन्मुख करती है (अनिष्ट न्यूनतम)");
    }
    if (orb > 12) {
      pariharRulesHi.push(`दोनों ग्रहों में ${orb.toFixed(1)}° का पर्याप्त अंतर होने से प्रभाव आंशिक`);
    }
    if (planetAspectsTargetHouse(planets.venus, jup.rashiNumber) || planets.venus.rashiNumber === jup.rashiNumber) {
      pariharRulesHi.push("शुक्र की शुभ दृष्टि/सहयोग से विवेक संतुलित");
    }
  }
  const effectiveStatus = !isTriggeredRaw ? "दोष मुक्त" : pariharRulesHi.length > 0 ? "आंशिक / परिहार युक्त" : "प्रबल सक्रिय";
  return {
    id: "guru_chandal",
    nameHi: "गुरु चांडाल योग / दोष परीक्षण",
    isTriggeredRaw,
    isCancelled: isTriggeredRaw && effectiveStatus !== "प्रबल सक्रिय",
    effectiveStatus,
    subTypeHi,
    rulesMatchedHi,
    pariharRulesHi,
    explanationHi: !isTriggeredRaw ? "देवगुरु बृहस्पति राहु या केतु के साथ युति में नहीं हैं — गुरु चांडाल दोष नहीं है।" : `${rulesMatchedHi.join("; ")}${pariharRulesHi.length ? ` — परंतु ${pariharRulesHi.join("; ")} के कारण विवेक व ज्ञान सुरक्षित है` : " — निर्णय लेते समय गुरुजनों का परामर्श और सात्विक नियम आवश्यक हैं"}।`,
    remedyHi: !isTriggeredRaw ? "गुरुवार को केसर/हल्दी तिलक और विष्णु सहस्रनाम श्रवण शुभकारी है।" : 'गुरुवार को पीले वस्त्र/चने की दाल का दान करें, गाय को गुड़-रोटी खिलाएं तथा "ॐ बृं बृहस्पतये नमः" का जप करें।'
  };
}
function evaluateClassicalYogas(planets, lagnaRashi, shadbala) {
  const yogas = [];
  const sun = planets.sun;
  const moon = planets.moon;
  const mars = planets.mars;
  const merc = planets.mercury;
  const jup = planets.jupiter;
  const ven = planets.venus;
  const sat = planets.saturn;
  const isKendra = (h) => h === 1 || h === 4 || h === 7 || h === 10;
  const isDusthana = (h) => h === 6 || h === 8 || h === 12;
  const panchaSpecs = [
    {
      id: "ruchaka",
      planet: mars,
      nameHi: "रुचक पंचमहापुरुष राजयोग",
      validRashis: [1, 8, 10],
      descHi: "अदम्य साहस, प्रशासनिक नेतृत्व, भूमि-संपत्ति और शत्रुओं पर विजय प्रदान करने वाला महापुरुष योग।"
    },
    {
      id: "bhadra",
      planet: merc,
      nameHi: "भद्र पंचमहापुरुष राजयोग",
      validRashis: [3, 6],
      descHi: "प्रखर बुद्धि, वाक्-सिद्धि, व्यापारिक कुशलता और उच्च सम्मान दिलाने वाला योग।"
    },
    {
      id: "hamsa",
      planet: jup,
      nameHi: "हंस पंचमहापुरुष राजयोग",
      validRashis: [4, 9, 12],
      descHi: "धर्म, उच्च ज्ञान, नीतिपरायणता, समृद्धि व समाज में पूजनीय प्रतिष्ठा देने वाला योग।"
    },
    {
      id: "malavya",
      planet: ven,
      nameHi: "मालव्य पंचमहापुरुष राजयोग",
      validRashis: [2, 7, 12],
      descHi: "ऐश्वर्य, कला, भव्य वाहन-भवन सुख एवं मधुर दांपत्य जीवन का दाता योग।"
    },
    {
      id: "shasha",
      planet: sat,
      nameHi: "शश पंचमहापुरुष राजयोग",
      validRashis: [7, 10, 11],
      descHi: "दीर्घकालिक अधिकार, जन-नेतृत्व, कर्मठता और अचल संपत्ति का निर्माण करने वाला योग।"
    }
  ];
  for (const spec of panchaSpecs) {
    if (isKendra(spec.planet.wholeSignHouse) && spec.validRashis.includes(spec.planet.rashiNumber)) {
      const cancelled = spec.planet.isCombust;
      yogas.push({
        id: spec.id,
        nameHi: spec.nameHi,
        category: "पंचमहापुरुष",
        strengthLabelHi: cancelled ? "भंग / आंशिक" : "प्रबल योग",
        isCancelled: cancelled,
        sanskritRuleHi: `केंद्र (भाव ${spec.planet.wholeSignHouse}) में ${spec.planet.rashiNameHi} राशिस्थ ${spec.planet.hindiName}`,
        cancellationNoteHi: cancelled ? `${spec.planet.hindiName} सूर्य से अस्त होने के कारण इस महापुरुष योग का फल आंशिक होगा।` : void 0,
        descriptionHi: spec.descHi
      });
    }
  }
  const jupFromMoon = getHouseDiff(moon.rashiNumber, jup.rashiNumber);
  if (isKendra(jupFromMoon)) {
    const jupWeak = jup.rashiNumber === 10 || jup.isCombust;
    yogas.push({
      id: "gajakesari",
      nameHi: "गजकेसरी राजयोग",
      category: "राजयोग",
      strengthLabelHi: jupWeak ? "भंग / आंशिक" : "प्रबल योग",
      isCancelled: jupWeak,
      sanskritRuleHi: `चंद्रमा से ${jupFromMoon}वें (केंद्र) भाव में देवगुरु बृहस्पति`,
      cancellationNoteHi: jupWeak ? "बृहस्पति के नीचस्थ/अस्त होने से गजकेसरी फल मध्यम रहेगा।" : void 0,
      descriptionHi: "सिंह और हाथी के समान तेजस्वी यश, उच्च विवेक, कुलीनता और जीवन में स्थायी मान-प्रतिष्ठा का योग।"
    });
  }
  if (sun.rashiNumber === merc.rashiNumber) {
    const tooClose = angularDistanceDeg(sun.siderealLonDeg, merc.siderealLonDeg) < 3;
    yogas.push({
      id: "budhaditya",
      nameHi: "बुधादित्य राजयोग",
      category: "राजयोग",
      strengthLabelHi: tooClose ? "शुभ योग" : "प्रबल योग",
      sanskritRuleHi: `भाव ${sun.wholeSignHouse} (${sun.rashiNameHi}) में सूर्य एवं बुध की युति`,
      cancellationNoteHi: tooClose ? "बुध सूर्य के अत्यंत निकट (< 3° अस्त) होने से संवाद कौशल में अतिरिक्त प्रयास अपेक्षित।" : void 0,
      descriptionHi: "प्रशासकीय दक्षता, तीव्र स्मरण शक्ति, लेखन एवं उच्च शिक्षा में विशेष सफलता प्रदान करने वाला योग।"
    });
  }
  if (moon.rashiNumber === mars.rashiNumber || getHouseDiff(moon.rashiNumber, mars.rashiNumber) === 7) {
    yogas.push({
      id: "chandra_mangala",
      nameHi: "चंद्र-मंगल धनयोग",
      category: "धनयोग",
      strengthLabelHi: "शुभ योग",
      sanskritRuleHi: moon.rashiNumber === mars.rashiNumber ? `भाव ${moon.wholeSignHouse} में चंद्र-मंगल युति` : `चंद्रमा (भाव ${moon.wholeSignHouse}) व मंगल (भाव ${mars.wholeSignHouse}) में समसप्तक दृष्टि`,
      descriptionHi: "स्व-परिश्रम से धनार्जन, व्यवसायिक सूझबूझ एवं आर्थिक उन्नति दिलाने वाला योग।"
    });
  }
  const rashiLordOfHouse = (h) => planets[RASHI_META_12[(lagnaRashi - 1 + h - 1) % 12].lordId];
  const l9 = rashiLordOfHouse(9);
  const l10 = rashiLordOfHouse(10);
  if (l9.id !== l10.id && (l9.rashiNumber === l10.rashiNumber || planetAspectsTargetHouse(l9, l10.rashiNumber) && planetAspectsTargetHouse(l10, l9.rashiNumber))) {
    yogas.push({
      id: "dharma_karmadhipati",
      nameHi: "धर्म-कर्माधिपति महा-राजयोग",
      category: "राजयोग",
      strengthLabelHi: "प्रबल योग",
      sanskritRuleHi: `नवमेश (${l9.hindiName}) एवं दशमेश (${l10.hindiName}) का शुभ संबंध`,
      descriptionHi: "भाग्य और कर्म के स्वामी का संयोग — जीवन में श्रेष्ठ पद, धर्मनिष्ठ नेतृत्व एवं व्यापक उन्नति का प्रबल कारक।"
    });
  }
  const lagnaLord = rashiLordOfHouse(1);
  const lagnaLordStrong = !isDusthana(lagnaLord.wholeSignHouse) || (shadbala && lagnaLord.id !== "rahu" && lagnaLord.id !== "ketu" ? shadbala.byId[lagnaLord.id]?.meetsMinimum : false);
  for (const h of [6, 8, 12]) {
    const lord = rashiLordOfHouse(h);
    if (isDusthana(lord.wholeSignHouse)) {
      const label = h === 6 ? "हर्ष विपरीत राजयोग" : h === 8 ? "सरल विपरीत राजयोग" : "विमल विपरीत राजयोग";
      yogas.push({
        id: `vipareeta_${h}`,
        nameHi: label,
        category: "विपरीत राजयोग",
        strengthLabelHi: lagnaLordStrong ? "प्रबल योग" : "शुभ योग",
        sanskritRuleHi: `${h}वें भाव के स्वामी ${lord.hindiName} का ${lord.wholeSignHouse}वें (त्रिक) भाव में स्थित होना`,
        cancellationNoteHi: !lagnaLordStrong ? "लग्नेश के बलवर्धन से विपरीत राजयोग का पूर्ण लाभ मिलता है।" : void 0,
        descriptionHi: "प्रारंभिक चुनौतियों व प्रतिस्पर्धा के बाद अचानक बड़े पद, संपत्ति या संकट से विजयी होकर निकलने का विशिष्ट योग।"
      });
    }
  }
  const debiSigns = {
    sun: 7,
    moon: 8,
    mars: 4,
    mercury: 12,
    jupiter: 10,
    venus: 6,
    saturn: 1
  };
  for (const id of ["sun", "moon", "mars", "mercury", "jupiter", "venus", "saturn"]) {
    const p = planets[id];
    if (debiSigns[id] !== p.rashiNumber) continue;
    const signLordId = RASHI_META_12[p.rashiNumber - 1].lordId;
    const signLord = planets[signLordId];
    const exaltLordId = RASHI_META_12[(EXALTATION_RASHI_BY_GRAHA[id] - 1 + 12) % 12].lordId;
    planets[exaltLordId];
    const planetExaltedInThisSignId = Object.entries(EXALTATION_RASHI_BY_GRAHA).find(
      ([, s]) => s === p.rashiNumber
    )?.[0] || signLordId;
    const planetExaltedHere = planets[planetExaltedInThisSignId];
    const reasons = [];
    if (isKendra(signLord.wholeSignHouse) || isKendra(signLord.chandraHouse)) {
      reasons.push(`नीच राशि स्वामी ${signLord.hindiName} लग्न/चंद्र से केंद्र में`);
    }
    if (isKendra(planetExaltedHere.wholeSignHouse) || isKendra(planetExaltedHere.chandraHouse)) {
      reasons.push(`इस राशि में उच्च होने वाले ${planetExaltedHere.hindiName} केंद्र में`);
    }
    if (planetAspectsTargetHouse(signLord, p.rashiNumber) || signLord.rashiNumber === p.rashiNumber) {
      reasons.push(`नीच राशि स्वामी ${signLord.hindiName} की स्वयं ${p.hindiName} पर दृष्टि/युति`);
    }
    if (p.isRetrograde) {
      reasons.push(`${p.hindiName} वक्री होने से चेष्टा बल द्वारा नीचत्व भंग`);
    }
    if (reasons.length > 0) {
      yogas.push({
        id: `neecha_bhanga_${id}`,
        nameHi: `${p.hindiName} नीचभंग राजयोग`,
        category: "नीचभंग",
        strengthLabelHi: reasons.length >= 2 ? "प्रबल योग" : "शुभ योग",
        sanskritRuleHi: `${p.hindiName} (${p.rashiNameHi}) का नीचत्व भंग: ${reasons[0]}`,
        descriptionHi: "प्रारंभिक संघर्ष को पार कर उच्च राजयोग के समान प्रतिष्ठा और जीवन में निर्णायक उत्थान प्रदान करने वाला योग।"
      });
    }
  }
  const prevFromMoon = (moon.rashiNumber - 2 + 12) % 12 + 1;
  const nextFromMoon = moon.rashiNumber % 12 + 1;
  const nonNodeOthers = [sun, mars, merc, jup, ven, sat].filter((g) => g.id !== "sun");
  const hasAdjacent = nonNodeOthers.some(
    (g) => g.rashiNumber === prevFromMoon || g.rashiNumber === nextFromMoon
  );
  if (!hasAdjacent) {
    const anyInKendraFromLagna = [mars, merc, jup, ven, sat].some((g) => isKendra(g.wholeSignHouse));
    const anyInKendraFromMoon = [mars, merc, jup, ven, sat].some((g) => isKendra(g.chandraHouse));
    const jupAspectMoon = planetAspectsTargetHouse(jup, moon.rashiNumber);
    const isBhanga = anyInKendraFromLagna || anyInKendraFromMoon || jupAspectMoon;
    yogas.push({
      id: "kemadruma",
      nameHi: isBhanga ? "केमद्रुम योग (पूर्ण भंग — निष्प्रभावी)" : "केमद्रुम योग (एकाकी चंद्र)",
      category: "दोष-योग (भंग जाँच सहित)",
      strengthLabelHi: isBhanga ? "भंग / आंशिक" : "शुभ योग",
      isCancelled: isBhanga,
      sanskritRuleHi: "चंद्रमा से द्वितीय व द्वादश भाव में (सूर्य व छाया ग्रह अतिरिक्त) कोई ग्रह नहीं",
      cancellationNoteHi: isBhanga ? `केमद्रुम भंग: ${jupAspectMoon ? "चंद्र पर गुरु की शुभ दृष्टि" : "लग्न/चंद्र से केंद्र में ग्रहों की स्थिति"} के कारण केमद्रुम दोष पूर्णतः भंग हो गया है।` : "सोमवार को भगवान शिव के पूजन व चांदी धारण से मनोबल सुदृढ़ रहता है।",
      descriptionHi: isBhanga ? "भंग होने के बाद जातक स्वावलंबी बनकर जीवन में स्वयं के बल पर उच्च सफलता प्राप्त करता है।" : "कभी-कभी अकेलेपन या अतिरिक्त मानसिक संवेदनशीलता की प्रवृत्ति — ध्यान व गुरु-सत्संग अत्यंत लाभकारी।"
    });
  }
  return yogas;
}
function evaluateYogasAndDoshas(report, shadbala, referenceEpochMs = Date.now()) {
  const map = {};
  for (const p of report.planets) {
    map[p.id] = p;
  }
  const ageYears = Math.max(
    0,
    (referenceEpochMs - report.spaceTime.utcEpochMs) / MS_PER_YEAR
  );
  const manglik = evaluateManglikDosha(
    map,
    report.angles.ascendantRashiNumber,
    ageYears
  );
  const kaalsarp = evaluateKaalsarpDosha(map, report.angles.ascendantRashiNumber);
  const pitra = evaluatePitraDosha(
    map,
    report.angles.ascendantRashiNumber,
    shadbala
  );
  const grahan = evaluateGrahanDosha(map);
  const guruChandal = evaluateGuruChandalDosha(map);
  const yogas = evaluateClassicalYogas(
    map,
    report.angles.ascendantRashiNumber,
    shadbala
  );
  return {
    doshas: {
      manglik,
      kaalsarp,
      pitra,
      grahan,
      guruChandal,
      allList: [manglik, kaalsarp, pitra, grahan, guruChandal]
    },
    yogas
  };
}
function getGrahaAspectsToRashiSet(rashiNum, graha) {
  const out = /* @__PURE__ */ new Set([rashiNum]);
  const offsets = graha === "jupiter" ? [5, 7, 9] : [3, 7, 10];
  for (const off of offsets) {
    out.add((rashiNum - 1 + off - 1) % 12 + 1);
  }
  return out;
}
const CLASSICAL_GOCHAR_VEDHA_MATRIX = {
  sun: { favorableHouses: [3, 6, 10, 11], vedhaHouseByFavorable: { 3: 9, 6: 12, 10: 4, 11: 5 } },
  moon: { favorableHouses: [1, 3, 6, 7, 10, 11], vedhaHouseByFavorable: { 1: 5, 3: 9, 6: 12, 7: 2, 10: 4, 11: 8 } },
  mars: { favorableHouses: [3, 6, 11], vedhaHouseByFavorable: { 3: 12, 6: 9, 11: 5 } },
  mercury: { favorableHouses: [2, 4, 6, 8, 10, 11], vedhaHouseByFavorable: { 2: 5, 4: 3, 6: 9, 8: 1, 10: 8, 11: 12 } },
  jupiter: { favorableHouses: [2, 5, 7, 9, 11], vedhaHouseByFavorable: { 2: 12, 5: 4, 7: 3, 9: 10, 11: 8 } },
  venus: { favorableHouses: [1, 2, 3, 4, 5, 8, 9, 11, 12], vedhaHouseByFavorable: { 1: 8, 2: 7, 3: 1, 4: 10, 5: 9, 8: 5, 9: 11, 11: 6, 12: 3 } },
  saturn: { favorableHouses: [3, 6, 11], vedhaHouseByFavorable: { 3: 12, 6: 9, 11: 5 } },
  rahu: { favorableHouses: [3, 6, 11], vedhaHouseByFavorable: { 3: 12, 6: 9, 11: 5 } },
  ketu: { favorableHouses: [3, 6, 11], vedhaHouseByFavorable: { 3: 12, 6: 9, 11: 5 } }
};
function evaluateClassicalGocharVedha(graha, houseFromMoon, houseOccupantsFromMoon) {
  const isExempt = (a, b) => a === b || a === "sun" && b === "saturn" || a === "saturn" && b === "sun" || a === "moon" && b === "mercury" || a === "mercury" && b === "moon";
  const spec = CLASSICAL_GOCHAR_VEDHA_MATRIX[graha];
  const isFavorableRaw = spec.favorableHouses.includes(houseFromMoon);
  const vedhaTargetHouse = isFavorableRaw ? spec.vedhaHouseByFavorable[houseFromMoon] ?? null : null;
  let vedhaBy = [];
  let vipreetVedhaBy = [];
  if (isFavorableRaw && vedhaTargetHouse !== null) {
    vedhaBy = (houseOccupantsFromMoon[vedhaTargetHouse] || []).filter((other) => !isExempt(graha, other));
  } else if (!isFavorableRaw) {
    const obstructors = /* @__PURE__ */ new Set();
    for (const [favStr, vHouse] of Object.entries(spec.vedhaHouseByFavorable)) {
      if (vHouse === houseFromMoon) {
        const invHouse = Number(favStr);
        for (const other of houseOccupantsFromMoon[invHouse] || []) {
          if (!isExempt(graha, other)) obstructors.add(other);
        }
      }
    }
    vipreetVedhaBy = Array.from(obstructors);
  }
  const hasVedha = vedhaBy.length > 0;
  const hasVipreetVedha = vipreetVedhaBy.length > 0;
  return {
    isFavorableRaw,
    vedhaTargetHouse,
    hasVedha,
    vedhaBy,
    hasVipreetVedha,
    vipreetVedhaBy,
    isEffectiveFavorable: isFavorableRaw && !hasVedha
  };
}
function getDynamicLagnaRoleTagHi(graha, lagnaRashi) {
  if (graha === "rahu" || graha === "ketu") return "";
  const ownedHouses = [];
  for (let h = 1; h <= 12; h++) {
    const signNum = (lagnaRashi - 1 + (h - 1)) % 12 + 1;
    if (RASHI_DEFINITIONS[signNum - 1]?.lord === graha) {
      ownedHouses.push(h);
    }
  }
  if (ownedHouses.length === 0) return "";
  const ownsKendra = ownedHouses.some((h) => [4, 7, 10].includes(h));
  const ownsTrikona = ownedHouses.some((h) => [5, 9].includes(h));
  const ownsLagna = ownedHouses.includes(1);
  if (ownsKendra && ownsTrikona) {
    return ` [योगकारक: भाव ${ownedHouses.join(", ")} स्वामी]`;
  }
  if (ownsLagna) {
    return ` [लग्नेश]`;
  }
  if (ownsTrikona) {
    return ` [त्रिकोणेश: भाव ${ownedHouses.join(", ")}]`;
  }
  if (ownedHouses.includes(10)) {
    return ` [कर्मेश (दशमेश)]`;
  }
  if (ownedHouses.includes(4)) {
    return ` [सुखेश (चतुर्थेश)]`;
  }
  if (ownedHouses.every((h) => [6, 8, 12].includes(h))) {
    return ` [भाव ${ownedHouses.join(", ")} स्वामी]`;
  }
  return "";
}
function computeLiveGocharAndTimeline(report, vimshottari, referenceEpochMs = Date.now()) {
  const tz = report.spaceTime.timeZone;
  const moonNatal = report.planets.find((p) => p.id === "moon");
  const lagnaRashi = report.angles.ascendantRashiNumber;
  const snapshot = computeEphemerisSnapshot(referenceEpochMs);
  const relativeToMoon = analyzeRelativeTransits(snapshot, moonNatal.rashiNumber);
  const jupHouseSet = getGrahaAspectsToRashiSet(snapshot.grahas.jupiter.signNumber, "jupiter");
  const satHouseSet = getGrahaAspectsToRashiSet(snapshot.grahas.saturn.signNumber, "saturn");
  const doubleTransitActiveHousesFromLagna = [];
  for (let h = 1; h <= 12; h++) {
    const r = (lagnaRashi - 1 + h - 1) % 12 + 1;
    if (jupHouseSet.has(r) && satHouseSet.has(r)) {
      doubleTransitActiveHousesFromLagna.push(h);
    }
  }
  const doubleTransitSummaryHi = doubleTransitActiveHousesFromLagna.length > 0 ? `वर्तमान में गुरु व शनि का द्वि-गोचर आपकी लग्न कुंडली के ${doubleTransitActiveHousesFromLagna.map((h) => `${h}वें`).join(", ")} भाव को सक्रिय कर रहा है — इन भावों से जुड़े बड़े जीवन-निर्णय गति पकड़ेंगे।` : "वर्तमान में गुरु व शनि भिन्न भावों को सक्रिय कर रहे हैं — क्रमिक व संतुलित प्रगति का समय।";
  const grahaRows = Object.keys(relativeToMoon.transits).map((gid) => {
    const tr = relativeToMoon.transits[gid];
    const houseFromNatalLagna = (tr.graha.signNumber - lagnaRashi + 12) % 12 + 1;
    const vedhaEval = evaluateClassicalGocharVedha(gid, tr.houseFromMoon, relativeToMoon.houseOccupants);
    const vedhaByHi = vedhaEval.vedhaBy.map((vid) => GRAHA_NAMES[vid].shortHi);
    const isNodeOrLuminary = gid === "sun" || gid === "moon" || gid === "rahu" || gid === "ketu";
    const showRetrograde = !isNodeOrLuminary && tr.graha.dailySpeedDeg < 0;
    const showCombust = !isNodeOrLuminary && tr.graha.isCombust;
    const motionTagHi = !isNodeOrLuminary ? showRetrograde ? " (वक्री)" : " (मार्गी)" : "";
    const lagnaRoleNoteHi = getDynamicLagnaRoleTagHi(gid, lagnaRashi);
    let effectSummaryHi = "";
    if (vedhaEval.isEffectiveFavorable) {
      effectSummaryHi = `${tr.graha.nameHi}${motionTagHi}${lagnaRoleNoteHi}: चंद्र से ${tr.houseFromMoon}वें भाव में शुभ वेध-मुक्त गोचर — अनुकूल परिणाम।`;
    } else if (vedhaEval.isFavorableRaw && vedhaEval.hasVedha) {
      effectSummaryHi = `${tr.graha.nameHi}${motionTagHi}${lagnaRoleNoteHi}: चंद्र से ${tr.houseFromMoon}वें भाव का शुभ फल ${vedhaEval.vedhaTargetHouse}वें भाव में स्थित ${vedhaByHi.join(", ")} के वेध से आंशिक बाधित।`;
    } else if (vedhaEval.hasVipreetVedha) {
      effectSummaryHi = `${tr.graha.nameHi}${motionTagHi}${lagnaRoleNoteHi}: विपरीत वेध के कारण चंद्र से ${tr.houseFromMoon}वें भाव की प्रतिकूलता शांत।`;
    } else {
      effectSummaryHi = `${tr.graha.nameHi}${motionTagHi}${lagnaRoleNoteHi}: चंद्र से ${tr.houseFromMoon}वें भाव (लग्न से ${houseFromNatalLagna}वां) में संयम व धैर्य अपेक्षित।`;
    }
    return {
      id: gid,
      nameHi: tr.graha.nameHi,
      currentRashiNumber: tr.graha.signNumber,
      currentRashiNameHi: RASHI_DEFINITIONS[tr.graha.signNumber - 1].nameHi,
      degDMS: tr.graha.degDMS,
      nakshatraNameHi: tr.graha.nakshatraNameHi,
      isRetrograde: showRetrograde,
      isCombust: showCombust,
      dignityHi: tr.graha.dignityHi,
      houseFromNatalMoon: tr.houseFromMoon,
      houseFromNatalLagna,
      isFavorableFromMoon: vedhaEval.isEffectiveFavorable,
      hasVedha: vedhaEval.hasVedha,
      vedhaByHi,
      hasVipreetVedha: vedhaEval.hasVipreetVedha,
      effectSummaryHi
    };
  });
  const ingressDayKey = `${new Date(referenceEpochMs).toISOString().slice(0, 10)}|${tz}`;
  let upcomingMajorIngresses = INGRESS_WINDOW_CACHE.get(ingressDayKey);
  if (!upcomingMajorIngresses) {
    upcomingMajorIngresses = solvePlanetaryIngressesInWindow(
      referenceEpochMs,
      referenceEpochMs + 548 * MS_PER_DAY,
      tz,
      ["jupiter", "saturn", "rahu", "ketu"]
    );
    if (INGRESS_WINDOW_CACHE.size > 24) {
      INGRESS_WINDOW_CACHE.clear();
    }
    INGRESS_WINDOW_CACHE.set(ingressDayKey, upcomingMajorIngresses);
  }
  const liveGochar = {
    computedAtUtc: new Date(referenceEpochMs).toISOString(),
    computedAtDateHi: formatUtcDateHi(referenceEpochMs, tz),
    snapshot,
    relativeToMoon,
    sadeSatiPhase: relativeToMoon.sadeSatiPhase,
    sadeSatiLabelHi: relativeToMoon.sadeSatiLabelHi,
    doubleTransitActiveHousesFromLagna,
    doubleTransitSummaryHi,
    grahaRows,
    upcomingMajorIngresses
  };
  const birthMs = report.spaceTime.utcEpochMs;
  const birthYear = report.spaceTime.year;
  const lifeTimeline = [];
  for (const m of vimshottari.mahadashas) {
    const startAge = Math.max(0, Number(((m.startUtcMs - birthMs) / MS_PER_YEAR).toFixed(1)));
    const endAge = Math.max(startAge, Number(((m.endUtcMs - birthMs) / MS_PER_YEAR).toFixed(1)));
    const focusAreaHi = m.lordId === "venus" ? "विवाह व संबंध" : m.lordId === "saturn" || m.lordId === "sun" ? "करियर व कर्म" : m.lordId === "jupiter" || m.lordId === "mercury" ? "धन व संपत्ति" : m.lordId === "ketu" ? "आध्यात्म व स्वास्थ्य" : "समग्र जीवन";
    lifeTimeline.push({
      id: `maha_${m.lordId}_${Math.round(m.startUtcMs)}`,
      startAge,
      endAge,
      startYear: new Date(m.startUtcMs).getUTCFullYear(),
      endYear: new Date(m.endUtcMs).getUTCFullYear(),
      titleHi: `${m.lordHindi} महादशा (${m.startDateHi} – ${m.endDateHi})`,
      phaseType: "MAHADASHA",
      isCurrent: m.isCurrent,
      focusAreaHi,
      summaryHi: m.effectHi
    });
    if (m.isCurrent) {
      for (const a of m.antardashas) {
        const aStartAge = Math.max(0, Number(((a.startUtcMs - birthMs) / MS_PER_YEAR).toFixed(1)));
        const aEndAge = Math.max(aStartAge, Number(((a.endUtcMs - birthMs) / MS_PER_YEAR).toFixed(1)));
        lifeTimeline.push({
          id: `antar_${m.lordId}_${a.lordId}_${Math.round(a.startUtcMs)}`,
          startAge: aStartAge,
          endAge: aEndAge,
          startYear: new Date(a.startUtcMs).getUTCFullYear(),
          endYear: new Date(a.endUtcMs).getUTCFullYear(),
          titleHi: `${m.lordHindi}–${a.lordHindi} अंतर्दशा (${a.startDateHi} – ${a.endDateHi})`,
          phaseType: "ANTARDASHA",
          isCurrent: a.isCurrent,
          focusAreaHi,
          summaryHi: `${m.lordHindi} महादशा के भीतर ${a.lordHindi} अंतर्दशा का सक्रिय उप-काल।`
        });
      }
    }
  }
  const cyclicNotes = [
    {
      age: 12,
      titleHi: "प्रथम बृहस्पति आवर्तन (Age ~12)",
      summaryHi: "बुद्धि, विद्या और संस्कारों के प्रथम प्रमुख विस्तार का काल।"
    },
    {
      age: 24,
      titleHi: "द्वितीय बृहस्पति आवर्तन (Age ~24)",
      summaryHi: "उच्च शिक्षा समाप्ति, करियर प्रारंभ और जीवन-दिशा के चयन का निर्णायक मोड़।"
    },
    {
      age: 29,
      titleHi: "प्रथम शनि आवर्तन / परिपक्वता काल (Age ~29–30)",
      summaryHi: "जन्म शनि पर गोचर शनि का पुनरागमन — आजीविका व दायित्वों में स्थायित्व का प्रमुख चरण।"
    },
    {
      age: 36,
      titleHi: "तृतीय बृहस्पति व राहु-केतु द्वितीय आवर्तन (Age ~36–37)",
      summaryHi: "व्यावसायिक विस्तार, नेतृत्व और पारिवारिक समृद्धि के शिखर की ओर अग्रसर काल।"
    },
    {
      age: 48,
      titleHi: "चतुर्थ बृहस्पति आवर्तन (Age ~48)",
      summaryHi: "संपत्ति, प्रतिष्ठा और मार्गदर्शक भूमिका में परिपक्वता का चरण।"
    },
    {
      age: 59,
      titleHi: "द्वितीय शनि आवर्तन / षष्ट्यब्द पूर्ति (Age ~59–60)",
      summaryHi: "जीवन के अनुभवों के संकलन, धर्म-सेवा और दीर्घायु मंगल-काल।"
    }
  ];
  const currentAge = Math.max(0, (referenceEpochMs - birthMs) / MS_PER_YEAR);
  for (const cyc of cyclicNotes) {
    lifeTimeline.push({
      id: `cycle_${cyc.age}`,
      startAge: cyc.age,
      endAge: cyc.age + 1,
      startYear: birthYear + cyc.age,
      endYear: birthYear + cyc.age + 1,
      titleHi: cyc.titleHi,
      phaseType: "TRANSIT_MILESTONE",
      isCurrent: Math.abs(currentAge - cyc.age) <= 0.75,
      focusAreaHi: "समग्र जीवन",
      summaryHi: cyc.summaryHi
    });
  }
  lifeTimeline.sort((a, b) => a.startAge - b.startAge);
  return {
    liveGochar,
    lifeTimeline
  };
}
function computeDeepJyotishPhase2(report, shadbala, referenceEpochMs = Date.now()) {
  const vimshottari = computeVimshottariDashaSystem(report, referenceEpochMs);
  const yogini = computeYoginiDashaSystem(report, referenceEpochMs);
  const jaimini = computeJaiminiSystem(report, referenceEpochMs);
  const yogasAndDoshas = evaluateYogasAndDoshas(report, shadbala, referenceEpochMs);
  const { liveGochar, lifeTimeline } = computeLiveGocharAndTimeline(
    report,
    vimshottari,
    referenceEpochMs
  );
  return {
    vimshottari,
    yogini,
    jaimini,
    yogasAndDoshas,
    liveGochar,
    lifeTimeline
  };
}
const RASHI_DATA = [
  { num: 1, name: "मेष (Aries)", lord: "मंगल (Mars)", tatva: "अग्नि (Fire)", varna: "क्षत्रिय", vashya: "चतुष्पद", gemstone: "मूंगा (Red Coral)", uparatna: "लाल हकीक / तांबा", metal: "तांबा या सोना में अनामिका उंगली", rudraksha: "3 मुखी रुद्राक्ष", ishta: "श्री हनुमान जी एवं कार्तिकेय भगवान", mantra: "ॐ अं अंगारकाय नमः", colors: "लाल, सिंदूरी, केसरिया", numbers: "9, 1, 3", days: "मंगलवार, रविवार, गुरुवार", direction: "पूर्व (East)" },
  { num: 2, name: "वृषभ (Taurus)", lord: "शुक्र (Venus)", tatva: "पृथ्वी (Earth)", varna: "वैश्य", vashya: "चतुष्पद", gemstone: "ओपल या हीरा (Opal / Diamond)", uparatna: "सफेद जरकन / स्फटिक", metal: "चांदी या प्लैटिनम में मध्यमा या अनामिका उंगली", rudraksha: "6 मुखी रुद्राक्ष", ishta: "माँ महालक्ष्मी एवं कुलदेवी", mantra: "ॐ शुं शुक्राय नमः", colors: "सफेद, क्रीम, गुलाबी, हल्का नीला", numbers: "6, 5, 8", days: "शुक्रवार, बुधवार, शनिवार", direction: "पश्चिम, आग्नेय एवं उत्तर" },
  { num: 3, name: "मिथुन (Gemini)", lord: "बुध (Mercury)", tatva: "वायु (Air)", varna: "शूद्र", vashya: "द्विपद (मानव)", gemstone: "पन्ना (Emerald)", uparatna: "पेरीडॉट / ओनिक्स (Onyx)", metal: "सोना या चांदी में कनिष्ठा उंगली", rudraksha: "4 मुखी रुद्राक्ष", ishta: "श्री गणेश जी एवं भगवान विष्णु", mantra: "ॐ बुं बुधाय नमः", colors: "हरा, हल्का पीला, सफेद", numbers: "5, 6, 1", days: "बुधवार, शुक्रवार", direction: "उत्तर (North)" },
  { num: 4, name: "कर्क (Cancer)", lord: "चंद्र (Moon)", tatva: "जल (Water)", varna: "ब्राह्मण", vashya: "जलचर", gemstone: "सच्चा मोती (Natural Pearl)", uparatna: "मूनस्टोन (चंद्रमणि)", metal: "चांदी में कनिष्ठा उंगली", rudraksha: "2 मुखी रुद्राक्ष", ishta: "देवाधिदेव महादेव (भगवान शिव)", mantra: "ॐ सों सोमाय नमः", colors: "सफेद, दुधिया, सिल्वर, पीला", numbers: "2, 9, 3, 1", days: "सोमवार, गुरुवार, मंगलवार", direction: "उत्तर-पश्चिम (North-West)" },
  { num: 5, name: "सिंह (Leo)", lord: "सूर्य (Sun)", tatva: "अग्नि (Fire)", varna: "क्षत्रिय", vashya: "वनचर", gemstone: "माणिक्य (Ruby)", uparatna: "गार्नेट / सूर्यकांत मणि", metal: "सोना या तांबा में अनामिका उंगली", rudraksha: "1 मुखी या 12 मुखी रुद्राक्ष", ishta: "भगवान सूर्यनारायण एवं श्री राम", mantra: "ॐ घृणि सूर्याय नमः", colors: "सुनहरा, नारंगी, गहरा लाल", numbers: "1, 9, 3", days: "रविवार, मंगलवार, गुरुवार", direction: "पूर्व (East)" },
  { num: 6, name: "कन्या (Virgo)", lord: "बुध (Mercury)", tatva: "पृथ्वी (Earth)", varna: "वैश्य", vashya: "द्विपद (मानव)", gemstone: "पन्ना (Emerald)", uparatna: "हरा तुरमली / ओनिक्स", metal: "सोना या चांदी में कनिष्ठा उंगली", rudraksha: "4 मुखी रुद्राक्ष", ishta: "श्री सिद्धिविनायक गणेश जी एवं माँ दुर्गा", mantra: "ॐ बुं बुधाय नमः", colors: "हरा, सफेद, पन्ना ग्रीन", numbers: "5, 6, 1", days: "बुधवार, शुक्रवार", direction: "उत्तर (North)" },
  { num: 7, name: "तुला (Libra)", lord: "शुक्र (Venus)", tatva: "वायु (Air)", varna: "शूद्र", vashya: "द्विपद (मानव)", gemstone: "ओपल या हीरा (Opal / Diamond)", uparatna: "स्फटिक / सफेद पुखराज", metal: "चांदी में अनामिका या मध्यमा उंगली", rudraksha: "6 मुखी रुद्राक्ष", ishta: "माँ महालक्ष्मी एवं माँ जगदम्बा", mantra: "ॐ शुं शुक्राय नमः", colors: "सफेद, आसमानी, क्रीम, चमकीला रंग", numbers: "6, 5, 8", days: "शुक्रवार, शनिवार, बुधवार", direction: "पश्चिम, आग्नेय एवं उत्तर" },
  { num: 8, name: "वृश्चिक (Scorpio)", lord: "मंगल (Mars)", tatva: "जल (Water)", varna: "ब्राह्मण", vashya: "कीट", gemstone: "मूंगा (Italian Red Coral)", uparatna: "तिकोना मूंगा / तांबा", metal: "तांबा या सोना में अनामिका उंगली", rudraksha: "3 मुखी रुद्राक्ष", ishta: "श्री संकटमोचन हनुमान जी एवं महादेव", mantra: "ॐ अं अंगारकाय नमः", colors: "लाल, केसरिया, पीला, मैरून", numbers: "9, 1, 3", days: "मंगलवार, गुरुवार, रविवार", direction: "उत्तर एवं पूर्व" },
  { num: 9, name: "धनु (Sagittarius)", lord: "गुरु (Jupiter)", tatva: "अग्नि (Fire)", varna: "क्षत्रिय", vashya: "द्विपद/चतुष्पद", gemstone: "पीला पुखराज (Yellow Sapphire)", uparatna: "सुनहला (Citrine)", metal: "सोना या पीतल में तर्जनी उंगली", rudraksha: "5 मुखी रुद्राक्ष", ishta: "भगवान श्री हरि विष्णु एवं श्री दत्तात्रेय", mantra: "ॐ बृं बृहस्पतये नमः", colors: "पीला, केसरिया, सुनहरा", numbers: "3, 9, 1", days: "गुरुवार, रविवार, मंगलवार", direction: "उत्तर-पूर्व (ईशान कोण)" },
  { num: 10, name: "मकर (Capricorn)", lord: "शनि (Saturn)", tatva: "पृथ्वी (Earth)", varna: "वैश्य", vashya: "जलचर/चतुष्पद", gemstone: "नीलम (Blue Sapphire - परीक्षण पश्चात)", uparatna: "नीली / जामुनिया (Amethyst)", metal: "पंचधातु या चांदी में मध्यमा उंगली", rudraksha: "7 मुखी रुद्राक्ष", ishta: "भगवान शिव एवं शनिदेव / हनुमान जी", mantra: "ॐ शं शनैश्चराय नमः", colors: "नीला, काला, आसमानी, हरा नीला", numbers: "8, 6, 5", days: "शनिवार, शुक्रवार, बुधवार", direction: "पश्चिम (West)" },
  { num: 11, name: "कुंभ (Aquarius)", lord: "शनि (Saturn)", tatva: "वायु (Air)", varna: "शूद्र", vashya: "द्विपद", gemstone: "नीलम (Blue Sapphire - परीक्षण पश्चात)", uparatna: "लाजवर्त / जामुनिया (Amethyst)", metal: "पंचधातु या चांदी में मध्यमा उंगली", rudraksha: "7 मुखी रुद्राक्ष", ishta: "भगवान भोलेनाथ एवं श्री हनुमान जी", mantra: "ॐ शं शनैश्चराय नमः", colors: "गहरा नीला, बैंगनी, सफेद", numbers: "8, 5, 6", days: "शनिवार, शुक्रवार, बुधवार", direction: "पश्चिम (West)" },
  { num: 12, name: "मीन (Pisces)", lord: "गुरु (Jupiter)", tatva: "जल (Water)", varna: "ब्राह्मण", vashya: "जलचर", gemstone: "पीला पुखराज (Yellow Sapphire)", uparatna: "सुनहला (Citrine)", metal: "सोना या अष्टधातु में तर्जनी उंगली", rudraksha: "5 मुखी रुद्राक्ष", ishta: "भगवान श्री लक्ष्मीनारायण एवं गुरुदेव", mantra: "ॐ बृं बृहस्पतये नमः", colors: "पीला, सफेद, केसरिया, सुनहरा पीला", numbers: "3, 9, 1, 2", days: "गुरुवार, सोमवार, मंगलवार", direction: "उत्तर-पूर्व (ईशान कोण)" }
];
const NAKSHATRA_LIST = [
  { name: "अश्विनी (Ashwini)", lord: "केतु (Ketu)", dashaYears: 7, gana: "देव गण", nadi: "आदि नाड़ी", yoni: "अश्व (घोड़ा)" },
  { name: "भरणी (Bharani)", lord: "शुक्र (Venus)", dashaYears: 20, gana: "मनुष्य गण", nadi: "मध्य नाड़ी", yoni: "गज (हाथी)" },
  { name: "कृत्तिका (Krittika)", lord: "सूर्य (Sun)", dashaYears: 6, gana: "राक्षस गण", nadi: "अन्त्य नाड़ी", yoni: "मेष (भेड़)" },
  { name: "रोहिणी (Rohini)", lord: "चंद्र (Moon)", dashaYears: 10, gana: "मनुष्य गण", nadi: "अन्त्य नाड़ी", yoni: "सर्प" },
  { name: "मृगशिरा (Mrigashira)", lord: "मंगल (Mars)", dashaYears: 7, gana: "देव गण", nadi: "मध्य नाड़ी", yoni: "सर्प" },
  { name: "आर्द्रा (Ardra)", lord: "राहु (Rahu)", dashaYears: 18, gana: "मनुष्य गण", nadi: "आदि नाड़ी", yoni: "श्वान" },
  { name: "पुनर्वसु (Punarvasu)", lord: "गुरु (Jupiter)", dashaYears: 16, gana: "देव गण", nadi: "आदि नाड़ी", yoni: "मार्जार" },
  { name: "पुष्य (Pushya)", lord: "शनि (Saturn)", dashaYears: 19, gana: "देव गण", nadi: "मध्य नाड़ी", yoni: "मेष" },
  { name: "आश्लेषा (Ashlesha)", lord: "बुध (Mercury)", dashaYears: 17, gana: "राक्षस गण", nadi: "अन्त्य नाड़ी", yoni: "मार्जार" },
  { name: "मघा (Magha)", lord: "केतु (Ketu)", dashaYears: 7, gana: "राक्षस गण", nadi: "अन्त्य नाड़ी", yoni: "मूषक" },
  { name: "पूर्वाफाल्गुनी (Purva Phalguni)", lord: "शुक्र (Venus)", dashaYears: 20, gana: "मनुष्य गण", nadi: "मध्य नाड़ी", yoni: "मूषक" },
  { name: "उत्तराफाल्गुनी (Uttara Phalguni)", lord: "सूर्य (Sun)", dashaYears: 6, gana: "मनुष्य गण", nadi: "आदि नाड़ी", yoni: "गौ (गाय)" },
  { name: "हस्त (Hasta)", lord: "चंद्र (Moon)", dashaYears: 10, gana: "देव गण", nadi: "आदि नाड़ी", yoni: "महिष" },
  { name: "चित्रा (Chitra)", lord: "मंगल (Mars)", dashaYears: 7, gana: "राक्षस गण", nadi: "मध्य नाड़ी", yoni: "व्याघ्र" },
  { name: "स्वाति (Swati)", lord: "राहु (Rahu)", dashaYears: 18, gana: "देव गण", nadi: "अन्त्य नाड़ी", yoni: "महिष" },
  { name: "विशाखा (Vishakha)", lord: "गुरु (Jupiter)", dashaYears: 16, gana: "राक्षस गण", nadi: "अन्त्य नाड़ी", yoni: "व्याघ्र" },
  { name: "अनुराधा (Anuradha)", lord: "शनि (Saturn)", dashaYears: 19, gana: "देव गण", nadi: "मध्य नाड़ी", yoni: "मृग (हिरण)" },
  { name: "ज्येष्ठा (Jyeshtha)", lord: "बुध (Mercury)", dashaYears: 17, gana: "राक्षस गण", nadi: "आदि नाड़ी", yoni: "मृग" },
  { name: "मूल (Mula)", lord: "केतु (Ketu)", dashaYears: 7, gana: "राक्षस गण", nadi: "आदि नाड़ी", yoni: "श्वान" },
  { name: "पूर्वाषाढ़ा (Purva Ashadha)", lord: "शुक्र (Venus)", dashaYears: 20, gana: "मनुष्य गण", nadi: "मध्य नाड़ी", yoni: "वानर" },
  { name: "उत्तराषाढ़ा (Uttara Ashadha)", lord: "सूर्य (Sun)", dashaYears: 6, gana: "मनुष्य गण", nadi: "अन्त्य नाड़ी", yoni: "नकुल" },
  { name: "श्रवण (Shravana)", lord: "चंद्र (Moon)", dashaYears: 10, gana: "देव गण", nadi: "अन्त्य नाड़ी", yoni: "वानर" },
  { name: "धनिष्ठा (Dhanishta)", lord: "मंगल (Mars)", dashaYears: 7, gana: "राक्षस गण", nadi: "मध्य नाड़ी", yoni: "सिंह" },
  { name: "शतभिषा (Shatabhisha)", lord: "राहु (Rahu)", dashaYears: 18, gana: "राक्षस गण", nadi: "आदि नाड़ी", yoni: "अश्व" },
  { name: "पूर्वाभाद्रपद (Purva Bhadrapada)", lord: "गुरु (Jupiter)", dashaYears: 16, gana: "मनुष्य गण", nadi: "आदि नाड़ी", yoni: "सिंह" },
  { name: "उत्तराभाद्रपद (Uttara Bhadrapada)", lord: "शनि (Saturn)", dashaYears: 19, gana: "मनुष्य गण", nadi: "मध्य नाड़ी", yoni: "गौ (गाय)" },
  { name: "रेवती (Revati)", lord: "बुध (Mercury)", dashaYears: 17, gana: "देव गण", nadi: "अन्त्य नाड़ी", yoni: "गज (हाथी)" }
];
const VIMSHOTTARI_SEQUENCE = [
  { planet: "केतु (Ketu)", years: 7, effect: "आध्यात्मिक झुकाव, गूढ़ ज्ञान, स्थान परिवर्तन एवं अचानक नए अनुभव।" },
  { planet: "शुक्र (Venus)", years: 20, effect: "सुख-सुविधा, वाहन, भूमि, वैवाहिक आनंद, कला एवं आर्थिक समृद्धि का उत्तम काल।" },
  { planet: "सूर्य (Sun)", years: 6, effect: "मान-सम्मान, राजकीय/सरकारी कृपा, नेतृत्व क्षमता एवं आत्मबल में वृद्धि।" },
  { planet: "चंद्र (Moon)", years: 10, effect: "मानसिक शांति, पारिवारिक सुख, माता का आशीर्वाद, यात्राएं एवं जनसंपर्क में विस्तार।" },
  { planet: "मंगल (Mars)", years: 7, effect: "पराक्रम, ऊर्जा, भूमि-भवन लाभ, साहसपूर्ण निर्णय एवं कार्यक्षेत्र में तेजी।" },
  { planet: "राहु (Rahu)", years: 18, effect: "आकस्मिक उन्नति, आधुनिक तकनीक/व्यापार से लाभ, विदेश या दूरस्थ संपर्क एवं महत्वाकांक्षा पूर्ति।" },
  { planet: "गुरु (Jupiter)", years: 16, effect: "ज्ञान, धर्म, संतान सुख, उच्च पद, धन-धान्य एवं समाज में प्रतिष्ठा का स्वर्णिम काल।" },
  { planet: "शनि (Saturn)", years: 19, effect: "कठोर परिश्रम से स्थायी सफलता, न्यायप्रियता, अनुशासन एवं दीर्घकालीन संपत्ति निर्माण।" },
  { planet: "बुध (Mercury)", years: 17, effect: "व्यापारिक कौशल, वाणी का प्रभाव, बौद्धिक सफलता, शिक्षा एवं आर्थिक प्रगति।" }
];
const BHAVA_TITLES = [
  "प्रथम भाव (लग्न / तनु भाव)",
  "द्वितीय भाव (धन एवं कुटुंब भाव)",
  "तृतीय भाव (पराक्रम एवं सहज भाव)",
  "चतुर्थ भाव (सुख, माता, भूमि-वाहन भाव)",
  "पंचम भाव (संतान, विद्या एवं बुद्धि भाव)",
  "षष्ठ भाव (रोग, ऋण एवं शत्रु भाव)",
  "सप्तम भाव (विवाह, जीवनसाथी एवं व्यापार भाव)",
  "अष्टम भाव (आयु, गुप्त ज्ञान एवं आकस्मिक भाव)",
  "नवम भाव (भाग्य, धर्म एवं गुरु भाव)",
  "दशम भाव (कर्म, करियर, पद एवं प्रतिष्ठा भाव)",
  "एकादश भाव (लाभ, आय एवं मनोकामना पूर्ति भाव)",
  "द्वादश भाव (व्यय, विदेश एवं मोक्ष भाव)"
];
const VAAR_NAMES = [
  { name: "रविवार (Sunday)", lord: "सूर्य देव (Sun)" },
  { name: "सोमवार (Monday)", lord: "चंद्र देव (Moon)" },
  { name: "मंगलवार (Tuesday)", lord: "मंगल देव (Mars)" },
  { name: "बुधवार (Wednesday)", lord: "बुध देव (Mercury)" },
  { name: "गुरुवार (Thursday)", lord: "देवगुरु बृहस्पति (Jupiter)" },
  { name: "शुक्रवार (Friday)", lord: "शुक्र देव (Venus)" },
  { name: "शनिवार (Saturday)", lord: "शनि देव (Saturn)" }
];
const TITHI_NAMES = [
  "प्रतिपदा (प्रथमा)",
  "द्वितीया",
  "तृतीया",
  "चतुर्थी",
  "पंचमी",
  "षष्ठी",
  "सप्तमी",
  "अष्टमी",
  "नवमी",
  "दशमी",
  "एकादशी",
  "द्वादशी",
  "त्रयोदशी",
  "चतुर्दशी",
  "पूर्णिमा / अमावस्या"
];
const YOGA_NAMES = [
  "विष्कम्भ योग",
  "प्रीति योग",
  "आयुष्मान योग",
  "सौभाग्य योग",
  "शोभन योग",
  "अतिगण्ड योग",
  "सुकर्मा योग",
  "धृति योग",
  "शूल योग",
  "गण्ड योग",
  "वृद्धि योग",
  "ध्रुव योग",
  "व्याघात योग",
  "हर्षण योग",
  "वज्र योग",
  "सिद्धि योग",
  "व्यतीपात योग",
  "वरियान योग",
  "परिघ योग",
  "शिव योग",
  "सिद्ध योग",
  "साध्य योग",
  "शुभ योग",
  "शुक्ल योग",
  "ब्रह्म योग",
  "इन्द्र योग",
  "वैधृति योग"
];
const DEG2RAD$1 = Math.PI / 180;
const RAD2DEG$1 = 180 / Math.PI;
const safeMod = (n, m) => {
  const num = Number.isFinite(n) ? Math.floor(n) : 0;
  return (num % m + m) % m;
};
const norm360$1 = (deg) => {
  const r = deg % 360;
  return r < 0 ? r + 360 : r;
};
function computeJulianDayIST(year, month, day, hour, minute) {
  const utcHours = hour + minute / 60 - 5.5;
  let y = year;
  let m = month;
  const d = day + utcHours / 24;
  if (m <= 2) {
    y -= 1;
    m += 12;
  }
  const A = Math.floor(y / 100);
  const B = 2 - A + Math.floor(A / 4);
  return Math.floor(365.25 * (y + 4716)) + Math.floor(30.6001 * (m + 1)) + d + B - 1524.5;
}
function getLahiriAyanamsa(jd) {
  const date = new Date((jd - 24405875e-1) * 864e5);
  const tilt = e_tilt(MakeTime(date));
  const T = (jd - 2451545) / 36525;
  const meanLahiri = 23.8570922 + (50.290966 * T + 1.11113 * T * T) / 3600;
  return meanLahiri + tilt.dpsi / 3600;
}
function getTrueRahuTropicalLongitude(jd) {
  const date = new Date((jd - 24405875e-1) * 864e5);
  const tilt = e_tilt(MakeTime(date));
  const T = (jd - 2451545) / 36525;
  const meanNode = norm360$1(125.044555 - 1934.1361849 * T + 20762e-7 * T * T);
  const D = norm360$1(297.8501921 + 445267.1114034 * T) * DEG2RAD$1;
  const M = norm360$1(357.5291092 + 35999.0502909 * T) * DEG2RAD$1;
  const Mp = norm360$1(134.9633964 + 477198.8675055 * T) * DEG2RAD$1;
  const F = norm360$1(93.272095 + 483202.0175233 * T) * DEG2RAD$1;
  const deltaNode = -1.4979 * Math.sin(2 * (D - F)) - 0.15 * Math.sin(M) - 0.1226 * Math.sin(2 * D) + 0.1176 * Math.sin(2 * F) - 0.0801 * Math.sin(2 * (Mp - F));
  return norm360$1(meanNode + deltaNode + tilt.dpsi / 3600);
}
function formatDMS(degWithinSign) {
  const clamped = Math.max(0, Math.min(29.9997, degWithinSign));
  const d = Math.floor(clamped);
  const remMin = (clamped - d) * 60;
  const m = Math.floor(remMin);
  const s = Math.floor((remMin - m) * 60);
  return {
    shortDeg: `${String(d).padStart(2, "0")}° ${String(m).padStart(2, "0")}'`,
    fullDMS: `${String(d).padStart(2, "0")}°${String(m).padStart(2, "0")}'${String(s).padStart(2, "0")}"`,
    degInt: d
  };
}
const BODY_MAP = {
  mercury: Body.Mercury,
  venus: Body.Venus,
  mars: Body.Mars,
  jupiter: Body.Jupiter,
  saturn: Body.Saturn
};
function getGeocentricPlanetState(planetKey, jd) {
  const body = BODY_MAP[planetKey] || Body.Jupiter;
  const epochMs = (jd - 24405875e-1) * 864e5;
  const ONE_HOUR_MS = 36e5;
  const t0 = MakeTime(new Date(epochMs));
  const geo0 = GeoVector(body, t0, true);
  const ect0 = RotateVector(Rotation_EQJ_ECT(t0), geo0);
  const lon0 = norm360$1(Math.atan2(ect0.y, ect0.x) * 180 / Math.PI);
  const t1 = MakeTime(new Date(epochMs + ONE_HOUR_MS));
  const geo1 = GeoVector(body, t1, true);
  const ect1 = RotateVector(Rotation_EQJ_ECT(t1), geo1);
  const lon1 = norm360$1(Math.atan2(ect1.y, ect1.x) * 180 / Math.PI);
  let delta1h = lon1 - lon0;
  if (delta1h > 180) delta1h -= 360;
  if (delta1h < -180) delta1h += 360;
  const dailySpeedDeg = delta1h * 24;
  const isRetrograde = delta1h < 0;
  return {
    tropicalLon: lon0,
    isRetrograde,
    dailySpeedDeg
  };
}
function computeNavamsaRashi(siderealLon) {
  const normLon = norm360$1(siderealLon);
  const rashiNum = safeMod(Math.floor(normLon / 30), 12) + 1;
  const degInRashi = normLon % 30;
  const navIdx = Math.floor(degInRashi / (30 / 9));
  let baseStartSign = 1;
  if ([1, 5, 9].includes(rashiNum)) baseStartSign = 1;
  else if ([2, 6, 10].includes(rashiNum)) baseStartSign = 10;
  else if ([3, 7, 11].includes(rashiNum)) baseStartSign = 7;
  else if ([4, 8, 12].includes(rashiNum)) baseStartSign = 4;
  return safeMod(baseStartSign - 1 + navIdx, 12) + 1;
}
function computeShodashavargaCharts(lagnaSiderealLon, planets) {
  const divisions = [
    { id: "D1", name: "D-1 (लग्न कुंडली — देह व मूल स्वरूप)", sanskritName: "लग्न (Lagna)", signification: "सम्पूर्ण व्यक्तित्व, स्वरूप एवं जीवन दिशा" },
    { id: "D2", name: "D-2 (होरा चक्र — धन एवं संपत्ति)", sanskritName: "होरा (Hora)", signification: "संचित धन, आर्थिक वैभव एवं समृद्ध स्थिति" },
    { id: "D3", name: "D-3 (द्रेष्काण चक्र — भ्रातृ व पराक्रम)", sanskritName: "द्रेष्काण (Drekkana)", signification: "सहज भाव, भाई-बहन, साहस व पुरुषार्थ" },
    { id: "D4", name: "D-4 (चतुर्थांश चक्र — भाग्य व अचल संपत्ति)", sanskritName: "चतुर्थांश (Chaturthamsha)", signification: "भूमि, भवन, अचल संपत्ति एवं भाग्य वृद्धि" },
    { id: "D7", name: "D-7 (सप्तमांश चक्र — संतान व वंश)", sanskritName: "सप्तमांश (Saptamsha)", signification: "संतान सुख, वंश वृद्धि एवं भावी पीढ़ी" },
    { id: "D9", name: "D-9 (नवमांश चक्र — विवाह व धर्म)", sanskritName: "नवमांश (Navamsha)", signification: "दांपत्य सुख, विवाह, जीवनसाथी व धर्म" },
    { id: "D10", name: "D-10 (दशमांश चक्र — आजीविका व प्रतिष्ठा)", sanskritName: "दशमांश (Dasamsha)", signification: "करियर, पद-प्रतिष्ठा, व्यापार व कर्मक्षेत्र" },
    { id: "D12", name: "D-12 (द्वादशांश चक्र — माता-पिता व पितृकुल)", sanskritName: "द्वादशांश (Dwadasamsha)", signification: "माता-पिता का सुख, पितृ ऋण व वंशावली" },
    { id: "D16", name: "D-16 (षोडशांश चक्र — वाहन व सुख)", sanskritName: "षोडशांश (Shodasamsha)", signification: "वाहन सुख, यात्राएं, मानसिक शांति व आनंद" },
    { id: "D20", name: "D-20 (विमशांश चक्र — उपासना व साधना)", sanskritName: "विमशांश (Vimshamsha)", signification: "आध्यात्मिक प्रगति, भक्ति, जप व इष्ट साधना" },
    { id: "D24", name: "D-24 (सिद्धांश चक्र — विद्या व ज्ञान)", sanskritName: "सिद्धांश (Siddhamsha)", signification: "उच्च शिक्षा, शोध, प्रज्ञा एवं बौद्धिक सिद्धि" },
    { id: "D27", name: "D-27 (सप्तविंशांश चक्र — शारीरिक बल)", sanskritName: "सप्तविंशांश (Saptavamshamsha)", signification: "शारीरिक क्षमता, प्रतिरक्षा बल एवं आरोग्य" },
    { id: "D30", name: "D-30 (त्रिंशांश चक्र — अरिष्ट व दोष)", sanskritName: "त्रिंशांश (Trimshamsha)", signification: "रोग, संकट, अदृश्य बाधाएं व पाप प्रभाव" },
    { id: "D40", name: "D-40 (खवेदांश चक्र — शुभ प्रभाव)", sanskritName: "खवेदांश (Khavedamsha)", signification: "अशुभ फलों का शमन एवं समग्र शुभता" },
    { id: "D45", name: "D-45 (अक्षवेदांश चक्र — चरित्र व धर्म)", sanskritName: "अक्षवेदांश (Akshavedamsha)", signification: "जातक की चरित्र शुद्धि, नैतिक बल व पवित्रता" },
    { id: "D60", name: "D-60 (षष्ट्यंश चक्र — संचित पूर्वकर्म)", sanskritName: "षष्ट्यंश (Shashtiamsha)", signification: "पूर्व जन्मों के संचित कर्म फल का सूक्ष्म रूप" }
  ];
  const getDivisionalRashi = (dId, lon) => {
    const norm = norm360$1(lon);
    const baseRashi = Math.floor(norm / 30) + 1;
    const deg = norm % 30;
    switch (dId) {
      case "D1":
        return baseRashi;
      case "D2": {
        const isOdd = baseRashi % 2 !== 0;
        if (isOdd) return deg < 15 ? 5 : 4;
        return deg < 15 ? 4 : 5;
      }
      case "D3": {
        const seg = Math.floor(deg / 10);
        return safeMod(baseRashi + seg * 4 - 1, 12) + 1;
      }
      case "D4": {
        const seg = Math.floor(deg / 7.5);
        return safeMod(baseRashi + seg * 3 - 1, 12) + 1;
      }
      case "D7": {
        const seg = Math.floor(deg / (30 / 7));
        const start = baseRashi % 2 !== 0 ? baseRashi : safeMod(baseRashi + 6 - 1, 12) + 1;
        return safeMod(start + seg - 1, 12) + 1;
      }
      case "D9": {
        const seg = Math.floor(deg / (30 / 9));
        let start = 1;
        if ([1, 5, 9].includes(baseRashi)) start = 1;
        else if ([2, 6, 10].includes(baseRashi)) start = 10;
        else if ([3, 7, 11].includes(baseRashi)) start = 7;
        else start = 4;
        return safeMod(start + seg - 1, 12) + 1;
      }
      case "D10": {
        const seg = Math.floor(deg / 3);
        const start = baseRashi % 2 !== 0 ? baseRashi : safeMod(baseRashi + 8 - 1, 12) + 1;
        return safeMod(start + seg - 1, 12) + 1;
      }
      case "D12": {
        const seg = Math.floor(deg / 2.5);
        return safeMod(baseRashi + seg - 1, 12) + 1;
      }
      case "D16": {
        const seg = Math.floor(deg / (30 / 16));
        let start = 1;
        if ([1, 4, 7, 10].includes(baseRashi)) start = 1;
        else if ([2, 5, 8, 11].includes(baseRashi)) start = 5;
        else start = 9;
        return safeMod(start + seg - 1, 12) + 1;
      }
      case "D20": {
        const seg = Math.floor(deg / 1.5);
        let start = 1;
        if ([1, 4, 7, 10].includes(baseRashi)) start = 1;
        else if ([2, 5, 8, 11].includes(baseRashi)) start = 9;
        else start = 5;
        return safeMod(start + seg - 1, 12) + 1;
      }
      case "D24": {
        const seg = Math.floor(deg / 1.25);
        const start = baseRashi % 2 !== 0 ? 5 : 4;
        return safeMod(start + seg - 1, 12) + 1;
      }
      case "D27": {
        const seg = Math.floor(deg / (30 / 27));
        let start = 1;
        if ([1, 5, 9].includes(baseRashi)) start = 1;
        else if ([2, 6, 10].includes(baseRashi)) start = 4;
        else if ([3, 7, 11].includes(baseRashi)) start = 7;
        else start = 10;
        return safeMod(start + seg - 1, 12) + 1;
      }
      case "D30": {
        if (baseRashi % 2 !== 0) {
          if (deg < 5) return 1;
          if (deg < 10) return 11;
          if (deg < 18) return 9;
          if (deg < 25) return 3;
          return 7;
        } else {
          if (deg < 5) return 2;
          if (deg < 12) return 6;
          if (deg < 20) return 12;
          if (deg < 25) return 10;
          return 8;
        }
      }
      case "D40": {
        const seg = Math.floor(deg / 0.75);
        const start = baseRashi % 2 !== 0 ? 1 : 7;
        return safeMod(start + seg - 1, 12) + 1;
      }
      case "D45": {
        const seg = Math.floor(deg / (30 / 45));
        let start = 1;
        if ([1, 4, 7, 10].includes(baseRashi)) start = 1;
        else if ([2, 5, 8, 11].includes(baseRashi)) start = 5;
        else start = 9;
        return safeMod(start + seg - 1, 12) + 1;
      }
      case "D60": {
        const seg = Math.floor(deg / 0.5);
        return safeMod(baseRashi + seg - 1, 12) + 1;
      }
      default:
        return baseRashi;
    }
  };
  return divisions.map((div) => {
    const divLagnaRashi = getDivisionalRashi(div.id, lagnaSiderealLon);
    const divHouses = Array.from({ length: 12 }, (_, idx) => {
      const houseNum = idx + 1;
      const rashiNum = safeMod(divLagnaRashi + idx - 1, 12) + 1;
      const rData = RASHI_DATA[rashiNum - 1];
      const divPlanets = planets.filter((pl) => getDivisionalRashi(div.id, pl.siderealLon) === rashiNum).map((pl) => ({
        shortHindi: pl.shortHindi,
        chartLabel: pl.chartLabel,
        degInt: pl.degInt,
        hindiName: pl.hindiName,
        degree: pl.degree,
        fullDegreeDMS: pl.fullDegreeDMS,
        statusBadge: pl.statusBadge
      }));
      return {
        houseNumber: houseNum,
        bhavaTitle: BHAVA_TITLES[idx],
        rashiNumber: rashiNum,
        rashiName: rData.name,
        planets: divPlanets
      };
    });
    return {
      id: div.id,
      name: div.name,
      sanskritName: div.sanskritName,
      signification: div.signification,
      houses: divHouses
    };
  });
}
const KP_LORD_ORDER = ["केतु", "शुक्र", "सूर्य", "चंद्र", "मंगल", "राहु", "गुरु", "शनि", "बुध"];
const KP_LORD_YEARS = {
  केतु: 7,
  शुक्र: 20,
  सूर्य: 6,
  चंद्र: 10,
  चन्द्र: 10,
  मंगल: 7,
  राहु: 18,
  गुरु: 16,
  शनि: 19,
  बुध: 17
};
function getKPStarAndSubLords(lon) {
  const norm = norm360$1(lon);
  const totalMin = norm * 60;
  const nakIdx = Math.floor(totalMin / 800);
  const remMinInNak = totalMin % 800;
  const nakObj = NAKSHATRA_LIST[safeMod(nakIdx, 27)];
  const starLord = nakObj.lord.split(" ")[0].replace("चन्द्र", "चंद्र");
  const startIdx = Math.max(0, KP_LORD_ORDER.indexOf(starLord));
  let cursorMin = 0;
  let subLord = starLord;
  let subSubLord = starLord;
  for (let i = 0; i < 9; i++) {
    const candidate = KP_LORD_ORDER[safeMod(startIdx + i, 9)];
    const span = 800 * (KP_LORD_YEARS[candidate] || 10) / 120;
    if (remMinInNak >= cursorMin && remMinInNak < cursorMin + span) {
      subLord = candidate;
      const subRemMin = remMinInNak - cursorMin;
      const subStartIdx = Math.max(0, KP_LORD_ORDER.indexOf(subLord));
      let subCursor = 0;
      for (let j = 0; j < 9; j++) {
        const subCandidate = KP_LORD_ORDER[safeMod(subStartIdx + j, 9)];
        const subSubSpan = span * (KP_LORD_YEARS[subCandidate] || 10) / 120;
        if (subRemMin >= subCursor && subRemMin < subCursor + subSubSpan) {
          subSubLord = subCandidate;
          break;
        }
        subCursor += subSubSpan;
      }
      break;
    }
    cursorMin += span;
  }
  const rashiNum = Math.floor(norm / 30) + 1;
  const rData = RASHI_DATA[rashiNum - 1];
  return {
    rashiName: rData.name,
    signLord: rData.lord.split(" ")[0],
    starLord,
    subLord,
    subSubLord
  };
}
function computeKPSystemData(lagnaLon, planets, ayanamsaDMS, jd, lonDeg = 79.4, ayanamsaDeg = 24.21) {
  let mcSidereal = norm360$1(lagnaLon + 270);
  if (typeof jd === "number" && Number.isFinite(jd)) {
    const date = new Date((jd - 24405875e-1) * 864e5);
    const gastDeg = SiderealTime(date) * 15;
    const tilt = e_tilt(MakeTime(date));
    const ramc = norm360$1(gastDeg + lonDeg) * DEG2RAD$1;
    const eps = tilt.tobl * DEG2RAD$1;
    const tropicalMC = norm360$1(Math.atan2(Math.sin(ramc), Math.cos(ramc) * Math.cos(eps)) * RAD2DEG$1);
    mcSidereal = norm360$1(tropicalMC - ayanamsaDeg);
  } else {
    const obliqAdjust = -3.45 * Math.sin(lagnaLon * 2 * DEG2RAD$1);
    mcSidereal = norm360$1(lagnaLon + 270 + obliqAdjust);
  }
  const icSidereal = norm360$1(mcSidereal + 180);
  const descSidereal = norm360$1(lagnaLon + 180);
  const arcQ1 = norm360$1(icSidereal - lagnaLon);
  const arcQ2 = norm360$1(descSidereal - icSidereal);
  const arcQ3 = norm360$1(mcSidereal - descSidereal);
  const arcQ4 = norm360$1(lagnaLon - mcSidereal);
  const cuspLongitudes = [
    lagnaLon,
    // 1
    norm360$1(lagnaLon + arcQ1 / 3),
    // 2
    norm360$1(lagnaLon + 2 * arcQ1 / 3),
    // 3
    icSidereal,
    // 4
    norm360$1(icSidereal + arcQ2 / 3),
    // 5
    norm360$1(icSidereal + 2 * arcQ2 / 3),
    // 6
    descSidereal,
    // 7
    norm360$1(descSidereal + arcQ3 / 3),
    // 8
    norm360$1(descSidereal + 2 * arcQ3 / 3),
    // 9
    mcSidereal,
    // 10
    norm360$1(mcSidereal + arcQ4 / 3),
    // 11
    norm360$1(mcSidereal + 2 * arcQ4 / 3)
    // 12
  ];
  const cusps = cuspLongitudes.map((cuspLon, idx) => {
    const dms = formatDMS(cuspLon % 30);
    const kpInfo = getKPStarAndSubLords(cuspLon);
    return {
      houseNumber: idx + 1,
      cuspDegreeDMS: dms.fullDMS,
      rashiName: kpInfo.rashiName,
      signLord: kpInfo.signLord,
      starLord: kpInfo.starLord,
      subLord: kpInfo.subLord
    };
  });
  const kpPlanets = planets.map((pl) => {
    const kpInfo = getKPStarAndSubLords(pl.siderealLon);
    return {
      planet: pl.hindiName,
      symbol: pl.symbol,
      degreeDMS: pl.fullDegreeDMS,
      rashiName: pl.rashiName,
      signLord: kpInfo.signLord,
      starLord: kpInfo.starLord,
      subLord: kpInfo.subLord,
      subSubLord: kpInfo.subSubLord
    };
  });
  return {
    kpAyanamsa: ayanamsaDMS,
    cusps,
    planets: kpPlanets
  };
}
const BPHS_ASHTAKAVARGA_RULES = {
  // Sun Bhinnashtakavarga = 48 Bindus (8+4+8+7+4+3+8+6)
  सूर्य: {
    sun: [1, 2, 4, 7, 8, 9, 10, 11],
    moon: [3, 6, 10, 11],
    mars: [1, 2, 4, 7, 8, 9, 10, 11],
    mercury: [3, 5, 6, 9, 10, 11, 12],
    jupiter: [5, 6, 9, 11],
    venus: [6, 7, 12],
    saturn: [1, 2, 4, 7, 8, 9, 10, 11],
    lagna: [3, 4, 6, 10, 11, 12]
  },
  // Moon Bhinnashtakavarga = 49 Bindus (6+6+7+8+7+7+4+4)
  चंद्र: {
    sun: [3, 6, 7, 8, 10, 11],
    moon: [1, 3, 6, 7, 10, 11],
    mars: [2, 3, 5, 6, 9, 10, 11],
    mercury: [1, 3, 4, 5, 7, 8, 10, 11],
    jupiter: [1, 4, 7, 8, 10, 11, 12],
    venus: [3, 4, 5, 7, 9, 10, 11],
    saturn: [3, 5, 6, 11],
    lagna: [3, 6, 10, 11]
  },
  // Mars Bhinnashtakavarga = 39 Bindus (5+3+7+4+4+4+7+5)
  मंगल: {
    sun: [3, 5, 6, 10, 11],
    moon: [3, 6, 11],
    mars: [1, 2, 4, 7, 8, 10, 11],
    mercury: [3, 5, 6, 11],
    jupiter: [6, 10, 11, 12],
    venus: [6, 8, 11, 12],
    saturn: [1, 4, 7, 8, 9, 10, 11],
    lagna: [1, 3, 6, 10, 11]
  },
  // Mercury Bhinnashtakavarga = 54 Bindus (5+6+8+8+4+8+8+7)
  बुध: {
    sun: [5, 6, 9, 11, 12],
    moon: [2, 4, 6, 8, 10, 11],
    mars: [1, 2, 4, 7, 8, 9, 10, 11],
    mercury: [1, 3, 5, 6, 9, 10, 11, 12],
    jupiter: [6, 8, 11, 12],
    venus: [1, 2, 3, 4, 5, 8, 9, 11],
    saturn: [1, 2, 4, 7, 8, 9, 10, 11],
    lagna: [1, 2, 4, 6, 8, 10, 11]
  },
  // Jupiter Bhinnashtakavarga = 56 Bindus (9+5+7+8+8+6+4+9)
  गुरु: {
    sun: [1, 2, 3, 4, 7, 8, 9, 10, 11],
    moon: [2, 5, 7, 9, 11],
    mars: [1, 2, 4, 7, 8, 10, 11],
    mercury: [1, 2, 4, 5, 6, 9, 10, 11],
    jupiter: [1, 2, 3, 4, 7, 8, 10, 11],
    venus: [2, 5, 6, 9, 10, 11],
    saturn: [3, 5, 6, 12],
    lagna: [1, 2, 4, 5, 6, 7, 9, 10, 11]
  },
  // Venus Bhinnashtakavarga = 52 Bindus (3+9+6+5+5+9+7+8)
  शुक्र: {
    sun: [8, 11, 12],
    moon: [1, 2, 3, 4, 5, 8, 9, 11, 12],
    mars: [3, 5, 6, 9, 11, 12],
    mercury: [3, 5, 6, 9, 11],
    jupiter: [5, 8, 9, 10, 11],
    venus: [1, 2, 3, 4, 5, 8, 9, 10, 11],
    saturn: [3, 4, 5, 8, 9, 10, 11],
    lagna: [1, 2, 3, 4, 5, 8, 9, 11]
  },
  // Saturn Bhinnashtakavarga = 39 Bindus (7+3+6+6+4+3+4+6)
  शनि: {
    sun: [1, 2, 4, 7, 8, 10, 11],
    moon: [3, 6, 11],
    mars: [3, 5, 6, 10, 11, 12],
    mercury: [6, 8, 9, 10, 11, 12],
    jupiter: [5, 6, 11, 12],
    venus: [6, 11, 12],
    saturn: [3, 5, 6, 11],
    lagna: [1, 3, 4, 6, 10, 11]
  }
};
function computeAshtakavargaData(lagnaLon, planets) {
  const lagnaRashi = safeMod(Math.floor(norm360$1(lagnaLon) / 30), 12) + 1;
  const getContributorRashi = (id) => {
    if (id === "lagna") return lagnaRashi;
    const found = planets.find((p) => p.id === id);
    return found ? found.rashiNumber : lagnaRashi;
  };
  const adjusted = {};
  for (const [bavPlanetKey, contribMap] of Object.entries(BPHS_ASHTAKAVARGA_RULES)) {
    const bindusIn12Rashis = new Array(12).fill(0);
    for (const [contribId, beneficHouses] of Object.entries(contribMap)) {
      const refRashi = getContributorRashi(contribId);
      for (const h of beneficHouses) {
        const targetRashiIdx = safeMod(refRashi - 1 + (h - 1), 12);
        bindusIn12Rashis[targetRashiIdx] += 1;
      }
    }
    adjusted[bavPlanetKey] = bindusIn12Rashis;
  }
  const sarvashtakavarga = Array.from({ length: 12 }, (_, rIdx) => {
    let sum = 0;
    for (const key of Object.keys(adjusted)) {
      sum += adjusted[key][rIdx];
    }
    return sum;
  });
  const totalSum = sarvashtakavarga.reduce((a, b) => a + b, 0);
  const strongestRashis = [];
  const weakestRashis = [];
  sarvashtakavarga.forEach((val, idx) => {
    const rName = RASHI_DATA[idx].name.split(" ")[0];
    if (val >= 28) {
      strongestRashis.push(`${rName} (${val} बिंदु)`);
    } else {
      weakestRashis.push(`${rName} (${val} बिंदु)`);
    }
  });
  if (weakestRashis.length === 0) {
    const sorted = sarvashtakavarga.map((val, idx) => ({ val, rName: RASHI_DATA[idx].name.split(" ")[0] })).sort((a, b) => a.val - b.val).slice(0, 3);
    sorted.forEach((item) => weakestRashis.push(`${item.rName} (${item.val} बिंदु - सापेक्ष मध्यम)`));
  }
  const lagnaRashiIndex = safeMod(lagnaRashi - 1, 12);
  const bhavaSarvashtakavarga = Array.from(
    { length: 12 },
    (_, houseIdx) => sarvashtakavarga[(lagnaRashiIndex + houseIdx) % 12]
  );
  return {
    planetBindus: adjusted,
    sarvashtakavarga,
    bhavaSarvashtakavarga,
    totalBindusSum: totalSum,
    strongestRashis,
    weakestRashis
  };
}
const JAIMINI_RASHI_LORD_ID = {
  1: "mars",
  2: "venus",
  3: "mercury",
  4: "moon",
  5: "sun",
  6: "mercury",
  7: "venus",
  8: "mars",
  9: "jupiter",
  10: "saturn",
  11: "saturn",
  12: "jupiter"
};
const JAIMINI_VISHAMA_RASHIS = [1, 2, 3, 7, 8, 9];
function computeJaiminiData(lagnaRashiNum, planets, birthYear) {
  const sevenPlanets = planets.filter((p) => !["rahu", "ketu"].includes(p.id)).slice().sort((a, b) => {
    const degA = norm360$1(a.siderealLon) % 30;
    const degB = norm360$1(b.siderealLon) % 30;
    return degB - degA;
  });
  const karakaDefs = [
    { code: "AK", name: "Atmakaraka (AK)", sig: "आत्मा, देह, मुख्य व्यक्तित्व एवं जीवन का सर्वोच्च उद्देश्य" },
    { code: "AmK", name: "Amatyakaraka (AmK)", sig: "करियर, आजीविका, बुद्धि, विचारशक्ति एवं सामाजिक पद" },
    { code: "BK", name: "Bhratrukaraka (BK)", sig: "भाई-बहन, साहस, पराक्रम एवं गुरुजन" },
    { code: "MK", name: "Matrukaraka (MK)", sig: "माता, भूमि, भवन, वाहन सुख एवं आंतरिक शांति" },
    { code: "PK", name: "Putrakaraka (PK)", sig: "संतान, उच्च विद्या, मंत्र शक्ति एवं प्रज्ञा" },
    { code: "GK", name: "Gnatikaraka (GK)", sig: "प्रतिस्पर्धा, रोग, ऋण, शत्रु एवं जीवन की चुनौतियां" },
    { code: "DK", name: "Darakaraka (DK)", sig: "जीवनसाथी, विवाह, दांपत्य सुख एवं व्यापारिक साझेदार" }
  ];
  const karakas = sevenPlanets.map((pl, idx) => {
    const def = karakaDefs[idx] || karakaDefs[6];
    return {
      karakaCode: def.code,
      karakaName: def.name,
      planetHindi: pl.hindiName,
      planetEnglish: pl.name,
      degreeInRashi: pl.degree,
      signification: def.sig
    };
  });
  const ninthRashi = safeMod(lagnaRashiNum + 8 - 1, 12) + 1;
  const isDirectSequence = JAIMINI_VISHAMA_RASHIS.includes(ninthRashi);
  const charDasha = [];
  let currentStartYear = birthYear;
  const currentYearNow = getISTCalendarParts(/* @__PURE__ */ new Date()).year;
  const resolveFallbackDualLord = (rashiNum) => {
    if (rashiNum !== 8 && rashiNum !== 11) {
      return planets.find((p) => p.id === (JAIMINI_RASHI_LORD_ID[rashiNum] || "jupiter"));
    }
    const lordA = planets.find((p) => p.id === (rashiNum === 8 ? "mars" : "saturn"));
    const lordB = planets.find((p) => p.id === (rashiNum === 8 ? "ketu" : "rahu"));
    if (!lordA) return lordB;
    if (!lordB) return lordA;
    const cA = planets.filter((p) => p.rashiNumber === lordA.rashiNumber && p.id !== lordA.id).length;
    const cB = planets.filter((p) => p.rashiNumber === lordB.rashiNumber && p.id !== lordB.id).length;
    if (cA !== cB) return cA > cB ? lordA : lordB;
    const dScore = (p) => p.isExalted ? 2 : p.dignity.includes("स्वगृही") ? 1 : 0;
    if (dScore(lordA) !== dScore(lordB)) return dScore(lordA) > dScore(lordB) ? lordA : lordB;
    return norm360$1(lordA.siderealLon) % 30 >= norm360$1(lordB.siderealLon) % 30 ? lordA : lordB;
  };
  for (let i = 0; i < 12; i++) {
    const signIdx = isDirectSequence ? safeMod(lagnaRashiNum + i - 1, 12) : safeMod(lagnaRashiNum - i - 1, 12);
    const rashiNum = signIdx + 1;
    const rData = RASHI_DATA[signIdx];
    const lordPlanet = resolveFallbackDualLord(rashiNum);
    const lordRashi = lordPlanet ? lordPlanet.rashiNumber : rashiNum;
    const durationYears = computeJaiminiCharaDashaYears(rashiNum, lordRashi);
    const startY = Math.floor(currentStartYear);
    const endY = Math.floor(currentStartYear + durationYears);
    const isCurrent = currentYearNow >= startY && currentYearNow < endY;
    charDasha.push({
      rashiName: rData.name,
      rashiLord: lordPlanet ? lordPlanet.hindiName.split(" ")[0] : rData.lord,
      durationYears,
      periodDisplay: `${startY} से ${endY}`,
      isCurrent
    });
    currentStartYear += durationYears;
  }
  if (!charDasha.some((c) => c.isCurrent) && charDasha.length > 0) {
    charDasha[charDasha.length - 1].isCurrent = true;
  }
  return {
    karakas,
    charDasha
  };
}
function generateSampurnKundali(rawName, dob, birthTime, birthPlace = "रुद्रपुर, उत्तराखण्ड", options) {
  const name = (rawName || "").trim() || "श्रद्धालु यजमान";
  const nameProfile = getVedicDetailsFromName(name);
  const spaceTime = resolveBirthSpaceTime({
    dob: dob || "1996-03-10",
    birthTime: (birthTime || "").trim(),
    birthPlace,
    country: options?.country,
    timeZoneOverride: options?.timeZoneOverride,
    latitudeOverride: options?.latitudeOverride,
    longitudeOverride: options?.longitudeOverride,
    elevationMetersOverride: options?.elevationMetersOverride,
    birthTimeUncertainty: options?.birthTimeUncertainty
  });
  const phase1Astronomy = computeKundaliAstronomy(spaceTime, {
    ayanamshaMode: "LAHIRI"
  });
  const shadbalaBhava = computeShadbalaAndBhavaBala(phase1Astronomy);
  const phase2Jyotish = computeDeepJyotishPhase2(phase1Astronomy, shadbalaBhava);
  const year = spaceTime.year;
  const month = spaceTime.month;
  const day = spaceTime.day;
  const hour = spaceTime.hour;
  const minute = spaceTime.minute;
  const dayOfWeek = safeMod(phase1Astronomy.birthPanchang.vedicWeekdayIndex, 7);
  const nowIST = getISTCalendarParts(/* @__PURE__ */ new Date());
  const currentYear = nowIST.year;
  const ageYears = Math.max(1, currentYear - year);
  const coords = { lat: spaceTime.latitude, lon: spaceTime.longitude };
  const jd = spaceTime.julianDayUT;
  const ayanamsa = phase1Astronomy.config.ayanamshaDeg;
  const ayanamsaDMS = phase1Astronomy.config.ayanamshaDMS;
  const lagnaSiderealLon = phase1Astronomy.angles.ascendantSiderealDeg;
  const lagnaNumber = phase1Astronomy.angles.ascendantRashiNumber;
  const lagnaDegInfo = formatDMS(lagnaSiderealLon % 30);
  const astroById = new Map(phase1Astronomy.planets.map((p) => [p.id, p]));
  const sunAstro = astroById.get("sun");
  const moonAstro = astroById.get("moon");
  const marsAstro = astroById.get("mars");
  const mercuryAstro = astroById.get("mercury");
  const jupiterAstro = astroById.get("jupiter");
  const venusAstro = astroById.get("venus");
  const saturnAstro = astroById.get("saturn");
  const rahuAstro = astroById.get("rahu");
  const ketuAstro = astroById.get("ketu");
  const sunSiderealLon = sunAstro.siderealLonDeg;
  const sunRashiNumber = sunAstro.rashiNumber;
  const moonSiderealLon = moonAstro.siderealLonDeg;
  const moonRashiNumber = moonAstro.rashiNumber;
  const nakshatraSpan = 360 / 27;
  const nakshatraExact = moonSiderealLon / nakshatraSpan;
  const nakshatraIndex = moonAstro.nakshatraIndex;
  const nakshatraFractionElapsed = nakshatraExact - Math.floor(nakshatraExact);
  const nakshatraPada = moonAstro.pada;
  const bp = phase1Astronomy.birthPanchang;
  const paksha = bp.pakshaHi === "शुक्ल पक्ष" ? "शुक्ल पक्ष (Shukla Paksha)" : "कृष्ण पक्ष (Krishna Paksha)";
  const tithiName = bp.tithiNumber === 15 ? "पूर्णिमा" : bp.tithiNumber === 30 ? "अमावस्या" : TITHI_NAMES[safeMod(bp.tithiNumber - 1, 15)];
  const yogaName = YOGA_NAMES[safeMod(bp.yogaIndex, 27)] || `${bp.yogaNameHi} योग`;
  const karanaName = bp.karanaNameHi;
  const marsState = {
    tropicalLon: marsAstro.tropicalLonDeg,
    isRetrograde: marsAstro.isRetrograde
  };
  const mercuryState = {
    tropicalLon: mercuryAstro.tropicalLonDeg,
    isRetrograde: mercuryAstro.isRetrograde
  };
  const jupiterState = {
    tropicalLon: jupiterAstro.tropicalLonDeg,
    isRetrograde: jupiterAstro.isRetrograde
  };
  const venusState = {
    tropicalLon: venusAstro.tropicalLonDeg,
    isRetrograde: venusAstro.isRetrograde
  };
  const saturnState = {
    tropicalLon: saturnAstro.tropicalLonDeg,
    isRetrograde: saturnAstro.isRetrograde
  };
  const rahuSiderealLon = rahuAstro.siderealLonDeg;
  const ketuSiderealLon = ketuAstro.siderealLonDeg;
  const lagnaData = RASHI_DATA[safeMod(lagnaNumber - 1, 12)];
  const moonData = RASHI_DATA[safeMod(moonRashiNumber - 1, 12)];
  const sunData = RASHI_DATA[safeMod(sunRashiNumber - 1, 12)];
  const nakshatraObj = NAKSHATRA_LIST[safeMod(nakshatraIndex, 27)];
  const vaarObj = VAAR_NAMES[safeMod(dayOfWeek, 7)];
  const getHouseFromRef = (planetRashi, refRashi) => safeMod(planetRashi - refRashi, 12) + 1;
  const rawPlanets = [
    {
      id: "sun",
      name: "Sun",
      hindiName: "सूर्य (Sun)",
      shortHindi: "सू",
      symbol: "",
      siderealLon: sunSiderealLon,
      isRetrograde: false,
      combustLimit: 0,
      exalted: 1,
      debilitated: 7,
      own: [5],
      friendly: [1, 4, 8, 9, 12]
    },
    {
      id: "moon",
      name: "Moon",
      hindiName: "चंद्र (Moon)",
      shortHindi: "चं",
      symbol: "",
      siderealLon: moonSiderealLon,
      isRetrograde: false,
      combustLimit: 0,
      // Only Tara Grahas (Mars..Saturn) are tagged combust (^)
      exalted: 2,
      debilitated: 8,
      own: [4],
      friendly: [1, 3, 5, 6, 9, 12]
    },
    {
      id: "mars",
      name: "Mars",
      hindiName: "मंगल (Mars)",
      shortHindi: "मं",
      symbol: "",
      siderealLon: norm360$1(marsState.tropicalLon - ayanamsa),
      isRetrograde: marsState.isRetrograde,
      combustLimit: 17,
      exalted: 10,
      debilitated: 4,
      own: [1, 8],
      friendly: [4, 5, 9, 12]
    },
    {
      id: "mercury",
      name: "Mercury",
      hindiName: "बुध (Mercury)",
      shortHindi: "बु",
      symbol: "",
      siderealLon: norm360$1(mercuryState.tropicalLon - ayanamsa),
      isRetrograde: mercuryState.isRetrograde,
      combustLimit: mercuryState.isRetrograde ? 12 : 14,
      exalted: 6,
      debilitated: 12,
      own: [3, 6],
      friendly: [2, 5, 7, 10, 11]
    },
    {
      id: "jupiter",
      name: "Jupiter",
      hindiName: "गुरु (Jupiter)",
      shortHindi: "गु",
      symbol: "",
      siderealLon: norm360$1(jupiterState.tropicalLon - ayanamsa),
      isRetrograde: jupiterState.isRetrograde,
      combustLimit: 11,
      exalted: 4,
      debilitated: 10,
      own: [9, 12],
      friendly: [1, 5, 8]
    },
    {
      id: "venus",
      name: "Venus",
      hindiName: "शुक्र (Venus)",
      shortHindi: "शु",
      symbol: "",
      siderealLon: norm360$1(venusState.tropicalLon - ayanamsa),
      isRetrograde: venusState.isRetrograde,
      combustLimit: venusState.isRetrograde ? 8 : 10,
      exalted: 12,
      debilitated: 6,
      own: [2, 7],
      friendly: [3, 6, 10, 11]
    },
    {
      id: "saturn",
      name: "Saturn",
      hindiName: "शनि (Saturn)",
      shortHindi: "श",
      symbol: "",
      siderealLon: norm360$1(saturnState.tropicalLon - ayanamsa),
      isRetrograde: saturnState.isRetrograde,
      combustLimit: 15,
      exalted: 7,
      debilitated: 1,
      own: [10, 11],
      friendly: [2, 3, 6]
    },
    {
      id: "rahu",
      name: "Rahu",
      hindiName: "राहु (Rahu)",
      shortHindi: "रा",
      symbol: "",
      siderealLon: rahuSiderealLon,
      isRetrograde: false,
      // Retrograde is Rahu's natural default — never tag as वक्री (*)
      combustLimit: 0,
      exalted: 2,
      debilitated: 8,
      own: [11],
      friendly: [3, 6, 7, 10]
    },
    {
      id: "ketu",
      name: "Ketu",
      hindiName: "केतु (Ketu)",
      shortHindi: "के",
      symbol: "",
      siderealLon: ketuSiderealLon,
      isRetrograde: false,
      // Retrograde is Ketu's natural default — never tag as वक्री (*)
      combustLimit: 0,
      exalted: 8,
      debilitated: 2,
      own: [8],
      friendly: [9, 12, 1, 5]
    }
  ];
  const NATURAL_KARAKATWA_HI = {
    sun: "आत्मबल, पिता, मान-सम्मान और प्रशासनिक नेतृत्व",
    moon: "मन, माता, भावनात्मक संतुलन और जनसंपर्क",
    mars: "साहस, भूमि-भवन, तकनीकी ऊर्जा और पराक्रम",
    mercury: "बौद्धिक प्रखरता, वाणी, व्यापार और विश्लेषण शक्ति",
    jupiter: "ज्ञान, धर्म, भाग्य, संतान और विवेकपूर्ण समृद्धि",
    venus: "दांपत्य सुख, कला, वाहन, सौंदर्य और भौतिक ऐश्वर्य",
    saturn: "कर्म-अनुशासन, न्याय, दीर्घकालिक स्थायित्व और धैर्य",
    rahu: "महत्वाकांक्षा, आधुनिक नवाचार, विदेश संपर्क और तीव्र विस्तार",
    ketu: "अंतर्ज्ञान, शोध, आध्यात्मिक गहराई और सूक्ष्म विवेक"
  };
  const HOUSE_DOMAIN_HI = {
    1: "व्यक्तित्व, स्वास्थ्य और जीवन-दृष्टि",
    2: "संचित धन, कुटुंब और वाणी-प्रभाव",
    3: "पराक्रम, छोटे भाई-बहन, संवाद और स्वप्रयास",
    4: "माता, घर-संपत्ति, वाहन और आंतरिक शांति",
    5: "शिक्षा, प्रज्ञा, संतान और रचनात्मक कौशल",
    6: "प्रतियोगिता, सेवा-कार्य, स्वास्थ्य प्रबंधन और ऋण-मुक्ति",
    7: "विवाह, जीवनसाथी, व्यापारिक साझेदारी और जनप्रतिष्ठा",
    8: "दीर्घायु, शोध, आकस्मिक परिवर्तन और पैतृक विषय",
    9: "भाग्य, धर्म, उच्च शिक्षा, पिता और लंबी यात्राएं",
    10: "करियर, कर्म-क्षेत्र, पद-प्रतिष्ठा और सामाजिक नेतृत्व",
    11: "नियमित आय, लाभ के अवसर, बड़े नेटवर्क और इच्छा-पूर्ति",
    12: "विदेश संपर्क, आध्यात्मिक शांति, निवेश और संतुलित व्यय"
  };
  const SIGN_LORD_ID_MAP = {
    1: "mars",
    2: "venus",
    3: "mercury",
    4: "moon",
    5: "sun",
    6: "mercury",
    7: "venus",
    8: "mars",
    9: "jupiter",
    10: "saturn",
    11: "saturn",
    12: "jupiter"
  };
  const getOwnedHousesForLagna = (planetId) => {
    const owned = [];
    for (let h = 1; h <= 12; h++) {
      const signNum = safeMod(lagnaNumber - 1 + (h - 1), 12) + 1;
      if (SIGN_LORD_ID_MAP[signNum] === planetId) owned.push(h);
    }
    return owned;
  };
  const classifyFunctionalRole = (planetId, rashiNum) => {
    if (planetId === "rahu" || planetId === "ketu") {
      const dispId = SIGN_LORD_ID_MAP[rashiNum] || "saturn";
      const dispOwned = getOwnedHousesForLagna(dispId);
      const dispHindi = rawPlanets.find((x) => x.id === dispId)?.hindiName.split(" ")[0] || "राशि स्वामी";
      const isDispBenefic = dispOwned.some((h) => [1, 5, 9].includes(h));
      return {
        roleTagHi: `छाया ग्रह (राशि स्वामी ${dispHindi} — भाव ${dispOwned.join(", ")} का फलवाहक)`,
        roleToneHi: isDispBenefic ? "त्रिकोण-सम्बन्धित राशि स्वामी का फल ग्रहण कर यह अप्रत्याशित उन्नति व विशिष्ट प्रतिभा देता है" : "यह अपनी राशि के स्वामी और युति-ग्रहों के अनुरूप तीव्र महत्वाकांक्षा व कर्म-परिवर्तन लाता है",
        ownedHouses: []
      };
    }
    const owned = getOwnedHousesForLagna(planetId);
    const ownsLagna = owned.includes(1);
    const ownsKendra = owned.some((h) => [4, 7, 10].includes(h));
    const ownsTrikona = owned.some((h) => [5, 9].includes(h));
    const ownsMaraka = owned.some((h) => [2, 7].includes(h));
    const ownsDusthana = owned.some((h) => [6, 8, 12].includes(h));
    const onlyDusthana = owned.length > 0 && owned.every((h) => [6, 8, 12].includes(h));
    if (ownsKendra && ownsTrikona) {
      return {
        roleTagHi: `योगकारक (भाव ${owned.join(" व ")} स्वामी)`,
        roleToneHi: `${lagnaData.name} लग्न के लिए यह परम शुभ राजयोगकारक ग्रह है, जो उन्नति व प्रतिष्ठा का मुख्य आधार बनता है`,
        ownedHouses: owned
      };
    }
    if (ownsLagna) {
      return {
        roleTagHi: `लग्नेश (भाव ${owned.join(" व ")} स्वामी)`,
        roleToneHi: "लग्न स्वामी होने के कारण यह आपके संपूर्ण व्यक्तित्व, स्वास्थ्य और जीवन-दिशा का संरक्षक है",
        ownedHouses: owned
      };
    }
    if (ownsTrikona) {
      return {
        roleTagHi: `शुभ त्रिकोणेश (भाव ${owned.join(" व ")} स्वामी)`,
        roleToneHi: "त्रिकोण स्वामी के रूप में यह भाग्य, बुद्धि और शुभ अवसरों को गति देता है",
        ownedHouses: owned
      };
    }
    if (onlyDusthana) {
      return {
        roleTagHi: `दुःस्थान स्वामी (भाव ${owned.join(" व ")})`,
        roleToneHi: "चुनौती-भाव का स्वामी होने से इसके फल परिश्रम, विवेक और अनुशासन के बाद स्थायी लाभ में बदलते हैं",
        ownedHouses: owned
      };
    }
    if (ownsMaraka && !ownsTrikona) {
      return {
        roleTagHi: `मारक / धन-व्यापार स्वामी (भाव ${owned.join(" व ")})`,
        roleToneHi: "आर्थिक व साझेदारी विषयों को सक्रिय करते हुए यह स्वास्थ्य व संबंधों में संतुलन की मांग करता है",
        ownedHouses: owned
      };
    }
    if (ownsKendra && !ownsDusthana) {
      return {
        roleTagHi: `केंद्राधिपति (भाव ${owned.join(" व ")} स्वामी)`,
        roleToneHi: "केंद्र स्वामी के रूप में यह कर्म, सुख और व्यावहारिक स्थिरता का महत्वपूर्ण स्तंभ है",
        ownedHouses: owned
      };
    }
    return {
      roleTagHi: `मिश्रित भावाधिपति (भाव ${owned.join(" व ")})`,
      roleToneHi: "मिश्रित स्वामित्व के कारण यह सही समय व परिश्रम से संतुलित परिणाम प्रदान करता है",
      ownedHouses: owned
    };
  };
  const basePlanets = rawPlanets.map((p) => {
    const rashiNumber = safeMod(Math.floor(p.siderealLon / 30), 12) + 1;
    const degWithinSign = p.siderealLon % 30;
    const dms = formatDMS(degWithinSign);
    const rData = RASHI_DATA[safeMod(rashiNumber - 1, 12)];
    const houseInLagna = getHouseFromRef(rashiNumber, lagnaNumber);
    const houseInChandra = getHouseFromRef(rashiNumber, moonRashiNumber);
    const pNakExact = p.siderealLon / nakshatraSpan;
    const pNakIndex = safeMod(Math.floor(pNakExact), 27);
    const pNak = NAKSHATRA_LIST[pNakIndex];
    const pada = Math.min(4, Math.max(1, Math.floor((pNakExact - Math.floor(pNakExact)) * 4) + 1));
    const combustEval = isTaraGrahaCombust(p.id, p.siderealLon, sunSiderealLon, p.isRetrograde);
    const isCombust = combustEval.isCombust;
    const isExalted = rashiNumber === p.exalted;
    const isDebilitated = rashiNumber === p.debilitated;
    let dignity = "सम राशि";
    let statusBadge = "madhyam";
    if (isExalted) {
      dignity = "उच्च (Exalted)";
      statusBadge = "shubh";
    } else if (p.own.includes(rashiNumber)) {
      dignity = "स्वगृही (Own Sign)";
      statusBadge = "shubh";
    } else if (isDebilitated) {
      dignity = "नीच (Debilitated)";
      statusBadge = "upay";
    } else if (p.friendly.includes(rashiNumber)) {
      dignity = "मित्र राशि";
      statusBadge = "shubh";
    } else if ([6, 8, 12].includes(houseInLagna)) {
      dignity = "शत्रु राशि";
      statusBadge = "upay";
    } else {
      dignity = "सम राशि";
      statusBadge = [1, 4, 5, 7, 9, 10, 11].includes(houseInLagna) ? "shubh" : "madhyam";
    }
    const chartLabel = formatPlanetLabel(
      {
        id: p.id,
        shortHindi: p.shortHindi,
        siderealLon: p.siderealLon,
        isRetrograde: p.isRetrograde,
        isCombust
      },
      sunSiderealLon
    );
    return {
      id: p.id,
      name: p.name,
      hindiName: p.hindiName,
      shortHindi: p.shortHindi,
      symbol: p.symbol,
      rashiNumber,
      rashiName: rData.name,
      rashiLord: rData.lord,
      siderealLon: p.siderealLon,
      houseInLagna,
      houseInChandra,
      degree: dms.shortDeg,
      fullDegreeDMS: dms.fullDMS,
      degInt: dms.degInt,
      nakshatra: pNak.name,
      pada,
      dignity,
      statusBadge,
      isRetrograde: p.isRetrograde,
      isCombust,
      isExalted,
      isDebilitated,
      chartLabel,
      houseEffect: ""
    };
  });
  const DRISHTI_MAP = {
    sun: [7],
    moon: [7],
    mars: [4, 7, 8],
    mercury: [7],
    jupiter: [5, 7, 9],
    venus: [7],
    saturn: [3, 7, 10],
    rahu: [5, 7, 9],
    ketu: [5, 7, 9]
  };
  const planets = basePlanets.map((pl) => {
    const pShortName = pl.hindiName.split(" ")[0];
    const role = classifyFunctionalRole(pl.id, pl.rashiNumber);
    const karaka = NATURAL_KARAKATWA_HI[pl.id] || "विशिष्ट जीवन परिणाम";
    const domain = HOUSE_DOMAIN_HI[pl.houseInLagna] || "जीवन उन्नति";
    const conjunctNames = basePlanets.filter((other) => other.id !== pl.id && other.houseInLagna === pl.houseInLagna).map((other) => other.hindiName.split(" ")[0]);
    const aspectingNames = basePlanets.filter((other) => {
      if (other.id === pl.id) return false;
      const offsets = DRISHTI_MAP[other.id] || [7];
      return offsets.some((off) => (other.houseInLagna - 1 + (off - 1)) % 12 + 1 === pl.houseInLagna);
    }).map((other) => other.hindiName.split(" ")[0]);
    let dignityNote = "";
    if (pl.isExalted) {
      dignityNote = `${pl.rashiName.split(" ")[0]} राशि में उच्चस्थ होकर यह अपने कारकत्व (${karaka}) का श्रेष्ठ और तीव्र शुभ फल देता है।`;
    } else if (pl.dignity.includes("स्वगृही")) {
      dignityNote = `अपनी स्वराशि ${pl.rashiName.split(" ")[0]} में पूर्ण बली रहकर यह ${domain} को अत्यंत स्थायी व सुरक्षित बनाता है।`;
    } else if (pl.isDebilitated) {
      dignityNote = `नीच राशि ${pl.rashiName.split(" ")[0]} में स्थित होने से इसके शुभ फल प्रारंभिक संघर्ष व धैर्य के उपरांत परिपक्व होकर प्राप्त होते हैं।`;
    } else if (pl.dignity === "मित्र राशि") {
      dignityNote = `मित्र राशि ${pl.rashiName.split(" ")[0]} में सहज रहकर यह ${domain} में सहायक व उन्नतिकारक परिणाम देता है।`;
    } else if (pl.dignity === "शत्रु राशि") {
      dignityNote = `शत्रु/प्रतिकूल स्थिति में होने के कारण ${domain} से जुड़े निर्णयों में अतिरिक्त विवेक व संयम लाभदायक रहेगा।`;
    } else {
      dignityNote = `सम राशि ${pl.rashiName.split(" ")[0]} में स्थित होकर यह ${domain} में कर्म व दशा के अनुरूप संतुलित फल प्रदान करता है।`;
    }
    const stateNotes = [];
    if (pl.isRetrograde) {
      stateNotes.push("वक्री (*) अवस्था के कारण इसमें अतिरिक्त चेष्टा बल है — यह विषय पर गहन पुनर्मूल्यांकन व दृढ़ता के बाद विशिष्ट सफलता दिलाता है");
    }
    if (pl.isCombust) {
      stateNotes.push("सूर्य के निकट अस्त (^) होने से इसके बाह्य प्रभाव में कुछ संकोच रहता है, जिसे नियमित साधना व सही मुहूर्त से प्रबल किया जा सकता है");
    }
    if (conjunctNames.length > 0) {
      stateNotes.push(`इसी ${pl.houseInLagna}वें भाव में ${conjunctNames.join(" व ")} की युति इसके प्रभाव को संयुक्त दिशा दे रही है`);
    }
    if (aspectingNames.length > 0) {
      const hasGuruDrishti = aspectingNames.includes("गुरु");
      stateNotes.push(
        `${aspectingNames.slice(0, 3).join(", ")} की दृष्टि इस भाव पर पड़ रही है${hasGuruDrishti ? " (गुरु दृष्टि से विशेष शुभ रक्षा प्राप्त)" : ""}`
      );
    }
    const extraSentence = stateNotes.length > 0 ? ` ${stateNotes.join("; ")}।` : "";
    const houseEffect = `${pShortName} आपकी कुंडली में ${role.roleTagHi} होकर ${pl.houseInLagna}वें भाव (${domain}) में स्थित हैं। ${role.roleToneHi}। ${dignityNote}${extraSentence}`;
    return {
      ...pl,
      houseEffect
    };
  });
  const lagnaChart = Array.from({ length: 12 }, (_, idx) => {
    const houseNumber = idx + 1;
    const rashiNum = safeMod(lagnaNumber - 1 + idx, 12) + 1;
    const rData = RASHI_DATA[safeMod(rashiNum - 1, 12)];
    const housePlanets = planets.filter((pl) => pl.houseInLagna === houseNumber).map((pl) => ({
      shortHindi: pl.shortHindi,
      chartLabel: pl.chartLabel,
      degInt: pl.degInt,
      hindiName: pl.hindiName,
      degree: pl.degree,
      fullDegreeDMS: pl.fullDegreeDMS,
      statusBadge: pl.statusBadge
    }));
    return {
      houseNumber,
      bhavaTitle: BHAVA_TITLES[idx],
      rashiNumber: rashiNum,
      rashiName: rData.name,
      planets: housePlanets
    };
  });
  const chandraChart = Array.from({ length: 12 }, (_, idx) => {
    const houseNumber = idx + 1;
    const rashiNum = safeMod(moonRashiNumber - 1 + idx, 12) + 1;
    const rData = RASHI_DATA[safeMod(rashiNum - 1, 12)];
    const housePlanets = planets.filter((pl) => pl.houseInChandra === houseNumber).map((pl) => ({
      shortHindi: pl.shortHindi,
      chartLabel: pl.chartLabel,
      degInt: pl.degInt,
      hindiName: pl.hindiName,
      degree: pl.degree,
      fullDegreeDMS: pl.fullDegreeDMS,
      statusBadge: pl.statusBadge
    }));
    return {
      houseNumber,
      bhavaTitle: BHAVA_TITLES[idx],
      rashiNumber: rashiNum,
      rashiName: rData.name,
      planets: housePlanets
    };
  });
  const navamsaLagnaRashi = computeNavamsaRashi(lagnaSiderealLon);
  const navamsaChart = Array.from({ length: 12 }, (_, idx) => {
    const houseNumber = idx + 1;
    const rashiNum = safeMod(navamsaLagnaRashi - 1 + idx, 12) + 1;
    const rData = RASHI_DATA[safeMod(rashiNum - 1, 12)];
    const housePlanets = planets.map((pl) => ({
      ...pl,
      navRashi: computeNavamsaRashi(pl.siderealLon)
    })).filter((pl) => pl.navRashi === rashiNum).map((pl) => ({
      shortHindi: pl.shortHindi,
      chartLabel: pl.chartLabel,
      degInt: pl.degInt,
      hindiName: pl.hindiName,
      degree: pl.degree,
      fullDegreeDMS: pl.fullDegreeDMS,
      statusBadge: pl.statusBadge
    }));
    return {
      houseNumber,
      bhavaTitle: BHAVA_TITLES[idx],
      rashiNumber: rashiNum,
      rashiName: rData.name,
      planets: housePlanets
    };
  });
  const HINDI_MONTH_NAMES = [
    "जनवरी",
    "फरवरी",
    "मार्च",
    "अप्रैल",
    "मई",
    "जून",
    "जुलाई",
    "अगस्त",
    "सितंबर",
    "अक्टूबर",
    "नवंबर",
    "दिसंबर"
  ];
  const formatDecYearHindi = (decY) => {
    const yr = Math.floor(decY);
    const mIdx = Math.min(11, Math.max(0, Math.floor((decY - yr) * 12)));
    return `${HINDI_MONTH_NAMES[mIdx]} ${yr}`;
  };
  const startDashaIndex = VIMSHOTTARI_SEQUENCE.findIndex(
    (d) => d.planet.startsWith(nakshatraObj.lord.split(" ")[0])
  );
  const validStartIdx = startDashaIndex >= 0 ? startDashaIndex : 0;
  const birthDecimalYear = year + (month - 1) / 12 + (day - 1) / 365.2425;
  const currentDecimalYear = nowIST.year + (nowIST.month - 1) / 12 + (nowIST.day - 1) / 365.2425;
  let runningDecimalYear = birthDecimalYear;
  const mahadashas = [];
  for (let i = 0; i < 9; i++) {
    const seqItem = VIMSHOTTARI_SEQUENCE[safeMod(validStartIdx + i, 9)];
    const durationYears = i === 0 ? Math.max(0.02, seqItem.years * (1 - nakshatraFractionElapsed)) : seqItem.years;
    const startDec = runningDecimalYear;
    const endDec = runningDecimalYear + durationYears;
    const startY = Math.floor(startDec);
    const endY = Math.floor(endDec);
    const isCurrent = currentDecimalYear >= startDec && currentDecimalYear < endDec;
    let currentAntardasha;
    let currentPratyantardasha;
    let currentSookshmaDasha;
    if (isCurrent) {
      const fullMahaStartDec = endDec - seqItem.years;
      let antarCursor = fullMahaStartDec;
      for (let a = 0; a < 9; a++) {
        const antarObj = VIMSHOTTARI_SEQUENCE[safeMod(validStartIdx + i + a, 9)];
        const antarSpanYears = seqItem.years * antarObj.years / 120;
        if (currentDecimalYear < antarCursor + antarSpanYears || a === 8) {
          currentAntardasha = `${antarObj.planet} (समाप्ति: ${formatDecYearHindi(
            antarCursor + antarSpanYears
          )})`;
          let pratyantarCursor = antarCursor;
          for (let p = 0; p < 9; p++) {
            const pratyantarObj = VIMSHOTTARI_SEQUENCE[safeMod(validStartIdx + i + a + p, 9)];
            const pratyantarSpanYears = antarSpanYears * pratyantarObj.years / 120;
            if (currentDecimalYear < pratyantarCursor + pratyantarSpanYears || p === 8) {
              const pEndDec = pratyantarCursor + pratyantarSpanYears;
              currentPratyantardasha = `${pratyantarObj.planet} (समाप्ति: ${formatDecYearHindi(pEndDec)})`;
              let sookshmaCursor = pratyantarCursor;
              for (let s = 0; s < 9; s++) {
                const sookshmaObj = VIMSHOTTARI_SEQUENCE[safeMod(validStartIdx + i + a + p + s, 9)];
                const sookshmaSpanYears = pratyantarSpanYears * sookshmaObj.years / 120;
                if (currentDecimalYear < sookshmaCursor + sookshmaSpanYears || s === 8) {
                  const totalDays = Math.max(1, Math.round(sookshmaSpanYears * 365.25));
                  const elapsedDays = Math.max(
                    1,
                    Math.min(totalDays, Math.floor((currentDecimalYear - sookshmaCursor) * 365.25) + 1)
                  );
                  currentSookshmaDasha = `${sookshmaObj.planet} (दिवस ${elapsedDays}/${totalDays})`;
                  break;
                }
                sookshmaCursor += sookshmaSpanYears;
              }
              break;
            }
            pratyantarCursor += pratyantarSpanYears;
          }
          break;
        }
        antarCursor += antarSpanYears;
      }
    }
    mahadashas.push({
      planet: seqItem.planet,
      years: Math.round(durationYears * 100) / 100,
      startYear: startY,
      endYear: endY,
      startDateDisplay: formatDecYearHindi(startDec),
      endDateDisplay: formatDecYearHindi(endDec),
      isCurrent,
      currentAntardasha,
      currentPratyantardasha,
      currentSookshmaDasha,
      prediction: seqItem.effect
    });
    runningDecimalYear = endDec;
  }
  if (!mahadashas.some((m) => m.isCurrent) && mahadashas.length > 0) {
    mahadashas[0].isCurrent = true;
    mahadashas[0].currentAntardasha = VIMSHOTTARI_SEQUENCE[safeMod(validStartIdx, 9)].planet;
    mahadashas[0].currentPratyantardasha = VIMSHOTTARI_SEQUENCE[safeMod(validStartIdx, 9)].planet;
    mahadashas[0].currentSookshmaDasha = VIMSHOTTARI_SEQUENCE[safeMod(validStartIdx, 9)].planet;
  }
  const marsPlanet = planets.find((p) => p.id === "mars");
  const jupPlanet = planets.find((p) => p.id === "jupiter");
  const venPlanet = planets.find((p) => p.id === "venus");
  const satPlanet = planets.find((p) => p.id === "saturn");
  const sunPlanet = planets.find((p) => p.id === "sun");
  const mercPlanet = planets.find((p) => p.id === "mercury");
  const moonPlanet = planets.find((p) => p.id === "moon");
  const manglikHouses = [1, 2, 4, 7, 8, 12];
  const isMarsInManglikLagna = manglikHouses.includes(marsPlanet.houseInLagna);
  const jupAspectsMars = [1, 5, 7, 9].includes(
    safeMod(marsPlanet.houseInLagna - jupPlanet.houseInLagna, 12) + 1
  );
  const isManglikCancelled = [1, 8, 10].includes(marsPlanet.rashiNumber) || jupAspectsMars || marsPlanet.houseInLagna === 2;
  const manglikAnalysis = {
    isManglik: isMarsInManglikLagna && !isManglikCancelled,
    severity: !isMarsInManglikLagna ? "मांगलिक दोष रहित (Non-Manglik)" : isManglikCancelled ? "आंशिक मांगलिक" : "पूर्ण मांगलिक",
    marsHouse: marsPlanet.houseInLagna,
    explanation: !isMarsInManglikLagna ? `आपकी लग्न कुंडली में मंगल ग्रह ${marsPlanet.houseInLagna}वें भाव (${marsPlanet.rashiName}, ${marsPlanet.fullDegreeDMS}) में स्थित है। अतः आपकी कुंडली मांगलिक दोष से पूर्णतः मुक्त (Non-Manglik) है।` : isManglikCancelled ? `मंगल ${marsPlanet.houseInLagna}वें भाव (${marsPlanet.rashiName}) में स्थित है, किंतु स्वराशि/उच्च प्रभाव अथवा देवगुरु बृहस्पति की शुभ दृष्टि के कारण मांगलिक दोष का शास्त्रोक्त परिहार (आंशिक/निष्प्रभावी) हो रहा है।` : `लग्न कुंडली के ${marsPlanet.houseInLagna}वें भाव (${marsPlanet.rashiName}, ${marsPlanet.fullDegreeDMS}) में मंगल स्थित होने से मांगलिक प्रभाव बन रहा है। यह आपको अदम्य साहस व नेतृत्व देता है; विवाह से पूर्व कुंडली गुण मिलान कर लेना शुभ रहेगा।`,
    remedy: !isMarsInManglikLagna ? "मंगल की शुभता एवं ऊर्जा वृद्धि हेतु मंगलवार को श्री हनुमान चालीसा का पाठ करें।" : "मंगलवार को श्री हनुमान जी को सिंदूर व चोला अर्पित करें, सुंदरकांड का पाठ करें तथा विवाह से पूर्व पण्डित जी से गुण मिलान अवश्य कराएं।"
  };
  const rahuLon = rahuSiderealLon;
  const ketuLon = ketuSiderealLon;
  const sevenPlanets = planets.filter((p) => p.id !== "rahu" && p.id !== "ketu");
  const sideA = sevenPlanets.every((p) => norm360$1(p.siderealLon - rahuLon) < 180);
  const sideB = sevenPlanets.every((p) => norm360$1(p.siderealLon - ketuLon) < 180);
  const isKaalSarp = sideA || sideB;
  const nowJd = computeJulianDayIST(
    nowIST.year,
    nowIST.month,
    nowIST.day,
    nowIST.hours,
    nowIST.minutes
  );
  const nowAyanamsa = getLahiriAyanamsa(nowJd);
  const transitSaturnState = getGeocentricPlanetState("saturn", nowJd);
  const transitSaturnSiderealLon = norm360$1(transitSaturnState.tropicalLon - nowAyanamsa);
  const transitSaturnRashi = safeMod(Math.floor(transitSaturnSiderealLon / 30), 12) + 1;
  const transitSaturnRashiName = RASHI_DATA[safeMod(transitSaturnRashi - 1, 12)].name;
  const transitSaturnDMS = formatDMS(transitSaturnSiderealLon % 30).shortDeg;
  const transitSaturnMotionHi = transitSaturnState.dailySpeedDeg < 0 ? "वक्री" : "मार्गी";
  const shaniHouseFromNatalMoon = safeMod(transitSaturnRashi - moonRashiNumber, 12) + 1;
  let sadeSatiStatus = "शनि साढ़े साती एवं ढैय्या से पूर्णतः मुक्त (अनुकूल गोचर)";
  let sadeSatiPhase = `चंद्र से ${shaniHouseFromNatalMoon}वें भाव में शुभ शनि गोचर (${transitSaturnRashiName} • ${transitSaturnMotionHi})`;
  let sadeSatiExplanation = `वर्तमान गोचर में शनि देव ${transitSaturnRashiName} राशि (${transitSaturnDMS} • ${transitSaturnMotionHi}) में आपकी जन्म चंद्र राशि ${moonData.name} से ${shaniHouseFromNatalMoon}वें भाव में भ्रमण कर रहे हैं। आपकी कुंडली पर वर्तमान में साढ़े साती या ढैय्या का प्रभाव नहीं है।`;
  if (shaniHouseFromNatalMoon === 12) {
    sadeSatiStatus = "शनि साढ़े साती सक्रिय (प्रथम / उदय चरण)";
    sadeSatiPhase = `प्रथम चरण — द्वादश भाव में शनि गोचर (${transitSaturnRashiName} ${transitSaturnDMS} • ${transitSaturnMotionHi})`;
    sadeSatiExplanation = `वर्तमान गोचर में शनि देव ${transitSaturnRashiName} राशि (${transitSaturnDMS} • ${transitSaturnMotionHi}) में भ्रमण कर रहे हैं, जो आपकी जन्म चंद्र राशि ${moonData.name} से द्वादश (12वें) भाव में हैं। साढ़े साती का यह प्रथम चरण धैर्य, संयम और सोच-समझकर आर्थिक निर्णय लेने की प्रेरणा देता है।`;
  } else if (shaniHouseFromNatalMoon === 1) {
    sadeSatiStatus = "शनि साढ़े साती सक्रिय (द्वितीय / मध्य शिखर चरण)";
    sadeSatiPhase = `द्वितीय चरण — जन्म राशि पर शनि गोचर (${transitSaturnRashiName} ${transitSaturnDMS} • ${transitSaturnMotionHi})`;
    sadeSatiExplanation = `वर्तमान गोचर में शनि देव आपकी ही जन्म चंद्र राशि ${moonData.name} (${transitSaturnDMS} • ${transitSaturnMotionHi}) पर संचरण कर रहे हैं। साढ़े साती का यह मध्य शिखर चरण कठिन परिश्रम, अनुशासन और सत्यनिष्ठा से जीवन में स्थायी सफलता दिलाने वाला काल है।`;
  } else if (shaniHouseFromNatalMoon === 2) {
    sadeSatiStatus = "शनि साढ़े साती सक्रिय (तृतीय / अस्त चरण)";
    sadeSatiPhase = `तृतीय चरण — द्वितीय भाव में उतरती साढ़े साती (${transitSaturnRashiName} ${transitSaturnDMS} • ${transitSaturnMotionHi})`;
    sadeSatiExplanation = `वर्तमान गोचर में शनि देव ${transitSaturnRashiName} राशि (${transitSaturnDMS} • ${transitSaturnMotionHi}) में आपकी चंद्र राशि ${moonData.name} से द्वितीय भाव में भ्रमण कर रहे हैं। यह उतरती साढ़े साती का चरण है, जो पूर्व के परिश्रम का उत्तम फल और आर्थिक संचय प्रदान करता है।`;
  } else if (shaniHouseFromNatalMoon === 4) {
    sadeSatiStatus = "शनि की कंटक (चतुर्थ) ढैय्या सक्रिय";
    sadeSatiPhase = `चतुर्थ ढैय्या — चंद्र से 4थे भाव में शनि गोचर (${transitSaturnRashiName} ${transitSaturnDMS} • ${transitSaturnMotionHi})`;
    sadeSatiExplanation = `वर्तमान गोचर में शनि देव ${transitSaturnRashiName} राशि (${transitSaturnDMS} • ${transitSaturnMotionHi}) में आपकी चंद्र राशि ${moonData.name} से चतुर्थ भाव में संचरण कर रहे हैं। कंटक ढैय्या के इस काल में कार्यक्षेत्र व पारिवारिक निर्णयों में धैर्य और हनुमान जी की उपासना विशेष फलदायी रहेगी।`;
  } else if (shaniHouseFromNatalMoon === 8) {
    sadeSatiStatus = "शनि की अष्टम ढैय्या सक्रिय";
    sadeSatiPhase = `अष्टम ढैय्या — चंद्र से 8वें भाव में शनि गोचर (${transitSaturnRashiName} ${transitSaturnDMS} • ${transitSaturnMotionHi})`;
    sadeSatiExplanation = `वर्तमान गोचर में शनि देव ${transitSaturnRashiName} राशि (${transitSaturnDMS} • ${transitSaturnMotionHi}) में आपकी चंद्र राशि ${moonData.name} से अष्टम भाव में संचरण कर रहे हैं। अष्टम ढैय्या के इस काल में स्वास्थ्य एवं वाणी में संयम रखें तथा शनिवार को पीपल के नीचे दीपदान करें।`;
  }
  const rajYogas = [];
  const sunHouse = sunPlanet.houseInLagna;
  const mercHouse = mercPlanet.houseInLagna;
  const jupHouse = jupPlanet.houseInLagna;
  const moonHouse = moonPlanet.houseInLagna;
  const venHouse = venPlanet.houseInLagna;
  const marsHouse = marsPlanet.houseInLagna;
  const satHouse = satPlanet.houseInLagna;
  if (sunHouse === mercHouse) {
    rajYogas.push({
      name: "बुधादित्य राजयोग (Budhaditya Rajyoga)",
      sanskritRule: `भाव ${sunHouse} (${sunPlanet.rashiName}) में सूर्य एवं बुध की युति`,
      strength: "प्रबल योग",
      description: "आपकी कुंडली में सूर्य और बुध एक ही भाव में स्थित होकर प्रबल बुधादित्य राजयोग बना रहे हैं, जो आपको कुशाग्र बुद्धि, वाणी का तेज, प्रशासनिक कौशल और समाज में विशेष मान-सम्मान प्रदान करता है।"
    });
  }
  if ([1, 4, 7, 10].includes(safeMod(jupHouse - moonHouse, 12) + 1)) {
    rajYogas.push({
      name: "गजकेसरी राजयोग (Gajakesari Rajyoga)",
      sanskritRule: `चंद्रमा (भाव ${moonHouse}) से केंद्र (भाव ${jupHouse}) में देवगुरु बृहस्पति`,
      strength: "प्रबल योग",
      description: "गुरु और चंद्र के केंद्र संबंध से गजकेसरी राजयोग बन रहा है। इसके प्रभाव से जातक अपने कुल का नाम रोशन करता है और स्थायी धन-संपत्ति, उच्च विद्या व अक्षुण्ण प्रतिष्ठा प्राप्त करता है।"
    });
  }
  if ([1, 4, 7, 10].includes(jupHouse) && [4, 9, 12].includes(jupPlanet.rashiNumber)) {
    rajYogas.push({
      name: "हंस पंचमहापुरुष राजयोग (Hamsa Mahapurusha Yoga)",
      sanskritRule: `केंद्र (भाव ${jupHouse}) में उच्च/स्वराशि (${jupPlanet.rashiName}) के बृहस्पति`,
      strength: "प्रबल योग",
      description: "केंद्र भाव में बलवान बृहस्पति हंस महापुरुष राजयोग का निर्माण कर रहे हैं, जो धर्म, अध्यात्म, उच्च ज्ञान और समाज में आचार्य/मार्गदर्शक के रूप में सर्वोच्च सम्मान दिलाता है।"
    });
  }
  if ([1, 4, 7, 10].includes(venHouse) && [2, 7, 12].includes(venPlanet.rashiNumber)) {
    rajYogas.push({
      name: "मालव्य पंचमहापुरुष राजयोग (Malavya Mahapurusha Yoga)",
      sanskritRule: `केंद्र (भाव ${venHouse}) में उच्च/स्वराशि (${venPlanet.rashiName}) के शुक्र`,
      strength: "प्रबल योग",
      description: "केंद्र में बलवान शुक्र मालव्य महापुरुष राजयोग बना रहे हैं, जो जीवन में भव्य वाहन, भवन, कलात्मक प्रतिभा, ऐश्वर्य और सुखद दांपत्य जीवन प्रदान करता है।"
    });
  }
  if ([1, 4, 7, 10].includes(marsHouse) && [1, 8, 10].includes(marsPlanet.rashiNumber)) {
    rajYogas.push({
      name: "रुचक पंचमहापुरुष राजयोग (Ruchaka Mahapurusha Yoga)",
      sanskritRule: `केंद्र (भाव ${marsHouse}) में उच्च/स्वराशि (${marsPlanet.rashiName}) के मंगल`,
      strength: "प्रबल योग",
      description: "केंद्र में स्वराशि/उच्च के मंगल रुचक महापुरुष राजयोग बना रहे हैं, जो अदम्य साहस, नेतृत्व क्षमता, भूमि-संपदा और प्रशासनिक क्षेत्र में विजय प्रदान करता है।"
    });
  }
  if ([1, 4, 7, 10].includes(mercHouse) && [3, 6].includes(mercPlanet.rashiNumber)) {
    rajYogas.push({
      name: "भद्र पंचमहापुरुष राजयोग (Bhadra Mahapurusha Yoga)",
      sanskritRule: `केंद्र (भाव ${mercHouse}) में स्वराशि/उच्च (${mercPlanet.rashiName}) के बुध`,
      strength: "प्रबल योग",
      description: "केंद्र में बलवान बुध भद्र महापुरुष राजयोग बना रहे हैं, जो वाणिज्य-व्यापार, गणित, वाणी कौशल और बौद्धिक क्षेत्रों में असाधारण सफलता देता है।"
    });
  }
  if ([1, 4, 7, 10].includes(satHouse) && [7, 10, 11].includes(satPlanet.rashiNumber)) {
    rajYogas.push({
      name: "शश पंचमहापुरुष राजयोग (Shasha Mahapurusha Yoga)",
      sanskritRule: `केंद्र (भाव ${satHouse}) में उच्च/स्वराशि (${satPlanet.rashiName}) के शनि`,
      strength: "प्रबल योग",
      description: "केंद्र में बलवान शनि शश महापुरुष राजयोग का निर्माण कर रहे हैं, जो जन-नेतृत्व, न्यायप्रियता, उद्योग-धंधों और दीर्घकालीन साम्राज्य निर्माण की शक्ति देता है।"
    });
  }
  if (mercHouse === venHouse) {
    rajYogas.push({
      name: "लक्ष्मी-नारायण राजयोग (Lakshmi-Narayana Yoga)",
      sanskritRule: `भाव ${mercHouse} (${mercPlanet.rashiName}) में बुध एवं शुक्र की युति`,
      strength: "प्रबल योग",
      description: "बुध (नारायण तत्व) और शुक्र (लक्ष्मी तत्व) की युति से आपकी कुंडली में लक्ष्मी-नारायण योग बन रहा है, जो व्यापारिक समृद्धि, धन-धान्य और सौभाग्य में निरंतर वृद्धि करता है।"
    });
  }
  if (moonHouse === marsHouse || safeMod(marsHouse - moonHouse, 12) + 1 === 7) {
    rajYogas.push({
      name: "चंद्र-मंगल महालक्ष्मी धन योग (Chandra-Mangal Yoga)",
      sanskritRule: `चंद्रमा (भाव ${moonHouse}) एवं मंगल (भाव ${marsHouse}) का परस्पर संबंध`,
      strength: "शुभ योग",
      description: "चंद्र और मंगल के संयोग से प्रबल धन-लक्ष्मी योग निर्मित हो रहा है, जो साहसपूर्ण निर्णयों व स्व-परिश्रम से अचल संपत्ति एवं आर्थिक उन्नति कराता है।"
    });
  }
  if (rajYogas.length < 3) {
    const tenthPlanets = planets.filter((p) => p.houseInLagna === 10).map((p) => p.hindiName.split(" ")[0]);
    const eleventhPlanets = planets.filter((p) => p.houseInLagna === 11).map((p) => p.hindiName.split(" ")[0]);
    rajYogas.push({
      name: "कर्म-सिद्धि एवं स्व-अर्जित भाग्योदय योग",
      sanskritRule: `लग्नेश ${lagnaData.lord.split(" ")[0]} एवं दशम/एकादश भाव का समन्वय`,
      strength: "शुभ योग",
      description: `आपकी कुंडली में लग्नेश ${lagnaData.lord} तथा कर्म/लाभ भाव (${tenthPlanets.length > 0 ? `दशम में ${tenthPlanets.join(", ")}` : "दशमेश"}${eleventhPlanets.length > 0 ? `, एकादश में ${eleventhPlanets.join(", ")}` : ""}) के प्रभाव से अपने पुरुषार्थ, वाणी और कौशल के बल पर निरंतर उन्नति करने का प्रबल योग है।`
    });
  }
  const paya = [1, 6, 11].includes(moonHouse) ? "स्वर्ण पाद (सोने का पाया)" : [2, 5, 9].includes(moonHouse) ? "रजत पाद (चांदी का पाया - अत्यंत शुभ)" : [3, 7, 10].includes(moonHouse) ? "ताम्र पाद (तांबे का पाया - शुभ)" : "लौह पाद (लोहे का पाया)";
  const formattedDob = `${String(day).padStart(2, "0")}-${String(month).padStart(2, "0")}-${year}`;
  const ampm = hour >= 12 ? "PM" : "AM";
  const hour12 = hour % 12 || 12;
  const formattedTime = `${String(hour12).padStart(2, "0")}:${String(minute).padStart(2, "0")} ${ampm}`;
  const getHouseSummaryPlanets = (hNum) => {
    const list = planets.filter((p) => p.houseInLagna === hNum);
    const houseRashi = RASHI_DATA[safeMod(lagnaNumber - 1 + hNum - 1, 12)];
    if (list.length === 0) {
      return `${houseRashi.name} राशि (स्वामी: ${houseRashi.lord})`;
    }
    return `${houseRashi.name} राशि में स्थित ${list.map((p) => `${p.hindiName.split(" ")[0]} (${p.degree})`).join(", ")}`;
  };
  const activeMahaObj = mahadashas.find((m) => m.isCurrent) || mahadashas[0];
  const rahuHouse = planets.find((p) => p.id === "rahu").houseInLagna;
  const ketuHouse = planets.find((p) => p.id === "ketu").houseInLagna;
  const hasSunRahu = sunHouse === rahuHouse || sunHouse === ketuHouse;
  const pitraStatus = hasSunRahu ? "सूर्य-राहु/केतु संयोग (पितृ स्मरण एवं तर्पण से विशेष भाग्योदय)" : "पितरों एवं कुलदेवता का पूर्ण शुभ आशीर्वाद";
  const pitraExplanation = hasSunRahu ? `आपकी कुंडली के ${sunHouse}वें भाव में सूर्य के साथ राहु/केतु अक्ष का प्रभाव होने से अमावस्या एवं पितृ पक्ष में पूर्वजों के निमित्त अन्न-जल दान व पीपल पूजन करने से कार्यक्षेत्र के समस्त अवरोध तुरंत दूर होंगे।` : `आपकी कुंडली में नवम भाव (${getHouseSummaryPlanets(9)}) एवं देवगुरु बृहस्पति (भाव ${jupHouse}) के शुभ प्रभाव से आपको अपने पूर्वजों व कुलदेवता की विशेष कृपा प्राप्त है।`;
  const convertPhase1Chart = (slots) => slots.map((slot, idx) => {
    const rData = RASHI_DATA[safeMod(slot.rashiNumber - 1, 12)];
    return {
      houseNumber: slot.houseNumber,
      bhavaTitle: BHAVA_TITLES[idx] || `भाव ${slot.houseNumber}`,
      rashiNumber: slot.rashiNumber,
      rashiName: rData.name,
      planets: slot.planets.map((sp) => {
        const fullP = planets.find((pl) => pl.id === sp.id);
        return {
          shortHindi: fullP?.shortHindi || sp.shortHindi,
          chartLabel: fullP?.chartLabel || sp.chartLabel || formatPlanetLabel(sp, sunSiderealLon),
          degInt: sp.degInt,
          hindiName: fullP?.hindiName || sp.hindiName,
          degree: fullP?.degree || `${String(sp.degInt).padStart(2, "0")}°`,
          fullDegreeDMS: sp.fullDMS,
          statusBadge: fullP?.statusBadge || "madhyam"
        };
      })
    };
  });
  const suryaChart = convertPhase1Chart(phase1Astronomy.mainCharts.surya);
  const bhavaChalitChart = convertPhase1Chart(phase1Astronomy.mainCharts.bhavaChalit);
  const verifiedShodashavarga = phase1Astronomy.shodashavarga.map((v) => ({
    id: v.spec.id,
    name: v.spec.nameHi,
    sanskritName: v.spec.sanskritName,
    signification: v.spec.significationHi,
    houses: convertPhase1Chart(v.houses)
  }));
  const syncedMahadashas = phase2Jyotish ? phase2Jyotish.vimshottari.mahadashas.map((m) => {
    const vim = phase2Jyotish.vimshottari;
    const pMeta = planets.find((pl) => pl.id === m.lordId);
    const label = pMeta ? pMeta.hindiName : m.lordHindi;
    return {
      planet: label,
      years: Math.round(m.durationYears * 100) / 100,
      startYear: new Date(m.startUtcMs).getUTCFullYear(),
      endYear: new Date(m.endUtcMs).getUTCFullYear(),
      startDateDisplay: m.startDateHi,
      endDateDisplay: m.endDateHi,
      isCurrent: m.isCurrent,
      currentAntardasha: m.isCurrent ? `${vim.activeAntardasha.lordHindi} (समाप्ति: ${vim.activeAntardasha.endDateHi})` : void 0,
      currentPratyantardasha: m.isCurrent ? `${vim.activePratyantardasha.lordHindi} (समाप्ति: ${vim.activePratyantardasha.endDateHi})` : void 0,
      currentSookshmaDasha: m.isCurrent ? `${vim.activeSookshmadasha.lordHindi} (${vim.activeSookshmadasha.startDateHi} – ${vim.activeSookshmadasha.endDateHi})` : void 0,
      prediction: m.effectHi
    };
  }) : mahadashas;
  const syncedJaimini = phase2Jyotish ? {
    karakas: phase2Jyotish.jaimini.karakas.map((k) => {
      const pMeta = planets.find((pl) => pl.id === k.planetId);
      return {
        karakaCode: k.code,
        karakaName: k.nameHi,
        planetHindi: pMeta?.hindiName || k.planetHindi,
        planetEnglish: pMeta?.name || k.planetId,
        degreeInRashi: k.degDMS,
        signification: k.significationHi
      };
    }),
    charDasha: phase2Jyotish.jaimini.charaDasha.slice(0, 12).map((c) => ({
      rashiName: RASHI_DATA[safeMod(c.rashiNumber - 1, 12)].name,
      rashiLord: c.effectiveLordHindi,
      durationYears: c.durationYears,
      periodDisplay: `${c.startDateHi} – ${c.endDateHi}`,
      isCurrent: c.isCurrent
    }))
  } : computeJaiminiData(lagnaNumber, planets, year);
  const p2Manglik = phase2Jyotish?.yogasAndDoshas.doshas.manglik;
  const p2Kaalsarp = phase2Jyotish?.yogasAndDoshas.doshas.kaalsarp;
  const p2Pitra = phase2Jyotish?.yogasAndDoshas.doshas.pitra;
  const finalManglikAnalysis = p2Manglik ? {
    isManglik: p2Manglik.effectiveStatus === "प्रबल सक्रिय",
    severity: p2Manglik.effectiveStatus === "दोष मुक्त" ? "मांगलिक दोष रहित (Non-Manglik)" : p2Manglik.effectiveStatus === "आंशिक / परिहार युक्त" ? "आंशिक मांगलिक" : "पूर्ण मांगलिक",
    marsHouse: marsPlanet.houseInLagna,
    explanation: p2Manglik.explanationHi,
    remedy: p2Manglik.remedyHi
  } : manglikAnalysis;
  const finalKaalSarp = p2Kaalsarp ? {
    isPresent: p2Kaalsarp.isTriggeredRaw,
    type: p2Kaalsarp.subTypeHi || (p2Kaalsarp.isTriggeredRaw ? "कालसर्प योग" : "कालसर्प दोष से मुक्त (No Kaal Sarp Dosh)"),
    explanation: p2Kaalsarp.explanationHi,
    remedy: p2Kaalsarp.remedyHi
  } : {
    isPresent: isKaalSarp,
    type: isKaalSarp ? "कालसर्प योग प्रभाव" : "कालसर्प दोष से मुक्त (No Kaal Sarp Dosh)",
    explanation: isKaalSarp ? `कुंडली में राहु (भाव ${rahuHouse}) एवं केतु (भाव ${ketuHouse}) अक्ष के एक ओर ग्रह स्थित होने से प्रारंभिक परिश्रम के पश्चात विशेष भाग्योदय होता है।` : `आपकी जन्म कुंडली में राहु (भाव ${rahuHouse}) एवं केतु (भाव ${ketuHouse}) अक्ष के दोनों ओर ग्रह स्वतंत्र रूप से स्थित हैं, अतः कुंडली कालसर्प दोष से पूर्णतः मुक्त है।`,
    remedy: 'सोमवार को शिवलिंग पर जल एवं बिल्वपत्र अर्पित करें और "ॐ नमः शिवाय" का जप करें।'
  };
  const finalPitra = p2Pitra ? {
    status: p2Pitra.effectiveStatus === "दोष मुक्त" ? "पितरों एवं कुलदेवता का पूर्ण शुभ आशीर्वाद (दोष मुक्त)" : `${p2Pitra.effectiveStatus} — पितृ दोष संकेत`,
    explanation: p2Pitra.explanationHi
  } : {
    status: pitraStatus,
    explanation: pitraExplanation
  };
  return {
    input: {
      name,
      dob: spaceTime.dob,
      formattedDob,
      birthTime: spaceTime.effectiveBirthTime24,
      formattedTime,
      birthPlace: spaceTime.birthPlaceDisplay || birthPlace.trim() || "रुद्रपुर, उत्तराखण्ड",
      latitude: coords.lat,
      longitude: coords.lon,
      ayanamsaDMS,
      ageYears,
      timeZone: spaceTime.timeZone,
      utcOffsetFormatted: spaceTime.utcOffsetFormatted,
      isDstActive: spaceTime.isDstActive,
      birthTimeUncertainty: spaceTime.birthTimeUncertainty,
      warningsHi: [...spaceTime.warningsHi, ...phase1Astronomy.boundaryWarningsHi]
    },
    panchang: {
      vaar: vaarObj.name,
      vaarLord: vaarObj.lord,
      tithi: tithiName,
      paksha,
      yoga: yogaName,
      karana: karanaName,
      lagnaNumber,
      lagnaName: lagnaData.name,
      lagnaLord: lagnaData.lord,
      lagnaDegreeDMS: lagnaDegInfo.fullDMS,
      lagnaDegInt: lagnaDegInfo.degInt,
      moonRashiNumber,
      moonRashiName: moonData.name,
      moonRashiLord: moonData.lord,
      sunRashiNumber,
      sunRashiName: sunData.name,
      sunRashiLord: sunData.lord,
      naamRashi: nameProfile.rashi,
      nakshatraName: nakshatraObj.name,
      nakshatraPada,
      nakshatraLord: nakshatraObj.lord,
      gana: nakshatraObj.gana,
      nadi: nakshatraObj.nadi,
      yoni: nakshatraObj.yoni,
      varna: moonData.varna,
      vashya: moonData.vashya,
      tatva: lagnaData.tatva,
      paya
    },
    lucky: {
      luckyNumbers: lagnaData.numbers,
      luckyColors: lagnaData.colors,
      luckyDays: lagnaData.days,
      luckyDirection: lagnaData.direction,
      ishtaDevta: lagnaData.ishta,
      beejMantra: lagnaData.mantra,
      ratnaName: lagnaData.gemstone,
      uparatnaName: lagnaData.uparatna,
      ratnaMetalAndFinger: lagnaData.metal,
      rudraksha: lagnaData.rudraksha
    },
    planets,
    lagnaChart,
    chandraChart,
    suryaChart,
    bhavaChalitChart,
    navamsaChart,
    shodashavarga: verifiedShodashavarga,
    kpSystem: computeKPSystemData(lagnaSiderealLon, planets, ayanamsaDMS, jd, coords.lon, ayanamsa),
    ashtakavarga: computeAshtakavargaData(lagnaSiderealLon, planets),
    jaimini: syncedJaimini,
    mahadashas: syncedMahadashas,
    doshaAnalysis: {
      manglik: finalManglikAnalysis,
      kaalSarp: finalKaalSarp,
      sadeSati: {
        status: sadeSatiStatus,
        phase: phase2Jyotish?.liveGochar.sadeSatiLabelHi || sadeSatiPhase,
        explanation: sadeSatiExplanation,
        remedy: "शनिवार की संध्या को पीपल के वृक्ष के नीचे सरसों के तेल का दीपक जलाएं एवं श्री हनुमान चालीसा का पाठ करें।"
      },
      pitraDosha: finalPitra
    },
    rajYogas,
    predictions: {
      personality: {
        title: `१. लग्नेश, राशि स्वामी एवं मानसिक-आध्यात्मिक स्थिति (${lagnaData.name} लग्न • ${moonData.name} राशि)`,
        summary: `चित्रापक्ष लाहिड़ी अयनांश (${ayanamsaDMS}) एवं स्थानीय अक्षांश (${coords.lat.toFixed(2)}° N, ${coords.lon.toFixed(2)}° E) की शुद्ध दृक् गणित गणना के अनुसार आपका जन्म ${lagnaData.name} लग्न (${lagnaDegInfo.fullDMS}, लग्नेश: ${lagnaData.lord}) और ${moonData.name} चंद्र राशि (चंद्र स्पष्ट: ${moonPlanet.fullDegreeDMS}, नक्षत्र: ${nakshatraObj.name}, चरण ${nakshatraPada}) में हुआ है। प्रथम भाव में ${getHouseSummaryPlanets(1)} का प्रभाव एवं चंद्रमा का ${moonHouse}वें भाव में संचरण आपको प्रखर आत्मबल, सात्त्विक विवेक, स्वाभिमानी व्यक्तित्व और गहन अंतर्दृष्टि प्रदान करता है।`,
        keyTraits: [
          `तत्व एवं स्वभाव प्रधानता: ${lagnaData.tatva} — स्थिर प्रज्ञा, दूरदर्शी सोच एवं विषम परिस्थितियों में भी अडिग निर्णय क्षमता`,
          `नक्षत्र एवं गण प्रभाव: ${nakshatraObj.name} नक्षत्र (${nakshatraObj.gana}, ${nakshatraObj.nadi}, स्वामी: ${nakshatraObj.lord}) के प्रभाव से समाज में विश्वसनीय प्रतिष्ठा एवं सात्त्विक तेज`,
          `आध्यात्मिक एवं मानसिक बल: इष्ट देव (${lagnaData.ishta}) की कृपा से अंतर्ज्ञान, धर्म-कर्म में निष्ठा और मानसिक स्थिरता का प्रबल योग`
        ]
      },
      career: {
        title: "२. सक्रिय विंशोत्तरी महादशा/अंतर्दशा एवं करियर-आजीविका का सूक्ष्म प्रभाव",
        summary: `आपकी जन्मपत्रिका में वर्तमान में ${activeMahaObj.planet} की महादशा (${activeMahaObj.startDateDisplay} से ${activeMahaObj.endDateDisplay}) एवं ${activeMahaObj.currentAntardasha || "शुभ"} की अंतर्दशा सक्रिय है। दशम (कर्म) भाव में ${getHouseSummaryPlanets(10)} तथा सूर्य (भाव ${sunHouse}, ${sunPlanet.degree}) और शनि (भाव ${satHouse}, ${satPlanet.degree}) की स्थिति दर्शाती है कि आपमें नेतृत्व, प्रशासन और स्वतंत्र उद्यम की अद्भुत क्षमता है।`,
        bestFields: [
          "वैदिक ज्ञान, ज्योतिष, शिक्षा, परामर्श, प्रशासनिक सेवा एवं आध्यात्मिक मार्गदर्शन",
          "स्वतंत्र व्यवसाय, वाणिज्य, वित्तीय प्रबंधन एवं जनसंपर्क से जुड़े उच्च क्षेत्र",
          "संस्थागत नेतृत्व, तकनीकी नवाचार, मीडिया एवं सामाजिक कल्याण के उपक्रम"
        ],
        peakYears: `सक्रिय ${activeMahaObj.planet.split(" ")[0]} महादशा काल तथा आयु के ${Math.max(24, ageYears)}वें, ${Math.max(27, ageYears + 2)}वें एवं ${Math.max(32, ageYears + 5)}वें वर्ष में करियर एवं प्रतिष्ठा में विशेष उत्कर्ष के प्रबल योग हैं।`
      },
      wealth: {
        title: "३. करियर, आजीविका, व्यवसाय एवं धन योग (द्वितीय, दशम व एकादश भाव)",
        summary: `द्वितीय (धन-कोष) भाव में ${getHouseSummaryPlanets(2)}, दशम (कर्म) भाव में ${getHouseSummaryPlanets(10)} और एकादश (लाभ) भाव में ${getHouseSummaryPlanets(11)} के परस्पर संबंध से आपकी कुंडली में स्व-अर्जित ऐश्वर्य एवं धन-लक्ष्मी योग निर्मित हो रहा है। देवगुरु बृहस्पति (${jupPlanet.rashiName}, भाव ${jupHouse}) एवं शुक्र (${venPlanet.rashiName}, भाव ${venHouse}) के प्रभाव से जीवन में स्थायी भूमि-भवन, उत्तम वाहन और संचित कोष में निरंतर वृद्धि सुनिश्चित है।`,
        highlights: [
          `धन भाव (${getHouseSummaryPlanets(2)}) एवं लाभ भाव (${getHouseSummaryPlanets(11)}) के बल से एकाधिक स्रोतों से धनागमन`,
          `चतुर्थ भाव (${RASHI_DATA[safeMod(lagnaNumber - 1 + 3, 12)].name}, सुखेश/चतुर्थेश: ${RASHI_DATA[safeMod(lagnaNumber - 1 + 3, 12)].lord} • ${getHouseSummaryPlanets(4)}) एवं शुक्र के प्रभाव से स्थायी भूमि, निजी भवन निर्माण एवं वाहन सुख का प्रबल योग`,
          `सक्रिय ${activeMahaObj.planet.split(" ")[0]} महादशा में वरिष्ठजनों एवं व्यापारिक संपर्कों से दीर्घकालीन आर्थिक लाभ`
        ]
      },
      marriage: {
        title: "४. पारिवारिक सौख्य, दांपत्य जीवन एवं संबंध (चतुर्थ व सप्तम भाव विश्लेषण)",
        summary: `चतुर्थ (गृह सुख) भाव में ${RASHI_DATA[safeMod(lagnaNumber - 1 + 3, 12)].name} राशि (सुखेश/चतुर्थेश: ${RASHI_DATA[safeMod(lagnaNumber - 1 + 3, 12)].lord}${lagnaNumber === 2 ? "; शनि योगकारक नवमेश-दशमेश" : ""}, स्थिति: ${getHouseSummaryPlanets(4)}) तथा सप्तम (दांपत्य एवं साझेदारी) भाव में ${getHouseSummaryPlanets(7)} के सूक्ष्म पाराशरी विश्लेषण से स्पष्ट है कि आपका पारिवारिक एवं वैवाहिक जीवन सौहार्दपूर्ण, संस्कारित और परस्पर विश्वास से परिपूर्ण रहेगा। नवांश (D-9) कुंडली में भी लग्न राशि (${RASHI_DATA[safeMod(navamsaLagnaRashi - 1, 12)].name}) दांपत्य सुख को सुदृढ़ बना रही है।`,
        spouseNature: "सौम्य, सुशिक्षित व आकर्षक व्यक्तित्व, सनातन संस्कारों से युक्त, परिवार को जोड़कर चलने वाला और हर परिस्थिति में साथ निभाने वाला।",
        bestMarriageAge: `सप्तम भाव (${getHouseSummaryPlanets(7)}) एवं नवांश (D-9) चक्र के अनुसार दांपत्य सुख एवं पारिवारिक स्थिरता की दृष्टि से कुंडली के ग्रह अनुकूल हैं।`
      },
      education: {
        title: "५. शास्त्रोक्त वैदिक उपाय, बुद्धि-प्रज्ञा एवं आध्यात्मिक सिद्धि (पंचम व नवम त्रिकोण)",
        summary: `पंचम (प्रज्ञा एवं पूर्वपुण्य) त्रिकोण (${getHouseSummaryPlanets(5)}) और नवम (धर्म एवं भाग्य) त्रिकोण (${getHouseSummaryPlanets(9)}) के शुभ संयोग तथा बुध (भाव ${mercHouse}, ${mercPlanet.degree}) व गुरु (भाव ${jupHouse}, ${jupPlanet.degree}) की स्थिति से आपकी स्मरण शक्ति, शास्त्र-चिंतन, गूढ़ विद्या और निर्णय क्षमता अत्यंत प्रखर रहेगी।`
      },
      health: {
        title: "६. स्वास्थ्य, नाड़ी बल एवं प्राण-ऊर्जा (लग्न, षष्ठ भाव व आयुर्वेदिक विचार)",
        summary: `${lagnaData.name} लग्न, षष्ठ भाव (${getHouseSummaryPlanets(6)}) एवं ${nakshatraObj.nadi} के अनुसार आपकी नैसर्गिक रोग-प्रतिरोधक क्षमता और प्राण-ऊर्जा सुदृढ़ रहेगी। केवल ऋतु परिवर्तन और अत्यधिक मानसिक कार्यभार के समय वात-पित्त-कफ के संतुलन तथा नियमित सात्त्विक दिनचर्या का ध्यान रखना आपके दीर्घायुष्य व ओज को अक्षुण्ण रखेगा।`,
        careAreas: [
          `${nakshatraObj.nadi} के अनुसार ऋतु परिवर्तन में गले, पाचन तंत्र एवं त्रिदोष संतुलन का विशेष ध्यान रखें`,
          "अत्यधिक मानसिक श्रम के बीच पर्याप्त निद्रा, तांबे के पात्र का जल और प्रातः भ्रमण अपनाएं",
          "नियमित प्रातः सूर्योदय काल में तांबे के लोटे से सूर्य अर्घ्य, प्राणायाम और सात्त्विक आहार अमृत समान लाभकारी रहेगा"
        ]
      }
    },
    remedies: {
      strengths: [
        `लग्नेश ${lagnaData.lord} और राशि स्वामी ${moonData.lord} का शुभ समन्वय आपको आकर्षक व्यक्तित्व, आत्मबल व मानसिक दृढ़ता प्रदान करता है।`,
        `जन्म नक्षत्र ${nakshatraObj.name} (चरण ${nakshatraPada}, स्वामी: ${nakshatraObj.lord}) आपको समाज में विश्वसनीय, न्यायप्रिय और सम्मानित बनाता है।`,
        `कुंडली में निर्मित ${rajYogas.map((y) => y.name.split(" (")[0]).join(", ")} आपके ज्ञान, वाणी और कर्म को सार्थक बनाते हैं।`
      ],
      precautions: [
        "राहुकाल में तथा भावनाओं या आवेश में बहकर कोई बड़ा आर्थिक या व्यावसायिक निर्णय न लें।",
        "अपनी महत्वपूर्ण कार्य-योजनाएं एवं व्यापारिक रणनीतियां पूर्ण होने से पूर्व गोपनीय रखें।",
        `रत्न धारण करने से पूर्व ग्रहों के अंश (डिग्री) व दशा का विचार अवश्य करें (आपके लग्न हेतु ${lagnaData.gemstone} परम शुभ है)।`
      ],
      upayList: [
        `इष्ट उपासना एवं बीज मंत्र जप: प्रतिदिन प्रातः स्नान के पश्चात ${lagnaData.ishta} का ध्यान करें और सिद्ध बीज मंत्र "${lagnaData.mantra}" का रुद्राक्ष/तुलसी माला से १ माला (१०८ बार) जप करें।`,
        `शास्त्रोक्त रत्न एवं उपरत्न विधान: लग्नेश ${lagnaData.lord} के बल संवर्धन हेतु शुक्ल पक्ष के शुभ मुहूर्त में अभिमंत्रित ${lagnaData.gemstone} (अथवा उपरत्न: ${lagnaData.uparatna}) ${lagnaData.metal} में धारण करें।`,
        `रुद्राक्ष कवच एवं आध्यात्मिक रक्षा: मानसिक शांति, आरोग्य व नवग्रह अनुकूलता हेतु सोमवार या शुभ नक्षत्र में अभिमंत्रित ${lagnaData.rudraksha} लाल या पीले धागे में धारण करें।`,
        `नित्य वैदिक दान एवं पुण्य विधान: प्रातः तांबे के लोटे में लाल चंदन व अक्षत डालकर भगवान सूर्यनारायण को अर्घ्य दें, गौमाता को गुड़-रोटी खिलाएं तथा ${lagnaData.days} को अन्न/पीले फल का दान करें।`
      ]
    },
    deepAnalysis: (() => {
      const shoda = computeShodashavargaCharts(lagnaSiderealLon, planets);
      const jaiminiData = computeJaiminiData(lagnaNumber, planets, year);
      const BHAVA_META = [
        { title: "प्रथम (तनु/लग्न भाव)", domain: "देह, व्यक्तित्व, आत्मविश्वास व आरोग्य", focus: "स्व-विकास और जीवन दिशा" },
        { title: "द्वितीय (धन/कुटुम्ब भाव)", domain: "संचित धन, वाणी, परिवार व संस्कार", focus: "आर्थिक संचय और पारिवारिक समृद्धि" },
        { title: "तृतीय (सहज/पराक्रम भाव)", domain: "साहस, पुरुषार्थ, लेखन व छोटे भाई-बहन", focus: "स्व-प्रयास, संचार और यात्रा लाभ" },
        { title: "चतुर्थ (सुख/मातृ भाव)", domain: "माता, भूमि-भवन, वाहन व मानसिक शांति", focus: "अचल संपत्ति और गृह सौख्य" },
        { title: "पंचम (विद्या/संतान भाव)", domain: "बुद्धि-प्रज्ञा, उच्च शिक्षा, संतान व पूर्वपुण्य", focus: "रचनात्मकता और संतान उन्नति" },
        { title: "षष्ठ (रिपु/सेवा भाव)", domain: "प्रतियोगिता, रोग-ऋण मुक्ति व सेवा कार्य", focus: "शत्रु विजय और कार्यक्षमता" },
        { title: "सप्तम (जाया/साझेदारी भाव)", domain: "दांपत्य जीवन, जीवनसाथी व व्यापारिक साझेदारी", focus: "वैवाहिक सामंजस्य और जनसंपर्क" },
        { title: "अष्टम (आयु/गूढ़ भाव)", domain: "दीर्घायु, शोध, गूढ़ ज्ञान व आकस्मिक लाभ", focus: "आध्यात्मिक गहराई और पैतृक निधि" },
        { title: "नवम (भाग्य/धर्म भाव)", domain: "भाग्योदय, धर्म-कर्म, गुरु कृपा व उच्च यात्रा", focus: "परम सौभाग्य और तीर्थ/उच्च शिक्षा" },
        { title: "दशम (कर्म/राज्य भाव)", domain: "करियर, पद-प्रतिष्ठा, पिता व राजयोग", focus: "व्यावसायिक नेतृत्व और सामाजिक सम्मान" },
        { title: "एकादश (लाभ/आय भाव)", domain: "निरंतर आय, बड़े भाई-बहन व मनोकामना सिद्धि", focus: "बहु-आयामी धन-लाभ और मित्र सहयोग" },
        { title: "द्वादश (व्यय/मोक्ष भाव)", domain: "विदेश संपर्क, आध्यात्मिक मुक्ति व निवेश", focus: "सात्विक व्यय नियंत्रण और मोक्ष साधना" }
      ];
      const lordHindiToId = {
        सूर्य: "sun",
        चंद्र: "moon",
        चन्द्र: "moon",
        मंगल: "mars",
        बुध: "mercury",
        गुरु: "jupiter",
        शुक्र: "venus",
        शनि: "saturn"
      };
      const findPlanetByShortLord = (lordStr) => {
        const clean = lordStr.split(" ")[0].trim();
        const pid = lordHindiToId[clean];
        return planets.find((pl) => pl.id === pid);
      };
      const BHAVA_LORD_TITLES_HI = {
        1: "लग्नेश",
        2: "धनेश",
        3: "पराक्रमेश",
        4: "सुखेश",
        5: "पंचमेश",
        6: "षष्ठेश",
        7: "सप्तमेश",
        8: "अष्टमेश",
        9: "भाग्येश",
        10: "कर्मेश",
        11: "लाभेश",
        12: "द्वादशेश"
      };
      const HOUSE_THEME_TAIL_HI = {
        1: "व्यक्तित्व, आत्मबल एवं स्वयं के पुरुषार्थ",
        2: "संचित धन, कुटुम्ब-सहयोग एवं वाणी-कौशल",
        3: "साहस, संचार, यात्रा व स्व-उद्यम",
        4: "भवन, भूमि, वाहन, माता का सुख एवं प्रशासनिक स्थायित्व",
        5: "विद्या, विवेक, संतान सुख, मंत्रणा एवं रचनात्मक नेतृत्व",
        6: "प्रतिस्पर्धा, सेवा-भाव, ऋण-नियंत्रण एवं रोग-शत्रु विजय",
        7: "दांपत्य समन्वय, साझेदारी एवं जन-प्रतिष्ठा",
        8: "गहन शोध, गूढ़ विद्या, पैतृक विषय एवं दीर्घकालिक परिवर्तन",
        9: "भाग्य, धर्म, उच्च शिक्षा एवं गुरु-आशीर्वाद",
        10: "करियर, राजकीय पद-प्रतिष्ठा, कर्म-क्षेत्र एवं नेतृत्व",
        11: "निरंतर आय, सामाजिक विस्तार एवं मनोकामना पूर्ति",
        12: "विदेश-संपर्क, आध्यात्मिक उन्नति एवं व्यय-संतुलन"
      };
      const BHAVA_KENDRA_TRIKONA_SPECIAL_HI = {
        1: (h) => h === 10 ? "लग्नेश का दशम कर्म स्थान में जाना स्वनिर्मित करियर उत्थान, प्रशासनिक मान-सम्मान और स्वतंत्र नेतृत्व-क्षमता प्रदान करता है।" : `लग्नेश का ${h}वें शुभ भाव में स्थित होना जातक के स्वास्थ्य, आत्मविश्वास और ${HOUSE_THEME_TAIL_HI[h]} के माध्यम से जीवन में सुदृढ़ पहचान दिलाता है।`,
        2: (h) => h === 10 ? "धनेश का दशम कर्म भाव में होना आजीविका, व्यवसाय और पद-प्रतिष्ठा के द्वारा स्थायी धन-संचय व पारिवारिक समृद्धि का प्रबल योग बनाता है।" : h === 11 ? "धनेश का एकादश लाभ भाव में जाना बहुमुखी आय-स्रोतों, वाणी से लाभ और संचित कोष में निरंतर वृद्धि का उत्कृष्ट संकेत है।" : `धनेश का ${h}वें भाव में शुभ संयोग ${HOUSE_THEME_TAIL_HI[h]} के द्वारा आर्थिक सुरक्षा, कुटुम्ब सम्मान और स्थायी कोष-वृद्धि दिलाता है।`,
        3: (h) => h === 10 ? "पराक्रमेश का दशम भाव में जाना स्वयं के साहस, लेखन-संवाद और व्यावहारिक पहल से कार्यक्षेत्र में विशिष्ट ऊँचाई दिलाता है।" : `पराक्रमेश की ${h}वें भाव में अनुकूल स्थिति उद्यमशीलता, सहयोगी संबंधों तथा ${HOUSE_THEME_TAIL_HI[h]} में सक्रिय सफलता देती है।`,
        4: (h) => h === 10 ? "सुखेश का दशम कर्म भाव में स्थित होना अचल संपत्ति, भूमि-भवन, वाहन सुख तथा राजकीय या संस्थागत पद-प्रतिष्ठा का उत्तम संयोग बनाता है।" : h === 9 ? "सुखेश का नवम भाग्य स्थान में जाना पैतृक आशीर्वाद, उत्तम गृह-सुख और धर्मोचित संपत्ति-वृद्धि प्रदान करता है।" : `सुखेश की ${h}वें स्थान में शुभ स्थिति मानसिक शांति, गृह-सौख्य तथा ${HOUSE_THEME_TAIL_HI[h]} से स्थायी सुख-साधन दिलाती है।`,
        5: (h) => h === 10 ? "पंचमेश का दशम कर्म स्थान में विराजमान होना राजयोग-तुल्य केंद्र-त्रिकोण संबंध बनाता है — प्रखर बुद्धि, शिक्षा, सलाहकारी नेतृत्व व संतान पक्ष से विशेष यश मिलता है।" : h === 9 ? "पंचमेश का नवम भाव में जाना उच्च विद्या, आध्यात्मिक विवेक और प्रबल भाग्योदय का दुर्लभ त्रिकोण योग निर्मित करता है।" : `पंचमेश की ${h}वें शुभ भाव में उपस्थिति बौद्धिक प्रखरता, सृजनशीलता व ${HOUSE_THEME_TAIL_HI[h]} द्वारा श्रेष्ठ मान-सम्मान दिलाती है।`,
        7: (h) => h === 10 ? "सप्तमेश का दशम भाव में होना जीवनसाथी अथवा व्यापारिक साझेदारी के सहयोग से करियर और सामाजिक प्रतिष्ठा में उल्लेखनीय उत्थान दिलाता है।" : `सप्तमेश का ${h}वें भाव में शुभ स्थित होना दांपत्य तालमेल, विश्वसनीय साझेदारी और ${HOUSE_THEME_TAIL_HI[h]} में सौहार्दपूर्ण उन्नति देता है।`,
        9: (h) => h === 10 ? "भाग्येश का दशम कर्म स्थान में होना प्रसिद्ध धर्म-कर्माधिपति राजयोग बनाता है — कर्म के साथ प्रबल भाग्य-सहयोग, पदोन्नति और दीर्घकालिक यश प्राप्त होता है।" : `भाग्येश की ${h}वें भाव में शुभ स्थिति गुरुकृपा, धर्म-निष्ठा व ${HOUSE_THEME_TAIL_HI[h]} में सहज भाग्योदय प्रदान करती है।`,
        10: (h) => h === 11 ? "कर्मेश का एकादश लाभ स्थान में जाना उच्च कार्य-प्रतिफल, पदोन्नति, व्यावसायिक विस्तार और प्रभावशाली सामाजिक नेटवर्क का प्रबल योग बनाता है।" : `कर्मेश का ${h}वें शुभ स्थान में स्थित होना कार्यकौशल, उत्तरदायित्व व ${HOUSE_THEME_TAIL_HI[h]} के माध्यम से स्थायी आजीविका-सिद्धि दिलाता है।`,
        11: (h) => h === 10 ? "लाभेश का दशम कर्म भाव में स्थित होना परिश्रम का सीधा आर्थिक लाभ, व्यावसायिक ख्याति और उच्च लक्ष्य-सिद्धि प्रदान करता है।" : `लाभेश का ${h}वें भाव में अनुकूल संयोग आय के विविध स्रोतों, मित्र-सहयोग और ${HOUSE_THEME_TAIL_HI[h]} से निरंतर लाभ दिलाता है।`
      };
      const getHouseOutcomeNote = (bhavaIdx, lordPlacedH) => {
        const isDusthanaHouse = [6, 8, 12].includes(bhavaIdx);
        const trikonaOrKendra = [1, 4, 5, 7, 9, 10, 11].includes(lordPlacedH);
        const dusthana = [6, 8, 12].includes(lordPlacedH);
        const lordTitle = BHAVA_LORD_TITLES_HI[bhavaIdx] || "भावेश";
        const targetTheme = HOUSE_THEME_TAIL_HI[lordPlacedH] || "संबंधित जीवन क्षेत्र";
        if (bhavaIdx === lordPlacedH) {
          if (isDusthanaHouse) {
            return `${lordTitle} अपने ही भाव में स्वगृही होकर इस दुःस्थान के अशुभ प्रभावों को नियंत्रित करते हैं — धैर्य और सतत परिश्रम से चुनौतियों पर विजय प्राप्त होती है।`;
          }
          return `${lordTitle} स्वयं स्वगृही होकर अपने ही भाव में विराजमान हैं — इससे ${HOUSE_THEME_TAIL_HI[bhavaIdx]} के शुभ फलों की अद्भुत रक्षा एवं स्थायी वृद्धि सुनिश्चित होती है।`;
        }
        if (trikonaOrKendra) {
          if (isDusthanaHouse) {
            if (bhavaIdx === 6) {
              return `षष्ठेश का ${lordPlacedH}वें भाव में स्थित होना बताता है कि यह क्षेत्र सहज नहीं, बल्कि निरंतर परिश्रम, प्रतिस्पर्धा, सेवा-भाव और अनुशासित कार्यशैली के माध्यम से सफलता व विजय दिलाता है।`;
            }
            if (bhavaIdx === 8) {
              return `अष्टमेश का ${lordPlacedH}वें भाव में स्थित होना गहन शोध, धैर्य और समय-समय पर आने वाले परिवर्तनों के कुशल प्रबंधन से दीर्घकालिक उन्नति का संकेत देता है — बड़े निर्णयों में जल्दबाजी से बचें।`;
            }
            return `द्वादशेश का ${lordPlacedH}वें भाव में स्थित होना दर्शाता है कि सफलता सहज रूप से नहीं, बल्कि निरंतर परिश्रम, बाहरी या विदेशी संपर्कों, व्यय-अनुशासन अथवा कार्यक्षेत्र में सुनियोजित परिवर्तनों के माध्यम से प्राप्त होगी।`;
          }
          const customFn = BHAVA_KENDRA_TRIKONA_SPECIAL_HI[bhavaIdx];
          if (customFn) return customFn(lordPlacedH);
          return `${lordTitle} का ${lordPlacedH}वें भाव में शुभ संयोग ${targetTheme} के माध्यम से स्थिर उन्नति और दीर्घकालिक सफलता प्रदान करता है।`;
        }
        if (dusthana) {
          return `${lordTitle} के ${lordPlacedH}वें भाव में होने से ${HOUSE_THEME_TAIL_HI[bhavaIdx]} के क्षेत्र में प्रारंभिक परिश्रम, संयम और धैर्य के उपरांत ही परिपक्व व स्थायी परिणाम प्राप्त होते हैं।`;
        }
        return `${lordTitle} की ${lordPlacedH}वें भाव में स्थिति ${targetTheme} तथा नियमित प्रयास के माध्यम से ${HOUSE_THEME_TAIL_HI[bhavaIdx]} में क्रमिक प्रगति का संकेत देती है।`;
      };
      const allTwelveBhavas = lagnaChart.map((h, i) => {
        const meta = BHAVA_META[i];
        const rashiObj = RASHI_DATA[safeMod(h.rashiNumber - 1, 12)];
        const lordPl = findPlanetByShortLord(rashiObj.lord);
        const lordH = lordPl?.houseInLagna || h.houseNumber;
        const occPlanets = planets.filter((pl) => pl.houseInLagna === h.houseNumber);
        const occText = occPlanets.length > 0 ? occPlanets.map((pl) => `${pl.hindiName.split(" ")[0]} (${pl.degree}, ${pl.dignity.split(" ")[0]})`).join(", ") : "रिक्त (भावेश एवं दृष्टि प्रभाव से फलित)";
        const hasBeneficOcc = occPlanets.some((pl) => ["jupiter", "venus", "moon", "mercury"].includes(pl.id) || pl.isExalted);
        const isDusthanaBhava = [6, 8, 12].includes(h.houseNumber);
        const strengthLabel = isDusthanaBhava ? h.houseNumber === lordH ? "शुभ" : "मध्यम" : h.houseNumber === lordH || [1, 4, 5, 7, 9, 10, 11].includes(lordH) && hasBeneficOcc ? "प्रबल" : [1, 2, 4, 5, 7, 9, 10, 11].includes(lordH) ? "शुभ" : "मध्यम";
        const occDetail = occPlanets.length > 0 ? `यहाँ ${occPlanets.map((pl) => pl.hindiName.split(" ")[0]).join(" व ")} की उपस्थिति ${meta.focus} को सीधे सक्रिय कर रही है। ` : `इस भाव में कोई ग्रह न होने से इसका संपूर्ण फल भावेश ${rashiObj.lord.split(" ")[0]} (${lordH}वें भाव) की दशा में प्रकट होगा। `;
        return {
          house: h.houseNumber,
          bhavaName: meta.title,
          rashi: rashiObj.name,
          lord: rashiObj.lord,
          lordPlacementHouse: lordH,
          occupants: occText,
          strengthLabel,
          prediction: `${meta.domain} का यह भाव ${rashiObj.name} राशि के अंतर्गत है। ${occDetail}${getHouseOutcomeNote(h.houseNumber, lordH)}`
        };
      });
      const d9LagnaData = RASHI_DATA[safeMod(navamsaLagnaRashi - 1, 12)];
      const d9SeventhRashi = safeMod(navamsaLagnaRashi - 1 + 6, 12) + 1;
      const d9SeventhData = RASHI_DATA[d9SeventhRashi - 1];
      const d9SeventhLordPl = findPlanetByShortLord(d9SeventhData.lord);
      const d9SeventhHouse = navamsaChart.find((hh) => hh.planets.some((pp) => pp.hindiName.startsWith(d9SeventhData.lord.split(" ")[0])))?.houseNumber || d9SeventhLordPl?.houseInLagna || 7;
      const d10Div = shoda.find((d) => d.id === "D10");
      const d10LagnaNum = d10Div?.houses[0]?.rashiNumber || lagnaNumber;
      const d10LagnaData = RASHI_DATA[safeMod(d10LagnaNum - 1, 12)];
      const d10TenthRashi = safeMod(d10LagnaNum - 1 + 9, 12) + 1;
      const d10TenthData = RASHI_DATA[d10TenthRashi - 1];
      const d10TenthHouse = d10Div?.houses.find((hh) => hh.planets.some((pp) => pp.hindiName.startsWith(d10TenthData.lord.split(" ")[0])))?.houseNumber || 10;
      const akKaraka = jaiminiData.karakas[0];
      const akPlanet = planets.find((pl) => pl.hindiName === akKaraka?.planetHindi) || sunPlanet;
      const karakamshaDivPos = navamsaChart.find((hh) => hh.planets.some((pp) => pp.hindiName === akPlanet.hindiName));
      const karakamshaRashi = karakamshaDivPos?.rashiName || akPlanet.rashiName;
      const advancedYogasAndCancellations = [];
      const sunMercOrb = Math.abs(norm360$1(sunPlanet.siderealLon - mercPlanet.siderealLon));
      const cleanSunMercOrb = sunMercOrb > 180 ? 360 - sunMercOrb : sunMercOrb;
      if (sunHouse === mercHouse) {
        if (cleanSunMercOrb <= 4) {
          advancedYogasAndCancellations.push({
            name: "सूर्य-बुध निपुण योग (अति समीप अंश)",
            category: "Sankat",
            rule: `सूर्य व बुध के बीच मात्र ${cleanSunMercOrb.toFixed(1)}° की दूरी (अस्त/दग्ध प्रभाव)`,
            effect: "बुध सूर्य के अति निकट होने से निर्णय लेने में जल्दबाजी या वाणी की तीक्ष्णता से बचें; पन्ना/गायत्री मंत्र से प्रबल बुधादित्य बल जागृत होता है।"
          });
        } else {
          advancedYogasAndCancellations.push({
            name: "प्रबल अनस्त बुधादित्य राजयोग",
            category: "Rajyoga",
            rule: `भाव ${sunHouse} में सूर्य व बुध ${cleanSunMercOrb.toFixed(1)}° की शुद्ध दूरी पर`,
            effect: "अत्यन्त स्पष्ट और अबाधित बुधादित्य योग — उच्च प्रशासनिक क्षमता, लेखन/बौद्धिक प्रखरता एवं राजकीय प्रतिष्ठा सुनिश्चित है।"
          });
        }
      }
      const h6Lord = findPlanetByShortLord(RASHI_DATA[safeMod(lagnaNumber - 1 + 5, 12)].lord);
      const h8Lord = findPlanetByShortLord(RASHI_DATA[safeMod(lagnaNumber - 1 + 7, 12)].lord);
      const h12Lord = findPlanetByShortLord(RASHI_DATA[safeMod(lagnaNumber - 1 + 11, 12)].lord);
      const vipreetHits = [];
      if (h6Lord && [6, 8, 12].includes(h6Lord.houseInLagna)) vipreetHits.push(`हर्ष योग (षष्ठेश ${h6Lord.hindiName.split(" ")[0]} भाव ${h6Lord.houseInLagna} में)`);
      if (h8Lord && [6, 8, 12].includes(h8Lord.houseInLagna)) vipreetHits.push(`सरल योग (अष्टमेश ${h8Lord.hindiName.split(" ")[0]} भाव ${h8Lord.houseInLagna} में)`);
      if (h12Lord && [6, 8, 12].includes(h12Lord.houseInLagna)) vipreetHits.push(`विमल योग (द्वादशेश ${h12Lord.hindiName.split(" ")[0]} भाव ${h12Lord.houseInLagna} में)`);
      if (vipreetHits.length > 0) {
        advancedYogasAndCancellations.push({
          name: "विपरीत राजयोग (Vipreet Rajyoga)",
          category: "Rajyoga",
          rule: vipreetHits.join(" • "),
          effect: "संकटों और प्रतिस्पर्धाओं के बीच से अचानक अप्रत्याशित पदोन्नति, शत्रु पर विजय व बड़ी सफलता प्रदान करने वाला दुर्लभ योग।"
        });
      }
      const debPlanets = planets.filter((pl) => pl.isDebilitated);
      debPlanets.forEach((dp) => {
        const dispLord = findPlanetByShortLord(RASHI_DATA[dp.rashiNumber - 1].lord);
        const dispInKendra = dispLord && ([1, 4, 7, 10].includes(dispLord.houseInLagna) || [1, 4, 7, 10].includes(dispLord.houseInChandra));
        if (dispInKendra || dp.isRetrograde) {
          advancedYogasAndCancellations.push({
            name: `नीचभंग राजयोग (${dp.hindiName.split(" ")[0]})`,
            category: "Cancellation",
            rule: `${dp.hindiName.split(" ")[0]} नीच राशि ${dp.rashiName.split(" ")[0]} में होने पर भी राशिपति केंद्र में/वक्री बल से नीचत्व भंग`,
            effect: "प्रारंभिक संघर्ष के पश्चात् यही ग्रह शून्य से शिखर तक पहुंचाने वाला प्रबल राजयोग फल प्रदान करता है।"
          });
        }
      });
      const moonAdjPlanets = sevenPlanets.filter(
        (pl) => pl.id !== "moon" && [2, 12].includes(safeMod(pl.houseInChandra - 1, 12) + 1)
      );
      if (moonAdjPlanets.length === 0) {
        const kendraFromMoon = sevenPlanets.some(
          (pl) => pl.id !== "moon" && [1, 4, 7, 10].includes(pl.houseInChandra)
        );
        advancedYogasAndCancellations.push({
          name: kendraFromMoon ? "केमद्रुम दोष भंग (केंद्र योग से निरस्त)" : "केमद्रुम योग (चंद्र एकाकी स्थिति)",
          category: kendraFromMoon ? "Cancellation" : "Sankat",
          rule: `चंद्रमा (${moonData.name}) से द्वितीय एवं द्वादश भाव रिक्त होने पर भी ${kendraFromMoon ? "चंद्र/लग्न केंद्र में शुभ ग्रह होने से भंग" : "मनोबल वृद्धि हेतु शिव आराधना आवश्यक"}`,
          effect: kendraFromMoon ? "केंद्र में ग्रहों की उपस्थिति के कारण केमद्रुम दोष स्वतः निरस्त होकर कल्पद्रुम के समान आत्मनिर्भर सफलता देता है।" : "मानसिक एकाकीपन या उतार-चढ़ाव से बचने हेतु सोमवार को शिवलिंग पर दुग्ध/जल अर्पित करें और मोती/चांदी धारण करें।"
        });
      }
      const h2Lord = findPlanetByShortLord(RASHI_DATA[safeMod(lagnaNumber - 1 + 1, 12)].lord);
      const h11Lord = findPlanetByShortLord(RASHI_DATA[safeMod(lagnaNumber - 1 + 10, 12)].lord);
      if (h2Lord && h11Lord) {
        const diff2And11 = safeMod(h11Lord.houseInLagna - h2Lord.houseInLagna, 12) + 1;
        if ([1, 4, 5, 7, 9, 10].includes(diff2And11) || h2Lord.houseInLagna === 11 || h11Lord.houseInLagna === 2) {
          advancedYogasAndCancellations.push({
            name: "कुबेर एवं संचित धन योग (Dhana Yoga)",
            category: "Dhana",
            rule: `धनेश ${h2Lord.hindiName.split(" ")[0]} (भाव ${h2Lord.houseInLagna}) एवं लाभेश ${h11Lord.hindiName.split(" ")[0]} (भाव ${h11Lord.houseInLagna}) का शुभ संबंध`,
            effect: "नियमित आय, एकाधिक स्रोतों से धनागमन और परिवार में स्थायी लक्ष्मी-कोष संचय का प्रबल योग।"
          });
        }
      }
      if (isMarsInManglikLagna && isManglikCancelled) {
        advancedYogasAndCancellations.push({
          name: "शास्त्रोक्त मांगलिक दोष परिहार सिद्ध",
          category: "Cancellation",
          rule: `मंगल भाव ${marsHouse} (${marsPlanet.rashiName.split(" ")[0]}) में किंतु स्वराशि/गुरु दृष्टि से परिहार`,
          effect: "विवाह व दांपत्य में मंगल का अशुभ प्रभाव स्वतः शमित हो चुका है; मंगल ऊर्जा साहस व प्रशासनिक उन्नति देगी।"
        });
      }
      if (advancedYogasAndCancellations.length < 3) {
        advancedYogasAndCancellations.push({
          name: "त्रिकोण-केंद्र श्री वृद्धि समन्वय",
          category: "Dhana",
          rule: `लग्नेश ${lagnaData.lord.split(" ")[0]} व पंचम/नवम भाव का संतुलित योग`,
          effect: "नियमित धर्म-कर्म, सत्यनिष्ठा और सद्बुद्धि के बल पर निरंतर सम्मान एवं स्थिर आर्थिक उन्नति प्राप्त होगी।"
        });
      }
      const pickDashaForAge = (targetAge) => {
        const targetYear = year + targetAge;
        return mahadashas.find((m) => targetYear >= m.startYear && targetYear <= m.endYear) || mahadashas.find((m) => m.isCurrent) || mahadashas[0];
      };
      const dEdu = pickDashaForAge(20);
      const dCareer = pickDashaForAge(29);
      const dMarriage = pickDashaForAge(26);
      const dWealthPeak = pickDashaForAge(38);
      const lifeTimelineWindows = [
        {
          area: "शिक्षा, प्रज्ञा एवं कौशल आधार",
          windowLabel: `आयु 17–24 वर्ष (${year + 17}–${year + 24})`,
          dashaLink: `${dEdu?.planet || "बुध"} महादशा प्रभाव`,
          forecast: `पंचम भाव (${getHouseSummaryPlanets(5)}) एवं ${dEdu?.planet || "गुरु"} के प्रभाव से तकनीकी, वाणिज्यिक अथवा शास्त्रीय अध्ययन में मजबूत नींव तैयार होगी।`
        },
        {
          area: "विवाह, संबंध एवं गृहस्थ स्थापना",
          windowLabel: `आयु 23–30 वर्ष (${year + 23}–${year + 30})`,
          dashaLink: `${dMarriage?.planet || "शुक्र"} महादशा / सप्तम भाव`,
          forecast: `सप्तम भाव (${getHouseSummaryPlanets(7)}) एवं नवांश (D-9 ${d9LagnaData.name}) के योग से योग्य जीवनसाथी की प्राप्ति एवं पारिवारिक सौख्य बढ़ेगा।`
        },
        {
          area: "करियर उछाल, पदोन्नति एवं प्रतिष्ठा",
          windowLabel: `आयु 28–36 वर्ष (${year + 28}–${year + 36})`,
          dashaLink: `${dCareer?.planet || "सूर्य"} महादशा / दशमांश D-10`,
          forecast: `दशम भाव (${getHouseSummaryPlanets(10)}) एवं दशमांश (D-10 ${d10LagnaData.name}) के समन्वय से स्वतंत्र व्यवसाय या उच्च प्रशासनिक नेतृत्व में तीव्र उत्कर्ष होगा।`
        },
        {
          area: "अचल संपत्ति, वाहन व आध्यात्मिक ऐश्वर्य",
          windowLabel: `आयु 36–48 वर्ष (${year + 36}–${year + 48})`,
          dashaLink: `${dWealthPeak?.planet || "गुरु"} महादशा / चतुर्थ-लाभ भाव`,
          forecast: `चतुर्थ भाव (${getHouseSummaryPlanets(4)}) व एकादश भाव (${getHouseSummaryPlanets(11)}) के बल से स्थायी भूमि-भवन निर्माण व संचित कोष में बड़ी वृद्धि सुनिश्चित है।`
        }
      ];
      const transitJupState = getGeocentricPlanetState("jupiter", nowJd);
      const transitJupLon = norm360$1(transitJupState.tropicalLon - nowAyanamsa);
      const transitJupRashi = safeMod(Math.floor(transitJupLon / 30), 12) + 1;
      const transitJupRashiName = RASHI_DATA[transitJupRashi - 1].name;
      const jupFromMoon = safeMod(transitJupRashi - moonRashiNumber, 12) + 1;
      const isJupTransitGood = [2, 5, 7, 9, 11].includes(jupFromMoon);
      const transitRahuTrop = getTrueRahuTropicalLongitude(nowJd);
      const transitRahuLon = norm360$1(transitRahuTrop - nowAyanamsa);
      const transitRahuRashi = safeMod(Math.floor(transitRahuLon / 30), 12) + 1;
      const transitRahuRashiName = RASHI_DATA[transitRahuRashi - 1].name;
      const rahuFromMoon = safeMod(transitRahuRashi - moonRashiNumber, 12) + 1;
      const isRahuGood = [3, 6, 11].includes(rahuFromMoon);
      const gocharSnapshot = {
        jupiterEffect: `वर्तमान गोचर में देवगुरु बृहस्पति ${transitJupRashiName} में आपकी चंद्र राशि (${moonData.name}) से ${jupFromMoon}वें भाव में संचरण कर रहे हैं — ${isJupTransitGood ? "यह परम शुभ वेध-रहित गुरु गोचर है: धन, विवाह, संतान व पदोन्नति के द्वार खुलेंगे।" : "मध्यम गुरु गोचर: बड़े निवेश में धैर्य रखें और गुरुवार को पीले चंदन व गायत्री मंत्र से शुभता बढ़ाएं।"}`,
        saturnEffect: sadeSatiExplanation,
        rahuKetuEffect: `गोचर राहु वर्तमान में ${transitRahuRashiName} में आपकी चंद्र राशि से ${rahuFromMoon}वें भाव में स्थित हैं — ${isRahuGood ? "३/६/११ भाव का राहु गोचर अदम्य साहस, अचानक धन-लाभ व विरोधियों पर विजय प्रदान करता है।" : "निर्णयों में भ्रम व अनावश्यक जल्दबाजी से बचें; पक्षियों को दाना व शनिवार को भैरव/हनुमान स्मरण अत्यंत लाभकारी रहेगा।"}`
      };
      const lalKitabAndVedicRemedies = [
        `लग्न एवं इष्ट कवच (${lagnaData.name}): प्रतिदिन प्रातः तांबे के लोटे से सूर्य को अर्घ्य दें और "${lagnaData.mantra}" की १ माला जप करें।`
      ];
      if (debPlanets.length > 0) {
        const dpNames = debPlanets.map((d) => d.hindiName.split(" ")[0]).join(" व ");
        lalKitabAndVedicRemedies.push(
          `नीच ग्रह संतुलन (${dpNames}): संबंधित ग्रह से जुड़े दिन (रविवार/मंगलवार/बुधवार/शनिवार) सात्विक अन्न-वस्त्र का गुप्त दान करें तथा रत्न बिना जांच के न पहनें।`
        );
      }
      if (isMarsInManglikLagna || marsHouse === 4 || marsHouse === 8) {
        lalKitabAndVedicRemedies.push(
          `लाल-किताब मंगल उपाय (भाव ${marsHouse}): मंगलवार को हनुमान जी को गुड़-चना या मीठी रोटी अर्पित करें और किसी से मुफ्त में लाल वस्तु या लोहा न लें।`
        );
      }
      if ([6, 8, 12].includes(rahuHouse)) {
        lalKitabAndVedicRemedies.push(
          `लाल-किताब राहु शांति (भाव ${rahuHouse}): घर की दहलीज या पूजा स्थान में चांदी की एक छोटी ठोस गोली रखें व संध्या समय घर में कपूर की धुनि दें।`
        );
      } else {
        lalKitabAndVedicRemedies.push(
          `लाल-किताब चंद्र-गुरु समृद्धि उपाय: केसर का तिलक मस्तक व नाभि पर लगाएं तथा पूर्णिमा के दिन घर में दूध-चावल की खीर कन्याओं या मंदिर में अर्पित करें।`
        );
      }
      if ([1, 2, 4, 8, 12].includes(shaniHouseFromNatalMoon)) {
        lalKitabAndVedicRemedies.push(
          `शनि गोचर रक्षा (${shaniHouseFromNatalMoon}वां भाव): शनिवार की शाम पीपल वृक्ष के नीचे सरसों के तेल का चौमुखी दीपक जलाएं और छाया दान करें।`
        );
      } else {
        lalKitabAndVedicRemedies.push(
          `बुध-लक्ष्मी व्यापारिक उपाय: बुधवार को गाय को हरा चारा या पालक खिलाएं और कन्याओं को हरी मिश्री/फल भेंट करें।`
        );
      }
      return {
        allTwelveBhavas,
        navamshaAndCareerDepth: {
          d9Lagna: d9LagnaData.name,
          seventhLordInD9: `नवांश सप्तमेश ${d9SeventhData.lord} (D-9 भाव ${d9SeventhHouse})`,
          d10Lagna: d10LagnaData.name,
          tenthLordInD10: `दशमांश दशमेश ${d10TenthData.lord} (D-10 भाव ${d10TenthHouse})`,
          karakamsha: `कारकांश लग्न: ${karakamshaRashi} (आत्मकारक: ${akKaraka?.planetHindi || "सूर्य"}${akKaraka?.degreeInRashi ? ` ${akKaraka.degreeInRashi}` : ""}${syncedJaimini.karakas[1] ? ` • अमात्यकारक: ${syncedJaimini.karakas[1].planetHindi} ${syncedJaimini.karakas[1].degreeInRashi}` : ""})`,
          spiritualAndCareerVerdict: `लग्न के साथ-साथ नवांश (D-9 लग्न: ${d9LagnaData.name}) वैवाहिक व धर्म बल को दर्शाता है, जबकि दशमांश (D-10 लग्न: ${d10LagnaData.name}) एवं कारकांश (${karakamshaRashi}) आपके कर्म-क्षेत्र, नेतृत्व और आध्यात्मिक उत्कर्ष की दिशा स्पष्ट करते हैं।`
        },
        advancedYogasAndCancellations,
        lifeTimelineWindows,
        gocharSnapshot,
        lalKitabAndVedicRemedies
      };
    })(),
    phase1Astronomy,
    shadbalaBhava,
    phase2Jyotish
  };
}
const HINDI_HOUSE_ORDINALS = {
  1: "प्रथम",
  2: "द्वितीय",
  3: "तृतीय",
  4: "चतुर्थ",
  5: "पंचम",
  6: "षष्ठ",
  7: "सप्तम",
  8: "अष्टम",
  9: "नवम",
  10: "दशम",
  11: "एकादश",
  12: "द्वादश"
};
function formatHindiHouseOrdinal(house) {
  return HINDI_HOUSE_ORDINALS[house] || `${house}वें`;
}
function formatHindiHousePhrase(house) {
  return `${formatHindiHouseOrdinal(house)} भाव`;
}
function formatHindiCountOrdinal(n) {
  if (n === 1) return "प्रथम";
  if (n === 2) return "द्वितीय";
  if (n === 3) return "तृतीय";
  if (n === 4) return "चतुर्थ";
  if (n === 6) return "छठे";
  return `${n}वें`;
}
const PLANET_RASHI_DIGNITY_REF = {
  sun: { debSign: 7, debLordId: "venus", exaltSign: 1, exaltLordId: "mars", ownSigns: [5] },
  moon: { debSign: 8, debLordId: "mars", exaltSign: 2, exaltLordId: "venus", ownSigns: [4] },
  mars: { debSign: 4, debLordId: "moon", exaltSign: 10, exaltLordId: "saturn", ownSigns: [1, 8] },
  mercury: { debSign: 12, debLordId: "jupiter", exaltSign: 6, exaltLordId: "mercury", ownSigns: [3, 6] },
  jupiter: { debSign: 10, debLordId: "saturn", exaltSign: 4, exaltLordId: "moon", ownSigns: [9, 12] },
  venus: { debSign: 6, debLordId: "mercury", exaltSign: 12, exaltLordId: "jupiter", ownSigns: [2, 7] },
  saturn: { debSign: 1, debLordId: "mars", exaltSign: 7, exaltLordId: "venus", ownSigns: [10, 11] }
};
function planetAspectsRashi(planetId, planetRashi, targetRashi) {
  const dist = (targetRashi - planetRashi + 12) % 12 + 1;
  if (dist === 1 || dist === 7) return true;
  if (planetId === "mars" && (dist === 4 || dist === 8)) return true;
  if (planetId === "jupiter" && (dist === 5 || dist === 9)) return true;
  if (planetId === "saturn" && (dist === 3 || dist === 10)) return true;
  return false;
}
function evaluateNeechabhanga(planetId, kundali) {
  if (!kundali) return { isDebilitated: false, isCancelled: false, reasons: [] };
  const p = kundali.planets.find((pl) => pl.id === planetId);
  if (!p || !p.isDebilitated && !p.dignity.includes("नीच")) {
    return { isDebilitated: false, isCancelled: false, reasons: [] };
  }
  const ref = PLANET_RASHI_DIGNITY_REF[planetId];
  if (!ref) return { isDebilitated: true, isCancelled: false, reasons: [] };
  const reasons = [];
  const debLord = kundali.planets.find((pl) => pl.id === ref.debLordId);
  const exaltLord = kundali.planets.find((pl) => pl.id === ref.exaltLordId);
  const kendras = [1, 4, 7, 10];
  if (debLord && ref.ownSigns.includes(debLord.rashiNumber)) {
    reasons.push("राशि परिवर्तन (परिवर्तन योग)");
  }
  if (debLord && (kendras.includes(debLord.houseInLagna) || kendras.includes(debLord.houseInChandra))) {
    reasons.push(`नीच राशिपति (${debLord.hindiName}) केन्द्रस्थ`);
  }
  if (exaltLord && (kendras.includes(exaltLord.houseInLagna) || kendras.includes(exaltLord.houseInChandra))) {
    reasons.push(`उच्च राशिपति (${exaltLord.hindiName}) केन्द्रस्थ`);
  }
  if (debLord && (debLord.isExalted || planetAspectsRashi(debLord.id, debLord.rashiNumber, p.rashiNumber))) {
    reasons.push(`नीच राशिपति (${debLord.hindiName}) का युति/दृष्टि या उच्च बल`);
  }
  const supportingExalted = kundali.planets.find(
    (other) => other.id !== p.id && other.isExalted && planetAspectsRashi(other.id, other.rashiNumber, p.rashiNumber)
  );
  if (supportingExalted) {
    reasons.push(`उच्च ग्रह (${supportingExalted.hindiName}) की युति/दृष्टि`);
  }
  const d9HouseWithPlanet = kundali.navamsaChart?.find(
    (h) => h.planets.some((hp) => hp.hindiName === p.hindiName || hp.shortHindi === p.shortHindi)
  );
  if (d9HouseWithPlanet && d9HouseWithPlanet.rashiNumber === ref.exaltSign) {
    reasons.push("नवांश (D-9) में उच्चस्थ");
  }
  return {
    isDebilitated: true,
    isCancelled: reasons.length > 0,
    reasons
  };
}
const VEDIC_RASHIS = [
  "मेष (Aries)",
  "वृषभ (Taurus)",
  "मिथुन (Gemini)",
  "कर्क (Cancer)",
  "सिंह (Leo)",
  "कन्या (Virgo)",
  "तुला (Libra)",
  "वृश्चिक (Scorpio)",
  "धनु (Sagittarius)",
  "मकर (Capricorn)",
  "कुंभ (Aquarius)",
  "मीन (Pisces)"
];
const VEDIC_NAKSHATRAS = [
  "अश्विनी (Ashwini)",
  "भरणी (Bharani)",
  "कृत्तिका (Krittika)",
  "रोहिणी (Rohini)",
  "मृगशिरा (Mrigashira)",
  "आर्द्रा (Ardra)",
  "पुनर्वसु (Punarvasu)",
  "पुष्य (Pushya)",
  "आश्लेषा (Ashlesha)",
  "मघा (Magha)",
  "पूर्वाफाल्गुनी (Purva Phalguni)",
  "उत्तराफाल्गुनी (Uttara Phalguni)",
  "हस्त (Hasta)",
  "चित्रा (Chitra)",
  "स्वाति (Swati)",
  "विशाखा (Vishakha)",
  "अनुराधा (Anuradha)",
  "ज्येष्ठा (Jyeshtha)",
  "मूल (Mula)",
  "पूर्वाषाढ़ा (Purva Ashadha)",
  "उत्तराषाढ़ा (Uttara Ashadha)",
  "श्रवण (Shravana)",
  "धनिष्ठा (Dhanishta)",
  "शतभिषा (Shatabhisha)",
  "पूर्वाभाद्रपद (Purva Bhadrapada)",
  "उत्तराभाद्रपद (Uttara Bhadrapada)",
  "रेवती (Revati)"
];
const AVAKAHADA_NAME_RULES$1 = [
  // 1. मेष (Aries)
  {
    rashi: "मेष (Aries)",
    nakshatra: "अश्विनी (Ashwini)",
    rashiLord: "मंगल (Mars)",
    element: "अग्नि (Fire)",
    symbol: "मेष (Ram)",
    aksharsHi: ["चू", "चे", "चो", "ला", "चु"],
    prefixesEn: ["chu", "che", "cho", "la"]
  },
  {
    rashi: "मेष (Aries)",
    nakshatra: "भरणी (Bharani)",
    rashiLord: "मंगल (Mars)",
    element: "अग्नि (Fire)",
    symbol: "मेष (Ram)",
    aksharsHi: ["ली", "लू", "ले", "लो", "लि", "लु", "ल"],
    prefixesEn: ["li", "lu", "le", "lo", "l"]
  },
  {
    rashi: "मेष (Aries)",
    nakshatra: "कृत्तिका (Krittika)",
    rashiLord: "मंगल (Mars)",
    element: "अग्नि (Fire)",
    symbol: "मेष (Ram)",
    aksharsHi: ["अं", "अः", "आ", "अ"],
    prefixesEn: ["aa", "an", "am", "a"]
  },
  // 2. वृषभ (Taurus)
  {
    rashi: "वृषभ (Taurus)",
    nakshatra: "कृत्तिका (Krittika)",
    rashiLord: "शुक्र (Venus)",
    element: "पृथ्वी (Earth)",
    symbol: "वृष/बैल (Bull)",
    aksharsHi: ["ई", "ऊ", "ए", "इ", "उ", "ऐ"],
    prefixesEn: ["ee", "oo", "ae", "i", "u", "e"]
  },
  {
    rashi: "वृषभ (Taurus)",
    nakshatra: "रोहिणी (Rohini)",
    rashiLord: "शुक्र (Venus)",
    element: "पृथ्वी (Earth)",
    symbol: "वृष/बैल (Bull)",
    aksharsHi: ["ओ", "औ", "वा", "वी", "वू", "वि", "वु", "व"],
    prefixesEn: ["va", "vi", "vu", "o", "v", "w"]
  },
  {
    rashi: "वृषभ (Taurus)",
    nakshatra: "मृगशिरा (Mrigashira)",
    rashiLord: "शुक्र (Venus)",
    element: "पृथ्वी (Earth)",
    symbol: "वृष/बैल (Bull)",
    aksharsHi: ["वे", "वो", "बा", "बी", "बू", "बे", "बो", "ब"],
    prefixesEn: ["ve", "vo", "ba", "bi", "bu", "be", "bo", "b"]
  },
  // 3. मिथुन (Gemini)
  {
    rashi: "मिथुन (Gemini)",
    nakshatra: "मृगशिरा (Mrigashira)",
    rashiLord: "बुध (Mercury)",
    element: "वायु (Air)",
    symbol: "युगल (Twins)",
    aksharsHi: ["का", "की", "कि", "क"],
    prefixesEn: ["ka", "ki", "k", "q"]
  },
  {
    rashi: "मिथुन (Gemini)",
    nakshatra: "आर्द्रा (Ardra)",
    rashiLord: "बुध (Mercury)",
    element: "वायु (Air)",
    symbol: "युगल (Twins)",
    aksharsHi: ["कू", "कु", "घ", "ङ", "छ"],
    prefixesEn: ["ku", "gh", "chh"]
  },
  {
    rashi: "मिथुन (Gemini)",
    nakshatra: "पुनर्वसु (Punarvasu)",
    rashiLord: "बुध (Mercury)",
    element: "वायु (Air)",
    symbol: "युगल (Twins)",
    aksharsHi: ["के", "को", "कौ", "हा"],
    prefixesEn: ["ke", "ko", "ha"]
  },
  // 4. कर्क (Cancer)
  {
    rashi: "कर्क (Cancer)",
    nakshatra: "पुनर्वसु (Punarvasu)",
    rashiLord: "चंद्र (Moon)",
    element: "जल (Water)",
    symbol: "कर्क/केकड़ा (Crab)",
    aksharsHi: ["ही", "हि", "ह"],
    prefixesEn: ["hi", "h"]
  },
  {
    rashi: "कर्क (Cancer)",
    nakshatra: "पुष्य (Pushya)",
    rashiLord: "चंद्र (Moon)",
    element: "जल (Water)",
    symbol: "कर्क/केकड़ा (Crab)",
    aksharsHi: ["हू", "हु", "हे", "हो", "डा"],
    prefixesEn: ["hu", "he", "ho", "da"]
  },
  {
    rashi: "कर्क (Cancer)",
    nakshatra: "आश्लेषा (Ashlesha)",
    rashiLord: "चंद्र (Moon)",
    element: "जल (Water)",
    symbol: "कर्क/केकड़ा (Crab)",
    aksharsHi: ["डी", "डू", "डे", "डो", "डि", "डु", "ड"],
    prefixesEn: ["dda", "ddi", "ddu", "dde", "ddo"]
  },
  // 5. सिंह (Leo)
  {
    rashi: "सिंह (Leo)",
    nakshatra: "मघा (Magha)",
    rashiLord: "सूर्य (Sun)",
    element: "अग्नि (Fire)",
    symbol: "सिंह/शेर (Lion)",
    aksharsHi: ["मा", "मी", "मू", "मे", "मि", "मु", "म"],
    prefixesEn: ["ma", "mi", "mu", "me", "m"]
  },
  {
    rashi: "सिंह (Leo)",
    nakshatra: "पूर्वाफाल्गुनी (Purva Phalguni)",
    rashiLord: "सूर्य (Sun)",
    element: "अग्नि (Fire)",
    symbol: "सिंह/शेर (Lion)",
    aksharsHi: ["मो", "टा", "टी", "टू", "टि", "टु", "ट"],
    prefixesEn: ["mo", "tta", "tti"]
  },
  {
    rashi: "सिंह (Leo)",
    nakshatra: "उत्तराफाल्गुनी (Uttara Phalguni)",
    rashiLord: "सूर्य (Sun)",
    element: "अग्नि (Fire)",
    symbol: "सिंह/शेर (Lion)",
    aksharsHi: ["टे"],
    prefixesEn: ["tte"]
  },
  // 6. कन्या (Virgo)
  {
    rashi: "कन्या (Virgo)",
    nakshatra: "उत्तराफाल्गुनी (Uttara Phalguni)",
    rashiLord: "बुध (Mercury)",
    element: "पृथ्वी (Earth)",
    symbol: "कन्या (Maiden)",
    aksharsHi: ["टो", "पा", "पी", "पि", "प"],
    prefixesEn: ["pa", "pi", "p"]
  },
  {
    rashi: "कन्या (Virgo)",
    nakshatra: "हस्त (Hasta)",
    rashiLord: "बुध (Mercury)",
    element: "पृथ्वी (Earth)",
    symbol: "कन्या (Maiden)",
    aksharsHi: ["पू", "पु", "ष", "ण", "ठ"],
    prefixesEn: ["pu", "shha", "tha"]
  },
  {
    rashi: "कन्या (Virgo)",
    nakshatra: "चित्रा (Chitra)",
    rashiLord: "बुध (Mercury)",
    element: "पृथ्वी (Earth)",
    symbol: "कन्या (Maiden)",
    aksharsHi: ["पे", "पो", "प्र", "प्री"],
    prefixesEn: ["pe", "po", "pr"]
  },
  // 7. तुला (Libra)
  {
    rashi: "तुला (Libra)",
    nakshatra: "चित्रा (Chitra)",
    rashiLord: "शुक्र (Venus)",
    element: "वायु (Air)",
    symbol: "तुला/तराजू (Scales)",
    aksharsHi: ["रा", "री", "रि", "र"],
    prefixesEn: ["ra", "ri", "r"]
  },
  {
    rashi: "तुला (Libra)",
    nakshatra: "स्वाति (Swati)",
    rashiLord: "शुक्र (Venus)",
    element: "वायु (Air)",
    symbol: "तुला/तराजू (Scales)",
    aksharsHi: ["रू", "रु", "रे", "रो", "ता", "त"],
    prefixesEn: ["ru", "re", "ro", "ta", "t"]
  },
  {
    rashi: "तुला (Libra)",
    nakshatra: "विशाखा (Vishakha)",
    rashiLord: "शुक्र (Venus)",
    element: "वायु (Air)",
    symbol: "तुला/तराजू (Scales)",
    aksharsHi: ["ती", "तू", "ते", "ति", "तु", "त्र"],
    prefixesEn: ["ti", "tu", "te", "tr"]
  },
  // 8. वृश्चिक (Scorpio)
  {
    rashi: "वृश्चिक (Scorpio)",
    nakshatra: "विशाखा (Vishakha)",
    rashiLord: "मंगल (Mars)",
    element: "जल (Water)",
    symbol: "वृश्चिक/बिच्छू (Scorpion)",
    aksharsHi: ["तो"],
    prefixesEn: ["to"]
  },
  {
    rashi: "वृश्चिक (Scorpio)",
    nakshatra: "अनुराधा (Anuradha)",
    rashiLord: "मंगल (Mars)",
    element: "जल (Water)",
    symbol: "वृश्चिक/बिच्छू (Scorpion)",
    aksharsHi: ["ना", "नी", "नू", "ने", "नि", "नु", "न"],
    prefixesEn: ["na", "ni", "nu", "ne", "n"]
  },
  {
    rashi: "वृश्चिक (Scorpio)",
    nakshatra: "ज्येष्ठा (Jyeshtha)",
    rashiLord: "मंगल (Mars)",
    element: "जल (Water)",
    symbol: "वृश्चिक/बिच्छू (Scorpion)",
    aksharsHi: ["नो", "या", "यी", "यू", "यि", "यु", "य"],
    prefixesEn: ["no", "ya", "yi", "yu", "y"]
  },
  // 9. धनु (Sagittarius)
  {
    rashi: "धनु (Sagittarius)",
    nakshatra: "मूल (Mula)",
    rashiLord: "गुरु (Jupiter)",
    element: "अग्नि (Fire)",
    symbol: "धनुर्धर (Archer)",
    aksharsHi: ["ये", "यो", "भा", "भी", "भि", "भ"],
    prefixesEn: ["ye", "yo", "bha", "bhi", "bh"]
  },
  {
    rashi: "धनु (Sagittarius)",
    nakshatra: "पूर्वाषाढ़ा (Purva Ashadha)",
    rashiLord: "गुरु (Jupiter)",
    element: "अग्नि (Fire)",
    symbol: "धनुर्धर (Archer)",
    aksharsHi: ["भू", "भु", "धा", "फा", "ढा", "ध", "फ"],
    prefixesEn: ["bhu", "dha", "pha", "dh", "ph", "f"]
  },
  {
    rashi: "धनु (Sagittarius)",
    nakshatra: "उत्तराषाढ़ा (Uttara Ashadha)",
    rashiLord: "गुरु (Jupiter)",
    element: "अग्नि (Fire)",
    symbol: "धनुर्धर (Archer)",
    aksharsHi: ["भे"],
    prefixesEn: ["bhe"]
  },
  // 10. मकर (Capricorn)
  {
    rashi: "मकर (Capricorn)",
    nakshatra: "उत्तराषाढ़ा (Uttara Ashadha)",
    rashiLord: "शनि (Saturn)",
    element: "पृथ्वी (Earth)",
    symbol: "मकर (Sea-Goat)",
    aksharsHi: ["भो", "जा", "जी", "जि", "ज"],
    prefixesEn: ["bho", "ja", "ji", "j", "z"]
  },
  {
    rashi: "मकर (Capricorn)",
    nakshatra: "श्रवण (Shravana)",
    rashiLord: "शनि (Saturn)",
    element: "पृथ्वी (Earth)",
    symbol: "मकर (Sea-Goat)",
    aksharsHi: ["खी", "खू", "खे", "खो", "खा", "खि", "खु", "ख"],
    prefixesEn: ["kha", "khi", "khu", "khe", "kho", "kh"]
  },
  {
    rashi: "मकर (Capricorn)",
    nakshatra: "धनिष्ठा (Dhanishta)",
    rashiLord: "शनि (Saturn)",
    element: "पृथ्वी (Earth)",
    symbol: "मकर (Sea-Goat)",
    aksharsHi: ["गा", "गी", "गि"],
    prefixesEn: ["ga", "gi"]
  },
  // 11. कुंभ (Aquarius)
  {
    rashi: "कुंभ (Aquarius)",
    nakshatra: "धनिष्ठा (Dhanishta)",
    rashiLord: "शनि (Saturn)",
    element: "वायु (Air)",
    symbol: "कुंभ/कलश (Water Bearer)",
    aksharsHi: ["गू", "गु", "गे", "गो", "ग"],
    prefixesEn: ["gu", "ge", "go", "g"]
  },
  {
    rashi: "कुंभ (Aquarius)",
    nakshatra: "शतभिषा (Shatabhisha)",
    rashiLord: "शनि (Saturn)",
    element: "वायु (Air)",
    symbol: "कुंभ/कलश (Water Bearer)",
    aksharsHi: ["सा", "सी", "सू", "से", "सि", "सु", "स", "श", "शि", "शु", "शे", "शो", "श्र", "श्व"],
    prefixesEn: ["sa", "si", "su", "se", "so", "sha", "shi", "shu", "she", "sho", "sh", "sr", "sw", "s"]
  },
  {
    rashi: "कुंभ (Aquarius)",
    nakshatra: "पूर्वाभाद्रपद (Purva Bhadrapada)",
    rashiLord: "शनि (Saturn)",
    element: "वायु (Air)",
    symbol: "कुंभ/कलश (Water Bearer)",
    aksharsHi: ["सो", "सौ", "दा"],
    prefixesEn: ["so", "daa"]
  },
  // 12. मीन (Pisces)
  {
    rashi: "मीन (Pisces)",
    nakshatra: "पूर्वाभाद्रपद (Purva Bhadrapada)",
    rashiLord: "गुरु (Jupiter)",
    element: "जल (Water)",
    symbol: "मत्स्य/मछली (Fish)",
    aksharsHi: ["दी", "दि"],
    prefixesEn: ["dee", "di"]
  },
  {
    rashi: "मीन (Pisces)",
    nakshatra: "उत्तराभाद्रपद (Uttara Bhadrapada)",
    rashiLord: "गुरु (Jupiter)",
    element: "जल (Water)",
    symbol: "मत्स्य/मछली (Fish)",
    aksharsHi: ["दू", "दु", "थ", "झ", "ञ"],
    prefixesEn: ["du", "th", "jh"]
  },
  {
    rashi: "मीन (Pisces)",
    nakshatra: "रेवती (Revati)",
    rashiLord: "गुरु (Jupiter)",
    element: "जल (Water)",
    symbol: "मत्स्य/मछली (Fish)",
    aksharsHi: ["दे", "दो", "चा", "ची", "चि", "द", "च"],
    prefixesEn: ["de", "do", "cha", "chi", "ch", "c", "d"]
  }
];
function getVedicDetailsFromName(rawName) {
  const clean = (rawName || "").trim();
  const lower = clean.toLowerCase();
  if (!lower) {
    return {
      name: rawName,
      rashi: "मेष (Aries)",
      nakshatra: "अश्विनी (Ashwini)",
      rashiLord: "मंगल (Mars)",
      element: "अग्नि (Fire)",
      symbol: "मेष (Ram)",
      initialLetter: "अ"
    };
  }
  let bestHindiMatch = null;
  for (const rule of AVAKAHADA_NAME_RULES$1) {
    for (const ak of rule.aksharsHi) {
      if (clean.startsWith(ak)) {
        if (!bestHindiMatch || ak.length > bestHindiMatch.akshar.length) {
          bestHindiMatch = { rule, akshar: ak };
        }
      }
    }
  }
  if (bestHindiMatch) {
    return {
      name: clean,
      rashi: bestHindiMatch.rule.rashi,
      nakshatra: bestHindiMatch.rule.nakshatra,
      rashiLord: bestHindiMatch.rule.rashiLord,
      element: bestHindiMatch.rule.element,
      symbol: bestHindiMatch.rule.symbol,
      initialLetter: bestHindiMatch.akshar
    };
  }
  for (const len of [3, 2, 1]) {
    if (lower.length < len) continue;
    const sub = lower.slice(0, len);
    for (const rule of AVAKAHADA_NAME_RULES$1) {
      if (rule.prefixesEn.includes(sub)) {
        return {
          name: clean,
          rashi: rule.rashi,
          nakshatra: rule.nakshatra,
          rashiLord: rule.rashiLord,
          element: rule.element,
          symbol: rule.symbol,
          initialLetter: clean.slice(0, len).toUpperCase()
        };
      }
    }
  }
  return {
    name: clean,
    rashi: "मेष (Aries)",
    nakshatra: "अश्विनी (Ashwini)",
    rashiLord: "मंगल (Mars)",
    element: "अग्नि (Fire)",
    symbol: "मेष (Ram)",
    initialLetter: clean[0].toUpperCase()
  };
}
const RASHI_VARNA = [
  { name: "क्षत्रिय", rank: 3 },
  // 1 Mesha
  { name: "वैश्य", rank: 2 },
  // 2 Vrishabha
  { name: "शूद्र", rank: 1 },
  // 3 Mithuna
  { name: "ब्राह्मण", rank: 4 },
  // 4 Karka
  { name: "क्षत्रिय", rank: 3 },
  // 5 Simha
  { name: "वैश्य", rank: 2 },
  // 6 Kanya
  { name: "शूद्र", rank: 1 },
  // 7 Tula
  { name: "ब्राह्मण", rank: 4 },
  // 8 Vrishchika
  { name: "क्षत्रिय", rank: 3 },
  // 9 Dhanu
  { name: "वैश्य", rank: 2 },
  // 10 Makara
  { name: "शूद्र", rank: 1 },
  // 11 Kumbha
  { name: "ब्राह्मण", rank: 4 }
  // 12 Meena
];
const VASHYA_NAMES = [
  "चतुष्पद (Chatushpada)",
  "मानव / द्विपद (Manava)",
  "जलचर (Jalachara)",
  "वनचर (Vanachara)",
  "कीट (Keeta)"
];
function getVashyaIndex(rashiNum, degInRashi = 10) {
  switch (rashiNum) {
    case 1:
    case 2:
      return 0;
    // Chatushpada
    case 3:
    case 6:
    case 7:
    case 11:
      return 1;
    // Manava
    case 4:
    case 12:
      return 2;
    // Jalachara
    case 5:
      return 3;
    // Vanachara
    case 8:
      return 4;
    // Keeta
    case 9:
      return degInRashi < 15 ? 1 : 0;
    // First half Manava, second half Chatushpada
    case 10:
      return degInRashi < 15 ? 0 : 2;
    // First half Chatushpada, second half Jalachara
    default:
      return 1;
  }
}
const VASHYA_MATRIX = [
  // Chatush, Manava, Jalachara, Vanachara, Keeta
  [2, 1, 1, 0, 1],
  // 0 Chatushpada
  [1, 2, 0.5, 0, 1],
  // 1 Manava
  [1, 0.5, 2, 1, 1],
  // 2 Jalachara
  [0, 0, 1, 2, 0],
  // 3 Vanachara
  [1, 1, 1, 0, 2]
  // 4 Keeta
];
const TARA_NAMES = [
  "जन्म तारा",
  "संपत तारा",
  "विपत तारा",
  "क्षेम तारा",
  "प्रत्यरि तारा",
  "साधक तारा",
  "वध तारा",
  "मित्र तारा",
  "अतिमित्र तारा"
];
const YONI_NAMES = [
  "अश्व (घोड़ा)",
  "गज (हाथी)",
  "मेष (भेड़)",
  "सर्प (साँप)",
  "श्वान (कुत्ता)",
  "मार्जार (बिल्ली)",
  "मूषक (चूहा)",
  "गौ (गाय)",
  "महिष (भैंस)",
  "व्याघ्र (बाघ)",
  "मृग (हिरण)",
  "वानर (बंदर)",
  "नकुल (नेवला)",
  "सिंह (शेर)"
];
const NAKSHATRA_YONI = [
  0,
  // 0 Ashwini -> Ashwa
  1,
  // 1 Bharani -> Gaja
  2,
  // 2 Krittika -> Mesha
  3,
  // 3 Rohini -> Sarpa
  3,
  // 4 Mrigashira -> Sarpa
  4,
  // 5 Ardra -> Shwan
  5,
  // 6 Punarvasu -> Marjar
  2,
  // 7 Pushya -> Mesha
  5,
  // 8 Ashlesha -> Marjar
  6,
  // 9 Magha -> Mushak
  6,
  // 10 Purva Phalguni -> Mushak
  7,
  // 11 Uttara Phalguni -> Gau
  8,
  // 12 Hasta -> Mahish
  9,
  // 13 Chitra -> Vyaghra
  8,
  // 14 Swati -> Mahish
  9,
  // 15 Vishakha -> Vyaghra
  10,
  // 16 Anuradha -> Mriga
  10,
  // 17 Jyeshtha -> Mriga
  4,
  // 18 Mula -> Shwan
  11,
  // 19 Purva Ashadha -> Vanar
  12,
  // 20 Uttara Ashadha -> Nakul
  11,
  // 21 Shravana -> Vanar
  13,
  // 22 Dhanishta -> Simha
  0,
  // 23 Shatabhisha -> Ashwa
  13,
  // 24 Purva Bhadrapada -> Simha
  7,
  // 25 Uttara Bhadrapada -> Gau
  1
  // 26 Revati -> Gaja
];
const YONI_MATRIX = [
  // 0:Ashwa, 1:Gaja, 2:Mesha, 3:Sarpa, 4:Shwan, 5:Marjar, 6:Mushak, 7:Gau, 8:Mahish, 9:Vyaghra, 10:Mriga, 11:Vanar, 12:Nakul, 13:Simha
  [4, 2, 2, 3, 2, 2, 2, 1, 0, 1, 3, 3, 2, 1],
  // 0 Ashwa
  [2, 4, 3, 3, 2, 2, 2, 2, 3, 1, 2, 3, 2, 0],
  // 1 Gaja
  [2, 3, 4, 2, 1, 2, 1, 3, 3, 1, 2, 0, 3, 1],
  // 2 Mesha
  [3, 3, 2, 4, 2, 1, 1, 1, 1, 2, 2, 2, 0, 2],
  // 3 Sarpa
  [2, 2, 1, 2, 4, 2, 1, 2, 2, 1, 0, 2, 1, 1],
  // 4 Shwan
  [2, 2, 2, 1, 2, 4, 0, 2, 2, 1, 3, 3, 2, 1],
  // 5 Marjar
  [2, 2, 1, 1, 1, 0, 4, 2, 2, 2, 2, 2, 1, 2],
  // 6 Mushak
  [1, 2, 3, 1, 2, 2, 2, 4, 3, 0, 3, 2, 2, 1],
  // 7 Gau
  [0, 3, 3, 1, 2, 2, 2, 3, 4, 1, 2, 2, 2, 1],
  // 8 Mahish
  [1, 1, 1, 2, 1, 1, 2, 0, 1, 4, 1, 1, 2, 1],
  // 9 Vyaghra
  [3, 2, 2, 2, 0, 3, 2, 3, 2, 1, 4, 2, 2, 1],
  // 10 Mriga
  [3, 3, 0, 2, 2, 3, 2, 2, 2, 1, 2, 4, 3, 2],
  // 11 Vanar
  [2, 2, 3, 0, 1, 2, 1, 2, 2, 2, 2, 3, 4, 2],
  // 12 Nakul
  [1, 0, 1, 2, 1, 1, 2, 1, 1, 1, 1, 2, 2, 4]
  // 13 Simha
];
const LORD_NAMES = [
  "सूर्य (Sun)",
  "चंद्र (Moon)",
  "मंगल (Mars)",
  "बुध (Mercury)",
  "गुरु (Jupiter)",
  "शुक्र (Venus)",
  "शनि (Saturn)"
];
const RASHI_LORD_INDEX = [
  2,
  // 1 Mesha -> Mars
  5,
  // 2 Vrishabha -> Venus
  3,
  // 3 Mithuna -> Mercury
  1,
  // 4 Karka -> Moon
  0,
  // 5 Simha -> Sun
  3,
  // 6 Kanya -> Mercury
  5,
  // 7 Tula -> Venus
  2,
  // 8 Vrishchika -> Mars
  4,
  // 9 Dhanu -> Jupiter
  6,
  // 10 Makara -> Saturn
  6,
  // 11 Kumbha -> Saturn
  4
  // 12 Meena -> Jupiter
];
const GRAHA_MAITRI_MATRIX = [
  // Sun, Moon, Mars, Merc, Jup, Ven, Sat
  [5, 5, 5, 4, 5, 0, 0],
  // 0 Sun
  [5, 5, 4, 1, 4, 0.5, 0.5],
  // 1 Moon
  [5, 4, 5, 0.5, 5, 3, 0.5],
  // 2 Mars
  [4, 1, 0.5, 5, 0.5, 5, 4],
  // 3 Mercury
  [5, 4, 5, 0.5, 5, 0.5, 3],
  // 4 Jupiter
  [0, 0.5, 3, 5, 0.5, 5, 5],
  // 5 Venus
  [0, 0.5, 0.5, 4, 3, 5, 5]
  // 6 Saturn
];
const GANA_NAMES = ["देव गण (Deva)", "मनुष्य गण (Manushya)", "राक्षस गण (Rakshasa)"];
const NAKSHATRA_GANA = [
  0,
  // 0 Ashwini
  1,
  // 1 Bharani
  2,
  // 2 Krittika
  1,
  // 3 Rohini
  0,
  // 4 Mrigashira
  1,
  // 5 Ardra
  0,
  // 6 Punarvasu
  0,
  // 7 Pushya
  2,
  // 8 Ashlesha
  2,
  // 9 Magha
  1,
  // 10 Purva Phalguni
  1,
  // 11 Uttara Phalguni
  0,
  // 12 Hasta
  2,
  // 13 Chitra
  0,
  // 14 Swati
  2,
  // 15 Vishakha
  0,
  // 16 Anuradha
  2,
  // 17 Jyeshtha
  2,
  // 18 Mula
  1,
  // 19 Purva Ashadha
  1,
  // 20 Uttara Ashadha
  0,
  // 21 Shravana
  2,
  // 22 Dhanishta
  2,
  // 23 Shatabhisha
  1,
  // 24 Purva Bhadrapada
  1,
  // 25 Uttara Bhadrapada
  0
  // 26 Revati
];
const GANA_MATRIX = [
  [6, 6, 1],
  // Boy Deva
  [5, 6, 0],
  // Boy Manushya
  [0, 0, 6]
  // Boy Rakshasa
];
const NADI_NAMES = ["आदि नाड़ी (Adi)", "मध्य नाड़ी (Madhya)", "अन्त्य नाड़ी (Antya)"];
const NAKSHATRA_NADI = [
  0,
  1,
  2,
  2,
  1,
  0,
  0,
  1,
  2,
  2,
  1,
  0,
  0,
  1,
  2,
  2,
  1,
  0,
  0,
  1,
  2,
  2,
  1,
  0,
  0,
  1,
  2
];
function findRashiNumber(rashiStr) {
  const idx = VEDIC_RASHIS.findIndex(
    (r) => r === rashiStr || rashiStr.includes(r.split(" ")[0])
  );
  return idx >= 0 ? idx + 1 : 1;
}
function findNakshatraIndex(nakStr) {
  const idx = VEDIC_NAKSHATRAS.findIndex(
    (n) => n === nakStr || nakStr.includes(n.split(" ")[0])
  );
  return idx >= 0 ? idx : 0;
}
function calculateKundaliMilan(boyName, girlName, boyRashiInput, girlRashiInput, boyNakshatraInput, girlNakshatraInput, boyDob, boyTime, girlDob, girlTime, boyPlace = "रुद्रपुर, उत्तराखण्ड", girlPlace = "रुद्रपुर, उत्तराखण्ड", useAstronomicalKundali = true) {
  const boyProfile = getVedicDetailsFromName(boyName);
  const girlProfile = getVedicDetailsFromName(girlName);
  let boyKundali;
  let girlKundali;
  if (useAstronomicalKundali && boyDob) {
    boyKundali = generateSampurnKundali(
      boyName || "वर",
      boyDob,
      boyTime || "12:00",
      boyPlace || "रुद्रपुर, उत्तराखण्ड"
    );
  }
  if (useAstronomicalKundali && girlDob) {
    girlKundali = generateSampurnKundali(
      girlName || "कन्या",
      girlDob,
      girlTime || "12:00",
      girlPlace || "रुद्रपुर, उत्तराखण्ड"
    );
  }
  const boyRashiNum = boyKundali ? boyKundali.panchang.moonRashiNumber : findRashiNumber(boyRashiInput || boyProfile.rashi);
  const girlRashiNum = girlKundali ? girlKundali.panchang.moonRashiNumber : findRashiNumber(girlRashiInput || girlProfile.rashi);
  const boyRashi = VEDIC_RASHIS[boyRashiNum - 1];
  const girlRashi = VEDIC_RASHIS[girlRashiNum - 1];
  const boyNakIdx = boyKundali ? findNakshatraIndex(boyKundali.panchang.nakshatraName) : findNakshatraIndex(boyNakshatraInput || boyProfile.nakshatra);
  const girlNakIdx = girlKundali ? findNakshatraIndex(girlKundali.panchang.nakshatraName) : findNakshatraIndex(girlNakshatraInput || girlProfile.nakshatra);
  const boyNakshatra = VEDIC_NAKSHATRAS[boyNakIdx];
  const girlNakshatra = VEDIC_NAKSHATRAS[girlNakIdx];
  const deriveAstronomicalPadaAndDegree = (rashiNum, nakIdx, nameStr) => {
    const validPadas = [];
    for (let p = 1; p <= 4; p++) {
      const globalPadaIdx = nakIdx * 4 + (p - 1);
      const padaRashi = Math.floor(globalPadaIdx / 9) + 1;
      if (padaRashi === rashiNum) {
        validPadas.push(p);
      }
    }
    const nameSum = Array.from(nameStr || "अ").reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
    const chosenPada = validPadas.length > 0 ? validPadas[nameSum % validPadas.length] : nameSum % 4 + 1;
    const globalIdx = nakIdx * 4 + (chosenPada - 1);
    const padaIndexInRashi = globalIdx % 9;
    const degInRashi = Math.round(padaIndexInRashi * (30 / 9) + 1.66);
    return { pada: chosenPada, degInRashi };
  };
  const boyDerived = deriveAstronomicalPadaAndDegree(boyRashiNum, boyNakIdx, boyName || "वर");
  const girlDerived = deriveAstronomicalPadaAndDegree(girlRashiNum, girlNakIdx, girlName || "कन्या");
  const boyPada = boyKundali ? boyKundali.panchang.nakshatraPada : boyDerived.pada;
  const girlPada = girlKundali ? girlKundali.panchang.nakshatraPada : girlDerived.pada;
  const boyMoonPlanet = boyKundali?.planets.find((p) => p.id === "moon");
  const girlMoonPlanet = girlKundali?.planets.find((p) => p.id === "moon");
  const boyMoonDegInRashi = boyMoonPlanet ? boyMoonPlanet.degInt : boyDerived.degInRashi;
  const girlMoonDegInRashi = girlMoonPlanet ? girlMoonPlanet.degInt : girlDerived.degInRashi;
  const boyVarna = RASHI_VARNA[boyRashiNum - 1];
  const girlVarna = RASHI_VARNA[girlRashiNum - 1];
  const varanObtained = boyVarna.rank >= girlVarna.rank ? 1 : 0;
  const varanResult = {
    name: "Varna Koot",
    hindiName: "1. वर्ण कूट (Varna)",
    boyValue: boyVarna.name,
    girlValue: girlVarna.name,
    maxPoints: 1,
    obtainedPoints: varanObtained,
    status: varanObtained === 1 ? "favorable" : "moderate",
    meaning: "बौद्धिक स्तर, आध्यात्मिक झुकाव एवं कार्य-प्रकृति का सामंजस्य।",
    verdict: varanObtained === 1 ? `वर (${boyVarna.name}) एवं कन्या (${girlVarna.name}) का वर्ण मिलान शास्त्रसम्मत व श्रेष्ठ (1/1) है।` : `वर (${boyVarna.name}) एवं कन्या (${girlVarna.name}) में वर्ण अंतर है, किंतु ग्रह मैत्री शुभ होने पर यह गौण माना जाता है।`
  };
  const boyVashyaIdx = getVashyaIndex(boyRashiNum, boyMoonDegInRashi);
  const girlVashyaIdx = getVashyaIndex(girlRashiNum, girlMoonDegInRashi);
  const vashyaObtained = VASHYA_MATRIX[boyVashyaIdx][girlVashyaIdx];
  const vashyaResult = {
    name: "Vashya Koot",
    hindiName: "2. वश्य कूट (Vashya)",
    boyValue: VASHYA_NAMES[boyVashyaIdx],
    girlValue: VASHYA_NAMES[girlVashyaIdx],
    maxPoints: 2,
    obtainedPoints: vashyaObtained,
    status: vashyaObtained >= 1.5 ? "favorable" : vashyaObtained >= 0.5 ? "moderate" : "dosh",
    meaning: "दांपत्य में पारस्परिक आकर्षण, समर्पण, सहयोग एवं स्नेह बंधन।",
    verdict: vashyaObtained === 2 ? "समान/उत्तम वश्य (2/2 अंक)। पति-पत्नी में गहरा आकर्षण और अटूट सामंजस्य रहेगा।" : vashyaObtained >= 0.5 ? `मध्यम वश्य मिलान (${vashyaObtained}/2 अंक)। आपसी संवाद व आदर से दांपत्य सुखद रहेगा।` : "वश्य वैषम्य (0/2 अंक)। एक-दूसरे के विचारों पर अधिकार जताने के बजाय सहयोग की भावना रखें।"
  };
  const countBG = (girlNakIdx - boyNakIdx + 27) % 27 + 1;
  const countGB = (boyNakIdx - girlNakIdx + 27) % 27 + 1;
  const remBG = countBG % 9 === 0 ? 9 : countBG % 9;
  const remGB = countGB % 9 === 0 ? 9 : countGB % 9;
  const boyTaraName = TARA_NAMES[remBG - 1];
  const girlTaraName = TARA_NAMES[remGB - 1];
  const boyTaraShubh = ![3, 5, 7].includes(remBG);
  const girlTaraShubh = ![3, 5, 7].includes(remGB);
  let taraObtained = 0;
  if (boyTaraShubh && girlTaraShubh) taraObtained = 3;
  else if (boyTaraShubh || girlTaraShubh) taraObtained = 1.5;
  else taraObtained = 0;
  const taraResult = {
    name: "Tara Koot",
    hindiName: "3. तारा कूट (Tara)",
    boyValue: `${boyTaraName} (${remBG})`,
    girlValue: `${girlTaraName} (${remGB})`,
    maxPoints: 3,
    obtainedPoints: taraObtained,
    status: taraObtained === 3 ? "favorable" : taraObtained === 1.5 ? "moderate" : "dosh",
    meaning: "जन्म नक्षत्रों की दूरी के आधार पर भाग्य, आयु, आरोग्य एवं सुख-दुःख का विचार।",
    verdict: taraObtained === 3 ? `दोनों पक्षों की तारा (${boyTaraName} व ${girlTaraName}) परम शुभ है (3/3 अंक)। सौभाग्य व दीर्घायु कारक।` : taraObtained === 1.5 ? `एक पक्ष की तारा शुभ व दूसरे की मध्यम है (1.5/3 अंक)। सामान्य अनुकूलता रहेगी।` : `उभय तारा अशुभ (${boyTaraName} व ${girlTaraName}, 0/3 अंक)। नक्षत्र शांति एवं रुद्राभिषेक हितकर है।`
  };
  const boyYoniIdx = NAKSHATRA_YONI[boyNakIdx];
  const girlYoniIdx = NAKSHATRA_YONI[girlNakIdx];
  const yoniObtained = YONI_MATRIX[boyYoniIdx][girlYoniIdx];
  const yoniResult = {
    name: "Yoni Koot",
    hindiName: "4. योनि कूट (Yoni)",
    boyValue: YONI_NAMES[boyYoniIdx],
    girlValue: YONI_NAMES[girlYoniIdx],
    maxPoints: 4,
    obtainedPoints: yoniObtained,
    status: yoniObtained >= 3 ? "favorable" : yoniObtained >= 2 ? "moderate" : "dosh",
    meaning: "शारीरिक एवं भावनात्मक अनुकूलता, जैविक ऊर्जा एवं अंतरंग दांपत्य सामंजस्य।",
    verdict: yoniObtained === 4 ? `स्वयोनि मिलान (${YONI_NAMES[boyYoniIdx]}, 4/4 अंक)। दांपत्य में पूर्ण मानसिक व शारीरिक संतुष्टि रहेगी।` : yoniObtained === 3 ? `मित्र योनि मिलान (${yoniObtained}/4 अंक)। सहज स्नेह व उत्तम आपसी तालमेल रहेगा।` : yoniObtained === 2 ? `सम योनि मिलान (2/4 अंक)। सामान्य व संतुलित वैवाहिक जीवन रहेगा।` : yoniObtained === 1 ? `प्रतिकूल योनि (1/4 अंक)। धैर्य व एक-दूसरे की भावनाओं का सम्मान आवश्यक है।` : `महावैर योनि (${YONI_NAMES[boyYoniIdx]} व ${YONI_NAMES[girlYoniIdx]}, 0/4 अंक)। स्वभाव में टकराव से बचने हेतु विशेष शांति पूजन कराएं।`
  };
  const boyLordIdx = RASHI_LORD_INDEX[boyRashiNum - 1];
  const girlLordIdx = RASHI_LORD_INDEX[girlRashiNum - 1];
  const grahaObtained = GRAHA_MAITRI_MATRIX[boyLordIdx][girlLordIdx];
  const grahaResult = {
    name: "Graha Maitri",
    hindiName: "5. ग्रह मैत्री (Maitri)",
    boyValue: LORD_NAMES[boyLordIdx],
    girlValue: LORD_NAMES[girlLordIdx],
    maxPoints: 5,
    obtainedPoints: grahaObtained,
    status: grahaObtained >= 4 ? "favorable" : grahaObtained >= 3 ? "moderate" : "dosh",
    meaning: "वर-कन्या की चन्द्र राशि के स्वामियों की नैसर्गिक मित्रता एवं मानसिक शांति।",
    verdict: grahaObtained === 5 ? `वर (${LORD_NAMES[boyLordIdx]}) व कन्या (${LORD_NAMES[girlLordIdx]}) के राशि स्वामी एक हैं या परम मित्र हैं (5/5 अंक)। यह भकूट व गण दोष का भी निवारण करता है।` : grahaObtained >= 3 ? `राशि स्वामियों में सम/मित्र संबंध है (${grahaObtained}/5 अंक)। विचारों में अच्छा संतुलन रहेगा।` : `राशि स्वामियों (${LORD_NAMES[boyLordIdx]} व ${LORD_NAMES[girlLordIdx]}) में शत्रु भाव (${grahaObtained}/5 अंक)। संवाद में मधुरता बनाए रखें।`
  };
  const boyGanaIdx = NAKSHATRA_GANA[boyNakIdx];
  const girlGanaIdx = NAKSHATRA_GANA[girlNakIdx];
  const ganaObtained = GANA_MATRIX[boyGanaIdx][girlGanaIdx];
  const ganaResult = {
    name: "Gana Koot",
    hindiName: "6. गण कूट (Gana)",
    boyValue: GANA_NAMES[boyGanaIdx],
    girlValue: GANA_NAMES[girlGanaIdx],
    maxPoints: 6,
    obtainedPoints: ganaObtained,
    status: ganaObtained >= 5 ? "favorable" : ganaObtained >= 1 ? "moderate" : "dosh",
    meaning: "व्यक्तित्व का मूल स्वभाव (सात्विक/देव, राजसिक/मनुष्य, तेजस्वी/राक्षस) एवं आचरण।",
    verdict: ganaObtained === 6 ? `उत्तम गण मिलान (${GANA_NAMES[boyGanaIdx]} - ${GANA_NAMES[girlGanaIdx]}, 6/6 अंक)। स्वभाव व जीवनशैली पूर्णतः अनुकूल हैं।` : ganaObtained >= 1 ? `मध्यम गण मिलान (${ganaObtained}/6 अंक)। थोड़ा सामंजस्य रखने से दांपत्य सुखमय रहेगा।` : `गण दोष (${GANA_NAMES[boyGanaIdx]} व ${GANA_NAMES[girlGanaIdx]}, 0/6 अंक)। ${grahaObtained >= 4 ? "परन्तु ग्रह मैत्री श्रेष्ठ होने से शास्त्रानुसार गण दोष का परिहार हो रहा है।" : "गण शांति पूजन एवं सहनशीलता आवश्यक है।"}`,
    remedy: ganaObtained === 0 && grahaObtained < 4 ? "गण दोष निवारण हेतु भगवान शिव-पार्वती का अभिषेक एवं ग्रह मैत्री शांति कराएं।" : void 0
  };
  const distBG = (girlRashiNum - boyRashiNum + 12) % 12 + 1;
  const distGB = (boyRashiNum - girlRashiNum + 12) % 12 + 1;
  const bhakootFavorableDistances = [1, 3, 4, 7, 10, 11];
  const bhakootObtained = bhakootFavorableDistances.includes(distBG) ? 7 : 0;
  const hasBhakootParihar = bhakootObtained === 0 && (boyLordIdx === girlLordIdx || grahaObtained >= 4);
  let bhakootRelationName = `${distBG}/${distGB} भकूट`;
  if (distBG === 1) bhakootRelationName = "समसप्तक/एक राशि (1/1)";
  else if (distBG === 7) bhakootRelationName = "समसप्तक शुभ (7/7)";
  else if (distBG === 3 || distBG === 11) bhakootRelationName = "तृतीय-एकादश शुभ (3/11)";
  else if (distBG === 4 || distBG === 10) bhakootRelationName = "चतुर्थ-दशम शुभ (4/10)";
  else if (distBG === 2 || distBG === 12) bhakootRelationName = "द्विद्वादश भकूट (2/12)";
  else if (distBG === 5 || distBG === 9) bhakootRelationName = "नवपंचम भकूट (5/9)";
  else if (distBG === 6 || distBG === 8) bhakootRelationName = "षडाष्टक भकूट (6/8)";
  const bhakootResult = {
    name: "Bhakoot Koot",
    hindiName: "7. भकूट कूट (Bhakoot)",
    boyValue: boyRashi.split(" ")[0],
    girlValue: `${girlRashi.split(" ")[0]} (${bhakootRelationName})`,
    maxPoints: 7,
    obtainedPoints: bhakootObtained,
    status: bhakootObtained === 7 ? "favorable" : hasBhakootParihar ? "moderate" : "dosh",
    meaning: "राशियों की पारस्परिक दूरी से धन-समृद्धि, पारिवारिक सौख्य, प्रेम एवं वंश वृद्धि।",
    verdict: bhakootObtained === 7 ? `${bhakootRelationName} होने से भकूट पूर्ण शुभ (7/7 अंक) है। परिवार में सुख-समृद्धि व भाग्योदय रहेगा।` : hasBhakootParihar ? `${bhakootRelationName} से 0/7 अंक हैं, किंतु दोनों राशियों के स्वामी एक/परम मित्र (${LORD_NAMES[boyLordIdx]} - ${LORD_NAMES[girlLordIdx]}) होने से भकूट दोष का शास्त्रोक्त परिहार हो रहा है।` : `${bhakootRelationName} दोष (0/7 अंक)। विवाह से पूर्व भकूट शांति एवं कुंडली के सप्तम भाव का विचार आवश्यक है।`,
    remedy: bhakootObtained === 0 && !hasBhakootParihar ? "भकूट शांति हेतु रुद्राभिषेक एवं माता गौरी-शंकर पूजन संपन्न कराएं।" : void 0
  };
  const boyNadiIdx = NAKSHATRA_NADI[boyNakIdx];
  const girlNadiIdx = NAKSHATRA_NADI[girlNakIdx];
  const nadiObtained = boyNadiIdx !== girlNadiIdx ? 8 : 0;
  const hasNadiParihar = nadiObtained === 0 && (boyRashiNum === girlRashiNum && boyNakIdx !== girlNakIdx || boyNakIdx === girlNakIdx && boyPada !== girlPada || boyRashiNum !== girlRashiNum && boyNakIdx === girlNakIdx);
  const nadiResult = {
    name: "Nadi Koot",
    hindiName: "8. नाड़ी कूट (Nadi)",
    boyValue: NADI_NAMES[boyNadiIdx],
    girlValue: NADI_NAMES[girlNadiIdx],
    maxPoints: 8,
    obtainedPoints: nadiObtained,
    status: nadiObtained === 8 ? "favorable" : hasNadiParihar ? "moderate" : "dosh",
    meaning: "वात-पित्त-कफ प्रकृति, आनुवंशिक ऊर्जा (DNA), आरोग्य एवं संतान सुख का सर्वोच्च कूट।",
    verdict: nadiObtained === 8 ? `वर (${NADI_NAMES[boyNadiIdx]}) एवं कन्या (${NADI_NAMES[girlNadiIdx]}) की नाड़ी भिन्न है (8/8 अंक)। नाड़ी दोष पूर्णतः मुक्त—स्वास्थ्य व संतान हेतु सर्वोत्तम।` : hasNadiParihar ? `दोनों की ${NADI_NAMES[boyNadiIdx]} समान होने से 0/8 अंक हैं, परन्तु राशि/नक्षत्र-चरण भेद होने से शास्त्रोक्त नाड़ी दोष परिहार उपलब्ध है।` : `एक नाड़ी दोष (${NADI_NAMES[boyNadiIdx]} - 0/8 अंक)। महामृत्युंजय जप एवं नाड़ी शांति के बिना विवाह निर्णय न लें।`,
    remedy: nadiObtained === 0 ? "नाड़ी दोष निवारण हेतु महामृत्युंजय अनुष्ठान, स्वर्ण-अन्न दान एवं ब्राह्मण भोज कराएं।" : void 0
  };
  const koots = [
    varanResult,
    vashyaResult,
    taraResult,
    yoniResult,
    grahaResult,
    ganaResult,
    bhakootResult,
    nadiResult
  ];
  const totalScore = Number(koots.reduce((sum, k) => sum + k.obtainedPoints, 0).toFixed(1));
  const compatibilityPercentage = Math.round(totalScore / 36 * 100);
  const boyMarsPlanet = boyKundali?.planets.find((p) => p.id === "mars");
  const girlMarsPlanet = girlKundali?.planets.find((p) => p.id === "mars");
  const boyVenForMars = boyKundali?.planets.find((p) => p.id === "venus");
  const girlVenForMars = girlKundali?.planets.find((p) => p.id === "venus");
  const boyNavamsaRashi = (boyNakIdx * 4 + (boyPada - 1)) % 12 + 1;
  const girlNavamsaRashi = (girlNakIdx * 4 + (girlPada - 1)) % 12 + 1;
  const boyDerivedMarsHouse = (boyNavamsaRashi - boyRashiNum + 12) % 12 + 1;
  const girlDerivedMarsHouse = (girlNavamsaRashi - girlRashiNum + 12) % 12 + 1;
  const boyMarsHouseLagna = boyMarsPlanet ? boyMarsPlanet.houseInLagna : boyDerivedMarsHouse;
  const girlMarsHouseLagna = girlMarsPlanet ? girlMarsPlanet.houseInLagna : girlDerivedMarsHouse;
  const boyMarsHouseMoon = boyMarsPlanet ? boyMarsPlanet.houseInChandra : boyDerivedMarsHouse;
  const girlMarsHouseMoon = girlMarsPlanet ? girlMarsPlanet.houseInChandra : girlDerivedMarsHouse;
  const boyMarsHouseVenus = boyMarsPlanet && boyVenForMars ? (boyMarsPlanet.rashiNumber - boyVenForMars.rashiNumber + 12) % 12 + 1 : boyMarsHouseMoon;
  const girlMarsHouseVenus = girlMarsPlanet && girlVenForMars ? (girlMarsPlanet.rashiNumber - girlVenForMars.rashiNumber + 12) % 12 + 1 : girlMarsHouseMoon;
  const manglikHouses = [1, 2, 4, 7, 8, 12];
  const partnerCounterHouses = [1, 4, 7, 8, 12];
  const evaluateSideManglikBase = (kundali, marsHouseLagna, marsHouseMoon, marsHouseVenus) => {
    const inLagna = manglikHouses.includes(marsHouseLagna);
    const inMoon = manglikHouses.includes(marsHouseMoon);
    const inVenus = manglikHouses.includes(marsHouseVenus);
    const rawManglik = inLagna || inMoon || inVenus;
    let baseSeverity = "मांगलिक दोष मुक्त";
    if (rawManglik) {
      if (inLagna && (inMoon || inVenus)) {
        baseSeverity = "प्रबल मांगलिक";
      } else if (inLagna && [1, 4, 7, 8, 12].includes(marsHouseLagna)) {
        baseSeverity = "मांगलिक";
      } else {
        baseSeverity = "आंशिक मांगलिक";
      }
    }
    const selfPariharReasons = [];
    const selfShortTags = [];
    if (rawManglik && kundali) {
      const mars = kundali.planets.find((p) => p.id === "mars");
      const jup = kundali.planets.find((p) => p.id === "jupiter");
      const lagnaRashiNum = kundali.panchang.lagnaNumber;
      if (mars && (mars.rashiNumber === 1 || mars.rashiNumber === 8)) {
        selfPariharReasons.push(
          `मंगल स्वराशि (${mars.rashiName.split(" ")[0]}) में स्थित होने से स्वराशि परिहार`
        );
        selfShortTags.push("स्वराशि");
      } else if (mars && mars.rashiNumber === 10) {
        selfPariharReasons.push("मंगल उच्च राशि (मकर) में स्थित होने से उच्च मंगल परिहार");
        selfShortTags.push("उच्च मंगल");
      }
      if (lagnaRashiNum === 4 || lagnaRashiNum === 5) {
        const lagnaHi = lagnaRashiNum === 4 ? "कर्क" : "सिंह";
        selfPariharReasons.push(
          `${lagnaHi} लग्न में मंगल योगकारक (केन्द्र-त्रिकोणेश) होने से योगकारक परिहार`
        );
        selfShortTags.push("योगकारक");
      }
      if (jup && mars) {
        const jupToMarsDist = (mars.rashiNumber - jup.rashiNumber + 12) % 12 + 1;
        const jupOnMars = [1, 5, 7, 9].includes(jupToMarsDist);
        const jupTo7thDist = (7 - jup.houseInLagna + 12) % 12 + 1;
        const jupOn7th = [1, 5, 7, 9].includes(jupTo7thDist);
        if (jupOnMars || jupOn7th) {
          const targetTxt = jupOnMars && jupOn7th ? "मंगल एवं सप्तम भाव दोनों" : jupOnMars ? "मंगल" : "सप्तम भाव";
          selfPariharReasons.push(`देवगुरु बृहस्पति की ${targetTxt} पर शुभ युति/दृष्टि से गुरु परिहार`);
          selfShortTags.push("गुरु दृष्टि");
        }
      }
    }
    return {
      rawManglik,
      inLagna,
      inMoon,
      inVenus,
      baseSeverity,
      selfPariharReasons,
      selfShortTags
    };
  };
  const boyManglikBase = evaluateSideManglikBase(
    boyKundali,
    boyMarsHouseLagna,
    boyMarsHouseMoon,
    boyMarsHouseVenus
  );
  const girlManglikBase = evaluateSideManglikBase(
    girlKundali,
    girlMarsHouseLagna,
    girlMarsHouseMoon,
    girlMarsHouseVenus
  );
  const findPartnerMaleficCounters = (partnerKundali) => {
    if (!partnerKundali) return [];
    const counterIds = ["saturn", "rahu", "ketu", "sun"];
    const hits = [];
    for (const pid of counterIds) {
      const pl = partnerKundali.planets.find((p) => p.id === pid);
      if (pl && partnerCounterHouses.includes(pl.houseInLagna)) {
        hits.push(`${pl.hindiName} (${formatHindiHousePhrase(pl.houseInLagna)})`);
      }
    }
    return hits;
  };
  const boyPartnerCounters = findPartnerMaleficCounters(girlKundali);
  const girlPartnerCounters = findPartnerMaleficCounters(boyKundali);
  const boyPariharReasons = [...boyManglikBase.selfPariharReasons];
  const girlPariharReasons = [...girlManglikBase.selfPariharReasons];
  const boyShortTags = [...boyManglikBase.selfShortTags];
  const girlShortTags = [...girlManglikBase.selfShortTags];
  if (boyManglikBase.rawManglik && girlManglikBase.rawManglik) {
    boyPariharReasons.push("वर एवं वधू दोनों में मांगलिक योग होने से द्विपक्षीय परस्पर परिहार");
    girlPariharReasons.push("वर एवं वधू दोनों में मांगलिक योग होने से द्विपक्षीय परस्पर परिहार");
    boyShortTags.push("द्विपक्षीय");
    girlShortTags.push("द्विपक्षीय");
  } else {
    if (boyManglikBase.rawManglik && boyPartnerCounters.length > 0) {
      boyPariharReasons.push(
        `वधू की कुंडली के मांगलिक भाव में ${boyPartnerCounters.slice(0, 2).join(" व ")} स्थित होने से क्रूरग्रह परिहार`
      );
      boyShortTags.push("साथी क्रूरग्रह");
    }
    if (girlManglikBase.rawManglik && girlPartnerCounters.length > 0) {
      girlPariharReasons.push(
        `वर की कुंडली के मांगलिक भाव में ${girlPartnerCounters.slice(0, 2).join(" व ")} स्थित होने से क्रूरग्रह परिहार`
      );
      girlShortTags.push("साथी क्रूरग्रह");
    }
  }
  const boyCancelled = boyManglikBase.rawManglik && boyPariharReasons.length > 0;
  const girlCancelled = girlManglikBase.rawManglik && girlPariharReasons.length > 0;
  const boyManglik = boyManglikBase.rawManglik && !boyCancelled;
  const girlManglik = girlManglikBase.rawManglik && !girlCancelled;
  const formatUnifiedManglikLabel = (raw, baseSeverity, cancelled, shortTags) => {
    if (!raw) return "मांगलिक दोष मुक्त";
    if (cancelled) {
      const uniqueTags = Array.from(new Set(shortTags)).slice(0, 2).join("/");
      return `${baseSeverity} (${uniqueTags} परिहार से दोष भंग)`;
    }
    return `${baseSeverity} (सक्रिय — शांति अपेक्षित)`;
  };
  const boySeverity = formatUnifiedManglikLabel(
    boyManglikBase.rawManglik,
    boyManglikBase.baseSeverity,
    boyCancelled,
    boyShortTags
  );
  const girlSeverity = formatUnifiedManglikLabel(
    girlManglikBase.rawManglik,
    girlManglikBase.baseSeverity,
    girlCancelled,
    girlShortTags
  );
  const manglikMatch = !boyManglik && !girlManglik;
  let manglikDescription = "";
  if (!boyManglikBase.rawManglik && !girlManglikBase.rawManglik) {
    manglikDescription = `वर (मंगल लग्न से ${formatHindiHousePhrase(boyMarsHouseLagna)}, चन्द्र से ${formatHindiHousePhrase(boyMarsHouseMoon)}, शुक्र से ${formatHindiHousePhrase(boyMarsHouseVenus)}) एवं वधू (मंगल लग्न से ${formatHindiHousePhrase(girlMarsHouseLagna)}, चन्द्र से ${formatHindiHousePhrase(girlMarsHouseMoon)}, शुक्र से ${formatHindiHousePhrase(girlMarsHouseVenus)}) — दोनों की कुंडली मांगलिक दोष से पूर्णतः मुक्त (सौम्य) है। मांगलिक दृष्टि से यह विवाह सर्वथा शुभ है।`;
  } else if (manglikMatch) {
    const parts = [];
    if (boyManglikBase.rawManglik) {
      parts.push(
        `वर की कुंडली में ${boyManglikBase.baseSeverity} स्थिति (लग्न से ${formatHindiHousePhrase(boyMarsHouseLagna)}, चन्द्र से ${formatHindiHousePhrase(boyMarsHouseMoon)}, शुक्र से ${formatHindiHousePhrase(boyMarsHouseVenus)}) बन रही है, किंतु ${boyPariharReasons.slice(0, 2).join(" तथा ")} के कारण इसका दोष भंग हो रहा है`
      );
    } else {
      parts.push(`वर की कुंडली मांगलिक दोष से मुक्त (मंगल ${formatHindiHousePhrase(boyMarsHouseLagna)} में) है`);
    }
    if (girlManglikBase.rawManglik) {
      parts.push(
        `वधू की कुंडली में ${girlManglikBase.baseSeverity} स्थिति (लग्न से ${formatHindiHousePhrase(girlMarsHouseLagna)}, चन्द्र से ${formatHindiHousePhrase(girlMarsHouseMoon)}, शुक्र से ${formatHindiHousePhrase(girlMarsHouseVenus)}) बन रही है, किंतु ${girlPariharReasons.slice(0, 2).join(" तथा ")} के कारण इसका दोष भंग हो रहा है`
      );
    } else {
      parts.push(`वधू की कुंडली मांगलिक दोष से मुक्त (मंगल ${formatHindiHousePhrase(girlMarsHouseLagna)} में) है`);
    }
    manglikDescription = `${parts.join("। ")}। अतः शास्त्रोक्त परिहार के कारण मांगलिक दृष्टि से यह विवाह पूर्णतः शुभ व सुरक्षित है।`;
  } else {
    manglikDescription = `वर (${boySeverity}; लग्न से ${formatHindiHousePhrase(boyMarsHouseLagna)}, चन्द्र से ${formatHindiHousePhrase(boyMarsHouseMoon)}, शुक्र से ${formatHindiHousePhrase(boyMarsHouseVenus)}) एवं वधू (${girlSeverity}; लग्न से ${formatHindiHousePhrase(girlMarsHouseLagna)}, चन्द्र से ${formatHindiHousePhrase(girlMarsHouseMoon)}, शुक्र से ${formatHindiHousePhrase(girlMarsHouseVenus)}) में एक पक्ष पर सक्रिय मांगलिक प्रभाव है और पूर्ण परिहार अनुपस्थित है। विवाह से पूर्व कुंभ/पीपल विवाह या मंगल चंडिका शांति अनुष्ठान आवश्यक है।`;
  }
  let overallVerdict = "";
  let verdictDescription = "";
  let statusColor = "emerald";
  if (totalScore >= 27 && manglikMatch) {
    overallVerdict = "सर्वोत्तम एवं दिव्य मिलान (Supreme Match)";
    verdictDescription = `खगोलीय गणना से 36 में से ${totalScore} गुण मिल रहे हैं तथा मांगलिक विचार भी अनुकूल है। यह एक अति प्रशस्त व श्रेष्ठ विवाह योग है।`;
    statusColor = "emerald";
  } else if (totalScore >= 18 && manglikMatch) {
    overallVerdict = "उत्तम एवं शास्त्रसम्मत मिलान (Auspicious Match)";
    verdictDescription = `खगोलीय गणना से 36 में से ${totalScore} गुण मिल रहे हैं (18+ गुण शुभ विवाह हेतु प्रशस्त हैं) और मांगलिक संतुलन अनुकूल है। दांपत्य जीवन सुखमय रहेगा।`;
    statusColor = "emerald";
  } else if (totalScore >= 18 && !manglikMatch) {
    overallVerdict = "गुण शुभ, मांगलिक विचारणीय (Guna Good, Manglik Check)";
    verdictDescription = `अष्टकूट में ${totalScore}/36 गुण शुभ मिल रहे हैं, परन्तु एक पक्ष में सक्रिय मांगलिक प्रभाव होने से मंगल परिहार व शांति पूजन के पश्चात विवाह करना उत्तम रहेगा।`;
    statusColor = "amber";
  } else {
    overallVerdict = "विचारणीय मिलान (Detailed Parihar Required)";
    verdictDescription = `अष्टकूट गणना में 36 में से ${totalScore} गुण प्राप्त हुए हैं (18 से कम)। विवाह निर्णय से पूर्व दोनों की लग्न कुंडली के सप्तम भाव, तारा-नाड़ी परिहार व गुरु-शुक्र बल की जांच कराएं।`;
    statusColor = "rose";
  }
  const boyLagna = boyKundali ? boyKundali.panchang.lagnaName : boyRashi;
  const girlLagna = girlKundali ? girlKundali.panchang.lagnaName : girlRashi;
  const boyRashiLord = LORD_NAMES[boyLordIdx];
  const girlRashiLord = LORD_NAMES[girlLordIdx];
  const boyJup = boyKundali?.planets.find((p) => p.id === "jupiter");
  const girlJup = girlKundali?.planets.find((p) => p.id === "jupiter");
  const boyVen = boyKundali?.planets.find((p) => p.id === "venus");
  const girlVen = girlKundali?.planets.find((p) => p.id === "venus");
  const planetaryHarmony = {
    rashiLordRelation: `वर राशि स्वामी ${boyRashiLord} एवं कन्या राशि स्वामी ${girlRashiLord} के मध्य ${grahaObtained}/5 मैत्री अंक हैं।`,
    seventhHouseSummary: boyKundali && girlKundali ? `वर का लग्न ${boyLagna} (सप्तम भाव में ${boyKundali.lagnaChart[6].rashiName.split(" ")[0]} राशि) तथा वधू का लग्न ${girlLagna} (सप्तम भाव में ${girlKundali.lagnaChart[6].rashiName.split(" ")[0]} राशि) है।` : `वर (${boyRashi}) एवं वधू (${girlRashi}) के सप्तम भाव का सामंजस्य।`,
    jupiterVenusSummary: boyJup && girlJup && boyVen && girlVen ? `वर के शुक्र ${boyVen.rashiName.split(" ")[0]} (${formatHindiHousePhrase(boyVen.houseInLagna)}) में एवं वधू के गुरु ${girlJup.rashiName.split(" ")[0]} (${formatHindiHousePhrase(girlJup.houseInLagna)}) में स्थित होकर वैवाहिक स्थायित्व को प्रभावित कर रहे हैं।` : "गुरु एवं शुक्र की शुभता से दांपत्य सुख प्राप्त होता है।"
  };
  const deepMatchInsights = (() => {
    const hasGanaParihar = ganaObtained < 5 && grahaObtained >= 4;
    const nadiPariharStatus = nadiObtained === 8 ? "शुद्ध" : hasNadiParihar ? "परिहार लागू (Cancelled)" : "शांति आवश्यक";
    const bhakootPariharStatus = bhakootObtained === 7 ? "शुद्ध" : hasBhakootParihar ? "परिहार लागू (Cancelled)" : "शांति आवश्यक";
    const ganaPariharStatus = ganaObtained >= 5 ? "शुद्ध" : hasGanaParihar ? "परिहार लागू (Cancelled)" : "शांति आवश्यक";
    const manglikPariharStatus = !boyManglikBase.rawManglik && !girlManglikBase.rawManglik ? "शुद्ध" : manglikMatch ? "परिहार लागू (Cancelled)" : "शांति आवश्यक";
    const combinedManglikPariharRule = (() => {
      if (!boyManglikBase.rawManglik && !girlManglikBase.rawManglik) return "दोनों कुंडली दोष-मुक्त";
      if (manglikMatch) {
        const allTags = Array.from(/* @__PURE__ */ new Set([...boyShortTags, ...girlShortTags])).filter(Boolean);
        return allTags.length > 0 ? `${allTags.join(" / ")} शास्त्रोक्त परिहार से दोष भंग` : "शास्त्रोक्त मांगलिक परिहार लागू";
      }
      return "एकपक्षीय सक्रिय मंगल — कुम्भ/पीपल विवाह व मंगल चंडिका शांति";
    })();
    const pariharChecks = [
      {
        doshaName: "नाड़ी कूट परीक्षण (Nadi)",
        status: nadiPariharStatus,
        rule: nadiObtained === 8 ? "भिन्न नाड़ी (8/8)" : hasNadiParihar ? "एक राशि-भिन्न नक्षत्र / चरण भेद परिहार" : "समान नाड़ी — महामृत्युंजय एवं स्वर्ण-नाड़ी दान आवश्यक",
        detail: nadiResult.verdict
      },
      {
        doshaName: "भकूट कूट परीक्षण (Bhakoot)",
        status: bhakootPariharStatus,
        rule: bhakootObtained === 7 ? "शुभ राशि अंतराल (7/7)" : hasBhakootParihar ? `राशिपति मैत्री (${boyRashiLord}–${girlRashiLord}) परिहार` : "षडाष्टक / द्विर्द्वादश — गौरी-शंकर व लक्ष्मीनारायण पूजा",
        detail: bhakootResult.verdict
      },
      {
        doshaName: "गण कूट परीक्षण (Gana)",
        status: ganaPariharStatus,
        rule: ganaObtained >= 5 ? "समान/मित्र गण (5–6/6)" : hasGanaParihar ? "राशिपति मित्रता द्वारा गण परिहार" : "ग्रह मैत्री न्यून — पारस्परिक संवाद, धैर्य व शिव-पार्वती पूजन",
        detail: ganaResult.verdict
      },
      {
        doshaName: "मांगलिक (कुज) परीक्षण",
        status: manglikPariharStatus,
        rule: combinedManglikPariharRule,
        detail: manglikDescription
      }
    ];
    const RAJJU_GROUPS = [
      "पाद रज्जु (Pad)",
      "कटि रज्जु (Kati)",
      "नाभि रज्जु (Nabhi)",
      "कंठ रज्जु (Kantha)",
      "शिर रज्जु (Shira)",
      "कंठ रज्जु (Kantha)",
      "नाभि रज्जु (Nabhi)",
      "कटि रज्जु (Kati)",
      "पाद रज्जु (Pad)"
    ];
    const boyRajju = RAJJU_GROUPS[boyNakIdx % 9];
    const girlRajju = RAJJU_GROUPS[girlNakIdx % 9];
    const sameRajju = boyRajju === girlRajju;
    const VEDHA_PAIRS = [
      [0, 17],
      // Ashwini - Jyeshtha
      [1, 16],
      // Bharani - Anuradha
      [2, 15],
      // Krittika - Vishakha
      [3, 14],
      // Rohini - Swati
      [5, 21],
      // Ardra - Shravana
      [6, 20],
      // Punarvasu - Uttara Ashadha
      [7, 19],
      // Pushya - Purva Ashadha
      [8, 18],
      // Ashlesha - Mula
      [9, 26],
      // Magha - Revati
      [10, 25],
      // Purva Phalguni - Uttara Bhadrapada
      [11, 24],
      // Uttara Phalguni - Purva Bhadrapada
      [12, 23],
      // Hasta - Shatabhisha
      [4, 22],
      // Mrigashira - Dhanishta
      [13, 4],
      // Chitra - Mrigashira
      [13, 22]
      // Chitra - Dhanishta
    ];
    const hasVedhaDosha = VEDHA_PAIRS.some(
      ([a, b]) => a === boyNakIdx && b === girlNakIdx || b === boyNakIdx && a === girlNakIdx
    );
    const girlToBoyDist = (boyNakIdx - girlNakIdx + 27) % 27 + 1;
    const isMahendraShubh = [4, 7, 10, 13, 16, 19, 22, 25].includes(girlToBoyDist);
    const isStreeDeergaShubh = girlToBoyDist >= 13;
    const isStreeDeergaMod = girlToBoyDist >= 9 && girlToBoyDist < 13;
    const extendedKoots = [
      {
        name: "रज्जु कूट (Rajju / आयुष्य रक्षा)",
        status: sameRajju ? "विचारणीय" : "शुभ",
        boyDetail: boyRajju,
        girlDetail: girlRajju,
        detail: sameRajju ? `वर व वधू दोनों की ${boyRajju} समान आ रही है; महामृत्युंजय मंत्र जाप एवं शुद्ध विवाह मुहूर्त से इसका पूर्ण परिहार करें।` : `वर (${boyRajju}) एवं वधू (${girlRajju}) की रज्जु भिन्न होने से रज्जु दोष नहीं है — यह दीर्घायु व अखंड सौभाग्य का सूचक है।`
      },
      {
        name: "वेध कूट (Vedha / अवरोध परीक्षण)",
        status: hasVedhaDosha ? "विचारणीय" : "शुभ",
        boyDetail: boyNakshatra.split(" ")[0],
        girlDetail: girlNakshatra.split(" ")[0],
        detail: hasVedhaDosha ? `${boyNakshatra.split(" ")[0]} एवं ${girlNakshatra.split(" ")[0]} में पारस्परिक नक्षत्र वेध बन रहा है — विवाह से पूर्व नवग्रह हवन व गौरी-शंकर अभिषेक कराएं।` : "दोनों के जन्म नक्षत्र वेध-रहित (Vedha Free) हैं — जीवन में अनावश्यक कलह व आकस्मिक अवरोध नहीं होंगे।"
      },
      {
        name: "महेन्द्र कूट (संतान एवं कुल वृद्धि)",
        status: isMahendraShubh ? "शुभ" : "मध्यम",
        boyDetail: `अंतर: ${girlToBoyDist} नक्षत्र`,
        girlDetail: isMahendraShubh ? "महेन्द्र सिद्ध" : "सामान्य स्थिति",
        detail: isMahendraShubh ? `कन्या नक्षत्र से वर नक्षत्र ${formatHindiCountOrdinal(girlToBoyDist)} स्थान पर होने से प्रबल महेन्द्र कूट बन रहा है — उत्तम संतान व वंश वृद्धि होगी।` : `कन्या से वर नक्षत्र की दूरी ${girlToBoyDist} है — सामान्य फल, किंतु नाड़ी व गुरु बल संतान पक्ष को शुभ बनाएगा।`
      },
      {
        name: "स्त्री दीर्घ कूट (दाम्पत्य सुख व श्री)",
        status: isStreeDeergaShubh ? "शुभ" : isStreeDeergaMod ? "मध्यम" : "विचारणीय",
        boyDetail: `दूरी: ${girlToBoyDist}/27`,
        girlDetail: isStreeDeergaShubh ? "अति प्रशस्त (13+)" : isStreeDeergaMod ? "संतुलित (9–12)" : "सामान्य (<9)",
        detail: isStreeDeergaShubh ? "स्त्री दीर्घ कूट पूर्णतः शुद्ध (13+ नक्षत्र अंतराल) है, जो वधू के दीर्घ सौभाग्य व पारिवारिक सुख-समृद्धि का प्रबल प्रमाण है।" : isStreeDeergaMod ? "स्त्री दीर्घ मध्यम-शुभ है; कुंडली में शुक्र-गुरु के शुभ समन्वय से गृहस्थ सुख बना रहेगा।" : "नक्षत्र दूरी 9 से कम होने से कन्या के सुखी जीवन हेतु लक्ष्मीनारायण पूजन व पीली वस्तु दान शुभ रहेगा।"
      }
    ];
    const boyD9Lagna = boyKundali?.navamsaChart?.[0]?.rashiName || boyRashi;
    const girlD9Lagna = girlKundali?.navamsaChart?.[0]?.rashiName || girlRashi;
    const boyCurrDasha = boyKundali?.mahadashas.find((d) => d.isCurrent);
    const girlCurrDasha = girlKundali?.mahadashas.find((d) => d.isCurrent);
    const dashaSandhiClash = boyCurrDasha && girlCurrDasha && Math.abs(boyCurrDasha.endYear - girlCurrDasha.endYear) <= 1.5;
    const navamshaCrossCheck = `वर का नवांश लग्न ${boyD9Lagna} (सक्रिय महादशा: ${boyCurrDasha?.planet || "गुरु"}, ${boyCurrDasha?.startDateDisplay || ""}–${boyCurrDasha?.endDateDisplay || ""}) एवं वधू का नवांश लग्न ${girlD9Lagna} (सक्रिय महादशा: ${girlCurrDasha?.planet || "शुक्र"}, ${girlCurrDasha?.startDateDisplay || ""}–${girlCurrDasha?.endDateDisplay || ""}) है। ${dashaSandhiClash ? "दोनों की महादशा परिवर्तन संधि निकट होने से आगामी १-२ वर्षों में बड़े निर्णयों में धैर्य व शांत संवाद रखें।" : "दोनों की दशा संधि में कोई टकराव नहीं है — वैवाहिक जीवन में क्रमिक उन्नति एवं स्थायित्व बना रहेगा।"}`;
    const marriageTimingAndLongevity = `${totalScore >= 24 && manglikMatch && !sameRajju ? "अष्टकूट (36 गुण), रज्जु-वेध तथा मांगलिक संतुलन की दृष्टि से दीर्घायु, संतान सुख एवं उत्तरोत्तर भाग्योदय के श्रेष्ठ योग हैं।" : "विवाह से पूर्व शुद्ध गोधूलि/अभिजित लग्न, त्रिबल शुद्धि (सूर्य-चन्द्र-गुरु बल) तथा नीचे दिए गए वैदिक परिहार संपन्न कर विवाह करना मंगलमय रहेगा।"}`;
    const practicalRemedies = [
      "विवाह पूर्व वर-वधू दोनों के नाम से भगवान शिव-पार्वती का रुद्राभिषेक एवं श्री गणपति-कुलदेवता पूजन संपन्न कराएं।"
    ];
    if (nadiObtained === 0 && !hasNadiParihar) {
      practicalRemedies.push(
        "नाड़ी दोष निवारण हेतु महामृत्युंजय मंत्र (11,000 या सवा लाख) जप, स्वर्ण-नाड़ी दान एवं तुला/अन्न दान अनिवार्य रूप से कराएं।"
      );
    }
    if (bhakootObtained === 0 && !hasBhakootParihar) {
      practicalRemedies.push(
        "भकूट दोष शांति हेतु श्री लक्ष्मीनारायण हवन एवं वर-वधू के राशि स्वामियों के मंत्रों का जप कराएं।"
      );
    }
    if (ganaObtained === 0 && !hasGanaParihar) {
      practicalRemedies.push(
        "गण भिन्नता व मानसिक सामंजस्य हेतु गणपति अथर्वशीर्ष पाठ एवं गौरी-शंकर अभिषेक कराएं तथा संवाद में धैर्य रखें।"
      );
    }
    if (!manglikMatch) {
      practicalRemedies.push(
        "एकपक्षीय सक्रिय मंगल दोष शमन हेतु विवाह पूर्व शास्त्रोक्त कुंभ विवाह / पीपल विवाह व मंगल चंडिका स्तोत्र पाठ कराएं।"
      );
    }
    if (sameRajju || hasVedhaDosha) {
      practicalRemedies.push(
        `${sameRajju ? "रज्जु दोष" : ""}${sameRajju && hasVedhaDosha ? " एवं " : ""}${hasVedhaDosha ? "वेध दोष" : ""} शांति हेतु वट-सावित्री पूजन, स्वर्ण दान व शुभ गुरु-पुष्य/अभिजित मुहूर्त में पाणिग्रहण संस्कार कराएं।`
      );
    }
    practicalRemedies.push(
      'गृहस्थ जीवन में प्रेम व सामंजस्य बढ़ाने हेतु पूजा घर में गौरी-शंकर रुद्राक्ष स्थापित कर नित्य "ॐ उमा-महेश्वराभ्यां नमः" का 11 बार जप करें।'
    );
    return {
      pariharChecks,
      extendedKoots,
      navamshaCrossCheck,
      marriageTimingAndLongevity,
      practicalRemedies
    };
  })();
  return {
    boyName,
    girlName,
    boyDob,
    boyTime,
    boyPlace,
    girlDob,
    girlTime,
    girlPlace,
    boyRashi,
    girlRashi,
    boyNakshatra,
    girlNakshatra,
    boyPada,
    girlPada,
    boyLagna,
    girlLagna,
    boyRashiLord,
    girlRashiLord,
    boyKundali,
    girlKundali,
    totalScore,
    maxScore: 36,
    compatibilityPercentage,
    overallVerdict,
    verdictDescription,
    statusColor,
    koots,
    manglikStatus: {
      boyManglik,
      girlManglik,
      boyRawManglik: boyManglikBase.rawManglik,
      girlRawManglik: girlManglikBase.rawManglik,
      boyCancelled,
      girlCancelled,
      boyPariharReasons,
      girlPariharReasons,
      boySeverity,
      girlSeverity,
      boyMarsHouseLagna,
      girlMarsHouseLagna,
      boyMarsHouseMoon,
      girlMarsHouseMoon,
      boyMarsHouseVenus,
      girlMarsHouseVenus,
      manglikMatch,
      description: manglikDescription
    },
    planetaryHarmony,
    deepMatchInsights
  };
}
const ACTIVE_PROFILE_KEY = "panditji_default_active_profile";
const UNIFIED_YAJMAN_KEY = "activeYajmanProfile";
function safeParseProfile(raw, keyToClean) {
  if (!raw || raw === "undefined" || raw === "null" || raw.trim() === "") {
    if (keyToClean) {
      try {
        localStorage.removeItem(keyToClean);
      } catch {
      }
    }
    return null;
  }
  try {
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed === "object" && parsed.name) {
      if ((parsed.name.toLowerCase().includes("pragya") || parsed.name.includes("प्रज्ञा")) && parsed.dob === "1998-05-12") {
        parsed.dob = "1996-11-06";
        if (parsed.birthTime === "18:20") parsed.birthTime = "14:15";
        if (parsed.birthPlace === "हरिद्वार, उत्तराखण्ड") parsed.birthPlace = "रुद्रपुर, उत्तराखण्ड";
        if (keyToClean) {
          try {
            localStorage.setItem(keyToClean, JSON.stringify(parsed));
          } catch {
          }
        }
      }
      return parsed;
    }
  } catch {
    if (keyToClean) {
      try {
        localStorage.removeItem(keyToClean);
      } catch {
      }
    }
  }
  return null;
}
const getLoggedInUserAccountData = () => {
  const emptyGuest = {
    isLoggedIn: false,
    name: "",
    dob: "",
    birthTime: "",
    birthPlace: "",
    phone: "",
    rashi: ""
  };
  try {
    if (typeof window === "undefined" || !window.localStorage) return emptyGuest;
    const rawActiveAccount = localStorage.getItem("panditji_active_user_account");
    const rawCurrentUser = localStorage.getItem("panditji_current_user");
    const rawActivePhone = localStorage.getItem("panditji_active_mobile_phone");
    const rawSessionToken = localStorage.getItem("panditji_active_session_token");
    const parseUserObj = (raw) => {
      if (!raw || raw === "null" || raw === "undefined" || !raw.trim()) return null;
      try {
        const obj = JSON.parse(raw);
        if (obj && typeof obj === "object" && (obj.name || obj.phone || obj.dob)) {
          return obj;
        }
      } catch {
      }
      return null;
    };
    const directAccount = parseUserObj(rawActiveAccount) || parseUserObj(rawCurrentUser);
    let phoneAccount = null;
    const cleanPhone = rawActivePhone && rawActivePhone !== "null" && rawActivePhone !== "undefined" ? rawActivePhone.trim() : "";
    const hasValidSessionToken = rawSessionToken && rawSessionToken !== "null" && rawSessionToken !== "undefined" && rawSessionToken.trim() !== "";
    if (cleanPhone) {
      const rawAllAccounts = localStorage.getItem("panditji_user_accounts_v2");
      if (rawAllAccounts) {
        try {
          const allMap = JSON.parse(rawAllAccounts);
          if (allMap && typeof allMap === "object" && allMap[cleanPhone]) {
            phoneAccount = allMap[cleanPhone];
          }
        } catch {
        }
      }
    }
    const isUserLoggedIn = Boolean(directAccount || phoneAccount || cleanPhone || hasValidSessionToken);
    if (!isUserLoggedIn) {
      return emptyGuest;
    }
    const p1 = safeParseProfile(localStorage.getItem(UNIFIED_YAJMAN_KEY), UNIFIED_YAJMAN_KEY);
    const p2 = safeParseProfile(localStorage.getItem(ACTIVE_PROFILE_KEY), ACTIVE_PROFILE_KEY);
    const vaultProfile = p1 || p2;
    const mergedName = directAccount?.name || phoneAccount?.name || vaultProfile?.name || "";
    const mergedDob = directAccount?.dob || phoneAccount?.dob || vaultProfile?.dob || "";
    const mergedTime = directAccount?.birthTime || phoneAccount?.birthTime || vaultProfile?.birthTime || "";
    const mergedPlace = directAccount?.birthPlace || phoneAccount?.birthPlace || vaultProfile?.birthPlace || "";
    const mergedPhone = directAccount?.phone || phoneAccount?.phone || cleanPhone || "";
    const mergedRashi = directAccount?.rashi || phoneAccount?.rashi || vaultProfile?.rashi || "";
    if (!mergedName && !mergedDob && !mergedPhone) {
      return emptyGuest;
    }
    return {
      isLoggedIn: true,
      name: String(mergedName).trim(),
      dob: String(mergedDob).trim(),
      birthTime: String(mergedTime).trim(),
      birthPlace: String(mergedPlace).trim(),
      phone: String(mergedPhone).trim(),
      rashi: String(mergedRashi).trim()
    };
  } catch {
    return emptyGuest;
  }
};
const getActiveProfile = () => {
  try {
    const loginData = getLoggedInUserAccountData();
    if (!loginData.isLoggedIn) {
      return null;
    }
    const p1 = safeParseProfile(localStorage.getItem(UNIFIED_YAJMAN_KEY), UNIFIED_YAJMAN_KEY);
    if (p1) return p1;
    const p2 = safeParseProfile(localStorage.getItem(ACTIVE_PROFILE_KEY), ACTIVE_PROFILE_KEY);
    if (p2) return p2;
    if (loginData.name) {
      const nowIso = (/* @__PURE__ */ new Date()).toISOString();
      return {
        id: "logged_in_user",
        name: loginData.name,
        relation: "self",
        gender: "male",
        dob: loginData.dob,
        birthTime: loginData.birthTime,
        birthPlace: loginData.birthPlace,
        rashi: loginData.rashi,
        rashiLord: "",
        nakshatra: "",
        nakshatraPada: 1,
        lagna: "",
        isPrimary: true,
        createdAt: nowIso,
        updatedAt: nowIso
      };
    }
  } catch {
  }
  return null;
};
const setActiveProfile = (profile) => {
  try {
    if (!profile || typeof profile !== "object" || !profile.name) {
      clearActiveProfile();
      return;
    }
    const existingRaw = localStorage.getItem(UNIFIED_YAJMAN_KEY);
    if (existingRaw) {
      try {
        const existing = JSON.parse(existingRaw);
        if (existing && existing.id === profile.id && existing.name === profile.name && (existing.dob || "") === (profile.dob || "") && (existing.birthTime || "") === (profile.birthTime || "") && (existing.birthPlace || "") === (profile.birthPlace || "") && (existing.rashi || "") === (profile.rashi || "") && (existing.lagna || "") === (profile.lagna || "") && (existing.nakshatra || "") === (profile.nakshatra || "")) {
          return;
        }
      } catch {
      }
    }
    const serialized = JSON.stringify(profile);
    localStorage.setItem(UNIFIED_YAJMAN_KEY, serialized);
    localStorage.setItem(ACTIVE_PROFILE_KEY, serialized);
    window.dispatchEvent(new Event("panditji_active_profile_updated"));
  } catch (e) {
    console.error("Error saving active profile", e);
  }
};
const clearActiveProfile = () => {
  try {
    localStorage.removeItem(UNIFIED_YAJMAN_KEY);
    localStorage.removeItem(ACTIVE_PROFILE_KEY);
    localStorage.removeItem("panditji_active_mobile_phone");
    localStorage.removeItem("panditji_family_vault_v1");
    window.dispatchEvent(new Event("panditji_active_profile_updated"));
    window.dispatchEvent(new CustomEvent("panditji_vault_updated", { detail: [] }));
  } catch (e) {
    console.error("Error clearing active profile", e);
  }
};
const DEG2RAD = Math.PI / 180;
const RAD2DEG = 180 / Math.PI;
const RASHI_DISPLAY_12 = [
  { name: "मेष (Aries)", lord: "मंगल (Mars)" },
  { name: "वृषभ (Taurus)", lord: "शुक्र (Venus)" },
  { name: "मिथुन (Gemini)", lord: "बुध (Mercury)" },
  { name: "कर्क (Cancer)", lord: "चंद्र (Moon)" },
  { name: "सिंह (Leo)", lord: "सूर्य (Sun)" },
  { name: "कन्या (Virgo)", lord: "बुध (Mercury)" },
  { name: "तुला (Libra)", lord: "शुक्र (Venus)" },
  { name: "वृश्चिक (Scorpio)", lord: "मंगल (Mars)" },
  { name: "धनु (Sagittarius)", lord: "गुरु (Jupiter)" },
  { name: "मकर (Capricorn)", lord: "शनि (Saturn)" },
  { name: "कुंभ (Aquarius)", lord: "शनि (Saturn)" },
  { name: "मीन (Pisces)", lord: "गुरु (Jupiter)" }
];
const NAKSHATRA_EN_27 = [
  "Ashwini",
  "Bharani",
  "Krittika",
  "Rohini",
  "Mrigashira",
  "Ardra",
  "Punarvasu",
  "Pushya",
  "Ashlesha",
  "Magha",
  "Purva Phalguni",
  "Uttara Phalguni",
  "Hasta",
  "Chitra",
  "Swati",
  "Vishakha",
  "Anuradha",
  "Jyeshtha",
  "Mula",
  "Purva Ashadha",
  "Uttara Ashadha",
  "Shravana",
  "Dhanishta",
  "Shatabhisha",
  "Purva Bhadrapada",
  "Uttara Bhadrapada",
  "Revati"
];
const AVAKAHADA_NAME_RULES = [
  // 1. मेष (Aries)
  { rashi: "मेष (Aries)", nakshatra: "अश्विनी (Ashwini)", rashiLord: "मंगल (Mars)", element: "अग्नि (Fire)", symbol: "मेष (Ram)", aksharsHi: ["चू", "चे", "चो", "ला", "चु"], prefixesEn: ["chu", "che", "cho", "la"] },
  { rashi: "मेष (Aries)", nakshatra: "भरणी (Bharani)", rashiLord: "मंगल (Mars)", element: "अग्नि (Fire)", symbol: "मेष (Ram)", aksharsHi: ["ली", "लू", "ले", "लो", "लि", "लु", "ल"], prefixesEn: ["li", "lu", "le", "lo", "l"] },
  { rashi: "मेष (Aries)", nakshatra: "कृत्तिका (Krittika)", rashiLord: "मंगल (Mars)", element: "अग्नि (Fire)", symbol: "मेष (Ram)", aksharsHi: ["अं", "अः", "आ", "अ"], prefixesEn: ["aa", "an", "am", "a"] },
  // 2. वृषभ (Taurus)
  { rashi: "वृषभ (Taurus)", nakshatra: "कृत्तिका (Krittika)", rashiLord: "शुक्र (Venus)", element: "पृथ्वी (Earth)", symbol: "वृष/बैल (Bull)", aksharsHi: ["ई", "ऊ", "ए", "इ", "उ", "ऐ"], prefixesEn: ["ee", "oo", "ae", "i", "u", "e"] },
  { rashi: "वृषभ (Taurus)", nakshatra: "रोहिणी (Rohini)", rashiLord: "शुक्र (Venus)", element: "पृथ्वी (Earth)", symbol: "वृष/बैल (Bull)", aksharsHi: ["ओ", "औ", "वा", "वी", "वू", "वि", "वु", "व"], prefixesEn: ["va", "vi", "vu", "o", "v", "w"] },
  { rashi: "वृषभ (Taurus)", nakshatra: "मृगशिरा (Mrigashira)", rashiLord: "शुक्र (Venus)", element: "पृथ्वी (Earth)", symbol: "वृष/बैल (Bull)", aksharsHi: ["वे", "वो", "बा", "बी", "बू", "बे", "बो", "ब"], prefixesEn: ["ve", "vo", "ba", "bi", "bu", "be", "bo", "b"] },
  // 3. मिथुन (Gemini)
  { rashi: "मिथुन (Gemini)", nakshatra: "मृगशिरा (Mrigashira)", rashiLord: "बुध (Mercury)", element: "वायु (Air)", symbol: "युगल (Twins)", aksharsHi: ["का", "की", "कि", "क"], prefixesEn: ["ka", "ki", "k", "q"] },
  { rashi: "मिथुन (Gemini)", nakshatra: "आर्द्रा (Ardra)", rashiLord: "बुध (Mercury)", element: "वायु (Air)", symbol: "युगल (Twins)", aksharsHi: ["कू", "कु", "घ", "ङ", "छ"], prefixesEn: ["ku", "gh", "chh"] },
  { rashi: "मिथुन (Gemini)", nakshatra: "पुनर्वसु (Punarvasu)", rashiLord: "बुध (Mercury)", element: "वायु (Air)", symbol: "युगल (Twins)", aksharsHi: ["के", "को", "कौ", "हा"], prefixesEn: ["ke", "ko", "ha"] },
  // 4. कर्क (Cancer)
  { rashi: "कर्क (Cancer)", nakshatra: "पुनर्वसु (Punarvasu)", rashiLord: "चंद्र (Moon)", element: "जल (Water)", symbol: "कर्क/केकड़ा (Crab)", aksharsHi: ["ही", "हि", "ह"], prefixesEn: ["hi", "h"] },
  { rashi: "कर्क (Cancer)", nakshatra: "पुष्य (Pushya)", rashiLord: "चंद्र (Moon)", element: "जल (Water)", symbol: "कर्क/केकड़ा (Crab)", aksharsHi: ["हू", "हु", "हे", "हो", "डा"], prefixesEn: ["hu", "he", "ho", "da"] },
  { rashi: "कर्क (Cancer)", nakshatra: "आश्लेषा (Ashlesha)", rashiLord: "चंद्र (Moon)", element: "जल (Water)", symbol: "कर्क/केकड़ा (Crab)", aksharsHi: ["डी", "डू", "डे", "डो", "डि", "डु", "ड"], prefixesEn: ["dda", "ddi", "ddu", "dde", "ddo"] },
  // 5. सिंह (Leo)
  { rashi: "सिंह (Leo)", nakshatra: "मघा (Magha)", rashiLord: "सूर्य (Sun)", element: "अग्नि (Fire)", symbol: "सिंह/शेर (Lion)", aksharsHi: ["मा", "मी", "मू", "मे", "मि", "मु", "म"], prefixesEn: ["ma", "mi", "mu", "me", "m"] },
  { rashi: "सिंह (Leo)", nakshatra: "पूर्वाफाल्गुनी (Purva Phalguni)", rashiLord: "सूर्य (Sun)", element: "अग्नि (Fire)", symbol: "सिंह/शेर (Lion)", aksharsHi: ["मो", "टा", "टी", "टू", "टि", "टु", "ट"], prefixesEn: ["mo", "tta", "tti"] },
  { rashi: "सिंह (Leo)", nakshatra: "उत्तराफाल्गुनी (Uttara Phalguni)", rashiLord: "सूर्य (Sun)", element: "अग्नि (Fire)", symbol: "सिंह/शेर (Lion)", aksharsHi: ["टे"], prefixesEn: ["tte"] },
  // 6. कन्या (Virgo)
  { rashi: "कन्या (Virgo)", nakshatra: "उत्तराफाल्गुनी (Uttara Phalguni)", rashiLord: "बुध (Mercury)", element: "पृथ्वी (Earth)", symbol: "कन्या (Maiden)", aksharsHi: ["टो", "पा", "पी", "पि", "प"], prefixesEn: ["pa", "pi", "p"] },
  { rashi: "कन्या (Virgo)", nakshatra: "हस्त (Hasta)", rashiLord: "बुध (Mercury)", element: "पृथ्वी (Earth)", symbol: "कन्या (Maiden)", aksharsHi: ["पू", "पु", "ष", "ण", "ठ"], prefixesEn: ["pu", "shha", "tha"] },
  { rashi: "कन्या (Virgo)", nakshatra: "चित्रा (Chitra)", rashiLord: "बुध (Mercury)", element: "पृथ्वी (Earth)", symbol: "कन्या (Maiden)", aksharsHi: ["पे", "पो", "प्र", "प्री"], prefixesEn: ["pe", "po", "pr"] },
  // 7. तुला (Libra)
  { rashi: "तुला (Libra)", nakshatra: "चित्रा (Chitra)", rashiLord: "शुक्र (Venus)", element: "वायु (Air)", symbol: "तुला/तराजू (Scales)", aksharsHi: ["रा", "री", "रि", "र"], prefixesEn: ["ra", "ri", "r"] },
  { rashi: "तुला (Libra)", nakshatra: "स्वाति (Swati)", rashiLord: "शुक्र (Venus)", element: "वायु (Air)", symbol: "तुला/तराजू (Scales)", aksharsHi: ["रू", "रु", "रे", "रो", "ता", "त"], prefixesEn: ["ru", "re", "ro", "ta", "t"] },
  { rashi: "तुला (Libra)", nakshatra: "विशाखा (Vishakha)", rashiLord: "शुक्र (Venus)", element: "वायु (Air)", symbol: "तुला/तराजू (Scales)", aksharsHi: ["ती", "तू", "ते", "ति", "तु", "त्र"], prefixesEn: ["ti", "tu", "te", "tr"] },
  // 8. वृश्चिक (Scorpio)
  { rashi: "वृश्चिक (Scorpio)", nakshatra: "विशाखा (Vishakha)", rashiLord: "मंगल (Mars)", element: "जल (Water)", symbol: "वृश्चिक/बिच्छू (Scorpion)", aksharsHi: ["तो"], prefixesEn: ["to"] },
  { rashi: "वृश्चिक (Scorpio)", nakshatra: "अनुराधा (Anuradha)", rashiLord: "मंगल (Mars)", element: "जल (Water)", symbol: "वृश्चिक/बिच्छू (Scorpion)", aksharsHi: ["ना", "नी", "नू", "ने", "नि", "नु", "न"], prefixesEn: ["na", "ni", "nu", "ne", "n"] },
  { rashi: "वृश्चिक (Scorpio)", nakshatra: "ज्येष्ठा (Jyeshtha)", rashiLord: "मंगल (Mars)", element: "जल (Water)", symbol: "वृश्चिक/बिच्छू (Scorpion)", aksharsHi: ["नो", "या", "यी", "यू", "यि", "यु", "य"], prefixesEn: ["no", "ya", "yi", "yu", "y"] },
  // 9. धनु (Sagittarius)
  { rashi: "धनु (Sagittarius)", nakshatra: "मूल (Mula)", rashiLord: "गुरु (Jupiter)", element: "अग्नि (Fire)", symbol: "धनुर्धर (Archer)", aksharsHi: ["ये", "यो", "भा", "भी", "भि", "भ"], prefixesEn: ["ye", "yo", "bha", "bhi", "bh"] },
  { rashi: "धनु (Sagittarius)", nakshatra: "पूर्वाषाढ़ा (Purva Ashadha)", rashiLord: "गुरु (Jupiter)", element: "अग्नि (Fire)", symbol: "धनुर्धर (Archer)", aksharsHi: ["भू", "भु", "धा", "फा", "ढा", "ध", "फ"], prefixesEn: ["bhu", "dha", "pha", "dh", "ph", "f"] },
  { rashi: "धनु (Sagittarius)", nakshatra: "उत्तराषाढ़ा (Uttara Ashadha)", rashiLord: "गुरु (Jupiter)", element: "अग्नि (Fire)", symbol: "धनुर्धर (Archer)", aksharsHi: ["भे"], prefixesEn: ["bhe"] },
  // 10. मकर (Capricorn)
  { rashi: "मकर (Capricorn)", nakshatra: "उत्तराषाढ़ा (Uttara Ashadha)", rashiLord: "शनि (Saturn)", element: "पृथ्वी (Earth)", symbol: "मकर (Sea-Goat)", aksharsHi: ["भो", "जा", "जी", "जि", "ज"], prefixesEn: ["bho", "ja", "ji", "j", "z"] },
  { rashi: "मकर (Capricorn)", nakshatra: "श्रवण (Shravana)", rashiLord: "शनि (Saturn)", element: "पृथ्वी (Earth)", symbol: "मकर (Sea-Goat)", aksharsHi: ["खी", "खू", "खे", "खो", "खा", "खि", "खु", "ख"], prefixesEn: ["kha", "khi", "khu", "khe", "kho", "kh"] },
  { rashi: "मकर (Capricorn)", nakshatra: "धनिष्ठा (Dhanishta)", rashiLord: "शनि (Saturn)", element: "पृथ्वी (Earth)", symbol: "मकर (Sea-Goat)", aksharsHi: ["गा", "गी", "गि"], prefixesEn: ["ga", "gi"] },
  // 11. कुंभ (Aquarius)
  { rashi: "कुंभ (Aquarius)", nakshatra: "धनिष्ठा (Dhanishta)", rashiLord: "शनि (Saturn)", element: "वायु (Air)", symbol: "कुंभ/कलश (Water Bearer)", aksharsHi: ["गू", "गु", "गे", "गो", "ग"], prefixesEn: ["gu", "ge", "go", "g"] },
  { rashi: "कुंभ (Aquarius)", nakshatra: "शतभिषा (Shatabhisha)", rashiLord: "शनि (Saturn)", element: "वायु (Air)", symbol: "कुंभ/कलश (Water Bearer)", aksharsHi: ["सा", "सी", "सू", "से", "सि", "सु", "स", "श", "शि", "शु", "शे", "शो", "श्र", "श्व"], prefixesEn: ["sa", "si", "su", "se", "so", "sha", "shi", "shu", "she", "sho", "sh", "sr", "sw", "s"] },
  { rashi: "कुंभ (Aquarius)", nakshatra: "पूर्वाभाद्रपद (Purva Bhadrapada)", rashiLord: "शनि (Saturn)", element: "वायु (Air)", symbol: "कुंभ/कलश (Water Bearer)", aksharsHi: ["सो", "सौ", "दा"], prefixesEn: ["so", "daa"] },
  // 12. मीन (Pisces)
  { rashi: "मीन (Pisces)", nakshatra: "पूर्वाभाद्रपद (Purva Bhadrapada)", rashiLord: "गुरु (Jupiter)", element: "जल (Water)", symbol: "मत्स्य/मछली (Fish)", aksharsHi: ["दी", "दि"], prefixesEn: ["dee", "di"] },
  { rashi: "मीन (Pisces)", nakshatra: "उत्तराभाद्रपद (Uttara Bhadrapada)", rashiLord: "गुरु (Jupiter)", element: "जल (Water)", symbol: "मत्स्य/मछली (Fish)", aksharsHi: ["दू", "दु", "थ", "झ", "ञ"], prefixesEn: ["du", "th", "jh"] },
  { rashi: "मीन (Pisces)", nakshatra: "रेवती (Revati)", rashiLord: "गुरु (Jupiter)", element: "जल (Water)", symbol: "मत्स्य/मछली (Fish)", aksharsHi: ["दे", "दो", "चा", "ची", "चि", "द", "च"], prefixesEn: ["de", "do", "cha", "chi", "ch", "c", "d"] }
];
function getLightweightVedicDetailsFromName(rawName) {
  const clean = (rawName || "").trim();
  const lower = clean.toLowerCase();
  if (!lower) {
    return {
      name: rawName,
      rashi: "मेष (Aries)",
      nakshatra: "अश्विनी (Ashwini)",
      rashiLord: "मंगल (Mars)",
      element: "अग्नि (Fire)",
      symbol: "मेष (Ram)",
      initialLetter: "अ"
    };
  }
  let bestHindiMatch = null;
  for (const rule of AVAKAHADA_NAME_RULES) {
    for (const ak of rule.aksharsHi) {
      if (clean.startsWith(ak)) {
        if (!bestHindiMatch || ak.length > bestHindiMatch.akshar.length) {
          bestHindiMatch = { rule, akshar: ak };
        }
      }
    }
  }
  if (bestHindiMatch) {
    return {
      name: clean,
      rashi: bestHindiMatch.rule.rashi,
      nakshatra: bestHindiMatch.rule.nakshatra,
      rashiLord: bestHindiMatch.rule.rashiLord,
      element: bestHindiMatch.rule.element,
      symbol: bestHindiMatch.rule.symbol,
      initialLetter: bestHindiMatch.akshar
    };
  }
  for (const len of [3, 2, 1]) {
    if (lower.length < len) continue;
    const sub = lower.slice(0, len);
    for (const rule of AVAKAHADA_NAME_RULES) {
      if (rule.prefixesEn.includes(sub)) {
        return {
          name: clean,
          rashi: rule.rashi,
          nakshatra: rule.nakshatra,
          rashiLord: rule.rashiLord,
          element: rule.element,
          symbol: rule.symbol,
          initialLetter: clean.slice(0, len).toUpperCase()
        };
      }
    }
  }
  return {
    name: clean,
    rashi: "मेष (Aries)",
    nakshatra: "अश्विनी (Ashwini)",
    rashiLord: "मंगल (Mars)",
    element: "अग्नि (Fire)",
    symbol: "मेष (Ram)",
    initialLetter: clean[0].toUpperCase()
  };
}
function computeLightweightBirthBasics(dob, birthTime, birthPlace) {
  const dobMatch = (dob || "").trim().match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
  if (!dobMatch) return null;
  const year = Number(dobMatch[1]);
  const month = Number(dobMatch[2]);
  const day = Number(dobMatch[3]);
  const timeMatch = (birthTime || "10:00").trim().match(/^(\d{1,2}):(\d{2})/);
  const hour = timeMatch ? Math.min(23, Math.max(0, Number(timeMatch[1]))) : 10;
  const minute = timeMatch ? Math.min(59, Math.max(0, Number(timeMatch[2]))) : 0;
  const loc = resolveCityCoordinates(birthPlace?.trim() || "रुद्रपुर, उत्तराखण्ड");
  const tzOffsetMin = typeof loc.tzOffsetHours === "number" ? loc.tzOffsetHours * 60 : 330;
  const utcMs = Date.UTC(year, month - 1, day, hour, minute, 0) - tzOffsetMin * 6e4;
  const date = new Date(utcMs);
  if (Number.isNaN(date.getTime())) return null;
  const ayanamshaDeg = getAyanamshaDeg(utcMs, "LAHIRI");
  const moonTropDeg = getApparentMoonLonDeg(utcMs);
  const moonSiderealDeg = normalizeDeg(moonTropDeg - ayanamshaDeg);
  const moonRashiIdx = Math.floor(moonSiderealDeg / 30) % 12;
  const moonRashi = RASHI_DISPLAY_12[moonRashiIdx] || RASHI_DISPLAY_12[10];
  const nakSpan = 360 / 27;
  const nakIdx = Math.floor(moonSiderealDeg / nakSpan) % 27;
  const pada = Math.floor(moonSiderealDeg % nakSpan / (nakSpan / 4)) % 4 + 1;
  const nakHi = NAKSHATRAS_27[nakIdx] || "शतभिषा";
  const nakEn = NAKSHATRA_EN_27[nakIdx] || "Shatabhisha";
  const gastDeg = SiderealTime(date) * 15;
  const obliquityDeg = e_tilt(MakeTime(date)).tobl;
  const ramc = normalizeDeg(gastDeg + loc.lon) * DEG2RAD;
  const eps = obliquityDeg * DEG2RAD;
  const phi = loc.lat * DEG2RAD;
  const ascY = Math.cos(ramc);
  const ascX = -Math.sin(ramc) * Math.cos(eps) - Math.tan(phi) * Math.sin(eps);
  const tropicalAsc = normalizeDeg(Math.atan2(ascY, ascX) * RAD2DEG);
  const siderealAsc = normalizeDeg(tropicalAsc - ayanamshaDeg);
  const lagnaIdx = Math.floor(siderealAsc / 30) % 12;
  const lagna = RASHI_DISPLAY_12[lagnaIdx] || RASHI_DISPLAY_12[1];
  return {
    rashi: moonRashi.name,
    rashiLord: moonRashi.lord,
    nakshatra: `${nakHi} (${nakEn})`,
    nakshatraPada: pada,
    lagna: lagna.name,
    lagnaLord: lagna.lord
  };
}
const VAULT_STORAGE_KEY = "panditji_family_vault_v1";
function getVaultKey(phone) {
  if (phone) {
    const clean = phone.replace(/\D/g, "").slice(-10);
    if (clean) return `panditji_family_vault_${clean}`;
  }
  try {
    const active = localStorage.getItem("panditji_active_mobile_phone");
    if (active) {
      const clean = active.replace(/\D/g, "").slice(-10);
      if (clean) return `panditji_family_vault_${clean}`;
    }
  } catch {
  }
  return VAULT_STORAGE_KEY;
}
const RELATION_LABELS = {
  self: { hi: "स्वयं (Self)", en: "Self", icon: "user" },
  spouse: { hi: "जीवनसाथी (Spouse)", en: "Spouse", icon: "vivah" },
  child_son: { hi: "पुत्र (Son)", en: "Son", icon: "baby" },
  child_daughter: { hi: "पुत्री (Daughter)", en: "Daughter", icon: "baby" },
  father: { hi: "पिता (Father)", en: "Father", icon: "crown" },
  mother: { hi: "माता (Mother)", en: "Mother", icon: "crown" },
  brother: { hi: "भाई (Brother)", en: "Brother", icon: "users" },
  sister: { hi: "बहन (Sister)", en: "Sister", icon: "users" },
  friend: { hi: "मित्र (Friend)", en: "Friend", icon: "users" },
  other: { hi: "अन्य (Other)", en: "Other", icon: "sparkles" }
};
function getFamilyVaultProfiles(phone) {
  try {
    const key = getVaultKey(phone);
    const raw = localStorage.getItem(key);
    let parsedList = [];
    if (!raw || raw === "undefined" || raw === "null") {
      if (key !== VAULT_STORAGE_KEY) {
        const legacy = localStorage.getItem(VAULT_STORAGE_KEY);
        if (legacy && legacy !== "undefined" && legacy !== "null") {
          const parsed = JSON.parse(legacy);
          if (Array.isArray(parsed) && parsed.length > 0) parsedList = parsed;
        }
      }
    } else {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) parsedList = parsed;
    }
    let repaired = false;
    const normalized = parsedList.map((m) => {
      if (m && (m.name?.toLowerCase().includes("pragya") || m.name?.includes("प्रज्ञा")) && m.dob === "1998-05-12") {
        repaired = true;
        const fixedDob = "1996-11-06";
        const fixedTime = m.birthTime === "18:20" ? "14:15" : m.birthTime || "14:15";
        const fixedPlace = m.birthPlace === "हरिद्वार, उत्तराखण्ड" ? "रुद्रपुर, उत्तराखण्ड" : m.birthPlace || "रुद्रपुर, उत्तराखण्ड";
        const astro = deriveVedicDetailsForProfile(m.name, fixedDob, fixedTime, fixedPlace);
        return {
          ...m,
          dob: fixedDob,
          birthTime: fixedTime,
          birthPlace: fixedPlace,
          ...astro
        };
      }
      return m;
    });
    if (repaired) {
      try {
        localStorage.setItem(key, JSON.stringify(normalized));
      } catch {
      }
    }
    return normalized;
  } catch (err) {
    console.error("Error loading family vault:", err);
    return [];
  }
}
function saveFamilyVaultProfiles(profiles, phone) {
  try {
    const key = getVaultKey(phone);
    localStorage.setItem(key, JSON.stringify(profiles));
    window.dispatchEvent(new CustomEvent("panditji_vault_updated", { detail: profiles }));
  } catch (err) {
    console.error("Error saving family vault:", err);
  }
}
const CALC_MODE_STORAGE_KEY = "panditji_calc_viewing_mode_v1";
function getCalculationViewingMode() {
  if (typeof window === "undefined" || !window.localStorage) {
    return "astronomical";
  }
  try {
    const saved = localStorage.getItem(CALC_MODE_STORAGE_KEY);
    if (saved === "name_rashi" || saved === "astronomical") {
      return saved;
    }
  } catch (err) {
    console.error("Error reading calculation mode preference:", err);
  }
  return "astronomical";
}
function setCalculationViewingMode(mode) {
  try {
    localStorage.setItem(CALC_MODE_STORAGE_KEY, mode);
    window.dispatchEvent(
      new CustomEvent("display_preference_changed", { detail: mode })
    );
  } catch (err) {
    console.error("Error setting calculation mode preference:", err);
  }
}
function getCurrentISTDateKey(now = /* @__PURE__ */ new Date()) {
  const istTime = new Date(now.getTime() + (330 + now.getTimezoneOffset()) * 6e4);
  const y = istTime.getFullYear();
  const m = String(istTime.getMonth() + 1).padStart(2, "0");
  const d = String(istTime.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}
function getMsUntilNextISTMidnight$1(now = /* @__PURE__ */ new Date()) {
  const istNow = new Date(now.getTime() + (330 + now.getTimezoneOffset()) * 6e4);
  const nextMidnight = new Date(
    istNow.getFullYear(),
    istNow.getMonth(),
    istNow.getDate() + 1,
    0,
    0,
    2
  );
  return Math.max(5e3, nextMidnight.getTime() - istNow.getTime());
}
function formatUserSalutation(name, preference) {
  const clean = (name || "यजमान").trim();
  let baseName = clean.replace(/^(श्री|shri|shree|आचार्य|acharya|पण्डित|pandit|हे|hey|he)\s+/i, "").replace(/\s+(जी|ji)$/i, "").trim();
  if (!baseName) baseName = clean || "Shashank";
  if (preference === "yajman") {
    return `यजमान ${baseName}`;
  }
  if (preference === "simple") {
    return baseName;
  }
  return `${baseName} ji`;
}
function deriveVedicDetailsForProfile(name, dob, birthTime, birthPlace, overrideMode) {
  const mode = overrideMode || getCalculationViewingMode();
  const cleanName = (name || "").trim();
  if (mode === "name_rashi") {
    const nameAstro2 = getLightweightVedicDetailsFromName(cleanName);
    return {
      rashi: nameAstro2.rashi || "कुंभ (Aquarius)",
      rashiLord: nameAstro2.rashiLord || "शनि (Saturn)",
      nakshatra: nameAstro2.nakshatra || "शतभिषा (Shatabhisha)",
      nakshatraPada: 1,
      lagna: `${nameAstro2.rashi ? nameAstro2.rashi.split(" ")[0] : "कुंभ"} (नाम राशि)`,
      lagnaLord: nameAstro2.rashiLord || "शनि (Saturn)"
    };
  }
  try {
    if (dob && dob.trim()) {
      const basics = computeLightweightBirthBasics(
        dob,
        birthTime || "10:00",
        birthPlace?.trim() || "रुद्रपुर, उत्तराखण्ड"
      );
      if (basics) {
        return basics;
      }
    }
  } catch {
  }
  const nameAstro = getLightweightVedicDetailsFromName(cleanName);
  return {
    rashi: nameAstro.rashi || "कुंभ (Aquarius)",
    rashiLord: nameAstro.rashiLord || "शनि (Saturn)",
    nakshatra: nameAstro.nakshatra || "शतभिषा (Shatabhisha)",
    nakshatraPada: 1,
    lagna: "वृषभ (Taurus)",
    lagnaLord: "शुक्र (Venus)"
  };
}
function upsertFamilyMember(data) {
  const existingList = getFamilyVaultProfiles();
  const now = (/* @__PURE__ */ new Date()).toISOString();
  const astro = deriveVedicDetailsForProfile(
    data.name,
    data.dob,
    data.birthTime,
    data.birthPlace
  );
  let updatedList;
  let savedMember;
  const isPrimary = data.isPrimary || existingList.length === 0;
  if (data.id) {
    updatedList = existingList.map((m) => {
      if (m.id === data.id) {
        savedMember = {
          ...m,
          ...data,
          ...astro,
          isPrimary,
          updatedAt: now
        };
        return savedMember;
      }
      return isPrimary ? { ...m, isPrimary: false } : m;
    });
  } else {
    savedMember = {
      id: `fam-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      name: data.name.trim(),
      relation: data.relation,
      relationCustom: data.relationCustom,
      gender: data.gender,
      dob: data.dob,
      birthTime: data.birthTime,
      birthPlace: data.birthPlace.trim(),
      gotra: data.gotra?.trim(),
      notes: data.notes?.trim(),
      isPrimary,
      createdAt: now,
      updatedAt: now,
      ...astro
    };
    const cleanedExisting = isPrimary ? existingList.map((m) => ({ ...m, isPrimary: false })) : existingList;
    updatedList = [savedMember, ...cleanedExisting];
  }
  saveFamilyVaultProfiles(updatedList);
  return savedMember;
}
function deleteFamilyMember(id) {
  const list = getFamilyVaultProfiles().filter((m) => m.id !== id);
  if (list.length > 0 && !list.some((m) => m.isPrimary)) {
    list[0].isPrimary = true;
  }
  saveFamilyVaultProfiles(list);
}
function setPrimaryFamilyMember(id) {
  const list = getFamilyVaultProfiles().map((m) => ({
    ...m,
    isPrimary: m.id === id
  }));
  saveFamilyVaultProfiles(list);
}
function getPrimaryFamilyProfile() {
  const list = getFamilyVaultProfiles();
  if (list.length === 0) return null;
  return list.find((m) => m.isPrimary) || list[0];
}
const familyVaultStorage = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  RELATION_LABELS,
  deleteFamilyMember,
  deriveVedicDetailsForProfile,
  formatUserSalutation,
  getCalculationViewingMode,
  getCurrentISTDateKey,
  getFamilyVaultProfiles,
  getMsUntilNextISTMidnight: getMsUntilNextISTMidnight$1,
  getPrimaryFamilyProfile,
  saveFamilyVaultProfiles,
  setCalculationViewingMode,
  setPrimaryFamilyMember,
  upsertFamilyMember
}, Symbol.toStringTag, { value: "Module" }));
const PERSONAL_JANMA_STORAGE_KEY = "panditji_personal_janma_profile_v1";
const LAGNA_LORDS_12 = [
  "मंगल",
  // 0 मेष
  "शुक्र",
  // 1 वृषभ
  "बुध",
  // 2 मिथुन
  "चंद्रमा",
  // 3 कर्क
  "सूर्य",
  // 4 सिंह
  "बुध",
  // 5 कन्या
  "शुक्र",
  // 6 तुला
  "मंगल",
  // 7 वृश्चिक
  "बृहस्पति",
  // 8 धनु
  "शनि",
  // 9 मकर
  "शनि",
  // 10 कुम्भ
  "बृहस्पति"
  // 11 मीन
];
function norm360(deg) {
  return (deg % 360 + 360) % 360;
}
function evaluateSingleShivavaas(tithiIndex1to30) {
  const T = Math.max(1, Math.min(30, Math.round(tithiIndex1to30)));
  const rem = (T * 2 + 5) % 7;
  if (T === 29) {
    return {
      vaasNameHi: "श्मशान में (कृष्ण चतुर्दशी विशेष नियम)",
      vaasNameEn: "Smashana (Krishna Chaturdashi Exception)",
      isAuspicious: false,
      statusLabelHi: "सामान्य काम्य हेतु वर्जित • शिवरात्रि/प्रदोष में शुभ",
      effectHi: "तिथि सूत्र से श्मशान वास; सामान्य काम्य अभिषेक टालें।",
      shastricNoteHi: "शास्त्रानुसार महाशिवरात्रि, मासिक शिवरात्रि (निशीथ/प्रदोष), श्रावण मास एवं द्वादश ज्योतिर्लिंग क्षेत्र में शिववास दोष मान्य नहीं होता — रुद्राभिषेक सर्वदा विशेष फलदायी है।"
    };
  }
  if (T === 30) {
    return {
      vaasNameHi: "गौरी सन्निधि (अमावस्या विशेष विचार)",
      vaasNameEn: "Gauri Sannidhi (Amavasya Consideration)",
      isAuspicious: true,
      statusLabelHi: "शुभ (गौरी सन्निधि • नित्य व पितृ-शांति हेतु अनुकूल)",
      effectHi: "तिथि सूत्रानुसार गौरी सन्निधि वास (सुख-समृद्धिदायक)।",
      shastricNoteHi: "अमावस्या तिथि होने से पितृ-कर्म व नित्य/महामृत्युंजय रुद्राभिषेक प्रशस्त है; कुछ परंपराओं में काम्य अभिषेक हेतु शुक्ल पक्ष को प्राथमिकता दी जाती है।"
    };
  }
  switch (rem) {
    case 1:
      return {
        vaasNameHi: "कैलाश पर",
        vaasNameEn: "Kailash",
        isAuspicious: true,
        statusLabelHi: "अत्यंत शुभ — रुद्राभिषेक हेतु सर्वश्रेष्ठ",
        effectHi: "सौख्य, आरोग्य एवं सर्वकार्य सिद्धि प्रदायक।"
      };
    case 2:
      return {
        vaasNameHi: "गौरी सन्निधि",
        vaasNameEn: "Gauri Sannidhi",
        isAuspicious: true,
        statusLabelHi: "शुभ — सुख-संपत्ति एवं कल्याणकारी",
        effectHi: "सुख-संपदा, परिवार कल्याण एवं मनोरथ सिद्धि।"
      };
    case 3:
      return {
        vaasNameHi: "वृषभारूढ़",
        vaasNameEn: "Vrishabharudha",
        isAuspicious: true,
        statusLabelHi: "शुभ — अभीष्ट सिद्धि प्रदायक",
        effectHi: "अभीष्ट फल प्राप्ति एवं संकल्प पूर्ति हेतु उत्तम।"
      };
    case 4:
      return {
        vaasNameHi: "सभा में",
        vaasNameEn: "Sabha",
        isAuspicious: false,
        statusLabelHi: "अशुभ — काम्य रुद्राभिषेक वर्जित",
        effectHi: "संतापप्रद माना गया है (नित्य पूजन सदैव मान्य)।"
      };
    case 5:
      return {
        vaasNameHi: "भोजन में",
        vaasNameEn: "Bhojana",
        isAuspicious: false,
        statusLabelHi: "अशुभ — काम्य रुद्राभिषेक वर्जित",
        effectHi: "पीड़ादायक माना गया है (नित्य शिव पूजन मान्य)।"
      };
    case 6:
      return {
        vaasNameHi: "क्रीड़ा में",
        vaasNameEn: "Krida",
        isAuspicious: false,
        statusLabelHi: "अशुभ — काम्य रुद्राभिषेक वर्जित",
        effectHi: "कष्टप्रद माना गया है (नित्य जलाभिषेक मान्य)।"
      };
    default:
      return {
        vaasNameHi: "श्मशान में",
        vaasNameEn: "Smashana",
        isAuspicious: false,
        statusLabelHi: "वर्जित — काम्य रुद्राभिषेक न करें",
        effectHi: "काम्य अनुष्ठान हेतु वर्जित (श्रावण/ज्योतिर्लिंग/नित्य पूजन अपवाद)।"
      };
  }
}
function computeShivavaasInfo(udayaTithiIndex, tithiIntervals, nextSunriseTimestamp) {
  const base = evaluateSingleShivavaas(udayaTithiIndex);
  let transitionNoteHi;
  if (tithiIntervals && tithiIntervals.length > 1) {
    const first = tithiIntervals[0];
    const second = tithiIntervals[1];
    if (second && (!nextSunriseTimestamp || first.endTimestamp < nextSunriseTimestamp - 6e4)) {
      const nextEval = evaluateSingleShivavaas(second.tithiIndex);
      transitionNoteHi = `${first.endFormattedHi} के बाद (${second.pakshaShort} ${second.nameHi}): ${nextEval.vaasNameHi} (${nextEval.isAuspicious ? "शुभ" : "वर्जित"})`;
    }
  }
  const T = Math.max(1, Math.min(30, Math.round(udayaTithiIndex)));
  const rem = (T * 2 + 5) % 7;
  const formulaHi = `(तिथि ${T} × 2 + 5) ÷ 7 → शेष ${rem}`;
  return {
    tithiIndex: udayaTithiIndex,
    ...base,
    formulaHi,
    transitionNoteHi
  };
}
function evaluateSingleAgnivaas(tithiIndex1to30, weekdayIndex0SunTo6Sat) {
  const T = Math.max(1, Math.min(30, Math.round(tithiIndex1to30)));
  const V = (Math.floor(weekdayIndex0SunTo6Sat) % 7 + 7) % 7 + 1;
  const rem = (T + V + 1) % 4;
  if (rem === 0 || rem === 3) {
    return {
      vaasRealm: "prithvi",
      vaasNameHi: "पृथ्वी पर (अग्निवास शुभ)",
      vaasNameEn: "Prithvi (Earth)",
      isAuspicious: true,
      statusLabelHi: "अत्यंत शुभ — हवन एवं यज्ञ कर्म हेतु सर्वश्रेष्ठ",
      effectHi: "पृथ्वी पर अग्निवास होने से हवन सुख, शांति, समृद्धि एवं कार्य सिद्धि प्रदान करता है।"
    };
  }
  if (rem === 1) {
    return {
      vaasRealm: "akasha",
      vaasNameHi: "आकाश में (अग्निवास वर्जित)",
      vaasNameEn: "Akasha (Sky)",
      isAuspicious: false,
      statusLabelHi: "अशुभ — काम्य हवन वर्जित",
      effectHi: "आकाश में अग्निवास होने पर काम्य हवन से आयु व स्वास्थ्य हानि मानी गई है (नित्य अग्निहोत्र अपवाद)।"
    };
  }
  return {
    vaasRealm: "patala",
    vaasNameHi: "पाताल में (अग्निवास वर्जित)",
    vaasNameEn: "Patala (Netherworld)",
    isAuspicious: false,
    statusLabelHi: "अशुभ — काम्य हवन वर्जित",
    effectHi: "पाताल में अग्निवास होने पर काम्य हवन से धन हानि मानी गई है।"
  };
}
function computeAgnivaasInfo(udayaTithiIndex, weekdayIndex, tithiIntervals, nextSunriseTimestamp) {
  const base = evaluateSingleAgnivaas(udayaTithiIndex, weekdayIndex);
  let transitionNoteHi;
  if (tithiIntervals && tithiIntervals.length > 1) {
    const first = tithiIntervals[0];
    const second = tithiIntervals[1];
    if (second && (!nextSunriseTimestamp || first.endTimestamp < nextSunriseTimestamp - 6e4)) {
      const nextEval = evaluateSingleAgnivaas(second.tithiIndex, weekdayIndex);
      transitionNoteHi = `${first.endFormattedHi} के बाद (${second.pakshaShort} ${second.nameHi}): ${nextEval.vaasNameHi}`;
    }
  }
  return {
    tithiIndex: udayaTithiIndex,
    weekdayIndex,
    ...base,
    transitionNoteHi
  };
}
function getSiderealAscendantDeg(epochMs, latDeg, lonDeg, ayanamsha = "LAHIRI") {
  const time = MakeTime(new Date(epochMs));
  const gstHours = SiderealTime(time);
  const lstRad = norm360(gstHours * 15 + lonDeg) * Math.PI / 180;
  const epsRad = e_tilt(time).tobl * Math.PI / 180;
  const safeLat = Math.max(-65, Math.min(65, latDeg));
  const latRad = safeLat * Math.PI / 180;
  const y = Math.cos(lstRad);
  const x = -Math.sin(lstRad) * Math.cos(epsRad) - Math.tan(latRad) * Math.sin(epsRad);
  const tropicalAscDeg = norm360(Math.atan2(y, x) * 180 / Math.PI);
  const ayan = getAyanamshaDeg(epochMs, ayanamsha);
  return norm360(tropicalAscDeg - ayan);
}
function computeDailyLagnaTable(sunriseTimestamp, nextSunriseTimestamp, location, dateKey, ayanamsha = "LAHIRI") {
  const timeZone = resolveSafeTimezone(location);
  const lat = Number.isFinite(location.lat) ? location.lat : 28.9765;
  const lon = Number.isFinite(location.lon) ? location.lon : 79.3999;
  const getSignIdx = (tMs) => Math.floor(getSiderealAscendantDeg(tMs, lat, lon, ayanamsha) / 30) % 12;
  const slots = [];
  const stepMs = 10 * 60 * 1e3;
  let segStart = sunriseTimestamp;
  let currSign = getSignIdx(segStart);
  let prevT = segStart;
  for (let t = sunriseTimestamp + stepMs; t <= nextSunriseTimestamp + stepMs; t += stepMs) {
    const probe = Math.min(t, nextSunriseTimestamp);
    const probeSign = getSignIdx(probe);
    if (probeSign !== currSign) {
      let lo = prevT;
      let hi = probe;
      for (let i = 0; i < 14; i++) {
        const mid = Math.floor((lo + hi) * 0.5);
        if (getSignIdx(mid) === currSign) {
          lo = mid;
        } else {
          hi = mid;
        }
      }
      const boundaryMs = hi;
      slots.push({
        rashiIndex: currSign,
        lagnaNameHi: `${RASHIS_12[currSign]} लग्न`,
        lagnaLordHi: LAGNA_LORDS_12[currSign] || "",
        startTimestamp: segStart,
        endTimestamp: boundaryMs,
        timeRangeHi: formatWindowRangeInZoneHi(segStart, boundaryMs, timeZone, dateKey),
        durationMinutes: Math.max(1, Math.round((boundaryMs - segStart) / 6e4))
      });
      segStart = boundaryMs;
      currSign = probeSign;
    }
    prevT = probe;
    if (probe >= nextSunriseTimestamp) break;
  }
  if (nextSunriseTimestamp - segStart >= 6e4) {
    slots.push({
      rashiIndex: currSign,
      lagnaNameHi: `${RASHIS_12[currSign]} लग्न`,
      lagnaLordHi: LAGNA_LORDS_12[currSign] || "",
      startTimestamp: segStart,
      endTimestamp: nextSunriseTimestamp,
      timeRangeHi: formatWindowRangeInZoneHi(segStart, nextSunriseTimestamp, timeZone, dateKey),
      durationMinutes: Math.max(1, Math.round((nextSunriseTimestamp - segStart) / 6e4))
    });
  }
  return slots;
}
const TARA_META = [
  {
    nameHi: "जन्म तारा",
    status: "madhyam",
    statusLabelHi: "मध्यम — सावधानी व आत्म-चिंतन",
    meaningHi: "शारीरिक व मानसिक सावधानी रखें; नियमित कार्य व साधना अनुकूल।"
  },
  {
    nameHi: "सम्पत् तारा",
    status: "shubh",
    statusLabelHi: "अति शुभ — धन एवं समृद्धि प्रदायक",
    meaningHi: "आर्थिक निर्णय, व्यापार, निवेश व शुभ संकल्प हेतु अत्यंत उत्तम।"
  },
  {
    nameHi: "विपत् तारा",
    status: "ashubh",
    statusLabelHi: "अशुभ — जोखिम व बाधा की संभावना",
    meaningHi: "नया बड़ा जोखिम, विवाद व आवश्यक न हो तो लंबी यात्रा टालें।"
  },
  {
    nameHi: "क्षेम तारा",
    status: "shubh",
    statusLabelHi: "शुभ — सुख, सुरक्षा एवं कल्याण",
    meaningHi: "पारिवारिक शुभ कार्य, स्वास्थ्य लाभ व स्थिरता के लिए श्रेष्ठ।"
  },
  {
    nameHi: "प्रत्यरि तारा",
    status: "ashubh",
    statusLabelHi: "अशुभ — विरोध व विघ्न संभावित",
    meaningHi: "महत्वपूर्ण अनुबंध, वाद-विवाद व नए बड़े आरंभ से बचें।"
  },
  {
    nameHi: "साधक तारा",
    status: "shubh",
    statusLabelHi: "अति शुभ — कार्य सिद्धि एवं सफलता",
    meaningHi: "प्रतियोगिता, साधना, नए प्रोजेक्ट व लक्ष्य सिद्धि हेतु श्रेष्ठ।"
  },
  {
    nameHi: "वध (नैधन) तारा",
    status: "ashubh",
    statusLabelHi: "अशुभ — शुभ आरंभ व यात्रा वर्जित",
    meaningHi: "विशेष सावधानी बरतें; मांगलिक प्रारंभ व जोखिमपूर्ण कार्य टालें।"
  },
  {
    nameHi: "मित्र तारा",
    status: "shubh",
    statusLabelHi: "शुभ — सहयोग एवं मित्र लाभ",
    meaningHi: "मेलजोल, साझेदारी, संवाद व सामाजिक कार्यों में उत्तम सहयोग।"
  },
  {
    nameHi: "परम मित्र तारा",
    status: "shubh",
    statusLabelHi: "अति शुभ — सर्वकार्य सिद्धि योग",
    meaningHi: "सभी मांगलिक, आर्थिक व व्यक्तिगत कार्यों हेतु अत्यंत अनुकूल।"
  }
];
function computePersonalTarabal(birthNakshatraIndex, dayNakshatraIndex) {
  const bIdx = (Math.floor(birthNakshatraIndex) % 27 + 27) % 27;
  const dIdx = (Math.floor(dayNakshatraIndex) % 27 + 27) % 27;
  const dist = ((dIdx - bIdx) % 27 + 27) % 27;
  const taraNum = dist % 9 + 1;
  const meta = TARA_META[taraNum - 1] || TARA_META[0];
  return {
    taraNumber: taraNum,
    taraNameHi: meta.nameHi,
    status: meta.status,
    statusLabelHi: meta.statusLabelHi,
    meaningHi: meta.meaningHi,
    birthNakshatraHi: NAKSHATRAS_27[bIdx] || "",
    dayNakshatraHi: NAKSHATRAS_27[dIdx] || ""
  };
}
function computePersonalChandrabal(birthRashiIndex, dayRashiIndex) {
  const bIdx = (Math.floor(birthRashiIndex) % 12 + 12) % 12;
  const dIdx = (Math.floor(dayRashiIndex) % 12 + 12) % 12;
  const house = ((dIdx - bIdx) % 12 + 12) % 12 + 1;
  const isShubh = [1, 3, 6, 7, 10, 11].includes(house);
  const isAshubh = [4, 8, 12].includes(house);
  if (isShubh) {
    return {
      houseNumber: house,
      status: "shubh",
      statusLabelHi: `शुभ चंद्रबल (${house}वां भाव)`,
      meaningHi: "मनोबल प्रबल रहेगा — नवीन कार्य, यात्रा व महत्वपूर्ण निर्णय अनुकूल।",
      birthRashiHi: RASHIS_12[bIdx] || "",
      dayRashiHi: RASHIS_12[dIdx] || ""
    };
  }
  if (isAshubh) {
    return {
      houseNumber: house,
      status: "ashubh",
      statusLabelHi: house === 8 ? "अष्टम चंद्र (अशुभ चंद्रबल — विशेष सावधानी)" : `अशुभ चंद्रबल (${house}वां भाव)`,
      meaningHi: house === 8 ? "अष्टम चंद्र के कारण बड़े मांगलिक निर्णय, जोखिमपूर्ण निवेश व लंबी यात्रा टालें; शिव स्मरण करें।" : "मानसिक अस्थिरता व व्यय संभव — धैर्य रखें और बड़े शुभ आरंभ टालें।",
      birthRashiHi: RASHIS_12[bIdx] || "",
      dayRashiHi: RASHIS_12[dIdx] || ""
    };
  }
  return {
    houseNumber: house,
    status: "madhyam",
    statusLabelHi: `मध्यम चंद्रबल (${house}वां भाव)`,
    meaningHi: "सामान्य एवं संतुलित फल — विवेकपूर्ण निर्णय से कार्य सफल होंगे।",
    birthRashiHi: RASHIS_12[bIdx] || "",
    dayRashiHi: RASHIS_12[dIdx] || ""
  };
}
const RASHI_MATCH_ALIASES = [
  ["मेष", "aries", "mesh"],
  ["वृषभ", "वृष", "taurus", "vrishabh", "vrish"],
  ["मिथुन", "gemini", "mithun"],
  ["कर्क", "cancer", "kark"],
  ["सिंह", "leo", "singh", "simha"],
  ["कन्या", "virgo", "kanya"],
  ["तुला", "libra", "tula"],
  ["वृश्चिक", "scorpio", "vrishchik"],
  ["धनु", "sagittarius", "dhanu"],
  ["मकर", "capricorn", "makar"],
  ["कुम्भ", "कुंभ", "aquarius", "kumbh"],
  ["मीन", "pisces", "meen"]
];
const NAKSHATRA_MATCH_ALIASES = [
  ["अश्विनी", "अश्विन", "ashwini", "aswini"],
  ["भरणी", "भरनी", "bharani"],
  ["कृत्तिका", "कृतिका", "krittika", "kritika"],
  ["रोहिणी", "रोहिनी", "rohini"],
  ["मृगशिरा", "मृगशीर्षा", "मृगशीर्ष", "mrigashira", "mrigashirsha", "mrigshirsha"],
  ["आर्द्रा", "आद्रा", "ardra", "arudra"],
  ["पुनर्वसु", "punarvasu"],
  ["पुष्य", "पुष्या", "pushya", "poosam"],
  ["आश्लेषा", "अश्लेषा", "ashlesha", "aslesha"],
  ["मघा", "मघ", "magha"],
  ["पूर्वाफाल्गुनी", "पूर्व फाल्गुनी", "पूर्वा फाल्गुनी", "purva phalguni", "purvaphalguni"],
  ["उत्तराफाल्गुनी", "उत्तर फाल्गुनी", "उत्तरा फाल्गुनी", "uttara phalguni", "uttaraphalguni"],
  ["हस्त", "हस्ता", "hasta"],
  ["चित्रा", "chitra"],
  ["स्वाति", "स्वाती", "swati", "svati"],
  ["विशाखा", "vishakha", "visakha"],
  ["अनुराधा", "anuradha"],
  ["ज्येष्ठा", "जयेष्ठा", "jyeshtha", "jyeshta"],
  ["मूल", "मूला", "mula", "moola"],
  ["पूर्वाषाढ़ा", "पूर्वाषाढा", "पूर्व आषाढ़ा", "purva ashadha", "purvashadha"],
  ["उत्तराषाढ़ा", "उत्तराषाढा", "उत्तर आषाढ़ा", "uttara ashadha", "uttarashadha"],
  ["श्रवण", "श्रवणा", "shravana", "shravan", "sravana"],
  ["धनिष्ठा", "धनिष्टा", "dhanishtha", "dhanishta"],
  ["शतभिषा", "शतभिष", "shatabhisha", "satabhisha"],
  ["पूर्वाभाद्रपद", "पूर्व भाद्रपद", "पूर्वा भाद्रपद", "purva bhadrapada", "purvabhadrapada"],
  ["उत्तराभाद्रपद", "उत्तर भाद्रपद", "उत्तरा भाद्रपद", "uttara bhadrapada", "uttarabhadrapada"],
  ["रेवती", "revati"]
];
function resolveRashiIndexFromLabel(label) {
  if (!label || !String(label).trim()) return null;
  const norm = String(label).trim().toLowerCase();
  for (let i = 0; i < RASHI_MATCH_ALIASES.length; i++) {
    if (RASHI_MATCH_ALIASES[i].some((alias) => norm.includes(alias))) {
      return i;
    }
  }
  return null;
}
function resolveNakshatraIndexFromLabel(label) {
  if (!label || !String(label).trim()) return null;
  const norm = String(label).trim().toLowerCase();
  for (let i = 0; i < NAKSHATRA_MATCH_ALIASES.length; i++) {
    if (NAKSHATRA_MATCH_ALIASES[i].some((alias) => norm.includes(alias))) {
      return i;
    }
  }
  return null;
}
function resolveJanmaProfileFromName(rawName) {
  const clean = (rawName || "").trim();
  if (!clean) return null;
  const vedic = getVedicDetailsFromName(clean);
  const rashiIndex = resolveRashiIndexFromLabel(vedic.rashi);
  const nakshatraIndex = resolveNakshatraIndexFromLabel(vedic.nakshatra);
  return {
    name: clean,
    rashiIndex,
    nakshatraIndex,
    source: "name_auto"
  };
}
function buildJanmaProfileFromStoredMember(member) {
  const cleanName = String(member?.name || "").trim();
  let rashiIndex = resolveRashiIndexFromLabel(member?.rashi);
  let nakshatraIndex = resolveNakshatraIndexFromLabel(member?.nakshatra);
  if (cleanName && (rashiIndex === null || nakshatraIndex === null)) {
    const byName = resolveJanmaProfileFromName(cleanName);
    if (byName) {
      if (rashiIndex === null) rashiIndex = byName.rashiIndex;
      if (nakshatraIndex === null) nakshatraIndex = byName.nakshatraIndex;
    }
  }
  if (!cleanName && rashiIndex === null && nakshatraIndex === null) {
    return null;
  }
  return {
    name: cleanName || void 0,
    rashiIndex,
    nakshatraIndex,
    source: "saved_profile"
  };
}
function loadSavedAccountJanmaProfile() {
  if (typeof window === "undefined" || !window.localStorage) {
    return null;
  }
  try {
    const activeProf = getActiveProfile();
    if (activeProf && (activeProf.name || activeProf.rashi || activeProf.nakshatra)) {
      const built = buildJanmaProfileFromStoredMember(activeProf);
      if (built) return built;
    }
    const fallbackKeys = [
      "activeYajmanProfile",
      "panditji_default_active_profile",
      "panditji_active_user_account",
      "panditji_current_user"
    ];
    for (const key of fallbackKeys) {
      const raw = window.localStorage.getItem(key);
      if (!raw || raw === "null" || raw === "undefined") continue;
      try {
        const parsed = JSON.parse(raw);
        const built = buildJanmaProfileFromStoredMember(parsed);
        if (built) return built;
      } catch {
      }
    }
    const vault = getFamilyVaultProfiles();
    if (vault.length > 0) {
      const primary = vault.find((m) => m.isPrimary) || vault[0];
      const built = buildJanmaProfileFromStoredMember(primary);
      if (built) return built;
    }
  } catch {
  }
  return null;
}
function loadSavedFamilyJanmaProfiles() {
  if (typeof window === "undefined" || !window.localStorage) return [];
  try {
    const vault = getFamilyVaultProfiles();
    const out = [];
    const seenNames = /* @__PURE__ */ new Set();
    for (const member of vault) {
      const built = buildJanmaProfileFromStoredMember(member);
      if (!built || !built.name) continue;
      const key = built.name.toLowerCase();
      if (seenNames.has(key)) continue;
      seenNames.add(key);
      out.push(built);
    }
    return out.slice(0, 6);
  } catch {
    return [];
  }
}
function loadPersonalJanmaProfile() {
  if (typeof window === "undefined" || !window.localStorage) {
    return { rashiIndex: null, nakshatraIndex: null };
  }
  try {
    const raw = window.localStorage.getItem(PERSONAL_JANMA_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      const rashiIndex = typeof parsed.rashiIndex === "number" && parsed.rashiIndex >= 0 && parsed.rashiIndex < 12 ? Math.floor(parsed.rashiIndex) : null;
      const nakshatraIndex = typeof parsed.nakshatraIndex === "number" && parsed.nakshatraIndex >= 0 && parsed.nakshatraIndex < 27 ? Math.floor(parsed.nakshatraIndex) : null;
      const name = typeof parsed.name === "string" && parsed.name.trim() ? parsed.name.trim() : void 0;
      const source = parsed.source === "saved_profile" || parsed.source === "name_auto" || parsed.source === "manual" ? parsed.source : void 0;
      if (rashiIndex !== null || nakshatraIndex !== null || name) {
        return { name, rashiIndex, nakshatraIndex, source };
      }
    }
  } catch {
  }
  const savedAccount = loadSavedAccountJanmaProfile();
  if (savedAccount) {
    return savedAccount;
  }
  return { rashiIndex: null, nakshatraIndex: null };
}
function savePersonalJanmaProfile(profile) {
  if (typeof window === "undefined" || !window.localStorage) return;
  try {
    if (profile.rashiIndex === null && profile.nakshatraIndex === null && !profile.name) {
      window.localStorage.removeItem(PERSONAL_JANMA_STORAGE_KEY);
    } else {
      window.localStorage.setItem(PERSONAL_JANMA_STORAGE_KEY, JSON.stringify(profile));
    }
  } catch {
  }
}
const ALL_27_NAKSHATRAS_HI = NAKSHATRAS_27;
const ALL_12_RASHIS_HI = RASHIS_12;
const ECLIPSE_PUJA_INSTRUCTION_HI = "सूतक एवं ग्रहण काल में देव-मूर्ति स्पर्श, भोजन व नए शुभ कार्य वर्जित हैं; मंत्र-जप, ध्यान एवं मोक्ष पश्चात स्नान-दान अत्यंत फलदायी है।";
const ECLIPSE_INVISIBLE_RULE_HI = "यह ग्रहण भारत में दृश्य नहीं है, अतः भारत में सूतक काल एवं ग्रहण-निषेध मान्य नहीं हैं; सभी दैनिक पूजा-पाठ व शुभ कार्य यथावत ग्राह्य हैं।";
const ECLIPSE_VAHAN_PROHIBITED_HI = "आज ग्रहण एवं सूतक काल प्रभावी होने के कारण शास्त्रोक्त वर्जित है।";
const ADHIK_MASA_VAHAN_PROHIBITED_HI = "अधिक मास (पुरुषोत्तम मास) होने के कारण नवीन वाहन, गृह एवं स्थायी संपत्ति क्रय शास्त्रोक्त वर्जित है — यह मास जप, दान व श्रीहरि आराधना हेतु सर्वश्रेष्ठ है।";
const NODAL_POTENTIAL_ECLIPSE_TITLE_HI = "खगोलीय ग्रहण पर्व संयोग (स्थानीय दृश्यता होने पर ही सूतक मान्य)";
const GLOBAL_ECLIPSES_2025_2035 = {
  "2025-09-07": {
    type: "chandra",
    isVisibleInIndia: true,
    title: "खग्रास चंद्र ग्रहण (भारत में दृश्य)",
    sutakStart: "दोपहर 12:57 PM",
    sparsh: "रात्रि 09:57 PM",
    madhya: "रात्रि 11:42 PM",
    moksha: "अगले दिन मध्यरात्रि 01:26 AM",
    isGrastodaya: false
  },
  "2026-02-17": {
    type: "surya",
    isVisibleInIndia: false,
    title: "कंकणाकृति सूर्य ग्रहण (भारत में अदृश्य)",
    globalWindow: "दोपहर 03:26 PM – शाम 07:57 PM IST"
  },
  "2026-03-03": {
    type: "chandra",
    isVisibleInIndia: true,
    title: "खग्रास / ग्रस्तोदय चंद्र ग्रहण (भारत में दृश्य)",
    sutakStart: "प्रातः 06:36 AM (सूर्योदय से)",
    sparsh: "दोपहर 03:20 PM (ग्रस्तोदय: सायं 06:13 PM से दृश्य)",
    madhya: "शाम 05:04 PM",
    moksha: "शाम 06:47 PM",
    isGrastodaya: true
  },
  "2026-08-12": {
    type: "surya",
    isVisibleInIndia: false,
    title: "खग्रास सूर्य ग्रहण (भारत में अदृश्य)",
    globalWindow: "रात्रि 09:04 PM – अगले दिन मध्यरात्रि 01:27 AM IST"
  },
  "2026-08-28": {
    type: "chandra",
    isVisibleInIndia: false,
    title: "आंशिक चंद्र ग्रहण (भारत में अदृश्य)",
    globalWindow: "प्रातः 08:03 AM – प्रातः 11:22 AM IST"
  },
  "2027-02-06": {
    type: "surya",
    isVisibleInIndia: false,
    title: "कंकणाकृति सूर्य ग्रहण (भारत में अदृश्य)",
    globalWindow: "शाम 06:27 PM – अगले दिन मध्यरात्रि 12:31 AM IST"
  },
  "2027-02-20": {
    type: "chandra",
    isVisibleInIndia: true,
    title: "उपच्छाया / आंशिक चंद्र ग्रहण (भारत में दृश्य)",
    sutakStart: "प्रातः 06:43 AM (सूर्योदय से)",
    sparsh: "अगले दिन मध्यरात्रि 02:42 AM",
    madhya: "अगले दिन प्रातः 04:42 AM",
    moksha: "अगले दिन प्रातः 06:42 AM",
    isGrastodaya: false
  },
  "2027-08-02": {
    type: "surya",
    isVisibleInIndia: true,
    title: "आंशिक सूर्य ग्रहण (भारत में दृश्य)",
    sutakStart: "प्रातः 05:37 AM (सूर्योदय से)",
    sparsh: "दोपहर 03:34 PM",
    madhya: "शाम 04:31 PM",
    moksha: "शाम 05:24 PM",
    isGrastasta: true
  },
  "2027-08-17": {
    type: "chandra",
    isVisibleInIndia: false,
    title: "उपच्छाया चंद्र ग्रहण (भारत में अदृश्य)",
    globalWindow: "प्रातः 10:53 AM – दोपहर 02:33 PM IST"
  },
  "2028-01-12": {
    type: "chandra",
    isVisibleInIndia: true,
    title: "आंशिक चंद्र ग्रहण (भारत में दृश्य)",
    sutakStart: "प्रातः 07:09 AM (सूर्योदय से)",
    sparsh: "प्रातः 09:13 AM",
    madhya: "प्रातः 09:43 AM",
    moksha: "प्रातः 10:13 AM",
    isGrastasta: true
  },
  "2028-01-26": {
    type: "surya",
    isVisibleInIndia: false,
    title: "कंकणाकृति सूर्य ग्रहण (भारत में अदृश्य)",
    globalWindow: "शाम 05:37 PM – रात्रि 11:39 PM IST"
  },
  "2028-07-06": {
    type: "chandra",
    isVisibleInIndia: true,
    title: "आंशिक चंद्र ग्रहण (भारत में दृश्य)",
    sutakStart: "दोपहर 12:12 PM",
    sparsh: "रात्रि 09:12 PM",
    madhya: "रात्रि 10:40 PM",
    moksha: "अगले दिन मध्यरात्रि 12:08 AM",
    isGrastodaya: false
  },
  "2028-07-22": {
    type: "surya",
    isVisibleInIndia: false,
    title: "खग्रास सूर्य ग्रहण (भारत में अदृश्य)",
    globalWindow: "प्रातः 05:57 AM – प्रातः 10:54 AM IST"
  },
  "2028-12-31": {
    type: "chandra",
    isVisibleInIndia: true,
    title: "खग्रास चंद्र ग्रहण (भारत में दृश्य)",
    sutakStart: "दोपहर 12:38 PM",
    sparsh: "रात्रि 09:38 PM",
    madhya: "रात्रि 11:22 PM",
    moksha: "अगले दिन मध्यरात्रि 01:06 AM",
    isGrastodaya: false
  },
  "2029-06-26": {
    type: "chandra",
    isVisibleInIndia: true,
    title: "खग्रास चंद्र ग्रहण (भारत में दृश्य)",
    sutakStart: "प्रातः 05:17 AM (सूर्योदय से)",
    sparsh: "प्रातः 07:03 AM",
    madhya: "प्रातः 08:52 AM",
    moksha: "प्रातः 10:41 AM",
    isGrastasta: true
  },
  "2029-12-20": {
    type: "chandra",
    isVisibleInIndia: true,
    title: "खग्रास चंद्र ग्रहण (भारत में दृश्य)",
    sutakStart: "दोपहर 04:10 PM",
    sparsh: "अगले दिन मध्यरात्रि 01:10 AM",
    madhya: "अगले दिन प्रातः 03:12 AM",
    moksha: "अगले दिन प्रातः 05:14 AM",
    isGrastodaya: false
  },
  "2030-06-01": {
    type: "surya",
    isVisibleInIndia: true,
    title: "आंशिक सूर्य ग्रहण (भारत में दृश्य)",
    sutakStart: "प्रातः 05:16 AM (सूर्योदय से)",
    sparsh: "दोपहर 11:18 AM",
    madhya: "दोपहर 12:28 PM",
    moksha: "दोपहर 01:36 PM",
    isGrastasta: false
  },
  "2030-06-15": {
    type: "chandra",
    isVisibleInIndia: true,
    title: "आंशिक चंद्र ग्रहण (भारत में दृश्य)",
    sutakStart: "दोपहर 01:35 PM",
    sparsh: "रात्रि 10:35 PM",
    madhya: "अगले दिन मध्यरात्रि 12:04 AM",
    moksha: "अगले दिन मध्यरात्रि 01:33 AM",
    isGrastodaya: false
  }
};
Object.fromEntries(
  Object.entries(GLOBAL_ECLIPSES_2025_2035).filter(
    (entry) => entry[1].isVisibleInIndia === true
  )
);
function shortestAngularDiffDeg(aDeg, bDeg) {
  const diff = ((aDeg - bDeg) % 360 + 540) % 360 - 180;
  return Math.abs(diff);
}
function checkNodalEclipseWindow(params) {
  const { dateKey, year, isPurnima, isAmavasya, sunLonDeg, moonLonDeg, rahuLonDeg } = params;
  if (year >= 2025 && year <= 2035) {
    return null;
  }
  const ketuLonDeg = (rahuLonDeg + 180) % 360;
  const sunNodeDist = Math.min(
    shortestAngularDiffDeg(sunLonDeg, rahuLonDeg),
    shortestAngularDiffDeg(sunLonDeg, ketuLonDeg)
  );
  const sunMoonDiff = shortestAngularDiffDeg(moonLonDeg, sunLonDeg);
  if (isPurnima && Math.abs(sunMoonDiff - 180) <= 12 && sunNodeDist <= 12) {
    return {
      dateKey,
      type: "chandra",
      title: NODAL_POTENTIAL_ECLIPSE_TITLE_HI,
      isVisibleInIndia: false,
      isVerifiedIndiaVisible: false,
      isGlobalIndiaInvisible: false,
      isNodalPotential: true,
      pujaInstructionHi: ECLIPSE_PUJA_INSTRUCTION_HI
    };
  }
  if (isAmavasya && sunNodeDist <= 15) {
    return {
      dateKey,
      type: "surya",
      title: NODAL_POTENTIAL_ECLIPSE_TITLE_HI,
      isVisibleInIndia: false,
      isVerifiedIndiaVisible: false,
      isGlobalIndiaInvisible: false,
      isNodalPotential: true,
      pujaInstructionHi: ECLIPSE_PUJA_INSTRUCTION_HI
    };
  }
  return null;
}
function formatEclipseTimingsLineHi(record) {
  return `सूतक प्रारंभ ${record.sutakStart} | ग्रहण स्पर्श ${record.sparsh} | मध्य ${record.madhya} | मोक्ष ${record.moksha}`;
}
function formatEclipseAshubhLineHi(record) {
  return `ग्रहण एवं सूतक काल: ${record.sutakStart} – ${record.moksha} तक (शास्त्रोक्त वर्जित — केवल जप-ध्यान करें)`;
}
function resolveIndiaEclipseForDate(params) {
  const rec = GLOBAL_ECLIPSES_2025_2035[params.dateKey];
  if (rec) {
    if (rec.isVisibleInIndia) {
      const visRec = rec;
      return {
        dateKey: params.dateKey,
        type: visRec.type,
        title: visRec.title,
        isVisibleInIndia: true,
        sutakStart: visRec.sutakStart,
        sparsh: visRec.sparsh,
        madhya: visRec.madhya,
        moksha: visRec.moksha,
        isGrastodaya: visRec.isGrastodaya,
        isGrastasta: visRec.isGrastasta,
        isVerifiedIndiaVisible: true,
        isGlobalIndiaInvisible: false,
        isNodalPotential: false,
        timingsLineHi: formatEclipseTimingsLineHi(visRec),
        pujaInstructionHi: ECLIPSE_PUJA_INSTRUCTION_HI,
        ashubhLineHi: formatEclipseAshubhLineHi(visRec)
      };
    }
    return {
      dateKey: params.dateKey,
      type: rec.type,
      title: rec.title,
      isVisibleInIndia: false,
      globalWindow: rec.globalWindow,
      isVerifiedIndiaVisible: false,
      isGlobalIndiaInvisible: true,
      isNodalPotential: false,
      pujaInstructionHi: ECLIPSE_INVISIBLE_RULE_HI,
      invisibleRuleLineHi: ECLIPSE_INVISIBLE_RULE_HI
    };
  }
  return checkNodalEclipseWindow(params);
}
const ASHTAMANSHA_PART_ORDINALS_HI = {
  1: "प्रथम भाग",
  2: "द्वितीय भाग",
  3: "तृतीय भाग",
  4: "चतुर्थ भाग",
  5: "पंचम भाग",
  6: "षष्ठ भाग",
  7: "सप्तम भाग",
  8: "अष्टम भाग"
};
function formatAshtamanshaPartHi(part, includeBhagWord = true) {
  const num = Math.max(1, Math.min(8, Math.round(Number(part) || 1)));
  const full = ASHTAMANSHA_PART_ORDINALS_HI[num] || `भाग ${num}`;
  return includeBhagWord ? full : full.replace(/\s*भाग$/u, "");
}
function resolveMantraOrShlokaLabelHi(text) {
  const s = (text || "").trim();
  if (!s) return "सिद्ध मंत्र";
  const segments = s.split(/॥|\n|•/u).map((x) => x.trim()).filter(Boolean);
  const hasStandaloneMantra = segments.some(
    (seg) => !/।/u.test(seg) && (/ॐ/u.test(seg) || /(?:नमः|स्वाहा|वषट्|हुं|फट्|विच्चे|नमो नमः)$/u.test(seg))
  );
  const hasMetricalShloka = segments.some(
    (seg) => /।/u.test(seg) || /(?:नमामि|प्रपद्ये|दद्यात्|सुरेशम्|दिवाकरम्|प्रमोददा|वरिष्ठम्|यमाग्रजम्|भजेऽहम्|वन्दे|भवेत्|निरामयाः|संस्थिता|सर्वदा|साधिके)/u.test(
      seg
    )
  );
  if (hasStandaloneMantra && hasMetricalShloka) return "सिद्ध मंत्र एवं पावन श्लोक";
  if (hasMetricalShloka) return "पावन श्लोक";
  return "सिद्ध मंत्र";
}
const BHADRA_RASHI_NAMES_HI = [
  "मेष",
  "वृषभ",
  "मिथुन",
  "कर्क",
  "सिंह",
  "कन्या",
  "तुला",
  "वृश्चिक",
  "धनु",
  "मकर",
  "कुंभ",
  "मीन"
];
const BHADRA_LOK_LABEL_HI = {
  prithvi: "मृत्युलोक",
  swarga: "स्वर्गलोक",
  patala: "पाताललोक"
};
function resolveBhadraVaasInfo(moonSignNumber) {
  const signNum = (Math.round(moonSignNumber || 1) - 1 + 12) % 12 + 1;
  const rashiHi = BHADRA_RASHI_NAMES_HI[signNum - 1] || "मेष";
  if ([4, 5, 11, 12].includes(signNum)) {
    return {
      moonSignNumber: signNum,
      moonSignNameHi: rashiHi,
      vaasRealm: "prithvi",
      vaasNameHi: "मृत्युलोक वास",
      vaasNameEn: "Mrityulok (Earth) Vaas",
      isPrithviVaas: true,
      effectNoteHi: `मृत्युलोक वास (${rashiHi} चंद्र)`,
      effectNoteEn: `Mrityulok Vaas (Moon in ${rashiHi})`
    };
  }
  if ([1, 2, 3, 8].includes(signNum)) {
    return {
      moonSignNumber: signNum,
      moonSignNameHi: rashiHi,
      vaasRealm: "swarga",
      vaasNameHi: "स्वर्गलोक वास",
      vaasNameEn: "Swargalok (Heaven) Vaas",
      isPrithviVaas: false,
      effectNoteHi: `स्वर्गलोक वास (${rashiHi} चंद्र)`,
      effectNoteEn: `Swargalok Vaas (Moon in ${rashiHi})`
    };
  }
  return {
    moonSignNumber: signNum,
    moonSignNameHi: rashiHi,
    vaasRealm: "patala",
    vaasNameHi: "पाताललोक वास",
    vaasNameEn: "Patalalok (Netherworld) Vaas",
    isPrithviVaas: false,
    effectNoteHi: `पाताललोक वास (${rashiHi} चंद्र)`,
    effectNoteEn: `Patalalok Vaas (Moon in ${rashiHi})`
  };
}
function resolveBhadraVaasForSpan(startSignNumber, endSignNumber, transTimeHi) {
  const vaas1 = resolveBhadraVaasInfo(startSignNumber);
  const vaas2 = resolveBhadraVaasInfo(endSignNumber);
  if (vaas1.moonSignNumber === vaas2.moonSignNumber) {
    return vaas1;
  }
  const startLok = BHADRA_LOK_LABEL_HI[vaas1.vaasRealm];
  const endLok = BHADRA_LOK_LABEL_HI[vaas2.vaasRealm];
  const moonSignLabel = transTimeHi ? `${vaas1.moonSignNameHi} (${transTimeHi} तक) → ${vaas2.moonSignNameHi}` : `${vaas1.moonSignNameHi}→${vaas2.moonSignNameHi}`;
  if (vaas1.vaasRealm === vaas2.vaasRealm) {
    const transNote = transTimeHi ? `${vaas1.moonSignNameHi} (${transTimeHi} तक) → ${vaas2.moonSignNameHi} चंद्र` : `${vaas1.moonSignNameHi}→${vaas2.moonSignNameHi} चंद्र`;
    return {
      ...vaas1,
      moonSignNameHi: moonSignLabel,
      effectNoteHi: `${startLok} वास (${transNote})`,
      effectNoteEn: `${vaas1.vaasNameEn} (${vaas1.moonSignNameHi}->${vaas2.moonSignNameHi} Moon)`,
      hasVaasTransition: true,
      vaasTransitionTimeHi: transTimeHi,
      secondaryVaasNameHi: vaas2.vaasNameHi,
      secondaryMoonSignNameHi: vaas2.moonSignNameHi
    };
  }
  const anyPrithvi = vaas1.isPrithviVaas || vaas2.isPrithviVaas;
  const dynamicSplitNoteHi = transTimeHi ? `${transTimeHi} तक ${startLok} वास (${vaas1.moonSignNameHi} चंद्र), तत्पश्चात ${endLok} वास (${vaas2.moonSignNameHi} चंद्र) — ${startLok} से ${endLok} वास परिवर्तन` : `${startLok} से ${endLok} वास परिवर्तन (${vaas1.moonSignNameHi}→${vaas2.moonSignNameHi} चंद्र)`;
  return {
    moonSignNumber: anyPrithvi ? vaas1.isPrithviVaas ? vaas1.moonSignNumber : vaas2.moonSignNumber : vaas1.moonSignNumber,
    moonSignNameHi: moonSignLabel,
    vaasRealm: anyPrithvi ? "prithvi" : vaas1.vaasRealm,
    vaasNameHi: `${startLok} से ${endLok} वास`,
    vaasNameEn: `${vaas1.vaasNameEn} to ${vaas2.vaasNameEn}`,
    isPrithviVaas: anyPrithvi,
    effectNoteHi: dynamicSplitNoteHi,
    effectNoteEn: `${vaas1.vaasNameEn} to ${vaas2.vaasNameEn}${transTimeHi ? ` at ${transTimeHi}` : ""} (${vaas1.moonSignNameHi}->${vaas2.moonSignNameHi} Moon)`,
    hasVaasTransition: true,
    vaasTransitionTimeHi: transTimeHi,
    secondaryVaasNameHi: vaas2.vaasNameHi,
    secondaryMoonSignNameHi: vaas2.moonSignNameHi
  };
}
const GULIKA_SHASTRIYA_LABEL_HI = "ग्राह्य (संचय, मंत्र-जप व स्थिर कार्यों हेतु अनुकूल)";
const GULIKA_ECLIPSED_LABEL_HI = "गण्डमूल/दुर्मुहूर्त बाधित — केवल नित्य मंत्र-जप हेतु ग्राह्य";
const GANDMOOL_PROHIBITIONS_HI = "विवाह, मुंडन, नामकरण, गृहप्रवेश व नवीन वाहन/प्रॉपर्टी क्रय वर्जित — गण्डमूल शांति अनिवार्य";
const PANCHAK_PROHIBITIONS_HI = "दक्षिण दिशा यात्रा, छत डालना, काष्ठ-संग्रह व शय्या निर्माण वर्जित";
const KARTIKADI_FOOTNOTE_HI = "नोट: गुजरात की कार्तिकादि परंपरा में विक्रम संवत का नववर्ष कार्तिक शुक्ल प्रतिपदा (बेस्तु वरस) से प्रारंभ होता है।";
const POST_2050_DELTA_T_NOTE_HI = "नोट: वर्ष 2050 ई. के पश्चात दीर्घकालीन पृथ्वी घूर्णन अंतर (Delta-T) के कारण सूर्योदय, तिथि व मुहूर्त समय में ±1–2 मिनट का सूक्ष्म अंतर संभावित है।";
function mergeSecIntervals(spans) {
  if (spans.length === 0) return [];
  const sorted = [...spans].sort((a, b) => a[0] - b[0]);
  const out = [[sorted[0][0], sorted[0][1]]];
  for (let i = 1; i < sorted.length; i++) {
    const [s, e] = sorted[i];
    const last = out[out.length - 1];
    if (s <= last[1] + 1) {
      last[1] = Math.max(last[1], e);
    } else {
      out.push([s, e]);
    }
  }
  return out;
}
function subtractSecInterval(base, cutStart, cutEnd) {
  const out = [];
  for (const [s, e] of base) {
    if (cutEnd <= s || cutStart >= e) {
      out.push([s, e]);
    } else {
      if (cutStart > s) out.push([s, cutStart]);
      if (cutEnd < e) out.push([cutEnd, e]);
    }
  }
  return out;
}
function evaluateKalVedhaForWindow(windowId, windowNameHi, startSec, endSec, inauspiciousWindows, timeZone, dateKey, options) {
  const minPureSec = options?.minPureSec ?? 1;
  const includeNextDay = options?.includeNextDayPrefix ?? false;
  const excluded = new Set(options?.excludeIds || []);
  const fmtSpan = (sSec, eSec) => formatWindowRangeInZoneHi(sSec * 1e3, eSec * 1e3, timeZone, dateKey, includeNextDay);
  const originalWindowHi = fmtSpan(startSec, endSec);
  const hardCollidingNamesHi = [];
  const hardEclipsedIntervals = [];
  const bhadraCollidingNamesHi = [];
  const bhadraIntervals = [];
  const gandmoolIntervals = [];
  const panchakIntervals = [];
  let pureSpans = [[startSec, endSec]];
  for (const iw of inauspiciousWindows) {
    if (excluded.has(iw.id)) continue;
    const ovS = Math.max(startSec, iw.startSec);
    const ovE = Math.min(endSec, iw.endSec);
    if (ovE - ovS >= 1) {
      if (iw.id === "gandmool") {
        gandmoolIntervals.push([ovS, ovE]);
      } else if (iw.id === "panchak") {
        panchakIntervals.push([ovS, ovE]);
      } else if (iw.id === "bhadra") {
        if (!bhadraCollidingNamesHi.includes(iw.nameHi)) {
          bhadraCollidingNamesHi.push(iw.nameHi);
        }
        bhadraIntervals.push([ovS, ovE]);
      } else {
        if (!hardCollidingNamesHi.includes(iw.nameHi)) {
          hardCollidingNamesHi.push(iw.nameHi);
        }
        hardEclipsedIntervals.push([ovS, ovE]);
        pureSpans = subtractSecInterval(pureSpans, ovS, ovE);
      }
    }
  }
  const overlapsAnySpan = (targetSpans, checkSpans) => {
    for (const [ts, te] of targetSpans) {
      for (const [cs, ce] of checkSpans) {
        if (Math.min(te, ce) - Math.max(ts, cs) >= 1) return true;
      }
    }
    return false;
  };
  const buildAdvisoryNote = (gm, pn) => gm && pn ? "गण्डमूल/पंचक प्रभावी — मांगलिक कार्य वर्जित, जप-ध्यान ग्राह्य" : gm ? "गण्डमूल प्रभावी — मांगलिक कार्य वर्जित, जप-ध्यान ग्राह्य" : pn ? "पंचक प्रभावी — मांगलिक कार्य वर्जित, जप-ध्यान ग्राह्य" : null;
  const hasGandmoolFull = gandmoolIntervals.length > 0;
  const hasPanchakFull = panchakIntervals.length > 0;
  const mergedHardEclipsed = mergeSecIntervals(hardEclipsedIntervals);
  const validPure = pureSpans.filter(([s, e]) => e - s >= minPureSec);
  const hardLabelHi = hardCollidingNamesHi.join(" व ");
  const hardEclipsedSpanHi = mergedHardEclipsed.map(([s, e]) => fmtSpan(s, e)).join(", ");
  const hasGandmoolOnPure = validPure.length > 0 ? overlapsAnySpan(validPure, gandmoolIntervals) : hasGandmoolFull;
  const hasPanchakOnPure = validPure.length > 0 ? overlapsAnySpan(validPure, panchakIntervals) : hasPanchakFull;
  const allCollidingNamesHi = [
    ...hardCollidingNamesHi,
    ...bhadraCollidingNamesHi,
    ...hasGandmoolOnPure ? ["गण्डमूल नक्षत्र"] : [],
    ...hasPanchakOnPure ? ["पंचक"] : []
  ];
  if (allCollidingNamesHi.length === 0) {
    return {
      windowId,
      windowNameHi,
      originalStartSec: startSec,
      originalEndSec: endSec,
      originalWindowHi,
      hasCollision: false,
      isFullyEclipsed: false,
      collidingNamesHi: [],
      eclipsedSpanHi: null,
      pureSubIntervalsSec: [[startSec, endSec]],
      pureRemainingHi: originalWindowHi,
      statusTagHi: null,
      inlineAlertHi: null,
      formattedDisplayHi: originalWindowHi
    };
  }
  if (hardCollidingNamesHi.length > 0 && validPure.length === 0) {
    const statusTagHi2 = `⚠️ पूर्णतः वर्जित (${hardLabelHi} व्याप्त)`;
    return {
      windowId,
      windowNameHi,
      originalStartSec: startSec,
      originalEndSec: endSec,
      originalWindowHi,
      hasCollision: true,
      isFullyEclipsed: true,
      collidingNamesHi: allCollidingNamesHi,
      eclipsedSpanHi: hardEclipsedSpanHi || originalWindowHi,
      pureSubIntervalsSec: [],
      pureRemainingHi: null,
      statusTagHi: statusTagHi2,
      inlineAlertHi: statusTagHi2,
      formattedDisplayHi: `${originalWindowHi} (${statusTagHi2})`
    };
  }
  if (hardCollidingNamesHi.length > 0 && validPure.length > 0) {
    const pureRemainingHi = validPure.map(([s, e]) => fmtSpan(s, e)).join(", ");
    const totalPureSec = validPure.reduce((acc, [s, e]) => acc + (e - s), 0);
    const pureAdvisoryNoteHi = buildAdvisoryNote(hasGandmoolOnPure, hasPanchakOnPure);
    const baseWarn = totalPureSec < 600 ? `⚠️ चेतावनी: ${hardEclipsedSpanHi} भाग ${hardLabelHi} युक्त, शेष भाग नाम-मात्र (${Math.max(1, Math.round(totalPureSec / 60))} मिनट: ${pureRemainingHi}) — व्यावहारिक कार्यों हेतु अपर्याप्त।` : hasGandmoolOnPure ? `⚠️ चेतावनी: ${hardEclipsedSpanHi} भाग ${hardLabelHi} युक्त — केवल ${hardLabelHi} से शुद्ध अवधि (${pureRemainingHi}) (गण्डमूल प्रभावी होने से जप-ध्यान हेतु ग्राह्य)।` : `⚠️ चेतावनी: ${hardEclipsedSpanHi} भाग ${hardLabelHi} युक्त, शेष भाग शुद्ध (${pureRemainingHi}) है।`;
    const statusTagHi2 = hasGandmoolOnPure && totalPureSec >= 600 ? hasPanchakOnPure ? `${baseWarn} • पंचक प्रभावी — मांगलिक कार्य वर्जित` : baseWarn : pureAdvisoryNoteHi ? `${baseWarn} • ${pureAdvisoryNoteHi}` : baseWarn;
    return {
      windowId,
      windowNameHi,
      originalStartSec: startSec,
      originalEndSec: endSec,
      originalWindowHi,
      hasCollision: true,
      isFullyEclipsed: false,
      collidingNamesHi: allCollidingNamesHi,
      eclipsedSpanHi: hardEclipsedSpanHi,
      pureSubIntervalsSec: validPure,
      pureRemainingHi,
      statusTagHi: statusTagHi2,
      inlineAlertHi: statusTagHi2,
      formattedDisplayHi: `${originalWindowHi} (${statusTagHi2})`
    };
  }
  const bhadraMerged = mergeSecIntervals(bhadraIntervals);
  const bhadraSpanHi = bhadraMerged.map(([s, e]) => fmtSpan(s, e)).join(", ");
  const advisoryNoteHi = buildAdvisoryNote(hasGandmoolOnPure, hasPanchakOnPure);
  const statusParts = [];
  if (bhadraCollidingNamesHi.length > 0) {
    statusParts.push(`⚠️ ${bhadraCollidingNamesHi.join(" व ")} (${bhadraSpanHi}) प्रभावी — मांगलिक कार्य टालें`);
  }
  if (advisoryNoteHi) {
    statusParts.push(advisoryNoteHi);
  }
  const statusTagHi = statusParts.join(" • ");
  return {
    windowId,
    windowNameHi,
    originalStartSec: startSec,
    originalEndSec: endSec,
    originalWindowHi,
    hasCollision: true,
    isFullyEclipsed: false,
    collidingNamesHi: allCollidingNamesHi,
    eclipsedSpanHi: bhadraSpanHi || null,
    pureSubIntervalsSec: [[startSec, endSec]],
    pureRemainingHi: originalWindowHi,
    statusTagHi,
    inlineAlertHi: statusTagHi,
    formattedDisplayHi: `${originalWindowHi} (${statusTagHi})`
  };
}
const ENGLISH_TO_HINDI_STATE_MAP = {
  "andhra pradesh": "आंध्र प्रदेश",
  "arunachal pradesh": "अरुणाचल प्रदेश",
  "assam": "असम",
  "bihar": "बिहार",
  "chhattisgarh": "छत्तीसगढ़",
  "goa": "गोवा",
  "gujarat": "गुजरात",
  "haryana": "हरियाणा",
  "himachal pradesh": "हिमाचल प्रदेश",
  "jharkhand": "झारखंड",
  "karnataka": "कर्नाटक",
  "kerala": "केरल",
  "madhya pradesh": "मध्य प्रदेश",
  "maharashtra": "महाराष्ट्र",
  "manipur": "मणिपुर",
  "meghalaya": "मेघालय",
  "mizoram": "मिजोरम",
  "nagaland": "नागालैंड",
  "odisha": "ओडिशा",
  "orissa": "ओडिशा",
  "punjab": "पंजाब",
  "rajasthan": "राजस्थान",
  "sikkim": "सिक्किम",
  "tamil nadu": "तमिलनाडु",
  "telangana": "तेलंगाना",
  "tripura": "त्रिपुरा",
  "uttar pradesh": "उत्तर प्रदेश",
  "uttarakhand": "उत्तराखंड",
  "west bengal": "पश्चिम बंगाल",
  "delhi": "दिल्ली",
  "new delhi": "नई दिल्ली",
  "chandigarh": "चंडीगढ़",
  "jammu and kashmir": "जम्मू-कश्मीर",
  "ladakh": "लद्दाख",
  "puducherry": "पुडुचेरी",
  "lakshadweep": "लक्षद्वीप",
  "andaman and nicobar islands": "अंडमान और निकोबार द्वीप समूह",
  "dadra and nagar haveli and daman and diu": "दादरा व नगर हवेली तथा दमन-दीव",
  "india": "भारत",
  "nepal": "नेपाल",
  "usa": "अमेरिका",
  "uk": "ब्रिटेन",
  "uae": "यूएई",
  "canada": "कनाडा",
  "australia": "ऑस्ट्रेलिया",
  "singapore": "सिंगापुर",
  "japan": "जापान"
};
const ENGLISH_TO_HINDI_CITY_MAP = {
  "dwarka": "द्वारका",
  "devbhumi dwarka": "देवभूमि द्वारका",
  "somnath": "सोमनाथ",
  "veraval": "वेरावल",
  "ahmedabad": "अहमदाबाद",
  "surat": "सूरत",
  "vadodara": "वडोदरा",
  "rajkot": "राजकोट",
  "jamnagar": "जामनगर",
  "junagadh": "जूनागढ़",
  "porbandar": "पोरबंदर",
  "bhavnagar": "भावनगर",
  "gandhinagar": "गांधीनगर",
  "rudrapur": "रुद्रपुर",
  "haldwani": "हल्द्वानी",
  "nainital": "नैनीताल",
  "dehradun": "देहरादून",
  "haridwar": "हरिद्वार",
  "rishikesh": "ऋषिकेश",
  "kashipur": "काशीपुर",
  "kichha": "किच्छा",
  "pantnagar": "पंतनगर",
  "delhi": "दिल्ली",
  "new delhi": "नई दिल्ली",
  "noida": "नोएडा",
  "ghaziabad": "गाजियाबाद",
  "gurugram": "गुरुग्राम",
  "gurgaon": "गुरुग्राम",
  "faridabad": "फरीदाबाद",
  "varanasi": "वाराणसी",
  "kashi": "काशी",
  "ayodhya": "अयोध्या",
  "prayagraj": "प्रयागराज",
  "allahabad": "प्रयागराज",
  "lucknow": "लखनऊ",
  "kanpur": "कानपुर",
  "agra": "आगरा",
  "mathura": "मथुरा",
  "vrindavan": "वृंदावन",
  "meerut": "मेरठ",
  "bareilly": "बरेली",
  "moradabad": "मुरादाबाद",
  "gorakhpur": "गोरखपुर",
  "ujjain": "उज्जैन",
  "indore": "इंदौर",
  "bhopal": "भोपाल",
  "gwalior": "ग्वालियर",
  "jabalpur": "जबलपुर",
  "jaipur": "जयपुर",
  "jodhpur": "जोधपुर",
  "udaipur": "उदयपुर",
  "ajmer": "अजमेर",
  "kota": "कोटा",
  "bikaner": "बीकानेर",
  "pushkar": "पुष्कर",
  "mumbai": "मुंबई",
  "pune": "पुणे",
  "nagpur": "नागपुर",
  "nashik": "नासिक",
  "thane": "ठाणे",
  "shirdi": "शिरडी",
  "kolkata": "कोलकाता",
  "howrah": "हावड़ा",
  "patna": "पटना",
  "gaya": "गया",
  "ranchi": "रांची",
  "deoghar": "देवघर",
  "raipur": "रायपुर",
  "bhubaneswar": "भुवनेश्वर",
  "puri": "पुरी",
  "bengaluru": "बेंगलुरु",
  "bangalore": "बेंगलुरु",
  "mysuru": "मैसूरु",
  "hyderabad": "हैदराबाद",
  "chennai": "चेन्नई",
  "madurai": "मदुरै",
  "rameswaram": "रामेश्वरम्",
  "coimbatore": "कोयंबटूर",
  "tirupati": "तिरुपति",
  "vijayawada": "विजयवाड़ा",
  "kochi": "कोच्चि",
  "thiruvananthapuram": "तिरुवनंतपुरम",
  "amritsar": "अमृतसर",
  "ludhiana": "लुधियाना",
  "jalandhar": "जालंधर",
  "patiala": "पटियाला",
  "shimla": "शिमला",
  "jammu": "जम्मू",
  "srinagar": "श्रीनगर",
  "katra": "कटरा",
  "guwahati": "गुवाहाटी",
  "panaji": "पणजी",
  "kathmandu": "काठमांडू",
  "dubai": "दुबई",
  "london": "लंदन",
  "new york": "न्यूयॉर्क",
  "toronto": "टोरंटो",
  "singapore": "सिंगापुर",
  "sydney": "सिडनी",
  "tokyo": "टोक्यो"
};
function resolveHindiCityDisplayName(loc) {
  if (!loc) return "रुद्रपुर, उत्तराखंड";
  const rawStr = typeof loc === "string" ? loc.trim() : (loc.hindiName || loc.name || "").trim();
  if (!rawStr) return "रुद्रपुर, उत्तराखंड";
  const translateSegment = (seg) => {
    const trimmed = seg.trim();
    if (!trimmed) return "";
    if (/[\u0900-\u097F]/.test(trimmed) && !/[A-Za-z]{3,}/.test(trimmed)) {
      return trimmed;
    }
    const lower = trimmed.toLowerCase();
    if (ENGLISH_TO_HINDI_CITY_MAP[lower]) return ENGLISH_TO_HINDI_CITY_MAP[lower];
    if (ENGLISH_TO_HINDI_STATE_MAP[lower]) return ENGLISH_TO_HINDI_STATE_MAP[lower];
    const cityMatch = WORLDWIDE_PANCHANG_CITIES.find(
      (c) => c.id === lower || c.name.toLowerCase() === lower || c.name.split(",")[0].trim().toLowerCase() === lower
    );
    if (cityMatch && cityMatch.hindiName) {
      return cityMatch.hindiName.split(",")[0].trim();
    }
    const distMatch = resolveOfflineIndianDistrict(trimmed);
    if (distMatch && distMatch.hindiName) {
      const distFirst = distMatch.hindiName.split(",")[0].trim();
      if (/[\u0900-\u097F]/.test(distFirst)) return distFirst;
    }
    let out = trimmed;
    for (const [en, hi] of Object.entries(ENGLISH_TO_HINDI_CITY_MAP)) {
      if (lower.includes(en)) {
        out = out.replace(new RegExp(`\\b${en.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "gi"), hi);
      }
    }
    for (const [en, hi] of Object.entries(ENGLISH_TO_HINDI_STATE_MAP)) {
      if (out.toLowerCase().includes(en)) {
        out = out.replace(new RegExp(`\\b${en.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "gi"), hi);
      }
    }
    return out.trim();
  };
  const parts = rawStr.split(",").map(translateSegment).filter(Boolean);
  const deduped = [];
  for (const p of parts) {
    if (deduped.length === 0 || deduped[deduped.length - 1] !== p) {
      deduped.push(p);
    }
  }
  return deduped.join(", ") || rawStr;
}
function parseSingleClockPointIST(rawPoint, sunriseH, nextSunriseH, inheritedMeridiem) {
  if (!rawPoint) return null;
  const s = rawPoint.trim();
  if (/अगले\s*सूर्योदय|पूर्ण\s*रात्रि|रातभर/u.test(s)) return nextSunriseH;
  if (/सूर्योदय\s*(?:\)|$)/u.test(s) && !/\d{1,2}:\d{2}/.test(s)) return sunriseH;
  const m = s.match(/(\d{1,2}):(\d{2})(?::(\d{2}))?\s*(AM|PM)?/i);
  if (!m) return null;
  let hh = parseInt(m[1], 10);
  const mm = parseInt(m[2], 10);
  const ss = m[3] ? parseInt(m[3], 10) : 0;
  const mer = (m[4] || "").toUpperCase() || inheritedMeridiem || "";
  if (mer === "PM" && hh < 12) hh += 12;
  else if (mer === "AM" && hh === 12) hh = 0;
  else if (!mer) {
    if (/दोपहर/u.test(s) && hh >= 1 && hh < 10) hh += 12;
    else if (/सायं|शाम/u.test(s) && hh < 12) hh += 12;
    else if (/रात्रि/u.test(s) && hh >= 7 && hh < 12) hh += 12;
    else if (/रात्रि|मध्यरात्रि/u.test(s) && hh === 12) hh = 0;
  }
  let decH = hh + mm / 60 + ss / 3600;
  if (/अगले\s*दिन|सूर्योदय\s*पूर्व/u.test(s) || decH < sunriseH - 0.05 && (decH < 4.5 || /रात्रि|मध्यरात्रि/u.test(s))) {
    if (decH < 12) decH += 24;
  }
  return decH;
}
function parseHindiTimeRangeIST(rawRange, sunriseH, nextSunriseH) {
  if (!rawRange) return null;
  const cleanHead = rawRange.replace(/\((?:राहुकाल|बुधवार|भद्रा|ध्यान|अति शुभ|मृत्युलोक|पृथ्वी|स्वर्गलोक|पाताललोक)[^)]*(?:\([^)]*\)[^)]*)?\)/gu, "").split(/\s*—\s*|\s*\|\s*/u)[0].trim();
  const parts = cleanHead.split(/\s*(?:–|—|-|\s+से\s+)\s*/u).filter(Boolean);
  if (parts.length < 2) return null;
  const startRaw = parts[0];
  const endRaw = parts[1];
  const endMerMatch = endRaw.match(/\b(AM|PM)\b/i);
  const startMerMatch = startRaw.match(/\b(AM|PM)\b/i);
  const endMer = endMerMatch ? endMerMatch[1].toUpperCase() : void 0;
  const startMer = startMerMatch ? startMerMatch[1].toUpperCase() : void 0;
  let sH = parseSingleClockPointIST(startRaw, sunriseH, nextSunriseH, startMer);
  let eH = parseSingleClockPointIST(endRaw, sunriseH, nextSunriseH, endMer || startMer);
  if (sH !== null && eH !== null && !startMer && endMer === "PM" && sH < 12 && sH + 12 <= eH) {
    sH += 12;
  }
  if (sH !== null && eH !== null && eH <= sH && eH < 12) {
    eH += 24;
  }
  if (sH === null || eH === null || eH <= sH + 0.01) return null;
  return [sH, eH];
}
function subtractBlockedTimeIntervals(candidate, blockedList, minSpanHours = 10 / 60) {
  let intervals = [[candidate[0], candidate[1]]];
  for (const b of blockedList) {
    if (!b || b[1] <= b[0]) continue;
    const next = [];
    for (const [a, c] of intervals) {
      if (b[1] <= a || b[0] >= c) {
        next.push([a, c]);
      } else {
        if (b[0] - a > 5e-3) next.push([a, b[0]]);
        if (c - b[1] > 5e-3) next.push([b[1], c]);
      }
    }
    intervals = next;
  }
  return intervals.filter(([s, e]) => e - s >= minSpanHours);
}
function formatISTHourPointHindi(decH, includePeriodPrefix = true) {
  const totalMins = Math.round(decH * 60);
  const isNextDay = Math.floor(totalMins / 1440) > 0;
  const minsInDay = (totalMins % 1440 + 1440) % 1440;
  const h = Math.floor(minsInDay / 60);
  const m = minsInDay % 60;
  const clock = formatClock12(h, m);
  if (!includePeriodPrefix) return clock;
  const prefix = getTimePrefix(h, m);
  const core = prefix ? `${prefix} ${clock}` : clock;
  return isNextDay ? `अगले दिन ${core}` : core;
}
function formatISTHourRangeHindi(startH, endH) {
  const startTotalMins = Math.round(startH * 60);
  const endTotalMins = Math.round(endH * 60);
  const startModMins = (startTotalMins % 1440 + 1440) % 1440;
  const endModMins = (endTotalMins % 1440 + 1440) % 1440;
  const startHour = Math.floor(startModMins / 60);
  const startMinute = startModMins % 60;
  const endHour = Math.floor(endModMins / 60);
  const endMinute = endModMins % 60;
  const multiDaySpan = endTotalMins - startTotalMins >= 1440;
  return formatAstroTimeRange(startHour, startMinute, endHour, endMinute, multiDaySpan);
}
function resolveBhadraRahuFreeShreshthaSamay(dayPanchang, _slotVariationIndex = 0) {
  const sunriseH = typeof dayPanchang.sunriseISTHours === "number" ? dayPanchang.sunriseISTHours : parseSingleClockPointIST(dayPanchang.sunrise, 4, 30) ?? 6.5;
  const sunsetH = typeof dayPanchang.sunsetISTHours === "number" ? dayPanchang.sunsetISTHours : parseSingleClockPointIST(dayPanchang.sunset, sunriseH, sunriseH + 18) ?? 17.5;
  const nextSunriseH = sunriseH + 24;
  const rahuInterval = parseHindiTimeRangeIST(dayPanchang.rahuKaal, sunriseH, nextSunriseH);
  const yamaInterval = parseHindiTimeRangeIST(dayPanchang.yamagandam, sunriseH, nextSunriseH);
  const isBhadraHarmlessSwargaPatala = dayPanchang.bhadraVaas?.isPrithviVaas === false || Boolean(dayPanchang.bhadraKaal && /बाधक\s*नहीं|Swarga|Patala/iu.test(dayPanchang.bhadraKaal));
  const bhadraInterval = dayPanchang.bhadraKaal && !isBhadraHarmlessSwargaPatala ? dayPanchang.bhadraVaas?.prithviIntervalHours ?? parseHindiTimeRangeIST(dayPanchang.bhadraKaal, sunriseH, nextSunriseH) : null;
  const blocked = [
    rahuInterval,
    yamaInterval,
    bhadraInterval
  ];
  const dayChogs = dayPanchang.dayChoghadiya || [];
  const pureChogSlots = [];
  for (const slot of dayChogs) {
    if (slot.kaalBadge) continue;
    const isShubh = ["amrit", "shubh", "labh"].includes(slot.type) || ["अमृत", "शुभ", "लाभ"].includes(slot.name);
    if (!isShubh) continue;
    const orig = parseHindiTimeRangeIST(slot.time, sunriseH, nextSunriseH);
    if (!orig) continue;
    const freeParts = subtractBlockedTimeIntervals(orig, blocked, 10 / 60);
    for (const [fs, fe] of freeParts) {
      const wasTrimmed = Math.abs(fs - orig[0]) > 0.02 || Math.abs(fe - orig[1]) > 0.02;
      pureChogSlots.push({
        name: slot.name,
        hindiName: slot.hindiName || slot.name,
        startH: fs,
        endH: fe,
        time: formatISTHourRangeHindi(fs, fe),
        wasTrimmed
      });
    }
  }
  const isWed = dayPanchang.weekdayIndex === 3 || (dayPanchang.abhijitMuhurat || "").includes("मान्य नहीं");
  let pureAbhijitWindow;
  let abhijitWasAdjusted = false;
  if (!isWed && dayPanchang.abhijitMuhurat && !dayPanchang.abhijitMuhurat.includes("भद्रा प्रभावी") && !dayPanchang.abhijitMuhurat.includes("पूर्णतः वर्जित") && !dayPanchang.kalVedhaReport?.abhijit?.isFullyEclipsed) {
    const fullAbhijitClean = dayPanchang.abhijitMuhurat.replace(/\s*\(अति शुभ\)/gu, "").trim();
    const abOrig = parseHindiTimeRangeIST(dayPanchang.abhijitMuhurat, sunriseH, nextSunriseH);
    if (abOrig) {
      const abFree = subtractBlockedTimeIntervals(abOrig, [bhadraInterval, rahuInterval], 20 / 60);
      if (abFree.length > 0) {
        const wasCut = Math.abs(abFree[0][0] - abOrig[0]) > 0.02 || Math.abs(abFree[0][1] - abOrig[1]) > 0.02;
        pureAbhijitWindow = !wasCut && fullAbhijitClean ? fullAbhijitClean : formatISTHourRangeHindi(abFree[0][0], abFree[0][1]);
        abhijitWasAdjusted = wasCut;
      } else {
        abhijitWasAdjusted = true;
      }
    } else if (fullAbhijitClean) {
      pureAbhijitWindow = fullAbhijitClean;
    }
  }
  let pureVijayWindow;
  if (dayPanchang.vijayMuhurat) {
    const vjOrig = parseHindiTimeRangeIST(dayPanchang.vijayMuhurat, sunriseH, nextSunriseH);
    if (vjOrig) {
      const vjFree = subtractBlockedTimeIntervals(vjOrig, blocked, 10 / 60);
      if (vjFree.length > 0) {
        pureVijayWindow = formatISTHourRangeHindi(vjFree[0][0], vjFree[0][1]);
      }
    }
  }
  const morningPure = pureChogSlots.filter((s) => s.startH < 12);
  const afternoonPure = pureChogSlots.filter((s) => s.startH >= 12);
  const chosenMorning = morningPure.length > 0 ? morningPure[0] : null;
  const chosenAfternoon = afternoonPure.length > 0 ? afternoonPure[0] : null;
  const wasAdjusted = Boolean(chosenMorning?.wasTrimmed) || Boolean(chosenAfternoon?.wasTrimmed) || abhijitWasAdjusted || morningPure.length === 0 && Boolean(bhadraInterval);
  let cardBestTime = "";
  let detailedBestTime = "";
  if (chosenMorning) {
    if (pureAbhijitWindow && !isWed) {
      cardBestTime = `${chosenMorning.time} (${chosenMorning.hindiName}) • अभिजित: ${pureAbhijitWindow}`;
      detailedBestTime = `${chosenMorning.time} (${chosenMorning.hindiName} चौघड़िया) • अभिजित: ${pureAbhijitWindow}`;
    } else if (pureVijayWindow) {
      cardBestTime = `${chosenMorning.time} (${chosenMorning.hindiName}) • विजय: ${pureVijayWindow}`;
      detailedBestTime = `${chosenMorning.time} (${chosenMorning.hindiName} चौघड़िया) • विजय मुहूर्त: ${pureVijayWindow}`;
    } else {
      cardBestTime = `${chosenMorning.time} (${chosenMorning.hindiName} चौघड़िया)`;
      detailedBestTime = `${chosenMorning.time} (${chosenMorning.hindiName} चौघड़िया — शुद्ध शुभ समय)`;
    }
  } else if (pureAbhijitWindow && !isWed) {
    cardBestTime = chosenAfternoon ? `अभिजित: ${pureAbhijitWindow} • ${chosenAfternoon.time}` : `अभिजित मुहूर्त: ${pureAbhijitWindow}`;
    detailedBestTime = chosenAfternoon ? `अभिजित मुहूर्त: ${pureAbhijitWindow} • ${chosenAfternoon.time} (${chosenAfternoon.hindiName} चौघड़िया)` : `अभिजित मुहूर्त: ${pureAbhijitWindow} (भद्रा व राहुकाल मुक्त)`;
  } else if (chosenAfternoon) {
    cardBestTime = pureVijayWindow ? `${chosenAfternoon.time} (${chosenAfternoon.hindiName}) • विजय: ${pureVijayWindow}` : `${chosenAfternoon.time} (${chosenAfternoon.hindiName} चौघड़िया)`;
    detailedBestTime = pureVijayWindow ? `${chosenAfternoon.time} (${chosenAfternoon.hindiName} चौघड़िया) • विजय मुहूर्त: ${pureVijayWindow}` : `${chosenAfternoon.time} (${chosenAfternoon.hindiName} चौघड़िया — भद्रा व राहुकाल मुक्त)`;
  } else if (pureVijayWindow) {
    cardBestTime = `विजय मुहूर्त: ${pureVijayWindow}`;
    detailedBestTime = `विजय मुहूर्त: ${pureVijayWindow} (भद्रा व राहुकाल मुक्त)`;
  } else {
    const freeDayWindows = subtractBlockedTimeIntervals([sunriseH, sunsetH], blocked, 15 / 60);
    if (freeDayWindows.length > 0) {
      const bestFree = freeDayWindows[0];
      const freeRange = formatISTHourRangeHindi(bestFree[0], bestFree[1]);
      cardBestTime = `${freeRange} (शुद्ध शुभ समय)`;
      detailedBestTime = `${freeRange} (भद्रा व राहुकाल मुक्त शुद्ध समय)`;
    } else {
      const bhadraEndH = bhadraInterval ? bhadraInterval[1] : sunsetH;
      const freeAfterStr = bhadraEndH < nextSunriseH - 0.1 ? `${formatISTHourPointHindi(bhadraEndH, true)} के पश्चात शुभ` : `${formatISTHourPointHindi(sunsetH, true)} (गोधूलि शुभ काल)`;
      cardBestTime = freeAfterStr;
      detailedBestTime = `भद्रा समाप्ति पश्चात ${freeAfterStr}`;
    }
  }
  const summarySlots = [...morningPure, ...afternoonPure].slice(0, 2);
  const choghadiyaFreeSummary = summarySlots.length > 0 ? summarySlots.map((s) => `${s.hindiName} (${s.time})`).join(", ") : pureAbhijitWindow ? `अभिजित (${pureAbhijitWindow})` : pureVijayWindow ? `विजय (${pureVijayWindow})` : void 0;
  return {
    cardBestTime,
    detailedBestTime,
    choghadiyaFreeSummary,
    pureAbhijitWindow,
    wasAdjustedForBhadraOrRahu: wasAdjusted
  };
}
const DEFAULT_RUDRAPUR_LOCATION = {
  id: "rudrapur",
  name: "Rudrapur, Udham Singh Nagar, Uttarakhand",
  hindiName: "रुद्रपुर, उत्तराखण्ड",
  district: "Udham Singh Nagar",
  state: "Uttarakhand",
  country: "India",
  lat: 28.9765,
  lon: 79.3999,
  timezone: "Asia/Kolkata",
  tzOffsetHours: 5.5,
  elevationMeters: 214,
  source: "default"
};
const WORLDWIDE_PANCHANG_CITIES = [
  DEFAULT_RUDRAPUR_LOCATION,
  { id: "haldwani", name: "Haldwani, Nainital, Uttarakhand", hindiName: "हल्द्वानी, उत्तराखण्ड", district: "Nainital", state: "Uttarakhand", country: "India", lat: 29.2183, lon: 79.513, timezone: "Asia/Kolkata", tzOffsetHours: 5.5 },
  { id: "haridwar", name: "Haridwar, Uttarakhand", hindiName: "हरिद्वार, उत्तराखण्ड", district: "Haridwar", state: "Uttarakhand", country: "India", lat: 29.9457, lon: 78.1642, timezone: "Asia/Kolkata", tzOffsetHours: 5.5 },
  { id: "dehradun", name: "Dehradun, Uttarakhand", hindiName: "देहरादून, उत्तराखण्ड", district: "Dehradun", state: "Uttarakhand", country: "India", lat: 30.3165, lon: 78.0322, timezone: "Asia/Kolkata", tzOffsetHours: 5.5 },
  { id: "nainital", name: "Nainital, Uttarakhand", hindiName: "नैनीताल, उत्तराखण्ड", district: "Nainital", state: "Uttarakhand", country: "India", lat: 29.3919, lon: 79.4542, timezone: "Asia/Kolkata", tzOffsetHours: 5.5, elevationMeters: 1938 },
  { id: "kashipur", name: "Kashipur, Udham Singh Nagar, Uttarakhand", hindiName: "काशीपुर, उत्तराखण्ड", district: "Udham Singh Nagar", state: "Uttarakhand", country: "India", lat: 29.2104, lon: 78.9619, timezone: "Asia/Kolkata", tzOffsetHours: 5.5 },
  { id: "rishikesh", name: "Rishikesh, Dehradun, Uttarakhand", hindiName: "ऋषिकेश, उत्तराखण्ड", district: "Dehradun", state: "Uttarakhand", country: "India", lat: 30.0869, lon: 78.2676, timezone: "Asia/Kolkata", tzOffsetHours: 5.5 },
  { id: "almora", name: "Almora, Uttarakhand", hindiName: "अल्मोड़ा, उत्तराखण्ड", district: "Almora", state: "Uttarakhand", country: "India", lat: 29.5892, lon: 79.6467, timezone: "Asia/Kolkata", tzOffsetHours: 5.5 },
  { id: "pithoragarh", name: "Pithoragarh, Uttarakhand", hindiName: "पिथौरागढ़, उत्तराखण्ड", district: "Pithoragarh", state: "Uttarakhand", country: "India", lat: 29.5829, lon: 80.2182, timezone: "Asia/Kolkata", tzOffsetHours: 5.5 },
  { id: "roorkee", name: "Roorkee, Haridwar, Uttarakhand", hindiName: "रुड़की, उत्तराखण्ड", district: "Haridwar", state: "Uttarakhand", country: "India", lat: 29.8543, lon: 77.888, timezone: "Asia/Kolkata", tzOffsetHours: 5.5 },
  { id: "kotdwar", name: "Kotdwar, Pauri Garhwal, Uttarakhand", hindiName: "कोटद्वार, उत्तराखण्ड", district: "Pauri Garhwal", state: "Uttarakhand", country: "India", lat: 29.7468, lon: 78.5222, timezone: "Asia/Kolkata", tzOffsetHours: 5.5 },
  { id: "bageshwar", name: "Bageshwar, Uttarakhand", hindiName: "बागेश्वर, उत्तराखण्ड", district: "Bageshwar", state: "Uttarakhand", country: "India", lat: 29.8362, lon: 79.7713, timezone: "Asia/Kolkata", tzOffsetHours: 5.5 },
  { id: "champawat", name: "Champawat, Uttarakhand", hindiName: "चम्पावत, उत्तराखण्ड", district: "Champawat", state: "Uttarakhand", country: "India", lat: 29.3361, lon: 80.091, timezone: "Asia/Kolkata", tzOffsetHours: 5.5 },
  { id: "khatima", name: "Khatima, Udham Singh Nagar, Uttarakhand", hindiName: "खटीमा, उत्तराखण्ड", district: "Udham Singh Nagar", state: "Uttarakhand", country: "India", lat: 28.9216, lon: 79.9706, timezone: "Asia/Kolkata", tzOffsetHours: 5.5 },
  { id: "sitarganj", name: "Sitarganj, Udham Singh Nagar, Uttarakhand", hindiName: "सितारगंज, उत्तराखण्ड", district: "Udham Singh Nagar", state: "Uttarakhand", country: "India", lat: 28.93, lon: 79.7, timezone: "Asia/Kolkata", tzOffsetHours: 5.5 },
  { id: "gadarpur", name: "Gadarpur, Udham Singh Nagar, Uttarakhand", hindiName: "गदरपुर, उत्तराखण्ड", district: "Udham Singh Nagar", state: "Uttarakhand", country: "India", lat: 29.0419, lon: 79.2136, timezone: "Asia/Kolkata", tzOffsetHours: 5.5 },
  { id: "bazpur", name: "Bazpur, Udham Singh Nagar, Uttarakhand", hindiName: "बाजपुर, उत्तराखण्ड", district: "Udham Singh Nagar", state: "Uttarakhand", country: "India", lat: 29.1558, lon: 79.1128, timezone: "Asia/Kolkata", tzOffsetHours: 5.5 },
  { id: "ramnagar", name: "Ramnagar, Nainital, Uttarakhand", hindiName: "रामनगर, उत्तराखण्ड", district: "Nainital", state: "Uttarakhand", country: "India", lat: 29.3948, lon: 79.1265, timezone: "Asia/Kolkata", tzOffsetHours: 5.5 },
  { id: "pauri", name: "Pauri Garhwal, Uttarakhand", hindiName: "पौड़ी गढ़वाल, उत्तराखण्ड", district: "Pauri Garhwal", state: "Uttarakhand", country: "India", lat: 30.1471, lon: 78.7745, timezone: "Asia/Kolkata", tzOffsetHours: 5.5 },
  { id: "tehri", name: "Tehri Garhwal, Uttarakhand", hindiName: "टिहरी गढ़वाल, उत्तराखण्ड", district: "Tehri Garhwal", state: "Uttarakhand", country: "India", lat: 30.3782, lon: 78.4322, timezone: "Asia/Kolkata", tzOffsetHours: 5.5 },
  { id: "uttarkashi", name: "Uttarkashi, Uttarakhand", hindiName: "उत्तरकाशी, उत्तराखण्ड", district: "Uttarkashi", state: "Uttarakhand", country: "India", lat: 30.7268, lon: 78.4354, timezone: "Asia/Kolkata", tzOffsetHours: 5.5 },
  { id: "chamoli", name: "Chamoli / Gopeshwar, Uttarakhand", hindiName: "चमोली / गोपेश्वर, उत्तराखण्ड", district: "Chamoli", state: "Uttarakhand", country: "India", lat: 30.4095, lon: 79.3215, timezone: "Asia/Kolkata", tzOffsetHours: 5.5 },
  { id: "rudraprayag", name: "Rudraprayag, Uttarakhand", hindiName: "रुद्रप्रयाग, उत्तराखण्ड", district: "Rudraprayag", state: "Uttarakhand", country: "India", lat: 30.2844, lon: 78.9811, timezone: "Asia/Kolkata", tzOffsetHours: 5.5 },
  { id: "kedarnath", name: "Kedarnath Dham, Rudraprayag, Uttarakhand", hindiName: "श्री केदारनाथ धाम, उत्तराखण्ड", district: "Rudraprayag", state: "Uttarakhand", country: "India", lat: 30.7346, lon: 79.0669, timezone: "Asia/Kolkata", tzOffsetHours: 5.5, elevationMeters: 3583 },
  { id: "badrinath", name: "Badrinath Dham, Chamoli, Uttarakhand", hindiName: "श्री बद्रीनाथ धाम, उत्तराखण्ड", district: "Chamoli", state: "Uttarakhand", country: "India", lat: 30.7433, lon: 79.4938, timezone: "Asia/Kolkata", tzOffsetHours: 5.5, elevationMeters: 3133 },
  { id: "delhi", name: "New Delhi, Delhi, India", hindiName: "नई दिल्ली, भारत", district: "New Delhi", state: "Delhi", country: "India", lat: 28.6139, lon: 77.209, timezone: "Asia/Kolkata", tzOffsetHours: 5.5 },
  { id: "varanasi", name: "Varanasi (Kashi), UP", hindiName: "वाराणसी (काशी), उ.प्र.", district: "Varanasi", state: "Uttar Pradesh", country: "India", lat: 25.3176, lon: 82.9739, timezone: "Asia/Kolkata", tzOffsetHours: 5.5 },
  { id: "ayodhya", name: "Ayodhya Dham, UP", hindiName: "श्री अयोध्या धाम, उ.प्र.", district: "Ayodhya", state: "Uttar Pradesh", country: "India", lat: 26.7922, lon: 82.1998, timezone: "Asia/Kolkata", tzOffsetHours: 5.5 },
  { id: "vrindavan", name: "Mathura / Vrindavan, UP", hindiName: "मथुरा / वृन्दावन, उ.प्र.", district: "Mathura", state: "Uttar Pradesh", country: "India", lat: 27.565, lon: 77.6593, timezone: "Asia/Kolkata", tzOffsetHours: 5.5 },
  { id: "agra", name: "Agra, UP", hindiName: "आगरा, उत्तर प्रदेश", district: "Agra", state: "Uttar Pradesh", country: "India", lat: 27.1767, lon: 78.0081, timezone: "Asia/Kolkata", tzOffsetHours: 5.5 },
  { id: "ujjain", name: "Ujjain (Mahakal), MP", hindiName: "उज्जैन (अवंतिका), म.प्र.", district: "Ujjain", state: "Madhya Pradesh", country: "India", lat: 23.1765, lon: 75.7885, timezone: "Asia/Kolkata", tzOffsetHours: 5.5 },
  { id: "prayagraj", name: "Prayagraj, UP", hindiName: "प्रयागराज, उत्तर प्रदेश", district: "Prayagraj", state: "Uttar Pradesh", country: "India", lat: 25.4358, lon: 81.8463, timezone: "Asia/Kolkata", tzOffsetHours: 5.5 },
  { id: "lucknow", name: "Lucknow, UP", hindiName: "लखनऊ, उत्तर प्रदेश", district: "Lucknow", state: "Uttar Pradesh", country: "India", lat: 26.8467, lon: 80.9462, timezone: "Asia/Kolkata", tzOffsetHours: 5.5 },
  { id: "kanpur", name: "Kanpur, UP", hindiName: "कानपुर, उत्तर प्रदेश", district: "Kanpur Nagar", state: "Uttar Pradesh", country: "India", lat: 26.4499, lon: 80.3319, timezone: "Asia/Kolkata", tzOffsetHours: 5.5 },
  { id: "bareilly", name: "Bareilly, UP", hindiName: "बरेली, उत्तर प्रदेश", district: "Bareilly", state: "Uttar Pradesh", country: "India", lat: 28.367, lon: 79.4304, timezone: "Asia/Kolkata", tzOffsetHours: 5.5 },
  { id: "moradabad", name: "Moradabad, UP", hindiName: "मुरादाबाद, उत्तर प्रदेश", district: "Moradabad", state: "Uttar Pradesh", country: "India", lat: 28.8386, lon: 78.7733, timezone: "Asia/Kolkata", tzOffsetHours: 5.5 },
  { id: "rampur", name: "Rampur, UP", hindiName: "रामपुर, उत्तर प्रदेश", district: "Rampur", state: "Uttar Pradesh", country: "India", lat: 28.8031, lon: 79.025, timezone: "Asia/Kolkata", tzOffsetHours: 5.5 },
  { id: "pilibhit", name: "Pilibhit, UP", hindiName: "पीलीभीत, उत्तर प्रदेश", district: "Pilibhit", state: "Uttar Pradesh", country: "India", lat: 28.6312, lon: 79.8044, timezone: "Asia/Kolkata", tzOffsetHours: 5.5 },
  { id: "meerut", name: "Meerut, UP", hindiName: "मेरठ, उत्तर प्रदेश", district: "Meerut", state: "Uttar Pradesh", country: "India", lat: 28.9845, lon: 77.7064, timezone: "Asia/Kolkata", tzOffsetHours: 5.5 },
  { id: "ghaziabad", name: "Ghaziabad, UP", hindiName: "गाज़ियाबाद, उत्तर प्रदेश", district: "Ghaziabad", state: "Uttar Pradesh", country: "India", lat: 28.6692, lon: 77.4538, timezone: "Asia/Kolkata", tzOffsetHours: 5.5 },
  { id: "noida", name: "Noida / Greater Noida, UP", hindiName: "नोएडा, उत्तर प्रदेश", district: "Gautam Buddha Nagar", state: "Uttar Pradesh", country: "India", lat: 28.5355, lon: 77.391, timezone: "Asia/Kolkata", tzOffsetHours: 5.5 },
  { id: "gorakhpur", name: "Gorakhpur, UP", hindiName: "गोरखपुर, उत्तर प्रदेश", district: "Gorakhpur", state: "Uttar Pradesh", country: "India", lat: 26.7606, lon: 83.3732, timezone: "Asia/Kolkata", tzOffsetHours: 5.5 },
  { id: "aligarh", name: "Aligarh, UP", hindiName: "अलीगढ़, उत्तर प्रदेश", district: "Aligarh", state: "Uttar Pradesh", country: "India", lat: 27.8974, lon: 78.088, timezone: "Asia/Kolkata", tzOffsetHours: 5.5 },
  { id: "jhansi", name: "Jhansi, UP", hindiName: "झांसी, उत्तर प्रदेश", district: "Jhansi", state: "Uttar Pradesh", country: "India", lat: 25.4484, lon: 78.5685, timezone: "Asia/Kolkata", tzOffsetHours: 5.5 },
  { id: "saharanpur", name: "Saharanpur, UP", hindiName: "सहारनपुर, उत्तर प्रदेश", district: "Saharanpur", state: "Uttar Pradesh", country: "India", lat: 29.968, lon: 77.5552, timezone: "Asia/Kolkata", tzOffsetHours: 5.5 },
  { id: "gurugram", name: "Gurugram, Haryana", hindiName: "गुरुग्राम, हरियाणा", district: "Gurugram", state: "Haryana", country: "India", lat: 28.4595, lon: 77.0266, timezone: "Asia/Kolkata", tzOffsetHours: 5.5 },
  { id: "kurukshetra", name: "Kurukshetra, Haryana", hindiName: "कुरुक्षेत्र, हरियाणा", district: "Kurukshetra", state: "Haryana", country: "India", lat: 29.9695, lon: 76.8783, timezone: "Asia/Kolkata", tzOffsetHours: 5.5 },
  { id: "chandigarh", name: "Chandigarh, India", hindiName: "चंडीगढ़, भारत", district: "Chandigarh", state: "Chandigarh", country: "India", lat: 30.7333, lon: 76.7794, timezone: "Asia/Kolkata", tzOffsetHours: 5.5 },
  { id: "amritsar", name: "Amritsar, Punjab", hindiName: "अमृतसर, पंजाब", district: "Amritsar", state: "Punjab", country: "India", lat: 31.634, lon: 74.8723, timezone: "Asia/Kolkata", tzOffsetHours: 5.5 },
  { id: "ludhiana", name: "Ludhiana, Punjab", hindiName: "लुधियाना, पंजाब", district: "Ludhiana", state: "Punjab", country: "India", lat: 30.901, lon: 75.8573, timezone: "Asia/Kolkata", tzOffsetHours: 5.5 },
  { id: "shimla", name: "Shimla, Himachal Pradesh", hindiName: "शिमला, हिमाचल प्रदेश", district: "Shimla", state: "Himachal Pradesh", country: "India", lat: 31.1048, lon: 77.1734, timezone: "Asia/Kolkata", tzOffsetHours: 5.5, elevationMeters: 2206 },
  { id: "dharamshala", name: "Dharamshala, Himachal Pradesh", hindiName: "धर्मशाला, हिमाचल प्रदेश", district: "Kangra", state: "Himachal Pradesh", country: "India", lat: 32.219, lon: 76.3234, timezone: "Asia/Kolkata", tzOffsetHours: 5.5 },
  { id: "jammu", name: "Jammu, Jammu & Kashmir", hindiName: "जम्मू, जम्मू-कश्मीर", district: "Jammu", state: "Jammu and Kashmir", country: "India", lat: 32.7266, lon: 74.857, timezone: "Asia/Kolkata", tzOffsetHours: 5.5 },
  { id: "srinagar", name: "Srinagar, Jammu & Kashmir", hindiName: "श्रीनगर, जम्मू-कश्मीर", district: "Srinagar", state: "Jammu and Kashmir", country: "India", lat: 34.0837, lon: 74.7973, timezone: "Asia/Kolkata", tzOffsetHours: 5.5 },
  { id: "leh", name: "Leh, Ladakh", hindiName: "लेह, लद्दाख", district: "Leh", state: "Ladakh", country: "India", lat: 34.1526, lon: 77.5771, timezone: "Asia/Kolkata", tzOffsetHours: 5.5, elevationMeters: 3500 },
  { id: "jaipur", name: "Jaipur, Rajasthan", hindiName: "जयपुर, राजस्थान", district: "Jaipur", state: "Rajasthan", country: "India", lat: 26.9124, lon: 75.7873, timezone: "Asia/Kolkata", tzOffsetHours: 5.5 },
  { id: "udaipur", name: "Udaipur, Rajasthan", hindiName: "उदयपुर, राजस्थान", district: "Udaipur", state: "Rajasthan", country: "India", lat: 24.5854, lon: 73.7125, timezone: "Asia/Kolkata", tzOffsetHours: 5.5 },
  { id: "jodhpur", name: "Jodhpur, Rajasthan", hindiName: "जोधपुर, राजस्थान", district: "Jodhpur", state: "Rajasthan", country: "India", lat: 26.2389, lon: 73.0243, timezone: "Asia/Kolkata", tzOffsetHours: 5.5 },
  { id: "pushkar", name: "Pushkar / Ajmer, Rajasthan", hindiName: "पुष्कर / अजमेर, राजस्थान", district: "Ajmer", state: "Rajasthan", country: "India", lat: 26.4899, lon: 74.5511, timezone: "Asia/Kolkata", tzOffsetHours: 5.5 },
  { id: "kota", name: "Kota, Rajasthan", hindiName: "कोटा, राजस्थान", district: "Kota", state: "Rajasthan", country: "India", lat: 25.2138, lon: 75.8648, timezone: "Asia/Kolkata", tzOffsetHours: 5.5 },
  { id: "mumbai", name: "Mumbai, Maharashtra", hindiName: "मुंबई, महाराष्ट्र", district: "Mumbai", state: "Maharashtra", country: "India", lat: 19.076, lon: 72.8777, timezone: "Asia/Kolkata", tzOffsetHours: 5.5 },
  { id: "pune", name: "Pune, Maharashtra", hindiName: "पुणे, महाराष्ट्र", district: "Pune", state: "Maharashtra", country: "India", lat: 18.5204, lon: 73.8567, timezone: "Asia/Kolkata", tzOffsetHours: 5.5 },
  { id: "nagpur", name: "Nagpur, Maharashtra", hindiName: "नागपुर, महाराष्ट्र", district: "Nagpur", state: "Maharashtra", country: "India", lat: 21.1458, lon: 79.0882, timezone: "Asia/Kolkata", tzOffsetHours: 5.5 },
  { id: "nashik", name: "Nashik (Trimbakeshwar), Maharashtra", hindiName: "नाशिक (त्र्यंबकेश्वर), महाराष्ट्र", district: "Nashik", state: "Maharashtra", country: "India", lat: 19.9975, lon: 73.7898, timezone: "Asia/Kolkata", tzOffsetHours: 5.5 },
  { id: "shirdi", name: "Shirdi, Ahilyanagar, Maharashtra", hindiName: "शिरडी, महाराष्ट्र", district: "Ahilyanagar", state: "Maharashtra", country: "India", lat: 19.7645, lon: 74.4762, timezone: "Asia/Kolkata", tzOffsetHours: 5.5 },
  { id: "kolhapur", name: "Kolhapur, Maharashtra", hindiName: "कोल्हापुर, महाराष्ट्र", district: "Kolhapur", state: "Maharashtra", country: "India", lat: 16.705, lon: 74.2433, timezone: "Asia/Kolkata", tzOffsetHours: 5.5 },
  { id: "ahmedabad", name: "Ahmedabad, Gujarat", hindiName: "अहमदाबाद, गुजरात", district: "Ahmedabad", state: "Gujarat", country: "India", lat: 23.0225, lon: 72.5714, timezone: "Asia/Kolkata", tzOffsetHours: 5.5 },
  { id: "surat", name: "Surat, Gujarat", hindiName: "सूरत, गुजरात", district: "Surat", state: "Gujarat", country: "India", lat: 21.1702, lon: 72.8311, timezone: "Asia/Kolkata", tzOffsetHours: 5.5 },
  { id: "vadodara", name: "Vadodara, Gujarat", hindiName: "वडोदरा, गुजरात", district: "Vadodara", state: "Gujarat", country: "India", lat: 22.3072, lon: 73.1812, timezone: "Asia/Kolkata", tzOffsetHours: 5.5 },
  { id: "dwarka", name: "Dwarka, Devbhumi Dwarka, Gujarat", hindiName: "श्री द्वारका धाम, गुजरात", district: "Devbhumi Dwarka", state: "Gujarat", country: "India", lat: 22.2442, lon: 68.9685, timezone: "Asia/Kolkata", tzOffsetHours: 5.5 },
  { id: "somnath", name: "Somnath (Veraval), Gujarat", hindiName: "श्री सोमनाथ, गुजरात", district: "Gir Somnath", state: "Gujarat", country: "India", lat: 20.888, lon: 70.4012, timezone: "Asia/Kolkata", tzOffsetHours: 5.5 },
  { id: "indore", name: "Indore, MP", hindiName: "इंदौर, मध्य प्रदेश", district: "Indore", state: "Madhya Pradesh", country: "India", lat: 22.7196, lon: 75.8577, timezone: "Asia/Kolkata", tzOffsetHours: 5.5 },
  { id: "bhopal", name: "Bhopal, MP", hindiName: "भोपाल, मध्य प्रदेश", district: "Bhopal", state: "Madhya Pradesh", country: "India", lat: 23.2599, lon: 77.4126, timezone: "Asia/Kolkata", tzOffsetHours: 5.5 },
  { id: "gwalior", name: "Gwalior, MP", hindiName: "ग्वालियर, मध्य प्रदेश", district: "Gwalior", state: "Madhya Pradesh", country: "India", lat: 26.2183, lon: 78.1828, timezone: "Asia/Kolkata", tzOffsetHours: 5.5 },
  { id: "jabalpur", name: "Jabalpur, MP", hindiName: "जबलपुर, मध्य प्रदेश", district: "Jabalpur", state: "Madhya Pradesh", country: "India", lat: 23.1815, lon: 79.9864, timezone: "Asia/Kolkata", tzOffsetHours: 5.5 },
  { id: "patna", name: "Patna, Bihar", hindiName: "पटना, बिहार", district: "Patna", state: "Bihar", country: "India", lat: 25.5941, lon: 85.1376, timezone: "Asia/Kolkata", tzOffsetHours: 5.5 },
  { id: "gaya", name: "Gaya / Bodh Gaya, Bihar", hindiName: "गया धाम, बिहार", district: "Gaya", state: "Bihar", country: "India", lat: 24.7914, lon: 85.0002, timezone: "Asia/Kolkata", tzOffsetHours: 5.5 },
  { id: "muzaffarpur", name: "Muzaffarpur, Bihar", hindiName: "मुज़फ़्फ़रपुर, बिहार", district: "Muzaffarpur", state: "Bihar", country: "India", lat: 26.1197, lon: 85.391, timezone: "Asia/Kolkata", tzOffsetHours: 5.5 },
  { id: "ranchi", name: "Ranchi, Jharkhand", hindiName: "रांची, झारखंड", district: "Ranchi", state: "Jharkhand", country: "India", lat: 23.3441, lon: 85.3096, timezone: "Asia/Kolkata", tzOffsetHours: 5.5 },
  { id: "deoghar", name: "Deoghar (Baidyanath Dham), Jharkhand", hindiName: "देवघर (वैद्यनाथ धाम), झारखंड", district: "Deoghar", state: "Jharkhand", country: "India", lat: 24.4852, lon: 86.6948, timezone: "Asia/Kolkata", tzOffsetHours: 5.5 },
  { id: "raipur", name: "Raipur, Chhattisgarh", hindiName: "रायपुर, छत्तीसगढ़", district: "Raipur", state: "Chhattisgarh", country: "India", lat: 21.2514, lon: 81.6296, timezone: "Asia/Kolkata", tzOffsetHours: 5.5 },
  { id: "bhubaneswar", name: "Bhubaneswar, Odisha", hindiName: "भुवनेश्वर, ओडिशा", district: "Khordha", state: "Odisha", country: "India", lat: 20.2961, lon: 85.8245, timezone: "Asia/Kolkata", tzOffsetHours: 5.5 },
  { id: "puri", name: "Puri (Jagannath Dham), Odisha", hindiName: "श्री जगन्नाथ पुरी, ओडिशा", district: "Puri", state: "Odisha", country: "India", lat: 19.8135, lon: 85.8312, timezone: "Asia/Kolkata", tzOffsetHours: 5.5 },
  { id: "kolkata", name: "Kolkata, West Bengal", hindiName: "कोलकाता, प. बंगाल", district: "Kolkata", state: "West Bengal", country: "India", lat: 22.5726, lon: 88.3639, timezone: "Asia/Kolkata", tzOffsetHours: 5.5 },
  { id: "siliguri", name: "Siliguri, West Bengal", hindiName: "सिलीगुड़ी, प. बंगाल", district: "Darjeeling", state: "West Bengal", country: "India", lat: 26.7271, lon: 88.3953, timezone: "Asia/Kolkata", tzOffsetHours: 5.5 },
  { id: "bengaluru", name: "Bengaluru, Karnataka", hindiName: "बेंगलुरु, कर्नाटक", district: "Bengaluru Urban", state: "Karnataka", country: "India", lat: 12.9716, lon: 77.5946, timezone: "Asia/Kolkata", tzOffsetHours: 5.5 },
  { id: "mysuru", name: "Mysuru, Karnataka", hindiName: "मैसूरु, कर्नाटक", district: "Mysuru", state: "Karnataka", country: "India", lat: 12.2958, lon: 76.6394, timezone: "Asia/Kolkata", tzOffsetHours: 5.5 },
  { id: "hyderabad", name: "Hyderabad, Telangana", hindiName: "हैदराबाद, तेलंगाना", district: "Hyderabad", state: "Telangana", country: "India", lat: 17.385, lon: 78.4867, timezone: "Asia/Kolkata", tzOffsetHours: 5.5 },
  { id: "vijayawada", name: "Vijayawada, Andhra Pradesh", hindiName: "विजयवाड़ा, आंध्र प्रदेश", district: "NTR", state: "Andhra Pradesh", country: "India", lat: 16.5062, lon: 80.648, timezone: "Asia/Kolkata", tzOffsetHours: 5.5 },
  { id: "tirupati", name: "Tirupati, Andhra Pradesh", hindiName: "तिरुपति बालाजी, आंध्र प्रदेश", district: "Tirupati", state: "Andhra Pradesh", country: "India", lat: 13.6288, lon: 79.4192, timezone: "Asia/Kolkata", tzOffsetHours: 5.5 },
  { id: "chennai", name: "Chennai, Tamil Nadu", hindiName: "चेन्नई, तमिलनाडु", district: "Chennai", state: "Tamil Nadu", country: "India", lat: 13.0827, lon: 80.2707, timezone: "Asia/Kolkata", tzOffsetHours: 5.5 },
  { id: "madurai", name: "Madurai (Meenakshi Temple), Tamil Nadu", hindiName: "मदुरै, तमिलनाडु", district: "Madurai", state: "Tamil Nadu", country: "India", lat: 9.9252, lon: 78.1198, timezone: "Asia/Kolkata", tzOffsetHours: 5.5 },
  { id: "rameswaram", name: "Rameswaram Dham, Tamil Nadu", hindiName: "श्री रामेश्वरम्, तमिलनाडु", district: "Ramanathapuram", state: "Tamil Nadu", country: "India", lat: 9.2876, lon: 79.3129, timezone: "Asia/Kolkata", tzOffsetHours: 5.5 },
  { id: "coimbatore", name: "Coimbatore, Tamil Nadu", hindiName: "कोयंबटूर, तमिलनाडु", district: "Coimbatore", state: "Tamil Nadu", country: "India", lat: 11.0168, lon: 76.9558, timezone: "Asia/Kolkata", tzOffsetHours: 5.5 },
  { id: "kanyakumari", name: "Kanyakumari, Tamil Nadu", hindiName: "कन्याकुमारी, तमिलनाडु", district: "Kanyakumari", state: "Tamil Nadu", country: "India", lat: 8.0883, lon: 77.5385, timezone: "Asia/Kolkata", tzOffsetHours: 5.5 },
  { id: "kochi", name: "Kochi, Kerala", hindiName: "कोच्चि, केरल", district: "Ernakulam", state: "Kerala", country: "India", lat: 9.9312, lon: 76.2673, timezone: "Asia/Kolkata", tzOffsetHours: 5.5 },
  { id: "thiruvananthapuram", name: "Thiruvananthapuram, Kerala", hindiName: "तिरुवनंतपुरम, केरल", district: "Thiruvananthapuram", state: "Kerala", country: "India", lat: 8.5241, lon: 76.9366, timezone: "Asia/Kolkata", tzOffsetHours: 5.5 },
  { id: "guwahati", name: "Guwahati (Kamakhya), Assam", hindiName: "गुवाहाटी, असम", district: "Kamrup Metropolitan", state: "Assam", country: "India", lat: 26.1445, lon: 91.7362, timezone: "Asia/Kolkata", tzOffsetHours: 5.5 },
  { id: "gangtok", name: "Gangtok, Sikkim", hindiName: "गंगटोक, सिक्किम", district: "Gangtok", state: "Sikkim", country: "India", lat: 27.3389, lon: 88.6065, timezone: "Asia/Kolkata", tzOffsetHours: 5.5 },
  { id: "shillong", name: "Shillong, Meghalaya", hindiName: "शिलांग, मेघालय", district: "East Khasi Hills", state: "Meghalaya", country: "India", lat: 25.5788, lon: 91.8933, timezone: "Asia/Kolkata", tzOffsetHours: 5.5 },
  { id: "imphal", name: "Imphal, Manipur", hindiName: "इम्फाल, मणिपुर", district: "Imphal West", state: "Manipur", country: "India", lat: 24.817, lon: 93.9368, timezone: "Asia/Kolkata", tzOffsetHours: 5.5 },
  { id: "agartala", name: "Agartala, Tripura", hindiName: "अगरतला, त्रिपुरा", district: "West Tripura", state: "Tripura", country: "India", lat: 23.8315, lon: 91.2868, timezone: "Asia/Kolkata", tzOffsetHours: 5.5 },
  { id: "panaji", name: "Panaji, Goa", hindiName: "पणजी, गोवा", district: "North Goa", state: "Goa", country: "India", lat: 15.4909, lon: 73.8278, timezone: "Asia/Kolkata", tzOffsetHours: 5.5 },
  { id: "kathmandu", name: "Kathmandu, Nepal", hindiName: "काठमांडू, नेपाल", country: "Nepal", lat: 27.7172, lon: 85.324, timezone: "Asia/Kathmandu", tzOffsetHours: 5.75 },
  { id: "dubai", name: "Dubai, UAE", hindiName: "दुबई, यूएई (UAE)", country: "UAE", lat: 25.2048, lon: 55.2708, timezone: "Asia/Dubai", tzOffsetHours: 4 },
  { id: "london", name: "London, United Kingdom", hindiName: "लंदन, ब्रिटेन (UK)", country: "UK", lat: 51.5074, lon: -0.1278, timezone: "Europe/London", tzOffsetHours: 0 },
  { id: "new_york", name: "New York, USA", hindiName: "न्यूयॉर्क, अमेरिका (USA)", country: "USA", lat: 40.7128, lon: -74.006, timezone: "America/New_York", tzOffsetHours: -5 },
  { id: "san_francisco", name: "San Francisco, USA", hindiName: "सैन फ्रांसिस्को, अमेरिका", country: "USA", lat: 37.7749, lon: -122.4194, timezone: "America/Los_Angeles", tzOffsetHours: -8 },
  { id: "toronto", name: "Toronto, Canada", hindiName: "टोरंटो, कनाडा", country: "Canada", lat: 43.6532, lon: -79.3832, timezone: "America/Toronto", tzOffsetHours: -5 },
  { id: "singapore", name: "Singapore", hindiName: "सिंगापुर (Singapore)", country: "Singapore", lat: 1.3521, lon: 103.8198, timezone: "Asia/Singapore", tzOffsetHours: 8 },
  { id: "sydney", name: "Sydney, Australia", hindiName: "सिडनी, ऑस्ट्रेलिया", country: "Australia", lat: -33.8688, lon: 151.2093, timezone: "Australia/Sydney", tzOffsetHours: 10 },
  { id: "tokyo", name: "Tokyo, Japan", hindiName: "टोक्यो, जापान", country: "Japan", lat: 35.6762, lon: 139.6503, timezone: "Asia/Tokyo", tzOffsetHours: 9 },
  { id: "mauritius", name: "Port Louis, Mauritius", hindiName: "पोर्ट लुइस, मॉरीशस", country: "Mauritius", lat: -20.1609, lon: 57.5012, timezone: "Indian/Mauritius", tzOffsetHours: 4 }
];
const GPS_PLACE_CACHE_KEY = "panditji_gps_place_coords_v1";
const gpsPlaceMemoryCache = /* @__PURE__ */ new Map();
function loadGpsPlaceCache() {
  if (gpsPlaceMemoryCache.size > 0 || typeof window === "undefined") return;
  try {
    const raw = localStorage.getItem(GPS_PLACE_CACHE_KEY);
    if (!raw) return;
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed === "object") {
      Object.entries(parsed).forEach(([k, v]) => {
        if (v && typeof v.lat === "number" && typeof v.lon === "number") {
          gpsPlaceMemoryCache.set(k, {
            ...v,
            timezone: resolveSafeTimezone(v)
          });
        }
      });
    }
  } catch {
  }
}
function cacheGpsPlaceCoordinates(placeLabel, loc) {
  const key = placeLabel.trim().toLowerCase();
  if (!key) return;
  loadGpsPlaceCache();
  gpsPlaceMemoryCache.set(key, { ...loc, timezone: resolveSafeTimezone(loc) });
  if (typeof window !== "undefined") {
    try {
      const obj = {};
      Array.from(gpsPlaceMemoryCache.entries()).slice(-30).forEach(([k, v]) => {
        obj[k] = v;
      });
      localStorage.setItem(GPS_PLACE_CACHE_KEY, JSON.stringify(obj));
    } catch {
    }
  }
}
function resolveCityCoordinates(placeQuery) {
  const q = (placeQuery || "").trim();
  if (!q) return DEFAULT_RUDRAPUR_LOCATION;
  const lower = q.toLowerCase();
  loadGpsPlaceCache();
  const cachedGps = gpsPlaceMemoryCache.get(lower);
  if (cachedGps) {
    return { ...cachedGps, timezone: resolveSafeTimezone(cachedGps) };
  }
  const coordMatch = q.match(
    /(-?\d+(?:\.\d+)?)\s*°?\s*([NSns])?\s*,\s*(-?\d+(?:\.\d+)?)\s*°?\s*([EWew])?/
  );
  if (coordMatch) {
    let parsedLat = parseFloat(coordMatch[1]);
    let parsedLon = parseFloat(coordMatch[3]);
    if (coordMatch[2] && coordMatch[2].toUpperCase() === "S") parsedLat = -Math.abs(parsedLat);
    if (coordMatch[4] && coordMatch[4].toUpperCase() === "W") parsedLon = -Math.abs(parsedLon);
    if (Number.isFinite(parsedLat) && Number.isFinite(parsedLon) && Math.abs(parsedLat) <= 90 && Math.abs(parsedLon) <= 180) {
      const isIndia = parsedLat >= 6 && parsedLat <= 38 && parsedLon >= 68 && parsedLon <= 98;
      const resolvedOffset = isIndia ? 5.5 : -(/* @__PURE__ */ new Date()).getTimezoneOffset() / 60;
      const browserTz = typeof Intl !== "undefined" ? Intl.DateTimeFormat().resolvedOptions().timeZone : "UTC";
      return {
        id: `gps_${parsedLat.toFixed(4)}_${parsedLon.toFixed(4)}`,
        name: q,
        hindiName: q,
        country: isIndia ? "India" : "Global",
        lat: Number(parsedLat.toFixed(4)),
        lon: Number(parsedLon.toFixed(4)),
        timezone: isIndia ? "Asia/Kolkata" : browserTz || "UTC",
        tzOffsetHours: resolvedOffset
      };
    }
  }
  for (const city of WORLDWIDE_PANCHANG_CITIES) {
    const tokens = [
      city.id,
      city.name.toLowerCase(),
      city.hindiName.toLowerCase(),
      city.name.split(",")[0].trim().toLowerCase(),
      city.hindiName.split(",")[0].trim().toLowerCase()
    ];
    if (tokens.some((t) => t && (lower.includes(t) || t.includes(lower)))) {
      return city;
    }
  }
  if (lower.includes("दिल्ली") || lower.includes("delhi")) {
    return WORLDWIDE_PANCHANG_CITIES.find((c) => c.id === "delhi") || DEFAULT_RUDRAPUR_LOCATION;
  }
  if (lower.includes("कनखल") || lower.includes("kankhal")) {
    return WORLDWIDE_PANCHANG_CITIES.find((c) => c.id === "haridwar") || DEFAULT_RUDRAPUR_LOCATION;
  }
  if (lower.includes("आवास विकास") || lower.includes("किच्छा") || lower.includes("kichha") || lower.includes("pantnagar") || lower.includes("पंतनगर")) {
    return DEFAULT_RUDRAPUR_LOCATION;
  }
  const offlineDistrict = resolveOfflineIndianDistrict(q);
  if (offlineDistrict) {
    return offlineDistrict;
  }
  return {
    ...DEFAULT_RUDRAPUR_LOCATION,
    id: "custom_unresolved",
    name: q,
    hindiName: q
  };
}
function resolveCityCoordinatesStrict(placeQuery) {
  const q = (placeQuery || "").trim();
  if (!q) return null;
  const resolved = resolveCityCoordinates(q);
  return resolved.id === "custom_unresolved" ? null : resolved;
}
const CUSTOM_PANCHANG_LOC_KEY = "panditji_panchang_custom_location_v1";
const PANCHANG_LOCATION_STATE_KEY = "panditji_panchang_location_state_v2";
let _memoryLocationState = null;
const POPULAR_PANCHANG_CITY_IDS = [
  "rudrapur",
  "delhi",
  "varanasi",
  "ayodhya",
  "lucknow",
  "haridwar",
  "jaipur",
  "patna",
  "mumbai",
  "ujjain",
  "madurai"
];
function getProfileBirthPlaceLocation() {
  try {
    const activeAccRaw = localStorage.getItem("panditji_active_user_account");
    if (activeAccRaw && activeAccRaw !== "null" && activeAccRaw !== "undefined") {
      const acc = JSON.parse(activeAccRaw);
      if (acc && acc.birthPlace && String(acc.birthPlace).trim()) {
        const resolved = resolveCityCoordinates(String(acc.birthPlace).trim());
        return resolved.id === "custom_unresolved" ? null : resolved;
      }
    }
    const activeProfRaw = localStorage.getItem("activeYajmanProfile");
    if (activeProfRaw && activeProfRaw !== "null" && activeProfRaw !== "undefined") {
      const prof = JSON.parse(activeProfRaw);
      if (prof && prof.birthPlace && String(prof.birthPlace).trim()) {
        const resolved = resolveCityCoordinates(String(prof.birthPlace).trim());
        return resolved.id === "custom_unresolved" ? null : resolved;
      }
    }
  } catch {
  }
  return null;
}
function resolveNearestGpsLocation(lat, lon) {
  const toRad = (deg) => deg * Math.PI / 180;
  let closest = null;
  let minKm = Infinity;
  for (const city of WORLDWIDE_PANCHANG_CITIES) {
    const dLat = toRad(city.lat - lat);
    const dLon = toRad(city.lon - lon);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(toRad(lat)) * Math.cos(toRad(city.lat)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const km = 6371 * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    if (km < minKm) {
      minKm = km;
      closest = city;
    }
  }
  const nearestDistrict = findNearestOfflineIndianDistrict(lat, lon);
  if (nearestDistrict && (!closest || nearestDistrict.distanceKm < minKm)) {
    closest = nearestDistrict.location;
    minKm = nearestDistrict.distanceKm;
  }
  if (closest && minKm <= 35) {
    return {
      ...closest,
      lat: Number(lat.toFixed(4)),
      lon: Number(lon.toFixed(4)),
      source: "gps"
    };
  }
  const isLikelyIndia = lat >= 6 && lat <= 38 && lon >= 68 && lon <= 98;
  const approxOffset = isLikelyIndia ? 5.5 : -(/* @__PURE__ */ new Date()).getTimezoneOffset() / 60;
  const browserTz = typeof Intl !== "undefined" ? Intl.DateTimeFormat().resolvedOptions().timeZone : "UTC";
  return {
    id: `gps_${lat.toFixed(4)}_${lon.toFixed(4)}`,
    name: `GPS Location (${lat.toFixed(4)}°N, ${lon.toFixed(4)}°E)`,
    hindiName: closest && minKm <= 160 ? `${closest.hindiName.split(",")[0]} क्षेत्र (${lat.toFixed(4)}°, ${lon.toFixed(4)}°)` : `मेरा वर्तमान स्थान (${lat.toFixed(4)}°, ${lon.toFixed(4)}°)`,
    state: closest && minKm <= 160 ? closest.state : void 0,
    district: closest && minKm <= 160 ? closest.district : void 0,
    country: isLikelyIndia ? "India" : "Global",
    lat: Number(lat.toFixed(4)),
    lon: Number(lon.toFixed(4)),
    timezone: isLikelyIndia ? "Asia/Kolkata" : closest?.timezone || browserTz || "UTC",
    tzOffsetHours: approxOffset,
    source: "gps"
  };
}
function inferTimezoneFromCoordsFallback(lat, lon, countryCode) {
  const cc = (countryCode || "").toLowerCase();
  if (cc === "in" || lat >= 6 && lat <= 38 && lon >= 68 && lon <= 97.5) {
    return { timezone: "Asia/Kolkata", tzOffsetHours: 5.5 };
  }
  if (cc === "np") return { timezone: "Asia/Kathmandu", tzOffsetHours: 5.75 };
  if (cc === "ae") return { timezone: "Asia/Dubai", tzOffsetHours: 4 };
  if (cc === "gb") return { timezone: "Europe/London", tzOffsetHours: 0 };
  if (cc === "sg") return { timezone: "Asia/Singapore", tzOffsetHours: 8 };
  if (cc === "jp") return { timezone: "Asia/Tokyo", tzOffsetHours: 9 };
  const nearest = resolveNearestGpsLocation(lat, lon);
  return { timezone: resolveSafeTimezone(nearest), tzOffsetHours: nearest.tzOffsetHours };
}
function mapNominatimItemToPanchangLocation(item, source = "manual") {
  const lat = parseFloat(String(item?.lat ?? ""));
  const lon = parseFloat(String(item?.lon ?? ""));
  if (!Number.isFinite(lat) || !Number.isFinite(lon)) return null;
  const addr = item?.address || {};
  const placeName = (addr.city || addr.town || addr.village || addr.hamlet || addr.suburb || addr.municipality || addr.amenity || item?.name || String(item?.display_name || "").split(",")[0] || "स्थान").trim();
  const districtRaw = (addr.state_district || addr.county || addr.city_district || "").trim();
  const district = districtRaw && districtRaw !== placeName ? districtRaw : void 0;
  const state = (addr.state || "").trim() || void 0;
  const country = (addr.country || (addr.country_code === "in" ? "India" : "Global")).trim();
  const postalCode = (addr.postcode || "").trim() || void 0;
  const tzInfo = inferTimezoneFromCoordsFallback(lat, lon, addr.country_code);
  const fullParts = [placeName, district, state, country].filter(Boolean);
  const shortParts = [placeName, state || district || country].filter(Boolean);
  return {
    id: `geo_${lat.toFixed(4)}_${lon.toFixed(4)}`,
    name: fullParts.join(", "),
    hindiName: shortParts.join(", "),
    district,
    state,
    postalCode,
    country,
    lat: Number(lat.toFixed(4)),
    lon: Number(lon.toFixed(4)),
    timezone: tzInfo.timezone,
    tzOffsetHours: tzInfo.tzOffsetHours,
    source
  };
}
async function searchLocationsAllIndia(query, signal) {
  const q = query.trim();
  if (!q) return WORLDWIDE_PANCHANG_CITIES.slice(0, 10);
  const lower = q.toLowerCase();
  const localMatches = WORLDWIDE_PANCHANG_CITIES.filter(
    (c) => c.name.toLowerCase().includes(lower) || c.hindiName.toLowerCase().includes(lower) || c.district && c.district.toLowerCase().includes(lower) || c.state && c.state.toLowerCase().includes(lower) || c.country.toLowerCase().includes(lower) || c.id.includes(lower)
  ).slice(0, 8);
  if (q.length < 2) return localMatches;
  const results = [];
  const normalizeBaseName = (name) => name.split(",")[0].replace(/\s*\([^)]*\)/g, "").trim().toLowerCase();
  const pushUnique = (loc) => {
    const isDup = results.some(
      (existing) => existing.id === loc.id || Math.abs(existing.lat - loc.lat) < 0.03 && Math.abs(existing.lon - loc.lon) < 0.03 && normalizeBaseName(existing.name) === normalizeBaseName(loc.name)
    );
    if (!isDup) results.push(loc);
  };
  let fetchedRemote = false;
  if (typeof fetch === "function") {
    const controller = !signal && typeof AbortController !== "undefined" ? new AbortController() : null;
    const timer = controller && typeof window !== "undefined" ? window.setTimeout(() => controller.abort(), 5500) : null;
    try {
      const resp = await fetch(`/api/geocode?q=${encodeURIComponent(q)}`, {
        signal: signal || controller?.signal
      });
      if (resp.ok) {
        const data = await resp.json();
        if (Array.isArray(data?.results)) {
          fetchedRemote = true;
          for (const item of data.results) {
            if (item && Number.isFinite(item.lat) && Number.isFinite(item.lon)) {
              pushUnique({
                ...item,
                timezone: resolveSafeTimezone(item),
                source: "manual"
              });
            }
          }
        }
      }
    } catch {
    } finally {
      if (timer !== null && typeof window !== "undefined") window.clearTimeout(timer);
    }
  }
  if (!fetchedRemote && !signal?.aborted && typeof fetch === "function") {
    const controller = typeof AbortController !== "undefined" ? new AbortController() : null;
    const timer = controller && typeof window !== "undefined" ? window.setTimeout(() => controller.abort(), 5e3) : null;
    try {
      const isPin = /^\d{6}$/.test(q);
      const nomUrl = isPin ? `https://nominatim.openstreetmap.org/search?format=jsonv2&addressdetails=1&limit=8&countrycodes=in&postalcode=${encodeURIComponent(q)}` : `https://nominatim.openstreetmap.org/search?format=jsonv2&addressdetails=1&limit=8&accept-language=en,hi&q=${encodeURIComponent(q)}`;
      const resp = await fetch(nomUrl, { signal: signal || controller?.signal });
      if (resp.ok) {
        const rows = await resp.json();
        if (Array.isArray(rows)) {
          for (const r of rows) {
            const mapped = mapNominatimItemToPanchangLocation(r, "manual");
            if (mapped) pushUnique(mapped);
          }
        }
      }
    } catch {
    } finally {
      if (timer !== null && typeof window !== "undefined") window.clearTimeout(timer);
    }
  }
  for (const lm of localMatches) {
    pushUnique({ ...lm, source: lm.id === DEFAULT_RUDRAPUR_LOCATION.id ? "default" : "manual" });
  }
  const offlineDistrictMatches = searchOfflineIndianDistricts(q, 10);
  for (const dm of offlineDistrictMatches) {
    pushUnique(dm);
  }
  return results.slice(0, 14);
}
async function detectCurrentBirthPlaceViaGps() {
  if (typeof navigator === "undefined" || !navigator.geolocation) {
    throw new Error("इस ब्राउज़र में GPS लोकेशन उपलब्ध नहीं है — कृपया शहर या गाँव का नाम खोजकर चुनें।");
  }
  const getPosition = (highAccuracy, timeoutMs) => new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, {
      enableHighAccuracy: highAccuracy,
      timeout: timeoutMs,
      maximumAge: 12e4
    });
  });
  let pos;
  try {
    pos = await getPosition(true, 9e3);
  } catch (err) {
    const geoErr = err;
    if (geoErr && geoErr.code === 1) {
      throw new Error("लोकेशन की अनुमति नहीं मिली। कृपया ब्राउज़र में Location Allow करें या स्थान खोजें।");
    }
    try {
      pos = await getPosition(false, 7500);
    } catch (retryErr) {
      const rErr = retryErr;
      if (rErr && rErr.code === 1) {
        throw new Error("लोकेशन की अनुमति नहीं मिली। कृपया ब्राउज़र में Location Allow करें या स्थान खोजें।");
      }
      if (rErr && rErr.code === 3) {
        throw new Error("GPS लोकेशन समय-सीमा (Timeout) समाप्त हो गई — कृपया पुनः प्रयास करें या स्थान टाइप करें।");
      }
      throw new Error("GPS सिग्नल उपलब्ध नहीं है — कृपया मोबाइल Location ऑन करें या स्थान टाइप करें।");
    }
  }
  const lat = Number(pos.coords.latitude.toFixed(4));
  const lon = Number(pos.coords.longitude.toFixed(4));
  const accuracyMeters = Number.isFinite(pos.coords.accuracy) ? Math.round(pos.coords.accuracy) : void 0;
  const gpsAltitudeMeters = typeof pos.coords.altitude === "number" && Number.isFinite(pos.coords.altitude) && pos.coords.altitude >= 0 && pos.coords.altitude <= 8900 ? Math.round(pos.coords.altitude) : void 0;
  const fallbackLoc = {
    ...resolveNearestGpsLocation(lat, lon),
    ...gpsAltitudeMeters !== void 0 ? { elevationMeters: gpsAltitudeMeters } : {},
    accuracyMeters,
    source: "gps"
  };
  let finalPlaceName = fallbackLoc.hindiName;
  let finalLocation = fallbackLoc;
  let resolvedViaProxy = false;
  if (typeof fetch === "function") {
    const controller = typeof AbortController !== "undefined" ? new AbortController() : null;
    const timer = controller && typeof window !== "undefined" ? window.setTimeout(() => controller.abort(), 4500) : null;
    try {
      const proxyResp = await fetch(`/api/reverse-geocode?lat=${lat}&lon=${lon}`, {
        signal: controller?.signal
      });
      if (proxyResp.ok) {
        const payload = await proxyResp.json();
        if (payload?.candidate && payload.candidate.name) {
          resolvedViaProxy = true;
          finalPlaceName = payload.candidate.hindiName || payload.candidate.name;
          finalLocation = {
            ...payload.candidate,
            lat,
            lon,
            elevationMeters: gpsAltitudeMeters !== void 0 ? gpsAltitudeMeters : payload.candidate.elevationMeters,
            timezone: resolveSafeTimezone(payload.candidate),
            source: "gps",
            accuracyMeters
          };
        }
      }
    } catch {
    } finally {
      if (timer !== null && typeof window !== "undefined") window.clearTimeout(timer);
    }
  }
  if (!resolvedViaProxy && typeof fetch === "function") {
    const controller = typeof AbortController !== "undefined" ? new AbortController() : null;
    const timer = controller && typeof window !== "undefined" ? window.setTimeout(() => controller.abort(), 3600) : null;
    try {
      const resp = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&addressdetails=1&lat=${lat}&lon=${lon}&accept-language=en,hi`,
        { signal: controller?.signal }
      );
      if (resp.ok) {
        const data = await resp.json();
        const mapped = mapNominatimItemToPanchangLocation({ ...data, lat, lon }, "gps");
        if (mapped) {
          finalPlaceName = mapped.hindiName;
          finalLocation = {
            ...mapped,
            ...gpsAltitudeMeters !== void 0 ? { elevationMeters: gpsAltitudeMeters } : {},
            accuracyMeters,
            source: "gps"
          };
        }
      }
    } catch {
    } finally {
      if (timer !== null && typeof window !== "undefined") window.clearTimeout(timer);
    }
  }
  cacheGpsPlaceCoordinates(finalPlaceName, finalLocation);
  return {
    placeName: finalPlaceName,
    location: finalLocation,
    lat,
    lon,
    accuracyMeters
  };
}
const detectCurrentPanchangGpsLocation = detectCurrentBirthPlaceViaGps;
function normalizeStoredLocationState(rawObj) {
  if (!rawObj || typeof rawObj !== "object") return null;
  const loc = rawObj.location || rawObj;
  if (!loc || typeof loc.lat !== "number" || typeof loc.lon !== "number") return null;
  const source = rawObj.source === "gps" || rawObj.source === "manual" || rawObj.source === "default" ? rawObj.source : loc.id === DEFAULT_RUDRAPUR_LOCATION.id ? "default" : "manual";
  const normalizedLoc = {
    ...loc,
    timezone: resolveSafeTimezone(loc),
    source
  };
  return {
    location: normalizedLoc,
    source,
    rememberLocation: rawObj.rememberLocation !== false,
    updatedAt: typeof rawObj.updatedAt === "number" ? rawObj.updatedAt : Date.now(),
    accuracyMeters: typeof rawObj.accuracyMeters === "number" ? rawObj.accuracyMeters : normalizedLoc.accuracyMeters
  };
}
function getActivePanchangLocationState() {
  if (_memoryLocationState) {
    return _memoryLocationState;
  }
  if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
    try {
      const stateRaw = localStorage.getItem(PANCHANG_LOCATION_STATE_KEY);
      if (stateRaw && stateRaw !== "null" && stateRaw !== "undefined") {
        const parsed = normalizeStoredLocationState(JSON.parse(stateRaw));
        if (parsed && parsed.rememberLocation) {
          _memoryLocationState = parsed;
          return parsed;
        }
      }
      const legacyRaw = localStorage.getItem(CUSTOM_PANCHANG_LOC_KEY);
      if (legacyRaw && legacyRaw !== "null" && legacyRaw !== "undefined") {
        const parsedLegacy = normalizeStoredLocationState(JSON.parse(legacyRaw));
        if (parsedLegacy) {
          _memoryLocationState = parsedLegacy;
          return parsedLegacy;
        }
      }
    } catch {
    }
  }
  return {
    location: DEFAULT_RUDRAPUR_LOCATION,
    source: "default",
    rememberLocation: true,
    updatedAt: 0
  };
}
function getActivePanchangLocation() {
  return getActivePanchangLocationState().location;
}
function clearAllPanchangCalculationCaches() {
  _dailyRecordCache.clear();
  _singleDayPanchangCache.clear();
  _monthlyPanchangCache.clear();
}
function setActivePanchangLocation(loc, explicitSource, options) {
  const prevState = getActivePanchangLocationState();
  if (loc && (loc.id === "custom_unresolved" || !Number.isFinite(loc.lat) || !Number.isFinite(loc.lon))) {
    return prevState;
  }
  const rememberLocation = typeof options?.rememberLocation === "boolean" ? options.rememberLocation : prevState.rememberLocation;
  const isDefault = !loc || loc.id === DEFAULT_RUDRAPUR_LOCATION.id;
  const source = isDefault ? "default" : explicitSource || loc?.source || (loc?.id?.startsWith("gps_") ? "gps" : "manual");
  const resolvedLoc = isDefault ? { ...DEFAULT_RUDRAPUR_LOCATION, source: "default" } : {
    ...loc,
    timezone: resolveSafeTimezone(loc),
    source,
    accuracyMeters: options?.accuracyMeters ?? loc?.accuracyMeters
  };
  const nextState = {
    location: resolvedLoc,
    source,
    rememberLocation,
    updatedAt: Date.now(),
    accuracyMeters: resolvedLoc.accuracyMeters
  };
  _memoryLocationState = nextState;
  clearAllPanchangCalculationCaches();
  if (typeof window !== "undefined") {
    try {
      if (isDefault || !rememberLocation) {
        localStorage.removeItem(CUSTOM_PANCHANG_LOC_KEY);
        localStorage.removeItem(PANCHANG_LOCATION_STATE_KEY);
      } else {
        localStorage.setItem(PANCHANG_LOCATION_STATE_KEY, JSON.stringify(nextState));
        localStorage.setItem(CUSTOM_PANCHANG_LOC_KEY, JSON.stringify(resolvedLoc));
      }
      window.dispatchEvent(
        new CustomEvent("panditji_panchang_location_changed", {
          detail: nextState
        })
      );
    } catch {
    }
  }
  return nextState;
}
function setRememberPanchangLocation(remember) {
  const current = getActivePanchangLocationState();
  return setActivePanchangLocation(
    current.source === "default" ? null : current.location,
    current.source,
    { rememberLocation: remember, accuracyMeters: current.accuracyMeters }
  );
}
function resetPanchangLocationToRudrapur() {
  return setActivePanchangLocation(null, "default");
}
function getISTCalendarParts(now = /* @__PURE__ */ new Date()) {
  const parts = getLocalDateParts(now, "Asia/Kolkata");
  return {
    year: parts.year,
    month: parts.month,
    day: parts.day,
    weekdayIndex: parts.weekdayIndex,
    hours: parts.hours,
    minutes: parts.minutes,
    seconds: parts.seconds,
    dateKey: parts.dateKey,
    timeString12h: parts.timeString12h
  };
}
function getMsUntilNextISTMidnight(now = /* @__PURE__ */ new Date()) {
  return getMsUntilNextZoneMidnight(now, "Asia/Kolkata");
}
function getJulianDay(year, month, day, hour = 0, minute = 0, second = 0) {
  return epochMsToJD(Date.UTC(year, month - 1, day, hour, minute, second));
}
function getSiderealMoonLongitude(jd, _lat = 28.98, _lon = 79.4) {
  return getSiderealMoonLonDeg(jdToEpochMs(jd), "LAHIRI");
}
const VAAR_META = {
  0: {
    dishaShool: "पश्चिम दिशा",
    dishaShoolRemedy: "दलिया या घी-गुड़ खाकर एवं सूर्य देव को प्रणाम कर यात्रा करें।",
    deity: "भगवान सूर्य नारायण",
    mantra: "ॐ घृणि सूर्याय नमः॥ जपाकुसुमसंकाशं काश्यपेयं महाद्युतिम्। तमोऽरिं सर्वपापघ्नं प्रणतोऽस्मि दिवाकरम्॥",
    mantraMeaning: "गुड़हल के पुष्प के समान अरुण आभा वाले, महर्षि कश्यप के पुत्र, अन्धकार व समस्त पापों का नाश करने वाले भगवान सूर्य नारायण को मैं प्रणाम करता हूँ।"
  },
  1: {
    dishaShool: "पूर्व दिशा",
    dishaShoolRemedy: "दर्पण देखकर या दूध पीकर महादेव का स्मरण कर प्रस्थान करें।",
    deity: "देवाधिदेव महादेव शिव शंकर",
    mantra: "ॐ नमः शिवाय॥ कर्पूरगौरं करुणावतारं संसारसारं भुजगेन्द्रहारम्। सदावसन्तं हृदयारविन्दे भवं भवानीसहितं नमामि॥",
    mantraMeaning: "कर्पूर के समान गौर वर्ण वाले, करुणा के अवतार एवं माता भवानी सहित भगवान शिव को मैं नमन करता हूँ।"
  },
  2: {
    dishaShool: "उत्तर दिशा",
    dishaShoolRemedy: "गुड़ खाकर एवं श्री हनुमान जी का स्मरण कर प्रस्थान करें।",
    deity: "संकटमोचन श्री हनुमान जी एवं मंगल देव",
    mantra: "ॐ हं हनुमते रुद्रात्मकाय हुं फट्॥ मनोजवं मारुततुल्यवेगं जितेन्द्रियं बुद्धिमतां वरिष्ठम्॥",
    mantraMeaning: "मन के समान तीव्र गति वाले जितेन्द्रिय श्रीरामदूत हनुमान जी की मैं शरण लेता हूँ।"
  },
  3: {
    dishaShool: "उत्तर दिशा",
    dishaShoolRemedy: "तिल व हरा धनिया खाकर श्री गणेश जी को प्रणाम कर निकलें।",
    deity: "प्रथम पूज्य श्री गणेश जी एवं भगवान विट्ठल",
    mantra: "ॐ गं गणपतये नमः॥ वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ। निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥",
    mantraMeaning: "हे भगवान श्री गणेश! मेरे समस्त शुभ कार्यों को सदा निर्विघ्न पूर्ण करें।"
  },
  4: {
    dishaShool: "दक्षिण दिशा",
    dishaShoolRemedy: "दही या जीरा खाकर भगवान श्री हरि विष्णु को प्रणाम कर निकलें।",
    deity: "भगवान श्री हरि विष्णु एवं बृहस्पति देव",
    mantra: "ॐ नमो भगवते वासुदेवाय॥ शान्ताकारं भुजगशयनं पद्मनाभं सुरेशम्॥",
    mantraMeaning: "शेषनाग पर शयन करने वाले लक्ष्मीपति भगवान श्री हरि विष्णु की मैं वंदना करता हूँ।"
  },
  5: {
    dishaShool: "पश्चिम दिशा",
    dishaShoolRemedy: "जौ या मीठा दही खाकर माँ महालक्ष्मी का ध्यान कर प्रस्थान करें।",
    deity: "माँ महालक्ष्मी एवं संतोषी माता",
    mantra: "ॐ श्रीं ह्रीं श्रीं महालक्ष्म्यै नमः॥ सर्वमङ्गलमाङ्गल्ये शिवे सर्वार्थसाधिके॥",
    mantraMeaning: "समस्त मंगल व मनोरथ सिद्ध करने वाली भगवती महालक्ष्मी को सादर नमन है।"
  },
  6: {
    dishaShool: "पूर्व दिशा",
    dishaShoolRemedy: "अदरक या उड़द खाकर श्री शनि देव व हनुमान जी का स्मरण कर निकलें।",
    deity: "न्याय के देवता श्री शनि देव एवं बजरंगबली",
    mantra: "ॐ प्रां प्रीं प्रौं सः शनैश्चराय नमः॥ नीलांजन समाभासं रविपुत्रं यमाग्रजम्॥",
    mantraMeaning: "सूर्यपुत्र व कर्मफलदाता श्री शनिदेव को मैं प्रणाम करता हूँ।"
  }
};
const MONTHLY_PANCHANG_LRU_LIMIT = 24;
const _dailyRecordCache = /* @__PURE__ */ new Map();
const _singleDayPanchangCache = /* @__PURE__ */ new Map();
const _monthlyPanchangCache = /* @__PURE__ */ new Map();
function getMonthlyCacheLRU(key) {
  const hit = _monthlyPanchangCache.get(key);
  if (!hit) return void 0;
  _monthlyPanchangCache.delete(key);
  _monthlyPanchangCache.set(key, hit);
  return hit;
}
function setMonthlyCacheLRU(key, summary) {
  if (_monthlyPanchangCache.has(key)) {
    _monthlyPanchangCache.delete(key);
  } else if (_monthlyPanchangCache.size >= MONTHLY_PANCHANG_LRU_LIMIT) {
    const oldestKey = _monthlyPanchangCache.keys().next().value;
    if (oldestKey !== void 0) {
      _monthlyPanchangCache.delete(oldestKey);
    }
  }
  _monthlyPanchangCache.set(key, summary);
}
function clampPanchangYear(rawYear) {
  if (!Number.isFinite(rawYear)) return 2026;
  const floored = Math.floor(rawYear);
  return Math.max(MIN_PANCHANG_YEAR, Math.min(MAX_PANCHANG_YEAR, floored));
}
function buildDailyRecordWithTimings(year, month, day, location, config) {
  const timeZone = resolveSafeTimezone(location);
  const dateKey = formatDateKey(year, month, day);
  const elev = Math.round(location.elevationMeters ?? (location.id === "rudrapur" ? 214 : 100));
  const nodeMode = config.nodeMode || "TRUE";
  const obsProfileKey = getObservanceProfileKey(
    {
      tradition: config.tradition,
      sampradaya: config.sampradaya
    },
    location
  );
  const cacheKey = `${dateKey}_${location.lat.toFixed(4)}_${location.lon.toFixed(4)}_${elev}_${timeZone}_${config.ayanamsha}_${nodeMode}_${obsProfileKey}_v116`;
  const existing = _dailyRecordCache.get(cacheKey);
  if (existing) return existing;
  const timings = calculateDayAstronomicalTimings(year, month, day, location);
  const kaalWindows = computeDayKaalWindows(timings, location);
  const { tithiIntervals, kshayaTithis } = buildTithiIntervalsForDay(timings, dateKey, timeZone);
  const udayaTithi = tithiIntervals[0];
  const vriddhiTithi = detectVriddhiTithi(year, month, day, location, udayaTithi);
  if (vriddhiTithi.isVriddhi) {
    udayaTithi.isVriddhi = true;
  }
  const { nakshatraIntervals, yogaIntervals, karanaIntervals, chandraRashiIntervals } = buildAngaIntervalsForDay(timings, dateKey, timeZone, config);
  const ayanamshaDegAtSunrise = getAyanamshaDeg(timings.sunriseTimestamp, config.ayanamsha);
  const sunSiderealDegAtSunrise = getSiderealSunLonDeg(timings.sunriseTimestamp, config.ayanamsha);
  const moonSiderealDegAtSunrise = getSiderealMoonLonDeg(timings.sunriseTimestamp, config.ayanamsha);
  const lunarMasa = resolveLunarMasaInfo(
    timings.sunriseTimestamp,
    year,
    udayaTithi.tithiIndex,
    config.tradition,
    config.ayanamsha,
    month
  );
  const prevCivil = shiftCivilDate(year, month, day, -1);
  const prevTimings = calculateDayAstronomicalTimings(
    prevCivil.year,
    prevCivil.month,
    prevCivil.day,
    location
  );
  const solarIngressesOnDay = findSolarIngressesObservedOnDay(
    timings,
    prevTimings.sunsetTimestamp,
    dateKey,
    location,
    config.ayanamsha
  );
  const record = {
    dateKey,
    location: { ...location, timezone: timeZone },
    config: { ...config, nodeMode },
    sunriseTimestamp: timings.sunriseTimestamp,
    sunsetTimestamp: timings.sunsetTimestamp,
    nextSunriseTimestamp: timings.nextSunriseTimestamp,
    moonriseTimestamp: timings.moonriseTimestamp,
    moonsetTimestamp: timings.moonsetTimestamp,
    nightDurationHours: timings.nightDurationHours,
    kaalWindows,
    udayaTithi,
    tithiIntervals,
    kshayaTithis,
    vriddhiTithi,
    nakshatraIntervals,
    yogaIntervals,
    karanaIntervals,
    chandraRashiIntervals,
    sunSiderealDegAtSunrise,
    moonSiderealDegAtSunrise,
    ayanamshaDegAtSunrise,
    lunarMasa,
    solarIngressesOnDay
  };
  if (_dailyRecordCache.size > 12e3) _dailyRecordCache.clear();
  const entry = { record, timings };
  _dailyRecordCache.set(cacheKey, entry);
  return entry;
}
function assembleCalendarDayFromRecord(year, month, day, isCurrentMonth, isToday, record, timings, occurrences) {
  const timeZone = resolveSafeTimezone(record.location);
  const {
    sunriseTimestamp,
    sunsetTimestamp,
    nextSunriseTimestamp,
    udayaTithi,
    tithiIntervals,
    kshayaTithis,
    vriddhiTithi,
    nakshatraIntervals,
    yogaIntervals,
    karanaIntervals,
    chandraRashiIntervals,
    lunarMasa,
    solarIngressesOnDay,
    dateKey
  } = record;
  const dateObj = new Date(getLocalMidnightUtcMs(year, month, day, timeZone) + 6.5 * 36e5);
  const localNoonParts = getLocalDateParts(sunriseTimestamp + 36e5, timeZone);
  const weekdayIndex = localNoonParts.weekdayIndex;
  const vaarInfo = VAAR_LIST[weekdayIndex] || VAAR_LIST[0];
  const vaarMeta = VAAR_META[weekdayIndex] || VAAR_META[0];
  const cleanTime = (formatted) => {
    const norm = formatted.replace(/^(.+?)\s*(?:,\s*|\s*\()सूर्योदय\s*पूर्व\)?/u, (_m, p1) => {
      const c = p1.trim();
      return c.startsWith("अगले दिन") ? c : `अगले दिन ${c}`;
    }).replace(/(?:अगले\s+दिन\s+)+/gu, "अगले दिन ").trim();
    return norm.endsWith("तक") ? norm : `${norm} तक`;
  };
  const baseTithiName = udayaTithi.nameHi;
  const nextTiv = tithiIntervals[1];
  const nextTithiFullLabel = udayaTithi.tithiIndex === 15 ? "कृष्ण पक्ष की प्रतिपदा" : udayaTithi.tithiIndex === 30 ? "शुक्ल पक्ष की प्रतिपदा" : nextTiv?.nameHi || getBaseTithiNameByIndex(udayaTithi.tithiIndex + 1);
  const formatRelativeEnd = (_prevEndMs, curEndMs) => {
    return cleanTime(formatEpochInZoneHi(curEndMs, timeZone, dateKey, true));
  };
  let tithiEndTimeStr;
  if (udayaTithi.endTimestamp >= nextSunriseTimestamp) {
    const vriddhiEndClean = cleanTime(udayaTithi.endFormattedHi);
    const vriddhiWithPrefix = vriddhiEndClean.startsWith("अगले दिन") ? vriddhiEndClean : `अगले दिन ${vriddhiEndClean}`;
    tithiEndTimeStr = `वृद्धि तिथि — ${vriddhiWithPrefix}, तत्पश्चात ${nextTithiFullLabel}`.replace(
      /(?:अगले\s+दिन\s+)+/gu,
      "अगले दिन "
    );
  } else if (kshayaTithis.hasKshaya && tithiIntervals[2]) {
    tithiEndTimeStr = `${cleanTime(udayaTithi.endFormattedHi)}, फिर ${nextTithiFullLabel} — क्षय तिथि ${formatRelativeEnd(udayaTithi.endTimestamp, tithiIntervals[1].endTimestamp)}, तत्पश्चात ${tithiIntervals[2].nameHi}`;
  } else {
    tithiEndTimeStr = `${cleanTime(udayaTithi.endFormattedHi)}, फिर ${nextTithiFullLabel}`;
  }
  const hinduMaasBase = lunarMasa.activeMasaNameHi;
  const specificEkadashiOcc = occurrences.find((o) => o.category === "ekadashi");
  const ekadashiTag = specificEkadashiOcc ? ` — ${specificEkadashiOcc.nameHi}` : "";
  const tithiShortStr = baseTithiName === "पूर्णिमा" || baseTithiName === "अमावस्या" ? `${hinduMaasBase} ${baseTithiName}` : kshayaTithis.hasKshaya ? kshayaTithis.displayLabelHi : `${udayaTithi.pakshaShort} ${baseTithiName}`;
  const fullTithiName = `${hinduMaasBase} ${udayaTithi.pakshaShort} ${baseTithiName}${ekadashiTag}`;
  const GANDMOOL_NAKSHATRAS = [0, 8, 9, 17, 18, 26];
  const nak0 = nakshatraIntervals[0];
  const nak1 = nakshatraIntervals[1];
  const nak0StartParts = getLocalDateParts(Math.round(nak0.startTimestamp / 1e3) * 1e3, timeZone);
  const nak0EndParts = getLocalDateParts(Math.round(nak0.endTimestamp / 1e3) * 1e3, timeZone);
  const nak0StartedTodayBeforeSunrise = nak0.startTimestamp < sunriseTimestamp && nak0StartParts.dateKey === dateKey;
  const nak0EndClean = cleanTime(nak0.endFormattedHi);
  const nak0SpanStr = nak0StartedTodayBeforeSunrise ? `सूर्योदय व्याप्त उदया नक्षत्र • ${formatEpochInZoneHi(nak0.startTimestamp, timeZone, dateKey, false)} से प्रारंभ होकर ${nak0EndClean}` : nak0EndClean;
  let nakshatraEndTimeStr = nak0SpanStr;
  if (nak1) {
    const nak1IsGandmool = GANDMOOL_NAKSHATRAS.includes(nak1.index) && nak0.endTimestamp < nextSunriseTimestamp;
    const nak1MetaTags = [];
    if (nak1IsGandmool) {
      nak1MetaTags.push("गण्डमूल नक्षत्र");
    }
    if (nak0EndParts.dateKey === dateKey && nak1.endTimestamp > nak0.endTimestamp) {
      const nak1EndParts = getLocalDateParts(Math.round(nak1.endTimestamp / 1e3) * 1e3, timeZone);
      const dayUtc = Date.UTC(year, month - 1, day);
      const nak1EndDayUtc = Date.UTC(nak1EndParts.year, nak1EndParts.month - 1, nak1EndParts.day);
      const daysDiff = Math.round((nak1EndDayUtc - dayUtc) / 864e5);
      if (daysDiff <= 1) {
        const nak1EndClean = cleanTime(
          formatEpochInZoneHi(nak1.endTimestamp, timeZone, dateKey, true)
        );
        nak1MetaTags.push(nak1EndClean);
      }
    }
    const nak1Bracket = nak1MetaTags.length > 0 ? ` (${nak1MetaTags.join(" • ")})` : "";
    nakshatraEndTimeStr = `${nak0SpanStr}, फिर ${nak1.nameHi}${nak1Bracket}`;
  }
  let finalNakshatra = `${nak0.nameHi} नक्षत्र`;
  const yoga0 = yogaIntervals[0];
  const yoga1 = yogaIntervals[1];
  const yoga2 = yogaIntervals[2];
  const nextYogaName = `${(yoga1?.nameHi || YOGAS_27[(yoga0.index + 1) % 27] || "व्याघात").replace(/\s*योग$/u, "")}`;
  let yogaEndTimeStr = `${cleanTime(yoga0.endFormattedHi)}, फिर ${nextYogaName}`;
  if (yoga2 && yoga1 && yoga1.endTimestamp < nextSunriseTimestamp) {
    const yoga2Name = `${yoga2.nameHi.replace(/\s*योग$/u, "")}`;
    yogaEndTimeStr = `${cleanTime(yoga0.endFormattedHi)}, फिर ${nextYogaName} — ${formatRelativeEnd(yoga0.endTimestamp, yoga1.endTimestamp)}, तत्पश्चात ${yoga2Name}`;
  }
  const finalYoga = yoga0.nameHi.replace(/\s*योग$/u, "");
  const kar0 = karanaIntervals[0];
  const kar1 = karanaIntervals[1];
  const kar2 = karanaIntervals[2];
  const nextKaranaClean = (kar1?.nameHi || getKaranaNameByIdx60((kar0.index + 1) % 60)).replace(/\s*करण$/u, "");
  let karanaEndTimeStr = `${cleanTime(kar0.endFormattedHi)}, फिर ${nextKaranaClean}`;
  if (kar2 && kar1 && kar1.endTimestamp < nextSunriseTimestamp) {
    const kar2Clean = kar2.nameHi.replace(/\s*करण$/u, "");
    karanaEndTimeStr = `${cleanTime(kar0.endFormattedHi)}, फिर ${nextKaranaClean} — ${formatRelativeEnd(kar0.endTimestamp, kar1.endTimestamp)}, तत्पश्चात ${kar2Clean}`;
  }
  const finalKarana = kar0.nameHi.replace(/\s*करण$/u, "");
  const cr0 = chandraRashiIntervals[0];
  const cr1 = chandraRashiIntervals[1];
  const suryaRashiIdx = Math.floor(record.sunSiderealDegAtSunrise / 30) % 12;
  const suryaRashiResolved = resolveSuryaRashiForPanchangDay(
    sunriseTimestamp,
    nextSunriseTimestamp,
    dateKey,
    record.location,
    record.config.ayanamsha
  );
  const suryaRashi = suryaRashiResolved.suryaRashi;
  const NAK_SPAN_DEG = 360 / 27;
  const sunLonSunrise = (record.sunSiderealDegAtSunrise % 360 + 360) % 360;
  const sunNakIdx0 = Math.floor(sunLonSunrise / NAK_SPAN_DEG) % 27;
  const sunPada0 = Math.min(4, Math.floor(sunLonSunrise % NAK_SPAN_DEG / (NAK_SPAN_DEG / 4)) + 1);
  const sunLonNextSunrise = (getSiderealSunLonDeg(nextSunriseTimestamp, record.config.ayanamsha) % 360 + 360) % 360;
  const sunNakIdx1 = Math.floor(sunLonNextSunrise / NAK_SPAN_DEG) % 27;
  let suryaNakshatra = `${ALL_27_NAKSHATRAS_HI[sunNakIdx0]} (चरण ${sunPada0})`;
  if (sunNakIdx1 !== sunNakIdx0) {
    let lo = sunriseTimestamp;
    let hi = nextSunriseTimestamp;
    for (let iter = 0; iter < 18; iter++) {
      const mid = (lo + hi) / 2;
      const midLon = (getSiderealSunLonDeg(mid, record.config.ayanamsha) % 360 + 360) % 360;
      const midIdx = Math.floor(midLon / NAK_SPAN_DEG) % 27;
      if (midIdx === sunNakIdx0) lo = mid;
      else hi = mid;
    }
    const sunNakCrossClean = cleanTime(formatEpochInZoneHi(hi, timeZone, dateKey, true));
    suryaNakshatra = `${ALL_27_NAKSHATRAS_HI[sunNakIdx0]} (चरण ${sunPada0}, ${sunNakCrossClean}), फिर ${ALL_27_NAKSHATRAS_HI[sunNakIdx1]} (चरण 1)`;
  }
  const sign1Num = cr0.index + 1;
  const sign1NameHi = cr0.nameHi.replace(/\s*राशि$/u, "");
  let chandraRashi = cr0.nameHi;
  let chandraRashiMeta;
  if (cr1 && cr0.endTimestamp < nextSunriseTimestamp) {
    chandraRashi = `${cr0.nameHi} (${cleanTime(cr0.endFormattedHi)}), फिर ${cr1.nameHi}`;
    const transEnd = Math.min(sunsetTimestamp, Math.max(sunriseTimestamp, cr0.endTimestamp));
    const sign1DayHours = (transEnd - sunriseTimestamp) / 36e5;
    const sign2DayHours = (sunsetTimestamp - transEnd) / 36e5;
    const sign2Num = cr1.index + 1;
    const isSecondPrevailing = sign2DayHours > sign1DayHours;
    chandraRashiMeta = {
      hasTransition: true,
      sign1Number: sign1Num,
      sign1NameHi,
      endTimeText: cleanTime(cr0.endFormattedHi),
      transitionISTHours: Number(
        toContinuousHoursFromMidnight(cr0.endTimestamp, timings.dayMidnightUtcMs).toFixed(3)
      ),
      sign2Number: sign2Num,
      sign2NameHi: cr1.nameHi.replace(/\s*राशि$/u, ""),
      sign1DayHours: Number(sign1DayHours.toFixed(3)),
      sign2DayHours: Number(sign2DayHours.toFixed(3)),
      prevailingDaytimeSignNumber: isSecondPrevailing ? sign2Num : sign1Num,
      isSecondSignPrevailingInDaytime: isSecondPrevailing
    };
  } else {
    chandraRashiMeta = {
      hasTransition: false,
      sign1Number: sign1Num,
      sign1NameHi,
      sign1DayHours: Number(timings.dayDurationHours.toFixed(3)),
      sign2DayHours: 0,
      prevailingDaytimeSignNumber: sign1Num,
      isSecondSignPrevailingInDaytime: false
    };
  }
  const roundSecMs = (ms) => normalizeNearestSecondMs(ms);
  const dinamanaMs = sunsetTimestamp - sunriseTimestamp;
  const ratrimanaMs = nextSunriseTimestamp - sunsetTimestamp;
  const dayPartMs = dinamanaMs / 8;
  const nightPartMs = ratrimanaMs / 8;
  const muhurtaMs = dinamanaMs / 15;
  const segMs = (k) => sunriseTimestamp + k * dayPartMs;
  const dayBoundaryRoundedMs = Array.from({ length: 9 }, (_, k) => roundSecMs(segMs(k)));
  const displayedSunriseRoundedMs = dayBoundaryRoundedMs[0];
  const displayedSunsetRoundedMs = dayBoundaryRoundedMs[8];
  const displayedNextSunriseRoundedMs = roundSecMs(nextSunriseTimestamp);
  const dinamanaDisplayMs = Math.max(0, displayedSunsetRoundedMs - displayedSunriseRoundedMs);
  const ratrimanaDisplayMs = Math.max(0, displayedNextSunriseRoundedMs - displayedSunsetRoundedMs);
  const dinamanaFormatted = formatDurationExactSecondsHi(dinamanaDisplayMs);
  const ratrimanaFormatted = formatDurationExactSecondsHi(ratrimanaDisplayMs);
  const ashtamaamsaDurationFormatted = `${formatDurationExactSecondsHi(dayPartMs)} (दिनमान का 1/8 भाग)`;
  const rahuSegMap = { 0: 8, 1: 2, 2: 7, 3: 5, 4: 6, 5: 4, 6: 3 };
  const yamaSegMap = { 0: 5, 1: 4, 2: 3, 3: 2, 4: 1, 5: 7, 6: 6 };
  const guliSegMap = { 0: 7, 1: 6, 2: 5, 3: 4, 4: 3, 5: 2, 6: 1 };
  const rSeg = rahuSegMap[weekdayIndex] || 8;
  const rStartRoundedMs = dayBoundaryRoundedMs[rSeg - 1];
  const rEndRoundedMs = dayBoundaryRoundedMs[rSeg];
  const rahuKaal = `${formatWindowRangeInZoneHi(rStartRoundedMs, rEndRoundedMs, timeZone, dateKey)} तक`;
  const ySeg = yamaSegMap[weekdayIndex] || 5;
  const yStartRoundedMs = dayBoundaryRoundedMs[ySeg - 1];
  const yEndRoundedMs = dayBoundaryRoundedMs[ySeg];
  const yamagandam = `${formatWindowRangeInZoneHi(yStartRoundedMs, yEndRoundedMs, timeZone, dateKey)} तक`;
  const gSeg = guliSegMap[weekdayIndex] || 7;
  const gStartRoundedMs = dayBoundaryRoundedMs[gSeg - 1];
  const gEndRoundedMs = dayBoundaryRoundedMs[gSeg];
  const gulikaBase = `${formatWindowRangeInZoneHi(gStartRoundedMs, gEndRoundedMs, timeZone, dateKey)} तक`;
  const DURMUHURTA_SLOT_BY_VAAR = {
    0: 14,
    1: 9,
    2: 4,
    3: 8,
    4: 6,
    5: 4,
    6: 1
  };
  const durMuhurtaSlotNum = DURMUHURTA_SLOT_BY_VAAR[weekdayIndex] || 14;
  const durMuhurtaStartRoundedMs = roundSecMs(sunriseTimestamp + (durMuhurtaSlotNum - 1) * muhurtaMs);
  const durMuhurtaEndRoundedMs = roundSecMs(sunriseTimestamp + durMuhurtaSlotNum * muhurtaMs);
  const buildDurmuhurtaPartialOverlapNote = (winStartR, winEndR) => {
    const winSpanMs = Math.max(1e3, winEndR - winStartR);
    const dOvS = Math.max(winStartR, durMuhurtaStartRoundedMs);
    const dOvE = Math.min(winEndR, durMuhurtaEndRoundedMs);
    const dOvMs = dOvE - dOvS;
    if (dOvMs >= 1e3 && dOvMs < winSpanMs - 1e3) {
      const ovStartClock = formatClockOnlyInZone(dOvS, timeZone);
      const ovEndClock = formatClockOnlyInZone(dOvE, timeZone);
      return `${ovStartClock} – ${ovEndClock} दुर्मुहूर्त युक्त, शेष भाग शुद्ध`;
    }
    return void 0;
  };
  const gulikaDurmuhurtaOverlapHi = buildDurmuhurtaPartialOverlapNote(gStartRoundedMs, gEndRoundedMs);
  const vishtiIntervals = karanaIntervals.filter(
    (k) => k.nameHi.includes("विष्टि") && k.endTimestamp > sunriseTimestamp + 1e3 && k.startTimestamp < nextSunriseTimestamp - 1e3
  );
  let bhadraIntervalMs = null;
  let bhadraFullBoundsMs = null;
  let bhadraMukhaBoundsMs = null;
  let bhadraPuchhaBoundsMs = null;
  let bhadraDisplayWindowHi = null;
  let bhadraMukhaDisplayHi = null;
  let bhadraPuchhaDisplayHi = null;
  let bhadraVaas;
  let bhadraKaal;
  if (vishtiIntervals.length > 0) {
    const v = vishtiIntervals[0];
    const bS = Math.max(sunriseTimestamp, v.startTimestamp);
    const bEIntraDay = Math.min(nextSunriseTimestamp, v.endTimestamp);
    const bDisplayEnd = v.endTimestamp;
    if (bEIntraDay - bS > 1e3 && bDisplayEnd - bS > 1e3) {
      const bStartRoundedMs = roundSecMs(bS);
      const bDisplayEndRoundedMs = roundSecMs(bDisplayEnd);
      bhadraFullBoundsMs = [bStartRoundedMs, bDisplayEndRoundedMs];
      bhadraIntervalMs = [bStartRoundedMs, bDisplayEndRoundedMs];
      const bhadraTrueStartMs = v.startTimestamp;
      const bhadraTrueEndMs = v.endTimestamp;
      const fullVishtiSpanMs = Math.max(1e3, bhadraTrueEndMs - bhadraTrueStartMs);
      const rawMukhaStartMs = bhadraTrueEndMs - 8 / 30 * fullVishtiSpanMs;
      const rawMukhaEndMs = bhadraTrueEndMs - 3 / 30 * fullVishtiSpanMs;
      const bTrueStartRoundedMs = roundSecMs(bhadraTrueStartMs);
      const mukhaSRounded = Math.max(bTrueStartRoundedMs, Math.min(bDisplayEndRoundedMs, roundSecMs(rawMukhaStartMs)));
      const mukhaERounded = Math.max(mukhaSRounded, Math.min(bDisplayEndRoundedMs, roundSecMs(rawMukhaEndMs)));
      const puchhaSRounded = mukhaERounded;
      const puchhaERounded = Math.max(puchhaSRounded, bDisplayEndRoundedMs);
      bhadraMukhaBoundsMs = mukhaERounded > mukhaSRounded ? [mukhaSRounded, mukhaERounded] : null;
      bhadraPuchhaBoundsMs = puchhaERounded > puchhaSRounded ? [puchhaSRounded, puchhaERounded] : null;
      const formatBhadraSubWindow = (subStartRoundedMs, subEndRoundedMs) => {
        const startParts = getLocalDateParts(subStartRoundedMs, timeZone);
        const endParts = getLocalDateParts(subEndRoundedMs, timeZone);
        const startsNextDay = startParts.dateKey > dateKey;
        const rawRange = formatWindowRangeInZoneHi(subStartRoundedMs, subEndRoundedMs, timeZone, dateKey);
        if (startsNextDay) {
          const cleanRange = rawRange.replace(/^अगले दिन\s+/u, "").trim();
          return `अगले दिन ${cleanRange}`;
        }
        if (endParts.dateKey > dateKey && !rawRange.includes("अगले दिन")) {
          return `${rawRange} (अगले दिन तक)`;
        }
        return rawRange;
      };
      const bhadraMukhaWindowHi = mukhaERounded > mukhaSRounded ? formatBhadraSubWindow(mukhaSRounded, mukhaERounded) : "";
      const bhadraPuchhaWindowHi = puchhaERounded > puchhaSRounded ? formatBhadraSubWindow(puchhaSRounded, puchhaERounded) : "";
      bhadraMukhaDisplayHi = bhadraMukhaWindowHi || null;
      bhadraPuchhaDisplayHi = bhadraPuchhaWindowHi || null;
      const probeStartMs = Math.min(bDisplayEnd, bS + 3e4);
      const probeEndMs = Math.max(bS, bDisplayEnd - 3e4);
      const startMoonSign = Math.floor((getSiderealMoonLonDeg(probeStartMs) % 360 + 360) % 360 / 30) % 12 + 1;
      const endMoonSign = Math.floor((getSiderealMoonLonDeg(probeEndMs) % 360 + 360) % 360 / 30) % 12 + 1;
      if (startMoonSign !== endMoonSign) {
        let moonTransMs;
        if (cr1 && cr0.endTimestamp > bS + 3e4 && cr0.endTimestamp < bDisplayEnd - 3e4) {
          moonTransMs = cr0.endTimestamp;
        } else {
          let lo = bS;
          let hi = bDisplayEnd;
          for (let iter = 0; iter < 22; iter++) {
            const mid = 0.5 * (lo + hi);
            const midSign = Math.floor((getSiderealMoonLonDeg(mid) % 360 + 360) % 360 / 30) % 12 + 1;
            if (midSign === startMoonSign) lo = mid;
            else hi = mid;
          }
          moonTransMs = 0.5 * (lo + hi);
        }
        const transSecMs = roundSecMs(moonTransMs);
        const transParts = getLocalDateParts(transSecMs, timeZone);
        const transTimeHi = formatEpochInZoneHi(
          transSecMs,
          timeZone,
          dateKey,
          transParts.dateKey > dateKey
        );
        const vaas1 = resolveBhadraVaasInfo(startMoonSign);
        const vaas2 = resolveBhadraVaasInfo(endMoonSign);
        let prithviIntervalHours;
        if (vaas1.vaasRealm !== vaas2.vaasRealm) {
          const transIntraMs = Math.min(bDisplayEndRoundedMs, transSecMs);
          if (vaas1.isPrithviVaas && !vaas2.isPrithviVaas && transIntraMs > bStartRoundedMs + 1e3) {
            bhadraIntervalMs = [bStartRoundedMs, transIntraMs];
            prithviIntervalHours = [
              toContinuousHoursFromMidnight(bStartRoundedMs, timings.dayMidnightUtcMs),
              toContinuousHoursFromMidnight(transIntraMs, timings.dayMidnightUtcMs)
            ];
          } else if (!vaas1.isPrithviVaas && vaas2.isPrithviVaas && bDisplayEndRoundedMs > transIntraMs + 1e3) {
            bhadraIntervalMs = [transIntraMs, bDisplayEndRoundedMs];
            prithviIntervalHours = [
              toContinuousHoursFromMidnight(transIntraMs, timings.dayMidnightUtcMs),
              toContinuousHoursFromMidnight(bDisplayEndRoundedMs, timings.dayMidnightUtcMs)
            ];
          }
        }
        bhadraVaas = {
          ...resolveBhadraVaasForSpan(startMoonSign, endMoonSign, transTimeHi),
          bhadraMukhaWindowHi,
          bhadraPuchhaWindowHi,
          prithviIntervalHours
        };
      } else {
        bhadraVaas = {
          ...resolveBhadraVaasInfo(startMoonSign),
          bhadraMukhaWindowHi,
          bhadraPuchhaWindowHi
        };
      }
      const bEndRoundedParts = getLocalDateParts(bDisplayEndRoundedMs, timeZone);
      const bStartLabel = Math.abs(bStartRoundedMs - displayedSunriseRoundedMs) < 1e3 ? `प्रातः ${formatClockOnlyInZone(displayedSunriseRoundedMs, timeZone)} (सूर्योदय)` : formatEpochInZoneHi(bStartRoundedMs, timeZone, dateKey, false);
      const bEndIsNextDay = bEndRoundedParts.dateKey > dateKey;
      const bEndLabel = formatEpochInZoneHi(bDisplayEndRoundedMs, timeZone, dateKey, bEndIsNextDay);
      bhadraDisplayWindowHi = `${bStartLabel} – ${bEndLabel}`;
      const subParts = [
        bhadraVaas.effectNoteHi,
        bhadraMukhaWindowHi ? `भद्रा मुख: ${bhadraMukhaWindowHi} [वर्जित]` : "",
        bhadraPuchhaWindowHi ? `भद्रा पुच्छ: ${bhadraPuchhaWindowHi} [ग्राह्य]` : ""
      ].filter(Boolean);
      bhadraKaal = `${bStartLabel} से ${bEndLabel} तक (${subParts.join(" • ")})`;
    }
  }
  const inPanchakSunrise = sign1Num === 11 || sign1Num === 12;
  const endMoonSignNum = cr1 ? cr1.index + 1 : sign1Num;
  const inPanchakEnd = endMoonSignNum === 11 || endMoonSignNum === 12;
  const PANCHAK_TYPE_BY_VAAR = {
    0: "रोग पंचक",
    1: "राज पंचक",
    2: "अग्नि पंचक",
    3: "पंचक काल",
    4: "पंचक काल",
    5: "चोर पंचक",
    6: "मृत्यु पंचक"
  };
  const formatDateTimeWithVaarHi = (epochMs) => {
    const rMs = roundSecMs(epochMs);
    const p = getLocalDateParts(rMs, timeZone);
    const vaarFull = VAAR_LIST[p.weekdayIndex]?.full || "";
    const clockStr = formatEpochInZoneHi(rMs, timeZone, p.dateKey, false);
    return `${p.day} ${HINDI_MONTH_SHORT[p.month - 1]} ${p.year} (${vaarFull}), ${clockStr}`;
  };
  let panchakStartWeekday = weekdayIndex;
  let panchakStartVaarHi;
  let panchakKaal;
  let panchakStartDateTimeHi;
  let panchakEndDateTimeHi;
  let panchakProhibitionsHi;
  let panchakSpanMs = null;
  if (inPanchakSunrise || inPanchakEnd) {
    let exactPanchakStartMs;
    if (!inPanchakSunrise && inPanchakEnd && cr0.endTimestamp < nextSunriseTimestamp) {
      panchakStartWeekday = weekdayIndex;
      exactPanchakStartMs = cr0.endTimestamp;
    } else {
      exactPanchakStartMs = findPanchakStartTimestamp(sunriseTimestamp, record.config.ayanamsha);
      const pStartParts = getLocalDateParts(exactPanchakStartMs, timeZone);
      const pStartTimings = calculateDayAstronomicalTimings(
        pStartParts.year,
        pStartParts.month,
        pStartParts.day,
        record.location
      );
      panchakStartWeekday = exactPanchakStartMs < pStartTimings.sunriseTimestamp ? (pStartParts.weekdayIndex + 6) % 7 : pStartParts.weekdayIndex;
    }
    let exactPanchakEndMs = null;
    if (inPanchakSunrise && !inPanchakEnd && cr0.endTimestamp < nextSunriseTimestamp) {
      exactPanchakEndMs = cr0.endTimestamp;
    } else {
      const probeBaseMs = Math.max(sunriseTimestamp, exactPanchakStartMs);
      const stepMs = 2 * 36e5;
      let loMs = -1;
      let hiMs = -1;
      let prevLon = (getSiderealMoonLonDeg(probeBaseMs, record.config.ayanamsha) % 360 + 360) % 360;
      for (let i = 1; i <= 96; i++) {
        const curMs = probeBaseMs + i * stepMs;
        const curLon = (getSiderealMoonLonDeg(curMs, record.config.ayanamsha) % 360 + 360) % 360;
        if (prevLon >= 300 && curLon < 60) {
          loMs = curMs - stepMs;
          hiMs = curMs;
          break;
        }
        prevLon = curLon;
      }
      if (loMs > 0 && hiMs > loMs) {
        for (let iter = 0; iter < 24; iter++) {
          const mid = 0.5 * (loMs + hiMs);
          const midLon = (getSiderealMoonLonDeg(mid, record.config.ayanamsha) % 360 + 360) % 360;
          if (midLon >= 300) loMs = mid;
          else hiMs = mid;
        }
        exactPanchakEndMs = hiMs;
      }
    }
    const pSpanS = roundSecMs(Math.max(displayedSunriseRoundedMs - 96 * 6e4, exactPanchakStartMs));
    const pSpanE = roundSecMs(
      exactPanchakEndMs ? Math.min(displayedNextSunriseRoundedMs, exactPanchakEndMs) : displayedNextSunriseRoundedMs
    );
    if (pSpanE > pSpanS) {
      panchakSpanMs = [pSpanS, pSpanE];
    }
    const startVaarFull = VAAR_LIST[panchakStartWeekday]?.full || vaarInfo.full;
    panchakStartVaarHi = startVaarFull;
    const panchakLabel = PANCHAK_TYPE_BY_VAAR[panchakStartWeekday] || "पंचक काल";
    panchakStartDateTimeHi = formatDateTimeWithVaarHi(exactPanchakStartMs);
    panchakEndDateTimeHi = exactPanchakEndMs ? formatDateTimeWithVaarHi(exactPanchakEndMs) : void 0;
    panchakProhibitionsHi = PANCHAK_PROHIBITIONS_HI;
    const spanDetail = panchakEndDateTimeHi ? `प्रारंभ: ${panchakStartDateTimeHi} — समाप्त: ${panchakEndDateTimeHi}` : `प्रारंभ: ${panchakStartDateTimeHi}`;
    panchakKaal = `${panchakLabel} (${spanDetail} • ${PANCHAK_PROHIBITIONS_HI})`;
  }
  const isPanchak = Boolean(panchakKaal);
  const baseDayUtcMs = Date.UTC(year, month - 1, day);
  const formatGandmoolBoundaryHi = (epochMs) => {
    const roundedMs = Math.round(epochMs / 1e3) * 1e3;
    const p = getLocalDateParts(roundedMs, timeZone);
    const diffDays = Math.round((Date.UTC(p.year, p.month - 1, p.day) - baseDayUtcMs) / 864e5);
    const clockStr = formatEpochInZoneHi(roundedMs, timeZone, p.dateKey, false);
    if (diffDays === 0) return clockStr;
    if (diffDays === 1) return `अगले दिन ${clockStr}`;
    if (diffDays === -1) return `पूर्व दिन ${clockStr}`;
    return `${p.day} ${HINDI_MONTH_SHORT[p.month - 1]} ${clockStr}`;
  };
  if (GANDMOOL_NAKSHATRAS.includes(nak0.index)) {
    finalNakshatra = `${finalNakshatra} (गण्डमूल संज्ञक नक्षत्र)`;
  }
  const activeGandmoolEntries = [];
  const gandmoolSpansMs = [];
  for (const niv of nakshatraIntervals) {
    if (!GANDMOOL_NAKSHATRAS.includes(niv.index)) continue;
    if (niv.endTimestamp <= sunriseTimestamp - 96 * 6e4 || niv.startTimestamp >= nextSunriseTimestamp) continue;
    const gmStartR = roundSecMs(niv.startTimestamp);
    const gmEndR = roundSecMs(niv.endTimestamp);
    if (gmEndR > gmStartR) {
      gandmoolSpansMs.push([gmStartR, gmEndR]);
    }
    if (niv.endTimestamp > sunriseTimestamp && niv.startTimestamp < nextSunriseTimestamp) {
      activeGandmoolEntries.push(
        `${niv.nameHi}: ${formatGandmoolBoundaryHi(niv.startTimestamp)} से ${formatGandmoolBoundaryHi(niv.endTimestamp)} तक`
      );
    }
  }
  const gandmoolNakshatra = activeGandmoolEntries.length > 0 ? `गण्डमूल नक्षत्र (${activeGandmoolEntries.join(" • ")} — ${GANDMOOL_PROHIBITIONS_HI})` : void 0;
  const firstNakEndParts = getLocalDateParts(Math.round(nak0.endTimestamp / 1e3) * 1e3, timeZone);
  const nextSrParts = getLocalDateParts(Math.round(nextSunriseTimestamp / 1e3) * 1e3, timeZone);
  const nakEndToNextSrCrossesMidnight = nextSrParts.dateKey > firstNakEndParts.dateKey;
  const firstNakEndAsRangeStart = formatEpochInZoneHi(nak0.endTimestamp, timeZone, dateKey, false);
  const nextSrLabelRelativeToNakEnd = `${nakEndToNextSrCrossesMidnight ? "अगले दिन " : ""}सूर्योदय (${formatClockOnlyInZone(nextSunriseTimestamp, timeZone)})`;
  const isGandmool = Boolean(gandmoolNakshatra);
  const toSec = (ms) => Math.round(ms / 1e3);
  const masterInauspiciousWindows = [
    { id: "rahukaal", nameHi: "राहुकाल", startSec: toSec(rStartRoundedMs), endSec: toSec(rEndRoundedMs) },
    { id: "yamagandam", nameHi: "यमगण्ड", startSec: toSec(yStartRoundedMs), endSec: toSec(yEndRoundedMs) },
    { id: "durmuhurta", nameHi: "दुर्मुहूर्त", startSec: toSec(durMuhurtaStartRoundedMs), endSec: toSec(durMuhurtaEndRoundedMs) }
  ];
  if (bhadraIntervalMs && bhadraVaas?.isPrithviVaas) {
    masterInauspiciousWindows.push({
      id: "bhadra",
      nameHi: "भद्रा",
      startSec: toSec(bhadraIntervalMs[0]),
      endSec: toSec(bhadraIntervalMs[1])
    });
  } else if (bhadraMukhaBoundsMs) {
    masterInauspiciousWindows.push({
      id: "bhadra",
      nameHi: "भद्रा मुख",
      startSec: toSec(bhadraMukhaBoundsMs[0]),
      endSec: toSec(bhadraMukhaBoundsMs[1])
    });
  }
  for (const [gmS, gmE] of gandmoolSpansMs) {
    masterInauspiciousWindows.push({
      id: "gandmool",
      nameHi: "गण्डमूल नक्षत्र",
      startSec: toSec(gmS),
      endSec: toSec(gmE)
    });
  }
  if (panchakSpanMs) {
    masterInauspiciousWindows.push({
      id: "panchak",
      nameHi: "पंचक",
      startSec: toSec(panchakSpanMs[0]),
      endSec: toSec(panchakSpanMs[1])
    });
  }
  const kalVedhaReport = {};
  const brahmaStartMs = displayedSunriseRoundedMs - 96 * 6e4;
  const brahmaEndMs = displayedSunriseRoundedMs - 48 * 6e4;
  const brahmaKalVedha = evaluateKalVedhaForWindow(
    "brahma",
    "ब्रह्म मुहूर्त",
    toSec(brahmaStartMs),
    toSec(brahmaEndMs),
    masterInauspiciousWindows,
    timeZone,
    dateKey,
    { minPureSec: 1 }
  );
  kalVedhaReport.brahma = brahmaKalVedha;
  const brahmaBase = brahmaKalVedha.originalWindowHi;
  const brahmaMuhurat = brahmaKalVedha.formattedDisplayHi;
  const gulikaKalVedha = evaluateKalVedhaForWindow(
    "gulika",
    "गुलिक काल",
    toSec(gStartRoundedMs),
    toSec(gEndRoundedMs),
    masterInauspiciousWindows,
    timeZone,
    dateKey,
    { minPureSec: 1 }
  );
  kalVedhaReport.gulika = gulikaKalVedha;
  const gulikaKaal = gulikaBase;
  const gulikaHardOverlap = gulikaKalVedha.collidingNamesHi.some((n) => /राहुकाल|यमगण्ड|दुर्मुहूर्त/u.test(n));
  const gulikaOverlapNoteHi = gulikaHardOverlap && gulikaKalVedha.statusTagHi ? `विशेष नोट: ${gulikaKalVedha.statusTagHi.replace(/^⚠️\s*(?:चेतावनी:\s*)?/u, "").trim()}` : gulikaDurmuhurtaOverlapHi ? `विशेष नोट: ${gulikaDurmuhurtaOverlapHi}` : void 0;
  const gulikaKaalLabelHi = gulikaKalVedha.isFullyEclipsed ? GULIKA_ECLIPSED_LABEL_HI : GULIKA_SHASTRIYA_LABEL_HI;
  const abhijitStartMs = sunriseTimestamp + 7 * muhurtaMs;
  const abhijitEndMs = sunriseTimestamp + 8 * muhurtaMs;
  const abhijitStartRoundedMs = roundSecMs(abhijitStartMs);
  const abhijitEndRoundedMs = roundSecMs(abhijitEndMs);
  const abhijitFullWindow = formatWindowRangeInZoneHi(abhijitStartRoundedMs, abhijitEndRoundedMs, timeZone, dateKey);
  const abhijitExactFullWindow = abhijitFullWindow;
  const abhijitSafeFullWindow = abhijitFullWindow;
  const abhijitMuhurat = weekdayIndex === 3 ? "मान्य नहीं (बुधवार होने के कारण शास्त्रोक्त वर्जित/त्याज्य)" : abhijitFullWindow;
  let finalPureAbhijitSpansMs = weekdayIndex === 3 ? [] : [[abhijitStartRoundedMs, abhijitEndRoundedMs]];
  let abhijitConflict = {
    fullWindowHi: abhijitFullWindow,
    exactFullWindowHi: abhijitExactFullWindow,
    safeFullWindowHi: abhijitSafeFullWindow,
    isWednesdayProhibited: weekdayIndex === 3,
    hasOverlap: false,
    isFullyPolluted: false,
    collidingKaalsHi: [],
    overlapWindowHi: null,
    exactOverlapWindowHi: null,
    safeOverlapWindowHi: null,
    pureRemainingWindowHi: weekdayIndex === 3 ? null : abhijitFullWindow,
    exactPureRemainingWindowHi: weekdayIndex === 3 ? null : abhijitExactFullWindow,
    safePureRemainingWindowHi: weekdayIndex === 3 ? null : abhijitSafeFullWindow,
    pureRemainingSpansMs: finalPureAbhijitSpansMs,
    warningMessageHi: null,
    exactWarningMessageHi: null,
    safeWarningMessageHi: null,
    warningMessageEn: null
  };
  if (weekdayIndex !== 3) {
    const abhijitKalVedha = evaluateKalVedhaForWindow(
      "abhijit",
      "अभिजित मुहूर्त",
      toSec(abhijitStartRoundedMs),
      toSec(abhijitEndRoundedMs),
      masterInauspiciousWindows,
      timeZone,
      dateKey,
      { minPureSec: 1 }
    );
    kalVedhaReport.abhijit = abhijitKalVedha;
    if (abhijitKalVedha.hasCollision) {
      const collidingKaalsHi = abhijitKalVedha.collidingNamesHi;
      const kaalLabelHi = collidingKaalsHi.join(" व ");
      finalPureAbhijitSpansMs = abhijitKalVedha.pureSubIntervalsSec.map(([s, e]) => [s * 1e3, e * 1e3]);
      const isFullyPolluted = abhijitKalVedha.isFullyEclipsed;
      const rawStatusTag = (abhijitKalVedha.statusTagHi || "").replace(/^⚠️\s*(?:चेतावनी:\s*)?/u, "").trim();
      const warningMessageHi = rawStatusTag ? `विशेष नोट: ${rawStatusTag}` : "";
      if (warningMessageHi) {
        abhijitKalVedha.inlineAlertHi = warningMessageHi;
      }
      const warningMessageEn = isFullyPolluted ? `Special Note: ${abhijitFullWindow} is eclipsed by ${kaalLabelHi}.` : `Special Note: ${abhijitKalVedha.eclipsedSpanHi} overlaps ${kaalLabelHi}; pure remaining window is ${abhijitKalVedha.pureRemainingHi}.`;
      abhijitConflict = {
        fullWindowHi: abhijitFullWindow,
        exactFullWindowHi: abhijitExactFullWindow,
        safeFullWindowHi: abhijitSafeFullWindow,
        isWednesdayProhibited: false,
        hasOverlap: true,
        isFullyPolluted,
        collidingKaalsHi,
        overlapWindowHi: abhijitKalVedha.eclipsedSpanHi,
        exactOverlapWindowHi: abhijitKalVedha.eclipsedSpanHi,
        safeOverlapWindowHi: abhijitKalVedha.eclipsedSpanHi,
        pureRemainingWindowHi: abhijitKalVedha.pureRemainingHi,
        exactPureRemainingWindowHi: abhijitKalVedha.pureRemainingHi,
        safePureRemainingWindowHi: abhijitKalVedha.pureRemainingHi,
        pureRemainingSpansMs: finalPureAbhijitSpansMs,
        warningMessageHi,
        exactWarningMessageHi: warningMessageHi,
        safeWarningMessageHi: warningMessageHi,
        warningMessageEn
      };
    }
  }
  const vijayStartMs = sunriseTimestamp + 10 * muhurtaMs;
  const vijayEndMs = sunriseTimestamp + 11 * muhurtaMs;
  const vijayStartRoundedMs = roundSecMs(vijayStartMs);
  const vijayEndRoundedMs = roundSecMs(vijayEndMs);
  const vijayKalVedha = evaluateKalVedhaForWindow(
    "vijay",
    "विजय मुहूर्त",
    toSec(vijayStartRoundedMs),
    toSec(vijayEndRoundedMs),
    masterInauspiciousWindows,
    timeZone,
    dateKey,
    { minPureSec: 1 }
  );
  kalVedhaReport.vijay = vijayKalVedha;
  const vijayBase = vijayKalVedha.originalWindowHi;
  const vijayMuhurat = vijayKalVedha.formattedDisplayHi;
  const godhuliStartMs = displayedSunsetRoundedMs - 12 * 6e4;
  const godhuliEndMs = displayedSunsetRoundedMs + 12 * 6e4;
  const godhuliKalVedha = evaluateKalVedhaForWindow(
    "godhuli",
    "गोधूलि मुहूर्त",
    toSec(godhuliStartMs),
    toSec(godhuliEndMs),
    masterInauspiciousWindows,
    timeZone,
    dateKey,
    { minPureSec: 1 }
  );
  kalVedhaReport.godhuli = godhuliKalVedha;
  const godhuliBase = godhuliKalVedha.originalWindowHi;
  const godhuliMuhurat = godhuliKalVedha.formattedDisplayHi;
  const nishithaWin = record.kaalWindows.NISHITHA;
  const nishithaMuhurat = formatWindowRangeInZoneHi(
    nishithaWin.startTimestamp,
    nishithaWin.endTimestamp,
    timeZone,
    dateKey
  );
  const durMuhurta = computeDurMuhurtaWindows(
    sunriseTimestamp,
    sunsetTimestamp,
    nextSunriseTimestamp,
    weekdayIndex,
    dateKey,
    timeZone
  );
  const varjyam = computeVarjyamWindows(
    nakshatraIntervals,
    sunriseTimestamp,
    nextSunriseTimestamp,
    dateKey,
    timeZone
  );
  const { dayHora, nightHora } = computePlanetaryHora(
    sunriseTimestamp,
    sunsetTimestamp,
    nextSunriseTimestamp,
    weekdayIndex,
    dateKey,
    timeZone
  );
  const AMRIT_GHATI_OFFSETS_27 = [
    42,
    48,
    54,
    52,
    38,
    35,
    54,
    44,
    56,
    54,
    44,
    42,
    45,
    44,
    38,
    38,
    34,
    38,
    44,
    40,
    44,
    34,
    34,
    42,
    40,
    48,
    54
  ];
  const activeAmritWindows = [];
  const amritOverlapNotes = [];
  const amritKalVedhaResults = [];
  let nextFallbackAmritRange;
  for (const niv of nakshatraIntervals) {
    const nakSpanMs = niv.endTimestamp - niv.startTimestamp;
    if (nakSpanMs <= 0) continue;
    const ghatiOffset = AMRIT_GHATI_OFFSETS_27[niv.index % 27] ?? 40;
    const rawStartMs = niv.startTimestamp + ghatiOffset / 60 * nakSpanMs;
    const rawEndMs = rawStartMs + 4 / 60 * nakSpanMs;
    const clipStartMs = Math.max(sunriseTimestamp, rawStartMs);
    const clipEndMs = Math.min(nextSunriseTimestamp, rawEndMs);
    const isNivGandmool = GANDMOOL_NAKSHATRAS.includes(niv.index);
    if (clipEndMs - clipStartMs >= 10 * 6e4) {
      const clipStartRounded = roundSecMs(clipStartMs);
      const clipEndRounded = roundSecMs(clipEndMs);
      const amritKV = evaluateKalVedhaForWindow(
        "amritKaal",
        "अमृत काल",
        toSec(clipStartRounded),
        toSec(clipEndRounded),
        masterInauspiciousWindows,
        timeZone,
        dateKey,
        { minPureSec: 1, includeNextDayPrefix: true }
      );
      amritKalVedhaResults.push(amritKV);
      const winStr = nakshatraIntervals.length > 1 ? `${amritKV.originalWindowHi} (${niv.nameHi} नक्षत्र)` : amritKV.originalWindowHi;
      activeAmritWindows.push(winStr);
      const hasHardAmritOverlap = amritKV.collidingNamesHi.some((n) => /राहुकाल|यमगण्ड|दुर्मुहूर्त/u.test(n));
      if (hasHardAmritOverlap && amritKV.statusTagHi) {
        const cleanNote = amritKV.statusTagHi.replace(/^⚠️\s*(?:चेतावनी:\s*)?/u, "").trim();
        if (cleanNote) {
          amritOverlapNotes.push(
            nakshatraIntervals.length > 1 ? `${niv.nameHi}: ${cleanNote}` : cleanNote
          );
        }
      }
    } else if (rawStartMs >= nextSunriseTimestamp && !nextFallbackAmritRange) {
      const fbBase = formatWindowRangeInZoneHi(rawStartMs, rawEndMs, timeZone, dateKey, true);
      nextFallbackAmritRange = isNivGandmool ? `${fbBase} • गण्डमूल प्रभावी — केवल जप-ध्यान करें, नया क्रय न करें` : fbBase;
    }
  }
  if (amritKalVedhaResults.length > 0) {
    kalVedhaReport.amritKaal = amritKalVedhaResults;
  }
  const amritKaalOverlapNoteHi = amritOverlapNotes.length > 0 ? `विशेष नोट: ${amritOverlapNotes.join(" • ")}` : void 0;
  let amritKaal;
  if (activeAmritWindows.length > 0) {
    amritKaal = activeAmritWindows.join(" • ");
  } else {
    if (!nextFallbackAmritRange) {
      const lastNak = nakshatraIntervals[nakshatraIntervals.length - 1] || nak0;
      const ghatiOffset = AMRIT_GHATI_OFFSETS_27[lastNak.index % 27] ?? 40;
      const nakSpanMs = Math.max(24 * 36e5, lastNak.endTimestamp - lastNak.startTimestamp);
      const rawStartMs = lastNak.startTimestamp + ghatiOffset / 60 * nakSpanMs;
      const rawEndMs = rawStartMs + 4 / 60 * nakSpanMs;
      const fbBase = formatWindowRangeInZoneHi(rawStartMs, rawEndMs, timeZone, dateKey, true);
      nextFallbackAmritRange = GANDMOOL_NAKSHATRAS.includes(lastNak.index) ? `${fbBase} • गण्डमूल प्रभावी — केवल जप-ध्यान करें, नया क्रय न करें` : fbBase;
    }
    amritKaal = `आज सूर्योदय से अगले सूर्योदय तक कोई शुद्ध अमृत काल नहीं (अगला अमृत काल: ${nextFallbackAmritRange})`;
  }
  const SARVARTHA_SIDDHI_BY_VAAR = {
    0: [0, 7, 11, 12, 18, 20, 25],
    1: [4, 6, 7, 16, 21],
    2: [0, 2, 8, 25],
    3: [3, 4, 5, 12, 16],
    4: [0, 6, 7, 16, 26],
    5: [0, 16, 21, 26],
    6: [3, 14, 21]
  };
  const AMRIT_SIDDHI_BY_VAAR = {
    0: [12],
    1: [4],
    2: [0],
    3: [16],
    4: [7],
    5: [26],
    6: [3]
  };
  const sarvSet = SARVARTHA_SIDDHI_BY_VAAR[weekdayIndex] || [];
  const amrSet = AMRIT_SIDDHI_BY_VAAR[weekdayIndex] || [];
  const srClock = formatClockOnlyInZone(sunriseTimestamp, timeZone);
  const nextSrClock = formatClockOnlyInZone(nextSunriseTimestamp, timeZone);
  const firstNakEnd = nak0.endFormattedHi;
  const cleanNakNameHi = (rawName) => (rawName || "").replace(/\s*\(\s*ग(?:ण्ड|ंड)मूल[^)]*\)/gu, "").replace(/\s+नक्षत्र\s*$/u, "").trim();
  const buildSarvarthaPureFormatHi = (startMs, endMs, naks, mode, rawFallbackSpanHi) => {
    const startSec = toSec(roundSecMs(startMs));
    const endSec = toSec(roundSecMs(endMs));
    const hasGm = naks.some((n) => GANDMOOL_NAKSHATRAS.includes(n.index)) || gandmoolSpansMs.some(([gS, gE]) => Math.min(endSec, toSec(gE)) - Math.max(startSec, toSec(gS)) >= 1);
    const hasPn = Boolean(panchakSpanMs) && Math.min(endSec, toSec(panchakSpanMs[1])) - Math.max(startSec, toSec(panchakSpanMs[0])) >= 1;
    const doshaLabel = hasGm && hasPn ? "गण्डमूल/पंचक" : hasGm ? "गण्डमूल" : hasPn ? "पंचक" : "";
    const kv = evaluateKalVedhaForWindow(
      "sarvarthaSiddhi",
      "सर्वार्थ सिद्धि योग",
      startSec,
      endSec,
      masterInauspiciousWindows,
      timeZone,
      dateKey,
      { minPureSec: 600, includeNextDayPrefix: true, excludeIds: ["gandmool", "panchak"] }
    );
    kalVedhaReport.sarvarthaSiddhi = kv;
    const cleanNames = naks.map((n) => cleanNakNameHi(n.nameHi)).filter(Boolean);
    const nakBase = mode === "paryant" ? `${cleanNames.join(" व ")} नक्षत्र पर्यन्त` : `${cleanNames.join(" व ")} नक्षत्र प्रारंभ से`;
    const notes = [nakBase];
    if (doshaLabel) {
      notes.push(
        `${doshaLabel} बाधित — विवाह, मुंडन व नवीन क्रय वर्जित; केवल मंत्र-जप, दान व साधना हेतु ग्राह्य`
      );
    }
    const hardCollisions = kv.collidingNamesHi.filter((c) => /राहुकाल|यमगण्ड|दुर्मुहूर्त/u.test(c));
    if (kv.isFullyEclipsed) {
      notes.push(kv.statusTagHi || "⚠️ पूर्णतः वर्जित");
      return { displayHi: `${rawFallbackSpanHi} (${notes.join(" • ")})`, hasDosha: Boolean(doshaLabel) };
    }
    if (hardCollisions.length > 0 && kv.pureRemainingHi) {
      notes.push(`${hardCollisions.join("/")} मुक्त शुद्ध अवधि`);
      return {
        displayHi: `शुद्ध अवधि: ${kv.pureRemainingHi} (${notes.join(" • ")})`,
        hasDosha: Boolean(doshaLabel)
      };
    }
    if (kv.statusTagHi) {
      notes.push(kv.statusTagHi);
    }
    return {
      displayHi: `${rawFallbackSpanHi} (${notes.join(" • ")})`,
      hasDosha: Boolean(doshaLabel)
    };
  };
  const hasSrSarv = sarvSet.includes(nak0.index);
  const hasNxSarv = Boolean(nak1 && nak0.endTimestamp < nextSunriseTimestamp && sarvSet.includes(nak1.index));
  let sarvarthaSiddhiYoga;
  let sarvarthaHasGandmoolOrPanchak = false;
  if (hasSrSarv && hasNxSarv && nak1) {
    const built = buildSarvarthaPureFormatHi(
      sunriseTimestamp,
      nextSunriseTimestamp,
      [nak0, nak1],
      "paryant",
      `प्रातः ${srClock} (सूर्योदय) से अगले दिन सूर्योदय (${nextSrClock}) तक`
    );
    sarvarthaHasGandmoolOrPanchak = built.hasDosha;
    sarvarthaSiddhiYoga = built.displayHi;
  } else if (hasSrSarv) {
    const sEnd = Math.min(nextSunriseTimestamp, nak0.endTimestamp);
    const rawSpan = nak0.endTimestamp >= nextSunriseTimestamp ? `प्रातः ${srClock} (सूर्योदय) से अगले दिन सूर्योदय (${nextSrClock}) तक` : `प्रातः ${srClock} से ${firstNakEnd} तक`;
    const built = buildSarvarthaPureFormatHi(sunriseTimestamp, sEnd, [nak0], "paryant", rawSpan);
    sarvarthaHasGandmoolOrPanchak = built.hasDosha;
    sarvarthaSiddhiYoga = built.displayHi;
  } else if (hasNxSarv && nak1) {
    const built = buildSarvarthaPureFormatHi(
      nak0.endTimestamp,
      nextSunriseTimestamp,
      [nak1],
      "prarambh",
      `${firstNakEndAsRangeStart} से ${nextSrLabelRelativeToNakEnd} तक`
    );
    sarvarthaHasGandmoolOrPanchak = built.hasDosha;
    sarvarthaSiddhiYoga = built.displayHi;
  }
  let amritSiddhiYoga;
  let amritSiddhiHasGandmoolOrPanchak = false;
  const formatAmrExc = (idx, txt) => weekdayIndex === 2 && idx === 0 || weekdayIndex === 6 && idx === 3 ? `${txt} (यात्रा एवं विवाह वर्जित)` : txt;
  if (amrSet.includes(nak0.index)) {
    const aEnd = Math.min(nextSunriseTimestamp, nak0.endTimestamp);
    const rawSpan = nak0.endTimestamp >= nextSunriseTimestamp ? `प्रातः ${srClock} (सूर्योदय) से अगले दिन सूर्योदय (${nextSrClock}) तक` : `प्रातः ${srClock} से ${firstNakEnd} तक`;
    const built = buildSarvarthaPureFormatHi(sunriseTimestamp, aEnd, [nak0], "paryant", rawSpan);
    amritSiddhiHasGandmoolOrPanchak = built.hasDosha;
    amritSiddhiYoga = formatAmrExc(nak0.index, built.displayHi);
  } else if (nak1 && nak0.endTimestamp < nextSunriseTimestamp && amrSet.includes(nak1.index)) {
    const built = buildSarvarthaPureFormatHi(
      nak0.endTimestamp,
      nextSunriseTimestamp,
      [nak1],
      "prarambh",
      `${firstNakEndAsRangeStart} से ${nextSrLabelRelativeToNakEnd} तक`
    );
    amritSiddhiHasGandmoolOrPanchak = built.hasDosha;
    amritSiddhiYoga = formatAmrExc(nak1.index, built.displayHi);
  }
  let tripushkarYoga;
  let dwipushkarYoga;
  if ([0, 2, 6].includes(weekdayIndex)) {
    const triNaks = [2, 6, 11, 15, 20, 24];
    const dwiNaks = [4, 13, 22];
    const triW = [];
    const dwiW = [];
    for (const tiv of tithiIntervals) {
      if (![2, 7, 12].includes(tiv.withinPaksha)) continue;
      for (const niv of nakshatraIntervals) {
        const s = Math.max(sunriseTimestamp, tiv.startTimestamp, niv.startTimestamp);
        const e = Math.min(nextSunriseTimestamp, tiv.endTimestamp, niv.endTimestamp);
        if (e - s > 6e4) {
          const cleanNiv = cleanNakNameHi(niv.nameHi);
          const gmSuffix = GANDMOOL_NAKSHATRAS.includes(niv.index) ? " • गण्डमूल प्रभावी" : "";
          const wStr = `${formatWindowRangeInZoneHi(s, e, timeZone, dateKey)} (${tiv.pakshaShort} ${tiv.nameHi} व ${cleanNiv} नक्षत्र संयोग${gmSuffix})`;
          if (triNaks.includes(niv.index)) triW.push(wStr);
          else if (dwiNaks.includes(niv.index)) dwiW.push(wStr);
        }
      }
    }
    if (triW.length > 0) tripushkarYoga = triW.join(" • ");
    if (dwiW.length > 0) dwipushkarYoga = dwiW.join(" • ");
  }
  const combinedMeta = buildPrimaryAndCombinedFestivalMeta(occurrences);
  const primaryOcc = combinedMeta.primaryOccurrence;
  const festivalName = combinedMeta.combinedDisplayName;
  const festivalCategory = combinedMeta.primaryCategory;
  const paranaWindowText = occurrences.find((o) => o.paranaWindowTextHi)?.paranaWindowTextHi;
  const isPurnima = udayaTithi.tithiIndex === 15 || occurrences.some((o) => o.category === "purnima");
  const isAmavasya = udayaTithi.tithiIndex === 30 || occurrences.some((o) => o.category === "amavasya");
  const isEkadashi = udayaTithi.withinPaksha === 11 || occurrences.some((o) => o.category === "ekadashi");
  const isPradosh = udayaTithi.withinPaksha === 13 || occurrences.some((o) => o.category === "pradosh");
  const isChaturthi = udayaTithi.withinPaksha === 4;
  const isShivratri = udayaTithi.tithiIndex === 29 || occurrences.some((o) => o.festivalId.includes("shivaratri"));
  const sankrantiEvt = solarIngressesOnDay[0];
  const isSankranti = Boolean(sankrantiEvt) || suryaRashiResolved.hasTransition;
  const sankrantiName = sankrantiEvt?.sankrantiNameHi || suryaRashiResolved.sankrantiShortHi;
  const festivalDeity = primaryOcc ? primaryOcc.deityHi : vaarMeta.deity;
  const festivalMantra = primaryOcc ? primaryOcc.mantraSa : vaarMeta.mantra;
  const festivalMantraMeaning = primaryOcc ? primaryOcc.mantraMeaningHi : vaarMeta.mantraMeaning;
  const festivalDescription = primaryOcc ? primaryOcc.descriptionHi : `हिन्दू पंचांग के अनुसार ${day} ${HINDI_MONTH_SHORT[month - 1]} ${year} (${vaarInfo.full}) को ${lunarMasa.displayActiveHi} के ${udayaTithi.paksha} की ${fullTithiName} (${tithiEndTimeStr}) एवं ${finalNakshatra} (${nakshatraEndTimeStr}) का संयोग है। आज ${vaarMeta.deity} की उपासना व मंत्र जप कल्याणकारी है।`;
  const festivalPujaHint = primaryOcc ? primaryOcc.pujaHintHi : `प्रातःकाल स्नान कर ${vaarMeta.deity} के समक्ष घी का दीपक जलाएं एवं अभिजित / शुभ चौघड़िया मुहूर्त में संकल्प लें।`;
  const shubhMuhurats = [];
  const isChaturmas = lunarMasa.amantaMasaIndex === 4 || lunarMasa.amantaMasaIndex === 5 || lunarMasa.amantaMasaIndex === 6 || lunarMasa.amantaMasaIndex === 3 && udayaTithi.tithiIndex >= 11 && udayaTithi.tithiIndex <= 15 || lunarMasa.amantaMasaIndex === 7 && (udayaTithi.tithiIndex > 15 || udayaTithi.withinPaksha < 11);
  const isKharmaas = suryaRashiIdx === 8 || suryaRashiIdx === 11 || suryaRashiResolved.hasTransition && (suryaRashiResolved.endRashiIndex === 8 || suryaRashiResolved.endRashiIndex === 11);
  const isPitruPaksha = lunarMasa.purnimantaMasaIndex === 6 && udayaTithi.tithiIndex > 15;
  const isBhadraAtSunrise = finalKarana.includes("विष्टि");
  const astroSunrise = MakeTime(new Date(sunriseTimestamp));
  const astroNextDay = MakeTime(new Date(sunriseTimestamp + 864e5));
  const jupElongDeg = Math.abs(AngleFromSun(Body.Jupiter, astroSunrise));
  const venElongDeg = Math.abs(AngleFromSun(Body.Venus, astroSunrise));
  const venLon0 = Ecliptic(GeoVector(Body.Venus, astroSunrise, true)).elon;
  const venLon1 = Ecliptic(GeoVector(Body.Venus, astroNextDay, true)).elon;
  let venDailyStep = venLon1 - venLon0;
  if (venDailyStep > 180) venDailyStep -= 360;
  if (venDailyStep < -180) venDailyStep += 360;
  const isVenusRetro = venDailyStep < 0;
  const isGuruAsta = jupElongDeg < 11;
  const isShukraAsta = venElongDeg < (isVenusRetro ? 8 : 10);
  const isTaraAsta = isGuruAsta || isShukraAsta;
  const isShubhTithi = [2, 3, 5, 7, 10, 11, 12, 13].includes(udayaTithi.withinPaksha) && !isAmavasya && !isBhadraAtSunrise;
  const isDhanterasDay = occurrences.some((o) => o.festivalId === "dhanteras");
  const isDiwaliDay = occurrences.some((o) => o.festivalId === "diwali-lakshmi-puja");
  const cleanNak0Tag = cleanNakNameHi(nak0.nameHi);
  const nakWindowBase = nak0.endTimestamp >= nextSunriseTimestamp ? `${cleanNak0Tag} नक्षत्र पर्यन्त` : `${cleanNak0Tag} नक्षत्र: ${firstNakEnd} तक`;
  const nakWindowTag = GANDMOOL_NAKSHATRAS.includes(nak0.index) ? `${nakWindowBase} • गण्डमूल प्रभावी` : nakWindowBase;
  const PURCHASE_NAKSHATRAS = [3, 4, 6, 7, 11, 12, 13, 14, 16, 20, 21, 22, 23, 25];
  let nonGandmoolDaytimeMs = 0;
  for (const niv of nakshatraIntervals) {
    if (GANDMOOL_NAKSHATRAS.includes(niv.index)) continue;
    const ovStart = Math.max(sunriseTimestamp, niv.startTimestamp);
    const ovEnd = Math.min(sunsetTimestamp, niv.endTimestamp);
    if (ovEnd > ovStart) nonGandmoolDaytimeMs += ovEnd - ovStart;
  }
  const isFullDayGandmoolBlocked = isGandmool && nonGandmoolDaytimeMs < 30 * 6e4;
  const rahuLonAtSunrise = getNodeLongitudesDeg(
    sunriseTimestamp,
    record.config.ayanamsha,
    record.config.nodeMode
  ).rahuDeg;
  const indiaEclipse = resolveIndiaEclipseForDate({
    dateKey,
    year,
    isPurnima,
    isAmavasya,
    sunLonDeg: record.sunSiderealDegAtSunrise,
    moonLonDeg: record.moonSiderealDegAtSunrise,
    rahuLonDeg: rahuLonAtSunrise
  });
  const isVerifiedEclipseDay = Boolean(indiaEclipse?.isVerifiedIndiaVisible);
  const isAdhikMasaDay = Boolean(lunarMasa.isAdhikaMasa);
  let vahanPurchaseMuhurat;
  let isVahanGandmoolBlocked = false;
  let vahanBlockShortLabel = "वाहन/प्रॉपर्टी क्रय";
  let isVahanBlockedAny = false;
  if (isVerifiedEclipseDay) {
    isVahanBlockedAny = true;
    vahanBlockShortLabel = "क्रय वर्जित (ग्रहण)";
    vahanPurchaseMuhurat = ECLIPSE_VAHAN_PROHIBITED_HI;
  } else if (isAdhikMasaDay) {
    isVahanBlockedAny = true;
    vahanBlockShortLabel = "क्रय वर्जित (अधिक मास)";
    vahanPurchaseMuhurat = ADHIK_MASA_VAHAN_PROHIBITED_HI;
  } else if (!isPitruPaksha) {
    const subtractMsRanges = (base, cut) => {
      if (!cut) return base;
      const [bS, bE] = cut;
      const next = [];
      for (const [cS, cE] of base) {
        if (bE <= cS || bS >= cE) next.push([cS, cE]);
        else {
          if (bS - cS >= 10 * 6e4) next.push([cS, bS]);
          if (cE - bE >= 10 * 6e4) next.push([bE, cE]);
        }
      }
      return next;
    };
    const validRanges = [];
    for (const tiv of tithiIntervals) {
      for (const niv of nakshatraIntervals) {
        if (GANDMOOL_NAKSHATRAS.includes(niv.index)) continue;
        if (!PURCHASE_NAKSHATRAS.includes(niv.index)) continue;
        const sMs = Math.max(sunriseTimestamp, tiv.startTimestamp, niv.startTimestamp);
        const eMs = Math.min(nextSunriseTimestamp, tiv.endTimestamp, niv.endTimestamp);
        if (eMs - sMs < 15 * 6e4) continue;
        const prohibited = [4, 9, 14].includes(tiv.withinPaksha) || tiv.tithiIndex === 30 || tiv.tithiIndex === 21 || tiv.tithiIndex === 23;
        if (prohibited && !sarvSet.includes(niv.index)) continue;
        let slices = [[sMs, eMs]];
        slices = subtractMsRanges(slices, bhadraIntervalMs);
        for (const gmSpan of gandmoolSpansMs) {
          slices = subtractMsRanges(slices, gmSpan);
        }
        slices = subtractMsRanges(slices, panchakSpanMs);
        for (const [vS, vE] of slices) {
          if (vE - vS >= 15 * 6e4) {
            const prev = validRanges[validRanges.length - 1];
            if (prev && Math.abs(prev.endMs - vS) < 12e4) {
              prev.endMs = vE;
              if (!prev.naks.includes(niv.nameHi)) prev.naks.push(niv.nameHi);
            } else {
              validRanges.push({ startMs: vS, endMs: vE, naks: [niv.nameHi] });
            }
          }
        }
      }
    }
    const GANDMOOL_VAHAN_PROHIBITED_HI = `⚠️ पूर्णतः वर्जित (गण्डमूल नक्षत्र व्याप्त) — ${GANDMOOL_PROHIBITIONS_HI}।`;
    const PANCHAK_VAHAN_PROHIBITED_HI = `⚠️ पूर्णतः वर्जित (पंचक व्याप्त) — ${PANCHAK_PROHIBITIONS_HI}।`;
    const hasActiveGandmoolToday = Boolean(gandmoolNakshatra);
    const hasActivePanchakToday = Boolean(panchakSpanMs);
    const lateGandmoolOnsetMs = gandmoolSpansMs.find(([gS]) => gS > sunriseTimestamp + 15 * 6e4)?.[0] ?? null;
    const latePanchakOnsetMs = panchakSpanMs && panchakSpanMs[0] > sunriseTimestamp + 15 * 6e4 ? panchakSpanMs[0] : null;
    if (validRanges.length > 0) {
      const p0 = validRanges[0];
      const vStartR = roundSecMs(p0.startMs);
      const vEndR = roundSecMs(p0.endMs);
      const vahanKV = evaluateKalVedhaForWindow(
        "vahanPurchase",
        "वाहन/प्रॉपर्टी क्रय मुहूर्त",
        toSec(vStartR),
        toSec(vEndR),
        masterInauspiciousWindows,
        timeZone,
        dateKey,
        { minPureSec: 600, includeNextDayPrefix: true, excludeIds: ["gandmool", "panchak"] }
      );
      kalVedhaReport.vahanPurchase = vahanKV;
      const isNightOnlyPurchase = p0.startMs >= sunsetTimestamp;
      const vahanMeta = [`${p0.naks.join(" व ")} नक्षत्र`];
      if (isNightOnlyPurchase) {
        vahanMeta.push("केवल अत्यावश्यक होने पर");
      }
      const hardCols = vahanKV.collidingNamesHi.filter((c) => /राहुकाल|यमगण्ड|दुर्मुहूर्त/u.test(c));
      if (vahanKV.isFullyEclipsed) {
        isVahanBlockedAny = true;
        vahanBlockShortLabel = `क्रय वर्जित (${vahanKV.collidingNamesHi.join("/")})`;
        vahanMeta.push(vahanKV.statusTagHi || "⚠️ पूर्णतः वर्जित");
      } else if (hardCols.length > 0 && vahanKV.pureRemainingHi) {
        vahanMeta.push(`${hardCols.join("/")} मुक्त शुद्ध अवधि`);
      } else if (vahanKV.statusTagHi) {
        vahanMeta.push(vahanKV.statusTagHi);
      }
      if (lateGandmoolOnsetMs !== null) {
        vahanMeta.push(
          `${formatGandmoolBoundaryHi(lateGandmoolOnsetMs)} से गण्डमूल प्रारंभ होने के बाद क्रय वर्जित`
        );
      }
      if (latePanchakOnsetMs !== null) {
        vahanMeta.push(
          `${formatGandmoolBoundaryHi(latePanchakOnsetMs)} से पंचक प्रारंभ होने के बाद क्रय वर्जित`
        );
      }
      if (isSankranti) {
        vahanMeta.push(
          panchakKaal && panchakKaal !== "आज पंचक नहीं" ? "संक्रांति पुण्यकाल में दान-पुण्य विशेष फलदायी • पंचक में दक्षिण दिशा यात्रा व वर्जित कार्य टालें" : "संक्रांति पुण्यकाल में दान-पुण्य विशेष फलदायी"
        );
      }
      const displaySpanHi = !vahanKV.isFullyEclipsed && hardCols.length > 0 && vahanKV.pureRemainingHi ? `शुद्ध अवधि: ${vahanKV.pureRemainingHi}` : vahanKV.originalWindowHi;
      vahanPurchaseMuhurat = `${displaySpanHi} (${vahanMeta.join(" • ")})`;
    } else if (hasActiveGandmoolToday) {
      isVahanGandmoolBlocked = true;
      isVahanBlockedAny = true;
      vahanBlockShortLabel = "क्रय वर्जित (गण्डमूल)";
      vahanPurchaseMuhurat = GANDMOOL_VAHAN_PROHIBITED_HI;
    } else if (hasActivePanchakToday) {
      isVahanBlockedAny = true;
      vahanBlockShortLabel = "क्रय वर्जित (पंचक)";
      vahanPurchaseMuhurat = PANCHAK_VAHAN_PROHIBITED_HI;
    }
  }
  if (isDhanterasDay && !isVerifiedEclipseDay) {
    shubhMuhurats.push(
      { id: "vahan", label: "धनतेरस अबूझ खरीदारी मुहूर्त (स्वर्ण-चांदी, बर्तन, वाहन क्रय)", shortLabel: "धनतेरस खरीदारी", icon: "ratna" },
      { id: "sarvartha_siddhi", label: "धन्वन्तरि-कुबेर-लक्ष्मी पूजन एवं प्रदोष शुभ संयोग", shortLabel: "धन्वन्तरि पूजन योग", icon: "diya" }
    );
  } else if (isDiwaliDay && !isVerifiedEclipseDay) {
    shubhMuhurats.push({
      id: "sarvartha_siddhi",
      label: "श्री महालक्ष्मी-गणेश-कुबेर पूजन एवं बही-खाता मुहूर्त",
      shortLabel: "लक्ष्मी पूजन मुहूर्त",
      icon: "diya"
    });
  } else {
    const activeNak = nak0.index;
    const isVivahNak = [3, 4, 9, 11, 12, 14, 16, 18, 20, 25, 26].includes(activeNak);
    const isGrihaNak = !GANDMOOL_NAKSHATRAS.includes(activeNak) && [3, 4, 11, 13, 16, 20, 22, 23, 25].includes(activeNak) && Math.min(nextSunriseTimestamp, nak0.endTimestamp) - sunriseTimestamp >= 30 * 6e4;
    const NAMAKARAN_ANNAPRASHAN_NAKS = [3, 4, 6, 7, 11, 12, 13, 14, 16, 20, 21, 22, 23, 25];
    const isNamakaranNak = NAMAKARAN_ANNAPRASHAN_NAKS.includes(activeNak);
    const isNamakaranTithi = [1, 2, 3, 5, 6, 7, 10, 11, 12, 13].includes(udayaTithi.withinPaksha) && udayaTithi.tithiIndex <= 28 && !isAmavasya && !isBhadraAtSunrise && !isSankranti;
    const MUNDAN_NAKS = [0, 4, 6, 7, 12, 13, 14, 21, 22, 23, 26];
    const isMundanNak = MUNDAN_NAKS.includes(activeNak);
    if (!isVerifiedEclipseDay && !isAdhikMasaDay && !isChaturmas && !isTaraAsta && !isKharmaas && !isPitruPaksha && !isEkadashi && !isPurnima && udayaTithi.tithiIndex <= 25 && isShubhTithi && isVivahNak && [0, 1, 3, 4, 5].includes(weekdayIndex)) {
      shubhMuhurats.push({ id: "vivah", label: `शुभ विवाह एवं सगाई मुहूर्त (${nakWindowTag})`, shortLabel: "विवाह मुहूर्त", icon: "vivah" });
    }
    if (!isVerifiedEclipseDay && !isAdhikMasaDay && !isChaturmas && !isTaraAsta && !isKharmaas && !isPitruPaksha && !isEkadashi && udayaTithi.tithiIndex <= 25 && isShubhTithi && isGrihaNak && !isFullDayGandmoolBlocked && [1, 3, 4, 5, 6].includes(weekdayIndex)) {
      shubhMuhurats.push({ id: "griha_pravesh", label: `गृह प्रवेश एवं वास्तु पूजन मुहूर्त (${nakWindowTag})`, shortLabel: "गृह प्रवेश", icon: "home" });
    }
    if (!isVerifiedEclipseDay && !isPitruPaksha && isNamakaranTithi && isNamakaranNak && !isGandmool && [0, 1, 3, 4, 5].includes(weekdayIndex)) {
      shubhMuhurats.push({ id: "sanskar", label: `नामकरण एवं अन्नप्राशन संस्कार मुहूर्त (${nakWindowTag})`, shortLabel: "नामकरण/अन्नप्राशन", icon: "baby" });
    }
    if (!isVerifiedEclipseDay && !isAdhikMasaDay && !isChaturmas && !isTaraAsta && !isKharmaas && !isPitruPaksha && !isEkadashi && udayaTithi.tithiIndex <= 25 && [2, 3, 5, 7, 10, 12].includes(udayaTithi.withinPaksha) && !isBhadraAtSunrise && isMundanNak && [1, 3, 4, 5].includes(weekdayIndex)) {
      shubhMuhurats.push({ id: "mundan", label: `मुंडन (चूड़ाकरण) संस्कार मुहूर्त (${nakWindowTag})`, shortLabel: "मुंडन संस्कार", icon: "baby" });
    }
    if (vahanPurchaseMuhurat) {
      shubhMuhurats.push({
        id: "vahan",
        label: `वाहन, स्वर्ण एवं प्रॉपर्टी क्रय मुहूर्त: ${vahanPurchaseMuhurat}`,
        shortLabel: isVahanBlockedAny ? vahanBlockShortLabel : isVahanGandmoolBlocked ? "क्रय वर्जित (गण्डमूल)" : "वाहन/प्रॉपर्टी क्रय",
        icon: isVahanBlockedAny ? "warning" : "vahan"
      });
    }
    if (!isPitruPaksha && (sarvarthaSiddhiYoga || amritSiddhiYoga)) {
      const yTitle = sarvarthaSiddhiYoga && amritSiddhiYoga ? "सर्वार्थ सिद्धि एवं अमृत सिद्धि योग" : sarvarthaSiddhiYoga ? "सर्वार्थ सिद्धि योग" : "अमृत सिद्धि योग";
      const yWin = sarvarthaSiddhiYoga || amritSiddhiYoga || "";
      const isDoshaRestricted = sarvarthaHasGandmoolOrPanchak || amritSiddhiHasGandmoolOrPanchak;
      const alreadyHasClarification = yWin.includes("बाधित —");
      shubhMuhurats.push({
        id: "sarvartha_siddhi",
        label: isDoshaRestricted && !alreadyHasClarification ? `${yTitle} (${isGandmool && isPanchak ? "गण्डमूल/पंचक" : isGandmool ? "गण्डमूल" : "पंचक"} बाधित — विवाह, मुंडन व नवीन क्रय वर्जित; केवल मंत्र-जप, दान व साधना हेतु ग्राह्य): ${yWin}` : `${yTitle}: ${yWin}`,
        shortLabel: isDoshaRestricted ? `${yTitle} (बाधित)` : yTitle,
        icon: isDoshaRestricted ? "warning" : "sparkles"
      });
    }
    if (!isPitruPaksha && tripushkarYoga) {
      shubhMuhurats.push({ id: "vyapar", label: `त्रिपुष्कर योग (तीन गुना फलदायी शुभ योग): ${tripushkarYoga}`, shortLabel: "त्रिपुष्कर योग", icon: "trishul" });
    } else if (!isPitruPaksha && dwipushkarYoga) {
      shubhMuhurats.push({ id: "vyapar", label: `द्विपुष्कर योग (दोगुना फलदायी शुभ योग): ${dwipushkarYoga}`, shortLabel: "द्विपुष्कर योग", icon: "trishul" });
    }
  }
  const DAY_CHOG_TYPES = {
    0: ["udveg", "char", "labh", "amrit", "kaal", "shubh", "rog", "udveg"],
    1: ["amrit", "kaal", "shubh", "rog", "udveg", "char", "labh", "amrit"],
    2: ["rog", "udveg", "char", "labh", "amrit", "kaal", "shubh", "rog"],
    3: ["labh", "amrit", "kaal", "shubh", "rog", "udveg", "char", "labh"],
    4: ["shubh", "rog", "udveg", "char", "labh", "amrit", "kaal", "shubh"],
    5: ["char", "labh", "amrit", "kaal", "shubh", "rog", "udveg", "char"],
    6: ["kaal", "shubh", "rog", "udveg", "char", "labh", "amrit", "kaal"]
  };
  const NIGHT_CHOG_TYPES = {
    0: ["shubh", "amrit", "char", "rog", "kaal", "labh", "udveg", "shubh"],
    1: ["char", "rog", "kaal", "labh", "udveg", "shubh", "amrit", "char"],
    2: ["kaal", "labh", "udveg", "shubh", "amrit", "char", "rog", "kaal"],
    3: ["udveg", "shubh", "amrit", "char", "rog", "kaal", "labh", "udveg"],
    4: ["amrit", "char", "rog", "kaal", "labh", "udveg", "shubh", "amrit"],
    5: ["rog", "kaal", "labh", "udveg", "shubh", "amrit", "char", "rog"],
    6: ["labh", "udveg", "shubh", "amrit", "char", "rog", "kaal", "labh"]
  };
  const MEANINGS = {
    amrit: { hindiName: "अमृत", meaning: "सर्वश्रेष्ठ शुभ (पूजा, संकल्प एवं सभी कार्यों हेतु)" },
    shubh: { hindiName: "शुभ", meaning: "मांगलिक व धार्मिक कार्यों हेतु अति उत्तम" },
    labh: { hindiName: "लाभ", meaning: "व्यापार, धन निवेश व विद्या प्रारंभ हेतु श्रेष्ठ" },
    char: { hindiName: "चल", meaning: "यात्रा, वाहन एवं गतिशील कार्यों हेतु उत्तम" },
    udveg: { hindiName: "उद्वेग", meaning: "अशुभ (सरकारी कार्य छोड़ कर नया कार्य टालें)" },
    kaal: { hindiName: "काल", meaning: "अशुभ / वर्जित (नया कार्य या यात्रा प्रारंभ न करें)" },
    rog: { hindiName: "रोग", meaning: "अशुभ (स्वास्थ्य व मांगलिक कार्य हेतु वर्जित)" }
  };
  const dayChoghadiyaBoundsMs = [];
  const dayChoghadiya = (DAY_CHOG_TYPES[weekdayIndex] || DAY_CHOG_TYPES[0]).map(
    (type, idx) => {
      const partNum = idx + 1;
      const roundedStartMs = dayBoundaryRoundedMs[idx];
      const roundedEndMs = dayBoundaryRoundedMs[idx + 1];
      dayChoghadiyaBoundsMs.push([roundedStartMs, roundedEndMs]);
      const kaalBadge = partNum === rSeg ? "राहुकाल" : partNum === ySeg ? "यमगण्ड" : partNum === gSeg ? "गुलिक काल" : void 0;
      const isAuspiciousChog = type === "amrit" || type === "shubh" || type === "labh" || type === "char";
      const baseTime = formatWindowRangeInZoneHi(roundedStartMs, roundedEndMs, timeZone, dateKey);
      const exactTimeBase = baseTime;
      const safeTimeBase = baseTime;
      let timeWithWarning = baseTime;
      let exactTimeWithWarning = exactTimeBase;
      let safeTimeWithWarning = safeTimeBase;
      let meaningWithWarning = MEANINGS[type].meaning;
      let isKaalEclipsed = false;
      let eclipsedByHi;
      if (partNum === rSeg) {
        const suffix = " (राहुकाल युक्त — वर्जित)";
        timeWithWarning = `${baseTime}${suffix}`;
        exactTimeWithWarning = `${exactTimeBase}${suffix}`;
        safeTimeWithWarning = `${safeTimeBase}${suffix}`;
        meaningWithWarning = `${MEANINGS[type].meaning} •${suffix}`;
        isKaalEclipsed = true;
        eclipsedByHi = "राहुकाल";
      } else if (partNum === ySeg) {
        const suffix = " (यमगण्ड युक्त — वर्जित)";
        timeWithWarning = `${baseTime}${suffix}`;
        exactTimeWithWarning = `${exactTimeBase}${suffix}`;
        safeTimeWithWarning = `${safeTimeBase}${suffix}`;
        meaningWithWarning = `${MEANINGS[type].meaning} •${suffix}`;
        isKaalEclipsed = true;
        eclipsedByHi = "यमगण्ड";
      } else {
        const durOv = buildDurmuhurtaPartialOverlapNote(roundedStartMs, roundedEndMs);
        if (durOv) {
          const suffix = ` (${durOv})`;
          timeWithWarning = `${baseTime}${suffix}`;
          exactTimeWithWarning = `${exactTimeBase}${suffix}`;
          safeTimeWithWarning = `${safeTimeBase}${suffix}`;
          meaningWithWarning = `${MEANINGS[type].meaning} •${suffix}`;
          const dOvMs = Math.min(roundedEndMs, durMuhurtaEndRoundedMs) - Math.max(roundedStartMs, durMuhurtaStartRoundedMs);
          if (dOvMs >= 1e3) {
            isKaalEclipsed = true;
            eclipsedByHi = "दुर्मुहूर्त";
          }
        } else if (isAuspiciousChog && partNum === gSeg) {
          meaningWithWarning = `${MEANINGS[type].meaning} • (गुलिक काल युक्त — ${gulikaKaalLabelHi})`;
        }
      }
      return {
        name: type,
        hindiName: MEANINGS[type].hindiName,
        type,
        time: timeWithWarning,
        exactTimeWithSeconds: exactTimeWithWarning,
        safeShareTime: safeTimeWithWarning,
        startMs: roundedStartMs,
        endMs: roundedEndMs,
        meaning: meaningWithWarning,
        partIndex: partNum,
        kaalBadge,
        isKaalEclipsed,
        eclipsedByHi
      };
    }
  );
  const compactChogTime = (raw) => (raw || "").replace(/सुबह |प्रातः |पूर्वाह्न |दोपहर |सायं |शाम |रात्रि |मध्यरात्रि /gu, "").trim();
  const eclipsedDayChogEntries = dayChoghadiya.filter((c) => c.isKaalEclipsed).map((c) => `${c.hindiName}: ${compactChogTime(c.safeShareTime || c.time)}`);
  const eclipsedChoghadiyaLineHi = eclipsedDayChogEntries.length > 0 ? `राहुकाल/यमगण्ड बाधित (त्याज्य) चौघड़िया: ${eclipsedDayChogEntries.join(", ")}` : void 0;
  const pureAshubhDayChoghadiyaLineHi = dayChoghadiya.filter((c) => ["rog", "kaal", "udveg"].includes(c.type) && !c.isKaalEclipsed).map((c) => `${c.hindiName}: ${compactChogTime(c.safeShareTime || c.time)}`).join(", ");
  const nightSegMs = (k) => sunsetTimestamp + k * nightPartMs;
  const nightBoundaryRoundedMs = Array.from(
    { length: 9 },
    (_, k) => roundSecMs(nightSegMs(k))
  );
  const nightChoghadiyaBoundsMs = [];
  const nightChoghadiya = (NIGHT_CHOG_TYPES[weekdayIndex] || NIGHT_CHOG_TYPES[0]).map(
    (type, idx) => {
      const roundedStartMs = nightBoundaryRoundedMs[idx];
      const roundedEndMs = nightBoundaryRoundedMs[idx + 1];
      nightChoghadiyaBoundsMs.push([roundedStartMs, roundedEndMs]);
      const baseTime = formatWindowRangeInZoneHi(roundedStartMs, roundedEndMs, timeZone, dateKey);
      return {
        name: type,
        hindiName: MEANINGS[type].hindiName,
        type,
        time: baseTime,
        exactTimeWithSeconds: baseTime,
        safeShareTime: baseTime,
        startMs: roundedStartMs,
        endMs: roundedEndMs,
        meaning: MEANINGS[type].meaning,
        partIndex: idx + 1
      };
    }
  );
  const pureAshubhNightChoghadiyaLineHi = nightChoghadiya.filter((c) => ["rog", "kaal", "udveg"].includes(c.type)).map((c) => `${c.hindiName}: ${compactChogTime(c.safeShareTime || c.time)}`).join(", ");
  const exactEpochsMs = {
    sunriseMs: displayedSunriseRoundedMs,
    sunsetMs: displayedSunsetRoundedMs,
    nextSunriseMs: displayedNextSunriseRoundedMs,
    dinamanaMs: dinamanaDisplayMs,
    ratrimanaMs: ratrimanaDisplayMs,
    muhurtaMs,
    dayPartMs,
    nightPartMs,
    abhijitStartMs: abhijitStartRoundedMs,
    abhijitEndMs: abhijitEndRoundedMs,
    pureAbhijitSpansMs: finalPureAbhijitSpansMs,
    rahukaalStartMs: rStartRoundedMs,
    rahukaalEndMs: rEndRoundedMs,
    yamagandamStartMs: yStartRoundedMs,
    yamagandamEndMs: yEndRoundedMs,
    gulikaStartMs: gStartRoundedMs,
    gulikaEndMs: gEndRoundedMs,
    brahmaStartMs,
    brahmaEndMs,
    vijayStartMs: vijayStartRoundedMs,
    vijayEndMs: vijayEndRoundedMs,
    godhuliStartMs,
    godhuliEndMs,
    bhadraStartMs: bhadraFullBoundsMs ? bhadraFullBoundsMs[0] : null,
    bhadraEndMs: bhadraFullBoundsMs ? bhadraFullBoundsMs[1] : null,
    bhadraMukhaStartMs: bhadraMukhaBoundsMs ? bhadraMukhaBoundsMs[0] : null,
    bhadraMukhaEndMs: bhadraMukhaBoundsMs ? bhadraMukhaBoundsMs[1] : null,
    bhadraPuchhaStartMs: bhadraPuchhaBoundsMs ? bhadraPuchhaBoundsMs[0] : null,
    bhadraPuchhaEndMs: bhadraPuchhaBoundsMs ? bhadraPuchhaBoundsMs[1] : null,
    dayChoghadiyaBoundsMs,
    nightChoghadiyaBoundsMs
  };
  const exactSecondsDisplay = {
    sunrise: formatEpochExactSecondsInZoneHi(displayedSunriseRoundedMs, timeZone, dateKey, false),
    sunset: formatEpochExactSecondsInZoneHi(displayedSunsetRoundedMs, timeZone, dateKey, false),
    dinamana: dinamanaFormatted,
    ratrimana: ratrimanaFormatted,
    ashtamaamsaDuration: formatDurationExactSecondsHi(dayPartMs),
    abhijitFull: abhijitExactFullWindow,
    abhijitPure: abhijitConflict.exactPureRemainingWindowHi ?? null,
    rahuKaal,
    yamagandam,
    gulikaKaal: gulikaBase,
    brahmaMuhurat: brahmaBase,
    vijayMuhurat: vijayBase,
    godhuliMuhurat: godhuliBase,
    bhadraWindow: bhadraDisplayWindowHi,
    bhadraMukha: bhadraMukhaDisplayHi,
    bhadraPuchha: bhadraPuchhaDisplayHi
  };
  const shastriyaSafeDisplay = {
    abhijitFull: abhijitFullWindow,
    abhijitPure: abhijitConflict.pureRemainingWindowHi ?? null,
    rahuKaal,
    yamagandam,
    gulikaKaal: gulikaBase,
    brahmaMuhurat: brahmaBase,
    vijayMuhurat: vijayBase,
    godhuliMuhurat: godhuliBase,
    bhadraWindow: bhadraDisplayWindowHi,
    bhadraMukha: bhadraMukhaDisplayHi,
    bhadraPuchha: bhadraPuchhaDisplayHi
  };
  const pureShreshtha = resolveBhadraRahuFreeShreshthaSamay({
    sunrise: timings.sunriseClockHi,
    sunset: timings.sunsetClockHi,
    sunriseISTHours: timings.sunriseContinuousHours,
    sunsetISTHours: timings.sunsetContinuousHours,
    rahuKaal,
    yamagandam,
    bhadraKaal,
    bhadraVaas,
    abhijitMuhurat,
    vijayMuhurat,
    weekdayIndex,
    dayChoghadiya
  });
  const { ayana, ritu } = resolveVedicAyanaAndRitu(
    sunriseTimestamp,
    lunarMasa.amantaMasaIndex,
    record.config.ayanamsha
  );
  const sayanaMeta = resolveTropicalAyanaAndRitu(sunriseTimestamp);
  const ayanaRituBasisNoteHi = sayanaMeta.ayana !== ayana || sayanaMeta.ritu !== ritu ? `निरयण अयन व सौरमान आधारित षड्-ऋतु • दृक् सायन: ${sayanaMeta.ritu} (${sayanaMeta.ayana})` : "निरयण अयन व सौरमान आधारित षड्-ऋतु (दृक् सायन के अनुरूप)";
  return {
    dateObj,
    year,
    month,
    day,
    dateKey,
    weekdayIndex,
    vaarHindi: vaarInfo.full,
    vaarShort: vaarInfo.short,
    formattedDateHindi: `${day} ${HINDI_MONTH_SHORT[month - 1]} ${year}`,
    isCurrentMonth,
    isToday,
    vikramSamvat: lunarMasa.vikramSamvat,
    shakaSamvat: lunarMasa.shakaSamvat,
    samvatsarName: lunarMasa.vikramSamvatsarName,
    vikramSamvatsarName: lunarMasa.vikramSamvatsarName,
    shakaSamvatsarName: lunarMasa.shakaSamvatsarName,
    southIndianSamvatsarName: lunarMasa.southIndianSamvatsarName,
    hinduMaas: lunarMasa.displayActiveHi,
    paksha: udayaTithi.paksha,
    pakshaShort: udayaTithi.pakshaShort,
    tithiIndex: udayaTithi.tithiIndex,
    tithiName: fullTithiName,
    tithiShort: tithiShortStr,
    tithiEndTime: tithiEndTimeStr,
    nakshatra: finalNakshatra,
    nakshatraEndTime: nakshatraEndTimeStr,
    yoga: finalYoga,
    yogaEndTime: yogaEndTimeStr,
    karana: finalKarana,
    karanaEndTime: karanaEndTimeStr,
    chandraRashi,
    suryaRashi,
    suryaNakshatra,
    ritu,
    ayana,
    sayanaRitu: sayanaMeta.ritu,
    sayanaAyana: sayanaMeta.ayana,
    ayanaRituBasisNoteHi,
    panchakStartVaarHi,
    sunrise: timings.sunriseClockHi,
    sunset: timings.sunsetClockHi,
    moonrise: timings.moonriseClockHi,
    moonset: timings.moonsetClockHi,
    brahmaMuhurat,
    abhijitMuhurat,
    abhijitFullWindow,
    abhijitConflict,
    amritKaal,
    vijayMuhurat,
    godhuliMuhurat,
    nishithaMuhurat,
    durMuhurta,
    varjyam,
    sarvarthaSiddhiYoga,
    amritSiddhiYoga,
    tripushkarYoga,
    dwipushkarYoga,
    rahuKaal,
    yamagandam,
    gulikaKaal,
    gulikaDurmuhurtaOverlapHi,
    bhadraKaal,
    panchakKaal,
    gandmoolNakshatra,
    isGandmool,
    isPanchak,
    isChaturmas,
    isGuruAsta,
    isShukraAsta,
    isTaraAsta,
    sankrantiName,
    vahanPurchaseMuhurat,
    dinamanaFormatted,
    ratrimanaFormatted,
    ashtamaamsaDurationFormatted,
    rahuKaalPart: rSeg,
    yamagandamPart: ySeg,
    gulikaKaalPart: gSeg,
    dishaShool: vaarMeta.dishaShool,
    dishaShoolRemedy: vaarMeta.dishaShoolRemedy,
    isPurnima,
    isAmavasya,
    isEkadashi,
    isPradosh,
    isChaturthi,
    isShivratri,
    isSankranti,
    festivalName,
    festivalCategory,
    festivalDescription,
    festivalDeity,
    festivalMantra,
    festivalMantraMeaning,
    festivalPujaHint,
    festivalOccurrences: occurrences,
    tithiIntervals,
    kshayaTithis,
    vriddhiTithiInfo: vriddhiTithi,
    lunarMasaInfo: lunarMasa,
    tradition: record.config.tradition,
    sampradaya: record.config.sampradaya,
    paranaWindowText,
    dailyPanchang: record,
    shubhMuhurats,
    dayChoghadiya,
    nightChoghadiya,
    dayHora,
    nightHora,
    locationName: resolveHindiCityDisplayName(record.location),
    coordinatesLabel: `${Math.abs(record.location.lat).toFixed(4)}°${record.location.lat >= 0 ? "N" : "S"}, ${Math.abs(record.location.lon).toFixed(4)}°${record.location.lon >= 0 ? "E" : "W"}`,
    timezoneShortLabel: timeZone === "Asia/Kolkata" ? "IST" : (() => {
      try {
        const p = new Intl.DateTimeFormat("en-US", {
          timeZone,
          timeZoneName: "short"
        }).formatToParts(new Date(sunriseTimestamp)).find((x) => x.type === "timeZoneName")?.value;
        if (p && /^(MDT|EDT|CDT|PDT)$/.test(p)) {
          return `${p} (US Daylight Saving Time सक्रिय)`;
        }
        return p || timeZone;
      } catch {
        return timeZone;
      }
    })(),
    regionalTraditionBadgeHi: record.config.tradition === "AMANTA" ? "अमांत परंपरा • शालिवाहन शक" : "पूर्णिमांत परंपरा • उत्तर भारतीय विक्रम संवत",
    sunriseISTHours: Number(timings.sunriseContinuousHours.toFixed(4)),
    sunsetISTHours: Number(timings.sunsetContinuousHours.toFixed(4)),
    chandraRashiMeta,
    bhadraVaas,
    exactEpochsMs,
    exactSecondsDisplay,
    shastriyaSafeDisplay,
    shreshthaSamay: pureShreshtha.detailedBestTime,
    choghadiyaFreeSummary: pureShreshtha.choghadiyaFreeSummary,
    observanceProfile: classifyRegionalObservanceProfile(record.location),
    observanceDivergence: computeObservanceDivergenceSummary(record, record.location, occurrences),
    ...(() => {
      const obsProfile = classifyRegionalObservanceProfile(record.location);
      const isKartikadiGujarati = obsProfile.vikramSamvatStart === "kartika";
      const kartikadiInfo = isKartikadiGujarati ? resolveKartikadiVikramSamvat(lunarMasa.vikramSamvat, lunarMasa.amantaMasaIndex) : { vikramSamvat: lunarMasa.vikramSamvat };
      const dailyLagnaTable = computeDailyLagnaTable(
        sunriseTimestamp,
        nextSunriseTimestamp,
        record.location,
        dateKey,
        record.config.ayanamsha
      );
      let sankrantiIngressTimeHi;
      let sankrantiPunyaKaalHi;
      let sankrantiMahaPunyaKaalHi;
      if (isSankranti) {
        if (sankrantiEvt) {
          sankrantiIngressTimeHi = sankrantiEvt.ingressFormattedHi;
          sankrantiPunyaKaalHi = sankrantiEvt.punyaKaalWindow?.labelHi;
          sankrantiMahaPunyaKaalHi = sankrantiEvt.mahaPunyaKaalWindow?.labelHi;
        }
        if (!sankrantiPunyaKaalHi) {
          const morningEndMs = Math.min(displayedSunsetRoundedMs, displayedSunriseRoundedMs + 16 * 24 * 6e4);
          sankrantiPunyaKaalHi = `${formatWindowRangeInZoneHi(displayedSunriseRoundedMs, morningEndMs, timeZone, dateKey)} (निर्णयसिंधु: रात्रि/प्रातः संक्रांति — सायं अथवा अगले सूर्योदय से पुण्यकाल)`;
        }
      }
      let diwaliPradoshKaalHi;
      let diwaliVrishabhaLagnaHi;
      if (isDiwaliDay) {
        const pradoshStartMs = displayedSunsetRoundedMs;
        const pradoshEndMs = displayedSunsetRoundedMs + 144 * 6e4;
        diwaliPradoshKaalHi = formatWindowRangeInZoneHi(pradoshStartMs, pradoshEndMs, timeZone, dateKey);
        const vrishabhaSlots = dailyLagnaTable.filter((slot) => slot.rashiIndex === 1);
        const bestVrishabha = vrishabhaSlots.find(
          (slot) => slot.endTimestamp > pradoshStartMs && slot.startTimestamp < pradoshEndMs + 3 * 36e5
        ) || vrishabhaSlots[0];
        if (bestVrishabha) {
          diwaliVrishabhaLagnaHi = bestVrishabha.timeRangeHi;
        }
      }
      return {
        vikramSamvatStart: obsProfile.vikramSamvatStart,
        effectiveVikramSamvat: kartikadiInfo.vikramSamvat,
        isKartikadiGujarati,
        kartikadiFootnoteHi: isKartikadiGujarati ? KARTIKADI_FOOTNOTE_HI : void 0,
        deltaTNoteHi: year > 2050 ? POST_2050_DELTA_T_NOTE_HI : void 0,
        kalVedhaReport,
        gulikaKaalLabelHi,
        gulikaOverlapNoteHi,
        amritKaalOverlapNoteHi,
        eclipsedChoghadiyaLineHi,
        pureAshubhDayChoghadiyaLineHi,
        pureAshubhNightChoghadiyaLineHi,
        panchakStartDateTimeHi,
        panchakEndDateTimeHi,
        panchakProhibitionsHi,
        sankrantiIngressTimeHi,
        sankrantiPunyaKaalHi,
        sankrantiMahaPunyaKaalHi,
        diwaliPradoshKaalHi,
        diwaliVrishabhaLagnaHi,
        shivavaas: computeShivavaasInfo(udayaTithi.tithiIndex, tithiIntervals, nextSunriseTimestamp),
        agnivaas: computeAgnivaasInfo(udayaTithi.tithiIndex, weekdayIndex, tithiIntervals, nextSunriseTimestamp),
        dailyLagnaTable,
        eclipseAlert: (() => {
          const baseAlert = computeEclipseAndSutakForDay(year, month, day, record.location);
          if (indiaEclipse?.isVerifiedIndiaVisible) {
            return {
              ...baseAlert || {
                eclipseId: `${indiaEclipse.type}_${dateKey}`,
                body: indiaEclipse.type === "surya" ? "solar" : "lunar",
                kind: "total",
                titleEn: indiaEclipse.type === "surya" ? "Solar Eclipse (Visible in India)" : "Lunar Eclipse (Visible in India)",
                eclipseDateKey: dateKey,
                daysUntilEclipse: 0,
                isAlertWindowActive: true,
                isVisibleLocally: true,
                isPenumbralLunar: false,
                maxAltitudeDeg: 25,
                sparshaMs: sunriseTimestamp,
                madhyaMs: sunriseTimestamp,
                mokshaMs: sunsetTimestamp,
                sutakHoursBeforeSparsha: indiaEclipse.type === "surya" ? 12 : 9
              },
              body: indiaEclipse.type === "surya" ? "solar" : "lunar",
              titleHi: indiaEclipse.title,
              eclipseDateKey: dateKey,
              daysUntilEclipse: 0,
              isAlertWindowActive: true,
              isVisibleLocally: true,
              isPenumbralLunar: false,
              sparshaFormattedHi: indiaEclipse.sparsh || "",
              madhyaFormattedHi: indiaEclipse.madhya || "",
              mokshaFormattedHi: indiaEclipse.moksha || "",
              sutakApplies: true,
              sutakStartFormattedHi: indiaEclipse.sutakStart,
              sutakEndFormattedHi: indiaEclipse.moksha,
              sutakStatusHi: `सूतक काल मान्य: ${indiaEclipse.sutakStart} – ${indiaEclipse.moksha} तक`,
              summaryNoteHi: ECLIPSE_PUJA_INSTRUCTION_HI
            };
          }
          if (indiaEclipse?.isGlobalIndiaInvisible) {
            return {
              ...baseAlert || {
                eclipseId: `${indiaEclipse.type}_${dateKey}`,
                body: indiaEclipse.type === "surya" ? "solar" : "lunar",
                kind: "partial",
                titleEn: indiaEclipse.type === "surya" ? "Solar Eclipse (Not Visible in India)" : "Lunar Eclipse (Not Visible in India)",
                eclipseDateKey: dateKey,
                daysUntilEclipse: 0,
                isAlertWindowActive: true,
                isVisibleLocally: false,
                isPenumbralLunar: false,
                maxAltitudeDeg: -10,
                sparshaMs: sunriseTimestamp,
                madhyaMs: sunriseTimestamp,
                mokshaMs: sunsetTimestamp,
                sutakHoursBeforeSparsha: indiaEclipse.type === "surya" ? 12 : 9
              },
              body: indiaEclipse.type === "surya" ? "solar" : "lunar",
              titleHi: indiaEclipse.title,
              eclipseDateKey: dateKey,
              daysUntilEclipse: 0,
              isAlertWindowActive: true,
              isVisibleLocally: false,
              sutakApplies: false,
              sparshaFormattedHi: "",
              madhyaFormattedHi: "",
              mokshaFormattedHi: "",
              sutakStatusHi: `भारत में अदृश्य (वैश्विक अवधि: ${indiaEclipse.globalWindow || ""}) — सूतक मान्य नहीं`,
              summaryNoteHi: ECLIPSE_INVISIBLE_RULE_HI,
              sutakExemptionNoteHi: ECLIPSE_INVISIBLE_RULE_HI
            };
          }
          return baseAlert;
        })(),
        indiaEclipse,
        sunriseSandhiNote: detectMajorParvaSunriseSandhi(record, occurrences),
        regionalSolarDate: computeRegionalSolarDate(
          year,
          month,
          day,
          record.location,
          record.config.ayanamsha
        )
      };
    })()
  };
}
function buildSingleDayPanchang(rawYear, rawMonth, rawDay, isCurrentMonth = true, todayRef = /* @__PURE__ */ new Date(), location, options) {
  const activeLoc = location || getActivePanchangLocation();
  const timeZone = resolveSafeTimezone(activeLoc);
  const activeObs = getActiveObservanceState(activeLoc);
  const config = {
    ayanamsha: options?.ayanamsha || activeObs.ayanamsha || DEFAULT_ASTRONOMICAL_CONFIG.ayanamsha,
    tradition: options?.tradition || activeObs.tradition || DEFAULT_ASTRONOMICAL_CONFIG.tradition,
    sampradaya: options?.sampradaya || activeObs.sampradaya || DEFAULT_ASTRONOMICAL_CONFIG.sampradaya,
    nodeMode: options?.nodeMode || activeObs.nodeMode || DEFAULT_ASTRONOMICAL_CONFIG.nodeMode
  };
  const year = clampPanchangYear(rawYear);
  const month = Number.isFinite(rawMonth) && rawMonth >= 1 && rawMonth <= 12 ? Math.floor(rawMonth) : 10;
  const maxDaysInMonth = getDaysInMonthSafe(year, month);
  const day = Number.isFinite(rawDay) ? Math.max(1, Math.min(maxDaysInMonth, Math.floor(rawDay))) : 1;
  const todayInZone = getLocalDateParts(todayRef, timeZone);
  const dateKey = formatDateKey(year, month, day);
  const elev = Math.round(activeLoc.elevationMeters ?? (activeLoc.id === "rudrapur" ? 214 : 100));
  const nodeMode = config.nodeMode || "TRUE";
  const obsProfileKey = getObservanceProfileKey(
    {
      regionId: activeObs.regionProfile.regionId,
      tradition: config.tradition,
      sampradaya: config.sampradaya
    },
    activeLoc
  );
  const singleCacheKey = `${dateKey}_${activeLoc.lat.toFixed(4)}_${activeLoc.lon.toFixed(4)}_${elev}_${timeZone}_${config.ayanamsha}_${nodeMode}_${obsProfileKey}_v119_${isCurrentMonth ? 1 : 0}_${todayInZone.dateKey}`;
  const cached = _singleDayPanchangCache.get(singleCacheKey);
  if (cached) return cached;
  const spanRecords = [];
  let centerEntry = null;
  for (let offset = -2; offset <= 3; offset++) {
    const shifted = shiftCivilDate(year, month, day, offset);
    const entry2 = buildDailyRecordWithTimings(
      shifted.year,
      shifted.month,
      shifted.day,
      activeLoc,
      config
    );
    spanRecords.push(entry2.record);
    if (offset === 0) centerEntry = entry2;
  }
  const entry = centerEntry;
  const resolved = resolveFestivalsForSpan(spanRecords, activeLoc, config);
  const occurrences = resolved.byDate.get(dateKey) || [];
  const isToday = todayInZone.dateKey === dateKey;
  const built = assembleCalendarDayFromRecord(
    year,
    month,
    day,
    isCurrentMonth,
    isToday,
    entry.record,
    entry.timings,
    occurrences
  );
  built.validationReport = validateDailyPanchangRecord(entry.record, occurrences);
  if (_singleDayPanchangCache.size > 1500) _singleDayPanchangCache.clear();
  _singleDayPanchangCache.set(singleCacheKey, built);
  return built;
}
function generateMonthlyPanchang(rawYear, rawMonth, todayRef = /* @__PURE__ */ new Date(), location, options) {
  const activeLoc = location || getActivePanchangLocation();
  const timeZone = resolveSafeTimezone(activeLoc);
  const activeObs = getActiveObservanceState(activeLoc);
  const config = {
    ayanamsha: options?.ayanamsha || activeObs.ayanamsha || DEFAULT_ASTRONOMICAL_CONFIG.ayanamsha,
    tradition: options?.tradition || activeObs.tradition || DEFAULT_ASTRONOMICAL_CONFIG.tradition,
    sampradaya: options?.sampradaya || activeObs.sampradaya || DEFAULT_ASTRONOMICAL_CONFIG.sampradaya,
    nodeMode: options?.nodeMode || activeObs.nodeMode || DEFAULT_ASTRONOMICAL_CONFIG.nodeMode
  };
  const year = clampPanchangYear(rawYear);
  const month = Number.isFinite(rawMonth) && rawMonth >= 1 && rawMonth <= 12 ? Math.floor(rawMonth) : 10;
  const todayInZone = getLocalDateParts(todayRef, timeZone);
  const elev = Math.round(activeLoc.elevationMeters ?? (activeLoc.id === "rudrapur" ? 214 : 100));
  const nodeMode = config.nodeMode || "TRUE";
  const obsProfileKey = getObservanceProfileKey(
    {
      regionId: activeObs.regionProfile.regionId,
      tradition: config.tradition,
      sampradaya: config.sampradaya
    },
    activeLoc
  );
  const monthlyCacheKey = `${year}-${String(month).padStart(2, "0")}_${activeLoc.lat.toFixed(4)}_${activeLoc.lon.toFixed(4)}_${elev}_${timeZone}_${config.ayanamsha}_${nodeMode}_${obsProfileKey}_v119_${todayInZone.dateKey}`;
  const cachedMonthly = getMonthlyCacheLRU(monthlyCacheKey);
  if (cachedMonthly) return cachedMonthly;
  const { startWeekday, daysInMonth, daysInPrevMonth } = getLocalCalendarGridInfo(year, month);
  const prevMonth = month === 1 ? 12 : month - 1;
  const prevYear = month === 1 ? year - 1 : year;
  const nextMonth = month === 12 ? 1 : month + 1;
  const nextYear = month === 12 ? year + 1 : year;
  const gridMetas = [];
  for (let i = startWeekday - 1; i >= 0; i--) {
    const d = daysInPrevMonth - i;
    gridMetas.push({
      year: prevYear,
      month: prevMonth,
      day: d,
      dateKey: formatDateKey(prevYear, prevMonth, d),
      isCurrentMonth: false
    });
  }
  for (let d = 1; d <= daysInMonth; d++) {
    gridMetas.push({
      year,
      month,
      day: d,
      dateKey: formatDateKey(year, month, d),
      isCurrentMonth: true
    });
  }
  const totalCellsTarget = gridMetas.length > 35 ? 42 : 35;
  const remainingCells = Math.max(0, totalCellsTarget - gridMetas.length);
  for (let d = 1; d <= remainingCells; d++) {
    gridMetas.push({
      year: nextYear,
      month: nextMonth,
      day: d,
      dateKey: formatDateKey(nextYear, nextMonth, d),
      isCurrentMonth: false
    });
  }
  const firstMeta = gridMetas[0];
  const lastMeta = gridMetas[gridMetas.length - 1];
  const bufferedMetas = [];
  for (let b = -2; b < 0; b++) {
    bufferedMetas.push(shiftCivilDate(firstMeta.year, firstMeta.month, firstMeta.day, b));
  }
  for (const gm of gridMetas) {
    bufferedMetas.push(gm);
  }
  for (let f = 1; f <= 3; f++) {
    bufferedMetas.push(shiftCivilDate(lastMeta.year, lastMeta.month, lastMeta.day, f));
  }
  const bufferedEntries = bufferedMetas.map(
    (m) => buildDailyRecordWithTimings(m.year, m.month, m.day, activeLoc, config)
  );
  const bufferedRecords = bufferedEntries.map((e) => e.record);
  const resolvedSpan = resolveFestivalsForSpan(bufferedRecords, activeLoc, config);
  const validationReport = validatePanchangSpan(
    bufferedRecords,
    resolvedSpan.byDate,
    resolvedSpan.deduplicatedCount,
    1
  );
  const daysGrid = [];
  const currentMonthDays = [];
  for (let i = 0; i < gridMetas.length; i++) {
    const meta = gridMetas[i];
    const entry = bufferedEntries[i + 2];
    const occurrences = resolvedSpan.byDate.get(meta.dateKey) || [];
    const dayCard = assembleCalendarDayFromRecord(
      meta.year,
      meta.month,
      meta.day,
      meta.isCurrentMonth,
      todayInZone.dateKey === meta.dateKey,
      entry.record,
      entry.timings,
      occurrences
    );
    daysGrid.push(dayCard);
    if (meta.isCurrentMonth) {
      currentMonthDays.push(dayCard);
    }
  }
  const midDay = currentMonthDays[Math.min(14, currentMonthDays.length - 1)] || currentMonthDays[0];
  const vikramSamvat = midDay.vikramSamvat;
  const shakaSamvat = midDay.shakaSamvat;
  const vikramSamvatsarName = midDay.vikramSamvatsarName;
  const shakaSamvatsarName = midDay.shakaSamvatsarName;
  const southIndianSamvatsarName = midDay.southIndianSamvatsarName;
  const samvatsarName = vikramSamvatsarName;
  const festivalsInMonth = currentMonthDays.filter((d) => (d.festivalOccurrences?.length || 0) > 0);
  const muhuratDaysInMonth = currentMonthDays.filter((d) => d.shubhMuhurats.length > 0);
  const monthlyOccurrences = currentMonthDays.flatMap((d) => d.festivalOccurrences || []);
  const distinctMasas = [];
  let adhikaMasaLabelHi;
  let hasKshayaMasaInMonth = false;
  for (const d of currentMonthDays) {
    const label = d.lunarMasaInfo?.activeMasaNameHi || d.hinduMaas.replace(/\s*मास$/u, "");
    if (!distinctMasas.includes(label)) distinctMasas.push(label);
    if (d.lunarMasaInfo?.isAdhikaMasa && !adhikaMasaLabelHi) {
      adhikaMasaLabelHi = `${d.lunarMasaInfo.activeMasaNameHi} मास (पुरुषोत्तम / मलमास)`;
    }
    if (d.lunarMasaInfo?.adhikaType === "KSHAYA") {
      hasKshayaMasaInMonth = true;
    }
  }
  const hinduMaasRange = distinctMasas.length > 1 ? `${distinctMasas[0]} - ${distinctMasas[distinctMasas.length - 1]} मास` : `${distinctMasas[0] || "आश्विन"} मास`;
  const ekadashiPradoshChaturthiDays = currentMonthDays.filter(
    (d) => d.isEkadashi || d.isPradosh || d.isChaturthi || d.isShivratri
  ).length;
  const purnimaAmavasyaDays = currentMonthDays.filter((d) => d.isPurnima || d.isAmavasya).length;
  const filterCounts = {
    allDays: currentMonthDays.length,
    festivalDays: festivalsInMonth.length,
    ekadashiPradoshChaturthiDays,
    purnimaAmavasyaDays,
    muhuratDays: muhuratDaysInMonth.length,
    ekadashiCount: monthlyOccurrences.filter((o) => o.category === "ekadashi").length,
    pradoshCount: monthlyOccurrences.filter((o) => o.category === "pradosh").length,
    chaturthiCount: monthlyOccurrences.filter((o) => o.festivalId.includes("chaturthi")).length
  };
  const summary = {
    year,
    month,
    monthNameHindi: HINDI_MONTH_SHORT[month - 1] || "अक्टूबर",
    monthNameEnglish: ENGLISH_MONTH_NAMES[month - 1] || "October",
    hinduMaasRange,
    vikramSamvat,
    shakaSamvat,
    samvatsarName,
    vikramSamvatsarName,
    shakaSamvatsarName,
    southIndianSamvatsarName,
    ritu: midDay.ritu,
    ayana: midDay.ayana,
    daysGrid,
    currentMonthDays,
    festivalsInMonth,
    muhuratDaysInMonth,
    location: { ...activeLoc, timezone: timeZone },
    tradition: config.tradition,
    sampradaya: config.sampradaya,
    monthlyOccurrences,
    filterCounts,
    validationReport,
    diagnostics: resolvedSpan.diagnostics,
    hasAdhikaMasaInMonth: Boolean(adhikaMasaLabelHi),
    hasKshayaMasaInMonth,
    adhikaMasaLabelHi
  };
  setMonthlyCacheLRU(monthlyCacheKey, summary);
  return summary;
}
function buildVerifiedAstroFactsJson(dayPanchang, planets) {
  const dateISO = dayPanchang.dateKey || `${dayPanchang.year}-${String(dayPanchang.month).padStart(2, "0")}-${String(dayPanchang.day).padStart(2, "0")}`;
  const shreshtha = resolveBhadraRahuFreeShreshthaSamay(dayPanchang, 0);
  const meta = dayPanchang.chandraRashiMeta;
  const bhadraInfo = dayPanchang.bhadraVaas || resolveBhadraVaasInfo(meta?.sign1Number || 1);
  const payload = {
    timezone: dayPanchang.dailyPanchang?.location.timezone || "Asia/Kolkata",
    calculationEngine: "Lahiri Ayanamsa (Chitrapaksha) Drik Ganita + Dharmashastra Kaal-Vyapti Engine",
    tradition: dayPanchang.tradition || "PURNIMANTA",
    sampradaya: dayPanchang.sampradaya || "SMARTA",
    dateISO,
    dateHindi: dayPanchang.formattedDateHindi,
    vaarHindi: dayPanchang.vaarHindi,
    sunriseLocal: dayPanchang.sunrise,
    sunsetLocal: dayPanchang.sunset,
    moonriseLocal: dayPanchang.moonrise,
    moonsetLocal: dayPanchang.moonset,
    dinamana: dayPanchang.dinamanaFormatted,
    ratrimana: dayPanchang.ratrimanaFormatted,
    hinduMaas: dayPanchang.hinduMaas,
    lunarMasaAmanta: dayPanchang.lunarMasaInfo?.displayAmantaHi,
    lunarMasaPurnimanta: dayPanchang.lunarMasaInfo?.displayPurnimantaHi,
    isAdhikaMasa: dayPanchang.lunarMasaInfo?.isAdhikaMasa || false,
    paksha: dayPanchang.paksha,
    udayaTithi: dayPanchang.tithiName,
    tithiEndTime: dayPanchang.tithiEndTime,
    kshayaTithi: dayPanchang.kshayaTithis?.hasKshaya ? dayPanchang.kshayaTithis.displayLabelHi : null,
    vriddhiTithi: dayPanchang.vriddhiTithiInfo?.isVriddhi ? dayPanchang.vriddhiTithiInfo.displayLabelHi : null,
    nakshatraAtSunrise: dayPanchang.nakshatra,
    nakshatraEndTime: dayPanchang.nakshatraEndTime,
    yoga: dayPanchang.yoga,
    karana: dayPanchang.karana,
    chandraRashiDisplay: dayPanchang.chandraRashi,
    chandraTransit: {
      hasTransition: Boolean(meta?.hasTransition),
      morningSignHi: meta?.sign1NameHi || dayPanchang.chandraRashi,
      morningSignNumber: meta?.sign1Number || 1,
      transitionTimeLocal: meta?.endTimeText || null,
      postTransitionSignHi: meta?.sign2NameHi || null,
      postTransitionSignNumber: meta?.sign2Number || null
    },
    suryaRashi: dayPanchang.suryaRashi,
    festivalVerified: dayPanchang.festivalName || null,
    festivalOccurrences: (dayPanchang.festivalOccurrences || []).map((f) => ({
      id: f.festivalId,
      nameHi: f.nameHi,
      kaal: f.kaalApplied,
      parana: f.paranaWindowTextHi || null
    })),
    rahuKaal: dayPanchang.rahuKaal,
    yamagandam: dayPanchang.yamagandam,
    gulikaKaal: dayPanchang.gulikaKaal,
    abhijitMuhurat: dayPanchang.abhijitMuhurat,
    amritKaal: dayPanchang.amritKaal,
    vijayMuhurat: dayPanchang.vijayMuhurat,
    nishithaMuhurat: dayPanchang.nishithaMuhurat,
    durMuhurta: dayPanchang.durMuhurta,
    varjyam: dayPanchang.varjyam,
    bhadraVerification: {
      hasBhadra: Boolean(dayPanchang.bhadraKaal),
      bhadraWindowText: dayPanchang.bhadraKaal || "आज भद्रा नहीं है",
      bhadraVaasHi: bhadraInfo.vaasNameHi,
      bhadraEffectNoteHi: bhadraInfo.effectNoteHi,
      isPrithviVaasBlocking: bhadraInfo.isPrithviVaas
    },
    panchakVerification: dayPanchang.panchakKaal || "आज पंचक नहीं है",
    uniformShreshthaSamay: shreshtha.cardBestTime,
    planetsSiderealDrik: planets || []
  };
  return JSON.stringify(payload);
}
function buildPanchangSaralArthaHi(day) {
  const abhijitKV = day.kalVedhaReport?.abhijit;
  const abhijitConflict = day.abhijitConflict;
  const pureSubSecs = (abhijitKV?.pureSubIntervalsSec || []).reduce(
    (sum, [s, e]) => sum + Math.max(0, e - s),
    0
  );
  const collidingNames = abhijitKV?.collidingNamesHi || [];
  const hasHardAbhijitOverlap = Boolean(
    abhijitKV?.hasCollision && collidingNames.some((n) => /राहुकाल|यमगण्ड|दुर्मुहूर्त|भद्रा/u.test(n))
  );
  const isAbhijitNominal = hasHardAbhijitOverlap && !abhijitKV?.isFullyEclipsed && pureSubSecs > 0 && pureSubSecs < 600;
  const isAbhijitBlocked = Boolean(
    abhijitKV?.isFullyEclipsed || abhijitConflict?.isFullyPolluted || abhijitConflict?.isWednesdayProhibited || isAbhijitNominal || String(day.abhijitMuhurat || "").includes("मान्य नहीं") || String(day.abhijitMuhurat || "").includes("पूर्णतः वर्जित")
  );
  const hasSoftOverlapOnAbhijit = !hasHardAbhijitOverlap && collidingNames.some((n) => /गण्डमूल|पंचक/u.test(n));
  const cleanWindowClock = (raw) => String(raw || "").replace(/⚠️.*$/u, "").replace(/\(.*?\)/g, "").replace(/दोपहर |प्रातः |पूर्वाह्न |सुबह |सायं |शाम |रात्रि /gu, "").trim();
  const pureAbhijitClock = cleanWindowClock(
    day.exactSecondsDisplay?.abhijitFull || abhijitConflict?.fullWindowHi || day.abhijitMuhurat
  );
  const sarvKv = day.kalVedhaReport?.sarvarthaSiddhi;
  const sunsetSec = day.dailyPanchang?.sunsetTimestamp ? Math.round(day.dailyPanchang.sunsetTimestamp / 1e3) : null;
  const isSarvarthaNightOnly = Boolean(
    day.sarvarthaSiddhiYoga && (sarvKv && sunsetSec !== null && sarvKv.originalStartSec >= sunsetSec - 60 || /^(?:शुद्ध अवधि:\s*)?रात्रि\s+/u.test(day.sarvarthaSiddhiYoga.trim()) && !/प्रातः|दोपहर|अपराह्न/u.test(day.sarvarthaSiddhiYoga.split("(")[0]))
  );
  const hasActiveDaySarvartha = Boolean(day.sarvarthaSiddhiYoga && !isSarvarthaNightOnly);
  const hasGandmool = Boolean(day.gandmoolNakshatra || day.isGandmool);
  const hasPanchak = Boolean(day.panchakKaal);
  const hasPrithviBhadra = Boolean(day.bhadraKaal && day.bhadraVaas?.isPrithviVaas);
  const hasHardBlocker = hasPrithviBhadra || hasGandmool || hasPanchak;
  const isGandmoolLaterOnset = hasGandmool && /से\s*प्रारंभ/u.test(day.gandmoolNakshatra || "");
  const isPanchakLaterOnset = hasPanchak && /से\s*प्रारंभ/u.test(day.panchakKaal || "");
  let shubhMuhuratHi;
  if (isAbhijitBlocked && hasActiveDaySarvartha && !hasHardBlocker) {
    shubhMuhuratHi = "सरल अर्थ: आज सर्वार्थ सिद्धि योग है—राहुकाल छोड़कर शुभ चौघड़िया में नए व जरूरी कार्य शुरू करना लाभप्रद रहेगा।";
  } else if (isAbhijitBlocked) {
    shubhMuhuratHi = "सरल अर्थ: आज बड़ा नया कार्य टालें; नियमित व पूजा-पाठ के काम करें।";
  } else if (hasSoftOverlapOnAbhijit && pureAbhijitClock) {
    shubhMuhuratHi = `सरल अर्थ: आज बड़े मांगलिक कार्य टालें; ${pureAbhijitClock} में नियमित व पूजा-पाठ के काम उत्तम हैं।`;
  } else if (pureAbhijitClock) {
    shubhMuhuratHi = `सरल अर्थ: आज ${pureAbhijitClock} के बीच नया व शुभ कार्य शुरू करना उत्तम है।`;
  } else {
    shubhMuhuratHi = "सरल अर्थ: आज बड़ा नया कार्य टालें; नियमित व पूजा-पाठ के काम करें।";
  }
  let ashubhExtra = "";
  if (hasGandmool && hasPanchak) {
    ashubhExtra = " गण्डमूल व पंचक अवधि में वाहन, संपत्ति व मांगलिक कार्य टालें।";
  } else if (hasGandmool) {
    ashubhExtra = isGandmoolLaterOnset ? " गण्डमूल प्रारंभ होने के बाद वाहन, संपत्ति या नए मांगलिक कार्य टालें।" : " गण्डमूल के कारण वाहन, संपत्ति या नए मांगलिक कार्य टालें।";
  } else if (hasPanchak) {
    ashubhExtra = isPanchakLaterOnset ? " पंचक प्रारंभ होने के बाद वाहन, संपत्ति, दक्षिण यात्रा व छत-लकड़ी कार्य टालें।" : " पंचक में वाहन, संपत्ति, दक्षिण यात्रा व छत-लकड़ी कार्य टालें।";
  } else if (hasPrithviBhadra) {
    ashubhExtra = " मृत्युलोक भद्रा में नए शुभ कार्य व बड़े सौदे टालें।";
  }
  const ashubhKaalHi = `सरल अर्थ: राहुकाल में नया निवेश या यात्रा शुरू न करें; सामान्य दैनिक कार्य चलते रहेंगे।${ashubhExtra}`;
  const choghadiyaHi = day.eclipsedChoghadiyaLineHi ? "सरल अर्थ: केवल राहुकाल-मुक्त 'शुभ, लाभ, अमृत, चर' के शुद्ध समय में ही महत्वपूर्ण लेन-देन या यात्रा करें।" : "सरल अर्थ: केवल 'शुभ, लाभ, अमृत, चर' के शुद्ध समय में ही महत्वपूर्ण लेन-देन या यात्रा करें।";
  const shortFest = (day.festivalName || "").split(/[•,(]/)[0].trim();
  let vivechanHi;
  if (shortFest) {
    vivechanHi = `सरल अर्थ: आज ${shortFest} है—पूजा-दान करें और शुभ समय में जरूरी काम निपटाएँ।`;
  } else if (hasHardBlocker) {
    vivechanHi = "सरल अर्थ: आज बड़े नए सौदे टालें; नियमित काम, धैर्य और पूजा-पाठ लाभकारी रहेंगे।";
  } else if (hasActiveDaySarvartha && isAbhijitBlocked) {
    vivechanHi = "सरल अर्थ: आज सर्वार्थ सिद्धि योग है—राहुकाल छोड़कर शुभ चौघड़िया में नए व जरूरी कार्य शुरू करना लाभप्रद रहेगा।";
  } else if (isAbhijitBlocked) {
    vivechanHi = "सरल अर्थ: आज बड़े नए सौदे टालें; नियमित काम, धैर्य और पूजा-पाठ लाभकारी रहेंगे।";
  } else if (day.sarvarthaSiddhiYoga || day.amritSiddhiYoga) {
    vivechanHi = "सरल अर्थ: आज शुभ योग है—महत्वपूर्ण काम, निवेश और नई शुरुआत के लिए उत्तम दिन।";
  } else {
    vivechanHi = "सरल अर्थ: राहुकाल छोड़कर शुभ समय में जरूरी काम व बातचीत करना लाभप्रद रहेगा।";
  }
  return {
    shubhMuhuratHi,
    ashubhKaalHi,
    choghadiyaHi,
    vivechanHi
  };
}
const panchangCalendarEngine = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ALL_12_RASHIS_HI,
  ALL_27_NAKSHATRAS_HI,
  ASHTAMANSHA_PART_ORDINALS_HI,
  DEFAULT_RUDRAPUR_LOCATION,
  ENGLISH_MONTH_NAMES,
  GANDMOOL_PROHIBITIONS_HI,
  GLOBAL_ECLIPSES_2025_2035,
  GULIKA_ECLIPSED_LABEL_HI,
  GULIKA_SHASTRIYA_LABEL_HI,
  HINDI_GREGORIAN_MONTHS,
  HINDI_MONTH_SHORT,
  KARTIKADI_FOOTNOTE_HI,
  MAX_PANCHANG_YEAR,
  MIN_PANCHANG_YEAR,
  MONTHLY_PANCHANG_LRU_LIMIT,
  PANCHAK_PROHIBITIONS_HI,
  POPULAR_PANCHANG_CITY_IDS,
  POST_2050_DELTA_T_NOTE_HI,
  SIXTY_SAMVATSARA_NAMES,
  VAAR_LIST,
  WORLDWIDE_PANCHANG_CITIES,
  buildPanchangSaralArthaHi,
  buildSingleDayPanchang,
  buildVerifiedAstroFactsJson,
  cacheGpsPlaceCoordinates,
  checkNodalEclipseWindow,
  classifyRegionalObservanceProfile,
  clearAllPanchangCalculationCaches,
  computeAgnivaasInfo,
  computeDailyLagnaTable,
  computeEclipseAndSutakForDay,
  computeObservanceDivergenceSummary,
  computePersonalChandrabal,
  computePersonalTarabal,
  computeRegionalSolarDate,
  computeSamvatsaraOrdinal,
  computeShivavaasInfo,
  createSafeUtcDate,
  detectCurrentBirthPlaceViaGps,
  detectCurrentPanchangGpsLocation,
  detectMajorParvaSunriseSandhi,
  evaluateKalVedhaForWindow,
  formatAshtamanshaPartHi,
  formatISTHourPointHindi,
  formatISTHourRangeHindi,
  generateMonthlyPanchang,
  getActiveObservanceState,
  getActivePanchangLocation,
  getActivePanchangLocationState,
  getDaysInMonthSafe,
  getISTCalendarParts,
  getJulianDay,
  getLocalDateParts,
  getMsUntilNextISTMidnight,
  getMsUntilNextZoneMidnight,
  getNodeLongitudesDeg,
  getObservanceProfileKey,
  getProfileBirthPlaceLocation,
  getShakaSamvatsarName,
  getSiderealMoonLongitude,
  getSouthIndianSamvatsarName,
  getVikramSamvatsarName,
  isGujaratLocation,
  loadPersonalJanmaProfile,
  loadSavedAccountJanmaProfile,
  loadSavedFamilyJanmaProfiles,
  parseHindiTimeRangeIST,
  resetObservanceToRegionalAuto,
  resetPanchangLocationToRudrapur,
  resolveBhadraRahuFreeShreshthaSamay,
  resolveBhadraVaasForSpan,
  resolveBhadraVaasInfo,
  resolveCityCoordinates,
  resolveCityCoordinatesStrict,
  resolveHindiCityDisplayName,
  resolveIndiaEclipseForDate,
  resolveJanmaProfileFromName,
  resolveKartikadiVikramSamvat,
  resolveMantraOrShlokaLabelHi,
  resolveNearestGpsLocation,
  resolveOfflineIndianDistrict,
  resolvePrimarySamvatsaraForLocation,
  resolveSafeTimezone,
  savePersonalJanmaProfile,
  searchLocationsAllIndia,
  searchOfflineIndianDistricts,
  setActivePanchangLocation,
  setObservanceManualOverride,
  setRememberPanchangLocation,
  subtractBlockedTimeIntervals
}, Symbol.toStringTag, { value: "Module" }));
export {
  formatHindiHousePhrase as $,
  getCurrentISTDateKey as A,
  getCalculationViewingMode as B,
  setCalculationViewingMode as C,
  DEFAULT_VEDIC_THEME as D,
  getMsUntilNextISTMidnight$1 as E,
  FESTIVALS_CONFIG as F,
  getActiveProfile as G,
  getVedicDetailsFromName as H,
  generateSampurnKundali as I,
  HINDI_MONTH_SHORT as J,
  formatUserSalutation as K,
  resolveHindiCityDisplayName as L,
  getFamilyVaultProfiles as M,
  deriveVedicDetailsForProfile as N,
  isGrahaRetrogradeAt as O,
  POPULAR_PANCHANG_CITY_IDS as P,
  computeOptionalTarabala as Q,
  NAKSHATRAS_27 as R,
  SEVEN_VAAR_THEMES_LIST as S,
  getPrimaryFamilyProfile as T,
  getLoggedInUserAccountData as U,
  VAAR_LIST as V,
  WORLDWIDE_PANCHANG_CITIES as W,
  VEDIC_RASHIS as X,
  VEDIC_NAKSHATRAS as Y,
  formatHindiHouseOrdinal as Z,
  calculateKundaliMilan as _,
  SEVEN_VAAR_THEMES as a,
  formatPlanetLabel as a$,
  evaluateNeechabhanga as a0,
  upsertFamilyMember as a1,
  MONTH_CATEGORIES_HI as a2,
  buildVerifiedAstroFactsJson as a3,
  computeSamvatsaraOrdinal as a4,
  shiftCivilDate as a5,
  MIN_PANCHANG_YEAR as a6,
  MAX_PANCHANG_YEAR as a7,
  loadSavedAccountJanmaProfile as a8,
  loadSavedFamilyJanmaProfiles as a9,
  getSiderealMoonLongitude as aA,
  resolveRashiDefinition as aB,
  DEFAULT_RASHIFAL_LOCATION as aC,
  resolveCivilDayBounds as aD,
  getPersonalContextCacheHash as aE,
  computeEphemerisSnapshot as aF,
  analyzeRelativeTransits as aG,
  solvePlanetaryIngressesInWindow as aH,
  getRelativeHouse as aI,
  buildTithiIntervalsForDay as aJ,
  buildAngaIntervalsForDay as aK,
  formatWindowRangeInZoneHi as aL,
  resolveLunarMasaInfo as aM,
  formatEpochInZoneHi as aN,
  computeRashiWideTarabala as aO,
  evaluatePersonalDashaAshtakavarga as aP,
  ALL_GRAHA_IDS as aQ,
  getRetrogradeCheshtaBalaScore as aR,
  getMondaySundayWeekRange as aS,
  solveRetrogradeStationsInWindow as aT,
  solveCombustionEventsInWindow as aU,
  solveLunarPhaseMilestonesInWindow as aV,
  RASHI_DEFINITIONS as aW,
  getCalendarMonthRange as aX,
  getNodeLongitudesDeg as aY,
  solveEclipsesInWindow as aZ,
  formatDateKey as a_,
  loadPersonalJanmaProfile as aa,
  resetObservanceToRegionalAuto as ab,
  generateMonthlyPanchang as ac,
  buildPanchangSaralArthaHi as ad,
  createSafeUtcDate as ae,
  setObservanceManualOverride as af,
  HINDI_GREGORIAN_MONTHS as ag,
  formatAshtamanshaPartHi as ah,
  GULIKA_SHASTRIYA_LABEL_HI as ai,
  computePersonalTarabal as aj,
  computePersonalChandrabal as ak,
  savePersonalJanmaProfile as al,
  ALL_12_RASHIS_HI as am,
  ALL_27_NAKSHATRAS_HI as an,
  getDaysInMonthSafe as ao,
  resolveJanmaProfileFromName as ap,
  detectCurrentBirthPlaceViaGps as aq,
  RASHIFAL_AYANAMSHA_MODE as ar,
  RASHIFAL_NODE_MODE as as,
  RASHIFAL_CORE_ENGINE_VERSION as at,
  GRAHA_NAMES as au,
  zonedWallClockToUtcMs as av,
  getSiderealMoonLonDeg as aw,
  getSiderealSunLonDeg as ax,
  ENGLISH_MONTH_NAMES as ay,
  getJulianDay as az,
  buildSingleDayPanchang as b,
  familyVaultStorage as b0,
  panchangCalendarEngine as b1,
  getActivePanchangLocation as c,
  getLocalDateParts as d,
  getMsUntilNextZoneMidnight as e,
  getActiveObservanceState as f,
  getISTCalendarParts as g,
  DEFAULT_ASTRONOMICAL_CONFIG as h,
  getObservanceProfileKey as i,
  resolvePrimarySamvatsaraForLocation as j,
  resolveMantraOrShlokaLabelHi as k,
  getActivePanchangLocationState as l,
  getProfileBirthPlaceLocation as m,
  searchLocationsAllIndia as n,
  resolveBhadraRahuFreeShreshthaSamay as o,
  DEFAULT_RUDRAPUR_LOCATION as p,
  setRememberPanchangLocation as q,
  resolveSafeTimezone as r,
  searchOfflineIndianDistricts as s,
  resolveCityCoordinates as t,
  detectCurrentPanchangGpsLocation as u,
  setActivePanchangLocation as v,
  resetPanchangLocationToRudrapur as w,
  clearActiveProfile as x,
  setActiveProfile as y,
  getMsUntilNextISTMidnight as z
};
