import { r as reactExports, j as jsxRuntimeExports } from "./vendor-react-CCbeDaYX.js";
import { U as getPrimaryFamilyProfile } from "./panchang-core-24ia-akc.js";
import { h as getTodayPanchang, l as getTodayFestivalInfo, u as useLanguage, a as SacredIcon } from "./index-AQ5SI3vl.js";
import { aa as Bell, X, a5 as CircleCheck, aL as BellRing, s as User, C as Check, S as Sparkles, n as ShieldCheck } from "./vendor-icons-Bk5Rg8-9.js";
import "./vendor-astronomy-C8JZdkQu.js";
import "./vendor-pdf-CpPyS1re.js";
import "./seo-core-DnNehtWz.js";
const NOTIFICATION_RASHIS = [
  { hindiName: "मेष", englishName: "Aries", swami: "मंगल देव", aradhyaDev: "श्री हनुमान जी" },
  { hindiName: "वृषभ", englishName: "Taurus", swami: "शुक्र देव", aradhyaDev: "माँ महालक्ष्मी" },
  { hindiName: "मिथुन", englishName: "Gemini", swami: "बुध देव", aradhyaDev: "श्री गणेश जी" },
  { hindiName: "कर्क", englishName: "Cancer", swami: "चन्द्र देव", aradhyaDev: "भगवान शिव" },
  { hindiName: "सिंह", englishName: "Leo", swami: "सूर्य देव", aradhyaDev: "भगवान सूर्य नारायण" },
  { hindiName: "कन्या", englishName: "Virgo", swami: "बुध देव", aradhyaDev: "माँ दुर्गा व श्री गणेश" },
  { hindiName: "तुला", englishName: "Libra", swami: "शुक्र देव", aradhyaDev: "माँ लक्ष्मी व श्री कृष्ण" },
  { hindiName: "वृश्चिक", englishName: "Scorpio", swami: "मंगल देव", aradhyaDev: "श्री हनुमान व कार्तिकेय" },
  { hindiName: "धनु", englishName: "Sagittarius", swami: "देवगुरु बृहस्पति", aradhyaDev: "भगवान श्री हरि विष्णु" },
  { hindiName: "मकर", englishName: "Capricorn", swami: "शनि देव", aradhyaDev: "भगवान शिव व हनुमान जी" },
  { hindiName: "कुंभ", englishName: "Aquarius", swami: "शनि देव", aradhyaDev: "भगवान शिव व भैरव नाथ" },
  { hindiName: "मीन", englishName: "Pisces", swami: "देवगुरु बृहस्पति", aradhyaDev: "भगवान श्री विष्णु व दत्तात्रेय" }
];
const SETTINGS_KEY = "panditji_smart_notifications_v1";
const DEFAULT_NOTIFICATION_SETTINGS = {
  enabled: false,
  reminderTime: "07:00",
  notifyHoroscope: true,
  notifyMuhurat: true,
  notifyVratTyohar: true
};
function getNotificationSettings() {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    if (!raw) return DEFAULT_NOTIFICATION_SETTINGS;
    return { ...DEFAULT_NOTIFICATION_SETTINGS, ...JSON.parse(raw) };
  } catch {
    return DEFAULT_NOTIFICATION_SETTINGS;
  }
}
function saveNotificationSettings(settings) {
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
    window.dispatchEvent(new CustomEvent("panditji_notifications_settings_changed", { detail: settings }));
  } catch (err) {
    console.error("Error saving notification settings:", err);
  }
}
function isNotificationSupported() {
  return typeof window !== "undefined" && "Notification" in window;
}
async function requestNotificationPermission() {
  if (!isNotificationSupported()) {
    console.warn("Web Notifications not supported in this browser.");
    return false;
  }
  try {
    const permission = await Notification.requestPermission();
    const isGranted = permission === "granted";
    if (isGranted) {
      const current = getNotificationSettings();
      saveNotificationSettings({ ...current, enabled: true });
    }
    return isGranted;
  } catch (err) {
    console.error("Notification permission error:", err);
    return false;
  }
}
function buildPersonalizedDailyNotification() {
  const primaryProfile = getPrimaryFamilyProfile();
  const settings = getNotificationSettings();
  const panchang = getTodayPanchang(/* @__PURE__ */ new Date());
  const festival = getTodayFestivalInfo();
  const name = settings.userName?.trim() || primaryProfile?.name?.trim() || "भक्त";
  const rawRashi = settings.userRashi || primaryProfile?.rashi || "मेष";
  const cleanRashi = rawRashi.split(" ")[0].trim();
  const matchedRashi = NOTIFICATION_RASHIS.find(
    (r) => r.hindiName.includes(cleanRashi) || cleanRashi.includes(r.hindiName) || r.englishName.toLowerCase() === cleanRashi.toLowerCase()
  ) || NOTIFICATION_RASHIS[0];
  const title = `${name} जी, सादर प्रणाम! आज का वैदिक संदेश`;
  const lines = [];
  if (settings.notifyHoroscope) {
    lines.push(
      `${matchedRashi.hindiName} राशि: ${matchedRashi.swami} की कृपा से आज का दिन शुभ है। इष्ट: ${matchedRashi.aradhyaDev}।`
    );
  }
  if (settings.notifyMuhurat) {
    const abhijit = panchang.abhijitMuhurat || "दोपहर 11:45 से 12:30";
    const rahu = panchang.rahuKaal || "दोपहर 03:00 से 04:30";
    lines.push(`अभिजित मुहूर्त: ${abhijit} | राहुकाल: ${rahu} (त्याज्य)`);
  }
  if (settings.notifyVratTyohar) {
    if (festival && festival.name) {
      lines.push(`आज का पावन पर्व: ${festival.name} (${panchang.tithi})`);
    } else {
      lines.push(`आज की तिथि: ${panchang.tithi}, ${panchang.paksha} पक्ष`);
    }
  }
  lines.push("ॐ श्री गणेशाय नमः • पण्डित जी ऑनलाइन");
  return {
    title,
    body: lines.join("\n"),
    name,
    rashi: matchedRashi.hindiName,
    festival: festival?.name || panchang.tithi,
    abhijit: panchang.abhijitMuhurat,
    rahuKaal: panchang.rahuKaal
  };
}
const SmartNotificationManager = ({
  isOpen = false,
  onClose,
  currentUser
}) => {
  const { tr } = useLanguage();
  const [settings, setSettings] = reactExports.useState(() => getNotificationSettings());
  const [permission, setPermission] = reactExports.useState("default");
  const [statusMsg, setStatusMsg] = reactExports.useState("");
  const primaryProfile = getPrimaryFamilyProfile();
  const refreshState = () => {
    const loaded = getNotificationSettings();
    setSettings(loaded);
    if (typeof window !== "undefined" && "Notification" in window) {
      setPermission(Notification.permission);
    }
  };
  reactExports.useEffect(() => {
    refreshState();
    const handleUpdate = () => refreshState();
    window.addEventListener("panditji_notifications_settings_changed", handleUpdate);
    window.addEventListener("panditji_vault_updated", handleUpdate);
    return () => {
      window.removeEventListener("panditji_notifications_settings_changed", handleUpdate);
      window.removeEventListener("panditji_vault_updated", handleUpdate);
    };
  }, []);
  const resolvedUserName = settings.userName?.trim() || currentUser?.name?.trim() || primaryProfile?.name?.trim() || "शशांक";
  const handleToggleEnable = async (checked) => {
    if (checked) {
      const granted = await requestNotificationPermission();
      if (!granted) {
        setStatusMsg("कृपया अपने ब्राउज़र/फोन सेटिंग्स में नोटिफिकेशन अनुमति (Allow) चालू करें।");
        setTimeout(() => setStatusMsg(""), 5e3);
        return;
      }
      setStatusMsg("दैनिक सूचनाएं चालू कर दी गई हैं! प्रतिदिन प्रातः 07:00 बजे नोटिफिकेशन मिलेगा।");
      setTimeout(() => setStatusMsg(""), 4e3);
    }
    const updated = { ...settings, enabled: checked };
    setSettings(updated);
    saveNotificationSettings(updated);
    refreshState();
  };
  const handleUpdateName = (newName) => {
    const updated = { ...settings, userName: newName };
    setSettings(updated);
    saveNotificationSettings(updated);
  };
  if (!isOpen) return null;
  buildPersonalizedDailyNotification();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex flex-col items-center justify-start p-3 sm:p-4 bg-black/90 backdrop-blur-md overflow-y-auto animate-fadeIn pt-12 sm:pt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full max-w-md rounded-3xl bg-[#0e1424] border-2 border-amber-500/70 p-5 sm:p-6 shadow-2xl space-y-4 mb-10 sm:mb-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-amber-800/40 pb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 rounded-xl bg-amber-500/20 text-yellow-300 border border-amber-500/40", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "w-5 h-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base sm:text-lg font-bold font-vedic text-yellow-200", children: "दैनिक सूचनाएं (Daily Notifications)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-amber-300/70", children: "प्रतिदिन प्रातःकाल शुभ संदेश व दैनिक पंचांग अलर्ट" })
        ] })
      ] }),
      onClose && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: onClose,
          className: "p-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-400 hover:text-white border border-amber-700/50 cursor-pointer transition-colors",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5" })
        }
      )
    ] }),
    statusMsg && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-xl bg-amber-950/90 border border-amber-500/60 text-yellow-300 text-xs font-semibold flex items-center gap-2 animate-fadeIn", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 text-emerald-400 flex-shrink-0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: statusMsg })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-2xl bg-[#131b2e] border border-amber-600/50 flex items-center justify-between gap-3 shadow-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm font-bold text-amber-100 flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(BellRing, { className: "w-4 h-4 text-amber-400 flex-shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "दैनिक सूचनाएं चालू करें" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-amber-300/80 mt-0.5 leading-snug", children: "ON करने पर प्रतिदिन सुबह स्वतः आपके फोन पर राशिफल व पंचांग अलर्ट आएगा।" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "relative inline-flex items-center cursor-pointer flex-shrink-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "checkbox",
            checked: settings.enabled && permission === "granted",
            onChange: (e) => handleToggleEnable(e.target.checked),
            className: "sr-only peer"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-6.5 bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5.5 after:w-5.5 after:transition-all peer-checked:bg-amber-500" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-2xl bg-[#131b2e] border border-amber-700/40 space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-xs font-bold text-amber-200 flex items-center gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-4 h-4 text-amber-400" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "आपका नाम (सूचना में अभिवादन हेतु)" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            value: settings.userName !== void 0 ? settings.userName : resolvedUserName,
            onChange: (e) => handleUpdateName(e.target.value),
            placeholder: "उदा. शशांक",
            className: "w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-amber-600/50 text-xs sm:text-sm font-semibold text-amber-100 focus:outline-none focus:border-amber-400"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "absolute right-3 top-2.5 text-xs text-emerald-400 font-bold inline-flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-3.5 h-3.5 shrink-0", strokeWidth: 1.5 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "सक्रिय" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-amber-300/70", children: [
        "सूचना में सीधे: ",
        /* @__PURE__ */ jsxRuntimeExports.jsxs("b", { children: [
          '"',
          resolvedUserName,
          ' जी, सादर प्रणाम!"'
        ] }),
        " लिखकर आएगा।"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-2xl bg-black/70 border border-amber-600/40 space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs text-amber-300 font-bold border-b border-amber-900/50 pb-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3.5 h-3.5 text-theme-primary", strokeWidth: 1.5 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "आपके फोन पर ऐसी सूचना दिखेगी:" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-amber-400/80 font-mono", children: "07:00 AM" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-xl bg-[#0f172a] border border-amber-500/40 space-y-1 shadow-inner", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs sm:text-sm font-bold text-yellow-300 font-vedic flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "namaste", size: "w-4 h-4", tone: "theme" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            resolvedUserName,
            " जी, सादर प्रणाम! आज का वैदिक संदेश"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-amber-200/90 leading-relaxed font-sans flex items-start gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "sparkles", size: "w-3.5 h-3.5", tone: "theme", className: "mt-0.5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "आज का पंचांग, अभिजित मुहूर्त एवं दैनिक राशिफल तैयार है।",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "ॐ श्री गणेशाय नमः • पण्डित जी ऑनलाइन"
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-xl bg-amber-950/40 border border-amber-800/40 text-[11px] text-amber-300/90 leading-relaxed flex items-start gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "सूचनाएं प्रतिदिन प्रातः 07:00 बजे सिस्टम द्वारा स्वतः आपके डिवाइस पर भेज दी जायेंगी। आपको खुद से कुछ भेजने की आवश्यकता नहीं है।" })
    ] }),
    onClose && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: onClose,
        className: "w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-slate-950 font-extrabold text-xs shadow-md transition-all cursor-pointer",
        children: "सहेजें एवं बंद करें (Done)"
      }
    ) })
  ] }) });
};
export {
  SmartNotificationManager
};
