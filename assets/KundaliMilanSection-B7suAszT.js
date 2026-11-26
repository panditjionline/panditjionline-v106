import { r as reactExports, j as jsxRuntimeExports } from "./vendor-react-CCbeDaYX.js";
import { V as VedicDateInput } from "./VedicDateInput-QzCgtRnr.js";
import { X as getLoggedInUserAccountData, Y as VEDIC_RASHIS, Z as VEDIC_NAKSHATRAS, J as generateSampurnKundali, I as getVedicDetailsFromName, _ as formatHindiHouseOrdinal, $ as calculateKundaliMilan } from "./panchang-core-24ia-akc.js";
import { p as printKundaliMilanPDF, d as downloadKundaliMilanPDF } from "./pdfReportExporter-Cwf3NDiH.js";
import { u as useLanguage, s as setLivePageCardPayload, P as PanditPortrait, n as getWhatsAppLink, e as ShareableVedicCardButton, d as scrollToResultById, t as translateVedicHindiToEnglish } from "./index-AQ5SI3vl.js";
import { u as useVedicValidation, V as VedicTripleCheckBadge } from "./VedicTripleCheckBadge-B_j2EZJj.js";
import { B as BirthPlaceGpsButton } from "./BirthPlaceGpsButton-BKE2rBQq.js";
import { S as Sparkles, X, a8 as Compass, s as User, x as Calendar, a2 as Clock, a1 as MapPin, F as ArrowRight, D as Download, k as Printer, t as MessageCircle, C as Check, Y as Copy, n as ShieldCheck, f as Award, ax as ChevronUp, al as ChevronDown, a5 as CircleCheck, Z as Zap, a4 as TriangleAlert, ag as History, ao as RotateCcw } from "./vendor-icons-Bk5Rg8-9.js";
import "./vendor-astronomy-C8JZdkQu.js";
import "./vendor-pdf-CpPyS1re.js";
import "./seo-core-DnNehtWz.js";
import "./vedicTripleCheck-C0ip0Qtr.js";
const POPULAR_PLACES = [
  "रुद्रपुर, उत्तराखण्ड",
  "हल्द्वानी, उत्तराखण्ड",
  "देहरादून, उत्तराखण्ड",
  "हरिद्वार, उत्तराखण्ड",
  "नैनीताल, उत्तराखण्ड",
  "काशीपुर, उत्तराखण्ड",
  "दिल्ली (New Delhi)",
  "नोएडा / गाज़ियाबाद",
  "लखनऊ, उत्तर प्रदेश",
  "बरेली, उत्तर प्रदेश",
  "मुरादाबाद / रामपुर",
  "वाराणसी (काशी)",
  "जयपुर, राजस्थान",
  "मुंबई, महाराष्ट्र"
];
const MiniNorthIndianChart = ({ houses, title, subtitle, lagnaDegInt, accentColor = "amber" }) => {
  const getHouse = (num) => houses.find((h) => h.houseNumber === num);
  const houseCoords = {
    1: { rashiX: 50, rashiY: 42.2, planetX: 50, planetY: 26.5, maxCols: 2 },
    2: { rashiX: 25.75, rashiY: 19.8, planetX: 25.75, planetY: 10.2, maxCols: 2 },
    3: { rashiX: 19.6, rashiY: 25.75, planetX: 11.2, planetY: 25.75, maxCols: 1 },
    4: { rashiX: 42.2, rashiY: 50, planetX: 25, planetY: 50, maxCols: 2 },
    5: { rashiX: 19.6, rashiY: 74.25, planetX: 11.2, planetY: 74.25, maxCols: 1 },
    6: { rashiX: 25.75, rashiY: 80.2, planetX: 25.75, planetY: 89.8, maxCols: 2 },
    7: { rashiX: 50, rashiY: 57.8, planetX: 50, planetY: 74, maxCols: 2 },
    8: { rashiX: 74.25, rashiY: 80.2, planetX: 74.25, planetY: 89.8, maxCols: 2 },
    9: { rashiX: 80.4, rashiY: 74.25, planetX: 88.8, planetY: 74.25, maxCols: 1 },
    10: { rashiX: 57.8, rashiY: 50, planetX: 75, planetY: 50, maxCols: 2 },
    11: { rashiX: 80.4, rashiY: 25.75, planetX: 88.8, planetY: 25.75, maxCols: 1 },
    12: { rashiX: 74.25, rashiY: 19.8, planetX: 74.25, planetY: 10.2, maxCols: 2 }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-b from-[#161008] via-[#101726] to-[#0b101d] border border-amber-500/40 rounded-2xl p-3 sm:p-4 shadow-xl flex flex-col items-center overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-2.5 w-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "h4",
        {
          className: `text-sm sm:text-base font-bold font-vedic break-words ${accentColor === "rose" ? "text-rose-200" : "text-amber-200"}`,
          children: title
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-amber-300/80 break-words", children: subtitle })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full max-w-[310px] aspect-square bg-[#120d06] rounded-xl p-1.5 border border-amber-500/50 shadow-inner overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
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
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "rect",
            {
              x: "1.5",
              y: "1.5",
              width: "97",
              height: "97",
              fill: "#150f07",
              stroke: "#f59e0b",
              strokeWidth: "0.85",
              rx: "2"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "rect",
            {
              x: "3",
              y: "3",
              width: "94",
              height: "94",
              fill: "none",
              stroke: "#fbbf24",
              strokeOpacity: "0.25",
              strokeWidth: "0.3",
              rx: "1"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "1.5", y1: "1.5", x2: "98.5", y2: "98.5", stroke: "#f59e0b", strokeWidth: "0.6" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "98.5", y1: "1.5", x2: "1.5", y2: "98.5", stroke: "#f59e0b", strokeWidth: "0.6" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "polygon",
            {
              points: "50,1.5 98.5,50 50,98.5 1.5,50",
              fill: "none",
              stroke: "#fbbf24",
              strokeWidth: "0.65"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "text",
            {
              x: "50",
              y: "51.8",
              textAnchor: "middle",
              fill: "#f59e0b",
              fillOpacity: "0.12",
              fontSize: "5.5",
              fontWeight: "bold",
              children: "ॐ"
            }
          ),
          lagnaDegInt !== void 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "text",
            {
              x: "50",
              y: "14.5",
              textAnchor: "middle",
              dominantBaseline: "central",
              fill: "#34d399",
              fontSize: "2.55",
              fontWeight: "800",
              children: [
                "लग्न ",
                String(lagnaDegInt).padStart(2, "0"),
                "°"
              ]
            }
          ),
          Array.from({ length: 12 }, (_, idx) => idx + 1).map((houseNum) => {
            const h = getHouse(houseNum);
            const coords = houseCoords[houseNum];
            if (!h || !coords) return null;
            const planets = h.planets || [];
            const isSideTriangle = [3, 5, 9, 11].includes(houseNum);
            const isTopBottomTriangle = [2, 6, 8, 12].includes(houseNum);
            const isCrowded = planets.length >= 3;
            const effectiveMaxCols = isSideTriangle ? planets.length >= 4 ? 2 : 1 : coords.maxCols;
            const rows = [];
            for (let i = 0; i < planets.length; i += effectiveMaxCols) {
              rows.push(planets.slice(i, i + effectiveMaxCols));
            }
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "text",
                {
                  x: coords.rashiX,
                  y: coords.rashiY,
                  textAnchor: "middle",
                  dominantBaseline: "central",
                  fill: "#fbbf24",
                  fontSize: "3.0",
                  fontWeight: "800",
                  fontFamily: "monospace",
                  children: h.rashiNumber
                }
              ),
              rows.map((row, rIdx) => {
                const totalRows = rows.length;
                const lineStep = isSideTriangle ? totalRows >= 3 ? 2.4 : 2.75 : isTopBottomTriangle ? totalRows >= 3 ? 2.45 : 2.85 : totalRows >= 3 ? 2.75 : 3.15;
                const lineOffset = (rIdx - (totalRows - 1) / 2) * lineStep;
                const yPos = houseNum === 1 && lagnaDegInt !== void 0 ? coords.planetY + 2 + lineOffset : coords.planetY + lineOffset;
                const lineText = row.map(
                  (p) => isSideTriangle || isCrowded ? `${p.shortHindi || p.chartLabel}` : `${p.chartLabel || p.shortHindi}${String(p.degInt ?? 0).padStart(2, "0")}`
                ).join(" ");
                const fontSize = isSideTriangle ? totalRows >= 3 ? "2.05" : "2.35" : isTopBottomTriangle ? totalRows >= 3 ? "2.2" : "2.5" : totalRows >= 3 ? "2.35" : "2.7";
                return /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "text",
                  {
                    x: coords.planetX,
                    y: yPos,
                    textAnchor: "middle",
                    dominantBaseline: "central",
                    fill: rIdx === 0 ? "#fef3c7" : "#fde68a",
                    fontSize,
                    fontWeight: "800",
                    children: lineText
                  },
                  rIdx
                );
              })
            ] }, houseNum);
          })
        ]
      }
    ) })
  ] });
};
const KundaliMilanSection = ({
  onConsultPanditJi: _onConsultPanditJi,
  currentUser,
  onSaveKundaliHistoryItem
}) => {
  const { language, localizeVedicText } = useLanguage();
  const [milanMode, setMilanMode] = reactExports.useState("astronomical");
  const initialLogin = getLoggedInUserAccountData();
  const isInitiallyLoggedIn = Boolean(currentUser && currentUser.phone || initialLogin.isLoggedIn);
  const [boyName, setBoyName] = reactExports.useState(
    isInitiallyLoggedIn ? currentUser?.name || initialLogin.name : ""
  );
  const [boyDob, setBoyDob] = reactExports.useState(
    isInitiallyLoggedIn ? currentUser?.dob || initialLogin.dob : ""
  );
  const [boyTime, setBoyTime] = reactExports.useState(
    isInitiallyLoggedIn ? currentUser?.birthTime || initialLogin.birthTime : ""
  );
  const [boyPlace, setBoyPlace] = reactExports.useState(
    isInitiallyLoggedIn ? currentUser?.birthPlace || initialLogin.birthPlace : ""
  );
  const [boyManualRashi, setBoyManualRashi] = reactExports.useState(VEDIC_RASHIS[7]);
  const [boyManualNakshatra, setBoyManualNakshatra] = reactExports.useState(VEDIC_NAKSHATRAS[16]);
  const [girlName, setGirlName] = reactExports.useState("");
  const [girlDob, setGirlDob] = reactExports.useState("");
  const [girlTime, setGirlTime] = reactExports.useState("");
  const [girlPlace, setGirlPlace] = reactExports.useState("");
  const [girlManualRashi, setGirlManualRashi] = reactExports.useState(VEDIC_RASHIS[5]);
  const [girlManualNakshatra, setGirlManualNakshatra] = reactExports.useState(VEDIC_NAKSHATRAS[12]);
  reactExports.useEffect(() => {
    const syncAuth = () => {
      const loginData = getLoggedInUserAccountData();
      const activeLoggedIn = Boolean(currentUser && currentUser.phone || loginData.isLoggedIn);
      if (activeLoggedIn) {
        setBoyName(currentUser?.name || loginData.name || "");
        setBoyDob(currentUser?.dob || loginData.dob || "");
        setBoyTime(currentUser?.birthTime || loginData.birthTime || "");
        setBoyPlace(currentUser?.birthPlace || loginData.birthPlace || "");
      } else {
        setBoyName("");
        setBoyDob("");
        setBoyTime("");
        setBoyPlace("");
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
  }, [currentUser?.phone, currentUser?.name, currentUser?.dob, currentUser?.birthTime, currentUser?.birthPlace]);
  const [milanResult, setMilanResult] = reactExports.useState(null);
  const { validatedData: verifiedMilanResult, validation: milanValidation } = useVedicValidation(
    milanResult,
    "milan"
  );
  const activeMilan = verifiedMilanResult || milanResult;
  const [showAdvancedDetails, setShowAdvancedDetails] = reactExports.useState(true);
  const [copiedReport, setCopiedReport] = reactExports.useState(false);
  const [reusedBannerText, setReusedBannerText] = reactExports.useState(null);
  const [localHistory, setLocalHistory] = reactExports.useState(() => {
    if (currentUser?.kundaliHistory && currentUser.kundaliHistory.length > 0) {
      return currentUser.kundaliHistory;
    }
    try {
      const saved = localStorage.getItem("panditji_kundali_history_guest");
      if (saved && saved !== "undefined" && saved !== "null") {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch {
    }
    return [];
  });
  reactExports.useEffect(() => {
    if (currentUser) {
      setLocalHistory(Array.isArray(currentUser.kundaliHistory) ? currentUser.kundaliHistory : []);
    } else {
      try {
        const saved = localStorage.getItem("panditji_kundali_history_guest");
        const parsed = saved && saved !== "undefined" && saved !== "null" ? JSON.parse(saved) : [];
        setLocalHistory(Array.isArray(parsed) ? parsed : []);
      } catch {
        setLocalHistory([]);
      }
    }
  }, [currentUser?.phone, currentUser?.kundaliHistory]);
  const handleReuseHistoryItem = (item, shouldScroll = true) => {
    if (!item || !item.boyName || !item.girlName) return;
    const resolvedBoyDob = item.boyDob || "1996-03-10";
    const resolvedBoyTime = item.boyTime || "10:00";
    const resolvedBoyPlace = item.boyPlace || "रुद्रपुर, उत्तराखण्ड";
    const resolvedGirlDob = item.girlDob || "1996-11-06";
    const resolvedGirlTime = item.girlTime || "14:15";
    const resolvedGirlPlace = item.girlPlace || "रुद्रपुर, उत्तराखण्ड";
    setBoyName(item.boyName);
    setBoyDob(resolvedBoyDob);
    setBoyTime(resolvedBoyTime);
    setBoyPlace(resolvedBoyPlace);
    if (item.boyRashi) {
      const foundBoyR = VEDIC_RASHIS.find(
        (r) => r.includes(item.boyRashi) || item.boyRashi.includes(r.split(" ")[0])
      );
      if (foundBoyR) setBoyManualRashi(foundBoyR);
    }
    if (item.boyNakshatra) {
      const bNak = item.boyNakshatra;
      const foundBoyN = VEDIC_NAKSHATRAS.find(
        (n) => n.includes(bNak) || bNak.includes(n.split(" ")[0])
      );
      if (foundBoyN) setBoyManualNakshatra(foundBoyN);
    }
    setGirlName(item.girlName);
    setGirlDob(resolvedGirlDob);
    setGirlTime(resolvedGirlTime);
    setGirlPlace(resolvedGirlPlace);
    if (item.girlRashi) {
      const foundGirlR = VEDIC_RASHIS.find(
        (r) => r.includes(item.girlRashi) || item.girlRashi.includes(r.split(" ")[0])
      );
      if (foundGirlR) setGirlManualRashi(foundGirlR);
    }
    if (item.girlNakshatra) {
      const gNak = item.girlNakshatra;
      const foundGirlN = VEDIC_NAKSHATRAS.find(
        (n) => n.includes(gNak) || gNak.includes(n.split(" ")[0])
      );
      if (foundGirlN) setGirlManualNakshatra(foundGirlN);
    }
    const useAstro = Boolean(resolvedGirlDob);
    setMilanMode(useAstro ? "astronomical" : "manual");
    const result = calculateKundaliMilan(
      item.boyName,
      item.girlName,
      item.boyRashi,
      item.girlRashi,
      item.boyNakshatra || "अश्विनी",
      item.girlNakshatra || "रोहिणी",
      resolvedBoyDob,
      resolvedBoyTime,
      resolvedGirlDob,
      resolvedGirlTime,
      resolvedBoyPlace,
      resolvedGirlPlace,
      useAstro
    );
    setMilanResult(result);
    setShowAdvancedDetails(true);
    setReusedBannerText(
      `"${item.boyName} & ${item.girlName}" का पूर्व सहेजा गया विवरण (जन्म तिथि, समय व स्थान) फॉर्म में लोड हो गया है और ३६ गुण मिलान गणना अपडेट कर दी गई है!`
    );
    setTimeout(() => setReusedBannerText(null), 5e3);
    if (shouldScroll) {
      scrollToResultById(
        "kundali-milan-full-report-container",
        `${item.boyName} & ${item.girlName} कुंडली मिलान परिणाम`,
        120
      );
    }
  };
  reactExports.useEffect(() => {
    try {
      const pendingRaw = localStorage.getItem("panditji_open_milan_from_history");
      if (pendingRaw && pendingRaw !== "undefined" && pendingRaw !== "null") {
        localStorage.removeItem("panditji_open_milan_from_history");
        const item = JSON.parse(pendingRaw);
        if (item && item.boyName && item.girlName) {
          handleReuseHistoryItem(item, true);
        }
      }
    } catch {
    }
  }, []);
  const liveBoyKundali = reactExports.useMemo(() => {
    if (milanMode !== "astronomical" || !boyDob) return null;
    try {
      return generateSampurnKundali(
        boyName || "वर",
        boyDob,
        boyTime || "12:00",
        boyPlace || "रुद्रपुर, उत्तराखण्ड"
      );
    } catch {
      return null;
    }
  }, [milanMode, boyName, boyDob, boyTime, boyPlace]);
  const liveGirlKundali = reactExports.useMemo(() => {
    if (milanMode !== "astronomical" || !girlDob) return null;
    try {
      return generateSampurnKundali(
        girlName || "कन्या",
        girlDob,
        girlTime || "12:00",
        girlPlace || "रुद्रपुर, उत्तराखण्ड"
      );
    } catch {
      return null;
    }
  }, [milanMode, girlName, girlDob, girlTime, girlPlace]);
  const [isDownloadingPDF, setIsDownloadingPDF] = reactExports.useState(false);
  const handleDownloadMilanPDF = async () => {
    const targetMilan = activeMilan || milanResult;
    if (!targetMilan || isDownloadingPDF) return;
    setIsDownloadingPDF(true);
    try {
      await downloadKundaliMilanPDF(targetMilan, "kundali-milan-full-report-container", language);
    } catch (err) {
      console.error("Milan PDF Download Error:", err);
      printKundaliMilanPDF(targetMilan, language);
    } finally {
      setIsDownloadingPDF(false);
    }
  };
  const handleDownloadHistoryMilanPDF = async (e, item) => {
    e.stopPropagation();
    if (!item || !item.boyName || !item.girlName || isDownloadingPDF) return;
    setIsDownloadingPDF(true);
    try {
      const resolvedBoyDob = item.boyDob || "1996-03-10";
      const resolvedBoyTime = item.boyTime || "10:00";
      const resolvedBoyPlace = item.boyPlace || "रुद्रपुर, उत्तराखण्ड";
      const resolvedGirlDob = item.girlDob || "1996-11-06";
      const resolvedGirlTime = item.girlTime || "14:15";
      const resolvedGirlPlace = item.girlPlace || "रुद्रपुर, उत्तराखण्ड";
      const useAstro = Boolean(resolvedBoyDob && resolvedGirlDob);
      const result = calculateKundaliMilan(
        item.boyName,
        item.girlName,
        item.boyRashi,
        item.girlRashi,
        item.boyNakshatra || "अश्विनी",
        item.girlNakshatra || "रोहिणी",
        resolvedBoyDob,
        resolvedBoyTime,
        resolvedGirlDob,
        resolvedGirlTime,
        resolvedBoyPlace,
        resolvedGirlPlace,
        useAstro
      );
      setMilanResult(result);
      await downloadKundaliMilanPDF(result, "kundali-milan-full-report-container", language);
    } catch (err) {
      console.error("History Milan PDF Download Error:", err);
    } finally {
      setIsDownloadingPDF(false);
    }
  };
  const boyNameFallback = getVedicDetailsFromName(boyName);
  const girlNameFallback = getVedicDetailsFromName(girlName);
  const handleCalculate = (e) => {
    e.preventDefault();
    if (!boyName.trim() || !girlName.trim()) return;
    const useAstro = milanMode === "astronomical" && Boolean(boyDob) && Boolean(girlDob);
    const result = calculateKundaliMilan(
      boyName.trim(),
      girlName.trim(),
      useAstro ? liveBoyKundali?.panchang.moonRashiName : boyManualRashi,
      useAstro ? liveGirlKundali?.panchang.moonRashiName : girlManualRashi,
      useAstro ? liveBoyKundali?.panchang.nakshatraName : boyManualNakshatra,
      useAstro ? liveGirlKundali?.panchang.nakshatraName : girlManualNakshatra,
      boyDob,
      boyTime,
      girlDob,
      girlTime,
      boyPlace,
      girlPlace,
      useAstro
    );
    setMilanResult(result);
    const historyItem = {
      id: `milan-${Date.now()}`,
      boyName: boyName.trim(),
      boyDob,
      boyTime,
      boyPlace: boyPlace.trim(),
      boyRashi: result.boyRashi,
      boyNakshatra: result.boyNakshatra,
      girlName: girlName.trim(),
      girlDob,
      girlTime,
      girlPlace: girlPlace.trim(),
      girlRashi: result.girlRashi,
      girlNakshatra: result.girlNakshatra,
      totalScore: result.totalScore,
      compatibilityPercentage: result.compatibilityPercentage,
      overallVerdict: result.overallVerdict,
      manglikVerdict: result.manglikStatus.description,
      ashtakootSummary: `${result.totalScore}/36 गुण (${result.compatibilityPercentage}%)`,
      timestamp: (/* @__PURE__ */ new Date()).toLocaleString("hi-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      })
    };
    const nextHist = [historyItem, ...localHistory.slice(0, 19)];
    setLocalHistory(nextHist);
    try {
      localStorage.setItem("panditji_kundali_history_guest", JSON.stringify(nextHist));
    } catch {
    }
    if (onSaveKundaliHistoryItem) {
      onSaveKundaliHistoryItem(historyItem);
    }
    scrollToResultById(
      "kundali-milan-full-report-container",
      `${boyName.trim()} संग ${girlName.trim()} — ३६ गुण मिलान परिणाम तैयार है`,
      150
    );
  };
  const getWhatsAppMilanText = () => {
    if (!milanResult) return "";
    if (language === "en") {
      const trEn = (s) => translateVedicHindiToEnglish(s, "en");
      return `*Pandit Ji Online - Astronomical Ashtakoot Kundali Milan Consultation*
----------------------------------------
*Groom (Boy):* ${milanResult.boyName} | DOB: ${boyDob || "-"} | Time: ${boyTime || "-"} | Place: ${trEn(boyPlace)}
• Lagna: ${trEn(milanResult.boyLagna)} | Moon Rashi: ${trEn(milanResult.boyRashi)} | Nakshatra: ${trEn(milanResult.boyNakshatra)} (Pada ${milanResult.boyPada})
*Bride (Girl):* ${milanResult.girlName} | DOB: ${girlDob || "-"} | Time: ${girlTime || "-"} | Place: ${trEn(girlPlace)}
• Lagna: ${trEn(milanResult.girlLagna)} | Moon Rashi: ${trEn(milanResult.girlRashi)} | Nakshatra: ${trEn(milanResult.girlNakshatra)} (Pada ${milanResult.girlPada})
----------------------------------------
*Ashtakoot Score:* ${milanResult.totalScore} / 36 Gunas (${milanResult.compatibilityPercentage}%)
*Manglik Assessment:* ${trEn(milanResult.manglikStatus.description)}
*Verdict:* ${trEn(milanResult.overallVerdict)}
----------------------------------------
Radhe Radhe Pandit Shashank Sharma Ji! Please provide detailed Vedic Kundali Milan & marriage Muhurat guidance.`;
    }
    const rawHi = `*पण्डित जी ऑनलाइन - खगोलीय अष्टकूट कुंडली मिलान परामर्श*
----------------------------------------
*वर (Boy):* ${milanResult.boyName} | DOB: ${boyDob || "-"} | समय: ${boyTime || "-"} | स्थान: ${boyPlace}
• लग्न: ${milanResult.boyLagna} | चन्द्र राशि: ${milanResult.boyRashi} | नक्षत्र: ${milanResult.boyNakshatra} (चरण ${milanResult.boyPada})
*कन्या (Girl):* ${milanResult.girlName} | DOB: ${girlDob || "-"} | समय: ${girlTime || "-"} | स्थान: ${girlPlace}
• लग्न: ${milanResult.girlLagna} | चन्द्र राशि: ${milanResult.girlRashi} | नक्षत्र: ${milanResult.girlNakshatra} (चरण ${milanResult.girlPada})
----------------------------------------
*कुल अष्टकूट गुण मिलान:* ${milanResult.totalScore} / 36 गुण (${milanResult.compatibilityPercentage}%)
*मांगलिक विचार:* ${milanResult.manglikStatus.description}
*निष्कर्ष:* ${milanResult.overallVerdict}
----------------------------------------
राधे राधे पण्डित शशांक शर्मा जी! कृपया हमारे इस कुंडली मिलान का विस्तृत शास्त्रोक्त विश्लेषण एवं विवाह परामर्श प्रदान करें।`;
    return language === "hi" ? rawHi : translateVedicHindiToEnglish(rawHi, language);
  };
  const copyReport = () => {
    if (!milanResult) return;
    const deep = milanResult.deepMatchInsights;
    const kootLines = milanResult.koots.map((k) => `• ${k.name} (${k.obtainedPoints}/${k.maxPoints}): ${k.boyValue} vs ${k.girlValue} — ${k.verdict}`).join("\n");
    const pariharLines = (deep?.pariharChecks || []).map((p) => `• ${p.doshaName}: ${p.status} (${p.detail})`).join("\n");
    const extendedLines = (deep?.extendedKoots || []).map((e) => `• ${e.name}: ${e.status} — ${e.detail}`).join("\n");
    const remedyLines = (deep?.practicalRemedies || []).slice(0, 3).map((r, i) => `${i + 1}. ${r}`).join("\n");
    let text = "";
    if (language === "en") {
      const trEn = (s) => translateVedicHindiToEnglish(s, "en");
      text = `36-GUNA ASHTAKOOT KUNDALI MILAN REPORT - PANDIT JI ONLINE
================================================
Groom: ${milanResult.boyName} (DOB: ${boyDob || "-"}, Time: ${boyTime || "-"}, Lagna: ${trEn(milanResult.boyLagna)}, Moon Rashi: ${trEn(milanResult.boyRashi)}, Nakshatra: ${trEn(milanResult.boyNakshatra)} Pada ${milanResult.boyPada})
Bride: ${milanResult.girlName} (DOB: ${girlDob || "-"}, Time: ${girlTime || "-"}, Lagna: ${trEn(milanResult.girlLagna)}, Moon Rashi: ${trEn(milanResult.girlRashi)}, Nakshatra: ${trEn(milanResult.girlNakshatra)} Pada ${milanResult.girlPada})
------------------------------------------------
Total Ashtakoot Score: ${milanResult.totalScore} / 36 Gunas (${milanResult.compatibilityPercentage}% Compatible)
Overall Verdict: ${trEn(milanResult.overallVerdict)}
Manglik Assessment: ${trEn(milanResult.manglikStatus.description)}
Planetary Harmony: ${trEn(milanResult.planetaryHarmony.rashiLordRelation)} | ${trEn(milanResult.planetaryHarmony.seventhHouseSummary)}

8-Koot Breakdown:
${trEn(kootLines)}
${pariharLines ? `
Shastrokta Dosha Parihar Verification:
${trEn(pariharLines)}` : ""}
${extendedLines ? `
Extended Melapak Checks (Rajju, Vedha, Mahendra, Stree-Deerga):
${trEn(extendedLines)}` : ""}
${deep?.navamshaCrossCheck ? `
Navamsha (D-9) & Dasha Cross-Check:
${trEn(deep.navamshaCrossCheck)}` : ""}
${remedyLines ? `
Recommended Remedies:
${trEn(remedyLines)}` : ""}
================================================
Acharya Pandit Shashank Sharma (Rudrapur, Uttarakhand)
Phone / WhatsApp: +91 7017279043 | Website: https://www.panditjionline.online | Email: internetwebhelp24@gmail.com`;
    } else {
      const rawHi = `३६ गुण अष्टकूट कुंडली मिलान महा-पत्रक - पण्डित जी ऑनलाइन
================================================
वर: ${milanResult.boyName} (DOB: ${boyDob || "-"}, समय: ${boyTime || "-"}, लग्न: ${milanResult.boyLagna}, चन्द्र राशि: ${milanResult.boyRashi}, नक्षत्र: ${milanResult.boyNakshatra} चरण ${milanResult.boyPada})
कन्या: ${milanResult.girlName} (DOB: ${girlDob || "-"}, समय: ${girlTime || "-"}, लग्न: ${milanResult.girlLagna}, चन्द्र राशि: ${milanResult.girlRashi}, नक्षत्र: ${milanResult.girlNakshatra} चरण ${milanResult.girlPada})
------------------------------------------------
कुल अष्टकूट गुण मिलान: ${milanResult.totalScore} / 36 गुण (${milanResult.compatibilityPercentage}% अनुकूलता)
निर्णय: ${milanResult.overallVerdict}
मांगलिक विचार: ${milanResult.manglikStatus.description}
ग्रह मैत्री व सप्तम भाव: ${milanResult.planetaryHarmony.rashiLordRelation} | ${milanResult.planetaryHarmony.seventhHouseSummary}

अष्टकूट विवरण:
${kootLines}
${pariharLines ? `
शास्त्रोक्त दोष परिहार सत्यापन:
${pariharLines}` : ""}
${extendedLines ? `
विशेष मेलापक (रज्जु, वेध, महेन्द्र, स्त्री दीर्घ):
${extendedLines}` : ""}
${deep?.navamshaCrossCheck ? `
नवांश (D-9) व दशा संधि परीक्षण:
${deep.navamshaCrossCheck}` : ""}
${remedyLines ? `
विशेष वैवाहिक उपाय:
${remedyLines}` : ""}
================================================
आचार्य: पण्डित शशांक शर्मा (रुद्रपुर, उत्तराखण्ड)
संपर्क / WhatsApp: +91 7017279043 | वेबसाइट: https://www.panditjionline.online | Email: internetwebhelp24@gmail.com`;
      text = language === "hi" ? rawHi : translateVedicHindiToEnglish(rawHi, language);
    }
    navigator.clipboard.writeText(text);
    setCopiedReport(true);
    setTimeout(() => setCopiedReport(false), 2e3);
  };
  const liveMilanCardPayload = reactExports.useMemo(() => {
    if (!milanResult) return null;
    const loc = (s) => language === "hi" ? s : translateVedicHindiToEnglish(s, language);
    return {
      variant: "milan",
      badge: loc("३६ गुण अष्टकूट विवाह मिलान रिपोर्ट"),
      title: `${milanResult.boyName} & ${milanResult.girlName}`,
      subtitle: `${loc("कुल प्राप्तांक")}: ${milanResult.totalScore} / 36 ${loc("गुण")} (${milanResult.compatibilityPercentage}%)`,
      dateOrLocation: loc(milanResult.overallVerdict),
      milanData: {
        boyName: milanResult.boyName,
        boyRashi: loc(milanResult.boyRashi),
        boyNakshatra: `${loc(milanResult.boyNakshatra)} (${loc("चरण")} ${milanResult.boyPada})`,
        girlName: milanResult.girlName,
        girlRashi: loc(milanResult.girlRashi),
        girlNakshatra: `${loc(milanResult.girlNakshatra)} (${loc("चरण")} ${milanResult.girlPada})`,
        totalScore: milanResult.totalScore,
        compatibilityPercentage: milanResult.compatibilityPercentage,
        verdict: loc(milanResult.overallVerdict),
        manglikStatus: loc(milanResult.manglikStatus.description),
        lagnaMatch: `${loc(milanResult.boyLagna)} × ${loc(milanResult.girlLagna)}`,
        summary: loc(milanResult.verdictDescription)
      },
      highlights: [
        {
          label: `${loc("वर")} (${milanResult.boyName})`,
          value: `${loc(milanResult.boyRashi)} • ${loc(milanResult.boyNakshatra)} (${loc("चरण")} ${milanResult.boyPada})`
        },
        {
          label: `${loc("कन्या")} (${milanResult.girlName})`,
          value: `${loc(milanResult.girlRashi)} • ${loc(milanResult.girlNakshatra)} (${loc("चरण")} ${milanResult.girlPada})`
        },
        {
          label: loc("मांगलिक विचार"),
          value: loc(milanResult.manglikStatus.description)
        },
        {
          label: loc("लग्न सामंजस्य"),
          value: `${loc(milanResult.boyLagna)} × ${loc(milanResult.girlLagna)}`
        }
      ],
      message: loc(milanResult.verdictDescription),
      shareUrl: "https://www.panditjionline.online/kundali-milan",
      fileNameSlug: `kundali-milan-${milanResult.totalScore}-36`
    };
  }, [milanResult, language]);
  reactExports.useEffect(() => {
    setLivePageCardPayload("milan", liveMilanCardPayload);
    return () => setLivePageCardPayload("milan", null);
  }, [liveMilanCardPayload]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "w-full max-w-full overflow-x-hidden space-y-6 animate-fadeIn", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "no-print relative overflow-hidden rounded-2xl bg-gradient-to-r from-amber-950/80 via-[#191109] to-[#0f172a] border border-amber-600/40 p-4 sm:p-7 shadow-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-center sm:text-left min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(PanditPortrait, { size: "lg", showBadge: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold mb-1 border border-amber-500/40", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3 h-3 text-yellow-400" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "लाहिड़ी चित्रापक्ष पंचांग एवं ग्रह गणना आधारित सटीक अष्टकूट मिलान" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl sm:text-3xl font-bold font-vedic text-amber-100", children: "वर-कन्या 36 गुण एवं ग्रह कुंडली मिलान" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs sm:text-sm text-amber-200/80 mt-1 max-w-2xl", children: [
            "ऑनलाइन निःशुल्क ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "36 गुण अष्टकूट कुंडली मिलान (Free Kundali Matching for Marriage)" }),
            " — वर एवं कन्या की जन्म तिथि, समय व स्थान या नाम से सटीक",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "गुण मिलान, नाड़ी-भकूट-गण दोष, मांगलिक दोष निवारण और सुखी वैवाहिक जीवन" }),
            " का सम्पूर्ण ज्योतिषीय विश्लेषण प्राप्त करें।"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col sm:flex-row items-center gap-2 flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-amber-300 font-semibold bg-amber-950/60 px-3 py-1.5 rounded-xl border border-amber-700/40", children: [
        "विस्तृत परामर्श: ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "line-through text-slate-400 font-mono", children: "₹1,000" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-400 font-bold font-mono", children: "मात्र ₹100" })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "kundali-milan-form-card", "data-nosnippet": true, className: "no-print bg-[#0e1424] border border-amber-900/40 rounded-2xl p-4 sm:p-7 shadow-xl overflow-hidden space-y-6", children: [
      reusedBannerText && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3.5 rounded-xl bg-emerald-950/80 border border-emerald-500/50 text-emerald-200 text-xs sm:text-sm font-bold flex items-center justify-between gap-2 animate-fadeIn", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: reusedBannerText }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => setReusedBannerText(null),
            className: "inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-emerald-800/80 hover:bg-emerald-700 text-emerald-100 border border-emerald-400/40 text-xs font-extrabold shrink-0 cursor-pointer transition-all",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3.5 h-3.5 shrink-0", strokeWidth: 1.5 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "बंद करें" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Compass, { className: "w-4 h-4 text-amber-400" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs sm:text-sm font-bold text-amber-200", children: "कुंडली मिलान की गणना विधि चुनें:" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => setMilanMode("astronomical"),
              className: `px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${milanMode === "astronomical" ? "bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 shadow-md" : "bg-slate-900 text-amber-200/80 border border-amber-800/40 hover:bg-slate-800"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "जन्म तिथि, समय व स्थान से (पंचांग ग्रह गणना)" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => setMilanMode("manual"),
              className: `px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${milanMode === "manual" ? "bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 shadow-md" : "bg-slate-900 text-amber-200/80 border border-amber-800/40 hover:bg-slate-800"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "राशि व नक्षत्र चुनकर (बिना जन्म समय)" })
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleCalculate, className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-amber-900/40 space-y-4 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-slate-800 pb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-base font-bold font-vedic text-amber-200 flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-4 h-4 text-amber-400" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "वर का विवरण (लड़का / Boy)" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs px-2 py-0.5 rounded bg-amber-500/15 text-amber-300 font-medium", children: "वर पत्रिका" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold text-amber-300 mb-1.5", children: "लड़के का नाम (Boy's Name) *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  required: true,
                  placeholder: "उदा. शशांक शर्मा, राहुल...",
                  value: boyName,
                  onChange: (e) => setBoyName(e.target.value),
                  className: "w-full bg-slate-950 border border-amber-900/60 rounded-xl px-4 py-2.5 text-sm text-amber-100 placeholder:text-slate-500 focus:outline-none focus:border-amber-500 font-medium"
                }
              )
            ] }),
            milanMode === "astronomical" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-xs font-semibold text-amber-300 mb-1 flex items-center gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-3.5 h-3.5 text-amber-400" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "जन्म तिथि (Date of Birth) *" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    VedicDateInput,
                    {
                      required: true,
                      value: boyDob,
                      onChange: (iso) => setBoyDob(iso),
                      ariaLabel: "वर की जन्म तिथि"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-xs font-semibold text-amber-300 mb-1 flex items-center gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3.5 h-3.5 text-amber-400" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "जन्म समय (Time of Birth) *" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "time",
                      required: true,
                      value: boyTime,
                      onChange: (e) => setBoyTime(e.target.value),
                      className: "w-full bg-slate-950 border border-amber-900/60 rounded-xl px-3 py-2 text-xs sm:text-sm text-amber-100 focus:outline-none focus:border-amber-500"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-xs font-semibold text-amber-300 mb-1 flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-3.5 h-3.5 text-amber-400" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "जन्म स्थान (शहर / गाँव का नाम लिखें)" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-stretch gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "text",
                      list: "kundali-milan-places",
                      value: boyPlace,
                      onChange: (e) => setBoyPlace(e.target.value),
                      placeholder: "अपना जन्म स्थान लिखें (जैसे: रुद्रपुर, हल्द्वानी, बरेली, दिल्ली...)",
                      className: "flex-1 min-w-0 bg-slate-950 border border-amber-900/60 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-amber-100 placeholder:text-slate-500 focus:outline-none focus:border-amber-500"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    BirthPlaceGpsButton,
                    {
                      size: "md",
                      onSelectPlace: (place) => setBoyPlace(place),
                      title: "वर का वर्तमान GPS स्थान चुनें"
                    }
                  )
                ] })
              ] }),
              liveBoyKundali && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-xl bg-amber-950/35 border border-amber-600/40 text-xs space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] text-amber-400 font-bold flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3.5 h-3.5" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "खगोलीय पंचांग से प्राप्त वर की ग्रह स्थिति:" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-1.5 text-[11px] text-amber-100", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-slate-950/90 px-2.5 py-1.5 rounded-lg border border-amber-800/40", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-400 block text-[10px]", children: "लग्न (Ascendant):" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("b", { className: "text-amber-300", children: liveBoyKundali.panchang.lagnaName })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-slate-950/90 px-2.5 py-1.5 rounded-lg border border-amber-800/40", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-400 block text-[10px]", children: "चन्द्र राशि (Janma Rashi):" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("b", { className: "text-amber-300", children: liveBoyKundali.panchang.moonRashiName })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-slate-950/90 px-2.5 py-1.5 rounded-lg border border-amber-800/40", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-400 block text-[10px]", children: "जन्म नक्षत्र एवं चरण:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("b", { className: "text-amber-200", children: [
                      liveBoyKundali.panchang.nakshatraName.split(" ")[0],
                      " (चरण",
                      " ",
                      liveBoyKundali.panchang.nakshatraPada,
                      ")"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-slate-950/90 px-2.5 py-1.5 rounded-lg border border-amber-800/40", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-400 block text-[10px]", children: "मांगलिक स्थिति:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "b",
                      {
                        className: liveBoyKundali.doshaAnalysis.manglik.isManglik ? "text-rose-300" : "text-emerald-300",
                        children: liveBoyKundali.doshaAnalysis.manglik.severity
                      }
                    )
                  ] })
                ] })
              ] })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold text-amber-300 mb-1", children: "वर की चन्द्र राशि चुनें:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "select",
                  {
                    value: boyManualRashi,
                    onChange: (e) => setBoyManualRashi(e.target.value),
                    className: "w-full bg-slate-950 border border-amber-900/60 rounded-xl px-3 py-2 text-xs sm:text-sm text-amber-100 focus:outline-none focus:border-amber-500",
                    children: VEDIC_RASHIS.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: r, children: r }, r))
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold text-amber-300 mb-1", children: "वर का जन्म नक्षत्र चुनें:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "select",
                  {
                    value: boyManualNakshatra,
                    onChange: (e) => setBoyManualNakshatra(e.target.value),
                    className: "w-full bg-slate-950 border border-amber-900/60 rounded-xl px-3 py-2 text-xs sm:text-sm text-amber-100 focus:outline-none focus:border-amber-500",
                    children: VEDIC_NAKSHATRAS.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: n, children: n }, n))
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    setBoyManualRashi(boyNameFallback.rashi);
                    setBoyManualNakshatra(boyNameFallback.nakshatra);
                  },
                  className: "inline-flex items-center gap-1 text-[11px] text-amber-400 hover:underline cursor-pointer",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                      "नाम अक्षर (",
                      boyNameFallback.initialLetter,
                      ") से स्वतः राशि/नक्षत्र भरें"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3 h-3 shrink-0", strokeWidth: 1.5 })
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-amber-900/40 space-y-4 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-slate-800 pb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-base font-bold font-vedic text-rose-200 flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-4 h-4 text-rose-400" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "कन्या का विवरण (लड़की / Girl)" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs px-2 py-0.5 rounded bg-rose-500/15 text-rose-300 font-medium", children: "कन्या पत्रिका" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold text-amber-300 mb-1.5", children: "लड़की का नाम (Girl's Name) *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  required: true,
                  placeholder: "उदा. प्रिया शर्मा, अंजलि...",
                  value: girlName,
                  onChange: (e) => setGirlName(e.target.value),
                  className: "w-full bg-slate-950 border border-amber-900/60 rounded-xl px-4 py-2.5 text-sm text-amber-100 placeholder:text-slate-500 focus:outline-none focus:border-amber-500 font-medium"
                }
              )
            ] }),
            milanMode === "astronomical" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-xs font-semibold text-amber-300 mb-1 flex items-center gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-3.5 h-3.5 text-rose-400" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "जन्म तिथि (Date of Birth) *" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    VedicDateInput,
                    {
                      required: true,
                      value: girlDob,
                      onChange: (iso) => setGirlDob(iso),
                      ariaLabel: "कन्या की जन्म तिथि"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-xs font-semibold text-amber-300 mb-1 flex items-center gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3.5 h-3.5 text-rose-400" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "जन्म समय (Time of Birth) *" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "time",
                      required: true,
                      value: girlTime,
                      onChange: (e) => setGirlTime(e.target.value),
                      className: "w-full bg-slate-950 border border-amber-900/60 rounded-xl px-3 py-2 text-xs sm:text-sm text-amber-100 focus:outline-none focus:border-amber-500"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-xs font-semibold text-amber-300 mb-1 flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-3.5 h-3.5 text-rose-400" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "जन्म स्थान (शहर / गाँव का नाम लिखें)" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-stretch gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "text",
                      list: "kundali-milan-places",
                      value: girlPlace,
                      onChange: (e) => setGirlPlace(e.target.value),
                      placeholder: "कन्या का जन्म स्थान लिखें (जैसे: रुद्रपुर, हल्द्वानी, बरेली, दिल्ली...)",
                      className: "flex-1 min-w-0 bg-slate-950 border border-amber-900/60 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-amber-100 placeholder:text-slate-500 focus:outline-none focus:border-amber-500"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    BirthPlaceGpsButton,
                    {
                      size: "md",
                      onSelectPlace: (place) => setGirlPlace(place),
                      title: "कन्या का वर्तमान GPS स्थान चुनें"
                    }
                  )
                ] })
              ] }),
              liveGirlKundali && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-xl bg-rose-950/25 border border-rose-500/35 text-xs space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] text-rose-300 font-bold flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3.5 h-3.5" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "खगोलीय पंचांग से प्राप्त कन्या की ग्रह स्थिति:" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-1.5 text-[11px] text-amber-100", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-slate-950/90 px-2.5 py-1.5 rounded-lg border border-rose-800/40", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-400 block text-[10px]", children: "लग्न (Ascendant):" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("b", { className: "text-rose-300", children: liveGirlKundali.panchang.lagnaName })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-slate-950/90 px-2.5 py-1.5 rounded-lg border border-rose-800/40", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-400 block text-[10px]", children: "चन्द्र राशि (Janma Rashi):" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("b", { className: "text-rose-300", children: liveGirlKundali.panchang.moonRashiName })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-slate-950/90 px-2.5 py-1.5 rounded-lg border border-rose-800/40", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-400 block text-[10px]", children: "जन्म नक्षत्र एवं चरण:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("b", { className: "text-amber-200", children: [
                      liveGirlKundali.panchang.nakshatraName.split(" ")[0],
                      " (चरण",
                      " ",
                      liveGirlKundali.panchang.nakshatraPada,
                      ")"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-slate-950/90 px-2.5 py-1.5 rounded-lg border border-rose-800/40", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-400 block text-[10px]", children: "मांगलिक स्थिति:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "b",
                      {
                        className: liveGirlKundali.doshaAnalysis.manglik.isManglik ? "text-rose-300" : "text-emerald-300",
                        children: liveGirlKundali.doshaAnalysis.manglik.severity
                      }
                    )
                  ] })
                ] })
              ] })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold text-amber-300 mb-1", children: "कन्या की चन्द्र राशि चुनें:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "select",
                  {
                    value: girlManualRashi,
                    onChange: (e) => setGirlManualRashi(e.target.value),
                    className: "w-full bg-slate-950 border border-amber-900/60 rounded-xl px-3 py-2 text-xs sm:text-sm text-amber-100 focus:outline-none focus:border-amber-500",
                    children: VEDIC_RASHIS.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: r, children: r }, r))
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold text-amber-300 mb-1", children: "कन्या का जन्म नक्षत्र चुनें:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "select",
                  {
                    value: girlManualNakshatra,
                    onChange: (e) => setGirlManualNakshatra(e.target.value),
                    className: "w-full bg-slate-950 border border-amber-900/60 rounded-xl px-3 py-2 text-xs sm:text-sm text-amber-100 focus:outline-none focus:border-amber-500",
                    children: VEDIC_NAKSHATRAS.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: n, children: n }, n))
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    setGirlManualRashi(girlNameFallback.rashi);
                    setGirlManualNakshatra(girlNameFallback.nakshatra);
                  },
                  className: "inline-flex items-center gap-1 text-[11px] text-rose-400 hover:underline cursor-pointer",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                      "नाम अक्षर (",
                      girlNameFallback.initialLetter,
                      ") से स्वतः राशि/नक्षत्र भरें"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3 h-3 shrink-0", strokeWidth: 1.5 })
                  ]
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 border-t border-amber-900/40", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-amber-300/80", children: [
            "वर: ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: boyName || "..." }),
            " (",
            milanMode === "astronomical" && liveBoyKundali ? `${liveBoyKundali.panchang.moonRashiName.split(" ")[0]} • ${liveBoyKundali.panchang.nakshatraName.split(" ")[0]}` : boyManualRashi.split(" ")[0],
            ") + कन्या: ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: girlName || "..." }),
            " (",
            milanMode === "astronomical" && liveGirlKundali ? `${liveGirlKundali.panchang.moonRashiName.split(" ")[0]} • ${liveGirlKundali.panchang.nakshatraName.split(" ")[0]}` : girlManualRashi.split(" ")[0],
            ")"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "submit",
              className: "w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-500 hover:from-amber-500 hover:to-yellow-400 text-slate-950 font-bold text-sm sm:text-base shadow-xl shadow-amber-600/30 transition-all cursor-pointer transform hover:-translate-y-0.5",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-5 h-5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "सटीक 36 गुण एवं ग्रह मिलान देखें" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("datalist", { id: "kundali-milan-places", children: POPULAR_PLACES.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: p }, p)) })
      ] })
    ] }),
    milanResult && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "kundali-milan-full-report-container", className: "print-report-container space-y-6 animate-slideUp p-2 bg-[#0d1322] rounded-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative overflow-hidden rounded-2xl bg-gradient-to-b from-[#1b120c] to-[#0c1220] border-2 border-amber-500/60 p-4 sm:p-8 shadow-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row items-center justify-between gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row items-center text-center sm:text-left gap-4 sm:gap-6 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-28 h-28 sm:w-32 sm:h-32 rounded-full border-4 border-amber-500 flex flex-col items-center justify-center bg-slate-950/80 shadow-inner flex-shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl sm:text-4xl font-extrabold text-gold-gradient font-mono", children: milanResult.totalScore }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-slate-400 font-bold", children: "/ 36 गुण" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-amber-400 font-semibold mt-0.5", children: [
              milanResult.compatibilityPercentage,
              "% अनुकूल"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-center sm:justify-start gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40", children: milanResult.overallVerdict }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(VedicTripleCheckBadge, { validation: milanValidation, size: "sm" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-xl sm:text-2xl font-bold font-vedic text-amber-100 mt-2", children: [
              milanResult.boyName,
              " & ",
              milanResult.girlName
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2.5 text-[11px]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 rounded-xl bg-slate-900/90 border border-amber-800/40 text-amber-200 text-left", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-amber-400 font-bold block", children: [
                  "वर: ",
                  milanResult.boyName
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  "लग्न: ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: milanResult.boyLagna }),
                  " • चन्द्र राशि:",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: milanResult.boyRashi })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "block text-slate-300", children: [
                  "नक्षत्र: ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: milanResult.boyNakshatra }),
                  " (चरण ",
                  milanResult.boyPada,
                  ")"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 rounded-xl bg-slate-900/90 border border-rose-800/40 text-rose-200 text-left", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-rose-400 font-bold block", children: [
                  "कन्या: ",
                  milanResult.girlName
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  "लग्न: ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: milanResult.girlLagna }),
                  " • चन्द्र राशि:",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: milanResult.girlRashi })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "block text-slate-300", children: [
                  "नक्षत्र: ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: milanResult.girlNakshatra }),
                  " (चरण ",
                  milanResult.girlPada,
                  ")"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm text-amber-200/90 mt-2.5 max-w-xl leading-relaxed", children: milanResult.verdictDescription })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row md:flex-col gap-2.5 w-full md:w-auto min-w-[220px] no-print", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: handleDownloadMilanPDF,
              disabled: isDownloadingPDF,
              className: "flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-slate-950 font-black text-xs sm:text-sm shadow-lg shadow-amber-500/25 transition-all cursor-pointer disabled:opacity-50",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-4 h-4 text-slate-950" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: isDownloadingPDF ? "६-पृष्ठ विवाह मिलान PDF तैयार हो रही है..." : "बृहत् ६-पृष्ठ ३६-गुण मिलान PDF डाउनलोड करें" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => {
                const targetMilan = activeMilan || milanResult;
                if (targetMilan) printKundaliMilanPDF(targetMilan, language);
              },
              className: "flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-amber-500/40 text-amber-200 font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Printer, { className: "w-4 h-4 text-amber-400" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "ब्राउज़र प्रिंट / PDF सेव करें" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: getWhatsAppLink(getWhatsAppMilanText()),
              target: "_blank",
              rel: "noopener noreferrer",
              className: "flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-bold text-xs sm:text-sm shadow-lg transition-all",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-4 h-4 text-slate-950" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "पण्डित जी से परामर्श (मात्र ₹100)" })
              ]
            }
          ),
          liveMilanCardPayload && /* @__PURE__ */ jsxRuntimeExports.jsx(
            ShareableVedicCardButton,
            {
              payload: liveMilanCardPayload,
              buttonLabel: "WhatsApp Status / परिवार इमेज कार्ड शेयर करें",
              className: "flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-rose-500 via-amber-400 to-yellow-400 hover:from-rose-400 hover:to-yellow-300 text-slate-950 font-black text-xs sm:text-sm shadow-lg transition-all cursor-pointer"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: copyReport,
              className: "flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-300/90 text-xs font-medium transition-colors cursor-pointer border border-amber-900/30",
              children: [
                copiedReport ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-4 h-4 text-emerald-400" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "w-4 h-4" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: copiedReport ? "रिपोर्ट कॉपी हो गई!" : "मिलान पत्रक कॉपी करें" })
              ]
            }
          )
        ] })
      ] }) }),
      milanResult.boyKundali && milanResult.girlKundali && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-5 print-charts-box print-keep-together", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          MiniNorthIndianChart,
          {
            houses: milanResult.boyKundali.lagnaChart,
            title: `वर की लग्न कुंडली (${milanResult.boyName})`,
            subtitle: `लग्न: ${milanResult.boyKundali.panchang.lagnaName} (${milanResult.boyKundali.panchang.lagnaDegreeDMS}) • राशि: ${milanResult.boyRashi}`,
            lagnaDegInt: milanResult.boyKundali.panchang.lagnaDegInt,
            accentColor: "amber"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          MiniNorthIndianChart,
          {
            houses: milanResult.girlKundali.lagnaChart,
            title: `कन्या की लग्न कुंडली (${milanResult.girlName})`,
            subtitle: `लग्न: ${milanResult.girlKundali.panchang.lagnaName} (${milanResult.girlKundali.panchang.lagnaDegreeDMS}) • राशि: ${milanResult.girlRashi}`,
            lagnaDegInt: milanResult.girlKundali.panchang.lagnaDegInt,
            accentColor: "rose"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 print-manglik-card print-keep-together", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl bg-slate-900/80 border border-amber-900/40 space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-bold text-amber-400 flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-4 h-4 text-amber-400" }),
            "मांगलिक एवं कुज दोष विचार (Manglik Assessment)"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 text-[11px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "px-2.5 py-1 rounded bg-slate-950 border border-amber-800/40 text-amber-200", children: [
              "वर: ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: milanResult.manglikStatus.boySeverity }),
              " (लग्न:",
              " ",
              formatHindiHouseOrdinal(milanResult.manglikStatus.boyMarsHouseLagna),
              ", चन्द्र:",
              " ",
              formatHindiHouseOrdinal(milanResult.manglikStatus.boyMarsHouseMoon),
              milanResult.manglikStatus.boyMarsHouseVenus ? `, शुक्र: ${formatHindiHouseOrdinal(milanResult.manglikStatus.boyMarsHouseVenus)}` : "",
              " ",
              "भाव)"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "px-2.5 py-1 rounded bg-slate-950 border border-rose-800/40 text-rose-200", children: [
              "कन्या: ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: milanResult.manglikStatus.girlSeverity }),
              " (लग्न:",
              " ",
              formatHindiHouseOrdinal(milanResult.manglikStatus.girlMarsHouseLagna),
              ", चन्द्र:",
              " ",
              formatHindiHouseOrdinal(milanResult.manglikStatus.girlMarsHouseMoon),
              milanResult.manglikStatus.girlMarsHouseVenus ? `, शुक्र: ${formatHindiHouseOrdinal(milanResult.manglikStatus.girlMarsHouseVenus)}` : "",
              " ",
              "भाव)"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-amber-100/90 leading-relaxed", children: milanResult.manglikStatus.description })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl bg-slate-900/80 border border-amber-900/40 space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-bold text-amber-400 flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "w-4 h-4 text-amber-400" }),
            "ग्रह मैत्री, सप्तम भाव एवं गुरु-शुक्र बल"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-amber-100/90 leading-relaxed", children: [
            "• ",
            milanResult.planetaryHarmony.rashiLordRelation
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-amber-100/90 leading-relaxed", children: [
            "• ",
            milanResult.planetaryHarmony.seventhHouseSummary
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-slate-300 leading-relaxed", children: [
            "• ",
            milanResult.planetaryHarmony.jupiterVenusSummary
          ] })
        ] })
      ] }),
      (() => {
        const ganaK = milanResult.koots[5];
        const bhakootK = milanResult.koots[6];
        const nadiK = milanResult.koots[7];
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4 print-koot-box print-keep-together", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl bg-slate-950/90 border border-amber-700/40 space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-amber-300", children: "१. गण कूट विचार (6 गुण)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-mono font-bold text-yellow-400", children: [
                ganaK?.obtainedPoints ?? 0,
                "/6"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-amber-100/90 leading-relaxed", children: [
              "वर: ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: ganaK?.boyValue }),
              " • वधू: ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: ganaK?.girlValue }),
              "। ",
              ganaK?.verdict
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl bg-slate-950/90 border border-amber-700/40 space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-amber-300", children: "२. भकूट कूट एवं परिहार (7 गुण)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-mono font-bold text-yellow-400", children: [
                bhakootK?.obtainedPoints ?? 0,
                "/7"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-amber-100/90 leading-relaxed", children: [
              bhakootK?.verdict,
              " ",
              bhakootK?.remedy ? `शास्त्रोक्त उपाय: ${bhakootK.remedy}` : ""
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl bg-slate-950/90 border border-amber-700/40 space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-amber-300", children: "३. नाड़ी कूट एवं परिहार (8 गुण)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-mono font-bold text-yellow-400", children: [
                nadiK?.obtainedPoints ?? 0,
                "/8"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-amber-100/90 leading-relaxed", children: [
              "वर: ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: nadiK?.boyValue }),
              " • वधू: ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: nadiK?.girlValue }),
              "। ",
              nadiK?.verdict
            ] })
          ] })
        ] });
      })(),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#0e1424] border border-amber-900/40 rounded-2xl overflow-hidden shadow-xl print-guna-table print-keep-together", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 py-4 bg-slate-950 border-b border-amber-900/30 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-base font-bold font-vedic text-amber-100", children: "अष्टकूट 36 गुणों की प्रमाणिक सारणी (Ashtakoot Guna Table)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-400", children: "बृहत् पाराशर होरा शास्त्र एवं मुहूर्त चिंतामणि के अनुसार वर-कन्या के प्रत्येक कूट का तुलनात्मक अंक" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => setShowAdvancedDetails(!showAdvancedDetails),
              className: "no-print text-xs text-amber-400 hover:underline flex items-center gap-1 cursor-pointer font-semibold",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: showAdvancedDetails ? "संक्षिप्त देखें" : "विस्तार से देखें" }),
                showAdvancedDetails ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-3.5 h-3.5" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full table-fixed text-left text-xs border-collapse vedic-fixed-table", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("colgroup", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("col", { className: "w-[18%]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("col", { className: "w-[15%]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("col", { className: "w-[15%]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("col", { className: "w-[12%]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("col", { className: "w-[40%]" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-slate-900/90 text-amber-300/80 uppercase text-[10px] tracking-wider border-b border-slate-800", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "w-[18%] px-3 py-3 break-words whitespace-normal", children: "कूट का नाम" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("th", { className: "w-[15%] px-3 py-3 break-words whitespace-normal", children: [
              "वर (",
              milanResult.boyName,
              ")"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("th", { className: "w-[15%] px-3 py-3 break-words whitespace-normal", children: [
              "कन्या (",
              milanResult.girlName,
              ")"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "w-[12%] px-3 py-3 break-words whitespace-normal", children: "प्राप्त / कुल गुण" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "w-[40%] px-3 py-3 break-words whitespace-normal", children: "शास्त्रोक्त फल एवं परिहार विचार" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { className: "divide-y divide-slate-800/60", children: [
            milanResult.koots.map((koot, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-slate-900/40 transition-colors align-top", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "w-[18%] px-3 py-3 font-bold text-amber-200 break-words whitespace-normal", children: [
                koot.hindiName,
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-[10px] text-slate-400 font-normal mt-0.5 break-words whitespace-normal", children: koot.meaning })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "w-[15%] px-3 py-3 text-amber-100 font-semibold break-words whitespace-normal", children: koot.boyValue }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "w-[15%] px-3 py-3 text-rose-200 font-semibold break-words whitespace-normal", children: koot.girlValue }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "w-[12%] px-3 py-3 font-mono text-sm break-words whitespace-normal", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-extrabold text-amber-400", children: koot.obtainedPoints }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-slate-500 text-xs", children: [
                  " / ",
                  koot.maxPoints
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "w-[40%] px-3 py-3 break-words whitespace-normal", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: `inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full font-semibold text-[10px] ${koot.status === "favorable" ? "bg-emerald-950/80 text-emerald-300 border border-emerald-500/40" : koot.status === "moderate" ? "bg-amber-950/80 text-amber-300 border border-amber-500/40" : "bg-rose-950/80 text-rose-300 border border-rose-500/40"}`,
                    children: koot.status === "favorable" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3 h-3 shrink-0", strokeWidth: 1.5 }),
                      " शुभ / अनुकूल"
                    ] }) : koot.status === "moderate" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-3 h-3 shrink-0", strokeWidth: 1.5 }),
                      " मध्यम / परिहार युक्त"
                    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-3 h-3 shrink-0", strokeWidth: 1.5 }),
                      " दोष विचारणीय"
                    ] })
                  }
                ),
                showAdvancedDetails && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-slate-300 mt-1 leading-relaxed break-words whitespace-normal", children: koot.verdict }),
                  koot.remedy && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-amber-400 block mt-0.5 italic break-words whitespace-normal", children: [
                    "उपाय: ",
                    koot.remedy
                  ] })
                ] })
              ] })
            ] }, idx)),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-amber-950/40 font-bold border-t-2 border-amber-600/50", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-3.5 text-amber-200 break-words whitespace-normal", colSpan: 3, children: "कुल अष्टकूट गुण योग (Total Ashtakoot Gunas)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "w-[12%] px-3 py-3.5 font-mono text-base text-yellow-400 break-words whitespace-normal", children: [
                milanResult.totalScore,
                " / 36"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "w-[40%] px-3 py-3.5 text-amber-200 text-xs break-words whitespace-normal", children: [
                milanResult.overallVerdict,
                " (",
                milanResult.compatibilityPercentage,
                "%)"
              ] })
            ] })
          ] })
        ] }) }),
        milanResult.boyKundali && milanResult.girlKundali && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-amber-900/40 p-4 sm:p-5 bg-slate-950/60 space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h5", { className: "text-sm font-bold font-vedic text-amber-200 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Compass, { className: "w-4 h-4 text-amber-400" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "वर एवं कन्या की नवग्रह स्पष्ट स्थिति तुलना (9 Planets Sidereal Comparison)" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full table-fixed text-left text-xs border border-slate-800 rounded-xl overflow-hidden border-collapse vedic-fixed-table", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("colgroup", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("col", { className: "w-[18%]" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("col", { className: "w-[41%]" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("col", { className: "w-[41%]" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-slate-900 text-amber-300/90 text-[10px] uppercase", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "w-[18%] px-3 py-2 break-words whitespace-normal", children: "ग्रह (Planet)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("th", { className: "w-[41%] px-3 py-2 break-words whitespace-normal", children: [
                "वर (",
                milanResult.boyName,
                ") — राशि, अंश व भाव"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("th", { className: "w-[41%] px-3 py-2 break-words whitespace-normal", children: [
                "कन्या (",
                milanResult.girlName,
                ") — राशि, अंश व भाव"
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-slate-800/70", children: milanResult.boyKundali.planets.map((bp, idx) => {
              const gp = milanResult.girlKundali?.planets[idx];
              return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-slate-900/40 align-top", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "w-[18%] px-3 py-2 font-bold text-amber-200 break-words whitespace-normal", children: bp.hindiName }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "w-[41%] px-3 py-2 text-amber-100 break-words whitespace-normal", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: bp.rashiName.split(" ")[0] }),
                  " (",
                  bp.fullDegreeDMS,
                  ") •",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-amber-300", children: [
                    bp.houseInLagna,
                    "वां भाव"
                  ] }),
                  " •",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-slate-400", children: [
                    bp.nakshatra.split(" ")[0],
                    " (च.",
                    bp.pada,
                    ")"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "w-[41%] px-3 py-2 text-rose-100 break-words whitespace-normal", children: gp ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: gp.rashiName.split(" ")[0] }),
                  " (",
                  gp.fullDegreeDMS,
                  ") •",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-rose-300", children: [
                    gp.houseInLagna,
                    "वां भाव"
                  ] }),
                  " •",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-slate-400", children: [
                    gp.nakshatra.split(" ")[0],
                    " (च.",
                    gp.pada,
                    ")"
                  ] })
                ] }) : "-" })
              ] }, bp.id);
            }) })
          ] }) })
        ] }),
        (() => {
          const grahaMaitriPts = milanResult.koots[4]?.obtainedPoints ?? 0;
          const ganaPts = milanResult.koots[5]?.obtainedPoints ?? 0;
          const yoniPts = milanResult.koots[3]?.obtainedPoints ?? 0;
          const taraPts = milanResult.koots[2]?.obtainedPoints ?? 0;
          const bhakootPts = milanResult.koots[6]?.obtainedPoints ?? 0;
          const nadiPts = milanResult.koots[7]?.obtainedPoints ?? 0;
          const vashyaPts = milanResult.koots[1]?.obtainedPoints ?? 0;
          const varnaPts = milanResult.koots[0]?.obtainedPoints ?? 0;
          const boyVarna = milanResult.koots[0]?.boyValue || "विप्र";
          const girlVarna = milanResult.koots[0]?.girlValue || "विप्र";
          const boyNadi = milanResult.koots[7]?.boyValue || "आदि";
          const girlNadi = milanResult.koots[7]?.girlValue || "मध्य";
          const rashiLordsMap = {
            1: "मंगल (Mars)",
            2: "शुक्र (Venus)",
            3: "बुध (Mercury)",
            4: "चन्द्र (Moon)",
            5: "सूर्य (Sun)",
            6: "बुध (Mercury)",
            7: "शुक्र (Venus)",
            8: "मंगल (Mars)",
            9: "गुरु (Jupiter)",
            10: "शनि (Saturn)",
            11: "शनि (Saturn)",
            12: "गुरु (Jupiter)"
          };
          const boyH7 = milanResult.boyKundali?.lagnaChart.find((h) => h.houseNumber === 7);
          const girlH7 = milanResult.girlKundali?.lagnaChart.find((h) => h.houseNumber === 7);
          const boy7thLord = (boyH7 ? rashiLordsMap[boyH7.rashiNumber] : "") || milanResult.boyRashiLord || "शुक्र";
          const girl7thLord = (girlH7 ? rashiLordsMap[girlH7.rashiNumber] : "") || milanResult.girlRashiLord || "गुरु";
          const pillars = [
            {
              num: "१",
              title: "मानसिक सामंजस्य एवं स्वभाव मिलान (Mental & Emotional Harmony)",
              badge: `ग्रहमैत्री ${grahaMaitriPts}/5 • गण ${ganaPts}/6`,
              status: grahaMaitriPts >= 4 && ganaPts >= 5 ? "उत्तम" : grahaMaitriPts >= 3 || ganaPts >= 3 ? "संतुलित" : "संवाद आवश्यक",
              tone: grahaMaitriPts >= 4 && ganaPts >= 5 ? "emerald" : grahaMaitriPts >= 3 || ganaPts >= 3 ? "amber" : "rose",
              prediction: grahaMaitriPts >= 4 ? `वर (${milanResult.boyRashiLord}) एवं कन्या (${milanResult.girlRashiLord}) के राशि स्वामियों में स्वाभाविक मित्रता है। वैचारिक समझ गहरी रहेगी तथा निर्णय लेते समय दोनों एक-दूसरे के दृष्टिकोण का सम्मान करेंगे।` : `वर (${milanResult.boyRashiLord}) एवं कन्या (${milanResult.girlRashiLord}) के स्वभाव में भिन्नता के कारण कभी-कभी वैचारिक मतभेद उभर सकते हैं, किंतु धैर्य व खुले संवाद से दांपत्य संतुलन बना रहेगा।`,
              advice: ganaPts === 0 ? "गण भिन्नता के कारण क्रोध या अहं के टकराव से बचें और एक-दूसरे की भावनाओं को प्राथमिकता दें।" : "पारस्परिक विश्वास और संवाद इस संबंध की सबसे बड़ी शक्ति सिद्ध होंगे।"
            },
            {
              num: "२",
              title: "दांपत्य प्रेम, आकर्षण एवं सप्तम भाव/नवांश विचार (Marital Love & Intimacy)",
              badge: `योनि ${yoniPts}/4 • सप्तमेश: ${boy7thLord.split(" ")[0]}/${girl7thLord.split(" ")[0]}`,
              status: yoniPts >= 3 ? "प्रगाढ़ प्रेम" : yoniPts >= 2 ? "अनुकूल स्नेह" : "संयम व समर्पण",
              tone: yoniPts >= 3 ? "emerald" : yoniPts >= 2 ? "amber" : "rose",
              prediction: yoniPts + vashyaPts >= 4 ? `वर के सप्तमेश ${boy7thLord} तथा कन्या के सप्तमेश ${girl7thLord} हैं (${milanResult.planetaryHarmony.seventhHouseSummary})। योनि कूट में ${yoniPts}/4 एवं वश्य कूट में ${vashyaPts}/2 अंक प्राप्त होने से दांपत्य जीवन में गहरा भावनात्मक जुड़ाव एवं पारस्परिक आकर्षण सुदृढ़ रहेगा।` : yoniPts + vashyaPts >= 2.5 ? `वर के सप्तमेश ${boy7thLord} तथा कन्या के सप्तमेश ${girl7thLord} हैं। योनि (${yoniPts}/4) एवं वश्य (${vashyaPts}/2) अंक संतुलित हैं — समय व आपसी विश्वास के साथ दांपत्य स्नेह उत्तरोत्तर प्रगाढ़ होगा।` : `वर के सप्तमेश ${boy7thLord} व कन्या के सप्तमेश ${girl7thLord} हैं, किंतु योनि (${yoniPts}/4) व वश्य (${vashyaPts}/2) अंक न्यून होने से भावनात्मक सामंजस्य विकसित होने में प्रारंभिक धैर्य व संवेदनशीलता आवश्यक रहेगी।`,
              advice: "शुक्रवार को माता लक्ष्मी-नारायण का संयुक्त पूजन करने से दांपत्य प्रेम व आकर्षण में निरंतर वृद्धि होगी।"
            },
            {
              num: "३",
              title: "विवाहोपरांत भाग्योदय, धन एवं आर्थिक समृद्धि (Post-Marriage Fortune)",
              badge: `तारा ${taraPts}/3 • भकूट ${bhakootPts}/7`,
              status: taraPts >= 1.5 && bhakootPts >= 5 ? "श्रेष्ठ भाग्योदय" : taraPts >= 1.5 || bhakootPts >= 4 ? "स्थिर उन्नति" : "नियोजित प्रबंधन",
              tone: taraPts >= 1.5 && bhakootPts >= 5 ? "emerald" : taraPts >= 1.5 || bhakootPts >= 4 ? "amber" : "rose",
              prediction: bhakootPts === 7 ? `भकूट कूट में पूर्ण 7/7 अंक एवं तारा कूट में ${taraPts}/3 अंक होने से विवाह के पश्चात् दोनों के संयुक्त भाग्य में विशेष उन्नति होगी। गृहस्थी में सुख-सुविधा, वाहन व अचल संपत्ति के शुभ योग बनेंगे।` : `तारा कूट (${taraPts}/3) एवं भकूट (${bhakootPts}/7) के अनुसार विवाह के बाद करियर में क्रमिक प्रगति होगी, किंतु बड़े आर्थिक निर्णयों एवं बचत में संयुक्त योजना बनाकर चलना हितकर रहेगा।`,
              advice: "संयुक्त निवेश एवं गृह-लक्ष्मी के सम्मान से परिवार में स्थायी श्रीवृद्धि होगी।"
            },
            {
              num: "४",
              title: "पारिवारिक समरसता, ससुराल एवं सामाजिक प्रतिष्ठा (Family Harmony)",
              badge: `वश्य ${vashyaPts}/2 • वर्ण ${varnaPts}/1`,
              status: vashyaPts >= 1 && varnaPts >= 1 ? "सुखद समन्वय" : "मधुर व्यवहार आवश्यक",
              tone: vashyaPts >= 1 && varnaPts >= 1 ? "emerald" : "amber",
              prediction: grahaMaitriPts >= 3 && varnaPts >= 1 ? `वर (${boyVarna} वर्ण) तथा कन्या (${girlVarna} वर्ण) के मध्य संस्कारों एवं पारिवारिक मूल्यों में अच्छा तालमेल रहेगा। बड़े-बुजुर्गों के आशीर्वाद से समाज में कुल की प्रतिष्ठा बढ़ेगी।` : `वर (${boyVarna} वर्ण) तथा कन्या (${girlVarna} वर्ण) के पारिवारिक दृष्टिकोण में हल्की भिन्नता संभव है; विनम्र वाणी, बड़ों के सम्मान और खुले संवाद से दोनों परिवारों में सौहार्द बना रहेगा।`,
              advice: "पारिवारिक मामलों में बाहरी हस्तक्षेप से बचें तथा घर के वरिष्ठजनों का आदर बनाए रखें।"
            },
            {
              num: "५",
              title: "संतान सुख, वंश वृद्धि एवं नाड़ी-पंचम भाव विश्लेषण (Progeny & Santan Yoga)",
              badge: `नाड़ी ${nadiPts}/8 • कुल ${milanResult.totalScore}/36`,
              status: nadiPts === 8 ? "श्रेष्ठ संतान योग" : "नाड़ी परिहार विचारणीय",
              tone: nadiPts === 8 ? "emerald" : "rose",
              prediction: nadiPts === 8 ? `वर (${boyNadi}) एवं कन्या (${girlNadi}) की नाड़ी भिन्न होने से पूर्ण 8/8 अंक प्राप्त हुए हैं। यह तेजस्वी, स्वस्थ एवं आज्ञाकारी संतान प्राप्ति तथा वंश वृद्धि का प्रबल शुभ संकेत है।` : `दोनों की एक ही '${boyNadi}' होने से नाड़ी कूट में 0/8 अंक हैं। संतान पक्ष एवं स्वास्थ्य सुरक्षा हेतु विवाह पूर्व महामृत्युंजय जप एवं स्वर्ण-नाड़ी दान कराना शास्त्रसम्मत है।`,
              advice: nadiPts === 8 ? "पंचमेश एवं गुरु की कृपा से संतान सुख उत्तम रहेगा।" : "विवाह से पूर्व नाड़ी दोष शांति एवं संतान गोपाल मंत्र का अनुष्ठान अवश्य कराएं।"
            },
            {
              num: "६",
              title: "स्वास्थ्य, दीर्घायु एवं युगल मांगलिक सुरक्षा (Health, Longevity & Manglik)",
              badge: milanResult.manglikStatus.manglikMatch ? "मांगलिक दोष मुक्त/परिहार" : "मंगल शांति आवश्यक",
              status: milanResult.manglikStatus.manglikMatch && nadiPts === 8 ? "पूर्ण दीर्घायु योग" : "वैदिक कवच आवश्यक",
              tone: milanResult.manglikStatus.manglikMatch && nadiPts === 8 ? "emerald" : "amber",
              prediction: `${milanResult.manglikStatus.description} ${nadiPts === 8 ? "नाड़ी शुद्धि के कारण दोनों में उत्तम रोग-प्रतिरोधक क्षमता एवं दीर्घायु सुख बना रहेगा।" : "प्राण-ऊर्जा एवं रक्त प्रकृति के संतुलन हेतु नियमित योग व सात्त्विक जीवनशैली अपनाएं।"}`,
              advice: "प्रत्येक मंगलवार हनुमान चालीसा का पाठ एवं वर्षगांठ पर रुद्राभिषेक दीर्घायु व रक्षा प्रदान करेगा।"
            },
            {
              num: "७",
              title: "आध्यात्मिक उन्नति एवं दीर्घकालिक वैवाहिक भविष्य (Spiritual & Karmic Bond)",
              badge: `${milanResult.compatibilityPercentage}% समग्र अनुकूलता`,
              status: milanResult.totalScore >= 24 ? "उत्कृष्ट वैवाहिक भविष्य" : milanResult.totalScore >= 18 ? "शुभ एवं सफल दाम्पत्य" : "उपायों से कल्याणकारी",
              tone: milanResult.totalScore >= 24 ? "emerald" : milanResult.totalScore >= 18 ? "amber" : "rose",
              prediction: `समग्र 36 गुण मिलान में ${milanResult.totalScore} अंक (${milanResult.compatibilityPercentage}%) प्राप्त हुए हैं। दोनों के नक्षत्र चरणों एवं राशि तत्वों का समन्वय जीवन के उतार-चढ़ाव में एक-दूसरे का संबल बनेगा तथा धर्म-कर्म में रुचि बढ़ाएगा।`,
              advice: "विवाह संस्कार शुद्ध शुभ लग्न में संपन्न करें और नित्य कुलदेवता का स्मरण करें।"
            }
          ];
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-amber-900/40 p-4 sm:p-6 bg-gradient-to-b from-slate-950/90 to-[#0c1220] space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-2 border-b border-amber-500/20 pb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-extrabold uppercase tracking-widest text-amber-400 block", children: "बृहत् वैवाहिक ज्योतिषीय फलादेश • 7-Pillar Compatibility Analysis" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h5", { className: "text-base sm:text-lg font-extrabold font-vedic text-amber-200 mt-0.5", children: [
                  "सप्त-स्तरीय विस्तृत वैवाहिक जीवन भविष्यफल (",
                  milanResult.boyName,
                  " एवं ",
                  milanResult.girlName,
                  ")"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-300 text-xs font-bold", children: "अष्टकूट + सप्तमेश + नवांश आधारित" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3.5", children: pillars.map((p, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: `rounded-xl border p-3.5 sm:p-4 space-y-2 transition-all ${idx === pillars.length - 1 ? "md:col-span-2" : ""} ${p.tone === "emerald" ? "bg-emerald-950/15 border-emerald-500/30" : p.tone === "amber" ? "bg-amber-950/15 border-amber-500/30" : "bg-rose-950/15 border-rose-500/30"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-6 h-6 rounded-full bg-amber-500/20 border border-amber-400/50 text-amber-300 font-bold text-xs flex items-center justify-center shrink-0", children: p.num }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { className: "text-xs sm:text-sm font-bold text-amber-100 font-vedic", children: p.title })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900/90 text-slate-300 border border-slate-700/70", children: p.badge }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: `text-[10px] font-bold px-2 py-0.5 rounded-full border ${p.tone === "emerald" ? "bg-emerald-950/80 text-emerald-300 border-emerald-500/40" : p.tone === "amber" ? "bg-amber-950/80 text-amber-300 border-amber-500/40" : "bg-rose-950/80 text-rose-300 border-rose-500/40"}`,
                          children: p.status
                        }
                      )
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-200 leading-relaxed", children: p.prediction }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-amber-300/90 bg-slate-950/60 border border-amber-500/20 rounded-lg px-2.5 py-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-amber-400", children: "शास्त्रोक्त सूत्र:" }),
                    " ",
                    p.advice
                  ] })
                ]
              },
              idx
            )) })
          ] });
        })(),
        milanResult.deepMatchInsights && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-amber-900/40 p-4 sm:p-6 bg-slate-950/75 space-y-5", children: [
          milanResult.deepMatchInsights.pariharChecks.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h5", { className: "text-sm sm:text-base font-bold font-vedic text-amber-200 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-4 h-4 text-emerald-400" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: localizeVedicText("शास्त्रोक्त दोष परिहार सत्यापन (Shastrokta Parihar Verification)") })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: milanResult.deepMatchInsights.pariharChecks.map((pc, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3.5 rounded-xl bg-slate-900/90 border border-amber-700/40 space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-extrabold text-amber-200", children: localizeVedicText(pc.doshaName) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: `text-[10px] font-bold px-2 py-0.5 rounded-full border ${pc.status === "शुद्ध" ? "bg-emerald-950/80 text-emerald-300 border-emerald-500/40" : pc.status.includes("परिहार") ? "bg-amber-950/80 text-amber-300 border-amber-500/40" : "bg-rose-950/80 text-rose-300 border-rose-500/40"}`,
                    children: localizeVedicText(pc.status)
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-amber-300/90 font-medium", children: localizeVedicText(pc.rule) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-200 leading-relaxed", children: localizeVedicText(pc.detail) })
            ] }, idx)) })
          ] }),
          milanResult.deepMatchInsights.extendedKoots.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h5", { className: "text-sm sm:text-base font-bold font-vedic text-amber-200 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "w-4 h-4 text-yellow-400" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: localizeVedicText("रज्जु, वेध, महेन्द्र एवं स्त्री दीर्घ विशेष मेलापक (Beyond 36-Guna Checks)") })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: milanResult.deepMatchInsights.extendedKoots.map((ek, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3.5 rounded-xl bg-slate-900/90 border border-amber-700/40 space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-extrabold text-amber-200", children: localizeVedicText(ek.name) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: `text-[10px] font-bold px-2 py-0.5 rounded-full border ${ek.status === "शुभ" ? "bg-emerald-950/80 text-emerald-300 border-emerald-500/40" : ek.status === "मध्यम" ? "bg-amber-950/80 text-amber-300 border-amber-500/40" : "bg-rose-950/80 text-rose-300 border-rose-500/40"}`,
                    children: localizeVedicText(ek.status)
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-amber-300/85", children: [
                localizeVedicText("वर"),
                ": ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: localizeVedicText(ek.boyDetail) }),
                " • ",
                localizeVedicText("वधू"),
                ": ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: localizeVedicText(ek.girlDetail) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-200 leading-relaxed", children: localizeVedicText(ek.detail) })
            ] }, idx)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl bg-slate-900/90 border border-amber-600/40 space-y-2 text-xs text-slate-200 leading-relaxed", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("b", { className: "text-amber-300 block mb-0.5", children: [
                  localizeVedicText("नवांश (D-9) एवं महादशा संधि तुलना"),
                  ":"
                ] }),
                localizeVedicText(milanResult.deepMatchInsights.navamshaCrossCheck)
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-2 border-t border-slate-800", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("b", { className: "text-emerald-300 block mb-0.5", children: [
                  localizeVedicText("विवाह शुभ समय एवं दीर्घायु निष्कर्ष"),
                  ":"
                ] }),
                localizeVedicText(milanResult.deepMatchInsights.marriageTimingAndLongevity)
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/40 space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h6", { className: "text-xs sm:text-sm font-bold text-emerald-300", children: [
                localizeVedicText("सुखी दांपत्य हेतु विशेष वैदिक व लाल-किताब उपाय"),
                ":"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1.5 text-xs text-emerald-100 leading-relaxed", children: milanResult.deepMatchInsights.practicalRemedies.map((rem, rIdx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-emerald-400 font-bold", children: [
                  rIdx + 1,
                  "."
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: localizeVedicText(rem) })
              ] }, rIdx)) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-amber-950/30 border-t border-amber-900/40 flex flex-col sm:flex-row items-center justify-between gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(PanditPortrait, { size: "sm", showBadge: false }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-amber-200 block", children: "पण्डित शशांक शर्मा जी का परामर्श:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-300", children: '"यह मिलान चित्रापक्ष (लाहिड़ी) अयनांश एवं दोनों की स्पष्ट चन्द्र-नक्षत्र तथा नवग्रह स्थिति पर आधारित है। विस्तृत विवाह मुहूर्त व परिहार पूजा हेतु संपर्क करें।"' })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: getWhatsAppLink(getWhatsAppMilanText()),
              target: "_blank",
              rel: "noopener noreferrer",
              className: "no-print inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-bold text-xs whitespace-nowrap shadow-md cursor-pointer hover:from-yellow-400 hover:to-amber-400",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "संपूर्ण कुंडली विचार (मात्र ₹100)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3.5 h-3.5 shrink-0", strokeWidth: 1.5 })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-950/90 via-[#0f172a] to-slate-900 border-2 border-amber-500/60 flex flex-col sm:flex-row items-center justify-between gap-4 mt-4 shadow-xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-full bg-amber-500/20 border border-amber-500/50 flex items-center justify-center font-bold text-amber-300 text-2xl font-vedic shadow-md", children: "ॐ" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-black uppercase text-amber-400 tracking-wider block", children: "36 गुण मिलान रिपोर्ट • पण्डित जी ऑनलाइन (Pandit Ji Online)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "text-sm sm:text-base font-extrabold font-vedic text-amber-100 mt-0.5", children: "मार्गदर्शक: आचार्य पण्डित शशांक शर्मा (रुद्रपुर, ऊधम सिंह नगर, उत्तराखण्ड)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-amber-200/80 mt-0.5", children: [
                "वैदिक पुरोहित एवं ज्योतिषाचार्य • सम्पर्क एवं व्हाट्सएप: ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "7017279043" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right text-xs text-amber-300 font-mono", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[10px] uppercase font-bold inline-block mb-1", children: "अष्टकूट मिलान पद्धति" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-bold text-amber-400", children: "panditjionline.online" })
          ] })
        ] })
      ] })
    ] }),
    localHistory.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "no-print bg-[#0e1424] border border-amber-900/40 rounded-2xl p-4 sm:p-6 shadow-xl space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-sm sm:text-base font-bold font-vedic text-amber-100 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(History, { className: "w-4 h-4 text-amber-400" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "आपकी पिछली 36 गुण मिलान हिस्ट्री (36 Gun Milan History)",
              " ",
              currentUser ? `(+91 ${currentUser.phone})` : ""
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-amber-300/75 mt-0.5", children: "किसी भी पूर्व मिलान कार्ड पर क्लिक करें — वर और कन्या का विवरण स्वतः फॉर्म में भर जाएगा और तुरंत गुण मिलान गणना खुल जाएगी" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-amber-400 font-semibold bg-amber-950/60 px-2.5 py-1 rounded-lg border border-amber-700/40", children: [
          "कुल ",
          localHistory.length,
          " मिलान"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3.5", children: localHistory.slice(0, 6).map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          role: "button",
          tabIndex: 0,
          onClick: () => handleReuseHistoryItem(item, true),
          onKeyDown: (e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              handleReuseHistoryItem(item, true);
            }
          },
          className: "group p-4 rounded-xl bg-slate-900/90 hover:bg-amber-950/40 border border-amber-900/40 hover:border-amber-400/80 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-500/10 flex flex-col justify-between gap-3 cursor-pointer transition-all",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs sm:text-sm font-bold text-amber-100 group-hover:text-amber-300 transition-colors block truncate", children: [
                  item.boyName,
                  " & ",
                  item.girlName
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] text-amber-300/85 block mt-0.5", children: [
                  item.boyRashi.split(" ")[0],
                  " + ",
                  item.girlRashi.split(" ")[0],
                  " •",
                  " ",
                  item.timestamp
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-slate-300/90 mt-1.5 space-y-0.5 font-mono", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "truncate flex items-center gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-3 h-3 text-amber-400 shrink-0", strokeWidth: 1.5 }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "truncate", children: [
                      "वर: ",
                      item.boyDob || "1996-03-10",
                      " | ",
                      item.boyTime || "10:00",
                      " |",
                      " ",
                      item.boyPlace || "रुद्रपुर, उत्तराखण्ड"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "truncate flex items-center gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-3 h-3 text-rose-400 shrink-0", strokeWidth: 1.5 }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "truncate", children: [
                      "कन्या: ",
                      item.girlDob || "1996-11-06",
                      " | ",
                      item.girlTime || "14:15",
                      " |",
                      " ",
                      item.girlPlace || "रुद्रपुर, उत्तराखण्ड"
                    ] })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "px-2.5 py-1 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-mono font-bold text-xs flex-shrink-0", children: [
                item.totalScore,
                "/36 गुण"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-2 border-t border-slate-800/80 flex items-center justify-between gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-amber-200/80 truncate", children: item.overallVerdict || "अष्टकूट मिलान रिपोर्ट" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 shrink-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: (e) => handleDownloadHistoryMilanPDF(e, item),
                    disabled: isDownloadingPDF,
                    className: "inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-950/90 hover:bg-emerald-800 text-emerald-200 border border-emerald-500/50 font-bold text-[11px] transition-all cursor-pointer disabled:opacity-50",
                    title: "६-पृष्ठ ३६-गुण मिलान PDF डाउनलोड करें",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-3 h-3 text-emerald-400" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "PDF" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-gradient-to-r from-amber-500/20 to-yellow-500/20 group-hover:from-amber-500 group-hover:to-yellow-400 text-amber-300 group-hover:text-slate-950 border border-amber-500/40 font-bold text-[11px] transition-all", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "w-3 h-3" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "पुनः उपयोग" })
                ] })
              ] })
            ] })
          ]
        },
        item.id
      )) })
    ] })
  ] });
};
export {
  KundaliMilanSection
};
