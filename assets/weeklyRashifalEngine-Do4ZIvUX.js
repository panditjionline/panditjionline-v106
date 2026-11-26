import { aB as resolveRashiDefinition, aC as DEFAULT_RASHIFAL_LOCATION, r as resolveSafeTimezone, aS as getMondaySundayWeekRange, aE as getPersonalContextCacheHash, av as zonedWallClockToUtcMs, aF as computeEphemerisSnapshot, aG as analyzeRelativeTransits, aH as solvePlanetaryIngressesInWindow, aT as solveRetrogradeStationsInWindow, aU as solveCombustionEventsInWindow, aV as solveLunarPhaseMilestonesInWindow, aI as getRelativeHouse, aW as RASHI_DEFINITIONS, aP as evaluatePersonalDashaAshtakavarga, aM as resolveLunarMasaInfo, ar as RASHIFAL_AYANAMSHA_MODE, au as GRAHA_NAMES, as as RASHIFAL_NODE_MODE, at as RASHIFAL_CORE_ENGINE_VERSION, aQ as ALL_GRAHA_IDS, aR as getRetrogradeCheshtaBalaScore } from "./panchang-core-WfwKNTXG.js";
import { D as buildWeeklyRashifalCacheKey, o as safeExecuteRashifalEngine, q as getRashiVoiceHi, t as houseOrdHi, B as BHAVA_DOMAIN_HI, u as buildLockedGrahaConditionMap, x as formatUniqueGrahaRolesHi, d as computeDayOfYear, e as countVakriPlanets, k as buildModular64FalitHi, l as resolveModularPolarity, C as applyEraAwareShabdaKosh, E as enforcePeriodVocabularyGuard, v as buildHouseDrishtiNoteHi, z as deriveLogicalLuckyAttributes, A as buildSattvicRemedy } from "./drikGanitaRashifalEngine-DPYMZu12.js";
import "./vendor-astronomy-C8JZdkQu.js";
function classifyMoonHouseWeekly(house) {
  if ([1, 2, 3, 6, 7, 10, 11].includes(house)) {
    const scoreMap2 = { 11: 90, 10: 88, 1: 87, 7: 85, 3: 83, 6: 81, 2: 79 };
    return {
      status: "FAVORABLE",
      dayScore: scoreMap2[house] || 84,
      reasonHi: `${houseOrdHi(house)} भाव में चंद्रमा — ${BHAVA_DOMAIN_HI[house]} में सहयोग व प्रगति`
    };
  }
  if ([4, 8, 12].includes(house)) {
    const scoreMap2 = { 4: 64, 12: 61, 8: 57 };
    return {
      status: "CAUTION",
      dayScore: scoreMap2[house] || 60,
      reasonHi: `${houseOrdHi(house)} भाव में चंद्रमा — धैर्य, संयम व जोखिम से दूरी आवश्यक`
    };
  }
  const scoreMap = { 9: 77, 5: 75 };
  return {
    status: "BALANCED",
    dayScore: scoreMap[house] || 76,
    reasonHi: `${houseOrdHi(house)} भाव में चंद्रमा — संतुलित गति और ${BHAVA_DOMAIN_HI[house]} पर ध्यान`
  };
}
function weeklyGrahaBonus(analysis, graha) {
  const t = analysis.transits[graha];
  let bonus = t.isEffectiveFavorable ? 3 : t.isGocharFavorableRaw && t.hasVedha ? 0.5 : t.hasVipreetVedha ? 1.2 : -1.8;
  if (t.graha.dignity === "EXALTED" || t.graha.dignity === "MOOLATRIKONA") bonus += 1.4;
  else if (t.graha.dignity === "OWN_SIGN") bonus += 0.9;
  else if (t.graha.dignity === "DEBILITATED") bonus -= 1.4;
  if (t.graha.isRetrograde) {
    bonus += getRetrogradeCheshtaBalaScore(graha, t.graha.dignity);
  }
  if (t.functionalRole === "YOGAKARAKA") bonus += 1;
  else if (t.isMaraka && !t.isEffectiveFavorable) bonus -= 0.7;
  if (t.graha.isCombust) bonus -= 1;
  return bonus;
}
function clampWeeklyScore(v) {
  return Math.max(58, Math.min(92, Math.round(v)));
}
function buildPhaseBlock(phaseId, labelHi, daysSpanHi, sliceDays, phaseEvents) {
  const favCount = sliceDays.filter((d) => d.status === "FAVORABLE").length;
  const cautCount = sliceDays.filter((d) => d.status === "CAUTION").length;
  const tone = cautCount > favCount ? "CAUTION" : favCount > 0 ? "FAVORABLE" : "BALANCED";
  const uniqueHouses = Array.from(new Set(sliceDays.map((d) => d.moonHouseFromRashi)));
  const housePhrase = uniqueHouses.map((h) => `${houseOrdHi(h)} भाव`).join(" व ");
  const eventNote = phaseEvents.length > 0 ? ` इसी चरण में ${phaseEvents.map((e) => `${e.grahaNameHi} का ${e.toSignNameHi} में प्रवेश (${e.dateFormattedHi})`).join(" और ")} परिस्थिति को नई दिशा देगा।` : "";
  const guidanceCore = tone === "FAVORABLE" ? `चंद्रमा आपके ${housePhrase} से संचरण करेंगे, जिससे महत्वपूर्ण मीटिंग, नए निर्णय और लंबित कार्य आगे बढ़ाने के लिए यह चरण अत्यंत उपयोगी रहेगा।` : tone === "CAUTION" ? `चंद्रमा के ${housePhrase} में रहने से जल्दबाजी व विवाद टालकर नियमित कार्यों की समीक्षा और बजट नियंत्रण पर ध्यान देना बेहतर रहेगा।` : `चंद्रमा के ${housePhrase} में संचरण से गति संतुलित रहेगी; योजनाबद्ध परिश्रम व आपसी तालमेल से ठोस परिणाम मिलेंगे।`;
  return {
    phaseId,
    labelHi,
    daysSpanHi,
    dominantMoonHouses: uniqueHouses,
    tone,
    guidanceHi: enforcePeriodVocabularyGuard(`${guidanceCore}${eventNote}`, "weekly")
  };
}
function computeWeeklyCore(request) {
  const rashi = resolveRashiDefinition(request.rashi);
  const voice = getRashiVoiceHi(rashi.number);
  const location = request.location || DEFAULT_RASHIFAL_LOCATION;
  const timeZone = resolveSafeTimezone(location);
  const weekRange = getMondaySundayWeekRange(request.anchorDate ?? /* @__PURE__ */ new Date(), timeZone);
  const thu = weekRange.days[3];
  const midWeekMs = zonedWallClockToUtcMs(thu.year, thu.month, thu.day, 12, 0, 0, timeZone);
  const midSnapshot = computeEphemerisSnapshot(midWeekMs);
  const midAnalysis = analyzeRelativeTransits(midSnapshot, rashi.number);
  const moonIngresses = solvePlanetaryIngressesInWindow(
    weekRange.weekStartMs,
    weekRange.weekEndMs,
    timeZone,
    ["moon"]
  );
  const nonMoonIngresses = solvePlanetaryIngressesInWindow(
    weekRange.weekStartMs,
    weekRange.weekEndMs,
    timeZone,
    ["sun", "mars", "mercury", "jupiter", "venus", "saturn", "rahu", "ketu"]
  );
  const retrogradeStations = solveRetrogradeStationsInWindow(
    weekRange.weekStartMs,
    weekRange.weekEndMs,
    timeZone
  );
  const combustionEvents = solveCombustionEventsInWindow(
    weekRange.weekStartMs,
    weekRange.weekEndMs,
    timeZone
  );
  const lunarMilestones = solveLunarPhaseMilestonesInWindow(
    weekRange.weekStartMs,
    weekRange.weekEndMs,
    timeZone
  );
  const amavasyaDateKeys = new Set(
    lunarMilestones.filter((lm) => lm.type === "AMAVASYA").map((lm) => lm.dateKey)
  );
  const dayByDay = [];
  const dayScoreByIdx = [];
  const signsTransited = [];
  let moonScoreSum = 0;
  for (const d of weekRange.days) {
    const noonMs = zonedWallClockToUtcMs(d.year, d.month, d.day, 12, 0, 0, timeZone);
    const snap = computeEphemerisSnapshot(noonMs);
    const mSign = snap.grahas.moon.signNumber;
    const mHouse = getRelativeHouse(mSign, rashi.number);
    const cls = classifyMoonHouseWeekly(mHouse);
    const isAmavasyaDay = amavasyaDateKeys.has(d.dateKey);
    const effectiveStatus = isAmavasyaDay && cls.status === "FAVORABLE" ? "BALANCED" : cls.status;
    const effectiveReasonHi = isAmavasyaDay && cls.status === "FAVORABLE" ? `${houseOrdHi(mHouse)} भाव में चंद्रमा (अमावस्या तिथि) — शुभ कार्यों में शांत संयम, आत्मचिंतन व नियमित कार्य ही उपयुक्त` : cls.reasonHi;
    moonScoreSum += cls.dayScore;
    if (signsTransited[signsTransited.length - 1] !== mSign) {
      signsTransited.push(mSign);
    }
    dayScoreByIdx.push(cls.dayScore);
    dayByDay.push({
      dateKey: d.dateKey,
      weekdayHi: d.weekdayHi,
      shortDateHi: d.shortDateHi,
      moonSignNumber: mSign,
      moonSignNameHi: snap.grahas.moon.signNameHi,
      moonHouseFromRashi: mHouse,
      status: effectiveStatus,
      reasonHi: effectiveReasonHi
    });
  }
  const chronologicalSigns = [];
  const pushSignChrono = (sNum) => {
    if (chronologicalSigns[chronologicalSigns.length - 1] !== sNum) {
      chronologicalSigns.push(sNum);
    }
  };
  const startMoonSnap = computeEphemerisSnapshot(weekRange.weekStartMs);
  pushSignChrono(startMoonSnap.grahas.moon.signNumber);
  const sortedMoonIngresses = [...moonIngresses].sort((a, b) => a.timestampMs - b.timestampMs);
  for (const ing of sortedMoonIngresses) {
    pushSignChrono(ing.fromSign);
    pushSignChrono(ing.toSign);
  }
  const endMoonSnap = computeEphemerisSnapshot(weekRange.weekEndMs - 6e4);
  pushSignChrono(endMoonSnap.grahas.moon.signNumber);
  if (chronologicalSigns.length > 0) {
    signsTransited.length = 0;
    signsTransited.push(...chronologicalSigns);
  }
  const signsTransitedLabelHi = signsTransited.map((s) => RASHI_DEFINITIONS[(s - 1 + 12) % 12].nameHi).join(" → ");
  const signsWithHousesLabelHi = signsTransited.map((s) => `${RASHI_DEFINITIONS[(s - 1 + 12) % 12].nameHi} (${houseOrdHi(getRelativeHouse(s, rashi.number))})`).join(" → ");
  const getIndicesByStatus = (st) => dayByDay.map((item, idx) => ({ item, idx, score: dayScoreByIdx[idx] })).filter((x) => x.item.status === st);
  if (getIndicesByStatus("BALANCED").length === 0) {
    const favPool = getIndicesByStatus("FAVORABLE");
    if (favPool.length >= 2) {
      const preferredMod = favPool.filter((x) => [2, 5, 9].includes(x.item.moonHouseFromRashi));
      let toPromote = [];
      if (preferredMod.length > 0) {
        const maxCanPromote = Math.min(2, favPool.length - 1);
        toPromote = preferredMod.slice(0, maxCanPromote);
      } else {
        const sortedAsc = [...favPool].sort((a, b) => a.score - b.score || a.idx - b.idx);
        const lowestScore = sortedAsc[0].score;
        const tiedLowest = sortedAsc.filter((x) => x.score === lowestScore);
        const maxCanPromote = Math.min(2, favPool.length - 1);
        toPromote = tiedLowest.slice(0, maxCanPromote);
      }
      for (const pick of toPromote) {
        dayByDay[pick.idx] = {
          ...dayByDay[pick.idx],
          status: "BALANCED",
          reasonHi: `${houseOrdHi(pick.item.moonHouseFromRashi)} भाव में चंद्रमा — संतुलित गति और ${BHAVA_DOMAIN_HI[pick.item.moonHouseFromRashi]} पर नियोजित ध्यान`
        };
      }
    } else {
      const cautPool = getIndicesByStatus("CAUTION");
      if (cautPool.length >= 2) {
        const highestCaut = [...cautPool].sort((a, b) => b.score - a.score || a.idx - b.idx)[0];
        dayByDay[highestCaut.idx] = {
          ...dayByDay[highestCaut.idx],
          status: "BALANCED",
          reasonHi: `${houseOrdHi(highestCaut.item.moonHouseFromRashi)} भाव में चंद्रमा — संतुलित गति और संयमित कार्यशैली`
        };
      }
    }
  }
  if (getIndicesByStatus("CAUTION").length === 0) {
    const modNonAmavasya = getIndicesByStatus("BALANCED").filter((x) => !amavasyaDateKeys.has(x.item.dateKey));
    const modPool = modNonAmavasya.length > 0 ? modNonAmavasya : getIndicesByStatus("BALANCED");
    const favPool = getIndicesByStatus("FAVORABLE");
    const candidatePool = modPool.length >= 2 ? modPool : favPool.length >= 2 ? favPool : modPool;
    if (candidatePool.length > 0) {
      const lowest = [...candidatePool].sort((a, b) => a.score - b.score || a.idx - b.idx)[0];
      dayByDay[lowest.idx] = {
        ...dayByDay[lowest.idx],
        status: "CAUTION",
        reasonHi: `${houseOrdHi(lowest.item.moonHouseFromRashi)} भाव में चंद्रमा — तुलनात्मक रूप से धीमी गति, बड़े जोखिम व जल्दबाज़ी से बचें`
      };
    }
  }
  if (getIndicesByStatus("FAVORABLE").length === 0) {
    const modPool = getIndicesByStatus("BALANCED").filter((x) => !amavasyaDateKeys.has(x.item.dateKey));
    if (modPool.length >= 2) {
      const highest = [...modPool].sort((a, b) => b.score - a.score || a.idx - b.idx)[0];
      dayByDay[highest.idx] = {
        ...dayByDay[highest.idx],
        status: "FAVORABLE",
        reasonHi: `${houseOrdHi(highest.item.moonHouseFromRashi)} भाव में चंद्रमा — ${BHAVA_DOMAIN_HI[highest.item.moonHouseFromRashi]} में सहयोग व प्रगति`
      };
    }
  }
  const favorableDays = dayByDay.filter((d) => d.status === "FAVORABLE");
  const moderateDays = dayByDay.filter((d) => d.status === "BALANCED");
  const cautionDays = dayByDay.filter((d) => d.status === "CAUTION");
  const sevenDaySegments = [];
  if (favorableDays.length > 0) {
    sevenDaySegments.push(`शुभ दिन: ${favorableDays.map((d) => d.weekdayHi).join(", ")}`);
  }
  if (moderateDays.length > 0) {
    sevenDaySegments.push(`मध्यम दिन: ${moderateDays.map((d) => d.weekdayHi).join(", ")}`);
  }
  if (cautionDays.length > 0) {
    sevenDaySegments.push(`सावधानी: ${cautionDays.map((d) => d.weekdayHi).join(", ")}`);
  }
  const allSevenDaysSummaryHi = sevenDaySegments.join(" • ");
  const earlyDateKeys = new Set(weekRange.days.slice(0, 2).map((d) => d.dateKey));
  const midDateKeys = new Set(weekRange.days.slice(2, 4).map((d) => d.dateKey));
  const lateDateKeys = new Set(weekRange.days.slice(4, 7).map((d) => d.dateKey));
  const earlyPhase = buildPhaseBlock(
    "EARLY_WEEK",
    "सप्ताह की शुरुआत",
    "सोमवार – मंगलवार",
    dayByDay.slice(0, 2),
    nonMoonIngresses.filter((e) => earlyDateKeys.has(e.dateKey))
  );
  const midPhase = buildPhaseBlock(
    "MID_WEEK",
    "सप्ताह का मध्य",
    "बुधवार – गुरुवार",
    dayByDay.slice(2, 4),
    nonMoonIngresses.filter((e) => midDateKeys.has(e.dateKey))
  );
  const weekendPhase = buildPhaseBlock(
    "WEEKEND",
    "सप्ताहांत",
    "शुक्रवार – रविवार",
    dayByDay.slice(4, 7),
    nonMoonIngresses.filter((e) => lateDateKeys.has(e.dateKey))
  );
  const personalCoordination = evaluatePersonalDashaAshtakavarga({
    context: request.personalContext,
    analysis: midAnalysis,
    focusSignNumbers: signsTransited,
    scope: "weekly"
  });
  const personalDelta = personalCoordination ? personalCoordination.scoreDelta : 0;
  const avgMoonBase = moonScoreSum / 7;
  const macroShift = weeklyGrahaBonus(midAnalysis, "jupiter") * 0.8 + weeklyGrahaBonus(midAnalysis, "saturn") * 0.6 + weeklyGrahaBonus(midAnalysis, "sun") * 0.5 + weeklyGrahaBonus(midAnalysis, "mars") * 0.4 + personalDelta;
  const karmesh = midAnalysis.lords.houseLordMap[10];
  const dhanesh = midAnalysis.lords.houseLordMap[2];
  const labhesh = midAnalysis.lords.houseLordMap[11];
  const sukhesh = midAnalysis.lords.houseLordMap[4];
  const saptamesh = midAnalysis.lords.houseLordMap[7];
  const panchamesh = midAnalysis.lords.houseLordMap[5];
  const lagnesh = midAnalysis.lords.houseLordMap[1];
  const careerScore = clampWeeklyScore(
    avgMoonBase + macroShift + weeklyGrahaBonus(midAnalysis, karmesh) * 0.9 + weeklyGrahaBonus(midAnalysis, "sun") * 0.5
  );
  const financeScore = clampWeeklyScore(
    avgMoonBase + macroShift + weeklyGrahaBonus(midAnalysis, dhanesh) * 0.7 + weeklyGrahaBonus(midAnalysis, labhesh) * 0.7 + weeklyGrahaBonus(midAnalysis, "jupiter") * 0.5
  );
  const loveFamilyScore = clampWeeklyScore(
    avgMoonBase + macroShift + weeklyGrahaBonus(midAnalysis, sukhesh) * 0.6 + weeklyGrahaBonus(midAnalysis, saptamesh) * 0.6 + weeklyGrahaBonus(midAnalysis, "venus") * 0.7
  );
  const educationScore = clampWeeklyScore(
    avgMoonBase + macroShift + weeklyGrahaBonus(midAnalysis, panchamesh) * 0.7 + weeklyGrahaBonus(midAnalysis, "mercury") * 0.8
  );
  const healthScore = clampWeeklyScore(
    avgMoonBase + macroShift + weeklyGrahaBonus(midAnalysis, lagnesh) * 0.8 - (cautionDays.length >= 3 ? 2 : 0)
  );
  const overallScore = clampWeeklyScore(
    (careerScore + financeScore + loveFamilyScore + educationScore + healthScore) / 5
  );
  const summaryNotesHi = [];
  const globalPlanetarySummaryHi = [];
  for (const ing of nonMoonIngresses) {
    const newHouse = getRelativeHouse(ing.toSign, rashi.number);
    summaryNotesHi.push(
      `${ing.dateFormattedHi}: ${ing.grahaNameHi} का ${ing.fromSignNameHi} से ${ing.toSignNameHi} राशि (आपके ${houseOrdHi(newHouse)} भाव${ing.isRetrogradeIngress ? " • वक्री गति से पुनः प्रवेश" : ""}) में प्रवेश।`
    );
    globalPlanetarySummaryHi.push(
      `${ing.grahaNameHi} ${ing.fromSignNameHi} → ${ing.toSignNameHi} राशि (${ing.dateFormattedHi}${ing.isRetrogradeIngress ? " • वक्री गति से पुनः प्रवेश" : ""})`
    );
  }
  for (const st of retrogradeStations) {
    const h = getRelativeHouse(st.signNumber, rashi.number);
    const stationActionHi = st.transition === "DIRECT_START" ? "वक्री से मार्गी" : "वक्री प्रारंभ";
    summaryNotesHi.push(
      `${st.dateFormattedHi}: ${st.grahaNameHi} ${stationActionHi} (${st.signNameHi} राशि • आपके ${houseOrdHi(h)} भाव को प्रभावित करेगा)।`
    );
    globalPlanetarySummaryHi.push(
      `${st.grahaNameHi} ${stationActionHi} (${st.dateFormattedHi} • ${st.signNameHi} राशि)`
    );
  }
  for (const cb of combustionEvents) {
    const h = getRelativeHouse(cb.signNumber, rashi.number);
    const cbActionHi = cb.transition === "COMBUSTION_START" ? "अस्त प्रारंभ" : "उदय";
    summaryNotesHi.push(
      `${cb.dateFormattedHi}: ${cb.grahaNameHi} ${cbActionHi} (${cb.signNameHi} राशि • ${houseOrdHi(h)} भाव)।`
    );
    globalPlanetarySummaryHi.push(
      `${cb.grahaNameHi} ${cbActionHi} (${cb.dateFormattedHi} • ${cb.signNameHi} राशि)`
    );
  }
  for (const lm of lunarMilestones) {
    const h = getRelativeHouse(lm.moonSignNumber, rashi.number);
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
    const isKartikPurnima = lm.type === "PURNIMA" && !masaBefore.isAdhikaMasa && masaBefore.amantaMasaIndex === 7;
    const isDeepawaliAmavasya = lm.type === "AMAVASYA" && !masaBefore.isAdhikaMasa && masaBefore.purnimantaMasaIndex === 7;
    const lmNameHi = isKartikPurnima ? "कार्तिक पूर्णिमा / देव दीपावली महापर्व" : isDeepawaliAmavasya ? "दीपावली अमावस्या" : lm.type === "PURNIMA" ? "पूर्णिमा" : "अमावस्या";
    summaryNotesHi.push(
      `${lm.dateFormattedHi}: ${lmNameHi} (${lm.moonSignNameHi} राशि • आपके ${houseOrdHi(h)} भाव में चंद्र कला का प्रमुख चरण)।`
    );
    globalPlanetarySummaryHi.push(`${lmNameHi} (${lm.dateFormattedHi} • ${lm.moonSignNameHi} राशि)`);
  }
  if (summaryNotesHi.length === 0) {
    summaryNotesHi.push(
      `इस सप्ताह प्रमुख ग्रह स्थिर राशियों में हैं; चंद्रमा की ${signsTransitedLabelHi} यात्रा ही सप्ताह के उतार-चढ़ाव तय करेगी।`
    );
  }
  if (globalPlanetarySummaryHi.length === 0) {
    globalPlanetarySummaryHi.push(
      `गुरु ${midSnapshot.grahas.jupiter.signNameHi}, शनि ${midSnapshot.grahas.saturn.signNameHi} व सूर्य ${midSnapshot.grahas.sun.signNameHi} राशि में स्थिर`
    );
  }
  const favDaysText = favorableDays.length > 0 ? favorableDays.map((d) => `${d.weekdayHi} (${d.shortDateHi})`).join(", ") : "संतुलित गति वाले दिन";
  const cautDaysText = cautionDays.length > 0 ? cautionDays.map((d) => `${d.weekdayHi} (${d.shortDateHi})`).join(", ") : "";
  const karmeshT = midAnalysis.transits[karmesh];
  const dhaneshT = midAnalysis.transits[dhanesh];
  const labheshT = midAnalysis.transits[labhesh];
  const saptameshT = midAnalysis.transits[saptamesh];
  const panchameshT = midAnalysis.transits[panchamesh];
  const lagneshT = midAnalysis.transits[lagnesh];
  const buildWeeklyCareerTransitionNoteHi = () => {
    const trackedGrahas = /* @__PURE__ */ new Set(["sun", "mars", "mercury", "jupiter", "venus", "saturn", "rahu", "ketu"]);
    const items = [];
    const fmtDayMonthHi = (dateFormattedHi) => dateFormattedHi.replace(/\s+\d{4}\s*$/u, "").trim();
    const rahuShift = nonMoonIngresses.find((e) => e.graha === "rahu");
    const ketuShift = nonMoonIngresses.find((e) => e.graha === "ketu");
    if (rahuShift && ketuShift && Math.abs(rahuShift.timestampMs - ketuShift.timestampMs) <= 48 * 36e5) {
      items.push({
        ts: rahuShift.timestampMs,
        dateShortHi: fmtDayMonthHi(rahuShift.dateFormattedHi),
        phraseHi: `${fmtDayMonthHi(rahuShift.dateFormattedHi)} को राहु ${rahuShift.toSignNameHi} व केतु ${ketuShift.toSignNameHi} राशि में`,
        isDirectBoost: false
      });
    } else {
      if (rahuShift) {
        items.push({
          ts: rahuShift.timestampMs,
          dateShortHi: fmtDayMonthHi(rahuShift.dateFormattedHi),
          phraseHi: `${fmtDayMonthHi(rahuShift.dateFormattedHi)} को राहु ${rahuShift.toSignNameHi} राशि में`,
          isDirectBoost: false
        });
      }
      if (ketuShift) {
        items.push({
          ts: ketuShift.timestampMs,
          dateShortHi: fmtDayMonthHi(ketuShift.dateFormattedHi),
          phraseHi: `${fmtDayMonthHi(ketuShift.dateFormattedHi)} को केतु ${ketuShift.toSignNameHi} राशि में`,
          isDirectBoost: false
        });
      }
    }
    for (const ing of nonMoonIngresses) {
      if (ing.graha === "rahu" || ing.graha === "ketu" || !trackedGrahas.has(ing.graha)) continue;
      const dStr = fmtDayMonthHi(ing.dateFormattedHi);
      items.push({
        ts: ing.timestampMs,
        dateShortHi: dStr,
        phraseHi: `${dStr} को ${ing.grahaNameHi} ${ing.toSignNameHi} राशि में`,
        isDirectBoost: ing.graha === "mars" || ing.graha === "jupiter" || ing.graha === "sun"
      });
    }
    for (const st of retrogradeStations) {
      if (!trackedGrahas.has(st.graha)) continue;
      const dStr = fmtDayMonthHi(st.dateFormattedHi);
      const motionHi = st.transition === "DIRECT_START" ? "मार्गी" : "वक्री";
      items.push({
        ts: st.timestampMs,
        dateShortHi: dStr,
        phraseHi: `${dStr} को ${st.grahaNameHi} ${motionHi}`,
        isDirectBoost: st.transition === "DIRECT_START"
      });
    }
    if (items.length === 0) return "";
    items.sort((a, b) => a.ts - b.ts);
    const top = items.slice(0, 4);
    const phrases = top.map((x) => x.phraseHi);
    const joined = phrases.length === 1 ? phrases[0] : `${phrases.slice(0, -1).join(", ")} तथा ${phrases[phrases.length - 1]}`;
    const hasDirectOrIngressBoost = top.some((x) => x.isDirectBoost);
    const endingVerb = top.some((x) => /मार्गी|वक्री/u.test(x.phraseHi)) ? "होंगे" : "प्रवेश करेंगे";
    const impactTail = hasDirectOrIngressBoost ? `${rashi.nameHi} के लिए सप्ताह के उत्तरार्ध में कार्यगति व ऊर्जा में सकारात्मक बदलाव आएगा` : `${rashi.nameHi} के लिए सप्ताह के उत्तरार्ध में कार्ययोजना व व्यावसायिक निर्णयों में नई दिशा बनेगी`;
    return ` ${joined} ${endingVerb} — ${impactTail}।`;
  };
  const careerEventNote = buildWeeklyCareerTransitionNoteHi();
  const grahaCondW = buildLockedGrahaConditionMap(midAnalysis);
  for (const cb of combustionEvents) {
    if (cb.transition !== "COMBUSTION_END") continue;
    const cbDateShort = cb.dateFormattedHi.replace(/\s+\d{4}\s*$/u, "").trim();
    const curTag = (grahaCondW[cb.graha] || "").trim();
    if (curTag.includes("अस्त")) {
      grahaCondW[cb.graha] = ` ${curTag.replace(/अस्त/u, `${cbDateShort} से उदित`)}`;
    } else if (curTag.startsWith("(") && curTag.endsWith(")")) {
      grahaCondW[cb.graha] = ` (${curTag.slice(1, -1)} • ${cbDateShort} से उदित)`;
    } else {
      grahaCondW[cb.graha] = ` (${cbDateShort} से उदित)`;
    }
  }
  const usedDrishtiPlanetsW = /* @__PURE__ */ new Set();
  const formatCondHouseW = (cond, houseNum) => {
    const innerCond = cond.trim().replace(/^\(/, "").replace(/\)$/, "").trim();
    const houseTxt = `${houseOrdHi(houseNum)} भाव`;
    return innerCond ? `(${innerCond} • ${houseTxt})` : `(${houseTxt})`;
  };
  const weeklyLordDetailHi = (graha, transitHouse) => graha === "moon" ? `सप्ताह भर ${signsWithHousesLabelHi} भाव में संचरणशील` : formatCondHouseW(grahaCondW[graha], transitHouse);
  const careerPlanetsHi = formatUniqueGrahaRolesHi(
    [
      { graha: karmesh, rolePrefixHi: "कर्मेश", detailHi: weeklyLordDetailHi(karmesh, karmeshT.houseFromMoon) },
      { graha: "sun", detailHi: formatCondHouseW(grahaCondW.sun, midAnalysis.transits.sun.houseFromMoon) },
      { graha: "mercury", detailHi: formatCondHouseW(grahaCondW.mercury, midAnalysis.transits.mercury.houseFromMoon) }
    ],
    "और"
  );
  const weeklyTithiIdx = Math.floor(((midSnapshot.grahas.moon.siderealLon - midSnapshot.grahas.sun.siderealLon) % 360 + 360) % 360 / 12) + 1;
  const weeklyYogaIdx = Math.floor(((midSnapshot.grahas.sun.siderealLon + midSnapshot.grahas.moon.siderealLon) % 360 + 360) % 360 / (360 / 27)) % 27;
  const weeklyKaranIdx = Math.floor(((midSnapshot.grahas.moon.siderealLon - midSnapshot.grahas.sun.siderealLon) % 360 + 360) % 360 / 6) % 11;
  const weeklySeedBase = {
    samvat: thu.year + (thu.month >= 4 ? 57 : 56),
    tithi: weeklyTithiIdx,
    nakshatra: midSnapshot.grahas.moon.nakshatraIndex,
    pada: midSnapshot.grahas.moon.nakshatraPada || 1,
    yoga: weeklyYogaIdx,
    karan: weeklyKaranIdx,
    vaar: 4,
    // Thursday midpoint
    chandraRashi: midSnapshot.grahas.moon.signNumber,
    suryaRashi: midSnapshot.grahas.sun.signNumber,
    ayanamsaDegrees: midSnapshot.ayanamshaDeg,
    vakriPlanetsCount: countVakriPlanets(midSnapshot.grahas),
    rashiIndex: rashi.number,
    year: thu.year,
    dayOfYear: computeDayOfYear(thu.year, thu.month, thu.day)
  };
  const weeklyCombustBenefic = Boolean(
    midAnalysis.transits.jupiter.graha.isCombust || midAnalysis.transits.venus.graha.isCombust
  );
  const careerModular64W = buildModular64FalitHi({
    seed: { ...weeklySeedBase, houseOrSignIndex: karmeshT.houseFromMoon, pillar: "career" },
    polarity: resolveModularPolarity({
      isCombustBenefic: weeklyCombustBenefic,
      score: careerScore,
      period: "weekly"
    }),
    period: "weekly",
    periodLabelHi: weekRange.rangeLabelHi
  });
  const careerHi = applyEraAwareShabdaKosh(
    enforcePeriodVocabularyGuard(
      `सप्ताह के दौरान ${rashi.nameHi} के ${careerPlanetsHi} कार्यक्षेत्र की दिशा तय कर रहे हैं। ${careerScore >= 78 ? voice.careerStrongTailHi : careerScore <= 65 ? voice.careerCautionTailHi : voice.careerBalancedTailHi}; महत्वपूर्ण बैठकें व पहल ${favDaysText} पर संपन्न करना सबसे फलदायी रहेगा। ${careerModular64W}${careerEventNote} ${buildHouseDrishtiNoteHi(midAnalysis, 10, "weekly", usedDrishtiPlanetsW)}`,
      "weekly"
    ),
    thu.year
  );
  const financeIntroHi = dhanesh === "moon" ? `धनेश चंद्रमा सप्ताह भर में ${signsWithHousesLabelHi} भाव में संचरण करेंगे तथा लाभेश ${GRAHA_NAMES[labhesh].shortHi} ${formatCondHouseW(grahaCondW[labhesh], labheshT.houseFromMoon)} व देवगुरु बृहस्पति ${formatCondHouseW(grahaCondW.jupiter, midAnalysis.transits.jupiter.houseFromMoon)} के प्रभाव से` : labhesh === "moon" ? `${rashi.nameHi} के धनेश ${GRAHA_NAMES[dhanesh].shortHi} ${formatCondHouseW(grahaCondW[dhanesh], dhaneshT.houseFromMoon)} तथा लाभेश चंद्रमा के सप्ताह भर ${signsWithHousesLabelHi} भाव में संचरण और देवगुरु बृहस्पति ${formatCondHouseW(grahaCondW.jupiter, midAnalysis.transits.jupiter.houseFromMoon)} के समन्वय से` : `${rashi.nameHi} के ${formatUniqueGrahaRolesHi(
    [
      { graha: dhanesh, rolePrefixHi: "धनेश", detailHi: weeklyLordDetailHi(dhanesh, dhaneshT.houseFromMoon) },
      { graha: labhesh, rolePrefixHi: "लाभेश", detailHi: weeklyLordDetailHi(labhesh, labheshT.houseFromMoon) },
      {
        graha: "jupiter",
        displayNameHi: "देवगुरु बृहस्पति",
        detailHi: formatCondHouseW(grahaCondW.jupiter, midAnalysis.transits.jupiter.houseFromMoon)
      }
    ],
    "और"
  )} के साप्ताहिक गोचर से`;
  const financeModular64W = buildModular64FalitHi({
    seed: { ...weeklySeedBase, houseOrSignIndex: dhaneshT.houseFromMoon, pillar: "finance" },
    polarity: resolveModularPolarity({
      isCombustBenefic: weeklyCombustBenefic,
      score: financeScore,
      period: "weekly"
    }),
    period: "weekly",
    periodLabelHi: weekRange.rangeLabelHi
  });
  const financeHi = enforcePeriodVocabularyGuard(
    `${financeIntroHi} ${financeScore >= 78 ? voice.financeStrongLeadHi : financeScore <= 65 ? voice.financeCautionLeadHi : voice.financeBalancedLeadHi}। बड़े वित्तीय निर्णय हेतु ${rashi.nameHi} जातकों के लिए ${favDaysText} अनुकूल हैं${cautDaysText ? `, जबकि ${cautDaysText} को जोखिमपूर्ण सौदों से बचें` : ""}। ${financeModular64W} ${buildHouseDrishtiNoteHi(midAnalysis, 2, "weekly", usedDrishtiPlanetsW)}`,
    "weekly"
  );
  const lovePlanetsHi = formatUniqueGrahaRolesHi(
    [
      { graha: saptamesh, rolePrefixHi: "सप्तमेश", detailHi: weeklyLordDetailHi(saptamesh, saptameshT.houseFromMoon) },
      { graha: "venus", detailHi: formatCondHouseW(grahaCondW.venus, midAnalysis.transits.venus.houseFromMoon) }
    ],
    "व"
  );
  const familyModular64W = buildModular64FalitHi({
    seed: { ...weeklySeedBase, houseOrSignIndex: saptameshT.houseFromMoon, pillar: "family" },
    polarity: resolveModularPolarity({
      isCombustBenefic: weeklyCombustBenefic,
      score: loveFamilyScore,
      period: "weekly"
    }),
    period: "weekly",
    periodLabelHi: weekRange.rangeLabelHi
  });
  const loveFamilyHi = enforcePeriodVocabularyGuard(
    `${rashi.nameHi} के ${lovePlanetsHi} के प्रभाव से ${loveFamilyScore >= 78 ? `${voice.familyStrongHi}।` : loveFamilyScore <= 65 ? `${voice.familyCautionHi}।` : `${voice.familyBalancedHi}।`}${cautDaysText ? ` विशेषकर ${cautDaysText} को ${voice.cautionStyleHi}।` : ""} ${familyModular64W} ${buildHouseDrishtiNoteHi(midAnalysis, 7, "weekly", usedDrishtiPlanetsW)}`,
    "weekly"
  );
  const eduPlanetsHi = formatUniqueGrahaRolesHi(
    [
      { graha: panchamesh, rolePrefixHi: "पंचमेश", detailHi: weeklyLordDetailHi(panchamesh, panchameshT.houseFromMoon) },
      { graha: "mercury", detailHi: formatCondHouseW(grahaCondW.mercury, midAnalysis.transits.mercury.houseFromMoon) },
      { graha: "jupiter", detailHi: formatCondHouseW(grahaCondW.jupiter, midAnalysis.transits.jupiter.houseFromMoon) }
    ],
    "व"
  );
  const educationModular64W = buildModular64FalitHi({
    seed: { ...weeklySeedBase, houseOrSignIndex: panchameshT.houseFromMoon, pillar: "education" },
    polarity: resolveModularPolarity({
      isCombustBenefic: weeklyCombustBenefic,
      score: educationScore,
      period: "weekly"
    }),
    period: "weekly",
    periodLabelHi: weekRange.rangeLabelHi
  });
  const educationHi = enforcePeriodVocabularyGuard(
    `${rashi.nameHi} के ${eduPlanetsHi} के प्रभाव से ${educationScore >= 78 ? voice.educationStrongHi : voice.educationCautionHi}। ${rashi.nameHi} विद्यार्थियों के लिए कठिन अभ्यास हेतु ${favDaysText} सर्वाधिक उपयोगी हैं। ${educationModular64W}`,
    "weekly"
  );
  const healthPlanetsHi = formatUniqueGrahaRolesHi(
    [
      { graha: lagnesh, rolePrefixHi: "राशि स्वामी", detailHi: weeklyLordDetailHi(lagnesh, lagneshT.houseFromMoon) },
      { graha: "saturn", detailHi: formatCondHouseW(grahaCondW.saturn, midAnalysis.transits.saturn.houseFromMoon) }
    ],
    "और"
  );
  const healthModular64W = buildModular64FalitHi({
    seed: { ...weeklySeedBase, houseOrSignIndex: lagneshT.houseFromMoon, pillar: "health" },
    polarity: resolveModularPolarity({
      isCombustBenefic: weeklyCombustBenefic,
      score: cautionDays.length >= 3 ? Math.min(healthScore, 65) : healthScore,
      period: "weekly"
    }),
    period: "weekly",
    periodLabelHi: weekRange.rangeLabelHi
  });
  const healthHi = enforcePeriodVocabularyGuard(
    `${rashi.nameHi} के ${healthPlanetsHi} के साप्ताहिक प्रभाव से ${healthScore <= 68 || cautionDays.length >= 3 ? `${voice.healthEnergyCautionHi}।` : `${voice.healthEnergyStrongHi}।`} ${healthModular64W} पूरे सप्ताह ${voice.wellnessHintHi}${cautDaysText ? ` तथा ${cautDaysText} को अतिरिक्त भागदौड़ से बचाव करें` : ""}।`,
    "weekly"
  );
  const luckyAttributes = deriveLogicalLuckyAttributes({
    moonSign: rashi,
    analysis: midAnalysis,
    period: "weekly"
  });
  const remedy = buildSattvicRemedy({
    moonSign: rashi,
    analysis: midAnalysis,
    period: "weekly",
    cautionPlanet: cautionDays.length >= 3 ? "moon" : void 0
  });
  const weeklyStrategyHi = [
    enforcePeriodVocabularyGuard(
      `प्रमुख व्यावसायिक निर्णय, साक्षात्कार या वित्तीय समझौते ${favDaysText} पर निर्धारित करें।`,
      "weekly"
    ),
    enforcePeriodVocabularyGuard(
      `सप्ताह की शुरुआत (${earlyPhase.daysSpanHi}) में लक्ष्य तय करें और सप्ताहांत (${weekendPhase.daysSpanHi}) तक लंबित कार्यों की समीक्षा पूरी करें।`,
      "weekly"
    )
  ];
  const cautionsHi = [
    enforcePeriodVocabularyGuard(
      cautDaysText ? `${cautDaysText} को बड़े वित्तीय जोखिम व विवाद से बचें तथा ${voice.cautionStyleHi}।` : `सप्ताह के मध्य में बिना पूर्ण जांच के किसी नए अनुबंध पर हस्ताक्षर न करें और ${voice.cautionStyleHi}।`,
      "weekly"
    ),
    enforcePeriodVocabularyGuard(
      retrogradeStations.length > 0 ? `इस सप्ताह ग्रह वक्री/मार्गी परिवर्तन (${retrogradeStations.map(
        (r) => r.transition === "DIRECT_START" ? `${r.grahaNameHi} वक्री से मार्गी` : `${r.grahaNameHi} वक्री प्रारंभ`
      ).join(", ")}) के कारण पुराने कार्यों की पुनः जांच अवश्य करें।` : "कार्यभार के बीच नियमित विश्राम और पारिवारिक संवाद की अनदेखी न करें।",
      "weekly"
    )
  ];
  const bestPhaseNames = [earlyPhase, midPhase, weekendPhase].filter((p) => p.tone === "FAVORABLE").map((p) => p.labelHi);
  const headlineHi = enforcePeriodVocabularyGuard(
    `${rashi.nameHi} साप्ताहिक राशिफल (${weekRange.rangeLabelHi}): ${bestPhaseNames.length > 0 ? `${bestPhaseNames.join(" व ")} में विशेष प्रगति के संकेत` : "धैर्य, नियोजन और संतुलित प्रगति का सप्ताह"}`,
    "weekly"
  );
  const mentalOutlookHi = enforcePeriodVocabularyGuard(
    `इस सप्ताह ${rashi.nameHi} जातकों की मानसिक ऊर्जा व आत्मिक एकाग्रता राशि स्वामी ${GRAHA_NAMES[lagnesh].shortHi}${grahaCondW[lagnesh]} के संबल और ${voice.strengthPhraseHi} से प्रेरित रहेगी। ${bestPhaseNames.length > 0 ? `${bestPhaseNames.join(" व ")} में विचार-स्पष्टता और आत्मविश्वास उच्च स्तर पर रहेंगे` : "पूरे सप्ताह धैर्य और सात्त्विक चिंतन से मन संतुलित बना रहेगा"}; मध्यम व सावधानी के दिनों में प्रातः ध्यान व मंत्र-जप अपनाते हुए ${voice.cautionStyleHi}।`,
    "weekly"
  );
  const weeklyThemeHi = enforcePeriodVocabularyGuard(
    `सोमवार से रविवार (${weekRange.rangeLabelHi}) के बीच चंद्रमा सप्ताह भर में ${signsWithHousesLabelHi} भावों से संचरण करेंगे। ${rashi.nameHi} जातकों के लिए ${voice.strengthPhraseHi} सहायक रहेगा; ${allSevenDaysSummaryHi}। देवगुरु बृहस्पति (${houseOrdHi(midAnalysis.transits.jupiter.houseFromMoon)} भाव) व शनि (${houseOrdHi(midAnalysis.transits.saturn.houseFromMoon)} भाव) पूरे सप्ताह की स्थायी दिशा तय कर रहे हैं।${personalCoordination ? ` ${personalCoordination.insightHi}` : ""}`,
    "weekly"
  );
  return {
    engineType: "weekly",
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
    weekSpan: {
      weekStartDateKey: weekRange.weekStartDateKey,
      weekEndDateKey: weekRange.weekEndDateKey,
      rangeLabelHi: weekRange.rangeLabelHi,
      rangeLabelEn: weekRange.rangeLabelEn
    },
    moonJourney: {
      signsTransited,
      signsTransitedLabelHi,
      signsWithHousesLabelHi,
      ingresses: moonIngresses,
      dayByDay
    },
    favorableDays,
    moderateDays,
    cautionDays,
    allSevenDaysSummaryHi,
    phases: [earlyPhase, midPhase, weekendPhase],
    planetaryEvents: {
      signIngresses: nonMoonIngresses,
      retrogradeStations,
      combustionEvents,
      lunarMilestones,
      summaryNotesHi,
      globalPlanetarySummaryHi
    },
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
    weeklyThemeHi,
    sections: {
      careerHi,
      financeHi,
      loveFamilyHi,
      educationHi,
      healthHi
    },
    weeklyStrategyHi,
    cautionsHi,
    luckyAttributes,
    remedy,
    astronomicalBasis: {
      midWeekTimestampMs: midSnapshot.timestampMs,
      ayanamshaDMS: midSnapshot.ayanamshaDMS,
      planetsMidWeek: ALL_GRAHA_IDS.map((id) => {
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
function generateWeeklyRashifal(request) {
  try {
    const rashi = resolveRashiDefinition(request.rashi);
    const location = request.location || DEFAULT_RASHIFAL_LOCATION;
    const timeZone = resolveSafeTimezone(location);
    const weekRange = getMondaySundayWeekRange(request.anchorDate ?? /* @__PURE__ */ new Date(), timeZone);
    const cacheKey = buildWeeklyRashifalCacheKey({
      rashiId: rashi.id,
      weekStartDateKey: weekRange.weekStartDateKey,
      location,
      personalContextHash: getPersonalContextCacheHash(request.personalContext)
    });
    return safeExecuteRashifalEngine(
      "weekly",
      cacheKey,
      24 * 3600 * 1e3,
      () => computeWeeklyCore(request),
      Boolean(request.bypassCache)
    );
  } catch (err) {
    return {
      status: "unavailable",
      data: null,
      errorCode: "INVALID_WEEKLY_INPUT",
      userMessageHi: "साप्ताहिक राशिफल के लिए दी गई राशि या सप्ताह विवरण अमान्य है। कृपया पुनः प्रयास करें।",
      userMessageEn: "Invalid Moon Sign or anchor date supplied for Weekly Rashifal.",
      technicalReason: err instanceof Error ? err.message : String(err)
    };
  }
}
function generateAll12WeeklyRashifal(options = {}) {
  const results = {};
  for (let i = 1; i <= 12; i++) {
    const rashi = resolveRashiDefinition(i);
    results[rashi.id] = generateWeeklyRashifal({ ...options, rashi: i });
  }
  return results;
}
export {
  generateAll12WeeklyRashifal,
  generateWeeklyRashifal
};
