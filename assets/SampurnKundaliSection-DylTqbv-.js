const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/kundaliBookPdfBuilder-BcOVROms.js","assets/panchang-core-24ia-akc.js","assets/vendor-astronomy-C8JZdkQu.js","assets/index-AQ5SI3vl.js","assets/vendor-react-CCbeDaYX.js","assets/vendor-pdf-CpPyS1re.js","assets/vendor-icons-Bk5Rg8-9.js","assets/seo-core-DnNehtWz.js","assets/index-ZCNlV506.css","assets/pdfReportExporter-Cwf3NDiH.js","assets/browser-CBlYJE2W.js","assets/VedicDateInput-QzCgtRnr.js","assets/VedicTripleCheckBadge-B_j2EZJj.js","assets/vedicTripleCheck-C0ip0Qtr.js","assets/BirthPlaceGpsButton-BKE2rBQq.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from "./vendor-pdf-CpPyS1re.js";
import { j as jsxRuntimeExports, r as reactExports, R as React } from "./vendor-react-CCbeDaYX.js";
import { V as VedicDateInput } from "./VedicDateInput-QzCgtRnr.js";
import { X as getLoggedInUserAccountData, J as generateSampurnKundali } from "./panchang-core-24ia-akc.js";
import { w as BookOpen, U as Users, p as GraduationCap, aH as CircleQuestionMark, ax as ChevronUp, al as ChevronDown, aj as Layers, S as Sparkles, a8 as Compass, a2 as Clock, n as ShieldCheck, C as Check, a4 as TriangleAlert, I as Info, z as ArrowUp, y as ArrowDown, af as CalendarCheck, g as Star, ao as RotateCcw, s as User, x as Calendar, a1 as MapPin, D as Download, aF as FileText, Y as Copy, t as MessageCircle, ap as Sun, a7 as Gem, f as Award, aq as Moon, r as Briefcase, aT as Coins, aC as Heart, A as Activity, a9 as Flame, ag as History, aR as Trash2, E as Eye } from "./vendor-icons-Bk5Rg8-9.js";
import { c as computeBhavaSphutTable, a as computeShadbalaSummary, g as getLagnaGemstoneAndRudraksha } from "./pdfReportExporter-Cwf3NDiH.js";
import { u as useLanguage, s as setLivePageCardPayload, P as PanditPortrait, o as POPULAR_BIRTH_PLACES, A as APPROXIMATE_BIRTH_TIME_PRESETS, e as ShareableVedicCardButton, n as getWhatsAppLink, d as scrollToResultById, t as translateVedicHindiToEnglish, p as clearLocalJanamKundaliCache } from "./index-AQ5SI3vl.js";
import { u as useVedicValidation, V as VedicTripleCheckBadge } from "./VedicTripleCheckBadge-B_j2EZJj.js";
import { B as BirthPlaceGpsButton } from "./BirthPlaceGpsButton-BKE2rBQq.js";
function pickGuideText(text, lang) {
  return lang === "en" ? text.en : text.hi;
}
const VIEW_MODE_DESCRIPTORS = {
  simple: {
    description: {
      hi: "मुख्य कुंडलियाँ (लग्न, चंद्र, नवांश), सरल भाषा में 1–12 अंकों व ग्रहों की पहचान, मुख्य दशा, दोष-परिहार सारांश और स्पष्ट जीवन मार्गदर्शन।",
      en: "Core charts (Lagna, Moon, Navamsha), clear 1–12 Rashi vs House guide, planet legends, active Dasha summary, Dosha checks, and readable guidance."
    }
  },
  advanced: {
    description: {
      hi: "सभी 16 षोडशवर्ग (D1–D60), सूर्य व श्रीपति भाव चलित, 6-अंगी पाराशरी षड्बल (विरूप/रूप), भाव बल, अष्टकवर्ग, विंशोत्तरी (प्रत्यंतर-सूक्ष्म), योगिनी व जैमिनी चर दशा।",
      en: "All 16 Shodashavarga charts (D1–D60), Surya & Sripati Bhava Chalit, 6-fold Parashari Shadbala (Virupas/Rupas), Bhava Bala, Ashtakavarga, Vimshottari (Pratyantar/Sookshma), Yogini & Jaimini Chara Dasha."
    }
  }
};
const RASHI_12_REFERENCE = [
  { number: 1, nameHi: "मेष", nameEn: "Aries", lordHi: "मंगल", lordEn: "Mars" },
  { number: 2, nameHi: "वृषभ", nameEn: "Taurus", lordHi: "शुक्र", lordEn: "Venus" },
  { number: 3, nameHi: "मिथुन", nameEn: "Gemini", lordHi: "बुध", lordEn: "Mercury" },
  { number: 4, nameHi: "कर्क", nameEn: "Cancer", lordHi: "चंद्र", lordEn: "Moon" },
  { number: 5, nameHi: "सिंह", nameEn: "Leo", lordHi: "सूर्य", lordEn: "Sun" },
  { number: 6, nameHi: "कन्या", nameEn: "Virgo", lordHi: "बुध", lordEn: "Mercury" },
  { number: 7, nameHi: "तुला", nameEn: "Libra", lordHi: "शुक्र", lordEn: "Venus" },
  { number: 8, nameHi: "वृश्चिक", nameEn: "Scorpio", lordHi: "मंगल", lordEn: "Mars" },
  { number: 9, nameHi: "धनु", nameEn: "Sagittarius", lordHi: "गुरु", lordEn: "Jupiter" },
  { number: 10, nameHi: "मकर", nameEn: "Capricorn", lordHi: "शनि", lordEn: "Saturn" },
  { number: 11, nameHi: "कुंभ", nameEn: "Aquarius", lordHi: "शनि", lordEn: "Saturn" },
  { number: 12, nameHi: "मीन", nameEn: "Pisces", lordHi: "गुरु", lordEn: "Jupiter" }
];
const BHAVA_12_REFERENCE = [
  { house: 1, nameHi: "प्रथम भाव (लग्न/तनु)", nameEn: "1st House (Lagna)", themeHi: "स्वयं, व्यक्तित्व, स्वास्थ्य, आरंभ", themeEn: "Self, personality, health, vitality" },
  { house: 2, nameHi: "द्वितीय भाव (धन)", nameEn: "2nd House (Dhana)", themeHi: "संचित धन, कुटुंब, वाणी", themeEn: "Accumulated wealth, family, speech" },
  { house: 3, nameHi: "तृतीय भाव (सहज)", nameEn: "3rd House (Sahaja)", themeHi: "पराक्रम, भाई-बहन, संवाद, प्रयास", themeEn: "Courage, siblings, communication, effort" },
  { house: 4, nameHi: "चतुर्थ भाव (सुख)", nameEn: "4th House (Sukha)", themeHi: "माता, घर, भूमि-वाहन, मानसिक शांति", themeEn: "Mother, home, property, vehicles, inner peace" },
  { house: 5, nameHi: "पंचम भाव (पुत्र/विद्या)", nameEn: "5th House (Putra)", themeHi: "बुद्धि, शिक्षा, संतान, रचनात्मकता", themeEn: "Intellect, education, children, creativity" },
  { house: 6, nameHi: "षष्ठ भाव (रिपु/रोग)", nameEn: "6th House (Ari)", themeHi: "सेवा, प्रतिस्पर्धा, रोग व ऋण प्रबंधन", themeEn: "Service, competition, health resilience, debts" },
  { house: 7, nameHi: "सप्तम भाव (कलत्र)", nameEn: "7th House (Kalatra)", themeHi: "विवाह, जीवनसाथी, व्यापारिक साझेदारी", themeEn: "Marriage, spouse, partnerships" },
  { house: 8, nameHi: "अष्टम भाव (आयु/रंध्र)", nameEn: "8th House (Ayur)", themeHi: "आयु, गूढ़ विद्या, परिवर्तन, पैतृक विषय", themeEn: "Longevity, research, transformation, inheritance" },
  { house: 9, nameHi: "नवम भाव (धर्म/भाग्य)", nameEn: "9th House (Bhagya)", themeHi: "भाग्य, धर्म, गुरु, पिता, उच्च शिक्षा", themeEn: "Fortune, dharma, mentors, father, higher learning" },
  { house: 10, nameHi: "दशम भाव (कर्म)", nameEn: "10th House (Karma)", themeHi: "आजीविका, पद-प्रतिष्ठा, कर्मक्षेत्र", themeEn: "Career, public standing, profession, deeds" },
  { house: 11, nameHi: "एकादश भाव (लाभ)", nameEn: "11th House (Labha)", themeHi: "आय, लाभ, मित्र-समूह, इच्छा-पूर्ति", themeEn: "Income, gains, social network, aspirations" },
  { house: 12, nameHi: "द्वादश भाव (व्यय)", nameEn: "12th House (Vyaya)", themeHi: "व्यय, विदेश यात्रा, ध्यान, मोक्ष", themeEn: "Expenses, foreign lands, solitude, liberation" }
];
const RASHI_VS_BHAVA_EXPLAINER = {
  heading: {
    hi: "1 से 12 अंक क्या दर्शाते हैं? (राशि बनाम भाव)",
    en: "What Do Numbers 1–12 Mean? (Rashi vs House)"
  },
  north: {
    summary: {
      hi: 'उत्तर भारतीय चार्ट में 12 भावों (Houses) के खाने स्थिर रहते हैं — सबसे ऊपर मध्य वाला बड़ा हीरा हमेशा भाव 1 (लग्न) है और भाव वामावर्त (घड़ी के विपरीत) 1→12 गिने जाते हैं। खाने के भीतर लिखा 1 से 12 का अंक "राशि संख्या" (1=मेष … 12=मीन) है, भाव संख्या नहीं।',
      en: "In a North Indian chart, the 12 House positions are fixed — the top center diamond is always House 1 (Lagna), counted counter-clockwise 1→12. The number 1–12 written inside each box is the Rashi (Zodiac Sign: 1=Aries … 12=Pisces), not the house number."
    }
  },
  south: {
    summary: {
      hi: 'दक्षिण भारतीय चार्ट में 12 राशियों के खाने स्थिर रहते हैं — ऊपरी पंक्ति का दूसरा खाना हमेशा 1-मेष होता है और राशियाँ घड़ी की दिशा (दक्षिणावर्त) में चलती हैं। जिस खाने में "लग्न" लिखा है, वही भाव 1 है और वहाँ से दक्षिणावर्त भाव 1→12 गिने जाते हैं।',
      en: 'In a South Indian chart, the 12 Rashi boxes are fixed — the second cell in the top row is always 1-Aries, running clockwise. The box marked "Lagna" is House 1, and Houses 1→12 are counted clockwise from it.'
    }
  }
};
const GRAHA_LEGEND_ITEMS = [
  { id: "sun", shortHi: "सू", shortEn: "Su", fullHi: "सूर्य", fullEn: "Sun" },
  { id: "moon", shortHi: "चं", shortEn: "Mo", fullHi: "चंद्र", fullEn: "Moon" },
  { id: "mars", shortHi: "मं", shortEn: "Ma", fullHi: "मंगल", fullEn: "Mars" },
  { id: "mercury", shortHi: "बु", shortEn: "Me", fullHi: "बुध", fullEn: "Mercury" },
  { id: "jupiter", shortHi: "गु", shortEn: "Ju", fullHi: "गुरु", fullEn: "Jupiter" },
  { id: "venus", shortHi: "शु", shortEn: "Ve", fullHi: "शुक्र", fullEn: "Venus" },
  { id: "saturn", shortHi: "श", shortEn: "Sa", fullHi: "शनि", fullEn: "Saturn" },
  { id: "rahu", shortHi: "रा", shortEn: "Ra", fullHi: "राहु", fullEn: "Rahu" },
  { id: "ketu", shortHi: "के", shortEn: "Ke", fullHi: "केतु", fullEn: "Ketu" }
];
const GRAHA_SYMBOL_LEGEND = [
  {
    symbol: "*",
    label: { hi: "वक्री (R)", en: "Retrograde (*)" },
    meaning: {
      hi: "पृथ्वी से देखने पर ग्रह की आभासी उल्टी गति",
      en: "Apparent backward motion as seen from Earth"
    }
  },
  {
    symbol: "^",
    label: { hi: "अस्त (C)", en: "Combust (^)" },
    meaning: {
      hi: "सूर्य के अत्यंत निकट होने से ग्रह का तेज ढका होना",
      en: "Very close to the Sun, reducing outer visibility"
    }
  },
  {
    symbol: "↑",
    label: { hi: "उच्च (Ex)", en: "Exalted (↑)" },
    meaning: {
      hi: "ग्रह अपनी सर्वोच्च बल वाली राशि में स्थित",
      en: "Planet positioned in its sign of highest dignity"
    }
  },
  {
    symbol: "↓",
    label: { hi: "नीच (Db)", en: "Debilitated (↓)" },
    meaning: {
      hi: "ग्रह अपनी न्यूनतम स्वाभाविक राशि में स्थित",
      en: "Planet positioned in its sign of lowest dignity"
    }
  },
  {
    symbol: "°",
    label: { hi: "अंश (Deg)", en: "Degree (°)" },
    meaning: {
      hi: "राशि (0°–30°) के भीतर ग्रह की सटीक स्थिति",
      en: "Exact position of the planet inside the 0°–30° sign"
    }
  }
];
const CHART_EXPLAINERS = {
  lagna_d1: {
    key: "lagna_d1",
    title: { hi: "लग्न कुंडली (जन्म चक्र — D-1)", en: "Lagna Chart (Birth Rashi Chart — D-1)" },
    shortPurpose: {
      hi: "यह मुख्य जन्म कुंडली है। जन्म के क्षण पूर्वी क्षितिज पर उदित राशि को प्रथम भाव मानकर जीवन के सभी 12 क्षेत्रों (शरीर, धन, परिवार, कर्म, विवाह आदि) का मूल ढाँचा दिखाती है।",
      en: "This is the primary birth chart. Using the rising sign on the eastern horizon as House 1, it maps all 12 core areas of life (self, wealth, family, career, marriage, etc.)."
    },
    howToRead: {
      hi: "शीर्ष मध्य खाने (भाव 1) से शुरू करके वामावर्त 12 भावों में बैठे ग्रहों और उनकी राशि संख्या को देखें।",
      en: "Start at House 1 (Lagna) and examine which signs and planets occupy each of the 12 houses."
    }
  },
  chandra: {
    key: "chandra",
    title: { hi: "चंद्र कुंडली (राशि चक्र)", en: "Chandra Chart (Moon Chart)" },
    shortPurpose: {
      hi: "इसमें चंद्रमा जिस राशि में है उसे प्रथम भाव माना जाता है। यह मन, भावनात्मक प्रवृत्ति, मानसिक संतुलन और गोचर (Transit) का प्रभाव समझने के लिए आवश्यक है।",
      en: "Places the Moon sign in House 1. Essential for understanding emotional temperament, mental patterns, and how planetary transits (Gochar) affect you."
    },
    howToRead: {
      hi: "दैनिक/मासिक गोचर और शनि साढ़े साती की गणना मुख्यतः चंद्र कुंडली (जन्म राशि) से ही देखी जाती है।",
      en: "Transits (Gochar) and Sade Sati phases are classically evaluated from the Moon sign shown in House 1 here."
    }
  },
  surya: {
    key: "surya",
    title: { hi: "सूर्य कुंडली (Surya Chart)", en: "Surya Chart (Sun Chart)" },
    shortPurpose: {
      hi: "इसमें सूर्य की राशि को प्रथम भाव मानकर आत्मबल, नेतृत्व क्षमता, पिता व सामाजिक पहचान के दृष्टिकोण से ग्रहों की स्थिति देखी जाती है।",
      en: "Uses the Sun sign as House 1 to view planetary placements from the perspective of vitality, leadership, father, and outer recognition."
    },
    howToRead: {
      hi: "लग्न और चंद्र कुंडली के साथ सूर्य कुंडली को मिलाकर देखने से सुदर्शन चक्र (त्रिसंयोजन) की पुष्टि होती है।",
      en: "Reading Surya alongside Lagna and Chandra charts forms the classical Sudarshana triad for verifying planetary themes."
    }
  },
  bhava_chalit: {
    key: "bhava_chalit",
    title: { hi: "श्रीपति भाव चलित कुंडली", en: "Sripati Bhava Chalit Chart" },
    shortPurpose: {
      hi: "वास्तविक खगोलीय लग्न व दशम भाव (MC) के मध्य संधियों के अनुसार ग्रह किस भाव-सीमा में फल देगा, यह दर्शाती है। कई बार राशि वही रहते हुए ग्रह अगले या पिछले भाव में खिसक सकता है।",
      en: "Uses true astronomical Ascendant and Midheaven (MC) Sripati house boundaries to show which house cusp a planet actually falls in. A planet may remain in the same sign yet shift by one house."
    },
    howToRead: {
      hi: "राशि बल (उच्च/नीच/मित्र) हमेशा D-1 लग्न से देखा जाता है, जबकि भाव-फल की सूक्ष्म पुष्टि भाव चलित से की जाती है।",
      en: "Planetary dignity (exalted/own/friend) is always read from D-1 Rashi, while Bhava Chalit refines which house domain a planet activates."
    }
  },
  navamsha_d9: {
    key: "navamsha_d9",
    title: { hi: "नवांश कुंडली (D-9)", en: "Navamsha Chart (D-9)" },
    shortPurpose: {
      hi: "यह सबसे महत्वपूर्ण सूक्ष्म वर्ग कुंडली है (प्रत्येक राशि के 9 भाग, 3°20′ प्रत्येक)। यह ग्रहों के आंतरिक बल, विवाह-सामंजस्य, धर्म और जीवन के उत्तरार्ध की परिपक्वता दर्शाती है।",
      en: "The most important divisional chart (9 divisions per sign of 3°20′ each). It reveals inner planetary strength, marital harmony, dharma, and long-term maturity."
    },
    howToRead: {
      hi: 'यदि कोई ग्रह लग्न (D-1) और नवांश (D-9) दोनों में एक ही राशि में हो, तो उसे "वर्गोत्तम" (अति बलवान) माना जाता है।',
      en: "When a planet occupies the exact same Rashi in both D-1 and D-9, it is called Vargottama — indicating strong internal stability."
    }
  },
  dashamsha_d10: {
    key: "dashamsha_d10",
    title: { hi: "दशमांश कुंडली (D-10)", en: "Dashamsha Chart (D-10)" },
    shortPurpose: {
      hi: "प्रत्येक राशि के 10 भाग (3° प्रत्येक) से निर्मित यह वर्ग विशेष रूप से आजीविका, पेशा, पद-प्रतिष्ठा और समाज में कर्म-योगदान को समझने हेतु देखा जाता है।",
      en: "Divides each sign into 10 parts (3° each) to specifically examine career, professional standing, vocation, and public contribution."
    },
    howToRead: {
      hi: "D-10 का लग्न, दशम भाव और लग्न कुंडली के दशमेश की D-10 में स्थिति कार्यक्षेत्र की दिशा स्पष्ट करती है।",
      en: "Examine the D-10 Ascendant, its 10th house, and the placement of the D-1 10th lord inside D-10."
    }
  },
  shodashavarga: {
    key: "shodashavarga",
    title: { hi: "16 षोडशवर्ग कुंडलियाँ (D1–D60)", en: "16 Shodashavarga Charts (D1–D60)" },
    shortPurpose: {
      hi: "महर्षि पराशर द्वारा वर्णित 16 विभागीय चार्ट, जो जीवन के विशिष्ट क्षेत्रों (धन D-2, भाई-बहन D-3, संपत्ति D-4, संतान D-7, विवाह D-9, कर्म D-10, विद्या D-24 आदि) की सूक्ष्म जाँच करते हैं।",
      en: "The 16 classical Parashari divisional charts examining focused life areas — wealth (D-2), siblings (D-3), property (D-4), progeny (D-7), marriage (D-9), career (D-10), education (D-24), and more."
    },
    howToRead: {
      hi: "उच्च वर्ग (जैसे D-16 से D-60) जन्म-समय के कुछ मिनटों के अंतर से भी बदल जाते हैं, इसलिए इनके लिए अत्यंत सटीक जन्म समय आवश्यक है।",
      en: "Higher divisions (D-16 through D-60) shift even with a few minutes of birth-time error, so accurate recorded birth time is essential."
    }
  }
};
const TABLE_HOW_TO_READ_GUIDES = {
  navagraha: {
    key: "navagraha",
    triggerTitle: {
      hi: "नवग्रह स्पष्ट तालिका को कैसे समझें?",
      en: "How to Read the 9-Planet Position Table?"
    },
    whatItShows: {
      hi: "यह तालिका जन्म के ठीक क्षण सभी 9 ग्रहों की आकाश में सटीक राशि, लग्न से भाव संख्या, अंश-कला-विकला (Degree), नक्षत्र-चरण और उनकी स्वाभाविक अवस्था (उच्च, स्वगृही, मित्र, शत्रु, नीच) दिखाती है।",
      en: "Shows the exact astronomical sign, house from Lagna, degree-minute-second (DMS), Nakshatra-Pada, and natural dignity (Exalted, Own, Friend, Enemy, Debilitated) of all 9 planets at birth."
    },
    keyPoints: [
      {
        term: { hi: "अंश (0°–30°)", en: "Degree (0°–30°)" },
        meaning: {
          hi: "प्रत्येक राशि 30° की होती है। 0°–1° या 29°–30° के निकट स्थित ग्रह राशि-संधि पर माना जाता है।",
          en: "Each sign spans 30°. Planets near 0°–1° or 29°–30° lie at a sign boundary (Rashi Sandhi)."
        }
      },
      {
        term: { hi: "नक्षत्र व चरण (1–4)", en: "Nakshatra & Pada (1–4)" },
        meaning: {
          hi: "27 नक्षत्रों में प्रत्येक के 4 चरण (3°20′) होते हैं। यही नवांश (D-9) और दशा क्रम का आधार हैं।",
          en: "Each of the 27 Nakshatras has 4 quarters (3°20′ each), which determine Navamsha placement and Dasha lordship."
        }
      },
      {
        term: { hi: "वक्री (*) व अस्त (^)", en: "Retrograde (*) & Combust (^)" },
        meaning: {
          hi: "वक्री ग्रह आंतरिक रूप से तीव्र व चेष्टाबली हो सकता है; अस्त ग्रह सूर्य के अत्यंत समीप होने के कारण बाहर से कम प्रकट होता है।",
          en: "Retrograde planets often have high motional strength (Cheshta Bala); combust planets are very close to the Sun."
        }
      }
    ],
    practicalTip: {
      hi: "किसी ग्रह का पूरा मूल्यांकन केवल एक कॉलम से न करें — राशि, भाव, नक्षत्र स्वामी और षड्बल को मिलाकर देखें।",
      en: "Avoid judging any planet from one column alone — read its sign, house, Nakshatra lord, and Shadbala together."
    }
  },
  bhava_sphut: {
    key: "bhava_sphut",
    triggerTitle: {
      hi: "श्रीपति द्वादश भाव स्फुट तालिका को कैसे समझें?",
      en: "How to Read the Sripati 12-Bhava Sphut Table?"
    },
    whatItShows: {
      hi: "यह तालिका वास्तविक लग्न (Ascendant) और दशम मध्य (Midheaven / MC) से गणना किए गए प्रत्येक भाव के मध्य बिंदु (भाव मध्य) और उसकी आरंभ-अंत सीमा (भाव संधि) को दर्शाती है।",
      en: "Lists the exact midpoint (Bhava Madhya) and start-to-end boundaries (Bhava Sandhi) of all 12 houses calculated from the true Ascendant and Midheaven (MC)."
    },
    keyPoints: [
      {
        term: { hi: "भाव मध्य (Cusp Midpoint)", en: "Bhava Madhya (Midpoint)" },
        meaning: {
          hi: "भाव का सर्वाधिक प्रभावी केंद्र बिंदु। जो ग्रह भाव मध्य के जितना पास हो, उस भाव का फल उतना स्पष्ट देता है।",
          en: "The peak power center of a house. Planets closer to the Bhava Madhya express that house’s matters most clearly."
        }
      },
      {
        term: { hi: "भाव संधि (Start – End)", en: "Bhava Sandhi (Boundary)" },
        meaning: {
          hi: "दो भावों के बीच की सीमा रेखा। संधि पर बैठा ग्रह दोनों पड़ोसी भावों का मिला-जुला प्रभाव दे सकता है।",
          en: "The junction between two adjacent houses. A planet right on a Sandhi blends themes of both houses."
        }
      }
    ],
    practicalTip: {
      hi: "जब कोई ग्रह लग्न चार्ट (D-1) से अलग भाव में श्रीपति भाव चलित में दिखे, तो इसका कारण यही भाव संधि विस्तार है।",
      en: "If a planet shifts house between D-1 and Bhava Chalit, this boundary table explains exactly why."
    }
  },
  shadbala: {
    key: "shadbala",
    triggerTitle: {
      hi: "6-अंगी पाराशरी षड्बल तालिका को कैसे समझें?",
      en: "How to Read the 6-Fold Parashari Shadbala Table?"
    },
    whatItShows: {
      hi: "बृहत् पाराशर होरा शास्त्र (अध्याय 27) के अनुसार सूर्य से शनि तक 7 ग्रहों की छह प्रकार की वास्तविक गणितीय शक्तियों का योग — विरूप (षष्ट्यंश) और रूप (1 रूप = 60 विरूप) में।",
      en: "Measures the 6 classical mathematical strengths (BPHS Ch. 27) for the 7 physical planets from Sun to Saturn — expressed in Virupas (Shashtiamsas) and Rupas (1 Rupa = 60 Virupas)."
    },
    keyPoints: [
      {
        term: { hi: "6 बल अंग", en: "The 6 Strength Pillars" },
        meaning: {
          hi: "स्थान बल (राशि व सप्तवर्ग स्थिति), दिग्बल (दिशा बल), काल बल (दिन/रात, पक्ष, वार, होरा, अयन), चेष्टा बल (गति/वक्री), नैसर्गिक बल (स्थायी दीप्ति) और दृक् बल (शुभ/पाप ग्रहों की दृष्टि)।",
          en: "Sthana (positional/varga), Dig (directional), Kala (time/paksha/ayana), Cheshta (motional/retrograde), Naisargika (natural luminosity), and Drik (planetary aspects)."
        }
      },
      {
        term: { hi: "कुल रूप बनाम न्यूनतम मान (Required Rupas)", en: "Total Rupas vs Minimum Requirement" },
        meaning: {
          hi: "शास्त्रानुसार न्यूनतम रूप मान: सूर्य 6.5, चंद्र 6.0, मंगल 5.0, बुध 7.0, गुरु 6.5, शुक्र 5.5, शनि 5.0। इससे अधिक रूप होने पर ग्रह अपने फल देने में पूर्ण सक्षम होता है।",
          en: "Classical minimums: Sun 6.5, Moon 6.0, Mars 5.0, Mercury 7.0, Jupiter 6.5, Venus 5.5, Saturn 5.0 Rupas. Meeting or exceeding this indicates solid capacity to deliver results."
        }
      },
      {
        term: { hi: "इष्ट फल व कष्ट फल (0–60)", en: "Ishta Phala & Kashta Phala (0–60)" },
        meaning: {
          hi: "इष्ट फल अधिक होना ग्रह के शुभ सहयोग को और कष्ट फल अधिक होना अतिरिक्त परिश्रम या सावधानी की आवश्यकता दर्शाता है।",
          en: "Higher Ishta Phala indicates smoother constructive support; higher Kashta Phala indicates areas requiring patience and disciplined effort."
        }
      }
    ],
    practicalTip: {
      hi: 'षड्बल केवल "बल" (क्षमता) बताता है, ग्रह की "शुभता/अशुभता" नहीं। एक मजबूत ग्रह अपने भाव-स्वामित्व के अनुसार ही फल देता है।',
      en: "Shadbala measures strength (capacity), not benefic/malefic nature. A strong planet delivers results according to the houses it rules and occupies."
    }
  },
  bhava_bala: {
    key: "bhava_bala",
    triggerTitle: {
      hi: "द्वादश भाव बल तालिका को कैसे समझें?",
      en: "How to Read the 12-House Bhava Bala Table?"
    },
    whatItShows: {
      hi: "कुंडली के 12 भावों में से कौन-से जीवन क्षेत्र (जैसे स्वास्थ्य, धन, कर्म, विवाह, भाग्य) प्राकृतिक रूप से अधिक पुष्ट और समर्थ हैं, इसका तीन-अंगी गणितीय मूल्यांकन।",
      en: "A 3-part mathematical evaluation showing which of the 12 life houses (health, wealth, career, marriage, fortune, etc.) carry the strongest structural backing."
    },
    keyPoints: [
      {
        term: { hi: "भावाधिपति बल", en: "Bhavadhipati Bala" },
        meaning: {
          hi: "उस भाव के स्वामी ग्रह का कुल षड्बल — स्वामी जितना बलवान, भाव उतना सुरक्षित।",
          en: "The full Shadbala of the house’s ruling planet — a stronger lord fortifies the house."
        }
      },
      {
        term: { hi: "भाव दिग्बल", en: "Bhava Dig Bala" },
        meaning: {
          hi: "भाव में स्थित राशि की प्रकृति (द्विपद, जलचर, चतुष्पद, कीट) के अनुसार दिशात्मक बल।",
          en: "Directional strength derived from the rising sign nature (human, watery, quadruped, insect) in that house."
        }
      },
      {
        term: { hi: "भाव दृक् बल व रैंक (1–12)", en: "Bhava Drishti Bala & Rank (1–12)" },
        meaning: {
          hi: "भाव मध्य पर पड़ने वाली शुभ व क्रूर दृष्टियों का प्रभाव। रैंक #1 सबसे पुष्ट भाव को दर्शाती है।",
          en: "Net influence of benefic and malefic aspects on the house cusp. Rank #1 marks the strongest house in the chart."
        }
      }
    ],
    practicalTip: {
      hi: "उच्च रैंक (1–4) वाले भावों से जुड़े विषयों में प्रयास अपेक्षाकृत शीघ्र फल देते हैं, जबकि कम बल वाले भावों में नियमित धैर्य लाभकारी रहता है।",
      en: "Top-ranked houses (1–4) tend to support smoother progress in their life themes; lower-ranked houses benefit from steady planning."
    }
  },
  ashtakavarga: {
    key: "ashtakavarga",
    triggerTitle: {
      hi: "अष्टकवर्ग व सर्वाष्टकवर्ग तालिका को कैसे समझें?",
      en: "How to Read Ashtakavarga & Sarvashtakavarga?"
    },
    whatItShows: {
      hi: "सात ग्रहों और लग्न के सापेक्ष प्रत्येक राशि को मिले शुभ बिंदुओं (रेखाओं/बिंदुओं) की अंक-तालिका। कुल सर्वाष्टकवर्ग योग हमेशा 337 बिंदु होता है।",
      en: "A point-based scoring grid showing benefic points (Bindus) contributed to each of the 12 signs by the 7 planets and Lagna. The Sarvashtakavarga sum across all 12 signs is always 337 Bindus."
    },
    keyPoints: [
      {
        term: { hi: "भिन्नाष्टकवर्ग (प्रत्येक ग्रह 0–8 बिंदु)", en: "Bhinnashtakavarga (0–8 Bindus per Planet)" },
        meaning: {
          hi: "किसी ग्रह के लिए 4 बिंदु औसत, 5–8 बिंदु अत्यंत शुभ और 0–3 बिंदु सामान्य/धीमे फल के सूचक हैं। गोचर में ग्रह जब अधिक बिंदु वाली राशि में जाता है तो बेहतर परिणाम देता है।",
          en: "For an individual planet, 4 Bindus is average, 5–8 is strong, and 0–3 is modest. Transits through higher-Bindu signs tend to feel more supportive."
        }
      },
      {
        term: { hi: "सर्वाष्टकवर्ग (SAV — प्रति राशि कुल बिंदु)", en: "Sarvashtakavarga (SAV — Total per Sign)" },
        meaning: {
          hi: "28 बिंदु = संतुलित औसत, 30 या अधिक = अत्यंत समृद्ध व सहायक भाव, 25 से कम = अतिरिक्त परिश्रम व सावधानी अपेक्षित।",
          en: "28 Bindus = balanced average, 30+ = strong and resourceful house, below 25 = requires more deliberate effort."
        }
      }
    ],
    practicalTip: {
      hi: "आय (11वें भाव) के बिंदु व्यय (12वें भाव) से अधिक होना आर्थिक बचत व संतुलन का शास्त्रीय संकेत माना जाता है।",
      en: "Classically, having more SAV Bindus in the 11th house (gains) than the 12th house (expenses) is considered supportive for financial balance."
    }
  },
  dasha_vimshottari: {
    key: "dasha_vimshottari",
    triggerTitle: {
      hi: "विंशोत्तरी दशा (महादशा → सूक्ष्म) को कैसे समझें?",
      en: "How to Read Vimshottari Dasha (Maha to Sookshma)?"
    },
    whatItShows: {
      hi: "जन्म के समय चंद्रमा के नक्षत्र और उसके भुक्त-भोग्य अंश के आधार पर 120 वर्ष का प्रमुख समय-चक्र, जो बताता है कि जीवन के किस कालखंड में कौन-सा ग्रह प्रमुख भूमिका निभा रहा है।",
      en: "The primary 120-year Vedic planetary time cycle anchored to the Moon’s exact Nakshatra degree at birth, showing which planets activate your chart across time."
    },
    keyPoints: [
      {
        term: { hi: "4 स्तर (Maha → Antar → Pratyantar → Sookshma)", en: "4 Layers (Maha → Antar → Pratyantar → Sookshma)" },
        meaning: {
          hi: "महादशा (6–20 वर्ष) मुख्य अध्याय है, अंतर्दशा (महीनों–वर्षों) उप-अध्याय, प्रत्यंतर (सप्ताह–महीने) और सूक्ष्म दशा (कुछ दिन) सूक्ष्म समय-संकेत देती हैं।",
          en: "Mahadasha (6–20 yrs) sets the main chapter, Antardasha (months–yrs) refines the sub-theme, Pratyantar (weeks–months) and Sookshma (days) pinpoint finer timing."
        }
      },
      {
        term: { hi: "जन्म समय शेष दशा (Balance at Birth)", en: "Balance at Birth" },
        meaning: {
          hi: "जन्म के समय चंद्रमा अपने नक्षत्र का जितना अंश पार कर चुका होता है, पहली महादशा उतनी बीती हुई मानकर शेष अवधि से आरंभ होती है।",
          en: "The first Mahadasha starts with only the remaining portion of the birth Nakshatra not yet traversed by the Moon."
        }
      }
    ],
    practicalTip: {
      hi: "महादशा स्वामी और अंतर्दशा स्वामी आपकी लग्न कुंडली में जिन भावों के स्वामी व स्थित हैं, उन्हीं क्षेत्रों के विषय उस समय सक्रिय होते हैं।",
      en: "The houses ruled and occupied by the active Mahadasha and Antardasha lords indicate which life areas come into focus during that window."
    }
  },
  dasha_yogini: {
    key: "dasha_yogini",
    triggerTitle: {
      hi: "योगिनी दशा (36-वर्षीय चक्र) को कैसे समझें?",
      en: "How to Read Yogini Dasha (36-Year Cycle)?"
    },
    whatItShows: {
      hi: "जन्म नक्षत्र पर आधारित 8 योगिनियों (मंगला 1 वर्ष से संकटा 8 वर्ष तक = कुल 36 वर्ष) का त्वरित काल-चक्र, जिसका उपयोग विंशोत्तरी दशा की पुष्टि के लिए किया जाता है।",
      en: "A faster 36-year Nakshatra-based cycle of 8 Yoginis (Mangala 1 yr through Sankata 8 yrs), traditionally used alongside Vimshottari to cross-verify timing."
    },
    keyPoints: [
      {
        term: { hi: "शुभ योगिनियाँ", en: "Benefic Yoginis" },
        meaning: {
          hi: "मंगला (चंद्र), धान्या (गुरु), भद्रिका (बुध) और सिद्धा (शुक्र) सामान्यतः सहज उन्नति व सहयोग की दशाएँ मानी जाती हैं।",
          en: "Mangala (Moon), Dhanya (Jupiter), Bhadrika (Mercury), and Siddha (Venus) are classically viewed as supportive periods."
        }
      },
      {
        term: { hi: "मिश्रित व परीक्षाकारी योगिनियाँ", en: "Mixed & Testing Yoginis" },
        meaning: {
          hi: "पिंगला (सूर्य) व भ्रामरी (मंगल) सक्रियता/परिवर्तन लाती हैं; उल्का (शनि) व संकटा (राहु) धैर्य, अनुशासन व सतर्क निर्णय की माँग करती हैं।",
          en: "Pingala (Sun) and Bhramari (Mars) bring movement and intensity; Ulka (Saturn) and Sankata (Rahu) call for patience, discipline, and careful judgment."
        }
      }
    ],
    practicalTip: {
      hi: "योगिनी दशा को हमेशा विंशोत्तरी दशा के साथ मिलाकर देखें — जब दोनों एक जैसा संकेत दें, तब उस समय की प्रवृत्ति अधिक स्पष्ट होती है।",
      en: "Always cross-check Yogini Dasha with Vimshottari — overlapping themes across both systems carry stronger clarity."
    }
  },
  dasha_jaimini: {
    key: "dasha_jaimini",
    triggerTitle: {
      hi: "जैमिनी चर कारक व चर दशा को कैसे समझें?",
      en: "How to Read Jaimini Chara Karakas & Chara Dasha?"
    },
    whatItShows: {
      hi: 'महर्षि जैमिनी पद्धति में ग्रहों के अंश (डिग्री) के अनुसार 7 चर कारक (आत्मकारक से दारकारक तक) तय होते हैं और दशा ग्रह के बजाय "राशियों" की चलती है।',
      en: "In the Jaimini system, planets take 7 variable roles (Chara Karakas from Atmakaraka to Darakaraka) by their degree within a sign, and Dashas run by Zodiac Signs (Rashis) rather than planets."
    },
    keyPoints: [
      {
        term: { hi: "7 चर कारक (AK से DK)", en: "7 Chara Karakas (AK to DK)" },
        meaning: {
          hi: "राशि में सर्वाधिक अंश वाला ग्रह आत्मकारक (AK — आत्मा व जीवन-उद्देश्य), दूसरा अमात्यकारक (AmK — करियर), और सबसे कम अंश वाला दारकारक (DK — जीवनसाथी/साझेदारी) होता है।",
          en: "The planet with the highest degree in a sign is Atmakaraka (AK — soul & life path), second is Amatyakaraka (AmK — career), and lowest is Darakaraka (DK — spouse/partnerships)."
        }
      },
      {
        term: { hi: "राशि-आधारित चर दशा", en: "Sign-Based Chara Dasha" },
        meaning: {
          hi: "प्रत्येक राशि दशा की अवधि (1–12 वर्ष) उस राशि से उसके स्वामी की दूरी पर आधारित होती है। दशा के समय उस राशि और उससे जुड़ने वाले कारकों के विषय सक्रिय होते हैं।",
          en: "Each sign’s Dasha lasts 1–12 years depending on how far its lord sits from that sign, activating the houses and Karakas linked to that sign."
        }
      }
    ],
    practicalTip: {
      hi: 'नवांश (D-9) में आत्मकारक ग्रह जिस राशि में बैठता है, उसे "कारकांश" कहते हैं — यह व्यक्ति की स्वाभाविक रुचि व आध्यात्मिक झुकाव बताता है।',
      en: "The sign occupied by your Atmakaraka in the D-9 Navamsha chart is the Karakamsha, reflecting core talents and inner purpose."
    }
  },
  navamsha_shodashavarga: {
    key: "navamsha_shodashavarga",
    triggerTitle: {
      hi: "नवांश (D-9) व 16 षोडशवर्ग को कैसे समझें?",
      en: "How to Read Navamsha (D-9) & 16 Shodashavarga?"
    },
    whatItShows: {
      hi: "लग्न कुंडली (D-1) पूरे जीवन का नक्शा है, जबकि 16 षोडशवर्ग किसी एक विशिष्ट विषय (जैसे विवाह D-9, करियर D-10, शिक्षा D-24, संपत्ति D-4) को ज़ूम करके देखने वाले सूक्ष्म चार्ट हैं।",
      en: "While D-1 is the whole-life map, the 16 Shodashavarga charts act like magnifying lenses for dedicated themes (marriage D-9, career D-10, education D-24, property D-4, etc.)."
    },
    keyPoints: [
      {
        term: { hi: "नवांश (D-9) की अनिवार्यता", en: "Why Navamsha (D-9) Matters Most" },
        meaning: {
          hi: "शास्त्रों में D-1 को वृक्ष और D-9 को उसका फल कहा गया है। कोई ग्रह D-1 में साधारण होकर भी D-9 में उच्च/स्वगृही हो तो समय के साथ उत्तम बल पाता है।",
          en: "Classics call D-1 the tree and D-9 its fruit. A planet gaining dignity in D-9 matures steadily with time."
        }
      },
      {
        term: { hi: "जन्म-समय संवेदनशीलता (Sensitivity)", en: "Birth-Time Sensitivity" },
        meaning: {
          hi: "D-1 लग्न ~2 घंटे में बदलता है, D-9 लग्न ~13 मिनट में, और D-60 लग्न ~2 मिनट में। अनिश्चित जन्म समय होने पर मुख्यतः D-1, चंद्र व सूर्य चार्ट पर ही भरोसा करें।",
          en: "D-1 Lagna shifts every ~2 hours, D-9 every ~13 minutes, and D-60 every ~2 minutes. If birth time is approximate, rely primarily on D-1, Moon, and Sun charts."
        }
      }
    ],
    practicalTip: {
      hi: "किसी भी वर्ग चार्ट को स्वतंत्र रूप से नहीं, बल्कि हमेशा मुख्य लग्न कुंडली (D-1) की पुष्टि के लिए साथ में पढ़ें।",
      en: "Never read a divisional chart in isolation — always use it to verify and refine promises already seen in D-1."
    }
  },
  dosha_parihar_gochar: {
    key: "dosha_parihar_gochar",
    triggerTitle: {
      hi: "दोष परिहार नियम व लाइव गोचर को कैसे समझें?",
      en: "How to Read Dosha Parihar (Exceptions) & Live Gochar?"
    },
    whatItShows: {
      hi: "यह खंड शास्त्रीय नियमों और उनके परिहार (अपवाद/भंग) के साथ 5 प्रमुख दोषों की निष्पक्ष जाँच करता है, तथा आकाश में आज के ग्रहों (लाइव गोचर) का आपकी जन्म राशि व लग्न पर प्रभाव दिखाता है।",
      en: "Objectively evaluates 5 major classical Doshas along with their traditional cancellation (Parihar) rules, and maps today’s live planetary transits (Gochar) onto your natal Moon and Lagna."
    },
    keyPoints: [
      {
        term: { hi: "दोष परिहार / भंग (Cancellation)", en: "Dosha Parihar (Cancellation)" },
        meaning: {
          hi: "यदि किसी दोष के साथ शास्त्रीय परिहार (जैसे गुरु दृष्टि, स्वराशि मंगल, या ग्रह बाहर होना) लागू होता है, तो दोष निष्प्रभावी या अत्यंत हल्का हो जाता है। इससे भयभीत होने की आवश्यकता नहीं।",
          en: "When classical cancellation conditions apply (such as Jupiter’s aspect or Mars in its own sign), a Dosha becomes neutralized or mild — there is no cause for fear."
        }
      },
      {
        term: { hi: "गोचर वेध (Vedha) व द्वि-गोचर (Double Transit)", en: "Gochar Vedha & Double Transit" },
        meaning: {
          hi: "वेध का अर्थ है किसी दूसरे गोचर ग्रह द्वारा शुभ गोचर का अस्थायी अवरोध। जब गुरु और शनि दोनों एक ही भाव पर दृष्टि या स्थिति बनाएँ (द्वि-गोचर), तो उस भाव के कार्य शीघ्र गति पकड़ते हैं।",
          en: "Vedha occurs when another transiting planet temporarily obstructs a favorable transit. Double Transit happens when both Jupiter and Saturn simultaneously activate the same house."
        }
      }
    ],
    practicalTip: {
      hi: "गोचर हमेशा वर्तमान महादशा/अंतर्दशा के अधीन काम करता है — दशा और गोचर के समन्वय से ही सटीक समय का बोध होता है।",
      en: "Transits always operate under the umbrella of your active Dasha — combining Dasha and Gochar gives the clearest timing picture."
    }
  }
};
const KundaliViewModeBar = ({
  mode,
  onChangeMode,
  language
}) => {
  const simpleDesc = VIEW_MODE_DESCRIPTORS.simple;
  const advDesc = VIEW_MODE_DESCRIPTORS.advanced;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gradient-to-r from-[#161008] via-[#0f172a] to-[#12100a] border border-amber-500/45 rounded-2xl p-3.5 sm:p-4 shadow-lg no-print", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col lg:flex-row lg:items-center justify-between gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-0.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs font-bold text-amber-300 uppercase tracking-wider", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-3.5 h-3.5 text-amber-400 shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: language === "en" ? "Choose Kundali Reading Mode" : "कुंडली देखने का माध्यम चुनें (Viewing Mode)" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-amber-100/85 leading-relaxed", children: mode === "simple" ? pickGuideText(simpleDesc.description, language) : pickGuideText(advDesc.description, language) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "grid grid-cols-2 gap-2 bg-slate-950/90 p-1.5 rounded-xl border border-amber-700/40 shrink-0",
        role: "tablist",
        "aria-label": language === "en" ? "Kundali Viewing Mode" : "कुंडली व्यूइंग मोड",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              role: "tab",
              "aria-selected": mode === "simple",
              onClick: () => onChangeMode("simple"),
              className: `px-3 sm:px-4 py-2 rounded-lg text-left transition-all cursor-pointer flex items-center gap-2 ${mode === "simple" ? "bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 shadow-md" : "text-amber-200 hover:bg-slate-900"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-4 h-4 shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-extrabold whitespace-nowrap", children: language === "en" ? "Simple Mode" : "सरल कुंडली" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: `text-[10px] leading-tight whitespace-nowrap ${mode === "simple" ? "text-slate-900 font-semibold" : "text-amber-300/75"}`,
                      children: language === "en" ? "General Readers" : "सामान्य जन के लिए"
                    }
                  )
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              role: "tab",
              "aria-selected": mode === "advanced",
              onClick: () => onChangeMode("advanced"),
              className: `px-3 sm:px-4 py-2 rounded-lg text-left transition-all cursor-pointer flex items-center gap-2 ${mode === "advanced" ? "bg-gradient-to-r from-emerald-500 to-amber-400 text-slate-950 shadow-md" : "text-amber-200 hover:bg-slate-900"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "w-4 h-4 shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-extrabold whitespace-nowrap", children: language === "en" ? "Advanced Mode" : "विशेषज्ञ मोड" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: `text-[10px] leading-tight whitespace-nowrap ${mode === "advanced" ? "text-slate-900 font-semibold" : "text-amber-300/75"}`,
                      children: language === "en" ? "Jyotish Scholars" : "ज्योतिष विशेषज्ञ हेतु"
                    }
                  )
                ] })
              ]
            }
          )
        ]
      }
    )
  ] }) });
};
const KundaliChartLegendAndGuide = ({
  chartStyle,
  explainerKey,
  language = "hi",
  compact = false
}) => {
  const [showFull12Key, setShowFull12Key] = reactExports.useState(false);
  const styleGuide = chartStyle === "south" ? RASHI_VS_BHAVA_EXPLAINER.south : RASHI_VS_BHAVA_EXPLAINER.north;
  const chartExplainer = explainerKey ? CHART_EXPLAINERS[explainerKey] : void 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full mt-3 pt-2.5 border-t border-amber-800/40 space-y-2 text-left", children: [
    chartExplainer && !compact && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-amber-100/85 leading-relaxed bg-slate-950/70 border border-amber-900/40 rounded-lg px-2.5 py-1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-amber-300", children: language === "en" ? "What this chart shows: " : "यह चक्र क्या बताता है: " }),
      pickGuideText(chartExplainer.shortPurpose, language)
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg bg-amber-950/30 border border-amber-700/35 px-2.5 py-2 space-y-1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10.5px] font-bold text-amber-300 flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "w-3 h-3 text-amber-400 shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: pickGuideText(RASHI_VS_BHAVA_EXPLAINER.heading, language) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setShowFull12Key((prev) => !prev),
            className: "text-[10px] font-bold text-emerald-300 hover:text-emerald-200 underline underline-offset-2 cursor-pointer shrink-0 no-print",
            children: showFull12Key ? language === "en" ? "Hide 1–12 List" : "1–12 सूची छिपाएँ" : language === "en" ? "1–12 Key" : "1–12 राशि/भाव सूची"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10.5px] text-amber-100/85 leading-relaxed", children: pickGuideText(styleGuide.summary, language) }),
      showFull12Key && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-1.5 border-t border-amber-800/35 space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold text-amber-300 mb-1", children: language === "en" ? "1–12 Rashi Numbers (Zodiac Signs)" : "1–12 राशि अंक (खाने के अंदर लिखे अंक)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 sm:grid-cols-4 gap-1 text-[10px]", children: RASHI_12_REFERENCE.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "px-1.5 py-0.5 rounded bg-slate-950/85 border border-slate-800 text-amber-100 tabular-nums",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("b", { className: "text-amber-400", children: r.number }),
                "=",
                " ",
                language === "en" ? r.nameEn : r.nameHi
              ]
            },
            r.number
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold text-emerald-300 mb-1", children: language === "en" ? "1–12 Bhavas (Life Houses)" : "1–12 भाव (जीवन के 12 क्षेत्र)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-1 text-[10px]", children: BHAVA_12_REFERENCE.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "px-1.5 py-0.5 rounded bg-slate-950/85 border border-slate-800 text-slate-200",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("b", { className: "text-emerald-300 tabular-nums", children: [
                  language === "en" ? `H${b.house}` : `भाव ${b.house}`,
                  ":"
                ] }),
                " ",
                language === "en" ? b.themeEn : b.themeHi
              ]
            },
            b.house
          )) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap items-center justify-center gap-1 text-[10px]", children: GRAHA_LEGEND_ITEMS.map((g) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "span",
        {
          className: "px-1.5 py-0.5 rounded bg-slate-950/90 border border-amber-800/35 text-amber-200/95 whitespace-nowrap",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("b", { className: "text-amber-400 font-mono", children: [
              g.shortHi,
              "/",
              g.shortEn
            ] }),
            "=",
            language === "en" ? g.fullEn : g.fullHi
          ]
        },
        g.id
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-center gap-x-2.5 gap-y-0.5 text-[10px] text-emerald-300/90 font-medium", children: [
        GRAHA_SYMBOL_LEGEND.slice(0, 2).map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("b", { className: "font-mono", children: s.symbol }),
          " ",
          pickGuideText(s.label, language)
        ] }, s.symbol)),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-0.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUp, { className: "w-2.5 h-2.5", strokeWidth: 1.75 }),
          language === "en" ? "Exalted" : "उच्च"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-0.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDown, { className: "w-2.5 h-2.5", strokeWidth: 1.75 }),
          language === "en" ? "Debilitated" : "नीच"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("b", { className: "font-mono", children: "°" }),
          " ",
          language === "en" ? "Degree (0–30°)" : "अंश (0–30°)"
        ] })
      ] })
    ] })
  ] });
};
const CollapsibleHowToReadCard = ({
  guideKey,
  language = "hi",
  defaultOpen = false,
  className = ""
}) => {
  const [isOpen, setIsOpen] = reactExports.useState(defaultOpen);
  const guide = TABLE_HOW_TO_READ_GUIDES[guideKey];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: `rounded-xl bg-slate-950/85 border border-amber-500/35 overflow-hidden transition-colors no-print ${className}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => setIsOpen((prev) => !prev),
            "aria-expanded": isOpen,
            className: "w-full px-3.5 py-2.5 flex items-center justify-between gap-2 text-left hover:bg-amber-950/25 transition-colors cursor-pointer",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleQuestionMark, { className: "w-4 h-4 text-amber-400 shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-bold text-amber-200 truncate", children: [
                  language === "en" ? "How to Read This? — " : "इसे कैसे समझें? — ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-amber-100 font-semibold", children: pickGuideText(guide.triggerTitle, language) })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 text-[11px] font-bold text-emerald-300 shrink-0 whitespace-nowrap", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: isOpen ? language === "en" ? "Hide" : "बंद करें" : language === "en" ? "Read Guide" : "व्याख्या देखें" }),
                isOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-3.5 h-3.5" })
              ] })
            ]
          }
        ),
        isOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-3.5 pb-3.5 pt-2 border-t border-amber-900/40 space-y-2.5 text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 rounded-lg bg-amber-950/25 border border-amber-800/35 text-amber-100/90 leading-relaxed", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-amber-300 block mb-0.5", children: language === "en" ? "What This Table Shows:" : "यह तालिका क्या दर्शाती है?" }),
            pickGuideText(guide.whatItShows, language)
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-emerald-300 block text-[11px]", children: language === "en" ? "Meaning of Key Numbers & Terms:" : "अंकों और शब्दों का सरल अर्थ:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1.5", children: guide.keyPoints.map((kp, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "li",
              {
                className: "p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-200 leading-relaxed",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("b", { className: "text-amber-300", children: [
                    pickGuideText(kp.term, language),
                    ":"
                  ] }),
                  " ",
                  pickGuideText(kp.meaning, language)
                ]
              },
              idx
            )) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 rounded-lg bg-emerald-950/25 border border-emerald-700/35 text-emerald-200/95 leading-relaxed", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("b", { className: "text-emerald-300", children: language === "en" ? "Reading Note: " : "ध्यान देने योग्य बात: " }),
            pickGuideText(guide.practicalTip, language)
          ] })
        ] })
      ]
    }
  );
};
function convertVargaSlotsToChartHouses(varga, report) {
  const planetById = new Map(report.planets.map((p) => [p.id, p]));
  return varga.houses.map((slot) => ({
    houseNumber: slot.houseNumber,
    rashiNumber: slot.rashiNumber,
    rashiName: slot.rashiNameHi,
    bhavaTitle: BHAVA_12_REFERENCE[slot.houseNumber - 1]?.nameHi || `भाव ${slot.houseNumber}`,
    planets: slot.planets.map((sp) => {
      const match = planetById.get(sp.id);
      return {
        shortHindi: match?.shortHindi || sp.shortHindi,
        chartLabel: match?.chartLabel || sp.shortHindi,
        degInt: match?.degInt ?? sp.degInt,
        hindiName: match?.hindiName || sp.hindiName,
        degree: match?.degree || `${sp.degInt}°`,
        fullDegreeDMS: match?.fullDegreeDMS || sp.fullDMS,
        statusBadge: match?.statusBadge || "madhyam"
      };
    })
  }));
}
const AdvancedShodashavargaPanel = ({
  kundali,
  language,
  renderChart
}) => {
  const vargas = kundali.phase1Astronomy?.shodashavarga || [];
  const [selectedVargaId, setSelectedVargaId] = reactExports.useState("D9");
  if (vargas.length === 0) return null;
  const activeVarga = vargas.find((v) => v.spec.id === selectedVargaId) || vargas[0];
  const chartHouses = convertVargaSlotsToChartHouses(activeVarga, kundali);
  const sensitivityBadgeStyle = {
    low: "bg-emerald-950/80 text-emerald-300 border-emerald-500/40",
    moderate: "bg-amber-950/80 text-amber-300 border-amber-500/40",
    high: "bg-orange-950/80 text-orange-300 border-orange-500/40",
    critical: "bg-rose-950/80 text-rose-300 border-rose-500/40"
  };
  const sensitivityLabelHi = {
    low: "कम संवेदनशील (स्थिर)",
    moderate: "मध्यम समय-संवेदनशील",
    high: "उच्च समय-संवेदनशील",
    critical: "अति सूक्ष्म (1–2 मिनट में परिवर्तनीय)"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#0e1525] border border-amber-700/50 rounded-2xl p-4 sm:p-6 shadow-xl space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-2 border-b border-amber-900/40 pb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-base sm:text-xl font-bold font-vedic text-amber-100 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "w-5 h-5 text-amber-400" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: language === "en" ? "All 16 Shodashavarga Divisional Charts (D1–D60 • BPHS)" : "सम्पूर्ण 16 षोडशवर्ग कुंडलियाँ (D1–D60 • बृहत् पाराशर होरा मानक)" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-amber-300/80 mt-0.5", children: language === "en" ? "Select any divisional chart to inspect its BPHS method, sign placements, and birth-time sensitivity" : "किसी भी वर्ग चक्र को चुनें — BPHS गणना विधि, ग्रह राशि-स्थिति और जन्म-समय संवेदनशीलता सहित" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-mono px-2.5 py-1 rounded-lg bg-amber-500/15 text-amber-300 border border-amber-500/35 font-bold", children: "16 BPHS Vargas" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CollapsibleHowToReadCard, { guideKey: "navamsha_shodashavarga", language }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: vargas.map((v) => {
      const isSelected = v.spec.id === activeVarga.spec.id;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: () => setSelectedVargaId(v.spec.id),
          className: `px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer tabular-nums ${isSelected ? "bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 shadow-md" : "bg-slate-950/90 hover:bg-slate-900 text-amber-200 border border-amber-800/40"}`,
          children: [
            v.spec.id,
            " • ",
            v.spec.nameHi
          ]
        },
        v.spec.id
      );
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-5 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-5", children: renderChart({
        houses: chartHouses,
        title: `${activeVarga.spec.id} — ${activeVarga.spec.nameHi} (${activeVarga.ascendantRashiNameHi} लग्न)`,
        subtitle: `${activeVarga.spec.sanskritName} • ${activeVarga.spec.id}`,
        explainerKey: activeVarga.spec.id === "D9" ? "navamsha_d9" : activeVarga.spec.id === "D10" ? "dashamsha_d10" : "shodashavarga"
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7 space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl bg-slate-950/90 border border-amber-800/40 space-y-2.5 text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-bold text-amber-100 text-sm", children: [
              activeVarga.spec.id,
              " — ",
              activeVarga.spec.nameHi,
              " (",
              activeVarga.spec.sanskritName,
              ")"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: `text-[10.5px] px-2.5 py-0.5 rounded-md border font-bold ${sensitivityBadgeStyle[activeVarga.spec.birthTimeSensitivity] || sensitivityBadgeStyle.moderate}`,
                children: language === "en" ? `Time Sensitivity: ${activeVarga.spec.birthTimeSensitivity.toUpperCase()}` : sensitivityLabelHi[activeVarga.spec.birthTimeSensitivity] || "मध्यम"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-emerald-300 font-medium", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: language === "en" ? "Primary Theme: " : "मुख्य विषय: " }),
            activeVarga.spec.significationHi
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-amber-200/90 leading-relaxed", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: language === "en" ? "BPHS Formula: " : "शास्त्रीय गणना विधि: " }),
            language === "en" ? activeVarga.spec.calculationMethodEn : activeVarga.spec.calculationMethodHi
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 rounded-lg bg-amber-950/30 border border-amber-700/35 text-amber-200/90 leading-relaxed", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("b", { className: "text-amber-300", children: language === "en" ? "Accuracy & Limitations: " : "सटीकता व सीमा नोट: " }),
            language === "en" ? activeVarga.spec.limitationsEn : activeVarga.spec.limitationsHi
          ] }),
          activeVarga.d60DeityAscendantHi && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-emerald-300 font-semibold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: language === "en" ? "D-60 Lagna Deity: " : "D-60 षष्ट्यंश देवता (लग्न): " }),
            activeVarga.d60DeityAscendantHi
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-slate-950/90 border border-amber-800/40 p-3 space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold text-amber-300", children: language === "en" ? `Planetary Signs in ${activeVarga.spec.id} (${activeVarga.spec.nameHi})` : `${activeVarga.spec.id} (${activeVarga.spec.nameHi}) में नवग्रह स्थिति` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs", children: kundali.planets.map((pl) => {
            const rNum = activeVarga.planetRashis[pl.id];
            const rMeta = RASHI_12_REFERENCE[(rNum || 1) - 1];
            const isVargottama = activeVarga.spec.id === "D9" && rNum === pl.rashiNumber;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: `p-2 rounded-lg border flex items-center justify-between gap-1 ${isVargottama ? "bg-emerald-950/40 border-emerald-500/45" : "bg-slate-900/80 border-slate-800"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-amber-100", children: pl.hindiName }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-[11px] text-amber-300 tabular-nums", children: [
                    rNum,
                    ". ",
                    language === "en" ? rMeta?.nameEn : rMeta?.nameHi,
                    isVargottama && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-1 text-emerald-300 font-sans font-bold", children: [
                      "(",
                      language === "en" ? "Vargottama" : "वर्गोत्तम",
                      ")"
                    ] })
                  ] })
                ]
              },
              pl.id
            );
          }) })
        ] })
      ] })
    ] })
  ] });
};
const AdvancedShadbalaAndBhavaPanel = ({
  kundali,
  language
}) => {
  const sb = kundali.shadbalaBhava;
  if (!sb) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#0e1525] border border-amber-700/50 rounded-2xl p-4 sm:p-6 shadow-xl space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-2 border-b border-amber-900/40 pb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-base sm:text-xl font-bold font-vedic text-amber-100 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-5 h-5 text-amber-400" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: language === "en" ? "6-Fold Parashari Shadbala (Virupas & Rupas — BPHS Ch. 27)" : "सम्पूर्ण 6-अंगी पाराशरी षड्बल तालिका (विरूप व रूप — BPHS अध्याय 27)" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-amber-300/80 mt-0.5", children: language === "en" ? "Sthana, Dig, Kala, Cheshta, Naisargika & Drik Bala with Required Minimum Rupas and Ishta/Kashta Phala" : "स्थान, दिग्, काल, चेष्टा, नैसर्गिक व दृक् बल — वास्तविक विरूप, कुल रूप, न्यूनतम मान एवं इष्ट/कष्ट फल सहित" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-mono px-2.5 py-1 rounded-lg bg-emerald-500/15 text-emerald-300 border border-emerald-500/35 font-bold", children: "1 Rupa = 60 Virupas" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CollapsibleHowToReadCard, { guideKey: "shadbala", language }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full min-w-[780px] text-left border-collapse text-xs tabular-nums", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-amber-800/60 bg-amber-950/40 text-amber-300 font-bold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2.5 px-2", children: "ग्रह" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2.5 px-2 text-right", children: "स्थान" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2.5 px-2 text-right", children: "दिग्" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2.5 px-2 text-right", children: "काल" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2.5 px-2 text-right", children: "चेष्टा" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2.5 px-2 text-right", children: "नैसर्गिक" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2.5 px-2 text-right", children: "दृक्" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2.5 px-2 text-right", children: "कुल विरूप" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2.5 px-2 text-right", children: "रूप / न्यूनतम" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2.5 px-2 text-right", children: "इष्ट / कष्ट" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2.5 px-2", children: "रैंक व श्रेणी" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-slate-800/80", children: sb.planets.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-slate-900/60 transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2.5 px-2 font-bold text-amber-100 whitespace-nowrap", children: [
            p.hindiName,
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-mono text-amber-400", children: [
              "(",
              p.shortHindi,
              ")"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-2 text-right font-mono text-slate-200", children: p.sthanaBala.total.toFixed(1) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-2 text-right font-mono text-slate-200", children: p.digBala.toFixed(1) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-2 text-right font-mono text-slate-200", children: p.kalaBala.total.toFixed(1) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-2 text-right font-mono text-slate-200", children: p.cheshtaBala.toFixed(1) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-2 text-right font-mono text-slate-200", children: p.naisargikaBala.toFixed(1) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "td",
            {
              className: `py-2.5 px-2 text-right font-mono ${p.drikBala >= 0 ? "text-emerald-300" : "text-rose-300"}`,
              children: p.drikBala >= 0 ? `+${p.drikBala.toFixed(1)}` : p.drikBala.toFixed(1)
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-2 text-right font-mono font-bold text-amber-200", children: p.totalVirupas.toFixed(1) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2.5 px-2 text-right font-mono font-bold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: p.meetsMinimum ? "text-emerald-300" : "text-amber-300", children: p.totalRupas.toFixed(2) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-slate-400", children: [
              " / ",
              p.requiredRupas.toFixed(1)
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2.5 px-2 text-right font-mono text-[11px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-300", children: p.ishtaPhala.toFixed(1) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-500", children: " / " }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-rose-300", children: p.kashtaPhala.toFixed(1) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2.5 px-2 whitespace-nowrap", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-block mr-1.5 font-mono font-bold text-yellow-300", children: [
              "#",
              p.rank
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: `text-[11px] font-semibold ${p.meetsMinimum ? "text-emerald-300" : "text-amber-300"}`,
                children: p.gradeHi
              }
            )
          ] })
        ] }, p.id)) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#0e1525] border border-amber-700/50 rounded-2xl p-4 sm:p-6 shadow-xl space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap items-center justify-between gap-2 border-b border-amber-900/40 pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-base sm:text-xl font-bold font-vedic text-amber-100 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Compass, { className: "w-5 h-5 text-amber-400" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: language === "en" ? "12-House Bhava Bala (House Strength Analysis)" : "द्वादश भाव बल तालिका (12-House Parashari Bhava Bala)" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-amber-300/80 mt-0.5", children: language === "en" ? "Bhavadhipati Bala + Bhava Dig Bala + Bhava Drishti Bala across all 12 houses" : "भावाधिपति बल + भाव दिग्बल + भाव दृक् बल के योग से 12 भावों की वास्तविक रैंकिंग" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CollapsibleHowToReadCard, { guideKey: "bhava_bala", language }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full min-w-[700px] text-left border-collapse text-xs tabular-nums", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-amber-800/60 bg-amber-950/40 text-amber-300 font-bold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2.5 px-2", children: "भाव" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2.5 px-2", children: "राशि (स्वामी)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2.5 px-2 text-right", children: "भावाधिपति बल" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2.5 px-2 text-right", children: "भाव दिग्बल" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2.5 px-2 text-right", children: "भाव दृक् बल" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2.5 px-2 text-right", children: "कुल रूप (विरूप)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2.5 px-2", children: "रैंक व स्थिति" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-slate-800/80", children: sb.bhavas.map((bh) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-slate-900/60 transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2 px-2 font-bold text-amber-100 whitespace-nowrap", children: [
            bh.houseNumber,
            ". ",
            bh.bhavaTitleHi
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2 px-2 text-amber-200 whitespace-nowrap", children: [
            bh.rashiNameHi,
            " (",
            bh.lordHindi,
            ")"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-2 text-right font-mono text-slate-200", children: bh.bhavadhipatiBala.toFixed(1) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-2 text-right font-mono text-slate-200", children: bh.bhavaDigBala.toFixed(1) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "td",
            {
              className: `py-2 px-2 text-right font-mono ${bh.bhavaDrishtiBala >= 0 ? "text-emerald-300" : "text-rose-300"}`,
              children: bh.bhavaDrishtiBala >= 0 ? `+${bh.bhavaDrishtiBala.toFixed(1)}` : bh.bhavaDrishtiBala.toFixed(1)
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2 px-2 text-right font-mono font-bold text-yellow-300", children: [
            bh.totalRupas.toFixed(2),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-slate-400 font-normal", children: [
              "(",
              bh.totalVirupas.toFixed(0),
              ")"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2 px-2 whitespace-nowrap", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono font-bold text-amber-300 mr-1.5", children: [
              "#",
              bh.rank
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: `text-[11px] font-semibold ${bh.rank <= 4 ? "text-emerald-300" : bh.rank <= 8 ? "text-amber-200" : "text-slate-300"}`,
                children: bh.gradeHi
              }
            )
          ] })
        ] }, bh.houseNumber)) })
      ] }) })
    ] })
  ] });
};
const AdvancedAshtakavargaPanel = ({
  kundali,
  language
}) => {
  const av = kundali.ashtakavarga;
  if (!av) return null;
  const planetEntries = Object.entries(av.planetBindus || {});
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#0e1525] border border-amber-700/50 rounded-2xl p-4 sm:p-6 shadow-xl space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-2 border-b border-amber-900/40 pb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-base sm:text-xl font-bold font-vedic text-amber-100 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-5 h-5 text-amber-400" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: language === "en" ? "Ashtakavarga & Sarvashtakavarga (Bindu Matrix)" : "अष्टकवर्ग एवं सर्वाष्टकवर्ग तालिका (Bindu Matrix)" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-amber-300/80 mt-0.5", children: language === "en" ? `Total Sarvashtakavarga Sum: ${av.totalBindusSum} Bindus • Strongest: ${av.strongestRashis.join(", ")}` : `कुल सर्वाष्टकवर्ग योग: ${av.totalBindusSum} बिंदु • सर्वाधिक प्रबल राशियाँ: ${av.strongestRashis.join(", ")}` })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] font-mono px-2.5 py-1 rounded-lg bg-amber-500/15 text-amber-300 border border-amber-500/35 font-bold tabular-nums", children: [
        "SAV Total: ",
        av.totalBindusSum
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CollapsibleHowToReadCard, { guideKey: "ashtakavarga", language }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full min-w-[740px] text-center border-collapse text-xs tabular-nums", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-amber-800/60 bg-amber-950/40 text-amber-300 font-bold", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2.5 px-2 text-left", children: "ग्रह / वर्ग" }),
        RASHI_12_REFERENCE.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("th", { className: "py-2.5 px-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: r.number }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-normal text-amber-200/80", children: language === "en" ? r.nameEn.slice(0, 3) : r.nameHi })
        ] }, r.number)),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2.5 px-2 text-right", children: "योग" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { className: "divide-y divide-slate-800/80", children: [
        planetEntries.map(([planetName, scores]) => {
          const rowSum = scores.reduce((a, b) => a + b, 0);
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-slate-900/60", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-2 text-left font-bold text-amber-100 whitespace-nowrap", children: planetName }),
            scores.map((val, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "td",
              {
                className: `py-2 px-1.5 font-mono ${val >= 5 ? "text-emerald-300 font-bold" : val <= 2 ? "text-rose-300/90" : "text-slate-200"}`,
                children: val
              },
              idx
            )),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-2 text-right font-mono font-bold text-amber-300", children: rowSum })
          ] }, planetName);
        }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-amber-950/50 border-t-2 border-amber-500/60 font-extrabold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-2 text-left text-yellow-300 whitespace-nowrap", children: language === "en" ? "Sarvashtakavarga (SAV)" : "सर्वाष्टकवर्ग (कुल)" }),
          av.sarvashtakavarga.map((val, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "td",
            {
              className: `py-2.5 px-1.5 font-mono ${val >= 30 ? "text-emerald-300" : val < 25 ? "text-rose-300" : "text-amber-200"}`,
              children: val
            },
            idx
          )),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-2 text-right font-mono text-yellow-300", children: av.totalBindusSum })
        ] })
      ] })
    ] }) })
  ] });
};
const AdvancedDashaSuitePanel = ({
  kundali,
  language
}) => {
  const p2 = kundali.phase2Jyotish;
  const [dashaTab, setDashaTab] = reactExports.useState("vimshottari");
  if (!p2) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#0e1525] border border-amber-700/50 rounded-2xl p-4 sm:p-6 shadow-xl space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-3 border-b border-amber-900/40 pb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-base sm:text-xl font-bold font-vedic text-amber-100 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-5 h-5 text-amber-400" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: language === "en" ? "Deep Dasha Suite — Vimshottari (to Sookshma), Yogini & Jaimini Chara" : "गहन दशा विश्लेषण — विंशोत्तरी (प्रत्यंतर-सूक्ष्म), योगिनी एवं जैमिनी चर दशा" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-amber-300/80 mt-0.5", children: [
          p2.vimshottari.balanceAtBirthHi,
          " • ",
          p2.yogini.balanceAtBirthHi
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap items-center gap-1.5 bg-slate-950 p-1 rounded-xl border border-amber-700/40", children: [
        { id: "vimshottari", label: language === "en" ? "Vimshottari (4-Level)" : "विंशोत्तरी (सूक्ष्म तक)" },
        { id: "yogini", label: language === "en" ? "Yogini (36 Yr)" : "योगिनी दशा (36 वर्ष)" },
        { id: "jaimini", label: language === "en" ? "Jaimini Chara" : "जैमिनी चर दशा" }
      ].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => setDashaTab(t.id),
          className: `px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${dashaTab === t.id ? "bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 shadow" : "text-amber-200 hover:bg-slate-900"}`,
          children: t.label
        },
        t.id
      )) })
    ] }),
    dashaTab === "vimshottari" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CollapsibleHowToReadCard, { guideKey: "dasha_vimshottari", language }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs tabular-nums", children: [
        {
          label: language === "en" ? "Active Mahadasha" : "वर्तमान महादशा",
          node: p2.vimshottari.activeMahadasha,
          accent: "border-emerald-500/50 bg-emerald-950/25"
        },
        {
          label: language === "en" ? "Active Antardasha" : "वर्तमान अंतर्दशा",
          node: p2.vimshottari.activeAntardasha,
          accent: "border-amber-500/50 bg-amber-950/25"
        },
        {
          label: language === "en" ? "Active Pratyantardasha" : "वर्तमान प्रत्यंतर दशा",
          node: p2.vimshottari.activePratyantardasha,
          accent: "border-amber-700/50 bg-slate-950/90"
        },
        {
          label: language === "en" ? "Active Sookshmadasha" : "वर्तमान सूक्ष्म दशा",
          node: p2.vimshottari.activeSookshmadasha,
          accent: "border-amber-700/50 bg-slate-950/90"
        }
      ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-3 rounded-xl border ${item.accent} space-y-1`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10.5px] font-bold text-amber-300 uppercase block", children: item.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-base font-extrabold text-amber-100", children: item.node.lordHindi }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-slate-300 font-mono", children: [
          item.node.startDateHi,
          " – ",
          item.node.endDateHi
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10.5px] text-emerald-300 font-mono", children: [
          language === "en" ? "Progress" : "पूर्ण",
          ": ",
          item.node.progressPct,
          "%"
        ] })
      ] }, item.label)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-slate-950/90 border border-amber-800/40 p-3.5 space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs font-bold text-amber-200", children: [
            p2.vimshottari.activeMahadasha.lordHindi,
            "–",
            p2.vimshottari.activeAntardasha.lordHindi,
            " ",
            language === "en" ? "Pratyantardasha Schedule" : "प्रत्यंतर दशा सारणी"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left text-[11px] border-collapse tabular-nums", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-amber-900/50 text-amber-300", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-1.5 px-2", children: "प्रत्यंतर स्वामी" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-1.5 px-2", children: "आरंभ" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-1.5 px-2", children: "समाप्ति" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-1.5 px-2 text-right", children: "दिन" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-slate-800/70", children: p2.vimshottari.activeAntardashaPratyantars.map((pr, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "tr",
              {
                className: pr.isCurrent ? "bg-emerald-950/40 text-emerald-200 font-bold" : "text-slate-200",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-1.5 px-2", children: [
                    pr.lordHindi,
                    pr.isCurrent && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1.5 text-[9.5px] px-1.5 py-0.5 rounded bg-emerald-500 text-slate-950 font-black", children: "सक्रिय" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-1.5 px-2 font-mono", children: pr.startDateHi }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-1.5 px-2 font-mono", children: pr.endDateHi }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-1.5 px-2 text-right font-mono", children: pr.durationDays })
                ]
              },
              `${pr.lordId}-${idx}`
            )) })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-slate-950/90 border border-amber-800/40 p-3.5 space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs font-bold text-amber-200", children: [
            p2.vimshottari.activePratyantardasha.lordHindi,
            " ",
            language === "en" ? "Pratyantar — Sookshmadasha Schedule" : "प्रत्यंतर के अंतर्गत सूक्ष्म दशा सारणी"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left text-[11px] border-collapse tabular-nums", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-amber-900/50 text-amber-300", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-1.5 px-2", children: "सूक्ष्म स्वामी" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-1.5 px-2", children: "आरंभ" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-1.5 px-2", children: "समाप्ति" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-1.5 px-2 text-right", children: "दिन" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-slate-800/70", children: p2.vimshottari.activePratyantarSookshmas.map((sk, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "tr",
              {
                className: sk.isCurrent ? "bg-emerald-950/40 text-emerald-200 font-bold" : "text-slate-200",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-1.5 px-2", children: [
                    sk.lordHindi,
                    sk.isCurrent && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1.5 text-[9.5px] px-1.5 py-0.5 rounded bg-emerald-500 text-slate-950 font-black", children: "सक्रिय" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-1.5 px-2 font-mono", children: sk.startDateHi }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-1.5 px-2 font-mono", children: sk.endDateHi }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-1.5 px-2 text-right font-mono", children: sk.durationDays })
                ]
              },
              `${sk.lordId}-${idx}`
            )) })
          ] }) })
        ] })
      ] })
    ] }),
    dashaTab === "yogini" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CollapsibleHowToReadCard, { guideKey: "dasha_yogini", language }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3.5 rounded-xl bg-emerald-950/25 border border-emerald-500/45 flex flex-wrap items-center justify-between gap-2 text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-300 font-bold", children: language === "en" ? "Active Yogini Dasha: " : "वर्तमान योगिनी दशा: " }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("b", { className: "text-amber-100", children: [
            p2.yogini.activeMahadasha.yoginiNameHi,
            " (",
            p2.yogini.activeMahadasha.lordHindi,
            ") →",
            " ",
            p2.yogini.activeAntardasha.yoginiNameHi,
            " (",
            p2.yogini.activeAntardasha.lordHindi,
            ")"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-amber-300", children: [
          p2.yogini.activeAntardasha.startDateHi,
          " – ",
          p2.yogini.activeAntardasha.endDateHi
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full min-w-[640px] text-left text-xs border-collapse tabular-nums", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-amber-800/60 bg-amber-950/40 text-amber-300 font-bold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2 px-2", children: "चक्र" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2 px-2", children: "योगिनी (स्वामी)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2 px-2", children: "अवधि" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2 px-2", children: "प्रकृति" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2 px-2", children: "दिनांक विस्तार" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2 px-2", children: "प्रभाव संकेत" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-slate-800/75", children: p2.yogini.mahadashas.slice(0, 16).map((y, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "tr",
          {
            className: y.isCurrent ? "bg-emerald-950/40 font-semibold" : "hover:bg-slate-900/50",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2 px-2 font-mono text-slate-400", children: [
                "#",
                y.cycle
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2 px-2 font-bold text-amber-100 whitespace-nowrap", children: [
                y.yoginiNameHi,
                " (",
                y.lordHindi,
                ")",
                y.isCurrent && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1.5 text-[9.5px] px-1.5 py-0.5 rounded bg-emerald-500 text-slate-950 font-black", children: "सक्रिय" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2 px-2 font-mono text-amber-200 whitespace-nowrap", children: [
                y.years,
                " वर्ष"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-2 whitespace-nowrap", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: `text-[10.5px] font-bold ${y.natureHi === "शुभ" ? "text-emerald-300" : y.natureHi === "मिश्रित" ? "text-amber-300" : "text-rose-300"}`,
                  children: y.natureHi
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2 px-2 font-mono text-slate-200 whitespace-nowrap", children: [
                y.startDateHi,
                " – ",
                y.endDateHi
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-2 text-slate-200", children: y.effectHi })
            ]
          },
          `${y.yoginiNameHi}-${idx}`
        )) })
      ] }) })
    ] }),
    dashaTab === "jaimini" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CollapsibleHowToReadCard, { guideKey: "dasha_jaimini", language }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3.5 rounded-xl bg-amber-950/30 border border-amber-500/40 flex flex-wrap items-center justify-between gap-2 text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-amber-300 font-bold", children: language === "en" ? "Active Chara Dasha: " : "वर्तमान जैमिनी चर दशा: " }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("b", { className: "text-amber-100", children: [
            p2.jaimini.activeMahadasha.rashiNameHi,
            " → ",
            p2.jaimini.activeAntardasha.rashiNameHi
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-2 text-slate-300", children: [
            "(",
            p2.jaimini.sequenceDirectionHi,
            ")"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-emerald-300", children: [
          p2.jaimini.activeMahadasha.startDateHi,
          " – ",
          p2.jaimini.activeMahadasha.endDateHi
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 text-xs", children: p2.jaimini.karakas.map((k) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "p-3 rounded-xl bg-slate-950/90 border border-amber-800/40 space-y-1",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10.5px] font-mono font-extrabold text-amber-400", children: k.code }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-mono text-emerald-300 tabular-nums", children: k.degDMS })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-bold text-amber-100", children: [
              k.nameHi,
              ": ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-yellow-300", children: k.planetHindi })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-slate-300 leading-snug", children: k.significationHi })
          ]
        },
        k.code
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full min-w-[620px] text-left text-xs border-collapse tabular-nums", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-amber-800/60 bg-amber-950/40 text-amber-300 font-bold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2 px-2", children: "राशि दशा" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2 px-2", children: "प्रभावी स्वामी" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2 px-2", children: "वर्ष" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2 px-2", children: "दिनांक विस्तार" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2 px-2", children: "स्वामी बल नियम नोट" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-slate-800/75", children: p2.jaimini.charaDasha.slice(0, 12).map((cd, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "tr",
          {
            className: cd.isCurrent ? "bg-emerald-950/40 font-semibold" : "hover:bg-slate-900/50",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2 px-2 font-bold text-amber-100 whitespace-nowrap", children: [
                cd.rashiNumber,
                ". ",
                cd.rashiNameHi,
                cd.isCurrent && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1.5 text-[9.5px] px-1.5 py-0.5 rounded bg-emerald-500 text-slate-950 font-black", children: "सक्रिय" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-2 text-amber-200 whitespace-nowrap", children: cd.effectiveLordHindi }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2 px-2 font-mono text-yellow-300 whitespace-nowrap", children: [
                cd.durationYears,
                " वर्ष"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2 px-2 font-mono text-slate-200 whitespace-nowrap", children: [
                cd.startDateHi,
                " – ",
                cd.endDateHi
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-2 text-slate-300", children: cd.lordStrengthRuleNoteHi })
            ]
          },
          `${cd.rashiNumber}-${idx}`
        )) })
      ] }) })
    ] })
  ] });
};
const AdvancedDoshaGocharTimelinePanel = ({ kundali, language }) => {
  const p2 = kundali.phase2Jyotish;
  if (!p2) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#0e1525] border border-amber-700/50 rounded-2xl p-4 sm:p-6 shadow-xl space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-amber-900/40 pb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-base sm:text-xl font-bold font-vedic text-amber-100 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-5 h-5 text-amber-400" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: language === "en" ? "Rule-Based 5 Classical Doshas (With Parihar / Cancellation Rules)" : "शास्त्रीय नियम-आधारित 5 प्रमुख दोष परीक्षण (परिहार व अपवाद नियमों सहित)" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-amber-300/80 mt-0.5", children: language === "en" ? "Manglik, Kaalsarp, Pitra, Grahan, and Guru Chandal evaluated transparently with classical cancellation rules" : "मांगलिक, कालसर्प, पितृ, ग्रहण एवं गुरु चांडाल — प्रत्येक दोष के शास्त्रीय नियम और परिहार (भंग) स्पष्ट रूप से" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CollapsibleHowToReadCard, { guideKey: "dosha_parihar_gochar", language }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5", children: p2.yogasAndDoshas.doshas.allList.map((d) => {
        const isFree = d.effectiveStatus === "दोष मुक्त";
        const isPartial = d.effectiveStatus === "आंशिक / परिहार युक्त";
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "p-4 rounded-xl bg-slate-950/90 border border-amber-800/45 space-y-2 text-xs flex flex-col justify-between",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-amber-100 text-sm", children: d.nameHi }),
                    d.subTypeHi && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-amber-300/85", children: d.subTypeHi })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: `text-[10px] px-2 py-0.5 rounded-md border font-bold shrink-0 ${isFree ? "bg-emerald-950/80 text-emerald-300 border-emerald-500/40" : isPartial ? "bg-amber-950/80 text-amber-300 border-amber-500/40" : "bg-rose-950/80 text-rose-300 border-rose-500/40"}`,
                      children: d.effectiveStatus
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-200 leading-relaxed", children: d.explanationHi }),
                d.pariharRulesHi.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2 rounded-lg bg-emerald-950/25 border border-emerald-600/35 text-[11px] text-emerald-200 space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-bold text-emerald-300 flex items-center gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-3 h-3 shrink-0" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: language === "en" ? "Parihar / Cancellation Applied:" : "लागू परिहार / अपवाद नियम:" })
                  ] }),
                  d.pariharRulesHi.map((pr, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    "• ",
                    pr
                  ] }, idx))
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2 rounded-lg bg-slate-900/90 border border-slate-800 text-[11px] text-amber-200/90", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("b", { className: "text-amber-300", children: language === "en" ? "Guidance: " : "उपाय / सलाह: " }),
                d.remedyHi
              ] })
            ]
          },
          d.id
        );
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#0e1525] border border-emerald-700/45 rounded-2xl p-4 sm:p-6 shadow-xl space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap items-center justify-between gap-2 border-b border-amber-900/40 pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-base sm:text-xl font-bold font-vedic text-amber-100 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Compass, { className: "w-5 h-5 text-emerald-400" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: language === "en" ? `Live Sidereal Gochar (${p2.liveGochar.computedAtDateHi})` : `लाइव निरयण ग्रह गोचर एवं वेध विश्लेषण (${p2.liveGochar.computedAtDateHi})` })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-emerald-300/90 mt-0.5", children: [
          p2.liveGochar.sadeSatiLabelHi,
          " • ",
          p2.liveGochar.doubleTransitSummaryHi
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full min-w-[720px] text-left text-xs border-collapse tabular-nums", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-amber-800/60 bg-amber-950/40 text-amber-300 font-bold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2 px-2", children: "गोचर ग्रह" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2 px-2", children: "वर्तमान राशि व अंश" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2 px-2 text-center", children: "चंद्र से भाव" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2 px-2 text-center", children: "लग्न से भाव" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2 px-2", children: "वेध / शुभता" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2 px-2", children: "गोचर प्रभाव" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-slate-800/75", children: p2.liveGochar.grahaRows.map((g) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-slate-900/50 align-top", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2 px-2 font-bold text-amber-100 whitespace-nowrap", children: [
            g.nameHi,
            g.isRetrograde && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1 text-[10px] text-amber-300", children: "(व)" }),
            g.isCombust && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1 text-[10px] text-orange-300", children: "(अ)" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2 px-2 text-amber-200 whitespace-nowrap font-mono", children: [
            g.currentRashiNameHi,
            " ",
            g.degDMS
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-2 text-center font-mono font-bold text-emerald-300", children: g.houseFromNatalMoon }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-2 text-center font-mono text-amber-200", children: g.houseFromNatalLagna }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-2 whitespace-nowrap", children: g.hasVedha ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10.5px] font-bold text-amber-300", children: [
            "वेध (",
            g.vedhaByHi.join(", "),
            ")"
          ] }) : g.isFavorableFromMoon ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10.5px] font-bold text-emerald-300", children: "शुभ गोचर" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10.5px] text-slate-300", children: "सामान्य / सतर्क" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-2 text-slate-200 leading-relaxed", children: g.effectSummaryHi })
        ] }, g.id)) })
      ] }) }),
      p2.liveGochar.upcomingMajorIngresses.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-2 border-t border-amber-900/40 space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold text-amber-300", children: language === "en" ? "Upcoming Major Slow-Planet Sign Changes (Next 18 Months)" : "आगामी 18 माह के प्रमुख बड़े ग्रह राशि-परिवर्तन (गुरु, शनि, राहु, केतु)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 text-xs", children: p2.liveGochar.upcomingMajorIngresses.slice(0, 6).map((ing, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "p-2.5 rounded-lg bg-slate-950/90 border border-slate-800 flex items-center justify-between gap-2",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-bold text-amber-100", children: [
                ing.grahaNameHi,
                ": ",
                ing.fromSignNameHi,
                " → ",
                ing.toSignNameHi
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-slate-400 font-mono", children: [
                ing.dateFormattedHi,
                " • ",
                ing.timeFormattedHi
              ] })
            ] })
          },
          `${ing.graha}-${idx}`
        )) })
      ] })
    ] }),
    kundali.input.warningsHi && kundali.input.warningsHi.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-2xl bg-amber-950/35 border border-amber-500/45 space-y-1.5 text-xs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-bold text-amber-300 flex items-center gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-4 h-4 text-amber-400 shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: language === "en" ? "Birth Time, Timezone & Boundary Notes" : "जन्म समय, टाइमज़ोन एवं सीमा-संधि सूक्ष्म टिप्पणियाँ" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1 text-amber-100/90 leading-relaxed", children: kundali.input.warningsHi.map((w, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        "• ",
        w
      ] }, idx)) })
    ] })
  ] });
};
const RASHI_BOX_MAPPING = [
  { rashiNum: 12, rashiNameHindi: "12. मीन", gridArea: "col-start-1 row-start-1" },
  { rashiNum: 1, rashiNameHindi: "1. मेष", gridArea: "col-start-2 row-start-1" },
  { rashiNum: 2, rashiNameHindi: "2. वृषभ", gridArea: "col-start-3 row-start-1" },
  { rashiNum: 3, rashiNameHindi: "3. मिथुन", gridArea: "col-start-4 row-start-1" },
  { rashiNum: 4, rashiNameHindi: "4. कर्क", gridArea: "col-start-4 row-start-2" },
  { rashiNum: 5, rashiNameHindi: "5. सिंह", gridArea: "col-start-4 row-start-3" },
  { rashiNum: 6, rashiNameHindi: "6. कन्या", gridArea: "col-start-4 row-start-4" },
  { rashiNum: 7, rashiNameHindi: "7. तुला", gridArea: "col-start-3 row-start-4" },
  { rashiNum: 8, rashiNameHindi: "8. वृश्चिक", gridArea: "col-start-2 row-start-4" },
  { rashiNum: 9, rashiNameHindi: "9. धनु", gridArea: "col-start-1 row-start-4" },
  { rashiNum: 10, rashiNameHindi: "10. मकर", gridArea: "col-start-1 row-start-3" },
  { rashiNum: 11, rashiNameHindi: "11. कुंभ", gridArea: "col-start-1 row-start-2" }
];
const SouthIndianKundaliChart = ({
  houses,
  title,
  subtitle,
  lagnaRashiNumber,
  lagnaDegInt,
  explainerKey,
  language = "hi"
}) => {
  const houseByRashiMap = React.useMemo(() => {
    const map = {};
    houses.forEach((h) => {
      map[h.rashiNumber] = h;
    });
    return map;
  }, [houses]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-b from-[#161008] via-[#101726] to-[#0b101d] border-2 border-amber-500/50 rounded-2xl p-3.5 sm:p-5 shadow-xl flex flex-col items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40", children: [
        subtitle,
        " (दक्षिण भारतीय प्रारूप)"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-base sm:text-lg font-bold font-vedic text-amber-100 mt-1", children: title })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full max-w-[360px] aspect-square bg-[#120d06] rounded-xl border-2 border-amber-500/60 p-1 shadow-inner relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-4 grid-rows-4 w-full h-full gap-0.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-start-2 col-span-2 row-start-2 row-span-2 bg-[#181109] border border-amber-600/30 rounded-lg flex flex-col items-center justify-center p-2 text-center z-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl text-amber-400 font-extrabold font-vedic", children: "ॐ" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-extrabold text-yellow-300 mt-0.5", children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] text-amber-300/80 font-mono", children: "दक्षिण भारतीय कुंडली" })
      ] }),
      RASHI_BOX_MAPPING.map((box) => {
        const houseData = houseByRashiMap[box.rashiNum];
        const isLagnaSign = lagnaRashiNumber ? lagnaRashiNumber === box.rashiNum : houseData?.houseNumber === 1;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `${box.gridArea} bg-[#191107] border border-amber-500/40 p-1 rounded-sm flex flex-col justify-between overflow-hidden relative group hover:bg-amber-950/40 transition-colors`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-0.5 border-b border-amber-800/30 pb-0.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-bold text-amber-400/90 leading-none", children: box.rashiNameHindi }),
                isLagnaSign && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-1 py-0.2 rounded bg-emerald-500 text-slate-950 text-[8px] font-black leading-none", children: typeof lagnaDegInt === "number" ? `लग्न ${String(lagnaDegInt).padStart(2, "0")}°` : "लग्न" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-auto py-0.5 flex flex-wrap items-center justify-center gap-x-1 gap-y-0.5", children: houseData?.planets && houseData.planets.length > 0 ? houseData.planets.map((p, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "span",
                {
                  className: "text-[10px] font-extrabold text-amber-100 leading-tight font-mono",
                  title: `${p.hindiName} ${p.fullDegreeDMS}`,
                  children: [
                    p.chartLabel,
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("sup", { className: "text-[8px] text-yellow-400 ml-0.5", children: [
                      p.degInt,
                      "°"
                    ] })
                  ]
                },
                idx
              )) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] text-slate-600 font-mono", children: "—" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[8px] font-mono text-amber-500/60 font-bold", children: [
                "भाव ",
                houseData?.houseNumber || ""
              ] }) })
            ]
          },
          box.rashiNum
        );
      })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      KundaliChartLegendAndGuide,
      {
        chartStyle: "south",
        explainerKey,
        language
      }
    )
  ] });
};
const NorthIndianKundaliChart = ({ houses, title, subtitle, lagnaDegInt, explainerKey, language = "hi" }) => {
  const housePositions = {
    1: { rashiX: 50, rashiY: 42.2, planetX: 50, planetY: 26.5, maxPerLine: 2 },
    2: { rashiX: 25.75, rashiY: 19.8, planetX: 25.75, planetY: 10.2, maxPerLine: 2, isOuterTriangle: true },
    3: { rashiX: 19.6, rashiY: 25.75, planetX: 11.2, planetY: 25.75, maxPerLine: 1, isSideTriangle: true, isOuterTriangle: true },
    4: { rashiX: 42.2, rashiY: 50, planetX: 25, planetY: 50, maxPerLine: 2 },
    5: { rashiX: 19.6, rashiY: 74.25, planetX: 11.2, planetY: 74.25, maxPerLine: 1, isSideTriangle: true, isOuterTriangle: true },
    6: { rashiX: 25.75, rashiY: 80.2, planetX: 25.75, planetY: 89.8, maxPerLine: 2, isOuterTriangle: true },
    7: { rashiX: 50, rashiY: 57.8, planetX: 50, planetY: 74, maxPerLine: 2 },
    8: { rashiX: 74.25, rashiY: 80.2, planetX: 74.25, planetY: 89.8, maxPerLine: 2, isOuterTriangle: true },
    9: { rashiX: 80.4, rashiY: 74.25, planetX: 88.8, planetY: 74.25, maxPerLine: 1, isSideTriangle: true, isOuterTriangle: true },
    10: { rashiX: 57.8, rashiY: 50, planetX: 75, planetY: 50, maxPerLine: 2 },
    11: { rashiX: 80.4, rashiY: 25.75, planetX: 88.8, planetY: 25.75, maxPerLine: 1, isSideTriangle: true, isOuterTriangle: true },
    12: { rashiX: 74.25, rashiY: 19.8, planetX: 74.25, planetY: 10.2, maxPerLine: 2, isOuterTriangle: true }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-b from-[#161008] via-[#101726] to-[#0b101d] border-2 border-amber-500/50 rounded-2xl p-3.5 sm:p-4 shadow-xl flex flex-col items-center print-keep-together overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-2.5 w-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10.5px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 inline-block max-w-full truncate", children: subtitle }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm sm:text-base font-bold font-vedic text-amber-100 mt-1 break-words", children: title })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full max-w-[340px] aspect-square relative bg-[#120d06] rounded-xl border border-amber-600/40 p-1.5 shadow-inner overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "svg",
      {
        viewBox: "0 0 100 100",
        width: "100%",
        height: "auto",
        overflow: "hidden",
        preserveAspectRatio: "xMidYMid meet",
        className: "w-full h-auto block select-none overflow-hidden vedic-kundali-svg",
        "aria-label": title,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "vedicChartGrad", x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#f59e0b", stopOpacity: "0.9" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "50%", stopColor: "#fbbf24", stopOpacity: "0.75" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#d97706", stopOpacity: "0.9" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "rect",
            {
              x: "1.5",
              y: "1.5",
              width: "97",
              height: "97",
              rx: "2",
              fill: "#150f07",
              stroke: "url(#vedicChartGrad)",
              strokeWidth: "0.8"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "rect",
            {
              x: "3",
              y: "3",
              width: "94",
              height: "94",
              rx: "1",
              fill: "none",
              stroke: "#f59e0b",
              strokeOpacity: "0.25",
              strokeWidth: "0.3"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "line",
            {
              x1: "1.5",
              y1: "1.5",
              x2: "98.5",
              y2: "98.5",
              stroke: "url(#vedicChartGrad)",
              strokeWidth: "0.6"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "line",
            {
              x1: "98.5",
              y1: "1.5",
              x2: "1.5",
              y2: "98.5",
              stroke: "url(#vedicChartGrad)",
              strokeWidth: "0.6"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "polygon",
            {
              points: "50,1.5 98.5,50 50,98.5 1.5,50",
              fill: "none",
              stroke: "url(#vedicChartGrad)",
              strokeWidth: "0.65"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "text",
            {
              x: "50",
              y: "51.6",
              textAnchor: "middle",
              fill: "#f59e0b",
              fillOpacity: "0.12",
              fontSize: "5.4",
              fontWeight: "bold",
              children: "ॐ"
            }
          ),
          houses.map((h) => {
            const pos = housePositions[h.houseNumber];
            if (!pos) return null;
            const rawPlanets = h.planets || [];
            const isCrowded = rawPlanets.length >= 3;
            const effectiveMaxPerLine = pos.isSideTriangle ? rawPlanets.length >= 4 ? 2 : 1 : isCrowded ? 3 : pos.maxPerLine;
            const formattedTokens = rawPlanets.map(
              (p) => pos.isSideTriangle || isCrowded ? `${p.shortHindi || p.chartLabel}` : `${p.chartLabel || p.shortHindi}${String(p.degInt).padStart(2, "0")}`
            );
            const lines = [];
            for (let i = 0; i < formattedTokens.length; i += effectiveMaxPerLine) {
              lines.push(formattedTokens.slice(i, i + effectiveMaxPerLine).join(" "));
            }
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "text",
                {
                  x: pos.rashiX,
                  y: pos.rashiY,
                  textAnchor: "middle",
                  dominantBaseline: "central",
                  fill: "#fbbf24",
                  fontSize: "3.0",
                  fontWeight: "800",
                  fontFamily: "monospace",
                  children: h.rashiNumber
                }
              ),
              h.houseNumber === 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "text",
                {
                  x: "50",
                  y: "14.5",
                  textAnchor: "middle",
                  dominantBaseline: "central",
                  fill: "#34d399",
                  fontSize: "2.55",
                  fontWeight: "bold",
                  children: typeof lagnaDegInt === "number" ? `लग्न ${String(lagnaDegInt).padStart(2, "0")}°` : "लग्न"
                }
              ),
              lines.map((lineText, idx) => {
                const totalLines = lines.length;
                const lineStep = pos.isSideTriangle ? totalLines >= 3 ? 2.5 : 2.9 : totalLines >= 3 ? 2.75 : 3.2;
                const yOffset = (idx - (totalLines - 1) / 2) * lineStep;
                const fontSize = pos.isSideTriangle ? totalLines >= 3 ? "2.15" : "2.45" : pos.isOuterTriangle ? isCrowded ? "2.35" : "2.65" : isCrowded ? "2.45" : "2.75";
                return /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "text",
                  {
                    x: pos.planetX,
                    y: pos.planetY + yOffset,
                    textAnchor: "middle",
                    dominantBaseline: "central",
                    fill: idx === 0 ? "#fef3c7" : "#fde68a",
                    fontSize,
                    fontWeight: "bold",
                    children: lineText
                  },
                  idx
                );
              })
            ] }, h.houseNumber);
          })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      KundaliChartLegendAndGuide,
      {
        chartStyle: "north",
        explainerKey,
        language
      }
    )
  ] });
};
const SampurnKundaliSection = ({
  currentUser,
  onSaveJanamKundaliHistoryItem,
  onDeleteJanamKundaliHistoryItem,
  onClearAllJanamKundaliHistory,
  onConsultPanditJi,
  onOpenBookingModal,
  onOpenMantraJaap
}) => {
  const { language, localizeVedicText } = useLanguage();
  const initialLogin = getLoggedInUserAccountData();
  const isInitiallyLoggedIn = Boolean(currentUser && currentUser.phone || initialLogin.isLoggedIn);
  const [personName, setPersonName] = reactExports.useState(
    isInitiallyLoggedIn ? currentUser?.name || initialLogin.name : ""
  );
  const [dob, setDob] = reactExports.useState(
    isInitiallyLoggedIn ? currentUser?.dob || initialLogin.dob : ""
  );
  const [birthTime, setBirthTime] = reactExports.useState(
    isInitiallyLoggedIn ? currentUser?.birthTime || initialLogin.birthTime : ""
  );
  const [birthPlace, setBirthPlace] = reactExports.useState(
    isInitiallyLoggedIn ? currentUser?.birthPlace || initialLogin.birthPlace : ""
  );
  const [approxTimeNote, setApproxTimeNote] = reactExports.useState("");
  const [formError, setFormError] = reactExports.useState("");
  const [kundali, setKundali] = reactExports.useState(null);
  const lastSyncedProfileSigRef = reactExports.useRef(
    isInitiallyLoggedIn ? `${currentUser?.phone || ""}|${currentUser?.name || initialLogin.name || ""}|${currentUser?.dob || initialLogin.dob || ""}|${currentUser?.birthTime || initialLogin.birthTime || ""}|${currentUser?.birthPlace || initialLogin.birthPlace || ""}` : "GUEST"
  );
  reactExports.useEffect(() => {
    const syncAuth = () => {
      const loginData = getLoggedInUserAccountData();
      const activeLoggedIn = Boolean(currentUser && currentUser.phone || loginData.isLoggedIn);
      if (activeLoggedIn) {
        const nextName = currentUser?.name || loginData.name || "";
        const nextDob = currentUser?.dob || loginData.dob || "";
        const nextTime = currentUser?.birthTime || loginData.birthTime || "";
        const nextPlace = currentUser?.birthPlace || loginData.birthPlace || "";
        const nextSig = `${currentUser?.phone || ""}|${nextName}|${nextDob}|${nextTime}|${nextPlace}`;
        if (nextSig !== lastSyncedProfileSigRef.current) {
          lastSyncedProfileSigRef.current = nextSig;
          setPersonName(nextName);
          setDob(nextDob);
          setBirthTime(nextTime);
          setBirthPlace(nextPlace);
          setKundali(null);
        }
      } else if (lastSyncedProfileSigRef.current !== "GUEST") {
        lastSyncedProfileSigRef.current = "GUEST";
        setPersonName("");
        setDob("");
        setBirthTime("");
        setBirthPlace("");
        setKundali(null);
      }
    };
    syncAuth();
    window.addEventListener("panditji_account_session_changed", syncAuth);
    window.addEventListener("panditji_active_profile_updated", syncAuth);
    window.addEventListener("storage", syncAuth);
    return () => {
      window.removeEventListener("panditji_account_session_changed", syncAuth);
      window.removeEventListener("panditji_active_profile_updated", syncAuth);
      window.removeEventListener("storage", syncAuth);
    };
  }, [
    currentUser?.phone,
    currentUser?.name,
    currentUser?.dob,
    currentUser?.birthTime,
    currentUser?.birthPlace
  ]);
  const [activeSubView, setActiveSubView] = reactExports.useState("overview");
  const [chartStyle, setChartStyle] = reactExports.useState("north");
  const [kundaliViewMode, setKundaliViewMode] = reactExports.useState(() => {
    try {
      const saved = localStorage.getItem("panditji_kundali_view_mode_v1");
      if (saved === "simple" || saved === "advanced") return saved;
    } catch {
    }
    return "simple";
  });
  const handleChangeKundaliViewMode = (nextMode) => {
    setKundaliViewMode(nextMode);
    try {
      localStorage.setItem("panditji_kundali_view_mode_v1", nextMode);
    } catch {
    }
  };
  const guideLang = language === "en" ? "en" : "hi";
  const [isDownloadingPDF, setIsDownloadingPDF] = reactExports.useState(false);
  const [cleanPdfMode, setCleanPdfMode] = reactExports.useState(() => {
    try {
      return localStorage.getItem("panditji_clean_pdf_mode_v1") === "1";
    } catch {
      return false;
    }
  });
  const handleToggleCleanPdfMode = (nextVal) => {
    setCleanPdfMode(nextVal);
    try {
      localStorage.setItem("panditji_clean_pdf_mode_v1", nextVal ? "1" : "0");
    } catch {
    }
  };
  const handleDownloadPDF = async () => {
    const activeReport = displayKundali || kundali;
    if (!activeReport || isDownloadingPDF) return;
    setIsDownloadingPDF(true);
    try {
      const { downloadKundaliBookPDF, printKundaliBookVectorPDF } = await __vitePreload(async () => {
        const { downloadKundaliBookPDF: downloadKundaliBookPDF2, printKundaliBookVectorPDF: printKundaliBookVectorPDF2 } = await import("./kundaliBookPdfBuilder-BcOVROms.js");
        return { downloadKundaliBookPDF: downloadKundaliBookPDF2, printKundaliBookVectorPDF: printKundaliBookVectorPDF2 };
      }, true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]) : void 0);
      try {
        await downloadKundaliBookPDF(activeReport, {
          cleanMode: cleanPdfMode,
          chartStyle,
          language
        });
      } catch (innerErr) {
        console.error("Kundali Book PDF Download Fallback:", innerErr);
        await printKundaliBookVectorPDF(activeReport, {
          cleanMode: cleanPdfMode,
          chartStyle,
          language
        });
      }
    } catch (err) {
      console.error("Kundali PDF Module Load Error:", err);
    } finally {
      setIsDownloadingPDF(false);
    }
  };
  const handlePrintVectorPDF = async () => {
    const activeReport = displayKundali || kundali;
    if (!activeReport) return;
    try {
      const { printKundaliBookVectorPDF } = await __vitePreload(async () => {
        const { printKundaliBookVectorPDF: printKundaliBookVectorPDF2 } = await import("./kundaliBookPdfBuilder-BcOVROms.js");
        return { printKundaliBookVectorPDF: printKundaliBookVectorPDF2 };
      }, true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]) : void 0);
      await printKundaliBookVectorPDF(activeReport, {
        cleanMode: cleanPdfMode,
        chartStyle,
        language
      });
    } catch (err) {
      console.error("Kundali Vector Print Error:", err);
    }
  };
  const handleDownloadHistoryKundaliPDF = async (item) => {
    if (isDownloadingPDF) return;
    setIsDownloadingPDF(true);
    try {
      const report = generateSampurnKundali(
        item.name,
        item.dob,
        item.birthTime,
        item.birthPlace || "रुद्रपुर, उत्तराखण्ड"
      );
      setKundali(report);
      const { downloadKundaliBookPDF } = await __vitePreload(async () => {
        const { downloadKundaliBookPDF: downloadKundaliBookPDF2 } = await import("./kundaliBookPdfBuilder-BcOVROms.js");
        return { downloadKundaliBookPDF: downloadKundaliBookPDF2 };
      }, true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]) : void 0);
      await downloadKundaliBookPDF(report, {
        cleanMode: cleanPdfMode,
        chartStyle,
        language
      });
    } catch (err) {
      console.error("History Kundali PDF Download Error:", err);
    } finally {
      setIsDownloadingPDF(false);
    }
  };
  const [copiedSummary, setCopiedSummary] = reactExports.useState(false);
  const [deleteToast, setDeleteToast] = reactExports.useState("");
  const [confirmClearAll, setConfirmClearAll] = reactExports.useState(false);
  const { validatedData: verifiedKundali, validation: kundaliValidation } = useVedicValidation(
    kundali,
    "kundali"
  );
  const displayKundali = verifiedKundali || kundali;
  const hasActiveKundali = Boolean(displayKundali);
  reactExports.useEffect(() => {
    if (!hasActiveKundali) return;
    const timer = window.setTimeout(() => {
      __vitePreload(() => import("./kundaliBookPdfBuilder-BcOVROms.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]) : void 0).then((mod) => mod.prewarmKundaliBookPdfAssets?.()).catch(() => {
      });
    }, 650);
    return () => window.clearTimeout(timer);
  }, [hasActiveKundali]);
  const normalizeHistoryItems = (items) => {
    if (!Array.isArray(items)) return [];
    return items.filter((item) => Boolean(item && typeof item === "object")).map((item, idx) => ({
      ...item,
      id: item.id || `jk-saved-${idx}-${item.dob || "0"}`,
      name: String(item.name || "श्रद्धालु यजमान"),
      dob: String(item.dob || "1996-03-10"),
      birthTime: String(item.birthTime || "10:00"),
      birthPlace: String(item.birthPlace || "रुद्रपुर, उत्तराखण्ड"),
      lagna: item.lagna || "मेष",
      moonRashi: item.moonRashi || "मेष",
      sunRashi: item.sunRashi || "",
      nakshatra: item.nakshatra || "",
      nakshatraPada: item.nakshatraPada || 1,
      currentMahadasha: item.currentMahadasha || "गुरु",
      manglikStatus: item.manglikStatus || "",
      luckyGemstone: item.luckyGemstone || "",
      timestamp: item.timestamp || ""
    }));
  };
  const [isGeneratingKundali, setIsGeneratingKundali] = reactExports.useState(false);
  const [savedHistory, setSavedHistory] = reactExports.useState(() => {
    if (currentUser?.janamKundaliHistory && Array.isArray(currentUser.janamKundaliHistory) && currentUser.janamKundaliHistory.length > 0) {
      return normalizeHistoryItems(currentUser.janamKundaliHistory);
    }
    try {
      const guest = localStorage.getItem("panditji_sampurn_kundali_history");
      if (guest && guest !== "undefined" && guest !== "null") {
        return normalizeHistoryItems(JSON.parse(guest));
      }
    } catch {
    }
    return [];
  });
  reactExports.useEffect(() => {
    if (currentUser?.janamKundaliHistory && Array.isArray(currentUser.janamKundaliHistory)) {
      setSavedHistory(normalizeHistoryItems(currentUser.janamKundaliHistory));
    }
  }, [currentUser?.phone, currentUser?.janamKundaliHistory?.length]);
  reactExports.useEffect(() => {
    try {
      const pendingRaw = localStorage.getItem("panditji_open_kundali_from_history");
      if (pendingRaw && pendingRaw !== "undefined" && pendingRaw !== "null") {
        localStorage.removeItem("panditji_open_kundali_from_history");
        const item = JSON.parse(pendingRaw);
        if (item && item.name && item.dob && item.birthTime) {
          setPersonName(item.name);
          setDob(item.dob);
          setBirthTime(item.birthTime);
          setBirthPlace(item.birthPlace || "रुद्रपुर, उत्तराखण्ड");
          const report = generateSampurnKundali(
            item.name,
            item.dob,
            item.birthTime,
            item.birthPlace || "रुद्रपुर, उत्तराखण्ड"
          );
          setKundali(report);
          setActiveSubView("overview");
        }
      }
    } catch {
    }
  }, []);
  reactExports.useEffect(() => {
    const handleMidnightRefresh = () => {
      setKundali((prev) => {
        if (!prev) return null;
        return generateSampurnKundali(
          prev.input.name,
          prev.input.dob,
          prev.input.birthTime,
          prev.input.birthPlace
        );
      });
    };
    window.addEventListener("panditji_midnight_refresh", handleMidnightRefresh);
    return () => window.removeEventListener("panditji_midnight_refresh", handleMidnightRefresh);
  }, []);
  const showToastMessage = (msg) => {
    setDeleteToast(msg);
    setTimeout(() => {
      setDeleteToast((prev) => prev === msg ? "" : prev);
    }, 3e3);
  };
  const handleGenerateKundali = (e) => {
    e.preventDefault();
    if (!personName.trim()) {
      setFormError("कृपया अपना नाम दर्ज करें।");
      return;
    }
    if (!dob) {
      setFormError("कृपया अपनी जन्म तिथि (Date of Birth) चुनें।");
      return;
    }
    if (!birthTime) {
      setFormError("कृपया अपना जन्म समय (Time of Birth) चुनें।");
      return;
    }
    setFormError("");
    setIsGeneratingKundali(true);
    const trimmedName = personName.trim();
    const targetDob = dob;
    const targetTime = birthTime;
    const targetPlace = birthPlace;
    window.requestAnimationFrame(() => {
      try {
        const report = generateSampurnKundali(trimmedName, targetDob, targetTime, targetPlace);
        const activeDasha = report.mahadashas.find((m) => m.isCurrent)?.planet || report.mahadashas[0]?.planet || "गुरु";
        const historyItem = {
          id: `jk-${Date.now()}`,
          name: report.input.name,
          dob: report.input.dob,
          birthTime: report.input.birthTime,
          birthPlace: report.input.birthPlace,
          lagna: report.panchang.lagnaName,
          moonRashi: report.panchang.moonRashiName,
          sunRashi: report.panchang.sunRashiName,
          nakshatra: report.panchang.nakshatraName,
          nakshatraPada: report.panchang.nakshatraPada,
          currentMahadasha: activeDasha,
          manglikStatus: report.doshaAnalysis.manglik.severity,
          luckyGemstone: report.lucky.ratnaName,
          timestamp: (/* @__PURE__ */ new Date()).toLocaleString("hi-IN", {
            day: "2-digit",
            month: "short",
            hour: "2-digit",
            minute: "2-digit"
          })
        };
        const updatedHistory = [
          historyItem,
          ...savedHistory.filter(
            (x) => !((x?.name || "").toLowerCase() === historyItem.name.toLowerCase() && x?.dob === historyItem.dob && x?.birthTime === historyItem.birthTime)
          )
        ].slice(0, 20);
        React.startTransition(() => {
          setKundali(report);
          setActiveSubView("overview");
          setSavedHistory(updatedHistory);
        });
        try {
          localStorage.setItem("panditji_sampurn_kundali_history", JSON.stringify(updatedHistory));
        } catch {
        }
        if (onSaveJanamKundaliHistoryItem) {
          onSaveJanamKundaliHistoryItem(historyItem);
        }
        scrollToResultById("janm-kundali-full-report-container", "आपकी सम्पूर्ण जन्म कुंडली यहाँ तैयार है", 150);
      } finally {
        setIsGeneratingKundali(false);
      }
    });
  };
  const handleLoadFromHistory = (item) => {
    setPersonName(item.name);
    setDob(item.dob);
    setBirthTime(item.birthTime);
    setBirthPlace(item.birthPlace || "रुद्रपुर, उत्तराखण्ड");
    setFormError("");
    const report = generateSampurnKundali(
      item.name,
      item.dob,
      item.birthTime,
      item.birthPlace || "रुद्रपुर, उत्तराखण्ड"
    );
    setKundali(report);
    setActiveSubView("overview");
    scrollToResultById("janm-kundali-full-report-container", `${item.name} जी की जन्म कुंडली खुल गई है`, 150);
  };
  const handleResetForm = () => {
    setPersonName("");
    setDob("");
    setBirthTime("");
    setFormError("");
    setKundali(null);
  };
  const handleDeleteHistoryItem = (id, itemName) => {
    const filtered = savedHistory.filter((item) => item.id !== id);
    setSavedHistory(filtered);
    try {
      localStorage.setItem("panditji_sampurn_kundali_history", JSON.stringify(filtered));
    } catch {
    }
    if (onDeleteJanamKundaliHistoryItem) {
      onDeleteJanamKundaliHistoryItem(id);
    }
    showToastMessage(`"${itemName}" की कुंडली हिस्ट्री डिलीट कर दी गई है।`);
  };
  const handleClearAllHistory = () => {
    setSavedHistory([]);
    setConfirmClearAll(false);
    clearLocalJanamKundaliCache();
    if (onClearAllJanamKundaliHistory) {
      onClearAllJanamKundaliHistory();
    }
    showToastMessage("आपकी सारी खोजी गई जन्म कुंडली हिस्ट्री डिलीट कर दी गई है।");
  };
  const currentDashaObj = kundali ? kundali.mahadashas.find((d) => d.isCurrent) || kundali.mahadashas[0] : null;
  const getWhatsAppKundaliMessage = () => {
    if (!kundali) return "";
    if (language === "en") {
      return `*Pandit Ji Online - Sampurn Janam Kundali Consultation Request*
----------------------------------------
*Name:* ${kundali.input.name}
*Date of Birth (DOB):* ${kundali.input.formattedDob}
*Time of Birth:* ${kundali.input.formattedTime}
*Birth Place:* ${translateVedicHindiToEnglish(kundali.input.birthPlace, "en")}
----------------------------------------
*Ascendant (Lagna):* ${translateVedicHindiToEnglish(kundali.panchang.lagnaName, "en")} (Lord: ${translateVedicHindiToEnglish(kundali.panchang.lagnaLord, "en")})
*Moon Sign (Rashi):* ${translateVedicHindiToEnglish(kundali.panchang.moonRashiName, "en")}
*Birth Nakshatra:* ${translateVedicHindiToEnglish(kundali.panchang.nakshatraName, "en")} (Pada ${kundali.panchang.nakshatraPada})
*Active Mahadasha:* ${translateVedicHindiToEnglish(currentDashaObj?.planet || "-", "en")} (Antardasha: ${translateVedicHindiToEnglish(currentDashaObj?.currentAntardasha || "-", "en")})
*Manglik Status:* ${translateVedicHindiToEnglish(kundali.doshaAnalysis.manglik.severity, "en")}
*Lucky Gemstone:* ${translateVedicHindiToEnglish(kundali.lucky.ratnaName, "en")}
----------------------------------------
Radhe Radhe Acharya Pandit Shashank Sharma Ji! I have generated my Janam Kundali on Pandit Ji Online. Kindly analyze it for career, wealth, marriage & remedies (Dakshina ₹100).`;
    }
    const rawHi = `*पण्डित जी ऑनलाइन - सम्पूर्ण जन्म कुंडली परामर्श अनुरोध*
----------------------------------------
*नाम:* ${kundali.input.name}
*जन्म तिथि (DOB):* ${kundali.input.formattedDob}
*जन्म समय (Time):* ${kundali.input.formattedTime}
*जन्म स्थान:* ${kundali.input.birthPlace}
----------------------------------------
*लग्न:* ${kundali.panchang.lagnaName} (स्वामी: ${kundali.panchang.lagnaLord})
*चंद्र राशि:* ${kundali.panchang.moonRashiName}
*जन्म नक्षत्र:* ${kundali.panchang.nakshatraName} (चरण ${kundali.panchang.nakshatraPada})
*वर्तमान महादशा:* ${currentDashaObj?.planet} (अंतर्दशा: ${currentDashaObj?.currentAntardasha || "-"})
*मांगलिक विचार:* ${kundali.doshaAnalysis.manglik.severity}
*शुभ रत्न:* ${kundali.lucky.ratnaName}
----------------------------------------
राधे राधे पण्डित शशांक शर्मा जी! मैंने ऐप में अपनी जन्म कुंडली बनाई है। कृपया मेरी कुंडली का सूक्ष्म अध्ययन करके करियर, धन, विवाह एवं उपाय पर व्यक्तिगत परामर्श (मात्र ₹100 दक्षिणा) प्रदान करें।`;
    return language === "hi" ? rawHi : translateVedicHindiToEnglish(rawHi, language);
  };
  const handleCopyKundaliReport = () => {
    if (!kundali) return;
    const deep = kundali.deepAnalysis;
    const topYogas = (deep?.advancedYogasAndCancellations || []).slice(0, 3).map((y) => `${y.name}: ${y.effect}`).join("\n• ");
    const topRemedies = (deep?.lalKitabAndVedicRemedies || kundali.remedies.upayList).slice(0, 3).join("\n• ");
    let text = "";
    if (language === "en") {
      const trEn = (s) => translateVedicHindiToEnglish(s, "en");
      text = `SAMPURN VEDIC JANAM KUNDALI PATRIKA - PANDIT JI ONLINE
================================================
Name: ${kundali.input.name} | DOB: ${kundali.input.formattedDob} | Time: ${kundali.input.formattedTime} | Place: ${trEn(kundali.input.birthPlace)}
Ascendant (Lagna): ${trEn(kundali.panchang.lagnaName)} (Lord: ${trEn(kundali.panchang.lagnaLord)})
Moon Sign (Rashi): ${trEn(kundali.panchang.moonRashiName)} | Sun Sign: ${trEn(kundali.panchang.sunRashiName)}
Nakshatra: ${trEn(kundali.panchang.nakshatraName)} (Pada ${kundali.panchang.nakshatraPada}) | Gana: ${trEn(kundali.panchang.gana)} | Nadi: ${trEn(kundali.panchang.nadi)}
Active Mahadasha: ${trEn(currentDashaObj?.planet || "-")} (${currentDashaObj?.startYear}-${currentDashaObj?.endYear}) | Antardasha: ${trEn(currentDashaObj?.currentAntardasha || "-")}
Manglik Status: ${trEn(kundali.doshaAnalysis.manglik.severity)}
Kaal Sarp / Sade Sati: ${trEn(kundali.doshaAnalysis.kaalSarp.type)} | ${trEn(kundali.doshaAnalysis.sadeSati.status)}
Lucky Gemstone: ${trEn(kundali.lucky.ratnaName)} | Ishta Devta: ${trEn(kundali.lucky.ishtaDevta)}
${deep?.navamshaAndCareerDepth ? `
D-9 Navamsha & D-10 Career Depth:
• D-9 Lagna: ${trEn(deep.navamshaAndCareerDepth.d9Lagna)} | D-10 Lagna: ${trEn(deep.navamshaAndCareerDepth.d10Lagna)} | Karakamsha: ${trEn(deep.navamshaAndCareerDepth.karakamsha)}
• ${trEn(deep.navamshaAndCareerDepth.spiritualAndCareerVerdict)}` : ""}
${topYogas ? `
Key Rajyogas & Dosha Cancellations:
• ${trEn(topYogas)}` : ""}
${deep?.gocharSnapshot ? `
Live Planetary Transit (Gochar):
• Jupiter: ${trEn(deep.gocharSnapshot.jupiterEffect)}
• Saturn: ${trEn(deep.gocharSnapshot.saturnEffect)}` : ""}
${topRemedies ? `
Recommended Vedic & Lal-Kitab Remedies:
• ${trEn(topRemedies)}` : ""}
================================================
Acharya Pandit Shashank Sharma (Rudrapur, Uttarakhand)
Phone / WhatsApp: +91 7017279043 | Website: https://www.panditjionline.online | Email: internetwebhelp24@gmail.com`;
    } else {
      const rawHi = `सम्पूर्ण वैदिक जन्म कुंडली पत्रक - पण्डित जी ऑनलाइन
================================================
नाम: ${kundali.input.name} | जन्म तिथि: ${kundali.input.formattedDob} | समय: ${kundali.input.formattedTime} | स्थान: ${kundali.input.birthPlace}
लग्न: ${kundali.panchang.lagnaName} (${kundali.panchang.lagnaLord}) | चंद्र राशि: ${kundali.panchang.moonRashiName} | सूर्य राशि: ${kundali.panchang.sunRashiName}
नक्षत्र: ${kundali.panchang.nakshatraName} (चरण ${kundali.panchang.nakshatraPada}) | गण: ${kundali.panchang.gana} | नाड़ी: ${kundali.panchang.nadi}
वर्तमान महादशा: ${currentDashaObj?.planet} (${currentDashaObj?.startYear}-${currentDashaObj?.endYear}) | अंतर्दशा: ${currentDashaObj?.currentAntardasha || "-"}
मांगलिक स्थिति: ${kundali.doshaAnalysis.manglik.severity}
कालसर्प / साढ़ेसाती: ${kundali.doshaAnalysis.kaalSarp.type} | ${kundali.doshaAnalysis.sadeSati.status}
शुभ रत्न: ${kundali.lucky.ratnaName} | इष्ट देव: ${kundali.lucky.ishtaDevta}
${deep?.navamshaAndCareerDepth ? `
नवांश (D-9), दशमांश (D-10) व कारकांश विश्लेषण:
• D-9 लग्न: ${deep.navamshaAndCareerDepth.d9Lagna} | D-10 लग्न: ${deep.navamshaAndCareerDepth.d10Lagna} | कारकांश: ${deep.navamshaAndCareerDepth.karakamsha}
• ${deep.navamshaAndCareerDepth.spiritualAndCareerVerdict}` : ""}
${topYogas ? `
प्रमुख राजयोग एवं दोष परिहार:
• ${topYogas}` : ""}
${deep?.gocharSnapshot ? `
वर्तमान लाइव गोचर:
• गुरु: ${deep.gocharSnapshot.jupiterEffect}
• शनि: ${deep.gocharSnapshot.saturnEffect}` : ""}
${topRemedies ? `
विशेष वैदिक एवं लाल-किताब उपाय:
• ${topRemedies}` : ""}
================================================
आचार्य: पण्डित शशांक शर्मा (रुद्रपुर, उत्तराखण्ड)
संपर्क / WhatsApp: +91 7017279043 | वेबसाइट: https://www.panditjionline.online | Email: internetwebhelp24@gmail.com`;
      text = language === "hi" ? rawHi : translateVedicHindiToEnglish(rawHi, language);
    }
    navigator.clipboard.writeText(text);
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 2500);
  };
  const liveKundaliCardPayload = reactExports.useMemo(() => {
    if (!kundali) return null;
    const loc = (s) => language === "hi" ? s : translateVedicHindiToEnglish(s, language);
    return {
      variant: "kundali",
      badge: loc("सम्पूर्ण वैदिक जन्म पत्रिका • लहिरी अयनांश"),
      title: language === "en" ? `${kundali.input.name}'s Janam Kundali` : loc(`${kundali.input.name} की जन्म कुंडली`),
      subtitle: `${loc("जन्म")}: ${kundali.input.formattedDob} • ${kundali.input.formattedTime}`,
      dateOrLocation: `${loc("स्थान")}: ${loc(kundali.input.birthPlace)}`,
      kundaliData: {
        nativeName: kundali.input.name,
        dob: kundali.input.formattedDob,
        time: kundali.input.formattedTime,
        place: loc(kundali.input.birthPlace),
        lagna: loc(kundali.panchang.lagnaName),
        lagnaLord: loc(kundali.panchang.lagnaLord),
        moonRashi: loc(kundali.panchang.moonRashiName),
        nakshatra: `${loc(kundali.panchang.nakshatraName)} (${loc("चरण")} ${kundali.panchang.nakshatraPada})`,
        mahadasha: `${loc(currentDashaObj?.planet || "-")} (${loc(currentDashaObj?.currentAntardasha || "-")})`,
        ratna: loc(kundali.lucky.ratnaName),
        ishtaDevta: loc(kundali.lucky.ishtaDevta.split(" एवं ")[0]),
        manglikSeverity: loc(kundali.doshaAnalysis.manglik.severity),
        gana: loc(kundali.panchang.gana),
        nadi: loc(kundali.panchang.nadi)
      },
      highlights: [
        {
          label: loc("जन्म लग्न एवं स्वामी"),
          value: `${loc(kundali.panchang.lagnaName)} (${loc(kundali.panchang.lagnaLord)})`
        },
        {
          label: loc("चंद्र राशि व नक्षत्र"),
          value: `${loc(kundali.panchang.moonRashiName)} • ${loc(kundali.panchang.nakshatraName)} (${loc("चरण")} ${kundali.panchang.nakshatraPada})`
        },
        {
          label: loc("वर्तमान महादशा"),
          value: `${loc(currentDashaObj?.planet || "-")} (${loc(currentDashaObj?.currentAntardasha || "-")})`
        },
        {
          label: loc("शुभ रत्न व इष्ट देव"),
          value: `${loc(kundali.lucky.ratnaName)} • ${loc(kundali.lucky.ishtaDevta.split(" एवं ")[0])}`
        }
      ],
      message: loc(`मांगलिक स्थिति: ${kundali.doshaAnalysis.manglik.severity} • गण: ${kundali.panchang.gana} • नाड़ी: ${kundali.panchang.nadi} • पण्डित जी ऑनलाइन द्वारा शुद्ध वैदिक गणना।`),
      shareUrl: "https://www.panditjionline.online/janam-kundali",
      fileNameSlug: "janam-kundali-card"
    };
  }, [kundali, currentDashaObj, language]);
  reactExports.useEffect(() => {
    setLivePageCardPayload("janam-kundali", liveKundaliCardPayload);
    return () => setLivePageCardPayload("janam-kundali", null);
  }, [liveKundaliCardPayload]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "w-full max-w-full overflow-x-hidden space-y-4 sm:space-y-6 scroll-mt-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#1c1108] via-[#131b2e] to-[#0c1322] border-2 border-amber-500/50 p-4 sm:p-7 shadow-2xl no-print", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row items-center gap-3.5 sm:gap-4 text-center sm:text-left min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(PanditPortrait, { size: "lg", showBadge: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex flex-wrap items-center justify-center sm:justify-start gap-1.5 px-3 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold mb-1 border border-amber-500/40", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3.5 h-3.5 text-yellow-400" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "आचार्य पण्डित शशांक शर्मा • वैदिक ज्योतिष, लग्न चक्र एवं सम्पूर्ण भविष्यफल" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl sm:text-3xl font-extrabold font-vedic text-amber-100", children: "सम्पूर्ण जन्म कुंडली (Janam Kundali & Horoscope)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs sm:text-sm text-amber-200/85 mt-1 max-w-2xl", children: [
            "ऑनलाइन निःशुल्क ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "जन्म कुंडली बनाएं (Free Online Janam Kundali in Hindi)" }),
            " — अपनी जन्म तिथि, समय और स्थान से मात्र 1 सेकंड में सटीक",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "लग्न व चन्द्र कुंडली, विंशोत्तरी महादशा, मांगलिक व साढ़े साती विचार, शुभ रत्न (Gemstone) और जीवन का सम्पूर्ण भविष्यफल" }),
            " प्राप्त करें।"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col items-center sm:items-end gap-2 flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: onOpenBookingModal,
          className: "px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-yellow-400 hover:to-amber-400 text-slate-950 font-extrabold text-xs shadow-lg cursor-pointer flex items-center gap-1.5 whitespace-nowrap",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarCheck, { className: "w-4 h-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "पण्डित जी से कुंडली दिखाएं (मात्र ₹100)" })
          ]
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      KundaliViewModeBar,
      {
        mode: kundaliViewMode,
        onChangeMode: handleChangeKundaliViewMode,
        language: guideLang
      }
    ),
    deleteToast && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3.5 rounded-2xl bg-emerald-950/90 border border-emerald-500/60 text-emerald-200 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-lg animate-fadeIn no-print", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-4 h-4 text-emerald-400 flex-shrink-0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: deleteToast })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-nosnippet": true, className: "bg-[#0e1525] border-2 border-amber-600/40 rounded-2xl p-4 sm:p-6 shadow-xl no-print", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-2 border-b border-amber-900/40 pb-3 mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-5 h-5 text-amber-400" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base sm:text-lg font-bold font-vedic text-amber-100", children: "जन्म विवरण दर्ज करें (Enter Name, Date of Birth & Time of Birth)" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          currentUser && (currentUser.name || currentUser.dob) && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => {
                if (currentUser.name) setPersonName(currentUser.name);
                if (currentUser.dob) setDob(currentUser.dob);
                if (currentUser.birthTime) setBirthTime(currentUser.birthTime);
                if (currentUser.birthPlace) setBirthPlace(currentUser.birthPlace);
              },
              className: "text-[11px] px-2.5 py-1 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-200 border border-amber-500/40 font-semibold cursor-pointer",
              children: "मेरा प्रोफाइल डेटा भरें"
            }
          ),
          kundali && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: handleResetForm,
              className: "text-[11px] px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-300 border border-slate-700 font-semibold flex items-center gap-1 cursor-pointer",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "w-3 h-3" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "नई कुंडली खोजें" })
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleGenerateKundali, className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-xs font-bold text-amber-300 mb-1.5 flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-3.5 h-3.5 text-amber-400" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "आपका पूरा नाम (Full Name) *" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                required: true,
                value: personName,
                onChange: (e) => setPersonName(e.target.value),
                placeholder: "अपना नाम लिखें (जैसे: राहुल शर्मा)",
                className: "w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-amber-600/50 text-amber-100 text-sm font-medium focus:outline-none focus:border-amber-400"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-xs font-bold text-amber-300 mb-1.5 flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-3.5 h-3.5 text-amber-400" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "जन्म तिथि (Date of Birth) *" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              VedicDateInput,
              {
                required: true,
                value: dob,
                onChange: (iso) => setDob(iso),
                ariaLabel: "जन्म तिथि (1600–2500 ई.)"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-xs font-bold text-amber-300 mb-1.5 flex items-center justify-between gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3.5 h-3.5 text-amber-400" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "जन्म समय (Time of Birth) *" })
              ] }),
              birthTime && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-mono text-emerald-300 bg-emerald-950/70 px-2 py-0.5 rounded border border-emerald-500/40", children: birthTime })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "time",
                required: true,
                value: birthTime,
                onChange: (e) => setBirthTime(e.target.value),
                className: "w-full px-2.5 sm:px-3.5 py-2.5 rounded-xl bg-slate-950 border border-amber-600/50 text-amber-100 text-sm font-mono focus:outline-none focus:border-amber-400"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-xs font-bold text-amber-300 mb-1.5 flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-3.5 h-3.5 text-amber-400" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "जन्म स्थान (Birth Place)" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-stretch gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  list: "kundali-birthplace-list",
                  value: birthPlace,
                  onChange: (e) => setBirthPlace(e.target.value),
                  placeholder: "जैसे: रुद्रपुर, हल्द्वानी, दिल्ली...",
                  className: "flex-1 min-w-0 px-3.5 py-2.5 rounded-xl bg-slate-950 border border-amber-600/50 text-amber-100 text-sm focus:outline-none focus:border-amber-400"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                BirthPlaceGpsButton,
                {
                  size: "md",
                  onSelectPlace: (place) => setBirthPlace(place),
                  title: "वर्तमान GPS लोकेशन से जन्म स्थान भरें"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("datalist", { id: "kundali-birthplace-list", children: POPULAR_BIRTH_PLACES.map((city) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: city }, city)) })
          ] })
        ] }),
        formError && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 rounded-xl bg-rose-950/70 border border-rose-500/50 text-rose-200 text-xs font-bold", children: formError }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3 pt-2 border-t border-slate-800/80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 text-[11px]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-amber-300 font-bold flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3.5 h-3.5 text-amber-400" }),
                "जन्म का सटीक समय याद नहीं है? अनुमानित समय (पहर) चुनें:"
              ] }),
              approxTimeNote && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 text-[10px] font-bold text-emerald-300 bg-emerald-950/80 px-2 py-0.5 rounded-full border border-emerald-500/40", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-3 h-3 text-emerald-400 shrink-0", strokeWidth: 1.5 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: approxTimeNote })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap items-center gap-1.5 text-[11px]", children: APPROXIMATE_BIRTH_TIME_PRESETS.map((preset) => {
              const isSelected = birthTime === preset.time && (approxTimeNote === preset.note || !approxTimeNote && preset.id !== "unknown");
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    setBirthTime(preset.time);
                    setApproxTimeNote(preset.note || "");
                  },
                  className: `px-2.5 py-1 rounded-lg border transition-all cursor-pointer ${isSelected ? "bg-amber-500/25 border-amber-400 text-amber-200 font-bold" : "bg-slate-900 border-slate-700 text-slate-300 hover:border-amber-600/50"}`,
                  children: [
                    preset.label,
                    " (",
                    preset.subLabel,
                    ")"
                  ]
                },
                preset.id
              );
            }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "submit",
              disabled: isGeneratingKundali,
              className: "px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 active:scale-[0.98] disabled:opacity-80 text-slate-950 font-extrabold text-sm shadow-xl shadow-amber-500/20 transition-transform duration-150 cursor-pointer flex items-center justify-center gap-2 whitespace-nowrap",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: `w-4 h-4 ${isGeneratingKundali ? "animate-spin" : ""}` }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: isGeneratingKundali ? "कुंडली गणना हो रही है..." : "सम्पूर्ण जन्म कुंडली देखें" })
              ]
            }
          )
        ] })
      ] })
    ] }),
    !kundali && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-gradient-to-b from-[#151008] to-[#0d1424] border border-amber-700/40 p-5 sm:p-8 text-center space-y-3 shadow-lg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 mx-auto rounded-2xl bg-amber-500/15 border border-amber-500/40 flex items-center justify-center text-amber-400", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Compass, { className: "w-6 h-6" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-base sm:text-xl font-bold font-vedic text-amber-100", children: 'ऊपर अपना नाम, जन्म तिथि और जन्म समय डालकर "सम्पूर्ण जन्म कुंडली देखें" दबाएं' }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs sm:text-sm text-amber-200/80 max-w-xl mx-auto leading-relaxed", children: [
        "विवरण दर्ज करते ही आपकी ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "उत्तर भारतीय लग्न एवं चंद्र कुंडली चक्र" }),
        ", ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "नवग्रह स्पष्ट तालिका" }),
        ",",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "विंशोत्तरी महादशा" }),
        ", ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "मांगलिक व शनि साढ़े साती विचार" }),
        ", ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "शुभ रत्न" }),
        " और",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "जीवन के 6 क्षेत्रों का सम्पूर्ण भविष्यफल" }),
        " यहाँ प्रदर्शित होगा।"
      ] })
    ] }),
    kundali && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "janm-kundali-full-report-container", className: "print-report-container space-y-6 animate-page-enter p-2 bg-[#0d1322] rounded-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl bg-gradient-to-br from-[#1b1208] via-[#11192b] to-[#0b101d] border-2 border-amber-500/60 p-4 sm:p-6 shadow-2xl space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 border-b border-amber-800/40 pb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2.5 py-0.5 rounded-full bg-amber-500 text-slate-950 text-[11px] font-black uppercase tracking-wider", children: "पण्डित जी ऑनलाइन • सम्पूर्ण जन्म पत्रिका" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(VedicTripleCheckBadge, { validation: kundaliValidation, size: "sm" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-amber-300 font-mono", children: [
                "DOB: ",
                kundali.input.formattedDob,
                " • Time: ",
                kundali.input.formattedTime,
                " •",
                " ",
                kundali.input.birthPlace
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-xl sm:text-3xl font-extrabold font-vedic text-gold-gradient mt-1", children: [
              kundali.input.name,
              " की सम्पूर्ण जन्म कुंडली"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 w-full lg:w-auto no-print", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: handleDownloadPDF,
                disabled: isDownloadingPDF,
                className: "px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-slate-950 text-xs font-black flex items-center gap-1.5 shadow-lg shadow-amber-500/25 cursor-pointer transition-all disabled:opacity-50 whitespace-nowrap",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-4 h-4 text-slate-950" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: isDownloadingPDF ? "प्रीमियम कुंडली पुस्तक PDF तैयार हो रही है..." : "कुंडली पुस्तक PDF डाउनलोड (Mobile/WhatsApp)" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => void handlePrintVectorPDF(),
                className: "px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-amber-500/40 text-amber-200 text-xs font-bold flex items-center gap-1.5 cursor-pointer whitespace-nowrap",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-3.5 h-3.5 text-amber-400" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Searchable Print / Save PDF" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "label",
              {
                className: "px-3 py-2 rounded-xl bg-slate-950/90 border border-amber-600/40 text-amber-200 text-xs font-bold flex items-center gap-1.5 cursor-pointer select-none whitespace-nowrap",
                title: "मध्य-पुस्तक प्रमोशनल बैनर हटाकर स्वच्छ प्रिंट संस्करण तैयार करें",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "checkbox",
                      checked: cleanPdfMode,
                      onChange: (e) => handleToggleCleanPdfMode(e.target.checked),
                      className: "accent-amber-400 w-3.5 h-3.5 cursor-pointer"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Clean PDF (कम विज्ञापन)" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: handleCopyKundaliReport,
                className: "px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-amber-600/40 text-amber-200 text-xs font-bold flex items-center gap-1.5 cursor-pointer",
                children: copiedSummary ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-3.5 h-3.5 text-emerald-400" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-300", children: "कॉपी हो गया!" })
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "w-3.5 h-3.5 text-amber-400" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "सारांश कॉपी करें" })
                ] })
              }
            ),
            liveKundaliCardPayload && /* @__PURE__ */ jsxRuntimeExports.jsx(
              ShareableVedicCardButton,
              {
                payload: liveKundaliCardPayload,
                buttonLabel: "WhatsApp Status / इमेज कार्ड शेयर करें",
                compact: false,
                className: "px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-400 to-orange-400 hover:from-amber-400 hover:to-yellow-300 text-slate-950 text-xs font-black flex items-center gap-1.5 shadow-lg cursor-pointer transition-all"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: getWhatsAppLink(getWhatsAppKundaliMessage()),
                target: "_blank",
                rel: "noopener noreferrer",
                className: "px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-extrabold flex items-center gap-1.5 shadow-lg cursor-pointer",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-4 h-4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "WhatsApp शेयर" })
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-2xl bg-slate-950/90 border border-amber-500/40", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-amber-400/90 block", children: "जन्म लग्न (Ascendant)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm sm:text-base font-extrabold text-amber-100 mt-0.5", children: kundali.panchang.lagnaName }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] text-amber-300/80", children: [
              "स्वामी: ",
              kundali.panchang.lagnaLord
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-2xl bg-slate-950/90 border border-amber-500/40", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-amber-400/90 block", children: "चंद्र राशि (Moon Sign)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm sm:text-base font-extrabold text-amber-100 mt-0.5", children: kundali.panchang.moonRashiName }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] text-amber-300/80", children: [
              "स्वामी: ",
              kundali.panchang.moonRashiLord
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-2xl bg-slate-950/90 border border-amber-500/40", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-amber-400/90 block", children: "सूर्य राशि (Sun Sign)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm sm:text-base font-extrabold text-amber-100 mt-0.5", children: kundali.panchang.sunRashiName }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] text-amber-300/80", children: [
              "स्वामी: ",
              kundali.panchang.sunRashiLord
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-2xl bg-slate-950/90 border border-amber-500/40", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-amber-400/90 block", children: "जन्म नक्षत्र एवं चरण" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm sm:text-base font-extrabold text-amber-100 mt-0.5 truncate", children: kundali.panchang.nakshatraName }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] text-emerald-300 font-semibold", children: [
              "चरण ",
              kundali.panchang.nakshatraPada,
              " • ",
              kundali.panchang.gana,
              " • चरण स्वामी:",
              " ",
              (() => {
                const moonPl = kundali.planets.find((p) => p.id === "moon");
                const navLords = ["मंगल", "शुक्र", "बुध", "चंद्र", "सूर्य", "बुध", "शुक्र", "मंगल", "गुरु", "शनि", "शनि", "गुरु"];
                if (moonPl && typeof moonPl.siderealLon === "number") {
                  const navIdx = Math.floor((moonPl.siderealLon % 360 + 360) % 360 / (360 / 108)) % 12;
                  return navLords[navIdx] || kundali.panchang.nakshatraLord.split(" (")[0];
                }
                return kundali.panchang.nakshatraLord.split(" (")[0];
              })()
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-2xl bg-slate-950/90 border border-emerald-500/40", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-emerald-400 block", children: "वर्तमान महादशा" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm sm:text-base font-extrabold text-emerald-200 mt-0.5", children: currentDashaObj?.planet }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] text-emerald-300/80 font-mono", children: [
              currentDashaObj?.startYear,
              " से ",
              currentDashaObj?.endYear,
              " तक"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-2xl bg-slate-950/90 border border-amber-500/40", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-amber-400/90 block", children: "भाग्योदय शुभ रत्न" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm sm:text-base font-extrabold text-yellow-300 mt-0.5 truncate", children: kundali.lucky.ratnaName }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-amber-300/80 truncate block", children: kundali.lucky.rudraksha })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-amber-900/40 no-print", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap items-center gap-2", children: [
            { id: "overview", label: "1. सम्पूर्ण विवरण व चक्र", icon: Compass },
            { id: "charts", label: "2. नवग्रह तालिका व भाव फल", icon: Sun },
            { id: "dasha_dosha", label: "3. महादशा व दोष विचार", icon: ShieldCheck },
            { id: "predictions", label: "4. भविष्यफल", icon: BookOpen },
            { id: "remedies", label: "5. शुभ रत्न व उपाय", icon: Gem }
          ].map((tab) => {
            const Icon = tab.icon;
            const active = activeSubView === tab.id;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => {
                  setActiveSubView(
                    tab.id
                  );
                  scrollToResultById("kundali-subview-content", tab.label, 100);
                },
                className: `px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${active ? "bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 shadow-lg" : "bg-slate-900/90 hover:bg-slate-800 text-amber-200 border border-amber-800/50"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-3.5 h-3.5" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tab.label })
                ]
              },
              tab.id
            );
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 bg-slate-950 p-1 rounded-xl border border-emerald-500/40 text-xs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-300 font-bold px-1 text-[11px]", children: guideLang === "en" ? "Mode:" : "मोड:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => handleChangeKundaliViewMode("simple"),
                  className: `px-2.5 py-1 rounded-lg text-xs cursor-pointer font-bold transition-all whitespace-nowrap ${kundaliViewMode === "simple" ? "bg-amber-500 text-slate-950 shadow-md font-extrabold" : "text-amber-200 hover:text-amber-100"}`,
                  children: guideLang === "en" ? "Simple" : "सरल कुंडली"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => handleChangeKundaliViewMode("advanced"),
                  className: `px-2.5 py-1 rounded-lg text-xs cursor-pointer font-bold transition-all whitespace-nowrap ${kundaliViewMode === "advanced" ? "bg-emerald-500 text-slate-950 shadow-md font-extrabold" : "text-amber-200 hover:text-amber-100"}`,
                  children: guideLang === "en" ? "Advanced" : "विशेषज्ञ मोड"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 bg-slate-950 p-1 rounded-xl border border-amber-500/40 text-xs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-amber-300 font-bold px-1 text-[11px]", children: "चक्र प्रारूप:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setChartStyle("north"),
                  className: `px-2.5 py-1 rounded-lg text-xs cursor-pointer font-bold transition-all whitespace-nowrap ${chartStyle === "north" ? "bg-amber-500 text-slate-950 shadow-md font-extrabold" : "text-amber-200 hover:text-amber-100"}`,
                  children: "उत्तर भारतीय (Diamond)"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setChartStyle("south"),
                  className: `px-2.5 py-1 rounded-lg text-xs cursor-pointer font-bold transition-all whitespace-nowrap ${chartStyle === "south" ? "bg-amber-500 text-slate-950 shadow-md font-extrabold" : "text-amber-200 hover:text-amber-100"}`,
                  children: "दक्षिण भारतीय (Grid)"
                }
              )
            ] })
          ] })
        ] }),
        kundali.input.warningsHi && kundali.input.warningsHi.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-xl bg-amber-950/35 border border-amber-500/45 text-xs text-amber-100/90 space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-bold text-amber-300 flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-3.5 h-3.5 text-amber-400 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: guideLang === "en" ? `Birth Timezone & Accuracy Note (${kundali.input.timeZone || "IST"} ${kundali.input.utcOffsetFormatted || ""})` : `जन्म समय व टाइमज़ोन सूचना (${kundali.input.timeZone || "Asia/Kolkata"} ${kundali.input.utcOffsetFormatted || ""})` })
          ] }),
          kundali.input.warningsHi.map((w, wIdx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "leading-relaxed", children: [
            "• ",
            w
          ] }, wIdx))
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "kundali-subview-content", className: "scroll-mt-24" }),
      activeSubView === "overview" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        (() => {
          const d10Houses = kundali.shodashavarga?.find((d) => d.id === "D10")?.houses || kundali.lagnaChart;
          const renderActiveChart = (props) => chartStyle === "north" ? /* @__PURE__ */ jsxRuntimeExports.jsx(NorthIndianKundaliChart, { ...props, language: guideLang }) : /* @__PURE__ */ jsxRuntimeExports.jsx(SouthIndianKundaliChart, { ...props, language: guideLang });
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: `grid grid-cols-1 md:grid-cols-2 ${kundaliViewMode === "simple" ? "xl:grid-cols-3" : "xl:grid-cols-3"} gap-5 print-charts-box`,
                children: [
                  renderActiveChart({
                    houses: kundali.lagnaChart,
                    title: `लग्न कुंडली (${kundali.panchang.lagnaName})`,
                    subtitle: "जन्म लग्न चक्र (Lagna - D1)",
                    lagnaDegInt: kundali.panchang.lagnaDegInt,
                    explainerKey: "lagna_d1"
                  }),
                  renderActiveChart({
                    houses: kundali.chandraChart,
                    title: `चंद्र कुंडली (${kundali.panchang.moonRashiName})`,
                    subtitle: "जन्म राशि चक्र (Moon Chart)",
                    explainerKey: "chandra"
                  }),
                  renderActiveChart({
                    houses: kundali.navamsaChart,
                    title: "नवांश कुंडली (Navamsa D-9)",
                    subtitle: "भाग्य व विवाह सूक्ष्म चक्र (D-9)",
                    explainerKey: "navamsha_d9"
                  }),
                  kundaliViewMode === "advanced" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    kundali.suryaChart && renderActiveChart({
                      houses: kundali.suryaChart,
                      title: `सूर्य कुंडली (${kundali.panchang.sunRashiName})`,
                      subtitle: "सूर्य लग्न चक्र (Surya Chart)",
                      explainerKey: "surya"
                    }),
                    kundali.bhavaChalitChart && renderActiveChart({
                      houses: kundali.bhavaChalitChart,
                      title: "श्रीपति भाव चलित कुंडली",
                      subtitle: "वास्तविक MC आधारित (Bhava Chalit)",
                      lagnaDegInt: kundali.panchang.lagnaDegInt,
                      explainerKey: "bhava_chalit"
                    }),
                    renderActiveChart({
                      houses: d10Houses,
                      title: "दशमांश कुंडली (Dashamsha D-10)",
                      subtitle: "करियर, कर्म व प्रतिष्ठा चक्र (D-10)",
                      explainerKey: "dashamsha_d10"
                    })
                  ] })
                ]
              }
            ),
            kundaliViewMode === "simple" && /* @__PURE__ */ jsxRuntimeExports.jsx(
              CollapsibleHowToReadCard,
              {
                guideKey: "navamsha_shodashavarga",
                language: guideLang
              }
            ),
            kundaliViewMode === "advanced" && /* @__PURE__ */ jsxRuntimeExports.jsx(
              AdvancedShodashavargaPanel,
              {
                kundali,
                language: guideLang,
                renderChart: renderActiveChart
              }
            )
          ] });
        })(),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#0e1525] border border-amber-800/50 rounded-2xl p-4 sm:p-6 shadow-xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-base sm:text-lg font-bold font-vedic text-amber-100 border-b border-amber-900/40 pb-2.5 mb-4 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-5 h-5 text-amber-400" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "जन्म पंचांग विवरण (Birth Panchang Details)" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs", children: [
              { label: "यजमान का नाम", val: kundali.input.name },
              {
                label: "जन्म तिथि एवं आयु",
                val: `${kundali.input.formattedDob} (~${kundali.input.ageYears} वर्ष)`
              },
              { label: "जन्म समय", val: kundali.input.formattedTime },
              { label: "जन्म स्थान", val: kundali.input.birthPlace },
              { label: "जन्म वार (Day)", val: kundali.panchang.vaar },
              { label: "वार स्वामी", val: kundali.panchang.vaarLord },
              { label: "जन्म तिथि (Tithi)", val: kundali.panchang.tithi },
              { label: "पक्ष (Paksha)", val: kundali.panchang.paksha },
              {
                label: "नक्षत्र एवं चरण",
                val: `${kundali.panchang.nakshatraName} (चरण ${kundali.panchang.nakshatraPada})`
              },
              { label: "नक्षत्र स्वामी", val: kundali.panchang.nakshatraLord },
              { label: "योग (Yoga)", val: kundali.panchang.yoga },
              { label: "करण (Karana)", val: kundali.panchang.karana }
            ].map((row) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-amber-400/80", children: row.label }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-amber-100 mt-0.5", children: row.val })
                ]
              },
              row.label
            )) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#0e1525] border border-amber-800/50 rounded-2xl p-4 sm:p-6 shadow-xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-base sm:text-lg font-bold font-vedic text-amber-100 border-b border-amber-900/40 pb-2.5 mb-4 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "w-5 h-5 text-amber-400" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "अवकहड़ा चक्र एवं घट-चक्र (Avakahada Chakra)" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs", children: [
              {
                label: "जन्म लग्न एवं स्वामी",
                val: `${kundali.panchang.lagnaName} (${kundali.panchang.lagnaLord})`
              },
              {
                label: "चंद्र राशि एवं स्वामी",
                val: `${kundali.panchang.moonRashiName} (${kundali.panchang.moonRashiLord})`
              },
              {
                label: "सूर्य राशि एवं स्वामी",
                val: `${kundali.panchang.sunRashiName} (${kundali.panchang.sunRashiLord})`
              },
              { label: "प्रचलित नाम राशि", val: kundali.panchang.naamRashi },
              { label: "गण (Gana)", val: kundali.panchang.gana },
              { label: "नाड़ी (Nadi)", val: kundali.panchang.nadi },
              { label: "योनि (Yoni)", val: kundali.panchang.yoni },
              {
                label: "वर्ण एवं वश्य",
                val: `${kundali.panchang.varna} • ${kundali.panchang.vashya}`
              },
              { label: "तत्व (Element)", val: kundali.panchang.tatva },
              { label: "पाया (Paya)", val: kundali.panchang.paya },
              {
                label: "शुभ अंक एवं वार",
                val: `अंक: ${kundali.lucky.luckyNumbers} | ${kundali.lucky.luckyDays}`
              },
              {
                label: "शुभ रंग एवं दिशा",
                val: `${kundali.lucky.luckyColors} | ${kundali.lucky.luckyDirection}`
              }
            ].map((row) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-amber-400/80", children: row.label }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-amber-100 mt-0.5", children: row.val })
                ]
              },
              row.label
            )) })
          ] })
        ] })
      ] }),
      (activeSubView === "charts" || activeSubView === "overview") && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#0e1525] border border-amber-800/50 rounded-2xl p-4 sm:p-6 shadow-xl space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap items-center justify-between gap-2 border-b border-amber-900/40 pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-lg sm:text-xl font-bold font-vedic text-amber-100 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "w-5 h-5 text-amber-400" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "नवग्रह स्पष्ट तालिका एवं भाव फल (9 Planets Position & House Effects)" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-amber-300/80 mt-0.5", children: "आपकी जन्म तिथि और जन्म समय के अनुसार सभी 9 ग्रहों की राशि, भाव, अंश (Degree), नक्षत्र और जीवन पर प्रभाव" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CollapsibleHowToReadCard, { guideKey: "navagraha", language: guideLang }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full table-fixed text-left border-collapse text-xs vedic-fixed-table", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("colgroup", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("col", { className: "w-[16%]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("col", { className: "w-[11%]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("col", { className: "w-[8%]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("col", { className: "w-[12%]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("col", { className: "w-[14%]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("col", { className: "w-[11%]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("col", { className: "w-[28%]" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-amber-800/60 bg-amber-950/40 text-amber-300 font-bold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "w-[16%] py-3 px-2.5 break-words whitespace-normal", children: "ग्रह (Planet)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "w-[11%] py-3 px-2 break-words whitespace-normal", children: "राशि (Sign)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "w-[8%] py-3 px-2 break-words whitespace-normal", children: "लग्न भाव" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "w-[12%] py-3 px-2 break-words whitespace-normal", children: "अंश (Degree)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "w-[14%] py-3 px-2 break-words whitespace-normal", children: "नक्षत्र (चरण)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "w-[11%] py-3 px-2 break-words whitespace-normal", children: "ग्रह अवस्था" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "w-[28%] py-3 px-2.5 break-words whitespace-normal", children: "कुंडली में फल एवं प्रभाव" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-slate-800/80", children: kundali.planets.map((planet) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-slate-900/60 transition-colors align-top", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "w-[16%] py-2.5 px-2.5 font-bold text-amber-100 break-words whitespace-normal", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: planet.hindiName }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-1 inline-block text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-amber-200 border border-amber-500/30", children: [
                planet.chartLabel,
                " ",
                String(planet.degInt).padStart(2, "0")
              ] }),
              planet.isRetrograde && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1 inline-block text-[10px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30", children: "वक्री (*)" }),
              planet.isCombust && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1 inline-block text-[10px] px-1.5 py-0.5 rounded bg-orange-500/20 text-orange-300 border border-orange-500/30", children: "अस्त (^)" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "w-[11%] py-2.5 px-2 text-amber-200 break-words whitespace-normal", children: planet.rashiName }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "w-[8%] py-2.5 px-2 font-mono font-bold text-amber-300 break-words whitespace-normal", children: [
              "भाव ",
              planet.houseInLagna
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "w-[12%] py-2.5 px-2 font-mono text-slate-200 break-words whitespace-normal", children: planet.fullDegreeDMS }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "w-[14%] py-2.5 px-2 text-amber-200/90 break-words whitespace-normal", children: [
              planet.nakshatra,
              " (चरण-",
              planet.pada,
              ")"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "w-[11%] py-2.5 px-2 break-words whitespace-normal", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: `inline-block px-2 py-0.5 rounded-full text-[10px] font-bold border ${planet.statusBadge === "shubh" ? "bg-emerald-950/80 text-emerald-300 border-emerald-500/40" : planet.statusBadge === "madhyam" ? "bg-amber-950/80 text-amber-300 border-amber-500/40" : "bg-rose-950/80 text-rose-300 border-rose-500/40"}`,
                children: planet.dignity
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "w-[28%] py-2.5 px-2.5 text-amber-100/90 break-words whitespace-normal leading-relaxed", children: planet.houseEffect })
          ] }, planet.id)) })
        ] }) }),
        kundaliViewMode === "advanced" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 pt-3 border-t border-amber-900/40", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 xl:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-slate-950/90 border border-amber-700/40 rounded-2xl p-4 space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-amber-900/40 pb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm sm:text-base font-bold font-vedic text-amber-200", children: "द्वादश भाव स्फुट (12 Sidereal Bhava Sphut)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 font-bold", children: "श्रीपति भाव मध्य" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CollapsibleHowToReadCard, { guideKey: "bhava_sphut", language: guideLang }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full table-fixed text-left border-collapse text-[11px] vedic-fixed-table tabular-nums", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("colgroup", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("col", { className: "w-[22%]" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("col", { className: "w-[28%]" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("col", { className: "w-[20%]" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("col", { className: "w-[30%]" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-amber-800/50 text-amber-300 font-bold", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "w-[22%] py-2 px-2 break-words whitespace-normal", children: "भाव" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "w-[28%] py-2 px-2 break-words whitespace-normal", children: "राशि (स्वामी)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "w-[20%] py-2 px-2 break-words whitespace-normal", children: "भाव मध्य" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "w-[30%] py-2 px-2 break-words whitespace-normal", children: "भाव संधि विस्तार" })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-slate-800/70", children: computeBhavaSphutTable(kundali).map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-slate-900/50 align-top", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "w-[22%] py-1.5 px-2 font-bold text-amber-100 break-words whitespace-normal", children: b.bhavaName }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "w-[28%] py-1.5 px-2 text-amber-200 break-words whitespace-normal", children: [
                    b.rashiName,
                    " • ",
                    b.rashiLord
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "w-[20%] py-1.5 px-2 font-mono text-emerald-300 break-words whitespace-normal", children: b.madhyaDMS }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "w-[30%] py-1.5 px-2 font-mono text-amber-300/90 break-words whitespace-normal", children: [
                    b.sandhiStartDMS,
                    " – ",
                    b.sandhiEndDMS
                  ] })
                ] }, b.houseNumber)) })
              ] }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-slate-950/90 border border-amber-700/40 rounded-2xl p-4 space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-amber-900/40 pb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm sm:text-base font-bold font-vedic text-amber-200", children: "ग्रह षड्बल एवं रूप बल सारांश (Parashari Shadbala Summary)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold", children: "6-अंगी पाराशरी बल" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CollapsibleHowToReadCard, { guideKey: "shadbala", language: guideLang }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full table-fixed text-left border-collapse text-[11px] vedic-fixed-table tabular-nums", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("colgroup", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("col", { className: "w-[18%]" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("col", { className: "w-[22%]" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("col", { className: "w-[24%]" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("col", { className: "w-[36%]" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-amber-800/50 text-amber-300 font-bold", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "w-[18%] py-2 px-2 break-words whitespace-normal", children: "ग्रह" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "w-[22%] py-2 px-2 break-words whitespace-normal", children: "स्थान/दिग्बल" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "w-[24%] py-2 px-2 break-words whitespace-normal", children: "कुल रूप बल" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "w-[36%] py-2 px-2 break-words whitespace-normal", children: "श्रेणी एवं परामर्श" })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-slate-800/70", children: computeShadbalaSummary(kundali.planets, kundali.shadbalaBhava).map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-slate-900/50 align-top", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "w-[18%] py-1.5 px-2 font-bold text-amber-100 break-words whitespace-normal", children: s.planet }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "w-[22%] py-1.5 px-2 font-mono text-amber-200 break-words whitespace-normal", children: [
                    s.sthanaBala,
                    " / ",
                    s.digBala
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "w-[24%] py-1.5 px-2 font-bold text-yellow-300 break-words whitespace-normal", children: [
                    s.totalRupas,
                    " (",
                    s.strengthPct,
                    "%)"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "w-[36%] py-1.5 px-2 text-emerald-300 break-words whitespace-normal", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", children: s.grade }),
                    " — ",
                    s.remedyHint
                  ] })
                ] }, s.planet)) })
              ] }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AdvancedShadbalaAndBhavaPanel, { kundali, language: guideLang }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AdvancedAshtakavargaPanel, { kundali, language: guideLang })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3.5 rounded-xl bg-slate-950/85 border border-amber-600/35 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs no-print", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-amber-100/90 leading-relaxed", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("b", { className: "text-amber-300", children: guideLang === "en" ? "Simple Mode Active: " : "सरल कुंडली मोड सक्रिय है: " }),
            guideLang === "en" ? "Deep mathematical matrices (16 Shodashavarga, 6-fold Shadbala, Bhava Bala, Ashtakavarga) are tucked away for easy reading." : "गहन गणितीय तालिकाएँ (16 षोडशवर्ग, 6-अंगी षड्बल, भाव बल, अष्टकवर्ग) सरल अध्ययन हेतु छिपाई गई हैं।"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => handleChangeKundaliViewMode("advanced"),
              className: "px-3.5 py-2 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-400/50 text-emerald-200 font-bold whitespace-nowrap cursor-pointer shrink-0",
              children: guideLang === "en" ? "Open Advanced Mode" : "विशेषज्ञ मोड खोलें"
            }
          )
        ] }),
        (() => {
          const gr = getLagnaGemstoneAndRudraksha(kundali);
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-2xl bg-gradient-to-r from-amber-950/60 via-slate-950 to-emerald-950/40 border border-amber-500/40 grid grid-cols-1 md:grid-cols-3 gap-3 text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold uppercase text-amber-400 block", children: "लग्नेश जीवन रत्न एवं भाग्य रत्न" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-amber-100 mt-0.5", children: gr.jeevanRatna }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-amber-300/90 mt-0.5", children: [
                "भाग्य रत्न: ",
                gr.bhagyaRatna
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-bold uppercase text-emerald-400 block", children: [
                "प्रामाणिक रुद्राक्ष कवच (",
                kundali.panchang.lagnaName,
                " लग्न)"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-emerald-300 mt-0.5", children: gr.primaryRudraksha }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-amber-200/85 mt-0.5", children: [
                "सहायक: ",
                gr.secondaryRudraksha
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold uppercase text-rose-400 block", children: "रत्न धारण विधि एवं वर्जित रत्न" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-amber-100 mt-0.5", children: gr.metalAndFinger }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-rose-300 font-semibold mt-0.5", children: [
                "वर्जित: ",
                gr.avoidStones
              ] })
            ] })
          ] });
        })(),
        kundali.deepAnalysis?.allTwelveBhavas && kundali.deepAnalysis.allTwelveBhavas.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-4 border-t border-amber-900/40 space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-sm sm:text-base font-bold font-vedic text-amber-100 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Compass, { className: "w-4 h-4 text-amber-400" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: localizeVedicText("द्वादश भाव संपूर्ण व्यक्तिगत फलादेश (All 12 Houses Deep Analysis)") })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold", children: localizeVedicText("भावेश स्थिति + ग्रह दृष्टि आधारित") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3", children: kundali.deepAnalysis.allTwelveBhavas.map((bh) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "p-3.5 rounded-xl bg-slate-950/90 border border-amber-800/40 space-y-1.5",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-extrabold text-amber-300", children: [
                    bh.house,
                    ". ",
                    localizeVedicText(bh.bhavaName)
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: `text-[10px] px-2 py-0.5 rounded-full font-bold border ${bh.strengthLabel === "प्रबल" ? "bg-emerald-950/80 text-emerald-300 border-emerald-500/40" : bh.strengthLabel === "शुभ" ? "bg-amber-950/80 text-amber-300 border-amber-500/40" : "bg-slate-900 text-slate-300 border-slate-700"}`,
                      children: localizeVedicText(bh.strengthLabel)
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-amber-200/80 font-mono", children: [
                  localizeVedicText(bh.rashi),
                  " • ",
                  localizeVedicText("स्वामी"),
                  ": ",
                  localizeVedicText(bh.lord),
                  " (",
                  localizeVedicText("भाव"),
                  " ",
                  bh.lordPlacementHouse,
                  ")"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-emerald-300/90", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("b", { children: [
                    localizeVedicText("स्थित ग्रह"),
                    ":"
                  ] }),
                  " ",
                  localizeVedicText(bh.occupants)
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-200 leading-relaxed", children: localizeVedicText(bh.prediction) })
              ]
            },
            bh.house
          )) })
        ] })
      ] }),
      (activeSubView === "dasha_dosha" || activeSubView === "overview") && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        kundaliViewMode === "simple" && /* @__PURE__ */ jsxRuntimeExports.jsx(CollapsibleHowToReadCard, { guideKey: "dosha_parihar_gochar", language: guideLang }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 sm:p-5 rounded-2xl bg-[#0e1525] border border-amber-700/50 space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-amber-400 uppercase tracking-wider", children: "मांगलिक दोष विचार" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: `text-[11px] font-bold px-2.5 py-0.5 rounded-full ${!kundali.doshaAnalysis.manglik.isManglik ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40" : "bg-amber-500/20 text-amber-300 border border-amber-500/40"}`,
                  children: kundali.doshaAnalysis.manglik.severity
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-amber-100/90 leading-relaxed", children: kundali.doshaAnalysis.manglik.explanation }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-emerald-300/90 bg-slate-950/80 p-2.5 rounded-xl border border-slate-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "वैदिक सलाह:" }),
              " ",
              kundali.doshaAnalysis.manglik.remedy
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 sm:p-5 rounded-2xl bg-[#0e1525] border border-amber-700/50 space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-amber-400 uppercase tracking-wider", children: "शनि साढ़े साती एवं गोचर" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40", children: kundali.doshaAnalysis.sadeSati.phase })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-amber-100/90 leading-relaxed", children: kundali.doshaAnalysis.sadeSati.explanation }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-emerald-300/90 bg-slate-950/80 p-2.5 rounded-xl border border-slate-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "वैदिक सलाह:" }),
              " ",
              kundali.doshaAnalysis.sadeSati.remedy
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 sm:p-5 rounded-2xl bg-[#0e1525] border border-amber-700/50 space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-amber-400 uppercase tracking-wider", children: "कालसर्प एवं पितृ योग विचार" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40", children: kundali.doshaAnalysis.kaalSarp.type })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-amber-100/90 leading-relaxed", children: kundali.doshaAnalysis.kaalSarp.explanation }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-emerald-300/90 bg-slate-950/80 p-2.5 rounded-xl border border-slate-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "वैदिक सलाह:" }),
              " ",
              kundali.doshaAnalysis.kaalSarp.remedy
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#0e1525] border border-amber-700/50 rounded-2xl p-4 sm:p-6 shadow-xl space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-base sm:text-lg font-bold font-vedic text-amber-100 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-5 h-5 text-yellow-400" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "कुंडली में निर्मित शुभ राजयोग एवं धन योग (Auspicious Raj Yogas)" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: kundali.rajYogas.map((yoga) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "p-4 rounded-2xl bg-gradient-to-b from-amber-950/40 to-slate-950 border border-amber-500/40 space-y-1.5",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-emerald-300 px-2 py-0.5 rounded bg-emerald-950 border border-emerald-500/40", children: yoga.strength }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-amber-400", children: yoga.sanskritRule })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "text-sm sm:text-base font-bold text-amber-100 pt-1", children: yoga.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-amber-200/85 leading-relaxed", children: yoga.description })
              ]
            },
            yoga.name
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#0e1525] border border-amber-700/50 rounded-2xl p-4 sm:p-6 shadow-xl space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap items-center justify-between gap-2 border-b border-amber-900/40 pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-base sm:text-lg font-bold font-vedic text-amber-100 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "w-5 h-5 text-amber-400" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "विंशोत्तरी महादशा चक्र एवं वर्तमान प्रभाव (Vimshottari Mahadasha Timeline)" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-amber-300/80 mt-0.5", children: [
              "जन्म नक्षत्र (",
              kundali.panchang.nakshatraName,
              ") के आधार पर आपके जीवन की ग्रह महादशाओं का क्रम"
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CollapsibleHowToReadCard, { guideKey: "dasha_vimshottari", language: guideLang }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3", children: kundali.mahadashas.map((dasha) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: `p-3.5 rounded-2xl border transition-all ${dasha.isCurrent ? "bg-gradient-to-br from-emerald-950/80 via-slate-900 to-amber-950/60 border-2 border-emerald-400 shadow-lg" : "bg-slate-950/80 border-slate-800"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2 mb-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-extrabold text-amber-100", children: [
                    dasha.planet,
                    " महादशा"
                  ] }),
                  dasha.isCurrent ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-emerald-400 text-slate-950", children: "वर्तमान सक्रिय दशा" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] font-mono text-amber-400/80", children: [
                    dasha.years,
                    " वर्ष"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs font-mono text-amber-300 mb-1.5", children: [
                  "अवधि: ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: dasha.startYear }),
                  " से ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: dasha.endYear }),
                  " तक",
                  dasha.currentAntardasha && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "block text-emerald-300 font-sans mt-0.5", children: [
                    "वर्तमान अंतर्दशा: ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: dasha.currentAntardasha })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-amber-200/85 leading-relaxed", children: dasha.prediction })
              ]
            },
            `${dasha.planet}-${dasha.startYear}`
          )) })
        ] }),
        kundaliViewMode === "advanced" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AdvancedDashaSuitePanel, { kundali, language: guideLang }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AdvancedDoshaGocharTimelinePanel, { kundali, language: guideLang })
        ] })
      ] }),
      (activeSubView === "predictions" || activeSubView === "overview") && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#0e1525] border border-amber-700/50 rounded-2xl p-4 sm:p-6 shadow-xl space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-amber-900/40 pb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-lg sm:text-2xl font-bold font-vedic text-amber-100 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-5 h-5 text-amber-400" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "सम्पूर्ण जीवन भविष्यफल (Complete Horoscope Predictions)" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-amber-300/80 mt-0.5", children: [
            "लग्न (",
            kundali.panchang.lagnaName,
            "), चंद्र राशि (",
            kundali.panchang.moonRashiName,
            ") और ग्रहों के भाव बल पर आधारित विस्तृत फलादेश"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 sm:p-5 rounded-2xl bg-slate-950/90 border border-amber-800/40 space-y-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-amber-300 font-bold text-sm sm:text-base", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-4 h-4 text-amber-400 flex-shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: kundali.predictions.personality.title })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm text-amber-100/90 leading-relaxed", children: kundali.predictions.personality.summary }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1 pt-1", children: kundali.predictions.personality.keyTraits.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "text-xs text-amber-300/90 flex items-start gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-amber-400 mt-0.5", children: "•" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t })
            ] }, t)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 sm:p-5 rounded-2xl bg-slate-950/90 border border-amber-800/40 space-y-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-amber-300 font-bold text-sm sm:text-base", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "w-4 h-4 text-amber-400 flex-shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: kundali.predictions.career.title })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm text-amber-100/90 leading-relaxed", children: kundali.predictions.career.summary }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2.5 rounded-xl bg-amber-950/30 border border-amber-700/30 text-xs text-emerald-300 font-medium", children: kundali.predictions.career.peakYears })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 sm:p-5 rounded-2xl bg-slate-950/90 border border-amber-800/40 space-y-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-amber-300 font-bold text-sm sm:text-base", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Coins, { className: "w-4 h-4 text-amber-400 flex-shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: kundali.predictions.wealth.title })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm text-amber-100/90 leading-relaxed", children: kundali.predictions.wealth.summary }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1 pt-1", children: kundali.predictions.wealth.highlights.map((h) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "text-xs text-amber-300/90 flex items-start gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0", strokeWidth: 1.5 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: h })
            ] }, h)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 sm:p-5 rounded-2xl bg-slate-950/90 border border-amber-800/40 space-y-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-amber-300 font-bold text-sm sm:text-base", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "w-4 h-4 text-rose-400 flex-shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: kundali.predictions.marriage.title })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm text-amber-100/90 leading-relaxed", children: kundali.predictions.marriage.summary }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-amber-200/90 bg-slate-900 p-2.5 rounded-xl border border-slate-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "जीवनसाथी का स्वभाव:" }),
              " ",
              kundali.predictions.marriage.spouseNature
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 sm:p-5 rounded-2xl bg-slate-950/90 border border-amber-800/40 space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-amber-300 font-bold text-sm sm:text-base", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-4 h-4 text-amber-400 flex-shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: kundali.predictions.education.title })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm text-amber-100/90 leading-relaxed", children: kundali.predictions.education.summary })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 sm:p-5 rounded-2xl bg-slate-950/90 border border-amber-800/40 space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-amber-300 font-bold text-sm sm:text-base", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "w-4 h-4 text-emerald-400 flex-shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: kundali.predictions.health.title })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm text-amber-100/90 leading-relaxed", children: kundali.predictions.health.summary }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1 pt-1", children: kundali.predictions.health.careAreas.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "text-xs text-amber-300/90 flex items-start gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-amber-400 mt-0.5", children: "•" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: c })
            ] }, c)) })
          ] })
        ] }),
        kundali.deepAnalysis && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 pt-3 border-t border-amber-900/40", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-2xl bg-gradient-to-r from-amber-950/40 via-slate-950 to-emerald-950/30 border border-amber-500/40 space-y-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm sm:text-base font-bold font-vedic text-amber-200", children: localizeVedicText("नवांश (D-9), दशमांश (D-10) एवं जैमिनी कारकांश गहन विश्लेषण") }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5 text-xs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 rounded-xl bg-slate-950/80 border border-amber-800/40", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-amber-400 block", children: localizeVedicText("D-9 नवांश लग्न") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("b", { className: "text-amber-100", children: localizeVedicText(kundali.deepAnalysis.navamshaAndCareerDepth.d9Lagna) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 rounded-xl bg-slate-950/80 border border-amber-800/40", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-amber-400 block", children: localizeVedicText("D-9 सप्तमेश") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("b", { className: "text-amber-100", children: localizeVedicText(kundali.deepAnalysis.navamshaAndCareerDepth.seventhLordInD9) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 rounded-xl bg-slate-950/80 border border-amber-800/40", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-amber-400 block", children: localizeVedicText("D-10 दशमांश लग्न") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("b", { className: "text-amber-100", children: localizeVedicText(kundali.deepAnalysis.navamshaAndCareerDepth.d10Lagna) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 rounded-xl bg-slate-950/80 border border-amber-800/40", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-amber-400 block", children: localizeVedicText("D-10 दशमेश") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("b", { className: "text-amber-100", children: localizeVedicText(kundali.deepAnalysis.navamshaAndCareerDepth.tenthLordInD10) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 rounded-xl bg-slate-950/80 border border-emerald-500/40", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-emerald-400 block", children: localizeVedicText("जैमिनी कारकांश") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("b", { className: "text-emerald-200", children: localizeVedicText(kundali.deepAnalysis.navamshaAndCareerDepth.karakamsha) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-amber-100/90 leading-relaxed", children: localizeVedicText(kundali.deepAnalysis.navamshaAndCareerDepth.spiritualAndCareerVerdict) })
          ] }),
          kundali.deepAnalysis.advancedYogasAndCancellations.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm sm:text-base font-bold font-vedic text-amber-200", children: localizeVedicText("सूक्ष्म राजयोग, नीचभंग, विपरीत राजयोग व दोष भंग परीक्षण") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: kundali.deepAnalysis.advancedYogasAndCancellations.map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3.5 rounded-xl bg-slate-950/90 border border-amber-700/40 space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-extrabold text-amber-200", children: localizeVedicText(item.name) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 font-bold", children: item.category })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-emerald-300/90 font-medium", children: localizeVedicText(item.rule) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-200 leading-relaxed", children: localizeVedicText(item.effect) })
            ] }, idx)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-2xl bg-slate-950/90 border border-amber-700/40 space-y-2.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "text-sm font-bold text-amber-200", children: localizeVedicText("दशा आधारित स्वर्ण जीवन कालखंड (Golden Timeline Windows)") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: kundali.deepAnalysis.lifeTimelineWindows.map((tw, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-1 text-amber-300 font-bold", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: localizeVedicText(tw.area) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-emerald-300", children: [
                    localizeVedicText(tw.windowLabel),
                    " (",
                    localizeVedicText(tw.dashaLink),
                    ")"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-200 mt-1 leading-relaxed", children: localizeVedicText(tw.forecast) })
              ] }, idx)) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-2xl bg-slate-950/90 border border-emerald-700/40 space-y-2.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "text-sm font-bold text-emerald-300", children: localizeVedicText("वर्तमान लाइव ग्रह गोचर प्रभाव (Live Sidereal Gochar)") }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-xs text-slate-200 leading-relaxed", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 rounded-xl bg-slate-900/90 border border-slate-800", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("b", { className: "text-amber-300 block mb-0.5", children: [
                    localizeVedicText("देवगुरु बृहस्पति गोचर"),
                    ":"
                  ] }),
                  localizeVedicText(kundali.deepAnalysis.gocharSnapshot.jupiterEffect)
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 rounded-xl bg-slate-900/90 border border-slate-800", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("b", { className: "text-amber-300 block mb-0.5", children: [
                    localizeVedicText("कर्मफलदाता शनि गोचर"),
                    ":"
                  ] }),
                  localizeVedicText(kundali.deepAnalysis.gocharSnapshot.saturnEffect)
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 rounded-xl bg-slate-900/90 border border-slate-800", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("b", { className: "text-amber-300 block mb-0.5", children: [
                    localizeVedicText("राहु-केतु अक्ष गोचर"),
                    ":"
                  ] }),
                  localizeVedicText(kundali.deepAnalysis.gocharSnapshot.rahuKetuEffect)
                ] })
              ] })
            ] })
          ] })
        ] })
      ] }),
      (activeSubView === "remedies" || activeSubView === "overview") && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-[#191108] via-[#101829] to-[#0b101d] border-2 border-amber-500/50 rounded-3xl p-4 sm:p-7 shadow-2xl space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-amber-800/50 pb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-lg sm:text-2xl font-bold font-vedic text-amber-100 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Gem, { className: "w-5 h-5 text-yellow-400" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "शुभ रत्न, इष्ट मंत्र एवं पण्डित शशांक शर्मा जी के वैदिक उपाय" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-amber-300/80 mt-0.5", children: "संतुलित ज्योतिष दर्शन: कुंडली के मजबूत पक्ष (Strengths), आवश्यक सावधानियां (Precautions) और सरल सात्विक उपाय" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: onOpenMantraJaap,
              className: "px-4 py-2 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-400/50 text-amber-200 text-xs font-bold flex items-center gap-1.5 cursor-pointer",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "w-4 h-4 text-yellow-400" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "108 मंत्र जप काउंटर खोलें" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-2xl bg-slate-950/90 border border-amber-500/40 space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-bold text-amber-400 uppercase", children: "जीवन रत्न (Life Gemstone)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-base font-extrabold text-yellow-300", children: kundali.lucky.ratnaName }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-amber-200/85", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "उपरत्न:" }),
              " ",
              kundali.lucky.uparatnaName
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-emerald-300", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "धारण विधि:" }),
              " ",
              kundali.lucky.ratnaMetalAndFinger
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-2xl bg-slate-950/90 border border-amber-500/40 space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-bold text-amber-400 uppercase", children: "आराध्य देव एवं रुद्राक्ष कवच" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-base font-extrabold text-amber-100", children: kundali.lucky.ishtaDevta }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-amber-200/85", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "शुभ रुद्राक्ष:" }),
              " ",
              kundali.lucky.rudraksha
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-amber-300", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "शुभ वार:" }),
              " ",
              kundali.lucky.luckyDays
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-2xl bg-slate-950/90 border border-emerald-500/40 space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-bold text-emerald-400 uppercase", children: "दैनिक भाग्योदय बीज मंत्र" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm sm:text-base font-extrabold font-vedic text-emerald-300", children: kundali.lucky.beejMantra }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-amber-200/80", children: "प्रतिदिन प्रातः स्नान के पश्चात 108 बार (1 माला) जप करने से ग्रह बाधा शांत होती है।" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-2xl bg-emerald-950/25 border border-emerald-500/40 space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h5", { className: "text-xs sm:text-sm font-bold text-emerald-300 flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-4 h-4 text-emerald-400" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "कुंडली के प्रबल शुभ पक्ष (Planetary Strengths)" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1.5", children: kundali.remedies.strengths.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "text-xs text-amber-100/90 flex items-start gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0", strokeWidth: 1.5 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: s })
            ] }, s)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-2xl bg-amber-950/30 border border-amber-500/40 space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h5", { className: "text-xs sm:text-sm font-bold text-amber-300 flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-4 h-4 text-amber-400" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "महत्वपूर्ण सावधानियां (Important Precautions)" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1.5", children: kundali.remedies.precautions.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "text-xs text-amber-100/90 flex items-start gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-amber-400 font-bold", children: "!" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: p })
            ] }, p)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 sm:p-5 rounded-2xl bg-slate-950/90 border border-amber-600/40 space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "text-sm sm:text-base font-bold font-vedic text-amber-200", children: "शास्त्रसम्मत सरल वैदिक उपाय (Recommended Vedic Upay):" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: kundali.remedies.upayList.map((u, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-amber-100/90 leading-relaxed",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-amber-400 mr-1.5", children: [
                  localizeVedicText("उपाय"),
                  " ",
                  idx + 1,
                  ":"
                ] }),
                localizeVedicText(u)
              ]
            },
            idx
          )) }),
          kundali.deepAnalysis?.lalKitabAndVedicRemedies && kundali.deepAnalysis.lalKitabAndVedicRemedies.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-3 border-t border-amber-900/40 space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h6", { className: "text-xs sm:text-sm font-bold text-emerald-300", children: [
              localizeVedicText("कुंडली विशिष्ट लाल-किताब एवं व्यावहारिक अचूक उपाय (Personalized Lal-Kitab & Vedic Remedies)"),
              ":"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-2.5", children: kundali.deepAnalysis.lalKitabAndVedicRemedies.map((rem, rIdx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "p-2.5 rounded-xl bg-emerald-950/25 border border-emerald-500/30 text-xs text-emerald-100 leading-relaxed",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-emerald-400 mr-1", children: [
                    rIdx + 1,
                    "."
                  ] }),
                  localizeVedicText(rem)
                ]
              },
              rIdx
            )) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-2xl bg-gradient-to-r from-amber-950/80 via-slate-900 to-emerald-950/80 border border-amber-500/50 flex flex-col sm:flex-row items-center justify-between gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center sm:text-left", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm sm:text-base font-bold text-amber-100", children: "क्या आप अपनी कुंडली के किसी विशेष प्रश्न (विवाह, व्यापार, संतान या सरकारी नौकरी) पर सीधा परामर्श चाहते हैं?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-amber-300/85 mt-0.5", children: "पण्डित शशांक शर्मा जी से WhatsApp या फोन पर प्रत्यक्ष कुंडली विश्लेषण प्राप्त करें (विशेष शुल्क मात्र ₹100)।" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-center gap-2.5 flex-shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => onConsultPanditJi(
                  `मेरा नाम ${kundali.input.name} है (DOB: ${kundali.input.formattedDob}, समय: ${kundali.input.formattedTime}, लग्न: ${kundali.panchang.lagnaName}, राशि: ${kundali.panchang.moonRashiName}, नक्षत्र: ${kundali.panchang.nakshatraName})। मेरी वर्तमान महादशा ${currentDashaObj?.planet} चल रही है। कृपया मेरे करियर, धन और आगामी समय के लिए मार्गदर्शन दें।`
                ),
                className: "px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-amber-500/50 text-amber-200 text-xs font-bold cursor-pointer",
                children: "पं. शशांक शर्मा से पूछें"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: getWhatsAppLink(getWhatsAppKundaliMessage()),
                target: "_blank",
                rel: "noopener noreferrer",
                className: "px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white text-xs font-extrabold shadow-lg flex items-center gap-1.5",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-4 h-4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "सीधे WhatsApp पर कुंडली भेजें" })
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-950/90 via-[#0f172a] to-slate-900 border-2 border-amber-500/60 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-full bg-amber-500/20 border border-amber-500/50 flex items-center justify-center font-bold text-amber-300 text-2xl font-vedic shadow-md", children: "ॐ" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-black uppercase text-amber-400 tracking-wider block", children: "वैदिक प्रमाणित जन्म पत्रिका • पण्डित जी ऑनलाइन (Pandit Ji Online)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "text-sm sm:text-base font-extrabold font-vedic text-amber-100 mt-0.5", children: "मार्गदर्शक: आचार्य पण्डित शशांक शर्मा (रुद्रपुर, उधम सिंह नगर, उत्तराखण्ड)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-amber-200/80 mt-0.5", children: [
                "वैदिक पुरोहित एवं ज्योतिषाचार्य • सम्पर्क एवं व्हाट्सएप: ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "7017279043" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right text-xs text-amber-300 font-mono", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[10px] uppercase font-bold inline-block mb-1", children: "चित्रापक्ष लाहिड़ी अयनंश" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-bold text-amber-400", children: "panditjionline.online" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#0e1525] border-2 border-amber-800/50 rounded-2xl p-4 sm:p-6 shadow-xl space-y-4 no-print", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-amber-900/40 pb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-400", children: /* @__PURE__ */ jsxRuntimeExports.jsx(History, { className: "w-5 h-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm sm:text-lg font-bold font-vedic text-amber-100", children: "खोजी गई जन्म कुंडली हिस्ट्री (Last Searched Kundali & History)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-amber-300/80", children: [
              "आपने जो भी पिछली कुंडली खोजी है, उसे यहाँ से पुनः देखें या डिलीट करें (",
              savedHistory.length,
              " रिकॉर्ड)"
            ] })
          ] })
        ] }),
        savedHistory.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: !confirmClearAll ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => setConfirmClearAll(true),
            className: "px-3.5 py-2 rounded-xl bg-rose-950/80 hover:bg-rose-900 border border-rose-500/50 text-rose-200 text-xs font-bold flex items-center gap-1.5 cursor-pointer",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3.5 h-3.5 text-rose-400" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "सारी कुंडली हिस्ट्री डिलीट करें" })
            ]
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 bg-rose-950 border border-rose-500 rounded-xl p-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: handleClearAllHistory,
              className: "px-2.5 py-1 rounded-lg bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold cursor-pointer",
              children: "हाँ, सब डिलीट करें"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setConfirmClearAll(false),
              className: "px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 text-xs cursor-pointer",
              children: "रद्द करें"
            }
          )
        ] }) })
      ] }),
      savedHistory.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6 rounded-xl bg-slate-950/60 border border-slate-800 text-center text-xs sm:text-sm text-slate-400", children: "अभी तक कोई जन्म कुंडली हिस्ट्री सेव नहीं है। जब आप ऊपर नाम, जन्म तिथि और समय डालकर कुंडली देखेंगे, तो आपकी अंतिम खोजी गई कुंडली यहाँ सेव हो जाएगी।" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5", children: savedHistory.map((item, index) => {
        const isLatest = index === 0;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `p-4 rounded-2xl border transition-all flex flex-col justify-between gap-3 ${isLatest ? "bg-gradient-to-br from-amber-950/60 via-slate-950 to-slate-900 border-2 border-amber-500/70 shadow-lg" : "bg-slate-950/90 border-amber-900/40 hover:border-amber-500/50"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2 mb-1.5", children: [
                  isLatest ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-500 text-slate-950", children: "अंतिम खोजी गई कुंडली (Last Searched)" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-800 text-amber-300", children: [
                    "कुंडली #",
                    index + 1
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-slate-400 font-mono", children: item.timestamp })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "text-sm sm:text-base font-bold font-vedic text-amber-100 truncate", children: item.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-amber-300/90 font-mono mt-1", children: [
                  "जन्म तिथि: ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: item.dob }),
                  " • समय: ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: item.birthTime })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-slate-300 mt-0.5 truncate", children: [
                  "स्थान: ",
                  item.birthPlace || "रुद्रपुर, उत्तराखण्ड"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 pt-2 border-t border-slate-800/80 grid grid-cols-2 gap-1.5 text-[11px]", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-emerald-300 truncate", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "लग्न:" }),
                    " ",
                    item.lagna
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-amber-200 truncate", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "राशि:" }),
                    " ",
                    item.moonRashi
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-amber-300/90 truncate col-span-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "नक्षत्र:" }),
                    " ",
                    item.nakshatra,
                    " (चरण ",
                    item.nakshatraPada,
                    ")"
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 pt-2 border-t border-slate-800", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => handleLoadFromHistory(item),
                    className: "flex-1 py-2 px-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-yellow-400 hover:to-amber-400 text-slate-950 font-extrabold text-xs flex items-center justify-center gap-1.5 cursor-pointer shadow-md",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-3.5 h-3.5" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "कुंडली देखें" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => handleDownloadHistoryKundaliPDF(item),
                    disabled: isDownloadingPDF,
                    className: "py-2 px-2.5 rounded-xl bg-emerald-950/90 hover:bg-emerald-900 text-emerald-200 border border-emerald-500/50 text-xs font-bold flex items-center gap-1 cursor-pointer disabled:opacity-50",
                    title: "१२-पृष्ठ जन्म कुंडली PDF डाउनलोड करें",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-3.5 h-3.5 text-emerald-400" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "PDF" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => handleDeleteHistoryItem(item.id, item.name),
                    className: "py-2 px-2.5 rounded-xl bg-rose-950/80 hover:bg-rose-900 text-rose-200 border border-rose-600/40 text-xs font-bold flex items-center gap-1 cursor-pointer",
                    title: "इस कुंडली हिस्ट्री को डिलीट करें",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3.5 h-3.5 text-rose-400" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "डिलीट" })
                    ]
                  }
                )
              ] })
            ]
          },
          item.id
        );
      }) })
    ] })
  ] });
};
const SampurnKundaliSection$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  SampurnKundaliSection
}, Symbol.toStringTag, { value: "Module" }));
export {
  CHART_EXPLAINERS as C,
  GRAHA_LEGEND_ITEMS as G,
  RASHI_12_REFERENCE as R,
  SampurnKundaliSection$1 as S,
  TABLE_HOW_TO_READ_GUIDES as T,
  RASHI_VS_BHAVA_EXPLAINER as a
};
