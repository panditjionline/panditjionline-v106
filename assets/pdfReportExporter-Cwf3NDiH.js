import { _ as __vitePreload } from "./vendor-pdf-CpPyS1re.js";
import { J as generateSampurnKundali, a0 as formatHindiHousePhrase, _ as formatHindiHouseOrdinal, a1 as evaluateNeechabhanga, Z as VEDIC_NAKSHATRAS } from "./panchang-core-24ia-akc.js";
import { q as PANDIT_AVATAR_THUMB, t as translateVedicHindiToEnglish } from "./index-AQ5SI3vl.js";
const NAISARGIKA_MAITRI = {
  सूर्य: { friends: ["चन्द्र", "चंद्र", "मंगल", "गुरु"], neutral: ["बुध"], enemies: ["शुक्र", "शनि", "राहु", "केतु"] },
  चन्द्र: { friends: ["सूर्य", "बुध"], neutral: ["मंगल", "गुरु", "शुक्र", "शनि"], enemies: ["राहु", "केतु"] },
  चंद्र: { friends: ["सूर्य", "बुध"], neutral: ["मंगल", "गुरु", "शुक्र", "शनि"], enemies: ["राहु", "केतु"] },
  मंगल: { friends: ["सूर्य", "चन्द्र", "चंद्र", "गुरु"], neutral: ["शुक्र", "शनि"], enemies: ["बुध", "राहु", "केतु"] },
  बुध: { friends: ["सूर्य", "शुक्र", "राहु"], neutral: ["मंगल", "गुरु", "शनि"], enemies: ["चन्द्र", "चंद्र", "केतु"] },
  गुरु: { friends: ["सूर्य", "चन्द्र", "चंद्र", "मंगल"], neutral: ["शनि", "केतु"], enemies: ["बुध", "शुक्र", "राहु"] },
  शुक्र: { friends: ["बुध", "शनि", "राहु"], neutral: ["मंगल", "गुरु"], enemies: ["सूर्य", "चन्द्र", "चंद्र", "केतु"] },
  शनि: { friends: ["बुध", "शुक्र", "राहु"], neutral: ["गुरु"], enemies: ["सूर्य", "चन्द्र", "चंद्र", "मंगल", "केतु"] },
  राहु: { friends: ["बुध", "शुक्र", "शनि"], neutral: ["गुरु"], enemies: ["सूर्य", "चन्द्र", "चंद्र", "मंगल"] },
  केतु: { friends: ["मंगल", "गुरु"], neutral: ["बुध", "शुक्र", "शनि"], enemies: ["सूर्य", "चन्द्र", "चंद्र"] }
};
const RASHI_LORD_HI_BY_NUM = {
  1: "मंगल",
  2: "शुक्र",
  3: "बुध",
  4: "चन्द्र",
  5: "सूर्य",
  6: "बुध",
  7: "शुक्र",
  8: "मंगल",
  9: "गुरु",
  10: "शनि",
  11: "शनि",
  12: "गुरु"
};
const RASHI_LORD_ID_BY_NUM = {
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
const NAKSHATRA_LORD_HI_CYCLE = ["केतु", "शुक्र", "सूर्य", "चन्द्र", "मंगल", "राहु", "गुरु", "शनि", "बुध"];
function cleanLordName(raw) {
  const token = String(raw || "गुरु").split(" ")[0].trim();
  return token === "चंद्र" ? "चन्द्र" : token;
}
function getPlanetFriendshipRelation(lordA, lordB) {
  const a = cleanLordName(lordA);
  const b = cleanLordName(lordB);
  if (a === b) {
    return {
      relation: "स्वग्रह / एक ही स्वामी (अति उत्तम मित्र)",
      color: "#047857",
      harmonyNote: "दोनों राशियों/ग्रहों का स्वामी एक ही होने से पूर्ण वैचारिक एवं आत्मिक एकरूपता।",
      score: 2
    };
  }
  const mA = NAISARGIKA_MAITRI[a];
  const mB = NAISARGIKA_MAITRI[b];
  const aToB = mA?.friends.includes(b) ? 1 : mA?.enemies.includes(b) ? -1 : 0;
  const bToA = mB?.friends.includes(a) ? 1 : mB?.enemies.includes(a) ? -1 : 0;
  const sum = aToB + bToA;
  if (sum >= 2) {
    return {
      relation: "अति मित्र (Adhi Mitra — सर्वोच्च मैत्री)",
      color: "#047857",
      harmonyNote: "परस्पर घनिष्ठ नैसर्गिक मित्रता — दांपत्य में सहज प्रेम, सम्मान व सहयोग।",
      score: sum
    };
  }
  if (sum === 1) {
    return {
      relation: "मित्र + सम (Mitra — शुभ समन्वय)",
      color: "#047857",
      harmonyNote: "एक पक्ष मित्र व दूसरा सम होने से गृहस्थ जीवन में उत्तम सामंजस्य।",
      score: sum
    };
  }
  if (sum === 0) {
    return {
      relation: "सम भाव (Neutral — संतुलित संबंध)",
      color: "#b45309",
      harmonyNote: "मध्यम/सम संबंध — आपसी संवाद एवं समझदारी से सुखद निर्वाह।",
      score: sum
    };
  }
  return {
    relation: "वैचारिक भिन्नता (शांति उपाय कल्पनीय)",
    color: "#be123c",
    harmonyNote: "स्वाभाविक दृष्टिकोण में अंतर — धैर्य एवं इष्ट आराधना से सामंजस्य स्थापित करें।",
    score: sum
  };
}
function ensureSingleSuffix(raw, suffix) {
  const val = String(raw || "").trim();
  if (!val) return suffix;
  return val.includes(suffix) ? val : `${val} ${suffix}`;
}
function getNavamsaLagnaInfo(kundali, fallbackRashi) {
  const d9House1 = kundali.navamsaChart?.[0];
  const rashiNumber = d9House1?.rashiNumber || kundali.panchang.lagnaNumber || 1;
  const rashiName = d9House1?.rashiName || kundali.phase1Astronomy?.shodashavarga?.find((v) => v.spec.id === "D9")?.ascendantRashiNameHi || fallbackRashi;
  const lordHi = RASHI_LORD_HI_BY_NUM[rashiNumber] || "गुरु";
  return { rashiName, rashiNumber, lordHi };
}
function getNakshatraLordHi(nakshatraStr) {
  const idx = VEDIC_NAKSHATRAS.findIndex(
    (n) => n === nakshatraStr || nakshatraStr.includes(n.split(" ")[0])
  );
  return NAKSHATRA_LORD_HI_CYCLE[(idx >= 0 ? idx : 0) % 9];
}
function formatPlanetDignityHtml(planet, kundali) {
  const nb = evaluateNeechabhanga(planet.id, kundali);
  if (nb.isDebilitated && nb.isCancelled) {
    return `<span style="color:#047857;font-size:7.6px;font-weight:700;">अवस्था: नीच (नीचभंग युक्त)</span>`;
  }
  if (nb.isDebilitated) {
    return `<span style="color:#be123c;font-size:7.6px;font-weight:700;">अवस्था: नीच (Debilitated)</span>`;
  }
  if (planet.isExalted || planet.dignity.includes("स्वगृही")) {
    return `<span style="color:#047857;font-size:7.6px;font-weight:700;">अवस्था: ${escapeHtml(planet.dignity)}</span>`;
  }
  return `<span style="color:#475569;font-size:7.6px;">अवस्था: ${escapeHtml(planet.dignity)}</span>`;
}
function describePlanetStrengthPlain(planet, kundali) {
  if (!planet) return "संतुलित";
  const nb = evaluateNeechabhanga(planet.id, kundali);
  if (nb.isDebilitated && nb.isCancelled) return "नीचभंग युक्त (सबल)";
  if (nb.isDebilitated) return "नीचस्थ (उपाय अपेक्षित)";
  if (planet.isExalted) return "उच्चस्थ (अति बली)";
  if (planet.dignity.includes("स्वगृही")) return "स्वगृही (बली)";
  if (planet.dignity.includes("मित्र")) return "मित्र राशि में शुभ";
  return "मध्यम/सम बल";
}
function getHouseLordStrengthSummary(kundali, houseNum) {
  const house = kundali.lagnaChart?.[houseNum - 1];
  const rashiNum = house?.rashiNumber || (kundali.panchang.lagnaNumber + houseNum - 2) % 12 + 1;
  const rashiName = house?.rashiName?.split(" ")[0] || "मेष";
  const lordHi = RASHI_LORD_HI_BY_NUM[rashiNum] || "गुरु";
  const lordId = RASHI_LORD_ID_BY_NUM[rashiNum] || "jupiter";
  const lordPlanet = kundali.planets.find((p) => p.id === lordId);
  const nb = lordPlanet ? evaluateNeechabhanga(lordPlanet.id, kundali) : { isDebilitated: false, isCancelled: false };
  const inGoodHouse = lordPlanet ? [1, 2, 4, 5, 7, 9, 10, 11].includes(lordPlanet.houseInLagna) : false;
  const isStrong = Boolean(
    lordPlanet && (lordPlanet.isExalted || lordPlanet.dignity.includes("स्वगृही") || lordPlanet.dignity.includes("मित्र") || nb.isCancelled || inGoodHouse) && !(nb.isDebilitated && !nb.isCancelled)
  );
  const label = lordPlanet ? `${lordHi} (${formatHindiHousePhrase(lordPlanet.houseInLagna)}, ${describePlanetStrengthPlain(lordPlanet, kundali)})` : `${lordHi}`;
  return { rashiName, lordHi, lordPlanet, isStrong, label };
}
function getUpcomingAuspiciousDashaSummary(boyKundali, girlKundali) {
  const nowYear = (/* @__PURE__ */ new Date()).getFullYear();
  const findRelevantDashas = (kundali) => {
    const list = kundali.mahadashas || [];
    const activeAndNext = list.filter((d) => d.endYear >= nowYear && d.startYear <= nowYear + 12);
    if (activeAndNext.length > 0) return activeAndNext.slice(0, 2);
    const curr = list.find((d) => d.isCurrent);
    return curr ? [curr] : list.slice(0, 2);
  };
  const scoreDashaPlanet = (dasha, kundali) => {
    const planetHi = cleanLordName(dasha.planet);
    const matched = kundali.planets.find((p) => cleanLordName(p.hindiName) === planetHi);
    let score = 0;
    if (["गुरु", "शुक्र", "बुध", "चन्द्र"].includes(planetHi)) score += 2;
    if (matched) {
      const nb = evaluateNeechabhanga(matched.id, kundali);
      if (matched.isExalted || matched.dignity.includes("स्वगृही") || nb.isCancelled) score += 2;
      if ([1, 2, 4, 5, 7, 9, 10, 11].includes(matched.houseInLagna)) score += 2;
      if (nb.isDebilitated && !nb.isCancelled) score -= 2;
    }
    return score;
  };
  const boyDashas = findRelevantDashas(boyKundali);
  const girlDashas = findRelevantDashas(girlKundali);
  const boyCurr = boyKundali.mahadashas.find((d) => d.isCurrent) || boyDashas[0];
  const girlCurr = girlKundali.mahadashas.find((d) => d.isCurrent) || girlDashas[0];
  const boyNext = boyDashas.find((d) => d !== boyCurr);
  const girlNext = girlDashas.find((d) => d !== girlCurr);
  const boyCurrScore = boyCurr ? scoreDashaPlanet(boyCurr, boyKundali) : 1;
  const girlCurrScore = girlCurr ? scoreDashaPlanet(girlCurr, girlKundali) : 1;
  const boyNextScore = boyNext ? scoreDashaPlanet(boyNext, boyKundali) : -1;
  const girlNextScore = girlNext ? scoreDashaPlanet(girlNext, girlKundali) : -1;
  const boyCurrLabel = boyCurr ? `${boyCurr.planet.split(" ")[0]}${boyCurr.currentAntardasha ? `–${boyCurr.currentAntardasha.split(" ")[0]}` : ""} (${Math.floor(boyCurr.startYear)}–${Math.floor(boyCurr.endYear)})` : "शुभ महादशा";
  const girlCurrLabel = girlCurr ? `${girlCurr.planet.split(" ")[0]}${girlCurr.currentAntardasha ? `–${girlCurr.currentAntardasha.split(" ")[0]}` : ""} (${Math.floor(girlCurr.startYear)}–${Math.floor(girlCurr.endYear)})` : "शुभ महादशा";
  const currCombined = boyCurrScore + girlCurrScore;
  const nextTransitionYear = Math.min(
    boyNext ? Math.ceil(boyNext.startYear) : nowYear + 3,
    girlNext ? Math.ceil(girlNext.startYear) : nowYear + 3
  );
  if (currCombined >= 5) {
    const goldenEnd = Math.min(
      Math.max(nowYear + 4, Math.floor(Math.min(boyCurr?.endYear || nowYear + 5, girlCurr?.endYear || nowYear + 5))),
      nowYear + 6
    );
    return {
      windowText: `${nowYear}–${goldenEnd} (तत्काल प्रभाव से शुभ स्वर्ण काल)`,
      detailText: `वर की वर्तमान ${boyCurrLabel} तथा वधू की ${girlCurrLabel} दोनों सकारात्मक हैं — विवाह के प्रथम १–४ वर्षों में ही करियर, गृहस्थ स्थायित्व व भाग्योदय की स्पष्ट गति दिखेगी।`
    };
  }
  if (boyNextScore > boyCurrScore || girlNextScore > girlCurrScore) {
    const startYr = Math.max(nowYear + 1, Math.min(nextTransitionYear, nowYear + 4));
    const endYr = startYr + 4;
    const catalyst = boyNext && boyNextScore > boyCurrScore ? `वर की आगामी ${boyNext.planet.split(" ")[0]} महादशा (${Math.ceil(boyNext.startYear)} से)` : girlNext ? `वधू की आगामी ${girlNext.planet.split(" ")[0]} महादशा (${Math.ceil(girlNext.startYear)} से)` : `${startYr} से आगामी अंतरदशा`;
    return {
      windowText: `${startYr}–${endYr} (दशा परिवर्तन उपरांत विशेष भाग्योदय)`,
      detailText: `वर्तमान में वर (${boyCurrLabel}) व वधू (${girlCurrLabel}) की दशाएं नींव तैयार कर रही हैं; ${catalyst} प्रारंभ होते ही आर्थिक उन्नति, संतान सुख व गृहस्थ समृद्धि में तीव्र उछाल आएगा।`
    };
  }
  const steadyStart = nowYear + 1;
  const steadyEnd = nowYear + 5;
  return {
    windowText: `${steadyStart}–${steadyEnd} (क्रमिक उन्नति व स्थिर भाग्योदय)`,
    detailText: `वर की ${boyCurrLabel} एवं वधू की ${girlCurrLabel} में शुभ अंतरदशाओं (गुरु/शुक्र/बुध) के संयोग से विवाह के १२–१८ माह बाद से निरंतर प्रगति, गृह-वाहन सुख व पारिवारिक स्थायित्व प्राप्त होगा।`
  };
}
function buildSixPageKundaliMilanHtml(milanResult) {
  const boyKundali = milanResult.boyKundali || generateSampurnKundali(
    milanResult.boyName || "वर",
    milanResult.boyDob || "1996-03-10",
    milanResult.boyTime || "10:55",
    milanResult.boyPlace || "रुद्रपुर, उत्तराखण्ड"
  );
  const girlKundali = milanResult.girlKundali || generateSampurnKundali(
    milanResult.girlName || "वधू",
    milanResult.girlDob || "1998-11-15",
    milanResult.girlTime || "14:15",
    milanResult.girlPlace || "रुद्रपुर, उत्तराखण्ड"
  );
  const deep = milanResult.deepMatchInsights;
  const boyD9 = getNavamsaLagnaInfo(boyKundali, milanResult.boyRashi);
  const girlD9 = getNavamsaLagnaInfo(girlKundali, milanResult.girlRashi);
  const coupleHeaderLabel = `वर: <b style="color:#7c2d12;">${escapeHtml(milanResult.boyName)}</b> (${escapeHtml(milanResult.boyRashi)}) &nbsp;&bull;&nbsp; वधू: <b style="color:#7c2d12;">${escapeHtml(milanResult.girlName)}</b> (${escapeHtml(milanResult.girlRashi)})`;
  const varnaKoot = milanResult.koots[0];
  const vashyaKoot = milanResult.koots[1];
  const taraKoot = milanResult.koots[2];
  const yoniKoot = milanResult.koots[3];
  const maitriKoot = milanResult.koots.find((k) => k.hindiName.includes("मैत्री") || k.name.includes("Maitri")) || milanResult.koots[4];
  const ganaKoot = milanResult.koots.find((k) => k.hindiName.includes("गण") || k.name.includes("Gana")) || milanResult.koots[5];
  const bhakootKoot = milanResult.koots.find((k) => k.hindiName.includes("भकूट") || k.name.includes("Bhakoot")) || milanResult.koots[6];
  const nadiKoot = milanResult.koots.find((k) => k.hindiName.includes("नाड़ी") || k.name.includes("Nadi")) || milanResult.koots[7];
  const varnaPts = varnaKoot?.obtainedPoints ?? 0;
  const vashyaPts = vashyaKoot?.obtainedPoints ?? 0;
  const taraPts = taraKoot?.obtainedPoints ?? 0;
  const yoniPts = yoniKoot?.obtainedPoints ?? 0;
  const maitriPts = maitriKoot?.obtainedPoints ?? 0;
  const ganaPts = ganaKoot?.obtainedPoints ?? 0;
  const bhakootPts = bhakootKoot?.obtainedPoints ?? 0;
  const nadiPts = nadiKoot?.obtainedPoints ?? 0;
  const hasNadiDosha = nadiPts === 0;
  const hasBhakootDosha = bhakootPts === 0;
  const hasGanaDosha = ganaPts < 5;
  const sameRashiDiffNakshatra = milanResult.boyRashi === milanResult.girlRashi && milanResult.boyNakshatra !== milanResult.girlNakshatra;
  const sameNakshatraDiffPada = milanResult.boyNakshatra === milanResult.girlNakshatra && milanResult.boyPada !== milanResult.girlPada;
  const hasNadiParihar = hasNadiDosha && (sameRashiDiffNakshatra || sameNakshatraDiffPada);
  const friendlyRashiLords = cleanLordName(milanResult.boyRashiLord) === cleanLordName(milanResult.girlRashiLord) || maitriPts >= 4;
  const rashiFriendship = getPlanetFriendshipRelation(milanResult.boyRashiLord, milanResult.girlRashiLord);
  const lagnaFriendship = getPlanetFriendshipRelation(
    boyKundali.panchang.lagnaLord,
    girlKundali.panchang.lagnaLord
  );
  const d9Friendship = getPlanetFriendshipRelation(boyD9.lordHi, girlD9.lordHi);
  const boyNakLord = getNakshatraLordHi(milanResult.boyNakshatra);
  const girlNakLord = getNakshatraLordHi(milanResult.girlNakshatra);
  const nakLordFriendship = getPlanetFriendshipRelation(boyNakLord, girlNakLord);
  const boyManglikColor = milanResult.manglikStatus.boyManglik ? "#be123c" : milanResult.manglikStatus.boyRawManglik ? "#b45309" : "#047857";
  const girlManglikColor = milanResult.manglikStatus.girlManglik ? "#be123c" : milanResult.manglikStatus.girlRawManglik ? "#b45309" : "#047857";
  const boyMarsHouseVenus = milanResult.manglikStatus.boyMarsHouseVenus ?? milanResult.manglikStatus.boyMarsHouseMoon;
  const girlMarsHouseVenus = milanResult.manglikStatus.girlMarsHouseVenus ?? milanResult.manglikStatus.girlMarsHouseMoon;
  const boyGanaDisplay = ensureSingleSuffix(ganaKoot?.boyValue, "गण");
  const girlGanaDisplay = ensureSingleSuffix(ganaKoot?.girlValue, "गण");
  const boyNadiDisplay = ensureSingleSuffix(nadiKoot?.boyValue, "नाड़ी");
  const girlNadiDisplay = ensureSingleSuffix(nadiKoot?.girlValue, "नाड़ी");
  const page1Html = `
    ${buildFormalVedicHeader(
    "बृहत् ३६ गुण मिलान एवं वैदिक विवाह मेलापक महा-पत्रिका (7-Page Report)",
    "दृक् गणित, लाहिड़ी चित्रापक्ष अयनांश एवं बृहत् पाराशर होरा शास्त्र पर आधारित",
    coupleHeaderLabel
  )}

    <div style="background: linear-gradient(90deg, #fff6e0 0%, #fde8bf 100%); border: 2px solid #b45309; border-radius: 6px; padding: 7px 12px 9px 12px; margin-bottom: 8px; width: 100%; box-sizing: border-box;">
      <table style="width: 100%; table-layout: fixed; border-collapse: collapse;">
        <tr>
          <td style="width: 72%; vertical-align: middle; text-align: left; padding-right: 10px;">
            <div style="font-size: 9px; color: #9a3412; font-weight: 800; letter-spacing: 0.3px;">अष्टकूट ३६ गुण मिलान सर्वोच्च निर्णय (Overall Matchmaking Verdict)</div>
            <div style="font-size: 13px; font-weight: 900; color: #7c2d12; margin-top: 2px; line-height: 1.3;">
              ${escapeHtml(milanResult.overallVerdict)} &bull; <span style="color: #047857;">${milanResult.compatibilityPercentage}% वैवाहिक अनुकूलता</span>
            </div>
            <div style="font-size: 8.6px; color: #1e293b; margin-top: 2.5px; line-height: 1.35;">
              ${escapeHtml(milanResult.verdictDescription)}
            </div>
          </td>
          <td style="width: 28%; vertical-align: middle; text-align: right;">
            <div style="background: #fffdf9; border: 2px solid #b45309; border-radius: 6px; padding: 6px 8px 8px 8px; text-align: center;">
              <div style="font-size: 18px; font-weight: 900; color: #7c2d12; line-height: 1.15;">${milanResult.totalScore} / 36</div>
              <div style="font-size: 8.4px; color: #047857; font-weight: 800; margin-top: 2px;">प्राप्त अष्टकूट गुण (${milanResult.compatibilityPercentage}%)</div>
              <div style="font-size: 7.7px; color: #334155; margin-top: 1px;">शास्त्रोक्त न्यूनतम मानक: 18 गुण</div>
            </div>
          </td>
        </tr>
      </table>
    </div>

    ${buildSectionHeading("१. वर एवं वधू का संपूर्ण जन्म पंचांग व ज्योतिषीय विवरण (Groom & Bride Astro Profile)", "पृष्ठ १ : मुख्य विवरण")}
    <div style="display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: 10px; align-items: stretch; width: 100%; margin-bottom: 8px; box-sizing: border-box;">
      <div style="min-width: 0; width: 100%; height: 100%; background: #fffdf9; border: 1.5px solid #d97706; border-radius: 6px; padding: 7px 10px 9px 10px; box-sizing: border-box; display: flex; flex-direction: column;">
        <div style="font-size: 10px; font-weight: 900; color: #7c2d12; border-bottom: 1px solid #d97706; padding-bottom: 4px; margin-bottom: 5px;">
          वर पत्रिका विवरण (Groom): ${escapeHtml(milanResult.boyName)}
        </div>
        <table style="width: 100%; table-layout: fixed; border-collapse: collapse; font-size: 8.3px; font-family: 'Noto Sans Devanagari', 'Nirmala UI', 'Mangal', sans-serif;">
          <colgroup>
            <col style="width: 40%;" />
            <col style="width: 60%;" />
          </colgroup>
          <tr><td style="padding: 2.5px 4px 2.5px 0; color: #9a3412; font-weight: 700; vertical-align: top;">जन्म तिथि व समय:</td><td style="padding: 2.5px 0; color: #1e293b; vertical-align: top;">${escapeHtml(milanResult.boyDob || boyKundali.input.formattedDob)} &bull; ${escapeHtml(milanResult.boyTime || boyKundali.input.formattedTime)}</td></tr>
          <tr><td style="padding: 2.5px 4px 2.5px 0; color: #9a3412; font-weight: 700; vertical-align: top;">जन्म स्थान:</td><td style="padding: 2.5px 0; color: #1e293b; vertical-align: top;">${escapeHtml(milanResult.boyPlace || boyKundali.input.birthPlace)}</td></tr>
          <tr><td style="padding: 2.5px 4px 2.5px 0; color: #9a3412; font-weight: 700; vertical-align: top;">जन्म लग्न व स्वामी:</td><td style="padding: 2.5px 0; color: #047857; font-weight: 700; vertical-align: top;">${escapeHtml(milanResult.boyLagna)} (${escapeHtml(boyKundali.panchang.lagnaLord)})</td></tr>
          <tr><td style="padding: 2.5px 4px 2.5px 0; color: #9a3412; font-weight: 700; vertical-align: top;">चन्द्र राशि व राशिपति:</td><td style="padding: 2.5px 0; color: #7c2d12; font-weight: 700; vertical-align: top;">${escapeHtml(milanResult.boyRashi)} (${escapeHtml(milanResult.boyRashiLord)})</td></tr>
          <tr><td style="padding: 2.5px 4px 2.5px 0; color: #9a3412; font-weight: 700; vertical-align: top;">जन्म नक्षत्र व चरण:</td><td style="padding: 2.5px 0; color: #1e293b; vertical-align: top;">${escapeHtml(milanResult.boyNakshatra)} (चरण ${milanResult.boyPada})</td></tr>
          <tr><td style="padding: 2.5px 4px 2.5px 0; color: #9a3412; font-weight: 700; vertical-align: top;">वर्ण / वश्य / योनि:</td><td style="padding: 2.5px 0; color: #334155; vertical-align: top;">${escapeHtml(varnaKoot?.boyValue)} / ${escapeHtml(vashyaKoot?.boyValue)} / ${escapeHtml(yoniKoot?.boyValue)}</td></tr>
          <tr><td style="padding: 2.5px 4px 2.5px 0; color: #9a3412; font-weight: 700; vertical-align: top;">गण एवं नाड़ी:</td><td style="padding: 2.5px 0; color: #7c2d12; font-weight: 600; vertical-align: top;">${escapeHtml(boyGanaDisplay)} &bull; ${escapeHtml(boyNadiDisplay)}</td></tr>
          <tr><td style="padding: 2.5px 4px 2.5px 0; color: #9a3412; font-weight: 700; vertical-align: top;">मांगलिक विचार:</td><td style="padding: 2.5px 0; color: ${boyManglikColor}; font-weight: 700; line-height: 1.3; vertical-align: top;">${escapeHtml(milanResult.manglikStatus.boySeverity)} <span style="color:#475569;font-weight:600;">(लग्न से ${formatHindiHousePhrase(milanResult.manglikStatus.boyMarsHouseLagna)})</span></td></tr>
        </table>
      </div>
      <div style="min-width: 0; width: 100%; height: 100%; background: #fffdf9; border: 1.5px solid #d97706; border-radius: 6px; padding: 7px 10px 9px 10px; box-sizing: border-box; display: flex; flex-direction: column;">
        <div style="font-size: 10px; font-weight: 800; color: #7c2d12; border-bottom: 1px solid #d97706; padding-bottom: 4px; margin-bottom: 5px;">
          वधू पत्रिका विवरण (Bride): ${escapeHtml(milanResult.girlName)}
        </div>
        <table style="width: 100%; table-layout: fixed; border-collapse: collapse; font-size: 8.3px; font-family: 'Noto Sans Devanagari', 'Nirmala UI', 'Mangal', sans-serif;">
          <colgroup>
            <col style="width: 40%;" />
            <col style="width: 60%;" />
          </colgroup>
          <tr><td style="padding: 2.5px 4px 2.5px 0; color: #9a3412; font-weight: 700; vertical-align: top;">जन्म तिथि व समय:</td><td style="padding: 2.5px 0; color: #1e293b; vertical-align: top;">${escapeHtml(milanResult.girlDob || girlKundali.input.formattedDob)} &bull; ${escapeHtml(milanResult.girlTime || girlKundali.input.formattedTime)}</td></tr>
          <tr><td style="padding: 2.5px 4px 2.5px 0; color: #9a3412; font-weight: 700; vertical-align: top;">जन्म स्थान:</td><td style="padding: 2.5px 0; color: #1e293b; vertical-align: top;">${escapeHtml(milanResult.girlPlace || girlKundali.input.birthPlace)}</td></tr>
          <tr><td style="padding: 2.5px 4px 2.5px 0; color: #9a3412; font-weight: 700; vertical-align: top;">जन्म लग्न व स्वामी:</td><td style="padding: 2.5px 0; color: #047857; font-weight: 700; vertical-align: top;">${escapeHtml(milanResult.girlLagna)} (${escapeHtml(girlKundali.panchang.lagnaLord)})</td></tr>
          <tr><td style="padding: 2.5px 4px 2.5px 0; color: #9a3412; font-weight: 700; vertical-align: top;">चन्द्र राशि व राशिपति:</td><td style="padding: 2.5px 0; color: #7c2d12; font-weight: 700; vertical-align: top;">${escapeHtml(milanResult.girlRashi)} (${escapeHtml(milanResult.girlRashiLord)})</td></tr>
          <tr><td style="padding: 2.5px 4px 2.5px 0; color: #9a3412; font-weight: 700; vertical-align: top;">जन्म नक्षत्र व चरण:</td><td style="padding: 2.5px 0; color: #1e293b; vertical-align: top;">${escapeHtml(milanResult.girlNakshatra)} (चरण ${milanResult.girlPada})</td></tr>
          <tr><td style="padding: 2.5px 4px 2.5px 0; color: #9a3412; font-weight: 700; vertical-align: top;">वर्ण / वश्य / योनि:</td><td style="padding: 2.5px 0; color: #334155; vertical-align: top;">${escapeHtml(varnaKoot?.girlValue)} / ${escapeHtml(vashyaKoot?.girlValue)} / ${escapeHtml(yoniKoot?.girlValue)}</td></tr>
          <tr><td style="padding: 2.5px 4px 2.5px 0; color: #9a3412; font-weight: 700; vertical-align: top;">गण एवं नाड़ी:</td><td style="padding: 2.5px 0; color: #7c2d12; font-weight: 600; vertical-align: top;">${escapeHtml(girlGanaDisplay)} &bull; ${escapeHtml(girlNadiDisplay)}</td></tr>
          <tr><td style="padding: 2.5px 4px 2.5px 0; color: #9a3412; font-weight: 700; vertical-align: top;">मांगलिक विचार:</td><td style="padding: 2.5px 0; color: ${girlManglikColor}; font-weight: 700; line-height: 1.3; vertical-align: top;">${escapeHtml(milanResult.manglikStatus.girlSeverity)} <span style="color:#475569;font-weight:600;">(लग्न से ${formatHindiHousePhrase(milanResult.manglikStatus.girlMarsHouseLagna)})</span></td></tr>
        </table>
      </div>
    </div>

    ${buildSectionHeading("२. वर एवं वधू की लग्न (D-1) एवं नवमांश (D-9) कुंडली चक्र", "उत्तर भारतीय हीरक शैली")}
    <table style="width: 100%; table-layout: fixed; border-collapse: separate; border-spacing: 6px 0; margin-bottom: 8px;">
      <tr>
        <td style="width: 25%; vertical-align: top; padding: 0;">
          ${buildNorthIndianChartSVG(boyKundali.lagnaChart, "वर लग्न (D-1)", `${milanResult.boyName} (${milanResult.boyLagna})`, 146)}
        </td>
        <td style="width: 25%; vertical-align: top; padding: 0;">
          ${buildNorthIndianChartSVG(boyKundali.navamsaChart, "वर नवमांश (D-9)", `नवांश लग्न: ${boyD9.rashiName}`, 146)}
        </td>
        <td style="width: 25%; vertical-align: top; padding: 0;">
          ${buildNorthIndianChartSVG(girlKundali.lagnaChart, "वधू लग्न (D-1)", `${milanResult.girlName} (${milanResult.girlLagna})`, 146)}
        </td>
        <td style="width: 25%; vertical-align: top; padding: 0;">
          ${buildNorthIndianChartSVG(girlKundali.navamsaChart, "वधू नवमांश (D-9)", `नवांश लग्न: ${girlD9.rashiName}`, 146)}
        </td>
      </tr>
    </table>

    ${buildSectionHeading("३. मेलापक महा-पत्रिका कार्यकारी सारांश (Executive Matchmaking Summary)", "शास्त्रोक्त निष्कर्ष")}
    <div style="background: #fef8ec; border: 1.5px solid #b45309; border-radius: 6px; padding: 6px 10px 9px 10px; font-size: 8.3px; color: #1e293b; line-height: 1.4;">
      <div><b style="color: #7c2d12;">&bull; अष्टकूट गुण योग:</b> कुल ३६ गुणों में से <b style="color:#047857;">${milanResult.totalScore} गुण (${milanResult.compatibilityPercentage}%)</b> प्राप्त हुए हैं। शास्त्रानुसार १८ से अधिक गुण विवाह हेतु शुभ तथा २४ से अधिक गुण उत्तम कोटि के माने जाते हैं।</div>
      <div style="margin-top: 2.5px;"><b style="color: #7c2d12;">&bull; राशि स्वामी एवं सप्तम भाव समन्वय:</b> ${escapeHtml(milanResult.planetaryHarmony.rashiLordRelation)} &bull; ${escapeHtml(milanResult.planetaryHarmony.seventhHouseSummary)}</div>
      <div style="margin-top: 2.5px;"><b style="color: #7c2d12;">&bull; मांगलिक (कुज) व परिहार निर्णय:</b> ${escapeHtml(milanResult.manglikStatus.description)}</div>
    </div>
  `;
  const kootRowsHtml = milanResult.koots.map((k, idx) => {
    const statusLabel = k.status === "favorable" ? "शुभ / उत्तम" : k.status === "moderate" ? "मध्यम / परिहार्य" : "दोष / विचारणीय";
    const statusColor = k.status === "favorable" ? "#047857" : k.status === "moderate" ? "#b45309" : "#be123c";
    const displayKootTitle = k.hindiName ? k.hindiName.replace(/^\d+\.\s*/, `${idx + 1}. `) : `${idx + 1}. ${k.name}`;
    return `
        <tr style="background: ${idx % 2 === 0 ? "#fffdf9" : "#fef7e6"};">
          <td style="padding: 4.5px 7px 7px 7px; border: 1px solid #d97706; color: #7c2d12; font-weight: 800; font-size: 8.8px; line-height: 1.32; width: 18%;">
            ${escapeHtml(displayKootTitle)}<br/>
            <span style="font-size: 7.7px; color: #475569; font-weight: 600;">${escapeHtml(k.meaning)}</span>
          </td>
          <td style="padding: 4.5px 7px 7px 7px; border: 1px solid #d97706; color: #1e293b; font-weight: 700; font-size: 8.6px; line-height: 1.32; width: 12%;">${escapeHtml(k.boyValue)}</td>
          <td style="padding: 4.5px 7px 7px 7px; border: 1px solid #d97706; color: #9a3412; font-weight: 700; font-size: 8.6px; line-height: 1.32; width: 12%;">${escapeHtml(k.girlValue)}</td>
          <td style="padding: 4.5px 7px 7px 7px; border: 1px solid #d97706; color: #334155; text-align: center; font-weight: 700; font-size: 8.8px; width: 8%;">${k.maxPoints}</td>
          <td style="padding: 4.5px 7px 7px 7px; border: 1px solid #d97706; color: #7c2d12; text-align: center; font-weight: 900; font-size: 9.6px; width: 8%;">${k.obtainedPoints}</td>
          <td style="padding: 4.5px 7px 7px 7px; border: 1px solid #d97706; color: ${statusColor}; font-weight: 800; text-align: center; font-size: 8.3px; width: 11%;">${escapeHtml(statusLabel)}</td>
          <td style="padding: 4.5px 7px 7px 7px; border: 1px solid #d97706; color: #1e293b; font-size: 8.3px; line-height: 1.34; width: 31%;">
            ${escapeHtml(k.verdict)}
            ${k.remedy ? `<div style="color:#9a3412;font-size:7.8px;margin-top:2px;"><b>उपाय:</b> ${escapeHtml(k.remedy)}</div>` : ""}
          </td>
        </tr>
      `;
  }).join("");
  const page2Html = `
    ${buildFormalVedicHeader("अष्टकूट ३६ गुणों की प्रमाणिक गणना एवं शास्त्रोक्त फल सारणी", "पृष्ठ २ : अष्टकूट सारणी", coupleHeaderLabel, true)}

    ${buildSectionHeading("४. अष्टकूट (वर्ण, वश्य, तारा, योनि, मैत्री, गण, भकूट, नाड़ी) ३६ गुण सारणी", `प्राप्त गुण: ${milanResult.totalScore} / 36`)}
    <table style="width: 100%; border-collapse: collapse; margin-bottom: 8px; table-layout: fixed;">
      <thead>
        <tr style="background: #fdecc8;">
          <th style="padding: 4px 7px 7px 7px; border: 1px solid #b45309; color: #7c2d12; font-size: 8.6px; text-align: left; width: 18%;">कूट एवं कारक क्षेत्र</th>
          <th style="padding: 4px 7px 7px 7px; border: 1px solid #b45309; color: #7c2d12; font-size: 8.6px; text-align: left; width: 12%;">वर (${escapeHtml(milanResult.boyName)})</th>
          <th style="padding: 4px 7px 7px 7px; border: 1px solid #b45309; color: #7c2d12; font-size: 8.6px; text-align: left; width: 12%;">वधू (${escapeHtml(milanResult.girlName)})</th>
          <th style="padding: 4px 7px 7px 7px; border: 1px solid #b45309; color: #7c2d12; font-size: 8.6px; text-align: center; width: 8%;">पूर्णांक</th>
          <th style="padding: 4px 7px 7px 7px; border: 1px solid #b45309; color: #7c2d12; font-size: 8.6px; text-align: center; width: 8%;">प्राप्तांक</th>
          <th style="padding: 4px 7px 7px 7px; border: 1px solid #b45309; color: #7c2d12; font-size: 8.6px; text-align: center; width: 11%;">निर्णय</th>
          <th style="padding: 4px 7px 7px 7px; border: 1px solid #b45309; color: #7c2d12; font-size: 8.6px; text-align: left; width: 31%;">शास्त्रोक्त फल एवं जीवन पर प्रभाव</th>
        </tr>
      </thead>
      <tbody>
        ${kootRowsHtml}
        <tr style="background: #fef0c7;">
          <td colspan="3" style="padding: 5px 7px 7px 7px; border: 1px solid #b45309; color: #7c2d12; font-weight: 900; font-size: 9px; text-align: right;">कुल अष्टकूट गुण मिलान योग (Total Ashtakoot Score):</td>
          <td style="padding: 5px 7px 7px 7px; border: 1px solid #b45309; color: #1e293b; font-weight: 900; font-size: 9.2px; text-align: center;">36</td>
          <td style="padding: 5px 7px 7px 7px; border: 1px solid #b45309; color: #7c2d12; font-weight: 900; font-size: 10.2px; text-align: center;">${milanResult.totalScore}</td>
          <td colspan="2" style="padding: 5px 7px 7px 7px; border: 1px solid #b45309; color: #047857; font-weight: 900; font-size: 9px;">${escapeHtml(milanResult.overallVerdict)} (${milanResult.compatibilityPercentage}% अनुकूलता)</td>
        </tr>
      </tbody>
    </table>

    ${buildSectionHeading("५. अष्टकूट श्रेणी वर्गीकरण एवं मुहूर्त चिंतामणि प्रमाण", "शास्त्रीय मानदंड")}
    <table style="width: 100%; table-layout: fixed; border-collapse: collapse; margin-bottom: 6px; font-size: 8.4px;">
      <thead>
        <tr style="background: #fdecc8;">
          <th style="padding: 3.5px 6px 6px 6px; border: 1px solid #b45309; color: #7c2d12; text-align: left; width: 22%;">गुण श्रेणी (Score Range)</th>
          <th style="padding: 3.5px 6px 6px 6px; border: 1px solid #b45309; color: #7c2d12; text-align: left; width: 23%;">शास्त्रीय कोटि</th>
          <th style="padding: 3.5px 6px 6px 6px; border: 1px solid #b45309; color: #7c2d12; text-align: left; width: 55%;">दांपत्य फलित एवं शास्त्र सम्मत निर्देश</th>
        </tr>
      </thead>
      <tbody>
        <tr style="background: ${milanResult.totalScore >= 28 ? "#ecfdf5" : "#fffdf9"};">
          <td style="padding: 3.5px 6px 6px 6px; border: 1px solid #d97706; color: #047857; font-weight: 800;">28 से 36 गुण (78%–100%)</td>
          <td style="padding: 3.5px 6px 6px 6px; border: 1px solid #d97706; color: #1e293b; font-weight: 700;">सर्वोत्तम (Uttam Melapak)</td>
          <td style="padding: 3.5px 6px 6px 6px; border: 1px solid #d97706; color: #334155;">अखंड सौभाग्य, उत्तम संतान, प्रगाढ़ मानसिक व आध्यात्मिक सामंजस्य।</td>
        </tr>
        <tr style="background: ${milanResult.totalScore >= 24 && milanResult.totalScore < 28 ? "#ecfdf5" : "#fef7e6"};">
          <td style="padding: 3.5px 6px 6px 6px; border: 1px solid #d97706; color: #047857; font-weight: 800;">24 से 27.5 गुण (66%–77%)</td>
          <td style="padding: 3.5px 6px 6px 6px; border: 1px solid #d97706; color: #1e293b; font-weight: 700;">अति शुभ (Shreshtha)</td>
          <td style="padding: 3.5px 6px 6px 6px; border: 1px solid #d97706; color: #334155;">सुखद गृहस्थ जीवन, विवाह पश्चात् भाग्योदय एवं पारिवारिक समृद्धि।</td>
        </tr>
        <tr style="background: ${milanResult.totalScore >= 18 && milanResult.totalScore < 24 ? "#fffbeb" : "#fffdf9"};">
          <td style="padding: 3.5px 6px 6px 6px; border: 1px solid #d97706; color: #b45309; font-weight: 800;">18 से 23.5 गुण (50%–65%)</td>
          <td style="padding: 3.5px 6px 6px 6px; border: 1px solid #d97706; color: #1e293b; font-weight: 700;">मध्यम शुभ (Madhyam)</td>
          <td style="padding: 3.5px 6px 6px 6px; border: 1px solid #d97706; color: #334155;">शास्त्र सम्मत विवाह योग्य; ग्रह मैत्री व परिहार के साथ शुभ फलदायी।</td>
        </tr>
        <tr style="background: ${milanResult.totalScore < 18 ? "#fff1f2" : "#fef7e6"};">
          <td style="padding: 3.5px 6px 6px 6px; border: 1px solid #d97706; color: #be123c; font-weight: 800;">18 गुण से कम (&lt;50%)</td>
          <td style="padding: 3.5px 6px 6px 6px; border: 1px solid #d97706; color: #1e293b; font-weight: 700;">परिहार एवं शांति अपेक्षित</td>
          <td style="padding: 3.5px 6px 6px 6px; border: 1px solid #d97706; color: #334155;">राशिपति मैत्री, नवांश बल एवं विशेष वैदिक शांति अनुष्ठान के उपरांत ही विचारणीय।</td>
        </tr>
      </tbody>
    </table>
  `;
  const ganaPariharBoxHtml = (() => {
    if (!hasGanaDosha) {
      return `
        <div style="margin-top: 3px; background: #ecfdf5; border-left: 3px solid #047857; padding: 4px 7px; color: #1e293b;">
          <b style="color:#047857;">गण कूट स्थिति (दोष-मुक्त):</b> वर (${escapeHtml(boyGanaDisplay)}) एवं वधू (${escapeHtml(girlGanaDisplay)}) में ${ganaPts}/6 गुण प्राप्त हैं। गण दोष अनुपस्थित होने से किसी विशेष गण परिहार की आवश्यकता नहीं है।
        </div>
      `;
    }
    if (friendlyRashiLords) {
      return `
        <div style="margin-top: 3px; background: #ecfdf5; border-left: 3px solid #047857; padding: 4px 7px; color: #334155;">
          <b style="color:#047857;">शास्त्रोक्त गण दोष परिहार सिद्ध:</b> <i>“ग्रहमैत्री च राशीनां ताराभकूटशुद्धितः। गणदोषो न वक्तव्यः॥”</i> — राशिपति <b>${escapeHtml(milanResult.boyRashiLord)}</b> व <b>${escapeHtml(milanResult.girlRashiLord)}</b> के मध्य <b>${escapeHtml(rashiFriendship.relation)}</b> संबंध (मैत्री अंक: <b>${maitriPts}/5</b>) होने से गण दोष का शास्त्रसम्मत परिहार पूर्णतः लागू होता है।
        </div>
      `;
    }
    const secondarySupports = [];
    if (nakLordFriendship.score >= 1) {
      secondarySupports.push(`नक्षत्रेश मैत्री (${boyNakLord}–${girlNakLord}: शुभ)`);
    }
    if (lagnaFriendship.score >= 1) {
      secondarySupports.push(`लग्नेश मैत्री (${boyKundali.panchang.lagnaLord}–${girlKundali.panchang.lagnaLord}: शुभ)`);
    }
    if (d9Friendship.score >= 1) {
      secondarySupports.push(`नवांश लग्नेश समन्वय (${boyD9.lordHi}–${girlD9.lordHi})`);
    }
    if (bhakootPts === 7 && nadiPts === 8) {
      secondarySupports.push("भकूट (7/7) व नाड़ी (8/8) पूर्ण शुद्ध");
    }
    return `
      <div style="margin-top: 3px; background: #fff7ed; border-left: 3px solid #b45309; padding: 4px 7px; color: #334155;">
        <b style="color:#9a3412;">गण दोष मूल्यांकन एवं सामंजस्य मार्गदर्शिका:</b> राशिपति मैत्री (<b>${maitriPts}/5</b> — ${escapeHtml(rashiFriendship.relation)}) न्यून होने से राशिपति-मैत्री आधारित गण परिहार लागू नहीं होता। ${secondarySupports.length > 0 ? `हालांकि सहायक सकारात्मक तत्व (<b>${escapeHtml(secondarySupports.join(", "))}</b>) दीर्घकालिक स्थायित्व में सहयोगी हैं। ` : ""}स्वभाव व निर्णय-शैली में अंतर के सामंजस्य हेतु शांत संवाद, धैर्य तथा विवाह पूर्व गणपति अथर्वशीर्ष पाठ एवं शिव-पार्वती अभिषेक श्रेयस्कर रहेगा।
      </div>
    `;
  })();
  const bhakootPariharBoxHtml = (() => {
    if (!hasBhakootDosha) {
      return `
        <div style="margin-top: 3px; background: #ecfdf5; border-left: 3px solid #047857; padding: 4px 7px; color: #1e293b;">
          <b style="color:#047857;">भकूट निर्णय (पूर्णतः शुद्ध):</b> वर (${escapeHtml(milanResult.boyRashi.split(" ")[0])}) एवं वधू (${escapeHtml(milanResult.girlRashi.split(" ")[0])}) के मध्य शुभ राशि अंतराल होने से <b>7/7 पूर्ण गुण</b> प्राप्त हैं — कोई भकूट दोष उपस्थित नहीं है।
        </div>
      `;
    }
    if (friendlyRashiLords) {
      return `
        <div style="margin-top: 3px; background: #ecfdf5; border-left: 3px solid #047857; padding: 4px 7px; color: #334155;">
          <b style="color:#047857;">शास्त्रोक्त भकूट परिहार सिद्ध:</b> <i>“एकराश्यधिपत्ये तु मित्रत्वे राश्यधीशयोः। खेटमैत्र्यां भकूटस्थो दोषो नश्यति निश्चितम्॥”</i><br/>
          &bull; <b>निर्णय:</b> वर राशिपति (<b>${escapeHtml(milanResult.boyRashiLord)}</b>) व वधू राशिपति (<b>${escapeHtml(milanResult.girlRashiLord)}</b>) परस्पर मित्र/एक (मैत्री: <b>${maitriPts}/5</b>) होने से भकूट दोष का पूर्ण परिहार सिद्ध है।
        </div>
      `;
    }
    return `
      <div style="margin-top: 3px; background: #fff1f2; border-left: 3px solid #be123c; padding: 4px 7px; color: #334155;">
        <b style="color:#be123c;">भकूट दोष शांति निर्देश:</b> राशि स्वामियों (<b>${escapeHtml(milanResult.boyRashiLord)}</b> व <b>${escapeHtml(milanResult.girlRashiLord)}</b>) में मैत्री न्यून (<b>${maitriPts}/5</b>) होने से राशिपति भकूट परिहार लागू नहीं होता। ${d9Friendship.score >= 1 ? `नवांश लग्नेश (${escapeHtml(boyD9.lordHi)}–${escapeHtml(girlD9.lordHi)}) आंशिक सहयोग दे रहे हैं; ` : ""}विवाह पूर्व श्री लक्ष्मीनारायण हवन, गौरी-शंकर अभिषेक एवं राशिपति शांति जप अवश्य कराएं।
      </div>
    `;
  })();
  const extendedKootsHtml = deep?.extendedKoots?.length ? deep.extendedKoots.map((ek, idx) => {
    const stCol = ek.status === "शुभ" ? "#047857" : ek.status === "मध्यम" ? "#b45309" : "#be123c";
    return `
            <tr style="background: ${idx % 2 === 0 ? "#fffdf9" : "#fef7e6"};">
              <td style="padding: 3px 6px 5.5px 6px; border: 1px solid #d97706; color: #7c2d12; font-weight: 800; width: 22%;">${escapeHtml(ek.name)}</td>
              <td style="padding: 3px 6px 5.5px 6px; border: 1px solid #d97706; color: #1e293b; width: 21%;">${escapeHtml(ek.boyDetail)} / ${escapeHtml(ek.girlDetail)}</td>
              <td style="padding: 3px 6px 5.5px 6px; border: 1px solid #d97706; color: ${stCol}; font-weight: 800; text-align: center; width: 12%;">${escapeHtml(ek.status)}</td>
              <td style="padding: 3px 6px 5.5px 6px; border: 1px solid #d97706; color: #334155; width: 45%;">${escapeHtml(ek.detail)}</td>
            </tr>
          `;
  }).join("") : `
      <tr style="background: #fffdf9;">
        <td style="padding: 3px 6px; border: 1px solid #d97706; color: #7c2d12; font-weight: 800; width: 22%;">१. वर्ण कूट (${varnaPts}/1)</td>
        <td colspan="3" style="padding: 3px 6px; border: 1px solid #d97706; color: #1e293b;">वर (${escapeHtml(varnaKoot?.boyValue)}) एवं वधू (${escapeHtml(varnaKoot?.girlValue)}) — ${escapeHtml(varnaKoot?.verdict)}</td>
      </tr>
      <tr style="background: #fef7e6;">
        <td style="padding: 3px 6px; border: 1px solid #d97706; color: #7c2d12; font-weight: 800;">२. वश्य व योनि कूट</td>
        <td colspan="3" style="padding: 3px 6px; border: 1px solid #d97706; color: #1e293b;">वश्य (${vashyaPts}/2) &bull; तारा (${taraPts}/3) &bull; योनि (${yoniPts}/4)</td>
      </tr>
    `;
  const page3Html = `
    ${buildFormalVedicHeader("गण-भकूट परिहार मीमांसा एवं रज्जु, वेध, महेन्द्र, स्त्री-दीर्घ विशेष परीक्षण", "पृष्ठ ३ : गण, भकूट व विशेष कूट", coupleHeaderLabel, true)}

    ${buildSectionHeading("६. गण कूट (6 गुण) का विस्तृत स्वभाव एवं परिहार विश्लेषण", `प्राप्त गुण: ${ganaPts} / 6`)}
    <div style="background: #fffdf9; border: 1.5px solid #d97706; border-radius: 6px; padding: 6px 10px 8px 10px; margin-bottom: 6px; font-size: 8.2px; color: #1e293b; line-height: 1.38;">
      <table style="width: 100%; table-layout: fixed; border-collapse: collapse; margin-bottom: 4px;">
        <tr style="background: #fef7e6;">
          <td style="padding: 3px 7px; border: 1px solid #d97706; width: 34%;"><b style="color:#7c2d12;">वर का गण:</b> ${escapeHtml(boyGanaDisplay)}</td>
          <td style="padding: 3px 7px; border: 1px solid #d97706; width: 34%;"><b style="color:#7c2d12;">वधू का गण:</b> ${escapeHtml(girlGanaDisplay)}</td>
          <td style="padding: 3px 7px; border: 1px solid #d97706; width: 32%;"><b style="color:#7c2d12;">गण अंक:</b> <span style="color:${hasGanaDosha ? "#be123c" : "#047857"};font-weight:900;">${ganaPts} / 6 गुण</span></td>
        </tr>
      </table>
      <div><b style="color: #7c2d12;">&bull; गण फलित:</b> ${escapeHtml(ganaKoot?.verdict)}</div>
      ${ganaPariharBoxHtml}
    </div>

    ${buildSectionHeading("७. भकूट कूट (7 गुण) एवं द्वादश राशि संबंध व परिहार निर्णय", `प्राप्त गुण: ${bhakootPts} / 7`)}
    <div style="background: #fffdf9; border: 1.5px solid #d97706; border-radius: 6px; padding: 6px 10px 8px 10px; margin-bottom: 6px; font-size: 8.2px; color: #1e293b; line-height: 1.38;">
      <table style="width: 100%; table-layout: fixed; border-collapse: collapse; margin-bottom: 4px;">
        <tr style="background: #fef7e6;">
          <td style="padding: 3px 7px; border: 1px solid #d97706; width: 35%;"><b style="color:#7c2d12;">वर चन्द्र राशि:</b> ${escapeHtml(milanResult.boyRashi)} (${escapeHtml(milanResult.boyRashiLord)})</td>
          <td style="padding: 3px 7px; border: 1px solid #d97706; width: 35%;"><b style="color:#7c2d12;">वधू चन्द्र राशि:</b> ${escapeHtml(milanResult.girlRashi)} (${escapeHtml(milanResult.girlRashiLord)})</td>
          <td style="padding: 3px 7px; border: 1px solid #d97706; width: 30%;"><b style="color:#7c2d12;">भकूट अंक:</b> <span style="color:${hasBhakootDosha ? "#be123c" : "#047857"};font-weight:900;">${bhakootPts} / 7 गुण</span></td>
        </tr>
      </table>
      <div><b style="color: #7c2d12;">&bull; भकूट कूट फलित:</b> ${escapeHtml(bhakootKoot?.verdict)}</div>
      ${bhakootPariharBoxHtml}
    </div>

    ${buildSectionHeading("८. दक्षिण-उत्तर विशेष मेलापक: रज्जु, वेध, महेन्द्र एवं स्त्री-दीर्घ कूट परीक्षा", "३६ गुण से आगे सूक्ष्म जांच")}
    <table style="width: 100%; table-layout: fixed; border-collapse: collapse; font-size: 8px;">
      <thead>
        <tr style="background: #fdecc8;">
          <th style="padding: 3px 6px 5.5px 6px; border: 1px solid #b45309; color: #7c2d12; text-align: left; width: 22%;">विशेष कूट परीक्षा</th>
          <th style="padding: 3px 6px 5.5px 6px; border: 1px solid #b45309; color: #7c2d12; text-align: left; width: 21%;">वर / वधू स्थिति</th>
          <th style="padding: 3px 6px 5.5px 6px; border: 1px solid #b45309; color: #7c2d12; text-align: center; width: 12%;">निर्णय</th>
          <th style="padding: 3px 6px 5.5px 6px; border: 1px solid #b45309; color: #7c2d12; text-align: left; width: 45%;">दाम्पत्य व दीर्घायु प्रभाव</th>
        </tr>
      </thead>
      <tbody>
        ${extendedKootsHtml}
      </tbody>
    </table>
  `;
  const ninePlanetMaitriRowsHtml = boyKundali.planets.map((bp, idx) => {
    const gp = girlKundali.planets[idx];
    const rel = getPlanetFriendshipRelation(bp.rashiLord, gp?.rashiLord || "गुरु");
    return `
        <tr style="background: ${idx % 2 === 0 ? "#fffdf9" : "#fef7e6"};">
          <td style="padding: 3.5px 6px 6px 6px; border: 1px solid #d97706; color: #7c2d12; font-weight: 800; font-size: 8.3px; width: 15%;">${escapeHtml(bp.hindiName)}</td>
          <td style="padding: 3.5px 6px 6px 6px; border: 1px solid #d97706; color: #1e293b; font-size: 8.2px; width: 22%;">${escapeHtml(bp.rashiName.split(" ")[0])} (स्वामी: <b>${escapeHtml(bp.rashiLord)}</b>)</td>
          <td style="padding: 3.5px 6px 6px 6px; border: 1px solid #d97706; color: #9a3412; font-size: 8.2px; width: 22%;">${gp ? `${escapeHtml(gp.rashiName.split(" ")[0])} (स्वामी: <b>${escapeHtml(gp.rashiLord)}</b>)` : "—"}</td>
          <td style="padding: 3.5px 6px 6px 6px; border: 1px solid #d97706; color: ${rel.color}; font-weight: 800; font-size: 8.2px; width: 21%;">${escapeHtml(rel.relation)}</td>
          <td style="padding: 3.5px 6px 6px 6px; border: 1px solid #d97706; color: #334155; font-size: 8px; width: 20%;">${escapeHtml(rel.harmonyNote)}</td>
        </tr>
      `;
  }).join("");
  const page4Html = `
    ${buildFormalVedicHeader("नाड़ी दोष सूक्ष्म मीमांसा एवं नवग्रह मैत्री (9-Planet Graha Maitri) तुलना", "पृष्ठ ४ : नाड़ी एवं ग्रह मैत्री", coupleHeaderLabel, true)}

    ${buildSectionHeading("९. नाड़ी कूट (Nadi Koot — 8 गुण) का विस्तृत आयुर्वेदिक व ज्योतिषीय विश्लेषण", `प्राप्त गुण: ${nadiPts} / 8`)}
    <div style="background: #fffdf9; border: 1.5px solid #d97706; border-radius: 6px; padding: 6px 10px 9px 10px; margin-bottom: 8px; font-size: 8.4px; color: #1e293b; line-height: 1.42;">
      <table style="width: 100%; table-layout: fixed; border-collapse: collapse; margin-bottom: 5px;">
        <tr style="background: #fef7e6;">
          <td style="padding: 4px 8px; border: 1px solid #d97706; width: 33%;"><b style="color:#7c2d12;">वर की नाड़ी:</b> ${escapeHtml(boyNadiDisplay)}</td>
          <td style="padding: 4px 8px; border: 1px solid #d97706; width: 33%;"><b style="color:#7c2d12;">वधू की नाड़ी:</b> ${escapeHtml(girlNadiDisplay)}</td>
          <td style="padding: 4px 8px; border: 1px solid #d97706; width: 34%;"><b style="color:#7c2d12;">नाड़ी प्राप्तांक:</b> <span style="color:${hasNadiDosha ? "#be123c" : "#047857"};font-weight:900;">${nadiPts} / 8 गुण</span></td>
        </tr>
      </table>
      <div><b style="color: #7c2d12;">&bull; त्रि-नाड़ी विज्ञान:</b> अष्टकूट में सर्वाधिक ८ गुण नाड़ी कूट के होते हैं। <b>आदि नाड़ी (वात प्रकृति)</b>, <b>मध्य नाड़ी (पित्त प्रकृति)</b> एवं <b>अन्त्य नाड़ी (कफ प्रकृति)</b> वर-वधू के शारीरिक त्रिदोष संतुलन, आनुवंशिक स्वास्थ्य एवं संतान सुख का निर्धारण करती हैं।</div>
      <div style="margin-top: 4px; background: #fef8ec; border-left: 3px solid #b45309; padding: 5px 8px; color: #334155;">
        ${!hasNadiDosha ? `<b style="color:#047857;">अंतिम नाड़ी निर्णय (पूर्णतः शुद्ध):</b> वर एवं वधू की नाड़ी भिन्न होने से <b>८/८ पूर्ण गुण</b> प्राप्त हैं — नाड़ी दोष पूर्णतः अनुपस्थित है तथा श्रेष्ठ संतान व आरोग्य योग है।` : `<b style="color:#7c2d12;">पीयूषधारा एवं मुहूर्त चिंतामणि के प्रामाणिक नाड़ी परिहार सूत्र:</b><br/>
               <i>“एकराशिः पृथक् तारा एकतारा पृथग्गृहम्। एकर्क्षं भिन्नपादं च नाड़ीदोषो न विद्यते॥”</i><br/>
               १. <b>एक राशि - भिन्न नक्षत्र</b>, २. <b>एक नक्षत्र - भिन्न राशि</b> अथवा ३. <b>एक नक्षत्र - भिन्न चरण (Pada)</b> होने पर नाड़ी दोष निरस्त होता है।<br/>
               &bull; <b style="color:#7c2d12;">अंतिम नाड़ी निर्णय:</b> ${sameRashiDiffNakshatra ? "वर और वधू की राशि एक किंतु नक्षत्र भिन्न होने से शास्त्रोक्त नाड़ी दोष परिहार पूर्णतः मान्य है।" : sameNakshatraDiffPada ? "वर और वधू का नक्षत्र एक किंतु चरण भिन्न होने से शास्त्रोक्त नाड़ी दोष परिहार मान्य है।" : "एक ही नाड़ी होने से विवाह पूर्व स्वर्ण-नाड़ी दान, गोदान, अन्नदान एवं सवा लाख महामृत्युंजय मंत्र जाप कराना अनिवार्य है।"}`}
      </div>
    </div>

    ${buildSectionHeading("१०. नवग्रह राशि-स्वामी मैत्री तुलना सारणी (9-Planet Graha Maitri Comparison Table)", `चन्द्र मैत्री: ${maitriPts} / 5`)}
    <table style="width: 100%; table-layout: fixed; border-collapse: collapse;">
      <thead>
        <tr style="background: #fdecc8;">
          <th style="padding: 3.5px 6px 6px 6px; border: 1px solid #b45309; color: #7c2d12; font-size: 8.3px; text-align: left; width: 15%;">ग्रह (Planet)</th>
          <th style="padding: 3.5px 6px 6px 6px; border: 1px solid #b45309; color: #7c2d12; font-size: 8.3px; text-align: left; width: 22%;">वर राशि एवं राशिपति</th>
          <th style="padding: 3.5px 6px 6px 6px; border: 1px solid #b45309; color: #7c2d12; font-size: 8.3px; text-align: left; width: 22%;">वधू राशि एवं राशिपति</th>
          <th style="padding: 3.5px 6px 6px 6px; border: 1px solid #b45309; color: #7c2d12; font-size: 8.3px; text-align: left; width: 21%;">परस्पर ग्रह मैत्री संबंध</th>
          <th style="padding: 3.5px 6px 6px 6px; border: 1px solid #b45309; color: #7c2d12; font-size: 8.3px; text-align: left; width: 20%;">दांपत्य समन्वय प्रभाव</th>
        </tr>
      </thead>
      <tbody>
        ${ninePlanetMaitriRowsHtml}
      </tbody>
    </table>
  `;
  const fullPlanetComparisonRowsHtml = boyKundali.planets.map((bp, idx) => {
    const gp = girlKundali.planets[idx];
    const bpStarLord = boyKundali.kpSystem?.planets?.find((kp) => kp.planet === bp.hindiName)?.starLord || bp.rashiLord;
    const gpStarLord = girlKundali.kpSystem?.planets?.find((kp) => kp.planet === gp?.hindiName)?.starLord || gp?.rashiLord || "—";
    return `
        <tr style="background: ${idx % 2 === 0 ? "#fffdf9" : "#fef7e6"};">
          <td style="padding: 3.5px 6px 6px 6px; border: 1px solid #d97706; color: #7c2d12; font-weight: 800; font-size: 8.3px; width: 14%;">
            ${escapeHtml(bp.hindiName)}
          </td>
          <td style="padding: 3.5px 6px 6px 6px; border: 1px solid #d97706; color: #1e293b; font-size: 8.1px; width: 21%; font-family: 'Noto Sans Devanagari', 'Nirmala UI', 'Mangal', sans-serif;">
            <span style="font-weight: 700;">${escapeHtml(bp.rashiName.split(" ")[0])}</span> <span style="font-variant-numeric: tabular-nums;">(${escapeHtml(bp.fullDegreeDMS)})</span><br/>
            ${formatPlanetDignityHtml(bp, boyKundali)}
          </td>
          <td style="padding: 3.5px 6px 6px 6px; border: 1px solid #d97706; color: #047857; font-size: 8.1px; width: 22%; font-family: 'Noto Sans Devanagari', 'Nirmala UI', 'Mangal', sans-serif;">
            ${formatHindiHousePhrase(bp.houseInLagna)} &bull; ${escapeHtml(bp.nakshatra.split(" ")[0])} (च.${bp.pada})<br/>
            <span style="color:#334155;font-size:7.6px;">नक्षत्रेश: ${escapeHtml(bpStarLord)}</span>
          </td>
          <td style="padding: 3.5px 6px 6px 6px; border: 1px solid #d97706; color: #9a3412; font-size: 8.1px; width: 21%; font-family: 'Noto Sans Devanagari', 'Nirmala UI', 'Mangal', sans-serif;">
            ${gp ? `<span style="font-weight: 700;">${escapeHtml(gp.rashiName.split(" ")[0])}</span> <span style="font-variant-numeric: tabular-nums;">(${escapeHtml(gp.fullDegreeDMS)})</span><br/>${formatPlanetDignityHtml(gp, girlKundali)}` : "—"}
          </td>
          <td style="padding: 3.5px 6px 6px 6px; border: 1px solid #d97706; color: #be123c; font-size: 8.1px; width: 22%; font-family: 'Noto Sans Devanagari', 'Nirmala UI', 'Mangal', sans-serif;">
            ${gp ? `${formatHindiHousePhrase(gp.houseInLagna)} &bull; ${escapeHtml(gp.nakshatra.split(" ")[0])} (च.${gp.pada})<br/><span style="color:#334155;font-size:7.6px;">नक्षत्रेश: ${escapeHtml(gpStarLord)}</span>` : "—"}
          </td>
        </tr>
      `;
  }).join("");
  const pariharSummaryStr = deep?.pariharChecks?.length ? deep.pariharChecks.map((pc) => `<b>${escapeHtml(pc.doshaName)}:</b> ${escapeHtml(pc.status)}`).join(" &nbsp;|&nbsp; ") : "";
  const page5Html = `
    ${buildFormalVedicHeader("वर एवं वधू की नवग्रह स्पष्ट स्थिति, मांगलिक परिहार व नवांश (D-9) तुलना", "पृष्ठ ५ : नवग्रह एवं कुज तुलना", coupleHeaderLabel, true)}

    ${buildSectionHeading("११. वर एवं वधू की संपूर्ण नवग्रह स्थिति तुलना सारणी (Groom vs Bride Planetary Placements)", "नवग्रह भाव व नीचभंग जांच")}
    <table style="width: 100%; table-layout: fixed; border-collapse: collapse; margin-bottom: 7px; font-family: 'Noto Sans Devanagari', 'Nirmala UI', 'Mangal', sans-serif;">
      <thead>
        <tr style="background: #fdecc8;">
          <th style="padding: 3.5px 6px 6px 6px; border: 1px solid #b45309; color: #7c2d12; font-size: 8.3px; text-align: left; width: 14%;">ग्रह (Planet)</th>
          <th style="padding: 3.5px 6px 6px 6px; border: 1px solid #b45309; color: #7c2d12; font-size: 8.3px; text-align: left; width: 21%;">वर राशि, स्पष्ट अंश व बल</th>
          <th style="padding: 3.5px 6px 6px 6px; border: 1px solid #b45309; color: #7c2d12; font-size: 8.3px; text-align: left; width: 22%;">वर भाव एवं नक्षत्र (चरण)</th>
          <th style="padding: 3.5px 6px 6px 6px; border: 1px solid #b45309; color: #7c2d12; font-size: 8.3px; text-align: left; width: 21%;">वधू राशि, स्पष्ट अंश व बल</th>
          <th style="padding: 3.5px 6px 6px 6px; border: 1px solid #b45309; color: #7c2d12; font-size: 8.3px; text-align: left; width: 22%;">वधू भाव एवं नक्षत्र (चरण)</th>
        </tr>
      </thead>
      <tbody>
        ${fullPlanetComparisonRowsHtml}
      </tbody>
    </table>

    ${buildSectionHeading("१२. द्विपक्षीय मांगलिक (कुज) दोष, शास्त्रोक्त परिहार एवं नवांश (D-9) क्रॉस-चेक", milanResult.manglikStatus.manglikMatch ? "कुज समन्वय शुभ" : "मंगल परिहार विचारणीय")}
    <div style="background: #fffdf9; border: 1.5px solid #d97706; border-radius: 6px; padding: 6px 10px 8px 10px; font-size: 8px; color: #1e293b; line-height: 1.38;">
      <table style="width: 100%; table-layout: fixed; border-collapse: collapse; margin-bottom: 4px;">
        <tr style="background: #fef7e6;">
          <td style="padding: 3.5px 8px; border: 1px solid #d97706; width: 50%; vertical-align: top;">
            <b style="color:#7c2d12;">वर मांगलिक स्थिति:</b> <span style="color:${boyManglikColor};font-weight:800;">${escapeHtml(milanResult.manglikStatus.boySeverity)}</span><br/>
            <span style="color:#475569;font-size:7.6px;">लग्न: ${formatHindiHouseOrdinal(milanResult.manglikStatus.boyMarsHouseLagna)}, चन्द्र: ${formatHindiHouseOrdinal(milanResult.manglikStatus.boyMarsHouseMoon)}, शुक्र: ${formatHindiHouseOrdinal(boyMarsHouseVenus)} भाव</span>
          </td>
          <td style="padding: 3.5px 8px; border: 1px solid #d97706; width: 50%; vertical-align: top;">
            <b style="color:#7c2d12;">वधू मांगलिक स्थिति:</b> <span style="color:${girlManglikColor};font-weight:800;">${escapeHtml(milanResult.manglikStatus.girlSeverity)}</span><br/>
            <span style="color:#475569;font-size:7.6px;">लग्न: ${formatHindiHouseOrdinal(milanResult.manglikStatus.girlMarsHouseLagna)}, चन्द्र: ${formatHindiHouseOrdinal(milanResult.manglikStatus.girlMarsHouseMoon)}, शुक्र: ${formatHindiHouseOrdinal(girlMarsHouseVenus)} भाव</span>
          </td>
        </tr>
      </table>
      <div><b style="color: #7c2d12;">&bull; मांगलिक व परिहार निर्णय:</b> ${escapeHtml(milanResult.manglikStatus.description)}</div>
      <div style="margin-top: 2px;"><b style="color: #7c2d12;">&bull; सप्तम भाव व गुरु-शुक्र बल:</b> ${escapeHtml(milanResult.planetaryHarmony.seventhHouseSummary)} &bull; ${escapeHtml(milanResult.planetaryHarmony.jupiterVenusSummary)}</div>
      ${pariharSummaryStr ? `<div style="margin-top: 3px; background: #fef8ec; border-left: 3px solid #b45309; padding: 3px 6px; color: #7c2d12;"><b>शास्त्रोक्त परिहार सार:</b> ${pariharSummaryStr}</div>` : ""}
      ${deep?.navamshaCrossCheck ? `<div style="margin-top: 2.5px;"><b style="color: #047857;">&bull; नवांश (D-9) व दशा संधि परीक्षण:</b> ${escapeHtml(deep.navamshaCrossCheck)}</div>` : ""}
    </div>
  `;
  const boyJup = boyKundali.planets.find((p) => p.id === "jupiter");
  const girlJup = girlKundali.planets.find((p) => p.id === "jupiter");
  boyKundali.planets.find((p) => p.id === "venus");
  girlKundali.planets.find((p) => p.id === "venus");
  const boy7th = getHouseLordStrengthSummary(boyKundali, 7);
  const girl7th = getHouseLordStrengthSummary(girlKundali, 7);
  const boy2nd = getHouseLordStrengthSummary(boyKundali, 2);
  const girl2nd = getHouseLordStrengthSummary(girlKundali, 2);
  const boy4th = getHouseLordStrengthSummary(boyKundali, 4);
  const girl4th = getHouseLordStrengthSummary(girlKundali, 4);
  const boy5th = getHouseLordStrengthSummary(boyKundali, 5);
  const girl5th = getHouseLordStrengthSummary(girlKundali, 5);
  const boy11th = getHouseLordStrengthSummary(boyKundali, 11);
  const girl11th = getHouseLordStrengthSummary(girlKundali, 11);
  const boyJupStrong = Boolean(boyJup) && (boyJup.isExalted || boyJup.dignity.includes("स्वगृही") || boyJup.dignity.includes("मित्र") || evaluateNeechabhanga("jupiter", boyKundali).isCancelled);
  const girlJupStrong = Boolean(girlJup) && (girlJup.isExalted || girlJup.dignity.includes("स्वगृही") || girlJup.dignity.includes("मित्र") || evaluateNeechabhanga("jupiter", girlKundali).isCancelled);
  const mentalScore = Number((varnaPts + maitriPts + ganaPts).toFixed(1));
  const intimacyScore = Number((vashyaPts + yoniPts).toFixed(1));
  const fortuneScore = Number((taraPts + bhakootPts).toFixed(1));
  const stabilizingFactors = [];
  if (bhakootPts === 7) stabilizingFactors.push("भकूट (7/7 पूर्ण शुभ)");
  if (nadiPts === 8) stabilizingFactors.push("नाड़ी (8/8 पूर्ण शुद्ध)");
  if (taraPts >= 3) stabilizingFactors.push("तारा (3/3 श्रेष्ठ)");
  if (boyJupStrong || girlJupStrong) stabilizingFactors.push("बली गुरु का शुभ संरक्षण");
  if (d9Friendship.score >= 1) stabilizingFactors.push(`नवांश (D-9) समन्वय (${boyD9.rashiName.split(" ")[0]}–${girlD9.rashiName.split(" ")[0]})`);
  if (lagnaFriendship.score >= 1) stabilizingFactors.push("लग्नेश मैत्री");
  const pillar1Text = mentalScore >= 9 ? `वर्ण (${varnaPts}/1), ग्रह मैत्री (${maitriPts}/5) एवं गण (${ganaPts}/6) का कुल योग श्रेष्ठ (${mentalScore}/12) है। वर-वधू के विचारों, जीवन-दृष्टि एवं निर्णय-शैली में सहज तालमेल, आदर व प्रगाढ़ मानसिक संतुलन रहेगा।` : mentalScore >= 4 ? `वर्ण (${varnaPts}/1), ग्रह मैत्री (${maitriPts}/5) एवं गण (${ganaPts}/6) का योग मध्यम (${mentalScore}/12) है। कुछ विषयों में दृष्टिकोण भिन्न हो सकता है, किंतु शांत संवाद, आपसी सम्मान और ${stabilizingFactors.length > 0 ? stabilizingFactors.slice(0, 2).join(" व ") : "धैर्य"} के सहारे सुदृढ़ समझ विकसित होगी।` : `वर्ण (${varnaPts}/1), ग्रह मैत्री (${maitriPts}/5) एवं गण (${ganaPts}/6) का योग न्यून (${mentalScore}/12) होने से विवाह के प्रारंभिक वर्षों में स्वभाव, प्राथमिकताओं व निर्णय-शैली में वैचारिक भिन्नता स्पष्ट रूप से रह सकती है। ${stabilizingFactors.length > 0 ? `सकारात्मक पक्ष यह है कि ${stabilizingFactors.slice(0, 3).join(", ")} इस रिश्ते को दीर्घकालिक स्थिरता प्रदान कर रहे हैं। ` : ""}अहंकार व त्वरित प्रतिक्रिया से बचकर खुले संवाद को प्राथमिकता देना इस विवाह की कुंजी रहेगी।`;
  const pillar2Text = intimacyScore >= 4.5 ? `वश्य (${vashyaPts}/2) व योनि (${yoniPts}/4) का योग प्रबल (${intimacyScore}/6) है तथा वर सप्तमेश ${boy7th.label} व वधू सप्तमेश ${girl7th.label} से दांपत्य में गहरा आकर्षण, भावनात्मक जुड़ाव एवं निष्ठा रहेगी।` : intimacyScore >= 2.5 ? `वश्य (${vashyaPts}/2) व योनि (${yoniPts}/4) का योग संतुलित (${intimacyScore}/6) है। वर सप्तमेश ${boy7th.lordHi} व वधू सप्तमेश ${girl7th.lordHi} के समन्वय से समय के साथ स्नेह, विश्वास व दांपत्य सहजता उत्तरोत्तर बढ़ेगी।` : `वश्य (${vashyaPts}/2) व योनि (${yoniPts}/4) का योग न्यून (${intimacyScore}/6) है, अतः भावनात्मक व शारीरिक सामंजस्य विकसित होने में प्रारंभिक धैर्य आवश्यक रहेगा। नवांश लग्न (${boyD9.rashiName.split(" ")[0]}–${girlD9.rashiName.split(" ")[0]}) और एक-दूसरे की भावनाओं के प्रति संवेदनशीलता से दांपत्य सुदृढ़ होगा।`;
  const pillar3Text = fortuneScore >= 8.5 ? `तारा (${taraPts}/3) व भकूट (${bhakootPts}/7) का प्रभाव अत्यंत शुभ (${fortuneScore}/10) है। विवाह पश्चात् संयुक्त भाग्योदय, आय में वृद्धि, संपत्ति-वाहन सुख तथा करियर में उल्लेखनीय उन्नति के प्रबल योग हैं।` : fortuneScore >= 5 ? `तारा (${taraPts}/3) व भकूट (${bhakootPts}/7) का योग मध्यम-शुभ (${fortuneScore}/10) है। अनुशासित आर्थिक नियोजन और ${boy11th.isStrong || girl11th.isStrong ? "मजबूत एकादश भाव" : "परस्पर सहयोग"} से विवाह उपरांत क्रमिक समृद्धि व स्थिरता प्राप्त होगी।` : `तारा (${taraPts}/3) व भकूट (${bhakootPts}/7) का योग न्यून (${fortuneScore}/10) होने से आर्थिक निर्णयों व निवेश में जल्दबाजी से बचें। संयुक्त बजट अनुशासन तथा श्री लक्ष्मीनारायण पूजन से आर्थिक स्थिरता सुनिश्चित होगी।`;
  const pillar4Text = maitriPts >= 4 ? `राशि स्वामियों (${milanResult.boyRashiLord} एवं ${milanResult.girlRashiLord}, मैत्री ${maitriPts}/5) में उत्तम मित्रता से दोनों परिवारों के मध्य सहज सौहार्द, मान-सम्मान एवं मांगलिक वातावरण बना रहेगा।` : maitriPts >= 2.5 || lagnaFriendship.score >= 1 ? `राशि मैत्री (${maitriPts}/5) मध्यम है, किंतु ${lagnaFriendship.score >= 1 ? `लग्नेश (${boyKundali.panchang.lagnaLord}–${girlKundali.panchang.lagnaLord}) की शुभ मित्रता` : "वर-वधू के चतुर्थ भाव संतुलन"} से ससुराल व पारिवारिक संबंध संतुलित एवं सम्मानजनक रहेंगे।` : `राशि स्वामियों (${milanResult.boyRashiLord}–${milanResult.girlRashiLord}, मैत्री ${maitriPts}/5) में वैचारिक अंतर होने से दोनों परिवारों की जीवनशैली व अपेक्षाओं में प्रारंभिक भिन्नता संभव है। विनम्र वाणी, बड़ों के सम्मान और पारिवारिक मामलों में संतुलित सीमाओं से घर में शांति बनी रहेगी।`;
  const mahendraItem = deep?.extendedKoots?.find((ek) => ek.name.includes("महेन्द्र"));
  const mahendraIsShubh = mahendraItem?.status === "शुभ";
  const pillar5Text = nadiPts === 8 ? `नाड़ी कूट पूर्णतः शुद्ध (8/8)${mahendraIsShubh ? " एवं महेन्द्र कूट सिद्ध" : ""} होने के साथ वर के गुरु (${describePlanetStrengthPlain(boyJup, boyKundali)}) व वधू के गुरु (${describePlanetStrengthPlain(girlJup, girlKundali)}) की स्थिति स्वस्थ, तेजस्वी संतान सुख एवं दीर्घायु आरोग्य का प्रबल संकेत देती है।` : hasNadiParihar ? `नाड़ी अंक 0/8 होने पर भी शास्त्रोक्त नाड़ी परिहार लागू है। संतान व आरोग्य पक्ष संतुलित रहेगा; सामान्य स्वास्थ्य सतर्कता, गुरु कृपा एवं गौरी-शंकर आराधना से उत्तम संतान सुख प्राप्त होगा।` : `समान नाड़ी दोष (0/8) सक्रिय होने से संतान व स्वास्थ्य पक्ष के प्रति विशेष सजगता आवश्यक है। विवाह पूर्व शास्त्रोक्त नाड़ी शांति, महामृत्युंजय अनुष्ठान तथा आधुनिक चिकित्सकीय परामर्श अवश्य लें।`;
  const fiveMarriagePredictions = [
    ["१. मानसिक एवं वैचारिक सामंजस्य (Mental & Temperament Harmony)", pillar1Text],
    ["२. दांपत्य प्रेम एवं सप्तम भाव/नवांश बल (Marital Intimacy & Bond)", pillar2Text],
    ["३. विवाहोपरांत भाग्योदय एवं आर्थिक समृद्धि (Post-Marriage Fortune)", pillar3Text],
    ["४. पारिवारिक समरसता एवं कुटुम्ब सौख्य (Family & In-Laws Harmony)", pillar4Text],
    ["५. संतान सुख, वंश वृद्धि एवं आरोग्य (Progeny & Vitality)", pillar5Text]
  ];
  const predictionsCompactHtml = fiveMarriagePredictions.map(
    (item) => `
      <div style="background: #fffdf9; border: 1px solid #d97706; border-radius: 5px; padding: 4px 8px 6px 8px; margin-bottom: 4.5px;">
        <div style="font-size: 8.5px; font-weight: 800; color: #7c2d12;">${escapeHtml(item[0])}</div>
        <div style="font-size: 8px; color: #1e293b; line-height: 1.34;">${escapeHtml(item[1])}</div>
      </div>
    `
  ).join("");
  const remediesExtraHtml = deep?.practicalRemedies?.length ? deep.practicalRemedies.slice(0, 4).map((rem, i) => `<div><b style="color:#7c2d12;">${i + 1}.</b> ${escapeHtml(rem)}</div>`).join("") : `<div>गृहस्थ सुख हेतु गौरी-शंकर रुद्राक्ष पूजा स्थान में स्थापित करें तथा “ॐ उमा-महेश्वराभ्यां नमः” का नित्य ११ बार जप करें।</div>`;
  const specificDoshaRemedyText = (() => {
    const items = [];
    if (hasNadiDosha && !hasNadiParihar) {
      items.push("नाड़ी दोष शांति हेतु महामृत्युंजय मंत्र जाप व स्वर्ण-नाड़ी दान कराएं।");
    }
    if (hasBhakootDosha && !friendlyRashiLords) {
      items.push("भकूट शांति हेतु श्री लक्ष्मीनारायण हवन एवं राशि स्वामियों का जप कराएं।");
    }
    if (hasGanaDosha && !friendlyRashiLords) {
      items.push("गण भिन्नता के सामंजस्य हेतु गणपति अथर्वशीर्ष पाठ एवं शिव-पार्वती पूजन करें।");
    }
    if (!milanResult.manglikStatus.manglikMatch) {
      items.push("सक्रिय मांगलिक प्रभाव हेतु कुंभ/पीपल विवाह व मंगल चंडिका शांति कराएं।");
    }
    if (items.length === 0) {
      return "सभी प्रमुख कूट एवं मांगलिक परिहार अनुकूल हैं; विवाह पूर्व गणपति एवं कुलदेवता पूजन पर्याप्त है।";
    }
    return items.join(" ");
  })();
  const page6Html = `
    ${buildFormalVedicHeader("वैवाहिक भविष्यफल, शुभ विवाह मुहूर्त मार्गदर्शिका एवं वैदिक पूजा विधान", "पृष्ठ ६ : फलित, मुहूर्त व उपाय", coupleHeaderLabel, true)}

    ${buildSectionHeading("१३. पंच-स्तरीय यथार्थ वैवाहिक जीवन भविष्यफल (5-Pillar Matrimonial Predictions)", "अंक व ग्रह बल आधारित फलित")}
    <div style="margin-bottom: 6px;">
      ${predictionsCompactHtml}
    </div>

    ${buildSectionHeading("१४. शुभ विवाह मुहूर्त एवं दीर्घायु निष्कर्ष (Marriage Timing & Muhurat Guidelines)", "लग्न एवं तारा शुद्धि")}
    <table style="width: 100%; table-layout: fixed; border-collapse: collapse; margin-bottom: 6px; font-size: 8.1px;">
      <tbody>
        <tr style="background: #fffdf9;">
          <td style="padding: 3.5px 7px 5.5px 7px; border: 1px solid #d97706; color: #7c2d12; font-weight: 800; width: 26%;">शुभ सौर मास एवं नक्षत्र</td>
          <td style="padding: 3.5px 7px 5.5px 7px; border: 1px solid #d97706; color: #1e293b; width: 74%;">रोहिणी, मृगशिरा, मघा, उत्तराफाल्गुनी, हस्त, स्वाति, अनुराधा, मूल, उत्तराषाढ़ा, उत्तराभाद्रपद एवं रेवती नक्षत्र विवाह हेतु सर्वश्रेष्ठ हैं।</td>
        </tr>
        <tr style="background: #fef7e6;">
          <td style="padding: 3.5px 7px 5.5px 7px; border: 1px solid #d97706; color: #7c2d12; font-weight: 800;">त्रिबल शुद्धि व विवाह लग्न</td>
          <td style="padding: 3.5px 7px 5.5px 7px; border: 1px solid #d97706; color: #047857; font-weight: 700;">वर लग्न (${escapeHtml(milanResult.boyLagna)}) व वधू लग्न (${escapeHtml(milanResult.girlLagna)}) से अष्टम शुद्धि सहित शुभ गोधूलि/अभिजित लग्न चुनें।</td>
        </tr>
        ${deep?.marriageTimingAndLongevity ? `<tr style="background: #fffdf9;">
                <td style="padding: 3.5px 7px 5.5px 7px; border: 1px solid #d97706; color: #7c2d12; font-weight: 800;">संबंध स्थिरता व समय सार</td>
                <td style="padding: 3.5px 7px 5.5px 7px; border: 1px solid #d97706; color: #1e293b;">${escapeHtml(deep.marriageTimingAndLongevity)}</td>
              </tr>` : ""}
      </tbody>
    </table>

    ${buildSectionHeading("१५. सुखी दांपत्य हेतु शास्त्रोक्त वैदिक पूजा एवं सरल उपाय (Remedial Suggestions)", "मंगलमय गृहस्थ कवच")}
    <table style="width: 100%; table-layout: fixed; border-collapse: collapse; font-size: 8.1px;">
      <tbody>
        <tr style="background: #fffdf9;">
          <td style="padding: 3.5px 7px 5.5px 7px; border: 1px solid #d97706; color: #7c2d12; font-weight: 800; width: 26%;">१. गौरी-शंकर एवं रुद्राभिषेक</td>
          <td style="padding: 3.5px 7px 5.5px 7px; border: 1px solid #d97706; color: #1e293b; width: 74%;">विवाह पूर्व वर-वधू के नाम से भगवान शिव-पार्वती का रुद्राभिषेक एवं श्री लक्ष्मीनारायण पूजन कराने से अखंड सौभाग्य प्राप्त होता है।</td>
        </tr>
        <tr style="background: #fef7e6;">
          <td style="padding: 3.5px 7px 5.5px 7px; border: 1px solid #d97706; color: #7c2d12; font-weight: 800;">२. विशेष दोष निवारण विधान</td>
          <td style="padding: 3.5px 7px 5.5px 7px; border: 1px solid #d97706; color: #9a3412; font-weight: 600;">${escapeHtml(specificDoshaRemedyText)}</td>
        </tr>
        <tr style="background: #fffdf9;">
          <td style="padding: 3.5px 7px 5.5px 7px; border: 1px solid #d97706; color: #7c2d12; font-weight: 800;">३. व्यावहारिक व वैदिक उपाय</td>
          <td style="padding: 3.5px 7px 5.5px 7px; border: 1px solid #d97706; color: #047857; font-weight: 600; line-height: 1.35;">${remediesExtraHtml}</td>
        </tr>
      </tbody>
    </table>
  `;
  const dashaTimingSummary = getUpcomingAuspiciousDashaSummary(boyKundali, girlKundali);
  const qa1Status = maitriPts + ganaPts + vashyaPts >= 9 ? { badge: "अत्यंत शुभ तालमेल", color: "#047857", bg: "#ecfdf5" } : maitriPts + ganaPts + vashyaPts >= 5 ? { badge: "संतुलित — संवाद से श्रेष्ठ", color: "#b45309", bg: "#fffbeb" } : { badge: "प्रारंभिक प्रयास व धैर्य अपेक्षित", color: "#be123c", bg: "#fff1f2" };
  const qa1Answer = maitriPts + ganaPts + vashyaPts >= 9 ? `वर की चन्द्र राशि ${milanResult.boyRashi.split(" ")[0]} व वधू की ${milanResult.girlRashi.split(" ")[0]} है; ग्रह मैत्री (${maitriPts}/5), गण (${ganaPts}/6) व वश्य (${vashyaPts}/2) तीनों प्रबल हैं। दोनों के बीच सहज भावनात्मक समझ, प्रेम और विचारों की स्पष्ट एकरूपता रहेगी।` : maitriPts + ganaPts + vashyaPts >= 5 ? `ग्रह मैत्री (${maitriPts}/5), गण (${ganaPts}/6) व वश्य (${vashyaPts}/2) का योग मध्यम है। कुछ निर्णयों में दृष्टिकोण भिन्न हो सकते हैं, किंतु सम्मानजनक संवाद और धैर्य से समय के साथ मजबूत मानसिक जुड़ाव स्थापित होगा।` : `वर (${milanResult.boyRashi.split(" ")[0]}) व वधू (${milanResult.girlRashi.split(" ")[0]}) की ग्रह मैत्री (${maitriPts}/5), गण (${ganaPts}/6) व वश्य (${vashyaPts}/2) न्यून होने से प्रारंभिक वर्षों में स्वभाव व सोचने के ढंग में अंतर स्पष्ट रहेगा। ${stabilizingFactors.length > 0 ? `${stabilizingFactors.slice(0, 2).join(" व ")} इस रिश्ते को मजबूत आधार दे रहे हैं — ` : ""}अहंकार छोड़ने और शांत संवाद रखने से गृहस्थ जीवन सुखमय बनेगा।`;
  const qa2Status = bhakootPts === 7 && (boy2nd.isStrong || girl2nd.isStrong || boy11th.isStrong || girl11th.isStrong) ? { badge: "उत्तम आर्थिक भाग्योदय", color: "#047857", bg: "#ecfdf5" } : bhakootPts === 7 || boy11th.isStrong || girl11th.isStrong ? { badge: "क्रमिक व स्थिर उन्नति", color: "#b45309", bg: "#fffbeb" } : { badge: "नियोजित प्रबंधन आवश्यक", color: "#be123c", bg: "#fff1f2" };
  const qa2Answer = `भकूट कूट (${bhakootPts}/7), वर के द्वितीयेश ${boy2nd.lordHi} (${boy2nd.lordPlanet ? formatHindiHousePhrase(boy2nd.lordPlanet.houseInLagna) : "शुभ"}) व एकादशेश ${boy11th.lordHi} तथा वधू के द्वितीयेश ${girl2nd.lordHi} व एकादशेश ${girl11th.lordHi} के अनुसार ${bhakootPts === 7 ? "विवाह के पश्चात् संयुक्त आय, करियर स्थायित्व और बचत-संपत्ति में स्पष्ट वृद्धि होगी। दोनों के सहयोग से आर्थिक लक्ष्य आसानी से पूर्ण होंगे।" : "धन-संचय व निवेश में पारदर्शी संयुक्त योजना बनाना आवश्यक रहेगा; भकूट परिहार/लक्ष्मीनारायण पूजन से आर्थिक स्थिरता दृढ़ होगी।"}`;
  const qa3Status = nadiPts === 8 ? { badge: "पूर्ण अनुकूल व आरोग्यप्रद", color: "#047857", bg: "#ecfdf5" } : hasNadiParihar ? { badge: "परिहार सहित संतुलित", color: "#b45309", bg: "#fffbeb" } : { badge: "नाड़ी शांति अनिवार्य", color: "#be123c", bg: "#fff1f2" };
  const qa3Answer = `नाड़ी कूट (${nadiPts}/8), महेन्द्र कूट (${mahendraIsShubh ? "शुभ/सिद्ध" : "सामान्य"}), वर पंचमेश ${boy5th.lordHi} व वधू पंचमेश ${girl5th.lordHi} तथा गुरु बल (वर: ${describePlanetStrengthPlain(boyJup, boyKundali)}, वधू: ${describePlanetStrengthPlain(girlJup, girlKundali)}) से स्पष्ट है कि ${nadiPts === 8 ? "जैविक अनुकूलता, स्वास्थ्य रक्षा एवं स्वस्थ-बुद्धिमान संतान सुख के श्रेष्ठ योग बने हुए हैं।" : hasNadiParihar ? "नाड़ी परिहार उपलब्ध होने से स्वास्थ्य व संतान पक्ष सुरक्षित रहेगा; गुरु कृपा से सुखद संतान प्राप्ति होगी।" : "एक नाड़ी दोष होने से विवाह पूर्व महामृत्युंजय जप, स्वर्ण-नाड़ी दान और स्वास्थ्य जांच कराना अनिवार्य है।"}`;
  const qa4Status = milanResult.manglikStatus.manglikMatch ? { badge: "मांगलिक सुरक्षित व स्थायी", color: "#047857", bg: "#ecfdf5" } : { badge: "मंगल शांति अपेक्षित", color: "#be123c", bg: "#fff1f2" };
  const qa4Answer = `वर (${milanResult.manglikStatus.boySeverity}) एवं वधू (${milanResult.manglikStatus.girlSeverity}) के साथ वर सप्तमेश ${boy7th.label}, वधू सप्तमेश ${girl7th.label} तथा नवांश लग्न (${boyD9.rashiName.split(" ")[0]} व ${girlD9.rashiName.split(" ")[0]} — ${d9Friendship.relation.split("(")[0].trim()}) के परीक्षण से ${milanResult.manglikStatus.manglikMatch ? "मांगलिक दोष की कोई बाधा नहीं है (परिहार सिद्ध/दोष-मुक्त) तथा दीर्घकालिक वैवाहिक स्थायित्व सुदृढ़ है।" : "एकपक्षीय सक्रिय मंगल हेतु विवाह पूर्व कुंभ/पीपल विवाह व मंगल शांति कराने के पश्चात् वैवाहिक स्थायित्व सुरक्षित होगा।"}`;
  const qa5Status = lagnaFriendship.score >= 1 && (boy4th.isStrong || girl4th.isStrong) ? { badge: "मधुर व सम्मानजनक संबंध", color: "#047857", bg: "#ecfdf5" } : lagnaFriendship.score >= 0 || maitriPts >= 3 ? { badge: "संतुलित पारिवारिक तालमेल", color: "#b45309", bg: "#fffbeb" } : { badge: "संवेदनशील संवाद अपेक्षित", color: "#be123c", bg: "#fff1f2" };
  const qa5Answer = `वर लग्नेश ${boyKundali.panchang.lagnaLord} व वधू लग्नेश ${girlKundali.panchang.lagnaLord} (${lagnaFriendship.relation.split("(")[0].trim()}), चतुर्थ भाव स्वामी (${boy4th.lordHi}/${girl4th.lordHi}) एवं द्वितीय भाव कुटुम्ब योग के अनुसार ${lagnaFriendship.score >= 1 ? "ससुराल पक्ष व दोनों परिवारों में परस्पर सम्मान, आत्मीयता और सुखद पारिवारिक सहयोग बना रहेगा।" : "दोनों परिवारों की परंपरा व स्वभाव में हल्का अंतर रह सकता है; मधुर वाणी, बड़ों के आदर और स्पष्ट संवाद से पारिवारिक सौहार्द सदैव बना रहेगा।"}`;
  const qa6Status = { badge: dashaTimingSummary.windowText, color: "#047857", bg: "#ecfdf5" };
  const qa6Answer = dashaTimingSummary.detailText;
  const directQaCards = [
    { q: "प्रश्न 1: आपसी तालमेल और मानसिक समझ कैसी रहेगी?", status: qa1Status, a: qa1Answer },
    { q: "प्रश्न 2: करियर और आर्थिक भाग्योदय कैसा रहेगा?", status: qa2Status, a: qa2Answer },
    { q: "प्रश्न 3: संतान सुख और स्वास्थ्य अनुकूलता कैसी है?", status: qa3Status, a: qa3Answer },
    { q: "प्रश्न 4: मांगलिक स्थिति और वैवाहिक स्थायित्व कैसा है?", status: qa4Status, a: qa4Answer },
    { q: "प्रश्न 5: ससुराल व पारिवारिक संबंध कैसे रहेंगे?", status: qa5Status, a: qa5Answer },
    { q: "प्रश्न 6: विवाह के बाद सबसे शुभ समय कब शुरू होगा?", status: qa6Status, a: qa6Answer }
  ];
  const qaCardsHtml = directQaCards.map(
    (card) => `
      <div style="background: #fffdf9; border: 1.4px solid #d97706; border-radius: 6px; padding: 6px 10px 7.5px 10px; margin-bottom: 6.5px;">
        <table style="width: 100%; table-layout: fixed; border-collapse: collapse; margin-bottom: 3px;">
          <tr>
            <td style="width: 67%; font-size: 9px; font-weight: 900; color: #7c2d12; vertical-align: middle;">${escapeHtml(card.q)}</td>
            <td style="width: 33%; text-align: right; vertical-align: middle;">
              <span class="milan-status-pill" style="display: inline-flex; align-items: center; justify-content: center; line-height: 1.1; vertical-align: middle; text-align: center; background: ${card.status.bg}; border: 1px solid ${card.status.color}; color: ${card.status.color}; border-radius: 4px; padding: 3px 10px 5px 10px; font-size: 7.7px; font-weight: 800; box-sizing: border-box;">${escapeHtml(card.status.badge)}</span>
            </td>
          </tr>
        </table>
        <div style="font-size: 8.2px; color: #1e293b; line-height: 1.42;">${escapeHtml(card.a)}</div>
      </div>
    `
  ).join("");
  const page7Html = `
    ${buildFormalVedicHeader("वर-वधू के 6 प्रमुख वैवाहिक सवालों के सीधे, सरल एवं शास्त्रोक्त जवाब", "पृष्ठ 7 : वैवाहिक प्रश्नोत्तरी (Q&A)", coupleHeaderLabel, true)}

    ${buildSectionHeading("16. वर-वधू के 6 प्रमुख वैवाहिक सवालों के सीधे जवाब (Direct Marriage Q&A)", "कुंडली व दशा आधारित सटीक उत्तर")}
    <div style="margin-bottom: 10px;">
      ${qaCardsHtml}
    </div>

    <div style="background: linear-gradient(90deg, #fff6e0 0%, #fde8bf 100%); border: 2px double #b45309; border-radius: 6px; padding: 7px 12px 9px 12px; text-align: center;">
      <div style="font-size: 10px; font-weight: 900; color: #7c2d12; margin-bottom: 2.5px;">
        ॥ शुभं भवतु ॥ &bull; ${escapeHtml(BRAND_PDF_CONFIG.appName)} &bull; ${escapeHtml(BRAND_PDF_CONFIG.guideName)}
      </div>
      <div style="font-size: 8.2px; color: #1e293b; line-height: 1.38; font-weight: 600;">
        शुद्ध विवाह मुहूर्त निर्धारण, कुम्भ/विष्णु विवाह, नाड़ी-भकूट शांति अनुष्ठान व वैदिक विवाह संस्कार हेतु संपर्क करें — स्थान: ${escapeHtml(BRAND_PDF_CONFIG.guideAddress)}
      </div>
      <div style="font-size: 9px; font-weight: 900; color: #047857; margin-top: 2.5px;">
        संपर्क / WhatsApp: ${escapeHtml(BRAND_PDF_CONFIG.contactPhone)} &bull; वेबसाइट: ${escapeHtml(BRAND_PDF_CONFIG.websiteFull)} &bull; Email: ${escapeHtml(BRAND_PDF_CONFIG.email)}
      </div>
    </div>
  `;
  return [page1Html, page2Html, page3Html, page4Html, page5Html, page6Html, page7Html];
}
let pdfLibsPromise = null;
function loadExternalScript(src, timeoutMs = 5e3) {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[src="${src}"]`);
    if (existing) {
      if (existing.__loaded) {
        resolve();
        return;
      }
      if (existing.__failed) {
        existing.remove();
      } else {
        const timer2 = window.setTimeout(() => {
          reject(new Error(`Timeout loading ${src}`));
        }, timeoutMs);
        existing.addEventListener(
          "load",
          () => {
            window.clearTimeout(timer2);
            resolve();
          },
          { once: true }
        );
        existing.addEventListener(
          "error",
          () => {
            window.clearTimeout(timer2);
            reject(new Error(`Failed to load ${src}`));
          },
          { once: true }
        );
        return;
      }
    }
    const s = document.createElement("script");
    s.src = src;
    s.async = true;
    const timer = window.setTimeout(() => {
      s.__failed = true;
      s.remove();
      reject(new Error(`Timeout loading ${src}`));
    }, timeoutMs);
    s.onload = () => {
      window.clearTimeout(timer);
      s.__loaded = true;
      resolve();
    };
    s.onerror = () => {
      window.clearTimeout(timer);
      s.__failed = true;
      s.remove();
      reject(new Error(`Failed to load ${src}`));
    };
    document.head.appendChild(s);
  });
}
async function ensurePdfLibrariesLoaded() {
  const win = window;
  if ((win.jspdf?.jsPDF || win.jsPDF) && win.html2canvas) {
    return {
      jsPDF: win.jspdf?.jsPDF || win.jsPDF,
      html2canvas: win.html2canvas
    };
  }
  if (!pdfLibsPromise) {
    pdfLibsPromise = (async () => {
      try {
        try {
          const [jspdfMod, html2canvasMod] = await Promise.all([
            __vitePreload(() => import("./vendor-pdf-CpPyS1re.js").then((n) => n.j), true ? [] : void 0),
            __vitePreload(() => import("./vendor-pdf-CpPyS1re.js").then((n) => n.h), true ? [] : void 0)
          ]);
          const jsPDFCtor = jspdfMod?.jsPDF || jspdfMod?.default?.jsPDF || jspdfMod?.default;
          const html2canvasFn = html2canvasMod?.default || html2canvasMod;
          if (typeof jsPDFCtor === "function" && typeof html2canvasFn === "function") {
            return { jsPDF: jsPDFCtor, html2canvas: html2canvasFn };
          }
        } catch {
        }
        const cdnPairs = [
          [
            "https://cdn.jsdelivr.net/npm/jspdf@2.5.2/dist/jspdf.umd.min.js",
            "https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js"
          ],
          [
            "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js",
            "https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"
          ],
          [
            "https://unpkg.com/jspdf@2.5.2/dist/jspdf.umd.min.js",
            "https://unpkg.com/html2canvas@1.4.1/dist/html2canvas.min.js"
          ]
        ];
        for (const [jspdfUrl, h2cUrl] of cdnPairs) {
          try {
            const tasks = [];
            if (!(win.jspdf?.jsPDF || win.jsPDF)) {
              tasks.push(loadExternalScript(jspdfUrl));
            }
            if (!win.html2canvas) {
              tasks.push(loadExternalScript(h2cUrl));
            }
            if (tasks.length > 0) {
              await Promise.all(tasks);
            }
            const jsPDFCtor = win.jspdf?.jsPDF || win.jsPDF;
            const html2canvasFn = win.html2canvas;
            if (typeof jsPDFCtor === "function" && typeof html2canvasFn === "function") {
              return { jsPDF: jsPDFCtor, html2canvas: html2canvasFn };
            }
          } catch {
          }
        }
        throw new Error("PDF libraries did not initialize");
      } catch (err) {
        pdfLibsPromise = null;
        throw err;
      }
    })();
  }
  return pdfLibsPromise;
}
const BRAND_PDF_CONFIG = {
  appName: "पण्डित जी ऑनलाइन (Pandit Ji Online)",
  guideTitle: "मुख्य ज्योतिषाचार्य एवं संस्थापक:",
  guideName: "आचार्य पण्डित शशांक शर्मा (वैदिक पुरोहित एवं ज्योतिषाचार्य)",
  guideAddress: "रुद्रपुर, ऊधम सिंह नगर, उत्तराखण्ड (भारत)",
  contactPhone: "+91 7017279043",
  website: "www.panditjionline.online",
  websiteFull: "https://www.panditjionline.online",
  email: "internetwebhelp24@gmail.com"
};
function escapeHtml(text) {
  return String(text ?? "").normalize("NFC").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
const DEVANAGARI_TO_ASCII_MAP = {
  "अ": "a",
  "आ": "aa",
  "इ": "i",
  "ई": "ee",
  "उ": "u",
  "ऊ": "oo",
  "ऋ": "ri",
  "ए": "e",
  "ऐ": "ai",
  "ओ": "o",
  "औ": "au",
  "क": "k",
  "ख": "kh",
  "ग": "g",
  "घ": "gh",
  "च": "ch",
  "छ": "chh",
  "ज": "j",
  "झ": "jh",
  "ट": "t",
  "ठ": "th",
  "ड": "d",
  "ढ": "dh",
  "ण": "n",
  "त": "t",
  "थ": "th",
  "द": "d",
  "ध": "dh",
  "न": "n",
  "प": "p",
  "फ": "ph",
  "ब": "b",
  "भ": "bh",
  "म": "m",
  "य": "y",
  "र": "r",
  "ल": "l",
  "व": "v",
  "श": "sh",
  "ष": "sh",
  "स": "s",
  "ह": "h",
  "ा": "a",
  "ि": "i",
  "ी": "ee",
  "ु": "u",
  "ू": "oo",
  "ृ": "ri",
  "े": "e",
  "ै": "ai",
  "ो": "o",
  "ौ": "au",
  "ं": "n",
  "ँ": "n",
  "ः": "h",
  "्": "",
  "०": "0",
  "१": "1",
  "२": "2",
  "३": "3",
  "४": "4",
  "५": "5",
  "६": "6",
  "७": "7",
  "८": "8",
  "९": "9"
};
function sanitizeFileName(raw) {
  const input = String(raw || "Yajman").trim();
  let romanized = "";
  for (const ch of input) {
    if (DEVANAGARI_TO_ASCII_MAP[ch] !== void 0) {
      romanized += DEVANAGARI_TO_ASCII_MAP[ch];
    } else if (/[A-Za-z0-9_.-]/.test(ch)) {
      romanized += ch;
    } else if (/\s/.test(ch)) {
      romanized += "_";
    }
  }
  const cleaned = romanized.replace(/_+/g, "_").replace(/^_+|_+$/g, "");
  return cleaned || "Yajman";
}
const BHAVA_NAMES = [
  { name: "प्रथम (तनु/लग्न भाव)", karaka: "सूर्य (देह, व्यक्तित्व, आयु, यश)" },
  { name: "द्वितीय (धन/कुटुम्ब भाव)", karaka: "गुरु (संचित धन, वाणी, परिवार)" },
  { name: "तृतीय (सहज/पराक्रम भाव)", karaka: "मंगल (साहस, छोटे भाई-बहन, पुरुषार्थ)" },
  { name: "चतुर्थ (सुख/मातृ भाव)", karaka: "चन्द्र/बुध (माता, भूमि, भवन, वाहन)" },
  { name: "पंचम (संतान/विद्या भाव)", karaka: "गुरु (शिक्षा, बुद्धि, संतान, पूर्वपुण्य)" },
  { name: "षष्ठ (रिपु/रोग भाव)", karaka: "मंगल/शनि (रोग, ऋण, शत्रु, प्रतिस्पर्धा)" },
  { name: "सप्तम (जाया/विवाह भाव)", karaka: "शुक्र (जीवनसाथी, वैवाहिक सुख, व्यापार)" },
  { name: "अष्टम (आयु/मृत्यु भाव)", karaka: "शनि (दीर्घायु, गुप्त विद्या, आकस्मिक घटना)" },
  { name: "नवम (भाग्य/धर्म भाव)", karaka: "गुरु/सूर्य (भाग्य, धर्म, गुरु, तीर्थयात्रा)" },
  { name: "दशम (कर्म/राज्य भाव)", karaka: "सूर्य/बुध/गुरु/शनि (आजीविका, पद-प्रतिष्ठा, पिता)" },
  { name: "एकादश (लाभ/आय भाव)", karaka: "गुरु (आय, मनोकामना पूर्ति, ज्येष्ठ भ्राता)" },
  { name: "द्वादश (व्यय/मोक्ष भाव)", karaka: "शनि/केतु (व्यय, विदेश यात्रा, मोक्ष, शैया सुख)" }
];
const RASHI_LORDS_BY_NUM = {
  1: "मंगल",
  2: "शुक्र",
  3: "बुध",
  4: "चन्द्र",
  5: "सूर्य",
  6: "बुध",
  7: "शुक्र",
  8: "मंगल",
  9: "गुरु",
  10: "शनि",
  11: "शनि",
  12: "गुरु"
};
function formatDegToDMS(deg) {
  const norm = (deg % 30 + 30) % 30;
  const d = Math.floor(norm);
  const mFloat = (norm - d) * 60;
  const m = Math.floor(mFloat);
  const s = Math.round((mFloat - m) * 60);
  return `${String(d).padStart(2, "0")}° ${String(m).padStart(2, "0")}′ ${String(Math.min(59, s)).padStart(2, "0")}″`;
}
function computeBhavaSphutTable(report) {
  const realCusps = report.phase1Astronomy?.sripatiBhavas;
  if (realCusps && realCusps.length === 12) {
    return realCusps.map((cusp, idx) => {
      const meta = BHAVA_NAMES[idx] || { name: `भाव ${cusp.houseNumber}`, karaka: "सामान्य" };
      const occPlanets = report.planets.filter(
        (p) => cusp.occupantIds.includes(p.id)
      );
      const planetStr = occPlanets.length > 0 ? occPlanets.map((p) => `${p.hindiName} (${p.degInt}°)`).join(", ") : "— (भाव रिक्त)";
      return {
        houseNumber: cusp.houseNumber,
        bhavaName: meta.name,
        significator: meta.karaka,
        rashiName: `${cusp.madhyaRashiNameHi} (${cusp.madhyaRashiNumber})`,
        rashiLord: RASHI_LORDS_BY_NUM[cusp.madhyaRashiNumber] || "गुरु",
        madhyaDMS: cusp.madhyaDMS,
        sandhiStartDMS: cusp.sandhiStartDMS,
        sandhiEndDMS: cusp.sandhiEndDMS,
        planets: planetStr
      };
    });
  }
  const degMatch = report.panchang.lagnaDegreeDMS.match(/(\d+)°\s*(\d+)/);
  const baseDeg = degMatch ? parseInt(degMatch[1], 10) + parseInt(degMatch[2], 10) / 60 : report.panchang.lagnaDegInt || 15.25;
  return report.lagnaChart.map((house, idx) => {
    const meta = BHAVA_NAMES[idx] || { name: `भाव ${house.houseNumber}`, karaka: "सामान्य" };
    const madhyaDeg = (baseDeg % 30 + 30) % 30;
    const startDeg = ((madhyaDeg - 15) % 30 + 30) % 30;
    const endDeg = ((madhyaDeg + 15) % 30 + 30) % 30;
    const planetStr = house.planets && house.planets.length > 0 ? house.planets.map((p) => `${p.hindiName} (${p.degInt}°)`).join(", ") : "— (भाव रिक्त)";
    return {
      houseNumber: house.houseNumber,
      bhavaName: meta.name,
      significator: meta.karaka,
      rashiName: `${house.rashiName} (${house.rashiNumber})`,
      rashiLord: RASHI_LORDS_BY_NUM[house.rashiNumber] || "गुरु",
      madhyaDMS: formatDegToDMS(madhyaDeg),
      sandhiStartDMS: formatDegToDMS(startDeg),
      sandhiEndDMS: formatDegToDMS(endDeg),
      planets: planetStr
    };
  });
}
function computeShadbalaSummary(planets, shadbalaReport) {
  if (shadbalaReport) {
    return shadbalaReport.planets.map((detail) => {
      const pMatch = planets.find((p) => p.id === detail.id);
      let grade = "बली (Strong)";
      if (detail.gradeHi.includes("अति बली")) grade = "अति बली (Exalted/Strong)";
      else if (detail.gradeHi.includes("बली")) grade = "बली (Strong)";
      else if (detail.gradeHi.includes("मध्यम")) grade = "मध्यम (Moderate)";
      else grade = "निर्बल (Needs Remedy)";
      return {
        planet: pMatch?.hindiName || detail.hindiName,
        englishName: detail.englishName,
        sthanaBala: Math.round(detail.sthanaBala.total),
        digBala: Math.round(detail.digBala),
        cheshtaBala: Math.round(detail.cheshtaBala),
        naisargikaBala: Math.round(detail.naisargikaBala),
        kalaBala: Math.round(detail.kalaBala.total),
        drikBala: Math.round(detail.drikBala),
        totalVirupas: Math.round(detail.totalVirupas),
        totalRupas: `${detail.totalRupas.toFixed(2)} रूप`,
        requiredRupas: `${detail.requiredRupas.toFixed(2)} रूप`,
        strengthPct: Math.min(100, detail.strengthPct),
        grade,
        remedyHint: detail.remedyHintHi
      };
    });
  }
  const naisargikaMap = {
    सूर्य: 60,
    चंद्र: 51.4,
    चन्द्र: 51.4,
    शुक्र: 42.9,
    गुरु: 34.3,
    बुध: 25.7,
    मंगल: 17.1,
    शनि: 8.6,
    राहु: 30,
    केतु: 30
  };
  const requiredRupasMap = {
    सूर्य: "6.50 रूप",
    चंद्र: "6.00 रूप",
    चन्द्र: "6.00 रूप",
    मंगल: "5.00 रूप",
    बुध: "7.00 रूप",
    गुरु: "6.50 रूप",
    शुक्र: "5.50 रूप",
    शनि: "5.00 रूप",
    राहु: "5.00 रूप",
    केतु: "5.00 रूप"
  };
  const digbalaIdealHouse = {
    गुरु: 1,
    बुध: 1,
    सूर्य: 10,
    मंगल: 10,
    शनि: 7,
    चंद्र: 4,
    चन्द्र: 4,
    शुक्र: 4,
    राहु: 10,
    केतु: 4
  };
  return planets.map((p) => {
    let sthana = 135;
    if (p.dignity.includes("उच्च")) sthana = 195;
    else if (p.dignity.includes("स्वगृही")) sthana = 176;
    else if (p.dignity.includes("मित्र")) sthana = 154;
    else if (p.dignity.includes("सम")) sthana = 132;
    else if (p.dignity.includes("शत्रु")) sthana = 108;
    else if (p.dignity.includes("नीच")) sthana = 86;
    const idealH = digbalaIdealHouse[p.hindiName] || 1;
    const houseDiff = Math.min(
      Math.abs(p.houseInLagna - idealH),
      12 - Math.abs(p.houseInLagna - idealH)
    );
    const digBala = Math.round(60 - houseDiff * 8.5);
    const cheshtaBala = p.isRetrograde ? 54 : p.isCombust ? 22 : 42;
    const naisargika = naisargikaMap[p.hindiName] || 30;
    const kalaBala = 92 + p.pada * 6;
    const drikBala = [1, 4, 5, 7, 9, 10, 11].includes(p.houseInLagna) ? 24 : 14;
    const totalVirupas = Math.round(sthana + digBala + cheshtaBala + naisargika + kalaBala + drikBala);
    const rupas = (totalVirupas / 60).toFixed(2);
    const pct = Math.min(99, Math.max(42, Math.round(totalVirupas / 440 * 100)));
    let grade = "बली (Strong)";
    let remedyHint = "शुभ फलप्रद स्थिति — नित्य इष्ट स्मरण पर्याप्त";
    if (pct >= 84) {
      grade = "अति बली (Exalted/Strong)";
      remedyHint = "पूर्ण राजयोगकारी बल — श्रेष्ठ नेतृत्व एवं उन्नति";
    } else if (pct >= 68) {
      grade = "बली (Strong)";
      remedyHint = "अनुकूल ग्रह बल — कार्यसिद्धि एवं स्थिर प्रगति";
    } else if (pct >= 55) {
      grade = "मध्यम (Moderate)";
      remedyHint = `${p.hindiName} के बीज मंत्र का नित्य १०८ जप शुभदायी`;
    } else {
      grade = "निर्बल (Needs Remedy)";
      remedyHint = `${p.hindiName} शांति दान एवं वैदिक जप अनुष्ठान आवश्यक`;
    }
    return {
      planet: p.hindiName,
      englishName: p.name,
      sthanaBala: sthana,
      digBala,
      cheshtaBala,
      naisargikaBala: Math.round(naisargika),
      kalaBala,
      drikBala,
      totalVirupas,
      totalRupas: `${rupas} रूप`,
      requiredRupas: requiredRupasMap[p.hindiName] || "5.50 रूप",
      strengthPct: pct,
      grade,
      remedyHint
    };
  });
}
function getLagnaGemstoneAndRudraksha(report) {
  const lagna = report.panchang.lagnaName.split(" ")[0];
  const lucky = report.lucky;
  const mapByLagna = {
    मेष: {
      jeevanRatna: "मूंगा (Red Coral) — लग्नेश मंगल हेतु",
      bhagyaRatna: "पुखराज (Yellow Sapphire) — भाग्येश गुरु हेतु",
      ishtaRatna: "माणिक्य (Ruby) — पंचमेश सूर्य हेतु",
      avoidStones: "नीलम, पन्ना एवं हीरा बिना परामर्श न पहनें",
      primaryRudraksha: "३ मुखी रुद्राक्ष (अग्नि देव स्वरूप — मंगल बलवर्धक)",
      secondaryRudraksha: "५ मुखी + १ मुखी रुद्राक्ष (गुरु एवं सूर्य कृपा हेतु)",
      rudrakshaMantra: "ॐ क्लीं नमः ॥ ॐ अं अङ्गारकाय नमः ॥",
      rudrakshaBenefits: "आत्मविश्वास, भूमि-भवन लाभ, रक्तचाप संतुलन एवं मंगल दोष शांति।"
    },
    वृषभ: {
      jeevanRatna: "हीरा / ओपल (Diamond / White Fire Opal) — लग्नेश शुक्र हेतु",
      bhagyaRatna: "नीलम (Blue Sapphire) — भाग्येश एवं कर्मेश शनि हेतु",
      ishtaRatna: "पन्ना (Emerald) — पंचमेश बुध हेतु",
      avoidStones: "पुखराज, मूंगा एवं मोती धारण न करें",
      primaryRudraksha: "६ मुखी रुद्राक्ष (भगवान कार्तिकेय एवं शुक्र कृपा हेतु)",
      secondaryRudraksha: "७ मुखी + ४ मुखी रुद्राक्ष (लक्ष्मी-शनि एवं बुध बल हेतु)",
      rudrakshaMantra: "ॐ ह्रीं हुं नमः ॥ ॐ शुं शुक्राय नमः ॥",
      rudrakshaBenefits: "वैवाहिक सुख, ऐश्वर्य, व्यापारिक उन्नति एवं कला/धन वृद्धि।"
    },
    मिथुन: {
      jeevanRatna: "पन्ना (Natural Emerald) — लग्नेश बुध हेतु",
      bhagyaRatna: "नीलम (Blue Sapphire) — भाग्येश शनि हेतु",
      ishtaRatna: "हीरा / ओपल (Diamond / Opal) — पंचमेश शुक्र हेतु",
      avoidStones: "मूंगा, माणिक्य एवं पुखराज से परहेज करें",
      primaryRudraksha: "४ मुखी रुद्राक्ष (ब्रह्मा देव स्वरूप — बुध प्रज्ञा वर्धक)",
      secondaryRudraksha: "६ मुखी + गणेश रुद्राक्ष (विद्या, वाणी एवं व्यापार सिद्धि)",
      rudrakshaMantra: "ॐ ह्रीं नमः ॥ ॐ बुं बुधाय नमः ॥",
      rudrakshaBenefits: "तीव्र बुद्धि, वाणी प्रभाव, व्यापारिक निर्णय क्षमता एवं नसों की मजबूती।"
    },
    कर्क: {
      jeevanRatna: "सच्चा मोती (Natural South Sea Pearl) — लग्नेश चन्द्र हेतु",
      bhagyaRatna: "पुखराज (Yellow Sapphire) — भाग्येश गुरु हेतु",
      ishtaRatna: "मूंगा (Red Coral) — दशमेश/पंचमेश योगकारक मंगल हेतु",
      avoidStones: "नीलम, हीरा एवं पन्ना धारण न करें",
      primaryRudraksha: "२ मुखी रुद्राक्ष (अर्धनारीश्वर स्वरूप — चन्द्र मानसिक शांति हेतु)",
      secondaryRudraksha: "३ मुखी + ५ मुखी रुद्राक्ष (योगकारक मंगल एवं गुरु बल हेतु)",
      rudrakshaMantra: "ॐ नमः ॥ ॐ सों सोमाय नमः ॥",
      rudrakshaBenefits: "मानसिक शांति, पारिवारिक सामंजस्य, राज्यकृपा एवं अचल संपत्ति लाभ।"
    },
    सिंह: {
      jeevanRatna: "माणिक्य (Burmese Ruby) — लग्नेश सूर्य हेतु",
      bhagyaRatna: "मूंगा (Red Coral) — भाग्येश व चतुर्थेश योगकारक मंगल हेतु",
      ishtaRatna: "पुखराज (Yellow Sapphire) — पंचमेश गुरु हेतु",
      avoidStones: "नीलम एवं हीरा कभी धारण न करें",
      primaryRudraksha: "१ मुखी अथवा १२ मुखी रुद्राक्ष (भगवान सूर्य एवं शिव तेज हेतु)",
      secondaryRudraksha: "३ मुखी + ५ मुखी रुद्राक्ष (मंगल-गुरु राजयोग बल हेतु)",
      rudrakshaMantra: "ॐ ह्रीं नमः ॥ ॐ घृणि सूर्याय नमः ॥",
      rudrakshaBenefits: "प्रशासनिक तेज, राजकीय सम्मान, उच्च पद प्राप्ति एवं हृदय/नेत्र बल।"
    },
    कन्या: {
      jeevanRatna: "पन्ना (Emerald) — लग्नेश एवं कर्मेश बुध हेतु",
      bhagyaRatna: "हीरा / ओपल (Diamond / Opal) — भाग्येश शुक्र हेतु",
      ishtaRatna: "नीलम (Blue Sapphire) — पंचमेश शनि हेतु",
      avoidStones: "मूंगा, मोती एवं माणिक्य धारण न करें",
      primaryRudraksha: "४ मुखी रुद्राक्ष (बुध-ब्रह्मा कृपा एवं बौद्धिक तेज हेतु)",
      secondaryRudraksha: "६ मुखी + ७ मुखी रुद्राक्ष (भाग्येश शुक्र एवं पंचमेश शनि हेतु)",
      rudrakshaMantra: "ॐ ह्रीं नमः ॥ ॐ बुं बुधाय नमः ॥",
      rudrakshaBenefits: "वाणिज्य-व्यापार में अपार लाभ, शिक्षा में श्रेष्ठता एवं धन संचय।"
    },
    तुला: {
      jeevanRatna: "हीरा / सफेद पुखराज / ओपल — लग्नेश शुक्र हेतु",
      bhagyaRatna: "पन्ना (Emerald) — भाग्येश बुध हेतु",
      ishtaRatna: "नीलम (Blue Sapphire) — चतुर्थेश/पंचमेश योगकारक शनि हेतु",
      avoidStones: "माणिक्य, मूंगा एवं पुखराज से परहेज करें",
      primaryRudraksha: "६ मुखी रुद्राक्ष (शुक्र एवं कार्तिकेय कृपा हेतु)",
      secondaryRudraksha: "७ मुखी + ४ मुखी रुद्राक्ष (योगकारक शनि एवं भाग्येश बुध हेतु)",
      rudrakshaMantra: "ॐ ह्रीं हुं नमः ॥ ॐ शुं शुक्राय नमः ॥",
      rudrakshaBenefits: "दाम्पत्य सुख, भौतिक वैभव, न्यायिक विजय एवं शनि-शुक्र राजयोग।"
    },
    वृश्चिक: {
      jeevanRatna: "मूंगा (Red Coral) — लग्नेश मंगल हेतु",
      bhagyaRatna: "सच्चा मोती (Natural Pearl) — भाग्येश चन्द्र हेतु",
      ishtaRatna: "पुखराज (Yellow Sapphire) एवं माणिक्य (Ruby) — गुरु व सूर्य हेतु",
      avoidStones: "पन्ना, हीरा एवं नीलम धारण न करें",
      primaryRudraksha: "३ मुखी रुद्राक्ष (मंगल तेज एवं साहस वृद्धि हेतु)",
      secondaryRudraksha: "२ मुखी + ५ मुखी रुद्राक्ष (भाग्येश चन्द्र एवं धनेश गुरु हेतु)",
      rudrakshaMantra: "ॐ क्लीं नमः ॥ ॐ अं अङ्गारकाय नमः ॥",
      rudrakshaBenefits: "शत्रु विजय, आकस्मिक धन लाभ, साहस एवं गूढ़ विद्या में सिद्धि।"
    },
    धनु: {
      jeevanRatna: "पुखराज (Ceylon Yellow Sapphire) — लग्नेश गुरु हेतु",
      bhagyaRatna: "माणिक्य (Ruby) — भाग्येश सूर्य हेतु",
      ishtaRatna: "मूंगा (Red Coral) — पंचमेश मंगल हेतु",
      avoidStones: "नीलम एवं हीरा धारण न करें",
      primaryRudraksha: "५ मुखी रुद्राक्ष (कालाग्नि रुद्र स्वरूप — बृहस्पति कृपा हेतु)",
      secondaryRudraksha: "१२ मुखी + ३ मुखी रुद्राक्ष (सूर्य एवं मंगल राजयोग बल हेतु)",
      rudrakshaMantra: "ॐ ह्रीं नमः ॥ ॐ बृं बृहस्पतये नमः ॥",
      rudrakshaBenefits: "आध्यात्मिक तेज, उच्च शिक्षा, राज्य सम्मान एवं संतान सुख।"
    },
    मकर: {
      jeevanRatna: "नीलम (Ceylon Blue Sapphire) — लग्नेश शनि हेतु",
      bhagyaRatna: "पन्ना (Emerald) — भाग्येश बुध हेतु",
      ishtaRatna: "हीरा / ओपल (Diamond / Opal) — योगकारक शुक्र हेतु",
      avoidStones: "मूंगा, मोती एवं माणिक्य धारण न करें",
      primaryRudraksha: "७ मुखी रुद्राक्ष (महालक्ष्मी एवं शनि कृपा हेतु)",
      secondaryRudraksha: "६ मुखी + ४ मुखी रुद्राक्ष (योगकारक शुक्र एवं भाग्येश बुध हेतु)",
      rudrakshaMantra: "ॐ हुं नमः ॥ ॐ शं शनैश्चराय नमः ॥",
      rudrakshaBenefits: "स्थायी संपत्ति, उद्योग-व्यापार में सफलता, शनि पीड़ा मुक्ति एवं दीर्घायु।"
    },
    कुंभ: {
      jeevanRatna: "नीलम (Blue Sapphire) — लग्नेश शनि हेतु",
      bhagyaRatna: "हीरा / ओपल (Diamond / Opal) — चतुर्थेश/भाग्येश योगकारक शुक्र हेतु",
      ishtaRatna: "पन्ना (Emerald) — पंचमेश बुध हेतु",
      avoidStones: "मूंगा, मोती एवं पुखराज बिना परामर्श न पहनें",
      primaryRudraksha: "७ मुखी रुद्राक्ष (लग्नेश शनि एवं सप्तमातृका कृपा हेतु)",
      secondaryRudraksha: "६ मुखी + ४ मुखी रुद्राक्ष (भाग्येश शुक्र एवं पंचमेश बुध हेतु)",
      rudrakshaMantra: "ॐ हुं नमः ॥ ॐ शं शनैश्चराय नमः ॥",
      rudrakshaBenefits: "नवाचार, शोध, राजयोग प्राप्ति, आर्थिक स्थिरता एवं मानसिक एकाग्रता।"
    },
    कुम्भ: {
      jeevanRatna: "नीलम (Blue Sapphire) — लग्नेश शनि हेतु",
      bhagyaRatna: "हीरा / ओपल (Diamond / Opal) — चतुर्थेश/भाग्येश योगकारक शुक्र हेतु",
      ishtaRatna: "पन्ना (Emerald) — पंचमेश बुध हेतु",
      avoidStones: "मूंगा, मोती एवं पुखराज बिना परामर्श न पहनें",
      primaryRudraksha: "७ मुखी रुद्राक्ष (लग्नेश शनि एवं सप्तमातृका कृपा हेतु)",
      secondaryRudraksha: "६ मुखी + ४ मुखी रुद्राक्ष (भाग्येश शुक्र एवं पंचमेश बुध हेतु)",
      rudrakshaMantra: "ॐ हुं नमः ॥ ॐ शं शनैश्चराय नमः ॥",
      rudrakshaBenefits: "नवाचार, शोध, राजयोग प्राप्ति, आर्थिक स्थिरता एवं मानसिक एकाग्रता।"
    },
    मीन: {
      jeevanRatna: "पुखराज (Yellow Sapphire) — लग्नेश एवं कर्मेश गुरु हेतु",
      bhagyaRatna: "मूंगा (Red Coral) — भाग्येश व धनेश मंगल हेतु",
      ishtaRatna: "सच्चा मोती (Natural Pearl) — पंचमेश चन्द्र हेतु",
      avoidStones: "पन्ना, हीरा एवं नीलम धारण न करें",
      primaryRudraksha: "५ मुखी रुद्राक्ष (देवगुरु बृहस्पति एवं शिव कृपा हेतु)",
      secondaryRudraksha: "३ मुखी + २ मुखी रुद्राक्ष (भाग्येश मंगल एवं पंचमेश चन्द्र हेतु)",
      rudrakshaMantra: "ॐ ह्रीं नमः ॥ ॐ बृं बृहस्पतये नमः ॥",
      rudrakshaBenefits: "सुख-शांति, ज्ञान-विज्ञान, प्रचुर धन-धान्य एवं आध्यात्मिक उन्नति।"
    }
  };
  const defaults = mapByLagna[lagna] || mapByLagna["मेष"];
  return {
    jeevanRatna: defaults.jeevanRatna || lucky.ratnaName,
    bhagyaRatna: defaults.bhagyaRatna || "पुखराज (Yellow Sapphire)",
    ishtaRatna: defaults.ishtaRatna || lucky.uparatnaName,
    uparatna: lucky.uparatnaName,
    weightRatti: "५.२५ से ६.२५ रत्ती (शरीर के वजन के १०वें भाग के अनुसार)",
    metalAndFinger: lucky.ratnaMetalAndFinger,
    wearingDayAndTime: `${lucky.luckyDays} को प्रातः शुक्ल पक्ष में सूर्योदय के १ घंटे के भीतर (शुभ होरा में)`,
    pranaPratishthaMantra: lucky.beejMantra,
    avoidStones: defaults.avoidStones || "नीलम व गोमेद बिना कुंडली सूक्ष्म परीक्षण न पहनें",
    primaryRudraksha: defaults.primaryRudraksha || lucky.rudraksha,
    secondaryRudraksha: defaults.secondaryRudraksha || "३ मुखी + ७ मुखी रुद्राक्ष",
    rudrakshaMantra: defaults.rudrakshaMantra || "ॐ नमः शिवाय ॥",
    rudrakshaBenefits: defaults.rudrakshaBenefits || "नवग्रह संतुलन, आरोग्य एवं मानसिक शांति।"
  };
}
function buildNorthIndianChartSVG(houses, title, subtitle, sizePx = 200) {
  const houseCoords = {
    1: { rashiX: 50, rashiY: 42.2, pX: 50, pY: 26, maxPerLine: 2 },
    2: { rashiX: 25.75, rashiY: 19.8, pX: 25.75, pY: 10.2, maxPerLine: 2, isOuterTriangle: true },
    3: { rashiX: 19.6, rashiY: 25.75, pX: 11.2, pY: 25.75, maxPerLine: 1, isSideTriangle: true, isOuterTriangle: true },
    4: { rashiX: 42.2, rashiY: 50, pX: 25, pY: 50, maxPerLine: 2 },
    5: { rashiX: 19.6, rashiY: 74.25, pX: 11.2, pY: 74.25, maxPerLine: 1, isSideTriangle: true, isOuterTriangle: true },
    6: { rashiX: 25.75, rashiY: 80.2, pX: 25.75, pY: 89.8, maxPerLine: 2, isOuterTriangle: true },
    7: { rashiX: 50, rashiY: 57.8, pX: 50, pY: 74, maxPerLine: 2 },
    8: { rashiX: 74.25, rashiY: 80.2, pX: 74.25, pY: 89.8, maxPerLine: 2, isOuterTriangle: true },
    9: { rashiX: 80.4, rashiY: 74.25, pX: 88.8, pY: 74.25, maxPerLine: 1, isSideTriangle: true, isOuterTriangle: true },
    10: { rashiX: 57.8, rashiY: 50, pX: 75, pY: 50, maxPerLine: 2 },
    11: { rashiX: 80.4, rashiY: 25.75, pX: 88.8, pY: 25.75, maxPerLine: 1, isSideTriangle: true, isOuterTriangle: true },
    12: { rashiX: 74.25, rashiY: 19.8, pX: 74.25, pY: 10.2, maxPerLine: 2, isOuterTriangle: true }
  };
  let housesSvg = "";
  for (const h of houses) {
    const c = houseCoords[h.houseNumber];
    if (!c) continue;
    const rawPlanets = h.planets || [];
    const isCrowded = rawPlanets.length >= 3;
    const effectiveMaxPerLine = c.isSideTriangle ? rawPlanets.length >= 4 ? 2 : 1 : isCrowded ? 3 : c.maxPerLine;
    const tokens = rawPlanets.map(
      (p) => c.isSideTriangle || isCrowded ? `${p.shortHindi || p.chartLabel}` : `${p.chartLabel || p.shortHindi}`
    );
    const lines = [];
    for (let i = 0; i < tokens.length; i += effectiveMaxPerLine) {
      lines.push(tokens.slice(i, i + effectiveMaxPerLine).join(" "));
    }
    housesSvg += `
      <text x="${c.rashiX}" y="${c.rashiY}" text-anchor="middle" dominant-baseline="central" fill="#b45309" font-size="3.1" font-weight="800" font-family="monospace">${h.rashiNumber}</text>
    `;
    lines.forEach((lineText, idx) => {
      const lineSpacing = c.isSideTriangle ? lines.length >= 3 ? 2.3 : 2.7 : lines.length >= 3 ? 2.5 : 2.9;
      const yOffset = (idx - (lines.length - 1) / 2) * lineSpacing;
      const fontSize = c.isSideTriangle ? lines.length >= 3 ? "2.0" : "2.35" : c.isOuterTriangle ? tokens.length >= 3 ? "2.2" : "2.55" : tokens.length > 3 ? "2.25" : "2.65";
      housesSvg += `
        <text x="${c.pX}" y="${(c.pY + yOffset).toFixed(2)}" dy="-0.06em" text-anchor="middle" dominant-baseline="central" fill="${idx === 0 ? "#7c2d12" : "#1e293b"}" font-size="${fontSize}" font-weight="800">${escapeHtml(lineText)}</text>
      `;
    });
  }
  return `
    <div style="width: 100%; background: #fffdf9; border: 1.5px solid #b45309; border-radius: 6px; padding: 4px 7px 7px 7px; text-align: center; box-sizing: border-box;">
      <div style="font-size: 9.4px; font-weight: 800; color: #7c2d12; margin-bottom: 1.5px; line-height: 1.28;">${escapeHtml(title)}</div>
      <div style="font-size: 8px; color: #475569; margin-bottom: 5px; line-height: 1.25; font-weight: 600;">${escapeHtml(subtitle)}</div>
      <div style="width: 100%; max-width: ${sizePx}px; margin: 0 auto;">
        <svg class="vedic-chart-svg" viewBox="0 0 100 100" width="100%" height="auto" preserveAspectRatio="xMidYMid meet" style="display: block; width: 100%; height: auto; margin: 0 auto; background: #fffbeb; border: 1.5px solid #9a3412; border-radius: 4px; overflow: hidden;">
          <rect x="1.5" y="1.5" width="97" height="97" fill="none" stroke="#9a3412" stroke-width="0.8" />
          <rect x="3" y="3" width="94" height="94" fill="none" stroke="#d97706" stroke-opacity="0.38" stroke-width="0.35" />
          <line x1="1.5" y1="1.5" x2="98.5" y2="98.5" stroke="#b45309" stroke-width="0.6" />
          <line x1="98.5" y1="1.5" x2="1.5" y2="98.5" stroke="#b45309" stroke-width="0.6" />
          <polygon points="50,1.5 98.5,50 50,98.5 1.5,50" fill="none" stroke="#9a3412" stroke-width="0.7" />
          <text x="50" y="50.4" dy="-0.06em" text-anchor="middle" dominant-baseline="central" fill="#b45309" fill-opacity="0.14" font-size="5.6" font-weight="bold">ॐ</text>
          ${housesSvg}
        </svg>
      </div>
    </div>
  `;
}
function buildFormalVedicHeader(docTitle, subtitleBadge, personLabel, compact = false) {
  const realLogoSmall = `<img src="${PANDIT_AVATAR_THUMB}" alt="Pandit Ji Online" style="width: 30px; height: 30px; min-width: 30px; max-width: 30px; border-radius: 50%; object-fit: cover; border: 1.5px solid #D4AF37; background: #0F172A; display: block;" />`;
  const realLogoLarge = `<img src="${PANDIT_AVATAR_THUMB}" alt="Pandit Ji Online" style="width: 40px; height: 40px; min-width: 40px; max-width: 40px; border-radius: 50%; object-fit: cover; border: 2px solid #D4AF37; background: #0F172A; display: block; margin: 0 auto;" />`;
  if (compact) {
    return `
      <table style="width: 100%; table-layout: fixed; border-collapse: collapse; background: linear-gradient(90deg, #fff6e0 0%, #fde8bf 100%); border: 1.5px solid #b45309; border-radius: 6px; margin-bottom: 6px; box-sizing: border-box;">
        <tr>
          <td style="padding: 4px 4px 4px 8px; vertical-align: middle; width: 38px;">
            ${realLogoSmall}
          </td>
          <td style="padding: 3.5px 6px 7px 4px; vertical-align: middle; text-align: left; width: 53%;">
            <div style="font-size: 8.8px; font-weight: 800; color: #9a3412; line-height: 1.3;">॥ श्री गणेशाय नमः ॥ &bull; ${escapeHtml(BRAND_PDF_CONFIG.appName)} (${escapeHtml(subtitleBadge)})</div>
            <div style="font-size: 11px; font-weight: 900; color: #7c2d12; line-height: 1.32; margin-top: 1px;">${escapeHtml(docTitle)}</div>
          </td>
          <td style="padding: 3.5px 9px 7px 6px; vertical-align: middle; text-align: right; width: 41%;">
            <div style="font-size: 8.5px; color: #1e293b; font-weight: 700; line-height: 1.32;">${personLabel}</div>
            <div style="font-size: 7.8px; color: #78350f; margin-top: 1.5px; line-height: 1.28; font-weight: 600;">आचार्य पण्डित शशांक शर्मा &bull; ${escapeHtml(BRAND_PDF_CONFIG.contactPhone)} &bull; ${escapeHtml(BRAND_PDF_CONFIG.website)}</div>
          </td>
        </tr>
      </table>
    `;
  }
  return `
    <div style="background: linear-gradient(135deg, #fff8e6 0%, #fde7bc 100%); border: 2.5px double #b45309; border-radius: 6px; padding: 6px 10px 8px 10px; margin-bottom: 6px; text-align: center; box-sizing: border-box; width: 100%;">
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 3px;">
        <tr>
          <td style="width: 48px; vertical-align: middle; text-align: left;">${realLogoLarge}</td>
          <td style="vertical-align: middle; text-align: center;">
            <div style="font-size: 9.6px; font-weight: 800; color: #9a3412; letter-spacing: 0.3px; margin-bottom: 2px; line-height: 1.3;">
              ॥ ॐ श्री गणेशाय नमः ॥ &bull; ॥ श्री गुरुभ्यो नमः ॥ &bull; ${escapeHtml(BRAND_PDF_CONFIG.appName)}
            </div>
            <div class="milan-status-pill" style="display: inline-flex; align-items: center; justify-content: center; line-height: 1.1; vertical-align: middle; background: #7c2d12; border: 1px solid #b45309; color: #fffbeb; font-size: 8.3px; font-weight: 700; padding: 3px 10px 5px 10px; border-radius: 3px; margin-bottom: 2.5px; box-sizing: border-box;">
              ${escapeHtml(subtitleBadge)}
            </div>
            <div style="font-size: 14px; font-weight: 900; color: #7c2d12; margin-bottom: 2px; line-height: 1.28;">
              ${escapeHtml(docTitle)}
            </div>
            <div style="font-size: 9.4px; color: #1e293b; font-weight: 700; line-height: 1.32;">
              ${personLabel}
            </div>
          </td>
          <td style="width: 48px; vertical-align: middle;"></td>
        </tr>
      </table>
      <div style="border-top: 1px solid #d97706; padding-top: 3px; font-size: 8.3px; color: #334155; line-height: 1.32;">
        <b style="color: #7c2d12;">${escapeHtml(BRAND_PDF_CONFIG.guideTitle)}</b> <b style="color:#1e293b;">${escapeHtml(BRAND_PDF_CONFIG.guideName)}</b> &bull;
        <span>स्थान: ${escapeHtml(BRAND_PDF_CONFIG.guideAddress)} &bull; संपर्क/WhatsApp: <b style="color: #7c2d12;">${escapeHtml(BRAND_PDF_CONFIG.contactPhone)}</b> &bull; <b style="color:#9a3412;">${escapeHtml(BRAND_PDF_CONFIG.website)}</b></span>
      </div>
    </div>
  `;
}
function buildPageFooter(pageNum, totalPages) {
  return `
    <table style="width: 100%; table-layout: fixed; border-collapse: collapse; font-size: 8.2px; color: #334155; box-sizing: border-box; line-height: 1.32;">
      <tr>
        <td style="padding: 0 0 3px 0; text-align: left; vertical-align: middle; width: 82%; white-space: nowrap;">
          <b style="color: #7c2d12;">पण्डित जी ऑनलाइन (${escapeHtml(BRAND_PDF_CONFIG.website)})</b> &bull; आचार्य पण्डित शशांक शर्मा &bull; WhatsApp: <b style="color:#1e293b;">${escapeHtml(BRAND_PDF_CONFIG.contactPhone)}</b> &bull; ${escapeHtml(BRAND_PDF_CONFIG.email)}
        </td>
        <td style="padding: 0 0 3px 0; text-align: right; vertical-align: middle; width: 18%; color: #7c2d12; font-weight: 800; white-space: nowrap;">
          पृष्ठ ${pageNum} / ${totalPages}
        </td>
      </tr>
    </table>
  `;
}
function buildSectionHeading(title, badge) {
  return `
    <table style="width: 100%; table-layout: fixed; border-collapse: collapse; margin-bottom: 4.5px; background: linear-gradient(90deg, #fff3d6 0%, #fde9c4 100%); border-left: 4px solid #9a3412; border-top: 1px solid #d97706; border-right: 1px solid #d97706; border-bottom: 1px solid #d97706; border-radius: 4px; box-sizing: border-box;">
      <tr>
        <td style="padding: 2.5px 8px 6px 8px; font-size: 9.4px; font-weight: 800; color: #7c2d12; vertical-align: middle; text-align: left; width: ${badge ? "68%" : "100%"}; line-height: 1.3;">
          ${escapeHtml(title)}
        </td>
        ${badge ? `
        <td style="padding: 2.5px 8px 5px 8px; text-align: right; vertical-align: middle; width: 32%; white-space: nowrap;">
          <span class="milan-status-pill" style="display: inline-flex; align-items: center; justify-content: center; line-height: 1.1; vertical-align: middle; font-size: 8px; color: #7c2d12; background: #fffdf9; padding: 3px 10px 5px 10px; border-radius: 3px; border: 1px solid #b45309; white-space: nowrap; font-weight: 700; box-sizing: border-box;">
            ${escapeHtml(badge)}
          </span>
        </td>` : ""}
      </tr>
    </table>
  `;
}
const PDF_FONT_STACK = "'Noto Sans Devanagari', 'Noto Sans Bengali', 'Noto Sans Gujarati', 'Noto Sans Tamil', 'Noto Sans Telugu', 'Noto Sans Kannada', 'Noto Sans Malayalam', 'Noto Sans Gurmukhi', 'Noto Sans', 'Segoe UI', Arial, sans-serif";
function ensureIndicPdfFontsLoaded(language) {
  if (typeof document === "undefined") return;
  if (!["bn", "pa", "ta", "te", "kn", "ml", "gu"].includes(language)) return;
  const linkId = "vedic-pdf-regional-fonts";
  if (document.getElementById(linkId)) return;
  const link = document.createElement("link");
  link.id = linkId;
  link.rel = "stylesheet";
  link.href = "https://fonts.googleapis.com/css2?family=Noto+Sans+Bengali:wght@400;700&family=Noto+Sans+Gujarati:wght@400;700&family=Noto+Sans+Gurmukhi:wght@400;700&family=Noto+Sans+Tamil:wght@400;700&family=Noto+Sans+Telugu:wght@400;700&family=Noto+Sans+Kannada:wght@400;700&family=Noto+Sans+Malayalam:wght@400;700&display=swap";
  document.head.appendChild(link);
}
const CHART_PLANET_EN_TOKENS = [
  ["सू", "Su"],
  ["चं", "Mo"],
  ["मं", "Ma"],
  ["बु", "Me"],
  ["गु", "Ju"],
  ["शु", "Ve"],
  ["श", "Sa"],
  ["रा", "Ra"],
  ["के", "Ke"],
  ["च", "Mo"],
  ["(व*)", "(R)"],
  ["(अ^)", "(C)"]
];
function localizePdfDomTree(root, language) {
  if (language === "hi") return;
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const textNodes = [];
  let curr = walker.nextNode();
  while (curr) {
    textNodes.push(curr);
    curr = walker.nextNode();
  }
  for (const node of textNodes) {
    const raw = node.nodeValue || "";
    if (!raw.trim()) continue;
    if (raw.trim() === "ॐ") continue;
    const parentEl = node.parentElement;
    if (parentEl && parentEl.closest("svg.vedic-chart-svg")) {
      if (language === "en" || language === "hinglish") {
        let converted = raw;
        for (const [hiTok, enTok] of CHART_PLANET_EN_TOKENS) {
          if (converted.includes(hiTok)) {
            converted = converted.split(hiTok).join(enTok);
          }
        }
        node.nodeValue = translateVedicHindiToEnglish(converted, language);
      } else {
        node.nodeValue = translateVedicHindiToEnglish(raw, language);
      }
      continue;
    }
    node.nodeValue = translateVedicHindiToEnglish(raw, language);
  }
}
function wrapA4Page(innerHtml, pageNum, totalPages) {
  return `
    <div class="vedic-pdf-page" style="width: 794px; min-width: 794px; max-width: 794px; height: 1123px; min-height: 1123px; max-height: 1123px; background: #faf4e8; color: #1e293b; padding: 15px 18px 16px 18px; box-sizing: border-box; overflow: hidden; font-family: ${PDF_FONT_STACK}; position: relative;">
      <div class="vedic-pdf-frame" style="width: 758px; height: 1090px; max-height: 1090px; border: 2.5px double #b45309; border-radius: 8px; padding: 9px 12px 36px 12px; background: #fffdf9; box-sizing: border-box; overflow: hidden; position: relative;">
        <div class="vedic-pdf-body" style="width: 100%; height: 1036px; max-height: 1036px; box-sizing: border-box; overflow: hidden;">
          ${innerHtml}
        </div>
        <div class="vedic-pdf-footer" style="position: absolute; bottom: 6px; left: 14px; right: 14px; height: 26px; box-sizing: border-box; border-top: 1px solid #d97706; padding: 3px 2px 3px 2px; background: #fff9ee;">
          ${buildPageFooter(pageNum, totalPages)}
        </div>
      </div>
    </div>
  `;
}
async function convertSvgsToImgElements(container, ownerDoc) {
  const svgs = Array.from(container.querySelectorAll("svg"));
  if (svgs.length === 0) return;
  const loadPromises = [];
  for (const svg of svgs) {
    try {
      svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      const viewBox = svg.getAttribute("viewBox") || "0 0 100 100";
      const vbParts = viewBox.trim().split(/[\s,]+/).map(Number);
      const vbW = vbParts[2] && vbParts[2] > 0 ? vbParts[2] : 100;
      const vbH = vbParts[3] && vbParts[3] > 0 ? vbParts[3] : 100;
      const pixelW = 680;
      const pixelH = Math.round(pixelW * vbH / vbW);
      svg.setAttribute("width", String(pixelW));
      svg.setAttribute("height", String(pixelH));
      const textEls = Array.from(svg.querySelectorAll("text"));
      for (const tEl of textEls) {
        if (!tEl.getAttribute("font-family")) {
          tEl.setAttribute("font-family", "'Noto Sans Devanagari', 'Noto Sans', Arial, sans-serif");
        }
      }
      const serialized = new XMLSerializer().serializeToString(svg);
      const dataUrl = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(serialized)}`;
      const img = ownerDoc.createElement("img");
      img.width = pixelW;
      img.height = pixelH;
      img.style.cssText = "display: block !important; width: 100% !important; height: auto !important; margin: 0 auto !important; background: #fffbeb !important; border: 1.5px solid #9a3412 !important; border-radius: 4px !important; box-sizing: border-box !important;";
      const p = new Promise((resolve) => {
        const timer = setTimeout(() => resolve(), 260);
        img.onload = () => {
          clearTimeout(timer);
          resolve();
        };
        img.onerror = () => {
          clearTimeout(timer);
          resolve();
        };
      });
      img.src = dataUrl;
      loadPromises.push(p);
      svg.parentNode?.replaceChild(img, svg);
    } catch {
    }
  }
  await Promise.all(loadPromises);
}
function printDiscretePagesDirectly(pagesHtml, filename, language = "hi") {
  if (typeof document === "undefined") return;
  const existingFrame = document.getElementById("vedic-direct-print-iframe");
  if (existingFrame && existingFrame.parentNode) {
    existingFrame.parentNode.removeChild(existingFrame);
  }
  const printIframe = document.createElement("iframe");
  printIframe.id = "vedic-direct-print-iframe";
  printIframe.style.cssText = "position: fixed; right: 0; bottom: 0; width: 1px; height: 1px; border: 0; opacity: 0.01; pointer-events: none; z-index: -1;";
  document.body.appendChild(printIframe);
  const iframeDoc = printIframe.contentDocument || printIframe.contentWindow?.document;
  if (!iframeDoc) return;
  const wrappedPages = pagesHtml.map(
    (pHtml, idx) => `<div class="vedic-print-page-sheet" style="page-break-after: ${idx < pagesHtml.length - 1 ? "always" : "auto"}; break-after: ${idx < pagesHtml.length - 1 ? "page" : "auto"}; margin: 0 auto;">${wrapA4Page(
      pHtml,
      idx + 1,
      pagesHtml.length
    )}</div>`
  ).join("\n");
  iframeDoc.open();
  iframeDoc.write(`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>${escapeHtml(filename.replace(/\.pdf$/i, ""))}</title>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;600;700;800&display=swap" />
  <style>
    @page { size: A4 portrait; margin: 0; }
    html, body { margin: 0; padding: 0; background: #faf4e8; color: #1e293b; font-family: ${PDF_FONT_STACK}; -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
    .vedic-pdf-page, .vedic-pdf-page * { box-sizing: border-box !important; -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
    .vedic-pdf-page table { width: 100%; max-width: 100%; table-layout: fixed; }
    .vedic-pdf-page th, .vedic-pdf-page td { word-wrap: break-word; overflow-wrap: anywhere; vertical-align: middle; }
  </style>
</head>
<body>${wrappedPages}</body>
</html>`);
  iframeDoc.close();
  if (language !== "hi" && iframeDoc.body) {
    localizePdfDomTree(iframeDoc.body, language);
  }
  setTimeout(() => {
    try {
      printIframe.contentWindow?.focus();
      printIframe.contentWindow?.print();
    } catch {
      window.print();
    }
  }, 350);
}
function arrayBufferToBase64(buffer) {
  const bytes = new Uint8Array(buffer);
  const chunkSize = 32768;
  const chunks = [];
  for (let i = 0; i < bytes.length; i += chunkSize) {
    const slice = bytes.subarray(i, i + chunkSize);
    chunks.push(String.fromCharCode.apply(null, slice));
  }
  return btoa(chunks.join(""));
}
function showReadyPdfDownloadModal(blob, blobUrl, serverDownloadUrl, safeFilename, pagesHtml, language) {
  if (typeof document === "undefined") return;
  const existingModal = document.getElementById("vedic-pdf-ready-modal");
  if (existingModal && existingModal.parentNode) {
    existingModal.parentNode.removeChild(existingModal);
  }
  const inIframe = (() => {
    try {
      return window.self !== window.top;
    } catch {
      return true;
    }
  })();
  const trUi = (hi, en, hinglish) => {
    if (language === "hi") return hi;
    if (language === "en") return en;
    if (language === "hinglish") return hinglish;
    return translateVedicHindiToEnglish(hi, language);
  };
  const overlay = document.createElement("div");
  overlay.id = "vedic-pdf-ready-modal";
  overlay.style.cssText = "position: fixed; inset: 0; z-index: 999999; background: rgba(5, 8, 17, 0.82); backdrop-filter: blur(6px); display: flex; align-items: center; justify-content: center; padding: 16px; font-family: " + PDF_FONT_STACK + ";";
  const card = document.createElement("div");
  card.style.cssText = "width: 100%; max-width: 440px; background: linear-gradient(180deg, #fffdf9 0%, #faf4e8 100%); border: 3px double #b45309; border-radius: 20px; padding: 20px 18px; box-shadow: 0 24px 60px rgba(0,0,0,0.65); text-align: center; color: #1e293b; position: relative;";
  const closeBtn = document.createElement("button");
  closeBtn.type = "button";
  closeBtn.setAttribute("aria-label", "Close");
  closeBtn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>';
  closeBtn.style.cssText = "position: absolute; top: 10px; right: 12px; width: 30px; height: 30px; border-radius: 999px; border: 1px solid #d97706; background: #fef7e6; color: #7c2d12; display: flex; align-items: center; justify-content: center; cursor: pointer;";
  const cleanup = () => {
    if (overlay.parentNode) {
      overlay.parentNode.removeChild(overlay);
    }
    setTimeout(() => {
      URL.revokeObjectURL(blobUrl);
    }, 6e4);
  };
  closeBtn.onclick = cleanup;
  overlay.onclick = (e) => {
    if (e.target === overlay) cleanup();
  };
  const badgeEl = document.createElement("div");
  badgeEl.style.cssText = "display: inline-block; background: #fef3c7; border: 1px solid #d97706; color: #7c2d12; font-size: 11px; font-weight: 800; padding: 4px 12px; border-radius: 999px; margin-bottom: 8px;";
  badgeEl.innerText = trUi(
    `${pagesHtml.length}-पृष्ठ शाही प्रिंट-रेडी PDF तैयार है`,
    `${pagesHtml.length}-Page Royal Print-Ready PDF is Ready`,
    `${pagesHtml.length}-Page Print-Ready PDF Taiyar Hai`
  );
  const titleEl = document.createElement("h3");
  titleEl.style.cssText = "margin: 0 0 6px 0; font-size: 17px; font-weight: 900; color: #7c2d12; line-height: 1.35;";
  titleEl.innerText = trUi(
    "पण्डित जी ऑनलाइन • वैदिक महा-पत्रिका PDF",
    "Pandit Ji Online • Vedic Maha-Patrika PDF",
    "Pandit Ji Online • Vedic Maha-Patrika PDF"
  );
  const subEl = document.createElement("p");
  subEl.style.cssText = "margin: 0 0 14px 0; font-size: 12px; color: #475569; line-height: 1.45;";
  subEl.innerText = trUi(
    "आपकी PDF फाइल फोन के Downloads में सेव हो रही है। दोबारा डाउनलोड करने के लिए हरे बटन पर टैप करें या सीधे WhatsApp पर शेयर करें:",
    "Your PDF file is saving to your Downloads folder. Tap the green button to download again or share directly on WhatsApp:",
    "Aapki PDF file phone ke Downloads me save ho rahi hai. Dobara download karne ke liye green button dabayein ya WhatsApp par share karein:"
  );
  const downloadLink = document.createElement("a");
  downloadLink.href = serverDownloadUrl || blobUrl;
  if (inIframe && serverDownloadUrl) {
    downloadLink.target = "_blank";
    downloadLink.rel = "noopener noreferrer";
  }
  downloadLink.download = safeFilename;
  downloadLink.style.cssText = "display: flex; align-items: center; justify-content: center; gap: 8px; width: 100%; padding: 13px 16px; border-radius: 14px; background: linear-gradient(90deg, #059669 0%, #10b981 100%); color: #ffffff; font-weight: 900; font-size: 14px; text-decoration: none; box-shadow: 0 8px 20px rgba(5, 150, 105, 0.35); margin-bottom: 10px; box-sizing: border-box; cursor: pointer;";
  downloadLink.innerText = trUi(
    "अभी PDF फाइल डाउनलोड / सेव करें (Download PDF)",
    "Download / Save PDF File Now",
    "Abhi PDF File Download / Save Karein"
  );
  downloadLink.onclick = () => {
    setTimeout(() => {
      if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
    }, 1800);
  };
  const shareBtn = document.createElement("button");
  shareBtn.type = "button";
  shareBtn.style.cssText = "display: flex; align-items: center; justify-content: center; gap: 8px; width: 100%; padding: 11px 16px; border-radius: 14px; background: linear-gradient(90deg, #d97706 0%, #f59e0b 100%); color: #fffdf9; font-weight: 800; font-size: 13px; border: none; box-shadow: 0 6px 16px rgba(217, 119, 6, 0.28); margin-bottom: 10px; box-sizing: border-box; cursor: pointer;";
  shareBtn.innerText = trUi(
    "WhatsApp / फोन पर सीधे PDF शेयर करें",
    "Share PDF directly on WhatsApp / Phone",
    "WhatsApp / Phone par seedhe PDF Share karein"
  );
  shareBtn.onclick = async () => {
    try {
      const pdfFile = new File([blob], safeFilename, { type: "application/pdf" });
      if (navigator.canShare && navigator.canShare({ files: [pdfFile] })) {
        await navigator.share({
          files: [pdfFile],
          title: safeFilename.replace(/\.pdf$/i, ""),
          text: "पण्डित जी ऑनलाइन — वैदिक ज्योतिष महा-पत्रिका PDF (www.panditjionline.online • +91 7017279043)"
        });
        cleanup();
        return;
      }
    } catch {
    }
    downloadLink.click();
  };
  const printBtn = document.createElement("button");
  printBtn.type = "button";
  printBtn.style.cssText = "display: flex; align-items: center; justify-content: center; gap: 6px; width: 100%; padding: 9px 14px; border-radius: 12px; background: #fef7e6; color: #7c2d12; font-weight: 700; font-size: 12px; border: 1.5px solid #d97706; box-sizing: border-box; cursor: pointer;";
  printBtn.innerText = trUi(
    "सीधे प्रिंट करें (Print / Save as PDF)",
    "Direct Print / Save as PDF",
    "Seedhe Print / Save as PDF karein"
  );
  printBtn.onclick = () => {
    cleanup();
    printDiscretePagesDirectly(pagesHtml, safeFilename, language);
  };
  card.appendChild(closeBtn);
  card.appendChild(badgeEl);
  card.appendChild(titleEl);
  card.appendChild(subEl);
  card.appendChild(downloadLink);
  card.appendChild(shareBtn);
  card.appendChild(printBtn);
  overlay.appendChild(card);
  document.body.appendChild(overlay);
}
async function triggerPdfFileDownload(pdf, filename, pagesHtml, language = "hi") {
  const safeFilename = filename.endsWith(".pdf") ? filename : `${filename}.pdf`;
  try {
    const arrayBuf = pdf.output("arraybuffer");
    const blob = new Blob([arrayBuf], { type: "application/pdf" });
    const blobUrl = URL.createObjectURL(blob);
    const inIframe = (() => {
      try {
        return window.self !== window.top;
      } catch {
        return true;
      }
    })();
    let serverDownloadUrl = null;
    if (inIframe && arrayBuf.byteLength < 28e5) {
      try {
        const base64 = arrayBufferToBase64(arrayBuf);
        const resp = await fetch("/api/pdf-download", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ filename: safeFilename, base64 })
        });
        if (resp.ok) {
          const data = await resp.json();
          if (data?.ok && typeof data.downloadUrl === "string") {
            serverDownloadUrl = data.downloadUrl;
          }
        }
      } catch {
      }
    }
    try {
      if (serverDownloadUrl) {
        const dlFrame = document.createElement("iframe");
        dlFrame.style.display = "none";
        dlFrame.src = serverDownloadUrl;
        document.body.appendChild(dlFrame);
        setTimeout(() => {
          if (document.body.contains(dlFrame)) {
            document.body.removeChild(dlFrame);
          }
        }, 15e3);
      } else {
        const link = document.createElement("a");
        link.href = blobUrl;
        link.download = safeFilename;
        link.style.display = "none";
        document.body.appendChild(link);
        link.click();
        setTimeout(() => {
          if (document.body.contains(link)) {
            document.body.removeChild(link);
          }
        }, 2e3);
      }
    } catch {
    }
    showReadyPdfDownloadModal(
      blob,
      blobUrl,
      serverDownloadUrl,
      safeFilename,
      pagesHtml,
      language
    );
  } catch {
    try {
      pdf.save(safeFilename);
    } catch {
      printDiscretePagesDirectly(pagesHtml, safeFilename, language);
    }
  }
}
async function waitForPdfDevanagariFontsReady(iframeDoc, timeoutMs = 3500) {
  const waits = [];
  const loadFontsForDoc = (doc) => {
    const fontSet = doc?.fonts;
    if (!fontSet) return;
    if (typeof fontSet.load === "function") {
      const sampleHi = "ॐ ह्रां ह्रीं ह्रौं श्रां श्रीं श्रौं क्रां क्रीं क्रौं ब्रां ब्रीं ब्रौं ग्रां ग्रीं ग्रौं द्रां द्रीं द्रौं प्रां प्रीं प्रौं भ्रां भ्रीं भ्रौं स्रां स्रीं स्रौं मं रा मंगल राहु चन्द्रमसे शनैश्चराय नमः लग्न राशि नक्षत्र मेष वृषभ मिथुन कर्क सिंह कन्या तुला वृश्चिक धनु मकर कुंभ कुम्भ मीन दिन ०१२३४५६७८९ 0123456789 (Libra Pisces Virgo Aquarius)";
      for (const weight of ["400", "500", "600", "700", "800", "900"]) {
        waits.push(
          fontSet.load(`${weight} 12px "Noto Sans Devanagari"`, sampleHi).catch(() => {
          })
        );
      }
    }
    if (fontSet.ready) {
      waits.push(fontSet.ready.catch(() => {
      }));
    }
  };
  if (typeof document !== "undefined") {
    loadFontsForDoc(document);
  }
  if (iframeDoc && iframeDoc !== document) {
    loadFontsForDoc(iframeDoc);
  }
  if (waits.length > 0) {
    await Promise.race([
      Promise.all(waits),
      new Promise((resolve) => setTimeout(resolve, timeoutMs))
    ]);
  }
}
function applyHtml2CanvasDevanagariFix(clonedDoc, rootSelector = ".vedic-book-a4-page, .vedic-pdf-page") {
  try {
    const styleId = "pj-h2c-devanagari-root-fix";
    if (!clonedDoc.getElementById(styleId)) {
      const styleEl = clonedDoc.createElement("style");
      styleEl.id = styleId;
      styleEl.textContent = `
        html, body, ${rootSelector}, ${rootSelector} * {
          font-synthesis: none !important;
          letter-spacing: 0 !important;
          font-variant-ligatures: normal !important;
          font-feature-settings: "liga" 1, "clig" 1, "kern" 1 !important;
          text-rendering: optimizeLegibility !important;
          -webkit-font-smoothing: antialiased !important;
        }
        table th,
        table td,
        .book-table th,
        .book-table td,
        .vedic-pdf-page th,
        .vedic-pdf-page td,
        .book-section-bar,
        .book-section-bar > div,
        .book-pill,
        .book-banner-badge,
        .book-banner-pill,
        .milan-status-pill {
          vertical-align: middle !important;
        }
        /* Guarantee zero top-edge clipping of upper Devanagari matras when lifting text by -2px */
        table th,
        table td,
        .book-table th,
        .book-table td,
        .vedic-pdf-page th,
        .vedic-pdf-page td,
        .vedic-pdf-body,
        .vedic-book-a4-body,
        .vedic-book-a4-body--cover,
        .book-pill,
        .book-banner-badge,
        .book-banner-pill,
        .milan-status-pill,
        .book-section-bar,
        .book-section-bar > div,
        .book-cover-pillar-card,
        .book-cover-meta-card,
        .book-card,
        .book-chart-box {
          overflow: visible !important;
        }
        .pj-h2c-devanagari-lift {
          position: relative !important;
          top: -2px !important;
          vertical-align: baseline !important;
        }
      `;
      (clonedDoc.head || clonedDoc.documentElement).appendChild(styleEl);
    }
    const roots = Array.from(clonedDoc.querySelectorAll(rootSelector));
    if (roots.length === 0) return;
    const SKIP_TAGS = /* @__PURE__ */ new Set([
      "STYLE",
      "SCRIPT",
      "NOSCRIPT",
      "SVG",
      "TITLE",
      "TEXTAREA",
      "OPTION"
    ]);
    for (const root of roots) {
      const textNodes = [];
      const walker = clonedDoc.createTreeWalker(root, NodeFilter.SHOW_TEXT);
      let current;
      while (current = walker.nextNode()) {
        const txt = current;
        if (!txt.nodeValue || !txt.nodeValue.trim()) continue;
        const parent = txt.parentElement;
        if (!parent) continue;
        if (SKIP_TAGS.has(parent.tagName)) continue;
        if (parent.closest("svg, .pj-h2c-devanagari-lift, .pj-h2c-no-lift")) continue;
        textNodes.push(txt);
      }
      for (const txt of textNodes) {
        const parent = txt.parentElement;
        if (!parent) continue;
        const liftSpan = clonedDoc.createElement("span");
        liftSpan.className = "pj-h2c-devanagari-lift";
        liftSpan.style.position = "relative";
        liftSpan.style.top = "-2px";
        parent.insertBefore(liftSpan, txt);
        liftSpan.appendChild(txt);
      }
    }
  } catch {
  }
}
async function renderDiscretePagesToPDF(pagesHtml, filename, language = "hi") {
  const captureWidth = 794;
  const captureHeight = 1123;
  ensureIndicPdfFontsLoaded(language);
  const { jsPDF, html2canvas } = await ensurePdfLibrariesLoaded();
  const pdf = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
    compress: true
  });
  const pageWidthMm = 210;
  const pageHeightMm = 297;
  const scopedA4Styles = `
    <style id="vedic-pdf-scoped-style">
      @page {
        size: A4 portrait;
        margin: 0;
      }
      html, body {
        margin: 0 !important;
        padding: 0 !important;
        background-color: #faf4e8 !important;
        color: #1e293b !important;
        font-family: ${PDF_FONT_STACK} !important;
        font-synthesis: none !important;
        line-height: 1.35;
      }
      .vedic-pdf-page,
      .vedic-pdf-page * {
        box-sizing: border-box !important;
        font-family: ${PDF_FONT_STACK} !important;
        font-synthesis: none !important;
      }
      .vedic-pdf-page {
        width: ${captureWidth}px !important;
        min-width: ${captureWidth}px !important;
        max-width: ${captureWidth}px !important;
        height: ${captureHeight}px !important;
        min-height: ${captureHeight}px !important;
        max-height: ${captureHeight}px !important;
        padding: 15px 18px 16px 18px !important;
        margin: 0 !important;
        background-color: #faf4e8 !important;
        color: #1e293b !important;
        font-family: ${PDF_FONT_STACK} !important;
        line-height: 1.35 !important;
        overflow: hidden !important;
      }
      .vedic-pdf-page table {
        width: 100%;
        max-width: 100%;
        table-layout: fixed;
      }
      .vedic-pdf-page th,
      .vedic-pdf-page td {
        word-wrap: break-word;
        overflow-wrap: break-word;
        word-break: normal;
        vertical-align: middle !important;
        overflow: visible;
      }
      .vedic-pdf-page svg,
      .vedic-pdf-page img {
        max-width: 100% !important;
        height: auto !important;
        display: block !important;
      }
    </style>
  `;
  const cleanIframe = document.createElement("iframe");
  cleanIframe.id = "vedic-pdf-clean-iframe";
  cleanIframe.style.cssText = `position:fixed;left:-9999px;top:0;width:${captureWidth}px;height:${captureHeight}px;border:0;margin:0;padding:0;z-index:-1;pointer-events:none;background:#faf4e8;`;
  const getProgressLabel = (pageIdx) => {
    const rawHi = `पृष्ठ ${pageIdx} / ${pagesHtml.length} तैयार हो रहा है...`;
    if (language === "hi") return rawHi;
    if (language === "en") return `Preparing Page ${pageIdx} / ${pagesHtml.length}...`;
    if (language === "hinglish") return `Page ${pageIdx} / ${pagesHtml.length} taiyar ho raha hai...`;
    return translateVedicHindiToEnglish(rawHi, language);
  };
  const progressBadge = document.createElement("div");
  progressBadge.id = "vedic-pdf-progress-badge";
  progressBadge.style.cssText = `position:fixed;top:16px;left:50%;transform:translateX(-50%);z-index:999999;background:linear-gradient(135deg,#0F172A 0%,#1E293B 100%);border:2px solid #D4AF37;color:#FFF9ED;padding:12px 18px;border-radius:16px;min-width:290px;max-width:92vw;box-shadow:0 16px 42px rgba(0,0,0,0.6);font-family:${PDF_FONT_STACK};`;
  progressBadge.innerHTML = `
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;">
      <img src="${PANDIT_AVATAR_THUMB}" alt="Pandit Ji Online" style="width:32px;height:32px;border-radius:50%;object-fit:cover;border:1.5px solid #D4AF37;flex-shrink:0;" />
      <div style="flex:1;min-width:0;">
        <div style="font-size:10.5px;font-weight:800;color:#FDE68A;letter-spacing:0.3px;">PANDIT JI ONLINE • 4K वैदिक PDF</div>
        <div id="vedic-pdf-progress-text" style="font-size:12.5px;font-weight:800;color:#FFFFFF;margin-top:1px;">${getProgressLabel(1)}</div>
      </div>
      <div id="vedic-pdf-progress-pct" style="font-size:12px;font-weight:900;color:#FDE68A;min-width:34px;text-align:right;">0%</div>
    </div>
    <div style="width:100%;height:7px;background:rgba(255,249,237,0.16);border-radius:999px;overflow:hidden;border:1px solid rgba(212,175,55,0.45);">
      <div id="vedic-pdf-progress-fill" style="width:4%;height:100%;background:linear-gradient(90deg,#FF6F00 0%,#D4AF37 100%);border-radius:999px;transition:width 0.18s ease-out;"></div>
    </div>
  `;
  const updateProgressBar = (pageIdx) => {
    const pct = Math.min(100, Math.round(pageIdx / Math.max(1, pagesHtml.length) * 100));
    const textEl = progressBadge.querySelector("#vedic-pdf-progress-text");
    const pctEl = progressBadge.querySelector("#vedic-pdf-progress-pct");
    const fillEl = progressBadge.querySelector("#vedic-pdf-progress-fill");
    if (textEl) textEl.innerText = getProgressLabel(pageIdx);
    if (pctEl) pctEl.innerText = `${pct}%`;
    if (fillEl) fillEl.style.width = `${Math.max(4, pct)}%`;
  };
  document.body.appendChild(cleanIframe);
  document.body.appendChild(progressBadge);
  try {
    const iframeDoc = cleanIframe.contentDocument || cleanIframe.contentWindow?.document;
    if (!iframeDoc) {
      throw new Error("Could not initialize clean PDF iframe document");
    }
    iframeDoc.open();
    iframeDoc.write(`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;600;700;800&display=swap" />
  ${scopedA4Styles}
</head>
<body style="margin:0;padding:0;background:#faf4e8;color:#1e293b;">
  <div id="vedic-pdf-render-host" style="width:${captureWidth}px;height:${captureHeight}px;margin:0;padding:0;background:#faf4e8;overflow:hidden;"></div>
</body>
</html>`);
    iframeDoc.close();
    const host = iframeDoc.getElementById("vedic-pdf-render-host");
    if (!host) {
      throw new Error("Could not find PDF render host in clean iframe");
    }
    await waitForPdfDevanagariFontsReady(iframeDoc, 1600);
    const renderScale = 2.25;
    for (let i = 0; i < pagesHtml.length; i++) {
      updateProgressBar(i + 1);
      host.innerHTML = wrapA4Page(pagesHtml[i], i + 1, pagesHtml.length);
      const pageEl = host.querySelector(".vedic-pdf-page");
      if (!pageEl) continue;
      if (language !== "hi") {
        localizePdfDomTree(pageEl, language);
      }
      await convertSvgsToImgElements(pageEl, iframeDoc);
      const imgs = Array.from(pageEl.querySelectorAll("img"));
      if (imgs.length > 0) {
        await Promise.race([
          Promise.all(
            imgs.map(
              (img) => img.complete ? Promise.resolve() : new Promise((res) => {
                img.onload = () => res();
                img.onerror = () => res();
              })
            )
          ),
          new Promise((r) => setTimeout(r, 350))
        ]);
      }
      await new Promise((resolve) => setTimeout(resolve, 10));
      if (i > 0) {
        pdf.addPage("a4", "portrait");
      }
      if (document.fonts?.ready) {
        await document.fonts.ready;
      }
      const canvas = await html2canvas(pageEl, {
        scale: renderScale,
        useCORS: true,
        allowTaint: true,
        logging: false,
        backgroundColor: "#faf4e8",
        x: 0,
        y: 0,
        scrollX: 0,
        scrollY: 0,
        width: captureWidth,
        height: captureHeight,
        windowWidth: captureWidth,
        windowHeight: captureHeight,
        onclone: (clonedDoc) => {
          applyHtml2CanvasDevanagariFix(clonedDoc, ".vedic-pdf-page");
        }
      });
      pdf.setFillColor(250, 244, 232);
      pdf.rect(0, 0, pageWidthMm, pageHeightMm, "F");
      const imgData = canvas.toDataURL("image/jpeg", 0.86);
      pdf.addImage(imgData, "JPEG", 0, 0, pageWidthMm, pageHeightMm, void 0, "FAST");
      canvas.width = 0;
      canvas.height = 0;
      host.innerHTML = "";
    }
    await triggerPdfFileDownload(pdf, filename, pagesHtml, language);
    return true;
  } catch (err) {
    console.error("Error rendering Vedic PDF, opening direct print fallback:", err);
    printDiscretePagesDirectly(pagesHtml, filename, language);
    return true;
  } finally {
    if (document.body.contains(progressBadge)) {
      document.body.removeChild(progressBadge);
    }
    if (document.body.contains(cleanIframe)) {
      document.body.removeChild(cleanIframe);
    }
  }
}
async function downloadKundaliMilanPDF(milanResult, elementId = "kundali-milan-full-report-container", language = "hi") {
  const pages = buildSixPageKundaliMilanHtml(milanResult);
  const boyClean = sanitizeFileName(milanResult.boyName);
  const girlClean = sanitizeFileName(milanResult.girlName);
  const langSuffix = language === "hi" ? "" : `_${language.toUpperCase()}`;
  const filename = `Brihat_36_Gun_Milan_${boyClean}_and_${girlClean}${langSuffix}_PanditJiOnline`;
  return renderDiscretePagesToPDF(pages, filename, language);
}
function printKundaliMilanPDF(milanResult, language = "hi") {
  const pages = buildSixPageKundaliMilanHtml(milanResult);
  const boyClean = sanitizeFileName(milanResult.boyName);
  const girlClean = sanitizeFileName(milanResult.girlName);
  const langSuffix = language === "hi" ? "" : `_${language.toUpperCase()}`;
  const filename = `Brihat_36_Gun_Milan_${boyClean}_and_${girlClean}${langSuffix}_PanditJiOnline`;
  printDiscretePagesDirectly(pages, filename, language);
}
export {
  computeShadbalaSummary as a,
  applyHtml2CanvasDevanagariFix as b,
  computeBhavaSphutTable as c,
  downloadKundaliMilanPDF as d,
  ensurePdfLibrariesLoaded as e,
  getLagnaGemstoneAndRudraksha as g,
  printKundaliMilanPDF as p,
  sanitizeFileName as s,
  waitForPdfDevanagariFontsReady as w
};
