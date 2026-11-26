import { r as resolveSafeTimezone, ar as RASHIFAL_AYANAMSHA_MODE, as as RASHIFAL_NODE_MODE, at as RASHIFAL_CORE_ENGINE_VERSION, au as GRAHA_NAMES, t as resolveCityCoordinates, d as getLocalDateParts, av as zonedWallClockToUtcMs, b as buildSingleDayPanchang, I as generateSampurnKundali, O as isGrahaRetrogradeAt, aw as getSiderealMoonLonDeg, ax as getSiderealSunLonDeg, o as resolveBhadraRahuFreeShreshthaSamay, g as getISTCalendarParts, ag as HINDI_GREGORIAN_MONTHS, V as VAAR_LIST, J as HINDI_MONTH_SHORT, ay as ENGLISH_MONTH_NAMES } from "./panchang-core-WfwKNTXG.js";
const BHAVA_ORDINAL_HI = {
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
const BHAVA_DOMAIN_HI = {
  1: "व्यक्तित्व व आत्मबल",
  2: "धन, वाणी व कुटुम्ब",
  3: "पराक्रम, साहस व संपर्क",
  4: "गृह सुख, माता व संपत्ति",
  5: "बुद्धि, विद्या व संतान",
  6: "प्रतिस्पर्धा, सेवा व आरोग्य",
  7: "दांपत्य, साझेदारी व व्यापार",
  8: "अनुसंधान, संयम व परिवर्तन",
  9: "भाग्य, धर्म व मार्गदर्शन",
  10: "कर्म, पद व कार्यक्षेत्र",
  11: "लाभ, आय व इच्छापूर्ति",
  12: "व्यय, विदेश संपर्क व विश्राम"
};
function houseOrdHi(house) {
  const h = ((Math.round(house) - 1) % 12 + 12) % 12 + 1;
  return BHAVA_ORDINAL_HI[h] || `${h}वें`;
}
function cleanHindiProse(text) {
  let out = String(text || "");
  let prev = "";
  let guard = 0;
  while (out !== prev && guard < 8) {
    prev = out;
    guard += 1;
    out = out.replace(/\(([^()]*)\(([^()]+)\)([^()]*)\)/g, (_m, pre, inner, post) => {
      const a = String(pre || "").trim();
      const b = String(inner || "").trim();
      const c = String(post || "").trim();
      const left = [a, b].filter(Boolean).join(" — ");
      if (!c) return `(${left})`;
      const sep = /^[•|,—–-]/u.test(c) ? " " : " — ";
      return `(${left ? `${left}${sep}${c}` : c})`;
    });
    out = out.replace(/\(([^()]+)\)\s*\(([^()]+)\)/g, "($1 • $2)");
  }
  return out.replace(/[^\S\r\n]{2,}/g, " ").replace(/\s+।/g, "।").replace(/।{2,}/g, "।").replace(/,\s*।/g, "।").trim();
}
function mergeDuplicateFamilySentencesHi(text) {
  const cleaned = cleanHindiProse(text);
  const parts = cleaned.split(/(?<=।)\s+/u).map((s) => s.trim()).filter(Boolean);
  if (parts.length <= 1) return cleaned;
  const THEME_PATTERNS = [
    /(संवाद|बातचीत|वाणी).{0,25}(मधुर|शांत|स्पष्ट|संयम)/u,
    /(पारिवारिक|परिवार|दांपत्य|रिश्तों).{0,25}(सौहार्द|तालमेल|सामंजस्य|मधुरता|शांति)/u,
    /(जीवनसाथी|परिजनों|अपनों).{0,25}(सहयोग|विश्वास|समर्थन|स्नेह)/u,
    /(गलतफहमी|विवाद|तनाव|बहस).{0,25}(बचें|टालें|दूर|शांत)/u
  ];
  const seenThemes = /* @__PURE__ */ new Set();
  const kept = [];
  for (let i = 0; i < parts.length; i++) {
    const s = parts[i];
    const matchedThemes = [];
    THEME_PATTERNS.forEach((rx, idx) => {
      if (rx.test(s)) matchedThemes.push(idx);
    });
    if (i > 0 && matchedThemes.length > 0 && matchedThemes.every((t) => seenThemes.has(t))) {
      const addsNewPlanetOrDate = /(सूर्य|चंद्र|मंगल|बुध|गुरु|बृहस्पति|शुक्र|शनि|राहु|केतु|दृष्टि|तिथि|सप्ताह|माह)/u.test(s);
      if (!addsNewPlanetOrDate) {
        continue;
      }
      const prevSentence = kept[kept.length - 1] || "";
      const sharedKeywords = ["मधुरता", "सौहार्द", "तालमेल", "सामंजस्य", "संवाद", "सहयोग", "शांति"].filter(
        (kw) => s.includes(kw) && prevSentence.includes(kw)
      );
      if (sharedKeywords.length >= 2) {
        continue;
      }
    }
    matchedThemes.forEach((t) => seenThemes.add(t));
    kept.push(s);
  }
  return cleanHindiProse(kept.join(" "));
}
function enforcePeriodVocabularyGuard(text, period) {
  let out = cleanHindiProse(text);
  if (period === "daily") return out;
  const replacement = period === "weekly" ? "इस सप्ताह" : "इस माह";
  const adjReplacement = period === "weekly" ? "साप्ताहिक" : "मासिक";
  out = out.replace(/(?<![\u0900-\u097F])आज\s+का(?![\u0900-\u097F])/gu, `${replacement} का`).replace(/(?<![\u0900-\u097F])आज\s+के(?![\u0900-\u097F])/gu, `${replacement} के`).replace(/(?<![\u0900-\u097F])आज\s+की(?![\u0900-\u097F])/gu, `${replacement} की`).replace(/(?<![\u0900-\u097F])आज(?![\u0900-\u097F])/gu, replacement).replace(/(?<![\u0900-\u097F])दैनिक(?![\u0900-\u097F])/gu, adjReplacement).replace(/अभिजित\s+मुहूर्त/gu, "अनुकूल समय").replace(/राहुकाल/gu, "सावधानी का समय");
  return cleanHindiProse(out);
}
function describeGrahaConditionHi(dignity, isRetrograde, isCombust, grahaId) {
  if (grahaId === "rahu" || grahaId === "ketu") {
    return "";
  }
  const tags = [];
  if (dignity === "EXALTED") tags.push("उच्चस्थ");
  else if (dignity === "MOOLATRIKONA") tags.push("मूलत्रिकोण में");
  else if (dignity === "OWN_SIGN") tags.push("स्वराशि में");
  else if (dignity === "DEBILITATED") tags.push("नीचस्थ");
  if (isRetrograde) {
    const isNaturalBenefic = grahaId === "jupiter" || grahaId === "venus" || grahaId === "mercury";
    tags.push(isNaturalBenefic ? "वक्री — चेष्टा बली" : "वक्री");
  }
  if (isCombust) {
    tags.push(grahaId === "moon" ? "क्षीण/अमावस्या समीप" : "अस्त");
  }
  return tags.length > 0 ? ` (${tags.join(", ")})` : "";
}
function buildLockedGrahaConditionMap(analysis) {
  const grahaIds = [
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
  const map = {};
  for (const id of grahaIds) {
    const g = analysis.transits[id]?.graha;
    map[id] = g ? describeGrahaConditionHi(g.dignity, g.isRetrograde, g.isCombust, id) : "";
  }
  return map;
}
function formatUniqueGrahaRolesHi(entries, conjunctionHi = "और") {
  const mergedOrder = [];
  const mergedMap = /* @__PURE__ */ new Map();
  for (const item of entries) {
    const existing = mergedMap.get(item.graha);
    const nameHi = item.displayNameHi || GRAHA_NAMES[item.graha].shortHi;
    if (!existing) {
      mergedOrder.push(item.graha);
      mergedMap.set(item.graha, {
        roles: item.rolePrefixHi ? [item.rolePrefixHi] : [],
        detailHi: item.detailHi || "",
        displayNameHi: nameHi
      });
    } else {
      if (item.rolePrefixHi && !existing.roles.includes(item.rolePrefixHi)) {
        existing.roles.push(item.rolePrefixHi);
      }
      if (!existing.detailHi && item.detailHi) {
        existing.detailHi = item.detailHi;
      }
    }
  }
  const phrases = mergedOrder.map((id) => {
    const info = mergedMap.get(id);
    const roleStr = info.roles.length > 0 ? `${info.roles.join(" व ")} ` : "";
    const detailStr = info.detailHi ? ` ${info.detailHi}` : "";
    return `${roleStr}${info.displayNameHi}${detailStr}`.trim();
  });
  if (phrases.length === 0) return "";
  if (phrases.length === 1) return phrases[0];
  if (phrases.length === 2) return `${phrases[0]} ${conjunctionHi} ${phrases[1]}`;
  return `${phrases.slice(0, -1).join(", ")} ${conjunctionHi} ${phrases[phrases.length - 1]}`;
}
const RASHI_VOICE_PROFILES = {
  1: {
    strengthPhraseHi: "साहस और त्वरित पहलशक्ति",
    cautionStyleHi: "आवेग और शीघ्रता पर संयम रखें",
    careerVerbHi: "नेतृत्व व नई पहल आगे बढ़ेगी",
    careerStrongTailHi: "उत्साहपूर्ण नेतृत्व से नए दायित्व, फील्ड कार्य और तकनीकी प्रयास तेज गति पकड़ेंगे",
    careerBalancedTailHi: "तय लक्ष्यों को चरणबद्ध ढंग से पूरा करने पर टीम का भरोसा और कार्यगति दोनों बनी रहेंगी",
    careerCautionTailHi: "कार्यस्थल पर जल्दबाजी में प्रतिबद्धता देने से बचें और लंबित तकनीकी विवरण पहले सुधारें",
    financeFocusHi: "जोखिम भरे निवेश से बचकर ठोस आय पर ध्यान दें",
    financeStrongLeadHi: "उद्यम व पराक्रम से नए आर्थिक स्रोत सक्रिय होंगे",
    financeBalancedLeadHi: "नियमित आमदनी के साथ अनावश्यक तात्कालिक खर्च नियंत्रित रहेंगे",
    financeCautionLeadHi: "जल्दबाजी के सौदे या अचानक बड़े भुगतान से पूँजी पर दबाव बढ़ सकता है",
    familyStrongHi: "घर में उत्साहपूर्ण माहौल और छोटे भाई-बहनों या जीवनसाथी का सक्रिय सहयोग आत्मबल बढ़ाएगा",
    familyBalancedHi: "गृहस्थ जिम्मेदारियों में सक्रिय भागीदारी से परिजनों के बीच विश्वास और सहजता बनी रहेगी",
    familyCautionHi: "तीखे शब्दों के बजाय शांत धैर्य से बात रखने पर पारिवारिक तनाव स्वतः टल जाएगा",
    educationStrongHi: "प्रतियोगी परीक्षा, तकनीकी विषय और त्वरित प्रश्न-अभ्यास में प्रखर एकाग्रता बनेगी",
    educationCautionHi: "अध्ययन में उतावलेपन से बचकर कठिन सूत्रों का क्रमिक दोहराव करना अधिक फलदायी रहेगा",
    healthEnergyStrongHi: "शारीरिक स्फूर्ति, रक्त-ऊर्जा और कार्य-उत्साह उच्च स्तर पर बना रहेगा",
    healthEnergyCautionHi: "पित्त-प्रकृति व अत्यधिक भागदौड़ के कारण सिर में भारीपन या चिड़चिड़ाहट उभर सकती है",
    wellnessHintHi: "पर्याप्त शीतल जल पिएँ, मसालेदार भोजन सीमित रखें और प्रातः हल्का व्यायाम करें",
    drishtiBeneficTailHi: "प्रत्यक्ष पहल और निर्णायक साहस से कामयाबी का मार्ग सुगम बनेगा",
    drishtiDisciplineTailHi: "ऊर्जा को आवेग के बजाय व्यवस्थित लक्ष्य पर लगाने से स्थायी सिद्धि मिलेगी",
    drishtiMixedTailHi: "तेज अवसरों के साथ व्यावहारिक धैर्य का तालमेल ही श्रेष्ठ परिणाम देगा"
  },
  2: {
    strengthPhraseHi: "धैर्य, व्यावहारिकता और स्थिर निष्ठा",
    cautionStyleHi: "जिद्दी रुख की जगह लचीलापन अपनाएँ",
    careerVerbHi: "स्थायी प्रगति और भरोसेमंद छवि मजबूत होगी",
    careerStrongTailHi: "दीर्घकालिक अनुबंध, वित्तीय प्रशासन और गुणवत्तापूर्ण कार्य से ठोस पदोन्नति के संकेत बनेंगे",
    careerBalancedTailHi: "निरंतर परिश्रम और शांत व्यवहार से कार्यालयीन दायित्व सहजता से पूरे होते जाएंगे",
    careerCautionTailHi: "कार्यशैली में अड़ियल रवैया छोड़ें और पुराने लंबित हिसाब-किताब की सावधानीपूर्वक समीक्षा करें",
    financeFocusHi: "संचय, संपत्ति और दीर्घकालिक सुरक्षा को प्राथमिकता दें",
    financeStrongLeadHi: "स्थायी संपत्ति, संचित कोष और भरोसेमंद व्यापारिक भुगतान में वृद्धि के योग हैं",
    financeBalancedLeadHi: "बजट की स्थिरता बनी रहेगी और आवश्यक गृह-सुविधाओं पर संतुलित व्यय होगा",
    financeCautionLeadHi: "सौंदर्य या सुख-सुविधा की वस्तुओं पर अचानक अधिक व्यय से कोष प्रभावित हो सकता है",
    familyStrongHi: "कुटुम्ब के साथ मधुर भोजन, स्नेहिल आतिथ्य और जीवनसाथी के सहयोग से घर में समृद्धि का भाव रहेगा",
    familyBalancedHi: "घरेलू व्यवस्थाओं में शांत सहयोग और बड़ों के सान्निध्य से मन में संतोष बना रहेगा",
    familyCautionHi: "परिवार के विचारों को धैर्यपूर्वक सुनकर अनावश्यक हठ त्यागने से सौहार्द सुरक्षित रहेगा",
    educationStrongHi: "वाणिज्य, कला, संगीत और व्यावहारिक विषयों में स्थिर स्मरण-शक्ति से उत्कृष्ट परिणाम मिलेंगे",
    educationCautionHi: "आलस्य छोड़कर समय-सारिणी के अनुसार नियमित लेखन अभ्यास करना सफलता की कुंजी रहेगा",
    healthEnergyStrongHi: "स्थिर दिनचर्या से शारीरिक सहनशक्ति और कंठ-स्वास्थ्य सुदृढ़ बना रहेगा",
    healthEnergyCautionHi: "कफ-प्रवृत्ति व अनियमित दिनचर्या से गले में खराश या भारीपन अनुभव हो सकता है",
    wellnessHintHi: "गुनगुना जल लें, भोजन का समय नियमित रखें और कंधे-गर्दन का हल्का व्यायाम करें",
    drishtiBeneficTailHi: "व्यावहारिक स्थिरता और सौम्य आकर्षण से दीर्घकालिक लाभ प्राप्त होगा",
    drishtiDisciplineTailHi: "क्रमिक धैर्य और ठोस योजना के साथ आगे बढ़ने पर कार्य अडिग रूप से सधेंगे",
    drishtiMixedTailHi: "सुविधा और संयम के बीच विवेकपूर्ण संतुलन बनाकर चलना हितकारी रहेगा"
  },
  3: {
    strengthPhraseHi: "संवाद-कौशल, तार्किकता और बहुमुखी सूझबूझ",
    cautionStyleHi: "एक साथ अनेक कार्यों में ऊर्जा बिखरने से बचाएँ",
    careerVerbHi: "बौद्धिक चर्चा, लेखन व नेटवर्किंग से लाभ होगा",
    careerStrongTailHi: "वाक्-चातुर्य, डिजिटल प्रोजेक्ट, मार्केटिंग और महत्वपूर्ण संवाद से नए द्वार खुलेंगे",
    careerBalancedTailHi: "ईमेल, रिपोर्ट और टीम-संपर्क में स्पष्टता रखने से कामकाज सुगमता से गतिशील रहेगा",
    careerCautionTailHi: "अधूरे संवाद या एक साथ कई जिम्मेदारियाँ उठाने से भ्रम बढ़ सकता है, अतः प्राथमिकता तय करें",
    financeFocusHi: "लेन-देन में लिखित स्पष्टता और बजट अनुशासन बनाए रखें",
    financeStrongLeadHi: "बौद्धिक परामर्श, कमीशन और व्यापारिक संपर्कों से अतिरिक्त धन-लाभ के अवसर बनेंगे",
    financeBalancedLeadHi: "दैनिक नकदी प्रवाह सामान्य रहेगा और छोटे निवेशों की योजना व्यवस्थित बनेगी",
    financeCautionLeadHi: "अस्पष्ट अनुबंध या शीघ्र लाभ के प्रलोभन में धन फँसने से बचाव आवश्यक है",
    familyStrongHi: "भाई-बंधुओं, मित्रों और जीवनसाथी के साथ हल्के-फुल्के सार्थक संवाद से घर में प्रसन्नता बढ़ेगी",
    familyBalancedHi: "परिवार की सूचनाओं व छोटे निर्णयों में आपसी तालमेल सहज और सकारात्मक रहेगा",
    familyCautionHi: "अफवाह या अधूरी बात पर तुरंत प्रतिक्रिया देने से बचें और शांत भाव से स्थिति समझें",
    educationStrongHi: "गणित, भाषा, कोडिंग और विश्लेषणात्मक विषयों में तीव्र ग्रहण-शक्ति का लाभ मिलेगा",
    educationCautionHi: "मोबाइल व बाहरी भटकाव कम करके एक समय में एक ही अध्याय पूरा करने पर बल दें",
    healthEnergyStrongHi: "मानसिक चपलता, स्नायु-सजगता और शारीरिक फुर्ती संतोषजनक बनी रहेगी",
    healthEnergyCautionHi: "अतिरिक्त विचारशीलता व निरंतर भागदौड़ से स्नायु-तनाव और मानसिक थकान उभर सकती है",
    wellnessHintHi: "अनुलोम-विलोम प्राणायाम करें, आँखों को विश्राम दें और रात्रि में स्क्रीन से दूरी रखें",
    drishtiBeneficTailHi: "कुशाग्र बुद्धि और स्पष्ट संवाद से जटिल कार्य भी सहजता से हल होंगे",
    drishtiDisciplineTailHi: "विचारों की एकाग्रता और लिखित नियोजन से भटकाव रुककर ठोस परिणाम आएँगे",
    drishtiMixedTailHi: "तर्कशीलता के साथ शांत धैर्य रखने से दोनों पक्षों का पूरा लाभ मिलेगा"
  },
  4: {
    strengthPhraseHi: "संवेदनशीलता, अंतर्ज्ञान और पारिवारिक निष्ठा",
    cautionStyleHi: "भावनात्मक अस्थिरता से निर्णय प्रभावित न होने दें",
    careerVerbHi: "रचनात्मक सोच और सहयोगी वातावरण से कार्य सधेंगे",
    careerStrongTailHi: "सहयोगी टीम-प्रबंधन, सेवा-क्षेत्र, गृह-संपत्ति और रचनात्मक कार्यों में सराहनीय प्रगति होगी",
    careerBalancedTailHi: "शांत एकाग्रता और विश्वस्त सहकर्मियों के समन्वय से दैनिक लक्ष्य बिना दबाव के पूरे होंगे",
    careerCautionTailHi: "ऑफिस की किसी टिप्पणी को मन पर न लगाएँ और तथ्यों के आधार पर लंबित कार्य निपटाएँ",
    financeFocusHi: "गृह-सुख व आवश्यकताओं के बीच व्यावहारिक संतुलन रखें",
    financeStrongLeadHi: "परिवार-आधारित व्यवसाय, भूमि-भवन या संचित योजनाओं से सुखद आर्थिक सुदृढ़ता बनेगी",
    financeBalancedLeadHi: "घरेलू आवश्यकताओं और नियमित बचत के बीच सहज संतुलन कायम रहेगा",
    financeCautionLeadHi: "भावुक होकर अनावश्यक उधार देने या अपरीक्षित खर्च से बचने में ही सुरक्षा है",
    familyStrongHi: "मातृ-पक्ष के स्नेह, आत्मीय संवाद और पारिवारिक एकजुटता से हृदय को गहरा संतोष मिलेगा",
    familyBalancedHi: "घर के बड़ों का आशीर्वाद और जीवनसाथी की समझदारी दैनिक दायित्वों को सरल बनाएगी",
    familyCautionHi: "अतीत की छोटी बातों को दोहराने से बचें और कोमल संवाद से मनमुटाव शांत करें",
    educationStrongHi: "साहित्य, मनोविज्ञान, चिकित्सा और शोधपरक अध्ययन में अंतर्ज्ञान व एकाग्रता सहायक रहेगी",
    educationCautionHi: "मन की चंचलता शांत कर शांत स्थान पर पुराने पाठों की पुनरावृत्ति करना श्रेयस्कर रहेगा",
    healthEnergyStrongHi: "मन प्रसन्न और शारीरिक प्राणशक्ति व पाचन-संतुलन स्थिर रहेगा",
    healthEnergyCautionHi: "चंद्र-संवेदनशीलता के कारण मानसिक उतार-चढ़ाव या पाचन की मंदता महसूस हो सकती है",
    wellnessHintHi: "सुपाच्य सात्त्विक भोजन ग्रहण करें, संध्या को शांत संगीत/ध्यान अपनाएँ और गहरी नींद लें",
    drishtiBeneficTailHi: "सौम्य अंतर्ज्ञान और सहृदय सहयोग से इच्छित कार्य पूर्णता की ओर बढ़ेंगे",
    drishtiDisciplineTailHi: "भावनाओं के बजाय स्थिर दिनचर्या व व्यावहारिक संकल्प से बाधाएँ शांत होंगी",
    drishtiMixedTailHi: "संवेदनशीलता के साथ व्यावहारिक सीमाएँ तय रखने से प्रगति सुरक्षित रहेगी"
  },
  5: {
    strengthPhraseHi: "आत्मविश्वास, गरिमा और प्रभावशाली नेतृत्व",
    cautionStyleHi: "अहंकार के बजाय उदार संवाद अपनाएँ",
    careerVerbHi: "प्रतिष्ठा, प्रशासनिक क्षमता और वरिष्ठ सहयोग सुदृढ़ होगा",
    careerStrongTailHi: "प्रशासनिक पहल, उच्चाधिकारियों के सम्मान और ब्रांड-प्रतिष्ठा से कार्यक्षेत्र में चमक बढ़ेगी",
    careerBalancedTailHi: "टीम को प्रोत्साहित करते हुए जिम्मेदारियाँ बाँटने से कार्यप्रणाली सुचारू बनी रहेगी",
    careerCautionTailHi: "वरिष्ठों या सहकर्मियों से प्रतिष्ठा-संघर्ष टालें और विनम्रता से अपने तथ्य प्रस्तुत करें",
    financeFocusHi: "दिखावे के खर्च रोककर सम्मानजनक आय-वृद्धि पर केंद्रित रहें",
    financeStrongLeadHi: "सरकारी कार्य, प्रमुख अनुबंध या प्रतिष्ठित ग्राहकों से उल्लेखनीय आमदनी के योग हैं",
    financeBalancedLeadHi: "आय का स्तर संतोषजनक रहेगा और दीर्घकालिक प्रतिष्ठा-निवेश स्थिर रहेंगे",
    financeCautionLeadHi: "आडंबरपूर्ण खर्च या जोखिमभरे दांव से बचना आपकी आर्थिक गरिमा की रक्षा करेगा",
    familyStrongHi: "पिता व वरिष्ठजनों का गौरवपूर्ण समर्थन और संतान पक्ष की उपलब्धि घर में उल्लास भर देगी",
    familyBalancedHi: "परिवार में आपके नेतृत्व और उदार व्यवहार से सभी सदस्यों में सामंजस्य बना रहेगा",
    familyCautionHi: "अपने निर्णय थोपने के बजाय जीवनसाथी व परिजनों की राय को समान महत्व दें",
    educationStrongHi: "प्रशासन, राजनीति, प्रबंधन और मंच-प्रस्तुति से जुड़े अध्ययन में विशिष्ट सफलता मिलेगी",
    educationCautionHi: "अति-आत्मविश्वास त्यागकर बुनियादी तथ्यों व उत्तर-लेखन की बारीकियों का अभ्यास करें",
    healthEnergyStrongHi: "रोग-प्रतिरोधक क्षमता, नेत्र-स्फूर्ति और आत्मिक ओज प्रबल बना रहेगा",
    healthEnergyCautionHi: "उष्णता की अधिकता या अत्यधिक कार्यभार से नेत्र-थकान व हृदय-तनाव उभर सकता है",
    wellnessHintHi: "प्रातःकालीन सूर्य-प्रकाश में टहलें, हल्का व्यायाम करें और क्षारीय फल-जल का सेवन बढ़ाएँ",
    drishtiBeneficTailHi: "तेजस्वी आत्मबल और उच्च मार्गदर्शन से मान-सम्मान में निश्चित वृद्धि होगी",
    drishtiDisciplineTailHi: "विनम्र अनुशासन और नियमबद्ध आचरण से कठिन दायित्व भी यश दिलाएँगे",
    drishtiMixedTailHi: "आत्मविश्वास के साथ विनम्र संयम जोड़ने से हर चुनौती अवसर में बदलेगी"
  },
  6: {
    strengthPhraseHi: "सूक्ष्म विश्लेषण, व्यवस्था और कर्मनिष्ठा",
    cautionStyleHi: "अत्यधिक चिंता या छोटी बातों पर उलझने से बचें",
    careerVerbHi: "गुणवत्ता, सटीक योजना और सेवा-भाव से सराहना मिलेगी",
    careerStrongTailHi: "डेटा विश्लेषण, ऑडिट, स्वास्थ्य-सेवा और त्रुटिरहित कार्य-प्रदर्शन से विशेष प्रशंसा मिलेगी",
    careerBalancedTailHi: "व्यवस्थित फाइलिंग, समयबद्ध रिपोर्टिंग और शांत परिश्रम से कार्यक्षेत्र में साख बढ़ेगी",
    careerCautionTailHi: "छोटी कमियों को लेकर अनावश्यक तनाव न पालें और महत्वपूर्ण दस्तावेजों की शांत जाँच करें",
    financeFocusHi: "हिसाब-किताब, कर व बचत योजनाओं की समीक्षा लाभ देगी",
    financeStrongLeadHi: "सूक्ष्म लागत-नियंत्रण, सेवा-शुल्क और पुराने बकाया के सुव्यवस्थित निपटान से लाभ बढ़ेगा",
    financeBalancedLeadHi: "नियमित लेखा-प्रबंधन से आय-व्यय का अनुपात पूर्णतः नियंत्रण में रहेगा",
    financeCautionLeadHi: "कर, बीमा या बिलिंग से जुड़े विवरण अनदेखे करने पर अनावश्यक आर्थिक उलझन हो सकती है",
    familyStrongHi: "घर की सुव्यवस्था, सेवा-भाव और व्यावहारिक सहयोग से परिजनों को विशेष आराम व प्रसन्नता मिलेगी",
    familyBalancedHi: "दैनिक घरेलू योजनाओं में आपकी सूझबूझ से पारिवारिक वातावरण शांत और संतुलित रहेगा",
    familyCautionHi: "अपनों की छोटी त्रुटियाँ निकालने के बजाय सराहना और स्नेहपूर्ण संवाद को प्राथमिकता दें",
    educationStrongHi: "लेखाशास्त्र, विज्ञान, चिकित्सा और प्रतियोगी अभ्यास में सटीक विश्लेषण से उच्च अंक बनेंगे",
    educationCautionHi: "अति-चिंता छोड़कर सीमित पाठ्यक्रम के व्यवस्थित नोट्स बनाना अधिक प्रभावी सिद्ध होगा",
    healthEnergyStrongHi: "सुव्यवस्थित दिनचर्या से शारीरिक संतुलन और कार्यक्षमता स्थिर रहेगी",
    healthEnergyCautionHi: "मानसिक सूक्ष्म-चिंता के कारण उदर-असहजता या पाचन में संवेदनशीलता आ सकती है",
    wellnessHintHi: "रेशेदार सात्त्विक आहार लें, समय पर भोजन करें और संध्या में शांत चहलकदमी करें",
    drishtiBeneficTailHi: "सटीक नियोजन और कर्मनिष्ठा से प्रत्येक कार्य में उत्कृष्ट गुणवत्ता झलकेगी",
    drishtiDisciplineTailHi: "व्यावहारिक क्रमबद्धता और शांत विवेक से जटिल अवरोध सरलता से सुलझेंगे",
    drishtiMixedTailHi: "सूक्ष्म सतर्कता के साथ सकारात्मक लचीलापन रखने पर श्रेष्ठ लाभ सधेगा"
  },
  7: {
    strengthPhraseHi: "संतुलन, कूटनीति और सौहार्दपूर्ण व्यवहार",
    cautionStyleHi: "निर्णय में अनावश्यक दुविधा या टालमटोल से बचें",
    careerVerbHi: "साझेदारी, जनसंपर्क और रचनात्मक तालमेल से उन्नति होगी",
    careerStrongTailHi: "क्लाइंट संबंध, सौम्य मध्यस्थता, डिज़ाइन और व्यापारिक साझेदारी में लाभकारी अनुबंध बनेंगे",
    careerBalancedTailHi: "सहकर्मियों के बीच निष्पक्ष तालमेल और समयसीमा के पालन से कार्य सुचारू आगे बढ़ेगा",
    careerCautionTailHi: "अनिर्णय की स्थिति से बाहर निकलें और किसी तीसरे पक्ष के भरोसे मुख्य कार्य अधूरा न छोड़ें",
    financeFocusHi: "साझा आर्थिक समझौतों व विलासिता व्यय में पारदर्शिता रखें",
    financeStrongLeadHi: "व्यापारिक साझेदारी, कलात्मक उद्यम और ग्राहक-संपर्कों से मधुर आर्थिक लाभ प्राप्त होगा",
    financeBalancedLeadHi: "साझा बजट और व्यक्तिगत आवश्यकताओं के बीच संतुलित अनुपात बना रहेगा",
    financeCautionLeadHi: "दिखावटी विलासिता या अस्पष्ट साझेदारी के भुगतान से कोष पर अतिरिक्त भार आ सकता है",
    familyStrongHi: "दांपत्य जीवन में मधुर सामंजस्य, सामाजिक प्रतिष्ठा और आपसी सम्मान से हृदय प्रफुल्लित रहेगा",
    familyBalancedHi: "जीवनसाथी व कुटुम्ब के साथ समान भाव रखने से घरेलू निर्णय सरलता से तय हो जाएंगे",
    familyCautionHi: "किसी बात को मन में दबाने के बजाय शांत व संतुलित शब्दों में स्पष्ट करना संबंध मजबूत करेगा",
    educationStrongHi: "विधि, कला, वास्तुकला और संवाद-आधारित अध्ययन में संतुलित सोच से विशेष चमक मिलेगी",
    educationCautionHi: "दो विषयों के बीच दुविधा छोड़कर स्पष्ट अध्ययन-क्रम तय करना समय बचाएगा",
    healthEnergyStrongHi: "शारीरिक ताजगी, सौम्य ऊर्जा और मानसिक संतुलन सहज बना रहेगा",
    healthEnergyCautionHi: "वायु-प्रवृत्ति व लगातार बैठकर काम करने से शरीर में हल्की जकड़न व सुस्ती आ सकती है",
    wellnessHintHi: "दिनभर पर्याप्त जल पिएँ, कमर के हल्के आसन करें और कार्य के बीच छोटे विराम लें",
    drishtiBeneficTailHi: "कूटनीतिक सौम्यता और निष्पक्ष सहयोग से लाभदायक संबंध प्रगाढ़ होंगे",
    drishtiDisciplineTailHi: "निर्णायक स्पष्टता और संतुलित सीमाएँ तय करने से कार्य सुदृढ़ बनेंगे",
    drishtiMixedTailHi: "मधुर संवाद के साथ ठोस निर्णय-शक्ति जोड़ने पर परिस्थिति पूर्णतः अनुकूल होगी"
  },
  8: {
    strengthPhraseHi: "दृढ़ संकल्प, गहराई और अनुसंधान क्षमता",
    cautionStyleHi: "गोपनीय तनाव या अनावश्यक संदेह को मन पर हावी न होने दें",
    careerVerbHi: "जटिल चुनौतियों का समाधान और रणनीतिक सफलता संभव है",
    careerStrongTailHi: "गहन शोध, संकट-प्रबंधन, डेटा-सुरक्षा और गुप्त रणनीति से कठिन प्रोजेक्ट में बड़ी जीत मिलेगी",
    careerBalancedTailHi: "अपनी कार्ययोजना को परिपक्व होने तक सीमित रखकर शांत निष्ठा से लक्ष्य पूरा करें",
    careerCautionTailHi: "कार्यालय की गुटबाज़ी व अनावश्यक आशंका से दूर रहकर केवल प्रमाणित तथ्यों पर काम करें",
    financeFocusHi: "गुप्त खर्च, ऋण व साझा वित्त पर सूक्ष्म निगरानी रखें",
    financeStrongLeadHi: "बीमा, शोध, रुके हुए दावों या दीर्घकालिक निवेश से अप्रत्याशित आर्थिक संबल मिल सकता है",
    financeBalancedLeadHi: "सचेत वित्तीय निगरानी और ऋण-नियंत्रण से आर्थिक आधार सुरक्षित बना रहेगा",
    financeCautionLeadHi: "अपरिचित स्रोतों या जोखिमपूर्ण शॉर्टकट में पूँजी लगाने से बचकर सुरक्षित विकल्प चुनें",
    familyStrongHi: "गहरे विश्वास, आत्मीय समर्पण और ससुराल या अंतरंग परिजनों के सहयोग से मन को बल मिलेगा",
    familyBalancedHi: "परिवार के संवेदनशील विषयों को शांत गरिमा से सँभालने पर घर में स्थिरता बनी रहेगी",
    familyCautionHi: "अनुमान के आधार पर संदेह न करें बल्कि सरल व पारदर्शी बातचीत से हर गाँठ सहजता से खोलें",
    educationStrongHi: "विज्ञान, मनोविज्ञान, ज्योतिष, तकनीकी शोध और गूढ़ विषयों में अद्भुत गहराई प्राप्त होगी",
    educationCautionHi: "मानसिक थकान से बचकर कठिन प्रश्नों को छोटे हिस्सों में बाँटकर हल करना लाभप्रद रहेगा",
    healthEnergyStrongHi: "दृढ़ सहनबल से शारीरिक ऊर्जा स्थिर व सक्रिय बनी रहेगी",
    healthEnergyCautionHi: "दबे हुए तनाव या अनियमित विश्राम से रक्त-उष्णता या मानसिक भारीपन महसूस हो सकता है",
    wellnessHintHi: "प्रातः मौन ध्यान व गहरी श्वास का अभ्यास करें तथा अत्यधिक तीखे-तले आहार से परहेज रखें",
    drishtiBeneficTailHi: "अंतर्दृष्टि और अटूट संकल्प से गूढ़ अवसरों का पूरा लाभ प्राप्त होगा",
    drishtiDisciplineTailHi: "गोपनीय धैर्य और संयमित रणनीति से कठिन परिस्थितियाँ आपके पक्ष में मुड़ेंगी",
    drishtiMixedTailHi: "गहन सतर्कता के साथ सहज विश्वास रखने से परिवर्तन लाभकारी सिद्ध होगा"
  },
  9: {
    strengthPhraseHi: "दूरदृष्टि, आशावाद और धर्मनिष्ठ विवेक",
    cautionStyleHi: "अति-आत्मविश्वास में तथ्य जाँचे बिना वादा न करें",
    careerVerbHi: "उच्च शिक्षा, परामर्श, विस्तार और मार्गदर्शन से प्रतिष्ठा बढ़ेगी",
    careerStrongTailHi: "परामर्श, शिक्षण, अंतर-शहर विस्तार और वरिष्ठ मार्गदर्शन से कार्यक्षेत्र में नया मुकाम बनेगा",
    careerBalancedTailHi: "अनुभवी सहयोगियों की सलाह और नैतिक कार्यशैली से दायित्व सम्मानपूर्वक पूर्ण होंगे",
    careerCautionTailHi: "बड़े दावे करने से पहले व्यावहारिक संसाधनों व समयसीमा की वास्तविक समीक्षा कर लें",
    financeFocusHi: "विवेकपूर्ण निवेश और शुभ उद्देश्यों पर संतुलित व्यय रहेगा",
    financeStrongLeadHi: "उच्च संपर्कों, ज्ञान-आधारित सेवा और दीर्घकालिक निवेश से समृद्धि के द्वार खुलेंगे",
    financeBalancedLeadHi: "शुभ व शैक्षणिक उद्देश्यों पर संतुलित खर्च के साथ कोष में स्थिरता बनी रहेगी",
    financeCautionLeadHi: "अत्यधिक आशावाद में आकर बड़े उधार या बिना बजट के विस्तार से दूरी बनाए रखें",
    familyStrongHi: "गुरुजनों के आशीर्वाद, धार्मिक चर्चा और पारिवारिक यात्रा या शुभ प्रसंग से घर में आनंद रहेगा",
    familyBalancedHi: "सकारात्मक दृष्टिकोण और खुलापन परिवार के सभी सदस्यों को प्रेरित व एकजुट रखेगा",
    familyCautionHi: "उपदेशात्मक लहजे से बचकर परिजनों की व्यावहारिक भावनाओं को सरलता से समझें",
    educationStrongHi: "उच्च अध्ययन, दर्शन, विधि, प्रबंधन और प्रतियोगी परीक्षाओं में दूरदर्शी समझ से सफलता मिलेगी",
    educationCautionHi: "बड़े विषयों की रूपरेखा के साथ छोटे तथ्यों का भी नियमित लेखन अभ्यास अवश्य करें",
    healthEnergyStrongHi: "शरीर में स्फूर्ति और मन में सात्त्विक उत्साह बना रहेगा",
    healthEnergyCautionHi: "अति-सक्रियता या अनियमित यात्रा-भोजन से जांघों में खिंचाव या यकृत-मंदता हो सकती है",
    wellnessHintHi: "प्रातः खुले वातावरण में भ्रमण करें, हल्का योग अपनाएँ और गरिष्ठ भोजन से संयम रखें",
    drishtiBeneficTailHi: "धर्मनिष्ठ विवेक और व्यापक दृष्टिकोण से सौभाग्यशाली अवसर प्राप्त होंगे",
    drishtiDisciplineTailHi: "सैद्धांतिक निष्ठा के साथ व्यावहारिक कदम उठाने से दीर्घकालिक लक्ष्य सधेंगे",
    drishtiMixedTailHi: "आशावादी विस्तार और यथार्थवादी सावधानी का संतुलन ही सर्वोत्तम फल देगा"
  },
  10: {
    strengthPhraseHi: "अनुशासन, कर्मठता और दीर्घकालिक लक्ष्य-निष्ठा",
    cautionStyleHi: "कार्यभार के कारण पारिवारिक संवाद की अनदेखी न करें",
    careerVerbHi: "ठोस परिश्रम, जिम्मेदारी और क्रमबद्ध उन्नति का सुफल मिलेगा",
    careerStrongTailHi: "निरंतर कर्मठता, प्रशासनिक अनुशासन और बड़े प्रोजेक्ट की समयबद्ध पूर्ति से स्थायी पद-बल बढ़ेगा",
    careerBalancedTailHi: "क्रमिक योजना और विश्वसनीय कार्य-प्रदर्शन से वरिष्ठों का दीर्घकालिक भरोसा अर्जित होगा",
    careerCautionTailHi: "अत्यधिक कार्यभार अकेले न उठाएँ और सरकारी या अनुबंध नियमों की समयसीमा का कड़ाई से पालन करें",
    financeFocusHi: "स्थिर संपत्ति, बचत और क्रमशः पूँजी निर्माण पर बल रहेगा",
    financeStrongLeadHi: "परिश्रम से अर्जित आय, उद्योग-व्यापार और सुरक्षित दीर्घकालिक बचत में ठोस बढ़ोतरी होगी",
    financeBalancedLeadHi: "मितव्ययी दृष्टिकोण और क्रमबद्ध पूँजी संचय से आर्थिक सुरक्षा मजबूत बनी रहेगी",
    financeCautionLeadHi: "तात्कालिक लाभ के प्रलोभन से बचें और पुराने वित्तीय दायित्व समय पर निपटाएँ",
    familyStrongHi: "बुजुर्गों के सम्मान, जिम्मेदार आचरण और ठोस सहारे से परिवार में गहरा भरोसा व शांति रहेगी",
    familyBalancedHi: "व्यस्तता के बावजूद पारिवारिक कर्तव्यों का निष्ठापूर्वक निर्वाह अपनों को संतुष्ट रखेगा",
    familyCautionHi: "काम की गंभीरता घर पर न लाकर अपनों के साथ थोड़ा सहज और आत्मीय समय अवश्य बिताएँ",
    educationStrongHi: "अभियांत्रिकी, प्रशासन, इतिहास और दीर्घकालिक प्रतियोगी लक्ष्य में अनुशासित अभ्यास रंग लाएगा",
    educationCautionHi: "कठिन विषयों से घबराए बिना प्रतिदिन निश्चित घंटों का नियमित अभ्यास निरंतर जारी रखें",
    healthEnergyStrongHi: "नियमित दिनचर्या से शारीरिक सहनशक्ति और अस्थि-बल सुदृढ़ बना रहेगा",
    healthEnergyCautionHi: "अधिक श्रम या ठंडी प्रवृत्ति से घुटनों, जोड़ों या पीठ में जकड़न अनुभव हो सकती है",
    wellnessHintHi: "जोड़ों के लिए सूक्ष्म व्यायाम करें, पर्याप्त रात्रि विश्राम लें और कार्य के बीच स्ट्रेचिंग करें",
    drishtiBeneficTailHi: "सुदृढ़ कर्मयोग और धैर्यपूर्ण निष्ठा से स्थायी मान-प्रतिष्ठा अर्जित होगी",
    drishtiDisciplineTailHi: "समयबद्ध परिश्रम और नियमबद्ध योजना ही सभी चुनौतियों को सफलता में बदलेगी",
    drishtiMixedTailHi: "दृढ़ अनुशासन के साथ सहज लचीलापन रखने से परिणाम अत्यंत अनुकूल रहेंगे"
  },
  11: {
    strengthPhraseHi: "नवीन दृष्टिकोण, मानवीय सोच और स्वतंत्र विचार",
    cautionStyleHi: "योजनाओं को केवल विचार तक सीमित न रखकर क्रियान्वयन करें",
    careerVerbHi: "नवाचार, तकनीक, समूह-कार्य और नेटवर्क विस्तार से लाभ मिलेगा",
    careerStrongTailHi: "आधुनिक तकनीक, स्टार्टअप पहल, टीम-नेटवर्क और रचनात्मक प्रयोगों से उल्लेखनीय प्रगति होगी",
    careerBalancedTailHi: "स्मार्ट कार्य-पद्धति और मित्र-सहयोगियों के समन्वय से नए कौशल का व्यावहारिक उपयोग होगा",
    careerCautionTailHi: "केवल विचार-मंथन में समय न गँवाएँ और किसी अपरीक्षित योजना पर बिना जाँच कदम न बढ़ाएँ",
    financeFocusHi: "आय के नए स्रोतों व मित्र-सहयोग के साथ बजट-संयम जरूरी है",
    financeStrongLeadHi: "नेटवर्क विस्तार, तकनीकी सेवाओं और सामूहिक उद्यम से आय के नए द्वार खुलेंगे",
    financeBalancedLeadHi: "नियमित आमदनी स्थिर रहेगी और भविष्य की बचत योजनाओं में नया विचार जुड़ेगा",
    financeCautionLeadHi: "मित्रों के प्रभाव में आकर बिना शोध के निवेश या अनियोजित खर्च से सावधान रहें",
    familyStrongHi: "मित्रों, बड़े भाई-बहनों और परिवार के साथ खुले व प्रगतिशील संवाद से संबंधों में नई ऊर्जा आएगी",
    familyBalancedHi: "सामूहिक चर्चा और आपसी स्वतंत्रता का सम्मान घर में सौहार्दपूर्ण संतुलन बनाए रखेगा",
    familyCautionHi: "परिवार के पारंपरिक विचारों के प्रति संवेदनशील रहें और भावनात्मक जुड़ाव बनाए रखें",
    educationStrongHi: "कंप्यूटर विज्ञान, नवाचार, सामाजिक शोध और सामूहिक अध्ययन में मौलिक सोच से सफलता मिलेगी",
    educationCautionHi: "विचारों की बहुलता को समेटकर मुख्य पाठ्यक्रम की समयबद्ध लिखित तैयारी पर ध्यान दें",
    healthEnergyStrongHi: "सचेत दिनचर्या से मानसिक ताजगी व शारीरिक सक्रियता उत्तम रहेगी",
    healthEnergyCautionHi: "अनियमित दिनचर्या या देर तक जागने से पिंडलियों में थकान या रक्त-संचार में सुस्ती आ सकती है",
    wellnessHintHi: "नियमित तेज कदम टहलें, गहरी श्वास लें और समय पर सोकर स्नायु-तंत्र को विश्राम दें",
    drishtiBeneficTailHi: "मौलिक सोच और व्यापक जनसंपर्क से नए लाभकारी अवसर सहजता से जुड़ेंगे",
    drishtiDisciplineTailHi: "विचारों को ठोस समय-सीमा और व्यावहारिक क्रियान्वयन से जोड़ने पर सफलता निश्चित है",
    drishtiMixedTailHi: "नवीन प्रयोगों के साथ अनुभवी परामर्श लेने से जोखिम घटकर लाभ बढ़ेगा"
  },
  12: {
    strengthPhraseHi: "करुणा, कल्पनाशीलता और आध्यात्मिक परिपक्वता",
    cautionStyleHi: "व्यावहारिक सीमाएँ स्पष्ट रखें और भावुक होकर निर्णय न लें",
    careerVerbHi: "रचनात्मकता, परामर्श, सेवा और दूरस्थ संपर्कों से उन्नति होगी",
    careerStrongTailHi: "कलात्मक अभिव्यक्ति, परामर्श, सेवा-संस्थान और विदेशी या दूरस्थ संपर्कों से शुभ उन्नति होगी",
    careerBalancedTailHi: "शांत एकाग्रता और पारदर्शी कार्यशैली से जटिल दायित्व भी सरलता से पूर्ण हो जाएंगे",
    careerCautionTailHi: "अस्पष्ट निर्देशों को कार्य प्रारंभ करने से पहले लिखकर स्पष्ट करें और आँख मूँदकर भरोसा न करें",
    financeFocusHi: "अप्रत्याशित खर्च नियंत्रित कर बचत को सुरक्षित रखें",
    financeStrongLeadHi: "दूरस्थ व्यापार, रचनात्मक कला या सलाहकारी सेवाओं से सुखद आर्थिक आगमन के संकेत हैं",
    financeBalancedLeadHi: "सत्कर्म व आवश्यकताओं पर विवेकपूर्ण व्यय के साथ संचित धन सुरक्षित रहेगा",
    financeCautionLeadHi: "अचानक आने वाले व्यय या भावुक दान-उधार से पहले अपने कोष की सीमा अवश्य देख लें",
    familyStrongHi: "आध्यात्मिक शांति, करुणापूर्ण व्यवहार और जीवनसाथी की आत्मीयता से घर में पावन सुख रहेगा",
    familyBalancedHi: "कोमल सहानुभूति और शांत श्रवण से परिजनों के बीच भावनात्मक निकटता बनी रहेगी",
    familyCautionHi: "अनावश्यक कल्पना या चिंता से मन भारी न करें और व्यावहारिक स्पष्टता के साथ संवाद रखें",
    educationStrongHi: "कला, संगीत, साहित्य, आध्यात्मिक अध्ययन और गहन चिंतन में शांत एकाग्रता से उत्कर्ष मिलेगा",
    educationCautionHi: "दिवास्वप्न छोड़कर शांत वातावरण में लिखकर अभ्यास करने से विषय दृढ़ता से याद रहेंगे",
    healthEnergyStrongHi: "आंतरिक शांति, हल्कापन और प्राण-ऊर्जा का संतुलन बना रहेगा",
    healthEnergyCautionHi: "अत्यधिक भावनात्मक संवेदनशीलता से प्राणशक्ति में हल्की सुस्ती या आलस्य अनुभव हो सकता है",
    wellnessHintHi: "पैरों की देखभाल व मालिश करें, रात्रि में शांत ध्यान लगाएँ और समय पर विश्राम लें",
    drishtiBeneficTailHi: "आध्यात्मिक विवेक और रचनात्मक अंतर्दृष्टि से शुभ मार्ग प्रशस्त होगा",
    drishtiDisciplineTailHi: "भावुकता के स्थान पर स्पष्ट व्यावहारिक नियम अपनाने से कार्य सुरक्षित सधेंगे",
    drishtiMixedTailHi: "करुणा और यथार्थवादी सीमाओं का सुंदर संगम आपके प्रयासों को सफल बनाएगा"
  }
};
function getRashiVoiceHi(rashiNumber) {
  const idx = ((Math.round(rashiNumber) - 1) % 12 + 12) % 12 + 1;
  return RASHI_VOICE_PROFILES[idx] || RASHI_VOICE_PROFILES[1];
}
function buildVariedDailyCareerOpeningHi(params) {
  const { rashiNumber, rashiNameHi, karmeshNameHi, karmeshCondHi, karmeshHouseOrdHi } = params;
  const k = `${karmeshNameHi}${karmeshCondHi}`.trim();
  const idx = ((Math.round(rashiNumber) - 1) % 12 + 12) % 12 + 1;
  switch (idx) {
    case 1:
      return `${rashiNameHi} राशि के दशमेश ${k} इस समय ${karmeshHouseOrdHi} भाव में संचरण कर रहे हैं।`;
    case 2:
      return `कार्यक्षेत्र के स्वामी ${k} के ${karmeshHouseOrdHi} भाव में स्थित होने से ${rashiNameHi} जातकों की पेशेवर दिशा स्पष्ट रहेगी।`;
    case 3:
      return `व्यावसायिक व नौकरी पक्ष में कर्मेश ${k} का ${karmeshHouseOrdHi} भाव गोचर ${rashiNameHi} के लिए महत्वपूर्ण संकेत दे रहा है।`;
    case 4:
      return `कर्मभाव के अधिपति ${k} आज ${rashiNameHi} से ${karmeshHouseOrdHi} भाव में रहकर कार्यप्रणाली को गति दे रहे हैं।`;
    case 5:
      return `आजीविका व पद-प्रतिष्ठा के कारक कर्मेश ${k} का ${karmeshHouseOrdHi} भाव में निवास ${rashiNameHi} जातकों के प्रयासों को दिशा देगा।`;
    case 6:
      return `${rashiNameHi} के लिए दशम भाव के स्वामी ${k} आज ${karmeshHouseOrdHi} भाव से कार्यकौशल को प्रभावित कर रहे हैं।`;
    case 7:
      return /नीचस्थ|अस्त/u.test(karmeshCondHi) ? `नौकरी व साझेदारी के क्षेत्र में कर्मेश ${k} की ${karmeshHouseOrdHi} भाव स्थिति ${rashiNameHi} जातकों से सधे हुए संतुलन की अपेक्षा रखती है।` : `नौकरी व साझेदारी के क्षेत्र में कर्मेश ${k} की ${karmeshHouseOrdHi} भाव स्थिति ${rashiNameHi} जातकों हेतु महत्वपूर्ण भूमिका निभा रही है।`;
    case 8:
      return `कार्यसिद्धि के स्वामी ${k} का ${rashiNameHi} से ${karmeshHouseOrdHi} भाव में गोचर रणनीतिक अवसर निर्मित कर रहा है।`;
    case 9:
      return `दशमेश ${k} आज ${rashiNameHi} राशि से ${karmeshHouseOrdHi} भाव में विराजमान होकर व्यावसायिक विस्तार को दिशा दे रहे हैं।`;
    case 10:
      return `कर्म-प्रधान ${rashiNameHi} राशि हेतु दशमेश ${k} का ${karmeshHouseOrdHi} भाव संचरण ठोस कार्यनिष्ठा की मांग कर रहा है।`;
    case 11:
      return `पेशेवर उन्नति के अधिपति कर्मेश ${k} आज ${karmeshHouseOrdHi} भाव में रहकर ${rashiNameHi} जातकों के लिए नए समीकरण बना रहे हैं।`;
    case 12:
    default:
      return `कार्यभाव के स्वामी ${k} के ${karmeshHouseOrdHi} भाव में गोचर से ${rashiNameHi} जातकों के व्यवसाय व सेवा-क्षेत्र में स्पष्ट गति दिखेगी।`;
  }
}
function buildHouseDrishtiNoteHi(analysis, targetHouse, context, usedDrishtiPlanets) {
  const rawAspectors = Array.from(new Set(analysis.houseAspectsReceived[targetHouse] || [])).filter(
    (g) => g !== "rahu" && g !== "ketu" && (context === "daily" || g !== "moon") && (!usedDrishtiPlanets || !usedDrishtiPlanets.has(g))
  );
  if (rawAspectors.length === 0) return "";
  const benefics = [];
  const strictOrCaution = [];
  const maleficSet = /* @__PURE__ */ new Set(["saturn", "mars", "rahu", "ketu"]);
  for (const g of rawAspectors) {
    const t = analysis.transits[g];
    if (!t) continue;
    const mercuryAfflicted = g === "mercury" && t.conjunctWith.some((c) => maleficSet.has(c));
    const moonKsheena = g === "moon" && analysis.snapshot.moonPaksha.isKsheena;
    if (t.functionalRole === "YOGAKARAKA") {
      benefics.push(g);
    } else if (g === "rahu" || g === "ketu") {
      strictOrCaution.push(g);
    } else if (g === "sun") {
      if (t.isFunctionalBenefic && !t.isMaraka) {
        benefics.push(g);
      } else {
        strictOrCaution.push(g);
      }
    } else if (g === "moon") {
      if (moonKsheena || t.isMaraka || t.functionalRole === "DUSTHANA") {
        strictOrCaution.push(g);
      } else {
        benefics.push(g);
      }
    } else if (g === "jupiter" || g === "venus" || g === "mercury") {
      if (mercuryAfflicted || t.isMaraka || t.functionalRole === "DUSTHANA") {
        strictOrCaution.push(g);
      } else {
        benefics.push(g);
      }
    } else {
      if (t.isFunctionalBenefic && !t.isMaraka && t.isEffectiveFavorable) {
        benefics.push(g);
      } else {
        strictOrCaution.push(g);
      }
    }
  }
  const ord = houseOrdHi(targetHouse);
  const voice = getRashiVoiceHi(analysis.moonSign.number);
  const rashiLabel = analysis.moonSign.nameHi;
  const scopePrefix = context === "daily" ? "आज " : context === "weekly" ? "इस सप्ताह " : "इस माह ";
  const lockedCond = buildLockedGrahaConditionMap(analysis);
  const labelGraha = (g) => {
    const t = analysis.transits[g];
    const cond = lockedCond[g] || "";
    if (t?.functionalRole === "YOGAKARAKA") {
      return `योगकारक ${GRAHA_NAMES[g].shortHi}${cond}`;
    }
    return `${GRAHA_NAMES[g].shortHi}${cond}`;
  };
  if (usedDrishtiPlanets) {
    for (const g of [...benefics, ...strictOrCaution]) {
      usedDrishtiPlanets.add(g);
    }
  }
  const WEALTH_DRISHTI_TAILS = {
    1: {
      benefic: "नकद प्रवाह में सुधार और अवरुद्ध भुगतान प्राप्त होने के सुदृढ़ योग बन रहे हैं",
      discipline: "तात्कालिक क्रय-विक्रय पर अंकुश रखकर संचित पूँजी की रक्षा करना आवश्यक है",
      mixed: "आमदनी के नए द्वार खुलने के साथ-साथ बजट के कड़े नियम अपनाना लाभप्रद रहेगा"
    },
    2: {
      benefic: "स्थायी संपत्ति, सुरक्षित कोष और दीर्घकालिक निवेश में उत्तम अभिवृद्धि के संकेत हैं",
      discipline: "भूमि, बचत या उधारी से जुड़े दस्तावेज़ों की सूक्ष्म जाँच किए बिना कदम न बढ़ाएँ",
      mixed: "नियमित धन-संचय के बीच दिखावटी खर्चों पर नियंत्रण रखने से आर्थिक संतुलन बना रहेगा"
    },
    3: {
      benefic: "वाणिज्यिक अनुबंध, परामर्श व बहु-स्रोत आय से कोष में संतोषजनक वृद्धि होगी",
      discipline: "वित्तीय लेन-देन में मौखिक आश्वासनों के बजाय लिखित लेखा-जोखा प्राथमिकता पर रखें",
      mixed: "नए आर्थिक अवसरों का स्वागत करते हुए अस्थिर योजनाओं से पूँजी सुरक्षित रखें"
    },
    4: {
      benefic: "पारिवारिक संसाधन, बचत योजनाओं और गृह-संपत्ति से सुखद आर्थिक सुदृढ़ता प्राप्त होगी",
      discipline: "भावनात्मक उदारता में आकर निर्धारित मासिक बजट से अधिक व्यय न होने दें",
      mixed: "सुख-सुविधाओं पर खर्च और आपातकालीन निधि के बीच विवेकपूर्ण तालमेल आवश्यक रहेगा"
    },
    5: {
      benefic: "प्रतिष्ठित स्रोतों, सरकारी अनुबंध या स्वाभिमानपूर्ण उद्यम से धनलाभ के योग प्रबल हैं",
      discipline: "सामाजिक प्रदर्शन या प्रतिष्ठा से जुड़े अनावश्यक व्यय को संयमित रखना श्रेयस्कर है",
      mixed: "उच्च आय की संभावनाओं के साथ कर, बिलिंग व निवेश अनुशासन बनाए रखें"
    },
    6: {
      benefic: "सूक्ष्म वित्तीय नियोजन, बकाया वसूली और लागत-बचत से शुद्ध संचय में स्पष्ट वृद्धि होगी",
      discipline: "खाता-बही, कर अनुपालन और छोटे-छोटे छिपे व्ययों पर पैनी दृष्टि रखना अनिवार्य है",
      mixed: "सटीक विश्लेषण से आर्थिक लाभ मिलेगा, पर जोखिमपूर्ण ऋण-व्यवहार से दूरी बनाए रखें"
    },
    7: {
      benefic: "साझेदारी व्यापार, क्लाइंट अनुबंध और कला-सौंदर्य क्षेत्र से मधुर धन-प्रवाह बनेगा",
      discipline: "संयुक्त खातों या साझेदारी के हिसाब-किताब में पूर्ण पारदर्शिता बनाए रखना आवश्यक है",
      mixed: "आकर्षक आर्थिक प्रस्तावों को स्वीकार करने से पूर्व उनकी शर्तों का संतुलित मूल्यांकन करें"
    },
    8: {
      benefic: "पूर्व निवेश, बीमा, शोध या अप्रत्याशित स्रोतों से लाभप्रद आर्थिक उपलब्धि के संकेत हैं",
      discipline: "गोपनीय लेन-देन, जल्दबाज़ी के सट्टे या अनजान निवेश से धन को सुरक्षित बचाकर रखें",
      mixed: "गहन समीक्षा के बाद लिया गया वित्तीय निर्णय दीर्घकालिक कोष को मजबूत करेगा"
    },
    9: {
      benefic: "भाग्य-सहयोग, शैक्षणिक-परामर्श या दूरस्थ व्यापार से समृद्धि के मार्ग प्रशस्त होंगे",
      discipline: "विस्तार योजनाओं या यात्रा-व्यय के लिए व्यावहारिक वित्तीय सीमा पहले से तय रखें",
      mixed: "धार्मिक व शुभ कार्यों पर व्यय के साथ दीर्घकालिक बचत का सुदृढ़ संतुलन बनाए रखें"
    },
    10: {
      benefic: "सतत परिश्रम, औद्योगिक अनुबंध और अनुशासित बचत से कोष में ठोस स्थायित्व आएगा",
      discipline: "धीमी भुगतान गति को देखकर धैर्य न खोएँ और पूँजी को केवल विश्वसनीय साधनों में रखें",
      mixed: "कठोर श्रम से आय बढ़ेगी, किंतु दीर्घकालिक देनदारियों का नियोजन समय पर कर लें"
    },
    11: {
      benefic: "आधुनिक तकनीक, नेटवर्क-व्यापार और अभिनव योजनाओं से आय के नए आयाम विकसित होंगे",
      discipline: "प्रलोभनकारी त्वरित लाभ वाली योजनाओं से बचकर प्रमाणित वित्तीय पथ चुनें",
      mixed: "नवीन आर्थिक विचारों को लागू करने से पहले नकद-प्रवाह की वास्तविक गणना जाँच लें"
    },
    12: {
      benefic: "विदेशी संपर्क, रचनात्मक सेवा और सात्त्विक उद्यम से संतोषजनक धन-संतुलन प्राप्त होगा",
      discipline: "आकस्मिक खर्चों और अनियोजित दान-व्यय पर विवेकपूर्ण नियंत्रण रखना हितकारी रहेगा",
      mixed: "आय व व्यय के मध्य स्पष्ट सीमा रेखा खींचकर सुरक्षित भविष्य निधि को प्राथमिकता दें"
    }
  };
  const FAMILY_DRISHTI_TAILS = {
    1: {
      benefic: "जीवनसाथी व कुटुम्ब के साथ आत्मीय संवाद और उत्साहपूर्ण सहयोग से गृह-सुख बढ़ेगा",
      discipline: "पारिवारिक चर्चाओं में त्वरित आवेश के स्थान पर सौम्य श्रोता बनना संबंधों को संवारेगा",
      mixed: "गृहस्थी में स्नेह बना रहेगा, बस छोटी बातों पर अधीर प्रतिक्रिया देने से बचें"
    },
    2: {
      benefic: "कुटुम्ब में सौहार्द, मधुर आतिथ्य और दांपत्य विश्वास में प्रगाढ़ता अनुभव होगी",
      discipline: "अपनों के विचारों के प्रति हठ त्यागकर लचीलापन अपनाने से घरेलू शांति सुरक्षित रहेगी",
      mixed: "परिजनों का सहयोग मिलने के साथ संवेदनशील घरेलू विषयों को धीमे और शांत स्वर में सुलझाना श्रेष्ठ रहेगा"
    },
    3: {
      benefic: "भाई-बंधुओं व जीवनसाथी के संग खुले संवाद से पारिवारिक आनंद और अपनापन बढ़ेगा",
      discipline: "अधूरी बात या शीघ्र अनुमान लगाने से बचकर स्पष्ट व विनम्र वार्तालाप बनाए रखें",
      mixed: "सामाजिक मिलन सुखद रहेगा, पर घरेलू दायित्वों में एकाग्र उपस्थिति आवश्यक रहेगी"
    },
    4: {
      benefic: "मातृ-पक्ष के आशीर्वाद और भावनात्मक अपनत्व से घर का वातावरण अत्यंत शांत व सुखद रहेगा",
      discipline: "पुराने संवेदनशील प्रसंगों को कुरेदने के बजाय क्षमा व करुणा का भाव अपनाएँ",
      mixed: "गृह-परिवार में गहरा स्नेह रहेगा, किंतु मन की बात संकोच छोड़कर सहजता से साझा करें"
    },
    5: {
      benefic: "वरिष्ठजनों के सम्मान और जीवनसाथी के साथ सौहार्दपूर्ण निर्णयों से पारिवारिक गौरव बढ़ेगा",
      discipline: "रिश्तों में स्वाभिमान की जिद के स्थान पर विनम्रता व आदर का व्यवहार सर्वोपरि रखें",
      mixed: "घर में उत्सवपूर्ण ऊर्जा के बीच सभी सदस्यों के मत को समान महत्व देना श्रेयस्कर रहेगा"
    },
    6: {
      benefic: "व्यावहारिक देखभाल और परस्पर समझदारी से दांपत्य व पारिवारिक तालमेल अत्यंत मधुर रहेगा",
      discipline: "परिजनों की छोटी त्रुटियों की सूक्ष्म आलोचना छोड़कर प्रोत्साहन भरी वाणी बोलें",
      mixed: "गृह-व्यवस्था सुचारु रहेगी, बस रिश्तों में पूर्णतावाद के बजाय सहज स्नेह को स्थान दें"
    },
    7: {
      benefic: "दांपत्य जीवन में मधुर समरसता और सामाजिक संबंधों में आत्मीय सम्मान की वृद्धि होगी",
      discipline: "घरेलू निर्णयों में दुविधा छोड़कर जीवनसाथी के साथ एकमत संवाद स्थापित करें",
      mixed: "साझेदारी व रिश्तों में सौहार्द बनाए रखने के लिए संतुलित समय-विभाजन पर ध्यान दें"
    },
    8: {
      benefic: "अंतरंग विश्वास और पारिवारिक निष्ठा के बल पर कठिन घरेलू विषय सरलता से सुलझेंगे",
      discipline: "रिश्तों में अनावश्यक संदेह या मौन दूरी के बजाय सरल हृदय से संवाद करना कल्याणकारी है",
      mixed: "अपनों का गहरा संबल प्राप्त होगा, बस तीक्ष्ण कटाक्ष से पूर्णतः परहेज रखें"
    },
    9: {
      benefic: "गुरुजनों के सान्निध्य, मांगलिक चर्चा और साझा मूल्यों से परिवार में प्रसन्नता छाई रहेगी",
      discipline: "अपने सिद्धांतों को थोपने के बजाय परिजनों के दृष्टिकोण को भी आदरपूर्वक सुनें",
      mixed: "घर के सकारात्मक व आध्यात्मिक वातावरण में परस्पर वचनों का निष्ठापूर्वक पालन करना लाभप्रद है"
    },
    10: {
      benefic: "बुजुर्गों के मार्गदर्शन और उत्तरदायित्वपूर्ण व्यवहार से कुटुम्ब में स्थायी सौहार्द बनेगा",
      discipline: "कार्यव्यस्तता के बावजूद जीवनसाथी व संतान के लिए आत्मीय समय निकालना अनिवार्य है",
      mixed: "पारिवारिक दायित्व सफलतापूर्वक निभेंगे, बस संवाद में शुष्कता के बजाय कोमलता रखें"
    },
    11: {
      benefic: "मित्रों, स्वजनों व जीवनसाथी के साथ नवीन विचारों के आदान-प्रदान से रिश्तों में ताजगी आएगी",
      discipline: "सामाजिक व्यस्तताओं के बीच निकटतम परिजनों की भावनात्मक अपेक्षाओं की उपेक्षा न करें",
      mixed: "परिवार में स्वतंत्र सोच का सम्मान रहेगा, किंतु साझा निर्णयों में सर्वसम्मति बनाए रखें"
    },
    12: {
      benefic: "करुणा, सहानुभूति और शांत सान्निध्य से दांपत्य व पारिवारिक जीवन में गहरा सुकून मिलेगा",
      discipline: "अति-भावुक होकर भीतर बात दबाने के बजाय विनम्रता से स्पष्ट संवाद स्थापित करें",
      mixed: "गृहस्थी की आध्यात्मिक शांति बनाए रखने हेतु बाहरी हस्तक्षेप से घरेलू निर्णयों को सुरक्षित रखें"
    }
  };
  const rNum = ((Math.round(analysis.moonSign.number) - 1) % 12 + 12) % 12 + 1;
  const tailSource = targetHouse === 2 ? WEALTH_DRISHTI_TAILS[rNum] || WEALTH_DRISHTI_TAILS[1] : targetHouse === 7 ? FAMILY_DRISHTI_TAILS[rNum] || FAMILY_DRISHTI_TAILS[1] : {
    benefic: voice.drishtiBeneficTailHi,
    discipline: voice.drishtiDisciplineTailHi,
    mixed: voice.drishtiMixedTailHi
  };
  const combustInBenefics = benefics.filter((g) => analysis.transits[g].graha.isCombust);
  const combustInStrict = strictOrCaution.filter((g) => analysis.transits[g].graha.isCombust);
  const anyBeneficCombust = combustInBenefics.length > 0;
  const anyStrictCombust = combustInStrict.length > 0;
  if (benefics.length > 0 && strictOrCaution.length === 0) {
    const names = benefics.map(labelGraha).join(" व ");
    const beneficTail = anyBeneficCombust ? tailSource.benefic.replace(/प्रबल|अत्यंत शुभ/gu, "मध्यम") : tailSource.benefic;
    const aspectPhrase = anyBeneficCombust ? "की मध्यम/संयमित दृष्टि" : "की शुभ पूर्ण दृष्टि";
    return `${scopePrefix}${names} ${aspectPhrase} ${rashiLabel} राशि के ${ord} भाव पर पड़ रही है, जिससे ${beneficTail}।`;
  }
  if (strictOrCaution.length > 0 && benefics.length === 0) {
    const names = strictOrCaution.map(labelGraha).join(" व ");
    const aspectPhrase = anyStrictCombust ? "की मध्यम/संयमित दृष्टि" : "की पूर्ण दृष्टि";
    return `${rashiLabel} राशि के ${ord} भाव पर ${names} ${aspectPhrase} का संकेत है कि ${tailSource.discipline}।`;
  }
  if (benefics.length > 0 && strictOrCaution.length > 0) {
    const bNames = benefics.map(labelGraha).join(" व ");
    const mNames = strictOrCaution.map(labelGraha).join(" व ");
    const bAspect = anyBeneficCombust ? "की मध्यम/संयमित दृष्टि" : "की शुभ दृष्टि";
    const mAspect = anyStrictCombust ? "की मध्यम/संयमित दृष्टि" : "की पूर्ण दृष्टि";
    const mixedTail = anyBeneficCombust || anyStrictCombust ? tailSource.mixed.replace(/प्रबल/gu, "संतुलित") : tailSource.mixed;
    return `${rashiLabel} राशि के ${ord} भाव पर ${bNames} ${bAspect} के साथ ${mNames} ${mAspect} होने से ${mixedTail}।`;
  }
  return "";
}
const GRAHA_COLOR_NUMBER_MAP = {
  sun: { primaryColorHi: "सुनहरा केसरिया", secondaryColorHi: "ताम्र लाल", avoidColorHi: "गहरा काला", primaryNum: 1, allyNums: [3, 9] },
  moon: { primaryColorHi: "मोती श्वेत", secondaryColorHi: "हल्का क्रीम", avoidColorHi: "गहरा स्लेटी", primaryNum: 2, allyNums: [1, 7] },
  mars: { primaryColorHi: "सिंदूरी लाल", secondaryColorHi: "केसरिया", avoidColorHi: "गहरा हरा", primaryNum: 9, allyNums: [3, 1] },
  mercury: { primaryColorHi: "पन्ना हरा", secondaryColorHi: "हल्का फिरोजी", avoidColorHi: "गहरा सिंदूरी", primaryNum: 5, allyNums: [6, 1] },
  jupiter: { primaryColorHi: "स्वर्णिम पीला", secondaryColorHi: "हल्दी पीला", avoidColorHi: "गहरा नीला", primaryNum: 3, allyNums: [6, 1] },
  venus: { primaryColorHi: "रेशमी श्वेत", secondaryColorHi: "हल्का गुलाबी", avoidColorHi: "गहरा कत्थई", primaryNum: 6, allyNums: [8, 5] },
  saturn: { primaryColorHi: "आसमानी नीला", secondaryColorHi: "गहरा नीला", avoidColorHi: "चटक लाल", primaryNum: 8, allyNums: [6, 5] },
  rahu: { primaryColorHi: "धूसर नीला", secondaryColorHi: "हल्का बैंगनी", avoidColorHi: "अत्यधिक चटक नारंगी", primaryNum: 4, allyNums: [6, 8] },
  ketu: { primaryColorHi: "गेरुआ केसरिया", secondaryColorHi: "हल्का पीला", avoidColorHi: "अत्यधिक गहरा काला", primaryNum: 7, allyNums: [3, 9] }
};
const ELEMENT_DIRECTION_HI = {
  FIRE: "पूर्व एवं ईशान दिशा",
  EARTH: "दक्षिण एवं आग्नेय दिशा",
  AIR: "पश्चिम एवं वायव्य दिशा",
  WATER: "उत्तर एवं ईशान दिशा"
};
function deriveLogicalLuckyAttributes(params) {
  const { moonSign, analysis, period, weekdayLord, dishaShoolHi } = params;
  const signLord = moonSign.lord;
  const primaryMeta = GRAHA_COLOR_NUMBER_MAP[signLord];
  const luckyColorHi = `${primaryMeta.primaryColorHi} एवं ${primaryMeta.secondaryColorHi}`;
  const numberPool = Array.from(/* @__PURE__ */ new Set([primaryMeta.primaryNum, ...primaryMeta.allyNums])).slice(0, 3);
  let favorableDirectionHi = signLord === "venus" ? "पश्चिम, आग्नेय एवं उत्तर" : ELEMENT_DIRECTION_HI[moonSign.element];
  if (period === "daily" && dishaShoolHi) {
    if (signLord === "venus") {
      if (dishaShoolHi.includes("पश्चिम")) {
        favorableDirectionHi = "आग्नेय एवं उत्तर दिशा (पश्चिम में दिशाशूल से बचें)";
      } else if (dishaShoolHi.includes("उत्तर")) {
        favorableDirectionHi = "पश्चिम एवं आग्नेय दिशा (उत्तर में दिशाशूल से बचें)";
      } else if (dishaShoolHi.includes("पूर्व")) {
        favorableDirectionHi = "पश्चिम एवं उत्तर दिशा (पूर्व में दिशाशूल से बचें)";
      } else if (dishaShoolHi.includes("दक्षिण")) {
        favorableDirectionHi = "पश्चिम एवं उत्तर दिशा (दक्षिण में दिशाशूल से बचें)";
      }
    } else if (dishaShoolHi.includes("पूर्व") && favorableDirectionHi.includes("पूर्व")) {
      favorableDirectionHi = "उत्तर एवं दक्षिण दिशा (पूर्व में दिशाशूल से बचें)";
    } else if (dishaShoolHi.includes("दक्षिण") && favorableDirectionHi.includes("दक्षिण")) {
      favorableDirectionHi = "पूर्व एवं उत्तर दिशा (दक्षिण में दिशाशूल से बचें)";
    } else if (dishaShoolHi.includes("पश्चिम") && favorableDirectionHi.includes("पश्चिम")) {
      favorableDirectionHi = "उत्तर एवं पूर्व दिशा (पश्चिम में दिशाशूल से बचें)";
    } else if (dishaShoolHi.includes("उत्तर") && favorableDirectionHi.includes("उत्तर")) {
      favorableDirectionHi = "पूर्व एवं पश्चिम दिशा (उत्तर में दिशाशूल से बचें)";
    }
  }
  const reasoningHi = `राशि स्वामी ${GRAHA_NAMES[signLord].shortHi} के शास्त्रीय तत्व व अनुकूल अंक-रंग सिद्धांत पर आधारित`;
  return {
    luckyColorHi,
    avoidColorHi: primaryMeta.avoidColorHi,
    luckyNumbers: numberPool,
    luckyNumbersDisplay: numberPool.join(", "),
    favorableDirectionHi,
    reasoningHi
  };
}
const RASHI_UNIQUE_REMEDY_MATRIX = {
  1: {
    deityHi: "श्री हनुमान जी",
    worshipHi: "प्रातः श्री हनुमान जी को सिंदूर-चमेली अर्पित कर हनुमान चालीसा का पाठ करें तथा मस्तक पर लाल चंदन का तिलक धारण करें",
    daanHi: "लाल मसूर की दाल, गुड़ या अनार किसी जरूरतमंद को श्रद्धापूर्वक भेंट करें",
    cautionBalanceHi: "मंगल-ऊर्जा के शांत संतुलन हेतु लाल पुष्प जल में प्रवाहित कर धैर्य व सौम्य संकल्प बनाए रखें",
    mantraHi: "ॐ क्रां क्रीं क्रौं सः भौमाय नमः",
    habitHi: "आवेग पर संयम रखकर प्रातःकालीन सूर्य-नमस्कार से दिन आरंभ करें"
  },
  2: {
    deityHi: "माँ महालक्ष्मी",
    worshipHi: "माँ महालक्ष्मी के समक्ष गाय के शुद्ध घी का दीपक जलाकर श्री सूक्त का स्मरण करें तथा सुगंधित श्वेत पुष्प अर्पित करें",
    daanHi: "श्वेत चावल, मिश्री या गो-सेवा हेतु हरी घास का सात्त्विक समर्पण करें",
    cautionBalanceHi: "शुक्र-संतुलन हेतु पूजा-स्थल में कर्पूर-सुगंध प्रज्वलित कर हठ त्यागने का संकल्प लें",
    mantraHi: "ॐ द्रां द्रीं द्रौं सः शुक्राय नमः",
    habitHi: "घर-कार्यस्थल में स्वच्छता व सौम्य वाणी का नियम बनाए रखें"
  },
  3: {
    deityHi: "भगवान श्री गणेश",
    worshipHi: "भगवान श्री गणेश को 21 दूर्वांकुर अर्पित कर संकटनाशन गणेश स्तोत्र का पाठ करें और तुलसी दल को प्रणाम करें",
    daanHi: "साबुत हरा मूंग, पालक या विद्यार्थियों को लेखन-सामग्री भेंट करें",
    cautionBalanceHi: "बुध-स्थिरता हेतु वाणी में मधुरता रखकर तुलसी-वृक्ष की तीन शांत परिक्रमा करें",
    mantraHi: "ॐ ब्रां ब्रीं ब्रौं सः बुधाय नमः",
    habitHi: "संवाद में स्पष्टता और एक समय में एक कार्य पूर्ण करने का अभ्यास रखें"
  },
  4: {
    deityHi: "भगवान आशुतोष शिव",
    worshipHi: 'भगवान शिव को कच्चे दूध मिश्रित शुद्ध जल से अभिषेक कर "ॐ नमः शिवाय" की एक माला जपें और माता का चरण-स्पर्श करें',
    daanHi: "श्वेत दूध, खीर या किसी प्याऊ में शीतल जल की सेवा अर्पित करें",
    cautionBalanceHi: "कर्क-स्वामी चंद्रमा की सौम्यता हेतु चांदी के पात्र से जल ग्रहण कर मौन ध्यान लगाएँ",
    mantraHi: "ॐ श्रां श्रीं श्रौं सः चन्द्रमसे नमः",
    habitHi: "संध्या समय शांत ध्यान और रात्रि में समयबद्ध विश्राम को प्राथमिकता दें"
  },
  5: {
    deityHi: "भगवान सूर्यनारायण",
    worshipHi: "प्रातः तांबे के लोटे में लाल पुष्प व रोली डालकर भगवान सूर्यनारायण को अर्घ्य दें तथा आदित्य हृदय स्तोत्र का स्मरण करें",
    daanHi: "गेहूँ, गुड़ या तांबे के छोटे पात्र का किसी सुपात्र को सम्मानपूर्वक दान करें",
    cautionBalanceHi: "सूर्य-तेज के सौम्य संतुलन हेतु गायत्री मंत्र का 11 बार जप कर विनम्र संवाद अपनाएँ",
    mantraHi: "ॐ ह्रां ह्रीं ह्रौं सः सूर्याय नमः",
    habitHi: "पिता व वरिष्ठजनों का अभिवादन कर अनुशासित सूर्योदय दिनचर्या अपनाएँ"
  },
  6: {
    deityHi: "माँ दुर्गा एवं श्री गणेश",
    worshipHi: 'माँ भगवती दुर्गा के समक्ष कपूर-आरती कर "ॐ दुं दुर्गायै नमः" का जप करें तथा हरे इलायची-मिश्री का नैवेद्य लगाएँ',
    daanHi: "गौमाता को हरा चारा खिलाएँ या कन्याओं को फल-मिष्ठान भेंट करें",
    cautionBalanceHi: "कन्या-बुद्धि की निर्मलता हेतु प्रातः श्री गणेश अथर्वशीर्ष सुनकर व्यर्थ चिंता त्यागें",
    mantraHi: "ॐ ऐं श्रीं बुधाय नमः",
    habitHi: "अनावश्यक सूक्ष्म-चिंता छोड़कर व्यवस्थित कार्य-सूची से दिनचर्या चलाएँ"
  },
  7: {
    deityHi: "माँ अन्नपूर्णा एवं श्री राधा-कृष्ण",
    worshipHi: "श्री राधा-कृष्ण के समक्ष चंदन-धूप प्रज्वलित कर श्वेत कमल या मोगरे के पुष्प अर्पित करें और ईशान कोण स्वच्छ रखें",
    daanHi: "दही, श्वेत वस्त्र या सुगंधित मिष्ठान का स्वच्छ भाव से समर्पण करें",
    cautionBalanceHi: "तुला-समभाव हेतु देवालय में सुगंधित इत्र-पुष्प अर्पित कर दुविधा-मुक्त निर्णय लें",
    mantraHi: "ॐ शुं शुक्राय नमः",
    habitHi: "निर्णयों में संतुलन और प्रत्येक व्यवहार में मधुर पारदर्शिता बनाए रखें"
  },
  8: {
    deityHi: "श्री कार्तिकेय एवं संकटमोचन हनुमान",
    worshipHi: "श्री कार्तिकेय स्वामी या संकटमोचन हनुमान जी के समक्ष चमेली के तेल का दीपक जलाकर मंगल स्तोत्र का शांत पाठ करें",
    daanHi: "तांबे का सिक्का, लाल वस्त्र या पका हुआ सात्त्विक भोजन किसी असहाय को भेंट करें",
    cautionBalanceHi: "वृश्चिक-संयम हेतु संध्या समय श्री संकटमोचन अष्टक का पाठ कर मन के संदेह शांत करें",
    mantraHi: "ॐ अं अंगारकाय नमः",
    habitHi: "अनावश्यक आशंका त्यागकर प्राणायाम व शांत आत्म-चिंतन का अभ्यास करें"
  },
  9: {
    deityHi: "भगवान श्रीहरि विष्णु",
    worshipHi: "भगवान श्रीहरि विष्णु को पीले गेंदे के पुष्प व तुलसी दल अर्पित कर विष्णु सहस्रनाम के मुख्य श्लोक पढ़ें और केसर-तिलक लगाएँ",
    daanHi: "चने की दाल, हल्दी की गाँठ या धर्म-शिक्षा की पुस्तक किसी विद्यार्थी को भेंट करें",
    cautionBalanceHi: "धनु-गुरुकृपा हेतु केले के वृक्ष को जल अर्पित कर गुरुजनों का आशीर्वाद लें",
    mantraHi: "ॐ ग्रां ग्रीं ग्रौं सः गुरवे नमः",
    habitHi: "गुरुजनों के सम्मान और प्रतिदिन कुछ समय स्वाध्याय को दिनचर्या में स्थान दें"
  },
  10: {
    deityHi: "श्री शनिदेव एवं पीपल नारायण",
    worshipHi: "प्रातः पीपल वृक्ष की जड़ में शुद्ध जल अर्पित कर सात परिक्रमा करें और सायंकाल श्री दशरथकृत शनि स्तोत्र का शांत पाठ करें",
    daanHi: "काला तिल, साबुत उड़द या जरूरतमंद को उपयोगी पादुका-अन्न सहयोग प्रदान करें",
    cautionBalanceHi: "मकर-कर्मयोग की सिद्धि हेतु पीपल के नीचे संध्या समय शांत प्रार्थना कर धैर्य बनाए रखें",
    mantraHi: "ॐ प्रां प्रीं प्रौं सः शनैश्चराय नमः",
    habitHi: "समयनिष्ठा, ईमानदार परिश्रम और अधीनस्थों के प्रति करुणा का पालन करें"
  },
  11: {
    deityHi: "श्री नीलकंठ महादेव एवं कालभैरव",
    worshipHi: "श्री नीलकंठ महादेव को शमी-पत्र व नीले अपराजिता पुष्प अर्पित कर महामृत्युंजय मंत्र का 11 बार शांत जप करें",
    daanHi: "नीले-काले वस्त्र, कंबल या पक्षियों के लिए सप्तधान्य का सात्त्विक दान करें",
    cautionBalanceHi: "कुंभ-स्थिरता हेतु शमी वृक्ष को प्रणाम कर विचारों की चंचलता को प्राणायाम से शांत करें",
    mantraHi: "ॐ शं शनैश्चराय नमः",
    habitHi: "विचारों की स्थिरता हेतु गहरी श्वास और लोक-कल्याणकारी सेवा को अपनाएँ"
  },
  12: {
    deityHi: "भगवान श्री दत्तात्रेय एवं लक्ष्मीनारायण",
    worshipHi: 'भगवान लक्ष्मीनारायण या गुरु दत्तात्रेय को पीत-चंदन व केले का भोग अर्पित कर "ॐ नमो भगवते वासुदेवाय" का शांत जप करें',
    daanHi: "पीले फल, बेसन के लड्डू या देवालय में शुद्ध घी का दीप समर्पित करें",
    cautionBalanceHi: "मीन-आध्यात्मिक बल हेतु नारायण कवच का स्मरण कर भावनात्मक सीमाएँ स्पष्ट रखें",
    mantraHi: "ॐ बृं बृहस्पतये नमः",
    habitHi: "करुणा के साथ व्यावहारिक संयम रखें और प्रातः मौन ध्यान से दिन प्रारंभ करें"
  }
};
function getDailySarvajanHitayaRemedyHi(weekdayIndex, tithiName, festivalName) {
  const wd = (Math.round(weekdayIndex) % 7 + 7) % 7;
  const weekdayMap = {
    0: {
      hi: "रविवार के दिन प्रातः तांबे के पात्र से भगवान सूर्यदेव को अर्घ्य दें, आदित्य हृदय स्तोत्र का स्मरण करें तथा पिता व वरिष्ठजनों का आशीर्वाद लें।",
      en: "On Sunday, offer morning water Arghya to Lord Surya from a copper vessel, recite Aditya Hridayam, and seek blessings of elders."
    },
    1: {
      hi: 'सोमवार के दिन शिवालय में शुद्ध जल व बिल्वपत्र अर्पित कर "ॐ नमः शिवाय" का शांत जप करें तथा माता का सम्मान व श्वेत अन्न का यथाशक्ति दान करें।',
      en: 'On Monday, offer pure water and Bilva leaves to Lord Shiva with calm "Om Namah Shivaya" chanting, honor your mother, and offer white grain charity.'
    },
    2: {
      hi: "मंगलवार के दिन श्री हनुमान जी के समक्ष चमेली के तेल का दीपक जलाकर हनुमान चालीसा का पाठ करें तथा गुड़-चने का सात्त्विक प्रसाद वितरित करें।",
      en: "On Tuesday, light a jasmine-oil lamp before Lord Hanuman, recite Hanuman Chalisa, and distribute jaggery and roasted gram prasad."
    },
    3: {
      hi: "बुधवार के दिन विघ्नहर्ता श्री गणेश को दूर्वा अर्पित कर गणेश वंदना करें तथा गौमाता को हरा चारा खिलाकर मधुर संवाद का संकल्प लें।",
      en: "On Wednesday, offer Durva grass to Lord Ganesha, offer green fodder to cows, and practice clear, harmonious communication."
    },
    4: {
      hi: "गुरुवार के दिन भगवान श्रीहरि विष्णु व गुरुजनों का स्मरण कर पीले पुष्प अर्पित करें तथा चने की दाल, हल्दी या शिक्षा-सामग्री का सात्त्विक दान करें।",
      en: "On Thursday, offer yellow flowers to Lord Vishnu, seek blessings of teachers/mentors, and donate chana dal, turmeric, or study items."
    },
    5: {
      hi: "शुक्रवार के दिन माँ महालक्ष्मी के समक्ष शुद्ध घी का दीपक प्रज्वलित कर श्री सूक्त का पाठ करें तथा घर-कार्यस्थल में स्वच्छता व सौहार्द बनाए रखें।",
      en: "On Friday, light a pure ghee lamp before Goddess Mahalakshmi, recite Shri Suktam, and maintain cleanliness and harmony at home and work."
    },
    6: {
      hi: "शनिवार के दिन सायंकाल श्री शनिदेव या पीपल वृक्ष के समक्ष सरसों अथवा तिल के तेल का दीपक जलाएं, श्रमजीवियों का सम्मान करें तथा जरूरतमंदों को यथाशक्ति अन्न-सहायता दें।",
      en: "On Saturday evening, light a mustard or sesame oil lamp near a Peepal tree or Shani shrine, respect workers, and offer food assistance to the needy."
    }
  };
  const base = weekdayMap[wd] || weekdayMap[0];
  let extraHi = "";
  let extraEn = "";
  if (tithiName && /एकादशी/u.test(tithiName)) {
    extraHi = ' एकादशी के पावन संयोग में तुलसी-पूजन व "ॐ नमो भगवते वासुदेवाय" का जप विशेष पुण्यदायी है।';
    extraEn = ' On auspicious Ekadashi, Tulsi worship and chanting "Om Namo Bhagavate Vasudevaya" bring special merit.';
  } else if (tithiName && /अमावस्या/u.test(tithiName)) {
    extraHi = " अमावस्या के पावन दिन पितरों का स्मरण कर गो-सेवा एवं अन्न-जल दान करना सर्वजन हेतु कल्याणकारी है।";
    extraEn = " On Amavasya, remembering ancestors with food and water charity brings peace and blessings.";
  } else if (tithiName && /पूर्णिमा/u.test(tithiName)) {
    const isKartikPurnima = Boolean(
      festivalName && /कार्तिक\s*पूर्णिमा|देव\s*दीपावली/u.test(festivalName) || /कार्तिक\s*पूर्णिमा/u.test(tithiName)
    );
    extraHi = isKartikPurnima ? " कार्तिक पूर्णिमा एवं देव दीपावली महात्म्य पर पवित्र स्नान, दीपदान व श्री सत्यनारायण स्मरण विशेष कल्याणकारी है।" : " पूर्णिमा पर श्री सत्यनारायण स्मरण एवं संध्या को चंद्र-अर्घ्य देना मानसिक शांति व समृद्धि प्रदान करता है।";
    extraEn = isKartikPurnima ? " On Kartik Purnima & Dev Deepawali, sacred bathing, lamp offering (Deepdaan), and Shri Satyanarayana remembrance are highly auspicious." : " On Purnima, Shri Satyanarayana remembrance and evening moon prayer bring peace and prosperity.";
  } else if (tithiName && /त्रयोदशी/u.test(tithiName) || festivalName && /प्रदोष/u.test(festivalName) && !/शिवरात्रि/u.test(festivalName)) {
    extraHi = " प्रदोष के शुभ योग में संध्या समय शिव-आराधना व दीप-दान अत्यंत फलदायी रहेगा।";
    extraEn = " On auspicious Pradosh Vrat (Trayodashi), evening Shiva worship and lamp offering are highly rewarding.";
  } else if (tithiName && /चतुर्दशी/u.test(tithiName) && festivalName && /शिवरात्रि/u.test(festivalName) || festivalName && /शिवरात्रि/u.test(festivalName)) {
    extraHi = " मासिक शिवरात्रि के शुभ योग में संध्या व निशीथ काल में शिव-आराधना एवं दीप-दान अत्यंत फलदायी रहेगा।";
    extraEn = " On Masik Shivaratri (Chaturdashi), evening and Nishitha Shiva worship with lamp offering are highly auspicious.";
  }
  return {
    headingHi: "आज का सर्वजन हिताय विशेष उपाय",
    remedyHi: cleanHindiProse(`${base.hi}${extraHi}`),
    headingEn: "Today's Universal Auspicious Remedy (Sarvajan Hitaya)",
    remedyEn: `${base.en}${extraEn}`.trim()
  };
}
function buildSattvicRemedy(params) {
  const { moonSign, analysis, period, cautionPlanet } = params;
  const idx = ((Math.round(moonSign.number) - 1) % 12 + 12) % 12 + 1;
  const base = RASHI_UNIQUE_REMEDY_MATRIX[idx] || RASHI_UNIQUE_REMEDY_MATRIX[1];
  const periodLead = period === "daily" ? "आज का सात्त्विक उपाय" : period === "weekly" ? "इस सप्ताह का सात्त्विक उपाय" : "इस माह का सात्त्विक उपाय";
  const hasCautionChallenge = Boolean(cautionPlanet) || analysis.sadeSatiPhase !== "NONE";
  const worshipClean = base.worshipHi.replace(/[।.;,\s]+$/u, "").trim();
  const daanClean = base.daanHi.replace(/[।.;,\s]+$/u, "").trim();
  const cautionClean = base.cautionBalanceHi.replace(/[।.;,\s]+$/u, "").trim();
  const primaryText = hasCautionChallenge ? `${periodLead}: ${worshipClean}। ${daanClean}। ${cautionClean}।` : `${periodLead}: ${worshipClean}। ${daanClean}।`;
  const ensureFullStop = (s) => {
    const trimmed = s.replace(/[;,\s]+$/u, "").trim();
    return /[।॥]$/.test(trimmed) ? trimmed : `${trimmed}।`;
  };
  return {
    primaryRemedyHi: ensureFullStop(enforcePeriodVocabularyGuard(primaryText, period)),
    mantraHi: base.mantraHi || moonSign.beejMantra,
    charityOrSevaHi: ensureFullStop(enforcePeriodVocabularyGuard(`${daanClean}।`, period)),
    lifestyleTipHi: ensureFullStop(enforcePeriodVocabularyGuard(`${base.habitHi.replace(/[।.;,\s]+$/u, "").trim()}।`, period))
  };
}
function safeExecuteRashifalEngine(engineLabel, cacheKey, ttlMs, computeFn, bypassCache = false) {
  try {
    if (!bypassCache) {
      const hit = getRashifalCache(cacheKey);
      if (hit !== null) {
        return { status: "ok", data: hit, fromCache: true, cacheKey };
      }
    }
    const computed = computeFn();
    if (!computed || typeof computed !== "object") {
      return {
        status: "unavailable",
        data: null,
        errorCode: "EMPTY_COMPUTATION",
        userMessageHi: "इस समय राशिफल की खगोलीय गणना अस्थायी रूप से अनुपलब्ध है। कृपया कुछ क्षण बाद पुनः प्रयास करें।",
        userMessageEn: "Astronomical horoscope calculation is temporarily unavailable. Please try again shortly.",
        technicalReason: `${engineLabel} engine returned empty output`
      };
    }
    setRashifalCache(cacheKey, computed, ttlMs);
    return { status: "ok", data: computed, fromCache: false, cacheKey };
  } catch (err) {
    const technicalReason = err instanceof Error ? err.message : String(err);
    return {
      status: "unavailable",
      data: null,
      errorCode: "EPHEMERIS_OR_RULE_ERROR",
      userMessageHi: "चयनित तिथि या स्थान के लिए सटीक खगोलीय गणना अभी उपलब्ध नहीं हो सकी। कृपया वैध तिथि व स्थान चुनकर पुनः प्रयास करें।",
      userMessageEn: "Verified astronomical horoscope data could not be computed for the selected date or location. Please retry with valid inputs.",
      technicalReason: `[${engineLabel}] ${technicalReason}`
    };
  }
}
const RASHIFAL_L1_CACHE = /* @__PURE__ */ new Map();
const MAX_L1_ENTRIES = 300;
const STORAGE_PREFIX = "pj_indep_rashifal_";
const RASHIFAL_CACHE_SCHEMA_TAG = "fp900v108";
function formatCoordKey(val) {
  return Number.isFinite(val) ? val.toFixed(3) : "28.977";
}
function buildDailyRashifalCacheKey(params) {
  const tz = resolveSafeTimezone(params.location);
  const nakTag = typeof params.birthNakshatraIndex === "number" && params.birthNakshatraIndex >= 0 ? `nak${params.birthNakshatraIndex}` : "general";
  const pTag = params.personalContextHash || "gen";
  return [
    "daily",
    RASHIFAL_CACHE_SCHEMA_TAG,
    params.rashiId,
    params.dateKey,
    formatCoordKey(params.location.lat),
    formatCoordKey(params.location.lon),
    tz,
    RASHIFAL_AYANAMSHA_MODE,
    RASHIFAL_NODE_MODE,
    nakTag,
    pTag,
    RASHIFAL_CORE_ENGINE_VERSION
  ].join("|");
}
function buildWeeklyRashifalCacheKey(params) {
  const tz = resolveSafeTimezone(params.location);
  const pTag = params.personalContextHash || "gen";
  return [
    "weekly",
    RASHIFAL_CACHE_SCHEMA_TAG,
    params.rashiId,
    params.weekStartDateKey,
    formatCoordKey(params.location.lat),
    formatCoordKey(params.location.lon),
    tz,
    RASHIFAL_AYANAMSHA_MODE,
    RASHIFAL_NODE_MODE,
    pTag,
    RASHIFAL_CORE_ENGINE_VERSION
  ].join("|");
}
function buildMonthlyRashifalCacheKey(params) {
  const tz = resolveSafeTimezone(params.location);
  const pTag = params.personalContextHash || "gen";
  return [
    "monthly",
    RASHIFAL_CACHE_SCHEMA_TAG,
    params.rashiId,
    params.monthKey,
    formatCoordKey(params.location.lat),
    formatCoordKey(params.location.lon),
    tz,
    RASHIFAL_AYANAMSHA_MODE,
    RASHIFAL_NODE_MODE,
    pTag,
    RASHIFAL_CORE_ENGINE_VERSION
  ].join("|");
}
function getRashifalCache(key) {
  const now = Date.now();
  const mem = RASHIFAL_L1_CACHE.get(key);
  if (mem) {
    if (mem.engineVersion === RASHIFAL_CORE_ENGINE_VERSION && now < mem.expiresAt) {
      return mem.value;
    }
    RASHIFAL_L1_CACHE.delete(key);
  }
  if (typeof window === "undefined" || !window.localStorage) {
    return null;
  }
  try {
    const raw = window.localStorage.getItem(`${STORAGE_PREFIX}${key}`);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (parsed && parsed.engineVersion === RASHIFAL_CORE_ENGINE_VERSION && typeof parsed.expiresAt === "number" && now < parsed.expiresAt) {
      RASHIFAL_L1_CACHE.set(key, parsed);
      return parsed.value;
    }
    window.localStorage.removeItem(`${STORAGE_PREFIX}${key}`);
    return null;
  } catch {
    return null;
  }
}
function setRashifalCache(key, value, ttlMs) {
  const record = {
    value,
    expiresAt: Date.now() + Math.max(6e4, ttlMs),
    engineVersion: RASHIFAL_CORE_ENGINE_VERSION
  };
  if (RASHIFAL_L1_CACHE.size >= MAX_L1_ENTRIES) {
    const oldestKey = RASHIFAL_L1_CACHE.keys().next().value;
    if (oldestKey) RASHIFAL_L1_CACHE.delete(oldestKey);
  }
  RASHIFAL_L1_CACHE.set(key, record);
  if (typeof window === "undefined" || !window.localStorage) return;
  try {
    window.localStorage.setItem(`${STORAGE_PREFIX}${key}`, JSON.stringify(record));
  } catch {
    purgeExpiredRashifalCache();
  }
}
function purgeExpiredRashifalCache() {
  const now = Date.now();
  for (const [k, rec] of RASHIFAL_L1_CACHE.entries()) {
    if (rec.engineVersion !== RASHIFAL_CORE_ENGINE_VERSION || now >= rec.expiresAt) {
      RASHIFAL_L1_CACHE.delete(k);
    }
  }
  if (typeof window === "undefined" || !window.localStorage) return;
  try {
    const toDelete = [];
    for (let i = 0; i < window.localStorage.length; i++) {
      const k = window.localStorage.key(i);
      if (!k || !k.startsWith(STORAGE_PREFIX)) continue;
      try {
        const parsed = JSON.parse(window.localStorage.getItem(k) || "{}");
        if (parsed.engineVersion !== RASHIFAL_CORE_ENGINE_VERSION || typeof parsed.expiresAt !== "number" || now >= parsed.expiresAt) {
          toDelete.push(k);
        }
      } catch {
        toDelete.push(k);
      }
    }
    for (const k of toDelete) {
      window.localStorage.removeItem(k);
    }
  } catch {
  }
}
const MODULAR_PILLAR_SALTS = {
  mindset: 0,
  career: 1,
  finance: 2,
  family: 3,
  health: 4,
  education: 5,
  saral: 6,
  upay: 7
};
const PADA_ORDINAL_HI = {
  1: "प्रथम",
  2: "द्वितीय",
  3: "तृतीय",
  4: "चतुर्थ"
};
function formatPadaOrdinalHi(pada) {
  const safe = Number.isFinite(pada) ? Math.min(4, Math.max(1, Math.trunc(Number(pada)))) : 1;
  return PADA_ORDINAL_HI[safe] || "प्रथम";
}
const NAKSHATRA_LOOKUP_HI = [
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
  "पूर्वाभाद्रपद",
  "उत्तराभाद्रपद",
  "रेवती"
];
const YOGA_LOOKUP_HI = [
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
const KARAN_LOOKUP_HI = [
  "बव",
  "बालव",
  "कौलव",
  "तैतिल",
  "गर",
  "वणिज",
  "विष्टि",
  "शकुनि",
  "चतुष्पाद",
  "नाग",
  "किंस्तुघ्न"
];
function resolveNakshatraIndexHi(rawName) {
  const clean = String(rawName || "").replace(/\s*नक्षत्र.*$/u, "").trim();
  if (!clean) return 0;
  const idx = NAKSHATRA_LOOKUP_HI.findIndex((n) => clean.includes(n) || n.includes(clean));
  return idx >= 0 ? idx : 0;
}
function resolveYogaIndexHi(rawName) {
  const clean = String(rawName || "").replace(/\s*योग.*$/u, "").trim();
  if (!clean) return 0;
  const idx = YOGA_LOOKUP_HI.findIndex((y) => clean.includes(y) || y.includes(clean));
  return idx >= 0 ? idx : 0;
}
function resolveKaranIndexHi(rawName) {
  const clean = String(rawName || "").replace(/\s*करण.*$/u, "").trim();
  if (!clean) return 0;
  if (/भद्रा/u.test(clean)) return 6;
  const idx = KARAN_LOOKUP_HI.findIndex((k) => clean.includes(k) || k.includes(clean));
  return idx >= 0 ? idx : 0;
}
function computeDayOfYear(year, month, day) {
  const safeYear = Number.isFinite(year) ? Math.trunc(year) : 2026;
  const safeMonth = Number.isFinite(month) ? Math.min(12, Math.max(1, Math.trunc(month))) : 1;
  const safeDay = Number.isFinite(day) ? Math.min(31, Math.max(1, Math.trunc(day))) : 1;
  const startUtc = Date.UTC(safeYear, 0, 1);
  const currUtc = Date.UTC(safeYear, safeMonth - 1, safeDay);
  return Math.max(1, Math.min(366, Math.floor((currUtc - startUtc) / 864e5) + 1));
}
function countVakriPlanets(grahas) {
  if (!grahas) return 0;
  const list = Array.isArray(grahas) ? grahas : Object.entries(grahas).map(([id, g]) => ({ id, isRetrograde: g?.isRetrograde }));
  let count = 0;
  for (const g of list) {
    const id = String(g.id || "").toLowerCase();
    if (id === "sun" || id === "moon" || id === "rahu" || id === "ketu") continue;
    if (g.isRetrograde) count++;
  }
  return count;
}
function computeBaseFingerprintSeed(ctx) {
  const tithiIndex = Number.isFinite(ctx.tithi) ? Math.trunc(Number(ctx.tithi)) : 1;
  const nakshatraIndex = Number.isFinite(ctx.nakshatra) ? Math.trunc(Number(ctx.nakshatra)) : 0;
  const yogaIndex = Number.isFinite(ctx.yoga) ? Math.trunc(Number(ctx.yoga)) : 0;
  const karanIndex = Number.isFinite(ctx.karan) ? Math.trunc(Number(ctx.karan)) : tithiIndex * 2 % 11;
  const vaarIndex = Number.isFinite(ctx.vaar) ? Math.trunc(Number(ctx.vaar)) : 0;
  const chandraRashiIndex = Number.isFinite(ctx.chandraRashi) ? Math.trunc(Number(ctx.chandraRashi)) : Math.max(1, Math.min(12, Math.floor(nakshatraIndex * 4 / 9) + 1));
  const suryaRashiIndex = Number.isFinite(ctx.suryaRashi) ? Math.trunc(Number(ctx.suryaRashi)) : Math.floor((Number(ctx.dayOfYear || 1) + 260) / 30.44) % 12 + 1;
  const ayanamsaDegrees = Number.isFinite(ctx.ayanamsaDegrees) ? Number(ctx.ayanamsaDegrees) : Number.isFinite(ctx.year) ? 23.853 + (Number(ctx.year) - 2e3) * 0.013969 : 24.235;
  const vakriPlanetsCount = Number.isFinite(ctx.vakriPlanetsCount) ? Math.trunc(Number(ctx.vakriPlanetsCount)) : 0;
  return tithiIndex * 1e6 + nakshatraIndex * 1e4 + yogaIndex * 100 + karanIndex * 10 + vaarIndex + chandraRashiIndex * 7 + suryaRashiIndex * 13 + Math.floor(ayanamsaDegrees * 100) + vakriPlanetsCount * 31;
}
function computeFourPillarSeeds(ctx) {
  const baseFingerprintSeed = computeBaseFingerprintSeed(ctx);
  const suryaRashiIndex = Number.isFinite(ctx.suryaRashi) ? Math.trunc(Number(ctx.suryaRashi)) : Math.floor((Number(ctx.dayOfYear || 1) + 260) / 30.44) % 12 + 1;
  const chandraRashiIndex = Number.isFinite(ctx.chandraRashi) ? Math.trunc(Number(ctx.chandraRashi)) : Math.max(1, Math.min(12, Math.floor((Number(ctx.nakshatra) || 0) * 4 / 9) + 1));
  const nakshatraIndex = Number.isFinite(ctx.nakshatra) ? Math.trunc(Number(ctx.nakshatra)) : 0;
  const vaarIndex = Number.isFinite(ctx.vaar) ? Math.trunc(Number(ctx.vaar)) : 0;
  const rashiIndex = Number.isFinite(ctx.rashiIndex) ? Math.trunc(Number(ctx.rashiIndex)) : Number.isFinite(ctx.houseOrSignIndex) ? Math.trunc(Number(ctx.houseOrSignIndex)) : 1;
  return {
    baseFingerprintSeed,
    careerDhanSeed: baseFingerprintSeed + suryaRashiIndex * 17 + rashiIndex,
    parivarPremSeed: baseFingerprintSeed + chandraRashiIndex * 23 + rashiIndex,
    swasthyaSeed: baseFingerprintSeed + nakshatraIndex * 29 + rashiIndex,
    upayShubhSeed: baseFingerprintSeed + vaarIndex * 37 + rashiIndex
  };
}
function resolveHistoricalEraBand(year) {
  const y = Number.isFinite(year) ? Math.trunc(Number(year)) : 2026;
  if (y <= 1900) return "HISTORICAL_1600_1900";
  if (y >= 2101) return "FUTURE_2101_2500";
  return "CONTEMPORARY_1901_2100";
}
function applyEraAwareShabdaKosh(text, year) {
  if (!text) return text;
  const band = resolveHistoricalEraBand(year);
  if (band === "CONTEMPORARY_1901_2100") return text;
  if (band === "HISTORICAL_1600_1900") {
    return text.replace(/ऑफिस|Office|कार्यालय|कार्यस्थल/giu, "राज दरबार").replace(/मीटिंग्स|मीटिंग|Meetings?|बैठकें/giu, "व्यापार यात्रा व सभा").replace(/नौकरी/gu, "राज-सेवा व कृषि-कार्य").replace(/बिज़नेस|बिजनेस|व्यापारिक प्रवाह|व्यावसायिक योजनाओं|व्यावसायिक मोर्चे|व्यावसायिक प्रयोग/gu, "हाट-बाज़ार व व्यापार यात्रा").replace(/फ़ोन|फोन|मोबाइल|डिजिटल|ऑनलाइन|संचार माध्यम/gu, "संदेश-व्यवहार").replace(/करियर/gu, "जीविका व कृषि-कार्य").replace(/बजट/gu, "कोष-लेखा").replace(/दस्तावेज़ीकरण/gu, "पत्र-लेखन").replace(/प्रोजेक्ट/gu, "राजकीय या व्यापारिक कार्य");
  }
  return text.replace(/ऑफिस|Office|कार्यस्थल/giu, "नवीन कार्यक्षेत्र").replace(/मीटिंग्स|मीटिंग|Meetings?|बैठकें/giu, "योजना-संवाद").replace(/नौकरी/gu, "तकनीकी कार्य").replace(/बिज़नेस|बिजनेस/gu, "व्यापारिक यात्रा").replace(/फ़ोन|फोन/gu, "योजना-संवाद");
}
const PILLAR_TUPLE_CACHE = /* @__PURE__ */ new Map();
const RASHI_DAY_TUPLE_HISTORY = /* @__PURE__ */ new Map();
const MAX_TUPLE_CACHE_SIZE = 2400;
function computeAbsoluteDayNumber(year, dayOfYear) {
  return Math.trunc(year) * 366 + Math.trunc(dayOfYear);
}
function encodeFourPillarTuple(c, p, s, u) {
  return (c & 63) << 18 | (p & 63) << 12 | (s & 63) << 6 | u & 63;
}
function resolveAntiCollisionFourPillarTuple(ctx) {
  const year = Number.isFinite(ctx.year) ? Math.trunc(Number(ctx.year)) : Number.isFinite(ctx.samvat) ? Math.trunc(Number(ctx.samvat)) - 57 : 2026;
  const dayOfYear = Number.isFinite(ctx.dayOfYear) ? Math.max(1, Math.min(366, Math.trunc(Number(ctx.dayOfYear)))) : (Math.trunc(Number(ctx.tithi || 1)) * 12 + Math.trunc(Number(ctx.nakshatra || 0))) % 366 + 1;
  const rashiIndex = Number.isFinite(ctx.rashiIndex) ? Math.max(1, Math.min(12, Math.trunc(Number(ctx.rashiIndex)))) : Math.max(1, Math.min(12, Math.trunc(Number(ctx.houseOrSignIndex || 1))));
  const seeds = computeFourPillarSeeds({ ...ctx, year, dayOfYear, rashiIndex });
  const cacheKey = `${year}:${dayOfYear}:${rashiIndex}:${seeds.baseFingerprintSeed}`;
  const cached = PILLAR_TUPLE_CACHE.get(cacheKey);
  if (cached) return cached;
  const absDay = computeAbsoluteDayNumber(year, dayOfYear);
  let rashiHist = RASHI_DAY_TUPLE_HISTORY.get(rashiIndex);
  if (!rashiHist) {
    rashiHist = /* @__PURE__ */ new Map();
    RASHI_DAY_TUPLE_HISTORY.set(rashiIndex, rashiHist);
  }
  const recentTuples = /* @__PURE__ */ new Set();
  for (let delta = 1; delta <= 30; delta++) {
    const prevTuple = rashiHist.get(absDay - delta);
    if (prevTuple !== void 0) {
      recentTuples.add(prevTuple);
    }
  }
  const mixIdx = (seedVal, doyPrime, off) => {
    const mixed = Math.imul(seedVal ^ Math.imul(dayOfYear, doyPrime) ^ Math.imul(year, 1009), 2654435761) >>> 0;
    return ((mixed + off) % 64 + 64) % 64;
  };
  let offset = 0;
  let careerIdx = 0;
  let parivarIdx = 0;
  let swasthyaIdx = 0;
  let upayIdx = 0;
  let tupleKey = 0;
  while (offset < 64) {
    careerIdx = mixIdx(seeds.careerDhanSeed, 733, offset);
    parivarIdx = mixIdx(seeds.parivarPremSeed, 911, offset * 3);
    swasthyaIdx = mixIdx(seeds.swasthyaSeed, 1151, offset * 5);
    upayIdx = mixIdx(seeds.upayShubhSeed, 1427, offset * 7);
    tupleKey = encodeFourPillarTuple(careerIdx, parivarIdx, swasthyaIdx, upayIdx);
    if (!recentTuples.has(tupleKey)) break;
    offset++;
  }
  const result = {
    careerIdx,
    parivarIdx,
    swasthyaIdx,
    upayIdx,
    tupleKey,
    offset
  };
  rashiHist.set(absDay, tupleKey);
  if (rashiHist.size > 90) {
    const oldestKey = rashiHist.keys().next().value;
    if (oldestKey !== void 0) rashiHist.delete(oldestKey);
  }
  if (PILLAR_TUPLE_CACHE.size >= MAX_TUPLE_CACHE_SIZE) {
    const firstKey = PILLAR_TUPLE_CACHE.keys().next().value;
    if (firstKey !== void 0) PILLAR_TUPLE_CACHE.delete(firstKey);
  }
  PILLAR_TUPLE_CACHE.set(cacheKey, result);
  return result;
}
function computeRashifalSeed(ctx) {
  const seeds = computeFourPillarSeeds(ctx);
  const pillar = ctx.pillar || "career";
  const houseOrSignIndex = Number.isFinite(ctx.houseOrSignIndex) ? Math.trunc(Number(ctx.houseOrSignIndex)) : 1;
  const domainSalt = Number.isFinite(ctx.domainSalt) ? Math.trunc(Number(ctx.domainSalt)) : MODULAR_PILLAR_SALTS[pillar] ?? 0;
  const dayOfYear = Number.isFinite(ctx.dayOfYear) ? Math.trunc(Number(ctx.dayOfYear)) : 0;
  let pillarSeed = seeds.careerDhanSeed;
  if (pillar === "family") pillarSeed = seeds.parivarPremSeed;
  else if (pillar === "health") pillarSeed = seeds.swasthyaSeed;
  else if (pillar === "upay" || pillar === "saral" || pillar === "mindset" || pillar === "education") {
    pillarSeed = seeds.upayShubhSeed;
  }
  return pillarSeed + houseOrSignIndex * 11 + domainSalt * 43 + dayOfYear * 53 + (Number.isFinite(ctx.pada) ? Math.trunc(Number(ctx.pada)) * 7 : 7);
}
function pickBlock(seed, len) {
  if (!Number.isFinite(len) || len <= 1) return 0;
  const safeLen = Math.trunc(len);
  const safeSeed = Number.isFinite(seed) ? Math.trunc(seed) : 0;
  return (safeSeed % safeLen + safeLen) % safeLen;
}
function unpackModular64Indices(seed) {
  const h64 = pickBlock(seed, 64);
  return {
    h64,
    openingIdx: h64 & 3,
    panchangIdx: h64 >> 2 & 3,
    guidanceIdx: h64 >> 4 & 3
  };
}
function resolveModularPolarity(params) {
  const { moonHouse, isKsheenaChandra, isCombustBenefic, score, period = "daily" } = params;
  if (period === "daily" && (isKsheenaChandra || moonHouse === 4 || moonHouse === 8 || moonHouse === 12)) {
    return "SAVDHANI_TRIK";
  }
  if (typeof score === "number" && score <= 66) {
    return "SAVDHANI_TRIK";
  }
  if (isCombustBenefic && (typeof score !== "number" || score <= 76)) {
    return "MADHYAM";
  }
  if (typeof score === "number" && score >= 78) {
    return "SHUBH";
  }
  if (period === "daily" && moonHouse && [1, 3, 6, 7, 10, 11].includes(moonHouse) && !isCombustBenefic) {
    return "SHUBH";
  }
  return "MADHYAM";
}
const OPENING_MATRIX = {
  SHUBH: {
    mindset: [
      "ग्रह-गोचर की अनुकूल लय से आत्मबल, वैचारिक स्पष्टता और निर्णय-क्षमता सुदृढ़ रहेगी",
      "शुभ भाव-संबल से मन में सकारात्मक संकल्प, उत्साह और कार्यनिष्ठा का सुंदर विस्तार होगा",
      "अनुकूल ग्रह-दृष्टि के प्रभाव से आत्मविश्वास संतुलित रहेगा और महत्वपूर्ण विचारों को सही दिशा मिलेगी",
      "शुभ गोचर-संतुलन के कारण आंतरिक धैर्य, दूरदृष्टि और रचनात्मक एकाग्रता प्रभावी बनेगी"
    ],
    career: [
      "कर्म-भाव के शुभ संबल से कार्यक्षेत्र में आपकी कार्यकुशलता और विश्वसनीयता को स्पष्ट मान्यता मिलेगी",
      "अनुकूल ग्रह-स्थिति व्यावसायिक योजनाओं, नेतृत्व और लंबित दायित्वों को गति देने में सहायक है",
      "कर्मेश व सहयोगी ग्रहों के संतुलन से नए संपर्क, पद-प्रतिष्ठा और सार्थक पहल के अवसर बनेंगे",
      "कार्यस्थान पर योजनाबद्ध प्रयासों से जटिल विषय सरल होंगे और वरिष्ठों का विश्वास बढ़ेगा"
    ],
    finance: [
      "धन व लाभ भावों की अनुकूलता से आय के स्रोतों में स्थिरता और सुनियोजित बचत का बल मिलेगा",
      "शुभ आर्थिक गोचर के कारण बकाया वसूली, व्यापारिक प्रवाह और संतुलित निवेश में सकारात्मक संकेत हैं",
      "अर्थ-प्रबंधन में स्पष्ट सोच और ग्रह-अनुकूलता से व्यावहारिक आर्थिक लाभ अर्जित होगा",
      "लाभकारी ग्रह-संयोग से वित्तीय अनुशासन का सीधा सुपरिणाम और कोष-वृद्धि के अवसर दिखेंगे"
    ],
    health: [
      "राशि स्वामी व आरोग्य भाव के सहयोग से शारीरिक स्फूर्ति, उत्साह और नियमित दिनचर्या अनुकूल रहेगी",
      "अनुकूल ग्रह-प्रभाव से प्राण-ऊर्जा संतुलित रहेगी तथा कार्यभार के बीच भी ताज़गी बनी रहेगी",
      "शुभ गोचर-लय शारीरिक सहनशक्ति और मानसिक प्रसन्नता को सहज रूप से पोषित करेगी",
      "संतुलित ग्रह-बल के कारण स्वास्थ्य पक्ष मजबूत रहेगा और अनुशासित जीवनशैली तुरंत लाभ देगी"
    ],
    family: [
      "कुटुम्ब व सप्तम भाव की शुभता से गृहस्थ जीवन में आत्मीयता, सहयोग और सौहार्द का विस्तार होगा",
      "अनुकूल ग्रह-स्थिति से परिजनों के साथ सार्थक संवाद, पारस्परिक सम्मान और सुखद तालमेल बनेगा",
      "पारिवारिक क्षेत्र में ग्रह-संबल से साझा दायित्व सहजता से पूरे होंगे और मधुरता बढ़ेगी",
      "शुभ भाव-संयोग से रिश्तों में विश्वास गहरा होगा तथा घर के वातावरण में प्रसन्नता रहेगी"
    ],
    education: [
      "विद्या व बुद्धि भाव के शुभ बल से एकाग्रता, स्मरण-शक्ति और विषय-पकड़ में स्पष्ट निखार आएगा",
      "अनुकूल ग्रह-दृष्टि के कारण अध्ययन, शोध और प्रतियोगी तैयारी में अपेक्षित प्रगति सधेगी",
      "बौद्धिक स्पष्टता और ग्रह-अनुकूलता से कठिन अध्यायों व तार्किक अभ्यास में अच्छा परिणाम मिलेगा",
      "ज्ञान-भाव की शुभ स्थिति से मार्गदर्शन, लेखन और कौशल-विकास में उल्लेखनीय सफलता बनेगी"
    ],
    saral: [
      "ग्रह-गोचर की अनुकूलता से जरूरी कार्य और बातचीत सहजता से आगे बढ़ेंगे",
      "मनोबल व कार्यगति संतुलित रहने से मुख्य लक्ष्यों में अच्छा परिणाम मिलेगा",
      "शुभ ग्रह-संकेत कामकाज, आर्थिक तालमेल और पारिवारिक सहयोग के लिए सहायक हैं",
      "स्पष्ट योजना के साथ आगे बढ़ने पर प्रयासों का सकारात्मक प्रतिफल प्राप्त होगा"
    ],
    upay: [
      "प्रातः स्नानोपरांत इष्टदेव का स्मरण और सात्त्विक संकल्प आज के शुभ योग को कई गुना बढ़ाएगा",
      "सूर्य-अर्घ्य, गायत्री जप और बड़ों के आशीर्वाद से आज की शुभ ऊर्जा दीर्घकालिक फल देगी",
      "गौ-सेवा, अन्नदान या तुलसी-दीपक प्रज्वलन से घर में सुख-समृद्धि का संचार होगा",
      "शुभ वार-स्वामी के मंत्र का 11 या 21 बार शांत जप आज के सौभाग्य को स्थायी बनाएगा"
    ]
  },
  MADHYAM: {
    mindset: [
      "मिश्रित ग्रह-गोचर के बीच धैर्य, संतुलित दृष्टिकोण और व्यावहारिक चिंतन सबसे बड़ा संबल बनेगा",
      "मध्यम गोचर-बल के कारण भावनात्मक प्रतिक्रिया के बजाय तथ्यपरक निर्णय लेना अधिक हितकर रहेगा",
      "ग्रहों के समभाव प्रभाव से शांतिपूर्ण गति और अनुशासित प्राथमिकता मन को स्थिर रखेगी",
      "वर्तमान गोचर में संतुलित आत्ममंथन और धैर्यपूर्ण संवाद से किसी भी उलझन का सहज हल निकलेगा"
    ],
    career: [
      "कार्यक्षेत्र में मध्यम ग्रह-बल के कारण नियमित दायित्वों की सटीक पूर्ति से ही स्थिर प्रगति बनेगी",
      "मिश्रित गोचर के बीच कार्यस्थल पर धैर्य, स्पष्ट संवाद और लिखित दस्तावेज़ीकरण विशेष उपयोगी रहेगा",
      "व्यावसायिक मोर्चे पर अचानक बदलाव के बजाय क्रमिक सुधार और गुणवत्ता पर ध्यान देना लाभकारी होगा",
      "कर्म-भाव के सामान्य संयोग में निरंतर परिश्रम व समय-प्रबंधन से कार्ययोजना सुचारू रूप से आगे बढ़ेगी"
    ],
    finance: [
      "आर्थिक पक्ष में संतुलित गोचर रहने से आय-व्यय का लेखाजोखा और संयमित बजट सर्वोपरि रहेगा",
      "मध्यम वित्तीय संयोग में नियमित लाभ बना रहेगा, किंतु बड़े निवेश से पूर्व पूर्ण जांच आवश्यक है",
      "धन-प्रबंधन में धैर्य और व्यावहारिक प्राथमिकता रखने से आर्थिक स्थिरता सहजता से सुरक्षित रहेगी",
      "सामान्य ग्रह-स्थिति के बीच फिजूलखर्ची टालकर चरणबद्ध बचत व सुरक्षित योजनाओं पर ध्यान दें"
    ],
    health: [
      "स्वास्थ्य पक्ष मध्यम-अनुकूल है; नियमित आहार, जल-संतुलन और समयबद्ध विश्राम ऊर्जा बनाए रखेगा",
      "मिश्रित ग्रह-प्रभाव में अत्यधिक श्रम या अनियमित भोजन से बचकर सरल दिनचर्या अपनाना श्रेष्ठ है",
      "शारीरिक संतुलन हेतु हल्का व्यायाम, प्राणायाम और तनाव-मुक्त विश्राम उपयोगी सिद्ध होगा",
      "सामान्य गोचर के बीच थकान को नज़रअंदाज़ न करें और सात्त्विक जीवनशैली का पालन करें"
    ],
    family: [
      "पारिवारिक विषयों में मध्यम गोचर के कारण धैर्यपूर्ण श्रवण और विनम्र संवाद से तालमेल बना रहेगा",
      "रिश्तों में व्यावहारिक अपेक्षाएँ और आपसी समझ बनाए रखने से गृहस्थ वातावरण शांत रहेगा",
      "कुटुम्ब व साझेदारी में स्पष्ट बातचीत और छोटे मतभेदों को समय पर सुलझाना लाभप्रद रहेगा",
      "मिश्रित भाव-प्रभाव में परिजनों के प्रति संवेदनशीलता और शांत सहयोग से सौहार्द सुरक्षित रहेगा"
    ],
    education: [
      "अध्ययन में नियमित पुनरावृत्ति और समय-सारिणी के पालन से मध्यम गोचर में भी ठोस प्रगति होगी",
      "एकाग्रता बनाए रखने हेतु छोटे-छोटे लक्ष्यों में कठिन विषयों का अभ्यास करना अधिक प्रभावी रहेगा",
      "बौद्धिक कार्यों में धैर्य और अनुभवी मार्गदर्शक की सलाह से संदेह दूर होकर स्पष्टता बढ़ेगी",
      "सामान्य ग्रह-बल के बीच ध्यान भटकाने वाले विषयों से दूरी रखकर मूल पाठ्यक्रम पर केंद्रित रहें"
    ],
    saral: [
      "ग्रह-स्थिति संतुलित है—धैर्य और नियमित कार्यशैली से काम सुचारू रूप से बनेंगे",
      "जल्दबाज़ी के बजाय सोच-समझकर और बजट नियंत्रित रखकर कदम बढ़ाना लाभप्रद रहेगा",
      "सामान्य व स्थिर गति से काम करने पर बिना तनाव अच्छे परिणाम मिल सकते हैं",
      "स्पष्ट बातचीत, संतुलित खर्च और समय के सही प्रबंधन से प्रगति बनी रहेगी"
    ],
    upay: [
      "दिन के आरंभ में गणेश स्मरण और शांत प्राणायाम से मध्यम गोचर भी सहज फलदायी बनेगा",
      "मधुर वाणी, संयमित दिनचर्या और संध्या दीपक प्रज्वलन से घर-कार्य में संतुलन रहेगा",
      "पक्षियों को दाना-जल या ज़रूरतमंद को अन्न-दान देने से मानसिक शांति और स्थिरता बढ़ेगी",
      "अपने इष्ट मंत्र का मौन जप और गुरुजनों का सम्मान आज के निर्णयों में स्पष्टता लाएगा"
    ]
  },
  SAVDHANI_TRIK: {
    mindset: [
      "संवेदनशील चंद्र/त्रिक गोचर के कारण मन को शांत रखकर बड़े या आवेगपूर्ण निर्णयों को टालना श्रेयस्कर है",
      "गूढ़ व संयम-अपेक्षी गोचर में धैर्य, आत्म-निरीक्षण और सात्त्विक चिंतन से मानसिक संतुलन सधेगा",
      "प्रतिकूल भाव-प्रभाव के बीच अनावश्यक चिंता छोड़ें और केवल निश्चित व नियमित कार्यों पर ध्यान दें",
      "संयमशील गोचर संकेत देता है कि जल्दबाज़ी के बजाय शांत समीक्षा व मौन-विवेक से स्थिति सुरक्षित रहेगी"
    ],
    career: [
      "संवेदनशील गोचर के कारण कार्यक्षेत्र में नए जोखिम, विवाद या अचानक बदलाव से पूरी तरह दूरी रखें",
      "कार्यस्थल पर दस्तावेज़ों की दोहरी जांच, विनम्र भाषा और नियमित दायित्वों की शांत पूर्ति आवश्यक है",
      "कर्म-मोर्चे पर किसी के उकसावे में आए बिना पूर्व-निर्धारित कार्यों को सावधानीपूर्वक पूरा करें",
      "संयम-अपेक्षी ग्रह-स्थिति में बड़े व्यावसायिक प्रयोग टालकर पर्दे के पीछे की तैयारी व शोध पर ध्यान दें"
    ],
    finance: [
      "सावधानीपूर्ण गोचर के चलते सट्टा, उधार लेन-देन और अनजान निवेश से पूरी तरह बचना आवश्यक है",
      "आकस्मिक खर्चों की आशंका को देखते हुए संचित पूंजी की सुरक्षा और कड़े व्यय-नियंत्रण को प्राथमिकता दें",
      "बड़े वित्तीय समझौते या महँगी खरीदारी स्थगित रखकर केवल आवश्यक खर्चों तक सीमित रहना हितकर है",
      "अर्थ-पक्ष में जोखिमपूर्ण सौदों से दूरी और लिखित हिसाब-किताब आपको अनावश्यक हानि से बचाएगा"
    ],
    health: [
      "संवेदनशील ग्रह-प्रभाव में थकान, अनिद्रा या मानसिक भारीपन से बचने हेतु पर्याप्त विश्राम अनिवार्य है",
      "स्वास्थ्य के प्रति सजग रहें—हल्का सात्त्विक भोजन, गुनगुना जल और गहरी श्वास-क्रिया तुरंत राहत देगी",
      "अतिरिक्त भागदौड़, देर रात्रि जागरण और तनावपूर्ण चर्चाओं से दूर रहकर शरीर को विश्राम दें",
      "संयम-अपेक्षी गोचर में वाहन सावधानी से चलाएँ तथा नियमित जल-सेवन व शांत दिनचर्या बनाए रखें"
    ],
    family: [
      "पारिवारिक संवाद में कठोर शब्दों या शीघ्र प्रतिक्रिया से बचकर विनम्रता व धैर्य बनाए रखें",
      "रिश्तों में किसी भी गलतफहमी को बढ़ने न दें—शांत श्रवण और संयमित व्यवहार से सौहार्द सुरक्षित रहेगा",
      "संवेदनशील गोचर के कारण गृहस्थ निर्णयों में बड़ों की सहमति और पारस्परिक सहिष्णुता आवश्यक है",
      "परिजनों के साथ अनावश्यक बहस टालकर आत्मीय सहयोग व शांत वातावरण को प्राथमिकता दें"
    ],
    education: [
      "ध्यान भटकने से बचने हेतु नया कठिन प्रयोग टालकर पूर्व-पठित अध्यायों की शांत पुनरावृत्ति करें",
      "संवेदनशील गोचर में अध्ययन के बीच छोटे विश्राम और लिखकर अभ्यास करने से स्मरण-शक्ति सधेगी",
      "परीक्षा या शोध कार्यों में जल्दबाज़ी न करें—तथ्यों की पुनः जांच और धैर्यपूर्ण अभ्यास उपयोगी है",
      "मानसिक थकान से बचने हेतु शांत वातावरण में केवल प्रमुख विषयों पर क्रमिक ध्यान केंद्रित करें"
    ],
    saral: [
      "मन शांत रखें; बड़े आर्थिक जोखिम, उधार और अनावश्यक विवाद से पूरी तरह बचें",
      "नियमित कामकाज, सेहत और शांत दिनचर्या को प्राथमिकता देना सबसे सुरक्षित रहेगा",
      "जल्दबाज़ी में बड़ा फैसला या निवेश न करें—धैर्य व सावधानी से दिन सुचारू रहेगा",
      "खर्च नियंत्रित रखें, विनम्र संवाद अपनाएँ और पर्याप्त विश्राम पर ध्यान दें"
    ],
    upay: [
      'शिवलिंग पर शुद्ध जल अर्पण और "ॐ नमः शिवाय" का 21 बार शांत जप मानसिक अस्थिरता को शांत करेगा',
      "संध्या समय घी का दीपक जलाकर हनुमान चालीसा या महामृत्युंजय स्मरण करने से बाधाएँ टलेंगी",
      "श्वेत या पीत अन्न का यथाशक्ति दान और क्रोध-संयम आज का सर्वोत्तम वैदिक सुरक्षा कवच है",
      "माता-पिता का चरण-स्पर्श और राहुकाल में नए संकल्प टालना आज के संवेदनशील गोचर को संतुलित करेगा"
    ]
  }
};
const GUIDANCE_MATRIX = {
  SHUBH: [
    "महत्वपूर्ण संकल्पों को प्राथमिकता देकर व्यवस्थित कार्ययोजना से पूर्ण करें।",
    "सकारात्मक अवसरों का लाभ लें और अनुभवी जनों के सहयोग से गति बढ़ाएँ।",
    "स्पष्ट लक्ष्य, समयबद्ध पहल और विनम्र आत्मविश्वास से श्रेष्ठ परिणाम सधेगा।",
    "उचित समय-प्रबंधन और सात्त्विक दृष्टिकोण से स्थायी लाभ सुनिश्चित करें।"
  ],
  MADHYAM: [
    "प्राथमिकता स्पष्ट रखें, अनावश्यक विस्तार टालें और स्थिर गति बनाए रखें।",
    "विचारपूर्वक कदम बढ़ाएँ तथा महत्वपूर्ण कागजात व आंकड़ों की पुनः जांच करें।",
    "संतुलित बजट, शांत संवाद और नियमित अनुशासन से अपेक्षित परिणाम प्राप्त होगा।",
    "धैर्य व व्यावहारिक समन्वय के साथ चरणबद्ध प्रगति को प्राथमिकता दें।"
  ],
  SAVDHANI_TRIK: [
    "बड़े जोखिम, विवाद व आवेगपूर्ण निर्णय टालकर केवल आवश्यक कार्यों पर ध्यान दें।",
    "धैर्य, मितव्ययिता और शांत विश्राम को अपनाकर अनावश्यक तनाव से बचें।",
    "लिखित जांच, विनम्र वाणी और सात्त्विक दिनचर्या को अपना सुरक्षा कवच बनाएँ।",
    "जल्दबाज़ी से दूरी रखें और महत्वपूर्ण निर्णय अनुकूल समय तक सुरक्षित स्थगित करें।"
  ]
};
function buildModular64FalitHi(input) {
  const pillar = input.seed.pillar || "career";
  const effectiveSalt = Number.isFinite(input.seed.domainSalt) ? Math.trunc(Number(input.seed.domainSalt)) : MODULAR_PILLAR_SALTS[pillar] ?? 0;
  const tuple = resolveAntiCollisionFourPillarTuple(input.seed);
  const basePillarIdx = pillar === "career" ? tuple.careerIdx : pillar === "finance" ? tuple.careerIdx + 17 & 63 : pillar === "family" ? tuple.parivarIdx : pillar === "health" ? tuple.swasthyaIdx : pillar === "upay" || pillar === "saral" ? tuple.upayIdx : pillar === "education" ? tuple.upayIdx + 23 & 63 : tuple.parivarIdx + 13 & 63;
  const hashVal = computeRashifalSeed({ ...input.seed, pillar, domainSalt: effectiveSalt });
  const unpacked = unpackModular64Indices(basePillarIdx ^ (hashVal & 3) << 4);
  const openingIdx = basePillarIdx & 3;
  const guidanceIdx = basePillarIdx >> 4 & 3;
  const panchangIdx = pickBlock(unpacked.panchangIdx + effectiveSalt, 4);
  const opening = OPENING_MATRIX[input.polarity][pillar][openingIdx];
  const guidance = GUIDANCE_MATRIX[input.polarity][guidanceIdx];
  const cleanTithi = String(input.tithiHi || "").replace(/\s*तिथि$/u, "").trim();
  const cleanNak = String(input.nakshatraHi || "").replace(/\s*नक्षत्र$/u, "").trim();
  const cleanYoga = String(input.yogaHi || "").replace(/\s*योग$/u, "").trim();
  const padaOrdHi = formatPadaOrdinalHi(input.pada);
  const eraYear = Number.isFinite(input.seed.year) ? Math.trunc(Number(input.seed.year)) : Number.isFinite(input.seed.samvat) ? Math.trunc(Number(input.seed.samvat)) - 57 : 2026;
  if (input.compact || pillar === "saral") {
    const panchangCompactDaily = [
      cleanNak ? `${cleanNak} नक्षत्र के संयोग में` : "पंचांग संयोग में",
      cleanTithi ? `${cleanTithi} तिथि के प्रभाव से` : "तिथि-संयोग से",
      cleanYoga ? `${cleanYoga} योग के बीच` : "शुभ योग में",
      cleanNak && input.pada ? `${cleanNak} नक्षत्र के ${padaOrdHi} चरण की लय में` : "ग्रह-गोचर की लय में"
    ];
    const panchangCompactMulti = [
      input.period === "weekly" ? "इस सप्ताह के ग्रह-संयोग में" : "इस माह के ग्रह-संयोग में",
      input.period === "weekly" ? "साप्ताहिक गोचर की लय में" : "मासिक गोचर की लय में",
      input.periodLabelHi ? `${input.periodLabelHi} की अवधि में` : "इस अवधि में",
      input.period === "weekly" ? "सात दिनों के संतुलन हेतु" : "पूरे माह के संतुलन हेतु"
    ];
    const pBit = input.period === "daily" ? panchangCompactDaily[panchangIdx] : panchangCompactMulti[panchangIdx];
    const raw = `सरल अर्थ: ${pBit} ${opening}।`;
    const adapted = applyEraAwareShabdaKosh(raw, eraYear);
    return input.period === "daily" ? cleanHindiProse(adapted) : enforcePeriodVocabularyGuard(adapted, input.period);
  }
  const panchangClauseDaily = [
    cleanTithi && cleanNak ? `${cleanTithi} तिथि व ${cleanNak} नक्षत्र के ${padaOrdHi} चरण का जीवंत संयोग इस प्रभाव को दिशा दे रहा है` : "जीवंत पंचांग संयोग इस गोचर को स्पष्ट दिशा दे रहा है",
    cleanNak && cleanYoga ? `${cleanNak} नक्षत्र एवं ${cleanYoga} योग की संयुक्त लय व्यावहारिक परिणामों को संतुलित करेगी` : "नक्षत्र व योग का संयोग व्यावहारिक परिणामों को संतुलित करेगा",
    cleanTithi && cleanYoga ? `${cleanTithi} तिथि के साथ ${cleanYoga} योग सक्रिय होने से कार्य-परिणाम अनुशासन से सधेंगे` : "तिथि व योग की सक्रियता से कार्य-परिणाम अनुशासन से सधेंगे",
    cleanNak ? `${cleanNak} नक्षत्र के ${padaOrdHi} चरण की सूक्ष्म ऊर्जा इस क्षेत्र में सजगता का संकेत दे रही है` : "नक्षत्र-चरण की सूक्ष्म ऊर्जा इस क्षेत्र में सजगता का संकेत दे रही है"
  ];
  const spanWord = input.period === "weekly" ? "सप्ताह" : "माह";
  const panchangClauseMulti = [
    input.periodLabelHi ? `${input.periodLabelHi} के ग्रह-चक्र व पंचांग संयोग इस परिणाम को स्थायी दिशा देंगे` : `इस ${spanWord} के ग्रह-चक्र व पंचांग संयोग इस परिणाम को स्थायी दिशा देंगे`,
    `पूरे ${spanWord} की नक्षत्र-योग गति के अनुरूप क्रमिक नियोजन विशेष फलदायी रहेगा`,
    `इस ${spanWord} में ग्रहों की धीमी व तीव्र गति का संतुलन अनुशासित प्रयासों को सहारा देगा`,
    `संबंधित ${spanWord} के प्रमुख गोचर-चरणों के साथ तालमेल रखने से परिणाम अधिक स्थिर होंगे`
  ];
  const middle = input.period === "daily" ? panchangClauseDaily[panchangIdx] : panchangClauseMulti[panchangIdx];
  const composed = applyEraAwareShabdaKosh(`${opening}; ${middle}। ${guidance}`, eraYear);
  return input.period === "daily" ? cleanHindiProse(composed) : enforcePeriodVocabularyGuard(composed, input.period);
}
const RASHI_META_LIST = [
  {
    id: "mesh",
    number: 1,
    nameHi: "मेष",
    nameEn: "Aries",
    symbol: "",
    lordHi: "मंगल (Mars)",
    lordEn: "Mars (Mangal)",
    lordPlanetId: "mars",
    elementHi: "अग्नि तत्व (Fire)",
    elementEn: "Fire (Agni)",
    natureHi: "चर राशि (Movable)",
    natureEn: "Movable (Chara)",
    luckyColorsHi: ["सिंदूरी लाल", "केसरिया", "मूंगा लाल", "स्वर्णिम पीला"],
    luckyColorsEn: ["Vermilion Red", "Saffron", "Coral Red", "Golden Yellow"],
    luckyNumbers: [9, 3, 1],
    ishtaDevtaHi: "श्री हनुमान जी एवं भगवान कार्तिकेय",
    ishtaDevtaEn: "Lord Hanuman & Lord Kartikeya",
    beejMantra: "ॐ क्रां क्रीं क्रौं सः भौमाय नमः",
    gemstoneHi: "मूंगा (Red Coral)",
    rudrakshaHi: "३ मुखी रुद्राक्ष",
    aksharHi: "चू, चे, चो, ला, ली, लू, ले, लो, अ",
    nakshatrasHi: "अश्विनी, भरणी, कृत्तिका"
  },
  {
    id: "vrishabh",
    number: 2,
    nameHi: "वृषभ",
    nameEn: "Taurus",
    symbol: "",
    lordHi: "शुक्र (Venus)",
    lordEn: "Venus (Shukra)",
    lordPlanetId: "venus",
    elementHi: "पृथ्वी तत्व (Earth)",
    elementEn: "Earth (Prithvi)",
    natureHi: "स्थिर राशि (Fixed)",
    natureEn: "Fixed (Sthira)",
    luckyColorsHi: ["स्फटिक श्वेत", "हल्का गुलाबी", "चांदी सा चमकीला", "आसमानी"],
    luckyColorsEn: ["Crystal White", "Soft Pink", "Silver Bright", "Sky Blue"],
    luckyNumbers: [6, 8, 5],
    ishtaDevtaHi: "माता महालक्ष्मी एवं माँ दुर्गा",
    ishtaDevtaEn: "Goddess Mahalakshmi & Maa Durga",
    beejMantra: "ॐ द्रां द्रीं द्रौं सः शुक्राय नमः",
    gemstoneHi: "हीरा / ओपल (Diamond / Opal)",
    rudrakshaHi: "६ मुखी रुद्राक्ष",
    aksharHi: "ई, ऊ, ए, ओ, वा, वी, वू, वे, वो",
    nakshatrasHi: "कृत्तिका, रोहिणी, मृगशिरा"
  },
  {
    id: "mithun",
    number: 3,
    nameHi: "मिथुन",
    nameEn: "Gemini",
    symbol: "",
    lordHi: "बुध (Mercury)",
    lordEn: "Mercury (Budha)",
    lordPlanetId: "mercury",
    elementHi: "वायु तत्व (Air)",
    elementEn: "Air (Vayu)",
    natureHi: "द्विस्वभाव राशि (Dual)",
    natureEn: "Dual (Dwiswabhava)",
    luckyColorsHi: ["पन्ना हरा", "धानी हरा", "हल्का पीला", "फिरोजी"],
    luckyColorsEn: ["Emerald Green", "Olive Green", "Light Yellow", "Turquoise"],
    luckyNumbers: [5, 6, 1],
    ishtaDevtaHi: "भगवान श्री लक्ष्मीनारायण एवं श्री गणेश",
    ishtaDevtaEn: "Lord Lakshmi Narayan & Lord Ganesha",
    beejMantra: "ॐ ब्रां ब्रीं ब्रौं सः बुधाय नमः",
    gemstoneHi: "पन्ना (Emerald)",
    rudrakshaHi: "४ मुखी रुद्राक्ष",
    aksharHi: "का, की, कू, घ, ङ, छ, के, को, हा",
    nakshatrasHi: "मृगशिरा, आर्द्रा, पुनर्वसु"
  },
  {
    id: "kark",
    number: 4,
    nameHi: "कर्क",
    nameEn: "Cancer",
    symbol: "",
    lordHi: "चंद्रमा (Moon)",
    lordEn: "Moon (Chandra)",
    lordPlanetId: "moon",
    elementHi: "जल तत्व (Water)",
    elementEn: "Water (Jala)",
    natureHi: "चर राशि (Movable)",
    natureEn: "Movable (Chara)",
    luckyColorsHi: ["दूधिया सफेद", "मोती श्वेत", "क्रीम", "हल्का पीला"],
    luckyColorsEn: ["Milky White", "Pearl White", "Cream", "Light Yellow"],
    luckyNumbers: [2, 1, 7],
    ishtaDevtaHi: "देवाधिदेव महादेव (भगवान शिव) एवं माता गौरी",
    ishtaDevtaEn: "Lord Shiva & Goddess Gauri",
    beejMantra: "ॐ श्रां श्रीं श्रौं सः चन्द्रमसे नमः",
    gemstoneHi: "मोती (Natural Pearl)",
    rudrakshaHi: "२ मुखी रुद्राक्ष",
    aksharHi: "ही, हू, हे, हो, डा, डी, डू, डे, डो",
    nakshatrasHi: "पुनर्वसु, पुष्य, आश्लेषा"
  },
  {
    id: "simha",
    number: 5,
    nameHi: "सिंह",
    nameEn: "Leo",
    symbol: "",
    lordHi: "सूर्य (Sun)",
    lordEn: "Sun (Surya)",
    lordPlanetId: "sun",
    elementHi: "अग्नि तत्व (Fire)",
    elementEn: "Fire (Agni)",
    natureHi: "स्थिर राशि (Fixed)",
    natureEn: "Fixed (Sthira)",
    luckyColorsHi: ["सूर्योदय स्वर्णिम", "भगवा केसरिया", "माणिक्य लाल", "ताम्र वर्ण"],
    luckyColorsEn: ["Sunrise Gold", "Saffron Orange", "Ruby Red", "Copper"],
    luckyNumbers: [1, 3, 9],
    ishtaDevtaHi: "भगवान सूर्यनारायण एवं मर्यादा पुरुषोत्तम श्रीराम",
    ishtaDevtaEn: "Lord Suryanarayan & Lord Shri Ram",
    beejMantra: "ॐ ह्रां ह्रीं ह्रौं सः सूर्याय नमः",
    gemstoneHi: "माणिक्य (Ruby)",
    rudrakshaHi: "१ मुखी या १२ मुखी रुद्राक्ष",
    aksharHi: "मा, मी, मू, मे, मो, टा, टी, टू, टे",
    nakshatrasHi: "मघा, पूर्वाफाल्गुनी, उत्तराफाल्गुनी"
  },
  {
    id: "kanya",
    number: 6,
    nameHi: "कन्या",
    nameEn: "Virgo",
    symbol: "",
    lordHi: "बुध (Mercury)",
    lordEn: "Mercury (Budha)",
    lordPlanetId: "mercury",
    elementHi: "पृथ्वी तत्व (Earth)",
    elementEn: "Earth (Prithvi)",
    natureHi: "द्विस्वभाव राशि (Dual)",
    natureEn: "Dual (Dwiswabhava)",
    luckyColorsHi: ["तुलसी हरा", "पन्ना हरा", "श्वेत-हरा", "हल्का सुनहरा"],
    luckyColorsEn: ["Tulsi Green", "Emerald Green", "Mint White", "Soft Gold"],
    luckyNumbers: [5, 6, 1],
    ishtaDevtaHi: "विघ्नहर्ता श्री गणेश एवं माँ त्रिपुर सुंदरी",
    ishtaDevtaEn: "Lord Ganesha & Goddess Tripura Sundari",
    beejMantra: "ॐ ब्रां ब्रीं ब्रौं सः बुधाय नमः",
    gemstoneHi: "पन्ना (Emerald)",
    rudrakshaHi: "४ मुखी या १० मुखी रुद्राक्ष",
    aksharHi: "टो, पा, पी, पू, ष, ण, ठ, पे, पो",
    nakshatrasHi: "उत्तराफाल्गुनी, हस्त, चित्रा"
  },
  {
    id: "tula",
    number: 7,
    nameHi: "तुला",
    nameEn: "Libra",
    symbol: "",
    lordHi: "शुक्र (Venus)",
    lordEn: "Venus (Shukra)",
    lordPlanetId: "venus",
    elementHi: "वायु तत्व (Air)",
    elementEn: "Air (Vayu)",
    natureHi: "चर राशि (Movable)",
    natureEn: "Movable (Chara)",
    luckyColorsHi: ["श्वेत रेशमी", "गुलाबी", "हल्का नीला", "चांदी वर्ण"],
    luckyColorsEn: ["Silky White", "Rose Pink", "Pastel Blue", "Silver"],
    luckyNumbers: [6, 8, 5],
    ishtaDevtaHi: "माँ महालक्ष्मी एवं माता संतोषी",
    ishtaDevtaEn: "Goddess Mahalakshmi & Maa Santoshi",
    beejMantra: "ॐ द्रां द्रीं द्रौं सः शुक्राय नमः",
    gemstoneHi: "हीरा / जरकन (Diamond / Zircon)",
    rudrakshaHi: "६ मुखी रुद्राक्ष",
    aksharHi: "रा, री, रू, रे, रो, ता, ती, तू, ते",
    nakshatrasHi: "चित्रा, स्वाति, विशाखा"
  },
  {
    id: "vrishchik",
    number: 8,
    nameHi: "वृश्चिक",
    nameEn: "Scorpio",
    symbol: "",
    lordHi: "मंगल (Mars)",
    lordEn: "Mars (Mangal)",
    lordPlanetId: "mars",
    elementHi: "जल तत्व (Water)",
    elementEn: "Water (Jala)",
    natureHi: "स्थिर राशि (Fixed)",
    natureEn: "Fixed (Sthira)",
    luckyColorsHi: ["गहरा लाल", "केसरिया", "सिंदूरी", "पीला"],
    luckyColorsEn: ["Crimson Red", "Saffron", "Vermilion", "Yellow"],
    luckyNumbers: [9, 3, 1],
    ishtaDevtaHi: "संकटमोचन श्री हनुमान जी एवं महादेव",
    ishtaDevtaEn: "Lord Hanuman & Lord Mahadev",
    beejMantra: "ॐ क्रां क्रीं क्रौं सः भौमाय नमः",
    gemstoneHi: "मूंगा (Red Coral)",
    rudrakshaHi: "३ मुखी रुद्राक्ष",
    aksharHi: "तो, ना, नी, नू, ने, नो, या, यी, यू",
    nakshatrasHi: "विशाखा, अनुराधा, ज्येष्ठा"
  },
  {
    id: "dhanu",
    number: 9,
    nameHi: "धनु",
    nameEn: "Sagittarius",
    symbol: "",
    lordHi: "देवगुरु बृहस्पति (Jupiter)",
    lordEn: "Jupiter (Brihaspati)",
    lordPlanetId: "jupiter",
    elementHi: "अग्नि तत्व (Fire)",
    elementEn: "Fire (Agni)",
    natureHi: "द्विस्वभाव राशि (Dual)",
    natureEn: "Dual (Dwiswabhava)",
    luckyColorsHi: ["स्वर्णिम पीला", "हल्दी पीला", "केसरिया", "नारंगी"],
    luckyColorsEn: ["Golden Yellow", "Turmeric Yellow", "Saffron", "Orange"],
    luckyNumbers: [3, 6, 1],
    ishtaDevtaHi: "भगवान श्रीहरि विष्णु एवं दत्तात्रेय भगवान",
    ishtaDevtaEn: "Lord Shri Hari Vishnu & Lord Dattatreya",
    beejMantra: "ॐ ग्रां ग्रीं ग्रौं सः गुरवे नमः",
    gemstoneHi: "पुखराज (Yellow Sapphire)",
    rudrakshaHi: "५ मुखी रुद्राक्ष",
    aksharHi: "ये, यो, भा, भी, भू, धा, फा, ढा, भे",
    nakshatrasHi: "मूल, पूर्वाषाढ़ा, उत्तराषाढ़ा"
  },
  {
    id: "makar",
    number: 10,
    nameHi: "मकर",
    nameEn: "Capricorn",
    symbol: "",
    lordHi: "शनि देव (Saturn)",
    lordEn: "Saturn (Shani)",
    lordPlanetId: "saturn",
    elementHi: "पृथ्वी तत्व (Earth)",
    elementEn: "Earth (Prithvi)",
    natureHi: "चर राशि (Movable)",
    natureEn: "Movable (Chara)",
    luckyColorsHi: ["नीलम नीला", "आसमानी नीला", "हरा नीला", "श्वेत"],
    luckyColorsEn: ["Sapphire Blue", "Sky Blue", "Teal Blue", "White"],
    luckyNumbers: [8, 6, 5],
    ishtaDevtaHi: "न्याय के देवता शनि देव एवं श्री हनुमान जी",
    ishtaDevtaEn: "Lord Shani Dev & Lord Hanuman",
    beejMantra: "ॐ प्रां प्रीं प्रौं सः शनैश्चराय नमः",
    gemstoneHi: "नीलम (Blue Sapphire)",
    rudrakshaHi: "७ मुखी रुद्राक्ष",
    aksharHi: "भो, जा, जी, खी, खू, खे, खो, गा, गी",
    nakshatrasHi: "उत्तराषाढ़ा, श्रवण, धनिष्ठा"
  },
  {
    id: "kumbh",
    number: 11,
    nameHi: "कुम्भ",
    nameEn: "Aquarius",
    symbol: "",
    lordHi: "शनि देव (Saturn)",
    lordEn: "Saturn (Shani)",
    lordPlanetId: "saturn",
    elementHi: "वायु तत्व (Air)",
    elementEn: "Air (Vayu)",
    natureHi: "स्थिर राशि (Fixed)",
    natureEn: "Fixed (Sthira)",
    luckyColorsHi: ["गहरा नीला", "बैंगनी", "फिरोजी", "चांदी श्वेत"],
    luckyColorsEn: ["Deep Blue", "Royal Violet", "Turquoise", "Silver White"],
    luckyNumbers: [8, 6, 5],
    ishtaDevtaHi: "भगवान शिव (रुद्र) एवं श्री भैरव/शनि देव",
    ishtaDevtaEn: "Lord Shiva (Rudra) & Lord Shani Dev",
    beejMantra: "ॐ प्रां प्रीं प्रौं सः शनैश्चराय नमः",
    gemstoneHi: "नीलम / लाजवर्त (Blue Sapphire / Lapis)",
    rudrakshaHi: "७ मुखी या १४ मुखी रुद्राक्ष",
    aksharHi: "गू, गे, गो, सा, सी, सू, से, सो, दा",
    nakshatrasHi: "धनिष्ठा, शतभिषा, पूर्वाभाद्रपद"
  },
  {
    id: "meen",
    number: 12,
    nameHi: "मीन",
    nameEn: "Pisces",
    symbol: "",
    lordHi: "देवगुरु बृहस्पति (Jupiter)",
    lordEn: "Jupiter (Brihaspati)",
    lordPlanetId: "jupiter",
    elementHi: "जल तत्व (Water)",
    elementEn: "Water (Jala)",
    natureHi: "द्विस्वभाव राशि (Dual)",
    natureEn: "Dual (Dwiswabhava)",
    luckyColorsHi: ["पीताम्बरी पीला", "केसरिया", "सुनहरा पीला", "श्वेत"],
    luckyColorsEn: ["Pitambari Yellow", "Saffron", "Golden Yellow", "White"],
    luckyNumbers: [3, 6, 1],
    ishtaDevtaHi: "भगवान श्री सत्यनारायण (विष्णु) एवं माँ लक्ष्मी",
    ishtaDevtaEn: "Lord Satyanarayan (Vishnu) & Goddess Lakshmi",
    beejMantra: "ॐ ग्रां ग्रीं ग्रौं सः गुरवे नमः",
    gemstoneHi: "पुखराज (Yellow Sapphire)",
    rudrakshaHi: "५ मुखी रुद्राक्ष",
    aksharHi: "दी, दू, थ, झ, ञ, दे, दो, चा, ची",
    nakshatrasHi: "पूर्वाभाद्रपद, उत्तराभाद्रपद, रेवती"
  }
];
const PARASHARI_GOCHAR_FAVORABLE = {
  sun: {
    favorableHouses: [3, 6, 10, 11],
    vedhaMap: { 3: 9, 6: 12, 10: 4, 11: 5 }
  },
  moon: {
    favorableHouses: [1, 3, 6, 7, 10, 11],
    vedhaMap: { 1: 5, 3: 9, 6: 12, 7: 2, 10: 4, 11: 8 }
  },
  mars: {
    favorableHouses: [3, 6, 11],
    vedhaMap: { 3: 12, 6: 9, 11: 5 }
  },
  mercury: {
    favorableHouses: [2, 4, 6, 8, 10, 11],
    vedhaMap: { 2: 5, 4: 3, 6: 9, 8: 1, 10: 8, 11: 12 }
  },
  jupiter: {
    favorableHouses: [2, 5, 7, 9, 11],
    vedhaMap: { 2: 12, 5: 4, 7: 3, 9: 10, 11: 8 }
  },
  venus: {
    favorableHouses: [1, 2, 3, 4, 5, 8, 9, 11, 12],
    vedhaMap: { 1: 8, 2: 7, 3: 1, 4: 10, 5: 9, 8: 5, 9: 11, 11: 6, 12: 3 }
  },
  saturn: {
    favorableHouses: [3, 6, 11],
    vedhaMap: { 3: 12, 6: 9, 11: 5 }
  },
  rahu: {
    favorableHouses: [3, 6, 10, 11],
    vedhaMap: { 3: 12, 6: 9, 10: 4, 11: 5 }
  },
  ketu: {
    favorableHouses: [3, 6, 10, 11],
    vedhaMap: { 3: 12, 6: 9, 10: 4, 11: 5 }
  }
};
const BHAVA_NAMES_HI = {
  1: "प्रथम (राशि/व्यक्तित्व) भाव",
  2: "द्वितीय (धन, कोष व वाणी) भाव",
  3: "तृतीय (पराक्रम, साहस व संवाद) भाव",
  4: "चतुर्थ (गृह सुख, भूमि-वाहन व मातृ) भाव",
  5: "पंचम (प्रज्ञा, विद्या, संतान व पूर्वपुण्य) त्रिकोण",
  6: "षष्ठ (रोग-मुक्ति, प्रतिस्पर्धा व सेवा) भाव",
  7: "सप्तम (दांपत्य, साझेदारी व व्यापार) केंद्र",
  8: "अष्टम (आयुष्य, गूढ़ अनुसंधान व आकस्मिक परिवर्तन) भाव",
  9: "नवम (धर्म, भाग्य, तीर्थाटन व गुरु कृपा) त्रिकोण",
  10: "दशम (कर्म, राज्य-सम्मान, पद व आजीविका) केंद्र",
  11: "एकादश (महा-लाभ, आय वृद्धि व मनोकामना पूर्ति) भाव",
  12: "द्वादश (निवेश, विदेश संपर्क, व्यय व आध्यात्मिक मोक्ष) भाव"
};
const BHAVA_NAMES_EN = {
  1: "1st House (Tanu / Self & Vitality)",
  2: "2nd House (Dhana / Wealth & Speech)",
  3: "3rd House (Sahaj / Valor & Initiative)",
  4: "4th House (Sukha / Home, Property & Peace)",
  5: "5th House (Putra / Intellect, Creativity & Merit)",
  6: "6th House (Ripu / Service, Competition & Healing)",
  7: "7th House (Kalatra / Spouse, Partnership & Trade)",
  8: "8th House (Ayur / Deep Research & Transformation)",
  9: "9th House (Bhagya / Fortune, Dharma & Grace)",
  10: "10th House (Karma / Career, Authority & Status)",
  11: "11th House (Labha / Gains, Income & Fulfillment)",
  12: "12th House (Vyaya / Global Links, Expenditure & Moksha)"
};
function getPlanetLordOfSign(signNumber) {
  const meta = RASHI_META_LIST[(signNumber - 1 + 12) % 12];
  const shortHi = meta.lordHi.split(" (")[0];
  const shortEn = meta.lordEn.split(" (")[0];
  return {
    planetId: meta.lordPlanetId,
    nameHi: shortHi,
    nameEn: shortEn
  };
}
function formatHindiDateRange(ist, period, lang) {
  const noonIST = /* @__PURE__ */ new Date(`${ist.dateKey}T12:00:00+05:30`);
  const opts = {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Kolkata"
  };
  const loc = lang === "hi" ? "hi-IN" : "en-IN";
  if (period === "daily") {
    return noonIST.toLocaleDateString(loc, { weekday: "long", ...opts });
  }
  if (period === "weekly") {
    const end = new Date(noonIST.getTime() + 6 * 864e5);
    return lang === "hi" ? `${noonIST.toLocaleDateString(loc, { day: "numeric", month: "short", timeZone: "Asia/Kolkata" })} से ${end.toLocaleDateString(loc, opts)}` : `${noonIST.toLocaleDateString(loc, { day: "numeric", month: "short", timeZone: "Asia/Kolkata" })} to ${end.toLocaleDateString(loc, opts)}`;
  }
  const monthName = lang === "hi" ? `${HINDI_GREGORIAN_MONTHS[ist.month - 1] || noonIST.toLocaleDateString(loc, { month: "long", timeZone: "Asia/Kolkata" })} ${ist.year}` : `${ENGLISH_MONTH_NAMES[ist.month - 1] || noonIST.toLocaleDateString(loc, { month: "long", timeZone: "Asia/Kolkata" })} ${ist.year}`;
  return monthName;
}
const ENGLISH_MONTH_SHORT = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
const WEEKDAY_EN_SHORT = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const WEEKDAY_EN_FULL = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
function sanitizeWeeklyMonthlyHindiText(input, mode) {
  if (!input) return "";
  let text = sanitizeVedicHindiText(input);
  if (mode === "weekly") {
    text = text.replace(/(?<![\u0900-\u097F])आज\s+का(?![\u0900-\u097F])/gu, "इस सप्ताह का").replace(/(?<![\u0900-\u097F])आज\s+के(?![\u0900-\u097F])/gu, "इस सप्ताह के").replace(/(?<![\u0900-\u097F])आज\s+की(?![\u0900-\u097F])/gu, "इस सप्ताह की").replace(/(?<![\u0900-\u097F])आज\s+रात्रि(?![\u0900-\u097F])/gu, "रात्रि विश्राम के समय").replace(/(?<![\u0900-\u097F])आज\s+शाम(?![\u0900-\u097F])/gu, "सप्ताहांत में").replace(/(?<![\u0900-\u097F])आज\s+प्रातः(?![\u0900-\u097F])/gu, "सप्ताह के आरंभ में").replace(/(?<![\u0900-\u097F])आज(?![\u0900-\u097F])/gu, "इस सप्ताह").replace(/(?<![\u0900-\u097F])दैनिक(?![\u0900-\u097F])/gu, "साप्ताहिक").replace(/(?:इस\s+सप्ताह\s+){2,}/gu, "इस सप्ताह ");
  } else {
    text = text.replace(/(?<![\u0900-\u097F])आज\s+का(?![\u0900-\u097F])/gu, "इस मास का").replace(/(?<![\u0900-\u097F])आज\s+के(?![\u0900-\u097F])/gu, "इस मास के").replace(/(?<![\u0900-\u097F])आज\s+की(?![\u0900-\u097F])/gu, "इस मास की").replace(/(?<![\u0900-\u097F])आज\s+रात्रि(?![\u0900-\u097F])/gu, "मास के उत्तरार्ध में").replace(/(?<![\u0900-\u097F])आज\s+शाम(?![\u0900-\u097F])/gu, "मास के उत्तरार्ध में").replace(/(?<![\u0900-\u097F])आज\s+प्रातः(?![\u0900-\u097F])/gu, "मास के पूर्वार्ध में").replace(/(?<![\u0900-\u097F])आज(?![\u0900-\u097F])/gu, "इस पूरे महीने").replace(/(?<![\u0900-\u097F])दैनिक(?![\u0900-\u097F])/gu, "मासिक").replace(/(?:इस\s+पूरे\s+महीने\s+){2,}/gu, "इस पूरे महीने ");
  }
  return text.replace(/[^\S\r\n]{2,}/g, " ").trim();
}
const weeklyBundleCache = /* @__PURE__ */ new Map();
const monthlyBundleCache = /* @__PURE__ */ new Map();
function joinSignNamesHi(signNums) {
  const names = signNums.map((n) => RASHI_META_LIST[(n - 1 + 12) % 12].nameHi);
  if (names.length === 0) return "";
  if (names.length === 1) return `${names[0]} राशि`;
  return `${names.slice(0, -1).join(", ")} एवं ${names[names.length - 1]} राशि`;
}
function joinSignNamesEn(signNums) {
  const names = signNums.map((n) => RASHI_META_LIST[(n - 1 + 12) % 12].nameEn);
  if (names.length === 0) return "";
  if (names.length === 1) return names[0];
  return `${names.slice(0, -1).join(", ")} & ${names[names.length - 1]}`;
}
function stripMaasSuffixHi(maas) {
  return (maas || "").replace(/\s*\([^)]*\)/g, "").replace(/\s*मास$/u, "").trim();
}
const MAAS_EN_TRANSLIT = {
  "चैत्र": "Chaitra",
  "वैशाख": "Vaishakha",
  "ज्येष्ठ": "Jyeshtha",
  "आषाढ़": "Ashadha",
  "श्रावण": "Shravana",
  "भाद्रपद": "Bhadrapada",
  "आश्विन": "Ashwin",
  "कार्तिक": "Kartik",
  "मार्गशीर्ष": "Margashirsha",
  "पौष": "Pausha",
  "माघ": "Magha",
  "फाल्गुन": "Phalguna"
};
function getWeeklyAstronomicalBundle(safeDate, ist, location, startKundali, startPanchang) {
  const key = `${ist.dateKey}|${location}`;
  const hit = weeklyBundleCache.get(key);
  if (hit) return hit;
  const baseNoon = /* @__PURE__ */ new Date(`${ist.dateKey}T12:00:00+05:30`);
  const endNoon = new Date(baseNoon.getTime() + 6 * 864e5);
  const midNoon = new Date(baseNoon.getTime() + 3 * 864e5);
  const midIst = getISTCalendarParts(midNoon);
  const endIst = getISTCalendarParts(endNoon);
  const weekStartDateHi = `${ist.day} ${HINDI_GREGORIAN_MONTHS[ist.month - 1]} ${ist.year}`;
  const weekEndDateHi = `${endIst.day} ${HINDI_GREGORIAN_MONTHS[endIst.month - 1]} ${endIst.year}`;
  const weekStartDateEn = `${ist.day} ${ENGLISH_MONTH_SHORT[ist.month - 1]} ${ist.year}`;
  const weekEndDateEn = `${endIst.day} ${ENGLISH_MONTH_SHORT[endIst.month - 1]} ${endIst.year}`;
  const days = [];
  const moonSignNumbersTransited = [];
  for (let d = 0; d < 7; d++) {
    const dayDate = new Date(baseNoon.getTime() + d * 864e5);
    const dIst = getISTCalendarParts(dayDate);
    for (const hr of ["00:05", "06:00", "13:00", "20:00", "23:55"]) {
      const ms = (/* @__PURE__ */ new Date(`${dIst.dateKey}T${hr}:00+05:30`)).getTime();
      const lon = getSiderealMoonLonDeg(ms, "LAHIRI");
      const sNum = Math.floor(lon / 30) % 12 + 1;
      if (moonSignNumbersTransited[moonSignNumbersTransited.length - 1] !== sNum) {
        moonSignNumbersTransited.push(sNum);
      }
    }
    const noonMs = (/* @__PURE__ */ new Date(`${dIst.dateKey}T12:00:00+05:30`)).getTime();
    const noonMoonSign = Math.floor(getSiderealMoonLonDeg(noonMs, "LAHIRI") / 30) % 12 + 1;
    const mMeta = RASHI_META_LIST[noonMoonSign - 1];
    const vaarObj = VAAR_LIST[(dIst.weekdayIndex % 7 + 7) % 7];
    days.push({
      dayOffset: d,
      weekdayIndex: dIst.weekdayIndex,
      weekdayHi: vaarObj?.full || "रविवार",
      weekdayEn: WEEKDAY_EN_FULL[dIst.weekdayIndex] || "Sunday",
      weekdayEnShort: WEEKDAY_EN_SHORT[dIst.weekdayIndex] || "Sun",
      shortDateHi: `${dIst.day} ${HINDI_MONTH_SHORT[dIst.month - 1] || ""}`,
      shortDateEn: `${dIst.day} ${ENGLISH_MONTH_SHORT[dIst.month - 1] || ""}`,
      moonSignNumber: noonMoonSign,
      moonSignNameHi: mMeta.nameHi,
      moonSignNameEn: mMeta.nameEn
    });
  }
  const midKundali = generateSampurnKundali("साप्ताहिक मध्य गोचर", midIst.dateKey, "06:00", location);
  const endKundali = generateSampurnKundali("साप्ताहिक अंत गोचर", endIst.dateKey, "06:00", location);
  const planetOrder = [
    { id: "sun", hi: "सूर्य", en: "Sun" },
    { id: "mars", hi: "मंगल", en: "Mars" },
    { id: "mercury", hi: "बुध", en: "Mercury" },
    { id: "jupiter", hi: "गुरु", en: "Jupiter" },
    { id: "venus", hi: "शुक्र", en: "Venus" },
    { id: "saturn", hi: "शनि", en: "Saturn" },
    { id: "rahu", hi: "राहु", en: "Rahu" },
    { id: "ketu", hi: "केतु", en: "Ketu" }
  ];
  const getMeanRahuSignAtIso = (isoDate) => {
    const jd = (/* @__PURE__ */ new Date(`${isoDate}T12:00:00+05:30`)).getTime() / 864e5 + 24405875e-1;
    const T = (jd - 2451545) / 36525;
    const meanNodeTrop = ((125.044555 - 1934.1361849 * T + 20762e-7 * T * T) % 360 + 360) % 360;
    const meanLahiri = 23.8570922 + (50.290966 * T + 1.11113 * T * T) / 3600;
    const sidLon = ((meanNodeTrop - meanLahiri) % 360 + 360) % 360;
    return Math.floor(sidLon / 30) % 12 + 1;
  };
  const meanRahuWeekSign = getMeanRahuSignAtIso(midIst.dateKey);
  const meanKetuWeekSign = (meanRahuWeekSign - 1 + 6) % 12 + 1;
  const formatHeaderDignityTagsHi = (planetId, rashiNumVal, isRetro, isCombust = false) => {
    const tags = getPlanetStatusTagsHi(planetId, rashiNumVal, isRetro, isCombust).map(
      (t) => t === "स्वक्षेत्री" ? "स्वराशि" : t
    );
    return tags.length > 0 ? ` (${tags.join("/")})` : "";
  };
  const formatHeaderDignityTagsEn = (planetId, rashiNumVal, isRetro, isCombust = false) => {
    const tags = getPlanetStatusTagsEn(planetId, rashiNumVal, isRetro, isCombust);
    return tags.length > 0 ? ` (${tags.join("/")})` : "";
  };
  const hiParts = [];
  const enParts = [];
  for (const pl of planetOrder) {
    if (pl.id === "rahu" || pl.id === "ketu") {
      const nodeSign = pl.id === "rahu" ? meanRahuWeekSign : meanKetuWeekSign;
      const nodeMeta = RASHI_META_LIST[(nodeSign - 1 + 12) % 12];
      hiParts.push(`${pl.hi}: ${nodeMeta.nameHi}`);
      enParts.push(`${pl.en}: ${nodeMeta.nameEn}`);
      continue;
    }
    const pStart = startKundali.planets.find((p) => p.id === pl.id);
    const pMid = midKundali.planets.find((p) => p.id === pl.id);
    const pEnd = endKundali.planets.find((p) => p.id === pl.id);
    if (!pStart || !pEnd) continue;
    const steps = [];
    for (const sample of [pStart, pMid, pEnd]) {
      if (!sample) continue;
      const prev = steps[steps.length - 1];
      if (!prev || prev.rashiNumber !== sample.rashiNumber) {
        steps.push({
          rashiNumber: sample.rashiNumber,
          isRetrograde: sample.isRetrograde,
          isCombust: sample.isCombust
        });
      } else {
        if (sample.isRetrograde) prev.isRetrograde = true;
        if (sample.isCombust) prev.isCombust = true;
      }
    }
    if (steps.length > 1) {
      const hiSeq = steps.map((st) => {
        const meta = RASHI_META_LIST[(st.rashiNumber - 1 + 12) % 12];
        return `${meta.nameHi}${formatHeaderDignityTagsHi(pl.id, st.rashiNumber, st.isRetrograde, false)}`;
      }).join(" → ");
      const enSeq = steps.map((st) => {
        const meta = RASHI_META_LIST[(st.rashiNumber - 1 + 12) % 12];
        return `${meta.nameEn}${formatHeaderDignityTagsEn(pl.id, st.rashiNumber, st.isRetrograde, false)}`;
      }).join(" → ");
      hiParts.push(`${pl.hi}: ${hiSeq}`);
      enParts.push(`${pl.en}: ${enSeq}`);
    } else {
      const st = steps[0];
      const sMeta = RASHI_META_LIST[(st.rashiNumber - 1 + 12) % 12];
      hiParts.push(`${pl.hi}: ${sMeta.nameHi}${formatHeaderDignityTagsHi(pl.id, st.rashiNumber, st.isRetrograde, st.isCombust)}`);
      enParts.push(`${pl.en}: ${sMeta.nameEn}${formatHeaderDignityTagsEn(pl.id, st.rashiNumber, st.isRetrograde, st.isCombust)}`);
    }
  }
  const bundle = {
    weekStartDateHi,
    weekEndDateHi,
    weekStartDateEn,
    weekEndDateEn,
    vikramSamvat: Number(startPanchang.vikramSamvat || 2083),
    shakaSamvat: Number(startPanchang.shakaSamvat || 1948),
    days,
    moonSignNumbersTransited,
    moonSignsTransitedHi: joinSignNamesHi(moonSignNumbersTransited),
    moonSignsTransitedEn: joinSignNamesEn(moonSignNumbersTransited),
    startKundali,
    midKundali,
    endKundali,
    planetarySummaryHi: hiParts.join(" • "),
    planetarySummaryEn: enParts.join(" • ")
  };
  if (weeklyBundleCache.size > 40) weeklyBundleCache.clear();
  weeklyBundleCache.set(key, bundle);
  return bundle;
}
function getMonthlyAstronomicalBundle(ist, location, fallbackPanchang) {
  const ymKey = `${ist.year}-${String(ist.month).padStart(2, "0")}|${location}`;
  const hit = monthlyBundleCache.get(ymKey);
  if (hit) return hit;
  const year = ist.year;
  const month = ist.month;
  const daysInMonth = new Date(Date.UTC(year, month, 0)).getUTCDate();
  const mmStr = String(month).padStart(2, "0");
  const startIso = `${year}-${mmStr}-01`;
  const midIso = `${year}-${mmStr}-15`;
  const endIso = `${year}-${mmStr}-${String(daysInMonth).padStart(2, "0")}`;
  const startKundali = generateSampurnKundali("मासिक प्रारंभ गोचर", startIso, "06:00", location);
  const midKundali = generateSampurnKundali("मासिक मध्य गोचर", midIso, "06:00", location);
  const endKundali = generateSampurnKundali("मासिक अंत गोचर", endIso, "06:00", location);
  const locObjForMonth = resolveCityCoordinates(location);
  const monthStartPanchang = buildSingleDayPanchang(year, month, 1, false, /* @__PURE__ */ new Date(), locObjForMonth);
  const monthMidPanchang = buildSingleDayPanchang(year, month, 15, false, /* @__PURE__ */ new Date(), locObjForMonth);
  const monthEndPanchang = buildSingleDayPanchang(year, month, daysInMonth, false, /* @__PURE__ */ new Date(), locObjForMonth);
  const maas1 = stripMaasSuffixHi(monthStartPanchang.hinduMaas || fallbackPanchang.hinduMaas || "चैत्र");
  const maas2 = stripMaasSuffixHi(monthEndPanchang.hinduMaas || maas1);
  const uniqueMaas = maas1 === maas2 ? [maas1] : [maas1, maas2];
  const hinduLunarMonthsHi = uniqueMaas.join(" – ");
  const hinduLunarMonthsEn = uniqueMaas.map((m) => MAAS_EN_TRANSLIT[m] || m).join(" – ");
  const monthNameHi = HINDI_GREGORIAN_MONTHS[month - 1] || "";
  const monthNameEn = ENGLISH_MONTH_NAMES[month - 1] || "";
  const gregorianMonthYearHi = `${monthNameHi} ${year}`;
  const gregorianMonthYearEn = `${monthNameEn} ${year}`;
  let sankrantiDay = null;
  let sankrantiFromSign = startKundali.planets.find((p) => p.id === "sun")?.rashiNumber || 1;
  let sankrantiToSign = sankrantiFromSign;
  let prevSunSign = Math.floor(getSiderealSunLonDeg((/* @__PURE__ */ new Date(`${startIso}T06:00:00+05:30`)).getTime(), "LAHIRI") / 30) % 12 + 1;
  for (let d = 1; d <= daysInMonth; d++) {
    const dStr = `${year}-${mmStr}-${String(d).padStart(2, "0")}`;
    const dSign = Math.floor(getSiderealSunLonDeg((/* @__PURE__ */ new Date(`${dStr}T18:00:00+05:30`)).getTime(), "LAHIRI") / 30) % 12 + 1;
    if (dSign !== prevSunSign) {
      sankrantiDay = d;
      sankrantiFromSign = prevSunSign;
      sankrantiToSign = dSign;
      break;
    }
    prevSunSign = dSign;
  }
  const fromSunMeta = RASHI_META_LIST[(sankrantiFromSign - 1 + 12) % 12];
  const toSunMeta = RASHI_META_LIST[(sankrantiToSign - 1 + 12) % 12];
  const sankrantiSummaryHi = sankrantiDay ? `सूर्य का ${toSunMeta.nameHi} राशि में प्रवेश (${sankrantiDay} ${monthNameHi} — ${toSunMeta.nameHi} संक्रांति)` : `सूर्य देव का ${fromSunMeta.nameHi} राशि में पूर्ण मासिक गोचर`;
  const sankrantiSummaryEn = sankrantiDay ? `Sun enters ${toSunMeta.nameEn} on ${ENGLISH_MONTH_SHORT[month - 1]} ${sankrantiDay} (${toSunMeta.nameEn} Sankranti)` : `Sun transits ${fromSunMeta.nameEn} throughout ${monthNameEn}`;
  const planetOrder = [
    { id: "sun", hi: "सूर्य", en: "Sun" },
    { id: "mars", hi: "मंगल", en: "Mars" },
    { id: "mercury", hi: "बुध", en: "Mercury" },
    { id: "venus", hi: "शुक्र", en: "Venus" },
    { id: "jupiter", hi: "गुरु", en: "Jupiter" },
    { id: "saturn", hi: "शनि", en: "Saturn" },
    { id: "rahu", hi: "राहु", en: "Rahu" },
    { id: "ketu", hi: "केतु", en: "Ketu" }
  ];
  const midJd = (/* @__PURE__ */ new Date(`${midIso}T12:00:00+05:30`)).getTime() / 864e5 + 24405875e-1;
  const midT = (midJd - 2451545) / 36525;
  const meanNodeTropMonth = ((125.044555 - 1934.1361849 * midT + 20762e-7 * midT * midT) % 360 + 360) % 360;
  const meanLahiriMonth = 23.8570922 + (50.290966 * midT + 1.11113 * midT * midT) / 3600;
  const meanRahuMonthSign = Math.floor(((meanNodeTropMonth - meanLahiriMonth) % 360 + 360) % 360 / 30) % 12 + 1;
  const meanKetuMonthSign = (meanRahuMonthSign - 1 + 6) % 12 + 1;
  const q1Iso = `${year}-${mmStr}-08`;
  const q3Iso = `${year}-${mmStr}-${String(Math.min(22, daysInMonth)).padStart(2, "0")}`;
  const q1Kundali = generateSampurnKundali("मासिक प्रथम चतुर्थांश गोचर", q1Iso, "06:00", location);
  const q3Kundali = generateSampurnKundali("मासिक तृतीय चतुर्थांश गोचर", q3Iso, "06:00", location);
  const monthSampleKundalis = [startKundali, q1Kundali, midKundali, q3Kundali, endKundali];
  const formatMonthlySignWithDignityHi = (planetId, rashiNumVal, isRetro) => {
    const signName = RASHI_META_LIST[(rashiNumVal - 1 + 12) % 12].nameHi;
    const tags = getPlanetStatusTagsHi(planetId, rashiNumVal, isRetro, false).map(
      (t) => t === "स्वक्षेत्री" ? "स्वराशि" : t
    );
    return tags.length > 0 ? `${signName} (${tags.join("/")})` : signName;
  };
  const formatMonthlySignWithDignityEn = (planetId, rashiNumVal, isRetro) => {
    const signName = RASHI_META_LIST[(rashiNumVal - 1 + 12) % 12].nameEn;
    const tags = getPlanetStatusTagsEn(planetId, rashiNumVal, isRetro, false);
    return tags.length > 0 ? `${signName} (${tags.join("/")})` : signName;
  };
  const hiParts = [];
  const enParts = [];
  for (const pl of planetOrder) {
    if (pl.id === "rahu" || pl.id === "ketu") {
      const nodeSign = pl.id === "rahu" ? meanRahuMonthSign : meanKetuMonthSign;
      const nodeMeta = RASHI_META_LIST[(nodeSign - 1 + 12) % 12];
      hiParts.push(`${pl.hi}: ${nodeMeta.nameHi}`);
      enParts.push(`${pl.en}: ${nodeMeta.nameEn}`);
      continue;
    }
    if (pl.id === "sun" && sankrantiDay) {
      const fromSunHi = formatMonthlySignWithDignityHi("sun", sankrantiFromSign, false);
      const toSunHi = formatMonthlySignWithDignityHi("sun", sankrantiToSign, false);
      const fromSunEn = formatMonthlySignWithDignityEn("sun", sankrantiFromSign, false);
      const toSunEn = formatMonthlySignWithDignityEn("sun", sankrantiToSign, false);
      hiParts.push(`सूर्य: ${fromSunHi} → ${toSunHi} (${sankrantiDay} ${HINDI_MONTH_SHORT[month - 1]} संक्रांति)`);
      enParts.push(`Sun: ${fromSunEn} → ${toSunEn} (${ENGLISH_MONTH_SHORT[month - 1]} ${sankrantiDay})`);
      continue;
    }
    const seqSteps = [];
    for (const k of monthSampleKundalis) {
      const p = k.planets.find((x) => x.id === pl.id);
      if (!p) continue;
      const prev = seqSteps[seqSteps.length - 1];
      if (!prev || prev.rashiNumber !== p.rashiNumber) {
        seqSteps.push({ rashiNumber: p.rashiNumber, isRetrograde: p.isRetrograde });
      } else if (p.isRetrograde) {
        prev.isRetrograde = true;
      }
    }
    if (seqSteps.length === 0) continue;
    if (seqSteps.length > 1) {
      hiParts.push(
        `${pl.hi}: ${seqSteps.map((st) => formatMonthlySignWithDignityHi(pl.id, st.rashiNumber, st.isRetrograde)).join(" → ")}`
      );
      enParts.push(
        `${pl.en}: ${seqSteps.map((st) => formatMonthlySignWithDignityEn(pl.id, st.rashiNumber, st.isRetrograde)).join(" → ")}`
      );
    } else {
      const only = seqSteps[0];
      hiParts.push(`${pl.hi}: ${formatMonthlySignWithDignityHi(pl.id, only.rashiNumber, only.isRetrograde)}`);
      enParts.push(`${pl.en}: ${formatMonthlySignWithDignityEn(pl.id, only.rashiNumber, only.isRetrograde)}`);
    }
  }
  const sunLon1 = getSiderealSunLonDeg((/* @__PURE__ */ new Date(`${startIso}T12:00:00+05:30`)).getTime(), "LAHIRI");
  const moonLon1 = getSiderealMoonLonDeg((/* @__PURE__ */ new Date(`${startIso}T12:00:00+05:30`)).getTime(), "LAHIRI");
  const elong1 = (moonLon1 - sunLon1 + 360) % 360;
  const startsShukla = elong1 < 180;
  const pakshaWindowHighlightHi = startsShukla ? "शुक्ल पक्ष (मास पूर्वार्ध) एवं संक्रांति उपरांत उत्तरार्ध" : "मास उत्तरार्ध (शुक्ल पक्ष) व संक्रांति काल";
  const pakshaWindowHighlightEn = startsShukla ? "Shukla Paksha (First Half) & Post-Sankranti Second Half" : "Shukla Paksha (Second Half) & Post-Sankranti Phase";
  const bundle = {
    gregorianMonthYearHi,
    gregorianMonthYearEn,
    hinduLunarMonthsHi,
    hinduLunarMonthsEn,
    vikramSamvat: Number(monthMidPanchang.vikramSamvat || fallbackPanchang.vikramSamvat || 2083),
    shakaSamvat: Number(monthMidPanchang.shakaSamvat || fallbackPanchang.shakaSamvat || 1948),
    sankrantiSummaryHi,
    sankrantiSummaryEn,
    sankrantiDay,
    sankrantiFromSign,
    sankrantiToSign,
    startKundali,
    midKundali,
    endKundali,
    planetarySummaryHi: hiParts.join(" • "),
    planetarySummaryEn: enParts.join(" • "),
    pakshaWindowHighlightHi,
    pakshaWindowHighlightEn
  };
  if (monthlyBundleCache.size > 24) monthlyBundleCache.clear();
  monthlyBundleCache.set(ymKey, bundle);
  return bundle;
}
const VAAR_DAILY_PROFILES = [
  {
    vaarNameHi: "रविवार",
    vaarNameEn: "Sunday",
    lordId: "sun",
    lordHi: "भगवान सूर्यनारायण",
    lordEn: "Lord Sun (Surya)",
    careerHi: "रविवार (सूर्य प्रधान दिन) होने से राजकीय, प्रशासनिक और नेतृत्व से जुड़े कार्यों की रूपरेखा बनाना श्रेष्ठ रहेगा।",
    careerEn: "Being Sunday (ruled by Sun), planning leadership goals and authoritative initiatives yields clarity.",
    wealthHi: "अहंकार या दिखावे के खर्च से बचकर दीर्घकालीन प्रतिष्ठा बढ़ाने वाले कार्यों में धन लगाएं।",
    wealthEn: "Avoid status-driven overspending and prioritize long-term value.",
    familyHi: "पिता एवं परिवार के वरिष्ठ जनों के साथ आत्मीय समय बिताने से घर में सकारात्मक तेज बढ़ेगा।",
    familyEn: "Warm time with father figures and family elders brings dignity and peace at home.",
    educationHi: "उच्च लक्ष्य, प्रशासनिक अध्ययन और आत्मविश्वास बढ़ाने वाले स्वाध्याय में उत्तम एकाग्रता रहेगी।",
    educationEn: "Ideal day for high-level revision, clarity of goals, and confident self-study.",
    healthHi: "प्रातः सूर्य की कोमल धूप लें, नेत्रों की रक्षा करें तथा हल्का सात्त्विक आहार ग्रहण करें।",
    healthEn: "Soak in gentle morning sunlight, rest your eyes, and keep meals light.",
    remedyHi: "रविवार विशेष उपाय: प्रातः तांबे के लोटे से सूर्यदेव को अर्घ्य दें एवं गुड़-गेहूं या लाल फल का दान करें।",
    remedyEn: "Sunday Remedy: Offer water to the rising Sun from a copper vessel and donate jaggery or wheat.",
    doHi: "प्रातः सूर्योदय के समय सूर्य अर्घ्य देकर दिन के प्रमुख लक्ष्य तय करें।",
    dontHi: "रविवार को पिता या वरिष्ठों के प्रति कटु वाणी और अत्यधिक नमक-तेल से बचें।"
  },
  {
    vaarNameHi: "सोमवार",
    vaarNameEn: "Monday",
    lordId: "moon",
    lordHi: "चन्द्र देव एवं भगवान शिव",
    lordEn: "Lord Moon & Shiva",
    careerHi: "सोमवार (चन्द्र प्रधान दिन) पर सौम्य संवाद, जनसंपर्क, कला और सेवा-क्षेत्र से जुड़े कार्यों में विशेष सफलता मिलेगी।",
    careerEn: "Being Monday (ruled by Moon), calm diplomacy, public outreach, and service roles thrive.",
    wealthHi: "तरल व्यवसाय, डेयरी, कृषि, जल या दैनिक उपयोग की वस्तुओं से जुड़े व्यापार में शुभ लाभ होगा।",
    wealthEn: "Trade involving daily essentials, liquids, agriculture, and steady cash flow prospers.",
    familyHi: "माता का आशीर्वाद लें; जीवनसाथी के साथ कोमल व भावनात्मक संवाद से घर का वातावरण शांत बनेगा।",
    familyEn: "Seek blessings from your mother and nurture gentle emotional understanding with your spouse.",
    educationHi: "स्मरण-शक्ति और कल्पनाशील विषयों (साहित्य, चिकित्सा, मनोविज्ञान) के अध्ययन में गहरी पकड़ बनेगी।",
    educationEn: "Memory retention and intuitive subjects like humanities, medicine, and arts flourish.",
    healthHi: "मानसिक तनाव से दूर रहें, पर्याप्त शुद्ध जल पिएं और रात्रि में समय पर विश्राम करें।",
    healthEn: "Keep the mind calm, hydrate well, and ensure restful sleep.",
    remedyHi: 'सोमवार विशेष उपाय: शिवलिंग पर जल व कच्चा दूध अर्पित कर "ॐ नमः शिवाय" जपें तथा चावल या दूध का दान करें।',
    remedyEn: "Monday Remedy: Offer water and raw milk to Shiva Lingam while chanting Om Namah Shivaya.",
    doHi: "शीतल और शांत चित्त से अपने सप्ताह की कार्य-योजना प्रारंभ करें।",
    dontHi: "भावुकता में बहकर कोई बड़ा व्यावसायिक या पारिवारिक निर्णय न लें।"
  },
  {
    vaarNameHi: "मंगलवार",
    vaarNameEn: "Tuesday",
    lordId: "mars",
    lordHi: "मंगल देव एवं श्री हनुमान जी",
    lordEn: "Mars & Lord Hanuman",
    careerHi: "मंगलवार (मंगल प्रधान दिन) होने से कठिन, लंबित और तकनीकी/निर्माण कार्यों को साहसपूर्वक निपटाने के लिए श्रेष्ठ दिन है।",
    careerEn: "Being Tuesday (ruled by Mars), tackle bold, pending, engineering, and action-oriented tasks.",
    wealthHi: "भूमि, भवन, वाहन या पुराने अटके ऋण/भुगतान के मामलों को सुलझाने में ठोस प्रगति होगी।",
    wealthEn: "Real estate, machinery, and clearing overdue financial obligations see firm progress.",
    familyHi: "भाई-बहनों के साथ सहयोग बनाए रखें तथा पारिवारिक वार्ता में शीघ्रता या क्रोध से बचें।",
    familyEn: "Coordinate kindly with siblings and avoid impatience in family discussions.",
    educationHi: "गणित, अभियांत्रिकी, रक्षा, विज्ञान एवं प्रतियोगी परीक्षाओं के कठिन अभ्यास हेतु अद्भुत ऊर्जा रहेगी।",
    educationEn: "High vigor for solving tough math, engineering, science, and competitive exam drills.",
    healthHi: "रक्तचाप और उष्णता (पित्त) संतुलित रखने हेतु नियमित व्यायाम करें व अधिक मिर्च-मसाले से बचें।",
    healthEn: "Burn excess heat with morning exercise and avoid overly spicy foods.",
    remedyHi: "मंगलवार विशेष उपाय: श्री हनुमान चालीसा का पाठ करें, चमेली के तेल का दीपक जलाएं व गुड़-चने या लाल मसूर दान करें।",
    remedyEn: "Tuesday Remedy: Recite Hanuman Chalisa and donate jaggery or red lentils.",
    doHi: "जो काम लंबे समय से टल रहे थे, उन्हें आज पूरे पराक्रम से पूर्ण करें।",
    dontHi: "क्रोध, वाहन की तेज गति और बिना विचारे उधार लेन-देन से बचें।"
  },
  {
    vaarNameHi: "बुधवार",
    vaarNameEn: "Wednesday",
    lordId: "mercury",
    lordHi: "बुध देव एवं श्री गणेश जी",
    lordEn: "Mercury & Lord Ganesha",
    careerHi: "बुधवार (बुध प्रधान दिन) पर व्यापारिक अनुबंध, लेखा-जोखा, आईटी, मीडिया और मार्केटिंग कार्यों में त्वरित लाभ होगा।",
    careerEn: "Being Wednesday (ruled by Mercury), negotiations, accounting, IT, and commercial deals excel.",
    wealthHi: "बही-खाते, टैक्स, बैंकिंग और नवीन आय-योजनाओं की समीक्षा करने से आर्थिक लाभ बढ़ेगा।",
    wealthEn: "Reviewing ledgers, banking, and smart trade calculations boosts profits.",
    familyHi: "रिश्तेदारों, बुआ-बहन और मित्रों के साथ हास्य-विनोद व मधुर संवाद से संबंध प्रगाढ़ होंगे।",
    familyEn: "Cheerful dialogue with relatives and friends strengthens household warmth.",
    educationHi: "तर्कशक्ति, लेखन, वाणिज्य, कोडिंग और भाषा-कौशल से जुड़े छात्रों को आज विशिष्ट उपलब्धि मिलेगी।",
    educationEn: "Sharp intellect favors commerce, coding, writing, logic, and communication studies.",
    healthHi: "स्नायु तंत्र और पाचन को स्वस्थ रखने हेतु हरी सब्जियां, अंकुरित अन्न और प्राणायाम अपनाएं।",
    healthEn: "Include leafy greens and deep breathing to nourish nerves and digestion.",
    remedyHi: "बुधवार विशेष उपाय: श्री गणेश जी को २१ दूर्वा व मोदक अर्पित करें तथा गौमाता को हरा चारा या साबुत मूंग खिलाएं।",
    remedyEn: "Wednesday Remedy: Offer 21 Durva blades to Lord Ganesha and feed green fodder to a cow.",
    doHi: "कागजी अनुबंध, प्रेजेंटेशन और महत्वपूर्ण व्यावसायिक कॉल आज संपन्न करें।",
    dontHi: "किसी की निंदा-चर्चा या बिना पढ़े महत्वपूर्ण दस्तावेजों पर हस्ताक्षर न करें।"
  },
  {
    vaarNameHi: "गुरुवार",
    vaarNameEn: "Thursday",
    lordId: "jupiter",
    lordHi: "देवगुरु बृहस्पति एवं श्री विष्णु",
    lordEn: "Jupiter & Lord Vishnu",
    careerHi: "गुरुवार (बृहस्पति प्रधान दिन) होने से शिक्षा, परामर्श, न्याय, बैंक व उच्च प्रबंधन में सम्मान व विस्तार मिलेगा।",
    careerEn: "Being Thursday (ruled by Jupiter), advisory, teaching, finance, and ethical leadership expand.",
    wealthHi: "स्वर्ण, दीर्घकालीन सुरक्षित बचत, गुरुजन की सलाह और धर्मोचित निवेश से स्थायी समृद्धि आएगी।",
    wealthEn: "Gold, safe long-term deposits, and principled financial planning attract lasting abundance.",
    familyHi: "संतान की शिक्षा-संस्कार, बुजुर्गों के आशीर्वाद और घर में धार्मिक चर्चा से मंगल वातावरण बनेगा।",
    familyEn: "Children’s progress, elder guidance, and sacred home traditions bring deep joy.",
    educationHi: "उच्च शिक्षा, शास्त्र, विधि, दर्शन एवं शोध कार्यों में आज गुरु-कृपा से कठिन विषय सहज समझ आएंगे।",
    educationEn: "Higher studies, law, research, and philosophical comprehension reach peak clarity.",
    healthHi: "यकृत (लिवर) और पाचन की सुरक्षा हेतु गरिष्ठ व अत्यधिक मीठे भोजन से बचें, हल्दी-युक्त सात्त्विक आहार लें।",
    healthEn: "Favor light sattvic meals with turmeric and avoid heavy fried foods.",
    remedyHi: "गुरुवार विशेष उपाय: भगवान श्री विष्णु को पीले पुष्प व हल्दी/केसर तिलक अर्पित करें तथा चने की दाल व केले का दान करें।",
    remedyEn: "Thursday Remedy: Apply saffron/turmeric tilak, worship Lord Vishnu, and donate chana dal or bananas.",
    doHi: "बड़ों, गुरु या शिक्षक का आशीर्वाद लेकर शुभ एवं दीर्घकालीन निर्णय लें।",
    dontHi: "सत्य व नैतिकता से समझौता करने वाले किसी शॉर्टकट प्रलोभन में न पड़ें।"
  },
  {
    vaarNameHi: "शुक्रवार",
    vaarNameEn: "Friday",
    lordId: "venus",
    lordHi: "शुक्र देव एवं माँ महालक्ष्मी",
    lordEn: "Venus & Goddess Mahalakshmi",
    careerHi: "शुक्रवार (शुक्र प्रधान दिन) पर कला, डिजाइन, वस्त्र, आतिथ्य, जनसंपर्क और ग्राहक-सेवा कार्यों में विशेष आकर्षण व प्रगति होगी।",
    careerEn: "Being Friday (ruled by Venus), creative arts, design, hospitality, and client diplomacy flourish.",
    wealthHi: "लक्ष्मी कृपा से दैनिक व्यापारिक आवक बढ़ेगी; गृह-सज्जा और सुख-सुविधाओं पर संतुलित व्यय संभव है।",
    wealthEn: "Commercial inflow improves; balance comfort upgrades with mindful savings.",
    familyHi: "जीवनसाथी के साथ स्नेह, उपहार या आत्मीय समय बिताने से दांपत्य माधुर्य नई ऊंचाई पर पहुंचेगा।",
    familyEn: "Affectionate gestures and quality time with your spouse enrich domestic harmony.",
    educationHi: "कला, संगीत, वास्तुकला, मीडिया और रचनात्मक परियोजनाओं से जुड़े विद्यार्थियों को विशेष सराहना मिलेगी।",
    educationEn: "Arts, architecture, media, and creative design learners produce standout work.",
    healthHi: "स्वच्छता, शीतल पेय के बजाय सुपाच्य आहार और पर्याप्त जल सेवन से त्वचा व ऊर्जा में निखार रहेगा।",
    healthEn: "Maintain hygiene, steady hydration, and balanced nourishment for vitality.",
    remedyHi: "शुक्रवार विशेष उपाय: माँ महालक्ष्मी के समक्ष घी का दीपक जलाकर श्रीसूक्त या कनकधारा स्तोत्र पढ़ें व सफेद मिठाई/खीर अर्पित करें।",
    remedyEn: "Friday Remedy: Light a ghee lamp before Goddess Lakshmi and offer white sweets.",
    doHi: "स्वच्छ, सुरुचिपूर्ण वस्त्र धारण करें और सहयोगियों के साथ सौहार्दपूर्ण व्यवहार रखें।",
    dontHi: "दिखावे या विलासिता के चक्कर में बजट से अधिक व्यय न करें।"
  },
  {
    vaarNameHi: "शनिवार",
    vaarNameEn: "Saturday",
    lordId: "saturn",
    lordHi: "न्यायदेव शनि एवं श्री हनुमान जी",
    lordEn: "Lord Shani & Hanuman",
    careerHi: "शनिवार (शनि प्रधान दिन) पर अनुशासन, धैर्य, लोहा-मशीनरी, निर्माण और लंबित कार्यों की बारीकी से समीक्षा लाभ देगी।",
    careerEn: "Being Saturday (ruled by Saturn), disciplined focus, audits, engineering, and clearing backlogs pay off.",
    wealthHi: "अतिरिक्त जोखिम व सट्टे से दूर रहें; अनुशासित बचत और स्थायी संपत्ति का नियोजन अत्यंत शुभ रहेगा।",
    wealthEn: "Avoid speculative risks; steady discipline and asset planning safeguard wealth.",
    familyHi: "परिवार में विनम्रता रखें और घर के सेवकों व वृद्धजनों के प्रति संवेदनशील सहयोग का भाव दिखाएं।",
    familyEn: "Practice humility at home and show kindness toward elders and household helpers.",
    educationHi: "निरंतर अभ्यास, कठिन विषयों के दोहराव (रिवीजन) और समय-प्रबंधन से विद्यार्थियों को पक्की मजबूती मिलेगी।",
    educationEn: "Steady revision, structured time-tables, and patient practice solidify mastery.",
    healthHi: "जोड़ों, घुटनों व वात की शांति के लिए प्रातः हल्की मालिश, स्ट्रेचिंग और ताजा गर्म भोजन लाभकारी रहेगा।",
    healthEn: "Gentle stretching, warm meals, and joint care support stamina.",
    remedyHi: "शनिवार विशेष उपाय: संध्या समय पीपल वृक्ष के नीचे सरसों तेल का दीपक जलाएं और निर्धनों को काले तिल, उड़द या अन्न दान करें।",
    remedyEn: "Saturday Remedy: Light a mustard oil lamp under a Peepal tree at dusk and donate black sesame or food.",
    doHi: "अधूरे कार्यों को अनुशासनपूर्वक समाप्त करें और जरूरतमंद की सहायता करें।",
    dontHi: "आलस्य, कार्य को कल पर टालने की प्रवृत्ति और किसी श्रमिक के अपमान से बचें।"
  }
];
const NAKSHATRA_DAILY_QUALITIES = [
  { nameHi: "अश्विनी", lordHi: "केतु", natureHi: "क्षिप्र संज्ञक", effectHi: "त्वरित पहल, औषधि/आरोग्य लाभ और नई योजनाओं के शुभारंभ हेतु अत्यंत गतिशील ऊर्जा।" },
  { nameHi: "भरणी", lordHi: "शुक्र", natureHi: "उग्र संज्ञक", effectHi: "दृढ़ संकल्प, कलात्मक साधना और अधूरे कार्यों को निर्णायक रूप देने की शक्ति।" },
  { nameHi: "कृत्तिका", lordHi: "सूर्य", natureHi: "मिश्र संज्ञक", effectHi: "प्रखर तेज, स्पष्ट निर्णय और अनुशासन से बाधाओं को भस्म करने का योग।" },
  { nameHi: "रोहिणी", lordHi: "चन्द्र", natureHi: "ध्रुव (स्थिर)", effectHi: "स्थायी निर्माण, धन-धान्य वृद्धि, सौंदर्य व पारिवारिक सुख के लिए सर्वश्रेष्ठ पोषक संयोग।" },
  { nameHi: "मृगशिरा", lordHi: "मंगल", natureHi: "मृदु (मैत्र)", effectHi: "नवीन खोज, मधुर संवाद, वस्त्र-आभूषण व मित्रता बढ़ाने के लिए शुभ फलदायी।" },
  { nameHi: "आर्द्रा", lordHi: "राहु", natureHi: "तीक्ष्ण संज्ञक", effectHi: "गहन शोध, तकनीकी विश्लेषण और पुरानी उलझनों को जड़ से सुलझाने हेतु उपयोगी।" },
  { nameHi: "पुनर्वसु", lordHi: "बृहस्पति", natureHi: "चर संज्ञक", effectHi: "नव-नव सृजन, खोई प्रतिष्ठा की पुनः प्राप्ति, यात्रा और शांत पारिवारिक समन्वय।" },
  { nameHi: "पुष्य", lordHi: "शनि", natureHi: "क्षिप्र व सर्वार्थ पोषक", effectHi: "सभी नक्षत्रों के राजा पुष्य के प्रभाव से स्थायी निवेश, विद्या, धर्म व धन सिद्धि के प्रबल योग।" },
  { nameHi: "आश्लेषा", lordHi: "बुध", natureHi: "तीक्ष्ण संज्ञक", effectHi: "गूढ़ कूटनीति, सूक्ष्म व्यावसायिक समझ और गोपनीय योजनाओं में सतर्क सफलता।" },
  { nameHi: "मघा", lordHi: "केतु", natureHi: "उग्र (पितृ देव)", effectHi: "कुल-परंपरा, वरिष्ठों का आशीर्वाद, राजकीय सम्मान और नेतृत्व शक्ति में वृद्धि।" },
  { nameHi: "पूर्वाफाल्गुनी", lordHi: "शुक्र", natureHi: "उग्र व कलात्मक", effectHi: "रचनात्मक अभिव्यक्ति, वैवाहिक माधुर्य और जीवन में उत्साह व आनंद का संचार।" },
  { nameHi: "उत्तराफाल्गुनी", lordHi: "सूर्य", natureHi: "ध्रुव (स्थिर)", effectHi: "स्थायी अनुबंध, साझेदारी में विश्वसनीयता और दीर्घकालीन मान-सम्मान की प्राप्ति।" },
  { nameHi: "हस्त", lordHi: "चन्द्र", natureHi: "क्षिप्र व हस्तकौशल", effectHi: "स्व-हस्त कौशल, व्यापारिक चतुरता, खरीद-बिक्री और त्वरित कार्य-निष्पादन में श्रेष्ठ सिद्धि।" },
  { nameHi: "चित्रा", lordHi: "मंगल", natureHi: "मृदु संज्ञक", effectHi: "सौंदर्य, वास्तुकला, ब्रांडिंग और आकर्षक प्रस्तुति से कार्यक्षेत्र में चमक लाने वाला दिन।" },
  { nameHi: "स्वाति", lordHi: "राहु", natureHi: "चर संज्ञक", effectHi: "स्वतंत्र उद्यम, व्यापार विस्तार, लचीलापन और दूरस्थ संपर्कों से लाभ का योग।" },
  { nameHi: "विशाखा", lordHi: "बृहस्पति", natureHi: "मिश्र संज्ञक", effectHi: "लक्ष्य के प्रति एकाग्र निष्ठा, धार्मिक संकल्प और चरणबद्ध सफलता की प्राप्ति।" },
  { nameHi: "अनुराधा", lordHi: "शनि", natureHi: "मृदु (मैत्र)", effectHi: "गहरी मित्रता, टीम-वर्क, भक्ति और संगठनात्मक कार्यों में अत्यंत सौहार्दपूर्ण प्रगति।" },
  { nameHi: "ज्येष्ठा", lordHi: "बुध", natureHi: "तीक्ष्ण व रक्षक", effectHi: "प्रशासनिक परिपक्वता, गुप्त शत्रुओं पर विजय और अनुभवी संरक्षण का प्रभाव।" },
  { nameHi: "मूल", lordHi: "केतु", natureHi: "तीक्ष्ण व मूलभूत", effectHi: "समस्या की जड़ तक पहुंचने, गहन आध्यात्मिक चिंतन और अनावश्यक बोझ त्यागने का दिन।" },
  { nameHi: "पूर्वाषाढ़ा", lordHi: "शुक्र", natureHi: "उग्र व अजेय", effectHi: "अदम्य आत्मविश्वास, कला-साहित्य और जनसमर्थन से विजय प्राप्त करने की ऊर्जा।" },
  { nameHi: "उत्तराषाढ़ा", lordHi: "सूर्य", natureHi: "ध्रुव (स्थिर)", effectHi: "अटल धर्म-नीति, राजकीय सहयोग और दीर्घकाल तक टिकने वाली सफलता का संयोग।" },
  { nameHi: "श्रवण", lordHi: "चन्द्र", natureHi: "चर (ज्ञान श्रवण)", effectHi: "ज्ञान अर्जन, परामर्श, संगीत/संवाद और बड़ों की वाणी सुनकर सही मार्ग चुनने का अवसर।" },
  { nameHi: "धनिष्ठा", lordHi: "मंगल", natureHi: "चर व वैभवप्रद", effectHi: "समृद्धि, सामूहिक उत्सव, संगीत/तकनीक और संपत्ति वृद्धि हेतु उत्साही समय।" },
  { nameHi: "शतभिषा", lordHi: "राहु", natureHi: "चर व उपचारक", effectHi: "चिकित्सा, वैज्ञानिक शोध, तकनीकी नवाचार और स्वास्थ्य सुधार हेतु विशेष अनुकूल।" },
  { nameHi: "पूर्वाभाद्रपद", lordHi: "बृहस्पति", natureHi: "उग्र व तपोमय", effectHi: "उच्च आदर्श, परोपकार और आंतरिक रूपांतरण के लिए गहन विचारशील दिन।" },
  { nameHi: "उत्तराभाद्रपद", lordHi: "शनि", natureHi: "ध्रुव (स्थिर)", effectHi: "गंभीर विवेक, योग-ध्यान, स्थायी बचत और पारिवारिक स्थिरता के लिए मंगलकारी।" },
  { nameHi: "रेवती", lordHi: "बुध", natureHi: "मृदु व पोषक", effectHi: "यात्रा सुरक्षा, करुणा, कार्य की सफल पूर्णाहुति और आर्थिक सुगमता का आशीर्वाद।" }
];
function getTithiPakshaDailyGuidance(paksha, tithiRaw, festivalName, moonHouseFromRashi) {
  const cleanPaksha = (paksha || "शुक्ल पक्ष").trim();
  const isShukla = cleanPaksha.includes("शुक्ल");
  const cleanTithi = (tithiRaw || "").replace(/\s*तिथि$/u, "").trim();
  if (festivalName && festivalName.trim()) {
    return {
      cleanTithi: cleanTithi || "पावन तिथि",
      cleanPaksha,
      guidanceHi: `आज ${festivalName.trim()} का पावन संयोग है—परिवार में मंगल उत्सव, दान-पुण्य व इष्ट उपासना से कार्यों में दैवीय बरकत रहेगी।`
    };
  }
  const udayaTithiOnly = cleanTithi.split(/[,(—]|फिर|तत्पश्चात/u)[0].trim();
  if (/एकादशी/u.test(udayaTithiOnly) && !/दशमी/u.test(udayaTithiOnly)) {
    return {
      cleanTithi,
      cleanPaksha,
      guidanceHi: "पावन एकादशी तिथि होने से आज सात्त्विक विचार, श्री हरि स्मरण और संयमित दिनचर्या से मानसिक व आर्थिक बाधाएं शांत होंगी।"
    };
  }
  if (/चतुर्थी/u.test(cleanTithi)) {
    return {
      cleanTithi,
      cleanPaksha,
      guidanceHi: "चतुर्थी तिथि में विघ्नहर्ता श्री गणेश का स्मरण करके कार्य आरंभ करने से कठिन अड़चनें दूर होंगी; बड़े जोखिमों में सावधानी रखें।"
    };
  }
  if (/पूर्णिमा/u.test(cleanTithi)) {
    return {
      cleanTithi,
      cleanPaksha,
      guidanceHi: "पूर्णिमा तिथि के पूर्ण चन्द्र प्रभाव से मन में उत्साह, पारिवारिक सौहार्द और सत्यनारायण कृपा से कार्यों की पूर्णता होगी।"
    };
  }
  if (/अमावस्या/u.test(cleanTithi)) {
    return {
      cleanTithi,
      cleanPaksha,
      guidanceHi: "अमावस्या तिथि पर पितृ-स्मरण, मौन चिंतन और दान करने से अनिष्ट ग्रह दोष शांत होकर नए मार्ग प्रशस्त होंगे।"
    };
  }
  if (/नवमी|चतुर्दशी/u.test(cleanTithi)) {
    return {
      cleanTithi,
      cleanPaksha,
      guidanceHi: `${cleanTithi} तिथि होने से आज बड़े वित्तीय प्रयोगों के बजाय पुराने अधूरे कार्यों को सावधानी से पूर्ण करना श्रेष्ठ रहेगा।`
    };
  }
  const isEighthOrTwelfth = moonHouseFromRashi === 8 || moonHouseFromRashi === 12;
  const eighthOrTwelfthOrd = moonHouseFromRashi === 8 ? "अष्टम" : "द्वादश";
  return {
    cleanTithi: cleanTithi || "शुभ तिथि",
    cleanPaksha,
    guidanceHi: isShukla && isEighthOrTwelfth ? `शुक्ल पक्ष के चंद्रमा से धैर्य व आत्म-संयम का सहारा मिलेगा, परंतु ${eighthOrTwelfthOrd} भाव गोचर के कारण बड़े निर्णय व जोखिम टालें।` : isShukla ? "शुक्ल पक्ष के वर्धमान चंद्रमा के प्रभाव से आज नई योजनाओं, संपर्क-विस्तार और सकारात्मक वृद्धि के लिए अनुकूल समय है।" : "कृष्ण पक्ष के चंद्रमा की ऊर्जा के अनुसार आज पुरानी समीक्षा, बकाया वसूली, आंतरिक चिंतन और व्यय नियंत्रण में श्रेष्ठ परिणाम मिलेंगे।"
  };
}
const PROTECTED_HINDI_REDUPS = /* @__PURE__ */ new Set(["नमः", "राम", "ॐ", "हरि", "शिव", "जय", "हो", "स्वाहा", "स्वधा"]);
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
  const normalized = (Math.round(house) - 1 + 12) % 12 + 1;
  return HINDI_HOUSE_ORDINALS[normalized] || `${normalized}वां`;
}
function sanitizeVedicHindiText(input, preserveLeadingBullets = false) {
  if (!input) return "";
  const processSentence = (sentence) => {
    let s = sentence.replace(/\{\{[^}]*\}\}/g, "").replace(/\[object Object\]/gi, "").replace(/\b(?:undefined|null|NaN)\b/g, "").replace(/षष्ठम|सठम|छठम/gu, "षष्ठ").replace(/प्रह्म/gu, "प्रथम").replace(/अष्ठम|आठम/gu, "अष्टम").replace(/अयूक/gu, "अचूक").replace(/[^\S\r\n]{2,}/g, " ").trim();
    if (!s) return s;
    s = s.replace(
      /\s*\(\s*(?:मेष|वृषभ|मिथुन|कर्क|सिंह|कन्या|तुला|वृश्चिक|धनु|मकर|कुम्भ|कुंभ|मीन)\s*राशि\s*\)/gu,
      ""
    );
    let nestedGuard = 0;
    let prevNested = "";
    while (s !== prevNested && nestedGuard < 6) {
      prevNested = s;
      nestedGuard += 1;
      s = s.replace(/\(([^()]*)\(([^()]+)\)([^()]*)\)/g, (_m, pre, inner, post) => {
        const a = String(pre || "").trim();
        const b = String(inner || "").trim();
        const c = String(post || "").trim();
        const left = [a, b].filter(Boolean).join(" — ");
        if (!c) return `(${left})`;
        const sep = /^[•|,—–-]/u.test(c) ? " " : " — ";
        return `(${left ? `${left}${sep}${c}` : c})`;
      });
    }
    s = s.replace(/के\s+गोचर\s+से\s*,?\s*किंतु\s+/gu, "के गोचर के बावजूद, ").replace(/की\s+स्थिति\s+से\s*,?\s*किंतु\s+/gu, "की स्थिति के बावजूद, ").replace(/प्रभाव\s+से\s*,?\s*किंतु\s+/gu, "प्रभाव के बावजूद, ");
    s = s.replace(/(?<![\u0900-\u097F])(?:दोपहर|सुबह)\s+((?:0?[4-9]|10):\d{2}(?::\d{2})?\s*AM|11:[0-2]\d(?::\d{2})?\s*AM)/giu, "प्रातः $1").replace(/(?<![\u0900-\u097F])(?:मध्यरात्रि|प्रातः|सुबह)\s+(12:\d{2}(?::\d{2})?\s*AM)/giu, "रात्रि $1").replace(/(?<![\u0900-\u097F])(?:मध्यरात्रि|प्रातः|सुबह)\s+(0?[1-3]:\d{2}(?::\d{2})?\s*AM)/giu, "रात्रि $1").replace(/(?<![\u0900-\u097F])सायं\s+((?:0?[4-7]):\d{2}(?::\d{2})?\s*PM)/giu, "शाम $1").replace(/(?:मध्य)+रात्रि/gu, "रात्रि").replace(
      /(?<![\u0900-\u097F])(प्रातः|रात्रि|मध्यरात्रि)\s+(\d{1,2}:\d{2}(?::\d{2})?\s*AM)\s*(?:,\s*|\s*\()सूर्योदय\s*पूर्व\)?/giu,
      "अगले दिन $1 $2"
    ).replace(/\s*\(सूर्योदय\s*पूर्व\)/gu, "").replace(/(?:अगले\s+दिन\s+)+/gu, "अगले दिन ");
    s = s.replace(
      /(प्रथम|द्वितीय|तृतीय|चतुर्थ|पंचम|षष्ठ|सप्तम|अष्टम|नवम|दशम|एकादश|द्वादश)\s*\(\s*(?:1ला|2रा|3रा|4था|5वाँ|5वां|6ठा|7वाँ|7वां|8वाँ|8वां|9वाँ|9वां|10वाँ|10वां|11वाँ|11वां|12वाँ|12वां)\s*\)\s*(भाव|त्रिकोण|केंद्र)/gu,
      "$1 $2"
    ).replace(
      /(?<!\()\b(1[0-2]|[1-9])(?:वां|वें|था|थे|रा|रे|ला|ले|ठा|ठे)\s+भाव\b/gu,
      (_match, numStr) => {
        const n = parseInt(numStr, 10);
        return `${formatHindiHouseOrdinal(n)} भाव`;
      }
    );
    s = s.replace(/(?<![\u0900-\u097F])([\u0900-\u097F]{2,})\s+\1(?=\s|[।,.:;!?)]|$)/gu, (full, word) => {
      return PROTECTED_HINDI_REDUPS.has(word) ? full : word;
    });
    s = s.replace(/\b(दिशा|तिथि|नक्षत्र|योग|करण|वार|भाव|राशि)\s+\1\b/gu, "$1");
    let aurCount = 0;
    s = s.replace(/\s+और\s+/gu, () => {
      aurCount += 1;
      if (aurCount === 1) return " और ";
      if (aurCount === 2) return " तथा ";
      return " व ";
    });
    const labelPrefixMatch = s.match(/^((?:•\s*)?[^।:]{2,60}:\s+)/u);
    const labelHead = labelPrefixMatch ? labelPrefixMatch[1] : "";
    const bodyTail = labelPrefixMatch ? s.slice(labelHead.length) : s;
    const evamMatches = bodyTail.match(/\s+एवं\s+/gu);
    if (evamMatches && evamMatches.length >= 2) {
      let evamIdx = 0;
      const dedupedBody = bodyTail.replace(/\s+एवं\s+/gu, () => {
        evamIdx += 1;
        if (evamIdx === 1) return " तथा ";
        if (evamIdx === 2) return " व ";
        return " और ";
      });
      s = `${labelHead}${dedupedBody}`;
    }
    const DEITY_DEDUP_PAIRS = [
      [/माँ महालक्ष्मी/gu, "देवी लक्ष्मी"],
      [/माता महालक्ष्मी/gu, "माता लक्ष्मी"],
      [/भगवान श्री हरि विष्णु/gu, "श्रीहरि"],
      [/भगवान शिव/gu, "महादेव"],
      [/श्री हनुमान जी/gu, "पवनपुत्र हनुमान"]
    ];
    for (const [pat, alt] of DEITY_DEDUP_PAIRS) {
      let seen = 0;
      s = s.replace(pat, (m) => {
        seen += 1;
        return seen === 1 ? m : alt;
      });
    }
    s = s.replace(/\s*•\s*•+\s*/gu, " • ").replace(/\s+([।,)])/gu, "$1").replace(/।\s+\)/gu, "।)").replace(/([।,])(?=[^\s।,•)\]"'”’])/gu, "$1 ").replace(/।\s*।+/gu, "।").replace(/[^\S\r\n]{2,}/g, " ").trim();
    return s;
  };
  return input.split("\n").map((line) => {
    if (!line.trim()) return line;
    if (line.includes("॥")) {
      return line.replace(/[^\S\r\n]{2,}/g, " ").trim();
    }
    const hasLeadingBullet = preserveLeadingBullets && /^\s*•\s+/u.test(line);
    const bodyLine = hasLeadingBullet ? line.replace(/^\s*•\s+/u, "") : line;
    const segments = bodyLine.split(/(?<=।)(?!\s*\))/u);
    const cleaned = segments.map((seg) => processSentence(seg)).join(" ").replace(/\s+\)/gu, ")").replace(/।\s+\)/gu, "।)").replace(/[^\S\r\n]{2,}/g, " ").replace(/^\s*•\s*|\s*•\s*$/gu, "").trim();
    return hasLeadingBullet && cleaned ? `• ${cleaned}` : cleaned;
  }).join("\n");
}
const WEALTH_WORD_CLOSERS = {
  2: "बचत बढ़ेगी।",
  3: "आर्थिक संतुलन सुदृढ़ रहेगा।",
  4: "संचित कोष में स्थिरता रहेगी।",
  5: "पारिवारिक बजट एवं बचत संतुलित रहेगी।",
  6: "सुविचारित आर्थिक निर्णयों से कोष सुरक्षित रहेगा।",
  7: "नियमित व्यापारिक लेन-देन से आर्थिक स्थिति मजबूत बनेगी।",
  8: "अनावश्यक खर्चों पर संयम रखने से संचित धन बढ़ेगा।",
  9: "अनुशासित वित्तीय प्रबंधन से आज आय एवं व्यय में संतुलन रहेगा।",
  10: "दीर्घकालीन बचत योजनाओं एवं संयमित लेन-देन से आर्थिक पक्ष सुदृढ़ बना रहेगा।"
};
const FAMILY_HEALTH_WORD_CLOSERS = {
  2: "स्वास्थ्य उत्तम रहेगा।",
  3: "घर में प्रसन्नता रहेगी।",
  4: "सात्त्विक आहार से आरोग्य रहेगा।",
  5: "संतुलित दिनचर्या से उत्तम स्वास्थ्य रहेगा।",
  6: "सुपाच्य आहार एवं प्राणायाम से स्फूर्ति बनी रहेगी।",
  7: "सात्त्विक खान-पान एवं पर्याप्त विश्राम से उत्तम आरोग्य रहेगा।",
  8: "नियमित योग, प्राणायाम एवं ताजे आहार से शारीरिक ऊर्जा बढ़ेगी।",
  9: "परिवार में प्रेम बना रहेगा तथा सात्त्विक दिनचर्या से स्वास्थ्य उत्तम रहेगा।",
  10: "बड़ों के आशीर्वाद से गृहस्थ सुख बढ़ेगा तथा संतुलित आहार से आरोग्य रहेगा।"
};
function buildRashiUniqueCloserMap(category, rashiNum) {
  const r = (rashiNum - 1 + 12) % 12 + 1;
  const ELEMENT_CAREER_TAILS = {
    1: {
      2: "पराक्रम बढ़ेगा।",
      3: "नेतृत्व क्षमता निखरेगी।",
      4: "साहसिक पहल से कार्य बनेंगे।",
      5: "आपकी नेतृत्व-ऊर्जा से लक्ष्य सधेंगे।",
      6: "तीव्र निर्णय-शक्ति से कार्यक्षेत्र में अग्रणी रहेंगे।",
      7: "महत्वाकांक्षी योजनाओं में आज साहसपूर्ण प्रगति देखने को मिलेगी।",
      8: "ऊर्जावान कार्यशैली एवं त्वरित पहल से वरिष्ठ अधिकारी प्रसन्न रहेंगे।",
      9: "सक्रिय नेतृत्व और अदम्य आत्मविश्वास से जटिल व्यावसायिक लक्ष्य सिद्ध होंगे।",
      10: "आपके साहस, स्पष्ट रणनीति और तेज कार्य-निष्पादन से कार्यस्थल पर वर्चस्व बढ़ेगा।",
      11: "मेष के स्वाभाविक शौर्य एवं कर्मठ नेतृत्व से आज हर व्यावसायिक स्पर्धा में विजय मिलेगी।",
      12: "कार्यक्षेत्र में आपकी निर्णायक पहल, पराक्रम एवं स्पष्ट लक्ष्य-दृष्टि से सहकर्मियों में नया उत्साह आएगा।"
    },
    2: {
      2: "स्थायित्व बढ़ेगा।",
      3: "व्यावहारिक लाभ मिलेगा।",
      4: "धैर्यपूर्ण कार्य से स्थिरता आएगी।",
      5: "अनुशासित कार्यकुशलता से विश्वसनीयता बढ़ेगी।",
      6: "व्यावहारिक सूझबूझ से स्थायी व्यावसायिक उपलब्धि मिलेगी।",
      7: "ठोस कार्ययोजना एवं संयमित व्यवहार से कार्यस्थल पर सम्मान बढ़ेगा।",
      8: "वृषभ की धैर्यशील कार्यशैली से दीर्घकालीन व्यावसायिक अनुबंध सुदृढ़ होंगे।",
      9: "व्यवस्थित परिश्रम, वित्तीय अनुशासन एवं मधुर संवाद से आजीविका में पक्की मजबूती आएगी।",
      10: "कार्यस्थल पर आपकी व्यावहारिक दक्षता, शांत धैर्य एवं समयबद्ध निष्पादन की विशेष प्रशंसा होगी।",
      11: "स्थायी प्रगति के प्रति आपकी निष्ठा और संतुलित निर्णय-क्षमता से व्यवसाय में सुदृढ़ विस्तार होगा।",
      12: "धैर्य, व्यावहारिक कौशल और विश्वसनीयता के बल पर आज कार्यक्षेत्र के सभी दायित्व सुचारु रूप से पूर्ण होंगे।"
    },
    3: {
      2: "संवाद सधेगा।",
      3: "बौद्धिक कौशल निखरेगा।",
      4: "नवीन संपर्क लाभकारी सिद्ध होंगे।",
      5: "वाक्पटुता से व्यावसायिक सहमति बनेगी।",
      6: "तार्किक संवाद एवं नई योजनाओं से प्रगति होगी।",
      7: "बौद्धिक निर्णय और कुशल नेटवर्किंग से नए अवसर खुलेंगे।",
      8: "मिथुन की संवाद-कुशलता एवं त्वरित विश्लेषण से जटिल समझौते सफल रहेंगे।",
      9: "रचनात्मक विचार, सामाजिक संपर्क एवं लचीली कार्यनीति से कार्यक्षेत्र में विस्तार होगा।",
      10: "आपकी बौद्धिक स्पष्टता, सूचना-कौशल एवं प्रभावशाली प्रस्तुति से सहकर्मी व क्लाइंट प्रभावित होंगे।",
      11: "नवीन व्यावसायिक योजनाओं और कुशल संवाद-शैली के समन्वय से आज कार्यस्थल पर विशिष्ट पहचान बनेगी।",
      12: "तार्किक सोच, बहुमुखी कार्य-क्षमता और सामाजिक संपर्कों के सदुपयोग से आज व्यावसायिक मंच पर श्रेष्ठ परिणाम मिलेंगे।"
    },
    4: {
      2: "अंतर्दृष्टि बढ़ेगी।",
      3: "सहृदय सहयोग मिलेगा।",
      4: "रचनात्मक सूझबूझ से कार्य सधेंगे।",
      5: "अंतर्ज्ञान से सही व्यावसायिक दिशा मिलेगी।",
      6: "संवेदनशील समन्वय से कार्यस्थल का वातावरण अनुकूल रहेगा।",
      7: "कर्क की सहृदयता एवं गहरी अंतर्दृष्टि से सेवा-कार्य सफल होंगे।",
      8: "शांत एकाग्रता और भावनात्मक परिपक्वता से आज कार्यक्षेत्र की बाधाएं सहज सुलझेंगी।",
      9: "रचनात्मक समर्पण, सहयोगी व्यवहार एवं अंतर्मन की स्पष्टता से आजीविका में सम्मान मिलेगा।",
      10: "आपके आत्मीय व्यवहार, सूक्ष्म अवलोकन और निष्ठावान परिश्रम से कार्यस्थल पर विश्वास गहरा होगा।",
      11: "अंतर्दृष्टि व शांत धैर्य के बल पर आज जनसेवा और प्रबंधन से जुड़े दायित्वों में उत्तम सिद्धि मिलेगी।",
      12: "मन की एकाग्रता, रचनात्मक दृष्टिकोण और सहकर्मियों के प्रति संवेदनशील सहयोग से सभी लक्ष्य सहज पूर्ण होंगे।"
    },
    5: {
      2: "तेज बढ़ेगा।",
      3: "प्रशासनिक सम्मान मिलेगा।",
      4: "आत्मबल से बड़े लक्ष्य सधेंगे।",
      5: "सिंह के नेतृत्व-तेज से प्रतिष्ठा बढ़ेगी।",
      6: "प्रभावशाली व्यक्तित्व से वरिष्ठों का समर्थन प्राप्त होगा।",
      7: "उच्च महत्वाकांक्षा एवं स्वाभिमानपूर्ण कर्म से राजकीय-व्यावसायिक यश मिलेगा।",
      8: "आपके प्रखर आत्मविश्वास और नेतृत्व-कौशल से कार्यस्थल पर नई जिम्मेदारी प्राप्त होगी।",
      9: "साहसिक निर्णय, स्पष्ट अधिकार-भाव एवं अनुशासित मार्गदर्शन से बड़े प्रोजेक्ट सफल होंगे।",
      10: "कार्यक्षेत्र में आपकी ओजस्वी उपस्थिति, निष्पक्ष नेतृत्व और दूरदर्शी सोच से विशेष सम्मान स्थापित होगा।",
      11: "उच्च स्तरीय लक्ष्य-निष्ठा एवं अदम्य ऊर्जा के प्रभाव से आज प्रबंधन और प्रशासन में श्रेष्ठ उपलब्धि मिलेगी।",
      12: "आत्मगौरव, संगठनात्मक दक्षता और निर्भीक कार्यप्रणाली से आज व्यावसायिक मंच पर आपका प्रभाव सुदृढ़ रहेगा।"
    },
    6: {
      2: "निपुणता बढ़ेगी।",
      3: "कार्य-प्रणाली व्यवस्थित रहेगी।",
      4: "सूक्ष्म विश्लेषण से त्रुटियां सुधरेंगी।",
      5: "कन्या की कार्यकुशलता से समयबद्ध सिद्धि मिलेगी।",
      6: "व्यावहारिक नियम और सटीक गणना से लाभ होगा।",
      7: "अनुशासित प्रबंधन एवं बारीकी से की गई समीक्षा से कार्य चमकेंगे।",
      8: "आपकी व्यवस्थित कार्य-पद्धति और धैर्यपूर्ण परिश्रम से लंबित फाइलें समय पर पूर्ण होंगी।",
      9: "तथ्यात्मक विश्लेषण, वित्तीय अनुशासन और व्यावहारिक कौशल से कार्यस्थल पर आपकी साख बढ़ेगी।",
      10: "हर दायित्व को सुव्यवस्थित ढंग से पूर्ण करने की आपकी क्षमता आज वरिष्ठों को विशेष प्रभावित करेगी।",
      11: "व्यावहारिक सूझबूझ, समय-प्रबंधन और दोषरहित कार्य-निष्पादन से आज व्यवसाय एवं नौकरी में स्थायी प्रगति होगी।",
      12: "सूक्ष्म कार्य-दृष्टि, अनुशासित दिनचर्या और व्यावहारिक समाधानों के माध्यम से आज कठिन कार्य भी सरल बन जाएंगे।"
    },
    7: {
      2: "संतुलन रहेगा।",
      3: "कूटनीतिक सफलता मिलेगी।",
      4: "समन्वय से साझेदारी मजबूत होगी।",
      5: "तुला के संतुलित संवाद से समझौते बनेंगे।",
      6: "बौद्धिक न्यायप्रियता से व्यावसायिक संबंध प्रगाढ़ होंगे।",
      7: "सामाजिक संपर्क एवं सौम्य प्रस्तुति से कार्यक्षेत्र में सहमति बनेगी।",
      8: "आपकी कूटनीतिक सूझबूझ और निष्पक्ष व्यवहार से व्यापारिक साझेदारी में नया उत्साह आएगा।",
      9: "संवाद में संतुलन, आकर्षक कार्यशैली एवं नवीन योजनाओं से क्लाइंट व सहयोगी संतुष्ट रहेंगे।",
      10: "बौद्धिक सामंजस्य, सामाजिक प्रतिष्ठा और चतुर समन्वय के बल पर आज व्यावसायिक अनुबंध सफल होंगे।",
      11: "न्यायसंगत निर्णय और मधुर जनसंपर्क की आपकी विशेष कला से आज कार्यस्थल पर सभी पक्षों का सहयोग मिलेगा।",
      12: "वैचारिक संतुलन, सुरुचिपूर्ण संवाद और नई साझेदारी योजनाओं से आज आजीविका के क्षेत्र में उल्लेखनीय विस्तार होगा।"
    },
    8: {
      2: "संकल्प सधेगा।",
      3: "शोध-दृष्टि प्रखर रहेगी।",
      4: "गूढ़ कार्यनीति से सफलता मिलेगी।",
      5: "वृश्चिक की अंतर्दृष्टि से गुत्थियां सुलझेंगी।",
      6: "एकाग्र शोध एवं दृढ़ निश्चय से लक्ष्य सिद्ध होंगे।",
      7: "गंभीर विश्लेषण और शांत समर्पण से जटिल कार्यों में सफलता मिलेगी।",
      8: "आपकी गहरी अंतर्दृष्टि और गोपनीय कार्य-रणनीति से आज कठिन व्यावसायिक अड़चनें दूर होंगी।",
      9: "शोधपूर्ण दृष्टिकोण, अटल मनोबल एवं सूक्ष्म अवलोकन से कार्यक्षेत्र में ठोस उपलब्धि प्राप्त होगी।",
      10: "बिना विचलित हुए समस्या की जड़ तक पहुंचने की आपकी क्षमता आज कार्यस्थल पर विशेष परिणाम दिलाएगी।",
      11: "आंतरिक दृढ़ता, गहन विश्लेषण और शांत एकाग्रता के समन्वय से आज गोपनीय व तकनीकी कार्य सफल रहेंगे।",
      12: "गूढ़ विषयों की समझ, धैर्यपूर्ण शोध और अटूट संकल्प-शक्ति से आज व्यावसायिक चुनौतियों पर सहज नियंत्रण रहेगा।"
    },
    9: {
      2: "भाग्योदय होगा।",
      3: "लक्ष्य-दृष्टि स्पष्ट रहेगी।",
      4: "धर्मोचित उत्साह से उन्नति होगी।",
      5: "धनु की दूरदर्शिता से उच्च सम्मान मिलेगा।",
      6: "साहसिक महत्वाकांक्षा और नीतिगत कर्म से विस्तार होगा।",
      7: "वरिष्ठ मार्गदर्शकों के आशीर्वाद एवं तेजस्वी ऊर्जा से बड़े कार्य बनेंगे।",
      8: "आपकी आशावादी सोच, नेतृत्व-उत्साह और नैतिक निष्ठा से कार्यक्षेत्र में नई दिशा खुलेगी।",
      9: "उच्च लक्ष्यों के प्रति समर्पण, साहस एवं ज्ञानपूर्ण संवाद से आज व्यावसायिक प्रतिष्ठा में वृद्धि होगी।",
      10: "दूरगामी दृष्टि, आत्मिक स्फूर्ति और सत्यनिष्ठ कार्यशैली से आज प्रबंधन व शिक्षा क्षेत्र में यश मिलेगा।",
      11: "महत्वाकांक्षी संकल्पों और वरिष्ठ जनों के सहयोग से आज आपके दीर्घकालीन करियर प्रोजेक्ट्स को नई गति मिलेगी।",
      12: "तेजस्वी आत्मविश्वास, नीतिगत नेतृत्व और सकारात्मक ऊर्जा के प्रभाव से आज कार्यस्थल के सभी अवरोध दूर होंगे।"
    },
    10: {
      2: "कर्म-बल बढ़ेगा।",
      3: "स्थायी प्रगति सुनिश्चित होगी।",
      4: "अनुशासित श्रम से ठोस फल मिलेगा।",
      5: "मकर की कर्मठता से दीर्घकालीन लाभ होगा।",
      6: "व्यावहारिक धैर्य और संगठन-कौशल से स्थायित्व आएगा।",
      7: "कठोर परिश्रम एवं व्यवस्थित कार्य-अनुशासन से उच्च पद-प्रतिष्ठा मिलेगी।",
      8: "आपकी व्यावहारिक गंभीरता, समय-पालन और अटल धैर्य से औद्योगिक व प्रशासनिक कार्य सधेंगे।",
      9: "स्थायी परिणामों पर केंद्रित आपकी कार्यकुशलता और अनुशासन से वरिष्ठ प्रबंधन का पूर्ण विश्वास मिलेगा।",
      10: "पृथ्वी तत्व की स्थिरता, व्यावहारिक निर्णय और निरंतर कर्मठता से आज कार्यक्षेत्र में मजबूत आधार बनेगा।",
      11: "बिना जल्दबाजी के चरणबद्ध ढंग से कार्य पूर्ण करने की आपकी शैली आज स्थायी व्यावसायिक सफलता दिलाएगी।",
      12: "संगठनात्मक अनुशासन, व्यावहारिक दूरदर्शिता और धैर्यपूर्ण श्रम के समन्वय से आज सभी बड़े दायित्व सिद्ध होंगे।"
    },
    11: {
      2: "नवाचार फलेगा।",
      3: "नेटवर्क से लाभ मिलेगा।",
      4: "नवीन विचारों से कार्य-विस्तार होगा।",
      5: "कुम्भ की बौद्धिक दूरदृष्टि से प्रगति होगी।",
      6: "सामूहिक संवाद एवं आधुनिक तकनीक से लक्ष्य सधेंगे।",
      7: "सामाजिक संपर्क और मौलिक योजनाओं से कार्यक्षेत्र में नई पहचान बनेगी।",
      8: "आपके भविष्योन्मुखी विचारों, तकनीकी समझ और मित्र-नेटवर्क से कठिन प्रोजेक्ट गति पकड़ेंगे।",
      9: "बौद्धिक संतुलन, टीम-समन्वय और नवाचारपूर्ण कार्यप्रणाली से आज व्यावसायिक मंच पर विशेष सफलता मिलेगी।",
      10: "वायु तत्व की गतिशील सोच, सामाजिक जुड़ाव और आधुनिक कार्यनीति से आज नए अवसरों के द्वार खुलेंगे।",
      11: "सामूहिक हित की भावना, तार्किक संवाद और नई तकनीकी योजनाओं से आज कार्यस्थल पर सराहनीय उपलब्धि मिलेगी।",
      12: "मौलिक चिंतन, संतुलित बौद्धिक निर्णय और विस्तृत पेशेवर संपर्कों के सहयोग से आज सभी कार्य सुगम रहेंगे।"
    },
    12: {
      2: "सृजनशीलता बढ़ेगी।",
      3: "सात्त्विक सफलता मिलेगी।",
      4: "अंतर्ज्ञान से कार्य सहज बनेंगे।",
      5: "मीन की सौम्य प्रज्ञा से सम्मान मिलेगा।",
      6: "रचनात्मक कल्पनाशीलता एवं शांत समर्पण से उन्नति होगी।",
      7: "आध्यात्मिक शांति और सहृदय संवाद से कार्यक्षेत्र में अनुकूलता रहेगी।",
      8: "आपकी गहरी अंतर्दृष्टि, कलात्मक समझ और सौम्य व्यवहार से आज जटिल कार्य भी सहज पूर्ण होंगे।",
      9: "जल तत्व की संवेदनशीलता, सात्त्विक निष्ठा और रचनात्मक सोच से शिक्षा व परामर्श कार्यों में यश मिलेगा।",
      10: "शांत चित्त, परोपकारी दृष्टिकोण और अंतर्मन की प्रेरणा से लिए गए व्यावसायिक निर्णय अत्यंत शुभ सिद्ध होंगे।",
      11: "सृजनात्मक प्रज्ञा, मधुर समन्वय और गुरुजनों के आशीर्वाद से आज आजीविका के क्षेत्र में सुखद स्थायित्व आएगा।",
      12: "आध्यात्मिक आत्मबल, गहन कल्पना-शक्ति और सौम्य कार्यशैली के प्रभाव से आज कार्यस्थल पर सर्वत्र सद्भाव व प्रगति रहेगी।"
    }
  };
  if (category === "career") {
    return { ...ELEMENT_CAREER_TAILS[r] || ELEMENT_CAREER_TAILS[1] };
  }
  const ELEMENT_WEALTH_TAILS = {
    1: { 4: "साहसिक उद्यम से कोष बढ़ेगा।", 6: "स्व-अर्जित प्रयासों से आर्थिक ऊर्जा मजबूत रहेगी।", 8: "त्वरित व्यावसायिक पहल से आज धन प्रवाह गतिशील रहेगा।" },
    2: { 4: "अनुशासित बचत से कोष जुड़ेगा।", 6: "व्यावहारिक वित्तीय प्रबंधन से स्थायी धन लाभ होगा।", 8: "धैर्यपूर्ण निवेश एवं बजट अनुशासन से संचित निधि सुरक्षित रहेगी।" },
    3: { 4: "बौद्धिक सौदों से लाभ होगा।", 6: "कुशल संवाद व संपर्क से आर्थिक आवक बढ़ेगी।", 8: "नवीन व्यापारिक योजनाओं और समझौतों से धन संतुलन उत्तम रहेगा।" },
    4: { 4: "पारिवारिक सहयोग से बचत बढ़ेगी।", 6: "सुविचारित गृह-नियोजन से आर्थिक सुरक्षा सुदृढ़ रहेगी।", 8: "अंतर्दृष्टिपूर्ण निर्णय एवं सुरक्षित बचत से कोष में स्थिरता आएगी।" },
    5: { 4: "राजकीय-प्रबंधन कार्यों से लाभ होगा।", 6: "उच्च संपर्कों एवं नेतृत्व से आर्थिक सम्मान बढ़ेगा।", 8: "आत्मविश्वासपूर्ण व्यापारिक निर्णयों से आज आय का स्तर सुदृढ़ रहेगा।" },
    6: { 4: "सटीक लेखा-प्रबंधन से बचत होगी।", 6: "अनावश्यक व्यय रुकने से आर्थिक कोष सुव्यवस्थित रहेगा।", 8: "व्यावहारिक हिसाब-किताब और वित्तीय अनुशासन से शुद्ध मुनाफा बढ़ेगा।" },
    7: { 4: "संतुलित व्यापार से धन जुड़ेगा।", 6: "साझेदारी व ग्राहक-विश्वास से आर्थिक प्रवाह सुगम रहेगा।", 8: "आय और व्यय के कुशल संतुलन से आज वित्तीय पक्ष सुखद रहेगा।" },
    8: { 4: "गूढ़ रणनीति से रुका धन मिलेगा।", 6: "गोपनीय वित्तीय नियोजन से संचित पूंजी सुरक्षित रहेगी।", 8: "शोधपूर्ण निवेश-दृष्टि एवं सतर्कता से आज आर्थिक लाभ सुनिश्चित होगा।" },
    9: { 4: "नीतिगत व्यापार से समृद्धि बढ़ेगी।", 6: "धर्मोचित प्रयासों एवं भाग्य-बल से धन आगमन होगा।", 8: "दूरगामी वित्तीय सोच और वरिष्ठों के मार्गदर्शन से स्थायी लाभ मिलेगा।" },
    10: { 4: "स्थायी संपत्ति कोष सुदृढ़ होगा।", 6: "कर्मठ परिश्रम व मितव्ययिता से दीर्घकालीन बचत बढ़ेगी।", 8: "व्यावहारिक अनुशासन और ठोस निवेश से आर्थिक बुनियाद मजबूत बनेगी।" },
    11: { 4: "नेटवर्क व तकनीक से आय बढ़ेगी।", 6: "सामूहिक परियोजनाओं एवं नए विचारों से धन लाभ होगा।", 8: "बौद्धिक साझेदारी और आधुनिक व्यापारिक माध्यमों से कोष में वृद्धि होगी।" },
    12: { 4: "सात्त्विक प्रयासों से बरकत रहेगी।", 6: "सृजनात्मक कार्य एवं परामर्श से शुभ धनागमन होगा।", 8: "ईमानदार परिश्रम और संयमित खर्च से आज आर्थिक शांति बनी रहेगी।" }
  };
  if (category === "wealth") {
    const base = ELEMENT_WEALTH_TAILS[r] || {};
    return {
      2: base[4] || WEALTH_WORD_CLOSERS[2],
      3: base[4] || WEALTH_WORD_CLOSERS[3],
      4: base[4] || WEALTH_WORD_CLOSERS[4],
      5: base[6] || WEALTH_WORD_CLOSERS[5],
      6: base[6] || WEALTH_WORD_CLOSERS[6],
      7: base[6] || WEALTH_WORD_CLOSERS[7],
      8: base[8] || WEALTH_WORD_CLOSERS[8],
      9: base[8] || WEALTH_WORD_CLOSERS[9],
      10: base[8] || WEALTH_WORD_CLOSERS[10]
    };
  }
  const ELEMENT_FAMILY_TAILS = {
    1: { 5: "पारिवारिक उत्साह एवं स्फूर्ति बनी रहेगी।", 8: "घर में सकारात्मक ऊर्जा रहेगी तथा प्रातः भ्रमण से आरोग्य बढ़ेगा।" },
    2: { 5: "गृहस्थ जीवन में स्थिरता व सुख रहेगा।", 8: "परिवार में मधुर सामंजस्य रहेगा तथा सुपाच्य भोजन से स्वास्थ्य उत्तम रहेगा।" },
    3: { 5: "मित्रवत संवाद से घर में प्रसन्नता रहेगी।", 8: "परिजनों से आनंदपूर्ण बातचीत होगी तथा प्राणायाम से मानसिक ताजगी रहेगी।" },
    4: { 5: "मातृ-आशीर्वाद व भावनात्मक शांति बनी रहेगी।", 8: "परिवार में आत्मीय संवेदना रहेगी तथा ताजे गर्म आहार से आरोग्य रहेगा।" },
    5: { 5: "वरिष्ठों के सान्निध्य से पारिवारिक गौरव बढ़ेगा।", 8: "गृह-परिवार में आदर-सद्भाव रहेगा तथा सूर्य-नमस्कार से तेज व स्वास्थ्य बढ़ेगा।" },
    6: { 5: "सुव्यवस्थित दिनचर्या से घरेलू सुख व आरोग्य रहेगा।", 8: "पारिवारिक दायित्व सहज पूर्ण होंगे तथा सात्त्विक पथ्य से पाचन स्वस्थ रहेगा।" },
    7: { 5: "दांपत्य संतुलन एवं सौहार्द से मन प्रसन्न रहेगा।", 8: "परिवार में सुरुचिपूर्ण वातावरण रहेगा तथा पर्याप्त जल-सेवन से स्फूर्ति रहेगी।" },
    8: { 5: "आत्मीय विश्वास से पारिवारिक शांति सुदृढ़ होगी।", 8: "घर में शांत-गंभीर समन्वय रहेगा तथा प्रातः ध्यान से अंतःकरण स्वस्थ रहेगा।" },
    9: { 5: "गुरुजनों व बड़ों की कृपा से मंगल रहेगा।", 8: "परिवार में सात्त्विक उत्साह रहेगा तथा नियमित पदचाप से उत्तम आरोग्य रहेगा।" },
    10: { 5: "धैर्यपूर्ण सहयोग से गृहस्थ व्यवस्था सुदृढ़ रहेगी।", 8: "परिजनों के साथ व्यावहारिक तालमेल रहेगा तथा हल्की कसरत से शरीर स्वस्थ रहेगा।" },
    11: { 5: "सौहार्दपूर्ण विचारों से घर में आनंद रहेगा।", 8: "परिवार व मित्रों में उत्तम समन्वय रहेगा तथा पर्याप्त विश्राम से ऊर्जा रहेगी।" },
    12: { 5: "आध्यात्मिक शांति एवं पारिवारिक स्नेह बना रहेगा।", 8: "घर में पावन सद्भाव रहेगा तथा सात्त्विक दिनचर्या से मन-तन प्रसन्न रहेगा।" }
  };
  if (category === "family") {
    const base = ELEMENT_FAMILY_TAILS[r] || {};
    return {
      2: base[5] || FAMILY_HEALTH_WORD_CLOSERS[2],
      3: base[5] || FAMILY_HEALTH_WORD_CLOSERS[3],
      4: base[5] || FAMILY_HEALTH_WORD_CLOSERS[4],
      5: base[5] || FAMILY_HEALTH_WORD_CLOSERS[5],
      6: base[5] || FAMILY_HEALTH_WORD_CLOSERS[6],
      7: base[8] || FAMILY_HEALTH_WORD_CLOSERS[7],
      8: base[8] || FAMILY_HEALTH_WORD_CLOSERS[8],
      9: base[8] || FAMILY_HEALTH_WORD_CLOSERS[9],
      10: base[8] || FAMILY_HEALTH_WORD_CLOSERS[10]
    };
  }
  const ELEMENT_REMEDY_TAILS = {
    1: {
      short: "स्नान के बाद मस्तक पर लाल चंदन या कुमकुम का तिलक धारण करें।",
      long: "प्रातः स्नान के उपरांत मस्तक पर लाल चंदन तिलक लगाएं तथा गौ-माता को गुड़-रोटी अर्पित करें।"
    },
    2: {
      short: "प्रातः पूजा के पश्चात मस्तक पर श्वेत चंदन का तिलक धारण करें।",
      long: "प्रातः स्नान के बाद मस्तक पर श्वेत चंदन का तिलक लगाएं एवं गौ-माता को हरा चारा खिलाएं।"
    },
    3: {
      short: "पूजन के उपरांत श्री गणेश को दूर्वा अर्पित कर केसर तिलक लगाएं।",
      long: "प्रातः स्नान के पश्चात विघ्नहर्ता श्री गणेश को हरी दूर्वा अर्पित करें एवं पक्षियों को दाना डालें।"
    },
    4: {
      short: "प्रातः शिव-स्मरण के पश्चात मस्तक पर भस्म व चंदन तिलक लगाएं।",
      long: "प्रातः स्नान के बाद भगवान आशुतोष का स्मरण कर मस्तक पर चंदन-अक्षत का तिलक धारण करें।"
    },
    5: {
      short: "प्रातः सूर्योदय के समय तांबे के पात्र से अर्घ्य देकर रोली तिलक लगाएं।",
      long: "प्रातः स्नान के पश्चात भगवान भास्कर को अर्घ्य दें तथा मस्तक पर रक्त-चंदन तिलक धारण करें।"
    },
    6: {
      short: "प्रातः तुलसी-पौधे में शुद्ध जल अर्पित कर मस्तक पर चंदन तिलक लगाएं।",
      long: "प्रातः स्नान के उपरांत तुलसी माता को जल अर्पित करें तथा सात्त्विक भाव से गौ-सेवा करें।"
    },
    7: {
      short: "प्रातः पूजा में श्वेत पुष्प अर्पित कर मस्तक पर सुगंधित चंदन लगाएं।",
      long: "प्रातः स्नान के बाद मंदिर में घी का दीपक प्रज्वलित करें तथा मस्तक पर गोपी-चंदन धारण करें।"
    },
    8: {
      short: "प्रातः हनुमान जी का स्मरण कर मस्तक पर सिंदूर-चंदन का तिलक लगाएं।",
      long: "प्रातः स्नान के पश्चात संकटमोचन हनुमान जी को प्रणाम करें तथा जरूरतमंदों की यथोचित सहायता करें।"
    },
    9: {
      short: "प्रातः पूजा के बाद मस्तक व कंठ पर केसर-हल्दी का तिलक लगाएं।",
      long: "प्रातः स्नान के उपरांत मस्तक पर केसर-हल्दी का तिलक धारण करें एवं गुरुजनों का आशीर्वाद लें।"
    },
    10: {
      short: "प्रातः पीपल या देवालय में प्रणाम कर सात्त्विक कर्म-संकल्प लें।",
      long: "प्रातः स्नान के बाद देवालय में तिल के तेल का दीप जलाएं तथा श्रमजीवियों के प्रति सद्भाव रखें।"
    },
    11: {
      short: "प्रातः शिव-शनि स्मरण कर मस्तक पर भस्म या चंदन का तिलक लगाएं।",
      long: "प्रातः स्नान के उपरांत देवाधिदेव महादेव का ध्यान करें एवं पक्षियों के लिए जल-अन्न की व्यवस्था करें।"
    },
    12: {
      short: "प्रातः श्री हरि का स्मरण कर मस्तक पर पीत-चंदन का तिलक लगाएं।",
      long: "प्रातः स्नान के पश्चात भगवान लक्ष्मीनारायण को पीले पुष्प अर्पित करें तथा पीत-चंदन धारण करें।"
    }
  };
  const remTail = ELEMENT_REMEDY_TAILS[r] || ELEMENT_REMEDY_TAILS[1];
  return {
    2: remTail.short,
    3: remTail.short,
    4: remTail.short,
    5: remTail.short,
    6: remTail.short,
    7: remTail.long,
    8: remTail.long,
    9: remTail.long,
    10: remTail.long
  };
}
function fitHindiWordCountWindow(rawText, minWords, maxWords, closersMap, minSentences = 1) {
  let text = sanitizeVedicHindiText(rawText).replace(/\s+[—–•]\s+/gu, ", ").replace(/\s+/gu, " ").trim();
  if (!text) return "";
  if (!/[।॥]$/.test(text)) text += "।";
  const countWords = (s) => s.trim().split(/\s+/).filter(Boolean).length;
  const countSentences = (s) => s.split(/[।॥]/u).map((part) => part.trim()).filter((part) => part.length > 4).length;
  const closerKeys = Object.keys(closersMap).map(Number).filter((k) => Number.isFinite(k)).sort((a, b) => a - b);
  const maxCloserKey = closerKeys.length > 0 ? closerKeys[closerKeys.length - 1] : 10;
  const pickUnusedCloser = (targetWords) => {
    const candidates = [
      closersMap[targetWords],
      closersMap[Math.min(maxCloserKey, Math.max(2, targetWords))],
      ...closerKeys.slice().reverse().map((k) => closersMap[k])
    ].filter((c) => Boolean(c));
    for (const c of candidates) {
      const core = c.replace(/[।॥]$/u, "").trim();
      if (core && !text.includes(core)) {
        return c;
      }
    }
    return candidates[0] || "";
  };
  let currentCount = countWords(text);
  if (currentCount < minWords) {
    let guard = 0;
    while (currentCount < minWords && guard < 3) {
      guard += 1;
      const targetAdd = Math.min(maxCloserKey, Math.max(2, Math.ceil((minWords + maxWords) / 2) - currentCount));
      const addSentence = pickUnusedCloser(targetAdd);
      if (!addSentence) break;
      text = `${text} ${addSentence}`.replace(/\s+/gu, " ").trim();
      currentCount = countWords(text);
    }
  }
  if (currentCount > maxWords) {
    const purnaSentences = text.split(/(?<=[।])\s+/u).map((c) => c.trim()).filter(Boolean);
    if (purnaSentences.length > 1) {
      let acc = purnaSentences[0];
      let included = 1;
      for (let i = 1; i < purnaSentences.length; i++) {
        const candidate = `${acc} ${purnaSentences[i]}`;
        if (included < minSentences || countWords(candidate) <= maxWords + 8) {
          acc = candidate;
          included += 1;
        } else {
          break;
        }
      }
      acc = acc.replace(/;\s*$/u, "।").replace(/\s+\)/gu, ")").replace(/।\s+\)/gu, "।)");
      if (!/[।॥)]$|[।॥]\)$/.test(acc)) acc += "।";
      text = acc;
      currentCount = countWords(text);
    }
  }
  if (minSentences >= 2 && countSentences(text) < minSentences) {
    const needKey = Math.min(maxCloserKey, Math.max(6, Math.min(9, maxWords - currentCount + 8)));
    const addSent = pickUnusedCloser(needKey);
    if (addSent) {
      text = `${text} ${addSent}`.replace(/\s+/gu, " ").trim();
    }
  }
  return text.replace(/\s+\)/gu, ")").replace(/।\s+\)/gu, "।)").trim();
}
function assertPlanetarySanityInvariants(planets) {
  const getAbsDeg = (p) => {
    if (!p) return 0;
    const degPart = parseFloat(String(p.degree || p.fullDegreeDMS || "0")) || 0;
    return ((p.rashiNumber - 1) * 30 + degPart + 360) % 360;
  };
  const angularSep = (a, b) => {
    const d = Math.abs(a - b) % 360;
    return d > 180 ? 360 - d : d;
  };
  const sun = planets.find((p) => p.id === "sun");
  const merc = planets.find((p) => p.id === "mercury");
  const ven = planets.find((p) => p.id === "venus");
  const rahu = planets.find((p) => p.id === "rahu");
  const ketu = planets.find((p) => p.id === "ketu");
  const sunLon = getAbsDeg(sun);
  const mercLon = getAbsDeg(merc);
  const venLon = getAbsDeg(ven);
  const rahuLon = getAbsDeg(rahu);
  const ketuLon = getAbsDeg(ketu);
  const sunMercSepDeg = Number(angularSep(sunLon, mercLon).toFixed(2));
  const sunVenSepDeg = Number(angularSep(sunLon, venLon).toFixed(2));
  const rahuKetuSepDeg = Number(angularSep(rahuLon, ketuLon).toFixed(2));
  const violations = [];
  if (sun && merc && sunMercSepDeg > 29.5) {
    violations.push(`Mercury elongation from Sun (${sunMercSepDeg}°) exceeds 29°`);
  }
  if (sun && ven && sunVenSepDeg > 48.5) {
    violations.push(`Venus elongation from Sun (${sunVenSepDeg}°) exceeds 48°`);
  }
  if (rahu && ketu && Math.abs(rahuKetuSepDeg - 180) > 1) {
    violations.push(`Rahu-Ketu separation (${rahuKetuSepDeg}°) is not 180°`);
  }
  return {
    isValid: violations.length === 0,
    sunMercSepDeg,
    sunVenSepDeg,
    rahuKetuSepDeg,
    violations
  };
}
function resolveRashiSignNumberFromName(rawSignStr, fallbackNum = 1) {
  const clean = (rawSignStr || "").replace(/\s*राशि.*$/u, "").replace(/\s*\([^)]*\).*$/u, "").replace(/कुंभ/gu, "कुम्भ").trim();
  if (!clean) return fallbackNum;
  const found = RASHI_META_LIST.find(
    (r) => r.nameHi === clean || clean.startsWith(r.nameHi) || r.nameEn.toLowerCase() === clean.toLowerCase()
  );
  return found ? found.number : fallbackNum;
}
function parseClockDecimalIST(rawTimeStr, defaultH, isSunrise = false) {
  if (!rawTimeStr) return defaultH;
  const m = rawTimeStr.match(/(\d{1,2}):(\d{2})\s*(AM|PM)?/i);
  if (!m) return defaultH;
  let hh = parseInt(m[1], 10);
  const mm = parseInt(m[2], 10);
  const mer = (m[3] || "").toUpperCase();
  if (mer === "PM" && hh < 12) hh += 12;
  else if (mer === "AM" && hh === 12) hh = 0;
  else if (!mer) {
    if (!isSunrise && /दोपहर/u.test(rawTimeStr) && hh >= 1 && hh < 10) hh += 12;
    else if (!isSunrise && /सायं|शाम/u.test(rawTimeStr) && hh < 12) hh += 12;
    else if (!isSunrise && /रात्रि/u.test(rawTimeStr) && hh >= 7 && hh < 12) hh += 12;
    else if (/रात्रि|मध्यरात्रि/u.test(rawTimeStr) && hh === 12) hh = 0;
  }
  return hh + mm / 60;
}
function formatEnglishHouseOrdinal(house) {
  const n = (Math.round(house) - 1 + 12) % 12 + 1;
  if (n === 1) return "1st";
  if (n === 2) return "2nd";
  if (n === 3) return "3rd";
  return `${n}th`;
}
function formatMoonTransitionGocharPhrase(parsed, rashiNumber, lang = "hi") {
  const rIdx = (rashiNumber - 1 + 12) % 12;
  const rNum = rIdx + 1;
  const h1 = (parsed.sign1Number - 1 - rIdx + 12) % 12 + 1;
  if (parsed.hasTransition && parsed.sign2Number && parsed.sign2NameHi && parsed.endTimeText) {
    const h2 = (parsed.sign2Number - 1 - rIdx + 12) % 12 + 1;
    if (lang === "en") {
      return `Today's Moon Transit: ${parsed.sign1NameEn} (${formatEnglishHouseOrdinal(h1)} House from your sign, up to ${parsed.endTimeText}), then ${parsed.sign2NameEn} (${formatEnglishHouseOrdinal(h2)} House from your sign).`;
    }
    const h1Ord2 = formatHindiHouseOrdinal(h1);
    const h2Ord = formatHindiHouseOrdinal(h2);
    const s12 = parsed.sign1NameHi;
    const s2 = parsed.sign2NameHi;
    const t = parsed.endTimeText;
    const TRANSITION_PHRASES_BY_RASHI = {
      1: `आज का चंद्र गोचर: मेष से ${h1Ord2} भाव (${s12}, ${t}) में तेजस्वी संचरण, तत्पश्चात ${h2Ord} भाव (${s2}) में प्रवेश।`,
      2: `आज का चंद्र गोचर: वृषभ से ${h1Ord2} भावस्थ ${s12} (${t}), उसके उपरांत ${h2Ord} भाव (${s2}) में स्थिर गोचर।`,
      3: `आज का चंद्र गोचर: मिथुन से ${h1Ord2} भाव (${s12}, ${t}) में संचरण, फिर ${h2Ord} भाव (${s2}) की ओर गति।`,
      4: `आज का चंद्र गोचर: कर्क से ${h1Ord2} भाव (${s12}, ${t}) में शुभ प्रवाह, सायंकाल ${h2Ord} भाव (${s2}) में संक्रमण।`,
      5: `आज का चंद्र गोचर: सिंह से ${h1Ord2} भाव (${s12}, ${t}) में ऊर्जावान स्थिति, पश्चात ${h2Ord} भाव (${s2}) में गोचर।`,
      6: `आज का चंद्र गोचर: कन्या से ${h1Ord2} भाव (${s12}, ${t}) में सुव्यवस्थित प्रभाव, फिर ${h2Ord} भाव (${s2}) में संचरण।`,
      7: `आज का चंद्र गोचर: तुला से ${h1Ord2} भाव (${s12}, ${t}) में संतुलित गोचर, इसके बाद ${h2Ord} भाव (${s2}) में स्थिति।`,
      8: `आज का चंद्र गोचर: वृश्चिक से ${h1Ord2} भाव (${s12}, ${t}) में प्रबल संचरण, उपरांत ${h2Ord} भाव (${s2}) में प्रवेश।`,
      9: `आज का चंद्र गोचर: धनु से ${h1Ord2} भाव (${s12}, ${t}) में धर्मोचित प्रवाह, तत्पश्चात ${h2Ord} भाव (${s2}) में गोचर।`,
      10: `आज का चंद्र गोचर: मकर से ${h1Ord2} भाव (${s12}, ${t}) में कर्मशील संचरण, फिर ${h2Ord} भाव (${s2}) में स्थिति।`,
      11: `आज का चंद्र गोचर: कुम्भ से ${h1Ord2} भाव (${s12}, ${t}) में गोचर, उसके पश्चात ${h2Ord} भाव (${s2}) में संचरण।`,
      12: `आज का चंद्र गोचर: मीन से ${h1Ord2} भाव (${s12}, ${t}) में सात्त्विक प्रवाह, फिर ${h2Ord} भाव (${s2}) में संक्रमण।`
    };
    return TRANSITION_PHRASES_BY_RASHI[rNum] || `आज का चंद्र गोचर: ${s12} (${h1Ord2} भाव, ${t}), फिर ${s2} (${h2Ord} भाव)।`;
  }
  if (lang === "en") {
    return `Today's Moon Transit: ${parsed.sign1NameEn} (${formatEnglishHouseOrdinal(h1)} House from your sign).`;
  }
  const h1Ord = formatHindiHouseOrdinal(h1);
  const s1 = parsed.sign1NameHi;
  const SINGLE_PHRASES_BY_RASHI = {
    1: `आज का चंद्र गोचर: मेष से ${h1Ord} भाव (${s1}) में ऊर्जावान संचरण।`,
    2: `आज का चंद्र गोचर: वृषभ से ${h1Ord} भाव (${s1}) में स्थिर व व्यावहारिक प्रभाव।`,
    3: `आज का चंद्र गोचर: मिथुन से ${h1Ord} भाव (${s1}) में बौद्धिक व संवादशील गोचर।`,
    4: `आज का चंद्र गोचर: कर्क से ${h1Ord} भाव (${s1}) में संवेदनशील व सौम्य प्रवाह।`,
    5: `आज का चंद्र गोचर: सिंह से ${h1Ord} भाव (${s1}) में तेजस्वी व आत्मबलप्रद स्थिति।`,
    6: `आज का चंद्र गोचर: कन्या से ${h1Ord} भाव (${s1}) में विश्लेषणात्मक व सुव्यवस्थित संचरण।`,
    7: `आज का चंद्र गोचर: तुला से ${h1Ord} भाव (${s1}) में संतुलित व सामंजस्यपूर्ण गोचर।`,
    8: `आज का चंद्र गोचर: वृश्चिक से ${h1Ord} भाव (${s1}) में गूढ़ व संकल्पशील प्रभाव।`,
    9: `आज का चंद्र गोचर: धनु से ${h1Ord} भाव (${s1}) में लक्ष्यनिष्ठ व आशावादी संचरण।`,
    10: `आज का चंद्र गोचर: मकर से ${h1Ord} भाव (${s1}) में कर्मठ व अनुशासित गोचर।`,
    11: `आज का चंद्र गोचर: कुम्भ से ${h1Ord} भाव (${s1}) में नवाचारपूर्ण व प्रगतिशील स्थिति।`,
    12: `आज का चंद्र गोचर: मीन से ${h1Ord} भाव (${s1}) में आध्यात्मिक व सृजनात्मक प्रवाह।`
  };
  return SINGLE_PHRASES_BY_RASHI[rNum] || `आज का चंद्र गोचर: ${s1} (${h1Ord} भाव)।`;
}
function parseChandraRashiTransition(chandraRashiRaw, fallbackSignNumber = 1, sunriseISTHours = 6.5, sunsetISTHours = 17.5) {
  const raw = (chandraRashiRaw || "").trim();
  const transMatch = raw.match(
    /^([^\s(]+)(?:\s*राशि)?\s*\((.+)\)\s*,?\s*(?:फिर|तत्पश्चात)\s*([^\s(,]+)(?:\s*राशि)?/u
  );
  if (transMatch) {
    const s1Num = resolveRashiSignNumberFromName(transMatch[1], fallbackSignNumber);
    const s1Meta = RASHI_META_LIST[(s1Num - 1 + 12) % 12];
    const rawEnd = transMatch[2].replace(/^(.+?)\s*(?:,\s*|\s*\()सूर्योदय\s*पूर्व\)?/u, (_m, p1) => {
      const c = p1.trim();
      return c.startsWith("अगले दिन") ? c : `अगले दिन ${c}`;
    }).trim();
    const endWithTak = rawEnd.endsWith("तक") ? rawEnd : `${rawEnd} तक`;
    const s2Num = resolveRashiSignNumberFromName(transMatch[3], s1Num % 12 + 1);
    const s2Meta = RASHI_META_LIST[(s2Num - 1 + 12) % 12];
    let transH = parseClockDecimalIST(endWithTak, sunsetISTHours, false);
    if (/सूर्योदय\s*पूर्व|अगले\s*दिन/u.test(endWithTak) || transH < sunriseISTHours - 0.02 && transH < 12) {
      transH += 24;
    }
    const clampedTrans = Math.max(sunriseISTHours, transH);
    const sign1DayHours = Math.max(0, Math.min(sunsetISTHours, clampedTrans) - sunriseISTHours);
    const sign2DayHours = Math.max(0, sunsetISTHours - Math.max(sunriseISTHours, clampedTrans));
    const isSecondSignPrevailing = sign2DayHours > sign1DayHours;
    const isDaytimeTransition = transH > sunriseISTHours && transH < sunsetISTHours;
    const prevailingMeta = isSecondSignPrevailing ? s2Meta : s1Meta;
    return {
      hasTransition: true,
      isDaytimeTransition,
      sign1Number: s1Meta.number,
      sign1NameHi: s1Meta.nameHi,
      sign1NameEn: s1Meta.nameEn,
      endTimeText: endWithTak,
      transitionISTHours: Number(transH.toFixed(3)),
      sign2Number: s2Meta.number,
      sign2NameHi: s2Meta.nameHi,
      sign2NameEn: s2Meta.nameEn,
      sign1DayHours: Number(sign1DayHours.toFixed(3)),
      sign2DayHours: Number(sign2DayHours.toFixed(3)),
      prevailingSignNumber: prevailingMeta.number,
      prevailingSignNameHi: prevailingMeta.nameHi,
      prevailingSignNameEn: prevailingMeta.nameEn,
      isSecondSignPrevailing,
      headerLineHi: `चन्द्र गोचर: ${s1Meta.nameHi} राशि (${endWithTak}, फिर ${s2Meta.nameHi} राशि)`,
      headerLineEn: `Moon Transit: ${s1Meta.nameEn} (${s1Meta.nameHi} — up to ${endWithTak}, then ${s2Meta.nameEn})`,
      shortDisplayHi: `${s1Meta.nameHi} राशि (${endWithTak}, फिर ${s2Meta.nameHi} राशि)`
    };
  }
  const singleNum = resolveRashiSignNumberFromName(raw, fallbackSignNumber);
  const singleMeta = RASHI_META_LIST[(singleNum - 1 + 12) % 12];
  return {
    hasTransition: false,
    isDaytimeTransition: false,
    sign1Number: singleMeta.number,
    sign1NameHi: singleMeta.nameHi,
    sign1NameEn: singleMeta.nameEn,
    sign1DayHours: Number(Math.max(0, sunsetISTHours - sunriseISTHours).toFixed(3)),
    sign2DayHours: 0,
    prevailingSignNumber: singleMeta.number,
    prevailingSignNameHi: singleMeta.nameHi,
    prevailingSignNameEn: singleMeta.nameEn,
    isSecondSignPrevailing: false,
    headerLineHi: `चन्द्र राशि: ${singleMeta.nameHi} राशि`,
    headerLineEn: `Moon Sign (Chandra Rashi): ${singleMeta.nameEn} (${singleMeta.nameHi})`,
    shortDisplayHi: `${singleMeta.nameHi} राशि`
  };
}
function resolveActiveNakshatraIndex(nakNameRaw, fallbackIdx) {
  const clean = (nakNameRaw || "").split(/,\s*फिर|तत्पश्चात/u)[0].replace(/\s*\([^)]*\)/g, "").replace(/\s*नक्षत्र$/u, "").trim();
  if (!clean) return fallbackIdx;
  const normalizeNak = (s) => s.replace(/आश्लेषा|अश्लेषा/gu, "आश्लेषा").replace(/मृगशीर्ष|मृगशिरा/gu, "मृगशिरा").replace(/पूर्वाषाढा|पूर्वाषाढ़ा/gu, "पूर्वाषाढ़ा").replace(/उत्तराषाढा|उत्तराषाढ़ा/gu, "उत्तराषाढ़ा").replace(/धनिष्ठा/gu, "धनिष्ठा").replace(/श्रवणा|श्रवण/gu, "श्रवण").replace(/पूर्वाभाद्रपद|पूर्वभाद्रपद/gu, "पूर्वाभाद्रपद").replace(/उत्तराभाद्रपद|उत्तरभाद्रपद/gu, "उत्तराभाद्रपद").trim();
  const normTarget = normalizeNak(clean);
  const idx = NAKSHATRA_DAILY_QUALITIES.findIndex((item) => {
    const normItem = normalizeNak(item.nameHi);
    return normItem === normTarget || normTarget.startsWith(normItem) || normItem.startsWith(normTarget);
  });
  return idx >= 0 ? idx : fallbackIdx;
}
function getSafeAuspiciousDirection(elementHi, dishaShoolHi, lang, weekdayIndex, isVenusRuled = false) {
  const shool = dishaShoolHi || "";
  const wk = typeof weekdayIndex === "number" ? (weekdayIndex % 7 + 7) % 7 : -1;
  const isEastShool = wk === 1 || wk === 6 || /पूर्व|East/i.test(shool);
  const isNorthShool = wk === 2 || wk === 3 || !isEastShool && /उत्तर|North/i.test(shool);
  const isSouthShool = wk === 4 || !isEastShool && !isNorthShool && /दक्षिण|South/i.test(shool);
  const isWestShool = wk === 0 || wk === 5 || !isEastShool && !isNorthShool && !isSouthShool && /पश्चिम|West/i.test(shool);
  if (isVenusRuled) {
    if (isWestShool) {
      return lang === "en" ? "South-East & North" : "आग्नेय एवं उत्तर (South-East & North)";
    }
    if (isNorthShool) {
      return lang === "en" ? "West & South-East" : "पश्चिम एवं आग्नेय (West & South-East)";
    }
    if (isEastShool) {
      return lang === "en" ? "West & North" : "पश्चिम एवं उत्तर (West & North)";
    }
    if (isSouthShool) {
      return lang === "en" ? "West & North" : "पश्चिम एवं उत्तर (West & North)";
    }
    return lang === "en" ? "West, South-East & North" : "पश्चिम, आग्नेय एवं उत्तर";
  }
  const elemKey = /पृथ्वी|Earth/i.test(elementHi) ? "पृथ्वी तत्व (Earth)" : /वायु|Air/i.test(elementHi) ? "वायु तत्व (Air)" : /जल|Water/i.test(elementHi) ? "जल तत्व (Water)" : "अग्नि तत्व (Fire)";
  const SAFE_DIRECTION_MATRIX = {
    "अग्नि तत्व (Fire)": {
      normal: "पूर्व एवं आग्नेय (East & South-East)",
      eastShool: "उत्तर एवं ईशान (North & North-East)",
      westShool: "पूर्व एवं आग्नेय (East & South-East)",
      southShool: "पूर्व एवं ईशान (East & North-East)",
      northShool: "पूर्व एवं आग्नेय (East & South-East)"
    },
    "पृथ्वी तत्व (Earth)": {
      normal: "दक्षिण एवं आग्नेय (South & South-East)",
      eastShool: "दक्षिण एवं पश्चिम (South & West)",
      westShool: "दक्षिण एवं आग्नेय (South & South-East)",
      southShool: "पूर्व एवं ईशान (East & North-East)",
      northShool: "दक्षिण एवं आग्नेय (South & South-East)"
    },
    "वायु तत्व (Air)": {
      normal: "पश्चिम एवं वायव्य (West & North-West)",
      eastShool: "पश्चिम एवं वायव्य (West & North-West)",
      westShool: "उत्तर एवं ईशान (North & North-East)",
      southShool: "पश्चिम एवं वायव्य (West & North-West)",
      northShool: "पश्चिम एवं आग्नेय (West & South-East)"
    },
    "जल तत्व (Water)": {
      normal: "उत्तर एवं ईशान (North & North-East)",
      eastShool: "उत्तर एवं वायव्य (North & North-West)",
      westShool: "उत्तर एवं ईशान (North & North-East)",
      southShool: "उत्तर एवं ईशान (North & North-East)",
      northShool: "पूर्व एवं आग्नेय (East & South-East)"
    }
  };
  const row = SAFE_DIRECTION_MATRIX[elemKey] || SAFE_DIRECTION_MATRIX["अग्नि तत्व (Fire)"];
  let chosen = row.normal;
  if (isEastShool) chosen = row.eastShool;
  else if (isNorthShool) chosen = row.northShool;
  else if (isSouthShool) chosen = row.southShool;
  else if (isWestShool) chosen = row.westShool;
  if (lang === "en") {
    const m = chosen.match(/\(([^)]+)\)/);
    return m ? m[1] : chosen;
  }
  return chosen;
}
const PLANET_EXALTED_SIGN = {
  sun: 1,
  moon: 2,
  mars: 10,
  mercury: 6,
  jupiter: 4,
  venus: 12,
  saturn: 7
};
const PLANET_DEBILITATED_SIGN = {
  sun: 7,
  moon: 8,
  mars: 4,
  mercury: 12,
  jupiter: 10,
  venus: 6,
  saturn: 1
};
const PLANET_OWN_SIGNS = {
  sun: [5],
  moon: [4],
  mars: [1, 8],
  mercury: [3, 6],
  jupiter: [9, 12],
  venus: [2, 7],
  saturn: [10, 11]
};
function getPlanetStatusTagsHi(planetId, rashiNumber, isRetrograde, isCombust = false) {
  const tags = [];
  if (PLANET_EXALTED_SIGN[planetId] === rashiNumber) tags.push("उच्चस्थ");
  else if (PLANET_OWN_SIGNS[planetId]?.includes(rashiNumber)) tags.push("स्वक्षेत्री");
  else if (PLANET_DEBILITATED_SIGN[planetId] === rashiNumber) tags.push("नीचस्थ");
  if (isRetrograde && planetId !== "rahu" && planetId !== "ketu") tags.push("वक्री");
  if (isCombust) tags.push("अस्त");
  return tags;
}
function getPlanetStatusTagsEn(planetId, rashiNumber, isRetrograde, isCombust = false) {
  const tags = [];
  if (PLANET_EXALTED_SIGN[planetId] === rashiNumber) tags.push("Exalted");
  else if (PLANET_OWN_SIGNS[planetId]?.includes(rashiNumber)) tags.push("Own Sign");
  else if (PLANET_DEBILITATED_SIGN[planetId] === rashiNumber) tags.push("Debilitated");
  if (isRetrograde && planetId !== "rahu" && planetId !== "ketu") tags.push("Retrograde");
  if (isCombust) tags.push("Combust");
  return tags;
}
function getPlanetStatusTag(planetId, rashiNumber, isRetrograde, isCombust = false, rashiNameHi) {
  const tags = getPlanetStatusTagsHi(planetId, rashiNumber, isRetrograde, isCombust);
  const statusStr = tags.join("/");
  return statusStr;
}
function detectHouseYogas(planetTransits) {
  const planetsByHouse = /* @__PURE__ */ new Map();
  for (const pt of planetTransits) {
    const arr = planetsByHouse.get(pt.houseFromRashi) || [];
    arr.push(pt);
    planetsByHouse.set(pt.houseFromRashi, arr);
  }
  let hasBudhadityaYoga = false;
  let budhadityaHouse = null;
  let budhadityaSun;
  for (const [houseNum, group] of planetsByHouse.entries()) {
    const sun = group.find((p) => p.id === "sun");
    const merc = group.find((p) => p.id === "mercury");
    if (sun && merc && sun.rashiNumber === merc.rashiNumber) {
      hasBudhadityaYoga = true;
      budhadityaHouse = houseNum;
      budhadityaSun = sun;
      break;
    }
  }
  const findP = (id) => planetTransits.find((p) => p.id === id);
  const sunP = findP("sun");
  const moonP = findP("moon");
  const marsP = findP("mars");
  const mercP = findP("mercury");
  const jupP = findP("jupiter");
  const satP = findP("saturn");
  const rahuP = findP("rahu");
  const ketuP = findP("ketu");
  const isMercuryCombust = Boolean(mercP?.isCombust);
  const moonJupDiff = moonP && jupP ? (jupP.rashiNumber - moonP.rashiNumber + 12) % 12 : -1;
  const hasGajakesariYoga = Boolean(
    moonP && jupP && [0, 3, 6, 9].includes(moonJupDiff) && !jupP.isCombust
  );
  const hasChandraMangalYoga = Boolean(
    moonP && marsP && moonP.rashiNumber === marsP.rashiNumber
  );
  const hasGuruMangalYoga = Boolean(
    jupP && marsP && jupP.rashiNumber === marsP.rashiNumber
  );
  const hasGuruChandalYoga = Boolean(
    jupP && (rahuP && jupP.rashiNumber === rahuP.rashiNumber || ketuP && jupP.rashiNumber === ketuP.rashiNumber)
  );
  const hasGrahanYoga = Boolean(
    sunP && (rahuP && sunP.rashiNumber === rahuP.rashiNumber || ketuP && sunP.rashiNumber === ketuP.rashiNumber) || moonP && (rahuP && moonP.rashiNumber === rahuP.rashiNumber || ketuP && moonP.rashiNumber === ketuP.rashiNumber)
  );
  const hasShaniChandraVishYoga = Boolean(
    satP && moonP && satP.rashiNumber === moonP.rashiNumber
  );
  const budhadityaCategory = hasBudhadityaYoga && budhadityaHouse !== null ? [1, 3, 6, 9, 10].includes(budhadityaHouse) ? "career" : [2, 5, 8, 11, 12].includes(budhadityaHouse) ? "wealth" : "family" : null;
  const sunDignityTags = budhadityaSun ? getPlanetStatusTagsHi(
    budhadityaSun.id,
    budhadityaSun.rashiNumber,
    budhadityaSun.isRetrograde,
    budhadityaSun.isCombust
  ) : [];
  const sunTagSuffix = sunDignityTags.length > 0 ? `, ${sunDignityTags.join("/")}` : "";
  const budhadityaTagHi = budhadityaSun && budhadityaHouse !== null ? `${budhadityaSun.rashiNameHi}${sunTagSuffix}, ${formatHindiHouseOrdinal(budhadityaHouse)} भाव` : "";
  const budhadityaTagEn = budhadityaSun && budhadityaHouse !== null ? `${budhadityaSun.rashiNameEn}, ${formatEnglishHouseOrdinal(budhadityaHouse)} house` : "";
  return {
    planetsByHouse,
    hasBudhadityaYoga,
    budhadityaHouse,
    budhadityaCategory,
    budhadityaPhraseHi: "सूर्य-बुध के बुधादित्य योग",
    budhadityaTagHi,
    budhadityaTagEn,
    isMercuryCombust,
    hasGajakesariYoga,
    hasChandraMangalYoga,
    hasGuruMangalYoga,
    hasGuruChandalYoga,
    hasGrahanYoga,
    hasShaniChandraVishYoga
  };
}
function buildHealthPrediction(params) {
  const {
    houseNum,
    adviceHi,
    healthTipHi,
    lagneshId,
    lagneshNameHi,
    lagneshSignHouseHi,
    moonSignNameHi,
    prevailingMoonSignHouseHi,
    hasMoonTransition
  } = params;
  let leadClause = "";
  if (lagneshId === "moon") {
    const moonLocationHi = hasMoonTransition ? prevailingMoonSignHouseHi : `${formatHindiHouseOrdinal(houseNum)} भाव (${moonSignNameHi})`;
    leadClause = `राशि स्वामी चंद्रमा के ${moonLocationHi} में संचरण करने से ${adviceHi}`;
  } else if (houseNum === 8) {
    leadClause = `चंद्रमा (${prevailingMoonSignHouseHi}) में होने तथा राशि स्वामी ${lagneshNameHi} (${lagneshSignHouseHi}) की स्थिति में ${adviceHi}`;
  } else if (houseNum === 12) {
    leadClause = `चंद्रमा (${prevailingMoonSignHouseHi}) में संचरण तथा राशि स्वामी ${lagneshNameHi} (${lagneshSignHouseHi}) की स्थिति से ${adviceHi}`;
  } else if (houseNum === 4) {
    leadClause = `चंद्रमा (${prevailingMoonSignHouseHi}) में होने व राशि स्वामी ${lagneshNameHi} (${lagneshSignHouseHi}) की स्थिति में ${adviceHi}`;
  } else {
    leadClause = `चंद्रमा (${prevailingMoonSignHouseHi}) में संचरण के कारण ${adviceHi}`;
  }
  return `${leadClause} ${healthTipHi}`.trim();
}
function computeDrikGanitaRashifalForRashi(rashiNumberOrId, dateInput = /* @__PURE__ */ new Date(), timeStr = "06:00", location = "रुद्रपुर, उत्तराखण्ड", period = "daily", lang = "hi", existingTransitKundali, existingPanchang) {
  const rashiMeta = typeof rashiNumberOrId === "number" ? RASHI_META_LIST[(rashiNumberOrId - 1 + 12) % 12] : RASHI_META_LIST.find((r) => r.id === rashiNumberOrId || r.nameHi === rashiNumberOrId) || RASHI_META_LIST[0];
  const rashiNum = rashiMeta.number;
  const resolvedLoc = existingPanchang?.dailyPanchang?.location || (typeof location === "object" && location !== null ? location : resolveCityCoordinates(location));
  const resolvedLocName = typeof location === "string" ? location : resolvedLoc.hindiName || resolvedLoc.name || "रुद्रपुर, उत्तराखण्ड";
  const resolvedTz = resolveSafeTimezone(resolvedLoc);
  const resolvedYmd = (() => {
    if (typeof dateInput === "string") {
      const mDate = dateInput.trim().match(/^(\d{4})-(\d{1,2})-(\d{1,2})/);
      if (mDate) {
        return {
          year: parseInt(mDate[1], 10),
          month: parseInt(mDate[2], 10),
          day: parseInt(mDate[3], 10)
        };
      }
      const fallbackD = new Date(dateInput);
      const lp2 = getLocalDateParts(Number.isNaN(fallbackD.getTime()) ? /* @__PURE__ */ new Date() : fallbackD, resolvedTz);
      return { year: lp2.year, month: lp2.month, day: lp2.day };
    }
    const lp = getLocalDateParts(Number.isNaN(dateInput.getTime()) ? /* @__PURE__ */ new Date() : dateInput, resolvedTz);
    return { year: lp.year, month: lp.month, day: lp.day };
  })();
  const localMiddayDate = new Date(
    zonedWallClockToUtcMs(resolvedYmd.year, resolvedYmd.month, resolvedYmd.day, 12, 0, 0, resolvedTz)
  );
  const rawDayPanchang = existingPanchang || buildSingleDayPanchang(
    resolvedYmd.year,
    resolvedYmd.month,
    resolvedYmd.day,
    true,
    localMiddayDate,
    resolvedLoc
  );
  const sunriseEpochMs = typeof rawDayPanchang.dailyPanchang?.sunriseTimestamp === "number" && Number.isFinite(rawDayPanchang.dailyPanchang.sunriseTimestamp) ? rawDayPanchang.dailyPanchang.sunriseTimestamp : zonedWallClockToUtcMs(resolvedYmd.year, resolvedYmd.month, resolvedYmd.day, 6, 0, 0, resolvedTz);
  const safeDate = new Date(sunriseEpochMs);
  const localParts = getLocalDateParts(safeDate, resolvedTz);
  const localHr12 = localParts.hours % 12 || 12;
  const localAmPm = localParts.hours >= 12 ? "PM" : "AM";
  const ist = {
    year: resolvedYmd.year,
    month: resolvedYmd.month,
    day: resolvedYmd.day,
    hours: localParts.hours,
    minutes: localParts.minutes,
    seconds: localParts.seconds,
    weekdayIndex: typeof rawDayPanchang.weekdayIndex === "number" ? rawDayPanchang.weekdayIndex : localParts.weekdayIndex,
    dateKey: `${String(resolvedYmd.year).padStart(4, "0")}-${String(resolvedYmd.month).padStart(2, "0")}-${String(resolvedYmd.day).padStart(2, "0")}`,
    timeString12h: `${String(localHr12).padStart(2, "0")}:${String(localParts.minutes).padStart(2, "0")} ${localAmPm}`
  };
  const dateISO = ist.dateKey;
  const resolvedSunriseHHMM = `${String(localParts.hours).padStart(2, "0")}:${String(localParts.minutes).padStart(2, "0")}`;
  const transitKundali = existingTransitKundali || generateSampurnKundali("गोचर प्रश्न कुंडली", dateISO, resolvedSunriseHHMM, resolvedLocName);
  assertPlanetarySanityInvariants(transitKundali.planets);
  const cleanRawTithi = String(rawDayPanchang.tithiName || rawDayPanchang.tithi || transitKundali.panchang.tithi || "").replace(/\s*\([^)]*\)/g, "").trim();
  const cleanRawNak = String(rawDayPanchang.nakshatra || transitKundali.panchang.nakshatraName || "").split(/,\s*फिर|तत्पश्चात/u)[0].replace(/\s*\([^)]*\)/g, "").replace(/\s*नक्षत्र$/u, "").trim();
  const cleanRawYoga = String(rawDayPanchang.yoga || transitKundali.panchang.yoga || "").replace(/\s*\([^)]*\)/g, "").replace(/\s*योग$/u, "").trim();
  const cleanRawPaksha = String(rawDayPanchang.paksha || transitKundali.panchang.paksha || "").replace(/\s*\([^)]*\)/g, "").trim();
  const cleanFestival = String(
    rawDayPanchang.festivalName || (typeof rawDayPanchang.specialFestival === "string" && rawDayPanchang.specialFestival.startsWith("महापर्व/व्रत:") ? rawDayPanchang.specialFestival.replace(/^महापर्व\/व्रत:\s*/, "") : "")
  ).trim();
  const abhijitConflictObj = rawDayPanchang.abhijitConflict;
  const abhijitPureSpansMs = Array.isArray(abhijitConflictObj?.pureRemainingSpansMs) ? abhijitConflictObj.pureRemainingSpansMs : [];
  const totalPureAbhijitMs = abhijitPureSpansMs.reduce(
    (acc, [s, e]) => acc + Math.max(0, e - s),
    0
  );
  const isAbhijitNominalPure = Boolean(
    abhijitConflictObj?.hasOverlap && !abhijitConflictObj?.isFullyPolluted && (abhijitPureSpansMs.length > 0 && totalPureAbhijitMs < 10 * 6e4 || String(abhijitConflictObj?.warningMessageHi || "").includes("नाम-मात्र"))
  );
  const isAbhijitProhibitedForAction = Boolean(
    rawDayPanchang.kalVedhaReport?.abhijit?.isFullyEclipsed || abhijitConflictObj?.isFullyPolluted || isAbhijitNominalPure || String(rawDayPanchang.abhijitMuhurat || "").includes("पूर्णतः वर्जित")
  );
  const recommendedAbhijitWindowHi = abhijitConflictObj?.hasOverlap && abhijitConflictObj?.pureRemainingWindowHi ? abhijitConflictObj.pureRemainingWindowHi : rawDayPanchang.abhijitFullWindow || rawDayPanchang.abhijitMuhurat || "11:48 AM - 12:36 PM";
  const panchang = {
    paksha: cleanRawPaksha,
    tithi: cleanRawTithi,
    nakshatra: cleanRawNak,
    yoga: cleanRawYoga,
    festivalName: cleanFestival,
    abhijitMuhurat: recommendedAbhijitWindowHi,
    vijayMuhurat: rawDayPanchang.vijayMuhurat || "दोपहर 01:55 PM – 02:40 PM",
    amritKaal: rawDayPanchang.amritKaal || "प्रातः शुभ मुहूर्त",
    rahukaal: rawDayPanchang.rahuKaal || rawDayPanchang.rahukaal || "दोपहर 01:30 - 03:00",
    yamaganda: rawDayPanchang.yamagandam || rawDayPanchang.yamaganda || "प्रातः 09:00 - 10:30",
    dishaShool: rawDayPanchang.dishaShool || "पूर्व दिशा",
    weekdayIndex: typeof rawDayPanchang.weekdayIndex === "number" ? rawDayPanchang.weekdayIndex : ist.weekdayIndex,
    isWednesday: (typeof rawDayPanchang.weekdayIndex === "number" ? rawDayPanchang.weekdayIndex : ist.weekdayIndex) === 3,
    isAbhijitFullyProhibited: isAbhijitProhibitedForAction
  };
  const julianDayNum = Number(
    (24405875e-1 + safeDate.getTime() / 864e5).toFixed(2)
  );
  const endDaysOffset = period === "weekly" ? 6 : period === "monthly" ? 28 : 0;
  const endDateObj = new Date(safeDate.getTime() + endDaysOffset * 864e5);
  const endLocal = getLocalDateParts(endDateObj, resolvedTz);
  const endISO = endLocal.dateKey;
  const endKundali = endDaysOffset > 0 ? generateSampurnKundali("अवधि गोचर अंत", endISO, resolvedSunriseHHMM, resolvedLocName) : transitKundali;
  const sunriseISTHours = typeof rawDayPanchang.sunriseISTHours === "number" ? rawDayPanchang.sunriseISTHours : parseClockDecimalIST(String(rawDayPanchang.sunrise || ""), 6.5, true);
  const sunsetISTHours = typeof rawDayPanchang.sunsetISTHours === "number" ? rawDayPanchang.sunsetISTHours : parseClockDecimalIST(String(rawDayPanchang.sunset || ""), 17.5, false);
  const rawMoonPlanet = transitKundali.planets.find((p) => p.id === "moon");
  const parsedChandra = parseChandraRashiTransition(
    String(rawDayPanchang.chandraRashi || ""),
    rawMoonPlanet?.rashiNumber || 1,
    sunriseISTHours,
    sunsetISTHours
  );
  const rawSuryaRashiStr = String(rawDayPanchang.suryaRashi || "").trim();
  const rawSunPlanet = transitKundali.planets.find((p) => p.id === "sun");
  const syncedSunSignNum = rawSuryaRashiStr ? resolveRashiSignNumberFromName(rawSuryaRashiStr, rawSunPlanet?.rashiNumber || 1) : rawSunPlanet?.rashiNumber || 1;
  const planets = transitKundali.planets.map((p) => {
    if (p.id === "moon") {
      const mMeta = RASHI_META_LIST[(parsedChandra.prevailingSignNumber - 1 + 12) % 12];
      return { ...p, rashiNumber: mMeta.number, rashi: `${mMeta.nameHi} (${mMeta.nameEn})` };
    }
    if (p.id === "sun") {
      const sMeta = RASHI_META_LIST[(syncedSunSignNum - 1 + 12) % 12];
      return { ...p, rashiNumber: sMeta.number, rashi: `${sMeta.nameHi} (${sMeta.nameEn})` };
    }
    return p;
  });
  const savBySign = transitKundali.ashtakavarga.sarvashtakavarga;
  const houseOccupationMap = {};
  for (let h = 1; h <= 12; h++) houseOccupationMap[h] = [];
  planets.forEach((p) => {
    const h = (p.rashiNumber - rashiNum + 12) % 12 + 1;
    houseOccupationMap[h].push(p);
  });
  const planetTransits = planets.map((p) => {
    const h = (p.rashiNumber - rashiNum + 12) % 12 + 1;
    const rule = PARASHARI_GOCHAR_FAVORABLE[p.id];
    const isFavorableRaw = rule ? rule.favorableHouses.includes(h) : [3, 6, 10, 11].includes(h);
    const vedhaHouse = rule?.vedhaMap[h];
    let hasVedha = false;
    let vedhaByPlanetHi;
    if (isFavorableRaw && vedhaHouse) {
      const obstructingPlanets = (houseOccupationMap[vedhaHouse] || []).filter((other) => {
        if (other.id === p.id) return false;
        if (p.id === "sun" && other.id === "saturn" || p.id === "saturn" && other.id === "sun") {
          return false;
        }
        if (p.id === "moon" && other.id === "mercury" || p.id === "mercury" && other.id === "moon") {
          return false;
        }
        return true;
      });
      if (obstructingPlanets.length > 0) {
        hasVedha = true;
        vedhaByPlanetHi = obstructingPlanets.map((op) => (op.hindiName || op.name).split(" ")[0]).join(", ");
      }
    }
    const rashiMetaOfPlanet = RASHI_META_LIST[(p.rashiNumber - 1 + 12) % 12];
    return {
      id: p.id,
      nameHi: (p.hindiName || p.name).split(" (")[0],
      nameEn: p.id.charAt(0).toUpperCase() + p.id.slice(1),
      rashiNumber: p.rashiNumber,
      rashiNameHi: rashiMetaOfPlanet.nameHi,
      rashiNameEn: rashiMetaOfPlanet.nameEn,
      degreeDMS: p.fullDegreeDMS,
      nakshatraHi: p.nakshatra,
      nakshatraPada: p.pada,
      houseFromRashi: h,
      bhavaNameHi: BHAVA_NAMES_HI[h],
      bhavaNameEn: BHAVA_NAMES_EN[h],
      isFavorableGochar: isFavorableRaw && !hasVedha,
      hasVedha,
      vedhaByPlanetHi,
      isRetrograde: isGrahaRetrogradeAt(p.id, safeDate.getTime()),
      isCombust: p.isCombust,
      dignityHi: p.dignity,
      savBindusInSign: savBySign[(p.rashiNumber - 1 + 12) % 12] || 28
    };
  });
  const getTransit = (id) => planetTransits.find((pt) => pt.id === id) || planetTransits[0];
  const signOfHouse = (h) => (rashiNum - 1 + (h - 1)) % 12 + 1;
  const bindusInHouse = (h) => savBySign[signOfHouse(h) - 1] || 28;
  const lagneshInfo = getPlanetLordOfSign(signOfHouse(1));
  const dhaneshInfo = getPlanetLordOfSign(signOfHouse(2));
  const parakrameshInfo = getPlanetLordOfSign(signOfHouse(3));
  const sukheshInfo = getPlanetLordOfSign(signOfHouse(4));
  const panchameshInfo = getPlanetLordOfSign(signOfHouse(5));
  const shashtheshInfo = getPlanetLordOfSign(signOfHouse(6));
  const saptameshInfo = getPlanetLordOfSign(signOfHouse(7));
  getPlanetLordOfSign(signOfHouse(8));
  const bhagyeshInfo = getPlanetLordOfSign(signOfHouse(9));
  const karmeshInfo = getPlanetLordOfSign(signOfHouse(10));
  const labheshInfo = getPlanetLordOfSign(signOfHouse(11));
  const lagneshT = getTransit(lagneshInfo.planetId);
  const dhaneshT = getTransit(dhaneshInfo.planetId);
  getTransit(parakrameshInfo.planetId);
  const sukheshT = getTransit(sukheshInfo.planetId);
  const panchameshT = getTransit(panchameshInfo.planetId);
  getTransit(shashtheshInfo.planetId);
  const saptameshT = getTransit(saptameshInfo.planetId);
  getTransit(bhagyeshInfo.planetId);
  const karmeshT = getTransit(karmeshInfo.planetId);
  const labheshT = getTransit(labheshInfo.planetId);
  const sunT = getTransit("sun");
  const moonT = getTransit("moon");
  const marsT = getTransit("mars");
  const mercT = getTransit("mercury");
  const jupT = getTransit("jupiter");
  const venT = getTransit("venus");
  const satT = getTransit("saturn");
  const rahuT = getTransit("rahu");
  const ketuT = getTransit("ketu");
  const rashiIndex = (rashiNum - 1 + 12) % 12;
  const moonSign1House = (parsedChandra.sign1Number - 1 - rashiIndex + 12) % 12 + 1;
  const moonSign2House = parsedChandra.hasTransition && parsedChandra.sign2Number ? (parsedChandra.sign2Number - 1 - rashiIndex + 12) % 12 + 1 : void 0;
  const moonSandhiNextHouse = moonSign2House;
  const exactMoonHouse = moonT.houseFromRashi;
  const hasActiveSankranti = /संक्रांति|संक्रान्ति/u.test(rawSuryaRashiStr) || /संक्रांति|संक्रान्ति/u.test(panchang.festivalName) || Boolean(rawDayPanchang.sankrantiName);
  const activeSankrantiNameHi = rawDayPanchang.sankrantiName || (hasActiveSankranti ? `${sunT.rashiNameHi} संक्रांति` : "");
  const endSun = endKundali.planets.find((p) => p.id === "sun");
  const endMoon = endKundali.planets.find((p) => p.id === "moon");
  const endMerc = endKundali.planets.find((p) => p.id === "mercury");
  const endVen = endKundali.planets.find((p) => p.id === "venus");
  const rashiPrimaryNakIndex = Math.floor(((rashiNum - 1) * 30 + 15) / (360 / 27));
  const fallbackMoonNakIndex = Math.max(
    0,
    Math.floor(
      ((moonT.rashiNumber - 1) * 30 + (parseFloat(moonT.degreeDMS) || 10)) / (360 / 27)
    ) % 27
  );
  const currentNakIndex = resolveActiveNakshatraIndex(cleanRawNak, fallbackMoonNakIndex);
  const rawTaraNum = (currentNakIndex - rashiPrimaryNakIndex + 27) % 9 + 1;
  const chandrabalHouse = exactMoonHouse;
  const isMainDayInauspiciousMoon = [4, 8, 12].includes(moonSign1House) || [4, 8, 12].includes(chandrabalHouse);
  const isAfternoonEveningInauspiciousMoon = !isMainDayInauspiciousMoon && Boolean(
    parsedChandra.hasTransition && moonSign2House && [4, 8, 12].includes(moonSign2House)
  );
  const isTier1TopShubh = !isMainDayInauspiciousMoon && !isAfternoonEveningInauspiciousMoon && [1, 3, 7, 10, 11].includes(chandrabalHouse);
  const isTier2SixthHouse = !isMainDayInauspiciousMoon && !isAfternoonEveningInauspiciousMoon && chandrabalHouse === 6;
  const isTier3MediumShubh = !isMainDayInauspiciousMoon && (isAfternoonEveningInauspiciousMoon || [2, 5, 9].includes(chandrabalHouse));
  const isTier4Caution = isMainDayInauspiciousMoon;
  const isChandrabalShubh = isTier1TopShubh || isTier2SixthHouse || isAfternoonEveningInauspiciousMoon;
  const HARMONIZED_TARA_HI = {
    1: isChandrabalShubh ? "जन्म नक्षत्र समन्वय (आत्मबल व कार्य सिद्धि)" : "जन्म तारा (शांत मन से कार्य करें)",
    2: "संपत तारा (धन-वृद्धि व सौभाग्य कारक)",
    3: isChandrabalShubh ? "सक्रिय नक्षत्र योग (परिश्रम से सफलता)" : "संयम तारा (महत्वपूर्ण कार्यों में धैर्य रखें)",
    4: "क्षेम तारा (कल्याण, सुरक्षा व मानसिक शांति)",
    5: isChandrabalShubh ? "साधना नक्षत्र योग (एकाग्रता से लक्ष्य प्राप्ति)" : "मध्यम तारा (वाणी व व्यवहार में सौम्यता रखें)",
    6: "साधक तारा (मनोवांछित कार्य सिद्धि योग)",
    7: isChandrabalShubh ? "पुरुषार्थ नक्षत्र योग (अनुशासन से विजय)" : "सावधानी तारा (बड़े जोखिम टालें व इष्ट स्मरण करें)",
    8: "मित्र तारा (सहयोग, सम्मान व उन्नति कारक)",
    9: "अतिमित्र तारा (विशेष भाग्योदय व श्रेष्ठ सफलता)"
  };
  const tarabalNameHi = HARMONIZED_TARA_HI[rawTaraNum] || "साधक तारा (कार्य सिद्धि योग)";
  const tarabalIsAuspicious = isChandrabalShubh || [2, 4, 6, 8, 9].includes(rawTaraNum);
  const CHANDRABAL_BHAVA_MEANING_HI = {
    1: "प्रथम (राशि) भाव — आत्मविश्वास, तेज एवं मानसिक प्रसन्नता",
    2: "द्वितीय (धन) भाव — वाणी में मधुरता एवं धन-परिवार पर ध्यान",
    3: "तृतीय (पराक्रम) भाव — साहस वृद्धि, नए संपर्क एवं कार्य प्रगति",
    4: "चतुर्थ भाव — माता के स्वास्थ्य एवं घरेलू सामंजस्य पर ध्यान दें",
    5: "पंचम (बुद्धि/त्रिकोण) भाव — रचनात्मक बुद्धि, संतान सुख एवं शुभ विचार",
    6: "षष्ठ भाव — विजय व कार्यसिद्धि भाव, स्वास्थ्य व विवाद में संयम रखें",
    7: "सप्तम (केंद्र) भाव — साझेदारी में लाभ, सम्मान एवं दांपत्य माधुर्य",
    8: "अष्टम (आयु/अवरोध) भाव — वाहन सावधानी, जोखिम त्याग व मानसिक शांति रखें",
    9: "नवम (भाग्य/त्रिकोण) भाव — धर्म, पुण्य एवं वरिष्ठों के आशीर्वाद से प्रगति",
    10: "दशम (कर्म/केंद्र) भाव — कार्यक्षेत्र में प्रतिष्ठा एवं लक्ष्य की प्राप्ति",
    11: "एकादश (लाभ) भाव — उत्तम धन लाभ, इच्छा पूर्ति एवं उत्साह",
    12: "द्वादश (व्यय/यात्रा) भाव — फिजूलखर्ची पर नियंत्रण, यात्रा सावधानी व विश्राम लें"
  };
  const cleanTransitionClockHi = (parsedChandra.endTimeText || "दोपहर").replace(/\s*तक$/u, "").trim();
  const eveningCautionBhavaWordHi = moonSign2House === 8 ? "अष्टम" : moonSign2House === 12 ? "द्वादश" : "चतुर्थ";
  const srRefMsForMoon = typeof rawDayPanchang.dailyPanchang?.sunriseTimestamp === "number" ? rawDayPanchang.dailyPanchang.sunriseTimestamp : safeDate.getTime();
  const moonSunElongDeg = ((getSiderealMoonLonDeg(srRefMsForMoon) - getSiderealSunLonDeg(srRefMsForMoon)) % 360 + 360) % 360;
  const isKsheenaMoonTithi = panchang.paksha.includes("कृष्ण") && /त्रयोदशी|चतुर्दशी|अमावस्या/u.test(panchang.tithi) || panchang.paksha.includes("शुक्ल") && /प्रतिपदा/u.test(panchang.tithi);
  const isKsheenaMoon = moonSunElongDeg >= 324 || moonSunElongDeg < 12 || isKsheenaMoonTithi;
  const baseTierLabelHi = isKsheenaMoon ? `क्षीण चंद्रबल (संयम अपेक्षित — ${CHANDRABAL_BHAVA_MEANING_HI[chandrabalHouse]})` : isTier4Caution ? `संयमशील चंद्र गोचर (सावधानी आवश्यक — ${CHANDRABAL_BHAVA_MEANING_HI[moonSign1House] || CHANDRABAL_BHAVA_MEANING_HI[chandrabalHouse]})` : isAfternoonEveningInauspiciousMoon ? `प्रातः-दोपहर शुभ चंद्रबल (${cleanTransitionClockHi} के बाद ${eveningCautionBhavaWordHi} चंद्रमा होने से सायंकाल में सावधानी रखें)` : isTier1TopShubh ? `अत्यंत शुभ चंद्रबल (${CHANDRABAL_BHAVA_MEANING_HI[chandrabalHouse]})` : isTier2SixthHouse ? `शुभ चंद्रबल (षष्ठ भाव: विजय व कार्यसिद्धि — स्वास्थ्य व विवाद में संयम रखें)` : `मध्यम चंद्रबल (${CHANDRABAL_BHAVA_MEANING_HI[chandrabalHouse]})`;
  const chandrabalStatusHi = parsedChandra.hasTransition && parsedChandra.endTimeText && moonSign2House && parsedChandra.sign2NameHi ? `${parsedChandra.sign1NameHi} (${formatHindiHouseOrdinal(moonSign1House)} भाव, ${parsedChandra.endTimeText}), फिर ${parsedChandra.sign2NameHi} (${formatHindiHouseOrdinal(moonSign2House)} भाव) — ${baseTierLabelHi}` : baseTierLabelHi;
  let sadeSatiStatusHi = "शनि का गोचर अनुकूल एवं संतुलित है";
  if (satT.houseFromRashi === 12) {
    sadeSatiStatusHi = "शनि साढ़ेसाती (प्रथम चरण) — धैर्य व नियमित कर्म से स्थिर लाभ";
  } else if (satT.houseFromRashi === 1) {
    sadeSatiStatusHi = "शनि साढ़ेसाती (मध्य चरण) — अनुशासन व विनम्रता से कार्य सिद्ध होंगे";
  } else if (satT.houseFromRashi === 2) {
    sadeSatiStatusHi = "शनि साढ़ेसाती (अंतिम चरण) — वाणी के संयम व बचत से भाग्योदय";
  } else if (satT.houseFromRashi === 4) {
    sadeSatiStatusHi = "शनि ढैय्या प्रभाव — पारिवारिक सामंजस्य व शांत चित्त से सफलता";
  } else if (satT.houseFromRashi === 8) {
    sadeSatiStatusHi = "शनि ढैय्या प्रभाव — स्वास्थ्य व समय-प्रबंधन पर विशेष ध्यान दें";
  }
  const BHAVA_SCORE_CONFIG = {
    11: { base: 90, min: 78, max: 92 },
    10: { base: 89, min: 78, max: 92 },
    1: { base: 88, min: 78, max: 91 },
    7: { base: 86, min: 78, max: 90 },
    3: { base: 85, min: 78, max: 89 },
    6: { base: 83, min: 78, max: 87 },
    9: { base: 76, min: 70, max: 77 },
    5: { base: 74, min: 70, max: 77 },
    2: { base: 72, min: 70, max: 77 },
    4: { base: 64, min: 60, max: 68 },
    12: { base: 61, min: 57, max: 65 },
    8: { base: 58, min: 55, max: 62 }
  };
  const effectiveScoreHouse = isMainDayInauspiciousMoon ? [4, 8, 12].includes(moonSign1House) ? moonSign1House : chandrabalHouse : chandrabalHouse;
  const bhavaBand = isAfternoonEveningInauspiciousMoon ? {
    base: moonSign2House === 8 ? 72 : moonSign2House === 12 ? 74 : 75,
    min: 70,
    max: 77
  } : BHAVA_SCORE_CONFIG[effectiveScoreHouse] || { base: 74, min: 70, max: 77 };
  const tierMin = isTier4Caution ? 55 : isAfternoonEveningInauspiciousMoon || isTier3MediumShubh ? 70 : 78;
  const tierMax = isTier4Caution ? 68 : isAfternoonEveningInauspiciousMoon || isTier3MediumShubh ? 77 : 92;
  const clampToBhavaBand = (val) => Math.min(tierMax, Math.max(tierMin, Math.min(bhavaBand.max, Math.max(bhavaBand.min, Math.round(val)))));
  const houseScoreDelta = (t) => {
    if (t.isFavorableGochar) return 1.2;
    if ([1, 2, 3, 5, 7, 9, 10, 11].includes(t.houseFromRashi)) return 0.4;
    return -0.8;
  };
  const b1 = bindusInHouse(1);
  const b2 = bindusInHouse(2);
  const b4 = bindusInHouse(4);
  const b5 = bindusInHouse(5);
  const b6 = bindusInHouse(6);
  const b7 = bindusInHouse(7);
  const b9 = bindusInHouse(9);
  const b10 = bindusInHouse(10);
  const b11 = bindusInHouse(11);
  const vaarProfile = VAAR_DAILY_PROFILES[(panchang.weekdayIndex % 7 + 7) % 7];
  const vaarLordTransit = getTransit(vaarProfile.lordId);
  const vaarLordBonus = vaarLordTransit.isFavorableGochar ? 1 : [1, 3, 5, 7, 9, 10, 11].includes(vaarLordTransit.houseFromRashi) ? 0.4 : -0.6;
  const taraBonus = tarabalIsAuspicious ? 0.8 : -0.6;
  const pakshaBonus = panchang.paksha.includes("शुक्ल") ? 0.5 : -0.3;
  const isMoonRahuConjunct = moonT.rashiNumber === rahuT.rashiNumber;
  const isMoonKetuConjunct = moonT.rashiNumber === ketuT.rashiNumber;
  const isMoonRahuKetuConjunct = isMoonRahuConjunct || isMoonKetuConjunct;
  const isMoonSaturnConjunct = moonT.rashiNumber === satT.rashiNumber;
  const isKetuJupiterConjunct = ketuT.rashiNumber === jupT.rashiNumber;
  const isRahuJupiterConjunct = rahuT.rashiNumber === jupT.rashiNumber;
  const moonJupSep = (jupT.rashiNumber - moonT.rashiNumber + 12) % 12;
  const isGajakesariTransit = [0, 3, 6, 9].includes(moonJupSep) && !jupT.isCombust;
  const isKarmeshDebilitated = PLANET_DEBILITATED_SIGN[karmeshT.id] === karmeshT.rashiNumber;
  const isKarmesh12th = karmeshT.houseFromRashi === 12;
  const isKarmesh8th = karmeshT.houseFromRashi === 8;
  const isKarmeshRestrained = isKarmesh12th || isKarmeshDebilitated;
  const rahuKetuAxisBonus = rahuT.houseFromRashi === 1 || rahuT.houseFromRashi === 7 || rahuT.houseFromRashi === 10 || ketuT.houseFromRashi === 1 ? -0.8 : [3, 6, 11].includes(rahuT.houseFromRashi) ? 0.6 : 0;
  const maleficConjunctionPenalty = isMoonRahuKetuConjunct || isMoonSaturnConjunct ? -6 : 0;
  const moonConjunctionDelta = maleficConjunctionPenalty + (isGajakesariTransit ? 1.2 : 0) + rahuKetuAxisBonus;
  const dailyNakQual = NAKSHATRA_DAILY_QUALITIES[currentNakIndex % 27] || NAKSHATRA_DAILY_QUALITIES[0];
  const tithiPakshaInfo = getTithiPakshaDailyGuidance(
    panchang.paksha,
    panchang.tithi,
    panchang.festivalName,
    moonT.houseFromRashi
  );
  const dailyFineTune = (ist.day + rashiNum * 3 + currentNakIndex) % 3 - 1;
  const periodVariance = period === "weekly" ? 1 : period === "monthly" ? 1 : 0;
  const careerScore = clampToBhavaBand(
    bhavaBand.base + (b10 - 28) * 0.2 + houseScoreDelta(karmeshT) + houseScoreDelta(sunT) * 0.5 + vaarLordBonus * 0.6 + taraBonus * 0.4 + moonConjunctionDelta * 1 + dailyFineTune * 0.6 + periodVariance
  );
  const wealthScore = clampToBhavaBand(
    bhavaBand.base + ((b2 + b11) / 2 - 28) * 0.2 + houseScoreDelta(dhaneshT) + houseScoreDelta(labheshT) * 0.5 + pakshaBonus + vaarLordBonus * 0.4 + moonConjunctionDelta * 1 + ((ist.day + rashiNum + currentNakIndex) % 3 - 1) * 0.6
  );
  const familyScore = clampToBhavaBand(
    bhavaBand.base + ((b4 + b7) / 2 - 28) * 0.2 + houseScoreDelta(sukheshT) + houseScoreDelta(venT) * 0.5 + taraBonus * 0.5 + moonConjunctionDelta * 0.9 + ((ist.day * 2 + panchang.weekdayIndex + rashiNum) % 3 - 1) * 0.6
  );
  const educationScore = clampToBhavaBand(
    bhavaBand.base + ((b5 + b9) / 2 - 28) * 0.2 + houseScoreDelta(panchameshT) + houseScoreDelta(mercT) * 0.5 + vaarLordBonus * 0.5 + moonConjunctionDelta * 0.9 + ((currentNakIndex + rashiNum) % 3 - 1) * 0.6
  );
  const healthScore = clampToBhavaBand(
    bhavaBand.base + ((b1 + b6) / 2 - 28) * 0.2 + houseScoreDelta(lagneshT) + houseScoreDelta(marsT) * 0.4 + taraBonus * 0.5 + moonConjunctionDelta * 1 + ((ist.day + currentNakIndex + panchang.weekdayIndex) % 3 - 1) * 0.6
  );
  const overallScore = clampToBhavaBand(
    (careerScore + wealthScore + familyScore + educationScore + healthScore) / 5
  );
  const periodTitleHi = period === "daily" ? "दैनिक राशिफल" : period === "weekly" ? "साप्ताहिक राशिफल" : "मासिक राशिफल";
  const periodTitleEn = period === "daily" ? "Daily Horoscope" : period === "weekly" ? "Weekly Horoscope" : "Monthly Horoscope";
  const RASHI_DISTINCT_VOICES = {
    1: {
      mentalIntroHi: "मेष राशि के जातकों में आज स्वाभाविक नेतृत्व-क्षमता और नई शुरुआत का उत्साह रहेगा।",
      careerThemeHi: "कार्यक्षेत्र में आपके त्वरित निर्णय और साहसिक पहल से रुके हुए प्रोजेक्ट गति पकड़ेंगे; प्रबंधन व तकनीकी कार्यों में आपकी बात को प्राथमिकता मिलेगी।",
      wealthThemeHi: "व्यापारिक लेन-देन और स्व-अर्जित प्रयासों से आय में सुधार होगा; भूमि, मशीनरी या कार्य-विस्तार से जुड़े मामलों में सोच-समझकर कदम बढ़ाना लाभकारी रहेगा।",
      familyThemeHi: "घर के वरिष्ठ सदस्यों के साथ खुलकर संवाद होगा और जीवनसाथी आपके उत्साहवर्धन में साथ खड़े रहेंगे; छोटे भाई-बहनों से सहयोग मिलेगा।",
      educationThemeHi: "इंजीनियरिंग, रक्षा, खेल और प्रतियोगी परीक्षाओं की तैयारी कर रहे विद्यार्थियों के लिए आज अपनी रणनीति को धार देने का उत्तम समय है।",
      healthTipHi: "अत्यधिक भागदौड़ या जल्दबाजी से सिरदर्द व पित्त की अधिकता न होने दें; प्रातः खुली हवा में भ्रमण और पर्याप्त जल सेवन करें।",
      remedyActionHi: "हनुमान जी को सिंदूर व चमेली का तेल अर्पित करें तथा गुड़-चने का प्रसाद बांटें।",
      doTaskHi: "सुबह सबसे पहले अपने सबसे महत्वपूर्ण और कठिन कार्य की सूची बनाकर उसे पूरा करें।",
      dontTaskHi: "क्रोध या आवेश में आकर किसी सहकर्मी या परिजन को तीखा उत्तर देने से बचें।",
      mentalIntroEn: "Aries natives feel a strong surge of leadership, initiative, and decisive energy.",
      careerThemeEn: "Your bold initiative revives stalled projects at work; management and technical teams value your direct execution.",
      wealthThemeEn: "Self-driven business efforts bring steady income; evaluate machinery or property decisions calmly before committing.",
      familyThemeEn: "Warm, direct conversations with elders and strong encouragement from your spouse keep the home atmosphere lively.",
      educationThemeEn: "Students in engineering, defense, sports, and competitive exams gain sharp focus and problem-solving speed.",
      healthTipEn: "Avoid heat exhaustion or rushing through meals; morning brisk walks and hydration keep your vitality high.",
      remedyActionEn: "Offer sindoor or red flowers to Lord Hanuman and donate jaggery."
    },
    2: {
      mentalIntroHi: "वृषभ राशि के जातकों का मन आज स्थिरता, कलात्मक सुरुचि और व्यावहारिक संतुलन की ओर केंद्रित रहेगा।",
      careerThemeHi: "बैंकिंग, वित्त, वस्त्र, आभूषण और पारिवारिक व्यवसाय से जुड़े लोगों को आज अपनी विश्वसनीयता और मधुर व्यवहार का सीधा लाभ प्राप्त होगा।",
      wealthThemeHi: "कोष और बचत को मजबूत करने के प्रयास सफल रहेंगे; पुराने निवेश या पारिवारिक संपत्ति से जुड़ा कोई सुखद आर्थिक संकेत मिल सकता है।",
      familyThemeHi: "परिवार में सुख-सुविधा की वस्तुओं या सुरुचिपूर्ण भोजन का आनंद रहेगा; जीवनसाथी के साथ भविष्य की योजनाओं पर आत्मीय चर्चा होगी।",
      educationThemeHi: "वाणिज्य, कला, संगीत, प्रबंधन और साहित्य के विद्यार्थियों की एकाग्रता और प्रस्तुति-क्षमता आज विशेष रूप से सराही जाएगी।",
      healthTipHi: "गले, थायरॉइड या कफ से जुड़ी संवेदनशीलता से बचने के लिए ठंडे पेय पदार्थों से परहेज करें और गुनगुने जल का सेवन करें।",
      remedyActionHi: "माँ महालक्ष्मी के समक्ष शुद्ध घी का दीपक जलाएं और छोटी कन्याओं या गौमाता को मीठा भोग अर्पित करें।",
      doTaskHi: "आर्थिक बजट और पारिवारिक प्राथमिकताओं को व्यवस्थित करने के लिए आज का समय उपयोग करें।",
      dontTaskHi: "जिद्द या अड़ियल रुख के कारण किसी सरल समझौते को टालने की भूल न करें।",
      mentalIntroEn: "Taurus natives experience calm grounding, practical wisdom, and artistic appreciation.",
      careerThemeEn: "Professionals in banking, finance, retail, and family enterprises gain trust through dependable execution and polite diplomacy.",
      wealthThemeEn: "Savings and long-term financial security strengthen; past investments or family assets show encouraging progress.",
      familyThemeEn: "Domestic comfort, shared meals, and affectionate planning with your partner make home life peaceful.",
      educationThemeEn: "Students of commerce, fine arts, finance, and management excel in structured assignments.",
      healthTipEn: "Protect your throat and neck from cold beverages; warm herbal water supports immunity.",
      remedyActionEn: "Light a pure ghee lamp before Goddess Mahalakshmi and feed green fodder to a cow."
    },
    3: {
      mentalIntroHi: "मिथुन राशि के जातकों की बौद्धिक चतुराई, संवाद-कौशल और बहुमुखी प्रतिभा आज खुलकर सामने आएगी।",
      careerThemeHi: "मीडिया, आईटी, मार्केटिंग, शिक्षण और परामर्श क्षेत्र में आपकी तार्किक बात और नेटवर्किंग से नए क्लाइंट या महत्वपूर्ण अवसर जुड़ेंगे।",
      wealthThemeHi: "व्यापारिक अनुबंधों, कमीशन या डिजिटल माध्यमों से धन प्रवाह सुगम रहेगा; हालांकि एक साथ कई जगह पैसा लगाने के बजाय प्राथमिक लाभ पर ध्यान दें।",
      familyThemeHi: "मित्रों और रिश्तेदारों के साथ फोन या भेंट के माध्यम से सुखद संवाद होगा; घर का वातावरण हल्का-फुल्का और प्रसन्नतापूर्ण बना रहेगा।",
      educationThemeHi: "गणित, कंप्यूटर, पत्रकारिता और भाषा-अध्ययन से जुड़े छात्रों को जटिल विषय समझने में आज विशेष आसानी होगी।",
      healthTipHi: "अत्यधिक स्क्रीन-टाइम और मानसिक उधेड़बुन से कंधों या नसों में थकान हो सकती है; १० मिनट अनुलोम-विलोम प्राणायाम अवश्य करें।",
      remedyActionHi: "भगवान श्री गणेश को २१ दूर्वा दल अर्पित करें और पक्षियों को हरा मूंग डालें।",
      doTaskHi: "महत्वपूर्ण व्यावसायिक कॉल, ईमेल या प्रस्तुति को दोपहर के शुभ समय में संपन्न करें।",
      dontTaskHi: "अफवाहों या अधूरी जानकारी के आधार पर किसी भी कागज पर हस्ताक्षर न करें।",
      mentalIntroEn: "Gemini natives shine through quick wit, articulate communication, and adaptable thinking.",
      careerThemeEn: "IT, media, marketing, teaching, and consulting professionals unlock new opportunities through persuasive networking.",
      wealthThemeEn: "Digital trade, commissions, and commercial agreements bring smooth cash flow when you focus on one priority at a time.",
      familyThemeEn: "Cheerful conversations with friends, siblings, and spouse bring lightness and warmth to the household.",
      educationThemeEn: "Students in computing, mathematics, journalism, and languages grasp complex concepts effortlessly.",
      healthTipEn: "Limit excessive screen strain and practice deep breathing to relax your nervous system.",
      remedyActionEn: "Offer 21 blades of Durva grass to Lord Ganesha and feed soaked green gram to birds."
    },
    4: {
      mentalIntroHi: "कर्क राशि के जातकों में आज संवेदनशीलता, अपनों के प्रति समर्पण और अंतर्ज्ञान की गहराई विशेष रहेगी।",
      careerThemeHi: "चिकित्सा, शिक्षा, होटल, रियल एस्टेट और जनसेवा से जुड़े कार्यों में आपकी सहृदयता और सूझबूझ से सहकर्मी व वरिष्ठ दोनों प्रभावित होंगे।",
      wealthThemeHi: "घर-मकान की साज-सज्जा या परिवार की सुविधा पर सुविचारित खर्च होगा, साथ ही पैतृक सहयोग या सुरक्षित बचत योजनाओं से आर्थिक बल मिलेगा।",
      familyThemeHi: "माता जी का स्नेह और आशीर्वाद आपके आत्मबल को बढ़ाएगा; जीवनसाथी के साथ भावनात्मक जुड़ाव और विश्वास और अधिक गहरा होगा।",
      educationThemeHi: "चिकित्सा, मनोविज्ञान, इतिहास और कला विषय के विद्यार्थियों को शांत वातावरण में स्वाध्याय करने से उत्तम परिणाम मिलेंगे।",
      healthTipHi: "मौसम के बदलाव से सर्दी-जुकाम या पाचन की शिथिलता न हो, इसके लिए ताजा व सुपाच्य घर का बना भोजन ही ग्रहण करें।",
      remedyActionHi: 'शिवलिंग पर कच्चा दूध व गंगाजल अर्पित करें तथा "ॐ नमः शिवाय" मंत्र का जप करें।',
      doTaskHi: "घर के बड़ों का चरण-स्पर्श कर आशीर्वाद लें और अपने मन की बात भरोसेमंद परिजन से साझा करें।",
      dontTaskHi: "पुरानी बातों को बार-बार याद करके स्वयं को भावुक या उदास न होने दें।",
      mentalIntroEn: "Cancer natives are guided by deep intuition, emotional warmth, and care for loved ones.",
      careerThemeEn: "Healthcare, education, hospitality, and real-estate roles benefit from your empathetic and thoughtful leadership.",
      wealthThemeEn: "Secure savings and home-related investments progress well alongside steady family financial support.",
      familyThemeEn: "Blessings from your mother and heartfelt understanding with your partner nurture deep domestic peace.",
      educationThemeEn: "Students of medicine, psychology, humanities, and research thrive in quiet study hours.",
      healthTipEn: "Favor warm, freshly cooked meals to maintain digestive comfort and chest immunity.",
      remedyActionEn: "Offer raw milk and water on the Shiva Lingam while chanting Om Namah Shivaya."
    },
    5: {
      mentalIntroHi: "सिंह राशि के जातकों के व्यक्तित्व में आज आत्मगौरव, स्पष्टवादिता और उच्च स्तरीय कार्य करने की प्रेरणा रहेगी।",
      careerThemeHi: "प्रशासनिक सेवा, राजनीति, कॉर्पोरेट प्रबंधन और स्व-व्यवसाय में आपकी कार्यशैली की सराहना होगी; नई जिम्मेदारी या नेतृत्व का अवसर मिल सकता है।",
      wealthThemeHi: "सरकारी कार्यों, निविदाओं (टेंडर) या वरिष्ठ संपर्कों के माध्यम से आर्थिक लाभ का मार्ग खुलेगा; मान-सम्मान के साथ आय में स्थायित्व आएगा।",
      familyThemeHi: "पिता तुल्य व्यक्तियों का मार्गदर्शन आपके लिए सुरक्षा कवच बनेगा; घर में किसी शुभ आयोजन या अतिथि आगमन की रूपरेखा बन सकती है।",
      educationThemeHi: "प्रशासनिक सेवा (सिविल सर्विसेज), विधि (लॉ) और उच्च प्रबंधन की तैयारी कर रहे छात्रों का आत्मविश्वास आज चरम पर रहेगा।",
      healthTipHi: "आंखों की थकान, रक्तचाप या पीठ के ऊपरी हिस्से में जकड़न से बचने हेतु प्रातः सूर्य नमस्कार और हल्का व्यायाम करें।",
      remedyActionHi: "प्रातः तांबे के लोटे में जल, रोली व लाल पुष्प डालकर भगवान सूर्य नारायण को अर्घ्य दें।",
      doTaskHi: "कार्यस्थल पर अपनी टीम का उत्साह बढ़ाएं और बड़े लक्ष्यों की जिम्मेदारी स्वयं आगे बढ़कर लें।",
      dontTaskHi: "अहंकार या झूठी प्रतिष्ठा के कारण किसी छोटे सुझाव को अनदेखा न करें।",
      mentalIntroEn: "Leo natives radiate natural authority, confidence, and noble ambition.",
      careerThemeEn: "Administrative, government, corporate leadership, and entrepreneurial roles bring recognition and fresh responsibility.",
      wealthThemeEn: "Official contracts, senior references, and authoritative ventures strengthen your financial standing.",
      familyThemeEn: "Guidance from father figures and respectful warmth with your spouse uplift the entire family.",
      educationThemeEn: "Aspirants of civil services, law, and executive management study with commanding clarity.",
      healthTipEn: "Practice Surya Namaskar and avoid prolonged posture strain on your upper back and eyes.",
      remedyActionEn: "Offer water with red flowers to the rising Sun from a copper vessel."
    },
    6: {
      mentalIntroHi: "कन्या राशि के जातकों की सूक्ष्म विश्लेषण-क्षमता, व्यवस्था-प्रियता और व्यावहारिक समझ आज हर चुनौती को सरल बनाएगी।",
      careerThemeHi: "लेखा (अकाउंट्स), ऑडिट, डेटा एनालिसिस, स्वास्थ्य सेवा और व्यापार में आपकी सटीक कार्यप्रणाली से पुरानी त्रुटियां सुधरेंगी और काम समय से पहले पूरा होगा।",
      wealthThemeHi: "अनावश्यक खर्चों पर आपका नियंत्रण सराहनीय रहेगा; रुके हुए बिल, बकाया भुगतान या योजनाबद्ध व्यापारिक सौदे से धन कोष में वृद्धि होगी।",
      familyThemeHi: "पारिवारिक जिम्मेदारियों को आप बड़ी कुशलता से निभाएंगे; जीवनसाथी के साथ छोटी-छोटी बातों में दोष निकालने के बजाय सहयोग का भाव रखें।",
      educationThemeHi: "चार्टर्ड अकाउंटेंसी, विज्ञान, फार्मेसी और प्रतियोगी परीक्षाओं के छात्रों को आज प्रैक्टिस सेट और रिवीजन में शानदार सफलता मिलेगी।",
      healthTipHi: "पाचन तंत्र और आंतों की सुगमता के लिए फाइबर युक्त आहार, छाछ व हरी सब्जियों को भोजन में शामिल करें।",
      remedyActionHi: "गौमाता को हरा चारा या पालक खिलाएं और भगवान गणेश को मोदक अर्पित करें।",
      doTaskHi: "लंबित कागजी कार्यों, हिसाब-किताब और फाइलों को आज व्यवस्थित रूप से पूर्ण कर लें।",
      dontTaskHi: "हर काम में अत्यधिक पूर्णता (परफेक्शन) खोजने के चक्कर में मानसिक तनाव न पालें।",
      mentalIntroEn: "Virgo natives excel through sharp analytical precision, organization, and practical clarity.",
      careerThemeEn: "Accounting, auditing, healthcare, data, and commercial operations run smoothly under your meticulous eye.",
      wealthThemeEn: "Smart cost control and recovery of pending invoices or dues improve your net financial position.",
      familyThemeEn: "Fulfilling household duties with grace and appreciating your spouse rather than over-analyzing brings harmony.",
      educationThemeEn: "Students in accountancy, science, pharmacy, and analytical exams make rapid progress in revisions.",
      healthTipEn: "Support digestion with green vegetables, buttermilk, and regular meal timings.",
      remedyActionEn: "Feed green spinach or grass to a cow and pray to Lord Ganesha."
    },
    7: {
      mentalIntroHi: "तुला राशि के जातकों के जीवन में आज संतुलन, कूटनीतिक कौशल और सौंदर्यबोध का विशेष प्रभाव रहेगा।",
      careerThemeHi: "साझेदारी के व्यापार, कानून, फैशन, डिजाइन, जनसंपर्क और कॉर्पोरेट समझौतों में आपकी निष्पक्षता और आकर्षक प्रस्तुति से दोनों पक्ष संतुष्ट रहेंगे।",
      wealthThemeHi: "नए व्यावसायिक अनुबंध और ग्राहकों के बढ़ते विश्वास से आमदनी के स्रोत मजबूत होंगे; विलासिता और बचत के बीच अच्छा संतुलन बना रहेगा।",
      familyThemeHi: "दांपत्य जीवन में प्रेम, आपसी समझ और रोमांस की मधुरता रहेगी; घर की सजावट या किसी सामाजिक समारोह में शामिल होने का अवसर मिलेगा।",
      educationThemeHi: "विधि (लॉ), डिजाइन, समाजशास्त्र और प्रबंधन के विद्यार्थियों को सामूहिक चर्चा व प्रोजेक्ट वर्क में विशेष सराहना मिलेगी।",
      healthTipHi: "कमर के निचले हिस्से और गुर्दों (किडनी) के स्वास्थ्य हेतु दिनभर पर्याप्त शुद्ध जल पिएं और देर तक एक ही मुद्रा में न बैठें।",
      remedyActionHi: "माँ दुर्गा या महालक्ष्मी के मंदिर में सफेद पुष्प व इत्र अर्पित करें तथा सफेद वस्त्र का प्रयोग करें।",
      doTaskHi: "विवादित मामलों को सुलझाने और व्यावसायिक साझेदारों के साथ सहमति बनाने के लिए पहल करें।",
      dontTaskHi: "दो विकल्पों के बीच देर तक असमंजस में रहकर सही अवसर को हाथ से न जाने दें।",
      mentalIntroEn: "Libra natives bring diplomacy, aesthetic balance, and fairness to every interaction.",
      careerThemeEn: "Business partnerships, law, design, public relations, and client negotiations succeed through your balanced approach.",
      wealthThemeEn: "Growing client trust and partnership deals boost revenue while keeping lifestyle expenses balanced.",
      familyThemeEn: "Affectionate harmony with your spouse and pleasant social gatherings brighten the domestic sphere.",
      educationThemeEn: "Students of law, design, humanities, and business excel in group projects and presentations.",
      healthTipEn: "Stay well-hydrated for kidney and lower-back comfort, and stretch regularly during work.",
      remedyActionEn: "Offer white flowers and fragrance to Goddess Mahalakshmi."
    },
    8: {
      mentalIntroHi: "वृश्चिक राशि के जातकों की दृढ़ इच्छाशक्ति, गोपनीय कार्यनीति और गहराई से सोचने की क्षमता आज आपको भीड़ से अलग रखेगी।",
      careerThemeHi: "शोध, चिकित्सा, खनन, बीमा, सुरक्षा और तकनीकी गुत्थियों को सुलझाने वाले कार्यों में आपको आज कोई बड़ी सफलता या महत्वपूर्ण सूत्र मिल सकता है।",
      wealthThemeHi: "अचानक रुके हुए धन की प्राप्ति, बीमा/निवेश परिपक्वता या पुराने आर्थिक प्रयासों से लाभ होने के प्रबल संकेत हैं; अपनी वित्तीय योजनाएं गुप्त रखें।",
      familyThemeHi: "परिजनों के प्रति आपका सुरक्षात्मक भाव सराहनीय रहेगा, किंतु संदेह या पुरानी शिकायतों को त्यागकर खुला संवाद रखने से रिश्ते और मधुर होंगे।",
      educationThemeHi: "शोधार्थियों (रिसर्च स्कॉलर्स), मेडिकल, कोडिंग और गूढ़ विषयों के छात्रों की एकाग्रता आज अद्भुत परिणाम देगी।",
      healthTipHi: "तीखे-मसालेदार भोजन और रात्रि जागरण से बचें; रक्त शुद्धि और ऊर्जा संतुलन के लिए सुबह प्राणायाम करें।",
      remedyActionHi: "संकटमोचन हनुमान अष्टक या हनुमान चालीसा का पाठ करें और लाल मसूर या गुड़ का दान करें।",
      doTaskHi: "जिन महत्वपूर्ण कार्यों को आप लंबे समय से पूरा करना चाहते थे, उन पर आज शांत एकाग्रता से काम करें।",
      dontTaskHi: "अपनी भविष्य की बड़ी योजनाओं को समय से पहले हर किसी के सामने उजागर न करें।",
      mentalIntroEn: "Scorpio natives harness deep focus, strategic discretion, and unshakable determination.",
      careerThemeEn: "Research, medicine, insurance, security, and complex technical problem-solving yield breakthrough results.",
      wealthThemeEn: "Recovery of stuck funds,成熟 investments, or quiet financial strategies work in your favor.",
      familyThemeEn: "Letting go of unspoken doubts and communicating openly deepens trust with your spouse and family.",
      educationThemeEn: "Researchers, medical students, and advanced learners achieve intense concentration.",
      healthTipEn: "Avoid overly spicy food and late nights; morning breathwork keeps your energy balanced.",
      remedyActionEn: "Recite Hanuman Chalisa and donate red lentils or jaggery."
    },
    9: {
      mentalIntroHi: "धनु राशि के जातकों में आज आशावाद, धर्म-नीति के प्रति निष्ठा और दूरगामी लक्ष्य देखने की स्पष्ट दृष्टि रहेगी।",
      careerThemeHi: "शिक्षा, विधि, प्रकाशन, आध्यात्मिक संस्थान, परामर्श और उच्च प्रबंधन में आपके ज्ञान व ईमानदारी से वरिष्ठ अधिकारी एवं समाज दोनों प्रभावित होंगे।",
      wealthThemeHi: "भाग्य के सहयोग और नैतिक मार्ग से किए गए व्यापारिक प्रयासों से स्थायी धन लाभ होगा; धार्मिक या शैक्षणिक कार्यों में किया गया निवेश शुभ फल देगा।",
      familyThemeHi: "घर के बुजुर्गों और गुरुजनों के आशीर्वाद से परिवार में सकारात्मक ऊर्जा रहेगी; संतान की किसी उपलब्धि या प्रगति से मन प्रसन्न होगा।",
      educationThemeHi: "उच्च शिक्षा, दर्शन, विधि, विदेश अध्ययन और प्रतियोगी परीक्षाओं के विद्यार्थियों के लिए आज ज्ञान-वृद्धि का अत्यंत शुभ दिन है।",
      healthTipHi: "जांघों, कूल्हों या यकृत (लिवर) की सुगमता हेतु वसायुक्त भारी भोजन कम लें और प्रतिदिन पैदल चलने की आदत बनाए रखें।",
      remedyActionHi: "भगवान श्री हरि विष्णु को पीले पुष्प व चने की दाल-गुड़ अर्पित करें तथा माथे पर केसर/हल्दी का तिलक लगाएं।",
      doTaskHi: "किसी वरिष्ठ मार्गदर्शक या गुरु की सलाह लेकर अपने दीर्घकालीन करियर व वित्तीय लक्ष्य तय करें।",
      dontTaskHi: "अति-आत्मविश्वास में आकर बिना जांचे किसी बड़े वादे की जिम्मेदारी न लें।",
      mentalIntroEn: "Sagittarius natives are uplifted by optimism, ethical clarity, and visionary thinking.",
      careerThemeEn: "Academia, law, advisory roles, publishing, and senior management bring honor and mentorship support.",
      wealthThemeEn: "Fortunate openings and principled business decisions generate steady, respectable financial growth.",
      familyThemeEn: "Blessings of elders and encouraging news regarding children fill the home with joy.",
      educationThemeEn: "Higher education, philosophy, law, and scholarship aspirants experience remarkable mental expansion.",
      healthTipEn: "Keep meals light on the liver and enjoy brisk outdoor walks for hip and leg flexibility.",
      remedyActionEn: "Apply a saffron or turmeric tilak and offer yellow flowers to Lord Vishnu."
    },
    10: {
      mentalIntroHi: "मकर राशि के जातकों की कर्मठता, व्यावहारिक अनुशासन और धैर्यपूर्ण कार्यशैली आज ठोस परिणाम दिलाएगी।",
      careerThemeHi: "निर्माण (कंस्ट्रक्शन), उद्योग, प्रशासन, अभियांत्रिकी और संगठित व्यवसाय में आपकी मेहनत रंग लाएगी; कार्यस्थल पर आपकी गंभीरता और अनुभव का सम्मान बढ़ेगा।",
      wealthThemeHi: "स्थायी संपत्ति, दीर्घकालीन जमा योजना या व्यावसायिक विस्तार में धीरे-धीरे किंतु पक्की आर्थिक मजबूती आएगी; फिजूलखर्ची स्वतः नियंत्रित रहेगी।",
      familyThemeHi: "व्यस्त कार्यसूची के बीच परिवार के लिए थोड़ा समय अवश्य निकालें; जीवनसाथी के साथ व्यावहारिक जिम्मेदारियों को साझा करने से आत्मीयता बढ़ेगी।",
      educationThemeHi: "तकनीकी, सिविल, प्रबंधन और दीर्घकालीन परीक्षाओं की तैयारी कर रहे छात्रों को नियमित समय-सारणी से पढ़ाई करने पर पक्की सफलता मिलेगी।",
      healthTipHi: "घुटनों, जोड़ों और हड्डियों की मजबूती के लिए कैल्शियम युक्त आहार लें, सुबह की धूप सेकें और तिल के तेल से हल्की मालिश करें।",
      remedyActionHi: "शनि देव या पीपल वृक्ष के समीप सरसों के तेल का दीपक जलाएं और श्रमिकों या जरूरतमंदों की सहायता करें।",
      doTaskHi: "अपने कार्यक्षेत्र में दीर्घकालीन स्थिरता देने वाले प्रोजेक्ट्स को प्राथमिकता के साथ आगे बढ़ाएं।",
      dontTaskHi: "काम के बोझ के कारण अपने स्वास्थ्य और पारिवारिक विश्राम की अनदेखी न करें।",
      mentalIntroEn: "Capricorn natives achieve solid results through perseverance, structure, and practical discipline.",
      careerThemeEn: "Construction, manufacturing, administration, and corporate operations reward your steady, reliable work ethic.",
      wealthThemeEn: "Long-term assets, disciplined savings, and structured investments build durable financial security.",
      familyThemeEn: "Balancing professional duties with warm quality time at home strengthens spousal harmony.",
      educationThemeEn: "Students in technical, engineering, and long-term competitive courses thrive through disciplined schedules.",
      healthTipEn: "Support joint and knee health with morning sunlight, stretching, and nourishing meals.",
      remedyActionEn: "Light a mustard oil lamp near a Peepal tree and support hardworking helpers."
    },
    11: {
      mentalIntroHi: "कुंभ राशि के जातकों के मन में आज नवाचार (इनोवेशन), जनकल्याण और भविष्योन्मुखी विचारों की प्रधानता रहेगी।",
      careerThemeHi: "विज्ञान, आईटी, स्टार्टअप, सामाजिक संस्थाओं और आधुनिक तकनीक से जुड़े कार्यों में आपके नए प्रयोग और मित्र-नेटवर्क से विशेष उपलब्धि मिलेगी।",
      wealthThemeHi: "सामूहिक प्रोजेक्ट्स, ऑनलाइन व्यापार या नेटवर्क के माध्यम से आय के नए द्वार खुलेंगे; पुराने मित्र या सहयोगी की सलाह आर्थिक रूप से उपयोगी सिद्ध होगी।",
      familyThemeHi: "परिवार और मित्र-मंडली में आपके उदार व निष्पक्ष दृष्टिकोण की प्रशंसा होगी; जीवनसाथी के साथ बौद्धिक और मित्रवत तालमेल बना रहेगा।",
      educationThemeHi: "आधुनिक विज्ञान, कृत्रिम बुद्धिमत्ता (AI), इलेक्ट्रॉनिक्स और समाजशास्त्रीय शोध के छात्रों को आज नए आइडियाज पर काम करने में सफलता मिलेगी।",
      healthTipHi: "पिंडलियों (काफ मसल्स), टखनों और रक्त-संचार को सुचारु रखने के लिए नियमित स्ट्रेचिंग करें और पर्याप्त नींद लें।",
      remedyActionHi: "भगवान शिव और शनि देव का स्मरण करें तथा जरूरतमंदों को अन्न या काले तिल का दान करें।",
      doTaskHi: "अपने कार्य को आधुनिक तकनीक और टीम-वर्क से जोड़कर अधिक प्रभावी बनाएं।",
      dontTaskHi: "अकेलेपन या अनावश्यक वैचारिक उलझन में रहकर अपने काम की गति धीमी न करें।",
      mentalIntroEn: "Aquarius natives excel through innovative thinking, technological vision, and social networking.",
      careerThemeEn: "Technology, startups, scientific work, and institutional projects advance through your original ideas.",
      wealthThemeEn: "Collaborative ventures, digital platforms, and professional networks open fresh income channels.",
      familyThemeEn: "Friendly, open-minded companionship with your partner and supportive friends keeps spirits high.",
      educationThemeEn: "Students in computer science, electronics, innovation, and social sciences make creative breakthroughs.",
      healthTipEn: "Maintain good circulation in your legs and ankles with light exercise and restful sleep.",
      remedyActionEn: "Pray to Lord Shiva and donate food or black sesame seeds to the needy."
    },
    12: {
      mentalIntroHi: "मीन राशि के जातकों में आज आध्यात्मिक शांति, रचनात्मक कल्पनाशीलता और परोपकार की भावना प्रबल रहेगी।",
      careerThemeHi: "शिक्षा, चिकित्सा, कला, परामर्श, विदेश व्यापार और आध्यात्मिक-सामाजिक क्षेत्रों में आपकी अंतर्दृष्टि और सौम्य व्यवहार से कठिन कार्य भी सहजता से बनेंगे।",
      wealthThemeHi: "ईमानदारी से किए गए प्रयासों, शिक्षण/परामर्श या दूरस्थ संपर्कों से धन आगमन के शुभ योग हैं; शुभ व धार्मिक कार्यों में धन का सदुपयोग होगा।",
      familyThemeHi: "घर में शांतिपूर्ण और आध्यात्मिक वातावरण रहेगा; जीवनसाथी व संतान के प्रति आपका स्नेहिल व्यवहार परिवार को एक सूत्र में पिरोए रखेगा।",
      educationThemeHi: "साहित्य, चिकित्सा, संगीत, अध्यात्म और उच्च शोध से जुड़े विद्यार्थियों की कल्पना-शक्ति और स्मरण-क्षमता आज अत्यंत प्रखर रहेगी।",
      healthTipHi: "पैरों के पंजों की देखभाल करें, मौसम जनित कफ या आलस्य से बचने के लिए प्रातः हल्दी-दूध या तुलसी काढ़े का सेवन करें।",
      remedyActionHi: "भगवान श्री लक्ष्मीनारायण की पूजा करें, विष्णु सहस्रनाम का पाठ करें और पीले फल या केसरिया मिठाई का भोग लगाएं।",
      doTaskHi: "प्रातः कुछ समय ध्यान व प्रार्थना में बिताकर अपने अंतर्ज्ञान से आज के प्रमुख निर्णय लें।",
      dontTaskHi: "अत्यधिक भावुकता में आकर किसी अपरिचित व्यक्ति पर आंख मूंदकर आर्थिक भरोसा न करें।",
      mentalIntroEn: "Pisces natives are blessed with spiritual serenity, creative intuition, and compassionate wisdom.",
      careerThemeEn: "Education, healing, counseling, creative arts, and international assignments flourish through your gentle insight.",
      wealthThemeEn: "Ethical earnings, advisory work, and distant connections bring auspicious financial blessings.",
      familyThemeEn: "A peaceful, spiritual home atmosphere and affectionate bond with your spouse and children bring deep contentment.",
      educationThemeEn: "Students of literature, medicine, music, and higher research study with inspired clarity.",
      healthTipEn: "Care for your feet and immunity with warm turmeric milk or tulsi tea and restful sleep.",
      remedyActionEn: "Worship Lord Lakshmi-Narayana and offer yellow fruits or saffron sweets."
    }
  };
  const MOON_BHAVA_DYNAMIC_HI = {
    1: {
      summary: "चन्द्रमा आपकी ही राशि (प्रथम भाव) में होकर आत्मबल, चेहरे पर तेज और मानसिक प्रसन्नता बढ़ा रहे हैं।",
      careerAdd: "आज आपके व्यक्तित्व का प्रभाव कार्यस्थल पर स्पष्ट दिखेगा।",
      wealthAdd: "स्वयं के प्रयासों से आर्थिक स्थिति सुदृढ़ होगी।"
    },
    2: {
      summary: "चन्द्रमा द्वितीय (धन व वाणी) भाव में रहकर मधुर संवाद और पारिवारिक-आर्थिक विषयों को गति दे रहे हैं।",
      careerAdd: "आपकी सौम्य वाणी से कठिन व्यावसायिक बातचीत भी सफल होगी।",
      wealthAdd: "बचत बढ़ने और पारिवारिक कोष में वृद्धि का सुंदर योग है।"
    },
    3: {
      summary: "चन्द्रमा तृतीय (पराक्रम) भाव में होकर साहस, उत्साह और नए संपर्कों से कार्य-सिद्धि दिला रहे हैं।",
      careerAdd: "छोटी व्यावसायिक यात्रा या नए संपर्क से कार्यक्षेत्र में प्रगति होगी।",
      wealthAdd: "स्व-परिश्रम और भाई-बहनों/मित्रों के सहयोग से लाभ मिलेगा।"
    },
    4: {
      summary: "चन्द्रमा चतुर्थ (सुख व मातृ) भाव में हैं—आज माता के स्वास्थ्य, घरेलू सामंजस्य तथा मन की शांति पर विशेष ध्यान दें।",
      careerAdd: "कार्यस्थल पर जल्दबाजी के बजाय शांत एवं व्यवस्थित गति से कार्य आगे बढ़ाएं।",
      wealthAdd: "गृह-परिवार या माता के सुख-साधनों से जुड़े कार्यों में सुविचारित व संतुलित व्यय रहेगा।"
    },
    5: {
      summary: "चन्द्रमा पंचम (बुद्धि व संतान) भाव में रहकर रचनात्मक सोच, विद्या और सकारात्मक निर्णय-क्षमता दे रहे हैं।",
      careerAdd: "आपकी नई सोच और योजनाबद्ध कार्यशैली को वरिष्ठों की सराहना मिलेगी।",
      wealthAdd: "बुद्धि-कौशल और पूर्व के सही निर्णयों से आर्थिक लाभ प्राप्त होगा।"
    },
    6: {
      summary: "चन्द्रमा षष्ठ (रोग-शत्रु) भाव में हैं, आज विरोधियों व सहकर्मियों से तर्क-वितर्क टालें, नया कर्ज न लें और पाचन व खान-पान में संयम रखें।",
      careerAdd: "कार्यस्थल पर विरोधियों या सहकर्मियों से किसी भी बहस या वाद-विवाद से दूर रहकर अपने नियमित काम निपटाएं।",
      wealthAdd: "आज नया कर्ज लेने, किसी को उधार देने या क्रेडिट जोखिम उठाने से पूरी तरह परहेज करें।"
    },
    7: {
      summary: "चन्द्रमा सप्तम भाव में रहकर व्यापारिक साझेदारी, जनसंपर्क और दांपत्य सुख को प्रबल बना रहे हैं।",
      careerAdd: "दैनिक व्यापार, क्लाइंट मीटिंग और साझेदारी के कार्यों में उत्तम प्रगति होगी।",
      wealthAdd: "दैनिक आवक और व्यापारिक सौदों से अच्छा मुनाफा प्राप्त होगा।"
    },
    8: {
      summary: "चन्द्रमा अष्टम (आयु व अवरोध) भाव में हैं, आज वाहन सावधानी से चलाएं, नए जोखिमों से बचें और मानसिक शांति बनाए रखें।",
      careerAdd: "कार्यक्षेत्र में कोई नया जोखिम या अचानक बड़ा परिवर्तन न करें तथा अप्रत्याशित अड़चनों में धीरज रखें।",
      wealthAdd: "अचानक आर्थिक नुकसान से बचने के लिए सट्टे, बड़े निवेश और जोखिम भरे सौदों को आज टाल दें।"
    },
    9: {
      summary: "चन्द्रमा नवम (भाग्य) भाव में रहकर धर्म, पुण्य और वरिष्ठों के आशीर्वाद से भाग्योदय करा रहे हैं।",
      careerAdd: "भाग्य का साथ मिलने से लंबे समय से अटका हुआ कार्य आज सहज पूरा होगा।",
      wealthAdd: "दीर्घकालीन निवेश और धार्मिक-मांगलिक कार्यों से सुख-समृद्धि बढ़ेगी।"
    },
    10: {
      summary: "चन्द्रमा दशम (कर्म) भाव में रहकर कार्यक्षेत्र में विशेष उपलब्धि, सम्मान और लक्ष्य-सिद्धि दे रहे हैं।",
      careerAdd: "आज आपके कर्म और नेतृत्व की सराहना होगी तथा वरिष्ठों का पूर्ण सहयोग मिलेगा।",
      wealthAdd: "पेशेवर सफलता के साथ-साथ आर्थिक पक्ष भी मजबूत रहेगा।"
    },
    11: {
      summary: "चन्द्रमा एकादश (लाभ) भाव में रहकर धन आगमन, मनोकामना पूर्ति और सामाजिक प्रतिष्ठा बढ़ा रहे हैं।",
      careerAdd: "कम प्रयास में भी श्रेष्ठ व्यावसायिक परिणाम और लाभ के अवसर मिलेंगे।",
      wealthAdd: "आय के नए स्रोत बनने और रुका धन मिलने के लिए आज का दिन अत्यंत श्रेष्ठ है।"
    },
    12: {
      summary: "चन्द्रमा द्वादश (व्यय व यात्रा) भाव में हैं, आज फिजूलखर्ची पर कड़ा नियंत्रण रखें, यात्रा में सतर्क रहें और पर्याप्त नींद लें।",
      careerAdd: "अनावश्यक दौड़भाग कम करें तथा दूरस्थ या बाहरी संपर्कों के कार्यों में कागजी स्पष्टता बनाए रखें।",
      wealthAdd: "अनावश्यक खर्च (फिजूलखर्ची) और दिखावे की खरीदारी पर तुरंत रोक लगाकर अपनी बचत सुरक्षित रखें।"
    }
  };
  const voice = RASHI_DISTINCT_VOICES[rashiNum] || RASHI_DISTINCT_VOICES[1];
  const moonDyn = MOON_BHAVA_DYNAMIC_HI[chandrabalHouse] || MOON_BHAVA_DYNAMIC_HI[1];
  const formattedTithiDisplay = tithiPakshaInfo.cleanTithi.includes(tithiPakshaInfo.cleanPaksha.split(" ")[0]) ? `${tithiPakshaInfo.cleanTithi} तिथि` : `${tithiPakshaInfo.cleanPaksha} ${tithiPakshaInfo.cleanTithi} तिथि`;
  const formattedNakDisplay = `${dailyNakQual.nameHi} नक्षत्र`;
  const formattedYogaDisplay = panchang.yoga ? `${panchang.yoga} योग` : "शुभ योग";
  const festivalDeityHi = String(rawDayPanchang.festivalDeity || "").trim();
  String(rawDayPanchang.festivalMantra || "").trim();
  const activeParvLabelHi = panchang.festivalName || activeSankrantiNameHi;
  const resolvedPrimaryDeityHi = activeParvLabelHi && festivalDeityHi ? festivalDeityHi : hasActiveSankranti ? "भगवान सूर्यनारायण" : vaarProfile.lordHi;
  period === "daily" ? activeParvLabelHi ? `आज ${activeParvLabelHi} के पावन पर्व पर ${resolvedPrimaryDeityHi} की विशेष उपासना प्रमुख है (वार: ${vaarProfile.vaarNameHi}, ${vaarProfile.lordHi}), साथ ही ${formattedTithiDisplay}, ${formattedNakDisplay} (${dailyNakQual.natureHi}) एवं ${formattedYogaDisplay} का शुभ संयोग है।` : `आज ${vaarProfile.vaarNameHi} (${vaarProfile.lordHi} का दिन), ${formattedTithiDisplay}, ${formattedNakDisplay} (${dailyNakQual.natureHi}) तथा ${formattedYogaDisplay} का पावन संयोग है।` : period === "weekly" ? `इस पूरे सप्ताह चंद्रमा ${moonT.rashiNameHi} से ${RASHI_META_LIST[endMoon.rashiNumber - 1].nameHi} राशि तक तथा बुध ${mercT.rashiNameHi} से ${RASHI_META_LIST[endMerc.rashiNumber - 1].nameHi} तक गोचर करते हुए आपके जीवन के विभिन्न क्षेत्रों को गति देगा।` : `इस माह सूर्य (${sunT.rashiNameHi} से ${RASHI_META_LIST[endSun.rashiNumber - 1].nameHi}) और शुक्र (${venT.rashiNameHi} से ${RASHI_META_LIST[endVen.rashiNumber - 1].nameHi}) के राशि परिवर्तन से आपकी ${rashiMeta.nameHi} राशि में नई ऊर्जा और उन्नति के अवसर बनेंगे।`;
  let chandraGochar = "";
  let lagnaMentalText = "";
  let transitImpactText = "";
  let careerText = "";
  let wealthText = "";
  let familyText = "";
  let wealthFamilySummary = "";
  let educationText = "";
  let healthText = "";
  let remedyText = "";
  let doToday1 = "";
  let doToday2 = "";
  let dontToday1 = "";
  let dontToday2 = "";
  const getBhavaAndLordRemedyHi = (house, meta, cleanAction) => {
    const cleanVoiceLower = cleanAction.charAt(0).toLowerCase() + cleanAction.slice(1);
    const LORD_SHUBH_REMEDY_HI = {
      mars: `राशि स्वामी मंगल देव की शुभता हेतु`,
      venus: `राशि स्वामी शुक्र देव की कृपा व वैभव वृद्धि हेतु`,
      mercury: `राशि स्वामी बुध देव की बुद्धि-विवेक शुद्धि हेतु`,
      moon: `राशि स्वामी चंद्र देव के मानसिक सौम्य बल हेतु`,
      sun: `राशि स्वामी सूर्य नारायण के तेज व सम्मान वृद्धि हेतु`,
      jupiter: `राशि स्वामी देवगुरु बृहस्पति के भाग्योदय आशीर्वाद हेतु`,
      saturn: `राशि स्वामी शनि देव की कर्म-स्थिरता व न्याय कृपा हेतु`
    };
    const lordIntro = LORD_SHUBH_REMEDY_HI[meta.lordPlanetId] || `राशि स्वामी ${meta.lordHi.split(" (")[0]} की कृपा हेतु`;
    const isMoonLord = meta.lordPlanetId === "moon";
    let rawRemedy = "";
    if (house === 4) {
      rawRemedy = isMoonLord ? `${meta.nameHi} राशि के चतुर्थ भाव एवं राशि स्वामी चंद्र शांति हेतु शिवलिंग पर कच्चा दूध-जल अर्पित कर श्वेत पुष्प चढ़ाएं। प्रातः "${meta.beejMantra}" का १०८ जप करें।` : `${meta.nameHi} राशि के चतुर्थ भाव चंद्र शांति हेतु शिव अभिषेक करें तथा ${lordIntro} ${cleanVoiceLower}। प्रातः "${meta.beejMantra}" का १०८ जप करें।`;
    } else if (house === 8) {
      rawRemedy = isMoonLord ? `${meta.nameHi} राशि के अष्टम भाव एवं राशि स्वामी चंद्र शांति हेतु महादेव को दूध-जल अर्पित कर सफेद चावल दान करें। प्रातः "${meta.beejMantra}" का १०८ जप करें।` : `${meta.nameHi} राशि के अष्टम भाव चंद्र शांति हेतु महादेव पर दूध-जल अर्पित करें तथा ${lordIntro} ${cleanVoiceLower}। प्रातः "${meta.beejMantra}" का १०८ जप करें।`;
    } else if (house === 12) {
      rawRemedy = isMoonLord ? `${meta.nameHi} राशि के द्वादश भाव चंद्र शांति व व्यय नियंत्रण हेतु शिव जलाभिषेक कर सफेद अन्न दान करें। प्रातः "${meta.beejMantra}" का १०८ जप करें।` : `${meta.nameHi} राशि के द्वादश भाव चंद्र शांति हेतु शिव जलाभिषेक करें तथा ${lordIntro} ${cleanVoiceLower}। प्रातः "${meta.beejMantra}" का १०८ जप करें।`;
    } else if (house === 6) {
      rawRemedy = isMoonLord ? `${meta.nameHi} राशि के षष्ठ भाव कार्यसिद्धि एवं चंद्र बल हेतु शिवलिंग पर दूध-बिल्वपत्र अर्पित करें। प्रातः "${meta.beejMantra}" का १०८ जप करें।` : `${meta.nameHi} राशि के षष्ठ भाव कार्यसिद्धि हेतु महादेव को जल अर्पित करें तथा ${lordIntro} ${cleanVoiceLower}। प्रातः "${meta.beejMantra}" का १०८ जप करें।`;
    } else {
      rawRemedy = `${meta.nameHi} राशि के लिए आज ${lordIntro} ${cleanVoiceLower}। साथ ही आराध्य ${meta.ishtaDevtaHi} के समक्ष प्रातः "${meta.beejMantra}" का १०८ जप करें।`;
    }
    return fitHindiWordCountWindow(rawRemedy, 28, 38, buildRashiUniqueCloserMap("remedy", meta.number));
  };
  const getBhavaAndLordRemedyEn = (house, meta, cleanActionEn) => {
    const shortLordEn = meta.lordEn.split(" (")[0];
    if ([4, 8, 12].includes(house)) {
      const chandraEn = house === 4 ? "For 4th-house Chandra Shanti, perform Shiva Lingam abhishekam with raw milk and water and donate white items" : house === 8 ? "For 8th-house Chandra Shanti, offer raw milk and water to Lord Shiva while chanting Om Namah Shivaya and donate white rice" : "For 12th-house Chandra Shanti, worship Lord Shiva with water/milk abhishekam and donate white food to the needy";
      return `${chandraEn}, and for ruling planet ${shortLordEn} blessings, ${cleanActionEn.replace(/\.$/, "")}. Chant "${meta.beejMantra}" 108 times in the morning.`;
    }
    return `For ruling planet ${shortLordEn} blessings, ${cleanActionEn.replace(/\.$/, "")}. Chant "${meta.beejMantra}" 108 times in the morning.`;
  };
  const ordBhavaHi = (n) => formatHindiHouseOrdinal(n);
  const getPlanetDignityStateTagHi = (p) => {
    const status = getPlanetStatusTag(p.id, p.rashiNumber, p.isRetrograde, p.isCombust);
    return status ? `, ${status}` : "";
  };
  const planetSignHouseHi = (p) => `${p.rashiNameHi}${getPlanetDignityStateTagHi(p)}, ${ordBhavaHi(p.houseFromRashi)} भाव`;
  const formatSummaryPlanetHi = (labelHi, p, houseOverride) => {
    const status = getPlanetStatusTag(p.id, p.rashiNumber, p.isRetrograde, p.isCombust);
    const houseStr = `${ordBhavaHi(houseOverride ?? p.houseFromRashi)} भाव`;
    const combinedTag = status ? `${status} • ${houseStr}` : houseStr;
    return `${labelHi}: ${p.rashiNameHi} (${combinedTag})`;
  };
  const formatPlanetHouseEn = (p, houseOverride) => {
    const tags = getPlanetStatusTagsEn(p.id, p.rashiNumber, p.isRetrograde, p.isCombust);
    const hStr = formatEnglishHouseOrdinal(p.houseFromRashi);
    return tags.length > 0 ? `${p.rashiNameEn} (${tags.join("/")}, ${hStr})` : `${p.rashiNameEn} (${hStr})`;
  };
  const prevailingMoonSignHouseHi = parsedChandra.hasTransition && parsedChandra.endTimeText && moonSign2House && parsedChandra.sign2NameHi ? `${parsedChandra.endTimeText} तक ${parsedChandra.sign1NameHi} (${ordBhavaHi(moonSign1House)} भाव) और उसके बाद ${parsedChandra.sign2NameHi} (${ordBhavaHi(moonSign2House)} भाव)` : `${moonT.rashiNameHi}, ${ordBhavaHi(chandrabalHouse)} भाव`;
  const formatUniquePlanetClauseHi = (candidates, maxCount = 3, excludeIds = ["moon"]) => {
    const seen = new Set(excludeIds);
    const items = [];
    for (const c of candidates) {
      if (seen.has(c.id)) continue;
      seen.add(c.id);
      items.push(`${c.labelHi} (${planetSignHouseHi(c.transit)})`);
      if (items.length >= maxCount) break;
    }
    if (items.length === 0) return "";
    if (items.length === 1) return items[0];
    return `${items.slice(0, -1).join(", ")} तथा ${items[items.length - 1]}`;
  };
  const sixPlanetsTransitSummaryHi = [
    formatSummaryPlanetHi("सूर्य", sunT),
    formatSummaryPlanetHi("चंद्र", moonT, chandrabalHouse),
    formatSummaryPlanetHi("मंगल", marsT),
    formatSummaryPlanetHi("बुध", mercT),
    formatSummaryPlanetHi("गुरु", jupT),
    formatSummaryPlanetHi("शुक्र", venT),
    formatSummaryPlanetHi("शनि", satT),
    formatSummaryPlanetHi("राहु", rahuT),
    formatSummaryPlanetHi("केतु", ketuT)
  ].join(" • ");
  const houseYogas = detectHouseYogas(planetTransits);
  const {
    hasBudhadityaYoga,
    budhadityaHouse: detectedBudhadityaHouse,
    budhadityaCategory,
    budhadityaTagHi,
    budhadityaTagEn
  } = houseYogas;
  const budhadityaHouse = detectedBudhadityaHouse ?? sunT.houseFromRashi;
  const careerCandidatesHi = [
    { id: karmeshT.id, labelHi: `कर्मेश ${karmeshInfo.nameHi}`, transit: karmeshT },
    { id: "sun", labelHi: "सूर्य", transit: sunT },
    { id: "mars", labelHi: "मंगल", transit: marsT },
    { id: "saturn", labelHi: "शनि", transit: satT }
  ];
  const uniqueCareerPlanetsHi = (() => {
    if (budhadityaCategory === "career") {
      const headHi = karmeshT.id === "sun" ? `कर्मेश सूर्य-बुध के बुधादित्य योग (${budhadityaTagHi})` : karmeshT.id === "mercury" ? `सूर्य-बुध के बुधादित्य योग (कर्मेश बुध सहित, ${budhadityaTagHi})` : `सूर्य-बुध के बुधादित्य योग (${budhadityaTagHi})`;
      const restHi = formatUniquePlanetClauseHi(careerCandidatesHi, 2, ["moon", "sun", "mercury"]);
      if (!restHi) return headHi;
      return restHi.includes(" तथा ") ? `${headHi}, ${restHi}` : `${headHi} तथा ${restHi}`;
    }
    return formatUniquePlanetClauseHi(careerCandidatesHi, 3, ["moon"]);
  })();
  const sankrantiPlanetsSubjectHi = hasActiveSankranti ? (() => {
    const sHead = `सूर्य के ${sunT.rashiNameHi} (${ordBhavaHi(sunT.houseFromRashi)} भाव, ${activeSankrantiNameHi}) में प्रवेश${budhadityaCategory === "career" ? ` व सूर्य-बुध के बुधादित्य योग (${ordBhavaHi(budhadityaHouse)} भाव)` : ""}`;
    const sRest = formatUniquePlanetClauseHi(
      [
        { id: karmeshT.id, labelHi: `कर्मेश ${karmeshInfo.nameHi}`, transit: karmeshT },
        { id: "mars", labelHi: "मंगल", transit: marsT },
        { id: "saturn", labelHi: "शनि", transit: satT }
      ],
      2,
      budhadityaCategory === "career" ? ["sun", "mercury", "moon"] : ["sun", "moon"]
    );
    if (!sRest) return sHead;
    return sRest.includes(" तथा ") ? `${sHead}, ${sRest}` : `${sHead} तथा ${sRest}`;
  })() : uniqueCareerPlanetsHi;
  const wealthCandidatesHi = [
    { id: dhaneshT.id, labelHi: `धनेश ${dhaneshInfo.nameHi}`, transit: dhaneshT },
    { id: "jupiter", labelHi: "देवगुरु बृहस्पति", transit: jupT },
    { id: "venus", labelHi: "शुक्र", transit: venT },
    { id: "mercury", labelHi: "बुध", transit: mercT }
  ];
  const uniqueWealthPlanetsHi = (() => {
    if (budhadityaCategory === "wealth") {
      const headHi = dhaneshT.id === "sun" ? `धनेश सूर्य-बुध के बुधादित्य योग (${budhadityaTagHi})` : dhaneshT.id === "mercury" ? `सूर्य-बुध के बुधादित्य योग (धनेश बुध सहित, ${budhadityaTagHi})` : `सूर्य-बुध के बुधादित्य योग (${budhadityaTagHi})`;
      const restHi = formatUniquePlanetClauseHi(wealthCandidatesHi, 1, ["moon", "sun", "mercury"]);
      return restHi ? `${headHi} तथा ${restHi}` : headHi;
    }
    return formatUniquePlanetClauseHi(wealthCandidatesHi, 2, ["moon"]);
  })();
  const familyCandidatesHi = [
    { id: sukheshT.id, labelHi: `सुखेश ${sukheshInfo.nameHi}`, transit: sukheshT },
    { id: saptameshT.id, labelHi: `सप्तमेश ${saptameshInfo.nameHi}`, transit: saptameshT },
    { id: "jupiter", labelHi: "बृहस्पति", transit: jupT },
    { id: "venus", labelHi: "शुक्र", transit: venT }
  ];
  const uniqueFamilyPlanetsHi = (() => {
    if (budhadityaCategory === "family") {
      const headHi = sukheshT.id === "sun" ? `सुखेश सूर्य-बुध के बुधादित्य योग (${budhadityaTagHi})` : saptameshT.id === "sun" ? `सप्तमेश सूर्य-बुध के बुधादित्य योग (${budhadityaTagHi})` : sukheshT.id === "mercury" ? `सूर्य-बुध के बुधादित्य योग (सुखेश बुध सहित, ${budhadityaTagHi})` : saptameshT.id === "mercury" ? `सूर्य-बुध के बुधादित्य योग (सप्तमेश बुध सहित, ${budhadityaTagHi})` : `सूर्य-बुध के बुधादित्य योग (${budhadityaTagHi})`;
      const restHi = formatUniquePlanetClauseHi(familyCandidatesHi, 1, [
        "moon",
        dhaneshT.id,
        "sun",
        "mercury"
      ]);
      return restHi ? `${headHi} तथा ${restHi}` : headHi;
    }
    return formatUniquePlanetClauseHi(familyCandidatesHi, 2, ["moon", dhaneshT.id]);
  })();
  formatUniquePlanetClauseHi(
    [
      { id: panchameshT.id, labelHi: `पंचमेश ${panchameshInfo.nameHi}`, transit: panchameshT },
      { id: "mercury", labelHi: "बुध", transit: mercT },
      { id: "jupiter", labelHi: "बृहस्पति", transit: jupT }
    ],
    2,
    ["moon"]
  );
  const transitWealthClauseHi = `${uniqueWealthPlanetsHi} के गोचर से `;
  if (lang === "en") {
    const budhadityaEnNote = hasBudhadityaYoga ? `supported by the Sun-Mercury Budhaditya Yoga (${budhadityaTagEn})` : "";
    const moonLagneshHealthEn = (houseLabel) => lagneshInfo.planetId === "moon" ? `With your ruling planet Moon in ${moonT.rashiNameEn} (${houseLabel})` : `With Moon in ${moonT.rashiNameEn} (${houseLabel}) and ruling planet ${lagneshInfo.nameEn} in ${lagneshT.rashiNameEn} (${formatEnglishHouseOrdinal(lagneshT.houseFromRashi)} house)`;
    chandraGochar = formatMoonTransitionGocharPhrase(parsedChandra, rashiNum, "en");
    lagnaMentalText = `${voice.mentalIntroEn} Today is ${vaarProfile.vaarNameEn} (${vaarProfile.lordEn}), with Moon in ${moonT.rashiNameEn} (${formatEnglishHouseOrdinal(chandrabalHouse)} house)${lagneshInfo.planetId === "moon" ? "" : ` and your ruling planet ${lagneshInfo.nameEn} in ${lagneshT.rashiNameEn} (${formatEnglishHouseOrdinal(lagneshT.houseFromRashi)} house)`}, keeping clarity at ${overallScore}%.`;
    const enRahuMoonNote = isMoonRahuConjunct ? ` Rahu-Moon Conjunction (Grahan Yoga) in your ${formatEnglishHouseOrdinal(moonT.houseFromRashi)} house (${moonT.rashiNameEn}) advises grounded decision-making without emotional haste or mental confusion.` : isMoonKetuConjunct ? ` Ketu-Moon Conjunction in your ${formatEnglishHouseOrdinal(moonT.houseFromRashi)} house (${moonT.rashiNameEn}) favors quiet mindfulness and avoiding overthinking.` : "";
    const enKetuJupNote = isKetuJupiterConjunct ? ` Ketu-Jupiter Conjunction in your ${formatEnglishHouseOrdinal(ketuT.houseFromRashi)} house (${ketuT.rashiNameEn}) rewards methodical wisdom, research, and disciplined detachment over rigid expectations.` : isRahuJupiterConjunct ? ` Rahu-Jupiter Conjunction in your ${formatEnglishHouseOrdinal(rahuT.houseFromRashi)} house (${rahuT.rashiNameEn}) favors ethical planning rather than speculative shortcuts.` : "";
    transitImpactText = `Sidereal Planetary Transits (Lahiri Ayanamsa): Sun in ${formatPlanetHouseEn(sunT)}, Mars in ${formatPlanetHouseEn(marsT)}, Mercury in ${formatPlanetHouseEn(mercT)}, Jupiter in ${formatPlanetHouseEn(jupT)}, Venus in ${formatPlanetHouseEn(venT)}, Saturn in ${formatPlanetHouseEn(satT)}, Rahu in ${formatPlanetHouseEn(rahuT)}, and Ketu in ${formatPlanetHouseEn(ketuT)}.${enRahuMoonNote}${enKetuJupNote} Saturn Transit Note: ${sadeSatiStatusHi}.`;
    if (chandrabalHouse === 6) {
      careerText = `With Moon in ${moonT.rashiNameEn} (your 6th house of victory & service) and ${budhadityaCategory === "career" ? `Sun-Mercury Budhaditya Yoga (${budhadityaTagEn})` : `Sun in ${sunT.rashiNameEn} (${formatEnglishHouseOrdinal(sunT.houseFromRashi)})`}, disciplined effort triumphs over competition while avoiding workplace debates.${isKarmeshRestrained ? ` Since 10th lord ${karmeshInfo.nameEn} is ${isKarmesh12th ? "in the 12th house" : "debilitated"}, success comes through persistent effort, research, or distant contacts.` : ""}`;
      wealthText = `${budhadityaCategory === "wealth" ? `With Sun-Mercury Budhaditya Yoga (${budhadityaTagEn}) and Jupiter in ${jupT.rashiNameEn} (${formatEnglishHouseOrdinal(jupT.houseFromRashi)})` : `With Jupiter in ${jupT.rashiNameEn} (${formatEnglishHouseOrdinal(jupT.houseFromRashi)}) and Venus in ${venT.rashiNameEn} (${formatEnglishHouseOrdinal(venT.houseFromRashi)})`}, routine earnings remain steady; avoid new loans or credit risks today.`;
      familyText = `${budhadityaCategory === "family" ? `With Sun-Mercury Budhaditya Yoga (${budhadityaTagEn}) and 4th lord ${sukheshInfo.nameEn} in ${sukheshT.rashiNameEn} (${formatEnglishHouseOrdinal(sukheshT.houseFromRashi)})` : `With 4th lord ${sukheshInfo.nameEn} in ${sukheshT.rashiNameEn} (${formatEnglishHouseOrdinal(sukheshT.houseFromRashi)})`}, avoid unnecessary debates with relatives or coworkers; calm patience restores harmony.`;
      educationText = `${voice.educationThemeEn} With 5th lord ${panchameshInfo.nameEn} in ${panchameshT.rashiNameEn} (${formatEnglishHouseOrdinal(panchameshT.houseFromRashi)}), focus on competitive mock drills and disciplined practice.`;
      healthText = `${moonLagneshHealthEn("6th house")}, pay careful attention to digestion and prefer fresh warm home-cooked food. ${voice.healthTipEn}`;
    } else if (chandrabalHouse === 8) {
      careerText = `Even with ${budhadityaCategory === "career" ? `Sun-Mercury Budhaditya Yoga (${budhadityaTagEn})` : `Sun transiting ${sunT.rashiNameEn} (${formatEnglishHouseOrdinal(sunT.houseFromRashi)})`}, Moon in ${moonT.rashiNameEn} (your 8th house) advises avoiding new risks or sudden operational changes; stay patient amidst minor obstacles.`;
      wealthText = `${budhadityaCategory === "wealth" ? `With Sun-Mercury Budhaditya Yoga (${budhadityaTagEn}) and Jupiter in ${jupT.rashiNameEn} (${formatEnglishHouseOrdinal(jupT.houseFromRashi)})` : `With Jupiter in ${jupT.rashiNameEn} (${formatEnglishHouseOrdinal(jupT.houseFromRashi)}) and Venus in ${venT.rashiNameEn} (${formatEnglishHouseOrdinal(venT.houseFromRashi)})`}, avoid speculative trades or risky investments to safeguard your capital.`;
      familyText = `${budhadityaCategory === "family" ? `With Sun-Mercury Budhaditya Yoga (${budhadityaTagEn}) and 4th lord ${sukheshInfo.nameEn} in ${sukheshT.rashiNameEn} (${formatEnglishHouseOrdinal(sukheshT.houseFromRashi)})` : `With 4th lord ${sukheshInfo.nameEn} in ${sukheshT.rashiNameEn} (${formatEnglishHouseOrdinal(sukheshT.houseFromRashi)})`}, stay calm during unexpected conversations and prioritize mental peace at home.`;
      educationText = `${voice.educationThemeEn} With 5th lord ${panchameshInfo.nameEn} in ${panchameshT.rashiNameEn} (${formatEnglishHouseOrdinal(panchameshT.houseFromRashi)}), ideal for quiet research and solving tough problems independently.`;
      healthText = `${lagneshInfo.planetId === "moon" ? `With your ruling planet Moon in ${moonT.rashiNameEn} (8th house)` : `With Moon in ${moonT.rashiNameEn} (8th house)`}, prioritize deep rest, mental calm, and warm hydration to avoid fatigue or restlessness today. ${voice.healthTipEn}`;
    } else if (chandrabalHouse === 12) {
      careerText = `Even with ${budhadityaCategory === "career" ? `Sun-Mercury Budhaditya Yoga (${budhadityaTagEn})` : `Sun transiting ${sunT.rashiNameEn} (${formatEnglishHouseOrdinal(sunT.houseFromRashi)})`}, Moon in ${moonT.rashiNameEn} (your 12th house) advises double-checking travel and external paperwork while avoiding unnecessary running around.`;
      wealthText = `${budhadityaCategory === "wealth" ? `With Sun-Mercury Budhaditya Yoga (${budhadityaTagEn}) and 2nd lord ${dhaneshInfo.nameEn} in ${dhaneshT.rashiNameEn} (${formatEnglishHouseOrdinal(dhaneshT.houseFromRashi)})` : `With 2nd lord ${dhaneshInfo.nameEn} in ${dhaneshT.rashiNameEn} (${formatEnglishHouseOrdinal(dhaneshT.houseFromRashi)})`}, keep strict control over unnecessary expenses and impulse shopping today.`;
      familyText = `${budhadityaCategory === "family" ? `With Sun-Mercury Budhaditya Yoga (${budhadityaTagEn}) and 4th lord ${sukheshInfo.nameEn} in ${sukheshT.rashiNameEn} (${formatEnglishHouseOrdinal(sukheshT.houseFromRashi)})` : `With 4th lord ${sukheshInfo.nameEn} in ${sukheshT.rashiNameEn} (${formatEnglishHouseOrdinal(sukheshT.houseFromRashi)})`}, coordinate travel or household expenses transparently with family members.`;
      educationText = `${voice.educationThemeEn} With 5th lord ${panchameshInfo.nameEn} in ${panchameshT.rashiNameEn} (${formatEnglishHouseOrdinal(panchameshT.houseFromRashi)}), minimize distractions and study in focused, calm intervals.`;
      healthText = `${lagneshInfo.planetId === "moon" ? `With your ruling planet Moon in ${moonT.rashiNameEn} (12th house)` : `With Moon in ${moonT.rashiNameEn} (12th house)`}, prioritize adequate sleep and rest, stay cautious during travel, and protect your eyes from fatigue. ${voice.healthTipEn}`;
    } else if (chandrabalHouse === 4) {
      careerText = `With Moon in ${moonT.rashiNameEn} (your 4th house) alongside ${budhadityaCategory === "career" ? `Sun-Mercury Budhaditya Yoga (${budhadityaTagEn})` : `Sun in ${sunT.rashiNameEn} (${formatEnglishHouseOrdinal(sunT.houseFromRashi)})`}, work with steady patience and avoid hasty decisions at the workplace.`;
      wealthText = `${budhadityaCategory === "wealth" ? `With Sun-Mercury Budhaditya Yoga (${budhadityaTagEn}) and 2nd lord ${dhaneshInfo.nameEn} in ${dhaneshT.rashiNameEn} (${formatEnglishHouseOrdinal(dhaneshT.houseFromRashi)})` : `With 2nd lord ${dhaneshInfo.nameEn} in ${dhaneshT.rashiNameEn} (${formatEnglishHouseOrdinal(dhaneshT.houseFromRashi)})`}, balance domestic and maternal comfort expenses carefully while protecting long-term savings.`;
      familyText = `With Moon in ${moonT.rashiNameEn} (4th house)${budhadityaCategory === "family" ? `, Sun-Mercury Budhaditya Yoga (${budhadityaTagEn}),` : ""} and 4th lord ${sukheshInfo.nameEn} in ${sukheshT.rashiNameEn} (${formatEnglishHouseOrdinal(sukheshT.houseFromRashi)}), take special care of your mother's health and maintain calm domestic harmony.`;
      educationText = `${voice.educationThemeEn} ${vaarProfile.educationEn}`;
      healthText = `${moonLagneshHealthEn("4th house")}, keep your mind calm and protect chest comfort. ${voice.healthTipEn}`;
    } else {
      careerText = isKarmeshRestrained ? `With Moon in ${moonT.rashiNameEn} (${formatEnglishHouseOrdinal(chandrabalHouse)}) supporting your day, 10th lord ${karmeshInfo.nameEn} (${formatEnglishHouseOrdinal(karmeshT.houseFromRashi)}${isKarmeshDebilitated ? ", debilitated" : ""}) calls for steady, behind-the-scenes execution, research, or distant contacts rather than effortless ease; ${voice.careerThemeEn.charAt(0).toLowerCase() + voice.careerThemeEn.slice(1)}` : `With ${budhadityaCategory === "career" ? `Sun-Mercury Budhaditya Yoga (${budhadityaTagEn})` : `Sun in ${sunT.rashiNameEn} (${formatEnglishHouseOrdinal(sunT.houseFromRashi)})`}, Mars in ${marsT.rashiNameEn} (${formatEnglishHouseOrdinal(marsT.houseFromRashi)}), and Moon in ${moonT.rashiNameEn} (${formatEnglishHouseOrdinal(chandrabalHouse)}), ${voice.careerThemeEn.charAt(0).toLowerCase() + voice.careerThemeEn.slice(1)}`;
      wealthText = `${budhadityaCategory === "wealth" ? `With Sun-Mercury Budhaditya Yoga (${budhadityaTagEn}) alongside ` : "With "}Jupiter in ${jupT.rashiNameEn} (${formatEnglishHouseOrdinal(jupT.houseFromRashi)}), Venus in ${venT.rashiNameEn} (${formatEnglishHouseOrdinal(venT.houseFromRashi)}), and 2nd lord ${dhaneshInfo.nameEn} in ${dhaneshT.rashiNameEn} (${formatEnglishHouseOrdinal(dhaneshT.houseFromRashi)}), ${voice.wealthThemeEn.charAt(0).toLowerCase() + voice.wealthThemeEn.slice(1)}`;
      familyText = `${budhadityaCategory === "family" && budhadityaEnNote ? `With ${budhadityaEnNote}, ` : ""}${voice.familyThemeEn} ${vaarProfile.familyEn}`;
      educationText = `${voice.educationThemeEn} ${vaarProfile.educationEn}`;
      healthText = `${voice.healthTipEn} ${vaarProfile.healthEn}`;
    }
    wealthFamilySummary = `${wealthText} ${familyText}`;
    remedyText = getBhavaAndLordRemedyEn(chandrabalHouse, rashiMeta, voice.remedyActionEn);
    doToday1 = panchang.isWednesday ? `Begin priority work during morning Labh/Amrit Choghadiya or Vijay Muhurat (${panchang.vijayMuhurat}); Abhijit Muhurat is prohibited on Wednesdays.` : panchang.isAbhijitFullyProhibited ? "Abhijit Muhurat is eclipsed today; choose a Rahukaal-free Shubh Choghadiya window for priority work." : `Begin priority work during Abhijit Muhurat (${panchang.abhijitMuhurat}).`;
    doToday2 = `Wear ${rashiMeta.luckyColorsEn[0]} attire and maintain positive focus.`;
    dontToday1 = chandrabalHouse === 6 ? "Avoid arguments with opponents/colleagues, avoid new loans or debts, and eat light food." : chandrabalHouse === 8 ? "Drive slowly and carefully, avoid new risks or sudden decisions, and protect mental calm." : chandrabalHouse === 12 ? "Control unnecessary expenses, stay alert while traveling, and avoid late nights without proper sleep." : chandrabalHouse === 4 ? "Avoid domestic stress or harsh speech and do not neglect your mother's health." : `Avoid major financial risk during Rahukaal (${panchang.rahukaal}).`;
    const cleanDishaEn = panchang.dishaShool.replace(/\s*दिशा$/u, "").trim();
    dontToday2 = `Be mindful of ${cleanDishaEn} Disha Shool before starting travel.`;
  } else {
    chandraGochar = formatMoonTransitionGocharPhrase(parsedChandra, rashiNum, "hi");
    const cleanVoiceRemedyHi = voice.remedyActionHi.replace(/।\s*$/, "");
    const cleanDisha = panchang.dishaShool.replace(/\s*दिशा$/u, "").trim();
    const mergeUniqueDeityListHi = (...groups) => {
      const rawParts = groups.flatMap((g) => g.split(/\s+(?:एवं|तथा|व)\s+|,\s*/u)).map((s) => s.trim()).filter(Boolean);
      const canonicalKey = (d) => {
        if (/हनुमान|बजरंग|रामदूत/u.test(d)) return "hanuman";
        if (/शिव|महादेव|भोलेनाथ|शंकर/u.test(d)) return "shiva";
        if (/गणेश|सिद्धिविनायक|विघ्नहर्ता/u.test(d)) return "ganesha";
        if (/विष्णु|लक्ष्मीनारायण|हरि/u.test(d)) return "vishnu";
        if (/लक्ष्मी/u.test(d)) return "lakshmi";
        if (/दुर्गा|जगदम्बा/u.test(d)) return "durga";
        if (/सूर्य/u.test(d)) return "surya";
        if (/शनि/u.test(d)) return "shani";
        if (/मंगल/u.test(d)) return "mangal";
        if (/बुध/u.test(d)) return "budh";
        if (/बृहस्पति|गुरुदेव/u.test(d)) return "guru";
        if (/शुक्र/u.test(d)) return "shukra";
        if (/चन्द्र|चंद्र/u.test(d)) return "chandra";
        return d;
      };
      const seen = /* @__PURE__ */ new Set();
      const unique = [];
      for (const p of rawParts) {
        const k = canonicalKey(p);
        if (seen.has(k)) continue;
        seen.add(k);
        unique.push(p);
      }
      if (unique.length <= 1) return unique[0] || "";
      return `${unique.slice(0, -1).join(", ")} एवं ${unique[unique.length - 1]}`;
    };
    const mergedVaarAndIshtaDeityHi = mergeUniqueDeityListHi(
      vaarProfile.lordHi,
      rashiMeta.ishtaDevtaHi
    );
    const RASHI_ELEMENT_CLAUSES = {
      1: {
        // मेष (अग्नि तत्व - ऊर्जा, नेतृत्व, साहस, महत्वाकांक्षा)
        elementTagHi: "अग्नि तत्व प्रधान मेष",
        mentalMoonClauseHi: parsedChandra.hasTransition && parsedChandra.endTimeText && moonSign2House && parsedChandra.sign2NameHi ? `दिन के मुख्य प्रहर में चन्द्रमा ${parsedChandra.sign1NameHi} (${ordBhavaHi(moonSign1House)} भाव, ${parsedChandra.endTimeText}) में रहकर आपकी नेतृत्व-ऊर्जा को प्रबल रखेंगे और तत्पश्चात ${parsedChandra.sign2NameHi} (${ordBhavaHi(moonSign2House)} भाव) में प्रवेश करेंगे।` : `चन्द्रमा का ${moonT.rashiNameHi} (${ordBhavaHi(chandrabalHouse)} भाव) में संचरण आपके साहस, त्वरित पहल और महत्वाकांक्षा को नई धार प्रदान कर रहा है।`,
        mentalNakLordClauseHi: `${dailyNakQual.nameHi} नक्षत्र (स्वामी: ${dailyNakQual.lordHi}) की गतिशील तरंगों तथा राशि स्वामी ${lagneshInfo.nameHi} के ${lagneshT.rashiNameHi} (${ordBhavaHi(lagneshT.houseFromRashi)} भाव) में गोचर से आपकी आत्मिक ऊर्जा ${overallScore}% स्तर पर ${isTier4Caution ? "संयमित" : "ओजस्वी"} रहेगी।`,
        transitGuidanceHi: activeParvLabelHi ? `${activeParvLabelHi} एवं ${formattedTithiDisplay} के पुण्य संयोग में साहसिक संकल्प और धर्म-कार्य आपके नेतृत्व को विशेष यश दिलाएंगे।` : `${formattedTithiDisplay} तथा ${formattedYogaDisplay} के प्रभाव से आपके महत्वाकांक्षी कार्यों में तीव्र गति आएगी।`,
        familyHealthTailHi: "परिवार में आपका उत्साहवर्धक नेतृत्व सबको जोड़े रखेगा तथा प्रातः खुली हवा में तेज भ्रमण से शारीरिक ऊर्जा उत्तम रहेगी।",
        eduTailHi: `अग्नि तत्व की स्फूर्ति और एकाग्र अभ्यास से तकनीकी व प्रतियोगी विषयों में आप अग्रणी रहेंगे।`,
        healthTailHi: `राशि स्वामी ${lagneshInfo.nameHi} (${planetSignHouseHi(lagneshT)}) की स्थिति में आंखों व नींद के संतुलन हेतु रात्रि में हल्का भोजन कर समय पर विश्राम लें।`,
        posterHealthSentenceHi: `स्वास्थ्य: सिरदर्द व उष्णता से बचाव हेतु प्रातः भ्रमण करें तथा पर्याप्त शुद्ध जल ग्रहण करें।`,
        doMuhuratSentenceHi: panchang.isWednesday ? `${voice.doTaskHi} अपने साहसिक लक्ष्यों का शुभारंभ विजय मुहूर्त (${panchang.vijayMuhurat}) में करें।` : panchang.isAbhijitFullyProhibited ? `${voice.doTaskHi} आज अभिजित मुहूर्त बाधित होने से नेतृत्व व प्रमुख कार्यों हेतु राहुकाल-मुक्त शुभ चौघड़िया का चयन करें।` : `${voice.doTaskHi} नेतृत्व व प्रमुख कार्यों की शुरुआत अभिजित मुहूर्त (${panchang.abhijitMuhurat}) में करना श्रेष्ठ फलदायी रहेगा।`,
        doDeityColorSentenceHi: `आज ${mergedVaarAndIshtaDeityHi} का तेजस्वी स्मरण करें तथा ऊर्जा वृद्धि हेतु ${rashiMeta.luckyColorsHi[ist.day % rashiMeta.luckyColorsHi.length]} वस्त्र धारण करें।`,
        dontRahuDishaSentenceHi: `राहुकाल (${panchang.rahukaal}) के दौरान उग्र निर्णय न लें तथा ${cleanDisha} दिशा की यात्रा से परहेज रखें।`
      },
      2: {
        // वृषभ (पृथ्वी तत्व - व्यावहारिकता, स्थायी लाभ, धैर्य, कार्यकुशलता, वित्तीय अनुशासन)
        elementTagHi: "पृथ्वी तत्व प्रधान वृषभ",
        mentalMoonClauseHi: parsedChandra.hasTransition && parsedChandra.endTimeText && moonSign2House && parsedChandra.sign2NameHi ? `सूर्योदय से ${parsedChandra.endTimeText} तक चन्द्रमा ${parsedChandra.sign1NameHi} (${ordBhavaHi(moonSign1House)} भाव) में रहकर व्यावहारिक धैर्य देंगे और उसके बाद ${parsedChandra.sign2NameHi} (${ordBhavaHi(moonSign2House)} भाव) में संचरण करेंगे।` : `चन्द्रमा का ${moonT.rashiNameHi} (${ordBhavaHi(chandrabalHouse)} भाव) में गोचर आपकी व्यावहारिक कार्यकुशलता और स्थायी सोच को सुदृढ़ बना रहा है।`,
        mentalNakLordClauseHi: `${dailyNakQual.nameHi} नक्षत्र एवं राशि स्वामी ${lagneshInfo.nameHi} के ${lagneshT.rashiNameHi} (${ordBhavaHi(lagneshT.houseFromRashi)} भाव) में स्थित होने से आपका व्यावहारिक मनोबल ${overallScore}% स्तर पर ${isTier4Caution ? "सतर्क" : "स्थिर व संतुलित"} रहेगा।`,
        transitGuidanceHi: activeParvLabelHi ? `${activeParvLabelHi} के पावन दिन गौ-सेवा, लक्ष्मी-स्मरण और वित्तीय अनुशासन से आपके घर-व्यापार में स्थायी समृद्धि जुड़ेगी।` : `${formattedTithiDisplay} और ${formattedNakDisplay} के संयोग में धैर्यपूर्वक किए गए आर्थिक प्रयास स्थायी फल देंगे।`,
        familyHealthTailHi: "घरेलू व्यवस्था में आपका शांत धैर्य सुख-शांति बढ़ाएगा तथा सुपाच्य गुनगुने आहार से कंठ व स्वास्थ्य उत्तम रहेगा।",
        eduTailHi: `पृथ्वी तत्व की एकाग्रता और व्यवस्थित समय-सारणी से वाणिज्य व प्रबंधन के विषयों में पक्की पकड़ बनेगी।`,
        healthTailHi: `राशि स्वामी ${lagneshInfo.nameHi} (${planetSignHouseHi(lagneshT)}) की स्थिति के अनुरूप समय पर सुपाच्य सात्त्विक भोजन और गर्दन-कंधों की हल्की स्ट्रेचिंग से स्फूर्ति बनी रहेगी।`,
        posterHealthSentenceHi: `स्वास्थ्य: कंठ व कफ की सुरक्षा हेतु शीतल पेय छोड़ें और गुनगुने जल व सात्त्विक आहार का सेवन करें।`,
        doMuhuratSentenceHi: panchang.isWednesday ? `${voice.doTaskHi} स्थायी वित्तीय कार्य विजय मुहूर्त (${panchang.vijayMuhurat}) में संपादित करें।` : panchang.isAbhijitFullyProhibited ? `${voice.doTaskHi} आज अभिजित मुहूर्त वर्जित होने से स्थायी लाभ व महत्वपूर्ण अनुबंधों हेतु राहुकाल-मुक्त शुभ चौघड़िया का चयन करें।` : `${voice.doTaskHi} स्थायी लाभ व महत्वपूर्ण अनुबंध अभिजित मुहूर्त (${panchang.abhijitMuhurat}) में संपन्न करें।`,
        doDeityColorSentenceHi: `वृषभ जातक आज ${mergedVaarAndIshtaDeityHi} की आराधना करें एवं सौभाग्य हेतु ${rashiMeta.luckyColorsHi[ist.day % rashiMeta.luckyColorsHi.length]} रंग अपनाएं।`,
        dontRahuDishaSentenceHi: `राहुकाल (${panchang.rahukaal}) में बड़ा पूंजी निवेश टालें एवं ${cleanDisha} दिशा में यात्रा करते समय सावधानी बरतें।`
      },
      3: {
        // मिथुन (वायु तत्व - संवाद, नई योजनाएं, सामाजिक संपर्क, बौद्धिक निर्णय, संतुलन)
        elementTagHi: "वायु तत्व प्रधान मिथुन",
        mentalMoonClauseHi: parsedChandra.hasTransition && parsedChandra.endTimeText && moonSign2House && parsedChandra.sign2NameHi ? `प्रातः से ${parsedChandra.endTimeText} पर्यन्त चन्द्रमा ${parsedChandra.sign1NameHi} (${ordBhavaHi(moonSign1House)} भाव) में और तत्पश्चात ${parsedChandra.sign2NameHi} (${ordBhavaHi(moonSign2House)} भाव) में गोचर करते हुए आपके बौद्धिक निर्णयों को प्रभावित करेंगे।` : `चन्द्रमा का ${moonT.rashiNameHi} (${ordBhavaHi(chandrabalHouse)} भाव) में संचरण आपके संवाद-कौशल, नई योजनाओं और सामाजिक संपर्कों को सक्रिय कर रहा है।`,
        mentalNakLordClauseHi: `${dailyNakQual.nameHi} नक्षत्र की ऊर्जा तथा राशि स्वामी ${lagneshInfo.nameHi} के ${lagneshT.rashiNameHi} (${ordBhavaHi(lagneshT.houseFromRashi)} भाव) में गोचर से आपकी बौद्धिक स्पष्टता ${overallScore}% स्तर पर ${isTier4Caution ? "विवेकपूर्ण व संयमित" : "प्रखर"} रहेगी।`,
        transitGuidanceHi: activeParvLabelHi ? `${activeParvLabelHi} के शुभ संयोग में सात्त्विक संवाद, श्री गणेश-गोविन्द स्मरण और संतुलित विचार आपके कार्यों की विघ्न-बाधाएं दूर करेंगे।` : `${formattedTithiDisplay} एवं ${formattedYogaDisplay} में तार्किक विश्लेषण व सामाजिक समन्वय से नए मार्ग खुलेंगे।`,
        familyHealthTailHi: "परिजनों व मित्रों के साथ आपका सौम्य संवाद घर में उल्लास रखेगा तथा अनुलोम-विलोम प्राणायाम से स्नायु तंत्र स्वस्थ रहेगा।",
        eduTailHi: `वायु तत्व की तीक्ष्ण बुद्धि और तार्किक संवाद-क्षमता से गूढ़ पाठ्यक्रम व कोडिंग-गणित के प्रश्न सहज हल होंगे।`,
        healthTailHi: `राशि स्वामी ${lagneshInfo.nameHi} (${planetSignHouseHi(lagneshT)}) की स्थिति में ताजी हवा, पर्याप्त जल-सेवन और समय पर निद्रा से दिनभर स्फूर्ति रहेगी।`,
        posterHealthSentenceHi: `स्वास्थ्य: मानसिक व स्नायु विश्राम हेतु स्क्रीन-टाइम घटाएं और १० मिनट अनुलोम-विलोम प्राणायाम करें।`,
        doMuhuratSentenceHi: panchang.isWednesday ? `${voice.doTaskHi} अपनी नई योजनाओं व संवाद-बैठकों के लिए विजय मुहूर्त (${panchang.vijayMuhurat}) चुनें।` : panchang.isAbhijitFullyProhibited ? `${voice.doTaskHi} आज अभिजित मुहूर्त बाधित होने से बौद्धिक निर्णय एवं महत्वपूर्ण संवाद हेतु राहुकाल-मुक्त शुभ चौघड़िया का चयन करें।` : `${voice.doTaskHi} बौद्धिक निर्णय एवं महत्वपूर्ण संवाद अभिजित मुहूर्त (${panchang.abhijitMuhurat}) में करना शुभ रहेगा।`,
        doDeityColorSentenceHi: `मिथुन जातक आज ${mergedVaarAndIshtaDeityHi} का वंदन करें तथा शुभता के लिए ${rashiMeta.luckyColorsHi[ist.day % rashiMeta.luckyColorsHi.length]} रंग का चयन करें।`,
        dontRahuDishaSentenceHi: `राहुकाल (${panchang.rahukaal}) के समय किसी नए समझौते पर हस्ताक्षर न करें और ${cleanDisha} दिशा के प्रवास से बचें।`
      },
      4: {
        // कर्क (जल तत्व - अंतर्दृष्टि, पारिवारिक संवेदना, रचनात्मकता, शोध, आध्यात्मिक शांति)
        elementTagHi: "जल तत्व प्रधान कर्क",
        mentalMoonClauseHi: isAfternoonEveningInauspiciousMoon && parsedChandra.endTimeText && parsedChandra.sign2NameHi ? `प्रातः से ${parsedChandra.endTimeText} तक चन्द्रमा ${parsedChandra.sign1NameHi} (${ordBhavaHi(moonSign1House)} भाव) में रहकर आत्मीय संवेदना व रचनात्मक उत्साह देंगे, परंतु ${cleanTransitionClockHi} के बाद ${eveningCautionBhavaWordHi} चंद्रमा (${parsedChandra.sign2NameHi}) प्रारंभ होने से सायंकाल में मानसिक शांति बनाए रखने में सावधानी रखें।` : parsedChandra.hasTransition && parsedChandra.endTimeText && moonSign2House && parsedChandra.sign2NameHi ? `दिन में ${parsedChandra.endTimeText} तक चन्द्रमा ${parsedChandra.sign1NameHi} (${ordBhavaHi(moonSign1House)} भाव) में और फिर ${parsedChandra.sign2NameHi} (${ordBhavaHi(moonSign2House)} भाव) में संचरण कर आपकी अंतर्दृष्टि को गहरा बनाएंगे।` : `राशि स्वामी चन्द्रमा का ${moonT.rashiNameHi} (${ordBhavaHi(chandrabalHouse)} भाव) में प्रवाह आपकी पारिवारिक संवेदना और आध्यात्मिक शांति को बल दे रहा है।`,
        mentalNakLordClauseHi: `${dailyNakQual.nameHi} नक्षत्र के स्पंदन और राशि स्वामी चन्द्रमा की स्थिति से आपकी अंतर्ज्ञान-क्षमता ${overallScore}% स्तर पर ${isTier4Caution ? "शांत व संयमित" : "सृजनशील"} बनी रहेगी।`,
        transitGuidanceHi: activeParvLabelHi ? `${activeParvLabelHi} के पावन अवसर पर मातृ-तुल्य गौ-पूजन एवं शिव-गोविन्द स्मरण से आपके अंतःकरण में दिव्य शांति और पारिवारिक कल्याण बढ़ेगा।` : `${formattedTithiDisplay} के चंद्र-प्रभाव में भावनात्मक संतुलन और शांत शोध से उत्तम फल प्राप्त होंगे।`,
        familyHealthTailHi: "माता के आशीर्वाद और आपकी पारिवारिक संवेदना से गृहस्थ जीवन में आत्मीयता रहेगी तथा ताजे गर्म भोजन से आरोग्य बना रहेगा।",
        eduTailHi: `जल तत्व की गहरी अंतर्दृष्टि और शांत स्वाध्याय से चिकित्सा, साहित्य व मानवीय विषयों में श्रेष्ठ समझ विकसित होगी।`,
        healthTailHi: `गुनगुने तुलसी-अदरक जल, गहरी श्वास-क्रिया और समय पर निद्रा से मानसिक प्रसन्नता व शारीरिक ऊर्जा संतुलित रहेगी।`,
        posterHealthSentenceHi: `स्वास्थ्य: सर्दी-कफ और पाचन की सुगमता हेतु केवल ताजा गर्म घर का भोजन एवं तुलसी-अदरक जल लें।`,
        doMuhuratSentenceHi: panchang.isWednesday ? `${voice.doTaskHi} रचनात्मक व पारिवारिक कार्य विजय मुहूर्त (${panchang.vijayMuhurat}) में संपन्न करें।` : panchang.isAbhijitFullyProhibited ? `${voice.doTaskHi} आज अभिजित मुहूर्त बाधित होने से शुभ पारिवारिक व व्यावसायिक संकल्पों हेतु राहुकाल-मुक्त शुभ चौघड़िया का चयन करें।` : `${voice.doTaskHi} शुभ पारिवारिक व व्यावसायिक संकल्प अभिजित मुहूर्त (${panchang.abhijitMuhurat}) में पूर्ण करें।`,
        doDeityColorSentenceHi: `कर्क राशि वाले आज ${mergedVaarAndIshtaDeityHi} का अभिषेक-स्मरण करें एवं ${rashiMeta.luckyColorsHi[ist.day % rashiMeta.luckyColorsHi.length]} रंग को प्राथमिकता दें।`,
        dontRahuDishaSentenceHi: `राहुकाल (${panchang.rahukaal}) में भावुक होकर कोई आर्थिक निर्णय न लें तथा ${cleanDisha} दिशा की यात्रा टालें।`
      },
      5: {
        // सिंह (अग्नि तत्व - ऊर्जा, नेतृत्व, साहस, महत्वाकांक्षा)
        elementTagHi: "अग्नि तत्व प्रधान सिंह",
        mentalMoonClauseHi: parsedChandra.hasTransition && parsedChandra.endTimeText && moonSign2House && parsedChandra.sign2NameHi ? `आज ${parsedChandra.endTimeText} तक चन्द्रमा ${parsedChandra.sign1NameHi} (${ordBhavaHi(moonSign1House)} भाव) में रहकर आपके नेतृत्व-तेज व कार्य-विजय को बढ़ाएंगे और तत्पश्चात ${parsedChandra.sign2NameHi} (${ordBhavaHi(moonSign2House)} भाव) में गोचर करेंगे।` : `चन्द्रमा का ${moonT.rashiNameHi} (${ordBhavaHi(chandrabalHouse)} भाव) में संचरण आपके आत्मगौरव, प्रशासनिक साहस और उच्च महत्वाकांक्षा को प्रदीप्त कर रहा है।`,
        mentalNakLordClauseHi: `राशि स्वामी ${lagneshInfo.nameHi} के ${lagneshT.rashiNameHi} (${ordBhavaHi(lagneshT.houseFromRashi)} भाव) में तेजस्वी गोचर तथा ${dailyNakQual.nameHi} नक्षत्र के संयोग से आपका आत्मविश्वास ${overallScore}% स्तर पर ${isTier4Caution ? "धैर्यशील" : "प्रभावशाली"} रहेगा।`,
        transitGuidanceHi: activeParvLabelHi ? `${activeParvLabelHi} एवं ${activeSankrantiNameHi || formattedTithiDisplay} के विशेष पुण्यकाल में सूर्य-नारायण व गोविन्द आराधना से आपके मान-सम्मान और नेतृत्व में वृद्धि होगी।` : `${formattedTithiDisplay} तथा ${formattedYogaDisplay} के प्रभाव से आपके प्रशासनिक व नेतृत्व संबंधी संकल्प सिद्ध होंगे।`,
        familyHealthTailHi: "वरिष्ठजनों के सम्मान और आपके उदार नेतृत्व से घर में गौरवपूर्ण माहौल रहेगा तथा सूर्य-नमस्कार से रीढ़ व नेत्र स्वस्थ रहेंगे।",
        eduTailHi: `अग्नि तत्व के आत्मबल और उच्च महत्वाकांक्षा से प्रशासनिक सेवा, विधि व प्रबंधन के अध्ययन में विशेष प्रखरता रहेगी।`,
        healthTailHi: `राशि स्वामी ${lagneshInfo.nameHi} (${planetSignHouseHi(lagneshT)}) के अनुरूप अधिक नमक व तले पदार्थों से दूर रहकर पर्याप्त जल व विश्राम लें।`,
        posterHealthSentenceHi: `स्वास्थ्य: नेत्र व पीठ की स्फूर्ति बनाए रखने हेतु प्रातः सूर्य नमस्कार और हल्का व्यायाम अवश्य करें।`,
        doMuhuratSentenceHi: panchang.isWednesday ? `${voice.doTaskHi} उच्च प्रबंधन व नेतृत्व कार्य विजय मुहूर्त (${panchang.vijayMuhurat}) में आगे बढ़ाएं।` : panchang.isAbhijitFullyProhibited ? `${voice.doTaskHi} आज अभिजित मुहूर्त बाधित होने से राजकीय, प्रशासनिक व प्रमुख कार्यों हेतु राहुकाल-मुक्त शुभ चौघड़िया का चयन करें।` : `${voice.doTaskHi} राजकीय, प्रशासनिक व प्रमुख कार्य अभिजित मुहूर्त (${panchang.abhijitMuhurat}) में प्रारंभ करें।`,
        doDeityColorSentenceHi: `सिंह जातक आज ${mergedVaarAndIshtaDeityHi} को प्रणाम कर ${rashiMeta.luckyColorsHi[ist.day % rashiMeta.luckyColorsHi.length]} रंग के वस्त्रों का उपयोग करें।`,
        dontRahuDishaSentenceHi: `राहुकाल (${panchang.rahukaal}) की अवधि में अहंकार या आवेशपूर्ण लेन-देन से बचें और ${cleanDisha} दिशा में प्रवास न करें।`
      },
      6: {
        // कन्या (पृथ्वी तत्व - व्यावहारिकता, स्थायी लाभ, धैर्य, कार्यकुशलता, वित्तीय अनुशासन)
        elementTagHi: "पृथ्वी तत्व प्रधान कन्या",
        mentalMoonClauseHi: parsedChandra.hasTransition && parsedChandra.endTimeText && moonSign2House && parsedChandra.sign2NameHi ? `दिन में ${parsedChandra.endTimeText} तक चन्द्रमा ${parsedChandra.sign1NameHi} (${ordBhavaHi(moonSign1House)} भाव) में रहकर आपकी कार्यकुशलता व विश्लेषण-शक्ति को निखारेंगे और फिर ${parsedChandra.sign2NameHi} (${ordBhavaHi(moonSign2House)} भाव) में प्रवेश करेंगे।` : `चन्द्रमा का ${moonT.rashiNameHi} (${ordBhavaHi(chandrabalHouse)} भाव) में गोचर आपकी व्यावहारिक सूझबूझ, धैर्य और वित्तीय अनुशासन को बल दे रहा है।`,
        mentalNakLordClauseHi: `राशि स्वामी ${lagneshInfo.nameHi} के ${lagneshT.rashiNameHi} (${ordBhavaHi(lagneshT.houseFromRashi)} भाव) में संचरण तथा ${dailyNakQual.nameHi} नक्षत्र के प्रभाव से आपकी व्यावहारिक दक्षता ${overallScore}% स्तर पर ${isTier4Caution ? "संयमित" : "सुव्यवस्थित"} रहेगी।`,
        transitGuidanceHi: activeParvLabelHi ? `${activeParvLabelHi} के पावन संयोग में गौ-ग्रास अर्पण, व्यवस्थित कर्म और सात्त्विक अनुशासन से आपके कार्यों में स्थायी बरकत आएगी।` : `${formattedTithiDisplay} और ${formattedNakDisplay} के प्रभाव में सूक्ष्म योजना व वित्तीय अनुशासन से स्थायी लाभ मिलेगा।`,
        familyHealthTailHi: "पारिवारिक दायित्वों के कुशल प्रबंधन से घर में सौहार्द रहेगा तथा हरी सब्जियों व फाइबर-युक्त सात्त्विक आहार से पाचन उत्तम रहेगा।",
        eduTailHi: `पृथ्वी तत्व की सूक्ष्म कार्यकुशलता और नियमित रिवीजन से लेखा, विज्ञान व विश्लेषणात्मक परीक्षाओं में श्रेष्ठ अंक मिलेंगे।`,
        healthTailHi: `राशि स्वामी ${lagneshInfo.nameHi} (${planetSignHouseHi(lagneshT)}) की स्थिति में समयबद्ध दिनचर्या, प्रातः भ्रमण और मानसिक तनाव से दूरी रखने से स्फूर्ति बनी रहेगी।`,
        posterHealthSentenceHi: `स्वास्थ्य: पाचन तंत्र को सुचारु रखने हेतु हरी सब्जियां, छाछ और नियमबद्ध सात्त्विक भोजन ग्रहण करें।`,
        doMuhuratSentenceHi: panchang.isWednesday ? `${voice.doTaskHi} लेखा, ऑडिट व व्यावसायिक कार्य विजय मुहूर्त (${panchang.vijayMuhurat}) में पूर्ण करें।` : panchang.isAbhijitFullyProhibited ? `${voice.doTaskHi} आज अभिजित मुहूर्त बाधित होने से महत्वपूर्ण दस्तावेजी व वित्तीय कार्यों हेतु राहुकाल-मुक्त शुभ चौघड़िया का चयन करें।` : `${voice.doTaskHi} महत्वपूर्ण दस्तावेजी व वित्तीय कार्य अभिजित मुहूर्त (${panchang.abhijitMuhurat}) में संपादित करें।`,
        doDeityColorSentenceHi: `कन्या राशि के जातक आज ${mergedVaarAndIshtaDeityHi} की उपासना करें तथा ${rashiMeta.luckyColorsHi[ist.day % rashiMeta.luckyColorsHi.length]} रंग का प्रयोग करें।`,
        dontRahuDishaSentenceHi: `राहुकाल (${panchang.rahukaal}) में बिना जांचे वित्तीय अनुबंध न करें तथा ${cleanDisha} दिशा की यात्रा में सतर्कता रखें।`
      },
      7: {
        // तुला (वायु तत्व - संवाद, नई योजनाएं, सामाजिक संपर्क, बौद्धिक निर्णय, संतुलन)
        elementTagHi: "वायु तत्व प्रधान तुला",
        mentalMoonClauseHi: parsedChandra.hasTransition && parsedChandra.endTimeText && moonSign2House && parsedChandra.sign2NameHi ? `सूर्योदय से ${parsedChandra.endTimeText} तक चन्द्रमा ${parsedChandra.sign1NameHi} (${ordBhavaHi(moonSign1House)} भाव) में और उसके उपरांत ${parsedChandra.sign2NameHi} (${ordBhavaHi(moonSign2House)} भाव) में संचरण करते हुए आपके संवाद व मानसिक संतुलन को प्रभावित करेंगे।` : `चन्द्रमा का ${moonT.rashiNameHi} (${ordBhavaHi(chandrabalHouse)} भाव) में गोचर आपके सामाजिक संपर्क, बौद्धिक संतुलन और कूटनीतिक निर्णय-क्षमता को दिशा दे रहा है।`,
        mentalNakLordClauseHi: `राशि स्वामी ${lagneshInfo.nameHi} के ${lagneshT.rashiNameHi} (${ordBhavaHi(lagneshT.houseFromRashi)} भाव) में ${PLANET_OWN_SIGNS[lagneshT.id]?.includes(lagneshT.rashiNumber) ? "स्वग्रही गोचर" : PLANET_EXALTED_SIGN[lagneshT.id] === lagneshT.rashiNumber ? "उच्चस्थ गोचर" : "संचरण"} एवं ${dailyNakQual.nameHi} नक्षत्र के प्रभाव से आपका वैचारिक संतुलन ${overallScore}% स्तर पर ${isTier4Caution ? "धैर्यपूर्ण व संयमित" : "सुदृढ़"} रहेगा।`,
        transitGuidanceHi: activeParvLabelHi ? `${activeParvLabelHi} के मंगल पर्व पर लक्ष्मी-गोविन्द आराधना और संतुलित व्यवहार से आपके पारिवारिक व सामाजिक संबंधों में विशेष माधुर्य आएगा।` : `${formattedTithiDisplay} एवं ${formattedYogaDisplay} के संयोग में नई साझेदारी योजनाओं और सौम्य संवाद से सफलता मिलेगी।`,
        familyHealthTailHi: "दांपत्य व पारिवारिक संवाद में आपकी संतुलित समझ से घर में शांति रहेगी तथा पर्याप्त शुद्ध जल-सेवन से कमर व स्वास्थ्य अनुकूल रहेगा।",
        eduTailHi: `वायु तत्व के बौद्धिक संतुलन और सामूहिक संवाद से विधि, डिजाइन व प्रबंधन के अध्ययन में उत्तम परिणाम मिलेंगे।`,
        healthTailHi: `राशि स्वामी ${lagneshInfo.nameHi} (${planetSignHouseHi(lagneshT)}) की स्थिति के अनुरूप हल्की स्ट्रेचिंग, सुपाच्य भोजन और कार्य-विश्राम का संतुलन बनाए रखें।`,
        posterHealthSentenceHi: `स्वास्थ्य: कमर के निचले भाग व जल-संतुलन की रक्षा हेतु दिनभर पर्याप्त शुद्ध जल पिएं और हल्की स्ट्रेचिंग करें।`,
        doMuhuratSentenceHi: panchang.isWednesday ? `${voice.doTaskHi} साझेदारी संवाद व नई योजनाएं विजय मुहूर्त (${panchang.vijayMuhurat}) में आगे बढ़ाएं।` : panchang.isAbhijitFullyProhibited ? `${voice.doTaskHi} आज अभिजित मुहूर्त बाधित होने से सामाजिक समझौतों व महत्वपूर्ण बैठकों हेतु राहुकाल-मुक्त शुभ चौघड़िया का चयन करें।` : `${voice.doTaskHi} सामाजिक समझौते व महत्वपूर्ण बैठकें अभिजित मुहूर्त (${panchang.abhijitMuhurat}) में संपन्न करें।`,
        doDeityColorSentenceHi: `तुला जातक आज ${mergedVaarAndIshtaDeityHi} का श्रद्धापूर्वक ध्यान करें और ${rashiMeta.luckyColorsHi[ist.day % rashiMeta.luckyColorsHi.length]} रंग धारण करें।`,
        dontRahuDishaSentenceHi: `राहुकाल (${panchang.rahukaal}) के समय साझेदारी में कोई नया वित्तीय जोखिम न उठाएं तथा ${cleanDisha} दिशा की यात्रा से बचें।`
      },
      8: {
        // वृश्चिक (जल तत्व - अंतर्दृष्टि, पारिवारिक संवेदना, रचनात्मकता, शोध, आध्यात्मिक शांति)
        elementTagHi: "जल तत्व प्रधान वृश्चिक",
        mentalMoonClauseHi: isAfternoonEveningInauspiciousMoon && parsedChandra.endTimeText && parsedChandra.sign2NameHi ? `दिन के मुख्य भाग में चन्द्रमा ${parsedChandra.sign1NameHi} (${ordBhavaHi(moonSign1House)} भाव, ${parsedChandra.endTimeText}) में रहकर आपकी अंतर्दृष्टि व संकल्प-शक्ति को बल देंगे, किंतु ${cleanTransitionClockHi} के बाद ${eveningCautionBhavaWordHi} चंद्रमा (${parsedChandra.sign2NameHi}) प्रारंभ होने से सायंकाल में घरेलू सहजता व मानसिक शांति बनाए रखने में सावधानी रखें।` : parsedChandra.hasTransition && parsedChandra.endTimeText && moonSign2House && parsedChandra.sign2NameHi ? `प्रातः से ${parsedChandra.endTimeText} तक चन्द्रमा ${parsedChandra.sign1NameHi} (${ordBhavaHi(moonSign1House)} भाव) में तथा उसके पश्चात ${parsedChandra.sign2NameHi} (${ordBhavaHi(moonSign2House)} भाव) में गोचर कर आपकी शोध-दृष्टि को प्रखर रखेंगे।` : `चन्द्रमा का ${moonT.rashiNameHi} (${ordBhavaHi(chandrabalHouse)} भाव) में संचरण आपकी गहरी अंतर्दृष्टि, शोध-वृत्ति और आंतरिक संकल्प को सुदृढ़ कर रहा है।`,
        mentalNakLordClauseHi: `राशि स्वामी ${lagneshInfo.nameHi} के ${lagneshT.rashiNameHi} (${ordBhavaHi(lagneshT.houseFromRashi)} भाव) में गोचर एवं ${dailyNakQual.nameHi} नक्षत्र की ऊर्जा से आपकी आत्मिक एकाग्रता ${overallScore}% स्तर पर ${isTier4Caution ? "सतर्क" : "गंभीर व सधी हुई"} रहेगी।`,
        transitGuidanceHi: activeParvLabelHi ? `${activeParvLabelHi} एवं ${activeSankrantiNameHi || formattedTithiDisplay} के विशेष योग में शांत साधना, हनुमान-गोविन्द स्मरण और शोधपूर्ण कार्यनीति से गूढ़ लक्ष्य सिद्ध होंगे।` : `${formattedTithiDisplay} तथा ${formattedNakDisplay} के संयोग में गहन अंतर्दृष्टि व गोपनीय रणनीति से कार्यों में सफलता मिलेगी।`,
        familyHealthTailHi: "परिजनों के प्रति आपकी गहरी संवेदना व खुला संवाद रिश्तों में विश्वास बढ़ाएगा तथा प्रातः प्राणायाम से रक्त-ऊर्जा संतुलित रहेगी।",
        eduTailHi: `जल तत्व की गहन शोध-क्षमता और एकाग्र साधना से मेडिकल, विज्ञान व गूढ़ विषयों की जटिल गुत्थियां सुलझेंगी।`,
        healthTailHi: `राशि स्वामी ${lagneshInfo.nameHi} (${planetSignHouseHi(lagneshT)}) की स्थिति में पर्याप्त शीतल जल पिएं और समय पर आराम कर शारीरिक व मानसिक थकान दूर रखें।`,
        posterHealthSentenceHi: `स्वास्थ्य: उष्णता व रक्तचाप संतुलित रखने हेतु तीखे-मसालेदार भोजन से बचें तथा प्रातः प्राणायाम करें।`,
        doMuhuratSentenceHi: panchang.isWednesday ? `${voice.doTaskHi} गहन शोध व महत्वपूर्ण कार्य विजय मुहूर्त (${panchang.vijayMuhurat}) में पूर्ण करें।` : panchang.isAbhijitFullyProhibited ? `${voice.doTaskHi} आज अभिजित मुहूर्त बाधित होने से गूढ़ व प्राथमिक व्यावसायिक कार्यों हेतु राहुकाल-मुक्त शुभ चौघड़िया का चयन करें।` : `${voice.doTaskHi} गूढ़ व प्राथमिक व्यावसायिक कार्य अभिजित मुहूर्त (${panchang.abhijitMuhurat}) में संपादित करें।`,
        doDeityColorSentenceHi: `वृश्चिक राशि वाले आज ${mergedVaarAndIshtaDeityHi} का स्मरण करें एवं शुभ ऊर्जा हेतु ${rashiMeta.luckyColorsHi[ist.day % rashiMeta.luckyColorsHi.length]} रंग अपनाएं।`,
        dontRahuDishaSentenceHi: `राहुकाल (${panchang.rahukaal}) के दौरान गोपनीय वित्तीय प्रयोग टालें और ${cleanDisha} दिशा में यात्रा न करें।`
      },
      9: {
        // धनु (अग्नि तत्व - ऊर्जा, नेतृत्व, साहस, महत्वाकांक्षा)
        elementTagHi: "अग्नि तत्व प्रधान धनु",
        mentalMoonClauseHi: parsedChandra.hasTransition && parsedChandra.endTimeText && moonSign2House && parsedChandra.sign2NameHi ? `प्रातः से ${parsedChandra.endTimeText} तक चन्द्रमा ${parsedChandra.sign1NameHi} (${ordBhavaHi(moonSign1House)} भाव) में और तत्पश्चात ${parsedChandra.sign2NameHi} (${ordBhavaHi(moonSign2House)} भाव) में संचरण करते हुए आपकी दूरदर्शी महत्वाकांक्षा व उत्साह को गति देंगे।` : `चन्द्रमा का ${moonT.rashiNameHi} (${ordBhavaHi(chandrabalHouse)} भाव) में गोचर आपकी सात्त्विक ऊर्जा, नीतिगत नेतृत्व और उच्च महत्वाकांक्षा को बल प्रदान कर रहा है।`,
        mentalNakLordClauseHi: `राशि स्वामी ${lagneshInfo.nameHi} के ${lagneshT.rashiNameHi} (${ordBhavaHi(lagneshT.houseFromRashi)} भाव) में ${[1, 5, 9].includes(lagneshT.houseFromRashi) ? "शुभ त्रिकोण गोचर" : "सक्रिय गोचर"} तथा ${dailyNakQual.nameHi} नक्षत्र के प्रभाव से आपका आशावादी मनोबल ${overallScore}% स्तर पर ${isTier4Caution ? "संयमित" : "तेजस्वी"} रहेगा।`,
        transitGuidanceHi: activeParvLabelHi ? `${activeParvLabelHi} के पावन पर्व पर गुरु-गोविन्द व गौ-माता की आराधना से आपके धर्मोचित संकल्पों और भाग्य-उन्नति को विशेष बल मिलेगा।` : `${formattedTithiDisplay} और ${formattedYogaDisplay} के शुभ संयोग में वरिष्ठों के मार्गदर्शन व साहस से बड़े लक्ष्य सधेंगे।`,
        familyHealthTailHi: "बुजुर्गों के आशीर्वाद और आपके उत्साहपूर्ण सान्निध्य से परिवार में मंगल वातावरण रहेगा तथा नियमित पैदल भ्रमण से यकृत व शरीर स्वस्थ रहेगा।",
        eduTailHi: `अग्नि तत्व की ज्ञान-ऊर्जा और उच्च लक्ष्य-निष्ठा से दर्शन, विधि व प्रतियोगी अध्ययन में शानदार प्रगति होगी।`,
        healthTailHi: `राशि स्वामी ${lagneshInfo.nameHi} (${planetSignHouseHi(lagneshT)}) की स्थिति में पर्याप्त जल-सेवन, समयबद्ध विश्राम और सकारात्मक मानसिकता से उत्तम ऊर्जा बनी रहेगी।`,
        posterHealthSentenceHi: `स्वास्थ्य: यकृत (लिवर) व जांघों की स्फूर्ति हेतु गरिष्ठ भोजन से बचें तथा प्रतिदिन प्रातः पैदल भ्रमण करें।`,
        doMuhuratSentenceHi: panchang.isWednesday ? `${voice.doTaskHi} अपने दूरगामी व शैक्षणिक कार्य विजय मुहूर्त (${panchang.vijayMuhurat}) में प्रारंभ करें।` : panchang.isAbhijitFullyProhibited ? `${voice.doTaskHi} आज अभिजित मुहूर्त बाधित होने से उच्च महत्वाकांक्षी व धर्मोचित कार्यों हेतु राहुकाल-मुक्त शुभ चौघड़िया का चयन करें।` : `${voice.doTaskHi} उच्च महत्वाकांक्षी व धर्मोचित कार्य अभिजित मुहूर्त (${panchang.abhijitMuhurat}) में संपन्न करें।`,
        doDeityColorSentenceHi: `धनु जातक आज ${mergedVaarAndIshtaDeityHi} का पूजन-स्मरण करें तथा ${rashiMeta.luckyColorsHi[ist.day % rashiMeta.luckyColorsHi.length]} रंग का प्रयोग करें।`,
        dontRahuDishaSentenceHi: `राहुकाल (${panchang.rahukaal}) में अति-उत्साह में कोई आर्थिक वादा न करें तथा ${cleanDisha} दिशा की यात्रा स्थगित रखें।`
      },
      10: {
        // मकर (पृथ्वी तत्व - व्यावहारिकता, स्थायी लाभ, धैर्य, कार्यकुशलता, वित्तीय अनुशासन)
        elementTagHi: "पृथ्वी तत्व प्रधान मकर",
        mentalMoonClauseHi: parsedChandra.hasTransition && parsedChandra.endTimeText && moonSign2House && parsedChandra.sign2NameHi ? `दिन में ${parsedChandra.endTimeText} तक चन्द्रमा आपकी ही राशि ${parsedChandra.sign1NameHi} (${ordBhavaHi(moonSign1House)} भाव) में और उसके बाद ${parsedChandra.sign2NameHi} (${ordBhavaHi(moonSign2House)} भाव) में गोचर कर आपके धैर्य व वित्तीय अनुशासन को सुदृढ़ करेंगे।` : `चन्द्रमा का ${moonT.rashiNameHi} (${ordBhavaHi(chandrabalHouse)} भाव) में संचरण आपकी व्यावहारिक कर्मठता, कार्यकुशलता और स्थायी लाभ की दृष्टि को मजबूत कर रहा है।`,
        mentalNakLordClauseHi: `राशि स्वामी ${lagneshInfo.nameHi} के ${lagneshT.rashiNameHi} (${ordBhavaHi(lagneshT.houseFromRashi)} भाव) में गोचर एवं ${dailyNakQual.nameHi} नक्षत्र के संयोग से आपकी व्यावहारिक दृढ़ता ${overallScore}% स्तर पर ${isTier4Caution ? "धैर्यशील" : "अटल व सुदृढ़"} रहेगी।`,
        transitGuidanceHi: activeParvLabelHi ? `${activeParvLabelHi} के पावन दिन अनुशासित कर्म, सेवा-भाव और गोविन्द-शनि स्मरण से आपके व्यावसायिक व पारिवारिक जीवन में स्थायी सुख बढ़ेगा।` : `${formattedTithiDisplay} एवं ${formattedNakDisplay} के प्रभाव में धैर्यपूर्ण परिश्रम और बजट अनुशासन से ठोस उपलब्धि मिलेगी।`,
        familyHealthTailHi: "व्यावहारिक सहयोग और शांत संवाद से गृहस्थ जीवन में स्थायित्व रहेगा तथा प्रातः की धूप व हल्की स्ट्रेचिंग से घुटने व जोड़ स्वस्थ रहेंगे।",
        eduTailHi: `पृथ्वी तत्व के अनुशासित अभ्यास और समय-प्रबंधन से अभियांत्रिकी, प्रबंधन व दीर्घकालीन परीक्षाओं में पक्की सफलता मिलेगी।`,
        healthTailHi: `राशि स्वामी ${lagneshInfo.nameHi} (${planetSignHouseHi(lagneshT)}) के अनुसार लगातार एक ही मुद्रा में बैठने से बचें, गुनगुना जल पिएं और समय पर विश्राम लें।`,
        posterHealthSentenceHi: `स्वास्थ्य: घुटनों व जोड़ों की मजबूती हेतु प्रातः कोमल धूप सेकें, हल्की स्ट्रेचिंग करें व ताजा गर्म भोजन लें।`,
        doMuhuratSentenceHi: panchang.isWednesday ? `${voice.doTaskHi} स्थायी संपत्ति व औद्योगिक कार्य विजय मुहूर्त (${panchang.vijayMuhurat}) में आगे बढ़ाएं।` : panchang.isAbhijitFullyProhibited ? `${voice.doTaskHi} आज अभिजित मुहूर्त बाधित होने से दीर्घकालीन व व्यावहारिक कार्यों हेतु राहुकाल-मुक्त शुभ चौघड़िया का चयन करें।` : `${voice.doTaskHi} दीर्घकालीन व व्यावहारिक कार्य अभिजित मुहूर्त (${panchang.abhijitMuhurat}) में संपादित करें।`,
        doDeityColorSentenceHi: `मकर जातक आज ${mergedVaarAndIshtaDeityHi} का स्मरण करें तथा कर्म-बल वृद्धि हेतु ${rashiMeta.luckyColorsHi[ist.day % rashiMeta.luckyColorsHi.length]} रंग अपनाएं।`,
        dontRahuDishaSentenceHi: `राहुकाल (${panchang.rahukaal}) के समय स्थायी पूंजी में जोखिम न लें और ${cleanDisha} दिशा की यात्रा में सावधानी रखें।`
      },
      11: {
        // कुम्भ (वायु तत्व - संवाद, नई योजनाएं, सामाजिक संपर्क, बौद्धिक निर्णय, संतुलन)
        elementTagHi: "वायु तत्व प्रधान कुम्भ",
        mentalMoonClauseHi: parsedChandra.hasTransition && parsedChandra.endTimeText && moonSign2House && parsedChandra.sign2NameHi ? `प्रातः से ${parsedChandra.endTimeText} तक चन्द्रमा ${parsedChandra.sign1NameHi} (${ordBhavaHi(moonSign1House)} भाव) में और तत्पश्चात ${parsedChandra.sign2NameHi} (${ordBhavaHi(moonSign2House)} भाव) में प्रवेश कर आपके बौद्धिक चिंतन व संवाद-संतुलन को दिशा देंगे।` : `चन्द्रमा का ${moonT.rashiNameHi} (${ordBhavaHi(chandrabalHouse)} भाव) में गोचर आपकी नवीन योजनाओं, सामाजिक संपर्कों और संतुलित बौद्धिक निर्णयों को प्रभावित कर रहा है।`,
        mentalNakLordClauseHi: `राशि स्वामी ${lagneshInfo.nameHi} के ${lagneshT.rashiNameHi} (${ordBhavaHi(lagneshT.houseFromRashi)} भाव) में संचरण तथा ${dailyNakQual.nameHi} नक्षत्र के प्रभाव से आपकी विचार-शक्ति ${overallScore}% स्तर पर ${isTier4Caution ? "संयमित व विवेकपूर्ण" : "नवाचारपूर्ण"} रहेगी।`,
        transitGuidanceHi: activeParvLabelHi ? `${activeParvLabelHi} के पावन अवसर पर परोपकार, शिव-गोविन्द ध्यान और संतुलित संवाद से आपके सामाजिक व व्यावसायिक कार्यों में शांतिपूर्ण प्रगति होगी।` : `${formattedTithiDisplay} और ${formattedYogaDisplay} के संयोग में बौद्धिक संयम व सुनियोजित संवाद से कार्य सधेंगे।`,
        familyHealthTailHi: "मित्रवत संवाद और वैचारिक संतुलन से परिवार में सौहार्द रहेगा तथा रात्रि में समय पर विश्राम लेने से रक्त-संचार व नेत्र-ऊर्जा उत्तम रहेगी।",
        eduTailHi: `वायु तत्व की मौलिक प्रज्ञा और एकाग्र अध्ययन से आधुनिक विज्ञान, तकनीक व शोध विषयों में नई समझ बनेगी।`,
        healthTailHi: `राशि स्वामी ${lagneshInfo.nameHi} (${planetSignHouseHi(lagneshT)}) की स्थिति में आंखों को स्क्रीन से बीच-बीच में आराम दें और गुनगुने सात्त्विक आहार से दिनचर्या संतुलित रखें।`,
        posterHealthSentenceHi: `स्वास्थ्य: पिंडलियों के रक्त-संचार व नेत्र थकान से बचाव हेतु हल्की स्ट्रेचिंग करें और रात्रि में पर्याप्त विश्राम लें।`,
        doMuhuratSentenceHi: panchang.isWednesday ? `${voice.doTaskHi} अपनी बौद्धिक व तकनीकी योजनाएं विजय मुहूर्त (${panchang.vijayMuhurat}) में क्रियान्वित करें।` : panchang.isAbhijitFullyProhibited ? `${voice.doTaskHi} आज अभिजित मुहूर्त बाधित होने से सुनियोजित संवाद व प्राथमिक कार्यों हेतु राहुकाल-मुक्त शुभ चौघड़िया का चयन करें।` : `${voice.doTaskHi} सुनियोजित संवाद व प्राथमिक कार्य अभिजित मुहूर्त (${panchang.abhijitMuhurat}) में संपन्न करें।`,
        doDeityColorSentenceHi: `कुम्भ राशि के जातक आज ${mergedVaarAndIshtaDeityHi} का ध्यान करें एवं ${rashiMeta.luckyColorsHi[ist.day % rashiMeta.luckyColorsHi.length]} रंग का प्रयोग करें।`,
        dontRahuDishaSentenceHi: `राहुकाल (${panchang.rahukaal}) के दौरान अनजान आर्थिक प्रयोगों से दूर रहें तथा ${cleanDisha} दिशा की यात्रा टालें।`
      },
      12: {
        // मीन (जल तत्व - अंतर्दृष्टि, पारिवारिक संवेदना, रचनात्मकता, शोध, आध्यात्मिक शांति)
        elementTagHi: "जल तत्व प्रधान मीन",
        mentalMoonClauseHi: isAfternoonEveningInauspiciousMoon && parsedChandra.endTimeText && parsedChandra.sign2NameHi ? `सूर्योदय से ${parsedChandra.endTimeText} तक चन्द्रमा ${parsedChandra.sign1NameHi} (${ordBhavaHi(moonSign1House)} भाव) में स्थित रहकर रचनात्मक प्रज्ञा व आध्यात्मिक प्रसन्नता देंगे, तथापि ${cleanTransitionClockHi} के बाद ${eveningCautionBhavaWordHi} चंद्रमा (${parsedChandra.sign2NameHi}) प्रारंभ होने से सायंकाल में अनावश्यक दौड़भाग कम कर सावधानी रखें।` : parsedChandra.hasTransition && parsedChandra.endTimeText && moonSign2House && parsedChandra.sign2NameHi ? `प्रातः से ${parsedChandra.endTimeText} तक चन्द्रमा ${parsedChandra.sign1NameHi} (${ordBhavaHi(moonSign1House)} भाव) में और उसके उपरांत ${parsedChandra.sign2NameHi} (${ordBhavaHi(moonSign2House)} भाव) में संचरण कर आपकी रचनात्मक अंतर्दृष्टि को समृद्ध करेंगे।` : `चन्द्रमा का ${moonT.rashiNameHi} (${ordBhavaHi(chandrabalHouse)} भाव) में प्रवाह आपकी आध्यात्मिक शांति, पारिवारिक संवेदना और सृजनात्मकता को प्रबल कर रहा है।`,
        mentalNakLordClauseHi: `राशि स्वामी ${lagneshInfo.nameHi} के ${lagneshT.rashiNameHi} (${ordBhavaHi(lagneshT.houseFromRashi)} भाव) में ${[6, 8, 12].includes(lagneshT.houseFromRashi) ? "संचरण" : "शुभ गोचर"} एवं ${dailyNakQual.nameHi} नक्षत्र के संयोग से आपकी अंतर्ज्ञान-शक्ति ${overallScore}% स्तर पर ${isTier4Caution ? "शांत व संयमित" : "सात्त्विक व सुदृढ़"} रहेगी।`,
        transitGuidanceHi: activeParvLabelHi ? `${activeParvLabelHi} के पावन संयोग में श्री लक्ष्मीनारायण-गोविन्द आराधना और करुणापूर्ण सेवा-भाव से आपके समस्त मनोरथों में दैवीय आशीर्वाद जुड़ेगा।` : `${formattedTithiDisplay} एवं ${formattedYogaDisplay} के प्रभाव में आध्यात्मिक शांति और रचनात्मक शोध से श्रेष्ठ सफलता मिलेगी।`,
        familyHealthTailHi: "आपकी स्नेहिल संवेदना और सात्त्विक विचारों से परिवार में आध्यात्मिक आनंद रहेगा तथा प्रातः हल्दी-तुलसी पेय से रोग-प्रतिरोधक ऊर्जा उत्तम रहेगी।",
        eduTailHi: `जल तत्व की सृजनात्मक कल्पनाशीलता और गहन स्मरण-शक्ति से साहित्य, चिकित्सा, कला व उच्च शोध में विशेष उपलब्धि मिलेगी।`,
        healthTailHi: `राशि स्वामी ${lagneshInfo.nameHi} (${planetSignHouseHi(lagneshT)}) की स्थिति में प्रातः शांत ध्यान, पर्याप्त विश्राम और ताजे सात्त्विक आहार से शरीर व मन प्रफुल्लित रहेंगे।`,
        posterHealthSentenceHi: `स्वास्थ्य: पैरों की देखभाल व मौसमी कफ से बचाव हेतु प्रातः तुलसी-हल्दी का गुनगुना पेय और सात्त्विक आहार लें।`,
        doMuhuratSentenceHi: panchang.isWednesday ? `${voice.doTaskHi} शैक्षणिक, सृजनात्मक व शुभ कार्य विजय मुहूर्त (${panchang.vijayMuhurat}) में प्रारंभ करें।` : panchang.isAbhijitFullyProhibited ? `${voice.doTaskHi} आज अभिजित मुहूर्त बाधित होने से आध्यात्मिक, शैक्षणिक व प्रमुख संकल्पों हेतु राहुकाल-मुक्त शुभ चौघड़िया का चयन करें।` : `${voice.doTaskHi} आध्यात्मिक, शैक्षणिक व प्रमुख संकल्प अभिजित मुहूर्त (${panchang.abhijitMuhurat}) में सिद्ध करें।`,
        doDeityColorSentenceHi: `मीन जातक आज ${mergedVaarAndIshtaDeityHi} का श्रद्धापूर्वक स्मरण करें तथा ${rashiMeta.luckyColorsHi[ist.day % rashiMeta.luckyColorsHi.length]} रंग को अपनाएं।`,
        dontRahuDishaSentenceHi: `राहुकाल (${panchang.rahukaal}) में भावुकता में आकर कोई वित्तीय जोखिम न लें एवं ${cleanDisha} दिशा के प्रवास से बचें।`
      }
    };
    const elemClause = RASHI_ELEMENT_CLAUSES[rashiNum] || RASHI_ELEMENT_CLAUSES[1];
    const isShuklaPakshaToday = /शुक्ल|shukla/iu.test(`${panchang.paksha || ""} ${panchang.tithi || ""}`);
    const isEighthOrTwelfthMoonToday = chandrabalHouse === 8 || chandrabalHouse === 12;
    lagnaMentalText = isEighthOrTwelfthMoonToday && isShuklaPakshaToday ? `${voice.mentalIntroHi} ${elemClause.mentalMoonClauseHi} शुक्ल पक्ष के चंद्रमा से धैर्य व आत्म-संयम का सहारा मिलेगा, परंतु ${ordBhavaHi(chandrabalHouse)} भाव गोचर के कारण बड़े निर्णय व जोखिम टालें।` : `${voice.mentalIntroHi} ${elemClause.mentalMoonClauseHi} ${elemClause.mentalNakLordClauseHi}`;
    const getRahuMoonAdviceHi = (house) => {
      if (house === 1) {
        return `${rashiMeta.nameHi} के प्रथम भाव (${moonT.rashiNameHi}) में राहु-चंद्र ग्रहण योग सक्रिय होने से अनावश्यक मानसिक भ्रम, भावुक आवेश व जल्दबाजी से बचें तथा स्पष्ट तथ्यों के आधार पर ही निर्णय लें।`;
      }
      if (house === 4) {
        return `${rashiMeta.nameHi} के चतुर्थ भाव (${moonT.rashiNameHi}) में राहु-चंद्र ग्रहण योग के कारण घरेलू वातावरण, माता के स्वास्थ्य व संपत्ति विषयों में शांत संवाद और धैर्य बनाए रखें।`;
      }
      if (house === 7) {
        return `${rashiMeta.nameHi} के सप्तम भाव (${moonT.rashiNameHi}) में राहु-चंद्र ग्रहण योग बनने से दांपत्य व व्यापारिक साझेदारी में संदेह या गलतफहमी टालकर पारदर्शिता रखें।`;
      }
      if (house === 8) {
        return `${rashiMeta.nameHi} के अष्टम भाव (${moonT.rashiNameHi}) में राहु-चंद्र ग्रहण योग होने से अज्ञात भय, वाहन में शीघ्रता, आकस्मिक जोखिम व अनजान निवेश से पूरी तरह दूरी रखें।`;
      }
      if (house === 12) {
        return `${rashiMeta.nameHi} के द्वादश भाव (${moonT.rashiNameHi}) में राहु-चंद्र ग्रहण योग के प्रभाव से अनिद्रा, भ्रम व अनावश्यक व्यय से बचने हेतु सात्त्विक ध्यान और बजट अनुशासन अपनाएं।`;
      }
      return `${rashiMeta.nameHi} के ${ordBhavaHi(house)} भाव (${moonT.rashiNameHi}) में राहु-चंद्र ग्रहण योग बनने से इस भाव से जुड़े निर्णय भावुकता के बजाय व्यावहारिक विवेक से लें।`;
    };
    const getKetuJupiterAdviceHi = (house) => {
      if (house === 1) {
        return `${rashiMeta.nameHi} के प्रथम भाव (${ketuT.rashiNameHi}) में केतु-गुरु युति आध्यात्मिक परिपक्वता देगी, किंतु अति-आत्ममंथन छोड़कर व्यावहारिक कर्म में भी सक्रिय रहें।`;
      }
      if (house === 4) {
        return `${rashiMeta.nameHi} के चतुर्थ भाव (${ketuT.rashiNameHi}) में केतु-गुरु युति से आंतरिक वैराग्य या घरेलू उदासीनता रह सकती है; परिजनों से आत्मीय संवाद जीवंत रखें।`;
      }
      if (house === 7) {
        return `${rashiMeta.nameHi} के सप्तम भाव (${ketuT.rashiNameHi}) में केतु-गुरु युति होने से जीवनसाथी व सहयोगियों से अपेक्षाएं व्यावहारिक रखें और अनुभवी सलाह का सम्मान करें।`;
      }
      if (house === 8) {
        return `${rashiMeta.nameHi} के अष्टम भाव (${ketuT.rashiNameHi}) में केतु-गुरु युति गूढ़ शोध व साधना में सहायक है, तथापि स्वास्थ्य और गोपनीय वित्तीय विषयों में सतर्क रहें।`;
      }
      if (house === 12) {
        return `${rashiMeta.nameHi} के द्वादश भाव (${ketuT.rashiNameHi}) में केतु-गुरु युति योग-ध्यान, दूरस्थ मार्गदर्शन व परोपकार में शुभ फल देगी; बस विश्राम और व्यय संतुलित रखें।`;
      }
      return `${rashiMeta.nameHi} के ${ordBhavaHi(house)} भाव (${ketuT.rashiNameHi}) में केतु-गुरु युति होने से दिखावे के बजाय सूक्ष्म ज्ञान, शोध व संयमित कार्यशैली से लाभ मिलेगा।`;
    };
    const rahuKetuYogaNotesHi = [
      isMoonRahuConjunct ? getRahuMoonAdviceHi(moonT.houseFromRashi) : isMoonKetuConjunct ? `${rashiMeta.nameHi} के ${ordBhavaHi(moonT.houseFromRashi)} भाव (${moonT.rashiNameHi}) में केतु-चंद्र युति होने से मन को भटकने न देकर शांत एकाग्रता व ध्यान का अभ्यास करें।` : "",
      isKetuJupiterConjunct ? getKetuJupiterAdviceHi(ketuT.houseFromRashi) : isRahuJupiterConjunct ? `${rashiMeta.nameHi} के ${ordBhavaHi(rahuT.houseFromRashi)} भाव (${rahuT.rashiNameHi}) में राहु-गुरु युति के कारण शॉर्टकट के बजाय नीतिगत एवं वैध कार्यपद्धति अपनाएं।` : "",
      !isMoonRahuConjunct && !isMoonKetuConjunct && !isKetuJupiterConjunct && !isRahuJupiterConjunct ? `${rashiMeta.nameHi} हेतु राहु (${planetSignHouseHi(rahuT)}) महत्वाकांक्षा को दिशा देंगे तथा केतु (${planetSignHouseHi(ketuT)}) विवेकपूर्ण संयम से संतुलन बनाएंगे।` : ""
    ].filter(Boolean).join(" ");
    const combustJupiterNoteHi = jupT.isCombust ? " गोचर में गुरु अस्त होने से मध्यम फलदायी रहेंगे।" : "";
    const isMoonJupConj = moonT.rashiNumber === jupT.rashiNumber;
    const isMoonMarsConj = moonT.rashiNumber === marsT.rashiNumber;
    const moonJupMarsNoteHi = isMoonJupConj && isMoonMarsConj ? ` ${ordBhavaHi(moonT.houseFromRashi)} भाव (${moonT.rashiNameHi}) में चंद्र–गुरु–मंगल युति से मंगल युति से मिश्रित गजकेसरी प्रभाव बनेगा${jupT.isCombust ? " (गुरु अस्त होने से मध्यम फलदायी)" : ""} — साहस और विवेक के संतुलन से निर्णय लें।` : "";
    const classicalYutiNodes = [
      { id: "sun", nameHi: "सूर्य", t: sunT },
      { id: "moon", nameHi: "चंद्र", t: moonT },
      { id: "mars", nameHi: "मंगल", t: marsT },
      { id: "mercury", nameHi: "बुध", t: mercT },
      { id: "jupiter", nameHi: "गुरु", t: jupT },
      { id: "venus", nameHi: "शुक्र", t: venT },
      { id: "saturn", nameHi: "शनि", t: satT }
    ];
    const yutiByHouse = /* @__PURE__ */ new Map();
    for (const p of classicalYutiNodes) {
      const list = yutiByHouse.get(p.t.houseFromRashi) || [];
      list.push(p);
      yutiByHouse.set(p.t.houseFromRashi, list);
    }
    const topMultiYuti = Array.from(yutiByHouse.entries()).filter(([h, list]) => list.length >= 2 && !(moonJupMarsNoteHi && h === moonT.houseFromRashi)).sort((a, b) => b[1].length - a[1].length)[0];
    let multiPlanetYutiNoteHi = "";
    if (topMultiYuti) {
      const [yHouse, yList] = topMultiYuti;
      const yIds = yList.map((x) => x.id);
      const yLabelHi = yList.slice(0, 3).map((x) => x.nameHi).join("–");
      const yKindHi = yList.length >= 3 ? "त्रिग्रही युति" : "द्विग्रही युति";
      const hasCombustInYuti = yList.some((x) => x.t.isCombust);
      const yEffectHi = yIds.includes("sun") && yIds.includes("mercury") ? hasCombustInYuti ? "बौद्धिक संवाद सक्रिय रहेगा, परंतु अस्त ग्रह के कारण बड़े निर्णय सोच-समझकर लें" : "बौद्धिक स्पष्टता, संवाद-कौशल व निर्णय-क्षमता को संयुक्त बल मिलेगा" : yIds.includes("jupiter") && yIds.includes("mars") ? "ऊर्जा व विवेक का मिश्रित संयोग बनेगा—साहसिक कार्य संयमित योजना से सिद्ध होंगे" : yIds.includes("saturn") ? "धैर्य, अनुशासन और व्यावहारिक परिश्रम से इस भाव के परिणाम स्थिर होंगे" : hasCombustInYuti ? "संयुक्त प्रभाव मध्यम व संयमित रहेगा—प्राथमिकता स्पष्ट रखकर कदम बढ़ाएं" : "इस भाव के विषयों में संयुक्त ग्रह-ऊर्जा से संतुलित व सार्थक प्रगति बनेगी";
      multiPlanetYutiNoteHi = ` ${ordBhavaHi(yHouse)} भाव (${yList[0].t.rashiNameHi}) में ${yLabelHi} की ${yKindHi} से ${yEffectHi}।`;
    }
    transitImpactText = `${elemClause.elementTagHi} राशि हेतु निरयण ग्रह गोचर (लाहिड़ी अयनांश) — ${sixPlanetsTransitSummaryHi}। ${rashiMeta.nameHi} राशि पर शनि गोचर (${planetSignHouseHi(satT)}): ${sadeSatiStatusHi}।${combustJupiterNoteHi}${moonJupMarsNoteHi}${multiPlanetYutiNoteHi} ${rahuKetuYogaNotesHi} ${elemClause.transitGuidanceHi}`;
    const buildMoonHealthClauseHi = (houseNum, adviceHi) => buildHealthPrediction({
      houseNum,
      adviceHi,
      healthTipHi: voice.healthTipHi,
      lagneshId: lagneshInfo.planetId,
      lagneshNameHi: lagneshInfo.nameHi,
      lagneshSignHouseHi: planetSignHouseHi(lagneshT),
      moonSignNameHi: moonT.rashiNameHi,
      prevailingMoonSignHouseHi,
      hasMoonTransition: Boolean(
        parsedChandra.hasTransition && parsedChandra.endTimeText && moonSign2House && parsedChandra.sign2NameHi
      )
    });
    const isMajorWealthInTrik = [6, 8, 12].includes(dhaneshT.houseFromRashi) && [6, 8, 12].includes(jupT.houseFromRashi);
    const trikWealthCautionHi = isMajorWealthInTrik ? "चूंकि धन भाव के कारक त्रिक स्थान से प्रभावित हैं, अतः आज जोखिम भरे बड़े निवेश टालकर नियमित बचत व व्यय-अनुशासन रखें।" : "";
    const careerBaseHeadlineHi = voice.careerThemeHi.split(/[;।]/)[0].trim();
    const buildRestrainedKarmeshCareerHi = () => {
      if (isKarmesh12th && karmeshInfo.planetId === "moon") {
        return `द्वादश भाव में कर्मेश चंद्रमा (${planetSignHouseHi(karmeshT)}) होने से आज व्यय-संतुलन, दूरगामी योजना और शांत कार्यनीति अपनाकर ही कार्यक्षेत्र में स्थिर प्रगति सधेगी। ${careerBaseHeadlineHi}।`;
      }
      if (isKarmesh12th && isKarmeshDebilitated) {
        return `चंद्रमा (${prevailingMoonSignHouseHi}) का सहयोग मिल रहा है, परंतु कर्मेश ${karmeshInfo.nameHi} (${planetSignHouseHi(karmeshT)}) की प्रतिकूल स्थिति के कारण सीधी सहजता के बजाय विदेश व दूरस्थ संपर्कों, पर्दे के पीछे की कार्यनीति और निरंतर परिश्रम से प्रगति सधेगी। ${careerBaseHeadlineHi}।`;
      }
      if (isKarmesh12th) {
        return `चंद्रमा (${prevailingMoonSignHouseHi}) का बल साथ है, परंतु कर्मेश ${karmeshInfo.nameHi} (${planetSignHouseHi(karmeshT)}) की स्थिति से दूरस्थ व विदेशी संपर्कों, शोध और सतत मेहनत से सफलता मिलेगी। ${careerBaseHeadlineHi}।`;
      }
      if (isKarmeshDebilitated) {
        return `चंद्रमा (${prevailingMoonSignHouseHi}) का शुभ बल मिलने पर भी कर्मेश ${karmeshInfo.nameHi} (${planetSignHouseHi(karmeshT)}) की संवेदनशील स्थिति में धैर्य, अनुशासित शोध और निरंतर परिश्रम से ही लक्ष्य सिद्ध होंगे। ${careerBaseHeadlineHi}।`;
      }
      return `चंद्रमा (${prevailingMoonSignHouseHi}) के शुभ बल के बीच कर्मेश ${karmeshInfo.nameHi} (${planetSignHouseHi(karmeshT)}) की स्थिति में गहन शोध, तकनीकी सतर्कता और धैर्यपूर्ण परिश्रम से प्रगति होगी। ${careerBaseHeadlineHi}।`;
    };
    if (effectiveScoreHouse === 8) {
      careerText = rashiNum % 2 === 0 ? `अष्टम चंद्रमा (${prevailingMoonSignHouseHi}) के कारण आज कार्यक्षेत्र में कोई नया जोखिम या अचानक बदलाव न करें और नियमित दायित्वों को शांत मन से पूरा करें। ${sankrantiPlanetsSubjectHi} के सहारे ${careerBaseHeadlineHi}।` : `कार्यस्थल पर आज धैर्य व शोधपरक दृष्टि आवश्यक है, क्योंकि चंद्रमा (${prevailingMoonSignHouseHi}) में रहकर आकस्मिक निर्णयों से बचने का संकेत दे रहे हैं। ${sankrantiPlanetsSubjectHi} के सहयोग से ${careerBaseHeadlineHi}।`;
      wealthText = `${transitWealthClauseHi}आर्थिक पक्ष सामान्य रहेगा, तथापि अष्टम चंद्रमा के कारण आज सट्टे, जोखिम भरे निवेश या अनजान सौदों को टालकर अपनी संचित पूंजी सुरक्षित रखें।`;
      familyText = `${uniqueFamilyPlanetsHi} के अनुसार ${voice.familyThemeHi.split(/[;।]/)[0].trim()}; परिजनों के साथ शांत और धैर्यपूर्ण संवाद बनाए रखें।`;
      educationText = `${voice.educationThemeHi} ${elemClause.eduTailHi}`;
      healthText = buildMoonHealthClauseHi(8, "आज मानसिक बेचैनी, थकान और अनिद्रा से बचने हेतु गहरी श्वास-क्रिया, पर्याप्त विश्राम तथा जल-संतुलन बनाए रखें।");
      dontToday1 = `आज वाहन तेज न चलाएं, किसी नए जोखिम या अनजान प्रयोग से बचें तथा मानसिक शांति भंग करने वाले विवादों को टालें। ${voice.dontTaskHi}`;
    } else if (effectiveScoreHouse === 12) {
      careerText = rashiNum % 2 === 0 ? `चंद्रमा (${prevailingMoonSignHouseHi}) के प्रभाव से आज अनावश्यक भागदौड़ से बचें तथा बाहरी व दूरस्थ कार्य-संपर्कों में कागजात सावधानी से जांचें। ${sankrantiPlanetsSubjectHi} के सहयोग से ${careerBaseHeadlineHi}।` : `बाहरी संपर्कों व दस्तावेजी कार्यों में आज अतिरिक्त सतर्कता रखें क्योंकि चंद्रमा (${prevailingMoonSignHouseHi}) में रहकर व्यर्थ श्रम टालने का संकेत दे रहे हैं। ${sankrantiPlanetsSubjectHi} के प्रभाव से ${careerBaseHeadlineHi}।`;
      wealthText = `${transitWealthClauseHi}आय के प्रयास चलते रहेंगे, परंतु द्वादश चंद्रमा के कारण आज फिजूलखर्ची और दिखावे की खरीदारी पर सख्त नियंत्रण रखकर कोष सुरक्षित रखें।`;
      familyText = `${uniqueFamilyPlanetsHi} के अनुसार ${voice.familyThemeHi.split(/[;।]/)[0].trim()}; घर में खर्च व यात्रा योजनाओं पर शांत चर्चा करें।`;
      educationText = `${voice.educationThemeHi} ${elemClause.eduTailHi}`;
      healthText = buildMoonHealthClauseHi(12, "पर्याप्त रात्रि-विश्राम, नेत्रों की स्वच्छता और शांत ध्यान द्वारा शारीरिक व मानसिक स्फूर्ति बनाए रखें।");
      dontToday1 = `आज फिजूलखर्ची पर रोक लगाएं, यात्रा के दौरान लापरवाही न करें तथा देर रात तक जागकर अपनी नींद खराब न करें। ${voice.dontTaskHi}`;
    } else if (effectiveScoreHouse === 4) {
      careerText = rashiNum % 2 === 0 ? `चतुर्थ चंद्रमा (${prevailingMoonSignHouseHi}) की स्थिति में आज कार्यस्थल पर जल्दबाजी के बजाय शांत एवं व्यवस्थित गति से अपने दायित्व पूरे करें। ${sankrantiPlanetsSubjectHi} के सहयोग से ${careerBaseHeadlineHi}।` : `कार्यक्षेत्र में आज मानसिक संयम ही सफलता की कुंजी है, क्योंकि चंद्रमा (${prevailingMoonSignHouseHi}) में रहकर धीमी पर सधी हुई प्रगति दे रहे हैं। ${sankrantiPlanetsSubjectHi} के प्रभाव से ${careerBaseHeadlineHi}।`;
      wealthText = `${transitWealthClauseHi}गृह-परिवार व माता की सुख-सुविधा से जुड़े कार्यों में सुविचारित व्यय करें तथा चतुर्थ चंद्रमा में बड़े वित्तीय जोखिम से बचें।`;
      familyText = `${uniqueFamilyPlanetsHi} के अनुसार आज माता के स्वास्थ्य एवं घरेलू सामंजस्य पर विशेष ध्यान दें; ${voice.familyThemeHi.split(/[;।]/)[0].trim()}।`;
      educationText = `${voice.educationThemeHi} ${elemClause.eduTailHi}`;
      healthText = buildMoonHealthClauseHi(4, "छाती-कफ से सुरक्षा, शांत श्वसन और समय पर विश्राम द्वारा मानसिक व शारीरिक संतुलन बनाए रखें।");
      dontToday1 = `आज घरेलू बातों पर तनाव या कठोर वाणी से बचें तथा माता के स्वास्थ्य व सुख-सुविधा की अनदेखी न करें। ${voice.dontTaskHi}`;
    } else if (effectiveScoreHouse === 6 && !isAfternoonEveningInauspiciousMoon) {
      careerText = isKarmeshRestrained ? buildRestrainedKarmeshCareerHi() : rashiNum % 2 === 0 ? `षष्ठ भाव में चंद्रमा (${prevailingMoonSignHouseHi}) होने से आज प्रतिस्पर्धा, सेवा-कार्य व रुके हुए प्रोजेक्ट में विजय मिलेगी। ${sankrantiPlanetsSubjectHi} के सहयोग से ${careerBaseHeadlineHi}।` : `अनुशासित परिश्रम से आज विरोधियों पर बढ़त मिलेगी और चंद्रमा (${prevailingMoonSignHouseHi}) का शुभ बल कार्यसिद्धि देगा। ${sankrantiPlanetsSubjectHi} के प्रभाव से ${careerBaseHeadlineHi}।`;
      wealthText = `${transitWealthClauseHi}नियमित व्यापारिक आवक और बकाया वसूली में अनुकूलता रहेगी, परंतु षष्ठ चंद्रमा के प्रभाव से आज नया कर्ज लेने या उधार देने में संयम रखें।`;
      familyText = `${uniqueFamilyPlanetsHi} की स्थिति से ${voice.familyThemeHi.split(/[;।]/)[0].trim()}; वाणी में सौम्यता एवं सहयोग का भाव बनाए रखें।`;
      educationText = `${voice.educationThemeHi} ${elemClause.eduTailHi}`;
      healthText = buildMoonHealthClauseHi(6, "बाहरी व तला-भुना भोजन टालकर नियमित समय पर हल्का सात्त्विक आहार लें तथा अनावश्यक तनाव से दूर रहें।");
      dontToday1 = `आज सहकर्मियों से व्यर्थ बहस न करें, नया कर्ज लेने से बचें तथा पाचन बिगाड़ने वाले भारी खान-पान से परहेज करें। ${voice.dontTaskHi}`;
    } else if (isAfternoonEveningInauspiciousMoon) {
      const morningMoonAndKarmeshLeadHi = karmeshInfo.planetId === "moon" ? `प्रातः-दोपहर शुभ चंद्रबल एवं कर्मेश चंद्र (${parsedChandra.sign1NameHi}, ${ordBhavaHi(moonSign1House)} भाव)` : isKarmeshRestrained ? `प्रातः-दोपहर शुभ चंद्रबल (${parsedChandra.sign1NameHi}) के बीच कर्मेश ${karmeshInfo.nameHi} (${planetSignHouseHi(karmeshT)}) की स्थिति में निरंतर प्रयास व दूरस्थ संपर्कों` : `प्रातः-दोपहर शुभ चंद्रबल (${parsedChandra.sign1NameHi}) एवं कर्मेश ${karmeshInfo.nameHi} (${planetSignHouseHi(karmeshT)})`;
      const budhadityaEveningCareerHi = budhadityaCategory === "career" ? ` तथा सूर्य-बुध के बुधादित्य योग (${budhadityaTagHi})` : "";
      if (moonSign2House === 4) {
        careerText = `${sankrantiPlanetsSubjectHi} व दिन के शुभ चंद्रबल से ${careerBaseHeadlineHi}। किंतु ${cleanTransitionClockHi} के बाद चतुर्थ चंद्रमा प्रारंभ होने से सायंकाल में आकस्मिक निर्णय से सावधानी रखें।`;
        wealthText = `${transitWealthClauseHi}${voice.wealthThemeHi.split(/[;।]/)[0].trim()}, तथा संध्या समय घरेलू या वाहन संबंधी खर्चों में वित्तीय संतुलन बनाए रखें।`;
      } else if (moonSign2House === 8) {
        careerText = `${morningMoonAndKarmeshLeadHi}${budhadityaEveningCareerHi} के सहयोग से ${careerBaseHeadlineHi}। परंतु ${cleanTransitionClockHi} के बाद अष्टम चंद्रमा प्रारंभ होने से सायंकाल में किसी नए व्यावसायिक जोखिम या विवाद से सावधानी रखें।`;
        wealthText = `${transitWealthClauseHi}${voice.wealthThemeHi.split(/[;।]/)[0].trim()}, तथा शाम के प्रहर में किसी अनजान लेन-देन या उधार से अपनी पूंजी सुरक्षित रखें।`;
      } else {
        const altMoonKarmeshHi = karmeshInfo.planetId === "moon" ? `कर्मेश चंद्र (${parsedChandra.sign1NameHi}, ${ordBhavaHi(moonSign1House)} भाव) के अनुकूल चंद्रबल${budhadityaEveningCareerHi}` : isKarmeshRestrained ? `दिन के शुभ चंद्रबल के साथ कर्मेश ${karmeshInfo.nameHi} (${planetSignHouseHi(karmeshT)})${budhadityaEveningCareerHi} में सतत परिश्रम` : `कर्मेश ${karmeshInfo.nameHi} (${planetSignHouseHi(karmeshT)})${budhadityaEveningCareerHi} और दिन के अनुकूल चंद्रबल`;
        careerText = `${altMoonKarmeshHi} के प्रभाव से ${careerBaseHeadlineHi}। तथापि ${cleanTransitionClockHi} के बाद द्वादश चंद्रमा प्रारंभ होने से सायंकाल में बाहरी कार्यों व कागजी निर्णय में सावधानी रखें।`;
        wealthText = `${transitWealthClauseHi}${voice.wealthThemeHi.split(/[;।]/)[0].trim()}, किंतु संध्याकाल में अनावश्यक खरीदारी व अतिरिक्त व्यय पर संयम रखें।`;
      }
      familyText = `${uniqueFamilyPlanetsHi} के गोचर समन्वय से ${voice.familyThemeHi} ${elemClause.familyHealthTailHi}`;
      educationText = `${voice.educationThemeHi} ${elemClause.eduTailHi}`;
      healthText = `${voice.healthTipHi} ${elemClause.healthTailHi}`;
      dontToday1 = `${voice.dontTaskHi} सायंकाल में ${cleanTransitionClockHi} के उपरांत ${eveningCautionBhavaWordHi} चंद्रमा होने से कोई आकस्मिक जोखिम न उठाएं।`;
    } else if (isTier3MediumShubh) {
      const careerLeadMedium = rashiNum % 3 === 1 ? `चंद्रमा (${prevailingMoonSignHouseHi}) एवं ${sankrantiPlanetsSubjectHi} के संतुलित सहयोग से` : rashiNum % 3 === 2 ? `कार्यक्षेत्र में धैर्य व सूझबूझ के साथ ${sankrantiPlanetsSubjectHi} व चंद्रमा (${prevailingMoonSignHouseHi}) के प्रभाव में` : `व्यावसायिक निर्णयों में स्पष्टता के साथ ${sankrantiPlanetsSubjectHi} व चंद्रमा (${prevailingMoonSignHouseHi}) के चलते`;
      careerText = isKarmeshRestrained || isKarmesh8th ? buildRestrainedKarmeshCareerHi() : `${careerLeadMedium} ${careerBaseHeadlineHi}। ${moonDyn.careerAdd}`;
      wealthText = trikWealthCautionHi ? `${transitWealthClauseHi}${trikWealthCautionHi}` : `${transitWealthClauseHi}${voice.wealthThemeHi} ${moonDyn.wealthAdd}`;
      familyText = `${uniqueFamilyPlanetsHi} के गोचर समन्वय से ${voice.familyThemeHi} ${elemClause.familyHealthTailHi}`;
      educationText = `${voice.educationThemeHi} ${elemClause.eduTailHi}`;
      healthText = `${voice.healthTipHi} ${elemClause.healthTailHi}`;
      dontToday1 = `${voice.dontTaskHi}`;
    } else {
      const careerLeadTop = rashiNum % 4 === 1 ? `चंद्रमा (${prevailingMoonSignHouseHi}) के ${isKsheenaMoon ? "क्षीण चंद्रबल (संयम अपेक्षित)" : "शुभ बल"} तथा ${sankrantiPlanetsSubjectHi} के प्रभाव से` : rashiNum % 4 === 2 ? `कार्यक्षेत्र में विशेष उत्साह के साथ ${sankrantiPlanetsSubjectHi} व चंद्रमा (${prevailingMoonSignHouseHi}) के प्रभाव में` : rashiNum % 4 === 3 ? `पेशेवर प्रतिष्ठा व कार्यसिद्धि के बीच चंद्रमा (${prevailingMoonSignHouseHi}) व ${sankrantiPlanetsSubjectHi} के संयोग से` : `${isKsheenaMoon ? "क्षीण चंद्रबल (संयम अपेक्षित)" : "उत्तम चंद्रबल"} (${prevailingMoonSignHouseHi}) एवं ${sankrantiPlanetsSubjectHi} के समन्वय से`;
      careerText = isKarmeshRestrained || isKarmesh8th ? buildRestrainedKarmeshCareerHi() : `${careerLeadTop} ${careerBaseHeadlineHi}। ${moonDyn.careerAdd}`;
      wealthText = trikWealthCautionHi ? `${transitWealthClauseHi}${trikWealthCautionHi}` : `${transitWealthClauseHi}${voice.wealthThemeHi} ${moonDyn.wealthAdd}`;
      familyText = `${uniqueFamilyPlanetsHi} के गोचर समन्वय से ${voice.familyThemeHi} ${elemClause.familyHealthTailHi}`;
      educationText = `${voice.educationThemeHi} ${elemClause.eduTailHi}`;
      healthText = `${voice.healthTipHi} ${elemClause.healthTailHi}`;
      dontToday1 = `${voice.dontTaskHi}`;
    }
    const satToMoonSignStep = (moonT.rashiNumber - satT.rashiNumber + 12) % 12 + 1;
    const isDebilitatedMoon = moonT.rashiNumber === 8;
    const isDebilitatedMoonWithSaturn = isDebilitatedMoon && [1, 3, 7, 10].includes(satToMoonSignStep);
    if (isDebilitatedMoonWithSaturn) {
      healthText = `नीचस्थ चंद्रमा (वृश्चिक) पर शनि के प्रभाव से थकान, शीत-प्रकोप व मानसिक भारीपन रह सकता है; आज शांत दिनचर्या, पर्याप्त विश्राम, गुनगुना जल एवं उष्ण-सात्त्विक आहार लें। ${voice.healthTipHi.replace(/सहज ताजगी|ताजगी/gu, "संतुलित विश्राम")}`;
    } else if (isDebilitatedMoon) {
      healthText = `नीचस्थ चंद्रमा (वृश्चिक) होने से आज मानसिक संवेदनशीलता व थकान से बचने हेतु शांत दिनचर्या, पर्याप्त जल-सेवन एवं संतुलित विश्राम अपनाएं। ${voice.healthTipHi.replace(/सहज ताजगी|ताजगी/gu, "संतुलित विश्राम")}`;
    }
    if (jupT.isCombust) {
      wealthText = wealthText.replace(/गुरु[^।]*प्रबल/gu, "गुरु अस्त होने से मध्यम फलदायी").replace(/की\s+अस्त\s+होने\s+से\s+मध्यम\/संयमित\s+दृष्टि/gu, "की मध्यम/संयमित दृष्टि").replace(/शुभ पूर्ण दृष्टि/gu, "मध्यम/संयमित दृष्टि");
      educationText = educationText.replace(/गुरु[^।]*प्रबल/gu, "गुरु अस्त होने से मध्यम फलदायी").replace(/की\s+अस्त\s+होने\s+से\s+मध्यम\/संयमित\s+दृष्टि/gu, "की मध्यम/संयमित दृष्टि").replace(/शुभ पूर्ण दृष्टि/gu, "मध्यम/संयमित दृष्टि");
    }
    const combustNames = [
      marsT.isCombust ? "मंगल" : "",
      mercT.isCombust ? "बुध" : "",
      jupT.isCombust ? "गुरु" : "",
      venT.isCombust ? "शुक्र" : "",
      satT.isCombust ? "शनि" : ""
    ].filter(Boolean);
    if (combustNames.length > 0) {
      const cPat = new RegExp(`(${combustNames.join("|")})([^।]{0,28})(शुभ पूर्ण दृष्टि|पूर्ण दृष्टि से प्रबल)`, "gu");
      careerText = careerText.replace(cPat, "$1$2मध्यम/संयमित दृष्टि").replace(/की\s+अस्त\s+होने\s+से\s+मध्यम\/संयमित\s+दृष्टि/gu, "की मध्यम/संयमित दृष्टि");
      wealthText = wealthText.replace(cPat, "$1$2मध्यम/संयमित दृष्टि").replace(/की\s+अस्त\s+होने\s+से\s+मध्यम\/संयमित\s+दृष्टि/gu, "की मध्यम/संयमित दृष्टि");
      familyText = familyText.replace(cPat, "$1$2मध्यम/संयमित दृष्टि").replace(/की\s+अस्त\s+होने\s+से\s+मध्यम\/संयमित\s+दृष्टि/gu, "की मध्यम/संयमित दृष्टि");
    }
    careerText = fitHindiWordCountWindow(careerText, 40, 62, buildRashiUniqueCloserMap("career", rashiNum), 2);
    wealthText = fitHindiWordCountWindow(wealthText, 24, 28, buildRashiUniqueCloserMap("wealth", rashiNum));
    familyText = fitHindiWordCountWindow(familyText, 24, 28, buildRashiUniqueCloserMap("family", rashiNum));
    const conciseWealthSentenceHi = `${wealthText.split("।")[0].trim()}।`;
    const conciseFamilySentenceHi = `${familyText.split("।")[0].trim()}।`;
    const conciseHealthSentenceHi = elemClause.posterHealthSentenceHi;
    wealthFamilySummary = sanitizeVedicHindiText(
      `${conciseWealthSentenceHi} ${conciseFamilySentenceHi} ${conciseHealthSentenceHi}`
    );
    remedyText = getBhavaAndLordRemedyHi(effectiveScoreHouse, rashiMeta, cleanVoiceRemedyHi);
    doToday1 = elemClause.doMuhuratSentenceHi;
    doToday2 = elemClause.doDeityColorSentenceHi;
    dontToday2 = elemClause.dontRahuDishaSentenceHi;
  }
  let weeklyMeta;
  let monthlyMeta;
  let finalCareerScore = careerScore;
  let finalWealthScore = wealthScore;
  let finalFamilyScore = familyScore;
  let finalEducationScore = educationScore;
  let finalHealthScore = healthScore;
  let finalOverallScore = overallScore;
  let finalChandrabalStatusHi = chandrabalStatusHi;
  let finalTarabalNameHi = tarabalNameHi;
  let finalFavorableTime;
  let finalAuspiciousDirection;
  if (period === "weekly") {
    const wBundle = getWeeklyAstronomicalBundle(
      safeDate,
      ist,
      resolvedLocName,
      transitKundali,
      rawDayPanchang
    );
    const getRelHouse = (signNum) => (signNum - rashiNum + 12) % 12 + 1;
    const ordHi = (h) => formatHindiHouseOrdinal(h);
    const ordEn = (h) => formatEnglishHouseOrdinal(h);
    const wElementDirectionMap = {
      "अग्नि तत्व (Fire)": { hi: "पूर्व एवं ईशान कोण (East & North-East)", en: "East & North-East" },
      "पृथ्वी तत्व (Earth)": { hi: "दक्षिण एवं आग्नेय (South & South-East)", en: "South & South-East" },
      "वायु तत्व (Air)": { hi: "पश्चिम एवं वायव्य कोण (West & North-West)", en: "West & North-West" },
      "जल तत्व (Water)": { hi: "उत्तर एवं ईशान कोण (North & North-East)", en: "North & North-East" }
    };
    const wDir = wElementDirectionMap[rashiMeta.elementHi] || wElementDirectionMap["अग्नि तत्व (Fire)"];
    finalAuspiciousDirection = lang === "en" ? wDir.en : wDir.hi;
    const favDays = [];
    const medDays = [];
    const cautDays = [];
    let moonDayScoreSum = 0;
    wBundle.days.forEach((day) => {
      const mHouse = getRelHouse(day.moonSignNumber);
      if ([1, 7, 10, 11].includes(mHouse)) {
        favDays.push(day);
        moonDayScoreSum += 87;
      } else if ([2, 3, 6].includes(mHouse)) {
        favDays.push(day);
        moonDayScoreSum += mHouse === 2 ? 79 : 82;
      } else if ([5, 9].includes(mHouse)) {
        medDays.push(day);
        moonDayScoreSum += 76;
      } else if (mHouse === 4) {
        cautDays.push(day);
        moonDayScoreSum += 65;
      } else if (mHouse === 12) {
        cautDays.push(day);
        moonDayScoreSum += 63;
      } else {
        cautDays.push(day);
        moonDayScoreSum += 60;
      }
    });
    const avg7DayMoon = moonDayScoreSum / 7;
    const midPlanets = wBundle.midKundali.planets;
    const endPlanets = wBundle.endKundali.planets;
    const getMidT = (id) => midPlanets.find((p) => p.id === id) || planets[0];
    const getEndT = (id) => endPlanets.find((p) => p.id === id) || planets[0];
    const midSunH = getRelHouse(getMidT("sun").rashiNumber);
    const midMarsH = getRelHouse(getMidT("mars").rashiNumber);
    const midMercH = getRelHouse(getMidT("mercury").rashiNumber);
    const midJupH = getRelHouse(getMidT("jupiter").rashiNumber);
    const midVenH = getRelHouse(getMidT("venus").rashiNumber);
    const midSatH = getRelHouse(getMidT("saturn").rashiNumber);
    const midRahuH = getRelHouse(getMidT("rahu").rashiNumber);
    const midKetuH = getRelHouse(getMidT("ketu").rashiNumber);
    const wHouseBonus = (id, h) => {
      const fav = PARASHARI_GOCHAR_FAVORABLE[id]?.favorableHouses || [3, 6, 10, 11];
      if (fav.includes(h)) return 3.2;
      if ([1, 5, 9, 10, 11].includes(h)) return 1.2;
      if ([4, 8, 12].includes(h)) return -2.4;
      return -0.5;
    };
    const weekCoreAdj = wHouseBonus("jupiter", midJupH) * 1.1 + wHouseBonus("saturn", midSatH) * 0.9 + wHouseBonus("sun", midSunH) * 0.7 + wHouseBonus("mars", midMarsH) * 0.6 + wHouseBonus("venus", midVenH) * 0.5 + wHouseBonus("mercury", midMercH) * 0.5 + (isKarmeshRestrained ? -2.2 : 0.8);
    const clampW = (v) => Math.max(60, Math.min(90, Math.round(v)));
    finalCareerScore = clampW(
      avg7DayMoon + weekCoreAdj + (b10 - 28) * 0.35 + wHouseBonus(karmeshInfo.planetId, getRelHouse(getMidT(karmeshInfo.planetId).rashiNumber)) * 0.9
    );
    finalWealthScore = clampW(
      avg7DayMoon + weekCoreAdj + ((b2 + b11) / 2 - 28) * 0.35 + wHouseBonus(dhaneshInfo.planetId, getRelHouse(getMidT(dhaneshInfo.planetId).rashiNumber)) * 0.9 + 0.8
    );
    finalFamilyScore = clampW(
      avg7DayMoon + weekCoreAdj + ((b4 + b7) / 2 - 28) * 0.3 + wHouseBonus("venus", midVenH) * 0.7 + 0.5
    );
    finalEducationScore = clampW(
      avg7DayMoon + weekCoreAdj + ((b5 + b9) / 2 - 28) * 0.35 + wHouseBonus("mercury", midMercH) * 0.9 + 1
    );
    finalHealthScore = clampW(
      avg7DayMoon + weekCoreAdj + ((b1 + b6) / 2 - 28) * 0.3 + wHouseBonus(lagneshInfo.planetId, getRelHouse(getMidT(lagneshInfo.planetId).rashiNumber)) * 0.8 - (cautDays.length >= 3 ? 1.5 : 0)
    );
    finalOverallScore = clampW(
      (finalCareerScore + finalWealthScore + finalFamilyScore + finalEducationScore + finalHealthScore) / 5
    );
    const favorableDaysHi = favDays.length > 0 ? favDays.map((d) => `${d.weekdayHi} (${d.shortDateHi})`).join(", ") : medDays.map((d) => `${d.weekdayHi} (${d.shortDateHi})`).join(", ");
    const favorableDaysEn = favDays.length > 0 ? favDays.map((d) => `${d.weekdayEnShort} (${d.shortDateEn})`).join(", ") : medDays.map((d) => `${d.weekdayEnShort} (${d.shortDateEn})`).join(", ");
    const cautionDaysHi = cautDays.length > 0 ? cautDays.map((d) => `${d.weekdayHi} (${d.shortDateHi})`).join(", ") : "कोई गंभीर चंद्र-अवरोध नहीं (सामान्य संतुलन)";
    const cautionDaysEn = cautDays.length > 0 ? cautDays.map((d) => `${d.weekdayEnShort} (${d.shortDateEn})`).join(", ") : "No major Moon hurdle (balanced week)";
    const moderateDaysHi = medDays.length > 0 ? medDays.map((d) => `${d.weekdayHi} (${d.shortDateHi})`).join(", ") : "";
    const earlyBest = wBundle.days.slice(0, 2).some((d) => [1, 2, 3, 6, 7, 10, 11].includes(getRelHouse(d.moonSignNumber)));
    const midBest = wBundle.days.slice(2, 5).some((d) => [1, 2, 3, 6, 7, 10, 11].includes(getRelHouse(d.moonSignNumber)));
    const lateBest = wBundle.days.slice(5, 7).some((d) => [1, 2, 3, 6, 7, 10, 11].includes(getRelHouse(d.moonSignNumber)));
    const bestPhasePartsHi = [
      earlyBest ? "सप्ताह की शुरुआत" : "",
      midBest ? "सप्ताह का मध्य" : "",
      lateBest ? "सप्ताहांत" : ""
    ].filter(Boolean);
    const bestPhaseLabelHi = bestPhasePartsHi.length > 0 ? bestPhasePartsHi.join(" व ") : "संतुलित सप्ताह (धैर्य से लाभ)";
    const bestPhasePartsEn = [
      earlyBest ? "Early Week" : "",
      midBest ? "Mid-Week" : "",
      lateBest ? "Weekend" : ""
    ].filter(Boolean);
    const bestPhaseLabelEn = bestPhasePartsEn.length > 0 ? bestPhasePartsEn.join(" & ") : "Balanced Week";
    const earlyMoonH = getRelHouse(wBundle.days[0].moonSignNumber);
    const midMoonH = getRelHouse(wBundle.days[3].moonSignNumber);
    const endMoonH = getRelHouse(wBundle.days[6].moonSignNumber);
    const isSunShifting = sunT.rashiNumber !== getEndT("sun").rashiNumber;
    const isMercShifting = mercT.rashiNumber !== getEndT("mercury").rashiNumber;
    const isVenShifting = venT.rashiNumber !== getEndT("venus").rashiNumber;
    const isMarsShifting = marsT.rashiNumber !== getEndT("mars").rashiNumber;
    const shiftNotesHi = [
      isSunShifting ? `सूर्य (${sunT.rashiNameHi} → ${RASHI_META_LIST[getEndT("sun").rashiNumber - 1].nameHi})` : "",
      isMarsShifting ? `मंगल (${marsT.rashiNameHi} → ${RASHI_META_LIST[getEndT("mars").rashiNumber - 1].nameHi})` : "",
      isMercShifting ? `बुध (${mercT.rashiNameHi} → ${RASHI_META_LIST[getEndT("mercury").rashiNumber - 1].nameHi})` : "",
      isVenShifting ? `शुक्र (${venT.rashiNameHi} → ${RASHI_META_LIST[getEndT("venus").rashiNumber - 1].nameHi})` : ""
    ].filter(Boolean);
    const rahuWeekConjunctDays = wBundle.days.filter((d) => d.moonSignNumber === midRahuH || d.moonSignNumber === rahuT.rashiNumber);
    const ketuJupWeekNoteHi = midKetuH === midJupH ? ` केतु-गुरु युति (${ordHi(midJupH)} भाव) से अनुशासित शोध, गुरु-मार्गदर्शन और दिखावे से दूर रहकर ठोस कार्य करने पर लाभ होगा।` : "";
    const rahuMoonWeekNoteHi = rahuWeekConjunctDays.length > 0 ? ` राहु (${ordHi(midRahuH)} भाव) के ऊपर से चंद्र संचरण के दिनों में जल्दबाजी व भ्रम टालकर शांत निर्णय लें।` : "";
    weeklyMeta = {
      weekStartDateHi: wBundle.weekStartDateHi,
      weekEndDateHi: wBundle.weekEndDateHi,
      weekStartDateEn: wBundle.weekStartDateEn,
      weekEndDateEn: wBundle.weekEndDateEn,
      vikramSamvat: wBundle.vikramSamvat,
      shakaSamvat: wBundle.shakaSamvat,
      moonSignsTransitedHi: wBundle.moonSignsTransitedHi,
      moonSignsTransitedEn: wBundle.moonSignsTransitedEn,
      moonSignNumbersTransited: wBundle.moonSignNumbersTransited,
      planetarySummaryHi: wBundle.planetarySummaryHi,
      planetarySummaryEn: wBundle.planetarySummaryEn,
      favorableDaysHi,
      favorableDaysEn,
      cautionDaysHi,
      cautionDaysEn,
      favorableDayCount: favDays.length,
      cautionDayCount: cautDays.length,
      bestPhaseLabelHi,
      bestPhaseLabelEn
    };
    const wSatNoteEn = sadeSatiStatusHi.includes("प्रथम चरण") ? "Saturn Sade Sati (1st Phase)" : sadeSatiStatusHi.includes("मध्य चरण") ? "Saturn Sade Sati (Peak Phase)" : sadeSatiStatusHi.includes("अंतिम चरण") ? "Saturn Sade Sati (Final Phase)" : sadeSatiStatusHi.includes("ढैय्या") ? "Saturn Dhaiya" : "Balanced Saturn Transit";
    const isLagneshMoon = lagneshInfo.planetId === "moon";
    const wLagneshPhraseHi = isLagneshMoon ? `राशि स्वामी चंद्रमा के साप्ताहिक गोचर (${wBundle.moonSignsTransitedHi}) व योगकारक मंगल (${ordHi(midMarsH)} भाव)` : `राशि स्वामी ${lagneshInfo.nameHi} (${ordHi(getRelHouse(getMidT(lagneshInfo.planetId).rashiNumber))} भाव)`;
    const wLagneshPhraseEn = isLagneshMoon ? `sign lord Moon's weekly transit (${wBundle.moonSignsTransitedEn}) and Mars (${ordEn(midMarsH)} house)` : `sign lord ${lagneshInfo.nameEn} in your ${ordEn(getRelHouse(getMidT(lagneshInfo.planetId).rashiNumber))} house`;
    const wSaptameshRefHi = saptameshInfo.planetId === "moon" ? "सप्तमेश चंद्रमा की अनुकूलता" : `सप्तमेश ${saptameshInfo.nameHi} (${ordHi(getRelHouse(getMidT(saptameshInfo.planetId).rashiNumber))} भाव)`;
    const wSukheshClauseHi = sukheshInfo.planetId === "moon" ? `शुक्र (${ordHi(midVenH)} भाव) व सुखेश चंद्रमा की अनुकूलता` : sukheshInfo.planetId === "venus" ? `सुखेश शुक्र (${ordHi(midVenH)} भाव) व ${wSaptameshRefHi}` : `शुक्र (${ordHi(midVenH)} भाव) व सुखेश ${sukheshInfo.nameHi} (${ordHi(getRelHouse(getMidT(sukheshInfo.planetId).rashiNumber))} भाव)`;
    const wSukheshClauseEn = sukheshInfo.planetId === "moon" ? `Venus (${ordEn(midVenH)} house) and 4th lord Moon's favorable weekly transit` : sukheshInfo.planetId === "venus" ? `4th lord Venus (${ordEn(midVenH)} house) and 7th lord ${saptameshInfo.nameEn}` : `Venus (${ordEn(midVenH)} house) and 4th lord ${sukheshInfo.nameEn} (${ordEn(getRelHouse(getMidT(sukheshInfo.planetId).rashiNumber))} house)`;
    const wPanchameshClauseHi = panchameshInfo.planetId === "moon" ? `बुध (${ordHi(midMercH)} भाव) व पंचमेश चंद्रमा के शुभ गोचर` : panchameshInfo.planetId === "mercury" ? `पंचमेश बुध (${ordHi(midMercH)} भाव) व देवगुरु बृहस्पति (${ordHi(midJupH)} भाव)` : panchameshInfo.planetId === "jupiter" ? `बुध (${ordHi(midMercH)} भाव) व पंचमेश देवगुरु बृहस्पति (${ordHi(midJupH)} भाव)` : `बुध (${ordHi(midMercH)} भाव) व पंचमेश ${panchameshInfo.nameHi} (${ordHi(getRelHouse(getMidT(panchameshInfo.planetId).rashiNumber))} भाव)`;
    const isWeekKarmesh12th = karmeshInfo.planetId !== "moon" && karmeshT.houseFromRashi === 12;
    const isWeekKarmeshDebil = karmeshInfo.planetId !== "moon" && isKarmeshDebilitated;
    const isWeekKarmeshRestrained = isWeekKarmesh12th || isWeekKarmeshDebil;
    const wRestrainedReasonHi = isWeekKarmesh12th ? "विदेश व दूरस्थ संपर्कों, पर्दे के पीछे की योजना और सतत परिश्रम से लक्ष्य सधेंगे" : "धैर्यपूर्ण रणनीति, गहन शोध और सतत परिश्रम से लक्ष्य सधेंगे";
    const wRestrainedReasonEn = isWeekKarmesh12th ? "rewards foreign or distant contacts, behind-the-scenes strategy, and persistent effort rather than effortless luck" : "rewards patient strategy, thorough research, and persistent effort rather than effortless luck";
    const wKarmeshOpenHi = karmeshInfo.planetId === "moon" ? `सूर्य (${ordHi(midSunH)} भाव) और कर्मेश चंद्रमा के शुभ साप्ताहिक गोचर` : karmeshInfo.planetId === "sun" ? `कर्मेश सूर्य (${ordHi(midSunH)} भाव) और मंगल (${ordHi(midMarsH)} भाव)` : karmeshInfo.planetId === "mercury" ? `सूर्य (${ordHi(midSunH)} भाव) और मंगल (${ordHi(midMarsH)} भाव)` : `सूर्य (${ordHi(midSunH)} भाव) और कर्मेश ${karmeshInfo.nameHi} (${ordHi(getRelHouse(getMidT(karmeshInfo.planetId).rashiNumber))} भाव)`;
    const wKarmeshOpenEn = karmeshInfo.planetId === "moon" ? `Sun (${ordEn(midSunH)}) and 10th lord Moon's favorable weekly transit` : karmeshInfo.planetId === "sun" ? `10th lord Sun (${ordEn(midSunH)}) and Mars (${ordEn(midMarsH)})` : karmeshInfo.planetId === "mercury" ? `Sun (${ordEn(midSunH)}) and Mars (${ordEn(midMarsH)})` : `Sun (${ordEn(midSunH)}) and 10th lord ${karmeshInfo.nameEn} (${ordEn(getRelHouse(getMidT(karmeshInfo.planetId).rashiNumber))})`;
    const wMidMercLabelHi = karmeshInfo.planetId === "mercury" ? `कर्मेश बुध (${ordHi(midMercH)} भाव)` : `बुध (${ordHi(midMercH)} भाव)`;
    const wElemIdx = (rashiNum - 1) % 4;
    const wPoolIdx = (wElemIdx + rashiNum + lagneshInfo.planetId.charCodeAt(0) % 5) % 5;
    if (lang === "en") {
      finalChandrabalStatusHi = `Weekly Moon Path: ${wBundle.moonSignsTransitedEn} • Auspicious: ${favorableDaysEn}`;
      finalTarabalNameHi = `Best Phase: ${bestPhaseLabelEn}`;
      finalFavorableTime = `Favorable Days: ${favorableDaysEn}`;
      chandraGochar = `Weekly Moon Transit: During this 7-day cycle (${wBundle.weekStartDateEn} – ${wBundle.weekEndDateEn}), Moon moves across ${wBundle.moonSignsTransitedEn}. Best days for ${rashiMeta.nameEn}: ${favorableDaysEn}.${cautDays.length > 0 ? ` Exercise extra caution on ${cautionDaysEn}.` : ""}`;
      lagnaMentalText = `${voice.mentalIntroEn} As Moon progresses from your ${ordEn(earlyMoonH)} house in the early week to the ${ordEn(midMoonH)} mid-week and ${ordEn(endMoonH)} by weekend, while supported by ${wLagneshPhraseEn}, overall weekly positivity holds at ${finalOverallScore}%.`;
      transitImpactText = `7-Day Planetary Alignment (${wBundle.weekStartDateEn} to ${wBundle.weekEndDateEn}): ${wBundle.planetarySummaryEn}. Moon transits ${wBundle.moonSignsTransitedEn}. Saturn (${ordEn(midSatH)} house — ${wSatNoteEn}), Rahu (${ordEn(midRahuH)} house), and Ketu (${ordEn(midKetuH)} house) shape steady long-term momentum throughout the week.`;
      careerText = isWeekKarmeshRestrained ? `At the start of the week, 10th lord ${karmeshInfo.nameEn} (${ordEn(karmeshT.houseFromRashi)}${isWeekKarmeshDebil ? ", debilitated" : ""}) ${wRestrainedReasonEn}; by mid-week Sun (${ordEn(midSunH)}) and Mercury (${ordEn(midMercH)}) strengthen work reviews and ${voice.careerThemeEn.charAt(0).toLowerCase() + voice.careerThemeEn.slice(1)}` : `At the start of the week, ${wKarmeshOpenEn} activate career momentum; by mid-week Mercury (${ordEn(midMercH)}) sharpens key meetings and ${voice.careerThemeEn.charAt(0).toLowerCase() + voice.careerThemeEn.slice(1)}`;
      const wWealthPoolEn = [
        `Financial momentum stays constructive under Jupiter (${ordEn(midJupH)}) and Venus (${ordEn(midVenH)}) with ${b2} SAV bindus supporting your 2nd house. Channel key investments on ${favorableDaysEn}${cautDays.length > 0 ? ` and hold back from risky deals on ${cautionDaysEn}` : ""}.`,
        `Guided by your sign lord ${lagneshInfo.nameEn}, disciplined budgeting blends well with Jupiter (${ordEn(midJupH)}) and Venus (${ordEn(midVenH)}) this week (${b2} SAV bindus). Prioritize savings commitments on ${favorableDaysEn}${cautDays.length > 0 ? ` while staying conservative on ${cautionDaysEn}` : ""}.`,
        `Cash flow responds well to thoughtful planning as Jupiter (${ordEn(midJupH)}) and Venus (${ordEn(midVenH)}) align for ${rashiMeta.nameEn}. Finalize trade agreements on ${favorableDaysEn}${cautDays.length > 0 ? ` and sidestep impulsive spending on ${cautionDaysEn}` : ""}.`,
        `Steady liquidity builds across the week through Jupiter (${ordEn(midJupH)}) and Venus (${ordEn(midVenH)}), backed by ${b2} SAV bindus in the wealth sector. Execute financial milestones on ${favorableDaysEn}${cautDays.length > 0 ? ` rather than ${cautionDaysEn}` : ""}.`,
        `Balanced inflows accompany ${rashiMeta.nameEn} under Jupiter (${ordEn(midJupH)}) and Venus (${ordEn(midVenH)}) this week. Schedule major banking or savings steps on ${favorableDaysEn}${cautDays.length > 0 ? ` and avoid speculative trades on ${cautionDaysEn}` : ""}.`
      ];
      wealthText = wWealthPoolEn[wPoolIdx];
      const wFamilyThemeLowerEn = voice.familyThemeEn.charAt(0).toLowerCase() + voice.familyThemeEn.slice(1);
      const wFamilyPoolEn = [
        `Home life gains warmth as ${wSukheshClauseEn} guide domestic understanding across the week; ${wFamilyThemeLowerEn}`,
        `Patient listening strengthens kinship early on, while ${wSukheshClauseEn} bring joyful moments by the weekend; ${wFamilyThemeLowerEn}`,
        `With ${lagneshInfo.nameEn} shaping your temperament, ${wSukheshClauseEn} nurture mutual respect among relatives; ${wFamilyThemeLowerEn}`,
        `Shared family goals align smoothly as ${wSukheshClauseEn} soften mid-week busyness into weekend harmony; ${wFamilyThemeLowerEn}`,
        `Emotional clarity deepens at home through ${wSukheshClauseEn}, fostering peace with elders and loved ones; ${wFamilyThemeLowerEn}`
      ];
      familyText = wFamilyPoolEn[wPoolIdx];
      educationText = `This week offers structured academic progress for ${rashiMeta.nameEn}: Mercury (${ordEn(midMercH)}) and Jupiter (${ordEn(midJupH)}) support revisions and test preparation. ${voice.educationThemeEn}`;
      healthText = `Maintain steady energy across the entire week: with ${wLagneshPhraseEn}, prioritize sleep and light nutrition${cautDays.length > 0 ? `, especially slowing down on ${cautionDaysEn}` : ""}. ${voice.healthTipEn}`;
      wealthFamilySummary = `${wealthText} ${familyText}`;
      const wRemedyPoolEn = [
        `Weekly Remedy for ${rashiMeta.nameEn}: ${voice.remedyActionEn} Honor ${lagneshInfo.nameEn} with calm discipline during ${bestPhaseLabelEn}.`,
        `Shastric Practice: ${voice.remedyActionEn} Dedicate a few quiet minutes to "${rashiMeta.beejMantra}" across ${bestPhaseLabelEn}.`,
        `Auspicious Weekly Observance: ${voice.remedyActionEn} Pair this with modest charity and mindful speech throughout the week.`,
        `Elemental Balance Remedy: ${voice.remedyActionEn} Offer sincere gratitude to ${rashiMeta.ishtaDevtaEn || rashiMeta.nameEn}'s presiding grace during ${bestPhaseLabelEn}.`,
        `Vedic Spiritual Tip: ${voice.remedyActionEn} Keep a sattvic morning routine aligned with your lord ${lagneshInfo.nameEn}.`
      ];
      remedyText = wRemedyPoolEn[wPoolIdx];
      doToday1 = `Schedule priority negotiations and career milestones on ${favorableDaysEn}.`;
      doToday2 = `Wear ${rashiMeta.luckyColorsEn[0]} or ${rashiMeta.luckyColorsEn[1]} attire this week and chant "${rashiMeta.beejMantra}" consistently.`;
      dontToday1 = cautDays.length > 0 ? `Avoid high-risk investments, heated arguments, or hasty travel on ${cautionDaysEn}.` : `Avoid overcommitting time or finances without verifying details mid-week.`;
      dontToday2 = `Do not skip rest or regular routines during busy mid-week transitions.`;
    } else {
      finalChandrabalStatusHi = [
        `शुभ दिन: ${favorableDaysHi}`,
        moderateDaysHi ? `मध्यम दिन: ${moderateDaysHi}` : "",
        cautDays.length > 0 ? `सावधानी: ${cautionDaysHi}` : ""
      ].filter(Boolean).join(" • ");
      finalTarabalNameHi = `श्रेष्ठ चरण: ${bestPhaseLabelHi} (${wBundle.moonSignsTransitedHi})`;
      finalFavorableTime = `शुभ दिवस: ${favorableDaysHi}`;
      const weeklyMoonPathWithHousesHi = wBundle.moonSignNumbersTransited.map((sNum) => `${RASHI_META_LIST[(sNum - 1 + 12) % 12].nameHi} (${ordHi(getRelHouse(sNum))})`).join(" → ");
      const weeklyIntroClean = voice.mentalIntroHi.replace(/(?<![\u0900-\u097F])आज(?![\u0900-\u097F])/gu, "इस सप्ताह");
      chandraGochar = `साप्ताहिक चन्द्र गोचर (${wBundle.weekStartDateHi} से ${wBundle.weekEndDateHi}): चन्द्रमा सप्ताह भर में ${weeklyMoonPathWithHousesHi} भाव में संचरण करेंगे। ${finalChandrabalStatusHi}।`;
      lagnaMentalText = `${weeklyIntroClean} सप्ताह भर में चन्द्रमा ${weeklyMoonPathWithHousesHi} भावों से गुजरेंगे, जबकि ${wLagneshPhraseHi} के प्रभाव से इस पूरे सप्ताह आपकी समग्र शुभता ${finalOverallScore}% रहेगी।`;
      transitImpactText = `साप्ताहिक नवग्रह गोचर (${wBundle.weekStartDateHi} – ${wBundle.weekEndDateHi}): ${wBundle.planetarySummaryHi}।${shiftNotesHi.length > 0 ? ` इस सप्ताह विशेष राशि परिवर्तन — ${shiftNotesHi.join(", ")}।` : ""} ${rashiMeta.nameHi} से शनि (${ordHi(midSatH)} भाव — ${sadeSatiStatusHi}), राहु (${ordHi(midRahuH)} भाव) व केतु (${ordHi(midKetuH)} भाव) पूरे सप्ताह की दिशा तय कर रहे हैं।${ketuJupWeekNoteHi}${rahuMoonWeekNoteHi}`;
      const wCareerThemeClean = voice.careerThemeHi.replace(/(?<![\u0900-\u097F])आज(?![\u0900-\u097F])/gu, "इस सप्ताह").replace(/[।.]$/, "");
      careerText = isWeekKarmeshRestrained ? `सप्ताह की शुरुआत में कर्मेश ${karmeshInfo.nameHi} (${ordHi(karmeshT.houseFromRashi)} भाव${isWeekKarmeshDebil ? ", नीचस्थ" : ""}) की स्थिति के कारण सीधी सहजता के बजाय ${wRestrainedReasonHi}; सप्ताह के मध्य में सूर्य (${ordHi(midSunH)} भाव) व ${wMidMercLabelHi} के सहयोग से ${wCareerThemeClean} तथा सप्ताहांत तक लंबित कार्य व्यवस्थित हो जाएंगे।` : `सप्ताह की शुरुआत में ${wKarmeshOpenHi} के प्रभाव से नई कार्ययोजना बनेगी; सप्ताह के मध्य में ${wMidMercLabelHi} संवाद व मीटिंग को गति देंगे, जिससे ${wCareerThemeClean} और सप्ताहांत तक ठोस प्रगति दिखेगी।`;
      const wWealthThemeClean = voice.wealthThemeHi.replace(/(?<![\u0900-\u097F])आज(?![\u0900-\u097F])/gu, "इस सप्ताह").replace(/[।.]$/, "");
      const wCautionWealthHi = cautDays.length > 0 ? `, जबकि ${cautionDaysHi} को जोखिम भरे सौदे व उधार टालें` : "";
      const wDhaneshLabelHi = dhaneshInfo.planetId === "moon" ? `धनेश चंद्रमा (सप्ताह भर ${weeklyMoonPathWithHousesHi} भाव में संचरणशील)` : `धनेश ${dhaneshInfo.nameHi} (${ordHi(getRelHouse(getMidT(dhaneshInfo.planetId).rashiNumber))} भाव)`;
      const wWealthPoolHi = [
        `${wDhaneshLabelHi} और देवगुरु बृहस्पति (${ordHi(midJupH)} भाव) के समन्वय से ${rashiMeta.nameHi} जातकों की आर्थिक पहल को नई गति मिलेगी। ${wWealthThemeClean}; बड़े निवेश हेतु ${favorableDaysHi} श्रेष्ठ रहेंगे${wCautionWealthHi}।`,
        `${wDhaneshLabelHi} व शुक्र (${ordHi(midVenH)} भाव) के प्रभाव से संचित कोष और स्थायी संपत्ति के प्रयास सुदृढ़ होंगे। ${wWealthThemeClean}; नए अनुबंध व खरीदारी ${favorableDaysHi} पर संपन्न करना लाभकारी रहेगा${wCautionWealthHi}।`,
        `देवगुरु बृहस्पति (${ordHi(midJupH)} भाव) और ${wDhaneshLabelHi} के अनुकूल संयोग से ${rashiMeta.nameHi} राशि के लिए आय के नए सूत्र सक्रिय होंगे। ${wWealthThemeClean}; प्रमुख लेन-देन ${favorableDaysHi} पर संपन्न करें${wCautionWealthHi}।`,
        `${wDhaneshLabelHi} के मार्गदर्शन में बृहस्पति (${ordHi(midJupH)} भाव) व शुक्र (${ordHi(midVenH)} भाव) पारिवारिक वित्त को मजबूत संबल देंगे। ${wWealthThemeClean}; बचत एवं धन-नियोजन हेतु ${favorableDaysHi} अनुकूल रहेंगे${wCautionWealthHi}।`,
        `${wDhaneshLabelHi} और बृहस्पति (${ordHi(midJupH)} भाव) के गोचर से अवरुद्ध भुगतान व व्यापारिक आवक में सुधार के योग बन रहे हैं। ${wWealthThemeClean}; महत्वपूर्ण आर्थिक निर्णय ${favorableDaysHi} पर लें${wCautionWealthHi}।`
      ];
      wealthText = wWealthPoolHi[wPoolIdx];
      const wFamilyThemeClean = voice.familyThemeHi.replace(/(?<![\u0900-\u097F])आज(?![\u0900-\u097F])/gu, "इस सप्ताह").replace(/[।.]$/, "");
      const wFamilyPoolHi = [
        `परिजनों के साथ उत्साहपूर्ण संवाद और ${wSukheshClauseHi} के शुभ प्रभाव से घर में नई उमंग रहेगी। ${wFamilyThemeClean}।`,
        `${wSukheshClauseHi} की स्थिरता गृहस्थ दायित्वों को सहज बनाएगी और बड़ों के आशीर्वाद से मन प्रसन्न रहेगा। ${wFamilyThemeClean}।`,
        `सौम्य बातचीत व आपसी तालमेल से रिश्तों में मिठास आएगी, क्योंकि ${wSukheshClauseHi} इस सप्ताह सहयोगी भूमिका में हैं। ${wFamilyThemeClean}।`,
        `आत्मीय संवेदनशीलता और ${wSukheshClauseHi} के अनुकूल संयोग से सप्ताहांत तक पारिवारिक वातावरण अत्यंत सुखद बनेगा। ${wFamilyThemeClean}।`,
        `राशि स्वामी ${lagneshInfo.nameHi} व ${wSukheshClauseHi} के समन्वय से कुटुम्ब में सद्भाव और परस्पर विश्वास गहरा होगा। ${wFamilyThemeClean}।`
      ];
      familyText = wFamilyPoolHi[wPoolIdx];
      const wEduThemeClean = voice.educationThemeHi.replace(/(?<![\u0900-\u097F])आज(?![\u0900-\u097F])/gu, "इस सप्ताह").replace(/[।.]$/, "");
      educationText = `इस पूरे सप्ताह ${wPanchameshClauseHi} के सहयोग से विद्यार्थियों की एकाग्रता बनी रहेगी; ${wEduThemeClean}।`;
      const wHealthClean = voice.healthTipHi.replace(/(?<![\u0900-\u097F])आज(?![\u0900-\u097F])/gu, "इस सप्ताह").replace(/[।.]$/, "");
      healthText = `${wLagneshPhraseHi} के अनुरूप इस पूरे सप्ताह नियमित योग, संतुलित आहार और समयबद्ध विश्राम रखें${cautDays.length > 0 ? `, विशेषतः ${cautionDaysHi} को अधिक भागदौड़ व मानसिक तनाव से दूरी रखें` : ""}; ${wHealthClean}।`;
      wealthFamilySummary = `${wealthText.split("।")[0].trim()}। ${familyText.split("।")[0].trim()}। स्वास्थ्य: ${wHealthClean}।`;
      const wRemedyActionClean = voice.remedyActionHi.replace(/[।.]$/, "");
      const wRemedyPoolHi = [
        `शास्त्रीय साप्ताहिक उपाय: ${wRemedyActionClean}। लग्नेश ${lagneshInfo.nameHi} की प्रसन्नता हेतु प्रातः सूर्योदय के समय ${rashiMeta.ishtaDevtaHi} का ध्यान करें।`,
        `शुभत्व संवर्धन उपाय: ${wRemedyActionClean}। इस सप्ताह कम से कम एक बार गौ-माता या जरूरतमंद को सात्त्विक अन्न अर्पित करें।`,
        `साप्ताहिक आध्यात्मिक नियम: ${wRemedyActionClean}। वाणी में संयम रखते हुए नियमित "${rashiMeta.beejMantra}" का मानसिक जप करें।`,
        `कल्याणकारी वैदिक उपाय: ${wRemedyActionClean}। संध्या समय देवालय या गृह-मंदिर में घी का दीपक प्रज्वलित कर ${rashiMeta.ishtaDevtaHi} को प्रणाम करें।`,
        `राशि-विशेष साप्ताहिक साधना: ${wRemedyActionClean}। पूरे सप्ताह शुद्ध दिनचर्या के साथ बड़ों का आशीर्वाद व ${lagneshInfo.nameHi} के अनुकूल दान करें।`
      ];
      remedyText = wRemedyPoolHi[wPoolIdx];
      doToday1 = `सप्ताह की शुरुआत में ही प्राथमिक लक्ष्यों की सूची बनाएं और महत्वपूर्ण व्यावसायिक व पारिवारिक निर्णय शुभ दिवसों (${favorableDaysHi}) पर संपन्न करें।`;
      doToday2 = `इस पूरे सप्ताह ${rashiMeta.ishtaDevtaHi} का स्मरण करें तथा शुभता हेतु ${rashiMeta.luckyColorsHi[ist.day % rashiMeta.luckyColorsHi.length]} रंग का अधिक उपयोग करें।`;
      dontToday1 = cautDays.length > 0 ? `विशेषतः ${cautionDaysHi} को किसी नए वित्तीय जोखिम, अनावश्यक वाद-विवाद और जल्दबाजी भरी यात्रा से दूरी बनाए रखें।` : `सप्ताह के मध्य में बिना पूर्ण जांच के किसी बड़े आर्थिक अनुबंध या विवाद में न उलझें।`;
      dontToday2 = `${voice.dontTaskHi.replace(/(?<![\u0900-\u097F])आज(?![\u0900-\u097F])/gu, "इस सप्ताह")} कार्यभार के बीच अपनी रात्रि-निद्रा की अनदेखी न करें।`;
      chandraGochar = sanitizeWeeklyMonthlyHindiText(chandraGochar, "weekly");
      lagnaMentalText = sanitizeWeeklyMonthlyHindiText(lagnaMentalText, "weekly");
      transitImpactText = sanitizeWeeklyMonthlyHindiText(transitImpactText, "weekly");
      careerText = sanitizeWeeklyMonthlyHindiText(careerText, "weekly");
      wealthText = sanitizeWeeklyMonthlyHindiText(wealthText, "weekly");
      familyText = sanitizeWeeklyMonthlyHindiText(familyText, "weekly");
      wealthFamilySummary = sanitizeWeeklyMonthlyHindiText(wealthFamilySummary, "weekly");
      educationText = sanitizeWeeklyMonthlyHindiText(educationText, "weekly");
      healthText = sanitizeWeeklyMonthlyHindiText(healthText, "weekly");
      remedyText = sanitizeWeeklyMonthlyHindiText(remedyText, "weekly");
      doToday1 = sanitizeWeeklyMonthlyHindiText(doToday1, "weekly");
      doToday2 = sanitizeWeeklyMonthlyHindiText(doToday2, "weekly");
      dontToday1 = sanitizeWeeklyMonthlyHindiText(dontToday1, "weekly");
      dontToday2 = sanitizeWeeklyMonthlyHindiText(dontToday2, "weekly");
    }
  } else if (period === "monthly") {
    const mBundle = getMonthlyAstronomicalBundle(ist, resolvedLocName, rawDayPanchang);
    const getRelHouse = (signNum) => (signNum - rashiNum + 12) % 12 + 1;
    const ordHi = (h) => formatHindiHouseOrdinal(h);
    const ordEn = (h) => formatEnglishHouseOrdinal(h);
    const mElementDirectionMap = {
      "अग्नि तत्व (Fire)": { hi: "पूर्व एवं ईशान कोण (East & North-East)", en: "East & North-East" },
      "पृथ्वी तत्व (Earth)": { hi: "दक्षिण एवं आग्नेय (South & South-East)", en: "South & South-East" },
      "वायु तत्व (Air)": { hi: "पश्चिम एवं वायव्य कोण (West & North-West)", en: "West & North-West" },
      "जल तत्व (Water)": { hi: "उत्तर एवं ईशान कोण (North & North-East)", en: "North & North-East" }
    };
    const mDir = mElementDirectionMap[rashiMeta.elementHi] || mElementDirectionMap["अग्नि तत्व (Fire)"];
    finalAuspiciousDirection = lang === "en" ? mDir.en : mDir.hi;
    const getP = (k, id) => k.planets.find((p) => p.id === id) || k.planets[0];
    const startSunP = getP(mBundle.startKundali, "sun");
    const endSunP = getP(mBundle.endKundali, "sun");
    const midMarsP = getP(mBundle.midKundali, "mars");
    const midMercP = getP(mBundle.midKundali, "mercury");
    const midVenP = getP(mBundle.midKundali, "venus");
    const midJupP = getP(mBundle.midKundali, "jupiter");
    const midSatP = getP(mBundle.midKundali, "saturn");
    const midRahuP = getP(mBundle.midKundali, "rahu");
    const midKetuP = getP(mBundle.midKundali, "ketu");
    const startSunH = getRelHouse(startSunP.rashiNumber);
    const endSunH = getRelHouse(endSunP.rashiNumber);
    const midMarsH = getRelHouse(midMarsP.rashiNumber);
    const midMercH = getRelHouse(midMercP.rashiNumber);
    const midVenH = getRelHouse(midVenP.rashiNumber);
    const midJupH = getRelHouse(midJupP.rashiNumber);
    const midSatH = getRelHouse(midSatP.rashiNumber);
    const midRahuH = getRelHouse(midRahuP.rashiNumber);
    const midKetuH = getRelHouse(midKetuP.rashiNumber);
    const mHouseWeight = (id, h, signNum) => {
      const rule = PARASHARI_GOCHAR_FAVORABLE[id];
      const fav = rule ? rule.favorableHouses : [3, 6, 10, 11];
      let score = fav.includes(h) ? 10 : [1, 5, 9, 10, 11].includes(h) ? 4 : [4, 8, 12].includes(h) ? -8 : -2;
      if (PLANET_EXALTED_SIGN[id] === signNum) score += 4;
      else if (PLANET_OWN_SIGNS[id]?.includes(signNum)) score += 3;
      else if (PLANET_DEBILITATED_SIGN[id] === signNum) score -= 4;
      return score;
    };
    const jupW = mHouseWeight("jupiter", midJupH, midJupP.rashiNumber);
    const satW = mHouseWeight("saturn", midSatH, midSatP.rashiNumber);
    const sunW = (mHouseWeight("sun", startSunH, startSunP.rashiNumber) + mHouseWeight("sun", endSunH, endSunP.rashiNumber)) / 2;
    const marsW = mHouseWeight("mars", midMarsH, midMarsP.rashiNumber);
    const mercW = mHouseWeight("mercury", midMercH, midMercP.rashiNumber);
    const venW = mHouseWeight("venus", midVenH, midVenP.rashiNumber);
    const rahuW = mHouseWeight("rahu", midRahuH, midRahuP.rashiNumber);
    const ketuW = mHouseWeight("ketu", midKetuH, midKetuP.rashiNumber);
    const karmeshMidP = getP(mBundle.midKundali, karmeshInfo.planetId);
    const karmeshMidH = getRelHouse(karmeshMidP.rashiNumber);
    const isMonthKarmesh12th = karmeshInfo.planetId !== "moon" && karmeshMidH === 12;
    const isMonthKarmeshDebil = karmeshInfo.planetId !== "moon" && PLANET_DEBILITATED_SIGN[karmeshInfo.planetId] === karmeshMidP.rashiNumber;
    const isMonthKarmeshRestrained = isMonthKarmesh12th || isMonthKarmeshDebil;
    const dhaneshMidP = getP(mBundle.midKundali, dhaneshInfo.planetId);
    const lagneshMidP = getP(mBundle.midKundali, lagneshInfo.planetId);
    const panchameshMidP = getP(mBundle.midKundali, panchameshInfo.planetId);
    const sukheshMidP = getP(mBundle.midKundali, sukheshInfo.planetId);
    const saptameshMidP = getP(mBundle.midKundali, saptameshInfo.planetId);
    const mLordWeight = (planetId, pObj) => {
      if (planetId === "moon") return (jupW + venW) * 0.5;
      return mHouseWeight(planetId, getRelHouse(pObj.rashiNumber), pObj.rashiNumber);
    };
    const clampM = (v) => Math.max(60, Math.min(90, Math.round(v)));
    const monthlyMacro = jupW * 0.55 + satW * 0.45 + sunW * 0.35 + (rahuW + ketuW) * 0.2;
    finalCareerScore = clampM(
      75 + monthlyMacro + sunW * 0.35 + satW * 0.25 + marsW * 0.25 + mLordWeight(karmeshInfo.planetId, karmeshMidP) * 0.35 + (b10 - 28) * 0.35 - (isMonthKarmeshRestrained ? 4 : 0)
    );
    finalWealthScore = clampM(
      75 + monthlyMacro + jupW * 0.35 + venW * 0.3 + mLordWeight(dhaneshInfo.planetId, dhaneshMidP) * 0.3 + ((b2 + b11) / 2 - 28) * 0.35
    );
    finalFamilyScore = clampM(
      75 + monthlyMacro + venW * 0.4 + jupW * 0.25 + mLordWeight(sukheshInfo.planetId, sukheshMidP) * 0.25 + mLordWeight(saptameshInfo.planetId, saptameshMidP) * 0.2 + ((b4 + b7) / 2 - 28) * 0.3
    );
    finalEducationScore = clampM(
      75 + monthlyMacro + mercW * 0.45 + jupW * 0.35 + mLordWeight(panchameshInfo.planetId, panchameshMidP) * 0.3 + ((b5 + b9) / 2 - 28) * 0.35
    );
    const mLagneshScoreWeight = lagneshInfo.planetId === "moon" ? marsW * 0.35 : mLordWeight(lagneshInfo.planetId, lagneshMidP) * 0.35;
    finalHealthScore = clampM(
      75 + monthlyMacro + sunW * 0.25 + marsW * 0.25 + satW * 0.25 + mLagneshScoreWeight + ((b1 + b6) / 2 - 28) * 0.35
    );
    finalOverallScore = clampM(
      (finalCareerScore + finalWealthScore + finalFamilyScore + finalEducationScore + finalHealthScore) / 5
    );
    const monthSadeSatiHi = midSatH === 12 ? "शनि साढ़ेसाती (प्रथम चरण)" : midSatH === 1 ? "शनि साढ़ेसाती (मध्य चरण)" : midSatH === 2 ? "शनि साढ़ेसाती (अंतिम चरण)" : midSatH === 4 || midSatH === 8 ? "शनि ढैय्या प्रभाव" : "शनि गोचर संतुलित";
    const monthSadeSatiEn = midSatH === 12 ? "Sade Sati (1st Phase)" : midSatH === 1 ? "Sade Sati (Peak Phase)" : midSatH === 2 ? "Sade Sati (Final Phase)" : midSatH === 4 || midSatH === 8 ? "Shani Dhaiya" : "Balanced Saturn Transit";
    monthlyMeta = {
      gregorianMonthYearHi: mBundle.gregorianMonthYearHi,
      gregorianMonthYearEn: mBundle.gregorianMonthYearEn,
      hinduLunarMonthsHi: mBundle.hinduLunarMonthsHi,
      hinduLunarMonthsEn: mBundle.hinduLunarMonthsEn,
      vikramSamvat: mBundle.vikramSamvat,
      shakaSamvat: mBundle.shakaSamvat,
      sankrantiSummaryHi: mBundle.sankrantiSummaryHi,
      sankrantiSummaryEn: mBundle.sankrantiSummaryEn,
      planetarySummaryHi: mBundle.planetarySummaryHi,
      planetarySummaryEn: mBundle.planetarySummaryEn,
      pakshaWindowHighlightHi: mBundle.pakshaWindowHighlightHi,
      pakshaWindowHighlightEn: mBundle.pakshaWindowHighlightEn
    };
    const startSunSignMeta = RASHI_META_LIST[(startSunP.rashiNumber - 1 + 12) % 12];
    const endSunSignMeta = RASHI_META_LIST[(endSunP.rashiNumber - 1 + 12) % 12];
    const sunShiftPhraseHi = mBundle.sankrantiDay ? `पूर्वार्ध में ${startSunSignMeta.nameHi} (${ordHi(startSunH)} भाव) व ${mBundle.sankrantiDay} तारीख के बाद ${endSunSignMeta.nameHi} (${ordHi(endSunH)} भाव)` : `${startSunSignMeta.nameHi} (${ordHi(startSunH)} भाव)`;
    const sunShiftPhraseEn = mBundle.sankrantiDay ? `${startSunSignMeta.nameEn} (${ordEn(startSunH)} house) in the first half, entering ${endSunSignMeta.nameEn} (${ordEn(endSunH)} house) after ${ENGLISH_MONTH_SHORT[ist.month - 1]} ${mBundle.sankrantiDay}` : `${startSunSignMeta.nameEn} (${ordEn(startSunH)} house)`;
    const ketuJupMonthlyHi = midKetuH === midJupH ? ` केतु-गुरु युति (${ordHi(midJupH)} भाव) के कारण इस मास दिखावे के बजाय गहन शोध, नीतिगत निर्णय और गुरुजनों के परामर्श से विशेष लाभ होगा।` : "";
    const rahuMonthlyAxisHi = ` राहु (${ordHi(midRahuH)} भाव) महत्वाकांक्षा को विस्तार देंगे तथा केतु (${ordHi(midKetuH)} भाव) संतुलन बनाएंगे।`;
    const isMonthlyLagneshMoon = lagneshInfo.planetId === "moon";
    const mLagneshPhraseHi = isMonthlyLagneshMoon ? `राशि स्वामी चंद्रमा की अनुकूलता व योगकारक मंगल (${ordHi(midMarsH)} भाव)` : `राशि स्वामी ${lagneshInfo.nameHi} (${ordHi(getRelHouse(lagneshMidP.rashiNumber))} भाव)`;
    const mLagneshPhraseEn = isMonthlyLagneshMoon ? `sign lord Moon's favorable influence and Yogakaraka Mars (${ordEn(midMarsH)} house)` : `sign lord ${lagneshInfo.nameEn} (${ordEn(getRelHouse(lagneshMidP.rashiNumber))} house)`;
    const mMentalPlanetClauseHi = lagneshInfo.planetId === "jupiter" ? `राशि स्वामी देवगुरु बृहस्पति (${ordHi(midJupH)} भाव) एवं शनि (${ordHi(midSatH)} भाव)` : `देवगुरु बृहस्पति (${ordHi(midJupH)} भाव) एवं ${mLagneshPhraseHi}`;
    const mMentalPlanetClauseEn = lagneshInfo.planetId === "jupiter" ? `sign lord Jupiter in your ${ordEn(midJupH)} house and Saturn in your ${ordEn(midSatH)} house (${monthSadeSatiEn})` : lagneshInfo.planetId === "saturn" ? `Jupiter in your ${ordEn(midJupH)} house and sign lord Saturn in your ${ordEn(midSatH)} house (${monthSadeSatiEn})` : `Jupiter in your ${ordEn(midJupH)} house, ${mLagneshPhraseEn}, and Saturn in your ${ordEn(midSatH)} house (${monthSadeSatiEn})`;
    const mDhaneshClauseHi = dhaneshInfo.planetId === "moon" ? `देवगुरु बृहस्पति (${ordHi(midJupH)} भाव), शुक्र (${ordHi(midVenH)} भाव) एवं धनेश चंद्रमा के शुभ गोचर` : dhaneshInfo.planetId === "venus" ? `देवगुरु बृहस्पति (${ordHi(midJupH)} भाव) एवं धनेश शुक्र (${ordHi(midVenH)} भाव)` : dhaneshInfo.planetId === "jupiter" ? `धनेश देवगुरु बृहस्पति (${ordHi(midJupH)} भाव) एवं शुक्र (${ordHi(midVenH)} भाव)` : `देवगुरु बृहस्पति (${ordHi(midJupH)} भाव), शुक्र (${ordHi(midVenH)} भाव) एवं धनेश ${dhaneshInfo.nameHi} (${ordHi(getRelHouse(dhaneshMidP.rashiNumber))} भाव)`;
    const mDhaneshClauseEn = dhaneshInfo.planetId === "moon" ? `Jupiter (${ordEn(midJupH)} house), Venus (${ordEn(midVenH)} house), and 2nd lord Moon's favorable transit` : dhaneshInfo.planetId === "venus" ? `Jupiter (${ordEn(midJupH)} house) and 2nd lord Venus (${ordEn(midVenH)} house)` : dhaneshInfo.planetId === "jupiter" ? `2nd lord Jupiter (${ordEn(midJupH)} house) and Venus (${ordEn(midVenH)} house)` : `Jupiter (${ordEn(midJupH)} house), Venus (${ordEn(midVenH)} house), and 2nd lord ${dhaneshInfo.nameEn} (${ordEn(getRelHouse(dhaneshMidP.rashiNumber))} house)`;
    const mSaptameshRefHi = saptameshInfo.planetId === "moon" ? "सप्तमेश चंद्रमा की अनुकूलता" : `सप्तमेश ${saptameshInfo.nameHi} (${ordHi(getRelHouse(saptameshMidP.rashiNumber))} भाव)`;
    const mSukheshClauseHi = sukheshInfo.planetId === "moon" ? `शुक्र (${ordHi(midVenH)} भाव) व सुखेश चंद्रमा की अनुकूलता` : sukheshInfo.planetId === "venus" ? `सुखेश शुक्र (${ordHi(midVenH)} भाव) व ${mSaptameshRefHi}` : `शुक्र (${ordHi(midVenH)} भाव) व सुखेश ${sukheshInfo.nameHi} (${ordHi(getRelHouse(sukheshMidP.rashiNumber))} भाव)`;
    const mSukheshClauseEn = sukheshInfo.planetId === "moon" ? `Venus (${ordEn(midVenH)} house) and 4th lord Moon's favorable influence` : sukheshInfo.planetId === "venus" ? `4th lord Venus (${ordEn(midVenH)} house) and 7th lord ${saptameshInfo.nameEn}` : `Venus (${ordEn(midVenH)} house) and 4th lord ${sukheshInfo.nameEn} (${ordEn(getRelHouse(sukheshMidP.rashiNumber))} house)`;
    const mPanchameshClauseHi = panchameshInfo.planetId === "moon" ? `बुध (${ordHi(midMercH)} भाव) व पंचमेश चंद्रमा के शुभ गोचर` : panchameshInfo.planetId === "mercury" ? `पंचमेश बुध (${ordHi(midMercH)} भाव) व देवगुरु बृहस्पति (${ordHi(midJupH)} भाव)` : panchameshInfo.planetId === "jupiter" ? `बुध (${ordHi(midMercH)} भाव) व पंचमेश देवगुरु बृहस्पति (${ordHi(midJupH)} भाव)` : `बुध (${ordHi(midMercH)} भाव) व पंचमेश ${panchameshInfo.nameHi} (${ordHi(getRelHouse(panchameshMidP.rashiNumber))} भाव)`;
    const mHealthPlanetClauseHi = lagneshInfo.planetId === "saturn" ? `राशि स्वामी शनि देव (${ordHi(midSatH)} भाव)` : `${mLagneshPhraseHi} व शनि (${ordHi(midSatH)} भाव)`;
    const mHealthPlanetClauseEn = lagneshInfo.planetId === "saturn" ? `sign lord Saturn (${ordEn(midSatH)} house)` : `${mLagneshPhraseEn} and Saturn (${ordEn(midSatH)} house)`;
    const mRestrainedReasonHi = isMonthKarmesh12th ? "विदेश व दूरस्थ संपर्कों, गहन शोध और पृष्ठभूमि के सतत परिश्रम से प्रगति होगी" : "धैर्यपूर्ण कार्यनीति, गहन शोध और सतत परिश्रम से प्रगति होगी";
    const mRestrainedReasonEn = isMonthKarmesh12th ? "rewards foreign or distant contacts, patient research, and behind-the-scenes execution over quick ease" : "rewards patient strategy, deep research, and persistent effort over effortless ease";
    const mElemIdx = (rashiNum - 1) % 4;
    const mPoolIdx = (mElemIdx * 2 + rashiNum + lagneshInfo.planetId.charCodeAt(0) % 5) % 5;
    if (lang === "en") {
      finalChandrabalStatusHi = `Jupiter (${ordEn(midJupH)}) • Saturn (${ordEn(midSatH)}) • ${mBundle.sankrantiSummaryEn}`;
      finalTarabalNameHi = `Monthly Window: ${mBundle.pakshaWindowHighlightEn}`;
      finalFavorableTime = mBundle.pakshaWindowHighlightEn;
      chandraGochar = `Monthly Planetary Position (${mBundle.gregorianMonthYearEn}): Guided by Sun (${sunShiftPhraseEn}), Jupiter (${ordEn(midJupH)} house), Saturn (${ordEn(midSatH)} house), and Mars (${ordEn(midMarsH)} house).`;
      lagnaMentalText = `${voice.mentalIntroEn} Throughout ${mBundle.gregorianMonthYearEn}, ${mMentalPlanetClauseEn} shape inner resolve; in the first half Sun supports ${ordEn(startSunH)} house matters before shifting to your ${ordEn(endSunH)} house, yielding an overall monthly rating of ${finalOverallScore}%.`;
      transitImpactText = `Monthly Planetary Transits (${mBundle.gregorianMonthYearEn} • ${mBundle.hinduLunarMonthsEn}): ${mBundle.planetarySummaryEn}. ${mBundle.sankrantiSummaryEn}. For ${rashiMeta.nameEn}, Jupiter (${ordEn(midJupH)}), Saturn (${ordEn(midSatH)}), Rahu (${ordEn(midRahuH)}), and Ketu (${ordEn(midKetuH)}) anchor the whole month's trajectory.`;
      careerText = isMonthKarmeshRestrained ? `In the first half of the month, 10th lord ${karmeshInfo.nameEn} (${ordEn(karmeshMidH)}${isMonthKarmeshDebil ? ", debilitated" : ""}) ${mRestrainedReasonEn}; in the second half, Sun entering your ${ordEn(endSunH)} house strengthens recognition and ${voice.careerThemeEn.charAt(0).toLowerCase() + voice.careerThemeEn.slice(1)}` : `In the first half of the month, Sun (${ordEn(startSunH)}) and Mars (${ordEn(midMarsH)}) organize professional goals; in the second half, Sun's Sankranti into your ${ordEn(endSunH)} house alongside Mercury (${ordEn(midMercH)}) accelerates career momentum as ${voice.careerThemeEn.charAt(0).toLowerCase() + voice.careerThemeEn.slice(1)}`;
      const mWealthPoolEn = [
        `Financial growth gains direction under ${mDhaneshClauseEn} across ${mBundle.gregorianMonthYearEn}; strengthen core reserves early on and expand prudently after Sankranti.`,
        `Guided by ${lagneshInfo.nameEn} and ${mDhaneshClauseEn}, steady asset building takes center stage this month—review recurring outflows first, then lock in long-term savings.`,
        `Commercial negotiations and inflows improve through ${mDhaneshClauseEn} for ${rashiMeta.nameEn}; keep liquidity flexible in the opening fortnight before committing capital.`,
        `Balanced cash management under ${mDhaneshClauseEn} protects household reserves throughout ${mBundle.gregorianMonthYearEn}, rewarding patient, well-researched financial choices.`,
        `Income stability aligns with ${mDhaneshClauseEn} this month; prioritize debt reduction and structured savings over speculative ventures.`
      ];
      wealthText = mWealthPoolEn[mPoolIdx];
      const mFamilyLowerEn = voice.familyThemeEn.charAt(0).toLowerCase() + voice.familyThemeEn.slice(1);
      const mFamilyPoolEn = [
        `Domestic harmony strengthens through ${mSukheshClauseEn} across ${mBundle.gregorianMonthYearEn}, bringing joyful milestones as ${mFamilyLowerEn}`,
        `Thoughtful dialogue bridges family expectations early in the month while ${mSukheshClauseEn} foster warmth in the second half; ${mFamilyLowerEn}`,
        `Under ${lagneshInfo.nameEn}'s steady grace, ${mSukheshClauseEn} encourage auspicious gatherings and mutual care at home; ${mFamilyLowerEn}`,
        `Patience with elders and shared planning uplift household morale as ${mSukheshClauseEn} support ${mFamilyLowerEn}`,
        `Close bonds deepen over the month with ${mSukheshClauseEn} guiding calm resolution of domestic matters; ${mFamilyLowerEn}`
      ];
      familyText = mFamilyPoolEn[mPoolIdx];
      educationText = `Throughout ${mBundle.gregorianMonthYearEn}, Mercury (${ordEn(midMercH)} house) and Jupiter (${ordEn(midJupH)} house) guide academic persistence; focus on conceptual depth in the first fortnight and timed revisions in the second half. ${voice.educationThemeEn}`;
      healthText = `Throughout this month, protect vitality aligned with ${mHealthPlanetClauseEn}: maintain regular sleep, seasonal diet, and moderate exercise. ${voice.healthTipEn}`;
      wealthFamilySummary = `${wealthText} ${familyText}`;
      const mRemedyPoolEn = [
        `Monthly Shastric Remedy: ${voice.remedyActionEn} Recite "${rashiMeta.beejMantra}" on auspicious tithis throughout ${mBundle.gregorianMonthYearEn}.`,
        `Vedic Observance for ${rashiMeta.nameEn}: ${voice.remedyActionEn} Offer food charity on Ekadashi or Purnima to harmonize ${lagneshInfo.nameEn}.`,
        `Spiritual Guidance: ${voice.remedyActionEn} Light a sacred ghee lamp in the evening and seek elders' blessings across the month.`,
        `Auspicious Monthly Practice: ${voice.remedyActionEn} Support cow seva or temple offerings aligned with ${rashiMeta.ishtaDevtaEn || rashiMeta.nameEn}.`,
        `Dharmic Discipline: ${voice.remedyActionEn} Maintain peaceful morning prayer and charitable giving during ${mBundle.pakshaWindowHighlightEn}.`
      ];
      remedyText = mRemedyPoolEn[mPoolIdx];
      doToday1 = `Align major property, career, or long-term savings decisions with ${mBundle.pakshaWindowHighlightEn}.`;
      doToday2 = `Donate food or essentials on auspicious lunar dates this month while using ${rashiMeta.luckyColorsEn[0]} attire for positivity.`;
      dontToday1 = `Avoid signing major financial guarantees or rushing into legal/property commitments without thorough review during the first half.`;
      dontToday2 = `Avoid neglecting sleep, seasonal immunity, or harmonious communication with elders across the month.`;
    } else {
      finalChandrabalStatusHi = `गुरु (${ordHi(midJupH)} भाव) • शनि (${ordHi(midSatH)} भाव — ${monthSadeSatiHi})`;
      finalTarabalNameHi = `मासिक संक्रांति: ${mBundle.sankrantiSummaryHi}`;
      finalFavorableTime = mBundle.pakshaWindowHighlightHi;
      const mIntroClean = voice.mentalIntroHi.replace(/(?<![\u0900-\u097F])आज(?![\u0900-\u097F])/gu, "इस पूरे महीने");
      chandraGochar = `मासिक ग्रह स्थिति (${mBundle.gregorianMonthYearHi} • ${mBundle.hinduLunarMonthsHi}): सूर्य (${sunShiftPhraseHi}), देवगुरु बृहस्पति (${ordHi(midJupH)} भाव), शनि (${ordHi(midSatH)} भाव) एवं मंगल (${ordHi(midMarsH)} भाव) पूरे मास का फल निर्धारित कर रहे हैं।`;
      lagnaMentalText = `${mIntroClean} इस पूरे महीने ${mMentalPlanetClauseHi} आपके आत्मबल और विवेक को संभाल रहे हैं; मास के पूर्वार्ध में सूर्य (${ordHi(startSunH)} भाव) तथा उत्तरार्ध में संक्रांति उपरांत (${ordHi(endSunH)} भाव) के प्रभाव से समग्र मासिक शुभता ${finalOverallScore}% रहेगी।`;
      transitImpactText = `मासिक नवग्रह गोचर चक्र (${mBundle.gregorianMonthYearHi} • ${mBundle.hinduLunarMonthsHi}): ${mBundle.planetarySummaryHi}। ${mBundle.sankrantiSummaryHi}। ${rashiMeta.nameHi} से शनि (${ordHi(midSatH)} भाव — ${monthSadeSatiHi}), गुरु (${ordHi(midJupH)} भाव) प्रमुख फलदाता हैं।${rahuMonthlyAxisHi}${ketuJupMonthlyHi}`;
      const mCareerClean = voice.careerThemeHi.replace(/(?<![\u0900-\u097F])आज(?![\u0900-\u097F])/gu, "इस मास").replace(/[।.]$/, "");
      careerText = isMonthKarmeshRestrained ? `मास के पूर्वार्ध में (प्रथम पखवाड़े) कर्मेश ${karmeshInfo.nameHi} (${ordHi(karmeshMidH)} भाव${isMonthKarmeshDebil ? ", नीचस्थ" : ""}) की स्थिति के कारण सीधी सहजता के बजाय ${mRestrainedReasonHi}; मास के उत्तरार्ध में सूर्य के ${ordHi(endSunH)} भाव में प्रवेश से ${mCareerClean}।` : `मास के पूर्वार्ध में (प्रथम पखवाड़े) सूर्य (${ordHi(startSunH)} भाव) और मंगल (${ordHi(midMarsH)} भाव) से कार्ययोजनाओं की मजबूत नींव बनेगी; मास के उत्तरार्ध में सूर्य के ${ordHi(endSunH)} भाव प्रवेश तथा बुध (${ordHi(midMercH)} भाव) के सहयोग से ${mCareerClean}।`;
      const mWealthClean = voice.wealthThemeHi.replace(/(?<![\u0900-\u097F])आज(?![\u0900-\u097F])/gu, "इस मास").replace(/[।.]$/, "");
      const mWealthPoolHi = [
        `लग्नेश ${lagneshInfo.nameHi} के तेज और ${mDhaneshClauseHi} के संयोग से इस मास आय के स्रोतों में सकारात्मक गति आएगी। ${mWealthClean}; संक्रांति के उपरांत स्थायी संपत्ति या सुरक्षित कोष विस्तार के अवसर बनेंगे।`,
        `${mDhaneshClauseHi} की सुदृढ़ भूमिका से ${rashiMeta.nameHi} राशि की आर्थिक बुनियाद मजबूत होगी। ${mWealthClean}; मास के उत्तरार्ध में अचल संपत्ति व क्रमिक संचय से कोष में स्पष्ट वृद्धि होगी।`,
        `व्यापारिक संवाद व ${mDhaneshClauseHi} के अनुकूल गोचर से इस महीने धनागमन के नए द्वार खुलेंगे। ${mWealthClean}; साझेदारी या बड़े अनुबंधों में स्पष्ट लेखा-जोखा रखना विशेष लाभप्रद रहेगा।`,
        `${mDhaneshClauseHi} के संरक्षण से पारिवारिक कोष व संचित पूंजी सुरक्षित रहेगी। ${mWealthClean}; अनावश्यक भावुक खर्च से बचकर क्रमिक निवेश पर ध्यान केंद्रित करना शुभ रहेगा।`,
        `ग्रह-गोचर में ${mDhaneshClauseHi} की सुदृढ़ स्थिति से ${rashiMeta.nameHi} जातकों की नियमित आमदनी में निरंतरता बनेगी। ${mWealthClean}; पुराने बकाया की वसूली व सुनियोजित पूँजी-विस्तार में सफलता मिलेगी।`
      ];
      wealthText = mWealthPoolHi[mPoolIdx];
      const mFamilyClean = voice.familyThemeHi.replace(/(?<![\u0900-\u097F])आज(?![\u0900-\u097F])/gu, "इस पूरे महीने").replace(/[।.]$/, "");
      const mFamilyPoolHi = [
        `${mSukheshClauseHi} की कृपा से इस मास घर में मांगलिक विचार और उत्साहपूर्ण पारिवारिक मेल-मिलाप बढ़ेगा। ${mFamilyClean}।`,
        `गृहस्थ कर्तव्यों के प्रति आपकी निष्ठा और ${mSukheshClauseHi} के सहयोग से परिवार में स्थायी सुख-शांति रहेगी। ${mFamilyClean}।`,
        `खुले व सौम्य संवाद से रिश्तों की गलतफहमियां दूर होंगी तथा ${mSukheshClauseHi} के प्रभाव से दांपत्य व कुटुम्ब में मधुरता आएगी। ${mFamilyClean}।`,
        `आत्मीय स्नेह, माता-पिता के आशीर्वाद और ${mSukheshClauseHi} के शुभ संयोग से इस पूरे महीने घर में भावनात्मक संबल मिलेगा। ${mFamilyClean}।`,
        `राशि स्वामी ${lagneshInfo.nameHi} एवं ${mSukheshClauseHi} के संतुलन से मास के उत्तरार्ध में परिजनों के साथ सुखद समय व्यतीत होगा। ${mFamilyClean}।`
      ];
      familyText = mFamilyPoolHi[mPoolIdx];
      const mEduClean = voice.educationThemeHi.replace(/(?<![\u0900-\u097F])आज(?![\u0900-\u097F])/gu, "इस पूरे महीने").replace(/[।.]$/, "");
      educationText = `इस पूरे महीने ${mPanchameshClauseHi} के सहयोग से विद्यार्थियों को क्रमबद्ध प्रगति मिलेगी—मास के पूर्वार्ध में नए अध्याय और उत्तरार्ध में पुनरावृत्ति से सफलता मिलेगी; ${mEduClean}।`;
      const mHealthClean = voice.healthTipHi.replace(/(?<![\u0900-\u097F])आज(?![\u0900-\u097F])/gu, "इस मास").replace(/[।.]$/, "");
      healthText = `इस पूरे महीने ${mHealthPlanetClauseHi} के अनुसार ऋतु-अनुकूल सात्त्विक आहार, प्रातः योग और नियमित विश्राम अपनाएं; ${mHealthClean}।`;
      wealthFamilySummary = `${wealthText.split("।")[0].trim()}। ${familyText.split("।")[0].trim()}। स्वास्थ्य: ${mHealthClean}।`;
      const mRemedyClean = voice.remedyActionHi.replace(/[।.]$/, "");
      const mRemedyPoolHi = [
        `मासिक शास्त्रीय उपाय: ${mRemedyClean}। लग्नेश ${lagneshInfo.nameHi} की शुभता हेतु मास की संक्रांति व शुक्ल पक्ष में ${rashiMeta.ishtaDevtaHi} का विशेष पूजन करें।`,
        `मास का कल्याणकारी दान-नियम: ${mRemedyClean}। इस महीने एकादशी अथवा पूर्णिमा तिथि पर श्रद्धापूर्वक अन्नदान एवं गौसेवा करें।`,
        `वैदिक मासिक साधना: ${mRemedyClean}। प्रतिदिन प्रातःकाल शांत चित्त से "${rashiMeta.beejMantra}" का जप एवं तुलसी-सेवा करें।`,
        `सुख-समृद्धि का मासिक उपाय: ${mRemedyClean}। प्रदोष व्रत या शुभ तिथि पर देवालय में घी का दीपक जलाकर ${rashiMeta.ishtaDevtaHi} का आशीर्वाद लें।`,
        `राशि-तत्व अनुकूल मासिक उपाय: ${mRemedyClean}। पूरे मास सात्त्विक वाणी, पितृ-स्मरण और पात्र व्यक्ति को वस्त्र या अन्न दान करने से ग्रह-पीड़ा शांत होगी।`
      ];
      remedyText = mRemedyPoolHi[mPoolIdx];
      doToday1 = `मास के पूर्वार्ध में ही दीर्घकालिक वित्तीय व करियर लक्ष्यों की स्पष्ट रूपरेखा तैयार करें और शुभ कार्य ${mBundle.pakshaWindowHighlightHi} में आगे बढ़ाएं।`;
      doToday2 = `इस पूरे महीने कम से कम एक बार अन्नदान या गौसेवा करें तथा सकारात्मक ऊर्जा हेतु ${rashiMeta.luckyColorsHi[ist.month % rashiMeta.luckyColorsHi.length]} रंग का प्रयोग करें।`;
      dontToday1 = `इस पूरे महीने किसी भी बड़े कानूनी दस्तावेज, संपत्ति सौदे या साझेदारी पर बिना पूरी जांच-पड़ताल के हस्ताक्षर न करें।`;
      dontToday2 = `${voice.dontTaskHi.replace(/(?<![\u0900-\u097F])आज(?![\u0900-\u097F])/gu, "इस मास")} मास के उत्तरार्ध में जल्दबाजी, अनावश्यक क्रोध और अनियमित दिनचर्या से पूरी तरह बचें।`;
      chandraGochar = sanitizeWeeklyMonthlyHindiText(chandraGochar, "monthly");
      lagnaMentalText = sanitizeWeeklyMonthlyHindiText(lagnaMentalText, "monthly");
      transitImpactText = sanitizeWeeklyMonthlyHindiText(transitImpactText, "monthly");
      careerText = sanitizeWeeklyMonthlyHindiText(careerText, "monthly");
      wealthText = sanitizeWeeklyMonthlyHindiText(wealthText, "monthly");
      familyText = sanitizeWeeklyMonthlyHindiText(familyText, "monthly");
      wealthFamilySummary = sanitizeWeeklyMonthlyHindiText(wealthFamilySummary, "monthly");
      educationText = sanitizeWeeklyMonthlyHindiText(educationText, "monthly");
      healthText = sanitizeWeeklyMonthlyHindiText(healthText, "monthly");
      remedyText = sanitizeWeeklyMonthlyHindiText(remedyText, "monthly");
      doToday1 = sanitizeWeeklyMonthlyHindiText(doToday1, "monthly");
      doToday2 = sanitizeWeeklyMonthlyHindiText(doToday2, "monthly");
      dontToday1 = sanitizeWeeklyMonthlyHindiText(dontToday1, "monthly");
      dontToday2 = sanitizeWeeklyMonthlyHindiText(dontToday2, "monthly");
    }
  }
  const daySeed = period === "weekly" ? ist.year * 53 + ist.month * 7 + Math.floor((ist.day - 1) / 7) : period === "monthly" ? ist.year * 12 + ist.month : ist.year * 372 + ist.month * 31 + ist.day;
  const colorList = lang === "en" ? rashiMeta.luckyColorsEn : rashiMeta.luckyColorsHi;
  const luckyColor = `${colorList[daySeed % colorList.length]} ${lang === "en" ? "and" : "एवं"} ${colorList[(daySeed + 1) % colorList.length]}`;
  const basePool = Array.from(new Set(rashiMeta.luckyNumbers));
  const distinctNumbers = [];
  for (let i = 0; i < basePool.length; i++) {
    const candidate = basePool[(daySeed + i) % basePool.length];
    if (!distinctNumbers.includes(candidate)) {
      distinctNumbers.push(candidate);
    }
  }
  const luckyNumbers = distinctNumbers.slice(0, 3).join(", ");
  if (lang === "hi") {
    const ayanamsaDegNum = Number(
      String(transitKundali.input?.ayanamsaDMS || "24.235").split("°")[0]
    );
    const parsedYear = Number(ist.year || 2026);
    const parsedMonth = Number(ist.month || 1);
    const parsedDay = Number(ist.day || 1);
    const sunPlanetObj = transitKundali.planets.find((p) => p.id === "sun");
    const moonLonDeg = Number(rawMoonPlanet?.siderealLon ?? 0);
    const sunLonDeg = Number(sunPlanetObj?.siderealLon ?? 0);
    const halfTithiIdx = Math.floor(((moonLonDeg - sunLonDeg) % 360 + 360) % 360 / 6);
    const exactKaranIndex = halfTithiIdx === 0 ? 10 : halfTithiIdx === 57 ? 7 : halfTithiIdx === 58 ? 8 : halfTithiIdx === 59 ? 9 : (halfTithiIdx - 1) % 7;
    const modularSeedBase = {
      samvat: Number(rawDayPanchang.vikramSamvat || 2083),
      tithi: Number(
        rawDayPanchang.tithiIndex || rawDayPanchang.dailyPanchang?.tithiIntervals?.[0]?.tithiIndex || 1
      ),
      nakshatra: Number(
        rawDayPanchang.dailyPanchang?.nakshatraIntervals?.[0]?.index ?? resolveNakshatraIndexHi(panchang.nakshatra)
      ),
      pada: Number(rawMoonPlanet?.pada || transitKundali.panchang?.nakshatraPada || 1),
      yoga: Number(
        rawDayPanchang.dailyPanchang?.yogaIntervals?.[0]?.index ?? resolveYogaIndexHi(panchang.yoga)
      ),
      karan: rawDayPanchang.karana ? resolveKaranIndexHi(rawDayPanchang.karana) : exactKaranIndex,
      vaar: Number(rawDayPanchang.weekdayIndex ?? new Date(Date.UTC(parsedYear, parsedMonth - 1, parsedDay)).getUTCDay()),
      chandraRashi: Number(rawMoonPlanet?.rashiNumber || transitKundali.panchang?.moonRashiNumber || 1),
      suryaRashi: Number(
        sunPlanetObj?.rashiNumber || transitKundali.panchang?.sunRashiNumber || 1
      ),
      ayanamsaDegrees: Number.isFinite(ayanamsaDegNum) ? ayanamsaDegNum : 24.235,
      vakriPlanetsCount: countVakriPlanets(transitKundali.planets),
      rashiIndex: rashiNum,
      year: parsedYear,
      dayOfYear: computeDayOfYear(parsedYear, parsedMonth, parsedDay)
    };
    const isCombustBenefic = Boolean(jupT.isCombust || venT.isCombust);
    const modCommon = {
      period,
      tithiHi: `${panchang.paksha ? `${panchang.paksha.replace(/\s*पक्ष$/u, "")} ` : ""}${panchang.tithi}`.trim(),
      nakshatraHi: panchang.nakshatra,
      pada: modularSeedBase.pada,
      yogaHi: panchang.yoga,
      periodLabelHi: periodTitleHi
    };
    const DOMAIN_SALTS = {
      career: 1,
      finance: 2,
      family: 3,
      health: 4,
      education: 5
    };
    const appendMod = (pillar, houseIdx, score) => buildModular64FalitHi({
      ...modCommon,
      seed: {
        ...modularSeedBase,
        houseOrSignIndex: houseIdx,
        pillar,
        domainSalt: DOMAIN_SALTS[pillar]
      },
      polarity: resolveModularPolarity({
        moonHouse: chandrabalHouse,
        isKsheenaChandra: isKsheenaMoon,
        isCombustBenefic,
        score,
        period
      })
    });
    careerText = applyEraAwareShabdaKosh(`${careerText} ${appendMod("career", karmeshT.houseFromRashi, finalCareerScore)}`, parsedYear);
    wealthText = applyEraAwareShabdaKosh(`${wealthText} ${appendMod("finance", dhaneshT.houseFromRashi, finalWealthScore)}`, parsedYear);
    familyText = applyEraAwareShabdaKosh(`${familyText} ${appendMod("family", saptameshT.houseFromRashi, finalFamilyScore)}`, parsedYear);
    educationText = applyEraAwareShabdaKosh(`${educationText} ${appendMod("education", panchameshT.houseFromRashi, finalEducationScore)}`, parsedYear);
    healthText = applyEraAwareShabdaKosh(`${healthText} ${appendMod("health", chandrabalHouse, finalHealthScore)}`, parsedYear);
  }
  const safeText = (t) => lang === "en" ? t : period === "daily" ? sanitizeVedicHindiText(t) : sanitizeWeeklyMonthlyHindiText(t, period);
  const sixLevelVerificationStampHi = "";
  const sixLevelVerificationStampEn = "";
  return {
    rashiId: rashiMeta.id,
    rashiNumber: rashiNum,
    rashiNameHi: rashiMeta.nameHi,
    rashiNameEn: rashiMeta.nameEn,
    symbol: rashiMeta.symbol,
    lordHi: rashiMeta.lordHi,
    lordEn: rashiMeta.lordEn,
    elementHi: rashiMeta.elementHi,
    elementEn: rashiMeta.elementEn,
    rashiNakshatrasHi: rashiMeta.nakshatrasHi,
    period,
    periodLabelHi: periodTitleHi,
    periodLabelEn: periodTitleEn,
    dateRangeHi: formatHindiDateRange(ist, period, "hi"),
    dateRangeEn: formatHindiDateRange(ist, period, "en"),
    ayanamsaDMS: transitKundali.input.ayanamsaDMS,
    julianDay: julianDayNum,
    locationName: resolvedLocName,
    coordinatesLabel: `${transitKundali.input.latitude.toFixed(2)}° N, ${transitKundali.input.longitude.toFixed(2)}° E`,
    careerScore: finalCareerScore,
    wealthScore: finalWealthScore,
    familyScore: finalFamilyScore,
    educationScore: finalEducationScore,
    healthScore: finalHealthScore,
    overallScore: finalOverallScore,
    sixLevelVerificationStampHi,
    sixLevelVerificationStampEn,
    savTotalBindus: 337,
    rashiSavBindus: b1,
    karmeshSavBindus: b10,
    dhaneshSavBindus: b2,
    labheshSavBindus: b11,
    tarabalNameHi: safeText(finalTarabalNameHi),
    tarabalIsAuspicious,
    chandrabalHouse,
    chandrabalStatusHi: safeText(finalChandrabalStatusHi),
    sadeSatiStatusHi: safeText(sadeSatiStatusHi),
    chandraHeaderLineHi: parsedChandra.headerLineHi,
    chandraHeaderLineEn: parsedChandra.headerLineEn,
    transitMoonRashiDisplayHi: parsedChandra.shortDisplayHi,
    hasMoonSandhi: period === "daily" ? parsedChandra.hasTransition : false,
    moonSandhiEndTimeHi: period === "daily" ? parsedChandra.endTimeText : void 0,
    moonSandhiNextSignHi: period === "daily" ? parsedChandra.sign2NameHi : void 0,
    moonSandhiNextHouse: period === "daily" ? moonSandhiNextHouse : void 0,
    moonSign1House,
    moonSign2House,
    prevailingMoonSignNumber: parsedChandra.prevailingSignNumber,
    isSecondSignPrevailing: parsedChandra.isSecondSignPrevailing,
    sixPlanetsTransitSummaryHi: period === "weekly" && weeklyMeta ? weeklyMeta.planetarySummaryHi : period === "monthly" && monthlyMeta ? monthlyMeta.planetarySummaryHi : sixPlanetsTransitSummaryHi,
    chandraGochar: safeText(chandraGochar),
    lagnaMentalText: safeText(lagnaMentalText),
    transitImpactText: safeText(transitImpactText),
    careerText: safeText(careerText),
    wealthText: safeText(wealthText),
    familyText: safeText(familyText),
    wealthFamilySummary: safeText(wealthFamilySummary),
    educationText: safeText(educationText),
    healthText: safeText(healthText),
    remedyText: safeText(remedyText),
    doToday1: safeText(doToday1),
    doToday2: safeText(doToday2),
    dontToday1: safeText(dontToday1),
    dontToday2: safeText(dontToday2),
    luckyColor,
    luckyNumbers,
    favorableTime: finalFavorableTime || (() => {
      const shreshtha = resolveBhadraRahuFreeShreshthaSamay(
        rawDayPanchang,
        0
      );
      return shreshtha.cardBestTime;
    })(),
    auspiciousDirectionHi: rashiMeta.lordPlanetId === "venus" ? getSafeAuspiciousDirection(rashiMeta.elementHi, panchang.dishaShool, lang, panchang.weekdayIndex, true) : finalAuspiciousDirection || getSafeAuspiciousDirection(
      rashiMeta.elementHi,
      panchang.dishaShool,
      lang,
      panchang.weekdayIndex,
      false
    ),
    ishtaDevta: lang === "en" ? rashiMeta.ishtaDevtaEn : rashiMeta.ishtaDevtaHi,
    mantra: rashiMeta.beejMantra,
    gemstoneHi: lang === "en" ? rashiMeta.gemstoneHi.match(/\(([^)]+)\)/)?.[1] || rashiMeta.gemstoneHi : rashiMeta.gemstoneHi,
    rudrakshaHi: rashiMeta.rudrakshaHi,
    planetTransits,
    weeklyMeta,
    monthlyMeta
  };
}
function buildRashifalSaralArthaHi(input) {
  const {
    mode,
    moonHouse,
    chandrabalLabelHi = "",
    tarabalSummaryHi = "",
    careerScore,
    wealthScore,
    familyScore,
    healthScore,
    isJupiterCombust,
    samvat,
    tithiIndex,
    nakshatraIndex,
    moonPada,
    yogaIndex,
    tithiHi,
    nakshatraHi,
    yogaHi,
    rashiNumber
  } = input;
  const avgScore = Math.round((careerScore + wealthScore + familyScore + healthScore) / 4);
  const isKsheenOrCautionMoon = moonHouse === 4 || moonHouse === 8 || moonHouse === 12 || /क्षीण|सावधानी|चतुर्थ|अष्टम|द्वादश/u.test(chandrabalLabelHi);
  const isStrongShubhMoon = [1, 3, 6, 7, 10, 11].includes(moonHouse) && !isKsheenOrCautionMoon;
  let chandrabalGocharHi;
  if (mode === "daily") {
    if (moonHouse === 8) {
      chandrabalGocharHi = "सरल अर्थ: आज मन शांत रखें; जोखिम भरे आर्थिक निर्णय, उधार व अनावश्यक बहस से बचें।";
    } else if (isKsheenOrCautionMoon) {
      chandrabalGocharHi = "सरल अर्थ: आज मन शांत रखें और जल्दबाज़ी में बड़े आर्थिक या पारिवारिक निर्णय न लें।";
    } else if (isStrongShubhMoon) {
      chandrabalGocharHi = "सरल अर्थ: आज मनोबल मजबूत रहेगा—जरूरी काम, बातचीत और नए प्रयास आगे बढ़ाने का उत्तम समय है।";
    } else {
      chandrabalGocharHi = "सरल अर्थ: आज का दिन संतुलित रहेगा—धैर्य और नियमित कार्यशैली से काम आसानी से बनेंगे।";
    }
  } else if (mode === "weekly") {
    chandrabalGocharHi = avgScore >= 78 ? "सरल अर्थ: इस सप्ताह शुभ दिनों में जरूरी काम व निवेश आगे बढ़ाएँ, लाभ के अच्छे योग हैं।" : avgScore <= 66 ? "सरल अर्थ: इस सप्ताह जल्दबाज़ी टालें; जरूरी निर्णय शुभ दिनों में और सोच-समझकर लें।" : "सरल अर्थ: इस सप्ताह संतुलन बनाकर चलें—अनुकूल दिनों में मुख्य काम निपटाना लाभप्रद रहेगा।";
  } else {
    chandrabalGocharHi = avgScore >= 78 ? "सरल अर्थ: इस माह करियर व आय में आगे बढ़ने के अच्छे अवसर हैं—शुभ तिथियों का लाभ लें।" : avgScore <= 66 ? "सरल अर्थ: इस माह बड़े जोखिम व कर्ज से बचें; नियमित प्रयास और बचत पर ध्यान दें।" : "सरल अर्थ: इस माह धैर्य और योजनाबद्ध कामकाज से स्थिर प्रगति व पारिवारिक सुख मिलेगा।";
  }
  let tarabalHi;
  const hasCautionTara = /वध|प्रत्यरि|विपत/u.test(tarabalSummaryHi);
  const hasShubhTara = /संपत|सम्पत|क्षेम|साधक|मित्र|अतिमित्र/u.test(tarabalSummaryHi);
  if (hasCautionTara && !hasShubhTara) {
    tarabalHi = "सरल अर्थ: आज ताराबल संवेदनशील है—जोखिम भरे काम, बहस और उधार लेन-देन से बचकर सामान्य काम करें।";
  } else if (hasShubhTara && !hasCautionTara) {
    tarabalHi = "सरल अर्थ: आज ताराबल अनुकूल है—नए प्रयास, महत्वपूर्ण बातचीत और जरूरी कार्य शुरू करना लाभकारी है।";
  } else if (hasShubhTara && hasCautionTara) {
    tarabalHi = "सरल अर्थ: ताराबल मिश्रित है—बड़े जोखिम से बचें और शुभ समय में जरूरी काम शांत मन से निपटाएँ।";
  } else {
    tarabalHi = "सरल अर्थ: ताराबल सामान्य है—जल्दबाज़ी के बजाय धैर्य, सेहत और नियमित कामकाज पर ध्यान दें।";
  }
  const fivePillarSummaryHi = buildModular64FalitHi({
    seed: {
      samvat: samvat ?? 2083,
      tithi: tithiIndex ?? 1,
      nakshatra: nakshatraIndex ?? resolveNakshatraIndexHi(nakshatraHi),
      pada: moonPada ?? 1,
      yoga: yogaIndex ?? resolveYogaIndexHi(yogaHi),
      houseOrSignIndex: rashiNumber || moonHouse || 1,
      pillar: "saral"
    },
    polarity: resolveModularPolarity({
      moonHouse,
      isKsheenaChandra: isKsheenOrCautionMoon,
      isCombustBenefic: Boolean(isJupiterCombust),
      score: healthScore <= 66 ? Math.min(avgScore, 66) : avgScore,
      period: mode
    }),
    period: mode,
    tithiHi,
    nakshatraHi,
    pada: moonPada,
    yogaHi,
    compact: true
  });
  return {
    chandrabalGocharHi,
    tarabalHi,
    fivePillarSummaryHi
  };
}
const drikGanitaRashifalEngine = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  HINDI_HOUSE_ORDINALS,
  RASHI_META_LIST,
  assertPlanetarySanityInvariants,
  buildHealthPrediction,
  buildRashifalSaralArthaHi,
  computeDrikGanitaRashifalForRashi,
  detectHouseYogas,
  fitHindiWordCountWindow,
  formatEnglishHouseOrdinal,
  formatHindiHouseOrdinal,
  formatMoonTransitionGocharPhrase,
  getPlanetStatusTag,
  getPlanetStatusTagsEn,
  getPlanetStatusTagsHi,
  getSafeAuspiciousDirection,
  parseChandraRashiTransition,
  resolveRashiSignNumberFromName,
  sanitizeVedicHindiText,
  sanitizeWeeklyMonthlyHindiText
}, Symbol.toStringTag, { value: "Module" }));
export {
  buildSattvicRemedy as A,
  BHAVA_DOMAIN_HI as B,
  applyEraAwareShabdaKosh as C,
  buildWeeklyRashifalCacheKey as D,
  enforcePeriodVocabularyGuard as E,
  buildMonthlyRashifalCacheKey as F,
  drikGanitaRashifalEngine as G,
  formatEnglishHouseOrdinal as a,
  buildRashifalSaralArthaHi as b,
  computeDrikGanitaRashifalForRashi as c,
  computeDayOfYear as d,
  countVakriPlanets as e,
  formatHindiHouseOrdinal as f,
  getDailySarvajanHitayaRemedyHi as g,
  resolveYogaIndexHi as h,
  resolveNakshatraIndexHi as i,
  cleanHindiProse as j,
  buildModular64FalitHi as k,
  resolveModularPolarity as l,
  sanitizeWeeklyMonthlyHindiText as m,
  buildDailyRashifalCacheKey as n,
  safeExecuteRashifalEngine as o,
  parseChandraRashiTransition as p,
  getRashiVoiceHi as q,
  resolveKaranIndexHi as r,
  sanitizeVedicHindiText as s,
  houseOrdHi as t,
  buildLockedGrahaConditionMap as u,
  buildHouseDrishtiNoteHi as v,
  buildVariedDailyCareerOpeningHi as w,
  formatUniqueGrahaRolesHi as x,
  mergeDuplicateFamilySentencesHi as y,
  deriveLogicalLuckyAttributes as z
};
