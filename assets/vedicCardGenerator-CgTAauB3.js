import { Q as QRCode } from "./browser-CBlYJE2W.js";
import { q as PANDIT_AVATAR_THUMB, ab as resolveActiveFestiveStateSync, t as translateVedicHindiToEnglish, ac as normalizeRashiKey } from "./index-AQ5SI3vl.js";
import { getFestiveLightPalette } from "./FestiveLightsJhalar-Bu-YA1w5.js";
import { s as sanitizeVedicHindiText } from "./drikGanitaRashifalEngine-fnpcD7FF.js";
import { ai as formatAshtamanshaPartHi, M as resolveHindiCityDisplayName } from "./panchang-core-24ia-akc.js";
import "./vendor-react-CCbeDaYX.js";
import "./vendor-pdf-CpPyS1re.js";
import "./vendor-icons-Bk5Rg8-9.js";
import "./seo-core-DnNehtWz.js";
import "./vendor-astronomy-C8JZdkQu.js";
const FONT_STACK = '"Noto Sans", "Noto Sans Devanagari", "Kohinoor Devanagari", "Mangal", "Lohit Devanagari", system-ui, -apple-system, sans-serif';
const VALID_APP_LANGUAGES = [
  "hi",
  "en",
  "hinglish",
  "mr",
  "gu",
  "bn",
  "pa",
  "ta",
  "te",
  "kn",
  "ml"
];
function getActiveAppLanguage() {
  if (typeof window !== "undefined") {
    try {
      const saved = localStorage.getItem("panditji_app_language");
      if (saved && VALID_APP_LANGUAGES.includes(saved)) {
        return saved;
      }
    } catch {
    }
  }
  return "hi";
}
function trCard(lang, hi, en, hinglish, mr, gu) {
  if (lang === "hi") return hi;
  if (lang === "en") return en;
  if (lang === "hinglish") return hinglish || translateVedicHindiToEnglish(hi, "hinglish");
  if (lang === "mr") return mr || translateVedicHindiToEnglish(hi, "mr");
  if (lang === "gu") return gu || translateVedicHindiToEnglish(hi, "gu");
  return translateVedicHindiToEnglish(hi, lang);
}
function translateCardString(input, lang) {
  const cleaned = sanitizeVedicCardText(input || "");
  if (!cleaned || lang === "hi") return cleaned;
  return translateVedicHindiToEnglish(cleaned, lang).replace(/\s+/g, " ").trim();
}
const VARIANT_ACCENTS = {
  page: {
    bgTop: "#241005",
    bgMid: "#13162a",
    bgBot: "#090b14",
    glowColor: "rgba(245, 158, 11, 0.24)",
    badgeBg: "#f59e0b",
    badgeText: "#0f172a",
    accentLine: "#fbbf24",
    cardBg: "rgba(15, 23, 42, 0.86)",
    cardBorder: "rgba(245, 158, 11, 0.45)"
  },
  rashifal: {
    bgTop: "#261106",
    bgMid: "#19102c",
    bgBot: "#070b16",
    glowColor: "rgba(251, 191, 36, 0.30)",
    badgeBg: "#fbbf24",
    badgeText: "#0f172a",
    accentLine: "#f59e0b",
    cardBg: "rgba(15, 23, 42, 0.88)",
    cardBorder: "rgba(251, 191, 36, 0.48)"
  },
  all12rashifal: {
    bgTop: "#261106",
    bgMid: "#19102c",
    bgBot: "#070b16",
    glowColor: "rgba(251, 191, 36, 0.30)",
    badgeBg: "#fbbf24",
    badgeText: "#0f172a",
    accentLine: "#f59e0b",
    cardBg: "rgba(15, 23, 42, 0.88)",
    cardBorder: "rgba(251, 191, 36, 0.48)"
  },
  milan: {
    bgTop: "#2d0919",
    bgMid: "#1b0f26",
    bgBot: "#0a0814",
    glowColor: "rgba(244, 63, 94, 0.28)",
    badgeBg: "#fb7185",
    badgeText: "#0f172a",
    accentLine: "#fda4af",
    cardBg: "rgba(24, 12, 26, 0.88)",
    cardBorder: "rgba(251, 113, 133, 0.48)"
  },
  kundali: {
    bgTop: "#1f1306",
    bgMid: "#0e1834",
    bgBot: "#060a16",
    glowColor: "rgba(234, 179, 8, 0.28)",
    badgeBg: "#eab308",
    badgeText: "#0f172a",
    accentLine: "#fde047",
    cardBg: "rgba(12, 19, 38, 0.88)",
    cardBorder: "rgba(234, 179, 8, 0.48)"
  },
  panchang: {
    bgTop: "#281105",
    bgMid: "#151b2d",
    bgBot: "#080d18",
    glowColor: "rgba(249, 115, 22, 0.28)",
    badgeBg: "#fb923c",
    badgeText: "#0f172a",
    accentLine: "#fdba74",
    cardBg: "rgba(15, 23, 42, 0.88)",
    cardBorder: "rgba(251, 146, 60, 0.48)"
  },
  gochar: {
    bgTop: "#14102d",
    bgMid: "#1c1026",
    bgBot: "#070a15",
    glowColor: "rgba(56, 189, 248, 0.24)",
    badgeBg: "#38bdf8",
    badgeText: "#0f172a",
    accentLine: "#7dd3fc",
    cardBg: "rgba(13, 21, 39, 0.88)",
    cardBorder: "rgba(56, 189, 248, 0.45)"
  },
  naamrashi: {
    bgTop: "#1f1305",
    bgMid: "#0f1f22",
    bgBot: "#070d14",
    glowColor: "rgba(16, 185, 129, 0.25)",
    badgeBg: "#34d399",
    badgeText: "#0f172a",
    accentLine: "#6ee7b7",
    cardBg: "rgba(10, 24, 28, 0.88)",
    cardBorder: "rgba(52, 211, 153, 0.45)"
  },
  festival: {
    bgTop: "#331105",
    bgMid: "#24101f",
    bgBot: "#0b0812",
    glowColor: "rgba(251, 146, 60, 0.30)",
    badgeBg: "#f97316",
    badgeText: "#0f172a",
    accentLine: "#fed7aa",
    cardBg: "rgba(28, 15, 18, 0.86)",
    cardBorder: "rgba(251, 146, 60, 0.52)"
  },
  mandir: {
    bgTop: "#2b1205",
    bgMid: "#1f0d14",
    bgBot: "#09060b",
    glowColor: "rgba(251, 191, 36, 0.34)",
    badgeBg: "#fbbf24",
    badgeText: "#111827",
    accentLine: "#fde047",
    cardBg: "rgba(28, 14, 7, 0.90)",
    cardBorder: "rgba(251, 191, 36, 0.58)"
  }
};
function parseHexRgb(hex) {
  const clean = String(hex || "").trim().replace(/^#/, "");
  if (clean.length === 3) {
    const r = parseInt(clean[0] + clean[0], 16) || 245;
    const g = parseInt(clean[1] + clean[1], 16) || 158;
    const b = parseInt(clean[2] + clean[2], 16) || 11;
    return [r, g, b];
  }
  if (clean.length >= 6) {
    const r = parseInt(clean.slice(0, 2), 16);
    const g = parseInt(clean.slice(2, 4), 16);
    const b = parseInt(clean.slice(4, 6), 16);
    if (isFinite(r) && isFinite(g) && isFinite(b)) {
      return [r, g, b];
    }
  }
  return [245, 158, 11];
}
function blendHexColors(baseHex, tintHex, tintRatio) {
  const [br, bg, bb] = parseHexRgb(baseHex);
  const [tr, tg, tb] = parseHexRgb(tintHex);
  const t = Math.max(0, Math.min(1, tintRatio));
  const r = Math.round(br * (1 - t) + tr * t);
  const g = Math.round(bg * (1 - t) + tg * t);
  const b = Math.round(bb * (1 - t) + tb * t);
  return `#${[r, g, b].map((c) => c.toString(16).padStart(2, "0")).join("")}`;
}
function getRelativeLuminance(hex) {
  const [r, g, b] = parseHexRgb(hex).map((v) => {
    const s = v / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}
function getHairlineColorsForCard(effect, primaryHex, accentHex) {
  switch (effect) {
    case "rainbow":
      return ["#ec4899", "#f59e0b", "#fde047", "#10b981", "#06b6d4", "#8b5cf6", "#ec4899"];
    case "golden":
      return ["#b45309", "#f59e0b", "#fef08a", "#fbbf24", "#b45309"];
    case "pulse":
      return [primaryHex, accentHex, "#ffffff", accentHex, primaryHex];
    case "aurora_agni":
      return ["#f97316", "#ef4444", "#fbbf24", "#10b981", "#38bdf8", "#f97316"];
    case "neelkanth_peacock":
      return ["#0ea5e9", "#10b981", "#fde047", "#6366f1", "#0ea5e9"];
    case "festival":
    default:
      return [primaryHex, accentHex, "#fde047", primaryHex, accentHex];
  }
}
let activeCardFestiveRenderCtx = null;
function hexToRgba(hex, alpha) {
  const [r, g, b] = parseHexRgb(hex);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
function extractGradientHexStops(classStr, fallback) {
  const matches = (classStr || "").match(/#[0-9a-fA-F]{6}/g) || [];
  const c0 = matches[0] || fallback[0];
  const c1 = matches[1] || c0 || fallback[1];
  const c2 = matches[2] || c1 || fallback[2];
  return [c0, c1, c2];
}
function resolveCardFestiveContext(variant, liveOverride) {
  const basePalette = VARIANT_ACCENTS[variant] || VARIANT_ACCENTS.page;
  try {
    const syncState = resolveActiveFestiveStateSync();
    const festiveState = liveOverride ? {
      ...syncState,
      activeTheme: liveOverride.activeTheme,
      isDefaultAsIs: liveOverride.isDefaultAsIs,
      lightsMode: liveOverride.lightsMode,
      hairlineEffect: liveOverride.hairlineEffect,
      hairlineIntensity: liveOverride.hairlineIntensity,
      enableGlowingHairline: liveOverride.enableGlowingHairline,
      areBulbsActive: liveOverride.areBulbsActive,
      isHairlineActive: liveOverride.isHairlineActive,
      royalEngineEnabled: liveOverride.royalEngineEnabled !== void 0 ? liveOverride.royalEngineEnabled : syncState.royalEngineEnabled
    } : syncState;
    const royalHex = liveOverride?.royalHex || {
      bgBase: syncState.royalPreset.bgBase,
      cardSurface: syncState.royalPreset.cardSurface,
      accentPrimary: syncState.royalPreset.accentPrimary,
      accentSecondary: syncState.royalPreset.accentSecondary
    };
    if (festiveState.isDefaultAsIs) {
      const defBg = "#140c06";
      const defSurface = "#1c1528";
      const defAccent = "#fbbf24";
      const defSecondary = "#fde68a";
      const useUnifiedTheme = variant === "rashifal" || variant === "all12rashifal" || variant === "panchang";
      return {
        palette: useUnifiedTheme ? {
          bgTop: "#1f1108",
          bgMid: "#151226",
          bgBot: "#090d18",
          glowColor: "rgba(251, 191, 36, 0.30)",
          badgeBg: "#fbbf24",
          badgeText: "#111827",
          accentLine: defAccent,
          cardBg: "rgba(22, 18, 36, 0.92)",
          cardBorder: "rgba(251, 191, 36, 0.52)"
        } : basePalette,
        isFestiveThemeActive: false,
        festiveState,
        lightPalette: null,
        sealCoreHex: "#5c2408",
        sealMidHex: "#2b1104",
        sealEdgeHex: "#120802",
        footerBg: "rgba(10, 14, 28, 0.96)",
        bgBase: defBg,
        cardSurface: defSurface,
        accentPrimary: defAccent,
        accentSecondary: defSecondary,
        textPrimary: "#FFFBEB",
        textSecondary: "#E2E8F0"
      };
    }
    const { activeTheme } = festiveState;
    const useRoyalHex = festiveState.royalEngineEnabled !== false;
    const bgBase = useRoyalHex ? royalHex.bgBase : extractGradientHexStops(activeTheme.headerGradientClass, ["#12071f", "#180a05", "#0c0502"])[0];
    const cardSurface = useRoyalHex ? royalHex.cardSurface : extractGradientHexStops(activeTheme.bannerBgClass, ["#240b36", "#3b1219", "#1f092b"])[0];
    const accentPrimary = useRoyalHex ? royalHex.accentPrimary : activeTheme.primaryHex || "#f59e0b";
    const accentSecondary = useRoyalHex ? royalHex.accentSecondary : activeTheme.accentHex || "#fde047";
    const [pr, pg, pb] = parseHexRgb(accentPrimary);
    const lightPalette = getFestiveLightPalette(activeTheme);
    const bgTop = bgBase;
    const bgMid = blendHexColors(bgBase, cardSurface, 0.58);
    const bgBot = blendHexColors(bgBase, "#060812", 0.48);
    const glowColor = `rgba(${pr}, ${pg}, ${pb}, 0.42)`;
    const cardBg = hexToRgba(cardSurface, 0.94);
    const footerBg = hexToRgba(blendHexColors(bgBase, "#050811", 0.52), 0.96);
    const cardBorder = `rgba(${pr}, ${pg}, ${pb}, 0.58)`;
    const badgeBg = getRelativeLuminance(accentPrimary) > 0.18 ? accentPrimary : accentSecondary;
    const badgeText = "#111827";
    return {
      palette: {
        bgTop,
        bgMid,
        bgBot,
        glowColor,
        badgeBg,
        badgeText,
        accentLine: accentPrimary,
        cardBg,
        cardBorder
      },
      isFestiveThemeActive: true,
      festiveState,
      lightPalette,
      sealCoreHex: blendHexColors(cardSurface, accentPrimary, 0.32),
      sealMidHex: cardSurface,
      sealEdgeHex: bgBase,
      footerBg,
      bgBase,
      cardSurface,
      accentPrimary,
      accentSecondary,
      textPrimary: "#FFFBEB",
      textSecondary: blendHexColors("#E2E8F0", accentSecondary, 0.28)
    };
  } catch {
    return {
      palette: basePalette,
      isFestiveThemeActive: false,
      festiveState: resolveActiveFestiveStateSync(),
      lightPalette: null,
      sealCoreHex: "#5c2408",
      sealMidHex: "#2b1104",
      sealEdgeHex: "#120802",
      footerBg: "rgba(10, 16, 32, 0.95)",
      bgBase: "#241005",
      cardSurface: "#13162a",
      accentPrimary: "#fbbf24",
      accentSecondary: "#fdba74",
      textPrimary: "#FFFBEB",
      textSecondary: "#E2E8F0"
    };
  }
}
const SIZE = 1080;
function getCardLayoutSpec(aspect = "1:1") {
  const isVertical = aspect === "9:16";
  const width = 1080;
  const height = isVertical ? 1920 : 1080;
  const footerH = isVertical ? 132 : 106;
  const bottomMargin = isVertical ? 50 : 46;
  const footerY = height - bottomMargin - footerH;
  const contentTop = isVertical ? 226 : 178;
  return {
    aspect,
    width,
    height,
    padX: 66,
    contentTop,
    footerY,
    footerH,
    isVertical
  };
}
let cachedLogoPromise = null;
function loadImageWithTimeout(src, timeoutMs = 1100) {
  return new Promise((resolve) => {
    if (typeof Image === "undefined") {
      resolve(null);
      return;
    }
    const img = new Image();
    let settled = false;
    const done = (result) => {
      if (settled) return;
      settled = true;
      resolve(result);
    };
    const timer = setTimeout(() => done(null), timeoutMs);
    img.onload = () => {
      clearTimeout(timer);
      done(img.naturalWidth > 0 ? img : null);
    };
    img.onerror = () => {
      clearTimeout(timer);
      done(null);
    };
    const isExternalUrl = /^https?:\/\//i.test(src) && (typeof window === "undefined" || !src.startsWith(window.location.origin));
    if (isExternalUrl) {
      img.crossOrigin = "anonymous";
    }
    img.src = src;
  });
}
async function loadBrandLogoImage() {
  if (!cachedLogoPromise) {
    cachedLogoPromise = (async () => {
      const primary = await loadImageWithTimeout("/pwa-192x192.png", 1100);
      if (primary) return primary;
      const secondary = await loadImageWithTimeout("/favicon-96x96.png", 700);
      if (secondary) return secondary;
      return loadImageWithTimeout(PANDIT_AVATAR_THUMB, 500);
    })();
  }
  return cachedLogoPromise;
}
let cachedPanditPhotoPromise = null;
async function loadPanditPhotoImage() {
  if (!cachedPanditPhotoPromise) {
    cachedPanditPhotoPromise = (async () => {
      const primary = await loadImageWithTimeout("/pandit-photo.jpg", 1200);
      if (primary) return primary;
      const secondary = await loadImageWithTimeout("/pandit-shashank-sharma.jpg", 800);
      if (secondary) return secondary;
      return loadImageWithTimeout(PANDIT_AVATAR_THUMB, 500);
    })();
  }
  return cachedPanditPhotoPromise;
}
function sanitizeVedicCardText(input, preserveBrandUrl = false) {
  if (!input) return "";
  let text = String(input).replace(/🕉️?/g, "ॐ").replace(/[\u{1F000}-\u{1FAFF}]/gu, "").replace(/[\u2600-\u27BF]\uFE0F?/g, "").replace(/([^\s])\s*→\s*([^\s])/g, "$1–$2").replace(/[\u2190-\u21FF\u25A0-\u25FF\u2B00-\u2BFF]/g, "").replace(/[\uFE0F\u200D]/g, "").replace(/\*/g, "");
  if (!preserveBrandUrl) {
    text = text.replace(
      /(?:🔗|👉)?\s*(?:[^।.!?\n]{0,48}(?:यहाँ|यहां)\s*(?:देखें|पढ़ें|लिंक|जानें|खोलें|क्लिक\s*करें)\s*[:ः-]?\s*)?https?:\/\/[^\s)]+/gi,
      ""
    ).replace(
      /(?:🔗|👉)?\s*(?:[^।.!?\n]{0,48}(?:यहाँ|यहां)\s*(?:देखें|पढ़ें|लिंक|जानें|खोलें|क्लिक\s*करें)\s*[:ः-]?\s*)?(?:www\.)?panditjionline\.online[^\s)]*/gi,
      ""
    ).replace(/(?:🔗|👉)\s*[^।.!?\n]*$/gim, "").replace(/(?:^|[\s।.!?\n])(?:यहाँ|यहां)\s*(?:देखें|पढ़ें|लिंक|जानें|खोलें|क्लिक\s*करें)\s*:?\s*$/gim, "");
  }
  text = text.replace(/\)\s*\)+/g, ")").replace(/\(\s*\(+/g, "(").replace(/\(\s*\)/g, "").replace(/\s+/g, " ").trim();
  const openCount = (text.match(/\(/g) || []).length;
  const closeCount = (text.match(/\)/g) || []).length;
  if (closeCount > openCount) {
    let excess = closeCount - openCount;
    text = text.replace(/\)/g, (m) => {
      if (excess > 0 && !text.slice(0, text.indexOf(m)).includes("(")) {
        excess--;
        return "";
      }
      return m;
    });
    if (excess > 0) {
      text = text.replace(/\)+$/g, (m) => m.slice(0, Math.max(0, m.length - excess)));
    }
  }
  text = text.replace(/[:ः]\s*$/, (m, offset, str) => {
    const before = str.slice(Math.max(0, offset - 28), offset);
    if (/देखें|पढ़ें|जानें|खोलें|लिंक|विधि|समय/.test(before)) return "।";
    return m;
  });
  text = text.replace(/(?<!\()\b([1-8])(?:वां|वें)\s*भाग\b/gu, (_m, numStr) => {
    return formatAshtamanshaPartHi(parseInt(numStr, 10));
  });
  text = text.replace(/(?<![\u0900-\u097F])(?:दोपहर|सुबह)\s+((?:0?[4-9]|1[01]):\d{2}(?::\d{2})?\s*AM)/giu, "प्रातः $1").replace(/(?<![\u0900-\u097F])(?:रात्रि|प्रातः|सुबह)\s+(12:\d{2}(?::\d{2})?\s*AM)/giu, "मध्यरात्रि $1").replace(/(?<![\u0900-\u097F])(?:मध्यरात्रि|प्रातः|सुबह)\s+(0?[1-3]:\d{2}(?::\d{2})?\s*AM)/giu, "रात्रि $1").replace(/(?<![\u0900-\u097F])सायं\s+((?:0?[4-7]):\d{2}(?::\d{2})?\s*PM)/giu, "शाम $1").replace(/(?:मध्य)+रात्रि/gu, "मध्यरात्रि").replace(
    /(?<![\u0900-\u097F])(प्रातः|रात्रि|मध्यरात्रि)\s+(\d{1,2}:\d{2}(?::\d{2})?\s*AM)\s*(?:,\s*|\s*\()सूर्योदय\s*पूर्व\)?/giu,
    "अगले दिन $1 $2"
  ).replace(/\s*\(सूर्योदय\s*पूर्व\)/gu, "").replace(/(?:अगले\s+दिन\s+)+/gu, "अगले दिन ");
  if (!preserveBrandUrl && !/https?:\/\/|panditjionline\.online/i.test(text)) {
    text = sanitizeVedicHindiText(text);
  } else {
    text = text.replace(/\{\{[^}]*\}\}/g, "").replace(/\[object Object\]/gi, "").replace(/\b(?:undefined|null|NaN)\b/g, "").replace(/[^\S\r\n]{2,}/g, " ");
  }
  return text.trim();
}
function normalizeProductionCardUrl(rawUrl, fallbackSlug) {
  const PROD_ORIGIN = "https://www.panditjionline.online";
  let pathPart = "";
  const raw = String(rawUrl || "").trim();
  if (raw) {
    try {
      if (/^https?:\/\//i.test(raw)) {
        const parsed = new URL(raw);
        pathPart = parsed.pathname || "/";
      } else if (raw.startsWith("/")) {
        pathPart = raw.split("?")[0].split("#")[0];
      } else {
        const strippedHost = raw.replace(/^(?:www\.)?panditjionline\.online/i, "");
        pathPart = strippedHost.startsWith("/") ? strippedHost : `/${strippedHost}`;
      }
    } catch {
      pathPart = "";
    }
  }
  if ((!pathPart || pathPart === "/") && fallbackSlug) {
    const cleanFallback = fallbackSlug.replace(/^panditji-online-?/i, "").replace(/-(?:status-9x16|card)$/i, "").trim();
    if (cleanFallback && cleanFallback !== "home" && cleanFallback !== "card") {
      pathPart = `/${cleanFallback}`;
    }
  }
  const normalizedPath = !pathPart || pathPart === "/" ? "" : `/${pathPart.replace(/^\/+/, "").replace(/\/+$/, "").split("?")[0].split("#")[0]}`;
  return {
    fullUrl: `${PROD_ORIGIN}${normalizedPath || "/"}`,
    displayUrl: `www.panditjionline.online${normalizedPath}`
  };
}
function stripBoxyEmojis(input, preserveBrandUrl = false) {
  return sanitizeVedicCardText(input, preserveBrandUrl);
}
function deduplicatePanchangMaas(samvatOrMaas, pakshaStr) {
  const cleanPaksha = sanitizeVedicCardText(pakshaStr || "").replace(/\s*\([^)]*मास[^)]*\)/gi, "").replace(/\s*\([^)]*paksha[^)]*\)/gi, "").trim();
  if (!cleanPaksha) return "";
  const samvatClean = sanitizeVedicCardText(samvatOrMaas || "");
  const maasMatch = samvatClean.match(/([ऀ-ॿ]+)\s+मास/);
  if (maasMatch && maasMatch[1]) {
    const monthToken = maasMatch[1];
    return cleanPaksha.replace(new RegExp(`\\(\\s*${monthToken}(?:\\s+मास)?\\s*\\)`, "g"), "").replace(/\s+/g, " ").trim();
  }
  return cleanPaksha.replace(/\s*\([^)]*\)/g, "").trim();
}
async function ensureFontsReady() {
  try {
    if (typeof document !== "undefined" && document.fonts && document.fonts.ready) {
      await Promise.race([
        document.fonts.ready,
        new Promise((resolve) => setTimeout(resolve, 350))
      ]);
    }
  } catch {
  }
}
function drawRoundRect(ctx, x, y, w, h, r) {
  const radius = Math.max(0, Math.min(r, w / 2, h / 2));
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + w, y, x + w, y + h, radius);
  ctx.arcTo(x + w, y + h, x, y + h, radius);
  ctx.arcTo(x, y + h, x, y, radius);
  ctx.arcTo(x, y, x + w, y, radius);
  ctx.closePath();
}
function drawClippedBox(ctx, x, y, w, h, r, fillStyle, strokeStyle, lineWidth = 1.8, drawContent) {
  ctx.save();
  const af = activeCardFestiveRenderCtx?.isFestiveThemeActive ? activeCardFestiveRenderCtx : null;
  let resolvedFill = fillStyle;
  let resolvedStroke = strokeStyle;
  if (af) {
    const rgbaMatch = fillStyle.match(/^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)/i);
    if (rgbaMatch) {
      const alpha = rgbaMatch[4] !== void 0 ? parseFloat(rgbaMatch[4]) : 1;
      if (alpha >= 0.8) {
        resolvedFill = alpha >= 0.94 ? af.footerBg : af.palette.cardBg;
      }
    }
    resolvedStroke = af.palette.cardBorder;
  }
  ctx.fillStyle = resolvedFill;
  drawRoundRect(ctx, x, y, w, h, r);
  ctx.fill();
  ctx.strokeStyle = resolvedStroke;
  ctx.lineWidth = lineWidth;
  drawRoundRect(ctx, x, y, w, h, r);
  ctx.stroke();
  drawRoundRect(ctx, x + 2, y + 2, w - 4, h - 4, Math.max(0, r - 2));
  ctx.clip();
  if (af && af.festiveState.isHairlineActive && w >= 280 && h >= 72) {
    const primary = af.accentPrimary || "#f59e0b";
    const secondary = af.accentSecondary || "#fde047";
    const barGrad = ctx.createLinearGradient(x, y, x + w, y);
    barGrad.addColorStop(0, "rgba(0,0,0,0)");
    barGrad.addColorStop(0.22, secondary);
    barGrad.addColorStop(0.5, primary);
    barGrad.addColorStop(0.78, secondary);
    barGrad.addColorStop(1, "rgba(0,0,0,0)");
    ctx.save();
    ctx.globalAlpha = 0.92;
    ctx.fillStyle = barGrad;
    ctx.fillRect(x, y, w, af.festiveState.hairlineIntensity === "bold" ? 4 : 3);
    ctx.restore();
  }
  drawContent();
  ctx.restore();
}
function splitCompleteSentences(text) {
  const cleaned = stripBoxyEmojis(text || "").replace(/\s+/g, " ").trim();
  if (!cleaned) return [];
  const sentences = [];
  let start = 0;
  for (let i = 0; i < cleaned.length; i++) {
    const ch = cleaned[i];
    if (ch === "।" || ch === "॥") {
      let endIdx = i + 1;
      while (endIdx < cleaned.length && (cleaned[endIdx] === "।" || cleaned[endIdx] === "॥")) {
        endIdx++;
      }
      const seg = cleaned.slice(start, endIdx).trim();
      if (seg) sentences.push(seg);
      start = endIdx;
      i = endIdx - 1;
      continue;
    }
    if (ch === "!" || ch === "?") {
      const next = cleaned[i + 1];
      if (!next || /\s/.test(next)) {
        const seg = cleaned.slice(start, i + 1).trim();
        if (seg) sentences.push(seg);
        start = i + 1;
      }
      continue;
    }
    if (ch === ".") {
      const prev = i > 0 ? cleaned[i - 1] : "";
      const next = cleaned[i + 1];
      const isDecimal = /\d/.test(prev) && /\d/.test(next || "");
      const isAtBoundary = !next || /\s/.test(next);
      if (!isDecimal && isAtBoundary) {
        const seg = cleaned.slice(start, i + 1).trim();
        if (seg) sentences.push(seg);
        start = i + 1;
      }
    }
  }
  const tail = cleaned.slice(start).trim();
  if (tail) {
    sentences.push(tail);
  }
  return sentences;
}
function cleanCompleteSentence(text, maxChars = 165) {
  const cleaned = stripBoxyEmojis(text || "").replace(/\s+/g, " ").trim();
  if (!cleaned) return "";
  if (cleaned.length <= maxChars) return cleaned;
  const sentences = splitCompleteSentences(cleaned);
  const completeOnly = sentences.filter((s) => /[।॥.!?]$/.test(s));
  if (completeOnly.length > 0) {
    let acc = completeOnly[0];
    for (let i = 1; i < completeOnly.length; i++) {
      if ((acc + " " + completeOnly[i]).length <= maxChars) {
        acc += " " + completeOnly[i];
      } else {
        break;
      }
    }
    return acc;
  }
  if (cleaned.includes("•")) {
    const parts = cleaned.split(/\s*•\s*/).filter(Boolean);
    if (parts.length > 1) {
      let acc = parts[0];
      for (let i = 1; i < parts.length; i++) {
        if ((acc + " • " + parts[i]).length <= maxChars) {
          acc += " • " + parts[i];
        } else {
          break;
        }
      }
      return acc;
    }
  }
  return cleaned;
}
function wrapTextLinesStrict(ctx, text, maxWidth, maxLines) {
  const cleaned = stripBoxyEmojis(text);
  if (!cleaned || maxLines <= 0) return { lines: [], truncated: false };
  const safeMaxW = Math.max(40, maxWidth - 18);
  const words = cleaned.split(" ");
  const lines = [];
  let current = "";
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const testLine = current ? `${current} ${word}` : word;
    if (ctx.measureText(testLine).width <= safeMaxW) {
      current = testLine;
    } else {
      if (current) {
        lines.push(current);
        if (lines.length >= maxLines) {
          return { lines, truncated: true };
        }
      }
      if (ctx.measureText(word).width > safeMaxW) {
        let partial = "";
        for (const ch of Array.from(word)) {
          if (ctx.measureText(partial + ch).width > safeMaxW) {
            lines.push(partial);
            partial = ch;
            if (lines.length >= maxLines) {
              return { lines, truncated: true };
            }
          } else {
            partial += ch;
          }
        }
        current = partial;
      } else {
        current = word;
      }
    }
  }
  if (current) {
    if (lines.length < maxLines) {
      lines.push(current);
    } else {
      return { lines, truncated: true };
    }
  }
  return { lines, truncated: false };
}
function fitSingleLine(ctx, text, maxWidth, weight, maxPx, minPx = 10, preserveBrandUrl = false) {
  const safeW = Math.max(40, maxWidth - 12);
  const clean = stripBoxyEmojis(text, preserveBrandUrl);
  const floorPx = Math.min(minPx, 10);
  for (let px = maxPx; px >= floorPx; px -= 1) {
    ctx.font = `${weight} ${px}px ${FONT_STACK}`;
    if (ctx.measureText(clean).width <= safeW) {
      return { fontSize: px, text: clean };
    }
  }
  ctx.font = `${weight} ${floorPx}px ${FONT_STACK}`;
  const measuredW = ctx.measureText(clean).width;
  if (measuredW > safeW && measuredW > 0) {
    const scaledPx = Math.max(7.5, Math.floor(floorPx * (safeW / measuredW) * 10) / 10);
    return { fontSize: scaledPx, text: clean };
  }
  return { fontSize: floorPx, text: clean };
}
function fitAdaptiveHeading(ctx, text, maxWidth, maxHeight, weight, maxPx, minPx = 12, lineHeightRatio = 1.24) {
  const clean = stripBoxyEmojis(text);
  if (!clean) {
    return { fontSize: maxPx, lineHeight: Math.round(maxPx * lineHeightRatio), lines: [] };
  }
  const safeW = Math.max(40, maxWidth - 14);
  for (let px = maxPx; px >= Math.max(minPx, Math.round(maxPx * 0.72)); px -= 1) {
    const lh = Math.round(px * lineHeightRatio);
    if (lh > maxHeight) continue;
    ctx.font = `${weight} ${px}px ${FONT_STACK}`;
    if (ctx.measureText(clean).width <= safeW) {
      return { fontSize: px, lineHeight: lh, lines: [clean] };
    }
  }
  return fitWrappedBlock(ctx, clean, maxWidth, maxHeight, weight, Math.max(minPx + 2, Math.round(maxPx * 0.86)), minPx, lineHeightRatio);
}
function fitWrappedBlock(ctx, text, maxWidth, maxHeight, weight, startPx, minPx, lineHeightRatio = 1.34) {
  const clean = stripBoxyEmojis(text);
  if (!clean) return { fontSize: startPx, lineHeight: Math.round(startPx * lineHeightRatio), lines: [] };
  const absoluteFloor = Math.min(minPx, 10);
  for (let px = startPx; px >= absoluteFloor; px -= 1) {
    const lineH2 = Math.round(px * lineHeightRatio);
    const maxLines2 = Math.max(1, Math.floor(maxHeight / lineH2));
    ctx.font = `${weight} ${px}px ${FONT_STACK}`;
    const res2 = wrapTextLinesStrict(ctx, clean, maxWidth, maxLines2);
    if (!res2.truncated) {
      return { fontSize: px, lineHeight: lineH2, lines: res2.lines };
    }
  }
  const lineH = Math.round(absoluteFloor * lineHeightRatio);
  const maxLines = Math.max(1, Math.floor(maxHeight / lineH));
  ctx.font = `${weight} ${absoluteFloor}px ${FONT_STACK}`;
  const res = wrapTextLinesStrict(ctx, clean, maxWidth, maxLines);
  return { fontSize: absoluteFloor, lineHeight: lineH, lines: res.lines };
}
function fitSentenceAwareBlock(ctx, text, maxWidth, maxHeight, weight, startPx, minPx, lineHeightRatio = 1.4, isVertical = false) {
  const clean = stripBoxyEmojis(text || "").replace(/\s+/g, " ").trim();
  if (!clean) {
    return { fontSize: startPx, lineHeight: Math.round(startPx * lineHeightRatio), lines: [] };
  }
  const rawSentences = splitCompleteSentences(clean);
  const punctuatedSentences = rawSentences.filter((s) => /[।॥.!?]$/.test(s));
  if (punctuatedSentences.length > 0) {
    const comfortMinPx = isVertical ? Math.max(minPx, 16) : Math.max(minPx, 13);
    const fullParagraphMinPx = isVertical ? 10 : 9.5;
    const fullRatioSteps = Array.from(/* @__PURE__ */ new Set([lineHeightRatio, 1.34, 1.26, 1.2, 1.16])).filter(
      (r) => r <= lineHeightRatio
    );
    const allSentencesText = punctuatedSentences.join(" ");
    for (let px = startPx; px >= fullParagraphMinPx; px -= px <= 13 ? 0.5 : 1) {
      for (const ratio of fullRatioSteps) {
        const lineH2 = Math.max(11, Math.round(px * ratio));
        const maxLines2 = Math.max(1, Math.floor(maxHeight / lineH2));
        ctx.font = `${weight} ${px}px ${FONT_STACK}`;
        const res2 = wrapTextLinesStrict(ctx, allSentencesText, maxWidth, maxLines2);
        if (!res2.truncated) {
          return { fontSize: px, lineHeight: lineH2, lines: res2.lines };
        }
      }
    }
    for (let count = punctuatedSentences.length; count >= 1; count--) {
      const candidate = punctuatedSentences.slice(0, count).join(" ");
      for (let px = startPx; px >= comfortMinPx; px -= 1) {
        const lineH2 = Math.round(px * lineHeightRatio);
        const maxLines2 = Math.max(1, Math.floor(maxHeight / lineH2));
        ctx.font = `${weight} ${px}px ${FONT_STACK}`;
        const res2 = wrapTextLinesStrict(ctx, candidate, maxWidth, maxLines2);
        if (!res2.truncated) {
          return { fontSize: px, lineHeight: lineH2, lines: res2.lines };
        }
      }
    }
    const firstSentence = punctuatedSentences[0];
    const ratioSteps = Array.from(/* @__PURE__ */ new Set([lineHeightRatio, 1.32, 1.24, 1.18])).filter(
      (r) => r <= lineHeightRatio
    );
    for (let px = comfortMinPx; px >= 9; px -= 1) {
      for (const ratio of ratioSteps) {
        const lineH2 = Math.round(px * ratio);
        const maxLines2 = Math.max(1, Math.floor(maxHeight / lineH2));
        ctx.font = `${weight} ${px}px ${FONT_STACK}`;
        const res2 = wrapTextLinesStrict(ctx, firstSentence, maxWidth, maxLines2);
        if (!res2.truncated) {
          return { fontSize: px, lineHeight: lineH2, lines: res2.lines };
        }
      }
    }
    const fallbackRatio = 1.16;
    const lineH = Math.round(9 * fallbackRatio);
    const maxLines = Math.max(1, Math.floor(maxHeight / lineH));
    ctx.font = `${weight} 9px ${FONT_STACK}`;
    const res = wrapTextLinesStrict(ctx, firstSentence, maxWidth, maxLines);
    return { fontSize: 9, lineHeight: lineH, lines: res.lines };
  }
  const metaRatioSteps = Array.from(/* @__PURE__ */ new Set([lineHeightRatio, 1.3, 1.22])).filter(
    (r) => r <= lineHeightRatio
  );
  for (let px = startPx; px >= 10; px -= 1) {
    for (const ratio of metaRatioSteps) {
      const lineH = Math.round(px * ratio);
      const maxLines = Math.max(1, Math.floor(maxHeight / lineH));
      ctx.font = `${weight} ${px}px ${FONT_STACK}`;
      const res = wrapTextLinesStrict(ctx, clean, maxWidth, maxLines);
      if (!res.truncated) {
        return { fontSize: px, lineHeight: lineH, lines: res.lines };
      }
    }
  }
  return fitWrappedBlock(ctx, clean, maxWidth, maxHeight, weight, startPx, minPx, 1.2);
}
function createMetallicGoldGradient(ctx, x0, y0, x1, y1) {
  const g = ctx.createLinearGradient(x0, y0, x1, y1);
  g.addColorStop(0, "#FDE68A");
  g.addColorStop(0.5, "#F59E0B");
  g.addColorStop(1, "#D97706");
  return g;
}
function drawCornerMandalaMotif(ctx, cx, cy, _color, cornerIdx = 0) {
  ctx.save();
  ctx.translate(cx, cy);
  const rotAngles = [0, Math.PI / 2, -Math.PI / 2, Math.PI];
  ctx.rotate(rotAngles[cornerIdx % 4] || 0);
  const goldGrad = createMetallicGoldGradient(ctx, -6, -6, 36, 36);
  ctx.strokeStyle = goldGrad;
  ctx.fillStyle = goldGrad;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.globalAlpha = 0.72;
  ctx.lineWidth = 1.8;
  ctx.beginPath();
  ctx.moveTo(2, 34);
  ctx.quadraticCurveTo(2, 2, 34, 2);
  ctx.stroke();
  ctx.globalAlpha = 0.48;
  ctx.lineWidth = 1.25;
  ctx.beginPath();
  ctx.moveTo(8, 28);
  ctx.quadraticCurveTo(9, 9, 28, 8);
  ctx.stroke();
  ctx.globalAlpha = 0.78;
  ctx.beginPath();
  ctx.moveTo(10, 10);
  ctx.quadraticCurveTo(22, 13, 25, 25);
  ctx.quadraticCurveTo(13, 22, 10, 10);
  ctx.closePath();
  ctx.fill();
  ctx.globalAlpha = 0.56;
  ctx.beginPath();
  ctx.moveTo(10, 10);
  ctx.quadraticCurveTo(20, 4, 29, 10);
  ctx.quadraticCurveTo(20, 14, 10, 10);
  ctx.moveTo(10, 10);
  ctx.quadraticCurveTo(4, 20, 10, 29);
  ctx.quadraticCurveTo(14, 20, 10, 10);
  ctx.fill();
  ctx.globalAlpha = 0.85;
  for (const [dx, dy, r] of [
    [36, 2, 2.2],
    [2, 36, 2.2],
    [28, 28, 2]
  ]) {
    ctx.beginPath();
    ctx.arc(dx, dy, r, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.restore();
}
function drawShriMandalaWatermark(ctx, cx, cy, outerR) {
  ctx.save();
  ctx.translate(cx, cy);
  ctx.globalAlpha = 0.08;
  const goldGrad = createMetallicGoldGradient(ctx, -outerR, -outerR, outerR, outerR);
  ctx.strokeStyle = goldGrad;
  ctx.fillStyle = goldGrad;
  ctx.lineWidth = 2.2;
  ctx.beginPath();
  ctx.arc(0, 0, outerR, 0, Math.PI * 2);
  ctx.stroke();
  ctx.lineWidth = 1.4;
  ctx.beginPath();
  ctx.arc(0, 0, outerR * 0.88, 0, Math.PI * 2);
  ctx.stroke();
  const petalCount = 24;
  const innerPetalR = outerR * 0.64;
  const tipPetalR = outerR * 0.87;
  for (let i = 0; i < petalCount; i++) {
    const a = i * Math.PI * 2 / petalCount;
    const spread = Math.PI / petalCount * 0.82;
    ctx.beginPath();
    ctx.moveTo(Math.cos(a - spread) * innerPetalR, Math.sin(a - spread) * innerPetalR);
    ctx.quadraticCurveTo(
      Math.cos(a - spread * 0.45) * (tipPetalR * 0.96),
      Math.sin(a - spread * 0.45) * (tipPetalR * 0.96),
      Math.cos(a) * tipPetalR,
      Math.sin(a) * tipPetalR
    );
    ctx.quadraticCurveTo(
      Math.cos(a + spread * 0.45) * (tipPetalR * 0.96),
      Math.sin(a + spread * 0.45) * (tipPetalR * 0.96),
      Math.cos(a + spread) * innerPetalR,
      Math.sin(a + spread) * innerPetalR
    );
    ctx.stroke();
  }
  const rMid = outerR * 0.44;
  for (let i = 0; i < 12; i++) {
    const a = i * Math.PI * 2 / 12;
    const spread = Math.PI / 12 * 0.78;
    ctx.beginPath();
    ctx.moveTo(Math.cos(a - spread) * rMid, Math.sin(a - spread) * rMid);
    ctx.quadraticCurveTo(
      Math.cos(a) * (innerPetalR * 0.98),
      Math.sin(a) * (innerPetalR * 0.98),
      Math.cos(a + spread) * rMid,
      Math.sin(a + spread) * rMid
    );
    ctx.stroke();
  }
  const triR = outerR * 0.41;
  ctx.lineWidth = 1.6;
  for (const offset of [-Math.PI / 2, Math.PI / 2]) {
    ctx.beginPath();
    for (let i = 0; i < 3; i++) {
      const a = offset + i * Math.PI * 2 / 3;
      const px = Math.cos(a) * triR;
      const py = Math.sin(a) * triR;
      if (i === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.closePath();
    ctx.stroke();
  }
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font = `900 ${Math.round(outerR * 0.34)}px ${FONT_STACK}`;
  ctx.fillText("ॐ", 0, outerR * 0.02);
  ctx.restore();
}
const VARA_NAMES_HI = ["रविवार", "सोमवार", "मंगलवार", "बुधवार", "गुरुवार", "शुक्रवार", "शनिवार"];
const VARA_NAMES_EN = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const HINDI_MONTH_NUM_MAP = {
  जनवरी: 1,
  फ़रवरी: 2,
  फरवरी: 2,
  मार्च: 3,
  अप्रैल: 4,
  अप्रेल: 4,
  मई: 5,
  जून: 6,
  जुलाई: 7,
  अगस्त: 8,
  सितंबर: 9,
  सितम्बर: 9,
  अक्टूबर: 10,
  अक्तूबर: 10,
  नवंबर: 11,
  नवम्बर: 11,
  दिसंबर: 12,
  दिसम्बर: 12,
  january: 1,
  jan: 1,
  february: 2,
  feb: 2,
  march: 3,
  mar: 3,
  april: 4,
  apr: 4,
  may: 5,
  june: 6,
  jun: 6,
  july: 7,
  jul: 7,
  august: 8,
  aug: 8,
  september: 9,
  sep: 9,
  sept: 9,
  october: 10,
  oct: 10,
  november: 11,
  nov: 11,
  december: 12,
  dec: 12
};
function extractSelectedDateVara(payload) {
  if (!payload) return null;
  const weekdaySources = [
    payload.panchangData?.vaarHindi,
    payload.all12RashifalData?.vaarHindi,
    payload.rashifalData?.vaarHindi,
    payload.panchangData?.dateHindi,
    payload.all12RashifalData?.dateHindi,
    payload.rashifalData?.dateHindi,
    payload.festivalData?.pujaDate,
    payload.title,
    payload.badge
  ].filter(Boolean).join(" ");
  const vaarRegexes = [
    [0, /रविवार|इतवार|sunday|\bsun\b/i],
    [1, /सोमवार|monday|\bmon\b/i],
    [2, /मंगलवार|मङ्गलवार|tuesday|\btue\b/i],
    [3, /बुधवार|wednesday|\bwed\b/i],
    [4, /गुरुवार|बृहस्पतिवार|वीरवार|thursday|\bthu\b/i],
    [5, /शुक्रवार|friday|\bfri\b/i],
    [6, /शनिवार|saturday|\bsat\b/i]
  ];
  for (const [idx, re] of vaarRegexes) {
    if (re.test(weekdaySources)) {
      return { dayIndex: idx, vaarHi: VARA_NAMES_HI[idx], vaarEn: VARA_NAMES_EN[idx] };
    }
  }
  const dateSources = [
    payload.panchangData?.dateHindi,
    payload.all12RashifalData?.dateHindi,
    payload.rashifalData?.dateHindi,
    payload.festivalData?.pujaDate,
    payload.fileNameSlug,
    payload.badge,
    payload.title
  ].filter(Boolean).join(" ");
  const isoMatch = dateSources.match(/\b(1[6-9]\d{2}|2[0-5]\d{2})-(\d{1,2})-(\d{1,2})\b/);
  if (isoMatch) {
    const y = parseInt(isoMatch[1], 10);
    const m = parseInt(isoMatch[2], 10);
    const d = parseInt(isoMatch[3], 10);
    if (m >= 1 && m <= 12 && d >= 1 && d <= 31) {
      const idx = new Date(Date.UTC(y, m - 1, d)).getUTCDay();
      return { dayIndex: idx, vaarHi: VARA_NAMES_HI[idx], vaarEn: VARA_NAMES_EN[idx] };
    }
  }
  const dmyMatch = dateSources.match(
    /\b(\d{1,2})\s+([\u0900-\u097FA-Za-z]+),?\s+(1[6-9]\d{2}|2[0-5]\d{2})\b/
  );
  if (dmyMatch) {
    const d = parseInt(dmyMatch[1], 10);
    const mKey = dmyMatch[2].toLowerCase();
    const m = HINDI_MONTH_NUM_MAP[dmyMatch[2]] || HINDI_MONTH_NUM_MAP[mKey];
    const y = parseInt(dmyMatch[3], 10);
    if (m && d >= 1 && d <= 31) {
      const idx = new Date(Date.UTC(y, m - 1, d)).getUTCDay();
      return { dayIndex: idx, vaarHi: VARA_NAMES_HI[idx], vaarEn: VARA_NAMES_EN[idx] };
    }
  }
  return null;
}
function detectCardFestivalTithiMotif(payload) {
  if (!payload) return null;
  const corpus = [
    payload.panchangData?.festivalName,
    payload.panchangData?.tithi,
    payload.rashifalData?.festivalName,
    payload.rashifalData?.tithiName,
    payload.all12RashifalData?.festivalName,
    payload.all12RashifalData?.tithiName,
    payload.all12RashifalData?.panchangLine,
    payload.festivalData?.festivalName,
    payload.festivalData?.tithiLabel,
    payload.badge
  ].filter(Boolean).join(" ");
  if (/दीपावली|दिवाली|diwali|deepawali|धनतेरस|नवरात्र|navratri|दुर्गाष्टमी|महानवमी|दशहरा/i.test(corpus)) {
    return "diwali_navratri";
  }
  if (/प्रदोष|pradosh|शिवरात्रि|shivratri|महाशिवरात्रि/i.test(corpus)) {
    return "pradosh_shivratri";
  }
  if (/पूर्णिमा|purnima|एकादशी|ekadashi/i.test(corpus)) {
    return "purnima_ekadashi";
  }
  if (/अमावस्या|amavasya/i.test(corpus)) {
    return "amavasya";
  }
  return null;
}
function drawTopRightGoldMedallion(ctx, cx, cy, r, payload, activeFest) {
  ctx.save();
  const aura = ctx.createRadialGradient(cx, cy, r * 0.35, cx, cy, r + 15);
  aura.addColorStop(0, "rgba(253, 230, 138, 0.48)");
  aura.addColorStop(0.55, "rgba(217, 119, 6, 0.24)");
  aura.addColorStop(1, "rgba(0, 0, 0, 0)");
  ctx.fillStyle = aura;
  ctx.beginPath();
  ctx.arc(cx, cy, r + 15, 0, Math.PI * 2);
  ctx.fill();
  const orb = ctx.createRadialGradient(cx - r * 0.2, cy - r * 0.25, 4, cx, cy, r);
  orb.addColorStop(0, activeFest ? blendHexColors(activeFest.sealCoreHex, "#78350F", 0.35) : "#5c2808");
  orb.addColorStop(0.68, activeFest ? activeFest.sealMidHex : "#261105");
  orb.addColorStop(1, activeFest ? activeFest.sealEdgeHex : "#120803");
  ctx.fillStyle = orb;
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.fill();
  const goldGrad = createMetallicGoldGradient(ctx, cx - r, cy - r, cx + r, cy + r);
  ctx.strokeStyle = goldGrad;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(cx, cy, r + 1, 0, Math.PI * 2);
  ctx.stroke();
  ctx.strokeStyle = "rgba(253, 230, 138, 0.45)";
  ctx.lineWidth = 1.25;
  ctx.beginPath();
  ctx.arc(cx, cy, r + 6, 0, Math.PI * 2);
  ctx.stroke();
  ctx.strokeStyle = "rgba(253, 230, 138, 0.28)";
  ctx.lineWidth = 1.1;
  for (let i = 0; i < 16; i++) {
    const a = i * Math.PI / 8;
    ctx.beginPath();
    ctx.moveTo(cx + Math.cos(a) * (r - 6), cy + Math.sin(a) * (r - 6));
    ctx.lineTo(cx + Math.cos(a) * (r - 2), cy + Math.sin(a) * (r - 2));
    ctx.stroke();
  }
  const festivalMotif = detectCardFestivalTithiMotif(payload);
  const selectedVara = extractSelectedDateVara(payload);
  const iconStroke = createMetallicGoldGradient(ctx, cx - r * 0.65, cy - r * 0.65, cx + r * 0.65, cy + r * 0.65);
  ctx.translate(cx, cy);
  ctx.strokeStyle = iconStroke;
  ctx.fillStyle = iconStroke;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.shadowColor = "rgba(253, 230, 138, 0.65)";
  ctx.shadowBlur = 8;
  const s = r * 0.68;
  const drawCenterSacredGlyph = (glyph, fontSize, yOffset = 1) => {
    ctx.save();
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#FEF08A";
    ctx.shadowColor = "rgba(217, 119, 6, 0.7)";
    ctx.shadowBlur = 6;
    ctx.font = `900 ${Math.round(fontSize)}px ${FONT_STACK}`;
    ctx.fillText(glyph, 0, yOffset);
    ctx.restore();
  };
  if (festivalMotif === "diwali_navratri") {
    ctx.lineWidth = 1.9;
    ctx.beginPath();
    ctx.arc(0, s * 0.08, s * 0.86, Math.PI * 1.16, Math.PI * 1.84);
    ctx.stroke();
    for (const ang of [-0.42, 0, 0.42]) {
      const tx = Math.sin(ang) * s * 0.82;
      const ty = -Math.cos(ang) * s * 0.72 + s * 0.05;
      ctx.beginPath();
      ctx.arc(tx, ty, 2.3, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.beginPath();
    ctx.moveTo(-s * 0.68, s * 0.24);
    ctx.quadraticCurveTo(0, s * 0.4, s * 0.68, s * 0.24);
    ctx.quadraticCurveTo(s * 0.42, s * 0.68, 0, s * 0.68);
    ctx.quadraticCurveTo(-s * 0.42, s * 0.68, -s * 0.68, s * 0.24);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = "#FEF08A";
    ctx.beginPath();
    ctx.moveTo(0, -s * 0.36);
    ctx.quadraticCurveTo(s * 0.28, -s * 0.02, 0, s * 0.2);
    ctx.quadraticCurveTo(-s * 0.28, -s * 0.02, 0, -s * 0.36);
    ctx.closePath();
    ctx.fill();
  } else if (festivalMotif === "purnima_ekadashi") {
    ctx.lineWidth = 1.8;
    ctx.beginPath();
    ctx.arc(0, 0, s * 0.62, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(253, 230, 138, 0.14)";
    ctx.fill();
    ctx.stroke();
    for (let i = 0; i < 12; i++) {
      const a = i * Math.PI * 2 / 12;
      ctx.beginPath();
      ctx.moveTo(Math.cos(a) * s * 0.62, Math.sin(a) * s * 0.62);
      ctx.lineTo(Math.cos(a) * s * 0.92, Math.sin(a) * s * 0.92);
      ctx.stroke();
    }
    drawCenterSacredGlyph("श्री", r * 0.56, 2);
  } else if (festivalMotif === "pradosh_shivratri") {
    ctx.lineWidth = 1.8;
    for (const [ang, dist] of [
      [-Math.PI / 2, s * 0.48],
      [-Math.PI / 2 - 1.05, s * 0.48],
      [-Math.PI / 2 + 1.05, s * 0.48]
    ]) {
      ctx.save();
      ctx.rotate(ang + Math.PI / 2);
      ctx.beginPath();
      ctx.ellipse(0, -dist, s * 0.16, s * 0.28, 0, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();
    }
    drawCenterSacredGlyph("ॐ", r * 0.62, 2);
  } else if (festivalMotif === "amavasya") {
    ctx.lineWidth = 1.9;
    ctx.beginPath();
    ctx.arc(0, s * 0.12, s * 0.56, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(-s * 0.28, -s * 0.42);
    ctx.lineTo(s * 0.28, -s * 0.42);
    ctx.stroke();
    drawCenterSacredGlyph("ॐ", r * 0.58, s * 0.16);
  } else if (selectedVara) {
    ctx.lineWidth = 2;
    switch (selectedVara.dayIndex) {
      case 0: {
        ctx.beginPath();
        ctx.arc(0, 0, s * 0.52, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(253, 230, 138, 0.16)";
        ctx.fill();
        ctx.stroke();
        for (let i = 0; i < 12; i++) {
          const a = i * Math.PI * 2 / 12;
          const rIn = s * 0.58;
          const rOut = i % 2 === 0 ? s * 0.94 : s * 0.8;
          ctx.beginPath();
          ctx.moveTo(Math.cos(a) * rIn, Math.sin(a) * rIn);
          ctx.lineTo(Math.cos(a) * rOut, Math.sin(a) * rOut);
          ctx.stroke();
        }
        drawCenterSacredGlyph("ॐ", r * 0.56, 2);
        break;
      }
      case 1: {
        ctx.lineWidth = 2.2;
        ctx.beginPath();
        ctx.arc(0, s * 0.08, s * 0.7, Math.PI * 0.16, Math.PI * 0.84, false);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(0, -s * 0.06, s * 0.78, Math.PI * 0.2, Math.PI * 0.8, false);
        ctx.stroke();
        ctx.fillStyle = "#FEF08A";
        ctx.beginPath();
        ctx.arc(0, -s * 0.62, 3.2, 0, Math.PI * 2);
        ctx.fill();
        drawCenterSacredGlyph("ॐ", r * 0.58, -s * 0.08);
        break;
      }
      case 2: {
        const sw = s * 0.56;
        ctx.lineWidth = 2.6;
        ctx.beginPath();
        ctx.moveTo(-sw, 0);
        ctx.lineTo(sw, 0);
        ctx.moveTo(0, -sw);
        ctx.lineTo(0, sw);
        ctx.moveTo(0, -sw);
        ctx.lineTo(sw, -sw);
        ctx.moveTo(sw, 0);
        ctx.lineTo(sw, sw);
        ctx.moveTo(0, sw);
        ctx.lineTo(-sw, sw);
        ctx.moveTo(-sw, 0);
        ctx.lineTo(-sw, -sw);
        ctx.stroke();
        const bd = sw * 0.5;
        ctx.fillStyle = "#FEF08A";
        for (const [bx, by] of [
          [-bd, -bd],
          [bd, -bd],
          [bd, bd],
          [-bd, bd]
        ]) {
          ctx.beginPath();
          ctx.arc(bx, by, 2.4, 0, Math.PI * 2);
          ctx.fill();
        }
        break;
      }
      case 3: {
        ctx.lineWidth = 1.7;
        for (let i = 0; i < 8; i++) {
          const a = i * Math.PI * 2 / 8;
          ctx.save();
          ctx.rotate(a);
          ctx.beginPath();
          ctx.moveTo(0, -s * 0.52);
          ctx.quadraticCurveTo(s * 0.16, -s * 0.72, 0, -s * 0.92);
          ctx.quadraticCurveTo(-s * 0.16, -s * 0.72, 0, -s * 0.52);
          ctx.stroke();
          ctx.restore();
        }
        ctx.beginPath();
        ctx.arc(0, 0, s * 0.52, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(253, 230, 138, 0.14)";
        ctx.fill();
        ctx.stroke();
        drawCenterSacredGlyph("श्री", r * 0.56, 2);
        break;
      }
      case 4: {
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(0, s * 0.2, s * 0.52, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(253, 230, 138, 0.12)";
        ctx.fill();
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(-s * 0.24, -s * 0.28);
        ctx.lineTo(-s * 0.34, -s * 0.46);
        ctx.lineTo(s * 0.34, -s * 0.46);
        ctx.lineTo(s * 0.24, -s * 0.28);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(-s * 0.28, -s * 0.46);
        ctx.quadraticCurveTo(-s * 0.58, -s * 0.62, -s * 0.36, -s * 0.74);
        ctx.moveTo(s * 0.28, -s * 0.46);
        ctx.quadraticCurveTo(s * 0.58, -s * 0.62, s * 0.36, -s * 0.74);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(0, -s * 0.56, s * 0.2, Math.PI, 0);
        ctx.stroke();
        drawCenterSacredGlyph("ॐ", r * 0.5, s * 0.22);
        break;
      }
      case 5: {
        ctx.lineWidth = 1.7;
        for (let i = 0; i < 8; i++) {
          const a = i * Math.PI * 2 / 8;
          ctx.save();
          ctx.rotate(a);
          ctx.beginPath();
          ctx.ellipse(0, -s * 0.64, s * 0.16, s * 0.3, 0, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(253, 230, 138, 0.12)";
          ctx.fill();
          ctx.stroke();
          ctx.restore();
        }
        ctx.beginPath();
        ctx.arc(0, 0, s * 0.44, 0, Math.PI * 2);
        ctx.fillStyle = activeFest ? activeFest.sealMidHex : "#261105";
        ctx.fill();
        ctx.stroke();
        drawCenterSacredGlyph("श्री", r * 0.54, 2);
        break;
      }
      case 6: {
        ctx.lineWidth = 1.9;
        ctx.beginPath();
        ctx.arc(0, 0, s * 0.78, 0, Math.PI * 2);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(0, 0, s * 0.48, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(253, 230, 138, 0.14)";
        ctx.fill();
        ctx.stroke();
        for (let i = 0; i < 8; i++) {
          const a = i * Math.PI * 2 / 8;
          ctx.beginPath();
          ctx.moveTo(Math.cos(a) * s * 0.48, Math.sin(a) * s * 0.48);
          ctx.lineTo(Math.cos(a) * s * 0.92, Math.sin(a) * s * 0.92);
          ctx.stroke();
        }
        drawCenterSacredGlyph("ॐ", r * 0.52, 2);
        break;
      }
    }
  } else {
    drawCenterSacredGlyph("ॐ", r * 0.84, 3);
  }
  ctx.restore();
}
function drawWarmGlowingDiya(ctx, cx, cy, scale = 1) {
  ctx.save();
  ctx.translate(cx, cy);
  ctx.scale(scale, scale);
  const flameGlow = ctx.createRadialGradient(0, -14, 2, 0, -14, 30);
  flameGlow.addColorStop(0, "rgba(254, 240, 138, 0.85)");
  flameGlow.addColorStop(0.42, "rgba(245, 158, 11, 0.42)");
  flameGlow.addColorStop(1, "rgba(217, 119, 6, 0)");
  ctx.fillStyle = flameGlow;
  ctx.beginPath();
  ctx.arc(0, -14, 30, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#F97316";
  ctx.beginPath();
  ctx.moveTo(0, -28);
  ctx.quadraticCurveTo(10, -12, 0, -2);
  ctx.quadraticCurveTo(-10, -12, 0, -28);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = "#FEF08A";
  ctx.beginPath();
  ctx.moveTo(0, -22);
  ctx.quadraticCurveTo(5.5, -11, 0, -4);
  ctx.quadraticCurveTo(-5.5, -11, 0, -22);
  ctx.closePath();
  ctx.fill();
  const bowlGrad = createMetallicGoldGradient(ctx, -20, -2, 20, 14);
  ctx.fillStyle = bowlGrad;
  ctx.strokeStyle = "#FDE68A";
  ctx.lineWidth = 1.2;
  ctx.beginPath();
  ctx.moveTo(-20, 0);
  ctx.quadraticCurveTo(0, 6, 20, 0);
  ctx.quadraticCurveTo(13, 15, 0, 15);
  ctx.quadraticCurveTo(-13, 15, -20, 0);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.strokeStyle = "#FEF9C3";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(-14, 2);
  ctx.quadraticCurveTo(0, 6.5, 14, 2);
  ctx.stroke();
  ctx.restore();
}
function drawVedicRashiCanvasEmblem(ctx, rashiInput, cx, cy, r, strokeColor = "#fde047") {
  const key = normalizeRashiKey(rashiInput);
  const s = r / 26;
  ctx.save();
  ctx.translate(cx, cy);
  ctx.scale(s, s);
  ctx.translate(-32, -32);
  ctx.strokeStyle = strokeColor;
  ctx.fillStyle = strokeColor;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.lineWidth = 3.8;
  switch (key) {
    case "mesh": {
      ctx.beginPath();
      ctx.moveTo(32, 52);
      ctx.lineTo(32, 32);
      ctx.moveTo(32, 32);
      ctx.bezierCurveTo(26, 16, 10, 12, 8, 24);
      ctx.bezierCurveTo(6, 33, 16, 38, 22, 33);
      ctx.moveTo(32, 32);
      ctx.bezierCurveTo(38, 16, 54, 12, 56, 24);
      ctx.bezierCurveTo(58, 33, 48, 38, 42, 33);
      ctx.moveTo(23, 36);
      ctx.lineTo(32, 54);
      ctx.lineTo(41, 36);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(32, 27, 2.8, 0, Math.PI * 2);
      ctx.fill();
      break;
    }
    case "vrishabh": {
      ctx.beginPath();
      ctx.moveTo(12, 12);
      ctx.bezierCurveTo(12, 24, 21, 30, 32, 30);
      ctx.bezierCurveTo(43, 30, 52, 24, 52, 12);
      ctx.moveTo(18, 28);
      ctx.lineTo(23, 48);
      ctx.bezierCurveTo(25, 53, 39, 53, 41, 48);
      ctx.lineTo(46, 28);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(32, 49, 4, 0, Math.PI * 2);
      ctx.stroke();
      break;
    }
    case "mithun": {
      ctx.beginPath();
      ctx.moveTo(14, 14);
      ctx.bezierCurveTo(24, 19, 40, 19, 50, 14);
      ctx.moveTo(14, 50);
      ctx.bezierCurveTo(24, 45, 40, 45, 50, 50);
      ctx.moveTo(23, 17);
      ctx.lineTo(23, 47);
      ctx.moveTo(41, 17);
      ctx.lineTo(41, 47);
      ctx.moveTo(23, 32);
      ctx.lineTo(41, 32);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(23, 26, 3.2, 0, Math.PI * 2);
      ctx.arc(41, 38, 3.2, 0, Math.PI * 2);
      ctx.fill();
      break;
    }
    case "kark": {
      ctx.save();
      ctx.globalAlpha = 0.2;
      ctx.beginPath();
      ctx.ellipse(32, 38, 14, 10, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
      ctx.beginPath();
      ctx.ellipse(32, 38, 14, 10, 0, 0, Math.PI * 2);
      ctx.moveTo(22, 30);
      ctx.bezierCurveTo(15, 24, 13, 15, 20, 11);
      ctx.bezierCurveTo(24, 15, 23, 21, 20, 24);
      ctx.moveTo(42, 30);
      ctx.bezierCurveTo(49, 24, 51, 15, 44, 11);
      ctx.bezierCurveTo(40, 15, 41, 21, 44, 24);
      ctx.moveTo(18, 37);
      ctx.lineTo(10, 34);
      ctx.moveTo(18, 42);
      ctx.lineTo(9, 45);
      ctx.moveTo(46, 37);
      ctx.lineTo(54, 34);
      ctx.moveTo(46, 42);
      ctx.lineTo(55, 45);
      ctx.stroke();
      break;
    }
    case "simha": {
      ctx.save();
      ctx.setLineDash([5, 4]);
      ctx.beginPath();
      ctx.arc(32, 30, 18, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();
      ctx.save();
      ctx.globalAlpha = 0.18;
      ctx.beginPath();
      ctx.arc(32, 30, 12, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
      ctx.beginPath();
      ctx.arc(32, 30, 12, 0, Math.PI * 2);
      ctx.moveTo(26, 27);
      ctx.lineTo(28, 27);
      ctx.moveTo(36, 27);
      ctx.lineTo(38, 27);
      ctx.moveTo(29, 33);
      ctx.lineTo(32, 36);
      ctx.lineTo(35, 33);
      ctx.moveTo(32, 36);
      ctx.lineTo(32, 40);
      ctx.moveTo(25, 48);
      ctx.bezierCurveTo(29, 53, 35, 53, 39, 48);
      ctx.stroke();
      break;
    }
    case "kanya": {
      ctx.save();
      ctx.globalAlpha = 0.22;
      ctx.beginPath();
      ctx.moveTo(32, 10);
      ctx.bezierCurveTo(25, 20, 25, 32, 32, 40);
      ctx.bezierCurveTo(39, 32, 39, 20, 32, 10);
      ctx.fill();
      ctx.restore();
      ctx.beginPath();
      ctx.moveTo(32, 10);
      ctx.bezierCurveTo(25, 20, 25, 32, 32, 40);
      ctx.bezierCurveTo(39, 32, 39, 20, 32, 10);
      ctx.moveTo(32, 40);
      ctx.bezierCurveTo(21, 36, 13, 28, 13, 19);
      ctx.bezierCurveTo(21, 21, 27, 28, 32, 40);
      ctx.bezierCurveTo(43, 36, 51, 28, 51, 19);
      ctx.bezierCurveTo(43, 21, 37, 28, 32, 40);
      ctx.moveTo(20, 46);
      ctx.lineTo(44, 46);
      ctx.moveTo(25, 52);
      ctx.lineTo(39, 52);
      ctx.moveTo(32, 40);
      ctx.lineTo(32, 54);
      ctx.stroke();
      break;
    }
    case "tula": {
      ctx.beginPath();
      ctx.moveTo(32, 11);
      ctx.lineTo(32, 51);
      ctx.moveTo(20, 52);
      ctx.lineTo(44, 52);
      ctx.moveTo(12, 20);
      ctx.lineTo(52, 20);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(32, 14, 3.2, 0, Math.PI * 2);
      ctx.fill();
      ctx.lineWidth = 2.4;
      ctx.beginPath();
      ctx.moveTo(14, 20);
      ctx.lineTo(8, 37);
      ctx.lineTo(20, 37);
      ctx.closePath();
      ctx.moveTo(50, 20);
      ctx.lineTo(44, 37);
      ctx.lineTo(56, 37);
      ctx.closePath();
      ctx.stroke();
      ctx.lineWidth = 3.2;
      ctx.beginPath();
      ctx.arc(14, 37, 7, 0, Math.PI);
      ctx.closePath();
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(50, 37, 7, 0, Math.PI);
      ctx.closePath();
      ctx.stroke();
      break;
    }
    case "vrishchik": {
      ctx.beginPath();
      ctx.moveTo(32, 20);
      ctx.lineTo(32, 42);
      ctx.moveTo(22, 14);
      ctx.bezierCurveTo(16, 14, 14, 20, 19, 24);
      ctx.lineTo(27, 22);
      ctx.moveTo(42, 14);
      ctx.bezierCurveTo(48, 14, 50, 20, 45, 24);
      ctx.lineTo(37, 22);
      ctx.moveTo(22, 30);
      ctx.lineTo(42, 30);
      ctx.moveTo(24, 36);
      ctx.lineTo(40, 36);
      ctx.moveTo(32, 42);
      ctx.bezierCurveTo(32, 52, 44, 54, 48, 45);
      ctx.bezierCurveTo(50, 40, 46, 35, 43, 37);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(43, 37, 2.3, 0, Math.PI * 2);
      ctx.fill();
      break;
    }
    case "dhanu": {
      ctx.beginPath();
      ctx.moveTo(20, 12);
      ctx.bezierCurveTo(40, 16, 48, 28, 20, 52);
      ctx.stroke();
      ctx.lineWidth = 2.4;
      ctx.beginPath();
      ctx.moveTo(20, 12);
      ctx.lineTo(20, 52);
      ctx.stroke();
      ctx.lineWidth = 3.8;
      ctx.beginPath();
      ctx.moveTo(12, 32);
      ctx.lineTo(54, 32);
      ctx.moveTo(45, 25);
      ctx.lineTo(54, 32);
      ctx.lineTo(45, 39);
      ctx.moveTo(10, 28);
      ctx.lineTo(16, 32);
      ctx.lineTo(10, 36);
      ctx.stroke();
      break;
    }
    case "makar": {
      ctx.beginPath();
      ctx.moveTo(10, 34);
      ctx.bezierCurveTo(16, 24, 30, 22, 40, 28);
      ctx.bezierCurveTo(48, 33, 54, 27, 52, 19);
      ctx.bezierCurveTo(50, 14, 44, 15, 44, 20);
      ctx.moveTo(10, 34);
      ctx.lineTo(22, 38);
      ctx.bezierCurveTo(28, 40, 34, 40, 40, 36);
      ctx.moveTo(21, 24);
      ctx.lineTo(25, 18);
      ctx.lineTo(29, 24);
      ctx.lineTo(33, 18);
      ctx.lineTo(36, 25);
      ctx.moveTo(15, 39);
      ctx.lineTo(12, 46);
      ctx.moveTo(28, 40);
      ctx.lineTo(28, 47);
      ctx.stroke();
      break;
    }
    case "kumbh": {
      ctx.save();
      ctx.globalAlpha = 0.2;
      ctx.beginPath();
      ctx.moveTo(24, 23);
      ctx.lineTo(40, 23);
      ctx.lineTo(38, 28);
      ctx.bezierCurveTo(45, 31, 48, 39, 45, 47);
      ctx.bezierCurveTo(42, 52, 22, 52, 19, 47);
      ctx.bezierCurveTo(16, 39, 19, 31, 26, 28);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
      ctx.beginPath();
      ctx.moveTo(24, 23);
      ctx.lineTo(40, 23);
      ctx.lineTo(38, 28);
      ctx.bezierCurveTo(45, 31, 48, 39, 45, 47);
      ctx.bezierCurveTo(42, 52, 22, 52, 19, 47);
      ctx.bezierCurveTo(16, 39, 19, 31, 26, 28);
      ctx.closePath();
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(32, 18, 5.2, 0, Math.PI * 2);
      ctx.moveTo(22, 20);
      ctx.bezierCurveTo(18, 16, 15, 17, 14, 21);
      ctx.moveTo(42, 20);
      ctx.bezierCurveTo(46, 16, 49, 17, 50, 21);
      ctx.moveTo(25, 38);
      ctx.lineTo(39, 38);
      ctx.moveTo(32, 33);
      ctx.lineTo(32, 43);
      ctx.stroke();
      break;
    }
    case "meen": {
      ctx.lineWidth = 3.4;
      ctx.beginPath();
      ctx.moveTo(13, 24);
      ctx.bezierCurveTo(20, 14, 34, 13, 42, 22);
      ctx.bezierCurveTo(34, 29, 20, 29, 13, 24);
      ctx.closePath();
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(42, 22);
      ctx.lineTo(50, 16);
      ctx.lineTo(50, 28);
      ctx.closePath();
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(51, 40);
      ctx.bezierCurveTo(44, 50, 30, 51, 22, 42);
      ctx.bezierCurveTo(30, 35, 44, 35, 51, 40);
      ctx.closePath();
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(22, 42);
      ctx.lineTo(14, 36);
      ctx.lineTo(14, 48);
      ctx.closePath();
      ctx.fill();
      break;
    }
  }
  ctx.restore();
}
function drawFooterQrCode(ctx, shareUrl, qrX, qrY, qrBoxSize) {
  const { fullUrl: normalizedUrl } = normalizeProductionCardUrl(shareUrl);
  ctx.save();
  ctx.fillStyle = "#ffffff";
  drawRoundRect(ctx, qrX, qrY, qrBoxSize, qrBoxSize, 12);
  ctx.fill();
  ctx.strokeStyle = activeCardFestiveRenderCtx?.isFestiveThemeActive ? activeCardFestiveRenderCtx.accentPrimary : "#fbbf24";
  ctx.lineWidth = 2.2;
  drawRoundRect(ctx, qrX, qrY, qrBoxSize, qrBoxSize, 12);
  ctx.stroke();
  try {
    const qr = QRCode.create(normalizedUrl, { errorCorrectionLevel: "M" });
    const count = qr.modules.size;
    const quietZone = Math.max(5, Math.round(qrBoxSize * 0.08));
    const innerSize = qrBoxSize - quietZone * 2;
    const cell = innerSize / count;
    ctx.fillStyle = "#090d18";
    for (let r = 0; r < count; r++) {
      const y0 = Math.round(qrY + quietZone + r * cell);
      const y1 = Math.round(qrY + quietZone + (r + 1) * cell);
      const h = Math.max(1, y1 - y0);
      for (let c = 0; c < count; c++) {
        if (qr.modules.get(r, c)) {
          const x0 = Math.round(qrX + quietZone + c * cell);
          const x1 = Math.round(qrX + quietZone + (c + 1) * cell);
          ctx.fillRect(x0, y0, Math.max(1, x1 - x0), h);
        }
      }
    }
  } catch {
    ctx.fillStyle = "#090d18";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = `900 ${Math.round(qrBoxSize * 0.45)}px ${FONT_STACK}`;
    ctx.fillText("ॐ", qrX + qrBoxSize / 2, qrY + qrBoxSize / 2);
  }
  ctx.restore();
}
function drawCommonFrame(ctx, palette, badgeText, logoImg, layout, shareUrl, lang = "hi", festiveCtx, payload) {
  const { width: W, height: H, footerY, footerH, isVertical } = layout;
  const activeFest = festiveCtx && festiveCtx.isFestiveThemeActive ? festiveCtx : null;
  const themePrimary = activeFest?.accentPrimary || "#f59e0b";
  const themeAccent = activeFest?.accentSecondary || palette.accentLine;
  const [ar, ag, ab] = parseHexRgb(themePrimary);
  const bgGrad = ctx.createLinearGradient(0, 0, W, H);
  bgGrad.addColorStop(0, palette.bgTop);
  bgGrad.addColorStop(0.5, palette.bgMid);
  bgGrad.addColorStop(1, palette.bgBot);
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, W, H);
  const radGlow = ctx.createRadialGradient(W / 2, isVertical ? 250 : 190, 30, W / 2, isVertical ? 320 : 240, 640);
  radGlow.addColorStop(0, palette.glowColor);
  radGlow.addColorStop(1, "rgba(0,0,0,0)");
  ctx.fillStyle = radGlow;
  ctx.fillRect(0, 0, W, H);
  if (isVertical || activeFest) {
    const lowGlow = ctx.createRadialGradient(W / 2, H - 360, 40, W / 2, H - 340, 580);
    lowGlow.addColorStop(0, activeFest ? `rgba(${ar}, ${ag}, ${ab}, 0.20)` : palette.glowColor);
    lowGlow.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = lowGlow;
    ctx.fillRect(0, 0, W, H);
  }
  drawShriMandalaWatermark(ctx, W / 2, H / 2, isVertical ? 360 : 295);
  ctx.save();
  if (activeFest && activeFest.festiveState.isHairlineActive) {
    const stops = getHairlineColorsForCard(
      activeFest.festiveState.hairlineEffect,
      themePrimary,
      themeAccent
    );
    const borderGrad = ctx.createLinearGradient(24, 24, W - 24, H - 24);
    stops.forEach((col, idx) => {
      borderGrad.addColorStop(idx / Math.max(1, stops.length - 1), col);
    });
    ctx.shadowColor = themeAccent;
    ctx.shadowBlur = activeFest.festiveState.hairlineIntensity === "bold" ? 30 : 22;
    ctx.strokeStyle = borderGrad;
    ctx.lineWidth = activeFest.festiveState.hairlineIntensity === "bold" ? 9 : 7.5;
  } else {
    ctx.strokeStyle = createMetallicGoldGradient(ctx, 24, 24, W - 24, H - 24);
    ctx.lineWidth = activeFest ? 6.5 : 4.5;
  }
  drawRoundRect(ctx, 24, 24, W - 48, H - 48, 34);
  ctx.stroke();
  ctx.shadowBlur = 0;
  ctx.strokeStyle = createMetallicGoldGradient(ctx, 38, 38, W - 38, H - 38);
  ctx.globalAlpha = activeFest ? 0.62 : 0.48;
  ctx.lineWidth = activeFest ? 2.2 : 1.8;
  drawRoundRect(ctx, 38, 38, W - 76, H - 76, 26);
  ctx.stroke();
  ctx.restore();
  drawCornerMandalaMotif(ctx, 42, 42, palette.accentLine, 0);
  drawCornerMandalaMotif(ctx, W - 42, 42, palette.accentLine, 1);
  drawCornerMandalaMotif(ctx, 42, H - 42, palette.accentLine, 2);
  drawCornerMandalaMotif(ctx, W - 42, H - 42, palette.accentLine, 3);
  if (activeFest && activeFest.festiveState.isHairlineActive) {
    const topStops = getHairlineColorsForCard(
      activeFest.festiveState.hairlineEffect,
      themePrimary,
      themeAccent
    );
    const ribbonGrad = ctx.createLinearGradient(72, 31, W - 72, 31);
    topStops.forEach((col, idx) => {
      ribbonGrad.addColorStop(idx / Math.max(1, topStops.length - 1), col);
    });
    ctx.save();
    ctx.shadowColor = themeAccent;
    ctx.shadowBlur = activeFest.festiveState.hairlineIntensity === "bold" ? 20 : 14;
    ctx.fillStyle = ribbonGrad;
    const ribbonH = activeFest.festiveState.hairlineIntensity === "bold" ? 5.5 : activeFest.festiveState.hairlineIntensity === "slim" ? 2.5 : 4;
    drawRoundRect(ctx, 76, 29, W - 152, ribbonH, ribbonH / 2);
    ctx.fill();
    ctx.restore();
  }
  const sealCy = isVertical ? 120 : 104;
  const sealR = isVertical ? 44 : 38;
  const leftSealCx = isVertical ? 124 : 130;
  const rightSealCx = W - leftSealCx;
  const sealRingColor = activeFest ? themeAccent : "#fde047";
  const sealOuterRingRgba = activeFest ? `rgba(${ar}, ${ag}, ${ab}, 0.48)` : "rgba(251, 191, 36, 0.45)";
  ctx.save();
  const leftGlow = ctx.createRadialGradient(leftSealCx, sealCy, sealR * 0.4, leftSealCx, sealCy, sealR + 12);
  leftGlow.addColorStop(0, sealOuterRingRgba);
  leftGlow.addColorStop(1, "rgba(0, 0, 0, 0)");
  ctx.fillStyle = leftGlow;
  ctx.beginPath();
  ctx.arc(leftSealCx, sealCy, sealR + 12, 0, Math.PI * 2);
  ctx.fill();
  if (logoImg) {
    ctx.save();
    ctx.beginPath();
    ctx.arc(leftSealCx, sealCy, sealR, 0, Math.PI * 2);
    ctx.clip();
    ctx.drawImage(logoImg, leftSealCx - sealR, sealCy - sealR, sealR * 2, sealR * 2);
    ctx.restore();
  } else {
    ctx.fillStyle = activeFest ? activeFest.sealCoreHex : "#451a03";
    ctx.beginPath();
    ctx.arc(leftSealCx, sealCy, sealR, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = sealRingColor;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = `900 ${isVertical ? 36 : 32}px ${FONT_STACK}`;
    ctx.fillText("ॐ", leftSealCx, sealCy + 2);
  }
  ctx.strokeStyle = createMetallicGoldGradient(ctx, leftSealCx - sealR, sealCy - sealR, leftSealCx + sealR, sealCy + sealR);
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(leftSealCx, sealCy, sealR + 1, 0, Math.PI * 2);
  ctx.stroke();
  ctx.strokeStyle = sealOuterRingRgba;
  ctx.lineWidth = 1.4;
  ctx.beginPath();
  ctx.arc(leftSealCx, sealCy, sealR + 6, 0, Math.PI * 2);
  ctx.stroke();
  ctx.restore();
  drawTopRightGoldMedallion(ctx, rightSealCx, sealCy, sealR, payload, activeFest);
  ctx.save();
  const centerMaxW = rightSealCx - leftSealCx - sealR * 2 - 42;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  const hdrFit = fitSingleLine(
    ctx,
    trCard(
      lang,
      "॥ श्री गणेशाय नमः ॥  •  पण्डित जी ऑनलाइन",
      "|| Shri Ganeshaya Namah ||  •  Pandit Ji Online",
      "|| Shri Ganeshaya Namah ||  •  Pandit Ji Online",
      "॥ श्री गणेशाय नमः ॥  •  पंडित जी ऑनलाइन",
      "॥ શ્રી ગણેશાય નમઃ ॥  •  પંડિત જી ઓનલાઇન"
    ),
    centerMaxW,
    900,
    isVertical ? 31 : 27,
    13
  );
  ctx.fillStyle = activeFest ? blendHexColors("#fffbeb", themeAccent, 0.32) : "#fde68a";
  ctx.font = `900 ${hdrFit.fontSize}px ${FONT_STACK}`;
  ctx.fillText(hdrFit.text, W / 2, isVertical ? 82 : 72);
  const subBrandFit = fitSingleLine(
    ctx,
    trCard(
      lang,
      "श्री ज्योतिष वैदिक संस्थान (रुद्रपुर)  •  शुद्ध दृक गणित पंचांग एवं ज्योतिष",
      "Shri Jyotish Vedic Sansthan (Rudrapur)  •  Drik Ganita Panchang & Astrology",
      "Shri Jyotish Vedic Sansthan (Rudrapur)  •  Shuddh Drik Ganita Panchang & Jyotish",
      "श्री ज्योतिष वैदिक संस्थान (रुद्रपूर)  •  शुद्ध दृक गणित पंचांग व ज्योतिष",
      "શ્રી જ્યોતિષ વૈદિક સંસ્થાન (રુદ્રપુર)  •  શુદ્ધ દૃક ગણિત પંચાંગ અને જ્યોતિષ"
    ),
    centerMaxW,
    700,
    isVertical ? 19 : 17,
    11
  );
  ctx.fillStyle = activeFest ? blendHexColors("#fef3c7", themeAccent, 0.62) : "#fcd34d";
  ctx.font = `700 ${subBrandFit.fontSize}px ${FONT_STACK}`;
  ctx.fillText(subBrandFit.text, W / 2, isVertical ? 116 : 102);
  const cleanBadge = stripBoxyEmojis(
    badgeText || trCard(lang, "वैदिक ज्योतिष एवं पंचांग", "Vedic Astrology & Panchang")
  );
  const selectedVaraInfo = extractSelectedDateVara(payload);
  const selectedFestShort = (payload?.panchangData?.festivalName || payload?.rashifalData?.festivalName || payload?.all12RashifalData?.festivalName || payload?.festivalData?.festivalName || "").split("(")[0].split("•")[0].trim();
  const activeThemeLabelRaw = activeFest ? lang === "en" ? (activeFest.festiveState.activeTheme.nameEn || "").split("(")[0].trim() : (activeFest.festiveState.activeTheme.subDayLabelHi || activeFest.festiveState.activeTheme.nameHi || "").split("(")[0].split("•")[0].trim() : "";
  const isActiveThemeWeekdayOnly = /रविवार|सोमवार|मंगलवार|बुधवार|गुरुवार|बृहस्पतिवार|शुक्रवार|शनिवार|sunday|monday|tuesday|wednesday|thursday|friday|saturday/i.test(
    activeThemeLabelRaw
  );
  const selectedVaraBadgeTag = selectedVaraInfo ? lang === "en" ? `${selectedVaraInfo.vaarEn} Special` : `${selectedVaraInfo.vaarHi} विशेष` : "";
  const rawFestTag = selectedVaraBadgeTag ? selectedFestShort && !selectedFestShort.toLowerCase().includes(selectedVaraBadgeTag.toLowerCase()) ? `${selectedVaraBadgeTag} • ${selectedFestShort}` : selectedVaraBadgeTag : selectedFestShort ? selectedFestShort : !isActiveThemeWeekdayOnly ? activeThemeLabelRaw : "";
  const festiveShortTag = rawFestTag ? stripBoxyEmojis(rawFestTag) : "";
  const combinedBadge = festiveShortTag && !cleanBadge.toLowerCase().includes(festiveShortTag.toLowerCase()) ? `${cleanBadge}  •  ${festiveShortTag}` : cleanBadge;
  const displayBadge = combinedBadge;
  const badgeFit = fitSingleLine(ctx, displayBadge, centerMaxW - 26, 800, isVertical ? 22 : 19, 11);
  ctx.font = `800 ${badgeFit.fontSize}px ${FONT_STACK}`;
  const measuredW = ctx.measureText(badgeFit.text).width;
  const badgeW = Math.min(centerMaxW + 30, measuredW + 72);
  const badgeH = isVertical ? 40 : 34;
  const badgeX = (W - badgeW) / 2;
  const badgeY = isVertical ? 144 : 123;
  ctx.fillStyle = palette.badgeBg;
  drawRoundRect(ctx, badgeX, badgeY, badgeW, badgeH, badgeH / 2);
  ctx.fill();
  const badgeCy = badgeY + badgeH / 2;
  drawVedicCanvasDiamond(ctx, badgeX + 18, badgeCy, 6, palette.badgeText);
  drawVedicCanvasDiamond(ctx, badgeX + badgeW - 18, badgeCy, 6, palette.badgeText);
  ctx.fillStyle = palette.badgeText;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(badgeFit.text, W / 2, badgeCy + 1);
  ctx.restore();
  const footerX = 54;
  const footerW = W - 108;
  const qrBoxSize = isVertical ? 104 : 84;
  const qrX = footerX + footerW - qrBoxSize - 14;
  const qrY = footerY + Math.round((footerH - qrBoxSize) / 2);
  const diyaCx = qrX - (isVertical ? 38 : 31);
  const diyaCy = footerY + Math.round(footerH * 0.58);
  const footerBorderColor = activeFest ? `rgba(${ar}, ${ag}, ${ab}, 0.70)` : "rgba(245, 158, 11, 0.65)";
  drawClippedBox(
    ctx,
    footerX,
    footerY,
    footerW,
    footerH,
    22,
    "rgba(10, 16, 32, 0.95)",
    footerBorderColor,
    2,
    () => {
      if (activeFest && activeFest.festiveState.isHairlineActive) {
        const fStops = getHairlineColorsForCard(
          activeFest.festiveState.hairlineEffect,
          themePrimary,
          themeAccent
        );
        const fGrad = ctx.createLinearGradient(footerX, footerY, footerX + footerW, footerY);
        fStops.forEach((col, idx) => {
          fGrad.addColorStop(idx / Math.max(1, fStops.length - 1), col);
        });
        ctx.fillStyle = fGrad;
        ctx.fillRect(footerX, footerY, footerW, 3);
      }
      const textLeft = footerX + 20;
      const textRight = diyaCx - (isVertical ? 32 : 26);
      const textMaxW = Math.max(200, textRight - textLeft);
      const textCenterX = textLeft + textMaxW / 2;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      const line1Fit = fitSingleLine(
        ctx,
        trCard(
          lang,
          "आचार्य पण्डित शशांक शर्मा  •  श्री ज्योतिष वैदिक संस्थान (रुद्रपुर, उत्तराखण्ड)",
          "Acharya Pandit Shashank Sharma  •  Shri Jyotish Vedic Sansthan (Rudrapur, UK)",
          "Acharya Pandit Shashank Sharma  •  Shri Jyotish Vedic Sansthan (Rudrapur, UK)",
          "आचार्य पंडित शशांक शर्मा  •  श्री ज्योतिष वैदिक संस्थान (रुद्रपूर, उत्तराखंड)",
          "આચાર્ય પંડિત શશાંક શર્મા  •  શ્રી જ્યોતિષ વૈદિક સંસ્થાન (રુદ્રપુર, ઉત્તરાખંડ)"
        ),
        textMaxW,
        800,
        isVertical ? 23 : 20,
        11
      );
      ctx.fillStyle = activeFest ? themeAccent : "#fde047";
      ctx.font = `800 ${line1Fit.fontSize}px ${FONT_STACK}`;
      ctx.fillText(line1Fit.text, textCenterX, footerY + Math.round(footerH * 0.3));
      const { displayUrl: cleanUrl } = normalizeProductionCardUrl(shareUrl);
      const consultPrefix = trCard(
        lang,
        "वैदिक परामर्श:",
        "Vedic Consultation:",
        "Vedic Paramarsh:",
        "वैदिक मार्गदर्शन:",
        "વૈદિક માર્ગદર્શન:"
      );
      const line2Fit = fitSingleLine(
        ctx,
        `${cleanUrl}   •   ${consultPrefix} +91 7017279043`,
        textMaxW,
        700,
        isVertical ? 20 : 18,
        10,
        true
      );
      ctx.fillStyle = "#a7f3d0";
      ctx.font = `700 ${line2Fit.fontSize}px ${FONT_STACK}`;
      ctx.fillText(line2Fit.text, textCenterX, footerY + Math.round(footerH * 0.61));
      const line3Fit = fitSingleLine(
        ctx,
        trCard(
          lang,
          "दाईं ओर QR कोड स्कैन कर सीधे यह वैदिक पृष्ठ खोलें",
          "Scan the QR code on the right to open this page directly",
          "Right side QR code scan karke seedhe yeh Vedic page kholein",
          "उजवीकडील QR कोड स्कॅन करून थेट हे वैदिक पृष्ठ उघडा",
          "જમણી બાજુનો QR કોડ સ્કેન કરીને સીધું આ વૈદિક પૃષ્ઠ ખોલો"
        ),
        textMaxW - 22,
        700,
        isVertical ? 16 : 14,
        10
      );
      const line3Color = "rgba(253, 230, 138, 0.85)";
      ctx.fillStyle = line3Color;
      ctx.font = `700 ${line3Fit.fontSize}px ${FONT_STACK}`;
      const line3W = ctx.measureText(line3Fit.text).width;
      const line3Y = footerY + Math.round(footerH * 0.85);
      ctx.fillText(line3Fit.text, textCenterX - 9, line3Y);
      drawVedicCanvasArrowRight(ctx, textCenterX + line3W / 2 + 2, line3Y, 10, line3Color);
      drawWarmGlowingDiya(ctx, diyaCx, diyaCy, isVertical ? 1 : 0.84);
    }
  );
  drawHorizontalDivider(ctx, layout.contentTop - (isVertical ? 14 : 10), themePrimary);
  drawHorizontalDivider(ctx, footerY - (isVertical ? 8 : 6), themePrimary);
  drawFooterQrCode(ctx, shareUrl, qrX, qrY, qrBoxSize);
}
function drawHorizontalDivider(ctx, y, color = "#fbbf24") {
  const af = activeCardFestiveRenderCtx?.isFestiveThemeActive ? activeCardFestiveRenderCtx : null;
  const primary = af ? af.accentPrimary : color;
  const secondary = af ? af.accentSecondary : "#fdba74";
  ctx.save();
  const divGrad = ctx.createLinearGradient(66, y, SIZE - 66, y);
  divGrad.addColorStop(0, "rgba(0, 0, 0, 0)");
  divGrad.addColorStop(0.25, secondary);
  divGrad.addColorStop(0.5, primary);
  divGrad.addColorStop(0.75, secondary);
  divGrad.addColorStop(1, "rgba(0, 0, 0, 0)");
  ctx.shadowColor = primary;
  ctx.shadowBlur = 12;
  ctx.strokeStyle = divGrad;
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.moveTo(66, y);
  ctx.lineTo(SIZE - 66, y);
  ctx.stroke();
  ctx.restore();
}
function drawVedicCanvasDiamond(ctx, cx, cy, r, color) {
  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = 1.5;
  ctx.lineJoin = "round";
  ctx.beginPath();
  ctx.moveTo(cx, cy - r);
  ctx.quadraticCurveTo(cx + r * 0.22, cy - r * 0.22, cx + r, cy);
  ctx.quadraticCurveTo(cx + r * 0.22, cy + r * 0.22, cx, cy + r);
  ctx.quadraticCurveTo(cx - r * 0.22, cy + r * 0.22, cx - r, cy);
  ctx.quadraticCurveTo(cx - r * 0.22, cy - r * 0.22, cx, cy - r);
  ctx.closePath();
  ctx.stroke();
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(cx, cy, Math.max(1.2, r * 0.18), 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}
function drawVedicCanvasArrowRight(ctx, x, cy, len, color) {
  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = 1.5;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.beginPath();
  ctx.moveTo(x - len * 0.4, cy);
  ctx.lineTo(x + len * 0.5, cy);
  ctx.moveTo(x + len * 0.15, cy - len * 0.35);
  ctx.lineTo(x + len * 0.5, cy);
  ctx.lineTo(x + len * 0.15, cy + len * 0.35);
  ctx.stroke();
  ctx.restore();
}
function drawVedicCanvasSun(ctx, cx, cy, r, color) {
  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = 1.5;
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.arc(cx, cy, r * 0.45, 0, Math.PI * 2);
  ctx.stroke();
  for (let i = 0; i < 8; i++) {
    const a = i * Math.PI / 4;
    ctx.beginPath();
    ctx.moveTo(cx + Math.cos(a) * r * 0.68, cy + Math.sin(a) * r * 0.68);
    ctx.lineTo(cx + Math.cos(a) * r, cy + Math.sin(a) * r);
    ctx.stroke();
  }
  ctx.restore();
}
function drawVedicCanvasSunset(ctx, cx, cy, r, color) {
  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = 1.5;
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.arc(cx, cy + r * 0.25, r * 0.52, Math.PI, 0);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(cx - r * 0.9, cy + r * 0.25);
  ctx.lineTo(cx + r * 0.9, cy + r * 0.25);
  ctx.moveTo(cx, cy - r * 0.72);
  ctx.lineTo(cx, cy - r * 0.36);
  ctx.moveTo(cx - r * 0.52, cy - r * 0.42);
  ctx.lineTo(cx - r * 0.32, cy - r * 0.18);
  ctx.moveTo(cx + r * 0.52, cy - r * 0.42);
  ctx.lineTo(cx + r * 0.32, cy - r * 0.18);
  ctx.stroke();
  ctx.restore();
}
function drawVedicCanvasMoon(ctx, cx, cy, r, color) {
  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = 1.5;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.beginPath();
  ctx.arc(cx, cy, r * 0.72, -Math.PI * 0.35, Math.PI * 0.65, false);
  ctx.quadraticCurveTo(cx + r * 0.12, cy - r * 0.08, cx + Math.cos(-Math.PI * 0.35) * r * 0.72, cy + Math.sin(-Math.PI * 0.35) * r * 0.72);
  ctx.stroke();
  ctx.restore();
}
function drawVedicCanvasChakra(ctx, cx, cy, r, color) {
  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = 1.5;
  ctx.lineJoin = "round";
  ctx.beginPath();
  ctx.moveTo(cx, cy - r * 0.85);
  ctx.lineTo(cx + r * 0.85, cy);
  ctx.lineTo(cx, cy + r * 0.85);
  ctx.lineTo(cx - r * 0.85, cy);
  ctx.closePath();
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(cx, cy, r * 0.25, 0, Math.PI * 2);
  ctx.stroke();
  ctx.restore();
}
function drawHighlightCard(ctx, x, y, w, h, label, value, palette, labelColor = "#fbbf24", valueColor = "#fff8e7", isVertical = false, sentenceAware = false) {
  drawClippedBox(ctx, x, y, w, h, 20, palette.cardBg, palette.cardBorder, 1.8, () => {
    const padX = isVertical ? 22 : 18;
    const innerW = w - padX * 2;
    const formattedLbl = stripBoxyEmojis(label).replace(/^✦\s*/, "").trim();
    const afCard = activeCardFestiveRenderCtx?.isFestiveThemeActive ? activeCardFestiveRenderCtx : null;
    const lowerColor = (labelColor || "").toLowerCase();
    let resolvedLabelColor = labelColor;
    if (lowerColor === "#fb7185" || lowerColor === "#ff7b7b" || lowerColor === "#ff6b6b" || lowerColor === "#ff8a80" || lowerColor === "#f43f5e") {
      resolvedLabelColor = "#FF8A80";
    } else if (lowerColor === "#34d399" || lowerColor === "#10b981") {
      resolvedLabelColor = "#34D399";
    } else if (afCard) {
      if (lowerColor === "#38bdf8" || lowerColor === "#93c5fd" || lowerColor === "#3b82f6" || lowerColor === "#fdba74") {
        resolvedLabelColor = afCard.accentSecondary;
      } else {
        resolvedLabelColor = afCard.accentPrimary;
      }
    }
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    const lblTop = isVertical ? y + 12 : y + 10;
    const lblMaxH = isVertical ? 54 : 40;
    const iconOffset = isVertical ? 22 : 18;
    const lblFit = fitAdaptiveHeading(ctx, formattedLbl, innerW - iconOffset, lblMaxH, 800, isVertical ? 24 : 20, 12, 1.22);
    drawVedicCanvasDiamond(
      ctx,
      x + padX + 7,
      lblTop + lblFit.fontSize * 0.56,
      isVertical ? 7 : 6,
      resolvedLabelColor
    );
    ctx.fillStyle = resolvedLabelColor;
    ctx.font = `800 ${lblFit.fontSize}px ${FONT_STACK}`;
    let curLblY = lblTop;
    for (const line of lblFit.lines) {
      ctx.fillText(line, x + padX + iconOffset, curLblY);
      curLblY += lblFit.lineHeight;
    }
    const sepY = curLblY + (isVertical ? 5 : 3);
    ctx.save();
    ctx.strokeStyle = afCard ? hexToRgba(afCard.accentPrimary, 0.32) : "rgba(251, 191, 36, 0.22)";
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.moveTo(x + padX, sepY);
    ctx.lineTo(x + w - padX, sepY);
    ctx.stroke();
    ctx.restore();
    const valTopY = sepY + (isVertical ? 6 : 4);
    const valMaxH = Math.max(38, y + h - valTopY - (isVertical ? 10 : 8));
    const valFit = sentenceAware ? fitSentenceAwareBlock(
      ctx,
      value,
      innerW,
      valMaxH,
      700,
      isVertical ? 28 : 23,
      13,
      isVertical ? 1.38 : 1.34,
      isVertical
    ) : fitWrappedBlock(
      ctx,
      value,
      innerW,
      valMaxH,
      700,
      isVertical ? 29 : 24,
      13,
      1.38
    );
    ctx.fillStyle = valueColor === "#f8fafc" ? "#FFF8E7" : valueColor;
    ctx.font = `700 ${valFit.fontSize}px ${FONT_STACK}`;
    const totalValH = valFit.lines.length * valFit.lineHeight;
    let curY = valTopY + Math.max(0, (valMaxH - totalValH) / 2);
    for (const line of valFit.lines) {
      ctx.fillText(line, x + padX, curY);
      curY += valFit.lineHeight;
    }
  });
}
function getWebappInviteSpec(payload, lang = "hi") {
  const customItems = (payload.webappFeatures || []).map((f) => stripBoxyEmojis(f)).filter(Boolean).slice(0, 4);
  const variant = payload.variant || "page";
  const titleLower = (payload.title || "").toLowerCase();
  const urlLower = (payload.shareUrl || "").toLowerCase();
  let defaults;
  switch (variant) {
    case "festival":
      defaults = {
        heading: trCard(
          lang,
          "॥ इस पृष्ठ पर सम्पूर्ण पर्व गाइड एवं लाभ देखें ॥",
          "|| Explore Complete Festival Guide & Benefits on App ||",
          "|| Is Page Par Sampoorn Parv Guide Aur Labh Dekhein ||"
        ),
        items: [
          trCard(lang, "सभी दिनों का सटीक पूजा व अर्घ्य समय", "Exact Puja & Arghya Timings for All Days", "Sabhi Dinon Ka Sateek Puja Va Arghya Samay"),
          trCard(lang, "सम्पूर्ण पूजा सामग्री एवं शास्त्रीय विधि", "Complete Samagri List & Shastriya Vidhi", "Sampoorn Puja Samagri Aur Shastriya Vidhi"),
          trCard(lang, "सिद्ध बीज मंत्र, स्तोत्र व आरती संग्रह", "Siddha Beej Mantra, Stotra & Aarti Collection", "Siddh Beej Mantra, Stotra Aur Aarti Sangrah"),
          trCard(lang, "अपने शहर अनुसार सूर्योदय-सूर्यास्त समय", "City-Specific Sunrise & Sunset Timings", "Apne Shahar Anusaar Sunrise-Sunset Samay")
        ],
        footerHint: trCard(
          lang,
          "पूरी पूजा विधि, सामग्री सूची व लाइव समय देखने हेतु QR स्कैन करें",
          "Scan QR to view full Puja Vidhi, Samagri list & live timings",
          "Puri Puja Vidhi, Samagri List aur Live Samay dekhne hetu QR scan karein"
        )
      };
      break;
    case "rashifal":
      defaults = {
        heading: trCard(
          lang,
          "॥ पण्डित जी ऑनलाइन पर अपना व्यक्तिगत फल देखें ॥",
          "|| View Your Personalized Forecast on Pandit Ji Online ||",
          "|| Pandit Ji Online Par Apna Vyaktigat Phal Dekhein ||"
        ),
        items: [
          trCard(lang, "जन्म तिथि व नाम से सटीक लाइव राशिफल", "Accurate Live Horoscope by DOB & Name", "Janam Tithi Va Naam Se Sateek Live Rashifal"),
          trCard(lang, "दैनिक, साप्ताहिक, मासिक व वार्षिक योग", "Daily, Weekly, Monthly & Yearly Yogas", "Dainik, Saptahik, Masik Va Varshik Yog"),
          trCard(lang, "आज का राहुकाल, चौघड़िया व चंद्र गोचर", "Today's Rahu Kaal, Choghadiya & Moon Transit", "Aaj Ka Rahukaal, Choghadiya Aur Chandra Gochar"),
          trCard(lang, "करियर, विवाह व धन वृद्धि के वैदिक उपाय", "Vedic Remedies for Career, Marriage & Wealth", "Career, Vivah Va Dhan Vriddhi Ke Vedic Upay")
        ],
        footerHint: trCard(
          lang,
          "सभी 12 राशियों व अपनी कुंडली का लाइव फल देखने हेतु QR स्कैन करें",
          "Scan QR to check all 12 Rashis & your live Kundali forecast",
          "Sabhi 12 Rashiyon va apni Kundali ka live phal dekhne hetu QR scan karein"
        )
      };
      break;
    case "panchang":
      defaults = {
        heading: trCard(
          lang,
          "॥ लाइव वैदिक पंचांग वेबऐप की प्रमुख सुविधाएं ॥",
          "|| Key Features of Live Vedic Panchang WebApp ||",
          "|| Live Vedic Panchang WebApp Ki Pramukh Suvidhayein ||"
        ),
        items: [
          trCard(lang, "अपने शहर (GPS) का सटीक सूर्योदय-अस्त", "Exact Sunrise & Sunset for Your City (GPS)", "Apne Shahar (GPS) Ka Sateek Sunrise-Sunset"),
          trCard(lang, "दिन व रात का 24 घंटे चौघड़िया टेबल", "24-Hour Day & Night Choghadiya Table", "Din Va Raat Ka 24 Ghante Choghadiya Table"),
          trCard(lang, "आगामी एकादशी, प्रदोष व व्रत कैलेंडर", "Upcoming Ekadashi, Pradosh & Vrat Calendar", "Aagami Ekadashi, Pradosh Va Vrat Calendar"),
          trCard(lang, "विवाह, गृहप्रवेश व वाहन खरीद शुभ मुहूर्त", "Marriage, Griha Pravesh & Vehicle Muhurat", "Vivah, Griha Pravesh Va Vahan Shubh Muhurat")
        ],
        footerHint: trCard(
          lang,
          "अपने शहर का लाइव पंचांग व चौघड़िया देखने हेतु अभी वेबऐप खोलें",
          "Open WebApp now to view your city live Panchang & Choghadiya",
          "Apne shahar ka live Panchang va Choghadiya dekhne hetu abhi WebApp kholein"
        )
      };
      break;
    case "milan":
      defaults = {
        heading: trCard(
          lang,
          "॥ वेबऐप पर संपूर्ण 36 गुण एवं दोष रिपोर्ट पाएं ॥",
          "|| Get Complete 36 Gun & Dosha Report on WebApp ||",
          "|| WebApp Par Sampoorn 36 Gun Aur Dosh Report Payein ||"
        ),
        items: [
          trCard(lang, "अष्टकूट के सभी 8 कूटों का विस्तृत स्कोर", "Detailed Score for All 8 Ashtakoot Kutas", "Ashtakoot Ke Sabhi 8 Kooton Ka Vistrit Score"),
          trCard(lang, "मांगलिक, नाड़ी व भकूट दोष परिहार जांच", "Manglik, Nadi & Bhakoot Dosh Cancellation Check", "Manglik, Nadi Va Bhakoot Dosh Parihar Jaanch"),
          trCard(lang, "वर-कन्या नवमांश (D-9) व सप्तम भाव बल", "Groom-Bride Navamsha (D-9) & 7th House Strength", "Var-Kanya Navamsha (D-9) Va Saptam Bhav Bal"),
          trCard(lang, "शुभ विवाह मुहूर्त व आचार्य जी का परामर्श", "Auspicious Marriage Muhurat & Acharya Guidance", "Shubh Vivah Muhurat Va Acharya Ji Ka Paramarsh")
        ],
        footerHint: trCard(
          lang,
          "किसी भी वर-कन्या की निःशुल्क कुंडली मिलान जांच हेतु QR स्कैन करें",
          "Scan QR for free Kundali Milan matching for any couple",
          "Kisi bhi Var-Kanya ki nishulk Kundali Milan jaanch hetu QR scan karein"
        )
      };
      break;
    case "kundali":
      defaults = {
        heading: trCard(
          lang,
          "॥ वेबऐप पर अपनी निःशुल्क संपूर्ण जन्म पत्रिका पाएं ॥",
          "|| Get Your Free Complete Birth Kundali on WebApp ||",
          "|| WebApp Par Apni Nishulk Sampoorn Janam Patrika Payein ||"
        ),
        items: [
          trCard(lang, "लग्न, नवमांश (D-9) व षोडशवर्ग चार्ट", "Lagna, Navamsha (D-9) & Shodashvarga Charts", "Lagna, Navamsha (D-9) Va Shodashvarga Chart"),
          trCard(lang, "120 वर्षीय विंशोत्तरी महादशा व गोचर फल", "120-Year Vimshottari Mahadasha & Transit", "120-Varshiya Vimshottari Mahadasha Va Gochar Phal"),
          trCard(lang, "मांगलिक, कालसर्प व पितृ दोष विश्लेषण", "Manglik, Kaalsarp & Pitra Dosh Analysis", "Manglik, Kaalsarp Va Pitra Dosh Vishleshan"),
          trCard(lang, "शुभ रत्न, रुद्राक्ष व सरल शास्त्रीय उपाय", "Lucky Gemstone, Rudraksha & Simple Remedies", "Shubh Ratna, Rudraksha Va Saral Shastriya Upay")
        ],
        footerHint: trCard(
          lang,
          "10 सेकंड में अपनी निःशुल्क जन्म कुंडली बनाने हेतु अभी वेबऐप खोलें",
          "Open WebApp now to generate your free Janam Kundali in 10 seconds",
          "10 second mein apni nishulk Janam Kundali banane hetu abhi WebApp kholein"
        )
      };
      break;
    case "naamrashi":
      defaults = {
        heading: trCard(
          lang,
          "॥ वेबऐप पर अपने नाम अक्षर का संपूर्ण रहस्य देखें ॥",
          "|| Discover Full Secrets of Your Name Initial on WebApp ||",
          "|| WebApp Par Apne Naam Akshar Ka Sampoorn Rahasya Dekhein ||"
        ),
        items: [
          trCard(lang, "A से Z सभी नामाक्षरों का अवकहड़ा चक्र", "Avakahada Chakra for All A to Z Name Letters", "A Se Z Sabhi Naamaksharon Ka Avakahada Chakra"),
          trCard(lang, "करियर, भाग्योदय वर्ष व शुभ रत्न जांच", "Career, Peak Luck Years & Lucky Gemstone Check", "Career, Bhagyoday Varsh Va Shubh Ratna Jaanch"),
          trCard(lang, "नाम से विवाह गुण मिलान व मित्र राशियां", "Name-Based Marriage Match & Friendly Rashis", "Naam Se Vivah Gun Milan Va Mitra Rashiyan"),
          trCard(lang, "जन्म तिथि से वास्तविक चंद्र राशि की जांच", "Check Real Moon Rashi from Date of Birth", "Janam Tithi Se Vastavik Chandra Rashi Ki Jaanch")
        ],
        footerHint: trCard(
          lang,
          "अपने या परिवार के नाम अक्षर का पूरा फल देखने हेतु QR स्कैन करें",
          "Scan QR to check full reading for your or family name initial",
          "Apne ya parivar ke naam akshar ka pura phal dekhne hetu QR scan karein"
        )
      };
      break;
    case "gochar":
      defaults = {
        heading: trCard(
          lang,
          "॥ वेबऐप पर अपनी 5-स्तम्भीय गोचर रिपोर्ट देखें ॥",
          "|| View Your 5-Pillar Live Transit Report on WebApp ||",
          "|| WebApp Par Apni 5-Pillar Gochar Report Dekhein ||"
        ),
        items: [
          trCard(lang, "करियर, धन व परिवार का लाइव ग्रह प्रभाव", "Live Planetary Impact on Career, Wealth & Family", "Career, Dhan Va Parivar Ka Live Grah Prabhav"),
          trCard(lang, "वर्तमान महादशा-अंतर्दशा व गुरु-शनि गोचर", "Current Mahadasha-Antardasha & Guru-Shani Transit", "Vartaman Mahadasha-Antardasha Va Guru-Shani Gochar"),
          trCard(lang, "व्यक्तिगत शुभ रत्न, रुद्राक्ष व शुभ अंक", "Personal Lucky Gemstone, Rudraksha & Numbers", "Vyaktigat Shubh Ratna, Rudraksha Va Shubh Ank"),
          trCard(lang, "आज के अभिजित मुहूर्त व राहुकाल का समय", "Today's Abhijit Muhurat & Rahu Kaal Timings", "Aaj Ke Abhijit Muhurat Va Rahukaal Ka Samay")
        ],
        footerHint: trCard(
          lang,
          "अपने नाम व जन्म विवरण से रोज़ाना लाइव गोचर देखने हेतु QR स्कैन करें",
          "Scan QR to view daily live transit with your birth details",
          "Apne naam va janam vivaran se rozana live gochar dekhne hetu QR scan karein"
        )
      };
      break;
    case "mandir":
      defaults = {
        heading: trCard(
          lang,
          "॥ श्री डिजिटल मंदिर — नित्य दर्शन, आरती व १०८ जप साधना ॥",
          "|| Shri Digital Mandir — Daily Darshan, Aarti & 108 Japa Sadhana ||",
          "|| Shri Digital Mandir — Nitya Darshan, Aarti Va 108 Jap Sadhana ||"
        ),
        items: [
          trCard(lang, "नित्य व वार देव, नवदुर्गा व पर्व अवतार दर्शन", "Daily, Navdurga & Festival Deity Darshan", "Nitya Va Vaar Dev, Navdurga Va Parv Avatar Darshan"),
          trCard(lang, "प्रातः श्रृंगार दर्शन एवं संध्या महाआरती प्रहर", "Morning Shringar & Evening Maha-Aarti Prahars", "Pratah Shringar Darshan Va Sandhya Maha-Aarti"),
          trCard(lang, "वैदिक पूजा संकल्प एवं १०८ रुद्राक्ष मंत्र जप", "Vedic Puja Sankalp & 108 Rudraksha Mantra Japa", "Vedic Puja Sankalp Va 108 Rudraksha Mantra Jap"),
          trCard(lang, "लाइव पीतल घंटी, शंखनाद व पुष्पांजलि अर्पण", "Live Temple Bell, Shankhnaad & Pushpanjali", "Live Pital Ghanti, Shankhnaad Va Pushpanjali")
        ],
        footerHint: trCard(
          lang,
          "श्री डिजिटल मंदिर में लाइव दर्शन व आरती करने हेतु QR स्कैन करें",
          "Scan QR to perform Live Darshan & Aarti in Shri Digital Mandir",
          "Shri Digital Mandir mein live darshan va aarti karne hetu QR scan karein"
        )
      };
      break;
    default:
      if (titleLower.includes("परामर्श") || titleLower.includes("पूजा") || titleLower.includes("consultation") || titleLower.includes("puja") || urlLower.includes("paramarsh") || urlLower.includes("jyotish-chat") || urlLower.includes("puja-services")) {
        defaults = {
          heading: trCard(
            lang,
            "॥ वेबऐप पर उपलब्ध प्रमुख ज्योतिष एवं पूजा सेवाएं ॥",
            "|| Top Astrology & Puja Services Available on WebApp ||",
            "|| WebApp Par Uplabdh Pramukh Jyotish Aur Puja Sevayein ||"
          ),
          items: [
            trCard(lang, "जन्म कुंडली विश्लेषण व ग्रह दोष निवारण", "Birth Kundali Analysis & Planetary Remedies", "Janam Kundali Vishleshan Va Grah Dosh Nivaran"),
            trCard(lang, "विवाह मिलान, संतान व करियर मार्गदर्शन", "Marriage Matching, Progeny & Career Guidance", "Vivah Milan, Santan Va Career Margdarshan"),
            trCard(lang, "वैदिक रत्न, रुद्राक्ष व गृह-शांति पूजा", "Vedic Gemstones, Rudraksha & Griha Shanti Puja", "Vedic Ratna, Rudraksha Va Griha-Shanti Puja"),
            trCard(lang, "निःशुल्क पंचांग, कुंडली व लाइव राशिफल", "Free Panchang, Kundali & Live Horoscope", "Nishulk Panchang, Kundali Va Live Rashifal")
          ],
          footerHint: trCard(
            lang,
            "सीधे आचार्य जी से जुड़ने व निःशुल्क टूल देखने हेतु QR स्कैन करें",
            "Scan QR to connect directly with Acharya Ji & explore free tools",
            "Seedhe Acharya Ji se judne va nishulk tool dekhne hetu QR scan karein"
          )
        };
      } else {
        defaults = {
          heading: trCard(
            lang,
            "॥ पण्डित जी ऑनलाइन वेबऐप पर आगे पढ़ें व उपयोग करें ॥",
            "|| Read More & Use Free Tools on Pandit Ji Online ||",
            "|| Pandit Ji Online WebApp Par Aage Padhein Va Upyog Karein ||"
          ),
          items: [
            trCard(lang, "सम्पूर्ण शास्त्रीय विधि, मंत्र व प्रश्नोत्तर", "Complete Shastriya Vidhi, Mantras & Q&A", "Sampoorn Shastriya Vidhi, Mantra Va Prashnottar"),
            trCard(lang, "निःशुल्क पंचांग, चौघड़िया व व्रत कैलेंडर", "Free Panchang, Choghadiya & Vrat Calendar", "Nishulk Panchang, Choghadiya Va Vrat Calendar"),
            trCard(lang, "सटीक जन्म कुंडली व 36 गुण विवाह मिलान", "Accurate Birth Kundali & 36 Gun Milan", "Sateek Janam Kundali Va 36 Gun Vivah Milan"),
            trCard(lang, "12 राशियों का लाइव दैनिक दृक गणित फल", "Live Daily Drik Ganita Forecast for 12 Rashis", "12 Rashiyon Ka Live Dainik Drik Ganita Phal")
          ],
          footerHint: trCard(
            lang,
            "इस विषय का पूरा विवरण व निःशुल्क टूल्स देखने हेतु QR स्कैन करें",
            "Scan QR to read complete details & access free Vedic tools",
            "Is vishay ka pura vivaran va nishulk tools dekhne hetu QR scan karein"
          )
        };
      }
      break;
  }
  return {
    heading: stripBoxyEmojis(payload.webappHeading || defaults.heading),
    items: customItems.length >= 2 ? customItems : defaults.items,
    footerHint: defaults.footerHint
  };
}
function drawWebappVisitStrip(ctx, x, y, w, h, payload, isVertical, lang = "hi") {
  const spec = getWebappInviteSpec(payload, lang);
  const afVisit = activeCardFestiveRenderCtx?.isFestiveThemeActive ? activeCardFestiveRenderCtx : null;
  const primaryHex = afVisit ? afVisit.accentPrimary : "#fbbf24";
  const secondaryHex = afVisit ? afVisit.accentSecondary : "#34d399";
  const stripBg = afVisit ? hexToRgba(afVisit.cardSurface, 0.94) : "rgba(6, 26, 30, 0.92)";
  const stripBorder = afVisit ? hexToRgba(primaryHex, 0.56) : "rgba(52, 211, 153, 0.56)";
  drawClippedBox(
    ctx,
    x,
    y,
    w,
    h,
    20,
    stripBg,
    stripBorder,
    2,
    () => {
      const innerPadX = 22;
      const innerW = w - innerPadX * 2;
      let cursorY = y + 12;
      const hFit = fitSingleLine(ctx, spec.heading, innerW, 900, 22, 11);
      ctx.textAlign = "center";
      ctx.textBaseline = "top";
      ctx.fillStyle = secondaryHex;
      ctx.font = `900 ${hFit.fontSize}px ${FONT_STACK}`;
      ctx.fillText(hFit.text, x + w / 2, cursorY);
      cursorY += hFit.fontSize + 8;
      const cleanItems = spec.items.slice(0, 4).map((it) => stripBoxyEmojis(it).trim()).filter(Boolean);
      const singleLineFeatures = cleanItems.slice(0, 3).join("   •   ");
      const pillH = Math.max(36, y + h - cursorY - 12);
      const pillX = x + innerPadX;
      ctx.save();
      ctx.fillStyle = afVisit ? hexToRgba(primaryHex, 0.16) : "rgba(15, 23, 42, 0.88)";
      drawRoundRect(ctx, pillX, cursorY, innerW, pillH, 13);
      ctx.fill();
      ctx.strokeStyle = afVisit ? hexToRgba(secondaryHex, 0.52) : "rgba(251, 191, 36, 0.48)";
      ctx.lineWidth = 1.4;
      drawRoundRect(ctx, pillX, cursorY, innerW, pillH, 13);
      ctx.stroke();
      const featFit = fitSingleLine(
        ctx,
        singleLineFeatures,
        innerW - 58,
        800,
        21,
        11
      );
      const pillCy = cursorY + pillH / 2;
      drawVedicCanvasDiamond(ctx, pillX + 16, pillCy, 5.5, primaryHex);
      drawVedicCanvasDiamond(ctx, pillX + innerW - 16, pillCy, 5.5, primaryHex);
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = "#fef3c7";
      ctx.font = `800 ${featFit.fontSize}px ${FONT_STACK}`;
      ctx.fillText(featFit.text, x + w / 2, pillCy + 1);
      ctx.restore();
    }
  );
}
function measureAutoMessageBoxHeight(ctx, w, message, ctaLine, isVertical, headerTag, minH = 148, maxH = 330) {
  const innerW = w - 52;
  const cleanMsg = stripBoxyEmojis(message);
  const cleanCta = stripBoxyEmojis(ctaLine || "");
  let totalH = 36;
  if (headerTag) {
    const tagFit = fitSingleLine(ctx, stripBoxyEmojis(headerTag), innerW, 800, 24, 12);
    totalH += tagFit.fontSize + 14;
  }
  if (cleanMsg) {
    const startPx = 32;
    const msgFit = fitWrappedBlock(ctx, cleanMsg, innerW, maxH, 700, startPx, 15, 1.48);
    totalH += msgFit.lines.length * msgFit.lineHeight + 10;
  }
  if (cleanCta) {
    totalH += 76 + 12;
  }
  return Math.max(minH, Math.min(maxH, Math.ceil(totalH)));
}
function drawBottomMessageAndCtaBox(ctx, x, y, w, h, message, ctaLine, fillStyle, strokeStyle, isVertical, headerTag) {
  const afMsg = activeCardFestiveRenderCtx?.isFestiveThemeActive ? activeCardFestiveRenderCtx : null;
  const boxFill = afMsg ? hexToRgba(afMsg.cardSurface, 0.92) : fillStyle;
  const boxStroke = afMsg ? hexToRgba(afMsg.accentPrimary, 0.56) : strokeStyle;
  drawClippedBox(ctx, x, y, w, h, 22, boxFill, boxStroke, 2, () => {
    const innerW = w - 52;
    const cleanMsg = stripBoxyEmojis(message);
    const cleanCta = stripBoxyEmojis(ctaLine || "");
    let cursorTop = y + (isVertical ? 18 : 13);
    const bottomReserve = isVertical ? 14 : 10;
    if (headerTag) {
      const tagFit = fitSingleLine(ctx, stripBoxyEmojis(headerTag), innerW, 800, isVertical ? 24 : 18, 12);
      ctx.textAlign = "center";
      ctx.textBaseline = "top";
      ctx.fillStyle = afMsg ? afMsg.accentSecondary : "#fcd34d";
      ctx.font = `800 ${tagFit.fontSize}px ${FONT_STACK}`;
      ctx.fillText(tagFit.text, x + w / 2, cursorTop);
      cursorTop += tagFit.fontSize + (isVertical ? 12 : 8);
    }
    const ctaBlockH = cleanCta ? isVertical ? 78 : Math.min(66, Math.round(h * 0.4)) : 0;
    const msgAvailH = Math.max(40, y + h - cursorTop - bottomReserve - ctaBlockH - (cleanCta ? 10 : 0));
    if (cleanMsg) {
      const punctuatedMsg = /[।॥.!?)]$|[।॥.]\)$/.test(cleanMsg) ? cleanMsg : /[\u0900-\u097F]/u.test(cleanMsg) ? `${cleanMsg}।` : `${cleanMsg}.`;
      const startPx = isVertical ? 31 : ctaBlockH > 0 ? 23 : 25;
      const msgFit = fitSentenceAwareBlock(
        ctx,
        punctuatedMsg,
        innerW,
        msgAvailH,
        700,
        startPx,
        isVertical ? 13 : 11,
        isVertical ? 1.44 : 1.32,
        isVertical
      );
      ctx.textAlign = "center";
      ctx.textBaseline = "top";
      ctx.fillStyle = "#fffbeb";
      ctx.font = `700 ${msgFit.fontSize}px ${FONT_STACK}`;
      const totalMsgH = msgFit.lines.length * msgFit.lineHeight;
      let msgY = cursorTop + Math.max(0, (msgAvailH - totalMsgH) / 2);
      for (const line of msgFit.lines) {
        ctx.fillText(line, x + w / 2, msgY);
        msgY += msgFit.lineHeight;
      }
    }
    if (cleanCta && ctaBlockH > 0) {
      const ctaBoxY = y + h - ctaBlockH - (isVertical ? 12 : 9);
      const ctaBoxX = x + 22;
      const ctaBoxW = w - 44;
      ctx.save();
      ctx.fillStyle = afMsg ? hexToRgba(afMsg.accentPrimary, 0.22) : "rgba(245, 158, 11, 0.16)";
      drawRoundRect(ctx, ctaBoxX, ctaBoxY, ctaBoxW, ctaBlockH, 14);
      ctx.fill();
      ctx.strokeStyle = afMsg ? hexToRgba(afMsg.accentSecondary, 0.65) : "rgba(251, 191, 36, 0.60)";
      ctx.lineWidth = 1.5;
      drawRoundRect(ctx, ctaBoxX, ctaBoxY, ctaBoxW, ctaBlockH, 14);
      ctx.stroke();
      const ctaInnerW = ctaBoxW - 30;
      const ctaFit = fitAdaptiveHeading(
        ctx,
        cleanCta,
        ctaInnerW,
        ctaBlockH - 12,
        800,
        isVertical ? 23 : 19,
        12,
        1.26
      );
      ctx.textAlign = "center";
      ctx.textBaseline = "top";
      ctx.fillStyle = afMsg ? afMsg.accentPrimary : "#fde047";
      ctx.font = `800 ${ctaFit.fontSize}px ${FONT_STACK}`;
      const ctaTotalH = ctaFit.lines.length * ctaFit.lineHeight;
      let curCtaY = ctaBoxY + Math.max(6, (ctaBlockH - ctaTotalH) / 2);
      for (const line of ctaFit.lines) {
        ctx.fillText(line, x + w / 2, curCtaY);
        curCtaY += ctaFit.lineHeight;
      }
      ctx.restore();
    }
  });
}
const RASHI_OWN_NAKSHATRAS_MAP = {
  mesh: "अश्विनी, भरणी, कृत्तिका",
  vrishabh: "कृत्तिका, रोहिणी, मृगशिरा",
  mithun: "मृगशिरा, आर्द्रा, पुनर्वसु",
  kark: "पुनर्वसु, पुष्य, आश्लेषा",
  simha: "मघा, पूर्वाफाल्गुनी, उत्तराफाल्गुनी",
  kanya: "उत्तराफाल्गुनी, हस्त, चित्रा",
  tula: "चित्रा, स्वाति, विशाखा",
  vrishchik: "विशाखा, अनुराधा, ज्येष्ठा",
  dhanu: "मूल, पूर्वाषाढ़ा, उत्तराषाढ़ा",
  makar: "उत्तराषाढ़ा, श्रवण, धनिष्ठा",
  kumbh: "धनिष्ठा, शतभिषा, पूर्वाभाद्रपद",
  meen: "पूर्वाभाद्रपद, उत्तराभाद्रपद, रेवती"
};
function renderRashifalVariant(ctx, payload, palette, layout, lang = "hi") {
  const rd = payload.rashifalData;
  if (!rd) {
    renderGenericCardVariant(ctx, payload, palette, layout, lang);
    return;
  }
  const { padX, contentTop, footerY, isVertical, width: W } = layout;
  const fullW = W - padX * 2;
  let curY = contentTop;
  const af = activeCardFestiveRenderCtx?.isFestiveThemeActive ? activeCardFestiveRenderCtx : null;
  const heroH = isVertical ? 216 : 150;
  drawClippedBox(
    ctx,
    padX,
    curY,
    fullW,
    heroH,
    24,
    af ? hexToRgba(af.cardSurface, 0.94) : palette.cardBg,
    af ? hexToRgba(af.accentPrimary, 0.58) : palette.cardBorder,
    2,
    () => {
      const sealRadius = isVertical ? 66 : 50;
      const cx = padX + 24 + sealRadius;
      const cy = curY + heroH / 2;
      ctx.save();
      const orbGrad = ctx.createRadialGradient(cx, cy, 8, cx, cy, sealRadius + 4);
      orbGrad.addColorStop(0, af ? af.sealCoreHex : "#451a03");
      orbGrad.addColorStop(0.75, af ? af.sealMidHex : "#1e1005");
      orbGrad.addColorStop(1, "#090602");
      ctx.fillStyle = orbGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, sealRadius, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = af ? af.accentPrimary : "#fbbf24";
      ctx.lineWidth = 3.2;
      ctx.stroke();
      ctx.strokeStyle = af ? hexToRgba(af.accentSecondary, 0.45) : "rgba(253, 230, 138, 0.4)";
      ctx.lineWidth = 1.4;
      ctx.beginPath();
      ctx.arc(cx, cy, sealRadius - 7, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();
      drawVedicRashiCanvasEmblem(
        ctx,
        rd.rashiEn || rd.rashiName || rd.symbol,
        cx,
        cy,
        isVertical ? 38 : 29,
        af ? af.accentPrimary : "#fde047"
      );
      const tx = cx + sealRadius + 22;
      const tw = padX + fullW - 22 - tx;
      ctx.textAlign = "left";
      ctx.textBaseline = "top";
      const cleanRashiDisplay = rd.rashiName.toLowerCase().includes((rd.rashiEn || "").toLowerCase()) ? rd.rashiName : `${rd.rashiName} (${rd.rashiEn})`;
      const mainTitle = lang === "hi" ? `${rd.rashiName} राशि (${rd.rashiEn}) — ${rd.modeLabel}` : lang === "en" ? `${cleanRashiDisplay} Horoscope — ${rd.modeLabel}` : `${cleanRashiDisplay} ${trCard(lang, "राशि", "Rashi", "Rashi", "राशी", "રાશિ")} — ${rd.modeLabel}`;
      const tFit = fitAdaptiveHeading(ctx, mainTitle, tw, isVertical ? 82 : 56, 900, isVertical ? 35 : 28, 13, 1.2);
      ctx.fillStyle = "#fffbeb";
      ctx.font = `900 ${tFit.fontSize}px ${FONT_STACK}`;
      let textY = curY + (isVertical ? 22 : 14);
      for (const l of tFit.lines) {
        ctx.fillText(l, tx, textY);
        textY += tFit.lineHeight;
      }
      const rashiKey = normalizeRashiKey(rd.rashiEn || rd.rashiName || rd.symbol);
      const rawRashiOwnNak = (rashiKey ? RASHI_OWN_NAKSHATRAS_MAP[rashiKey] : "") || (rd.nakshatra ? rd.nakshatra.replace(/\s*\([^)]*\)/g, "").trim() : "");
      const rashiOwnNakshatra = rawRashiOwnNak ? translateCardString(rawRashiOwnNak, lang) : "";
      const lblLord = trCard(lang, "स्वामी:", "Lord:", "Swami:", "स्वामी:", "સ્વામી:");
      const lblElem = trCard(lang, "तत्व:", "Element:", "Tatva:", "तत्त्व:", "તત્વ:");
      const lblNak = trCard(lang, "राशि नक्षत्र:", "Nakshatras:", "Rashi Nakshatra:", "राशी नक्षत्र:", "રાશિ નક્ષત્ર:");
      const meta1 = `${lblLord} ${rd.swami}  •  ${lblElem} ${rd.element}${rashiOwnNakshatra ? `  •  ${lblNak} ${rashiOwnNakshatra}` : ""}`;
      const m1Fit = fitAdaptiveHeading(ctx, meta1, tw, isVertical ? 54 : 38, 700, isVertical ? 23 : 18, 11, 1.24);
      ctx.fillStyle = af ? af.accentSecondary : "#fcd34d";
      ctx.font = `700 ${m1Fit.fontSize}px ${FONT_STACK}`;
      textY += 4;
      for (const l of m1Fit.lines) {
        ctx.fillText(l, tx, textY);
        textY += m1Fit.lineHeight;
      }
      const lblDate = trCard(lang, "दिनांक:", "Date:", "Dinank:", "दिनांक:", "તારીખ:");
      const lblNum = trCard(lang, "शुभ अंक:", "Lucky No:", "Shubh Ank:", "शुभ अंक:", "શુભ અંક:");
      const lblCol = trCard(lang, "शुभ रंग:", "Lucky Color:", "Shubh Rang:", "शुभ रंग:", "શુભ રંગ:");
      const meta2 = `${lblDate} ${rd.dateHindi}  •  ${lblNum} ${rd.luckyNumber}  •  ${lblCol} ${rd.luckyColor}`;
      const m2RemH = Math.max(24, curY + heroH - textY - 8);
      const m2Fit = fitWrappedBlock(ctx, meta2, tw, m2RemH, 700, isVertical ? 21 : 17, 11, 1.24);
      ctx.fillStyle = "#a7f3d0";
      ctx.font = `700 ${m2Fit.fontSize}px ${FONT_STACK}`;
      textY += 4;
      for (const l of m2Fit.lines) {
        ctx.fillText(l, tx, textY);
        textY += m2Fit.lineHeight;
      }
    }
  );
  curY += heroH + (isVertical ? 18 : 12);
  const stripH = isVertical ? 128 : 86;
  drawClippedBox(
    ctx,
    padX,
    curY,
    fullW,
    stripH,
    20,
    af ? hexToRgba(af.cardSurface, 0.9) : palette.cardBg,
    af ? hexToRgba(af.accentPrimary, 0.48) : palette.cardBorder,
    1.8,
    () => {
      const metrics = [
        { label: trCard(lang, "करियर", "Career", "Career", "करिअर", "કારકિર્દી"), score: rd.careerScore, color: af ? af.accentPrimary : "#fbbf24" },
        { label: trCard(lang, "आर्थिक", "Finance", "Aarthik", "आर्थिक", "આર્થિક"), score: rd.wealthScore, color: "#34D399" },
        { label: trCard(lang, "परिवार", "Family", "Parivar", "कुटुंब", "પરિવાર"), score: rd.familyScore, color: af ? af.accentSecondary : "#f472b6" },
        { label: trCard(lang, "शिक्षा", "Study", "Shiksha", "शिक्षण", "શિક્ષણ"), score: rd.educationScore, color: af ? af.accentPrimary : "#fbbf24" },
        { label: trCard(lang, "स्वास्थ्य", "Health", "Swasthya", "आरोग्य", "આરોગ્ય"), score: rd.healthScore, color: "#34D399" }
      ];
      const innerPadX = 20;
      const gap = 14;
      const itemW = (fullW - innerPadX * 2 - gap * 4) / 5;
      metrics.forEach((m, idx) => {
        const mx = padX + innerPadX + idx * (itemW + gap);
        const pct = Math.max(20, Math.min(99, Math.round(m.score || 75)));
        ctx.textAlign = "center";
        ctx.textBaseline = "top";
        ctx.fillStyle = "#e2e8f0";
        const mLblFit = fitSingleLine(ctx, m.label, itemW - 8, 800, isVertical ? 21 : 17, 11);
        ctx.font = `800 ${mLblFit.fontSize}px ${FONT_STACK}`;
        ctx.fillText(mLblFit.text, mx + itemW / 2, curY + (isVertical ? 16 : 11));
        ctx.fillStyle = m.color;
        ctx.font = `900 ${isVertical ? 30 : 22}px ${FONT_STACK}`;
        ctx.fillText(`${pct}%`, mx + itemW / 2, curY + (isVertical ? 48 : 34));
        const barY = curY + (isVertical ? 94 : 65);
        const barH = isVertical ? 11 : 8;
        ctx.fillStyle = "rgba(255, 255, 255, 0.12)";
        drawRoundRect(ctx, mx + 6, barY, itemW - 12, barH, barH / 2);
        ctx.fill();
        ctx.fillStyle = m.color;
        drawRoundRect(ctx, mx + 6, barY, (itemW - 12) * pct / 100, barH, barH / 2);
        ctx.fill();
      });
    }
  );
  curY += stripH + (isVertical ? 18 : 14);
  const cardMode = rd.mode || "daily";
  const defaultGocharMsg = cardMode === "weekly" ? trCard(
    lang,
    "पण्डित जी ऑनलाइन पर साप्ताहिक दृक गणित राशिफल, ग्रह गोचर व संपूर्ण जन्म कुंडली निःशुल्क देखें।",
    "View free weekly Drik Ganita Horoscope, Planetary Transits & Birth Kundali on Pandit Ji Online."
  ) : cardMode === "monthly" ? trCard(
    lang,
    "पण्डित जी ऑनलाइन पर मासिक दृक गणित राशिफल, ग्रह गोचर व संपूर्ण जन्म कुंडली निःशुल्क देखें।",
    "View free monthly Drik Ganita Horoscope, Planetary Transits & Birth Kundali on Pandit Ji Online."
  ) : trCard(
    lang,
    "पण्डित जी ऑनलाइन पर दैनिक दृक गणित राशिफल, शुभ मुहूर्त व संपूर्ण जन्म कुंडली निःशुल्क देखें।",
    "View free daily Drik Ganita Horoscope, Shubh Muhurat & Birth Kundali on Pandit Ji Online."
  );
  const rawGochar = (rd.gocharNote || payload.message || defaultGocharMsg).replace(
    /^([^\s:•]+\s*राशि)\s*\(([^)]+)\)\s*:\s*/u,
    cardMode === "daily" ? "आपकी राशि: $1 ($2) • आज का चंद्र गोचर: " : "आपकी राशि: $1 ($2) • गोचर स्थिति: "
  ).trim();
  const formattedGocharNak = cardMode === "daily" && rd.todayGocharNakshatra ? `${rd.todayGocharNakshatra.replace(/\s*(?:नक्षत्र|Nakshatra)$/gi, "").trim()} ${trCard(lang, "नक्षत्र", "Nakshatra", "Nakshatra", "नक्षत्र", "નક્ષત્ર")}` : "";
  const cleanGocharWithoutParenNak = formattedGocharNak ? rawGochar.replace(/\s*\([^)]*(?:नक्षत्र|Nakshatra)[^)]*\)/gi, "").trim() : rawGochar;
  const hasExplicitUserRashiPrefix = cleanGocharWithoutParenNak.includes("आपकी राशि:") || cleanGocharWithoutParenNak.includes("आज का चंद्र गोचर:") || cleanGocharWithoutParenNak.includes("साप्ताहिक") || cleanGocharWithoutParenNak.includes("मासिक") || cleanGocharWithoutParenNak.toLowerCase().includes("your sign:");
  const rawGocharCombined = sanitizeVedicCardText(
    formattedGocharNak && !rawGochar.includes("गोचर नक्षत्र") && !rawGochar.toLowerCase().includes("transit nakshatra") ? hasExplicitUserRashiPrefix ? `${cleanGocharWithoutParenNak.replace(/[।.]$/, "")} • ${trCard(lang, "आज का गोचर नक्षत्र:", "Today's Transit Nakshatra:", "Aaj Ka Gochar Nakshatra:")} ${formattedGocharNak}।` : `${trCard(lang, "आपकी राशि:", "Your Sign:", "Aapki Rashi:")} ${rd.rashiName} (${trCard(lang, "स्वामी:", "Lord:", "Swami:")} ${rd.swami}) • ${trCard(lang, "आज का चंद्र गोचर:", "Today's Moon Transit:", "Aaj Ka Chandra Gochar:")} ${cleanGocharWithoutParenNak.replace(/[।.]$/, "")} • ${trCard(lang, "गोचर नक्षत्र:", "Transit Nakshatra:", "Gochar Nakshatra:")} ${formattedGocharNak}।` : cleanGocharWithoutParenNak
  );
  const gocharText = /[।॥.!?]$/.test(rawGocharCombined) ? rawGocharCombined : `${rawGocharCombined}।`;
  const gocharHeader = cardMode === "weekly" ? trCard(
    lang,
    "॥ साप्ताहिक चन्द्र गोचर एवं शुभ मार्गदर्शन ॥",
    "|| Weekly Moon Transit & Auspicious Guidance ||",
    "|| Saptahik Chandra Gochar Aur Shubh Margdarshan ||"
  ) : cardMode === "monthly" ? trCard(
    lang,
    "॥ मासिक ग्रह गोचर एवं शुभ मार्गदर्शन ॥",
    "|| Monthly Planetary Transit & Auspicious Guidance ||",
    "|| Masik Graha Gochar Aur Shubh Margdarshan ||"
  ) : trCard(
    lang,
    "॥ आज का चंद्र गोचर एवं शुभ संकल्प ॥",
    "|| Today's Moon Transit & Auspicious Guidance ||",
    "|| Aaj Ka Chandra Gochar Aur Shubh Sankalp ||"
  );
  const visitH = isVertical ? 114 : 0;
  const autoNoteH = isVertical ? measureAutoMessageBoxHeight(ctx, fullW, gocharText, void 0, true, gocharHeader, 174, 294) : 0;
  const gridGap = 18;
  const colW = (fullW - gridGap) / 2;
  const rowGap = isVertical ? 18 : 14;
  const availForGrid = isVertical ? footerY - curY - autoNoteH - visitH - 18 - 16 - 14 : 0;
  const cardH = isVertical ? Math.max(236, Math.min(320, Math.floor((availForGrid - rowGap) / 2))) : 174;
  drawHighlightCard(
    ctx,
    padX,
    curY,
    colW,
    cardH,
    trCard(lang, "करियर, नौकरी व व्यापार", "Career, Job & Business", "Career, Naukri Va Vyapar", "करिअर, नोकरी व व्यवसाय", "કારકિર્દી, નોકરી અને વ્યવસાય"),
    rd.careerSummary,
    palette,
    "#fbbf24",
    "#f8fafc",
    isVertical,
    true
  );
  drawHighlightCard(
    ctx,
    padX + colW + gridGap,
    curY,
    colW,
    cardH,
    trCard(lang, "धन, परिवार एवं स्वास्थ्य", "Wealth, Family & Health", "Dhan, Parivar Aur Swasthya", "धन, कुटुंब व आरोग्य", "ધન, પરિવાર અને આરોગ્ય"),
    rd.wealthFamilySummary,
    palette,
    "#34D399",
    "#f8fafc",
    isVertical,
    true
  );
  curY += cardH + rowGap;
  const dateContextStr = `${rd.dateHindi || ""} ${payload.badge || ""}`;
  let safePosterDirection = (rd.luckyDirection || "").trim();
  if (cardMode === "daily") {
    const isMonOrSat = /सोमवार|शनिवार|Monday|Saturday/i.test(dateContextStr);
    const isTueOrWed = /मंगलवार|बुधवार|Tuesday|Wednesday/i.test(dateContextStr);
    const isThu = /गुरुवार|बृहस्पतिवार|Thursday/i.test(dateContextStr);
    const isFriOrSun = /शुक्रवार|रविवार|Friday|Sunday/i.test(dateContextStr);
    if (isMonOrSat && /पूर्व|ईशान|आग्नेय|East/i.test(safePosterDirection)) {
      safePosterDirection = trCard(lang, "उत्तर एवं वायव्य कोण", "North & North-West", "Uttar Aur Vayavya");
    } else if (isTueOrWed && /उत्तर|ईशान|वायव्य|North/i.test(safePosterDirection)) {
      safePosterDirection = trCard(lang, "पूर्व एवं दक्षिण-पूर्व", "East & South-East", "Purva Aur Agneya");
    } else if (isThu && /दक्षिण|आग्नेय|नैऋत्य|South/i.test(safePosterDirection)) {
      safePosterDirection = trCard(lang, "उत्तर एवं पूर्व दिशा", "North & East", "Uttar Aur Purva");
    } else if (isFriOrSun && /पश्चिम|वायव्य|नैऋत्य|West/i.test(safePosterDirection)) {
      safePosterDirection = trCard(lang, "पूर्व एवं उत्तर दिशा", "East & North", "Purva Aur Uttar");
    }
  }
  const cleanPosterRemedy = (rd.remedySummary || "").replace(/^(?:सप्ताह का उपाय|मास का विशेष उपाय|आज का उपाय)\s*:\s*/u, "").replace(
    /\s*\(\s*(?:मेष|वृषभ|मिथुन|कर्क|सिंह|कन्या|तुला|वृश्चिक|धनु|मकर|कुम्भ|कुंभ|मीन|Aries|Taurus|Gemini|Cancer|Leo|Virgo|Libra|Scorpio|Sagittarius|Capricorn|Aquarius|Pisces)\s*(?:राशि|Sign)?\s*\)/gi,
    ""
  ).replace(/\s{2,}/g, " ").trim();
  const lblGem = trCard(lang, "रत्न:", "Gemstone:", "Ratna:", "रत्न:", "રત્ન:");
  const lblDir = trCard(lang, "शुभ दिशा:", "Lucky Direction:", "Shubh Disha:", "शुभ दिशा:", "શુભ દિશા:");
  const lblBest = cardMode === "weekly" ? trCard(lang, "शुभ दिवस:", "Best Days:", "Shubh Diwas:", "शुभ दिवस:", "શુભ દિવસ:") : cardMode === "monthly" ? trCard(lang, "शुभ पक्ष:", "Best Phase:", "Shubh Paksha:", "शुभ पक्ष:", "શુભ પક્ષ:") : trCard(lang, "श्रेष्ठ समय:", "Best Time:", "Shreshtha Samay:", "श्रेष्ठ वेळ:", "શ્રેષ્ઠ સમય:");
  const cleanLuckyTime = (rd.luckyTime || "").replace(/^शुभ दिवस\s*:\s*/u, "").trim();
  drawHighlightCard(
    ctx,
    padX,
    curY,
    colW,
    cardH,
    cardMode === "daily" ? trCard(lang, "शुभ रत्न, समय एवं दिशा", "Lucky Gemstone, Time & Direction", "Shubh Ratna, Samay Aur Disha", "शुभ रत्न, वेळ व दिशा", "શુભ રત્ન, સમય અને દિશા") : cardMode === "weekly" ? trCard(lang, "शुभ रत्न, दिवस एवं दिशा", "Lucky Gemstone, Days & Direction", "Shubh Ratna, Diwas Aur Disha") : trCard(lang, "शुभ रत्न, पक्ष एवं दिशा", "Lucky Gemstone, Phase & Direction", "Shubh Ratna, Paksha Aur Disha"),
    `${lblGem} ${rd.ratna} • ${lblDir} ${safePosterDirection} • ${lblBest} ${cleanLuckyTime}`,
    palette,
    "#38bdf8",
    "#fef3c7",
    isVertical,
    true
  );
  const remedyCardTitle = cardMode === "weekly" ? trCard(lang, "सप्ताह का अचूक वैदिक उपाय", "Weekly Effective Vedic Remedy", "Saptah Ka Achook Vedic Upay") : cardMode === "monthly" ? trCard(lang, "मास का विशेष वैदिक उपाय", "Monthly Special Vedic Remedy", "Maas Ka Vishesh Vedic Upay") : trCard(lang, "आज का अचूक वैदिक उपाय", "Today's Effective Vedic Remedy", "Aaj Ka Achook Vedic Upay", "आजचा अचूक वैदिक उपाय", "આજનો અચૂક વૈદિક ઉપાય");
  drawHighlightCard(
    ctx,
    padX + colW + gridGap,
    curY,
    colW,
    cardH,
    remedyCardTitle,
    cleanPosterRemedy,
    palette,
    "#fda4af",
    "#fffbeb",
    isVertical,
    true
  );
  curY += cardH + (isVertical ? 18 : 14);
  if (isVertical) {
    const noteH = Math.max(156, footerY - curY - visitH - 30);
    drawBottomMessageAndCtaBox(
      ctx,
      padX,
      curY,
      fullW,
      noteH,
      gocharText,
      void 0,
      "rgba(32, 18, 6, 0.88)",
      "rgba(251, 191, 36, 0.5)",
      true,
      gocharHeader
    );
    curY += noteH + 16;
    drawWebappVisitStrip(ctx, padX, curY, fullW, footerY - curY - 14, payload, true, lang);
  } else {
    const noteH = Math.max(96, footerY - curY - 14);
    drawBottomMessageAndCtaBox(
      ctx,
      padX,
      curY,
      fullW,
      noteH,
      gocharText,
      void 0,
      "rgba(32, 18, 6, 0.88)",
      "rgba(251, 191, 36, 0.5)",
      false,
      gocharHeader
    );
  }
}
function renderPanchangVariant(ctx, payload, palette, layout, lang = "hi") {
  const pd = payload.panchangData;
  if (!pd) {
    renderGenericCardVariant(ctx, payload, palette, layout, lang);
    return;
  }
  const { padX, contentTop, footerY, isVertical, width: W } = layout;
  const fullW = W - padX * 2;
  let curY = contentTop;
  const af = activeCardFestiveRenderCtx?.isFestiveThemeActive ? activeCardFestiveRenderCtx : null;
  const mastH = isVertical ? 140 : 96;
  drawClippedBox(
    ctx,
    padX,
    curY,
    fullW,
    mastH,
    22,
    af ? hexToRgba(af.cardSurface, 0.92) : "rgba(36, 18, 7, 0.88)",
    af ? hexToRgba(af.accentPrimary, 0.58) : "rgba(251, 146, 60, 0.56)",
    2,
    () => {
      const textMaxW = fullW - 44;
      ctx.textAlign = "center";
      ctx.textBaseline = "top";
      const dateClean = sanitizeVedicCardText(pd.dateHindi || "");
      const vaarClean = sanitizeVedicCardText(pd.vaarHindi || "");
      const titleStr = vaarClean && vaarClean !== dateClean && !dateClean.toLowerCase().includes(vaarClean.toLowerCase()) ? `${dateClean} (${vaarClean})` : dateClean;
      const tFit = fitAdaptiveHeading(ctx, titleStr, textMaxW, isVertical ? 60 : 42, 900, isVertical ? 36 : 28, 14, 1.18);
      const devShift = /[\u0900-\u097F]/.test(titleStr) ? -2 : 0;
      ctx.fillStyle = "#fffbeb";
      ctx.font = `900 ${tFit.fontSize}px ${FONT_STACK}`;
      let yCursor = curY + (isVertical ? 12 : 8) + devShift;
      for (const l of tFit.lines) {
        ctx.fillText(l, W / 2, yCursor);
        yCursor += tFit.lineHeight;
      }
      const samvatPart = sanitizeVedicCardText(pd.samvatText || pd.hinduDate || "");
      const cleanPaksha2 = deduplicatePanchangMaas(samvatPart, pd.paksha);
      const pakshaAlreadyPresent = cleanPaksha2 && samvatPart.toLowerCase().includes(cleanPaksha2.toLowerCase());
      const placePrefix = trCard(lang, "स्थान:", "Location:", "Sthan:", "ठिकाण:", "સ્થળ:");
      const tzPart = pd.timezoneLabel ? ` (${pd.timezoneLabel})` : "";
      const traditionShort = pd.regionalTraditionBadge ? pd.regionalTraditionBadge.split("(")[0].trim() : "";
      const displayCity = lang === "hi" && pd.cityHindi ? resolveHindiCityDisplayName(pd.cityHindi) : pd.cityHindi;
      const subParts = [
        samvatPart,
        pakshaAlreadyPresent ? "" : cleanPaksha2,
        traditionShort,
        displayCity ? `${placePrefix} ${displayCity}${tzPart}` : ""
      ].filter(Boolean);
      const subStr = subParts.join("  •  ");
      const remSubH = Math.max(24, curY + mastH - yCursor - 6);
      const sFit = fitWrappedBlock(ctx, subStr, textMaxW, remSubH, 700, isVertical ? 22 : 17, 11, 1.24);
      const subDevShift = /[\u0900-\u097F]/.test(subStr) ? -1.5 : 0;
      ctx.fillStyle = af ? af.accentSecondary : "#fcd34d";
      ctx.font = `700 ${sFit.fontSize}px ${FONT_STACK}`;
      yCursor += 4 + subDevShift;
      for (const l of sFit.lines) {
        ctx.fillText(l, W / 2, yCursor);
        yCursor += sFit.lineHeight;
      }
    }
  );
  curY += mastH + (isVertical ? 12 : 10);
  const ribH = isVertical ? 128 : 82;
  drawClippedBox(
    ctx,
    padX,
    curY,
    fullW,
    ribH,
    20,
    af ? hexToRgba(af.cardSurface, 0.92) : "rgba(15, 23, 42, 0.92)",
    af ? hexToRgba(af.accentPrimary, 0.52) : "rgba(251, 146, 60, 0.52)",
    1.8,
    () => {
      const hasChandra = Boolean(pd.chandraRashi && pd.chandraRashi.trim());
      const hasDisha = Boolean(pd.dishaShool && pd.dishaShool.trim());
      const remedyShort = pd.dishaShoolRemedy ? pd.dishaShoolRemedy.split("—")[0].split("।")[0].trim() : "";
      const dishaCellVal = hasDisha ? remedyShort ? `${pd.dishaShool} (${remedyShort})` : pd.dishaShool : pd.yoga;
      const cells = [
        {
          iconKind: "sun",
          lbl: trCard(lang, "सूर्योदय (Sunrise)", "Sunrise", "Sunrise", "सूर्योदय", "સૂર્યોદય"),
          val: pd.sunrise,
          col: af ? af.accentPrimary : "#fde047"
        },
        {
          iconKind: "sunset",
          lbl: trCard(lang, "सूर्यास्त (Sunset)", "Sunset", "Sunset", "सूर्यास्त", "સૂર્યાસ્ત"),
          val: pd.sunset,
          col: af ? af.accentSecondary : "#fb923c"
        },
        {
          iconKind: "moon",
          lbl: hasChandra ? trCard(lang, "चन्द्र राशि", "Moon Sign", "Chandra Rashi", "चंद्र राशी", "ચંદ્ર રાશિ") : trCard(lang, "पक्ष", "Paksha", "Paksha", "पक्ष", "પક્ષ"),
          val: hasChandra ? pd.chandraRashi : deduplicatePanchangMaas("", pd.paksha),
          col: af ? af.accentSecondary : "#fde68a"
        },
        {
          iconKind: "chakra",
          lbl: hasDisha ? trCard(lang, "दिशाशूल व परिहार", "Disha Shool & Remedy", "Disha Shool & Parihar", "दिशाशूल व परिहार", "દિશાશૂળ અને પરિહાર") : trCard(lang, "दैनिक योग", "Daily Yoga", "Dainik Yog", "दैनिक योग", "દૈનિક યોગ"),
          val: dishaCellVal,
          col: "#34D399"
        }
      ];
      const cellW = fullW / 4;
      cells.forEach((c, i) => {
        const cx = padX + i * cellW;
        if (i > 0) {
          ctx.strokeStyle = af ? hexToRgba(af.accentPrimary, 0.28) : "rgba(251, 146, 60, 0.25)";
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(cx, curY + 11);
          ctx.lineTo(cx, curY + ribH - 11);
          ctx.stroke();
        }
        const iconPad = isVertical ? 20 : 16;
        const lFit = fitSingleLine(ctx, c.lbl, cellW - 12 - iconPad, 800, isVertical ? 19 : 15, 10);
        ctx.font = `800 ${lFit.fontSize}px ${FONT_STACK}`;
        const lblTextW = ctx.measureText(lFit.text).width;
        const lblY = curY + (isVertical ? 10 : 7);
        const startX = cx + (cellW - (lblTextW + iconPad)) / 2;
        const iconCx = startX + 7;
        const iconCy = lblY + lFit.fontSize * 0.52;
        const iconR = isVertical ? 7.5 : 6;
        if (c.iconKind === "sun") drawVedicCanvasSun(ctx, iconCx, iconCy, iconR, c.col);
        else if (c.iconKind === "sunset") drawVedicCanvasSunset(ctx, iconCx, iconCy, iconR, c.col);
        else if (c.iconKind === "moon") drawVedicCanvasMoon(ctx, iconCx, iconCy, iconR, c.col);
        else drawVedicCanvasChakra(ctx, iconCx, iconCy, iconR, c.col);
        ctx.textAlign = "left";
        ctx.textBaseline = "top";
        ctx.fillStyle = "#e2e8f0";
        const lblDevShift = /[\u0900-\u097F]/.test(lFit.text) ? -1.5 : 0;
        ctx.fillText(lFit.text, startX + iconPad, lblY + lblDevShift);
        ctx.textAlign = "center";
        const valTop = lblY + lFit.fontSize + (isVertical ? 5 : 4);
        const valAvailH = Math.max(30, curY + ribH - valTop - (isVertical ? 8 : 6));
        const vFit = fitAdaptiveHeading(ctx, c.val, cellW - 14, valAvailH, 800, isVertical ? 23 : 18, 11, 1.2);
        ctx.fillStyle = c.col;
        ctx.font = `800 ${vFit.fontSize}px ${FONT_STACK}`;
        const totVH = vFit.lines.length * vFit.lineHeight;
        const valDevShift = /[\u0900-\u097F]/.test(c.val) ? -2 : 0;
        let vy = valTop + Math.max(0, (valAvailH - totVH) / 2) + valDevShift;
        for (const l of vFit.lines) {
          ctx.fillText(l, cx + cellW / 2, vy);
          vy += vFit.lineHeight;
        }
      });
    }
  );
  curY += ribH + (isVertical ? 12 : 10);
  const isCardToday = pd.isToday !== false;
  const headline = pd.festivalName ? `${isCardToday ? trCard(lang, "आज का विशेष पर्व/व्रत:", "Today's Special Festival/Vrat:", "Aaj Ka Vishesh Parv/Vrat:") : trCard(lang, "विशेष पर्व/व्रत:", "Special Festival/Vrat:", "Vishesh Parv/Vrat:")} ${pd.festivalName} — ` : `${isCardToday ? trCard(lang, "आज का पंचांग संकल्प:", "Today's Panchang Insight:", "Aaj Ka Panchang Sankalp:") : trCard(lang, "पंचांग संकल्प:", "Panchang Insight:", "Panchang Sankalp:")} `;
  const specialCardAdditions = [];
  if (pd.sankrantiPunyaKaal) {
    specialCardAdditions.push(
      lang === "hi" ? `संक्रांति पुण्यकाल: ${pd.sankrantiPunyaKaal}।` : `Sankranti Punyakaal: ${pd.sankrantiPunyaKaal}.`
    );
  }
  if (pd.diwaliVrishabhaLagna) {
    specialCardAdditions.push(
      lang === "hi" ? `दीपावली लक्ष्मी पूजन — ${pd.diwaliPradoshKaal ? `प्रदोष काल: ${pd.diwaliPradoshKaal} • ` : ""}स्थिर वृषभ लग्न: ${pd.diwaliVrishabhaLagna}।` : `Deepawali Lakshmi Puja — ${pd.diwaliPradoshKaal ? `Pradosh Kaal: ${pd.diwaliPradoshKaal} • ` : ""}Sthir Vrishabha Lagna: ${pd.diwaliVrishabhaLagna}.`
    );
  }
  if (pd.kartikadiFootnote) {
    specialCardAdditions.push(pd.kartikadiFootnote);
  }
  if (pd.deltaTNote) {
    specialCardAdditions.push(pd.deltaTNote);
  }
  const conciseCoreNote = cleanCompleteSentence(
    pd.specialNote || pd.shastricInsight || payload.message || "",
    isVertical ? 128 : 105
  );
  const msgStr = sanitizeVedicCardText(
    [
      headline + conciseCoreNote,
      ...specialCardAdditions.slice(0, 1)
    ].filter(Boolean).join(" ")
  );
  const panchangGuidanceHeader = isCardToday ? trCard(
    lang,
    "॥ शुभं भवतु • आज का पंचांग मार्गदर्शन ॥",
    "|| Shubham Bhavatu • Today's Panchang Guidance ||",
    "|| Shubham Bhavatu • Aaj Ka Panchang Margdarshan ||"
  ) : trCard(
    lang,
    "॥ शुभं भवतु • वैदिक पंचांग मार्गदर्शन ॥",
    "|| Shubham Bhavatu • Vedic Panchang Guidance ||",
    "|| Shubham Bhavatu • Vedic Panchang Margdarshan ||"
  );
  const visitH = isVertical ? 110 : 0;
  const autoMsgH = isVertical ? measureAutoMessageBoxHeight(ctx, fullW, msgStr, void 0, true, panchangGuidanceHeader, 128, 168) : 0;
  const gridGap = 16;
  const colW = (fullW - gridGap) / 2;
  const rowGap = isVertical ? 13 : 11;
  const availForGrid = isVertical ? footerY - curY - autoMsgH - visitH - 14 - 14 - 12 : 0;
  const boxH = isVertical ? Math.max(264, Math.min(378, Math.floor((availForGrid - rowGap) / 2))) : 178;
  const cleanPaksha = deduplicatePanchangMaas(pd.samvatText || pd.hinduDate, pd.paksha);
  const tithiWithTime = pd.tithiEndTime && !pd.tithi.includes("(") ? `${pd.tithi} (${pd.tithiEndTime})` : pd.tithi;
  const nakWithTime = pd.nakshatraEndTime && !pd.nakshatra.includes("(") ? `${pd.nakshatra} (${pd.nakshatraEndTime})` : pd.nakshatra;
  const tithiAlreadyHasPaksha = cleanPaksha && tithiWithTime.includes(cleanPaksha) || /(?:शुक्ल|कृष्ण)\s*(?:प्रतिपदा|द्वितीया|तृतीया|चतुर्थी|पञ्चमी|पंचमी|षष्ठी|सप्तमी|अष्टमी|नवमी|दशमी|एकादशी|द्वादशी|त्रयोदशी|चतुर्दशी|पूर्णिमा|अमावस्या)/.test(tithiWithTime) || /(?:Shukla|Krishna)/i.test(tithiWithTime);
  const yogaCleanVal = (pd.yoga || "").trim();
  const lblYoga = trCard(lang, "योग:", "Yoga:", "Yog:", "योग:", "યોગ:");
  const cleanTithiText = tithiAlreadyHasPaksha ? `${tithiWithTime} • ${lblYoga} ${yogaCleanVal}` : `${tithiWithTime}${cleanPaksha ? ` (${cleanPaksha})` : ""} • ${lblYoga} ${yogaCleanVal}`;
  drawHighlightCard(
    ctx,
    padX,
    curY,
    colW,
    boxH,
    isCardToday ? trCard(lang, "आज की तिथि, पक्ष एवं योग", "Today's Tithi, Paksha & Yoga", "Aaj Ki Tithi, Paksha Aur Yog", "आजची तिथी, पक्ष व योग", "આજની તિથિ, પક્ષ અને યોગ") : trCard(lang, "तिथि, पक्ष एवं योग", "Tithi, Paksha & Yoga", "Tithi, Paksha Aur Yog", "तिथी, पक्ष व योग", "તિથિ, પક્ષ અને યોગ"),
    cleanTithiText,
    palette,
    "#fbbf24",
    "#f8fafc",
    isVertical
  );
  const lblKarana = trCard(lang, "करण:", "Karana:", "Karan:", "करण:", "કરણ:");
  const lblChandra = trCard(lang, "चन्द्र:", "Moon:", "Chandra:", "चंद्र:", "ચંદ્ર:");
  const karanaCleanVal = (pd.karana || "").trim();
  drawHighlightCard(
    ctx,
    padX + colW + gridGap,
    curY,
    colW,
    boxH,
    trCard(lang, "नक्षत्र, करण एवं चन्द्रबल", "Nakshatra, Karana & Moon Sign", "Nakshatra, Karan Aur Chandrabal", "नक्षत्र, करण व चंद्रबळ", "નક્ષત્ર, કરણ અને ચંદ્રબળ"),
    `${nakWithTime}${karanaCleanVal ? ` • ${lblKarana} ${karanaCleanVal}` : ""}${pd.chandraRashi ? ` • ${lblChandra} ${pd.chandraRashi}` : ""}`,
    palette,
    "#38bdf8",
    "#f8fafc",
    isVertical
  );
  curY += boxH + rowGap;
  const isAbhijitBhadraBlocked = pd.abhijitMuhurat.includes("भद्रा प्रभावी") || pd.abhijitMuhurat.toLowerCase().includes("bhadra");
  const isAbhijitRestricted = pd.abhijitMuhurat.includes("मान्य नहीं") || isAbhijitBhadraBlocked || pd.abhijitMuhurat.toLowerCase().includes("not observed") || pd.abhijitMuhurat.toLowerCase().includes("avoid");
  const lblAmrit = trCard(lang, "अमृत:", "Amrit:", "Amrit:", "अमृत:", "અમૃત:");
  trCard(lang, "चौघड़िया:", "Choghadiya:", "Choghadiya:", "चौघडिया:", "ચોઘડિયા:");
  const abhijitRestrictedText = isAbhijitBhadraBlocked ? trCard(
    lang,
    "भद्रा प्रभावी (शुभ कार्य टालें)",
    "Bhadra Active (Avoid Auspicious Work)",
    "Bhadra Prabhavi (Shubh Karya Talein)"
  ) : trCard(
    lang,
    "मान्य नहीं (बुधवार वर्जित)",
    "Not Observed (Avoided on Wednesday)",
    "Manya Nahi (Budhwar Varjit)"
  );
  const cleanAmritPoster = pd.amritKaal ? pd.amritKaal.replace(/\s*\(ध्यान दें:[^)]*\)/gu, "").replace(/\s*\(अति शुभ\)/gu, "").trim() : "";
  const cleanAbhijitPoster = pd.abhijitMuhurat.replace(/\s*\(अति शुभ\)/gu, "").trim();
  const abhijitWarnShort = pd.abhijitWarning ? pd.abhijitWarning.replace(/^⚠️\s*/u, "").trim() : "";
  const lblDayChog = trCard(lang, "दिन चौघड़िया:", "Day Choghadiya:", "Din Choghadiya:");
  const lblNightChog = trCard(lang, "रात्रि चौघड़िया:", "Night Choghadiya:", "Ratri Choghadiya:");
  const chogCombinedParts = [
    pd.choghadiyaSummary ? `${lblDayChog} ${pd.choghadiyaSummary}` : "",
    pd.nightChoghadiyaSummary ? `${lblNightChog} ${pd.nightChoghadiyaSummary}` : ""
  ].filter(Boolean);
  const abhijitParts = isAbhijitRestricted ? [
    abhijitRestrictedText,
    cleanAmritPoster ? `${lblAmrit} ${cleanAmritPoster}` : "",
    ...chogCombinedParts
  ].filter(Boolean) : [
    cleanAbhijitPoster,
    abhijitWarnShort,
    !abhijitWarnShort && cleanAmritPoster ? `${lblAmrit} ${cleanAmritPoster}` : "",
    ...chogCombinedParts
  ].filter(Boolean);
  const abhijitValue = abhijitParts.join(" • ");
  drawHighlightCard(
    ctx,
    padX,
    curY,
    colW,
    boxH,
    abhijitWarnShort ? trCard(lang, "अभिजित मुहूर्त (टकराव चेतावनी) व चौघड़िया", "Abhijit Muhurat (Overlap Alert) & Choghadiya", "Abhijit (Overlap Alert) Va Choghadiya") : trCard(lang, "अभिजित, अमृत काल व शुभ चौघड़िया", "Abhijit, Amrit Kaal & Shubh Choghadiya", "Abhijit, Amrit Va Shubh Choghadiya", "अभिजित, अमृत काळ व शुभ चौघडिया", "અભિજિત, અમૃત કાળ અને શુભ ચોઘડિયા"),
    abhijitValue,
    palette,
    isAbhijitRestricted || Boolean(abhijitWarnShort) ? "#fbbf24" : "#34D399",
    isAbhijitRestricted || Boolean(abhijitWarnShort) ? "#fde68a" : "#ecfdf5",
    isVertical
  );
  const lblRahu = trCard(lang, "राहुकाल:", "Rahu Kaal:", "Rahukaal:", "राहुकाळ:", "રાહુકાળ:");
  const lblBhadra = trCard(lang, "भद्रा काल:", "Bhadra Kaal:", "Bhadra Kaal:");
  const ashubhNote = trCard(
    lang,
    "इस अवधि में नया मांगलिक कार्य एवं महत्वपूर्ण यात्रा टालें।",
    "Avoid starting new auspicious work or key travel during this window.",
    "Is samay mein naya mangalik karya aur mahatvapurna yatra talein."
  );
  const cleanBhadraPoster = pd.bhadraKaal ? pd.bhadraKaal.replace(/^⚠️\s*भद्रा\s*काल:\s*/u, "").trim() : "";
  const cleanPanchakPoster = pd.panchakKaal ? pd.panchakKaal.replace(/^⚠️\s*/u, "").trim() : "";
  const cleanGandmoolPoster = pd.gandmoolNakshatra ? pd.gandmoolNakshatra.replace(/^⚠️\s*/u, "").trim() : "";
  const ashubhParts = [
    `${lblRahu} ${pd.rahuKaal}`,
    cleanBhadraPoster ? `${lblBhadra} ${cleanBhadraPoster}` : "",
    cleanPanchakPoster ? cleanPanchakPoster : "",
    cleanGandmoolPoster ? cleanGandmoolPoster : "",
    pd.eclipsedChoghadiyaLine ? pd.eclipsedChoghadiyaLine : ""
  ].filter(Boolean);
  const ashubhValue = cleanBhadraPoster || cleanPanchakPoster || cleanGandmoolPoster || pd.eclipsedChoghadiyaLine ? ashubhParts.join(" • ") : `${pd.rahuKaal} — ${ashubhNote}`;
  drawHighlightCard(
    ctx,
    padX + colW + gridGap,
    curY,
    colW,
    boxH,
    cleanBhadraPoster ? cleanBhadraPoster.includes("बाधक नहीं") ? trCard(lang, "राहुकाल एवं भद्रा वास विचार", "Rahu Kaal & Bhadra Vaas", "Rahukaal Va Bhadra Vaas") : trCard(lang, "राहुकाल व भद्रा (वर्जित काल)", "Rahu Kaal & Bhadra (Avoid)", "Rahukaal Va Bhadra (Varjit)") : trCard(lang, "राहुकाल (अशुभ वर्जित काल)", "Rahu Kaal (Inauspicious Time)", "Rahukaal (Ashubh Varjit Kaal)"),
    ashubhValue,
    palette,
    "#FF6B6B",
    "#FF8A80",
    isVertical
  );
  curY += boxH + (isVertical ? 13 : 11);
  if (isVertical) {
    const msgH = Math.max(126, Math.min(176, footerY - curY - visitH - 26));
    drawBottomMessageAndCtaBox(
      ctx,
      padX,
      curY,
      fullW,
      msgH,
      msgStr,
      void 0,
      "rgba(32, 18, 6, 0.88)",
      "rgba(251, 191, 36, 0.55)",
      true,
      panchangGuidanceHeader
    );
    curY += msgH + 14;
    drawWebappVisitStrip(ctx, padX, curY, fullW, footerY - curY - 12, payload, true, lang);
  } else {
    const msgH = Math.max(88, Math.min(112, footerY - curY - 10));
    drawBottomMessageAndCtaBox(
      ctx,
      padX,
      curY,
      fullW,
      msgH,
      msgStr,
      void 0,
      "rgba(32, 18, 6, 0.88)",
      "rgba(251, 191, 36, 0.55)",
      false,
      panchangGuidanceHeader
    );
  }
}
function renderAll12RashifalVariant(ctx, payload, palette, layout, lang = "hi", panditImg = null) {
  const data = payload.all12RashifalData;
  if (!data || !data.items || data.items.length === 0) {
    renderGenericCardVariant(ctx, payload, palette, layout, lang);
    return;
  }
  const { padX, contentTop, footerY, isVertical, width: W } = layout;
  const fullW = W - padX * 2;
  const af = activeCardFestiveRenderCtx?.isFestiveThemeActive ? activeCardFestiveRenderCtx : null;
  let curY = contentTop;
  const heroH = isVertical ? 124 : 88;
  drawClippedBox(
    ctx,
    padX,
    curY,
    fullW,
    heroH,
    22,
    af ? hexToRgba(af.cardSurface, 0.94) : palette.cardBg,
    af ? hexToRgba(af.accentPrimary, 0.6) : palette.cardBorder,
    2,
    () => {
      const photoR = isVertical ? 44 : 33;
      const photoCx = padX + 20 + photoR;
      const photoCy = curY + heroH / 2;
      ctx.save();
      if (panditImg) {
        ctx.beginPath();
        ctx.arc(photoCx, photoCy, photoR, 0, Math.PI * 2);
        ctx.clip();
        ctx.drawImage(panditImg, photoCx - photoR, photoCy - photoR, photoR * 2, photoR * 2);
      } else {
        ctx.fillStyle = "#451a03";
        ctx.beginPath();
        ctx.arc(photoCx, photoCy, photoR, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "#FDE68A";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.font = `900 ${isVertical ? 34 : 26}px ${FONT_STACK}`;
        ctx.fillText("ॐ", photoCx, photoCy + 2);
      }
      ctx.restore();
      ctx.save();
      ctx.strokeStyle = createMetallicGoldGradient(ctx, photoCx - photoR, photoCy - photoR, photoCx + photoR, photoCy + photoR);
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(photoCx, photoCy, photoR + 1, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();
      const textX = photoCx + photoR + 20;
      const textMaxW = padX + fullW - textX - 20;
      ctx.textAlign = "left";
      ctx.textBaseline = "top";
      const heroTitle = lang === "en" ? `All 12 Zodiac Signs — ${data.modeLabel}` : `सभी 12 राशियों का ${data.modeLabel} (मेष से मीन)`;
      const tFit = fitSingleLine(ctx, heroTitle, textMaxW, 900, isVertical ? 31 : 24, 13);
      ctx.fillStyle = "#FFFBEB";
      ctx.font = `900 ${tFit.fontSize}px ${FONT_STACK}`;
      const titleY = curY + (isVertical ? 18 : 12);
      ctx.fillText(tFit.text, textX, titleY);
      const cleanDateHindi = (data.dateHindi || "").trim();
      const cleanVaarHindi = (data.vaarHindi || "").trim();
      const shouldAppendVaar = data.mode === "daily" && Boolean(cleanVaarHindi) && !cleanDateHindi.includes(cleanVaarHindi);
      const dateMeta = [
        cleanDateHindi,
        shouldAppendVaar ? cleanVaarHindi : "",
        data.mode === "daily" ? data.festivalName : ""
      ].filter(Boolean).join(" • ");
      const dFit = fitSingleLine(ctx, dateMeta, textMaxW, 800, isVertical ? 21 : 16, 11);
      ctx.fillStyle = "#FDE68A";
      ctx.font = `800 ${dFit.fontSize}px ${FONT_STACK}`;
      const dateY = titleY + tFit.fontSize + (isVertical ? 8 : 5);
      ctx.fillText(dFit.text, textX, dateY);
      if (data.panchangLine) {
        const cleanPanchangLine = data.panchangLine.replace(/(शुक्ल|कृष्ण)\s+पक्ष\s+\1(?:\s+पक्ष)?\s+/gu, "$1 पक्ष ").replace(/\s+/g, " ").trim();
        const pFit = fitSingleLine(ctx, cleanPanchangLine, textMaxW, 700, isVertical ? 17 : 13, 10);
        ctx.fillStyle = "#E2E8F0";
        ctx.font = `700 ${pFit.fontSize}px ${FONT_STACK}`;
        ctx.fillText(pFit.text, textX, dateY + dFit.fontSize + (isVertical ? 6 : 4));
      }
    }
  );
  curY += heroH + (isVertical ? 16 : 12);
  const cols = 3;
  const rows = 4;
  const gapX = isVertical ? 14 : 11;
  const gapY = isVertical ? 14 : 9;
  const gridAvailH = footerY - curY - (isVertical ? 16 : 10);
  const cellW = (fullW - gapX * (cols - 1)) / cols;
  const cellH = Math.floor((gridAvailH - gapY * (rows - 1)) / rows);
  const items = data.items.slice(0, 12);
  items.forEach((item, idx) => {
    const row = Math.floor(idx / cols);
    const col = idx % cols;
    const x = padX + col * (cellW + gapX);
    const y = curY + row * (cellH + gapY);
    drawClippedBox(
      ctx,
      x,
      y,
      cellW,
      cellH,
      18,
      palette.cardBg,
      palette.cardBorder,
      1.7,
      () => {
        const topLine = createMetallicGoldGradient(ctx, x + 14, y + 2, x + cellW - 14, y + 2);
        ctx.fillStyle = topLine;
        ctx.fillRect(x + 14, y + 1, cellW - 28, 2.5);
        const padInner = isVertical ? 14 : 11;
        const emblemR = isVertical ? 20 : 15;
        const emblemCx = x + padInner + emblemR;
        const emblemCy = y + (isVertical ? 34 : 25);
        ctx.save();
        ctx.fillStyle = "rgba(217, 119, 6, 0.18)";
        ctx.strokeStyle = createMetallicGoldGradient(ctx, emblemCx - emblemR, emblemCy - emblemR, emblemCx + emblemR, emblemCy + emblemR);
        ctx.lineWidth = 1.6;
        ctx.beginPath();
        ctx.arc(emblemCx, emblemCy, emblemR, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        drawVedicRashiCanvasEmblem(ctx, item.rashiKey || item.rashiNameEn, emblemCx, emblemCy, emblemR * 0.72, "#FDE68A");
        ctx.restore();
        const scoreStr = `${Math.max(50, Math.min(99, Math.round(item.overallScore)))}%`;
        const scoreCol = item.overallScore >= 82 ? "#34D399" : item.overallScore >= 72 ? "#FDE047" : "#FDBA74";
        const scoreW = isVertical ? 54 : 44;
        const scoreH = isVertical ? 26 : 20;
        const scoreX = x + cellW - padInner - scoreW;
        const scoreY = emblemCy - scoreH / 2;
        ctx.save();
        ctx.fillStyle = "rgba(15, 23, 42, 0.72)";
        ctx.strokeStyle = scoreCol;
        ctx.lineWidth = 1.2;
        drawRoundRect(ctx, scoreX, scoreY, scoreW, scoreH, scoreH / 2);
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = scoreCol;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.font = `800 ${isVertical ? 15 : 12}px ${FONT_STACK}`;
        ctx.fillText(scoreStr, scoreX + scoreW / 2, scoreY + scoreH / 2 + 0.5);
        ctx.restore();
        const nameLeft = emblemCx + emblemR + 9;
        const nameMaxW = Math.max(60, scoreX - nameLeft - 6);
        const rashiLabel = lang === "en" ? item.rashiNameEn : item.rashiNameHi;
        const nameFit = fitSingleLine(ctx, rashiLabel, nameMaxW, 900, isVertical ? 24 : 18, 12);
        ctx.textAlign = "left";
        ctx.textBaseline = "middle";
        ctx.fillStyle = "#FFFBEB";
        ctx.font = `900 ${nameFit.fontSize}px ${FONT_STACK}`;
        ctx.fillText(nameFit.text, nameLeft, emblemCy + 1);
        const divY = emblemCy + emblemR + (isVertical ? 9 : 6);
        ctx.strokeStyle = "rgba(253, 230, 138, 0.22)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(x + padInner, divY);
        ctx.lineTo(x + cellW - padInner, divY);
        ctx.stroke();
        const luckyH = isVertical ? 30 : 22;
        const luckyY = y + cellH - luckyH - (isVertical ? 8 : 5);
        const sumTop = divY + (isVertical ? 8 : 5);
        const sumMaxH = Math.max(30, luckyY - sumTop - 4);
        const rawSummaryStripped = stripBoxyEmojis(item.summaryHi || "").replace(/^[^:ः।\n]{2,55}(?:दैनिक|साप्ताहिक|मासिक)\s*राशिफल(?:\s*\([^)]*\))?\s*[:ः—-]\s*/u, "").replace(/^[A-Za-z\s]{2,35}(?:Daily|Weekly|Monthly)\s*(?:Horoscope|Rashifal)(?:\s*\([^)]*\))?\s*[:—-]\s*/i, "").replace(/\.{2,}|…/g, "").replace(/\s+/g, " ").trim();
        const rawSentenceList = splitCompleteSentences(rawSummaryStripped).map((s) => s.replace(/\.{2,}|…/g, "").trim()).filter(Boolean);
        let mahapostSummary = rawSummaryStripped;
        if (rawSentenceList.length >= 2) {
          const twoSent = `${rawSentenceList[0]} ${rawSentenceList[1]}`;
          const twoWords = twoSent.split(/\s+/).filter(Boolean).length;
          mahapostSummary = twoWords <= 32 ? twoSent : rawSentenceList[0];
        } else if (rawSentenceList.length === 1) {
          mahapostSummary = rawSentenceList[0];
        }
        mahapostSummary = mahapostSummary.replace(/\.{2,}|…/g, "").trim();
        if (mahapostSummary && !/[।॥.!?]$/.test(mahapostSummary)) {
          mahapostSummary += lang === "en" ? "." : "।";
        }
        const wrapWordsOnlyStrict = (txt, maxW, maxL) => {
          const cleanTxt = stripBoxyEmojis(txt).replace(/\s+/g, " ").trim();
          if (!cleanTxt || maxL <= 0) return { lines: [], truncated: false };
          const safeW = Math.max(40, maxW - 6);
          const words = cleanTxt.split(" ");
          const outLines = [];
          let cur = "";
          for (let i = 0; i < words.length; i++) {
            const w = words[i];
            if (ctx.measureText(w).width > safeW) {
              return { lines: outLines, truncated: true };
            }
            const cand = cur ? `${cur} ${w}` : w;
            if (ctx.measureText(cand).width <= safeW) {
              cur = cand;
            } else {
              if (cur) outLines.push(cur);
              if (outLines.length >= maxL) {
                return { lines: outLines, truncated: true };
              }
              cur = w;
            }
          }
          if (cur) {
            if (outLines.length < maxL) {
              outLines.push(cur);
            } else {
              return { lines: outLines, truncated: true };
            }
          }
          return { lines: outLines, truncated: false };
        };
        const fitMahapostUpTo4Lines = (txt) => {
          const innerW = cellW - padInner * 2 + 4;
          const startPx = isVertical ? 17.5 : 12.6;
          const floorPx = isVertical ? 9.5 : 7;
          const lineHMinRatio = isVertical ? 1.2 : 1.14;
          const lineHStartRatio = isVertical ? 1.28 : 1.2;
          for (let px = startPx; px >= floorPx; px -= 0.4) {
            const ratio = px > floorPx + 2 ? lineHStartRatio : lineHMinRatio;
            const lh2 = Math.max(8, Math.round(px * ratio * 10) / 10);
            const maxAllowedLines = Math.min(4, Math.max(1, Math.floor(sumMaxH / lh2)));
            ctx.font = `700 ${px}px ${FONT_STACK}`;
            const res2 = wrapWordsOnlyStrict(txt, innerW, maxAllowedLines);
            if (!res2.truncated) {
              return { fontSize: px, lineHeight: lh2, lines: res2.lines };
            }
          }
          for (let px = floorPx - 0.3; px >= 6; px -= 0.3) {
            const lh2 = Math.max(7, Math.round(px * 1.13 * 10) / 10);
            const maxAllowedLines = Math.min(4, Math.max(1, Math.floor(sumMaxH / lh2)));
            ctx.font = `700 ${px}px ${FONT_STACK}`;
            const res2 = wrapWordsOnlyStrict(txt, innerW, maxAllowedLines);
            if (!res2.truncated) {
              return { fontSize: px, lineHeight: lh2, lines: res2.lines };
            }
          }
          if (rawSentenceList.length >= 2) {
            const firstClean = rawSentenceList[0].replace(/\.{2,}|…/g, "").trim();
            const firstTerm = firstClean && !/[।॥.!?]$/.test(firstClean) ? `${firstClean}${lang === "en" ? "." : "।"}` : firstClean;
            if (firstTerm && firstTerm !== txt) {
              return fitMahapostUpTo4Lines(firstTerm);
            }
          }
          for (let px = 5.8; px >= 5.2; px -= 0.2) {
            const lh2 = Math.max(6.2, Math.round(px * 1.12 * 10) / 10);
            ctx.font = `700 ${px}px ${FONT_STACK}`;
            const res2 = wrapWordsOnlyStrict(txt, innerW, 4);
            if (!res2.truncated) {
              return { fontSize: px, lineHeight: lh2, lines: res2.lines };
            }
          }
          const lh = Math.max(6.2, Math.round(5.2 * 1.12 * 10) / 10);
          ctx.font = `700 5.2px ${FONT_STACK}`;
          const res = wrapWordsOnlyStrict(txt, innerW, 4);
          return { fontSize: 5.2, lineHeight: lh, lines: res.lines };
        };
        const sumFit = fitMahapostUpTo4Lines(mahapostSummary);
        ctx.textAlign = "left";
        ctx.textBaseline = "top";
        ctx.fillStyle = "#F8FAFC";
        ctx.font = `700 ${sumFit.fontSize}px ${FONT_STACK}`;
        const totSumH = sumFit.lines.length * sumFit.lineHeight;
        let sy = sumTop + Math.max(0, (sumMaxH - totSumH) / 2);
        for (const l of sumFit.lines) {
          ctx.fillText(l, x + padInner, sy);
          sy += sumFit.lineHeight;
        }
        const luckyText = lang === "en" ? `No: ${item.luckyNumber} • ${item.luckyColor}` : `अंक: ${item.luckyNumber} • रंग: ${item.luckyColor}`;
        ctx.save();
        ctx.fillStyle = "rgba(217, 119, 6, 0.16)";
        drawRoundRect(ctx, x + padInner, luckyY, cellW - padInner * 2, luckyH, 9);
        ctx.fill();
        const lFit = fitSingleLine(ctx, luckyText, cellW - padInner * 2 - 12, 800, isVertical ? 15 : 11.5, 9);
        ctx.fillStyle = "#FDE68A";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.font = `800 ${lFit.fontSize}px ${FONT_STACK}`;
        ctx.fillText(lFit.text, x + cellW / 2, luckyY + luckyH / 2 + 0.5);
        ctx.restore();
      }
    );
  });
}
function renderMilanVariant(ctx, payload, palette, layout, lang = "hi") {
  const md = payload.milanData;
  if (!md) {
    renderGenericCardVariant(ctx, payload, palette, layout, lang);
    return;
  }
  const { padX, contentTop, footerY, isVertical, width: W } = layout;
  const fullW = W - padX * 2;
  let curY = contentTop;
  const sideW = 336;
  const boxH = isVertical ? 290 : 192;
  drawHighlightCard(
    ctx,
    padX,
    curY,
    sideW,
    boxH,
    trCard(lang, "वर (Groom)", "Groom (Var)", "Var (Groom)", "वर (Groom)", "વર (Groom)"),
    `${md.boyName} — ${md.boyRashi} • ${md.boyNakshatra}`,
    palette,
    "#93c5fd",
    "#fffbeb",
    isVertical
  );
  const cx = W / 2;
  const cy = curY + boxH / 2;
  ctx.save();
  const scoreColor = md.totalScore >= 24 ? "#34D399" : md.totalScore >= 18 ? "#fbbf24" : "#FF7B7B";
  const outerR = isVertical ? 106 : 88;
  const ringR = isVertical ? 92 : 76;
  ctx.fillStyle = "rgba(15, 23, 42, 0.95)";
  ctx.beginPath();
  ctx.arc(cx, cy, outerR, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = "rgba(255, 255, 255, 0.14)";
  ctx.lineWidth = isVertical ? 12 : 10;
  ctx.beginPath();
  ctx.arc(cx, cy, ringR, 0, Math.PI * 2);
  ctx.stroke();
  const ratio = Math.max(0.05, Math.min(1, md.totalScore / 36));
  ctx.strokeStyle = scoreColor;
  ctx.lineWidth = isVertical ? 12 : 10;
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.arc(cx, cy, ringR, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * ratio);
  ctx.stroke();
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillStyle = "#fffbeb";
  ctx.font = `900 ${isVertical ? 52 : 42}px ${FONT_STACK}`;
  ctx.fillText(`${md.totalScore}`, cx, cy - (isVertical ? 18 : 14));
  ctx.fillStyle = "#fcd34d";
  ctx.font = `700 ${isVertical ? 22 : 18}px ${FONT_STACK}`;
  ctx.fillText(`/ 36 ${trCard(lang, "गुण", "Gunas", "Gun", "गुण", "ગુણ")}`, cx, cy + (isVertical ? 22 : 20));
  ctx.fillStyle = scoreColor;
  ctx.font = `800 ${isVertical ? 20 : 17}px ${FONT_STACK}`;
  ctx.fillText(`${md.compatibilityPercentage}%`, cx, cy + (isVertical ? 50 : 44));
  ctx.restore();
  drawHighlightCard(
    ctx,
    W - padX - sideW,
    curY,
    sideW,
    boxH,
    trCard(lang, "कन्या (Bride)", "Bride (Kanya)", "Kanya (Bride)", "वधू (Bride)", "કન્યા (Bride)"),
    `${md.girlName} — ${md.girlRashi} • ${md.girlNakshatra}`,
    palette,
    "#fda4af",
    "#fffbeb",
    isVertical
  );
  curY += boxH + (isVertical ? 20 : 16);
  const verdictH = isVertical ? 96 : 62;
  drawClippedBox(
    ctx,
    padX,
    curY,
    fullW,
    verdictH,
    18,
    "rgba(190, 18, 60, 0.25)",
    "rgba(251, 113, 133, 0.6)",
    2,
    () => {
      const vFit = fitAdaptiveHeading(
        ctx,
        `${trCard(lang, "शास्त्रीय निष्कर्ष:", "Shastriya Verdict:", "Shastriya Nishkarsh:", "शास्त्रीय निष्कर्ष:", "શાસ્ત્રીય નિષ્કર્ષ:")} ${md.verdict}`,
        fullW - 44,
        verdictH - 14,
        900,
        isVertical ? 30 : 25,
        13,
        1.2
      );
      ctx.textAlign = "center";
      ctx.textBaseline = "top";
      ctx.fillStyle = "#fde68a";
      ctx.font = `900 ${vFit.fontSize}px ${FONT_STACK}`;
      const totH = vFit.lines.length * vFit.lineHeight;
      let vy = curY + Math.max(6, (verdictH - totH) / 2);
      for (const l of vFit.lines) {
        ctx.fillText(l, W / 2, vy);
        vy += vFit.lineHeight;
      }
    }
  );
  curY += verdictH + (isVertical ? 20 : 16);
  const milanSummaryText = sanitizeVedicCardText(md.summary || payload.message);
  const milanHeader = trCard(
    lang,
    "॥ अष्टकूट मिलान सारांश एवं मंगल कामना ॥",
    "|| Ashtakoot Matching Summary & Blessings ||",
    "|| Ashtakoot Milan Saransh Aur Mangal Kamna ||"
  );
  const visitH = isVertical ? 114 : 0;
  const autoMsgH = isVertical ? measureAutoMessageBoxHeight(ctx, fullW, milanSummaryText, void 0, true, milanHeader, 175, 290) : 0;
  const gap = 18;
  const colW = (fullW - gap) / 2;
  const diagH = isVertical ? Math.max(240, Math.min(340, footerY - curY - autoMsgH - visitH - 18 - 16 - 14)) : 148;
  drawHighlightCard(
    ctx,
    padX,
    curY,
    colW,
    diagH,
    trCard(lang, "मांगलिक दोष विचार", "Manglik Dosh Analysis", "Manglik Dosh Vichar", "मांगलिक दोष विचार", "માંગલિક દોષ વિચાર"),
    md.manglikStatus,
    palette,
    "#FF7B7B",
    "#f8fafc",
    isVertical
  );
  drawHighlightCard(
    ctx,
    padX + colW + gap,
    curY,
    colW,
    diagH,
    trCard(lang, "लग्न एवं नाड़ी सामंजस्य", "Lagna & Nadi Compatibility", "Lagna Aur Nadi Samanjasya", "लग्न व नाडी सामंजस्य", "લગ્ન અને નાડી સુમેળ"),
    md.nadiStatus ? `${md.lagnaMatch} • ${md.nadiStatus}` : md.lagnaMatch,
    palette,
    "#fbbf24",
    "#f8fafc",
    isVertical
  );
  curY += diagH + (isVertical ? 18 : 16);
  if (isVertical) {
    const msgH = Math.max(165, footerY - curY - visitH - 30);
    drawBottomMessageAndCtaBox(
      ctx,
      padX,
      curY,
      fullW,
      msgH,
      milanSummaryText,
      void 0,
      "rgba(28, 16, 14, 0.85)",
      "rgba(251, 191, 36, 0.5)",
      true,
      milanHeader
    );
    curY += msgH + 16;
    drawWebappVisitStrip(ctx, padX, curY, fullW, footerY - curY - 14, payload, true, lang);
  } else {
    const msgH = Math.max(96, footerY - curY - 14);
    drawBottomMessageAndCtaBox(
      ctx,
      padX,
      curY,
      fullW,
      msgH,
      milanSummaryText,
      payload.ctaLine,
      "rgba(28, 16, 14, 0.85)",
      "rgba(251, 191, 36, 0.5)",
      false
    );
  }
}
function drawNorthIndianMiniChart(ctx, x, y, size, color = "rgba(251, 191, 36, 0.65)") {
  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = 2.2;
  ctx.strokeRect(x, y, size, size);
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + size, y + size);
  ctx.moveTo(x + size, y);
  ctx.lineTo(x, y + size);
  ctx.moveTo(x + size / 2, y);
  ctx.lineTo(x + size, y + size / 2);
  ctx.lineTo(x + size / 2, y + size);
  ctx.lineTo(x, y + size / 2);
  ctx.closePath();
  ctx.stroke();
  ctx.restore();
}
function renderKundaliVariant(ctx, payload, palette, layout, lang = "hi") {
  const kd = payload.kundaliData;
  if (!kd) {
    renderGenericCardVariant(ctx, payload, palette, layout, lang);
    return;
  }
  const { padX, contentTop, footerY, isVertical, width: W } = layout;
  const fullW = W - padX * 2;
  let curY = contentTop;
  const af = activeCardFestiveRenderCtx?.isFestiveThemeActive ? activeCardFestiveRenderCtx : null;
  const topH = isVertical ? 222 : 144;
  drawClippedBox(
    ctx,
    padX,
    curY,
    fullW,
    topH,
    24,
    af ? hexToRgba(af.cardSurface, 0.92) : "rgba(18, 25, 52, 0.90)",
    af ? hexToRgba(af.accentPrimary, 0.58) : "rgba(234, 179, 8, 0.58)",
    2,
    () => {
      const chartSize = isVertical ? 146 : 104;
      drawNorthIndianMiniChart(
        ctx,
        padX + 26,
        curY + Math.round((topH - chartSize) / 2),
        chartSize,
        af ? hexToRgba(af.accentPrimary, 0.85) : "rgba(253, 224, 71, 0.78)"
      );
      const tx = padX + 26 + chartSize + 24;
      const tw = padX + fullW - 22 - tx;
      ctx.textAlign = "left";
      ctx.textBaseline = "top";
      const patrikaTitle = lang === "en" ? `Vedic Birth Chart of ${kd.nativeName}` : `${kd.nativeName} ${trCard(lang, "की वैदिक जन्म पत्रिका", "Vedic Birth Chart", "Ki Vedic Janam Patrika", "ची वैदिक जन्म पत्रिका", "ની વૈદિક જન્મ પત્રિકા")}`;
      const nameFit = fitAdaptiveHeading(ctx, patrikaTitle, tw, isVertical ? 78 : 54, 900, isVertical ? 36 : 30, 13, 1.2);
      ctx.fillStyle = "#fffbeb";
      ctx.font = `900 ${nameFit.fontSize}px ${FONT_STACK}`;
      let yCursor = curY + (isVertical ? 26 : 18);
      for (const l of nameFit.lines) {
        ctx.fillText(l, tx, yCursor);
        yCursor += nameFit.lineHeight;
      }
      const dobLine = `${trCard(lang, "जन्म तिथि:", "Birth Date:", "Janam Tithi:", "जन्म तारीख:", "જન્મ તારીખ:")} ${kd.dob}  •  ${trCard(lang, "समय:", "Time:", "Samay:", "वेळ:", "સમય:")} ${kd.time}`;
      const dFit = fitAdaptiveHeading(ctx, dobLine, tw, isVertical ? 52 : 34, 700, isVertical ? 24 : 19, 11, 1.24);
      ctx.fillStyle = af ? af.accentSecondary : "#fcd34d";
      ctx.font = `700 ${dFit.fontSize}px ${FONT_STACK}`;
      yCursor += 6;
      for (const l of dFit.lines) {
        ctx.fillText(l, tx, yCursor);
        yCursor += dFit.lineHeight;
      }
      const placeLabel = trCard(lang, "जन्म स्थान:", "Birth Place:", "Janam Sthan:", "जन्म ठिकाण:", "જન્મ સ્થળ:");
      const placeFit = fitAdaptiveHeading(ctx, `${placeLabel} ${kd.place}`, tw, Math.max(24, curY + topH - yCursor - 8), 700, isVertical ? 23 : 18, 11, 1.24);
      ctx.fillStyle = "#a7f3d0";
      ctx.font = `700 ${placeFit.fontSize}px ${FONT_STACK}`;
      yCursor += 4;
      for (const l of placeFit.lines) {
        ctx.fillText(l, tx, yCursor);
        yCursor += placeFit.lineHeight;
      }
    }
  );
  curY += topH + (isVertical ? 20 : 14);
  const msgStr = sanitizeVedicCardText(
    trCard(
      lang,
      `मांगलिक स्थिति: ${kd.manglikSeverity}  •  गण: ${kd.gana}  •  नाड़ी: ${kd.nadi}  —  लाहिड़ी चित्रापक्ष अयनांश एवं बृहत् पाराशर होरा शास्त्र द्वारा शुद्ध गणना।`,
      `Manglik Status: ${kd.manglikSeverity}  •  Gana: ${kd.gana}  •  Nadi: ${kd.nadi}  —  Computed via Lahiri Chitrapaksha Ayanamsa & Brihat Parashara Hora Shastra.`
    )
  );
  const kundaliHeader = trCard(
    lang,
    "॥ षोडशवर्ग एवं वैदिक फलादेश सारांश ॥",
    "|| Shodashvarga & Vedic Prediction Summary ||",
    "|| Shodashvarga Aur Vedic Phaladesh Saransh ||"
  );
  const visitH = isVertical ? 114 : 0;
  const autoMsgH = isVertical ? measureAutoMessageBoxHeight(ctx, fullW, msgStr, void 0, true, kundaliHeader, 168, 280) : 0;
  const gap = 18;
  const colW = (fullW - gap) / 2;
  const rowGap = isVertical ? 18 : 14;
  const availForGrid = isVertical ? footerY - curY - autoMsgH - visitH - 18 - 16 - 14 : 0;
  const boxH = isVertical ? Math.max(242, Math.min(330, Math.floor((availForGrid - rowGap) / 2))) : 176;
  const lblLord = trCard(lang, "स्वामी:", "Lord:", "Swami:", "स्वामी:", "સ્વામી:");
  drawHighlightCard(
    ctx,
    padX,
    curY,
    colW,
    boxH,
    trCard(lang, "जन्म लग्न एवं लग्नेश", "Ascendant (Lagna) & Lord", "Janam Lagna Aur Lagnesh", "जन्म लग्न व लग्नेश", "જન્મ લગ્ન અને લગ્નેશ"),
    `${kd.lagna} (${lblLord} ${kd.lagnaLord})`,
    palette,
    "#fde047",
    "#f8fafc",
    isVertical
  );
  drawHighlightCard(
    ctx,
    padX + colW + gap,
    curY,
    colW,
    boxH,
    trCard(lang, "चंद्र राशि एवं नक्षत्र", "Moon Rashi & Nakshatra", "Chandra Rashi Aur Nakshatra", "चंद्र राशी व नक्षत्र", "ચંદ્ર રાશિ અને નક્ષત્ર"),
    `${kd.moonRashi} • ${kd.nakshatra}`,
    palette,
    "#93c5fd",
    "#f8fafc",
    isVertical
  );
  curY += boxH + rowGap;
  drawHighlightCard(
    ctx,
    padX,
    curY,
    colW,
    boxH,
    trCard(lang, "वर्तमान विंशोत्तरी महादशा", "Current Vimshottari Mahadasha", "Vartaman Vimshottari Mahadasha", "सध्याची विंशोत्तरी महादशा", "વર્તમાન વિંશોત્તરી મહાદશા"),
    kd.mahadasha,
    palette,
    "#34D399",
    "#ecfdf5",
    isVertical
  );
  const lblGem = trCard(lang, "रत्न:", "Gemstone:", "Ratna:", "रत्न:", "રત્ન:");
  const lblDeity = trCard(lang, "इष्ट देव:", "Ishta Devta:", "Ishta Dev:", "इष्ट देव:", "ઇષ્ટ દેવ:");
  drawHighlightCard(
    ctx,
    padX + colW + gap,
    curY,
    colW,
    boxH,
    trCard(lang, "शुभ रत्न एवं इष्ट देव", "Lucky Gemstone & Ishta Devta", "Shubh Ratna Aur Ishta Dev", "शुभ रत्न व इष्ट देव", "શુભ રત્ન અને ઇષ્ટ દેવ"),
    `${lblGem} ${kd.ratna} • ${lblDeity} ${kd.ishtaDevta}`,
    palette,
    "#fbbf24",
    "#fffbeb",
    isVertical
  );
  curY += boxH + (isVertical ? 18 : 14);
  if (isVertical) {
    const msgH = Math.max(160, footerY - curY - visitH - 30);
    drawBottomMessageAndCtaBox(
      ctx,
      padX,
      curY,
      fullW,
      msgH,
      msgStr,
      void 0,
      "rgba(30, 20, 8, 0.86)",
      "rgba(234, 179, 8, 0.5)",
      true,
      kundaliHeader
    );
    curY += msgH + 16;
    drawWebappVisitStrip(ctx, padX, curY, fullW, footerY - curY - 14, payload, true, lang);
  } else {
    const msgH = Math.max(96, footerY - curY - 14);
    drawBottomMessageAndCtaBox(
      ctx,
      padX,
      curY,
      fullW,
      msgH,
      msgStr,
      payload.ctaLine,
      "rgba(30, 20, 8, 0.86)",
      "rgba(234, 179, 8, 0.5)",
      false
    );
  }
}
function renderNaamRashiVariant(ctx, payload, palette, layout, lang = "hi") {
  const nd = payload.naamRashiData;
  if (!nd) {
    renderGenericCardVariant(ctx, payload, palette, layout, lang);
    return;
  }
  const { padX, contentTop, footerY, isVertical, width: W } = layout;
  const fullW = W - padX * 2;
  let curY = contentTop;
  const af = activeCardFestiveRenderCtx?.isFestiveThemeActive ? activeCardFestiveRenderCtx : null;
  const topH = isVertical ? 232 : 148;
  drawClippedBox(
    ctx,
    padX,
    curY,
    fullW,
    topH,
    24,
    af ? hexToRgba(af.cardSurface, 0.92) : "rgba(10, 28, 30, 0.90)",
    af ? hexToRgba(af.accentPrimary, 0.56) : "rgba(52, 211, 153, 0.55)",
    2,
    () => {
      const sealRadius = isVertical ? 66 : 50;
      const cx = padX + 28 + sealRadius;
      const cy = curY + topH / 2;
      ctx.save();
      const grad = ctx.createRadialGradient(cx, cy, 8, cx, cy, sealRadius + 4);
      grad.addColorStop(0, af ? af.sealCoreHex : "#065f46");
      grad.addColorStop(0.7, af ? af.sealMidHex : "#064e3b");
      grad.addColorStop(1, "#022c22");
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(cx, cy, sealRadius, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = af ? af.accentPrimary : "#6ee7b7";
      ctx.lineWidth = 2.8;
      ctx.stroke();
      ctx.restore();
      drawVedicRashiCanvasEmblem(ctx, nd.rashiHi, cx, cy, isVertical ? 36 : 27, af ? af.accentPrimary : "#fde047");
      const tx = cx + sealRadius + 24;
      const tw = padX + fullW - 22 - tx;
      ctx.textAlign = "left";
      ctx.textBaseline = "top";
      const naamRashiTitle = lang === "en" ? `Rashi for Name Initial "${nd.letterEn}": ${nd.rashiHi}` : `${nd.letterEn} ${trCard(lang, "नाम की राशि:", "Naam Ki Rashi:", "Naam Ki Rashi:", "नावाची राशी:", "નામની રાશિ:")} ${nd.rashiHi}`;
      const tFit = fitAdaptiveHeading(ctx, naamRashiTitle, tw, isVertical ? 76 : 52, 900, isVertical ? 36 : 31, 13, 1.2);
      ctx.fillStyle = "#fffbeb";
      ctx.font = `900 ${tFit.fontSize}px ${FONT_STACK}`;
      let yCursor = curY + (isVertical ? 24 : 16);
      for (const l of tFit.lines) {
        ctx.fillText(l, tx, yCursor);
        yCursor += tFit.lineHeight;
      }
      const lblSounds = trCard(lang, "हिंदी अक्षर:", "Syllables:", "Hindi Akshar:", "अक्षरे:", "અક્ષરો:");
      const akFit = fitAdaptiveHeading(ctx, `${lblSounds} ${nd.aksharsHi}`, tw, isVertical ? 54 : 34, 700, isVertical ? 24 : 19, 11, 1.24);
      ctx.fillStyle = "#34D399";
      ctx.font = `700 ${akFit.fontSize}px ${FONT_STACK}`;
      yCursor += 4;
      for (const l of akFit.lines) {
        ctx.fillText(l, tx, yCursor);
        yCursor += akFit.lineHeight;
      }
      const remH = Math.max(24, curY + topH - yCursor - 8);
      const lblLord = trCard(lang, "स्वामी:", "Lord:", "Swami:", "स्वामी:", "સ્વામી:");
      const lblElem = trCard(lang, "तत्व:", "Element:", "Tatva:", "तत्त्व:", "તત્વ:");
      const lblNak = trCard(lang, "नक्षत्र:", "Nakshatra:", "Nakshatra:", "नक्षत्र:", "નક્ષત્ર:");
      const swFit = fitWrappedBlock(
        ctx,
        `${lblLord} ${nd.lordHi}  •  ${lblElem} ${nd.elementHi}  •  ${lblNak} ${nd.nakshatraHi}`,
        tw,
        remH,
        700,
        isVertical ? 22 : 18,
        11,
        1.25
      );
      ctx.fillStyle = af ? af.accentSecondary : "#fcd34d";
      ctx.font = `700 ${swFit.fontSize}px ${FONT_STACK}`;
      yCursor += 4;
      for (const l of swFit.lines) {
        ctx.fillText(l, tx, yCursor);
        yCursor += swFit.lineHeight;
      }
    }
  );
  curY += topH + (isVertical ? 20 : 14);
  const natureText = sanitizeVedicCardText(nd.natureSummary || payload.message);
  const naamHeader = trCard(
    lang,
    "॥ अवकहड़ा चक्र एवं व्यक्तित्व सार ॥",
    "|| Avakahada Chakra & Personality Summary ||",
    "|| Avakahada Chakra Aur Vyaktitva Saar ||"
  );
  const mantraH = isVertical ? 142 : 82;
  const visitH = isVertical ? 114 : 0;
  const autoMsgH = isVertical ? measureAutoMessageBoxHeight(ctx, fullW, natureText, void 0, true, naamHeader, 170, 290) : 0;
  const gap = 18;
  const colW = (fullW - gap) / 2;
  const boxH = isVertical ? Math.max(245, Math.min(340, footerY - curY - mantraH - autoMsgH - visitH - 18 - 18 - 16 - 14)) : 156;
  drawHighlightCard(
    ctx,
    padX,
    curY,
    colW,
    boxH,
    trCard(lang, "शुभ रत्न व रंग", "Lucky Gemstone & Colors", "Shubh Ratna Va Rang", "शुभ रत्न व रंग", "શુભ રત્ન અને રંગ"),
    `${nd.gemstoneHi} • ${trCard(lang, "शुभ रंग:", "Lucky Colors:", "Shubh Rang:")} ${nd.luckyColorsHi}`,
    palette,
    "#34D399",
    "#f8fafc",
    isVertical
  );
  drawHighlightCard(
    ctx,
    padX + colW + gap,
    curY,
    colW,
    boxH,
    trCard(lang, "भाग्योदय वर्ष व अंक", "Lucky Years & Numbers", "Bhagyoday Varsh Va Ank", "भाग्योदय वर्ष व अंक", "ભાગ્યોદય વર્ષ અને અંક"),
    `${trCard(lang, "भाग्योदय:", "Peak Years:", "Bhagyoday:")} ${nd.peakYears} • ${trCard(lang, "अंक:", "Numbers:", "Ank:")} ${nd.luckyNumbers} (${nd.luckyDayHi})`,
    palette,
    "#fbbf24",
    "#f8fafc",
    isVertical
  );
  curY += boxH + (isVertical ? 18 : 14);
  drawClippedBox(
    ctx,
    padX,
    curY,
    fullW,
    mantraH,
    18,
    af ? hexToRgba(af.cardSurface, 0.9) : "rgba(32, 22, 6, 0.90)",
    af ? hexToRgba(af.accentPrimary, 0.56) : "rgba(251, 191, 36, 0.55)",
    2,
    () => {
      const mFit = fitAdaptiveHeading(
        ctx,
        `ॐ ${trCard(lang, "सिद्ध वैदिक बीज मंत्र:", "Siddha Vedic Beej Mantra:", "Siddh Vedic Beej Mantra:")} ${nd.beejMantra}`,
        fullW - 44,
        mantraH - 16,
        800,
        isVertical ? 29 : 23,
        12,
        1.26
      );
      ctx.textAlign = "center";
      ctx.textBaseline = "top";
      ctx.fillStyle = af ? af.accentPrimary : "#fde047";
      ctx.font = `800 ${mFit.fontSize}px ${FONT_STACK}`;
      const totH = mFit.lines.length * mFit.lineHeight;
      let my = curY + Math.max(8, (mantraH - totH) / 2);
      for (const l of mFit.lines) {
        ctx.fillText(l, W / 2, my);
        my += mFit.lineHeight;
      }
    }
  );
  curY += mantraH + (isVertical ? 18 : 14);
  if (isVertical) {
    const msgH = Math.max(165, footerY - curY - visitH - 30);
    drawBottomMessageAndCtaBox(
      ctx,
      padX,
      curY,
      fullW,
      msgH,
      natureText,
      void 0,
      palette.cardBg,
      palette.cardBorder,
      true,
      naamHeader
    );
    curY += msgH + 16;
    drawWebappVisitStrip(ctx, padX, curY, fullW, footerY - curY - 14, payload, true, lang);
  } else {
    const msgH = Math.max(96, footerY - curY - 14);
    drawBottomMessageAndCtaBox(
      ctx,
      padX,
      curY,
      fullW,
      msgH,
      natureText,
      payload.ctaLine,
      palette.cardBg,
      palette.cardBorder,
      false
    );
  }
}
function renderFestivalVariant(ctx, payload, palette, layout, lang = "hi") {
  const fd = payload.festivalData;
  if (!fd) {
    renderGenericCardVariant(ctx, payload, palette, layout, lang);
    return;
  }
  const { padX, contentTop, footerY, isVertical, width: W } = layout;
  const fullW = W - padX * 2;
  let curY = contentTop + (isVertical ? 8 : 4);
  const af = activeCardFestiveRenderCtx?.isFestiveThemeActive ? activeCardFestiveRenderCtx : null;
  ctx.save();
  ctx.textAlign = "center";
  ctx.textBaseline = "top";
  const titleFit = fitAdaptiveHeading(
    ctx,
    `॥ ${fd.festivalName} ॥`,
    fullW - 12,
    isVertical ? 124 : 92,
    900,
    isVertical ? 48 : 38,
    18,
    1.22
  );
  ctx.fillStyle = "#fffbeb";
  ctx.font = `900 ${titleFit.fontSize}px ${FONT_STACK}`;
  for (const l of titleFit.lines) {
    ctx.fillText(l, W / 2, curY);
    curY += titleFit.lineHeight;
  }
  curY += isVertical ? 10 : 6;
  const lblDate = trCard(lang, "पावन तिथि:", "Sacred Date:", "Pavan Tithi:", "पावन तिथी:", "પાવન તિથિ:");
  const subFit = fitAdaptiveHeading(
    ctx,
    `${lblDate} ${fd.pujaDate}  •  ${fd.tithiLabel}`,
    fullW - 18,
    isVertical ? 76 : 52,
    700,
    isVertical ? 25 : 20,
    12,
    1.26
  );
  ctx.fillStyle = af ? af.accentSecondary : "#fed7aa";
  ctx.font = `700 ${subFit.fontSize}px ${FONT_STACK}`;
  for (const l of subFit.lines) {
    ctx.fillText(l, W / 2, curY);
    curY += subFit.lineHeight;
  }
  const lblDeity = trCard(lang, "आराध्य:", "Deity:", "Aradhya:", "आराध्य:", "આરાધ્ય:");
  const deityLine = [fd.deityName ? `${lblDeity} ${fd.deityName}` : "", fd.shastraRef || ""].filter(Boolean).join("  •  ");
  if (deityLine && isVertical) {
    curY += 10;
    const dFit = fitSingleLine(ctx, deityLine, fullW - 36, 700, 20, 11);
    const pillW = Math.min(fullW - 16, ctx.measureText(dFit.text).width + 36);
    const pillH = 36;
    ctx.fillStyle = af ? hexToRgba(af.accentPrimary, 0.18) : "rgba(249, 115, 22, 0.16)";
    drawRoundRect(ctx, (W - pillW) / 2, curY, pillW, pillH, 18);
    ctx.fill();
    ctx.strokeStyle = af ? hexToRgba(af.accentSecondary, 0.48) : "rgba(251, 146, 60, 0.45)";
    ctx.lineWidth = 1.2;
    drawRoundRect(ctx, (W - pillW) / 2, curY, pillW, pillH, 18);
    ctx.stroke();
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#fde68a";
    ctx.font = `700 ${dFit.fontSize}px ${FONT_STACK}`;
    ctx.fillText(dFit.text, W / 2, curY + pillH / 2 + 1);
    curY += pillH;
  }
  curY += isVertical ? 14 : 10;
  ctx.restore();
  drawHorizontalDivider(ctx, curY, "#fb923c");
  curY += isVertical ? 18 : 14;
  const gap = 18;
  const colW = (fullW - gap) / 2;
  const boxH = isVertical ? 245 : 168;
  drawHighlightCard(
    ctx,
    padX,
    curY,
    colW,
    boxH,
    fd.muhuratLabel || trCard(lang, "सर्वश्रेष्ठ पूजा शुभ मुहूर्त", "Best Auspicious Puja Muhurat", "Sarvashreshtha Puja Shubh Muhurat"),
    fd.muhuratTime,
    palette,
    "#fde047",
    "#fffbeb",
    isVertical
  );
  const rightLabel = fd.secondaryMuhuratLabel ? fd.secondaryMuhuratLabel : fd.nakshatraYoga ? trCard(lang, "शुभ नक्षत्र व योग संयोग", "Auspicious Nakshatra & Yoga", "Shubh Nakshatra Va Yog Sanyog") : trCard(lang, "शास्त्रोक्त पूजा विधि", "Shastriya Puja Vidhi", "Shastriya Puja Vidhi");
  const rightValue = fd.secondaryMuhuratTime ? `${fd.secondaryMuhuratTime}${fd.nakshatraYoga ? ` • ${fd.nakshatraYoga}` : ""}` : fd.vidhiHighlight;
  drawHighlightCard(
    ctx,
    padX + colW + gap,
    curY,
    colW,
    boxH,
    rightLabel,
    rightValue,
    palette,
    "#fdba74",
    "#f8fafc",
    isVertical
  );
  curY += boxH + (isVertical ? 18 : 14);
  if (isVertical) {
    const steps = (fd.vidhiSteps || []).filter(Boolean).slice(0, 4);
    const hasSteps = steps.length >= 2;
    const mantraMsg = fd.beejMantra ? `ॐ ${trCard(lang, "पावन मंत्र:", "Sacred Mantra:", "Pavan Mantra:")} ${fd.beejMantra}` : fd.scheduleSummary || fd.vidhiHighlight;
    const festHeader = trCard(
      lang,
      "॥ पावन पर्व मंगलकामना एवं सिद्ध मंत्र ॥",
      "|| Sacred Festival Wishes & Siddha Mantra ||",
      "|| Pavan Parv Mangalkamna Aur Siddh Mantra ||"
    );
    const visitH = 114;
    const autoMidMsgH = measureAutoMessageBoxHeight(
      ctx,
      fullW,
      fd.greetingMessage || payload.message,
      mantraMsg,
      true,
      festHeader,
      210,
      310
    );
    const scheduleCardH = Math.max(
      hasSteps ? 268 : 196,
      Math.min(340, footerY - curY - autoMidMsgH - visitH - 16 - 16 - 14)
    );
    drawClippedBox(
      ctx,
      padX,
      curY,
      fullW,
      scheduleCardH,
      20,
      af ? hexToRgba(af.cardSurface, 0.9) : "rgba(22, 12, 16, 0.90)",
      af ? hexToRgba(af.accentPrimary, 0.54) : "rgba(251, 146, 60, 0.52)",
      1.8,
      () => {
        const innerPad = 22;
        const innerW = fullW - innerPad * 2;
        let sy = curY + 14;
        const headText = hasSteps ? trCard(lang, "॥ पावन पर्व क्रम एवं मुख्य पूजा चरण ॥", "|| Sacred Festival Schedule & Key Puja Steps ||", "|| Pavan Parv Kram Aur Mukhya Puja Charan ||") : trCard(lang, "॥ नक्षत्र, योग एवं विशेष पंचांग सार ॥", "|| Nakshatra, Yoga & Special Panchang Summary ||", "|| Nakshatra, Yog Aur Vishesh Panchang Saar ||");
        const hFit = fitSingleLine(ctx, headText, innerW, 800, 23, 12);
        ctx.textAlign = "center";
        ctx.textBaseline = "top";
        ctx.fillStyle = af ? af.accentSecondary : "#fdba74";
        ctx.font = `800 ${hFit.fontSize}px ${FONT_STACK}`;
        ctx.fillText(hFit.text, W / 2, sy);
        sy += hFit.fontSize + 12;
        if (hasSteps) {
          const sGapX = 14;
          const sGapY = 10;
          const sRows = Math.ceil(steps.length / 2);
          const sAvailH = Math.max(70, curY + scheduleCardH - sy - 14);
          const sBoxH = Math.floor((sAvailH - (sRows - 1) * sGapY) / sRows);
          const sBoxW = (innerW - sGapX) / 2;
          steps.forEach((stepText, idx) => {
            const col = idx % 2;
            const row = Math.floor(idx / 2);
            const isOddLast = steps.length % 2 === 1 && idx === steps.length - 1;
            const bx = isOddLast ? padX + innerPad : padX + innerPad + col * (sBoxW + sGapX);
            const bw = isOddLast ? innerW : sBoxW;
            const by = sy + row * (sBoxH + sGapY);
            ctx.save();
            ctx.fillStyle = af ? hexToRgba(af.sealMidHex, 0.85) : "rgba(42, 20, 10, 0.85)";
            drawRoundRect(ctx, bx, by, bw, sBoxH, 12);
            ctx.fill();
            ctx.strokeStyle = af ? hexToRgba(af.accentPrimary, 0.38) : "rgba(251, 191, 36, 0.34)";
            ctx.lineWidth = 1.2;
            drawRoundRect(ctx, bx, by, bw, sBoxH, 12);
            ctx.stroke();
            const stFit = fitAdaptiveHeading(
              ctx,
              `${idx + 1}. ${stepText}`,
              bw - 24,
              sBoxH - 10,
              700,
              24,
              12,
              1.3
            );
            ctx.textAlign = "left";
            ctx.textBaseline = "top";
            ctx.fillStyle = "#fffbeb";
            ctx.font = `700 ${stFit.fontSize}px ${FONT_STACK}`;
            const tot = stFit.lines.length * stFit.lineHeight;
            let tty = by + Math.max(4, (sBoxH - tot) / 2);
            for (const ln of stFit.lines) {
              ctx.fillText(ln, bx + 12, tty);
              tty += stFit.lineHeight;
            }
            ctx.restore();
          });
        } else {
          const noteText = fd.scheduleSummary || fd.vidhiHighlight;
          const nFit = fitWrappedBlock(ctx, noteText, innerW, scheduleCardH - 58, 700, 27, 13, 1.42);
          ctx.textAlign = "center";
          ctx.fillStyle = "#fef3c7";
          ctx.font = `700 ${nFit.fontSize}px ${FONT_STACK}`;
          const tot = nFit.lines.length * nFit.lineHeight;
          let ny = sy + Math.max(0, (curY + scheduleCardH - 12 - sy - tot) / 2);
          for (const ln of nFit.lines) {
            ctx.fillText(ln, W / 2, ny);
            ny += nFit.lineHeight;
          }
        }
      }
    );
    curY += scheduleCardH + 16;
    const midMsgH = Math.max(170, footerY - curY - visitH - 30);
    drawBottomMessageAndCtaBox(
      ctx,
      padX,
      curY,
      fullW,
      midMsgH,
      fd.greetingMessage || payload.message,
      mantraMsg,
      "rgba(40, 18, 8, 0.88)",
      "rgba(251, 146, 60, 0.56)",
      true,
      festHeader
    );
    curY += midMsgH + 16;
    drawWebappVisitStrip(ctx, padX, curY, fullW, footerY - curY - 14, payload, true, lang);
  } else {
    const msgH = Math.max(110, footerY - curY - 14);
    const squareMsg = fd.scheduleSummary || fd.greetingMessage || payload.message;
    const squareCta = fd.beejMantra ? `${trCard(lang, "मंत्र:", "Mantra:", "Mantra:")} ${cleanCompleteSentence(fd.beejMantra, 150)} • ${trCard(lang, "सम्पूर्ण पूजा विधि व सामग्री वेबऐप पर देखें", "View complete Puja Vidhi & Samagri on WebApp")}` : trCard(
      lang,
      "सम्पूर्ण पूजा विधि, सामग्री सूची, कथा एवं आरती देखने हेतु QR स्कैन करें",
      "Scan QR for complete Puja Vidhi, Samagri list, Katha & Aarti"
    );
    drawBottomMessageAndCtaBox(
      ctx,
      padX,
      curY,
      fullW,
      msgH,
      squareMsg,
      squareCta,
      "rgba(40, 18, 8, 0.86)",
      "rgba(251, 146, 60, 0.58)",
      false
    );
  }
}
function renderMandirVariant(ctx, payload, palette, layout, lang = "hi", deityImg = null) {
  const md = payload.mandirData;
  if (!md) {
    renderGenericCardVariant(ctx, payload, palette, layout, lang);
    return;
  }
  const { padX, contentTop, footerY, isVertical, width: W } = layout;
  const fullW = W - padX * 2;
  const af = activeCardFestiveRenderCtx?.isFestiveThemeActive ? activeCardFestiveRenderCtx : null;
  const accentGold = af ? af.accentPrimary : "#fbbf24";
  const accentSoft = af ? af.accentSecondary : "#fde68a";
  const [gr, gg, gb] = parseHexRgb(accentGold);
  let curY = contentTop + (isVertical ? 14 : 6);
  const portraitR = isVertical ? 156 : 112;
  const portraitCx = W / 2;
  const portraitCy = curY + portraitR + 8;
  ctx.save();
  const haloGrad = ctx.createRadialGradient(
    portraitCx,
    portraitCy,
    portraitR * 0.45,
    portraitCx,
    portraitCy,
    portraitR + (isVertical ? 58 : 40)
  );
  haloGrad.addColorStop(0, `rgba(${gr}, ${gg}, ${gb}, 0.56)`);
  haloGrad.addColorStop(0.55, `rgba(${gr}, ${gg}, ${gb}, 0.22)`);
  haloGrad.addColorStop(1, "rgba(0,0,0,0)");
  ctx.fillStyle = haloGrad;
  ctx.beginPath();
  ctx.arc(portraitCx, portraitCy, portraitR + (isVertical ? 58 : 40), 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = `rgba(${gr}, ${gg}, ${gb}, 0.42)`;
  ctx.lineWidth = 2.2;
  for (let i = 0; i < 24; i++) {
    const ang = i * Math.PI * 2 / 24;
    const r1 = portraitR + 8;
    const r2 = portraitR + (i % 2 === 0 ? 24 : 16);
    ctx.beginPath();
    ctx.moveTo(portraitCx + Math.cos(ang) * r1, portraitCy + Math.sin(ang) * r1);
    ctx.lineTo(portraitCx + Math.cos(ang) * r2, portraitCy + Math.sin(ang) * r2);
    ctx.stroke();
  }
  ctx.fillStyle = "#1b0b04";
  ctx.beginPath();
  ctx.arc(portraitCx, portraitCy, portraitR, 0, Math.PI * 2);
  ctx.fill();
  if (deityImg && deityImg.naturalWidth > 0 && deityImg.naturalHeight > 0) {
    ctx.save();
    ctx.beginPath();
    ctx.arc(portraitCx, portraitCy, portraitR - 4, 0, Math.PI * 2);
    ctx.clip();
    const diam = (portraitR - 4) * 2;
    const imgRatio = deityImg.naturalWidth / deityImg.naturalHeight;
    let drawW = diam;
    let drawH = diam;
    if (imgRatio > 1) {
      drawH = diam;
      drawW = diam * imgRatio;
    } else {
      drawW = diam;
      drawH = diam / imgRatio;
    }
    const drawX = portraitCx - drawW / 2;
    const drawY = portraitCy - portraitR + 4 - (drawH - diam) * 0.16;
    ctx.drawImage(deityImg, drawX, drawY, drawW, drawH);
    const innerFeather = ctx.createRadialGradient(
      portraitCx,
      portraitCy,
      portraitR * 0.62,
      portraitCx,
      portraitCy,
      portraitR - 3
    );
    innerFeather.addColorStop(0, "rgba(0,0,0,0)");
    innerFeather.addColorStop(1, "rgba(20, 8, 2, 0.42)");
    ctx.fillStyle = innerFeather;
    ctx.fillRect(portraitCx - portraitR, portraitCy - portraitR, portraitR * 2, portraitR * 2);
    ctx.restore();
  } else {
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#fef08a";
    ctx.font = `900 ${Math.round(portraitR * 0.72)}px ${FONT_STACK}`;
    ctx.fillText("ॐ", portraitCx, portraitCy + 4);
  }
  ctx.strokeStyle = accentGold;
  ctx.lineWidth = isVertical ? 6 : 5;
  ctx.beginPath();
  ctx.arc(portraitCx, portraitCy, portraitR, 0, Math.PI * 2);
  ctx.stroke();
  ctx.strokeStyle = "#fef9c3";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(portraitCx, portraitCy, portraitR + 6, 0, Math.PI * 2);
  ctx.stroke();
  ctx.restore();
  curY = portraitCy + portraitR + (isVertical ? 22 : 14);
  ctx.save();
  ctx.textAlign = "center";
  ctx.textBaseline = "top";
  const deityFit = fitAdaptiveHeading(
    ctx,
    `॥ ${md.deityName} ॥`,
    fullW - 12,
    isVertical ? 96 : 64,
    900,
    isVertical ? 46 : 36,
    18,
    1.18
  );
  ctx.fillStyle = "#fffbeb";
  ctx.font = `900 ${deityFit.fontSize}px ${FONT_STACK}`;
  for (const l of deityFit.lines) {
    ctx.fillText(l, W / 2, curY);
    curY += deityFit.lineHeight;
  }
  if (md.deitySubtitle) {
    curY += isVertical ? 6 : 4;
    const subFit = fitSingleLine(ctx, md.deitySubtitle, fullW - 24, 700, isVertical ? 24 : 19, 12);
    ctx.fillStyle = accentSoft;
    ctx.font = `700 ${subFit.fontSize}px ${FONT_STACK}`;
    ctx.fillText(subFit.text, W / 2, curY);
    curY += subFit.fontSize + (isVertical ? 12 : 8);
  } else {
    curY += isVertical ? 10 : 6;
  }
  if (md.devoteeName) {
    const devText = `${trCard(lang, "श्रद्धालु संकल्प:", "Devotee Blessing:", "Shraddhalu Sankalp:")} ${md.devoteeName}`;
    const devFit = fitSingleLine(ctx, devText, fullW - 44, 800, isVertical ? 22 : 18, 12);
    const pillW = Math.min(fullW - 24, ctx.measureText(devFit.text).width + 44);
    const pillH = isVertical ? 42 : 34;
    ctx.fillStyle = `rgba(${gr}, ${gg}, ${gb}, 0.18)`;
    drawRoundRect(ctx, (W - pillW) / 2, curY, pillW, pillH, pillH / 2);
    ctx.fill();
    ctx.strokeStyle = `rgba(${gr}, ${gg}, ${gb}, 0.65)`;
    ctx.lineWidth = 1.6;
    drawRoundRect(ctx, (W - pillW) / 2, curY, pillW, pillH, pillH / 2);
    ctx.stroke();
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#fef3c7";
    ctx.font = `800 ${devFit.fontSize}px ${FONT_STACK}`;
    ctx.fillText(devFit.text, W / 2, curY + pillH / 2 + 1);
    curY += pillH + (isVertical ? 12 : 8);
  }
  ctx.restore();
  const panchangStripH = isVertical ? 76 : 56;
  drawClippedBox(
    ctx,
    padX,
    curY,
    fullW,
    panchangStripH,
    18,
    af ? hexToRgba(af.cardSurface, 0.92) : "rgba(30, 16, 8, 0.92)",
    `rgba(${gr}, ${gg}, ${gb}, 0.56)`,
    1.8,
    () => {
      const stripStr = `${md.panchangDateLine}  •  ${md.tithiLine}`;
      const stripFit = fitAdaptiveHeading(
        ctx,
        stripStr,
        fullW - 36,
        panchangStripH - 12,
        800,
        isVertical ? 23 : 19,
        12,
        1.25
      );
      ctx.textAlign = "center";
      ctx.textBaseline = "top";
      ctx.fillStyle = accentSoft;
      ctx.font = `800 ${stripFit.fontSize}px ${FONT_STACK}`;
      const totalH = stripFit.lines.length * stripFit.lineHeight;
      let sy = curY + Math.max(6, (panchangStripH - totalH) / 2);
      for (const l of stripFit.lines) {
        ctx.fillText(l, W / 2, sy);
        sy += stripFit.lineHeight;
      }
    }
  );
  curY += panchangStripH + (isVertical ? 18 : 12);
  const visitH = isVertical ? 116 : 0;
  const remainingH = Math.max(150, footerY - curY - (isVertical ? visitH + 28 : 14));
  if (isVertical) {
    const mantraBoxH = Math.min(245, Math.max(175, Math.round(remainingH * 0.42)));
    const blessBoxH = Math.max(210, remainingH - mantraBoxH - 18);
    drawBottomMessageAndCtaBox(
      ctx,
      padX,
      curY,
      fullW,
      blessBoxH,
      md.blessingMessage,
      md.cardKind === "blessing" ? trCard(
        lang,
        "आरती एवं १०८ जप साधना पूर्ण • सर्वकार्य सिद्धि आशीर्वाद",
        "Aarti & 108 Japa Complete • Divine Grace Bestowed"
      ) : trCard(
        lang,
        "प्रातः-संध्या लाइव आरती व दर्शन — श्री डिजिटल मंदिर",
        "Daily Morning & Evening Live Darshan — Shri Digital Mandir"
      ),
      "rgba(28, 15, 7, 0.90)",
      `rgba(${gr}, ${gg}, ${gb}, 0.56)`,
      true,
      `॥ ${md.blessingTitle} ॥`
    );
    curY += blessBoxH + 18;
    drawHighlightCard(
      ctx,
      padX,
      curY,
      fullW,
      mantraBoxH,
      trCard(lang, "सिद्ध ध्यान एवं बीज मंत्र", "Sacred Dhyan & Beej Mantra"),
      md.mantraLine,
      palette,
      accentGold,
      "#fff8e7",
      true
    );
    curY += mantraBoxH + 16;
    drawWebappVisitStrip(ctx, padX, curY, fullW, footerY - curY - 12, payload, true, lang);
  } else {
    const ctaMantra = md.mantraLine ? `ॐ ${trCard(lang, "मंत्र:", "Mantra:")} ${cleanCompleteSentence(md.mantraLine, 145)}` : payload.ctaLine;
    drawBottomMessageAndCtaBox(
      ctx,
      padX,
      curY,
      fullW,
      remainingH,
      md.blessingMessage,
      ctaMantra,
      "rgba(28, 15, 7, 0.90)",
      `rgba(${gr}, ${gg}, ${gb}, 0.56)`,
      false,
      `॥ ${md.blessingTitle} ॥`
    );
  }
}
function renderGenericCardVariant(ctx, payload, palette, layout, lang = "hi") {
  const { padX, contentTop, footerY, isVertical, width: W } = layout;
  const fullW = W - padX * 2;
  let cursorY = contentTop + (isVertical ? 8 : 6);
  const af = activeCardFestiveRenderCtx?.isFestiveThemeActive ? activeCardFestiveRenderCtx : null;
  ctx.save();
  ctx.textAlign = "center";
  ctx.textBaseline = "top";
  ctx.fillStyle = "#fffbeb";
  const titleBlock = fitAdaptiveHeading(
    ctx,
    payload.title,
    fullW - 12,
    isVertical ? 140 : 106,
    900,
    isVertical ? 44 : 36,
    16,
    1.22
  );
  ctx.font = `900 ${titleBlock.fontSize}px ${FONT_STACK}`;
  for (const line of titleBlock.lines) {
    ctx.fillText(line, W / 2, cursorY);
    cursorY += titleBlock.lineHeight;
  }
  ctx.restore();
  if (payload.subtitle || payload.dateOrLocation) {
    const subStr = [payload.subtitle, payload.dateOrLocation].filter(Boolean).join("  •  ");
    cursorY += isVertical ? 10 : 6;
    ctx.save();
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    ctx.fillStyle = af ? af.accentSecondary : "#fcd34d";
    const subBlock = fitAdaptiveHeading(
      ctx,
      subStr,
      fullW - 18,
      isVertical ? 88 : 62,
      700,
      isVertical ? 25 : 21,
      12,
      1.26
    );
    ctx.font = `700 ${subBlock.fontSize}px ${FONT_STACK}`;
    for (const line of subBlock.lines) {
      ctx.fillText(line, W / 2, cursorY);
      cursorY += subBlock.lineHeight;
    }
    ctx.restore();
  }
  cursorY += isVertical ? 14 : 10;
  drawHorizontalDivider(ctx, cursorY, palette.accentLine);
  cursorY += isVertical ? 18 : 16;
  const defaultCta = trCard(
    lang,
    "आज ही आचार्य पण्डित शशांक शर्मा जी से अपना व्यक्तिगत वैदिक परामर्श प्राप्त करें",
    "Get your personal Vedic consultation from Acharya Pandit Shashank Sharma Ji today",
    "Aaj hi Acharya Pandit Shashank Sharma Ji se apna vyaktigat Vedic paramarsh prapt karein"
  );
  const genericHeader = trCard(
    lang,
    "॥ शास्त्रोक्त वैदिक मार्गदर्शन एवं समाधान ॥",
    "|| Shastriya Vedic Guidance & Remedies ||",
    "|| Shastriya Vedic Margdarshan Aur Samadhan ||"
  );
  const visitH = isVertical ? 114 : 0;
  const autoMsgH = isVertical ? measureAutoMessageBoxHeight(
    ctx,
    fullW,
    payload.message,
    payload.ctaLine || defaultCta,
    true,
    genericHeader,
    215,
    320
  ) : 195;
  const highlights = (payload.highlights || []).filter((h) => h && h.label && h.value).slice(0, 6);
  const reserveBelow = isVertical ? autoMsgH + visitH + 34 : 195;
  const maxHighlightSpace = Math.max(0, footerY - cursorY - reserveBelow - 18);
  if (highlights.length > 0 && maxHighlightSpace >= 100) {
    const cols = highlights.length === 1 ? 1 : 2;
    const rows = Math.ceil(highlights.length / cols);
    const gapX = 18;
    const gapY = isVertical ? 18 : 14;
    const cardW = cols === 1 ? fullW : (fullW - gapX) / 2;
    const idealH = isVertical ? rows >= 3 ? 230 : rows === 2 ? 295 : 340 : rows >= 3 ? 110 : rows === 2 ? 148 : 168;
    const cardH = Math.min(idealH, Math.floor((maxHighlightSpace - (rows - 1) * gapY) / rows));
    for (let i = 0; i < highlights.length; i++) {
      const colIdx = i % cols;
      const rowIdx = Math.floor(i / cols);
      const isOddLastCard = cols === 2 && highlights.length % 2 === 1 && i === highlights.length - 1;
      const item = highlights[i];
      const x = isOddLastCard ? padX : padX + colIdx * (cardW + gapX);
      const wThis = isOddLastCard ? fullW : cardW;
      const y = cursorY + rowIdx * (cardH + gapY);
      drawHighlightCard(
        ctx,
        x,
        y,
        wThis,
        cardH,
        item.label,
        cleanCompleteSentence(item.value, isVertical ? 280 : 195),
        palette,
        palette.accentLine,
        "#f8fafc",
        isVertical
      );
    }
    cursorY += rows * cardH + (rows - 1) * gapY + (isVertical ? 18 : 16);
  }
  if (isVertical) {
    const availableMsgH = Math.max(175, footerY - cursorY - visitH - 30);
    drawBottomMessageAndCtaBox(
      ctx,
      padX,
      cursorY,
      fullW,
      availableMsgH,
      payload.message,
      payload.ctaLine || defaultCta,
      "rgba(28, 18, 8, 0.88)",
      "rgba(251, 191, 36, 0.56)",
      true,
      genericHeader
    );
    cursorY += availableMsgH + 16;
    drawWebappVisitStrip(ctx, padX, cursorY, fullW, footerY - cursorY - 14, payload, true, lang);
  } else {
    const availableMsgH = Math.max(130, footerY - cursorY - 14);
    drawBottomMessageAndCtaBox(
      ctx,
      padX,
      cursorY,
      fullW,
      availableMsgH,
      payload.message,
      payload.ctaLine || defaultCta,
      "rgba(28, 18, 8, 0.88)",
      "rgba(251, 191, 36, 0.56)",
      false
    );
  }
}
function sanitizeCardPayload(payload) {
  return {
    ...payload,
    badge: sanitizeVedicCardText(payload.badge),
    title: sanitizeVedicCardText(payload.title),
    subtitle: payload.subtitle ? sanitizeVedicCardText(payload.subtitle) : void 0,
    dateOrLocation: payload.dateOrLocation ? sanitizeVedicCardText(payload.dateOrLocation) : void 0,
    message: sanitizeVedicCardText(payload.message),
    ctaLine: payload.ctaLine ? sanitizeVedicCardText(payload.ctaLine) : void 0,
    webappHeading: payload.webappHeading ? sanitizeVedicCardText(payload.webappHeading) : void 0,
    webappFeatures: payload.webappFeatures?.map((f) => sanitizeVedicCardText(f)).filter(Boolean),
    highlights: payload.highlights?.map((h) => ({
      label: sanitizeVedicCardText(h.label),
      value: sanitizeVedicCardText(h.value)
    })),
    festivalData: payload.festivalData ? {
      ...payload.festivalData,
      festivalName: sanitizeVedicCardText(payload.festivalData.festivalName),
      pujaDate: sanitizeVedicCardText(payload.festivalData.pujaDate),
      tithiLabel: sanitizeVedicCardText(payload.festivalData.tithiLabel),
      muhuratLabel: payload.festivalData.muhuratLabel ? sanitizeVedicCardText(payload.festivalData.muhuratLabel) : void 0,
      muhuratTime: sanitizeVedicCardText(payload.festivalData.muhuratTime),
      secondaryMuhuratLabel: payload.festivalData.secondaryMuhuratLabel ? sanitizeVedicCardText(payload.festivalData.secondaryMuhuratLabel) : void 0,
      secondaryMuhuratTime: payload.festivalData.secondaryMuhuratTime ? sanitizeVedicCardText(payload.festivalData.secondaryMuhuratTime) : void 0,
      nakshatraYoga: payload.festivalData.nakshatraYoga ? sanitizeVedicCardText(payload.festivalData.nakshatraYoga) : void 0,
      shastraRef: payload.festivalData.shastraRef ? sanitizeVedicCardText(payload.festivalData.shastraRef) : void 0,
      beejMantra: payload.festivalData.beejMantra ? sanitizeVedicCardText(payload.festivalData.beejMantra) : void 0,
      deityName: payload.festivalData.deityName ? sanitizeVedicCardText(payload.festivalData.deityName) : void 0,
      vidhiHighlight: sanitizeVedicCardText(payload.festivalData.vidhiHighlight),
      scheduleSummary: payload.festivalData.scheduleSummary ? sanitizeVedicCardText(payload.festivalData.scheduleSummary) : void 0,
      vidhiSteps: payload.festivalData.vidhiSteps?.map((s) => sanitizeVedicCardText(s)).filter(Boolean),
      greetingMessage: sanitizeVedicCardText(payload.festivalData.greetingMessage)
    } : void 0,
    panchangData: payload.panchangData ? {
      ...payload.panchangData,
      cityHindi: sanitizeVedicCardText(payload.panchangData.cityHindi),
      dateHindi: sanitizeVedicCardText(payload.panchangData.dateHindi),
      hinduDate: sanitizeVedicCardText(payload.panchangData.hinduDate),
      paksha: sanitizeVedicCardText(payload.panchangData.paksha),
      samvatText: payload.panchangData.samvatText ? sanitizeVedicCardText(payload.panchangData.samvatText) : void 0,
      festivalName: payload.panchangData.festivalName ? sanitizeVedicCardText(payload.panchangData.festivalName) : void 0,
      specialNote: payload.panchangData.specialNote ? sanitizeVedicCardText(payload.panchangData.specialNote) : void 0,
      abhijitWarning: payload.panchangData.abhijitWarning ? sanitizeVedicCardText(payload.panchangData.abhijitWarning) : void 0,
      bhadraKaal: payload.panchangData.bhadraKaal ? sanitizeVedicCardText(payload.panchangData.bhadraKaal) : void 0,
      panchakKaal: payload.panchangData.panchakKaal ? sanitizeVedicCardText(payload.panchangData.panchakKaal) : void 0,
      sarvarthaSiddhiYoga: payload.panchangData.sarvarthaSiddhiYoga ? sanitizeVedicCardText(payload.panchangData.sarvarthaSiddhiYoga) : void 0,
      eclipsedChoghadiyaLine: payload.panchangData.eclipsedChoghadiyaLine ? sanitizeVedicCardText(payload.panchangData.eclipsedChoghadiyaLine) : void 0,
      pureAshubhChoghadiyaLine: payload.panchangData.pureAshubhChoghadiyaLine ? sanitizeVedicCardText(payload.panchangData.pureAshubhChoghadiyaLine) : void 0,
      gulikaKaal: payload.panchangData.gulikaKaal ? sanitizeVedicCardText(payload.panchangData.gulikaKaal) : void 0,
      gandmoolNakshatra: payload.panchangData.gandmoolNakshatra ? sanitizeVedicCardText(payload.panchangData.gandmoolNakshatra) : void 0,
      sankrantiPunyaKaal: payload.panchangData.sankrantiPunyaKaal ? sanitizeVedicCardText(payload.panchangData.sankrantiPunyaKaal) : void 0,
      diwaliPradoshKaal: payload.panchangData.diwaliPradoshKaal ? sanitizeVedicCardText(payload.panchangData.diwaliPradoshKaal) : void 0,
      diwaliVrishabhaLagna: payload.panchangData.diwaliVrishabhaLagna ? sanitizeVedicCardText(payload.panchangData.diwaliVrishabhaLagna) : void 0,
      kartikadiFootnote: payload.panchangData.kartikadiFootnote ? sanitizeVedicCardText(payload.panchangData.kartikadiFootnote) : void 0,
      deltaTNote: payload.panchangData.deltaTNote ? sanitizeVedicCardText(payload.panchangData.deltaTNote) : void 0
    } : void 0,
    rashifalData: payload.rashifalData ? {
      ...payload.rashifalData,
      vaarHindi: payload.rashifalData.vaarHindi ? sanitizeVedicCardText(payload.rashifalData.vaarHindi) : void 0,
      tithiName: payload.rashifalData.tithiName ? sanitizeVedicCardText(payload.rashifalData.tithiName) : void 0,
      festivalName: payload.rashifalData.festivalName ? sanitizeVedicCardText(payload.rashifalData.festivalName) : void 0,
      careerSummary: sanitizeVedicCardText(payload.rashifalData.careerSummary),
      wealthFamilySummary: sanitizeVedicCardText(payload.rashifalData.wealthFamilySummary),
      remedySummary: sanitizeVedicCardText(payload.rashifalData.remedySummary),
      gocharNote: payload.rashifalData.gocharNote ? sanitizeVedicCardText(payload.rashifalData.gocharNote) : void 0
    } : void 0,
    all12RashifalData: payload.all12RashifalData ? {
      ...payload.all12RashifalData,
      modeLabel: sanitizeVedicCardText(payload.all12RashifalData.modeLabel),
      dateHindi: sanitizeVedicCardText(payload.all12RashifalData.dateHindi),
      vaarHindi: payload.all12RashifalData.vaarHindi ? sanitizeVedicCardText(payload.all12RashifalData.vaarHindi) : void 0,
      panchangLine: payload.all12RashifalData.panchangLine ? sanitizeVedicCardText(payload.all12RashifalData.panchangLine) : void 0,
      festivalName: payload.all12RashifalData.festivalName ? sanitizeVedicCardText(payload.all12RashifalData.festivalName) : void 0,
      tithiName: payload.all12RashifalData.tithiName ? sanitizeVedicCardText(payload.all12RashifalData.tithiName) : void 0,
      items: payload.all12RashifalData.items.map((it) => ({
        ...it,
        rashiNameHi: sanitizeVedicCardText(it.rashiNameHi),
        summaryHi: sanitizeVedicCardText(it.summaryHi),
        luckyNumber: sanitizeVedicCardText(it.luckyNumber),
        luckyColor: sanitizeVedicCardText(it.luckyColor)
      }))
    } : void 0,
    milanData: payload.milanData ? {
      ...payload.milanData,
      summary: sanitizeVedicCardText(payload.milanData.summary)
    } : void 0,
    naamRashiData: payload.naamRashiData ? {
      ...payload.naamRashiData,
      natureSummary: sanitizeVedicCardText(payload.naamRashiData.natureSummary)
    } : void 0,
    mandirData: payload.mandirData ? {
      ...payload.mandirData,
      deityName: sanitizeVedicCardText(payload.mandirData.deityName),
      deitySubtitle: payload.mandirData.deitySubtitle ? sanitizeVedicCardText(payload.mandirData.deitySubtitle) : void 0,
      panchangDateLine: sanitizeVedicCardText(payload.mandirData.panchangDateLine),
      tithiLine: sanitizeVedicCardText(payload.mandirData.tithiLine),
      blessingTitle: sanitizeVedicCardText(payload.mandirData.blessingTitle),
      blessingMessage: sanitizeVedicCardText(payload.mandirData.blessingMessage),
      mantraLine: sanitizeVedicCardText(payload.mandirData.mantraLine),
      devoteeName: payload.mandirData.devoteeName ? sanitizeVedicCardText(payload.mandirData.devoteeName) : void 0
    } : void 0
  };
}
function localizeVedicCardPayload(rawPayload, targetLang) {
  const lang = targetLang || rawPayload.language || getActiveAppLanguage();
  const sanitized = sanitizeCardPayload(rawPayload);
  if (lang === "hi") {
    return { ...sanitized, language: "hi" };
  }
  const trS = (val) => val ? translateCardString(val, lang) : val;
  return {
    ...sanitized,
    language: lang,
    badge: translateCardString(sanitized.badge, lang),
    title: translateCardString(sanitized.title, lang),
    subtitle: sanitized.subtitle ? translateCardString(sanitized.subtitle, lang) : void 0,
    dateOrLocation: sanitized.dateOrLocation ? translateCardString(sanitized.dateOrLocation, lang) : void 0,
    message: translateCardString(sanitized.message, lang),
    ctaLine: sanitized.ctaLine ? translateCardString(sanitized.ctaLine, lang) : void 0,
    webappHeading: sanitized.webappHeading ? translateCardString(sanitized.webappHeading, lang) : void 0,
    webappFeatures: sanitized.webappFeatures?.map((f) => translateCardString(f, lang)).filter(Boolean),
    highlights: sanitized.highlights?.map((h) => ({
      label: translateCardString(h.label, lang),
      value: translateCardString(h.value, lang)
    })),
    rashifalData: sanitized.rashifalData ? {
      ...sanitized.rashifalData,
      rashiName: translateCardString(sanitized.rashifalData.rashiName, lang),
      swami: translateCardString(sanitized.rashifalData.swami, lang),
      element: translateCardString(sanitized.rashifalData.element, lang),
      nakshatra: trS(sanitized.rashifalData.nakshatra),
      todayGocharNakshatra: trS(sanitized.rashifalData.todayGocharNakshatra),
      dateHindi: translateCardString(sanitized.rashifalData.dateHindi, lang),
      vaarHindi: trS(sanitized.rashifalData.vaarHindi),
      tithiName: trS(sanitized.rashifalData.tithiName),
      festivalName: trS(sanitized.rashifalData.festivalName),
      modeLabel: translateCardString(sanitized.rashifalData.modeLabel, lang),
      careerSummary: translateCardString(sanitized.rashifalData.careerSummary, lang),
      wealthFamilySummary: translateCardString(sanitized.rashifalData.wealthFamilySummary, lang),
      remedySummary: translateCardString(sanitized.rashifalData.remedySummary, lang),
      luckyColor: translateCardString(sanitized.rashifalData.luckyColor, lang),
      luckyDirection: translateCardString(sanitized.rashifalData.luckyDirection, lang),
      luckyTime: translateCardString(sanitized.rashifalData.luckyTime, lang),
      ratna: translateCardString(sanitized.rashifalData.ratna, lang),
      gocharNote: trS(sanitized.rashifalData.gocharNote)
    } : void 0,
    all12RashifalData: sanitized.all12RashifalData ? {
      ...sanitized.all12RashifalData,
      modeLabel: translateCardString(sanitized.all12RashifalData.modeLabel, lang),
      dateHindi: translateCardString(sanitized.all12RashifalData.dateHindi, lang),
      vaarHindi: trS(sanitized.all12RashifalData.vaarHindi),
      panchangLine: trS(sanitized.all12RashifalData.panchangLine),
      festivalName: trS(sanitized.all12RashifalData.festivalName),
      tithiName: trS(sanitized.all12RashifalData.tithiName),
      items: sanitized.all12RashifalData.items.map((it) => ({
        ...it,
        rashiNameHi: translateCardString(it.rashiNameHi, lang),
        summaryHi: translateCardString(it.summaryHi, lang),
        luckyColor: translateCardString(it.luckyColor, lang)
      }))
    } : void 0,
    panchangData: sanitized.panchangData ? {
      ...sanitized.panchangData,
      cityHindi: translateCardString(sanitized.panchangData.cityHindi, lang),
      dateHindi: translateCardString(sanitized.panchangData.dateHindi, lang),
      vaarHindi: translateCardString(sanitized.panchangData.vaarHindi, lang),
      hinduDate: translateCardString(sanitized.panchangData.hinduDate, lang),
      paksha: translateCardString(sanitized.panchangData.paksha, lang),
      tithi: translateCardString(sanitized.panchangData.tithi, lang),
      tithiEndTime: trS(sanitized.panchangData.tithiEndTime),
      nakshatra: translateCardString(sanitized.panchangData.nakshatra, lang),
      nakshatraEndTime: trS(sanitized.panchangData.nakshatraEndTime),
      yoga: translateCardString(sanitized.panchangData.yoga, lang),
      karana: trS(sanitized.panchangData.karana),
      sunrise: translateCardString(sanitized.panchangData.sunrise, lang),
      sunset: translateCardString(sanitized.panchangData.sunset, lang),
      abhijitMuhurat: translateCardString(sanitized.panchangData.abhijitMuhurat, lang),
      abhijitWarning: trS(sanitized.panchangData.abhijitWarning),
      regionalTraditionBadge: trS(sanitized.panchangData.regionalTraditionBadge),
      amritKaal: trS(sanitized.panchangData.amritKaal),
      rahuKaal: translateCardString(sanitized.panchangData.rahuKaal, lang),
      bhadraKaal: trS(sanitized.panchangData.bhadraKaal),
      panchakKaal: trS(sanitized.panchangData.panchakKaal),
      sarvarthaSiddhiYoga: trS(sanitized.panchangData.sarvarthaSiddhiYoga),
      sankrantiName: trS(sanitized.panchangData.sankrantiName),
      chandraRashi: trS(sanitized.panchangData.chandraRashi),
      dishaShool: trS(sanitized.panchangData.dishaShool),
      dishaShoolRemedy: trS(sanitized.panchangData.dishaShoolRemedy),
      choghadiyaSummary: trS(sanitized.panchangData.choghadiyaSummary),
      nightChoghadiyaSummary: trS(sanitized.panchangData.nightChoghadiyaSummary),
      eclipsedChoghadiyaLine: trS(sanitized.panchangData.eclipsedChoghadiyaLine),
      pureAshubhChoghadiyaLine: trS(sanitized.panchangData.pureAshubhChoghadiyaLine),
      gulikaKaal: trS(sanitized.panchangData.gulikaKaal),
      gandmoolNakshatra: trS(sanitized.panchangData.gandmoolNakshatra),
      sankrantiPunyaKaal: trS(sanitized.panchangData.sankrantiPunyaKaal),
      diwaliPradoshKaal: trS(sanitized.panchangData.diwaliPradoshKaal),
      diwaliVrishabhaLagna: trS(sanitized.panchangData.diwaliVrishabhaLagna),
      kartikadiFootnote: trS(sanitized.panchangData.kartikadiFootnote),
      deltaTNote: trS(sanitized.panchangData.deltaTNote),
      samvatText: trS(sanitized.panchangData.samvatText),
      festivalName: trS(sanitized.panchangData.festivalName),
      shastricInsight: trS(sanitized.panchangData.shastricInsight),
      specialNote: trS(sanitized.panchangData.specialNote)
    } : void 0,
    milanData: sanitized.milanData ? {
      ...sanitized.milanData,
      boyRashi: translateCardString(sanitized.milanData.boyRashi, lang),
      boyNakshatra: translateCardString(sanitized.milanData.boyNakshatra, lang),
      girlRashi: translateCardString(sanitized.milanData.girlRashi, lang),
      girlNakshatra: translateCardString(sanitized.milanData.girlNakshatra, lang),
      verdict: translateCardString(sanitized.milanData.verdict, lang),
      manglikStatus: translateCardString(sanitized.milanData.manglikStatus, lang),
      lagnaMatch: translateCardString(sanitized.milanData.lagnaMatch, lang),
      nadiStatus: trS(sanitized.milanData.nadiStatus),
      summary: translateCardString(sanitized.milanData.summary, lang)
    } : void 0,
    kundaliData: sanitized.kundaliData ? {
      ...sanitized.kundaliData,
      place: translateCardString(sanitized.kundaliData.place, lang),
      lagna: translateCardString(sanitized.kundaliData.lagna, lang),
      lagnaLord: translateCardString(sanitized.kundaliData.lagnaLord, lang),
      moonRashi: translateCardString(sanitized.kundaliData.moonRashi, lang),
      nakshatra: translateCardString(sanitized.kundaliData.nakshatra, lang),
      mahadasha: translateCardString(sanitized.kundaliData.mahadasha, lang),
      ratna: translateCardString(sanitized.kundaliData.ratna, lang),
      ishtaDevta: translateCardString(sanitized.kundaliData.ishtaDevta, lang),
      manglikSeverity: translateCardString(sanitized.kundaliData.manglikSeverity, lang),
      gana: translateCardString(sanitized.kundaliData.gana, lang),
      nadi: translateCardString(sanitized.kundaliData.nadi, lang)
    } : void 0,
    naamRashiData: sanitized.naamRashiData ? {
      ...sanitized.naamRashiData,
      rashiHi: translateCardString(sanitized.naamRashiData.rashiHi, lang),
      lordHi: translateCardString(sanitized.naamRashiData.lordHi, lang),
      nakshatraHi: translateCardString(sanitized.naamRashiData.nakshatraHi, lang),
      gemstoneHi: translateCardString(sanitized.naamRashiData.gemstoneHi, lang),
      luckyDayHi: translateCardString(sanitized.naamRashiData.luckyDayHi, lang),
      luckyColorsHi: translateCardString(sanitized.naamRashiData.luckyColorsHi, lang),
      elementHi: translateCardString(sanitized.naamRashiData.elementHi, lang),
      peakYears: translateCardString(sanitized.naamRashiData.peakYears, lang),
      natureSummary: translateCardString(sanitized.naamRashiData.natureSummary, lang)
    } : void 0,
    festivalData: sanitized.festivalData ? {
      ...sanitized.festivalData,
      festivalName: translateCardString(sanitized.festivalData.festivalName, lang),
      pujaDate: translateCardString(sanitized.festivalData.pujaDate, lang),
      tithiLabel: translateCardString(sanitized.festivalData.tithiLabel, lang),
      muhuratLabel: trS(sanitized.festivalData.muhuratLabel),
      muhuratTime: translateCardString(sanitized.festivalData.muhuratTime, lang),
      secondaryMuhuratLabel: trS(sanitized.festivalData.secondaryMuhuratLabel),
      secondaryMuhuratTime: trS(sanitized.festivalData.secondaryMuhuratTime),
      nakshatraYoga: trS(sanitized.festivalData.nakshatraYoga),
      shastraRef: trS(sanitized.festivalData.shastraRef),
      deityName: trS(sanitized.festivalData.deityName),
      vidhiHighlight: translateCardString(sanitized.festivalData.vidhiHighlight, lang),
      scheduleSummary: trS(sanitized.festivalData.scheduleSummary),
      vidhiSteps: sanitized.festivalData.vidhiSteps?.map((s) => translateCardString(s, lang)).filter(Boolean),
      greetingMessage: translateCardString(sanitized.festivalData.greetingMessage, lang)
    } : void 0,
    mandirData: sanitized.mandirData ? {
      ...sanitized.mandirData,
      deityName: translateCardString(sanitized.mandirData.deityName, lang),
      deitySubtitle: trS(sanitized.mandirData.deitySubtitle),
      panchangDateLine: translateCardString(sanitized.mandirData.panchangDateLine, lang),
      tithiLine: translateCardString(sanitized.mandirData.tithiLine, lang),
      blessingTitle: translateCardString(sanitized.mandirData.blessingTitle, lang),
      blessingMessage: translateCardString(sanitized.mandirData.blessingMessage, lang),
      devoteeName: trS(sanitized.mandirData.devoteeName)
    } : void 0
  };
}
const EXPORT_PIXEL_RATIO = 1;
const CARD_EXPORT_QUALITY = 0.9;
async function exportOptimizedCanvasImage(canvas) {
  const testWebpUrl = canvas.toDataURL("image/webp", CARD_EXPORT_QUALITY);
  const supportsWebp = testWebpUrl.startsWith("data:image/webp");
  const mimeType = supportsWebp ? "image/webp" : "image/jpeg";
  const ext = supportsWebp ? "webp" : "jpg";
  const dataUrl = supportsWebp ? testWebpUrl : canvas.toDataURL("image/jpeg", CARD_EXPORT_QUALITY);
  const blob = await new Promise(
    (resolve) => canvas.toBlob((b) => resolve(b), mimeType, CARD_EXPORT_QUALITY)
  );
  return { dataUrl, blob, mimeType, ext };
}
async function generateVedicShareCard(rawPayload, aspect = "9:16", languageOverride, liveFestiveOverride) {
  const lang = languageOverride || rawPayload.language || getActiveAppLanguage();
  const payload = localizeVedicCardPayload(rawPayload, lang);
  const layout = getCardLayoutSpec(aspect);
  const [, logoImg, deityImg, panditImg] = await Promise.all([
    ensureFontsReady(),
    loadBrandLogoImage(),
    (async () => {
      if (payload.variant !== "mandir" || !payload.mandirData) return null;
      const primary = payload.mandirData.deityImageSrc ? await loadImageWithTimeout(payload.mandirData.deityImageSrc, 4500) : null;
      if (primary) return primary;
      if (payload.mandirData.deityFallbackSrc) {
        return loadImageWithTimeout(payload.mandirData.deityFallbackSrc, 1500);
      }
      return null;
    })(),
    payload.variant === "all12rashifal" ? loadPanditPhotoImage() : Promise.resolve(null)
  ]);
  const canvas = document.createElement("canvas");
  canvas.width = layout.width * EXPORT_PIXEL_RATIO;
  canvas.height = layout.height * EXPORT_PIXEL_RATIO;
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    throw new Error("Canvas 2D context unavailable");
  }
  ctx.scale(EXPORT_PIXEL_RATIO, EXPORT_PIXEL_RATIO);
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";
  const variant = payload.variant || "page";
  const festiveCtx = resolveCardFestiveContext(variant, liveFestiveOverride);
  const palette = festiveCtx.palette;
  activeCardFestiveRenderCtx = festiveCtx;
  const { fullUrl: canonicalShareUrl } = normalizeProductionCardUrl(
    payload.shareUrl,
    payload.fileNameSlug
  );
  try {
    drawCommonFrame(
      ctx,
      palette,
      payload.badge,
      logoImg,
      layout,
      canonicalShareUrl,
      lang,
      festiveCtx,
      payload
    );
    switch (variant) {
      case "rashifal":
        renderRashifalVariant(ctx, payload, palette, layout, lang);
        break;
      case "all12rashifal":
        renderAll12RashifalVariant(ctx, payload, palette, layout, lang, panditImg);
        break;
      case "panchang":
        renderPanchangVariant(ctx, payload, palette, layout, lang);
        break;
      case "milan":
        renderMilanVariant(ctx, payload, palette, layout, lang);
        break;
      case "kundali":
        renderKundaliVariant(ctx, payload, palette, layout, lang);
        break;
      case "naamrashi":
        renderNaamRashiVariant(ctx, payload, palette, layout, lang);
        break;
      case "festival":
        renderFestivalVariant(ctx, payload, palette, layout, lang);
        break;
      case "mandir":
        renderMandirVariant(ctx, payload, palette, layout, lang, deityImg);
        break;
      case "gochar":
      case "page":
      default:
        renderGenericCardVariant(ctx, payload, palette, layout, lang);
        break;
    }
  } finally {
    activeCardFestiveRenderCtx = null;
  }
  const { dataUrl, blob, mimeType, ext } = await exportOptimizedCanvasImage(canvas);
  const safeSlug = (payload.fileNameSlug || "panditji-online-card").toLowerCase().replace(/[^a-z0-9-_]/g, "-").replace(/-+/g, "-").slice(0, 48);
  const aspectSuffix = aspect === "9:16" ? "-status-9x16" : "-square-1x1";
  return {
    dataUrl,
    blob,
    mimeType,
    fileName: `${safeSlug}${aspectSuffix}.${ext}`,
    aspect,
    width: canvas.width,
    height: canvas.height
  };
}
const CRC32_TABLE = (() => {
  const table = new Uint32Array(256);
  for (let i = 0; i < 256; i++) {
    let c = i;
    for (let k = 0; k < 8; k++) {
      c = (c & 1) !== 0 ? 3988292384 ^ c >>> 1 : c >>> 1;
    }
    table[i] = c >>> 0;
  }
  return table;
})();
function computeCrc32(bytes) {
  let crc = 4294967295;
  for (let i = 0; i < bytes.length; i++) {
    crc = CRC32_TABLE[(crc ^ bytes[i]) & 255] ^ crc >>> 8;
  }
  return (crc ^ 4294967295) >>> 0;
}
function createStoreZipBlob(entries) {
  const encoder = new TextEncoder();
  const localParts = [];
  const centralParts = [];
  let offset = 0;
  const now = /* @__PURE__ */ new Date();
  const dosTime = (now.getHours() & 31) << 11 | (now.getMinutes() & 63) << 5 | now.getSeconds() >> 1 & 31;
  const dosDate = (Math.max(1980, now.getFullYear()) - 1980 & 127) << 9 | (now.getMonth() + 1 & 15) << 5 | now.getDate() & 31;
  for (const entry of entries) {
    const nameBytes = encoder.encode(entry.name);
    const data = entry.data;
    const crc = computeCrc32(data);
    const localHeader = new Uint8Array(30 + nameBytes.length);
    const lv = new DataView(localHeader.buffer);
    lv.setUint32(0, 67324752, true);
    lv.setUint16(4, 20, true);
    lv.setUint16(6, 2048, true);
    lv.setUint16(8, 0, true);
    lv.setUint16(10, dosTime, true);
    lv.setUint16(12, dosDate, true);
    lv.setUint32(14, crc, true);
    lv.setUint32(18, data.length, true);
    lv.setUint32(22, data.length, true);
    lv.setUint16(26, nameBytes.length, true);
    lv.setUint16(28, 0, true);
    localHeader.set(nameBytes, 30);
    const centralHeader = new Uint8Array(46 + nameBytes.length);
    const cv = new DataView(centralHeader.buffer);
    cv.setUint32(0, 33639248, true);
    cv.setUint16(4, 20, true);
    cv.setUint16(6, 20, true);
    cv.setUint16(8, 2048, true);
    cv.setUint16(10, 0, true);
    cv.setUint16(12, dosTime, true);
    cv.setUint16(14, dosDate, true);
    cv.setUint32(16, crc, true);
    cv.setUint32(20, data.length, true);
    cv.setUint32(24, data.length, true);
    cv.setUint16(28, nameBytes.length, true);
    cv.setUint16(30, 0, true);
    cv.setUint16(32, 0, true);
    cv.setUint16(34, 0, true);
    cv.setUint16(36, 0, true);
    cv.setUint32(38, 0, true);
    cv.setUint32(42, offset, true);
    centralHeader.set(nameBytes, 46);
    localParts.push(localHeader, data);
    centralParts.push(centralHeader);
    offset += localHeader.length + data.length;
  }
  let centralSize = 0;
  for (const part of centralParts) centralSize += part.length;
  const endRecord = new Uint8Array(22);
  const ev = new DataView(endRecord.buffer);
  ev.setUint32(0, 101010256, true);
  ev.setUint16(4, 0, true);
  ev.setUint16(6, 0, true);
  ev.setUint16(8, entries.length, true);
  ev.setUint16(10, entries.length, true);
  ev.setUint32(12, centralSize, true);
  ev.setUint32(16, offset, true);
  ev.setUint16(20, 0, true);
  const zipBufferParts = [
    ...localParts.map((u) => u.buffer),
    ...centralParts.map((u) => u.buffer),
    endRecord.buffer
  ];
  return new Blob(zipBufferParts, { type: "application/zip" });
}
async function generateAll12RashiCardsZip(payloads, aspect, language, liveFestiveOverride, zipDateDDMMYYYY, onProgress) {
  const entries = [];
  const total = payloads.length;
  for (let i = 0; i < total; i++) {
    const card = await generateVedicShareCard(payloads[i], aspect, language, liveFestiveOverride);
    let bytes;
    if (card.blob) {
      bytes = new Uint8Array(await card.blob.arrayBuffer());
    } else {
      const b64 = card.dataUrl.split(",")[1] || "";
      const bin = atob(b64);
      bytes = new Uint8Array(bin.length);
      for (let j = 0; j < bin.length; j++) bytes[j] = bin.charCodeAt(j);
    }
    const prefix = String(i + 1).padStart(2, "0");
    entries.push({ name: `${prefix}-${card.fileName}`, data: bytes });
    onProgress?.(i + 1, total);
  }
  const safeDate = (zipDateDDMMYYYY || "today").replace(/[^0-9A-Za-z-]/g, "-");
  const blob = createStoreZipBlob(entries);
  return {
    blob,
    fileName: `12-Rashi-Cards-${safeDate}.zip`,
    count: entries.length
  };
}
export {
  cleanCompleteSentence,
  createStoreZipBlob,
  generateAll12RashiCardsZip,
  generateVedicShareCard,
  getActiveAppLanguage,
  localizeVedicCardPayload,
  normalizeProductionCardUrl,
  sanitizeVedicCardText,
  splitCompleteSentences
};
