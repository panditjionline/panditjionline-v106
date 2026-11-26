import { r as reactExports, j as jsxRuntimeExports } from "./vendor-react-CCbeDaYX.js";
import { u as useLanguage, b as useFestiveTheme, l as getTodayFestivalInfo, h as getTodayPanchang, v as vedicAudio, P as PanditPortrait, a as SacredIcon, _ as claimDailyPunyaPoint, $ as buildNinePartPanchangCacheKey, a0 as getCachedAstrologicalData, a1 as setCachedAstrologicalData, s as setLivePageCardPayload, a2 as LiveTodayPanchangRibbon, a3 as CalendarCellIcon, a4 as SacredFeatureIconBox } from "./index-AQ5SI3vl.js";
import { m as mapAppLanguageToLocale, e as defaultTextIntelligenceEngine, o as hasActiveWindowText, p as buildPanchangShastricSummaryForShare, q as getDynamicPradoshKaalDisplay, r as getMuhuratKaalOverlapTag, t as stripLegacyKaalConflictTag } from "./professionalSocialPostBuilder-DF74SzUH.js";
import { S as Sparkles, w as BookOpen, x as Calendar, a9 as Flame, t as MessageCircle, ap as Sun, a2 as Clock, Q as VolumeX, T as Volume2, a$ as Gift, a5 as CircleCheck, a4 as TriangleAlert, g as Star, a1 as MapPin, a0 as Search, G as Globe, X, an as LocateFixed, ao as RotateCcw, aA as ChevronLeft, am as ChevronRight, b1 as Funnel, b2 as LayoutGrid, b3 as ListFilter, b4 as ArrowLeftRight, y as ArrowDown, ax as ChevronUp, al as ChevronDown, a8 as Compass, aq as Moon, af as CalendarCheck, F as ArrowRight } from "./vendor-icons-Bk5Rg8-9.js";
import { V as VedicDateInput } from "./VedicDateInput-QzCgtRnr.js";
import { r as resolveSafeTimezone, c as getActivePanchangLocation, d as getLocalDateParts, a6 as shiftCivilDate, b as buildSingleDayPanchang, K as HINDI_MONTH_SHORT, e as getMsUntilNextZoneMidnight, l as getActivePanchangLocationState, f as getActiveObservanceState, a7 as MIN_PANCHANG_YEAR, a8 as MAX_PANCHANG_YEAR, a9 as loadSavedAccountJanmaProfile, aa as loadSavedFamilyJanmaProfiles, ab as loadPersonalJanmaProfile, m as getProfileBirthPlaceLocation, P as POPULAR_PANCHANG_CITY_IDS, W as WORLDWIDE_PANCHANG_CITIES, u as resolveCityCoordinates, w as setActivePanchangLocation, q as DEFAULT_RUDRAPUR_LOCATION, ac as resetObservanceToRegionalAuto, n as searchLocationsAllIndia, s as searchOfflineIndianDistricts, i as getObservanceProfileKey, ad as generateMonthlyPanchang, j as resolvePrimarySamvatsaraForLocation, ae as buildPanchangSaralArthaHi, p as resolveBhadraRahuFreeShreshthaSamay, M as resolveHindiCityDisplayName, af as createSafeUtcDate, t as setRememberPanchangLocation, ag as setObservanceManualOverride, ah as HINDI_GREGORIAN_MONTHS, V as VAAR_LIST, a5 as computeSamvatsaraOrdinal, ai as formatAshtamanshaPartHi, aj as GULIKA_SHASTRIYA_LABEL_HI, ak as computePersonalTarabal, al as computePersonalChandrabal, am as savePersonalJanmaProfile, an as ALL_12_RASHIS_HI, ao as ALL_27_NAKSHATRAS_HI, k as resolveMantraOrShlokaLabelHi, v as detectCurrentPanchangGpsLocation, x as resetPanchangLocationToRudrapur, ap as getDaysInMonthSafe, aq as resolveJanmaProfileFromName } from "./panchang-core-24ia-akc.js";
import { u as useVedicValidation, V as VedicTripleCheckBadge } from "./VedicTripleCheckBadge-B_j2EZJj.js";
import "./vendor-pdf-CpPyS1re.js";
import "./seo-core-DnNehtWz.js";
import "./vendor-astronomy-C8JZdkQu.js";
import "./drikGanitaRashifalEngine-fnpcD7FF.js";
import "./vedicTripleCheck-C0ip0Qtr.js";
function buildLegacyMuhuratFallbackSummary(day, locale) {
  const shiva = day.shivavaas?.vaasNameHi || "";
  const agni = day.agnivaas?.vaasNameHi || "";
  if (locale.toLowerCase().startsWith("en")) {
    return `Classical Muhurat overview for ${day.formattedDateHindi || day.day}: Shivavaas (${day.shivavaas?.vaasNameEn || "calculated"}) and Agnivaas (${day.agnivaas?.vaasNameEn || "calculated"}) are active.`;
  }
  if (locale.toLowerCase().startsWith("sa")) {
    return `अद्य मुहूर्तविचारे शिववासः (${shiva || "गणितः"}) तथा अग्निवासः (${agni || "गणितः"}) प्रभावी अस्ति।`;
  }
  return `आज के मुहूर्त विचार में शिववास (${shiva || "उपलब्ध"}) एवं अग्निवास (${agni || "उपलब्ध"}) के अनुसार अनुष्ठान निर्णय लें।`;
}
function toMuhuratNormalizerInput(day, location, tarabal, chandrabal) {
  const loc = day.dailyPanchang?.location || location;
  const festAndMaas = `${day.festivalName || ""} ${day.hinduMaas || ""} ${day.tithiName || ""}`;
  const isShivaratriOrShravan = /शिवरात्रि|महाशिवरात्रि|श्रावण|सावन/u.test(festAndMaas);
  const hasPanchak = hasActiveWindowText(day.panchakKaal);
  const hasBhadra = hasActiveWindowText(day.bhadraKaal);
  const hasAbhijit = hasActiveWindowText(day.abhijitMuhurat);
  return {
    dateKey: day.dailyPanchang?.dateKey || `${day.year}-${String(day.month).padStart(2, "0")}-${String(day.day).padStart(2, "0")}`,
    activityType: "general",
    isShivaratriOrShravan,
    isJyotirlingaKshetra: false,
    shivavaas: day.shivavaas ? {
      tithiIndex: day.shivavaas.tithiIndex,
      vaasNameHi: day.shivavaas.vaasNameHi,
      vaasNameEn: day.shivavaas.vaasNameEn,
      isAuspicious: day.shivavaas.isAuspicious
    } : null,
    agnivaas: day.agnivaas ? {
      tithiIndex: day.agnivaas.tithiIndex,
      weekdayIndex: day.agnivaas.weekdayIndex,
      vaasRealm: day.agnivaas.vaasRealm,
      vaasNameHi: day.agnivaas.vaasNameHi,
      isAuspicious: day.agnivaas.isAuspicious
    } : null,
    tarabal: tarabal ? {
      taraNumber: tarabal.taraNumber,
      taraNameHi: tarabal.taraNameHi,
      status: tarabal.status
    } : null,
    chandrabal: chandrabal ? {
      houseNumber: chandrabal.houseNumber,
      status: chandrabal.status
    } : null,
    hasPanchak,
    panchakNameHi: hasPanchak ? (day.panchakKaal || "").split(" (")[0].trim() : "",
    hasBhadra,
    bhadraWindow: hasBhadra ? (day.bhadraKaal || "").split(" (")[0].trim() : "",
    hasAbhijit,
    abhijitWindow: hasAbhijit ? (day.abhijitMuhurat || "").split(" (")[0].trim() : "",
    timezone: loc?.timezone || "Asia/Kolkata",
    location: loc ? {
      name: loc.hindiName || loc.name,
      latitude: loc.lat,
      longitude: loc.lon,
      elevationMeters: loc.elevationMeters
    } : void 0,
    engineVersion: "classical-muhurat-v1"
  };
}
async function generateMuhuratGuidance(req) {
  const resolvedLocale = mapAppLanguageToLocale(req.locale || "hi-IN");
  const mode = req.mode ?? "STANDARD";
  const audience = req.audience ?? "GENERAL";
  const engine = req.engine ?? defaultTextIntelligenceEngine;
  try {
    const payload = toMuhuratNormalizerInput(
      req.dayPanchang,
      req.location,
      req.tarabal,
      req.chandrabal
    );
    const result = await engine.generateText("muhurat", payload, {
      locale: resolvedLocale,
      mode,
      audience
    });
    if (result.status === "INSUFFICIENT_DATA" || !result.summary.trim()) {
      return {
        usedLegacyFallback: true,
        result: {
          ...result,
          summary: buildLegacyMuhuratFallbackSummary(req.dayPanchang, resolvedLocale),
          trace: {
            ...result.trace,
            warnings: Array.from(/* @__PURE__ */ new Set([...result.trace.warnings, "FALLBACK_USED"]))
          }
        }
      };
    }
    return {
      result,
      usedLegacyFallback: false
    };
  } catch {
    return {
      usedLegacyFallback: true,
      result: {
        module: "muhurat",
        locale: resolvedLocale,
        mode,
        audience,
        rulePackVersion: "fallback",
        status: "PARTIALLY_SUPPORTED",
        summary: buildLegacyMuhuratFallbackSummary(req.dayPanchang, resolvedLocale),
        sections: [],
        references: [],
        trace: {
          appliedRuleIds: [],
          excludedRuleIds: [],
          deduplicatedConceptKeys: [],
          warnings: ["FALLBACK_USED"],
          cacheHit: false
        }
      }
    };
  }
}
const LOCALE_OPTIONS = [
  { code: "hi-IN", label: "हिन्दी" },
  { code: "en-IN", label: "English" },
  { code: "sa-IN", label: "संस्कृतम्" }
];
const MODE_OPTIONS = [
  { code: "SHORT", labelHi: "संक्षिप्त", labelEn: "Brief", labelSa: "संक्षिप्तम्" },
  { code: "STANDARD", labelHi: "मानक", labelEn: "Standard", labelSa: "मानकम्" },
  { code: "DETAILED", labelHi: "विस्तृत", labelEn: "Detailed", labelSa: "विस्तृतम्" }
];
function getPolarityClass(polarity) {
  switch (polarity) {
    case "AUSPICIOUS":
      return {
        box: "border-emerald-500/30 bg-emerald-950/30",
        title: "text-emerald-300"
      };
    case "CAUTION":
      return {
        box: "border-rose-500/30 bg-rose-950/30",
        title: "text-rose-300"
      };
    case "MIXED":
      return {
        box: "border-amber-400/35 bg-amber-950/35",
        title: "text-amber-200"
      };
    default:
      return {
        box: "border-amber-500/25 bg-slate-900/60",
        title: "text-amber-300"
      };
  }
}
const MuhuratShastricGuidanceCard = ({
  dayPanchang,
  location
}) => {
  const { language } = useLanguage();
  const [locale, setLocale] = reactExports.useState(
    () => language === "en" ? "en-IN" : "hi-IN"
  );
  const [mode, setMode] = reactExports.useState("STANDARD");
  const [guidance, setGuidance] = reactExports.useState(null);
  reactExports.useEffect(() => {
    if (language === "en") setLocale("en-IN");
    else if (language === "hi") setLocale("hi-IN");
  }, [language]);
  reactExports.useEffect(() => {
    let cancelled = false;
    generateMuhuratGuidance({
      dayPanchang,
      location,
      locale,
      mode,
      audience: mode === "DETAILED" ? "SCHOLAR" : "GENERAL"
    }).then((out) => {
      if (!cancelled) setGuidance(out.result);
    });
    return () => {
      cancelled = true;
    };
  }, [dayPanchang, location, locale, mode]);
  if (!guidance || !guidance.summary) return null;
  const isEn = locale === "en-IN";
  const isSa = locale === "sa-IN";
  const heading = isEn ? "Shastric Muhurat Interpretation (Shivavaas, Agnivaas & Panchak)" : isSa ? "शास्त्रीयमुहूर्तविवेचनम् (शिववासः, अग्निवासः, पञ्चकम्)" : "शास्त्रीय मुहूर्त विवेचन (शिववास, अग्निवास एवं पंचक विचार)";
  const sourcesTitle = isEn ? "Classical Sources" : isSa ? "शास्त्रीयप्रमाणानि" : "शास्त्रीय संदर्भ";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-amber-500/35 bg-gradient-to-br from-[#23190d]/95 via-[#17120c]/95 to-[#110d09]/95 p-3.5 space-y-2.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3.5 h-3.5 text-amber-400 shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "text-xs font-extrabold text-amber-200", children: heading })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex rounded-lg bg-slate-900/90 p-0.5 border border-amber-700/40 text-[10px]", children: LOCALE_OPTIONS.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setLocale(opt.code),
            className: `px-2 py-0.5 rounded font-bold cursor-pointer transition-colors ${locale === opt.code ? "bg-amber-500 text-slate-950" : "text-amber-200/80 hover:text-amber-100"}`,
            children: opt.label
          },
          opt.code
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex rounded-lg bg-slate-900/90 p-0.5 border border-amber-700/40 text-[10px]", children: MODE_OPTIONS.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setMode(opt.code),
            className: `px-2 py-0.5 rounded font-semibold cursor-pointer transition-colors ${mode === opt.code ? "bg-amber-400/25 text-amber-200 border border-amber-400/40" : "text-slate-300/80 hover:text-amber-100"}`,
            children: isEn ? opt.labelEn : isSa ? opt.labelSa : opt.labelHi
          },
          opt.code
        )) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs leading-relaxed text-amber-50/95", children: guidance.summary }),
    guidance.sections.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-2 pt-0.5", children: guidance.sections.map((section) => {
      const cls = getPolarityClass(section.polarity);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: `rounded-lg border p-2.5 ${cls.box}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-[11px] font-bold mb-0.5 ${cls.title}`, children: section.heading }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] leading-relaxed text-amber-50/90", children: section.body })
          ]
        },
        section.domain
      );
    }) }),
    guidance.references.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-2 border-t border-amber-500/20 flex flex-wrap items-center gap-1.5 text-[10px] text-amber-200/80", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-3 h-3 text-amber-400 shrink-0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-amber-300", children: [
        sourcesTitle,
        ":"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: guidance.references.map((r) => r.sourceName).join(" • ") })
    ] })
  ] });
};
const TodayFestivalWidget = ({
  onOpenBookingWithService,
  onOpenMantraJaap,
  onAskPanditInChat,
  selectedDayPanchang
}) => {
  const { activeTheme, isFestivalActive, isDefaultAsIs } = useFestiveTheme();
  const [todayFestival, setTodayFestival] = reactExports.useState(
    () => getTodayFestivalInfo(/* @__PURE__ */ new Date(), selectedDayPanchang)
  );
  const [todayPanchang, setTodayPanchang] = reactExports.useState(
    () => getTodayPanchang(/* @__PURE__ */ new Date(), selectedDayPanchang)
  );
  const [locationRevision, setLocationRevision] = reactExports.useState(0);
  const [istClock, setIstClock] = reactExports.useState(() => {
    const tz = resolveSafeTimezone(getActivePanchangLocation());
    return getLocalDateParts(/* @__PURE__ */ new Date(), tz);
  });
  const [activeSpeechId, setActiveSpeechId] = reactExports.useState(
    () => vedicAudio.getActiveSpeechId()
  );
  reactExports.useEffect(() => {
    const now = /* @__PURE__ */ new Date();
    setTodayFestival(getTodayFestivalInfo(now, selectedDayPanchang));
    setTodayPanchang(getTodayPanchang(now, selectedDayPanchang));
  }, [selectedDayPanchang, locationRevision]);
  reactExports.useEffect(() => {
    const unsubSpeech = vedicAudio.subscribeSpeech((id) => {
      setActiveSpeechId(id);
    });
    return unsubSpeech;
  }, []);
  reactExports.useEffect(() => {
    let midnightTimer = null;
    const getZone = () => resolveSafeTimezone(getActivePanchangLocation());
    const syncTodayParv = () => {
      const now = /* @__PURE__ */ new Date();
      const nextClock = getLocalDateParts(now, getZone());
      setIstClock((prev) => {
        if (prev.dateKey !== nextClock.dateKey) {
          setTodayFestival(getTodayFestivalInfo(now, selectedDayPanchang));
          setTodayPanchang(getTodayPanchang(now, selectedDayPanchang));
          return nextClock;
        }
        if (prev.timeString12h !== nextClock.timeString12h) {
          return nextClock;
        }
        return prev;
      });
    };
    const handleLocationChanged = () => {
      const now = /* @__PURE__ */ new Date();
      setLocationRevision((r) => r + 1);
      setIstClock(getLocalDateParts(now, getZone()));
      setTodayFestival(getTodayFestivalInfo(now, selectedDayPanchang));
      setTodayPanchang(getTodayPanchang(now, selectedDayPanchang));
    };
    const scheduleExactMidnightRollover = () => {
      if (midnightTimer !== null) window.clearTimeout(midnightTimer);
      const msUntilMidnight = getMsUntilNextZoneMidnight(/* @__PURE__ */ new Date(), getZone());
      midnightTimer = window.setTimeout(() => {
        const now = /* @__PURE__ */ new Date();
        setTodayFestival(getTodayFestivalInfo(now, selectedDayPanchang));
        setTodayPanchang(getTodayPanchang(now, selectedDayPanchang));
        setIstClock(getLocalDateParts(now, getZone()));
        scheduleExactMidnightRollover();
      }, msUntilMidnight);
    };
    scheduleExactMidnightRollover();
    const intervalId = window.setInterval(syncTodayParv, 3e4);
    const handleVisibility = () => {
      if (document.visibilityState === "visible") {
        syncTodayParv();
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);
    window.addEventListener("panditji_panchang_location_changed", handleLocationChanged);
    return () => {
      window.clearInterval(intervalId);
      if (midnightTimer !== null) window.clearTimeout(midnightTimer);
      document.removeEventListener("visibilitychange", handleVisibility);
      window.removeEventListener("panditji_panchang_location_changed", handleLocationChanged);
    };
  }, [selectedDayPanchang]);
  const upcomingParvs = reactExports.useMemo(() => {
    const list = [];
    const activeLoc = selectedDayPanchang?.dailyPanchang?.location || getActivePanchangLocation();
    const baseYear = selectedDayPanchang ? selectedDayPanchang.year : istClock.year;
    const baseMonth = selectedDayPanchang ? selectedDayPanchang.month : istClock.month;
    const baseDay = selectedDayPanchang ? selectedDayPanchang.day : istClock.day;
    const now = /* @__PURE__ */ new Date();
    for (let offset = 1; offset <= 45 && list.length < 4; offset++) {
      const shifted = shiftCivilDate(baseYear, baseMonth, baseDay, offset);
      const info = buildSingleDayPanchang(shifted.year, shifted.month, shifted.day, true, now, activeLoc);
      if (info.festivalName || info.isEkadashi || info.isPurnima || info.isAmavasya) {
        const title = info.festivalName || (info.isEkadashi ? `${info.pakshaShort} एकादशी व्रत` : info.isPurnima ? `${info.hinduMaas} पूर्णिमा पर्व` : `${info.hinduMaas} अमावस्या`);
        list.push({
          dateLabel: `${shifted.day} ${HINDI_MONTH_SHORT[shifted.month - 1] || ""}`,
          daysAway: offset,
          title,
          tithi: `${info.tithiShort} (${info.tithiEndTime.split(",")[0]})`,
          isMajor: info.festivalCategory === "mahaparv" || info.isEkadashi || info.isPurnima
        });
      }
    }
    return list;
  }, [selectedDayPanchang, istClock.year, istClock.month, istClock.day, locationRevision]);
  const handleChantFestivalMantra = () => {
    try {
      if (activeSpeechId !== "festival-special-mantra") {
        vedicAudio.playTempleBell(0.65);
      }
      vedicAudio.toggleSpeakText(
        `आज के पर्व का विशेष सिद्ध मंत्र। ${todayFestival.specialMantra}। ${todayFestival.specialMantra}`,
        "festival-special-mantra"
      );
    } catch {
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: `relative overflow-hidden rounded-3xl ${!isDefaultAsIs && isFestivalActive ? `${activeTheme.bannerBgClass} border-2 ${activeTheme.bannerBorderClass}` : "bg-gradient-to-br from-[#241007] via-[#13192b] to-[#0d1322] border-2 border-amber-500/70"} p-4 sm:p-6 lg:p-7 shadow-2xl transition-all duration-500`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-12 -right-12 w-72 h-72 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-16 -left-16 w-72 h-72 bg-red-600/10 rounded-full blur-3xl pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 space-y-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-amber-800/40 pb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start sm:items-center gap-3.5 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(PanditPortrait, { size: "md", showBadge: true }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-red-600/35 border border-red-400/60 text-amber-200 text-[11px] font-bold", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3 h-3 text-yellow-400" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "आज का मुख्य पर्व एवं व्रत त्योहार" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] px-2.5 py-0.5 rounded-md bg-emerald-950/90 border border-emerald-500/50 text-emerald-300 font-bold", children: todayFestival.tag })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg sm:text-2xl lg:text-3xl font-extrabold font-vedic text-amber-100 mt-1.5 leading-snug", children: todayFestival.hindiName }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs sm:text-sm text-amber-300/90 mt-1 flex flex-wrap items-center gap-x-2.5 gap-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 font-bold text-yellow-300", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-3.5 h-3.5 text-amber-400" }),
                    " ",
                    todayPanchang.date
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "•" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-amber-200", children: todayPanchang.tithi }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "•" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-amber-300/90", children: [
                    "नक्षत्र: ",
                    todayPanchang.nakshatra
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 self-start lg:self-center flex-shrink-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: onOpenMantraJaap,
                  className: "px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-slate-950 font-extrabold text-xs sm:text-sm shadow-lg flex items-center gap-1.5 cursor-pointer transition-all",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "w-4 h-4" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "108 मंत्र जप करें" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => onAskPanditInChat(todayFestival.hindiName),
                  className: "px-3.5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-amber-500/50 text-amber-200 text-xs sm:text-sm font-bold flex items-center gap-1.5 cursor-pointer transition-all",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-4 h-4 text-amber-400" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "पण्डित जी से विधि पूछें" })
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-3.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3.5 sm:p-4 rounded-2xl bg-slate-950/85 border border-amber-700/40 flex flex-col justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-bold text-amber-400 uppercase tracking-wider block", children: "आराध्य देवी-देवता एवं पक्ष" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm sm:text-base font-extrabold text-amber-100 mt-1", children: todayFestival.deity }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-amber-300/85 mt-0.5 block", children: todayFestival.paksha })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2.5 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-amber-300/90", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "w-3.5 h-3.5 text-amber-400" }),
                  " सूर्योदय: ",
                  todayPanchang.suryaUday
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  "सूर्यास्त: ",
                  todayPanchang.suryaAst
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3.5 sm:p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/45 md:col-span-2 flex flex-col justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3.5 h-3.5" }),
                  " पंचांग अनुसार आज की पूजा, हवन एवं शुभ मुहूर्त"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm font-bold text-emerald-100 mt-1.5 leading-relaxed", children: todayFestival.shubhMuhurat }),
                selectedDayPanchang?.paranaWindowText && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-yellow-200 mt-1.5 px-2.5 py-1 rounded-lg bg-amber-950/60 border border-amber-500/40", children: selectedDayPanchang.paranaWindowText })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2.5 pt-2 border-t border-emerald-800/40 flex flex-wrap items-center justify-between gap-2 text-xs", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-emerald-300 font-semibold inline-flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "sparkles", tone: "auspicious", className: "w-3.5 h-3.5" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    "अभिजित मुहूर्त: ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "font-mono text-emerald-100", children: todayPanchang.abhijitMuhurat })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-rose-300 font-semibold inline-flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "warning", tone: "inauspicious", className: "w-3.5 h-3.5" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    "राहुकाल: ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "font-mono", children: todayPanchang.rahuKaal })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-amber-300 font-semibold inline-flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "warning", className: "w-3.5 h-3.5" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    "यमगण्ड: ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "font-mono", children: todayPanchang.yamagandam })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-emerald-300 font-semibold inline-flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "clock", tone: "auspicious", className: "w-3.5 h-3.5" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    "गुलिक काल (शुभ): ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "font-mono text-emerald-100", children: todayPanchang.gulikaKaal })
                  ] })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-3.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-7 p-4 rounded-2xl bg-amber-950/35 border border-amber-700/40 flex flex-col justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-2 mb-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-xs font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-3.5 h-3.5 text-amber-400" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "पंचांग एवं शास्त्रोक्त महत्व" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      if (activeSpeechId !== "festival-significance-speech") {
                        vedicAudio.playTempleBell(0.5);
                      }
                      vedicAudio.toggleSpeakText(
                        `${todayFestival.hindiName}। ${todayFestival.significance} शुभ भोग प्रसाद: ${todayFestival.bhogPrasad}`,
                        "festival-significance-speech"
                      );
                    },
                    className: `px-2.5 py-1 rounded-lg border text-[11px] font-bold flex items-center gap-1 cursor-pointer transition-all ${activeSpeechId === "festival-significance-speech" ? "bg-emerald-500 text-slate-950 border-emerald-300" : "bg-amber-500/20 hover:bg-amber-500/30 border-amber-400/50 text-amber-200"}`,
                    children: activeSpeechId === "festival-significance-speech" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(VolumeX, { className: "w-3 h-3" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "महत्व रोकें" })
                    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Volume2, { className: "w-3 h-3 text-yellow-400" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "पर्व महत्व सुनें" })
                    ] })
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm text-amber-100/95 leading-relaxed", children: todayFestival.significance })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5 p-4 rounded-2xl bg-gradient-to-br from-[#2a1306] to-[#141b2d] border border-amber-500/50 flex flex-col justify-between gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] font-bold text-yellow-400 uppercase tracking-wider flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "w-3.5 h-3.5 text-yellow-400" }),
                  " आज के पर्व का विशेष सिद्ध मंत्र"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm sm:text-base font-extrabold font-vedic text-yellow-300 mt-1.5 leading-snug", children: [
                  "“",
                  todayFestival.specialMantra,
                  "”"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: handleChantFestivalMantra,
                    className: `flex-1 py-2 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer transition-all ${activeSpeechId === "festival-special-mantra" ? "bg-emerald-500 text-slate-950 border-emerald-300 font-extrabold shadow-md" : "bg-amber-500/25 hover:bg-amber-500/35 border-amber-400/60 text-amber-100"}`,
                    children: activeSpeechId === "festival-special-mantra" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(VolumeX, { className: "w-3.5 h-3.5" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "मंत्र रोकें" })
                    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Volume2, { className: "w-3.5 h-3.5 text-yellow-400" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "मंत्र ध्वनि सुनें" })
                    ] })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: onOpenMantraJaap,
                    className: "flex-1 py-2 px-3 rounded-xl bg-gradient-to-r from-amber-600 to-yellow-500 hover:from-amber-500 hover:to-yellow-400 text-slate-950 text-xs font-extrabold flex items-center justify-center gap-1.5 cursor-pointer shadow-md transition-all",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "w-3.5 h-3.5" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "108 जप माला खोलें" })
                    ]
                  }
                )
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-2xl bg-slate-900/90 border border-amber-800/40 space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-xs sm:text-sm font-bold font-vedic text-amber-200 flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-4 h-4 text-amber-400 flex-shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "शास्त्रोक्त पूजा विधि एवं शुभ भोग प्रसाद" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2 text-xs text-amber-100/95", children: todayFestival.pujaVidhi.map((step, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-4 h-4 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-[10px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5", children: i + 1 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "leading-relaxed", children: step })
              ] }, i)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-2.5 border-t border-slate-800 flex items-start gap-2 text-xs", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Gift, { className: "w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-amber-300", children: "विशेष शुभ भोग / नैवेद्य: " }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-amber-100", children: todayFestival.bhogPrasad })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-2xl bg-slate-900/90 border border-amber-800/40 space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs sm:text-sm font-bold font-vedic text-amber-200", children: "आज के पर्व पर क्या करें और क्या न करें (नियम व सावधानियां)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] font-bold text-emerald-400 flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3.5 h-3.5" }),
                  " अवश्य करें (शुभ नियम):"
                ] }),
                todayFestival.dosAndDonts.dos.map((d, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-emerald-100/95 pl-4 leading-relaxed", children: [
                  "• ",
                  d
                ] }, idx))
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 pt-2.5 border-t border-slate-800", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] font-bold text-rose-400 flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-3.5 h-3.5" }),
                  " क्या न करें (वर्जित):"
                ] }),
                todayFestival.dosAndDonts.donts.map((d, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-rose-200/95 pl-4 leading-relaxed", children: [
                  "• ",
                  d
                ] }, idx))
              ] })
            ] })
          ] }),
          upcomingParvs.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3.5 sm:p-4 rounded-2xl bg-slate-950/90 border border-amber-500/35", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-extrabold font-vedic text-amber-200 flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-3.5 h-3.5 text-yellow-400 fill-yellow-400" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "आगामी प्रमुख व्रत एवं त्योहार (पंचांग कैलेंडर अनुसार)" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-amber-400/80 hidden sm:inline", children: "किसी भी पर्व पर क्लिक करके पण्डित जी से पूछें" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5", children: upcomingParvs.map((parv, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => onAskPanditInChat(
                  `${parv.title} (${parv.dateLabel}) की पूजा विधि, शुभ मुहूर्त और नियम बताएं`
                ),
                className: "p-2.5 rounded-xl bg-slate-900/90 hover:bg-amber-950/50 border border-amber-700/35 hover:border-amber-400/60 text-left transition-all cursor-pointer flex items-center justify-between gap-2 group",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-extrabold text-yellow-300", children: parv.dateLabel }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-200 font-semibold", children: parv.daysAway === 1 ? "कल" : `${parv.daysAway} दिन बाद` })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-amber-100 group-hover:text-yellow-200 truncate mt-0.5", children: parv.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-slate-400 block truncate", children: parv.tithi })
                ] })
              },
              idx
            )) })
          ] })
        ] })
      ]
    }
  );
};
const VEDIC_RITU_GUIDE = [
  { name: "वसंत ऋतु", short: "वसंत", months: "चैत्र – वैशाख", approxMonths: [3, 4, 5, 2] },
  { name: "ग्रीष्म ऋतु", short: "ग्रीष्म", months: "ज्येष्ठ – आषाढ़", approxMonths: [5, 6, 7, 4] },
  { name: "वर्षा ऋतु", short: "वर्षा", months: "श्रावण – भाद्रपद", approxMonths: [7, 8, 9, 6] },
  { name: "शरद ऋतु", short: "शरद", months: "आश्विन – कार्तिक", approxMonths: [10, 11, 9, 12] },
  { name: "हेमंत ऋतु", short: "हेमंत", months: "मार्गशीर्ष – पौष", approxMonths: [11, 12, 1, 10] },
  { name: "शिशिर ऋतु", short: "शिशिर", months: "माघ – फाल्गुन", approxMonths: [1, 2, 3, 12] }
];
const NAVDURGA_CELL_LABELS = {
  1: "१. माँ शैलपुत्री",
  2: "२. माँ ब्रह्मचारिणी",
  3: "३. माँ चन्द्रघण्टा",
  4: "४. माँ कूष्माण्डा",
  5: "५. माँ स्कन्दमाता",
  6: "६. माँ कात्यायनी",
  7: "७. माँ कालरात्रि",
  8: "८. माँ महागौरी",
  9: "९. माँ सिद्धिदात्री"
};
const formatCalendarCellFestivalLabel = (dayItem) => {
  const navOcc = dayItem.festivalOccurrences?.find(
    (occ) => occ.seriesId === "chaitra-navratri" || occ.seriesId === "sharad-navratri"
  );
  if (navOcc && navOcc.seriesDay) {
    if (navOcc.festivalId === "ram-navami") {
      return "रामनवमी • सिद्धिदात्री";
    }
    return NAVDURGA_CELL_LABELS[navOcc.seriesDay] || dayItem.festivalName?.split(" (")[0] || "";
  }
  return dayItem.festivalName ? dayItem.festivalName.split(" (")[0] : "";
};
const safePlayClick = () => {
  try {
    if (typeof vedicAudio?.playClickSpark === "function") {
      vedicAudio.playClickSpark(0.22);
    } else if (typeof vedicAudio?.playManjiraChime === "function") {
      vedicAudio.playManjiraChime(0.2);
    }
  } catch {
  }
};
const HinduPanchangCalendar = ({
  onOpenBookingWithDate,
  onAskPanditInChat,
  onOpenMantraJaap
}) => {
  const [locationState, setLocationState] = reactExports.useState(
    () => getActivePanchangLocationState()
  );
  const activeLocation = locationState.location;
  const activeTimeZone = resolveSafeTimezone(activeLocation);
  const [observanceState, setObservanceState] = reactExports.useState(
    () => getActiveObservanceState(getActivePanchangLocationState().location)
  );
  const tradition = observanceState.tradition;
  const sampradaya = observanceState.sampradaya;
  const [todayRef, setTodayRef] = reactExports.useState(() => /* @__PURE__ */ new Date());
  const initialLocal = reactExports.useMemo(() => getLocalDateParts(/* @__PURE__ */ new Date(), activeTimeZone), [activeTimeZone]);
  const lastDateKeyRef = reactExports.useRef(initialLocal.dateKey);
  const [selectedYear, setSelectedYear] = reactExports.useState(
    () => Math.max(MIN_PANCHANG_YEAR, Math.min(MAX_PANCHANG_YEAR, initialLocal.year || 2026))
  );
  const [selectedMonth, setSelectedMonth] = reactExports.useState(() => initialLocal.month || 10);
  const [selectedDayNum, setSelectedDayNum] = reactExports.useState(() => initialLocal.day || 1);
  const activeDateIso = `${String(selectedYear).padStart(4, "0")}-${String(selectedMonth).padStart(2, "0")}-${String(selectedDayNum).padStart(2, "0")}`;
  const [draftDateIso, setDraftDateIso] = reactExports.useState(activeDateIso);
  reactExports.useEffect(() => {
    setDraftDateIso(activeDateIso);
  }, [activeDateIso]);
  const [activeFilter, setActiveFilter] = reactExports.useState("all");
  const [viewMode, setViewMode] = reactExports.useState("grid");
  const [citySearchQuery, setCitySearchQuery] = reactExports.useState("");
  const [showCityDropdown, setShowCityDropdown] = reactExports.useState(false);
  const [remoteSearchResults, setRemoteSearchResults] = reactExports.useState([]);
  const [isSearchingPlaces, setIsSearchingPlaces] = reactExports.useState(false);
  const [locationSearchNotice, setLocationSearchNotice] = reactExports.useState(null);
  const [isDetectingGps, setIsDetectingGps] = reactExports.useState(false);
  const [showMonthlyFestList, setShowMonthlyFestList] = reactExports.useState(true);
  const [expandedTenDayKey, setExpandedTenDayKey] = reactExports.useState(null);
  const [punyaClaimBanner, setPunyaClaimBanner] = reactExports.useState(null);
  const [showSpecialMuhuratAccordion, setShowSpecialMuhuratAccordion] = reactExports.useState(false);
  const [savedAccountJanma, setSavedAccountJanma] = reactExports.useState(
    () => loadSavedAccountJanmaProfile()
  );
  const [savedFamilyJanmas, setSavedFamilyJanmas] = reactExports.useState(
    () => loadSavedFamilyJanmaProfiles()
  );
  const [janmaProfile, setJanmaProfile] = reactExports.useState(() => loadPersonalJanmaProfile());
  const [janmaNameInput, setJanmaNameInput] = reactExports.useState(() => loadPersonalJanmaProfile().name || "");
  const [showJanmaSelector, setShowJanmaSelector] = reactExports.useState(false);
  const profileBirthLoc = reactExports.useMemo(() => getProfileBirthPlaceLocation(), [activeLocation]);
  const popularCityChips = reactExports.useMemo(
    () => POPULAR_PANCHANG_CITY_IDS.map(
      (id) => WORLDWIDE_PANCHANG_CITIES.find((c) => c.id === id)
    ).filter((c) => Boolean(c)),
    []
  );
  const [swipeOffsetX, setSwipeOffsetX] = reactExports.useState(0);
  const [isSwiping, setIsSwiping] = reactExports.useState(false);
  const [monthTransitionDir, setMonthTransitionDir] = reactExports.useState(null);
  const swipeStartRef = reactExports.useRef(null);
  const suppressClickUntilRef = reactExports.useRef(0);
  const [activeSpeechId, setActiveSpeechId] = reactExports.useState(
    () => vedicAudio.getActiveSpeechId()
  );
  reactExports.useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const params = new URLSearchParams(window.location.search);
      const cityParam = (params.get("city") || "").trim().toLowerCase();
      if (!cityParam) return;
      const slugNorm = cityParam.replace(/[^a-z0-9_-]+/g, "");
      const presetMatch = WORLDWIDE_PANCHANG_CITIES.find(
        (c) => c.id.toLowerCase() === slugNorm || c.name.toLowerCase().split(",")[0].replace(/[^a-z0-9]+/g, "-") === cityParam || c.name.toLowerCase().split(",")[0].trim() === cityParam
      );
      const resolved = presetMatch || resolveCityCoordinates(cityParam);
      if (resolved && resolved.id !== "custom_unresolved") {
        const nextState = setActivePanchangLocation(
          resolved,
          resolved.id === DEFAULT_RUDRAPUR_LOCATION.id ? "default" : "manual"
        );
        setLocationState(nextState);
        setObservanceState(resetObservanceToRegionalAuto(nextState.location));
      }
    } catch {
    }
  }, []);
  reactExports.useEffect(() => {
    const res = claimDailyPunyaPoint("panchang_visit");
    if (res.awarded && res.message) {
      setPunyaClaimBanner(res.message);
      const timer = setTimeout(() => setPunyaClaimBanner(null), 6500);
      return () => clearTimeout(timer);
    }
  }, []);
  reactExports.useEffect(() => {
    const syncLoc = () => {
      const nextLocState = getActivePanchangLocationState();
      setLocationState(nextLocState);
      setObservanceState(getActiveObservanceState(nextLocState.location));
    };
    const syncObs = () => {
      setObservanceState(getActiveObservanceState(getActivePanchangLocationState().location));
    };
    const syncProfile = () => {
      syncLoc();
      const latestSaved = loadSavedAccountJanmaProfile();
      setSavedAccountJanma(latestSaved);
      setSavedFamilyJanmas(loadSavedFamilyJanmaProfiles());
      setJanmaProfile((prev) => {
        const isEmpty = prev.rashiIndex === null && prev.nakshatraIndex === null && !prev.name;
        if (latestSaved && (isEmpty || prev.source === "saved_profile")) {
          setJanmaNameInput(latestSaved.name || "");
          return latestSaved;
        }
        return prev;
      });
    };
    window.addEventListener("panditji_panchang_location_changed", syncLoc);
    window.addEventListener("panditji_observance_changed", syncObs);
    window.addEventListener("panditji_active_profile_updated", syncProfile);
    window.addEventListener("panditji_vault_updated", syncProfile);
    return () => {
      window.removeEventListener("panditji_panchang_location_changed", syncLoc);
      window.removeEventListener("panditji_observance_changed", syncObs);
      window.removeEventListener("panditji_active_profile_updated", syncProfile);
      window.removeEventListener("panditji_vault_updated", syncProfile);
    };
  }, []);
  reactExports.useEffect(() => {
    const q = citySearchQuery.trim();
    if (q.length < 2) {
      setRemoteSearchResults([]);
      setIsSearchingPlaces(false);
      return;
    }
    const controller = new AbortController();
    setIsSearchingPlaces(true);
    const timer = window.setTimeout(async () => {
      try {
        const res = await searchLocationsAllIndia(q, controller.signal);
        if (!controller.signal.aborted) {
          setRemoteSearchResults(res);
          setIsSearchingPlaces(false);
        }
      } catch {
        if (!controller.signal.aborted) {
          setIsSearchingPlaces(false);
        }
      }
    }, 300);
    return () => {
      controller.abort();
      window.clearTimeout(timer);
    };
  }, [citySearchQuery]);
  const filteredCities = reactExports.useMemo(() => {
    const q = citySearchQuery.trim();
    if (!q) return WORLDWIDE_PANCHANG_CITIES.slice(0, 14);
    if (remoteSearchResults.length > 0) {
      const seen = /* @__PURE__ */ new Set();
      return remoteSearchResults.filter((c) => {
        if (seen.has(c.id)) return false;
        seen.add(c.id);
        return true;
      });
    }
    const lower = q.toLowerCase();
    const presetMatches = WORLDWIDE_PANCHANG_CITIES.filter(
      (c) => c.name.toLowerCase().includes(lower) || c.hindiName.toLowerCase().includes(lower) || c.district && c.district.toLowerCase().includes(lower) || c.state && c.state.toLowerCase().includes(lower) || c.country.toLowerCase().includes(lower) || c.id.includes(lower)
    );
    const offlineDistricts = q.length >= 2 ? searchOfflineIndianDistricts(q, 10) : [];
    const normalizeBaseName = (name) => name.split(",")[0].replace(/\s*\([^)]*\)/g, "").trim().toLowerCase();
    const merged = [...presetMatches];
    for (const dm of offlineDistricts) {
      if (!merged.some(
        (m) => m.id === dm.id || Math.abs(m.lat - dm.lat) < 0.04 && Math.abs(m.lon - dm.lon) < 0.04 && normalizeBaseName(m.name) === normalizeBaseName(dm.name)
      )) {
        merged.push(dm);
      }
    }
    return merged.slice(0, 14);
  }, [citySearchQuery, remoteSearchResults]);
  const handleSelectCity = (loc, explicitSource, accuracyMeters) => {
    if (!loc || loc.id === "custom_unresolved") {
      setLocationSearchNotice(
        "यह स्थान अभी डेटाबेस में नहीं मिला — कृपया 6-अंकीय पिनकोड लिखें या GPS बटन दबाएं।"
      );
      return;
    }
    safePlayClick();
    const isDifferentCity = loc.id !== activeLocation.id || Math.abs(loc.lat - activeLocation.lat) > 0.05 || Math.abs(loc.lon - activeLocation.lon) > 0.05;
    const nextState = setActivePanchangLocation(loc, explicitSource, { accuracyMeters });
    setLocationState(nextState);
    setObservanceState(
      isDifferentCity ? resetObservanceToRegionalAuto(nextState.location) : getActiveObservanceState(nextState.location)
    );
    setCitySearchQuery("");
    setRemoteSearchResults([]);
    setLocationSearchNotice(null);
    setShowCityDropdown(false);
    if (typeof window !== "undefined" && /^\/panchang\/?$/i.test(window.location.pathname)) {
      try {
        const citySlug = (loc.id || loc.name.split(",")[0]).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
        if (citySlug) {
          const url = new URL(window.location.href);
          url.searchParams.set("city", citySlug);
          window.history.replaceState(window.history.state, "", `${url.pathname}${url.search}${url.hash}`);
        }
      } catch {
      }
    }
  };
  const handleCustomCitySubmit = async (e) => {
    e.preventDefault();
    const q = citySearchQuery.trim();
    if (!q) return;
    setIsSearchingPlaces(true);
    setShowCityDropdown(true);
    try {
      const matches = remoteSearchResults.length > 0 ? remoteSearchResults : await searchLocationsAllIndia(q);
      setRemoteSearchResults(matches);
      if (matches.length === 1) {
        handleSelectCity(matches[0], matches[0].id === DEFAULT_RUDRAPUR_LOCATION.id ? "default" : "manual");
        return;
      }
      if (matches.length > 1) {
        setLocationSearchNotice(
          `"${q}" नाम से ${matches.length} स्थान मिले — कृपया नीचे सूची से सही जिला व राज्य चुनें।`
        );
        return;
      }
      const syncFallback = resolveCityCoordinates(q);
      if (syncFallback.id !== "custom_unresolved") {
        handleSelectCity(syncFallback, syncFallback.id === DEFAULT_RUDRAPUR_LOCATION.id ? "default" : "manual");
        return;
      }
      setLocationSearchNotice(
        "यह स्थान अभी डेटाबेस में नहीं मिला — कृपया 6-अंकीय पिनकोड लिखें या GPS बटन दबाएं।"
      );
    } catch {
      setLocationSearchNotice(
        "यह स्थान अभी डेटाबेस में नहीं मिला — कृपया 6-अंकीय पिनकोड लिखें या GPS बटन दबाएं।"
      );
    } finally {
      setIsSearchingPlaces(false);
    }
  };
  const handleResetToRudrapur = () => {
    safePlayClick();
    const nextState = resetPanchangLocationToRudrapur();
    setLocationState(nextState);
    setObservanceState(getActiveObservanceState(nextState.location));
    setCitySearchQuery("");
    setRemoteSearchResults([]);
    setLocationSearchNotice(null);
    setShowCityDropdown(false);
    if (typeof window !== "undefined" && /^\/panchang\/?$/i.test(window.location.pathname)) {
      try {
        const url = new URL(window.location.href);
        url.searchParams.set("city", "rudrapur");
        window.history.replaceState(window.history.state, "", `${url.pathname}${url.search}${url.hash}`);
      } catch {
      }
    }
  };
  const handleDetectGpsCity = async () => {
    if (isDetectingGps) return;
    setIsDetectingGps(true);
    setLocationSearchNotice(null);
    try {
      const result = await detectCurrentPanchangGpsLocation();
      handleSelectCity(result.location, "gps", result.accuracyMeters);
      const accText = result.accuracyMeters ? ` (±${result.accuracyMeters}m)` : "";
      setPunyaClaimBanner(
        `GPS लोकेशन सिंक हो गई: ${result.placeName}${accText} के अनुसार पंचांग अपडेट किया गया।`
      );
    } catch (err) {
      setPunyaClaimBanner(
        err?.message || "GPS लोकेशन की अनुमति नहीं मिली — आप सर्च बॉक्स से गाँव, शहर या PIN कोड चुन सकते हैं।"
      );
    } finally {
      setIsDetectingGps(false);
    }
  };
  reactExports.useEffect(() => {
    const unsubSpeech = vedicAudio.subscribeSpeech((id) => {
      setActiveSpeechId(id);
    });
    return unsubSpeech;
  }, []);
  const [choghadiyaTab, setChoghadiyaTab] = reactExports.useState("day");
  const [showHoraPanel, setShowHoraPanel] = reactExports.useState(false);
  const [horaTab, setHoraTab] = reactExports.useState("day");
  reactExports.useEffect(() => {
    let midnightTimer = null;
    const tz = resolveSafeTimezone(activeLocation);
    const checkMidnightRollover = () => {
      const now = /* @__PURE__ */ new Date();
      const currLocal = getLocalDateParts(now, tz);
      if (currLocal.dateKey !== lastDateKeyRef.current) {
        lastDateKeyRef.current = currLocal.dateKey;
        setTodayRef(now);
        setSelectedYear(currLocal.year);
        setSelectedMonth(currLocal.month);
        setSelectedDayNum(currLocal.day);
      }
    };
    const scheduleMidnight = () => {
      if (midnightTimer !== null) window.clearTimeout(midnightTimer);
      const msUntilMidnight = getMsUntilNextZoneMidnight(/* @__PURE__ */ new Date(), tz);
      midnightTimer = window.setTimeout(() => {
        checkMidnightRollover();
        scheduleMidnight();
      }, msUntilMidnight);
    };
    scheduleMidnight();
    const intervalId = window.setInterval(checkMidnightRollover, 5e3);
    const handleVisibility = () => {
      if (document.visibilityState === "visible") {
        checkMidnightRollover();
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);
    return () => {
      window.clearInterval(intervalId);
      if (midnightTimer !== null) window.clearTimeout(midnightTimer);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [activeLocation]);
  const monthlyData = reactExports.useMemo(() => {
    const cacheKey = buildNinePartPanchangCacheKey({
      dateKey: `${selectedYear}-${String(selectedMonth).padStart(2, "0")}`,
      location: activeLocation,
      config: {
        tradition,
        sampradaya,
        ayanamsha: observanceState.ayanamsha,
        nodeMode: observanceState.nodeMode
      },
      observanceProfile: getObservanceProfileKey(observanceState, activeLocation)
    });
    const cached = getCachedAstrologicalData("monthly_panchang", cacheKey);
    if (cached && Array.isArray(cached.currentMonthDays) && cached.currentMonthDays.length > 0) {
      return cached;
    }
    const computed = generateMonthlyPanchang(selectedYear, selectedMonth, todayRef, activeLocation, {
      tradition,
      sampradaya,
      ayanamsha: observanceState.ayanamsha,
      nodeMode: observanceState.nodeMode
    });
    setCachedAstrologicalData("monthly_panchang", computed, cacheKey);
    return computed;
  }, [selectedYear, selectedMonth, todayRef, activeLocation, activeTimeZone, tradition, sampradaya, observanceState]);
  const rawSelectedDayData = reactExports.useMemo(() => {
    const days = monthlyData?.currentMonthDays || [];
    const found = days.find((d) => d.day === selectedDayNum);
    return found || days[0] || buildSingleDayPanchang(selectedYear, selectedMonth, 1, true, todayRef, activeLocation, {
      tradition,
      sampradaya,
      ayanamsha: observanceState.ayanamsha,
      nodeMode: observanceState.nodeMode
    });
  }, [monthlyData, selectedDayNum, selectedYear, selectedMonth, todayRef, activeLocation, tradition, sampradaya, observanceState]);
  const { validatedData: verifiedDayData, validation: panchangValidation } = useVedicValidation(
    rawSelectedDayData,
    "panchang"
  );
  const selectedDayData = verifiedDayData || rawSelectedDayData;
  const primarySamvatsara = reactExports.useMemo(
    () => resolvePrimarySamvatsaraForLocation(selectedDayData, activeLocation),
    [selectedDayData, activeLocation]
  );
  const selectedDaySaralArtha = reactExports.useMemo(
    () => buildPanchangSaralArthaHi(selectedDayData),
    [selectedDayData]
  );
  const livePanchangCardPayload = reactExports.useMemo(() => {
    const freeShreshthaMeta = resolveBhadraRahuFreeShreshthaSamay(selectedDayData);
    const choghadiyaSummary = selectedDayData.choghadiyaFreeSummary || freeShreshthaMeta.choghadiyaFreeSummary || void 0;
    const nightShubhSlots = (selectedDayData.nightChoghadiya || []).filter((c) => c.type === "amrit" || c.type === "shubh" || c.type === "labh").slice(0, 2).map((c) => `${c.hindiName} ${c.time}`).join(", ");
    const shastricSummary = buildPanchangShastricSummaryForShare(selectedDayData);
    const abConflict = selectedDayData.abhijitConflict;
    const cleanAbhijitCardVal = abConflict?.isWednesdayProhibited ? selectedDayData.abhijitMuhurat : abConflict?.hasOverlap ? abConflict.fullWindowHi : selectedDayData.abhijitMuhurat.includes("भद्रा प्रभावी") ? selectedDayData.abhijitMuhurat : freeShreshthaMeta.pureAbhijitWindow || selectedDayData.abhijitMuhurat.replace(/\s*\(अति शुभ\)/gu, "").trim();
    return {
      variant: "panchang",
      badge: selectedDayData.isToday ? `आज का शुद्ध दृक गणित पंचांग • ${activeLocation.hindiName.split(",")[0]}` : `${activeLocation.hindiName.split(",")[0]} पंचांग • ${selectedDayData.formattedDateHindi}`,
      title: `${selectedDayData.formattedDateHindi} (${selectedDayData.vaarHindi})`,
      subtitle: `${selectedDayData.paksha} • ${primarySamvatsara.headerLineHi}`,
      dateOrLocation: activeLocation.hindiName,
      panchangData: {
        isToday: selectedDayData.isToday,
        cityHindi: resolveHindiCityDisplayName(activeLocation.hindiName),
        timezoneLabel: selectedDayData.timezoneShortLabel || "IST",
        regionalTraditionBadge: selectedDayData.regionalTraditionBadgeHi || (selectedDayData.tradition === "AMANTA" ? "अमांत परंपरा" : "पूर्णिमांत परंपरा"),
        dateHindi: selectedDayData.formattedDateHindi,
        vaarHindi: selectedDayData.vaarHindi,
        hinduDate: `${selectedDayData.hinduMaas} • ${primarySamvatsara.headerLineHi}`,
        samvatText: `${selectedDayData.hinduMaas} • ${primarySamvatsara.headerLineHi}`,
        paksha: selectedDayData.paksha,
        tithi: `${selectedDayData.tithiName} (${selectedDayData.tithiEndTime})`,
        tithiEndTime: selectedDayData.tithiEndTime,
        nakshatra: `${selectedDayData.nakshatra} — ${selectedDayData.nakshatraEndTime}`,
        nakshatraEndTime: selectedDayData.nakshatraEndTime,
        yoga: `${selectedDayData.yoga} (${selectedDayData.yogaEndTime})`,
        karana: `${selectedDayData.karana} (${selectedDayData.karanaEndTime})`,
        sunrise: selectedDayData.sunrise,
        sunset: selectedDayData.sunset,
        abhijitMuhurat: cleanAbhijitCardVal,
        abhijitWarning: selectedDayData.kalVedhaReport?.abhijit?.inlineAlertHi || (abConflict?.hasOverlap ? abConflict.warningMessageHi || void 0 : void 0),
        amritKaal: selectedDayData.amritKaal,
        rahuKaal: selectedDayData.rahuKaal,
        bhadraKaal: selectedDayData.bhadraKaal,
        panchakKaal: selectedDayData.panchakKaal,
        sarvarthaSiddhiYoga: selectedDayData.sarvarthaSiddhiYoga,
        sankrantiName: selectedDayData.sankrantiName,
        sankrantiPunyaKaal: selectedDayData.sankrantiPunyaKaalHi,
        diwaliPradoshKaal: selectedDayData.diwaliPradoshKaalHi,
        diwaliVrishabhaLagna: selectedDayData.diwaliVrishabhaLagnaHi,
        chandraRashi: selectedDayData.chandraRashi,
        dishaShool: selectedDayData.dishaShool,
        dishaShoolRemedy: selectedDayData.dishaShoolRemedy,
        choghadiyaSummary,
        nightChoghadiyaSummary: nightShubhSlots || void 0,
        eclipsedChoghadiyaLine: selectedDayData.eclipsedChoghadiyaLineHi,
        pureAshubhChoghadiyaLine: selectedDayData.pureAshubhDayChoghadiyaLineHi,
        gulikaKaal: selectedDayData.gulikaKaal,
        gandmoolNakshatra: selectedDayData.gandmoolNakshatra,
        kartikadiFootnote: selectedDayData.kartikadiFootnoteHi,
        deltaTNote: selectedDayData.deltaTNoteHi,
        festivalName: selectedDayData.festivalName,
        shastricInsight: shastricSummary.cardInsightHi,
        specialNote: selectedDayData.festivalDescription || shastricSummary.cardInsightHi || `योग: ${selectedDayData.yoga} • चंद्र राशि: ${selectedDayData.chandraRashi} • दिशाशूल: ${selectedDayData.dishaShool}`
      },
      highlights: [
        { label: "तिथि व नक्षत्र", value: `${selectedDayData.tithiName} • ${selectedDayData.nakshatra}` },
        { label: "सूर्योदय / सूर्यास्त", value: `${selectedDayData.sunrise} / ${selectedDayData.sunset}` },
        { label: "अभिजित मुहूर्त", value: cleanAbhijitCardVal },
        { label: "राहुकाल (वर्जित)", value: selectedDayData.rahuKaal }
      ],
      message: selectedDayData.festivalName ? `विशेष व्रत-पर्व: ${selectedDayData.festivalName} — ${selectedDayData.festivalDescription || "पण्डित जी ऑनलाइन पर विस्तृत पूजा विधि एवं मुहूर्त देखें।"}` : `योग: ${selectedDayData.yoga} • चंद्र राशि: ${selectedDayData.chandraRashi} • दिशाशूल: ${selectedDayData.dishaShool}`,
      shareUrl: "https://www.panditjionline.online/panchang",
      fileNameSlug: `panchang-${selectedDayData.year}-${selectedDayData.month}-${selectedDayData.day}`
    };
  }, [activeLocation.hindiName, selectedDayData]);
  reactExports.useEffect(() => {
    setLivePageCardPayload("panchang", livePanchangCardPayload);
    return () => setLivePageCardPayload("panchang", null);
  }, [livePanchangCardPayload]);
  const selectedDayStrips = reactExports.useMemo(() => {
    if (selectedDayData.festivalOccurrences && selectedDayData.festivalOccurrences.length > 0) {
      return selectedDayData.festivalOccurrences.map((occ) => occ.nameHi);
    }
    const fest = selectedDayData.festivalName?.trim();
    if (!fest) {
      return [
        `तिथि विशेष: ${selectedDayData.tithiName} • ${selectedDayData.paksha}`,
        `नक्षत्र: ${selectedDayData.nakshatra} (अमृत काल: ${selectedDayData.amritKaal.split(" (")[0]})`,
        selectedDayData.abhijitMuhurat.includes("मान्य नहीं") ? `अभिजित मुहूर्त: ${selectedDayData.abhijitMuhurat}` : `शुभ अभिजित मुहूर्त: ${selectedDayData.abhijitMuhurat}`
      ];
    }
    const parts = fest.split(/•|,/).map((s) => s.trim()).filter(Boolean);
    return parts.length > 0 ? parts : [fest];
  }, [selectedDayData]);
  const renderDeityArtwork = (dayData) => {
    const fest = (dayData.festivalName || "").toLowerCase();
    const deity = (dayData.festivalDeity || "").toLowerCase();
    const text = `${fest} ${deity} ${dayData.tithiName}`;
    if (fest.includes("छठ") || fest.includes("अर्घ्य") || fest.includes("भानु") || fest.includes("खरना") || fest.includes("नहाय") || fest.includes("सूर्य षष्ठी")) {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-orange-950 via-slate-900 to-red-950 border-2 border-orange-400/70 flex flex-col items-center justify-center p-1 text-center shadow-lg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "chhath-arghya", className: "w-7 h-7 sm:w-8 sm:h-8 text-amber-300" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] sm:text-[10px] font-extrabold text-amber-300 font-vedic mt-1", children: "सूर्य अर्घ्य" })
      ] });
    }
    if (fest.includes("संक्रांति") || fest.includes("सूर्य")) {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-orange-950 via-slate-900 to-red-950 border-2 border-orange-400/70 flex flex-col items-center justify-center p-1 text-center shadow-lg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "sun", className: "w-7 h-7 sm:w-8 sm:h-8 text-amber-300" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] sm:text-[10px] font-extrabold text-amber-300 font-vedic mt-1", children: "सूर्य देव" })
      ] });
    }
    if (text.includes("दीपावली") || text.includes("दिवाली") || text.includes("लक्ष्मी") || text.includes("धनतेरस") || text.includes("कुबेर")) {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-yellow-950 via-red-950 to-amber-950 border-2 border-yellow-300 flex flex-col items-center justify-center p-1 text-center shadow-lg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "diya", className: "w-7 h-7 sm:w-8 sm:h-8 text-yellow-200" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] sm:text-[10px] font-extrabold text-yellow-200 font-vedic mt-1", children: "महालक्ष्मी" })
      ] });
    }
    if (text.includes("गोपाष्टमी") || text.includes("गोवत्स") || text.includes("गौ")) {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-amber-950 via-slate-900 to-emerald-950 border-2 border-amber-400/75 flex flex-col items-center justify-center p-1 text-center shadow-lg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "cow", className: "w-7 h-7 sm:w-8 sm:h-8 text-amber-200" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] sm:text-[10px] font-extrabold text-amber-200 font-vedic mt-1", children: "गौ माता" })
      ] });
    }
    if (text.includes("जन्माष्टमी") || text.includes("मोरपंख") || text.includes("राधाष्टमी")) {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-sky-950 via-slate-900 to-emerald-950 border-2 border-cyan-400/70 flex flex-col items-center justify-center p-1 text-center shadow-lg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "morpankh", className: "w-7 h-7 sm:w-8 sm:h-8 text-cyan-300" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] sm:text-[10px] font-extrabold text-cyan-200 font-vedic mt-1", children: "श्री कृष्ण" })
      ] });
    }
    if (text.includes("कृष्ण") || text.includes("गोवर्धन")) {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-sky-950 via-slate-900 to-amber-950 border-2 border-amber-400/70 flex flex-col items-center justify-center p-1 text-center shadow-lg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "bansuri", className: "w-7 h-7 sm:w-8 sm:h-8 text-yellow-300" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] sm:text-[10px] font-extrabold text-yellow-300 font-vedic mt-1", children: "श्री कृष्ण" })
      ] });
    }
    if (text.includes("वैकुण्ठ") || text.includes("देवुत्थान") || text.includes("प्रबोधिनी")) {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-amber-950 via-slate-900 to-yellow-950 border-2 border-yellow-400/80 flex flex-col items-center justify-center p-1 text-center shadow-lg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "shankha-chakra", className: "w-7 h-7 sm:w-8 sm:h-8 text-yellow-300" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] sm:text-[10px] font-extrabold text-yellow-300 font-vedic mt-1", children: "श्री हरि" })
      ] });
    }
    if (text.includes("विष्णु") || text.includes("तुलसी") || text.includes("एकादशी") || text.includes("नारायण")) {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-amber-950 via-slate-900 to-yellow-950 border-2 border-yellow-400/80 flex flex-col items-center justify-center p-1 text-center shadow-lg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "lotus", className: "w-7 h-7 sm:w-8 sm:h-8 text-yellow-300" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] sm:text-[10px] font-extrabold text-yellow-300 font-vedic mt-1", children: "श्री हरि" })
      ] });
    }
    if (text.includes("गणेश") || text.includes("चतुर्थी") || text.includes("विनायक") || text.includes("संकष्टी")) {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-red-950 via-slate-900 to-amber-950 border-2 border-red-400/70 flex flex-col items-center justify-center p-1 text-center shadow-lg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "ganesha", className: "w-7 h-7 sm:w-8 sm:h-8 text-red-300" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] sm:text-[10px] font-extrabold text-red-300 font-vedic mt-1", children: "श्री गणेश" })
      ] });
    }
    if (text.includes("शैलपुत्री") || text.includes("ब्रह्मचारिणी") || text.includes("चन्द्रघण्टा") || text.includes("चंद्रघंटा") || text.includes("कूष्माण्डा") || text.includes("कुष्मांडा") || text.includes("स्कन्दमाता") || text.includes("स्कंदमाता") || text.includes("कात्यायनी") || text.includes("कालरात्रि") || text.includes("महागौरी") || text.includes("सिद्धिदात्री") || text.includes("नवरात्रि") || text.includes("दुर्गा")) {
      const deviTag = text.includes("शैलपुत्री") ? "माँ शैलपुत्री" : text.includes("ब्रह्मचारिणी") ? "माँ ब्रह्मचारिणी" : text.includes("चन्द्रघण्टा") || text.includes("चंद्रघंटा") ? "माँ चन्द्रघण्टा" : text.includes("कूष्माण्डा") || text.includes("कुष्मांडा") ? "माँ कूष्माण्डा" : text.includes("स्कन्दमाता") || text.includes("स्कंदमाता") ? "माँ स्कन्दमाता" : text.includes("कात्यायनी") ? "माँ कात्यायनी" : text.includes("कालरात्रि") ? "माँ कालरात्रि" : text.includes("महागौरी") ? "माँ महागौरी" : text.includes("राम नवमी") ? "श्री राम•सिद्धिदात्री" : text.includes("सिद्धिदात्री") ? "माँ सिद्धिदात्री" : "माँ नवदुर्गा";
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-red-950 via-rose-950 to-amber-950 border-2 border-red-400/80 flex flex-col items-center justify-center p-1 text-center shadow-lg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "trishul", className: "w-7 h-7 sm:w-8 sm:h-8 text-yellow-300" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8.5px] sm:text-[9.5px] font-extrabold text-yellow-200 font-vedic mt-1 leading-tight", children: deviTag })
      ] });
    }
    if (text.includes("शिव") || text.includes("प्रदोष") || text.includes("रुद्र") || text.includes("विश्वेश्वर")) {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-indigo-950 via-slate-900 to-amber-950 border-2 border-indigo-400/70 flex flex-col items-center justify-center p-1 text-center shadow-lg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "trishul", className: "w-7 h-7 sm:w-8 sm:h-8 text-indigo-300" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] sm:text-[10px] font-extrabold text-indigo-300 font-vedic mt-1", children: "महादेव" })
      ] });
    }
    if (text.includes("पूर्णिमा") || text.includes("चन्द्र") || text.includes("शरद")) {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-slate-900 via-sky-950 to-indigo-950 border-2 border-sky-300/70 flex flex-col items-center justify-center p-1 text-center shadow-lg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "full-moon", className: "w-7 h-7 sm:w-8 sm:h-8 text-sky-200" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] sm:text-[10px] font-extrabold text-sky-200 font-vedic mt-1", children: "पूर्ण चन्द्र" })
      ] });
    }
    if (text.includes("अक्षय") || text.includes("आंवला") || text.includes("वट")) {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-emerald-950 via-slate-900 to-amber-950 border-2 border-emerald-400/70 flex flex-col items-center justify-center p-1 text-center shadow-lg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "sprout", tone: "auspicious", className: "w-7 h-7 sm:w-8 sm:h-8" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] sm:text-[10px] font-extrabold text-emerald-300 font-vedic mt-1", children: "आंवला नवमी" })
      ] });
    }
    if (text.includes("भैया दूज") || text.includes("रक्षा")) {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-rose-950 via-slate-900 to-amber-950 border-2 border-rose-400/70 flex flex-col items-center justify-center p-1 text-center shadow-lg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "rakhi", className: "w-7 h-7 sm:w-8 sm:h-8 text-rose-300" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] sm:text-[10px] font-extrabold text-rose-300 font-vedic mt-1", children: "भैया दूज" })
      ] });
    }
    if (text.includes("लाभ") || text.includes("बही")) {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-amber-950 via-slate-900 to-yellow-950 border-2 border-amber-400/80 flex flex-col items-center justify-center p-1 text-center shadow-lg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "book", className: "w-7 h-7 sm:w-8 sm:h-8 text-yellow-300" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] sm:text-[10px] font-extrabold text-yellow-300 font-vedic mt-1", children: "शुभ लाभ" })
      ] });
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-amber-950 via-yellow-950 to-slate-900 border-2 border-amber-500/80 flex flex-col items-center justify-center p-1 text-center shadow-lg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "kalash", className: "w-7 h-7 sm:w-8 sm:h-8 text-amber-200" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] sm:text-[10px] font-extrabold text-amber-200 font-vedic mt-1", children: "मंगल कलश" })
    ] });
  };
  const tenDayPanchangList = reactExports.useMemo(() => {
    const gridByKey = /* @__PURE__ */ new Map();
    for (const item of monthlyData?.daysGrid || []) {
      const k = `${String(item.year).padStart(4, "0")}-${String(item.month).padStart(2, "0")}-${String(item.day).padStart(2, "0")}`;
      gridByKey.set(k, item);
    }
    const list = [];
    for (let offset = 0; offset < 10; offset++) {
      const dt = createSafeUtcDate(selectedYear, selectedMonth - 1, selectedDayNum + offset, 12, 0, 0);
      const y = dt.getUTCFullYear();
      if (y < MIN_PANCHANG_YEAR || y > MAX_PANCHANG_YEAR) continue;
      const m = dt.getUTCMonth() + 1;
      const d = dt.getUTCDate();
      const k = `${String(y).padStart(4, "0")}-${String(m).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
      const existing = gridByKey.get(k);
      if (existing) {
        list.push(existing);
      } else {
        list.push(
          buildSingleDayPanchang(y, m, d, m === selectedMonth, todayRef, activeLocation, {
            tradition,
            sampradaya,
            ayanamsha: observanceState.ayanamsha,
            nodeMode: observanceState.nodeMode
          })
        );
      }
    }
    return list;
  }, [monthlyData, selectedYear, selectedMonth, selectedDayNum, todayRef, activeLocation, tradition, sampradaya, observanceState]);
  const handleApplyDraftDate = (overrideIso) => {
    const iso = (overrideIso || draftDateIso || "").trim();
    const parts = iso.split("-").map((n) => parseInt(n, 10));
    if (parts.length !== 3 || parts.some(Number.isNaN)) return;
    const [y, m, d] = parts;
    const clampedY = Math.max(MIN_PANCHANG_YEAR, Math.min(MAX_PANCHANG_YEAR, y));
    const clampedM = Math.max(1, Math.min(12, m));
    const maxD = getDaysInMonthSafe(clampedY, clampedM);
    const clampedD = Math.max(1, Math.min(d, maxD));
    safePlayClick();
    setSelectedYear(clampedY);
    setSelectedMonth(clampedM);
    setSelectedDayNum(clampedD);
  };
  const handlePrevMonth = () => {
    if (selectedYear <= MIN_PANCHANG_YEAR && selectedMonth <= 1) return;
    safePlayClick();
    setMonthTransitionDir("prev");
    let newM = selectedMonth - 1;
    let newY = selectedYear;
    if (selectedMonth === 1) {
      newM = 12;
      newY = Math.max(MIN_PANCHANG_YEAR, selectedYear - 1);
    }
    setSelectedMonth(newM);
    setSelectedYear(newY);
    const maxD = getDaysInMonthSafe(newY, newM);
    setSelectedDayNum((prev) => Math.min(prev, maxD));
  };
  const handleNextMonth = () => {
    if (selectedYear >= MAX_PANCHANG_YEAR && selectedMonth >= 12) return;
    safePlayClick();
    setMonthTransitionDir("next");
    let newM = selectedMonth + 1;
    let newY = selectedYear;
    if (selectedMonth === 12) {
      newM = 1;
      newY = Math.min(MAX_PANCHANG_YEAR, selectedYear + 1);
    }
    setSelectedMonth(newM);
    setSelectedYear(newY);
    const maxD = getDaysInMonthSafe(newY, newM);
    setSelectedDayNum((prev) => Math.min(prev, maxD));
  };
  const prevMonthNameLabel = HINDI_GREGORIAN_MONTHS[(selectedMonth === 1 ? 12 : selectedMonth - 1) - 1];
  const nextMonthNameLabel = HINDI_GREGORIAN_MONTHS[(selectedMonth === 12 ? 1 : selectedMonth + 1) - 1];
  const handleSwipeTouchStart = (e) => {
    if (e.touches.length !== 1) return;
    swipeStartRef.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
      active: true,
      isHorizontal: false
    };
  };
  const handleSwipeTouchMove = (e) => {
    const start = swipeStartRef.current;
    if (!start || !start.active || e.touches.length !== 1) return;
    const dx = e.touches[0].clientX - start.x;
    const dy = e.touches[0].clientY - start.y;
    if (!start.isHorizontal) {
      if (Math.abs(dy) > 10 && Math.abs(dy) > Math.abs(dx)) {
        start.active = false;
        setIsSwiping(false);
        setSwipeOffsetX(0);
        return;
      }
      if (Math.abs(dx) > 12 && Math.abs(dx) > Math.abs(dy) * 1.15) {
        start.isHorizontal = true;
        setIsSwiping(true);
      }
    }
    if (start.isHorizontal) {
      const damped = Math.max(-96, Math.min(96, dx * 0.55));
      setSwipeOffsetX(damped);
    }
  };
  const handleSwipeTouchEnd = (e) => {
    const start = swipeStartRef.current;
    if (start && start.active && start.isHorizontal && e.changedTouches.length > 0) {
      const dx = e.changedTouches[0].clientX - start.x;
      if (Math.abs(dx) >= 48) {
        suppressClickUntilRef.current = Date.now() + 350;
        if (dx < 0) {
          handleNextMonth();
        } else {
          handlePrevMonth();
        }
      }
    }
    swipeStartRef.current = null;
    setIsSwiping(false);
    setSwipeOffsetX(0);
  };
  const handleSwipeMouseDown = (e) => {
    if (e.button !== 0) return;
    swipeStartRef.current = {
      x: e.clientX,
      y: e.clientY,
      active: true,
      isHorizontal: false
    };
  };
  const handleSwipeMouseMove = (e) => {
    const start = swipeStartRef.current;
    if (!start || !start.active) return;
    const dx = e.clientX - start.x;
    const dy = e.clientY - start.y;
    if (!start.isHorizontal) {
      if (Math.abs(dy) > 12 && Math.abs(dy) > Math.abs(dx)) {
        start.active = false;
        return;
      }
      if (Math.abs(dx) > 16 && Math.abs(dx) > Math.abs(dy) * 1.2) {
        start.isHorizontal = true;
        setIsSwiping(true);
      }
    }
    if (start.isHorizontal) {
      const damped = Math.max(-96, Math.min(96, dx * 0.55));
      setSwipeOffsetX(damped);
    }
  };
  const handleSwipeMouseFinish = (e) => {
    const start = swipeStartRef.current;
    if (start && start.active && start.isHorizontal) {
      const dx = e.clientX - start.x;
      if (Math.abs(dx) >= 52) {
        suppressClickUntilRef.current = Date.now() + 350;
        if (dx < 0) {
          handleNextMonth();
        } else {
          handlePrevMonth();
        }
      }
    }
    swipeStartRef.current = null;
    setIsSwiping(false);
    setSwipeOffsetX(0);
  };
  const handleJumpToToday = () => {
    try {
      vedicAudio?.playTempleBell?.(0.45);
    } catch {
    }
    const now = /* @__PURE__ */ new Date();
    const tz = resolveSafeTimezone(activeLocation);
    const local = getLocalDateParts(now, tz);
    lastDateKeyRef.current = local.dateKey;
    setTodayRef(now);
    setSelectedYear(local.year);
    setSelectedMonth(local.month);
    setSelectedDayNum(local.day);
    setActiveFilter("all");
  };
  const handleSelectDay = (dayItem) => {
    safePlayClick();
    if (!dayItem.isCurrentMonth || dayItem.year !== selectedYear || dayItem.month !== selectedMonth) {
      setSelectedYear(dayItem.year);
      setSelectedMonth(dayItem.month);
    }
    setSelectedDayNum(dayItem.day);
  };
  const handleSelectRituOption = (targetRituName) => {
    safePlayClick();
    if (selectedDayData.ritu === targetRituName) {
      return;
    }
    const rituMeta = VEDIC_RITU_GUIDE.find((r) => r.name === targetRituName);
    const orderedMonths = Array.from(
      /* @__PURE__ */ new Set([...rituMeta?.approxMonths ?? [], 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
    );
    for (const m of orderedMonths) {
      const daysInM = getDaysInMonthSafe(selectedYear, m);
      const sampleDays = [1, 8, 15, 22, daysInM].filter((d) => d <= daysInM);
      let hit = false;
      for (const sd of sampleDays) {
        const probe = buildSingleDayPanchang(selectedYear, m, sd, true, todayRef, activeLocation, {
          tradition,
          sampradaya,
          ayanamsha: observanceState.ayanamsha,
          nodeMode: observanceState.nodeMode
        });
        if (probe.ritu === targetRituName) {
          hit = true;
          break;
        }
      }
      if (!hit) continue;
      let firstMatchDay = 1;
      for (let d = 1; d <= daysInM; d++) {
        const dayObj = buildSingleDayPanchang(selectedYear, m, d, true, todayRef, activeLocation, {
          tradition,
          sampradaya,
          ayanamsha: observanceState.ayanamsha,
          nodeMode: observanceState.nodeMode
        });
        if (dayObj.ritu === targetRituName) {
          firstMatchDay = d;
          break;
        }
      }
      setSelectedMonth(m);
      setSelectedDayNum(firstMatchDay);
      setActiveFilter("all");
      return;
    }
  };
  const matchesFilter = (dayItem) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "mahaparv") {
      return Boolean(dayItem.festivalName);
    }
    if (activeFilter === "ekadashi_pradosh") {
      return dayItem.isEkadashi || dayItem.isPradosh || dayItem.isChaturthi || dayItem.isShivratri;
    }
    if (activeFilter === "purnima_amavasya") {
      return dayItem.isPurnima || dayItem.isAmavasya;
    }
    if (activeFilter === "muhurat") {
      return dayItem.shubhMuhurats.length > 0;
    }
    return true;
  };
  const getCellBadgeInfo = (dayItem) => {
    if (dayItem.isPurnima) {
      return {
        symbolName: "full-moon",
        badgeText: "पूर्णिमा",
        badgeClass: "bg-amber-500/30 text-yellow-200 border-amber-400/60"
      };
    }
    if (dayItem.isAmavasya) {
      return {
        symbolName: "new-moon",
        badgeText: "अमावस्या",
        badgeClass: "bg-indigo-950/90 text-indigo-200 border-indigo-400/50"
      };
    }
    if (dayItem.isEkadashi) {
      return {
        symbolName: "moon",
        badgeText: "एकादशी",
        badgeClass: "bg-emerald-950/90 text-emerald-300 border-emerald-500/50"
      };
    }
    if (dayItem.isPradosh) {
      return {
        symbolName: "trishul",
        badgeText: "प्रदोष",
        badgeClass: "bg-purple-950/90 text-purple-200 border-purple-400/50"
      };
    }
    if (dayItem.festivalCategory === "mahaparv") {
      return {
        symbolName: "diya",
        badgeText: "महापर्व",
        badgeClass: "bg-red-900/70 text-amber-200 border-red-400/60"
      };
    }
    if (dayItem.isChaturthi) {
      return {
        symbolName: "tilak",
        badgeText: "चतुर्थी",
        badgeClass: "bg-orange-950/80 text-orange-200 border-orange-500/40"
      };
    }
    return null;
  };
  const muhuratGroups = reactExports.useMemo(() => {
    const groups = {
      griha_pravesh: {
        title: "गृह प्रवेश एवं वास्तु पूजन मुहूर्त",
        icon: "home",
        desc: "नूतन गृह प्रवेश, भूमि पूजन एवं वास्तु शांति हेतु श्रेष्ठ तिथियां",
        days: []
      },
      vivah: {
        title: "शुभ विवाह एवं सगाई मुहूर्त",
        icon: "vivah",
        desc: "विवाह, रोका, सगाई एवं मांगलिक परिणय संस्कार तिथियां",
        days: []
      },
      vahan: {
        title: "वाहन, स्वर्ण एवं प्रॉपर्टी क्रय मुहूर्त",
        icon: "vahan",
        desc: "नया वाहन, मकान, भूमि या आभूषण खरीदने हेतु शुभ दिवस",
        days: []
      },
      sarvartha_siddhi: {
        title: "सर्वार्थ सिद्धि एवं नया व्यापार मुहूर्त",
        icon: "sparkles",
        desc: "दुकान उद्घाटन, नया व्यवसाय व महत्वपूर्ण संकल्प हेतु सिद्ध योग",
        days: []
      },
      sanskar: {
        title: "नामकरण एवं अन्नप्राशन संस्कार",
        icon: "baby",
        desc: "शिशु के नामकरण एवं अन्नप्राशन हेतु शुभ नक्षत्र व तिथि (चातुर्मास में भी मान्य)",
        days: []
      },
      mundan: {
        title: "मुंडन (चूड़ाकरण) संस्कार मुहूर्त",
        icon: "sparkles",
        desc: "उत्तरायण / देव प्रबोधन काल में शुभ मुंडन संस्कार तिथियां",
        days: []
      }
    };
    monthlyData.currentMonthDays.forEach((d) => {
      d.shubhMuhurats.forEach((m) => {
        if (groups[m.id]) {
          groups[m.id].days.push(d);
        }
      });
    });
    const hasChaturmasDays = monthlyData.currentMonthDays.some((d) => d.isChaturmas);
    const hasGuruAstaDays = monthlyData.currentMonthDays.some((d) => d.isGuruAsta);
    const hasShukraAstaDays = monthlyData.currentMonthDays.some((d) => d.isShukraAsta);
    const hasKharmasDays = monthlyData.currentMonthDays.some(
      (d) => d.suryaRashi.includes("धनु") || d.suryaRashi.includes("मीन")
    );
    const resolveZeroReason = (groupId) => {
      if (groupId === "vivah" || groupId === "griha_pravesh" || groupId === "mundan") {
        const reasons = [];
        if (hasChaturmasDays) reasons.push("चातुर्मास (देवशयन काल) प्रभावी");
        if (hasGuruAstaDays && hasShukraAstaDays) reasons.push("गुरु एवं शुक्र तारा अस्त");
        else if (hasGuruAstaDays) reasons.push("देवगुरु बृहस्पति तारा अस्त");
        else if (hasShukraAstaDays) reasons.push("शुक्र तारा अस्त");
        if (hasKharmasDays) reasons.push("खरमास (मलमास) प्रभावी");
        if (reasons.length > 0) {
          return `इस माह ${reasons.join(" तथा ")} होने के कारण शास्त्रीय रूप से ${groupId === "vivah" ? "विवाह" : groupId === "griha_pravesh" ? "नूतन गृह प्रवेश" : "मुंडन संस्कार"} वर्जित हैं।`;
        }
      }
      return "इस माह शुद्ध पंचांग शुद्धि के अभाव में व्यक्तिगत कुंडली से मुहूर्त निकलवाएं।";
    };
    return Object.entries(groups).map(([id, g]) => ({
      ...g,
      id,
      zeroReason: resolveZeroReason(id)
    }));
  }, [monthlyData]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "w-full max-w-full overflow-x-hidden space-y-4 sm:space-y-5 animate-fadeIn scroll-mt-24", children: [
    punyaClaimBanner && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        "data-nosnippet": "",
        className: "rounded-2xl bg-gradient-to-r from-amber-900/90 via-yellow-900/80 to-amber-900/90 border border-yellow-400/70 px-4 py-3 shadow-xl flex items-center justify-between gap-3 animate-fadeIn",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5 text-yellow-200 text-xs sm:text-sm font-extrabold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-4 h-4 text-yellow-300 shrink-0 animate-pulse" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: punyaClaimBanner })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setPunyaClaimBanner(null),
              className: "text-[11px] font-bold text-amber-200 hover:text-white px-2 py-0.5 rounded-lg bg-slate-950/50 border border-amber-400/40 cursor-pointer",
              children: "ठीक है"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      LiveTodayPanchangRibbon,
      {
        mode: "panchang",
        onScrollToTodayDetails: () => {
          const el = document.getElementById("today-complete-info-below-calendar");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#2a1205] via-[#170e1d] to-[#0b1120] border-2 border-amber-500/60 p-4 sm:p-6 shadow-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-20 -right-20 w-72 h-72 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-20 -left-20 w-72 h-72 bg-red-600/10 rounded-full blur-3xl pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          "data-nosnippet": true,
          className: "relative z-20 mb-4 p-3.5 rounded-2xl bg-slate-950/95 border border-amber-500/40 space-y-3 [contain:layout_style]",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:items-center justify-between gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-400/50 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-4 h-4 text-yellow-400" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-bold text-amber-300/80 uppercase tracking-wider", children: "पंचांग स्थान (City Ephemeris):" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs sm:text-sm font-black text-yellow-300", children: activeLocation.hindiName || activeLocation.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 rounded-md bg-amber-500/20 border border-amber-400/50 text-[10px] font-extrabold text-yellow-200", children: locationState.source === "default" ? "Default (Rudrapur)" : locationState.source === "gps" ? `GPS${locationState.accuracyMeters ? ` (±${locationState.accuracyMeters}m)` : ""}` : "Manual" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "px-2 py-0.5 rounded-md bg-emerald-950/90 border border-emerald-500/40 text-[10px] font-bold text-emerald-300", children: [
                      Math.abs(activeLocation.lat).toFixed(4),
                      "°",
                      activeLocation.lat >= 0 ? "N" : "S",
                      ",",
                      " ",
                      Math.abs(activeLocation.lon).toFixed(4),
                      "°",
                      activeLocation.lon >= 0 ? "E" : "W",
                      " •",
                      " ",
                      "TZ: ",
                      activeTimeZone
                    ] }),
                    (activeLocation.elevationMeters ?? 0) > 600 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "span",
                      {
                        title: "पर्वतीय ऊँचाई के अनुसार क्षितिज अवनमन (Dip of Horizon) सूर्योदय-सूर्यास्त गणना सक्रिय",
                        className: "px-2 py-0.5 rounded-md bg-sky-950/90 border border-sky-400/45 text-[10px] font-bold text-sky-200",
                        children: [
                          "ऊँचाई: ",
                          Math.round(activeLocation.elevationMeters).toLocaleString("en-IN"),
                          "m"
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(VedicTripleCheckBadge, { validation: panchangValidation, size: "sm" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-amber-200/75 mt-0.5", children: "सूर्योदय, सूर्यास्त, चंद्रोदय, चंद्रास्त, राहुकाल, होरा, चौघड़िया, तिथि व नक्षत्र इस स्थान के सटीक अक्षांश-देशांतर अनुसार लाइव गणना किए गए हैं" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex flex-wrap items-center gap-2 w-full md:w-auto", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleCustomCitySubmit, className: "relative flex-1 md:w-72 min-w-[220px]", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "w-3.5 h-3.5 text-amber-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "text",
                      value: citySearchQuery,
                      onFocus: () => setShowCityDropdown(true),
                      onChange: (e) => {
                        setCitySearchQuery(e.target.value);
                        setLocationSearchNotice(null);
                        setShowCityDropdown(true);
                      },
                      placeholder: "गाँव, शहर, जिला, राज्य, मंदिर या PIN कोड...",
                      className: "w-full pl-8 pr-3 py-1.5 rounded-xl bg-slate-900/95 border border-amber-500/50 text-amber-100 placeholder-amber-300/40 text-xs font-semibold focus:outline-none focus:border-yellow-400"
                    }
                  ),
                  showCityDropdown && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute left-0 right-0 top-full mt-1.5 max-h-72 overflow-y-auto rounded-2xl bg-slate-950/98 border border-amber-500/60 shadow-2xl z-50 divide-y divide-amber-900/30", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-3 py-1.5 bg-amber-950/60 flex items-center justify-between text-[10px] font-bold text-amber-300", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "w-3 h-3 text-yellow-400" }),
                        isSearchingPlaces ? "अखिल भारतीय स्थान खोज रहे हैं..." : "अखिल भारतीय व वैश्विक स्थान"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "button",
                        {
                          type: "button",
                          onClick: () => setShowCityDropdown(false),
                          className: "text-amber-200 hover:text-white cursor-pointer inline-flex items-center gap-1",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "बंद करें" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3 h-3", strokeWidth: 1.5 })
                          ]
                        }
                      )
                    ] }),
                    locationSearchNotice && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-3 py-2 bg-amber-900/40 text-[11px] font-bold text-yellow-200 leading-snug", children: locationSearchNotice }),
                    filteredCities.map((city) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "button",
                      {
                        type: "button",
                        onClick: () => handleSelectCity(city, city.id === DEFAULT_RUDRAPUR_LOCATION.id ? "default" : "manual"),
                        className: "w-full px-3 py-2 text-left hover:bg-amber-900/40 flex items-center justify-between gap-2 transition-colors cursor-pointer",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold text-amber-100 truncate", children: city.hindiName }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-amber-300/70 truncate", children: [city.district, city.state, city.postalCode, city.country].filter(Boolean).join(" • ") || city.name })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-mono text-yellow-300/90 shrink-0", children: [
                            city.lat.toFixed(4),
                            "°, ",
                            city.lon.toFixed(4),
                            "°"
                          ] })
                        ]
                      },
                      city.id
                    )),
                    !isSearchingPlaces && citySearchQuery.trim().length > 1 && filteredCities.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-3 py-2.5 text-[11px] font-semibold text-amber-200 leading-snug", children: "यह स्थान अभी डेटाबेस में नहीं मिला — कृपया 6-अंकीय पिनकोड लिखें या GPS बटन दबाएं।" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "label",
                  {
                    className: "px-2 py-1.5 rounded-xl bg-slate-900/90 border border-amber-500/35 text-[11px] font-bold text-amber-200 inline-flex items-center gap-1.5 cursor-pointer shrink-0",
                    title: "ब्राउज़र बंद होने के बाद भी यही स्थान याद रखें",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "input",
                        {
                          type: "checkbox",
                          checked: locationState.rememberLocation,
                          onChange: (e) => {
                            const nextState = setRememberPanchangLocation(e.target.checked);
                            setLocationState(nextState);
                          },
                          className: "accent-amber-400 cursor-pointer"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "याद रखें" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: handleDetectGpsCity,
                    disabled: isDetectingGps,
                    title: "GPS द्वारा अपना वर्तमान स्थान चुनें",
                    className: "px-2.5 py-1.5 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/35 border border-emerald-400/50 text-emerald-200 text-[11px] font-extrabold flex items-center gap-1 shrink-0 cursor-pointer disabled:opacity-60",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(LocateFixed, { className: "w-3.5 h-3.5 text-emerald-300" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: isDetectingGps ? "खोज रहे हैं..." : "GPS लोकेशन" })
                    ]
                  }
                ),
                locationState.source !== "default" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: handleResetToRudrapur,
                    title: "डिफ़ॉल्ट रुद्रपुर पंचांग पर वापस लौटें",
                    className: "px-2.5 py-1.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-400/50 text-amber-200 text-[11px] font-bold flex items-center gap-1 shrink-0 cursor-pointer",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "w-3 h-3 text-yellow-400" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "रुद्रपुर (Default)" })
                    ]
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-1.5 pt-2 border-t border-amber-500/20", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-extrabold text-amber-300/85 mr-1", children: "प्रमुख शहर:" }),
              popularCityChips.map((city) => {
                const isSelected = activeLocation.id === city.id;
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => handleSelectCity(city, city.id === DEFAULT_RUDRAPUR_LOCATION.id ? "default" : "manual"),
                    className: `px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${isSelected ? "bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-black shadow" : "bg-slate-900/90 hover:bg-amber-950/60 border border-amber-500/30 text-amber-200"}`,
                    children: [
                      city.hindiName.split(",")[0],
                      city.id === "rudrapur" ? " (Default)" : ""
                    ]
                  },
                  city.id
                );
              }),
              profileBirthLoc && profileBirthLoc.id !== DEFAULT_RUDRAPUR_LOCATION.id && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => handleSelectCity(profileBirthLoc, "manual"),
                  className: "px-2.5 py-1 rounded-lg bg-sky-950/80 hover:bg-sky-900/80 border border-sky-400/45 text-sky-200 text-[11px] font-bold inline-flex items-center gap-1 cursor-pointer",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "home", tone: "inherit", className: "w-3 h-3" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                      "जन्म स्थान: ",
                      profileBirthLoc.hindiName.split(",")[0]
                    ] })
                  ]
                }
              )
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-amber-800/40 pb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-200 text-xs font-bold mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3.5 h-3.5 text-yellow-400" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "श्री ज्योतिष वैदिक संस्थान • ",
              activeLocation.hindiName.split(",")[0],
              " वैदिक पंचांग • पण्डित शशांक शर्मा"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl sm:text-3xl font-extrabold font-vedic text-amber-100 leading-tight", children: "आज का पंचांग, शुभ मुहूर्त एवं सम्पूर्ण मासिक हिन्दू कैलेंडर" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm text-amber-100/90 mt-1 max-w-2xl leading-relaxed", children: "प्रतिदिन लाइव अपडेटेड शुद्ध दृक गणित पंचांग — आज की तिथि, नक्षत्र, योग, करण, सूर्योदय-सूर्यास्त, अभिजित मुहूर्त, राहुकाल, दिन-रात का चौघड़िया, एकादशी और प्रमुख सनातन व्रत-त्योहार।" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { "data-nosnippet": true, className: "text-xs sm:text-sm text-amber-300/90 mt-1 font-medium flex flex-wrap items-center gap-x-2 gap-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-yellow-300 font-bold", children: primarySamvatsara.headerLineHi }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "•" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-300 font-semibold", children: monthlyData.hinduMaasRange }),
            monthlyData.hasAdhikaMasaInMonth && monthlyData.adhikaMasaLabelHi && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "•" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 rounded bg-amber-500/20 border border-amber-400/50 text-yellow-200 font-bold text-[11px]", children: monthlyData.adhikaMasaLabelHi })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "•" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 rounded bg-emerald-950/75 border border-emerald-500/45 text-emerald-200 font-bold", children: selectedDayData.ritu }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "•" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-amber-200 font-semibold", children: selectedDayData.ayana })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-nosnippet": true, className: "flex flex-wrap items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: handlePrevMonth,
              className: "h-8 w-8 inline-flex items-center justify-center rounded-lg bg-slate-900/90 hover:bg-amber-900/60 border border-amber-500/40 text-amber-200 transition-colors cursor-pointer shrink-0",
              title: "पिछला महीना",
              "aria-label": "पिछला महीना",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-4 h-4" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex flex-nowrap items-center gap-1.5 bg-slate-950/90 px-1.5 py-1 rounded-xl border border-amber-500/45 shadow-inner", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              VedicDateInput,
              {
                ariaLabel: "विशिष्ट तारीख चुनें (1600–2500 ई.)",
                minYear: MIN_PANCHANG_YEAR,
                maxYear: MAX_PANCHANG_YEAR,
                variant: "dark",
                value: draftDateIso,
                onChange: (iso) => {
                  if (iso) setDraftDateIso(iso);
                },
                onEnterPress: (iso) => handleApplyDraftDate(iso)
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => handleApplyDraftDate(),
                className: "h-8 px-2.5 rounded-lg bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-slate-950 font-extrabold text-xs shadow-sm cursor-pointer transition-colors shrink-0",
                title: "चयनित तिथि का पंचांग देखें",
                children: "देखें"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: handleNextMonth,
              className: "h-8 w-8 inline-flex items-center justify-center rounded-lg bg-slate-900/90 hover:bg-amber-900/60 border border-amber-500/40 text-amber-200 transition-colors cursor-pointer shrink-0",
              title: "अगला महीना",
              "aria-label": "अगला महीना",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: handleJumpToToday,
              className: "h-8 px-2.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/35 border border-amber-400/60 text-yellow-200 font-extrabold text-xs shadow-sm cursor-pointer transition-colors shrink-0",
              title: "आज की वास्तविक तिथि पर लौटें",
              children: "आज की तिथि"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mt-3 p-2.5 sm:p-3 rounded-2xl bg-gradient-to-r from-amber-950/90 via-slate-900 to-amber-950/90 border border-yellow-400/60 flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-lg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "px-2.5 py-0.5 rounded-lg bg-yellow-400 text-slate-950 font-black text-xs inline-flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "pin", tone: "inherit", className: "w-3.5 h-3.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "चयनित तिथि:" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs sm:text-sm font-extrabold text-amber-100 flex flex-wrap items-center gap-x-2 gap-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-yellow-300", children: selectedDayData.formattedDateHindi }),
              " (",
              selectedDayData.vaarHindi,
              ")"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-amber-300/90 text-xs font-semibold", children: [
              "• ",
              selectedDayData.hinduMaas,
              " • ",
              selectedDayData.paksha,
              " • ",
              selectedDayData.tithiShort
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "px-2 py-0.5 rounded-lg bg-emerald-950/90 border border-emerald-400/55 text-emerald-200 text-xs font-extrabold", children: [
              "ऋतु: ",
              selectedDayData.ritu,
              " • ",
              selectedDayData.ayana
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => {
              const el = document.getElementById("selected-day-panchang-details");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            },
            className: "px-3 py-1.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-400/60 text-yellow-200 text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer self-start sm:self-auto shrink-0",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3.5 h-3.5 text-yellow-400", strokeWidth: 1.5 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "इस तिथि का सम्पूर्ण पंचांग देखें" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          "data-nosnippet": true,
          className: "relative z-10 mt-2.5 p-2.5 sm:p-3 rounded-2xl bg-slate-950/80 border border-emerald-500/35 flex flex-col lg:flex-row lg:items-center justify-between gap-2.5",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-1.5 text-xs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 rounded-md bg-emerald-500/20 border border-emerald-400/50 text-emerald-300 font-extrabold", children: "वैदिक ऋतु विकल्प (6 ऋतु चक्र):" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-amber-200/90 font-semibold", children: [
                "चयनित तिथि (",
                selectedDayData.formattedDateHindi,
                "):",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-yellow-300", children: selectedDayData.ritu }),
                " ",
                "(",
                VEDIC_RITU_GUIDE.find((r) => r.name === selectedDayData.ritu)?.months || selectedDayData.hinduMaas,
                ") •",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-300", children: selectedDayData.ayana })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap items-center gap-1.5", children: VEDIC_RITU_GUIDE.map((rituItem) => {
              const isActiveRitu = selectedDayData.ritu === rituItem.name;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => handleSelectRituOption(rituItem.name),
                  title: `${selectedYear} में ${rituItem.name} (${rituItem.months}) की तिथियां देखें`,
                  className: `px-2.5 py-1 rounded-xl text-[11px] font-bold transition-all cursor-pointer border ${isActiveRitu ? "bg-gradient-to-r from-emerald-500 to-amber-400 text-slate-950 border-yellow-200 font-black shadow" : "bg-slate-900/90 text-amber-200/90 border-amber-700/40 hover:border-emerald-400/60 hover:text-emerald-200"}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: rituItem.short }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `ml-1 text-[10px] ${isActiveRitu ? "text-slate-900/85" : "text-amber-400/75"}`, children: [
                      "(",
                      rituItem.months,
                      ")"
                    ] })
                  ]
                },
                rituItem.name
              );
            }) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 pt-4 flex flex-col lg:flex-row lg:items-center justify-between gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-1.5 sm:gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-amber-300/90 font-semibold flex items-center gap-1 mr-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Funnel, { className: "w-3.5 h-3.5 text-amber-400", strokeWidth: 1.5 }),
            " पंचांग फ़िल्टर:"
          ] }),
          [
            { id: "all", label: `सभी तिथियां (${monthlyData.filterCounts?.allDays ?? monthlyData.currentMonthDays.length})`, icon: "calendar" },
            {
              id: "mahaparv",
              label: `व्रत एवं त्योहार (${monthlyData.filterCounts?.festivalDays ?? monthlyData.festivalsInMonth.length})`,
              icon: "diya"
            },
            {
              id: "ekadashi_pradosh",
              label: `एकादशी / प्रदोष / चतुर्थी (${monthlyData.filterCounts?.ekadashiPradoshChaturthiDays ?? 0})`,
              icon: "moon"
            },
            {
              id: "purnima_amavasya",
              label: `पूर्णिमा / अमावस्या (${monthlyData.filterCounts?.purnimaAmavasyaDays ?? 0})`,
              icon: "full-moon"
            },
            {
              id: "muhurat",
              label: `शुभ मुहूर्त दिवस (${monthlyData.filterCounts?.muhuratDays ?? monthlyData.muhuratDaysInMonth.length})`,
              icon: "home"
            }
          ].map((tab) => {
            const isActive = activeFilter === tab.id;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => setActiveFilter(tab.id),
                className: `px-2.5 sm:px-3 py-1.5 rounded-xl text-[11px] sm:text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 border ${isActive ? "bg-amber-500 text-slate-950 border-yellow-300 shadow-md" : "bg-slate-900/80 text-amber-200/90 border-amber-800/40 hover:border-amber-500/50"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: tab.icon, tone: isActive ? "inherit" : "theme", className: "w-3.5 h-3.5" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tab.label })
                ]
              },
              tab.id
            );
          })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 self-start lg:self-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "px-2.5 py-1 rounded-xl bg-amber-950/75 border border-amber-500/40 text-[11px] font-bold text-amber-200 flex items-center gap-1.5 pj-ease-silk",
              title: observanceState.regionProfile.regionLabelHi,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "w-3.5 h-3.5 text-yellow-400 shrink-0", strokeWidth: 1.5 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: observanceState.regionProfile.regionShortBadgeHi }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-amber-400 font-semibold", children: observanceState.isManualOverride ? "(मैनुअल)" : "(Auto)" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 bg-slate-950/90 p-1 rounded-xl border border-amber-800/40", title: "मास गणना परंपरा", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  safePlayClick();
                  setObservanceState(
                    setObservanceManualOverride({ tradition: "PURNIMANTA" }, activeLocation)
                  );
                },
                className: `px-2 py-1 rounded-lg text-[11px] font-bold cursor-pointer pj-ease-silk ${tradition === "PURNIMANTA" ? "bg-amber-500 text-slate-950" : "text-amber-200/80 hover:text-amber-100"}`,
                children: "पूर्णिमांत"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  safePlayClick();
                  setObservanceState(
                    setObservanceManualOverride({ tradition: "AMANTA" }, activeLocation)
                  );
                },
                className: `px-2 py-1 rounded-lg text-[11px] font-bold cursor-pointer pj-ease-silk ${tradition === "AMANTA" ? "bg-amber-500 text-slate-950" : "text-amber-200/80 hover:text-amber-100"}`,
                children: "अमांत"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 bg-slate-950/90 p-1 rounded-xl border border-amber-800/40", title: "एकादशी व्रत संप्रदाय", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  safePlayClick();
                  setObservanceState(
                    setObservanceManualOverride({ sampradaya: "SMARTA" }, activeLocation)
                  );
                },
                className: `px-2 py-1 rounded-lg text-[11px] font-bold cursor-pointer pj-ease-silk ${sampradaya === "SMARTA" ? "bg-emerald-500 text-slate-950" : "text-amber-200/80 hover:text-amber-100"}`,
                children: "स्मार्त"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  safePlayClick();
                  setObservanceState(
                    setObservanceManualOverride({ sampradaya: "VAISHNAVA" }, activeLocation)
                  );
                },
                className: `px-2 py-1 rounded-lg text-[11px] font-bold cursor-pointer pj-ease-silk ${sampradaya === "VAISHNAVA" ? "bg-emerald-500 text-slate-950" : "text-amber-200/80 hover:text-amber-100"}`,
                children: "वैष्णव"
              }
            )
          ] }),
          observanceState.isManualOverride && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => {
                safePlayClick();
                setObservanceState(resetObservanceToRegionalAuto(activeLocation));
              },
              title: "चुनी गई लोकेशन के क्षेत्रीय ऑटो-सुझाव पर वापस लौटें",
              className: "px-2 py-1 rounded-xl bg-sky-950/80 hover:bg-sky-900/80 border border-sky-400/50 text-sky-200 text-[11px] font-bold flex items-center gap-1 cursor-pointer pj-ease-silk",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "w-3 h-3 text-sky-300" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Auto क्षेत्रीय" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 bg-slate-950/90 p-1 rounded-xl border border-amber-800/40", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => setViewMode("grid"),
                className: `px-2.5 py-1 rounded-lg text-xs font-bold flex items-center gap-1 cursor-pointer transition-all ${viewMode === "grid" ? "bg-amber-500 text-slate-950" : "text-amber-200/80 hover:text-amber-100"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(LayoutGrid, { className: "w-3.5 h-3.5" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "मासिक ग्रिड" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => setViewMode("list"),
                className: `px-2.5 py-1 rounded-lg text-xs font-bold flex items-center gap-1 cursor-pointer transition-all ${viewMode === "list" ? "bg-amber-500 text-slate-950" : "text-amber-200/80 hover:text-amber-100"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ListFilter, { className: "w-3.5 h-3.5" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "विस्तृत सूची" })
                ]
              }
            )
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 xl:grid-cols-12 gap-6 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "xl:col-span-7 bg-[#0d1322] border-2 border-amber-700/40 rounded-3xl overflow-hidden shadow-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-red-950 via-[#3b110b] to-amber-950 px-4 py-3 border-b border-amber-600/40 flex flex-wrap items-center justify-between gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-5 h-5 text-yellow-400 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: handlePrevMonth,
                    title: `पिछला माह: ${prevMonthNameLabel}`,
                    "aria-label": "पिछला महीना",
                    className: "p-1 rounded-lg bg-slate-950/60 hover:bg-amber-900/70 border border-amber-500/40 text-amber-200 transition-colors cursor-pointer",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-4 h-4" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-base sm:text-lg font-extrabold font-vedic text-yellow-300", children: [
                  monthlyData.monthNameHindi,
                  " ",
                  monthlyData.year
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: handleNextMonth,
                    title: `अगला माह: ${nextMonthNameLabel}`,
                    "aria-label": "अगला महीना",
                    className: "p-1 rounded-lg bg-slate-950/60 hover:bg-amber-900/70 border border-amber-500/40 text-amber-200 transition-colors cursor-pointer",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 text-[10px] font-semibold text-amber-300/80 bg-slate-950/50 border border-amber-500/25 px-2 py-0.5 rounded-md", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeftRight, { className: "w-3 h-3 shrink-0 text-theme-primary", strokeWidth: 1.5 }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "बाएँ/दाएँ स्लाइड कर माह बदलें" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-amber-200/90 leading-relaxed mt-0.5", children: [
                monthlyData.hinduMaasRange,
                " • ",
                primarySamvatsara.headerLineHi
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 text-[10px] font-bold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 px-2 py-0.5 rounded bg-red-900/70 border border-red-400/50 text-amber-200", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarCellIcon, { name: "diya", tone: "inherit" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "महापर्व" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-950/90 border border-emerald-500/50 text-emerald-300", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarCellIcon, { name: "moon", tone: "auspicious" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "एकादशी" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 px-2 py-0.5 rounded bg-amber-500/30 border border-amber-400/60 text-yellow-200", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarCellIcon, { name: "full-moon", tone: "inherit" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "पूर्णिमा" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 px-2 py-0.5 rounded bg-indigo-950/90 border border-indigo-400/50 text-indigo-200", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarCellIcon, { name: "new-moon", tone: "inherit" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "अमावस्या" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `relative overflow-hidden touch-pan-y ${isSwiping ? "select-none cursor-grabbing" : ""}`,
            onTouchStart: handleSwipeTouchStart,
            onTouchMove: handleSwipeTouchMove,
            onTouchEnd: handleSwipeTouchEnd,
            onTouchCancel: handleSwipeTouchEnd,
            onMouseDown: handleSwipeMouseDown,
            onMouseMove: handleSwipeMouseMove,
            onMouseUp: handleSwipeMouseFinish,
            onMouseLeave: handleSwipeMouseFinish,
            onClickCapture: (e) => {
              if (Date.now() < suppressClickUntilRef.current) {
                e.preventDefault();
                e.stopPropagation();
              }
            },
            children: [
              isSwiping && Math.abs(swipeOffsetX) > 12 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: `pointer-events-none absolute top-3 z-30 px-3 py-1 rounded-xl bg-amber-500 text-slate-950 font-extrabold text-xs shadow-xl flex items-center gap-1 ${swipeOffsetX > 0 ? "left-3" : "right-3"}`,
                  children: swipeOffsetX > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-3.5 h-3.5" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: prevMonthNameLabel })
                  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: nextMonthNameLabel }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3.5 h-3.5" })
                  ] })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: !isSwiping && monthTransitionDir === "next" ? "animate-slide-in-right" : !isSwiping && monthTransitionDir === "prev" ? "animate-slide-in-left" : "",
                  style: {
                    transform: swipeOffsetX !== 0 ? `translateX(${swipeOffsetX}px)` : void 0,
                    transition: isSwiping ? "none" : "transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)"
                  },
                  children: viewMode === "grid" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-7 bg-slate-950 border-b border-amber-800/40", children: VAAR_LIST.map((vaar, idx) => {
                      const isSunday = idx === 0;
                      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "div",
                        {
                          className: `py-2.5 px-1 text-center border-r last:border-r-0 border-amber-900/25 ${isSunday ? "bg-red-950/50 text-red-300" : "text-amber-300"}`,
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs sm:text-sm font-extrabold font-vedic", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: vaar.full }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sm:hidden", children: vaar.short })
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[9px] sm:text-[10px] opacity-75 font-vedic", children: [
                              vaar.short,
                              "वार"
                            ] })
                          ]
                        },
                        vaar.eng
                      );
                    }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-7 bg-[#090d18]", children: monthlyData.daysGrid.map((dayItem, idx) => {
                      const isSelected = dayItem.isCurrentMonth && dayItem.day === selectedDayData.day;
                      const isSunday = dayItem.weekdayIndex === 0;
                      const isMatched = matchesFilter(dayItem);
                      const badge = getCellBadgeInfo(dayItem);
                      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "button",
                        {
                          type: "button",
                          onClick: () => handleSelectDay(dayItem),
                          className: `relative min-h-[82px] sm:min-h-[112px] p-1.5 sm:p-2 border-r border-b border-amber-900/25 text-left flex flex-col justify-between transition-all cursor-pointer group ${!dayItem.isCurrentMonth ? "opacity-30 bg-slate-950/70 hover:opacity-60" : !isMatched ? "opacity-25 bg-slate-950/40" : isSelected ? "bg-gradient-to-br from-amber-900/60 via-amber-950/70 to-slate-900 ring-2 ring-inset ring-yellow-400 z-10" : dayItem.isToday ? "bg-gradient-to-br from-emerald-950/60 to-slate-900 ring-2 ring-inset ring-emerald-400" : dayItem.festivalCategory === "mahaparv" ? "bg-gradient-to-b from-red-950/35 to-[#0d1322] hover:bg-amber-950/40" : isSunday ? "bg-red-950/15 hover:bg-amber-950/30" : "bg-[#0d1322] hover:bg-slate-900/90"}`,
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-0.5 w-full", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  "span",
                                  {
                                    className: `text-sm sm:text-xl font-extrabold font-mono leading-none ${dayItem.isToday ? "text-emerald-300" : isSelected ? "text-yellow-300" : isSunday ? "text-red-400" : "text-amber-100"}`,
                                    children: dayItem.day
                                  }
                                ),
                                dayItem.isToday && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-1 py-0.2 rounded bg-emerald-500 text-slate-950 text-[8px] sm:text-[9px] font-black uppercase", children: "आज" })
                              ] }),
                              badge && /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "span",
                                {
                                  className: `inline-flex items-center justify-center px-1 py-0.5 rounded border ${badge.badgeClass}`,
                                  title: badge.badgeText,
                                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarCellIcon, { name: badge.symbolName, tone: "inherit" })
                                }
                              )
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "my-0.5 w-full", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                "div",
                                {
                                  className: `text-[9px] sm:text-[11px] font-bold leading-tight truncate flex items-center gap-1 ${dayItem.pakshaShort === "शुक्ल" ? "text-amber-300" : "text-sky-300/90"}`,
                                  title: dayItem.kshayaTithis?.hasKshaya ? `क्षय तिथि: ${dayItem.kshayaTithis.displayLabelHi}` : dayItem.vriddhiTithiInfo?.isVriddhi ? `वृद्धि तिथि: ${dayItem.vriddhiTithiInfo.displayLabelHi}` : dayItem.tithiName,
                                  children: [
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: dayItem.kshayaTithis?.hasKshaya && dayItem.kshayaTithis.kshayaTithiNamesHi.length > 0 ? `${dayItem.tithiShort} / ${dayItem.kshayaTithis.kshayaTithiNamesHi[0].replace(/^(शुक्ल|कृष्ण)\s*/u, "")}` : dayItem.tithiShort }),
                                    dayItem.kshayaTithis?.hasKshaya && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-1 rounded bg-rose-500/25 border border-rose-400/50 text-rose-200 text-[8px] font-black shrink-0", children: "क्षय" }),
                                    !dayItem.kshayaTithis?.hasKshaya && dayItem.vriddhiTithiInfo?.isVriddhi && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-1 rounded bg-sky-500/25 border border-sky-400/50 text-sky-200 text-[8px] font-black shrink-0", children: "वृद्धि" })
                                  ]
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden sm:flex items-center justify-between text-[9px] text-slate-400 mt-0.5", children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate max-w-[65%]", children: dayItem.nakshatra.replace(" नक्षत्र", "") }),
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-[8px] text-amber-400/75 inline-flex items-center gap-0.5", children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarCellIcon, { name: "sun", tone: "theme" }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: dayItem.sunrise.replace("प्रातः ", "").replace(" AM", "") })
                                ] })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full mt-auto", children: dayItem.festivalName ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "div",
                              {
                                className: `w-full px-1 py-0.5 rounded text-[8px] sm:text-[10px] font-bold leading-tight line-clamp-1 ${dayItem.festivalCategory === "mahaparv" ? "bg-red-600/35 text-yellow-200 border border-red-400/40" : dayItem.isPurnima ? "bg-amber-500/30 text-yellow-200 border border-amber-400/40" : dayItem.isEkadashi ? "bg-emerald-600/30 text-emerald-200 border border-emerald-400/40" : "bg-amber-900/50 text-amber-200 border border-amber-600/30"}`,
                                title: dayItem.festivalName,
                                children: formatCalendarCellFestivalLabel(dayItem)
                              }
                            ) : dayItem.shubhMuhurats.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 overflow-hidden", children: [
                              dayItem.shubhMuhurats.slice(0, 3).map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "span",
                                {
                                  className: "inline-flex items-center",
                                  title: m.label,
                                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarCellIcon, { name: m.icon, tone: "auspicious" })
                                },
                                m.id
                              )),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline text-[9px] text-emerald-300/90 font-semibold truncate ml-0.5", children: "शुभ मुहूर्त" })
                            ] }) : null })
                          ]
                        },
                        `${dayItem.year}-${dayItem.month}-${dayItem.day}-${idx}`
                      );
                    }) })
                  ] }) : (
                    /* DETAILED LIST VIEW FOR MOBILE / QUICK READING */
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-amber-900/30 max-h-[680px] overflow-y-auto", children: monthlyData.currentMonthDays.filter(matchesFilter).map((dayItem) => {
                      const isSelected = dayItem.day === selectedDayData.day;
                      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "div",
                        {
                          onClick: () => handleSelectDay(dayItem),
                          className: `p-3.5 sm:p-4 flex items-start justify-between gap-3 cursor-pointer transition-colors ${isSelected ? "bg-amber-950/50 border-l-4 border-l-yellow-400" : "hover:bg-slate-900/70"}`,
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 min-w-0", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                "div",
                                {
                                  className: `w-12 h-12 rounded-2xl flex flex-col items-center justify-center flex-shrink-0 border ${dayItem.isToday ? "bg-emerald-950 border-emerald-400 text-emerald-300" : dayItem.weekdayIndex === 0 ? "bg-red-950/60 border-red-500/40 text-red-300" : "bg-slate-900 border-amber-700/40 text-amber-200"}`,
                                  children: [
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base font-black font-mono leading-none", children: dayItem.day }),
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold mt-0.5", children: dayItem.vaarShort })
                                  ]
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-1.5", children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs sm:text-sm font-bold text-amber-100", children: dayItem.tithiName }),
                                  dayItem.kshayaTithis?.hasKshaya && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "px-1.5 py-0.5 rounded bg-rose-500/20 border border-rose-400/50 text-rose-200 text-[10px] font-bold", children: [
                                    "क्षय: ",
                                    dayItem.kshayaTithis.displayLabelHi
                                  ] }),
                                  dayItem.vriddhiTithiInfo?.isVriddhi && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "px-1.5 py-0.5 rounded bg-sky-500/20 border border-sky-400/50 text-sky-200 text-[10px] font-bold", children: [
                                    "वृद्धि: ",
                                    dayItem.vriddhiTithiInfo.displayLabelHi
                                  ] }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] text-amber-400", children: [
                                    "• ",
                                    dayItem.nakshatra,
                                    " • ",
                                    dayItem.hinduMaas,
                                    " • ",
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-300 font-semibold", children: dayItem.ritu })
                                  ] })
                                ] }),
                                dayItem.festivalName && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-red-600/25 border border-red-400/40 text-yellow-200 text-xs font-bold", children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "diya", className: "w-3.5 h-3.5 shrink-0" }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: dayItem.festivalName })
                                ] }),
                                dayItem.shubhMuhurats.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap items-center gap-1.5 mt-1.5", children: dayItem.shubhMuhurats.map((m) => {
                                  const isWarningNotice = m.icon === "warning";
                                  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                    "span",
                                    {
                                      className: `inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded border font-semibold ${isWarningNotice ? "bg-rose-950/80 border-rose-400/45 text-[#FCA5A5]" : "bg-emerald-950/80 border-emerald-500/30 text-emerald-300"}`,
                                      children: [
                                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                                          CalendarCellIcon,
                                          {
                                            name: m.icon,
                                            tone: isWarningNotice ? "inauspicious" : "auspicious"
                                          }
                                        ),
                                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: m.shortLabel })
                                      ]
                                    },
                                    m.id
                                  );
                                }) })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right flex-shrink-0 text-[11px] text-slate-400 font-mono", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-amber-300 inline-flex items-center gap-1 justify-end", children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarCellIcon, { name: "sun", tone: "theme" }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: dayItem.sunrise })
                              ] }),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-1 justify-end mt-0.5", children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarCellIcon, { name: "moon", tone: "inherit" }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: dayItem.sunset })
                              ] })
                            ] })
                          ]
                        },
                        dayItem.day
                      );
                    }) })
                  )
                },
                `${selectedYear}-${selectedMonth}-${viewMode}`
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t-2 border-amber-600/50 bg-gradient-to-b from-[#181122] via-[#0f1424] to-[#090d18] p-3 sm:p-5 space-y-3.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-2 border-b border-amber-700/40 pb-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2.5 h-2.5 rounded-full bg-yellow-400 animate-ping" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs sm:text-sm font-extrabold font-vedic text-yellow-300", children: [
                "चयनित तिथि: ",
                selectedDayData.day,
                " ",
                monthlyData.monthNameHindi,
                " ",
                selectedYear,
                " (",
                selectedDayData.vaarHindi,
                ")"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] sm:text-xs font-semibold text-amber-200/90 px-2.5 py-0.5 rounded-full bg-amber-950/80 border border-amber-500/40", children: [
              selectedDayData.hinduMaas,
              " • ",
              selectedDayData.paksha,
              " • ",
              selectedDayData.tithiShort,
              " •",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-emerald-300", children: selectedDayData.ritu }),
              " (",
              selectedDayData.ayana,
              ")"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 sm:p-4 rounded-2xl bg-gradient-to-r from-amber-950/80 via-[#26140b] to-amber-950/80 border-2 border-amber-500/70 shadow-2xl flex flex-col sm:flex-row items-center gap-3 sm:gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0 flex flex-col items-center justify-center", children: renderDeityArtwork(selectedDayData) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 w-full space-y-1.5 sm:space-y-2", children: [
              selectedDayStrips.map((stripText, sIdx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "w-full py-2 sm:py-2.5 px-3 sm:px-4 rounded-xl bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-200 border-2 border-amber-400/90 text-[#3b1204] font-black text-xs sm:text-base text-center shadow-md font-vedic tracking-wide leading-tight hover:brightness-105 transition-all",
                  children: stripText
                },
                sIdx
              )),
              selectedDayData.paranaWindowText && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-3 py-1.5 rounded-xl bg-emerald-950/85 border border-emerald-400/50 text-emerald-200 text-xs font-bold text-center", children: [
                "व्रत पारण काल: ",
                selectedDayData.paranaWindowText
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-1 pt-1 px-1 text-[11px] sm:text-xs text-amber-200/90", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "line-clamp-2 sm:line-clamp-1", children: selectedDayData.festivalDescription ? selectedDayData.festivalDescription : `शुभ नक्षत्र: ${selectedDayData.nakshatra} • अमृत काल: ${selectedDayData.amritKaal.split(" (")[0]}` }),
                selectedDayData.shubhMuhurats.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex-shrink-0 font-bold text-emerald-300 inline-flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "sparkles", tone: "auspicious", className: "w-3.5 h-3.5" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    selectedDayData.shubhMuhurats.length,
                    " शुभ मुहूर्त"
                  ] })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-2 pt-1", children: [
            onAskPanditInChat && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => onAskPanditInChat(
                  `${selectedDayData.formattedDateHindi} (${selectedDayData.vaarHindi}) के पंचांग, ${selectedDayData.festivalName || selectedDayData.tithiName} के व्रत-पूजन नियम एवं शुभ मुहूर्त के बारे में बताएं।`
                ),
                className: "px-3 py-1.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-400/50 text-yellow-300 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-3.5 h-3.5 text-yellow-400", strokeWidth: 1.5 }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "ज्योतिष चैट में पण्डित जी से पूरा उत्तर जानें" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => {
                  const el = document.getElementById("selected-day-panchang-details");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                },
                className: "px-3 py-1.5 rounded-xl bg-slate-900/90 hover:bg-amber-950/80 border border-amber-600/40 text-amber-200 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3.5 h-3.5 text-yellow-400", strokeWidth: 1.5 }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "सम्पूर्ण पंचांग विवरण देखें" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDown, { className: "w-3.5 h-3.5", strokeWidth: 1.5 })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 rounded-2xl bg-slate-950/90 border border-amber-700/50 overflow-hidden shadow-xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => setShowMonthlyFestList((prev) => !prev),
                className: "w-full py-2.5 px-4 bg-gradient-to-r from-amber-900/90 via-[#421d0a] to-amber-950/90 hover:from-amber-800/90 hover:to-amber-900/90 border-b border-amber-600/40 flex items-center justify-between text-left transition-colors cursor-pointer",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "diya", className: "w-4 h-4 shrink-0" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-xs sm:text-sm font-black font-vedic text-yellow-200 tracking-wide", children: [
                      selectedYear,
                      " ",
                      monthlyData.monthNameHindi,
                      " माह के त्यौहार एवं व्रत"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-yellow-300 border border-amber-400/40", children: [
                      monthlyData.festivalsInMonth.length,
                      " पर्व सूची"
                    ] }),
                    showMonthlyFestList ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-4 h-4 text-amber-300" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-4 h-4 text-amber-300" })
                  ] })
                ]
              }
            ),
            showMonthlyFestList && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-amber-900/30 max-h-[300px] sm:max-h-[360px] overflow-y-auto", children: monthlyData.festivalsInMonth.map((festDay) => {
              const isSelected = festDay.day === selectedDayData.day;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  onClick: () => {
                    handleSelectDay(festDay);
                    safePlayClick();
                  },
                  className: `py-2 px-3 sm:py-2.5 sm:px-4 flex items-center justify-between gap-3 cursor-pointer transition-all ${isSelected ? "bg-amber-900/40 border-l-4 border-l-yellow-400 font-extrabold shadow-inner" : "hover:bg-slate-900/70"}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 sm:gap-3 min-w-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "span",
                        {
                          className: `text-xs sm:text-sm font-black font-mono flex-shrink-0 w-20 sm:w-24 ${isSelected ? "text-yellow-300" : "text-amber-400"}`,
                          children: [
                            festDay.day,
                            ", ",
                            festDay.vaarShort,
                            "वार"
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: `text-xs sm:text-sm font-vedic truncate ${isSelected ? "text-yellow-200 font-black" : "text-amber-100 font-semibold"}`,
                          children: festDay.festivalName
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: `text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded flex-shrink-0 transition-colors ${isSelected ? "bg-yellow-400 text-slate-950 font-black" : "text-amber-400/80 bg-amber-950/60 hover:bg-amber-800/60 hover:text-yellow-200"}`,
                        children: isSelected ? "चयनित" : "देखें ›"
                      }
                    )
                  ]
                },
                festDay.day
              );
            }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "selected-day-panchang-details", className: "scroll-mt-24 xl:col-span-5 bg-gradient-to-b from-[#1a1025] via-[#0f172a] to-[#0b1120] border-2 border-amber-500/60 rounded-3xl p-4 sm:p-6 shadow-2xl space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3 border-b border-amber-800/40 pb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2.5 py-0.5 rounded-full bg-amber-500 text-slate-950 text-[11px] font-black uppercase", children: "चयनित तिथि का पंचांग" }),
              selectedDayData.isToday && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-400 text-emerald-300 text-[11px] font-bold", children: "आज की तिथि" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-xl sm:text-2xl font-extrabold font-vedic text-yellow-300 mt-2", children: [
              selectedDayData.formattedDateHindi,
              " • ",
              selectedDayData.vaarHindi
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm text-amber-200 font-semibold mt-0.5", children: primarySamvatsara.headerLineHi }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] sm:text-xs text-amber-300 font-medium mt-1 flex flex-wrap items-center gap-x-2 gap-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-300 font-semibold", children: selectedDayData.lunarMasaInfo ? `${selectedDayData.lunarMasaInfo.displayPurnimantaHi} / ${selectedDayData.lunarMasaInfo.displayAmantaHi}` : selectedDayData.hinduMaas }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "•" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: selectedDayData.paksha }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "•" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "px-2 py-0.5 rounded-md bg-emerald-950/80 border border-emerald-500/45 text-emerald-300 font-bold", children: [
                selectedDayData.ritu,
                " • ",
                selectedDayData.ayana
              ] }),
              selectedDayData.regionalSolarDate && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "•" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "span",
                  {
                    title: `${selectedDayData.regionalSolarDate.formattedFullHi} (${selectedDayData.regionalSolarDate.ruleLabelHi})`,
                    className: "px-2 py-0.5 rounded-md bg-indigo-950/85 border border-indigo-400/45 text-indigo-200 font-bold",
                    children: [
                      "सौर तिथि: ",
                      selectedDayData.regionalSolarDate.formattedHi
                    ]
                  }
                )
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-yellow-400 text-slate-950 flex flex-col items-center justify-center font-mono shadow-lg flex-shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl font-black leading-none", children: selectedDayData.day }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-extrabold mt-0.5", children: selectedDayData.vaarShort })
          ] })
        ] }),
        selectedDayData.eclipseAlert?.isAlertWindowActive && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `p-3.5 rounded-2xl border space-y-2 ${selectedDayData.eclipseAlert.sutakApplies ? "bg-gradient-to-r from-rose-950/85 via-amber-950/75 to-rose-950/85 border-rose-400/65" : "bg-slate-900/90 border-sky-500/45"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-xs font-extrabold text-yellow-300", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-4 h-4 text-yellow-400 flex-shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    selectedDayData.eclipseAlert.body === "solar" ? "सूर्य ग्रहण सूचना" : "चंद्र ग्रहण सूचना",
                    ":",
                    " ",
                    selectedDayData.eclipseAlert.titleHi
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: `px-2 py-0.5 rounded-md text-[10px] font-extrabold ${selectedDayData.eclipseAlert.sutakApplies ? "bg-rose-500/25 border border-rose-400/60 text-rose-200" : "bg-emerald-950/90 border border-emerald-500/45 text-emerald-300"}`,
                    children: selectedDayData.eclipseAlert.daysUntilEclipse === 0 ? "आज ग्रहण दिवस" : `${selectedDayData.eclipseAlert.daysUntilEclipse} दिन शेष (${selectedDayData.eclipseAlert.eclipseDateKey})`
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: `p-2 rounded-xl border text-[11px] font-bold ${selectedDayData.eclipseAlert.sutakApplies ? "bg-rose-950/80 border-rose-400/50 text-rose-100" : "bg-slate-950/80 border-emerald-500/35 text-emerald-200"}`,
                  children: selectedDayData.eclipseAlert.sutakStatusHi
                }
              ),
              selectedDayData.eclipseAlert.isVisibleLocally && !selectedDayData.eclipseAlert.isPenumbralLunar && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-1.5 text-[10px] sm:text-[11px]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2 rounded-xl bg-slate-950/75 border border-amber-500/30", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-amber-300/80 block font-bold", children: "स्पर्श (प्रारंभ)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-amber-100 font-extrabold", children: selectedDayData.eclipseAlert.sparshaFormattedHi })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2 rounded-xl bg-slate-950/75 border border-amber-500/30", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-amber-300/80 block font-bold", children: "मध्य (चरम)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-yellow-300 font-extrabold", children: selectedDayData.eclipseAlert.madhyaFormattedHi })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2 rounded-xl bg-slate-950/75 border border-amber-500/30", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-amber-300/80 block font-bold", children: "मोक्ष (समाप्ति)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-amber-100 font-extrabold", children: selectedDayData.eclipseAlert.mokshaFormattedHi })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-amber-100/90 leading-relaxed", children: selectedDayData.eclipseAlert.summaryNoteHi }),
              selectedDayData.eclipseAlert.sutakExemptionNoteHi && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-emerald-300 font-medium bg-slate-950/70 px-2.5 py-1.5 rounded-xl border border-emerald-500/30", children: selectedDayData.eclipseAlert.sutakExemptionNoteHi })
            ]
          }
        ),
        selectedDayData.festivalName && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3.5 rounded-2xl bg-gradient-to-r from-red-950/80 via-amber-950/70 to-red-950/80 border border-amber-400/60 space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-xs font-extrabold text-yellow-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-4 h-4 text-yellow-400 flex-shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "विशेष महापर्व / व्रत संयोग:" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm sm:text-base font-extrabold font-vedic text-amber-100 leading-snug", children: selectedDayData.festivalName }),
          selectedDayData.festivalDeity && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] font-bold text-emerald-300", children: [
            "आराध्य देवी / देव: ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-yellow-200", children: selectedDayData.festivalDeity })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-amber-200/90 leading-relaxed", children: selectedDayData.festivalDescription }),
          (() => {
            const pradoshDisp = getDynamicPradoshKaalDisplay(selectedDayData);
            if (!pradoshDisp) return null;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2 rounded-xl bg-amber-950/75 border border-amber-400/45 text-[11px] text-amber-100 font-semibold", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-yellow-300", children: "प्रदोष काल समय (सूर्यास्त से 2 घंटे 24 मिनट): " }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono", children: pradoshDisp.hi })
            ] });
          })(),
          selectedDayData.paranaWindowText && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2 rounded-xl bg-emerald-950/80 border border-emerald-400/45 text-[11px] text-emerald-200 font-semibold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-emerald-300", children: "व्रत पारण मुहूर्त (Dwadashi Parana): " }),
            selectedDayData.paranaWindowText
          ] }),
          selectedDayData.festivalPujaHint && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 rounded-xl bg-slate-950/80 border border-amber-500/30 text-[11px] text-emerald-300 font-medium", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-yellow-300", children: "पूजा एवं मुहूर्त निर्देश: " }),
            selectedDayData.festivalPujaHint
          ] })
        ] }),
        selectedDayData.sunriseSandhiNote?.isBorderlineSandhi && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-3.5 py-2.5 rounded-2xl bg-amber-950/60 border border-amber-400/45 text-[11px] sm:text-xs text-amber-200 leading-relaxed", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-yellow-300", children: "तिथि संधि सूचना: " }),
          selectedDayData.sunriseSandhiNote.noteHi
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-2.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-2xl bg-slate-900/90 border border-amber-800/40", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-amber-400 font-bold uppercase block", children: "1. पंचांग तिथि (समाप्ति एवं अगली तिथि)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs sm:text-sm font-extrabold text-amber-100 block mt-0.5 leading-snug", children: [
              selectedDayData.tithiName,
              " (",
              selectedDayData.tithiEndTime,
              ")"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-2xl bg-slate-900/90 border border-amber-800/40", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-amber-400 font-bold uppercase block", children: "2. नक्षत्र (समाप्ति एवं अगला नक्षत्र)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs sm:text-sm font-extrabold text-amber-100 block mt-0.5 leading-snug", children: [
              selectedDayData.nakshatra,
              " — ",
              selectedDayData.nakshatraEndTime
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-2xl bg-slate-900/90 border border-amber-800/40", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-amber-400 font-bold uppercase block", children: "3. योग एवं करण (समाप्ति समय सहित)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-bold text-amber-100 block mt-0.5 leading-snug", children: [
              "योग: ",
              selectedDayData.yoga,
              " (",
              selectedDayData.yogaEndTime,
              ")"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] text-emerald-300 block mt-1 pt-1 border-t border-slate-800 leading-snug", children: [
              "करण: ",
              /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { children: [
                selectedDayData.karana,
                " (",
                selectedDayData.karanaEndTime,
                ")"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-2xl bg-slate-900/90 border border-amber-800/40", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-amber-400 font-bold uppercase block", children: "4. चंद्र राशि संचार एवं सूर्य राशि" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-bold text-amber-100 block mt-0.5 leading-snug", children: [
              "चंद्रमा: ",
              selectedDayData.chandraRashi
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] text-amber-300/90 block mt-1 pt-1 border-t border-slate-800", children: [
              "सूर्य: ",
              selectedDayData.suryaRashi,
              selectedDayData.suryaNakshatra && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "block text-amber-200/90 mt-0.5", children: [
                "सूर्य नक्षत्र: ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: selectedDayData.suryaNakshatra })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 rounded-2xl bg-gradient-to-r from-emerald-950/55 via-slate-900/90 to-amber-950/45 border border-emerald-500/45 sm:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-emerald-400 font-extrabold uppercase block", children: "5. वैदिक ऋतु, अयन एवं हिंदू मास (चयनित तिथि अनुसार)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs sm:text-sm font-extrabold text-yellow-200 mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-0.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-300", children: selectedDayData.ritu }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-amber-300/70", children: "•" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-amber-100", children: selectedDayData.ayana }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-amber-300/70", children: "•" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-amber-200 font-bold", children: selectedDayData.hinduMaas })
              ] }),
              selectedDayData.ayanaRituBasisNoteHi && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-emerald-200/80 mt-0.5", children: selectedDayData.ayanaRituBasisNoteHi })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] px-2 py-0.5 rounded-lg bg-slate-950/80 border border-emerald-500/40 text-emerald-200 font-bold", children: [
              "मास चक्र: ",
              VEDIC_RITU_GUIDE.find((r) => r.name === selectedDayData.ritu)?.months || selectedDayData.hinduMaas
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3.5 sm:p-4 rounded-2xl bg-gradient-to-br from-slate-900/95 via-amber-950/40 to-slate-900/95 border border-amber-600/50 sm:col-span-2 space-y-2.5 shadow-md", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-2 border-b border-amber-800/40 pb-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] sm:text-xs text-amber-400 font-extrabold uppercase tracking-wider flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3.5 h-3.5 text-yellow-400" }),
                "6. संवत्सर चक्र एवं काल गणना (Samvatsara Cycle - 60 षष्टि चक्र)"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] text-amber-200/90 font-medium", children: [
                "विक्रम संवत:",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { className: "text-yellow-300 font-bold", children: [
                  primarySamvatsara.vikramSamvat,
                  primarySamvatsara.isKartikadiGujarati && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-semibold text-amber-300 ml-1", children: "(कार्तिकादि)" })
                ] }),
                " ",
                "• शक संवत: ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-amber-100 font-bold", children: selectedDayData.shakaSamvat })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: primarySamvatsara.activeCard === "vikram" ? "p-2.5 sm:p-3 rounded-xl bg-gradient-to-r from-amber-950/90 via-[#3a1505] to-amber-950/90 border-2 border-yellow-400/75 shadow-md" : "p-2.5 rounded-xl bg-slate-950/70 border border-slate-700/60 opacity-90",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "div",
                        {
                          className: `text-[10px] font-extrabold uppercase flex items-center gap-1 ${primarySamvatsara.activeCard === "vikram" ? "text-yellow-300" : "text-amber-400/85"}`,
                          children: [
                            primarySamvatsara.activeCard === "vikram" && /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "star", className: "w-3 h-3 shrink-0" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "1. उत्तर भारतीय विक्रम संवत परंपरा" })
                          ]
                        }
                      ),
                      primarySamvatsara.activeCard === "vikram" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-1.5 py-0.5 rounded bg-yellow-400/20 border border-yellow-400/60 text-yellow-200 text-[9px] font-black", children: "सक्रिय स्थानीय परंपरा" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: `text-sm font-black mt-0.5 ${primarySamvatsara.activeCard === "vikram" ? "text-yellow-100" : "text-amber-200"}`,
                        children: [
                          "‘",
                          selectedDayData.vikramSamvatsarName,
                          "’ संवत्सर",
                          " ",
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] text-amber-300 font-medium", children: [
                            "(",
                            computeSamvatsaraOrdinal(selectedDayData.vikramSamvat, 10),
                            "वां संवत्सर)"
                          ] })
                        ]
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 rounded-xl bg-slate-950/70 border border-emerald-500/35 opacity-90", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-emerald-400 font-bold uppercase", children: "2. राष्ट्रीय शक संवत परंपरा" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm font-black text-emerald-300 mt-0.5", children: [
                  "‘",
                  selectedDayData.shakaSamvatsarName,
                  "’ संवत्सर",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] text-emerald-200 font-medium", children: [
                    "(",
                    computeSamvatsaraOrdinal(selectedDayData.shakaSamvat, 11),
                    "वां संवत्सर)"
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: primarySamvatsara.activeCard === "south_solar" ? "p-2.5 sm:p-3 rounded-xl bg-gradient-to-r from-amber-950/90 via-[#3a1505] to-amber-950/90 border-2 border-yellow-400/75 flex flex-wrap items-center justify-between gap-2 shadow-md" : "p-2.5 sm:p-3 rounded-xl bg-slate-950/70 border border-slate-700/60 flex flex-wrap items-center justify-between gap-2 opacity-90",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "div",
                        {
                          className: `text-[10px] font-extrabold uppercase flex items-center gap-1 tracking-wide ${primarySamvatsara.activeCard === "south_solar" ? "text-yellow-300" : "text-amber-300/80"}`,
                          children: [
                            primarySamvatsara.activeCard === "south_solar" && /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "star", className: "w-3 h-3 shrink-0" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "3. दक्षिण भारतीय / महाराष्ट्र-गुजरात / सौर मान" })
                          ]
                        }
                      ),
                      primarySamvatsara.activeCard === "south_solar" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-1.5 py-0.5 rounded bg-yellow-400/20 border border-yellow-400/60 text-yellow-200 text-[9px] font-black", children: "सक्रिय स्थानीय परंपरा" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: `text-sm sm:text-base font-black mt-0.5 ${primarySamvatsara.activeCard === "south_solar" ? "text-yellow-100" : "text-amber-200"}`,
                        children: [
                          "‘",
                          selectedDayData.southIndianSamvatsarName,
                          "’ —",
                          " ",
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-amber-300", children: [
                            computeSamvatsaraOrdinal(selectedDayData.shakaSamvat, 11),
                            "वां संवत्सर"
                          ] }),
                          " ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs sm:text-sm text-amber-200 font-medium", children: "(शालिवाहन शक / सौर चक्र)" })
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-amber-200/90 font-medium", children: [
                    selectedDayData.ayana,
                    " • ",
                    selectedDayData.ritu
                  ] })
                ]
              }
            )
          ] })
        ] }),
        selectedDayData.observanceProfile && selectedDayData.observanceDivergence && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-2xl bg-slate-950/90 border border-amber-600/35 space-y-2 text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-2 border-b border-amber-800/35 pb-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 font-extrabold text-amber-200", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Compass, { className: "w-3.5 h-3.5 text-yellow-400 shrink-0", strokeWidth: 1.5 }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                "क्षेत्रीय परंपरा: ",
                selectedDayData.observanceProfile.regionLabelHi
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold px-2 py-0.5 rounded bg-amber-500/15 border border-amber-400/35 text-amber-300", children: observanceState.isManualOverride ? "मैनुअल चयन सक्रिय" : "लोकेशन Auto सुझाव" })
          ] }),
          selectedDayData.observanceDivergence.masaDiffers ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-2 rounded-xl border ${tradition === "PURNIMANTA" ? "bg-amber-950/50 border-amber-400/60" : "bg-slate-900/70 border-amber-900/35"}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold text-amber-400 block", children: "उत्तर भारत (पूर्णिमांत)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-extrabold text-yellow-200", children: selectedDayData.observanceDivergence.purnimantaMasaLabelHi })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-2 rounded-xl border ${tradition === "AMANTA" ? "bg-emerald-950/50 border-emerald-400/60" : "bg-slate-900/70 border-amber-900/35"}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold text-emerald-400 block", children: "दक्षिण / पश्चिम भारत (अमांत)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-extrabold text-emerald-200", children: selectedDayData.observanceDivergence.amantaMasaLabelHi })
            ] })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-emerald-200/90 leading-relaxed", children: selectedDayData.observanceDivergence.masaExplanationHi }),
          selectedDayData.observanceDivergence.ekadashiDiffers && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2 rounded-xl bg-sky-950/45 border border-sky-400/40 text-[11px] text-sky-100 leading-relaxed", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-sky-300", children: "स्मार्त बनाम वैष्णव एकादशी भेद: " }),
            selectedDayData.observanceDivergence.ekadashiComparisonHi
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-2 text-[11px] text-amber-300/85 pt-0.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: selectedDayData.observanceDivergence.solarMonthNoteHi }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: selectedDayData.observanceDivergence.samvatNoteHi })
          ] }),
          selectedDayData.kartikadiFootnoteHi && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 rounded-xl bg-amber-950/45 border border-amber-500/35 text-[11px] text-amber-200/95 leading-relaxed", children: selectedDayData.kartikadiFootnoteHi }),
          selectedDayData.deltaTNoteHi && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 rounded-xl bg-indigo-950/45 border border-indigo-400/35 text-[11px] text-indigo-200/95 leading-relaxed", children: selectedDayData.deltaTNoteHi })
        ] }),
        (selectedDayData.sankrantiPunyaKaalHi || selectedDayData.diwaliVrishabhaLagnaHi) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3.5 rounded-2xl bg-gradient-to-r from-amber-950/65 via-[#2c1205] to-amber-950/65 border border-amber-400/55 space-y-1.5 text-xs", children: [
          selectedDayData.sankrantiPunyaKaalHi && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-extrabold text-yellow-300 flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "w-3.5 h-3.5 text-amber-400 shrink-0", strokeWidth: 1.5 }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                selectedDayData.sankrantiName || "संक्रांति",
                " — पुण्यकाल विचार",
                selectedDayData.sankrantiIngressTimeHi ? ` (संक्रमण: ${selectedDayData.sankrantiIngressTimeHi})` : ""
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-amber-100 leading-snug", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-amber-300 font-bold", children: "पुण्यकाल: " }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "font-mono text-yellow-100", children: selectedDayData.sankrantiPunyaKaalHi })
            ] }),
            selectedDayData.sankrantiMahaPunyaKaalHi && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-emerald-200 leading-snug", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-300 font-bold", children: "महापुण्यकाल: " }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "font-mono", children: selectedDayData.sankrantiMahaPunyaKaalHi })
            ] })
          ] }),
          selectedDayData.diwaliVrishabhaLagnaHi && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 pt-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-extrabold text-yellow-300 flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "sparkles", className: "w-3.5 h-3.5 shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "दीपावली महालक्ष्मी पूजन — प्रदोष काल एवं स्थिर वृषभ लग्न" })
            ] }),
            selectedDayData.diwaliPradoshKaalHi && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-amber-100 leading-snug", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-amber-300 font-bold", children: "प्रदोष काल: " }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "font-mono", children: selectedDayData.diwaliPradoshKaalHi })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-emerald-200 leading-snug", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-300 font-bold", children: "स्थिर वृषभ लग्न (स्थानीय): " }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "font-mono text-yellow-200", children: selectedDayData.diwaliVrishabhaLagnaHi })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-2 p-3 rounded-2xl bg-slate-950/90 border border-amber-700/30 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-amber-300/80 flex items-center justify-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "w-3 h-3 text-amber-400", strokeWidth: 1.5 }),
              " सूर्योदय"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-extrabold text-amber-100 font-mono", children: selectedDayData.sunrise })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:border-l border-amber-900/40", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-amber-300/80 flex items-center justify-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "w-3 h-3 text-orange-400", strokeWidth: 1.5 }),
              " सूर्यास्त"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-extrabold text-amber-100 font-mono", children: selectedDayData.sunset })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:border-l border-amber-900/40", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-amber-300/80 flex items-center justify-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "w-3 h-3 text-sky-300", strokeWidth: 1.5 }),
              " चंद्रोदय"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-extrabold text-sky-200 font-mono", children: selectedDayData.moonrise })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:border-l border-amber-900/40", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-amber-300/80 flex items-center justify-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "w-3 h-3 text-indigo-300", strokeWidth: 1.5 }),
              " चंद्रास्त"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-extrabold text-indigo-200 font-mono", children: selectedDayData.moonset })
          ] })
        ] }),
        selectedDayData.shubhMuhurats.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3.5 rounded-2xl bg-emerald-950/35 border border-emerald-500/40 space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs font-bold text-emerald-300 flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 text-emerald-400", strokeWidth: 1.5 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "इस तिथि पर उपलब्ध शुभ मांगलिक मुहूर्त:" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: selectedDayData.shubhMuhurats.map((m) => {
            const isWarningNotice = m.icon === "warning";
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "span",
              {
                className: `px-2.5 py-1 rounded-xl border text-xs font-bold flex items-center gap-1.5 ${isWarningNotice ? "bg-rose-950/75 border-rose-400/55 text-[#FCA5A5]" : "bg-emerald-900/60 border-emerald-400/50 text-emerald-100"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    SacredIcon,
                    {
                      name: m.icon,
                      tone: isWarningNotice ? "inauspicious" : "auspicious",
                      className: "w-3.5 h-3.5 shrink-0"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: m.label })
                ]
              },
              m.id
            );
          }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-2.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-2xl bg-emerald-950/30 border border-emerald-500/35 space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] font-extrabold text-emerald-400 flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3.5 h-3.5", strokeWidth: 1.5 }),
              " शुभ मुहूर्त समय"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-emerald-100 leading-snug space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-300/90", children: "अभिजित: " }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "strong",
                  {
                    className: `font-mono ${selectedDayData.abhijitMuhurat.includes("मान्य नहीं") || selectedDayData.abhijitConflict?.isFullyPolluted ? "text-amber-300" : ""}`,
                    children: selectedDayData.abhijitMuhurat.includes("मान्य नहीं") ? selectedDayData.abhijitMuhurat : selectedDayData.abhijitConflict?.hasOverlap ? selectedDayData.abhijitConflict.exactFullWindowHi || selectedDayData.abhijitConflict.fullWindowHi : selectedDayData.exactSecondsDisplay?.abhijitFull || selectedDayData.abhijitMuhurat
                  }
                )
              ] }),
              (selectedDayData.kalVedhaReport?.abhijit?.inlineAlertHi || selectedDayData.abhijitConflict?.hasOverlap && (selectedDayData.abhijitConflict.exactWarningMessageHi || selectedDayData.abhijitConflict.warningMessageHi)) && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl border border-amber-400/50 bg-amber-950/75 px-2.5 py-1.5 text-[11px] font-semibold text-amber-200 leading-snug tabular-nums", children: selectedDayData.kalVedhaReport?.abhijit?.inlineAlertHi || selectedDayData.abhijitConflict?.exactWarningMessageHi || selectedDayData.abhijitConflict?.warningMessageHi })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-emerald-100 leading-snug space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-300/90", children: "अमृत काल: " }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "font-mono", children: selectedDayData.amritKaal })
              ] }),
              selectedDayData.amritKaalOverlapNoteHi && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl border border-amber-400/50 bg-amber-950/75 px-2.5 py-1.5 text-[11px] font-semibold text-amber-200 leading-snug tabular-nums", children: selectedDayData.amritKaalOverlapNoteHi })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-emerald-100 leading-snug", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-300/90", children: "ब्रह्म मुहूर्त: " }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "font-mono", children: selectedDayData.kalVedhaReport?.brahma?.inlineAlertHi ? selectedDayData.brahmaMuhurat : selectedDayData.exactSecondsDisplay?.brahmaMuhurat || selectedDayData.brahmaMuhurat })
            ] }),
            (() => {
              if (selectedDayData.kalVedhaReport?.vijay?.inlineAlertHi) {
                return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-emerald-100 leading-snug", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-300/90", children: "विजय मुहूर्त: " }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "font-mono", children: selectedDayData.vijayMuhurat })
                ] });
              }
              const vijayOv = getMuhuratKaalOverlapTag(selectedDayData.exactEpochsMs, "vijay");
              const vijayClock = stripLegacyKaalConflictTag(
                selectedDayData.exactSecondsDisplay?.vijayMuhurat || selectedDayData.vijayMuhurat
              );
              return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-emerald-100 leading-snug", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-300/90", children: "विजय मुहूर्त: " }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "font-mono", children: vijayClock }),
                vijayOv.hi && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1.5 text-[11px] font-semibold text-amber-300", children: vijayOv.hi })
              ] });
            })(),
            selectedDayData.godhuliMuhurat && (() => {
              if (selectedDayData.kalVedhaReport?.godhuli?.inlineAlertHi) {
                return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-emerald-100 leading-snug", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-300/90", children: "गोधूलि मुहूर्त: " }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "font-mono", children: selectedDayData.godhuliMuhurat })
                ] });
              }
              const godhuliOv = getMuhuratKaalOverlapTag(selectedDayData.exactEpochsMs, "godhuli");
              const godhuliClock = stripLegacyKaalConflictTag(
                selectedDayData.exactSecondsDisplay?.godhuliMuhurat || selectedDayData.godhuliMuhurat
              );
              return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-emerald-100 leading-snug", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-300/90", children: "गोधूलि मुहूर्त: " }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "font-mono", children: godhuliClock }),
                godhuliOv.hi && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1.5 text-[11px] font-semibold text-amber-300", children: godhuliOv.hi })
              ] });
            })(),
            selectedDayData.nishithaMuhurat && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-emerald-100", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-300/90", children: "निशीथ काल (मध्यरात्रि): " }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "font-mono", children: selectedDayData.nishithaMuhurat })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-emerald-100 leading-snug space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-emerald-300/90", children: [
                  "गुलिक काल (",
                  formatAshtamanshaPartHi(selectedDayData.gulikaKaalPart),
                  "):",
                  " "
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "font-mono", children: selectedDayData.exactSecondsDisplay?.gulikaKaal || selectedDayData.gulikaKaal }),
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] text-emerald-300/90", children: [
                  "(",
                  selectedDayData.gulikaKaalLabelHi || GULIKA_SHASTRIYA_LABEL_HI,
                  ")"
                ] })
              ] }),
              selectedDayData.gulikaOverlapNoteHi && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl border border-amber-400/50 bg-amber-950/75 px-2.5 py-1.5 text-[11px] font-semibold text-amber-200 leading-snug tabular-nums", children: selectedDayData.gulikaOverlapNoteHi })
            ] }),
            selectedDayData.sarvarthaSiddhiYoga && !selectedDayData.shubhMuhurats.some(
              (m) => m.label.includes("सर्वार्थ सिद्धि") || m.label.includes("अमृत सिद्धि")
            ) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-yellow-300 font-semibold pt-1 border-t border-emerald-800/50 leading-snug flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "sparkles", className: "w-3 h-3 shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                "सर्वार्थ सिद्धि योग: ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: selectedDayData.sarvarthaSiddhiYoga })
              ] })
            ] }),
            selectedDayData.amritSiddhiYoga && !selectedDayData.shubhMuhurats.some(
              (m) => m.label.includes("सर्वार्थ सिद्धि") || m.label.includes("अमृत सिद्धि")
            ) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-amber-200 font-semibold leading-snug flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "trishul", className: "w-3 h-3 shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                "अमृत सिद्धि योग: ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: selectedDayData.amritSiddhiYoga })
              ] })
            ] }),
            selectedDayData.tripushkarYoga && !selectedDayData.shubhMuhurats.some((m) => m.label.includes("त्रिपुष्कर")) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-yellow-200 font-semibold leading-snug flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "trishul", className: "w-3 h-3 shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                "त्रिपुष्कर योग: ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: selectedDayData.tripushkarYoga })
              ] })
            ] }),
            selectedDayData.dwipushkarYoga && !selectedDayData.shubhMuhurats.some((m) => m.label.includes("द्विपुष्कर")) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-yellow-200 font-semibold leading-snug flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "trishul", className: "w-3 h-3 shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                "द्विपुष्कर योग: ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: selectedDayData.dwipushkarYoga })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-emerald-200/75 pt-1.5 border-t border-emerald-500/20 leading-snug", children: selectedDaySaralArtha.shubhMuhuratHi })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-2xl bg-rose-950/45 border border-[#FF6B6B]/55 space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-extrabold text-[#FF8A80] flex items-center justify-between gap-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-3.5 h-3.5 text-amber-400", strokeWidth: 1.5 }),
              " अशुभ / वर्जित समय (8 अष्टमांश भाग)"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-[#FDE68A] pb-1 border-b border-rose-900/60 tabular-nums", children: [
              "दिनमान: ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: selectedDayData.dinamanaFormatted }),
              " • रात्रिमान:",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: selectedDayData.ratrimanaFormatted }),
              " • 1 भाग =",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: selectedDayData.ashtamaamsaDurationFormatted })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-[#FF8A80]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[#FF6B6B] font-bold", children: [
                "राहु काल (",
                formatAshtamanshaPartHi(selectedDayData.rahuKaalPart),
                "):",
                " "
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "font-mono text-[#FF8A80]", children: selectedDayData.exactSecondsDisplay?.rahuKaal || selectedDayData.rahuKaal })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-[#FDE68A]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[#FF8A80] font-bold", children: [
                "यमगण्ड (",
                formatAshtamanshaPartHi(selectedDayData.yamagandamPart),
                "):",
                " "
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "font-mono text-[#FDE68A]", children: selectedDayData.exactSecondsDisplay?.yamagandam || selectedDayData.yamagandam })
            ] }),
            selectedDayData.durMuhurta && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-[#FCA5A5]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#FDE68A] font-bold", children: "दुर्मुहूर्त: " }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "font-mono", children: selectedDayData.durMuhurta })
            ] }),
            selectedDayData.varjyam && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-[#FCA5A5]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#FDE68A] font-bold", children: "वर्ज्यम्: " }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "font-mono", children: selectedDayData.varjyam })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-white", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#FF8A80] font-bold", children: "दिशा शूल: " }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-[#FDE68A]", children: selectedDayData.dishaShool })
            ] }),
            selectedDayData.dishaShoolRemedy && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-[#FDE68A] leading-snug", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-yellow-300 font-bold", children: "परिहार उपाय: " }),
              selectedDayData.dishaShoolRemedy
            ] }),
            selectedDayData.bhadraKaal ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-white bg-rose-900/60 border border-amber-400/50 rounded-lg px-2.5 py-1.5 mt-1 leading-snug flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "warning", tone: "inauspicious", className: "w-3.5 h-3.5 shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#FDE68A] font-extrabold", children: "भद्रा काल: " }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "font-mono text-white", children: selectedDayData.bhadraKaal.replace(/^⚠️\s*भद्रा\s*काल:\s*/u, "") })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-emerald-200/95 bg-emerald-950/35 border border-emerald-500/30 rounded-lg px-2.5 py-1 mt-1 leading-snug", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-300 font-bold", children: "भद्रा: " }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "आज भद्रा नहीं है।" })
            ] }),
            selectedDayData.panchakKaal && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-[#FDE68A] bg-amber-950/75 border border-amber-400/50 rounded-lg px-2.5 py-1 mt-1 font-bold leading-snug", children: selectedDayData.panchakKaal }),
            selectedDayData.gandmoolNakshatra && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-[#FCA5A5] bg-rose-950/80 border border-rose-400/45 rounded-lg px-2.5 py-1 mt-1 font-bold leading-snug flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "warning", tone: "inauspicious", className: "w-3.5 h-3.5 shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: selectedDayData.gandmoolNakshatra })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-rose-200/80 pt-1.5 border-t border-rose-500/20 leading-snug", children: selectedDaySaralArtha.ashubhKaalHi })
          ] })
        ] }),
        selectedDayData.bhadraKaal && selectedDayData.bhadraVaas && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `p-3 rounded-2xl border space-y-1.5 text-xs ${selectedDayData.bhadraVaas.vaasRealm === "prithvi" ? "bg-rose-950/60 border-[#FF6B6B]/65 text-rose-100" : "bg-amber-950/45 border-amber-500/50 text-amber-100"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-extrabold flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    TriangleAlert,
                    {
                      className: `w-3.5 h-3.5 shrink-0 ${selectedDayData.bhadraVaas.isPrithviVaas ? "text-[#FF8A80]" : "text-yellow-400"}`,
                      strokeWidth: 1.5
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    "भद्रावास विचार (मुहूर्त चिंतामणि): ",
                    selectedDayData.bhadraVaas.vaasNameHi
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: `text-[10px] font-black px-2 py-0.5 rounded border ${selectedDayData.bhadraVaas.isPrithviVaas ? "bg-rose-500/25 border-rose-400/60 text-rose-200" : "bg-amber-500/20 border-amber-400/55 text-amber-200"}`,
                    children: selectedDayData.bhadraVaas.vaasRealm === "prithvi" ? "मृत्युलोक वास — शुभ कार्य वर्जित" : selectedDayData.bhadraVaas.vaasNameHi
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] leading-snug opacity-95", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "चंद्र राशि:" }),
                " ",
                selectedDayData.bhadraVaas.moonSignNameHi,
                " •",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "भद्रावास:" }),
                " ",
                selectedDayData.bhadraVaas.effectNoteHi
              ] }),
              (selectedDayData.bhadraVaas.bhadraMukhaWindowHi || selectedDayData.bhadraVaas.bhadraPuchhaWindowHi) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1 border-t border-white/10 text-[11px]", children: [
                selectedDayData.bhadraVaas.bhadraMukhaWindowHi && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg bg-rose-950/55 border border-rose-500/35 px-2 py-1 text-rose-100", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-rose-300", children: "भद्रा मुख (5 घटी — अत्यंत वर्जित):" }),
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono", children: selectedDayData.bhadraVaas.bhadraMukhaWindowHi })
                ] }),
                selectedDayData.bhadraVaas.bhadraPuchhaWindowHi && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg bg-emerald-950/45 border border-emerald-500/35 px-2 py-1 text-emerald-100", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-emerald-300", children: "भद्रा पुच्छ (अंतिम 3 घटी — ग्राह्य):" }),
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono", children: selectedDayData.bhadraVaas.bhadraPuchhaWindowHi })
                ] })
              ] })
            ]
          }
        ),
        (() => {
          const dayNakIdx = selectedDayData.dailyPanchang?.nakshatraIntervals?.[0]?.index ?? 0;
          const dayRashiIdx = (selectedDayData.chandraRashiMeta?.sign1Number ?? 1) - 1;
          const hasProfile = janmaProfile.rashiIndex !== null || janmaProfile.nakshatraIndex !== null;
          const tarabal = janmaProfile.nakshatraIndex !== null ? computePersonalTarabal(janmaProfile.nakshatraIndex, dayNakIdx) : null;
          const chandrabal = janmaProfile.rashiIndex !== null ? computePersonalChandrabal(janmaProfile.rashiIndex, dayRashiIdx) : null;
          const isViewingOtherThanSaved = Boolean(
            savedAccountJanma?.name && janmaProfile.name && savedAccountJanma.name.toLowerCase() !== janmaProfile.name.toLowerCase()
          );
          const handleJanmaNameChange = (rawVal) => {
            setJanmaNameInput(rawVal);
            const trimmed = rawVal.trim();
            if (!trimmed) {
              const cleared = { rashiIndex: null, nakshatraIndex: null };
              setJanmaProfile(cleared);
              savePersonalJanmaProfile(cleared);
              return;
            }
            const lowerTrim = trimmed.toLowerCase();
            if (savedAccountJanma?.name && savedAccountJanma.name.toLowerCase() === lowerTrim) {
              setJanmaProfile(savedAccountJanma);
              savePersonalJanmaProfile(savedAccountJanma);
              return;
            }
            const matchedFamily = savedFamilyJanmas.find(
              (fm) => fm.name && fm.name.toLowerCase() === lowerTrim
            );
            if (matchedFamily) {
              setJanmaProfile(matchedFamily);
              savePersonalJanmaProfile(matchedFamily);
              return;
            }
            const resolved = resolveJanmaProfileFromName(trimmed);
            if (resolved) {
              setJanmaProfile(resolved);
              savePersonalJanmaProfile(resolved);
            }
          };
          const handleRestoreSavedProfile = () => {
            if (!savedAccountJanma) return;
            setJanmaProfile(savedAccountJanma);
            setJanmaNameInput(savedAccountJanma.name || "");
            savePersonalJanmaProfile(savedAccountJanma);
          };
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-2xl bg-slate-950/85 border border-amber-700/35 space-y-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => setShowJanmaSelector((prev) => !prev),
                  className: "text-xs font-bold text-amber-200 hover:text-yellow-300 inline-flex flex-wrap items-center gap-1.5 text-left cursor-pointer",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-3.5 h-3.5 text-yellow-400 shrink-0" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: hasProfile ? janmaProfile.name ? `${janmaProfile.name} जी का दैनिक ताराबल व चंद्रबल` : "व्यक्तिगत दैनिक ताराबल व चंद्रबल (आपकी जन्म राशि/नक्षत्र अनुसार)" : "अपना या किसी का भी नाम लिखें — व्यक्तिगत ताराबल व चंद्रबल देखें" }),
                    hasProfile && janmaProfile.source === "saved_profile" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-1.5 py-0.5 rounded bg-emerald-950/90 border border-emerald-500/40 text-[9px] font-extrabold text-emerald-300", children: "प्रोफ़ाइल से स्वतः" }),
                    hasProfile && janmaProfile.source === "name_auto" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-1.5 py-0.5 rounded bg-sky-950/90 border border-sky-400/40 text-[9px] font-extrabold text-sky-200", children: "नाम (अवखड़ा) अनुसार" }),
                    showJanmaSelector ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-3.5 h-3.5 text-amber-400 shrink-0" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-3.5 h-3.5 text-amber-400 shrink-0" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 text-[10px]", children: [
                isViewingOtherThanSaved && savedAccountJanma?.name && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: handleRestoreSavedProfile,
                    className: "px-2 py-0.5 rounded-lg bg-emerald-950/80 border border-emerald-500/45 text-emerald-200 hover:text-white font-bold cursor-pointer",
                    children: [
                      "मेरी प्रोफ़ाइल (",
                      savedAccountJanma.name.split(" ")[0],
                      ")"
                    ]
                  }
                ),
                hasProfile && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => setShowJanmaSelector((prev) => !prev),
                      className: "text-amber-300 hover:text-yellow-200 font-bold cursor-pointer",
                      children: "अन्य नाम देखें / बदलें"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => {
                        const cleared = { rashiIndex: null, nakshatraIndex: null };
                        setJanmaProfile(cleared);
                        setJanmaNameInput("");
                        savePersonalJanmaProfile(cleared);
                        setShowJanmaSelector(false);
                      },
                      className: "text-rose-300/85 hover:text-rose-200 font-bold cursor-pointer",
                      children: "हटाएं"
                    }
                  )
                ] })
              ] })
            ] }),
            showJanmaSelector && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2.5 pt-2 border-t border-amber-900/40", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[11px] text-amber-200 font-bold block", children: "नाम लिखें (राशि/नक्षत्र न पता हो तो भी नाम से स्वतः गणना होगी):" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1 min-w-[200px]", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        type: "text",
                        value: janmaNameInput,
                        onChange: (e) => handleJanmaNameChange(e.target.value),
                        placeholder: "अपना या किसी अन्य का नाम लिखें (जैसे: राहुल, Priya, शशांक)...",
                        className: "w-full px-3 py-1.5 pr-8 rounded-xl bg-slate-900 border border-amber-500/50 text-amber-100 placeholder:text-slate-400 text-xs font-semibold focus:outline-none focus:border-yellow-400"
                      }
                    ),
                    janmaNameInput && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        "aria-label": "नाम साफ़ करें",
                        onClick: () => handleJanmaNameChange(""),
                        className: "absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-amber-200 text-xs font-bold px-1 cursor-pointer",
                        children: "✕"
                      }
                    )
                  ] }),
                  savedAccountJanma?.name && savedAccountJanma.name.toLowerCase() !== janmaNameInput.trim().toLowerCase() && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: handleRestoreSavedProfile,
                      className: "px-2.5 py-1.5 rounded-xl bg-emerald-950/80 hover:bg-emerald-900/70 border border-emerald-500/45 text-emerald-200 text-[11px] font-bold cursor-pointer shrink-0",
                      children: [
                        "स्वयं: ",
                        savedAccountJanma.name.split(" ")[0]
                      ]
                    }
                  )
                ] }),
                janmaProfile.name && janmaProfile.rashiIndex !== null && janmaProfile.nakshatraIndex !== null && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-emerald-300/90", children: janmaProfile.source === "saved_profile" ? `आपकी सहेजी गई कुंडली प्रोफ़ाइल से स्वतः प्राप्त: ${ALL_12_RASHIS_HI[janmaProfile.rashiIndex]} राशि • ${ALL_27_NAKSHATRAS_HI[janmaProfile.nakshatraIndex]} नक्षत्र` : janmaProfile.source === "name_auto" ? `नाम "${janmaProfile.name}" के अवखड़ा चक्र अनुसार: ${ALL_12_RASHIS_HI[janmaProfile.rashiIndex]} राशि • ${ALL_27_NAKSHATRAS_HI[janmaProfile.nakshatraIndex]} नक्षत्र` : `चयनित विवरण: ${ALL_12_RASHIS_HI[janmaProfile.rashiIndex]} राशि • ${ALL_27_NAKSHATRAS_HI[janmaProfile.nakshatraIndex]} नक्षत्र` })
              ] }),
              savedFamilyJanmas.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-amber-300/80 font-bold", children: "सहेजे गए सदस्य:" }),
                savedFamilyJanmas.map((fm) => {
                  const isActiveMember = fm.name && janmaProfile.name && fm.name.toLowerCase() === janmaProfile.name.toLowerCase();
                  return /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => {
                        setJanmaProfile(fm);
                        setJanmaNameInput(fm.name || "");
                        savePersonalJanmaProfile(fm);
                      },
                      className: `px-2 py-0.5 rounded-lg text-[10px] font-bold border transition-colors cursor-pointer ${isActiveMember ? "bg-amber-500/25 border-yellow-400 text-yellow-200" : "bg-slate-900/90 border-amber-700/40 text-amber-200 hover:border-amber-400/60"}`,
                      children: fm.name
                    },
                    fm.name
                  );
                })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 pt-1.5 border-t border-amber-900/30", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-amber-300/75 block", children: "यदि जन्म कुंडली की राशि या नक्षत्र प्रचलित नाम से अलग है, तो नीचे से बदलें (वैकल्पिक):" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-[11px] text-amber-300 font-bold flex flex-col gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "जन्म राशि (चंद्रबल हेतु)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "select",
                      {
                        value: janmaProfile.rashiIndex === null ? "" : String(janmaProfile.rashiIndex),
                        onChange: (e) => {
                          const val = e.target.value === "" ? null : Number(e.target.value);
                          const next = {
                            ...janmaProfile,
                            name: janmaNameInput.trim() || janmaProfile.name,
                            rashiIndex: val,
                            source: "manual"
                          };
                          setJanmaProfile(next);
                          savePersonalJanmaProfile(next);
                        },
                        className: "px-2.5 py-1.5 rounded-xl bg-slate-900 border border-amber-600/45 text-amber-100 text-xs font-semibold focus:outline-none focus:border-yellow-400 cursor-pointer",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "-- जन्म राशि चुनें --" }),
                          ALL_12_RASHIS_HI.map((rName, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: idx, children: [
                            idx + 1,
                            ". ",
                            rName,
                            " राशि"
                          ] }, rName))
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-[11px] text-amber-300 font-bold flex flex-col gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "जन्म नक्षत्र (ताराबल हेतु)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "select",
                      {
                        value: janmaProfile.nakshatraIndex === null ? "" : String(janmaProfile.nakshatraIndex),
                        onChange: (e) => {
                          const val = e.target.value === "" ? null : Number(e.target.value);
                          const next = {
                            ...janmaProfile,
                            name: janmaNameInput.trim() || janmaProfile.name,
                            nakshatraIndex: val,
                            source: "manual"
                          };
                          setJanmaProfile(next);
                          savePersonalJanmaProfile(next);
                        },
                        className: "px-2.5 py-1.5 rounded-xl bg-slate-900 border border-amber-600/45 text-amber-100 text-xs font-semibold focus:outline-none focus:border-yellow-400 cursor-pointer",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "-- जन्म नक्षत्र चुनें --" }),
                          ALL_27_NAKSHATRAS_HI.map((nName, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: idx, children: [
                            idx + 1,
                            ". ",
                            nName
                          ] }, nName))
                        ]
                      }
                    )
                  ] })
                ] })
              ] })
            ] }),
            hasProfile && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-2", children: [
              tarabal && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: `p-2.5 rounded-xl border text-xs space-y-0.5 ${tarabal.status === "shubh" ? "bg-emerald-950/35 border-emerald-500/40 text-emerald-100" : tarabal.status === "ashubh" ? "bg-rose-950/40 border-rose-500/45 text-rose-100" : "bg-amber-950/35 border-amber-500/40 text-amber-100"}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-extrabold uppercase opacity-85", children: [
                        "ताराबल (",
                        tarabal.birthNakshatraHi,
                        " → ",
                        tarabal.dayNakshatraHi,
                        ")"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black", children: tarabal.taraNameHi })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-extrabold text-[11px]", children: tarabal.statusLabelHi }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] opacity-85 leading-snug", children: tarabal.meaningHi })
                  ]
                }
              ),
              chandrabal && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: `p-2.5 rounded-xl border text-xs space-y-0.5 ${chandrabal.status === "shubh" ? "bg-emerald-950/35 border-emerald-500/40 text-emerald-100" : chandrabal.status === "ashubh" ? "bg-rose-950/40 border-rose-500/45 text-rose-100" : "bg-amber-950/35 border-amber-500/40 text-amber-100"}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-extrabold uppercase opacity-85", children: [
                        "चंद्रबल (",
                        chandrabal.birthRashiHi,
                        " → ",
                        chandrabal.dayRashiHi,
                        ")"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-black", children: [
                        chandrabal.houseNumber,
                        "वां भाव"
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-extrabold text-[11px]", children: chandrabal.statusLabelHi }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] opacity-85 leading-snug", children: chandrabal.meaningHi })
                  ]
                }
              )
            ] })
          ] });
        })(),
        (selectedDayData.shivavaas || selectedDayData.agnivaas || selectedDayData.dailyLagnaTable && selectedDayData.dailyLagnaTable.length > 0) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-slate-950/90 border border-amber-700/40 overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => setShowSpecialMuhuratAccordion((prev) => !prev),
              "aria-expanded": showSpecialMuhuratAccordion,
              className: "w-full px-3.5 py-3 flex flex-wrap items-center justify-between gap-2 text-left hover:bg-amber-950/30 transition-colors cursor-pointer",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-4 h-4 text-yellow-400 shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs sm:text-sm font-extrabold text-amber-100", children: "विशेष मुहूर्त, वास विचार एवं दिन की लग्न सारणी" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-[10px] font-bold", children: [
                  selectedDayData.shivavaas && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "span",
                    {
                      className: `px-2 py-0.5 rounded border ${selectedDayData.shivavaas.isAuspicious ? "bg-emerald-950/60 border-emerald-500/45 text-emerald-200" : "bg-rose-950/50 border-rose-500/40 text-rose-200"}`,
                      children: [
                        "शिववास: ",
                        selectedDayData.shivavaas.vaasNameHi.split(" (")[0]
                      ]
                    }
                  ),
                  selectedDayData.agnivaas && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "span",
                    {
                      className: `px-2 py-0.5 rounded border ${selectedDayData.agnivaas.isAuspicious ? "bg-emerald-950/60 border-emerald-500/45 text-emerald-200" : "bg-rose-950/50 border-rose-500/40 text-rose-200"}`,
                      children: [
                        "अग्निवास: ",
                        selectedDayData.agnivaas.vaasNameHi.split(" (")[0]
                      ]
                    }
                  ),
                  showSpecialMuhuratAccordion ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-4 h-4 text-amber-300 shrink-0" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-4 h-4 text-amber-300 shrink-0" })
                ] })
              ]
            }
          ),
          showSpecialMuhuratAccordion && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-3.5 pb-3.5 pt-2 border-t border-amber-800/35 space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-2.5", children: [
              selectedDayData.shivavaas && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: `p-3 rounded-xl border text-xs space-y-1 ${selectedDayData.shivavaas.isAuspicious ? "bg-emerald-950/30 border-emerald-500/40 text-emerald-100" : "bg-rose-950/35 border-rose-500/40 text-rose-100"}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-extrabold uppercase text-amber-300", children: "शिववास विचार (रुद्राभिषेक हेतु)" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: `text-[10px] font-black px-1.5 py-0.5 rounded ${selectedDayData.shivavaas.isAuspicious ? "bg-emerald-500/20 text-emerald-200" : "bg-rose-500/20 text-rose-200"}`,
                          children: selectedDayData.shivavaas.isAuspicious ? "शुभ" : "वर्जित / विचारणीय"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-black text-sm text-yellow-200 flex flex-wrap items-baseline gap-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: selectedDayData.shivavaas.vaasNameHi }),
                      selectedDayData.shivavaas.formulaHi && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-semibold text-amber-200/80", children: [
                        "[",
                        selectedDayData.shivavaas.formulaHi,
                        "]"
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-semibold", children: selectedDayData.shivavaas.statusLabelHi }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] opacity-85 leading-snug", children: selectedDayData.shivavaas.effectHi }),
                    selectedDayData.shivavaas.shastricNoteHi && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-amber-200/90 pt-1 border-t border-amber-800/35 leading-snug", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "शास्त्रीय अपवाद:" }),
                      " ",
                      selectedDayData.shivavaas.shastricNoteHi
                    ] }),
                    selectedDayData.shivavaas.transitionNoteHi && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-sky-200/90 pt-1 border-t border-amber-800/35 leading-snug", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "तिथि परिवर्तन पश्चात:" }),
                      " ",
                      selectedDayData.shivavaas.transitionNoteHi
                    ] })
                  ]
                }
              ),
              selectedDayData.agnivaas && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: `p-3 rounded-xl border text-xs space-y-1 ${selectedDayData.agnivaas.isAuspicious ? "bg-emerald-950/30 border-emerald-500/40 text-emerald-100" : "bg-rose-950/35 border-rose-500/40 text-rose-100"}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-extrabold uppercase text-amber-300", children: "अग्निवास विचार (हवन / यज्ञ हेतु)" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: `text-[10px] font-black px-1.5 py-0.5 rounded ${selectedDayData.agnivaas.isAuspicious ? "bg-emerald-500/20 text-emerald-200" : "bg-rose-500/20 text-rose-200"}`,
                          children: selectedDayData.agnivaas.isAuspicious ? "हवन शुभ" : "हवन वर्जित"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-black text-sm text-yellow-200", children: selectedDayData.agnivaas.vaasNameHi }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-semibold", children: selectedDayData.agnivaas.statusLabelHi }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] opacity-85 leading-snug", children: selectedDayData.agnivaas.effectHi }),
                    selectedDayData.agnivaas.transitionNoteHi && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-sky-200/90 pt-1 border-t border-amber-800/35 leading-snug", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "तिथि परिवर्तन पश्चात:" }),
                      " ",
                      selectedDayData.agnivaas.transitionNoteHi
                    ] })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              MuhuratShastricGuidanceCard,
              {
                dayPanchang: selectedDayData,
                location: activeLocation
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-amber-200/75 px-1 leading-snug", children: selectedDaySaralArtha.vivechanHi }),
            selectedDayData.dailyLagnaTable && selectedDayData.dailyLagnaTable.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 pt-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] font-extrabold text-amber-300 flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3.5 h-3.5 text-yellow-400" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "दिन की 12 लग्न सारणी (सूर्योदय से अगले सूर्योदय तक • निरयण लाहिड़ी)" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-amber-300/75", children: [
                  activeLocation.hindiName.split(",")[0],
                  " स्थानीय समय"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2", children: selectedDayData.dailyLagnaTable.map((slot, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "p-2.5 rounded-xl bg-slate-900/80 border border-amber-800/35 text-xs flex flex-col gap-0.5",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-extrabold text-yellow-200", children: [
                        idx + 1,
                        ". ",
                        slot.lagnaNameHi
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-amber-300/80", children: [
                        "स्वामी: ",
                        slot.lagnaLordHi
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-mono text-amber-100/90 tabular-nums", children: slot.timeRangeHi })
                  ]
                },
                `${slot.rashiIndex}-${idx}`
              )) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3.5 sm:p-4 rounded-2xl bg-slate-950/90 border border-amber-800/40 space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-bold text-amber-200 flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Compass, { className: "w-4 h-4 text-amber-400 shrink-0", strokeWidth: 1.5 }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                "अष्टमांश (8 भाग) एवं चौघड़िया (",
                selectedDayData.formattedDateHindi,
                ")"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex rounded-lg bg-slate-900 p-0.5 border border-amber-800/40 text-[11px] self-start sm:self-auto", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => setChoghadiyaTab("day"),
                  className: `px-2.5 py-1 rounded-md font-bold inline-flex items-center gap-1 cursor-pointer ${choghadiyaTab === "day" ? "bg-amber-500 text-slate-950" : "text-amber-300 hover:text-amber-100"}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "sun", tone: "inherit", className: "w-3.5 h-3.5" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "दिन (8 भाग)" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => setChoghadiyaTab("night"),
                  className: `px-2.5 py-1 rounded-md font-bold inline-flex items-center gap-1 cursor-pointer ${choghadiyaTab === "night" ? "bg-amber-500 text-slate-950" : "text-amber-300 hover:text-amber-100"}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "moon", tone: "inherit", className: "w-3.5 h-3.5" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "रात्रि (8 भाग)" })
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-2.5", children: (choghadiyaTab === "day" ? selectedDayData.dayChoghadiya : selectedDayData.nightChoghadiya).map((slot, i) => {
            const isKaalBlocked = choghadiyaTab === "day" && (slot.kaalBadge === "राहुकाल" || slot.kaalBadge === "यमगण्ड");
            const isShubh = ["amrit", "shubh", "labh", "char"].includes(slot.type) && !isKaalBlocked;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: `p-3 rounded-xl border text-xs flex flex-col justify-between gap-1.5 ${isKaalBlocked ? "bg-rose-950/35 border-rose-500/45 text-rose-200" : isShubh ? "bg-emerald-950/25 border-emerald-500/35 text-emerald-200" : "bg-slate-900/60 border-slate-800 text-slate-300"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold leading-snug inline-flex items-center gap-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                        "भाग ",
                        i + 1,
                        ": ",
                        slot.hindiName
                      ] }),
                      isShubh && /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "sparkles", tone: "auspicious", className: "w-3 h-3" })
                    ] }),
                    choghadiyaTab === "day" && slot.kaalBadge && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: `text-[10px] font-extrabold px-2 py-0.5 rounded border shrink-0 ${slot.kaalBadge === "गुलिक काल" ? "bg-amber-500/20 border-amber-400/50 text-amber-200" : "bg-rose-500/25 border-rose-400/50 text-rose-200"}`,
                        children: slot.kaalBadge
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-mono text-amber-300/90 tabular-nums", children: (slot.exactTimeWithSeconds || slot.time).replace(/सुबह |प्रातः |पूर्वाह्न |दोपहर |सायं |शाम |रात्रि |मध्यरात्रि /g, "") })
                ]
              },
              i
            );
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-rose-950/30 border border-rose-500/30 px-3 py-2 text-[11px] text-rose-100/95 leading-relaxed space-y-1 tabular-nums", children: [
            selectedDayData.eclipsedChoghadiyaLineHi && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg bg-amber-950/55 border border-amber-400/45 px-2.5 py-1.5 text-amber-200 font-semibold", children: selectedDayData.eclipsedChoghadiyaLineHi }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-extrabold text-[#FCA5A5]", children: "अशुभ चौघड़िया (उद्वेग, काल, रोग):" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-amber-300 font-bold", children: "दिन: " }),
              selectedDayData.pureAshubhDayChoghadiyaLineHi || selectedDayData.dayChoghadiya.filter((c) => ["rog", "kaal", "udveg"].includes(c.type)).map(
                (c) => `${c.hindiName}: ${(c.safeShareTime || c.time).replace(/सुबह |प्रातः |पूर्वाह्न |दोपहर |सायं |शाम |रात्रि |मध्यरात्रि /gu, "").trim()}`
              ).join(", ")
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sky-300 font-bold", children: "रात्रि: " }),
              selectedDayData.pureAshubhNightChoghadiyaLineHi || selectedDayData.nightChoghadiya.filter((c) => ["rog", "kaal", "udveg"].includes(c.type)).map(
                (c) => `${c.hindiName}: ${(c.safeShareTime || c.time).replace(/सुबह |प्रातः |पूर्वाह्न |दोपहर |सायं |शाम |रात्रि |मध्यरात्रि /gu, "").trim()}`
              ).join(", ")
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "pt-1.5 border-t border-amber-500/20 text-[11px] text-amber-200/80 leading-relaxed", children: [
              "नोट: चौघड़िया व मुहूर्त गणना सटीक सेकंड (HH:MM:SS) पर आधारित है; मिनट-आधारित पंचांगों से ±1 मिनट का शास्त्रीय अंतर स्वाभाविक है।",
              selectedDayData.deltaTNoteHi ? ` ${selectedDayData.deltaTNoteHi}` : ""
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-amber-100/80 pt-1 border-t border-amber-500/15 leading-snug", children: selectedDaySaralArtha.choghadiyaHi })
          ] }),
          (selectedDayData.dayHora?.length > 0 || selectedDayData.nightHora?.length > 0) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-3 border-t border-amber-800/35 space-y-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => setShowHoraPanel((prev) => !prev),
                  className: "text-xs font-extrabold text-amber-200 hover:text-yellow-300 inline-flex items-center gap-1.5 cursor-pointer",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3.5 h-3.5 text-yellow-400 shrink-0", strokeWidth: 1.5 }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "वैदिक ग्रह होरा चक्र (24 होरा — दिन 12 / रात्रि 12)" }),
                    showHoraPanel ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-3.5 h-3.5" })
                  ]
                }
              ),
              showHoraPanel && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex rounded-lg bg-slate-900 p-0.5 border border-amber-800/40 text-[11px]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => setHoraTab("day"),
                    className: `px-2 py-0.5 rounded-md font-bold cursor-pointer ${horaTab === "day" ? "bg-amber-500 text-slate-950" : "text-amber-300"}`,
                    children: "दिन (12 होरा)"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => setHoraTab("night"),
                    className: `px-2 py-0.5 rounded-md font-bold cursor-pointer ${horaTab === "night" ? "bg-amber-500 text-slate-950" : "text-amber-300"}`,
                    children: "रात्रि (12 होरा)"
                  }
                )
              ] })
            ] }),
            showHoraPanel && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-2", children: (horaTab === "day" ? selectedDayData.dayHora : selectedDayData.nightHora).map((h) => {
              const isAuspicious = h.natureHi.includes("शुभ");
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: `p-2.5 rounded-xl border text-xs flex flex-col gap-1 ${isAuspicious ? "bg-emerald-950/20 border-emerald-500/30 text-emerald-100" : "bg-slate-900/60 border-slate-800 text-slate-300"}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-amber-100", children: [
                        h.horaIndex,
                        ". ",
                        h.planetNameHi
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-mono text-amber-300/90 tabular-nums", children: h.time })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-amber-200/75 leading-snug", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { className: isAuspicious ? "text-emerald-300" : "text-slate-400", children: [
                        "[",
                        h.natureHi,
                        "]"
                      ] }),
                      " ",
                      h.suitableForHi
                    ] })
                  ]
                },
                `${h.period}-${h.horaIndex}`
              );
            }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3.5 rounded-2xl bg-gradient-to-r from-amber-950/70 to-slate-900 border border-amber-500/40 space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-bold uppercase text-amber-400 block", children: [
              "इस तिथि के आराध्य देव (",
              selectedDayData.festivalDeity,
              ") का ",
              resolveMantraOrShlokaLabelHi(selectedDayData.festivalMantra),
              ":"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm font-bold font-vedic text-yellow-300 mt-0.5 leading-relaxed", children: selectedDayData.festivalMantra }),
            selectedDayData.festivalMantraMeaning && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] sm:text-xs text-amber-100/90 mt-1 leading-relaxed", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-amber-300", children: "अर्थ (भावार्थ): " }),
              selectedDayData.festivalMantraMeaning
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  const speechId = "panchang-calendar-day-mantra";
                  if (activeSpeechId !== speechId) {
                    vedicAudio.playTempleBell(0.6);
                  }
                  const textToSpeak = selectedDayData.festivalMantra ? `${selectedDayData.formattedDateHindi}, ${selectedDayData.tithiName}। विशेष ${resolveMantraOrShlokaLabelHi(selectedDayData.festivalMantra)}: ${selectedDayData.festivalMantra}। अर्थ: ${selectedDayData.festivalMantraMeaning || ""}` : `${selectedDayData.formattedDateHindi}, ${selectedDayData.hinduMaas}, ${selectedDayData.paksha} ${selectedDayData.tithiName}, ${selectedDayData.nakshatra}। ॐ सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः। सर्वे भद्राणि पश्यन्तु मा कश्चिद्दुःखभाग्भवेत्॥`;
                  vedicAudio.toggleSpeakText(textToSpeak, speechId);
                },
                className: `py-2 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer transition-all ${activeSpeechId === "panchang-calendar-day-mantra" ? "bg-emerald-500 text-slate-950 border-emerald-300 font-extrabold shadow-md" : "bg-amber-500/20 hover:bg-amber-500/30 border-amber-400/50 text-amber-200"}`,
                children: activeSpeechId === "panchang-calendar-day-mantra" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(VolumeX, { className: "w-3.5 h-3.5" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "मंत्र रोकें" })
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Volume2, { className: "w-3.5 h-3.5 text-amber-400" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "मंत्र श्रवण" })
                ] })
              }
            ),
            onOpenMantraJaap && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: onOpenMantraJaap,
                className: "py-2 px-3 rounded-xl bg-amber-900/70 hover:bg-amber-800 border border-amber-500/40 text-amber-100 text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "w-3.5 h-3.5 text-yellow-400" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "108 जप माला" })
                ]
              }
            ),
            onAskPanditInChat && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => onAskPanditInChat(
                  `पण्डित जी, ${selectedDayData.formattedDateHindi} (${selectedDayData.vaarHindi}, ${selectedDayData.tithiName}, ${selectedDayData.nakshatra}) के दिन का शुभ मुहूर्त, व्रत विधि और मेरे लिए क्या विशेष उपाय रहेगा?`
                ),
                className: "py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-amber-500/30 text-amber-200 text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-3.5 h-3.5 text-emerald-400" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "पण्डित जी से मुहूर्त पूछें" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => {
                  const el = document.getElementById("today-complete-info-below-calendar");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                },
                className: "py-2 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-slate-950 text-xs font-extrabold flex items-center justify-center gap-1.5 shadow-md cursor-pointer",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarCheck, { className: "w-3.5 h-3.5" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "पर्व महत्व व पूजा विधि" })
                ]
              }
            )
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "today-complete-info-below-calendar", className: "scroll-mt-24 pt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      TodayFestivalWidget,
      {
        selectedDayPanchang: selectedDayData,
        onOpenMantraJaap: () => {
          if (onOpenMantraJaap) onOpenMantraJaap();
        },
        onAskPanditInChat: (topic) => {
          if (onAskPanditInChat) {
            onAskPanditInChat(
              `पण्डित जी, मुझे "${topic}" (${selectedDayData.formattedDateHindi}) के बारे में शास्त्रसम्मत परामर्श, शुभ मुहूर्त और पूजा विधि बताएं।`
            );
          }
        }
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#0e1526] border border-amber-700/40 rounded-3xl p-4 sm:p-6 shadow-xl space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-amber-800/40 pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-lg sm:text-2xl font-extrabold font-vedic text-amber-100 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-5 h-5 text-yellow-400 fill-yellow-400" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            monthlyData.monthNameHindi,
            " ",
            monthlyData.year,
            " के शुभ मांगलिक मुहूर्त सारणी"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-amber-300/80 mt-0.5", children: "गृह प्रवेश, विवाह, वाहन क्रय, नामकरण एवं नए व्यापार हेतु पंचांग शोधित शुभ तिथियां (तारीख पर क्लिक कर चौघड़िया देखें)" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", children: muhuratGroups.map((group) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "p-4 rounded-2xl bg-slate-950/85 border border-amber-800/40 flex flex-col justify-between gap-3",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SacredFeatureIconBox, { name: group.icon }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm sm:text-base font-bold font-vedic text-yellow-300", children: group.title })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-slate-400 mt-1.5", children: group.desc }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 flex flex-wrap gap-1.5", children: group.days.length > 0 ? group.days.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => handleSelectDay(d),
                  className: `px-2.5 py-1 rounded-lg text-xs font-bold font-mono cursor-pointer transition-all border ${selectedDayData.day === d.day ? "bg-amber-500 text-slate-950 border-yellow-300" : "bg-emerald-950/50 hover:bg-emerald-900/60 text-emerald-200 border-emerald-500/40"}`,
                  title: `${d.formattedDateHindi} (${d.tithiShort}, ${d.nakshatra})`,
                  children: [
                    d.day,
                    " ",
                    monthlyData.monthNameHindi.slice(0, 3),
                    " (",
                    d.vaarShort,
                    ")"
                  ]
                },
                d.day
              )) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-amber-300/80 italic leading-relaxed", children: group.zeroReason }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-amber-300/80", children: [
                "कुल शुभ दिवस: ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: group.days.length })
              ] }),
              onAskPanditInChat && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => onAskPanditInChat(
                    `पण्डित जी, मुझे ${monthlyData.monthNameHindi} ${monthlyData.year} में "${group.title}" के लिए मेरी राशि व नाम के अनुसार सबसे श्रेष्ठ मुहूर्त बताएं।`
                  ),
                  className: "inline-flex items-center gap-1 text-yellow-400 hover:underline font-bold cursor-pointer",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "पण्डित जी से पूछें" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3.5 h-3.5 shrink-0", strokeWidth: 1.5 })
                  ]
                }
              )
            ] })
          ]
        },
        group.title
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#0d1322] border-2 border-amber-500/50 rounded-3xl p-4 sm:p-6 shadow-2xl space-y-6 pj-cv-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-amber-800/40 pb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-yellow-300 text-xs font-extrabold mb-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-3.5 h-3.5 text-yellow-400" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "दृक गणित 10-दिवसीय पंचांग (",
            tenDayPanchangList[0]?.formattedDateHindi,
            " से",
            " ",
            tenDayPanchangList[tenDayPanchangList.length - 1]?.formattedDateHindi,
            ")"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-lg sm:text-2xl font-extrabold font-vedic text-amber-100 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "panchang", className: "w-5 h-5 shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "10 दिनों का संक्षिप्त एवं विस्तृत पंचांग (",
            activeLocation.hindiName.split(",")[0],
            ")"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-amber-200/80 mt-0.5", children: "चयनित तिथि से आगामी 10 दिनों की तिथि समाप्ति, अगली तिथि (“फिर ...”), नक्षत्र, योग, करण, राहुकाल, यमगण्ड एवं गुलिक काल की 100% सटीक सारणी" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-3 md:hidden", children: tenDayPanchangList.map((dItem) => {
          const isSelectedRow = dItem.year === selectedYear && dItem.month === selectedMonth && dItem.day === selectedDayData.day;
          const cleanNakshatra = dItem.nakshatra.split(" (")[0].replace(" नक्षत्र", "").trim();
          const nakshatraCellText = dItem.nakshatraEndTime ? `${cleanNakshatra} — ${dItem.nakshatraEndTime}` : cleanNakshatra;
          const shortEndTime = dItem.tithiEndTime.split(",")[0].replace(/प्रातः |पूर्वाह्न |दोपहर |सायं |रात्रि |मध्यरात्रि |अगले दिन /g, "").trim();
          const tithiCellText = dItem.kshayaTithis?.hasKshaya ? `${dItem.tithiShort} (${shortEndTime}) • क्षय` : `${dItem.tithiShort} (${shortEndTime})`;
          const festivalCellText = dItem.festivalName || `${dItem.tithiShort} तिथि`;
          const stripTimePrefix = /सुबह |प्रातः |पूर्वाह्न |दोपहर |सायं |शाम |रात्रि |मध्यरात्रि /g;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => handleSelectDay(dItem),
              className: `w-full text-left p-3.5 rounded-2xl border transition-all space-y-2.5 cursor-pointer ${isSelectedRow ? "bg-gradient-to-br from-amber-950/75 via-slate-900 to-slate-950 border-yellow-400 shadow-lg" : "bg-slate-950/90 hover:bg-slate-900 border-amber-800/45"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-2 border-b border-amber-900/40 pb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-black text-amber-200", children: [
                      String(dItem.day).padStart(2, "0"),
                      " ",
                      HINDI_GREGORIAN_MONTHS[dItem.month - 1]
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-bold text-amber-100/85", children: [
                      "• ",
                      dItem.vaarHindi
                    ] }),
                    dItem.isToday && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 rounded bg-emerald-500 text-slate-950 text-[10px] font-black", children: "आज" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-1.5", children: [
                    dItem.isGandmool && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 rounded-lg bg-rose-950/80 border border-rose-400/45 text-[10px] font-bold text-rose-200", children: "गंडमूल नक्षत्र" }),
                    dItem.isPanchak && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 rounded-lg bg-amber-950/80 border border-amber-400/45 text-[10px] font-bold text-amber-200", children: "पंचक" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 rounded-lg bg-emerald-950/70 border border-emerald-500/35 text-[11px] font-bold text-emerald-300", children: festivalCellText })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2 text-xs leading-relaxed", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2 rounded-xl bg-slate-900/80 border border-amber-900/30", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold text-amber-400 block", children: "मास / पक्ष / तिथि" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-semibold text-amber-200/90 block", children: dItem.hinduMaas }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-yellow-200", children: tithiCellText })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2 rounded-xl bg-slate-900/80 border border-amber-900/30", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold text-amber-400 block", children: "मुख्य नक्षत्र" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-amber-100", children: nakshatraCellText })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-1.5 text-[11px] leading-snug pt-0.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2 rounded-xl bg-rose-950/35 border border-rose-500/25", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[9.5px] font-bold text-rose-400 block", children: [
                      "राहुकाल (",
                      formatAshtamanshaPartHi(dItem.rahuKaalPart, false),
                      ")"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono font-semibold text-rose-200 break-words", children: dItem.rahuKaal.replace(stripTimePrefix, "") })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2 rounded-xl bg-orange-950/35 border border-orange-500/25", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[9.5px] font-bold text-orange-400 block", children: [
                      "यमगण्ड (",
                      formatAshtamanshaPartHi(dItem.yamagandamPart, false),
                      ")"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono font-semibold text-orange-200 break-words", children: dItem.yamagandam.replace(stripTimePrefix, "") })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2 rounded-xl bg-amber-950/35 border border-amber-500/25", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[9.5px] font-bold text-amber-400 block", children: [
                      "गुलिक (",
                      formatAshtamanshaPartHi(dItem.gulikaKaalPart, false),
                      ")"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono font-semibold text-amber-200 break-words", children: dItem.gulikaKaal.replace(stripTimePrefix, "") })
                  ] })
                ] })
              ]
            },
            `mob-${dItem.year}-${dItem.month}-${dItem.day}`
          );
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block overflow-x-auto rounded-2xl border border-amber-700/40 bg-slate-950/90", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left border-collapse min-w-[1040px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-gradient-to-r from-amber-950/90 via-red-950/80 to-amber-950/90 border-b border-amber-600/40 text-xs font-extrabold text-yellow-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3.5 px-4", children: "दिनांक" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3.5 px-3", children: "दिन" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3.5 px-4", children: "पक्ष / तिथि" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3.5 px-4", children: "मुख्य नक्षत्र" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3.5 px-4", children: "मुख्य व्रत / त्योहार" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3.5 px-4", children: "राहुकाल (अशुभ)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3.5 px-4", children: "यमगण्ड (अशुभ)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3.5 px-4", children: "गुलिक काल (शुभ)" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-amber-900/30 text-xs leading-relaxed", children: tenDayPanchangList.map((dItem) => {
            const isSelectedRow = dItem.year === selectedYear && dItem.month === selectedMonth && dItem.day === selectedDayData.day;
            const cleanNakshatra = dItem.nakshatra.split(" (")[0].replace(" नक्षत्र", "").trim();
            const nakshatraCellText = dItem.nakshatraEndTime ? `${cleanNakshatra} — ${dItem.nakshatraEndTime}` : cleanNakshatra;
            const shortEndTime = dItem.tithiEndTime.split(",")[0].replace(/प्रातः |पूर्वाह्न |दोपहर |सायं |रात्रि |मध्यरात्रि |अगले दिन /g, "").trim();
            const tithiCellText = dItem.kshayaTithis?.hasKshaya ? `${dItem.tithiShort} (${shortEndTime}) • क्षय` : `${dItem.tithiShort} (${shortEndTime})`;
            const festivalCellText = dItem.festivalName || `${dItem.tithiShort} तिथि`;
            const stripTimePrefix = /सुबह |प्रातः |पूर्वाह्न |दोपहर |सायं |शाम |रात्रि |मध्यरात्रि /g;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "tr",
              {
                onClick: () => handleSelectDay(dItem),
                className: `cursor-pointer transition-colors ${isSelectedRow ? "bg-amber-900/40 text-amber-100 font-semibold" : "hover:bg-slate-900/80 text-slate-200"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-3 px-4 font-extrabold text-amber-200 whitespace-nowrap", children: [
                    String(dItem.day).padStart(2, "0"),
                    " ",
                    HINDI_GREGORIAN_MONTHS[dItem.month - 1],
                    dItem.isToday && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1.5 px-1.5 py-0.5 rounded bg-emerald-500 text-slate-950 text-[9px] font-black", children: "आज" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-3 text-amber-100 whitespace-nowrap", children: dItem.vaarHindi }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-3 px-4 text-yellow-200 font-bold whitespace-nowrap", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-[10px] font-semibold text-amber-300/90", children: dItem.hinduMaas }),
                    tithiCellText
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-amber-100 whitespace-nowrap", children: nakshatraCellText }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-3 px-4 font-bold text-emerald-300 whitespace-nowrap", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: festivalCellText }),
                    dItem.isGandmool && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1.5 px-1.5 py-0.5 rounded bg-rose-950/85 border border-rose-400/45 text-[10px] font-bold text-rose-200", children: "गंडमूल" }),
                    dItem.isPanchak && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1.5 px-1.5 py-0.5 rounded bg-amber-950/85 border border-amber-400/45 text-[10px] font-bold text-amber-200", children: "पंचक" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-3 px-4 font-mono text-rose-300 whitespace-nowrap", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-rose-400/80 mr-1.5", children: [
                      "(",
                      formatAshtamanshaPartHi(dItem.rahuKaalPart, false),
                      ")"
                    ] }),
                    dItem.rahuKaal.replace(stripTimePrefix, "")
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-3 px-4 font-mono text-orange-300 whitespace-nowrap", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-orange-400/80 mr-1.5", children: [
                      "(",
                      formatAshtamanshaPartHi(dItem.yamagandamPart, false),
                      ")"
                    ] }),
                    dItem.yamagandam.replace(stripTimePrefix, "")
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-3 px-4 font-mono text-amber-200 whitespace-nowrap", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-amber-400/80 mr-1.5", children: [
                      "(",
                      formatAshtamanshaPartHi(dItem.gulikaKaalPart, false),
                      ")"
                    ] }),
                    dItem.gulikaKaal.replace(stripTimePrefix, "")
                  ] })
                ]
              },
              `${dItem.year}-${dItem.month}-${dItem.day}`
            );
          }) })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-2xl bg-slate-950/95 border border-amber-600/40 space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-amber-800/40 pb-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-sm sm:text-base font-extrabold font-vedic text-yellow-300 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "yantra", className: "w-4 h-4 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "अष्टमांश (8 बराबर भाग) नियम: राहुकाल, यमगण्ड एवं गुलिक काल की शास्त्रीय गणना (",
              selectedDayData.formattedDateHindi,
              " • ",
              selectedDayData.vaarHindi,
              ")"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-amber-200/85 mt-0.5 leading-relaxed", children: [
            "नियम: सूर्योदय (",
            selectedDayData.sunrise,
            ") से सूर्यास्त (",
            selectedDayData.sunset,
            ") तक के कुल दिनमान (",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: selectedDayData.dinamanaFormatted }),
            ") को 8 बराबर भागों (अष्टमांश) में बांटा जाता है। प्रत्येक भाग = ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: selectedDayData.ashtamaamsaDurationFormatted }),
            "।"
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-2.5 md:hidden", children: [
          { w: 0, name: "रविवार (सूर्य)", r: 8, y: 5, g: 7 },
          { w: 1, name: "सोमवार (चंद्र)", r: 2, y: 4, g: 6 },
          { w: 2, name: "मंगलवार (मंगल)", r: 7, y: 3, g: 5 },
          { w: 3, name: "बुधवार (बुध)", r: 5, y: 2, g: 4 },
          { w: 4, name: "गुरुवार (बृहस्पति)", r: 6, y: 1, g: 3 },
          { w: 5, name: "शुक्रवार (शुक्र)", r: 4, y: 7, g: 2 },
          { w: 6, name: "शनिवार (शनि)", r: 3, y: 6, g: 1 }
        ].map((row) => {
          const isActiveVaar = selectedDayData.weekdayIndex === row.w;
          const rSlot = selectedDayData.dayChoghadiya[row.r - 1]?.time || "";
          const ySlot = selectedDayData.dayChoghadiya[row.y - 1]?.time || "";
          const gSlot = selectedDayData.dayChoghadiya[row.g - 1]?.time || "";
          const stripP = /सुबह |प्रातः |पूर्वाह्न |दोपहर |सायं |शाम |रात्रि |मध्यरात्रि /g;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: `p-3 rounded-xl border space-y-2 ${isActiveVaar ? "bg-amber-500/15 border-amber-400 text-yellow-200" : "bg-slate-900/70 border-amber-900/35 text-slate-200"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2 text-xs font-extrabold", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: row.name }),
                  isActiveVaar && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 rounded bg-amber-400 text-slate-950 text-[10px] font-black", children: "चयनित वार" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-1.5 text-[11px] leading-snug", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-1.5 rounded-lg bg-slate-950/75 border border-rose-500/25", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[9.5px] font-bold text-rose-400 block", children: [
                      "राहु (",
                      formatAshtamanshaPartHi(row.r),
                      ")"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-rose-200 break-words", children: rSlot.replace(stripP, "") })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-1.5 rounded-lg bg-slate-950/75 border border-orange-500/25", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[9.5px] font-bold text-orange-400 block", children: [
                      "यम (",
                      formatAshtamanshaPartHi(row.y),
                      ")"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-orange-200 break-words", children: ySlot.replace(stripP, "") })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-1.5 rounded-lg bg-slate-950/75 border border-amber-500/25", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[9.5px] font-bold text-amber-400 block", children: [
                      "गुलिक (",
                      formatAshtamanshaPartHi(row.g),
                      ")"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-amber-200 break-words", children: gSlot.replace(stripP, "") })
                  ] })
                ] })
              ]
            },
            `ash-mob-${row.w}`
          );
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block overflow-x-auto rounded-xl border border-amber-800/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left border-collapse min-w-[780px] text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-amber-950/70 text-yellow-300 font-extrabold border-b border-amber-700/40", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-4", children: "वार (दिन)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-4", children: "राहुकाल (अष्टमांश भाग)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-4", children: "यमगण्ड (अष्टमांश भाग)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-4", children: "गुलिक काल / मांदी (शुभ अष्टमांश)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("th", { className: "py-3 px-4", children: [
              selectedDayData.formattedDateHindi,
              " के दिनमान अनुसार समय"
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-amber-900/25 leading-relaxed", children: [
            { w: 0, name: "रविवार (सूर्य)", r: 8, y: 5, g: 7 },
            { w: 1, name: "सोमवार (चंद्र)", r: 2, y: 4, g: 6 },
            { w: 2, name: "मंगलवार (मंगल)", r: 7, y: 3, g: 5 },
            { w: 3, name: "बुधवार (बुध)", r: 5, y: 2, g: 4 },
            { w: 4, name: "गुरुवार (बृहस्पति)", r: 6, y: 1, g: 3 },
            { w: 5, name: "शुक्रवार (शुक्र)", r: 4, y: 7, g: 2 },
            { w: 6, name: "शनिवार (शनि)", r: 3, y: 6, g: 1 }
          ].map((row) => {
            const isActiveVaar = selectedDayData.weekdayIndex === row.w;
            const rSlot = selectedDayData.dayChoghadiya[row.r - 1]?.time || "";
            const ySlot = selectedDayData.dayChoghadiya[row.y - 1]?.time || "";
            const gSlot = selectedDayData.dayChoghadiya[row.g - 1]?.time || "";
            const stripP = /सुबह |प्रातः |पूर्वाह्न |दोपहर |सायं |शाम |रात्रि |मध्यरात्रि /g;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "tr",
              {
                className: isActiveVaar ? "bg-amber-500/20 text-yellow-200 font-extrabold" : "text-slate-300 hover:bg-slate-900/60",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2.5 px-4 whitespace-nowrap", children: [
                    row.name,
                    isActiveVaar && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1.5 px-1.5 py-0.5 rounded bg-amber-400 text-slate-950 text-[9px] font-black", children: "चयनित वार" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2.5 px-4 text-rose-300 whitespace-nowrap", children: [
                    formatAshtamanshaPartHi(row.r),
                    " (",
                    rSlot.replace(stripP, ""),
                    ")"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2.5 px-4 text-orange-300 whitespace-nowrap", children: [
                    formatAshtamanshaPartHi(row.y),
                    " (",
                    ySlot.replace(stripP, ""),
                    ")"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2.5 px-4 text-amber-200 whitespace-nowrap", children: [
                    formatAshtamanshaPartHi(row.g),
                    " (",
                    gSlot.replace(stripP, ""),
                    ")"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2.5 px-4 font-mono text-[11px] text-emerald-300 whitespace-nowrap", children: [
                    "राहु: ",
                    formatAshtamanshaPartHi(row.r, false),
                    " | यम: ",
                    formatAshtamanshaPartHi(row.y, false),
                    " | गुलिक: ",
                    formatAshtamanshaPartHi(row.g, false)
                  ] })
                ]
              },
              row.w
            );
          }) })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-base sm:text-lg font-extrabold font-vedic text-yellow-300 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "scroll", className: "w-4 h-4 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "10 दिनों का विस्तृत पंचांग (तारीख पर क्लिक कर पूरा विवरण देखें)" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 text-[11px] text-amber-300/80 font-semibold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "प्रत्येक दिन की तिथि, नक्षत्र, मुहूर्त व राहुकाल देखने हेतु टैब खोलें" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-3.5 h-3.5 shrink-0 text-theme-primary", strokeWidth: 1.5 })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2.5", children: tenDayPanchangList.map((dItem, idx) => {
          const dayKey = `${dItem.year}-${dItem.month}-${dItem.day}`;
          const isOpen = expandedTenDayKey === dayKey;
          const isSelectedCard = dItem.year === selectedYear && dItem.month === selectedMonth && dItem.day === selectedDayData.day;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: `rounded-2xl border transition-all overflow-hidden ${isOpen || isSelectedCard ? "bg-gradient-to-br from-amber-950/60 via-slate-900 to-slate-950 border-amber-400/75 shadow-lg" : "bg-slate-950/90 hover:bg-slate-900/90 border-amber-800/45"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    "aria-expanded": isOpen,
                    onClick: () => {
                      safePlayClick();
                      setExpandedTenDayKey((prev) => prev === dayKey ? null : dayKey);
                    },
                    className: "w-full text-left p-3.5 sm:p-4 flex items-center justify-between gap-3 cursor-pointer",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1 space-y-1.5", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm sm:text-base font-extrabold font-vedic text-yellow-300", children: [
                            idx + 1,
                            ". ",
                            dItem.formattedDateHindi,
                            " (",
                            dItem.vaarHindi,
                            ")"
                          ] }),
                          dItem.isToday && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 rounded-md bg-emerald-500 text-slate-950 text-[10px] font-black", children: "आज" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] font-bold px-2.5 py-0.5 rounded-lg bg-amber-500/20 border border-amber-400/40 text-amber-200", children: [
                            dItem.hinduMaas,
                            " • ",
                            dItem.tithiShort,
                            " • ",
                            dItem.paksha
                          ] })
                        ] }),
                        dItem.festivalName && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg bg-emerald-950/80 border border-emerald-500/45 text-emerald-200 text-xs font-bold", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "diya", className: "w-3.5 h-3.5 shrink-0" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "विशेष व्रत / पर्व:" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-yellow-200", children: dItem.festivalName })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-slate-900/90 border border-amber-500/40 text-amber-200 text-[11px] font-extrabold shrink-0", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: isOpen ? "बंद करें" : "पूरा विवरण" }),
                        isOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-4 h-4 text-yellow-300", strokeWidth: 1.5 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-4 h-4 text-amber-300", strokeWidth: 1.5 })
                      ] })
                    ]
                  }
                ),
                isOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-3.5 sm:px-4 pb-4 pt-2.5 border-t border-amber-800/40 space-y-3 animate-fadeIn", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-2 text-[11px] text-amber-300/90 font-semibold", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                      "मास एवं पक्ष: ",
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { className: "text-yellow-200", children: [
                        dItem.hinduMaas,
                        " • ",
                        dItem.paksha
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "button",
                      {
                        type: "button",
                        onClick: () => {
                          handleSelectDay(dItem);
                          const el = document.getElementById("selected-day-panchang-details");
                          if (el) el.scrollIntoView({ behavior: "smooth" });
                        },
                        className: "px-2.5 py-1 rounded-lg bg-amber-500/20 hover:bg-amber-500/35 border border-amber-400/50 text-yellow-200 text-[11px] font-bold inline-flex items-center gap-1 cursor-pointer",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "pin", tone: "inherit", className: "w-3 h-3" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "मुख्य कैलेंडर में यह तिथि चुनें" })
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1.5 text-xs text-slate-200 leading-relaxed list-disc list-inside", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-amber-300", children: "तिथि:" }),
                      " ",
                      dItem.tithiName,
                      " (",
                      dItem.tithiEndTime,
                      ")"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-amber-300", children: "नक्षत्र:" }),
                      " ",
                      dItem.nakshatra,
                      " — ",
                      dItem.nakshatraEndTime
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-amber-300", children: "योग:" }),
                      " ",
                      dItem.yoga,
                      " (",
                      dItem.yogaEndTime,
                      ")"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-amber-300", children: "करण:" }),
                      " ",
                      dItem.karana,
                      " (",
                      dItem.karanaEndTime,
                      ")"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-amber-300", children: "राशि:" }),
                      " चंद्रमा ",
                      dItem.chandraRashi,
                      " | सूर्य: ",
                      dItem.suryaRashi
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-amber-300", children: "सूर्योदय / सूर्यास्त:" }),
                      " ",
                      dItem.sunrise,
                      " / ",
                      dItem.sunset,
                      " | ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-sky-300", children: "चंद्रोदय:" }),
                      " ",
                      dItem.moonrise
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-emerald-300", children: dItem.abhijitMuhurat.includes("मान्य नहीं") ? "अभिजित मुहूर्त:" : "अभिजित मुहूर्त (शुभ):" }),
                      " ",
                      dItem.abhijitMuhurat,
                      " | ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-rose-300", children: "राहुकाल (अशुभ):" }),
                      " ",
                      dItem.rahuKaal
                    ] }),
                    dItem.sarvarthaSiddhiYoga && /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-yellow-300", children: "सर्वार्थ सिद्धि योग:" }),
                      " ",
                      dItem.sarvarthaSiddhiYoga
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-rose-300", children: "यमगण्ड (अशुभ):" }),
                      " ",
                      dItem.yamagandam,
                      " | ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-amber-300", children: "गुलिक काल:" }),
                      " ",
                      dItem.gulikaKaal
                    ] }),
                    dItem.festivalName && /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "text-yellow-200 font-semibold", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-yellow-400", children: "विशेष पर्व / व्रत:" }),
                      " ",
                      dItem.festivalName,
                      " — ",
                      dItem.festivalDescription
                    ] })
                  ] })
                ] })
              ]
            },
            `detail-${dayKey}`
          );
        }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#0e1526] border border-amber-700/40 rounded-3xl p-4 sm:p-6 shadow-xl space-y-4 pj-cv-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-amber-800/40 pb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-lg sm:text-2xl font-extrabold font-vedic text-amber-100 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "diya", className: "w-5 h-5 shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            monthlyData.monthNameHindi,
            " ",
            monthlyData.year,
            " के प्रमुख व्रत, महापर्व एवं एकादशी-पूर्णिमा सूची"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-amber-300/80 mt-0.5", children: "किसी भी पर्व पर क्लिक करके उस दिन का सम्पूर्ण पंचांग, शुभ पूजा मुहूर्त एवं मंत्र ऊपर देखें" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3", children: monthlyData.festivalsInMonth.map((festDay) => {
        const isSelected = festDay.day === selectedDayData.day;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            onClick: () => handleSelectDay(festDay),
            className: `p-3.5 rounded-2xl border transition-all cursor-pointer flex items-start gap-3 ${isSelected ? "bg-gradient-to-r from-amber-900/50 to-red-950/50 border-yellow-400 shadow-lg" : "bg-slate-950/80 hover:bg-slate-900 border-amber-800/40"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-12 h-12 rounded-xl bg-gradient-to-br from-red-900 to-amber-900 border border-amber-400/50 flex flex-col items-center justify-center flex-shrink-0 text-amber-100", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base font-black font-mono leading-none", children: festDay.day }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-bold mt-0.5", children: festDay.vaarShort })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300", children: festDay.tithiShort }),
                  festDay.isToday && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-500 text-slate-950", children: "आज" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs sm:text-sm font-extrabold font-vedic text-yellow-200 mt-1 leading-snug", children: festDay.festivalName }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-slate-400 mt-0.5 line-clamp-1", children: [
                  "आराध्य: ",
                  festDay.festivalDeity
                ] })
              ] })
            ]
          },
          festDay.day
        );
      }) })
    ] })
  ] });
};
export {
  HinduPanchangCalendar
};
