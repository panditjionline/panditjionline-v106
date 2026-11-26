import { aC as resolveRashiDefinition, aD as DEFAULT_RASHIFAL_LOCATION, aE as resolveCivilDayBounds, aF as getPersonalContextCacheHash, r as resolveSafeTimezone, aG as computeEphemerisSnapshot, aH as analyzeRelativeTransits, aI as solvePlanetaryIngressesInWindow, aJ as getRelativeHouse, aK as buildTithiIntervalsForDay, aL as buildAngaIntervalsForDay, aM as formatWindowRangeInZoneHi, aN as resolveLunarMasaInfo, as as RASHIFAL_AYANAMSHA_MODE, aO as formatEpochInZoneHi, av as GRAHA_NAMES, R as computeOptionalTarabala, aP as computeRashiWideTarabala, aQ as evaluatePersonalDashaAshtakavarga, at as RASHIFAL_NODE_MODE, au as RASHIFAL_CORE_ENGINE_VERSION, aR as ALL_GRAHA_IDS, aS as getRetrogradeCheshtaBalaScore } from "./panchang-core-24ia-akc.js";
import { n as buildDailyRashifalCacheKey, o as safeExecuteRashifalEngine, q as getRashiVoiceHi, B as BHAVA_DOMAIN_HI, t as houseOrdHi, j as cleanHindiProse, u as buildLockedGrahaConditionMap, v as buildHouseDrishtiNoteHi, w as buildVariedDailyCareerOpeningHi, e as countVakriPlanets, k as buildModular64FalitHi, l as resolveModularPolarity, x as formatUniqueGrahaRolesHi, y as mergeDuplicateFamilySentencesHi, z as deriveLogicalLuckyAttributes, A as buildSattvicRemedy, C as applyEraAwareShabdaKosh, d as computeDayOfYear } from "./drikGanitaRashifalEngine-fnpcD7FF.js";
import "./vendor-astronomy-C8JZdkQu.js";
const WEEKDAY_LORDS = [
  "sun",
  // 0 = Sun
  "moon",
  // 1 = Mon
  "mars",
  // 2 = Tue
  "mercury",
  // 3 = Wed
  "jupiter",
  // 4 = Thu
  "venus",
  // 5 = Fri
  "saturn"
  // 6 = Sat
];
const WEEKDAY_DISHA_SHOOL_HI = [
  "पश्चिम दिशा",
  // Sun
  "पूर्व दिशा",
  // Mon
  "उत्तर दिशा",
  // Tue
  "उत्तर दिशा",
  // Wed
  "दक्षिण दिशा",
  // Thu
  "पश्चिम दिशा",
  // Fri
  "पूर्व दिशा"
  // Sat
];
const RAHUKAAL_SEGMENT_1BASED = [8, 2, 7, 5, 6, 4, 3];
const DAILY_MOON_HOUSE_TONE_HI = {
  1: {
    tier: "HIGH_SHUBH",
    headlineThemeHi: "आत्मविश्वास, स्पष्टता और सकारात्मक पहल का दिन",
    mindsetHi: "प्रथम भाव का चंद्रमा मन में ताजगी, आत्मबल और निर्णय-स्पष्टता बढ़ाएगा।"
  },
  2: {
    tier: "MEDIUM_SHUBH",
    headlineThemeHi: "वाणी-संयम, पारिवारिक सहयोग और आर्थिक नियोजन का दिन",
    mindsetHi: "द्वितीय भाव का चंद्रमा भावनात्मक सुरक्षा और कुटुम्ब व धन-प्रबंधन पर ध्यान केंद्रित रखेगा।"
  },
  3: {
    tier: "HIGH_SHUBH",
    headlineThemeHi: "साहस, नए संपर्क और अधूरे कार्य पूर्ण करने का दिन",
    mindsetHi: "तृतीय पराक्रम भाव का चंद्रमा उत्साह, पहल-क्षमता और संवाद में सक्रियता देगा।"
  },
  4: {
    tier: "CAUTION_TRIK",
    headlineThemeHi: "धैर्य, पारिवारिक संवेदनशीलता और शांत गति रखने का दिन",
    mindsetHi: "चतुर्थ भाव का चंद्रमा मन को थोड़ा संवेदनशील बना सकता है; जल्दबाजी के बजाय शांत चिंतन व विश्राम लाभकारी रहेगा।"
  },
  5: {
    tier: "MEDIUM_SHUBH",
    headlineThemeHi: "रचनात्मक सोच, विद्या और संतुलित निर्णय का दिन",
    mindsetHi: "पंचम त्रिकोण का चंद्रमा बौद्धिक स्पष्टता, सृजनशीलता और सकारात्मक दृष्टिकोण प्रदान करेगा।"
  },
  6: {
    tier: "HIGH_SHUBH",
    headlineThemeHi: "परिश्रम से विजय, प्रतिस्पर्धा में बढ़त और समस्या-समाधान का दिन",
    mindsetHi: "षष्ठ भाव का चंद्रमा लंबित चुनौतियों को सुलझाने और कार्यकुशलता दिखाने की ऊर्जा देगा।"
  },
  7: {
    tier: "HIGH_SHUBH",
    headlineThemeHi: "सहयोग, साझेदारी और सामाजिक सामंजस्य का दिन",
    mindsetHi: "सप्तम केंद्र का चंद्रमा संबंधों में सौहार्द, जनसंपर्क और टीम-वर्क को बल देगा।"
  },
  8: {
    tier: "CAUTION_TRIK",
    headlineThemeHi: "सावधानी, संयम और जोखिम टालने का दिन",
    mindsetHi: "अष्टम भाव का चंद्रमा मानसिक थकान या अप्रत्याशित अवरोध दे सकता है; आज शांत रहकर नियमित कार्य ही करें।"
  },
  9: {
    tier: "MEDIUM_SHUBH",
    headlineThemeHi: "मार्गदर्शन, धर्म-रुचि और दीर्घदृष्टि का दिन",
    mindsetHi: "नवम भाग्य भाव का चंद्रमा सकारात्मक सोच, बड़ों की सलाह और सार्थक योजनाओं में सहयोग करेगा।"
  },
  10: {
    tier: "HIGH_SHUBH",
    headlineThemeHi: "कार्यसिद्धि, प्रतिष्ठा और लक्ष्य-प्राप्ति का दिन",
    mindsetHi: "दशम कर्म केंद्र का चंद्रमा एकाग्रता, पेशेवर सक्रियता और सम्मान में वृद्धि का संकेत देता है।"
  },
  11: {
    tier: "HIGH_SHUBH",
    headlineThemeHi: "लाभ, नए अवसर और इच्छापूर्ति का दिन",
    mindsetHi: "एकादश लाभ भाव का चंद्रमा मन में उत्साह, सामाजिक सहयोग और सार्थक परिणामों का योग बनाएगा।"
  },
  12: {
    tier: "CAUTION_TRIK",
    headlineThemeHi: "व्यय-नियंत्रण, आत्ममंथन और विश्राम को प्राथमिकता देने का दिन",
    mindsetHi: "द्वादश भाव का चंद्रमा खर्च और भागदौड़ बढ़ा सकता है; शांत दिनचर्या व पर्याप्त विश्राम आज सर्वोत्तम रहेगा।"
  }
};
function computeDailyScore(base, adjustments, min, max) {
  return Math.max(min, Math.min(max, Math.round(base + adjustments)));
}
function planetTransitWeight(analysis, graha) {
  const t = analysis.transits[graha];
  let w = t.isEffectiveFavorable ? 3.5 : t.isGocharFavorableRaw && t.hasVedha ? 0.5 : t.hasVipreetVedha ? 1.4 : -2.2;
  if (t.graha.dignity === "EXALTED" || t.graha.dignity === "MOOLATRIKONA") w += 1.5;
  else if (t.graha.dignity === "OWN_SIGN") w += 1;
  else if (t.graha.dignity === "DEBILITATED") w -= 1.5;
  if (t.graha.isRetrograde) {
    w += getRetrogradeCheshtaBalaScore(graha, t.graha.dignity);
  }
  if (t.functionalRole === "YOGAKARAKA") w += 1;
  else if (t.isMaraka && !t.isEffectiveFavorable) w -= 0.7;
  if (t.graha.isCombust) w -= graha === "moon" ? 1.5 : 1.2;
  return w;
}
function computeDailyCore(request) {
  const rashi = resolveRashiDefinition(request.rashi);
  const voice = getRashiVoiceHi(rashi.number);
  const location = request.location || DEFAULT_RASHIFAL_LOCATION;
  const timeZone = resolveSafeTimezone(location);
  const dayBounds = resolveCivilDayBounds(request.date ?? /* @__PURE__ */ new Date(), location);
  const sunriseSnapshot = computeEphemerisSnapshot(dayBounds.timings.sunriseTimestamp);
  const sunriseAnalysis = analyzeRelativeTransits(sunriseSnapshot, rashi.number);
  const intradayIngresses = solvePlanetaryIngressesInWindow(
    dayBounds.midnightStartMs,
    dayBounds.midnightEndMs,
    timeZone,
    ["moon", "sun", "mars", "mercury", "venus", "jupiter", "saturn"]
  );
  const moonIngress = intradayIngresses.find((e) => e.graha === "moon");
  const morningMoonSign = sunriseSnapshot.grahas.moon.signNumber;
  const morningMoonHouse = getRelativeHouse(morningMoonSign, rashi.number);
  let eveningMoonSign;
  let eveningMoonHouse;
  let primaryMoonSign = morningMoonSign;
  let primaryMoonHouse = morningMoonHouse;
  let analysis = sunriseAnalysis;
  let sandhiSummaryHi = `पूरे दिन चंद्रमा ${sunriseSnapshot.grahas.moon.signNameHi} राशि (आपकी राशि से ${houseOrdHi(morningMoonHouse)} भाव — ${BHAVA_DOMAIN_HI[morningMoonHouse]}) में संचरण करेंगे।`;
  if (moonIngress) {
    const preSign = moonIngress.fromSign;
    const postSign = moonIngress.toSign;
    const preHouse = getRelativeHouse(preSign, rashi.number);
    const postHouse = getRelativeHouse(postSign, rashi.number);
    if (moonIngress.timestampMs > dayBounds.timings.sunriseTimestamp) {
      eveningMoonSign = postSign;
      eveningMoonHouse = postHouse;
      const midpointDayMs = (dayBounds.timings.sunriseTimestamp + dayBounds.timings.sunsetTimestamp) * 0.5;
      if (moonIngress.timestampMs < midpointDayMs) {
        primaryMoonSign = postSign;
        primaryMoonHouse = postHouse;
        const postIngressSnapshot = computeEphemerisSnapshot(moonIngress.timestampMs + 5 * 6e4);
        analysis = analyzeRelativeTransits(postIngressSnapshot, rashi.number);
      }
      sandhiSummaryHi = `${moonIngress.timeFormattedHi} तक चंद्रमा ${moonIngress.fromSignNameHi} (${houseOrdHi(preHouse)} भाव) में रहेंगे, इसके बाद ${moonIngress.toSignNameHi} (${houseOrdHi(postHouse)} भाव) में प्रवेश करेंगे — जिससे दिन के पूर्वार्ध और उत्तरार्ध के अनुभव में स्पष्ट अंतर रहेगा।`;
    } else {
      const cleanIngressTimeHi = /^(प्रातः|दोपहर|शाम|सायं|रात्रि|मध्यरात्रि|अगले दिन)/u.test(
        moonIngress.timeFormattedHi
      ) ? moonIngress.timeFormattedHi : `प्रातः ${moonIngress.timeFormattedHi}`;
      sandhiSummaryHi = `${cleanIngressTimeHi} पर चंद्रमा ${moonIngress.toSignNameHi} (${houseOrdHi(postHouse)} भाव) में प्रवेश कर चुके हैं और सूर्योदय के बाद पूरे दिन इसी भाव का फल प्रभावी रहेगा।`;
    }
  }
  const sandhiSplit = {
    hasSignChange: Boolean(eveningMoonSign !== void 0),
    morningSignNumber: morningMoonSign,
    morningSignNameHi: sunriseSnapshot.grahas.moon.signNameHi,
    morningHouse: morningMoonHouse,
    eveningSignNumber: eveningMoonSign,
    eveningSignNameHi: eveningMoonSign ? sunriseSnapshot.grahas.moon.signNameHi !== moonIngress?.toSignNameHi ? moonIngress?.toSignNameHi : void 0 : void 0,
    eveningHouse: eveningMoonHouse,
    transitionTimeHi: eveningMoonSign ? moonIngress?.timeFormattedHi : void 0,
    transitionTimestampMs: eveningMoonSign ? moonIngress?.timestampMs : void 0,
    summaryHi: cleanHindiProse(sandhiSummaryHi)
  };
  const { tithiIntervals } = buildTithiIntervalsForDay(dayBounds.timings, dayBounds.dateKey, timeZone);
  const { nakshatraIntervals, yogaIntervals } = buildAngaIntervalsForDay(
    dayBounds.timings,
    dayBounds.dateKey,
    timeZone
  );
  const udayaTithi = tithiIntervals[0];
  const udayaNak = nakshatraIntervals[0];
  const udayaYoga = yogaIntervals[0];
  const weekdayLord = WEEKDAY_LORDS[dayBounds.weekdayIndex] || "sun";
  const dishaShoolHi = WEEKDAY_DISHA_SHOOL_HI[dayBounds.weekdayIndex] || "पूर्व दिशा";
  const dinamanaMs = dayBounds.timings.sunsetTimestamp - dayBounds.timings.sunriseTimestamp;
  const oneMuhurtaMs = dinamanaMs / 15;
  const abhijitStartMs = dayBounds.timings.sunriseTimestamp + 7 * oneMuhurtaMs;
  const abhijitEndMs = dayBounds.timings.sunriseTimestamp + 8 * oneMuhurtaMs;
  const rahuSegIdx = (RAHUKAAL_SEGMENT_1BASED[dayBounds.weekdayIndex] || 2) - 1;
  const YAMAGANDAM_SEGMENT_1BASED = [5, 4, 3, 2, 1, 7, 6];
  const yamaSegIdx = (YAMAGANDAM_SEGMENT_1BASED[dayBounds.weekdayIndex] || 5) - 1;
  const oneEighthMs = dinamanaMs / 8;
  const rahuStartMs = dayBounds.timings.sunriseTimestamp + rahuSegIdx * oneEighthMs;
  const rahuEndMs = rahuStartMs + oneEighthMs;
  const yamaStartMs = dayBounds.timings.sunriseTimestamp + yamaSegIdx * oneEighthMs;
  const yamaEndMs = yamaStartMs + oneEighthMs;
  const subtractIntervalMs = (spans, cutStart, cutEnd) => {
    const out = [];
    for (const [s, e] of spans) {
      if (cutEnd <= s || cutStart >= e) {
        out.push([s, e]);
      } else {
        if (cutStart > s) out.push([s, cutStart]);
        if (cutEnd < e) out.push([cutEnd, e]);
      }
    }
    return out;
  };
  let pureAbhijitSpans = [[abhijitStartMs, abhijitEndMs]];
  pureAbhijitSpans = subtractIntervalMs(pureAbhijitSpans, rahuStartMs, rahuEndMs);
  pureAbhijitSpans = subtractIntervalMs(pureAbhijitSpans, yamaStartMs, yamaEndMs);
  const validPureAbhijitSpans = pureAbhijitSpans.filter(([s, e]) => e - s >= 10 * 6e4);
  const favorableWindowHi = dayBounds.weekdayIndex === 3 || validPureAbhijitSpans.length === 0 ? formatWindowRangeInZoneHi(
    dayBounds.timings.sunriseTimestamp + 1.5 * oneMuhurtaMs,
    dayBounds.timings.sunriseTimestamp + 3 * oneMuhurtaMs,
    timeZone,
    dayBounds.dateKey
  ) : validPureAbhijitSpans.map(([s, e]) => formatWindowRangeInZoneHi(s, e, timeZone, dayBounds.dateKey)).join(", ");
  const cautionWindowHi = formatWindowRangeInZoneHi(rahuStartMs, rahuEndMs, timeZone, dayBounds.dateKey);
  const [dayYearNum, dayMonthNum] = dayBounds.dateKey.split("-").map((n) => parseInt(n, 10));
  const dailyMasaInfo = resolveLunarMasaInfo(
    dayBounds.timings.sunriseTimestamp,
    dayYearNum,
    udayaTithi?.tithiIndex || 1,
    "PURNIMANTA",
    RASHIFAL_AYANAMSHA_MODE,
    dayMonthNum
  );
  const panchangContext = {
    dateKey: dayBounds.dateKey,
    dateFormattedHi: dayBounds.dateFormattedHi,
    weekdayIndex: dayBounds.weekdayIndex,
    weekdayHi: dayBounds.weekdayHi,
    weekdayLord,
    weekdayLordHi: GRAHA_NAMES[weekdayLord].shortHi,
    sunriseHi: formatEpochInZoneHi(dayBounds.timings.sunriseTimestamp, timeZone, dayBounds.dateKey, false),
    sunsetHi: formatEpochInZoneHi(dayBounds.timings.sunsetTimestamp, timeZone, dayBounds.dateKey, false),
    pakshaHi: udayaTithi?.paksha || "शुक्ल पक्ष",
    tithiHi: udayaTithi ? `${udayaTithi.pakshaShort} ${udayaTithi.nameHi}` : "प्रतिपदा",
    nakshatraHi: udayaNak?.nameHi || sunriseSnapshot.grahas.moon.nakshatraNameHi,
    nakshatraIndex: udayaNak?.index ?? sunriseSnapshot.grahas.moon.nakshatraIndex,
    yogaHi: udayaYoga?.nameHi || "शुभ",
    dishaShoolHi,
    samvat: dailyMasaInfo.vikramSamvat,
    tithiIndex: udayaTithi?.tithiIndex || 1,
    moonPada: sunriseSnapshot.grahas.moon.nakshatraPada || 1,
    yogaIndex: udayaYoga?.index ?? 0
  };
  const tarabala = computeOptionalTarabala(
    panchangContext.nakshatraIndex,
    request.birthNakshatraIndex
  );
  const rashiTarabala = computeRashiWideTarabala(
    rashi.number,
    panchangContext.nakshatraIndex
  );
  const isMorningTrik = [4, 8, 12].includes(morningMoonHouse);
  const isEveningTrik = eveningMoonHouse !== void 0 && [4, 8, 12].includes(eveningMoonHouse);
  const baseTone = DAILY_MOON_HOUSE_TONE_HI[primaryMoonHouse] || DAILY_MOON_HOUSE_TONE_HI[1];
  let chandrabalaTier = baseTone.tier;
  if (!isMorningTrik && isEveningTrik) {
    chandrabalaTier = "MIXED_SANDHI";
  } else if (isMorningTrik && !isEveningTrik && eveningMoonHouse !== void 0) {
    chandrabalaTier = "MIXED_SANDHI";
  }
  const moonTransitObj = analysis.transits.moon;
  const moonPaksha = analysis.snapshot.moonPaksha;
  const chandrabalaLabelHi = moonPaksha.isKsheena ? `क्षीण चंद्रबल (संयम अपेक्षित — ${houseOrdHi(primaryMoonHouse)} भाव)` : chandrabalaTier === "HIGH_SHUBH" ? `उत्तम चंद्रबल (${houseOrdHi(primaryMoonHouse)} भाव — अनुकूल)` : chandrabalaTier === "MEDIUM_SHUBH" ? `मध्यम शुभ चंद्रबल (${houseOrdHi(primaryMoonHouse)} भाव — संतुलित)` : chandrabalaTier === "MIXED_SANDHI" ? `मिश्रित चंद्रबल (${sandhiSplit.transitionTimeHi} पर राशि परिवर्तन — दिन के दोनों भागों में अलग प्रभाव)` : `संयमशील चंद्रबल (${houseOrdHi(primaryMoonHouse)} भाव — सावधानी आवश्यक)`;
  const bandMap = {
    HIGH_SHUBH: { base: 85, min: 76, max: 93 },
    MEDIUM_SHUBH: { base: 76, min: 68, max: 83 },
    MIXED_SANDHI: { base: 72, min: 64, max: 80 },
    CAUTION_TRIK: { base: 60, min: 52, max: 68 }
  };
  const band = bandMap[chandrabalaTier];
  const personalCoordination = evaluatePersonalDashaAshtakavarga({
    context: request.personalContext,
    analysis,
    focusSignNumbers: [primaryMoonSign],
    scope: "daily"
  });
  const personalDelta = personalCoordination ? personalCoordination.scoreDelta : 0;
  const moonConj = moonTransitObj.conjunctWith;
  const moonMaleficPenalty = moonConj.includes("saturn") || moonConj.includes("rahu") || moonConj.includes("ketu") ? -5 : 0;
  const moonBeneficBoost = moonConj.includes("jupiter") || moonConj.includes("venus") ? 3 : 0;
  const moonVipreetVedhaRelief = moonTransitObj.hasVipreetVedha ? 3.2 : 0;
  const moonDelta = moonMaleficPenalty + moonBeneficBoost + moonPaksha.scoreDelta + moonVipreetVedhaRelief + personalDelta;
  const karmesh = analysis.lords.houseLordMap[10];
  const dhanesh = analysis.lords.houseLordMap[2];
  const labhesh = analysis.lords.houseLordMap[11];
  const sukhesh = analysis.lords.houseLordMap[4];
  const saptamesh = analysis.lords.houseLordMap[7];
  const panchamesh = analysis.lords.houseLordMap[5];
  const lagnesh = analysis.lords.houseLordMap[1];
  const careerScore = computeDailyScore(
    band.base,
    moonDelta + planetTransitWeight(analysis, karmesh) + planetTransitWeight(analysis, "sun") * 0.6 + planetTransitWeight(analysis, weekdayLord) * 0.4,
    band.min,
    band.max
  );
  const financeScore = computeDailyScore(
    band.base,
    moonDelta + planetTransitWeight(analysis, dhanesh) * 0.8 + planetTransitWeight(analysis, labhesh) * 0.7 + planetTransitWeight(analysis, "jupiter") * 0.5,
    band.min,
    band.max
  );
  const loveFamilyScore = computeDailyScore(
    band.base,
    moonDelta + planetTransitWeight(analysis, sukhesh) * 0.7 + planetTransitWeight(analysis, saptamesh) * 0.7 + planetTransitWeight(analysis, "venus") * 0.6,
    band.min,
    band.max
  );
  const educationScore = computeDailyScore(
    band.base,
    moonDelta + planetTransitWeight(analysis, panchamesh) * 0.8 + planetTransitWeight(analysis, "mercury") * 0.7 + planetTransitWeight(analysis, "jupiter") * 0.5,
    band.min,
    band.max
  );
  const healthScore = computeDailyScore(
    band.base,
    moonDelta + planetTransitWeight(analysis, lagnesh) * 0.9 - (analysis.sadeSatiPhase !== "NONE" ? 2 : 0),
    band.min,
    band.max
  );
  const overallScore = Math.round(
    (careerScore + financeScore + loveFamilyScore + educationScore + healthScore) / 5
  );
  const lagneshT = analysis.transits[lagnesh];
  const karmeshT = analysis.transits[karmesh];
  const dhaneshT = analysis.transits[dhanesh];
  const labheshT = analysis.transits[labhesh];
  const saptameshT = analysis.transits[saptamesh];
  const panchameshT = analysis.transits[panchamesh];
  const grahaCond = buildLockedGrahaConditionMap(analysis);
  const lagneshCond = grahaCond[lagnesh];
  const karmeshCond = grahaCond[karmesh];
  const usedDrishtiPlanets = /* @__PURE__ */ new Set();
  const isJupiterCombust = analysis.transits.jupiter.graha.isCombust;
  const moonConjunctionNoteHi = moonConj.includes("rahu") || moonConj.includes("ketu") ? ` आज ${rashi.nameHi} के ${houseOrdHi(primaryMoonHouse)} भाव में चंद्रमा${grahaCond.moon} पर राहु-केतु का प्रभाव होने से ${voice.cautionStyleHi}।` : moonConj.includes("saturn") ? ` ${houseOrdHi(primaryMoonHouse)} भाव में चंद्र${grahaCond.moon}-शनि${grahaCond.saturn} के संयोग से ${rashi.nameHi} जातकों को कार्य शांत गति से निपटाना चाहिए।` : moonConj.includes("jupiter") && moonConj.includes("mars") ? isJupiterCombust ? ` ${houseOrdHi(primaryMoonHouse)} भाव में चंद्र${grahaCond.moon}-गुरु${grahaCond.jupiter}-मंगल${grahaCond.mars} की त्रिग्रही युति से मंगल युति से मिश्रित गजकेसरी प्रभाव रहेगा और गुरु अस्त होने से परिणाम मध्यम मिलेंगे — आवेश टालकर विवेकपूर्ण कदम उठाएं।` : ` ${houseOrdHi(primaryMoonHouse)} भाव में चंद्र${grahaCond.moon}-गुरु${grahaCond.jupiter}-मंगल${grahaCond.mars} की युति होने से मंगल युति से मिश्रित गजकेसरी प्रभाव रहेगा — साहस व विवेक का संतुलन बनाकर निर्णय लें।` : moonConj.includes("jupiter") ? isJupiterCombust ? ` ${houseOrdHi(primaryMoonHouse)} भाव में चंद्र${grahaCond.moon}-गुरु${grahaCond.jupiter} की युति है, किंतु गुरु अस्त होने से मध्यम फलदायी रहेगा — निर्णय शांत विवेक से लें।` : ` ${houseOrdHi(primaryMoonHouse)} भाव में चंद्र${grahaCond.moon}-गुरु${grahaCond.jupiter} के गजकेसरी प्रभाव से ${rashi.nameHi} जातकों की निर्णय-क्षमता व सात्त्विक विवेक प्रबल रहेगा।` : isJupiterCombust ? ` गोचर में गुरु अस्त होने से मध्यम फलदायी रहेगा — बड़े निर्णयों में अनुभवी मार्गदर्शन व धैर्य रखें।` : "";
  const classicalYutiPlanets = ["sun", "moon", "mars", "mercury", "jupiter", "venus", "saturn"];
  const houseBuckets = /* @__PURE__ */ new Map();
  for (const gid of classicalYutiPlanets) {
    const h = analysis.transits[gid].houseFromMoon;
    const list = houseBuckets.get(h) || [];
    list.push(gid);
    houseBuckets.set(h, list);
  }
  const primaryMultiYuti = Array.from(houseBuckets.entries()).filter(([h, list]) => list.length >= 2 && !(h === primaryMoonHouse && moonConjunctionNoteHi.includes("युति"))).sort((a, b) => b[1].length - a[1].length)[0];
  let multiPlanetYutiNoteHi = "";
  if (primaryMultiYuti) {
    const [yHouse, yList] = primaryMultiYuti;
    const yNames = yList.slice(0, 3).map((g) => `${GRAHA_NAMES[g].shortHi}${grahaCond[g]}`).join("–");
    const yTypeHi = yList.length >= 3 ? "त्रिग्रही युति" : "द्विग्रही युति";
    const hasBudhAditya = yList.includes("sun") && yList.includes("mercury");
    const hasCombustInYuti = yList.some((g) => analysis.transits[g].graha.isCombust);
    const yEffectHi = hasBudhAditya ? hasCombustInYuti ? "बौद्धिक समझ व संवाद सक्रिय रहेगा, परंतु अस्त ग्रह के कारण निर्णय सोच-समझकर लें" : "बौद्धिक स्पष्टता, संवाद-कौशल व निर्णय-क्षमता को संयुक्त बल मिलेगा" : yList.includes("jupiter") && yList.includes("mars") ? "ऊर्जा व विवेक का मिश्रित संयोग बनेगा—साहसिक कार्य संयमित योजना से सिद्ध होंगे" : yList.includes("saturn") ? "अनुशासन, धैर्य और व्यावहारिक परिश्रम से इस भाव के परिणाम स्थिर होंगे" : hasCombustInYuti ? "मिश्रित व मध्यम संयुक्त प्रभाव रहेगा—संयम और स्पष्ट प्राथमिकता से कार्य करें" : "इस भाव से जुड़े विषयों में संयुक्त ग्रह-ऊर्जा से संतुलित व सार्थक प्रगति बनेगी";
    multiPlanetYutiNoteHi = ` ${houseOrdHi(yHouse)} भाव में ${yNames} की ${yTypeHi} बनने से ${yEffectHi}।`;
  }
  const isEighthOrTwelfthMoon = primaryMoonHouse === 8 || primaryMoonHouse === 12;
  const pakshaNoteHi = moonPaksha.isKsheena ? ` आज क्षीण चंद्रमा (अमावस्या समीप) ${rashi.nameHi} से ${houseOrdHi(primaryMoonHouse)} भाव में होने से ${voice.cautionStyleHi}।` : moonPaksha.paksha === "SHUKLA" && isEighthOrTwelfthMoon ? ` शुक्ल पक्ष के चंद्रमा से धैर्य व आत्म-संयम का सहारा मिलेगा, परंतु ${houseOrdHi(primaryMoonHouse)} भाव गोचर के कारण बड़े निर्णय व जोखिम टालें।` : moonPaksha.paksha === "SHUKLA" && moonPaksha.isBrightStrong ? ` शुक्ल पक्ष के वर्धमान चंद्रमा का ${houseOrdHi(primaryMoonHouse)} भाव गोचर मानसिक स्पष्टता, सकारात्मक संकल्प और आत्मविश्वास को विशेष बल दे रहा है।` : moonPaksha.paksha === "KRISHNA" && moonPaksha.isBrightStrong ? ` कृष्ण पक्ष के चंद्रमा का ${houseOrdHi(primaryMoonHouse)} भाव गोचर संतुलित चिंतन, संयम और व्यावहारिक स्पष्टता में सहायक रहेगा।` : "";
  const vipreetVedhaNoteHi = moonTransitObj.hasVipreetVedha ? ` विपरीत वेध — ${moonTransitObj.vipreetVedhaBy.map((g) => `${GRAHA_NAMES[g].shortHi}${grahaCond[g]}`).join(" व ")} के कारण ${rashi.nameHi} राशि के ${houseOrdHi(primaryMoonHouse)} भाव की चंद्र-बाधा शांत रहेगी।` : "";
  const sandhiAdviceHi = sandhiSplit.hasSignChange ? ` ${sandhiSplit.transitionTimeHi} के बाद चंद्रमा के ${rashi.nameHi} से ${houseOrdHi(sandhiSplit.eveningHouse || primaryMoonHouse)} भाव में जाने से ${isEveningTrik ? `उत्तरार्ध में ${voice.cautionStyleHi}।` : `उत्तरार्ध में ${voice.careerVerbHi}।`}` : "";
  const rashiWideCautionSentenceHi = !personalCoordination && (chandrabalaTier === "CAUTION_TRIK" || moonPaksha.isKsheena) ? " चंद्रमा के गोचर से आज संयम, समीक्षा व धैर्य की अपेक्षा है।" : "";
  const mindsetHi = cleanHindiProse(
    `${baseTone.mindsetHi} ${rashi.nameHi} राशि का स्वाभाविक गुण (${voice.strengthPhraseHi}) आज सहायक रहेगा; राशि स्वामी ${GRAHA_NAMES[lagnesh].shortHi}${lagneshCond} आपके ${houseOrdHi(lagneshT.houseFromMoon)} भाव में हैं।${pakshaNoteHi}${vipreetVedhaNoteHi}${moonConjunctionNoteHi}${multiPlanetYutiNoteHi}${sandhiAdviceHi}${rashiWideCautionSentenceHi}${tarabala ? ` आपके जन्म नक्षत्र (${tarabala.birthNakshatraNameHi}) से आज ${tarabala.taraNameHi} है — ${tarabala.guidanceHi}` : ` ${rashiTarabala.highlightSentenceHi}`}${personalCoordination ? ` ${personalCoordination.insightHi}` : ""}`
  );
  const careerDrishtiHi = buildHouseDrishtiNoteHi(analysis, 10, "daily", usedDrishtiPlanets);
  const careerOpeningHi = buildVariedDailyCareerOpeningHi({
    rashiNumber: rashi.number,
    rashiNameHi: rashi.nameHi,
    karmeshNameHi: GRAHA_NAMES[karmesh].shortHi,
    karmeshCondHi: karmeshCond,
    karmeshHouseOrdHi: houseOrdHi(karmeshT.houseFromMoon)
  });
  const is12thKarmeshMoon = karmesh === "moon" && karmeshT.houseFromMoon === 12;
  const isCombustBeneficToday = Boolean(
    analysis.transits.jupiter.graha.isCombust || analysis.transits.venus.graha.isCombust
  );
  const sunriseHalfTithi = Math.floor(
    ((sunriseSnapshot.grahas.moon.siderealLon - sunriseSnapshot.grahas.sun.siderealLon) % 360 + 360) % 360 / 6
  );
  const sunriseKaranIndex = sunriseHalfTithi === 0 ? 10 : sunriseHalfTithi === 57 ? 7 : sunriseHalfTithi === 58 ? 8 : sunriseHalfTithi === 59 ? 9 : (sunriseHalfTithi - 1) % 7;
  const dailyModularSeedBase = {
    samvat: dailyMasaInfo.vikramSamvat,
    tithi: udayaTithi?.tithiIndex || 1,
    nakshatra: panchangContext.nakshatraIndex,
    pada: sunriseSnapshot.grahas.moon.nakshatraPada || 1,
    yoga: udayaYoga?.index ?? 0,
    karan: sunriseKaranIndex,
    vaar: dayBounds.weekdayIndex,
    chandraRashi: sunriseSnapshot.grahas.moon.signNumber,
    suryaRashi: sunriseSnapshot.grahas.sun.signNumber,
    ayanamsaDegrees: sunriseSnapshot.ayanamshaDeg,
    vakriPlanetsCount: countVakriPlanets(sunriseSnapshot.grahas),
    rashiIndex: rashi.number,
    year: dayBounds.year,
    dayOfYear: computeDayOfYear(dayBounds.year, dayBounds.month, dayBounds.day)
  };
  const dailyModularMeta = {
    period: "daily",
    tithiHi: panchangContext.tithiHi,
    nakshatraHi: panchangContext.nakshatraHi,
    pada: sunriseSnapshot.grahas.moon.nakshatraPada || 1,
    yogaHi: panchangContext.yogaHi
  };
  const careerModular64Hi = buildModular64FalitHi({
    ...dailyModularMeta,
    seed: { ...dailyModularSeedBase, houseOrSignIndex: karmeshT.houseFromMoon, pillar: "career" },
    polarity: resolveModularPolarity({
      moonHouse: primaryMoonHouse,
      isKsheenaChandra: moonPaksha.isKsheena,
      isCombustBenefic: isCombustBeneficToday,
      score: is12thKarmeshMoon ? Math.min(careerScore, 70) : careerScore,
      period: "daily"
    })
  });
  const careerHi = cleanHindiProse(
    `${careerOpeningHi} ${is12thKarmeshMoon ? `द्वादश भाव में कर्मेश चंद्रमा होने से आज व्यय-संतुलन, दूरगामी योजना व शांत कार्यनीति से प्रगति सधेगी।` : karmeshT.isEffectiveFavorable || chandrabalaTier === "HIGH_SHUBH" ? `${voice.careerStrongTailHi}।` : karmeshT.houseFromMoon === 8 || karmeshT.houseFromMoon === 12 || chandrabalaTier === "CAUTION_TRIK" ? `${voice.careerCautionTailHi}।` : `${voice.careerBalancedTailHi}।`} ${careerModular64Hi} ${careerDrishtiHi}`
  );
  const formatCondHouseD = (cond, houseNum) => {
    const innerCond = (cond || "").trim().replace(/^\(/, "").replace(/\)$/, "").trim();
    const houseTxt = `${houseOrdHi(houseNum)} भाव`;
    return innerCond ? `(${innerCond} • ${houseTxt})` : `(${houseTxt})`;
  };
  const wealthDrishtiHi = buildHouseDrishtiNoteHi(analysis, 2, "daily", usedDrishtiPlanets);
  const wealthPlanetsHi = formatUniqueGrahaRolesHi(
    [
      { graha: dhanesh, rolePrefixHi: "धनेश", detailHi: formatCondHouseD(grahaCond[dhanesh], dhaneshT.houseFromMoon) },
      { graha: labhesh, rolePrefixHi: "लाभेश", detailHi: formatCondHouseD(grahaCond[labhesh], labheshT.houseFromMoon) }
    ],
    "और"
  );
  const financeLeadHi = financeScore >= 78 ? voice.financeStrongLeadHi : financeScore <= 65 ? voice.financeCautionLeadHi : voice.financeBalancedLeadHi;
  const financeModular64Hi = buildModular64FalitHi({
    ...dailyModularMeta,
    seed: { ...dailyModularSeedBase, houseOrSignIndex: dhaneshT.houseFromMoon, pillar: "finance" },
    polarity: resolveModularPolarity({
      moonHouse: primaryMoonHouse,
      isKsheenaChandra: moonPaksha.isKsheena,
      isCombustBenefic: isCombustBeneficToday,
      score: financeScore,
      period: "daily"
    })
  });
  const financeHi = cleanHindiProse(
    `${rashi.nameHi} के ${wealthPlanetsHi} के गोचर से आज ${financeLeadHi}। ${financeModular64Hi} ${wealthDrishtiHi}`
  );
  const familyDrishtiHi = buildHouseDrishtiNoteHi(analysis, 7, "daily", usedDrishtiPlanets);
  const familyPlanetsHi = formatUniqueGrahaRolesHi(
    [
      { graha: saptamesh, rolePrefixHi: "सप्तमेश", detailHi: formatCondHouseD(grahaCond[saptamesh], saptameshT.houseFromMoon) },
      { graha: "venus", detailHi: formatCondHouseD(grahaCond.venus, analysis.transits.venus.houseFromMoon) }
    ],
    "तथा"
  );
  const familyModular64Hi = buildModular64FalitHi({
    ...dailyModularMeta,
    seed: { ...dailyModularSeedBase, houseOrSignIndex: saptameshT.houseFromMoon, pillar: "family" },
    polarity: resolveModularPolarity({
      moonHouse: primaryMoonHouse,
      isKsheenaChandra: moonPaksha.isKsheena,
      isCombustBenefic: isCombustBeneficToday,
      score: loveFamilyScore,
      period: "daily"
    })
  });
  const loveFamilyHi = mergeDuplicateFamilySentencesHi(
    `${rashi.nameHi} के ${familyPlanetsHi} के प्रभाव से आज ${loveFamilyScore >= 78 ? `${voice.familyStrongHi}।` : loveFamilyScore <= 65 ? `${voice.familyCautionHi}।` : `${voice.familyBalancedHi}।`} ${familyModular64Hi} ${familyDrishtiHi}`
  );
  const mercT = analysis.transits.mercury;
  const eduPlanetsHi = formatUniqueGrahaRolesHi(
    [
      { graha: panchamesh, rolePrefixHi: "पंचमेश", detailHi: formatCondHouseD(grahaCond[panchamesh], panchameshT.houseFromMoon) },
      { graha: "mercury", detailHi: formatCondHouseD(grahaCond.mercury, mercT.houseFromMoon) }
    ],
    "और"
  );
  const educationModular64Hi = buildModular64FalitHi({
    ...dailyModularMeta,
    seed: { ...dailyModularSeedBase, houseOrSignIndex: panchameshT.houseFromMoon, pillar: "education" },
    polarity: resolveModularPolarity({
      moonHouse: primaryMoonHouse,
      isKsheenaChandra: moonPaksha.isKsheena,
      isCombustBenefic: isCombustBeneficToday,
      score: educationScore,
      period: "daily"
    })
  });
  const educationHi = cleanHindiProse(
    `${rashi.nameHi} के ${eduPlanetsHi} के अनुसार आज ${educationScore >= 78 ? `${voice.educationStrongHi}।` : `${voice.educationCautionHi}।`} ${educationModular64Hi}`
  );
  const healthPlanetsHi = formatUniqueGrahaRolesHi(
    [
      { graha: lagnesh, rolePrefixHi: "राशि स्वामी", detailHi: formatCondHouseD(grahaCond[lagnesh], lagneshT.houseFromMoon) },
      { graha: "moon", detailHi: formatCondHouseD(grahaCond.moon, primaryMoonHouse) }
    ],
    "व"
  );
  const satToMoonSep = (moonTransitObj.graha.signNumber - analysis.transits.saturn.graha.signNumber + 12) % 12 + 1;
  const isMoonDebilitated = moonTransitObj.graha.dignity === "DEBILITATED";
  const isDebilitatedMoonWithSaturn = isMoonDebilitated && (moonConj.includes("saturn") || [1, 3, 7, 10].includes(satToMoonSep));
  const healthModular64Hi = buildModular64FalitHi({
    ...dailyModularMeta,
    seed: { ...dailyModularSeedBase, houseOrSignIndex: primaryMoonHouse, pillar: "health" },
    polarity: resolveModularPolarity({
      moonHouse: primaryMoonHouse,
      isKsheenaChandra: moonPaksha.isKsheena || isMoonDebilitated,
      isCombustBenefic: isCombustBeneficToday,
      score: isMoonDebilitated ? Math.min(healthScore, 64) : healthScore,
      period: "daily"
    })
  });
  const healthHi = cleanHindiProse(
    isDebilitatedMoonWithSaturn ? `${rashi.nameHi} के ${healthPlanetsHi} के प्रभाव में नीचस्थ चंद्रमा पर शनि दृष्टि/संयोग से थकान, शीत-प्रकोप व मानसिक भारीपन रह सकता है; आज शांत दिनचर्या, पर्याप्त विश्राम, गुनगुना जल एवं उष्ण-सात्त्विक आहार लें। ${healthModular64Hi} ${voice.wellnessHintHi}।` : isMoonDebilitated ? `${rashi.nameHi} के ${healthPlanetsHi} के प्रभाव में नीचस्थ चंद्रमा होने से मानसिक संवेदनशीलता व थकान रह सकती है; आज शांत दिनचर्या, पर्याप्त जल-सेवन एवं संतुलित विश्राम अपनाएं। ${healthModular64Hi} ${voice.wellnessHintHi}।` : `${rashi.nameHi} के ${healthPlanetsHi} के प्रभाव से आज ${chandrabalaTier === "CAUTION_TRIK" || moonPaksha.isKsheena ? `${voice.healthEnergyCautionHi}।` : `${voice.healthEnergyStrongHi}।`} ${healthModular64Hi} ${voice.wellnessHintHi}।`
  );
  const luckyAttributes = deriveLogicalLuckyAttributes({
    moonSign: rashi,
    analysis,
    period: "daily",
    weekdayLord,
    dishaShoolHi
  });
  const cautionPlanet = chandrabalaTier === "CAUTION_TRIK" || moonPaksha.isKsheena ? "moon" : moonConj.includes("rahu") ? "rahu" : moonConj.includes("saturn") ? "saturn" : void 0;
  const remedy = buildSattvicRemedy({
    moonSign: rashi,
    analysis,
    period: "daily",
    cautionPlanet
  });
  const cleanNakNameHi = panchangContext.nakshatraHi.replace(/\s*नक्षत्र\s*$/u, "").trim();
  const isKartikPurnimaDay = Boolean(
    /पूर्णिमा/u.test(panchangContext.tithiHi || "") && !dailyMasaInfo.isAdhikaMasa && dailyMasaInfo.amantaMasaIndex === 7
  );
  const tithiDoLabelHi = isKartikPurnimaDay ? `${panchangContext.tithiHi} (कार्तिक पूर्णिमा / देव दीपावली महात्म्य)` : panchangContext.tithiHi;
  const doListHi = [
    `महत्वपूर्ण कार्य व बातचीत के लिए आज का अनुकूल समय (${favorableWindowHi}) चुनें।`,
    chandrabalaTier === "CAUTION_TRIK" ? "आज नियमित व पूर्व-निर्धारित कार्यों को शांत गति से पूरा करें और पर्याप्त विश्राम लें।" : `आज ${cleanNakNameHi} नक्षत्र व ${tithiDoLabelHi} के योग में लंबित लक्ष्य पूरे करने पर ध्यान दें।`
  ];
  const dontListHi = [
    `राहुकाल (${cautionWindowHi}) में नए बड़े वित्तीय समझौते या महत्वपूर्ण शुभ आरंभ से बचें।`,
    `${dishaShoolHi} की अनावश्यक लंबी यात्रा से बचें तथा ${voice.cautionStyleHi}।`
  ];
  const activeConjunctionsHi = analysis.conjunctions.map(
    (c) => `${houseOrdHi(c.house)} भाव (${c.signNameHi}) में ${c.planets.map((p) => GRAHA_NAMES[p].shortHi).join(" + ")} युति`
  );
  const headlineHi = applyEraAwareShabdaKosh(
    `${rashi.nameHi} दैनिक राशिफल (${panchangContext.dateFormattedHi}): ${baseTone.headlineThemeHi}`,
    dayBounds.year
  );
  const summaryHi = cleanHindiProse(
    applyEraAwareShabdaKosh(
      `${sandhiSplit.summaryHi} आज ${panchangContext.tithiHi} (${moonPaksha.pakshaHi}) एवं ${cleanNakNameHi} नक्षत्र है; अनुकूल समय ${favorableWindowHi} तथा सावधानी का समय (राहुकाल) ${cautionWindowHi} रहेगा।`,
      dayBounds.year
    )
  );
  const eraCareerHi = applyEraAwareShabdaKosh(careerHi, dayBounds.year);
  const eraFinanceHi = applyEraAwareShabdaKosh(financeHi, dayBounds.year);
  const eraLoveFamilyHi = applyEraAwareShabdaKosh(loveFamilyHi, dayBounds.year);
  const eraEducationHi = applyEraAwareShabdaKosh(educationHi, dayBounds.year);
  const eraHealthHi = applyEraAwareShabdaKosh(healthHi, dayBounds.year);
  const upayModularHi = buildModular64FalitHi({
    ...dailyModularMeta,
    seed: { ...dailyModularSeedBase, houseOrSignIndex: primaryMoonHouse, pillar: "upay" },
    polarity: resolveModularPolarity({
      moonHouse: primaryMoonHouse,
      isKsheenaChandra: moonPaksha.isKsheena,
      isCombustBenefic: isCombustBeneficToday,
      score: overallScore,
      period: "daily"
    })
  });
  remedy.primaryRemedyHi = applyEraAwareShabdaKosh(remedy.primaryRemedyHi, dayBounds.year);
  remedy.charityOrSevaHi = applyEraAwareShabdaKosh(remedy.charityOrSevaHi, dayBounds.year);
  remedy.lifestyleTipHi = applyEraAwareShabdaKosh(
    `${remedy.lifestyleTipHi} ${upayModularHi}`,
    dayBounds.year
  );
  return {
    engineType: "daily",
    engineVersion: RASHIFAL_CORE_ENGINE_VERSION,
    ayanamsha: RASHIFAL_AYANAMSHA_MODE,
    nodeMode: RASHIFAL_NODE_MODE,
    location: {
      nameHi: location.hindiName || location.name,
      timezone: timeZone,
      lat: location.lat,
      lon: location.lon
    },
    rashi,
    panchangContext,
    moonTransit: {
      primarySignNumber: primaryMoonSign,
      primarySignNameHi: primaryMoonSign === morningMoonSign ? sunriseSnapshot.grahas.moon.signNameHi : moonIngress?.toSignNameHi || sunriseSnapshot.grahas.moon.signNameHi,
      primaryHouse: primaryMoonHouse,
      chandrabalaTier,
      chandrabalaLabelHi,
      pakshaBalaLabelHi: moonPaksha.pakshaBalaLabelHi,
      isKsheenaChandra: moonPaksha.isKsheena,
      hasVipreetVedha: moonTransitObj.hasVipreetVedha,
      sandhiSplit
    },
    tarabala,
    rashiTarabala,
    personalCoordination,
    sadeSatiStatusHi: analysis.sadeSatiLabelHi,
    timeWindows: {
      favorableWindowHi,
      cautionWindowHi,
      guidanceHi: dayBounds.weekdayIndex === 3 ? "बुधवार को अभिजित मुहूर्त वर्जित माना जाता है, अतः प्रातःकालीन शुभ काल का उपयोग करें और राहुकाल टालें।" : "प्रमुख निर्णय अभिजित/अनुकूल समय में लें तथा राहुकाल में नया बड़ा जोखिम न उठाएँ।"
    },
    scores: {
      overall: overallScore,
      career: careerScore,
      finance: financeScore,
      loveFamily: loveFamilyScore,
      education: educationScore,
      health: healthScore
    },
    headlineHi,
    summaryHi,
    sections: {
      mindsetHi: applyEraAwareShabdaKosh(mindsetHi, dayBounds.year),
      careerHi: eraCareerHi,
      financeHi: eraFinanceHi,
      loveFamilyHi: eraLoveFamilyHi,
      educationHi: eraEducationHi,
      healthHi: eraHealthHi
    },
    doListHi,
    dontListHi,
    luckyAttributes,
    remedy,
    astronomicalBasis: {
      sunriseTimestampMs: sunriseSnapshot.timestampMs,
      julianDay: sunriseSnapshot.julianDay,
      ayanamshaDMS: sunriseSnapshot.ayanamshaDMS,
      activeConjunctionsHi,
      intradayIngresses,
      planets: ALL_GRAHA_IDS.map((id) => {
        const tr = id === "moon" ? analysis.transits.moon : sunriseAnalysis.transits[id];
        return {
          id,
          nameHi: tr.graha.shortHi,
          signNumber: tr.graha.signNumber,
          signNameHi: tr.graha.signNameHi,
          degDMS: tr.graha.degDMS,
          nakshatraNameHi: tr.graha.nakshatraNameHi,
          houseFromMoon: tr.houseFromMoon,
          dignityHi: tr.graha.dignityHi,
          isRetrograde: tr.graha.isRetrograde,
          isCombust: tr.graha.isCombust,
          isFavorableGochar: tr.isEffectiveFavorable,
          hasVedha: tr.hasVedha,
          hasVipreetVedha: tr.hasVipreetVedha,
          aspectedHouses: tr.aspectedHouses
        };
      })
    }
  };
}
function generateDailyRashifal(request) {
  try {
    const rashi = resolveRashiDefinition(request.rashi);
    const location = request.location || DEFAULT_RASHIFAL_LOCATION;
    const dayBounds = resolveCivilDayBounds(request.date ?? /* @__PURE__ */ new Date(), location);
    const cacheKey = buildDailyRashifalCacheKey({
      rashiId: rashi.id,
      dateKey: dayBounds.dateKey,
      location,
      birthNakshatraIndex: request.birthNakshatraIndex,
      personalContextHash: getPersonalContextCacheHash(request.personalContext)
    });
    return safeExecuteRashifalEngine(
      "daily",
      cacheKey,
      12 * 3600 * 1e3,
      () => computeDailyCore(request),
      Boolean(request.bypassCache)
    );
  } catch (err) {
    return {
      status: "unavailable",
      data: null,
      errorCode: "INVALID_DAILY_INPUT",
      userMessageHi: "दैनिक राशिफल के लिए दी गई राशि या तिथि अमान्य है। कृपया सही विवरण चुनकर पुनः प्रयास करें।",
      userMessageEn: "Invalid Moon Sign or date supplied for Daily Rashifal.",
      technicalReason: err instanceof Error ? err.message : String(err)
    };
  }
}
function generateAll12DailyRashifal(options = {}) {
  const results = {};
  for (let i = 1; i <= 12; i++) {
    const rashi = resolveRashiDefinition(i);
    results[rashi.id] = generateDailyRashifal({ ...options, rashi: i });
  }
  return results;
}
export {
  generateAll12DailyRashifal,
  generateDailyRashifal
};
