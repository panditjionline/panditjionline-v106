import { r as reactExports, j as jsxRuntimeExports } from "./vendor-react-CCbeDaYX.js";
import { b as useFestiveTheme, a as SacredIcon, F as VedicWhatsAppSvg, v as vedicAudio } from "./index-AQ5SI3vl.js";
import { X, D as Download, a5 as CircleCheck, Y as Copy, S as Sparkles } from "./vendor-icons-Bk5Rg8-9.js";
import "./vendor-pdf-CpPyS1re.js";
import "./panchang-core-24ia-akc.js";
import "./vendor-astronomy-C8JZdkQu.js";
import "./seo-core-DnNehtWz.js";
function resolveBulbAnimClass(idx, animMode = "twinkle", isSoft = false) {
  if (isSoft) return "festive-bulb-soft";
  if (animMode === "running_chase") {
    return `festive-chase-${idx % 4}`;
  }
  if (animMode === "breathing_aarti") {
    return "festive-bulb-breathe";
  }
  if (animMode === "sparkle_flash") {
    return idx % 2 === 0 ? "festive-bulb-sparkle-a" : "festive-bulb-sparkle-b";
  }
  if (animMode === "steady") {
    return "festive-bulb-steady";
  }
  return idx % 3 === 0 ? "festive-bulb-a" : idx % 3 === 1 ? "festive-bulb-b" : "festive-bulb-c";
}
const PUSHP_VARSHA_EVENT = "panditji_trigger_pushp_varsha";
const OPEN_FESTIVE_GREETING_MODAL_EVENT = "panditji_open_festive_greeting_modal";
function triggerFestivePushpVarsha() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(PUSHP_VARSHA_EVENT));
}
function openFestiveGreetingModal() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(OPEN_FESTIVE_GREETING_MODAL_EVENT));
}
function getFestiveLightPalette(theme) {
  const id = (theme?.id || "").toLowerCase();
  const primary = theme?.primaryHex || "#f59e0b";
  const accent = theme?.accentHex || "#fde047";
  if (id.includes("holi")) {
    return {
      bulbs: ["#ec4899", "#facc15", "#10b981", "#38bdf8"],
      glowColor: "rgba(236, 72, 153, 0.55)",
      wireColor: "#f59e0b",
      diyaFlame: "#fde047",
      styleLabelHi: "सतरंगी गुलाल उत्सव झालर (Pink • Gold • Emerald • Cyan)",
      toranLeafColor: "#10b981",
      toranFlowerOuter: "#ec4899",
      toranFlowerInner: "#facc15",
      toranLabelHi: "सतरंगी गुलाल व वसंत पुष्प वंदनवार",
      pushpIcons: ["lotus", "sparkles", "palette", "lotus", "sparkles"]
    };
  }
  if (id.includes("diwali") || id.includes("dhanteras") || id.includes("govardhan") || id.includes("bhai-dooj")) {
    return {
      bulbs: ["#fde047", "#f97316", "#ef4444", "#fbbf24"],
      glowColor: "rgba(251, 191, 36, 0.65)",
      wireColor: "#fcd34d",
      diyaFlame: "#fef08a",
      styleLabelHi: "स्वर्ण-माणिक्य महालक्ष्मी दीपोत्सव झालर (Gold • Saffron • Ruby)",
      toranLeafColor: "#15803d",
      toranFlowerOuter: "#f97316",
      toranFlowerInner: "#fde047",
      toranLabelHi: "महालक्ष्मी गेंदा-कमल व आम्र-पल्लव तोरण",
      pushpIcons: ["lotus", "diya", "sparkles", "lotus", "diya"]
    };
  }
  if (id.includes("shiv") || id.includes("sawan") || id.includes("pradosh") || id.includes("nag-panchami") || id.includes("monday")) {
    return {
      bulbs: ["#38bdf8", "#fef08a", "#60a5fa", "#fbbf24"],
      glowColor: "rgba(56, 189, 248, 0.55)",
      wireColor: "#bae6fd",
      diyaFlame: "#fef08a",
      styleLabelHi: "कैलाश नीलकंठ एवं रुद्र-स्वर्ण ज्योति झालर (Neelkanth Blue • Gold)",
      toranLeafColor: "#059669",
      toranFlowerOuter: "#b45309",
      toranFlowerInner: "#fef08a",
      toranLabelHi: "शिवप्रिय बेलपत्र एवं रुद्राक्ष वंदनवार",
      pushpIcons: ["dhoop", "trishul", "sparkles", "om", "lotus"]
    };
  }
  if (id.includes("navratri") || id.includes("durga") || id.includes("dussehra") || id.includes("karwa") || id.includes("teej") || id.includes("friday") || id.includes("lakshmi")) {
    return {
      bulbs: ["#f43f5e", "#fde047", "#fb923c", "#ec4899"],
      glowColor: "rgba(244, 63, 94, 0.55)",
      wireColor: "#fcd34d",
      diyaFlame: "#fde047",
      styleLabelHi: "जगदम्बा कुमकुम-स्वर्ण शक्ति दीपमाला (Kumkum Crimson • Swarna Gold)",
      toranLeafColor: "#16a34a",
      toranFlowerOuter: "#e11d48",
      toranFlowerInner: "#fde047",
      toranLabelHi: "शक्तिपीठ गुड़हल-कमल एवं अशोक पल्लव तोरण",
      pushpIcons: ["lotus", "kalash", "diya", "sparkles", "lotus"]
    };
  }
  if (id.includes("ganesh") || id.includes("anant") || id.includes("wednesday")) {
    return {
      bulbs: ["#10b981", "#fde047", "#f97316", "#34d399"],
      glowColor: "rgba(16, 185, 129, 0.55)",
      wireColor: "#fcd34d",
      diyaFlame: "#fde047",
      styleLabelHi: "सिद्धिविनायक दूर्वा-पन्ना व सिंदूर-स्वर्ण झालर (Emerald • Gold • Sindoor)",
      toranLeafColor: "#10b981",
      toranFlowerOuter: "#f97316",
      toranFlowerInner: "#fde047",
      toranLabelHi: "सिद्धिविनायक दूर्वा-अंकुर व गेंदा तोरण",
      pushpIcons: ["dhoop", "tilak", "lotus", "om", "sparkles"]
    };
  }
  if (id.includes("janmashtami") || id.includes("krishna") || id.includes("vasant") || id.includes("ekadashi") || id.includes("purnima") || id.includes("rath-yatra") || id.includes("thursday") || id.includes("vishnu") || id.includes("akshaya") || id.includes("tulsi") || id.includes("geeta")) {
    return {
      bulbs: ["#facc15", "#2dd4bf", "#fde047", "#fb923c"],
      glowColor: "rgba(250, 204, 21, 0.6)",
      wireColor: "#fde047",
      diyaFlame: "#fef08a",
      styleLabelHi: "पीताम्बर-मयूर एवं बैकुण्ठ स्वर्ण रोशनी (Peetambar Gold • Peacock Teal)",
      toranLeafColor: "#0d9488",
      toranFlowerOuter: "#facc15",
      toranFlowerInner: "#2dd4bf",
      toranLabelHi: "मोरपंख, तुलसी-दल व पीत-पुष्प वंदनवार",
      pushpIcons: ["bansuri", "dhoop", "lotus", "sparkles", "diya"]
    };
  }
  if (id.includes("shani") || id.includes("saturday")) {
    return {
      bulbs: ["#818cf8", "#fbbf24", "#38bdf8", "#c084fc"],
      glowColor: "rgba(129, 140, 248, 0.55)",
      wireColor: "#c7d2fe",
      diyaFlame: "#fde047",
      styleLabelHi: "नीलमणि-इंद्रनील एवं स्वर्ण ज्योति झालर (Indigo • Royal Violet • Gold)",
      toranLeafColor: "#047857",
      toranFlowerOuter: "#6366f1",
      toranFlowerInner: "#fde047",
      toranLabelHi: "शमी-पत्र एवं नीलकमल वंदनवार",
      pushpIcons: ["lotus", "dhoop", "diya", "sparkles", "shani"]
    };
  }
  return {
    bulbs: [accent, primary, "#fde047", "#ef4444"],
    glowColor: theme?.glowRgba || "rgba(251, 191, 36, 0.55)",
    wireColor: "#fcd34d",
    diyaFlame: "#fef08a",
    styleLabelHi: "सूर्यवंशी भगवा-सिंदूरी एवं स्वर्ण दीपमाला (Saffron • Gold • Vermilion)",
    toranLeafColor: "#15803d",
    toranFlowerOuter: "#f97316",
    toranFlowerInner: "#fde047",
    toranLabelHi: "अयोध्या-काशी भगवा गेंदा व आम्र-पल्लव तोरण",
    pushpIcons: ["lotus", "dhwaja", "diya", "sparkles", "dhoop"]
  };
}
const FestiveHairlineDivider = ({
  variant = "section",
  className = "",
  intensityOverride,
  effectOverride
}) => {
  const {
    activeTheme,
    isHairlineActive,
    isSandhyaAartiTime,
    hairlineIntensity,
    hairlineEffect,
    hairlineSpeed,
    royalEngineEnabled
  } = useFestiveTheme();
  const palette = reactExports.useMemo(() => getFestiveLightPalette(activeTheme), [activeTheme]);
  if (!isHairlineActive) {
    return null;
  }
  const intensity = intensityOverride || hairlineIntensity || "medium";
  const effect = effectOverride || hairlineEffect || "festival";
  const speed = hairlineSpeed || "normal";
  let spectrumGradient = "";
  if (effect === "festival") {
    spectrumGradient = royalEngineEnabled ? "var(--theme-spectrum-gradient)" : `linear-gradient(90deg, ${palette.bulbs[0]}, ${palette.bulbs[1]}, ${palette.diyaFlame}, ${palette.bulbs[2]}, ${palette.bulbs[3]}, #ffffff, ${palette.bulbs[0]})`;
  } else if (effect === "golden") {
    spectrumGradient = "linear-gradient(90deg, #92400e, #d97706, #fbbf24, #fef08a, #ffffff, #fbbf24, #d97706, #92400e)";
  } else if (effect === "pulse") {
    spectrumGradient = `linear-gradient(90deg, ${palette.bulbs[0]}, #ffffff, ${palette.bulbs[1]}, #ffffff, ${palette.bulbs[0]})`;
  } else if (effect === "aurora_agni") {
    spectrumGradient = "linear-gradient(90deg, #dc2626, #ea580c, #f59e0b, #fef08a, #ffffff, #fde047, #ea580c, #dc2626)";
  } else if (effect === "neelkanth_peacock") {
    spectrumGradient = "linear-gradient(90deg, #059669, #10b981, #06b6d4, #38bdf8, #fde047, #6366f1, #06b6d4, #059669)";
  } else {
    spectrumGradient = "linear-gradient(90deg, #ec4899, #f59e0b, #fde047, #10b981, #06b6d4, #8b5cf6, #ec4899)";
  }
  let heightClass = "h-[2px]";
  let glowShadow = royalEngineEnabled ? "var(--theme-glow)" : `0 0 12px 1.5px ${palette.glowColor}`;
  let baseOpacity = "opacity-95";
  if (intensity === "slim") {
    heightClass = variant === "compact" ? "h-[1px]" : "h-[1.5px]";
    glowShadow = royalEngineEnabled && effect === "festival" ? "var(--theme-glow)" : `0 0 6px ${palette.glowColor}`;
    baseOpacity = "opacity-90";
  } else if (intensity === "bold") {
    heightClass = variant === "compact" ? "h-[2.5px]" : "h-[4px]";
    glowShadow = isSandhyaAartiTime ? `0 0 20px 3px #fde047, 0 0 32px ${palette.glowColor}` : `0 0 16px 2.5px ${palette.glowColor}, 0 0 26px rgba(251, 191, 36, 0.65)`;
    baseOpacity = "opacity-100";
  } else {
    heightClass = variant === "compact" ? "h-[1.5px]" : "h-[2px]";
    glowShadow = royalEngineEnabled && effect === "festival" ? "var(--theme-glow)" : isSandhyaAartiTime ? `0 0 14px 2px #fde047, 0 0 22px ${palette.glowColor}` : `0 0 10px 1.5px ${palette.glowColor}`;
    baseOpacity = "opacity-95";
  }
  const durationSec = speed === "slow" ? "12s" : speed === "fast" ? "3.5s" : "7s";
  const pulseClass = effect === "pulse" ? "animate-festive-hairline-pulse" : "";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "aria-hidden": "true",
      className: `relative w-full pointer-events-none select-none overflow-hidden z-20 ${className}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: `w-full ${heightClass} ${baseOpacity} animate-festive-hairline ${pulseClass} transition-all duration-300`,
          style: {
            background: spectrumGradient,
            boxShadow: glowShadow,
            animationDuration: durationSec
          }
        }
      )
    }
  );
};
const HeaderBandhanwarToran = ({
  palette,
  className = "",
  styleOverride
}) => {
  const { showToran, toranStyle } = useFestiveTheme();
  if (!showToran) return null;
  const activeStyle = styleOverride || toranStyle || "marigold_mango";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "aria-hidden": "true",
      className: `relative w-full h-[28px] sm:h-[32px] px-1 pointer-events-none select-none overflow-visible z-25 drop-shadow-md flex items-start justify-between ${className}`,
      children: Array.from({ length: 14 }).map((_, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: `flex-1 h-full min-w-0 ${idx >= 7 ? "hidden sm:block" : "block"}`,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "svg",
            {
              viewBox: "0 0 60 34",
              preserveAspectRatio: "xMidYMin meet",
              className: "w-full h-full block overflow-visible",
              xmlns: "http://www.w3.org/2000/svg",
              children: activeStyle === "pearl_swarna" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "path",
                  {
                    d: "M 1 4 Q 30 16 59 4",
                    fill: "none",
                    stroke: "#fef08a",
                    strokeWidth: "1.4",
                    strokeDasharray: "2.5 2"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "path",
                  {
                    d: "M 1 4 Q 30 24 59 4",
                    fill: "none",
                    stroke: "#f59e0b",
                    strokeWidth: "1.2",
                    strokeDasharray: "2 2.2"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "path",
                  {
                    d: "M 1 3.5 L 59 3.5",
                    stroke: "#fde047",
                    strokeWidth: "2",
                    strokeLinecap: "round"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "14", cy: "11", r: "1.7", fill: "#ffffff", stroke: "#fde047", strokeWidth: "0.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "46", cy: "11", r: "1.7", fill: "#ffffff", stroke: "#fde047", strokeWidth: "0.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "20", cy: "17", r: "1.8", fill: "#fef08a" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "40", cy: "17", r: "1.8", fill: "#fef08a" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "polygon",
                  {
                    points: "30,6 35,13 30,22 25,13",
                    fill: palette.toranFlowerOuter,
                    stroke: "#fef08a",
                    strokeWidth: "1.1"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "30", cy: "13", r: "2", fill: "#ffffff" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "30", cy: "25.5", r: "2.2", fill: "#fde047" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "30", cy: "29.5", r: "1.5", fill: "#ffffff" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "4", cy: "4", r: "3", fill: "#fde047", stroke: "#b45309", strokeWidth: "0.8" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "56", cy: "4", r: "3", fill: "#fde047", stroke: "#b45309", strokeWidth: "0.8" })
              ] }) : activeStyle === "rudraksha_belpatra" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "path",
                  {
                    d: "M 1 4 Q 30 8 59 4",
                    fill: "none",
                    stroke: "#fcd34d",
                    strokeWidth: "1.6"
                  }
                ),
                [10, 19, 41, 50].map((bx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: bx, cy: "5.2", r: "2.5", fill: "#92400e", stroke: "#fbbf24", strokeWidth: "0.7" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: bx, cy: "5.2", r: "0.9", fill: "#fde047" })
                ] }, bx)),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "path",
                  {
                    d: "M 29 9 C 18 10, 14 18, 22 24 C 26 20, 28 14, 29 9 Z",
                    fill: "#15803d",
                    stroke: "#fde047",
                    strokeWidth: "0.8"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "path",
                  {
                    d: "M 31 9 C 42 10, 46 18, 38 24 C 34 20, 32 14, 31 9 Z",
                    fill: "#15803d",
                    stroke: "#fde047",
                    strokeWidth: "0.8"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "path",
                  {
                    d: "M 30 8 C 23 15, 24 25, 30 31 C 36 25, 37 15, 30 8 Z",
                    fill: "#16a34a",
                    stroke: "#fef08a",
                    strokeWidth: "0.95"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "30", y1: "9", x2: "30", y2: "29", stroke: "#fef08a", strokeWidth: "0.65" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "30", cy: "7", r: "4.8", fill: "#78350f", stroke: "#fde047", strokeWidth: "1.1" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "26.5", y1: "6", x2: "33.5", y2: "6", stroke: "#fef08a", strokeWidth: "0.8" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "26", y1: "7.3", x2: "34", y2: "7.3", stroke: "#fef08a", strokeWidth: "0.8" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "26.5", y1: "8.6", x2: "33.5", y2: "8.6", stroke: "#fef08a", strokeWidth: "0.8" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "30", cy: "7.3", r: "1.4", fill: "#ef4444" })
              ] }) : activeStyle === "lotus_ashoka" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "path",
                  {
                    d: "M 1 4 Q 30 9 59 4",
                    fill: "none",
                    stroke: "#fcd34d",
                    strokeWidth: "2",
                    strokeLinecap: "round"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "path",
                  {
                    d: "M 29 6 C 18 10, 15 19, 24 29 C 26 20, 29 12, 29 6 Z",
                    fill: palette.toranLeafColor,
                    stroke: "#fde047",
                    strokeWidth: "0.85"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "path",
                  {
                    d: "M 31 6 C 42 10, 45 19, 36 29 C 34 20, 31 12, 31 6 Z",
                    fill: palette.toranLeafColor,
                    stroke: "#fde047",
                    strokeWidth: "0.85"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "30", cy: "29.5", r: "1.7", fill: "#f472b6" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "30", cy: "32.2", r: "1.2", fill: "#fde047" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { transform: "translate(30, 9)", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M 0 3 C -9 2, -11 -4, -5 -6 C -2 -4, -1 0, 0 3 Z", fill: "#ec4899", stroke: "#fbcfe8", strokeWidth: "0.5" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M 0 3 C 9 2, 11 -4, 5 -6 C 2 -4, 1 0, 0 3 Z", fill: "#ec4899", stroke: "#fbcfe8", strokeWidth: "0.5" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M 0 3 C -6 0, -6 -7, -2.5 -8 C -1 -5, 0 -1, 0 3 Z", fill: "#f472b6", stroke: "#fce7f3", strokeWidth: "0.5" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M 0 3 C 6 0, 6 -7, 2.5 -8 C 1 -5, 0 -1, 0 3 Z", fill: "#f472b6", stroke: "#fce7f3", strokeWidth: "0.5" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M 0 3 C -3.5 -2, -3 -8, 0 -9.5 C 3 -8, 3.5 -2, 0 3 Z", fill: "#fbcfe8", stroke: "#fde047", strokeWidth: "0.6" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "0", cy: "1.2", r: "2.2", fill: "#fde047" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "4", cy: "4", r: "3", fill: "#f472b6", stroke: "#fde047", strokeWidth: "0.7" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "56", cy: "4", r: "3", fill: "#f472b6", stroke: "#fde047", strokeWidth: "0.7" })
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "path",
                  {
                    d: "M 1 4 Q 30 9 59 4",
                    fill: "none",
                    stroke: "#fcd34d",
                    strokeWidth: "2",
                    strokeLinecap: "round"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "path",
                  {
                    d: "M 1 4 Q 30 9 59 4",
                    fill: "none",
                    stroke: "#f59e0b",
                    strokeWidth: "1",
                    strokeDasharray: "3 2"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "path",
                  {
                    d: "M 29 5 C 19 9, 16 18, 25 28 C 27 19, 29 11, 29 5 Z",
                    fill: palette.toranLeafColor,
                    stroke: "#fde047",
                    strokeWidth: "0.85"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "path",
                  {
                    d: "M 29 5 Q 24 17 25 28",
                    fill: "none",
                    stroke: "#fde047",
                    strokeWidth: "0.6",
                    strokeOpacity: "0.85"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "path",
                  {
                    d: "M 31 5 C 41 9, 44 18, 35 28 C 33 19, 31 11, 31 5 Z",
                    fill: palette.toranLeafColor,
                    stroke: "#fde047",
                    strokeWidth: "0.85"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "path",
                  {
                    d: "M 31 5 Q 36 17 35 28",
                    fill: "none",
                    stroke: "#fde047",
                    strokeWidth: "0.6",
                    strokeOpacity: "0.85"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "30", cy: "29.5", r: "1.6", fill: "#fde047" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "30", cy: "32", r: "1.1", fill: palette.toranFlowerOuter }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { transform: "translate(30, 7.5)", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { r: "6", fill: palette.toranFlowerOuter }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "-2.8", cy: "-2.8", r: "2.1", fill: palette.toranFlowerOuter, opacity: "0.92" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "2.8", cy: "-2.8", r: "2.1", fill: palette.toranFlowerOuter, opacity: "0.92" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "-2.8", cy: "2.8", r: "2.1", fill: palette.toranFlowerOuter, opacity: "0.92" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "2.8", cy: "2.8", r: "2.1", fill: palette.toranFlowerOuter, opacity: "0.92" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { r: "3.6", fill: palette.toranFlowerInner }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { r: "1.5", fill: "#ffffff" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { transform: "translate(4, 4)", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { r: "3", fill: palette.toranFlowerInner }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { r: "1.5", fill: "#d97706" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { transform: "translate(56, 4)", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { r: "3", fill: palette.toranFlowerInner }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { r: "1.5", fill: "#d97706" })
                ] })
              ] })
            }
          )
        },
        idx
      ))
    }
  );
};
const HeaderFestiveJhalar = ({
  position = "top"
}) => {
  const {
    activeTheme,
    areLightsActive,
    areBulbsActive,
    isHairlineActive,
    lightsMode,
    jhalarAnimation,
    cornerLadiMode,
    showToran,
    isSandhyaAartiTime
  } = useFestiveTheme();
  const palette = reactExports.useMemo(() => getFestiveLightPalette(activeTheme), [activeTheme]);
  if (!areLightsActive) {
    return null;
  }
  if (position === "bottom") {
    const isSoft = lightsMode === "soft_glow";
    const isDiyaMala = lightsMode === "diya_mala";
    const isTempleBells = lightsMode === "temple_bells";
    const isChandelier = lightsMode === "crystal_chandeliers";
    const showCornerLadi = cornerLadiMode !== "off" && (cornerLadiMode === "grand_curtain" || lightsMode === "royal_jhalar" || lightsMode === "diya_mala" || lightsMode === "temple_bells" || lightsMode === "crystal_chandeliers");
    const isGrandCurtain = cornerLadiMode === "grand_curtain";
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        "aria-hidden": "true",
        className: "relative w-full pointer-events-none select-none overflow-visible z-30",
        children: [
          isHairlineActive && /* @__PURE__ */ jsxRuntimeExports.jsx(FestiveHairlineDivider, { variant: "header" }),
          showToran && /* @__PURE__ */ jsxRuntimeExports.jsx(HeaderBandhanwarToran, { palette }),
          areBulbsActive && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: `w-full px-1 flex items-start justify-between ${isSoft ? "h-[16px] sm:h-[18px]" : isDiyaMala || isTempleBells || isChandelier ? "h-[24px] sm:h-[28px]" : "h-[20px] sm:h-[24px]"} overflow-visible`,
                children: Array.from({ length: 14 }).map((_, idx) => {
                  const colorValley = palette.bulbs[idx % 4];
                  const colorLeft = palette.bulbs[(idx + 1) % 4];
                  const colorRight = palette.bulbs[(idx + 2) % 4];
                  const colorPeak = palette.bulbs[(idx + 3) % 4];
                  const phaseValley = resolveBulbAnimClass(idx, jhalarAnimation, isSoft);
                  const phaseSide = resolveBulbAnimClass(idx + 1, jhalarAnimation, isSoft);
                  return /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: `flex-1 h-full min-w-0 ${idx >= 7 ? "hidden sm:block" : "block"}`,
                      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "svg",
                        {
                          viewBox: "0 0 80 28",
                          preserveAspectRatio: "xMidYMin meet",
                          className: "w-full h-full block overflow-visible",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "path",
                              {
                                d: isSoft ? "M 2 2 Q 40 12 78 2" : "M 2 2 Q 40 20 78 2",
                                fill: "none",
                                stroke: palette.wireColor,
                                strokeOpacity: isSoft ? "0.6" : "0.85",
                                strokeWidth: isSoft ? "1.1" : "1.5"
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "3", cy: "2.5", r: isSoft ? 1.5 : 2.2, fill: colorPeak, opacity: "0.9" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "77", cy: "2.5", r: isSoft ? 1.5 : 2.2, fill: colorPeak, opacity: "0.9" }),
                            !isSoft && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { className: phaseSide, children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "21", cy: "8.5", r: "4.8", fill: colorLeft, opacity: "0.28" }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "21", cy: "8.5", r: "2.6", fill: colorLeft }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "21", cy: "8.5", r: "1.1", fill: "#ffffff" })
                              ] }),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { className: phaseSide, children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "59", cy: "8.5", r: "4.8", fill: colorRight, opacity: "0.28" }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "59", cy: "8.5", r: "2.6", fill: colorRight }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "59", cy: "8.5", r: "1.1", fill: "#ffffff" })
                              ] })
                            ] }),
                            isDiyaMala ? /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "40", y1: "10", x2: "40", y2: "17", stroke: "#fcd34d", strokeWidth: "1.2" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "40", cy: "16", r: "8.5", fill: "#fde047", opacity: "0.32", className: phaseValley }),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { className: "animate-flame-flicker", children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  "path",
                                  {
                                    d: "M 40 10.5 C 37.2 14, 37.2 17, 40 18.5 C 42.8 17, 42.8 14, 40 10.5 Z",
                                    fill: "#fde047"
                                  }
                                ),
                                /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "40", cy: "16", r: "1.5", fill: "#ffffff" })
                              ] }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "path",
                                {
                                  d: "M 32.5 18.5 Q 40 25.5 47.5 18.5 Z",
                                  fill: "#d97706",
                                  stroke: "#fef08a",
                                  strokeWidth: "0.85"
                                }
                              )
                            ] }) : isTempleBells ? /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { className: phaseValley, children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "40", cy: "17", r: "8", fill: "#fbbf24", opacity: "0.26" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "40", cy: "10.5", r: "1.5", fill: "#fde047" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "path",
                                {
                                  d: "M 35.5 12 C 35.5 9.5, 44.5 9.5, 44.5 12 L 46.8 20.5 L 33.2 20.5 Z",
                                  fill: "#f59e0b",
                                  stroke: "#fef08a",
                                  strokeWidth: "0.9"
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "34.5", y1: "18.5", x2: "45.5", y2: "18.5", stroke: "#fef08a", strokeWidth: "0.7" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "40", cy: "22", r: "2", fill: "#ffffff" })
                            ] }) : isChandelier ? /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { className: phaseValley, children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "40", cy: "16.5", r: "8.5", fill: colorValley, opacity: "0.3" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "40", cy: "10", r: "1.4", fill: "#ffffff" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "polygon",
                                {
                                  points: "40,11.5 45.5,17.5 40,24.5 34.5,17.5",
                                  fill: colorValley,
                                  stroke: "#ffffff",
                                  strokeWidth: "0.9"
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "polygon",
                                {
                                  points: "40,13.5 43,17.5 40,21.5 37,17.5",
                                  fill: "#ffffff",
                                  opacity: "0.85"
                                }
                              )
                            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { className: phaseValley, children: [
                              !isSoft && /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "38.6", y: "9.5", width: "2.8", height: "2", rx: "0.5", fill: "#d4af37" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "circle",
                                {
                                  cx: "40",
                                  cy: isSoft ? 9.5 : 14,
                                  r: isSoft ? 4.2 : isSandhyaAartiTime ? 7.8 : 6.5,
                                  fill: colorValley,
                                  opacity: isSoft ? "0.24" : isSandhyaAartiTime ? "0.42" : "0.32"
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "circle",
                                {
                                  cx: "40",
                                  cy: isSoft ? 9.5 : 14,
                                  r: isSoft ? 2.2 : 3.6,
                                  fill: colorValley
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "circle",
                                {
                                  cx: "40",
                                  cy: isSoft ? 9.5 : 14,
                                  r: isSoft ? 0.9 : 1.5,
                                  fill: "#ffffff"
                                }
                              )
                            ] })
                          ]
                        }
                      )
                    },
                    idx
                  );
                })
              }
            ),
            showCornerLadi && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex sm:hidden items-start gap-1 absolute left-0.5 top-0 pointer-events-none z-30", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  HangingLightStrand,
                  {
                    colors: palette.bulbs,
                    bulbCount: isGrandCurtain ? 4 : 2,
                    swayClass: "animate-jhalar-sway",
                    showMarigoldTop: showToran,
                    marigoldColor: palette.toranFlowerOuter,
                    animMode: jhalarAnimation
                  }
                ),
                isGrandCurtain && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  HangingLightStrand,
                  {
                    colors: [
                      palette.bulbs[1],
                      palette.bulbs[2],
                      palette.bulbs[3],
                      palette.bulbs[0]
                    ],
                    bulbCount: 2,
                    swayClass: "animate-jhalar-sway-reverse",
                    showMarigoldTop: showToran,
                    marigoldColor: palette.toranFlowerInner,
                    animMode: jhalarAnimation
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex sm:hidden items-start gap-1 absolute right-0.5 top-0 pointer-events-none z-30", children: [
                isGrandCurtain && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  HangingLightStrand,
                  {
                    colors: [
                      palette.bulbs[1],
                      palette.bulbs[2],
                      palette.bulbs[3],
                      palette.bulbs[0]
                    ],
                    bulbCount: 2,
                    swayClass: "animate-jhalar-sway",
                    showMarigoldTop: showToran,
                    marigoldColor: palette.toranFlowerOuter,
                    animMode: jhalarAnimation
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  HangingLightStrand,
                  {
                    colors: [
                      palette.bulbs[2],
                      palette.bulbs[3],
                      palette.bulbs[0],
                      palette.bulbs[1]
                    ],
                    bulbCount: isGrandCurtain ? 4 : 2,
                    swayClass: "animate-jhalar-sway-reverse",
                    showMarigoldTop: showToran,
                    marigoldColor: palette.toranFlowerInner,
                    animMode: jhalarAnimation
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden sm:flex items-start gap-2.5 absolute left-2 lg:left-5 top-0 pointer-events-none z-30", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  HangingLightStrand,
                  {
                    colors: palette.bulbs,
                    bulbCount: isGrandCurtain ? 7 : isSandhyaAartiTime ? 6 : 5,
                    swayClass: "animate-jhalar-sway",
                    showMarigoldTop: showToran,
                    marigoldColor: palette.toranFlowerOuter,
                    animMode: jhalarAnimation
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  HangingLightStrand,
                  {
                    colors: [
                      palette.bulbs[1],
                      palette.bulbs[2],
                      palette.bulbs[3],
                      palette.bulbs[0]
                    ],
                    bulbCount: isGrandCurtain ? 5 : 3,
                    swayClass: "animate-jhalar-sway-reverse",
                    showMarigoldTop: showToran,
                    marigoldColor: palette.toranFlowerInner,
                    animMode: jhalarAnimation
                  }
                ),
                isGrandCurtain && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  HangingLightStrand,
                  {
                    colors: [
                      palette.bulbs[2],
                      palette.bulbs[3],
                      palette.bulbs[0],
                      palette.bulbs[1]
                    ],
                    bulbCount: 3,
                    swayClass: "animate-jhalar-sway",
                    showMarigoldTop: showToran,
                    marigoldColor: palette.toranFlowerOuter,
                    animMode: jhalarAnimation
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden sm:flex items-start gap-2.5 absolute right-2 lg:right-5 top-0 pointer-events-none z-30", children: [
                isGrandCurtain && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  HangingLightStrand,
                  {
                    colors: [
                      palette.bulbs[1],
                      palette.bulbs[2],
                      palette.bulbs[3],
                      palette.bulbs[0]
                    ],
                    bulbCount: 3,
                    swayClass: "animate-jhalar-sway",
                    showMarigoldTop: showToran,
                    marigoldColor: palette.toranFlowerOuter,
                    animMode: jhalarAnimation
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  HangingLightStrand,
                  {
                    colors: [
                      palette.bulbs[2],
                      palette.bulbs[3],
                      palette.bulbs[0],
                      palette.bulbs[1]
                    ],
                    bulbCount: isGrandCurtain ? 5 : 3,
                    swayClass: "animate-jhalar-sway-reverse",
                    showMarigoldTop: showToran,
                    marigoldColor: palette.toranFlowerInner,
                    animMode: jhalarAnimation
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  HangingLightStrand,
                  {
                    colors: palette.bulbs,
                    bulbCount: isGrandCurtain ? 7 : isSandhyaAartiTime ? 6 : 5,
                    swayClass: "animate-jhalar-sway",
                    showMarigoldTop: showToran,
                    marigoldColor: palette.toranFlowerOuter,
                    animMode: jhalarAnimation
                  }
                )
              ] })
            ] })
          ] })
        ]
      }
    );
  }
  if (lightsMode === "spectrum_line") {
    return isHairlineActive ? /* @__PURE__ */ jsxRuntimeExports.jsx(FestiveHairlineDivider, { variant: "compact" }) : null;
  }
  if (!areBulbsActive) {
    return null;
  }
  const isSoftTop = lightsMode === "soft_glow";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "aria-hidden": "true",
      className: "relative w-full pointer-events-none select-none overflow-hidden",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: `w-full ${isSoftTop ? "h-[10px]" : "h-[14px] sm:h-[16px]"} flex items-center justify-between px-1 sm:px-3`,
          style: {
            background: isSoftTop ? `linear-gradient(180deg, ${palette.glowColor}25 0%, transparent 100%)` : isSandhyaAartiTime ? `linear-gradient(180deg, rgba(251, 191, 36, 0.72) 0%, ${palette.glowColor} 65%, transparent 100%)` : `linear-gradient(180deg, ${palette.glowColor} 0%, transparent 100%)`
          },
          children: Array.from({ length: 24 }).map((_, i) => {
            const bulbColor = palette.bulbs[i % 4];
            const phaseClass = resolveBulbAnimClass(i, jhalarAnimation, isSoftTop);
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: `relative inline-flex items-center justify-center ${isSoftTop ? "w-1.5 h-1.5" : "w-2.5 h-2.5"} rounded-full ${phaseClass} ${i % 2 === 1 ? "hidden sm:inline-flex" : ""}`,
                style: {
                  backgroundColor: bulbColor,
                  boxShadow: isSoftTop ? `0 0 4px 1px ${bulbColor}` : isSandhyaAartiTime ? `0 0 10px 3px ${bulbColor}, 0 0 20px 5px #fde04788` : `0 0 8px 2px ${bulbColor}, 0 0 16px 4px ${bulbColor}80`,
                  opacity: isSoftTop ? 0.8 : 1
                },
                children: !isSoftTop && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1 h-1 rounded-full bg-white" })
              },
              i
            );
          })
        }
      )
    }
  );
};
const HangingLightStrand = ({
  colors,
  bulbCount,
  swayClass,
  showMarigoldTop = false,
  marigoldColor = "#f97316",
  animMode = "twinkle"
}) => {
  const height = bulbCount * 15 + 24;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "svg",
    {
      width: "24",
      height,
      viewBox: `0 0 24 ${height}`,
      className: `overflow-visible ${swayClass}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "line",
          {
            x1: "12",
            y1: "0",
            x2: "12",
            y2: height - 12,
            stroke: "#fcd34d",
            strokeWidth: "1.2",
            strokeDasharray: "2 1",
            opacity: "0.85"
          }
        ),
        showMarigoldTop && /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "12", cy: "4", r: "4.2", fill: marigoldColor }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "12", cy: "4", r: "1.8", fill: "#fde047" })
        ] }),
        Array.from({ length: bulbCount }).map((_, idx) => {
          const cy = 11 + idx * 14;
          const c = colors[idx % 4];
          const phase = resolveBulbAnimClass(idx, animMode, false);
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { className: phase, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "12", cy, r: "6.8", fill: c, opacity: "0.32" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "12", cy, r: "3.5", fill: c }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "12", cy, r: "1.4", fill: "#ffffff" })
          ] }, idx);
        }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { className: "animate-flame-flicker", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: `M 12 ${height - 16} C 9.5 ${height - 12}, 9.5 ${height - 9}, 12 ${height - 7} C 14.5 ${height - 9}, 14.5 ${height - 12}, 12 ${height - 16} Z`,
              fill: "#fde047"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "12", cy: height - 10, r: "1.3", fill: "#ffffff" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: `M 7 ${height - 7} Q 12 ${height - 1} 17 ${height - 7} Z`,
            fill: "#d97706",
            stroke: "#fef08a",
            strokeWidth: "0.7"
          }
        )
      ]
    }
  );
};
const CardFestiveLightStrip = ({
  variant = "banner",
  archCount = 8
}) => {
  const {
    activeTheme,
    areLightsActive,
    isHairlineActive,
    lightsMode,
    jhalarAnimation,
    cornerLadiMode,
    showToran,
    isSandhyaAartiTime
  } = useFestiveTheme();
  const palette = reactExports.useMemo(() => getFestiveLightPalette(activeTheme), [activeTheme]);
  if (!areLightsActive) {
    return null;
  }
  if (lightsMode === "spectrum_line") {
    return isHairlineActive ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      FestiveHairlineDivider,
      {
        variant: variant === "bottomnav" ? "bottomnav" : "card"
      }
    ) : null;
  }
  if (variant === "bottomnav") {
    const isSoft2 = lightsMode === "soft_glow";
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        "aria-hidden": "true",
        className: "absolute -top-[5px] inset-x-0 pointer-events-none select-none z-20",
        children: [
          isHairlineActive && /* @__PURE__ */ jsxRuntimeExports.jsx(FestiveHairlineDivider, { variant: "bottomnav" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: `w-full ${isSoft2 ? "h-[7px]" : "h-[10px]"} flex items-center justify-around px-2`,
              children: Array.from({ length: 14 }).map((_, idx) => {
                const c = palette.bulbs[idx % 4];
                const phase = resolveBulbAnimClass(idx, jhalarAnimation, isSoft2);
                return /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: `${isSoft2 ? "w-1.5 h-1.5" : "w-2 h-2"} rounded-full flex items-center justify-center ${phase}`,
                    style: {
                      backgroundColor: c,
                      boxShadow: isSoft2 ? `0 0 4px 1px ${c}` : `0 0 7px 2px ${c}`,
                      opacity: isSoft2 ? 0.75 : 1
                    },
                    children: !isSoft2 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-0.5 h-0.5 rounded-full bg-white" })
                  },
                  idx
                );
              })
            }
          )
        ]
      }
    );
  }
  const isSoft = lightsMode === "soft_glow";
  const isDiyaMala = lightsMode === "diya_mala";
  const isTempleBells = lightsMode === "temple_bells";
  const isChandelier = lightsMode === "crystal_chandeliers";
  const totalWidth = 800;
  const unitWidth = totalWidth / archCount;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      "aria-hidden": "true",
      className: "absolute top-0 inset-x-0 pointer-events-none select-none z-20 overflow-hidden rounded-t-3xl",
      children: [
        isHairlineActive && /* @__PURE__ */ jsxRuntimeExports.jsx(FestiveHairlineDivider, { variant: "card" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `w-full ${isSoft ? "h-3.5 opacity-25" : "h-7 opacity-65"}`,
            style: {
              background: isSoft ? `radial-gradient(ellipse at 50% 0%, ${palette.glowColor} 0%, transparent 65%)` : isSandhyaAartiTime ? `radial-gradient(ellipse at 50% 0%, rgba(253, 224, 71, 0.7) 0%, ${palette.glowColor} 45%, transparent 80%)` : `radial-gradient(ellipse at 50% 0%, ${palette.glowColor} 0%, transparent 75%)`
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `${isSoft ? "-mt-3.5" : "-mt-7"} w-full ${isSoft ? "h-[14px] sm:h-[18px]" : "h-[20px] sm:h-[24px]"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "svg",
          {
            viewBox: `0 0 ${totalWidth} 26`,
            preserveAspectRatio: "none",
            className: "w-full h-full block overflow-visible",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "path",
                {
                  d: Array.from({ length: archCount }).map((_, idx) => {
                    const x0 = idx * unitWidth;
                    const xMid = x0 + unitWidth / 2;
                    const x1 = x0 + unitWidth;
                    const dip = isSoft ? 8 : 19;
                    return `${idx === 0 ? `M ${x0} 1` : ""} Q ${xMid} ${dip} ${x1} 1`;
                  }).join(" "),
                  fill: "none",
                  stroke: palette.wireColor,
                  strokeWidth: isSoft ? "0.85" : "1.3",
                  opacity: isSoft ? "0.55" : "0.85"
                }
              ),
              Array.from({ length: archCount }).map((_, idx) => {
                const x0 = idx * unitWidth;
                const xMid = x0 + unitWidth * 0.5;
                const cMid = palette.bulbs[idx % 4];
                if (isSoft) {
                  return /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
                    showToran && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "circle",
                      {
                        cx: x0,
                        cy: 2.5,
                        r: 1.8,
                        fill: palette.toranFlowerOuter,
                        opacity: "0.8"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { className: "festive-bulb-soft", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: xMid, cy: 7.5, r: 3.8, fill: cMid, opacity: "0.22" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: xMid, cy: 7.5, r: 1.9, fill: cMid }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: xMid, cy: 7.5, r: 0.7, fill: "#ffffff" })
                    ] })
                  ] }, idx);
                }
                const xQuarter = x0 + unitWidth * 0.25;
                const xThreeQuarter = x0 + unitWidth * 0.75;
                const cLeft = palette.bulbs[(idx + 1) % 4];
                const cRight = palette.bulbs[(idx + 2) % 4];
                const phaseMid = resolveBulbAnimClass(idx, jhalarAnimation, false);
                const phaseSide = resolveBulbAnimClass(idx + 1, jhalarAnimation, false);
                return /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
                  showToran && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "circle",
                    {
                      cx: x0,
                      cy: 3.5,
                      r: 2.8,
                      fill: palette.toranFlowerOuter,
                      opacity: "0.9"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { className: phaseSide, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: xQuarter, cy: 8, r: 5, fill: cLeft, opacity: "0.28" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: xQuarter, cy: 8, r: 2.8, fill: cLeft }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: xQuarter, cy: 8, r: 1.1, fill: "#ffffff" })
                  ] }),
                  isDiyaMala ? /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { className: phaseMid, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: xMid, cy: 14, r: 7.5, fill: "#fde047", opacity: "0.34" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "path",
                      {
                        d: `M ${xMid} 9.5 C ${xMid - 2.5} 12.5, ${xMid - 2.5} 15, ${xMid} 16.5 C ${xMid + 2.5} 15, ${xMid + 2.5} 12.5, ${xMid} 9.5 Z`,
                        fill: "#fde047"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "path",
                      {
                        d: `M ${xMid - 6} 16.5 Q ${xMid} 22 ${xMid + 6} 16.5 Z`,
                        fill: "#d97706",
                        stroke: "#fef08a",
                        strokeWidth: "0.7"
                      }
                    )
                  ] }) : isTempleBells ? /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { className: phaseMid, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: xMid, cy: 14, r: 7.2, fill: "#fbbf24", opacity: "0.3" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "path",
                      {
                        d: `M ${xMid - 4} 10.5 C ${xMid - 4} 8.5, ${xMid + 4} 8.5, ${xMid + 4} 10.5 L ${xMid + 6} 18 L ${xMid - 6} 18 Z`,
                        fill: "#f59e0b",
                        stroke: "#fef08a",
                        strokeWidth: "0.8"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: xMid, cy: 19.5, r: 1.8, fill: "#ffffff" })
                  ] }) : isChandelier ? /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { className: phaseMid, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: xMid, cy: 14, r: 7.5, fill: cMid, opacity: "0.32" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "polygon",
                      {
                        points: `${xMid},10 ${xMid + 5},15.5 ${xMid},21.5 ${xMid - 5},15.5`,
                        fill: cMid,
                        stroke: "#ffffff",
                        strokeWidth: "0.8"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: xMid, cy: 15.5, r: 1.6, fill: "#ffffff" })
                  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { className: phaseMid, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: xMid, cy: 13, r: 7.2, fill: cMid, opacity: "0.36" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: xMid, cy: 13, r: 3.9, fill: cMid }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: xMid, cy: 13, r: 1.6, fill: "#ffffff" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { className: phaseSide, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: xThreeQuarter, cy: 8, r: 5, fill: cRight, opacity: "0.28" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: xThreeQuarter, cy: 8, r: 2.8, fill: cRight }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: xThreeQuarter, cy: 8, r: 1.1, fill: "#ffffff" })
                  ] })
                ] }, idx);
              })
            ]
          }
        ) }),
        variant === "sanctum" && cornerLadiMode !== "off" && (lightsMode === "royal_jhalar" || lightsMode === "diya_mala" || lightsMode === "temple_bells" || lightsMode === "crystal_chandeliers") && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-2.5 top-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            HangingLightStrand,
            {
              colors: palette.bulbs,
              bulbCount: cornerLadiMode === "grand_curtain" ? 6 : 4,
              swayClass: "animate-jhalar-sway",
              showMarigoldTop: showToran,
              marigoldColor: palette.toranFlowerOuter,
              animMode: jhalarAnimation
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-2.5 top-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            HangingLightStrand,
            {
              colors: [
                palette.bulbs[2],
                palette.bulbs[3],
                palette.bulbs[0],
                palette.bulbs[1]
              ],
              bulbCount: cornerLadiMode === "grand_curtain" ? 6 : 4,
              swayClass: "animate-jhalar-sway-reverse",
              showMarigoldTop: showToran,
              marigoldColor: palette.toranFlowerInner,
              animMode: jhalarAnimation
            }
          ) })
        ] })
      ]
    }
  );
};
const FestivePushpVarshaOverlay = () => {
  const { activeTheme, autoPushpVarsha, isDefaultAsIs } = useFestiveTheme();
  const palette = reactExports.useMemo(() => getFestiveLightPalette(activeTheme), [activeTheme]);
  const [burstKey, setBurstKey] = reactExports.useState(0);
  const [isVisible, setIsVisible] = reactExports.useState(false);
  reactExports.useEffect(() => {
    let timer;
    const handleTrigger = () => {
      setBurstKey(Date.now());
      setIsVisible(true);
      if (timer) window.clearTimeout(timer);
      timer = window.setTimeout(() => {
        setIsVisible(false);
      }, 3150);
    };
    window.addEventListener(PUSHP_VARSHA_EVENT, handleTrigger);
    return () => {
      window.removeEventListener(PUSHP_VARSHA_EVENT, handleTrigger);
      if (timer) window.clearTimeout(timer);
    };
  }, []);
  reactExports.useEffect(() => {
    if (!autoPushpVarsha || isDefaultAsIs) return;
    const t = window.setTimeout(() => {
      triggerFestivePushpVarsha();
    }, 600);
    return () => window.clearTimeout(t);
  }, [autoPushpVarsha, isDefaultAsIs, activeTheme.id]);
  if (!isVisible) return null;
  const petals = Array.from({ length: 24 }).map((_, idx) => {
    const leftPercent = (idx * 37 + 7) % 94 + 3;
    const delayMs = idx % 8 * 140;
    const icon = palette.pushpIcons[idx % palette.pushpIcons.length];
    const color = palette.bulbs[idx % palette.bulbs.length];
    const sizeClass = idx % 3 === 0 ? "w-6 h-6 sm:w-7 sm:h-7" : "w-4 h-4 sm:w-5 sm:h-5";
    return { id: idx, leftPercent, delayMs, icon, color, sizeClass };
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "aria-hidden": "true",
      className: "fixed inset-0 pointer-events-none select-none z-[90] overflow-hidden",
      children: petals.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          className: `absolute top-0 ${p.sizeClass} animate-pushp-fall drop-shadow-[0_2px_8px_rgba(251,191,36,0.55)]`,
          style: {
            left: `${p.leftPercent}%`,
            animationDelay: `${p.delayMs}ms`,
            color: p.color
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: p.icon, tone: "inherit", className: "w-full h-full" })
        },
        p.id
      ))
    },
    burstKey
  );
};
const FestiveGreetingShareModal = () => {
  const { activeTheme, todayPanchangLabel } = useFestiveTheme();
  const palette = reactExports.useMemo(() => getFestiveLightPalette(activeTheme), [activeTheme]);
  const [isOpen, setIsOpen] = reactExports.useState(false);
  const [senderName, setSenderName] = reactExports.useState(() => {
    if (typeof window === "undefined") return "";
    try {
      const raw = window.localStorage.getItem("panditji_active_user_account");
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed?.name) return String(parsed.name);
      }
    } catch {
    }
    return "";
  });
  const [copiedText, setCopiedText] = reactExports.useState(false);
  const [isGeneratingImg, setIsGeneratingImg] = reactExports.useState(false);
  const canvasRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
      try {
        vedicAudio.playCrispTempleBell(0.7);
      } catch {
      }
    };
    window.addEventListener(OPEN_FESTIVE_GREETING_MODAL_EVENT, handleOpen);
    return () => {
      window.removeEventListener(OPEN_FESTIVE_GREETING_MODAL_EVENT, handleOpen);
    };
  }, []);
  const renderFestiveCardToCanvas = reactExports.useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return null;
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;
    const W = 1080;
    const H = 1350;
    canvas.width = W;
    canvas.height = H;
    const bgGrad = ctx.createLinearGradient(0, 0, W, H);
    bgGrad.addColorStop(0, "#1a0926");
    bgGrad.addColorStop(0.5, "#261107");
    bgGrad.addColorStop(1, "#0e0716");
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, W, H);
    const haloGrad = ctx.createRadialGradient(W / 2, 310, 20, W / 2, 310, 420);
    haloGrad.addColorStop(0, `${activeTheme.primaryHex || "#f59e0b"}55`);
    haloGrad.addColorStop(0.6, `${activeTheme.accentHex || "#fde047"}22`);
    haloGrad.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = haloGrad;
    ctx.fillRect(0, 0, W, H);
    ctx.strokeStyle = activeTheme.primaryHex || "#f59e0b";
    ctx.lineWidth = 6;
    ctx.strokeRect(28, 28, W - 56, H - 56);
    ctx.strokeStyle = "#fde047";
    ctx.lineWidth = 2;
    ctx.strokeRect(42, 42, W - 84, H - 84);
    const arches = 9;
    const archW = (W - 84) / arches;
    for (let i = 0; i < arches; i++) {
      const xStart = 42 + i * archW;
      const xMid = xStart + archW / 2;
      const xEnd = xStart + archW;
      ctx.fillStyle = palette.toranLeafColor;
      ctx.beginPath();
      ctx.arc(xMid, 54, 14, 0, Math.PI);
      ctx.fill();
      ctx.fillStyle = palette.toranFlowerOuter;
      ctx.beginPath();
      ctx.arc(xStart, 50, 9, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = "#fde047";
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(xStart, 46);
      ctx.quadraticCurveTo(xMid, 92, xEnd, 46);
      ctx.stroke();
      const bulbCol = palette.bulbs[i % 4];
      ctx.fillStyle = bulbCol;
      ctx.shadowColor = bulbCol;
      ctx.shadowBlur = 22;
      ctx.beginPath();
      ctx.arc(xMid, 72, 10, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
      ctx.fillStyle = "#ffffff";
      ctx.beginPath();
      ctx.arc(xMid, 72, 4, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.textAlign = "center";
    ctx.fillStyle = "#fde047";
    ctx.font = "bold 28px sans-serif";
    ctx.fillText("॥ श्री गणेशाय नमः • पण्डित जी ऑनलाइन ॥", W / 2, 138);
    ctx.fillStyle = "rgba(0, 0, 0, 0.55)";
    ctx.strokeStyle = "rgba(251, 191, 36, 0.6)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(90, 165, W - 180, 62, 31);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = "#fef08a";
    ctx.font = "bold 25px sans-serif";
    ctx.fillText(`आज का पंचांग: ${todayPanchangLabel}`, W / 2, 205);
    ctx.fillStyle = "rgba(245, 158, 11, 0.16)";
    ctx.strokeStyle = "#fde047";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(W / 2, 340, 82, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.strokeStyle = "rgba(253, 224, 71, 0.45)";
    ctx.lineWidth = 1.5;
    for (let p = 0; p < 12; p++) {
      const a = p * Math.PI * 2 / 12;
      ctx.beginPath();
      ctx.moveTo(W / 2 + Math.cos(a) * 60, 340 + Math.sin(a) * 60);
      ctx.lineTo(W / 2 + Math.cos(a) * 76, 340 + Math.sin(a) * 76);
      ctx.stroke();
    }
    ctx.fillStyle = "#fde047";
    ctx.font = "bold 78px serif";
    ctx.fillText("ॐ", W / 2, 366);
    ctx.fillStyle = "#fde047";
    ctx.font = "bold 52px sans-serif";
    ctx.fillText(activeTheme.nameHi, W / 2, 495);
    if (activeTheme.subDayLabelHi) {
      ctx.fillStyle = "#fed7aa";
      ctx.font = "bold 30px sans-serif";
      ctx.fillText(`॥ ${activeTheme.subDayLabelHi} ॥`, W / 2, 548);
    }
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 34px sans-serif";
    const wrapText = (text, x, startY, maxWidth, lineHeight) => {
      const words = text.split(" ");
      let line = "";
      let y = startY;
      for (let n = 0; n < words.length; n++) {
        const testLine = line + words[n] + " ";
        const metrics = ctx.measureText(testLine);
        if (metrics.width > maxWidth && n > 0) {
          ctx.fillText(line.trim(), x, y);
          line = words[n] + " ";
          y += lineHeight;
        } else {
          line = testLine;
        }
      }
      if (line.trim()) {
        ctx.fillText(line.trim(), x, y);
        y += lineHeight;
      }
      return y;
    };
    const nextY = wrapText(
      activeTheme.bannerGreetingHi || "मंगलमय शुभकामनाएं!",
      W / 2,
      635,
      W - 180,
      50
    );
    if (activeTheme.sacredMantra) {
      const boxY = Math.max(nextY + 25, 770);
      ctx.fillStyle = "rgba(120, 53, 15, 0.48)";
      ctx.strokeStyle = "#fbbf24";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.roundRect(85, boxY, W - 170, 150, 26);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = "#fde047";
      ctx.font = "bold 26px sans-serif";
      ctx.fillText("॥ आज का विशेष सिद्ध मंत्र ॥", W / 2, boxY + 46);
      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 33px sans-serif";
      wrapText(`“${activeTheme.sacredMantra}”`, W / 2, boxY + 102, W - 220, 44);
    }
    ctx.fillStyle = "#fde68a";
    ctx.font = "28px sans-serif";
    wrapText(activeTheme.bannerSubtitleHi || "", W / 2, 1015, W - 180, 42);
    if (senderName.trim()) {
      ctx.fillStyle = "#fef08a";
      ctx.font = "bold 32px sans-serif";
      ctx.fillText(`शुभेच्छु: ${senderName.trim()}`, W / 2, 1145);
    }
    ctx.fillStyle = "rgba(0, 0, 0, 0.65)";
    ctx.beginPath();
    ctx.roundRect(85, 1190, W - 170, 92, 22);
    ctx.fill();
    ctx.fillStyle = "#fde047";
    ctx.font = "bold 28px sans-serif";
    ctx.fillText(
      "श्री डिजिटल मंदिर दर्शन, पंचांग व राशिफल: www.panditjionline.online",
      W / 2,
      1246
    );
    return canvas;
  }, [activeTheme, palette, senderName, todayPanchangLabel]);
  reactExports.useEffect(() => {
    if (isOpen) {
      const id = window.setTimeout(() => {
        renderFestiveCardToCanvas();
      }, 60);
      return () => window.clearTimeout(id);
    }
  }, [isOpen, renderFestiveCardToCanvas]);
  if (!isOpen) return null;
  const shareTextMessage = `॥ *${activeTheme.nameHi}* ॥
*आज का पंचांग:* ${todayPanchangLabel}

${activeTheme.bannerGreetingHi}
${activeTheme.sacredMantra ? `*विशेष सिद्ध मंत्र:* “${activeTheme.sacredMantra}”
` : ""}${activeTheme.bannerSubtitleHi}${senderName.trim() ? `

*शुभेच्छु:* ${senderName.trim()}` : ""}

डिजिटल मंदिर दर्शन, पंचांग व 12 राशियों का राशिफल देखें:
https://www.panditjionline.online`;
  const handleDownloadCardPng = () => {
    const canvas = renderFestiveCardToCanvas();
    if (!canvas) return;
    const dataUrl = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.download = `panditji-utsav-card-${activeTheme.id}.png`;
    link.href = dataUrl;
    link.click();
    triggerFestivePushpVarsha();
  };
  const handleNativeOrWhatsAppShare = async () => {
    setIsGeneratingImg(true);
    try {
      const canvas = renderFestiveCardToCanvas();
      if (canvas && navigator.share && navigator.canShare) {
        const blob = await new Promise(
          (resolve) => canvas.toBlob((b) => resolve(b), "image/png")
        );
        if (blob) {
          const file = new File([blob], `utsav-card-${activeTheme.id}.png`, {
            type: "image/png"
          });
          if (navigator.canShare({ files: [file] })) {
            await navigator.share({
              title: activeTheme.nameHi,
              text: shareTextMessage,
              files: [file]
            });
            setIsGeneratingImg(false);
            return;
          }
        }
      }
    } catch {
    }
    setIsGeneratingImg(false);
    window.open(
      `https://api.whatsapp.com/send?text=${encodeURIComponent(shareTextMessage)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-[95] bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full max-w-lg rounded-3xl bg-gradient-to-b from-[#1e0d2b] via-[#1c0f07] to-[#0d111d] border-2 border-amber-400/80 shadow-[0_20px_60px_rgba(0,0,0,0.9)] p-4 sm:p-6 space-y-4 my-auto overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardFestiveLightStrip, { variant: "banner", archCount: 7 }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2 pt-2 border-b border-amber-500/30 pb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: activeTheme.deityIcon, className: "w-6 h-6 text-theme-primary shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm sm:text-base font-black font-vedic text-yellow-300", children: "पर्व एवं आज का पंचांग शुभकामना कार्ड" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-amber-200/80", children: [
            palette.toranLabelHi,
            " • WhatsApp व Facebook शेयर"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => setIsOpen(false),
          className: "p-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-amber-500/40 text-amber-200 cursor-pointer",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4", strokeWidth: 1.5 })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: `relative rounded-2xl p-4 sm:p-5 border-2 ${activeTheme.bannerBgClass} ${activeTheme.bannerBorderClass} text-center space-y-2.5 overflow-hidden shadow-inner`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardFestiveLightStrip, { variant: "banner", archCount: 6 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-2 text-[10px] font-bold text-yellow-200 tracking-wider", children: "॥ श्री गणेशाय नमः • पण्डित जी ऑनलाइन ॥" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/55 border border-amber-400/50 text-amber-200 text-[11px] font-bold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "panchang", className: "w-3.5 h-3.5 text-theme-primary shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "आज का पंचांग: ",
              todayPanchangLabel
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 mx-auto rounded-full bg-black/40 border-2 border-yellow-300/80 flex items-center justify-center shadow-[0_0_20px_rgba(251,191,36,0.4)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: activeTheme.deityIcon, className: "w-7 h-7 text-theme-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg sm:text-xl font-black font-vedic text-yellow-300", children: activeTheme.nameHi }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm font-bold text-white leading-relaxed", children: activeTheme.bannerGreetingHi }),
          activeTheme.sacredMantra && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 rounded-xl bg-black/50 border border-yellow-400/50 text-yellow-200 text-xs font-bold font-vedic flex items-center justify-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "lotus", className: "w-4 h-4 text-theme-primary shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "“",
              activeTheme.sacredMantra,
              "”"
            ] })
          ] }),
          senderName.trim() && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs font-extrabold text-yellow-300 pt-1 inline-flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "aarti", className: "w-3.5 h-3.5 text-theme-primary shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "शुभेच्छु: ",
              senderName.trim()
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("canvas", { ref: canvasRef, className: "hidden" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[11px] font-bold text-amber-200 block", children: "कार्ड पर अपना या परिवार का नाम लिखें (वैकल्पिक):" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: "text",
          value: senderName,
          onChange: (e) => setSenderName(e.target.value),
          placeholder: "उदा. शर्मा परिवार / आपका शुभ नाम...",
          maxLength: 45,
          className: "w-full px-3 py-2 rounded-xl bg-slate-950/90 border border-amber-500/50 text-xs sm:text-sm text-amber-100 placeholder-amber-400/40 focus:outline-none focus:border-yellow-300"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: handleNativeOrWhatsAppShare,
          disabled: isGeneratingImg,
          className: "px-4 py-2.5 rounded-xl bg-[#16A34A] hover:bg-[#15803D] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md cursor-pointer transition-all",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(VedicWhatsAppSvg, { className: "w-4 h-4 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: isGeneratingImg ? "तैयार हो रहा है..." : "WhatsApp पर कार्ड शेयर करें" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: handleDownloadCardPng,
          className: "px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 hover:from-amber-300 hover:to-yellow-300 text-stone-950 font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md cursor-pointer transition-all",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-4 h-4", strokeWidth: 1.5 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "इमेज कार्ड डाउनलोड करें" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2 pt-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: async () => {
            try {
              await navigator.clipboard.writeText(shareTextMessage);
              setCopiedText(true);
              window.setTimeout(() => setCopiedText(false), 3e3);
            } catch {
            }
          },
          className: "flex-1 px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-amber-500/40 text-amber-200 text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer",
          children: copiedText ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3.5 h-3.5 text-emerald-400", strokeWidth: 1.5 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-300", children: "शुभकामना संदेश कॉपी हो गया!" })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "w-3.5 h-3.5 text-amber-400", strokeWidth: 1.5 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "शुभकामना टेक्स्ट कॉपी करें" })
          ] })
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
          className: "px-3 py-2 rounded-xl bg-amber-500/20 hover:bg-amber-500/35 border border-amber-400/60 text-yellow-200 text-xs font-extrabold flex items-center gap-1.5 cursor-pointer",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3.5 h-3.5 text-yellow-300", strokeWidth: 1.5 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "पुष्प-वर्षा करें" })
          ]
        }
      )
    ] })
  ] }) });
};
export {
  CardFestiveLightStrip,
  FestiveGreetingShareModal,
  FestiveHairlineDivider,
  FestivePushpVarshaOverlay,
  HeaderBandhanwarToran,
  HeaderFestiveJhalar,
  OPEN_FESTIVE_GREETING_MODAL_EVENT,
  PUSHP_VARSHA_EVENT,
  getFestiveLightPalette,
  openFestiveGreetingModal,
  resolveBulbAnimClass,
  triggerFestivePushpVarsha
};
