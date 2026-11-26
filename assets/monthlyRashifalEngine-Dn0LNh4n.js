import { aC as resolveRashiDefinition, aD as DEFAULT_RASHIFAL_LOCATION, r as resolveSafeTimezone, d as getLocalDateParts, aY as getCalendarMonthRange, aF as getPersonalContextCacheHash, aw as zonedWallClockToUtcMs, aG as computeEphemerisSnapshot, aZ as getNodeLongitudesDeg, as as RASHIFAL_AYANAMSHA_MODE, aX as RASHI_DEFINITIONS, aH as analyzeRelativeTransits, aI as solvePlanetaryIngressesInWindow, aU as solveRetrogradeStationsInWindow, aV as solveCombustionEventsInWindow, aW as solveLunarPhaseMilestonesInWindow, a_ as solveEclipsesInWindow, aJ as getRelativeHouse, aN as resolveLunarMasaInfo, K as HINDI_MONTH_SHORT, a$ as formatDateKey, aQ as evaluatePersonalDashaAshtakavarga, av as GRAHA_NAMES, at as RASHIFAL_NODE_MODE, au as RASHIFAL_CORE_ENGINE_VERSION, aR as ALL_GRAHA_IDS, aS as getRetrogradeCheshtaBalaScore } from "./panchang-core-24ia-akc.js";
import { F as buildMonthlyRashifalCacheKey, o as safeExecuteRashifalEngine, q as getRashiVoiceHi, t as houseOrdHi, E as enforcePeriodVocabularyGuard, u as buildLockedGrahaConditionMap, e as countVakriPlanets, k as buildModular64FalitHi, l as resolveModularPolarity, C as applyEraAwareShabdaKosh, v as buildHouseDrishtiNoteHi, x as formatUniqueGrahaRolesHi, z as deriveLogicalLuckyAttributes, A as buildSattvicRemedy, d as computeDayOfYear } from "./drikGanitaRashifalEngine-fnpcD7FF.js";
import "./vendor-astronomy-C8JZdkQu.js";
function monthlyGrahaScore(analysis, graha) {
  const t = analysis.transits[graha];
  let score = t.isEffectiveFavorable ? 8 : t.isGocharFavorableRaw && t.hasVedha ? 2 : t.hasVipreetVedha ? 2.4 : -5;
  if (t.graha.dignity === "EXALTED") score += 4;
  else if (t.graha.dignity === "MOOLATRIKONA") score += 3.5;
  else if (t.graha.dignity === "OWN_SIGN") score += 3;
  else if (t.graha.dignity === "DEBILITATED") score -= 4;
  if (t.graha.isCombust) score -= 2.5;
  if (t.graha.isRetrograde) {
    score += getRetrogradeCheshtaBalaScore(graha, t.graha.dignity) * 1.4;
  }
  if (t.functionalRole === "YOGAKARAKA") score += 1.5;
  else if (t.isMaraka && !t.isEffectiveFavorable) score -= 1;
  return score;
}
function evaluateHouseRelativeEclipse(ec, rashiNumber) {
  const ecSign = ec.type === "SOLAR" ? ec.sunSignNumber : ec.moonSignNumber;
  const house = getRelativeHouse(ecSign, rashiNumber);
  if ([1, 4, 7, 8, 12].includes(house)) {
    return {
      house,
      tier: "CAUTION",
      scoreDelta: ec.isVisibleLocally ? -3 : -1.8,
      noteHi: `${ec.dateFormattedHi} को ${ec.kindHi} आपके ${houseOrdHi(house)} भाव में पड़ रहा है, अतः इस तिथि के आसपास स्वास्थ्य, संबंधों व बड़े निर्णयों में विशेष संयम और धैर्य रखें`
    };
  }
  if ([3, 6, 10, 11].includes(house)) {
    return {
      house,
      tier: "OPPORTUNITY",
      scoreDelta: 1.2,
      noteHi: `${ec.dateFormattedHi} का ${ec.kindHi} आपके ${houseOrdHi(house)} (उपचय) भाव में पड़ रहा है, जो पुरानी बाधाओं से मुक्ति, साहस और नए अवसरों की राह खोल सकता है`
    };
  }
  return {
    house,
    tier: "MODERATE",
    scoreDelta: ec.isVisibleLocally ? -0.8 : -0.4,
    noteHi: `${ec.dateFormattedHi} को ${ec.kindHi} आपके ${houseOrdHi(house)} भाव को स्पर्श करेगा; वाणी, योजना और निवेश में विवेकपूर्ण संतुलन बनाए रखें`
  };
}
function clampMonthlyScore(v) {
  const compressed = v > 84 ? 84 + (v - 84) * 0.35 : v;
  return Math.max(60, Math.min(88, Math.round(compressed)));
}
function groupConsecutiveDaysHi(days, monthShortHi) {
  if (days.length === 0) return [];
  const sorted = Array.from(new Set(days)).sort((a, b) => a - b);
  const ranges = [];
  let start = sorted[0];
  let prev = sorted[0];
  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i] === prev + 1) {
      prev = sorted[i];
    } else {
      ranges.push(start === prev ? `${start} ${monthShortHi}` : `${start}–${prev} ${monthShortHi}`);
      start = sorted[i];
      prev = sorted[i];
    }
  }
  ranges.push(start === prev ? `${start} ${monthShortHi}` : `${start}–${prev} ${monthShortHi}`);
  return ranges;
}
function computeMonthlyCore(request) {
  const rashi = resolveRashiDefinition(request.rashi);
  const voice = getRashiVoiceHi(rashi.number);
  const location = request.location || DEFAULT_RASHIFAL_LOCATION;
  const timeZone = resolveSafeTimezone(location);
  const nowParts = getLocalDateParts(/* @__PURE__ */ new Date(), timeZone);
  const year = request.year ?? nowParts.year;
  const month = request.month ?? nowParts.month;
  const monthRange = getCalendarMonthRange(year, month, timeZone);
  const monthShortHi = HINDI_MONTH_SHORT[month - 1] || "";
  const startMs = zonedWallClockToUtcMs(year, month, 1, 12, 0, 0, timeZone);
  const midMs = zonedWallClockToUtcMs(year, month, 15, 12, 0, 0, timeZone);
  const endMs = zonedWallClockToUtcMs(year, month, monthRange.daysInMonth, 12, 0, 0, timeZone);
  const startSnapshot = computeEphemerisSnapshot(startMs);
  const rawMidSnapshot = computeEphemerisSnapshot(midMs);
  const endSnapshot = computeEphemerisSnapshot(endMs);
  const meanNodesMid = getNodeLongitudesDeg(midMs, RASHIFAL_AYANAMSHA_MODE, "MEAN");
  const meanRahuSignMid = Math.floor(meanNodesMid.rahuDeg / 30) % 12 + 1;
  const meanKetuSignMid = Math.floor(meanNodesMid.ketuDeg / 30) % 12 + 1;
  const midSnapshot = rawMidSnapshot.grahas.rahu.signNumber === meanRahuSignMid && rawMidSnapshot.grahas.ketu.signNumber === meanKetuSignMid ? rawMidSnapshot : {
    ...rawMidSnapshot,
    grahas: {
      ...rawMidSnapshot.grahas,
      rahu: {
        ...rawMidSnapshot.grahas.rahu,
        longitudeDeg: meanNodesMid.rahuDeg,
        signNumber: meanRahuSignMid,
        signNameHi: RASHI_DEFINITIONS[meanRahuSignMid - 1].nameHi,
        signNameEn: RASHI_DEFINITIONS[meanRahuSignMid - 1].nameEn,
        degInSign: meanNodesMid.rahuDeg % 30
      },
      ketu: {
        ...rawMidSnapshot.grahas.ketu,
        longitudeDeg: meanNodesMid.ketuDeg,
        signNumber: meanKetuSignMid,
        signNameHi: RASHI_DEFINITIONS[meanKetuSignMid - 1].nameHi,
        signNameEn: RASHI_DEFINITIONS[meanKetuSignMid - 1].nameEn,
        degInSign: meanNodesMid.ketuDeg % 30
      }
    }
  };
  const startAnalysis = analyzeRelativeTransits(startSnapshot, rashi.number);
  const midAnalysis = analyzeRelativeTransits(midSnapshot, rashi.number);
  const endAnalysis = analyzeRelativeTransits(endSnapshot, rashi.number);
  const signIngresses = solvePlanetaryIngressesInWindow(
    monthRange.monthStartMs,
    monthRange.monthEndMs,
    timeZone,
    ["sun", "mars", "mercury", "jupiter", "venus", "saturn", "rahu", "ketu"]
  );
  const retrogradeStations = solveRetrogradeStationsInWindow(
    monthRange.monthStartMs,
    monthRange.monthEndMs,
    timeZone
  );
  const combustionEvents = solveCombustionEventsInWindow(
    monthRange.monthStartMs,
    monthRange.monthEndMs,
    timeZone
  );
  const lunarMilestones = solveLunarPhaseMilestonesInWindow(
    monthRange.monthStartMs,
    monthRange.monthEndMs,
    timeZone
  );
  const eclipses = solveEclipsesInWindow(
    monthRange.monthStartMs,
    monthRange.monthEndMs,
    location
  );
  const sunIngress = signIngresses.find((e) => e.graha === "sun");
  const startSunHouse = startAnalysis.transits.sun.houseFromMoon;
  const endSunHouse = endAnalysis.transits.sun.houseFromMoon;
  const sankranti = sunIngress ? {
    hasSankranti: true,
    dateFormattedHi: sunIngress.dateFormattedHi,
    fromSignNameHi: sunIngress.fromSignNameHi,
    toSignNameHi: sunIngress.toSignNameHi,
    fromHouse: getRelativeHouse(sunIngress.fromSign, rashi.number),
    toHouse: getRelativeHouse(sunIngress.toSign, rashi.number),
    summaryHi: `${sunIngress.dateFormattedHi} को सूर्य देव ${sunIngress.fromSignNameHi} (${houseOrdHi(getRelativeHouse(sunIngress.fromSign, rashi.number))} भाव) से ${sunIngress.toSignNameHi} (${houseOrdHi(getRelativeHouse(sunIngress.toSign, rashi.number))} भाव) में प्रवेश करेंगे (${sunIngress.toSignNameHi} संक्रांति)।`,
    globalSummaryHi: `${sunIngress.dateFormattedHi}: ${sunIngress.toSignNameHi} संक्रांति (सूर्य ${sunIngress.fromSignNameHi} से ${sunIngress.toSignNameHi} राशि में प्रवेश)`
  } : {
    hasSankranti: false,
    fromSignNameHi: startSnapshot.grahas.sun.signNameHi,
    toSignNameHi: endSnapshot.grahas.sun.signNameHi,
    fromHouse: startSunHouse,
    toHouse: endSunHouse,
    summaryHi: `पूरे माह सूर्य देव ${midSnapshot.grahas.sun.signNameHi} राशि (आपके ${houseOrdHi(midAnalysis.transits.sun.houseFromMoon)} भाव) में संचरण करेंगे।`,
    globalSummaryHi: `सूर्य देव पूरे माह ${midSnapshot.grahas.sun.signNameHi} राशि में संचरण करेंगे`
  };
  const eclipseEvaluations = eclipses.map((ec) => ({
    ec,
    eval: evaluateHouseRelativeEclipse(ec, rashi.number)
  }));
  const regularAmavasyaDayNums = /* @__PURE__ */ new Set();
  const deepawaliAmavasyaByDay = /* @__PURE__ */ new Map();
  const kartikPurnimaByDay = /* @__PURE__ */ new Map();
  for (const lm of lunarMilestones) {
    const lmDay = parseInt(lm.dateKey.slice(8, 10), 10);
    if (!Number.isInteger(lmDay)) continue;
    const lmYear = parseInt(lm.dateKey.slice(0, 4), 10);
    const lmMonth = parseInt(lm.dateKey.slice(5, 7), 10);
    const masaBefore = resolveLunarMasaInfo(
      lm.timestampMs - 6 * 36e5,
      lmYear,
      lm.type === "PURNIMA" ? 15 : 30,
      "PURNIMANTA",
      RASHIFAL_AYANAMSHA_MODE,
      lmMonth
    );
    const isKartikDeepawaliAmavasya = lm.type === "AMAVASYA" && !masaBefore.isAdhikaMasa && masaBefore.purnimantaMasaIndex === 7;
    const isKartikDevDeepawaliPurnima = lm.type === "PURNIMA" && !masaBefore.isAdhikaMasa && masaBefore.amantaMasaIndex === 7;
    if (isKartikDeepawaliAmavasya) {
      deepawaliAmavasyaByDay.set(lmDay, {
        moonSignNameHi: lm.moonSignNameHi,
        dateFormattedHi: lm.dateFormattedHi
      });
    } else if (lm.type === "AMAVASYA") {
      regularAmavasyaDayNums.add(lmDay);
    } else if (isKartikDevDeepawaliPurnima) {
      kartikPurnimaByDay.set(lmDay, {
        moonSignNameHi: lm.moonSignNameHi,
        dateFormattedHi: lm.dateFormattedHi
      });
    }
  }
  const hasDeepawaliAmavasya = deepawaliAmavasyaByDay.size > 0;
  const favorableDayNums = [];
  const moderateDayNums = [];
  const cautionDayNums = [];
  const dayMoonHouseMap = /* @__PURE__ */ new Map();
  for (let d = 1; d <= monthRange.daysInMonth; d++) {
    const noonMs = zonedWallClockToUtcMs(year, month, d, 12, 0, 0, timeZone);
    const snap = computeEphemerisSnapshot(noonMs);
    const mHouse = getRelativeHouse(snap.grahas.moon.signNumber, rashi.number);
    dayMoonHouseMap.set(d, mHouse);
    if (regularAmavasyaDayNums.has(d)) {
      if (![4, 8, 12].includes(mHouse)) {
        moderateDayNums.push(d);
      } else {
        cautionDayNums.push(d);
      }
    } else if (deepawaliAmavasyaByDay.has(d)) {
      if (![4, 8, 12].includes(mHouse)) {
        favorableDayNums.push(d);
      } else {
        moderateDayNums.push(d);
      }
    } else if ([1, 3, 6, 7, 10, 11].includes(mHouse)) {
      favorableDayNums.push(d);
    } else if ([4, 8, 12].includes(mHouse)) {
      cautionDayNums.push(d);
    } else {
      moderateDayNums.push(d);
    }
  }
  for (const item of eclipseEvaluations) {
    if (item.eval.tier === "CAUTION") {
      const ecDay = parseInt(item.ec.dateKey.slice(8, 10), 10);
      if (Number.isInteger(ecDay) && !cautionDayNums.includes(ecDay)) {
        cautionDayNums.push(ecDay);
      }
    }
  }
  const nonDeepawaliFavDays = favorableDayNums.filter((d) => !deepawaliAmavasyaByDay.has(d));
  const deepawaliFavLabels = Array.from(deepawaliAmavasyaByDay.entries()).filter(([d]) => favorableDayNums.includes(d)).map(([d]) => `${d} ${monthShortHi} (दीपावली अमावस्या)`);
  const favorableDatesHi = [
    ...deepawaliFavLabels,
    ...groupConsecutiveDaysHi(nonDeepawaliFavDays, monthShortHi)
  ];
  const cautionDatesHi = groupConsecutiveDaysHi(cautionDayNums, monthShortHi);
  const nonTaggedModerateDays = moderateDayNums.filter(
    (d) => !regularAmavasyaDayNums.has(d) && !deepawaliAmavasyaByDay.has(d)
  );
  const moderateDatesHi = [
    ...Array.from(regularAmavasyaDayNums).sort((a, b) => a - b).filter((d) => !cautionDayNums.includes(d)).map((d) => `${d} ${monthShortHi} (अमावस्या)`),
    ...Array.from(deepawaliAmavasyaByDay.entries()).filter(([d]) => moderateDayNums.includes(d)).map(([d]) => `${d} ${monthShortHi} (दीपावली अमावस्या)`),
    ...groupConsecutiveDaysHi(nonTaggedModerateDays, monthShortHi)
  ];
  const deepawaliDayEntry = Array.from(deepawaliAmavasyaByDay.keys()).sort((a, b) => a - b)[0];
  const kartikPurnimaDayEntry = Array.from(kartikPurnimaByDay.keys()).sort((a, b) => a - b)[0];
  let majorParvasNoteHi;
  if (deepawaliDayEntry !== void 0 && kartikPurnimaDayEntry !== void 0) {
    majorParvasNoteHi = `नोट: इस मास ${deepawaliDayEntry} ${monthShortHi} दीपावली अमावस्या एवं ${kartikPurnimaDayEntry} ${monthShortHi} कार्तिक पूर्णिमा (देव दीपावली) के प्रमुख महापर्व हैं—लक्ष्मी पूजन, बहीखाता, दीपदान व शुभ आरंभ हेतु ये तिथियाँ विशेष रूप से ग्राह्य हैं।`;
  } else if (deepawaliDayEntry !== void 0) {
    majorParvasNoteHi = `नोट: ${deepawaliDayEntry} ${monthShortHi} कार्तिक अमावस्या (दीपावली महापर्व) होने के कारण लक्ष्मी पूजन, बहीखाता व व्यापारिक शुभ आरंभ हेतु यह तिथि विशेष रूप से ग्राह्य है।`;
  } else if (kartikPurnimaDayEntry !== void 0) {
    majorParvasNoteHi = `नोट: ${kartikPurnimaDayEntry} ${monthShortHi} कार्तिक पूर्णिमा (देव दीपावली महापर्व) होने के कारण पवित्र स्नान, दीपदान व शुभ संकल्प हेतु यह तिथि विशेष रूप से ग्राह्य है।`;
  }
  const weekBuckets = [
    { num: 1, labelHi: "प्रथम सप्ताह", startDay: 1, endDay: 7 },
    { num: 2, labelHi: "द्वितीय सप्ताह", startDay: 8, endDay: 14 },
    { num: 3, labelHi: "तृतीय सप्ताह", startDay: 15, endDay: 21 },
    { num: 4, labelHi: "चतुर्थ सप्ताह", startDay: 22, endDay: monthRange.daysInMonth }
  ];
  const roadmapItems = weekBuckets.map((wb) => {
    const startDateKey = formatDateKey(year, month, wb.startDay);
    const endDateKey = formatDateKey(year, month, wb.endDay);
    const dateSpanHi = `${wb.startDay} से ${wb.endDay} ${monthShortHi}`;
    const triggers = [];
    for (const ing of signIngresses) {
      if (ing.dateKey >= startDateKey && ing.dateKey <= endDateKey) {
        const h = getRelativeHouse(ing.toSign, rashi.number);
        triggers.push(`${ing.grahaNameHi} → ${ing.toSignNameHi} (${houseOrdHi(h)} भाव, ${ing.dateFormattedHi})`);
      }
    }
    for (const st of retrogradeStations) {
      if (st.dateKey >= startDateKey && st.dateKey <= endDateKey) {
        triggers.push(`${st.labelHi} (${st.dateFormattedHi})`);
      }
    }
    for (const cb of combustionEvents) {
      if (cb.dateKey >= startDateKey && cb.dateKey <= endDateKey) {
        triggers.push(`${cb.labelHi} (${cb.dateFormattedHi})`);
      }
    }
    for (const lm of lunarMilestones) {
      if (lm.dateKey >= startDateKey && lm.dateKey <= endDateKey) {
        const h = getRelativeHouse(lm.moonSignNumber, rashi.number);
        triggers.push(`${lm.labelHi} — ${houseOrdHi(h)} भाव (${lm.dateFormattedHi})`);
      }
    }
    for (const ec of eclipses) {
      if (ec.dateKey >= startDateKey && ec.dateKey <= endDateKey) {
        triggers.push(
          `${ec.kindHi} (${ec.signNameHi}, ${ec.dateFormattedHi}${ec.isVisibleLocally ? " — स्थानीय रूप से दृश्य" : ""})`
        );
      }
    }
    let favInWeek = 0;
    let cautInWeek = 0;
    for (let d = wb.startDay; d <= wb.endDay; d++) {
      const mh = dayMoonHouseMap.get(d) || 5;
      if ([1, 3, 6, 7, 10, 11].includes(mh)) favInWeek++;
      if ([4, 8, 12].includes(mh)) cautInWeek++;
    }
    const hasCautionEclipseInWeek = eclipseEvaluations.some(
      (item) => item.eval.tier === "CAUTION" && item.ec.dateKey >= startDateKey && item.ec.dateKey <= endDateKey
    );
    const tone = hasCautionEclipseInWeek || cautInWeek >= 3 ? "CAUTION" : favInWeek >= 3 ? "FAVORABLE" : "BALANCED";
    const triggerSummary = triggers.length > 0 ? `प्रमुख ग्रह-घटना: ${triggers.slice(0, 2).join("; ")}। ` : "";
    const weekFocusByNum = {
      1: tone === "FAVORABLE" ? "माह की शुरुआत में लक्ष्य तय करने, नए संपर्क बनाने और प्राथमिकता वाले कार्य शुरू करने के उत्तम अवसर मिलेंगे।" : "माह के आरंभ में योजनाओं की स्पष्ट रूपरेखा तैयार करें और खर्च पर नियंत्रण रखकर आगे बढ़ें।",
      2: tone === "FAVORABLE" ? "कार्यक्षेत्र व वित्तीय प्रयासों में गति आएगी; मध्य माह की संक्रांति के आसपास संवाद व निर्णय मजबूत होंगे।" : "कार्यभार बढ़ने के संकेत हैं; दस्तावेजों की जांच और वरिष्ठों से तालमेल बनाकर चलना लाभकारी रहेगा।",
      3: tone === "FAVORABLE" ? "संक्रांति उपरांत नई ऊर्जा व अवसर सक्रिय होंगे; व्यापार विस्तार, निवेश समीक्षा और पारिवारिक सामंजस्य के लिए श्रेष्ठ चरण।" : "माह के तीसरे सप्ताह में धैर्य व स्वास्थ्य अनुशासन पर ध्यान दें; बड़े जोखिम के बजाय पुराने कार्य पूरे करें।",
      4: tone === "FAVORABLE" ? "माह के अंतिम चरण में लंबित परिणाम, आर्थिक संतोष और पारिवारिक उल्लास मिलने के सुंदर योग बन रहे हैं।" : "माह के अंत में हिसाब-किताब समेटें, आवश्यक विश्राम लें और अगले माह की तैयारी शांत चित्त से करें।"
    };
    return {
      weekNumber: wb.num,
      labelHi: wb.labelHi,
      dateSpanHi,
      startDateKey,
      endDateKey,
      tone,
      keyTriggersHi: triggers,
      guidanceHi: enforcePeriodVocabularyGuard(`${triggerSummary}${weekFocusByNum[wb.num]}`, "monthly")
    };
  });
  const blendGrahaScore = (g) => monthlyGrahaScore(startAnalysis, g) * 0.3 + monthlyGrahaScore(midAnalysis, g) * 0.4 + monthlyGrahaScore(endAnalysis, g) * 0.3;
  const jupS = blendGrahaScore("jupiter");
  const satS = blendGrahaScore("saturn");
  const sunS = blendGrahaScore("sun");
  const marsS = blendGrahaScore("mars");
  const mercS = blendGrahaScore("mercury");
  const venS = blendGrahaScore("venus");
  const rahuS = blendGrahaScore("rahu");
  const ketuS = blendGrahaScore("ketu");
  const safeLordMonthlyScore = (lord) => lord === "moon" ? (jupS + venS) * 0.5 : blendGrahaScore(lord);
  const personalCoordination = evaluatePersonalDashaAshtakavarga({
    context: request.personalContext,
    analysis: midAnalysis,
    focusSignNumbers: [
      rashi.number,
      midSnapshot.grahas.jupiter.signNumber,
      midSnapshot.grahas.saturn.signNumber
    ],
    scope: "monthly"
  });
  const personalDelta = personalCoordination ? personalCoordination.scoreDelta : 0;
  const macro = jupS * 0.42 + satS * 0.35 + sunS * 0.25 + (rahuS + ketuS) * 0.16 + personalDelta;
  const eclipseScoreDelta = eclipseEvaluations.reduce((sum, item) => sum + item.eval.scoreDelta, 0);
  const karmesh = midAnalysis.lords.houseLordMap[10];
  const dhanesh = midAnalysis.lords.houseLordMap[2];
  const labhesh = midAnalysis.lords.houseLordMap[11];
  const sukhesh = midAnalysis.lords.houseLordMap[4];
  const saptamesh = midAnalysis.lords.houseLordMap[7];
  const panchamesh = midAnalysis.lords.houseLordMap[5];
  const lagnesh = midAnalysis.lords.houseLordMap[1];
  const rawCareerScore = 74 + macro + sunS * 0.32 + satS * 0.24 + marsS * 0.24 + safeLordMonthlyScore(karmesh) * 0.32 + eclipseScoreDelta;
  const rawFinanceScore = 74 + macro + jupS * 0.32 + venS * 0.28 + safeLordMonthlyScore(dhanesh) * 0.24 + safeLordMonthlyScore(labhesh) * 0.24 + eclipseScoreDelta;
  const rawLoveFamilyScore = 74 + macro + venS * 0.36 + jupS * 0.22 + safeLordMonthlyScore(sukhesh) * 0.24 + safeLordMonthlyScore(saptamesh) * 0.2 + eclipseScoreDelta;
  const rawEducationScore = 74 + macro + mercS * 0.4 + jupS * 0.32 + safeLordMonthlyScore(panchamesh) * 0.28 + eclipseScoreDelta * 0.5;
  const rawHealthScore = 74 + macro + sunS * 0.22 + marsS * 0.2 + satS * 0.24 + safeLordMonthlyScore(lagnesh) * 0.32 + eclipseScoreDelta;
  const domainEntries = [
    { key: "career", raw: rawCareerScore, clamped: clampMonthlyScore(rawCareerScore) },
    { key: "finance", raw: rawFinanceScore, clamped: clampMonthlyScore(rawFinanceScore) },
    { key: "loveFamily", raw: rawLoveFamilyScore, clamped: clampMonthlyScore(rawLoveFamilyScore) },
    { key: "education", raw: rawEducationScore, clamped: clampMonthlyScore(rawEducationScore) },
    { key: "health", raw: rawHealthScore, clamped: clampMonthlyScore(rawHealthScore) }
  ];
  if (new Set(domainEntries.map((d) => d.clamped)).size <= 2) {
    const avgBase = Math.round(domainEntries.reduce((s, d) => s + d.clamped, 0) / 5);
    const ranked = [...domainEntries].sort((a, b) => a.raw - b.raw);
    const offsets = avgBase >= 86 ? [-3, -2, -1, 0, 1] : avgBase <= 63 ? [-1, 0, 1, 2, 3] : [-2, -1, 0, 1, 2];
    ranked.forEach((item, rankIdx) => {
      item.clamped = Math.max(60, Math.min(88, avgBase + offsets[rankIdx]));
    });
  }
  const scoreMap = Object.fromEntries(domainEntries.map((d) => [d.key, d.clamped]));
  const careerScore = scoreMap.career;
  const financeScore = scoreMap.finance;
  const loveFamilyScore = scoreMap.loveFamily;
  const educationScore = scoreMap.education;
  const healthScore = scoreMap.health;
  const overallScore = Math.max(
    60,
    Math.min(
      88,
      Math.round((careerScore + financeScore + loveFamilyScore + educationScore + healthScore) / 5)
    )
  );
  const timelineHighlightsHi = [];
  const globalTimelineHighlightsHi = [];
  for (const ing of signIngresses) {
    const h = getRelativeHouse(ing.toSign, rashi.number);
    timelineHighlightsHi.push(
      `${ing.dateFormattedHi}: ${ing.grahaNameHi} का ${ing.fromSignNameHi} → ${ing.toSignNameHi} (${houseOrdHi(h)} भाव${ing.isRetrogradeIngress ? " • वक्री गति से पुनः प्रवेश" : ""}) में गोचर परिवर्तन।`
    );
    globalTimelineHighlightsHi.push(
      `${ing.grahaNameHi} ${ing.fromSignNameHi} → ${ing.toSignNameHi} राशि (${ing.dateFormattedHi}${ing.isRetrogradeIngress ? " • वक्री गति से पुनः प्रवेश" : ""})`
    );
  }
  for (const st of retrogradeStations) {
    const stationActionHi = st.transition === "DIRECT_START" ? "वक्री से मार्गी" : "वक्री प्रारंभ";
    timelineHighlightsHi.push(`${st.dateFormattedHi}: ${st.grahaNameHi} ${stationActionHi} (${st.signNameHi} राशि)।`);
    globalTimelineHighlightsHi.push(
      `${st.grahaNameHi} ${stationActionHi} (${st.dateFormattedHi} • ${st.signNameHi} राशि)`
    );
  }
  for (const cb of combustionEvents) {
    const cbActionHi = cb.transition === "COMBUSTION_START" ? "अस्त प्रारंभ" : "उदय";
    timelineHighlightsHi.push(`${cb.dateFormattedHi}: ${cb.grahaNameHi} ${cbActionHi} (${cb.signNameHi} राशि)।`);
    globalTimelineHighlightsHi.push(
      `${cb.grahaNameHi} ${cbActionHi} (${cb.dateFormattedHi} • ${cb.signNameHi} राशि)`
    );
  }
  for (const lm of lunarMilestones) {
    const h = getRelativeHouse(lm.moonSignNumber, rashi.number);
    const lmDay = parseInt(lm.dateKey.slice(8, 10), 10);
    const lmNameHi = deepawaliAmavasyaByDay.has(lmDay) ? "दीपावली अमावस्या" : kartikPurnimaByDay.has(lmDay) ? "कार्तिक पूर्णिमा / देव दीपावली" : lm.type === "PURNIMA" ? "पूर्णिमा" : "अमावस्या";
    timelineHighlightsHi.push(`${lm.dateFormattedHi}: ${lmNameHi} (${lm.moonSignNameHi} राशि • ${houseOrdHi(h)} भाव)।`);
    globalTimelineHighlightsHi.push(`${lmNameHi} (${lm.dateFormattedHi} • ${lm.moonSignNameHi} राशि)`);
  }
  for (const item of eclipseEvaluations) {
    const ec = item.ec;
    timelineHighlightsHi.push(
      `${ec.dateFormattedHi}: ${ec.kindHi} (${ec.signNameHi} राशि — आपके ${houseOrdHi(item.eval.house)} भाव में${ec.isVisibleLocally ? ", स्थानीय रूप से दृश्य" : ""})।`
    );
    globalTimelineHighlightsHi.push(
      `${ec.kindHi} (${ec.signNameHi} राशि, ${ec.dateFormattedHi}${ec.isVisibleLocally ? " — दृश्य" : ""})`
    );
  }
  const jupT = midAnalysis.transits.jupiter;
  const satT = midAnalysis.transits.saturn;
  const marsT = midAnalysis.transits.mars;
  const mercT = midAnalysis.transits.mercury;
  const venT = midAnalysis.transits.venus;
  const rahuT = midAnalysis.transits.rahu;
  const ketuT = midAnalysis.transits.ketu;
  const grahaCondM = buildLockedGrahaConditionMap(midAnalysis);
  const jupCond = grahaCondM.jupiter;
  const satCond = grahaCondM.saturn;
  const mercCond = grahaCondM.mercury;
  const usedDrishtiPlanetsM = /* @__PURE__ */ new Set();
  const formatCondHouseM = (cond, houseNum, extra) => {
    const innerCond = cond.trim().replace(/^\(/, "").replace(/\)$/, "").trim();
    const parts = [innerCond, `${houseOrdHi(houseNum)} भाव`, (extra || "").trim()].filter(Boolean);
    return `(${parts.join(" • ")})`;
  };
  const eclipseNoteHi = eclipseEvaluations.length > 0 ? ` ${eclipseEvaluations.map((item) => item.eval.noteHi).join("। ")}।` : "";
  const fmtMonthlyDateShortHi = (dateFormattedHi) => dateFormattedHi.replace(/\s+\d{4}\s*$/u, "").trim();
  const buildMonthlyCareerTransitionNoteHi = () => {
    const notes = [];
    const marsIng = signIngresses.find((e) => e.graha === "mars");
    if (marsIng && startSnapshot.grahas.mars.dignity === "DEBILITATED") {
      const dayNum = parseInt(marsIng.dateKey.slice(8, 10), 10);
      const dShort = fmtMonthlyDateShortHi(marsIng.dateFormattedHi);
      const monthWord = dShort.replace(/^\d+\s+/u, "").trim();
      const marsToH = getRelativeHouse(marsIng.toSign, rashi.number);
      notes.push(
        `1–${dayNum} ${monthWord} तक मंगल ${marsIng.fromSignNameHi} (नीचस्थ) में रहने से ${rashi.nameHi} जातकों को कार्यक्षेत्र में जल्दबाजी से बचना चाहिए; ${dShort} के बाद ${houseOrdHi(marsToH)} भाव में मंगल के ${marsIng.toSignNameHi} राशि प्रवेश से नए उत्साह व बल की प्राप्ति होगी।`
      );
    } else if (marsIng) {
      const dShort = fmtMonthlyDateShortHi(marsIng.dateFormattedHi);
      const marsToH = getRelativeHouse(marsIng.toSign, rashi.number);
      notes.push(
        `${dShort} को ${rashi.nameHi} के ${houseOrdHi(marsToH)} भाव में मंगल के ${marsIng.toSignNameHi} राशि प्रवेश से कार्यक्षमता व निर्णयों में नई ऊर्जा आएगी।`
      );
    }
    const rahuIng = signIngresses.find((e) => e.graha === "rahu");
    const ketuIng = signIngresses.find((e) => e.graha === "ketu");
    if (rahuIng && ketuIng) {
      const rahuToH = getRelativeHouse(rahuIng.toSign, rashi.number);
      notes.push(
        `${fmtMonthlyDateShortHi(rahuIng.dateFormattedHi)} को राहु ${rahuIng.toSignNameHi} (${rashi.nameHi} के ${houseOrdHi(rahuToH)} भाव) व केतु ${ketuIng.toSignNameHi} राशि में प्रवेश करेंगे — दीर्घकालिक कार्ययोजना में नए मोड़ बनेंगे।`
      );
    }
    const jupIng = signIngresses.find((e) => e.graha === "jupiter");
    if (jupIng) {
      const jupToH = getRelativeHouse(jupIng.toSign, rashi.number);
      notes.push(
        `${fmtMonthlyDateShortHi(jupIng.dateFormattedHi)} को देवगुरु बृहस्पति ${rashi.nameHi} के ${houseOrdHi(jupToH)} भाव (${jupIng.toSignNameHi} राशि) में प्रवेश करेंगे।`
      );
    }
    const satIng = signIngresses.find((e) => e.graha === "saturn");
    if (satIng) {
      const satToH = getRelativeHouse(satIng.toSign, rashi.number);
      notes.push(
        `${fmtMonthlyDateShortHi(satIng.dateFormattedHi)} को शनि देव ${rashi.nameHi} के ${houseOrdHi(satToH)} भाव (${satIng.toSignNameHi} राशि) में प्रवेश करेंगे।`
      );
    }
    const venIng = signIngresses.find((e) => e.graha === "venus");
    if (venIng && notes.length < 3) {
      const venToH = getRelativeHouse(venIng.toSign, rashi.number);
      notes.push(
        `${fmtMonthlyDateShortHi(venIng.dateFormattedHi)} को शुक्र ${venIng.fromSignNameHi} से ${venIng.toSignNameHi} (${rashi.nameHi} के ${houseOrdHi(venToH)} भाव) में प्रवेश कर सुख-सुविधा व सहयोग में परिवर्तन लाएँगे।`
      );
    }
    const mercIng = signIngresses.find((e) => e.graha === "mercury");
    if (mercIng && notes.length < 3) {
      const mercToH = getRelativeHouse(mercIng.toSign, rashi.number);
      notes.push(
        `${fmtMonthlyDateShortHi(mercIng.dateFormattedHi)} को बुध ${mercIng.fromSignNameHi} से ${mercIng.toSignNameHi} (${houseOrdHi(mercToH)} भाव) में प्रवेश करेंगे।`
      );
    }
    if (retrogradeStations.length > 0 && notes.length < 3) {
      const stPhrases = retrogradeStations.slice(0, 2).map((st) => {
        const dShort = fmtMonthlyDateShortHi(st.dateFormattedHi);
        const motionHi = st.transition === "DIRECT_START" ? "मार्गी" : "वक्री";
        return `${dShort} को ${st.grahaNameHi} ${motionHi}`;
      });
      const joined = stPhrases.length === 2 ? `${stPhrases[0]} तथा ${stPhrases[1]}` : stPhrases[0];
      const stHouse = getRelativeHouse(retrogradeStations[0].signNumber, rashi.number);
      notes.push(
        `${joined} होने से ${rashi.nameHi} के ${houseOrdHi(stHouse)} भाव से जुड़ी कार्यगति व व्यावसायिक योजनाओं में स्पष्ट बदलाव दिखेगा।`
      );
    }
    return notes.length > 0 ? ` ${notes.slice(0, 3).join(" ")}` : "";
  };
  const monthlyCareerTransitionNoteHi = buildMonthlyCareerTransitionNoteHi();
  const careerSecondSentenceHi = karmesh === "moon" ? `कर्मेश चंद्रमा माह भर सभी १२ भावों में संचरणशील रहकर कार्यक्षेत्र में गतिशील अवसर व नए दायित्व देंगे, जबकि शनि देव${satCond} ${rashi.nameHi} के ${houseOrdHi(satT.houseFromMoon)} भाव से दीर्घकालिक परिश्रम का स्थायी परिणाम दिलाएँगे।` : `शनि देव${satCond} ${rashi.nameHi} के ${houseOrdHi(satT.houseFromMoon)} भाव से दीर्घकालिक परिश्रम का स्थायी परिणाम दिलाएँगे।`;
  const sankrantiClauseHi = sankranti.hasSankranti ? `${fmtMonthlyDateShortHi(sankranti.dateFormattedHi || "")} को ${sankranti.toSignNameHi} संक्रांति (${houseOrdHi(sankranti.toHouse)} भाव में सूर्य प्रवेश) के बाद ${voice.careerStrongTailHi}।` : `पूरे माह ${voice.careerBalancedTailHi}।`;
  const monthlyTithiIdx = Math.floor(((midSnapshot.grahas.moon.siderealLon - midSnapshot.grahas.sun.siderealLon) % 360 + 360) % 360 / 12) + 1;
  const monthlyYogaIdx = Math.floor(((midSnapshot.grahas.sun.siderealLon + midSnapshot.grahas.moon.siderealLon) % 360 + 360) % 360 / (360 / 27)) % 27;
  const monthlyKaranIdx = Math.floor(((midSnapshot.grahas.moon.siderealLon - midSnapshot.grahas.sun.siderealLon) % 360 + 360) % 360 / 6) % 11;
  const monthlySeedBase = {
    samvat: year + (month >= 4 ? 57 : 56),
    tithi: monthlyTithiIdx,
    nakshatra: midSnapshot.grahas.moon.nakshatraIndex,
    pada: midSnapshot.grahas.moon.nakshatraPada || 1,
    yoga: monthlyYogaIdx,
    karan: monthlyKaranIdx,
    vaar: new Date(Date.UTC(year, month - 1, 15)).getUTCDay(),
    chandraRashi: midSnapshot.grahas.moon.signNumber,
    suryaRashi: midSnapshot.grahas.sun.signNumber,
    ayanamsaDegrees: midSnapshot.ayanamshaDeg,
    vakriPlanetsCount: countVakriPlanets(midSnapshot.grahas),
    rashiIndex: rashi.number,
    year,
    dayOfYear: computeDayOfYear(year, month, 15)
  };
  const monthlyCombustBenefic = Boolean(jupT.graha.isCombust || venT.graha.isCombust);
  const careerModular64M = buildModular64FalitHi({
    seed: { ...monthlySeedBase, houseOrSignIndex: satT.houseFromMoon, pillar: "career" },
    polarity: resolveModularPolarity({
      isCombustBenefic: monthlyCombustBenefic,
      score: careerScore,
      period: "monthly"
    }),
    period: "monthly",
    periodLabelHi: monthRange.monthLabelHi
  });
  const careerHi = applyEraAwareShabdaKosh(
    enforcePeriodVocabularyGuard(
      `माह के पूर्वार्ध में ${rashi.nameHi} के लिए सूर्य ${formatCondHouseM(grahaCondM.sun, sankranti.fromHouse)} और मंगल ${formatCondHouseM(grahaCondM.mars, marsT.houseFromMoon)} कार्ययोजना को दिशा देंगे, जबकि ${sankrantiClauseHi}${monthlyCareerTransitionNoteHi} ${careerSecondSentenceHi} ${careerModular64M} ${buildHouseDrishtiNoteHi(midAnalysis, 10, "monthly", usedDrishtiPlanetsM)}`,
      "monthly"
    ),
    year
  );
  const dhaneshT = midAnalysis.transits[dhanesh];
  const labheshT = midAnalysis.transits[labhesh];
  const monthlyFinanceRoles = formatUniqueGrahaRolesHi(
    [
      ...dhanesh !== "moon" ? [{ graha: dhanesh, rolePrefixHi: "धनेश", detailHi: formatCondHouseM(grahaCondM[dhanesh], dhaneshT.houseFromMoon) }] : [],
      ...labhesh !== "moon" ? [{ graha: labhesh, rolePrefixHi: "लाभेश", detailHi: formatCondHouseM(grahaCondM[labhesh], labheshT.houseFromMoon) }] : [],
      {
        graha: "jupiter",
        displayNameHi: "देवगुरु बृहस्पति",
        detailHi: formatCondHouseM(jupCond, jupT.houseFromMoon)
      },
      { graha: "venus", detailHi: formatCondHouseM(grahaCondM.venus, venT.houseFromMoon) }
    ],
    "और"
  );
  const financeTimingClauseHi = `${favorableDatesHi.slice(0, 3).join(", ")} अनुकूल हैं${cautionDatesHi.length > 0 ? `, जबकि ${cautionDatesHi.slice(0, 3).join(", ")} को जोखिम टालें` : ""}`;
  const financeSecondSentenceHi = dhanesh === "moon" ? `धनेश चंद्रमा माह भर सभी १२ भावों में संचरणशील रहकर आय-व्यय में गतिशील उतार-चढ़ाव देंगे, अतः बड़े वित्तीय निर्णय हेतु ${financeTimingClauseHi}।` : labhesh === "moon" ? `लाभेश चंद्रमा माह भर सभी १२ भावों में संचरणशील रहकर चरणबद्ध लाभ व नए आय-अवसर प्रदान करेंगे, अतः बड़े वित्तीय निर्णय हेतु ${financeTimingClauseHi}।` : `${rashi.nameHi} जातकों के बड़े वित्तीय निर्णय हेतु ${financeTimingClauseHi}।`;
  const financeModular64M = buildModular64FalitHi({
    seed: { ...monthlySeedBase, houseOrSignIndex: jupT.houseFromMoon, pillar: "finance" },
    polarity: resolveModularPolarity({
      isCombustBenefic: monthlyCombustBenefic,
      score: financeScore,
      period: "monthly"
    }),
    period: "monthly",
    periodLabelHi: monthRange.monthLabelHi
  });
  const financeHi = enforcePeriodVocabularyGuard(
    `${rashi.nameHi} के ${monthlyFinanceRoles} के मासिक प्रभाव से ${financeScore >= 78 ? voice.financeStrongLeadHi : financeScore <= 65 ? voice.financeCautionLeadHi : voice.financeBalancedLeadHi}। ${financeSecondSentenceHi} ${financeModular64M} ${buildHouseDrishtiNoteHi(midAnalysis, 2, "monthly", usedDrishtiPlanetsM)}`,
    "monthly"
  );
  const saptameshMoonLineHi = saptamesh === "moon" ? `सप्तमेश चंद्रमा माह भर सभी १२ भावों में संचरणशील रहकर दांपत्य व साझेदारी में भावनात्मक जुड़ाव एवं संवेदनशीलता बढ़ाएँगे, अतः संवाद में मधुरता व धैर्य बनाए रखें। ` : "";
  const familyModular64M = buildModular64FalitHi({
    seed: { ...monthlySeedBase, houseOrSignIndex: venT.houseFromMoon, pillar: "family" },
    polarity: resolveModularPolarity({
      isCombustBenefic: monthlyCombustBenefic,
      score: loveFamilyScore,
      period: "monthly"
    }),
    period: "monthly",
    periodLabelHi: monthRange.monthLabelHi
  });
  const loveFamilyHi = enforcePeriodVocabularyGuard(
    `${rashi.nameHi} राशि हेतु शुक्र ${formatCondHouseM(grahaCondM.venus, venT.houseFromMoon)}, गुरु ${formatCondHouseM(jupCond, jupT.houseFromMoon)} और राहु-केतु (${houseOrdHi(rahuT.houseFromMoon)}/${houseOrdHi(ketuT.houseFromMoon)} अक्ष) के अनुसार पूरे माह ${loveFamilyScore >= 78 ? `${voice.familyStrongHi}।` : loveFamilyScore <= 65 ? `${voice.familyCautionHi}।` : `${voice.familyBalancedHi}।`} ${saptameshMoonLineHi}${familyModular64M} ${buildHouseDrishtiNoteHi(midAnalysis, 7, "monthly", usedDrishtiPlanetsM)}`,
    "monthly"
  );
  const educationModular64M = buildModular64FalitHi({
    seed: { ...monthlySeedBase, houseOrSignIndex: mercT.houseFromMoon, pillar: "education" },
    polarity: resolveModularPolarity({
      isCombustBenefic: monthlyCombustBenefic,
      score: educationScore,
      period: "monthly"
    }),
    period: "monthly",
    periodLabelHi: monthRange.monthLabelHi
  });
  const educationHi = enforcePeriodVocabularyGuard(
    `${rashi.nameHi} के विद्यार्थियों हेतु बुध ${formatCondHouseM(mercCond, mercT.houseFromMoon)} और देवगुरु बृहस्पति ${formatCondHouseM(jupCond, jupT.houseFromMoon)} के प्रभाव से ${educationScore >= 78 ? voice.educationStrongHi : voice.educationCautionHi}। माह की अनुकूल तिथियों (${favorableDatesHi.slice(0, 2).join(", ")}) में ${rashi.nameHi} जातक कठिन अभ्यास व मूल्यांकन पर विशेष ध्यान दें। ${educationModular64M}`,
    "monthly"
  );
  const flatSadeSatiHi = midAnalysis.sadeSatiPhase === "RISING_12TH" ? "शनि साढ़ेसाती प्रथम चरण" : midAnalysis.sadeSatiPhase === "PEAK_1ST" ? "शनि साढ़ेसाती मध्य चरण" : midAnalysis.sadeSatiPhase === "SETTING_2ND" ? "शनि साढ़ेसाती अंतिम चरण" : midAnalysis.sadeSatiPhase === "DHAIYA_4TH" ? "शनि ढैय्या / कंटक शनि" : midAnalysis.sadeSatiPhase === "DHAIYA_8TH" ? "शनि ढैय्या / अष्टम शनि" : "साढ़ेसाती/ढैय्या से मुक्त";
  const healthModular64M = buildModular64FalitHi({
    seed: { ...monthlySeedBase, houseOrSignIndex: marsT.houseFromMoon, pillar: "health" },
    polarity: resolveModularPolarity({
      isCombustBenefic: monthlyCombustBenefic,
      score: midAnalysis.sadeSatiPhase !== "NONE" ? Math.min(healthScore, 66) : healthScore,
      period: "monthly"
    }),
    period: "monthly",
    periodLabelHi: monthRange.monthLabelHi
  });
  const healthHi = enforcePeriodVocabularyGuard(
    `${rashi.nameHi} के लिए शनि ${formatCondHouseM(satCond, satT.houseFromMoon, flatSadeSatiHi)} व मंगल ${formatCondHouseM(grahaCondM.mars, marsT.houseFromMoon)} के मासिक गोचर से ${healthScore <= 68 || midAnalysis.sadeSatiPhase !== "NONE" ? `${voice.healthEnergyCautionHi}।` : `${voice.healthEnergyStrongHi}।`} ${healthModular64M} पूरे माह ${voice.wellnessHintHi}${cautionDatesHi.length > 0 ? ` तथा ${cautionDatesHi.slice(0, 2).join(", ")} के आसपास अतिरिक्त श्रम से बचें` : ""}।`,
    "monthly"
  );
  const luckyAttributes = deriveLogicalLuckyAttributes({
    moonSign: rashi,
    analysis: midAnalysis,
    period: "monthly"
  });
  const remedy = buildSattvicRemedy({
    moonSign: rashi,
    analysis: midAnalysis,
    period: "monthly",
    cautionPlanet: midAnalysis.sadeSatiPhase !== "NONE" ? "saturn" : void 0
  });
  const monthlyStrategyHi = [
    enforcePeriodVocabularyGuard(
      `प्रमुख संपत्ति, करियर या दीर्घकालिक बचत निर्णय माह की अनुकूल तिथियों (${favorableDatesHi.slice(0, 3).join(", ")}) में निर्धारित करें।`,
      "monthly"
    ),
    enforcePeriodVocabularyGuard(
      sankranti.hasSankranti ? `${sankranti.dateFormattedHi} की संक्रांति के बाद नई कार्ययोजना व साझेदारी की समीक्षा कर गति बढ़ाएँ।` : "प्रत्येक सप्ताह के अंत में अपने बजट और कार्य-प्रगति की शांत समीक्षा करें।",
      "monthly"
    )
  ];
  const cautionsHi = [
    enforcePeriodVocabularyGuard(
      cautionDatesHi.length > 0 ? `सावधानी की तिथियों (${cautionDatesHi.slice(0, 3).join(", ")}) में बिना पूर्ण जांच के कानूनी दस्तावेज या बड़े उधार से दूरी रखें और ${voice.cautionStyleHi}।` : `माह के दौरान जल्दबाजी में किए गए वित्तीय वादों से बचें तथा ${voice.cautionStyleHi}।`,
      "monthly"
    ),
    enforcePeriodVocabularyGuard(
      retrogradeStations.length > 0 ? `इस माह ${retrogradeStations.map(
        (r) => r.transition === "DIRECT_START" ? `${r.grahaNameHi} (वक्री से मार्गी • ${r.dateFormattedHi})` : `${r.grahaNameHi} (वक्री प्रारंभ • ${r.dateFormattedHi})`
      ).join(", ")} के वक्री/मार्गी परिवर्तन के कारण पुराने अधूरे कार्यों को प्राथमिकता से पूरा करें।` : "कार्यभार बढ़ने पर भी स्वास्थ्य, निद्रा और पारिवारिक संतुलन की उपेक्षा न करें।",
      "monthly"
    )
  ];
  const headlineHi = enforcePeriodVocabularyGuard(
    `${rashi.nameHi} मासिक राशिफल (${monthRange.monthLabelHi}): गुरु-${houseOrdHi(jupT.houseFromMoon)}, शनि-${houseOrdHi(satT.houseFromMoon)} व ${sankranti.hasSankranti ? `${sankranti.toSignNameHi} संक्रांति का प्रभाव` : "दीर्घकालिक ग्रह संतुलन"}`,
    "monthly"
  );
  const mentalOutlookHi = enforcePeriodVocabularyGuard(
    `पूरे ${monthRange.monthLabelHi} माह में ${rashi.nameHi} जातकों की मानसिक ऊर्जा व आध्यात्मिक परिपक्वता राशि स्वामी ${GRAHA_NAMES[lagnesh].shortHi} (${houseOrdHi(midAnalysis.transits[lagnesh].houseFromMoon)} भाव) और ${voice.strengthPhraseHi} से संबल पाएगी। अनुकूल तिथियों (${favorableDatesHi.slice(0, 2).join(", ") || monthRange.monthLabelHi}) में आत्मविश्वास व निर्णय-क्षमता प्रबल रहेगी, जबकि मध्यम व सावधानी तिथियों में प्रातः ध्यान, जप व शांत चिंतन अपनाते हुए ${voice.cautionStyleHi}।`,
    "monthly"
  );
  const monthlyOverviewHi = enforcePeriodVocabularyGuard(
    `${monthRange.monthLabelHi} में ${rashi.nameHi} जातकों के लिए देवगुरु बृहस्पति ${formatCondHouseM(jupCond, jupT.houseFromMoon)}, शनि देव ${formatCondHouseM(satCond, satT.houseFromMoon)} तथा राहु-केतु (${houseOrdHi(rahuT.houseFromMoon)}/${houseOrdHi(ketuT.houseFromMoon)} भाव) पूरे माह की आधारशिला तय कर रहे हैं। ${sankranti.summaryHi}${eclipseNoteHi}${personalCoordination ? ` ${personalCoordination.insightHi}` : ""}`,
    "monthly"
  );
  const nonMoonIds = ALL_GRAHA_IDS.filter((id) => id !== "moon");
  return {
    engineType: "monthly",
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
    monthSpan: {
      year: monthRange.year,
      month: monthRange.month,
      monthKey: monthRange.monthKey,
      daysInMonth: monthRange.daysInMonth,
      monthLabelHi: monthRange.monthLabelHi,
      monthLabelEn: monthRange.monthLabelEn
    },
    sankranti,
    majorTransits: {
      signIngresses,
      retrogradeStations,
      combustionEvents,
      lunarMilestones,
      eclipses,
      timelineHighlightsHi,
      globalTimelineHighlightsHi
    },
    weekByWeekRoadmap: roadmapItems,
    favorableDatesHi,
    moderateDatesHi,
    cautionDatesHi,
    hasDeepawaliAmavasya,
    majorParvasNoteHi,
    personalCoordination,
    sadeSatiStatusHi: midAnalysis.sadeSatiLabelHi,
    scores: {
      overall: overallScore,
      career: careerScore,
      finance: financeScore,
      loveFamily: loveFamilyScore,
      education: educationScore,
      health: healthScore
    },
    headlineHi,
    mentalOutlookHi,
    monthlyOverviewHi,
    sections: {
      careerHi,
      financeHi,
      loveFamilyHi,
      educationHi,
      healthHi
    },
    monthlyStrategyHi,
    cautionsHi,
    luckyAttributes,
    remedy,
    astronomicalBasis: {
      midMonthTimestampMs: midSnapshot.timestampMs,
      ayanamshaDMS: midSnapshot.ayanamshaDMS,
      planetsMidMonth: nonMoonIds.map((id) => {
        const tr = midAnalysis.transits[id];
        return {
          id,
          nameHi: tr.graha.shortHi,
          signNumber: tr.graha.signNumber,
          signNameHi: tr.graha.signNameHi,
          houseFromMoon: tr.houseFromMoon,
          dignityHi: tr.graha.dignityHi,
          isRetrograde: tr.graha.isRetrograde,
          isCombust: tr.graha.isCombust,
          isFavorableGochar: tr.isEffectiveFavorable,
          aspectedHouses: tr.aspectedHouses
        };
      })
    }
  };
}
function generateMonthlyRashifal(request) {
  try {
    const rashi = resolveRashiDefinition(request.rashi);
    const location = request.location || DEFAULT_RASHIFAL_LOCATION;
    const timeZone = resolveSafeTimezone(location);
    const nowParts = getLocalDateParts(/* @__PURE__ */ new Date(), timeZone);
    const year = request.year ?? nowParts.year;
    const month = request.month ?? nowParts.month;
    const monthRange = getCalendarMonthRange(year, month, timeZone);
    const cacheKey = buildMonthlyRashifalCacheKey({
      rashiId: rashi.id,
      monthKey: monthRange.monthKey,
      location,
      personalContextHash: getPersonalContextCacheHash(request.personalContext)
    });
    return safeExecuteRashifalEngine(
      "monthly",
      cacheKey,
      48 * 3600 * 1e3,
      () => computeMonthlyCore({ ...request, year, month }),
      Boolean(request.bypassCache)
    );
  } catch (err) {
    return {
      status: "unavailable",
      data: null,
      errorCode: "INVALID_MONTHLY_INPUT",
      userMessageHi: "मासिक राशिफल के लिए दी गई राशि या माह विवरण अमान्य है। कृपया वैध माह व राशि चुनें।",
      userMessageEn: "Invalid Moon Sign or year/month supplied for Monthly Rashifal.",
      technicalReason: err instanceof Error ? err.message : String(err)
    };
  }
}
function generateAll12MonthlyRashifal(options = {}) {
  const results = {};
  for (let i = 1; i <= 12; i++) {
    const rashi = resolveRashiDefinition(i);
    results[rashi.id] = generateMonthlyRashifal({ ...options, rashi: i });
  }
  return results;
}
export {
  generateAll12MonthlyRashifal,
  generateMonthlyRashifal
};
