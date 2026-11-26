import { aG as computeEphemerisSnapshot, b0 as formatPlanetLabel } from "./panchang-core-24ia-akc.js";
import { a8 as BRAND_CONFIG, q as PANDIT_AVATAR_THUMB, t as translateVedicHindiToEnglish } from "./index-AQ5SI3vl.js";
import { c as computeBhavaSphutTable, g as getLagnaGemstoneAndRudraksha, e as ensurePdfLibrariesLoaded, b as applyHtml2CanvasDevanagariFix, s as sanitizeFileName, w as waitForPdfDevanagariFontsReady } from "./pdfReportExporter-Cwf3NDiH.js";
import { R as RASHI_12_REFERENCE, G as GRAHA_LEGEND_ITEMS, C as CHART_EXPLAINERS, T as TABLE_HOW_TO_READ_GUIDES, a as RASHI_VS_BHAVA_EXPLAINER } from "./SampurnKundaliSection-DylTqbv-.js";
import { Q as QRCode } from "./browser-CBlYJE2W.js";
import "./vendor-astronomy-C8JZdkQu.js";
import "./vendor-react-CCbeDaYX.js";
import "./vendor-pdf-CpPyS1re.js";
import "./vendor-icons-Bk5Rg8-9.js";
import "./seo-core-DnNehtWz.js";
import "./VedicDateInput-QzCgtRnr.js";
import "./VedicTripleCheckBadge-B_j2EZJj.js";
import "./vedicTripleCheck-C0ip0Qtr.js";
import "./BirthPlaceGpsButton-BKE2rBQq.js";
const VEDIC_BOOK_THEME = {
  saffron: "#FF6F00",
  saffronDeep: "#C2410C",
  saffronSoft: "#FFF3E0",
  templeGold: "#D4AF37",
  templeGoldDark: "#9A6B11",
  templeGoldSoft: "#FDF5DF",
  cosmicNavy: "#0F172A",
  cosmicNavySoft: "#1E293B",
  warmIvory: "#FFF9ED",
  pureIvory: "#FFFDF8",
  inkPrimary: "#1E293B",
  inkMuted: "#475569",
  emerald: "#047857",
  emeraldSoft: "#ECFDF5",
  crimson: "#B91C1C",
  crimsonSoft: "#FEF2F2",
  borderGold: "#D4AF37",
  borderMuted: "#E7D5AE"
};
const PANDITJI_BRAND_URLS = {
  website: "https://www.panditjionline.online",
  websiteDisplay: "www.panditjionline.online",
  youtube: BRAND_CONFIG.youtubeUrl,
  youtubeHandle: BRAND_CONFIG.youtubeHandle,
  whatsapp: `https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    "नमस्ते आचार्य पण्डित शशांक शर्मा जी, मैंने पण्डित जी ऑनलाइन की बृहत् जन्म कुंडली पुस्तक PDF डाउनलोड की है। कृपया मार्गदर्शन प्रदान करें।"
  )}`,
  phoneDisplay: BRAND_CONFIG.displayPhone,
  founderHi: "आचार्य पण्डित शशांक शर्मा",
  locationHi: BRAND_CONFIG.location,
  email: BRAND_CONFIG.email
};
const FALLBACK_GOLD_CREST_DATA_URL = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="120">
      <defs>
        <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FDE047"/>
          <stop offset="50%" stop-color="#D4AF37"/>
          <stop offset="100%" stop-color="#FF6F00"/>
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" r="57" fill="#0F172A" stroke="url(#g)" stroke-width="5"/>
      <circle cx="60" cy="60" r="47" fill="none" stroke="#D4AF37" stroke-opacity="0.45" stroke-width="1.5"/>
      <text x="60" y="68" text-anchor="middle" fill="#FDE68A" font-size="46" font-weight="800" font-family="serif">ॐ</text>
    </svg>`
);
let cachedAppLogoPromise = null;
async function getPanditJiRealLogoDataUrl() {
  if (PANDIT_AVATAR_THUMB.startsWith("data:image/")) {
    return PANDIT_AVATAR_THUMB;
  }
  if (typeof window === "undefined" || typeof fetch !== "function") {
    return FALLBACK_GOLD_CREST_DATA_URL;
  }
  if (!cachedAppLogoPromise) {
    cachedAppLogoPromise = (async () => {
      const candidates = ["/pwa-192x192.png", "/apple-touch-icon.png", "/pandit-shashank-sharma.jpg"];
      for (const path of candidates) {
        try {
          const controller = new AbortController();
          const timer = window.setTimeout(() => controller.abort(), 1600);
          const resp = await fetch(path, { signal: controller.signal, cache: "force-cache" });
          window.clearTimeout(timer);
          if (!resp.ok) continue;
          const blob = await resp.blob();
          const dataUrl = await new Promise((resolve) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(typeof reader.result === "string" ? reader.result : "");
            reader.onerror = () => resolve("");
            reader.readAsDataURL(blob);
          });
          if (dataUrl.startsWith("data:image/")) {
            return dataUrl;
          }
        } catch {
        }
      }
      return FALLBACK_GOLD_CREST_DATA_URL;
    })();
  }
  return cachedAppLogoPromise;
}
function getSyncRealAppLogoSrc(resolvedLogoDataUrl) {
  if (resolvedLogoDataUrl && resolvedLogoDataUrl.startsWith("data:image/")) {
    return resolvedLogoDataUrl;
  }
  if (PANDIT_AVATAR_THUMB.startsWith("data:image/")) {
    return PANDIT_AVATAR_THUMB;
  }
  return FALLBACK_GOLD_CREST_DATA_URL;
}
function buildBrandLogoBadgeHtml(sizePx, logoDataUrl, ringPx = 2) {
  const src = getSyncRealAppLogoSrc(logoDataUrl);
  return `
    <div style="width: ${sizePx}px; height: ${sizePx}px; border-radius: 50%; padding: ${ringPx}px; background: linear-gradient(135deg, #FDE047 0%, ${VEDIC_BOOK_THEME.templeGold} 52%, ${VEDIC_BOOK_THEME.saffron} 100%); box-shadow: 0 2px 8px rgba(15, 23, 42, 0.28); flex-shrink: 0; align-self: center; display: flex; align-items: center; justify-content: center; overflow: hidden;">
      <img src="${src}" alt="PANDIT JI ONLINE Logo" width="${sizePx - ringPx * 2}" height="${sizePx - ringPx * 2}" style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover; object-position: center; display: block; background: ${VEDIC_BOOK_THEME.cosmicNavy};" />
    </div>
  `;
}
let cachedQrSetPromise = null;
async function generateSingleQrDataUrl(url, darkColor = VEDIC_BOOK_THEME.cosmicNavy, lightColor = "#FFFFFF") {
  try {
    return await QRCode.toDataURL(url, {
      errorCorrectionLevel: "M",
      margin: 1,
      width: 220,
      color: {
        dark: darkColor,
        light: lightColor
      }
    });
  } catch {
    return "";
  }
}
async function getBrandQrCodeSet() {
  if (!cachedQrSetPromise) {
    cachedQrSetPromise = (async () => {
      const [websiteQrDataUrl, youtubeQrDataUrl, whatsappQrDataUrl, appLogoDataUrl] = await Promise.all([
        generateSingleQrDataUrl(PANDITJI_BRAND_URLS.website, "#0F172A", "#FFFDF8"),
        generateSingleQrDataUrl(PANDITJI_BRAND_URLS.youtube, "#0F172A", "#FFFDF8"),
        generateSingleQrDataUrl(PANDITJI_BRAND_URLS.whatsapp, "#0F172A", "#FFFDF8"),
        getPanditJiRealLogoDataUrl()
      ]);
      return {
        websiteQrDataUrl,
        youtubeQrDataUrl,
        whatsappQrDataUrl,
        appLogoDataUrl
      };
    })();
  }
  return cachedQrSetPromise;
}
const BRAND_BANNER_SPECS = {
  after_charts_b: {
    slot: "after_charts_b",
    badgeHi: "PANDIT JI ONLINE • निःशुल्क वैदिक सेवाएँ",
    titleHi: "दैनिक दृक् गणित पंचांग, चौघड़िया एवं सटीक राशिफल — प्रतिदिन प्रातः",
    bodyHi: "तिथि, नक्षत्र, योग, करण, अभिजीत मुहूर्त, राहुकाल और चंद्र-आधारित दैनिक, साप्ताहिक व मासिक राशिफल अपने मोबाइल पर बिल्कुल निःशुल्क देखें।",
    highlightsHi: ["दृक् गणित लाहिड़ी पंचांग", "दैनिक/मासिक राशिफल", "शुभ मुहूर्त व व्रत-त्योहार"],
    ctaHi: "QR स्कैन करें या विज़िट करें:",
    urlLabel: PANDITJI_BRAND_URLS.websiteDisplay,
    qrKey: "websiteQrDataUrl",
    accentColor: VEDIC_BOOK_THEME.saffron
  },
  after_vargas_c: {
    slot: "after_vargas_c",
    badgeHi: "PANDIT JI ONLINE • पारिवारिक ज्योतिष मंच",
    titleHi: "निःशुल्क सम्पूर्ण जन्म कुंडली पुस्तक एवं 36 गुण विवाह मिलान",
    bodyHi: "परिवार के किसी भी सदस्य की वैदिक जन्म कुंडली, 16 षोडशवर्ग, मांगलिक परीक्षण और अष्टकूट 36 गुण विवाह मिलान कुछ ही सेकंड में तैयार करें।",
    highlightsHi: ["निःशुल्क जन्म कुंडली पुस्तक", "36 गुण अष्टकूट मिलान", "भारत व विदेश टाइमज़ोन समर्थन"],
    ctaHi: "ऑनलाइन सेवा खोलें:",
    urlLabel: PANDITJI_BRAND_URLS.websiteDisplay,
    qrKey: "websiteQrDataUrl",
    accentColor: VEDIC_BOOK_THEME.templeGoldDark
  },
  after_ashtakavarga_e: {
    slot: "after_ashtakavarga_e",
    badgeHi: "PANDIT JI ONLINE • डिजिटल सनातन मंदिर",
    titleHi: "डिजिटल मंदिर, आरती-चालीसा संग्रह एवं 108 रुद्राक्ष मंत्र जप",
    bodyHi: "अपने इष्टदेव की प्रतिदिन आरती, प्रामाणिक चालीसा, स्तोत्र पाठ और 108 मनकों वाला डिजिटल मंत्र जप काउंटर — घर या यात्रा में कहीं भी भक्ति का साथ।",
    highlightsHi: ["डिजिटल आरती व दर्शन", "108 रुद्राक्ष जप काउंटर", "संपूर्ण चालीसा एवं स्तोत्र"],
    ctaHi: "डिजिटल मंदिर में प्रवेश करें:",
    urlLabel: PANDITJI_BRAND_URLS.websiteDisplay,
    qrKey: "websiteQrDataUrl",
    accentColor: VEDIC_BOOK_THEME.saffron
  },
  after_gochar_g: {
    slot: "after_gochar_g",
    badgeHi: "PANDIT JI ONLINE OFFICIAL • YOUTUBE",
    titleHi: "आचार्य पण्डित शशांक शर्मा से जुड़ें — YouTube ज्योतिष एवं धर्म चैनल",
    bodyHi: "ग्रह गोचर विश्लेषण, प्रमुख व्रत-त्योहारों के सटीक मुहूर्त, वैदिक पूजन विधि और सरल ज्योतिष ज्ञान के प्रामाणिक वीडियो देखने हेतु चैनल से जुड़ें।",
    highlightsHi: ["दैनिक पंचांग व व्रत विधि", "ग्रह गोचर मार्गदर्शन", "सरल सात्विक वैदिक उपाय"],
    ctaHi: "YouTube चैनल स्कैन करें:",
    urlLabel: `youtube.com/${PANDITJI_BRAND_URLS.youtubeHandle}`,
    qrKey: "youtubeQrDataUrl",
    accentColor: VEDIC_BOOK_THEME.crimson
  },
  back_cover_i: {
    slot: "back_cover_i",
    badgeHi: "प्रामाणिक वैदिक परामर्श • PANDIT JI ONLINE",
    titleHi: "व्यक्तिगत कुंडली विश्लेषण, विवाह मिलान एवं वैदिक अनुष्ठान परामर्श",
    bodyHi: "यदि आप विवाह, संतान, व्यवसाय, सरकारी नौकरी, ग्रह-शांति पूजा या रत्न चयन पर प्रत्यक्ष ज्योतिषीय मार्गदर्शन चाहते हैं, तो आचार्य पण्डित शशांक शर्मा जी से सीधे संपर्क करें।",
    highlightsHi: [
      `सम्पर्क / WhatsApp: ${PANDITJI_BRAND_URLS.phoneDisplay}`,
      PANDITJI_BRAND_URLS.locationHi,
      PANDITJI_BRAND_URLS.websiteDisplay
    ],
    ctaHi: "वेबसाइट / WhatsApp स्कैन करें:",
    urlLabel: PANDITJI_BRAND_URLS.websiteDisplay,
    qrKey: "websiteQrDataUrl",
    accentColor: VEDIC_BOOK_THEME.saffron
  }
};
function esc$1(val) {
  return String(val ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function buildBrandSectionBannerHtml(slot, qrs, cleanMode) {
  if (cleanMode && slot !== "back_cover_i") {
    return "";
  }
  const spec = BRAND_BANNER_SPECS[slot];
  const qrSrc = qrs[spec.qrKey] || qrs.websiteQrDataUrl;
  const logoHtml = buildBrandLogoBadgeHtml(42, qrs.appLogoDataUrl, 2);
  if (cleanMode && slot === "back_cover_i") {
    return `
      <div class="book-banner-slot">
        <div class="book-banner" style="margin: 0; width: 100%; background: ${VEDIC_BOOK_THEME.pureIvory}; border: 1.8px solid ${VEDIC_BOOK_THEME.templeGold}; border-radius: 11px; padding: 12px 15px; display: flex; align-items: center; justify-content: space-between; gap: 14px;">
          <div style="display: flex; align-items: center; gap: 12px; flex: 1; min-width: 0;">
            ${logoHtml}
            <div style="display: flex; flex-direction: column; justify-content: center; flex: 1; min-width: 0;">
              <div style="font-size: 8.8px; font-weight: 800; letter-spacing: 0; color: ${VEDIC_BOOK_THEME.saffronDeep}; line-height: 1.3;">
                पण्डित जी ऑनलाइन (PANDIT JI ONLINE) • सत्यापित वैदिक जन्म पत्रिका
              </div>
              <div style="font-size: 11.5px; font-weight: 800; color: ${VEDIC_BOOK_THEME.cosmicNavy}; margin-top: 2px; line-height: 1.3;">
                ${esc$1(PANDITJI_BRAND_URLS.founderHi)} • ${esc$1(PANDITJI_BRAND_URLS.locationHi)}
              </div>
              <div style="font-size: 9.2px; color: ${VEDIC_BOOK_THEME.inkMuted}; margin-top: 3px; line-height: 1.45;">
                सम्पर्क / WhatsApp: <b style="color:${VEDIC_BOOK_THEME.cosmicNavy};">${esc$1(PANDITJI_BRAND_URLS.phoneDisplay)}</b> &nbsp;|&nbsp; वेबसाइट: <b style="color:${VEDIC_BOOK_THEME.saffronDeep};">${esc$1(PANDITJI_BRAND_URLS.websiteDisplay)}</b>
              </div>
            </div>
          </div>
          ${qrSrc ? `<div style="flex-shrink: 0; align-self: center; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; background: #ffffff; border: 1.2px solid ${VEDIC_BOOK_THEME.templeGold}; border-radius: 8px; padding: 4px;">
                   <img src="${qrSrc}" alt="Pandit Ji Online QR" style="width: 62px; height: 62px; display: block; margin: 0 auto;" />
                   <div style="font-size: 7px; font-weight: 800; color: ${VEDIC_BOOK_THEME.cosmicNavy}; margin-top: 3px; line-height: 1.2;">${esc$1(PANDITJI_BRAND_URLS.websiteDisplay)}</div>
                 </div>` : ""}
        </div>
      </div>
    `;
  }
  return `
    <div class="book-banner-slot">
      <div class="book-banner" style="margin: 0; width: 100%; background: linear-gradient(135deg, ${VEDIC_BOOK_THEME.cosmicNavy} 0%, #17243D 72%, #241910 100%); border: 2px solid ${VEDIC_BOOK_THEME.templeGold}; border-radius: 12px; padding: 12px 15px; color: ${VEDIC_BOOK_THEME.warmIvory}; display: flex; align-items: center; justify-content: space-between; gap: 14px; box-shadow: 0 3px 12px rgba(15, 23, 42, 0.16);">
        <div style="display: flex; align-items: center; gap: 12px; flex: 1; min-width: 0;">
          ${logoHtml}
          <div style="display: flex; flex-direction: column; justify-content: center; flex: 1; min-width: 0;">
            <div class="book-banner-badge" data-badge-bg="${spec.accentColor}" style="display: inline-flex; align-items: center; justify-content: center; align-self: flex-start; min-height: 18px; padding: 2px 10px; line-height: 1.15; background: ${spec.accentColor}; color: #FFFFFF; font-size: 8px; font-weight: 800; letter-spacing: 0; border-radius: 999px; margin-bottom: 5px; box-sizing: border-box; text-align: center;"><span class="book-banner-badge-text" style="display: inline-block; line-height: 1.15;">${esc$1(spec.badgeHi)}</span></div>
            <div style="font-size: 11.8px; font-weight: 800; color: #FDE68A; line-height: 1.35;">
              ${esc$1(spec.titleHi)}
            </div>
            <div style="font-size: 8.8px; color: #F1F5F9; line-height: 1.48; margin-top: 3px;">
              ${esc$1(spec.bodyHi)}
            </div>
            <div class="book-banner-pills" style="display: flex; flex-wrap: wrap; align-items: center; gap: 6px; margin-top: 6px;">
              ${spec.highlightsHi.map(
    (h) => `<span class="book-banner-pill" style="display: inline-flex; align-items: center; justify-content: center; font-size: 7.9px; font-weight: 700; line-height: 1.2; color: #FFF9ED; background: rgba(212, 175, 55, 0.18); border: 1px solid rgba(212, 175, 55, 0.55); padding: 4px 8px; border-radius: 4px; box-sizing: border-box; vertical-align: middle;">✦ ${esc$1(
      h
    )}</span>`
  ).join("")}
            </div>
            <div style="font-size: 8.2px; color: #FCD34D; margin-top: 5px; font-weight: 700; line-height: 1.3;">
              ${esc$1(spec.ctaHi)} <span style="color: #FFFFFF; font-family: monospace;">${esc$1(spec.urlLabel)}</span>
            </div>
          </div>
        </div>

        ${qrSrc ? `<div style="flex-shrink: 0; align-self: center; display: flex; flex-direction: column; align-items: center; justify-content: center; background: #FFFDF8; border: 2px solid ${VEDIC_BOOK_THEME.templeGold}; border-radius: 8px; padding: 5px; text-align: center; width: 84px;">
                 <img src="${qrSrc}" alt="QR Code" style="width: 70px; height: 70px; display: block; margin: 0 auto;" />
                 <div style="font-size: 7px; font-weight: 800; color: ${VEDIC_BOOK_THEME.cosmicNavy}; margin-top: 3px; line-height: 1.2;">स्कैन करें</div>
               </div>` : ""}
      </div>
    </div>
  `;
}
function buildBackCoverVerificationHtml(qrs, cleanMode) {
  if (cleanMode) {
    return buildBrandSectionBannerHtml("back_cover_i", qrs, true);
  }
  const logoHtml = buildBrandLogoBadgeHtml(54, qrs.appLogoDataUrl, 2.5);
  return `
    <div class="book-banner-slot">
      <div class="book-banner" style="margin: 0; width: 100%; background: linear-gradient(135deg, ${VEDIC_BOOK_THEME.cosmicNavy} 0%, #16223A 65%, #2B170A 100%); border: 2px solid ${VEDIC_BOOK_THEME.templeGold}; border-radius: 13px; padding: 15px 17px; color: ${VEDIC_BOOK_THEME.warmIvory}; display: flex; align-items: center; justify-content: space-between; gap: 14px;">
        <div style="display: flex; align-items: center; gap: 13px; flex: 1; min-width: 0;">
          ${logoHtml}
          <div style="display: flex; flex-direction: column; justify-content: center; flex: 1; min-width: 0;">
            <div style="font-size: 8.6px; font-weight: 800; color: ${VEDIC_BOOK_THEME.templeGold}; letter-spacing: 0; line-height: 1.3;">
              ॥ सही समय, सटीक ज्ञान — पण्डित जी ऑनलाइन की पहचान ॥
            </div>
            <div style="font-size: 13.5px; font-weight: 800; color: #FFFFFF; margin-top: 3px; line-height: 1.3;">
              ${esc$1(PANDITJI_BRAND_URLS.founderHi)} • वैदिक ज्योतिष एवं पूजन परामर्श
            </div>
            <div style="font-size: 9px; color: #E2E8F0; line-height: 1.5; margin-top: 4px;">
              विवाह, करियर, संतान, व्यवसाय, ग्रह-शांति पूजा, रत्न-रुद्राक्ष चयन अथवा जन्म कुंडली के किसी भी विशेष प्रश्न पर प्रामाणिक शास्त्रीय परामर्श के लिए संपर्क करें।
            </div>
            <div style="margin-top: 7px; font-size: 8.8px; color: #FDE68A; line-height: 1.55;">
              <div><b>वेबसाइट:</b> ${esc$1(PANDITJI_BRAND_URLS.websiteDisplay)} &nbsp;|&nbsp; <b>YouTube:</b> ${esc$1(PANDITJI_BRAND_URLS.youtubeHandle)}</div>
              <div><b>फ़ोन / WhatsApp:</b> ${esc$1(PANDITJI_BRAND_URLS.phoneDisplay)} &nbsp;|&nbsp; <b>स्थान:</b> ${esc$1(PANDITJI_BRAND_URLS.locationHi)}</div>
            </div>
          </div>
        </div>

        <div style="display: flex; align-items: center; justify-content: center; gap: 8px; flex-shrink: 0; align-self: center;">
          ${qrs.websiteQrDataUrl ? `<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; background: #FFFDF8; border: 1.8px solid ${VEDIC_BOOK_THEME.templeGold}; border-radius: 8px; padding: 4px; text-align: center; width: 78px;">
                   <img src="${qrs.websiteQrDataUrl}" alt="Website QR" style="width: 66px; height: 66px; display: block; margin: 0 auto;" />
                   <div style="font-size: 7px; font-weight: 800; color: ${VEDIC_BOOK_THEME.cosmicNavy}; margin-top: 3px; line-height: 1.2;">वेबसाइट खोलें</div>
                 </div>` : ""}
          ${qrs.whatsappQrDataUrl ? `<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; background: #FFFDF8; border: 1.8px solid #10B981; border-radius: 8px; padding: 4px; text-align: center; width: 78px;">
                   <img src="${qrs.whatsappQrDataUrl}" alt="WhatsApp QR" style="width: 66px; height: 66px; display: block; margin: 0 auto;" />
                   <div style="font-size: 7px; font-weight: 800; color: #047857; margin-top: 3px; line-height: 1.2;">WhatsApp परामर्श</div>
                 </div>` : ""}
        </div>
      </div>
    </div>
  `;
}
const SIGN_LORD_BY_RASHI = {
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
const RASHI_HI_SHORT = [
  "मेष",
  "वृषभ",
  "मिथुन",
  "कर्क",
  "सिंह",
  "कन्या",
  "तुला",
  "वृश्चिक",
  "धनु",
  "मकर",
  "कुंभ",
  "मीन"
];
const PLANET_HI_SHORT = {
  sun: "सूर्य",
  moon: "चंद्र",
  mars: "मंगल",
  mercury: "बुध",
  jupiter: "गुरु",
  venus: "शुक्र",
  saturn: "शनि",
  rahu: "राहु",
  ketu: "केतु"
};
const UNIVERSAL_VEDIC_BEEJ_MANTRA_BY_PLANET = {
  sun: "ॐ घृणि सूर्याय नमः",
  moon: "ॐ सों सोमाय नमः",
  mars: "ॐ अं अंगारकाय नमः",
  mercury: "ॐ बुं बुधाय नमः",
  jupiter: "ॐ बृं बृहस्पतये नमः",
  venus: "ॐ शुं शुक्राय नमः",
  saturn: "ॐ शं शनैश्चराय नमः",
  rahu: "ॐ रां राहवे नमः",
  ketu: "ॐ केम् केतवे नमः"
};
const GEMSTONE_BY_PLANET = {
  sun: {
    planetId: "sun",
    planetHi: "सूर्य",
    gemHi: "माणिक्य (Ruby)",
    uparatnaHi: "लाल गार्नेट / सूर्यकांत",
    rattiHi: "5.25 से 6.25 रत्ती",
    metalHi: "सोना या तांबा",
    fingerHi: "अनामिका (Ring Finger)",
    dayHi: "शुक्ल पक्ष का रविवार",
    timingHi: "सूर्योदय के 1 घंटे के भीतर (प्रातः 6:30–8:00)",
    mantraHi: UNIVERSAL_VEDIC_BEEJ_MANTRA_BY_PLANET.sun,
    purificationHi: "कच्चा दूध, गंगाजल एवं शहद से स्नान कर धूप-दीप दिखाएं",
    avoidWarnHi: "अहंकार, रक्तचाप, पिता/वरिष्ठों से तनाव और अनावश्यक सरकारी विवाद बढ़ सकते हैं।"
  },
  moon: {
    planetId: "moon",
    planetHi: "चंद्र",
    gemHi: "सच्चा मोती (Natural Pearl)",
    uparatnaHi: "मूनस्टोन (चंद्रमणि)",
    rattiHi: "5.25 से 7.25 रत्ती",
    metalHi: "चांदी (Silver)",
    fingerHi: "कनिष्ठा (Little Finger)",
    dayHi: "शुक्ल पक्ष का सोमवार",
    timingHi: "प्रातः सूर्योदय पश्चात या संध्या चंद्रोदय काल",
    mantraHi: UNIVERSAL_VEDIC_BEEJ_MANTRA_BY_PLANET.moon,
    purificationHi: "कच्चा गाय का दूध, गंगाजल एवं तुलसी दल/अक्षत से शुद्ध करें",
    avoidWarnHi: "मानसिक अस्थिरता, भावनात्मक उलझन, सर्दी-कफ एवं अनिर्णय की प्रवृत्ति बढ़ सकती है।"
  },
  mars: {
    planetId: "mars",
    planetHi: "मंगल",
    gemHi: "त्रिकोणीय/अंडाकार मूंगा (Red Coral)",
    uparatnaHi: "लाल हकीक / तांबा छल्ला",
    rattiHi: "6.25 से 8.25 रत्ती",
    metalHi: "तांबा या सोना",
    fingerHi: "अनामिका (Ring Finger)",
    dayHi: "शुक्ल पक्ष का मंगलवार",
    timingHi: "सूर्योदय के 1–2 घंटे के भीतर",
    mantraHi: UNIVERSAL_VEDIC_BEEJ_MANTRA_BY_PLANET.mars,
    purificationHi: "कच्चा दूध, गंगाजल एवं लाल पुष्प अर्पित कर शुद्ध करें",
    avoidWarnHi: "क्रोध, जल्दबाजी, रक्त/चोट संबंधी समस्या, कर्ज अथवा भूमि-विवाद की संभावना बढ़ सकती है।"
  },
  mercury: {
    planetId: "mercury",
    planetHi: "बुध",
    gemHi: "पन्ना (Emerald)",
    uparatnaHi: "पेरीडॉट / हरा ओनिक्स",
    rattiHi: "5.25 से 6.25 रत्ती",
    metalHi: "सोना या चांदी",
    fingerHi: "कनिष्ठा (Little Finger)",
    dayHi: "शुक्ल पक्ष का बुधवार",
    timingHi: "प्रातः सूर्योदय के 2 घंटे के भीतर",
    mantraHi: UNIVERSAL_VEDIC_BEEJ_MANTRA_BY_PLANET.mercury,
    purificationHi: "कच्चा दूध, गंगाजल एवं दूर्वा/तुलसी दल से शुद्ध करें",
    avoidWarnHi: "व्यापारिक निर्णय में भ्रम, त्वचा/स्नायु संवेदनशीलता और संवाद में अनावश्यक गलतफहमी हो सकती है।"
  },
  jupiter: {
    planetId: "jupiter",
    planetHi: "गुरु",
    gemHi: "पीला पुखराज (Yellow Sapphire)",
    uparatnaHi: "सुनहला (Citrine) / पीला टोपाज",
    rattiHi: "5.25 से 6.25 रत्ती",
    metalHi: "सोना या पीतल",
    fingerHi: "तर्जनी (Index Finger)",
    dayHi: "शुक्ल पक्ष का गुरुवार",
    timingHi: "प्रातः सूर्योदय के 1–2 घंटे के भीतर",
    mantraHi: UNIVERSAL_VEDIC_BEEJ_MANTRA_BY_PLANET.jupiter,
    purificationHi: "कच्चा दूध, गंगाजल, हल्दी व पीले पुष्प से शुद्ध करें",
    avoidWarnHi: "वजन/लिवर की समस्या, अत्यधिक आशावाद से आर्थिक चूक और अनावश्यक व्यय बढ़ सकते हैं।"
  },
  venus: {
    planetId: "venus",
    planetHi: "शुक्र",
    gemHi: "ओपल या सफेद जरकन / हीरा (Opal / Diamond)",
    uparatnaHi: "स्फटिक / सफेद पुखराज",
    rattiHi: "6.25 से 8.25 रत्ती (ओपल) / 0.5–1 कैरेट (हीरा)",
    metalHi: "चांदी या प्लैटिनम",
    fingerHi: "मध्यमा या अनामिका उंगली",
    dayHi: "शुक्ल पक्ष का शुक्रवार",
    timingHi: "प्रातः सूर्योदय के 1–2 घंटे के भीतर",
    mantraHi: UNIVERSAL_VEDIC_BEEJ_MANTRA_BY_PLANET.venus,
    purificationHi: "कच्चा दूध, गंगाजल, दही व श्वेत पुष्प से शुद्ध करें",
    avoidWarnHi: "विलासिता में अनावश्यक खर्च, शुगर/हार्मोन असंतुलन एवं संबंधों में अस्थिरता आ सकती है।"
  },
  saturn: {
    planetId: "saturn",
    planetHi: "शनि",
    gemHi: "नीलम (Blue Sapphire — 3 दिन परीक्षण उपरांत)",
    uparatnaHi: "नीली / जामुनिया (Amethyst)",
    rattiHi: "5.25 से 6.25 रत्ती",
    metalHi: "पंचधातु या चांदी",
    fingerHi: "मध्यमा (Middle Finger)",
    dayHi: "शुक्ल पक्ष का शनिवार",
    timingHi: "सूर्यास्त के पश्चात या प्रातः शनि होरा में",
    mantraHi: UNIVERSAL_VEDIC_BEEJ_MANTRA_BY_PLANET.saturn,
    purificationHi: "कच्चा दूध, गंगाजल एवं काले तिल के जल से शुद्ध करें",
    avoidWarnHi: "बिना अनुकूलता धारण करने पर कार्यों में विलंब, जोड़ों में दर्द, कर्ज या अचानक हानि हो सकती है।"
  }
};
function getHouseSign(lagnaNum, house) {
  return (lagnaNum - 1 + (house - 1)) % 12 + 1;
}
function getHouseLordId(lagnaNum, house) {
  return SIGN_LORD_BY_RASHI[getHouseSign(lagnaNum, house)] || "jupiter";
}
function getOwnedHouses(lagnaNum, planetId) {
  const res = [];
  for (let h = 1; h <= 12; h++) {
    if (getHouseLordId(lagnaNum, h) === planetId) res.push(h);
  }
  return res;
}
function getPlanet(report, id) {
  return report.planets.find((p) => p.id === id);
}
function getBhavaSav(report, house) {
  const av = report.ashtakavarga;
  if (!av) return 28;
  if (av.bhavaSarvashtakavarga && typeof av.bhavaSarvashtakavarga[house - 1] === "number") {
    return av.bhavaSarvashtakavarga[house - 1];
  }
  const lagnaIdx = ((report.panchang.lagnaNumber || 1) - 1 + 12) % 12;
  return av.sarvashtakavarga[(lagnaIdx + (house - 1)) % 12] ?? 28;
}
function getPlanetShadbalaRatio(report, id) {
  const row = report.shadbalaBhava?.planets.find((p) => p.id === id);
  return row ? row.strengthRatio : 1;
}
function getFunctionalClass(lagnaNum, planetId) {
  if (planetId === "rahu" || planetId === "ketu") return "mixed";
  const owned = getOwnedHouses(lagnaNum, planetId);
  const ownsKendra = owned.some((h) => [4, 7, 10].includes(h));
  const ownsTrikona = owned.some((h) => [5, 9].includes(h));
  if (ownsKendra && ownsTrikona) return "yogakaraka";
  if (owned.includes(1)) return "lagna";
  if (ownsTrikona) return "trikona";
  if (owned.length > 0 && owned.every((h) => [6, 8, 12].includes(h))) return "dusthana";
  if (ownsKendra) return "kendra";
  return "mixed";
}
function buildExecutiveSummaryPage(report, h) {
  const { esc: esc2, buildBookPageHeader: buildBookPageHeader2, buildSectionTitleBar: buildSectionTitleBar2, personHeader, appLogo } = h;
  const lagnaNum = report.panchang.lagnaNumber || 1;
  const lagnaLordId = getHouseLordId(lagnaNum, 1);
  const fifthLordId = getHouseLordId(lagnaNum, 5);
  const ninthLordId = getHouseLordId(lagnaNum, 9);
  const lagnaLordPl = getPlanet(report, lagnaLordId);
  const fifthLordPl = getPlanet(report, fifthLordId);
  const ninthLordPl = getPlanet(report, ninthLordId);
  const strengths = [];
  for (const yoga of report.rajYogas || []) {
    strengths.push({
      title: yoga.name,
      line1: yoga.description,
      line2: `शास्त्रीय आधार: ${yoga.sanskritRule} — यह योग जीवन में सम्मान, प्रगति और स्थिरता को निरंतर बल देता है।`,
      score: yoga.strength === "प्रबल योग" ? 95 : 85
    });
  }
  for (const pl of report.planets) {
    const fClass = getFunctionalClass(lagnaNum, pl.id);
    const sbRatio = getPlanetShadbalaRatio(report, pl.id);
    const pShort = pl.hindiName.split(" ")[0];
    if (fClass === "yogakaraka" || pl.isExalted || pl.dignity.includes("स्वगृही") || sbRatio >= 1.25) {
      const score = (fClass === "yogakaraka" ? 35 : 0) + (pl.isExalted ? 35 : pl.dignity.includes("स्वगृही") ? 28 : 0) + Math.round(sbRatio * 20) + ([1, 4, 5, 7, 9, 10, 11].includes(pl.houseInLagna) ? 15 : 0);
      strengths.push({
        title: `${pShort} की ${pl.isExalted ? "उच्चस्थ" : pl.dignity.includes("स्वगृही") ? "स्वगृही" : fClass === "yogakaraka" ? "योगकारक" : "अति पुष्ट"} स्थिति (भाव ${pl.houseInLagna})`,
        line1: `${pShort} आपकी कुंडली के ${pl.houseInLagna}वें भाव में ${pl.rashiName.split(" ")[0]} राशि (${pl.dignity}) में बैठकर अत्यंत प्रबल बल दे रहे हैं।`,
        line2: `इनकी दशा-अंतर्दशा व गोचर के दौरान करियर, निर्णय क्षमता और आर्थिक स्थिरता में स्पष्ट उछाल देखने को मिलेगा।`,
        score
      });
    }
  }
  const savRanked = Array.from({ length: 12 }, (_, idx) => ({
    house: idx + 1,
    pts: getBhavaSav(report, idx + 1)
  })).sort((a, b) => b.pts - a.pts);
  if (savRanked[0] && savRanked[0].pts >= 30) {
    const topH = savRanked[0];
    const hName = report.lagnaChart[topH.house - 1]?.bhavaTitle || `भाव ${topH.house}`;
    strengths.push({
      title: `सर्वाष्टकवर्ग में ${topH.house}वें भाव का सर्वाधिक बल (${topH.pts} बिंदु)`,
      line1: `आपकी कुंडली के ${hName} को 337-बिंदु अष्टकवर्ग में ${topH.pts} शुभ बिंदु मिले हैं (28 से ऊपर अति शुभ माना जाता है)।`,
      line2: `इस भाव से जुड़े कार्यों में कम संघर्ष में भी स्थायी और संतोषजनक परिणाम प्राप्त होने के प्रबल संकेत हैं।`,
      score: 70 + topH.pts
    });
  }
  const top3Strengths = [];
  const seenStrengthTitles = /* @__PURE__ */ new Set();
  for (const s of strengths.sort((a, b) => b.score - a.score)) {
    const key = s.title.slice(0, 16);
    if (seenStrengthTitles.has(key)) continue;
    seenStrengthTitles.add(key);
    top3Strengths.push(s);
    if (top3Strengths.length === 3) break;
  }
  while (top3Strengths.length < 3) {
    top3Strengths.push({
      title: `${report.panchang.lagnaName} लग्न एवं ${report.panchang.moonRashiName} चंद्र राशि का संतुलन`,
      line1: `आपकी जन्मपत्री में लग्नेश ${report.panchang.lagnaLord} तथा चंद्र राशि स्वामी ${report.panchang.moonRashiLord} व्यक्तित्व को व्यावहारिक और धैर्यवान बनाते हैं।`,
      line2: `सही योजना, अनुशासन और निरंतर कर्म से जीवन के मध्य भाग में उल्लेखनीय उन्नति सुनिश्चित है।`,
      score: 60
    });
  }
  const precautions = [];
  const buildCombustionPrecaution = (pl) => {
    const pShort = pl.hindiName.split(" ")[0];
    const rashiShort = pl.rashiName.split(" ")[0];
    const house = pl.houseInLagna;
    switch (pl.id) {
      case "mars":
        return {
          title: `मंगल का अस्त (^) प्रभाव — भाव ${house} (${rashiShort})`,
          line1: `मंगल ${rashiShort} राशि (${house}वें भाव) में सूर्य के निकट अस्त होने से ऊर्जा, साहस या भूमि-संपत्ति संबंधी निर्णयों में कभी-कभी भीतरी अधीरता अथवा परिणाम में विलंब अनुभव हो सकता है।`,
          line2: `सावधानी: आवेश में संपत्ति/कर्ज या तकनीकी निर्णय न लें; नियमित व्यायाम, मंगलवार को हनुमान चालीसा पाठ व मसूर दान से मंगल का शुभ पराक्रम जागृत रहेगा।`
        };
      case "saturn":
        return {
          title: `शनि का अस्त (^) प्रभाव — भाव ${house} (${rashiShort})`,
          line1: `शनि ${rashiShort} राशि (${house}वें भाव) में सूर्य-सान्निध्य से अस्त होने पर कठिन परिश्रम के बाद भी वरिष्ठों से श्रेय मिलने में समय लग सकता है तथा कार्यभार का दबाव बढ़ सकता है।`,
          line2: `सावधानी: पिता या उच्चाधिकारियों से अहं-टकराव से बचें, दीर्घकालिक अनुशासन बनाए रखें और शनिवार सायं पीपल के नीचे तिल के तेल का दीपक जलाएं।`
        };
      case "mercury":
        return {
          title: `बुध का अस्त (^) प्रभाव — भाव ${house} (${rashiShort})`,
          line1: `बुध ${rashiShort} राशि (${house}वें भाव) में सूर्य के अति समीप होने से विचारों में तीव्रता तो रहती है, पर जल्दबाजी में संवाद या लिखित अनुबंध में सूक्ष्म चूक की संभावना बनती है।`,
          line2: `सावधानी: किसी भी वित्तीय/व्यापारिक कागज पर हस्ताक्षर से पूर्व दो बार जांचें; बुधवार को हरी मूंग दान व श्री विष्णु सहस्रनाम श्रवण लाभकारी रहेगा।`
        };
      case "jupiter":
        return {
          title: `गुरु का अस्त (^) प्रभाव — भाव ${house} (${rashiShort})`,
          line1: `देवगुरु बृहस्पति ${rashiShort} राशि (${house}वें भाव) में अस्त होने से मार्गदर्शक निर्णय या आर्थिक विस्तार में स्पष्ट दृष्टि बनाए रखने हेतु अतिरिक्त विवेक आवश्यक होता है।`,
          line2: `सावधानी: बिना पूर्ण मूल्यांकन बड़ी वित्तीय गारंटी न दें; गुरुजनों का सम्मान करें तथा गुरुवार को हल्दी/चना दाल दान व गायत्री जप करें।`
        };
      case "venus":
        return {
          title: `शुक्र का अस्त (^) प्रभाव — भाव ${house} (${rashiShort})`,
          line1: `शुक्र ${rashiShort} राशि (${house}वें भाव) में सूर्य-समीप होने से पारिवारिक अपेक्षाओं, दांपत्य संवेदनशीलता या सुख-सुविधाओं के व्यय में असंतुलन आ सकता है।`,
          line2: `सावधानी: रिश्तों में विनम्र संवाद और बजट अनुशासन रखें; शुक्रवार को श्वेत वस्तु/खीर दान व महालक्ष्मी स्तुति से सुख-सौहार्द बढ़ेगा।`
        };
      case "moon":
        return {
          title: `चंद्र का अस्त (^) / अमावस्या सान्निध्य — भाव ${house} (${rashiShort})`,
          line1: `चंद्रमा ${rashiShort} राशि (${house}वें भाव) में सूर्य के निकट होने से मन अत्यधिक संवेदनशील रह सकता है तथा भावनात्मक उतार-चढ़ाव निर्णय को प्रभावित कर सकते हैं।`,
          line2: `सावधानी: प्रातः प्राणायाम, पर्याप्त नींद और सोमवार को शिवलिंग पर जल अर्पण से मानसिक एकाग्रता व शांति सुदृढ़ होगी।`
        };
      default:
        return {
          title: `${pShort} का अस्त (^) प्रभाव — भाव ${house} (${rashiShort})`,
          line1: `${pShort} ${rashiShort} राशि (${house}वें भाव) में सूर्य के अत्यंत निकट होने से इस भाव के फलों को पूर्ण रूप से प्रकट होने में संयमित प्रयास की आवश्यकता रहती है।`,
          line2: `सावधानी: इस भाव से जुड़े बड़े निर्णय शांत चिंतन व अनुभवी सलाह से लें और संबंधित ग्रह के सात्विक मंत्र का अभ्यास करें।`
        };
    }
  };
  for (const pl of report.planets) {
    const pShort = pl.hindiName.split(" ")[0];
    if (pl.isDebilitated) {
      precautions.push({
        title: `${pShort} का नीच राशि प्रभाव (भाव ${pl.houseInLagna})`,
        line1: `${pShort} ${pl.rashiName.split(" ")[0]} राशि में संवेदनशील स्थिति में हैं, जिससे इस भाव के फल प्रारंभ में धीमे मिल सकते हैं।`,
        line2: `सावधानी: इस क्षेत्र में जल्दबाजी से बचें; धैर्यपूर्वक अभ्यास और संबंधित सात्विक दान से यही ग्रह शानदार परिपक्व फल देगा।`,
        priority: 95
      });
    } else if (pl.isCombust) {
      const comb = buildCombustionPrecaution(pl);
      precautions.push({
        title: comb.title,
        line1: comb.line1,
        line2: comb.line2,
        priority: 85
      });
    }
  }
  const p2Doshas = report.phase2Jyotish?.yogasAndDoshas.doshas.allList || [];
  for (const d of p2Doshas) {
    if (d.effectiveStatus !== "दोष मुक्त") {
      precautions.push({
        title: `${d.nameHi} (${d.effectiveStatus})`,
        line1: `${d.explanationHi.slice(0, 145)}${d.explanationHi.length > 145 ? "..." : ""}`,
        line2: `सरल समाधान: ${d.remedyHi}`,
        priority: d.effectiveStatus === "प्रबल सक्रिय" ? 92 : 78
      });
    }
  }
  const sadePhase = report.phase2Jyotish?.liveGochar.sadeSatiPhase;
  if (sadePhase && sadePhase !== "NONE") {
    precautions.push({
      title: `शनि गोचर अनुशासन काल (${report.phase2Jyotish?.liveGochar.sadeSatiLabelHi})`,
      line1: `वर्तमान में शनि गोचर आपको अनुशासन, समय-प्रबंधन और यथार्थवादी योजना अपनाने की प्रेरणा दे रहा है।`,
      line2: `सावधानी: उधार/जोखिम भरे निवेश से बचें; शनिवार को पीपल के नीचे दीपक व हनुमान चालीसा पाठ से मानसिक शांति रहेगी।`,
      priority: 88
    });
  }
  const weakSav = savRanked[savRanked.length - 1];
  if (weakSav && weakSav.pts < 26) {
    const hName = report.lagnaChart[weakSav.house - 1]?.bhavaTitle || `भाव ${weakSav.house}`;
    precautions.push({
      title: `${weakSav.house}वें भाव में अतिरिक्त प्रयास संकेत (${weakSav.pts} SAV बिंदु)`,
      line1: `अष्टकवर्ग में ${hName} के बिंदु औसत (28) से कम हैं, जिसका अर्थ है कि इस विषय में व्यवस्थित योजना आवश्यक है।`,
      line2: `सावधानी: इस भाव से जुड़े बड़े कदम सोच-समझकर और शुभ दशा/गोचर में उठाने से परिणाम सहज व सकारात्मक रहेंगे।`,
      priority: 72
    });
  }
  const top3Precautions = [];
  const seenPrec = /* @__PURE__ */ new Set();
  for (const pr of precautions.sort((a, b) => b.priority - a.priority)) {
    const key = pr.title.slice(0, 16);
    if (seenPrec.has(key)) continue;
    seenPrec.add(key);
    top3Precautions.push(pr);
    if (top3Precautions.length === 3) break;
  }
  const defaultPrecautions = [
    {
      title: "भावनात्मक निर्णयों में संयम एवं धैर्य",
      line1: "किसी भी बड़े आर्थिक या पारिवारिक निर्णय को तात्कालिक आवेश के बजाय शांत मन और तथ्यों के आधार पर लें।",
      line2: "सावधानी: महत्वपूर्ण समझौतों से पूर्व लिखित स्पष्टता रखें और परिवार के वरिष्ठों का मार्गदर्शन लें।",
      priority: 50
    },
    {
      title: "स्वास्थ्य व दिनचर्या में नियमितता",
      line1: "कार्य की व्यस्तता के बीच नियमित योग, प्राणायाम और संतुलित सात्विक भोजन आपकी ऊर्जा को दीर्घकाल तक बनाए रखेगा।",
      line2: "सावधानी: रात्रि जागरण और तनाव से बचें; प्रातःकाल का सूर्य प्रकाश आपके लग्न बल को स्वतः बढ़ाता है।",
      priority: 45
    },
    {
      title: "दशा-गोचर के अनुरूप समय प्रबंधन",
      line1: "हर वर्ष एक जैसा नहीं होता — अनुकूल दशा में विस्तार करें और मध्यम समय में कौशल व बचत मजबूत करें।",
      line2: "सावधानी: इस पुस्तक के 5-वर्षीय रोडमैप को देखकर अपने प्रमुख लक्ष्यों की समय-सारणी तय करें।",
      priority: 40
    }
  ];
  for (const dp of defaultPrecautions) {
    if (top3Precautions.length >= 3) break;
    top3Precautions.push(dp);
  }
  const llShort = PLANET_HI_SHORT[lagnaLordId] || report.panchang.lagnaLord.split(" ")[0];
  const flShort = PLANET_HI_SHORT[fifthLordId] || "पंचमेश";
  const nlShort = PLANET_HI_SHORT[ninthLordId] || "नवमेश";
  const successMantra = `आपका व्यक्तित्व (${report.panchang.lagnaName} लग्न, लग्नेश ${llShort} — भाव ${lagnaLordPl?.houseInLagna || 1}), आपकी सृजनशील बुद्धि (पंचमेश ${flShort} — भाव ${fifthLordPl?.houseInLagna || 5}) और आपका भाग्योदय (नवमेश ${nlShort} — भाव ${ninthLordPl?.houseInLagna || 9}) एक स्पष्ट सूत्र देते हैं: "${report.panchang.tatva} तत्व की अपनी स्वाभाविक शक्ति को अनुशासन और सत्यनिष्ठा से जोड़ें, ${report.lucky.ishtaDevta} के स्मरण से प्रत्येक शुभ कार्य प्रारंभ करें, और दूसरों की नकल के बजाय अपने मौलिक विवेक पर चलें — यही आपके जीवन की स्थायी समृद्धि और सम्मान का मूल मंत्र है।"`;
  const html = `
    ${buildBookPageHeader2("डिजिटल ज्योतिषाचार्य सार : कुंडली का 1-मिनट सार (Executive Summary)", personHeader, appLogo)}
    ${buildSectionTitleBar2("EX", "कुंडली का 1-मिनट सार (Executive Summary) — एक दृष्टि में संपूर्ण जीवन-दिशा", `${report.panchang.lagnaName} लग्न • ${report.panchang.moonRashiName} राशि`)}

    <div class="book-card" style="background: ${VEDIC_BOOK_THEME.emeraldSoft}; border: 1.5px solid #10B981; border-radius: 10px; padding: 10px 13px; margin-bottom: 10px; page-break-inside: avoid;">
      <div style="font-size: 10.2px; font-weight: 900; color: #065F46; margin-bottom: 6px; border-bottom: 1px dashed #34D399; padding-bottom: 4px;">
        ✦ आपकी कुंडली के शीर्ष 3 सबसे प्रबल योग एवं शुभ शक्तियाँ (Top 3 Strengths)
      </div>
      ${top3Strengths.map(
    (s, idx) => `
          <div style="background: #FFFFFF; border: 1px solid #A7F3D0; border-left: 4px solid #059669; border-radius: 7px; padding: 7px 10px; margin-top: ${idx === 0 ? 0 : 7}px; page-break-inside: avoid;">
            <div style="font-size: 9.2px; font-weight: 900; color: ${VEDIC_BOOK_THEME.cosmicNavy};">${idx + 1}. ${esc2(s.title)}</div>
            <div style="font-size: 8.3px; color: ${VEDIC_BOOK_THEME.inkPrimary}; line-height: 1.48; margin-top: 2px;">${esc2(s.line1)}</div>
            <div style="font-size: 8.1px; color: #065F46; font-weight: 700; line-height: 1.45; margin-top: 2px;">${esc2(s.line2)}</div>
          </div>`
  ).join("")}
    </div>

    <div class="book-card" style="background: ${VEDIC_BOOK_THEME.saffronSoft}; border: 1.5px solid ${VEDIC_BOOK_THEME.templeGold}; border-radius: 10px; padding: 10px 13px; margin-bottom: 10px; page-break-inside: avoid;">
      <div style="font-size: 10.2px; font-weight: 900; color: ${VEDIC_BOOK_THEME.saffronDeep}; margin-bottom: 6px; border-bottom: 1px dashed ${VEDIC_BOOK_THEME.templeGold}; padding-bottom: 4px;">
        ✦ शीर्ष 3 ध्यान देने योग्य विषय एवं व्यावहारिक सावधानियाँ (Top 3 Precautions)
      </div>
      ${top3Precautions.map(
    (pr, idx) => `
          <div style="background: #FFFFFF; border: 1px solid ${VEDIC_BOOK_THEME.borderMuted}; border-left: 4px solid ${VEDIC_BOOK_THEME.saffron}; border-radius: 7px; padding: 7px 10px; margin-top: ${idx === 0 ? 0 : 7}px; page-break-inside: avoid;">
            <div style="font-size: 9.2px; font-weight: 900; color: ${VEDIC_BOOK_THEME.cosmicNavy};">${idx + 1}. ${esc2(pr.title)}</div>
            <div style="font-size: 8.3px; color: ${VEDIC_BOOK_THEME.inkPrimary}; line-height: 1.48; margin-top: 2px;">${esc2(pr.line1)}</div>
            <div style="font-size: 8.1px; color: ${VEDIC_BOOK_THEME.saffronDeep}; font-weight: 700; line-height: 1.45; margin-top: 2px;">${esc2(pr.line2)}</div>
          </div>`
  ).join("")}
    </div>

    <div class="book-card" style="background: linear-gradient(135deg, ${VEDIC_BOOK_THEME.cosmicNavy} 0%, #1E293B 100%); border: 2px solid ${VEDIC_BOOK_THEME.templeGold}; border-radius: 10px; padding: 11px 14px; color: ${VEDIC_BOOK_THEME.warmIvory}; page-break-inside: avoid;">
      <div style="font-size: 10px; font-weight: 900; color: #FDE68A; margin-bottom: 5px;">
        ★ आपका व्यक्तिगत जीवन सफलता मंत्र (लग्नेश ${esc2(llShort)} + पंचमेश ${esc2(flShort)} + नवमेश ${esc2(nlShort)} समन्वय)
      </div>
      <div style="font-size: 8.5px; color: #F8FAFC; line-height: 1.62;">
        ${esc2(successMantra)}
      </div>
      <div style="margin-top: 6px; padding-top: 5px; border-top: 1px dashed rgba(212, 175, 55, 0.5); font-size: 7.8px; color: #FCD34D; font-weight: 700; text-align: right;">
        — ${esc2(PANDITJI_BRAND_URLS.founderHi)} (पण्डित जी ऑनलाइन)
      </div>
    </div>
  `;
  return {
    sectionCode: "EX",
    sectionTag: "1-मिनट सार (Executive Summary)",
    html
  };
}
function buildCurrentTimeSynthesisPage(report, h) {
  const { esc: esc2, buildBookPageHeader: buildBookPageHeader2, buildSectionTitleBar: buildSectionTitleBar2, personHeader, appLogo } = h;
  const lagnaNum = report.panchang.lagnaNumber || 1;
  const p2 = report.phase2Jyotish;
  const vim = p2?.vimshottari;
  const gochar = p2?.liveGochar;
  const activeMaha = vim?.activeMahadasha;
  const activeAntar = vim?.activeAntardasha;
  const mahaId = activeMaha?.lordId || "jupiter";
  const antarId = activeAntar?.lordId || "mercury";
  const mahaPl = getPlanet(report, mahaId);
  const antarPl = getPlanet(report, antarId);
  const mahaRole = getFunctionalClass(lagnaNum, mahaId);
  const antarRole = getFunctionalClass(lagnaNum, antarId);
  const satRow = gochar?.grahaRows.find((r) => r.id === "saturn");
  const jupRow = gochar?.grahaRows.find((r) => r.id === "jupiter");
  const mahaIsBenefic = mahaRole === "yogakaraka" || mahaRole === "lagna" || mahaRole === "trikona";
  const antarIsBenefic = antarRole === "yogakaraka" || antarRole === "lagna" || antarRole === "trikona";
  const jupGood = Boolean(jupRow?.isFavorableFromMoon);
  const satGood = Boolean(satRow?.isFavorableFromMoon);
  const pillars = [
    {
      title: "1. करियर एवं व्यापार (Career & Business)",
      icon: "◆",
      tone: mahaIsBenefic || jupGood ? "प्रगति एवं विस्तार का काल" : "स्थिर कर्म व कौशल निर्माण काल",
      color: mahaIsBenefic || jupGood ? VEDIC_BOOK_THEME.emerald : VEDIC_BOOK_THEME.saffronDeep,
      outlook: `वर्तमान में ${activeMaha?.lordHindi || "मुख्य"} महादशा (भाव ${mahaPl?.houseInLagna || 1}) और ${activeAntar?.lordHindi || "सक्रिय"} अंतर्दशा (भाव ${antarPl?.houseInLagna || 10}) के साथ गोचर गुरु आपकी चंद्र राशि से ${jupRow?.houseFromNatalMoon || 5}वें (लग्न से ${jupRow?.houseFromNatalLagna || 5}वें) और शनि चंद्र से ${satRow?.houseFromNatalMoon || 10}वें (लग्न से ${satRow?.houseFromNatalLagna || 10}वें) भाव में हैं। अगले 6–12 महीनों में ${mahaIsBenefic || antarIsBenefic ? "नई जिम्मेदारियां, पदोन्नति या व्यवसाय विस्तार के स्पष्ट अवसर बनेंगे; आपकी कार्यक्षमता की सराहना होगी।" : "निरंतर परिश्रम और धैर्य से नींव मजबूत होगी; जल्दबाजी में नौकरी या बड़ा साझेदारी परिवर्तन टालना समझदारी होगी।"}`,
      action: jupGood ? "सलाह: नए प्रोजेक्ट या कौशल उन्नयन की शुरुआत करने के लिए यह 6–12 माह अत्यंत अनुकूल हैं।" : "सलाह: वर्तमान कार्यस्थल पर गुणवत्ता व अनुशासन बढ़ाएं; कागजी अनुबंध ध्यानपूर्वक पढ़ें।"
    },
    {
      title: "2. धन-संपत्ति एवं निवेश (Finance & Wealth)",
      icon: "◆",
      tone: jupGood && satGood ? "सुदृढ़ धनागमन एवं बचत योग" : jupGood || mahaIsBenefic ? "संतुलित आय व क्रमिक वृद्धि" : "बजट अनुशासन व सुरक्षित निवेश काल",
      color: jupGood ? VEDIC_BOOK_THEME.emerald : VEDIC_BOOK_THEME.saffronDeep,
      outlook: `आपकी कुंडली के धन भाव (SAV ${getBhavaSav(report, 2)} बिंदु) व लाभ भाव (SAV ${getBhavaSav(report, 11)} बिंदु) पर सक्रिय ${activeAntar?.lordHindi || ""} अंतर्दशा व गुरु गोचर (${jupRow?.currentRashiNameHi || ""}) का सीधा प्रभाव है। ${jupGood ? "अटके हुए धन की प्राप्ति, आय के नए स्रोत और परिवार में शुभ निवेश के सुंदर संकेत बन रहे हैं।" : "आय नियमित रहेगी, परंतु आकस्मिक घरेलू या व्यावसायिक व्यय बढ़ सकते हैं; सट्टेबाजी या उच्च जोखिम वाले निवेश से दूरी रखें।"}`,
      action: "सलाह: मासिक आय का कम से कम 20% सुरक्षित बचत में रखें और किसी को बिना लिखित सुरक्षा बड़ा कर्ज न दें।"
    },
    {
      title: "3. स्वास्थ्य एवं मानसिक ऊर्जा (Health & Vitality)",
      icon: "◆",
      tone: gochar?.sadeSatiPhase && gochar.sadeSatiPhase !== "NONE" ? "दिनचर्या व विश्राम पर विशेष ध्यान" : "संतुलित ऊर्जा एवं उत्साह",
      color: gochar?.sadeSatiPhase && gochar.sadeSatiPhase !== "NONE" ? VEDIC_BOOK_THEME.crimson : VEDIC_BOOK_THEME.emerald,
      outlook: `शनि गोचर (${satRow?.currentRashiNameHi || ""}, चंद्र से ${satRow?.houseFromNatalMoon || 1}वां भाव — ${gochar?.sadeSatiLabelHi || "सामान्य"}) तथा जन्म नाड़ी (${report.panchang.nadi}) के अनुसार अगले 6–12 महीनों में ${satGood && !mahaPl?.isDebilitated ? "आपका मनोबल और शारीरिक स्फूर्ति अच्छी बनी रहेगी; पुरानी थकान से राहत मिलेगी।" : "कार्यभार के कारण तनाव, नींद की कमी या पाचन/जोड़ों की थकान महसूस हो सकती है, जिसे नियमित व्यायाम से आसानी से नियंत्रित किया जा सकता है।"}`,
      action: "सलाह: प्रतिदिन 20 मिनट प्राणायाम/टहलना, पर्याप्त जल सेवन और समय पर रात्रि भोजन को अनिवार्य नियम बनाएं।"
    },
    {
      title: "4. परिवार एवं दांपत्य सुख (Family & Relationships)",
      icon: "◆",
      tone: jupGood || antarId === "venus" || antarId === "jupiter" ? "मधुर सामंजस्य व मांगलिक योग" : "संवाद व धैर्य से मधुरता",
      color: jupGood || antarId === "venus" || antarId === "jupiter" ? VEDIC_BOOK_THEME.emerald : VEDIC_BOOK_THEME.saffronDeep,
      outlook: `देवगुरु बृहस्पति का ${jupRow?.houseFromNatalLagna || 5}वें लग्न भाव में गोचर तथा ${activeMaha?.lordHindi || ""}–${activeAntar?.lordHindi || ""} दशा अवधि परिवार में ${jupGood || antarId === "venus" || antarId === "jupiter" ? "आपसी स्नेह, शुभ उत्सव, तीर्थयात्रा और जीवनसाथी के साथ बेहतर तालमेल के योग बना रही है।" : "व्यस्तता के कारण संवाद की कमी ला सकती है; छोटी बातों को तूल न दें और परिवार के साथ गुणवत्तापूर्ण समय बिताएं।"}`,
      action: "सलाह: सप्ताह में एक दिन परिवार के साथ शांत संवाद व सात्विक पूजन करें — इससे घर का वातावरण सकारात्मक रहेगा।"
    }
  ];
  const html = `
    ${buildBookPageHeader2("डिजिटल ज्योतिषाचार्य : वर्तमान समय का सटीक विश्लेषण", personHeader, appLogo)}
    ${buildSectionTitleBar2("DJ1", "वर्तमान समय का सटीक विश्लेषण — सक्रिय दशा + लाइव गुरु/शनि गोचर समन्वय", `आकलन तिथि: ${gochar?.computedAtDateHi || "आज"}`)}

    <div class="book-card" style="background: ${VEDIC_BOOK_THEME.cosmicNavy}; color: ${VEDIC_BOOK_THEME.warmIvory}; border: 1.8px solid ${VEDIC_BOOK_THEME.templeGold}; border-radius: 10px; padding: 9px 13px; margin-bottom: 10px; page-break-inside: avoid;">
      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; font-size: 8px; text-align: center;">
        <div style="background: rgba(255,255,255,0.08); border: 1px solid rgba(212,175,55,0.45); border-radius: 7px; padding: 6px;">
          <div style="color:#FCD34D; font-weight:700;">सक्रिय महादशा</div>
          <div style="font-size: 10px; font-weight: 900; margin-top: 2px;">${esc2(activeMaha?.lordHindi || "—")}</div>
          <div style="color:#CBD5E1; font-size:7.2px; white-space:nowrap;">${esc2(activeMaha?.endDateHi || "")} तक</div>
        </div>
        <div style="background: rgba(255,255,255,0.08); border: 1px solid rgba(212,175,55,0.45); border-radius: 7px; padding: 6px;">
          <div style="color:#FCD34D; font-weight:700;">सक्रिय अंतर्दशा</div>
          <div style="font-size: 10px; font-weight: 900; margin-top: 2px;">${esc2(activeAntar?.lordHindi || "—")}</div>
          <div style="color:#CBD5E1; font-size:7.2px; white-space:nowrap;">${esc2(activeAntar?.endDateHi || "")} तक</div>
        </div>
        <div style="background: rgba(255,255,255,0.08); border: 1px solid rgba(212,175,55,0.45); border-radius: 7px; padding: 6px;">
          <div style="color:#FCD34D; font-weight:700;">लाइव गुरु गोचर</div>
          <div style="font-size: 9.5px; font-weight: 900; margin-top: 2px;">${esc2(jupRow?.currentRashiNameHi || "—")}</div>
          <div style="color:#6EE7B7; font-size:7.2px;">चंद्र ${jupRow?.houseFromNatalMoon || "-"}वां • लग्न ${jupRow?.houseFromNatalLagna || "-"}वां</div>
        </div>
        <div style="background: rgba(255,255,255,0.08); border: 1px solid rgba(212,175,55,0.45); border-radius: 7px; padding: 6px;">
          <div style="color:#FCD34D; font-weight:700;">लाइव शनि गोचर</div>
          <div style="font-size: 9.5px; font-weight: 900; margin-top: 2px;">${esc2(satRow?.currentRashiNameHi || "—")}</div>
          <div style="color:#FDE68A; font-size:7.2px;">चंद्र ${satRow?.houseFromNatalMoon || "-"}वां • लग्न ${satRow?.houseFromNatalLagna || "-"}वां</div>
        </div>
      </div>
      <div style="margin-top: 7px; font-size: 8.1px; color: #E2E8F0; line-height: 1.48; text-align: center;">
        <b>द्वि-गोचर सक्रियता:</b> ${esc2(gochar?.doubleTransitSummaryHi || "गुरु एवं शनि का संयुक्त गोचर जीवन के प्रमुख लक्ष्यों को दिशा दे रहा है।")}
      </div>
    </div>

    <div style="display: flex; flex-direction: column; gap: 9px;">
      ${pillars.map(
    (p) => `
          <div class="book-card" style="background: ${VEDIC_BOOK_THEME.pureIvory}; border: 1.4px solid ${VEDIC_BOOK_THEME.templeGold}; border-left: 4.5px solid ${p.color}; border-radius: 9px; padding: 9px 12px; page-break-inside: avoid;">
            <div style="display: table; width: 100%; margin-bottom: 4px;">
              <div style="display: table-cell; font-size: 9.8px; font-weight: 900; color: ${VEDIC_BOOK_THEME.cosmicNavy};">${p.icon} ${esc2(p.title)}</div>
              <div style="display: table-cell; text-align: right; font-size: 8px; font-weight: 800; color: ${p.color}; white-space: nowrap;">${esc2(p.tone)}</div>
            </div>
            <div style="font-size: 8.4px; color: ${VEDIC_BOOK_THEME.inkPrimary}; line-height: 1.54;">${esc2(p.outlook)}</div>
            <div style="margin-top: 5px; padding: 4px 8px; background: ${VEDIC_BOOK_THEME.warmIvory}; border-radius: 5px; font-size: 8px; font-weight: 800; color: ${VEDIC_BOOK_THEME.saffronDeep}; line-height: 1.45;">
              ${esc2(p.action)}
            </div>
          </div>`
  ).join("")}
    </div>
  `;
  return {
    sectionCode: "DJ1",
    sectionTag: "वर्तमान समय विश्लेषण (दशा + गोचर)",
    html
  };
}
function buildEightDirectQAPages(report, h) {
  const { esc: esc2, buildBookPageHeader: buildBookPageHeader2, buildSectionTitleBar: buildSectionTitleBar2, personHeader, appLogo } = h;
  const lagnaNum = report.panchang.lagnaNumber || 1;
  const h10LordId = getHouseLordId(lagnaNum, 10);
  const h7LordId = getHouseLordId(lagnaNum, 7);
  const h6LordId = getHouseLordId(lagnaNum, 6);
  const h2LordId = getHouseLordId(lagnaNum, 2);
  const h11LordId = getHouseLordId(lagnaNum, 11);
  const h4LordId = getHouseLordId(lagnaNum, 4);
  const h5LordId = getHouseLordId(lagnaNum, 5);
  const h9LordId = getHouseLordId(lagnaNum, 9);
  const h12LordId = getHouseLordId(lagnaNum, 12);
  const h8LordId = getHouseLordId(lagnaNum, 8);
  const h1LordId = getHouseLordId(lagnaNum, 1);
  const p10 = getPlanet(report, h10LordId);
  const p7 = getPlanet(report, h7LordId);
  const p6 = getPlanet(report, h6LordId);
  const p2 = getPlanet(report, h2LordId);
  const p11 = getPlanet(report, h11LordId);
  const p4 = getPlanet(report, h4LordId);
  const p5 = getPlanet(report, h5LordId);
  const p9 = getPlanet(report, h9LordId);
  const p12 = getPlanet(report, h12LordId);
  const p8 = getPlanet(report, h8LordId);
  const p1 = getPlanet(report, h1LordId);
  const merc = getPlanet(report, "mercury");
  const sat = getPlanet(report, "saturn");
  const ven = getPlanet(report, "venus");
  const jup = getPlanet(report, "jupiter");
  const mars = getPlanet(report, "mars");
  const rahu = getPlanet(report, "rahu");
  const moon = getPlanet(report, "moon");
  const businessScore = (getPlanetShadbalaRatio(report, "mercury") >= 1 ? 2 : 0) + ([1, 2, 7, 10, 11].includes(p7?.houseInLagna || 0) ? 2 : 0) + (getBhavaSav(report, 7) >= 28 ? 1 : 0) + (merc && [1, 2, 7, 10, 11].includes(merc.houseInLagna) ? 2 : 0);
  const jobScore = (getPlanetShadbalaRatio(report, "saturn") >= 1 ? 2 : 0) + ([1, 6, 10, 11].includes(p6?.houseInLagna || 0) ? 2 : 0) + (getBhavaSav(report, 6) >= 28 ? 1 : 0) + (sat && [1, 6, 10, 11].includes(sat.houseInLagna) ? 2 : 0);
  const careerVerdict = businessScore > jobScore + 1 ? "स्वतंत्र व्यापार, परामर्श या उद्यमिता में विशेष सफलता" : jobScore > businessScore + 1 ? "उच्च सेवा, कॉर्पोरेट/प्रशासनिक नौकरी व विशेषज्ञ पद अधिक अनुकूल" : "नौकरी के साथ अनुभव लेकर आगे स्वतंत्र कार्य/व्यवसाय — दोनों में श्रेष्ठ संतुलन";
  const sav2 = getBhavaSav(report, 2);
  const sav11 = getBhavaSav(report, 11);
  const wealthVerdict = sav2 >= 28 && sav11 >= 28 ? "अत्यंत सुदृढ़ धन संचय एवं बहु-स्रोत आय योग" : sav11 >= 28 ? "नियमित अच्छी आमदनी — व्यवस्थित बचत से स्थायी समृद्धि" : "अनुशासित वित्तीय योजना व दीर्घकालिक निवेश से स्थिर संपत्ति निर्माण";
  const sav4 = getBhavaSav(report, 4);
  const d4Chart = report.phase1Astronomy?.shodashavarga.find((v) => v.spec.id === "D4");
  const d4LagnaName = d4Chart?.ascendantRashiNameHi || RASHI_HI_SHORT[getHouseSign(lagnaNum, 4) - 1];
  const propertyGood = sav4 >= 28 || p4 && [1, 4, 5, 9, 10, 11].includes(p4.houseInLagna);
  const d9Lagna = report.deepAnalysis?.navamshaAndCareerDepth.d9Lagna || report.navamsaChart[0]?.rashiName || "";
  const manglikNote = report.doshaAnalysis.manglik.isManglik ? "कुंडली में मंगल प्रभाव होने से विवाह पूर्व अष्टकूट व मंगल मिलान अवश्य कराएं।" : "कुंडली मांगलिक बाधा से मुक्त/परिहार युक्त है, जो वैवाहिक सामंजस्य के लिए शुभ संकेत है।";
  const d7Chart = report.phase1Astronomy?.shodashavarga.find((v) => v.spec.id === "D7");
  const d24Chart = report.phase1Astronomy?.shodashavarga.find((v) => v.spec.id === "D24");
  const sav5 = getBhavaSav(report, 5);
  const foreignSignals = [
    p9 && [9, 12].includes(p9.houseInLagna),
    p12 && [1, 9, 10, 12].includes(p12.houseInLagna),
    rahu && [1, 4, 7, 9, 10, 12].includes(rahu.houseInLagna),
    moon && [7, 9, 12].includes(moon.houseInLagna)
  ].filter(Boolean).length;
  const foreignVerdict = foreignSignals >= 2 ? "विदेश यात्रा, विदेशी कंपनी/आय या जन्मस्थान से दूर बड़ी सफलता के प्रबल योग" : foreignSignals === 1 ? "कार्य या तीर्थ हेतु विदेश/दूरस्थ यात्राओं के अच्छे अवसर" : "स्वदेश अथवा अपने गृह-क्षेत्र में ही अधिक स्थिर और सम्मानजनक उन्नति के योग";
  const nadiConst = report.panchang.nadi.includes("आदि") ? "वात प्रकृति (आदि नाड़ी) — जोड़ों, गैस, अनिद्रा व त्वचा की नमी का ध्यान रखें" : report.panchang.nadi.includes("मध्य") ? "पित्त प्रकृति (मध्य नाड़ी) — एसिडिटी, अधिक गर्मी, रक्तचाप व नेत्र विश्राम का ध्यान रखें" : "कफ प्रकृति (अन्त्य नाड़ी) — सर्दी-जुकाम, साइनस, श्वसन व वजन संतुलन का ध्यान रखें";
  const nowMs = Date.now();
  const birthMs = report.phase1Astronomy?.spaceTime.utcEpochMs || nowMs - (report.input.ageYears || 25) * 365.2425 * 864e5;
  const vim = report.phase2Jyotish?.vimshottari;
  let goldenLabel = "आगामी शुभ त्रिकोण/योगकारक दशा काल";
  let goldenDetail = "आपकी कुंडली के शुभ ग्रहों की आगामी दशा में करियर, धन और प्रतिष्ठा का उत्कर्ष होगा।";
  if (vim) {
    let bestScore = -999;
    let bestWindow = null;
    const scoreLord = (lid) => {
      const fc = getFunctionalClass(lagnaNum, lid);
      const pl = getPlanet(report, lid);
      const sb = getPlanetShadbalaRatio(report, lid);
      let sc = fc === "yogakaraka" ? 40 : fc === "lagna" ? 32 : fc === "trikona" ? 30 : fc === "kendra" ? 20 : fc === "dusthana" ? -15 : 8;
      if (pl?.isExalted) sc += 20;
      else if (pl?.dignity.includes("स्वगृही")) sc += 15;
      else if (pl?.isDebilitated) sc -= 15;
      if (pl && [1, 4, 5, 9, 10, 11].includes(pl.houseInLagna)) sc += 10;
      sc += Math.round((sb - 1) * 15);
      return sc;
    };
    for (const md of vim.mahadashas) {
      if (md.endUtcMs < nowMs) continue;
      const mScore = scoreLord(md.lordId);
      for (const ad of md.antardashas) {
        if (ad.endUtcMs < nowMs) continue;
        const ageAtStart = (ad.startUtcMs - birthMs) / (365.2425 * 864e5);
        if (ageAtStart > 82) continue;
        const totalSc = mScore * 0.6 + scoreLord(ad.lordId) * 0.4;
        if (totalSc > bestScore) {
          bestScore = totalSc;
          const aStart = Math.max(0, Number(((ad.startUtcMs - birthMs) / (365.2425 * 864e5)).toFixed(1)));
          const aEnd = Math.max(aStart, Number(((ad.endUtcMs - birthMs) / (365.2425 * 864e5)).toFixed(1)));
          bestWindow = {
            title: `${md.lordHindi} महादशा – ${ad.lordHindi} अंतर्दशा`,
            startHi: ad.startDateHi,
            endHi: ad.endDateHi,
            ageStart: aStart,
            ageEnd: aEnd,
            reason: `इस काल में महादशा स्वामी ${md.lordHindi} एवं अंतर्दशा स्वामी ${ad.lordHindi} आपकी कुंडली के शुभ भावों को संयुक्त रूप से सक्रिय करेंगे`
          };
        }
      }
    }
    if (bestWindow) {
      goldenLabel = `${bestWindow.title} (${bestWindow.startHi} → ${bestWindow.endHi} • आयु ${bestWindow.ageStart}–${bestWindow.ageEnd} वर्ष)`;
      goldenDetail = `${bestWindow.reason}। यह अवधि आपके जीवन में बड़ा पद, स्थायी संपत्ति, वित्तीय उछाल और सामाजिक सम्मान दिलाने वाला प्रमुख स्वर्णिम चरण सिद्ध होगी।`;
    }
  }
  const q1SixthLordPhrase = h6LordId === h1LordId ? `लग्नेश ${PLANET_HI_SHORT[h1LordId]} (भाव ${p1?.houseInLagna || 1})` : `षष्ठेश ${PLANET_HI_SHORT[h6LordId]} (भाव ${p6?.houseInLagna || 6})`;
  const q7HealthLordsPhrase = (() => {
    const parts = [
      `लग्नेश ${PLANET_HI_SHORT[h1LordId]} (${p1?.dignity || "संतुलित"}, भाव ${p1?.houseInLagna || 1})`
    ];
    if (h6LordId !== h1LordId) {
      parts.push(`षष्ठेश ${PLANET_HI_SHORT[h6LordId]} (भाव ${p6?.houseInLagna || 6})`);
    }
    if (h8LordId !== h1LordId && h8LordId !== h6LordId) {
      parts.push(`अष्टमेश ${PLANET_HI_SHORT[h8LordId]} (भाव ${p8?.houseInLagna || 8})`);
    }
    return parts.join(", ");
  })();
  const allQuestions = [
    {
      qNo: 1,
      question: "नौकरी बेहतर है या स्वयं का व्यापार (Job vs Business)?",
      badge: careerVerdict,
      answer: `दशमेश ${PLANET_HI_SHORT[h10LordId]} (भाव ${p10?.houseInLagna || 10}, ${p10?.dignity || "संतुलित"}), सप्तमेश ${PLANET_HI_SHORT[h7LordId]} (भाव ${p7?.houseInLagna || 7}), ${q1SixthLordPhrase} तथा बुध/शनि के षड्बल तुलना से स्पष्ट है कि आपके लिए "${careerVerdict}" सर्वाधिक लाभकारी रहेगा। दशमांश (D-10 लग्न: ${report.deepAnalysis?.navamshaAndCareerDepth.d10Lagna || report.panchang.lagnaName}) भी कर्म-क्षेत्र में निरंतर प्रतिष्ठा व नेतृत्व की पुष्टि करता है।`
    },
    {
      qNo: 2,
      question: "धन संचय, आय और आर्थिक स्थिरता कैसी रहेगी?",
      badge: `धन भाव SAV: ${sav2} • लाभ भाव SAV: ${sav11}`,
      answer: `आपकी कुंडली में द्वितीय (धन) भाव में ${sav2} अष्टकवर्ग बिंदु व धनेश ${PLANET_HI_SHORT[h2LordId]} (भाव ${p2?.houseInLagna || 2}) तथा एकादश (लाभ) भाव में ${sav11} बिंदु व लाभेश ${PLANET_HI_SHORT[h11LordId]} (भाव ${p11?.houseInLagna || 11}) स्थित हैं। निष्कर्ष: ${wealthVerdict}। आय बढ़ने के साथ व्यवस्थित बचत व स्थायी संपत्ति में निवेश आपको आर्थिक रूप से पूर्ण सुरक्षित बनाएगा।`
    },
    {
      qNo: 3,
      question: "अपना घर (अचल संपत्ति) और वाहन सुख कैसा मिलेगा?",
      badge: `चतुर्थ भाव SAV: ${sav4} • D-4 लग्न: ${d4LagnaName}`,
      answer: `चतुर्थ (सुख-भवन) भाव में ${sav4} बिंदु, चतुर्थेश ${PLANET_HI_SHORT[h4LordId]} (भाव ${p4?.houseInLagna || 4}), भूमि कारक मंगल (भाव ${mars?.houseInLagna || 1}) व वाहन कारक शुक्र (भाव ${ven?.houseInLagna || 1}) तथा चतुर्थांश (D-4 लग्न: ${d4LagnaName}) के अनुसार ${propertyGood ? "स्वयं के सुंदर आवास, भूखंड और उत्तम वाहन सुख के प्रबल योग हैं। चतुर्थेश/शुक्र की दशा में संपत्ति निर्माण विशेष रूप से सफल होगा।" : "परिश्रम और सुव्यवस्थित बचत के बल पर जीवन के मध्य चरण में स्थायी मकान व वाहन सुख अवश्य प्राप्त होगा; संपत्ति क्रय में कागजी जांच पूर्ण रखें।"}`
    },
    {
      qNo: 4,
      question: "विवाह, जीवनसाथी का स्वभाव और दांपत्य सुख कैसा रहेगा?",
      badge: `सप्तमेश: ${PLANET_HI_SHORT[h7LordId]} • D-9 लग्न: ${d9Lagna.split(" ")[0] || ""}`,
      answer: `सप्तम भाव के स्वामी ${PLANET_HI_SHORT[h7LordId]} (भाव ${p7?.houseInLagna || 7}, ${p7?.dignity || ""}), विवाह कारक शुक्र (भाव ${ven?.houseInLagna || 7}) व गुरु (भाव ${jup?.houseInLagna || 5}) और नवांश कुंडली (D-9 लग्न: ${d9Lagna}) से संकेत मिलता है कि जीवनसाथी समझदार, सहयोगी एवं परिवार-प्रेमी होंगे। ${manglikNote}`
    },
    {
      qNo: 5,
      question: "संतान सुख और उच्च शिक्षा की स्थिति कैसी रहेगी?",
      badge: `पंचम भाव SAV: ${sav5} • D-7: ${d7Chart?.ascendantRashiNameHi || "शुभ"} • D-24: ${d24Chart?.ascendantRashiNameHi || "शुभ"}`,
      answer: `पंचम भाव के स्वामी ${PLANET_HI_SHORT[h5LordId]} (भाव ${p5?.houseInLagna || 5}, SAV ${sav5} बिंदु), संतान-ज्ञान कारक देवगुरु बृहस्पति (भाव ${jup?.houseInLagna || 5}), सप्तांश (D-7 लग्न: ${d7Chart?.ascendantRashiNameHi || "शुभ"}) व चतुर्विंशांश (D-24 लग्न: ${d24Chart?.ascendantRashiNameHi || "शुभ"}) के समन्वय से आपकी ग्रहणशीलता, व्यावहारिक विद्या और संतान-संस्कार अत्यंत सकारात्मक रहेंगे।`
    },
    {
      qNo: 6,
      question: "क्या विदेश यात्रा, विदेशी आय या दूर स्थान में बसने का योग है?",
      badge: foreignSignals >= 2 ? "प्रबल विदेश / दूरस्थ योग" : foreignSignals === 1 ? "आंशिक यात्रा योग" : "स्वदेश प्रधान उन्नति",
      answer: `नवमेश ${PLANET_HI_SHORT[h9LordId]} (भाव ${p9?.houseInLagna || 9}), द्वादशेश ${PLANET_HI_SHORT[h12LordId]} (भाव ${p12?.houseInLagna || 12}), राहु (भाव ${rahu?.houseInLagna || 1}) तथा चंद्रमा (भाव ${moon?.houseInLagna || 1}) की स्थिति स्पष्ट करती है: "${foreignVerdict}"। राहु या द्वादशेश/नवमेश की अंतर्दशा में दूरस्थ संपर्क व ऑनलाइन/वैश्विक मंच से विशेष लाभ मिलेगा।`
    },
    {
      qNo: 7,
      question: "स्वास्थ्य की दृष्टि से किन बातों का विशेष ध्यान रखें?",
      badge: `${report.panchang.nadi} • लग्नेश भाव ${p1?.houseInLagna || 1}`,
      answer: `आपकी जन्म नाड़ी (${report.panchang.nadi}) के अनुसार: ${nadiConst}। ${q7HealthLordsPhrase} बताते हैं कि नियमित योग, तनाव-नियंत्रण और मौसमी खानपान अनुशासन से आप दीर्घायु व स्वस्थ रहेंगे।`
    },
    {
      qNo: 8,
      question: 'मेरे जीवन का "स्वर्णिम काल (Golden Period)" कब आएगा?',
      badge: "दशा-बल आधारित सर्वोत्तम चरण",
      answer: `आपकी विंशोत्तरी दशा, ग्रहों के षड्बल और योगकारक/त्रिकोण स्वामित्व के समग्र विश्लेषण के अनुसार आपका प्रमुख स्वर्णिम काल है: ${goldenLabel}। ${goldenDetail}`
    }
  ];
  const renderPage = (code, tag, titleSuffix, items) => ({
    sectionCode: code,
    sectionTag: tag,
    html: `
      ${buildBookPageHeader2(`डिजिटल ज्योतिषाचार्य : 8 बड़े सवालों के सीधे जवाब (${titleSuffix})`, personHeader, appLogo)}
      ${buildSectionTitleBar2(code, `आपके जीवन के 8 बड़े सवालों के सीधे, सरल जवाब (${titleSuffix})`, "जटिल शब्दावली से मुक्त स्पष्ट मार्गदर्शन")}
      <div style="display: flex; flex-direction: column; gap: 11px; margin-top: 4px;">
        ${items.map(
      (q) => `
            <div class="book-card" style="background: ${VEDIC_BOOK_THEME.pureIvory}; border: 1.5px solid ${VEDIC_BOOK_THEME.templeGold}; border-left: 4.5px solid ${VEDIC_BOOK_THEME.saffron}; border-radius: 10px; padding: 10px 13px; page-break-inside: avoid;">
              <div style="display: table; width: 100%; border-bottom: 1px dashed ${VEDIC_BOOK_THEME.borderMuted}; padding-bottom: 5px; margin-bottom: 6px;">
                <div style="display: table-cell; vertical-align: middle; font-size: 10px; font-weight: 900; color: ${VEDIC_BOOK_THEME.cosmicNavy}; padding-right: 8px;">
                  प्रश्न ${q.qNo}. ${esc2(q.question)}
                </div>
                <div style="display: table-cell; vertical-align: middle; text-align: right; white-space: nowrap; width: 1%;">
                  <span style="display: inline-block; background: ${VEDIC_BOOK_THEME.emeraldSoft}; color: #065F46; border: 1px solid #34D399; border-radius: 999px; padding: 2.5px 9px; font-size: 7.4px; font-weight: 800; line-height: 1.25;">${esc2(q.badge)}</span>
                </div>
              </div>
              <div style="font-size: 8.6px; color: ${VEDIC_BOOK_THEME.inkPrimary}; line-height: 1.58;">
                <b style="color:${VEDIC_BOOK_THEME.saffronDeep};">सीधा उत्तर:</b> ${esc2(q.answer)}
              </div>
            </div>`
    ).join("")}
      </div>
    `
  });
  return [
    renderPage("DJ2", "8 बड़े सवाल (प्रश्न 1–4)", "भाग 1/2 : प्रश्न 1 से 4", allQuestions.slice(0, 4)),
    renderPage("DJ3", "8 बड़े सवाल (प्रश्न 5–8)", "भाग 2/2 : प्रश्न 5 से 8", allQuestions.slice(4, 8))
  ];
}
function buildFiveYearRoadmapPage(report, h) {
  const { esc: esc2, buildBookPageHeader: buildBookPageHeader2, buildSectionTitleBar: buildSectionTitleBar2, personHeader, appLogo } = h;
  const nowMs = Date.now();
  const currentYear = new Date(nowMs).getFullYear();
  const lagnaNum = report.panchang.lagnaNumber || 1;
  const moonRashiNum = report.panchang.moonRashiNumber || 1;
  const vim = report.phase2Jyotish?.vimshottari;
  const liveGochar = report.phase2Jyotish?.liveGochar;
  const JUPITER_MOON_HOUSE_EFFECT = {
    1: "आत्मचिंतन, स्वास्थ्य नियम और दीर्घकालिक दिशा तय करने का समय बनता है",
    2: "धन-संचय, वाणी प्रभाव और परिवार में मांगलिक कार्यों के सुंदर योग बनते हैं",
    3: "नए संपर्क, छोटी यात्राओं और स्वप्रयास से कार्य विस्तार का योग बनता है",
    4: "गृह-सुख, वाहन/संपत्ति योजना और पारिवारिक स्थिरता पर ध्यान केंद्रित रहता है",
    5: "विद्या, संतान सुख, सृजनशील सफलता और विवेकपूर्ण निवेश में विशेष लाभ मिलता है",
    6: "प्रतिस्पर्धा में विजय, सेवा-अनुशासन और ऋण/विवाद समाधान के अवसर बनते हैं",
    7: "दांपत्य सौहार्द, व्यापारिक साझेदारी और सामाजिक प्रतिष्ठा में स्पष्ट वृद्धि होती है",
    8: "गहन शोध, आध्यात्मिक परिपक्वता और आर्थिक निर्णयों में सतर्कता की अपेक्षा रहती है",
    9: "भाग्योदय, वरिष्ठों का आशीर्वाद, तीर्थयात्रा और बड़े अवसरों की प्राप्ति होती है",
    10: "कर्म-क्षेत्र में पदोन्नति, नई जिम्मेदारी और व्यावसायिक पहचान सुदृढ़ होती है",
    11: "बहु-स्रोत आय, रुके धन की प्राप्ति और महत्वाकांक्षाओं की पूर्ति का प्रबल योग बनता है",
    12: "विदेश/बाहरी संपर्क, दान-पुण्य और व्यय के सुनियोजित प्रबंधन पर बल रहता है"
  };
  const SATURN_MOON_HOUSE_ACTION = {
    1: "जन्म-शनि (साढ़ेसाती मध्य) होने से स्वास्थ्य, धैर्य और समय-प्रबंधन को सर्वोच्च प्राथमिकता दें",
    2: "साढ़ेसाती उत्तरार्ध में वाणी-संयम, सुरक्षित बचत और पारिवारिक संवाद से स्थायी लाभ उठाएं",
    3: "तृतीय भाव के परम शुभ शनि गोचर का लाभ उठाकर साहसी विस्तार, नया प्रोजेक्ट व नेटवर्किंग आगे बढ़ाएं",
    4: "चतुर्थ ढैय्या में माता/गृह-संपत्ति व कार्यस्थल के कागजात की पूरी जांच के बाद ही बड़ा निर्णय लें",
    5: "पंचम शनि में सट्टेबाजी टालकर कौशल उन्नयन, शोध और संतान/शिक्षा योजना को सुव्यवस्थित करें",
    6: "षष्ठ भाव के अत्यंत शुभ शनि गोचर में करियर-लक्ष्य, प्रतिस्पर्धा व पुराने ऋण समाप्ति पर जोर दें",
    7: "सप्तम शनि में व्यापारिक साझेदारी व वैवाहिक संवाद में पारदर्शिता और लिखित स्पष्टता बनाए रखें",
    8: "अष्टम ढैय्या में जोखिम भरे निवेश व उधार से दूर रहें तथा नियमित योग-साधना को नियम बनाएं",
    9: "नवम शनि में दीर्घकालिक लक्ष्य, उच्च प्रशिक्षण व धर्मसम्मत कर्म से भाग्योदय की नींव मजबूत करें",
    10: "दशम शनि में कड़ी मेहनत, अनुशासन और प्रशासनिक कौशल से स्थायी पद-प्रतिष्ठा अर्जित करें",
    11: "एकादश भाव के श्रेष्ठ लाभकारी शनि गोचर में संपत्ति क्रय, आय विस्तार और बड़े निवेश साकार करें",
    12: "साढ़ेसाती प्रथम चरण में अनावश्यक व्यय पर नियंत्रण रखें और विदेश/ऑनलाइन अवसरों की योजना बनाएं"
  };
  const PLANET_ANTAR_DOMAIN = {
    sun: "नेतृत्व, राजकीय/प्रशासनिक कार्य व आत्मसम्मान",
    moon: "मानसिक शांति, जनसंपर्क, गृह-सुख व रचनात्मकता",
    mars: "पराक्रम, तकनीकी दक्षता, भूमि-संपत्ति व ऊर्जा",
    mercury: "व्यापार, संवाद, लेखन, वित्त व विश्लेषणात्मक कौशल",
    jupiter: "ज्ञान, धन-वृद्धि, संतान/शिक्षा व शुभ मांगलिक उन्नति",
    venus: "सुख-सुविधा, कला, वाहन-ऐश्वर्य व दांपत्य/साझेदारी सौहार्द",
    saturn: "दीर्घकालिक करियर निर्माण, अनुशासन, सेवा व स्थायी संपत्ति",
    rahu: "नवीन तकनीक, दूरस्थ/विदेशी संपर्क व तीव्र महत्वाकांक्षा",
    ketu: "गहन शोध, विशेषज्ञता, आध्यात्मिक एकाग्रता व सूक्ष्म विवेक"
  };
  const describeAntardashaNature = (planetId, planetHi) => {
    const owned = getOwnedHouses(lagnaNum, planetId);
    const domain = PLANET_ANTAR_DOMAIN[planetId] || "कर्म एवं व्यक्तिगत विकास";
    if (planetId === "rahu" || planetId === "ketu") {
      const pl = getPlanet(report, planetId);
      const hPos = pl?.houseInLagna || 1;
      return {
        houseClause: `${hPos}वें भाव स्थित ${planetHi} अंतर्दशा (${domain})`,
        natureTone: planetId === "rahu" ? "अप्रत्याशित अवसर, नवाचार और बाहरी नेटवर्क को सक्रिय करती है" : "गहन एकाग्रता, शोध और अनावश्यक उलझनों से मुक्ति दिलाती है",
        actionFocus: planetId === "rahu" ? "आधुनिक तकनीक व दूरस्थ संपर्क का लाभ लें, पर भ्रामक सौदों से बचें" : "विशेषज्ञ कौशल निखारें और शांत विवेक से निर्णय लें"
      };
    }
    const fc = getFunctionalClass(lagnaNum, planetId);
    const ownsMaraka = owned.some((x) => x === 2 || x === 7) && !owned.includes(1) && !owned.some((x) => x === 5 || x === 9);
    const houseList = owned.length > 0 ? `भाव ${owned.join("/")}` : "प्रमुख भाव";
    if (fc === "yogakaraka") {
      return {
        houseClause: `योगकारक ${planetHi} अंतर्दशा (${houseList} स्वामी — ${domain})`,
        natureTone: "राजयोगकारी उन्नति, पदोन्नति और स्थायी समृद्धि का मार्ग खोलती है",
        actionFocus: "इस उच्च फलदायी चरण में करियर विस्तार, संपत्ति या बड़े लक्ष्य प्राथमिकता से साधें"
      };
    }
    if (fc === "lagna") {
      return {
        houseClause: `लग्नेश ${planetHi} अंतर्दशा (${houseList} स्वामी — ${domain})`,
        natureTone: "व्यक्तिगत पहचान, आत्मविश्वास और स्वास्थ्य-स्फूर्ति को सीधे बल देती है",
        actionFocus: "स्वयं के नेतृत्व, ब्रांड/प्रतिष्ठा निर्माण और महत्वपूर्ण पहल को आगे बढ़ाएं"
      };
    }
    if (fc === "trikona") {
      return {
        houseClause: `त्रिकोणेश ${planetHi} अंतर्दशा (${houseList} स्वामी — ${domain})`,
        natureTone: "भाग्य-सहयोग, विद्या/संतान सुख और सृजनशील समृद्धि प्रदान करती है",
        actionFocus: "शिक्षा, सृजनशील निवेश और शुभ मांगलिक योजनाओं को गति दें"
      };
    }
    if (fc === "dusthana") {
      return {
        houseClause: `दुःस्थान स्वामी ${planetHi} अंतर्दशा (${houseList} — ${domain})`,
        natureTone: "सामान्य से अधिक परिश्रम, प्रतिस्पर्धा या बाहरी बदलाव के बाद परिपक्व लाभ देती है",
        actionFocus: "कर्ज/विवाद व आवेगी बदलाव से बचें; अनुशासित दिनचर्या और व्यय नियंत्रण रखें"
      };
    }
    if (ownsMaraka) {
      return {
        houseClause: `धन/साझेदारी (${houseList}) स्वामी ${planetHi} अंतर्दशा (${domain})`,
        natureTone: "आर्थिक लेन-देन व साझेदारी में सक्रियता के साथ स्वास्थ्य सजगता की मांग करती है",
        actionFocus: "वित्तीय अनुबंध स्पष्ट रखें, कुटुम्ब सौहार्द बढ़ाएं और नियमित स्वास्थ्य जांच कराएं"
      };
    }
    if (fc === "kendra") {
      return {
        houseClause: `केंद्रेश ${planetHi} अंतर्दशा (${houseList} स्वामी — ${domain})`,
        natureTone: "कार्यक्षेत्र, गृह-सुख और व्यावहारिक उत्तरदायित्वों को सुदृढ़ बनाती है",
        actionFocus: "व्यावसायिक ढांचे को मजबूत करें और निरंतर कर्म से स्थायी परिणाम पाएं"
      };
    }
    return {
      houseClause: `उपचय/लाभ (${houseList}) स्वामी ${planetHi} अंतर्दशा (${domain})`,
      natureTone: "निरंतर प्रयास से आय, पराक्रम और व्यावहारिक नेटवर्क में क्रमिक वृद्धि करती है",
      actionFocus: "लगातार कौशल अभ्यास, नेटवर्किंग और अनुशासित बचत पर ध्यान केंद्रित करें"
    };
  };
  const yearRows = Array.from({ length: 5 }, (_, idx) => {
    const yr = currentYear + idx;
    const isCurrentRow = idx === 0;
    const evalEpoch = isCurrentRow ? nowMs : Date.UTC(yr, 5, 15, 6, 30, 0);
    let mahaHi = "मुख्य";
    let antarHi = "सक्रिय";
    let mahaId = "jupiter";
    let antarId = "mercury";
    if (vim) {
      if (isCurrentRow) {
        mahaHi = vim.activeMahadasha.lordHindi;
        antarHi = vim.activeAntardasha.lordHindi;
        mahaId = vim.activeMahadasha.lordId;
        antarId = vim.activeAntardasha.lordId;
      } else {
        const md = vim.mahadashas.find((m) => evalEpoch >= m.startUtcMs && evalEpoch < m.endUtcMs) || vim.activeMahadasha;
        const ad = md.antardashas.find((a) => evalEpoch >= a.startUtcMs && evalEpoch < a.endUtcMs) || md.antardashas[0];
        mahaHi = md.lordHindi;
        antarHi = ad.lordHindi;
        mahaId = md.lordId;
        antarId = ad.lordId;
      }
    }
    const liveJupRow = isCurrentRow ? liveGochar?.grahaRows.find((r) => r.id === "jupiter") : void 0;
    const liveSatRow = isCurrentRow ? liveGochar?.grahaRows.find((r) => r.id === "saturn") : void 0;
    const snap = liveJupRow && liveSatRow ? null : computeEphemerisSnapshot(evalEpoch);
    const jupSign = liveJupRow ? liveJupRow.currentRashiNumber : snap.grahas.jupiter.signNumber;
    const satSign = liveSatRow ? liveSatRow.currentRashiNumber : snap.grahas.saturn.signNumber;
    const jupFromMoon = liveJupRow ? liveJupRow.houseFromNatalMoon : (jupSign - moonRashiNum + 12) % 12 + 1;
    const satFromMoon = liveSatRow ? liveSatRow.houseFromNatalMoon : (satSign - moonRashiNum + 12) % 12 + 1;
    const jupFavorable = [2, 5, 7, 9, 11].includes(jupFromMoon);
    const satFavorable = [3, 6, 11].includes(satFromMoon);
    const satSadeOrDhaiya = [1, 2, 4, 8, 12].includes(satFromMoon);
    const mClass = getFunctionalClass(lagnaNum, mahaId);
    const aClass = getFunctionalClass(lagnaNum, antarId);
    let rawScore = 3;
    if (mClass === "yogakaraka" || mClass === "lagna" || mClass === "trikona") rawScore += 0.65;
    else if (mClass === "dusthana") rawScore -= 0.55;
    if (aClass === "yogakaraka" || aClass === "lagna" || aClass === "trikona") rawScore += 0.55;
    else if (aClass === "dusthana") rawScore -= 0.45;
    if (jupFavorable) rawScore += 0.7;
    if (satFavorable) rawScore += 0.45;
    if (satSadeOrDhaiya) rawScore -= 0.45;
    const stars = Math.min(5, Math.max(2, Math.round(rawScore)));
    const starStr = `${"★".repeat(stars)}${"☆".repeat(5 - stars)}`;
    const jupRashiHi = RASHI_HI_SHORT[jupSign - 1];
    const satRashiHi = RASHI_HI_SHORT[satSign - 1];
    const antarMeta = describeAntardashaNature(antarId, antarHi);
    const jupEffect = JUPITER_MOON_HOUSE_EFFECT[jupFromMoon] || "संतुलित प्रगति व स्थिरता बनती है";
    const satAction = SATURN_MOON_HOUSE_ACTION[satFromMoon] || "धैर्यपूर्वक कर्म व अनुशासन बनाए रखें";
    const yearLead = isCurrentRow ? `वर्तमान सक्रिय ${mahaHi} महादशा में ${antarMeta.houseClause} ${antarMeta.natureTone}।` : `वर्ष ${yr} में ${mahaHi} महादशा के अंतर्गत ${antarMeta.houseClause} ${antarMeta.natureTone}।`;
    const transitClause = `गोचर गुरु (${jupRashiHi}, चंद्र से ${jupFromMoon}वां) के प्रभाव से ${jupEffect}।`;
    const actionClause = `कार्य-योजना: ${satAction}; साथ ही ${antarMeta.actionFocus}।`;
    return {
      year: yr,
      dashaLabel: `${mahaHi} – ${antarHi}`,
      transitNote: `गुरु: ${jupRashiHi} (${jupFromMoon}) • शनि: ${satRashiHi} (${satFromMoon})`,
      stars,
      starStr,
      summary: `${yearLead} ${transitClause} ${actionClause}`
    };
  });
  const html = `
    ${buildBookPageHeader2(`डिजिटल ज्योतिषाचार्य : 5-वर्षीय वार्षिक रोडमैप (${currentYear}–${currentYear + 4})`, personHeader, appLogo)}
    ${buildSectionTitleBar2("DJ4", `आने वाले 5 वर्षों का वार्षिक रोडमैप (${currentYear} से ${currentYear + 4})`, "विंशोत्तरी अंतर्दशा + गुरु/शनि गोचर आधारित")}

    <table class="book-table" style="font-size: 8.2px; width: 100%; table-layout: fixed;">
      <thead>
        <tr>
          <th style="width: 9%; text-align:center;">वर्ष</th>
          <th style="width: 19%;">सक्रिय अंतर्दशा व गोचर</th>
          <th style="width: 13%; text-align:center;">शुभता रेटिंग</th>
          <th style="width: 59%;">वार्षिक फलादेश एवं व्यावहारिक कार्य-योजना</th>
        </tr>
      </thead>
      <tbody>
        ${yearRows.map(
    (r, idx) => `
            <tr style="background:${idx === 0 ? VEDIC_BOOK_THEME.emeraldSoft : idx % 2 === 0 ? "#FFFDF8" : "#FEF6E4"}; page-break-inside: avoid;">
              <td style="text-align:center; font-weight:900; font-size: 9.8px; color:${VEDIC_BOOK_THEME.cosmicNavy}; white-space: nowrap;">${r.year}${idx === 0 ? '<div style="font-size:6.8px; color:#059669;">वर्तमान</div>' : ""}</td>
              <td style="padding: 8px 7px;">
                <div style="font-weight:800; color:${VEDIC_BOOK_THEME.saffronDeep};">${esc2(r.dashaLabel)}</div>
                <div style="font-size:7.3px; color:${VEDIC_BOOK_THEME.inkMuted}; margin-top:2px;">${esc2(r.transitNote)}</div>
              </td>
              <td style="text-align:center; white-space: nowrap;">
                <div style="font-size: 11px; color: ${r.stars >= 4 ? "#059669" : r.stars === 3 ? "#D97706" : "#C2410C"}; letter-spacing: 0.5px;">${r.starStr}</div>
                <div style="font-size: 7.4px; font-weight: 800; color: ${VEDIC_BOOK_THEME.cosmicNavy}; margin-top: 2px;">${r.stars} / 5 स्टार</div>
              </td>
              <td style="padding: 8px 8px; line-height: 1.52; color: ${VEDIC_BOOK_THEME.inkPrimary};">${esc2(r.summary)}</td>
            </tr>`
  ).join("")}
      </tbody>
    </table>

    <div class="book-card" style="margin-top: 10px; background: ${VEDIC_BOOK_THEME.pureIvory}; border: 1.4px solid ${VEDIC_BOOK_THEME.templeGold}; border-radius: 9px; padding: 10px 13px; font-size: 8.3px; line-height: 1.58; page-break-inside: avoid;">
      <div style="font-weight: 900; color: ${VEDIC_BOOK_THEME.cosmicNavy}; font-size: 9.4px; margin-bottom: 4px;">
        ✦ 5-वर्षीय रोडमैप का सही उपयोग कैसे करें?
      </div>
      <div>• <b>4★ या 5★ वाले वर्ष (विस्तार काल):</b> नया व्यवसाय, संपत्ति क्रय, विवाह, पदोन्नति या बड़ा निवेश इन वर्षों में प्राथमिकता से करें।</div>
      <div style="margin-top:3px;">• <b>3★ वाले वर्ष (निर्माण काल):</b> शिक्षा, कौशल उन्नयन, टीम निर्माण और स्थिर बचत पर ध्यान केंद्रित करें।</div>
      <div style="margin-top:3px;">• <b>2★ वाले वर्ष (संरक्षण काल):</b> किसी से विवाद या जोखिम भरे ऋण से दूर रहें, स्वास्थ्य व आध्यात्मिक साधना को मजबूत बनाएं।</div>
    </div>
  `;
  return {
    sectionCode: "DJ4",
    sectionTag: `5-वर्षीय रोडमैप (${currentYear}–${currentYear + 4})`,
    html
  };
}
function buildPracticalGemstoneAndRemedyPage(report, h) {
  const { esc: esc2, buildBookPageHeader: buildBookPageHeader2, buildSectionTitleBar: buildSectionTitleBar2, personHeader, appLogo } = h;
  const lagnaNum = report.panchang.lagnaNumber || 1;
  const lagnaLordId = getHouseLordId(lagnaNum, 1);
  const fifthLordId = getHouseLordId(lagnaNum, 5);
  const ninthLordId = getHouseLordId(lagnaNum, 9);
  const recommendedSpecs = [];
  const addedRec = /* @__PURE__ */ new Set();
  const candidates = [
    { id: lagnaLordId, role: "जीवन रत्न (लग्नेश — प्रथम भाव)", isLagna: true },
    { id: fifthLordId, role: "विद्या / बुद्धि रत्न (पंचमेश — पंचम भाव)", isLagna: false },
    { id: ninthLordId, role: "भाग्य रत्न (नवमेश — नवम भाव)", isLagna: false }
  ];
  for (const c of candidates) {
    if (addedRec.has(c.id)) continue;
    const spec = GEMSTONE_BY_PLANET[c.id];
    if (!spec) continue;
    const owned = getOwnedHouses(lagnaNum, c.id);
    const alsoDusthana = owned.filter((house) => [6, 8, 12].includes(house));
    if (!c.isLagna && owned.every((house) => [6, 8, 12].includes(house))) continue;
    addedRec.add(c.id);
    const pl = getPlanet(report, c.id);
    const cautionParts = [];
    if (alsoDusthana.length > 0 && !c.isLagna) {
      cautionParts.push(`भाव ${alsoDusthana.join("/")} का सह-स्वामित्व होने से पहले 3 दिन परीक्षण करें`);
    }
    if (pl?.isDebilitated) {
      cautionParts.push("जन्म कुंडली में नीच स्थिति के कारण रत्न के स्थान पर मंत्र जप व दान भी उत्तम विकल्प है");
    }
    recommendedSpecs.push({
      roleLabel: c.role,
      spec,
      cautionNote: cautionParts.length > 0 ? cautionParts.join(" • ") : void 0
    });
  }
  const dusthanaHouses = [6, 8, 12];
  const contraindicated = [];
  const seenAvoid = /* @__PURE__ */ new Set();
  for (const dh of dusthanaHouses) {
    const lid = getHouseLordId(lagnaNum, dh);
    if (seenAvoid.has(lid) || lid === lagnaLordId || addedRec.has(lid)) continue;
    const spec = GEMSTONE_BY_PLANET[lid];
    if (!spec) continue;
    seenAvoid.add(lid);
    const ownedDusthanas = getOwnedHouses(lagnaNum, lid).filter((x) => [6, 8, 12].includes(x));
    contraindicated.push({
      planetHi: spec.planetHi,
      dusthanaHousesLabel: ownedDusthanas.map((x) => `${x}वां भाव`).join(" व "),
      gemHi: spec.gemHi,
      warningHi: spec.avoidWarnHi
    });
  }
  const html = `
    ${buildBookPageHeader2("डिजिटल ज्योतिषाचार्य : रत्न एवं उपाय — पूर्ण व्यावहारिक विधि", personHeader, appLogo)}
    ${buildSectionTitleBar2("DJ5a", `शुभ त्रिकोण रत्न धारण की पूर्ण व्यावहारिक विधि (${report.panchang.lagnaName} लग्न)`, "लग्नेश, पंचमेश एवं नवमेश आधारित")}

    <div style="display: flex; flex-direction: column; gap: 8px; margin-bottom: 10px;">
      ${recommendedSpecs.map(
    (item, idx) => `
          <div class="book-card" style="background: ${VEDIC_BOOK_THEME.pureIvory}; border: 1.4px solid ${VEDIC_BOOK_THEME.templeGold}; border-left: 4.5px solid #059669; border-radius: 9px; padding: 8px 11px; page-break-inside: avoid;">
            <div style="display: table; width: 100%; border-bottom: 1px solid ${VEDIC_BOOK_THEME.borderMuted}; padding-bottom: 4px; margin-bottom: 5px;">
              <div style="display: table-cell; font-size: 9.5px; font-weight: 900; color: ${VEDIC_BOOK_THEME.cosmicNavy};">
                ${idx + 1}. ${esc2(item.spec.gemHi)} — <span style="color:${VEDIC_BOOK_THEME.saffronDeep};">${esc2(item.roleLabel)}</span>
              </div>
              <div style="display: table-cell; text-align: right; font-size: 7.7px; font-weight: 800; color: #065F46; white-space: nowrap;">
                उपरत्न: ${esc2(item.spec.uparatnaHi)}
              </div>
            </div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 4px 12px; font-size: 8px; line-height: 1.46; color: ${VEDIC_BOOK_THEME.inkPrimary};">
              <div><b>• वजन (रत्ती):</b> ${esc2(item.spec.rattiHi)} (शरीर भार ~10 किग्रा पर 1 रत्ती)</div>
              <div><b>• धातु एवं उंगली:</b> ${esc2(item.spec.metalHi)} में ${esc2(item.spec.fingerHi)}</div>
              <div><b>• शुभ वार व समय:</b> ${esc2(item.spec.dayHi)} • ${esc2(item.spec.timingHi)}</div>
              <div><b>• शुद्धिकरण विधि:</b> ${esc2(item.spec.purificationHi)}</div>
            </div>
            <div style="margin-top: 5px; padding: 5px 8px; background: ${VEDIC_BOOK_THEME.emeraldSoft}; border: 1px solid #A7F3D0; border-radius: 6px; font-size: 8.3px; color: #065F46; font-weight: 700; line-height: 1.65; overflow: visible;">
              प्राण-प्रतिष्ठा मंत्र (108 बार जप): <span class="book-beej-mantra" style="font-weight: 700; color: #065F46;">${esc2(UNIVERSAL_VEDIC_BEEJ_MANTRA_BY_PLANET[item.spec.planetId] || item.spec.mantraHi)}</span>
            </div>
            ${item.cautionNote ? `<div style="margin-top: 3px; font-size: 7.5px; color: ${VEDIC_BOOK_THEME.saffronDeep}; font-weight: 700;">नोट: ${esc2(item.cautionNote)}</div>` : ""}
          </div>`
  ).join("")}
    </div>

    ${buildSectionTitleBar2("DJ5b", "किस रत्न से बचें? (वर्जित रत्न एवं सावधानी — Contraindications)", "6वें, 8वें व 12वें भाव स्वामियों के रत्न")}
    <table class="book-table" style="font-size: 8px; width: 100%; table-layout: fixed;">
      <thead>
        <tr>
          <th style="width: 14%;">ग्रह</th>
          <th style="width: 17%;">दुःस्थान स्वामित्व</th>
          <th style="width: 24%;">वर्जित रत्न (न पहनें)</th>
          <th style="width: 45%;">क्यों बचें? (स्पष्ट कारण)</th>
        </tr>
      </thead>
      <tbody>
        ${contraindicated.length > 0 ? contraindicated.map(
    (c, idx) => `
                  <tr style="background:${idx % 2 === 0 ? "#FEF2F2" : "#FFF7ED"}; page-break-inside: avoid;">
                    <td style="font-weight:800; color:${VEDIC_BOOK_THEME.crimson};">${esc2(c.planetHi)}</td>
                    <td style="font-weight:700; color:${VEDIC_BOOK_THEME.cosmicNavy};">${esc2(c.dusthanaHousesLabel)}</td>
                    <td style="font-weight:800; color:${VEDIC_BOOK_THEME.crimson};">${esc2(c.gemHi)}</td>
                    <td style="line-height: 1.46;">${esc2(c.warningHi)}</td>
                  </tr>`
  ).join("") : `<tr style="background:#FFFDF8;"><td colspan="4" style="text-align:center;">आपकी कुंडली के प्रमुख त्रिकोण स्वामी शुभ हैं; फिर भी बिना परीक्षण कोई भी क्रूर ग्रह रत्न धारण न करें।</td></tr>`}
      </tbody>
    </table>

    <div class="book-card" style="margin-top: 7px; background: ${VEDIC_BOOK_THEME.templeGoldSoft}; border: 1.3px solid ${VEDIC_BOOK_THEME.templeGold}; border-radius: 8px; padding: 8px 11px; font-size: 7.9px; line-height: 1.52; color: ${VEDIC_BOOK_THEME.inkPrimary}; page-break-inside: avoid;">
      <b style="color:${VEDIC_BOOK_THEME.cosmicNavy};">✦ रत्न धारण का 4-चरणीय शास्त्रीय नियम:</b>
      (1) सदैव प्राकृतिक व लैब-प्रमाणित रत्न चुनें और नीचे से त्वचा को स्पर्श करने वाली अंगूठी बनवाएं।
      (2) धारण करने से पूर्व रात्रि में रत्न को कच्चे दूध व गंगाजल के पात्र में रखें।
      (3) प्रातः स्नान के पश्चात पूर्व/उत्तर मुख होकर धूप-दीप दिखाएं और ऊपर दिए गए बीज मंत्र का 108 बार जप कर धारण करें।
      (4) वर्जित ग्रहों (6, 8, 12 भाव स्वामी) की शांति के लिए रत्न नहीं, बल्कि केवल <b>सात्विक दान व मंत्र जप</b> सर्वोत्तम होता है।
    </div>
  `;
  return {
    sectionCode: "DJ5",
    sectionTag: "रत्न व उपाय व्यावहारिक विधि",
    html
  };
}
const BOOK_FONT_STACK = "'Noto Sans Devanagari', 'Nirmala UI', 'Mangal', 'Kohinoor Devanagari', system-ui, -apple-system, sans-serif";
function sanitizeUnicodeText(raw) {
  return String(raw ?? "").replace(/\$([^$]+)\$/g, "$1").replace(/\\\(([^)]+)\\\)/g, "$1").replace(/\\\[([^\]]+)\\\]/g, "$1").replace(/\^?\{\\circ\}|\^\\circ|\\circ|\\degree|\\deg\b/g, "°").replace(/\^?\{\\prime\\prime\}|\\prime\\prime|\\second\b/g, '"').replace(/\^?\{\\prime\}|\\prime/g, "'").replace(/\\cdot/g, "·").replace(/\\times/g, "×").replace(/(\d{1,3})\s*°\s*(\d{1,2})\s*['′]\s*(\d{1,2})\s*["″]/g, `$1° $2' $3"`);
}
function esc(value) {
  return sanitizeUnicodeText(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
const PILL_CENTER_STYLE = "display: inline-flex; align-items: center; justify-content: center; line-height: 1.15; padding-top: 4px; padding-bottom: 4px; vertical-align: middle; box-sizing: border-box; text-align: center;";
const PILL_INNER_SPAN_STYLE = "display: inline-block; line-height: 1.15;";
const CLEAN_WEBSITE_URL = PANDITJI_BRAND_URLS.websiteDisplay.replace(/\s+/g, "");
function buildNowrapWebsiteHtml(color = VEDIC_BOOK_THEME.saffronDeep) {
  return `<span style="white-space: nowrap; display: inline-block; letter-spacing: 0; font-family: monospace; font-weight: 800; color: ${color};">${esc(
    CLEAN_WEBSITE_URL
  )}</span>`;
}
function convertVargaSlotsToChartHouses(slots) {
  return slots.map((s) => ({
    houseNumber: s.houseNumber,
    rashiNumber: s.rashiNumber,
    rashiName: s.rashiNameHi,
    bhavaTitle: `भाव ${s.houseNumber}`,
    planets: s.planets.map((p) => ({
      shortHindi: p.shortHindi,
      chartLabel: p.chartLabel || formatPlanetLabel(p),
      degInt: p.degInt,
      hindiName: p.hindiName,
      degree: p.fullDMS,
      fullDegreeDMS: p.fullDMS,
      statusBadge: "madhyam"
    }))
  }));
}
function buildNorthIndianSvg(houses, sizePx, lagnaDegInt) {
  const housePos = {
    1: { rx: 50, ry: 41.5, px: 50, py: 25.5, maxPerLine: 2 },
    2: { rx: 25.5, ry: 19.5, px: 25.5, py: 9.8, maxPerLine: 2 },
    3: { rx: 19.4, ry: 25.5, px: 10.6, py: 25.5, maxPerLine: 1, isSide: true },
    4: { rx: 41.5, ry: 50, px: 24.5, py: 50, maxPerLine: 2 },
    5: { rx: 19.4, ry: 74.5, px: 10.6, py: 74.5, maxPerLine: 1, isSide: true },
    6: { rx: 25.5, ry: 80.5, px: 25.5, py: 90.2, maxPerLine: 2 },
    7: { rx: 50, ry: 58.5, px: 50, py: 74.5, maxPerLine: 2 },
    8: { rx: 74.5, ry: 80.5, px: 74.5, py: 90.2, maxPerLine: 2 },
    9: { rx: 80.6, ry: 74.5, px: 89.4, py: 74.5, maxPerLine: 1, isSide: true },
    10: { rx: 58.5, ry: 50, px: 75.5, py: 50, maxPerLine: 2 },
    11: { rx: 80.6, ry: 25.5, px: 89.4, py: 25.5, maxPerLine: 1, isSide: true },
    12: { rx: 74.5, ry: 19.5, px: 74.5, py: 9.8, maxPerLine: 2 }
  };
  const cells = houses.map((h) => {
    const pos = housePos[h.houseNumber];
    if (!pos) return "";
    const raw = h.planets || [];
    const crowded = raw.length >= 3;
    const perLine = pos.isSide ? raw.length >= 4 ? 2 : 1 : crowded ? 3 : pos.maxPerLine;
    const tokens = raw.map(
      (p) => pos.isSide || crowded ? p.chartLabel || p.shortHindi : `${p.chartLabel || p.shortHindi}${String(p.degInt).padStart(2, "0")}`
    );
    const lines = [];
    for (let i = 0; i < tokens.length; i += perLine) {
      lines.push(tokens.slice(i, i + perLine).join(" "));
    }
    const step = pos.isSide ? lines.length >= 3 ? 3.2 : 3.7 : lines.length >= 3 ? 3.5 : 4;
    const fSize = pos.isSide ? lines.length >= 3 ? 2.75 : 3.1 : crowded ? 3 : 3.45;
    const planetSvg = lines.map((line, idx) => {
      const yOff = (idx - (lines.length - 1) / 2) * step;
      return `<text x="${pos.px}" y="${(pos.py + yOff).toFixed(2)}" dy="-0.06em" text-anchor="middle" dominant-baseline="central" fill="${VEDIC_BOOK_THEME.cosmicNavy}" font-size="${fSize}" font-weight="800" font-family="${BOOK_FONT_STACK}">${esc(
        line
      )}</text>`;
    }).join("");
    const lagnaBadge = h.houseNumber === 1 ? `<text x="50" y="13.5" dy="-0.06em" text-anchor="middle" dominant-baseline="central" fill="${VEDIC_BOOK_THEME.saffronDeep}" font-size="3.2" font-weight="800" font-family="${BOOK_FONT_STACK}">${typeof lagnaDegInt === "number" ? `लग्न ${String(lagnaDegInt).padStart(2, "0")}°` : "लग्न"}</text>` : "";
    return `
        <text x="${pos.rx}" y="${pos.ry}" text-anchor="middle" dominant-baseline="central" fill="${VEDIC_BOOK_THEME.saffron}" font-size="3.7" font-weight="800" font-family="monospace">${h.rashiNumber}</text>
        ${lagnaBadge}
        ${planetSvg}
      `;
  }).join("");
  return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="${sizePx}" height="${sizePx}" style="width:${sizePx}px;height:${sizePx}px;display:block;margin:0 auto;">
      <rect x="1.5" y="1.5" width="97" height="97" rx="2.5" fill="${VEDIC_BOOK_THEME.warmIvory}" stroke="${VEDIC_BOOK_THEME.templeGold}" stroke-width="1.4" />
      <rect x="3.2" y="3.2" width="93.6" height="93.6" rx="1.2" fill="none" stroke="${VEDIC_BOOK_THEME.saffron}" stroke-opacity="0.38" stroke-width="0.45" />
      <line x1="1.5" y1="1.5" x2="98.5" y2="98.5" stroke="${VEDIC_BOOK_THEME.templeGoldDark}" stroke-width="0.8" />
      <line x1="98.5" y1="1.5" x2="1.5" y2="98.5" stroke="${VEDIC_BOOK_THEME.templeGoldDark}" stroke-width="0.8" />
      <polygon points="50,1.5 98.5,50 50,98.5 1.5,50" fill="none" stroke="${VEDIC_BOOK_THEME.templeGoldDark}" stroke-width="0.9" />
      <text x="50" y="50.4" dy="-0.06em" text-anchor="middle" dominant-baseline="central" fill="${VEDIC_BOOK_THEME.templeGold}" fill-opacity="0.22" font-size="7" font-weight="800">ॐ</text>
      ${cells}
    </svg>
  `;
}
function buildSouthIndianSvg(houses, sizePx, centerTitle, lagnaDegInt) {
  const byRashi = {};
  houses.forEach((h) => {
    byRashi[h.rashiNumber] = h;
  });
  const gridBoxes = [
    { rashi: 12, label: "12 मीन", col: 0, row: 0 },
    { rashi: 1, label: "1 मेष", col: 1, row: 0 },
    { rashi: 2, label: "2 वृष", col: 2, row: 0 },
    { rashi: 3, label: "3 मि", col: 3, row: 0 },
    { rashi: 4, label: "4 कर्क", col: 3, row: 1 },
    { rashi: 5, label: "5 सिंह", col: 3, row: 2 },
    { rashi: 6, label: "6 कन्या", col: 3, row: 3 },
    { rashi: 7, label: "7 तुला", col: 2, row: 3 },
    { rashi: 8, label: "8 वृश्चि", col: 1, row: 3 },
    { rashi: 9, label: "9 धनु", col: 0, row: 3 },
    { rashi: 10, label: "10 मकर", col: 0, row: 2 },
    { rashi: 11, label: "11 कुंभ", col: 0, row: 1 }
  ];
  const cellSize = 24;
  const pad = 2;
  const boxSvgs = gridBoxes.map((b) => {
    const x = pad + b.col * cellSize;
    const y = pad + b.row * cellSize;
    const h = byRashi[b.rashi];
    const isLagna = h?.houseNumber === 1;
    const planets = h?.planets || [];
    const tokens = planets.map((p) => p.chartLabel || p.shortHindi);
    const lines = [];
    for (let i = 0; i < tokens.length; i += 2) {
      lines.push(tokens.slice(i, i + 2).join(" "));
    }
    const planetLines = lines.map((ln, idx) => {
      const py = y + 12 + (idx - (lines.length - 1) / 2) * 3.6;
      return `<text x="${x + cellSize / 2}" y="${py.toFixed(1)}" dy="-0.06em" text-anchor="middle" dominant-baseline="central" fill="${VEDIC_BOOK_THEME.cosmicNavy}" font-size="3.2" font-weight="800" font-family="${BOOK_FONT_STACK}">${esc(
        ln
      )}</text>`;
    }).join("");
    return `
        <rect x="${x}" y="${y}" width="${cellSize}" height="${cellSize}" fill="${isLagna ? "#FFF3E0" : VEDIC_BOOK_THEME.warmIvory}" stroke="${VEDIC_BOOK_THEME.templeGoldDark}" stroke-width="0.68" />
        <text x="${x + 1.6}" y="${y + 3.4}" dy="-0.06em" dominant-baseline="central" fill="${VEDIC_BOOK_THEME.saffronDeep}" font-size="2.6" font-weight="700" font-family="${BOOK_FONT_STACK}">${esc(
      b.label
    )}</text>
        ${isLagna ? `<text x="${x + cellSize - 1.5}" y="${y + 3.4}" dy="-0.06em" text-anchor="end" dominant-baseline="central" fill="${VEDIC_BOOK_THEME.emerald}" font-size="2.5" font-weight="800" font-family="${BOOK_FONT_STACK}">${typeof lagnaDegInt === "number" ? `लग्न ${lagnaDegInt}°` : "लग्न"}</text>` : ""}
        ${planetLines}
        <text x="${x + cellSize - 1.5}" y="${y + cellSize - 2.2}" dy="-0.04em" text-anchor="end" dominant-baseline="central" fill="${VEDIC_BOOK_THEME.inkMuted}" font-size="2.35" font-family="'Noto Sans Devanagari', sans-serif">भा.${h?.houseNumber || ""}</text>
      `;
  }).join("");
  return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="${sizePx}" height="${sizePx}" style="width:${sizePx}px;height:${sizePx}px;display:block;margin:0 auto;">
      <rect x="1" y="1" width="98" height="98" rx="2" fill="${VEDIC_BOOK_THEME.pureIvory}" stroke="${VEDIC_BOOK_THEME.templeGold}" stroke-width="1.25" />
      <rect x="${pad + cellSize}" y="${pad + cellSize}" width="${cellSize * 2}" height="${cellSize * 2}" fill="${VEDIC_BOOK_THEME.templeGoldSoft}" stroke="${VEDIC_BOOK_THEME.templeGold}" stroke-width="0.7" />
      <text x="50" y="44.2" dy="-0.06em" text-anchor="middle" dominant-baseline="central" fill="${VEDIC_BOOK_THEME.saffron}" font-size="8" font-weight="800">ॐ</text>
      <text x="50" y="54.0" dy="-0.06em" text-anchor="middle" dominant-baseline="central" fill="${VEDIC_BOOK_THEME.cosmicNavy}" font-size="3.3" font-weight="800" font-family="${BOOK_FONT_STACK}">${esc(
    centerTitle
  )}</text>
      <text x="50" y="60.2" dy="-0.06em" text-anchor="middle" dominant-baseline="central" fill="${VEDIC_BOOK_THEME.inkMuted}" font-size="2.5" font-family="${BOOK_FONT_STACK}">दक्षिण भारतीय चक्र</text>
      ${boxSvgs}
    </svg>
  `;
}
function buildChartSvg(houses, chartStyle, sizePx, shortTitle, lagnaDegInt) {
  return chartStyle === "south" ? buildSouthIndianSvg(houses, sizePx, shortTitle, lagnaDegInt) : buildNorthIndianSvg(houses, sizePx, lagnaDegInt);
}
function drawRoundedRectPath(ctx, x, y, w, h, r) {
  const radius = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + w - radius, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + radius);
  ctx.lineTo(x + w, y + h - radius);
  ctx.quadraticCurveTo(x + w, y + h, x + w - radius, y + h);
  ctx.lineTo(x + radius, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}
function fillTextOpticallyCentered(ctx, text, x, y) {
  const prevBaseline = ctx.textBaseline;
  ctx.textBaseline = "alphabetic";
  const metrics = ctx.measureText(text);
  const ascent = metrics.actualBoundingBoxAscent;
  const descent = metrics.actualBoundingBoxDescent;
  if (Number.isFinite(ascent) && Number.isFinite(descent) && ascent > 0) {
    ctx.fillText(text, x, y + (ascent - descent) / 2);
  } else {
    ctx.textBaseline = "middle";
    ctx.fillText(text, x, y);
  }
  ctx.textBaseline = prevBaseline;
}
function renderNorthIndianCanvasDataUrl(houses, sizePx, lagnaDegInt) {
  if (typeof document === "undefined") return "";
  try {
    const dpr = 3;
    const cw = Math.max(240, Math.round(sizePx * dpr));
    const ch = cw;
    const u = cw / 100;
    const canvas = document.createElement("canvas");
    canvas.width = cw;
    canvas.height = ch;
    const ctx = canvas.getContext("2d");
    if (!ctx) return "";
    ctx.fillStyle = VEDIC_BOOK_THEME.warmIvory;
    ctx.fillRect(0, 0, cw, ch);
    drawRoundedRectPath(ctx, 1.5 * u, 1.5 * u, 97 * u, 97 * u, 2.5 * u);
    ctx.fillStyle = VEDIC_BOOK_THEME.warmIvory;
    ctx.fill();
    ctx.lineWidth = 1.4 * u;
    ctx.strokeStyle = VEDIC_BOOK_THEME.templeGold;
    ctx.stroke();
    drawRoundedRectPath(ctx, 3.2 * u, 3.2 * u, 93.6 * u, 93.6 * u, 1.2 * u);
    ctx.lineWidth = 0.45 * u;
    ctx.strokeStyle = "rgba(255, 111, 0, 0.38)";
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(1.5 * u, 1.5 * u);
    ctx.lineTo(98.5 * u, 98.5 * u);
    ctx.moveTo(98.5 * u, 1.5 * u);
    ctx.lineTo(1.5 * u, 98.5 * u);
    ctx.lineWidth = 0.85 * u;
    ctx.strokeStyle = VEDIC_BOOK_THEME.templeGoldDark;
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(50 * u, 1.5 * u);
    ctx.lineTo(98.5 * u, 50 * u);
    ctx.lineTo(50 * u, 98.5 * u);
    ctx.lineTo(1.5 * u, 50 * u);
    ctx.closePath();
    ctx.lineWidth = 0.95 * u;
    ctx.strokeStyle = VEDIC_BOOK_THEME.templeGoldDark;
    ctx.stroke();
    ctx.textAlign = "center";
    ctx.fillStyle = "rgba(212, 175, 55, 0.22)";
    ctx.font = `800 ${(7 * u).toFixed(1)}px ${BOOK_FONT_STACK}`;
    fillTextOpticallyCentered(ctx, "ॐ", 50 * u, 50.2 * u);
    const housePos = {
      1: { rx: 50, ry: 41.5, px: 50, py: 25.5, maxPerLine: 2 },
      2: { rx: 25.5, ry: 19.5, px: 25.5, py: 9.8, maxPerLine: 2 },
      3: { rx: 19.4, ry: 25.5, px: 10.6, py: 25.5, maxPerLine: 1, isSide: true },
      4: { rx: 41.5, ry: 50, px: 24.5, py: 50, maxPerLine: 2 },
      5: { rx: 19.4, ry: 74.5, px: 10.6, py: 74.5, maxPerLine: 1, isSide: true },
      6: { rx: 25.5, ry: 80.5, px: 25.5, py: 90.2, maxPerLine: 2 },
      7: { rx: 50, ry: 58.5, px: 50, py: 74.5, maxPerLine: 2 },
      8: { rx: 74.5, ry: 80.5, px: 74.5, py: 90.2, maxPerLine: 2 },
      9: { rx: 80.6, ry: 74.5, px: 89.4, py: 74.5, maxPerLine: 1, isSide: true },
      10: { rx: 58.5, ry: 50, px: 75.5, py: 50, maxPerLine: 2 },
      11: { rx: 80.6, ry: 25.5, px: 89.4, py: 25.5, maxPerLine: 1, isSide: true },
      12: { rx: 74.5, ry: 19.5, px: 74.5, py: 9.8, maxPerLine: 2 }
    };
    for (const h of houses) {
      const pos = housePos[h.houseNumber];
      if (!pos) continue;
      ctx.fillStyle = VEDIC_BOOK_THEME.saffron;
      ctx.font = `800 ${(3.7 * u).toFixed(1)}px monospace`;
      fillTextOpticallyCentered(ctx, String(h.rashiNumber), pos.rx * u, pos.ry * u);
      if (h.houseNumber === 1) {
        ctx.fillStyle = VEDIC_BOOK_THEME.saffronDeep;
        ctx.font = `800 ${(3.2 * u).toFixed(1)}px ${BOOK_FONT_STACK}`;
        const lagnaText = typeof lagnaDegInt === "number" ? `लग्न ${String(lagnaDegInt).padStart(2, "0")}°` : "लग्न";
        fillTextOpticallyCentered(ctx, lagnaText, 50 * u, 13.5 * u);
      }
      const raw = h.planets || [];
      if (raw.length === 0) continue;
      const crowded = raw.length >= 3;
      const perLine = pos.isSide ? raw.length >= 4 ? 2 : 1 : crowded ? 3 : pos.maxPerLine;
      const tokens = raw.map(
        (p) => pos.isSide || crowded ? p.chartLabel || p.shortHindi : `${p.chartLabel || p.shortHindi}${String(p.degInt).padStart(2, "0")}`
      );
      const lines = [];
      for (let i = 0; i < tokens.length; i += perLine) {
        lines.push(tokens.slice(i, i + perLine).join(" "));
      }
      const step = pos.isSide ? lines.length >= 3 ? 3.2 : 3.7 : lines.length >= 3 ? 3.5 : 4;
      const fSize = pos.isSide ? lines.length >= 3 ? 2.65 : 3.05 : crowded ? 2.95 : 3.45;
      ctx.fillStyle = VEDIC_BOOK_THEME.cosmicNavy;
      ctx.font = `800 ${(fSize * u).toFixed(1)}px ${BOOK_FONT_STACK}`;
      lines.forEach((line, idx) => {
        const yOff = (idx - (lines.length - 1) / 2) * step;
        fillTextOpticallyCentered(ctx, sanitizeUnicodeText(line), pos.px * u, (pos.py + yOff) * u);
      });
    }
    const dataUrl = canvas.toDataURL("image/png");
    canvas.width = 0;
    canvas.height = 0;
    return dataUrl.startsWith("data:image/png;base64,") ? dataUrl : "";
  } catch {
    return "";
  }
}
function renderSouthIndianCanvasDataUrl(houses, sizePx, centerTitle, lagnaDegInt) {
  if (typeof document === "undefined") return "";
  try {
    const dpr = 3;
    const cw = Math.max(240, Math.round(sizePx * dpr));
    const ch = cw;
    const u = cw / 100;
    const canvas = document.createElement("canvas");
    canvas.width = cw;
    canvas.height = ch;
    const ctx = canvas.getContext("2d");
    if (!ctx) return "";
    ctx.fillStyle = VEDIC_BOOK_THEME.pureIvory;
    ctx.fillRect(0, 0, cw, ch);
    drawRoundedRectPath(ctx, 1 * u, 1 * u, 98 * u, 98 * u, 2 * u);
    ctx.fillStyle = VEDIC_BOOK_THEME.pureIvory;
    ctx.fill();
    ctx.lineWidth = 1.25 * u;
    ctx.strokeStyle = VEDIC_BOOK_THEME.templeGold;
    ctx.stroke();
    const cellSize = 24;
    const pad = 2;
    ctx.fillStyle = VEDIC_BOOK_THEME.templeGoldSoft;
    ctx.fillRect((pad + cellSize) * u, (pad + cellSize) * u, cellSize * 2 * u, cellSize * 2 * u);
    ctx.lineWidth = 0.7 * u;
    ctx.strokeStyle = VEDIC_BOOK_THEME.templeGold;
    ctx.strokeRect((pad + cellSize) * u, (pad + cellSize) * u, cellSize * 2 * u, cellSize * 2 * u);
    ctx.textAlign = "center";
    ctx.fillStyle = VEDIC_BOOK_THEME.saffron;
    ctx.font = `800 ${(8 * u).toFixed(1)}px ${BOOK_FONT_STACK}`;
    fillTextOpticallyCentered(ctx, "ॐ", 50 * u, 44.2 * u);
    ctx.fillStyle = VEDIC_BOOK_THEME.cosmicNavy;
    ctx.font = `800 ${(3.2 * u).toFixed(1)}px ${BOOK_FONT_STACK}`;
    fillTextOpticallyCentered(ctx, sanitizeUnicodeText(centerTitle), 50 * u, 54 * u);
    ctx.fillStyle = VEDIC_BOOK_THEME.inkMuted;
    ctx.font = `600 ${(2.5 * u).toFixed(1)}px ${BOOK_FONT_STACK}`;
    fillTextOpticallyCentered(ctx, "दक्षिण भारतीय चक्र", 50 * u, 60.2 * u);
    const byRashi = {};
    houses.forEach((h) => {
      byRashi[h.rashiNumber] = h;
    });
    const gridBoxes = [
      { rashi: 12, label: "12 मीन", col: 0, row: 0 },
      { rashi: 1, label: "1 मेष", col: 1, row: 0 },
      { rashi: 2, label: "2 वृष", col: 2, row: 0 },
      { rashi: 3, label: "3 मि", col: 3, row: 0 },
      { rashi: 4, label: "4 कर्क", col: 3, row: 1 },
      { rashi: 5, label: "5 सिंह", col: 3, row: 2 },
      { rashi: 6, label: "6 कन्या", col: 3, row: 3 },
      { rashi: 7, label: "7 तुला", col: 2, row: 3 },
      { rashi: 8, label: "8 वृश्चि", col: 1, row: 3 },
      { rashi: 9, label: "9 धनु", col: 0, row: 3 },
      { rashi: 10, label: "10 मकर", col: 0, row: 2 },
      { rashi: 11, label: "11 कुंभ", col: 0, row: 1 }
    ];
    for (const b of gridBoxes) {
      const x = pad + b.col * cellSize;
      const y = pad + b.row * cellSize;
      const h = byRashi[b.rashi];
      const isLagna = h?.houseNumber === 1;
      ctx.fillStyle = isLagna ? "#FFF3E0" : VEDIC_BOOK_THEME.warmIvory;
      ctx.fillRect(x * u, y * u, cellSize * u, cellSize * u);
      ctx.lineWidth = 0.68 * u;
      ctx.strokeStyle = VEDIC_BOOK_THEME.templeGoldDark;
      ctx.strokeRect(x * u, y * u, cellSize * u, cellSize * u);
      ctx.textAlign = "left";
      ctx.fillStyle = VEDIC_BOOK_THEME.saffronDeep;
      ctx.font = `700 ${(2.6 * u).toFixed(1)}px ${BOOK_FONT_STACK}`;
      fillTextOpticallyCentered(ctx, b.label, (x + 1.5) * u, (y + 3.4) * u);
      if (isLagna) {
        ctx.textAlign = "right";
        ctx.fillStyle = VEDIC_BOOK_THEME.emerald;
        ctx.font = `800 ${(2.5 * u).toFixed(1)}px ${BOOK_FONT_STACK}`;
        fillTextOpticallyCentered(
          ctx,
          typeof lagnaDegInt === "number" ? `लग्न ${lagnaDegInt}°` : "लग्न",
          (x + cellSize - 1.4) * u,
          (y + 3.4) * u
        );
      }
      const planets = h?.planets || [];
      const tokens = planets.map((p) => p.chartLabel || p.shortHindi);
      const lines = [];
      for (let i = 0; i < tokens.length; i += 2) {
        lines.push(tokens.slice(i, i + 2).join(" "));
      }
      ctx.textAlign = "center";
      ctx.fillStyle = VEDIC_BOOK_THEME.cosmicNavy;
      ctx.font = `800 ${(3.2 * u).toFixed(1)}px ${BOOK_FONT_STACK}`;
      lines.forEach((ln, idx) => {
        const py = y + 12 + (idx - (lines.length - 1) / 2) * 3.6;
        fillTextOpticallyCentered(ctx, sanitizeUnicodeText(ln), (x + cellSize / 2) * u, py * u);
      });
      ctx.textAlign = "right";
      ctx.fillStyle = VEDIC_BOOK_THEME.inkMuted;
      ctx.font = `600 ${(2.35 * u).toFixed(1)}px monospace`;
      fillTextOpticallyCentered(ctx, `भा.${h?.houseNumber || ""}`, (x + cellSize - 1.4) * u, (y + cellSize - 2.2) * u);
    }
    const dataUrl = canvas.toDataURL("image/png");
    canvas.width = 0;
    canvas.height = 0;
    return dataUrl.startsWith("data:image/png;base64,") ? dataUrl : "";
  } catch {
    return "";
  }
}
function buildChartMarkup(houses, chartStyle, sizePx, shortTitle, useCanvasImg, lagnaDegInt) {
  if (useCanvasImg && typeof document !== "undefined") {
    const pngDataUrl = chartStyle === "south" ? renderSouthIndianCanvasDataUrl(houses, sizePx, shortTitle, lagnaDegInt) : renderNorthIndianCanvasDataUrl(houses, sizePx, lagnaDegInt);
    if (pngDataUrl) {
      return `<img src="${pngDataUrl}" alt="${esc(
        shortTitle
      )}" width="${sizePx}" height="${sizePx}" style="width:${sizePx}px;height:${sizePx}px;display:block;margin:0 auto;" />`;
    }
  }
  return buildChartSvg(houses, chartStyle, sizePx, shortTitle, lagnaDegInt);
}
function buildBookPageHeader(sectionTag, personLabel, appLogoDataUrl) {
  return `
    <div style="display: table; width: 100%; box-sizing: border-box; padding-bottom: 7px; margin-bottom: 10px; border-bottom: 2px solid ${VEDIC_BOOK_THEME.templeGold};">
      <div style="display: table-cell; vertical-align: middle; text-align: left; padding-right: 10px;">
        <div style="display: table;">
          <div style="display: table-cell; vertical-align: middle; padding-right: 9px;">
            ${buildBrandLogoBadgeHtml(28, appLogoDataUrl, 1.8)}
          </div>
          <div style="display: table-cell; vertical-align: middle;">
            <div style="display: block; font-size: 10.5px; font-weight: 800; color: ${VEDIC_BOOK_THEME.cosmicNavy}; line-height: 1.25;">
              पण्डित जी ऑनलाइन (PANDIT JI ONLINE) • बृहत् वैदिक जन्म पत्रिका
            </div>
            <div style="display: block; font-size: 8px; color: ${VEDIC_BOOK_THEME.saffronDeep}; font-weight: 700; margin-top: 2px; line-height: 1.3;">
              ${esc(personLabel)}
            </div>
          </div>
        </div>
      </div>
      <div style="display: table-cell; vertical-align: middle; text-align: right; white-space: nowrap; width: 1%;">
        <span class="book-pill" style="${PILL_CENTER_STYLE} background: ${VEDIC_BOOK_THEME.cosmicNavy}; color: #FDE68A; border: 1.2px solid ${VEDIC_BOOK_THEME.templeGold}; font-size: 8.1px; font-weight: 800; padding-left: 11px; padding-right: 11px; border-radius: 999px; white-space: nowrap;">
          <span style="${PILL_INNER_SPAN_STYLE}">${esc(sectionTag)}</span>
        </span>
      </div>
    </div>
  `;
}
function buildSectionTitleBar(code, titleHi, subHi) {
  const brandSpacingStyle = subHi && subHi.includes("PANDIT JI ONLINE") ? " letter-spacing: 0; word-spacing: 3px;" : "";
  return `
    <div class="book-section-bar" style="display: table; width: 100%; box-sizing: border-box; background: linear-gradient(90deg, ${VEDIC_BOOK_THEME.cosmicNavy} 0%, #1E293B 100%); border-left: 4.5px solid ${VEDIC_BOOK_THEME.saffron}; border-bottom: 1.8px solid ${VEDIC_BOOK_THEME.templeGold}; border-radius: 7px; padding: 5.5px 11px; margin: 8px 0 8px 0; overflow: visible;">
      <div style="display: table-cell; vertical-align: middle; text-align: left; color: ${VEDIC_BOOK_THEME.warmIvory}; font-size: 10.6px; font-weight: 800; line-height: 1.28; padding-right: 8px;">
        <span style="display: block; line-height: 1.28;"><span style="color: ${VEDIC_BOOK_THEME.templeGold}; margin-right: 5px;">${esc(code)}.</span>${esc(titleHi)}</span>
      </div>
      ${subHi ? `<div style="display: table-cell; vertical-align: middle; text-align: right; white-space: nowrap; width: 1%;"><span class="book-pill" style="${PILL_CENTER_STYLE} background: rgba(212, 175, 55, 0.16); border: 1px solid rgba(212, 175, 55, 0.5); color: #FDE68A; font-size: 7.8px; font-weight: 700; padding-left: 9px; padding-right: 9px; border-radius: 999px; white-space: nowrap;${brandSpacingStyle}"><span style="${PILL_INNER_SPAN_STYLE}${brandSpacingStyle}">${esc(subHi)}</span></span></div>` : ""}
    </div>
  `;
}
function buildHindiExplainerBox(guideKey) {
  const g = TABLE_HOW_TO_READ_GUIDES[guideKey];
  const pointsHtml = g.keyPoints.map(
    (kp) => `<span style="display: block; margin-top: 2.5px;"><b style="color: ${VEDIC_BOOK_THEME.saffronDeep};">• ${esc(
      kp.term.hi
    )}:</b> ${esc(kp.meaning.hi)}</span>`
  ).join("");
  return `
    <div class="book-card" style="background: ${VEDIC_BOOK_THEME.saffronSoft}; border: 1.2px solid ${VEDIC_BOOK_THEME.templeGold}; border-radius: 8px; padding: 7.5px 10px; margin: 8px 0 6px 0; font-size: 8.3px; color: ${VEDIC_BOOK_THEME.inkPrimary}; line-height: 1.48;">
      <div style="font-weight: 800; color: ${VEDIC_BOOK_THEME.cosmicNavy}; font-size: 8.8px; margin-bottom: 2.5px;">
        ✦ इसे कैसे समझें? — ${esc(g.triggerTitle.hi)}
      </div>
      <div>${esc(g.whatItShows.hi)}</div>
      ${pointsHtml}
      <div style="margin-top: 3.5px; color: ${VEDIC_BOOK_THEME.emerald}; font-weight: 700;">
        ध्यान दें: ${esc(g.practicalTip.hi)}
      </div>
    </div>
  `;
}
function buildCustomExplainerBox(titleHi, bodyHi, tipHi) {
  return `
    <div class="book-card" style="background: ${VEDIC_BOOK_THEME.saffronSoft}; border: 1.2px solid ${VEDIC_BOOK_THEME.templeGold}; border-radius: 8px; padding: 7.5px 10px; margin: 8px 0 6px 0; font-size: 8.3px; color: ${VEDIC_BOOK_THEME.inkPrimary}; line-height: 1.48;">
      <div style="font-weight: 800; color: ${VEDIC_BOOK_THEME.cosmicNavy}; font-size: 8.8px; margin-bottom: 2.5px;">
        ✦ इसे कैसे समझें? — ${esc(titleHi)}
      </div>
      <div>${esc(bodyHi)}</div>
      <div style="margin-top: 3.5px; color: ${VEDIC_BOOK_THEME.emerald}; font-weight: 700;">
        व्यावहारिक सुझाव: ${esc(tipHi)}
      </div>
    </div>
  `;
}
function buildProgressBarHtml(pct, barColor, labelRight) {
  const clamped = Math.max(4, Math.min(100, Math.round(pct)));
  return `
    <div style="display: flex; align-items: center; gap: 6px; width: 100%;">
      <div style="flex: 1; height: 8px; background: #EFE3C6; border-radius: 999px; overflow: hidden; border: 0.8px solid #D9C495;">
        <div style="width: ${clamped}%; height: 100%; background: ${barColor}; border-radius: 999px;"></div>
      </div>
      ${labelRight ? `<span style="font-size: 7.6px; font-weight: 800; font-family: monospace; color: ${VEDIC_BOOK_THEME.cosmicNavy}; min-width: 34px; text-align: right;">${esc(
    labelRight
  )}</span>` : ""}
    </div>
  `;
}
const SEVEN_GRAHAS_MAITRI = [
  { id: "sun", hi: "सूर्य", short: "सू" },
  { id: "moon", hi: "चंद्र", short: "चं" },
  { id: "mars", hi: "मंगल", short: "मं" },
  { id: "mercury", hi: "बुध", short: "बु" },
  { id: "jupiter", hi: "गुरु", short: "गु" },
  { id: "venus", hi: "शुक्र", short: "शु" },
  { id: "saturn", hi: "शनि", short: "श" }
];
const NAISARGIKA_FRIENDS = {
  sun: ["moon", "mars", "jupiter"],
  moon: ["sun", "mercury"],
  mars: ["sun", "moon", "jupiter"],
  mercury: ["sun", "venus"],
  jupiter: ["sun", "moon", "mars"],
  venus: ["mercury", "saturn"],
  saturn: ["mercury", "venus"]
};
const NAISARGIKA_ENEMIES = {
  sun: ["venus", "saturn"],
  moon: [],
  mars: ["mercury"],
  mercury: ["moon"],
  jupiter: ["mercury", "venus"],
  venus: ["sun", "moon"],
  saturn: ["sun", "moon", "mars"]
};
function computePanchadhaMaitriMatrix(report) {
  const rashiById = {};
  const nameToId = {
    सूर्य: "sun",
    चंद्र: "moon",
    चन्द्र: "moon",
    मंगल: "mars",
    बुध: "mercury",
    गुरु: "jupiter",
    बृहस्पति: "jupiter",
    शुक्र: "venus",
    शनि: "saturn"
  };
  for (const pl of report.planets) {
    const key = Object.keys(nameToId).find((k) => pl.hindiName.includes(k));
    if (key) rashiById[nameToId[key]] = pl.rashiNumber;
  }
  return SEVEN_GRAHAS_MAITRI.map((rowG) => {
    const cells = SEVEN_GRAHAS_MAITRI.map((colG) => {
      if (rowG.id === colG.id) {
        return { label: "स्वयं", color: VEDIC_BOOK_THEME.inkMuted, bg: "#F1ECE0" };
      }
      const nScore = NAISARGIKA_FRIENDS[rowG.id].includes(colG.id) ? 1 : NAISARGIKA_ENEMIES[rowG.id].includes(colG.id) ? -1 : 0;
      const r1 = rashiById[rowG.id] || 1;
      const r2 = rashiById[colG.id] || 1;
      const diff = (r2 - r1 + 12) % 12 + 1;
      const isTatkalikaFriend = [2, 3, 4, 10, 11, 12].includes(diff);
      const total = nScore + (isTatkalikaFriend ? 1 : -1);
      if (total >= 2) return { label: "अति मित्र", color: "#065F46", bg: "#D1FAE5" };
      if (total === 1) return { label: "मित्र", color: "#047857", bg: "#ECFDF5" };
      if (total === 0) return { label: "सम", color: "#92400E", bg: "#FEF3C7" };
      if (total === -1) return { label: "शत्रु", color: "#B45309", bg: "#FFEDD5" };
      return { label: "अति शत्रु", color: "#991B1B", bg: "#FEE2E2" };
    });
    return { grahaHi: rowG.hi, cells };
  });
}
function buildLifetimeSadeSatiTable(report) {
  const birthYear = report.phase1Astronomy?.spaceTime.year || parseInt((report.input.dob || "1995").slice(0, 4), 10) || 1995;
  const moonRashi = report.panchang.moonRashiNumber || 1;
  const saturnNatal = report.planets.find((p) => p.hindiName.includes("शनि"));
  const saturnRashiAtBirth = saturnNatal?.rashiNumber || 1;
  const r12 = (moonRashi + 10) % 12 + 1;
  const r1 = moonRashi;
  const r2 = moonRashi % 12 + 1;
  const rName = (rn) => RASHI_12_REFERENCE[rn - 1]?.nameHi || String(rn);
  const yearsPerSign = 29.457 / 12;
  const signsAhead = (r12 - saturnRashiAtBirth + 12) % 12;
  let firstEntryYear = Math.round(birthYear + signsAhead * yearsPerSign);
  if (firstEntryYear - birthYear > 27) firstEntryYear -= 29;
  const rows = [];
  const cycleNames = ["प्रथम आवर्तन", "द्वितीय आवर्तन", "तृतीय आवर्तन"];
  const phaseSpecs = [
    {
      name: "उदय चरण (प्रथम ढाई वर्ष)",
      rashi: r12,
      guidance: "व्यय नियंत्रण, नई जिम्मेदारियाँ, यात्राएँ व आधार-निर्माण का समय।"
    },
    {
      name: "शिखर चरण (मध्य ढाई वर्ष)",
      rashi: r1,
      guidance: "परिश्रम की परीक्षा, आत्म-अनुशासन, धैर्य व मानसिक दृढ़ता का काल।"
    },
    {
      name: "अस्त चरण (अंतिम ढाई वर्ष)",
      rashi: r2,
      guidance: "धीरे-धीरे राहत, संचित परिश्रम का स्थायी फल व आर्थिक सुधार।"
    }
  ];
  for (let c = 0; c < 3; c++) {
    const baseStart = Math.round(firstEntryYear + c * 29.46);
    phaseSpecs.forEach((ph, idx) => {
      const sYr = Math.round(baseStart + idx * yearsPerSign);
      const eYr = Math.round(baseStart + (idx + 1) * yearsPerSign);
      if (eYr < birthYear) return;
      const startDisp = Math.max(birthYear, sYr);
      const ageS = Math.max(0, startDisp - birthYear);
      const ageE = Math.max(ageS + 1, eYr - birthYear);
      if (ageS > 92) return;
      rows.push({
        cycleLabel: cycleNames[c],
        phaseLabel: ph.name,
        saturnRashi: `${rName(ph.rashi)} (${ph.rashi})`,
        approxPeriod: `${startDisp} – ${eYr}`,
        ageSpan: `${ageS}–${ageE} वर्ष`,
        guidanceHi: ph.guidance
      });
    });
  }
  return rows;
}
const ANTARDASHA_EFFECT_MAP = {
  सूर्य: "प्रशासनिक सम्मान, पिता-सहयोग, आत्मविश्वास व पदोन्नति के संकेत।",
  चंद्र: "मानसिक संतुलन, पारिवारिक सुख, जनसंपर्क एवं यात्रा लाभ।",
  मंगल: "साहस, भूमि-भवन कार्य, तकनीकी प्रगति व ऊर्जावान निर्णय।",
  राहु: "नवीन अवसर, तकनीकी/विदेश विस्तार व सतर्क विवेक की आवश्यकता।",
  गुरु: "ज्ञान-वृद्धि, शुभ मांगलिक कार्य, संतान सुख व आर्थिक स्थिरता।",
  शनि: "धैर्यपूर्वक कर्म, अनुशासन, दीर्घकालिक स्थायी निर्माण व न्याय।",
  बुध: "बौद्धिक विकास, व्यवसाय-संवाद, शिक्षा व लेखन-लाभ का काल।",
  केतु: "आध्यात्मिक साधना, शोध, एकांत चिंतन व गूढ़ ज्ञान की प्राप्ति।",
  शुक्र: "सुख-सुविधा, कला, वैवाहिक सौहार्द, वाहन एवं समृद्धि के योग।"
};
const GRAHA_VICHAR_GUIDANCE = {
  सूर्य: "आत्मा, मान-सम्मान, पिता, नेतृत्व क्षमता और राजकीय कार्यों का कारक ग्रह।",
  चंद्र: "मन, माता, भावनात्मक स्थिरता, जल तत्व, जनसंपर्क और मानसिक सुख का कारक।",
  मंगल: "साहस, पराक्रम, भूमि-संपत्ति, तकनीकी दक्षता और भ्रातृ-सुख का कारक ग्रह।",
  बुध: "बुद्धि, वाणी, व्यापार, गणित, संवाद कौशल और तार्किक निर्णय शक्ति का कारक।",
  गुरु: "ज्ञान, धर्म, संतान, भाग्य, धन-वृद्धि और गुरु-कृपा का परम शुभ कारक ग्रह।",
  शुक्र: "वैवाहिक सुख, कला, सौंदर्य, वाहन, ऐश्वर्य और रचनात्मक समृद्धि का कारक।",
  शनि: "कर्म, अनुशासन, आयु, न्याय, सेवा भाव और दीर्घकालिक स्थायी सफलता का कारक।",
  राहु: "नवीन सोच, आधुनिक तकनीक, विदेश यात्रा, शोध और तीव्र महत्वाकांक्षा का कारक।",
  केतु: "मोक्ष, वैराग्य, सूक्ष्म अंतर्ज्ञान, आध्यात्मिक उन्नति और मंत्र-साधना का कारक।"
};
const PLANET_SATTVIK_UPAY_TABLE = [
  { graha: "सूर्य", mantra: "ॐ घृणि सूर्याय नमः", daan: "गेहूँ, गुड़, ताम्र पात्र, लाल वस्त्र", day: "रविवार" },
  { graha: "चंद्र", mantra: "ॐ सों सोमाय नमः", daan: "चावल, दूध, मिश्री, श्वेत वस्त्र", day: "सोमवार" },
  { graha: "मंगल", mantra: "ॐ अं अंगारकाय नमः", daan: "मसूर दाल, गुड़, लाल फल", day: "मंगलवार" },
  { graha: "बुध", mantra: "ॐ बुं बुधाय नमः", daan: "हरी मूंग, पालक, हरा वस्त्र, पुस्तकें", day: "बुधवार" },
  { graha: "गुरु", mantra: "ॐ बृं बृहस्पतये नमः", daan: "चना दाल, हल्दी, पीला वस्त्र, धार्मिक ग्रंथ", day: "गुरुवार" },
  { graha: "शुक्र", mantra: "ॐ शुं शुक्राय नमः", daan: "दही, घी, खीर, श्वेत मिष्ठान्न", day: "शुक्रवार" },
  { graha: "शनि", mantra: "ॐ शं शनैश्चराय नमः", daan: "काले तिल, सरसों तेल, काली उड़द, कंबल", day: "शनिवार" },
  { graha: "राहु", mantra: "ॐ रां राहवे नमः", daan: "सतनाजा, कंबल, पक्षियों को दाना", day: "बुधवार / शनिवार" },
  { graha: "केतु", mantra: "ॐ केम् केतवे नमः", daan: "तिल, ऊनी वस्त्र, श्वान को भोजन", day: "मंगलवार / शनिवार" }
];
function normalizeBeejMantraText(raw) {
  const txt = sanitizeUnicodeText(raw).normalize("NFC");
  return txt.replace(/ॐ\s*ह्रां\s*ह्रीं\s*ह्रौं\s*सः\s*सूर्याय\s*नमः/g, "ॐ घृणि सूर्याय नमः").replace(/ॐ\s*श्रां\s*श्रीं\s*श्रौं\s*सः\s*च[ंन][्]?द्रमसे\s*नमः/g, "ॐ सों सोमाय नमः").replace(/ॐ\s*क्रां\s*क्रीं\s*क्रौं\s*सः\s*भौमाय\s*नमः/g, "ॐ अं अंगारकाय नमः").replace(/ॐ\s*ब्रां\s*ब्रीं\s*ब्रौं\s*सः\s*बुधाय\s*नमः/g, "ॐ बुं बुधाय नमः").replace(/ॐ\s*ग्रां\s*ग्रीं\s*ग्रौं\s*सः\s*गुरवे\s*नमः/g, "ॐ बृं बृहस्पतये नमः").replace(/ॐ\s*द्रां\s*द्रीं\s*द्रौं\s*सः\s*शुक्राय\s*नमः/g, "ॐ शुं शुक्राय नमः").replace(/ॐ\s*प्रां\s*प्रीं\s*प्रौं\s*सः\s*शनैश्चराय\s*नमः/g, "ॐ शं शनैश्चराय नमः").replace(/ॐ\s*भ्रां\s*भ्रीं\s*भ्रौं\s*सः\s*राहवे\s*नमः/g, "ॐ रां राहवे नमः").replace(/ॐ\s*स्?त्रां\s*स्?त्रीं\s*स्?त्रौं\s*सः\s*केतवे\s*नमः/g, "ॐ केम् केतवे नमः").replace(/ॐ\s*स्रां\s*स्रीं\s*स्रौं\s*सः\s*केतवे\s*नमः/g, "ॐ केम् केतवे नमः").replace(/ॐ\s*कें\s*केतवे\s*नमः/g, "ॐ केम् केतवे नमः").normalize("NFC");
}
function formatDashaDateRangeHtml(startDate, endDate) {
  return `<span class="book-dasha-date" style="white-space: nowrap; direction: ltr; unicode-bidi: isolate; display: inline-block; font-family: monospace;">${esc(startDate)} → ${esc(endDate)}</span>`;
}
function buildAllKundaliBookPages(report, qrs, options, useCanvasImgCharts = false) {
  const { cleanMode, chartStyle } = options;
  const appLogo = qrs.appLogoDataUrl;
  const personHeader = `${report.input.name} • जन्म: ${report.input.formattedDob}, ${report.input.formattedTime} • ${report.input.birthPlace}`;
  const currentDasha = report.mahadashas.find((m) => m.isCurrent) || report.mahadashas[0];
  const p1 = report.phase1Astronomy;
  const sb = report.shadbalaBhava;
  const p2 = report.phase2Jyotish;
  const pages = [];
  const djHelpers = {
    esc,
    buildBookPageHeader,
    buildSectionTitleBar,
    personHeader,
    appLogo
  };
  const coverChartMarkup = buildChartMarkup(
    report.lagnaChart,
    chartStyle,
    258,
    `लग्न (${report.panchang.lagnaName})`,
    useCanvasImgCharts,
    report.panchang.lagnaDegInt
  );
  const coverHtml = `
    <div style="width: 100%; height: 100%; box-sizing: border-box; display: flex; flex-direction: column; justify-content: space-between; background: ${VEDIC_BOOK_THEME.warmIvory}; border: 3.5px solid ${VEDIC_BOOK_THEME.templeGold}; border-radius: 14px; padding: 14px 16px; position: relative; box-shadow: inset 0 0 0 2px #FFFDF8, inset 0 0 0 3.5px rgba(255, 111, 0, 0.35);">
      <!-- Top Cosmic Deep Navy Royal Masthead with Centered Real App Logo -->
      <div style="background: linear-gradient(135deg, ${VEDIC_BOOK_THEME.cosmicNavy} 0%, #162440 68%, #2C1608 100%); border: 2px solid ${VEDIC_BOOK_THEME.templeGold}; border-radius: 12px; padding: 11px 16px 13px 16px; text-align: center; color: ${VEDIC_BOOK_THEME.warmIvory};">
        <div style="display: block; font-size: 10px; font-weight: 800; color: ${VEDIC_BOOK_THEME.templeGold}; letter-spacing: 0; line-height: 1.25; padding-top: 2px; padding-bottom: 4px;">
          ॥ श्री गणेशाय नमः ॥ &nbsp;•&nbsp; ॥ सर्वे भवन्तु सुखिनः ॥
        </div>
        <div style="display: table; margin: 7px auto 0 auto;">
          <div style="display: table-cell; vertical-align: middle; padding-right: 14px;">
            ${buildBrandLogoBadgeHtml(58, appLogo, 2.8)}
          </div>
          <div style="display: table-cell; vertical-align: middle; text-align: left;">
            <div style="display: block; font-size: 20px; font-weight: 900; color: #FDE68A; letter-spacing: 0; line-height: 1.3; padding-bottom: 2px;">पण्डित जी ऑनलाइन</div>
            <div style="display: block; font-size: 9.2px; font-weight: 800; color: #F8FAFC; letter-spacing: 0; word-spacing: 2px; margin-top: 7px; line-height: 1.35;"><span style="display: inline-block; margin-right: 4px;">PANDIT</span><span style="display: inline-block; margin-right: 4px;">JI</span><span style="display: inline-block; margin-right: 5px;">ONLINE</span>— प्रामाणिक वैदिक ज्योतिष महा-ग्रंथ</div>
          </div>
        </div>
        <div style="margin-top: 10px; text-align: center;">
          <span class="book-pill" style="display: inline-flex; align-items: center; justify-content: center; line-height: 1.15; padding: 4px 16px; vertical-align: middle; box-sizing: border-box; text-align: center; background: rgba(255, 111, 0, 0.24); border: 1.2px solid ${VEDIC_BOOK_THEME.templeGold}; color: #FDE68A; font-size: 8.8px; font-weight: 800; border-radius: 999px;">
            <span style="${PILL_INNER_SPAN_STYLE}">सम्पूर्ण बृहत् जन्म कुंडली पुस्तक • दृक् गणित लाहिड़ी अयनांश</span>
          </span>
        </div>
      </div>

      <!-- Native Name & Birth Metadata Card -->
      <div style="text-align: center; margin: 8px 0 6px 0;">
        <div style="display: block; font-size: 9.5px; font-weight: 800; color: ${VEDIC_BOOK_THEME.saffronDeep}; letter-spacing: 0; line-height: 1.25;">
          यजमान / जातक का शुभ नाम
        </div>
        <div style="display: block; font-size: 27px; font-weight: 900; color: ${VEDIC_BOOK_THEME.cosmicNavy}; line-height: 1.25; margin-top: 2px;">
          ${esc(report.input.name)}
        </div>
        <div style="width: 170px; height: 2.8px; background: linear-gradient(90deg, transparent, ${VEDIC_BOOK_THEME.saffron}, ${VEDIC_BOOK_THEME.templeGold}, transparent); margin: 5px auto 0 auto;"></div>
      </div>

      <div class="book-cover-meta-card" style="background: ${VEDIC_BOOK_THEME.pureIvory}; border: 1.6px solid ${VEDIC_BOOK_THEME.templeGold}; border-radius: 10px; padding: 9px 14px; display: grid; grid-template-columns: 1fr 1fr; gap: 6px 14px; font-size: 9.2px; color: ${VEDIC_BOOK_THEME.inkPrimary}; line-height: 1.35;">
        <div><b style="color:${VEDIC_BOOK_THEME.saffronDeep};">जन्म तिथि:</b> ${esc(report.input.formattedDob)} (~${report.input.ageYears} वर्ष)</div>
        <div><b style="color:${VEDIC_BOOK_THEME.saffronDeep};">जन्म समय:</b> ${esc(report.input.formattedTime)}</div>
        <div><b style="color:${VEDIC_BOOK_THEME.saffronDeep};">जन्म स्थान:</b> ${esc(report.input.birthPlace)}</div>
        <div><b style="color:${VEDIC_BOOK_THEME.saffronDeep};">टाइमज़ोन:</b> ${esc(report.input.timeZone || "Asia/Kolkata")} (${esc(report.input.utcOffsetFormatted || "UTC+05:30")})${report.input.isDstActive ? " • DST" : ""}</div>
        <div><b style="color:${VEDIC_BOOK_THEME.saffronDeep};">अक्षांश / देशांतर:</b> ${report.input.latitude.toFixed(3)}° N, ${report.input.longitude.toFixed(3)}° E</div>
        <div><b style="color:${VEDIC_BOOK_THEME.saffronDeep};">अयनांश (लाहिड़ी):</b> ${esc(report.input.ayanamsaDMS)} • True Node</div>
      </div>

      <!-- Large Main Lagna D-1 Chart Preview (Exact same block card pattern as Page 4 B1) -->
      <div class="book-chart-box" style="display: block; flex-shrink: 0; width: 288px; margin: 6px auto; background: ${VEDIC_BOOK_THEME.pureIvory}; border: 1.8px solid ${VEDIC_BOOK_THEME.templeGold}; border-radius: 11px; padding: 8px 12px 10px 12px; text-align: center; box-sizing: border-box;">
        <div style="display: block; font-size: 10.4px; font-weight: 900; color: ${VEDIC_BOOK_THEME.cosmicNavy}; padding-top: 3px; padding-bottom: 5px; line-height: 1.28;">
          मुख्य जन्म लग्न कुंडली — ${esc(report.panchang.lagnaName)} लग्न (D-1)
        </div>
        ${coverChartMarkup}
      </div>

      <!-- 4 Core Identity Pillars (Exact optical vertical centering) -->
      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; margin-bottom: 6px;">
        <div class="book-cover-pillar-card" style="display: flex; flex-direction: column; justify-content: center; background: ${VEDIC_BOOK_THEME.cosmicNavy}; color: ${VEDIC_BOOK_THEME.warmIvory}; border: 1.2px solid ${VEDIC_BOOK_THEME.templeGold}; border-radius: 8px; padding: 6.5px 8px; text-align: center; box-sizing: border-box;">
          <div style="display: block; font-size: 7.8px; color: #FCD34D; font-weight: 700; line-height: 1.28;">जन्म लग्न</div>
          <div style="display: block; font-size: 11px; font-weight: 800; margin-top: 3px; line-height: 1.28;">${esc(report.panchang.lagnaName)}</div>
          <div style="display: block; font-size: 7.6px; color: #CBD5E1; margin-top: 3px; line-height: 1.28;">स्वामी: ${esc(report.panchang.lagnaLord)}</div>
        </div>
        <div class="book-cover-pillar-card" style="display: flex; flex-direction: column; justify-content: center; background: ${VEDIC_BOOK_THEME.cosmicNavy}; color: ${VEDIC_BOOK_THEME.warmIvory}; border: 1.2px solid ${VEDIC_BOOK_THEME.templeGold}; border-radius: 8px; padding: 6.5px 8px; text-align: center; box-sizing: border-box;">
          <div style="display: block; font-size: 7.8px; color: #FCD34D; font-weight: 700; line-height: 1.28;">चंद्र राशि</div>
          <div style="display: block; font-size: 11px; font-weight: 800; margin-top: 3px; line-height: 1.28;">${esc(report.panchang.moonRashiName)}</div>
          <div style="display: block; font-size: 7.6px; color: #CBD5E1; margin-top: 3px; line-height: 1.28;">स्वामी: ${esc(report.panchang.moonRashiLord)}</div>
        </div>
        <div class="book-cover-pillar-card" style="display: flex; flex-direction: column; justify-content: center; background: ${VEDIC_BOOK_THEME.cosmicNavy}; color: ${VEDIC_BOOK_THEME.warmIvory}; border: 1.2px solid ${VEDIC_BOOK_THEME.templeGold}; border-radius: 8px; padding: 6.5px 8px; text-align: center; box-sizing: border-box;">
          <div style="display: block; font-size: 7.8px; color: #FCD34D; font-weight: 700; line-height: 1.28;">जन्म नक्षत्र</div>
          <div style="display: block; font-size: 11px; font-weight: 800; margin-top: 3px; line-height: 1.28;">${esc(report.panchang.nakshatraName)}</div>
          <div style="display: block; font-size: 7.6px; color: #6EE7B7; margin-top: 3px; line-height: 1.28;">चरण ${report.panchang.nakshatraPada} • ${esc(report.panchang.nakshatraLord)}</div>
        </div>
        <div class="book-cover-pillar-card" style="display: flex; flex-direction: column; justify-content: center; background: ${VEDIC_BOOK_THEME.cosmicNavy}; color: ${VEDIC_BOOK_THEME.warmIvory}; border: 1.2px solid ${VEDIC_BOOK_THEME.templeGold}; border-radius: 8px; padding: 6.5px 8px; text-align: center; box-sizing: border-box;">
          <div style="display: block; font-size: 7.8px; color: #FCD34D; font-weight: 700; line-height: 1.28;">वर्तमान महादशा</div>
          <div style="display: block; font-size: 11px; font-weight: 800; margin-top: 3px; line-height: 1.28;">${esc(currentDasha?.planet || "-")}</div>
          <div style="display: block; font-size: 7.6px; color: #6EE7B7; margin-top: 3px; line-height: 1.28;">${esc(currentDasha?.startYear)}–${esc(currentDasha?.endYear)}</div>
        </div>
      </div>

      <!-- Cover Bottom Brand Strip + Real QR Code (Zero Overlap) -->
      <div style="background: ${VEDIC_BOOK_THEME.templeGoldSoft}; border: 1.6px solid ${VEDIC_BOOK_THEME.templeGold}; border-radius: 10px; padding: 9px 13px; display: flex; align-items: center; justify-content: space-between; gap: 12px;">
        <div style="flex: 1; font-size: 8.8px; color: ${VEDIC_BOOK_THEME.inkPrimary}; line-height: 1.5;">
          <div style="font-weight: 900; color: ${VEDIC_BOOK_THEME.cosmicNavy}; font-size: 10.5px;">
            मार्गदर्शक: ${esc(PANDITJI_BRAND_URLS.founderHi)} (वैदिक ज्योतिषाचार्य एवं कर्मकाण्ड विशेषज्ञ)
          </div>
          <div>${esc(PANDITJI_BRAND_URLS.locationHi)}</div>
          <div>सम्पर्क / WhatsApp: <b>${esc(PANDITJI_BRAND_URLS.phoneDisplay)}</b> &nbsp;|&nbsp; वेबसाइट: ${buildNowrapWebsiteHtml(VEDIC_BOOK_THEME.saffronDeep)}</div>
        </div>
        ${qrs.websiteQrDataUrl ? `<div style="background:#FFFFFF; border: 1.6px solid ${VEDIC_BOOK_THEME.templeGold}; border-radius: 8px; padding: 4px; text-align:center; flex-shrink:0;">
                 <img src="${qrs.websiteQrDataUrl}" alt="Pandit Ji Online QR" style="width: 60px; height: 60px; display:block;" />
                 <div style="font-size: 6.8px; font-weight: 800; color: ${VEDIC_BOOK_THEME.cosmicNavy}; margin-top: 2px;">स्कैन करें</div>
               </div>` : ""}
      </div>
    </div>
  `;
  pages.push({ sectionCode: "COVER", sectionTag: "मुख्य आवरण (Cover)", isCover: true, html: coverHtml });
  const ensureSuffixOnce = (raw, suffix) => {
    const clean = String(raw || "").trim();
    if (!clean) return "—";
    const re = new RegExp(`(?:\\s*${suffix})+$`, "u");
    return `${clean.replace(re, "").trim()} ${suffix}`.trim();
  };
  const panchangRows = [
    ["वार (सूर्योदयात्)", `${report.panchang.vaar} (स्वामी: ${report.panchang.vaarLord})`, "जन्म लग्न", `${report.panchang.lagnaName} (${report.panchang.lagnaDegreeDMS})`],
    ["तिथि एवं पक्ष", `${report.panchang.tithi} • ${report.panchang.paksha}`, "लग्नेश (Lagna Lord)", report.panchang.lagnaLord],
    ["नक्षत्र एवं चरण", `${report.panchang.nakshatraName} (चरण ${report.panchang.nakshatraPada})`, "चंद्र राशि एवं स्वामी", `${report.panchang.moonRashiName} (${report.panchang.moonRashiLord})`],
    ["नक्षत्र स्वामी", report.panchang.nakshatraLord, "सूर्य राशि एवं स्वामी", `${report.panchang.sunRashiName} (${report.panchang.sunRashiLord})`],
    ["योग एवं करण", `${ensureSuffixOnce(report.panchang.yoga, "योग")} • ${ensureSuffixOnce(report.panchang.karana, "करण")}`, "प्रचलित नाम राशि", report.panchang.naamRashi],
    ["सूर्योदय / सूर्यास्त", p1 ? `${p1.birthPanchang.sunriseHi} / ${p1.birthPanchang.sunsetHi}` : "स्थानीय सूर्योदय आधारित", "टाइमज़ोन / UTC", `${report.input.timeZone || "Asia/Kolkata"} (${report.input.utcOffsetFormatted || "UTC+05:30"})`],
    ["गण एवं नाड़ी", `${ensureSuffixOnce(report.panchang.gana, "गण")} • ${ensureSuffixOnce(report.panchang.nadi, "नाड़ी")}`, "योनि एवं वर्ण", `${report.panchang.yoni} • ${report.panchang.varna}`],
    ["वश्य एवं तत्व", `${report.panchang.vashya} • ${report.panchang.tatva}`, "पाया (Paya)", report.panchang.paya],
    ["इष्टदेव", report.lucky.ishtaDevta, "शुभ अंक व वार", `${report.lucky.luckyNumbers} • ${report.lucky.luckyDays}`],
    ["शुभ रंग एवं दिशा", `${report.lucky.luckyColors} • ${report.lucky.luckyDirection}`, "अयनांश (लाहिड़ी)", `${report.input.ayanamsaDMS} • True Node`]
  ];
  const warningsHtml = report.input.warningsHi && report.input.warningsHi.length > 0 ? `<div class="book-card" style="margin-top: 10px; background: #FEF2F2; border: 1.5px solid #F59E0B; border-radius: 8px; padding: 9px 12px; font-size: 8.6px; color: #7C2D12; line-height: 1.55;">
           <b style="color:#B45309;">⚠ जन्म-समय / टाइमज़ोन / संधि सूचना:</b>
           ${report.input.warningsHi.map((w) => `<div style="margin-top:3px;">• ${esc(w)}</div>`).join("")}
         </div>` : `<div class="book-card" style="margin-top: 10px; background: ${VEDIC_BOOK_THEME.emeraldSoft}; border: 1.2px solid #10B981; border-radius: 8px; padding: 9px 12px; font-size: 8.6px; color: #065F46; line-height: 1.55;">
           <b>✓ सटीक खगोलीय सत्यापन:</b> यह जन्मपत्री ऐतिहासिक IANA टाइमज़ोन (${esc(report.input.timeZone || "Asia/Kolkata")}), दृक् गणित लाहिड़ी चित्रा पक्ष अयनांश (${esc(report.input.ayanamsaDMS)}) तथा True Node मानक पर आधारित है।
         </div>`;
  const sectionAHtml = `
    ${buildBookPageHeader("खण्ड A1 : जन्म पंचांग एवं अवकहड़ा चक्र", personHeader, appLogo)}
    ${buildSectionTitleBar("A1", "जन्म पंचांग, खगोलीय विवरण एवं अवकहड़ा चक्र (Birth Panchang & Avakahada)", "दृक् गणित सिंक्रनाइज़्ड")}
    <table class="book-table" style="font-size: 8.6px; width: 100%; box-sizing: border-box; table-layout: fixed;">
      <thead>
        <tr>
          <th style="width: 23%; padding: 6px 8px; line-height: 1.38;">पंचांग अंग</th>
          <th style="width: 27%; padding: 6px 8px; line-height: 1.38;">विवरण</th>
          <th style="width: 23%; padding: 6px 8px; line-height: 1.38;">अवकहड़ा अंग</th>
          <th style="width: 27%; padding: 6px 8px; line-height: 1.38;">विवरण</th>
        </tr>
      </thead>
      <tbody>
        ${panchangRows.map(
    (r, i) => `
            <tr style="background:${i % 2 === 0 ? "#FFFDF8" : "#FEF6E4"};">
              <td style="font-weight:800; color:${VEDIC_BOOK_THEME.saffronDeep}; padding: 6.5px 8px; line-height: 1.42; vertical-align: middle; overflow: visible;">${esc(r[0])}</td>
              <td style="font-weight:700; padding: 6.5px 8px; line-height: 1.42; vertical-align: middle; overflow: visible;">${esc(r[1])}</td>
              <td style="font-weight:800; color:${VEDIC_BOOK_THEME.saffronDeep}; padding: 6.5px 8px; line-height: 1.42; vertical-align: middle; overflow: visible;">${esc(r[2])}</td>
              <td style="font-weight:700; padding: 6.5px 8px; line-height: 1.42; vertical-align: middle; overflow: visible;">${esc(r[3])}</td>
            </tr>`
  ).join("")}
      </tbody>
    </table>
    ${warningsHtml}
    ${buildCustomExplainerBox(
    "जन्म पंचांग और अवकहड़ा चक्र का महत्व",
    "वैदिक ज्योतिष में जन्म तिथि, वार, नक्षत्र, योग और करण व्यक्ति के मूल स्वभाव तथा जीवन की लय दर्शाते हैं। सूर्योदय से पूर्व जन्म होने पर वैदिक वार पूर्व दिवस का माना जाता है। अवकहड़ा चक्र (गण, नाड़ी, योनि, वर्ण, वश्य, पाया) विवाह गुण मिलान और नामाक्षर चयन का आधार होता है।",
    "विवाह मिलान एवं दशा गणना में जन्म के समय चंद्रमा की राशि (जन्म राशि) और नक्षत्र चरण को सदैव प्रधान माना जाता है।"
  )}
  `;
  pages.push({ sectionCode: "A", sectionTag: "खण्ड A : जन्म पंचांग व अवकहड़ा", html: sectionAHtml });
  pages.push(buildExecutiveSummaryPage(report, djHelpers));
  const styleGuideText = chartStyle === "south" ? RASHI_VS_BHAVA_EXPLAINER.south.summary.hi : RASHI_VS_BHAVA_EXPLAINER.north.summary.hi;
  const sectionA2Html = `
    ${buildBookPageHeader("खण्ड A2 : सरल कुंडली मार्गदर्शिका (1–12 राशि बनाम भाव)", personHeader, appLogo)}
    ${buildSectionTitleBar("A2", "कुंडली कैसे पढ़ें? — 1–12 राशि बनाम भाव एवं ग्रह संकेत कुंजी", "सामान्य जन के लिए सरल गाइड")}
    <div class="book-card" style="background: ${VEDIC_BOOK_THEME.pureIvory}; border: 1.5px solid ${VEDIC_BOOK_THEME.templeGold}; border-radius: 10px; padding: 12px 14px; font-size: 9px; line-height: 1.58; color: ${VEDIC_BOOK_THEME.inkPrimary};">
      <div style="font-weight: 900; color: ${VEDIC_BOOK_THEME.cosmicNavy}; font-size: 10.5px; margin-bottom: 4px;">
        1) ${esc(RASHI_VS_BHAVA_EXPLAINER.heading.hi)}
      </div>
      <div>${esc(styleGuideText)}</div>

      <div style="margin-top: 12px; font-weight: 800; color: ${VEDIC_BOOK_THEME.saffronDeep}; font-size: 9.5px;">
        2) 1 से 12 राशि अंक सूची एवं उनके स्वामी ग्रह (12 Rashis & Lords):
      </div>
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 7px; margin-top: 6px;">
        ${RASHI_12_REFERENCE.map(
    (r) => `<div style="background:${VEDIC_BOOK_THEME.warmIvory}; border:1px solid ${VEDIC_BOOK_THEME.borderMuted}; border-radius:6px; padding:6px 9px; font-size:8.6px;">
               <b style="color:${VEDIC_BOOK_THEME.saffronDeep};">${r.number}. ${esc(r.nameHi)}</b>
               <span style="color:${VEDIC_BOOK_THEME.inkMuted};"> (${esc(r.nameEn)})</span>
               <div style="font-size:8px; color:${VEDIC_BOOK_THEME.cosmicNavy}; margin-top:1px;">स्वामी: <b>${esc(r.lordHi)}</b></div>
             </div>`
  ).join("")}
      </div>

      <div style="margin-top: 12px; font-weight: 800; color: ${VEDIC_BOOK_THEME.saffronDeep}; font-size: 9.5px;">
        3) चार्ट में प्रयुक्त ग्रह संक्षिप्ताक्षर एवं विशेष चिह्न (Planet Legend):
      </div>
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 7px; margin-top: 6px;">
        ${GRAHA_LEGEND_ITEMS.map(
    (g) => `<div class="book-legend-item" style="background:${VEDIC_BOOK_THEME.warmIvory}; border:1px solid ${VEDIC_BOOK_THEME.borderMuted}; border-radius:6px; padding:6px 9px; font-size:8.6px; line-height:1.65; color:${VEDIC_BOOK_THEME.inkPrimary}; overflow:visible; white-space:nowrap;">
               <span style="font-weight:700; color:${VEDIC_BOOK_THEME.cosmicNavy};">${esc(g.shortHi.normalize("NFC"))} / ${esc(g.shortEn)}</span> = ${esc(g.fullHi.normalize("NFC"))} (${esc(g.fullEn)})
             </div>`
  ).join("")}
      </div>
      <div style="display: block; margin-top: 10px; padding: 4px 10px 8px 10px; background: ${VEDIC_BOOK_THEME.emeraldSoft}; border: 1px solid #10B981; border-radius: 7px; font-size: 8.6px; color: #065F46; font-weight: 700; line-height: 1.3;">
        विशेष संकेत: &nbsp;<b>*</b> = वक्री ग्रह (Retrograde) &nbsp;|&nbsp; <b>^</b> = अस्त ग्रह (Combust) &nbsp;|&nbsp; <b>°</b> = राशि के भीतर अंश (0° से 30°, जैसे 26° 04' 59") &nbsp;|&nbsp; <b>1–12 अंक</b> = राशि संख्या (भाव नहीं)
      </div>

      <div style="margin-top: 12px; font-weight: 800; color: ${VEDIC_BOOK_THEME.cosmicNavy}; font-size: 9.5px;">
        4) अपनी कुंडली समझने के 4 सरल नियम:
      </div>
      <div style="margin-top: 5px; display: grid; grid-template-columns: 1fr 1fr; gap: 7px; font-size: 8.5px;">
        <div style="background:#FFFDF8; border:1px solid ${VEDIC_BOOK_THEME.borderMuted}; border-radius:6px; padding:7px 9px;"><b>• केंद्र भाव (1, 4, 7, 10):</b> जीवन के चार स्तंभ — शरीर, सुख, विवाह व कर्म।</div>
        <div style="background:#FFFDF8; border:1px solid ${VEDIC_BOOK_THEME.borderMuted}; border-radius:6px; padding:7px 9px;"><b>• त्रिकोण भाव (1, 5, 9):</b> सबसे शुभ लक्ष्मी स्थान — बुद्धि, संतान व भाग्य।</div>
        <div style="background:#FFFDF8; border:1px solid ${VEDIC_BOOK_THEME.borderMuted}; border-radius:6px; padding:7px 9px;"><b>• उपचय भाव (3, 6, 10, 11):</b> आयु के साथ पराक्रम, विजय व आय बढ़ाने वाले भाव।</div>
        <div style="background:#FFFDF8; border:1px solid ${VEDIC_BOOK_THEME.borderMuted}; border-radius:6px; padding:7px 9px;"><b>• दशा + गोचर समन्वय:</b> जन्म कुंडली क्षमता बताती है, दशा-गोचर समय निर्धारित करते हैं।</div>
      </div>
    </div>
  `;
  pages.push({ sectionCode: "A2", sectionTag: "खण्ड A : सरल कुंडली गाइड", html: sectionA2Html });
  const largeChartCard = (title, houses, purposeHi, sizePx, lagnaDegInt) => `
    <div class="book-chart-box" style="background: ${VEDIC_BOOK_THEME.pureIvory}; border: 1.6px solid ${VEDIC_BOOK_THEME.templeGold}; border-radius: 11px; padding: 10px 12px; text-align: center; overflow: visible;">
      <div style="font-size: 10.2px; font-weight: 900; color: ${VEDIC_BOOK_THEME.cosmicNavy}; margin-bottom: 7px; padding-top: 2px; padding-bottom: 2px; line-height: 1.44; overflow: visible;">${esc(title)}</div>
      ${buildChartMarkup(houses, chartStyle, sizePx, title, useCanvasImgCharts, lagnaDegInt)}
      <div style="margin-top: 8px; padding-top: 7px; border-top: 1px dashed ${VEDIC_BOOK_THEME.borderMuted}; font-size: 8.4px; color: ${VEDIC_BOOK_THEME.inkPrimary}; line-height: 1.48; text-align: left;">
        ${esc(purposeHi)}
      </div>
    </div>
  `;
  const sectionBHtml = `
    ${buildBookPageHeader("खण्ड B1 : जन्म लग्न (D-1) एवं नवांश कुंडली (D-9)", personHeader, appLogo)}
    ${buildSectionTitleBar("B1", "प्रमुख आधार चक्र — जन्म लग्न कुंडली (D-1) एवं नवांश कुंडली (D-9)", chartStyle === "south" ? "दक्षिण भारतीय प्रारूप" : "उत्तर भारतीय प्रारूप")}
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-top: 8px;">
      ${largeChartCard(
    `जन्म लग्न कुंडली (D-1) — ${report.panchang.lagnaName}`,
    report.lagnaChart,
    CHART_EXPLAINERS.lagna_d1.shortPurpose.hi,
    290,
    report.panchang.lagnaDegInt
  )}
      ${largeChartCard(
    `नवांश कुंडली (D-9) — ${p1?.shodashavarga.find((v) => v.spec.id === "D9")?.ascendantRashiNameHi || report.navamsaChart[0]?.rashiName || ""}`,
    report.navamsaChart,
    CHART_EXPLAINERS.navamsha_d9.shortPurpose.hi,
    290
  )}
    </div>
    <div style="display: block; margin-top: 12px; padding: 4px 12px 8px 12px; background: ${VEDIC_BOOK_THEME.templeGoldSoft}; border: 1.2px solid ${VEDIC_BOOK_THEME.templeGold}; border-radius: 8px; font-size: 8.4px; color: ${VEDIC_BOOK_THEME.cosmicNavy}; text-align: center; font-weight: 700; line-height: 1.25;">
      ग्रह कुंजी: सू=सूर्य • चं=चंद्र • मं=मंगल • बु=बुध • गु=गुरु • शु=शुक्र • श=शनि • रा=राहु • के=केतु &nbsp;|&nbsp; * वक्री &nbsp;|&nbsp; ^ अस्त &nbsp;|&nbsp; 1–12 अंक = राशि संख्या
    </div>
    ${buildCustomExplainerBox(
    "लग्न (D-1) और नवांश (D-9) साथ क्यों देखे जाते हैं?",
    "जन्म लग्न कुंडली (D-1) जीवन रूपी वृक्ष का तना और मूल संरचना है, जबकि नवांश कुंडली (D-9) उस वृक्ष का फल है। यदि कोई ग्रह D-1 में सामान्य दिखे परंतु D-9 में स्वराशि, उच्च या मित्र राशि (अथवा वर्गोत्तम — दोनों में एक ही राशि) में हो, तो वह जीवन के मध्य व उत्तरार्ध में अत्यंत शुभ फल देता है।",
    "वैवाहिक जीवन, जीवनसाथी के स्वभाव और ग्रहों के वास्तविक आंतरिक बल के लिए नवांश कुंडली (D-9) का विश्लेषण अनिवार्य माना गया है।"
  )}
  `;
  pages.push({ sectionCode: "B", sectionTag: "खण्ड B : लग्न व नवांश (D-1, D-9)", html: sectionBHtml });
  const sectionB2Html = `
    ${buildBookPageHeader("खण्ड B2 : चंद्र, सूर्य एवं श्रीपति भाव चलित कुंडली", personHeader, appLogo)}
    ${buildSectionTitleBar("B2", "सुदर्शन एवं भाव चलित चक्र — चंद्र, सूर्य व वास्तविक MC आधारित श्रीपति चलित", "संपूर्ण त्रि-दृष्टि विश्लेषण")}
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 6px;">
      ${largeChartCard(
    `चंद्र कुंडली (Chandra) — ${report.panchang.moonRashiName}`,
    report.chandraChart,
    CHART_EXPLAINERS.chandra.shortPurpose.hi,
    228
  )}
      ${largeChartCard(
    `सूर्य कुंडली (Surya) — ${report.panchang.sunRashiName}`,
    report.suryaChart || report.lagnaChart,
    CHART_EXPLAINERS.surya.shortPurpose.hi,
    228
  )}
    </div>
    <div style="margin-top: 10px; display: grid; grid-template-columns: 1fr 1.15fr; gap: 12px; align-items: stretch;">
      ${largeChartCard(
    "श्रीपति भाव चलित कुंडली (Sripati Bhava Chalit)",
    report.bhavaChalitChart || report.lagnaChart,
    CHART_EXPLAINERS.bhava_chalit.shortPurpose.hi,
    210,
    report.panchang.lagnaDegInt
  )}
      <div class="book-card" style="background: ${VEDIC_BOOK_THEME.pureIvory}; border: 1.4px solid ${VEDIC_BOOK_THEME.templeGold}; border-radius: 10px; padding: 11px 13px; font-size: 8.6px; line-height: 1.55; color: ${VEDIC_BOOK_THEME.inkPrimary}; display: flex; flex-direction: column; justify-content: center;">
        <div style="font-size: 10px; font-weight: 900; color: ${VEDIC_BOOK_THEME.cosmicNavy}; border-bottom: 1px solid ${VEDIC_BOOK_THEME.borderMuted}; padding-bottom: 5px; margin-bottom: 7px;">
          ✦ इसे कैसे समझें? — तीन चार्ट का समन्वय
        </div>
        <div><b style="color:${VEDIC_BOOK_THEME.saffronDeep};">• चंद्र कुंडली:</b> मन, भावना, दैनिक गोचर (राशिफल) और साढ़ेसाती का आधार चंद्र कुंडली है।</div>
        <div style="margin-top:5px;"><b style="color:${VEDIC_BOOK_THEME.saffronDeep};">• सूर्य कुंडली:</b> आत्मबल, करियर प्रतिष्ठा, प्रशासनिक योग और पिता के साथ संबंध सूर्य कुंडली से देखे जाते हैं।</div>
        <div style="margin-top:5px;"><b style="color:${VEDIC_BOOK_THEME.saffronDeep};">• श्रीपति भाव चलित:</b> वास्तविक Midheaven (MC) से गणना करने पर कुछ ग्रह लग्न चार्ट के बजाय अगले या पिछले भाव का फल दे सकते हैं — यही सूक्ष्म अंतर चलित कुंडली दर्शाती है।</div>
      </div>
    </div>
    ${buildBrandSectionBannerHtml("after_charts_b", qrs, cleanMode)}
  `;
  pages.push({ sectionCode: "B2", sectionTag: "खण्ड B : चंद्र, सूर्य व चलित", html: sectionB2Html });
  const sectionC1Html = `
    ${buildBookPageHeader("खण्ड C1 : नवग्रह स्पष्ट तालिका (9 Planets Longitude)", personHeader, appLogo)}
    ${buildSectionTitleBar("C1", "नवग्रह स्पष्ट तालिका — राशि, अंश-कला-विकला, नक्षत्र-पद, अवस्था एवं चलित भाव", "लाहिड़ी अयनांश + True Node")}
    <table class="book-table" style="font-size: 8.6px;">
      <thead>
        <tr>
          <th style="width: 14%;">ग्रह</th>
          <th style="width: 13%;">राशि</th>
          <th style="width: 8%; text-align:center;">लग्न भाव</th>
          <th style="width: 8%; text-align:center;">चलित भाव</th>
          <th style="width: 15%;">अंश (DMS)</th>
          <th style="width: 18%;">नक्षत्र (चरण)</th>
          <th style="width: 12%;">अवस्था</th>
          <th style="width: 12%;">गति / स्थिति</th>
        </tr>
      </thead>
      <tbody>
        ${report.planets.map((p, idx) => {
    const p1Pl = p1?.planets[idx];
    const chalitH = p1Pl?.bhavaChalitHouse ?? p.houseInLagna;
    return `
            <tr style="background:${idx % 2 === 0 ? "#FFFDF8" : "#FEF6E4"};">
              <td style="font-weight:800; color:${VEDIC_BOOK_THEME.cosmicNavy}; padding: 7px 6px;">${esc(p.hindiName)} (${esc(p.shortHindi)})</td>
              <td style="font-weight:700; padding: 7px 6px;">${esc(p.rashiName)}</td>
              <td style="text-align:center; font-weight:800; color:${VEDIC_BOOK_THEME.saffronDeep};">${p.houseInLagna}</td>
              <td style="text-align:center; font-weight:800; color:${chalitH !== p.houseInLagna ? VEDIC_BOOK_THEME.crimson : VEDIC_BOOK_THEME.emerald};">${chalitH}</td>
              <td style="font-family:monospace; font-weight:700;">${esc(p.fullDegreeDMS)}</td>
              <td>${esc(p.nakshatra)} (चरण ${p.pada})</td>
              <td style="font-weight:700; color:${p.statusBadge === "shubh" ? VEDIC_BOOK_THEME.emerald : p.statusBadge === "upay" ? VEDIC_BOOK_THEME.crimson : VEDIC_BOOK_THEME.saffronDeep};">${esc(p.dignity)}</td>
              <td>${p.id === "rahu" || p.id === "ketu" ? "स्वाभाविक गति" : `${p.isRetrograde ? "वक्री (*) " : ""}${p.isCombust ? "अस्त (^) " : ""}${!p.isRetrograde && !p.isCombust ? "मार्गी" : ""}`}</td>
            </tr>`;
  }).join("")}
      </tbody>
    </table>
    ${buildHindiExplainerBox("navagraha")}
    <div class="book-card" style="margin-top: 8px; background: ${VEDIC_BOOK_THEME.pureIvory}; border: 1.2px solid ${VEDIC_BOOK_THEME.templeGold}; border-radius: 8px; padding: 9px 12px; font-size: 8.5px; line-height: 1.52;">
      <b style="color:${VEDIC_BOOK_THEME.cosmicNavy};">ग्रह अवस्था संक्षेप:</b>
      0°–6° बाल/मृत (राशि अनुसार), 12°–18° युवा अवस्था (पूर्ण फलदायी), 29°–30° राशि संधि। यदि लग्न भाव और चलित भाव भिन्न हों (लाल रंग), तो ग्रह का भाव-फल चलित भाव के अनुसार भी विचारणीय होता है।
    </div>
  `;
  pages.push({ sectionCode: "C1", sectionTag: "खण्ड C : नवग्रह स्पष्ट तालिका", html: sectionC1Html });
  const bhavaSphut = computeBhavaSphutTable(report);
  const maitriMatrix = computePanchadhaMaitriMatrix(report);
  const sectionC2Html = `
    ${buildBookPageHeader("खण्ड C2 : श्रीपति भाव संधि एवं पंचधा मैत्री चक्र", personHeader, appLogo)}
    ${buildSectionTitleBar("C2", "श्रीपति द्वादश भाव स्फुट एवं संधि (True MC-Based 12 Bhava Cusps)", "आरंभ • मध्य • अंत")}
    <table class="book-table" style="font-size: 7.9px; width: 100%; table-layout: fixed;">
      <thead>
        <tr>
          <th style="width: 22%;">भाव</th>
          <th style="width: 22%;">राशि (स्वामी)</th>
          <th style="width: 18%; white-space: nowrap;">भाव मध्य (Cusp)</th>
          <th style="width: 38%;">भाव संधि विस्तार (आरंभ → अंत)</th>
        </tr>
      </thead>
      <tbody>
        ${bhavaSphut.map(
    (b, idx) => `
            <tr style="background:${idx % 2 === 0 ? "#FFFDF8" : "#FEF6E4"};">
              <td style="font-weight:800; color:${VEDIC_BOOK_THEME.cosmicNavy}; line-height: 1.44; overflow: visible;">${esc(b.bhavaName)}</td>
              <td style="line-height: 1.44; overflow: visible;">${esc(b.rashiName)} (${esc(b.rashiLord)})</td>
              <td style="font-family:monospace; font-weight:700; color:${VEDIC_BOOK_THEME.emerald}; white-space: nowrap; line-height: 1.44; overflow: visible;">${esc(b.madhyaDMS)}</td>
              <td style="font-family:monospace; white-space: nowrap; direction: ltr; unicode-bidi: isolate; line-height: 1.44; overflow: visible;">${esc(b.sandhiStartDMS)} → ${esc(b.sandhiEndDMS)}</td>
            </tr>`
  ).join("")}
      </tbody>
    </table>

    ${buildSectionTitleBar("C2b", "ग्रह पंचधा मैत्री चक्र (नैसर्गिक + तात्कालिक मैत्री तालिका)", "अति मित्र से अति शत्रु")}
    <table class="book-table" style="font-size: 7.9px; text-align:center;">
      <thead>
        <tr>
          <th style="width: 13%; text-align:left;">ग्रह</th>
          ${SEVEN_GRAHAS_MAITRI.map((g) => `<th style="width: 12.4%; text-align:center;">${esc(g.hi)}</th>`).join("")}
        </tr>
      </thead>
      <tbody>
        ${maitriMatrix.map(
    (row) => `
            <tr>
              <td style="text-align:left; font-weight:800; color:${VEDIC_BOOK_THEME.cosmicNavy}; background:#FEF6E4;">${esc(row.grahaHi)}</td>
              ${row.cells.map(
      (c) => `<td style="font-weight:800; color:${c.color}; background:${c.bg};">${esc(c.label)}</td>`
    ).join("")}
            </tr>`
  ).join("")}
      </tbody>
    </table>
    ${buildHindiExplainerBox("bhava_sphut")}
  `;
  pages.push({ sectionCode: "C2", sectionTag: "खण्ड C : भाव संधि व मैत्री चक्र", html: sectionC2Html });
  const vargas = p1?.shodashavarga || [];
  if (vargas.length > 0) {
    const planetIds = ["sun", "moon", "mars", "mercury", "jupiter", "venus", "saturn", "rahu", "ketu"];
    const planetShortMap = {
      sun: "सूर्य",
      moon: "चंद्र",
      mars: "मंगल",
      mercury: "बुध",
      jupiter: "गुरु",
      venus: "शुक्र",
      saturn: "शनि",
      rahu: "राहु",
      ketu: "केतु"
    };
    const rashiShort = (num) => RASHI_12_REFERENCE[(num || 1) - 1]?.nameHi.slice(0, 3) || String(num);
    const sectionC3Html = `
      ${buildBookPageHeader("खण्ड C3 : सम्पूर्ण 16 षोडशवर्ग सारणी (D1–D60)", personHeader, appLogo)}
      ${buildSectionTitleBar("C3", "सम्पूर्ण 16 षोडशवर्ग ग्रह राशि सारणी (All 16 BPHS Shodashavarga D1–D60)", "बृहत् पाराशर होरा मानक")}
      <table class="book-table" style="font-size: 7.9px;">
        <thead>
          <tr>
            <th style="width: 15%;">वर्ग कुंडली</th>
            <th style="width: 8%; text-align:center;">लग्न</th>
            ${planetIds.map((pid) => `<th style="width: 7.3%; text-align:center;">${planetShortMap[pid]}</th>`).join("")}
            <th style="width: 11.3%; text-align:center;">संवेदनशीलता</th>
          </tr>
        </thead>
        <tbody>
          ${vargas.map((v, idx) => {
      const sensHi = v.spec.birthTimeSensitivity === "low" ? "स्थिर" : v.spec.birthTimeSensitivity === "moderate" ? "मध्यम" : v.spec.birthTimeSensitivity === "high" ? "उच्च" : "अति सूक्ष्म";
      return `
                <tr style="background:${idx % 2 === 0 ? "#FFFDF8" : "#FEF6E4"};">
                  <td style="font-weight:800; color:${VEDIC_BOOK_THEME.cosmicNavy};">${esc(v.spec.id)} ${esc(v.spec.nameHi)}</td>
                  <td style="text-align:center; font-weight:800; color:${VEDIC_BOOK_THEME.saffronDeep};">${v.ascendantRashiNumber}-${esc(rashiShort(v.ascendantRashiNumber))}</td>
                  ${planetIds.map((pid) => {
        const rn = v.planetRashis[pid];
        return `<td style="text-align:center; font-variant-numeric: tabular-nums; white-space: nowrap;">${rn}-${esc(rashiShort(rn))}</td>`;
      }).join("")}
                  <td style="text-align:center; font-weight:700; color:${v.spec.birthTimeSensitivity === "critical" ? VEDIC_BOOK_THEME.crimson : VEDIC_BOOK_THEME.inkMuted};">${sensHi}</td>
                </tr>`;
    }).join("")}
        </tbody>
      </table>
      ${buildHindiExplainerBox("navamsha_shodashavarga")}
    `;
    pages.push({ sectionCode: "C3", sectionTag: "खण्ड C : 16 षोडशवर्ग सारणी", html: sectionC3Html });
    const vargaPageGroups = [
      { code: "C4", range: [0, 4], title: "षोडशवर्ग चक्र (भाग 1/4) — D-1 लग्न, D-2 होरा, D-3 द्रेष्काण एवं D-4 चतुर्थांश", banner: false },
      { code: "C5", range: [4, 8], title: "षोडशवर्ग चक्र (भाग 2/4) — D-7 सप्तांश, D-9 नवांश, D-10 दशमांश एवं D-12 द्वादशांश", banner: false },
      { code: "C6", range: [8, 12], title: "षोडशवर्ग चक्र (भाग 3/4) — D-16 षोडशांश, D-20 विंशांश, D-24 चतुर्विंशांश एवं D-27 सप्तविंशांश", banner: false },
      { code: "C7", range: [12, 16], title: "षोडशवर्ग चक्र (भाग 4/4) — D-30 त्रिंशांश, D-40 खवेदांश, D-45 अक्षवेदांश एवं D-60 षष्ट्यांश", banner: true }
    ];
    for (const grp of vargaPageGroups) {
      const slice = vargas.slice(grp.range[0], grp.range[1]);
      if (slice.length === 0) continue;
      const chartDim = grp.banner ? 182 : 236;
      const vargaGridHtml = slice.map((v) => {
        const houses = convertVargaSlotsToChartHouses(v.houses);
        const sensTag = v.spec.birthTimeSensitivity === "critical" ? " • अति समय-संवेदनशील" : v.spec.birthTimeSensitivity === "high" ? " • समय-संवेदनशील" : "";
        return `
            <div class="book-chart-box" style="background: ${VEDIC_BOOK_THEME.pureIvory}; border: 1.5px solid ${VEDIC_BOOK_THEME.templeGold}; border-radius: 10px; padding: 11px 10px 9px 10px; text-align: center; overflow: visible;">
              <div style="font-size: 9.2px; font-weight: 800; color: ${VEDIC_BOOK_THEME.cosmicNavy}; line-height: 1.5; padding-top: 4px; margin-bottom: 2px; overflow: visible;">
                ${esc(v.spec.id)} — ${esc(v.spec.nameHi)} (${esc(v.ascendantRashiNameHi)})
              </div>
              <div style="font-size: 7.4px; color: ${VEDIC_BOOK_THEME.saffronDeep}; font-weight: 700; padding-top: 3px; margin: 2px 0 7px 0; line-height: 1.48; overflow: visible;">
                विषय: ${esc(v.spec.significationHi)}${esc(sensTag)}
              </div>
              ${buildChartMarkup(houses, chartStyle, chartDim, `${v.spec.id} ${v.spec.nameHi}`, useCanvasImgCharts)}
            </div>
          `;
      }).join("");
      const vargaPageHtml = `
        ${buildBookPageHeader(`खण्ड ${grp.code} : 16 षोडशवर्ग कुंडली चक्र`, personHeader, appLogo)}
        ${buildSectionTitleBar(grp.code, grp.title, "प्रति पृष्ठ 4 बड़े वर्ग चक्र")}
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 11px; margin-top: 10px; overflow: visible;">
          ${vargaGridHtml}
        </div>
        <div style="display: block; margin-top: 8px; padding: 4px 10px 6px 10px; background: ${VEDIC_BOOK_THEME.templeGoldSoft}; border: 1px solid ${VEDIC_BOOK_THEME.templeGold}; border-radius: 7px; font-size: 7.9px; color: ${VEDIC_BOOK_THEME.cosmicNavy}; text-align: center; font-weight: 700; line-height: 1.25;">
          1–12 अंक = राशि संख्या • सू=सूर्य, चं=चंद्र, मं=मंगल, बु=बुध, गु=गुरु, शु=शुक्र, श=शनि, रा=राहु, के=केतु
        </div>
        ${grp.banner ? buildBrandSectionBannerHtml("after_vargas_c", qrs, cleanMode) : ""}
      `;
      pages.push({ sectionCode: grp.code, sectionTag: `खण्ड ${grp.code} : षोडशवर्ग चार्ट्स`, html: vargaPageHtml });
    }
  }
  if (sb) {
    const shadbalaBarsHtml = sb.planets.map((p) => {
      const ratioPct = Math.min(100, Math.round(p.totalRupas / Math.max(1, p.requiredRupas * 1.45) * 100));
      const barCol = p.strengthRatio >= 1.15 ? "linear-gradient(90deg, #059669, #10B981)" : p.meetsMinimum ? "linear-gradient(90deg, #D97706, #F59E0B)" : "linear-gradient(90deg, #DC2626, #F97316)";
      return `
          <div style="display: grid; grid-template-columns: 78px 1fr 110px; align-items: center; gap: 10px; padding: 5px 8px; background: #FFFDF8; border: 1px solid ${VEDIC_BOOK_THEME.borderMuted}; border-radius: 7px;">
            <div style="font-size: 9px; font-weight: 800; color: ${VEDIC_BOOK_THEME.cosmicNavy};">${esc(p.hindiName)} (#${p.rank})</div>
            ${buildProgressBarHtml(ratioPct, barCol, `${p.totalRupas.toFixed(2)} रूप`)}
            <div style="font-size: 7.9px; font-weight: 800; text-align: right; color: ${p.meetsMinimum ? VEDIC_BOOK_THEME.emerald : VEDIC_BOOK_THEME.crimson};">
              ${p.meetsMinimum ? "✓ पुष्ट" : "सामान्य"} (${(p.strengthRatio * 100).toFixed(0)}%)
            </div>
          </div>`;
    }).join("");
    const sectionDHtml = `
      ${buildBookPageHeader("खण्ड D1 : 6-अंगी पाराशरी षड्बल एवं शक्ति ग्राफ", personHeader, appLogo)}
      ${buildSectionTitleBar("D1", "6-अंगी पाराशरी षड्बल तालिका (विरूप व रूप — BPHS अध्याय 27)", "1 रूप = 60 विरूप")}
      <table class="book-table" style="font-size: 8.2px;">
        <thead>
          <tr>
            <th style="width: 11%;">ग्रह</th>
            <th style="width: 9%; text-align:right;">स्थान</th>
            <th style="width: 8%; text-align:right;">दिग्</th>
            <th style="width: 9%; text-align:right;">काल</th>
            <th style="width: 8%; text-align:right;">चेष्टा</th>
            <th style="width: 9%; text-align:right;">नैसर्गिक</th>
            <th style="width: 8%; text-align:right;">दृक्</th>
            <th style="width: 11%; text-align:right;">कुल विरूप</th>
            <th style="width: 14%; text-align:right;">रूप / न्यूनतम</th>
            <th style="width: 13%;">श्रेणी</th>
          </tr>
        </thead>
        <tbody>
          ${sb.planets.map(
      (p, idx) => `
              <tr style="background:${idx % 2 === 0 ? "#FFFDF8" : "#FEF6E4"};">
                <td style="font-weight:800; color:${VEDIC_BOOK_THEME.cosmicNavy};">${esc(p.hindiName)}</td>
                <td style="text-align:right; font-family:monospace;">${p.sthanaBala.total.toFixed(1)}</td>
                <td style="text-align:right; font-family:monospace;">${p.digBala.toFixed(1)}</td>
                <td style="text-align:right; font-family:monospace;">${p.kalaBala.total.toFixed(1)}</td>
                <td style="text-align:right; font-family:monospace;">${p.cheshtaBala.toFixed(1)}</td>
                <td style="text-align:right; font-family:monospace;">${p.naisargikaBala.toFixed(1)}</td>
                <td style="text-align:right; font-family:monospace; color:${p.drikBala >= 0 ? VEDIC_BOOK_THEME.emerald : VEDIC_BOOK_THEME.crimson};">${p.drikBala >= 0 ? "+" : ""}${p.drikBala.toFixed(1)}</td>
                <td style="text-align:right; font-family:monospace; font-weight:800;">${p.totalVirupas.toFixed(1)}</td>
                <td style="text-align:right; font-family:monospace; font-weight:800; color:${p.meetsMinimum ? VEDIC_BOOK_THEME.emerald : VEDIC_BOOK_THEME.saffronDeep};">${p.totalRupas.toFixed(2)} / ${p.requiredRupas.toFixed(1)}</td>
                <td style="font-weight:700;">#${p.rank} ${esc(p.gradeHi.split(" ")[0])}</td>
              </tr>`
    ).join("")}
        </tbody>
      </table>

      ${buildSectionTitleBar("D1b", "सप्तग्रह षड्बल शक्ति तुलना (Colored Strength Bars)", "न्यूनतम अपेक्षित बल के सापेक्ष")}
      <div style="display: flex; flex-direction: column; gap: 6px; margin-top: 6px;">
        ${shadbalaBarsHtml}
      </div>
      ${buildHindiExplainerBox("shadbala")}
    `;
    pages.push({ sectionCode: "D", sectionTag: "खण्ड D : 6-अंगी पाराशरी षड्बल", html: sectionDHtml });
    const maxBhavaRupa = Math.max(8, ...sb.bhavas.map((b) => b.totalRupas));
    const sectionD2Html = `
      ${buildBookPageHeader("खण्ड D2 : इष्ट-कष्ट फल एवं द्वादश भाव बल", personHeader, appLogo)}
      ${buildSectionTitleBar("D2a", "सप्तग्रह इष्ट फल बनाम कष्ट फल (Ishta & Kashta Phala)", "शुभत्व एवं संघर्ष अनुपात")}
      <table class="book-table" style="font-size: 8.2px;">
        <thead>
          <tr>
            <th style="width: 15%;">ग्रह</th>
            <th style="width: 12%; text-align:right;">इष्ट फल</th>
            <th style="width: 12%; text-align:right;">कष्ट फल</th>
            <th style="width: 39%;">इष्ट-कष्ट संतुलन ग्राफ</th>
            <th style="width: 22%;">निष्कर्ष</th>
          </tr>
        </thead>
        <tbody>
          ${sb.planets.map((p, idx) => {
      const ishtaPct = Math.round(p.ishtaPhala / Math.max(1, p.ishtaPhala + p.kashtaPhala) * 100);
      return `
              <tr style="background:${idx % 2 === 0 ? "#FFFDF8" : "#FEF6E4"};">
                <td style="font-weight:800; color:${VEDIC_BOOK_THEME.cosmicNavy};">${esc(p.hindiName)}</td>
                <td style="text-align:right; font-family:monospace; font-weight:800; color:${VEDIC_BOOK_THEME.emerald};">${p.ishtaPhala.toFixed(1)}</td>
                <td style="text-align:right; font-family:monospace; font-weight:700; color:${VEDIC_BOOK_THEME.crimson};">${p.kashtaPhala.toFixed(1)}</td>
                <td>${buildProgressBarHtml(ishtaPct, ishtaPct >= 50 ? "#059669" : "#D97706", `${ishtaPct}% शुभ`)}</td>
                <td style="font-weight:700; color:${p.ishtaPhala >= p.kashtaPhala ? VEDIC_BOOK_THEME.emerald : VEDIC_BOOK_THEME.saffronDeep};">${p.ishtaPhala >= p.kashtaPhala ? "शुभ फल प्रधान" : "परिश्रम उपरांत फल"}</td>
              </tr>`;
    }).join("")}
        </tbody>
      </table>

      ${buildSectionTitleBar("D2b", "द्वादश भाव बल तालिका (12-House Parashari Bhava Bala)", "भावाधिपति + दिग् + दृक् बल")}
      <table class="book-table" style="font-size: 7.8px;">
        <thead>
          <tr>
            <th style="width: 21%;">भाव</th>
            <th style="width: 16%;">राशि (स्वामी)</th>
            <th style="width: 10%; text-align:right;">अधिपति</th>
            <th style="width: 9%; text-align:right;">दिग्बल</th>
            <th style="width: 9%; text-align:right;">दृक्</th>
            <th style="width: 22%;">शक्ति ग्राफ (रूप)</th>
            <th style="width: 13%;">रैंक</th>
          </tr>
        </thead>
        <tbody>
          ${sb.bhavas.map((bh, idx) => {
      const pct = Math.round(bh.totalRupas / maxBhavaRupa * 100);
      const col = bh.rank <= 4 ? "#059669" : bh.rank <= 8 ? "#D97706" : "#C2410C";
      return `
              <tr style="background:${idx % 2 === 0 ? "#FFFDF8" : "#FEF6E4"};">
                <td style="font-weight:800; color:${VEDIC_BOOK_THEME.cosmicNavy};">${bh.houseNumber}. ${esc(bh.bhavaTitleHi)}</td>
                <td>${esc(bh.rashiNameHi)} (${esc(bh.lordHindi)})</td>
                <td style="text-align:right; font-family:monospace;">${bh.bhavadhipatiBala.toFixed(1)}</td>
                <td style="text-align:right; font-family:monospace;">${bh.bhavaDigBala.toFixed(1)}</td>
                <td style="text-align:right; font-family:monospace; color:${bh.bhavaDrishtiBala >= 0 ? VEDIC_BOOK_THEME.emerald : VEDIC_BOOK_THEME.crimson};">${bh.bhavaDrishtiBala >= 0 ? "+" : ""}${bh.bhavaDrishtiBala.toFixed(1)}</td>
                <td>${buildProgressBarHtml(pct, col, bh.totalRupas.toFixed(2))}</td>
                <td style="font-weight:700; color:${bh.rank <= 4 ? VEDIC_BOOK_THEME.emerald : VEDIC_BOOK_THEME.inkPrimary};">#${bh.rank} ${esc(bh.gradeHi.split(" ")[0])}</td>
              </tr>`;
    }).join("")}
        </tbody>
      </table>
      ${buildHindiExplainerBox("bhava_bala")}
    `;
    pages.push({ sectionCode: "D2", sectionTag: "खण्ड D : इष्ट-कष्ट व भाव बल", html: sectionD2Html });
  }
  const av = report.ashtakavarga;
  if (av) {
    const lagnaRashiIdx = ((report.panchang.lagnaNumber || 1) - 1 + 12) % 12;
    const savRowsByHouse = Array.from({ length: 6 }, (_, i) => {
      const h1 = report.lagnaChart[i];
      const h2 = report.lagnaChart[i + 6];
      const b1 = av.bhavaSarvashtakavarga?.[i] ?? av.sarvashtakavarga[(lagnaRashiIdx + i) % 12] ?? 28;
      const b2 = av.bhavaSarvashtakavarga?.[i + 6] ?? av.sarvashtakavarga[(lagnaRashiIdx + i + 6) % 12] ?? 28;
      return `
        <tr style="background:${i % 2 === 0 ? "#FFFDF8" : "#FEF6E4"};">
          <td style="font-weight:800;">भाव ${i + 1} (${esc(h1?.rashiName || "")})</td>
          <td style="font-weight:800; color:${b1 >= 28 ? VEDIC_BOOK_THEME.emerald : VEDIC_BOOK_THEME.saffronDeep};">${b1} बिंदु — ${b1 >= 30 ? "अति पुष्ट" : b1 >= 28 ? "संतुलित शुभ" : "अतिरिक्त प्रयास"}</td>
          <td style="font-weight:800;">भाव ${i + 7} (${esc(h2?.rashiName || "")})</td>
          <td style="font-weight:800; color:${b2 >= 28 ? VEDIC_BOOK_THEME.emerald : VEDIC_BOOK_THEME.saffronDeep};">${b2} बिंदु — ${b2 >= 30 ? "अति पुष्ट" : b2 >= 28 ? "संतुलित शुभ" : "अतिरिक्त प्रयास"}</td>
        </tr>`;
    }).join("");
    const sectionEHtml = `
      ${buildBookPageHeader("खण्ड E : अष्टकवर्ग एवं सर्वाष्टकवर्ग (337 बिंदु)", personHeader, appLogo)}
      ${buildSectionTitleBar("E1", "सप्तग्रह भिन्नाष्टकवर्ग (BAV) एवं सर्वाष्टकवर्ग (SAV) सारणी", `कुल योग: ${av.totalBindusSum} बिंदु`)}
      <table class="book-table" style="font-size: 8px; text-align:center;">
        <thead>
          <tr>
            <th style="width: 16%; text-align:left;">ग्रह / वर्ग</th>
            ${RASHI_12_REFERENCE.map((r) => `<th style="width: 6.4%; text-align:center;">${r.number}<br/>${esc(r.nameHi.slice(0, 3))}</th>`).join("")}
            <th style="width: 7.2%; text-align:right;">योग</th>
          </tr>
        </thead>
        <tbody>
          ${Object.entries(av.planetBindus).map(([name, arr], idx) => {
      const sum = arr.reduce((a, b) => a + b, 0);
      return `
                <tr style="background:${idx % 2 === 0 ? "#FFFDF8" : "#FEF6E4"};">
                  <td style="text-align:left; font-weight:800; color:${VEDIC_BOOK_THEME.cosmicNavy};">${esc(name)}</td>
                  ${arr.map((v) => `<td style="font-family:monospace; font-weight:${v >= 5 ? 800 : 600}; color:${v >= 5 ? VEDIC_BOOK_THEME.emerald : v <= 2 ? VEDIC_BOOK_THEME.crimson : VEDIC_BOOK_THEME.inkPrimary};">${v}</td>`).join("")}
                  <td style="text-align:right; font-family:monospace; font-weight:800;">${sum}</td>
                </tr>`;
    }).join("")}
          <tr style="background:${VEDIC_BOOK_THEME.templeGoldSoft}; font-weight:900;">
            <td style="text-align:left; color:${VEDIC_BOOK_THEME.cosmicNavy};">सर्वाष्टकवर्ग (SAV)</td>
            ${av.sarvashtakavarga.map((v) => `<td style="font-family:monospace; color:${v >= 30 ? VEDIC_BOOK_THEME.emerald : v < 25 ? VEDIC_BOOK_THEME.crimson : VEDIC_BOOK_THEME.saffronDeep};">${v}</td>`).join("")}
            <td style="text-align:right; font-family:monospace; color:${VEDIC_BOOK_THEME.cosmicNavy};">${av.totalBindusSum}</td>
          </tr>
        </tbody>
      </table>

      ${buildSectionTitleBar("E2", "द्वादश भावों में सर्वाष्टकवर्ग बिंदु स्थिति", "28+ बिंदु = शुभ व फलदायी")}
      <table class="book-table" style="font-size: 8.1px;">
        <colgroup>
          <col style="width: 21%;" />
          <col style="width: 29%;" />
          <col style="width: 21%;" />
          <col style="width: 29%;" />
        </colgroup>
        <tbody>${savRowsByHouse}</tbody>
      </table>
      <div class="book-card" style="margin-top:6px; background:${VEDIC_BOOK_THEME.pureIvory}; border:1.2px solid ${VEDIC_BOOK_THEME.templeGold}; border-radius:7px; padding:7px 10px; font-size:8.2px; line-height:1.45;">
        <div><b style="color:${VEDIC_BOOK_THEME.emerald};">✦ सर्वाधिक प्रबल राशियाँ (30+ बिंदु):</b> ${esc(av.strongestRashis.join(" • ") || "—")}</div>
        <div style="margin-top:2px;"><b style="color:${VEDIC_BOOK_THEME.saffronDeep};">✦ अतिरिक्त ध्यान योग्य राशियाँ (&lt;28 बिंदु):</b> ${esc(av.weakestRashis.join(" • ") || "—")}</div>
      </div>
      ${buildHindiExplainerBox("ashtakavarga")}
      ${buildBrandSectionBannerHtml("after_ashtakavarga_e", qrs, cleanMode)}
    `;
    pages.push({ sectionCode: "E", sectionTag: "खण्ड E : अष्टकवर्ग (337 बिंदु)", html: sectionEHtml });
  }
  const vim = p2?.vimshottari;
  const sectionF1Html = `
    ${buildBookPageHeader("खण्ड F1 : विंशोत्तरी महादशा चक्र एवं 4-स्तरीय सक्रिय दशा", personHeader, appLogo)}
    ${buildSectionTitleBar("F1", "विंशोत्तरी महादशा (120 वर्षीय चक्र) एवं वर्तमान सक्रिय 4-स्तरीय दशा", vim ? vim.balanceAtBirthHi : "जन्म नक्षत्र आधारित")}
    ${vim ? `<div style="display:grid; grid-template-columns: repeat(4, 1fr); gap: 7px; margin-bottom: 8px;">
             ${[
    ["वर्तमान महादशा", vim.activeMahadasha],
    ["वर्तमान अंतर्दशा", vim.activeAntardasha],
    ["वर्तमान प्रत्यंतर", vim.activePratyantardasha],
    ["वर्तमान सूक्ष्म दशा", vim.activeSookshmadasha]
  ].map(
    ([lbl, node]) => `
                 <div class="book-cover-pillar-card" style="display: flex; flex-direction: column; justify-content: center; background:${VEDIC_BOOK_THEME.cosmicNavy}; color:${VEDIC_BOOK_THEME.warmIvory}; border:1.3px solid ${VEDIC_BOOK_THEME.templeGold}; border-radius:8px; padding:6px 9px; box-sizing:border-box;">
                   <div style="display:block; font-size:7.6px; color:#FCD34D; font-weight:700; line-height:1.25;">${esc(lbl)}</div>
                   <div style="display:block; font-size:11px; font-weight:800; margin-top:3px; line-height:1.25;">${esc(node.lordHindi)}</div>
                   <div style="display:block; font-size:7.3px; color:#CBD5E1; font-variant-numeric: tabular-nums; margin-top:3px; line-height:1.25;">${esc(node.startDateHi)} – ${esc(node.endDateHi)}</div>
                 </div>`
  ).join("")}
           </div>` : ""}
    <table class="book-table" style="font-size: 8.2px;">
      <thead>
        <tr>
          <th style="width: 15%;">महादशा स्वामी</th>
          <th style="width: 8%; text-align:center;">वर्ष</th>
          <th style="width: 18%;">अवधि</th>
          <th style="width: 59%;">प्रमुख जीवन प्रभाव</th>
        </tr>
      </thead>
      <tbody>
        ${report.mahadashas.map(
    (d, idx) => `
            <tr style="background:${d.isCurrent ? VEDIC_BOOK_THEME.emeraldSoft : idx % 2 === 0 ? "#FFFDF8" : "#FEF6E4"};">
              <td style="font-weight:800; color:${d.isCurrent ? VEDIC_BOOK_THEME.emerald : VEDIC_BOOK_THEME.cosmicNavy};">${esc(d.planet)}${d.isCurrent ? " ★" : ""}</td>
              <td style="text-align:center; font-family:monospace;">${d.years}</td>
              <td style="font-family:monospace; font-weight:700;">${esc(d.startYear)} – ${esc(d.endYear)}</td>
              <td>${esc(d.prediction)}</td>
            </tr>`
  ).join("")}
      </tbody>
    </table>

    ${vim && vim.activeAntardashaPratyantars.length > 0 ? `
          ${buildSectionTitleBar("F1b", `वर्तमान सक्रिय प्रत्यंतर दशा (${vim.activeMahadasha.lordHindi} – ${vim.activeAntardasha.lordHindi})`, "सूक्ष्म काल गणना")}
          <table class="book-table" style="font-size: 7.8px;">
            <thead>
              <tr>
                <th style="width: 24%;">प्रत्यंतर स्वामी</th>
                <th style="width: 28%;">आरंभ तिथि</th>
                <th style="width: 28%;">समाप्ति तिथि</th>
                <th style="width: 20%; text-align:right;">अवधि (दिन)</th>
              </tr>
            </thead>
            <tbody>
              ${vim.activeAntardashaPratyantars.map(
    (pr, idx) => `
                  <tr style="background:${pr.isCurrent ? VEDIC_BOOK_THEME.emeraldSoft : idx % 2 === 0 ? "#FFFDF8" : "#FEF6E4"};">
                    <td style="font-weight:800; color:${pr.isCurrent ? VEDIC_BOOK_THEME.emerald : VEDIC_BOOK_THEME.cosmicNavy};">${esc(pr.lordHindi)}${pr.isCurrent ? " (सक्रिय)" : ""}</td>
                    <td style="font-variant-numeric: tabular-nums; white-space: nowrap;">${esc(pr.startDateHi)}</td>
                    <td style="font-variant-numeric: tabular-nums; white-space: nowrap;">${esc(pr.endDateHi)}</td>
                    <td style="text-align:right; font-variant-numeric: tabular-nums; white-space: nowrap; font-weight: 700;">${Math.max(1, Math.round(Number(pr.durationDays) || 0))} दिन</td>
                  </tr>`
  ).join("")}
            </tbody>
          </table>` : ""}
    ${buildHindiExplainerBox("dasha_vimshottari")}
  `;
  pages.push({ sectionCode: "F1", sectionTag: "खण्ड F : विंशोत्तरी महादशा", html: sectionF1Html });
  if (vim && vim.mahadashas.length > 0) {
    const mdList = vim.mahadashas.slice(0, 9);
    const mdGroups = [
      { code: "F2", tag: "खण्ड F2 : विंशोत्तरी अंतर्दशा (भाग 1/4)", items: mdList.slice(0, 2) },
      { code: "F3", tag: "खण्ड F3 : विंशोत्तरी अंतर्दशा (भाग 2/4)", items: mdList.slice(2, 4) },
      { code: "F4", tag: "खण्ड F4 : विंशोत्तरी अंतर्दशा (भाग 3/4)", items: mdList.slice(4, 6) },
      { code: "F5", tag: "खण्ड F5 : विंशोत्तरी अंतर्दशा (भाग 4/4)", items: mdList.slice(6, 9) }
    ];
    for (const grp of mdGroups) {
      if (grp.items.length === 0) continue;
      const compact3 = grp.items.length >= 3;
      const blocksHtml = grp.items.map((md) => `
          <div style="margin-bottom: ${compact3 ? 7 : 12}px;">
            ${buildSectionTitleBar(
        `${md.lordHindi} महादशा`,
        `${md.lordHindi} महादशा के अंतर्गत सभी 9 अंतर्दशाएँ (${md.startDateHi} – ${md.endDateHi})`,
        md.isCurrent ? "★ वर्तमान सक्रिय महादशा" : `${md.durationYears.toFixed(1)} वर्ष`
      )}
            <div style="font-size: ${compact3 ? 7.6 : 8.2}px; color: ${VEDIC_BOOK_THEME.saffronDeep}; font-weight: 700; margin-bottom: 4px; padding: 0 2px;">
              महादशा प्रभाव: ${esc(md.effectHi)}
            </div>
            <table class="book-table" style="font-size: ${compact3 ? 7.1 : 8}px;">
              <thead>
                <tr>
                  <th style="width: 17%;">अंतर्दशा</th>
                  <th style="width: 18%;">आरंभ तिथि</th>
                  <th style="width: 18%;">समाप्ति तिथि</th>
                  <th style="width: 47%;">प्रमुख फल संकेत</th>
                </tr>
              </thead>
              <tbody>
                ${md.antardashas.map(
        (ad, idx) => `
                    <tr style="background:${ad.isCurrent ? VEDIC_BOOK_THEME.emeraldSoft : idx % 2 === 0 ? "#FFFDF8" : "#FEF6E4"};">
                      <td style="font-weight:800; color:${ad.isCurrent ? VEDIC_BOOK_THEME.emerald : VEDIC_BOOK_THEME.cosmicNavy};">${esc(md.lordHindi)} – ${esc(ad.lordHindi)}${ad.isCurrent ? " ★" : ""}</td>
                      <td style="font-variant-numeric: tabular-nums; white-space: nowrap;">${esc(ad.startDateHi)}</td>
                      <td style="font-variant-numeric: tabular-nums; white-space: nowrap;">${esc(ad.endDateHi)}</td>
                      <td>${esc(ANTARDASHA_EFFECT_MAP[ad.lordHindi] || "संतुलित कर्म व धैर्य से शुभ परिणाम।")}</td>
                    </tr>`
      ).join("")}
              </tbody>
            </table>
          </div>
        `).join("");
      pages.push({
        sectionCode: grp.code,
        sectionTag: grp.tag,
        html: `
          ${buildBookPageHeader(grp.tag, personHeader, appLogo)}
          ${blocksHtml}
        `
      });
    }
  }
  if (p2) {
    const sectionF6Html = `
      ${buildBookPageHeader("खण्ड F6 : 36-वर्षीय योगिनी दशा एवं जैमिनी चर दशा", personHeader, appLogo)}
      ${buildSectionTitleBar("F6a", "योगिनी दशा चक्र (36-वर्षीय पाराशरी प्रणाली)", `सक्रिय: ${p2.yogini.activeMahadasha.yoginiNameHi} → ${p2.yogini.activeAntardasha.yoginiNameHi}`)}
      <table class="book-table" style="font-size: 7.5px; width: 100%; table-layout: fixed;">
        <thead>
          <tr>
            <th style="width: 19%;">योगिनी (स्वामी)</th>
            <th style="width: 6%; text-align:center;">वर्ष</th>
            <th style="width: 10%;">प्रकृति</th>
            <th style="width: 34%; white-space: nowrap;">दिनांक अवधि (आरंभ → अंत)</th>
            <th style="width: 31%;">संकेत</th>
          </tr>
        </thead>
        <tbody>
          ${p2.yogini.mahadashas.slice(0, 10).map(
      (y, idx) => `
              <tr style="background:${y.isCurrent ? VEDIC_BOOK_THEME.emeraldSoft : idx % 2 === 0 ? "#FFFDF8" : "#FEF6E4"};">
                <td style="font-weight:800; color:${y.isCurrent ? VEDIC_BOOK_THEME.emerald : VEDIC_BOOK_THEME.cosmicNavy};">${esc(y.yoginiNameHi)} (${esc(y.lordHindi)})${y.isCurrent ? " ★" : ""}</td>
                <td style="text-align:center; font-family:monospace;">${y.years}</td>
                <td style="font-weight:700; color:${y.natureHi === "शुभ" ? VEDIC_BOOK_THEME.emerald : y.natureHi === "मिश्रित" ? VEDIC_BOOK_THEME.saffronDeep : VEDIC_BOOK_THEME.crimson};">${esc(y.natureHi)}</td>
                <td style="white-space: nowrap;">${formatDashaDateRangeHtml(y.startDateHi, y.endDateHi)}</td>
                <td>${esc(y.effectHi)}</td>
              </tr>`
    ).join("")}
        </tbody>
      </table>

      ${buildSectionTitleBar("F6b", "जैमिनी सप्त चर कारक (AK–DK) एवं राशि चर दशा", `सक्रिय: ${p2.jaimini.activeMahadasha.rashiNameHi} → ${p2.jaimini.activeAntardasha.rashiNameHi}`)}
      <div style="display:grid; grid-template-columns: repeat(4, 1fr); gap: 6px; margin-bottom: 7px;">
        ${p2.jaimini.karakas.map(
      (k) => `
            <div style="background:${VEDIC_BOOK_THEME.pureIvory}; border:1.1px solid ${VEDIC_BOOK_THEME.templeGold}; border-radius:6px; padding:5px 7px; font-size:7.6px;">
              <div style="font-weight:800; color:${VEDIC_BOOK_THEME.saffronDeep};">${esc(k.code)} • ${esc(k.nameHi)}</div>
              <div style="font-weight:800; color:${VEDIC_BOOK_THEME.cosmicNavy}; font-size:8.6px;">${esc(k.planetHindi)} <span style="font-family:monospace; font-weight:600; color:${VEDIC_BOOK_THEME.inkMuted};">(${esc(k.degDMS)})</span></div>
            </div>`
    ).join("")}
      </div>
      <table class="book-table" style="font-size: 7.4px; width: 100%; table-layout: fixed;">
        <thead>
          <tr>
            <th style="width: 18%;">चर दशा राशि</th>
            <th style="width: 12%;">स्वामी</th>
            <th style="width: 7%; text-align:center;">वर्ष</th>
            <th style="width: 35%; white-space: nowrap;">अवधि (आरंभ → अंत)</th>
            <th style="width: 28%;">नियम नोट</th>
          </tr>
        </thead>
        <tbody>
          ${p2.jaimini.charaDasha.slice(0, 8).map(
      (cd, idx) => `
              <tr style="background:${cd.isCurrent ? VEDIC_BOOK_THEME.emeraldSoft : idx % 2 === 0 ? "#FFFDF8" : "#FEF6E4"};">
                <td style="font-weight:800;">${cd.rashiNumber}. ${esc(cd.rashiNameHi)}${cd.isCurrent ? " ★" : ""}</td>
                <td>${esc(cd.effectiveLordHindi)}</td>
                <td style="text-align:center; font-family:monospace;">${cd.durationYears}</td>
                <td style="white-space: nowrap;">${formatDashaDateRangeHtml(cd.startDateHi, cd.endDateHi)}</td>
                <td>${esc(cd.lordStrengthRuleNoteHi)}</td>
              </tr>`
    ).join("")}
        </tbody>
      </table>
      ${buildHindiExplainerBox("dasha_yogini")}
    `;
    pages.push({ sectionCode: "F6", sectionTag: "खण्ड F : योगिनी एवं जैमिनी दशा", html: sectionF6Html });
  }
  const all12Bhavas = report.deepAnalysis?.allTwelveBhavas || [];
  const renderBhavaCardList = (items) => items.map(
    (b) => `
        <div class="book-card" style="background: ${VEDIC_BOOK_THEME.pureIvory}; border: 1.3px solid ${VEDIC_BOOK_THEME.templeGold}; border-left: 4px solid ${b.strengthLabel === "प्रबल" ? VEDIC_BOOK_THEME.emerald : b.strengthLabel === "शुभ" ? VEDIC_BOOK_THEME.saffron : VEDIC_BOOK_THEME.templeGoldDark}; border-radius: 8px; padding: 9px 11px; margin-bottom: 8px;">
          <div style="display: table; width: 100%; margin-bottom: 4px;">
            <div style="display: table-cell; vertical-align: middle; text-align: left; font-size: 9.8px; font-weight: 900; color: ${VEDIC_BOOK_THEME.cosmicNavy}; padding-right: 8px;">
              भाव ${b.house} — ${esc(b.bhavaName)} (${esc(b.rashi)} राशि)
            </div>
            <div style="display: table-cell; vertical-align: middle; text-align: right; white-space: nowrap; width: 1%;">
              <span class="book-pill" style="${PILL_CENTER_STYLE} font-size: 7.8px; font-weight: 800; padding-left: 9px; padding-right: 9px; border-radius: 999px; white-space: nowrap; background: ${b.strengthLabel === "प्रबल" ? VEDIC_BOOK_THEME.emeraldSoft : VEDIC_BOOK_THEME.saffronSoft}; color: ${b.strengthLabel === "प्रबल" ? VEDIC_BOOK_THEME.emerald : VEDIC_BOOK_THEME.saffronDeep};">
                <span style="${PILL_INNER_SPAN_STYLE}">स्थिति: ${esc(b.strengthLabel)}</span>
              </span>
            </div>
          </div>
          <div style="font-size: 8.1px; color: ${VEDIC_BOOK_THEME.saffronDeep}; font-weight: 700; margin-bottom: 3px;">
            भावेश: ${esc(b.lord)} (स्थित भाव: ${b.lordPlacementHouse}) &nbsp;|&nbsp; स्थित ग्रह: ${esc(b.occupants || "रिक्त (भावेश व दृष्टि से फल)")}
          </div>
          <div style="font-size: 8.6px; color: ${VEDIC_BOOK_THEME.inkPrimary}; line-height: 1.52;">
            ${esc(b.prediction)}
          </div>
        </div>`
  ).join("");
  const sectionG1Html = `
    ${buildBookPageHeader("खण्ड G1 : द्वादश भाव फल (प्रथम से षष्ठ भाव)", personHeader, appLogo)}
    ${buildSectionTitleBar("G1", "द्वादश भाव फल विश्लेषण — भाव 1 से भाव 6 (तनु, धन, पराक्रम, सुख, संतान, शत्रु)", `${report.panchang.lagnaName} लग्न`)}
    ${renderBhavaCardList(all12Bhavas.slice(0, 6))}
    ${buildCustomExplainerBox(
    "भाव फल कैसे पढ़ें?",
    "प्रत्येक भाव का फल तीन आधारों पर देखा जाता है: (1) उस भाव की राशि व स्वामी (भावेश) की स्थिति, (2) भाव में बैठे ग्रह, और (3) उस भाव पर पड़ने वाली शुभ या क्रूर ग्रहों की दृष्टि। रिक्त भाव का अर्थ अशुभ नहीं होता — उसका फल भावेश की स्थिति से मिलता है।",
    "प्रबल व शुभ भाव जीवन के उन क्षेत्रों को दर्शाते हैं जहाँ कम प्रयास में भी उत्तम सफलता मिलती है।"
  )}
  `;
  pages.push({ sectionCode: "G1", sectionTag: "खण्ड G : द्वादश भाव फल (1–6)", html: sectionG1Html });
  const sectionG2Html = `
    ${buildBookPageHeader("खण्ड G2 : द्वादश भाव फल (सप्तम से द्वादश भाव)", personHeader, appLogo)}
    ${buildSectionTitleBar("G2", "द्वादश भाव फल विश्लेषण — भाव 7 से भाव 12 (विवाह, आयु, भाग्य, कर्म, लाभ, व्यय)", `${report.panchang.lagnaName} लग्न`)}
    ${renderBhavaCardList(all12Bhavas.slice(6, 12))}
  `;
  pages.push({ sectionCode: "G2", sectionTag: "खण्ड G : द्वादश भाव फल (7–12)", html: sectionG2Html });
  const renderGrahaVicharCard = (pl) => {
    const baseRole = Object.entries(GRAHA_VICHAR_GUIDANCE).find(([k]) => pl.hindiName.includes(k))?.[1] || "जन्म कुंडली में विशिष्ट कर्मफल व जीवन दिशा प्रदान करने वाला ग्रह।";
    return `
      <div class="book-card" style="background: ${VEDIC_BOOK_THEME.pureIvory}; border: 1.3px solid ${VEDIC_BOOK_THEME.templeGold}; border-radius: 9px; padding: 10px 12px; margin-bottom: 9px;">
        <div style="display: table; width: 100%; border-bottom: 1px solid ${VEDIC_BOOK_THEME.borderMuted}; padding-bottom: 4px; margin-bottom: 5px;">
          <div style="display: table-cell; vertical-align: middle; text-align: left; font-size: 10px; font-weight: 900; color: ${VEDIC_BOOK_THEME.cosmicNavy}; padding-right: 8px;">
            ✦ ${esc(pl.hindiName)} विचार — ${esc(pl.rashiName)} राशि, भाव ${pl.houseInLagna} (${esc(pl.fullDegreeDMS)})
          </div>
          <div style="display: table-cell; vertical-align: middle; text-align: right; white-space: nowrap; width: 1%;">
            <span class="book-pill" style="${PILL_CENTER_STYLE} font-size: 7.8px; font-weight: 800; padding-left: 9px; padding-right: 9px; border-radius: 999px; white-space: nowrap; background: ${pl.statusBadge === "shubh" ? VEDIC_BOOK_THEME.emeraldSoft : pl.statusBadge === "upay" ? VEDIC_BOOK_THEME.crimsonSoft : VEDIC_BOOK_THEME.saffronSoft}; color: ${pl.statusBadge === "shubh" ? VEDIC_BOOK_THEME.emerald : pl.statusBadge === "upay" ? VEDIC_BOOK_THEME.crimson : VEDIC_BOOK_THEME.saffronDeep};">
              <span style="${PILL_INNER_SPAN_STYLE}">${esc(pl.dignity)}${pl.id !== "rahu" && pl.id !== "ketu" && pl.isRetrograde ? " • वक्री (*)" : ""}${pl.isCombust ? " • अस्त (^)" : ""}</span>
            </span>
          </div>
        </div>
        <div style="font-size: 8.2px; color: ${VEDIC_BOOK_THEME.saffronDeep}; font-weight: 700; margin-bottom: 3px;">
          नक्षत्र: ${esc(pl.nakshatra)} (चरण ${pl.pada}) &nbsp;|&nbsp; कारकत्व: ${esc(baseRole)}
        </div>
        <div style="font-size: 8.6px; color: ${VEDIC_BOOK_THEME.inkPrimary}; line-height: 1.52;">
          ${esc(pl.houseEffect || `${pl.hindiName} आपकी कुंडली के ${pl.houseInLagna}वें भाव में ${pl.rashiName} राशि में स्थित होकर ${pl.dignity} अवस्था में फल प्रदान कर रहे हैं।`)}
        </div>
      </div>`;
  };
  const sectionG3Html = `
    ${buildBookPageHeader("खण्ड G3 : नवग्रह विचार (सूर्य से गुरु तक)", personHeader, appLogo)}
    ${buildSectionTitleBar("G3", "नवग्रह विचार (भाग 1/2) — सूर्य, चंद्र, मंगल, बुध एवं गुरु का विस्तृत प्रभाव", "भाव एवं अवस्था आधारित")}
    ${report.planets.slice(0, 5).map(renderGrahaVicharCard).join("")}
  `;
  pages.push({ sectionCode: "G3", sectionTag: "खण्ड G : नवग्रह विचार (1–5)", html: sectionG3Html });
  const sectionG4Html = `
    ${buildBookPageHeader("खण्ड G4 : नवग्रह विचार (शुक्र से केतु) एवं शुभ राजयोग", personHeader, appLogo)}
    ${buildSectionTitleBar("G4a", "नवग्रह विचार (भाग 2/2) — शुक्र, शनि, राहु एवं केतु", "भाव एवं अवस्था आधारित")}
    ${report.planets.slice(5, 9).map(renderGrahaVicharCard).join("")}
    ${buildSectionTitleBar("G4b", "कुंडली में निर्मित प्रमुख शास्त्रीय योग एवं राजयोग", `${report.rajYogas.length} योग पहचानित`)}
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
      ${report.rajYogas.slice(0, 6).map(
    (y) => `
          <div class="book-card" style="background:${VEDIC_BOOK_THEME.pureIvory}; border:1.2px solid ${VEDIC_BOOK_THEME.templeGold}; border-radius:8px; padding:7.5px 9.5px; font-size:8px; line-height:1.45;">
            <div style="display:table; width:100%;">
              <div style="display:table-cell; vertical-align:middle; text-align:left; padding-right:4px;"><b style="color:${VEDIC_BOOK_THEME.cosmicNavy}; font-size:8.8px;">${esc(y.name)}</b></div>
              <div style="display:table-cell; vertical-align:middle; text-align:right; white-space:nowrap; width:1%;"><span class="book-pill" style="${PILL_CENTER_STYLE} padding-left: 7px; padding-right: 7px; border-radius: 999px; background: ${VEDIC_BOOK_THEME.emeraldSoft}; color:${VEDIC_BOOK_THEME.emerald}; font-weight:800; font-size:7.4px; white-space: nowrap;"><span style="${PILL_INNER_SPAN_STYLE}">${esc(y.strength)}</span></span></div>
            </div>
            <div style="color:${VEDIC_BOOK_THEME.saffronDeep}; font-size:7.4px; margin-top:1px;">${esc(y.sanskritRule)}</div>
            <div style="margin-top:3px; color:${VEDIC_BOOK_THEME.inkPrimary};">${esc(y.description)}</div>
          </div>`
  ).join("")}
    </div>
  `;
  pages.push({ sectionCode: "G4", sectionTag: "खण्ड G : नवग्रह व राजयोग", html: sectionG4Html });
  if (p2) {
    const sectionG5Html = `
      ${buildBookPageHeader("खण्ड G5 : 5 शास्त्रीय दोष एवं परिहार (भंग) परीक्षण", personHeader, appLogo)}
      ${buildSectionTitleBar("G5", "नियम-आधारित 5 प्रमुख दोष परीक्षण — मंगल, कालसर्प, पितृ, ग्रहण एवं केमद्रुम", "परिहार नियमों सहित निष्पक्ष विश्लेषण")}
      <table class="book-table" style="font-size: 8.3px;">
        <thead>
          <tr>
            <th style="width: 17%;">दोष नाम</th>
            <th style="width: 16%;">प्रभावी स्थिति</th>
            <th style="width: 40%;">शास्त्रीय विवरण एवं परिहार (अपवाद)</th>
            <th style="width: 27%;">शुद्ध सात्विक उपाय</th>
          </tr>
        </thead>
        <tbody>
          ${p2.yogasAndDoshas.doshas.allList.map((d, idx) => {
      const isFree = d.effectiveStatus === "दोष मुक्त";
      const pariharLine = d.pariharRulesHi.length > 0 ? `<div style="margin-top:3px; color:${VEDIC_BOOK_THEME.emerald}; font-weight:700;">✓ परिहार नियम: ${esc(d.pariharRulesHi.join("; "))}</div>` : "";
      return `
                <tr style="background:${idx % 2 === 0 ? "#FFFDF8" : "#FEF6E4"};">
                  <td style="font-weight:800; color:${VEDIC_BOOK_THEME.cosmicNavy}; padding: 8px 7px;">${esc(d.nameHi)}${d.subTypeHi ? `<div style="font-size:7.4px; color:${VEDIC_BOOK_THEME.inkMuted}; margin-top:2px;">${esc(d.subTypeHi)}</div>` : ""}</td>
                  <td style="font-weight:800; padding: 8px 7px; color:${isFree ? VEDIC_BOOK_THEME.emerald : d.effectiveStatus === "आंशिक / परिहार युक्त" ? VEDIC_BOOK_THEME.saffronDeep : VEDIC_BOOK_THEME.crimson};">${esc(d.effectiveStatus)}</td>
                  <td style="padding: 8px 7px; line-height:1.48;">${esc(d.explanationHi)}${pariharLine}</td>
                  <td style="padding: 8px 7px; line-height:1.48;">${esc(d.remedyHi)}</td>
                </tr>`;
    }).join("")}
        </tbody>
      </table>
      ${buildHindiExplainerBox("dosha_parihar_gochar")}
    `;
    pages.push({ sectionCode: "G5", sectionTag: "खण्ड G : 5 दोष व परिहार", html: sectionG5Html });
    const sadeSatiRows = buildLifetimeSadeSatiTable(report);
    const sectionG6Html = `
      ${buildBookPageHeader("खण्ड G6 : सम्पूर्ण जीवन साढ़ेसाती एवं लाइव ग्रह गोचर", personHeader, appLogo)}
      ${buildSectionTitleBar("G6a", `सम्पूर्ण जीवन शनि साढ़ेसाती आवर्तन तालिका (${report.panchang.moonRashiName} चंद्र राशि)`, p2.liveGochar.sadeSatiLabelHi)}
      <table class="book-table" style="font-size: 7.4px;">
        <thead>
          <tr>
            <th style="width: 14%;">आवर्तन</th>
            <th style="width: 24%;">चरण</th>
            <th style="width: 14%;">शनि राशि</th>
            <th style="width: 14%;">अनुमानित वर्ष</th>
            <th style="width: 11%;">आयु</th>
            <th style="width: 23%;">संकेत</th>
          </tr>
        </thead>
        <tbody>
          ${sadeSatiRows.slice(0, 9).map(
      (r, idx) => `
              <tr style="background:${idx % 2 === 0 ? "#FFFDF8" : "#FEF6E4"};">
                <td style="font-weight:800; color:${VEDIC_BOOK_THEME.cosmicNavy};">${esc(r.cycleLabel)}</td>
                <td style="font-weight:700; color:${VEDIC_BOOK_THEME.saffronDeep};">${esc(r.phaseLabel)}</td>
                <td>${esc(r.saturnRashi)}</td>
                <td style="font-variant-numeric: tabular-nums; font-weight:700; white-space: nowrap;">${esc(r.approxPeriod)}</td>
                <td style="font-variant-numeric: tabular-nums; white-space: nowrap;">${esc(r.ageSpan)}</td>
                <td>${esc(r.guidanceHi)}</td>
              </tr>`
    ).join("")}
        </tbody>
      </table>

      ${buildSectionTitleBar("G6b", `लाइव निरयण ग्रह गोचर (${p2.liveGochar.computedAtDateHi})`, "चंद्र एवं लग्न सापेक्ष")}
      <table class="book-table" style="font-size: 7.3px;">
        <thead>
          <tr>
            <th style="width: 13%;">ग्रह</th>
            <th style="width: 19%;">वर्तमान राशि व अंश</th>
            <th style="width: 9%; text-align:center;">चंद्र भाव</th>
            <th style="width: 9%; text-align:center;">लग्न भाव</th>
            <th style="width: 16%;">वेध / स्थिति</th>
            <th style="width: 34%;">गोचर प्रभाव</th>
          </tr>
        </thead>
        <tbody>
          ${p2.liveGochar.grahaRows.map(
      (g, idx) => `
              <tr style="background:${idx % 2 === 0 ? "#FFFDF8" : "#FEF6E4"};">
                <td style="font-weight:800;">${esc(g.nameHi)}${g.id !== "rahu" && g.id !== "ketu" && g.isRetrograde ? " (व)" : ""}${g.id !== "moon" && g.isCombust ? " (अ)" : ""}</td>
                <td style="font-variant-numeric: tabular-nums; white-space: nowrap; font-weight: 700;">${esc(g.currentRashiNameHi)} ${esc(g.degDMS)}</td>
                <td style="text-align:center; font-weight:800; color:${VEDIC_BOOK_THEME.emerald};">${g.houseFromNatalMoon}</td>
                <td style="text-align:center; font-weight:700;">${g.houseFromNatalLagna}</td>
                <td style="font-weight:700; color:${g.hasVedha ? VEDIC_BOOK_THEME.saffronDeep : g.isFavorableFromMoon ? VEDIC_BOOK_THEME.emerald : VEDIC_BOOK_THEME.inkMuted};">${g.hasVedha ? `वेध (${esc(g.vedhaByHi.join(", "))})` : g.isFavorableFromMoon ? "शुभ गोचर" : "सामान्य"}</td>
                <td>${esc(g.effectSummaryHi)}</td>
              </tr>`
    ).join("")}
        </tbody>
      </table>
      ${buildBrandSectionBannerHtml("after_gochar_g", qrs, cleanMode)}
    `;
    pages.push({ sectionCode: "G6", sectionTag: "खण्ड G : साढ़ेसाती एवं लाइव गोचर", html: sectionG6Html });
  }
  pages.push(buildCurrentTimeSynthesisPage(report, djHelpers));
  for (const qaPage of buildEightDirectQAPages(report, djHelpers)) {
    pages.push(qaPage);
  }
  pages.push(buildFiveYearRoadmapPage(report, djHelpers));
  const gr = getLagnaGemstoneAndRudraksha(report);
  const sectionHHtml = `
    ${buildBookPageHeader("खण्ड H1 : शुद्ध सात्विक वैदिक उपाय, रत्न एवं रुद्राक्ष", personHeader, appLogo)}
    ${buildSectionTitleBar("H1a", "लग्नेश आधारित प्रामाणिक रत्न, रुद्राक्ष एवं भाग्यवर्धक तत्व", `${report.panchang.lagnaName} लग्न`)}
    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 9px; margin-bottom: 9px;">
      <div class="book-card" style="background:${VEDIC_BOOK_THEME.pureIvory}; border:1.4px solid ${VEDIC_BOOK_THEME.templeGold}; border-radius:9px; padding:9px 11px; font-size:8.3px; line-height:1.5;">
        <div style="font-weight:800; color:${VEDIC_BOOK_THEME.saffronDeep};">जीवन रत्न एवं भाग्य रत्न</div>
        <div style="font-weight:900; color:${VEDIC_BOOK_THEME.cosmicNavy}; font-size:9.5px; margin-top:2px;">${esc(gr.jeevanRatna)}</div>
        <div style="margin-top:3px;"><b>भाग्य रत्न:</b> ${esc(gr.bhagyaRatna)}</div>
        <div><b>धारण विधि:</b> ${esc(gr.metalAndFinger)}</div>
      </div>
      <div class="book-card" style="background:${VEDIC_BOOK_THEME.pureIvory}; border:1.4px solid ${VEDIC_BOOK_THEME.templeGold}; border-radius:9px; padding:9px 11px; font-size:8.3px; line-height:1.5;">
        <div style="font-weight:800; color:${VEDIC_BOOK_THEME.saffronDeep};">कल्याणकारी रुद्राक्ष</div>
        <div style="font-weight:900; color:${VEDIC_BOOK_THEME.cosmicNavy}; font-size:9.5px; margin-top:2px;">${esc(gr.primaryRudraksha)}</div>
        <div style="margin-top:2px; font-size:7.9px;"><b>सहायक:</b> ${esc(gr.secondaryRudraksha)}</div>
        <div style="margin-top:3px;"><b>इष्टदेव:</b> ${esc(report.lucky.ishtaDevta)}</div>
        <div><b>शुभ वार / रंग:</b> ${esc(report.lucky.luckyDays)} • ${esc(report.lucky.luckyColors)}</div>
      </div>
      <div class="book-card" style="background:${VEDIC_BOOK_THEME.pureIvory}; border:1.4px solid ${VEDIC_BOOK_THEME.templeGold}; border-radius:9px; padding:9px 11px; font-size:8.3px; line-height:1.55;">
        <div style="font-weight:800; color:${VEDIC_BOOK_THEME.saffronDeep};">दैनिक सिद्ध बीज मंत्र</div>
        <div class="book-beej-mantra" style="font-weight:700; color:${VEDIC_BOOK_THEME.emerald}; font-size:9px; margin-top:4px; line-height:1.65; padding: 2px 0; overflow: visible;">
          ${esc(normalizeBeejMantraText(report.lucky.beejMantra))}
        </div>
        <div style="margin-top:4px;"><b>शुभ अंक व दिशा:</b> ${esc(report.lucky.luckyNumbers)} • ${esc(report.lucky.luckyDirection)}</div>
      </div>
    </div>

    ${buildSectionTitleBar("H1b", "व्यक्तिगत शुद्ध सात्विक वैदिक उपाय (कोई तांत्रिक या भय-आधारित क्रिया नहीं)", "धार्मिक, सरल एवं शास्त्रसम्मत")}
    <div class="book-card" style="background:${VEDIC_BOOK_THEME.pureIvory}; border:1.3px solid ${VEDIC_BOOK_THEME.templeGold}; border-radius:9px; padding:10px 13px; font-size:8.4px; line-height:1.62; margin-bottom: 9px;">
      ${report.remedies.upayList.slice(0, 6).map(
    (u, idx) => `<div style="margin-top:${idx === 0 ? 0 : 4.5}px;"><b style="color:${VEDIC_BOOK_THEME.saffronDeep};">${idx + 1}.</b> ${esc(normalizeBeejMantraText(u))}</div>`
  ).join("")}
    </div>

    ${buildSectionTitleBar("H1c", "नवग्रह सात्विक मंत्र एवं दान संदर्भ तालिका", "आवश्यकतानुसार जप व दान")}
    <table class="book-table" style="font-size: 7.8px; width: 100%; box-sizing: border-box; table-layout: fixed;">
      <thead>
        <tr>
          <th style="width: 11%;">ग्रह</th>
          <th style="width: 44%;">प्रामाणिक वैदिक बीज मंत्र</th>
          <th style="width: 30%;">सात्विक दान वस्तुएँ</th>
          <th style="width: 15%;">शुभ वार</th>
        </tr>
      </thead>
      <tbody>
        ${PLANET_SATTVIK_UPAY_TABLE.map(
    (row, idx) => `
          <tr style="background:${idx % 2 === 0 ? "#FFFDF8" : "#FEF6E4"};">
            <td style="font-weight:800; color:${VEDIC_BOOK_THEME.cosmicNavy}; padding: 6px 7px; line-height: 1.55;">${esc(row.graha)}</td>
            <td class="book-beej-mantra" style="font-weight:700; color:${VEDIC_BOOK_THEME.emerald}; padding: 6px 7px; line-height: 1.7; overflow: visible;">${esc(normalizeBeejMantraText(row.mantra))}</td>
            <td style="padding: 6px 7px; line-height: 1.5;">${esc(row.daan)}</td>
            <td style="font-weight:700; color:${VEDIC_BOOK_THEME.saffronDeep}; padding: 6px 7px; line-height: 1.5;">${esc(row.day)}</td>
          </tr>`
  ).join("")}
      </tbody>
    </table>
  `;
  pages.push({ sectionCode: "H", sectionTag: "खण्ड H : शुद्ध सात्विक वैदिक उपाय", html: sectionHHtml });
  pages.push(buildPracticalGemstoneAndRemedyPage(report, djHelpers));
  const predCards = [
    {
      title: report.predictions.personality.title,
      body: report.predictions.personality.summary,
      extra: report.predictions.personality.keyTraits.join(" • ")
    },
    {
      title: report.predictions.career.title,
      body: report.predictions.career.summary,
      extra: report.predictions.career.peakYears
    },
    {
      title: report.predictions.wealth.title,
      body: report.predictions.wealth.summary,
      extra: report.predictions.wealth.highlights.join(" • ")
    },
    {
      title: report.predictions.marriage.title,
      body: report.predictions.marriage.summary,
      extra: `जीवनसाथी स्वभाव: ${report.predictions.marriage.spouseNature}`
    },
    {
      title: report.predictions.education.title,
      body: report.predictions.education.summary
    },
    {
      title: report.predictions.health.title,
      body: report.predictions.health.summary,
      extra: report.predictions.health.careAreas.join(" • ")
    }
  ];
  const sectionH2Html = `
    ${buildBookPageHeader("खण्ड H2 : सम्पूर्ण जीवन फलादेश एवं प्रमुख समय-सीमा", personHeader, appLogo)}
    ${buildSectionTitleBar("H2a", "जीवन के 6 प्रमुख क्षेत्रों का संतुलित वैदिक मार्गदर्शन", `${report.panchang.lagnaName} लग्न • ${report.panchang.moonRashiName} राशि`)}
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 9px;">
      ${predCards.map(
    (c) => `
          <div class="book-card" style="background:${VEDIC_BOOK_THEME.pureIvory}; border:1.3px solid ${VEDIC_BOOK_THEME.templeGold}; border-radius:9px; padding:9px 11px; font-size:8.2px; line-height:1.48;">
            <div style="font-weight:900; color:${VEDIC_BOOK_THEME.cosmicNavy}; font-size:9.2px; border-bottom:1px solid ${VEDIC_BOOK_THEME.borderMuted}; padding-bottom:3.5px; margin-bottom:4.5px;">
              ✦ ${esc(c.title)}
            </div>
            <div style="color:${VEDIC_BOOK_THEME.inkPrimary};">${esc(c.body)}</div>
            ${c.extra ? `<div style="margin-top:4.5px; color:${VEDIC_BOOK_THEME.saffronDeep}; font-weight:700; font-size:7.8px;">${esc(c.extra)}</div>` : ""}
          </div>`
  ).join("")}
    </div>

    ${p2 && p2.lifeTimeline.length > 0 ? `
          ${buildSectionTitleBar("H2b", "प्रमुख जीवन समय-सीमा एवं आवर्तन मील के पत्थर (Life Timeline)", "महादशा, गुरु व शनि आवर्तन")}
          <table class="book-table" style="font-size: 7.7px;">
            <thead>
              <tr>
                <th style="width: 15%;">आयु / वर्ष</th>
                <th style="width: 33%;">चरण शीर्षक</th>
                <th style="width: 52%;">संक्षिप्त मार्गदर्शन</th>
              </tr>
            </thead>
            <tbody>
              ${p2.lifeTimeline.filter((t) => t.phaseType !== "ANTARDASHA").slice(0, 7).map(
    (t, idx) => `
                  <tr style="background:${t.isCurrent ? VEDIC_BOOK_THEME.emeraldSoft : idx % 2 === 0 ? "#FFFDF8" : "#FEF6E4"};">
                    <td style="font-variant-numeric: tabular-nums; font-weight:800; white-space: nowrap;">${t.startAge} – ${t.endAge} वर्ष</td>
                    <td style="font-weight:800; color:${t.isCurrent ? VEDIC_BOOK_THEME.emerald : VEDIC_BOOK_THEME.cosmicNavy};">${esc(t.titleHi)}</td>
                    <td>${esc(t.summaryHi)}</td>
                  </tr>`
  ).join("")}
            </tbody>
          </table>` : ""}
  `;
  pages.push({ sectionCode: "H2", sectionTag: "खण्ड H : जीवन फलादेश व समयरेखा", html: sectionH2Html });
  const sectionIHtml = `
    ${buildBookPageHeader("खण्ड I : आचार्य आशीर्वचन, प्रामाणिकता मुहर एवं समापन", personHeader, appLogo)}
    ${buildSectionTitleBar("I1", "जीवन के प्रबल पक्ष एवं विशेष सावधानियाँ", "व्यक्तिगत सारांश")}
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 12px;">
      <div class="book-card" style="background: ${VEDIC_BOOK_THEME.emeraldSoft}; border: 1.3px solid #10B981; border-radius: 9px; padding: 10px 12px; font-size: 8.5px; line-height: 1.55;">
        <div style="font-weight: 900; color: #065F46; font-size: 9.5px; margin-bottom: 5px;">✓ प्रमुख शक्तियाँ (Strengths)</div>
        ${(report.remedies.strengths.length > 0 ? report.remedies.strengths : ["लग्नेश व त्रिकोण भावों की शुभ स्थिति से जीवन में निरंतर उन्नति।"]).slice(0, 5).map((s) => `<div style="margin-top:3px;">• ${esc(s)}</div>`).join("")}
      </div>
      <div class="book-card" style="background: ${VEDIC_BOOK_THEME.saffronSoft}; border: 1.3px solid ${VEDIC_BOOK_THEME.templeGold}; border-radius: 9px; padding: 10px 12px; font-size: 8.5px; line-height: 1.55;">
        <div style="font-weight: 900; color: ${VEDIC_BOOK_THEME.saffronDeep}; font-size: 9.5px; margin-bottom: 5px;">✦ विवेकपूर्ण सावधानियाँ (Precautions)</div>
        ${(report.remedies.precautions.length > 0 ? report.remedies.precautions : ["महत्वपूर्ण निर्णयों में धैर्य, सात्विक आहार और दशा-गोचर का ध्यान रखें।"]).slice(0, 5).map((s) => `<div style="margin-top:3px;">• ${esc(s)}</div>`).join("")}
      </div>
    </div>

    ${buildSectionTitleBar("I2", "आचार्य पण्डित शशांक शर्मा का आशीर्वचन एवं गणना प्रामाणिकता प्रमाण-पत्र", "PANDIT JI ONLINE")}
    <div class="book-card" style="background: ${VEDIC_BOOK_THEME.pureIvory}; border: 1.8px solid ${VEDIC_BOOK_THEME.templeGold}; border-radius: 11px; padding: 14px 16px; text-align: center;">
      <div style="display: flex; justify-content: center; margin-bottom: 8px;">
        ${buildBrandLogoBadgeHtml(56, appLogo, 2.5)}
      </div>
      <div style="font-size: 11.5px; font-weight: 900; color: ${VEDIC_BOOK_THEME.saffronDeep};">
        ॥ स्वस्ति प्रजाभ्यः परिपालयन्तां न्यायेन मार्गेण महीं महीशाः ॥
      </div>
      <div style="font-size: 9px; color: ${VEDIC_BOOK_THEME.inkPrimary}; line-height: 1.65; margin-top: 8px; text-align: justify;">
        प्रिय यजमान <b>${esc(report.input.name)}</b> जी, यह सम्पूर्ण बृहत् वैदिक जन्म कुंडली पुस्तक पूर्ण खगोलीय शुद्धता — <b>दृक् गणित लाहिड़ी चित्रा पक्ष अयनांश (${esc(report.input.ayanamsaDMS)}), True Node, वास्तविक MC आधारित श्रीपति भाव चलित, BPHS सत्यापित 16 षोडशवर्ग, 6-अंगी पाराशरी षड्बल, 337-बिंदु अष्टकवर्ग, विंशोत्तरी/योगिनी/जैमिनी दशा प्रणाली एवं डिजिटल ज्योतिषाचार्य जीवन-मार्गदर्शन</b> पर आधारित है। वैदिक ज्योतिष हमें जीवन के संभावित अवसरों और चुनौतियों का प्रकाश दिखाता है; सद्कर्म, धैर्य और ईश्वर-भक्ति से प्रत्येक समय को मंगलमय बनाया जा सकता है।
      </div>
      <div style="margin-top: 10px; padding-top: 9px; border-top: 1px dashed ${VEDIC_BOOK_THEME.templeGold}; display: flex; align-items: center; justify-content: space-between; font-size: 8.4px; color: ${VEDIC_BOOK_THEME.cosmicNavy};">
        <div style="text-align: left;">
          <b>प्रमाणित संस्थान:</b> पण्डित जी ऑनलाइन (PANDIT JI ONLINE)<br/>
          <b>वेबसाइट:</b> ${buildNowrapWebsiteHtml(VEDIC_BOOK_THEME.saffronDeep)}
        </div>
        <div style="text-align: right;">
          <b>${esc(PANDITJI_BRAND_URLS.founderHi)}</b><br/>
          <span style="color:${VEDIC_BOOK_THEME.inkMuted};">${esc(PANDITJI_BRAND_URLS.locationHi)}</span>
        </div>
      </div>
    </div>

    ${buildBackCoverVerificationHtml(qrs, cleanMode)}
  `;
  pages.push({ sectionCode: "I", sectionTag: "खण्ड I : आशीर्वचन एवं समापन", html: sectionIHtml });
  return pages;
}
const SHARED_BOOK_CSS = `
  @page {
    size: A4 portrait;
    margin: 9mm 9mm 11mm 9mm;
  }
  * {
    box-sizing: border-box;
    font-synthesis: none;
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
  }
  html, body {
    margin: 0;
    padding: 0;
    background: ${VEDIC_BOOK_THEME.warmIvory};
    color: ${VEDIC_BOOK_THEME.inkPrimary};
    font-family: ${BOOK_FONT_STACK};
    font-synthesis: none;
    font-variant-ligatures: normal;
    font-feature-settings: "liga" 1, "clig" 1, "kern" 1;
    text-rendering: optimizeLegibility;
    line-height: 1.35;
  }
  .vedic-book-a4-page {
    width: 794px;
    height: 1123px;
    box-sizing: border-box;
    background: ${VEDIC_BOOK_THEME.warmIvory};
    padding: 18px 16px 28px 16px;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    font-synthesis: none;
    font-variant-ligatures: normal;
    font-feature-settings: "liga" 1, "clig" 1, "kern" 1;
    text-rendering: optimizeLegibility;
    line-height: 1.35;
  }
  .vedic-book-a4-body {
    width: 100%;
    box-sizing: border-box;
    padding: 0 14px;
    flex: 1;
    min-height: 0;
    overflow: hidden;
  }
  .vedic-book-a4-body--has-banner {
    display: flex;
    flex-direction: column;
  }
  .vedic-book-a4-body--has-banner > * {
    flex-shrink: 0;
  }
  .vedic-book-a4-body--has-banner > .book-banner-slot {
    flex: 1 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    width: 100%;
    padding: 6px 0;
  }
  .vedic-book-a4-body--cover {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 0;
    flex: 1;
    min-height: 0;
    overflow: hidden;
  }
  .vedic-book-a4-footer {
    position: absolute;
    left: 30px;
    right: 30px;
    bottom: 9px;
    border-top: 1px solid ${VEDIC_BOOK_THEME.templeGold};
    padding-top: 4px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    font-size: 7.7px;
    font-weight: 700;
    color: ${VEDIC_BOOK_THEME.inkMuted};
  }
  .book-section-bar,
  .book-cover-pillar-card,
  .book-cover-meta-card,
  .book-chart-box,
  .book-card {
    overflow: visible;
  }
  .book-section-bar > div {
    vertical-align: middle;
  }
  .book-pill {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    line-height: 1.2;
    padding-top: 4px;
    padding-bottom: 4px;
    vertical-align: middle;
    box-sizing: border-box;
    text-align: center;
    overflow: visible;
  }
  .book-pill > span {
    display: inline-block;
    line-height: 1.2;
  }
  .book-banner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: 0;
  }
  .book-banner-pills {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  .book-banner .book-banner-badge,
  .book-banner div[style*="border-radius: 999px"] {
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    min-height: 18px !important;
    line-height: 1.15 !important;
    padding: 2px 10px !important;
    box-sizing: border-box !important;
    text-align: center !important;
    overflow: visible !important;
  }
  .book-banner .book-banner-badge > span,
  .book-banner .book-banner-badge-text {
    display: inline-block !important;
    line-height: 1.15 !important;
  }
  .book-banner .book-banner-pill,
  .book-banner span[style*="border-radius: 999px"] {
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    line-height: 1.2 !important;
    padding-top: 4px !important;
    padding-bottom: 4px !important;
    vertical-align: middle !important;
    box-sizing: border-box !important;
    text-align: center !important;
    overflow: visible !important;
  }
  .book-table {
    width: 100%;
    box-sizing: border-box;
    table-layout: fixed;
    border-collapse: collapse;
    border: 1.2px solid ${VEDIC_BOOK_THEME.templeGold};
    background: ${VEDIC_BOOK_THEME.pureIvory};
    margin-bottom: 6px;
  }
  .book-table thead {
    display: table-header-group;
  }
  .book-table tfoot {
    display: table-footer-group;
  }
  .book-table th {
    background: ${VEDIC_BOOK_THEME.cosmicNavy};
    color: #FDE68A;
    font-weight: 800;
    text-align: left;
    padding: 5.5px 7px;
    border: 0.8px solid #334155;
    line-height: 1.3;
    vertical-align: middle;
    overflow: visible;
    box-sizing: border-box;
  }
  .book-table td {
    padding: 5px 7px;
    border: 0.7px solid ${VEDIC_BOOK_THEME.borderMuted};
    line-height: 1.38;
    vertical-align: middle;
    overflow: visible;
    word-wrap: break-word;
    overflow-wrap: break-word;
    box-sizing: border-box;
  }
  .book-table tr,
  .book-card,
  .book-chart-box,
  .book-banner {
    break-inside: avoid;
    page-break-inside: avoid;
  }
  .book-dasha-date {
    white-space: nowrap !important;
    direction: ltr !important;
    unicode-bidi: isolate !important;
    display: inline-block;
  }
  .book-beej-mantra {
    line-height: 1.75 !important;
    letter-spacing: 0 !important;
    overflow: visible !important;
    font-variant-ligatures: normal !important;
    font-feature-settings: "liga" 1, "clig" 1, "kern" 1 !important;
    text-rendering: optimizeLegibility !important;
    white-space: nowrap;
  }
  @media print {
    html, body {
      background: ${VEDIC_BOOK_THEME.warmIvory};
    }
    .vector-print-page {
      break-after: page;
      page-break-after: always;
      width: 100%;
      box-sizing: border-box;
      min-height: 274mm;
      background: ${VEDIC_BOOK_THEME.warmIvory};
      padding: 2mm 14px 6mm 14px;
    }
    .vector-print-page--has-banner {
      display: flex;
      flex-direction: column;
    }
    .vector-print-page--has-banner > * {
      flex-shrink: 0;
    }
    .vector-print-page--has-banner > .book-banner-slot {
      flex: 1 0 auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: stretch;
      width: 100%;
      padding: 10px 0;
    }
    .vector-print-page:last-child {
      break-after: auto;
      page-break-after: auto;
    }
    .book-table thead {
      display: table-header-group !important;
    }
    .book-table tr,
    .book-card,
    .book-chart-box,
    .book-banner {
      break-inside: avoid !important;
      page-break-inside: avoid !important;
    }
  }
`;
function wrapDiscreteBookPage(page, pageNumber, totalPages) {
  if (page.isCover) {
    return `
      <div class="vedic-book-a4-page" style="padding: 16px 18px;">
        <div class="vedic-book-a4-body--cover">${page.html}</div>
      </div>
    `;
  }
  const hasBanner = page.html.includes("book-banner-slot") || page.html.includes('class="book-banner"');
  return `
    <div class="vedic-book-a4-page">
      <div class="vedic-book-a4-body${hasBanner ? " vedic-book-a4-body--has-banner" : ""}">${page.html}</div>
      <div class="vedic-book-a4-footer">
        <span>पण्डित जी ऑनलाइन (PANDIT JI ONLINE) • ${esc(PANDITJI_BRAND_URLS.founderHi)} • ${buildNowrapWebsiteHtml(VEDIC_BOOK_THEME.inkMuted)}</span>
        <span style="color:${VEDIC_BOOK_THEME.cosmicNavy}; font-weight:800; white-space: nowrap;">पृष्ठ ${pageNumber} / ${totalPages}</span>
      </div>
    </div>
  `;
}
function localizeContainerIfNeeded(container, language) {
  if (language === "hi") return;
  const doc = container.ownerDocument || document;
  const walker = doc.createTreeWalker(container, NodeFilter.SHOW_TEXT);
  const nodes = [];
  let cur;
  while (cur = walker.nextNode()) {
    if (cur.nodeType === Node.TEXT_NODE && cur.nodeValue && /[\u0900-\u097F]/.test(cur.nodeValue)) {
      nodes.push(cur);
    }
  }
  for (const n of nodes) {
    if (n.nodeValue) {
      n.nodeValue = translateVedicHindiToEnglish(n.nodeValue, language);
    }
  }
}
async function rasterizeSvgsInContainer(container) {
  const doc = container.ownerDocument || document;
  const svgs = Array.from(container.querySelectorAll("svg"));
  for (const svg of svgs) {
    try {
      const w = parseFloat(svg.getAttribute("width") || "240") || 240;
      const h = parseFloat(svg.getAttribute("height") || "240") || 240;
      const clone = svg.cloneNode(true);
      clone.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      clone.setAttribute("width", String(w));
      clone.setAttribute("height", String(h));
      const xml = new XMLSerializer().serializeToString(clone);
      const url = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(xml);
      const imgSrc = await new Promise((resolve) => {
        const image = new Image();
        const timer = window.setTimeout(() => resolve(""), 1800);
        image.onload = () => {
          window.clearTimeout(timer);
          try {
            const c = document.createElement("canvas");
            c.width = Math.max(120, Math.round(w * 2.6));
            c.height = Math.max(120, Math.round(h * 2.6));
            const ctx = c.getContext("2d");
            if (ctx) {
              ctx.fillStyle = VEDIC_BOOK_THEME.warmIvory;
              ctx.fillRect(0, 0, c.width, c.height);
              ctx.drawImage(image, 0, 0, c.width, c.height);
              const pngUrl = c.toDataURL("image/png");
              c.width = 0;
              c.height = 0;
              resolve(pngUrl);
              return;
            }
          } catch {
          }
          resolve("");
        };
        image.onerror = () => {
          window.clearTimeout(timer);
          resolve("");
        };
        image.src = url;
      });
      if (imgSrc) {
        const imgEl = doc.createElement("img");
        imgEl.src = imgSrc;
        imgEl.width = w;
        imgEl.height = h;
        imgEl.style.cssText = `width:${w}px;height:${h}px;display:block;margin:0 auto;`;
        svg.parentNode?.replaceChild(imgEl, svg);
      }
    } catch {
    }
  }
}
function traceRoundedRectPath(ctx, x, y, w, h, radius) {
  const r = Math.max(0, Math.min(radius, w / 2, h / 2));
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.arcTo(x + w, y, x + w, y + r, r);
  ctx.arcTo(x + w, y + h, x + w - r, y + h, r);
  ctx.lineTo(x + r, y + h);
  ctx.arcTo(x, y + h, x, y + h - r, r);
  ctx.arcTo(x, y, x + r, y, r);
  ctx.closePath();
}
function rasterizeBannerBadgesInContainer(container) {
  const doc = container.ownerDocument || document;
  const pills = Array.from(
    container.querySelectorAll(".book-banner-badge, .book-pill, .book-banner-pill")
  );
  if (!pills.length) return;
  const scale = 4;
  for (const el of pills) {
    try {
      const label = (el.textContent || "").replace(/\s+/g, " ").trim();
      if (!label) continue;
      const isBannerBadge = el.classList.contains("book-banner-badge");
      const computed = doc.defaultView?.getComputedStyle(el);
      const rect = el.getBoundingClientRect();
      const fontPx = Math.max(7, parseFloat(computed?.fontSize || (isBannerBadge ? "8" : "8.2")) || 8);
      const fontWeight = computed?.fontWeight || "800";
      const textColor = computed?.color || "#FFFFFF";
      const isNowrap = computed?.whiteSpace === "nowrap";
      if (!isBannerBadge && !isNowrap && rect.height > fontPx * 3.6) continue;
      const bgColor = el.getAttribute("data-badge-bg") || (computed && computed.backgroundColor && computed.backgroundColor !== "rgba(0, 0, 0, 0)" ? computed.backgroundColor : isBannerBadge ? "#FF6F00" : "rgba(15, 23, 42, 0.9)");
      const borderW = parseFloat(computed?.borderTopWidth || "0") || 0;
      const borderColor = computed?.borderTopColor || "transparent";
      const rawRadius = parseFloat(computed?.borderTopLeftRadius || (isBannerBadge ? "999" : "999")) || 0;
      const padX = Math.max(6, Math.round(parseFloat(computed?.paddingLeft || (isBannerBadge ? "10" : "9")) || 9));
      const textCanvas = doc.createElement("canvas");
      const textCtx = textCanvas.getContext("2d");
      if (!textCtx) continue;
      const canvasFont = `${fontWeight} ${fontPx}px ${BOOK_FONT_STACK}`;
      textCtx.font = canvasFont;
      const preMetrics = textCtx.measureText(label);
      const estW = Math.ceil(
        Math.max(
          preMetrics.width,
          (preMetrics.actualBoundingBoxLeft || 0) + (preMetrics.actualBoundingBoxRight || 0)
        )
      );
      const basePillH = isBannerBadge ? Math.max(19, Math.round(rect.height || 19)) : Math.max(19, Math.round(rect.height || fontPx + 11));
      const scratchCssW = Math.max(40, estW + 28);
      const scratchCssH = basePillH + 18;
      textCanvas.width = Math.round(scratchCssW * scale);
      textCanvas.height = Math.round(scratchCssH * scale);
      textCtx.save();
      textCtx.scale(scale, scale);
      textCtx.font = canvasFont;
      textCtx.fillStyle = textColor;
      textCtx.textAlign = "center";
      textCtx.textBaseline = "middle";
      textCtx.fillText(label, scratchCssW / 2, scratchCssH / 2);
      textCtx.restore();
      let minX = textCanvas.width;
      let maxX = -1;
      let minY = textCanvas.height;
      let maxY = -1;
      try {
        const imgData = textCtx.getImageData(0, 0, textCanvas.width, textCanvas.height);
        const data = imgData.data;
        const tw = textCanvas.width;
        const th = textCanvas.height;
        for (let y = 0; y < th; y++) {
          const rowOff = y * tw * 4;
          for (let x = 0; x < tw; x++) {
            if (data[rowOff + x * 4 + 3] > 20) {
              if (x < minX) minX = x;
              if (x > maxX) maxX = x;
              if (y < minY) minY = y;
              if (y > maxY) maxY = y;
            }
          }
        }
      } catch {
      }
      const hasInkBounds = maxX >= minX && maxY >= minY;
      const measuredTextCssW = hasInkBounds ? (maxX - minX + 1) / scale : estW;
      const measuredTextCssH = hasInkBounds ? (maxY - minY + 1) / scale : fontPx * 1.25;
      const pillH = Math.max(basePillH, Math.ceil(measuredTextCssH + 7 + borderW * 2));
      const pillW = Math.ceil(
        Math.max(measuredTextCssW + padX * 2 + borderW * 2, isBannerBadge ? 0 : rect.width || 0)
      );
      const pillCanvas = doc.createElement("canvas");
      pillCanvas.width = Math.round(pillW * scale);
      pillCanvas.height = Math.round(pillH * scale);
      const pillCtx = pillCanvas.getContext("2d");
      if (!pillCtx) {
        textCanvas.width = 0;
        textCanvas.height = 0;
        continue;
      }
      pillCtx.save();
      pillCtx.scale(scale, scale);
      const inset = borderW > 0 ? borderW / 2 : 0;
      const radius = rawRadius >= pillH / 2 ? pillH / 2 : rawRadius;
      traceRoundedRectPath(
        pillCtx,
        inset,
        inset,
        pillW - inset * 2,
        pillH - inset * 2,
        Math.max(0, radius - inset)
      );
      pillCtx.fillStyle = bgColor;
      pillCtx.fill();
      if (borderW > 0 && borderColor && borderColor !== "transparent" && borderColor !== "rgba(0, 0, 0, 0)") {
        pillCtx.lineWidth = borderW;
        pillCtx.strokeStyle = borderColor;
        pillCtx.stroke();
      }
      pillCtx.restore();
      if (hasInkBounds) {
        const inkMidX = (minX + maxX) / 2;
        const inkMidY = (minY + maxY) / 2;
        const destX = Math.round((pillCanvas.width - 1) / 2 - inkMidX);
        const destY = Math.round((pillCanvas.height - 1) / 2 - inkMidY);
        pillCtx.drawImage(textCanvas, destX, destY);
      } else {
        pillCtx.save();
        pillCtx.scale(scale, scale);
        pillCtx.font = canvasFont;
        pillCtx.fillStyle = textColor;
        pillCtx.textAlign = "center";
        pillCtx.textBaseline = "alphabetic";
        const fm = pillCtx.measureText(label);
        const ascent = fm.actualBoundingBoxAscent > 0 ? fm.actualBoundingBoxAscent : fontPx * 0.72;
        const descent = fm.actualBoundingBoxDescent >= 0 ? fm.actualBoundingBoxDescent : fontPx * 0.2;
        pillCtx.fillText(label, pillW / 2, pillH / 2 + (ascent - descent) / 2);
        pillCtx.restore();
      }
      const pngUrl = pillCanvas.toDataURL("image/png");
      textCanvas.width = 0;
      textCanvas.height = 0;
      pillCanvas.width = 0;
      pillCanvas.height = 0;
      if (pngUrl) {
        const imgEl = doc.createElement("img");
        imgEl.className = isBannerBadge ? "book-banner-badge-img" : "book-pill-img";
        imgEl.src = pngUrl;
        imgEl.alt = label;
        imgEl.width = pillW;
        imgEl.height = pillH;
        if (isBannerBadge) {
          imgEl.style.cssText = `width:${pillW}px;height:${pillH}px;display:block;align-self:flex-start;margin-bottom:5px;flex-shrink:0;`;
        } else {
          imgEl.style.cssText = `width:${pillW}px;height:${pillH}px;display:inline-block;vertical-align:middle;flex-shrink:0;`;
        }
        el.parentNode?.replaceChild(imgEl, el);
      }
    } catch {
    }
  }
}
function ensureHostDevanagariPdfFontLink() {
  if (typeof document === "undefined" || !document.head) return;
  const id = "pj-pdf-noto-devanagari-font";
  if (document.getElementById(id)) return;
  const link = document.createElement("link");
  link.id = id;
  link.rel = "stylesheet";
  link.href = "https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;500;600;700;800;900&display=swap";
  document.head.appendChild(link);
}
async function waitForFontsAndImagesReady(iframeDoc) {
  ensureHostDevanagariPdfFontLink();
  await waitForPdfDevanagariFontsReady(iframeDoc, 3500);
}
async function waitForPageImagesDecoded(pageEl) {
  const imgs = Array.from(pageEl.querySelectorAll("img"));
  await Promise.all(
    imgs.map(
      (img) => new Promise((resolve) => {
        const finish = () => {
          if (typeof img.decode === "function") {
            img.decode().then(() => resolve()).catch(() => resolve());
          } else {
            resolve();
          }
        };
        if (img.complete && img.naturalWidth > 0) {
          finish();
          return;
        }
        const t = window.setTimeout(resolve, 900);
        img.onload = () => {
          window.clearTimeout(t);
          finish();
        };
        img.onerror = () => {
          window.clearTimeout(t);
          resolve();
        };
      })
    )
  );
}
async function printKundaliBookVectorPDF(report, options = {}) {
  const resolved = {
    cleanMode: Boolean(options.cleanMode),
    chartStyle: options.chartStyle || "north",
    language: options.language || "hi"
  };
  const qrs = await getBrandQrCodeSet();
  const pages = buildAllKundaliBookPages(report, qrs, resolved);
  const safeTitle = `PanditJiOnline_Kundali_Book_${sanitizeFileName(report.input.name)}`;
  const pagesMarkup = pages.map((p, idx) => {
    const hasBanner = !p.isCover && (p.html.includes("book-banner-slot") || p.html.includes('class="book-banner"'));
    return `
      <section class="vector-print-page${hasBanner ? " vector-print-page--has-banner" : ""}">
        ${p.html}
        ${p.isCover ? "" : `<div style="margin-top: 8px; border-top: 1px solid ${VEDIC_BOOK_THEME.templeGold}; padding-top: 4px; display: flex; align-items: center; justify-content: space-between; font-size: 7.7px; font-weight: 700; color: ${VEDIC_BOOK_THEME.inkMuted};">
                 <span>पण्डित जी ऑनलाइन (PANDIT JI ONLINE) • ${esc(PANDITJI_BRAND_URLS.founderHi)} • ${buildNowrapWebsiteHtml(VEDIC_BOOK_THEME.inkMuted)}</span>
                 <span style="white-space: nowrap;">पृष्ठ ${idx + 1} / ${pages.length}</span>
               </div>`}
      </section>`;
  }).join("");
  const fullDocHtml = `<!DOCTYPE html>
<html lang="${resolved.language === "hi" ? "hi" : "en"}">
<head>
  <meta charset="utf-8" />
  <title>${esc(safeTitle)}</title>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;500;600;700;800;900&display=swap" />
  <style>${SHARED_BOOK_CSS}</style>
</head>
<body>
  <div id="vector-book-root">${pagesMarkup}</div>
</body>
</html>`;
  const existing = document.getElementById("panditji-vector-print-iframe");
  if (existing) existing.remove();
  const iframe = document.createElement("iframe");
  iframe.id = "panditji-vector-print-iframe";
  iframe.style.cssText = "position:fixed;right:0;bottom:0;width:0;height:0;border:0;opacity:0;pointer-events:none;";
  document.body.appendChild(iframe);
  const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
  if (!iframeDoc) return false;
  iframeDoc.open();
  iframeDoc.write(fullDocHtml);
  iframeDoc.close();
  const rootEl = iframeDoc.getElementById("vector-book-root");
  if (rootEl && resolved.language !== "hi") {
    localizeContainerIfNeeded(rootEl, resolved.language);
  }
  await waitForFontsAndImagesReady(iframeDoc);
  setTimeout(() => {
    try {
      iframe.contentWindow?.focus();
      iframe.contentWindow?.print();
    } catch {
    }
    setTimeout(() => {
      if (document.body.contains(iframe)) document.body.removeChild(iframe);
    }, 6e4);
  }, 450);
  return true;
}
function prewarmKundaliBookPdfAssets() {
  if (typeof window === "undefined") return;
  void getBrandQrCodeSet().catch(() => {
  });
  void ensurePdfLibrariesLoaded().catch(() => {
  });
}
function nextPaintFrame() {
  return new Promise((resolve) => {
    if (typeof window !== "undefined" && typeof window.requestAnimationFrame === "function") {
      window.requestAnimationFrame(() => window.setTimeout(resolve, 16));
    } else {
      window.setTimeout(resolve, 16);
    }
  });
}
function createLiveProgressOverlay(initialTotalPages, appLogoDataUrl) {
  let currentTotal = Math.max(1, initialTotalPages);
  let displayedPct = 4;
  let ceilingPct = 4;
  let glideTimer = null;
  const root = document.createElement("div");
  root.id = "panditji-book-pdf-progress";
  root.style.cssText = `
    position: fixed;
    top: 16px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 999999;
    width: min(92vw, 400px);
    background: linear-gradient(135deg, ${VEDIC_BOOK_THEME.cosmicNavy} 0%, #172540 100%);
    border: 2px solid ${VEDIC_BOOK_THEME.templeGold};
    border-radius: 16px;
    padding: 12px 16px;
    box-shadow: 0 18px 44px rgba(0, 0, 0, 0.55);
    font-family: ${BOOK_FONT_STACK};
    color: #FFF9ED;
  `;
  root.innerHTML = `
    <div style="display:flex; align-items:center; gap:10px;">
      ${buildBrandLogoBadgeHtml(34, appLogoDataUrl, 1.8)}
      <div style="flex:1; min-width:0;">
        <div style="font-size:12px; font-weight:800; color:#FDE68A;">4K वैदिक कुंडली पुस्तक तैयार हो रही है</div>
        <div id="pj-pdf-prog-text" style="font-size:11px; color:#E2E8F0; margin-top:2px; font-weight:700;">कुंडली डेटा व QR तैयार हो रहे हैं...</div>
      </div>
      <div id="pj-pdf-prog-pct" style="font-size:12px; font-weight:900; color:#FBBF24; font-family:monospace;">4%</div>
    </div>
    <div style="margin-top:9px; width:100%; height:7px; background:rgba(255,255,255,0.14); border-radius:999px; overflow:hidden; border:1px solid rgba(212,175,55,0.45);">
      <div id="pj-pdf-prog-fill" style="width:4%; height:100%; background:linear-gradient(90deg, ${VEDIC_BOOK_THEME.saffron}, ${VEDIC_BOOK_THEME.templeGold}, #FDE047); border-radius:999px; transition:width 180ms ease-out;"></div>
    </div>
  `;
  const applyVisual = (pct, label) => {
    const safePct = Math.max(displayedPct, Math.min(100, Math.round(pct)));
    displayedPct = safePct;
    const txt = root.querySelector("#pj-pdf-prog-text");
    const pctEl = root.querySelector("#pj-pdf-prog-pct");
    const fill = root.querySelector("#pj-pdf-prog-fill");
    if (label && txt) txt.textContent = label;
    if (pctEl) pctEl.textContent = `${safePct}%`;
    if (fill) fill.style.width = `${safePct}%`;
  };
  const stop = () => {
    if (glideTimer !== null) {
      window.clearInterval(glideTimer);
      glideTimer = null;
    }
  };
  const ensureGlider = () => {
    if (glideTimer !== null) return;
    glideTimer = window.setInterval(() => {
      if (displayedPct < ceilingPct) {
        applyVisual(displayedPct + 1);
      }
    }, 280);
  };
  const setStage = (pct, label, glideCeiling) => {
    applyVisual(pct, label);
    ceilingPct = Math.max(displayedPct, Math.min(99, Math.round(glideCeiling ?? pct)));
    if (ceilingPct > displayedPct) {
      ensureGlider();
    }
  };
  const updatePage = (pageIndex, actualTotalPages, phase) => {
    if (actualTotalPages > 0) currentTotal = actualTotalPages;
    const startPct = 28 + (pageIndex - 1) / currentTotal * 68;
    const endPct = 28 + pageIndex / currentTotal * 68;
    if (phase === "start") {
      const target = Math.max(displayedPct, Math.round(startPct + 0.35 * (endPct - startPct)));
      const ceil = Math.min(96, Math.max(target, Math.floor(endPct)));
      setStage(target, `पृष्ठ ${pageIndex} / ${currentTotal} तैयार हो रहा है...`, ceil);
    } else {
      const doneTarget = Math.min(96, Math.round(endPct));
      setStage(doneTarget, `पृष्ठ ${pageIndex} / ${currentTotal} तैयार`, doneTarget);
    }
  };
  return { root, setStage, updatePage, stop };
}
function showBookReadyModal(blob, blobUrl, filename, report, options, totalPages, appLogoDataUrl) {
  const existing = document.getElementById("panditji-book-pdf-ready-modal");
  if (existing) existing.remove();
  const sizeMb = (blob.size / (1024 * 1024)).toFixed(2);
  const overlay = document.createElement("div");
  overlay.id = "panditji-book-pdf-ready-modal";
  overlay.style.cssText = "position:fixed;inset:0;z-index:2147483647;background:rgba(15,23,42,0.82);backdrop-filter:blur(5px);display:flex;align-items:center;justify-content:center;padding:16px;";
  const card = document.createElement("div");
  card.style.cssText = `width:100%;max-width:440px;background:${VEDIC_BOOK_THEME.warmIvory};border:2.5px solid ${VEDIC_BOOK_THEME.templeGold};border-radius:18px;padding:20px;box-shadow:0 24px 60px rgba(0,0,0,0.55);color:${VEDIC_BOOK_THEME.cosmicNavy};font-family:${BOOK_FONT_STACK};text-align:center;`;
  card.innerHTML = `
    <div style="display:flex; justify-content:center; margin-bottom:8px;">
      ${buildBrandLogoBadgeHtml(52, appLogoDataUrl, 2.5)}
    </div>
    <div style="font-size:16px;font-weight:900;color:${VEDIC_BOOK_THEME.cosmicNavy};">4K बृहत् कुंडली पुस्तक PDF तैयार है</div>
    <div style="font-size:11.5px;color:${VEDIC_BOOK_THEME.saffronDeep};font-weight:700;margin-top:4px;">
      ${esc(report.input.name)} • ${totalPages} पृष्ठ • ${sizeMb} MB • ${options.cleanMode ? "Clean PDF मोड" : "ब्रांडेड वैदिक पुस्तक"}
    </div>
    <div style="font-size:10.5px;color:${VEDIC_BOOK_THEME.inkMuted};margin-top:6px;line-height:1.5;">
      यदि ऑटो-डाउनलोड शुरू न हुआ हो, तो नीचे दिए गए बटन पर टैप करके तुरंत सेव या WhatsApp पर शेयर करें।
    </div>
    <div style="display:flex;flex-direction:column;gap:8px;margin-top:14px;">
      <a id="pj-book-dl-link" href="${blobUrl}" download="${esc(filename)}" style="display:block;width:100%;padding:11px 14px;border-radius:12px;background:linear-gradient(90deg,${VEDIC_BOOK_THEME.saffron},${VEDIC_BOOK_THEME.templeGold});color:#FFFFFF;font-weight:900;font-size:13px;text-decoration:none;box-shadow:0 6px 16px rgba(255,111,0,0.3);">
        ⬇ अभी कुंडली पुस्तक PDF डाउनलोड करें (${sizeMb} MB)
      </a>
      <button id="pj-book-share-btn" type="button" style="width:100%;padding:10px 14px;border-radius:12px;background:#047857;color:#FFFFFF;font-weight:800;font-size:12.5px;border:none;cursor:pointer;">
        📲 WhatsApp / मोबाइल शेयर करें
      </button>
      <button id="pj-book-vector-btn" type="button" style="width:100%;padding:9px 14px;border-radius:12px;background:${VEDIC_BOOK_THEME.cosmicNavy};color:#FDE68A;font-weight:800;font-size:12px;border:1px solid ${VEDIC_BOOK_THEME.templeGold};cursor:pointer;">
        🖨 Searchable Vector Print / Save-as-PDF
      </button>
      <button id="pj-book-close-btn" type="button" style="width:100%;padding:8px;border-radius:10px;background:transparent;color:${VEDIC_BOOK_THEME.inkMuted};font-weight:700;font-size:11.5px;border:1px solid ${VEDIC_BOOK_THEME.borderMuted};cursor:pointer;">
        बंद करें
      </button>
    </div>
  `;
  overlay.appendChild(card);
  document.body.appendChild(overlay);
  const cleanup = () => {
    overlay.remove();
    setTimeout(() => URL.revokeObjectURL(blobUrl), 6e4);
  };
  card.querySelector("#pj-book-close-btn")?.addEventListener("click", cleanup);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) cleanup();
  });
  card.querySelector("#pj-book-share-btn")?.addEventListener("click", async () => {
    try {
      const pdfFile = new File([blob], filename, { type: "application/pdf" });
      if (navigator.canShare && navigator.canShare({ files: [pdfFile] })) {
        await navigator.share({
          files: [pdfFile],
          title: `${report.input.name} — Janam Kundali Book`,
          text: `पण्डित जी ऑनलाइन बृहत् जन्म कुंडली पुस्तक (${PANDITJI_BRAND_URLS.websiteDisplay})`
        });
        cleanup();
        return;
      }
    } catch {
    }
    card.querySelector("#pj-book-dl-link")?.click();
  });
  card.querySelector("#pj-book-vector-btn")?.addEventListener("click", () => {
    cleanup();
    void printKundaliBookVectorPDF(report, options);
  });
}
async function downloadKundaliBookPDF(report, options = {}) {
  const resolved = {
    cleanMode: Boolean(options.cleanMode),
    chartStyle: options.chartStyle || "north",
    language: options.language || "hi"
  };
  const estimatedTotalPages = 30;
  const progressUi = createLiveProgressOverlay(estimatedTotalPages, getSyncRealAppLogoSrc());
  document.body.appendChild(progressUi.root);
  progressUi.setStage(8, "PDF इंजन व QR कोड तैयार हो रहे हैं...", 18);
  await nextPaintFrame();
  let qrs;
  let JsPDFCtor = null;
  let html2canvasFn = null;
  try {
    const [resolvedQrs, libs] = await Promise.all([
      getBrandQrCodeSet(),
      ensurePdfLibrariesLoaded()
    ]);
    qrs = resolvedQrs;
    JsPDFCtor = libs.jsPDF;
    html2canvasFn = libs.html2canvas;
  } catch (libErr) {
    progressUi.stop();
    if (document.body.contains(progressUi.root)) document.body.removeChild(progressUi.root);
    throw libErr;
  }
  if (typeof JsPDFCtor !== "function" || typeof html2canvasFn !== "function") {
    progressUi.stop();
    if (document.body.contains(progressUi.root)) document.body.removeChild(progressUi.root);
    throw new Error("PDF libraries failed to initialize");
  }
  progressUi.setStage(20, "वैदिक फ़ॉन्ट व लेआउट तैयार हो रहा है...", 23);
  const captureWidth = 794;
  const captureHeight = 1123;
  const cleanIframe = document.createElement("iframe");
  cleanIframe.id = "panditji-book-pdf-capture-iframe";
  cleanIframe.style.cssText = `position:fixed;left:-9999px;top:0;width:${captureWidth}px;height:${captureHeight}px;border:0;margin:0;padding:0;z-index:-1;pointer-events:none;background:${VEDIC_BOOK_THEME.warmIvory};`;
  document.body.appendChild(cleanIframe);
  try {
    const iframeDoc = cleanIframe.contentDocument || cleanIframe.contentWindow?.document;
    if (!iframeDoc) throw new Error("Could not create capture iframe document");
    iframeDoc.open();
    iframeDoc.write(`<!DOCTYPE html>
<html lang="hi">
<head>
  <meta charset="utf-8" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;500;600;700;800;900&display=swap" />
  <style>${SHARED_BOOK_CSS}</style>
</head>
<body style="margin:0;padding:0;background:${VEDIC_BOOK_THEME.warmIvory};">
  <div id="book-pdf-host" style="width:${captureWidth}px;height:${captureHeight}px;overflow:hidden;"></div>
</body>
</html>`);
    iframeDoc.close();
    const host = iframeDoc.getElementById("book-pdf-host");
    if (!host) throw new Error("Book PDF host missing");
    await waitForFontsAndImagesReady(iframeDoc);
    progressUi.setStage(24, "30 पृष्ठ व उच्च-गुणवत्ता कुंडली चार्ट बन रहे हैं...", 27);
    await nextPaintFrame();
    const pages = buildAllKundaliBookPages(report, qrs, resolved, true);
    progressUi.setStage(28, `पृष्ठ 1 / ${pages.length} तैयार हो रहा है...`, 30);
    await nextPaintFrame();
    const pdf = new JsPDFCtor({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
      compress: true
    });
    const isCompactOrMobile = typeof window !== "undefined" && (window.innerWidth < 768 || typeof navigator !== "undefined" && typeof navigator.hardwareConcurrency === "number" && navigator.hardwareConcurrency <= 4);
    const ultraSharpScale = isCompactOrMobile ? 1.75 : 2;
    for (let i = 0; i < pages.length; i++) {
      progressUi.updatePage(i + 1, pages.length, "start");
      host.innerHTML = wrapDiscreteBookPage(pages[i], i + 1, pages.length);
      const pageEl = host.querySelector(".vedic-book-a4-page");
      if (!pageEl) continue;
      if (resolved.language !== "hi") {
        localizeContainerIfNeeded(pageEl, resolved.language);
      }
      await rasterizeSvgsInContainer(pageEl);
      rasterizeBannerBadgesInContainer(pageEl);
      await waitForPageImagesDecoded(pageEl);
      await new Promise((r) => setTimeout(r, i === 0 ? 20 : 8));
      const docFonts = document.fonts;
      if (docFonts?.ready) {
        await docFonts.ready;
      }
      const canvas = await html2canvasFn(pageEl, {
        scale: ultraSharpScale,
        useCORS: true,
        allowTaint: false,
        imageTimeout: 2500,
        backgroundColor: VEDIC_BOOK_THEME.warmIvory,
        width: captureWidth,
        height: captureHeight,
        windowWidth: captureWidth,
        windowHeight: captureHeight,
        logging: false,
        onclone: (clonedDoc) => {
          applyHtml2CanvasDevanagariFix(clonedDoc, ".vedic-book-a4-page");
        }
      });
      const imgData = canvas.toDataURL("image/jpeg", 0.85);
      if (i > 0) pdf.addPage();
      pdf.addImage(imgData, "JPEG", 0, 0, 210, 297, void 0, "FAST");
      canvas.width = 0;
      canvas.height = 0;
      host.innerHTML = "";
      progressUi.updatePage(i + 1, pages.length, "done");
    }
    progressUi.setStage(98, "कुंडली पुस्तक PDF फ़ाइल सेव हो रही है...", 99);
    await nextPaintFrame();
    const cleanName = sanitizeFileName(report.input.name);
    const modeTag = resolved.cleanMode ? "_Clean" : "";
    const filename = `PanditJiOnline_Kundali_Book_${cleanName}${modeTag}.pdf`;
    const arrayBuf = pdf.output("arraybuffer");
    const blob = new Blob([arrayBuf], { type: "application/pdf" });
    const blobUrl = URL.createObjectURL(blob);
    progressUi.setStage(100, "कुंडली पुस्तक PDF तैयार है!");
    try {
      const dlLink = document.createElement("a");
      dlLink.href = blobUrl;
      dlLink.download = filename;
      dlLink.style.display = "none";
      document.body.appendChild(dlLink);
      dlLink.click();
      setTimeout(() => {
        if (document.body.contains(dlLink)) document.body.removeChild(dlLink);
      }, 2e3);
    } catch {
    }
    showBookReadyModal(blob, blobUrl, filename, report, resolved, pages.length, qrs.appLogoDataUrl);
    return true;
  } finally {
    progressUi.stop();
    if (document.body.contains(cleanIframe)) document.body.removeChild(cleanIframe);
    if (document.body.contains(progressUi.root)) document.body.removeChild(progressUi.root);
  }
}
async function buildKundaliBookPayload(report, options = {}) {
  const resolved = {
    cleanMode: Boolean(options.cleanMode),
    chartStyle: options.chartStyle || "north",
    language: options.language || "hi"
  };
  const qrs = await getBrandQrCodeSet();
  const pages = buildAllKundaliBookPages(report, qrs, resolved);
  const wrappedDiscretePages = pages.map(
    (p, idx) => wrapDiscreteBookPage(p, idx + 1, pages.length)
  );
  return {
    pages,
    sharedCss: SHARED_BOOK_CSS,
    qrs,
    wrappedDiscretePages
  };
}
export {
  buildAllKundaliBookPages,
  buildKundaliBookPayload,
  downloadKundaliBookPDF,
  prewarmKundaliBookPdfAssets,
  printKundaliBookVectorPDF
};
