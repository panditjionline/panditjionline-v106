import { aj as GULIKA_SHASTRIYA_LABEL_HI, ae as buildPanchangSaralArthaHi, j as resolvePrimarySamvatsaraForLocation, r as resolveSafeTimezone, M as resolveHindiCityDisplayName, k as resolveMantraOrShlokaLabelHi, ai as formatAshtamanshaPartHi, aA as getJulianDay, aB as getSiderealMoonLongitude } from "./panchang-core-24ia-akc.js";
import { p as parseChandraRashiTransition, b as buildRashifalSaralArthaHi, s as sanitizeVedicHindiText, m as sanitizeWeeklyMonthlyHindiText } from "./drikGanitaRashifalEngine-fnpcD7FF.js";
import { t as translateVedicHindiToEnglish } from "./index-AQ5SI3vl.js";
import { _ as __vitePreload } from "./vendor-pdf-CpPyS1re.js";
function isNonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0;
}
function isFiniteNumber(value) {
  return typeof value === "number" && Number.isFinite(value);
}
function hasActiveWindowText(value) {
  if (!isNonEmptyString(value)) return false;
  const clean = value.trim().toLowerCase();
  if (clean === "-" || clean === "—" || clean === "none" || clean === "n/a" || clean === "nil" || clean === "नहीं" || clean === "कोई नहीं" || clean === "नहीं है" || clean.startsWith("नहीं ") || clean.startsWith("कोई नहीं") || clean.startsWith("आज नहीं")) {
    return false;
  }
  return true;
}
function stripParentheticalSuffix(value) {
  if (!isNonEmptyString(value)) return "";
  return value.replace(/\s*\([^)]*\)\s*/g, " ").replace(/\s+/g, " ").trim();
}
function canonicalStringify(value) {
  if (value === null) return "null";
  const t = typeof value;
  if (t === "number") {
    return Number.isFinite(value) ? String(value) : '"NaN"';
  }
  if (t === "boolean" || t === "string") {
    return JSON.stringify(value);
  }
  if (t === "undefined") {
    return '"__undefined__"';
  }
  if (Array.isArray(value)) {
    return `[${value.map((item) => canonicalStringify(item)).join(",")}]`;
  }
  if (value instanceof Date) {
    return JSON.stringify(value.toISOString());
  }
  if (t === "object") {
    const obj = value;
    const keys = Object.keys(obj).filter((k) => obj[k] !== void 0).sort();
    const entries = keys.map(
      (k) => `${JSON.stringify(k)}:${canonicalStringify(obj[k])}`
    );
    return `{${entries.join(",")}}`;
  }
  return JSON.stringify(String(value));
}
function computeDeterministicHash(input) {
  const str2 = typeof input === "string" ? input : canonicalStringify(input);
  let h1 = 2166136261;
  let h2 = 16777619;
  for (let i = 0; i < str2.length; i += 1) {
    const code = str2.charCodeAt(i);
    h1 ^= code;
    h1 = Math.imul(h1, 16777619);
    h2 ^= code ^ i & 255;
    h2 = Math.imul(h2, 2246822507);
  }
  const hex1 = (h1 >>> 0).toString(16).padStart(8, "0");
  const hex2 = (h2 >>> 0).toString(16).padStart(8, "0");
  return `${hex1}${hex2}`;
}
const VAAR_MAP = {
  रविवार: { en: "Sunday", saNom: "रविवासरः", saLoc: "रविवासरे" },
  सोमवार: { en: "Monday", saNom: "सोमवासरः", saLoc: "सोमवासरे" },
  मंगलवार: { en: "Tuesday", saNom: "मङ्गलवासरः", saLoc: "मङ्गलवासरे" },
  बुधवार: { en: "Wednesday", saNom: "बुधवासरः", saLoc: "बुधवासरे" },
  गुरुवार: { en: "Thursday", saNom: "गुरुवासरः", saLoc: "गुरुवासरे" },
  बृहस्पतिवार: { en: "Thursday", saNom: "बृहस्पतिवासरः", saLoc: "बृहस्पतिवासरे" },
  शुक्रवार: { en: "Friday", saNom: "शुक्रवासरः", saLoc: "शुक्रवासरे" },
  शनिवार: { en: "Saturday", saNom: "शनिवासरः", saLoc: "शनिवासरे" }
};
const PAKSHA_MAP = {
  "शुक्ल पक्ष": { en: "Shukla Paksha (waxing lunar fortnight)", saLoc: "शुक्लपक्षे" },
  "कृष्ण पक्ष": { en: "Krishna Paksha (waning lunar fortnight)", saLoc: "कृष्णपक्षे" },
  शुक्ल: { en: "Shukla Paksha", saLoc: "शुक्लपक्षे" },
  कृष्ण: { en: "Krishna Paksha", saLoc: "कृष्णपक्षे" }
};
const TITHI_TRANSLIT = {
  प्रतिपदा: { en: "Pratipada", sa: "प्रतिपदा" },
  द्वितीया: { en: "Dwitiya", sa: "द्वितीया" },
  तृतीया: { en: "Tritiya", sa: "तृतीया" },
  चतुर्थी: { en: "Chaturthi", sa: "चतुर्थी" },
  पंचमी: { en: "Panchami", sa: "पञ्चमी" },
  षष्ठी: { en: "Shashthi", sa: "षष्ठी" },
  सप्तमी: { en: "Saptami", sa: "सप्तमी" },
  अष्टमी: { en: "Ashtami", sa: "अष्टमी" },
  नवमी: { en: "Navami", sa: "नवमी" },
  दशमी: { en: "Dashami", sa: "दशमी" },
  एकादशी: { en: "Ekadashi", sa: "एकादशी" },
  द्वादशी: { en: "Dwadashi", sa: "द्वादशी" },
  त्रयोदशी: { en: "Trayodashi", sa: "त्रयोदशी" },
  चतुर्दशी: { en: "Chaturdashi", sa: "चतुर्दशी" },
  पूर्णिमा: { en: "Purnima", sa: "पूर्णिमा" },
  अमावस्या: { en: "Amavasya", sa: "अमावस्या" }
};
const NAKSHATRA_TRANSLIT = {
  अश्विनी: "Ashwini",
  भरणी: "Bharani",
  कृत्तिका: "Krittika",
  रोहिणी: "Rohini",
  मृगशिरा: "Mrigashira",
  आर्द्रा: "Ardra",
  पुनर्वसु: "Punarvasu",
  पुष्य: "Pushya",
  आश्लेषा: "Ashlesha",
  मघा: "Magha",
  पूर्वाफाल्गुनी: "Purva Phalguni",
  उत्तराफाल्गुनी: "Uttara Phalguni",
  हस्त: "Hasta",
  चित्रा: "Chitra",
  स्वाति: "Swati",
  विशाखा: "Vishakha",
  अनुराधा: "Anuradha",
  ज्येष्ठा: "Jyeshtha",
  मूल: "Mula",
  पूर्वाषाढ़ा: "Purva Ashadha",
  उत्तराषाढ़ा: "Uttara Ashadha",
  श्रवण: "Shravana",
  धनिष्ठा: "Dhanishta",
  शतभिषा: "Shatabhisha",
  पूर्वाभाद्रपद: "Purva Bhadrapada",
  उत्तराभाद्रपद: "Uttara Bhadrapada",
  रेवती: "Revati"
};
const RASHI_TRANSLIT = {
  मेष: { en: "Aries (Mesha)", sa: "मेष" },
  वृषभ: { en: "Taurus (Vrishabha)", sa: "वृषभ" },
  मिथुन: { en: "Gemini (Mithuna)", sa: "मिथुन" },
  कर्क: { en: "Cancer (Karka)", sa: "कर्क" },
  सिंह: { en: "Leo (Simha)", sa: "सिंह" },
  कन्या: { en: "Virgo (Kanya)", sa: "कन्या" },
  तुला: { en: "Libra (Tula)", sa: "तुला" },
  वृश्चिक: { en: "Scorpio (Vrishchika)", sa: "वृश्चिक" },
  धनु: { en: "Sagittarius (Dhanu)", sa: "धनु" },
  मकर: { en: "Capricorn (Makara)", sa: "मकर" },
  कुंभ: { en: "Aquarius (Kumbha)", sa: "कुम्भ" },
  कुम्भ: { en: "Aquarius (Kumbha)", sa: "कुम्भ" },
  मीन: { en: "Pisces (Meena)", sa: "मीन" }
};
const GRAHA_TRANSLIT = {
  सूर्य: { en: "Sun (Surya)", sa: "सूर्यः" },
  चंद्रमा: { en: "Moon (Chandra)", sa: "चन्द्रः" },
  चंद्र: { en: "Moon (Chandra)", sa: "चन्द्रः" },
  मंगल: { en: "Mars (Mangala)", sa: "मङ्गलः" },
  बुध: { en: "Mercury (Budha)", sa: "बुधः" },
  बृहस्पति: { en: "Jupiter (Guru)", sa: "बृहस्पतिः" },
  गुरु: { en: "Jupiter (Guru)", sa: "गुरुः" },
  शुक्र: { en: "Venus (Shukra)", sa: "शुक्रः" },
  शनि: { en: "Saturn (Shani)", sa: "शनिः" },
  राहु: { en: "Rahu", sa: "राहुः" },
  केतु: { en: "Ketu", sa: "केतुः" }
};
const DISHA_TRANSLIT = {
  पूर्व: { en: "East", sa: "पूर्वदिशायाम्" },
  पश्चिम: { en: "West", sa: "पश्चिमदिशायाम्" },
  उत्तर: { en: "North", sa: "उत्तरदिशायाम्" },
  दक्षिण: { en: "South", sa: "दक्षिणदिशायाम्" }
};
const HINDI_ORDINALS = [
  "",
  "प्रथम",
  "द्वितीय",
  "तृतीय",
  "चतुर्थ",
  "पंचम",
  "षष्ठ",
  "सप्तम",
  "अष्टम",
  "नवम",
  "दशम",
  "एकादश",
  "द्वादश"
];
const SANSKRIT_LOCATIVE_HOUSE = [
  "",
  "प्रथमे भावे",
  "द्वितीये भावे",
  "तृतीये भावे",
  "चतुर्थे भावे",
  "पञ्चमे भावे",
  "षष्ठे भावे",
  "सप्तमे भावे",
  "अष्टमे भावे",
  "नवमे भावे",
  "दशमे भावे",
  "एकादशे भावे",
  "द्वादशे भावे"
];
function hindiGenitive(gender, plural = false) {
  return "की";
}
function hindiCopula(gender, plural = false) {
  if (gender === "f") return plural ? "होती हैं" : "होती है";
  return plural ? "होते हैं" : "होता है";
}
function englishIndefiniteArticle(nextWord) {
  const clean = nextWord.trim().toLowerCase();
  if (!clean) return "a";
  if (/^(honest|hour|heir|honor)/.test(clean)) return "an";
  if (/^(uni|use|user|euro|one|once)/.test(clean)) return "a";
  return /^[aeiou8]/.test(clean) ? "an" : "a";
}
function englishOrdinal(n) {
  const num2 = Math.round(n);
  const mod100 = num2 % 100;
  if (mod100 >= 11 && mod100 <= 13) return `${num2}th`;
  switch (num2 % 10) {
    case 1:
      return `${num2}st`;
    case 2:
      return `${num2}nd`;
    case 3:
      return `${num2}rd`;
    default:
      return `${num2}th`;
  }
}
function hindiHouseOrdinal(house) {
  const n = typeof house === "number" ? Math.round(house) : Number(house);
  if (Number.isFinite(n) && n >= 1 && n <= 12) {
    return `${HINDI_ORDINALS[n]} भाव`;
  }
  return "संबद्ध भाव";
}
function sanskritHouseLocative(house) {
  const n = typeof house === "number" ? Math.round(house) : Number(house);
  if (Number.isFinite(n) && n >= 1 && n <= 12) {
    return SANSKRIT_LOCATIVE_HOUSE[n];
  }
  return "सम्बद्धभावे";
}
function translateVaarToEn(raw) {
  const s = String(raw ?? "").trim();
  for (const [hi, info] of Object.entries(VAAR_MAP)) {
    if (s.includes(hi)) return info.en;
  }
  return s || "today";
}
function translateVaarToSaLoc(raw) {
  const s = String(raw ?? "").trim();
  for (const [hi, info] of Object.entries(VAAR_MAP)) {
    if (s.includes(hi)) return info.saLoc;
  }
  return "अद्यतने वासरे";
}
function translatePakshaToEn(raw) {
  const s = String(raw ?? "").trim();
  for (const [hi, info] of Object.entries(PAKSHA_MAP)) {
    if (s.includes(hi)) return info.en;
  }
  return s || "the active lunar fortnight";
}
function translatePakshaToSaLoc(raw) {
  const s = String(raw ?? "").trim();
  for (const [hi, info] of Object.entries(PAKSHA_MAP)) {
    if (s.includes(hi)) return info.saLoc;
  }
  return "वर्तमानपक्षे";
}
function translateTithiToEn(raw) {
  const s = String(raw ?? "").trim();
  if (!s) return "the active Tithi";
  let prefix = "";
  if (s.includes("शुक्ल")) prefix = "Shukla ";
  else if (s.includes("कृष्ण")) prefix = "Krishna ";
  for (const [hi, info] of Object.entries(TITHI_TRANSLIT)) {
    if (s.includes(hi)) return `${prefix}${info.en}`;
  }
  return s;
}
function translateTithiToSa(raw) {
  const s = String(raw ?? "").trim();
  if (!s) return "तिथिः";
  for (const [hi, info] of Object.entries(TITHI_TRANSLIT)) {
    if (s.includes(hi)) return info.sa;
  }
  return s;
}
function translateNakshatraToEn(raw) {
  const s = String(raw ?? "").trim();
  if (!s) return "the active Nakshatra";
  for (const [hi, en] of Object.entries(NAKSHATRA_TRANSLIT)) {
    if (s.includes(hi)) return en;
  }
  return s;
}
function translateRashiToEn(raw) {
  const s = String(raw ?? "").trim();
  if (!s) return "your Moon sign";
  for (const [hi, info] of Object.entries(RASHI_TRANSLIT)) {
    if (s.includes(hi)) return info.en;
  }
  return s;
}
function translateRashiToSaLoc(raw) {
  const s = String(raw ?? "").trim();
  for (const [hi, info] of Object.entries(RASHI_TRANSLIT)) {
    if (s.includes(hi)) return `${info.sa}राशौ`;
  }
  return "चन्द्रराशौ";
}
function translateGrahaToEn(raw) {
  const s = String(raw ?? "").trim();
  if (!s) return "the ruling planet";
  for (const [hi, info] of Object.entries(GRAHA_TRANSLIT)) {
    if (s.includes(hi)) return info.en;
  }
  return s;
}
function translateGrahaToSa(raw) {
  const s = String(raw ?? "").trim();
  if (!s) return "ग्रहः";
  for (const [hi, info] of Object.entries(GRAHA_TRANSLIT)) {
    if (s.includes(hi)) return info.sa;
  }
  return s;
}
function translateDishaToEn(raw) {
  const s = String(raw ?? "").trim();
  for (const [hi, info] of Object.entries(DISHA_TRANSLIT)) {
    if (s.includes(hi)) return info.en;
  }
  return s || "the indicated direction";
}
function translateDishaToSaLoc(raw) {
  const s = String(raw ?? "").trim();
  for (const [hi, info] of Object.entries(DISHA_TRANSLIT)) {
    if (s.includes(hi)) return info.sa;
  }
  return "निर्दिष्टदिशायाम्";
}
function sanitizeTimeWindowForEn(raw) {
  const s = String(raw ?? "").trim();
  if (!s) return "";
  let cleaned = s;
  let prev = "";
  while (cleaned !== prev) {
    prev = cleaned;
    cleaned = cleaned.replace(/\([^()]*\)/g, " ");
  }
  const panchakTypes = [
    ["अग्नि पंचक", "Agni Panchak"],
    ["रोग पंचक", "Roga Panchak"],
    ["राज पंचक", "Raj Panchak"],
    ["मृत्यु पंचक", "Mrityu Panchak"],
    ["चोर पंचक", "Chora Panchak"],
    ["पंचक", "Panchak"]
  ];
  if (!/\d{1,2}:\d{2}/.test(cleaned)) {
    for (const [hi, en] of panchakTypes) {
      if (cleaned.includes(hi)) return en;
    }
  }
  cleaned = cleaned.replace(/प्रातः\s*/g, "").replace(/दोपहर\s*/g, "").replace(/अपराह्न\s*/g, "").replace(/पूर्वाह्न\s*/g, "").replace(/शाम\s*/g, "").replace(/सायं\s*/g, "").replace(/मध्यरात्रि\s*/g, "").replace(/रात्रि\s*/g, "").replace(/संपूर्ण दिन एवं रात्रि/g, "All day & night").replace(/संपूर्ण दिन/g, "All day").replace(/अगले दिन\s*/g, "Next day ").replace(/\s*से\s*/g, " – ").replace(/\s*तक/g, "").replace(/[\u0900-\u097F]+/g, "").replace(/\s*[•—–-]\s*$/g, "").replace(/\s+/g, " ").trim();
  return cleaned;
}
function cleanSentenceSpacing(text) {
  return text.replace(/\s+/g, " ").replace(/\s+([।॥.,;:])/g, "$1").trim();
}
function selectByMode(mode, variants) {
  if (mode === "SHORT") return variants.short;
  if (mode === "DETAILED") return variants.detailed;
  return variants.standard;
}
function appendAudienceNote(base, audience, notes) {
  if (audience === "LEARNER" && notes.learner) {
    return `${base} ${notes.learner}`;
  }
  if (audience === "SCHOLAR" && notes.scholar) {
    return `${base} ${notes.scholar}`;
  }
  return base;
}
const DOMAIN_HEADINGS_HI = {
  panchang_overview: {
    general: "आज का पंचांग सार",
    learner: "पंचांग के पाँच प्रमुख अंग",
    scholar: "दृक्-गणित पञ्चाङ्ग स्वरूप"
  },
  day_auspiciousness: {
    general: "दिन की शुभता व निर्णय",
    learner: "तिथि-योग आधारित दिन-विचार",
    scholar: "मुहूर्त-शास्त्रानुसार दिनमान निर्णय"
  },
  vrat_and_sadhana: {
    general: "व्रत एवं साधना निर्देश",
    learner: "शास्त्रोक्त व्रत-पर्व मार्गदर्शन",
    scholar: "धर्मसिन्धु-सम्मत व्रत-नियम"
  },
  auspicious_windows: {
    general: "शुभ मुहूर्त काल",
    learner: "शुभ कार्य हेतु अनुकूल समय",
    scholar: "अभिजित् एवं सिद्ध मुहूर्त काल"
  },
  caution_windows: {
    general: "सावधानी व त्याज्य काल",
    learner: "वर्जित समय एवं सावधानियाँ",
    scholar: "राहुकाल, भद्रा व त्याज्य वेला"
  },
  travel_guidance: {
    general: "दिशाशूल एवं यात्रा विचार",
    learner: "वारानुसार दिशाशूल नियम",
    scholar: "यात्रा-दिशाशूल विचार"
  },
  rudrabhishek_muhurat: {
    general: "शिववास एवं रुद्राभिषेक विचार",
    learner: "तिथि सूत्र से शिववास निर्णय",
    scholar: "रुद्राभिषेक-शिववास शास्त्रीय निर्णय"
  },
  havan_muhurat: {
    general: "अग्निवास एवं हवन विचार",
    learner: "यज्ञ-हवन हेतु अग्निवास नियम",
    scholar: "मुहूर्तचिन्तामणि अग्निवास निर्णय"
  },
  personal_bala: {
    general: "व्यक्तिगत ताराबल व चंद्रबल",
    learner: "जन्म नक्षत्र आधारित ताराबल",
    scholar: "स्व-ताराबल एवं चन्द्रबल समीक्षा"
  },
  panchak_muhurat: {
    general: "पंचक विचार एवं सावधानी",
    learner: "पंचक काल में क्या टालें",
    scholar: "पञ्चक-प्रकार एवं शास्त्रनिषिद्ध कर्म"
  },
  bhadra_muhurat: {
    general: "भद्रा काल एवं मुहूर्त सावधानी",
    learner: "भद्रा में मांगलिक कार्य नियम",
    scholar: "विष्टिकरण (भद्रा) मुहूर्त निषेध"
  },
  abhijit_muhurat: {
    general: "अभिजित मुहूर्त सहयोग",
    learner: "मध्याह्न का शुभ अभिजित काल",
    scholar: "अभिजित् मुहूर्त दोष-शमन बल"
  },
  transit_overview: {
    general: "गोचर फल एवं मुख्य संकेत",
    learner: "चंद्र गोचर का भाव-आधारित प्रभाव",
    scholar: "फलदीपिका-सम्मत चन्द्रगोचर विचार"
  },
  career_and_wisdom: {
    general: "गुरु कृपा, कार्य व उन्नति",
    learner: "बृहस्पति गोचर का सहयोग",
    scholar: "बृहस्पति-गोचर अनुग्रह विश्लेषण"
  },
  discipline_and_remedy: {
    general: "शनि अनुशासन एवं सावधानी",
    learner: "शनि गोचर में धैर्य व कर्म-नियम",
    scholar: "शनि-गोचर संयम एवं परिहार"
  },
  natal_foundation: {
    general: "जन्म कुंडली आधार परिचय",
    learner: "लग्न, चंद्र राशि एवं नक्षत्र का अर्थ",
    scholar: "पाराशरी जन्म-लग्न व राशि आधार"
  },
  yogas_and_strength: {
    general: "प्रमुख राजयोग एवं ग्रह बल",
    learner: "कुंडली में शुभ योगों का महत्व",
    scholar: "राजयोग एवं उच्चस्थ ग्रह-बल समीक्षा"
  },
  dasha_outlook: {
    general: "वर्तमान महादशा एवं समय संकेत",
    learner: "विंशोत्तरी दशा का सक्रिय चरण",
    scholar: "विंशोत्तरी महादशा-अन्तर्दशा फल"
  },
  dosha_assessment: {
    general: "दोष विश्लेषण एवं संतुलित दृष्टिकोण",
    learner: "मांगलिक विचार व शास्त्रीय तथ्य",
    scholar: "कुजदोष समीक्षा एवं परिहार-दृष्टि"
  },
  data_precision: {
    general: "जन्म समय सटीकता सूचना",
    learner: "लग्न गणना पर जन्म-समय का प्रभाव",
    scholar: "अनुमानित जन्मकाल सूक्ष्मता-टिप्पणी"
  },
  milan_verdict: {
    general: "अष्टकूट गुण मिलान निष्कर्ष",
    learner: "36 गुण मिलान का परिणाम",
    scholar: "विवाह-प्रकरण अष्टकूट निर्णय"
  },
  dosha_and_parihar: {
    general: "दोष एवं शास्त्रीय परिहार",
    learner: "नाड़ी दोष व उसके अपवाद नियम",
    scholar: "नाड़ीदोष एवं शास्त्रोक्त परिहार निर्णय"
  }
};
function str$1(val, fallback = "") {
  return typeof val === "string" && val.trim().length > 0 ? val.trim() : fallback;
}
function num$2(val) {
  return typeof val === "number" && Number.isFinite(val) ? val : null;
}
function realizeHindiSentence(fact, options) {
  const s = fact.slots;
  const { mode, audience } = options;
  switch (fact.templateKey) {
    case "panchang.core_identity": {
      const vaar = str$1(s.vaarName, "आज");
      const paksha = str$1(s.pakshaLabelHi);
      const tithi = str$1(s.tithiName, "तिथि");
      const nakshatra = str$1(s.nakshatraName, "नक्षत्र");
      const yoga = str$1(s.yogaName);
      const karana = str$1(s.karanaName);
      const pakshaPart = paksha ? `${paksha} ${hindiGenitive()} ` : "";
      const extraPart = yoga && karana ? ` साथ ही ${yoga} योग और ${karana} करण प्रभावी हैं।` : "";
      const base = selectByMode(mode, {
        short: `आज ${vaar} को ${tithi} तिथि और ${nakshatra} नक्षत्र है।`,
        standard: `आज ${vaar} को ${pakshaPart}${tithi} तिथि एवं ${nakshatra} नक्षत्र का संयोग है।`,
        detailed: `आज ${vaar} को ${pakshaPart}${tithi} तिथि तथा ${nakshatra} नक्षत्र का शास्त्रीय संयोग बन रहा है।${extraPart}`
      });
      return appendAudienceNote(base, audience, {
        learner: "पंचांग के इन पाँच अंगों के आधार पर दिन के शुभ-अशुभ काल तय किए जाते हैं।",
        scholar: "दृक्-गणितीय सूर्योदयोपरांत पञ्चाङ्ग घटकों के समन्वय से दैनिक मुहूर्त-निर्णय किया जाता है।"
      });
    }
    case "panchang.verdict.shukla_auspicious": {
      const tithi = str$1(s.tithiName, "तिथि");
      const nakshatra = str$1(s.nakshatraName, "नक्षत्र");
      const base = selectByMode(mode, {
        short: `शुक्ल पक्ष ${hindiGenitive()} ${tithi} तिथि शुभ कार्यों के लिए अनुकूल है।`,
        standard: `शुक्ल पक्ष ${hindiGenitive()} ${tithi} तिथि और ${nakshatra} नक्षत्र के प्रभाव से दिन रचनात्मक व मांगलिक कार्यों के लिए अनुकूल है।`,
        detailed: `शुक्ल पक्ष ${hindiGenitive()} ${tithi} तिथि एवं ${nakshatra} नक्षत्र का संयोग नवीन आरंभ, पूजा-अनुष्ठान तथा नियमित शुभ संकल्पों के लिए विशेष रूप से सकारात्मक ऊर्जा प्रदान करता है।`
      });
      return appendAudienceNote(base, audience, {
        learner: "शुक्ल पक्ष में चंद्रमा का बल बढ़ता है, जिसे नए शुभ कार्यों के लिए सहायक माना जाता है।",
        scholar: "मुहूर्तचिन्तामणि के अनुसार शुक्लपक्षीय शुभ तिथियाँ वृद्धि एवं सिद्धि कारक मानी गई हैं।"
      });
    }
    case "panchang.verdict.rikta_tithi": {
      const tithi = str$1(s.tithiName, "रिक्ता तिथि");
      const base = selectByMode(mode, {
        short: `${tithi} रिक्ता तिथि होने से बड़े मांगलिक आरंभ टालना उचित है।`,
        standard: `${tithi} रिक्ता तिथि मानी जाती है, इसलिए नवीन बड़े मांगलिक कार्यों के स्थान पर नियमित कर्म व साधना को प्राथमिकता दें।`,
        detailed: `${tithi} रिक्ता तिथि श्रेणी में आती है। शास्त्रानुसार इस दिन बड़े मांगलिक अनुष्ठान या नए व्यावसायिक आरंभ के बजाय जप, ध्यान, शोध एवं पूर्व-निर्धारित कार्यों को पूर्ण करना श्रेष्ठ ${hindiCopula("m")}।`
      });
      return appendAudienceNote(base, audience, {
        learner: "चतुर्थी, नवमी और चतुर्दशी को ज्योतिष में रिक्ता तिथि कहा जाता है।",
        scholar: "मुहूर्तशास्त्र में रिक्ता तिथियाँ सामान्य मांगलिक कर्म में त्याज्य, किंतु साधना व शत्रु-शमन कर्म में उपयोगी कही गई हैं।"
      });
    }
    case "panchang.verdict.sarvartha_siddhi": {
      const win = str$1(s.sarvarthaSiddhiWindow);
      const winPart = win ? ` (${win})` : "";
      const base = selectByMode(mode, {
        short: `आज सर्वार्थ सिद्धि योग${winPart} बनने से दिन अत्यंत शुभ है।`,
        standard: `आज सर्वार्थ सिद्धि योग${winPart} का शुभ संयोग बन रहा है, जो महत्वपूर्ण कार्यों की सिद्धि के लिए श्रेष्ठ है।`,
        detailed: `आज सर्वार्थ सिद्धि योग${winPart} सक्रिय है। भद्रा बाधा के अभाव में यह काल नवीन संकल्प, शिक्षा, व्यवसाय एवं धार्मिक अनुष्ठानों के लिए अत्यंत फलदायी सिद्ध ${hindiCopula("m")}।`
      });
      return appendAudienceNote(base, audience, {
        learner: "वार और विशेष नक्षत्र के मेल से बनने वाला सर्वार्थ सिद्धि योग अधिकांश शुभ कार्यों में सहायक होता है।",
        scholar: "मुहूर्तचिन्तामणि में वार-नक्षत्रजन्य सर्वार्थसिद्धि योग को अनेक सामान्य दोषों का शमनकर्ता कहा गया है।"
      });
    }
    case "panchang.verdict.sarvartha_with_bhadra": {
      const sarv = str$1(s.sarvarthaSiddhiWindow);
      const bhadra = str$1(s.bhadraWindow);
      const base = selectByMode(mode, {
        short: `सर्वार्थ सिद्धि योग के साथ भद्रा भी है; भद्रा काल छोड़कर शुभ कार्य करें।`,
        standard: `आज सर्वार्थ सिद्धि योग${sarv ? ` (${sarv})` : ""} और भद्रा काल${bhadra ? ` (${bhadra})` : ""} दोनों सक्रिय हैं, अतः भद्रा अवधि त्यागकर ही मांगलिक कार्य करें।`,
        detailed: `आज दिन का प्रभाव मिश्रित है: सर्वार्थ सिद्धि योग${sarv ? ` (${sarv})` : ""} शुभ अवसर देता है, परंतु भद्रा काल${bhadra ? ` (${bhadra})` : ""} के दौरान मुख्य मांगलिक संकल्प टालना शास्त्रोक्त सावधानी है।`
      });
      return appendAudienceNote(base, audience, {
        learner: "जब शुभ योग और भद्रा एक ही दिन हों, तो भद्रा समाप्त होने के बाद का समय चुनना सुरक्षित रहता है।",
        scholar: "धर्मसिन्धु एवं मुहूर्तचिन्तामणि के समन्वयानुसार भद्रा-त्याग के उपरांत ही सिद्धियोग का पूर्ण लाभ ग्राह्य है।"
      });
    }
    case "panchang.observance.ekadashi": {
      const paksha = str$1(s.pakshaLabelHi);
      const base = selectByMode(mode, {
        short: `आज ${paksha ? `${paksha} ${hindiGenitive()} ` : ""}एकादशी व्रत एवं श्रीहरि साधना का पावन दिन है।`,
        standard: `आज ${paksha ? `${paksha} ${hindiGenitive()} ` : ""}एकादशी है; इस दिन संयम, सात्विक आहार और भगवान विष्णु का स्मरण विशेष कल्याणकारी ${hindiCopula("m")}।`,
        detailed: `आज ${paksha ? `${paksha} ${hindiGenitive()} ` : ""}पावन एकादशी तिथि है। धर्मशास्त्रों के अनुसार इस दिन अन्न-संयम, तुलसी-अर्चन, विष्णु सहस्रनाम पाठ तथा दान-पुण्य से मानसिक शुद्धि एवं आध्यात्मिक शांति प्राप्त ${hindiCopula("f")}।`
      });
      return appendAudienceNote(base, audience, {
        learner: "एकादशी व्रत में पारण (व्रत खोलने) का समय अगले दिन द्वादशी तिथि के भीतर देखा जाता है।",
        scholar: "निर्णयसिन्धु व धर्मसिन्धु के अनुसार सूर्योदयव्यापिनी एवं द्वादशीयुता एकादशी का व्रत-विधान ग्राह्य होता है।"
      });
    }
    case "panchang.observance.pradosh": {
      const vaar = str$1(s.vaarName, "आज");
      const base = selectByMode(mode, {
        short: `आज प्रदोष काल में भगवान शिव की आराधना विशेष फलदायी है।`,
        standard: `${vaar} को त्रयोदशी संयोग होने से सायंकालीन प्रदोष वेला में शिव-पूजन और अभिषेक अत्यंत शुभ माना गया है।`,
        detailed: `${vaar} के साथ त्रयोदशी का संयोग होने से सूर्यास्त के समीप की प्रदोष वेला में भगवान शिव का ध्यान, बिल्वपत्र अर्पण एवं पंचाक्षर जप विशेष शांति व सौभाग्य प्रदान करता है।`
      });
      return appendAudienceNote(base, audience, {
        learner: "प्रदोष काल सूर्यास्त के आसपास की संध्या वेला को कहा जाता है।",
        scholar: "धर्मसिन्धु में सूर्यास्त-व्यापिनी त्रयोदशी में प्रदोष-व्रत एवं शिवार्चन का स्पष्ट विधान है।"
      });
    }
    case "panchang.window.abhijit": {
      const win = str$1(s.abhijitWindow);
      return selectByMode(mode, {
        short: `अभिजित मुहूर्त (${win}) दिन का सबसे शुभ मध्यकाल है।`,
        standard: `आज अभिजित मुहूर्त ${win} तक रहेगा, जो महत्वपूर्ण व आवश्यक शुभ कार्यों के लिए अत्यंत अनुकूल समय है।`,
        detailed: `मध्याह्न काल में अभिजित मुहूर्त (${win}) उपलब्ध है। शास्त्रानुसार यह काल अधिकांश सामान्य दैनिक दोषों का परिहार कर कार्य-सफलता में सहायक ${hindiCopula("m")}।`
      });
    }
    case "panchang.caution.rahukaal": {
      const win = str$1(s.rahukaalWindow);
      return selectByMode(mode, {
        short: `राहुकाल (${win}) में नए शुभ कार्य आरंभ न करें।`,
        standard: `आज राहुकाल ${win} तक रहेगा; इस अवधि में नए मांगलिक या महत्वपूर्ण संकल्प की शुरुआत टालें।`,
        detailed: `दैनिक पंचांग गणना के अनुसार राहुकाल ${win} तक सक्रिय है। इस समय नए शुभ अनुबंध या यात्रा-आरंभ के बजाय पहले से चल रहे नियमित कार्यों को शांतिपूर्वक जारी रखें।`
      });
    }
    case "panchang.caution.bhadra": {
      const win = str$1(s.bhadraWindow);
      return selectByMode(mode, {
        short: `भद्रा काल (${win}) में मांगलिक कार्य वर्जित हैं।`,
        standard: `आज भद्रा काल ${win} तक प्रभावी है; इस अवधि में विवाह, गृह-प्रवेश व नए शुभ संस्कार टालें।`,
        detailed: `आज भद्रा (विष्टि करण) ${win} तक सक्रिय है। मुहूर्तशास्त्र के अनुसार भद्रा अवधि में नए मांगलिक संस्कार व शुभ आरंभ से बचना श्रेयस्कर ${hindiCopula("m")}।`
      });
    }
    case "panchang.caution.panchak": {
      const win = str$1(s.panchakWindow);
      return selectByMode(mode, {
        short: `आज पंचक प्रभावी है; दक्षिण दिशा यात्रा व छत-निर्माण आदि में सावधानी रखें।`,
        standard: `आज पंचक काल${win ? ` (${win})` : ""} सक्रिय है; परंपरागत रूप से दक्षिण दिशा की लंबी यात्रा, लकड़ी-संग्रह व छत डालने जैसे कार्य टाले जाते हैं।`,
        detailed: `धनिष्ठा से रेवती नक्षत्र पर्यंत पंचक काल${win ? ` (${win})` : ""} प्रभावी है। इस अवधि में केवल शास्त्रीय रूप से वर्जित विशेष कर्मों से बचें, जबकि दैनिक पूजा-पाठ व सामान्य कार्य निर्बाध किए जा सकते हैं।`
      });
    }
    case "panchang.travel.disha_shool": {
      const disha = str$1(s.dishaShool);
      const vaar = str$1(s.vaarName, "आज");
      return selectByMode(mode, {
        short: `${vaar} को ${disha} दिशा में दिशाशूल है।`,
        standard: `${vaar} को ${disha} दिशा में दिशाशूल माना जाता है; आवश्यक यात्रा होने पर वारानुसार शास्त्रीय परिहार कर प्रस्थान करें।`,
        detailed: `वार-नियम के अनुसार ${vaar} को ${disha} दिशा में दिशाशूल प्रभावी है। यदि इस दिशा में यात्रा अनिवार्य हो, तो परंपरागत दिशाशूल परिहार और इष्ट-स्मरण के साथ यात्रा आरंभ करना शुभ रहता है।`
      });
    }
    case "muhurat.shivavaas.auspicious": {
      const vaas = str$1(s.vaasNameHi, "शुभ स्थान");
      return selectByMode(mode, {
        short: `शिववास ${vaas} होने से रुद्राभिषेक अत्यंत शुभ है।`,
        standard: `तिथि सूत्र के अनुसार आज शिववास ${vaas} है, जो काम्य व नित्य रुद्राभिषेक के लिए पूर्णतः अनुकूल है।`,
        detailed: `शास्त्रीय तिथि गणना के अनुसार आज भगवान शिव का वास ${vaas} है। इस स्थिति में किया गया रुद्राभिषेक आरोग्य, शांति और मनोवांछित सिद्धि प्रदान करने वाला माना गया है।`
      });
    }
    case "muhurat.shivavaas.inauspicious": {
      const vaas = str$1(s.vaasNameHi, "प्रतिकूल स्थान");
      return selectByMode(mode, {
        short: `शिववास ${vaas} होने से सामान्य काम्य रुद्राभिषेक टालें।`,
        standard: `तिथि गणना में शिववास ${vaas} आने के कारण आज सामान्य काम्य रुद्राभिषेक टालना और केवल नित्य जलाभिषेक करना उचित है।`,
        detailed: `मुहूर्त-सूत्रानुसार शिववास ${vaas} होने से सकाम अनुष्ठान वर्जित माने जाते हैं। सामान्य दशा में नित्य शिव-स्मरण व मानसिक जप करें तथा काम्य अभिषेक हेतु अनुकूल शिववास तिथि चुनें।`
      });
    }
    case "muhurat.shivavaas.shastric_exception": {
      const vaas = str$1(s.vaasNameHi, "तिथि-जन्य स्थिति");
      const base = selectByMode(mode, {
        short: `शिवरात्रि/श्रावण या ज्योतिर्लिंग अपवाद के कारण आज शिववास दोष मान्य नहीं है — रुद्राभिषेक शुभ है।`,
        standard: `यद्यपि सामान्य तिथि सूत्र से शिववास ${vaas} है, परंतु शिवरात्रि, श्रावण मास अथवा ज्योतिर्लिंग क्षेत्र के शास्त्रीय अपवाद से शिववास दोष लागू नहीं होता।`,
        detailed: `सामान्य तिथि सूत्र से शिववास ${vaas} होने पर भी शिवमहापुराण व रुद्राभिषेक परंपरा के स्पष्ट अपवाद के अनुसार महाशिवरात्रि, मासिक शिवरात्रि, श्रावण मास एवं द्वादश ज्योतिर्लिंग क्षेत्रों में शिववास दोष बाधक नहीं होता; रुद्राभिषेक पूर्णतः फलदायी है।`
      });
      return appendAudienceNote(base, audience, {
        scholar: "विशेष अपवाद-नियम सामान्य तिथि-निषेध को शास्त्रानुसार बाधित (override) करता है।"
      });
    }
    case "muhurat.agnivaas.prithvi": {
      const vaas = str$1(s.vaasNameHi, "पृथ्वी पर");
      return selectByMode(mode, {
        short: `अग्निवास ${vaas} होने से हवन-यज्ञ के लिए समय शुभ है।`,
        standard: `आज अग्निवास ${vaas} है, जो समस्त वैदिक हवन, यज्ञ और शांति-अनुष्ठान के लिए श्रेष्ठ माना जाता है।`,
        detailed: `मुहूर्तचिन्तामणि के अग्निवास सूत्र के अनुसार आज अग्नि का वास ${vaas} है। पृथ्वी-निवासी अग्नि में दी गई आहुति सुख, समृद्धि और यज्ञ-सिद्धि प्रदान करती है।`
      });
    }
    case "muhurat.agnivaas.non_prithvi": {
      const vaas = str$1(s.vaasNameHi, "आकाश या पाताल में");
      return selectByMode(mode, {
        short: `अग्निवास ${vaas} होने से आज काम्य हवन टालें।`,
        standard: `आज अग्निवास ${vaas} होने के कारण नए काम्य हवन-यज्ञ को टालकर पृथ्वी-अग्निवास वाले दिन का चयन करना श्रेष्ठ है।`,
        detailed: `तिथि-वार सूत्र से आज अग्नि का वास ${vaas} आ रहा है। शास्त्रानुसार पृथ्वी से भिन्न अग्निवास में सकाम हवन अपेक्षित फल नहीं देता, अतः सामान्य नित्य पूजा ही उपयुक्त है।`
      });
    }
    case "muhurat.tarabal.shubh": {
      const tara = str$1(s.taraNameHi, "शुभ तारा");
      return selectByMode(mode, {
        short: `आपका व्यक्तिगत ताराबल (${tara}) अनुकूल है।`,
        standard: `आपके जन्म नक्षत्र से आज ${tara} का संयोग बन रहा है, जो व्यक्तिगत रूप से शुभ व सहायक है।`,
        detailed: `आपके जन्म नक्षत्र के आधार पर आज ${tara} ताराबल प्राप्त हो रहा है। यह व्यक्तिगत मुहूर्त बल नवीन कार्य, यात्रा और संकल्प में सफलता की संभावना बढ़ाता है।`
      });
    }
    case "muhurat.tarabal.ashubh": {
      const tara = str$1(s.taraNameHi, "प्रतिकूल तारा");
      return selectByMode(mode, {
        short: `आपका व्यक्तिगत ताराबल (${tara}) कमजोर है; बड़े जोखिम से बचें।`,
        standard: `जन्म नक्षत्र से आज ${tara} ताराबल होने के कारण अत्यंत महत्वपूर्ण नए निर्णय या जोखिम भरे कार्य टालें।`,
        detailed: `व्यक्तिगत ताराबल गणना में आज ${tara} की स्थिति है। ऐसे समय में जल्दबाज़ी के बजाय धैर्य, नियमित साधना और पूर्व-नियोजित सुरक्षित कार्यों पर ध्यान देना उत्तम है।`
      });
    }
    case "muhurat.panchak.active": {
      const name = str$1(s.panchakNameHi, "पंचक");
      return selectByMode(mode, {
        short: `आज ${name} प्रभावी है; दक्षिण यात्रा व छत-निर्माण आदि वर्जित कर्म टालें।`,
        standard: `आज ${name} सक्रिय है; मुहूर्तशास्त्र के अनुसार दक्षिण दिशा की लंबी यात्रा, लकड़ी-संग्रह व छत डालने जैसे विशेष कर्म टालना उचित है, जबकि नित्य पूजा-पाठ निर्बाध है।`,
        detailed: `धनिष्ठा से रेवती नक्षत्र तक व्याप्त ${name} आज प्रभावी है। मुहूर्तचिन्तामणि के निर्देशानुसार इसमें केवल पाँच शास्त्र-निषिद्ध कर्मों (दक्षिण यात्रा, छत डालना, चारपाई बुनना, ईंधन संग्रह व शव-दाह विशेष विधि) में सावधानी रखी जाती है; अन्य नियमित व धार्मिक कार्य सहज रूप से किए जा सकते हैं।`
      });
    }
    case "muhurat.bhadra.active": {
      const win = str$1(s.bhadraWindow);
      const winPart = win ? ` (${win})` : "";
      return selectByMode(mode, {
        short: `भद्रा काल${winPart} के दौरान नए मांगलिक संस्कार व शुभ आरंभ टालें।`,
        standard: `आज भद्रा काल${winPart} प्रभावी है; विवाह, गृह-प्रवेश, मुंडन या नए शुभ अनुष्ठान भद्रा समाप्त होने के बाद ही करें।`,
        detailed: `विष्टिकरण से उत्पन्न भद्रा${winPart} आज सक्रिय है। शास्त्रानुसार भद्रा अवधि में नए सकाम मांगलिक आरंभ टालकर नित्य जप-ध्यान और नियमित कर्तव्य पूर्ण करना श्रेष्ठ है।`
      });
    }
    case "muhurat.abhijit.support": {
      const win = str$1(s.abhijitWindow);
      const winPart = win ? ` (${win})` : "";
      return selectByMode(mode, {
        short: `भद्रा-मुक्त अभिजित मुहूर्त${winPart} आज आवश्यक शुभ कार्यों के लिए श्रेष्ठ समय है।`,
        standard: `आज भद्रा बाधा के बिना मध्याह्न में अभिजित मुहूर्त${winPart} उपलब्ध है, जो महत्वपूर्ण व आवश्यक शुभ संकल्पों की सिद्धि में सहायक है।`,
        detailed: `मुहूर्तचिन्तामणि के अनुसार मध्याह्न का अभिजित मुहूर्त${winPart} अनेक सामान्य दैनिक दोषों का परिहार करता है; भद्रा के अभाव में यह काल शुभ शुरुआत हेतु अत्यंत अनुकूल है।`
      });
    }
    case "rashifal.moon.favorable": {
      const rashi = str$1(s.rashiNameHi, "आपकी");
      const houseText = hindiHouseOrdinal(s.moonHouse);
      return selectByMode(mode, {
        short: `${rashi} राशि के लिए ${houseText} में चंद्र गोचर शुभ व सहायक है।`,
        standard: `${rashi} राशि के जातकों हेतु चंद्रमा का ${houseText} में गोचर मानसिक स्पष्टता, कार्य-गति और सकारात्मक परिणाम देने वाला है।`,
        detailed: `फलदीपिका के गोचर सिद्धांत के अनुसार ${rashi} राशि से ${houseText} में चंद्रमा का संचरण मन को संतुलित रखता है तथा संबंधों, कार्यक्षेत्र व दैनिक निर्णयों में सहज सफलता प्रदान करता है।`
      });
    }
    case "rashifal.moon.chandrashtama": {
      const rashi = str$1(s.rashiNameHi, "आपकी");
      return selectByMode(mode, {
        short: `${rashi} राशि के लिए चंद्रमा अष्टम भाव (चंद्राष्टम) में हैं; संयम व सावधानी रखें।`,
        standard: `${rashi} राशि से अष्टम भाव में चंद्र गोचर (चंद्राष्टम) होने से अनावश्यक विवाद, जल्दबाज़ी और नए वित्तीय जोखिम से बचना चाहिए।`,
        detailed: `${rashi} राशि के लिए आज चंद्रमा अष्टम भाव में संचरण कर रहे हैं, जिसे ज्योतिष में चंद्राष्टम कहा जाता है। इस अवधि में वाणी पर संयम, स्वास्थ्य का ध्यान और शांत चित्त से नियमित कार्य करना सर्वोत्तम उपाय है।`
      });
    }
    case "rashifal.moon.chandrashtama_jupiter_shield": {
      const rashi = str$1(s.rashiNameHi, "आपकी");
      const jupHouse = hindiHouseOrdinal(s.jupiterHouse);
      return selectByMode(mode, {
        short: `चंद्राष्टम की सावधानी के बीच ${jupHouse} के बृहस्पति का शुभ संरक्षण प्राप्त है।`,
        standard: `${rashi} राशि के लिए चंद्राष्टम होने से सावधानी आवश्यक है, किंतु ${jupHouse} में शुभ बृहस्पति का गोचर बड़े अवरोधों से रक्षा व विवेक प्रदान करता है।`,
        detailed: `गोचर समन्वय के अनुसार ${rashi} राशि पर अष्टम चंद्रमा का प्रभाव धैर्य की माँग करता है, लेकिन ${jupHouse} में स्थित बृहस्पति की शुभ दृष्टि और बल नकारात्मकता को संतुलित कर सही मार्गदर्शन देते हैं।`
      });
    }
    case "rashifal.jupiter.support": {
      const jupHouse = hindiHouseOrdinal(s.jupiterHouse);
      return selectByMode(mode, {
        short: `${jupHouse} में बृहस्पति का गोचर ज्ञान, प्रतिष्ठा व प्रगति में सहायक है।`,
        standard: `${jupHouse} में बृहस्पति की अनुकूल स्थिति शिक्षा, करियर निर्णय और परिवारिक समरसता को बल प्रदान करती है।`,
        detailed: `दीर्घकालिक गोचर में ${jupHouse} के बृहस्पति विवेक, धर्म-रुचि और अवसरों में स्थिर विस्तार का समर्थन करते हैं।`
      });
    }
    case "rashifal.saturn.discipline": {
      const satHouse = hindiHouseOrdinal(s.saturnHouse);
      return selectByMode(mode, {
        short: `${satHouse} में शनि का गोचर अनुशासन, धैर्य और निरंतर परिश्रम की माँग करता है।`,
        standard: `${satHouse} में शनि के प्रभाव से तुरंत परिणाम की अपेक्षा के बजाय नियमित कर्म, समय-प्रबंधन और सत्यनिष्ठा अपनाना लाभप्रद रहेगा।`,
        detailed: `शनि का ${satHouse} में संचरण कर्म-परीक्षा का संकेत है; इसमें शॉर्टकट से बचकर धैर्यपूर्वक प्रयास करने पर दीर्घकालिक व स्थायी सफलता प्राप्त होती है।`
      });
    }
    case "kundali.foundation.identity": {
      const lagna = str$1(s.lagnaName, "लग्न");
      const lord = str$1(s.lagnaLord);
      const moon = str$1(s.moonRashiName, "चंद्र राशि");
      const nak = str$1(s.nakshatraName);
      return selectByMode(mode, {
        short: `आपकी कुंडली ${lagna} लग्न एवं ${moon} चंद्र राशि की है।`,
        standard: `जन्म कुंडली ${lagna} लग्न${lord ? ` (लग्नेश: ${lord})` : ""} और ${moon} चंद्र राशि${nak ? ` तथा ${nak} नक्षत्र` : ""} पर आधारित है।`,
        detailed: `पाराशरी सिद्धांत के अनुसार ${lagna} लग्न${lord ? ` (स्वामी ${lord})` : ""} आपके व्यक्तित्व व जीवन-दिशा का आधार है, जबकि ${moon} चंद्र राशि${nak ? ` एवं ${nak} नक्षत्र` : ""} आपके मन, संवेदनशीलता और दशा-क्रम को संचालित करते हैं।`
      });
    }
    case "kundali.yoga.strong_rajyoga": {
      const count = num$2(s.rajYogaCount) ?? 1;
      const exalted = num$2(s.exaltedPlanetCount) ?? 0;
      const exPart = exalted > 0 ? ` तथा ${exalted} उच्चस्थ ग्रह` : "";
      return selectByMode(mode, {
        short: `कुंडली में ${count} प्रमुख राजयोग${exPart} शुभ फल के संकेत देते हैं।`,
        standard: `जन्म कुंडली में ${count} प्रबल राजयोग${exPart} की उपस्थिति नेतृत्व क्षमता, सामाजिक सम्मान और अनुकूल दशा में उल्लेखनीय उन्नति का संकेत देती है।`,
        detailed: `आपकी जन्म कुंडली में ${count} प्रबल राजयोग${exPart} निर्मित हो रहे हैं। बृहत् पाराशर होरा शास्त्र के अनुसार ऐसे योग अपनी संबद्ध ग्रह-दशाओं में पद, प्रतिष्ठा और कार्यसिद्धि प्रदान करते हैं।`
      });
    }
    case "kundali.dasha.current": {
      const maha = str$1(s.currentMahadashaPlanet, "सक्रिय ग्रह");
      const antar = str$1(s.currentAntardashaPlanet);
      const antarPart = antar ? ` एवं ${antar} अंतर्दशा` : "";
      return selectByMode(mode, {
        short: `वर्तमान में ${maha} महादशा${antarPart} सक्रिय है।`,
        standard: `विंशोत्तरी क्रम में इस समय ${maha} की महादशा${antarPart} चल रही है, जो वर्तमान कालखंड के मुख्य अवसरों और प्राथमिकताओं को दिशा दे रही है।`,
        detailed: `आपकी कुंडली में वर्तमान में ${maha} महादशा${antarPart} प्रभावी है। महादशानाथ की भाव-स्थिति और बल के अनुरूप इस काल में संबंधित जीवन-क्षेत्र प्रमुखता से सक्रिय रहते हैं।`
      });
    }
    case "kundali.dosha.manglik": {
      const sev = str$1(s.manglikSeverity, "मांगलिक");
      const house = num$2(s.marsHouse);
      const housePart = house ? ` (${hindiHouseOrdinal(house)} में मंगल)` : "";
      return selectByMode(mode, {
        short: `कुंडली में ${sev} स्थिति${housePart} है; विवाह से पूर्व पूर्ण मिलान उचित है।`,
        standard: `कुंडली में ${sev} योग${housePart} दृष्टिगोचर है। भयभीत होने के बजाय विवाह के समय गुण-मिलान के साथ सप्तम भाव व परिहार नियमों की समग्र समीक्षा करना आवश्यक है।`,
        detailed: `जन्म कुंडली में ${sev} स्थिति${housePart} बन रही है। शास्त्रीय ज्योतिष में अनेक स्थितियों में मांगलिक दोष स्वतः शांत (परिहार) हो जाता है, इसलिए केवल एकांगी दोष के बजाय पूर्ण कुंडली व नवमांश मिलान से निर्णय लेना चाहिए।`
      });
    }
    case "kundali.precision.uncertain_time": {
      return selectByMode(mode, {
        short: `जन्म समय अनुमानित होने से लग्न व सूक्ष्म दशा में अंतर संभव है।`,
        standard: `आपका जन्म समय अनुमानित श्रेणी में है; इसलिए चंद्र राशि आधारित फल अधिक स्थिर रहेंगे, जबकि लग्न और वर्ग कुंडलियों के लिए सटीक जन्म समय की पुष्टि आवश्यक है।`,
        detailed: `क्योंकि जन्म समय पूर्णतः निश्चित नहीं है, अतः लग्न-अंश, नवमांश तथा सूक्ष्म अंतर्दशा में परिवर्तन संभव है। सटीक फलादेश हेतु चंद्र कुंडली के साथ जन्म-समय शोधन (Birth Time Rectification) उपयोगी रहेगा।`
      });
    }
    case "milan.verdict.excellent": {
      const score = num$2(s.totalScore) ?? 0;
      const max = num$2(s.maxScore) ?? 36;
      return selectByMode(mode, {
        short: `अष्टकूट मिलान में ${score}/${max} गुण प्राप्त हुए हैं — यह उत्तम मिलान है।`,
        standard: `अष्टकूट गणना में ${score}/${max} गुणों की प्राप्ति वैवाहिक सामंजस्य, पारस्परिक समझ और दीर्घकालिक अनुकूलता का उत्तम संकेत है।`,
        detailed: `मुहूर्तचिन्तामणि के विवाह-प्रकरण के अनुसार 36 में से ${score} गुणों की प्राप्ति उत्कृष्ट श्रेणी में आती है। यह मानसिक, पारिवारिक और व्यावहारिक तालमेल के लिए अत्यंत अनुकूल आधार प्रदान करती है।`
      });
    }
    case "milan.verdict.moderate": {
      const score = num$2(s.totalScore) ?? 0;
      const max = num$2(s.maxScore) ?? 36;
      return selectByMode(mode, {
        short: `अष्टकूट मिलान में ${score}/${max} गुण हैं — यह मध्यम व स्वीकार्य मिलान है।`,
        standard: `इस मिलान में ${score}/${max} गुण प्राप्त हुए हैं, जो मध्यम श्रेणी का अनुकूल मिलान है; सप्तम भाव और नवमांश की समीक्षा से निर्णय और स्पष्ट होगा।`,
        detailed: `36 में से ${score} गुणों का परिणाम मध्यम व स्वीकृत श्रेणी में आता है। पूर्ण वैवाहिक निर्णय के लिए अष्टकूट के साथ दोनों कुंडलियों के सप्तमेश, शुक्र-गुरु बल तथा दशा-संगति का भी मिलान करना श्रेष्ठ है।`
      });
    }
    case "milan.verdict.low": {
      const score = num$2(s.totalScore) ?? 0;
      const max = num$2(s.maxScore) ?? 36;
      return selectByMode(mode, {
        short: `अष्टकूट स्कोर ${score}/${max} न्यून है; विद्वान ज्योतिषी से गहन समीक्षा आवश्यक है।`,
        standard: `अष्टकूट मिलान में ${score}/${max} गुण (18 से कम) प्राप्त हुए हैं, अतः केवल गुणों पर निर्भर न रहकर संपूर्ण जन्म कुंडली व दोष-परिहार की गहन जाँच कराएँ।`,
        detailed: `36 में से ${score} गुणों की प्राप्ति शास्त्रोक्त न्यूनतम मानक (18 गुण) से कम है। ऐसे प्रकरण में विवाह-निर्णय से पूर्व लग्न, नवमांश, सप्तम भाव तथा ग्रह-मैत्री की विस्तृत विद्वत् समीक्षा अनिवार्य मानी गई है।`
      });
    }
    case "milan.dosha.nadi_active": {
      return selectByMode(mode, {
        short: `मिलान में नाड़ी दोष प्रभावी है; इसके लिए शास्त्रीय परामर्श आवश्यक है।`,
        standard: `दोनों की नाड़ी समान होने से नाड़ी दोष बन रहा है और कोई स्वतः परिहार लागू नहीं हुआ है, इसलिए वैवाहिक निर्णय से पूर्व विद्वान आचार्य से समीक्षा कराएँ।`,
        detailed: `अष्टकूट में सर्वाधिक 8 अंकों वाला नाड़ी कूट शून्य होने से नाड़ी दोष प्रभावी है। शास्त्रानुसार संतान, स्वास्थ्य एवं पारिवारिक संतुलन के विचार हेतु बिना परिहार नाड़ी दोष की गहन समीक्षा आवश्यक होती है।`
      });
    }
    case "milan.dosha.nadi_cancelled": {
      return selectByMode(mode, {
        short: `नाड़ी दोष पर शास्त्रीय परिहार लागू होने से यह दोष शांत हो गया है।`,
        standard: `यद्यपि अष्टकूट में नाड़ी समान है, परंतु शास्त्रोक्त परिहार नियम लागू होने के कारण नाड़ी दोष का अशुभ प्रभाव निरस्त (रद्द) माना जाता है।`,
        detailed: `बृहत् पाराशर एवं विवाह-शास्त्र के स्पष्ट परिहार नियमों के अंतर्गत इस कुंडली मिलान में नाड़ी दोष स्वतः शांत हो रहा है; अतः इस कारण विवाह में अनावश्यक बाधा की आशंका नहीं रहती।`
      });
    }
    default:
      return `शास्त्रीय नियम (${fact.conceptKey}) के अनुसार गणनात्मक तथ्य सत्यापित हैं।`;
  }
}
const hindiLocalePlugin = {
  locale: "hi-IN",
  displayName: "हिन्दी (भारत)",
  direction: "ltr",
  getDomainHeading(domain, audience) {
    const entry = DOMAIN_HEADINGS_HI[domain];
    if (!entry) return "ज्योतिषीय विश्लेषण";
    if (audience === "LEARNER") return entry.learner;
    if (audience === "SCHOLAR") return entry.scholar;
    return entry.general;
  },
  realizeFact(fact, options) {
    const sentence = cleanSentenceSpacing(realizeHindiSentence(fact, options));
    const semanticFingerprint = computeDeterministicHash({
      conceptKey: fact.conceptKey,
      domain: fact.domain,
      polarity: fact.polarity
    });
    return {
      conceptKey: fact.conceptKey,
      domain: fact.domain,
      sentence,
      semanticFingerprint
    };
  },
  joinParagraph(sentences, mode) {
    const clean = sentences.map((x) => cleanSentenceSpacing(x)).filter(Boolean);
    if (clean.length === 0) return "";
    return mode === "SHORT" ? clean[0] : clean.join(" ");
  }
};
const DOMAIN_HEADINGS_EN = {
  panchang_overview: {
    general: "Daily Panchang Overview",
    learner: "Five Core Limbs of Today’s Panchang",
    scholar: "Drik Ganita Panchanga Composition"
  },
  day_auspiciousness: {
    general: "Day Auspiciousness & Guidance",
    learner: "Evaluating Tithi and Yoga Balance",
    scholar: "Muhurta Shastra Day Verdict"
  },
  vrat_and_sadhana: {
    general: "Vrat & Spiritual Observances",
    learner: "Sacred Fasting & Observance Guide",
    scholar: "Dharma Sindhu Vrat Determination"
  },
  auspicious_windows: {
    general: "Auspicious Muhurta Windows",
    learner: "Favorable Timing Windows",
    scholar: "Abhijit & Siddhi Muhurta Periods"
  },
  caution_windows: {
    general: "Caution & Avoidable Periods",
    learner: "Timing Windows Requiring Restraint",
    scholar: "Rahukaal, Bhadra & Tyajya Kaal"
  },
  travel_guidance: {
    general: "Disha Shool & Travel Guidance",
    learner: "Weekday Directional Rule (Disha Shool)",
    scholar: "Yatra Disha Shool Consideration"
  },
  rudrabhishek_muhurat: {
    general: "Shivavaas & Rudrabhishek Guidance",
    learner: "Understanding Tithi-Based Shivavaas",
    scholar: "Shastric Shivavaas Determination"
  },
  havan_muhurat: {
    general: "Agnivaas & Havan Suitability",
    learner: "Fire-Abode Rule for Vedic Havan",
    scholar: "Muhurta Chintamani Agnivaas Verdict"
  },
  personal_bala: {
    general: "Personal Tarabal & Chandrabal",
    learner: "Birth-Nakshatra Compatibility Today",
    scholar: "Individual Tarabala Assessment"
  },
  panchak_muhurat: {
    general: "Panchak Consideration & Cautions",
    learner: "What to Avoid During Panchak",
    scholar: "Panchak Classification & Classical Rules"
  },
  bhadra_muhurat: {
    general: "Bhadra Kaal Muhurta Caution",
    learner: "Why Auspicious Starts Pause in Bhadra",
    scholar: "Vishti Karana (Bhadra) Restriction"
  },
  abhijit_muhurat: {
    general: "Abhijit Muhurta Support",
    learner: "Midday Auspicious Abhijit Window",
    scholar: "Abhijit Muhurta Dosha-Mitigation Window"
  },
  transit_overview: {
    general: "Transit Overview & Key Signals",
    learner: "How Moon Transit Shapes This Period",
    scholar: "Phaladeepika Gochar Synthesis"
  },
  career_and_wisdom: {
    general: "Jupiter Support & Growth",
    learner: "Benefic Influence of Jupiter’s Transit",
    scholar: "Brihaspati Gochar Anugraha"
  },
  discipline_and_remedy: {
    general: "Saturn Discipline & Pacing",
    learner: "Navigating Saturn’s Transit Mindfully",
    scholar: "Shani Gochar Karma & Restraint"
  },
  natal_foundation: {
    general: "Birth Chart Foundation",
    learner: "Your Lagna, Moon Sign & Nakshatra",
    scholar: "Parashari Lagna & Chandra Adhara"
  },
  yogas_and_strength: {
    general: "Raj Yogas & Planetary Strength",
    learner: "Key Auspicious Combinations in Your Chart",
    scholar: "Rajayoga & Uccha Graha Assessment"
  },
  dasha_outlook: {
    general: "Active Vimshottari Dasha",
    learner: "Current Planetary Period Influence",
    scholar: "Vimshottari Mahadasha-Antardasha Analysis"
  },
  dosha_assessment: {
    general: "Dosha Assessment & Perspective",
    learner: "Understanding Manglik Placement Objectively",
    scholar: "Kuja Dosha Evaluation & Parihar Lens"
  },
  data_precision: {
    general: "Birth Time Precision Notice",
    learner: "Why Exact Birth Time Matters for Lagna",
    scholar: "Approximate Birth Time Sensitivity Note"
  },
  milan_verdict: {
    general: "Ashtakoot 36-Gun Compatibility Verdict",
    learner: "Interpreting Your Gun Milan Score",
    scholar: "Vivaha Prakarana Ashtakoot Synthesis"
  },
  dosha_and_parihar: {
    general: "Dosha & Shastric Cancellation (Parihar)",
    learner: "Understanding Nadi Dosha and Exceptions",
    scholar: "Nadi Dosha & Classical Parihar Ruling"
  }
};
function num$1(val) {
  return typeof val === "number" && Number.isFinite(val) ? val : null;
}
function housePhraseEn(house) {
  const n = num$1(house);
  if (n !== null && n >= 1 && n <= 12) {
    return `the ${englishOrdinal(n)} house`;
  }
  return "the active house";
}
function realizeEnglishSentence(fact, options) {
  const s = fact.slots;
  const { mode, audience } = options;
  switch (fact.templateKey) {
    case "panchang.core_identity": {
      const vaar = translateVaarToEn(s.vaarName);
      const paksha = translatePakshaToEn(s.pakshaLabelHi);
      const tithi = translateTithiToEn(s.tithiName);
      const nak = translateNakshatraToEn(s.nakshatraName);
      const base = selectByMode(mode, {
        short: `${vaar} features ${tithi} Tithi with ${nak} Nakshatra.`,
        standard: `Today (${vaar}) combines ${tithi} Tithi in ${paksha} with ${nak} Nakshatra.`,
        detailed: `According to Drik Ganita Panchang, ${vaar} aligns ${tithi} Tithi during ${paksha} alongside ${nak} Nakshatra, establishing the primary lunar-stellar rhythm for daily decisions.`
      });
      return appendAudienceNote(base, audience, {
        learner: "Together, weekday, Tithi, and Nakshatra form the core framework used to judge daily suitability.",
        scholar: "Classical Muhurta synthesis evaluates sunrise-anchored Tithi and Nakshatra continuity before weighing secondary yogas."
      });
    }
    case "panchang.verdict.shukla_auspicious": {
      const tithi = translateTithiToEn(s.tithiName);
      const nak = translateNakshatraToEn(s.nakshatraName);
      const adj = "auspicious";
      const art = englishIndefiniteArticle(adj);
      const base = selectByMode(mode, {
        short: `${tithi} in Shukla Paksha creates ${art} ${adj} day for constructive undertakings.`,
        standard: `With ${tithi} in the waxing lunar fortnight and ${nak} Nakshatra active, the day supports constructive beginnings and sacred observances.`,
        detailed: `The waxing lunar phase of ${tithi} paired with ${nak} Nakshatra provides steady momentum for spiritual rituals, learning, and well-planned new initiatives.`
      });
      return appendAudienceNote(base, audience, {
        learner: "Shukla Paksha reflects increasing lunar strength, traditionally favored for growth-oriented actions.",
        scholar: "Muhurta Chintamani classifies non-Rikta Shukla Paksha tithis as supportive for constructive karma."
      });
    }
    case "panchang.verdict.rikta_tithi": {
      const tithi = translateTithiToEn(s.tithiName);
      const base = selectByMode(mode, {
        short: `${tithi} is a Rikta Tithi; defer major auspicious beginnings.`,
        standard: `${tithi} falls in the Rikta Tithi category, making it better suited for routine responsibilities and inner discipline rather than major new inaugurations.`,
        detailed: `Because ${tithi} is classified as a Rikta Tithi, classical Muhurta texts advise avoiding major auspicious commencements while continuing regular duties, study, and mantra sadhana smoothly.`
      });
      return appendAudienceNote(base, audience, {
        learner: "Chaturthi (4th), Navami (9th), and Chaturdashi (14th) are termed Rikta (empty) tithis.",
        scholar: "Unless counterbalanced by Siddhi Yoga or specific deity vrat rules, Rikta tithis are deferred for kamya mangala rituals."
      });
    }
    case "panchang.verdict.sarvartha_siddhi": {
      const win = sanitizeTimeWindowForEn(s.sarvarthaSiddhiWindow);
      const winPart = win ? ` (${win})` : "";
      const base = selectByMode(mode, {
        short: `Sarvartha Siddhi Yoga${winPart} makes today highly favorable for key tasks.`,
        standard: `An auspicious Sarvartha Siddhi Yoga${winPart} is active without Bhadra interference, offering strong support for important commencements.`,
        detailed: `Sarvartha Siddhi Yoga${winPart} forms cleanly today without Bhadra obstruction, providing an exceptionally supportive window for education, business milestones, and sacred sankalpas.`
      });
      return appendAudienceNote(base, audience, {
        learner: "Sarvartha Siddhi Yoga arises from specific classical weekday-Nakshatra pairings.",
        scholar: "Muhurta Chintamani notes that Sarvartha Siddhi Yoga mitigates numerous minor daily doshas."
      });
    }
    case "panchang.verdict.sarvartha_with_bhadra": {
      const sarv = sanitizeTimeWindowForEn(s.sarvarthaSiddhiWindow);
      const bhadra = sanitizeTimeWindowForEn(s.bhadraWindow);
      return selectByMode(mode, {
        short: `Both Sarvartha Siddhi Yoga and Bhadra are active; perform key tasks strictly outside Bhadra.`,
        standard: `Today blends Sarvartha Siddhi Yoga${sarv ? ` (${sarv})` : ""} with Bhadra Kaal${bhadra ? ` (${bhadra})` : ""}; schedule auspicious beginnings only after Bhadra concludes.`,
        detailed: `This day presents a mixed Muhurta profile: while Sarvartha Siddhi Yoga${sarv ? ` (${sarv})` : ""} brings strong accomplishment potential, Bhadra Kaal${bhadra ? ` (${bhadra})` : ""} requires careful exclusion for new auspicious ceremonies.`
      });
    }
    case "panchang.observance.ekadashi": {
      const paksha = translatePakshaToEn(s.pakshaLabelHi);
      return selectByMode(mode, {
        short: `Today is sacred Ekadashi, dedicated to mindful restraint and Vishnu worship.`,
        standard: `Today observes Ekadashi during ${paksha}, a sacred day for sattvic discipline, charity, and devotion to Lord Vishnu.`,
        detailed: `Ekadashi during ${paksha} holds high scriptural merit in Dharma Sindhu and Nirnaya Sindhu; fasting or light sattvic conduct alongside Vishnu Sahasranama recitation nurtures clarity and inner peace.`
      });
    }
    case "panchang.observance.pradosh": {
      const vaar = translateVaarToEn(s.vaarName);
      return selectByMode(mode, {
        short: `Pradosh evening twilight today is highly auspicious for Shiva worship.`,
        standard: `With Trayodashi falling on ${vaar}, evening Pradosh twilight is especially favorable for Shiva archana and peaceful contemplation.`,
        detailed: `The alignment of Trayodashi on ${vaar} sanctifies the sunset Pradosh window, where Shiva worship, Bilva offering, and quiet japa are traditionally considered deeply harmonizing.`
      });
    }
    case "panchang.window.abhijit": {
      const win = sanitizeTimeWindowForEn(s.abhijitWindow);
      return selectByMode(mode, {
        short: `Abhijit Muhurta (${win}) is today’s prime midday auspicious window.`,
        standard: `Abhijit Muhurta runs during ${win}, offering a reliable midday window for essential auspicious tasks.`,
        detailed: `Abhijit Muhurta (${win}) marks the midday solar zenith window, traditionally valued in Muhurta Chintamani for neutralizing minor timing imperfections during urgent auspicious work.`
      });
    }
    case "panchang.caution.rahukaal": {
      const win = sanitizeTimeWindowForEn(s.rahukaalWindow);
      return selectByMode(mode, {
        short: `Avoid initiating new auspicious tasks during Rahukaal (${win}).`,
        standard: `Rahukaal spans ${win} today; defer new contracts or ceremonial beginnings until this window passes.`,
        detailed: `Rahukaal is active between ${win}. Routine responsibilities already underway can continue normally, while fresh auspicious initiatives are best scheduled outside this period.`
      });
    }
    case "panchang.caution.bhadra": {
      const win = sanitizeTimeWindowForEn(s.bhadraWindow);
      return selectByMode(mode, {
        short: `Bhadra Kaal (${win}) calls for postponing new auspicious ceremonies.`,
        standard: `Bhadra (Vishti Karana) is active during ${win}; postpone major auspicious beginnings until it ends.`,
        detailed: `Vishti Karana (Bhadra) spans ${win}. Classical Muhurta guidelines recommend deferring fresh auspicious ceremonies during Bhadra while keeping daily spiritual routines unaffected.`
      });
    }
    case "panchang.caution.panchak": {
      const win = sanitizeTimeWindowForEn(s.panchakWindow);
      return selectByMode(mode, {
        short: `Panchak is active; observe traditional cautions for southward travel and roof construction.`,
        standard: `Panchak${win ? ` (${win})` : ""} is active today; traditional guidelines advise avoiding specific restricted tasks such as southern journeys or roof-laying.`,
        detailed: `Panchak${win ? ` (${win})` : ""} is in effect while the Moon transits Dhanishta through Revati. Only specific classically restricted tasks require caution; daily worship and routine duties remain unaffected.`
      });
    }
    case "panchang.travel.disha_shool": {
      const disha = translateDishaToEn(s.dishaShool);
      const vaar = translateVaarToEn(s.vaarName);
      return selectByMode(mode, {
        short: `Disha Shool applies to the ${disha} direction on ${vaar}.`,
        standard: `On ${vaar}, Disha Shool falls in the ${disha} direction; if travel is essential, follow the traditional weekday remedy before departing.`,
        detailed: `Traditional travel guidelines indicate Disha Shool toward the ${disha} on ${vaar}. When travel toward the ${disha} cannot be deferred, performing the simple weekday parihar before setting out is recommended.`
      });
    }
    case "muhurat.shivavaas.auspicious": {
      const vaas = String(s.vaasNameEn || "an auspicious abode").trim();
      return selectByMode(mode, {
        short: `Shivavaas is in ${vaas}, making today auspicious for Rudrabhishek.`,
        standard: `By the classical Tithi formula, Shivavaas resides in ${vaas}, which is favorable for both regular and wish-fulfilling Rudrabhishek.`,
        detailed: `Classical Rudrabhishek Muhurta calculation places Shivavaas in ${vaas} today, indicating a harmonious period for Shiva abhishek, peace, and spiritual well-being.`
      });
    }
    case "muhurat.shivavaas.inauspicious": {
      const vaas = String(s.vaasNameEn || "an unfavorable abode").trim();
      return selectByMode(mode, {
        short: `Shivavaas is in ${vaas}; defer optional kamya Rudrabhishek today.`,
        standard: `Because Shivavaas falls in ${vaas}, optional wish-fulfilling Rudrabhishek should be deferred while regular daily Shiva devotion continues normally.`,
        detailed: `Under standard Tithi-based Shivavaas rules, ${vaas} is not chosen for optional kamya Rudrabhishek. Continue regular daily prayers and select an auspicious Shivavaas day for special rituals.`
      });
    }
    case "muhurat.shivavaas.shastric_exception": {
      return selectByMode(mode, {
        short: `A Shastric exception (Shivaratri, Shravan, or Jyotirlinga) overrides Shivavaas dosha today.`,
        standard: `Although the standard Tithi calculation shows an unfavorable Shivavaas, the Shastric exception for Shivaratri, Shravan, or Jyotirlinga kshetras overrides the restriction, making Rudrabhishek highly auspicious.`,
        detailed: `In accordance with Shiva Mahapurana and traditional Rudrabhishek injunctions, this Shastric exception for sacred occasions (Shivaratri, Shravan month) and Jyotirlinga sanctums supersedes the ordinary Shivavaas prohibition, allowing Rudrabhishek with full merit.`
      });
    }
    case "muhurat.agnivaas.prithvi": {
      return selectByMode(mode, {
        short: `Agnivaas is on Prithvi (Earth), making today auspicious for Vedic Havan.`,
        standard: `Agnivaas resides on Prithvi (Earth) today, which is the classically approved state for performing Vedic Havan and Yagya.`,
        detailed: `By the Muhurta Chintamani formula, Agni resides on Prithvi (Earth) today—signifying stability, auspiciousness, and fruitful sacred fire offerings.`
      });
    }
    case "muhurat.agnivaas.non_prithvi": {
      const realm = String(s.vaasRealm || "non-terrestrial").toLowerCase();
      const realmLabel = realm === "akasha" ? "Akasha (Sky)" : realm === "patala" ? "Patala (Netherworld)" : "a non-terrestrial realm";
      return selectByMode(mode, {
        short: `Agnivaas is in ${realmLabel}; defer optional Havan today.`,
        standard: `With Agnivaas in ${realmLabel}, classical rules advise deferring optional kamya Havan to a Prithvi-Agnivaas day.`,
        detailed: `Calculated Agnivaas falls in ${realmLabel} rather than Prithvi. Standard Muhurta guidelines recommend scheduling wish-fulfilling fire rituals when Agnivaas returns to Prithvi.`
      });
    }
    case "muhurat.tarabal.shubh": {
      const tNum = num$1(s.taraNumber);
      const ord = tNum ? `${englishOrdinal(tNum)} ` : "";
      return selectByMode(mode, {
        short: `Your personal Tarabal (${ord}Tara) is supportive today.`,
        standard: `Measured from your birth Nakshatra, today yields a favorable ${ord}Tara, supporting personal initiatives and travel.`,
        detailed: `Your individualized Tarabala calculation indicates a supportive ${ord}Tara today, strengthening personal alignment with the day’s lunar asterism.`
      });
    }
    case "muhurat.tarabal.ashubh": {
      const tNum = num$1(s.taraNumber);
      const ord = tNum ? `${englishOrdinal(tNum)} ` : "";
      return selectByMode(mode, {
        short: `Your personal Tarabal (${ord}Tara) advises caution on major new risks.`,
        standard: `Relative to your birth Nakshatra, today’s ${ord}Tara is challenging; keep plans measured and avoid impulsive high-stakes starts.`,
        detailed: `Your personal Tarabala registers an unfavorable ${ord}Tara today. Focusing on routine tasks, calm reflection, and established commitments is the wisest course.`
      });
    }
    case "muhurat.panchak.active": {
      const name = sanitizeTimeWindowForEn(s.panchakNameHi) || "Panchak";
      return selectByMode(mode, {
        short: `${name} is active today; avoid southward long travel and roof-laying.`,
        standard: `${name} is active today; classical Muhurta rules restrict specific tasks such as southern journeys, fuel hoarding, and roof construction, while daily worship remains unaffected.`,
        detailed: `With ${name} in effect across Dhanishta to Revati, Muhurta Chintamani restricts only the five traditionally designated acts while leaving regular spiritual practices and routine responsibilities clear.`
      });
    }
    case "muhurat.bhadra.active": {
      const win = sanitizeTimeWindowForEn(s.bhadraWindow);
      const winPart = win ? ` (${win})` : "";
      return selectByMode(mode, {
        short: `Defer new auspicious ceremonies during Bhadra Kaal${winPart}.`,
        standard: `Bhadra Kaal${winPart} is active today; schedule weddings, Griha Pravesh, and fresh auspicious sankalpas after Bhadra concludes.`,
        detailed: `Vishti Karana (Bhadra)${winPart} advises pausing new wish-fulfilling auspicious ceremonies until its conclusion, while daily prayers and steady routine duties continue normally.`
      });
    }
    case "muhurat.abhijit.support": {
      const win = sanitizeTimeWindowForEn(s.abhijitWindow);
      const winPart = win ? ` (${win})` : "";
      return selectByMode(mode, {
        short: `Bhadra-free Abhijit Muhurta${winPart} offers a strong midday auspicious window.`,
        standard: `Free from Bhadra interference, Abhijit Muhurta${winPart} provides a dependable midday period for urgent auspicious tasks.`,
        detailed: `Muhurta Chintamani regards midday Abhijit Muhurta${winPart} as a high-strength window capable of mitigating minor daily timing flaws when unobstructed by Bhadra.`
      });
    }
    case "rashifal.moon.favorable": {
      const rashi = translateRashiToEn(s.rashiNameHi || s.rashiNameEn);
      const hp = housePhraseEn(s.moonHouse);
      return selectByMode(mode, {
        short: `The Moon transits ${hp} from ${rashi}, bringing supportive energy.`,
        standard: `For ${rashi}, the Moon’s transit through ${hp} supports clarity, steady productivity, and harmonious interactions.`,
        detailed: `Under classical Phaladeepika Gochar rules, the Moon moving through ${hp} from ${rashi} fosters emotional composure and practical momentum across daily priorities.`
      });
    }
    case "rashifal.moon.chandrashtama": {
      const rashi = translateRashiToEn(s.rashiNameHi || s.rashiNameEn);
      return selectByMode(mode, {
        short: `The Moon transits the 8th house (Chandrashtama) for ${rashi}; practice patience and restraint.`,
        standard: `With Chandrashtama active for ${rashi}, avoid hasty reactions, unnecessary disputes, and speculative decisions.`,
        detailed: `The Moon’s 8th-house transit (Chandrashtama) from ${rashi} calls for calm pacing, mindful speech, and prioritizing routine stability over risky new ventures.`
      });
    }
    case "rashifal.moon.chandrashtama_jupiter_shield": {
      const rashi = translateRashiToEn(s.rashiNameHi || s.rashiNameEn);
      const jup = housePhraseEn(s.jupiterHouse);
      return selectByMode(mode, {
        short: `Despite Chandrashtama caution for ${rashi}, Jupiter in ${jup} offers protective guidance.`,
        standard: `While Chandrashtama advises calm restraint for ${rashi}, Jupiter’s benefic transit in ${jup} buffers obstacles and supports sound judgment.`,
        detailed: `This transit blends short-term Chandrashtama sensitivity for ${rashi} with the steadying grace of Jupiter in ${jup}, encouraging patience while keeping long-term direction protected.`
      });
    }
    case "rashifal.jupiter.support": {
      const jup = housePhraseEn(s.jupiterHouse);
      return selectByMode(mode, {
        short: `Jupiter in ${jup} supports wisdom, steady growth, and mentorship.`,
        standard: `Jupiter’s favorable transit through ${jup} strengthens strategic judgment, career credibility, and family harmony.`,
        detailed: `In slower-planet Gochar analysis, Jupiter occupying ${jup} acts as an expansive stabilizing influence for learning, ethical progress, and long-horizon goals.`
      });
    }
    case "rashifal.saturn.discipline": {
      const sat = housePhraseEn(s.saturnHouse);
      return selectByMode(mode, {
        short: `Saturn in ${sat} rewards patience, structure, and disciplined effort.`,
        standard: `Saturn’s transit in ${sat} emphasizes methodical execution, time discipline, and avoiding shortcuts.`,
        detailed: `With Saturn influencing ${sat}, sustained perseverance and realistic planning outperform hurried ambition, building durable results over time.`
      });
    }
    case "kundali.foundation.identity": {
      const lagna = translateRashiToEn(s.lagnaName);
      const lord = translateGrahaToEn(s.lagnaLord);
      const moon = translateRashiToEn(s.moonRashiName);
      const nak = translateNakshatraToEn(s.nakshatraName);
      return selectByMode(mode, {
        short: `Your natal chart is anchored in ${lagna} Lagna and ${moon} Moon sign.`,
        standard: `This birth chart features ${lagna} Lagna (ruled by ${lord}), ${moon} Moon sign, and ${nak} Nakshatra.`,
        detailed: `According to Parashari principles, ${lagna} Lagna governed by ${lord} shapes outward life direction, while ${moon} Moon sign in ${nak} Nakshatra anchors temperament and the Vimshottari Dasha sequence.`
      });
    }
    case "kundali.yoga.strong_rajyoga": {
      const count = num$1(s.rajYogaCount) ?? 1;
      const exalted = num$1(s.exaltedPlanetCount) ?? 0;
      const plural = count === 1 ? "Raj Yoga" : "Raj Yogas";
      const exPart = exalted > 0 ? ` alongside ${exalted} exalted ${exalted === 1 ? "planet" : "planets"}` : "";
      return selectByMode(mode, {
        short: `Your chart contains ${count} strong ${plural}${exPart}.`,
        standard: `The presence of ${count} prominent ${plural}${exPart} indicates leadership potential, credibility, and notable rise during supportive Dasha periods.`,
        detailed: `Classical Parashari analysis identifies ${count} strong ${plural}${exPart} in this natal chart, pointing to meaningful achievement and recognition when the participating planets activate in Dasha.`
      });
    }
    case "kundali.dasha.current": {
      const maha = translateGrahaToEn(s.currentMahadashaPlanet);
      const antar = s.currentAntardashaPlanet ? translateGrahaToEn(s.currentAntardashaPlanet) : "";
      const antarPart = antar ? ` with ${antar} Antardasha` : "";
      return selectByMode(mode, {
        short: `You are currently in ${maha} Mahadasha${antarPart}.`,
        standard: `Your active Vimshottari timeline runs through ${maha} Mahadasha${antarPart}, shaping current priorities and turning points.`,
        detailed: `Within the 120-year Vimshottari cycle, ${maha} Mahadasha${antarPart} is presently active, bringing the natal house lordships and placement of ${maha} to the forefront.`
      });
    }
    case "kundali.dosha.manglik": {
      const house = num$1(s.marsHouse);
      const housePart = house ? ` with Mars in ${housePhraseEn(house)}` : "";
      return selectByMode(mode, {
        short: `Manglik placement is indicated${housePart}; evaluate holistically during match-making.`,
        standard: `A Manglik Yoga appears${housePart}. Rather than treating it with alarm, review full partner compatibility, the 7th house, and classical cancellation rules.`,
        detailed: `Mars placement${housePart} triggers Manglik consideration under classical rules. Because numerous Shastric cancellations (Parihar) frequently neutralize this factor, holistic Lagna and Navamsha cross-checking is essential.`
      });
    }
    case "kundali.precision.uncertain_time": {
      return selectByMode(mode, {
        short: `Birth time is approximate; Lagna and sub-periods may shift.`,
        standard: `Because birth time is approximate, Moon-sign insights remain stable while Lagna and divisional chart details require exact birth-time verification.`,
        detailed: `With an approximate birth time, the Ascendant degree, Navamsha, and finer Antardasha transitions are sensitive to minutes; verifying birth records or consulting Moon-based readings is advised.`
      });
    }
    case "milan.verdict.excellent": {
      const score = num$1(s.totalScore) ?? 0;
      const max = num$1(s.maxScore) ?? 36;
      return selectByMode(mode, {
        short: `Ashtakoot matching scores ${score}/${max} — an excellent match.`,
        standard: `Scoring ${score} out of ${max} Gunas reflects strong emotional resonance, mutual adaptability, and a highly favorable marital foundation.`,
        detailed: `Under Muhurta Chintamani’s Vivaha Prakarana benchmarks, ${score}/${max} Gunas falls in the excellent compatibility tier, signaling strong alignment across temperament and family harmony.`
      });
    }
    case "milan.verdict.moderate": {
      const score = num$1(s.totalScore) ?? 0;
      const max = num$1(s.maxScore) ?? 36;
      return selectByMode(mode, {
        short: `Ashtakoot matching scores ${score}/${max} — a moderate, acceptable match.`,
        standard: `A score of ${score}/${max} Gunas indicates balanced, acceptable compatibility; pairing this with 7th-house and Navamsha review provides full clarity.`,
        detailed: `Scoring ${score} out of ${max} meets the classical compatibility threshold in the moderate tier. Reviewing both partners’ 7th houses, Venus-Jupiter balance, and Dasha synchronization completes the evaluation.`
      });
    }
    case "milan.verdict.low": {
      const score = num$1(s.totalScore) ?? 0;
      const max = num$1(s.maxScore) ?? 36;
      return selectByMode(mode, {
        short: `Ashtakoot score (${score}/${max}) is below 18; in-depth horoscopic review is advised.`,
        standard: `With ${score}/${max} Gunas falling below the traditional 18-point threshold, comprehensive review of both natal charts and Parihar factors is essential.`,
        detailed: `An Ashtakoot score of ${score}/${max} sits below the conventional 18-Guna guideline. A qualified Jyotish evaluation of Lagna, Navamsha, planetary friendship, and cancellation rules is recommended before deciding.`
      });
    }
    case "milan.dosha.nadi_active": {
      return selectByMode(mode, {
        short: `Nadi Dosha is active without cancellation; detailed classical consultation is recommended.`,
        standard: `Both charts share the same Nadi with no automatic Parihar active, warranting careful scholarly review prior to final commitment.`,
        detailed: `Nadi Koot carries the highest 8-point weight in Ashtakoot matching; when Nadi Dosha remains uncancelled, classical texts recommend evaluating overall health, progeny, and Dasha indicators in both charts.`
      });
    }
    case "milan.dosha.nadi_cancelled": {
      return selectByMode(mode, {
        short: `Shastric Parihar applies, cancelling Nadi Dosha in this match.`,
        standard: `Although both charts share the same Nadi, verified classical Parihar rules apply and neutralize the adverse effect of Nadi Dosha.`,
        detailed: `Under Brihat Parashara and classical Vivaha Parihar exceptions, Nadi Dosha stands cancelled here, removing it as a major barrier to compatibility.`
      });
    }
    default:
      return `Verified Jyotish rule (${fact.conceptKey}) evaluated deterministically.`;
  }
}
const englishLocalePlugin = {
  locale: "en-IN",
  displayName: "English (India)",
  direction: "ltr",
  getDomainHeading(domain, audience) {
    const entry = DOMAIN_HEADINGS_EN[domain];
    if (!entry) return "Vedic Astrological Analysis";
    if (audience === "LEARNER") return entry.learner;
    if (audience === "SCHOLAR") return entry.scholar;
    return entry.general;
  },
  realizeFact(fact, options) {
    const sentence = cleanSentenceSpacing(realizeEnglishSentence(fact, options));
    const semanticFingerprint = computeDeterministicHash({
      conceptKey: fact.conceptKey,
      domain: fact.domain,
      polarity: fact.polarity
    });
    return {
      conceptKey: fact.conceptKey,
      domain: fact.domain,
      sentence,
      semanticFingerprint
    };
  },
  joinParagraph(sentences, mode) {
    const clean = sentences.map((x) => cleanSentenceSpacing(x)).filter(Boolean);
    if (clean.length === 0) return "";
    return mode === "SHORT" ? clean[0] : clean.join(" ");
  }
};
const DOMAIN_HEADINGS_SA = {
  panchang_overview: "दैनिकपञ्चाङ्गस्वरूपम्",
  day_auspiciousness: "दिनशुभाशुभनिर्णयः",
  vrat_and_sadhana: "व्रतसाधनाविधानम्",
  auspicious_windows: "शुभमुहूर्तवेला",
  caution_windows: "त्याज्यकालविचारः",
  travel_guidance: "दिशाशूलयात्राविचारः",
  rudrabhishek_muhurat: "शिववासनिर्णयः",
  havan_muhurat: "अग्निवासनिर्णयः",
  personal_bala: "स्वकीयताराबलविचारः",
  panchak_muhurat: "पञ्चकमुहूर्तविचारः",
  bhadra_muhurat: "भद्राकालनिषेधविचारः",
  abhijit_muhurat: "अभिजित्मुहूर्तबलम्",
  transit_overview: "चन्द्रगोचरफलम्",
  career_and_wisdom: "बृहस्पतिगोचरानुग्रहः",
  discipline_and_remedy: "शनिगोचरसंयमः",
  natal_foundation: "जन्मकुण्डल्याधारः",
  yogas_and_strength: "राजयोगग्रहबलसमीक्षा",
  dasha_outlook: "विंशोत्तरीदशाफलम्",
  dosha_assessment: "दोषविचारः परिहारश्च",
  data_precision: "जन्मकालसूक्ष्मतासूचना",
  milan_verdict: "अष्टकूटमेलकनिर्णयः",
  dosha_and_parihar: "नाड़ीदोषपरिहारविचारः"
};
function str(val, fallback = "") {
  return typeof val === "string" && val.trim().length > 0 ? val.trim() : fallback;
}
function num(val) {
  return typeof val === "number" && Number.isFinite(val) ? val : null;
}
function realizeSanskritSentence(fact, options) {
  const s = fact.slots;
  const { mode, audience } = options;
  switch (fact.templateKey) {
    case "panchang.core_identity": {
      const vaar = translateVaarToSaLoc(s.vaarName);
      const paksha = translatePakshaToSaLoc(s.pakshaLabelHi);
      const tithi = translateTithiToSa(s.tithiName);
      const nak = str(s.nakshatraName, "नक्षत्रम्");
      const base = selectByMode(mode, {
        short: `अद्य ${vaar} ${tithi} तिथिः ${nak} नक्षत्रं च वर्तते।`,
        standard: `अद्य ${vaar} ${paksha} ${tithi} तिथिः ${nak} नक्षत्रं च शुभसंयोगं जनयतः।`,
        detailed: `दृक्-गणितपञ्चाङ्गानुसारम् अद्य ${vaar} ${paksha} ${tithi} तिथिः ${nak} नक्षत्रं च विद्यते, येन दैनिककर्मणां कालनिर्णयः प्रवर्तते।`
      });
      return appendAudienceNote(base, audience, {
        learner: "तिथिवारनक्षत्रयोगकरणानाम् एकत्र समन्वयः पञ्चाङ्गम् इति कथ्यते।",
        scholar: "सूर्योदयव्यापिनी तिथिः नक्षत्रं च मुहूर्तशास्त्रे प्रधानप्रमाणं मन्यते।"
      });
    }
    case "panchang.verdict.shukla_auspicious": {
      const tithi = translateTithiToSa(s.tithiName);
      return selectByMode(mode, {
        short: `शुक्लपक्षे ${tithi} तिथिः शुभकार्येषु प्रशस्ता अस्ति।`,
        standard: `शुक्लपक्षे ${tithi} तिथेः सद्भावेन अद्यतनदिनं माङ्गलिककर्मसु अनुकूलं वर्तते।`,
        detailed: `शुक्लपक्षे वर्धमानचन्द्रबलेन ${tithi} तिथिः नूतनारम्भे, धर्मकार्येषु च शुभफलप्रदायिनी भवति।`
      });
    }
    case "panchang.verdict.rikta_tithi": {
      const tithi = translateTithiToSa(s.tithiName);
      return selectByMode(mode, {
        short: `${tithi} रिक्तातिथिः अस्ति; नूतनमाङ्गलिकारम्भः त्याज्यः।`,
        standard: `${tithi} रिक्तातिथित्वात् अद्य नूतनमङ्गलकर्म विहाय नित्यकर्म साधना च करणीया।`,
        detailed: `मुहूर्तचिन्तामण्यनुसारं ${tithi} रिक्तातिथिः सामान्यशुभआरम्भेषु वर्जिता, किन्तु जप-तप-नित्यकर्मसु अप्रतिबद्धा अस्ति।`
      });
    }
    case "panchang.verdict.sarvartha_siddhi": {
      return selectByMode(mode, {
        short: `अद्य सर्वार्थसिद्धियोगः सर्वकार्यसिद्धिदायकः अस्ति।`,
        standard: `भद्राबाधारहितः सर्वार्थसिद्धियोगः अद्य महत्त्वपूर्णकार्येषु विशेषशुभफलं ददाति।`,
        detailed: `वार-नक्षत्रसंयोगजन्यः सर्वार्थसिद्धियोगः अनेकसामान्यदोषान् शमयन् नवीनसङ्कल्पसिद्धौ सहायकः भवति।`
      });
    }
    case "panchang.verdict.sarvartha_with_bhadra": {
      return selectByMode(mode, {
        short: `अद्य सर्वार्थसिद्धियोगेन सह भद्रा अपि अस्ति; भद्राकालं त्यक्त्वा शुभकर्म कुर्यात्।`,
        standard: `अद्य सर्वार्थसिद्धियोगः भद्राकालश्च उभौ वर्तेते, अतः भद्रानिवृत्त्यनन्तरमेव मङ्गलकार्यं प्रशस्तम्।`,
        detailed: `धर्मसिन्धु-मुहूर्तचिन्तामणिसमन्वयेन सिद्धियोगसद्भावे अपि भद्रावेलायां नूतनमङ्गलारम्भः त्याज्यः, तदनन्तरं तु कालः शुभः।`
      });
    }
    case "panchang.observance.ekadashi": {
      const paksha = translatePakshaToSaLoc(s.pakshaLabelHi);
      return selectByMode(mode, {
        short: `अद्य ${paksha} पावनी एकादशी श्रीहरिभक्तये श्रेष्ठा अस्ति।`,
        standard: `अद्य ${paksha} एकादशीव्रतम् आचरणीयम्; संयमः, सात्त्विकाहारः, विष्णुस्मरणं च कल्याणकरम्।`,
        detailed: `धर्मसिन्धु-निर्णयसिन्धुप्रमाणेन ${paksha} एकादश्यां व्रत-नियम-तुलस्यर्चन-दानानि चित्तशुद्धिं परमशान्तिं च प्रयच्छन्ति।`
      });
    }
    case "panchang.observance.pradosh": {
      const vaar = translateVaarToSaLoc(s.vaarName);
      return selectByMode(mode, {
        short: `अद्य प्रदोषवेलायां शिवार्चनं विशेषफलदायकम्।`,
        standard: `${vaar} त्रयोदशीसंयोगे सायंकालीनप्रदोषे भगवतः शिवस्य आराधना अत्यन्तं शुभा भवति।`,
        detailed: `सूर्यास्तसमीपे प्रदोषवेलायां शिवध्यानं, बिल्वपत्रसमर्पणं, पञ्चाक्षरजपश्च सौभाग्यशान्तिप्रदः स्मृतः।`
      });
    }
    case "panchang.window.abhijit": {
      const win = str(s.abhijitWindow);
      return selectByMode(mode, {
        short: `अभिजित् मुहूर्तः (${win}) अद्य श्रेष्ठः शुभकालः अस्ति।`,
        standard: `मध्याह्ने अभिजित् मुहूर्तः (${win}) आवश्यकशुभकार्यसिद्धये अत्यन्तम् अनुकूलः वर्तते।`,
        detailed: `मुहूर्तशास्त्रे अभिजित् मुहूर्तः (${win}) सामान्यदोषनाशकः कार्यसिद्धिप्रदश्च मध्याह्नकालः इति प्रतिपादितः।`
      });
    }
    case "panchang.caution.rahukaal": {
      const win = str(s.rahukaalWindow);
      return selectByMode(mode, {
        short: `राहुकाले (${win}) नूतनशुभकर्म न आरभेत।`,
        standard: `अद्य राहुकालः (${win}) वर्तते; अस्यां वेलायां नूतनमाङ्गलिकसङ्कल्पः त्याज्यः।`,
        detailed: `दैनिकपञ्चाङ्गगणनायां राहुकालः (${win}) त्याज्यवेला इति मत्वा नित्यकर्मैव शान्त्या अनुतिष्ठेत्।`
      });
    }
    case "panchang.caution.bhadra": {
      const win = str(s.bhadraWindow);
      return selectByMode(mode, {
        short: `भद्राकाले (${win}) माङ्गलिककार्याणि वर्ज्यानि।`,
        standard: `अद्य विष्टिकरणजन्या भद्रा (${win}) प्रवर्तते; अस्याम् अवधौ शुभसंस्कारान् परिहरेत्।`,
        detailed: `मुहूर्तशास्त्रानुसारं भद्रावेलायां (${win}) नूतनशुभकर्मत्यागः श्रेयस्करः, नित्यपूजा तु निर्बाधा।`
      });
    }
    case "panchang.caution.panchak": {
      return selectByMode(mode, {
        short: `अद्य पञ्चककालः प्रवर्तते; शास्त्रनिषिद्धकर्मसु सावधानता आवश्यकी।`,
        standard: `धनिष्ठादिरेवतीपर्यन्तं पञ्चकयोगे दक्षिणयात्रादिविशेषकर्माणि परिहरणीयानि।`,
        detailed: `पञ्चककाले केवलं शास्त्रवर्जितविशेषकर्माणि त्यजेत्; नित्यसाधना एवं नियमितव्यवहारः निर्बाधः।`
      });
    }
    case "panchang.travel.disha_shool": {
      const vaar = translateVaarToSaLoc(s.vaarName);
      const disha = translateDishaToSaLoc(s.dishaShool);
      return selectByMode(mode, {
        short: `${vaar} ${disha} दिशाशूलः अस्ति।`,
        standard: `${vaar} ${disha} दिशाशूलविचारः विद्यते; आवश्यकयात्रायां परिहारं कृत्वा प्रस्थानं कुर्यात्।`,
        detailed: `वारनियमानुसारं ${vaar} ${disha} दिशाशूलः प्रभावी भवति; अनिवार्यगमने शास्त्रीयपरिहारेण इष्टस्मरणेन च यात्रा शुभा।`
      });
    }
    case "muhurat.shivavaas.auspicious": {
      return selectByMode(mode, {
        short: `अद्य शुभशिववासः वर्तते; रुद्राभिषेकः अत्यन्तं प्रशस्तः।`,
        standard: `तिथिसूत्रानुसारम् अद्य शिववासः अनुकूलः अस्ति, अतः काम्यनित्यरुद्राभिषेकः शुभफलप्रदः।`,
        detailed: `शास्त्रीयगणनया अद्य शिववासस्य शुभत्वात् रुद्राभिषेकः आरोग्यशान्तिसमृद्धिदायकः भवति।`
      });
    }
    case "muhurat.shivavaas.inauspicious": {
      return selectByMode(mode, {
        short: `अद्य शिववासः प्रतिकूलः अस्ति; सामान्यकाम्यरुद्राभिषेकः त्याज्यः।`,
        standard: `तिथिसूत्रेण अद्य शिववासस्य अनुकूलत्वाभावात् काम्याभिषेकं त्यक्त्वा नित्यशिवपूजनं कुर्यात्।`,
        detailed: `मुहूर्तसूत्रानुसारं प्रतिकूलशिववासे सकामरुद्राभिषेकः निषिद्धः, नित्यजपध्यानं तु सर्वदा शुभम्।`
      });
    }
    case "muhurat.shivavaas.shastric_exception": {
      return selectByMode(mode, {
        short: `शिवरात्रि-श्रावण-ज्योतिर्लिङ्ग-अपवादेन अद्य शिववासदोषः न प्रवर्तते।`,
        standard: `विशेषशास्त्रीयापवादेन शिवरात्रौ, श्रावणमासे, ज्योतिर्लिङ्गक्षेत्रे वा शिववासदोषः बाधकः न भवति।`,
        detailed: `शिवमहापुराण-परम्परानुसारं महाशिवरात्रि-मासिकशिवरात्रि-श्रावणमास-ज्योतिर्लिङ्गक्षेत्रेषु सामान्यशिववासनिषेधः बाधितः भवति, अतः रुद्राभिषेकः सर्वदा सिद्धिकरः।`
      });
    }
    case "muhurat.agnivaas.prithvi": {
      return selectByMode(mode, {
        short: `अद्य अग्निवासः पृथिव्यां वर्तते; हवनकर्म शुभम्।`,
        standard: `पृथिवीनिवासिनि अग्नौ अद्य वैदिकहवनं यज्ञश्च सौख्यसमृद्धिदायकः भवति।`,
        detailed: `मुहूर्तचिन्तामणिसूत्रेण अद्य अग्निवासः पृथिव्याम् अस्ति, यत्र प्रदत्ता आहुतिः पूर्णसिद्धिं प्रयच्छति।`
      });
    }
    case "muhurat.agnivaas.non_prithvi": {
      return selectByMode(mode, {
        short: `अद्य अग्निवासः पृथिवीभिन्नः अस्ति; काम्यहवनं परिहरेत्।`,
        standard: `आकाश-पातालस्थे अग्नौ सकामहवनं त्यक्त्वा पृथिवी-अग्निवासदिनस्य चयनं श्रेयः।`,
        detailed: `तिथिवारगणनया अद्य अग्निवासः पृथिव्यां नास्ति, अतः काम्ययज्ञकर्म स्थगयित्वा नित्यपूजनं कुर्यात्।`
      });
    }
    case "muhurat.tarabal.shubh": {
      return selectByMode(mode, {
        short: `जन्मनक्षत्रात् अद्य स्वकीयताराबलम् अनुकूलम् अस्ति।`,
        standard: `स्वजन्मनक्षत्रात् शुभतारायोगेन अद्य व्यक्तिगतकार्येषु सफलतासम्भावना वर्धते।`,
        detailed: `व्यक्तिगतताराबलगणनायां शुभताराप्राप्त्या नूतनारम्भ-यात्रा-सङ्कल्पेषु अनुकूलता विद्यते।`
      });
    }
    case "muhurat.tarabal.ashubh": {
      return selectByMode(mode, {
        short: `अद्य स्वकीयताराबलं न्यूनम् अस्ति; साहसिकनूतनारम्भं परिहरेत्।`,
        standard: `जन्मनक्षत्रात् प्रतिकूलताराभावात् धैर्येण नियमितकर्मसु एव ध्यानं देयम्।`,
        detailed: `अशुभताराबलकाले नूतनजोखिमयुक्तनिर्णयं त्यक्त्वा संयमेन पूर्वनियोजितकर्म निर्वहेत्।`
      });
    }
    case "muhurat.panchak.active": {
      return selectByMode(mode, {
        short: `अद्य पञ्चककालः प्रवर्तते; दक्षिणयात्रादिपञ्चनिषिद्धकर्माणि परिहरेत्।`,
        standard: `धनिष्ठादिरेवतीपर्यन्तं पञ्चकयोगे शास्त्रवर्जितपञ्चकर्मसु सावधानता आवश्यकी; नित्यपूजनं तु निर्बाधम्।`,
        detailed: `मुहूर्तचिन्तामणिनिर्देशानुसारं पञ्चककाले केवलं दक्षिणदिग्गमन-गृहाच्छादनादिविशेषकर्माणि त्याज्यानि, सामान्यधार्मिकव्यवहारः शुभः।`
      });
    }
    case "muhurat.bhadra.active": {
      const win = str(s.bhadraWindow);
      const winPart = win ? ` (${win})` : "";
      return selectByMode(mode, {
        short: `भद्राकाले${winPart} नूतनमाङ्गलिकसङ्कल्पः त्याज्यः।`,
        standard: `अद्य विष्टिकरणजन्या भद्रा${winPart} प्रवर्तते; भद्रानिवृत्त्यनन्तरमेव शुभसंस्कारं कुर्यात्।`,
        detailed: `मुहूर्तशास्त्रानुसारं भद्रावेलायां${winPart} काम्यशुभारम्भं परिहृत्य नित्यजपध्यानम् अनुतिष्ठेत्।`
      });
    }
    case "muhurat.abhijit.support": {
      const win = str(s.abhijitWindow);
      const winPart = win ? ` (${win})` : "";
      return selectByMode(mode, {
        short: `भद्रारहितः अभिजित् मुहूर्तः${winPart} आवश्यकशुभकार्येषु प्रशस्तः।`,
        standard: `मध्याह्ने भद्राबाधाहीनः अभिजित् मुहूर्तः${winPart} महत्त्वपूर्णसङ्कल्पसिद्धये अनुकूलः अस्ति।`,
        detailed: `मुहूर्तचिन्तामण्यनुसारं मध्याह्नकालीनः अभिजित् मुहूर्तः${winPart} सामान्यदोषशमनसमर्थः कार्यसिद्धिप्रदश्च वर्तते।`
      });
    }
    case "rashifal.moon.favorable": {
      const rashi = translateRashiToSaLoc(s.rashiNameHi);
      const house = sanskritHouseLocative(s.moonHouse);
      return selectByMode(mode, {
        short: `${rashi} ${house} चन्द्रगोचरः शुभः अस्ति।`,
        standard: `फलदीपिकानुसारं ${rashi} ${house} चन्द्रसञ्चरणं मानसिकप्रसन्नतां कार्यसिद्धिं च ददाति।`,
        detailed: `गोचरसिद्धान्तेन ${rashi} ${house} स्थितः चन्द्रः चित्तस्थैर्यं, सौहार्दं, दैनिककार्येषु च सहजं साफल्यं जनयति।`
      });
    }
    case "rashifal.moon.chandrashtama": {
      const rashi = translateRashiToSaLoc(s.rashiNameHi);
      return selectByMode(mode, {
        short: `${rashi} अष्टमे भावे चन्द्रगोचरः (चन्द्राष्टमः) संयमं प्रार्थयते।`,
        standard: `${rashi} चन्द्राष्टमप्रभावात् वाणीसंयमः, धैर्यं, अनावश्यकविवादत्यागश्च करणीयः।`,
        detailed: `अष्टमचन्द्रसञ्चरणकाले (${rashi}) शीघ्रनिर्णयं जोखिमपूर्णव्यवहारांश्च परिहृत्य शान्तचित्तेन नित्यकर्माणि कुर्यात्।`
      });
    }
    case "rashifal.moon.chandrashtama_jupiter_shield": {
      const jup = sanskritHouseLocative(s.jupiterHouse);
      return selectByMode(mode, {
        short: `चन्द्राष्टमसावधानतायां सत्यामपि ${jup} बृहस्पतेः शुभसंरक्षणं विद्यते।`,
        standard: `अष्टमचन्द्रस्य सावधानता सह ${jup} स्थितः बृहस्पतिः विवेकं रक्षाबलं च प्रयच्छति।`,
        detailed: `गोचरसमन्वये अष्टमचन्द्रः धैर्यम् अपेक्षते, किन्तु ${jup} बृहस्पतेः शुभदृष्टिः महद्विघ्नान् शमयति।`
      });
    }
    case "rashifal.jupiter.support": {
      const jup = sanskritHouseLocative(s.jupiterHouse);
      return selectByMode(mode, {
        short: `${jup} बृहस्पतिगोचरः ज्ञानोन्नतये सहायकः अस्ति।`,
        standard: `${jup} स्थितस्य गुरोः अनुग्रहेण शिक्षा, विवेकः, कार्यप्रतिष्ठा च वर्धते।`,
        detailed: `दीर्घकालिकगोचरे ${jup} बृहस्पतेः स्थितिः सन्मार्गदर्शनं स्थिरोन्नतिं च समर्थयति।`
      });
    }
    case "rashifal.saturn.discipline": {
      const sat = sanskritHouseLocative(s.saturnHouse);
      return selectByMode(mode, {
        short: `${sat} शनिगोचरः अनुशासनं धैर्यं च अपेक्षते।`,
        standard: `${sat} शनेः प्रभावेन नियमितपरिश्रमः समयपालनं च दीर्घकालिकलाभं ददाति।`,
        detailed: `शनिगोचरे (${sat}) त्वरितफललोभं त्यक्त्वा सत्यनिष्ठया सततप्रयासेन स्थायी सिद्धिः लभ्यते।`
      });
    }
    case "kundali.foundation.identity": {
      const lagna = str(s.lagnaName, "लग्न");
      const lord = translateGrahaToSa(s.lagnaLord);
      const moon = str(s.moonRashiName, "चन्द्रराशि");
      return selectByMode(mode, {
        short: `जन्मकुण्डली ${lagna}लग्ने ${moon}चन्द्रराशौ च प्रतिष्ठिता अस्ति।`,
        standard: `अस्यां जन्मपत्रिकायां ${lagna}लग्नं (लग्नेशः ${lord}) तथा ${moon}चन्द्रराशिः जीवनदिशां निर्धारयतः।`,
        detailed: `बृहत्पाराशरहोराशास्त्रानुसारं ${lagna}लग्नं व्यक्तित्वस्य आधारः, ${moon}चन्द्रराशिस्तु मनसः विंशोत्तरीदशाक्रमस्य च संचालकः भवति।`
      });
    }
    case "kundali.yoga.strong_rajyoga": {
      const count = num(s.rajYogaCount) ?? 1;
      return selectByMode(mode, {
        short: `जन्मकुण्डल्यां ${count} प्रबलराजयोगः शुभफलसूचकः अस्ति।`,
        standard: `कुण्डल्यां ${count} प्रबलराजयोगसद्भावात् अनुकूलदशायां प्रतिष्ठा उन्नतिश्च सम्भाव्यते।`,
        detailed: `पाराशरीसिद्धान्तेन कुण्डलीस्थः राजयोगः स्वग्रहदशाकाले नेतृत्वबलं, सम्मानं, कार्यसिद्धिं च प्रयच्छति।`
      });
    }
    case "kundali.dasha.current": {
      const maha = translateGrahaToSa(s.currentMahadashaPlanet);
      return selectByMode(mode, {
        short: `वर्तमानकाले ${maha} महादशा प्रवर्तते।`,
        standard: `विंशोत्तरीक्रमेण इदानीं ${maha} महादशा प्रमुखजीवनदिशां सूचयति।`,
        detailed: `वर्तमानायां विंशोत्तरीमहादशायां दशानाथस्य भावबलानुसारं सम्बद्धजीवनक्षेत्राणि सक्रियताम् अनुभवन्ति।`
      });
    }
    case "kundali.dosha.manglik": {
      return selectByMode(mode, {
        short: `कुण्डल्यां कुजदोषविचारः विद्यते; विवाहात् पूर्वं समग्रमेलकम् आवश्यकम्।`,
        standard: `मङ्गलस्थित्या कुजदोषः सूचितः; भयं विहाय सप्तमभाव-परिहारनियमानां पूर्णसमीक्षा करणीया।`,
        detailed: `ज्योतिषशास्त्रे अनेकपरिहारनियमैः कुजदोषः शान्तः भवति, अतः लग्न-नवमांश-सप्तमभावसमन्वयेन निर्णयः श्रेयः।`
      });
    }
    case "kundali.precision.uncertain_time": {
      return selectByMode(mode, {
        short: `जन्मसमयस्य अनुमानितत्वात् लग्न-सूक्ष्मदशयोः भेदः सम्भवति।`,
        standard: `अनिश्चितजन्मकाले चन्द्रराशिफलम् अपेक्षाकृतं स्थिरं, लग्नविचारस्तु समयपुष्टिम् अपेक्षते।`,
        detailed: `अनुमानितजन्मकाले लग्नांशः नवमांशश्च परिवर्तेत, अतः सूक्ष्मफलादेशार्थं जन्मसमयशोधनम् उपयोगी।`
      });
    }
    case "milan.verdict.excellent": {
      const score = num(s.totalScore) ?? 0;
      const max = num(s.maxScore) ?? 36;
      return selectByMode(mode, {
        short: `अष्टकूटमेलके ${score}/${max} गुणाः प्राप्ताः — एषः उत्तमः मेलकः अस्ति।`,
        standard: `${score}/${max} गुणप्राप्तिः दाम्पत्यसौहार्दस्य पारस्परिकसामञ्जस्यस्य च श्रेष्ठं प्रमाणम् अस्ति।`,
        detailed: `मुहूर्तचिन्तामणिविवाहप्रकरणानुसारं षट्त्रिंशद्गुणेभ्यः ${score} गुणप्राप्तिः उत्कृष्टदाम्पत्यानुकूलतां सूचयति।`
      });
    }
    case "milan.verdict.moderate": {
      const score = num(s.totalScore) ?? 0;
      const max = num(s.maxScore) ?? 36;
      return selectByMode(mode, {
        short: `अष्टकूटमेलके ${score}/${max} गुणाः — एषः मध्यमः ग्राह्यः मेलकः अस्ति।`,
        standard: `${score}/${max} गुणानां प्राप्तिः मध्यमश्रेण्यां ग्राह्या; सप्तमभावनवमांशविचारेण निर्णयः दृढः भवति।`,
        detailed: `षट्त्रिंशद्गुणेभ्यः ${score} गुणाः मध्यमवर्गे सन्ति; उभयोः कुण्डल्योः सप्तमेशशुक्रगुरुबलसमीक्षया पूर्णनिर्णयः कार्यः।`
      });
    }
    case "milan.verdict.low": {
      const score = num(s.totalScore) ?? 0;
      const max = num(s.maxScore) ?? 36;
      return selectByMode(mode, {
        short: `अष्टकूटगुणाः (${score}/${max}) न्यूनाः सन्ति; विद्वत्समीक्षा आवश्यकी।`,
        standard: `अष्टादशगुणेभ्यः न्यूनत्वात् (${score}/${max}) सम्पूर्णकुण्डलीमेलकस्य दोषपरिहारस्य च गहनविचारः कर्तव्यः।`,
        detailed: `शास्त्रोक्तन्यूनतममानकात् न्यूनगुणप्राप्तौ केवलं गुणसङ्ख्यायाः अपेक्षया लग्ननवमांशग्रहमैत्रीसमीक्षा अनिवार्‍या।`
      });
    }
    case "milan.dosha.nadi_active": {
      return selectByMode(mode, {
        short: `मेलके नाड़ीदोषः विद्यते; शास्त्रीयविद्वत्परामर्शः आवश्यकः।`,
        standard: `समाननाड़ीत्वात् अपरिहृतः नाड़ीदोषः प्रवर्तते, अतः विवाहनिर्णयात् पूर्वं गहनसमीक्षा करणीया।`,
        detailed: `अष्टकूटे अष्टगुणप्रधाने नाड़ीकूटे दोषस्य अपरिहृतत्वात् आरोग्यसन्ततिसन्तुलनार्थं शास्त्रीयविचारः आवश्यकः।`
      });
    }
    case "milan.dosha.nadi_cancelled": {
      return selectByMode(mode, {
        short: `शास्त्रीयपरिहारेण अत्र नाड़ीदोषः शान्तः भवति।`,
        standard: `समाननाड़ीसद्भावे अपि प्रमाणितपरिहारनियमेन नाड़ीदोषस्य अशुभफलं निरस्तं मन्यते।`,
        detailed: `बृहत्पाराशर-विवाहशास्त्रोक्तपरिहारनियमैः अस्मिन् मेलके नाड़ीदोषः स्वतः परिहृतः, अतः अनावश्यकबाधा नास्ति।`
      });
    }
    default:
      return `शास्त्रीयनियमानुसारं (${fact.conceptKey}) तथ्यं प्रमाणितम् अस्ति।`;
  }
}
const sanskritLocalePlugin = {
  locale: "sa-IN",
  displayName: "संस्कृतम् (भारतम्)",
  direction: "ltr",
  getDomainHeading(domain, _audience) {
    return DOMAIN_HEADINGS_SA[domain] || "ज्योतिषशास्त्रविश्लेषणम्";
  },
  realizeFact(fact, options) {
    const sentence = cleanSentenceSpacing(realizeSanskritSentence(fact, options));
    const semanticFingerprint = computeDeterministicHash({
      conceptKey: fact.conceptKey,
      domain: fact.domain,
      polarity: fact.polarity
    });
    return {
      conceptKey: fact.conceptKey,
      domain: fact.domain,
      sentence,
      semanticFingerprint
    };
  },
  joinParagraph(sentences, mode) {
    const clean = sentences.map((x) => cleanSentenceSpacing(x)).filter(Boolean);
    if (clean.length === 0) return "";
    return mode === "SHORT" ? clean[0] : clean.join(" ");
  }
};
class LocaleRegistry {
  plugins = /* @__PURE__ */ new Map();
  constructor(extraPlugins = []) {
    this.register(hindiLocalePlugin);
    this.register(englishLocalePlugin);
    this.register(sanskritLocalePlugin);
    for (const plugin of extraPlugins) {
      this.register(plugin);
    }
  }
  register(plugin) {
    this.plugins.set(plugin.locale.toLowerCase(), plugin);
  }
  has(locale) {
    return this.plugins.has(locale.toLowerCase());
  }
  listSupportedLocales() {
    return Array.from(this.plugins.values()).map((p) => p.locale);
  }
  /**
   * Resolves exact locale match, then language-prefix match (`hi` -> `hi-IN`),
   * and falls back safely to `hi-IN` if an unregistered locale is requested.
   */
  resolve(locale) {
    const normalized = (locale || "hi-IN").toLowerCase();
    const exact = this.plugins.get(normalized);
    if (exact) return { plugin: exact, fallbackUsed: false };
    const langPrefix = normalized.split("-")[0];
    for (const plugin of this.plugins.values()) {
      if (plugin.locale.toLowerCase().startsWith(`${langPrefix}-`)) {
        return { plugin, fallbackUsed: false };
      }
    }
    return {
      plugin: this.plugins.get("hi-in"),
      fallbackUsed: true
    };
  }
}
function mapAppLanguageToLocale(appLanguage) {
  const code = (appLanguage || "hi").trim().toLowerCase();
  switch (code) {
    case "hi":
    case "hi-in":
      return "hi-IN";
    case "en":
    case "en-in":
    case "en-us":
    case "en-gb":
      return "en-IN";
    case "sa":
    case "sa-in":
      return "sa-IN";
    case "mr":
    case "mr-in":
      return "mr-IN";
    case "gu":
    case "gu-in":
      return "gu-IN";
    case "bn":
    case "bn-in":
      return "bn-IN";
    case "ta":
    case "ta-in":
      return "ta-IN";
    case "te":
    case "te-in":
      return "te-IN";
    default:
      return "hi-IN";
  }
}
const defaultLocaleRegistry = new LocaleRegistry();
function detectPaksha(rawPaksha) {
  const s = rawPaksha.toLowerCase();
  if (s.includes("शुक्ल") || s.includes("shukla")) {
    return { code: "shukla", labelHi: "शुक्ल पक्ष" };
  }
  if (s.includes("कृष्ण") || s.includes("krishna")) {
    return { code: "krishna", labelHi: "कृष्ण पक्ष" };
  }
  return { code: "unknown", labelHi: "" };
}
function classifyTithiCategory(tithiName, flags) {
  const t = tithiName.toLowerCase();
  if (flags.isAmavasya || t.includes("अमावस्या") || t.includes("amavasya")) return "amavasya";
  if (flags.isPurnima || t.includes("पूर्णिमा") || t.includes("purnima")) return "purnima";
  if (flags.isEkadashi || t.includes("एकादशी") || t.includes("ekadashi")) return "ekadashi";
  if (t.includes("चतुर्थी") || t.includes("नवमी") || t.includes("चतुर्दशी") || t.includes("chaturthi") || t.includes("navami") || t.includes("chaturdashi")) {
    return "rikta";
  }
  if (t.includes("प्रतिपदा") || t.includes("षष्ठी") || t.includes("pratipada") || t.includes("shashthi")) {
    return "nanda";
  }
  if (t.includes("द्वितीया") || t.includes("सप्तमी") || t.includes("द्वादशी") || t.includes("dwitiya") || t.includes("saptami") || t.includes("dwadashi")) {
    return "bhadra";
  }
  if (t.includes("तृतीया") || t.includes("अष्टमी") || t.includes("त्रयोदशी") || t.includes("tritiya") || t.includes("ashtami") || t.includes("trayodashi")) {
    return "jaya";
  }
  if (t.includes("पंचमी") || t.includes("दशमी") || t.includes("panchami") || t.includes("dashami")) {
    return "purna";
  }
  return "other";
}
function normalizePanchangInput(raw) {
  if (!raw || typeof raw !== "object") {
    const emptyFacts = createEmptyPanchangFacts();
    return {
      module: "panchang",
      inputHash: computeDeterministicHash({ module: "panchang", empty: true }),
      metadata: {
        engineVersion: "unknown",
        timezone: "unknown",
        sourcePayloadType: "invalid_payload"
      },
      facts: emptyFacts,
      missingRequiredFields: ["dateKey", "tithiName", "nakshatraName", "vaarName"],
      warnings: ["INSUFFICIENT_DATA"],
      status: "INSUFFICIENT_DATA"
    };
  }
  const missingRequiredFields = [];
  const dateKey = raw.dailyPanchang?.dateKey || (isFiniteNumber(raw.year) && isFiniteNumber(raw.month) && isFiniteNumber(raw.day) ? `${raw.year}-${String(raw.month).padStart(2, "0")}-${String(raw.day).padStart(2, "0")}` : isNonEmptyString(raw.date) ? raw.date.trim() : "");
  if (!dateKey) missingRequiredFields.push("dateKey");
  const rawTithi = isNonEmptyString(raw.tithiName) ? raw.tithiName : isNonEmptyString(raw.tithi) ? raw.tithi : "";
  const tithiName = stripParentheticalSuffix(rawTithi);
  if (!tithiName) missingRequiredFields.push("tithiName");
  const nakshatraName = stripParentheticalSuffix(raw.nakshatra);
  if (!nakshatraName) missingRequiredFields.push("nakshatraName");
  const vaarName = stripParentheticalSuffix(raw.vaarHindi || raw.weekdayHindi);
  if (!vaarName) missingRequiredFields.push("vaarName");
  const yogaName = stripParentheticalSuffix(
    isNonEmptyString(raw.yoga) ? raw.yoga.replace(/^योग:\s*/u, "") : ""
  );
  const karanaName = stripParentheticalSuffix(
    isNonEmptyString(raw.karana) ? raw.karana.replace(/^करण:\s*/u, "") : ""
  );
  const pakshaSource = [raw.paksha, raw.masaPaksha, rawTithi].filter(isNonEmptyString).join(" ");
  const pakshaInfo = detectPaksha(pakshaSource);
  const isEkadashi = Boolean(raw.isEkadashi) || tithiName.includes("एकादशी") || tithiName.toLowerCase().includes("ekadashi");
  const isPurnima = Boolean(raw.isPurnima) || tithiName.includes("पूर्णिमा") || tithiName.toLowerCase().includes("purnima");
  const isAmavasya = Boolean(raw.isAmavasya) || tithiName.includes("अमावस्या") || tithiName.toLowerCase().includes("amavasya");
  const isPradosh = Boolean(raw.isPradosh) || tithiName.includes("त्रयोदशी") || tithiName.toLowerCase().includes("trayodashi");
  const rahuWindow = isNonEmptyString(raw.rahukaal) ? raw.rahukaal.trim() : isNonEmptyString(raw.rahuKaal) ? raw.rahuKaal.trim() : "";
  const locationObj = raw.dailyPanchang?.location;
  const lat = isFiniteNumber(locationObj?.latitude) ? locationObj.latitude : isFiniteNumber(raw.latitude) ? raw.latitude : void 0;
  const lon = isFiniteNumber(locationObj?.longitude) ? locationObj.longitude : isFiniteNumber(raw.longitude) ? raw.longitude : void 0;
  const location = lat !== void 0 && lon !== void 0 ? {
    name: locationObj?.name || raw.locationName,
    latitude: lat,
    longitude: lon,
    elevationMeters: locationObj?.elevationMeters
  } : void 0;
  const timezone = locationObj?.timezone || (isNonEmptyString(raw.timezone) ? raw.timezone.trim() : "Asia/Kolkata");
  const engineVersion = isNonEmptyString(raw.engineVersion) ? raw.engineVersion.trim() : "panchang-v116";
  const facts = {
    dateKey,
    paksha: pakshaInfo.code,
    pakshaLabelHi: pakshaInfo.labelHi,
    tithiName,
    tithiCategory: classifyTithiCategory(tithiName, { isEkadashi, isPurnima, isAmavasya }),
    nakshatraName,
    yogaName,
    karanaName,
    vaarName,
    hinduMaas: isNonEmptyString(raw.hinduMaas) ? raw.hinduMaas.trim() : isNonEmptyString(raw.masaPaksha) ? raw.masaPaksha.trim() : "",
    suryaRashi: isNonEmptyString(raw.suryaRashi) ? raw.suryaRashi.trim() : "",
    chandraRashi: isNonEmptyString(raw.chandraRashi) ? raw.chandraRashi.trim() : "",
    dishaShool: isNonEmptyString(raw.dishaShool) ? raw.dishaShool.trim() : "",
    yogas: {
      hasSarvarthaSiddhi: hasActiveWindowText(raw.sarvarthaSiddhiYoga),
      hasAmritSiddhi: hasActiveWindowText(raw.amritSiddhiYoga),
      hasTripushkar: hasActiveWindowText(raw.tripushkarYoga),
      hasDwipushkar: hasActiveWindowText(raw.dwipushkarYoga),
      hasAbhijit: hasActiveWindowText(raw.abhijitMuhurat),
      abhijitWindow: hasActiveWindowText(raw.abhijitMuhurat) ? raw.abhijitMuhurat.trim() : "",
      sarvarthaSiddhiWindow: hasActiveWindowText(raw.sarvarthaSiddhiYoga) ? raw.sarvarthaSiddhiYoga.trim() : "",
      amritSiddhiWindow: hasActiveWindowText(raw.amritSiddhiYoga) ? raw.amritSiddhiYoga.trim() : ""
    },
    cautions: {
      hasBhadra: hasActiveWindowText(raw.bhadraKaal),
      bhadraWindow: hasActiveWindowText(raw.bhadraKaal) ? raw.bhadraKaal.trim() : "",
      hasPanchak: hasActiveWindowText(raw.panchakKaal),
      panchakWindow: hasActiveWindowText(raw.panchakKaal) ? raw.panchakKaal.trim() : "",
      hasGandmool: hasActiveWindowText(raw.gandmoolNakshatra),
      hasRahukaal: hasActiveWindowText(rahuWindow),
      rahukaalWindow: hasActiveWindowText(rahuWindow) ? rahuWindow : ""
    },
    observances: {
      isEkadashi,
      isPradosh,
      isPurnima,
      isAmavasya,
      hasSankranti: hasActiveWindowText(raw.sankrantiName),
      sankrantiName: hasActiveWindowText(raw.sankrantiName) ? raw.sankrantiName.trim() : "",
      festivalName: isNonEmptyString(raw.festivalName) ? raw.festivalName.trim() : ""
    }
  };
  const status = missingRequiredFields.length > 0 ? "INSUFFICIENT_DATA" : "READY";
  const warnings = status === "INSUFFICIENT_DATA" ? ["INSUFFICIENT_DATA"] : [];
  const metadata = {
    engineVersion,
    timezone,
    location,
    dateKey: dateKey || void 0,
    observanceProfile: raw.observanceProfile,
    sourcePayloadType: raw.dailyPanchang ? "CalendarDayPanchang" : "PanchangData"
  };
  return {
    module: "panchang",
    inputHash: computeDeterministicHash({
      module: "panchang",
      facts,
      timezone,
      engineVersion,
      observanceProfile: raw.observanceProfile
    }),
    metadata,
    facts,
    missingRequiredFields,
    warnings,
    status
  };
}
function createEmptyPanchangFacts() {
  return {
    dateKey: "",
    paksha: "unknown",
    pakshaLabelHi: "",
    tithiName: "",
    tithiCategory: "other",
    nakshatraName: "",
    yogaName: "",
    karanaName: "",
    vaarName: "",
    hinduMaas: "",
    suryaRashi: "",
    chandraRashi: "",
    dishaShool: "",
    yogas: {
      hasSarvarthaSiddhi: false,
      hasAmritSiddhi: false,
      hasTripushkar: false,
      hasDwipushkar: false,
      hasAbhijit: false,
      abhijitWindow: "",
      sarvarthaSiddhiWindow: "",
      amritSiddhiWindow: ""
    },
    cautions: {
      hasBhadra: false,
      bhadraWindow: "",
      hasPanchak: false,
      panchakWindow: "",
      hasGandmool: false,
      hasRahukaal: false,
      rahukaalWindow: ""
    },
    observances: {
      isEkadashi: false,
      isPradosh: false,
      isPurnima: false,
      isAmavasya: false,
      hasSankranti: false,
      sankrantiName: "",
      festivalName: ""
    }
  };
}
function normalizeMuhuratInput(raw) {
  if (!raw || typeof raw !== "object") {
    return {
      module: "muhurat",
      inputHash: computeDeterministicHash({ module: "muhurat", empty: true }),
      metadata: {
        engineVersion: "unknown",
        timezone: "unknown",
        sourcePayloadType: "invalid_payload"
      },
      facts: createEmptyMuhuratFacts(),
      missingRequiredFields: ["shivavaas_or_agnivaas"],
      warnings: ["INSUFFICIENT_DATA"],
      status: "INSUFFICIENT_DATA"
    };
  }
  const hasShivavaas = Boolean(
    raw.shivavaas && isFiniteNumber(raw.shivavaas.tithiIndex) && isNonEmptyString(raw.shivavaas.vaasNameHi)
  );
  const hasAgnivaas = Boolean(
    raw.agnivaas && isNonEmptyString(raw.agnivaas.vaasRealm) && isNonEmptyString(raw.agnivaas.vaasNameHi)
  );
  const hasTarabal = Boolean(
    raw.tarabal && isFiniteNumber(raw.tarabal.taraNumber) && isNonEmptyString(raw.tarabal.taraNameHi)
  );
  const hasChandrabal = Boolean(
    raw.chandrabal && isFiniteNumber(raw.chandrabal.houseNumber)
  );
  const missingRequiredFields = [];
  if (!hasShivavaas && !hasAgnivaas && !hasTarabal && !hasChandrabal) {
    missingRequiredFields.push("shivavaas_or_agnivaas");
  }
  const facts = {
    activityType: raw.activityType || "general",
    isShivaratriOrShravan: Boolean(raw.isShivaratriOrShravan),
    isJyotirlingaKshetra: Boolean(raw.isJyotirlingaKshetra),
    hasBhadra: Boolean(raw.hasBhadra),
    bhadraWindow: isNonEmptyString(raw.bhadraWindow) ? raw.bhadraWindow.trim() : "",
    hasPanchak: Boolean(raw.hasPanchak),
    panchakNameHi: isNonEmptyString(raw.panchakNameHi) ? raw.panchakNameHi.trim() : "",
    hasAbhijit: Boolean(raw.hasAbhijit),
    abhijitWindow: isNonEmptyString(raw.abhijitWindow) ? raw.abhijitWindow.trim() : "",
    shivavaas: {
      available: hasShivavaas,
      tithiIndex: hasShivavaas ? raw.shivavaas.tithiIndex : null,
      vaasNameHi: hasShivavaas ? raw.shivavaas.vaasNameHi : "",
      vaasNameEn: hasShivavaas ? raw.shivavaas.vaasNameEn : "",
      isAuspicious: hasShivavaas ? Boolean(raw.shivavaas.isAuspicious) : false
    },
    agnivaas: {
      available: hasAgnivaas,
      vaasRealm: hasAgnivaas ? raw.agnivaas.vaasRealm : "unknown",
      vaasNameHi: hasAgnivaas ? raw.agnivaas.vaasNameHi : "",
      isAuspicious: hasAgnivaas ? Boolean(raw.agnivaas.isAuspicious) : false
    },
    personal: {
      hasTarabal,
      taraNumber: hasTarabal ? raw.tarabal.taraNumber : null,
      taraNameHi: hasTarabal ? raw.tarabal.taraNameHi : "",
      taraStatus: hasTarabal ? raw.tarabal.status : "none",
      hasChandrabal,
      chandraHouse: hasChandrabal ? raw.chandrabal.houseNumber : null,
      chandraStatus: hasChandrabal ? raw.chandrabal.status : "none"
    }
  };
  const timezone = isNonEmptyString(raw.timezone) ? raw.timezone.trim() : "Asia/Kolkata";
  const engineVersion = isNonEmptyString(raw.engineVersion) ? raw.engineVersion.trim() : "classical-muhurat-v1";
  const status = missingRequiredFields.length > 0 ? "INSUFFICIENT_DATA" : "READY";
  const warnings = status === "INSUFFICIENT_DATA" ? ["INSUFFICIENT_DATA"] : [];
  return {
    module: "muhurat",
    inputHash: computeDeterministicHash({
      module: "muhurat",
      facts,
      timezone,
      engineVersion
    }),
    metadata: {
      engineVersion,
      timezone,
      location: raw.location,
      dateKey: raw.dateKey,
      sourcePayloadType: "ClassicalMuhuratAngas"
    },
    facts,
    missingRequiredFields,
    warnings,
    status
  };
}
function createEmptyMuhuratFacts() {
  return {
    activityType: "general",
    isShivaratriOrShravan: false,
    isJyotirlingaKshetra: false,
    hasBhadra: false,
    bhadraWindow: "",
    hasPanchak: false,
    panchakNameHi: "",
    hasAbhijit: false,
    abhijitWindow: "",
    shivavaas: {
      available: false,
      tithiIndex: null,
      vaasNameHi: "",
      vaasNameEn: "",
      isAuspicious: false
    },
    agnivaas: {
      available: false,
      vaasRealm: "unknown",
      vaasNameHi: "",
      isAuspicious: false
    },
    personal: {
      hasTarabal: false,
      taraNumber: null,
      taraNameHi: "",
      taraStatus: "none",
      hasChandrabal: false,
      chandraHouse: null,
      chandraStatus: "none"
    }
  };
}
const BENEFIC_MOON_TRANSIT_HOUSES = /* @__PURE__ */ new Set([1, 3, 6, 7, 10, 11]);
const BENEFIC_JUPITER_TRANSIT_HOUSES = /* @__PURE__ */ new Set([2, 5, 7, 9, 11]);
function normalizeRashifalInput(raw) {
  if (!raw || typeof raw !== "object") {
    return {
      module: "rashifal",
      inputHash: computeDeterministicHash({ module: "rashifal", empty: true }),
      metadata: {
        engineVersion: "unknown",
        timezone: "unknown",
        sourcePayloadType: "invalid_payload"
      },
      facts: createEmptyRashifalFacts(),
      missingRequiredFields: ["period", "rashiNumber", "moonHouse"],
      warnings: ["INSUFFICIENT_DATA"],
      status: "INSUFFICIENT_DATA"
    };
  }
  const missingRequiredFields = [];
  const validPeriod = raw.period === "daily" || raw.period === "weekly" || raw.period === "monthly";
  if (!validPeriod) missingRequiredFields.push("period");
  const validRashi = isFiniteNumber(raw.rashiNumber) && raw.rashiNumber >= 1 && raw.rashiNumber <= 12;
  if (!validRashi) missingRequiredFields.push("rashiNumber");
  const validMoonHouse = isFiniteNumber(raw.moonHouse) && raw.moonHouse >= 1 && raw.moonHouse <= 12;
  if (!validMoonHouse) missingRequiredFields.push("moonHouse");
  const moonHouse = validMoonHouse ? Math.round(raw.moonHouse) : null;
  const jupiterHouse = isFiniteNumber(raw.jupiterHouse) && raw.jupiterHouse >= 1 && raw.jupiterHouse <= 12 ? Math.round(raw.jupiterHouse) : null;
  const saturnHouse = isFiniteNumber(raw.saturnHouse) && raw.saturnHouse >= 1 && raw.saturnHouse <= 12 ? Math.round(raw.saturnHouse) : null;
  const hasPersonalTarabala = Boolean(
    raw.tarabala && isFiniteNumber(raw.tarabala.taraNumber)
  );
  const facts = {
    period: validPeriod ? raw.period : "unknown",
    rashiNumber: validRashi ? Math.round(raw.rashiNumber) : null,
    rashiNameHi: isNonEmptyString(raw.rashiNameHi) ? raw.rashiNameHi.trim() : "",
    rashiNameEn: isNonEmptyString(raw.rashiNameEn) ? raw.rashiNameEn.trim() : "",
    moonHouse,
    hasMoonSignChange: Boolean(raw.hasMoonSignChange),
    eveningMoonHouse: isFiniteNumber(raw.eveningMoonHouse) && raw.eveningMoonHouse >= 1 && raw.eveningMoonHouse <= 12 ? Math.round(raw.eveningMoonHouse) : null,
    isChandrashtama: Boolean(raw.isMoonInChandrashtama) || moonHouse === 8,
    isMoonBeneficHouse: moonHouse !== null && BENEFIC_MOON_TRANSIT_HOUSES.has(moonHouse),
    jupiterHouse,
    saturnHouse,
    marsHouse: isFiniteNumber(raw.marsHouse) ? Math.round(raw.marsHouse) : null,
    venusHouse: isFiniteNumber(raw.venusHouse) ? Math.round(raw.venusHouse) : null,
    mercuryHouse: isFiniteNumber(raw.mercuryHouse) ? Math.round(raw.mercuryHouse) : null,
    hasJupiterSupport: jupiterHouse !== null && BENEFIC_JUPITER_TRANSIT_HOUSES.has(jupiterHouse),
    isSaturnPressure: Boolean(raw.isSaturnSadeSatiOrDhaiya) || saturnHouse === 1 || saturnHouse === 4 || saturnHouse === 8 || saturnHouse === 12,
    hasPersonalTarabala,
    tarabalaFavorable: hasPersonalTarabala ? Boolean(raw.tarabala.isFavorable) : null
  };
  const timezone = isNonEmptyString(raw.timezone) ? raw.timezone.trim() : "Asia/Kolkata";
  const engineVersion = isNonEmptyString(raw.engineVersion) ? raw.engineVersion.trim() : "rashifal-transit-v1";
  const status = missingRequiredFields.length > 0 ? "INSUFFICIENT_DATA" : "READY";
  const warnings = status === "INSUFFICIENT_DATA" ? ["INSUFFICIENT_DATA"] : [];
  return {
    module: "rashifal",
    inputHash: computeDeterministicHash({
      module: "rashifal",
      facts,
      timezone,
      engineVersion
    }),
    metadata: {
      engineVersion,
      timezone,
      location: raw.location,
      dateKey: raw.dateKey,
      sourcePayloadType: "VedicTransitSnapshot"
    },
    facts,
    missingRequiredFields,
    warnings,
    status
  };
}
function createEmptyRashifalFacts() {
  return {
    period: "unknown",
    rashiNumber: null,
    rashiNameHi: "",
    rashiNameEn: "",
    moonHouse: null,
    hasMoonSignChange: false,
    eveningMoonHouse: null,
    isChandrashtama: false,
    isMoonBeneficHouse: false,
    jupiterHouse: null,
    saturnHouse: null,
    marsHouse: null,
    venusHouse: null,
    mercuryHouse: null,
    hasJupiterSupport: false,
    isSaturnPressure: false,
    hasPersonalTarabala: false,
    tarabalaFavorable: null
  };
}
function normalizeKundaliInput(raw) {
  if (!raw || typeof raw !== "object") {
    return {
      module: "kundali",
      inputHash: computeDeterministicHash({ module: "kundali", empty: true }),
      metadata: {
        engineVersion: "unknown",
        timezone: "unknown",
        sourcePayloadType: "invalid_payload"
      },
      facts: createEmptyKundaliFacts(),
      missingRequiredFields: ["panchang.lagnaName", "panchang.moonRashiName", "planets"],
      warnings: ["INSUFFICIENT_DATA"],
      status: "INSUFFICIENT_DATA"
    };
  }
  const missingRequiredFields = [];
  if (!isNonEmptyString(raw.panchang?.lagnaName)) {
    missingRequiredFields.push("panchang.lagnaName");
  }
  if (!isNonEmptyString(raw.panchang?.moonRashiName)) {
    missingRequiredFields.push("panchang.moonRashiName");
  }
  if (!Array.isArray(raw.planets) || raw.planets.length === 0) {
    missingRequiredFields.push("planets");
  }
  const planets = Array.isArray(raw.planets) ? raw.planets : [];
  const currentMaha = Array.isArray(raw.mahadashas) ? raw.mahadashas.find((d) => d.isCurrent) : void 0;
  const rajYogas = Array.isArray(raw.rajYogas) ? raw.rajYogas : [];
  const sadeSatiStatus = raw.doshaAnalysis?.sadeSati?.status || "";
  const sadeSatiActive = isNonEmptyString(sadeSatiStatus) && !sadeSatiStatus.includes("नहीं") && !sadeSatiStatus.toLowerCase().includes("no") && !sadeSatiStatus.toLowerCase().includes("inactive");
  const facts = {
    lagnaNumber: isFiniteNumber(raw.panchang?.lagnaNumber) ? raw.panchang.lagnaNumber : null,
    lagnaName: isNonEmptyString(raw.panchang?.lagnaName) ? raw.panchang.lagnaName.trim() : "",
    lagnaLord: isNonEmptyString(raw.panchang?.lagnaLord) ? raw.panchang.lagnaLord.trim() : "",
    moonRashiNumber: isFiniteNumber(raw.panchang?.moonRashiNumber) ? raw.panchang.moonRashiNumber : null,
    moonRashiName: isNonEmptyString(raw.panchang?.moonRashiName) ? raw.panchang.moonRashiName.trim() : "",
    nakshatraName: isNonEmptyString(raw.panchang?.nakshatraName) ? raw.panchang.nakshatraName.trim() : "",
    nakshatraPada: isFiniteNumber(raw.panchang?.nakshatraPada) ? raw.panchang.nakshatraPada : null,
    birthTimeUncertain: isNonEmptyString(raw.input?.birthTimeUncertainty) && raw.input.birthTimeUncertainty !== "exact",
    currentMahadashaPlanet: isNonEmptyString(currentMaha?.planet) ? currentMaha.planet.trim() : "",
    currentAntardashaPlanet: isNonEmptyString(currentMaha?.currentAntardasha) ? currentMaha.currentAntardasha.trim() : "",
    exaltedPlanetCount: planets.filter((p) => Boolean(p.isExalted)).length,
    debilitatedPlanetCount: planets.filter((p) => Boolean(p.isDebilitated)).length,
    retrogradePlanetCount: planets.filter((p) => Boolean(p.isRetrograde)).length,
    rajYogaCount: rajYogas.length,
    hasStrongRajYoga: rajYogas.some((y) => y.strength === "प्रबल योग"),
    doshas: {
      isManglik: Boolean(raw.doshaAnalysis?.manglik?.isManglik),
      manglikSeverity: isNonEmptyString(raw.doshaAnalysis?.manglik?.severity) ? raw.doshaAnalysis.manglik.severity.trim() : "",
      marsHouse: isFiniteNumber(raw.doshaAnalysis?.manglik?.marsHouse) ? raw.doshaAnalysis.manglik.marsHouse : null,
      hasKaalSarp: Boolean(raw.doshaAnalysis?.kaalSarp?.isPresent),
      kaalSarpType: isNonEmptyString(raw.doshaAnalysis?.kaalSarp?.type) ? raw.doshaAnalysis.kaalSarp.type.trim() : "",
      sadeSatiActive,
      sadeSatiPhase: isNonEmptyString(raw.doshaAnalysis?.sadeSati?.phase) ? raw.doshaAnalysis.sadeSati.phase.trim() : ""
    }
  };
  const location = isFiniteNumber(raw.input?.latitude) && isFiniteNumber(raw.input?.longitude) ? {
    name: raw.input?.birthPlace,
    latitude: raw.input.latitude,
    longitude: raw.input.longitude
  } : void 0;
  const timezone = isNonEmptyString(raw.input?.timeZone) ? raw.input.timeZone.trim() : "Asia/Kolkata";
  const engineVersion = isNonEmptyString(raw.engineVersion) ? raw.engineVersion.trim() : "sampurn-kundali-v2";
  const status = missingRequiredFields.length > 0 ? "INSUFFICIENT_DATA" : "READY";
  const warnings = status === "INSUFFICIENT_DATA" ? ["INSUFFICIENT_DATA"] : [];
  return {
    module: "kundali",
    inputHash: computeDeterministicHash({
      module: "kundali",
      facts,
      timezone,
      engineVersion
    }),
    metadata: {
      engineVersion,
      timezone,
      location,
      dateKey: raw.input?.dob,
      sourcePayloadType: "SampurnKundaliReport"
    },
    facts,
    missingRequiredFields,
    warnings,
    status
  };
}
function normalizeKundaliMilanInput(raw) {
  if (!raw || typeof raw !== "object") {
    return {
      module: "kundali_milan",
      inputHash: computeDeterministicHash({ module: "kundali_milan", empty: true }),
      metadata: {
        engineVersion: "unknown",
        timezone: "unknown",
        sourcePayloadType: "invalid_payload"
      },
      facts: createEmptyMilanFacts(),
      missingRequiredFields: ["totalScore", "koots"],
      warnings: ["INSUFFICIENT_DATA"],
      status: "INSUFFICIENT_DATA"
    };
  }
  const missingRequiredFields = [];
  const validScore = isFiniteNumber(raw.totalScore) && raw.totalScore >= 0 && raw.totalScore <= 36;
  if (!validScore) missingRequiredFields.push("totalScore");
  if (!Array.isArray(raw.koots) || raw.koots.length === 0) {
    missingRequiredFields.push("koots");
  }
  const koots = Array.isArray(raw.koots) ? raw.koots : [];
  const findKoot = (needle) => koots.find(
    (k) => k.id && k.id.toLowerCase().includes(needle) || k.name.toLowerCase().includes(needle)
  );
  const nadiKoot = findKoot("nadi");
  const bhakootKoot = findKoot("bhakoot");
  const ganaKoot = findKoot("gana");
  const parihars = raw.deepMatchInsights?.pariharChecks || [];
  const isPariharCancelled = (needle) => parihars.some(
    (p) => p.doshaName.toLowerCase().includes(needle) && (p.status.includes("परिहार") || p.status.toLowerCase().includes("cancelled"))
  );
  const boyManglik = Boolean(raw.manglikStatus?.boyManglik);
  const girlManglik = Boolean(raw.manglikStatus?.girlManglik);
  const manglikMatched = raw.manglikStatus ? Boolean(raw.manglikStatus.manglikMatch) : boyManglik === girlManglik;
  const facts = {
    totalScore: validScore ? raw.totalScore : null,
    maxScore: isFiniteNumber(raw.maxScore) ? raw.maxScore : 36,
    compatibilityPercentage: isFiniteNumber(raw.compatibilityPercentage) ? raw.compatibilityPercentage : validScore ? Math.round(raw.totalScore / 36 * 100) : null,
    boyRashi: isNonEmptyString(raw.boyRashi) ? raw.boyRashi.trim() : "",
    girlRashi: isNonEmptyString(raw.girlRashi) ? raw.girlRashi.trim() : "",
    hasNadiDosha: Boolean(nadiKoot && nadiKoot.status === "dosh"),
    nadiDoshaCancelled: isPariharCancelled("nadi") || isPariharCancelled("नाड़ी"),
    hasBhakootDosha: Boolean(bhakootKoot && bhakootKoot.status === "dosh"),
    bhakootDoshaCancelled: isPariharCancelled("bhakoot") || isPariharCancelled("भकूट"),
    hasGanaDosha: Boolean(ganaKoot && ganaKoot.status === "dosh"),
    boyManglik,
    girlManglik,
    manglikMatched,
    manglikMismatch: boyManglik !== girlManglik && !manglikMatched
  };
  const timezone = isNonEmptyString(raw.timezone) ? raw.timezone.trim() : "Asia/Kolkata";
  const engineVersion = isNonEmptyString(raw.engineVersion) ? raw.engineVersion.trim() : "ashtakoot-milan-v1";
  const status = missingRequiredFields.length > 0 ? "INSUFFICIENT_DATA" : "READY";
  const warnings = status === "INSUFFICIENT_DATA" ? ["INSUFFICIENT_DATA"] : [];
  return {
    module: "kundali_milan",
    inputHash: computeDeterministicHash({
      module: "kundali_milan",
      facts,
      timezone,
      engineVersion
    }),
    metadata: {
      engineVersion,
      timezone,
      sourcePayloadType: "KundaliMilanResult"
    },
    facts,
    missingRequiredFields,
    warnings,
    status
  };
}
function createEmptyKundaliFacts() {
  return {
    lagnaNumber: null,
    lagnaName: "",
    lagnaLord: "",
    moonRashiNumber: null,
    moonRashiName: "",
    nakshatraName: "",
    nakshatraPada: null,
    birthTimeUncertain: false,
    currentMahadashaPlanet: "",
    currentAntardashaPlanet: "",
    exaltedPlanetCount: 0,
    debilitatedPlanetCount: 0,
    retrogradePlanetCount: 0,
    rajYogaCount: 0,
    hasStrongRajYoga: false,
    doshas: {
      isManglik: false,
      manglikSeverity: "",
      marsHouse: null,
      hasKaalSarp: false,
      kaalSarpType: "",
      sadeSatiActive: false,
      sadeSatiPhase: ""
    }
  };
}
function createEmptyMilanFacts() {
  return {
    totalScore: null,
    maxScore: 36,
    compatibilityPercentage: null,
    boyRashi: "",
    girlRashi: "",
    hasNadiDosha: false,
    nadiDoshaCancelled: false,
    hasBhakootDosha: false,
    bhakootDoshaCancelled: false,
    hasGanaDosha: false,
    boyManglik: false,
    girlManglik: false,
    manglikMatched: true,
    manglikMismatch: false
  };
}
class NormalizerRegistry {
  normalizers = /* @__PURE__ */ new Map();
  constructor(overrides) {
    this.normalizers.set(
      "panchang",
      (p) => normalizePanchangInput(p)
    );
    this.normalizers.set(
      "muhurat",
      (p) => normalizeMuhuratInput(p)
    );
    this.normalizers.set(
      "rashifal",
      (p) => normalizeRashifalInput(p)
    );
    this.normalizers.set(
      "kundali",
      (p) => normalizeKundaliInput(p)
    );
    this.normalizers.set(
      "kundali_milan",
      (p) => normalizeKundaliMilanInput(p)
    );
    if (overrides) {
      for (const [mod, fn] of Object.entries(overrides)) {
        if (fn) {
          this.normalizers.set(mod, fn);
        }
      }
    }
  }
  register(module, fn) {
    this.normalizers.set(module, fn);
  }
  normalize(module, payload) {
    const fn = this.normalizers.get(module);
    if (!fn) {
      throw new Error(`No normalizer registered for module "${module}".`);
    }
    return fn(payload);
  }
}
const defaultNormalizerRegistry = new NormalizerRegistry();
const FORBIDDEN_PATH_SEGMENTS = /* @__PURE__ */ new Set(["__proto__", "prototype", "constructor"]);
function resolveFieldPath(facts, path) {
  if (!path || typeof path !== "string") return void 0;
  const segments = path.split(".");
  let current = facts;
  for (const segment of segments) {
    if (!segment || FORBIDDEN_PATH_SEGMENTS.has(segment)) {
      return void 0;
    }
    if (current === null || current === void 0 || typeof current !== "object") {
      return void 0;
    }
    if (!Object.prototype.hasOwnProperty.call(current, segment)) {
      return void 0;
    }
    current = current[segment];
  }
  return current;
}
function isAllCondition(cond) {
  return "all" in cond && Array.isArray(cond.all);
}
function isAnyCondition(cond) {
  return "any" in cond && Array.isArray(cond.any);
}
function isNoneCondition(cond) {
  return "none" in cond && Array.isArray(cond.none);
}
function isLeafCondition(cond) {
  return "field" in cond && "op" in cond;
}
function evaluateLeafCondition(cond, facts) {
  const actual = resolveFieldPath(facts, cond.field);
  const expected = cond.value;
  switch (cond.op) {
    case "exists": {
      const present = actual !== void 0 && actual !== null && (typeof actual !== "string" || actual.trim().length > 0);
      return expected === false ? !present : present;
    }
    case "equals":
      return actual === expected;
    case "notEquals":
      return actual !== expected;
    case "gt":
      return typeof actual === "number" && typeof expected === "number" && Number.isFinite(actual) && Number.isFinite(expected) && actual > expected;
    case "lt":
      return typeof actual === "number" && typeof expected === "number" && Number.isFinite(actual) && Number.isFinite(expected) && actual < expected;
    case "gte":
      return typeof actual === "number" && typeof expected === "number" && Number.isFinite(actual) && Number.isFinite(expected) && actual >= expected;
    case "lte":
      return typeof actual === "number" && typeof expected === "number" && Number.isFinite(actual) && Number.isFinite(expected) && actual <= expected;
    case "in": {
      if (!Array.isArray(expected)) return false;
      return expected.includes(actual);
    }
    case "notIn": {
      if (!Array.isArray(expected)) return false;
      return !expected.includes(actual);
    }
    default:
      return false;
  }
}
function evaluateCondition(condition, facts) {
  if (!condition || typeof condition !== "object") return false;
  if (isAllCondition(condition)) {
    if (condition.all.length === 0) return false;
    return condition.all.every((sub) => evaluateCondition(sub, facts));
  }
  if (isAnyCondition(condition)) {
    if (condition.any.length === 0) return false;
    return condition.any.some((sub) => evaluateCondition(sub, facts));
  }
  if (isNoneCondition(condition)) {
    return condition.none.every((sub) => !evaluateCondition(sub, facts));
  }
  if (isLeafCondition(condition)) {
    return evaluateLeafCondition(condition, facts);
  }
  return false;
}
function computeConditionSpecificity(condition) {
  if (!condition || typeof condition !== "object") return 0;
  if (isAllCondition(condition)) {
    return condition.all.reduce(
      (sum, sub) => sum + computeConditionSpecificity(sub),
      0
    );
  }
  if (isAnyCondition(condition)) {
    if (condition.any.length === 0) return 0;
    return Math.max(...condition.any.map((sub) => computeConditionSpecificity(sub)));
  }
  if (isNoneCondition(condition)) {
    return condition.none.reduce(
      (sum, sub) => sum + Math.max(1, Math.floor(computeConditionSpecificity(sub) / 2)),
      0
    );
  }
  if (isLeafCondition(condition)) {
    switch (condition.op) {
      case "equals":
        return 3;
      case "in":
      case "notIn":
      case "gt":
      case "lt":
      case "gte":
      case "lte":
        return 2;
      case "notEquals":
      case "exists":
      default:
        return 1;
    }
  }
  return 0;
}
function isValidRuleCondition(condition) {
  if (!condition || typeof condition !== "object") return false;
  const c = condition;
  if (Array.isArray(c.all)) {
    return c.all.length > 0 && c.all.every(isValidRuleCondition);
  }
  if (Array.isArray(c.any)) {
    return c.any.length > 0 && c.any.every(isValidRuleCondition);
  }
  if (Array.isArray(c.none)) {
    return c.none.length > 0 && c.none.every(isValidRuleCondition);
  }
  if (typeof c.field === "string" && c.field.trim().length > 0 && typeof c.op === "string") {
    return c.op === "equals" || c.op === "notEquals" || c.op === "gt" || c.op === "lt" || c.op === "gte" || c.op === "lte" || c.op === "in" || c.op === "notIn" || c.op === "exists";
  }
  return false;
}
function resolveFactSlots(produces, facts) {
  if (!produces.slotBindings) {
    return {
      ...produces,
      slots: { ...produces.slots }
    };
  }
  const resolvedSlots = {
    ...produces.slots
  };
  for (const [slotName, fieldPath] of Object.entries(produces.slotBindings)) {
    const val = resolveFieldPath(facts, fieldPath);
    if (typeof val === "string" || typeof val === "number" && Number.isFinite(val) || typeof val === "boolean") {
      resolvedSlots[slotName] = val;
    }
  }
  return {
    conceptKey: produces.conceptKey,
    domain: produces.domain,
    polarity: produces.polarity,
    templateKey: produces.templateKey,
    slots: resolvedSlots
  };
}
class RuleRegistryError extends Error {
  constructor(message) {
    super(message);
    this.name = "RuleRegistryError";
  }
}
function validateRulePack(pack) {
  if (!pack || !pack.metadata || !Array.isArray(pack.rules)) {
    throw new RuleRegistryError("Invalid RulePackDefinition structure.");
  }
  if (!pack.metadata.version || !pack.metadata.module) {
    throw new RuleRegistryError("RulePack metadata must specify module and version.");
  }
  const seenIds = /* @__PURE__ */ new Set();
  for (const rule of pack.rules) {
    if (!rule.id || typeof rule.id !== "string") {
      throw new RuleRegistryError(`Rule in pack "${pack.metadata.module}" is missing an id.`);
    }
    if (seenIds.has(rule.id)) {
      throw new RuleRegistryError(`Duplicate rule id "${rule.id}" in pack "${pack.metadata.module}".`);
    }
    seenIds.add(rule.id);
    if (!isValidRuleCondition(rule.when)) {
      throw new RuleRegistryError(`Rule "${rule.id}" contains an invalid declarative condition AST.`);
    }
    if (!Number.isFinite(rule.priority)) {
      throw new RuleRegistryError(`Rule "${rule.id}" must have a finite numeric priority.`);
    }
    if (!Array.isArray(rule.references) || rule.references.length === 0) {
      throw new RuleRegistryError(
        `Rule "${rule.id}" must include at least one verified RuleReference.`
      );
    }
    const hasVerifiedReference = rule.references.some(
      (ref) => ref.verified && Boolean(ref.sourceName)
    );
    if (!hasVerifiedReference) {
      throw new RuleRegistryError(
        `Rule "${rule.id}" has no verified source reference (hallucinated references are forbidden).`
      );
    }
  }
}
const DEFAULT_LAZY_LOADERS = {
  panchang: async () => (await __vitePreload(async () => {
    const { PANCHANG_RULE_PACK } = await import("./panchang.rules-EU-PspMw.js");
    return { PANCHANG_RULE_PACK };
  }, true ? [] : void 0)).PANCHANG_RULE_PACK,
  muhurat: async () => (await __vitePreload(async () => {
    const { MUHURAT_RULE_PACK } = await import("./muhurat.rules-DhQTM9UW.js");
    return { MUHURAT_RULE_PACK };
  }, true ? [] : void 0)).MUHURAT_RULE_PACK,
  rashifal: async () => (await __vitePreload(async () => {
    const { RASHIFAL_RULE_PACK } = await import("./rashifal.rules-Cy8BUzou.js");
    return { RASHIFAL_RULE_PACK };
  }, true ? [] : void 0)).RASHIFAL_RULE_PACK,
  kundali: async () => (await __vitePreload(async () => {
    const { KUNDALI_RULE_PACK } = await import("./kundali.rules-DTjU49vB.js");
    return { KUNDALI_RULE_PACK };
  }, true ? [] : void 0)).KUNDALI_RULE_PACK,
  kundali_milan: async () => (await __vitePreload(async () => {
    const { KUNDALI_MILAN_RULE_PACK } = await import("./kundaliMilan.rules-DEodVaTc.js");
    return { KUNDALI_MILAN_RULE_PACK };
  }, true ? [] : void 0)).KUNDALI_MILAN_RULE_PACK
};
class RuleRegistry {
  loaders = /* @__PURE__ */ new Map();
  loadedPacks = /* @__PURE__ */ new Map();
  constructor(customLoaders) {
    for (const [mod, loader] of Object.entries(DEFAULT_LAZY_LOADERS)) {
      this.loaders.set(mod, loader);
    }
    if (customLoaders) {
      for (const [mod, loader] of Object.entries(customLoaders)) {
        if (loader) {
          this.loaders.set(mod, loader);
        }
      }
    }
  }
  /**
   * Registers an in-memory RulePack directly (useful for testing or runtime DI overrides).
   */
  registerRulePack(pack) {
    validateRulePack(pack);
    this.loadedPacks.set(pack.metadata.module, pack);
  }
  /**
   * Lazily loads, validates, and caches the rule pack for a given module.
   */
  async loadRulePack(module) {
    const cached = this.loadedPacks.get(module);
    if (cached) return cached;
    const loader = this.loaders.get(module);
    if (!loader) {
      throw new RuleRegistryError(`No lazy rule pack loader configured for module "${module}".`);
    }
    const pack = await loader();
    validateRulePack(pack);
    this.loadedPacks.set(module, pack);
    return pack;
  }
  /**
   * Returns already-loaded rule pack synchronously (returns undefined if not loaded yet).
   */
  getLoadedRulePack(module) {
    return this.loadedPacks.get(module);
  }
  /**
   * Lists loaded rules for a module (loads lazily if not cached).
   */
  async getRules(module) {
    const pack = await this.loadRulePack(module);
    return pack.rules;
  }
  clearCache(module) {
    if (module) {
      this.loadedPacks.delete(module);
    } else {
      this.loadedPacks.clear();
    }
  }
}
const defaultRuleRegistry = new RuleRegistry();
const SOURCE_AUTHORITY_WEIGHT = {
  PRIMARY_SCRIPTURE: 3,
  CLASSICAL_JYOTISH_TEXT: 2,
  TRADITIONAL_INTERPRETATION: 1
};
const MODULE_PRECEDENCE_WEIGHT = {
  muhurat: 5,
  panchang: 4,
  kundali_milan: 3,
  kundali: 2,
  rashifal: 1
};
function getHighestSourceAuthorityWeight(rule) {
  let max = 0;
  for (const ref of rule.references) {
    if (ref.verified) {
      const weight = SOURCE_AUTHORITY_WEIGHT[ref.tier] ?? 0;
      if (weight > max) max = weight;
    }
  }
  return max;
}
function compareRuleMatches(a, b, activeModule) {
  if (a.effectiveSpecificity !== b.effectiveSpecificity) {
    return {
      order: b.effectiveSpecificity - a.effectiveSpecificity,
      criterion: "SPECIFICITY",
      isUnresolvedTie: false
    };
  }
  const aEx = a.rule.isException ? 1 : 0;
  const bEx = b.rule.isException ? 1 : 0;
  if (aEx !== bEx) {
    return {
      order: bEx - aEx,
      criterion: "EXPLICIT_EXCEPTION",
      isUnresolvedTie: false
    };
  }
  if (a.highestAuthorityWeight !== b.highestAuthorityWeight) {
    return {
      order: b.highestAuthorityWeight - a.highestAuthorityWeight,
      criterion: "SOURCE_AUTHORITY",
      isUnresolvedTie: false
    };
  }
  const aExactMod = a.rule.module === activeModule ? 1 : 0;
  const bExactMod = b.rule.module === activeModule ? 1 : 0;
  if (aExactMod !== bExactMod) {
    return {
      order: bExactMod - aExactMod,
      criterion: "MODULE_PRECEDENCE",
      isUnresolvedTie: false
    };
  }
  const aModWeight = MODULE_PRECEDENCE_WEIGHT[a.rule.module] ?? 0;
  const bModWeight = MODULE_PRECEDENCE_WEIGHT[b.rule.module] ?? 0;
  if (aModWeight !== bModWeight) {
    return {
      order: bModWeight - aModWeight,
      criterion: "MODULE_PRECEDENCE",
      isUnresolvedTie: false
    };
  }
  if (a.rule.priority !== b.rule.priority) {
    return {
      order: b.rule.priority - a.rule.priority,
      criterion: "NUMERIC_PRIORITY",
      isUnresolvedTie: false
    };
  }
  const lexOrder = a.rule.id.localeCompare(b.rule.id);
  return {
    order: lexOrder,
    criterion: "UNRESOLVED_TIE_BREAK_BY_ID",
    isUnresolvedTie: true
  };
}
function resolveRuleConflicts(matches, activeModule) {
  const ungrouped = [];
  const groups = /* @__PURE__ */ new Map();
  for (const match of matches) {
    const group = match.rule.conflictGroup;
    if (!group) {
      ungrouped.push(match);
    } else {
      const bucket = groups.get(group) || [];
      bucket.push(match);
      groups.set(group, bucket);
    }
  }
  const survivors = [...ungrouped];
  const exclusions = [];
  const resolutions = [];
  const warnings = [];
  let hasUnresolvedWarning = false;
  const sortedGroupNames = Array.from(groups.keys()).sort();
  for (const groupName of sortedGroupNames) {
    const candidates = groups.get(groupName);
    if (candidates.length === 1) {
      survivors.push(candidates[0]);
      continue;
    }
    const sorted = [...candidates].sort(
      (a, b) => compareRuleMatches(a, b, activeModule).order
    );
    const winner = sorted[0];
    const runnerUp = sorted[1];
    const topComparison = compareRuleMatches(winner, runnerUp, activeModule);
    if (topComparison.isUnresolvedTie && !hasUnresolvedWarning) {
      warnings.push("CONFLICT_UNRESOLVED");
      hasUnresolvedWarning = true;
    }
    survivors.push(winner);
    const loserIds = [];
    for (let i = 1; i < sorted.length; i += 1) {
      const loser = sorted[i];
      const pairOutcome = compareRuleMatches(winner, loser, activeModule);
      loserIds.push(loser.rule.id);
      exclusions.push({
        ruleId: loser.rule.id,
        reason: "CONFLICT_LOST",
        excludedByRuleId: winner.rule.id,
        conflictGroup: groupName,
        detail: pairOutcome.isUnresolvedTie ? `CONFLICT_UNRESOLVED: tied with ${winner.rule.id} across all 5 precedence tiers` : `Outranked by ${winner.rule.id} via ${pairOutcome.criterion}`
      });
    }
    resolutions.push({
      conflictGroup: groupName,
      winnerRuleId: winner.rule.id,
      loserRuleIds: loserIds,
      decidingCriterion: topComparison.criterion,
      unresolved: topComparison.isUnresolvedTie
    });
  }
  survivors.sort((a, b) => compareRuleMatches(a, b, activeModule).order);
  return {
    survivors,
    exclusions,
    resolutions,
    warnings
  };
}
function findCyclicRuleIds(matchedMap) {
  const WHITE = 0;
  const GRAY = 1;
  const BLACK = 2;
  const color = /* @__PURE__ */ new Map();
  const cyclic = /* @__PURE__ */ new Set();
  for (const id of matchedMap.keys()) {
    color.set(id, WHITE);
  }
  const dfs = (id, stack) => {
    color.set(id, GRAY);
    stack.push(id);
    const match = matchedMap.get(id);
    const deps = match?.rule.requiresRuleIds || [];
    for (const depId of deps) {
      if (!matchedMap.has(depId)) continue;
      const depColor = color.get(depId);
      if (depColor === GRAY) {
        const cycleStartIdx = stack.indexOf(depId);
        for (let i = cycleStartIdx; i < stack.length; i += 1) {
          cyclic.add(stack[i]);
        }
      } else if (depColor === WHITE) {
        dfs(depId, stack);
      }
    }
    stack.pop();
    color.set(id, BLACK);
  };
  for (const id of Array.from(matchedMap.keys()).sort()) {
    if (color.get(id) === WHITE) {
      dfs(id, []);
    }
  }
  return cyclic;
}
function resolveDependenciesAndExclusions(initialMatches, activeModule) {
  const activeMap = /* @__PURE__ */ new Map();
  for (const match of initialMatches) {
    activeMap.set(match.rule.id, match);
  }
  const exclusions = [];
  const warnings = [];
  const cyclicIds = findCyclicRuleIds(activeMap);
  if (cyclicIds.size > 0) {
    warnings.push("DEPENDENCY_CYCLE_DETECTED");
    for (const id of Array.from(cyclicIds).sort()) {
      activeMap.delete(id);
      exclusions.push({
        ruleId: id,
        reason: "DEPENDENCY_CYCLE",
        detail: `Rule "${id}" participates in a cyclic requiresRuleIds dependency graph`
      });
    }
  }
  const pruneUnsatisfiedDependencies = () => {
    let changed = true;
    while (changed) {
      changed = false;
      for (const id of Array.from(activeMap.keys()).sort()) {
        const match = activeMap.get(id);
        if (!match) continue;
        const reqs = match.rule.requiresRuleIds;
        if (!reqs || reqs.length === 0) continue;
        const missingDep = reqs.find((reqId) => !activeMap.has(reqId));
        if (missingDep) {
          activeMap.delete(id);
          exclusions.push({
            ruleId: id,
            reason: "MISSING_DEPENDENCY",
            detail: `Required prerequisite rule "${missingDep}" did not activate`
          });
          changed = true;
        }
      }
    }
  };
  pruneUnsatisfiedDependencies();
  const rankedActive = Array.from(activeMap.values()).sort(
    (a, b) => compareRuleMatches(a, b, activeModule).order
  );
  for (const match of rankedActive) {
    if (!activeMap.has(match.rule.id)) continue;
    const excludes = match.rule.excludesRuleIds;
    if (!excludes || excludes.length === 0) continue;
    for (const targetId of excludes) {
      if (targetId === match.rule.id) continue;
      if (activeMap.has(targetId)) {
        activeMap.delete(targetId);
        exclusions.push({
          ruleId: targetId,
          reason: "EXPLICIT_EXCLUSION",
          excludedByRuleId: match.rule.id,
          detail: `Explicitly excluded by higher-precedence rule "${match.rule.id}"`
        });
      }
    }
  }
  pruneUnsatisfiedDependencies();
  const survivors = Array.from(activeMap.values()).sort(
    (a, b) => compareRuleMatches(a, b, activeModule).order
  );
  return {
    survivors,
    exclusions,
    warnings
  };
}
function deriveOverallEvidenceStatus(matches) {
  if (matches.length === 0) return "PARTIALLY_SUPPORTED";
  const statuses = matches.map((m) => m.rule.evidenceStatus);
  if (statuses.every((s) => s === "VERIFIED_DATA")) return "VERIFIED_DATA";
  if (statuses.some((s) => s === "PARTIALLY_SUPPORTED")) return "PARTIALLY_SUPPORTED";
  return "RULE_SUPPORTED";
}
function deduplicateReferences(matches) {
  const map = /* @__PURE__ */ new Map();
  for (const m of matches) {
    for (const ref of m.rule.references) {
      if (ref.verified && !map.has(ref.id)) {
        map.set(ref.id, ref);
      }
    }
  }
  return Array.from(map.values());
}
class ReasoningEngine {
  normalizerRegistry;
  ruleRegistry;
  constructor(deps = {}) {
    this.normalizerRegistry = deps.normalizerRegistry ?? defaultNormalizerRegistry;
    this.ruleRegistry = deps.ruleRegistry ?? defaultRuleRegistry;
  }
  /**
   * Executes Layers 1 -> 2 -> 3 deterministically for any supported module payload.
   * Never hallucinates missing birth/calculation data; short-circuits cleanly on INSUFFICIENT_DATA.
   */
  async reason(module, rawPayload) {
    const context = this.normalizerRegistry.normalize(module, rawPayload);
    if (context.status === "INSUFFICIENT_DATA") {
      return {
        module,
        rulePackVersion: "unloaded",
        context,
        status: "INSUFFICIENT_DATA",
        matchedFacts: [],
        references: [],
        trace: {
          appliedRuleIds: [],
          excludedRuleIds: [],
          exclusionDetails: [],
          conflictResolutions: [],
          warnings: Array.from(/* @__PURE__ */ new Set(["INSUFFICIENT_DATA", ...context.warnings]))
        }
      };
    }
    const rulePack = await this.ruleRegistry.loadRulePack(module);
    const warnings = new Set(context.warnings);
    const exclusionDetails = [];
    const initialMatches = [];
    if (rulePack.rules.length === 0) {
      warnings.add("RULE_PACK_EMPTY");
    }
    for (const rule of rulePack.rules) {
      const matched = evaluateCondition(rule.when, context.facts);
      if (!matched) {
        exclusionDetails.push({
          ruleId: rule.id,
          reason: "CONDITION_NOT_MET"
        });
        continue;
      }
      const astSpecificity = computeConditionSpecificity(rule.when);
      const effectiveSpecificity = astSpecificity + (rule.specificityScore ?? 0);
      const highestAuthorityWeight = getHighestSourceAuthorityWeight(rule);
      const resolvedFact = resolveFactSlots(rule.produces, context.facts);
      initialMatches.push({
        rule,
        effectiveSpecificity,
        highestAuthorityWeight,
        resolvedFact
      });
    }
    const depOutcome = resolveDependenciesAndExclusions(initialMatches, module);
    exclusionDetails.push(...depOutcome.exclusions);
    for (const w of depOutcome.warnings) warnings.add(w);
    const conflictOutcome = resolveRuleConflicts(depOutcome.survivors, module);
    exclusionDetails.push(...conflictOutcome.exclusions);
    for (const w of conflictOutcome.warnings) warnings.add(w);
    const finalMatches = conflictOutcome.survivors;
    const appliedRuleIds = finalMatches.map((m) => m.rule.id);
    const excludedRuleIds = exclusionDetails.filter((e) => e.reason !== "CONDITION_NOT_MET").map((e) => e.ruleId);
    return {
      module,
      rulePackVersion: rulePack.metadata.version,
      context,
      status: deriveOverallEvidenceStatus(finalMatches),
      matchedFacts: finalMatches.map((m) => ({
        ruleId: m.rule.id,
        category: m.rule.category,
        evidenceStatus: m.rule.evidenceStatus,
        fact: m.resolvedFact,
        references: m.rule.references,
        effectiveSpecificity: m.effectiveSpecificity,
        priority: m.rule.priority
      })),
      references: deduplicateReferences(finalMatches),
      trace: {
        appliedRuleIds,
        excludedRuleIds,
        exclusionDetails,
        conflictResolutions: conflictOutcome.resolutions,
        warnings: Array.from(warnings)
      }
    };
  }
}
new ReasoningEngine();
function normalizeSentenceForFingerprint(sentence) {
  return sentence.toLowerCase().replace(/[।॥.,;:!?()[\]"'–—-]/g, " ").replace(/\s+/g, " ").trim();
}
function deduplicateRealizedItems(items) {
  const seenConcepts = /* @__PURE__ */ new Set();
  const seenSemanticFingerprints = /* @__PURE__ */ new Set();
  const seenSentenceHashes = /* @__PURE__ */ new Set();
  const kept = [];
  const deduplicatedConceptKeys = [];
  for (const item of items) {
    const cleanSentence = item.sentence.trim();
    if (!cleanSentence) continue;
    const sentenceHash = computeDeterministicHash(
      normalizeSentenceForFingerprint(cleanSentence)
    );
    const isDuplicateConcept = seenConcepts.has(item.conceptKey);
    const isDuplicateSemantic = seenSemanticFingerprints.has(item.semanticFingerprint);
    const isDuplicateSentence = seenSentenceHashes.has(sentenceHash);
    if (isDuplicateConcept || isDuplicateSemantic || isDuplicateSentence) {
      deduplicatedConceptKeys.push(item.conceptKey);
      continue;
    }
    seenConcepts.add(item.conceptKey);
    seenSemanticFingerprints.add(item.semanticFingerprint);
    seenSentenceHashes.add(sentenceHash);
    kept.push(item);
  }
  return {
    items: kept,
    deduplicatedConceptKeys
  };
}
function getInsufficientDataSummary(locale, missingFields) {
  const fieldsText = missingFields.length > 0 ? missingFields.join(", ") : "required inputs";
  const loc = locale.toLowerCase();
  if (loc.startsWith("en")) {
    return `Insufficient verified calculation data to generate interpretation (missing: ${fieldsText}).`;
  }
  if (loc.startsWith("sa")) {
    return `प्रमाणितगणनादत्तांशस्य अभावात् (${fieldsText}) फलादेशनिर्माणं न कृतम्।`;
  }
  return `सत्यापित गणना डेटा अपूर्ण होने (${fieldsText}) के कारण अनुमानित टेक्स्ट नहीं बनाया गया।`;
}
function deriveDomainPolarity(polarities) {
  const unique = new Set(polarities);
  if (unique.size === 1) return polarities[0];
  if (unique.has("MIXED") || unique.has("AUSPICIOUS") && unique.has("CAUTION")) {
    return "MIXED";
  }
  if (unique.has("CAUTION")) return "CAUTION";
  if (unique.has("AUSPICIOUS")) return "AUSPICIOUS";
  return "NEUTRAL";
}
function deriveDomainEvidenceStatus(statuses) {
  if (statuses.every((s) => s === "VERIFIED_DATA")) return "VERIFIED_DATA";
  if (statuses.some((s) => s === "PARTIALLY_SUPPORTED")) return "PARTIALLY_SUPPORTED";
  return "RULE_SUPPORTED";
}
class NlgEngine {
  localeRegistry;
  constructor(localeRegistry = defaultLocaleRegistry) {
    this.localeRegistry = localeRegistry;
  }
  realize(reasoning, options) {
    const { plugin, fallbackUsed } = this.localeRegistry.resolve(options.locale);
    if (reasoning.status === "INSUFFICIENT_DATA") {
      return {
        resolvedLocale: plugin.locale,
        fallbackLocaleUsed: fallbackUsed,
        summary: getInsufficientDataSummary(
          plugin.locale,
          reasoning.context.missingRequiredFields
        ),
        sections: [],
        deduplicatedConceptKeys: []
      };
    }
    const realizedItems = reasoning.matchedFacts.map(
      (entry) => {
        const realized = plugin.realizeFact(entry.fact, {
          mode: options.mode,
          audience: options.audience
        });
        return {
          ruleId: entry.ruleId,
          conceptKey: realized.conceptKey,
          domain: realized.domain,
          polarity: entry.fact.polarity,
          evidenceStatus: entry.evidenceStatus,
          sentence: realized.sentence,
          semanticFingerprint: realized.semanticFingerprint
        };
      }
    );
    const deduped = deduplicateRealizedItems(realizedItems);
    const domainBuckets = /* @__PURE__ */ new Map();
    for (const item of deduped.items) {
      const bucket = domainBuckets.get(item.domain) || [];
      bucket.push(item);
      domainBuckets.set(item.domain, bucket);
    }
    const sections = [];
    for (const [domain, items] of domainBuckets.entries()) {
      const sentences = items.map((i) => i.sentence);
      const body = plugin.joinParagraph(sentences, options.mode);
      if (!body) continue;
      sections.push({
        domain,
        heading: plugin.getDomainHeading(domain, options.audience),
        body,
        polarity: deriveDomainPolarity(items.map((i) => i.polarity)),
        evidenceStatus: deriveDomainEvidenceStatus(items.map((i) => i.evidenceStatus)),
        appliedRuleIds: items.map((i) => i.ruleId)
      });
    }
    const summarySentenceCount = options.mode === "SHORT" ? 1 : options.mode === "STANDARD" ? 2 : 3;
    const summarySentences = deduped.items.slice(0, summarySentenceCount).map((i) => i.sentence);
    const summary = plugin.joinParagraph(
      summarySentences,
      options.mode === "SHORT" ? "SHORT" : "STANDARD"
    );
    return {
      resolvedLocale: plugin.locale,
      fallbackLocaleUsed: fallbackUsed,
      summary,
      sections,
      deduplicatedConceptKeys: deduped.deduplicatedConceptKeys
    };
  }
}
function buildTextCacheKey(parts) {
  return [
    parts.module,
    parts.inputHash,
    parts.locale.toLowerCase(),
    parts.mode,
    parts.audience,
    parts.ruleVersion
  ].join("|");
}
class TextIntelligenceCache {
  store = /* @__PURE__ */ new Map();
  maxEntries;
  constructor(maxEntries = 300) {
    this.maxEntries = Math.max(10, maxEntries);
  }
  get(parts) {
    const key = buildTextCacheKey(parts);
    const existing = this.store.get(key);
    if (!existing) return void 0;
    this.store.delete(key);
    this.store.set(key, existing);
    return {
      ...existing,
      trace: {
        ...existing.trace,
        cacheHit: true
      }
    };
  }
  set(parts, value) {
    const key = buildTextCacheKey(parts);
    if (this.store.has(key)) {
      this.store.delete(key);
    } else if (this.store.size >= this.maxEntries) {
      const oldestKey = this.store.keys().next().value;
      if (oldestKey !== void 0) {
        this.store.delete(oldestKey);
      }
    }
    this.store.set(key, {
      ...value,
      trace: {
        ...value.trace,
        cacheHit: false
      }
    });
  }
  size() {
    return this.store.size;
  }
  clear() {
    this.store.clear();
  }
}
const defaultTextIntelligenceCache = new TextIntelligenceCache();
const PLACEHOLDER_REGEX = /\{[a-zA-Z0-9_.-]+\}|\$\{[^}]+\}/;
const LEAK_TOKEN_REGEX = /\b(?:undefined|null|NaN)\b/;
const DEVANAGARI_REGEX = /[\u0900-\u097F]/;
function inspectTextBlock(text, location, locale, issues) {
  if (PLACEHOLDER_REGEX.test(text)) {
    issues.push({
      code: "UNRESOLVED_PLACEHOLDER",
      location,
      detail: `Unresolved template placeholder detected in ${location}`
    });
  }
  if (LEAK_TOKEN_REGEX.test(text)) {
    issues.push({
      code: "INVALID_TOKEN_LEAK",
      location,
      detail: `Raw JS token (undefined/null/NaN) leaked in ${location}`
    });
  }
  if (locale.toLowerCase().startsWith("en") && DEVANAGARI_REGEX.test(text)) {
    issues.push({
      code: "DEVANAGARI_IN_EN_LOCALE",
      location,
      detail: `Untranslated Devanagari text found in en-IN output at ${location}`
    });
  }
}
function validateGeneratedTextResult(result) {
  const issues = [];
  if (!result.summary || result.summary.trim().length === 0) {
    issues.push({
      code: "EMPTY_SUMMARY",
      location: "summary",
      detail: "Generated summary must not be empty"
    });
  } else {
    inspectTextBlock(result.summary, "summary", result.locale, issues);
  }
  for (const section of result.sections) {
    if (!section.body || section.body.trim().length === 0) {
      issues.push({
        code: "EMPTY_SECTION_BODY",
        location: `sections.${section.domain}`,
        detail: `Section "${section.domain}" has an empty body`
      });
      continue;
    }
    inspectTextBlock(
      section.heading,
      `sections.${section.domain}.heading`,
      result.locale,
      issues
    );
    inspectTextBlock(
      section.body,
      `sections.${section.domain}.body`,
      result.locale,
      issues
    );
  }
  for (const ref of result.references) {
    if (!ref.verified || !ref.sourceName || ref.sourceName.trim().length === 0) {
      issues.push({
        code: "UNVERIFIED_REFERENCE",
        location: `references.${ref.id}`,
        detail: `Unverified or empty reference "${ref.id}" is forbidden`
      });
    }
  }
  return {
    valid: issues.length === 0,
    issues
  };
}
class TextIntelligenceEngine {
  normalizerRegistry;
  ruleRegistry;
  reasoningEngine;
  nlgEngine;
  cache;
  constructor(deps = {}) {
    this.normalizerRegistry = deps.normalizerRegistry ?? defaultNormalizerRegistry;
    this.ruleRegistry = deps.ruleRegistry ?? defaultRuleRegistry;
    this.reasoningEngine = new ReasoningEngine({
      normalizerRegistry: this.normalizerRegistry,
      ruleRegistry: this.ruleRegistry
    });
    this.nlgEngine = new NlgEngine(deps.localeRegistry ?? defaultLocaleRegistry);
    this.cache = deps.cache ?? defaultTextIntelligenceCache;
  }
  /**
   * End-to-end deterministic text generation across all 5 layers.
   */
  async generateText(module, rawPayload, options = {}) {
    const locale = options.locale ?? "hi-IN";
    const mode = options.mode ?? "STANDARD";
    const audience = options.audience ?? "GENERAL";
    const preContext = this.normalizerRegistry.normalize(module, rawPayload);
    const loadedPack = preContext.status === "READY" ? await this.ruleRegistry.loadRulePack(module) : void 0;
    const ruleVersion = loadedPack?.metadata.version ?? "unloaded";
    const cacheKeyParts = {
      module,
      inputHash: preContext.inputHash,
      locale,
      mode,
      audience,
      ruleVersion
    };
    if (!options.bypassCache) {
      const cached = this.cache.get(cacheKeyParts);
      if (cached) return cached;
    }
    const reasoning = await this.reasoningEngine.reason(module, rawPayload);
    const draft = this.nlgEngine.realize(reasoning, {
      locale,
      mode,
      audience
    });
    const warnings = new Set(reasoning.trace.warnings);
    if (draft.fallbackLocaleUsed) {
      warnings.add("FALLBACK_USED");
    }
    const result = {
      module,
      locale: draft.resolvedLocale,
      mode,
      audience,
      rulePackVersion: reasoning.rulePackVersion,
      status: reasoning.status,
      summary: draft.summary,
      sections: draft.sections,
      references: reasoning.references,
      trace: {
        appliedRuleIds: reasoning.trace.appliedRuleIds,
        excludedRuleIds: reasoning.trace.excludedRuleIds,
        deduplicatedConceptKeys: draft.deduplicatedConceptKeys,
        warnings: Array.from(warnings),
        cacheHit: false
      }
    };
    const validation = validateGeneratedTextResult(result);
    if (!validation.valid) {
      throw new Error(
        `TextIntelligenceEngine quality gate failed for ${module} (${draft.resolvedLocale}): ${validation.issues.map((i) => `${i.code}@${i.location}`).join(", ")}`
      );
    }
    if (!options.bypassCache) {
      this.cache.set(cacheKeyParts, result);
    }
    return result;
  }
  clearCache() {
    this.cache.clear();
  }
}
const defaultTextIntelligenceEngine = new TextIntelligenceEngine();
function buildPanchangShastricSummaryForShare(dayPanchang) {
  const hiPoints = [];
  const enPoints = [];
  const refsHi = /* @__PURE__ */ new Set(["मुहूर्त चिंतामणि", "धर्मसिंधु"]);
  const refsEn = /* @__PURE__ */ new Set(["Muhurta Chintamani", "Dharmasindhu"]);
  const traditionTag = dayPanchang.tradition === "AMANTA" ? "अमांत" : "पूर्णिमांत";
  hiPoints.push(
    `${dayPanchang.hinduMaas} (${traditionTag} मान) की उदयातिथि ${dayPanchang.tithiName} व ${dayPanchang.nakshatra} प्रभावी हैं।`
  );
  enPoints.push(
    `Sunrise-anchored ${dayPanchang.tithiName} and ${dayPanchang.nakshatra} prevail under the ${dayPanchang.tradition === "AMANTA" ? "Amanta" : "Purnimanta"} lunar calendar.`
  );
  if (dayPanchang.sarvarthaSiddhiYoga) {
    const sarvKv = dayPanchang.kalVedhaReport?.sarvarthaSiddhi;
    const sunsetSec = dayPanchang.dailyPanchang?.sunsetTimestamp ? Math.round(dayPanchang.dailyPanchang.sunsetTimestamp / 1e3) : null;
    const isSarvarthaNightOnly = Boolean(
      sarvKv && sunsetSec !== null && sarvKv.originalStartSec >= sunsetSec - 60 || /^(?:शुद्ध अवधि:\s*)?रात्रि\s+/u.test(dayPanchang.sarvarthaSiddhiYoga.trim()) && !/प्रातः|दोपहर|अपराह्न/u.test(dayPanchang.sarvarthaSiddhiYoga.split("(")[0])
    );
    if (isSarvarthaNightOnly) {
      hiPoints.push(
        "सर्वार्थ सिद्धि योग केवल रात्रि काल में प्रभावी होने से रात्रिकालीन मंत्र-जप, साधना व संकल्प हेतु अनुकूल है (दिन के सामान्य कार्यों हेतु शुभ चौघड़िया देखें)।"
      );
      enPoints.push(
        "Sarvartha Siddhi Yoga activates at night only, making it suited for evening/night meditation and prayers."
      );
    } else if (dayPanchang.gandmoolNakshatra) {
      hiPoints.push(
        "सर्वार्थ सिद्धि योग होने से संकल्प, अध्ययन व दैनिक शुभ एवं धर्म-कर्म कार्यों हेतु दिन अनुकूल है (गण्डमूल नक्षत्र के कारण नया वाहन/प्रॉपर्टी क्रय टालें)।"
      );
      enPoints.push(
        "Sarvartha Siddhi Yoga supports study, vows, and daily spiritual routines (avoid new vehicle/property purchases due to Gandmool)."
      );
    } else {
      hiPoints.push("सर्वार्थ सिद्धि योग होने से संकल्प, अध्ययन, निवेश व नए शुभ प्रारंभ हेतु दिन अत्यंत फलदायी है।");
      enPoints.push("Sarvartha Siddhi Yoga strongly favors new beginnings, agreements, and spiritual vows.");
    }
  } else if (dayPanchang.amritSiddhiYoga) {
    hiPoints.push("अमृत सिद्धि योग के प्रभाव से शुभ कर्मों व दीर्घकालिक निर्णयों में स्थायित्व प्राप्त होता है।");
    enPoints.push("Amrit Siddhi Yoga supports durable progress and auspicious initiatives.");
  }
  if (dayPanchang.isAmavasya) {
    refsHi.add("निर्णयसिंधु");
    refsEn.add("Nirnayasindhu");
    hiPoints.push(
      "अमावस्या तिथि होने से आज पितृ-तर्पण, पवित्र स्नान, अन्न-वस्त्र दान तथा मौन साधना विशेष पुण्यदायी है (मांगलिक शुभ आरंभ टालें)।"
    );
    enPoints.push(
      "Amavasya is classically dedicated to Pitru-Tarpan, sacred bathing, charity, and quiet spiritual reflection."
    );
  } else if (dayPanchang.isEkadashi) {
    refsHi.add("निर्णयसिंधु");
    refsEn.add("Nirnayasindhu");
    hiPoints.push("एकादशी व्रत-संयम, श्री विष्णु सहस्रनाम पाठ व सात्त्विक आहार हेतु श्रेष्ठ दिवस है।");
    enPoints.push("Ekadashi is auspicious for fasting, Vishnu contemplation, and sattvic discipline.");
  } else if (dayPanchang.isPradosh) {
    hiPoints.push("प्रदोष काल में भगवान शिव का अभिषेक व दीपदान विशेष कल्याणकारी माना गया है।");
    enPoints.push("Evening Pradosh worship of Lord Shiva brings peace and auspicious grace.");
  }
  const conflict = dayPanchang.abhijitConflict;
  const fullAbhijitWindow = dayPanchang.abhijitFullWindow || conflict?.fullWindowHi || dayPanchang.abhijitMuhurat;
  if (conflict?.isWednesdayProhibited) {
    hiPoints.push("बुधवार को अभिजित मुहूर्त शास्त्रोक्त वर्जित/त्याज्य होने के कारण मान्य नहीं है—दैनिक शुभ व धर्म-कर्म कार्य शुभ चौघड़िया एवं अमृत काल में करें।");
    enPoints.push("Abhijit Muhurat is classically avoided on Wednesdays; prefer Shubh/Amrit Choghadiya for daily auspicious tasks.");
  } else if (conflict?.hasOverlap) {
    const hardCols = conflict.collidingKaalsHi.filter(
      (k) => /राहुकाल|यमगण्ड|दुर्मुहूर्त/u.test(k)
    );
    const hasHardOverlap = hardCols.length > 0;
    const hasGandmoolOverlap = conflict.collidingKaalsHi.some((k) => /गण्डमूल/u.test(k));
    if (conflict.isFullyPolluted && hasHardOverlap) {
      hiPoints.push(
        `अभिजित मुहूर्त (${fullAbhijitWindow}) का शास्त्रीय मान है। विशेष नोट: इस अवधि में ${hardCols.join("/")} व्याप्त होने से शुभ कार्यों हेतु राहुकाल-मुक्त शुभ चौघड़िया चुनें।`
      );
      enPoints.push(
        `Classical Abhijit Muhurat is ${fullAbhijitWindow}. Special Note: overlapped by ${hardCols.join("/")}; prefer Rahu-free Shubh Choghadiya.`
      );
    } else if (hasHardOverlap) {
      const overlapPart = conflict.overlapWindowHi ? `${conflict.overlapWindowHi} भाग में ` : "";
      const pureNote = conflict.pureRemainingWindowHi ? ` (${conflict.pureRemainingWindowHi} अंश मुक्त)` : "";
      hiPoints.push(
        `अभिजित मुहूर्त (${fullAbhijitWindow}) एवं शुभ चौघड़िया दैनिक शुभ व धर्म-कर्म कार्यों हेतु मान्य हैं। विशेष नोट: ${overlapPart}${hardCols.join("/")} का आंशिक टकराव होने से टकराव अंश छोड़कर कार्य करें${pureNote}।`
      );
      enPoints.push(
        `Classical Abhijit Muhurat (${fullAbhijitWindow}) is active. Special Note: partial ${hardCols.join("/")} overlap applies; avoid the overlapping portion.`
      );
    } else if (hasGandmoolOverlap) {
      hiPoints.push(
        `अभिजित मुहूर्त (${fullAbhijitWindow}) प्रभावी है। विशेष नोट: गण्डमूल प्रभावी होने से बड़े मांगलिक कार्य टालकर जप-ध्यान व नियमित कार्य करें।`
      );
      enPoints.push(
        `Abhijit Muhurat (${fullAbhijitWindow}) is active. Special Note: under Gandmool, prefer japa/meditation over major ceremonies.`
      );
    } else if (fullAbhijitWindow) {
      hiPoints.push(
        `राहुकाल व यमगण्ड को छोड़कर अभिजित मुहूर्त (${fullAbhijitWindow}) एवं शुभ चौघड़िया दैनिक शुभ व धर्म-कर्म कार्यों हेतु श्रेष्ठ हैं।`
      );
      enPoints.push(
        `Classical Abhijit Muhurat (${fullAbhijitWindow}) and Shubh Choghadiya are ideal for important tasks.`
      );
    }
  } else if (fullAbhijitWindow) {
    hiPoints.push(
      `राहुकाल व यमगण्ड को छोड़कर अभिजित मुहूर्त (${fullAbhijitWindow}) एवं शुभ चौघड़िया दैनिक शुभ व धर्म-कर्म कार्यों हेतु श्रेष्ठ हैं।`
    );
    enPoints.push(
      `Classical Abhijit Muhurat (${fullAbhijitWindow}) and Shubh Choghadiya are ideal for important tasks.`
    );
  }
  if (dayPanchang.bhadraKaal) {
    hiPoints.push("भद्रा काल में विवाहादि मांगलिक व नए आरंभ टालकर नित्य पूजन-जप करना श्रेयस्कर है।");
    enPoints.push("Avoid auspicious inaugurations during active Bhadra; regular devotion remains favorable.");
  } else if (dayPanchang.isPanchak) {
    const panchakHitsPureAbhijit = Boolean(
      dayPanchang.kalVedhaReport?.abhijit?.collidingNamesHi?.includes("पंचक")
    );
    if (!panchakHitsPureAbhijit && dayPanchang.panchakEndDateTimeHi) {
      hiPoints.push(
        `पंचक (${dayPanchang.panchakEndDateTimeHi} तक) की अवधि में दक्षिण यात्रा व छत-निर्माण टालें; इसके उपरांत शुभ अवधि पंचक-मुक्त रहेगी।`
      );
    } else {
      hiPoints.push("पंचक प्रभावी होने से दक्षिण दिशा यात्रा, छत डालना व काष्ठ-संग्रह जैसे कार्य टालना उचित है।");
    }
    enPoints.push("With Panchak active, avoid southward travel, roofing, and wood-gathering tasks.");
  }
  if (dayPanchang.shivavaas?.isAuspicious) {
    const cleanVaasHi = dayPanchang.shivavaas.vaasNameHi.replace(/\s*\([^)]*\)\s*/g, "").trim() || dayPanchang.shivavaas.vaasNameHi;
    const formulaTag = dayPanchang.shivavaas.formulaHi ? `${dayPanchang.shivavaas.formulaHi} → ` : "";
    hiPoints.push(`रुद्राभिषेक हेतु शिववास (${formulaTag}${cleanVaasHi}) अनुकूल है।`);
    enPoints.push(`Shivavaas (${cleanVaasHi} per Tithi calculation) is favorable for Rudrabhishek.`);
  }
  const refListHi = Array.from(refsHi).join(" • ");
  const refListEn = Array.from(refsEn).join(" • ");
  const selectedHi = hiPoints.slice(0, 3);
  const selectedEn = enPoints.slice(0, 3);
  return {
    titleHi: `शास्त्रीय पंचांग विवेचन (${refListHi})`,
    titleEn: `Shastric Panchang Guidance (${refListEn})`,
    textHi: selectedHi.join(" "),
    textEn: selectedEn.join(" "),
    cardInsightHi: selectedHi.slice(0, 2).join(" "),
    cardInsightEn: selectedEn.slice(0, 2).join(" "),
    referencesHi: refListHi,
    referencesEn: refListEn
  };
}
function splitIntoSentences(text) {
  if (!text || typeof text !== "string") return [];
  const normalized = text.replace(/\s+/g, " ").trim();
  if (!normalized) return [];
  const parts = [];
  let current = "";
  for (let i = 0; i < normalized.length; i += 1) {
    const ch = normalized[i];
    current += ch;
    if (ch === "।" || ch === "॥" || ch === "!" || ch === "?") {
      const trimmed = current.trim();
      if (trimmed) parts.push(trimmed);
      current = "";
    } else if (ch === "." && (i === normalized.length - 1 || normalized[i + 1] === " ") && !/\d$/.test(current.slice(0, -1))) {
      const trimmed = current.trim();
      if (trimmed) parts.push(trimmed);
      current = "";
    }
  }
  if (current.trim()) {
    parts.push(current.trim());
  }
  return parts;
}
function stripDuplicateLeadLabels(text) {
  let out = text.trim();
  out = out.replace(
    /^(आज का[^:।]{0,30}उपाय\s*:\s*)+(?=आज का[^:।]{0,30}उपाय\s*:)/u,
    ""
  );
  out = out.replace(
    /^(इस सप्ताह का[^:।]{0,30}उपाय\s*:\s*)+(?=इस सप्ताह का[^:।]{0,30}उपाय\s*:)/u,
    ""
  );
  out = out.replace(
    /^(इस माह का[^:।]{0,30}उपाय\s*:\s*)+(?=इस माह का[^:।]{0,30}उपाय\s*:)/u,
    ""
  );
  out = out.replace(
    /^(स्वास्थ्य\s*:\s*){2,}/u,
    "स्वास्थ्य: "
  );
  out = out.replace(
    /^(करियर(?: व कार्य)?\s*:\s*){2,}/u,
    "करियर व कार्य: "
  );
  return out;
}
const STRICT_BANNED_RASHIFAL_PHRASES = [
  "शनिवार के कर्म-संतुलन हेतु संध्या दीप व असहाय-सेवा जोड़ें",
  "शनि-अनुकूलता हेतु धैर्य, अनुशासन व श्रमजीवियों का सम्मान बनाए रखें",
  "चंद्र-शांति हेतु रात्रि में व्यर्थ चिंता छोड़ शांत ध्यान करें"
];
function stripBannedRashifalPhrases(text) {
  if (!text || typeof text !== "string") return "";
  let out = text;
  for (const banned of STRICT_BANNED_RASHIFAL_PHRASES) {
    if (out.includes(banned)) {
      const escaped = banned.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      out = out.replace(new RegExp(`\\s*[;।,]?\\s*${escaped}[।.]?`, "gu"), "");
    }
  }
  return out.replace(/\s+/g, " ").replace(/\s+([।॥.,;:])/g, "$1").replace(/^[;,:।.\s]+/, "").trim();
}
function cleanIntraSentenceHindiRepetitions(sentence) {
  let out = stripBannedRashifalPhrases(stripDuplicateLeadLabels(sentence));
  out = out.replace(
    /([\u0900-\u097F]+(?:\s*\([^)]*\))?)\s+व\s+([\u0900-\u097F]+(?:\s*\([^)]*\))?)\s+व\s+([\u0900-\u097F]+(?:\s*\([^)]*\))?)/gu,
    "$1, $2 व $3"
  );
  if ((out.match(/से बचाव हेतु/gu) || []).length >= 2) {
    out = out.replace(
      /थकान या मानसिक असहजता से बचाव हेतु ऊर्जा संतुलन व सिरदर्द\/थकान से बचाव हेतु/gu,
      "थकान, सिरदर्द व मानसिक असहजता से बचाव हेतु ऊर्जा संतुलन बनाए रखें तथा"
    );
    let seenCount = 0;
    out = out.replace(/से बचाव हेतु/gu, (match) => {
      seenCount += 1;
      return seenCount === 1 ? match : "के संतुलन के लिए";
    });
  }
  if ((out.match(/थकान/gu) || []).length >= 2) {
    out = out.replace(/सिरदर्द\/थकान/gu, "सिरदर्द");
  }
  if ((out.match(/दान करें/gu) || []).length >= 2) {
    out = out.replace(
      /का यथाशक्ति दान करें\s*;\s*([^।]+?)\s+का दान करें/gu,
      "तथा $1 का यथाशक्ति दान करें"
    );
    out = out.replace(
      /दान करें\s*;\s*([^।]+?)\s+का दान करें/gu,
      "दान करें तथा $1 अर्पित करें"
    );
    out = out.replace(
      /दान करें\s*;\s*([^।]+?)दीप-दान करें/gu,
      "दान करें तथा $1दीप प्रज्वलित करें"
    );
    if ((out.match(/दान करें/gu) || []).length >= 2) {
      let danSeen = 0;
      out = out.replace(/([-–]?)दान करें/gu, (m, hyphen) => {
        danSeen += 1;
        if (danSeen === 1) return m;
        return hyphen ? " अर्पित करें" : "भेंट करें";
      });
    }
  }
  if ((out.match(/नई पहल/gu) || []).length >= 2) {
    let seen = 0;
    out = out.replace(/नई पहल/gu, (m) => {
      seen += 1;
      return seen === 1 ? m : "प्रमुख योजनाएँ";
    });
  }
  out = out.replace(/\b([\u0900-\u097F]{2,}|[a-zA-Z]{2,})\s+\1\b/gu, "$1");
  out = out.replace(/\s+/g, " ").replace(/\s+([।॥.,;:])/g, "$1").replace(/।{2,}/g, "।").trim();
  return out;
}
function deduplicateAndPolishProse(rawText, externalSeenFingerprints) {
  const seen = externalSeenFingerprints ?? /* @__PURE__ */ new Set();
  const sentences = splitIntoSentences(stripDuplicateLeadLabels(rawText));
  const kept = [];
  let removedDuplicates = 0;
  for (const rawSentence of sentences) {
    const cleaned = cleanIntraSentenceHindiRepetitions(rawSentence);
    if (!cleaned) continue;
    const stem = normalizeSentenceForFingerprint(cleaned);
    if (!stem) continue;
    const fp = computeDeterministicHash(stem);
    if (seen.has(fp)) {
      removedDuplicates += 1;
      continue;
    }
    seen.add(fp);
    kept.push(cleaned);
  }
  return {
    text: kept.join(" ").trim(),
    removedDuplicates
  };
}
function stripAnyRemedyLeadPrefix(text) {
  if (!text || typeof text !== "string") return "";
  let out = stripDuplicateLeadLabels(text.trim());
  let prev = "";
  while (out !== prev) {
    prev = out;
    out = out.replace(
      /^(?:(?:इस\s+)?(?:आज|सप्ताह|मास|माह)\s+का[^:।]{0,36}उपाय|विशेष\s+उपाय|सात्त्विक\s+उपाय|सरल\s+उपाय|Today's\s+Remedy|Weekly\s+Remedy|Monthly\s+Remedy)\s*[:：-]\s*/iu,
      ""
    ).trim();
  }
  return cleanIntraSentenceHindiRepetitions(out);
}
function keepUpToSentences(text, maxSentences = 2) {
  if (!text || typeof text !== "string") return "";
  const sentences = splitIntoSentences(cleanIntraSentenceHindiRepetitions(text));
  if (sentences.length === 0) return text.trim();
  return sentences.slice(0, Math.max(1, maxSentences)).join(" ").trim();
}
const HINDI_STOP_WORDS = /* @__PURE__ */ new Set([
  "और",
  "तथा",
  "एवं",
  "व",
  "या",
  "के",
  "की",
  "का",
  "को",
  "में",
  "पर",
  "से",
  "है",
  "हैं",
  "होंगे",
  "रहेगा",
  "रहेगी",
  "रखें",
  "करें",
  "बन",
  "बनी",
  "बने",
  "आज",
  "इस",
  "सप्ताह",
  "माह",
  "पूरे",
  "हेतु",
  "लिए",
  "साथ",
  "अति",
  "अत्यंत",
  "विशेष",
  "उत्तम",
  "श्रेष्ठ",
  "लाभकारी",
  "हितकारी",
  "अनुकूल",
  "आपके",
  "अपनी",
  "अपने",
  "भी",
  "ही",
  "न",
  "तब",
  "जब",
  "तो",
  "तथापि"
]);
const HINDI_CONCEPT_CLUSTERS = [
  ["आहार", "भोजन", "पाचन", "खान-पान", "उदर", "सुपाच्य", "सात्त्विक"],
  ["नींद", "निद्रा", "विश्राम", "सोकर", "आराम"],
  ["जल", "पानी", "शीतल", "गुनगुना"],
  ["व्यायाम", "योग", "प्राणायाम", "भ्रमण", "टहलना", "टहलें", "सैर", "स्ट्रेचिंग", "आसन", "चहलकदमी"],
  ["ध्यान", "साधना", "मौन", "संगीत"],
  ["कमर", "घुटनों", "जोड़ों", "हड्डियों", "अस्थियों", "पिंडलियों", "पैरों", "कंठ", "गले", "गर्दन", "हृदय", "नेत्र", "आँखों", "स्क्रीन"],
  ["बचत", "निवेश", "बजट", "कोष", "पूँजी", "आय", "व्यय", "खर्च"],
  ["संवाद", "परिवार", "परिजन", "कुटुम्ब", "जीवनसाथी", "दांपत्य", "गृहस्थ"]
];
function extractHindiContentTokens(text) {
  const cleaned = text.toLowerCase().replace(/[^\u0900-\u097Fa-z0-9\s-]/gi, " ").split(/\s+/).map((w) => w.trim()).filter((w) => w.length >= 2 && !HINDI_STOP_WORDS.has(w));
  return new Set(cleaned);
}
function extractActiveConceptClusters(text) {
  const clusters = /* @__PURE__ */ new Set();
  HINDI_CONCEPT_CLUSTERS.forEach((keywords, idx) => {
    if (keywords.some((kw) => text.includes(kw))) {
      clusters.add(idx);
    }
  });
  return clusters;
}
function hasSemanticConceptOverlap(existingText, candidateText, tokenOverlapThreshold = 0.34) {
  if (!existingText || !candidateText) return false;
  const existingClusters = extractActiveConceptClusters(existingText);
  const candidateClusters = extractActiveConceptClusters(candidateText);
  let sharedClusters = 0;
  candidateClusters.forEach((c) => {
    if (existingClusters.has(c)) sharedClusters += 1;
  });
  if (sharedClusters >= 2) return true;
  if (candidateClusters.size === 1 && sharedClusters === 1) return true;
  const existingTokens = extractHindiContentTokens(existingText);
  const candidateTokens = extractHindiContentTokens(candidateText);
  if (candidateTokens.size === 0) return false;
  let sharedTokens = 0;
  candidateTokens.forEach((t) => {
    if (existingTokens.has(t)) sharedTokens += 1;
  });
  return sharedTokens / candidateTokens.size >= tokenOverlapThreshold;
}
function extractConcludingClauseFingerprint(text) {
  const sentences = splitIntoSentences(cleanIntraSentenceHindiRepetitions(text));
  if (sentences.length === 0) return { full: "", tail: "" };
  const last = sentences[sentences.length - 1];
  const full = normalizeSentenceForFingerprint(last);
  const clauseMatch = last.match(/(?:जिससे|का संकेत है कि|होने से|;)\s*([^।॥.!]+)[।॥.!]?$/u);
  const tail = clauseMatch?.[1] ? normalizeSentenceForFingerprint(clauseMatch[1]) : full;
  return { full, tail };
}
function haveSameConcludingClause(textA, textB) {
  if (!textA || !textB) return false;
  const a = extractConcludingClauseFingerprint(textA);
  const b = extractConcludingClauseFingerprint(textB);
  if (!a.full || !b.full) return false;
  if (a.full === b.full) return true;
  if (a.tail.length >= 20 && b.tail.length >= 20 && a.tail === b.tail) return true;
  return false;
}
function formatEnAshtamanshaPart(part) {
  const map = {
    1: "1st Part",
    2: "2nd Part",
    3: "3rd Part",
    4: "4th Part",
    5: "5th Part",
    6: "6th Part",
    7: "7th Part",
    8: "8th Part"
  };
  return map[part] || `${part}th Part`;
}
function localizeSocialPostLines(lines, language, mode = "daily", preserveLeadingBullets = false) {
  const joined = mode === "daily" ? sanitizeVedicHindiText(lines.join("\n"), preserveLeadingBullets) : sanitizeWeeklyMonthlyHindiText(lines.join("\n"), mode);
  if (language === "hi") return joined;
  return joined.split("\n").map((line) => {
    if (!line.trim()) return "";
    if (/^\s*👉?\s*https?:\/\//i.test(line) || /^\s*#[A-Za-z0-9_]+/.test(line)) {
      return line;
    }
    return translateVedicHindiToEnglish(line, language);
  }).join("\n");
}
function toEn(val) {
  if (!val) return "";
  return translateVedicHindiToEnglish(sanitizeVedicHindiText(val), "en");
}
const VAAR_NAMES_HI = [
  "रविवार",
  "सोमवार",
  "मंगलवार",
  "बुधवार",
  "गुरुवार",
  "शुक्रवार",
  "शनिवार"
];
const GANDMOOL_NAKSHATRA_NAMES_HI = [
  "अश्विनी",
  "अश्लेषा",
  "आश्लेषा",
  "मघा",
  "ज्येष्ठा",
  "मूल",
  "रेवती"
];
function getHindiDayPeriodForHour(hour24) {
  if (hour24 >= 4 && hour24 < 12) return "प्रातः";
  if (hour24 >= 12 && hour24 < 16) return "दोपहर";
  if (hour24 >= 16 && hour24 < 19) return "शाम";
  if (hour24 >= 19) return "रात्रि";
  if (hour24 === 0) return "मध्यरात्रि";
  return "रात्रि";
}
function parse12HourClockToMinutes(clock) {
  const m = clock.match(/(\d{1,2}):(\d{2})(?::(\d{2}))?\s*(AM|PM)/i);
  if (!m) return -1;
  let h = parseInt(m[1], 10);
  const min = parseInt(m[2], 10);
  const mer = m[4].toUpperCase();
  if (mer === "AM" && h === 12) h = 0;
  if (mer === "PM" && h !== 12) h += 12;
  return h * 60 + min;
}
function formatDynamicPanchakHi(dayPanchang) {
  const raw = (dayPanchang.panchakKaal || "").trim();
  if (!raw || raw.includes("नहीं")) return raw;
  if (dayPanchang.panchakProhibitionsHi && raw.includes("वर्जित")) {
    return raw;
  }
  const panchakLabelMatch = raw.match(/^([^(]+)/u);
  const panchakLabel = (panchakLabelMatch?.[1] || "पंचक काल").trim();
  const startVaarFromText = raw.match(
    /(रविवार|सोमवार|मंगलवार|बुधवार|गुरुवार|शुक्रवार|शनिवार)\s*(?:को\s*)?प्रारंभ/u
  )?.[1];
  const startVaar = (dayPanchang.panchakStartVaarHi || startVaarFromText || dayPanchang.vaarHindi || "").trim();
  const todayVaarClean = (dayPanchang.vaarHindi || "").trim();
  let todayVaarIdx = VAAR_NAMES_HI.findIndex((v) => todayVaarClean.includes(v));
  if (todayVaarIdx < 0 && dayPanchang.dateKey) {
    const [yy, mm, dd] = dayPanchang.dateKey.split("-").map(Number);
    if (yy && mm && dd) {
      todayVaarIdx = new Date(Date.UTC(yy, mm - 1, dd)).getUTCDay();
    }
  }
  const directEndMatch = raw.match(
    /\(\s*([^()]+?)\s+तक\s*[—-].*?मेष\s+राशि\s+में\s+पंचक\s+समाप्त/u
  );
  if (directEndMatch) {
    const rawEndSegment = directEndMatch[1].trim();
    const isNextDay = /अगले\s+दिन/u.test(rawEndSegment);
    const cleanedTime = rawEndSegment.replace(/^अगले\s+दिन\s+/u, "").trim();
    const clockMatch = cleanedTime.match(/(\d{1,2}:\d{2}(?::\d{2})?\s*(?:AM|PM))/i);
    let endTimeWithPeriod = cleanedTime;
    if (clockMatch && !/^(प्रातः|दोपहर|शाम|सायंकाल|रात्रि|मध्यरात्रि)/u.test(cleanedTime)) {
      const mins = parse12HourClockToMinutes(clockMatch[1]);
      const period = mins >= 0 ? getHindiDayPeriodForHour(Math.floor(mins / 60)) : "प्रातः";
      endTimeWithPeriod = `${period} ${clockMatch[1].toUpperCase()}`;
    }
    const endVaar = todayVaarIdx >= 0 ? VAAR_NAMES_HI[(todayVaarIdx + (isNextDay ? 1 : 0)) % 7] : "";
    if (startVaar && endVaar && endTimeWithPeriod) {
      return `${panchakLabel} (${startVaar} को प्रारंभ — ${endVaar}, ${endTimeWithPeriod} पर मेष राशि में समाप्त)`;
    }
  }
  if (dayPanchang.dateKey) {
    const [yy, mm, dd] = dayPanchang.dateKey.split("-").map(Number);
    if (yy && mm && dd) {
      const tz = dayPanchang.dailyPanchang?.location?.timezone || "Asia/Kolkata";
      const baseMs = Date.UTC(yy, mm - 1, dd, 0, 0, 0);
      const getLonAt = (ms) => {
        const dt = new Date(ms);
        const jd = getJulianDay(
          dt.getUTCFullYear(),
          dt.getUTCMonth() + 1,
          dt.getUTCDate(),
          dt.getUTCHours(),
          dt.getUTCMinutes(),
          dt.getUTCSeconds()
        );
        return getSiderealMoonLongitude(jd);
      };
      const stepMs = 2 * 3600 * 1e3;
      let loMs = -1;
      let hiMs = -1;
      let prevLon = getLonAt(baseMs);
      for (let i = 1; i <= 84; i++) {
        const curMs = baseMs + i * stepMs;
        const curLon = getLonAt(curMs);
        if (prevLon >= 300 && curLon < 60) {
          loMs = curMs - stepMs;
          hiMs = curMs;
          break;
        }
        prevLon = curLon;
      }
      if (loMs > 0 && hiMs > loMs) {
        for (let iter = 0; iter < 24; iter++) {
          const midMs = (loMs + hiMs) / 2;
          const midLon = getLonAt(midMs);
          if (midLon >= 300) {
            loMs = midMs;
          } else {
            hiMs = midMs;
          }
        }
        const endDate = new Date(Math.round(hiMs / 1e3) * 1e3);
        const parts = new Intl.DateTimeFormat("en-US", {
          timeZone: tz,
          weekday: "short",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false
        }).formatToParts(endDate);
        const wkShort = parts.find((p) => p.type === "weekday")?.value || "";
        const hrRaw = parseInt(parts.find((p) => p.type === "hour")?.value || "0", 10) % 24;
        const minStr = (parts.find((p) => p.type === "minute")?.value || "00").padStart(2, "0");
        const secStr = (parts.find((p) => p.type === "second")?.value || "00").padStart(2, "0");
        const wkMap = {
          Sun: "रविवार",
          Mon: "सोमवार",
          Tue: "मंगलवार",
          Wed: "बुधवार",
          Thu: "गुरुवार",
          Fri: "शुक्रवार",
          Sat: "शनिवार"
        };
        const endVaar = wkMap[wkShort] || "";
        const mer = hrRaw >= 12 ? "PM" : "AM";
        const hr12 = String(hrRaw % 12 === 0 ? 12 : hrRaw % 12).padStart(2, "0");
        const period = getHindiDayPeriodForHour(hrRaw);
        const endTimeWithPeriod = `${period} ${hr12}:${minStr}:${secStr} ${mer}`;
        if (startVaar && endVaar) {
          return `${panchakLabel} (${startVaar} को प्रारंभ — ${endVaar}, ${endTimeWithPeriod} पर मेष राशि में समाप्त)`;
        }
      }
    }
  }
  return raw;
}
function tagGandmoolNakshatrasHi(text) {
  if (!text) return text;
  const gmAlt = GANDMOOL_NAKSHATRA_NAMES_HI.join("|");
  let out = text.replace(/गंडमूल\s+नक्षत्र/gu, "गण्डमूल नक्षत्र").replace(/ग(?:ण्ड|ंड)मूल\s+संज्ञक\s+नक्षत्र/gu, "गण्डमूल नक्षत्र");
  out = out.replace(
    new RegExp(
      `\\(([^()]*?(?:${gmAlt})[^()]*?)\\s*\\(\\s*ग(?:ण्ड|ंड)मूल[^)]*\\)\\s*([^()]*)\\)`,
      "gu"
    ),
    (_m, before, after) => {
      const cleanBefore = before.replace(/\s+नक्षत्र\s*$/u, "").trim();
      const cleanAfter = after.trim();
      const joined = cleanAfter ? cleanAfter.startsWith("नक्षत्र") ? `${cleanBefore} ${cleanAfter}` : `${cleanBefore} नक्षत्र ${cleanAfter}` : `${cleanBefore} नक्षत्र`;
      return joined.includes("गण्डमूल") ? `(${joined})` : `(${joined} • गण्डमूल प्रभावी)`;
    }
  );
  out = out.replace(
    new RegExp(
      `\\(([^()]*?(?<![\\u0900-\\u097F])(?:${gmAlt})(?![\\u0900-\\u097F])[^()]*?नक्षत्र[^()]*)\\)`,
      "gu"
    ),
    (full, inner, offset, fullStr) => {
      if (/ग(?:ण्ड|ंड)मूल/u.test(inner)) return full;
      const after = fullStr.slice(offset + full.length, offset + full.length + 30);
      if (/^\s*\(\s*ग(?:ण्ड|ंड)मूल/u.test(after)) return full;
      return `(${inner.trim()} • गण्डमूल प्रभावी)`;
    }
  );
  const pattern = new RegExp(
    `(?<![\\u0900-\\u097F])(${gmAlt})(?![\\u0900-\\u097F])(?:\\s+नक्षत्र)?(\\s*\\(\\s*ग(?:ण्ड|ंड)मूल[^)]*\\))?`,
    "gu"
  );
  out = out.replace(
    pattern,
    (match, name, existingTag, offset, fullStr) => {
      const beforeOffset = fullStr.slice(0, offset);
      const lastOpen = beforeOffset.lastIndexOf("(");
      const lastClose = beforeOffset.lastIndexOf(")");
      const isInsideParens = lastOpen > lastClose;
      if (isInsideParens) {
        if (existingTag) {
          return `${name}${match.includes("नक्षत्र") ? " नक्षत्र" : ""}`;
        }
        return match;
      }
      if (existingTag) {
        if (existingTag.includes("•") || existingTag.includes("केवल जप-ध्यान") || existingTag.includes("तक")) {
          return `${name}${existingTag.replace(/ग(?:ण्ड|ंड)मूल\s+संज्ञक\s+नक्षत्र/gu, "गण्डमूल नक्षत्र")}`;
        }
        return `${name} (गण्डमूल नक्षत्र)`;
      }
      const preceding = fullStr.slice(Math.max(0, offset - 80), offset);
      const following = fullStr.slice(offset + match.length, offset + match.length + 50);
      if (/ग(?:ण्ड|ंड)मूल\s+नक्षत्र\s*\([^)]*$/u.test(preceding) || /^\s*\)\s*\(\s*ग(?:ण्ड|ंड)मूल/u.test(following)) {
        return match;
      }
      return `${name} (गण्डमूल नक्षत्र)`;
    }
  );
  while (/\)\s+\(/u.test(out)) {
    out = out.replace(/\)\s+\(/gu, " • ");
  }
  return out;
}
function formatNextDayRangeHi(text) {
  if (!text) return text;
  const rangeRegex = /((?:अगले\s+दिन\s+)?(?:(?:प्रातः|दोपहर|शाम|सायंकाल|रात्रि|मध्यरात्रि)\s+)?)(\d{1,2}:\d{2}(?::\d{2})?\s*(?:AM|PM))(\s*[–-]\s*)((?:अगले\s+दिन\s+)?(?:(?:प्रातः|दोपहर|शाम|सायंकाल|रात्रि|मध्यरात्रि)\s+)?)(\d{1,2}:\d{2}(?::\d{2})?\s*(?:AM|PM))/giu;
  return text.replace(
    rangeRegex,
    (fullMatch, startPrefix, startClock, dash, endPrefix, endClock) => {
      if (/अगले\s+दिन/u.test(endPrefix) || /अगले\s+दिन/u.test(startPrefix)) {
        return fullMatch;
      }
      const startMin = parse12HourClockToMinutes(startClock);
      const endMin = parse12HourClockToMinutes(endClock);
      if (startMin < 0 || endMin < 0) return fullMatch;
      if (endMin <= startMin && endMin < 12 * 60) {
        const nextPeriod = endMin < 4 * 60 ? "रात्रि" : "प्रातः";
        return `${startPrefix}${startClock}${dash}अगले दिन ${nextPeriod} ${endClock}`;
      }
      return fullMatch;
    }
  );
}
const BALANCED_GULIKA_TAG_HI = `(${GULIKA_SHASTRIYA_LABEL_HI})`;
const BALANCED_GULIKA_TAG_EN = "(Acceptable — favorable for savings, mantra-japa & steady work)";
function stripLegacyKaalConflictTag(text) {
  if (!text) return "";
  return text.replace(/\s*\([^)]*(?:राहुकाल|यमगण्ड)[^)]*\)\s*/gu, " ").trim();
}
function getDynamicPradoshKaalDisplay(dayPanchang) {
  if (!dayPanchang.festivalName) return null;
  const combinedText = [
    dayPanchang.festivalName,
    dayPanchang.festivalDescription,
    dayPanchang.festivalPujaHint
  ].filter(Boolean).join(" ");
  const mentionsPradosh = /प्रदोष|pradosh|तुलसी\s*विवाह|महाशिवरात्रि|करवा\s*चौथ|धनतेरस|दीपावली|दिवाली|होलिका\s*दहन/iu.test(
    combinedText
  );
  if (!mentionsPradosh && !dayPanchang.isPradosh) return null;
  const sunsetMs = dayPanchang.exactEpochsMs?.sunsetMs ?? dayPanchang.dailyPanchang?.kaalWindows?.PRADOSH?.startTimestamp;
  if (!sunsetMs || !Number.isFinite(sunsetMs)) return null;
  const tz = resolveSafeTimezone(
    dayPanchang.dailyPanchang?.location || { timezone: "Asia/Kolkata", tzOffsetHours: 5.5 }
  );
  const startMs = Math.round(sunsetMs / 1e3) * 1e3;
  const endMs = startMs + 144 * 6e4;
  const fmtClock12 = (ms) => {
    const parts = new Intl.DateTimeFormat("en-US", {
      timeZone: tz,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false
    }).formatToParts(new Date(ms));
    const hr24 = parseInt(parts.find((p) => p.type === "hour")?.value || "0", 10) % 24;
    const min = (parts.find((p) => p.type === "minute")?.value || "00").padStart(2, "0");
    const sec = (parts.find((p) => p.type === "second")?.value || "00").padStart(2, "0");
    const mer = hr24 >= 12 ? "PM" : "AM";
    const hr12 = String(hr24 % 12 === 0 ? 12 : hr24 % 12).padStart(2, "0");
    return `${hr12}:${min}:${sec} ${mer}`;
  };
  const startClock = fmtClock12(startMs);
  const endClock = fmtClock12(endMs);
  return {
    hi: `सायं ${startClock} – ${endClock}`,
    en: `${startClock} – ${endClock} (Evening, 2h 24m from Sunset)`
  };
}
function getMuhuratKaalOverlapTag(epochs, kind, timeZone = "Asia/Kolkata") {
  if (!epochs) return { hi: "", en: "", hasOverlap: false, isPartial: false };
  const rawStartMs = kind === "vijay" ? epochs.vijayStartMs : epochs.godhuliStartMs;
  const rawEndMs = kind === "vijay" ? epochs.vijayEndMs : epochs.godhuliEndMs;
  if (!Number.isFinite(rawStartMs) || !Number.isFinite(rawEndMs) || !Number.isFinite(epochs.rahukaalStartMs) || !Number.isFinite(epochs.yamagandamStartMs)) {
    return { hi: "", en: "", hasOverlap: false, isPartial: false };
  }
  const roundSec = (ms) => Math.round(ms / 1e3) * 1e3;
  const startMs = roundSec(rawStartMs);
  const endMs = roundSec(rawEndMs);
  const rahuStartMs = roundSec(epochs.rahukaalStartMs);
  const rahuEndMs = roundSec(epochs.rahukaalEndMs);
  const yamaStartMs = roundSec(epochs.yamagandamStartMs);
  const yamaEndMs = roundSec(epochs.yamagandamEndMs);
  const spanMs = Math.max(6e4, endMs - startMs);
  const fmtClock12 = (ms) => {
    const parts = new Intl.DateTimeFormat("en-US", {
      timeZone,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false
    }).formatToParts(new Date(ms));
    const hr24 = parseInt(parts.find((p) => p.type === "hour")?.value || "0", 10) % 24;
    const min = (parts.find((p) => p.type === "minute")?.value || "00").padStart(2, "0");
    const sec = (parts.find((p) => p.type === "second")?.value || "00").padStart(2, "0");
    const mer = hr24 >= 12 ? "PM" : "AM";
    const hr12 = String(hr24 % 12 === 0 ? 12 : hr24 % 12).padStart(2, "0");
    return `${hr12}:${min}:${sec} ${mer}`;
  };
  const fmtSpan = (sMs, eMs) => `${fmtClock12(sMs)} – ${fmtClock12(eMs)}`;
  const rOvS = Math.max(startMs, rahuStartMs);
  const rOvE = Math.min(endMs, rahuEndMs);
  const rOvMs = rOvE - rOvS;
  const rahuOverlap = rOvMs >= 6e4;
  const rahuFull = rahuOverlap && rOvMs >= spanMs - 1e3;
  const yOvS = Math.max(startMs, yamaStartMs);
  const yOvE = Math.min(endMs, yamaEndMs);
  const yOvMs = yOvE - yOvS;
  const yamaOverlap = yOvMs >= 6e4;
  const yamaFull = yamaOverlap && yOvMs >= spanMs - 1e3;
  if (rahuOverlap && yamaOverlap) {
    if (rahuFull || yamaFull) {
      return {
        hi: "(राहुकाल व यमगण्ड युक्त — वर्जित)",
        en: "(Overlaps Rahu Kaal & Yamagandam — Avoid)",
        hasOverlap: true,
        isPartial: false
      };
    }
    return {
      hi: `(${fmtSpan(rOvS, rOvE)} राहुकाल व ${fmtSpan(yOvS, yOvE)} यमगण्ड युक्त, शेष भाग शुद्ध)`,
      en: `(${fmtSpan(rOvS, rOvE)} Rahu Kaal & ${fmtSpan(yOvS, yOvE)} Yamagandam overlap; remainder pure)`,
      hasOverlap: true,
      isPartial: true
    };
  }
  if (rahuOverlap) {
    if (rahuFull) {
      return {
        hi: "(राहुकाल युक्त — वर्जित)",
        en: "(Overlaps Rahu Kaal — Avoid)",
        hasOverlap: true,
        isPartial: false
      };
    }
    const ovStr = fmtSpan(rOvS, rOvE);
    return {
      hi: `(${ovStr} राहुकाल युक्त, शेष भाग शुद्ध)`,
      en: `(${ovStr} Rahu Kaal overlap; remainder pure)`,
      hasOverlap: true,
      isPartial: true
    };
  }
  if (yamaOverlap) {
    if (yamaFull) {
      return {
        hi: "(यमगण्ड युक्त — वर्जित)",
        en: "(Overlaps Yamagandam — Avoid)",
        hasOverlap: true,
        isPartial: false
      };
    }
    const ovStr = fmtSpan(yOvS, yOvE);
    return {
      hi: `(${ovStr} यमगण्ड युक्त, शेष भाग शुद्ध)`,
      en: `(${ovStr} Yamagandam overlap; remainder pure)`,
      hasOverlap: true,
      isPartial: true
    };
  }
  return { hi: "", en: "", hasOverlap: false, isPartial: false };
}
function formatDurmuhurtaForShareHi(durMuhurta) {
  if (!durMuhurta) return "";
  return durMuhurta.split("•").map(
    (seg) => formatNextDayRangeHi(seg.trim()).replace(
      /^((?:रात्रि|मध्यरात्रि)\s+.+?)\s*\(\s*रात्रि\s*\)$/u,
      "$1"
    )
  ).filter(Boolean).join(" | ");
}
function stripPersonalSalutation(text, userSalutation) {
  if (!text) return "";
  let cleaned = text.trim();
  if (userSalutation && cleaned.startsWith(userSalutation)) {
    cleaned = cleaned.slice(userSalutation.length).trim();
  }
  cleaned = cleaned.replace(/^[^\s:]{1,25}\s+जी:\s*/u, "");
  return cleaned;
}
function stripRedundantPakshaMaasFromTithi(tithiShort, hinduMaas, paksha) {
  let clean = (tithiShort || "").trim();
  if (!clean) return "";
  const maasCore = (hinduMaas || "").replace(/\s*मास\s*/gu, "").replace(/\s*\([^)]*\)\s*/gu, "").trim();
  if (maasCore) {
    const escapedMaas = maasCore.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    clean = clean.replace(new RegExp(`^${escapedMaas}\\s+`, "u"), "").trim();
  }
  clean = clean.replace(
    /^(?:अधिक\s+|अधिकमास\s+|शुद्ध\s+)?(?:चैत्र|वैशाख|ज्येष्ठ|आषाढ़|आषाढ़|श्रावण|सावन|भाद्रपद|भादो|आश्विन|अश्विन|कार्तिक|मार्गशीर्ष|अगहन|पौष|पूस|माघ|फाल्गुन|फागुन)\s+/u,
    ""
  ).trim();
  const hasPaksha = Boolean((paksha || "").trim());
  if (hasPaksha || /^(?:शुक्ल|कृष्ण)(?:\s+पक्ष)?\s+/u.test(clean)) {
    clean = clean.replace(/^(?:शुक्ल|कृष्ण)(?:\s+पक्ष)?\s+/u, "").trim();
  }
  return clean || (tithiShort || "").trim();
}
function sanitizePublicSingleRashiProse(text) {
  if (!text) return "";
  let out = text.trim();
  const neutralTransitLine = "चंद्रमा के गोचर से आज संयम, समीक्षा व धैर्य की अपेक्षा है।";
  const hadDasha = /विंशोत्तरी[^।]*?(?:महादशा|अंतर्दशा)/u.test(out);
  if (hadDasha) {
    out = out.replace(
      /[^।]*?(?:आपकी\s+सक्रिय\s+)?विंशोत्तरी[^।]*?(?:महादशा|अंतर्दशा)[^।]*?(?:।|$)/gu,
      (match) => out.includes(neutralTransitLine) ? "" : `${neutralTransitLine} `
    );
  }
  out = out.replace(
    /[^।]*?(?:चंद्रमा\s+के\s+)?भिन्नाष्टकवर्ग[^।]*?(?:बिंदु|अंक)[^।]*?(?:।|$)/gu,
    ""
  );
  out = out.replace(
    /[^।]*?आपके\s+जन्म\s+नक्षत्र[^।]*?तारा[^।]*?(?:।|$)/gu,
    ""
  );
  let prev = "";
  while (prev !== out) {
    prev = out;
    out = out.replace(/\(([^()]+)\)\s*\(([^()]+)\)/gu, "($1 • $2)");
  }
  const escapedNeutral = neutralTransitLine.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  out = out.replace(new RegExp(`(${escapedNeutral}\\s*){2,}`, "gu"), `${neutralTransitLine} `);
  out = out.replace(/\s{2,}/g, " ").replace(/\s+([।,;:])/gu, "$1").replace(/^[\s।,•-]+/u, "").trim();
  return out;
}
function buildFullSingleRashiPost(input, language = "hi") {
  const inferredMoonHouseForSaral = (() => {
    const src = `${input.chandrabal || ""} ${input.gocharSummary || ""}`;
    if (/अष्टम|8(?:वां|th)?\s*भाव/u.test(src)) return 8;
    if (/द्वादश|12(?:वां|th)?\s*भाव/u.test(src)) return 12;
    if (/चतुर्थ|4(?:था|th)?\s*भाव/u.test(src)) return 4;
    if (/एकादश|11(?:वां|th)?\s*भाव/u.test(src)) return 11;
    if (/दशम|10(?:वां|th)?\s*भाव/u.test(src)) return 10;
    if (/सप्तम|7(?:वां|th)?\s*भाव/u.test(src)) return 7;
    if (/षष्ठ|6(?:ठा|th)?\s*भाव/u.test(src)) return 6;
    if (/तृतीय|3(?:रा|rd)?\s*भाव/u.test(src)) return 3;
    if (/प्रथम|1(?:ला|st)?\s*भाव/u.test(src)) return 1;
    return 5;
  })();
  const rashiSaralArtha = buildRashifalSaralArthaHi({
    mode: input.mode,
    moonHouse: inferredMoonHouseForSaral,
    chandrabalLabelHi: input.chandrabal,
    tarabalSummaryHi: input.tarabal,
    careerScore: input.careerScore,
    wealthScore: input.wealthScore,
    familyScore: input.loveScore,
    healthScore: input.healthScore
  });
  if (language === "en") {
    const overallAvgEn = Math.round(
      (input.careerScore + input.wealthScore + input.loveScore + input.educationScore + input.healthScore) / 5
    );
    if (input.mode === "weekly" || input.mode === "monthly") {
      const isWeekly = input.mode === "weekly";
      const modeLabelEn2 = isWeekly ? "This Week's Complete Weekly Horoscope" : "This Month's Complete Monthly Horoscope";
      const modeShortEn2 = isWeekly ? "Weekly" : "Monthly";
      const periodHeaderLineEn = isWeekly ? `Period: ${toEn(input.weekStartDate || input.todayFormatted)}${input.weekEndDate ? ` to ${toEn(input.weekEndDate)}` : ""}${input.vikramSamvat ? ` (Vikram Samvat ${input.vikramSamvat}${input.shakaSamvat ? ` • Shaka Samvat ${input.shakaSamvat}` : ""})` : ""}` : `Month: ${toEn(input.gregorianMonthYear || input.todayFormatted)} (${toEn(input.hinduLunarMonths || input.hinduMaas)}${input.vikramSamvat ? ` • Vikram Samvat ${input.vikramSamvat}` : ""}${input.shakaSamvat ? ` • Shaka Samvat ${input.shakaSamvat}` : ""})`;
      const transitSummaryLineEn = isWeekly ? `Weekly Planetary Transits: ${toEn(input.weeklyPlanetarySummary || input.gocharSummary)}${input.weeklyMoonSignsSummary ? ` | Moon Transit: ${toEn(input.weeklyMoonSignsSummary)}` : ""}` : `Monthly Planetary Shifts: ${toEn(input.monthlyPlanetarySummary || input.gocharSummary)}${input.monthlySankrantiSummary ? ` | ${toEn(input.monthlySankrantiSummary)}` : ""}`;
      const cleanRemedyEn = toEn(input.remedyText).replace(/^(?:Weekly Remedy|Monthly Special Remedy)\s*:\s*/i, "").trim();
      const wmEnLines = [
        `|| Om Shri Ganeshaya Namah ||`,
        `Pandit Ji Online — ${modeLabelEn2}`,
        periodHeaderLineEn,
        transitSummaryLineEn,
        `━━━━━━━━━━━━━━━━━━━━━━`,
        `【 ${input.rashiEnglishName} (${input.rashiHindiName}) — ${modeShortEn2} Forecast 】`,
        `• Ruling Planet: ${toEn(input.swami)} | Element: ${toEn(input.element)}`,
        input.rashiNakshatras ? `• Rashi Nakshatras: ${toEn(input.rashiNakshatras)}` : "",
        `• Presiding Deity: ${toEn(input.deity)} | Lucky Gem: ${toEn(input.ratna)}`,
        `• Name Initials: ${input.aksharas} | Compatible Signs: ${toEn(input.compatibleRashis)}`,
        `━━━━━━━━━━━━━━━━━━━━━━`,
        ``,
        isWeekly ? `Weekly Planetary & Lunar Alignment:` : `Monthly Planetary Alignment:`,
        `• ${isWeekly ? "Favorable Days" : "Key Alignment"}: ${toEn(isWeekly ? input.weeklyFavorableDays || input.chandrabal : input.chandrabal)}`,
        isWeekly && input.weeklyModerateDays ? `• Moderate Days: ${toEn(input.weeklyModerateDays)}` : "",
        isWeekly && input.weeklyCautionDays ? `• Caution Days: ${toEn(input.weeklyCautionDays)}` : "",
        !isWeekly && input.monthlyModerateDays ? `• Moderate Days: ${toEn(input.monthlyModerateDays)}` : "",
        !isWeekly && input.monthlySankrantiSummary ? `• Sun Sankranti: ${toEn(input.monthlySankrantiSummary)}` : "",
        `• ${modeShortEn2} Transit Summary: ${toEn(input.gocharSummary)}`,
        `• ${toEn(rashiSaralArtha.chandrabalGocharHi)}`,
        ``,
        `${modeShortEn2} Fortune Meter (Overall Positivity: ${overallAvgEn}%):`,
        `Career: ${input.careerScore}% | Wealth: ${input.wealthScore}% | Family: ${input.loveScore}% | Education: ${input.educationScore}% | Health: ${input.healthScore}%`,
        `━━━━━━━━━━━━━━━━━━━━━━`,
        ``,
        `1. ${modeShortEn2} Mental & Spiritual Outlook:`,
        `${toEn(input.lagnaMentalText)}`,
        ``,
        `2. Major ${modeShortEn2} Planetary Impact:`,
        `${toEn(deduplicateAndPolishProse(input.transitImpactText).text || input.transitImpactText)}`,
        ``,
        `3. Career, Business & Finance:`,
        `• Work & Business: ${toEn(input.careerText)}`,
        `• Wealth & Savings: ${toEn(input.wealthText)}`,
        ``,
        `4. Family, Education & Health:`,
        `• Family & Relationships: ${toEn(input.familyText)}`,
        `• Education & Studies: ${toEn(input.educationText)}`,
        `• Health & Wellness: ${toEn(input.healthText)}`,
        ``,
        `5. ${isWeekly ? "This Week's Remedy & Mantra:" : "This Month's Special Remedy & Mantra:"}`,
        `• Remedy: ${cleanRemedyEn}`,
        `• Siddha Mantra: "${input.beejMantra}" (Chant 108 times regularly)`,
        `${toEn(rashiSaralArtha.fivePillarSummaryHi)}`,
        `━━━━━━━━━━━━━━━━━━━━━━`,
        ``,
        `${modeShortEn2} Lucky Indicators (${input.rashiEnglishName}):`,
        `• Lucky Numbers: ${input.luckyNumber} | Lucky Color: ${toEn(input.luckyColor)}`,
        `• Favorable Direction: ${toEn(input.favorableDirection)} | Best Window: ${toEn(isWeekly ? input.weeklyFavorableDays || input.luckyTime : input.monthlyFavorableWindow || input.luckyTime)}`,
        ``,
        `What to Focus On:`,
        `${toEn(input.todayDoText)}`,
        ``,
        `What to Avoid:`,
        `${toEn(input.todayDontText)}`
      ].filter((l) => l !== "");
      if (input.subhashitSanskrit && input.subhashitMeaning) {
        wmEnLines.push(
          `━━━━━━━━━━━━━━━━━━━━━━`,
          `Sacred Vedic Subhashit:`,
          `"${input.subhashitSanskrit}"`,
          `Meaning: ${toEn(input.subhashitMeaning)}`
        );
      }
      wmEnLines.push(
        `━━━━━━━━━━━━━━━━━━━━━━`,
        `Note: Positivity percentage (%) is an indicative estimate only; core predictions are based on classical planetary transits and Chandrabala.`,
        `For Free Vedic Astrology Consultation & Classical Guidance:`,
        `Acharya Pandit Shashank Sharma — Shri Jyotish Vedic Sansthan, Rudrapur (Uttarakhand)`,
        `WhatsApp / Call: +91 7017279043 | https://www.panditjionline.online/rashifal`,
        ``,
        isWeekly ? `#SaptahikRashifal #WeeklyHoroscope #${input.rashiEnglishName} #12RashiRashifal #PanditJiOnline #VedicAstrology` : `#MasikRashifal #MonthlyHoroscope #${input.rashiEnglishName} #12RashiRashifal #PanditJiOnline #VedicAstrology`
      );
      return wmEnLines.join("\n");
    }
    const modeLabelEn = "Today's Complete Daily Horoscope";
    const modeShortEn = "Daily";
    const periodPrefixEn = "Today's";
    const cleanTithiShortEnSource = stripRedundantPakshaMaasFromTithi(
      input.tithiShort,
      input.hinduMaas,
      input.paksha
    );
    const tithiWithEndEn = input.tithiEndTime ? `${toEn(cleanTithiShortEnSource)} (${toEn(input.tithiEndTime)})` : toEn(cleanTithiShortEnSource);
    const nakshatraWithEndEn = input.nakshatraEndTime ? `${toEn(input.nakshatra)} (${toEn(input.nakshatraEndTime)})` : toEn(input.nakshatra);
    const dishaShoolEn = input.dishaShoolRemedy ? `${toEn(input.dishaShool)} (${toEn(input.dishaShoolRemedy)})` : toEn(input.dishaShool);
    const cleanMentalEn = toEn(sanitizePublicSingleRashiProse(input.lagnaMentalText));
    const cleanTransitEn = toEn(sanitizePublicSingleRashiProse(input.transitImpactText));
    const cleanCareerEn = toEn(sanitizePublicSingleRashiProse(input.careerText));
    const cleanWealthEn = toEn(sanitizePublicSingleRashiProse(input.wealthText));
    const cleanFamilyEn = toEn(sanitizePublicSingleRashiProse(input.familyText));
    const cleanEduEn = toEn(sanitizePublicSingleRashiProse(input.educationText));
    const cleanHealthEn = toEn(sanitizePublicSingleRashiProse(input.healthText));
    const enLines = [
      `|| Om Shri Ganeshaya Namah ||`,
      `Pandit Ji Online — ${modeLabelEn}`,
      `Date: ${toEn(input.todayFormatted)}`,
      `Panchang: ${toEn(input.hinduMaas)} • ${toEn(input.paksha)} ${tithiWithEndEn} | Moon Nakshatra: ${nakshatraWithEndEn} | Yoga: ${toEn(input.yoga)}`,
      input.sarvajanHitayaRemedyHi ? `Today's Universal Auspicious Remedy (Sarvajan Hitaya): ${toEn(input.sarvajanHitayaRemedyHi)}` : "",
      `━━━━━━━━━━━━━━━━━━━━━━`,
      `【 ${input.rashiEnglishName} (${input.rashiHindiName}) — ${modeShortEn} Forecast 】`,
      `• Ruling Planet: ${toEn(input.swami)} | Element: ${toEn(input.element)}`,
      input.rashiNakshatras ? `• Rashi Nakshatras: ${toEn(input.rashiNakshatras)}` : "",
      `• Presiding Deity: ${toEn(input.deity)} | Lucky Gem: ${toEn(input.ratna)}`,
      `• Name Initials: ${input.aksharas} | Compatible Signs: ${toEn(input.compatibleRashis)}`,
      `━━━━━━━━━━━━━━━━━━━━━━`,
      ``,
      `${periodPrefixEn} Lunar & Planetary Position:`,
      `• Chandrabal: ${toEn(input.chandrabal)}`,
      input.tarabal ? `• Nakshatra Tara (Transit): ${toEn(input.tarabal)}` : "",
      input.tarabal ? `• ${toEn(rashiSaralArtha.tarabalHi)}` : "",
      `• Transit Summary: ${toEn(input.gocharSummary)}`,
      `• ${toEn(rashiSaralArtha.chandrabalGocharHi)}`,
      ``,
      `${periodPrefixEn} Fortune Meter (Overall Positivity: ${overallAvgEn}%):`,
      `Career: ${input.careerScore}% | Wealth: ${input.wealthScore}% | Family: ${input.loveScore}% | Education: ${input.educationScore}% | Health: ${input.healthScore}%`,
      `━━━━━━━━━━━━━━━━━━━━━━`,
      ``,
      `1. ${periodPrefixEn} Mental & Spiritual Energy:`,
      `${cleanMentalEn}`,
      ``,
      `2. Key Planetary Transit Impact:`,
      `${cleanTransitEn}`,
      ``,
      `3. Career, Business & Finance:`,
      `• Work & Business: ${cleanCareerEn}`,
      `• Wealth & Savings: ${cleanWealthEn}`,
      ``,
      `4. Family, Education & Health:`,
      `• Family & Relationships: ${cleanFamilyEn}`,
      `• Education & Studies: ${cleanEduEn}`,
      `• Health & Wellness: ${cleanHealthEn}`,
      ``,
      `5. ${periodPrefixEn} Vedic Remedy & Mantra:`,
      `• Remedy: ${toEn(input.remedyText)}`,
      `• Siddha Mantra: "${input.beejMantra}" (Chant 108 times in the morning)`,
      `${toEn(rashiSaralArtha.fivePillarSummaryHi)}`,
      `━━━━━━━━━━━━━━━━━━━━━━`,
      ``,
      `${periodPrefixEn} Lucky Indicators & Muhurat (${input.rashiEnglishName}):`,
      `• Lucky Numbers: ${input.luckyNumber} | Lucky Color: ${toEn(input.luckyColor)}`,
      `• Favorable Direction: ${toEn(input.favorableDirection)} | Disha Shool: ${dishaShoolEn}`,
      `• Abhijit Muhurat: ${input.abhijitMuhurat.includes("मान्य नहीं") ? "Not Observed (Prohibited on Wednesday per Shastra)" : toEn(input.abhijitMuhurat)}`,
      `• Rahu Kaal (Avoid): ${toEn(input.rahuKaal)}`,
      ``,
      `What to Do:`,
      `${toEn(input.todayDoText)}`,
      ``,
      `What to Avoid:`,
      `${toEn(input.todayDontText)}`
    ].filter((l) => l !== "");
    if (input.subhashitSanskrit && input.subhashitMeaning) {
      enLines.push(
        `━━━━━━━━━━━━━━━━━━━━━━`,
        `Sacred Vedic Subhashit:`,
        `"${input.subhashitSanskrit}"`,
        `Meaning: ${toEn(input.subhashitMeaning)}`
      );
    }
    enLines.push(
      `━━━━━━━━━━━━━━━━━━━━━━`,
      `Note: Positivity percentage (%) is an indicative estimate only; core predictions are based on classical planetary transits and Chandrabala.`,
      `For Free Vedic Astrology Consultation & Classical Guidance:`,
      `Acharya Pandit Shashank Sharma — Shri Jyotish Vedic Sansthan, Rudrapur (Uttarakhand)`,
      `WhatsApp / Call: +91 7017279043 | https://www.panditjionline.online/rashifal`,
      ``,
      `#AajKaRashifal #${input.rashiEnglishName} #DailyHoroscope #PanditJiOnline #VedicAstrology`
    );
    return enLines.join("\n");
  }
  const overallAvg = Math.round(
    (input.careerScore + input.wealthScore + input.loveScore + input.educationScore + input.healthScore) / 5
  );
  const samvatHeader = input.vikramSamvat ? ` (विक्रम संवत ${input.vikramSamvat}${input.shakaSamvat ? ` • शक संवत ${input.shakaSamvat}` : ""})` : "";
  if (input.mode === "weekly" || input.mode === "monthly") {
    const isWeekly = input.mode === "weekly";
    const cleanRemedyHi = stripAnyRemedyLeadPrefix(input.remedyText);
    const wmLines = [
      `॥ ॐ श्री गणेशाय नमः ॥`,
      isWeekly ? `पण्डित जी ऑनलाइन — इस सप्ताह का सम्पूर्ण साप्ताहिक राशिफल` : `पण्डित जी ऑनलाइन — इस मास का सम्पूर्ण मासिक राशिफल`,
      isWeekly ? `अवधि: ${input.weekStartDate || input.todayFormatted}${input.weekEndDate ? ` से ${input.weekEndDate}` : ""}${samvatHeader}` : `मास: ${input.gregorianMonthYear || input.todayFormatted} (${input.hinduLunarMonths || input.hinduMaas}${input.vikramSamvat ? ` • विक्रम संवत ${input.vikramSamvat}` : ""}${input.shakaSamvat ? ` • शक संवत ${input.shakaSamvat}` : ""})`,
      isWeekly ? `प्रमुख ग्रह गोचर: ${input.weeklyPlanetarySummary || input.gocharSummary}` : `प्रमुख ग्रह गोचर परिवर्तन: ${input.monthlyPlanetarySummary || input.gocharSummary}`,
      isWeekly && input.weeklyMoonSignsSummary ? `चन्द्र गोचर: ${input.weeklyMoonSignsSummary.replace(/\s*राशि$/u, "")} राशि` : !isWeekly && input.monthlySankrantiSummary ? `सूर्य संक्रांति योग: ${input.monthlySankrantiSummary}` : "",
      `━━━━━━━━━━━━━━━━━━━━━━`,
      `【 ${input.rashiHindiName} राशि (${input.rashiEnglishName}) — ${isWeekly ? "साप्ताहिक" : "मासिक"} फलादेश 】`,
      `• राशि स्वामी: ${input.swami} | तत्व: ${input.element}`,
      input.rashiNakshatras ? `• राशि के जन्म नक्षत्र: ${input.rashiNakshatras}` : "",
      `• आराध्य देव: ${input.deity} | शुभ रत्न: ${input.ratna}`,
      `• नामाक्षर: ${input.aksharas} | मित्र राशियां: ${input.compatibleRashis}`,
      `━━━━━━━━━━━━━━━━━━━━━━`,
      ``,
      isWeekly ? `इस सप्ताह की चन्द्र एवं ग्रह स्थिति:` : `इस मास की ग्रह स्थिति:`,
      isWeekly ? `• साप्ताहिक ग्रह प्रभाव: ${input.weeklyFavorableDays ? `शुभ दिन — ${input.weeklyFavorableDays}` : input.chandrabal}` : `• मासिक ग्रह स्थिति: ${input.chandrabal}`,
      isWeekly && input.weeklyModerateDays ? `• मध्यम दिन: ${input.weeklyModerateDays}` : "",
      isWeekly && input.weeklyCautionDays ? `• सावधानी के दिन: ${input.weeklyCautionDays}` : "",
      !isWeekly && input.monthlyFavorableWindow ? `• श्रेष्ठ मासिक पक्ष: ${input.monthlyFavorableWindow}` : isWeekly && input.tarabal ? `• ${input.tarabal}` : "",
      isWeekly && input.tarabal ? `• ${rashiSaralArtha.tarabalHi}` : "",
      !isWeekly && input.monthlyModerateDays ? `• मध्यम दिन: ${input.monthlyModerateDays}` : "",
      `• ${isWeekly ? "साप्ताहिक" : "मासिक"} गोचर सार: ${input.gocharSummary}`,
      `• ${rashiSaralArtha.chandrabalGocharHi}`,
      ``,
      `${isWeekly ? "इस सप्ताह" : "इस मास"} का भाग्य मीटर (कुल शुभता: ${overallAvg}%):`,
      `करियर: ${input.careerScore}% | धन: ${input.wealthScore}% | परिवार: ${input.loveScore}% | शिक्षा: ${input.educationScore}% | स्वास्थ्य: ${input.healthScore}%`,
      `━━━━━━━━━━━━━━━━━━━━━━`,
      ``,
      `1. ${isWeekly ? "इस सप्ताह" : "इस मास"} का मानसिक एवं आत्मिक प्रभाव:`,
      `${input.lagnaMentalText}`,
      ``,
      `2. प्रमुख ग्रहों का ${isWeekly ? "साप्ताहिक" : "मासिक"} गोचर प्रभाव:`,
      `${deduplicateAndPolishProse(input.transitImpactText).text || input.transitImpactText}`,
      ``,
      `3. करियर, व्यापार एवं आर्थिक पक्ष:`,
      `• कार्यक्षेत्र व व्यवसाय: ${cleanIntraSentenceHindiRepetitions(input.careerText)}`,
      `• धन, आय व बचत: ${cleanIntraSentenceHindiRepetitions(input.wealthText)}`,
      ``,
      `4. परिवार, शिक्षा एवं स्वास्थ्य:`,
      `• पारिवारिक व दांपत्य जीवन: ${cleanIntraSentenceHindiRepetitions(input.familyText)}`,
      `• शिक्षा व प्रतियोगिता: ${cleanIntraSentenceHindiRepetitions(input.educationText)}`,
      `• स्वास्थ्य व दिनचर्या: ${cleanIntraSentenceHindiRepetitions(input.healthText)}`,
      ``,
      `5. ${isWeekly ? "सप्ताह का उपाय एवं सिद्ध मंत्र:" : "मास का उपाय एवं सिद्ध मंत्र:"}`,
      `• ${isWeekly ? "सप्ताह का उपाय" : "मास का उपाय"}: ${cleanRemedyHi}`,
      `• सिद्ध मंत्र: "${input.beejMantra}" (प्रातः १०८ बार जप करें)`,
      `${rashiSaralArtha.fivePillarSummaryHi}`,
      `━━━━━━━━━━━━━━━━━━━━━━`,
      ``,
      `${isWeekly ? "इस सप्ताह" : "इस मास"} के शुभ संकेत (${input.rashiHindiName} राशि):`,
      `• शुभ अंक: ${input.luckyNumber} | शुभ रंग: ${input.luckyColor}`,
      `• अनुकूल दिशा: ${input.favorableDirection} | शुभ रत्न: ${input.ratna}`,
      isWeekly && input.weeklyFavorableDays ? `• सप्ताह के शुभ दिवस: ${input.weeklyFavorableDays}` : !isWeekly && input.monthlyFavorableWindow ? `• मासिक शुभ अवधि: ${input.monthlyFavorableWindow}` : "",
      ``,
      isWeekly ? `इस सप्ताह क्या करें:` : `इस मास क्या करें:`,
      `${input.todayDoText}`,
      ``,
      isWeekly ? `इस सप्ताह क्या न करें:` : `इस मास क्या न करें:`,
      `${input.todayDontText}`
    ].filter((l) => l !== "");
    if (input.subhashitSanskrit && input.subhashitMeaning) {
      wmLines.push(
        `━━━━━━━━━━━━━━━━━━━━━━`,
        `पावन वैदिक सुभाषित:`,
        `"${input.subhashitSanskrit}"`,
        `अर्थ: ${input.subhashitMeaning}`
      );
    }
    const showDeepawaliFootnote = !isWeekly && Boolean(
      input.monthlyMajorParvasNoteHi || input.hasDeepawaliAmavasya || input.monthlyFavorableWindow && input.monthlyFavorableWindow.includes("दीपावली अमावस्या") || input.monthlyPlanetarySummary && input.monthlyPlanetarySummary.includes("दीपावली अमावस्या") || input.gocharSummary && input.gocharSummary.includes("दीपावली अमावस्या")
    );
    const hasKartikPurnimaInSingle = Boolean(
      input.monthlyPlanetarySummary && input.monthlyPlanetarySummary.includes("कार्तिक पूर्णिमा")
    );
    const resolvedSingleMonthlyParvaNote = input.monthlyMajorParvasNoteHi || (hasKartikPurnimaInSingle ? `नोट: इस मास कार्तिक अमावस्या (दीपावली महापर्व) एवं कार्तिक पूर्णिमा (देव दीपावली) के प्रमुख महापर्व हैं—लक्ष्मी पूजन, बहीखाता, दीपदान व शुभ आरंभ हेतु ये तिथियाँ विशेष रूप से ग्राह्य हैं।` : `नोट: कार्तिक अमावस्या (दीपावली महापर्व) होने के कारण लक्ष्मी पूजन, बहीखाता व व्यापारिक शुभ आरंभ हेतु यह तिथि विशेष रूप से ग्राह्य है।`);
    wmLines.push(
      `━━━━━━━━━━━━━━━━━━━━━━`,
      ...showDeepawaliFootnote ? [resolvedSingleMonthlyParvaNote] : [],
      `नोट: शुभता प्रतिशत (%) केवल सांकेतिक आकलन है; मुख्य फल शास्त्रीय ग्रह गोचर एवं चंद्रबल पर आधारित है।`,
      `निःशुल्क ज्योतिष परामर्श एवं शास्त्रीय मार्गदर्शन हेतु:`,
      `आचार्य पण्डित शशांक शर्मा — श्री ज्योतिष वैदिक संस्थान, रुद्रपुर (उत्तराखण्ड)`,
      `WhatsApp / संपर्क: +91 7017279043 | https://www.panditjionline.online/rashifal`,
      ``,
      isWeekly ? `#SaptahikRashifal #WeeklyHoroscope #${input.rashiEnglishName} #12RashiRashifal #VedicJyotish #PanditJiOnline` : `#MasikRashifal #MonthlyHoroscope #${input.rashiEnglishName} #12RashiRashifal #VedicJyotish #PanditJiOnline`
    );
    return localizeSocialPostLines(wmLines, language, input.mode);
  }
  const modeLabel = "आज का सम्पूर्ण दैनिक राशिफल";
  const modeShort = "दैनिक";
  const periodPrefix = "आज";
  const formatAngaWithEnd = (name, endTime) => {
    const cleanName = (name || "").trim();
    const cleanEnd = (endTime || "").trim();
    if (!cleanEnd) return cleanName;
    if (/\d{1,2}:\d{2}|\b(?:AM|PM)\b|तक|फिर|तत्पश्चात/iu.test(cleanName)) return cleanName;
    if (/\)\s*$/.test(cleanName)) {
      return cleanName.replace(/\)\s*$/, ` • ${cleanEnd})`);
    }
    return `${cleanName} (${cleanEnd})`;
  };
  const formatDailyNakshatraHeaderHi = (rawNakshatra, rawEndTime) => {
    const raw = (rawNakshatra || "").trim();
    if (!raw) return "";
    const parenParts = [];
    const baseWithoutParens = raw.replace(/\(([^()]*)\)/g, (_, inner) => {
      const cleanedInner = inner.split("•").map(
        (seg) => seg.trim().replace(/गण्डमूल\s*संज्ञक\s*नक्षत्र/gu, "गण्डमूल संज्ञक").replace(/गण्डमूल\s*नक्षत्र/gu, "गण्डमूल संज्ञक").trim()
      ).filter(Boolean);
      parenParts.push(...cleanedInner);
      return " ";
    }).replace(/\s+/g, " ").replace(/\s*नक्षत्र\s*$/u, "").trim();
    const cleanEnd = (rawEndTime || "").trim();
    if (cleanEnd && !parenParts.some((p) => p.includes(cleanEnd) || cleanEnd.includes(p))) {
      parenParts.push(cleanEnd);
    }
    const uniqueParts = Array.from(new Set(parenParts));
    const label = `${baseWithoutParens} नक्षत्र`;
    return uniqueParts.length > 0 ? `${label} (${uniqueParts.join(" • ")})` : label;
  };
  const cleanTithiShortHi = stripRedundantPakshaMaasFromTithi(
    input.tithiShort,
    input.hinduMaas,
    input.paksha
  );
  const tithiWithEnd = formatAngaWithEnd(cleanTithiShortHi, input.tithiEndTime);
  const nakshatraWithEnd = formatDailyNakshatraHeaderHi(input.nakshatra, input.nakshatraEndTime);
  const yogaWithEnd = formatAngaWithEnd(input.yoga, input.yogaEndTime);
  const karanaWithEnd = input.karana ? formatAngaWithEnd(input.karana, input.karanaEndTime) : "";
  const dishaShoolDisplay = input.dishaShoolRemedy ? `${input.dishaShool} (${input.dishaShoolRemedy})` : input.dishaShool;
  const chandraTransition = input.chandraRashi ? parseChandraRashiTransition(input.chandraRashi) : null;
  const chandraHeaderPart = chandraTransition ? ` | ${chandraTransition.headerLineHi}` : "";
  const suryaHeaderPart = input.suryaRashi ? ` | सूर्य राशि: ${input.suryaRashi}` : "";
  const lines = [
    `॥ ॐ श्री गणेशाय नमः ॥`,
    `पण्डित जी ऑनलाइन — ${modeLabel}`,
    `दिनांक: ${input.todayFormatted}${samvatHeader}`,
    `पंचांग: ${input.hinduMaas} • ${input.paksha} ${tithiWithEnd} | आज का गोचर नक्षत्र: ${nakshatraWithEnd} | योग: ${yogaWithEnd}${karanaWithEnd ? ` | करण: ${karanaWithEnd}` : ""}${chandraHeaderPart}${suryaHeaderPart}`,
    input.sarvajanHitayaRemedyHi ? `आज का सर्वजन हिताय विशेष उपाय: ${input.sarvajanHitayaRemedyHi}` : "",
    `━━━━━━━━━━━━━━━━━━━━━━`,
    `【 ${input.rashiHindiName} राशि (${input.rashiEnglishName}) — ${modeShort} फलादेश 】`,
    `• राशि स्वामी: ${input.swami} | तत्व: ${input.element}`,
    input.rashiNakshatras ? `• राशि के जन्म नक्षत्र: ${input.rashiNakshatras}` : "",
    `• आराध्य देव: ${input.deity} | शुभ रत्न: ${input.ratna}`,
    `• नामाक्षर: ${input.aksharas} | मित्र राशियां: ${input.compatibleRashis}`,
    `━━━━━━━━━━━━━━━━━━━━━━`,
    ``,
    `${periodPrefix} की चन्द्र एवं ग्रह स्थिति:`,
    `• चन्द्रबल: ${input.chandrabal}`,
    input.tarabal ? `• नक्षत्र तारा (गोचर): ${input.tarabal}` : "",
    input.tarabal ? `• ${rashiSaralArtha.tarabalHi}` : "",
    `• गोचर सार: ${sanitizePublicSingleRashiProse(input.gocharSummary)}`,
    `• ${rashiSaralArtha.chandrabalGocharHi}`,
    ``,
    `${periodPrefix} का भाग्य मीटर (कुल शुभता: ${overallAvg}%):`,
    `करियर: ${input.careerScore}% | धन: ${input.wealthScore}% | परिवार: ${input.loveScore}% | शिक्षा: ${input.educationScore}% | स्वास्थ्य: ${input.healthScore}%`,
    `━━━━━━━━━━━━━━━━━━━━━━`,
    ``,
    `1. ${periodPrefix} का मानसिक एवं आत्मिक प्रभाव:`,
    `${sanitizePublicSingleRashiProse(input.lagnaMentalText)}`,
    ``,
    `2. प्रमुख ग्रहों का गोचर प्रभाव:`,
    `${sanitizePublicSingleRashiProse(input.transitImpactText)}`,
    ``,
    `3. करियर, व्यापार एवं आर्थिक पक्ष:`,
    `• कार्यक्षेत्र व व्यवसाय: ${cleanIntraSentenceHindiRepetitions(sanitizePublicSingleRashiProse(input.careerText))}`,
    `• धन, आय व बचत: ${cleanIntraSentenceHindiRepetitions(sanitizePublicSingleRashiProse(input.wealthText))}`,
    ``,
    `4. परिवार, शिक्षा एवं स्वास्थ्य:`,
    `• पारिवारिक व दांपत्य जीवन: ${cleanIntraSentenceHindiRepetitions(sanitizePublicSingleRashiProse(input.familyText))}`,
    `• शिक्षा व प्रतियोगिता: ${cleanIntraSentenceHindiRepetitions(sanitizePublicSingleRashiProse(input.educationText))}`,
    `• स्वास्थ्य व दिनचर्या: ${cleanIntraSentenceHindiRepetitions(sanitizePublicSingleRashiProse(input.healthText))}`,
    ``,
    `5. ${periodPrefix} का सरल वैदिक उपाय एवं मंत्र:`,
    `• आज का उपाय: ${stripAnyRemedyLeadPrefix(input.remedyText)}`,
    `• सिद्ध मंत्र: "${input.beejMantra}" (प्रातः १०८ बार जप करें)`,
    `${rashiSaralArtha.fivePillarSummaryHi}`,
    `━━━━━━━━━━━━━━━━━━━━━━`,
    ``,
    `${periodPrefix} के शुभ संकेत एवं मुहूर्त (${input.rashiHindiName} राशि):`,
    `• शुभ अंक: ${input.luckyNumber} | शुभ रंग: ${input.luckyColor}`,
    `• अनुकूल दिशा: ${input.favorableDirection} | दिशाशूल: ${dishaShoolDisplay}`,
    `• अभिजित मुहूर्त: ${input.abhijitMuhurat.includes("मान्य नहीं") ? "मान्य नहीं (बुधवार होने के कारण शास्त्रोक्त वर्जित/त्याज्य)" : input.abhijitMuhurat}`,
    `• राहुकाल (सावधानी): ${input.rahuKaal}`,
    ``,
    `${periodPrefix} क्या करें:`,
    `${input.todayDoText}`,
    ``,
    `${periodPrefix} क्या न करें:`,
    `${input.todayDontText}`
  ].filter((l) => l !== "");
  if (input.subhashitSanskrit && input.subhashitMeaning) {
    lines.push(
      `━━━━━━━━━━━━━━━━━━━━━━`,
      `पावन वैदिक सुभाषित:`,
      `"${input.subhashitSanskrit}"`,
      `अर्थ: ${input.subhashitMeaning}`
    );
  }
  lines.push(
    `━━━━━━━━━━━━━━━━━━━━━━`,
    `नोट: शुभता प्रतिशत (%) केवल सांकेतिक आकलन है; मुख्य फल शास्त्रीय ग्रह गोचर एवं चंद्रबल पर आधारित है।`,
    `निःशुल्क ज्योतिष परामर्श एवं शास्त्रीय मार्गदर्शन हेतु:`,
    `आचार्य पण्डित शशांक शर्मा — श्री ज्योतिष वैदिक संस्थान, रुद्रपुर (उत्तराखण्ड)`,
    `WhatsApp / संपर्क: +91 7017279043 | https://www.panditjionline.online/rashifal`,
    ``,
    `#AajKaRashifal #${input.rashiEnglishName} #Rashifal #PanditJiOnline #VedicAstrology`
  );
  return localizeSocialPostLines(lines, language, "daily");
}
function buildAll12RashisPost(input, language = "hi") {
  const chandraTransitionAll = input.chandraRashi ? parseChandraRashiTransition(input.chandraRashi) : null;
  const sanitizeCollectiveHeader = (raw) => {
    if (!raw) return "";
    return raw.replace(/\(\s*आपके\s+[^\s)]+\s+भाव\s*\)/gu, "").replace(/—\s*आपके\s+[^\s।•]+\s+भाव[^।•]*/gu, "").replace(/आपके\s+[^\s।•,]+\s+भाव\s*(?:में|को|पर)?/gu, "").replace(/\(\s*your\s+[^)]*house\s*\)/gi, "").replace(/\s{2,}/g, " ").trim();
  };
  const cleanWeeklySummary = sanitizeCollectiveHeader(input.weeklyPlanetarySummary);
  const cleanMonthlySummary = sanitizeCollectiveHeader(input.monthlyPlanetarySummary);
  const cleanSankrantiSummary = sanitizeCollectiveHeader(input.monthlySankrantiSummary);
  const cleanSubhashitSource = (input.subhashitSource || "").replace(/\s*\(यजुर्वेदिक परंपरा\)/gu, "").trim();
  if (language === "en") {
    const firstSentence2 = (txt) => {
      if (!txt) return "";
      const clean = toEn(txt).replace(/\s+/g, " ").trim();
      const parts = clean.split(/(?<=[.!।])\s+/);
      return parts[0] || clean;
    };
    if (input.mode === "weekly" || input.mode === "monthly") {
      const isWeekly = input.mode === "weekly";
      const wmEnLines = [
        `|| Shri Ganeshaya Namah • Om Namo Bhagavate Vasudevaya ||`,
        isWeekly ? `|| Complete Weekly Horoscope (Aries to Pisces — All 12 Signs) ||` : `|| Complete Monthly Horoscope (Aries to Pisces — All 12 Signs) ||`,
        isWeekly ? `Period: ${toEn(input.weekStartDate || input.todayFormatted)}${input.weekEndDate ? ` to ${toEn(input.weekEndDate)}` : ""} (Vikram Samvat ${input.vikramSamvat}${input.shakaSamvat ? ` • Shaka Samvat ${input.shakaSamvat}` : ""})` : `Month: ${toEn(input.gregorianMonthYear || input.todayFormatted)} (${toEn(input.hinduLunarMonths || input.hinduMaas)} • Vikram Samvat ${input.vikramSamvat}${input.shakaSamvat ? ` • Shaka Samvat ${input.shakaSamvat}` : ""})`,
        isWeekly ? `Key Planetary Transits: ${toEn(cleanWeeklySummary)}` : `Major Planetary Transits: ${toEn(cleanMonthlySummary)}`,
        isWeekly && input.weeklyMoonSignsSummary ? `Moon Transit: ${toEn(input.weeklyMoonSignsSummary)}` : !isWeekly && cleanSankrantiSummary ? `Solar Sankranti: ${toEn(cleanSankrantiSummary)}` : null,
        `━━━━━━━━━━━━━━━━━━━━━━`,
        isWeekly || !cleanSubhashitSource ? `Sacred Vedic Subhashit:` : `Sacred Vedic Subhashit (${toEn(cleanSubhashitSource)}):`,
        `"${input.subhashitSanskrit}"`,
        `Meaning: ${toEn(input.subhashitMeaning)}`,
        `━━━━━━━━━━━━━━━━━━━━━━`,
        ``
      ];
      input.items.forEach((item, index) => {
        const cleanRemedyEn = keepUpToSentences(
          toEn(
            stripAnyRemedyLeadPrefix(item.remedyText).replace(/\(शुभ रत्न:.*$/, "").trim()
          ),
          2
        );
        wmEnLines.push(
          `${index + 1}. *${item.rashiEnglishName} (${item.rashiHindiName})* — Positivity: ${item.overallScore}%`,
          `   (Initials: ${item.aksharas} • Lord: ${toEn(item.swami)})`,
          isWeekly ? `• Weekly Planetary Effect: ${toEn(item.transitHighlight || item.chandrabal)}` : `• Monthly Planetary Position: ${toEn(item.transitHighlight || item.chandrabal)}`,
          `• Career: ${keepUpToSentences(toEn(item.careerText), 2)}`,
          `• Finance: ${keepUpToSentences(toEn(item.wealthText), 2)}`,
          `• Family: ${keepUpToSentences(toEn(item.familyText), 2)}`,
          item.healthText ? `• Health: ${keepUpToSentences(toEn(item.healthText), 2)}` : null,
          isWeekly ? `• Weekly Remedy: ${cleanRemedyEn}` : `• Monthly Remedy: ${cleanRemedyEn}`,
          `• Lucky Color: ${toEn(item.luckyColor)} | Lucky Numbers: ${item.luckyNumber}`,
          `──────────────────────`,
          ``
        );
      });
      wmEnLines.push(
        `Note: Positivity percentage (%) is an indicative estimate only; core predictions are based on classical planetary transits and Chandrabala.`,
        `Sarve Bhavantu Sukhinah, Sarve Santu Niramayah`,
        `For Free Vedic Astrology Consultation & Classical Guidance:`,
        `Acharya Pandit Shashank Sharma — Shri Jyotish Vedic Sansthan, Rudrapur (Uttarakhand)`,
        `WhatsApp / Contact: +91 7017279043 | https://www.panditjionline.online/rashifal`,
        ``,
        isWeekly ? `#SaptahikRashifal #WeeklyHoroscope #12RashiRashifal #VedicJyotish #PanditJiOnline` : `#MasikRashifal #MonthlyHoroscope #12RashiRashifal #VedicJyotish #PanditJiOnline`
      );
      return wmEnLines.filter((l) => l !== null && l !== void 0).join("\n");
    }
    const modeHeadingEn = "Today's Complete Horoscope (All 12 Signs — Aries to Pisces)";
    const cleanTithiAllEnSource = stripRedundantPakshaMaasFromTithi(
      input.tithiName,
      input.hinduMaas,
      input.paksha
    );
    const tithiWithEndEn = input.tithiEndTime ? `${toEn(cleanTithiAllEnSource)} (${toEn(input.tithiEndTime)})` : toEn(cleanTithiAllEnSource);
    const nakshatraWithEndEn = input.nakshatraEndTime ? `${toEn(input.nakshatra)} (${toEn(input.nakshatraEndTime)})` : toEn(input.nakshatra);
    const dishaShoolEn = input.dishaShoolRemedy ? `${toEn(input.dishaShool)} (${toEn(input.dishaShoolRemedy)})` : toEn(input.dishaShool);
    const enLines = [
      `॥ Shri Ganeshaya Namah • Om Namo Bhagavate Vasudevaya ॥`,
      `${modeHeadingEn}`,
      `Date: ${toEn(input.todayFormatted)} (Vikram Samvat ${input.vikramSamvat})`,
      `Panchang: ${toEn(input.hinduMaas)}, ${toEn(input.paksha)} • Tithi: ${tithiWithEndEn}`,
      `Moon Nakshatra: ${nakshatraWithEndEn} | Yoga: ${toEn(input.yoga)}`,
      chandraTransitionAll ? `${toEn(chandraTransitionAll.headerLineHi)}${input.suryaRashi ? ` | Sun Sign: ${toEn(input.suryaRashi)}` : ""}` : null,
      `Sunrise: ${toEn(input.sunrise)} | Sunset: ${toEn(input.sunset)}`,
      `• Abhijit Muhurat: ${input.abhijitMuhurat.includes("मान्य नहीं") ? "Not Observed (Prohibited on Wednesday)" : toEn(input.abhijitMuhurat)} | Rahu Kaal: ${toEn(input.rahuKaal)}`,
      `Disha Shool: ${dishaShoolEn}`,
      ...input.sarvajanHitayaRemedyHi ? [
        `━━━━━━━━━━━━━━━━━━━━━━`,
        `Today's Universal Auspicious Remedy (Sarvajan Hitaya):`,
        `${toEn(input.sarvajanHitayaRemedyHi)}`
      ] : [],
      `━━━━━━━━━━━━━━━━━━━━━━`,
      cleanSubhashitSource ? `Sacred Subhashit (${toEn(cleanSubhashitSource)}):` : `Sacred Subhashit:`,
      `"${input.subhashitSanskrit}"`,
      `Meaning: ${toEn(input.subhashitMeaning)}`,
      `━━━━━━━━━━━━━━━━━━━━━━`,
      ``
    ];
    input.items.forEach((item, index) => {
      enLines.push(
        `${index + 1}. *${item.rashiEnglishName} (${item.rashiHindiName})* — Positivity: ${item.overallScore}%`,
        `   (Initials: ${item.aksharas} • Lord: ${toEn(item.swami)})`,
        `• Moon Influence: ${toEn(item.chandrabal)}`,
        `• Career: ${firstSentence2(item.careerText)}`,
        `• Finance: ${firstSentence2(item.wealthText)}`,
        `• Family: ${firstSentence2(item.familyText)}`,
        item.healthText ? `• Health: ${firstSentence2(item.healthText)}` : null,
        `• Remedy: ${firstSentence2(item.remedyText)}`,
        `• Lucky Color: ${toEn(item.luckyColor)} | Lucky Numbers: ${item.luckyNumber}`,
        `──────────────────────`,
        ``
      );
    });
    enLines.push(
      `Note: Positivity percentage (%) is an indicative estimate only; core predictions are based on classical planetary transits and Chandrabala.`,
      `Sarve Bhavantu Sukhinah, Sarve Santu Niramayah`,
      `For Free Vedic Astrology Consultation & Classical Guidance:`,
      `Acharya Pandit Shashank Sharma — Shri Jyotish Vedic Sansthan, Rudrapur (Uttarakhand)`,
      `WhatsApp / Contact: +91 7017279043 | https://www.panditjionline.online/rashifal`,
      ``,
      `#DailyHoroscope #12ZodiacSigns #VedicAstrology #PanditJiOnline`
    );
    return enLines.filter((l) => l !== null && l !== void 0).join("\n");
  }
  const shakaPart = input.shakaSamvat ? ` • शक संवत ${input.shakaSamvat}` : "";
  if (input.mode === "weekly" || input.mode === "monthly") {
    const isWeekly = input.mode === "weekly";
    const wmLines = [
      `॥ श्री गणेशाय नमः • ॐ नमो भगवते वासुदेवाय ॥`,
      isWeekly ? `॥ साप्ताहिक सम्पूर्ण राशिफल (मेष से मीन — सभी १२ राशियां) ॥` : `॥ मासिक सम्पूर्ण राशिफल (मेष से मीन — सभी १२ राशियां) ॥`,
      isWeekly ? `अवधि: ${input.weekStartDate || input.todayFormatted}${input.weekEndDate ? ` से ${input.weekEndDate}` : ""} (विक्रम संवत ${input.vikramSamvat}${shakaPart})` : `मास: ${input.gregorianMonthYear || input.todayFormatted} (${input.hinduLunarMonths || input.hinduMaas} • विक्रम संवत ${input.vikramSamvat}${shakaPart})`,
      isWeekly ? `प्रमुख ग्रह गोचर: ${cleanWeeklySummary}` : `प्रमुख ग्रह गोचर परिवर्तन: ${cleanMonthlySummary}`,
      isWeekly && input.weeklyMoonSignsSummary ? `चन्द्र गोचर: ${input.weeklyMoonSignsSummary.replace(/\s*राशि$/u, "")} राशि` : !isWeekly && cleanSankrantiSummary ? `सूर्य संक्रांति योग: ${cleanSankrantiSummary}` : null,
      `━━━━━━━━━━━━━━━━━━━━━━`,
      isWeekly || !cleanSubhashitSource ? `पावन वैदिक सुभाषित:` : `पावन वैदिक सुभाषित (${cleanSubhashitSource}):`,
      `"${input.subhashitSanskrit}"`,
      `भावार्थ: ${input.subhashitMeaning}`,
      `━━━━━━━━━━━━━━━━━━━━━━`,
      ``
    ];
    input.items.forEach((item, index) => {
      const cleanRemedy = keepUpToSentences(
        stripAnyRemedyLeadPrefix(
          item.remedyText.replace(/\(शुभ रत्न:.*$/, "").replace(/\s*\(\s*(?:मेष|वृषभ|मिथुन|कर्क|सिंह|कन्या|तुला|वृश्चिक|धनु|मकर|कुम्भ|कुंभ|मीन)\s*राशि\s*\)/g, "").trim()
        ),
        2
      );
      wmLines.push(
        `${index + 1}. *${item.rashiHindiName} राशि (${item.rashiEnglishName})* — शुभता: ${item.overallScore}%`,
        `   (नामाक्षर: ${item.aksharas} • स्वामी: ${item.swami})`,
        isWeekly ? `• साप्ताहिक ग्रह प्रभाव: ${cleanIntraSentenceHindiRepetitions(item.transitHighlight || item.chandrabal)}` : `• मासिक ग्रह स्थिति: ${cleanIntraSentenceHindiRepetitions(item.transitHighlight || item.chandrabal)}`,
        `• करियर व कार्य: ${keepUpToSentences(item.careerText, 2)}`,
        `• धन व आर्थिक: ${keepUpToSentences(item.wealthText, 2)}`,
        `• परिवार व संबंध: ${keepUpToSentences(item.familyText, 2)}`,
        item.healthText ? `• स्वास्थ्य: ${keepUpToSentences(item.healthText, 2)}` : null,
        isWeekly ? `• सप्ताह का उपाय: ${cleanRemedy}` : `• मास का उपाय: ${cleanRemedy}`,
        `• शुभ रंग: ${item.luckyColor} | शुभ अंक: ${item.luckyNumber}`,
        `──────────────────────`,
        ``
      );
    });
    const showAllDeepawaliFootnote = !isWeekly && Boolean(
      input.monthlyMajorParvasNoteHi || cleanMonthlySummary && cleanMonthlySummary.includes("दीपावली अमावस्या") || input.items.some(
        (it) => it.transitHighlight && it.transitHighlight.includes("दीपावली अमावस्या") || it.chandrabal && it.chandrabal.includes("दीपावली अमावस्या")
      )
    );
    const hasKartikPurnimaInAll = Boolean(
      cleanMonthlySummary && cleanMonthlySummary.includes("कार्तिक पूर्णिमा")
    );
    const resolvedAllMonthlyParvaNote = input.monthlyMajorParvasNoteHi || (hasKartikPurnimaInAll ? `नोट: इस मास कार्तिक अमावस्या (दीपावली महापर्व) एवं कार्तिक पूर्णिमा (देव दीपावली) के प्रमुख महापर्व हैं—लक्ष्मी पूजन, बहीखाता, दीपदान व शुभ आरंभ हेतु ये तिथियाँ विशेष रूप से ग्राह्य हैं।` : `नोट: कार्तिक अमावस्या (दीपावली महापर्व) होने के कारण लक्ष्मी पूजन, बहीखाता व व्यापारिक शुभ आरंभ हेतु यह तिथि विशेष रूप से ग्राह्य है।`);
    wmLines.push(
      ...showAllDeepawaliFootnote ? [resolvedAllMonthlyParvaNote] : [],
      `नोट: शुभता प्रतिशत (%) केवल सांकेतिक आकलन है; मुख्य फल शास्त्रीय ग्रह गोचर एवं चंद्रबल पर आधारित है।`,
      `सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः॥`,
      `निःशुल्क ज्योतिष परामर्श एवं शास्त्रीय मार्गदर्शन हेतु:`,
      `आचार्य पण्डित शशांक शर्मा — श्री ज्योतिष वैदिक संस्थान, रुद्रपुर (उत्तराखण्ड)`,
      `WhatsApp / संपर्क: +91 7017279043 | https://www.panditjionline.online/rashifal`,
      ``,
      isWeekly ? `#SaptahikRashifal #WeeklyHoroscope #12RashiRashifal #VedicJyotish #PanditJiOnline` : `#MasikRashifal #MonthlyHoroscope #12RashiRashifal #VedicJyotish #PanditJiOnline`
    );
    return localizeSocialPostLines(
      wmLines.filter((l) => l !== null && l !== void 0),
      language,
      input.mode
    );
  }
  const modeHeading = "आज का सम्पूर्ण राशिफल (मेष से मीन — सभी १२ राशियां)";
  const formatAngaWithEnd = (name, endTime) => {
    const cleanName = (name || "").trim();
    const cleanEnd = (endTime || "").trim();
    if (!cleanEnd) return cleanName;
    if (/\d{1,2}:\d{2}|\b(?:AM|PM)\b|तक|फिर|तत्पश्चात/iu.test(cleanName)) return cleanName;
    if (/\)\s*$/.test(cleanName)) {
      return cleanName.replace(/\)\s*$/, ` • ${cleanEnd})`);
    }
    return `${cleanName} (${cleanEnd})`;
  };
  const formatDailyNakshatraHeaderAllHi = (rawNakshatra, rawEndTime) => {
    const raw = (rawNakshatra || "").trim();
    if (!raw) return "";
    const parenParts = [];
    const baseWithoutParens = raw.replace(/\(([^()]*)\)/g, (_, inner) => {
      const cleanedInner = inner.split("•").map(
        (seg) => seg.trim().replace(/गण्डमूल\s*संज्ञक\s*नक्षत्र/gu, "गण्डमूल संज्ञक").replace(/गण्डमूल\s*नक्षत्र/gu, "गण्डमूल संज्ञक").trim()
      ).filter(Boolean);
      parenParts.push(...cleanedInner);
      return " ";
    }).replace(/\s+/g, " ").replace(/\s*नक्षत्र\s*$/u, "").trim();
    const cleanEnd = (rawEndTime || "").trim();
    if (cleanEnd && !parenParts.some((p) => p.includes(cleanEnd) || cleanEnd.includes(p))) {
      parenParts.push(cleanEnd);
    }
    const uniqueParts = Array.from(new Set(parenParts));
    const label = `${baseWithoutParens} नक्षत्र`;
    return uniqueParts.length > 0 ? `${label} (${uniqueParts.join(" • ")})` : label;
  };
  const cleanTithiAllHi = stripRedundantPakshaMaasFromTithi(
    input.tithiName,
    input.hinduMaas,
    input.paksha
  );
  const tithiWithEnd = formatAngaWithEnd(cleanTithiAllHi, input.tithiEndTime);
  const nakshatraWithEnd = formatDailyNakshatraHeaderAllHi(input.nakshatra, input.nakshatraEndTime);
  const yogaWithEnd = formatAngaWithEnd(input.yoga, input.yogaEndTime);
  const karanaWithEnd = input.karana ? formatAngaWithEnd(input.karana, input.karanaEndTime) : "";
  const dishaShoolDisplay = input.dishaShoolRemedy ? `${input.dishaShool} (${input.dishaShoolRemedy})` : input.dishaShool;
  const lines = [
    `॥ श्री गणेशाय नमः • ॐ नमो भगवते वासुदेवाय ॥`,
    `॥ ${modeHeading} ॥`,
    `दिनांक: ${input.todayFormatted} (विक्रम संवत ${input.vikramSamvat}${shakaPart})`,
    `पंचांग: ${input.hinduMaas}, ${input.paksha} • तिथि: ${tithiWithEnd}`,
    `आज का गोचर नक्षत्र: ${nakshatraWithEnd} | योग: ${yogaWithEnd}${karanaWithEnd ? ` | करण: ${karanaWithEnd}` : ""}`,
    chandraTransitionAll ? `${chandraTransitionAll.headerLineHi}${input.suryaRashi ? ` | सूर्य राशि: ${input.suryaRashi}` : ""}` : null,
    `सूर्योदय: ${input.sunrise} | सूर्यास्त: ${input.sunset}`,
    `• अभिजित मुहूर्त: ${input.abhijitMuhurat.includes("मान्य नहीं") ? "मान्य नहीं (बुधवार होने के कारण शास्त्रोक्त वर्जित/त्याज्य)" : input.abhijitMuhurat} | राहुकाल: ${input.rahuKaal}`,
    `दिशाशूल: ${dishaShoolDisplay}`,
    ...input.sarvajanHitayaRemedyHi ? [
      `━━━━━━━━━━━━━━━━━━━━━━`,
      `आज का सर्वजन हिताय विशेष उपाय:`,
      `${input.sarvajanHitayaRemedyHi}`
    ] : [],
    `━━━━━━━━━━━━━━━━━━━━━━`,
    cleanSubhashitSource ? `आज का पावन सुभाषित (${cleanSubhashitSource}):` : `आज का पावन सुभाषित:`,
    `"${input.subhashitSanskrit}"`,
    `भावार्थ: ${input.subhashitMeaning}`,
    `━━━━━━━━━━━━━━━━━━━━━━`,
    ``
  ];
  input.items.forEach((item, index) => {
    const rawCleanRemedy = keepUpToSentences(
      stripAnyRemedyLeadPrefix(
        item.remedyText.replace(/\(शुभ रत्न:.*$/, "").replace(/\s*\(\s*(?:मेष|वृषभ|मिथुन|कर्क|सिंह|कन्या|तुला|वृश्चिक|धनु|मकर|कुम्भ|कुंभ|मीन)\s*राशि\s*\)/g, "").trim()
      ),
      2
    );
    const cleanRemedy = rawCleanRemedy ? /[।॥]$/.test(rawCleanRemedy) ? rawCleanRemedy : `${rawCleanRemedy.replace(/[;,\s]+$/u, "")}।` : "";
    lines.push(
      `${index + 1}. *${item.rashiHindiName} राशि (${item.rashiEnglishName})* — शुभता: ${item.overallScore}%`,
      `   (नामाक्षर: ${item.aksharas} • स्वामी: ${item.swami})`,
      `• चंद्र प्रभाव: ${cleanIntraSentenceHindiRepetitions(item.chandrabal)}`,
      `• करियर व कार्य: ${keepUpToSentences(item.careerText, 2)}`,
      `• धन व आर्थिक: ${keepUpToSentences(item.wealthText, 2)}`,
      `• परिवार व संबंध: ${keepUpToSentences(item.familyText, 2)}`,
      item.healthText ? `• स्वास्थ्य: ${keepUpToSentences(item.healthText, 2)}` : null,
      `• आज का उपाय: ${cleanRemedy}`,
      `• शुभ रंग: ${item.luckyColor} | शुभ अंक: ${item.luckyNumber}`,
      `──────────────────────`,
      ``
    );
  });
  lines.push(
    `नोट: शुभता प्रतिशत (%) केवल सांकेतिक आकलन है; मुख्य फल शास्त्रीय ग्रह गोचर एवं चंद्रबल पर आधारित है।`,
    `सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः॥`,
    `निःशुल्क ज्योतिष परामर्श एवं शास्त्रीय मार्गदर्शन हेतु:`,
    `आचार्य पण्डित शशांक शर्मा — श्री ज्योतिष वैदिक संस्थान, रुद्रपुर (उत्तराखण्ड)`,
    `WhatsApp / संपर्क: +91 7017279043 | https://www.panditjionline.online/rashifal`,
    ``,
    `#AajKaRashifal #12RashiRashifal #MeshToMeen #VedicPanchang #PanditJiOnline`
  );
  return localizeSocialPostLines(
    lines.filter((l) => l !== null && l !== void 0),
    language,
    "daily"
  );
}
function buildFullDailyPanchangPost(dayPanchang, locationName = "रुद्रपुर (उत्तराखण्ड • IST)", language = "hi") {
  const panchangSaral = buildPanchangSaralArthaHi(dayPanchang);
  if (language === "en") {
    const cleanLocEn = toEn(locationName.split(",")[0].trim() || "Rudrapur");
    const safeDispEn = dayPanchang.shastriyaSafeDisplay;
    const shubhDayChogEn = dayPanchang.dayChoghadiya.filter(
      (c) => ["amrit", "shubh", "labh", "char"].includes(c.type) && c.kaalBadge !== "राहुकाल" && c.kaalBadge !== "यमगण्ड"
    ).map((c) => `• ${toEn(c.hindiName)} Choghadiya: ${toEn(c.safeShareTime || c.time)}`).join("\n");
    const shubhNightChogEn = dayPanchang.nightChoghadiya.filter((c) => ["amrit", "shubh", "labh", "char"].includes(c.type)).map((c) => `• Night ${toEn(c.hindiName)}: ${toEn(c.safeShareTime || c.time)}`).join("\n");
    const eclipsedDayChogEn = dayPanchang.dayChoghadiya.filter(
      (c) => ["amrit", "shubh", "labh", "char"].includes(c.type) && (c.isKaalEclipsed || c.kaalBadge === "राहुकाल" || c.kaalBadge === "यमगण्ड")
    ).map((c) => `${toEn(c.hindiName)} (${toEn(c.eclipsedByHi || c.kaalBadge || "Rahu/Yama")}): ${toEn(c.safeShareTime || c.time)}`).join(", ");
    const ashubhDayChogEn = dayPanchang.dayChoghadiya.filter((c) => ["rog", "kaal", "udveg"].includes(c.type)).map((c) => `${toEn(c.hindiName)}: ${toEn(c.safeShareTime || c.time)}`).join(", ");
    const ashubhNightChogEn = dayPanchang.nightChoghadiya.filter((c) => ["rog", "kaal", "udveg"].includes(c.type)).map((c) => `${toEn(c.hindiName)}: ${toEn(c.safeShareTime || c.time)}`).join(", ");
    const formatCleanLimbEn = (name, endStr) => {
      const cleanEnd = toEn(
        (endStr || "").replace(/,\s*फिर\s+/gu, " | then ").replace(/,\s*तत्पश्चात\s+/gu, " | then ").trim()
      );
      return cleanEnd ? `${toEn(name)} — ${cleanEnd}` : toEn(name);
    };
    const isTodayDate = dayPanchang.isToday !== false;
    const dateEnStr = toEn(dayPanchang.formattedDateHindi);
    const primarySamvatEn = resolvePrimarySamvatsaraForLocation(
      dayPanchang,
      dayPanchang.dailyPanchang?.location || locationName
    );
    const moonsetEnStr = toEn(dayPanchang.moonset || "आज चन्द्रास्त नहीं");
    const ratrimanaEnStr = toEn(dayPanchang.ratrimanaFormatted || "");
    const tzLabelEn = dayPanchang.timezoneShortLabel || "IST";
    const traditionLabelEn = dayPanchang.tradition === "AMANTA" ? "Amanta Tradition" : "Purnimanta Tradition";
    const shastricEn = buildPanchangShastricSummaryForShare(dayPanchang);
    const abhijitConflictEn = dayPanchang.abhijitConflict;
    const enLines = [
      `|| Shri Ganeshaya Namah • Shri Jyotish Vedic Sansthan ||`,
      isTodayDate ? `Today's Authentic Drik Ganita Panchang & Shubh Muhurat` : `Authentic Drik Ganita Panchang & Shubh Muhurat for ${dateEnStr}`,
      `Date: ${dateEnStr} (${toEn(dayPanchang.vaarHindi)})`,
      `Calculation Location: ${cleanLocEn} (${tzLabelEn} • ${traditionLabelEn} • Lahiri Drik Ganita)`,
      primarySamvatEn.shareSamvatEraLineEn,
      toEn(primarySamvatEn.shareSamvatsaraLineEn),
      `Hindu Month: ${toEn(dayPanchang.hinduMaas)} | Paksha: ${toEn(dayPanchang.paksha)}`,
      `Season (Ritu): ${toEn(dayPanchang.ritu)} | Ayana: ${toEn(dayPanchang.ayana)}`,
      `━━━━━━━━━━━━━━━━━━━━━━`,
      ``,
      `Five Core Limbs (Panchang) with End Times:`,
      `1. Tithi: ${formatCleanLimbEn(dayPanchang.tithiName, dayPanchang.tithiEndTime)}`,
      `2. Weekday (Vaar): ${toEn(dayPanchang.vaarHindi)}`,
      `3. Nakshatra: ${formatCleanLimbEn(dayPanchang.nakshatra, dayPanchang.nakshatraEndTime)}`,
      `4. Yoga: ${formatCleanLimbEn(dayPanchang.yoga, dayPanchang.yogaEndTime)}`,
      `5. Karana: ${formatCleanLimbEn(dayPanchang.karana, dayPanchang.karanaEndTime)}`,
      ``,
      `Sun & Moon Timings (${tzLabelEn}):`,
      `• Sunrise: ${toEn(dayPanchang.sunrise)} | Sunset: ${toEn(dayPanchang.sunset)}`,
      `• Moonrise: ${toEn(dayPanchang.moonrise)} | Moonset: ${moonsetEnStr}`,
      `• Moon Sign (Chandra Rashi): ${toEn(dayPanchang.chandraRashi)} | Sun Sign: ${toEn(dayPanchang.suryaRashi)}`,
      ...dayPanchang.suryaNakshatra ? [`• Sun Nakshatra (Surya Nakshatra): ${toEn(dayPanchang.suryaNakshatra)}`] : [],
      `• Total Day Duration: ${toEn(dayPanchang.dinamanaFormatted)}${ratrimanaEnStr ? ` | Total Night Duration: ${ratrimanaEnStr}` : ""}`
    ];
    const pradoshDisplayEn = getDynamicPradoshKaalDisplay(dayPanchang);
    const indiaEclipseEn = dayPanchang.indiaEclipse;
    if (dayPanchang.festivalName || indiaEclipseEn) {
      enLines.push(
        `━━━━━━━━━━━━━━━━━━━━━━`,
        isTodayDate ? `Today's Special Festival / Vrat:` : `Special Festival / Vrat (${dateEnStr}):`,
        ...indiaEclipseEn?.isVerifiedIndiaVisible ? [
          `• ${toEn(indiaEclipseEn.title)}`,
          `• Eclipse & Sutak Timings: ${toEn(indiaEclipseEn.timingsLineHi)}`
        ] : indiaEclipseEn?.isGlobalIndiaInvisible ? [
          `• ${toEn(indiaEclipseEn.title)}${indiaEclipseEn.globalWindow ? ` (Global Window: ${toEn(indiaEclipseEn.globalWindow)})` : ""}`,
          `• Shastric Rule: This eclipse is NOT visible in India; therefore Sutak and eclipse restrictions do NOT apply in India — all daily worship and auspicious works remain valid.`
        ] : indiaEclipseEn?.isNodalPotential ? [`• ${toEn(indiaEclipseEn.title)}`] : [],
        ...dayPanchang.festivalName ? [`• ${toEn(dayPanchang.festivalName)}`] : [],
        ...dayPanchang.festivalName && dayPanchang.festivalDescription ? [`• Significance: ${toEn(dayPanchang.festivalDescription)}`] : [],
        ...pradoshDisplayEn ? [`• Pradosh Kaal Timing: ${pradoshDisplayEn.en}`] : [],
        ...dayPanchang.diwaliVrishabhaLagnaHi ? [`• Deepawali Sthir Vrishabha Lagna (Lakshmi Puja): ${toEn(dayPanchang.diwaliVrishabhaLagnaHi)}`] : [],
        ...dayPanchang.sankrantiPunyaKaalHi ? [
          `• Sankranti Punyakaal: ${toEn(dayPanchang.sankrantiPunyaKaalHi)}`,
          ...dayPanchang.sankrantiMahaPunyaKaalHi ? [`• Sankranti Maha-Punyakaal: ${toEn(dayPanchang.sankrantiMahaPunyaKaalHi)}`] : []
        ] : [],
        ...dayPanchang.paranaWindowText ? [`• Vrat Parana: ${toEn(dayPanchang.paranaWindowText)}`] : [],
        indiaEclipseEn?.isVerifiedIndiaVisible ? `• Puja Guidance: ${toEn(indiaEclipseEn.pujaInstructionHi)}` : dayPanchang.festivalName && dayPanchang.festivalPujaHint ? `• Puja Guidance: ${toEn(dayPanchang.festivalPujaHint)}` : ""
      );
    } else if (dayPanchang.sankrantiPunyaKaalHi) {
      enLines.push(
        `━━━━━━━━━━━━━━━━━━━━━━`,
        `Sankranti Punyakaal:`,
        `• Sankranti: ${toEn(dayPanchang.sankrantiName || "")}${dayPanchang.sankrantiIngressTimeHi ? ` (Ingress: ${toEn(dayPanchang.sankrantiIngressTimeHi)})` : ""}`,
        `• Punyakaal: ${toEn(dayPanchang.sankrantiPunyaKaalHi)}`,
        ...dayPanchang.sankrantiMahaPunyaKaalHi ? [`• Maha-Punyakaal: ${toEn(dayPanchang.sankrantiMahaPunyaKaalHi)}`] : []
      );
    }
    const specialEnItems = (dayPanchang.shubhMuhurats || []).map(
      (m) => `• ${toEn(formatNextDayRangeHi(m.label))}`
    );
    const hasSarvarthaEn = (dayPanchang.shubhMuhurats || []).some(
      (m) => m.label.includes("सर्वार्थ सिद्धि") || m.label.includes("अमृत सिद्धि")
    );
    if (!hasSarvarthaEn) {
      if (dayPanchang.sarvarthaSiddhiYoga) {
        specialEnItems.push(`• Sarvartha Siddhi Yoga: ${toEn(formatNextDayRangeHi(dayPanchang.sarvarthaSiddhiYoga))}`);
      }
      if (dayPanchang.amritSiddhiYoga) {
        specialEnItems.push(`• Amrit Siddhi Yoga: ${toEn(formatNextDayRangeHi(dayPanchang.amritSiddhiYoga))}`);
      }
    }
    const hasPushkarEn = (dayPanchang.shubhMuhurats || []).some(
      (m) => m.label.includes("त्रिपुष्कर") || m.label.includes("द्विपुष्कर")
    );
    if (!hasPushkarEn) {
      if (dayPanchang.tripushkarYoga) {
        specialEnItems.push(`• Tripushkar Yoga: ${toEn(formatNextDayRangeHi(dayPanchang.tripushkarYoga))}`);
      } else if (dayPanchang.dwipushkarYoga) {
        specialEnItems.push(`• Dwipushkar Yoga: ${toEn(formatNextDayRangeHi(dayPanchang.dwipushkarYoga))}`);
      }
    }
    if (specialEnItems.length > 0) {
      enLines.push(
        ``,
        `Special Auspicious Yogas Today:`,
        specialEnItems.join("\n")
      );
    }
    enLines.push(
      `━━━━━━━━━━━━━━━━━━━━━━`,
      `Today's Auspicious Muhurat & Timings:`,
      `• Brahma Muhurat: ${toEn(safeDispEn?.brahmaMuhurat || dayPanchang.brahmaMuhurat)}`,
      dayPanchang.abhijitMuhurat.includes("मान्य नहीं") ? `• Abhijit Muhurat: Not Observed (Prohibited on Wednesday per Shastra)` : abhijitConflictEn?.hasOverlap ? `• Abhijit Muhurat (Full Window): ${toEn(abhijitConflictEn.safeFullWindowHi || abhijitConflictEn.fullWindowHi)}` : `• Abhijit Muhurat (Best): ${toEn(safeDispEn?.abhijitFull || dayPanchang.abhijitMuhurat)}`,
      ...abhijitConflictEn?.hasOverlap && abhijitConflictEn.warningMessageEn ? [`  ${toEn(abhijitConflictEn.warningMessageEn)}`] : [],
      `• Amrit Kaal: ${toEn(formatNextDayRangeHi(dayPanchang.amritKaal))}`,
      (() => {
        const tzEn = resolveSafeTimezone(dayPanchang.dailyPanchang?.location || { timezone: "Asia/Kolkata", tzOffsetHours: 5.5 });
        const vijayOverlapEn = getMuhuratKaalOverlapTag(dayPanchang.exactEpochsMs, "vijay", tzEn);
        const vijayBaseEn = toEn(stripLegacyKaalConflictTag(safeDispEn?.vijayMuhurat || dayPanchang.vijayMuhurat));
        return `• Vijay Muhurat: ${vijayBaseEn}${vijayOverlapEn.en ? ` ${vijayOverlapEn.en}` : ""}`;
      })(),
      ...dayPanchang.godhuliMuhurat ? [
        (() => {
          const tzEn = resolveSafeTimezone(dayPanchang.dailyPanchang?.location || { timezone: "Asia/Kolkata", tzOffsetHours: 5.5 });
          const godhuliOverlapEn = getMuhuratKaalOverlapTag(dayPanchang.exactEpochsMs, "godhuli", tzEn);
          const godhuliBaseEn = toEn(stripLegacyKaalConflictTag(safeDispEn?.godhuliMuhurat || dayPanchang.godhuliMuhurat));
          return `• Godhuli Muhurat: ${godhuliBaseEn}${godhuliOverlapEn.en ? ` ${godhuliOverlapEn.en}` : ""}`;
        })()
      ] : [],
      dayPanchang.gulikaDurmuhurtaOverlapHi ? `• Gulika Kaal (${formatEnAshtamanshaPart(dayPanchang.gulikaKaalPart)}): ${toEn(safeDispEn?.gulikaKaal || dayPanchang.gulikaKaal)} (Auspicious — Favorable for accumulation & new initiatives • ${toEn(dayPanchang.gulikaDurmuhurtaOverlapHi)})` : `• Gulika Kaal (${formatEnAshtamanshaPart(dayPanchang.gulikaKaalPart)}): ${toEn(safeDispEn?.gulikaKaal || dayPanchang.gulikaKaal)} ${BALANCED_GULIKA_TAG_EN}`,
      `${toEn(panchangSaral.shubhMuhuratHi)}`,
      ``,
      `Today's Inauspicious / Avoidable Timings:`,
      ...indiaEclipseEn?.isVerifiedIndiaVisible && indiaEclipseEn.ashubhLineHi ? [`• ${toEn(indiaEclipseEn.ashubhLineHi)}`] : [],
      `• Rahu Kaal (${formatEnAshtamanshaPart(dayPanchang.rahuKaalPart)}): ${toEn(safeDispEn?.rahuKaal || dayPanchang.rahuKaal)}`,
      `• Yamagandam (${formatEnAshtamanshaPart(dayPanchang.yamagandamPart)}): ${toEn(safeDispEn?.yamagandam || dayPanchang.yamagandam)}`,
      ...dayPanchang.durMuhurta ? [`• Durmuhurta: ${toEn(formatDurmuhurtaForShareHi(dayPanchang.durMuhurta))}`] : [],
      ...dayPanchang.bhadraKaal ? [`• Bhadra Kaal: ${toEn(dayPanchang.bhadraKaal)}`] : [`• Bhadra: No Bhadra today.`],
      ...dayPanchang.panchakKaal ? [`• ${toEn(formatDynamicPanchakHi(dayPanchang))}`] : [],
      ...dayPanchang.gandmoolNakshatra ? [`• Gandmool Alert: ${toEn(dayPanchang.gandmoolNakshatra)}`] : [],
      `• Disha Shool: ${toEn(dayPanchang.dishaShool)} (${toEn(dayPanchang.dishaShoolRemedy)})`,
      `${toEn(panchangSaral.ashubhKaalHi)}`,
      `━━━━━━━━━━━━━━━━━━━━━━`,
      `Today's Auspicious Choghadiya Muhurat:`,
      `Daytime Shubh Choghadiya:`,
      shubhDayChogEn,
      `Nighttime Shubh Choghadiya:`,
      shubhNightChogEn,
      ...eclipsedDayChogEn ? [`Rahukaal/Yamagand-Eclipsed (Avoidable) Choghadiya: ${eclipsedDayChogEn}`] : [],
      `Pure Inauspicious Choghadiya (Udveg, Kaal, Rog): Day: ${ashubhDayChogEn} | Night: ${ashubhNightChogEn}`,
      `${toEn(panchangSaral.choghadiyaHi)}`,
      ...dayPanchang.kartikadiFootnoteHi ? [toEn(dayPanchang.kartikadiFootnoteHi)] : [],
      ...dayPanchang.deltaTNoteHi ? [toEn(dayPanchang.deltaTNoteHi)] : [],
      `Note: Choghadiya and Muhurat calculations use exact second precision (HH:MM:SS); a ±1 minute variance from minute-rounded calendars is normal.`,
      `━━━━━━━━━━━━━━━━━━━━━━`,
      `${shastricEn.titleEn}:`,
      `${toEn(shastricEn.textEn)}`,
      `${toEn(panchangSaral.vivechanHi)}`,
      `━━━━━━━━━━━━━━━━━━━━━━`,
      `Today's Presiding Deity (${toEn(dayPanchang.festivalDeity)}) Sacred Mantra:`,
      `"${dayPanchang.festivalMantra}"`,
      ...dayPanchang.festivalMantraMeaning ? [`Meaning: ${toEn(dayPanchang.festivalMantraMeaning)}`] : [],
      `━━━━━━━━━━━━━━━━━━━━━━`,
      `Contact for Jyotish Consultation, Shubh Muhurat & Vedic Puja:`,
      `Acharya Pandit Shashank Sharma`,
      `Location: Shri Jyotish Vedic Sansthan, Rudrapur (Uttarakhand)`,
      `WhatsApp / Call: +91 7017279043`,
      `Check Live Daily Panchang, Choghadiya & Horoscope:`,
      `https://www.panditjionline.online/panchang`,
      ``,
      `#AajKaPanchang #DailyPanchang #ShubhMuhurat #Choghadiya #RahuKaal #VedicPanchang #PanditJiOnline #PanditShashankSharma`
    );
    return enLines.filter((line) => line !== "" && line !== void 0).join("\n");
  }
  const cleanLoc = resolveHindiCityDisplayName(locationName.split(",")[0].trim() || "रुद्रपुर");
  const safeDispHi = dayPanchang.shastriyaSafeDisplay;
  const shubhDayChog = dayPanchang.dayChoghadiya.filter(
    (c) => ["amrit", "shubh", "labh", "char"].includes(c.type) && !c.isKaalEclipsed && c.kaalBadge !== "राहुकाल" && c.kaalBadge !== "यमगण्ड"
  ).map((c) => `• ${c.hindiName} चौघड़िया: ${c.safeShareTime || c.time}`).join("\n");
  const shubhNightChog = dayPanchang.nightChoghadiya.filter((c) => ["amrit", "shubh", "labh", "char"].includes(c.type)).map((c) => `• रात्रि ${c.hindiName}: ${c.safeShareTime || c.time}`).join("\n");
  const compactSlotTimeHi = (raw) => (raw || "").replace(/सुबह |प्रातः |पूर्वाह्न |दोपहर |सायं |शाम |रात्रि |मध्यरात्रि /gu, "").trim();
  const eclipsedDayChogCompact = dayPanchang.eclipsedChoghadiyaLineHi || (() => {
    const items = dayPanchang.dayChoghadiya.filter(
      (c) => ["amrit", "shubh", "labh", "char"].includes(c.type) && (c.isKaalEclipsed || c.kaalBadge === "राहुकाल" || c.kaalBadge === "यमगण्ड")
    ).map(
      (c) => `${c.hindiName} (${c.eclipsedByHi || c.kaalBadge || "राहुकाल/यमगण्ड"}): ${compactSlotTimeHi(c.safeShareTime || c.time)}`
    );
    return items.length > 0 ? `राहुकाल/यमगण्ड बाधित (त्याज्य) चौघड़िया: ${items.join(", ")}` : "";
  })();
  const ashubhDayChogCompact = dayPanchang.pureAshubhDayChoghadiyaLineHi || dayPanchang.dayChoghadiya.filter((c) => ["rog", "kaal", "udveg"].includes(c.type)).map((c) => `${c.hindiName}: ${compactSlotTimeHi(c.safeShareTime || c.time)}`).join(", ");
  const ashubhNightChogCompact = dayPanchang.pureAshubhNightChoghadiyaLineHi || dayPanchang.nightChoghadiya.filter((c) => ["rog", "kaal", "udveg"].includes(c.type)).map((c) => `${c.hindiName}: ${compactSlotTimeHi(c.safeShareTime || c.time)}`).join(", ");
  const isTodayDateHi = dayPanchang.isToday !== false;
  const topTitleHi = isTodayDateHi ? `॥ आज का सम्पूर्ण दृक गणित पंचांग एवं शुभ मुहूर्त ॥` : `॥ दिनांक ${dayPanchang.formattedDateHindi} का सम्पूर्ण दृक गणित पंचांग एवं शुभ मुहूर्त ॥`;
  const mantraKindLabel = resolveMantraOrShlokaLabelHi(dayPanchang.festivalMantra);
  const primarySamvatHi = resolvePrimarySamvatsaraForLocation(
    dayPanchang,
    dayPanchang.dailyPanchang?.location || locationName
  );
  const moonsetHiStr = dayPanchang.moonset || "आज चन्द्रास्त नहीं";
  const ratrimanaHiStr = dayPanchang.ratrimanaFormatted || "";
  const tzLabelHi = dayPanchang.timezoneShortLabel || "IST";
  const regionalTraditionHi = (dayPanchang.regionalTraditionBadgeHi || (dayPanchang.tradition === "AMANTA" ? "अमांत परंपरा • शालिवाहन शक" : "पूर्णिमांत परंपरा • उत्तर भारतीय विक्रम संवत")).replace(/\(\s*उत्तर भारतीय विक्रम\s*\)/gu, "• उत्तर भारतीय विक्रम संवत").replace(/\(\s*शालिवाहन शक\s*\)/gu, "• शालिवाहन शक").replace(/\s*—\s*•/gu, " •").replace(/\s{2,}/g, " ").trim();
  const shastricHi = buildPanchangShastricSummaryForShare(dayPanchang);
  const abhijitConflictHi = dayPanchang.abhijitConflict;
  const formatCleanTithiShareLineHi = (name, endStr) => {
    const cleanEnd = (endStr || "").replace(/,\s*फिर\s+/gu, " | तत्पश्चात ").replace(/,\s*तत्पश्चात\s+/gu, " | तत्पश्चात ").trim();
    if (!cleanEnd) return name;
    return `${name} — ${cleanEnd}`;
  };
  const cleanLocWithoutTz = cleanLoc.replace(/\s*\(?\bIST\b\)?/gi, "").replace(/\s{2,}/g, " ").trim();
  const rituDisplayHi = dayPanchang.ritu.includes("सौरमान") ? dayPanchang.ritu : `${dayPanchang.ritu} (सौरमान आधारित)`;
  const lines = [
    `॥ श्री गणेशाय नमः • श्री ज्योतिष वैदिक संस्थान ॥`,
    topTitleHi,
    `दिनांक: ${dayPanchang.formattedDateHindi} (${dayPanchang.vaarHindi})`,
    `गणना स्थान: ${cleanLocWithoutTz} (${tzLabelHi} • ${regionalTraditionHi} • लाहिड़ी दृक गणित)`,
    primarySamvatHi.shareSamvatEraLineHi,
    primarySamvatHi.shareSamvatsaraLineHi,
    `मास: ${dayPanchang.hinduMaas} | पक्ष: ${dayPanchang.paksha}`,
    `ऋतु: ${rituDisplayHi} | अयन: ${dayPanchang.ayana}`,
    `━━━━━━━━━━━━━━━━━━━━━━`,
    ``,
    `पंचांग के ५ मुख्य अंग (समाप्ति समय सहित • ${tzLabelHi}):`,
    `1. तिथि: ${formatCleanTithiShareLineHi(dayPanchang.tithiName, dayPanchang.tithiEndTime)}`,
    `2. वार: ${dayPanchang.vaarHindi}`,
    `3. नक्षत्र: ${tagGandmoolNakshatrasHi(formatCleanTithiShareLineHi(dayPanchang.nakshatra, dayPanchang.nakshatraEndTime))}`,
    `4. योग: ${formatCleanTithiShareLineHi(dayPanchang.yoga, dayPanchang.yogaEndTime)}`,
    `5. करण: ${formatCleanTithiShareLineHi(dayPanchang.karana, dayPanchang.karanaEndTime)}`,
    ``,
    `सूर्य एवं चन्द्रमा की स्थिति (${tzLabelHi}):`,
    `• सूर्योदय: ${dayPanchang.sunrise} | सूर्यास्त: ${dayPanchang.sunset}`,
    `• चन्द्रोदय: ${dayPanchang.moonrise} | चन्द्रास्त: ${moonsetHiStr}`,
    `• चन्द्र राशि: ${dayPanchang.chandraRashi} | सूर्य राशि: ${dayPanchang.suryaRashi}`,
    ...dayPanchang.suryaNakshatra ? [`• सूर्य नक्षत्र: ${dayPanchang.suryaNakshatra}`] : [],
    `• कुल दिनमान: ${dayPanchang.dinamanaFormatted}${ratrimanaHiStr ? ` | कुल रात्रिमान: ${ratrimanaHiStr}` : ""}`
  ];
  const pradoshDisplayHi = getDynamicPradoshKaalDisplay(dayPanchang);
  const indiaEclipseHi = dayPanchang.indiaEclipse;
  if (dayPanchang.festivalName || indiaEclipseHi) {
    lines.push(
      `━━━━━━━━━━━━━━━━━━━━━━`,
      isTodayDateHi ? `आज का विशेष पर्व / व्रत संयोग:` : `विशेष पर्व / व्रत संयोग (${dayPanchang.formattedDateHindi}):`,
      ...indiaEclipseHi?.isVerifiedIndiaVisible ? [
        `• ${indiaEclipseHi.title}`,
        `• ग्रहण एवं सूतक समय: ${indiaEclipseHi.timingsLineHi}`
      ] : indiaEclipseHi?.isGlobalIndiaInvisible ? [
        `• ${indiaEclipseHi.globalWindow ? /\)\s*$/u.test(indiaEclipseHi.title) ? indiaEclipseHi.title.replace(/\)\s*$/u, ` • वैश्विक अवधि: ${indiaEclipseHi.globalWindow})`) : `${indiaEclipseHi.title} (वैश्विक अवधि: ${indiaEclipseHi.globalWindow})` : indiaEclipseHi.title}`,
        `• शास्त्रीय नियम: ${indiaEclipseHi.invisibleRuleLineHi}`
      ] : indiaEclipseHi?.isNodalPotential ? [`• ${indiaEclipseHi.title}`] : [],
      ...dayPanchang.festivalName ? [`• ${dayPanchang.festivalName}`] : [],
      ...dayPanchang.festivalName && dayPanchang.festivalDescription ? [`• महत्व: ${dayPanchang.festivalDescription}`] : [],
      ...pradoshDisplayHi ? [`• प्रदोष काल समय: ${pradoshDisplayHi.hi}`] : [],
      ...dayPanchang.diwaliVrishabhaLagnaHi ? [`• दीपावली स्थिर वृषभ लग्न (लक्ष्मी पूजन श्रेष्ठ मुहूर्त): ${dayPanchang.diwaliVrishabhaLagnaHi}`] : [],
      ...dayPanchang.sankrantiPunyaKaalHi ? [
        `• संक्रांति पुण्यकाल: ${dayPanchang.sankrantiPunyaKaalHi}`,
        ...dayPanchang.sankrantiMahaPunyaKaalHi ? [`• संक्रांति महापुण्यकाल: ${dayPanchang.sankrantiMahaPunyaKaalHi}`] : []
      ] : [],
      ...dayPanchang.paranaWindowText ? [`• व्रत पारण काल: ${dayPanchang.paranaWindowText}`] : [],
      indiaEclipseHi?.isVerifiedIndiaVisible ? `• पूजा निर्देश: ${indiaEclipseHi.pujaInstructionHi}` : dayPanchang.festivalName && dayPanchang.festivalPujaHint ? `• पूजा निर्देश: ${dayPanchang.festivalPujaHint}` : ""
    );
  } else if (dayPanchang.sankrantiPunyaKaalHi) {
    lines.push(
      `━━━━━━━━━━━━━━━━━━━━━━`,
      `संक्रांति एवं पुण्यकाल विचार:`,
      `• संक्रांति: ${dayPanchang.sankrantiName || ""}${dayPanchang.sankrantiIngressTimeHi ? ` (संक्रमण: ${dayPanchang.sankrantiIngressTimeHi})` : ""}`,
      `• पुण्यकाल: ${dayPanchang.sankrantiPunyaKaalHi}`,
      ...dayPanchang.sankrantiMahaPunyaKaalHi ? [`• महापुण्यकाल: ${dayPanchang.sankrantiMahaPunyaKaalHi}`] : []
    );
  }
  const specialHiItems = (dayPanchang.shubhMuhurats || []).map(
    (m) => `• ${tagGandmoolNakshatrasHi(formatNextDayRangeHi(m.label))}`
  );
  const hasSarvarthaHi = (dayPanchang.shubhMuhurats || []).some(
    (m) => m.label.includes("सर्वार्थ सिद्धि") || m.label.includes("अमृत सिद्धि")
  );
  if (!hasSarvarthaHi) {
    if (dayPanchang.sarvarthaSiddhiYoga) {
      specialHiItems.push(
        `• सर्वार्थ सिद्धि योग: ${tagGandmoolNakshatrasHi(formatNextDayRangeHi(dayPanchang.sarvarthaSiddhiYoga))}`
      );
    }
    if (dayPanchang.amritSiddhiYoga) {
      specialHiItems.push(
        `• अमृत सिद्धि योग: ${tagGandmoolNakshatrasHi(formatNextDayRangeHi(dayPanchang.amritSiddhiYoga))}`
      );
    }
  }
  const hasPushkarHi = (dayPanchang.shubhMuhurats || []).some(
    (m) => m.label.includes("त्रिपुष्कर") || m.label.includes("द्विपुष्कर")
  );
  if (!hasPushkarHi) {
    if (dayPanchang.tripushkarYoga) {
      specialHiItems.push(
        `• त्रिपुष्कर योग: ${tagGandmoolNakshatrasHi(formatNextDayRangeHi(dayPanchang.tripushkarYoga))}`
      );
    } else if (dayPanchang.dwipushkarYoga) {
      specialHiItems.push(
        `• द्विपुष्कर योग: ${tagGandmoolNakshatrasHi(formatNextDayRangeHi(dayPanchang.dwipushkarYoga))}`
      );
    }
  }
  if (dayPanchang.sankrantiName && dayPanchang.panchakKaal && !specialHiItems.some((it) => it.includes("सूर्यास्त के साथ संक्रांति का प्रत्यक्ष पुण्यकाल"))) {
    specialHiItems.push(
      `• सूर्यास्त के साथ संक्रांति का प्रत्यक्ष पुण्यकाल समाप्त होने तथा पंचक काल प्रारंभ होने के कारण केवल शास्त्रोक्त शुभ क्रय ही करें, दक्षिण दिशा यात्रा व वर्जित पंचक कार्य टालें।`
    );
  }
  if (specialHiItems.length > 0) {
    lines.push(
      ``,
      isTodayDateHi ? `आज उपलब्ध विशेष मांगलिक योग:` : `उपलब्ध विशेष मांगलिक योग (${dayPanchang.formattedDateHindi}):`,
      specialHiItems.join("\n")
    );
  }
  lines.push(
    `━━━━━━━━━━━━━━━━━━━━━━`,
    isTodayDateHi ? `आज के शुभ मुहूर्त एवं योग:` : `शुभ मुहूर्त एवं योग (${dayPanchang.formattedDateHindi}):`,
    `• ब्रह्म मुहूर्त: ${formatNextDayRangeHi(dayPanchang.brahmaMuhurat)}`,
    dayPanchang.abhijitMuhurat.includes("मान्य नहीं") ? `• अभिजित मुहूर्त: ${dayPanchang.abhijitMuhurat}` : dayPanchang.kalVedhaReport?.abhijit?.inlineAlertHi ? `• अभिजित मुहूर्त: ${formatNextDayRangeHi(dayPanchang.abhijitMuhurat)}` : abhijitConflictHi?.hasOverlap ? (() => {
      const fullWin = formatNextDayRangeHi(abhijitConflictHi.safeFullWindowHi || abhijitConflictHi.fullWindowHi);
      const kaalHi = (abhijitConflictHi.collidingKaalsHi || []).join(" व ") || "अशुभ काल";
      if (abhijitConflictHi.isFullyPolluted) {
        return `• अभिजित मुहूर्त: ${fullWin} — ⚠️ पूर्णतः वर्जित (${kaalHi} व्याप्त)`;
      }
      const ovWin = formatNextDayRangeHi(abhijitConflictHi.safeOverlapWindowHi || abhijitConflictHi.overlapWindowHi || "");
      return `• अभिजित मुहूर्त: ${fullWin} — ⚠️ चेतावनी: ${ovWin} भाग ${kaalHi} युक्त, शेष भाग शुद्ध है।`;
    })() : `• अभिजित मुहूर्त (सर्वश्रेष्ठ): ${formatNextDayRangeHi(safeDispHi?.abhijitFull || dayPanchang.abhijitMuhurat)}`,
    `• अमृत काल: ${tagGandmoolNakshatrasHi(formatNextDayRangeHi(dayPanchang.amritKaal))}`,
    (() => {
      if (dayPanchang.kalVedhaReport?.vijay?.inlineAlertHi) {
        return `• विजय मुहूर्त: ${formatNextDayRangeHi(dayPanchang.vijayMuhurat)}`;
      }
      const tzHi = resolveSafeTimezone(dayPanchang.dailyPanchang?.location || { timezone: "Asia/Kolkata", tzOffsetHours: 5.5 });
      const vijayOverlapHi = getMuhuratKaalOverlapTag(dayPanchang.exactEpochsMs, "vijay", tzHi);
      const vijayBaseHi = formatNextDayRangeHi(
        stripLegacyKaalConflictTag(safeDispHi?.vijayMuhurat || dayPanchang.vijayMuhurat)
      );
      return `• विजय मुहूर्त: ${vijayBaseHi}${vijayOverlapHi.hi ? ` ${vijayOverlapHi.hi}` : ""}`;
    })(),
    ...dayPanchang.godhuliMuhurat ? [
      (() => {
        if (dayPanchang.kalVedhaReport?.godhuli?.inlineAlertHi) {
          return `• गोधूलि मुहूर्त: ${formatNextDayRangeHi(dayPanchang.godhuliMuhurat)}`;
        }
        const tzHi = resolveSafeTimezone(dayPanchang.dailyPanchang?.location || { timezone: "Asia/Kolkata", tzOffsetHours: 5.5 });
        const godhuliOverlapHi = getMuhuratKaalOverlapTag(dayPanchang.exactEpochsMs, "godhuli", tzHi);
        const godhuliBaseHi = formatNextDayRangeHi(
          stripLegacyKaalConflictTag(safeDispHi?.godhuliMuhurat || dayPanchang.godhuliMuhurat)
        );
        return `• गोधूलि मुहूर्त: ${godhuliBaseHi}${godhuliOverlapHi.hi ? ` ${godhuliOverlapHi.hi}` : ""}`;
      })()
    ] : [],
    dayPanchang.kalVedhaReport?.gulika?.inlineAlertHi ? `• गुलिक काल (${formatAshtamanshaPartHi(dayPanchang.gulikaKaalPart)}): ${formatNextDayRangeHi(dayPanchang.gulikaKaal)} (${dayPanchang.gulikaKaalLabelHi || GULIKA_SHASTRIYA_LABEL_HI})` : dayPanchang.gulikaDurmuhurtaOverlapHi ? `• गुलिक काल (${formatAshtamanshaPartHi(dayPanchang.gulikaKaalPart)}): ${formatNextDayRangeHi(safeDispHi?.gulikaKaal || dayPanchang.gulikaKaal)} (${GULIKA_SHASTRIYA_LABEL_HI} • ${dayPanchang.gulikaDurmuhurtaOverlapHi})` : `• गुलिक काल (${formatAshtamanshaPartHi(dayPanchang.gulikaKaalPart)}): ${formatNextDayRangeHi(safeDispHi?.gulikaKaal || dayPanchang.gulikaKaal)} ${BALANCED_GULIKA_TAG_HI}`,
    `${panchangSaral.shubhMuhuratHi}`,
    ``,
    isTodayDateHi ? `आज का अशुभ / वर्जित समय (सावधानी रखें):` : `अशुभ / वर्जित समय (${dayPanchang.formattedDateHindi} — सावधानी रखें):`,
    ...indiaEclipseHi?.isVerifiedIndiaVisible && indiaEclipseHi.ashubhLineHi ? [`• ${indiaEclipseHi.ashubhLineHi}`] : [],
    `• राहुकाल (${formatAshtamanshaPartHi(dayPanchang.rahuKaalPart)}): ${tagGandmoolNakshatrasHi(formatNextDayRangeHi(safeDispHi?.rahuKaal || dayPanchang.rahuKaal))}`,
    `• यमगण्ड (${formatAshtamanshaPartHi(dayPanchang.yamagandamPart)}): ${tagGandmoolNakshatrasHi(formatNextDayRangeHi(safeDispHi?.yamagandam || dayPanchang.yamagandam))}`,
    ...dayPanchang.durMuhurta ? [`• दुर्मुहूर्त: ${formatDurmuhurtaForShareHi(dayPanchang.durMuhurta)}`] : [],
    ...dayPanchang.bhadraKaal ? [
      `• भद्रा काल: ${tagGandmoolNakshatrasHi(
        formatNextDayRangeHi(
          safeDispHi?.bhadraWindow ? `${safeDispHi.bhadraWindow} तक (${(dayPanchang.bhadraVaas?.effectNoteHi || "भद्रा प्रभावी").replace(/\s*\(([^()]+)\)/gu, " • $1")}${safeDispHi.bhadraMukha ? ` • भद्रा मुख: ${safeDispHi.bhadraMukha} [वर्जित]` : ""}${safeDispHi.bhadraPuchha ? ` • भद्रा पुच्छ: ${safeDispHi.bhadraPuchha} [ग्राह्य]` : ""})` : dayPanchang.bhadraKaal.replace(/^⚠️\s*भद्रा\s*काल:\s*/u, "").trim()
        )
      )}`
    ] : [`• भद्रा: आज भद्रा नहीं है।`],
    ...dayPanchang.panchakKaal ? [`• ${tagGandmoolNakshatrasHi(formatDynamicPanchakHi(dayPanchang))}`] : [],
    ...dayPanchang.gandmoolNakshatra ? [`• ${tagGandmoolNakshatrasHi(formatNextDayRangeHi(dayPanchang.gandmoolNakshatra))}`] : [],
    `• दिशाशूल: ${tagGandmoolNakshatrasHi(`${dayPanchang.dishaShool} (${dayPanchang.dishaShoolRemedy})`)}`,
    `${panchangSaral.ashubhKaalHi}`,
    `━━━━━━━━━━━━━━━━━━━━━━`,
    isTodayDateHi ? `आज के शुभ चौघड़िया मुहूर्त:` : `शुभ चौघड़िया मुहूर्त (${dayPanchang.formattedDateHindi}):`,
    `दिन के शुभ चौघड़िया:`,
    shubhDayChog,
    `रात्रि के शुभ चौघड़िया:`,
    shubhNightChog,
    ...eclipsedDayChogCompact ? [eclipsedDayChogCompact] : [],
    `अशुभ चौघड़िया (उद्वेग, काल, रोग): दिन — ${ashubhDayChogCompact} | रात्रि — ${ashubhNightChogCompact}`,
    `${panchangSaral.choghadiyaHi}`,
    ...dayPanchang.kartikadiFootnoteHi ? [dayPanchang.kartikadiFootnoteHi] : [],
    ...dayPanchang.deltaTNoteHi ? [dayPanchang.deltaTNoteHi] : [],
    `नोट: चौघड़िया व मुहूर्त गणना सटीक सेकंड (HH:MM:SS) पर आधारित है; मिनट-आधारित पंचांगों से ±1 मिनट का शास्त्रीय अंतर स्वाभाविक है।`,
    `━━━━━━━━━━━━━━━━━━━━━━`,
    `${shastricHi.titleHi}:`,
    `${shastricHi.textHi}`,
    `${panchangSaral.vivechanHi}`,
    `━━━━━━━━━━━━━━━━━━━━━━`,
    `आज के आराध्य देव (${(dayPanchang.festivalDeity || "").replace(/\s*\(([^()]+)\)/gu, " — $1")}) का ${mantraKindLabel}:`,
    `"${dayPanchang.festivalMantra}"`,
    ...dayPanchang.festivalMantraMeaning ? [`भावार्थ: ${dayPanchang.festivalMantraMeaning}`] : [],
    `━━━━━━━━━━━━━━━━━━━━━━`,
    `ज्योतिषीय परामर्श, शुद्ध मुहूर्त एवं वैदिक अनुष्ठान हेतु संपर्क करें:`,
    `आचार्य पण्डित शशांक शर्मा`,
    `स्थान: श्री ज्योतिष वैदिक संस्थान, रुद्रपुर (उत्तराखण्ड)`,
    `WhatsApp / Call: +91 7017279043`,
    `आज का लाइव पंचांग, चौघड़िया व राशिफल यहाँ देखें:`,
    `https://www.panditjionline.online/panchang`,
    ``,
    `#AajKaPanchang #DainikPanchang #ShubhMuhurat #Choghadiya #RahuKaal #VedicPanchang #PanditJiOnline #PanditShashankSharma`
  );
  return localizeSocialPostLines(
    lines.filter((line) => line !== void 0),
    language,
    "daily",
    true
  );
}
async function copyPostToClipboard(text) {
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
  }
  try {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.left = "-9999px";
    textArea.style.top = "0";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(textArea);
    return ok;
  } catch {
    return false;
  }
}
async function shareProfessionalPostOnWhatsApp(postText) {
  await copyPostToClipboard(postText);
  const waUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(postText)}`;
  window.open(waUrl, "_blank", "noopener,noreferrer");
}
async function shareProfessionalPostOnFacebook(postText, canonicalUrl) {
  const copied = await copyPostToClipboard(postText);
  const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    canonicalUrl
  )}&quote=${encodeURIComponent(postText.slice(0, 1200))}`;
  window.open(fbUrl, "_blank", "noopener,noreferrer");
  return copied;
}
async function shareProfessionalPostNative(title, postText, canonicalUrl) {
  await copyPostToClipboard(postText);
  if (typeof navigator !== "undefined" && typeof navigator.share === "function") {
    try {
      await navigator.share({
        title,
        text: postText,
        url: canonicalUrl
      });
      return "shared";
    } catch {
      return "copied";
    }
  }
  return "copied";
}
const professionalSocialPostBuilder = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BALANCED_GULIKA_TAG_EN,
  BALANCED_GULIKA_TAG_HI,
  buildAll12RashisPost,
  buildFullDailyPanchangPost,
  buildFullSingleRashiPost,
  copyPostToClipboard,
  formatDurmuhurtaForShareHi,
  getDynamicPradoshKaalDisplay,
  getMuhuratKaalOverlapTag,
  sanitizePublicSingleRashiProse,
  shareProfessionalPostNative,
  shareProfessionalPostOnFacebook,
  shareProfessionalPostOnWhatsApp,
  stripLegacyKaalConflictTag,
  stripPersonalSalutation,
  stripRedundantPakshaMaasFromTithi
}, Symbol.toStringTag, { value: "Module" }));
export {
  haveSameConcludingClause as a,
  stripAnyRemedyLeadPrefix as b,
  cleanIntraSentenceHindiRepetitions as c,
  deduplicateAndPolishProse as d,
  defaultTextIntelligenceEngine as e,
  stripPersonalSalutation as f,
  buildFullSingleRashiPost as g,
  hasSemanticConceptOverlap as h,
  buildAll12RashisPost as i,
  shareProfessionalPostOnWhatsApp as j,
  shareProfessionalPostOnFacebook as k,
  copyPostToClipboard as l,
  mapAppLanguageToLocale as m,
  shareProfessionalPostNative as n,
  hasActiveWindowText as o,
  buildPanchangShastricSummaryForShare as p,
  getDynamicPradoshKaalDisplay as q,
  getMuhuratKaalOverlapTag as r,
  splitIntoSentences as s,
  stripLegacyKaalConflictTag as t,
  professionalSocialPostBuilder as u
};
