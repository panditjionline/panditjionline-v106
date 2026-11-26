import { r as reactExports, j as jsxRuntimeExports, R as React, a as reactDomExports } from "./vendor-react-CCbeDaYX.js";
import { V as VedicDateInput } from "./VedicDateInput-QzCgtRnr.js";
import { b as useFestiveTheme, E as useAdminOptionsVisibility, c as cleanMobileNumber, a as SacredIcon, v as vedicAudio, F as VedicWhatsAppSvg, T as TIER_1_MULTI_DAY_PRESETS, G as TIER_2_FESTIVAL_CATEGORY_PRESETS, H as TIER_3_MONTHLY_TITHI_PRESETS, I as TIER_4_WEEKDAY_PRESETS, J as buildVisualThemeSnapshot, K as saveAdminFestiveOverride, L as encodeFestiveStateCode, M as useAstroMode, i as getPunyaPoints, N as hasClaimedDailyPunyaToday, Q as getActive100OfferCoupon, P as PanditPortrait, A as APPROXIMATE_BIRTH_TIME_PRESETS, o as POPULAR_BIRTH_PLACES, u as useLanguage, U as useFontScale, W as usePWAInstall, X as SUPPORTED_LANGUAGES, C as verifyUserDobForReset, D as saveNewPasswordForUser, z as loginOrSyncUser, B as persistUserAccountUpdate, w as clearLocalChatCache, x as clearLocalJaapCache, y as clearLocalKundaliCache, p as clearLocalJanamKundaliCache, Z as redeemPunyaFor100Offer } from "./index-AQ5SI3vl.js";
import { U as UserAvatar } from "./UserAvatar-DPD6_vjs.js";
import { a3 as MONTH_CATEGORIES_HI, D as DEFAULT_VEDIC_THEME, J as generateSampurnKundali, O as deriveVedicDetailsForProfile, u as resolveCityCoordinates, z as setActiveProfile, a2 as upsertFamilyMember } from "./panchang-core-24ia-akc.js";
import { getInitialSadhanaState } from "./digitalMandirData-jL0lUuvq.js";
import { a as ADMIN_AUTHORIZED_PHONE, A as AdminGeminiKeyManager } from "./AdminGeminiKeyManager-i8Cju3wN.js";
import { getFestiveLightPalette, triggerFestivePushpVarsha, openFestiveGreetingModal, FestiveHairlineDivider } from "./FestiveLightsJhalar-Bu-YA1w5.js";
import { P as Palette, n as ShieldCheck, F as ArrowRight, al as ChevronDown, ax as ChevronUp, aX as EyeOff, x as Calendar, S as Sparkles, aY as Cloud, G as Globe, a5 as CircleCheck, ah as LoaderCircle, c as Send, X, C as Check, aZ as PenLine, aV as Save, ao as RotateCcw, m as Lock, E as Eye, s as User, u as Phone, a2 as Clock, a1 as MapPin, aq as Moon, aE as Lightbulb, aR as Trash2, aW as LogOut, h as Crown, aP as Key, a_ as Package, a9 as Flame, ad as Landmark, t as MessageCircle, a8 as Compass, ae as HeartHandshake, ay as Telescope, az as Type, f as Award, a$ as Gift, b0 as Ticket, e as Smartphone, D as Download } from "./vendor-icons-Bk5Rg8-9.js";
import "./vendor-pdf-CpPyS1re.js";
import "./seo-core-DnNehtWz.js";
import "./vendor-astronomy-C8JZdkQu.js";
const AdminFestiveThemeManager = ({
  currentUser,
  onNavigateToHome
}) => {
  const {
    activeTheme,
    autoDetectedTheme,
    isFestivalActive,
    isDayThemeActive,
    isDefaultAsIs,
    lightsMode,
    jhalarAnimation,
    toranStyle,
    cornerLadiMode,
    autoPushpVarsha,
    enableGlowingHairline,
    hairlineIntensity,
    hairlineEffect,
    hairlineSpeed,
    showToran,
    sandhyaAutoGlow,
    isSandhyaAartiTime,
    adminOverride,
    updateAdminOverride,
    todayPanchangLabel,
    currentIstMonth,
    allFestivals,
    royalPreset,
    royalEngineEnabled
  } = useFestiveTheme();
  const [selectedRoyalTierTab, setSelectedRoyalTierTab] = reactExports.useState(1);
  const activeLightPalette = reactExports.useMemo(
    () => getFestiveLightPalette(activeTheme),
    [activeTheme]
  );
  const handleSetLightsMode = (nextLightsMode) => {
    updateAdminOverride({
      ...adminOverride,
      lightsMode: nextLightsMode
    });
    triggerToast(
      nextLightsMode === "royal_jhalar" ? "भव्य राजसी स्वर्ण झालर, दीप-लड़ियाँ व स्पेक्ट्रम रेखा सक्रिय!" : nextLightsMode === "diya_mala" ? "अखंड दीप-माला (प्रज्वलित पीतल के लटकते दीपक) सक्रिय!" : nextLightsMode === "temple_bells" ? "स्वर्ण मंदिर घंटी व दिव्य उत्सव झालर सक्रिय!" : nextLightsMode === "crystal_chandeliers" ? "राजसी क्रिस्टल झूमर व हीरक झालर सक्रिय!" : nextLightsMode === "soft_glow" ? "सौम्य उत्सव बल्ब रोशनी व स्पेक्ट्रम रेखा सक्रिय!" : nextLightsMode === "spectrum_line" ? "केवल प्रदीप्त स्पेक्ट्रम लाइट रेखा सक्रिय (बिना बल्ब/झालर के)!" : "सभी उत्सव लाइट्स बंद — केवल थीम रंग सक्रिय रहेंगे।"
    );
  };
  const handleSetJhalarAnimation = (nextAnim) => {
    updateAdminOverride({
      ...adminOverride,
      jhalarAnimation: nextAnim
    });
    triggerToast(
      nextAnim === "running_chase" ? "दौड़ती हुई उत्सव चेज़र लड़ियाँ (Running Wave Chase) सक्रिय!" : nextAnim === "breathing_aarti" ? "शांत संध्या आरती स्पंदन (Breathing Glow) सक्रिय!" : nextAnim === "sparkle_flash" ? "त्वरित उत्सव झिलमिल स्पार्कल फ्लैश सक्रिय!" : nextAnim === "steady" ? "स्थिर अखंड दिव्य ज्योति (बिना ब्लिंक) सक्रिय!" : "जगमग ३-फेज टिमटिमाहट (Classic Twinkle) सक्रिय!"
    );
  };
  const handleSetToranStyle = (nextStyle) => {
    updateAdminOverride({
      ...adminOverride,
      showToran: true,
      toranStyle: nextStyle
    });
    triggerToast(
      nextStyle === "lotus_ashoka" ? "पद्म-कमल पुष्प व अशोक पल्लव वंदनवार लागू!" : nextStyle === "rudraksha_belpatra" ? "शिवप्रिय रुद्राक्ष व त्रिदल बेलपत्र वंदनवार लागू!" : nextStyle === "pearl_swarna" ? "राजसी मोती, कुंदन व स्वर्ण झूमर वंदनवार लागू!" : "पारंपरिक गेंदा पुष्प व आम्र-पल्लव तोरण लागू!"
    );
  };
  const handleSetCornerLadiMode = (nextLadi) => {
    updateAdminOverride({
      ...adminOverride,
      cornerLadiMode: nextLadi
    });
    triggerToast(
      nextLadi === "grand_curtain" ? "भव्य मंदिर द्वार डबल-ट्रिपल लटकती लड़ियाँ (Grand Curtain) सक्रिय!" : nextLadi === "off" ? "कोनों की लटकती लड़ियाँ बंद की गईं।" : "मानक कोनों की लटकती दीप-लड़ियाँ सक्रिय!"
    );
  };
  const handleToggleAutoPushpVarsha = () => {
    const nextVal = !autoPushpVarsha;
    updateAdminOverride({
      ...adminOverride,
      autoPushpVarsha: nextVal
    });
    if (nextVal) {
      triggerFestivePushpVarsha();
    }
    triggerToast(
      nextVal ? "स्वागत पुष्प-वर्षा चालू: ऐप खुलते ही भक्तों पर पुष्प-वर्षा होगी!" : "ऑटो स्वागत पुष्प-वर्षा बंद की गई।"
    );
  };
  const handleToggleGlowingHairline = () => {
    const nextHairline = adminOverride.enableGlowingHairline === false;
    updateAdminOverride({
      ...adminOverride,
      enableGlowingHairline: nextHairline
    });
    triggerToast(
      nextHairline ? "प्रदीप्त स्पेक्ट्रम लाइट रेखा (हेडर, कार्ड व बॉटम-नैव) सक्रिय!" : "प्रदीप्त स्पेक्ट्रम लाइट रेखा बंद की गई।"
    );
  };
  const handleToggleToran = () => {
    const nextToran = adminOverride.showToran === false;
    updateAdminOverride({
      ...adminOverride,
      showToran: nextToran
    });
    triggerToast(
      nextToran ? `पर्व-विशेष वंदनवार (${activeLightPalette.toranLabelHi}) सक्रिय!` : "हेडर वंदनवार (तोरण) बंद किया गया।"
    );
  };
  const handleToggleSandhyaAutoGlow = () => {
    const nextSandhya = adminOverride.sandhyaAutoGlow === false;
    updateAdminOverride({
      ...adminOverride,
      sandhyaAutoGlow: nextSandhya
    });
    triggerToast(
      nextSandhya ? "गोधूलि संध्या आरती ऑटो-दीप प्रज्वलन मोड सक्रिय!" : "संध्या आरती ऑटो-दीप मोड बंद किया गया।"
    );
  };
  const handleSetHairlineIntensity = (intensity) => {
    updateAdminOverride({
      ...adminOverride,
      hairlineIntensity: intensity
    });
    triggerToast(
      intensity === "bold" ? "प्रदीप्त स्पेक्ट्रम रेखा: भव्य लेज़र चमक (4.0px) सेट की गई!" : intensity === "slim" ? "प्रदीप्त स्पेक्ट्रम रेखा: स्लिम व सौम्य (1.5px) सेट की गई!" : "प्रदीप्त स्पेक्ट्रम रेखा: मानक संतुलित (2.5px) सेट की गई!"
    );
  };
  const handleSetHairlineEffect = (effect) => {
    updateAdminOverride({
      ...adminOverride,
      hairlineEffect: effect
    });
    triggerToast(
      effect === "rainbow" ? "सतरंगी इंद्रधनुष स्पेक्ट्रम इफेक्ट सक्रिय!" : effect === "festival" ? "पर्व-विशेष देव रंग स्पेक्ट्रम इफेक्ट सक्रिय!" : effect === "golden" ? "स्वर्ण ज्योति वैदिक वेव इफेक्ट सक्रिय!" : effect === "aurora_agni" ? "अग्नि-सूर्य कुंडलिनी तेज तरंग इफेक्ट सक्रिय!" : effect === "neelkanth_peacock" ? "मयूर-नीलकंठ आभा स्पेक्ट्रम इफेक्ट सक्रिय!" : "लेज़र पल्स स्पेक्ट्रम इफेक्ट सक्रिय!"
    );
  };
  const handleSetHairlineSpeed = (speed) => {
    updateAdminOverride({
      ...adminOverride,
      hairlineSpeed: speed
    });
    triggerToast(
      speed === "slow" ? "स्पेक्ट्रम प्रवाह गति: मंद (12s) सेट की गई!" : speed === "fast" ? "स्पेक्ट्रम प्रवाह गति: त्वरित (3.5s) सेट की गई!" : "स्पेक्ट्रम प्रवाह गति: सामान्य (7s) सेट की गई!"
    );
  };
  const { visibility, updateVisibility } = useAdminOptionsVisibility();
  const [selectedMonthFilter, setSelectedMonthFilter] = reactExports.useState(
    () => currentIstMonth >= 1 && currentIstMonth <= 12 ? currentIstMonth : 1
  );
  const [isBodyCollapsed, setIsBodyCollapsed] = reactExports.useState(false);
  const [customBadgeInput, setCustomBadgeInput] = reactExports.useState(adminOverride.customBadgeHi || "");
  const [customGreetingInput, setCustomGreetingInput] = reactExports.useState(
    adminOverride.customGreetingHi || ""
  );
  const [customSubtitleInput, setCustomSubtitleInput] = reactExports.useState(
    adminOverride.customSubtitleHi || ""
  );
  const [showCustomEditor, setShowCustomEditor] = reactExports.useState(false);
  const [saveToast, setSaveToast] = reactExports.useState(null);
  const [isPublishing, setIsPublishing] = reactExports.useState(false);
  const [lastPublishedTime, setLastPublishedTime] = reactExports.useState(() => {
    try {
      const stored = localStorage.getItem("panditji_last_published_festive_time");
      if (stored) return stored;
      if (adminOverride.updatedAt) {
        return new Date(adminOverride.updatedAt).toLocaleTimeString("hi-IN", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true
        });
      }
    } catch {
    }
    return null;
  });
  const [publishSuccessMessage, setPublishSuccessMessage] = reactExports.useState(null);
  const lightsModeLabel = reactExports.useMemo(() => {
    switch (lightsMode) {
      case "royal_jhalar":
        return "भव्य राजसी झालर व दीप-लड़ियाँ (Royal Jhalar)";
      case "diya_mala":
        return "अखंड दीप-माला (Hanging Brass Diyas)";
      case "temple_bells":
        return "स्वर्ण मंदिर घंटी झालर (Temple Bells)";
      case "crystal_chandeliers":
        return "राजसी क्रिस्टल झूमर (Crystal Chandeliers)";
      case "soft_glow":
        return "सौम्य उत्सव बल्ब रोशनी (Soft Lights)";
      case "spectrum_line":
        return "केवल प्रदीप्त स्पेक्ट्रम लाइट रेखा (Spectrum Line)";
      case "off":
        return "सभी उत्सव लाइट्स बंद (Off)";
      default:
        return "भव्य राजसी झालर";
    }
  }, [lightsMode]);
  const handlePublishToServer = async () => {
    if (isPublishing) return;
    setIsPublishing(true);
    setPublishSuccessMessage(null);
    try {
      const ts = Date.now();
      const snap = buildVisualThemeSnapshot(
        activeTheme,
        ts,
        lightsMode,
        adminOverride.showToran !== false,
        jhalarAnimation,
        toranStyle,
        cornerLadiMode
      );
      const payload = {
        ...adminOverride,
        customBadgeHi: customBadgeInput.trim(),
        customGreetingHi: customGreetingInput.trim(),
        customSubtitleHi: customSubtitleInput.trim(),
        updatedAt: ts
      };
      const saved = saveAdminFestiveOverride({ ...payload, themeSnapshot: snap }, false);
      updateAdminOverride(saved);
      window.__pjLastAdminLocalActionAt = Date.now();
      const stateCode = saved.syncCode || encodeFestiveStateCode(payload);
      const finalPayload = {
        ...payload,
        syncCode: stateCode,
        adminBy: ADMIN_AUTHORIZED_PHONE,
        adminPhone: ADMIN_AUTHORIZED_PHONE
      };
      const fetchWithTimeout = (url, options, timeoutMs = 8e3) => {
        const ctrl = typeof AbortController !== "undefined" ? new AbortController() : null;
        const timer = ctrl ? window.setTimeout(() => ctrl.abort(), timeoutMs) : null;
        return fetch(url, {
          ...options,
          signal: ctrl ? ctrl.signal : void 0
        }).finally(() => {
          if (timer) window.clearTimeout(timer);
        });
      };
      const apiRes = await fetchWithTimeout(
        "/api/festive-theme",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "x-admin-phone": ADMIN_AUTHORIZED_PHONE
          },
          body: JSON.stringify(finalPayload)
        },
        8e3
      );
      let apiJson = null;
      try {
        apiJson = await apiRes.json();
      } catch {
        apiJson = null;
      }
      if (!apiRes.ok || apiJson && apiJson.ok === false) {
        const errMsg = apiJson && apiJson.message || `सर्वर सेव विफल रहा (HTTP ${apiRes.status})। कृपया Vercel में GITHUB_FESTIVE_TOKEN और GITHUB_FESTIVE_REPO जांचें।`;
        triggerToast(errMsg);
        return;
      }
      if (apiJson?.config?.updatedAt) {
        saveAdminFestiveOverride(
          { ...payload, updatedAt: Number(apiJson.config.updatedAt), syncCode: stateCode },
          false
        );
      }
      const persistedTo = apiJson?.persistedTo || (apiJson?.savedToGitHub ? "github" : "server");
      const timeStr = new Date(ts).toLocaleTimeString("hi-IN", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
      });
      const formattedTimestamp = `आज, ${timeStr} (IST)`;
      setLastPublishedTime(formattedTimestamp);
      try {
        localStorage.setItem("panditji_last_published_festive_time", formattedTimestamp);
      } catch {
      }
      const storageNote = persistedTo === "github" ? "GitHub रिपॉजिटरी पर स्थायी रूप से सेव हो गई हैं (कभी एक्सपायर नहीं होंगी)!" : "सर्वर पर सेव व लाइव सिंक हो गई हैं (स्थायी GitHub सेव हेतु Vercel में GITHUB_FESTIVE_TOKEN + GITHUB_FESTIVE_REPO जोड़ें)।";
      setPublishSuccessMessage(
        `बधाई! १२-माह सनातन पर्व थीम इंजन की सेटिंग्स (${activeTheme.nameHi} • ${lightsModeLabel}) ${storageNote}`
      );
      try {
        vedicAudio.playTempleBell(0.85);
      } catch {
      }
      triggerToast(
        persistedTo === "github" ? "थीम GitHub पर स्थायी रूप से सेव हो गई — सभी यूज़र्स के लिए तुरंत लाइव!" : "थीम सर्वर पर सबमिट हो गई एवं सभी यूज़र्स के लिए सक्रिय है!"
      );
    } catch (err) {
      console.error("Publish theme error:", err);
      triggerToast("सर्वर सबमिशन में त्रुटि आई, कृपया पुनः प्रयास करें।");
    } finally {
      setIsPublishing(false);
    }
  };
  reactExports.useEffect(() => {
    setCustomBadgeInput(adminOverride.customBadgeHi || "");
    setCustomGreetingInput(adminOverride.customGreetingHi || "");
    setCustomSubtitleInput(adminOverride.customSubtitleHi || "");
  }, [
    adminOverride.customBadgeHi,
    adminOverride.customGreetingHi,
    adminOverride.customSubtitleHi
  ]);
  const triggerToast = (msg) => {
    setSaveToast(msg);
    window.setTimeout(() => {
      setSaveToast((prev) => prev === msg ? null : prev);
    }, 2800);
  };
  const handleSetAutoMode = () => {
    updateAdminOverride({
      ...adminOverride,
      mode: "auto",
      manualFestivalId: null,
      enableDayOfWeekTheme: adminOverride.enableDayOfWeekTheme !== false,
      customBadgeHi: customBadgeInput,
      customGreetingHi: customGreetingInput,
      customSubtitleHi: customSubtitleInput
    });
    triggerToast(
      `स्वचालित वैदिक पंचांग व ७ वार मोड सक्रिय! (${autoDetectedTheme.nameHi})`
    );
  };
  const handleSetDefaultAsIsMode = () => {
    updateAdminOverride({
      ...adminOverride,
      mode: "default_as_is",
      enableDayOfWeekTheme: false,
      customBadgeHi: "",
      customGreetingHi: "",
      customSubtitleHi: ""
    });
    triggerToast(
      "मूल वैदिक स्वरूप सक्रिय! ऐप अपनी मूल स्वर्ण-राजसी थीम में लॉक हो गया (कोई पर्व/वार बदलाव नहीं)।"
    );
  };
  const handleToggleDayOfWeekTheme = () => {
    const nextState = adminOverride.enableDayOfWeekTheme === false;
    updateAdminOverride({
      ...adminOverride,
      enableDayOfWeekTheme: nextState
    });
    triggerToast(
      nextState ? "७ वार (दिन अनुसार) नित्य थीम सक्रिय की गई!" : "७ वार नित्य थीम बंद: गैर-पर्व दिनों में मूल वैदिक थीम रहेगी।"
    );
  };
  const handleSelectManualFestival = (fest) => {
    const nextLights = !adminOverride.lightsMode || adminOverride.lightsMode === "off" || adminOverride.lightsMode === "spectrum_line" ? "royal_jhalar" : adminOverride.lightsMode;
    updateAdminOverride({
      ...adminOverride,
      mode: "manual",
      manualFestivalId: fest.id,
      lightsMode: nextLights,
      enableDayOfWeekTheme: adminOverride.enableDayOfWeekTheme !== false,
      customBadgeHi: customBadgeInput,
      customGreetingHi: customGreetingInput,
      customSubtitleHi: customSubtitleInput
    });
    triggerToast(`एडमिन थीम व उत्सव झालर लागू: ${fest.nameHi}`);
  };
  const handleToggleRoyalEngine = () => {
    const nextEnabled = !royalEngineEnabled;
    updateAdminOverride({
      ...adminOverride,
      royalEngineEnabled: nextEnabled
    });
    triggerToast(
      nextEnabled ? "३६५-दिवसीय पंचांग-सिंक Modern-Royal UI व डायनामिक स्पेक्ट्रम लाइन इंजन चालू (ON)!" : "३६५-दिवसीय Modern-Royal UI इंजन बंद (OFF) — मूल क्लॉज़िक मोड लागू।"
    );
  };
  const handleSetRoyalAutoPanchangSynced = () => {
    updateAdminOverride({
      ...adminOverride,
      mode: "auto",
      royalEngineEnabled: true,
      enableDayOfWeekTheme: true,
      royalManualPresetId: null,
      manualFestivalId: null
    });
    triggerToast("४-टियर पंचांग-सिंक ऑटोमैटिक मोड (Tier 1 > Tier 2 > Tier 3 > Tier 4) सक्रिय!");
  };
  const handleSelectRoyalPresetOverride = (preset) => {
    updateAdminOverride({
      ...adminOverride,
      mode: "manual",
      royalEngineEnabled: true,
      royalManualPresetId: preset.id,
      enableGlowingHairline: true,
      hairlineEffect: "festival"
    });
    triggerToast(`४-टियर रॉयल थीम लॉक लागू: ${preset.nameHi} (${preset.tierBadgeHi})`);
  };
  const handleSaveCustomText = (e) => {
    e.preventDefault();
    updateAdminOverride({
      ...adminOverride,
      customBadgeHi: customBadgeInput.trim(),
      customGreetingHi: customGreetingInput.trim(),
      customSubtitleHi: customSubtitleInput.trim()
    });
    triggerToast("कस्टम एडमिन पर्व संदेश पूरे वेबऐप पर लागू हो गया!");
  };
  const handleClearCustomText = () => {
    setCustomBadgeInput("");
    setCustomGreetingInput("");
    setCustomSubtitleInput("");
    updateAdminOverride({
      ...adminOverride,
      customBadgeHi: "",
      customGreetingHi: "",
      customSubtitleHi: ""
    });
    triggerToast("शास्त्रोक्त डिफ़ॉल्ट पर्व संदेश पुनः स्थापित किया गया।");
  };
  const deepotsavIds = /* @__PURE__ */ new Set([
    "dhanteras",
    "choti-diwali",
    "badi-diwali",
    "govardhan-puja",
    "bhai-dooj"
  ]);
  const holiIds = /* @__PURE__ */ new Set(["choti-holi", "badi-holi"]);
  const deepotsavFestivals = allFestivals.filter((f) => deepotsavIds.has(f.id));
  const holiFestivals = allFestivals.filter((f) => holiIds.has(f.id));
  const monthFilteredFestivals = reactExports.useMemo(() => {
    if (selectedMonthFilter === "all") {
      return allFestivals;
    }
    return allFestivals.filter((f) => f.monthNumber === selectedMonthFilter);
  }, [allFestivals, selectedMonthFilter]);
  const activeMonthMeta = reactExports.useMemo(() => {
    if (selectedMonthFilter === "all") return null;
    return MONTH_CATEGORIES_HI.find((m) => m.month === selectedMonthFilter) || null;
  }, [selectedMonthFilter]);
  const isAdmin = Boolean(currentUser?.phone) && cleanMobileNumber(currentUser.phone) === ADMIN_AUTHORIZED_PHONE;
  if (!isAdmin || !visibility.masterVisible || !visibility.showFestiveEngine) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-[#1f0d29] via-[#1a0f07] to-[#0d1322] border-2 border-amber-400/65 shadow-[0_10px_35px_rgba(245,158,11,0.18)] space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-2 border-b border-amber-500/30 pb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 via-orange-500 to-rose-500 flex items-center justify-center text-stone-950 shadow-md shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Palette, { className: "w-5 h-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 flex-wrap", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm sm:text-base font-black text-yellow-300 font-vedic", children: "१२-माह सनातन पर्व थीम इंजन (12-Month Festive Engine)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-400/50 text-emerald-300 text-[10px] font-extrabold", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-3 h-3" }),
              " केवल एडमिन (8958499979)"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-amber-200/80 mt-0.5", children: "जनवरी से दिसंबर (१२ महीनों) के सभी सनातन पर्व, मासिक एकादशी/प्रदोष, ५-दिवसीय दीपोत्सव व २-दिवसीय होली नियंत्रण" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 flex-wrap", children: [
        onNavigateToHome && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: onNavigateToHome,
            className: "inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 text-stone-950 font-extrabold text-[11px] shadow-md transition-all cursor-pointer",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "मुख्य पृष्ठ पर देखें" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3.5 h-3.5" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setIsBodyCollapsed((prev) => !prev),
            className: "inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-amber-500/40 text-amber-200 font-bold text-[11px] cursor-pointer",
            title: isBodyCollapsed ? "पैनल विस्तारित करें" : "पैनल संक्षिप्त करें",
            children: isBodyCollapsed ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-3.5 h-3.5 text-yellow-300" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "खोलें" })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-3.5 h-3.5 text-yellow-300" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "संक्षिप्त" })
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => updateVisibility({ showFestiveEngine: false }),
            className: "inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-rose-950/80 hover:bg-rose-900 border border-rose-500/40 text-rose-200 font-bold text-[11px] cursor-pointer",
            title: "इस पर्व थीम इंजन पैनल को छुपाएं (ऊपर एडमिन कंट्रोल बार से कभी भी वापस दिखाएं)",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "w-3.5 h-3.5 text-rose-300" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "छुपाएं (Hide)" })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-2.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 rounded-xl bg-slate-950/85 border border-amber-500/35 flex items-center justify-between gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-bold text-amber-400 uppercase flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-3 h-3 shrink-0" }),
          " आज की पंचांग स्थिति (Auto Detection):"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-extrabold text-amber-100 block break-words leading-snug mt-0.5", children: todayPanchangLabel }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] text-emerald-300 font-semibold inline-flex items-center gap-1.5 flex-wrap leading-snug mt-0.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "पंचांग अनुसार थीम:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: autoDetectedTheme.deityIcon, className: "w-3.5 h-3.5 text-emerald-300 shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: autoDetectedTheme.nameHi })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: `p-3 rounded-xl border flex items-center justify-between gap-2 ${activeTheme.bannerBgClass} ${activeTheme.bannerBorderClass}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-bold text-yellow-200 uppercase flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3 h-3 shrink-0", strokeWidth: 1.5 }),
                " वर्तमान में ऐप पर सक्रिय थीम:"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs sm:text-sm font-black text-white flex items-center gap-1.5 break-words leading-snug mt-0.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: activeTheme.deityIcon, className: "w-4 h-4 text-theme-primary shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: activeTheme.nameHi })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] text-amber-100/90 font-bold flex items-center gap-1.5 leading-snug mt-0.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "मोड:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  SacredIcon,
                  {
                    name: adminOverride.mode === "auto" ? "zap" : adminOverride.mode === "default_as_is" ? "om" : "crown",
                    className: "w-3 h-3 text-theme-primary shrink-0"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: adminOverride.mode === "auto" ? "ऑटोमैटिक (पर्व / ७ वार थीम)" : adminOverride.mode === "default_as_is" ? "मूल वैदिक स्वरूप (As-Is / कोई बदलाव नहीं)" : "एडमिन मैन्युअल ओवरराइड मोड" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-end gap-1 shrink-0", children: [
              isFestivalActive && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 rounded-md bg-black/50 border border-yellow-300/60 text-yellow-200 text-[10px] font-black", children: "LIVE उत्सव" }),
              isDayThemeActive && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 rounded-md bg-black/50 border border-cyan-300/60 text-cyan-200 text-[10px] font-black", children: "७ वार थीम" }),
              isDefaultAsIs && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 rounded-md bg-black/50 border border-amber-300/60 text-amber-200 text-[10px] font-black", children: "मूल स्वरूप" })
            ] })
          ]
        }
      )
    ] }),
    !isDefaultAsIs && activeTheme.sacredMantra && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 sm:p-3 rounded-xl bg-black/45 border border-amber-500/35 flex flex-col sm:flex-row sm:items-center justify-between gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-extrabold text-yellow-300 uppercase flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "lotus", className: "w-3 h-3 text-theme-primary shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "सक्रिय पर्व/वार सिद्ध मंत्र (मंदिर व १०८ जप माला पर स्वतः सिंक):" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-black font-vedic text-amber-100 block break-words leading-relaxed mt-0.5", children: [
          "“",
          activeTheme.sacredMantra,
          "”"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-1.5 shrink-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => {
              vedicAudio.playCrispTempleBell(0.75);
              vedicAudio.toggleSpeakText(
                `${activeTheme.nameHi}। ${activeTheme.bannerGreetingHi}। विशेष सिद्ध मंत्र: ${activeTheme.sacredMantra}`,
                "admin-festive-mantra-test"
              );
            },
            className: "inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/35 border border-amber-400/50 text-yellow-200 text-[11px] font-extrabold cursor-pointer",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "volume", className: "w-3.5 h-3.5 text-theme-primary" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "मंत्र ध्वनि सुनें" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => {
              vedicAudio.playCrispTempleBell(0.75);
              triggerFestivePushpVarsha();
            },
            className: "inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-amber-500/25 hover:bg-amber-500/40 border border-yellow-300/60 text-yellow-200 text-[11px] font-extrabold cursor-pointer",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "lotus", className: "w-3.5 h-3.5 text-theme-primary" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "पुष्प-वर्षा" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => openFestiveGreetingModal(),
            className: "inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-gradient-to-r from-amber-400 to-yellow-300 hover:from-amber-300 hover:to-yellow-200 text-stone-950 text-[11px] font-black cursor-pointer shadow-xs",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "palette", tone: "inherit", className: "w-3.5 h-3.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "पर्व कार्ड बनाएं" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => {
              const post = `https://www.panditjionline.online

॥ *${activeTheme.nameHi}* ॥

${activeTheme.bannerGreetingHi}
*विशेष सिद्ध मंत्र:* “${activeTheme.sacredMantra}”
${activeTheme.bannerSubtitleHi}

डिजिटल मंदिर दर्शन, पंचांग व राशिफल देखें:
https://www.panditjionline.online`;
              window.open(
                `https://api.whatsapp.com/send?text=${encodeURIComponent(post)}`,
                "_blank",
                "noopener,noreferrer"
              );
            },
            className: "inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#16A34A] hover:bg-[#15803D] text-white text-[11px] font-extrabold cursor-pointer shadow-xs",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(VedicWhatsAppSvg, { className: "w-3.5 h-3.5 shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "पर्व पोस्ट शेयर करें" })
            ]
          }
        )
      ] })
    ] }),
    !isBodyCollapsed && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-[#2a0e05] via-[#381507] to-[#1a0803] border-2 border-yellow-400 shadow-[0_0_35px_rgba(245,158,11,0.35)] relative overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-500 animate-pulse" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "px-2.5 py-0.5 rounded-full bg-yellow-400 text-stone-950 text-[11px] font-black uppercase tracking-wider flex items-center gap-1 shadow-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Cloud, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "सर्वोच्च एडमिन सर्वर सबमिशन" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-400/60 text-emerald-300 text-[11px] font-extrabold", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "लाइव सर्वर सिंक सक्रिय" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base sm:text-lg font-black text-yellow-300 font-vedic leading-snug", children: "सर्वर पर सबमिट करें एवं सभी यूज़र्स के लिए तत्काल लागू करें" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-amber-100/95 leading-relaxed", children: [
              "इस बटन को दबाते ही आपकी चयनित थीम (",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-yellow-200 font-black", children: activeTheme.nameHi }),
              ") एवं लाइट्स मोड (",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-yellow-200 font-black", children: lightsModeLabel }),
              ") सीधे सर्वर व क्लाउड डेटाबेस पर पब्लिश हो जाएंगे, जिससे देश-विदेश के ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "सभी यूज़र्स, आगंतुकों व यजमानों" }),
              " को यह हूबहू दिखने लगेगी।"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-x-4 gap-y-1 pt-1 text-[11px] text-amber-200/80", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "w-3.5 h-3.5 text-cyan-300", strokeWidth: 1.5 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "सभी डिवाइसेस पर तत्काल प्रसारण (Real-Time Broadcast)" })
              ] }),
              lastPublishedTime && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 text-emerald-300 font-bold", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3.5 h-3.5", strokeWidth: 1.5 }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  "अंतिम सबमिट: ",
                  lastPublishedTime
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "shrink-0 flex flex-col sm:flex-row lg:flex-col items-stretch sm:items-center lg:items-end gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: handlePublishToServer,
                disabled: isPublishing,
                className: "w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-500 hover:from-yellow-300 hover:to-orange-400 text-stone-950 font-black text-sm sm:text-base shadow-[0_10px_30px_rgba(245,158,11,0.55)] hover:shadow-[0_12px_40px_rgba(245,158,11,0.8)] transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer transition-all flex items-center justify-center gap-2.5 disabled:opacity-75 disabled:cursor-not-allowed ring-2 ring-yellow-300/80",
                children: isPublishing ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-5 h-5 animate-spin text-stone-950", strokeWidth: 1.5 }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "सर्वर पर सबमिट हो रहा है..." })
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "w-5 h-5 text-stone-950", strokeWidth: 1.5 }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "सबमिट करें एवं सभी यूज़र्स के लिए लागू करें" })
                ] })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-center lg:justify-end gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: "/api/raw-download/admin-control.js",
                  download: "admin-control.js",
                  className: "px-3 py-1.5 rounded-lg bg-emerald-950/90 hover:bg-emerald-900 border border-emerald-400/60 text-emerald-200 font-extrabold text-[11px] flex items-center gap-1.5 transition-all cursor-pointer shadow-sm",
                  title: "फाइल #20 (admin-control.js) को लाइव सेव की गई थीम और 12 Keys के साथ सीधे डाउनलोड करें",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "download", className: "w-3.5 h-3.5 text-emerald-300 shrink-0" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "#20 admin-control.js डाउनलोड करें" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 text-[10px] text-amber-300/80 text-center lg:text-right font-medium", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "zap", className: "w-3 h-3 text-theme-primary shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "१-क्लिक में पूरे सर्वर, Firebase RTDB व GitHub के लिए पब्लिश" })
              ] })
            ] })
          ] })
        ] }),
        publishSuccessMessage && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 p-3 sm:p-3.5 rounded-xl bg-emerald-950/90 border-2 border-emerald-400 text-emerald-100 flex items-start justify-between gap-3 shadow-[0_0_20px_rgba(16,185,129,0.35)] animate-fadeIn", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-5 h-5 text-emerald-400 shrink-0 mt-0.5", strokeWidth: 1.5 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs sm:text-sm font-bold leading-relaxed", children: publishSuccessMessage })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setPublishSuccessMessage(null),
              className: "text-emerald-300 hover:text-white p-1 rounded-md bg-emerald-900/60 cursor-pointer shrink-0 inline-flex items-center justify-center",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3.5 h-3.5", strokeWidth: 1.5 })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3.5 sm:p-4 rounded-2xl bg-slate-950/90 border-2 border-amber-400/60 space-y-3 shadow-[0_6px_28px_rgba(245,158,11,0.16)]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 border-b border-amber-500/30 pb-2.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-0.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs sm:text-sm font-black text-yellow-300 font-vedic flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "crown", className: "w-4 h-4 text-theme-primary shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "३६५-दिवसीय पंचांग-सिंक Modern-Royal UI एवं डायनामिक स्पेक्ट्रम लाइन इंजन" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 rounded-full bg-amber-500/20 border border-amber-400/50 text-amber-200 text-[10px] font-extrabold", children: "4-Tier Priority (2026–2027+ Self-Updating)" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-amber-200/80", children: [
              "दैनिक पंचांग तिथि, पक्ष, मास, अधिक मास, पर्व व ७ वार के अनुसार ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "text-yellow-300", children: ":root" }),
              " Dark-Luxury Hex पैलेट, स्पेक्ट्रम लाइन व ११०+ वैदिक इमेज कार्ड्स का सीधा नियंत्रण"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: handleToggleRoyalEngine,
              className: `px-3.5 py-2 rounded-xl border font-black text-xs transition-all cursor-pointer shrink-0 flex items-center gap-2 ${royalEngineEnabled ? "bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 text-stone-950 border-emerald-200 shadow-[0_0_16px_rgba(16,185,129,0.45)]" : "bg-slate-900 border-rose-500/50 text-rose-200 hover:border-rose-400"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `w-2.5 h-2.5 rounded-full ${royalEngineEnabled ? "bg-stone-950 animate-pulse" : "bg-rose-400"}` }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: royalEngineEnabled ? "मास्टर इंजन: चालू (ON)" : "मास्टर इंजन: बंद (OFF)" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 sm:p-3 rounded-xl bg-black/55 border border-amber-500/35 space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 rounded-md bg-amber-500/20 border border-amber-400/50 text-yellow-300 text-[10px] font-black", children: royalPreset.tierBadgeHi }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-black text-white inline-flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: royalPreset.deityIcon, className: "w-3.5 h-3.5 text-theme-primary shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: royalPreset.nameHi })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] text-amber-200/75", children: [
                "(",
                royalPreset.nameEn,
                ")"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 text-[10px] font-mono text-amber-100", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-900 border border-white/15", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-3 h-3 rounded-xs border border-white/30", style: { backgroundColor: royalPreset.bgBase } }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  "bgBase: ",
                  royalPreset.bgBase
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-900 border border-white/15", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-3 h-3 rounded-xs border border-white/30", style: { backgroundColor: royalPreset.cardSurface } }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  "cardSurface: ",
                  royalPreset.cardSurface
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-900 border border-white/15", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-3 h-3 rounded-xs border border-white/30", style: { backgroundColor: royalPreset.accentPrimary } }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  "accentPrimary: ",
                  royalPreset.accentPrimary
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-900 border border-white/15", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-3 h-3 rounded-xs border border-white/30", style: { backgroundColor: royalPreset.accentSecondary } }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  "accentSecondary: ",
                  royalPreset.accentSecondary
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "w-full h-[2px] rounded-full",
              style: {
                background: `linear-gradient(90deg, transparent 0%, ${royalPreset.accentSecondary} 25%, ${royalPreset.accentPrimary} 50%, ${royalPreset.accentSecondary} 75%, transparent 100%)`,
                boxShadow: `0 0 12px ${royalPreset.accentPrimary}`
              }
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] font-extrabold text-amber-200 inline-flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "settings", className: "w-3.5 h-3.5 text-theme-primary shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "४-टियर मोड चयन (Auto Panchang-Synced बनाम Manual Tier Override):" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: handleSetRoyalAutoPanchangSynced,
                  className: `inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-[11px] font-black border transition-all cursor-pointer ${adminOverride.mode === "auto" && !adminOverride.royalManualPresetId ? "bg-gradient-to-r from-amber-400 to-yellow-300 text-stone-950 border-yellow-200 shadow-sm" : "bg-slate-900 text-amber-200 border-amber-500/40 hover:border-amber-300"}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "zap", tone: "inherit", className: "w-3.5 h-3.5 shrink-0" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Auto Panchang-Synced (स्वतः पंचांग अनुसार)" })
                  ]
                }
              ),
              [
                { tier: 1, label: "Tier 1: बहु-दिवसीय महापर्व (20)" },
                { tier: 2, label: "Tier 2: देव/पर्व श्रेणियाँ (6)" },
                { tier: 3, label: "Tier 3: एकादशी/प्रदोष/पूर्णिमा/अमावस्या (4)" },
                { tier: 4, label: "Tier 4: ७ हिन्दू वार (7)" }
              ].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setSelectedRoyalTierTab(t.tier),
                  className: `px-2.5 py-1.5 rounded-lg text-[11px] font-extrabold border transition-all cursor-pointer ${selectedRoyalTierTab === t.tier ? "bg-amber-500/25 border-amber-300 text-yellow-200" : "bg-slate-900/90 border-slate-700 text-amber-200/75 hover:border-amber-500/40"}`,
                  children: t.label
                },
                t.tier
              ))
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 max-h-56 overflow-y-auto pr-1 scrollbar-thin", children: (selectedRoyalTierTab === 1 ? TIER_1_MULTI_DAY_PRESETS : selectedRoyalTierTab === 2 ? TIER_2_FESTIVAL_CATEGORY_PRESETS : selectedRoyalTierTab === 3 ? TIER_3_MONTHLY_TITHI_PRESETS : Object.values(TIER_4_WEEKDAY_PRESETS)).map((preset) => {
            const isLocked = adminOverride.mode === "manual" && adminOverride.royalManualPresetId === preset.id;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => handleSelectRoyalPresetOverride(preset),
                style: {
                  backgroundColor: preset.cardSurface,
                  borderColor: isLocked ? preset.accentPrimary : "rgba(255,255,255,0.14)"
                },
                className: `p-2.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-1.5 hover:scale-[1.01] ${isLocked ? "ring-2 ring-yellow-300 shadow-md" : ""}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-black text-white leading-snug inline-flex items-start gap-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: preset.deityIcon, className: "w-3.5 h-3.5 text-theme-primary shrink-0 mt-0.5" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: preset.nameHi })
                    ] }),
                    isLocked && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-1.5 py-0.5 rounded bg-yellow-400 text-stone-950 text-[9px] font-black shrink-0", children: "LOCKED" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-1 pt-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "text-[10px] font-bold truncate",
                        style: { color: preset.accentPrimary },
                        children: preset.tierBadgeHi
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 shrink-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "w-3 h-3 rounded-full border border-white/40",
                          style: { backgroundColor: preset.bgBase },
                          title: `bgBase: ${preset.bgBase}`
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "w-3 h-3 rounded-full border border-white/40",
                          style: { backgroundColor: preset.accentPrimary },
                          title: `accentPrimary: ${preset.accentPrimary}`
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "w-3 h-3 rounded-full border border-white/40",
                          style: { backgroundColor: preset.accentSecondary },
                          title: `accentSecondary: ${preset.accentSecondary}`
                        }
                      )
                    ] })
                  ] })
                ]
              },
              preset.id
            );
          }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] font-bold text-amber-300/90 flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "settings", className: "w-3.5 h-3.5 text-theme-primary shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "थीम संचालन मोड चुनें (3 विकल्प):" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: handleSetAutoMode,
              className: `p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-1.5 ${adminOverride.mode === "auto" ? "bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-400 text-stone-950 border-emerald-200 shadow-[0_0_20px_rgba(16,185,129,0.4)] font-black ring-2 ring-emerald-300/60" : "bg-slate-950/90 border-amber-800/50 text-amber-100 hover:border-emerald-400/60 font-bold"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs sm:text-sm font-extrabold flex items-center gap-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "zap", tone: "inherit", className: "w-4 h-4 shrink-0" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "१. ऑटोमैटिक मोड" })
                  ] }),
                  adminOverride.mode === "auto" && /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 shrink-0 text-stone-950", strokeWidth: 1.5 })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: `text-[10px] leading-relaxed ${adminOverride.mode === "auto" ? "text-stone-900 font-bold" : "text-amber-300/70"}`,
                    children: "पर्व हो तो पर्व, नहीं तो आज के दिन (वार) अनुसार थीम स्वतः बदलेगी।"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: handleSetDefaultAsIsMode,
              className: `p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-1.5 ${adminOverride.mode === "default_as_is" ? "bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 text-stone-950 border-yellow-200 shadow-[0_0_20px_rgba(251,191,36,0.45)] font-black ring-2 ring-yellow-300/60" : "bg-slate-950/90 border-amber-800/50 text-amber-100 hover:border-amber-400/60 font-bold"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs sm:text-sm font-extrabold flex items-center gap-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "om", tone: "inherit", className: "w-4 h-4 shrink-0" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "२. मूल ऐप स्वरूप (As-Is)" })
                  ] }),
                  adminOverride.mode === "default_as_is" && /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 shrink-0 text-stone-950", strokeWidth: 1.5 })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: `text-[10px] leading-relaxed ${adminOverride.mode === "default_as_is" ? "text-stone-900 font-bold" : "text-amber-300/70"}`,
                    children: "जैसा ऐप है वैसा ही रहे — मूल स्वर्ण-राजसी वैदिक रूप, कोई पर्व/वार बदलाव नहीं।"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => {
                if (adminOverride.mode !== "manual") {
                  const prevManual = adminOverride.manualFestivalId && adminOverride.manualFestivalId !== DEFAULT_VEDIC_THEME.id ? allFestivals.find((f) => f.id === adminOverride.manualFestivalId) : null;
                  const targetFest = prevManual || (activeTheme.id !== DEFAULT_VEDIC_THEME.id ? activeTheme : null) || monthFilteredFestivals[0] || (autoDetectedTheme.id !== DEFAULT_VEDIC_THEME.id ? autoDetectedTheme : null) || allFestivals.find((f) => f.id === "chhath-puja") || allFestivals[0];
                  handleSelectManualFestival(targetFest);
                }
              },
              className: `p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-1.5 ${adminOverride.mode === "manual" ? "bg-gradient-to-r from-purple-500 via-indigo-500 to-amber-400 text-stone-950 border-purple-200 shadow-[0_0_20px_rgba(168,85,247,0.4)] font-black ring-2 ring-purple-300/60" : "bg-slate-950/90 border-amber-800/50 text-amber-100 hover:border-purple-400/60 font-bold"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs sm:text-sm font-extrabold flex items-center gap-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "crown", tone: "inherit", className: "w-4 h-4 shrink-0" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "३. एडमिन मैन्युअल चयन" })
                  ] }),
                  adminOverride.mode === "manual" && /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 shrink-0 text-stone-950", strokeWidth: 1.5 })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: `text-[10px] leading-relaxed ${adminOverride.mode === "manual" ? "text-stone-900 font-bold" : "text-amber-300/70"}`,
                    children: "नीचे से अपनी पसंद का कोई भी पर्व या ७ वार थीम १-क्लिक में लाइव करें।"
                  }
                )
              ]
            }
          )
        ] }),
        adminOverride.mode === "auto" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 rounded-xl bg-teal-950/40 border border-teal-500/40 flex flex-wrap items-center justify-between gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "sparkles", className: "w-4 h-4 text-theme-primary shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-extrabold text-teal-200", children: "पर्व न होने पर ७ वार (दिन अनुसार) नित्य थीम:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-teal-300/70", children: "रविवार (सूर्य) • सोमवार (शिव) • मंगलवार (हनुमान) • बुधवार (गणेश) • गुरुवार (विष्णु) • शुक्रवार (लक्ष्मी) • शनिवार (शनि)" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: handleToggleDayOfWeekTheme,
              className: `px-3 py-1.5 rounded-lg text-xs font-black border transition-all cursor-pointer flex items-center gap-1.5 ${adminOverride.enableDayOfWeekTheme !== false ? "bg-emerald-500 text-stone-950 border-emerald-300 shadow-sm" : "bg-slate-900 text-stone-300 border-slate-700 hover:border-slate-500"}`,
              children: adminOverride.enableDayOfWeekTheme !== false ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3.5 h-3.5 text-stone-950", strokeWidth: 1.5 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "सक्रिय (ON)" })
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3.5 h-3.5 text-stone-300", strokeWidth: 1.5 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "बंद (OFF)" })
              ] })
            }
          )
        ] }),
        !isDefaultAsIs && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 sm:p-4 rounded-xl bg-amber-950/45 border border-amber-400/50 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-amber-500/25 pb-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2.5 w-full", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "diya", className: "w-5 h-5 text-theme-primary shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs sm:text-sm font-black text-yellow-300 flex flex-wrap items-center gap-1.5 leading-snug", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "उत्सव रोशनी, दीपमाला, मंदिर घंटी एवं वंदनवार स्टूडियो (7 Light Modes & Effects):" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-black/60 border border-amber-400/40 text-[10.5px] text-amber-200", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1 shrink-0", children: activeLightPalette.bulbs.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: `w-2.5 h-2.5 rounded-full inline-block ${i % 2 === 0 ? "festive-bulb-a" : "festive-bulb-b"}`,
                      style: {
                        backgroundColor: c,
                        boxShadow: `0 0 6px 1px ${c}`
                      }
                    },
                    i
                  )) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold leading-tight break-words", children: activeLightPalette.styleLabelHi })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] sm:text-[11px] text-amber-200/80 mt-1 leading-relaxed", children: "चयनित पर्व या वार के अनुसार मुख्य वेबसाइट (`index.html`) व ऐप (`React`) दोनों पर लाइव लाइट डिज़ाइन, एनिमेशन व तोरण नियंत्रित करें:" })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] font-black text-amber-200 flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "sparkles", className: "w-3.5 h-3.5 text-theme-primary shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "१. उत्सव झालर व लाइट डिज़ाइन चुनें (7 विकल्प):" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2", children: [
              {
                id: "royal_jhalar",
                icon: "sparkles",
                title: "१. भव्य राजसी झालर",
                desc: "सतरंगी उत्सव बल्ब, लटकती लड़ियाँ व स्पेक्ट्रम रेखा",
                activeClass: "bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-400 text-stone-950 border-yellow-200 shadow-[0_0_18px_rgba(251,191,36,0.5)] font-black ring-2 ring-yellow-300/70"
              },
              {
                id: "diya_mala",
                icon: "diya",
                title: "२. अखंड दीप-माला",
                desc: "प्रत्येक तोरण मेहराब में जलते हुए पीतल के दीपक व लौ",
                activeClass: "bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-300 text-stone-950 border-yellow-200 shadow-[0_0_18px_rgba(249,115,22,0.5)] font-black ring-2 ring-yellow-300/70"
              },
              {
                id: "temple_bells",
                icon: "bell",
                title: "३. स्वर्ण मंदिर घंटी झालर",
                desc: "लटकती हुई स्वर्ण मंदिर घंटियाँ एवं दिव्य बल्ब लड़ियाँ",
                activeClass: "bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 text-stone-950 border-yellow-100 shadow-[0_0_18px_rgba(250,204,21,0.5)] font-black ring-2 ring-yellow-200/80"
              },
              {
                id: "crystal_chandeliers",
                icon: "ratna",
                title: "४. राजसी क्रिस्टल झूमर",
                desc: "चमकते हीरक प्रिज्म झूमर व उत्सव मोती झालर",
                activeClass: "bg-gradient-to-r from-cyan-400 via-sky-300 to-amber-300 text-stone-950 border-white shadow-[0_0_18px_rgba(56,189,248,0.5)] font-black ring-2 ring-cyan-200/80"
              },
              {
                id: "soft_glow",
                icon: "diya",
                title: "५. सौम्य मंदिर ज्योति",
                desc: "शांत माइक्रो-बल्ब, मंद आभा व स्पेक्ट्रम रेखा",
                activeClass: "bg-gradient-to-r from-teal-400 via-emerald-300 to-teal-300 text-stone-950 border-emerald-200 shadow-[0_0_18px_rgba(45,212,191,0.45)] font-black ring-2 ring-teal-300/70"
              },
              {
                id: "spectrum_line",
                icon: "palette",
                title: "६. केवल स्पेक्ट्रम रेखा",
                desc: "बिना बल्ब/लटकन, केवल बहती हुई सतरंगी प्रकाश रेखा",
                activeClass: "bg-gradient-to-r from-pink-500 via-amber-400 to-cyan-400 text-stone-950 border-yellow-200 shadow-[0_0_18px_rgba(244,63,94,0.45)] font-black ring-2 ring-yellow-300/70"
              },
              {
                id: "off",
                icon: "new-moon",
                title: "७. सभी लाइट्स बंद",
                desc: "बिना झालर/बल्ब/रेखा के, केवल शुद्ध थीम रंग",
                activeClass: "bg-rose-500 text-stone-950 border-rose-300 shadow-[0_0_16px_rgba(244,63,94,0.4)] font-black ring-2 ring-rose-300/70"
              }
            ].map((item) => {
              const active = lightsMode === item.id;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => handleSetLightsMode(item.id),
                  className: `p-2.5 rounded-xl border text-left transition-all cursor-pointer touch-manipulation flex flex-col justify-between gap-1 ${active ? item.activeClass : "bg-slate-950/90 text-amber-100 border-amber-700/50 hover:border-amber-400 font-bold"}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-extrabold flex items-center gap-1.5", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: item.icon, tone: active ? "inherit" : "theme", className: "w-3.5 h-3.5 shrink-0" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item.title })
                      ] }),
                      active && /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 shrink-0 text-stone-950", strokeWidth: 1.5 })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: `text-[10px] leading-snug break-words ${active ? "text-stone-950 font-extrabold" : "text-amber-300/70"}`,
                        children: item.desc
                      }
                    )
                  ]
                },
                item.id
              );
            }) })
          ] }),
          lightsMode !== "off" && lightsMode !== "spectrum_line" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-xl bg-black/45 border border-amber-500/35 space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] font-black text-yellow-300 flex items-center justify-between flex-wrap gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "zap", className: "w-3.5 h-3.5 text-theme-primary shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "२. झालर लाइट एनिमेशन पैटर्न (5 Light Effects):" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-amber-200/80 font-bold", children: "बल्ब व दीप किस गति/शैली में चमकें" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2", children: [
              {
                id: "twinkle",
                icon: "sparkles",
                label: "जगमग टिमटिमाहट",
                sub: "Classic 3-Phase"
              },
              {
                id: "running_chase",
                icon: "wind",
                label: "दौड़ती चेज़र लड़ियाँ",
                sub: "Running Wave"
              },
              {
                id: "breathing_aarti",
                icon: "aarti",
                label: "शांत आरती स्पंदन",
                sub: "Breathing Glow"
              },
              {
                id: "sparkle_flash",
                icon: "zap",
                label: "उत्सव झिलमिल फ्लैश",
                sub: "Fast Sparkle"
              },
              {
                id: "steady",
                icon: "star",
                label: "स्थिर अखंड ज्योति",
                sub: "No Blink / Steady"
              }
            ].map((anim) => {
              const active = jhalarAnimation === anim.id;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => handleSetJhalarAnimation(anim.id),
                  className: `px-2.5 py-2 rounded-xl border text-left transition-all cursor-pointer touch-manipulation flex flex-col justify-between gap-0.5 ${active ? "bg-gradient-to-r from-amber-400 to-yellow-300 text-stone-950 border-white font-black shadow-md ring-2 ring-yellow-300" : "bg-slate-950/90 text-amber-100 border-amber-700/45 hover:border-amber-400 font-bold"}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] font-extrabold flex items-center justify-between gap-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: anim.icon, tone: active ? "inherit" : "theme", className: "w-3.5 h-3.5 shrink-0" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: anim.label })
                      ] }),
                      active && /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-3.5 h-3.5 shrink-0 text-stone-950", strokeWidth: 1.5 })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: `text-[9.5px] ${active ? "text-stone-900 font-bold" : "text-amber-300/70"}`,
                        children: anim.sub
                      }
                    )
                  ]
                },
                anim.id
              );
            }) })
          ] }),
          lightsMode !== "off" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-xl bg-black/45 border border-amber-500/35 space-y-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs font-black text-amber-200 flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "dhoop", className: "w-3.5 h-3.5 text-theme-primary shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "३. पर्व वंदनवार / तोरण डिज़ाइन (4 Sacred Styles):" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-amber-300/75 mt-0.5", children: "हेडर के नीचे सजने वाली पवित्र वंदनवार की शैली चुनें या चालू/बंद करें" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: handleToggleToran,
                  className: `inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-black border shrink-0 transition-all cursor-pointer touch-manipulation ${showToran ? "bg-emerald-500 text-stone-950 border-emerald-200 shadow-sm" : "bg-slate-900 text-stone-300 border-slate-700 hover:border-slate-500"}`,
                  children: showToran ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-3.5 h-3.5", strokeWidth: 1.5 }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "तोरण चालू (ON)" })
                  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3.5 h-3.5", strokeWidth: 1.5 }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "तोरण बंद (OFF)" })
                  ] })
                }
              )
            ] }),
            showToran && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2", children: [
              {
                id: "marigold_mango",
                icon: "lotus",
                label: "१. गेंदा व आम्र-पल्लव",
                desc: "पारंपरिक गेंदा फूल एवं आम/अशोक पत्ते"
              },
              {
                id: "lotus_ashoka",
                icon: "lotus",
                label: "२. कमल पुष्प व अशोक पल्लव",
                desc: "गुलाबी पद्म-कमल एवं अशोक पल्लव माला"
              },
              {
                id: "rudraksha_belpatra",
                icon: "trishul",
                label: "३. रुद्राक्ष व त्रिदल बेलपत्र",
                desc: "शिवप्रिय रुद्राक्ष माला व ३-पत्ती बेलपत्र"
              },
              {
                id: "pearl_swarna",
                icon: "crown",
                label: "४. राजसी मोती व स्वर्ण तोरण",
                desc: "सफेद मोती लड़ी, कुंदन व स्वर्ण लटकन"
              }
            ].map((ts) => {
              const active = toranStyle === ts.id;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => handleSetToranStyle(ts.id),
                  className: `p-2.5 rounded-xl border text-left transition-all cursor-pointer touch-manipulation flex flex-col justify-between gap-0.5 ${active ? "bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300 text-stone-950 border-white font-black shadow-md ring-2 ring-emerald-300" : "bg-slate-950/90 text-amber-100 border-amber-700/45 hover:border-emerald-400 font-bold"}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs font-extrabold flex items-center justify-between gap-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: ts.icon, tone: active ? "inherit" : "theme", className: "w-3.5 h-3.5 shrink-0" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: ts.label })
                      ] }),
                      active && /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3.5 h-3.5 shrink-0 text-stone-950", strokeWidth: 1.5 })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: `text-[10px] leading-snug ${active ? "text-stone-900 font-bold" : "text-amber-300/70"}`,
                        children: ts.desc
                      }
                    )
                  ]
                },
                ts.id
              );
            }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-xl bg-black/45 border border-amber-500/35 flex flex-col justify-between gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs font-black text-amber-200 leading-snug inline-flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "temple", className: "w-3.5 h-3.5 text-theme-primary shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "४. कोनों की लटकती लड़ियाँ (Corner Ladi)" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-amber-300/75 mt-0.5", children: "दोनों कोनों पर झूलती हुई दीप-लड़ियों का आकार" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-1", children: [
                { id: "auto", label: "मानक" },
                { id: "grand_curtain", label: "भव्य डबल" },
                { id: "off", label: "बंद" }
              ].map((cl) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => handleSetCornerLadiMode(cl.id),
                  className: `px-2 py-1.5 rounded-lg text-[10.5px] font-black border transition-all cursor-pointer touch-manipulation ${cornerLadiMode === cl.id ? "bg-amber-400 text-stone-950 border-yellow-200 shadow-sm" : "bg-slate-900 text-amber-200 border-amber-700/40 hover:border-amber-400"}`,
                  children: cl.label
                },
                cl.id
              )) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-xl bg-black/45 border border-amber-500/35 flex items-center justify-between gap-2.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs font-black text-amber-200 leading-snug break-words inline-flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "diya", className: "w-3.5 h-3.5 text-theme-primary shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "५. संध्या आरती ऑटो-दीप आभा" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-amber-300/75 mt-0.5 leading-snug break-words", children: isSandhyaAartiTime ? "अभी संध्या स्वर्ण आभा सक्रिय है!" : "शाम ५:०० – ९:०० बजे दोगुनी स्वर्ण आभा" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: handleToggleSandhyaAutoGlow,
                  className: `inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-black border shrink-0 transition-all cursor-pointer touch-manipulation ${sandhyaAutoGlow ? "bg-amber-400 text-stone-950 border-yellow-200 shadow-sm" : "bg-slate-900 text-stone-300 border-slate-700 hover:border-slate-500"}`,
                  children: sandhyaAutoGlow ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-3 h-3", strokeWidth: 1.5 }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "चालू" })
                  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3 h-3", strokeWidth: 1.5 }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "बंद" })
                  ] })
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-xl bg-black/45 border border-amber-500/35 flex items-center justify-between gap-2.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs font-black text-amber-200 leading-snug break-words inline-flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "lotus", className: "w-3.5 h-3.5 text-theme-primary shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "६. स्वागत पुष्प-वर्षा (Auto Shower)" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-amber-300/75 mt-0.5 leading-snug break-words", children: "वेबसाइट खुलते ही स्वतः ३-सेकंड पुष्प-वर्षा" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: handleToggleAutoPushpVarsha,
                  className: `inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-black border shrink-0 transition-all cursor-pointer touch-manipulation ${autoPushpVarsha ? "bg-pink-500 text-stone-950 border-pink-200 shadow-sm" : "bg-slate-900 text-stone-300 border-slate-700 hover:border-slate-500"}`,
                  children: autoPushpVarsha ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-3 h-3", strokeWidth: 1.5 }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "चालू" })
                  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3 h-3", strokeWidth: 1.5 }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "बंद" })
                  ] })
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-xl bg-black/45 border border-amber-500/35 flex items-center justify-between gap-2.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs font-black text-amber-200 leading-snug break-words inline-flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "palette", className: "w-3.5 h-3.5 text-theme-primary shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "७. प्रदीप्त स्पेक्ट्रम हेयरलाइन" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-amber-300/75 mt-0.5 leading-snug break-words", children: enableGlowingHairline ? "हेडर, कार्ड व बॉटम-नैव पर प्रकाश रेखा चालू" : "स्पेक्ट्रम बॉर्डर लाइट बंद है" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: handleToggleGlowingHairline,
                  className: `inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-black border shrink-0 transition-all cursor-pointer touch-manipulation ${enableGlowingHairline ? "bg-gradient-to-r from-pink-500 via-amber-400 to-cyan-400 text-stone-950 border-yellow-200 shadow-sm font-black" : "bg-slate-900 text-stone-300 border-slate-700 hover:border-slate-500"}`,
                  children: enableGlowingHairline ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-3 h-3", strokeWidth: 1.5 }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "चालू" })
                  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3 h-3", strokeWidth: 1.5 }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "बंद" })
                  ] })
                }
              )
            ] })
          ] }),
          enableGlowingHairline && lightsMode !== "off" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3.5 rounded-xl bg-slate-950/85 border border-yellow-500/40 space-y-3 mt-1 shadow-inner", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-amber-500/20 pb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "palette", className: "w-4 h-4 text-theme-primary shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs sm:text-sm font-black text-amber-200 flex items-center gap-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "प्रदीप्त स्पेक्ट्रम लाइट कस्टमाइज़र (6 Effects)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] px-2 py-0.5 rounded-full bg-amber-400/20 text-yellow-300 border border-amber-400/30 font-bold", children: "लाइव नियंत्रण" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10.5px] text-amber-300/70", children: "हेडर, पंचांग कार्ड, मंदिर गर्भगृह व बॉटम-नैव की स्पेक्ट्रम लाइट को अपनी पसंद अनुसार अनुकूलित करें" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full sm:w-52 bg-stone-950/90 p-2 rounded-lg border border-amber-500/40 flex flex-col gap-1 shrink-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[9.5px] font-bold text-amber-300/90 flex items-center justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "लाइव पूर्वावलोकन:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-yellow-400 uppercase text-[9px] font-mono", children: [
                    hairlineIntensity,
                    " • ",
                    hairlineEffect
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-1 bg-black/60 rounded px-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FestiveHairlineDivider, {}) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-[11px] font-extrabold text-amber-200 flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "scale", className: "w-3.5 h-3.5 text-theme-primary shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "१. रेखा मोटाई / तीव्रता (कम या ज्यादा):" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => handleSetHairlineIntensity("slim"),
                      className: `px-2 py-1.5 rounded-lg text-[10.5px] font-black border transition-all cursor-pointer touch-manipulation flex flex-col items-center justify-center gap-0.5 ${hairlineIntensity === "slim" ? "bg-amber-400 text-stone-950 border-yellow-200 shadow-sm ring-2 ring-yellow-300" : "bg-black/40 text-amber-200/90 border-amber-700/40 hover:border-amber-400"}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "स्लिम 1.5px" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] opacity-80 font-normal", children: "(कम / सौम्य)" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => handleSetHairlineIntensity("medium"),
                      className: `px-2 py-1.5 rounded-lg text-[10.5px] font-black border transition-all cursor-pointer touch-manipulation flex flex-col items-center justify-center gap-0.5 ${hairlineIntensity === "medium" ? "bg-amber-400 text-stone-950 border-yellow-200 shadow-sm ring-2 ring-yellow-300" : "bg-black/40 text-amber-200/90 border-amber-700/40 hover:border-amber-400"}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "मानक 2.5px" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] opacity-80 font-normal", children: "(संतुलित)" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => handleSetHairlineIntensity("bold"),
                      className: `px-2 py-1.5 rounded-lg text-[10.5px] font-black border transition-all cursor-pointer touch-manipulation flex flex-col items-center justify-center gap-0.5 ${hairlineIntensity === "bold" ? "bg-gradient-to-r from-amber-400 to-yellow-300 text-stone-950 border-yellow-100 shadow-md ring-2 ring-yellow-300" : "bg-black/40 text-amber-200/90 border-amber-700/40 hover:border-amber-400"}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "भव्य 4.0px" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] opacity-80 font-normal", children: "(ज्यादा / लेज़र)" })
                      ]
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-[11px] font-extrabold text-amber-200 flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "sparkles", className: "w-3.5 h-3.5 text-theme-primary shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "२. लाइटिंग इफेक्ट्स (6 विकल्प):" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => handleSetHairlineEffect("rainbow"),
                      className: `px-2 py-1.5 rounded-lg text-[10px] font-black border transition-all cursor-pointer touch-manipulation flex items-center justify-center gap-1 ${hairlineEffect === "rainbow" ? "bg-gradient-to-r from-pink-500 via-yellow-400 to-cyan-400 text-stone-950 border-white shadow-sm ring-2 ring-yellow-300" : "bg-black/40 text-amber-200/90 border-amber-700/40 hover:border-pink-400"}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "palette", tone: "inherit", className: "w-3 h-3 shrink-0" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "सतरंगी" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => handleSetHairlineEffect("festival"),
                      className: `px-2 py-1.5 rounded-lg text-[10px] font-black border transition-all cursor-pointer touch-manipulation flex items-center justify-center gap-1 ${hairlineEffect === "festival" ? "bg-gradient-to-r from-emerald-400 via-amber-300 to-orange-400 text-stone-950 border-white shadow-sm ring-2 ring-emerald-300" : "bg-black/40 text-amber-200/90 border-amber-700/40 hover:border-emerald-400"}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "diya", tone: "inherit", className: "w-3 h-3 shrink-0" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "पर्व-देव रंग" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => handleSetHairlineEffect("golden"),
                      className: `px-2 py-1.5 rounded-lg text-[10px] font-black border transition-all cursor-pointer touch-manipulation flex items-center justify-center gap-1 ${hairlineEffect === "golden" ? "bg-gradient-to-r from-amber-400 via-yellow-200 to-orange-400 text-stone-950 border-yellow-200 shadow-sm ring-2 ring-yellow-300" : "bg-black/40 text-amber-200/90 border-amber-700/40 hover:border-amber-400"}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "sparkles", tone: "inherit", className: "w-3 h-3 shrink-0" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "स्वर्ण ज्योति" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => handleSetHairlineEffect("pulse"),
                      className: `px-2 py-1.5 rounded-lg text-[10px] font-black border transition-all cursor-pointer touch-manipulation flex items-center justify-center gap-1 ${hairlineEffect === "pulse" ? "bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 text-stone-950 border-cyan-200 shadow-sm ring-2 ring-cyan-300" : "bg-black/40 text-amber-200/90 border-amber-700/40 hover:border-cyan-400"}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "zap", tone: "inherit", className: "w-3 h-3 shrink-0" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "लेज़र पल्स" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => handleSetHairlineEffect("aurora_agni"),
                      className: `px-2 py-1.5 rounded-lg text-[10px] font-black border transition-all cursor-pointer touch-manipulation flex items-center justify-center gap-1 ${hairlineEffect === "aurora_agni" ? "bg-gradient-to-r from-red-500 via-orange-400 to-yellow-300 text-stone-950 border-yellow-100 shadow-sm ring-2 ring-orange-300" : "bg-black/40 text-amber-200/90 border-amber-700/40 hover:border-orange-400"}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "havan", tone: "inherit", className: "w-3 h-3 shrink-0" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "अग्नि-तेज" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => handleSetHairlineEffect("neelkanth_peacock"),
                      className: `px-2 py-1.5 rounded-lg text-[10px] font-black border transition-all cursor-pointer touch-manipulation flex items-center justify-center gap-1 ${hairlineEffect === "neelkanth_peacock" ? "bg-gradient-to-r from-emerald-400 via-cyan-300 to-indigo-400 text-stone-950 border-cyan-100 shadow-sm ring-2 ring-cyan-300" : "bg-black/40 text-amber-200/90 border-amber-700/40 hover:border-cyan-400"}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "bansuri", tone: "inherit", className: "w-3 h-3 shrink-0" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "मयूर-नीलकंठ" })
                      ]
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-[11px] font-extrabold text-amber-200 flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "clock", className: "w-3.5 h-3.5 text-theme-primary shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "३. स्पेक्ट्रम प्रवाह गति (Speed):" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => handleSetHairlineSpeed("slow"),
                      className: `px-2 py-1.5 rounded-lg text-[10.5px] font-black border transition-all cursor-pointer touch-manipulation flex flex-col items-center justify-center gap-0.5 ${hairlineSpeed === "slow" ? "bg-teal-400 text-stone-950 border-teal-200 shadow-sm ring-2 ring-teal-300" : "bg-black/40 text-amber-200/90 border-amber-700/40 hover:border-teal-400"}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "मंद" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] opacity-80 font-normal", children: "(12s)" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => handleSetHairlineSpeed("normal"),
                      className: `px-2 py-1.5 rounded-lg text-[10.5px] font-black border transition-all cursor-pointer touch-manipulation flex flex-col items-center justify-center gap-0.5 ${hairlineSpeed === "normal" ? "bg-amber-400 text-stone-950 border-yellow-200 shadow-sm ring-2 ring-yellow-300" : "bg-black/40 text-amber-200/90 border-amber-700/40 hover:border-amber-400"}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "सामान्य" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] opacity-80 font-normal", children: "(7s)" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => handleSetHairlineSpeed("fast"),
                      className: `px-2 py-1.5 rounded-lg text-[10.5px] font-black border transition-all cursor-pointer touch-manipulation flex flex-col items-center justify-center gap-0.5 ${hairlineSpeed === "fast" ? "bg-orange-400 text-stone-950 border-orange-200 shadow-sm ring-2 ring-orange-300" : "bg-black/40 text-amber-200/90 border-amber-700/40 hover:border-orange-400"}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "zap", tone: "inherit", className: "w-3 h-3 shrink-0" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "त्वरित" })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] opacity-80 font-normal", children: "(3.5s)" })
                      ]
                    }
                  )
                ] })
              ] })
            ] })
          ] })
        ] })
      ] }),
      saveToast && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed bottom-16 left-1/2 -translate-x-1/2 z-50 max-w-[92vw] sm:max-w-md px-3.5 py-2 rounded-xl bg-emerald-950/95 border-2 border-emerald-400 text-emerald-100 text-xs font-extrabold flex items-center gap-2 shadow-[0_8px_30px_rgba(0,0,0,0.85)] pointer-events-none", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 text-emerald-400 shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "break-words leading-snug", children: saveToast })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2.5 p-3 sm:p-3.5 rounded-2xl bg-slate-950/90 border border-amber-500/40", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs sm:text-sm font-black text-yellow-300 flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-4 h-4 text-amber-400" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "१२-माह हिन्दू पर्व कैलेंडर (जनवरी से दिसंबर — हर महीने के प्रमुख पर्व):" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] sm:text-[11px] text-amber-200/80 mt-0.5", children: "किसी भी महीने पर टैप करें और उस माह के हिन्दू त्योहार को १-क्लिक में पूरे ऐप पर सेट करें:" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => setSelectedMonthFilter("all"),
              className: `inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-extrabold border cursor-pointer transition-all ${selectedMonthFilter === "all" ? "bg-amber-400 text-stone-950 border-yellow-200 shadow-sm" : "bg-slate-900 text-amber-200 border-amber-500/40 hover:border-amber-400"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "star", tone: selectedMonthFilter === "all" ? "inherit" : "theme", className: "w-3.5 h-3.5 shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  "सभी १२ माह के पर्व (",
                  allFestivals.length,
                  ")"
                ] })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-1.5", children: MONTH_CATEGORIES_HI.map((m) => {
          const isSelected = selectedMonthFilter === m.month;
          const isCurrentMonth = m.month === currentIstMonth;
          const countInMonth = allFestivals.filter(
            (f) => f.monthNumber === m.month
          ).length;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => setSelectedMonthFilter(m.month),
              className: `p-2 rounded-xl border text-left transition-all cursor-pointer relative ${isSelected ? "bg-gradient-to-br from-amber-400 via-yellow-400 to-orange-400 text-stone-950 border-yellow-200 shadow-md font-black" : isCurrentMonth ? "bg-amber-950/80 border-amber-400/70 text-amber-100 hover:bg-amber-900/70 font-bold" : "bg-slate-900/90 border-slate-800 text-amber-100/90 hover:border-amber-500/50 font-semibold"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: m.icon, tone: isSelected ? "inherit" : "theme", className: "w-4 h-4 shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: `text-[9px] px-1 py-0.2 rounded font-extrabold ${isSelected ? "bg-black/20 text-stone-950" : isCurrentMonth ? "bg-emerald-500/30 text-emerald-200 border border-emerald-400/40" : "bg-slate-800 text-amber-300/80"}`,
                      children: isCurrentMonth ? "इस माह" : `${countInMonth} पर्व`
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-extrabold truncate mt-1", children: m.shortHi }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: `text-[9px] truncate ${isSelected ? "text-stone-900 font-bold" : "text-amber-300/70"}`,
                    children: m.vedicMaasHi
                  }
                )
              ]
            },
            m.month
          );
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-2 border-t border-amber-500/25 space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-extrabold text-amber-200 inline-flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                SacredIcon,
                {
                  name: activeMonthMeta ? activeMonthMeta.icon : "star",
                  className: "w-4 h-4 text-theme-primary shrink-0"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: activeMonthMeta ? `${activeMonthMeta.labelHi} के प्रमुख पर्व (${monthFilteredFestivals.length}):` : `वर्ष भर के समस्त सनातन पर्व एवं मासिक व्रत (${monthFilteredFestivals.length}):` })
            ] }),
            selectedMonthFilter !== currentIstMonth && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => setSelectedMonthFilter(currentIstMonth),
                className: "text-[10px] font-bold text-emerald-300 hover:underline cursor-pointer inline-flex items-center gap-1",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "वर्तमान माह पर लौटें" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "arrow-right", className: "w-3 h-3" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2", children: [
            monthFilteredFestivals.map((fest) => {
              const isSelected = adminOverride.mode === "manual" && adminOverride.manualFestivalId === fest.id;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => handleSelectManualFestival(fest),
                  className: `p-2.5 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between gap-2 ${isSelected ? "bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 text-stone-950 border-yellow-200 shadow-lg font-black" : "bg-slate-900/95 border-amber-500/30 text-amber-100 hover:border-yellow-400/70 hover:bg-amber-950/40"}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5 min-w-0 flex-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-8 h-8 rounded-lg bg-black/25 border border-white/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: fest.deityIcon, tone: isSelected ? "inherit" : "theme", className: "w-4 h-4" }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-extrabold break-words leading-snug", children: fest.nameHi }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: `text-[10px] break-words leading-snug mt-0.5 ${isSelected ? "text-stone-900 font-bold" : "text-amber-300/75 font-medium"}`,
                            children: fest.subDayLabelHi || fest.monthLabelHi
                          }
                        )
                      ] })
                    ] }),
                    isSelected ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 shrink-0 text-stone-950", strokeWidth: 1.5 }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold px-2 py-0.5 rounded bg-amber-500/15 text-amber-300 border border-amber-400/30 shrink-0", children: "लागू करें" })
                  ]
                },
                fest.id
              );
            }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => handleSelectManualFestival(DEFAULT_VEDIC_THEME),
                className: `p-2.5 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between gap-2 ${adminOverride.mode === "manual" && adminOverride.manualFestivalId === DEFAULT_VEDIC_THEME.id ? "bg-gradient-to-r from-purple-400 to-amber-400 text-stone-950 border-yellow-200 shadow-md font-black" : "bg-slate-900/95 border-purple-500/40 text-purple-200 hover:border-purple-400 font-bold"}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5 min-w-0 flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-8 h-8 rounded-lg bg-purple-950/80 border border-purple-400/30 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "om", className: "w-4 h-4 text-theme-primary" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-extrabold break-words leading-snug", children: "सामान्य राजसी वैदिक थीम" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] opacity-80 break-words leading-snug mt-0.5", children: "डिफ़ॉल्ट बैंगनी-स्वर्ण आध्यात्मिक रूप" })
                  ] })
                ] })
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 pt-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-extrabold text-yellow-300 flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "diya", className: "w-4 h-4 text-theme-primary shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "५-दिवसीय दीपोत्सव त्वरित श्रृंखला (धनतेरस से भाई दूज):" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-amber-300/80 font-semibold shrink-0", children: "5 Days Sequence" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-5 gap-2", children: deepotsavFestivals.map((fest, idx) => {
          const isSelected = adminOverride.mode === "manual" && adminOverride.manualFestivalId === fest.id;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => handleSelectManualFestival(fest),
              className: `p-2.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-1 ${isSelected ? "bg-gradient-to-br from-yellow-400 via-amber-500 to-orange-500 text-stone-950 border-yellow-200 shadow-lg font-black" : "bg-slate-950/90 border-amber-500/35 text-amber-100 hover:border-yellow-400/70 hover:bg-amber-950/40"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between w-full", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: fest.deityIcon, tone: isSelected ? "inherit" : "theme", className: "w-4 h-4 shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "span",
                    {
                      className: `text-[9px] px-1.5 py-0.5 rounded font-bold ${isSelected ? "bg-black/25 text-white" : "bg-amber-500/20 text-amber-300 border border-amber-400/30"}`,
                      children: [
                        "दिवस ",
                        idx + 1
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-extrabold leading-snug break-words", children: fest.nameHi.split(" (")[0] })
              ]
            },
            fest.id
          );
        }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 pt-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-extrabold text-pink-300 flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "palette", className: "w-4 h-4 text-theme-primary shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "२-दिवसीय होली महापर्व (छोटी होली / होलिका दहन एवं बड़ी रंगवाली होली):" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-pink-300/80 font-semibold shrink-0", children: "2 Days Sequence" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-2", children: holiFestivals.map((fest, idx) => {
          const isSelected = adminOverride.mode === "manual" && adminOverride.manualFestivalId === fest.id;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => handleSelectManualFestival(fest),
              className: `p-2.5 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between gap-2 ${isSelected ? "bg-gradient-to-r from-pink-400 via-amber-300 to-emerald-400 text-stone-950 border-pink-200 shadow-lg font-black" : "bg-slate-950/90 border-pink-500/35 text-pink-100 hover:border-pink-400/70 hover:bg-pink-950/30"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 min-w-0 flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: fest.deityIcon, tone: isSelected ? "inherit" : "theme", className: "w-5 h-5 shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-extrabold break-words leading-snug", children: fest.nameHi }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: `text-[10px] break-words leading-snug mt-0.5 ${isSelected ? "text-stone-900 font-bold" : "text-pink-300/80"}`,
                        children: [
                          "होली महापर्व दिवस ",
                          idx + 1
                        ]
                      }
                    )
                  ] })
                ] }),
                isSelected && /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 shrink-0", strokeWidth: 1.5 })
              ]
            },
            fest.id
          );
        }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-2 border-t border-amber-500/25", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => setShowCustomEditor((prev) => !prev),
            className: "text-xs font-extrabold text-amber-300 hover:text-yellow-200 flex items-center gap-1.5 cursor-pointer",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(PenLine, { className: "w-3.5 h-3.5 text-amber-400", strokeWidth: 1.5 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: showCustomEditor ? "कस्टम पर्व संदेश संपादक बंद करें" : "विशेष एडमिन पर्व संदेश / अनुष्ठान उद्घोषणा लिखें (Optional)" }),
              showCustomEditor ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-3.5 h-3.5 text-amber-400 shrink-0", strokeWidth: 1.5 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-3.5 h-3.5 text-amber-400 shrink-0", strokeWidth: 1.5 })
            ]
          }
        ),
        showCustomEditor && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "form",
          {
            onSubmit: handleSaveCustomText,
            className: "mt-3 space-y-2.5 bg-slate-950/90 p-3 rounded-xl border border-amber-500/30",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[11px] font-bold text-amber-300 mb-1", children: "1. कस्टम पर्व बैज (उदा. विशेष महायज्ञ / पर्व २०२६):" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "text",
                    value: customBadgeInput,
                    onChange: (e) => setCustomBadgeInput(e.target.value),
                    placeholder: activeTheme.subDayLabelHi || activeTheme.nameHi,
                    className: "w-full px-3 py-2 rounded-lg bg-slate-900 border border-amber-800/60 text-xs text-amber-100"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[11px] font-bold text-amber-300 mb-1", children: "2. कस्टम शुभकामना / उद्घोषणा संदेश:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "text",
                    value: customGreetingInput,
                    onChange: (e) => setCustomGreetingInput(e.target.value),
                    placeholder: activeTheme.bannerGreetingHi,
                    className: "w-full px-3 py-2 rounded-lg bg-slate-900 border border-amber-800/60 text-xs text-amber-100"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 pt-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "submit",
                    className: "inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-amber-500 to-yellow-400 text-stone-950 font-extrabold text-xs cursor-pointer",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "w-3.5 h-3.5", strokeWidth: 1.5 }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "कस्टम संदेश लागू करें" })
                    ]
                  }
                ),
                (customBadgeInput || customGreetingInput || customSubtitleInput) && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: handleClearCustomText,
                    className: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-rose-500/40 text-rose-200 font-bold text-xs cursor-pointer",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "w-3.5 h-3.5", strokeWidth: 1.5 }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "डिफ़ॉल्ट संदेश रीसेट करें" })
                    ]
                  }
                )
              ] })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#2a0e05] via-[#381507] to-[#1a0803] border-2 border-yellow-400/80 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-[0_0_25px_rgba(245,158,11,0.25)]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 text-center sm:text-left w-full sm:w-auto flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 justify-center sm:justify-start", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-yellow-300", children: "वर्तमान चयनित थीम व लाइट्स:" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-amber-100 font-semibold break-words leading-relaxed", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { className: "text-yellow-200 font-black inline-flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: activeTheme.deityIcon, className: "w-3.5 h-3.5 text-theme-primary shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: activeTheme.nameHi })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-amber-400/60 mx-1.5", children: "•" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: lightsModeLabel })
          ] }),
          lastPublishedTime && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-emerald-300 font-medium", children: [
            "अंतिम सबमिट: ",
            lastPublishedTime
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: handlePublishToServer,
            disabled: isPublishing,
            className: "w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-500 hover:from-yellow-300 hover:to-orange-400 text-stone-950 font-black text-xs sm:text-sm shadow-[0_8px_20px_rgba(245,158,11,0.45)] hover:shadow-[0_10px_30px_rgba(245,158,11,0.7)] transform hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0 disabled:opacity-75 disabled:cursor-not-allowed ring-2 ring-yellow-300/80",
            children: isPublishing ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 animate-spin text-stone-950" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "सर्वर पर सबमिट हो रहा है..." })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "w-4 h-4 text-stone-950" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "सबमिट करें एवं सभी यूज़र्स के लिए लागू करें" })
            ] })
          }
        )
      ] })
    ] })
  ] });
};
const AccountAppControlsCard = () => {
  const { language, setLanguage, currentLanguageOption, tr } = useLanguage();
  const { fontScale, setFontScale } = useFontScale();
  const { isInstallable, isInstalled, isStandalone, isIOS, triggerInstall } = usePWAInstall();
  const [showInstallGuide, setShowInstallGuide] = reactExports.useState(false);
  const handleInstallClick = async () => {
    if (isStandalone || isInstalled) return;
    if (isInstallable) {
      const accepted = await triggerInstall();
      if (!accepted) {
        setShowInstallGuide(true);
      }
      return;
    }
    setShowInstallGuide(true);
  };
  const fontOptions = [
    { id: "normal", label: "अ", sub: tr("सामान्य", "Normal", "Normal", "सामान्य", "સામાન્ય") },
    { id: "large", label: "अ+", sub: tr("बड़ा", "Large", "Bada", "मोठा", "મોટું") },
    { id: "xlarge", label: "अ++", sub: tr("बहुत बड़ा", "Extra", "Extra", "खूप मोठा", "ખૂબ મોટું") }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#1b1207] via-[#0f172a] to-[#0a101d] border-2 border-amber-500/55 p-4 sm:p-5 shadow-xl space-y-3.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-2 border-b border-amber-500/25 pb-2.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-4 h-4 text-amber-400 shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm sm:text-base font-extrabold text-amber-100", children: tr(
          "ऐप सेटिंग्स व सुविधाएं (सभी उपयोगकर्ताओं हेतु)",
          "App Settings & Quick Controls (For All Users)",
          "App Settings & Quick Controls (Sabhi Users Ke Liye)",
          "अॅप सेटिंग्ज व सुविधा (सर्व वापरकर्त्यांसाठी)",
          "એપ સેટिंग્સ અને સુવિધાઓ (બધા વપરાशકર્તાઓ માટે)"
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-amber-500/15 border border-amber-400/35 text-amber-300", children: [
        currentLanguageOption.shortBadge,
        " • ",
        fontScale === "normal" ? "100%" : fontScale === "large" ? "108%" : "116%"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-slate-950/75 border border-amber-500/35 p-3.5 flex flex-col justify-between gap-2.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Smartphone, { className: "w-4 h-4 text-amber-300" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm font-extrabold text-amber-100", children: tr("मोबाइल ऐप इंस्टॉल करें", "Install Mobile App", "Mobile App Install Karein", "मोबाईल अॅप इन्स्टॉल करा", "મોબાઇલ એપ ઇન્સ્ટોલ કરો") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-amber-200/75 leading-snug mt-0.5", children: isStandalone || isInstalled ? tr("यह वेबऐप आपके डिवाइस में इंस्टॉल है।", "App is installed on your device.", "App aapke device mein installed hai.", "हे अॅप तुमच्या डिव्हाइसवर इन्स्टॉल आहे.", "આ એપ તમારા ડિવાઇસમાં ઇન્સ્ટોલ છે.") : tr("होम स्क्रीन पर जोड़ें व तेज़ी से चलाएं।", "Add to Home Screen for instant access.", "Home screen par jodein aur fast chalayein.", "होम स्क्रीनवर जोडा आणि त्वरित वापरा.", "હોમ સ્ક્રીન પર ઉમેરો અને ઝડપથી વાપરો.") })
          ] })
        ] }),
        isStandalone || isInstalled ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full min-h-[40px] px-3 py-2 rounded-xl bg-emerald-500/20 border border-emerald-400/50 text-emerald-200 text-xs font-extrabold flex items-center justify-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 text-emerald-400 shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr("ऐप इंस्टॉल है", "App Installed", "App Installed Hai", "अॅप इन्स्टॉल आहे", "એપ ઇન્સ્ટોલ છે") })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: handleInstallClick,
            className: "w-full min-h-[40px] px-3 py-2 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-400 to-orange-400 hover:from-amber-400 hover:to-yellow-300 text-slate-950 font-black text-xs flex items-center justify-center gap-1.5 shadow-md transition-all cursor-pointer",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-4 h-4 shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr("ऐप इंस्टॉल करें (Install)", "Install App Now", "Install App Karein", "अॅप इन्स्टॉल करा", "એપ ઇન્સ્ટોલ કરો") })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-slate-950/75 border border-amber-500/35 p-3.5 flex flex-col justify-between gap-2.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "w-4 h-4 text-amber-300" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "account-language-select", className: "block text-xs sm:text-sm font-extrabold text-amber-100", children: tr("भाषा बदलें (11 भाषाएं)", "Change Language (11 Languages)", "Language Badlein (11 Languages)", "भाषा बदला (११ भाषा)", "ભાષા બદલો (૧૧ ભાષાઓ)") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-amber-200/75 leading-snug mt-0.5", children: tr("ऐप व इमेज शेयर कार्ड आपकी चुनी भाषा में दिखेंगे।", "App & share cards adapt to selected language.", "App aur Image Share Card chuni hui bhasha mein dikhenge.", "अॅप व इमेज शेअर कार्ड निवडलेल्या भाषेत दिसतील.", "એપ અને ઇમેજ શેર કાર્ડ પસંદ કરેલી ભાષામાં દેખાશે.") })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "select",
          {
            id: "account-language-select",
            translate: "no",
            value: language,
            onChange: (e) => setLanguage(e.target.value),
            "aria-label": "Select App Language",
            className: "notranslate w-full min-h-[40px] px-3 py-2 rounded-xl bg-slate-900 border border-amber-500/50 text-amber-100 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-amber-400 cursor-pointer",
            children: SUPPORTED_LANGUAGES.map((langOpt) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: langOpt.code, className: "bg-slate-950 text-amber-100", children: langOpt.nativeLabel }, langOpt.code))
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-slate-950/75 border border-amber-500/35 p-3.5 flex flex-col justify-between gap-2.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Type, { className: "w-4 h-4 text-amber-300" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm font-extrabold text-amber-100", children: tr("अक्षर साइज (अ+)", "Text Size (A+)", "Text Size (A+)", "अक्षर आकार (अ+)", "અક્ષર સાઇઝ (અ+)") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-amber-200/75 leading-snug mt-0.5", children: tr("आराम से पढ़ने के लिए अक्षर बड़ा या सामान्य करें।", "Adjust text size for comfortable reading.", "Padhne ke hisab se akshar bada ya normal karein.", "वाचनासाठी अक्षर मोठे किंवा सामान्य करा.", "વાંચવા માટે અક્ષર મોટા કે સામાન્ય કરો.") })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "grid grid-cols-3 gap-1.5 bg-slate-900 p-1 rounded-xl border border-amber-500/35",
            role: "group",
            "aria-label": tr("अक्षर साइज चुनें", "Select Text Size"),
            children: fontOptions.map((opt) => {
              const isActive = fontScale === opt.id;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  translate: "no",
                  onClick: () => setFontScale(opt.id),
                  "aria-pressed": isActive,
                  className: `notranslate min-h-[34px] px-2 py-1 rounded-lg text-xs font-extrabold transition-all flex flex-col items-center justify-center leading-tight cursor-pointer ${isActive ? "bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 shadow-sm" : "text-amber-200/85 hover:text-amber-100 hover:bg-slate-800"}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-black", children: opt.label }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] opacity-85", children: opt.sub })
                  ]
                },
                opt.id
              );
            })
          }
        )
      ] })
    ] }),
    showInstallGuide && typeof document !== "undefined" && reactDomExports.createPortal(
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn",
          onClick: () => setShowInstallGuide(false),
          role: "dialog",
          "aria-modal": "true",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "w-full max-w-md rounded-3xl bg-gradient-to-b from-[#1a1109] via-[#0f172a] to-[#080d18] border-2 border-amber-400/70 p-5 sm:p-6 shadow-2xl space-y-4 text-amber-50",
              onClick: (e) => e.stopPropagation(),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3 border-b border-amber-500/30 pb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/50 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Smartphone, { className: "w-5 h-5 text-amber-300" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-base font-black text-amber-100", children: tr("पण्डित जी ऑनलाइन ऐप इंस्टॉल गाइड", "Install Pandit Ji Online App", "Pandit Ji Online App Install Guide") }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-amber-300/80", children: tr("बिना Play Store के सीधा होम स्क्रीन पर जोड़ें", "Add directly to your Home Screen", "Seedhe Home Screen par jodein") })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => setShowInstallGuide(false),
                      className: "p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-amber-500/40 text-amber-200 cursor-pointer",
                      "aria-label": "Close",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" })
                    }
                  )
                ] }),
                isIOS ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2.5 text-xs sm:text-sm text-amber-100/90 bg-slate-950/70 p-4 rounded-2xl border border-amber-500/30", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-extrabold text-amber-300", children: "iPhone / iPad (Safari Browser):" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "list-decimal list-inside space-y-1.5 text-xs", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: tr("Safari में नीचे बीच वाले Share (⬆️) आइकन पर टैप करें।", "Tap the Share (⬆️) icon in Safari.") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: tr('नीचे स्क्रॉल कर "Add to Home Screen" चुनें।', 'Scroll down and tap "Add to Home Screen".') }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: tr('ऊपर दाईं ओर "Add" दबाएं — ऐप तैयार है!', 'Tap "Add" at the top right — ready!') })
                  ] })
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2.5 text-xs sm:text-sm text-amber-100/90 bg-slate-950/70 p-4 rounded-2xl border border-amber-500/30", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-extrabold text-amber-300", children: "Android (Chrome / Edge Browser):" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "list-decimal list-inside space-y-1.5 text-xs", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: tr("ब्राउज़र में ऊपर दाईं ओर तीन बिंदु (⋮) मेन्यू पर टैप करें।", "Tap the 3-dot menu (⋮) at the top right.") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: tr('"Install app" या "Add to Home screen" विकल्प चुनें।', 'Select "Install app" or "Add to Home screen".') }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: tr('पुष्टि के लिए "Install" दबाएं — ऐप आइकन होम स्क्रीन पर आ जाएगा!', 'Tap "Install" to confirm — app icon appears on Home Screen!') })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => setShowInstallGuide(false),
                    className: "w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-black text-xs sm:text-sm cursor-pointer",
                    children: tr("समझ गया / बंद करें", "Got It / Close", "Samajh Gaya / Close")
                  }
                )
              ]
            }
          )
        }
      ),
      document.body
    )
  ] });
};
const UserHistoryHub = ({
  currentUser,
  allBookings,
  onLoginSuccess,
  onUpdateAccount,
  onLogout,
  onNavigateToTab,
  onOpenLoginModal,
  onDeleteBookingById,
  onDeleteAllUserBookings
}) => {
  const [subTab, setSubTab] = reactExports.useState("all");
  const [confirmDeleteAll, setConfirmDeleteAll] = reactExports.useState(false);
  const [deleteToast, setDeleteToast] = reactExports.useState("");
  const [quickPhone, setQuickPhone] = reactExports.useState("");
  const [quickName, setQuickName] = reactExports.useState("");
  const [quickPassword, setQuickPassword] = reactExports.useState("");
  const [showQuickPassword, setShowQuickPassword] = reactExports.useState(false);
  const [loginError, setLoginError] = reactExports.useState("");
  const [isLoggingIn, setIsLoggingIn] = reactExports.useState(false);
  const [userExists, setUserExists] = reactExports.useState(true);
  const [isForgotPassword, setIsForgotPassword] = reactExports.useState(false);
  const [resetStep, setResetStep] = reactExports.useState(1);
  const [verifyDob, setVerifyDob] = reactExports.useState("");
  const [verifiedUserName, setVerifiedUserName] = reactExports.useState("");
  const [newPassword, setNewPassword] = reactExports.useState("");
  const [confirmPassword, setConfirmPassword] = reactExports.useState("");
  const [showNewPassword, setShowNewPassword] = reactExports.useState(false);
  const { calcViewingMode, setCalcViewingMode } = useAstroMode();
  const {
    visibility: adminVisibility,
    updateVisibility: updateAdminVisibility,
    toggleAllAdminOptions
  } = useAdminOptionsVisibility();
  const [punyaPoints, setPunyaPointsState] = reactExports.useState(() => getPunyaPoints());
  const [claimedToday, setClaimedToday] = reactExports.useState(() => hasClaimedDailyPunyaToday());
  const [active100Coupon, setActive100Coupon] = reactExports.useState(() => getActive100OfferCoupon());
  const [punyaRedeemFeedback, setPunyaRedeemFeedback] = reactExports.useState(null);
  React.useEffect(() => {
    const syncPunya = () => {
      setPunyaPointsState(getPunyaPoints());
      setClaimedToday(hasClaimedDailyPunyaToday());
      setActive100Coupon(getActive100OfferCoupon());
    };
    window.addEventListener("panditji_punya_updated", syncPunya);
    return () => window.removeEventListener("panditji_punya_updated", syncPunya);
  }, []);
  const handleRedeem100Offer = () => {
    const res = redeemPunyaFor100Offer();
    setPunyaPointsState(res.newPoints);
    setActive100Coupon(res.couponCode || getActive100OfferCoupon());
    setPunyaRedeemFeedback({
      type: res.success ? "success" : "info",
      text: res.message
    });
    if (res.success) {
      vedicAudio.playCrispTempleBell(0.75);
    }
  };
  const [editName, setEditName] = reactExports.useState(currentUser?.name || "");
  const [editAvatar, setEditAvatar] = reactExports.useState(currentUser?.avatar || "");
  const [editPassword, setEditPassword] = reactExports.useState(currentUser?.password || "");
  const [showEditPassword, setShowEditPassword] = reactExports.useState(false);
  const [editRashi, setEditRashi] = reactExports.useState(currentUser?.rashi || "");
  const [editDob, setEditDob] = reactExports.useState(currentUser?.dob || "");
  const [editBirthTime, setEditBirthTime] = reactExports.useState(currentUser?.birthTime || "");
  const [editBirthPlace, setEditBirthPlace] = reactExports.useState(currentUser?.birthPlace || "");
  const [approxTimeNote, setApproxTimeNote] = reactExports.useState("");
  const [profileSavedToast, setProfileSavedToast] = reactExports.useState(false);
  React.useEffect(() => {
    if (currentUser) {
      setEditName(currentUser.name || "");
      setEditAvatar(currentUser.avatar || "");
      setEditPassword(currentUser.password || "");
      setEditRashi(currentUser.rashi || "");
      setEditDob(currentUser.dob || "");
      setEditBirthTime(currentUser.birthTime || "");
      setEditBirthPlace(currentUser.birthPlace || "");
    }
  }, [currentUser]);
  const showToast = (msg) => {
    setDeleteToast(msg);
    setTimeout(() => {
      setDeleteToast((prev) => prev === msg ? "" : prev);
    }, 3500);
  };
  const handleInlineLogin = async (e) => {
    e.preventDefault();
    const isEmail = quickPhone.includes("@");
    const clean = isEmail ? quickPhone.trim() : cleanMobileNumber(quickPhone);
    if (!clean || !isEmail && clean.length !== 10) {
      setLoginError("कृपया अपना सही 10 अंकों का मोबाइल नंबर या ईमेल दर्ज करें।");
      return;
    }
    if (!quickPassword.trim()) {
      setLoginError("कृपया अपना पासवर्ड दर्ज करें।");
      return;
    }
    setIsLoggingIn(true);
    setLoginError("");
    try {
      const acc = await loginOrSyncUser({
        phone: isEmail ? "" : clean,
        email: isEmail ? clean : "",
        password: quickPassword.trim(),
        mode: "login"
      });
      vedicAudio.playTempleBell(0.65);
      onLoginSuccess(acc);
    } catch (err) {
      if (err instanceof Error && err.message === "WRONG_PASSWORD") {
        setLoginError('गलत पासवर्ड! कृपया सही पासवर्ड दर्ज करें या "पासवर्ड भूल गए?" पर क्लिक करें।');
      } else if (err instanceof Error && err.message === "USER_NOT_FOUND") {
        setLoginError('यह खाता पंजीकृत नहीं है। कृपया पहले "नया खाता (Sign-Up)" टैब से पंजीकरण करें।');
      } else {
        setLoginError("लॉगिन करने में त्रुटि हुई। कृपया पुनः प्रयास करें।");
      }
    } finally {
      setIsLoggingIn(false);
    }
  };
  const handleInlineSignup = async (e) => {
    e.preventDefault();
    const clean = cleanMobileNumber(quickPhone);
    if (clean.length !== 10) {
      setLoginError("कृपया सही 10 अंकों का मोबाइल नंबर दर्ज करें।");
      return;
    }
    if (!quickName.trim()) {
      setLoginError("कृपया अपना नाम दर्ज करें।");
      return;
    }
    if (!quickPassword.trim() || quickPassword.trim().length < 3) {
      setLoginError("कृपया सुरक्षा के लिए कम से कम 3 अक्षरों/अंकों का पासवर्ड दर्ज करें।");
      return;
    }
    setIsLoggingIn(true);
    setLoginError("");
    try {
      const dobVal = editDob || "1995-01-01";
      const resolvedTime = (editBirthTime || "10:00").trim();
      const resolvedPlace = (editBirthPlace || "रुद्रपुर, उत्तराखण्ड").trim();
      const vedic = deriveVedicDetailsForProfile(
        quickName.trim(),
        dobVal,
        resolvedTime,
        resolvedPlace
      );
      const acc = await loginOrSyncUser({
        phone: clean,
        name: quickName.trim(),
        password: quickPassword.trim(),
        mode: "signup",
        dob: dobVal,
        birthTime: resolvedTime,
        birthPlace: resolvedPlace,
        rashi: vedic.rashi,
        lagna: vedic.lagna,
        nakshatra: vedic.nakshatra
      });
      acc.dob = dobVal;
      acc.birthTime = resolvedTime;
      acc.birthPlace = resolvedPlace;
      acc.rashi = vedic.rashi;
      acc.lagna = vedic.lagna;
      acc.nakshatra = vedic.nakshatra;
      persistUserAccountUpdate(acc);
      const newProfile = {
        id: `user-${clean}`,
        name: acc.name,
        relation: "self",
        gender: "male",
        dob: dobVal,
        birthTime: resolvedTime,
        birthPlace: resolvedPlace,
        rashi: vedic.rashi,
        rashiLord: vedic.rashiLord,
        nakshatra: vedic.nakshatra,
        nakshatraPada: vedic.nakshatraPada,
        lagna: vedic.lagna,
        isPrimary: true,
        createdAt: (/* @__PURE__ */ new Date()).toISOString(),
        updatedAt: (/* @__PURE__ */ new Date()).toISOString()
      };
      setActiveProfile(newProfile);
      upsertFamilyMember({
        id: `self-${clean}`,
        name: acc.name,
        relation: "self",
        gender: "male",
        dob: dobVal,
        birthTime: resolvedTime,
        birthPlace: resolvedPlace,
        isPrimary: true
      });
      vedicAudio.playTempleBell(0.65);
      onLoginSuccess(acc);
    } catch {
      setLoginError("खाता बनाने में त्रुटि हुई। कृपया पुनः प्रयास करें।");
    } finally {
      setIsLoggingIn(false);
    }
  };
  const handleVerifyInlineForgotPassword = async (e) => {
    e.preventDefault();
    const clean = cleanMobileNumber(quickPhone);
    if (clean.length !== 10 || !verifyDob) {
      setLoginError("कृपया सही 10 अंकों का मोबाइल नंबर और जन्म तिथि दर्ज करें।");
      return;
    }
    setIsLoggingIn(true);
    setLoginError("");
    try {
      const res = await verifyUserDobForReset(clean, verifyDob);
      setVerifiedUserName(res.name || "");
      setResetStep(2);
      vedicAudio.playTempleBell(0.5);
      showToast("सत्यापन सफल! अब अपना नया पासवर्ड और कन्फर्म पासवर्ड दर्ज करें।");
    } catch (err) {
      setLoginError(
        err instanceof Error ? err.message : "सत्यापन विफल। कृपया सही मोबाइल नंबर और जन्म तिथि दर्ज करें।"
      );
    } finally {
      setIsLoggingIn(false);
    }
  };
  const handleResetInlinePassword = async (e) => {
    e.preventDefault();
    const clean = cleanMobileNumber(quickPhone);
    const trimmedNew = newPassword.trim();
    const trimmedConfirm = confirmPassword.trim();
    if (trimmedNew.length < 3) {
      setLoginError("नया पासवर्ड कम से कम 3 अक्षरों का होना चाहिए।");
      return;
    }
    if (trimmedNew !== trimmedConfirm) {
      setLoginError("नया पासवर्ड और कन्फर्म पासवर्ड दोनों एक समान होने चाहिए।");
      return;
    }
    setIsLoggingIn(true);
    setLoginError("");
    try {
      await saveNewPasswordForUser(clean, verifyDob, trimmedNew);
      vedicAudio.playTempleBell(0.65);
      showToast("आपका नया पासवर्ड सुरक्षित कर दिया गया है! अब नए पासवर्ड से लॉगिन करें।");
      setQuickPhone(clean);
      setQuickPassword(trimmedNew);
      setNewPassword("");
      setConfirmPassword("");
      setResetStep(1);
      setIsForgotPassword(false);
      setUserExists(true);
    } catch (err) {
      setLoginError(err instanceof Error ? err.message : "पासवर्ड रीसेट करने में समस्या आई।");
    } finally {
      setIsLoggingIn(false);
    }
  };
  const applyProfileUpdatesToApp = (nextNameRaw, nextDobRaw, nextTimeRaw, nextPlaceRaw, showSavedFeedback = false) => {
    if (!currentUser) return;
    const resolvedDob = nextDobRaw || currentUser.dob || "1996-03-10";
    const resolvedTime = (nextTimeRaw || currentUser.birthTime || "10:00").trim();
    const resolvedPlace = (nextPlaceRaw || currentUser.birthPlace || "रुद्रपुर, उत्तराखण्ड").trim();
    const resolvedCityLoc = resolveCityCoordinates(resolvedPlace);
    const canonicalPlaceName = WORLDWIDE_PANCHANG_CITIES_MATCH(resolvedPlace, resolvedCityLoc) || resolvedPlace;
    const vedic = deriveVedicDetailsForProfile(
      nextNameRaw.trim() || currentUser.name,
      resolvedDob,
      resolvedTime,
      canonicalPlaceName
    );
    const resolvedRashi = vedic.rashi || editRashi.trim() || "मेष (Aries)";
    setEditRashi(resolvedRashi);
    const updated = {
      ...currentUser,
      name: nextNameRaw.trim() || currentUser.name || "श्रद्धालु यजमान",
      avatar: editAvatar.trim(),
      password: editPassword.trim() || currentUser.password || "",
      rashi: resolvedRashi,
      lagna: vedic.lagna,
      nakshatra: vedic.nakshatra,
      dob: resolvedDob,
      birthTime: resolvedTime,
      birthPlace: canonicalPlaceName,
      localityRudrapur: ""
    };
    onUpdateAccount(updated);
    const syncedProfile = {
      id: updated.phone ? `user-${updated.phone}` : "mera-khata-user",
      name: updated.name,
      relation: "self",
      gender: "male",
      dob: resolvedDob,
      birthTime: resolvedTime,
      birthPlace: canonicalPlaceName,
      rashi: resolvedRashi,
      rashiLord: vedic.rashiLord,
      nakshatra: vedic.nakshatra,
      nakshatraPada: vedic.nakshatraPada,
      lagna: vedic.lagna,
      isPrimary: true,
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      updatedAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    setActiveProfile(syncedProfile);
    if (updated.phone) {
      upsertFamilyMember({
        id: `self-${updated.phone}`,
        name: updated.name,
        relation: "self",
        gender: "male",
        dob: resolvedDob,
        birthTime: resolvedTime,
        birthPlace: canonicalPlaceName,
        isPrimary: true
      });
    }
    window.dispatchEvent(new CustomEvent("panditji_active_profile_updated", { detail: syncedProfile }));
    if (showSavedFeedback) {
      setProfileSavedToast(true);
      vedicAudio.playCrispTempleBell(0.75);
      setTimeout(() => {
        setProfileSavedToast(false);
      }, 3e3);
    }
  };
  function WORLDWIDE_PANCHANG_CITIES_MATCH(rawInput, resolvedLoc) {
    const trimmed = rawInput.trim();
    if (!trimmed) return resolvedLoc.hindiName;
    if (!resolvedLoc.id.startsWith("custom_")) {
      return resolvedLoc.hindiName;
    }
    return trimmed;
  }
  const handleSaveProfile = (e) => {
    e.preventDefault();
    applyProfileUpdatesToApp(editName, editDob, editBirthTime, editBirthPlace, true);
  };
  const handleClearChatHistory = () => {
    if (!currentUser) return;
    clearLocalChatCache();
    onUpdateAccount({
      ...currentUser,
      chatMessages: []
    });
    showToast("आपकी संपूर्ण चैटबॉट हिस्ट्री डिलीट कर दी गई है।");
  };
  const handleDeleteSingleChatMessage = (msgId) => {
    if (!currentUser) return;
    const filtered = (currentUser.chatMessages || []).filter((m) => m.id !== msgId);
    onUpdateAccount({
      ...currentUser,
      chatMessages: filtered
    });
    showToast("चयनित चैट संदेश हटा दिया गया है।");
  };
  const handleClearJaapHistoryOnly = () => {
    if (!currentUser) return;
    clearLocalJaapCache(false);
    onUpdateAccount({
      ...currentUser,
      jaapHistory: []
    });
    showToast("आपकी मंत्र जप सत्र हिस्ट्री डिलीट कर दी गई है।");
  };
  const handleClearAllJaapStatsAndHistory = () => {
    if (!currentUser) return;
    clearLocalJaapCache(true);
    onUpdateAccount({
      ...currentUser,
      jaapStats: { currentCount: 0, completedMalas: 0, lifetimeJaap: 0 },
      jaapHistory: []
    });
    showToast("आपके सभी मंत्र जप काउंट एवं जप हिस्ट्री डिलीट (0) कर दिए गए हैं।");
  };
  const handleDeleteSingleJaapItem = (itemId) => {
    if (!currentUser) return;
    const filtered = (currentUser.jaapHistory || []).filter((item) => item.id !== itemId);
    onUpdateAccount({
      ...currentUser,
      jaapHistory: filtered
    });
    showToast("चयनित मंत्र जप रिकॉर्ड डिलीट कर दिया गया है।");
  };
  const handleClearKundaliHistory = () => {
    if (!currentUser) return;
    clearLocalKundaliCache();
    onUpdateAccount({
      ...currentUser,
      kundaliHistory: []
    });
    showToast("आपकी संपूर्ण कुंडली मिलान हिस्ट्री डिलीट कर दी गई है।");
  };
  const handleDeleteSingleKundaliItem = (itemId) => {
    if (!currentUser) return;
    const filtered = (currentUser.kundaliHistory || []).filter((item) => item.id !== itemId);
    onUpdateAccount({
      ...currentUser,
      kundaliHistory: filtered
    });
    showToast("चयनित कुंडली मिलान रिकॉर्ड डिलीट कर दिया गया है।");
  };
  const handleClearJanamKundaliHistory = () => {
    if (!currentUser) return;
    clearLocalJanamKundaliCache();
    onUpdateAccount({
      ...currentUser,
      janamKundaliHistory: []
    });
    showToast("आपकी संपूर्ण जन्म कुंडली हिस्ट्री डिलीट कर दी गई है।");
  };
  const handleDeleteSingleJanamKundaliItem = (itemId) => {
    if (!currentUser) return;
    const filtered = (currentUser.janamKundaliHistory || []).filter((item) => item.id !== itemId);
    try {
      localStorage.setItem("panditji_sampurn_kundali_history", JSON.stringify(filtered));
    } catch {
    }
    onUpdateAccount({
      ...currentUser,
      janamKundaliHistory: filtered
    });
    showToast("चयनित जन्म कुंडली रिकॉर्ड डिलीट कर दिया गया है।");
  };
  const handleOpenJanamKundaliItem = (item) => {
    try {
      localStorage.setItem("panditji_open_kundali_from_history", JSON.stringify(item));
    } catch {
    }
    onNavigateToTab("janam-kundali");
  };
  const handleOpenKundaliMilanItem = (item) => {
    try {
      localStorage.setItem("panditji_open_milan_from_history", JSON.stringify(item));
    } catch {
    }
    vedicAudio.playCrispTempleBell(0.7);
    showToast(`${item.boyName} एवं ${item.girlName} का 36 गुण मिलान लोड किया जा रहा है...`);
    setTimeout(() => {
      onNavigateToTab("milan");
    }, 250);
  };
  const handleDeleteSingleBooking = (bookingId) => {
    if (onDeleteBookingById) {
      onDeleteBookingById(bookingId);
      showToast("चयनित बुकिंग रिकॉर्ड डिलीट कर दिया गया है।");
    }
  };
  const handleClearAllBookings = () => {
    if (onDeleteAllUserBookings) {
      onDeleteAllUserBookings();
      showToast("आपकी सभी पूजा एवं परामर्श बुकिंग हिस्ट्री डिलीट कर दी गई है।");
    }
  };
  const handleDeleteAllEverything = () => {
    if (!currentUser) return;
    clearLocalChatCache();
    clearLocalJaapCache(true);
    clearLocalKundaliCache();
    clearLocalJanamKundaliCache();
    if (onDeleteAllUserBookings) {
      onDeleteAllUserBookings();
    }
    onUpdateAccount({
      ...currentUser,
      chatMessages: [],
      jaapStats: { currentCount: 0, completedMalas: 0, lifetimeJaap: 0 },
      jaapHistory: [],
      kundaliHistory: [],
      janamKundaliHistory: []
    });
    setConfirmDeleteAll(false);
    showToast("आपके खाते से हर चीज़ की हिस्ट्री (चैट, मंत्र जप, जन्म कुंडली, कुंडली मिलान व बुकिंग) डिलीट कर दी गई है!");
  };
  const userBookings = currentUser ? allBookings.filter(
    (b) => cleanMobileNumber(b.phone) === cleanMobileNumber(currentUser.phone)
  ) : [];
  const userChatMessages = currentUser?.chatMessages || [];
  const userJaapHistory = currentUser?.jaapHistory || [];
  const userKundaliHistory = currentUser?.kundaliHistory || [];
  const userJanamKundaliHistory = (() => {
    const rawList = currentUser ? currentUser.janamKundaliHistory || [] : (() => {
      try {
        const guest = localStorage.getItem("panditji_sampurn_kundali_history");
        return guest && guest !== "undefined" && guest !== "null" ? JSON.parse(guest) : [];
      } catch {
        return [];
      }
    })();
    if (!Array.isArray(rawList)) return [];
    return rawList.filter((item) => Boolean(item && typeof item === "object")).map((item) => {
      try {
        const rep = generateSampurnKundali(
          String(item.name || "श्रद्धालु यजमान"),
          String(item.dob || "1996-03-10"),
          String(item.birthTime || "10:00"),
          String(item.birthPlace || "रुद्रपुर, उत्तराखण्ड")
        );
        const activeDasha = rep.mahadashas.find((m) => m.isCurrent)?.planet || rep.mahadashas[0]?.planet || "गुरु";
        return {
          ...item,
          lagna: rep.panchang.lagnaName,
          moonRashi: rep.panchang.moonRashiName,
          sunRashi: rep.panchang.sunRashiName,
          nakshatra: rep.panchang.nakshatraName,
          nakshatraPada: rep.panchang.nakshatraPada,
          currentMahadasha: activeDasha,
          manglikStatus: rep.doshaAnalysis.manglik.severity,
          luckyGemstone: rep.lucky.ratnaName
        };
      } catch {
        return item;
      }
    });
  })();
  if (!currentUser) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "w-full max-w-3xl mx-auto space-y-4 sm:space-y-6 animate-fadeIn scroll-mt-24", children: [
      deleteToast && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3.5 rounded-2xl bg-emerald-950/90 border border-emerald-500/60 text-emerald-200 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-lg animate-fadeIn", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 text-emerald-400 flex-shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: deleteToast })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AccountAppControlsCard, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          "data-nosnippet": "",
          className: "rounded-3xl bg-gradient-to-br from-[#1b1108] via-[#101726] to-[#0b101d] border-2 border-amber-500/60 p-5 sm:p-8 shadow-2xl",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5 p-3.5 rounded-2xl bg-amber-950/50 border border-amber-500/40 flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-5 h-5 text-amber-400 flex-shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs sm:text-sm text-amber-200 font-semibold", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "मेरा खाता (My Account) सुरक्षित है:" }),
                " अपनी निजी वैदिक हिस्ट्री, मंत्र जप और कुंडली डेटा देखने के लिए कृपया लॉगिन करें।"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left border-b border-amber-800/40 pb-5 mb-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(PanditPortrait, { size: "lg", showBadge: true }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs px-3 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold", children: "आचार्य पण्डित शशांक शर्मा • निजी वैदिक डेटा एवं हिस्ट्री" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl sm:text-3xl font-bold font-vedic text-amber-100 mt-1", children: "लॉगिन एवं साइन-अप (Login & Sign-Up)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs sm:text-sm text-amber-200/80 mt-1", children: [
                  "अपने 10 अंकों के मोबाइल नंबर से लॉगिन या साइन-अप करके अपनी ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "चैटबॉट बातचीत" }),
                  ", ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "मंत्र जप काउंटर" }),
                  ", ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "कुंडली मिलान" }),
                  " और ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "पूजा बुकिंग" }),
                  " की संपूर्ण हिस्ट्री देखें।"
                ] })
              ] })
            ] }),
            !isForgotPassword && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex bg-slate-950/50 p-1.5 rounded-2xl border border-amber-900/30 mb-6 max-w-sm mx-auto", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    setUserExists(true);
                    setLoginError("");
                  },
                  className: `flex-1 py-3 rounded-xl text-sm font-bold transition-all cursor-pointer ${userExists !== false ? "bg-amber-500 text-slate-950 shadow-lg" : "text-slate-400 hover:text-amber-200"}`,
                  children: "लॉगिन (Login)"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    setUserExists(false);
                    setLoginError("");
                  },
                  className: `flex-1 py-3 rounded-xl text-sm font-bold transition-all cursor-pointer ${userExists === false ? "bg-amber-500 text-slate-950 shadow-lg" : "text-slate-400 hover:text-amber-200"}`,
                  children: "नया खाता (Sign-Up)"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: isForgotPassword ? (
              /* FORGOT PASSWORD FLOW */
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 animate-fadeIn", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-amber-900/40 pb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-amber-100 font-bold", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-4 h-4 text-amber-400" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "पासवर्ड रीसेट करें (Forgot Password)" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => {
                        setIsForgotPassword(false);
                        setResetStep(1);
                        setLoginError("");
                      },
                      className: "text-xs font-bold text-amber-400 hover:text-amber-300 underline cursor-pointer",
                      children: "वापस लॉगिन (Back to Login)"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "form",
                  {
                    onSubmit: resetStep === 1 ? handleVerifyInlineForgotPassword : handleResetInlinePassword,
                    className: "space-y-4",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm text-amber-300/85", children: resetStep === 1 ? "अपना पंजीकृत 10 अंकों का मोबाइल नंबर और जन्म तिथि दर्ज करके सत्यापित करें।" : "मोबाइल नंबर और जन्म तिथि सत्यापित हो चुकी है। अब अपना नया पासवर्ड सेट करें।" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold text-amber-300 mb-1.5", children: "मोबाइल नंबर (+91) *" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "input",
                            {
                              type: "tel",
                              required: true,
                              maxLength: 10,
                              disabled: resetStep === 2,
                              placeholder: "9876543210",
                              value: quickPhone,
                              onChange: (e) => {
                                setQuickPhone(e.target.value.replace(/\D/g, "").slice(0, 10));
                                setLoginError("");
                              },
                              className: `w-full px-3.5 py-3 bg-slate-950 border rounded-xl text-amber-100 font-mono text-sm focus:outline-none ${resetStep === 2 ? "border-emerald-500/50 opacity-80 cursor-not-allowed" : "border-amber-600/50 focus:border-amber-400"}`
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold text-amber-300 mb-1.5", children: "पंजीकृत जन्म तिथि (Date of Birth) *" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            VedicDateInput,
                            {
                              required: true,
                              disabled: resetStep === 2,
                              value: verifyDob,
                              onChange: (iso) => {
                                setVerifyDob(iso);
                                setLoginError("");
                              },
                              ariaLabel: "पंजीकृत जन्म तिथि"
                            }
                          )
                        ] })
                      ] }),
                      resetStep === 1 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                        loginError && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 rounded-xl bg-rose-950/80 border border-rose-500/60 text-rose-200 text-xs font-bold", children: loginError }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "button",
                            {
                              type: "button",
                              onClick: () => {
                                setIsForgotPassword(false);
                                setResetStep(1);
                                setLoginError("");
                              },
                              className: "flex-1 py-3 rounded-xl bg-slate-800 text-slate-300 font-bold text-xs sm:text-sm cursor-pointer hover:bg-slate-700 border border-slate-700",
                              children: "वापस लॉगिन (Login)"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "button",
                            {
                              type: "submit",
                              disabled: isLoggingIn,
                              className: "flex-[2] py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm shadow-lg cursor-pointer transition-all active:scale-95",
                              children: isLoggingIn ? "सत्यापन हो रहा है..." : "विवरण सत्यापित करें (Verify Details)"
                            }
                          )
                        ] })
                      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 pt-3 border-t border-emerald-500/30 animate-fadeIn", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-xl bg-emerald-950/90 border border-emerald-500/60 text-emerald-200 text-xs sm:text-sm font-bold flex items-center justify-between gap-2", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 text-emerald-400 flex-shrink-0" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                              "सत्यापन सफल! ",
                              verifiedUserName ? `(${verifiedUserName})` : "",
                              " अब नया पासवर्ड दर्ज करें।"
                            ] })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "button",
                            {
                              type: "button",
                              onClick: () => {
                                setResetStep(1);
                                setLoginError("");
                              },
                              className: "text-xs text-amber-300 underline hover:text-amber-200 cursor-pointer",
                              children: "बदलें"
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold text-amber-300 mb-1.5", children: "नया पासवर्ड (New Password) *" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-4 h-4 text-amber-400 absolute left-3 top-3.5" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "input",
                              {
                                type: showNewPassword ? "text" : "password",
                                required: true,
                                autoFocus: true,
                                minLength: 3,
                                placeholder: "नया पासवर्ड दर्ज करें (कम से कम 3 अक्षर)",
                                value: newPassword,
                                onChange: (e) => {
                                  setNewPassword(e.target.value);
                                  setLoginError("");
                                },
                                className: "w-full pl-9 pr-10 py-3 bg-slate-950 border border-amber-500/70 focus:border-amber-400 rounded-xl text-sm text-amber-100 focus:outline-none"
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "button",
                              {
                                type: "button",
                                onClick: () => setShowNewPassword(!showNewPassword),
                                className: "absolute right-3 top-3.5 text-slate-400 hover:text-amber-200 cursor-pointer",
                                children: showNewPassword ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "w-4 h-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-4 h-4" })
                              }
                            )
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold text-amber-300 mb-1.5", children: "पासवर्ड की पुष्टि करें (Confirm Password) *" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-4 h-4 text-amber-400 absolute left-3 top-3.5" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "input",
                              {
                                type: showNewPassword ? "text" : "password",
                                required: true,
                                minLength: 3,
                                placeholder: "नया पासवर्ड दोबारा दर्ज करें",
                                value: confirmPassword,
                                onChange: (e) => {
                                  setConfirmPassword(e.target.value);
                                  setLoginError("");
                                },
                                className: "w-full pl-9 pr-10 py-3 bg-slate-950 border border-amber-500/70 focus:border-amber-400 rounded-xl text-sm text-amber-100 focus:outline-none"
                              }
                            )
                          ] })
                        ] }),
                        loginError && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 rounded-xl bg-rose-950/80 border border-rose-500/60 text-rose-200 text-xs font-bold", children: loginError }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "button",
                          {
                            type: "submit",
                            disabled: isLoggingIn,
                            className: "w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-black text-sm sm:text-base shadow-xl cursor-pointer transition-all active:scale-95 flex items-center justify-center gap-2",
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-5 h-5" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: isLoggingIn ? "नया पासवर्ड सुरक्षित किया जा रहा है..." : "नया पासवर्ड सुरक्षित करें (Save New Password)" })
                            ]
                          }
                        )
                      ] })
                    ]
                  }
                )
              ] })
            ) : userExists !== false ? (
              /* LOGIN FLOW */
              /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleInlineLogin, className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs sm:text-sm font-bold text-amber-300 mb-1.5", children: "मोबाइल नंबर या ईमेल (Mobile or Email) *" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center bg-slate-950 border-2 border-amber-500/60 rounded-xl overflow-hidden shadow-inner transition-all duration-300 focus-within:border-amber-400", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "text",
                      required: true,
                      placeholder: "9876543210 या example@mail.com",
                      value: quickPhone,
                      onChange: (e) => {
                        setQuickPhone(e.target.value);
                        setLoginError("");
                      },
                      className: "w-full px-4 py-3.5 bg-transparent text-amber-100 font-bold text-base sm:text-lg focus:outline-none"
                    }
                  ) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold text-amber-300", children: "पासवर्ड दर्ज करें (Password) *" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => {
                          setIsForgotPassword(true);
                          setResetStep(1);
                          setLoginError("");
                        },
                        className: "text-xs font-bold text-amber-400 hover:text-amber-300 underline cursor-pointer",
                        children: "पासवर्ड भूल गए? (Forgot Password?)"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-4 h-4 text-amber-400 absolute left-3 top-3.5" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        type: showQuickPassword ? "text" : "password",
                        required: true,
                        placeholder: "अपना पासवर्ड दर्ज करें",
                        value: quickPassword,
                        onChange: (e) => {
                          setQuickPassword(e.target.value);
                          setLoginError("");
                        },
                        className: "w-full pl-9 pr-10 py-3 bg-slate-950 border border-amber-900/60 rounded-xl text-sm text-amber-100 focus:outline-none focus:border-amber-500 shadow-inner"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => setShowQuickPassword(!showQuickPassword),
                        className: "absolute right-3 top-3.5 text-slate-400 hover:text-amber-300 cursor-pointer",
                        children: showQuickPassword ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "w-4 h-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-4 h-4" })
                      }
                    )
                  ] })
                ] }),
                loginError && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 rounded-xl bg-rose-950/60 border border-rose-500/40 text-rose-200 text-xs font-semibold animate-shake text-center", children: loginError }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "submit",
                    disabled: isLoggingIn,
                    className: "w-full py-4 px-6 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 text-white font-black text-sm sm:text-base shadow-xl active:scale-95 flex items-center justify-center gap-2 cursor-pointer",
                    children: [
                      isLoggingIn ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-5 h-5" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "लॉगिन करें (Secure Login)" })
                    ]
                  }
                )
              ] })
            ) : (
              /* SIGN UP FLOW */
              /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleInlineSignup, className: "space-y-4 animate-fadeIn", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold text-amber-300 mb-1", children: "आपका नाम (Full Name) *" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-4 h-4 text-amber-400 absolute left-3 top-3" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "input",
                        {
                          type: "text",
                          required: true,
                          placeholder: "उदा. राजेश शर्मा",
                          value: quickName,
                          onChange: (e) => setQuickName(e.target.value),
                          className: "w-full pl-9 pr-3 py-3 bg-slate-950 border border-amber-900/60 rounded-xl text-sm text-amber-100 focus:outline-none focus:border-amber-500 shadow-inner"
                        }
                      )
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold text-amber-300 mb-1", children: "मोबाइल (+91) *" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-4 h-4 text-amber-400 absolute left-3 top-3" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "input",
                        {
                          type: "tel",
                          required: true,
                          maxLength: 10,
                          placeholder: "9876543210",
                          value: quickPhone,
                          onChange: (e) => setQuickPhone(e.target.value.replace(/\D/g, "").slice(0, 10)),
                          className: "w-full pl-9 pr-3 py-3 bg-slate-950 border border-amber-900/60 rounded-xl text-sm text-amber-100 focus:outline-none focus:border-amber-500 shadow-inner font-mono"
                        }
                      )
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold text-amber-300 mb-1", children: "जन्म तिथि (DOB) *" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      VedicDateInput,
                      {
                        required: true,
                        value: editDob,
                        onChange: (iso) => setEditDob(iso),
                        ariaLabel: "जन्म तिथि (DOB)"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold text-amber-300 mb-1", children: "जन्म का समय (Birth Time) *" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-4 h-4 text-amber-400 absolute left-3 top-3" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "input",
                        {
                          type: "time",
                          required: true,
                          value: editBirthTime,
                          onChange: (e) => {
                            setEditBirthTime(e.target.value);
                            setApproxTimeNote("");
                          },
                          className: "w-full pl-9 pr-3 py-3 bg-slate-950 border border-amber-900/60 rounded-xl text-sm text-amber-100 focus:outline-none focus:border-amber-500 shadow-inner"
                        }
                      )
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-xl bg-amber-950/35 border border-amber-600/35 space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] font-bold text-amber-300 flex items-center gap-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3.5 h-3.5 text-amber-400" }),
                      "सटीक समय याद नहीं है? अनुमानित समय (पहर) चुनें:"
                    ] }),
                    approxTimeNote && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 text-[10px] font-bold text-emerald-300 bg-emerald-950/80 px-2 py-0.5 rounded-full border border-emerald-500/40", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-2.5 h-2.5", strokeWidth: 1.5 }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: approxTimeNote })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-1.5", children: APPROXIMATE_BIRTH_TIME_PRESETS.map((preset) => {
                    const isSelected = editBirthTime === preset.time && (approxTimeNote === preset.note || !approxTimeNote && preset.id !== "unknown");
                    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "button",
                      {
                        type: "button",
                        onClick: () => {
                          setEditBirthTime(preset.time);
                          setApproxTimeNote(preset.note || "");
                        },
                        className: `px-2.5 py-1.5 rounded-lg border text-left transition-all cursor-pointer ${isSelected ? "bg-gradient-to-r from-amber-500/30 to-yellow-500/20 border-amber-400 text-amber-100 shadow-sm" : "bg-slate-950/90 border-amber-900/50 text-slate-300 hover:border-amber-600/60"}`,
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-bold truncate", children: preset.label }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-amber-300/75 truncate", children: preset.subLabel })
                        ]
                      },
                      preset.id
                    );
                  }) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold text-amber-300 mb-1", children: "जन्म का स्थान (Birth Place) *" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-4 h-4 text-amber-400 absolute left-3 top-3" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "input",
                        {
                          type: "text",
                          required: true,
                          list: "inline-signup-birthplace-list",
                          placeholder: "उदा. रुद्रपुर, हल्द्वानी, दिल्ली...",
                          value: editBirthPlace,
                          onChange: (e) => setEditBirthPlace(e.target.value),
                          className: "w-full pl-9 pr-3 py-3 bg-slate-950 border border-amber-900/60 rounded-xl text-sm text-amber-100 focus:outline-none focus:border-amber-500 shadow-inner"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("datalist", { id: "inline-signup-birthplace-list", children: POPULAR_BIRTH_PLACES.map((city) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: city }, city)) })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap items-center gap-1 mt-1.5", children: ["रुद्रपुर, उत्तराखण्ड", "हल्द्वानी, उत्तराखण्ड", "देहरादून, उत्तराखण्ड", "दिल्ली (New Delhi)"].map(
                      (city) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          type: "button",
                          onClick: () => setEditBirthPlace(city),
                          className: `text-[10px] px-2 py-0.5 rounded-md border transition-all cursor-pointer ${editBirthPlace === city ? "bg-amber-500/25 border-amber-400 text-amber-200 font-bold" : "bg-slate-950 border-slate-800 text-slate-400 hover:text-amber-200"}`,
                          children: city.split(",")[0]
                        },
                        city
                      )
                    ) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold text-amber-300 mb-1", children: "पासवर्ड चुनें (Password) *" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-4 h-4 text-amber-400 absolute left-3 top-3" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "input",
                        {
                          type: showQuickPassword ? "text" : "password",
                          required: true,
                          minLength: 3,
                          placeholder: "नया पासवर्ड",
                          value: quickPassword,
                          onChange: (e) => {
                            setQuickPassword(e.target.value);
                            setLoginError("");
                          },
                          className: "w-full pl-9 pr-10 py-3 bg-slate-950 border border-amber-900/60 rounded-xl text-sm text-amber-100 focus:outline-none focus:border-amber-500 shadow-inner"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          type: "button",
                          onClick: () => setShowQuickPassword(!showQuickPassword),
                          className: "absolute right-3 top-3.5 text-slate-400 cursor-pointer",
                          children: showQuickPassword ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "w-4 h-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-4 h-4" })
                        }
                      )
                    ] })
                  ] })
                ] }),
                loginError && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 rounded-xl bg-rose-950/80 border border-rose-500/40 text-rose-200 text-xs font-semibold animate-shake", children: loginError }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "submit",
                    disabled: isLoggingIn,
                    className: "w-full py-4 px-6 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 text-slate-950 font-black text-sm sm:text-base shadow-xl active:scale-95 flex items-center justify-center gap-2 cursor-pointer",
                    children: [
                      isLoggingIn ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-5 h-5 border-2 border-slate-900 border-t-transparent rounded-full animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-5 h-5" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "नया खाता बनाएँ व जन्म विवरण सेट करें (Sign-Up)" })
                    ]
                  }
                )
              ] })
            ) })
          ]
        }
      )
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "w-full max-w-full overflow-x-hidden space-y-4 sm:space-y-6 animate-fadeIn scroll-mt-24", children: [
    deleteToast && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3.5 rounded-2xl bg-emerald-950/90 border border-emerald-500/60 text-emerald-200 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-lg animate-fadeIn", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 text-emerald-400 flex-shrink-0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: deleteToast })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AccountAppControlsCard, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-gradient-to-r from-amber-950/90 via-[#191108] to-[#0e1525] border-2 border-amber-500/60 p-4 sm:p-6 shadow-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row items-start md:items-center justify-between gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3.5 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(UserAvatar, { currentUser, size: "lg" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-[11px] font-bold", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-3 h-3" }),
                " पासवर्ड सुरक्षित लॉगिन सक्रिय"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-mono font-bold text-amber-300 bg-slate-950/80 px-2.5 py-0.5 rounded-lg border border-amber-700/40", children: [
                "+91 ",
                currentUser.phone
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl sm:text-2xl font-bold font-vedic text-amber-100 mt-1 truncate", children: currentUser.name }),
            currentUser.dob ? (() => {
              const userVedic = deriveVedicDetailsForProfile(
                currentUser.name,
                currentUser.dob,
                currentUser.birthTime || "10:30",
                currentUser.birthPlace || "रुद्रपुर, उत्तराखण्ड"
              );
              return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-1.5 mt-1.5 text-[11px]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-500/20 border border-amber-400/50 text-amber-100 font-bold", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "trishul", className: "w-3 h-3 text-amber-300" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    "लग्न: ",
                    userVedic.lagna,
                    " (",
                    userVedic.lagnaLord,
                    ")"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-indigo-500/25 border border-indigo-400/50 text-indigo-100 font-bold", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "w-3 h-3 text-indigo-300", strokeWidth: 1.5 }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    "राशि: ",
                    userVedic.rashi,
                    " (",
                    userVedic.rashiLord,
                    ")"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-purple-500/25 border border-purple-400/50 text-purple-100 font-bold", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3 h-3 text-purple-300", strokeWidth: 1.5 }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    "नक्षत्र: ",
                    userVedic.nakshatra,
                    " (चरण ",
                    userVedic.nakshatraPada,
                    ")"
                  ] })
                ] })
              ] });
            })() : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs text-amber-300/80", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Lightbulb, { className: "w-3.5 h-3.5 text-amber-400 shrink-0", strokeWidth: 1.5 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "सटीक जन्म लग्न व राशि हेतु नीचे अपनी जन्म तिथि व समय दर्ज करें।" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 mt-1.5 text-[11px] text-amber-200/90", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-950/75 border border-amber-700/40", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-3 h-3 text-amber-400" }),
                "जन्म स्थान: ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: currentUser.birthPlace || "दर्ज नहीं" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-950/75 border border-amber-700/40", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3 text-amber-400" }),
                "जन्म समय: ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: currentUser.birthTime || "दर्ज नहीं" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-950/75 border border-amber-700/40", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-3 h-3 text-amber-400" }),
                "जन्म तिथि: ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: currentUser.dob || "दर्ज नहीं (अपडेट करें)" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-amber-300/80 mt-1", children: "यहाँ से आप अपनी व्यक्तिगत जन्म जानकारी (स्थान व समय) बदल सकते हैं और हिस्ट्री प्रबंधित कर सकते हैं" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 w-full md:w-auto flex-shrink-0", children: [
          !confirmDeleteAll ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => setConfirmDeleteAll(true),
              className: "px-3.5 py-2 rounded-xl bg-rose-950/90 hover:bg-rose-900 border border-rose-500/50 text-rose-200 text-xs font-bold cursor-pointer flex items-center gap-1.5",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3.5 h-3.5 text-rose-400" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "सारी हिस्ट्री डिलीट करें" })
              ]
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 bg-rose-950 border border-rose-500 rounded-xl p-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: handleDeleteAllEverything,
                className: "px-2.5 py-1 rounded-lg bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold cursor-pointer",
                children: "हाँ, सब डिलीट करें"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setConfirmDeleteAll(false),
                className: "px-2 py-1 rounded-lg bg-slate-800 text-slate-300 text-xs cursor-pointer",
                children: "रद्द करें"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: onOpenLoginModal,
              className: "px-3.5 py-2 rounded-xl bg-amber-900/70 hover:bg-amber-800 border border-amber-500/40 text-amber-100 text-xs font-bold cursor-pointer flex items-center gap-1.5",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-3.5 h-3.5 text-amber-300" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "नंबर बदलें" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: onLogout,
              className: "px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 text-xs font-bold cursor-pointer flex items-center gap-1.5",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "लॉगआउट" })
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 p-3.5 sm:p-4 rounded-2xl bg-[#14100a] border border-amber-500/40 shadow-md", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-4 h-4 text-emerald-400 flex-shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-bold text-amber-200", children: [
              "सत्यापित निजी खाता: ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-yellow-300", children: currentUser.name }),
              " (+91 ",
              currentUser.phone,
              ")"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-[11px] text-emerald-400/90 font-medium", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-3.5 h-3.5 text-emerald-400 shrink-0", strokeWidth: 1.5 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "निजी सत्र सक्रिय — समस्त कुंडली व मिलान डेटा केवल आपके खाते में सुरक्षित है" })
          ] })
        ] }),
        cleanMobileNumber(currentUser.phone) === "8958499979" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 pt-3 border-t border-amber-500/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 sm:p-3.5 rounded-2xl bg-gradient-to-r from-[#1a0d2a] via-[#1b1106] to-[#0a1d17] border-2 border-amber-400/70 shadow-lg space-y-2.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-8 h-8 rounded-xl bg-gradient-to-br from-amber-400 to-yellow-500 text-slate-950 flex items-center justify-center font-black text-sm shadow-sm shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Crown, { className: "w-4 h-4 text-slate-950", strokeWidth: 1.5 }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-xs sm:text-sm font-black text-yellow-300 font-vedic flex items-center gap-1.5 flex-wrap", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "एडमिन स्पेशल ऑप्शन्स नियंत्रण (Hide / Unhide Admin Options)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-400/50 text-emerald-300 text-[10px] font-extrabold", children: "+91 8958499979" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] sm:text-[11px] text-amber-200/85", children: "यहाँ से आप किसी भी एडमिन स्पेशल ऑप्शन को १-क्लिक में छुपा (Hide) या दिखा (Unhide) सकते हैं:" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => toggleAllAdminOptions(),
                className: `px-3 py-1.5 rounded-xl font-extrabold text-xs flex items-center gap-1.5 border transition-all cursor-pointer shadow-md ${adminVisibility.masterVisible ? "bg-rose-950/90 hover:bg-rose-900 border-rose-400/70 text-rose-200" : "bg-gradient-to-r from-emerald-400 to-amber-400 text-slate-950 border-yellow-200"}`,
                children: adminVisibility.masterVisible ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "w-3.5 h-3.5 text-rose-300" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "सभी एडमिन ऑप्शन्स छुपाएं (Hide All)" })
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-3.5 h-3.5 text-slate-950" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "सभी एडमिन ऑप्शन्स दिखाएं (Unhide All)" })
                ] })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => updateAdminVisibility({
                  masterVisible: true,
                  showFestiveEngine: !(adminVisibility.masterVisible && adminVisibility.showFestiveEngine)
                }),
                className: `p-2 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between gap-1.5 ${adminVisibility.masterVisible && adminVisibility.showFestiveEngine ? "bg-emerald-950/85 border-emerald-400/70 text-emerald-200 font-extrabold" : "bg-slate-950/90 border-slate-700 text-slate-400 hover:border-amber-500/50 font-semibold"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] truncate flex items-center gap-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Palette, { className: "w-3 h-3 shrink-0", strokeWidth: 1.5 }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "१२-माह पर्व थीम इंजन" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] opacity-85 flex items-center gap-1", children: adminVisibility.masterVisible && adminVisibility.showFestiveEngine ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-2.5 h-2.5 shrink-0", strokeWidth: 1.5 }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "दिख रहा है (Visible)" })
                    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "w-2.5 h-2.5 shrink-0", strokeWidth: 1.5 }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "छुपा हुआ है (Hidden)" })
                    ] }) })
                  ] }),
                  adminVisibility.masterVisible && adminVisibility.showFestiveEngine ? /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-3.5 h-3.5 text-emerald-400 shrink-0" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "w-3.5 h-3.5 text-slate-500 shrink-0" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => updateAdminVisibility({
                  masterVisible: true,
                  showGeminiKeyManager: !(adminVisibility.masterVisible && adminVisibility.showGeminiKeyManager)
                }),
                className: `p-2 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between gap-1.5 ${adminVisibility.masterVisible && adminVisibility.showGeminiKeyManager ? "bg-emerald-950/85 border-emerald-400/70 text-emerald-200 font-extrabold" : "bg-slate-950/90 border-slate-700 text-slate-400 hover:border-amber-500/50 font-semibold"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] truncate flex items-center gap-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Key, { className: "w-3 h-3 shrink-0", strokeWidth: 1.5 }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "१२-स्लॉट Gemini AI Keys" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] opacity-85 flex items-center gap-1", children: adminVisibility.masterVisible && adminVisibility.showGeminiKeyManager ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-2.5 h-2.5 shrink-0", strokeWidth: 1.5 }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "दिख रहा है (Visible)" })
                    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "w-2.5 h-2.5 shrink-0", strokeWidth: 1.5 }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "छुपा हुआ है (Hidden)" })
                    ] }) })
                  ] }),
                  adminVisibility.masterVisible && adminVisibility.showGeminiKeyManager ? /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-3.5 h-3.5 text-emerald-400 shrink-0" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "w-3.5 h-3.5 text-slate-500 shrink-0" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => updateAdminVisibility({
                  masterVisible: true,
                  showDownloadCenter: !(adminVisibility.masterVisible && adminVisibility.showDownloadCenter)
                }),
                className: `p-2 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between gap-1.5 ${adminVisibility.masterVisible && adminVisibility.showDownloadCenter ? "bg-emerald-950/85 border-emerald-400/70 text-emerald-200 font-extrabold" : "bg-slate-950/90 border-slate-700 text-slate-400 hover:border-amber-500/50 font-semibold"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] truncate flex items-center gap-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "w-3 h-3 shrink-0", strokeWidth: 1.5 }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "एडमिन फाइल डाउनलोड केंद्र" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] opacity-85 flex items-center gap-1", children: adminVisibility.masterVisible && adminVisibility.showDownloadCenter ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-2.5 h-2.5 shrink-0", strokeWidth: 1.5 }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "दिख रहा है (Visible)" })
                    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "w-2.5 h-2.5 shrink-0", strokeWidth: 1.5 }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "छुपा हुआ है (Hidden)" })
                    ] }) })
                  ] }),
                  adminVisibility.masterVisible && adminVisibility.showDownloadCenter ? /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-3.5 h-3.5 text-emerald-400 shrink-0" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "w-3.5 h-3.5 text-slate-500 shrink-0" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 p-3.5 sm:p-4 rounded-2xl bg-gradient-to-br from-[#120a1f] via-[#1a0f07] to-[#0a141d] border-2 border-amber-400/80 shadow-[0_8px_25px_rgba(245,158,11,0.2)] space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-2 border-b border-amber-500/30 pb-2.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-8 h-8 rounded-xl bg-gradient-to-tr from-amber-500 via-orange-500 to-yellow-400 text-slate-950 flex items-center justify-center font-black text-sm shadow-md shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-4 h-4 text-slate-950", strokeWidth: 1.5 }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-xs sm:text-sm font-black text-amber-100 font-vedic flex items-center gap-1.5 flex-wrap", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Google AdSense स्थायी सुरक्षा एवं अपडेट निर्देश (Developer Mandate)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 rounded-full bg-amber-500/25 border border-amber-400/50 text-amber-200 text-[10px] font-extrabold", children: "गोपनीय: केवल एडमिन व AI डेवलपर" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] sm:text-[11px] text-amber-200/85", children: "यह सख्त निर्देश सुनिश्चित करता है कि भविष्य में किसी भी नए अपडेट से Google AdSense में कोई बाधा न आए:" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 text-[10px] font-mono font-bold text-emerald-300 bg-emerald-950/80 border border-emerald-500/40 px-2.5 py-1 rounded-full", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-3 h-3", strokeWidth: 1.5 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Active Publisher: pub-9661029896137686" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs text-slate-200", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 rounded-xl bg-slate-950/80 border border-amber-500/30 space-y-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-extrabold text-amber-300 flex items-center gap-1 text-[11px] sm:text-xs", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3.5 h-3.5 text-emerald-400 shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "१. AdSense हेड स्क्रिप्ट सुरक्षित रहेगी (Head Script Guard)" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-slate-300 leading-relaxed break-words [overflow-wrap:anywhere]", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "text-amber-200 bg-slate-900 px-1 py-0.5 rounded text-[10px] break-all", children: "index.html" }),
                  " के <head> में लगा आधिकारिक AdSense स्क्रिप्ट टैग कभी हटाया या बदला नहीं जाएगा। यह किसी भी टाइमआउट या बॉट-ब्लॉकर के बिना सीधे लोड रहेगा।"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 rounded-xl bg-slate-950/80 border border-amber-500/30 space-y-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-extrabold text-amber-300 flex items-center gap-1 text-[11px] sm:text-xs", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3.5 h-3.5 text-emerald-400 shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "२. लीगल पॉलिसी पेजेस अक्षुण्ण रहेंगे (Policy Pages Guard)" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-slate-300 leading-relaxed break-words [overflow-wrap:anywhere]", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "text-amber-200 bg-slate-900 px-1 py-0.5 rounded text-[10px] break-all", children: "/privacy-policy" }),
                  ", ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "text-amber-200 bg-slate-900 px-1 py-0.5 rounded text-[10px] break-all", children: "/about-us" }),
                  ", ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "text-amber-200 bg-slate-900 px-1 py-0.5 rounded text-[10px] break-all", children: "/terms-and-conditions" }),
                  ", ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "text-amber-200 bg-slate-900 px-1 py-0.5 rounded text-[10px] break-all", children: "/contact-us" }),
                  " और ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "text-amber-200 bg-slate-900 px-1 py-0.5 rounded text-[10px] break-all", children: "/disclaimer" }),
                  " हमेशा संपूर्ण प्री-रेंडर्ड टेक्स्ट व Google DART कुकी प्रकटीकरण के साथ रहेंगे।"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 rounded-xl bg-slate-950/80 border border-amber-500/30 space-y-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-extrabold text-amber-300 flex items-center gap-1 text-[11px] sm:text-xs", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3.5 h-3.5 text-emerald-400 shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "३. ads.txt निरंतर सत्यापित रहेगी (ads.txt Integrity)" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-slate-300 leading-relaxed break-words [overflow-wrap:anywhere]", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "text-amber-200 bg-slate-900 px-1 py-0.5 rounded text-[10px] break-all", children: "public/ads.txt" }),
                  " में ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "text-emerald-300 bg-slate-900 px-1 py-0.5 rounded text-[10px] break-all", children: "google.com, pub-9661029896137686, DIRECT, f08c47fec0942fa0" }),
                  " हर बिल्ड में स्वतः सिंक रहेगी।"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 rounded-xl bg-slate-950/80 border border-amber-500/30 space-y-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-extrabold text-amber-300 flex items-center gap-1 text-[11px] sm:text-xs", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3.5 h-3.5 text-emerald-400 shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "४. कभी भी अधूरा कंटेंट नहीं रहेगा (No Thin Content)" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-slate-300 leading-relaxed break-words [overflow-wrap:anywhere]", children: [
                  "भविष्य में किसी भी नए फीचर या पेज को जोड़ते समय उसका विस्तृत स्टैटिक आर्टिकल (",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "text-amber-200 bg-slate-900 px-1 py-0.5 rounded text-[10px] break-all", children: "routeArticleBodies.ts" }),
                  ") भी लिखा जाएगा, जिससे गूगल बॉट को हमेशा ५००+ शब्दों का उच्च स्तरीय कंटेंट मिले।"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 rounded-xl bg-slate-950/80 border border-amber-500/30 space-y-1 md:col-span-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-extrabold text-amber-300 flex items-center gap-1 text-[11px] sm:text-xs", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3.5 h-3.5 text-emerald-400 shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "५. Google Search Console एवं Googlebot इंडेक्सिंग सुरक्षा (Search Console Guard)" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-slate-300 leading-relaxed break-words [overflow-wrap:anywhere]", children: [
                  "Search Console के दोनों वेरिफिकेशन मेथड्स सक्रिय हैं — HTML टैग (",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "text-amber-200 bg-slate-900 px-1 py-0.5 rounded text-[10px] break-all", children: "u_jaTAPmJDavEHwJ0JP4x24F57dOwc_cJmD65DcEsxY" }),
                  " एवं ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "text-amber-200 bg-slate-900 px-1 py-0.5 rounded text-[10px] break-all", children: "googlea0e64484b80e13d1" }),
                  ") तथा HTML फाइल (",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "text-amber-200 bg-slate-900 px-1 py-0.5 rounded text-[10px] break-all", children: "googlea0e64484b80e13d1.html" }),
                  ")। सभी १११ कैनोनिकल पेजों का ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "text-emerald-300 bg-slate-900 px-1 py-0.5 rounded text-[10px] break-all", children: "sitemap.xml" }),
                  ", ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "text-emerald-300 bg-slate-900 px-1 py-0.5 rounded text-[10px] break-all", children: "feed.xml" }),
                  " और ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "text-emerald-300 bg-slate-900 px-1 py-0.5 rounded text-[10px] break-all", children: "robots.txt" }),
                  " Googlebot व Mediapartners-Google के लिए पूर्णतः अनुकूलित हैं।"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 rounded-xl bg-amber-950/40 border border-amber-500/40 flex items-center gap-2 text-[11px] text-amber-200", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-4 h-4 text-yellow-400 shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "AI डेवलपर इंजन के लिए स्थायी वचनबद्धता:" }),
                " जब भी आप इस ऐप में कोई नया फीचर, बटन या डिज़ाइन अपडेट करवाएंगे, AI इंजन पहले यह सुनिश्चित करेगा कि Google AdSense कोड, ads.txt और पॉलिसी पेजेस में रत्ती भर भी व्यवधान न आए।"
              ] })
            ] })
          ] })
        ] }) })
      ] }),
      cleanMobileNumber(currentUser.phone) === "8958499979" && adminVisibility.masterVisible && adminVisibility.showDownloadCenter && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-emerald-950/95 via-[#0f241d] to-amber-950/90 border-2 border-emerald-400/80 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-400/50 text-emerald-300 text-[11px] font-extrabold", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Crown, { className: "w-3.5 h-3.5 text-emerald-300", strokeWidth: 1.5 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "एडमिन फाइल डाउनलोड केंद्र (केवल +91 8958499979)" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => updateAdminVisibility({ showDownloadCenter: false }),
                className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-rose-950/80 hover:bg-rose-900 border border-rose-500/40 text-rose-200 text-[10px] font-bold cursor-pointer",
                title: "फाइल डाउनलोड केंद्र छुपाएं",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "w-3 h-3" }),
                  " छुपाएं (Hide)"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-sm sm:text-base font-extrabold font-vedic text-amber-100 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "w-4 h-4 text-emerald-300 shrink-0", strokeWidth: 1.5 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "एडमिन GitHub फाइल डाउनलोड केंद्र (v103 • 7-Pillar Zero-Defect Build)" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-emerald-200/90 leading-relaxed", children: [
            "मोबाइल से सीधे GitHub ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "main" }),
            " रूट पर अपलोड के लिए नवीनतम ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "v103 बिल्ड" }),
            " की सभी अपडेटेड फाइलें (",
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "index.html" }),
            ", ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "404.html" }),
            ", ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "app-engine.txt" }),
            ", ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "middleware.js" }),
            ", ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "vercel.json" }),
            ", ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "robots.txt" }),
            ", ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "sw.js" }),
            ", ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "sitemap.xml" }),
            ", ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "feed.xml" }),
            ", ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "seo-data.json" }),
            ", ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "shell-runtime.js" }),
            ", ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "admin-control.js" }),
            ") बिना किसी ZIP के 1-टैप डाउनलोड हेतु तैयार हैं।"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-2 flex-shrink-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => {
                window.dispatchEvent(new CustomEvent("panditji_open_standalone_download"));
              },
              className: "w-full sm:w-auto px-4 py-3 rounded-xl bg-gradient-to-r from-emerald-500 via-emerald-400 to-amber-400 hover:from-emerald-400 hover:to-yellow-300 text-slate-950 font-black text-xs sm:text-sm shadow-lg shadow-emerald-500/25 transition-all cursor-pointer flex items-center justify-center gap-2 whitespace-nowrap",
              title: "Open Admin File Download Center Modal",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "w-4 h-4 text-slate-950", strokeWidth: 1.5 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "एडमिन फाइल डाउनलोड केंद्र खोलें" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "/download-center?admin=8958499979",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "w-full sm:w-auto px-3.5 py-3 rounded-xl bg-slate-900/95 hover:bg-slate-800 border border-emerald-400/60 text-emerald-200 font-bold text-xs transition-all cursor-pointer flex items-center justify-center gap-1.5 whitespace-nowrap no-underline",
              title: "Open Full-Screen Admin Download Center",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "w-3.5 h-3.5 text-emerald-300", strokeWidth: 1.5 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "फुल-स्क्रीन डाउनलोड पेज" })
              ]
            }
          )
        ] })
      ] }),
      (() => {
        const mandirState = getInitialSadhanaState();
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-amber-950/70 via-[#1c1208] to-slate-950 border border-[#d4af37]/50 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-md", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-500 text-slate-950 flex items-center justify-center font-bold text-lg flex-shrink-0 shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "diya", className: "w-5 h-5 text-slate-950" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs sm:text-sm font-bold font-vedic text-yellow-300", children: "डिजिटल मंदिर भक्ति साधना रिकॉर्ड" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.2 rounded-full text-[10px] font-bold bg-amber-500/20 text-yellow-300 border border-amber-400/40", children: "नित्य संकल्प" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-amber-200/80 mt-0.5 flex flex-wrap items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "w-3.5 h-3.5 text-amber-400", strokeWidth: 1.5 }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("b", { children: [
                      mandirState.streakDays,
                      " दिन"
                    ] }),
                    " लगातार स्ट्रीक"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "•" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "om", className: "w-3.5 h-3.5 text-amber-400" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    "कुल ",
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("b", { children: [
                      mandirState.totalLifetimeSadhana,
                      " बार"
                    ] }),
                    " साधना संपन्न"
                  ] })
                ] })
              ] })
            ] })
          ] }),
          onNavigateToTab && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => onNavigateToTab("mandir"),
              className: "w-full sm:w-auto px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-300 text-slate-950 font-bold text-xs shadow-sm transition-all cursor-pointer flex items-center justify-center gap-1.5",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Landmark, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "मंदिर दर्शन करें" })
              ]
            }
          )
        ] });
      })(),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mt-5 pt-4 border-t border-amber-800/40", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            onClick: () => setSubTab("chat"),
            className: `p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${subTab === "chat" ? "bg-amber-500/20 border-amber-400" : "bg-slate-950/80 border-amber-900/40 hover:border-amber-600/50"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] text-amber-300 flex items-center gap-1 font-semibold", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-3.5 h-3.5 text-amber-400 flex-shrink-0" }),
                  " चैटबॉट हिस्ट्री"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl sm:text-2xl font-extrabold font-mono text-amber-100 mt-1", children: userChatMessages.length })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-1 mt-2 pt-1.5 border-t border-slate-800/80", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-slate-400", children: "संदेश" }),
                userChatMessages.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: (e) => {
                      e.stopPropagation();
                      handleClearChatHistory();
                    },
                    className: "text-[10px] text-rose-400 hover:text-rose-300 font-bold flex items-center gap-0.5 cursor-pointer",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3 h-3" }),
                      " डिलीट"
                    ]
                  }
                )
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            onClick: () => setSubTab("jaap"),
            className: `p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${subTab === "jaap" ? "bg-amber-500/20 border-amber-400" : "bg-slate-950/80 border-amber-900/40 hover:border-amber-600/50"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] text-amber-300 flex items-center gap-1 font-semibold", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "w-3.5 h-3.5 text-yellow-400 flex-shrink-0" }),
                  " कुल मंत्र जप"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl sm:text-2xl font-extrabold font-mono text-yellow-400 mt-1", children: currentUser.jaapStats?.lifetimeJaap || 0 })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-1 mt-2 pt-1.5 border-t border-slate-800/80", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-slate-400 truncate", children: [
                  userJaapHistory.length,
                  " सत्र"
                ] }),
                ((currentUser.jaapStats?.lifetimeJaap || 0) > 0 || userJaapHistory.length > 0) && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: (e) => {
                      e.stopPropagation();
                      handleClearAllJaapStatsAndHistory();
                    },
                    className: "text-[10px] text-rose-400 hover:text-rose-300 font-bold flex items-center gap-0.5 cursor-pointer flex-shrink-0",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3 h-3" }),
                      " डिलीट"
                    ]
                  }
                )
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            onClick: () => setSubTab("janam_kundali"),
            className: `p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${subTab === "janam_kundali" ? "bg-amber-500/20 border-amber-400" : "bg-slate-950/80 border-amber-900/40 hover:border-amber-600/50"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] text-amber-300 flex items-center gap-1 font-semibold", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Compass, { className: "w-3.5 h-3.5 text-amber-400 flex-shrink-0" }),
                  " सम्पूर्ण कुंडली"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl sm:text-2xl font-extrabold font-mono text-amber-200 mt-1", children: userJanamKundaliHistory.length })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-1 mt-2 pt-1.5 border-t border-slate-800/80", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-slate-400", children: "जन्म पत्रिका" }),
                userJanamKundaliHistory.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: (e) => {
                      e.stopPropagation();
                      handleClearJanamKundaliHistory();
                    },
                    className: "text-[10px] text-rose-400 hover:text-rose-300 font-bold flex items-center gap-0.5 cursor-pointer",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3 h-3" }),
                      " डिलीट"
                    ]
                  }
                )
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            onClick: () => setSubTab("milan"),
            className: `p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${subTab === "milan" ? "bg-amber-500/20 border-amber-400" : "bg-slate-950/80 border-amber-900/40 hover:border-amber-600/50"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] text-amber-300 flex items-center gap-1 font-semibold", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(HeartHandshake, { className: "w-3.5 h-3.5 text-rose-400 flex-shrink-0" }),
                  " कुंडली मिलान"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl sm:text-2xl font-extrabold font-mono text-rose-300 mt-1", children: userKundaliHistory.length })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-1 mt-2 pt-1.5 border-t border-slate-800/80", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-slate-400", children: "मिलान रिपोर्ट्स" }),
                userKundaliHistory.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: (e) => {
                      e.stopPropagation();
                      handleClearKundaliHistory();
                    },
                    className: "text-[10px] text-rose-400 hover:text-rose-300 font-bold flex items-center gap-0.5 cursor-pointer",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3 h-3" }),
                      " डिलीट"
                    ]
                  }
                )
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            onClick: () => setSubTab("bookings"),
            className: `p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${subTab === "bookings" ? "bg-amber-500/20 border-amber-400" : "bg-slate-950/80 border-amber-900/40 hover:border-amber-600/50"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] text-amber-300 flex items-center gap-1 font-semibold", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-3.5 h-3.5 text-emerald-400 flex-shrink-0" }),
                  " पूजा बुकिंग"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl sm:text-2xl font-extrabold font-mono text-emerald-400 mt-1", children: userBookings.length })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-1 mt-2 pt-1.5 border-t border-slate-800/80", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-slate-400", children: "संकल्प रिकॉर्ड" }),
                userBookings.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: (e) => {
                      e.stopPropagation();
                      handleClearAllBookings();
                    },
                    className: "text-[10px] text-rose-400 hover:text-rose-300 font-bold flex items-center gap-0.5 cursor-pointer",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3 h-3" }),
                      " डिलीट"
                    ]
                  }
                )
              ] })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 overflow-x-auto scrollbar-none pb-1", children: [
      { id: "all", label: "मेरा डेटा व हिस्ट्री नियंत्रण", icon: User },
      { id: "chat", label: `चैटबॉट हिस्ट्री (${userChatMessages.length})`, icon: MessageCircle },
      { id: "jaap", label: `मंत्र जप हिस्ट्री (${userJaapHistory.length})`, icon: Flame },
      {
        id: "janam_kundali",
        label: `सम्पूर्ण कुंडली हिस्ट्री (${userJanamKundaliHistory.length})`,
        icon: Compass
      },
      { id: "milan", label: `कुंडली मिलान हिस्ट्री (${userKundaliHistory.length})`, icon: HeartHandshake },
      { id: "bookings", label: `पूजा बुकिंग हिस्ट्री (${userBookings.length})`, icon: Calendar }
    ].map((item) => {
      const IconComp = item.icon;
      const active = subTab === item.id;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: () => setSubTab(item.id),
          className: `px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 flex-shrink-0 cursor-pointer transition-all border ${active ? "bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 border-amber-300 shadow-lg" : "bg-[#0e1526] hover:bg-slate-800 text-amber-200 border-amber-900/40"}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(IconComp, { className: "w-4 h-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item.label })
          ]
        },
        item.id
      );
    }) }),
    subTab === "all" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5 bg-[#0e1526] border border-amber-800/40 rounded-2xl p-4 sm:p-6 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-slate-800 pb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-base sm:text-lg font-bold font-vedic text-amber-100 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-4 h-4 text-amber-400" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "मोबाइल नंबर से जुड़ी आपकी व्यक्तिगत जानकारी" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-slate-400 mt-0.5", children: [
            "यह जानकारी आपके मोबाइल नंबर (+91 ",
            currentUser.phone,
            ") पर सुरक्षित रहेगी।"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSaveProfile, className: "space-y-3.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold text-amber-300 mb-1", children: "आपका नाम (Yajman Name)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                value: editName,
                onChange: (e) => setEditName(e.target.value),
                className: "w-full px-3.5 py-2.5 bg-slate-950 border border-amber-900/60 rounded-xl text-xs sm:text-sm text-amber-100"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold text-amber-300 mb-1", children: "आपका पासवर्ड (Password)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: showEditPassword ? "text" : "password",
                    placeholder: "सुरक्षित पासवर्ड",
                    value: editPassword,
                    onChange: (e) => setEditPassword(e.target.value),
                    className: "w-full px-3 pr-8 py-2.5 bg-slate-950 border border-amber-900/60 rounded-xl text-xs sm:text-sm text-amber-100"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => setShowEditPassword(!showEditPassword),
                    className: "absolute right-2.5 top-2.5 text-slate-400 hover:text-amber-300 cursor-pointer",
                    children: showEditPassword ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-3.5 h-3.5" })
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold text-amber-300 mb-1", children: "राशि (Rashi)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  placeholder: "उदा. मेष / सिंह",
                  value: editRashi,
                  onChange: (e) => setEditRashi(e.target.value),
                  className: "w-full px-3 py-2.5 bg-slate-950 border border-amber-900/60 rounded-xl text-xs sm:text-sm text-amber-100"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold text-amber-300 mb-1", children: "जन्म तिथि (DOB)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                VedicDateInput,
                {
                  compact: true,
                  value: editDob,
                  onChange: (nextDob) => {
                    setEditDob(nextDob);
                    if (nextDob) {
                      applyProfileUpdatesToApp(
                        editName || currentUser.name,
                        nextDob,
                        editBirthTime || "10:00",
                        editBirthPlace || "रुद्रपुर, उत्तराखण्ड",
                        false
                      );
                    }
                  },
                  ariaLabel: "जन्म तिथि (DOB)"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold text-amber-300 mb-1", children: "जन्म का समय (Birth Time)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "time",
                  value: editBirthTime,
                  onChange: (e) => {
                    const nextTime = e.target.value;
                    setEditBirthTime(nextTime);
                    setApproxTimeNote("");
                    if (editDob && nextTime) {
                      applyProfileUpdatesToApp(
                        editName || currentUser.name,
                        editDob,
                        nextTime,
                        editBirthPlace || "रुद्रपुर, उत्तराखण्ड",
                        false
                      );
                    }
                  },
                  className: "w-full px-3 py-2 bg-slate-950 border border-amber-900/60 rounded-xl text-xs text-amber-100"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-xl bg-amber-950/35 border border-amber-600/35 space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] font-bold text-amber-300 flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3.5 h-3.5 text-amber-400" }),
                "जन्म का समय याद नहीं है? अनुमानित समय (पहर) चुनें:"
              ] }),
              approxTimeNote && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 text-[10px] font-bold text-emerald-300 bg-emerald-950/80 px-2 py-0.5 rounded-full border border-emerald-500/40", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-2.5 h-2.5", strokeWidth: 1.5 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: approxTimeNote })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-1.5", children: APPROXIMATE_BIRTH_TIME_PRESETS.map((preset) => {
              const isSelected = editBirthTime === preset.time && (approxTimeNote === preset.note || !approxTimeNote && preset.id !== "unknown");
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    setEditBirthTime(preset.time);
                    setApproxTimeNote(preset.note || "");
                    if (editDob) {
                      applyProfileUpdatesToApp(
                        editName || currentUser.name,
                        editDob,
                        preset.time,
                        editBirthPlace || "रुद्रपुर, उत्तराखण्ड",
                        false
                      );
                    }
                  },
                  className: `px-2 py-1.5 rounded-lg border text-left transition-all cursor-pointer ${isSelected ? "bg-gradient-to-r from-amber-500/30 to-yellow-500/20 border-amber-400 text-amber-100 shadow-sm" : "bg-slate-950/90 border-amber-900/50 text-slate-300 hover:border-amber-600/60"}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-bold truncate", children: preset.label }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-amber-300/75 truncate", children: preset.subLabel })
                  ]
                },
                preset.id
              );
            }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold text-amber-300", children: "जन्म का स्थान (Birth Place)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 text-[10px] text-emerald-300 font-semibold", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-3 h-3", strokeWidth: 1.5 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "पूरे ऐप व कुंडली में स्वतः सेट" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-3.5 h-3.5 text-amber-400 absolute left-3 top-3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  list: "my-account-birthplace-list",
                  placeholder: "उदा. रुद्रपुर, उत्तराखण्ड / हल्द्वानी / दिल्ली",
                  value: editBirthPlace,
                  onChange: (e) => {
                    const nextPlace = e.target.value;
                    setEditBirthPlace(nextPlace);
                    if (editDob && nextPlace.trim()) {
                      const resolvedCity = resolveCityCoordinates(nextPlace);
                      if (!resolvedCity.id.startsWith("custom_")) {
                        applyProfileUpdatesToApp(
                          editName || currentUser.name,
                          editDob,
                          editBirthTime || "10:00",
                          nextPlace,
                          false
                        );
                      } else {
                        const v = deriveVedicDetailsForProfile(
                          editName || currentUser.name,
                          editDob,
                          editBirthTime || "10:00",
                          nextPlace
                        );
                        if (v.rashi) setEditRashi(v.rashi);
                      }
                    }
                  },
                  onBlur: (e) => {
                    const nextPlace = e.target.value.trim();
                    if (nextPlace) {
                      const resolvedCity = resolveCityCoordinates(nextPlace);
                      const canonical = !resolvedCity.id.startsWith("custom_") ? resolvedCity.hindiName : nextPlace;
                      setEditBirthPlace(canonical);
                      applyProfileUpdatesToApp(
                        editName || currentUser.name,
                        editDob,
                        editBirthTime || "10:00",
                        canonical,
                        false
                      );
                    }
                  },
                  className: "w-full pl-8 pr-3 py-2.5 bg-slate-950 border border-amber-900/60 rounded-xl text-xs text-amber-100"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("datalist", { id: "my-account-birthplace-list", children: POPULAR_BIRTH_PLACES.map((city) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: city }, city)) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-1 mt-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-slate-400 mr-0.5", children: "प्रमुख शहर:" }),
              [
                "रुद्रपुर, उत्तराखण्ड",
                "हल्द्वानी, उत्तराखण्ड",
                "देहरादून, उत्तराखण्ड",
                "हरिद्वार, उत्तराखण्ड",
                "नैनीताल, उत्तराखण्ड",
                "काशीपुर, उत्तराखण्ड",
                "दिल्ली (New Delhi)",
                "बरेली, उत्तर प्रदेश",
                "लखनऊ, उत्तर प्रदेश",
                "मुंबई, महाराष्ट्र"
              ].map((city) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    setEditBirthPlace(city);
                    applyProfileUpdatesToApp(
                      editName || currentUser.name,
                      editDob,
                      editBirthTime || "10:00",
                      city,
                      true
                    );
                  },
                  className: `text-[10px] px-2 py-0.5 rounded-md border transition-all cursor-pointer ${editBirthPlace.split(",")[0].trim() === city.split(",")[0].trim() ? "bg-amber-500/25 border-amber-400 text-amber-200 font-bold" : "bg-slate-950 border-slate-800 text-slate-400 hover:text-amber-200"}`,
                  children: city.split(",")[0]
                },
                city
              ))
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-3 border-t border-amber-800/40 space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-amber-300", children: "ज्योतिष गणना आधार (Global Calculation Mode):" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold text-emerald-300 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30", children: "पूरे ऐप में सिंक" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => setCalcViewingMode("astronomical"),
                  className: `p-2.5 rounded-xl border text-left text-xs font-bold transition-all cursor-pointer ${calcViewingMode === "astronomical" ? "bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 border-yellow-300 shadow-lg" : "bg-slate-950 border-amber-900/50 text-amber-200 hover:border-amber-500/50"}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Telescope, { className: "w-3.5 h-3.5 shrink-0", strokeWidth: 1.5 }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "जन्मांक / कुंडली अनुसार" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: `text-[10px] mt-0.5 font-medium ${calcViewingMode === "astronomical" ? "text-slate-900" : "text-amber-300/60"}`,
                        children: "जन्म तिथि, समय व लग्न से"
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => setCalcViewingMode("name_rashi"),
                  className: `p-2.5 rounded-xl border text-left text-xs font-bold transition-all cursor-pointer ${calcViewingMode === "name_rashi" ? "bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 border-yellow-300 shadow-lg" : "bg-slate-950 border-amber-900/50 text-amber-200 hover:border-amber-500/50"}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Type, { className: "w-3.5 h-3.5 shrink-0", strokeWidth: 1.5 }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "नाम राशि अनुसार" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: `text-[10px] mt-0.5 font-medium ${calcViewingMode === "name_rashi" ? "text-slate-900" : "text-amber-300/60"}`,
                        children: "प्रचलित नाम अक्षर व नक्षत्र से"
                      }
                    )
                  ]
                }
              )
            ] })
          ] }),
          profileSavedToast && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 rounded-xl bg-emerald-950/70 border border-emerald-500/40 text-emerald-300 text-xs font-bold flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4" }),
            " आपकी जानकारी सहेज ली गई है!"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "submit",
              className: "w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-bold text-xs sm:text-sm shadow-md cursor-pointer flex items-center justify-center gap-2",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "w-4 h-4" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "जानकारी सहेजें (Save Profile)" })
              ]
            }
          )
        ] }),
        cleanMobileNumber(currentUser.phone) === "8958499979" && (!adminVisibility.masterVisible || !adminVisibility.showFestiveEngine || !adminVisibility.showGeminiKeyManager) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 p-3 rounded-2xl bg-slate-950/90 border border-amber-500/40 flex flex-wrap items-center justify-between gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-bold text-amber-200 flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "w-4 h-4 text-amber-400 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "एडमिन स्पेशल ऑप्शन्स छुपे हुए हैं — दिखाने (Unhide) के लिए क्लिक करें:" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-1.5", children: [
            (!adminVisibility.masterVisible || !adminVisibility.showFestiveEngine) && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => updateAdminVisibility({
                  masterVisible: true,
                  showFestiveEngine: true
                }),
                className: "px-2.5 py-1 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 border border-amber-400/60 text-yellow-300 text-[11px] font-extrabold cursor-pointer flex items-center gap-1",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-3 h-3" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Palette, { className: "w-3 h-3", strokeWidth: 1.5 }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "१२-माह पर्व थीम इंजन दिखाएं" })
                ]
              }
            ),
            (!adminVisibility.masterVisible || !adminVisibility.showGeminiKeyManager) && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => updateAdminVisibility({
                  masterVisible: true,
                  showGeminiKeyManager: true
                }),
                className: "px-2.5 py-1 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-400/60 text-emerald-300 text-[11px] font-extrabold cursor-pointer flex items-center gap-1",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-3 h-3" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Key, { className: "w-3 h-3", strokeWidth: 1.5 }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Gemini AI Key पैनल दिखाएं" })
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          AdminFestiveThemeManager,
          {
            currentUser,
            onNavigateToHome: () => {
              onNavigateToTab("home");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AdminGeminiKeyManager, { currentUser }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 p-4 rounded-2xl bg-gradient-to-br from-amber-950/80 via-[#1b1005] to-slate-950 border-2 border-amber-500/60 shadow-xl backdrop-blur-md space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-xl bg-gradient-to-br from-amber-500 to-yellow-400 flex items-center justify-center text-slate-950 shadow-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "w-5 h-5" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-black text-yellow-300", children: "पुण्य पॉइंट्स (Punya Points) रिवार्ड्स" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-amber-200/80", children: "प्रतिदिन ऐप खोलने या पंचांग दर्शन पर +1 पुण्य पॉइंट स्वतः जुड़ता है" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-3 py-1.5 rounded-xl bg-amber-500/20 border border-yellow-400/60 text-right shrink-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold text-amber-300 uppercase", children: "कुल संचित पुण्य" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-base font-black text-yellow-300", children: [
                punyaPoints,
                " अंक"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 rounded-xl bg-slate-950/80 border border-amber-500/30 flex items-center justify-between gap-2 text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-amber-200 font-semibold flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3.5 h-3.5 text-yellow-400" }),
              "आज का दैनिक पंचांग दर्शन (+1 पुण्य पॉइंट):"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-950/90 border border-emerald-500/50 text-emerald-300 font-bold text-[11px]", children: claimedToday ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-3 h-3", strokeWidth: 1.5 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "आज प्राप्त हो चुका" })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "सक्रिय (+1 अंक)" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-xl bg-amber-500/10 border border-amber-400/40 space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Gift, { className: "w-4 h-4 text-yellow-400 shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] sm:text-xs text-amber-100 leading-relaxed font-semibold", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-yellow-300 font-extrabold", children: "विशेष नियम (Exclusive Rule):" }),
                " ",
                "आपके संचित पुण्य पॉइंट्स ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "underline decoration-yellow-400 font-black", children: "केवल ₹100 स्पेशल ऑफर" }),
                " (विशेष दक्षिणा / परामर्श पैकेज) में ही रिडीम किए जा सकते हैं। किसी अन्य पैकेज पर यह लागू नहीं होगा।"
              ] })
            ] }),
            active100Coupon && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2 rounded-lg bg-emerald-950/80 border border-emerald-500/50 text-emerald-200 text-xs font-bold flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Ticket, { className: "w-3.5 h-3.5 text-emerald-300", strokeWidth: 1.5 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "सक्रिय ₹100 स्पेशल ऑफर कूपन:" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-yellow-300 bg-slate-950 px-2 py-0.5 rounded border border-yellow-400/40", children: active100Coupon })
            ] }),
            punyaRedeemFeedback && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: `p-2 rounded-lg text-xs font-bold ${punyaRedeemFeedback.type === "success" ? "bg-emerald-950/90 border border-emerald-500/50 text-emerald-300" : "bg-amber-950/90 border border-amber-500/50 text-amber-200"}`,
                children: punyaRedeemFeedback.text
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: handleRedeem100Offer,
                className: "w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 hover:from-amber-400 hover:to-yellow-300 text-slate-950 font-black text-xs shadow-lg transition-all cursor-pointer flex items-center justify-center gap-1.5",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Gift, { className: "w-4 h-4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "₹100 स्पेशल ऑफर के लिए 100 पुण्य पॉइंट्स रिडीम करें" })
                ]
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-rose-950/30 via-[#0e1526] to-[#0e1526] border border-rose-500/40 space-y-3.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-sm sm:text-base font-bold font-vedic text-amber-100 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4 text-rose-400" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "अपना डेटा एवं हर चीज़ की हिस्ट्री डिलीट करें (Delete History Options)" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-slate-400 mt-0.5", children: "आप किसी एक सेक्शन की हिस्ट्री या अपनी संपूर्ण हिस्ट्री एक क्लिक में डिलीट कर सकते हैं" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-xl bg-slate-950/90 border border-slate-800 flex items-center justify-between gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-amber-200 block", children: "1. चैटबॉट हिस्ट्री" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] text-slate-400", children: [
                  userChatMessages.length,
                  " संदेश सेव हैं"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: handleClearChatHistory,
                  className: "px-3 py-1.5 rounded-lg bg-rose-950 hover:bg-rose-900 border border-rose-500/40 text-rose-200 text-xs font-bold flex items-center gap-1 cursor-pointer",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3.5 h-3.5" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "डिलीट करें" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-xl bg-slate-950/90 border border-slate-800 flex items-center justify-between gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-amber-200 block", children: "2. मंत्र जप हिस्ट्री व काउंट" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] text-slate-400", children: [
                  currentUser.jaapStats?.lifetimeJaap || 0,
                  " जप • ",
                  userJaapHistory.length,
                  " सत्र"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: handleClearAllJaapStatsAndHistory,
                  className: "px-3 py-1.5 rounded-lg bg-rose-950 hover:bg-rose-900 border border-rose-500/40 text-rose-200 text-xs font-bold flex items-center gap-1 cursor-pointer",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3.5 h-3.5" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "डिलीट करें" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-xl bg-slate-950/90 border border-slate-800 flex items-center justify-between gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-amber-200 block", children: "3. सम्पूर्ण जन्म कुंडली हिस्ट्री" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] text-slate-400", children: [
                  userJanamKundaliHistory.length,
                  " जन्म कुंडली रिकॉर्ड"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: handleClearJanamKundaliHistory,
                  className: "px-3 py-1.5 rounded-lg bg-rose-950 hover:bg-rose-900 border border-rose-500/40 text-rose-200 text-xs font-bold flex items-center gap-1 cursor-pointer",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3.5 h-3.5" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "डिलीट करें" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-xl bg-slate-950/90 border border-slate-800 flex items-center justify-between gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-amber-200 block", children: "4. कुंडली मिलान हिस्ट्री" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] text-slate-400", children: [
                  userKundaliHistory.length,
                  " मिलान रिपोर्ट्स"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: handleClearKundaliHistory,
                  className: "px-3 py-1.5 rounded-lg bg-rose-950 hover:bg-rose-900 border border-rose-500/40 text-rose-200 text-xs font-bold flex items-center gap-1 cursor-pointer",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3.5 h-3.5" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "डिलीट करें" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-xl bg-slate-950/90 border border-slate-800 flex items-center justify-between gap-2 sm:col-span-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-amber-200 block", children: "5. पूजा बुकिंग हिस्ट्री" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] text-slate-400", children: [
                  userBookings.length,
                  " बुकिंग रिकॉर्ड"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: handleClearAllBookings,
                  className: "px-3 py-1.5 rounded-lg bg-rose-950 hover:bg-rose-900 border border-rose-500/40 text-rose-200 text-xs font-bold flex items-center gap-1 cursor-pointer",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3.5 h-3.5" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "डिलीट करें" })
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: handleDeleteAllEverything,
              className: "w-full py-2.5 px-4 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-extrabold text-xs sm:text-sm shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-all",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "हर चीज़ की संपूर्ण हिस्ट्री एक साथ डिलीट करें (Delete All History)" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 sm:p-5 rounded-2xl bg-[#0e1526] border border-amber-800/40 space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-sm sm:text-base font-bold font-vedic text-amber-100 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Compass, { className: "w-4 h-4 text-amber-400" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "हाल ही की सम्पूर्ण जन्म कुंडली हिस्ट्री (Janam Kundali History)" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              userJanamKundaliHistory.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: handleClearJanamKundaliHistory,
                  className: "text-xs text-rose-400 hover:text-rose-300 font-semibold flex items-center gap-1 cursor-pointer",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3 h-3" }),
                    " साफ़ करें"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => setSubTab("janam_kundali"),
                  className: "inline-flex items-center gap-1 text-xs text-amber-400 hover:underline font-semibold cursor-pointer",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                      "सभी ",
                      userJanamKundaliHistory.length,
                      " देखें"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3.5 h-3.5", strokeWidth: 1.5 })
                  ]
                }
              )
            ] })
          ] }),
          userJanamKundaliHistory.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-400", children: "अभी तक कोई जन्म कुंडली हिस्ट्री दर्ज नहीं है।" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-2.5", children: userJanamKundaliHistory.slice(0, 4).map((jk) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "p-3 rounded-xl bg-slate-900/90 border border-amber-800/40 flex flex-col justify-between gap-2 text-xs",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-amber-100 block truncate", children: jk.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] text-amber-300/80 font-mono", children: [
                      "DOB: ",
                      jk.dob,
                      " • ",
                      jk.birthTime
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] text-emerald-300 block truncate mt-0.5", children: [
                      "लग्न: ",
                      jk.lagna,
                      " • राशि: ",
                      jk.moonRashi
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => handleDeleteSingleJanamKundaliItem(jk.id),
                      className: "p-1 text-slate-400 hover:text-rose-400 cursor-pointer flex-shrink-0",
                      title: "यह कुंडली हिस्ट्री डिलीट करें",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3.5 h-3.5" })
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => handleOpenJanamKundaliItem(jk),
                    className: "w-full py-1.5 px-2.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-amber-200 font-bold text-[11px] cursor-pointer text-center inline-flex items-center justify-center gap-1",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "सम्पूर्ण कुंडली देखें" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3.5 h-3.5", strokeWidth: 1.5 })
                    ]
                  }
                )
              ]
            },
            jk.id
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 sm:p-5 rounded-2xl bg-[#0e1526] border border-amber-800/40 space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-sm sm:text-base font-bold font-vedic text-amber-100 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(HeartHandshake, { className: "w-4 h-4 text-rose-400" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "हाल ही का 36 गुण मिलान (Kundali Milan History)" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              userKundaliHistory.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: handleClearKundaliHistory,
                  className: "text-xs text-rose-400 hover:text-rose-300 font-semibold flex items-center gap-1 cursor-pointer",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3 h-3" }),
                    " साफ़ करें"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => setSubTab("milan"),
                  className: "inline-flex items-center gap-1 text-xs text-amber-400 hover:underline font-semibold cursor-pointer",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                      "सभी ",
                      userKundaliHistory.length,
                      " देखें"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3.5 h-3.5", strokeWidth: 1.5 })
                  ]
                }
              )
            ] })
          ] }),
          userKundaliHistory.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-400", children: "अभी तक कोई 36 गुण कुंडली मिलान रिकॉर्ड दर्ज नहीं है।" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-2.5", children: userKundaliHistory.slice(0, 4).map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              role: "button",
              tabIndex: 0,
              onClick: () => handleOpenKundaliMilanItem(m),
              onKeyDown: (e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleOpenKundaliMilanItem(m);
                }
              },
              className: "group p-3.5 rounded-xl bg-slate-900/90 hover:bg-amber-950/35 border border-amber-800/40 hover:border-amber-400/80 hover:-translate-y-0.5 transition-all flex flex-col justify-between gap-2.5 text-xs cursor-pointer shadow-sm",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-amber-100 group-hover:text-amber-300 transition-colors block truncate", children: [
                      m.boyName,
                      " & ",
                      m.girlName
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] text-emerald-300 font-mono font-bold block mt-0.5", children: [
                      m.totalScore,
                      "/36 गुण • ",
                      m.overallVerdict
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-slate-400 block truncate", children: m.timestamp })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: (e) => {
                        e.stopPropagation();
                        handleDeleteSingleKundaliItem(m.id);
                      },
                      className: "p-1 text-slate-400 hover:text-rose-400 cursor-pointer flex-shrink-0",
                      title: "यह मिलान हिस्ट्री डिलीट करें",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3.5 h-3.5" })
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: (e) => {
                      e.stopPropagation();
                      handleOpenKundaliMilanItem(m);
                    },
                    className: "w-full py-1.5 px-2.5 rounded-lg bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-yellow-400 hover:to-amber-400 text-slate-950 font-bold text-[11px] cursor-pointer text-center flex items-center justify-center gap-1.5 shadow-sm",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "w-3 h-3 text-slate-950", strokeWidth: 1.5 }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "पुनः उपयोग करें (Use Again)" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3 h-3 text-slate-950", strokeWidth: 1.5 })
                    ]
                  }
                )
              ]
            },
            m.id
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 sm:p-5 rounded-2xl bg-[#0e1526] border border-amber-800/40 space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-sm sm:text-base font-bold font-vedic text-amber-100 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-4 h-4 text-amber-400" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "हाल ही की चैटबॉट हिस्ट्री (Chatbot History)" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              userChatMessages.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: handleClearChatHistory,
                  className: "text-xs text-rose-400 hover:text-rose-300 font-semibold flex items-center gap-1 cursor-pointer",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3 h-3" }),
                    " साफ़ करें"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => setSubTab("chat"),
                  className: "inline-flex items-center gap-1 text-xs text-amber-400 hover:underline font-semibold cursor-pointer",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                      "सभी ",
                      userChatMessages.length,
                      " देखें"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3.5 h-3.5", strokeWidth: 1.5 })
                  ]
                }
              )
            ] })
          ] }),
          userChatMessages.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-400", children: "अभी तक कोई चैटबॉट प्रश्न दर्ज नहीं है।" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2 max-h-48 overflow-y-auto pr-1", children: userChatMessages.slice(-4).map((msg) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: `p-2.5 rounded-xl text-xs border flex items-start justify-between gap-2 ${msg.role === "user" ? "bg-amber-950/40 border-amber-600/40 text-amber-200" : "bg-slate-900/90 border-slate-800 text-slate-200"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-amber-400", children: msg.role === "user" ? "आपका प्रश्न: " : "पं. शशांक शर्मा जी: " }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "line-clamp-2", children: msg.text })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => handleDeleteSingleChatMessage(msg.id),
                    className: "p-1 text-slate-400 hover:text-rose-400 cursor-pointer flex-shrink-0",
                    title: "यह संदेश डिलीट करें",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3.5 h-3.5" })
                  }
                )
              ]
            },
            msg.id
          )) })
        ] })
      ] })
    ] }),
    subTab === "chat" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#0e1526] border border-amber-800/40 rounded-2xl p-4 sm:p-6 space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-lg font-bold font-vedic text-amber-100 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-5 h-5 text-amber-400" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "पण्डित शशांक शर्मा ज्योतिष चैट इतिहास (+91 ",
              currentUser.phone,
              ")"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-400 mt-0.5", children: "किसी एक संदेश को या संपूर्ण चैटबॉट इतिहास को यहाँ से डिलीट कर सकते हैं" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => onNavigateToTab("chat"),
              className: "px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-bold text-xs cursor-pointer inline-flex items-center gap-1",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "चैटबॉट में नया प्रश्न पूछें" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3.5 h-3.5", strokeWidth: 1.5 })
              ]
            }
          ),
          userChatMessages.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: handleClearChatHistory,
              className: "px-3.5 py-2 rounded-xl bg-rose-950/80 hover:bg-rose-900 border border-rose-500/50 text-rose-200 text-xs font-bold cursor-pointer flex items-center gap-1.5",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "संपूर्ण चैट हिस्ट्री डिलीट करें" })
              ]
            }
          )
        ] })
      ] }),
      userChatMessages.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-10 space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-10 h-10 text-amber-500/50 mx-auto" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-amber-200 font-semibold", children: "इस मोबाइल नंबर पर अभी कोई चैटबॉट इतिहास नहीं है।" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => onNavigateToTab("chat"),
            className: "px-5 py-2.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs cursor-pointer",
            children: "पं. शशांक शर्मा जी से बात करें"
          }
        )
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3 max-h-[65vh] overflow-y-auto pr-1", children: userChatMessages.map((msg) => {
        const isUser = msg.role === "user";
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `p-4 rounded-2xl border ${isUser ? "bg-amber-950/30 border-amber-500/40 ml-0 sm:ml-8" : "bg-slate-900/90 border-slate-800 mr-0 sm:mr-8"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2 mb-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: `text-xs font-bold flex items-center gap-1.5 ${isUser ? "text-amber-300" : "text-emerald-300"}`,
                    children: isUser ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-3.5 h-3.5 text-amber-300 shrink-0", strokeWidth: 1.5 }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                        "आपका प्रश्न (",
                        currentUser.name,
                        ")"
                      ] })
                    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "kalash", className: "w-3.5 h-3.5 text-emerald-300 shrink-0" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "पण्डित शशांक शर्मा जी का उत्तर" })
                    ] })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-slate-400", children: msg.timestamp }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => handleDeleteSingleChatMessage(msg.id),
                      className: "p-1 rounded-lg bg-rose-950/50 hover:bg-rose-900 text-rose-300 cursor-pointer flex items-center gap-1 text-[10px] px-2",
                      title: "यह संदेश डिलीट करें",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3 h-3" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "हटाएं" })
                      ]
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm text-amber-50 whitespace-pre-line leading-relaxed", children: msg.text })
            ]
          },
          msg.id
        );
      }) })
    ] }),
    subTab === "jaap" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#0e1526] border border-amber-800/40 rounded-2xl p-4 sm:p-6 space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-lg font-bold font-vedic text-amber-100 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "w-5 h-5 text-yellow-400" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "मंत्र जप माला एवं साधना इतिहास (+91 ",
              currentUser.phone,
              ")"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-slate-400 mt-0.5", children: [
            "कुल संचित जप: ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: currentUser.jaapStats?.lifetimeJaap || 0 }),
            " • पूर्ण माला:",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: currentUser.jaapStats?.completedMalas || 0 }),
            " • वर्तमान काउंट:",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: currentUser.jaapStats?.currentCount || 0 })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => onNavigateToTab("jaap"),
              className: "px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-bold text-xs cursor-pointer inline-flex items-center gap-1",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "मंत्र जप काउंटर खोलें" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3.5 h-3.5", strokeWidth: 1.5 })
              ]
            }
          ),
          userJaapHistory.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: handleClearJaapHistoryOnly,
              className: "px-3 py-2 rounded-xl bg-rose-950/80 hover:bg-rose-900 border border-rose-500/40 text-rose-200 text-xs font-bold cursor-pointer flex items-center gap-1",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "जप हिस्ट्री डिलीट करें" })
              ]
            }
          ),
          ((currentUser.jaapStats?.lifetimeJaap || 0) > 0 || userJaapHistory.length > 0) && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: handleClearAllJaapStatsAndHistory,
              className: "px-3 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold cursor-pointer flex items-center gap-1",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "काउंट व हिस्ट्री सब 0 करें" })
              ]
            }
          )
        ] })
      ] }),
      userJaapHistory.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-10 space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "w-10 h-10 text-amber-500/50 mx-auto" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-amber-200 font-semibold", children: "अभी तक कोई मंत्र जप सत्र इतिहास में दर्ज नहीं है।" })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: userJaapHistory.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "p-3.5 rounded-xl bg-slate-900/90 border border-amber-900/40 flex items-center justify-between gap-3",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs sm:text-sm font-bold text-amber-100 block truncate", children: item.mantraTitle }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] text-amber-300/80 block", children: [
                item.deity,
                " • ",
                item.timestamp
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-shrink-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "px-2.5 py-1 rounded-lg bg-amber-500/20 border border-amber-500/40 text-amber-300 font-mono font-bold text-xs", children: [
                item.count,
                " / ",
                item.target,
                " जप"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => handleDeleteSingleJaapItem(item.id),
                  className: "p-1.5 rounded-lg bg-rose-950/60 hover:bg-rose-900 text-rose-300 border border-rose-500/30 cursor-pointer",
                  title: "यह जप रिकॉर्ड डिलीट करें",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3.5 h-3.5" })
                }
              )
            ] })
          ]
        },
        item.id
      )) })
    ] }),
    subTab === "janam_kundali" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#0e1526] border border-amber-800/40 rounded-2xl p-4 sm:p-6 space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-lg font-bold font-vedic text-amber-100 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Compass, { className: "w-5 h-5 text-amber-400" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "सम्पूर्ण जन्म कुंडली इतिहास (+91 ",
              currentUser.phone,
              ")"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-400 mt-0.5", children: "आपके द्वारा खोजी गई सभी जन्म कुंडलियों (लग्न, राशि, नक्षत्र, महादशा एवं रत्न) का रिकॉर्ड" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => onNavigateToTab("janam-kundali"),
              className: "px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-bold text-xs cursor-pointer inline-flex items-center gap-1",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "नई जन्म कुंडली बनाएं" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3.5 h-3.5", strokeWidth: 1.5 })
              ]
            }
          ),
          userJanamKundaliHistory.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: handleClearJanamKundaliHistory,
              className: "px-3.5 py-2 rounded-xl bg-rose-950/80 hover:bg-rose-900 border border-rose-500/50 text-rose-200 text-xs font-bold cursor-pointer flex items-center gap-1.5",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "संपूर्ण जन्म कुंडली हिस्ट्री डिलीट करें" })
              ]
            }
          )
        ] })
      ] }),
      userJanamKundaliHistory.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-10 space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Compass, { className: "w-10 h-10 text-amber-500/50 mx-auto" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-amber-200 font-semibold", children: "अभी तक कोई सम्पूर्ण जन्म कुंडली इतिहास में दर्ज नहीं है।" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => onNavigateToTab("janam-kundali"),
            className: "px-5 py-2.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs cursor-pointer",
            children: "अपनी जन्म कुंडली देखें"
          }
        )
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: userJanamKundaliHistory.map((jk, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "p-4 rounded-2xl bg-slate-900/90 border border-amber-800/40 space-y-3 flex flex-col justify-between",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                  idx === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-amber-500 text-slate-950 mb-1", children: "अंतिम खोजी गई कुंडली" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm sm:text-base font-bold font-vedic text-amber-100 truncate", children: jk.name })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 flex-shrink-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-slate-400 font-mono", children: jk.timestamp }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => handleDeleteSingleJanamKundaliItem(jk.id),
                      className: "p-1.5 rounded-lg bg-rose-950/60 hover:bg-rose-900 text-rose-300 border border-rose-500/30 cursor-pointer",
                      title: "यह जन्म कुंडली रिकॉर्ड डिलीट करें",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3.5 h-3.5" })
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-amber-200/90 font-mono", children: [
                "जन्म तिथि (DOB): ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: jk.dob }),
                " • समय: ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: jk.birthTime })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-slate-300", children: [
                "जन्म स्थान: ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: jk.birthPlace || "रुद्रपुर, उत्तराखण्ड" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2 pt-2 border-t border-slate-800 text-xs", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2 rounded-lg bg-slate-950/80 border border-slate-800", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-amber-400 block", children: "जन्म लग्न" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-emerald-300", children: jk.lagna })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2 rounded-lg bg-slate-950/80 border border-slate-800", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-amber-400 block", children: "चंद्र राशि" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-amber-100", children: jk.moonRashi })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2 rounded-lg bg-slate-950/80 border border-slate-800", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-amber-400 block", children: "जन्म नक्षत्र" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-amber-200", children: [
                    jk.nakshatra,
                    " (च-",
                    jk.nakshatraPada,
                    ")"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2 rounded-lg bg-slate-950/80 border border-slate-800", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-amber-400 block", children: "महादशा व शुभ रत्न" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-yellow-300 truncate block", children: [
                    jk.currentMahadasha,
                    " • ",
                    jk.luckyGemstone
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-2 border-t border-slate-800 flex items-center justify-between gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-amber-300 font-semibold truncate", children: jk.manglikStatus }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => handleOpenJanamKundaliItem(jk),
                  className: "px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-yellow-400 hover:to-amber-400 text-slate-950 font-extrabold text-xs cursor-pointer flex items-center gap-1 flex-shrink-0",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "सम्पूर्ण कुंडली खोलें" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3.5 h-3.5", strokeWidth: 1.5 })
                  ]
                }
              )
            ] })
          ]
        },
        jk.id
      )) })
    ] }),
    subTab === "milan" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#0e1526] border border-amber-800/40 rounded-2xl p-4 sm:p-6 space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-lg font-bold font-vedic text-amber-100 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(HeartHandshake, { className: "w-5 h-5 text-rose-400" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "36 गुण कुंडली मिलान इतिहास (+91 ",
              currentUser.phone,
              ")"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-400 mt-0.5", children: "आपके द्वारा किए गए सभी वर-कन्या गुण मिलान का रिकॉर्ड" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => onNavigateToTab("milan"),
              className: "px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-bold text-xs cursor-pointer inline-flex items-center gap-1",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "नया कुंडली मिलान करें" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3.5 h-3.5", strokeWidth: 1.5 })
              ]
            }
          ),
          userKundaliHistory.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: handleClearKundaliHistory,
              className: "px-3.5 py-2 rounded-xl bg-rose-950/80 hover:bg-rose-900 border border-rose-500/40 text-rose-200 text-xs font-bold cursor-pointer flex items-center gap-1.5",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "संपूर्ण मिलान हिस्ट्री डिलीट करें" })
              ]
            }
          )
        ] })
      ] }),
      userKundaliHistory.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-10 space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(HeartHandshake, { className: "w-10 h-10 text-rose-400/50 mx-auto" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-amber-200 font-semibold", children: "अभी तक कोई कुंडली मिलान इतिहास में दर्ज नहीं है।" })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: userKundaliHistory.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          role: "button",
          tabIndex: 0,
          onClick: () => handleOpenKundaliMilanItem(m),
          onKeyDown: (e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              handleOpenKundaliMilanItem(m);
            }
          },
          className: "group p-4 rounded-2xl bg-slate-900/90 hover:bg-amber-950/35 border border-amber-800/40 hover:border-amber-400/80 hover:-translate-y-0.5 transition-all space-y-2.5 cursor-pointer shadow-md",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-bold font-vedic text-amber-100 group-hover:text-amber-300 transition-colors truncate", children: [
                "वर: ",
                m.boyName,
                " & कन्या: ",
                m.girlName
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 flex-shrink-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-mono font-bold text-xs", children: [
                  m.totalScore,
                  " / 36 गुण"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: (e) => {
                      e.stopPropagation();
                      handleOpenKundaliMilanItem(m);
                    },
                    className: "px-2.5 py-1 rounded-lg bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-yellow-400 hover:to-amber-400 text-slate-950 font-bold text-xs flex items-center gap-1 cursor-pointer transition-all shadow-sm",
                    title: "यह कुंडली मिलान पुनः लोड करें और 36 गुण रिपोर्ट देखें",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "w-3 h-3 text-slate-950", strokeWidth: 1.5 }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "पुनः उपयोग करें (Use Again)" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: (e) => {
                      e.stopPropagation();
                      handleDeleteSingleKundaliItem(m.id);
                    },
                    className: "p-1.5 rounded-lg bg-rose-950/60 hover:bg-rose-900 text-rose-300 border border-rose-500/30 cursor-pointer",
                    title: "यह कुंडली मिलान रिकॉर्ड डिलीट करें",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3.5 h-3.5" })
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-amber-200/85 space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                "• वर: ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-amber-100", children: m.boyName }),
                " — ",
                m.boyRashi,
                " ",
                m.boyNakshatra ? `(${m.boyNakshatra})` : "",
                " ",
                m.boyDob ? `(DOB: ${m.boyDob}, ${m.boyTime}${m.boyPlace ? `, ${m.boyPlace}` : ""})` : ""
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                "• कन्या: ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-amber-100", children: m.girlName }),
                " — ",
                m.girlRashi,
                " ",
                m.girlNakshatra ? `(${m.girlNakshatra})` : "",
                " ",
                m.girlDob ? `(DOB: ${m.girlDob}, ${m.girlTime}${m.girlPlace ? `, ${m.girlPlace}` : ""})` : ""
              ] }),
              m.manglikVerdict && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-rose-300 font-medium", children: [
                "• ",
                m.manglikVerdict
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-2 border-t border-slate-800 flex items-center justify-between text-[11px]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-amber-400 font-semibold", children: m.overallVerdict }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-400", children: m.timestamp })
            ] })
          ]
        },
        m.id
      )) })
    ] }),
    subTab === "bookings" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#0e1526] border border-amber-800/40 rounded-2xl p-4 sm:p-6 space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-lg font-bold font-vedic text-amber-100 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-5 h-5 text-emerald-400" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "पूजा एवं ₹100 परामर्श बुकिंग इतिहास (+91 ",
              currentUser.phone,
              ")"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-400 mt-0.5", children: "इस मोबाइल नंबर से बुक की गई सभी पूजाएं और ज्योतिष परामर्श" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => onNavigateToTab("services"),
              className: "px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-bold text-xs cursor-pointer inline-flex items-center gap-1",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "नई पूजा / परामर्श बुक करें" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3.5 h-3.5", strokeWidth: 1.5 })
              ]
            }
          ),
          userBookings.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: handleClearAllBookings,
              className: "px-3.5 py-2 rounded-xl bg-rose-950/80 hover:bg-rose-900 border border-rose-500/40 text-rose-200 text-xs font-bold cursor-pointer flex items-center gap-1.5",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "संपूर्ण बुकिंग हिस्ट्री डिलीट करें" })
              ]
            }
          )
        ] })
      ] }),
      userBookings.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-10 space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-10 h-10 text-emerald-400/50 mx-auto" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-amber-200 font-semibold", children: [
          "इस मोबाइल नंबर (+91 ",
          currentUser.phone,
          ") से अभी कोई बुकिंग नहीं मिली।"
        ] })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: userBookings.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "p-4 rounded-2xl bg-slate-900/90 border border-amber-800/40 space-y-2",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-bold font-vedic text-amber-100 truncate", children: b.serviceName }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 flex-shrink-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold border border-emerald-500/40", children: "बुकिंग कन्फर्म" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => handleDeleteSingleBooking(b.id),
                    className: "p-1.5 rounded-lg bg-rose-950/60 hover:bg-rose-900 text-rose-300 border border-rose-500/30 cursor-pointer",
                    title: "यह बुकिंग रिकॉर्ड डिलीट करें",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3.5 h-3.5" })
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-amber-200/80 space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3.5 h-3.5 text-amber-400" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  "तिथि: ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: b.date }),
                  " • समय: ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: b.timeSlot })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-3.5 h-3.5 text-amber-400" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: b.bookingType === "in_person_rudrapur" ? `रुद्रपुर घर पर पूजा (${b.localityRudrapur})` : "फ़ोन / वीडियो कॉल परामर्श" })
              ] })
            ] })
          ]
        },
        b.id
      )) })
    ] })
  ] });
};
export {
  UserHistoryHub
};
