import { r as reactExports, j as jsxRuntimeExports } from "./vendor-react-CCbeDaYX.js";
import { V as VedicDateInput } from "./VedicDateInput-QzCgtRnr.js";
import { P as PanditPortrait, c as cleanMobileNumber, a as SacredIcon, A as APPROXIMATE_BIRTH_TIME_PRESETS, o as POPULAR_BIRTH_PLACES, w as clearLocalChatCache, x as clearLocalJaapCache, y as clearLocalKundaliCache, z as loginOrSyncUser, v as vedicAudio, B as persistUserAccountUpdate, C as verifyUserDobForReset, D as saveNewPasswordForUser } from "./index-AQ5SI3vl.js";
import { O as deriveVedicDetailsForProfile, z as setActiveProfile, a2 as upsertFamilyMember } from "./panchang-core-24ia-akc.js";
import { A as AdminGeminiKeyManager } from "./AdminGeminiKeyManager-i8Cju3wN.js";
import { B as BirthPlaceGpsButton } from "./BirthPlaceGpsButton-BKE2rBQq.js";
import { X, a5 as CircleCheck, J as ArrowLeft, ag as History, aW as LogOut, D as Download, aR as Trash2, t as MessageCircle, a9 as Flame, a8 as Compass, ae as HeartHandshake, x as Calendar, F as ArrowRight, m as Lock, aX as EyeOff, E as Eye, a2 as Clock, S as Sparkles, C as Check, a1 as MapPin, n as ShieldCheck } from "./vendor-icons-Bk5Rg8-9.js";
import "./vendor-pdf-CpPyS1re.js";
import "./seo-core-DnNehtWz.js";
import "./vendor-astronomy-C8JZdkQu.js";
const MobileLoginModal = ({
  isOpen,
  onClose,
  currentUser,
  onLoginSuccess,
  onUpdateAccount,
  onLogout,
  onOpenFullHistoryHub,
  userBookingsCount = 0,
  onDeleteAllUserBookings
}) => {
  const [phoneInput, setPhoneInput] = reactExports.useState("");
  const [nameInput, setNameInput] = reactExports.useState("");
  const [emailInput, setEmailInput] = reactExports.useState("");
  const [gotraInput, setGotraInput] = reactExports.useState("");
  const [dobInput, setDobInput] = reactExports.useState("1995-01-01");
  const [birthTimeInput, setBirthTimeInput] = reactExports.useState("10:00");
  const [birthPlaceInput, setBirthPlaceInput] = reactExports.useState("रुद्रपुर, उत्तराखण्ड");
  const [approxTimeLabel, setApproxTimeLabel] = reactExports.useState("");
  const [passwordInput, setPasswordInput] = reactExports.useState("");
  const [showPassword, setShowPassword] = reactExports.useState(false);
  const [showNewPassword, setShowNewPassword] = reactExports.useState(false);
  const [errorMsg, setErrorMsg] = reactExports.useState("");
  const [statusToast, setStatusToast] = reactExports.useState("");
  const [confirmDeleteAll, setConfirmDeleteAll] = reactExports.useState(false);
  const [isSubmitting, setIsSubmitting] = reactExports.useState(false);
  const [topTab, setTopTab] = reactExports.useState("login");
  const [showSwitchAccountForm, setShowSwitchAccountForm] = reactExports.useState(false);
  const [isForgotPassword, setIsForgotPassword] = reactExports.useState(false);
  const [resetStep, setResetStep] = reactExports.useState(1);
  const [verifyDob, setVerifyDob] = reactExports.useState("");
  const [verifiedUserName, setVerifiedUserName] = reactExports.useState("");
  const [newPassword, setNewPassword] = reactExports.useState("");
  const [confirmPassword, setConfirmPassword] = reactExports.useState("");
  reactExports.useEffect(() => {
    if (isOpen) {
      setErrorMsg("");
      setStatusToast("");
      setConfirmDeleteAll(false);
      setShowPassword(false);
      setShowNewPassword(false);
      setIsForgotPassword(false);
      setShowSwitchAccountForm(false);
      setResetStep(1);
      setVerifiedUserName("");
      setNewPassword("");
      setConfirmPassword("");
      setApproxTimeLabel("");
      if (currentUser) {
        setPhoneInput("");
        setNameInput(currentUser.name || "");
        setEmailInput(currentUser.email || "");
        setGotraInput(currentUser.gotra || "");
        setDobInput(currentUser.dob || "1995-01-01");
        setBirthTimeInput(currentUser.birthTime || "10:00");
        setBirthPlaceInput(currentUser.birthPlace || "रुद्रपुर, उत्तराखण्ड");
        setPasswordInput("");
      } else {
        setPhoneInput("");
        setNameInput("");
        setEmailInput("");
        setGotraInput("");
        setDobInput("1995-01-01");
        setBirthTimeInput("10:00");
        setBirthPlaceInput("रुद्रपुर, उत्तराखण्ड");
        setPasswordInput("");
      }
    }
  }, [isOpen, currentUser]);
  if (!isOpen) return null;
  const showToast = (msg) => {
    setStatusToast(msg);
    setTimeout(() => {
      setStatusToast((prev) => prev === msg ? "" : prev);
    }, 4e3);
  };
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const isEmail = phoneInput.includes("@");
    const cleaned = isEmail ? phoneInput.trim() : cleanMobileNumber(phoneInput);
    if (!cleaned || !isEmail && cleaned.length !== 10) {
      setErrorMsg("कृपया अपना सही 10 अंकों का मोबाइल नंबर या ईमेल दर्ज करें।");
      return;
    }
    if (!passwordInput.trim()) {
      setErrorMsg("कृपया अपना पासवर्ड दर्ज करें।");
      return;
    }
    setIsSubmitting(true);
    setErrorMsg("");
    try {
      const account = await loginOrSyncUser({
        phone: isEmail ? "" : cleaned,
        email: isEmail ? cleaned : "",
        password: passwordInput.trim(),
        mode: "login"
      });
      vedicAudio.playTempleBell(0.65);
      onLoginSuccess(account);
      onClose();
    } catch (err) {
      if (err instanceof Error && err.message === "WRONG_PASSWORD") {
        setErrorMsg('गलत पासवर्ड! कृपया सही पासवर्ड दर्ज करें या "पासवर्ड भूल गए?" पर क्लिक करें।');
      } else if (err instanceof Error && err.message === "USER_NOT_FOUND") {
        setErrorMsg('यह खाता पंजीकृत नहीं है। कृपया पहले "नया खाता (Sign-Up)" टैब से पंजीकरण करें।');
      } else {
        setErrorMsg("लॉगिन करने में समस्या आई। कृपया पुनः प्रयास करें।");
      }
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    const cleanedPhone = cleanMobileNumber(phoneInput);
    if (cleanedPhone.length !== 10) {
      setErrorMsg("कृपया अपना सही 10 अंकों का मोबाइल नंबर दर्ज करें।");
      return;
    }
    if (!nameInput.trim()) {
      setErrorMsg("कृपया अपना नाम दर्ज करें।");
      return;
    }
    if (!passwordInput.trim() || passwordInput.trim().length < 3) {
      setErrorMsg("कृपया सुरक्षा के लिए कम से कम 3 अक्षरों का पासवर्ड रखें।");
      return;
    }
    setIsSubmitting(true);
    setErrorMsg("");
    try {
      const resolvedDob = dobInput || "1995-01-01";
      const resolvedTime = birthTimeInput.trim() || "12:00";
      const resolvedPlace = birthPlaceInput.trim() || "रुद्रपुर, उत्तराखण्ड";
      const vedic = deriveVedicDetailsForProfile(
        nameInput.trim(),
        resolvedDob,
        resolvedTime,
        resolvedPlace
      );
      const account = await loginOrSyncUser({
        phone: cleanedPhone,
        name: nameInput.trim(),
        email: emailInput.trim(),
        password: passwordInput.trim(),
        dob: resolvedDob,
        birthTime: resolvedTime,
        birthPlace: resolvedPlace,
        gotra: gotraInput.trim(),
        rashi: vedic.rashi,
        lagna: vedic.lagna,
        nakshatra: vedic.nakshatra,
        mode: "signup"
      });
      account.gotra = gotraInput.trim();
      account.dob = resolvedDob;
      account.birthTime = resolvedTime;
      account.birthPlace = resolvedPlace;
      account.rashi = vedic.rashi;
      account.lagna = vedic.lagna;
      account.nakshatra = vedic.nakshatra;
      persistUserAccountUpdate(account);
      const activeProf = {
        id: cleanedPhone,
        name: nameInput.trim(),
        relation: "self",
        gender: "male",
        dob: resolvedDob,
        birthTime: resolvedTime,
        birthPlace: resolvedPlace,
        gotra: gotraInput.trim(),
        rashi: vedic.rashi,
        rashiLord: vedic.rashiLord,
        nakshatra: vedic.nakshatra,
        nakshatraPada: vedic.nakshatraPada,
        lagna: vedic.lagna,
        isPrimary: true,
        createdAt: (/* @__PURE__ */ new Date()).toISOString(),
        updatedAt: (/* @__PURE__ */ new Date()).toISOString()
      };
      setActiveProfile(activeProf);
      try {
        upsertFamilyMember({
          id: `self-${cleanedPhone}`,
          name: nameInput.trim(),
          relation: "self",
          gender: "male",
          dob: resolvedDob,
          birthTime: resolvedTime,
          birthPlace: resolvedPlace,
          gotra: gotraInput.trim(),
          isPrimary: true
        });
      } catch {
      }
      vedicAudio.playTempleBell(0.65);
      onLoginSuccess(account);
      onClose();
    } catch {
      setErrorMsg("खाता बनाने में समस्या आई। कृपया पुनः प्रयास करें।");
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleVerifyForgotPassword = async (e) => {
    e.preventDefault();
    const cleaned = cleanMobileNumber(phoneInput);
    if (cleaned.length !== 10 || !verifyDob) {
      setErrorMsg("कृपया सही 10 अंकों का मोबाइल नंबर और जन्म तिथि दर्ज करें।");
      return;
    }
    setIsSubmitting(true);
    setErrorMsg("");
    try {
      const result = await verifyUserDobForReset(cleaned, verifyDob);
      setVerifiedUserName(result.name || "");
      setResetStep(2);
      vedicAudio.playTempleBell(0.5);
      showToast("सत्यापन सफल! अब अपना नया पासवर्ड और कन्फर्म पासवर्ड दर्ज करें।");
    } catch (err) {
      setErrorMsg(
        err instanceof Error ? err.message : "सत्यापन विफल। कृपया सही मोबाइल नंबर और जन्म तिथि दर्ज करें।"
      );
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleResetPassword = async (e) => {
    e.preventDefault();
    const cleaned = cleanMobileNumber(phoneInput);
    const trimmedNew = newPassword.trim();
    const trimmedConfirm = confirmPassword.trim();
    if (trimmedNew.length < 3) {
      setErrorMsg("नया पासवर्ड कम से कम 3 अक्षरों का होना चाहिए।");
      return;
    }
    if (trimmedNew !== trimmedConfirm) {
      setErrorMsg("नया पासवर्ड और कन्फर्म पासवर्ड दोनों एक समान होने चाहिए।");
      return;
    }
    setIsSubmitting(true);
    setErrorMsg("");
    try {
      await saveNewPasswordForUser(cleaned, verifyDob, trimmedNew);
      vedicAudio.playTempleBell(0.65);
      showToast("आपका नया पासवर्ड सुरक्षित कर दिया गया है! कृपया अब लॉगिन करें।");
      setPhoneInput(cleaned);
      setPasswordInput(trimmedNew);
      setNewPassword("");
      setConfirmPassword("");
      setResetStep(1);
      setIsForgotPassword(false);
      setTopTab("login");
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "पासवर्ड रीसेट करने में समस्या आई।");
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleBackToLogin = () => {
    setIsForgotPassword(false);
    setResetStep(1);
    setErrorMsg("");
    setNewPassword("");
    setConfirmPassword("");
  };
  const handleDeleteChatOnly = () => {
    if (!currentUser || !onUpdateAccount) return;
    clearLocalChatCache();
    onUpdateAccount({
      ...currentUser,
      chatMessages: []
    });
    showToast("आपकी चैटबॉट हिस्ट्री डिलीट कर दी गई है।");
  };
  const handleDeleteJaapOnly = () => {
    if (!currentUser || !onUpdateAccount) return;
    clearLocalJaapCache(true);
    onUpdateAccount({
      ...currentUser,
      jaapStats: { currentCount: 0, completedMalas: 0, lifetimeJaap: 0 },
      jaapHistory: []
    });
    showToast("आपकी मंत्र जप हिस्ट्री एवं काउंट डिलीट कर दिए गए हैं।");
  };
  const handleDeleteKundaliOnly = () => {
    if (!currentUser || !onUpdateAccount) return;
    clearLocalKundaliCache();
    onUpdateAccount({
      ...currentUser,
      kundaliHistory: []
    });
    showToast("आपकी कुंडली मिलान हिस्ट्री डिलीट कर दी गई है।");
  };
  const handleDeleteJanamKundaliOnly = () => {
    if (!currentUser || !onUpdateAccount) return;
    try {
      localStorage.removeItem("panditji_janam_kundali_history");
    } catch {
    }
    onUpdateAccount({
      ...currentUser,
      janamKundaliHistory: []
    });
    showToast("आपकी सम्पूर्ण जन्म कुंडली हिस्ट्री डिलीट कर दी गई है।");
  };
  const handleDeleteBookingsOnly = () => {
    if (onDeleteAllUserBookings) {
      onDeleteAllUserBookings();
      showToast("आपकी पूजा/परामर्श बुकिंग हिस्ट्री डिलीट कर दी गई है।");
    }
  };
  const handleDeleteEverything = () => {
    if (!currentUser || !onUpdateAccount) return;
    clearLocalChatCache();
    clearLocalJaapCache(true);
    clearLocalKundaliCache();
    try {
      localStorage.removeItem("panditji_janam_kundali_history");
    } catch {
    }
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
    showToast("आपके खाते से हर चीज़ की हिस्ट्री (चैट, जप, जन्म कुंडली, मिलान व बुकिंग) डिलीट कर दी गई है!");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex flex-col items-center justify-start p-3 sm:p-4 bg-black/85 backdrop-blur-sm animate-fadeIn pt-12 sm:pt-10 overflow-y-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full max-w-lg bg-[#0e1525] border-2 border-amber-500/60 rounded-2xl shadow-2xl overflow-hidden mb-10 sm:mb-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-amber-950 via-[#1b1108] to-slate-900 p-4 border-b border-amber-700/40 flex items-center justify-between gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(PanditPortrait, { size: "sm", showBadge: false }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm sm:text-lg font-bold font-vedic text-amber-100 truncate", children: "लॉगिन एवं साइन-अप (Login & Sign-Up)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-amber-300/80 truncate", children: "आचार्य पण्डित शशांक शर्मा • सुरक्षित वैदिक हिस्ट्री एक्सेस" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: onClose,
          className: "p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer flex-shrink-0",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5" })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 sm:p-5 space-y-4 max-h-[82vh] overflow-y-auto", children: [
      statusToast && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-xl bg-emerald-950/90 border border-emerald-500/60 text-emerald-200 text-xs font-bold flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 text-emerald-400 flex-shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: statusToast })
      ] }),
      (!currentUser || showSwitchAccountForm) && !isForgotPassword && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        currentUser && showSwitchAccountForm && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-3 py-2 rounded-xl bg-amber-950/60 border border-amber-500/40 text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-amber-200 font-bold", children: "दूसरे खाते से लॉगिन या नया खाता बनाएं:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => {
                setShowSwitchAccountForm(false);
                setErrorMsg("");
              },
              className: "px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 text-amber-300 border border-amber-500/40 font-bold text-[11px] cursor-pointer inline-flex items-center gap-1",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-3 h-3 shrink-0", strokeWidth: 1.5 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "सक्रिय खाते पर वापस जाएं" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex bg-slate-950/50 p-1 rounded-2xl border border-amber-900/30 mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => {
                setTopTab("login");
                setErrorMsg("");
              },
              className: `flex-1 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${topTab === "login" ? "bg-amber-500 text-slate-950 shadow-lg" : "text-slate-400 hover:text-amber-200"}`,
              children: "लॉगिन (Login)"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => {
                setTopTab("signup");
                setErrorMsg("");
              },
              className: `flex-1 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${topTab === "signup" ? "bg-amber-500 text-slate-950 shadow-lg" : "text-slate-400 hover:text-amber-200"}`,
              children: "नया खाता (Sign-Up)"
            }
          )
        ] })
      ] }),
      currentUser && !showSwitchAccountForm && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 sm:p-5 rounded-2xl bg-slate-950/95 border-2 border-emerald-500/50 space-y-4 shadow-xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-3.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(PanditPortrait, { size: "sm", showBadge: true }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-bold uppercase text-emerald-400 flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3.5 h-3.5 flex-shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: "पासवर्ड सुरक्षित सक्रिय खाता:" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm sm:text-base font-extrabold text-amber-100 mt-0.5 truncate", children: [
                currentUser.name,
                " (+91 ",
                currentUser.phone,
                ")"
              ] }),
              currentUser.rashi && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] text-amber-300/90 font-semibold block mt-0.5", children: [
                "राशि: ",
                currentUser.rashi,
                " ",
                currentUser.dob ? `• जन्म: ${currentUser.dob}` : "",
                " ",
                currentUser.birthTime ? `(${currentUser.birthTime})` : "",
                " ",
                currentUser.birthPlace ? `• ${currentUser.birthPlace}` : ""
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 sm:flex-shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => {
                  onClose();
                  onOpenFullHistoryHub();
                },
                className: "flex-1 sm:flex-initial justify-center px-3.5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs cursor-pointer flex items-center gap-1.5 shadow-md transition-all whitespace-nowrap",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(History, { className: "w-3.5 h-3.5 flex-shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "पूरा डेटा देखें" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => {
                  onLogout();
                  onClose();
                },
                className: "px-3 py-2 rounded-xl bg-rose-950/80 hover:bg-rose-900 border border-rose-500/40 text-rose-200 text-xs font-bold cursor-pointer flex items-center justify-center gap-1.5 transition-all whitespace-nowrap",
                title: "लॉगआउट करें",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "w-3.5 h-3.5 flex-shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "लॉगआउट" })
                ]
              }
            )
          ] })
        ] }),
        cleanMobileNumber(currentUser.phone) === "8958499979" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3.5 rounded-xl bg-gradient-to-r from-emerald-950/90 to-amber-950/80 border border-emerald-400/70 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-extrabold text-emerald-300 flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "crown", size: "w-3.5 h-3.5", tone: "auspicious" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "एडमिन (+91 8958499979) • वेबसाइट डिप्लॉयमेंट फ़ाइल:" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-amber-200/90", children: "AdSense + Policy Pages + Back Button Fix सहित अपडेटेड फ़ाइल" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "/standalone-firebase-index.html",
              download: "index.html",
              className: "px-3.5 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-amber-400 hover:from-emerald-400 hover:to-yellow-300 text-slate-950 font-black text-xs text-center shadow-md cursor-pointer whitespace-nowrap inline-flex items-center justify-center gap-1.5",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-3.5 h-3.5 shrink-0", strokeWidth: 1.5 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Standalone index.html डाउनलोड करें" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-bold text-amber-300 flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3.5 h-3.5 text-rose-400 flex-shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "अपनी हिस्ट्री डिलीट करें (Delete History Options):" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-xl bg-slate-900/95 border border-slate-800 flex items-center justify-between gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-bold text-amber-100 flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-3.5 h-3.5 text-amber-400 flex-shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: "चैटबॉट हिस्ट्री" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] text-slate-400 block mt-0.5 truncate", children: [
                  currentUser.chatMessages?.length || 0,
                  " संदेश"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: handleDeleteChatOnly,
                  className: "px-3 py-1.5 rounded-lg bg-rose-950/90 hover:bg-rose-900 text-rose-200 border border-rose-600/40 text-[11px] font-bold flex items-center gap-1 cursor-pointer flex-shrink-0 whitespace-nowrap transition-all",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3 h-3 flex-shrink-0" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "डिलीट" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-xl bg-slate-900/95 border border-slate-800 flex items-center justify-between gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-bold text-amber-100 flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "w-3.5 h-3.5 text-yellow-400 flex-shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: "मंत्र जप हिस्ट्री" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] text-slate-400 block mt-0.5 truncate", children: [
                  currentUser.jaapStats?.lifetimeJaap || 0,
                  " जप • ",
                  currentUser.jaapHistory?.length || 0,
                  " सत्र"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: handleDeleteJaapOnly,
                  className: "px-3 py-1.5 rounded-lg bg-rose-950/90 hover:bg-rose-900 text-rose-200 border border-rose-600/40 text-[11px] font-bold flex items-center gap-1 cursor-pointer flex-shrink-0 whitespace-nowrap transition-all",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3 h-3 flex-shrink-0" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "डिलीट" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-xl bg-slate-900/95 border border-slate-800 flex items-center justify-between gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-bold text-amber-100 flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Compass, { className: "w-3.5 h-3.5 text-orange-400 flex-shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: "जन्म कुंडली हिस्ट्री" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] text-slate-400 block mt-0.5 truncate", children: [
                  currentUser.janamKundaliHistory?.length || 0,
                  " कुंडली रिकॉर्ड"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: handleDeleteJanamKundaliOnly,
                  className: "px-3 py-1.5 rounded-lg bg-rose-950/90 hover:bg-rose-900 text-rose-200 border border-rose-600/40 text-[11px] font-bold flex items-center gap-1 cursor-pointer flex-shrink-0 whitespace-nowrap transition-all",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3 h-3 flex-shrink-0" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "डिलीट" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-xl bg-slate-900/95 border border-slate-800 flex items-center justify-between gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-bold text-amber-100 flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(HeartHandshake, { className: "w-3.5 h-3.5 text-rose-400 flex-shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: "कुंडली मिलान" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] text-slate-400 block mt-0.5 truncate", children: [
                  currentUser.kundaliHistory?.length || 0,
                  " मिलान रिकॉर्ड"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: handleDeleteKundaliOnly,
                  className: "px-3 py-1.5 rounded-lg bg-rose-950/90 hover:bg-rose-900 text-rose-200 border border-rose-600/40 text-[11px] font-bold flex items-center gap-1 cursor-pointer flex-shrink-0 whitespace-nowrap transition-all",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3 h-3 flex-shrink-0" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "डिलीट" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-xl bg-slate-900/95 border border-slate-800 flex items-center justify-between gap-3 sm:col-span-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-bold text-amber-100 flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-3.5 h-3.5 text-emerald-400 flex-shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: "पूजा बुकिंग हिस्ट्री" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] text-slate-400 block mt-0.5 truncate", children: [
                  userBookingsCount,
                  " बुकिंग रिकॉर्ड"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: handleDeleteBookingsOnly,
                  className: "px-3 py-1.5 rounded-lg bg-rose-950/90 hover:bg-rose-900 text-rose-200 border border-rose-600/40 text-[11px] font-bold flex items-center gap-1 cursor-pointer flex-shrink-0 whitespace-nowrap transition-all",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3 h-3 flex-shrink-0" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "डिलीट" })
                  ]
                }
              )
            ] })
          ] }),
          !confirmDeleteAll ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => setConfirmDeleteAll(true),
              className: "w-full py-2.5 px-3.5 rounded-xl bg-rose-950/80 hover:bg-rose-900 border border-rose-500/50 text-rose-200 font-bold text-xs flex items-center justify-center gap-1.5 cursor-pointer transition-all",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3.5 h-3.5 text-rose-400 flex-shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "अपनी हर चीज़ की हिस्ट्री एक साथ डिलीट करें (Delete All History)" })
              ]
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-xl bg-rose-950/95 border border-rose-500 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-rose-200", children: "क्या आप वाकई अपनी सारी हिस्ट्री डिलीट करना चाहते हैं?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 self-end sm:self-auto", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: handleDeleteEverything,
                  className: "px-3 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold cursor-pointer whitespace-nowrap",
                  children: "हाँ, सब डिलीट करें"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setConfirmDeleteAll(false),
                  className: "px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 text-xs font-semibold cursor-pointer whitespace-nowrap",
                  children: "रद्द करें"
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AdminGeminiKeyManager, { currentUser, className: "mt-3" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-2 border-t border-slate-800/80 flex items-center justify-between gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-slate-400", children: "किसी अन्य मोबाइल नंबर या पासवर्ड से लॉगिन करना चाहते हैं?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => {
                setPhoneInput("");
                setPasswordInput("");
                setErrorMsg("");
                setTopTab("login");
                setShowSwitchAccountForm(true);
              },
              className: "px-3 py-1.5 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/40 text-amber-300 font-bold text-xs cursor-pointer whitespace-nowrap transition-all inline-flex items-center gap-1",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "दूसरा खाता लॉगिन करें" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3.5 h-3.5 shrink-0", strokeWidth: 1.5 })
              ]
            }
          )
        ] })
      ] }),
      (!currentUser || showSwitchAccountForm) && (!isForgotPassword ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3.5", children: topTab === "login" ? (
        /* LOGIN TAB */
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleLoginSubmit, className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold text-amber-300 mb-1.5", children: "मोबाइल नंबर या ईमेल (Mobile or Email) *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center bg-slate-950 border border-amber-900/60 focus-within:border-amber-400 rounded-xl overflow-hidden transition-all duration-300 shadow-inner", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                required: true,
                autoFocus: true,
                placeholder: "9876543210 या example@mail.com",
                value: phoneInput,
                onChange: (e) => {
                  setPhoneInput(e.target.value);
                  setErrorMsg("");
                },
                className: "w-full px-4 py-3 bg-transparent text-amber-100 font-bold text-sm sm:text-base focus:outline-none"
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold text-amber-300", children: "पासवर्ड (Password) *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    setIsForgotPassword(true);
                    setResetStep(1);
                    setErrorMsg("");
                  },
                  className: "text-[10px] font-bold text-amber-400 underline",
                  children: "पासवर्ड भूल गए?"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-4 h-4 text-amber-400 absolute left-3 top-3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: showPassword ? "text" : "password",
                  required: true,
                  placeholder: "अपना पासवर्ड दर्ज करें",
                  value: passwordInput,
                  onChange: (e) => {
                    setPasswordInput(e.target.value);
                    setErrorMsg("");
                  },
                  className: "w-full pl-9 pr-10 py-3 bg-slate-950 border border-amber-900/60 rounded-xl text-sm text-amber-100 focus:outline-none shadow-inner"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setShowPassword(!showPassword),
                  className: "absolute right-3 top-3.5 text-slate-400",
                  children: showPassword ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "w-4 h-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-4 h-4" })
                }
              )
            ] })
          ] }),
          errorMsg && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 rounded-xl bg-rose-950/80 border border-rose-500/60 text-rose-200 text-xs font-bold animate-shake", children: errorMsg }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "submit",
              disabled: isSubmitting,
              className: "w-full py-3.5 px-5 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 text-white font-black text-sm shadow-xl active:scale-95",
              children: isSubmitting ? "जाँच हो रही है..." : "लॉगिन करें (Secure Login)"
            }
          )
        ] })
      ) : (
        /* SIGN UP TAB */
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSignupSubmit, className: "space-y-3.5 animate-fadeIn", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[11px] font-bold text-amber-300 mb-1", children: "पूरा नाम (Full Name) *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  required: true,
                  placeholder: "उदा. राजेश शर्मा",
                  value: nameInput,
                  onChange: (e) => setNameInput(e.target.value),
                  className: "w-full px-3 py-2.5 bg-slate-950 border border-amber-900/60 rounded-xl text-sm text-amber-100 focus:outline-none shadow-inner"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[11px] font-bold text-amber-300 mb-1", children: "मोबाइल (+91) *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "tel",
                  required: true,
                  maxLength: 10,
                  placeholder: "9876543210",
                  value: phoneInput,
                  onChange: (e) => setPhoneInput(e.target.value.replace(/\D/g, "")),
                  className: "w-full px-3 py-2.5 bg-slate-950 border border-amber-900/60 rounded-xl text-sm text-amber-100 focus:outline-none shadow-inner"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[11px] font-bold text-amber-300 mb-1", children: "जन्म तिथि (DOB) *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                VedicDateInput,
                {
                  required: true,
                  value: dobInput,
                  onChange: (iso) => setDobInput(iso),
                  ariaLabel: "जन्म तिथि (1600–2500 ई.)"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-[11px] font-bold text-amber-300 mb-1 flex items-center justify-between gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3.5 h-3.5 text-amber-400" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "जन्म का समय (Birth Time)" })
                ] }),
                birthTimeInput && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-mono text-emerald-300 bg-emerald-950/80 px-1.5 py-0.5 rounded border border-emerald-500/40", children: birthTimeInput })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "time",
                  value: birthTimeInput,
                  onChange: (e) => {
                    setBirthTimeInput(e.target.value);
                    setApproxTimeLabel("");
                  },
                  className: "w-full px-3 py-2.5 bg-slate-950 border border-amber-900/60 rounded-xl text-sm text-amber-100 focus:outline-none shadow-inner font-mono"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 sm:p-3 rounded-xl bg-amber-950/40 border border-amber-500/35 space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] font-bold text-amber-200 flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3.5 h-3.5 text-yellow-400 flex-shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "जन्म का समय याद नहीं है? अनुमानित समय (पहर) चुनें:" })
              ] }),
              approxTimeLabel && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-bold text-emerald-300 bg-emerald-950/90 px-2 py-0.5 rounded-full border border-emerald-500/40 inline-flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-3 h-3 shrink-0", strokeWidth: 1.5 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: approxTimeLabel })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: APPROXIMATE_BIRTH_TIME_PRESETS.map((preset) => {
              const isSelected = birthTimeInput === preset.time && (approxTimeLabel === preset.shortLabel || !approxTimeLabel && preset.id !== "unknown");
              return /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    setBirthTimeInput(preset.time);
                    setApproxTimeLabel(preset.shortLabel);
                  },
                  title: preset.desc,
                  className: `px-2 py-1 rounded-lg text-[10.5px] font-bold border transition-all cursor-pointer ${isSelected ? "bg-amber-500 text-slate-950 border-yellow-300 shadow" : "bg-slate-950/90 hover:bg-amber-900/50 text-amber-200 border-amber-700/50"}`,
                  children: preset.shortLabel
                },
                preset.id
              );
            }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-amber-300/80 leading-snug", children: "सटीक समय याद न होने पर ऊपर दिए गए पहर (सुबह/दोपहर/शाम/रात्रि) में से अनुमानित समय चुनें — आपकी कुंडली व राशि स्वतः सेट हो जाएगी।" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-[11px] font-bold text-amber-300 flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-3.5 h-3.5 text-amber-400" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "जन्म का स्थान (Birth Place - शहर / गाँव का नाम) *" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-stretch gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  required: true,
                  list: "modal-signup-birth-places",
                  placeholder: "अपना जन्म स्थान लिखें (जैसे: रुद्रपुर, हल्द्वानी, दिल्ली, देहरादून...)",
                  value: birthPlaceInput,
                  onChange: (e) => setBirthPlaceInput(e.target.value),
                  className: "flex-1 min-w-0 px-3 py-2.5 bg-slate-950 border border-amber-900/60 rounded-xl text-sm text-amber-100 focus:outline-none focus:border-amber-400 shadow-inner"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                BirthPlaceGpsButton,
                {
                  size: "md",
                  label: "GPS लोकेशन",
                  onSelectPlace: (place) => setBirthPlaceInput(place),
                  title: "वर्तमान GPS लोकेशन से जन्म स्थान भरें"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("datalist", { id: "modal-signup-birth-places", children: POPULAR_BIRTH_PLACES.map((city) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: city }, city)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-1 pt-0.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-slate-400 mr-0.5", children: "प्रमुख स्थान:" }),
              [
                "रुद्रपुर, उत्तराखण्ड",
                "हल्द्वानी, उत्तराखण्ड",
                "देहरादून, उत्तराखण्ड",
                "हरिद्वार, उत्तराखण्ड",
                "नैनीताल, उत्तराखण्ड",
                "दिल्ली (New Delhi)",
                "बरेली, उत्तर प्रदेश",
                "लखनऊ, उत्तर प्रदेश"
              ].map((city) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setBirthPlaceInput(city),
                  className: `px-2 py-0.5 rounded-md text-[10px] font-semibold border transition-all cursor-pointer ${birthPlaceInput === city ? "bg-emerald-500/25 border-emerald-400 text-emerald-200 font-bold" : "bg-slate-900 border-slate-700 text-slate-300 hover:border-amber-500/50"}`,
                  children: city.split(",")[0]
                },
                city
              ))
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[11px] font-bold text-amber-300 mb-1", children: "ईमेल (Email - वैकल्पिक)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "email",
                  placeholder: "rajesh@example.com",
                  value: emailInput,
                  onChange: (e) => setEmailInput(e.target.value),
                  className: "w-full px-3 py-2.5 bg-slate-950 border border-amber-900/60 rounded-xl text-sm text-amber-100 focus:outline-none shadow-inner"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[11px] font-bold text-amber-300 mb-1", children: "पासवर्ड (Password) *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-4 h-4 text-amber-400 absolute left-3 top-3" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: showPassword ? "text" : "password",
                    required: true,
                    minLength: 3,
                    placeholder: "पासवर्ड चुनें",
                    value: passwordInput,
                    onChange: (e) => setPasswordInput(e.target.value),
                    className: "w-full pl-9 pr-10 py-2.5 bg-slate-950 border border-amber-900/60 rounded-xl text-sm text-amber-100 focus:outline-none shadow-inner"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => setShowPassword(!showPassword),
                    className: "absolute right-3 top-3 text-slate-400",
                    children: showPassword ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "w-4 h-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-4 h-4" })
                  }
                )
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-[11px] text-emerald-200/90 leading-snug flex items-start gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5", strokeWidth: 1.5 }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "आपका जन्म स्थान व समय पूरे ऐप (कुंडली, राशिफल, पंचांग व चैट) में स्वतः सेट हो जाएगा। बाद में आप इसे ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: 'मेरा खाता > "मोबाइल नंबर से जुड़ी आपकी व्यक्तिगत जानकारी"' }),
              " में कभी भी बदल सकते हैं।"
            ] })
          ] }),
          errorMsg && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 rounded-xl bg-rose-950/80 border border-rose-500/60 text-rose-200 text-xs font-bold animate-shake", children: errorMsg }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "submit",
              disabled: isSubmitting,
              className: "w-full py-3.5 px-5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 text-slate-950 font-black text-sm shadow-xl active:scale-95 cursor-pointer",
              children: isSubmitting ? "खाता बनाया जा रहा है..." : "नया खाता बनाएँ (Sign-Up)"
            }
          )
        ] })
      ) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-amber-900/40 pb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-amber-100 font-bold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-4 h-4 text-amber-400" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "पासवर्ड रीसेट करें (Forgot Password)" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: handleBackToLogin,
              className: "text-[11px] font-bold text-amber-400 hover:text-amber-300 underline cursor-pointer",
              children: "वापस लॉगिन (Back to Login)"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "form",
          {
            onSubmit: resetStep === 1 ? handleVerifyForgotPassword : handleResetPassword,
            className: "space-y-3.5",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-amber-300/80", children: resetStep === 1 ? "अपना पंजीकृत 10 अंकों का मोबाइल नंबर और जन्म तिथि दर्ज करके सत्यापित करें।" : "मोबाइल नंबर और जन्म तिथि सत्यापित हो चुकी है। अब अपना नया पासवर्ड सेट करें।" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: [
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
                      value: phoneInput,
                      onChange: (e) => {
                        setPhoneInput(e.target.value.replace(/\D/g, ""));
                        setErrorMsg("");
                      },
                      className: `w-full px-3.5 py-2.5 bg-slate-950 border rounded-xl text-amber-100 font-mono text-sm focus:outline-none ${resetStep === 2 ? "border-emerald-500/50 opacity-80 cursor-not-allowed" : "border-amber-600/50 focus:border-amber-400"}`
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold text-amber-300 mb-1.5", children: "जन्म तिथि (Date of Birth) *" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    VedicDateInput,
                    {
                      required: true,
                      disabled: resetStep === 2,
                      value: verifyDob,
                      onChange: (iso) => {
                        setVerifyDob(iso);
                        setErrorMsg("");
                      },
                      ariaLabel: "जन्म तिथि सत्यापन"
                    }
                  )
                ] })
              ] }),
              resetStep === 1 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                errorMsg && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2.5 rounded-xl bg-rose-950/80 border border-rose-500/60 text-rose-200 text-xs font-bold", children: errorMsg }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 pt-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: handleBackToLogin,
                      className: "flex-1 py-2.5 rounded-xl bg-slate-800 text-slate-300 font-bold text-xs cursor-pointer hover:bg-slate-700 border border-slate-700",
                      children: "वापस लॉगिन (Login)"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "submit",
                      disabled: isSubmitting,
                      className: "flex-[2] py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs shadow-lg cursor-pointer transition-all active:scale-95",
                      children: isSubmitting ? "सत्यापन हो रहा है..." : "विवरण सत्यापित करें (Verify Details)"
                    }
                  )
                ] })
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3.5 pt-2 border-t border-emerald-500/30 animate-fadeIn", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-xl bg-emerald-950/90 border border-emerald-500/60 text-emerald-200 text-xs font-bold flex items-center justify-between gap-2", children: [
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
                        setErrorMsg("");
                      },
                      className: "text-[10px] text-amber-300 underline hover:text-amber-200 flex-shrink-0 cursor-pointer",
                      children: "बदलें"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold text-amber-300 mb-1.5", children: "नया पासवर्ड (New Password) *" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-4 h-4 text-amber-400 absolute left-3 top-3" }),
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
                          setErrorMsg("");
                        },
                        className: "w-full pl-9 pr-10 py-2.5 bg-slate-950 border border-amber-500/70 focus:border-amber-400 rounded-xl text-sm text-amber-100 focus:outline-none"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => setShowNewPassword(!showNewPassword),
                        className: "absolute right-3 top-3 text-slate-400 hover:text-amber-200 cursor-pointer",
                        children: showNewPassword ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "w-4 h-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-4 h-4" })
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold text-amber-300 mb-1.5", children: "पासवर्ड की पुष्टि करें (Confirm Password) *" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-4 h-4 text-amber-400 absolute left-3 top-3" }),
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
                          setErrorMsg("");
                        },
                        className: "w-full pl-9 pr-10 py-2.5 bg-slate-950 border border-amber-500/70 focus:border-amber-400 rounded-xl text-sm text-amber-100 focus:outline-none"
                      }
                    )
                  ] })
                ] }),
                errorMsg && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2.5 rounded-xl bg-rose-950/80 border border-rose-500/60 text-rose-200 text-xs font-bold", children: errorMsg }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "submit",
                    disabled: isSubmitting,
                    className: "w-full py-3 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-black text-sm shadow-xl cursor-pointer transition-all active:scale-95 flex items-center justify-center gap-2",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: isSubmitting ? "नया पासवर्ड सुरक्षित किया जा रहा है..." : "नया पासवर्ड सुरक्षित करें (Save New Password)" })
                    ]
                  }
                )
              ] })
            ]
          }
        )
      ] })),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-xl bg-slate-900/70 border border-amber-900/30 flex items-start gap-2.5 text-[11px] text-slate-400", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "आपका खाता आपके व्यक्तिगत पासवर्ड से सुरक्षित है ताकि कोई दूसरा व्यक्ति आपके मोबाइल नंबर का डेटा या हिस्ट्री न देख सके।" })
      ] })
    ] })
  ] }) });
};
export {
  MobileLoginModal
};
