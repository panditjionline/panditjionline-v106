import { r as reactExports, j as jsxRuntimeExports } from "./vendor-react-CCbeDaYX.js";
import { b as useFestiveTheme, S as SPIRITUAL_TRACKS, v as vedicAudio, P as PanditPortrait, a as SacredIcon } from "./index-AQ5SI3vl.js";
import { S as Sparkles, aa as Bell, ag as History, aU as CirclePlus, Q as VolumeX, T as Volume2, a5 as CircleCheck, N as Pause, O as Play, j as Music, aV as Save, ao as RotateCcw, aR as Trash2, a2 as Clock } from "./vendor-icons-Bk5Rg8-9.js";
import "./vendor-pdf-CpPyS1re.js";
import "./panchang-core-24ia-akc.js";
import "./vendor-astronomy-C8JZdkQu.js";
import "./seo-core-DnNehtWz.js";
const MantraJaapSection = ({
  isGlobalPlaying,
  onToggleGlobalAudio,
  currentUser,
  onSyncJaapData
}) => {
  const { activeTheme, isFestivalActive, isDefaultAsIs } = useFestiveTheme();
  const [selectedMantra, setSelectedMantra] = reactExports.useState(SPIRITUAL_TRACKS[0]);
  const [customMantraText, setCustomMantraText] = reactExports.useState(() => {
    try {
      const preloaded = typeof window !== "undefined" ? window.__PJ_PRELOAD_FESTIVE_MANTRA__ : "";
      if (preloaded) {
        delete window.__PJ_PRELOAD_FESTIVE_MANTRA__;
        return String(preloaded);
      }
      return localStorage.getItem("panditji_custom_mantra_text") || "";
    } catch {
      return "";
    }
  });
  const [isCustomMode, setIsCustomMode] = reactExports.useState(() => {
    try {
      return localStorage.getItem("panditji_custom_mantra_active") === "true" && Boolean(localStorage.getItem("panditji_custom_mantra_text")?.trim());
    } catch {
      return false;
    }
  });
  const [savedCustomMantras, setSavedCustomMantras] = reactExports.useState(() => {
    try {
      const saved = localStorage.getItem("panditji_saved_custom_mantras");
      const parsed = saved ? JSON.parse(saved) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  });
  const [currentCount, setCurrentCount] = reactExports.useState(() => {
    if (currentUser?.jaapStats) return currentUser.jaapStats.currentCount || 0;
    try {
      const saved = localStorage.getItem("panditji_jaap_current");
      return saved ? parseInt(saved, 10) || 0 : 0;
    } catch {
      return 0;
    }
  });
  const [targetCount, setTargetCount] = reactExports.useState(108);
  const [completedMalas, setCompletedMalas] = reactExports.useState(() => {
    if (currentUser?.jaapStats) return currentUser.jaapStats.completedMalas || 0;
    try {
      const saved = localStorage.getItem("panditji_jaap_malas");
      return saved ? parseInt(saved, 10) || 0 : 0;
    } catch {
      return 0;
    }
  });
  const [lifetimeJaap, setLifetimeJaap] = reactExports.useState(() => {
    if (currentUser?.jaapStats) return currentUser.jaapStats.lifetimeJaap || 0;
    try {
      const saved = localStorage.getItem("panditji_jaap_lifetime");
      return saved ? parseInt(saved, 10) || 0 : 0;
    } catch {
      return 0;
    }
  });
  const [jaapHistory, setJaapHistory] = reactExports.useState(() => {
    if (currentUser?.jaapHistory && Array.isArray(currentUser.jaapHistory) && currentUser.jaapHistory.length > 0) {
      return currentUser.jaapHistory;
    }
    try {
      const saved = localStorage.getItem("panditji_jaap_history");
      if (saved) {
        const parsed = JSON.parse(saved);
        return Array.isArray(parsed) ? parsed : [];
      }
    } catch {
    }
    return [];
  });
  const [tapSoundMode, setTapSoundMode] = reactExports.useState("bead");
  const [isAutoChanting, setIsAutoChanting] = reactExports.useState(false);
  const [justCompletedMala, setJustCompletedMala] = reactExports.useState(false);
  const [statusToast, setStatusToast] = reactExports.useState("");
  const [confirmResetAll, setConfirmResetAll] = reactExports.useState(false);
  const [pulseBead, setPulseBead] = reactExports.useState(false);
  const [activeSpeechId, setActiveSpeechId] = reactExports.useState(
    () => vedicAudio.getActiveSpeechId()
  );
  reactExports.useEffect(() => {
    const unsubSpeech = vedicAudio.subscribeSpeech((id) => {
      setActiveSpeechId(id);
    });
    return unsubSpeech;
  }, []);
  const autoChantActiveRef = reactExports.useRef(false);
  const isInitialMountRef = reactExports.useRef(true);
  const lastTapTimeRef = reactExports.useRef(0);
  const stateRef = reactExports.useRef({
    currentCount,
    completedMalas,
    lifetimeJaap,
    targetCount
  });
  reactExports.useEffect(() => {
    stateRef.current = {
      currentCount,
      completedMalas,
      lifetimeJaap,
      targetCount
    };
  }, [currentCount, completedMalas, lifetimeJaap, targetCount]);
  reactExports.useEffect(() => {
    if (currentUser) {
      setCurrentCount(currentUser.jaapStats?.currentCount || 0);
      setCompletedMalas(currentUser.jaapStats?.completedMalas || 0);
      setLifetimeJaap(currentUser.jaapStats?.lifetimeJaap || 0);
      setJaapHistory(Array.isArray(currentUser.jaapHistory) ? currentUser.jaapHistory : []);
    }
  }, [currentUser?.phone]);
  reactExports.useEffect(() => {
    try {
      localStorage.setItem("panditji_jaap_current", String(currentCount));
      localStorage.setItem("panditji_jaap_malas", String(completedMalas));
      localStorage.setItem("panditji_jaap_lifetime", String(lifetimeJaap));
      localStorage.setItem("panditji_jaap_history", JSON.stringify(jaapHistory));
    } catch {
    }
    if (isInitialMountRef.current) {
      isInitialMountRef.current = false;
      return;
    }
    if (onSyncJaapData) {
      onSyncJaapData(
        { currentCount, completedMalas, lifetimeJaap },
        jaapHistory
      );
    }
  }, [currentCount, completedMalas, lifetimeJaap, jaapHistory]);
  reactExports.useEffect(() => {
    return () => {
      autoChantActiveRef.current = false;
    };
  }, []);
  const showToast = (msg) => {
    setStatusToast(msg);
    setTimeout(() => {
      setStatusToast((prev) => prev === msg ? "" : prev);
    }, 3200);
  };
  const activeMantraTitle = isCustomMode && customMantraText.trim() ? `इष्ट मंत्र: ${customMantraText.trim().slice(0, 28)}` : selectedMantra.hindiTitle;
  const activeMantraDeity = isCustomMode ? "इष्ट देवता" : selectedMantra.deity;
  const activeMantraChantText = isCustomMode && customMantraText.trim() ? customMantraText.trim() : selectedMantra.shortMantra || selectedMantra.sanskritLyrics;
  const addHistoryEntry = (countVal, targetVal, isFull, customTitle, customDeity) => {
    if (countVal <= 0) return;
    const now = /* @__PURE__ */ new Date();
    const formattedTime = now.toLocaleString("hi-IN", {
      day: "2-digit",
      month: "short",
      hour: "2-digit",
      minute: "2-digit"
    });
    const newEntry = {
      id: `jaap-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      mantraTitle: activeMantraTitle,
      deity: activeMantraDeity,
      count: countVal,
      target: targetVal,
      isFullMala: isFull,
      timestamp: formattedTime
    };
    setJaapHistory((prev) => [newEntry, ...prev.slice(0, 29)]);
  };
  const incrementCounter = (fromAutoChant = false) => {
    const nowMs = Date.now();
    if (!fromAutoChant && nowMs - lastTapTimeRef.current < 45) {
      return;
    }
    lastTapTimeRef.current = nowMs;
    setPulseBead(true);
    setTimeout(() => setPulseBead(false), 180);
    setConfirmResetAll(false);
    if (typeof navigator !== "undefined" && navigator.vibrate) {
      try {
        navigator.vibrate(25);
      } catch {
      }
    }
    const prevCurrent = stateRef.current.currentCount;
    const prevMalas = stateRef.current.completedMalas;
    const prevLifetime = stateRef.current.lifetimeJaap;
    const currentTarget = stateRef.current.targetCount;
    const nextCurrent = prevCurrent + 1;
    const nextLifetime = prevLifetime + 1;
    setLifetimeJaap(nextLifetime);
    if (nextCurrent >= currentTarget) {
      stateRef.current = {
        ...stateRef.current,
        currentCount: 0,
        completedMalas: prevMalas + 1,
        lifetimeJaap: nextLifetime
      };
      setCurrentCount(0);
      setCompletedMalas(prevMalas + 1);
      vedicAudio.playShankh();
      setTimeout(() => vedicAudio.playTempleBell(0.8), 400);
      setJustCompletedMala(true);
      addHistoryEntry(currentTarget, currentTarget, true);
      setTimeout(() => setJustCompletedMala(false), 4500);
    } else {
      stateRef.current = {
        ...stateRef.current,
        currentCount: nextCurrent,
        lifetimeJaap: nextLifetime
      };
      setCurrentCount(nextCurrent);
      if (!fromAutoChant) {
        if (tapSoundMode === "bead") {
          vedicAudio.playBeadClick();
        } else if (tapSoundMode === "bell") {
          vedicAudio.playTempleBell(0.55);
        } else if (tapSoundMode === "vocal") {
          vedicAudio.playBeadClick();
          vedicAudio.speakMantraOnce(activeMantraChantText);
        }
      } else {
        vedicAudio.playBeadClick();
      }
    }
  };
  reactExports.useEffect(() => {
    autoChantActiveRef.current = isAutoChanting;
    if (!isAutoChanting) return;
    let cancelled = false;
    const runStep = () => {
      if (cancelled || !autoChantActiveRef.current) return;
      vedicAudio.speakMantraOnce(activeMantraChantText, () => {
        if (cancelled || !autoChantActiveRef.current) return;
        incrementCounter(true);
        setTimeout(() => {
          if (!cancelled && autoChantActiveRef.current) {
            runStep();
          }
        }, 650);
      });
    };
    runStep();
    return () => {
      cancelled = true;
    };
  }, [isAutoChanting, activeMantraChantText, targetCount]);
  const handleResetCurrent = () => {
    setIsAutoChanting(false);
    if (currentCount > 0) {
      addHistoryEntry(currentCount, targetCount, false);
      showToast(`वर्तमान ${currentCount} जप इतिहास में सहेज कर काउंटर 0 कर दिया गया।`);
    } else {
      showToast("वर्तमान जप काउंटर पहले से 0 है।");
    }
    setCurrentCount(0);
    setJustCompletedMala(false);
  };
  const handleResetMalasOnly = () => {
    setCompletedMalas(0);
    showToast("पूर्ण माला संख्या रीसेट (0) कर दी गई है।");
  };
  const handleResetAllCounts = () => {
    setIsAutoChanting(false);
    if (currentCount > 0) {
      addHistoryEntry(currentCount, targetCount, false);
    }
    setCurrentCount(0);
    setCompletedMalas(0);
    setLifetimeJaap(0);
    setJustCompletedMala(false);
    setConfirmResetAll(false);
    localStorage.setItem("panditji_jaap_current", "0");
    localStorage.setItem("panditji_jaap_malas", "0");
    localStorage.setItem("panditji_jaap_lifetime", "0");
    showToast("सभी जप काउंट (वर्तमान जप, पूर्ण माला एवं कुल संचित जप) शून्य (0) कर दिए गए हैं।");
  };
  const handleSaveCurrentToHistory = () => {
    if (currentCount <= 0) {
      showToast("इतिहास में जोड़ने के लिए कम से कम 1 जप करें।");
      return;
    }
    addHistoryEntry(currentCount, targetCount, currentCount >= targetCount);
    showToast(`${activeMantraTitle} के ${currentCount} जप इतिहास में दर्ज कर लिए गए!`);
  };
  const handleClearHistory = () => {
    setJaapHistory([]);
    localStorage.removeItem("panditji_jaap_history");
    showToast("पिछला जप इतिहास साफ़ कर दिया गया है।");
  };
  const handleDeleteHistoryItem = (id) => {
    setJaapHistory((prev) => prev.filter((item) => item.id !== id));
  };
  const progressPercentage = Math.min(100, Math.round(currentCount / targetCount * 100));
  const totalVisualBeads = 27;
  const activeVisualBeadIndex = Math.floor(currentCount / targetCount * totalVisualBeads);
  const lastHistoryItem = jaapHistory.length > 0 ? jaapHistory[0] : null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "w-full max-w-full overflow-x-hidden space-y-4 sm:space-y-6 animate-fadeIn scroll-mt-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative overflow-hidden rounded-2xl bg-gradient-to-r from-amber-950/90 via-[#1b1107] to-[#0f172a] border border-amber-600/40 p-4 sm:p-7 shadow-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start sm:items-center gap-3 sm:gap-4 min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(PanditPortrait, { size: "lg", showBadge: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold mb-1 border border-amber-500/40", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3 h-3 text-yellow-400", strokeWidth: 1.5 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "आचार्य पण्डित शशांक शर्मा • डिजिटल 108 रुद्राक्ष जप माला एवं साधना" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl sm:text-3xl font-bold font-vedic text-amber-100", children: "वैदिक मंत्र जप काउंटर एवं साधना इतिहास" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm text-amber-200/80 mt-1 max-w-2xl", children: "अपना इष्ट मंत्र चुनें, रुद्राक्ष माला पर जप करें, अपना पिछला जप इतिहास देखें और आवश्यकतानुसार किसी भी या सभी काउंट को रीसेट करें।" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => vedicAudio.playTempleBell(0.8),
            className: "px-3.5 py-2 rounded-xl bg-amber-950/80 hover:bg-amber-900 text-amber-200 border border-amber-600/40 text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-md transition-all",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "w-4 h-4 text-amber-400", strokeWidth: 1.5 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "मंदिर घंटी बजाएं" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => vedicAudio.playShankh(),
            className: "px-3.5 py-2 rounded-xl bg-amber-950/80 hover:bg-amber-900 text-amber-200 border border-amber-600/40 text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-md transition-all",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "shankh", className: "w-4 h-4 text-amber-400" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "मंगल शंख बजाएं" })
            ]
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7 min-w-0 bg-[#0d1322] border border-amber-700/40 rounded-2xl p-4 sm:p-7 shadow-2xl flex flex-col justify-between space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-xl bg-slate-900/90 border border-amber-900/40 flex flex-col items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full flex items-center justify-between text-[11px] text-slate-400", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "वर्तमान जप संख्या" }),
              currentCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: handleResetCurrent,
                  className: "text-[10px] text-amber-400 hover:text-rose-400 underline cursor-pointer",
                  title: "वर्तमान जप रीसेट करें",
                  children: "रीसेट"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xl sm:text-2xl font-extrabold text-amber-300 font-mono my-1", children: [
              currentCount,
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-slate-400", children: [
                "/ ",
                targetCount
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-xl bg-slate-900/90 border border-amber-900/40 flex flex-col items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full flex items-center justify-between text-[11px] text-slate-400", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "पूर्ण माला (108)" }),
              completedMalas > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: handleResetMalasOnly,
                  className: "text-[10px] text-amber-400 hover:text-rose-400 underline cursor-pointer",
                  title: "पूर्ण माला संख्या 0 करें",
                  children: "रीसेट"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xl sm:text-2xl font-extrabold text-emerald-400 font-mono my-1", children: [
              completedMalas,
              " माला"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-xl bg-slate-900/90 border border-amber-900/40 flex flex-col items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full flex items-center justify-between text-[11px] text-slate-400", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "कुल संचित जप" }),
              (lifetimeJaap > 0 || completedMalas > 0 || currentCount > 0) && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setConfirmResetAll(true),
                  className: "text-[10px] text-rose-400 hover:text-rose-300 underline cursor-pointer",
                  title: "सभी काउंट रीसेट करें",
                  children: "सब रीसेट"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl sm:text-2xl font-extrabold text-yellow-400 font-mono my-1", children: lifetimeJaap })
          ] })
        ] }),
        lastHistoryItem && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-3.5 py-2 rounded-xl bg-amber-950/30 border border-amber-700/30 flex flex-wrap items-center justify-between gap-2 text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-amber-200", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(History, { className: "w-3.5 h-3.5 text-amber-400 flex-shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "पिछला जप रिकॉर्ड:" }),
              " ",
              lastHistoryItem.mantraTitle.split(" (")[0],
              " —",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsxs("b", { className: "text-emerald-400", children: [
                lastHistoryItem.count,
                " जप"
              ] }),
              " ",
              lastHistoryItem.isFullMala ? "(माला पूर्ण)" : ""
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-slate-400 font-mono", children: lastHistoryItem.timestamp })
        ] }),
        statusToast && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-2.5 rounded-xl bg-amber-500/20 border border-amber-500/50 text-amber-200 text-xs font-semibold text-center animate-fadeIn flex items-center justify-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "sparkles", className: "w-3.5 h-3.5 text-amber-300 shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: statusToast })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-amber-950/60 via-[#17110b] to-slate-900/95 border-2 border-amber-500/60 shadow-xl space-y-3 min-w-0", children: [
          !isDefaultAsIs && activeTheme?.sacredMantra && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: `p-3 rounded-xl border ${activeTheme.bannerBgClass} ${activeTheme.bannerBorderClass} flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 shadow-md`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-1.5 text-[10px] font-extrabold text-yellow-300 uppercase tracking-wider", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: activeTheme.deityIcon, className: "w-4 h-4 text-yellow-300 shrink-0" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: isFestivalActive ? `आज का विशेष पर्व सिद्ध मंत्र (${activeTheme.subDayLabelHi || activeTheme.nameHi})` : `आज के वार का सिद्ध मंत्र (${activeTheme.subDayLabelHi || activeTheme.nameHi})` })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs sm:text-sm font-black font-vedic text-white mt-0.5 break-words leading-relaxed", children: [
                    "“",
                    activeTheme.sacredMantra,
                    "”"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      const mText = activeTheme.sacredMantra;
                      setCustomMantraText(mText);
                      setIsCustomMode(true);
                      try {
                        localStorage.setItem("panditji_custom_mantra_text", mText);
                        localStorage.setItem("panditji_custom_mantra_active", "true");
                      } catch {
                      }
                      vedicAudio.playCrispTempleBell(0.75);
                      showToast(`पर्व सिद्ध मंत्र "${mText}" १०८ माला काउंटर पर सेट हो गया!`);
                    },
                    className: `px-3 py-1.5 rounded-xl text-[11px] font-black border cursor-pointer transition-all shadow-sm inline-flex items-center gap-1.5 ${isCustomMode && customMantraText.trim() === activeTheme.sacredMantra.trim() ? "bg-emerald-500 text-slate-950 border-emerald-200" : "bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 text-slate-950 border-yellow-200"}`,
                    children: isCustomMode && customMantraText.trim() === activeTheme.sacredMantra.trim() ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "check", className: "w-3.5 h-3.5 text-slate-950" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "१०८ माला पर सक्रिय" })
                    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "mala", className: "w-3.5 h-3.5 text-slate-950" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "इस पर्व मंत्र का १०८ जप करें" })
                    ] })
                  }
                ) })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-slate-950/90 border border-amber-600/40 rounded-xl p-2.5 sm:p-3 space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-xs font-bold text-amber-300 flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CirclePlus, { className: "w-3.5 h-3.5 text-yellow-400 flex-shrink-0", strokeWidth: 1.5 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "अपना मंत्र स्वयं लिखें (काउंटर के ऊपर दिखाने हेतु):" })
              ] }),
              isCustomMode && customMantraText.trim() && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    setIsCustomMode(false);
                    localStorage.setItem("panditji_custom_mantra_active", "false");
                  },
                  className: "text-[11px] px-2 py-0.5 rounded-md bg-slate-800 hover:bg-slate-700 text-amber-300 border border-amber-700/40 cursor-pointer",
                  children: "वैदिक सूची वाला मंत्र चुनें"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  placeholder: "यहाँ अपना मंत्र लिखें (जैसे: ॐ नमः शिवाय, श्री राधा, ॐ कुलदेवतायै नमः)...",
                  value: customMantraText,
                  onChange: (e) => {
                    const val = e.target.value;
                    setCustomMantraText(val);
                    localStorage.setItem("panditji_custom_mantra_text", val);
                    if (val.trim()) {
                      setIsCustomMode(true);
                      localStorage.setItem("panditji_custom_mantra_active", "true");
                    } else {
                      setIsCustomMode(false);
                      localStorage.setItem("panditji_custom_mantra_active", "false");
                    }
                  },
                  className: "flex-1 bg-slate-900 border border-amber-500/50 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-amber-100 placeholder:text-slate-400 focus:outline-none focus:border-yellow-400 font-medium"
                }
              ),
              customMantraText.trim() && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      const clean = customMantraText.trim();
                      if (!clean) return;
                      setIsCustomMode(true);
                      localStorage.setItem("panditji_custom_mantra_active", "true");
                      if (!savedCustomMantras.includes(clean)) {
                        const next = [clean, ...savedCustomMantras].slice(0, 6);
                        setSavedCustomMantras(next);
                        localStorage.setItem("panditji_saved_custom_mantras", JSON.stringify(next));
                      }
                      showToast(`आपका मंत्र "${clean}" काउंटर के ऊपर सेट कर दिया गया है!`);
                    },
                    className: "px-3.5 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-yellow-400 hover:to-amber-400 text-slate-950 font-extrabold text-xs whitespace-nowrap cursor-pointer shadow-md",
                    children: "काउंटर पर सेट करें"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      setCustomMantraText("");
                      setIsCustomMode(false);
                      localStorage.removeItem("panditji_custom_mantra_text");
                      localStorage.setItem("panditji_custom_mantra_active", "false");
                    },
                    className: "px-2.5 py-2 rounded-xl bg-slate-800 hover:bg-rose-950/80 text-slate-300 hover:text-rose-300 text-xs font-semibold cursor-pointer",
                    title: "हटाएं",
                    children: "साफ़ करें"
                  }
                )
              ] })
            ] }),
            savedCustomMantras.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 flex-wrap pt-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-amber-400/90 font-semibold", children: "आपके सहेजे मंत्र:" }),
              savedCustomMantras.map((mText, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: `inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] border cursor-pointer transition-all ${isCustomMode && customMantraText.trim() === mText ? "bg-amber-500 text-slate-950 font-bold border-yellow-300" : "bg-slate-900 text-amber-200 border-amber-800/50 hover:border-amber-500"}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "span",
                      {
                        onClick: () => {
                          setCustomMantraText(mText);
                          setIsCustomMode(true);
                          localStorage.setItem("panditji_custom_mantra_text", mText);
                          localStorage.setItem("panditji_custom_mantra_active", "true");
                        },
                        className: "inline-flex items-center gap-1",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "om", className: "w-3 h-3 shrink-0" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: mText })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: (e) => {
                          e.stopPropagation();
                          const next = savedCustomMantras.filter((item) => item !== mText);
                          setSavedCustomMantras(next);
                          localStorage.setItem("panditji_saved_custom_mantras", JSON.stringify(next));
                        },
                        className: "ml-1 text-[10px] opacity-75 hover:opacity-100",
                        title: "हटाएं",
                        children: "×"
                      }
                    )
                  ]
                },
                idx
              ))
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-1.5 pt-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-1.5 text-xs text-amber-400 font-semibold", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-left break-words inline-flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "om", className: "w-3.5 h-3.5 text-amber-400 shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: isCustomMode && customMantraText.trim() ? "आपका लिखा हुआ जप मंत्र" : `चयनित जप मंत्र: ${selectedMantra.hindiTitle}` })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 flex-shrink-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      const chantToSpeak = isCustomMode && customMantraText.trim() ? customMantraText.trim() : `${selectedMantra.hindiTitle}। ${selectedMantra.sanskritLyrics}। भावार्थ: ${selectedMantra.meaning}`;
                      if (activeSpeechId !== "jaap-active-mantra-speech") {
                        vedicAudio.playTempleBell(0.6);
                      }
                      vedicAudio.toggleSpeakText(chantToSpeak, "jaap-active-mantra-speech");
                    },
                    className: `px-2.5 py-0.5 rounded-full text-[11px] font-bold flex items-center gap-1 cursor-pointer border transition-all ${activeSpeechId === "jaap-active-mantra-speech" ? "bg-emerald-500 text-slate-950 border-emerald-300" : "bg-amber-500/20 hover:bg-amber-500/30 text-amber-200 border-amber-400/50"}`,
                    children: activeSpeechId === "jaap-active-mantra-speech" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(VolumeX, { className: "w-3 h-3" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "मंत्र रोकें" })
                    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Volume2, { className: "w-3 h-3 text-yellow-400" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "मंत्र उच्चारण सुनें" })
                    ] })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30", children: isCustomMode && customMantraText.trim() ? "स्वयं का इष्ट मंत्र" : selectedMantra.deity })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 sm:p-4 rounded-xl bg-gradient-to-r from-[#261405] via-[#1c1008] to-[#261405] border border-amber-500/50 shadow-inner", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg sm:text-2xl font-extrabold font-serif text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-100 leading-relaxed break-words", children: isCustomMode && customMantraText.trim() ? customMantraText.trim() : selectedMantra.sanskritLyrics }) }),
            !isCustomMode && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-amber-200/80", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("b", { className: "text-amber-400", children: "अर्थ:" }),
              " ",
              selectedMantra.meaning
            ] })
          ] })
        ] }),
        justCompletedMala && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3.5 rounded-xl bg-emerald-950/90 border border-emerald-500/60 text-emerald-200 flex items-center justify-center gap-2 text-xs sm:text-sm font-bold animate-bounce", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-5 h-5 text-emerald-400 flex-shrink-0", strokeWidth: 1.5 }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "अति शुभ! आपकी 1 माला (",
            targetCount,
            " जप) पूर्ण हुई और जप इतिहास में दर्ज हो गई!"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "shankh", className: "w-4 h-4 text-emerald-300 shrink-0" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col items-center justify-center py-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "w-full h-full -rotate-90", viewBox: "0 0 240 240", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "circle",
              {
                cx: "120",
                cy: "120",
                r: "102",
                fill: "none",
                stroke: "rgba(180, 83, 9, 0.2)",
                strokeWidth: "6"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "circle",
              {
                cx: "120",
                cy: "120",
                r: "102",
                fill: "none",
                stroke: "#f59e0b",
                strokeWidth: "6",
                strokeDasharray: 2 * Math.PI * 102,
                strokeDashoffset: 2 * Math.PI * 102 * (1 - currentCount / targetCount),
                strokeLinecap: "round",
                className: "transition-all duration-200"
              }
            ),
            Array.from({ length: totalVisualBeads }).map((_, idx) => {
              const angle = idx / totalVisualBeads * 2 * Math.PI;
              const bx = 120 + 102 * Math.cos(angle);
              const by = 120 + 102 * Math.sin(angle);
              const isPassed = idx <= activeVisualBeadIndex && currentCount > 0;
              const isSumeru = idx === 0;
              return /* @__PURE__ */ jsxRuntimeExports.jsx(
                "circle",
                {
                  cx: bx,
                  cy: by,
                  r: isSumeru ? 8 : isPassed ? 6.5 : 5,
                  fill: isSumeru ? "#ef4444" : isPassed ? "#f59e0b" : "#451a03",
                  stroke: isPassed ? "#fef3c7" : "#92400e",
                  strokeWidth: "1.5",
                  className: "transition-all duration-150"
                },
                idx
              );
            })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => incrementCounter(false),
              className: `absolute w-44 h-44 sm:w-48 sm:h-48 rounded-full bg-gradient-to-b from-amber-600 via-amber-700 to-[#3b1704] border-4 border-amber-400/80 shadow-2xl shadow-amber-600/30 flex flex-col items-center justify-center text-center p-4 cursor-pointer select-none transition-transform active:scale-95 ${pulseBead ? "scale-95 ring-4 ring-yellow-400/60" : "hover:scale-[1.02]"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-widest text-amber-200/90", children: "रुद्राक्ष जप माला" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-4xl sm:text-5xl font-extrabold text-white font-mono my-1 drop-shadow", children: currentCount }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-amber-200 bg-black/30 px-3 py-1 rounded-full border border-amber-400/30", children: "जप करें (+1)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-amber-300/80 mt-1", children: [
                  "(",
                  progressPercentage,
                  "% पूर्ण)"
                ] })
              ]
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 pt-3 border-t border-amber-900/40", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-amber-300", children: "जप संख्या लक्ष्य:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap items-center gap-1.5", children: [11, 21, 51, 108, 1008].map((num) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  if (currentCount > 0) {
                    addHistoryEntry(currentCount, targetCount, false);
                  }
                  setTargetCount(num);
                  setCurrentCount(0);
                },
                className: `px-3 py-1 rounded-lg text-xs font-bold cursor-pointer transition-all ${targetCount === num ? "bg-amber-500 text-slate-950 shadow-md" : "bg-slate-900 text-slate-300 border border-amber-900/40 hover:text-amber-200"}`,
                children: num === 108 ? "108 (1 माला)" : num
              },
              num
            )) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-amber-300", children: "स्पर्श ध्वनि विकल्प:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap items-center gap-1.5", children: [
              { id: "bead", icon: "mala", label: "रुद्राक्ष मनका" },
              { id: "bell", icon: "bell", label: "मंदिर घंटी" },
              { id: "vocal", icon: "volume", label: "मंत्र उच्चारण" },
              { id: "silent", icon: "mute", label: "मौन जप" }
            ].map((mode) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => setTapSoundMode(mode.id),
                className: `px-2.5 py-1 rounded-lg text-xs font-semibold cursor-pointer transition-all inline-flex items-center gap-1.5 ${tapSoundMode === mode.id ? "bg-amber-600/30 text-amber-200 border border-amber-500" : "bg-slate-900 text-slate-400 border border-slate-800 hover:text-amber-200"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: mode.icon, className: "w-3.5 h-3.5 shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: mode.label })
                ]
              },
              mode.id
            )) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-2 pt-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => setIsAutoChanting(!isAutoChanting),
                  className: `px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-1.5 cursor-pointer transition-all shadow-md ${isAutoChanting ? "bg-emerald-600 text-slate-950" : "bg-amber-500/20 hover:bg-amber-500/30 text-amber-200 border border-amber-500/40"}`,
                  children: [
                    isAutoChanting ? /* @__PURE__ */ jsxRuntimeExports.jsx(Pause, { className: "w-4 h-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "w-4 h-4" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: isAutoChanting ? "स्वतः जप चल रहा है (रोकें)" : "स्वतः मंत्र उच्चारण व जप" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => onToggleGlobalAudio(
                    selectedMantra.toneFrequency,
                    activeMantraChantText
                  ),
                  className: `px-3.5 py-2.5 rounded-xl font-bold text-xs flex items-center gap-1.5 cursor-pointer border transition-all ${isGlobalPlaying ? "bg-amber-500 text-slate-950 border-amber-400" : "bg-slate-900 text-amber-300 border-amber-700/40 hover:bg-slate-800"}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Music, { className: "w-4 h-4" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: isGlobalPlaying ? "तानपुरा बंद करें" : "तानपुरा ध्वनि चलाएं" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: handleSaveCurrentToHistory,
                className: "px-3 py-2.5 rounded-xl bg-emerald-950/70 hover:bg-emerald-900/70 text-emerald-300 border border-emerald-600/40 text-xs font-semibold flex items-center gap-1.5 cursor-pointer transition-colors",
                title: "वर्तमान जप संख्या को इतिहास में सहेजें",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "w-3.5 h-3.5" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "इतिहास में सहेजें" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-xl bg-slate-950/90 border border-amber-900/40 flex flex-wrap items-center justify-between gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-semibold text-slate-300 flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "w-3.5 h-3.5 text-amber-400" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "काउंटर रीसेट विकल्प:" })
            ] }),
            !confirmResetAll ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: handleResetCurrent,
                  className: "px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-amber-950 text-amber-200 border border-amber-700/40 text-xs font-semibold cursor-pointer transition-colors",
                  children: "वर्तमान जप रीसेट (0)"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: handleResetMalasOnly,
                  className: "px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-amber-950 text-amber-200 border border-amber-700/40 text-xs font-semibold cursor-pointer transition-colors",
                  children: "माला रीसेट (0)"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setConfirmResetAll(true),
                  className: "px-3 py-1.5 rounded-lg bg-rose-950/70 hover:bg-rose-900 text-rose-200 border border-rose-600/40 text-xs font-bold cursor-pointer transition-colors",
                  children: "सभी काउंट रीसेट करें"
                }
              )
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-rose-300 font-semibold", children: "क्या सभी काउंट (वर्तमान, माला व कुल जप) 0 करें?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: handleResetAllCounts,
                  className: "px-3 py-1 rounded-lg bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold cursor-pointer",
                  children: "हाँ, सब 0 करें"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setConfirmResetAll(false),
                  className: "px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 text-xs font-semibold cursor-pointer",
                  children: "रद्द करें"
                }
              )
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5 min-w-0 flex flex-col gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#0d1322] border border-amber-700/50 rounded-2xl p-4 sm:p-5 shadow-xl space-y-3 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-amber-900/40 pb-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(History, { className: "w-5 h-5 text-amber-400" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-bold font-vedic text-amber-100", children: "पिछला जप इतिहास" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-slate-400", children: "आपके द्वारा किए गए मंत्र जप एवं पूर्ण मालाओं का विवरण" })
              ] })
            ] }),
            jaapHistory.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: handleClearHistory,
                className: "px-2.5 py-1 rounded-lg bg-rose-950/60 hover:bg-rose-900/70 text-rose-300 border border-rose-700/40 text-[11px] font-semibold flex items-center gap-1 cursor-pointer transition-colors",
                title: "संपूर्ण इतिहास साफ़ करें",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3 h-3" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "इतिहास मिटाएं" })
                ]
              }
            )
          ] }),
          jaapHistory.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-6 px-3 rounded-xl bg-slate-900/60 border border-amber-900/20 space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-6 h-6 text-amber-500/40 mx-auto" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-amber-200/80", children: "अभी कोई पिछला जप इतिहास दर्ज नहीं है।" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-slate-400", children: 'जब आप 1 माला पूर्ण करेंगे, काउंटर रीसेट करेंगे या "इतिहास में सहेजें" दबाएंगे, तो आपका पिछला जप यहाँ दिखाई देगा।' })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2 max-h-60 overflow-y-auto pr-1", children: jaapHistory.map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "p-3 rounded-xl bg-slate-900/90 border border-amber-900/40 flex items-center justify-between gap-2",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                    idx === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold", children: "नवीनतम" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-amber-100 truncate", children: item.mantraTitle.split(" (")[0] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-[11px] text-slate-400 mt-0.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item.deity }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "•" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono", children: item.timestamp })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-shrink-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "span",
                    {
                      className: `text-xs font-extrabold font-mono px-2 py-0.5 rounded-lg inline-flex items-center gap-1 ${item.isFullMala ? "bg-emerald-950 text-emerald-300 border border-emerald-500/40" : "bg-amber-950/80 text-amber-300 border border-amber-600/30"}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                          item.count,
                          " जप"
                        ] }),
                        item.isFullMala && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "check", className: "w-3 h-3 text-emerald-400" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "माला" })
                        ] })
                      ]
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => handleDeleteHistoryItem(item.id),
                      className: "p-1 text-slate-500 hover:text-rose-400 cursor-pointer",
                      title: "यह रिकॉर्ड हटाएं",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3.5 h-3.5" })
                    }
                  )
                ] })
              ]
            },
            item.id
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#0d1322] border border-amber-900/40 rounded-2xl p-5 flex flex-col justify-between space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between border-b border-amber-900/30 pb-3 mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-base sm:text-lg font-bold font-vedic text-amber-100", children: [
                "सिद्ध वैदिक एवं पौराणिक मंत्र संग्रह (",
                SPIRITUAL_TRACKS.length,
                " मंत्र)"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-400", children: "जिस मंत्र का जप या श्रवण करना हो, उस पर क्लिक करें" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2.5 max-h-[340px] overflow-y-auto pr-1", children: SPIRITUAL_TRACKS.map((m) => {
              const isSelected = !isCustomMode && selectedMantra.id === m.id;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  onClick: () => {
                    if (currentCount > 0 && selectedMantra.id !== m.id) {
                      addHistoryEntry(currentCount, targetCount, false);
                    }
                    setIsCustomMode(false);
                    localStorage.setItem("panditji_custom_mantra_active", "false");
                    setSelectedMantra(m);
                    if (isGlobalPlaying) {
                      vedicAudio.playTrack(m.toneFrequency, m.shortMantra || m.sanskritLyrics);
                    }
                  },
                  className: `p-3.5 rounded-xl border transition-all cursor-pointer ${isSelected ? "bg-amber-950/50 border-amber-500 shadow-lg" : "bg-slate-900/75 border-amber-900/30 hover:border-amber-700/60"}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] px-2 py-0.5 rounded bg-amber-500/15 text-amber-300 font-semibold", children: [
                          m.deity,
                          " • ",
                          m.category
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-bold text-amber-100 mt-1", children: m.hindiTitle })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          type: "button",
                          onClick: (e) => {
                            e.stopPropagation();
                            setIsCustomMode(false);
                            localStorage.setItem("panditji_custom_mantra_active", "false");
                            setSelectedMantra(m);
                            const cardSpeechId = `jaap-card-mantra-${m.id}`;
                            if (activeSpeechId === cardSpeechId) {
                              vedicAudio.stopSingleSpeech();
                            } else {
                              vedicAudio.playTempleBell(0.6);
                              vedicAudio.toggleSpeakText(
                                `${m.hindiTitle}। ${m.sanskritLyrics}। अर्थ: ${m.meaning}`,
                                cardSpeechId
                              );
                            }
                          },
                          className: `px-2.5 py-1 rounded-lg text-xs font-bold flex items-center gap-1 flex-shrink-0 transition-colors cursor-pointer ${activeSpeechId === `jaap-card-mantra-${m.id}` ? "bg-emerald-500 text-slate-950 shadow-md" : "bg-amber-500/20 hover:bg-amber-500 text-amber-300 hover:text-slate-950"}`,
                          children: activeSpeechId === `jaap-card-mantra-${m.id}` ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(VolumeX, { className: "w-3.5 h-3.5" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "रोकें" })
                          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Volume2, { className: "w-3.5 h-3.5" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "सुनें" })
                          ] })
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-serif text-amber-200/95 mt-2 bg-slate-950/70 p-2 rounded-lg border border-amber-900/30", children: m.sanskritLyrics }),
                    m.benefits && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-emerald-300/90 mt-1.5 flex items-start gap-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "sparkles", className: "w-3 h-3 text-emerald-400 shrink-0 mt-0.5" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                        "लाभ: ",
                        m.benefits
                      ] })
                    ] })
                  ]
                },
                m.id
              );
            }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3.5 rounded-xl bg-slate-900/90 border border-amber-800/40 space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-xs font-bold text-amber-300 flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CirclePlus, { className: "w-3.5 h-3.5 text-amber-400" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "अपना इष्ट / गुरु मंत्र लिखकर काउंटर के ऊपर दिखाएं:" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  placeholder: "जैसे: ॐ कुलदेवतायै नमः या राधे राधे...",
                  value: customMantraText,
                  onChange: (e) => {
                    const val = e.target.value;
                    setCustomMantraText(val);
                    localStorage.setItem("panditji_custom_mantra_text", val);
                    if (val.trim()) {
                      setIsCustomMode(true);
                      localStorage.setItem("panditji_custom_mantra_active", "true");
                    } else {
                      setIsCustomMode(false);
                      localStorage.setItem("panditji_custom_mantra_active", "false");
                    }
                  },
                  className: "flex-1 bg-slate-950 border border-amber-900/60 rounded-xl px-3 py-2 text-xs text-amber-100 placeholder:text-slate-500 focus:outline-none focus:border-amber-500"
                }
              ),
              isCustomMode && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    setIsCustomMode(false);
                    localStorage.setItem("panditji_custom_mantra_active", "false");
                  },
                  className: "px-3 py-2 rounded-xl bg-slate-800 text-xs text-amber-300 font-semibold cursor-pointer",
                  children: "सूची से चुनें"
                }
              )
            ] })
          ] })
        ] })
      ] })
    ] })
  ] });
};
export {
  MantraJaapSection
};
