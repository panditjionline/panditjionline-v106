import { r as reactExports } from "./vendor-react-CCbeDaYX.js";
const SLUG_OR_TAB_TO_ARTICLE_PATH = {
  home: "/",
  panchang: "/panchang",
  "aaj-ka-panchang": "/panchang",
  "aaj-ka-choghadiya": "/aaj-ka-choghadiya",
  "aaj-ka-rahukaal": "/aaj-ka-rahukaal",
  rashifal: "/rashifal",
  rashi: "/rashifal",
  mesh: "/mesh-rashifal",
  "mesh-rashifal": "/mesh-rashifal",
  vrishabh: "/vrishabh-rashifal",
  "vrishabh-rashifal": "/vrishabh-rashifal",
  mithun: "/mithun-rashifal",
  "mithun-rashifal": "/mithun-rashifal",
  kark: "/kark-rashifal",
  "kark-rashifal": "/kark-rashifal",
  simha: "/simha-rashifal",
  singh: "/simha-rashifal",
  "simha-rashifal": "/simha-rashifal",
  "singh-rashifal": "/simha-rashifal",
  kanya: "/kanya-rashifal",
  "kanya-rashifal": "/kanya-rashifal",
  tula: "/tula-rashifal",
  "tula-rashifal": "/tula-rashifal",
  vrishchik: "/vrishchik-rashifal",
  "vrishchik-rashifal": "/vrishchik-rashifal",
  dhanu: "/dhanu-rashifal",
  "dhanu-rashifal": "/dhanu-rashifal",
  makar: "/makar-rashifal",
  "makar-rashifal": "/makar-rashifal",
  kumbh: "/kumbh-rashifal",
  "kumbh-rashifal": "/kumbh-rashifal",
  meen: "/meen-rashifal",
  "meen-rashifal": "/meen-rashifal",
  kundali: "/janam-kundali",
  "janam-kundali": "/janam-kundali",
  milan: "/kundali-milan",
  "kundali-milan": "/kundali-milan",
  "naam-se-kundali-milan": "/naam-se-kundali-milan",
  muhurat: "/shubh-muhurat",
  "shubh-muhurat": "/shubh-muhurat",
  "vivah-muhurat": "/vivah-muhurat",
  "griha-pravesh-muhurat": "/griha-pravesh-muhurat",
  "mundan-muhurat": "/mundan-muhurat",
  "vahan-muhurat": "/vahan-muhurat",
  "naam-rashi": "/naam-rashi",
  "a-naam-rashi-swabhav": "/a-naam-rashi-swabhav",
  "b-naam-rashi-swabhav": "/b-naam-rashi-swabhav",
  "c-naam-rashi-swabhav": "/c-naam-rashi-swabhav",
  "d-naam-rashi-swabhav": "/d-naam-rashi-swabhav",
  "g-naam-rashi-swabhav": "/g-naam-rashi-swabhav",
  "h-naam-rashi-swabhav": "/h-naam-rashi-swabhav",
  "j-naam-rashi-swabhav": "/j-naam-rashi-swabhav",
  "k-naam-rashi-swabhav": "/k-naam-rashi-swabhav",
  "l-naam-rashi-swabhav": "/l-naam-rashi-swabhav",
  "m-naam-rashi-swabhav": "/m-naam-rashi-swabhav",
  "n-naam-rashi-swabhav": "/n-naam-rashi-swabhav",
  "p-naam-rashi-swabhav": "/p-naam-rashi-swabhav",
  "r-naam-rashi-swabhav": "/r-naam-rashi-swabhav",
  "s-naam-rashi-swabhav": "/s-naam-rashi-swabhav",
  "t-naam-rashi-swabhav": "/t-naam-rashi-swabhav",
  "v-naam-rashi-swabhav": "/v-naam-rashi-swabhav",
  "y-naam-rashi-swabhav": "/y-naam-rashi-swabhav",
  "naam-rashi-calculator": "/naam-rashi",
  mandir: "/digital-mandir",
  "digital-mandir": "/digital-mandir",
  jaap: "/mantra-jaap",
  "mantra-jaap": "/mantra-jaap",
  "gayatri-mantra-jaap": "/gayatri-mantra-jaap",
  "mahamrityunjaya-mantra-jaap": "/mahamrityunjaya-mantra-jaap",
  chat: "/jyotish-chat",
  "jyotish-chat": "/jyotish-chat",
  "rudrapur-jyotish": "/rudrapur-jyotish",
  "kundali-dosh-upay": "/kundali-dosh-upay",
  services: "/puja-services",
  "puja-services": "/puja-services",
  "gyan-kosh": "/dharm-gyan-kosh",
  "dharm-gyan-kosh": "/dharm-gyan-kosh",
  articles: "/aarti-chalisa-sangrah",
  "aarti-chalisa-sangrah": "/aarti-chalisa-sangrah",
  history: "/user-history",
  "user-history": "/user-history",
  about: "/about-us",
  "about-us": "/about-us",
  contact: "/contact-us",
  "contact-us": "/contact-us",
  terms: "/terms-and-conditions",
  "terms-and-conditions": "/terms-and-conditions",
  privacy: "/privacy-policy",
  "privacy-policy": "/privacy-policy",
  disclaimer: "/disclaimer",
  "mangal-dosh-calculator": "/mangal-dosh-calculator",
  "kaal-sarp-dosh-calculator": "/kaal-sarp-dosh-calculator",
  "shani-sadesati-calculator": "/shani-sadesati-calculator",
  "ank-jyotish-mulank-calculator": "/ank-jyotish-mulank-calculator",
  "vivah-yog-calculator": "/vivah-yog-calculator",
  "sarkari-naukri-rajyog": "/sarkari-naukri-rajyog",
  "ishta-devta-calculator": "/ishta-devta-calculator",
  "ram-shalaka-prashnavali": "/ram-shalaka-prashnavali",
  "vastu-dosh-nivaran": "/vastu-dosh-nivaran",
  "ekadashi-vrat-katha": "/ekadashi-vrat-katha",
  "navgraha-shanti-mantra": "/navgraha-shanti-mantra",
  "pitra-dosh-shanti": "/pitra-dosh-shanti",
  "santana-gopal-prapti-upay": "/santana-gopal-prapti-upay",
  "karz-mukti-mantra-upay": "/karz-mukti-mantra-upay",
  "vedic-shanti-stotras": "/vedic-shanti-stotras",
  "ratna-rudraksha": "/ratna-rudraksha-guide",
  "swapna-shakun": "/swapna-phal-shakun-shastra",
  swarodaya: "/swarodaya-vigyan",
  "gita-niti": "/geeta-chanakya-niti",
  "baby-names": "/vedic-baby-names",
  teerth: "/char-dham-tirth-darshan",
  "puja-griha-pravesh": "/puja/griha-pravesh",
  "puja-satyanarayan-katha": "/puja/satyanarayan-katha",
  "puja-rudrabhishek": "/puja/rudrabhishek",
  "puja-mahamrityunjaya-jap": "/puja/mahamrityunjaya-jap",
  "puja-navgrah-shanti": "/puja/navgrah-shanti",
  "puja-kundali-paramarsh": "/puja/kundali-paramarsh"
};
const DEFAULT_FALLBACK_SECTIONS = [
  {
    heading: "१. शास्त्रीय वैदिक ज्योतिष एवं लाहिड़ी चित्रापक्ष अयनांश आधार",
    paragraphs: [
      "पण्डित जी ऑनलाइन (www.panditjionline.online) आचार्य पण्डित शशांक शर्मा (श्री ज्योतिष वैदिक संस्थान, रुद्रपुर, उत्तराखण्ड • १५+ वर्ष वैदिक कर्मकाण्ड अनुभव) द्वारा संचालित प्रामाणिक सनातन वैदिक मंच है।",
      "यहाँ प्रस्तुत समस्त पंचांग, जन्म कुंडली, अष्टकूट ३६ गुण मिलान, मुहूर्त एवं राशिफल गणनाएँ भारत सरकार के राष्ट्रीय पंचांग द्वारा मान्यता प्राप्त लाहिड़ी चित्रापक्ष अयनांश और बृहत् पाराशर होरा शास्त्र के शुद्ध गणितीय सिद्धांतों पर आधारित हैं।"
    ],
    bullets: [
      "शुद्ध दृक गणित एवं सूर्य सिद्धांत पर आधारित नक्षत्र, योग, करण व चौघड़िया गणना।",
      "रुद्रपुर (उत्तराखण्ड) सहित संपूर्ण भारत एवं विदेश हेतु सटीक ज्योतिषीय मार्गदर्शन व वैदिक अनुष्ठान सेवा।"
    ]
  }
];
let cachedSeoMap = null;
let inflightSeoPromise = null;
const cachedRouteEntries = {};
const inflightRoutePromises = {};
function normalizeSeoArticlePath(slugOrPath) {
  const raw = String(slugOrPath || "").trim().replace(/^\/+/, "").replace(/\/+$/, "").toLowerCase();
  if (!raw) return "/";
  if (SLUG_OR_TAB_TO_ARTICLE_PATH[raw]) {
    return SLUG_OR_TAB_TO_ARTICLE_PATH[raw];
  }
  return `/${raw}`;
}
function routePathToSeoChunkFile(routePath) {
  const clean = String(routePath || "/").trim().replace(/^\/+/, "").replace(/\/+$/, "").toLowerCase();
  if (!clean) return "home.json";
  const safeName = clean.replace(/\//g, "__").replace(/[^a-z0-9_-]/g, "-");
  return `${safeName || "home"}.json`;
}
async function fetchSeoDataMap() {
  if (cachedSeoMap) return cachedSeoMap;
  if (typeof window === "undefined" || typeof window.fetch !== "function") return null;
  if (!inflightSeoPromise) {
    inflightSeoPromise = window.fetch("/seo-data.json", { cache: "default" }).then((res) => res.ok ? res.json() : null).then((data) => {
      if (data && typeof data === "object") {
        cachedSeoMap = data;
        return cachedSeoMap;
      }
      return null;
    }).catch(() => null).finally(() => {
      inflightSeoPromise = null;
    });
  }
  return inflightSeoPromise;
}
async function fetchSeoEntry(pathOrSlug) {
  const normalized = normalizeSeoArticlePath(pathOrSlug);
  if (cachedRouteEntries[normalized]) return cachedRouteEntries[normalized];
  if (cachedSeoMap) {
    const fromFull = cachedSeoMap[normalized] || cachedSeoMap["/"] || null;
    if (fromFull) cachedRouteEntries[normalized] = fromFull;
    return fromFull;
  }
  if (typeof window === "undefined" || typeof window.fetch !== "function") return null;
  if (!inflightRoutePromises[normalized]) {
    const chunkFile = routePathToSeoChunkFile(normalized);
    inflightRoutePromises[normalized] = window.fetch(`/seo-chunks/${chunkFile}`, { cache: "default" }).then((res) => {
      const ct = (res.headers.get("content-type") || "").toLowerCase();
      if (!res.ok || !ct.includes("json")) return null;
      return res.json();
    }).then((entry) => {
      if (entry && typeof entry === "object" && (entry.title || entry.h1 || entry.sections)) {
        const typed = entry;
        cachedRouteEntries[normalized] = typed;
        return typed;
      }
      return null;
    }).catch(() => null).then(async (chunkHit) => {
      if (chunkHit) return chunkHit;
      const map = await fetchSeoDataMap();
      const fallbackHit = map ? map[normalized] || map["/"] || null : null;
      if (fallbackHit) cachedRouteEntries[normalized] = fallbackHit;
      return fallbackHit;
    }).finally(() => {
      delete inflightRoutePromises[normalized];
    });
  }
  return inflightRoutePromises[normalized];
}
function buildFallbackVivechanMeta(_canonicalSlug, fallbackTitleHi) {
  return {
    badge: "सनातन वैदिक ज्ञान कोष",
    title: fallbackTitleHi || "पण्डित जी ऑनलाइन — वैदिक ज्योतिष, दृक पंचांग एवं धर्म ज्ञान कोष",
    subtitle: "आचार्य पण्डित शशांक शर्मा (रुद्रपुर, उत्तराखण्ड) द्वारा प्रमाणित शास्त्रोक्त वैदिक विवेचन एवं सरल उपाय।",
    sections: DEFAULT_FALLBACK_SECTIONS
  };
}
function entryToVivechanMeta(entry, fallbackTitleHi) {
  const fb = buildFallbackVivechanMeta(void 0, fallbackTitleHi);
  if (!entry) return fb;
  return {
    badge: entry.badge || fb.badge,
    title: entry.h1 || entry.title || fb.title,
    subtitle: entry.subtitle || entry.description || fb.subtitle,
    sections: Array.isArray(entry.sections) && entry.sections.length > 0 ? entry.sections : fb.sections
  };
}
function useRouteVivechanMeta(canonicalSlug, fallbackTitleHi) {
  const targetPath = normalizeSeoArticlePath(canonicalSlug);
  const [meta, setMeta] = reactExports.useState(() => {
    const hit = cachedRouteEntries[targetPath] || (cachedSeoMap ? cachedSeoMap[targetPath] || cachedSeoMap["/"] : null);
    if (hit) return entryToVivechanMeta(hit, fallbackTitleHi);
    return buildFallbackVivechanMeta(canonicalSlug, fallbackTitleHi);
  });
  reactExports.useEffect(() => {
    let cancelled = false;
    const hit = cachedRouteEntries[targetPath] || (cachedSeoMap ? cachedSeoMap[targetPath] || cachedSeoMap["/"] : null);
    if (hit) {
      setMeta(entryToVivechanMeta(hit, fallbackTitleHi));
      return;
    }
    fetchSeoEntry(targetPath).then((entry) => {
      if (!cancelled && entry) {
        setMeta(entryToVivechanMeta(entry, fallbackTitleHi));
      }
    });
    return () => {
      cancelled = true;
    };
  }, [targetPath, fallbackTitleHi]);
  return meta;
}
export {
  buildFallbackVivechanMeta,
  fetchSeoDataMap,
  fetchSeoEntry,
  normalizeSeoArticlePath,
  routePathToSeoChunkFile,
  useRouteVivechanMeta
};
