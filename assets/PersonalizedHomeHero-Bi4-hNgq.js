import { r as reactExports, R as React, j as jsxRuntimeExports } from "./vendor-react-CCbeDaYX.js";
import { B as getCalculationViewingMode, c as getActivePanchangLocation, g as getISTCalendarParts, M as getFamilyVaultProfiles, N as deriveVedicDetailsForProfile, G as getActiveProfile, t as resolveCityCoordinates, I as generateSampurnKundali, b as buildSingleDayPanchang, H as getVedicDetailsFromName, O as isGrahaRetrogradeAt, Q as computeOptionalTarabala, K as formatUserSalutation, C as setCalculationViewingMode, z as getMsUntilNextISTMidnight, R as NAKSHATRAS_27 } from "./panchang-core-WfwKNTXG.js";
import { u as useLanguage, v as vedicAudio, g as getInstantTodayPanchangSnapshot, a as SacredIcon, e as ShareableVedicCardButton, f as getTodayPanchangDeferred, h as getTodayPanchang } from "./index-CUAFR0Uq.js";
import { c as computeDrikGanitaRashifalForRashi, d as computeDayOfYear, e as countVakriPlanets, r as resolveKaranIndexHi, h as resolveYogaIndexHi, i as resolveNakshatraIndexHi, f as formatHindiHouseOrdinal, j as cleanHindiProse, k as buildModular64FalitHi, l as resolveModularPolarity } from "./drikGanitaRashifalEngine-DPYMZu12.js";
import { S as Sparkles, a1 as MapPin, aq as Moon, x as Calendar, g as Star, a8 as Compass, Q as VolumeX, T as Volume2, a2 as Clock, ap as Sun, b as Scale, a9 as Flame, a7 as Gem, am as ChevronRight, r as Briefcase, aC as Heart, a4 as TriangleAlert } from "./vendor-icons-Bk5Rg8-9.js";
import "./vendor-astronomy-C8JZdkQu.js";
import "./vendor-pdf-CpPyS1re.js";
import "./seo-core-uu9B2jSm.js";
const NAME_RASHI_ASTRO_MAP = {
  "मेष": {
    lagnaName: "मेष (नाम राशि आधारित)",
    lagnaLord: "मंगल (Mars)",
    activeDasha: "मंगल",
    activeAntardasha: "बृहस्पति",
    dashaPeriod: "2024 — 2031 (नाम गोचर)",
    ratnaName: "लाल मूंगा (Red Coral)",
    uparatnaName: "ताम्र रत्न",
    ratnaMetalAndFinger: "तांबे की अंगूठी में अनामिका उंगली में",
    rudraksha: "३ मुखी रुद्राक्ष",
    beejMantra: "ॐ क्रां क्रीं क्रौं सः भौमाय नमः॥",
    ishtaDevta: "श्री हनुमान जी एवं कार्तिकेय",
    luckyColors: "सिंदूरी लाल एवं नारंगी",
    luckyNumbers: "1, 9",
    luckyDirection: "पूर्व दिशा"
  },
  "वृषभ": {
    lagnaName: "वृषभ (नाम राशि आधारित)",
    lagnaLord: "शुक्र (Venus)",
    activeDasha: "शुक्र",
    activeAntardasha: "बुध",
    dashaPeriod: "2022 — 2042 (नाम गोचर)",
    ratnaName: "हीरा / सफेद ओपल (Opal)",
    uparatnaName: "जरकन",
    ratnaMetalAndFinger: "चांदी में मध्यमा / तर्जनी",
    rudraksha: "६ मुखी रुद्राक्ष",
    beejMantra: "ॐ द्रां द्रीं द्रौं सः शुक्राय नमः॥",
    ishtaDevta: "माँ महालक्ष्मी",
    luckyColors: "श्वेत एवं चमकीला क्रीम",
    luckyNumbers: "2, 6",
    luckyDirection: "पश्चिम, आग्नेय एवं उत्तर"
  },
  "मिथुन": {
    lagnaName: "मिथुन (नाम राशि आधारित)",
    lagnaLord: "बुध (Mercury)",
    activeDasha: "बुध",
    activeAntardasha: "शुक्र",
    dashaPeriod: "2023 — 2040 (नाम गोचर)",
    ratnaName: "हरा पन्ना (Emerald)",
    uparatnaName: "पेरिडॉट / मरगज",
    ratnaMetalAndFinger: "सोने या कांस्य में कनिष्ठिका उंगली में",
    rudraksha: "४ मुखी रुद्राक्ष",
    beejMantra: "ॐ ब्रां ब्रीं ब्रौं सः बुधाय नमः॥",
    ishtaDevta: "भगवान श्री गणेश",
    luckyColors: "तोतिया हरा एवं हल्का पीला",
    luckyNumbers: "3, 5",
    luckyDirection: "उत्तर दिशा"
  },
  "कर्क": {
    lagnaName: "कर्क (नाम राशि आधारित)",
    lagnaLord: "चन्द्रमा (Moon)",
    activeDasha: "चन्द्रमा",
    activeAntardasha: "बृहस्पति",
    dashaPeriod: "2025 — 2035 (नाम गोचर)",
    ratnaName: "सच्चा मोती (Pearl)",
    uparatnaName: "चन्द्रकान्त मणि (Moonstone)",
    ratnaMetalAndFinger: "चांदी में कनिष्ठिका / तर्जनी",
    rudraksha: "२ मुखी रुद्राक्ष",
    beejMantra: "ॐ श्रां श्रीं श्रौं सः चन्द्रमसे नमः॥",
    ishtaDevta: "भगवान शिवशंकर",
    luckyColors: "दूधिया सफेद एवं सिल्वर",
    luckyNumbers: "2, 4",
    luckyDirection: "उत्तर-पश्चिम (वायव्य)"
  },
  "सिंह": {
    lagnaName: "सिंह (नाम राशि आधारित)",
    lagnaLord: "सूर्य (Sun)",
    activeDasha: "सूर्य",
    activeAntardasha: "मंगल",
    dashaPeriod: "2024 — 2030 (नाम गोचर)",
    ratnaName: "माणिक्य (Ruby)",
    uparatnaName: "गारनेट / लाल तूरी",
    ratnaMetalAndFinger: "सोने या तांबे में अनामिका उंगली में",
    rudraksha: "१२ मुखी रुद्राक्ष",
    beejMantra: "ॐ ह्रां ह्रीं ह्रौं सः सूर्याय नमः॥",
    ishtaDevta: "भगवान सूर्यनारायण एवं श्री राम",
    luckyColors: "केसरिया, स्वर्णिम एवं लाल",
    luckyNumbers: "1, 5",
    luckyDirection: "पूर्व दिशा"
  },
  "कन्या": {
    lagnaName: "कन्या (नाम राशि आधारित)",
    lagnaLord: "बुध (Mercury)",
    activeDasha: "बुध",
    activeAntardasha: "गुरु",
    dashaPeriod: "2023 — 2040 (नाम गोचर)",
    ratnaName: "पन्ना (Emerald)",
    uparatnaName: "ओनेक्स / मरगज",
    ratnaMetalAndFinger: "चांदी या सोने में कनिष्ठिका",
    rudraksha: "४ मुखी रुद्राक्ष",
    beejMantra: "ॐ ब्रां ब्रीं ब्रौं सः बुधाय नमः॥",
    ishtaDevta: "श्री विष्णु जी एवं गणेश जी",
    luckyColors: "गहरा हरा एवं आकाशी",
    luckyNumbers: "5, 6",
    luckyDirection: "उत्तर दिशा"
  },
  "तुला": {
    lagnaName: "तुला (नाम राशि आधारित)",
    lagnaLord: "शुक्र (Venus)",
    activeDasha: "शुक्र",
    activeAntardasha: "शनि",
    dashaPeriod: "2022 — 2042 (नाम गोचर)",
    ratnaName: "अमेरिकन डायमंड / ओपल",
    uparatnaName: "जरकन",
    ratnaMetalAndFinger: "चांदी/प्लैटिनम में मध्यमा",
    rudraksha: "६ मुखी रुद्राक्ष",
    beejMantra: "ॐ द्रां द्रीं द्रौं सः शुक्राय नमः॥",
    ishtaDevta: "माँ सन्तोषी व महालक्ष्मी",
    luckyColors: "शाही सफेद एवं हल्का नीला",
    luckyNumbers: "6, 7",
    luckyDirection: "पश्चिम, आग्नेय एवं उत्तर"
  },
  "वृश्चिक": {
    lagnaName: "वृश्चिक (नाम राशि आधारित)",
    lagnaLord: "मंगल (Mars)",
    activeDasha: "मंगल",
    activeAntardasha: "चन्द्रमा",
    dashaPeriod: "2024 — 2031 (नाम गोचर)",
    ratnaName: "सिंदूरी मूंगा (Coral)",
    uparatnaName: "लाल हकीक",
    ratnaMetalAndFinger: "तांबे में अनामिका",
    rudraksha: "३ मुखी रुद्राक्ष",
    beejMantra: "ॐ क्रां क्रीं क्रौं सः भौमाय नमः॥",
    ishtaDevta: "श्री हनुमान जी व काल भैरव",
    luckyColors: "गहरा लाल व मेहरून",
    luckyNumbers: "8, 9",
    luckyDirection: "दक्षिण दिशा"
  },
  "धनु": {
    lagnaName: "धनु (नाम राशि आधारित)",
    lagnaLord: "देवगुरु बृहस्पति (Jupiter)",
    activeDasha: "बृहस्पति",
    activeAntardasha: "सूर्य",
    dashaPeriod: "2020 — 2036 (नाम गोचर)",
    ratnaName: "पीला पुखराज (Yellow Sapphire)",
    uparatnaName: "सुनहला (Citrine)",
    ratnaMetalAndFinger: "सोने / पीतल में तर्जनी उंगली में",
    rudraksha: "५ मुखी रुद्राक्ष",
    beejMantra: "ॐ ग्रां ग्रीं ग्रौं सः गुरवे नमः॥",
    ishtaDevta: "भगवान श्री हरि विष्णु",
    luckyColors: "पीताम्बरी पीला व नारंगी",
    luckyNumbers: "3, 9",
    luckyDirection: "उत्तर-पूर्व (ईशान)"
  },
  "मकर": {
    lagnaName: "मकर (नाम राशि आधारित)",
    lagnaLord: "शनि देव (Saturn)",
    activeDasha: "शनि",
    activeAntardasha: "बुध",
    dashaPeriod: "2021 — 2040 (नाम गोचर)",
    ratnaName: "नीलम (Blue Sapphire)",
    uparatnaName: "कटैला (Amethyst)",
    ratnaMetalAndFinger: "पंचधातु/लोहे में मध्यमा",
    rudraksha: "७ मुखी रुद्राक्ष",
    beejMantra: "ॐ प्रां प्रीं प्रौं सः शनैश्चराय नमः॥",
    ishtaDevta: "शनि देव व हनुमान जी",
    luckyColors: "नीला, काला व धूसर",
    luckyNumbers: "8, 6",
    luckyDirection: "पश्चिम दिशा"
  },
  "कुंभ": {
    lagnaName: "कुंभ (नाम राशि आधारित)",
    lagnaLord: "शनि देव (Saturn)",
    activeDasha: "शनि",
    activeAntardasha: "शुक्र",
    dashaPeriod: "2021 — 2040 (नाम गोचर)",
    ratnaName: "नीलम / लाजवर्त (Lapis Lazuli)",
    uparatnaName: "जामुनिया / कटैला",
    ratnaMetalAndFinger: "अष्टधातु में मध्यमा उंगली में",
    rudraksha: "७ मुखी रुद्राक्ष",
    beejMantra: "ॐ प्रां प्रीं प्रौं सः शनैश्चराय नमः॥",
    ishtaDevta: "भगवान शिव व शनि महाराज",
    luckyColors: "रॉयल ब्लू व आसमानी",
    luckyNumbers: "8, 5",
    luckyDirection: "पश्चिम दिशा"
  },
  "कुम्भ": {
    lagnaName: "कुम्भ (नाम राशि आधारित)",
    lagnaLord: "शनि देव (Saturn)",
    activeDasha: "शनि",
    activeAntardasha: "शुक्र",
    dashaPeriod: "2021 — 2040 (नाम गोचर)",
    ratnaName: "नीलम / लाजवर्त (Lapis Lazuli)",
    uparatnaName: "जामुनिया / कटैला",
    ratnaMetalAndFinger: "अष्टधातु में मध्यमा उंगली में",
    rudraksha: "७ मुखी रुद्राक्ष",
    beejMantra: "ॐ प्रां प्रीं प्रौं सः शनैश्चराय नमः॥",
    ishtaDevta: "भगवान शिव व शनि महाराज",
    luckyColors: "रॉयल ब्लू व आसमानी",
    luckyNumbers: "8, 5",
    luckyDirection: "पश्चिम दिशा"
  },
  "मीन": {
    lagnaName: "मीन (नाम राशि आधारित)",
    lagnaLord: "देवगुरु बृहस्पति (Jupiter)",
    activeDasha: "बृहस्पति",
    activeAntardasha: "मंगल",
    dashaPeriod: "2020 — 2036 (नाम गोचर)",
    ratnaName: "पुखराज (Yellow Sapphire)",
    uparatnaName: "सुनहला",
    ratnaMetalAndFinger: "सोने में तर्जनी उंगली में",
    rudraksha: "५ मुखी रुद्राक्ष",
    beejMantra: "ॐ ग्रां ग्रीं ग्रौं सः गुरवे नमः॥",
    ishtaDevta: "भगवान लक्ष्मी-नारायण",
    luckyColors: "हल्का पीला व केसरिया",
    luckyNumbers: "3, 7",
    luckyDirection: "उत्तर-पूर्व (ईशान)"
  }
};
const CAREER_HOUSE_DESCRIPTIONS = {
  1: {
    hi: "लग्न व जन्म राशि पर गोचर होने से आपके स्वावलंबन और त्वरित निर्णय क्षमता में विशेष निखार आएगा। स्वतंत्र रूप से उठाए गए व्यावसायिक कदम प्रतिष्ठा दिलाएंगे।",
    en: "Transit in 1st house sharpens leadership and decisive action, establishing strong authority in business and career."
  },
  2: {
    hi: "द्वितीय धन भाव में संचरण से संवाद व वाणी कौशल द्वारा महत्वपूर्ण व्यावसायिक अनुबंध व शासकीय वार्ताएं अनुकूल सिद्ध होंगी।",
    en: "2nd house transit empowers your communication and negotiation, closing profitable professional agreements."
  },
  3: {
    hi: "तृतीय पराक्रम भाव में गोचर से पुरुषार्थ व उद्यम चरम पर रहेगा। नई तकनीकी परियोजनाओं, विपणन एवं व्यावसायिक यात्राओं से उच्च सफलता मिलेगी।",
    en: "3rd house transit activates bold initiatives, short business travels, and enterprise success."
  },
  4: {
    hi: "चतुर्थ केंद्र भाव में ग्रह प्रभाव से कार्यस्थल में स्थिरता, प्रबंधन कौशल एवं स्थायी परियोजनाओं में पद-सम्मान की वृद्धि होगी।",
    en: "4th house transit reinforces workplace stability, organizational leadership, and core team confidence."
  },
  5: {
    hi: "पंचम त्रिकोण गोचर से बौद्धिक प्रखरता, नवाचार एवं रणनीतिक निर्णयों में सफलता मिलेगी। वरिष्ठ अधिकारी आपकी दूरदृष्टि की सराहना करेंगे।",
    en: "5th house trine transit stimulates strategic brilliance, innovative thinking, and high praise from superiors."
  },
  6: {
    hi: "षष्ठ उपचय भाव में गोचर प्रतिस्पर्धियों व व्यावसायिक विरोधियों पर पूर्ण विजय दिलाएगा। लंबित पदोन्नति व शासकीय कार्य गति पकड़ेंगे।",
    en: "6th house transit grants decisive edge over competitors, speeding up promotions and administrative approvals."
  },
  7: {
    hi: "सप्तम केंद्र में संचरण से साझेदारियों, जनसंपर्क एवं दैनिक व्यापारिक गतिविधियों में उल्लेखनीय उछाल आएगा। नए व्यावसायिक अनुबंध होंगे।",
    en: "7th house transit drives expansion in joint ventures, trade alliances, and client partnerships."
  },
  8: {
    hi: "अष्टम भाव में गोचर से कार्यक्षेत्र में गोपनीयता व धैर्य बनाए रखें। शोध, डेटा विश्लेषण, ऑडिट व दीर्घकालीन नियोजन में उत्कृष्ट परिणाम मिलेंगे।",
    en: "8th house transit advises measured patience and confidentiality; in-depth research and long-term planning bear fruit."
  },
  9: {
    hi: "नवम भाग्य त्रिकोण में गोचर से भाग्य का भरपूर सहयोग मिलेगा। गुरुजनों व मार्गदर्शकों की कृपा से करियर की पुरानी बाधाएं स्वतः दूर होंगी।",
    en: "9th house fortune transit brings powerful luck and mentor support, dissolving past professional hurdles."
  },
  10: {
    hi: "दशम कर्म केंद्र में प्रबल गोचर से कार्यक्षेत्र में सर्वोच्च यश, अधिकार वृद्धि व पदोन्नति के श्रेष्ठ योग हैं। व्यापार विस्तार में सफलता मिलेगी।",
    en: "10th house karma transit creates peak opportunities for career advancement, executive authority, and business growth."
  },
  11: {
    hi: "एकादश लाभ भाव में गोचर से आपके सभी कर्म प्रयासों का श्रेष्ठ फल प्राप्त होगा। उच्चाधिकारियों व उद्योग सहयोगियों से पूर्ण समर्थन मिलेगा।",
    en: "11th house gains transit rewards past hard work with high achievements and recognition from leadership."
  },
  12: {
    hi: "द्वादश भाव में गोचर से दूरस्थ संपर्कों, बहुराष्ट्रीय उपक्रमों व विदेशी व्यापारिक योजनाओं में अनुकूल अवसर निर्मित होंगे।",
    en: "12th house transit opens favorable avenues through distant connections, overseas trade, and global collaborations."
  }
};
const FINANCE_HOUSE_DESCRIPTIONS = {
  1: {
    hi: "आत्मविश्वास व विवेकपूर्ण आर्थिक निर्णयों से स्वयं-अर्जित संपत्ति व साख में निरंतर वृद्धि होगी।",
    en: "Confident and prudent decisions enhance personal creditworthiness and steady wealth accumulation."
  },
  2: {
    hi: "द्वितीय धन भाव सक्रिय रहने से संचित कोष (Savings), बैंक बैलेंस, स्वर्ण-आभूषण व पैतृक संपत्ति में उत्तम वृद्धि का योग है।",
    en: "Active 2nd house transit enriches family savings, gold/assets, and legacy property growth."
  },
  3: {
    hi: "स्वयं के पुरुषार्थ, कमीशन, परामर्श व डिजिटल साधनों से धनागमन के नवीन मार्ग खुलेंगे।",
    en: "Self-initiative, commissions, and digital enterprise open fresh channels of reliable monetary inflow."
  },
  4: {
    hi: "अचल संपत्ति, भूमि, गृह-सज्जा व वाहन संबंधित लेन-देन में श्रेष्ठ आर्थिक लाभ व स्थायी संपत्ति का निर्माण होगा।",
    en: "Investments in real estate, vehicles, and long-term home assets create solid family prosperity."
  },
  5: {
    hi: "पंचम लक्ष्मी-त्रिकोण के प्रभाव से पूर्व संचित बौद्धिक निवेश, परामर्श व कौशल से आकस्मिक अर्थ-लाभ होगा।",
    en: "5th trine transit rewards previous strategic investments, advisory expertise, and intellect with wealth gains."
  },
  6: {
    hi: "पुराने ऋणों (Loans) से मुक्ति के मार्ग प्रशस्त होंगे तथा लंबे समय से अटका हुआ धन योजनाबद्ध प्रयास से वापस आएगा।",
    en: "Favorable phase for clearing outstanding liabilities and recovering delayed dues through systematic follow-ups."
  },
  7: {
    hi: "दैनिक वाणिज्यिक कैश-फ्लो तीव्र रहेगा। व्यापारिक साझेदारी व ग्राहकों के माध्यम से प्रचुर आर्थिक लाभ होगा।",
    en: "Robust daily commercial liquidity backed by profitable deals, trusted partners, and expanding client base."
  },
  8: {
    hi: "आज सट्टा व जोखिम भरे निवेश से बचें; दीर्घकालिक सुरक्षित बचत, बीमा व भविष्य निधि में निवेश फलदायी रहेगा।",
    en: "Avoid speculative ventures today; focus on secure fixed deposits, insurance, and long-term safe instruments."
  },
  9: {
    hi: "नवम भाग्य स्थान में शुभ दृष्टि से धर्मोचित उपक्रमों व दीर्घकालीन योजनाओं द्वारा घर में स्थायी लक्ष्मी का वास होगा।",
    en: "9th house fortune alignment attracts righteous wealth, sustained family prosperity, and auspicious financial growth."
  },
  10: {
    hi: "व्यावसायिक साख बढ़ने के साथ-साथ राजकीय अनुबंधों, पदोन्नति के साथ वेतन वृद्धि एवं व्यापारिक लाभ का सुअवसर है।",
    en: "Rising occupational stature translates into lucrative contracts, pay revisions, and healthy commercial profits."
  },
  11: {
    hi: "एकादश आय भाव में संचरण से बहुमुखी धन लाभ, बकाया भुगतान की प्राप्ति व आर्थिक समृद्धि का प्रबलतम योग है।",
    en: "11th house gains transit triggers multi-stream cash inflows, bonuses, and unprecedented financial expansion."
  },
  12: {
    hi: "मांगलिक, धार्मिक व लोक-कल्याणकारी कार्यों में सद्व्यय होगा। विलासिता के अनावश्यक खर्चों पर वित्तीय संयम रखें।",
    en: "Noble expenditure on sacred family deeds and spiritual welfare; maintain mindful budget control on non-essentials."
  }
};
function buildHomeHeroModular64(c, pillar, houseIdx) {
  return buildModular64FalitHi({
    seed: {
      samvat: c.samvat ?? 2083,
      tithi: c.tithiIndex ?? 1,
      nakshatra: c.nakshatraIndex ?? resolveNakshatraIndexHi(c.todayNakshatraHindi),
      pada: c.transitMoonPada ?? 1,
      yoga: c.yogaIndex ?? resolveYogaIndexHi(c.todayYogaHindi),
      karan: c.karanIndex ?? 0,
      vaar: c.vaarIndex ?? 0,
      chandraRashi: c.chandraRashiIndex ?? 1,
      suryaRashi: c.suryaRashiIndex ?? 1,
      ayanamsaDegrees: c.ayanamsaDegrees ?? 24.235,
      vakriPlanetsCount: c.vakriPlanetsCount ?? 0,
      rashiIndex: c.rashiIndex ?? 1,
      year: c.year ?? 2026,
      dayOfYear: c.dayOfYear ?? 1,
      houseOrSignIndex: houseIdx,
      pillar
    },
    polarity: resolveModularPolarity({
      moonHouse: c.moonHouse,
      isKsheenaChandra: c.isKsheenaChandra,
      isCombustBenefic: c.isJupiterCombust,
      period: "daily"
    }),
    period: "daily",
    tithiHi: c.todayTithiHindi,
    nakshatraHi: c.todayNakshatraHindi,
    pada: c.transitMoonPada ?? 1,
    yogaHi: c.todayYogaHindi
  });
}
function buildPersonalizedLagnaRashiAnalysis(c, tr) {
  const salutation = formatUserSalutation(c.userName, c.salutationPreference);
  const festNote = c.todayFestivalHindi ? ` (${c.todayFestivalHindi})` : "";
  const ord = (n) => `${formatHindiHouseOrdinal(n)} भाव`;
  const modHi = buildHomeHeroModular64(c, "mindset", c.moonHouse);
  if (c.isNameRashiMode) {
    const hi2 = cleanHindiProse(`${salutation}, आज ${c.todayVaarHindi} (${c.todayTithiHindi}, ${c.todayNakshatraHindi}${festNote}) के संयोग में आपकी नाम राशि ${c.chandraRashi} (स्वामी: ${c.chandraRashiLord}) से चंद्रमा ${ord(c.moonHouse)} (${c.transitMoonRashi}) तथा सूर्यदेव ${ord(c.sunHouse)} (${c.transitSunRashi}) में गोचर कर रहे हैं। ${modHi}`);
    const en2 = `${salutation} (Name Rashi ${c.chandraRashi}, Lord: ${c.chandraRashiLord}): Today on ${c.todayVaarHindi} with Moon in house ${c.moonHouse} (${c.transitMoonRashi}) and Sun in house ${c.sunHouse} (${c.transitSunRashi}), your mental clarity and inner determination thrive under ${c.ishtaDevta}.`;
    return tr(hi2, en2);
  }
  const hi = cleanHindiProse(`${salutation}, आज ${c.todayVaarHindi} (${c.todayTithiHindi}, ${c.todayNakshatraHindi}, ${c.todayYogaHindi}${festNote}) के पावन संयोग में आपकी जन्म चंद्र राशि ${c.chandraRashi} से गोचर अनुसार चंद्रमा ${ord(c.moonHouse)} (${c.transitMoonRashi}) एवं सूर्यदेव ${ord(c.sunHouse)} (${c.transitSunRashi}) में, तथा जन्म लग्न ${c.lagnaName} (लग्नेश: ${c.lagnaLord}) से गोचर अनुसार चंद्रमा ${ord(c.moonFromLagna)} एवं सूर्यदेव ${ord(c.sunFromLagna)} में गतिशील हैं। ${modHi}`);
  const en = `${salutation}, on ${c.todayVaarHindi} from your Birth Moon Sign (${c.chandraRashi}), Moon transits house ${c.moonHouse} (${c.transitMoonRashi}) and Sun transits house ${c.sunHouse} (${c.transitSunRashi}); from your ${c.lagnaName} Lagna (Lord: ${c.lagnaLord}), Moon is in house ${c.moonFromLagna} and Sun in house ${c.sunFromLagna}.`;
  return tr(hi, en);
}
function buildPersonalizedDashaGocharAnalysis(c, tr) {
  const salutation = formatUserSalutation(c.userName, c.salutationPreference);
  const ord = (n) => `${formatHindiHouseOrdinal(n)} भाव`;
  const satMotion = c.transitSaturnMotionHi ? `, ${c.transitSaturnMotionHi}` : "";
  const sukheshTag = c.lagnaFourthLordHi ? ` (${c.lagnaFourthLordHi})` : "";
  const liveTransitLineHi = `लाइव नवग्रह गोचर (चंद्र राशि ${c.chandraRashi.split(" (")[0]} से): सूर्य ${c.transitSunRashi} (${ord(c.sunHouse)} / लग्न से ${ord(c.sunFromLagna)}), गुरु ${c.transitJupiterRashi} (${ord(c.jupiterHouse)}), शनि ${c.transitSaturnRashi}${satMotion} (${ord(c.saturnHouse)}), राहु ${c.transitRahuRashi} (${ord(c.rahuHouse)}), केतु ${c.transitKetuRashi} (${ord(c.ketuHouse)})${sukheshTag}।`;
  if (c.isNameRashiMode) {
    const hi2 = `${salutation}, आपकी नाम राशि ${c.chandraRashi} पर वर्तमान में ${c.activeMahadasha} महादशा • ${c.activeAntardasha} अंतर्दशा एवं ${c.activePratyantardasha} प्रत्यंतर दशा प्रभावी है। ${liveTransitLineHi}`;
    const en2 = `${salutation} (Name Rashi ${c.chandraRashi}): Active ${c.activeMahadasha}-${c.activeAntardasha}-${c.activePratyantardasha} Dasha aligns with Sun in ${c.transitSunRashi} (H${c.sunHouse}), Rahu in ${c.transitRahuRashi} (H${c.rahuHouse}), Ketu in ${c.transitKetuRashi} (H${c.ketuHouse}).`;
    return tr(hi2, en2);
  }
  const hi = `${salutation}, आपकी जन्म कुंडली में अभी ${c.activeMahadasha} महादशा • ${c.activeAntardasha} अंतर्दशा, ${c.activePratyantardasha} प्रत्यंतर दशा व ${c.activeSookshmaDasha} सूक्ष्म दशा सक्रिय है। ${liveTransitLineHi}`;
  const en = `${salutation}, your active ${c.activeMahadasha}-${c.activeAntardasha}-${c.activePratyantardasha} Dasha harmonizes with live Drik Ganita transits (Sun in ${c.transitSunRashi}: H${c.sunHouse} from Moon / H${c.sunFromLagna} from Lagna; Rahu H${c.rahuHouse}; Ketu H${c.ketuHouse}).`;
  return tr(hi, en);
}
function buildPersonalizedCareerForecast(c, tr) {
  const base = CAREER_HOUSE_DESCRIPTIONS[c.moonHouse] || CAREER_HOUSE_DESCRIPTIONS[10];
  const finBase = FINANCE_HOUSE_DESCRIPTIONS[c.moonHouse] || FINANCE_HOUSE_DESCRIPTIONS[11];
  const salutation = formatUserSalutation(c.userName, c.salutationPreference);
  const ord = (n) => `${formatHindiHouseOrdinal(n)} भाव`;
  const modHi = buildHomeHeroModular64(c, "career", c.moonHouse);
  if (c.isNameRashiMode) {
    const hi2 = cleanHindiProse(`${salutation}, आज ${c.todayVaarHindi} (${c.todayNakshatraHindi}) को नाम चंद्र राशि ${c.chandraRashi} से गोचर अनुसार चंद्रमा ${ord(c.moonHouse)} व बृहस्पति ${ord(c.jupiterHouse)} में हैं। ${base.hi} ${modHi}`);
    const en2 = `${salutation} (Name Rashi ${c.chandraRashi}): Moon transits house ${c.moonHouse}, Jupiter in house ${c.jupiterHouse}. ${base.en}`;
    return tr(hi2, en2);
  }
  const hi = cleanHindiProse(`${salutation}, आपकी जन्म चंद्र राशि ${c.chandraRashi} से गोचर अनुसार चंद्रमा ${ord(c.moonHouse)} व लग्न ${c.lagnaName} से ${ord(c.moonFromLagna)} (अमात्यकारक: ${c.amatyakaraka}) में सक्रिय हैं। ${base.hi} ${finBase.hi} ${modHi}`);
  const en = `${salutation}, from your ${c.chandraRashi} Moon Sign (house ${c.moonHouse}) and ${c.lagnaName} Lagna (house ${c.moonFromLagna}, Amatyakaraka ${c.amatyakaraka}): ${base.en} ${finBase.en}`;
  return tr(hi, en);
}
function buildPersonalizedFinanceForecast(c, tr) {
  const base = FINANCE_HOUSE_DESCRIPTIONS[c.moonHouse] || FINANCE_HOUSE_DESCRIPTIONS[11];
  const salutation = formatUserSalutation(c.userName, c.salutationPreference);
  const ord = (n) => `${formatHindiHouseOrdinal(n)} भाव`;
  const modHi = buildHomeHeroModular64(c, "finance", c.jupiterHouse);
  if (c.isNameRashiMode) {
    const hi2 = cleanHindiProse(`${salutation}, आपकी नाम राशि ${c.chandraRashi} से गोचर अनुसार धनकारक बृहस्पति ${ord(c.jupiterHouse)} (${c.transitJupiterRashi}) एवं चंद्रमा ${ord(c.moonHouse)} में विराजमान हैं। ${base.hi} ${modHi}`);
    const en2 = `${salutation}, Name Rashi ${c.chandraRashi} wealth transit: Jupiter is in house ${c.jupiterHouse} and Moon in house ${c.moonHouse}. ${base.en}`;
    return tr(hi2, en2);
  }
  const hi = cleanHindiProse(`${salutation}, आपकी जन्म चंद्र राशि से गोचर अनुसार धनकारक बृहस्पति ${ord(c.jupiterHouse)} (${c.transitJupiterRashi}, लग्न से ${ord(c.jupiterFromLagna)}) एवं चंद्रमा ${ord(c.moonHouse)} में संचरण कर रहे हैं। ${base.hi} ${modHi}`);
  const en = `${salutation}, financial transit analysis (from Moon Sign): Jupiter transits house ${c.jupiterHouse} (${c.transitJupiterRashi}, house ${c.jupiterFromLagna} from ${c.lagnaName} Lagna) while Moon occupies house ${c.moonHouse}. ${base.en}`;
  return tr(hi, en);
}
function buildPersonalizedHealthForecast(c, tr) {
  let nadiGuidanceHi = "प्रातः प्राणायाम (अनुलोम-विलोम), तिल तेल मालिश एवं गुनगुने जल का सेवन वात संतुलन हेतु उत्तम रहेगा।";
  let nadiGuidanceEn = "Morning Anulom-Vilom Pranayama and warm hydration balance bodily elements.";
  if (c.nadi.includes("मध्य") || c.nadi.toLowerCase().includes("madhya")) {
    nadiGuidanceHi = "शीतली व ओंकार प्राणायाम, चंदन तिलक, नारियल जल एवं पित्त-शामक सात्त्विक आहार उत्तम रहेगा।";
    nadiGuidanceEn = "Sheetali Pranayama, sandalwood tilak, and Pitta-pacifying diet keep mental clarity peak.";
  } else if (c.nadi.includes("अन्त्य") || c.nadi.toLowerCase().includes("antya")) {
    nadiGuidanceHi = "कपालभाति, तांबे के पात्र का जल, त्रिफला चूर्ण एवं सक्रिय दिनचर्या कफ संतुलन व प्राण-ऊर्जा उच्च रखेगी।";
    nadiGuidanceEn = "Kapalbhati, copper-charged water, and active daily routine keep vitality and immunity high.";
  }
  const salutation = formatUserSalutation(c.userName, c.salutationPreference);
  const ord = (n) => `${formatHindiHouseOrdinal(n)} भाव`;
  const modHi = buildHomeHeroModular64(c, "health", c.moonHouse);
  if (c.isNameRashiMode) {
    const hi2 = cleanHindiProse(`${salutation}, आज ${c.todayVaarHindi} को नाम राशि ${c.chandraRashi} से गोचर अनुसार चंद्रमा ${ord(c.moonHouse)} तथा सूर्यदेव ${ord(c.sunHouse)} (${c.transitSunRashi}) में हैं। ${modHi} ${nadiGuidanceHi}`);
    const en2 = `${salutation} (Name Rashi ${c.chandraRashi}): Moon transits house ${c.moonHouse} and Sun in house ${c.sunHouse} (${c.transitSunRashi}). ${nadiGuidanceEn}`;
    return tr(hi2, en2);
  }
  const hi = cleanHindiProse(`${salutation}, आज ${c.todayVaarHindi} पर आपके जन्म लग्न ${c.lagnaName} एवं जन्म नाड़ी ${c.nadi} के अनुसार आरोग्य फल: चंद्र राशि से चंद्रमा ${ord(c.moonHouse)} व सूर्यदेव ${c.transitSunRashi} (${ord(c.sunHouse)} / लग्न से ${ord(c.sunFromLagna)}) में हैं। ${modHi} ${nadiGuidanceHi}`);
  const en = `${salutation}, health analysis for ${c.lagnaName} Lagna (${c.nadi} Nadi): From Moon Sign, Moon is in house ${c.moonHouse} and Sun is in ${c.transitSunRashi} (house ${c.sunHouse} from Moon / house ${c.sunFromLagna} from Lagna). ${nadiGuidanceEn}`;
  return tr(hi, en);
}
function buildPersonalizedFamilyForecast(c, tr) {
  let ganaGuidanceHi = "देव गण के सात्त्विक स्वभाव के कारण कुटुम्ब में शांति, सौहार्द व बड़ों के प्रति आदरभाव बना रहेगा।";
  let ganaGuidanceEn = "Deva Gana disposition fosters peace, mutual respect, and elder blessings.";
  if (c.gana.includes("मनुष्य") || c.gana.toLowerCase().includes("manushya")) {
    ganaGuidanceHi = "मनुष्य गण के व्यावहारिक एवं श्रमशील स्वभाव के कारण पारिवारिक उत्तरदायित्वों व गृहस्थ सुख का उत्तम समन्वय रहेगा।";
    ganaGuidanceEn = "Manushya Gana nature promotes practical harmony and domestic coordination.";
  } else if (c.gana.includes("राक्षस") || c.gana.toLowerCase().includes("rakshasa")) {
    ganaGuidanceHi = "राक्षस गण के साहसी स्वभाव के कारण परिजनों से वार्ता में विनम्रता व मधुर वाणी का प्रयोग संबंध सुदृढ़ रखेगा।";
    ganaGuidanceEn = "Courageous temperament; polite speech fosters warm relationship bonding.";
  }
  const salutation = formatUserSalutation(c.userName, c.salutationPreference);
  const cleanGanaLabel = `${(c.gana || "देव").replace(/\s*गण$/u, "").trim()} गण`;
  const modHi = buildHomeHeroModular64(c, "family", c.jupiterHouse);
  if (c.isNameRashiMode) {
    const hi2 = cleanHindiProse(`${salutation}, आज ${c.todayVaarHindi} (${c.todayTithiHindi}) पर नाम राशि ${c.chandraRashi} के ${cleanGanaLabel} अनुसार पारिवारिक विचार: ${ganaGuidanceHi} ${modHi}`);
    const en2 = `${salutation} (Name Rashi ${c.chandraRashi}): On ${c.todayVaarHindi}, Devguru Jupiter transits house ${c.jupiterHouse} supporting domestic happiness. ${ganaGuidanceEn}`;
    return tr(hi2, en2);
  }
  const hi = cleanHindiProse(`${salutation}, आज ${c.todayVaarHindi} (${c.todayTithiHindi}) पर आपके जन्म नक्षत्र के ${cleanGanaLabel} व सक्रिय ${c.activeSookshmaDasha} सूक्ष्म दशा के अनुसार: ${ganaGuidanceHi} ${modHi}`);
  const en = `${salutation}, family harmony insight on ${c.todayVaarHindi} for ${c.gana} Gana: Devguru Jupiter transits house ${c.jupiterHouse} supporting domestic peace. ${ganaGuidanceEn}`;
  return tr(hi, en);
}
function buildPersonalizedRemedy(c, dailyVaarRemedy, tr) {
  const salutation = formatUserSalutation(c.userName, c.salutationPreference);
  const cleanMetalFinger = String(c.ratnaMetalAndFinger || "").replace(/\s*\([^)]*\)/g, "").trim();
  if (c.isNameRashiMode) {
    const hi2 = cleanHindiProse(`${salutation}, आज ${c.todayVaarHindi} का विशेष उपाय: ${dailyVaarRemedy} साथ ही अपनी नाम राशि ${c.chandraRashi} के स्वामी हेतु "${c.beejMantra}" का जप करें, ${c.ratnaName} (${cleanMetalFinger}) या ${c.rudraksha} धारण करें। शुभ रंग: ${c.luckyColors} • शुभ दिशा: ${c.luckyDirection}।`);
    const en2 = `${salutation} (Name Rashi ${c.chandraRashi}): Today's ${c.todayVaarHindi} remedy & Mantra "${c.beejMantra}" (${c.ratnaName} / ${c.rudraksha}). Auspicious colors: ${c.luckyColors}.`;
    return tr(hi2, en2);
  }
  const hi = cleanHindiProse(`${salutation}, आज ${c.todayVaarHindi} (${c.todayNakshatraHindi}) के विशेष उपाय: ${dailyVaarRemedy} साथ ही अपने जन्म लग्नेश ${c.lagnaLord} व सक्रिय ${c.activeMahadasha}-${c.activeAntardasha} दशा की शुभता हेतु इष्टदेव (${c.ishtaDevta}) की पूजा व "${c.beejMantra}" का जप करें। (रत्न: ${c.ratnaName} • धारण विधि: ${cleanMetalFinger} • रुद्राक्ष: ${c.rudraksha} • शुभ रंग: ${c.luckyColors} • शुभ दिशा: ${c.luckyDirection})।`);
  const en = `${salutation}, today's ${c.todayVaarHindi} Vedic remedies to empower Lagna Lord ${c.lagnaLord} and align with ${c.activeMahadasha}-${c.activeAntardasha} Dasha: Worship Ishta Devta (${c.ishtaDevta}), chant "${c.beejMantra}", wear ${c.ratnaName} & ${c.rudraksha}. Auspicious colors: ${c.luckyColors}.`;
  return tr(hi, en);
}
const PersonalizedHomeHero = ({
  currentUser,
  isLoggedIn,
  onOpenLoginModal,
  onSwitchUserAccount,
  onOpenJanamKundali,
  onOpenRashifal
}) => {
  const { tr } = useLanguage();
  const isUserAuthenticated = Boolean(isLoggedIn || currentUser && currentUser.phone);
  const [activeProfile, setActiveProfileState] = reactExports.useState(null);
  const [vaultProfiles, setVaultProfiles] = reactExports.useState([]);
  const [calcViewingMode, setCalcViewingMode] = reactExports.useState(getCalculationViewingMode);
  const [activeSpeechId, setActiveSpeechId] = reactExports.useState(() => vedicAudio.getActiveSpeechId());
  const [activePanchangLoc, setActivePanchangLoc] = reactExports.useState(() => getActivePanchangLocation());
  const [todayPanchang, setTodayPanchang] = reactExports.useState(() => getInstantTodayPanchangSnapshot(/* @__PURE__ */ new Date()));
  const [istParts, setIstParts] = reactExports.useState(() => getISTCalendarParts(/* @__PURE__ */ new Date()));
  reactExports.useEffect(() => {
    let cancelled = false;
    const hydrate = () => {
      void getTodayPanchangDeferred(/* @__PURE__ */ new Date()).then((full) => {
        if (!cancelled) setTodayPanchang(full);
      });
    };
    const rIC = typeof window !== "undefined" && typeof window.requestIdleCallback === "function" ? window.requestIdleCallback : null;
    const cIC = typeof window !== "undefined" && typeof window.cancelIdleCallback === "function" ? window.cancelIdleCallback : null;
    let idleId = null;
    let timerId = null;
    if (rIC) {
      idleId = rIC(hydrate, { timeout: 200 });
    } else {
      timerId = window.setTimeout(hydrate, 50);
    }
    return () => {
      cancelled = true;
      if (idleId !== null && cIC) cIC(idleId);
      if (timerId !== null) window.clearTimeout(timerId);
    };
  }, []);
  reactExports.useEffect(() => {
    const handleModeChange = (e) => {
      const mode = e.detail || getCalculationViewingMode();
      setCalcViewingMode(mode);
    };
    window.addEventListener("display_preference_changed", handleModeChange);
    return () => {
      window.removeEventListener("display_preference_changed", handleModeChange);
    };
  }, []);
  const lastDerivedCacheRef = React.useRef(null);
  const loadData = React.useCallback(() => {
    const all = getFamilyVaultProfiles(currentUser?.phone);
    setVaultProfiles(all);
    if (currentUser && currentUser.name) {
      const dob = (currentUser.dob || "").trim();
      const birthTime = (currentUser.birthTime || "").trim();
      const birthPlace = (currentUser.birthPlace || "").trim() || getActivePanchangLocation().hindiName;
      const cacheKey = `${currentUser.phone || ""}|${currentUser.name}|${dob}|${birthTime}|${birthPlace}|${currentUser.rashi || ""}|${currentUser.lagna || ""}|${currentUser.nakshatra || ""}`;
      if (lastDerivedCacheRef.current && lastDerivedCacheRef.current.key === cacheKey) {
        setActiveProfileState(lastDerivedCacheRef.current.profile);
        return;
      }
      const vedic = deriveVedicDetailsForProfile(currentUser.name, dob, birthTime, birthPlace);
      const syncedProfile = {
        id: currentUser.phone || "mera-khata-user",
        name: currentUser.name,
        relation: "self",
        gender: "male",
        dob,
        birthTime,
        birthPlace,
        rashi: currentUser.rashi || vedic.rashi || "कुंभ (Aquarius)",
        rashiLord: vedic.rashiLord || "शनि (Saturn)",
        nakshatra: currentUser.nakshatra || vedic.nakshatra || "शतभिषा (Shatabhisha)",
        nakshatraPada: vedic.nakshatraPada || 1,
        lagna: currentUser.lagna || vedic.lagna || "वृषभ (Taurus)",
        isPrimary: true,
        createdAt: "2026-01-01T00:00:00.000Z",
        updatedAt: "2026-01-01T00:00:00.000Z"
      };
      lastDerivedCacheRef.current = { key: cacheKey, profile: syncedProfile };
      setActiveProfileState(syncedProfile);
      return;
    }
    const current = getActiveProfile();
    if (current && current.name && current.id !== "guest-default") {
      setActiveProfileState(current);
      return;
    }
    if (all.length > 0) {
      const primary = all.find((p) => p.isPrimary) || all[0];
      setActiveProfileState(primary);
      return;
    }
    setActiveProfileState(null);
  }, [
    currentUser?.phone,
    currentUser?.name,
    currentUser?.dob,
    currentUser?.birthTime,
    currentUser?.birthPlace,
    currentUser?.rashi,
    currentUser?.lagna,
    currentUser?.nakshatra
  ]);
  reactExports.useEffect(() => {
    loadData();
  }, [loadData, isLoggedIn]);
  reactExports.useEffect(() => {
    const unsubSpeech = vedicAudio.subscribeSpeech((id) => setActiveSpeechId(id));
    const handleProfileOrVaultUpdate = () => {
      loadData();
    };
    const handleLocationChanged = () => {
      setActivePanchangLoc(getActivePanchangLocation());
      loadData();
      setTodayPanchang(getTodayPanchang(/* @__PURE__ */ new Date()));
    };
    const handleMidnightEvent = () => {
      const current = /* @__PURE__ */ new Date();
      setTodayPanchang(getTodayPanchang(current));
      setIstParts(getISTCalendarParts(current));
    };
    window.addEventListener("panditji_vault_updated", handleProfileOrVaultUpdate);
    window.addEventListener("panditji_active_profile_updated", handleProfileOrVaultUpdate);
    window.addEventListener("panditji_panchang_location_changed", handleLocationChanged);
    window.addEventListener("panditji_midnight_refresh", handleMidnightEvent);
    let midnightTimer = null;
    const tickClock = () => {
      const current = /* @__PURE__ */ new Date();
      const nextParts = getISTCalendarParts(current);
      setIstParts((prev) => {
        if (prev.dateKey !== nextParts.dateKey) {
          setTodayPanchang(getTodayPanchang(current));
          return nextParts;
        }
        if (prev.minutes !== nextParts.minutes) {
          return nextParts;
        }
        return prev;
      });
    };
    const scheduleMidnight = () => {
      if (midnightTimer !== null) window.clearTimeout(midnightTimer);
      const msUntilMidnight = getMsUntilNextISTMidnight(/* @__PURE__ */ new Date());
      midnightTimer = window.setTimeout(() => {
        const current = /* @__PURE__ */ new Date();
        setTodayPanchang(getTodayPanchang(current));
        setIstParts(getISTCalendarParts(current));
        scheduleMidnight();
      }, msUntilMidnight);
    };
    scheduleMidnight();
    const intervalId = window.setInterval(tickClock, 15e3);
    return () => {
      unsubSpeech();
      window.removeEventListener("panditji_vault_updated", handleProfileOrVaultUpdate);
      window.removeEventListener("panditji_active_profile_updated", handleProfileOrVaultUpdate);
      window.removeEventListener("panditji_panchang_location_changed", handleLocationChanged);
      window.removeEventListener("panditji_midnight_refresh", handleMidnightEvent);
      window.clearInterval(intervalId);
      if (midnightTimer !== null) window.clearTimeout(midnightTimer);
    };
  }, [loadData]);
  const astroData = reactExports.useMemo(() => {
    const prof = currentUser ? {
      name: (currentUser.name || "यजमान").trim(),
      dob: (currentUser.dob || "").trim(),
      birthTime: (currentUser.birthTime || "").trim(),
      birthPlace: (currentUser.birthPlace || "").trim()
    } : activeProfile ? {
      name: (activeProfile.name || "यजमान").trim(),
      dob: (activeProfile.dob || "").trim(),
      birthTime: (activeProfile.birthTime || "").trim(),
      birthPlace: (activeProfile.birthPlace || "").trim()
    } : {
      name: "यजमान",
      dob: "",
      birthTime: "",
      birthPlace: ""
    };
    const hasValidDob = /^\d{4}-\d{2}-\d{2}$/.test(prof.dob);
    const isNameRashiMode = calcViewingMode === "name_rashi" || !hasValidDob;
    const panchangLoc = activePanchangLoc || getActivePanchangLocation();
    const panchangPlaceDisplay = panchangLoc.hindiName || "रुद्रपुर, उत्तराखण्ड";
    const cityShort = panchangPlaceDisplay.split(",")[0].trim() || "रुद्रपुर";
    const cityEnglishShort = panchangLoc.name.split(",")[0].trim() || cityShort;
    const cityCoordsLabel = `${panchangLoc.lat.toFixed(2)}° N, ${panchangLoc.lon.toFixed(2)}° E`;
    const birthPlaceLoc = resolveCityCoordinates(prof.birthPlace || panchangPlaceDisplay);
    const resolvedBirthPlaceDisplay = prof.birthPlace ? !birthPlaceLoc.id.startsWith("custom_") ? birthPlaceLoc.hindiName : prof.birthPlace : panchangPlaceDisplay;
    const kundali = generateSampurnKundali(
      prof.name || "यजमान",
      hasValidDob ? prof.dob : istParts.dateKey,
      hasValidDob ? prof.birthTime || "12:00" : "12:00",
      resolvedBirthPlaceDisplay
    );
    const drikPanchang = buildSingleDayPanchang(
      istParts.year,
      istParts.month,
      istParts.day,
      true,
      /* @__PURE__ */ new Date(),
      panchangLoc
    );
    const gocharKundali = generateSampurnKundali(
      `${cityShort} दैनिक गोचर`,
      istParts.dateKey,
      `${String(istParts.hours).padStart(2, "0")}:${String(istParts.minutes).padStart(2, "0")}`,
      panchangPlaceDisplay
    );
    const getGocharPlanet = (id) => gocharKundali.planets.find((p) => p.id === id);
    const transitMoon = getGocharPlanet("moon");
    const transitSun = getGocharPlanet("sun");
    const transitJupiter = getGocharPlanet("jupiter");
    const transitSaturn = getGocharPlanet("saturn");
    const transitMars = getGocharPlanet("mars");
    const transitRahu = getGocharPlanet("rahu");
    const transitKetu = getGocharPlanet("ketu");
    let moonRashiNum;
    let lagnaRashiNum;
    let resolvedRashiName;
    let resolvedRashiLord;
    let resolvedNakshatra;
    let resolvedLagnaName;
    let resolvedLagnaLord;
    let activeMahadasha;
    let activeAntardasha;
    let activePratyantardasha;
    let activeSookshmaDasha;
    let dashaPeriod;
    let ratnaName;
    let uparatnaName;
    let ratnaMetalAndFinger;
    let rudraksha;
    let beejMantra;
    let ishtaDevta;
    let luckyColors;
    let luckyNumbers;
    let luckyDirection;
    if (isNameRashiMode) {
      const nameAstro = getVedicDetailsFromName(prof.name);
      const RASHI_NUM_MAP = {
        "मेष": 1,
        "वृषभ": 2,
        "मिथुन": 3,
        "कर्क": 4,
        "सिंह": 5,
        "कन्या": 6,
        "तुला": 7,
        "वृश्चिक": 8,
        "धनु": 9,
        "मकर": 10,
        "कुंभ": 11,
        "कुम्भ": 11,
        "मीन": 12
      };
      const cleanRashiShort = nameAstro.rashi ? nameAstro.rashi.split(" ")[0] : "कुंभ";
      const nameRashiInfo = NAME_RASHI_ASTRO_MAP[cleanRashiShort] || NAME_RASHI_ASTRO_MAP["कुंभ"];
      moonRashiNum = RASHI_NUM_MAP[cleanRashiShort] || 11;
      lagnaRashiNum = moonRashiNum;
      resolvedRashiName = nameAstro.rashi || "कुंभ (Aquarius)";
      resolvedRashiLord = nameAstro.rashiLord || "शनि (Saturn)";
      resolvedNakshatra = nameAstro.nakshatra || "शतभिषा (Shatabhisha)";
      resolvedLagnaName = nameRashiInfo.lagnaName;
      resolvedLagnaLord = nameRashiInfo.lagnaLord;
      const VIMSHOTTARI_SEQ = ["केतु", "शुक्र", "सूर्य", "चंद्र", "मंगल", "राहु", "बृहस्पति", "शनि", "बुध"];
      const VIMSHOTTARI_YEARS = [7, 20, 6, 10, 7, 18, 16, 19, 17];
      const rashiLordClean = resolvedRashiLord.split(" ")[0];
      const baseDashaIdx = Math.max(
        0,
        VIMSHOTTARI_SEQ.findIndex((d) => rashiLordClean.includes(d))
      );
      const activeMahaIdx = (baseDashaIdx + istParts.year % 3) % 9;
      const activeAntarIdx = (activeMahaIdx + istParts.month % 9) % 9;
      const activePratyantarIdx = (activeAntarIdx + Math.floor((istParts.day - 1) / 4)) % 9;
      const activeSookshmaIdx = (activePratyantarIdx + istParts.weekdayIndex) % 9;
      const spanYears = VIMSHOTTARI_YEARS[activeMahaIdx];
      const startYr = istParts.year - istParts.year % Math.max(2, Math.floor(spanYears / 3));
      const endYr = startYr + spanYears;
      activeMahadasha = VIMSHOTTARI_SEQ[activeMahaIdx];
      activeAntardasha = VIMSHOTTARI_SEQ[activeAntarIdx];
      activePratyantardasha = VIMSHOTTARI_SEQ[activePratyantarIdx];
      activeSookshmaDasha = VIMSHOTTARI_SEQ[activeSookshmaIdx];
      dashaPeriod = `${startYr} — ${endYr} (नाम गोचर दशा)`;
      ratnaName = nameRashiInfo.ratnaName;
      uparatnaName = nameRashiInfo.uparatnaName;
      ratnaMetalAndFinger = nameRashiInfo.ratnaMetalAndFinger;
      rudraksha = nameRashiInfo.rudraksha;
      beejMantra = nameRashiInfo.beejMantra;
      ishtaDevta = nameRashiInfo.ishtaDevta;
      luckyColors = nameRashiInfo.luckyColors;
      luckyNumbers = nameRashiInfo.luckyNumbers;
      luckyDirection = nameRashiInfo.luckyDirection;
    } else {
      moonRashiNum = kundali.panchang.moonRashiNumber;
      lagnaRashiNum = kundali.panchang.lagnaNumber;
      resolvedRashiName = kundali.panchang.moonRashiName;
      resolvedRashiLord = kundali.panchang.moonRashiLord;
      resolvedNakshatra = kundali.panchang.nakshatraName;
      resolvedLagnaName = kundali.panchang.lagnaName;
      resolvedLagnaLord = kundali.panchang.lagnaLord;
      const birthDasha = kundali.mahadashas.find((d) => d.isCurrent) || kundali.mahadashas[0];
      activeMahadasha = birthDasha?.planet || "बृहस्पति";
      activeAntardasha = birthDasha?.currentAntardasha || "शुक्र";
      activePratyantardasha = birthDasha?.currentPratyantardasha || "बुध";
      activeSookshmaDasha = birthDasha?.currentSookshmaDasha || "चन्द्र";
      dashaPeriod = birthDasha ? `${birthDasha.startDateDisplay} — ${birthDasha.endDateDisplay}` : "सक्रिय जन्म काल";
      ratnaName = kundali.lucky.ratnaName;
      uparatnaName = kundali.lucky.uparatnaName;
      ratnaMetalAndFinger = kundali.lucky.ratnaMetalAndFinger;
      rudraksha = kundali.lucky.rudraksha;
      beejMantra = kundali.lucky.beejMantra;
      ishtaDevta = kundali.lucky.ishtaDevta;
      luckyColors = kundali.lucky.luckyColors;
      luckyNumbers = kundali.lucky.luckyNumbers;
      luckyDirection = kundali.lucky.luckyDirection;
    }
    const houseFromMoon = (rashiNum) => rashiNum ? (rashiNum - moonRashiNum + 12) % 12 + 1 : 1;
    const houseFromLagna = (rashiNum) => rashiNum ? (rashiNum - lagnaRashiNum + 12) % 12 + 1 : 1;
    const moonHouse = houseFromMoon(transitMoon?.rashiNumber);
    const jupiterHouse = houseFromMoon(transitJupiter?.rashiNumber);
    const saturnHouse = houseFromMoon(transitSaturn?.rashiNumber);
    const sunHouse = houseFromMoon(transitSun?.rashiNumber);
    houseFromMoon(transitMars?.rashiNumber);
    const rahuHouse = houseFromMoon(transitRahu?.rashiNumber);
    const ketuHouse = houseFromMoon(transitKetu?.rashiNumber);
    const moonFromLagna = houseFromLagna(transitMoon?.rashiNumber);
    const jupiterFromLagna = houseFromLagna(transitJupiter?.rashiNumber);
    const saturnFromLagna = houseFromLagna(transitSaturn?.rashiNumber);
    const sunFromLagna = houseFromLagna(transitSun?.rashiNumber);
    houseFromLagna(transitRahu?.rashiNumber);
    houseFromLagna(transitKetu?.rashiNumber);
    const cleanPanchangSun = (drikPanchang.suryaRashi || "").split(" (")[0].replace(/\s*राशि$/u, "").trim();
    const transitSunRashiClean = (transitSun?.rashiName || cleanPanchangSun || "वृश्चिक").split(" (")[0].trim();
    const transitMoonRashiClean = (transitMoon?.rashiName || drikPanchang.chandraRashi || "मेष").split(" (")[0].replace(/\s*राशि$/u, "").trim();
    const transitJupiterRashiClean = (transitJupiter?.rashiName || "सिंह").split(" (")[0].trim();
    const transitSaturnRashiClean = (transitSaturn?.rashiName || "मीन").split(" (")[0].trim();
    const transitRahuRashiClean = (transitRahu?.rashiName || "कुम्भ").split(" (")[0].trim();
    const transitKetuRashiClean = (transitKetu?.rashiName || "सिंह").split(" (")[0].trim();
    const akObj = kundali.jaimini?.karakas?.[0];
    const amkObj = kundali.jaimini?.karakas?.[1];
    const akFallbackP = kundali.planets[0];
    const amkFallbackP = kundali.planets[1];
    const atmakaraka = akObj ? `${akObj.planetHindi} (${akObj.degreeInRashi})` : akFallbackP ? `${akFallbackP.hindiName} (${akFallbackP.degree})` : "सूर्य";
    const amatyakaraka = amkObj ? `${amkObj.planetHindi} (${amkObj.degreeInRashi})` : amkFallbackP ? `${amkFallbackP.hindiName} (${amkFallbackP.degree})` : "बृहस्पति";
    const liveEpochMs = Date.now();
    const transitSaturnMotionHi = isGrahaRetrogradeAt("saturn", liveEpochMs) ? "वक्री" : "मार्गी";
    const RASHI_LORD_SHORT_HI = ["मंगल", "शुक्र", "बुध", "चंद्र", "सूर्य", "बुध", "शुक्र", "मंगल", "गुरु", "शनि", "शनि", "गुरु"];
    const fourthSignFromLagna = (lagnaRashiNum - 1 + 3) % 12 + 1;
    const fourthLordShortHi = RASHI_LORD_SHORT_HI[fourthSignFromLagna - 1] || "सूर्य";
    const lagnaFourthLordHi = isNameRashiMode ? void 0 : lagnaRashiNum === 2 ? `लग्न सुखेश (चतुर्थेश): ${fourthLordShortHi} • शनि: योगकारक (नवमेश-दशमेश)` : lagnaRashiNum === 7 ? `लग्न सुखेश (चतुर्थेश): ${fourthLordShortHi} • शनि: योगकारक (चतुर्थेश-पंचमेश)` : `लग्न सुखेश (चतुर्थेश): ${fourthLordShortHi}`;
    const drikRashiForecast = computeDrikGanitaRashifalForRashi(
      moonRashiNum,
      istParts.dateKey,
      `${String(istParts.hours).padStart(2, "0")}:${String(istParts.minutes).padStart(2, "0")}`,
      panchangPlaceDisplay,
      "daily",
      "hi",
      gocharKundali,
      drikPanchang
    );
    const todayVaarHindi = drikPanchang.vaarHindi || "गुरुवार";
    const todayTithiHindi = (drikPanchang.tithiName || "शुभ तिथि").trim();
    const todayNakshatraHindi = `${(drikPanchang.nakshatra || "रोहिणी").replace(/\s*नक्षत्र$/u, "").trim()} नक्षत्र`;
    const todayYogaHindi = `${(drikPanchang.yoga || "शुभ").replace(/\s*योग$/u, "").trim()} योग`;
    const todayFestivalHindi = drikPanchang.festivalName || "";
    const context = {
      userName: (currentUser?.name || prof.name || "यजमान").trim(),
      salutationPreference: currentUser?.salutationPreference,
      isNameRashiMode,
      lagnaName: resolvedLagnaName,
      lagnaLord: resolvedLagnaLord,
      chandraRashi: resolvedRashiName,
      chandraRashiLord: resolvedRashiLord,
      nakshatra: resolvedNakshatra,
      nakshatraPada: kundali.panchang.nakshatraPada || 1,
      nakshatraLord: kundali.panchang.nakshatraLord,
      nadi: kundali.panchang.nadi,
      gana: kundali.panchang.gana,
      activeMahadasha,
      activeAntardasha,
      activePratyantardasha,
      activeSookshmaDasha,
      todayVaarHindi,
      todayTithiHindi,
      todayNakshatraHindi,
      todayYogaHindi,
      todayFestivalHindi,
      samvat: Number(drikPanchang.vikramSamvat || 2083),
      tithiIndex: Number(drikPanchang.tithiIndex || 1),
      nakshatraIndex: drikPanchang.dailyPanchang?.nakshatraIntervals?.[0]?.index ?? resolveNakshatraIndexHi(todayNakshatraHindi),
      transitMoonPada: Number(transitMoon?.pada || gocharKundali.panchang?.nakshatraPada || 1),
      yogaIndex: drikPanchang.dailyPanchang?.yogaIntervals?.[0]?.index ?? resolveYogaIndexHi(todayYogaHindi),
      karanIndex: resolveKaranIndexHi(drikPanchang.karana),
      vaarIndex: istParts.weekdayIndex,
      chandraRashiIndex: transitMoon?.rashiNumber || gocharKundali.panchang?.moonRashiNumber || 1,
      suryaRashiIndex: transitSun?.rashiNumber || gocharKundali.panchang?.sunRashiNumber || 1,
      ayanamsaDegrees: Number(String(gocharKundali.input?.ayanamsaDMS || "24.235").split("°")[0]) || 24.235,
      vakriPlanetsCount: countVakriPlanets(gocharKundali.planets),
      rashiIndex: moonRashiNum,
      year: istParts.year,
      dayOfYear: computeDayOfYear(istParts.year, istParts.month, istParts.day),
      isKsheenaChandra: /क्षीण/u.test(drikRashiForecast.chandrabalStatusHi || ""),
      isJupiterCombust: Boolean(transitJupiter?.isCombust),
      amatyakaraka,
      moonHouse,
      moonFromLagna,
      transitMoonRashi: transitMoonRashiClean,
      jupiterHouse,
      jupiterFromLagna,
      transitJupiterRashi: transitJupiterRashiClean,
      saturnHouse,
      transitSaturnRashi: transitSaturnRashiClean,
      transitSaturnMotionHi,
      lagnaFourthLordHi,
      sunHouse,
      sunFromLagna,
      transitSunRashi: transitSunRashiClean,
      rahuHouse,
      transitRahuRashi: transitRahuRashiClean,
      ketuHouse,
      transitKetuRashi: transitKetuRashiClean,
      ratnaName,
      ratnaMetalAndFinger,
      rudraksha,
      beejMantra,
      ishtaDevta,
      luckyColors: drikRashiForecast.luckyColor || luckyColors,
      luckyNumbers: drikRashiForecast.luckyNumbers || luckyNumbers,
      luckyDirection: lagnaRashiNum === 2 || lagnaRashiNum === 7 || moonRashiNum === 2 || moonRashiNum === 7 ? "पश्चिम, आग्नेय एवं उत्तर" : (drikRashiForecast.auspiciousDirectionHi || luckyDirection).replace(/नैऋत्य/gu, "आग्नेय")
    };
    const resolveNakshatraIdx = (rawName) => {
      const norm = (rawName || "").split("(")[0].replace(/\s*नक्षत्र$/u, "").replace(/आद्रा/u, "आर्द्रा").replace(/पूर्व\s*फाल्गुनी/u, "पूर्वाफाल्गुनी").replace(/उत्तर\s*फाल्गुनी/u, "उत्तराफाल्गुनी").replace(/पूर्व\s*षाढ़ा|पूर्वाषाढा/u, "पूर्वाषाढ़ा").replace(/उत्तर\s*षाढ़ा|उत्तराषाढा/u, "उत्तराषाढ़ा").replace(/पूर्व\s*भाद्रपद/u, "पूर्वाभाद्रपद").replace(/उत्तर\s*भाद्रपद/u, "उत्तराभाद्रपद").replace(/कृत्तिक/u, "कृत्तिका").replace(/मृगशीर्ष/u, "मृगशिरा").trim();
      const idx = NAKSHATRAS_27.findIndex((n) => norm === n || norm.startsWith(n) || n.startsWith(norm));
      return idx >= 0 ? idx : -1;
    };
    const birthNakIdx = resolveNakshatraIdx(resolvedNakshatra);
    const transitNakIdx = resolveNakshatraIdx(drikPanchang.nakshatra || "");
    const birthPadaSafe = Math.min(4, Math.max(1, kundali.panchang.nakshatraPada || 1));
    const nakshatraPadaLordHi = birthNakIdx >= 0 ? RASHI_LORD_SHORT_HI[((birthNakIdx * 4 + (birthPadaSafe - 1)) % 12 + 12) % 12] : (kundali.panchang.nakshatraLord || "शुक्र").split(" (")[0];
    const unifiedTarabala = birthNakIdx >= 0 && transitNakIdx >= 0 ? computeOptionalTarabala(transitNakIdx, birthNakIdx) : null;
    const tarabalaBadgeText = unifiedTarabala ? `${unifiedTarabala.taraNameHi} (${unifiedTarabala.birthNakshatraNameHi} → ${unifiedTarabala.transitNakshatraNameHi})` : drikRashiForecast.tarabalNameHi;
    const tarabalaPoint1Note = unifiedTarabala ? `${unifiedTarabala.taraNameHi} — ${unifiedTarabala.birthNakshatraNameHi} → ${unifiedTarabala.transitNakshatraNameHi}: ${unifiedTarabala.guidanceHi}` : drikRashiForecast.tarabalNameHi;
    const lagnaRashiEffect = `${buildPersonalizedLagnaRashiAnalysis(context, tr)} (${tarabalaPoint1Note})`;
    const dashaGocharEffect = `${buildPersonalizedDashaGocharAnalysis(context, tr)} ${drikRashiForecast.transitImpactText}`;
    const careerEffect = `${buildPersonalizedCareerForecast(context, tr)} ${drikRashiForecast.careerText}`;
    const financeEffect = `${buildPersonalizedFinanceForecast(context, tr)} ${drikRashiForecast.wealthText}`;
    const healthEffect = `${buildPersonalizedHealthForecast(context, tr)} ${drikRashiForecast.healthText}`;
    const familyEffect = `${buildPersonalizedFamilyForecast(context, tr)} ${drikRashiForecast.familyText}`;
    const targetedRemedy = buildPersonalizedRemedy(context, drikRashiForecast.remedyText, tr);
    const localSunriseClean = (drikPanchang.sunrise || todayPanchang.suryaUday || "प्रातः 06:22:00 AM").replace(/\s*\([^)]*\)/g, "").trim();
    return {
      userName: (currentUser?.name || prof.name || "यजमान").trim(),
      hasValidDob,
      isEffectiveNameRashiMode: isNameRashiMode,
      dob: hasValidDob ? kundali.input.formattedDob : "नाम राशि आधारित",
      birthTime: hasValidDob ? kundali.input.formattedTime : "",
      birthPlace: hasValidDob ? resolvedBirthPlaceDisplay : panchangPlaceDisplay,
      cityShort,
      cityEnglishShort,
      cityCoordsLabel,
      localSunrise: localSunriseClean,
      tarabalaBadgeText,
      tarabalaIsFavorable: unifiedTarabala ? unifiedTarabala.isFavorable : true,
      abhijitMuhurat: (drikPanchang.abhijitMuhurat || todayPanchang.abhijitMuhurat || "").replace(/\s*\(.*\)/, "").trim(),
      rahuKaal: drikPanchang.rahuKaal || todayPanchang.rahuKaal || "",
      ayanamsa: kundali.input.ayanamsaDMS,
      lagnaName: resolvedLagnaName,
      lagnaLord: resolvedLagnaLord,
      lagnaDegree: kundali.panchang.lagnaDegreeDMS,
      chandraRashi: resolvedRashiName,
      chandraRashiLord: resolvedRashiLord,
      nakshatra: context.nakshatra,
      nakshatraPada: kundali.panchang.nakshatraPada,
      nakshatraLord: kundali.panchang.nakshatraLord,
      nadi: kundali.panchang.nadi,
      gana: kundali.panchang.gana,
      nakshatraPadaLordHi,
      atmakaraka,
      amatyakaraka,
      activeMahadasha,
      activeAntardasha,
      activePratyantardasha,
      activeSookshmaDasha,
      dashaPeriod,
      dashaPrediction: isNameRashiMode ? `नाम राशि स्वामी ${resolvedRashiLord} के अनुकूल प्रभाव से जीवन में उन्नति।` : kundali.mahadashas.find((d) => d.isCurrent)?.prediction || "",
      sadeSatiStatus: kundali.doshaAnalysis.sadeSati.status.includes("मुक्त") || kundali.doshaAnalysis.sadeSati.status.includes("नहीं") ? "पूर्णतः मुक्त" : `${kundali.doshaAnalysis.sadeSati.phase || kundali.doshaAnalysis.sadeSati.status}`.replace(
        /वक्री|मार्गी/gu,
        transitSaturnMotionHi
      ),
      moonHouse,
      moonFromLagna,
      jupiterHouse,
      jupiterFromLagna,
      saturnHouse,
      saturnFromLagna,
      rahuHouse,
      ketuHouse,
      sunHouse,
      sunFromLagna,
      transitMoonRashi: transitMoonRashiClean,
      transitSunRashi: transitSunRashiClean,
      transitJupiterRashi: transitJupiterRashiClean,
      transitSaturnRashi: transitSaturnRashiClean,
      transitSaturnMotionHi,
      transitRahuRashi: transitRahuRashiClean,
      transitKetuRashi: transitKetuRashiClean,
      lagnaRashiEffect,
      dashaGocharEffect,
      careerEffect,
      financeEffect,
      healthEffect,
      familyEffect,
      ratnaName,
      uparatnaName,
      ratnaMetalAndFinger,
      rudraksha,
      beejMantra,
      ishtaDevta,
      luckyColors,
      luckyNumbers,
      luckyDirection: context.luckyDirection,
      targetedRemedy,
      drikPanchang
    };
  }, [activeProfile, activePanchangLoc, currentUser, istParts.dateKey, calcViewingMode, tr, todayPanchang]);
  if (!isUserAuthenticated || !currentUser) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1c1006] via-[#19120b] to-[#0d1322] border-2 border-[#d4af37] p-4 sm:p-6 lg:p-7 shadow-[0_15px_50px_rgba(0,0,0,0.85)] space-y-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex flex-col xl:flex-row xl:items-center justify-between gap-4 border-b border-amber-800/50 pb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3 min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start sm:items-center gap-3.5 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-13 h-13 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-tr from-amber-600 via-yellow-400 to-amber-500 p-0.5 shadow-[0_0_25px_rgba(212,175,55,0.4)] flex-shrink-0 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full h-full bg-[#140b05] rounded-[14px] flex flex-col items-center justify-center text-yellow-300 font-extrabold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg sm:text-xl font-vedic leading-none", children: astroData.userName.charAt(0) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] text-amber-400 mt-0.5", children: "कुंडली" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 min-w-0 flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-500/20 border border-amber-400/50 text-yellow-300 text-[10px] sm:text-xs font-bold", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3 h-3 text-amber-400" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: calcViewingMode === "name_rashi" ? tr("नाम राशि गणना मोड सक्रिय", "Name Rashi Driven Mode Active") : tr("जन्मांक (दृक् गणित) शुद्ध गणना मोड सक्रिय", "DOB Drik Ganit Mode Active") })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-950/90 border border-emerald-500/40 text-emerald-300 text-[10px] sm:text-xs font-bold", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-3 h-3 text-emerald-400" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr(
                  `${astroData.cityShort} सूर्योदय: ${astroData.localSunrise} (IST)`,
                  `${astroData.cityEnglishShort} Sunrise: ${astroData.localSunrise} (IST)`
                ) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg sm:text-2xl font-extrabold font-vedic text-transparent bg-clip-text bg-gradient-to-r from-yellow-100 via-amber-200 to-yellow-400 leading-snug", children: (() => {
              const greetingName = formatUserSalutation(
                astroData.userName,
                currentUser?.salutationPreference
              );
              return tr(
                `प्रणाम, ${greetingName}! आपका आज का ५-स्तम्भीय शास्त्रोक्त गोचर एवं महादशा फल`,
                `Pranaam, ${greetingName}! Your 5-Pillar Shastrokta Gochar & Mahadasha Forecast`
              );
            })() })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-1.5 text-[11px] sm:text-xs animate-fadeIn", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-950/90 border border-amber-500/50 text-amber-100 font-bold whitespace-normal break-words leading-snug", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "trishul", className: "w-3.5 h-3.5 shrink-0", tone: "theme" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              tr("लग्न:", "Lagna:"),
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-yellow-300", children: astroData.lagnaName }),
              " • स्वामी: ",
              astroData.lagnaLord.split(" (")[0]
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-indigo-950/90 border border-indigo-400/50 text-indigo-100 font-bold whitespace-normal break-words leading-snug", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "w-3.5 h-3.5 text-theme-primary shrink-0", strokeWidth: 1.5 }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              tr("राशि:", "Rashi:"),
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-yellow-300", children: astroData.chandraRashi }),
              " • स्वामी: ",
              astroData.chandraRashiLord.split(" (")[0]
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-purple-950/90 border border-purple-400/50 text-purple-100 font-bold whitespace-normal break-words leading-snug", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3.5 h-3.5 text-theme-primary shrink-0", strokeWidth: 1.5 }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              tr("नक्षत्र:", "Nakshatra:"),
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-yellow-300", children: astroData.nakshatra }),
              " (चरण ",
              astroData.nakshatraPada,
              " • ",
              astroData.gana,
              " • चरण स्वामी: ",
              astroData.nakshatraPadaLordHi,
              ")"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-teal-950/90 border border-teal-500/40 text-teal-200 font-semibold whitespace-normal break-words leading-snug", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-3.5 h-3.5 text-teal-300 shrink-0", strokeWidth: 1.5 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: astroData.hasValidDob ? `${astroData.dob} • ${astroData.birthTime} (${astroData.birthPlace})` : `${astroData.dob} (${astroData.cityShort})` })
          ] }),
          astroData.tarabalaBadgeText && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "span",
            {
              className: `inline-flex items-center gap-1 px-2.5 py-1 rounded-lg border font-bold whitespace-normal break-words leading-snug ${astroData.tarabalaIsFavorable ? "bg-emerald-950/90 border-emerald-500/50 text-emerald-200" : "bg-amber-950/90 border-amber-500/50 text-amber-200"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-3.5 h-3.5 shrink-0", strokeWidth: 1.5 }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  tr("ताराबल:", "Tarabala:"),
                  " ",
                  astroData.tarabalaBadgeText
                ] })
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2.5 self-start xl:self-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center p-1 bg-slate-950/90 border border-amber-500/60 rounded-xl shadow-inner", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => setCalculationViewingMode("astronomical"),
              title: "जन्मांक व जन्म विवरण (डीओबी) आधारित शुद्ध दृक् गणित गोचर",
              className: `px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${calcViewingMode === "astronomical" ? "bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 text-slate-950 shadow-md font-extrabold" : "text-amber-200/80 hover:text-amber-100 hover:bg-slate-900"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Compass, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "जन्मांक / कुंडली अनुसार" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => setCalculationViewingMode("name_rashi"),
              title: "प्रचलित नाम अक्षर / नाम राशि आधारित फलित",
              className: `px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${calcViewingMode === "name_rashi" ? "bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 text-slate-950 shadow-md font-extrabold" : "text-amber-200/80 hover:text-amber-100 hover:bg-slate-900"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "नाम राशि अनुसार" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => {
              const speechId = "personalized-home-hero-speech";
              if (activeSpeechId !== speechId) {
                vedicAudio.playTempleBell(0.5);
              }
              vedicAudio.toggleSpeakText(
                `प्रणाम ${astroData.userName} जी। १. लग्नेश व राशि स्वामी विश्लेषण: ${astroData.lagnaRashiEffect} २. सक्रिय महादशा व गोचर: ${astroData.dashaGocharEffect} ३. करियर व धन योग: ${astroData.careerEffect} ४. पारिवारिक सौख्य: ${astroData.familyEffect} ५. शास्त्रोक्त वैदिक उपाय: ${astroData.targetedRemedy}`,
                speechId
              );
            },
            className: `px-3.5 py-2 rounded-xl border text-xs font-extrabold flex items-center gap-1.5 cursor-pointer transition-all ${activeSpeechId === "personalized-home-hero-speech" ? "bg-emerald-500 text-slate-950 border-emerald-300 shadow-lg" : "bg-slate-900/90 hover:bg-amber-950/60 border-amber-600/50 text-amber-200"}`,
            children: activeSpeechId === "personalized-home-hero-speech" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(VolumeX, { className: "w-3.5 h-3.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr("रोकें", "Stop") })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Volume2, { className: "w-3.5 h-3.5 text-yellow-400" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr("गोचर फल सुनें", "Listen Forecast") })
            ] })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-950/70 via-slate-950/90 to-indigo-950/60 border border-amber-500/50 space-y-2.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-4 h-4 text-yellow-400" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-extrabold text-yellow-300 uppercase tracking-wider", children: tr(
              "सक्रिय विंशोत्तरी महादशा • अंतर्दशा एवं जैमिनी विश्लेषण",
              "Active Vimshottari Mahadasha • Antardasha & Jaimini Analysis"
            ) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-400/50 text-emerald-300 text-[11px] font-extrabold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3 text-emerald-300 shrink-0", strokeWidth: 1.5 }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              astroData.activeMahadasha.split(" (")[0],
              " महादशा • ",
              astroData.activeAntardasha.split(" (")[0],
              " अंतर्दशा • ",
              astroData.activePratyantardasha.split(" (")[0],
              " प्रत्यंतर • ",
              astroData.activeSookshmaDasha.split(" (")[0],
              " सूक्ष्म"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs sm:text-sm text-amber-100/95 leading-relaxed", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { className: "text-amber-300", children: [
            "दशा काल (",
            astroData.dashaPeriod,
            "):"
          ] }),
          " ",
          astroData.dashaPrediction,
          " ",
          tr(
            `वर्तमान सूक्ष्म दशा: ${astroData.activeSookshmaDasha}। जैमिनी सूत्र अनुसार आपके आत्मकारक ग्रह ${astroData.atmakaraka} एवं अमात्यकारक (करियर कारक) ${astroData.amatyakaraka} हैं।`,
            `Active Sookshma Dasha: ${astroData.activeSookshmaDasha}. Per Jaimini Sutras, your Atmakaraka is ${astroData.atmakaraka} and Amatyakaraka (Career significator) is ${astroData.amatyakaraka}.`
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-1 space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10.5px] text-amber-300/90 font-semibold", children: tr(
            "निरयण नवग्रह गोचर स्थिति (जन्म चंद्र राशि से • लग्न से भाव सहित):",
            "Sidereal Navagraha Transit (From Birth Moon Sign & Lagna):"
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-2 text-[11px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2 rounded-xl bg-black/50 border border-amber-700/40", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-theme-primary flex items-center gap-1 font-semibold", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "w-3 h-3 shrink-0", strokeWidth: 1.5 }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  "चन्द्र गोचर (",
                  astroData.transitMoonRashi,
                  ")"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-yellow-200 font-bold block", children: [
                "राशि से ",
                formatHindiHouseOrdinal(astroData.moonHouse),
                " भाव • लग्न से ",
                formatHindiHouseOrdinal(astroData.moonFromLagna)
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2 rounded-xl bg-black/50 border border-amber-700/40", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-theme-primary flex items-center gap-1 font-semibold", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "w-3 h-3 shrink-0", strokeWidth: 1.5 }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  "सूर्य गोचर (",
                  astroData.transitSunRashi,
                  ")"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-yellow-200 font-bold block", children: [
                "राशि से ",
                formatHindiHouseOrdinal(astroData.sunHouse),
                " भाव • लग्न से ",
                formatHindiHouseOrdinal(astroData.sunFromLagna)
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2 rounded-xl bg-black/50 border border-amber-700/40", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-theme-primary flex items-center gap-1 font-semibold", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "navagraha", className: "w-3 h-3 shrink-0", tone: "theme" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  "गुरु गोचर (",
                  astroData.transitJupiterRashi,
                  ")"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-yellow-200 font-bold block", children: [
                "राशि से ",
                formatHindiHouseOrdinal(astroData.jupiterHouse),
                " भाव • लग्न से ",
                formatHindiHouseOrdinal(astroData.jupiterFromLagna)
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2 rounded-xl bg-black/50 border border-amber-700/40", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-theme-primary flex items-center gap-1 font-semibold", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Scale, { className: "w-3 h-3 shrink-0", strokeWidth: 1.5 }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  "शनि गोचर (",
                  astroData.transitSaturnRashi,
                  " • ",
                  astroData.transitSaturnMotionHi,
                  ")"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-yellow-200 font-bold block", children: [
                "राशि से ",
                formatHindiHouseOrdinal(astroData.saturnHouse),
                " भाव • लग्न से ",
                formatHindiHouseOrdinal(astroData.saturnFromLagna)
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2 rounded-xl bg-black/50 border border-amber-700/40", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-theme-primary flex items-center gap-1 font-semibold", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "w-3 h-3 shrink-0", strokeWidth: 1.5 }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  "राहु-केतु गोचर (",
                  astroData.transitRahuRashi,
                  "/",
                  astroData.transitKetuRashi,
                  ")"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-yellow-200 font-bold block", children: [
                "राशि से ",
                formatHindiHouseOrdinal(astroData.rahuHouse),
                " / ",
                formatHindiHouseOrdinal(astroData.ketuHouse),
                " भाव"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2 rounded-xl bg-black/50 border border-amber-700/40", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-theme-primary flex items-center gap-1 font-semibold", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "trishul", className: "w-3 h-3 shrink-0", tone: "theme" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "साढ़े साती/ढैय्या" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-300 font-bold truncate block", children: astroData.sadeSatiStatus })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5 p-4 sm:p-5 rounded-2xl bg-slate-950/90 border border-amber-500/50 flex flex-col justify-between space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-amber-800/40 pb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-extrabold text-yellow-300 flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Gem, { className: "w-4 h-4 text-amber-400" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr(
                "लग्नेश अनुसार शुभ रत्न, रुद्राक्ष एवं बीज मंत्र",
                "Lagna Gemstone, Rudraksha & Beej Mantra"
              ) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-bold", children: [
              "इष्ट: ",
              astroData.ishtaDevta.split(" एवं ")[0].split(" (")[0]
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2 text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2 rounded-xl bg-amber-950/40 border border-amber-700/40", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-theme-primary flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Gem, { className: "w-3 h-3 shrink-0", strokeWidth: 1.5 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "मुख्य रत्न (Gemstone):" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-extrabold text-yellow-300 block", children: astroData.ratnaName }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-amber-200/80 block truncate", children: astroData.ratnaMetalAndFinger })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2 rounded-xl bg-amber-950/40 border border-amber-700/40", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-theme-primary flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "rudraksha", className: "w-3 h-3 shrink-0", tone: "theme" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "शुभ रुद्राक्ष एवं रंग:" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-extrabold text-emerald-300 block", children: astroData.rudraksha }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-amber-200/80 block truncate", children: [
                "रंग: ",
                astroData.luckyColors
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 rounded-xl bg-black/60 border border-amber-600/40", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-bold text-theme-primary flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "om", className: "w-3 h-3 shrink-0", tone: "theme" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "लग्नेश एवं दशानाथ सिद्ध बीज मंत्र:" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs sm:text-sm font-extrabold font-vedic text-yellow-300 block mt-0.5", children: astroData.beejMantra })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 pt-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: onOpenJanamKundali,
              className: "flex-1 px-3 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-slate-950 font-extrabold text-xs transition-all cursor-pointer shadow-md flex items-center justify-center gap-1",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Compass, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr("सम्पूर्ण कुंडली व PDF", "Full Kundali & PDF") })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: onOpenRashifal,
              className: "flex-1 px-3 py-2 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-400/50 text-amber-200 font-bold text-xs transition-all cursor-pointer flex items-center justify-center gap-1",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-3.5 h-3.5 text-yellow-400" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr("दैनिक/मासिक राशिफल", "Daily/Monthly Rashifal") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3.5 h-3.5" })
              ]
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3.5 rounded-2xl bg-slate-950/85 border border-amber-700/45 space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs sm:text-sm font-extrabold text-amber-300 flex items-center gap-1.5 flex-1 min-w-[170px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3.5 h-3.5 text-amber-400 flex-shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr(
              "१. लग्नेश, राशि स्वामी एवं मानसिक-आध्यात्मिक स्थिति",
              "1. Lagna, Rashi Lord & Mental-Spiritual State"
            ) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-yellow-300 font-bold border border-amber-500/30 whitespace-nowrap ml-auto", children: astroData.lagnaLord.split(" ")[0] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-amber-100/90 leading-relaxed", children: astroData.lagnaRashiEffect })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3.5 rounded-2xl bg-slate-950/85 border border-sky-700/45 space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs sm:text-sm font-extrabold text-sky-300 flex items-center gap-1.5 flex-1 min-w-[170px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3.5 h-3.5 text-sky-400 flex-shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr(
              "२. सक्रिय विंशोत्तरी महादशा/अंतर्दशा एवं गोचर ग्रहों का सूक्ष्म प्रभाव",
              "2. Active Dasha/Antardasha & Subtle Gochar Impact"
            ) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] px-2 py-0.5 rounded-full bg-sky-500/20 text-sky-300 font-bold border border-sky-500/30 whitespace-nowrap ml-auto", children: [
            astroData.activeMahadasha.split(" ")[0],
            " - ",
            astroData.activeAntardasha.split(" ")[0]
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-amber-100/90 leading-relaxed", children: astroData.dashaGocharEffect })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3.5 rounded-2xl bg-slate-950/85 border border-emerald-700/45 space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs sm:text-sm font-extrabold text-emerald-300 flex items-center gap-1.5 flex-1 min-w-[170px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "w-3.5 h-3.5 text-emerald-400 flex-shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr(
              "३. करियर, आजीविका, व्यवसाय एवं धन योग",
              "3. Career, Livelihood, Business & Wealth Yoga"
            ) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30 whitespace-nowrap ml-auto", children: [
            "अंक: ",
            astroData.luckyNumbers
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-amber-100/90 leading-relaxed", children: astroData.careerEffect })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3.5 rounded-2xl bg-slate-950/85 border border-rose-700/45 space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs sm:text-sm font-extrabold text-rose-300 flex items-center gap-1.5 flex-1 min-w-[170px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "w-3.5 h-3.5 text-rose-400 flex-shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr(
              "४. पारिवारिक सौख्य, दांपत्य जीवन एवं संबंध",
              "4. Family Harmony, Marital Life & Relationships"
            ) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 font-bold border border-rose-500/30 whitespace-nowrap ml-auto", children: [
            "गुरु ",
            astroData.jupiterHouse,
            "वें भाव"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-amber-100/90 leading-relaxed", children: astroData.familyEffect })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 p-3.5 rounded-2xl bg-gradient-to-r from-amber-950/80 via-[#1f1308] to-amber-950/80 border border-amber-500/50 flex flex-col lg:flex-row lg:items-center justify-between gap-3 text-xs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-amber-100 leading-relaxed", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-yellow-300", children: tr(
            "५. शास्त्रोक्त वैदिक उपाय, विशेष मंत्र जप, रत्न-रुद्राक्ष एवं दान विधान:",
            "5. Precise Vedic Remedies, Mantras, Gemstone-Rudraksha & Daan Guidance:"
          ) }),
          " ",
          astroData.targetedRemedy
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 flex-shrink-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ShareableVedicCardButton,
          {
            payload: {
              variant: "gochar",
              badge: `५-स्तम्भीय शास्त्रोक्त गोचर एवं महादशा फल`,
              title: `${astroData.userName} — आज का गोचर फलादेश`,
              subtitle: `राशि: ${astroData.chandraRashi} • लग्न: ${astroData.lagnaName}`,
              dateOrLocation: `महादशा: ${astroData.activeMahadasha.split(" ")[0]} - ${astroData.activeAntardasha.split(" ")[0]}`,
              highlights: [
                { label: "शुभ रत्न व रुद्राक्ष", value: `${astroData.ratnaName} • ${astroData.rudraksha}` },
                { label: "शुभ रंग व अंक", value: `${astroData.luckyColors} • अंक: ${astroData.luckyNumbers}` },
                { label: "अभिजित मुहूर्त", value: astroData.abhijitMuhurat },
                { label: "राहुकाल", value: astroData.rahuKaal }
              ],
              message: astroData.targetedRemedy,
              shareUrl: "https://www.panditjionline.online/",
              fileNameSlug: "aaj-ka-5-stambh-gochar-card"
            },
            buttonLabel: "WhatsApp Status / परिवार इमेज कार्ड शेयर करें",
            compact: true
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-950/90 border border-emerald-500/50 text-emerald-300 font-bold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3 h-3 shrink-0", strokeWidth: 1.5 }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "अभिजित मुहूर्त (",
            astroData.cityShort,
            "): ",
            astroData.abhijitMuhurat
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-rose-950/90 border border-rose-500/50 text-rose-300 font-bold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-3 h-3 shrink-0", strokeWidth: 1.5 }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "राहुकाल (",
            astroData.cityShort,
            "): ",
            astroData.rahuKaal
          ] })
        ] })
      ] })
    ] })
  ] });
};
export {
  PersonalizedHomeHero
};
