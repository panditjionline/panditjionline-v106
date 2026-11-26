import { r as reactExports, j as jsxRuntimeExports, a as reactDomExports } from "./vendor-react-CCbeDaYX.js";
import { u as useLanguage, a as SacredIcon, a5 as useGlobalAudio, a6 as getActiveMobilePhone, b as useFestiveTheme, v as vedicAudio, F as VedicWhatsAppSvg } from "./index-CUAFR0Uq.js";
import { getDeityForFestiveTheme, getDayDeity, getCurtainThemeForDeity, getInitialSadhanaState, getTodayDateString, saveSadhanaState, SACRED_DEITIES_LIST } from "./digitalMandirData-BIeT9FPH.js";
import { A as AARTI_CHALISA_LIST } from "./vedicKnowledgeData-DktSV693.js";
import { b8 as QrCode, ax as ChevronUp, al as ChevronDown, aO as ExternalLink, C as Check, Y as Copy, X, ap as Sun, a9 as Flame, S as Sparkles, aq as Moon, a2 as Clock, aX as EyeOff, E as Eye, aa as Bell, aA as ChevronLeft, am as ChevronRight, T as Volume2, Q as VolumeX, v as ScrollText, ao as RotateCcw, $ as Share2, f as Award, W as Wind, j as Music, N as Pause, O as Play, b7 as Square, x as Calendar, aK as Trophy, a5 as CircleCheck, w as BookOpen, D as Download } from "./vendor-icons-Bk5Rg8-9.js";
import { g as getISTCalendarParts, b as buildSingleDayPanchang, c as getActivePanchangLocation, z as getMsUntilNextISTMidnight } from "./panchang-core-WfwKNTXG.js";
import { generateVedicShareCard } from "./vedicCardGenerator-B_f9Scll.js";
import { CardFestiveLightStrip, FestiveHairlineDivider } from "./FestiveLightsJhalar-4_JmNfAm.js";
import "./vendor-pdf-CpPyS1re.js";
import "./seo-core-uu9B2jSm.js";
import "./vendor-astronomy-C8JZdkQu.js";
import "./browser-CBlYJE2W.js";
import "./drikGanitaRashifalEngine-DPYMZu12.js";
const DANPATR_UPI_OPTIONS = [
  {
    id: "gpay",
    appName: "Google Pay (GPay)",
    shortLabel: "GPay",
    upiId: "internetwebhelp24@okicici",
    payeeName: "Pandit Ji Online",
    bankLabel: "Bank of India - 0779",
    schemePrefix: "tez://upi/pay",
    badgeText: "G",
    badgeBg: "bg-white text-blue-600",
    buttonClass: "bg-gradient-to-b from-slate-900/90 to-slate-950 hover:from-slate-800 hover:to-slate-900 border-[#d4af37]/40 text-white",
    qrScreenshot: "/assets/aistudio/Screenshot_2026-11-02-15-39-35-59_4336b74596784d9a2aa81f87c2016f50_513e12f6.jpg"
  },
  {
    id: "phonepe",
    appName: "PhonePe",
    shortLabel: "PhonePe",
    upiId: "8958499979@ybl",
    payeeName: "Shashank Sharma",
    bankLabel: "Bank Of India - 0779",
    schemePrefix: "phonepe://pay",
    badgeText: "पे",
    badgeBg: "bg-purple-500 text-white",
    buttonClass: "bg-gradient-to-b from-[#3b1566]/90 to-[#240b42] hover:from-[#4b1c80] hover:to-[#2e0f54] border-purple-400/45 text-purple-100",
    qrScreenshot: "/assets/aistudio/Screenshot_2026-11-02-15-39-12-40_944a2809ea1b4cda6ef12d1db9048ed3_1bb67c40.jpg"
  },
  {
    id: "paytm",
    appName: "Paytm UPI",
    shortLabel: "Paytm",
    upiId: "8958499979@ptyes",
    payeeName: "Shashank Sharma",
    bankLabel: "Bank Of India - 0779",
    schemePrefix: "paytmmp://pay",
    badgeText: "P",
    badgeBg: "bg-sky-400 text-slate-950",
    buttonClass: "bg-gradient-to-b from-[#082f49]/90 to-[#051e30] hover:from-[#0c4a6e] hover:to-[#082f49] border-sky-400/45 text-sky-100",
    qrScreenshot: "/assets/aistudio/Screenshot_2026-11-02-15-38-16-04_49b96b5fbae0d12a18edc4a3afe0dfd9_d447a579.jpg"
  },
  {
    id: "bhim",
    appName: "BHIM / Any UPI",
    shortLabel: "BHIM",
    upiId: "8958499979@upi",
    payeeName: "Shashank Sharma",
    bankLabel: "Bank Of India - 0779",
    schemePrefix: "upi://pay",
    badgeText: "B",
    badgeBg: "bg-amber-950 text-amber-300",
    buttonClass: "bg-gradient-to-r from-amber-500 via-[#d4af37] to-amber-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 border-yellow-200 font-extrabold",
    qrScreenshot: "/assets/aistudio/Screenshot_2026-11-02-15-37-58-16_e4c1cb095b567267d5d1f8fb96ab0b79_66880518.jpg"
  }
];
const PRESET_AMOUNTS = [11, 21, 51, 101];
const DigitalMandirDanpatr = ({
  onOfferSuccess
}) => {
  const { tr } = useLanguage();
  const [selectedPreset, setSelectedPreset] = reactExports.useState(21);
  const [customAmount, setCustomAmount] = reactExports.useState("");
  const [activeUpiApp, setActiveUpiApp] = reactExports.useState(DANPATR_UPI_OPTIONS[1]);
  const [copiedUpiId, setCopiedUpiId] = reactExports.useState(null);
  const [showQrPanel, setShowQrPanel] = reactExports.useState(false);
  const [failedQrUrl, setFailedQrUrl] = reactExports.useState(null);
  const [statusMessage, setStatusMessage] = reactExports.useState(null);
  const activeAmount = customAmount.trim() !== "" ? Math.max(1, Number(customAmount) || 0) : selectedPreset || 21;
  const buildUpiUrl = (option, isQrCode = false) => {
    const scheme = isQrCode ? "upi://pay" : option.schemePrefix;
    const cleanPayee = encodeURIComponent(option.payeeName);
    const note = encodeURIComponent("Mandir Danpatr");
    if (option.id === "bhim" && !isQrCode) {
      return `${scheme}?pa=${option.upiId.trim()}&pn=${cleanPayee}&cu=INR&tn=${note}`;
    }
    const query = `pa=${option.upiId.trim()}&pn=${cleanPayee}&am=${activeAmount}&cu=INR&tn=${note}`;
    return `${scheme}?${query}`;
  };
  const handleCopyUpiId = async (upiIdToCopy, label) => {
    try {
      await navigator.clipboard.writeText(upiIdToCopy);
      setCopiedUpiId(upiIdToCopy);
      setStatusMessage(
        tr(
          `${label ? label + " " : ""}UPI ID (${upiIdToCopy}) कॉपी हो गई!`,
          `${label ? label + " " : ""}UPI ID (${upiIdToCopy}) copied!`
        )
      );
      window.setTimeout(() => setCopiedUpiId(null), 2800);
    } catch {
      setStatusMessage(tr(`UPI ID: ${upiIdToCopy}`, `UPI ID: ${upiIdToCopy}`));
    }
  };
  const triggerUpiPayment = (option) => {
    setActiveUpiApp(option);
    if (!activeAmount || activeAmount < 1) {
      setStatusMessage(
        tr("कृपया वैध समर्पण राशि चुनें।", "Please enter a valid offering amount.")
      );
      return;
    }
    try {
      navigator.clipboard?.writeText(option.upiId).catch(() => {
      });
      setCopiedUpiId(option.upiId);
      window.setTimeout(() => setCopiedUpiId(null), 3e3);
    } catch {
    }
    const appSpecificUpiLink = buildUpiUrl(option, false);
    if (onOfferSuccess) {
      onOfferSuccess(activeAmount);
    }
    setStatusMessage(
      tr(
        `₹${activeAmount} समर्पण हेतु ${option.appName} (${option.upiId}) खुल रहा है... (UPI ID कॉपी भी हो गई है)`,
        `Opening ${option.appName} (${option.upiId}) for ₹${activeAmount}... (UPI ID also copied)`
      )
    );
    const anchor = document.createElement("a");
    anchor.href = appSpecificUpiLink;
    anchor.rel = "noopener noreferrer";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };
  const dynamicQrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=260x260&margin=8&data=${encodeURIComponent(
    buildUpiUrl(activeUpiApp, true)
  )}`;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-2xl bg-gradient-to-r from-[#211307]/95 via-[#160d05]/95 to-[#1d1106]/95 backdrop-blur-md border border-[#d4af37]/65 px-3.5 py-3 sm:px-4 sm:py-3.5 shadow-[0_8px_28px_rgba(212,175,55,0.16)] overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-80 pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 space-y-2.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-7 h-7 rounded-lg icon-box-theme border flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "temple", className: "w-4 h-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xs sm:text-sm font-extrabold font-vedic text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-amber-300 to-yellow-400 truncate", children: tr("श्री डिजिटल दानपात्र", "Shri Digital Danpatr") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-1.5 py-0.5 rounded-md bg-amber-500/15 border border-[#d4af37]/50 text-[9px] font-bold text-amber-300 tracking-wide whitespace-nowrap shrink-0", children: tr("Shashank Sharma • BOI 0779", "Shashank Sharma • BOI 0779") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => setShowQrPanel((prev) => !prev),
            className: "inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 border border-[#d4af37]/60 text-[10px] sm:text-[11px] font-extrabold text-amber-200 transition-all cursor-pointer shrink-0",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(QrCode, { className: "w-3.5 h-3.5 text-theme-primary shrink-0", strokeWidth: 1.5 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr("QR कोड व UPI ID", "QR Code & UPI ID") }),
              showQrPanel ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-3 h-3 text-theme-primary", strokeWidth: 1.5 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-3 h-3 text-theme-primary", strokeWidth: 1.5 })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-1.5 items-center w-full", children: [
        PRESET_AMOUNTS.map((amt) => {
          const isSelected = customAmount.trim() === "" && selectedPreset === amt;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => {
                setSelectedPreset(amt);
                setCustomAmount("");
              },
              className: `col-span-2 min-w-0 w-full px-1 sm:px-2.5 py-1.5 rounded-lg font-extrabold text-xs text-center transition-all cursor-pointer border truncate ${isSelected ? "bg-gradient-to-b from-amber-400 via-[#d4af37] to-amber-600 text-slate-950 border-yellow-200 shadow-[0_0_12px_rgba(212,175,55,0.4)]" : "bg-black/50 hover:bg-amber-950/60 text-amber-200 border-[#d4af37]/35"}`,
              children: [
                "₹",
                amt
              ]
            },
            amt
          );
        }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-4 relative min-w-0 w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-2 top-1/2 -translate-y-1/2 text-amber-400 font-extrabold text-[11px] sm:text-xs pointer-events-none", children: "₹" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "number",
              min: "1",
              max: "100000",
              inputMode: "numeric",
              value: customAmount,
              onChange: (e) => {
                setCustomAmount(e.target.value);
                if (e.target.value.trim() !== "") {
                  setSelectedPreset(null);
                }
              },
              placeholder: tr("अन्य राशि", "Custom"),
              className: "w-full min-w-0 box-border pl-5 pr-1.5 py-1.5 rounded-lg bg-black/55 border border-[#d4af37]/45 focus:border-amber-400 focus:outline-none text-amber-100 placeholder-amber-400/60 text-[11px] sm:text-xs font-bold"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-1.5 w-full", children: DANPATR_UPI_OPTIONS.map((opt) => {
        const isSelectedApp = activeUpiApp.id === opt.id;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => triggerUpiPayment(opt),
            className: `min-w-0 py-1.5 px-2 rounded-lg border font-bold text-[10.5px] sm:text-[11px] flex flex-col items-center justify-center gap-0.5 shadow-xs transition-all cursor-pointer active:scale-95 ${opt.buttonClass} ${isSelectedApp ? "ring-1 ring-yellow-300" : ""}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-1 w-full", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: `w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full font-black text-[8.5px] sm:text-[9px] flex items-center justify-center shrink-0 ${opt.badgeBg}`,
                    children: opt.badgeText
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: opt.id === "bhim" ? `${opt.shortLabel} ₹${activeAmount}` : opt.shortLabel }),
                opt.id === "bhim" && /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-2.5 h-2.5 shrink-0 hidden sm:inline" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: `text-[9px] font-mono truncate max-w-full ${opt.id === "bhim" ? "text-slate-900 font-bold" : "opacity-85"}`,
                  children: opt.upiId
                }
              )
            ]
          },
          opt.id
        );
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-0.5", children: DANPATR_UPI_OPTIONS.map((opt) => {
        const isCopied = copiedUpiId === opt.upiId;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex items-center justify-between gap-1.5 px-2.5 py-1 rounded-lg bg-black/45 border border-[#d4af37]/35 text-[10px] sm:text-[11px]",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: `w-3.5 h-3.5 rounded-full font-black text-[8px] flex items-center justify-center shrink-0 ${opt.badgeBg}`,
                    children: opt.badgeText
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-amber-300/90 font-bold shrink-0", children: [
                  opt.shortLabel,
                  ":"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono font-bold text-amber-100 truncate", children: opt.upiId })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => handleCopyUpiId(opt.upiId, opt.shortLabel),
                  className: "inline-flex items-center gap-1 px-2 py-0.5 rounded bg-amber-500/20 hover:bg-amber-500/35 border border-amber-400/50 text-amber-200 font-bold text-[9.5px] cursor-pointer shrink-0 transition-all",
                  title: `${opt.upiId} कॉपी करें`,
                  children: isCopied ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-3 h-3 text-emerald-400" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-300", children: tr("कॉपी हुआ", "Copied") })
                  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "w-3 h-3 text-amber-300" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr("कॉपी", "Copy") })
                  ] })
                }
              )
            ]
          },
          `copy-${opt.id}`
        );
      }) }),
      showQrPanel && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 p-3 rounded-xl bg-black/70 border border-[#d4af37]/60 space-y-3 animate-fadeIn", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-extrabold text-amber-200 inline-flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "temple", className: "w-3.5 h-3.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr(
                `${activeUpiApp.appName} QR कोड स्कैन करें (₹${activeAmount})`,
                `Scan ${activeUpiApp.appName} QR Code (₹${activeAmount})`
              ) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-amber-300/80", children: [
              activeUpiApp.payeeName,
              " • ",
              activeUpiApp.bankLabel,
              " • UPI:",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("b", { className: "font-mono text-amber-100", children: activeUpiApp.upiId })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap items-center gap-1", children: DANPATR_UPI_OPTIONS.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setActiveUpiApp(opt),
              className: `px-2 py-1 rounded-lg text-[10px] font-bold border cursor-pointer transition-all ${activeUpiApp.id === opt.id ? "bg-amber-400 text-slate-950 border-yellow-200 font-extrabold" : "bg-slate-900/90 text-amber-200 border-amber-500/40 hover:bg-slate-800"}`,
              children: opt.shortLabel
            },
            `qr-tab-${opt.id}`
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3 items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center p-3 rounded-xl bg-white text-slate-950 shadow-md", children: [
            failedQrUrl !== dynamicQrUrl ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: dynamicQrUrl,
                alt: `${activeUpiApp.appName} QR Code`,
                width: 176,
                height: 176,
                className: "w-44 h-44 object-contain",
                loading: "lazy",
                decoding: "async",
                onLoad: () => setFailedQrUrl(null),
                onError: () => setFailedQrUrl(dynamicQrUrl)
              },
              dynamicQrUrl
            ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-44 h-44 rounded-lg border-2 border-dashed border-amber-500 bg-amber-50 flex flex-col items-center justify-center p-3 text-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(QrCode, { className: "w-10 h-10 text-amber-700", strokeWidth: 1.5 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-extrabold text-slate-900", children: tr("UPI ID से सीधे भुगतान करें", "Pay Directly via UPI ID") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-mono font-bold text-amber-900 break-all", children: activeUpiApp.upiId })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1.5 text-[11px] font-extrabold text-slate-900", children: [
              activeUpiApp.payeeName,
              " (₹",
              activeAmount,
              ")"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-mono font-bold text-slate-700", children: activeUpiApp.upiId })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-between p-3.5 rounded-xl bg-gradient-to-b from-slate-900 via-slate-950 to-black border border-amber-500/45 text-center space-y-2.5 h-full", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 text-[10px] font-extrabold", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "check-circle", tone: "auspicious", className: "w-3.5 h-3.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "सत्यापित आधिकारिक बैंक खाता" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs sm:text-sm font-black text-amber-200", children: activeUpiApp.payeeName }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] font-bold text-amber-300/90 inline-flex items-center justify-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "building", className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: activeUpiApp.bankLabel })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-2.5 py-1 rounded-lg bg-black/70 border border-amber-500/40 font-mono text-xs font-extrabold text-amber-100 select-all", children: activeUpiApp.upiId })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-center gap-1.5 w-full pt-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => handleCopyUpiId(activeUpiApp.upiId, activeUpiApp.shortLabel),
                  className: "flex-1 inline-flex items-center justify-center gap-1 px-2.5 py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 border border-amber-400/50 text-amber-200 font-bold text-[10.5px] cursor-pointer transition-all",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "w-3 h-3 text-theme-primary", strokeWidth: 1.5 }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr("UPI कॉपी करें", "Copy UPI") })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => triggerUpiPayment(activeUpiApp),
                  className: "flex-1 inline-flex items-center justify-center gap-1 px-2.5 py-1.5 rounded-lg bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-extrabold text-[10.5px] cursor-pointer transition-all",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-3 h-3", strokeWidth: 1.5 }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr(`${activeUpiApp.shortLabel} खोलें`, `Open ${activeUpiApp.shortLabel}`) })
                  ]
                }
              )
            ] })
          ] })
        ] })
      ] }),
      statusMessage && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-2.5 py-1.5 rounded-lg bg-amber-950/90 border border-[#d4af37]/60 text-amber-100 text-[10.5px] font-medium flex items-center justify-between gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: statusMessage }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setStatusMessage(null),
            "aria-label": "बंद करें",
            className: "text-amber-300 hover:text-white cursor-pointer shrink-0 p-0.5",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3.5 h-3.5", strokeWidth: 1.5 })
          }
        )
      ] })
    ] })
  ] });
};
const GOLDEN_SPARKLE_SPECS = [
  { left: "16%", bottom: "18%", size: 4, dur: "5.4s", delay: "0s", drift: "10px" },
  { left: "24%", bottom: "28%", size: 3, dur: "6.2s", delay: "1.1s", drift: "-12px" },
  { left: "31%", bottom: "14%", size: 5, dur: "7.1s", delay: "0.5s", drift: "14px" },
  { left: "38%", bottom: "32%", size: 3, dur: "5.8s", delay: "2.2s", drift: "-8px" },
  { left: "44%", bottom: "20%", size: 4, dur: "6.7s", delay: "1.6s", drift: "9px" },
  { left: "50%", bottom: "25%", size: 5, dur: "5.2s", delay: "2.9s", drift: "-10px" },
  { left: "56%", bottom: "16%", size: 3, dur: "6.9s", delay: "0.8s", drift: "12px" },
  { left: "63%", bottom: "30%", size: 4, dur: "5.6s", delay: "2.1s", drift: "-14px" },
  { left: "70%", bottom: "19%", size: 5, dur: "7.3s", delay: "1.4s", drift: "8px" },
  { left: "77%", bottom: "26%", size: 3, dur: "6.1s", delay: "0.3s", drift: "-9px" },
  { left: "84%", bottom: "15%", size: 4, dur: "5.9s", delay: "2.6s", drift: "11px" },
  { left: "47%", bottom: "42%", size: 3, dur: "6.5s", delay: "3.4s", drift: "-6px" }
];
const CarvedGoldenPillar3D = ({
  side,
  isEvening
}) => {
  const metalId = `pillar3dMetal-${side}`;
  const isLeft = side === "left";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "relative w-8 sm:w-14 md:w-16 shrink-0 self-stretch flex flex-col items-center select-none pointer-events-none z-20",
      "aria-hidden": "true",
      style: {
        filter: isLeft ? "drop-shadow(5px 8px 12px rgba(0,0,0,0.86))" : "drop-shadow(-5px 8px 12px rgba(0,0,0,0.86))"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 80 86", className: "w-full h-auto shrink-0 block", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: metalId, x1: "0", y1: "0", x2: "1", y2: "0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#2a1604" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "16%", stopColor: "#854d0e" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "36%", stopColor: "#eab308" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "50%", stopColor: "#fef9c3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "68%", stopColor: "#ca8a04" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "86%", stopColor: "#713f12" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#1f0f03" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M2,2 L78,2 L72,18 L8,18 Z", fill: `url(#${metalId})`, stroke: "#fef08a", strokeWidth: "1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "6", y: "18", width: "68", height: "8", rx: "2", fill: "#451a03", stroke: "#f59e0b", strokeWidth: "0.9" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M8,26 Q40,40 72,26 L66,44 Q40,52 14,44 Z", fill: `url(#${metalId})`, stroke: "#fde047", strokeWidth: "1" }),
          [18, 40, 62].map((cx) => /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: `M${cx - 4.5},44 Q${cx},56 ${cx + 4.5},44 Z`, fill: "#eab308", stroke: "#fef9c3", strokeWidth: "0.6" }, cx)),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ellipse", { cx: "40", cy: "64", rx: "27", ry: "11", fill: `url(#${metalId})`, stroke: "#fde047", strokeWidth: "1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "16", y: "74", width: "48", height: "9", rx: "3", fill: "#451a03", stroke: "#fbbf24", strokeWidth: "0.9" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "relative flex-1 w-[64%] flex flex-col justify-evenly items-center overflow-hidden border-x border-amber-200/30",
            style: {
              background: "linear-gradient(90deg, #2a1604 0%, #7c4a0d 18%, #d49b27 36%, #fef3a1 50%, #d49b27 66%, #6b3e09 86%, #211003 100%)",
              boxShadow: isEvening ? "inset 0 -24px 28px rgba(251,146,60,0.22)" : "inset 0 -24px 28px rgba(253,224,71,0.14)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-y-0 left-[22%] w-[1.5px] bg-amber-950/60" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-y-0 left-[49%] w-[2px] bg-yellow-100/55" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-y-0 right-[22%] w-[1.5px] bg-amber-950/60" }),
              [0, 1].map((idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "relative z-10 w-[124%] h-3 sm:h-4 rounded-[3px] border border-yellow-200/80 shadow-[0_3px_6px_rgba(0,0,0,0.7)] flex items-center justify-center gap-1",
                  style: {
                    background: "linear-gradient(90deg, #451a03 0%, #b45309 25%, #fef08a 50%, #b45309 75%, #451a03 100%)"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-yellow-100" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: `w-1.5 h-1.5 sm:w-2 sm:h-2 rotate-45 border border-yellow-200 ${idx === 0 ? "bg-red-600" : "bg-amber-300"}`
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-yellow-100" })
                  ]
                },
                idx
              ))
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 80 60", className: "w-full h-auto shrink-0 block", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12,16 Q40,2 68,16 L74,38 L6,38 Z", fill: `url(#${metalId})`, stroke: "#fef08a", strokeWidth: "1" }),
          [18, 32, 48, 62].map((px) => /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: `M${px - 5.5},36 Q${px},18 ${px + 5.5},36 Z`, fill: "#92400e", stroke: "#fde047", strokeWidth: "0.8" }, px)),
          /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "4", y: "38", width: "72", height: "10", rx: "2", fill: `url(#${metalId})`, stroke: "#fde047", strokeWidth: "1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "2", y: "48", width: "76", height: "10", rx: "2", fill: "#3a1c06", stroke: "#d4af37", strokeWidth: "1" })
        ] })
      ]
    }
  );
};
const DecoratedBrassAartiThali = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-14 h-14 sm:w-20 sm:h-20 flex items-center justify-center pointer-events-none select-none", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-4 rounded-full bg-amber-400/55 blur-lg animate-pulse" }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 96 96", className: "w-full h-full drop-shadow-[0_0_20px_rgba(251,191,36,0.95)]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("radialGradient", { id: "aartiPlate3D", cx: "42%", cy: "38%", r: "58%", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#fef9c3" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "42%", stopColor: "#fbbf24" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "78%", stopColor: "#b45309" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#451a03" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "48", cy: "52", r: "35", fill: "url(#aartiPlate3D)", stroke: "#fef08a", strokeWidth: "2.4" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "48", cy: "52", r: "28", fill: "none", stroke: "#78350f", strokeWidth: "1.4", strokeDasharray: "4 2.5" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "31", cy: "63", r: "4.5", fill: "#e11d48", stroke: "#fda4af", strokeWidth: "0.8" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "65", cy: "63", r: "4.5", fill: "#f59e0b", stroke: "#fef08a", strokeWidth: "0.8" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "39", cy: "70", r: "3.6", fill: "#dc2626" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "57", cy: "70", r: "3.6", fill: "#fbbf24" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ellipse", { cx: "48", cy: "52", rx: "11", ry: "6", fill: "#78350f", stroke: "#fef08a", strokeWidth: "1.2" }),
    [
      { x: 48, y: 28, s: 1.25 },
      { x: 29, y: 39, s: 0.95 },
      { x: 67, y: 39, s: 0.95 },
      { x: 35, y: 52, s: 0.9 },
      { x: 61, y: 52, s: 0.9 }
    ].map((f, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { transform: `translate(${f.x}, ${f.y}) scale(${f.s})`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0,-14 C5,-7 6,1 0,4 C-6,1 -5,-7 0,-14 Z", fill: "#f97316", className: "animate-flame-flicker" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0,-10 C2.6,-4 3,0 0,2.5 C-3,0 -2.6,-4 0,-10 Z", fill: "#fef08a" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "0", cy: "-1.5", r: "1.5", fill: "#ffffff" })
    ] }, idx))
  ] })
] });
const BrassDeepdaan3D = ({
  isLit,
  isEvening,
  side
}) => {
  const gradId = `deepdaanBrass-${side}`;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex flex-col items-center select-none", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-9 sm:h-11 flex items-end justify-center", children: isLit ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: `absolute -top-3 rounded-full blur-lg transition-all duration-500 animate-pulse ${isEvening ? "w-12 h-12 sm:w-14 sm:h-14 bg-amber-400/75" : "w-10 h-10 sm:w-12 sm:h-12 bg-amber-400/60"}`
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "svg",
        {
          viewBox: "0 0 36 48",
          className: "w-6 h-8 sm:w-7 sm:h-10 animate-flame-flicker drop-shadow-[0_0_12px_rgba(245,158,11,0.95)] -mb-0.5",
          "aria-hidden": "true",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "path",
              {
                d: "M18,2 C26,15 31,26 28,37 C26,43 22,46 18,46 C14,46 10,43 8,37 C5,26 10,15 18,2 Z",
                fill: "#ea580c"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "path",
              {
                d: "M18,9 C23,19 26,28 24,36 C22.5,41 20,44 18,44 C16,44 13.5,41 12,36 C10,28 13,19 18,9 Z",
                fill: "#fbbf24"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "path",
              {
                d: "M18,19 C20.5,25 22,31 20.8,37 C20,40.5 19,42 18,42 C17,42 16,40.5 15.2,37 C14,31 15.5,25 18,19 Z",
                fill: "#fef9c3"
              }
            )
          ]
        }
      )
    ] }) : (
      /* Unlit Cotton Wick (Batti) waiting to be lit */
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "w-1.5 h-2.5 rounded-t-full bg-gradient-to-t from-amber-800/80 via-amber-200/80 to-stone-100/90 border border-amber-200/40 mb-0.5 opacity-85",
          "aria-hidden": "true"
        }
      )
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "svg",
      {
        viewBox: "0 0 76 54",
        className: "w-12 sm:w-16 h-9 sm:h-11 drop-shadow-[0_5px_9px_rgba(0,0,0,0.9)]",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: gradId, x1: "0", y1: "0", x2: "1", y2: "0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#451a03" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "28%", stopColor: "#d97706" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "50%", stopColor: "#fef08a" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "78%", stopColor: "#b45309" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#3a1603" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M6,6 Q38,14 70,6 L58,20 Q38,25 18,20 Z", fill: `url(#${gradId})`, stroke: "#fef08a", strokeWidth: "1.2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ellipse", { cx: "38", cy: "7", rx: "28", ry: "4", fill: "#78350f", stroke: "#fbbf24", strokeWidth: "0.9" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M29,21 L47,21 L44,34 L32,34 Z", fill: `url(#${gradId})`, stroke: "#fde047", strokeWidth: "0.8" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ellipse", { cx: "38", cy: "34", rx: "11", ry: "4", fill: `url(#${gradId})`, stroke: "#fef08a", strokeWidth: "0.8" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M26,36 L50,36 L60,51 L16,51 Z", fill: `url(#${gradId})`, stroke: "#fde047", strokeWidth: "1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ellipse", { cx: "38", cy: "51", rx: "23", ry: "3", fill: "#451a03", stroke: "#d4af37", strokeWidth: "0.8" })
        ]
      }
    )
  ] });
};
const HangingBrassBell3D = ({ size = "lg", isRinging, ringTick = 0, gradId }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  "svg",
  {
    viewBox: "0 0 64 74",
    className: `drop-shadow-[0_8px_14px_rgba(0,0,0,0.85)] transition-transform ${size === "lg" ? "w-10 h-12 sm:w-13 sm:h-15" : "w-6 h-8 sm:w-8 sm:h-10"} ${isRinging ? "animate-bell-swing" : ""}`,
    style: { transformOrigin: "50% 3%" },
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: gradId, x1: "0", y1: "0", x2: "1", y2: "0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#451a03" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "28%", stopColor: "#d97706" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "52%", stopColor: "#fef9c3" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "78%", stopColor: "#b45309" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#381503" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "32", y1: "0", x2: "32", y2: "18", stroke: "#fde047", strokeWidth: "2.8", strokeDasharray: "4 2" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "32", cy: "18", r: "4.2", fill: `url(#${gradId})`, stroke: "#fef9c3", strokeWidth: "1" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "path",
        {
          d: "M32,20 C19,20 16,33 13,46 L6,57 L58,57 L51,46 C48,33 45,20 32,20 Z",
          fill: `url(#${gradId})`,
          stroke: "#fef9c3",
          strokeWidth: "1.3"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M16,38 Q32,42 48,38", fill: "none", stroke: "#78350f", strokeWidth: "1.5", opacity: "0.7" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "5", y: "54", width: "54", height: "5", rx: "2.5", fill: `url(#${gradId})`, stroke: "#fef08a", strokeWidth: "0.9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "32", cy: "63", r: "4.8", fill: "#fef08a", stroke: "#78350f", strokeWidth: "1.2" })
    ]
  },
  isRinging ? `bell-ring-${ringTick}` : "bell-idle"
);
const DigitalMandirSanctum = ({
  selectedDeity,
  curtainTheme,
  praharInfo,
  isSanctumImageBroken,
  onImageBroken,
  onSwipePrev,
  onSwipeNext,
  ambienceMode,
  onChangeAmbience,
  isPatOpen,
  isSwappingDeity = false,
  onTogglePat,
  isSpecialDarshanActive = false,
  specialDarshanCountdown = "05:00",
  onOpenSpecialDarshan,
  onCloseSpecialDarshan,
  isBellRinging,
  bellRingTick = 0,
  bellRungCount,
  onRingBell,
  isAartiSpinning,
  isDiyaLit,
  isDhoopActive,
  flowersOfferedCount,
  onToggleDiya,
  onToggleDhoop,
  onOfferFlowers,
  canvasRef,
  tr
}) => {
  const isShayanClosed = !isPatOpen && !isSwappingDeity && praharInfo.phase === "shayan";
  const isShayanAmbience = praharInfo.phase === "shayan" && !isSpecialDarshanActive;
  const isMorning = ambienceMode === "morning" && !isShayanAmbience;
  const isEvening = ambienceMode === "evening" || isShayanAmbience;
  const isEffectiveDiyaLit = isDiyaLit || !isPatOpen;
  const [useFallbackSrc, setUseFallbackSrc] = reactExports.useState(false);
  const swipeStartRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    setUseFallbackSrc(false);
  }, [selectedDeity.id]);
  const resolvedImgSrc = useFallbackSrc || !selectedDeity.primaryImage ? selectedDeity.fallbackImage : selectedDeity.primaryImage;
  const handleStageTouchStart = (e) => {
    if (e.touches.length !== 1) return;
    swipeStartRef.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY
    };
  };
  const handleStageTouchEnd = (e) => {
    const start = swipeStartRef.current;
    swipeStartRef.current = null;
    if (!start || e.changedTouches.length === 0) return;
    const dx = e.changedTouches[0].clientX - start.x;
    const dy = e.changedTouches[0].clientY - start.y;
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy) * 1.2) {
      if (dx < 0) {
        onSwipeNext?.();
      } else {
        onSwipePrev?.();
      }
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: `relative my-2.5 rounded-2xl sm:rounded-[26px] border transition-all duration-700 overflow-hidden shadow-[0_24px_70px_rgba(0,0,0,0.95)] ${isShayanAmbience ? "bg-gradient-to-b from-[#08091b] via-[#050411] to-[#07030a] border-indigo-400/45" : isMorning ? "bg-gradient-to-b from-[#4d2508] via-[#2e1505] to-[#1a0b03] border-[#fbbf24]/75" : "bg-gradient-to-b from-[#0b0402] via-[#060201] to-[#080302] border-[#d4af37]/60"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `relative z-30 px-2 sm:px-3 pt-2 pb-1 border-b transition-colors duration-700 ${isShayanAmbience ? "bg-gradient-to-b from-indigo-950/50 via-black/45 to-transparent border-indigo-400/25" : isMorning ? "bg-gradient-to-b from-amber-500/25 via-amber-800/15 to-transparent border-amber-400/35" : "bg-gradient-to-b from-amber-950/50 via-black/50 to-transparent border-[#d4af37]/25"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-1.5 mb-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    role: "group",
                    "aria-label": tr("मंदिर दर्शन समय थीम", "Mandir Ambience Theme"),
                    className: "inline-flex items-center p-0.5 rounded-lg sm:rounded-xl bg-black/65 border border-[#d4af37]/45 shadow-inner min-w-0",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "button",
                        {
                          type: "button",
                          onClick: () => onChangeAmbience("morning"),
                          className: `px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-[7px] sm:rounded-[10px] text-[10px] sm:text-[11px] font-bold transition-all cursor-pointer flex items-center gap-1 whitespace-nowrap shrink-0 ${isMorning ? "bg-gradient-to-r from-amber-300 via-yellow-300 to-orange-300 text-slate-950 shadow-sm font-extrabold" : "text-amber-200/80 hover:text-yellow-200"}`,
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sm:hidden", children: tr("प्रातः दर्शन", "Morning") }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: tr("प्रातः दिव्य दर्शन", "Morning Darshan") })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "button",
                        {
                          type: "button",
                          onClick: () => onChangeAmbience("evening"),
                          className: `px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-[7px] sm:rounded-[10px] text-[10px] sm:text-[11px] font-bold transition-all cursor-pointer flex items-center gap-1 whitespace-nowrap shrink-0 ${isEvening ? "bg-gradient-to-r from-orange-600 via-amber-600 to-red-700 text-yellow-100 shadow-sm font-extrabold" : "text-amber-200/80 hover:text-yellow-200"}`,
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sm:hidden", children: tr("संध्या आरती", "Evening") }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: tr("संध्या महाआरती", "Evening Aarti") })
                          ]
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden md:flex items-center gap-1.5 flex-wrap justify-center", children: [
                  isSpecialDarshanActive && isPatOpen ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500/25 via-yellow-400/20 to-orange-500/25 border border-yellow-300/75 text-yellow-100 text-[10.5px] font-extrabold whitespace-nowrap shadow-[0_0_16px_rgba(251,191,36,0.3)]", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3 h-3 text-yellow-300 shrink-0 animate-pulse" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "विशेष अनुरोध पर खुले पट" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono tabular-nums text-amber-200", children: [
                      "(",
                      specialDarshanCountdown,
                      ")"
                    ] })
                  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      title: `${praharInfo.badgeHi} (${praharInfo.timeRangeHi})`,
                      className: `inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[10.5px] font-extrabold whitespace-nowrap shadow-xs ${praharInfo.phase === "morning" ? "bg-gradient-to-r from-amber-900/90 to-yellow-900/80 border-yellow-300/70 text-yellow-100" : praharInfo.phase === "vishram" ? "bg-rose-950/90 border-amber-400/60 text-amber-200" : praharInfo.phase === "shayan" ? "bg-indigo-950/90 border-indigo-400/55 text-indigo-100" : "bg-orange-950/85 border-orange-400/65 text-yellow-200"}`,
                      children: [
                        praharInfo.phase === "shayan" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "w-3 h-3 shrink-0 text-indigo-300" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3 shrink-0 text-amber-300" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: praharInfo.badgeHi }),
                        praharInfo.istClockLabel && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[9.5px] opacity-85 font-mono tabular-nums", children: [
                          "• ",
                          praharInfo.istClockLabel,
                          " IST"
                        ] })
                      ]
                    }
                  ),
                  praharInfo.specialHighlightHi && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-400 text-slate-950 border border-yellow-100 text-[10.5px] font-extrabold shadow-[0_0_18px_rgba(251,191,36,0.55)] animate-pulse whitespace-nowrap", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-red-600" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: praharInfo.specialHighlightHi })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      if (!isPatOpen && !praharInfo.isScheduledOpen && onOpenSpecialDarshan) {
                        onOpenSpecialDarshan();
                      } else if (isPatOpen && isSpecialDarshanActive && onCloseSpecialDarshan) {
                        onCloseSpecialDarshan();
                      } else {
                        onTogglePat();
                      }
                    },
                    className: `px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl border text-[10px] sm:text-[11px] font-bold transition-all cursor-pointer flex items-center gap-1 whitespace-nowrap shrink-0 shadow-md ${isPatOpen ? "bg-rose-950/85 hover:bg-rose-900 border-amber-400/55 text-amber-100" : "bg-gradient-to-r from-amber-300 via-yellow-300 to-amber-400 hover:brightness-105 border-yellow-100 text-slate-950 font-extrabold"}`,
                    children: isPatOpen ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-300 shrink-0" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: isSpecialDarshanActive ? tr("पट पुनः बंद करें", "Close Pat") : tr("पट बंद", "Close") })
                    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr("पट खोलें", "Open") })
                    ] })
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:hidden flex flex-wrap items-center justify-center gap-1.5 pb-1.5 text-[10px] font-bold", children: [
                isSpecialDarshanActive && isPatOpen ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-500/20 border border-yellow-300/70 text-yellow-100 font-extrabold", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-2.5 h-2.5 text-yellow-300 animate-pulse shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "विशेष अनुरोध पर खुले पट" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono tabular-nums text-amber-200", children: [
                    "(",
                    specialDarshanCountdown,
                    ")"
                  ] })
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "span",
                  {
                    className: `inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full border ${praharInfo.phase === "morning" ? "bg-amber-900/70 border-yellow-300/60 text-yellow-100" : praharInfo.phase === "vishram" ? "bg-rose-950/85 border-amber-400/55 text-amber-200" : praharInfo.phase === "shayan" ? "bg-indigo-950/85 border-indigo-400/55 text-indigo-100" : "bg-orange-950/80 border-orange-400/55 text-yellow-200"}`,
                    children: [
                      praharInfo.phase === "shayan" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "w-2.5 h-2.5 text-indigo-300 shrink-0" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-2.5 h-2.5 text-amber-300 shrink-0" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: praharInfo.badgeHi }),
                      praharInfo.istClockLabel && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "opacity-85 font-mono tabular-nums", children: [
                        "• ",
                        praharInfo.istClockLabel
                      ] })
                    ]
                  }
                ),
                praharInfo.specialHighlightHi && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-400 text-slate-950 font-extrabold shadow animate-pulse", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-red-600" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: praharInfo.specialHighlightHi })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full max-w-xl mx-auto flex flex-col items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "svg",
                {
                  viewBox: "0 0 360 56",
                  className: "w-full h-12 sm:h-16 overflow-visible drop-shadow-[0_6px_14px_rgba(0,0,0,0.85)]",
                  "aria-hidden": "true",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("defs", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "shikhar3DGold", x1: "0", y1: "0", x2: "1", y2: "0", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#451a03" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "20%", stopColor: "#d97706" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "50%", stopColor: "#fef9c3" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "80%", stopColor: "#d97706" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#451a03" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "dhwaja3DGrad", x1: "0", y1: "0", x2: "1", y2: "1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#ff7b00" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "55%", stopColor: "#ea580c" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#b91c1c" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "180", y1: "1", x2: "180", y2: "23", stroke: "#fef08a", strokeWidth: "2.2" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "180", cy: "2", r: "2.3", fill: "#fef08a" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { className: "animate-dhwaja-wave", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "path",
                        {
                          d: "M181,3 L228,9 L217,13.5 L226,18.5 L181,17 Z",
                          fill: "url(#dhwaja3DGrad)",
                          stroke: "#fde047",
                          strokeWidth: "0.9"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "195", y: "13.5", fill: "#fef9c3", fontSize: "9.5", fontWeight: "bold", textAnchor: "middle", children: "ॐ" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M174,23 Q180,15 186,23 L189,29 Q180,32 171,29 Z", fill: "url(#shikhar3DGold)", stroke: "#fef9c3", strokeWidth: "0.8" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M116,41 Q148,26 180,26 Q212,26 244,41 Z", fill: "#6b220a", stroke: "url(#shikhar3DGold)", strokeWidth: "1.8" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M44,48 Q112,33 180,33 Q248,33 316,48 Z", fill: "#471406", stroke: "url(#shikhar3DGold)", strokeWidth: "2" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "6", y: "47", width: "348", height: "8", rx: "3.5", fill: "url(#shikhar3DGold)", stroke: "#fef08a", strokeWidth: "0.8" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "text",
                      {
                        x: "180",
                        y: "44.5",
                        fill: "#fef08a",
                        fontSize: "9.5",
                        fontWeight: "800",
                        textAnchor: "middle",
                        letterSpacing: "1.2",
                        children: "॥ श्री दिव्य गर्भगृह दर्शन ॥"
                      }
                    )
                  ]
                }
              ) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative px-1 sm:px-3 pb-2.5 sm:pb-4 flex flex-col items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 pointer-events-none transition-all duration-700",
              style: {
                background: isMorning ? "radial-gradient(ellipse at 50% 24%, rgba(254, 240, 138, 0.44) 0%, rgba(245, 158, 11, 0.24) 42%, rgba(28, 11, 3, 0.85) 100%)" : "radial-gradient(ellipse at 50% 76%, rgba(245, 158, 11, 0.42) 0%, rgba(180, 83, 9, 0.16) 38%, rgba(3, 1, 0, 0.96) 86%)",
                boxShadow: "inset 0 24px 64px rgba(0,0,0,0.92), inset 0 -24px 48px rgba(0,0,0,0.85)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 pointer-events-none z-20 overflow-hidden", "aria-hidden": "true", children: GOLDEN_SPARKLE_SPECS.map((sp, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "absolute rounded-full bg-yellow-200 animate-golden-sparkle",
              style: {
                left: sp.left,
                bottom: sp.bottom,
                width: `${sp.size}px`,
                height: `${sp.size}px`,
                boxShadow: isEvening ? "0 0 10px 2px rgba(253, 224, 71, 0.95)" : "0 0 7px 1px rgba(251, 191, 36, 0.7)",
                "--sparkle-dur": sp.dur,
                "--sparkle-delay": sp.delay,
                "--sparkle-drift": sp.drift
              }
            },
            `sparkle-${idx}`
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "canvas",
            {
              ref: canvasRef,
              className: "absolute inset-0 w-full h-full pointer-events-none z-40"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 w-full max-w-3xl flex flex-col items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full flex items-stretch justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CarvedGoldenPillar3D, { side: "left", isEvening }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1 min-w-0 flex flex-col items-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-[calc(100%+10px)] sm:w-[calc(100%+18px)] z-30 -mx-1.5 sm:-mx-2.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "svg",
                    {
                      viewBox: "0 0 460 112",
                      className: "w-full h-auto drop-shadow-[0_10px_18px_rgba(0,0,0,0.88)] overflow-visible",
                      "aria-hidden": "true",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("defs", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "arch3DGold", x1: "0", y1: "0", x2: "1", y2: "0", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#451a03" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "22%", stopColor: "#eab308" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "50%", stopColor: "#fef9c3" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "78%", stopColor: "#eab308" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#451a03" })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "archShadowRecess", x1: "0", y1: "0", x2: "0", y2: "1", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#140702" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#3b1806", stopOpacity: "0.15" })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "path",
                          {
                            d: "M4,110 L4,18 L456,18 L456,110 L432,110 L432,56 Q390,32 345,44 Q295,22 230,10 Q165,22 115,44 Q70,32 28,56 L28,110 Z",
                            fill: "url(#archShadowRecess)"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "path",
                          {
                            d: "M0,108 L0,34 Q32,10 82,22 Q134,4 184,16 Q230,-4 276,16 Q326,4 378,22 Q428,10 460,34 L460,108 L438,108 L438,46 Q398,24 356,37 Q308,18 264,29 Q230,8 196,29 Q152,18 104,37 Q62,24 22,46 L22,108 Z",
                            fill: "url(#arch3DGold)",
                            stroke: "#fef9c3",
                            strokeWidth: "1.4"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "path",
                          {
                            d: "M22,48 Q62,27 104,40 Q152,21 196,32 Q230,11 264,32 Q308,21 356,40 Q398,27 438,48",
                            fill: "none",
                            stroke: "#78350f",
                            strokeWidth: "2.4"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "230", cy: "12", r: "7", fill: "#dc2626", stroke: "#fef08a", strokeWidth: "1.8" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "path",
                          {
                            d: "M18,43 Q124,82 230,42 Q336,82 442,43",
                            fill: "none",
                            stroke: "#14532d",
                            strokeWidth: "5.5",
                            strokeLinecap: "round"
                          }
                        ),
                        [38, 72, 110, 148, 186, 274, 312, 350, 388, 422].map((lx, idx) => {
                          const t = (lx - 18) / 424;
                          const sag = Math.sin(t * Math.PI * 2) * 18 + 44;
                          return /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "path",
                            {
                              d: `M${lx},${sag} Q${lx - 4.5},${sag + 15} ${lx},${sag + 22} Q${lx + 4.5},${sag + 15} ${lx},${sag} Z`,
                              fill: "#16a34a",
                              stroke: "#4ade80",
                              strokeWidth: "0.6"
                            },
                            `arch-leaf-${idx}`
                          );
                        }),
                        [26, 56, 88, 122, 156, 192, 268, 304, 338, 372, 404, 434].map((fx, idx) => {
                          const curveY = fx < 230 ? 42 + Math.sin((fx - 18) / 212 * Math.PI) * 21 : 42 + Math.sin((fx - 230) / 212 * Math.PI) * 21;
                          const isRose = idx % 3 === 1;
                          return /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "circle",
                              {
                                cx: fx,
                                cy: curveY,
                                r: isRose ? 7.2 : 8.4,
                                fill: isRose ? "#be123c" : idx % 2 === 0 ? "#f59e0b" : "#fb923c",
                                stroke: isRose ? "#fda4af" : "#fef08a",
                                strokeWidth: "1.2"
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: fx, cy: curveY, r: "2.5", fill: isRose ? "#fecdd3" : "#fef9c3" })
                          ] }, `arch-fl-${idx}`);
                        })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: onRingBell,
                      "aria-label": tr("बायां मंदिर घंटी बजाएं", "Ring Left Temple Bell"),
                      className: "absolute left-[9%] top-[32%] z-30 min-w-[40px] min-h-[40px] flex items-center justify-center cursor-pointer hover:scale-110 active:scale-95 transition-transform focus:outline-none",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        HangingBrassBell3D,
                        {
                          size: "sm",
                          isRinging: isBellRinging,
                          ringTick: bellRingTick,
                          gradId: "bellBrassLeft"
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: onRingBell,
                      "aria-label": tr("दायां मंदिर घंटी बजाएं", "Ring Right Temple Bell"),
                      className: "absolute right-[9%] top-[32%] z-30 min-w-[40px] min-h-[40px] flex items-center justify-center cursor-pointer hover:scale-110 active:scale-95 transition-transform focus:outline-none",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        HangingBrassBell3D,
                        {
                          size: "sm",
                          isRinging: isBellRinging,
                          ringTick: bellRingTick,
                          gradId: "bellBrassRight"
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-1/2 -translate-x-1/2 top-2.5 sm:top-4 z-30 flex flex-col items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: onRingBell,
                      "aria-label": tr("मंदिर की पीतल घंटी बजाएं", "Ring Hanging Brass Temple Bell"),
                      title: tr("घंटी पर क्लिक करें — मधुर नाद व झूलती घंटी", "Click Bell to Swing & Chime"),
                      className: "group relative flex flex-col items-center cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300 rounded-full p-0.5",
                      children: [
                        isBellRinging && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "span",
                            {
                              className: "absolute top-6 w-12 h-12 rounded-full border-2 border-yellow-300 animate-chime-wave pointer-events-none"
                            },
                            `wave1-${bellRingTick}`
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "span",
                            {
                              className: "absolute top-6 w-12 h-12 rounded-full border border-amber-400 animate-chime-wave pointer-events-none",
                              style: { animationDelay: "0.22s" }
                            },
                            `wave2-${bellRingTick}`
                          )
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          HangingBrassBell3D,
                          {
                            size: "lg",
                            isRinging: isBellRinging,
                            ringTick: bellRingTick,
                            gradId: "bellBrassCenter"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "-mt-1 px-2.5 py-0.5 rounded-full bg-black/80 border border-[#d4af37]/75 text-[9.5px] font-extrabold text-yellow-200 shadow-lg whitespace-nowrap flex items-center gap-1", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "w-2.5 h-2.5 text-amber-300" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr("घंटी बजाएं", "Ring Bell") }),
                          bellRungCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-amber-300 font-mono", children: [
                            "(",
                            bellRungCount,
                            ")"
                          ] })
                        ] })
                      ]
                    }
                  ) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative w-full flex-1 flex flex-col items-center justify-end mt-2 sm:mt-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "relative w-full h-[272px] sm:h-[365px] flex items-center justify-center",
                    style: { touchAction: "pan-y" },
                    onTouchStart: handleStageTouchStart,
                    onTouchEnd: handleStageTouchEnd,
                    children: [
                      onSwipePrev && /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          type: "button",
                          onClick: onSwipePrev,
                          "aria-label": tr("पिछले देव दर्शन", "Previous Deity Darshan"),
                          title: tr("बाएं स्वाइप करें / पिछले देव", "Previous Deity"),
                          className: "absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-[28] w-7 h-9 sm:w-8 sm:h-11 rounded-xl bg-black/55 hover:bg-amber-950/85 border border-amber-400/50 hover:border-yellow-300 text-yellow-200 flex items-center justify-center shadow-lg backdrop-blur-xs transition-all cursor-pointer hover:scale-105 active:scale-95",
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-4 h-4 sm:w-5 sm:h-5" })
                        }
                      ),
                      onSwipeNext && /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          type: "button",
                          onClick: onSwipeNext,
                          "aria-label": tr("अगले देव दर्शन", "Next Deity Darshan"),
                          title: tr("दाएं स्वाइप करें / अगले देव", "Next Deity"),
                          className: "absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-[28] w-7 h-9 sm:w-8 sm:h-11 rounded-xl bg-black/55 hover:bg-amber-950/85 border border-amber-400/50 hover:border-yellow-300 text-yellow-200 flex items-center justify-center shadow-lg backdrop-blur-xs transition-all cursor-pointer hover:scale-105 active:scale-95",
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4 sm:w-5 sm:h-5" })
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full h-full flex items-center justify-center overflow-hidden", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "div",
                          {
                            className: "absolute top-1 sm:top-2 left-1/2 -translate-x-1/2 w-[235px] h-[235px] sm:w-[340px] sm:h-[340px] pointer-events-none z-0 flex items-center justify-center",
                            "aria-hidden": "true",
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "div",
                                {
                                  className: `absolute inset-2 rounded-full blur-2xl transition-all duration-700 ${isEvening ? "opacity-100 scale-105" : "opacity-85"}`,
                                  style: {
                                    background: `radial-gradient(circle, ${selectedDeity.auraColor} 0%, rgba(251, 191, 36, 0.42) 45%, transparent 74%)`
                                  }
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 200 200", className: "w-full h-full animate-halo-spin-slow opacity-90", children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "halo3DRayGold", x1: "0", y1: "0", x2: "0", y2: "1", children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#fef9c3", stopOpacity: "0.98" }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#f59e0b", stopOpacity: "0.12" })
                                ] }) }),
                                Array.from({ length: 24 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  "polygon",
                                  {
                                    points: "96,6 104,6 101,58 99,58",
                                    fill: "url(#halo3DRayGold)",
                                    transform: `rotate(${i * 15} 100 100)`
                                  },
                                  `surya-ray-${i}`
                                )),
                                /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "100", cy: "100", r: "64", fill: "none", stroke: "#fde047", strokeWidth: "1.3", strokeDasharray: "4 4" })
                              ] }),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                "svg",
                                {
                                  viewBox: "0 0 200 200",
                                  className: "absolute inset-8 w-[calc(100%-4rem)] h-[calc(100%-4rem)] animate-halo-spin-reverse opacity-80",
                                  children: [
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "100", cy: "100", r: "82", fill: "none", stroke: "#f59e0b", strokeWidth: "1.6" }),
                                    Array.from({ length: 12 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                                      "path",
                                      {
                                        d: "M100,12 Q110,30 100,44 Q90,30 100,12 Z",
                                        fill: "rgba(253, 224, 71, 0.48)",
                                        stroke: "#fde047",
                                        strokeWidth: "0.7",
                                        transform: `rotate(${i * 30} 100 100)`
                                      },
                                      `halo-petal-${i}`
                                    ))
                                  ]
                                }
                              )
                            ]
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 w-full max-w-[245px] sm:max-w-[315px] h-[252px] sm:h-[345px] flex items-center justify-center px-3 sm:px-4", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "div",
                            {
                              className: "absolute inset-4 rounded-full blur-2xl pointer-events-none",
                              style: {
                                background: isMorning ? "radial-gradient(circle at 50% 42%, rgba(254, 243, 199, 0.52), rgba(245, 158, 11, 0.2), transparent 75%)" : "radial-gradient(circle at 50% 42%, rgba(251, 191, 36, 0.58), rgba(217, 119, 6, 0.24), transparent 76%)"
                              }
                            }
                          ),
                          !isSanctumImageBroken && resolvedImgSrc ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "div",
                            {
                              className: "relative w-full h-full overflow-hidden",
                              style: {
                                WebkitMaskImage: "radial-gradient(ellipse 68% 72% at 50% 44%, #000 38%, rgba(0,0,0,0.74) 60%, rgba(0,0,0,0.18) 82%, transparent 96%)",
                                maskImage: "radial-gradient(ellipse 68% 72% at 50% 44%, #000 38%, rgba(0,0,0,0.74) 60%, rgba(0,0,0,0.18) 82%, transparent 96%)"
                              },
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  "img",
                                  {
                                    src: resolvedImgSrc,
                                    alt: selectedDeity.hindiName,
                                    width: 315,
                                    height: 345,
                                    loading: "eager",
                                    decoding: "async",
                                    referrerPolicy: "no-referrer",
                                    className: `w-full h-full object-cover object-center transition-all duration-700 ${isMorning ? "brightness-[1.08] contrast-[1.04] saturate-[1.06]" : "brightness-[1.03] contrast-[1.1] saturate-[1.12]"}`,
                                    onLoad: (e) => {
                                      if (e.currentTarget.naturalWidth === 0) {
                                        if (!useFallbackSrc && selectedDeity.fallbackImage) {
                                          setUseFallbackSrc(true);
                                        } else {
                                          onImageBroken(selectedDeity.id);
                                        }
                                      }
                                    },
                                    onError: () => {
                                      if (!useFallbackSrc && selectedDeity.fallbackImage) {
                                        setUseFallbackSrc(true);
                                      } else {
                                        onImageBroken(selectedDeity.id);
                                      }
                                    }
                                  },
                                  `${selectedDeity.id}-${useFallbackSrc ? "fb" : "pri"}`
                                ),
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  "div",
                                  {
                                    className: "absolute inset-0 pointer-events-none",
                                    style: {
                                      background: isEvening ? "radial-gradient(ellipse 66% 70% at 50% 44%, transparent 46%, rgba(12, 5, 2, 0.56) 78%, rgba(6, 2, 1, 0.96) 98%)" : "radial-gradient(ellipse 66% 70% at 50% 44%, transparent 48%, rgba(45, 20, 6, 0.45) 80%, rgba(28, 12, 3, 0.88) 98%)"
                                    }
                                  }
                                )
                              ]
                            }
                          ) : (
                            /* Seamless Divine Medallion Fallback */
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full h-full flex flex-col items-center justify-center p-6 text-center select-none", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative w-28 h-28 sm:w-34 sm:h-34 rounded-full bg-gradient-to-b from-amber-400/35 via-amber-600/25 to-amber-950/90 border-2 border-[#d4af37] shadow-[0_0_45px_rgba(245,158,11,0.6)] flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: selectedDeity.deityIcon, className: "w-12 h-12 sm:w-14 sm:h-14" }) }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-lg sm:text-xl font-extrabold font-vedic text-yellow-200", children: selectedDeity.hindiName })
                            ] })
                          )
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: "absolute inset-0 pointer-events-none z-[15] mix-blend-screen animate-god-rays",
                            "aria-hidden": "true",
                            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 600 420", preserveAspectRatio: "none", className: "w-full h-full", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "godRayBeamGrad", x1: "0", y1: "0", x2: "0", y2: "1", children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#fef9c3", stopOpacity: isMorning ? "0.45" : "0.32" }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "52%", stopColor: "#fbbf24", stopOpacity: isMorning ? "0.2" : "0.14" }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#f59e0b", stopOpacity: "0" })
                              ] }) }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "270,0 330,0 465,420 135,420", fill: "url(#godRayBeamGrad)" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "285,0 315,0 385,420 215,420", fill: "url(#godRayBeamGrad)", opacity: "0.88" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "250,0 278,0 175,420 75,420", fill: "url(#godRayBeamGrad)", opacity: "0.52" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "322,0 350,0 525,420 425,420", fill: "url(#godRayBeamGrad)", opacity: "0.52" })
                            ] })
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            "aria-hidden": "true",
                            className: "absolute top-0 inset-x-0 h-3.5 sm:h-4 z-20 pointer-events-none transition-colors duration-300",
                            style: {
                              background: curtainTheme.valanceGrad,
                              filter: isShayanClosed ? "brightness(0.9)" : void 0,
                              boxShadow: "0 6px 14px rgba(0,0,0,0.75)"
                            }
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            "aria-hidden": "true",
                            className: "absolute inset-y-0 left-0 w-[52%] z-20 pointer-events-none transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] origin-left transform-gpu will-change-transform",
                            style: {
                              transform: isPatOpen ? "translateX(-14%) scaleX(0.22)" : "translateX(0) scaleX(1)",
                              background: curtainTheme.foldGradLeft,
                              filter: isShayanClosed ? "brightness(0.9)" : void 0,
                              boxShadow: curtainTheme.isLightFabric ? "inset -10px 0 18px rgba(127,29,29,0.16), 8px 0 18px rgba(0,0,0,0.42)" : "inset -14px 0 24px rgba(0,0,0,0.78), 10px 0 22px rgba(0,0,0,0.75)",
                              borderRight: `3px solid ${curtainTheme.borderColor}`
                            },
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "div",
                              {
                                className: "absolute inset-y-0 right-0 w-2.5",
                                style: {
                                  background: curtainTheme.trimGrad
                                }
                              }
                            )
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            "aria-hidden": "true",
                            className: "absolute inset-y-0 right-0 w-[52%] z-20 pointer-events-none transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] origin-right transform-gpu will-change-transform",
                            style: {
                              transform: isPatOpen ? "translateX(14%) scaleX(0.22)" : "translateX(0) scaleX(1)",
                              background: curtainTheme.foldGradRight,
                              filter: isShayanClosed ? "brightness(0.9)" : void 0,
                              boxShadow: curtainTheme.isLightFabric ? "inset 10px 0 18px rgba(127,29,29,0.16), -8px 0 18px rgba(0,0,0,0.42)" : "inset 14px 0 24px rgba(0,0,0,0.78), -10px 0 22px rgba(0,0,0,0.75)",
                              borderLeft: `3px solid ${curtainTheme.borderColor}`
                            },
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "div",
                              {
                                className: "absolute inset-y-0 left-0 w-2.5",
                                style: {
                                  background: curtainTheme.trimGrad
                                }
                              }
                            )
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            "aria-hidden": "true",
                            className: `absolute left-0 top-[56%] -translate-y-1/2 w-7 sm:w-10 h-9 z-[22] pointer-events-none transition-all duration-500 ${isPatOpen ? "opacity-100 scale-100" : "opacity-0 scale-90"}`,
                            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 36 44", className: "w-full h-full overflow-visible drop-shadow-[0_3px_5px_rgba(0,0,0,0.85)]", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0,10 Q16,22 30,15", fill: "none", stroke: curtainTheme.cordMainStroke, strokeWidth: "3.8", strokeLinecap: "round" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0,10 Q16,22 30,15", fill: "none", stroke: curtainTheme.cordAccentStroke, strokeWidth: "1.6", strokeDasharray: "3 2" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "29", cy: "15", r: "3.8", fill: curtainTheme.tasselFill, stroke: curtainTheme.tasselStroke, strokeWidth: "0.9" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M25,18 L33,18 L35,34 L23,34 Z", fill: curtainTheme.tasselFill, stroke: curtainTheme.tasselStroke, strokeWidth: "0.8" })
                            ] })
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            "aria-hidden": "true",
                            className: `absolute right-0 top-[56%] -translate-y-1/2 w-7 sm:w-10 h-9 z-[22] pointer-events-none transition-all duration-500 ${isPatOpen ? "opacity-100 scale-100" : "opacity-0 scale-90"}`,
                            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 36 44", className: "w-full h-full overflow-visible drop-shadow-[0_3px_5px_rgba(0,0,0,0.85)]", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M36,10 Q20,22 6,15", fill: "none", stroke: curtainTheme.cordMainStroke, strokeWidth: "3.8", strokeLinecap: "round" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M36,10 Q20,22 6,15", fill: "none", stroke: curtainTheme.cordAccentStroke, strokeWidth: "1.6", strokeDasharray: "3 2" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "7", cy: "15", r: "3.8", fill: curtainTheme.tasselFill, stroke: curtainTheme.tasselStroke, strokeWidth: "0.9" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M3,18 L11,18 L13,34 L1,34 Z", fill: curtainTheme.tasselFill, stroke: curtainTheme.tasselStroke, strokeWidth: "0.8" })
                            ] })
                          }
                        ),
                        !isPatOpen && !isSwappingDeity && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 z-30 flex flex-col items-center justify-center p-3 sm:p-4 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "div",
                          {
                            className: "px-4 py-3.5 sm:px-5 sm:py-4 rounded-2xl backdrop-blur-md border-2 shadow-2xl space-y-2.5 max-w-[92%] sm:max-w-sm",
                            style: {
                              backgroundColor: curtainTheme.crestPanelBg || "rgba(0,0,0,0.68)",
                              borderColor: curtainTheme.borderColor,
                              boxShadow: curtainTheme.isLightFabric ? "0 12px 32px rgba(127,29,29,0.22)" : "0 12px 36px rgba(0,0,0,0.78)"
                            },
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                "div",
                                {
                                  className: "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border text-[10px] sm:text-xs font-vedic font-bold tracking-wider",
                                  style: {
                                    backgroundColor: curtainTheme.isLightFabric ? "rgba(217,119,6,0.14)" : "rgba(245,158,11,0.16)",
                                    borderColor: curtainTheme.isLightFabric ? "rgba(180,83,9,0.45)" : "rgba(252,211,77,0.42)",
                                    color: curtainTheme.crestHeadlineColor || "#FDE68A"
                                  },
                                  children: [
                                    isShayanClosed ? /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "w-3 h-3 shrink-0", style: { color: curtainTheme.crestHeadlineColor || "#A5B4FC" } }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3 shrink-0", style: { color: curtainTheme.crestHeadlineColor || "#FCD34D" } }),
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: praharInfo.closedHeadlineHi || "॥ पट मंगल विश्राम ॥" })
                                  ]
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "p",
                                {
                                  className: "text-[11.5px] sm:text-[13px] font-bold leading-snug",
                                  style: { color: curtainTheme.crestTextColor || "#FFFBEB" },
                                  children: praharInfo.closedMessageHi || (praharInfo.phase === "vishram" ? "श्री भगवान मध्याह्न विश्राम/शयन कर रहे हैं — संध्या दर्शन सायं 4:00 बजे खुलेंगे" : "श्री भगवान रात्रि शयन विश्राम कर रहे हैं — प्रातः दर्शन 5:00 बजे खुलेंगे")
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                "div",
                                {
                                  className: "py-1.5 px-3 rounded-xl border inline-flex flex-col items-center",
                                  style: {
                                    backgroundColor: curtainTheme.crestTimerBg || "rgba(0,0,0,0.55)",
                                    borderColor: curtainTheme.isLightFabric ? "rgba(180,83,9,0.42)" : "rgba(251,191,36,0.35)"
                                  },
                                  children: [
                                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                                      "span",
                                      {
                                        className: "text-[9.5px] uppercase tracking-wider font-bold",
                                        style: { color: curtainTheme.crestHeadlineColor || "rgba(252,211,77,0.88)" },
                                        children: praharInfo.countdownTitleHi || "पट खुलने में शेष समय (IST)"
                                      }
                                    ),
                                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                                      "span",
                                      {
                                        className: "text-base sm:text-lg font-mono font-extrabold tabular-nums tracking-widest mt-0.5",
                                        style: { color: curtainTheme.crestTimerColor || "#FDE047" },
                                        children: praharInfo.countdownFormatted
                                      }
                                    )
                                  ]
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "button",
                                {
                                  type: "button",
                                  onClick: () => {
                                    if (!praharInfo.isScheduledOpen && onOpenSpecialDarshan) {
                                      onOpenSpecialDarshan();
                                    } else {
                                      onTogglePat();
                                    }
                                  },
                                  className: "w-full sm:w-auto min-h-[44px] px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-300 via-yellow-300 to-amber-400 text-slate-950 font-extrabold text-xs sm:text-sm shadow-[0_6px_22px_rgba(251,191,36,0.45)] cursor-pointer hover:brightness-105 active:scale-95 transition-transform inline-flex items-center justify-center gap-1.5 border border-yellow-100",
                                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🙏 विशेष दर्शन हेतु पट खोलें" })
                                }
                              ) })
                            ]
                          }
                        ) })
                      ] }),
                      isAartiSpinning && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 z-30 flex items-center justify-center pointer-events-none", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-[184px] h-[184px] sm:w-[260px] sm:h-[260px] rounded-full border border-amber-300/45 shadow-[0_0_48px_rgba(251,191,36,0.45)]" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute animate-aarti-orbit", children: /* @__PURE__ */ jsxRuntimeExports.jsx(DecoratedBrassAartiThali, {}) })
                      ] })
                    ]
                  }
                ) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CarvedGoldenPillar3D, { side: "right", isEvening })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-30 w-full -mt-4 sm:-mt-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-20 flex items-end justify-between px-4 sm:px-14 -mb-2.5 sm:-mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: onToggleDiya,
                    title: tr("अखण्ड घी दीपक जलाएं/बंद करें", "Toggle Akhand Brass Diya"),
                    className: "group relative flex flex-col items-center cursor-pointer focus:outline-none hover:scale-105 active:scale-95 transition-transform shrink-0",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(BrassDeepdaan3D, { isLit: isEffectiveDiyaLit, isEvening, side: "left" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex flex-col items-center justify-end flex-1 min-w-[125px] max-w-[240px] mx-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: onToggleDhoop,
                      title: tr("सुगंधित धूप/अगरबत्ती जलाएं/बंद करें", "Toggle Fragrant Brass Dhoopdan"),
                      className: "group relative flex flex-col items-center cursor-pointer focus:outline-none hover:scale-105 active:scale-95 transition-transform -mb-1",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-10 sm:h-11 w-12 flex items-end justify-center pointer-events-none", children: [
                          isDhoopActive && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute bottom-1 w-3.5 h-11 rounded-full bg-gradient-to-t from-amber-100/75 via-slate-200/50 to-transparent blur-[3px] animate-incense-wisp" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute bottom-2 left-5 w-4 h-12 rounded-full bg-gradient-to-t from-amber-200/65 via-slate-100/40 to-transparent blur-[4px] animate-incense-wisp-delayed" })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end gap-1.5", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1 h-4 bg-amber-950 rounded-t-full relative", children: isDhoopActive && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-1 left-0 w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_8px_#f97316] animate-pulse" }) }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1 h-5 bg-amber-900 rounded-t-full relative", children: isDhoopActive && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-1 left-0 w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_10px_#ef4444] animate-pulse" }) })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 64 24", className: "w-11 sm:w-14 h-4.5 sm:h-5 drop-shadow-[0_4px_8px_rgba(0,0,0,0.85)]", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "dhoopBrass3D", x1: "0", y1: "0", x2: "1", y2: "0", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#451a03" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "35%", stopColor: "#eab308" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "55%", stopColor: "#fef9c3" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "85%", stopColor: "#b45309" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#3a1603" })
                          ] }) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M8,4 Q32,10 56,4 L48,16 Q32,20 16,16 Z", fill: "url(#dhoopBrass3D)", stroke: "#fef08a", strokeWidth: "1" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M22,16 L42,16 L47,23 L17,23 Z", fill: "#92400e", stroke: "#fde047", strokeWidth: "0.8" })
                        ] })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: onOfferFlowers,
                      title: tr("ताज़े पुष्प अर्पित करें (पुष्प वर्षा)", "Offer Fresh Flowers"),
                      className: "w-full flex items-center justify-center cursor-pointer focus:outline-none hover:brightness-110 active:scale-95 transition-all",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 180 28", className: "w-full h-6 sm:h-7 drop-shadow-[0_3px_5px_rgba(0,0,0,0.75)]", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("ellipse", { cx: "32", cy: "18", rx: "16", ry: "4.5", fill: "#15803d", transform: "rotate(-10 32 18)" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("ellipse", { cx: "90", cy: "20", rx: "20", ry: "5", fill: "#16a34a" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("ellipse", { cx: "148", cy: "18", rx: "16", ry: "4.5", fill: "#15803d", transform: "rotate(10 148 18)" }),
                        [
                          { cx: 18, cy: 16, r: 6.5, c: "#f59e0b", s: "#fef08a" },
                          { cx: 38, cy: 14, r: 7, c: "#e11d48", s: "#fda4af" },
                          { cx: 58, cy: 16, r: 6.8, c: "#fb923c", s: "#fef08a" },
                          { cx: 79, cy: 14, r: 7.5, c: "#be123c", s: "#fecdd3" },
                          { cx: 99, cy: 15, r: 7.5, c: "#fbbf24", s: "#fef9c3" },
                          { cx: 120, cy: 14, r: 6.8, c: "#e11d48", s: "#fda4af" },
                          { cx: 140, cy: 16, r: 7, c: "#f59e0b", s: "#fef08a" },
                          { cx: 160, cy: 15, r: 6.5, c: "#be123c", s: "#fecdd3" }
                        ].map((fl, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: fl.cx, cy: fl.cy, r: fl.r, fill: fl.c, stroke: fl.s, strokeWidth: "1" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: fl.cx, cy: fl.cy, r: "2.2", fill: "#fef9c3" })
                        ] }, `chowki-fl-${idx}`))
                      ] })
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: onToggleDiya,
                    title: tr("अखण्ड घी दीपक जलाएं/बंद करें", "Toggle Akhand Brass Diya"),
                    className: "group relative flex flex-col items-center cursor-pointer focus:outline-none hover:scale-105 active:scale-95 transition-transform shrink-0",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(BrassDeepdaan3D, { isLit: isEffectiveDiyaLit, isEvening, side: "right" })
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full drop-shadow-[0_14px_24px_rgba(0,0,0,0.95)]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "h-4 sm:h-5 mx-0.5 rounded-t-md border-t border-yellow-200/80 transition-all duration-500",
                    style: {
                      background: isEffectiveDiyaLit ? "linear-gradient(180deg, #6b2e07 0%, #9a450b 45%, #eab308 100%)" : "linear-gradient(180deg, #3c1905 0%, #612a08 45%, #9a5b0c 100%)",
                      boxShadow: isEffectiveDiyaLit ? "inset 0 2px 18px rgba(251, 191, 36, 0.65)" : "inset 0 2px 10px rgba(212, 175, 55, 0.25)"
                    }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 540 50", preserveAspectRatio: "none", className: "w-full h-10 sm:h-12", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "chowkiFrontGold", x1: "0", y1: "0", x2: "1", y2: "0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#3a1904" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "15%", stopColor: "#b45309" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "50%", stopColor: "#fef08a" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "85%", stopColor: "#b45309" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#3a1904" })
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "0", y: "0", width: "540", height: "8", fill: "url(#chowkiFrontGold)", stroke: "#fef9c3", strokeWidth: "0.9" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "8", y: "8", width: "524", height: "30", fill: "#451a03", stroke: "#d97706", strokeWidth: "1" }),
                  Array.from({ length: 18 }).map((_, i) => {
                    const x = 16 + i * 28.5;
                    return /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "path",
                      {
                        d: `M${x},11 Q${x + 14},31 ${x + 28},11 Z`,
                        fill: "#92400e",
                        stroke: "#fbbf24",
                        strokeWidth: "0.9",
                        opacity: "0.85"
                      },
                      `chowki-lotus-${i}`
                    );
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "140", y: "12", width: "260", height: "22", rx: "4", fill: "#2a0f03", stroke: "#fef08a", strokeWidth: "1.2" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "text",
                    {
                      x: "270",
                      y: "27",
                      fill: "#fef08a",
                      fontSize: "11.5",
                      fontWeight: "800",
                      textAnchor: "middle",
                      children: [
                        "॥ ",
                        selectedDeity.hindiName,
                        " ॥"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "2", y: "38", width: "536", height: "10", rx: "2", fill: "url(#chowkiFrontGold)", stroke: "#fde047", strokeWidth: "0.8" })
                ] }),
                !isPatOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1.5 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/75 border border-amber-400/45 text-[10.5px] sm:text-xs font-bold text-amber-200 shadow-inner", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-amber-400 animate-pulse shadow-[0_0_8px_#fbbf24]" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "अखण्ड ज्योत प्रज्वलित है • नीचे मंत्र जाप व भजन का लाभ लें" })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1.5 flex items-center justify-center gap-2 sm:gap-4 text-[10px] sm:text-[11px] font-bold text-amber-200/90 whitespace-nowrap overflow-x-auto scrollbar-none", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: onToggleDiya,
                      className: "px-1.5 py-1 hover:text-yellow-200 transition-colors cursor-pointer shrink-0 inline-flex items-center gap-1.5",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "diya", className: "w-3.5 h-3.5" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: isEffectiveDiyaLit ? tr("अखण्ड ज्योत प्रज्वलित", "Akhand Jyot ON") : tr("दीपक जलाएं", "Light Diya") })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-amber-500/45", "aria-hidden": "true", children: "·" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: onToggleDhoop,
                      className: "px-1.5 py-1 hover:text-yellow-200 transition-colors cursor-pointer shrink-0 inline-flex items-center gap-1.5",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "dhoop", className: "w-3.5 h-3.5" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: isDhoopActive ? tr("धूप चालू", "Dhoop ON") : tr("धूप जलाएं", "Light Dhoop") })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-amber-500/45", "aria-hidden": "true", children: "·" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: onOfferFlowers,
                      className: "px-1.5 py-1 hover:text-yellow-200 transition-colors cursor-pointer shrink-0 inline-flex items-center gap-1.5",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "lotus", className: "w-3.5 h-3.5" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                          tr("पुष्प अर्पण", "Offer Flowers"),
                          flowersOfferedCount > 0 ? ` (${flowersOfferedCount})` : ""
                        ] })
                      ]
                    }
                  )
                ] })
              ] })
            ] })
          ] })
        ] })
      ]
    }
  );
};
function formatAudioTime(seconds) {
  const safeSec = Math.max(0, Math.floor(seconds || 0));
  const mins = Math.floor(safeSec / 60);
  const secs = safeSec % 60;
  return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}
function formatCountdownHMS(totalSeconds) {
  const safe = Math.max(0, Math.floor(totalSeconds));
  const h = Math.floor(safe / 3600);
  const m = Math.floor(safe % 3600 / 60);
  const s = safe % 60;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}
function getStrictISTClockParts(now = /* @__PURE__ */ new Date()) {
  try {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Asia/Kolkata",
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
    const parts = fmt.formatToParts(now);
    const getNum = (type) => Number(parts.find((p) => p.type === type)?.value || 0);
    let hours = getNum("hour");
    if (hours === 24) hours = 0;
    const minutes = getNum("minute");
    const seconds = getNum("second");
    const ampm = hours >= 12 ? "PM" : "AM";
    const dispH = hours % 12 === 0 ? 12 : hours % 12;
    return {
      hours,
      minutes,
      seconds,
      timeLabel12h: `${String(dispH).padStart(2, "0")}:${String(minutes).padStart(2, "0")} ${ampm}`
    };
  } catch {
    const fb = getISTCalendarParts(now);
    const ampm = fb.hours >= 12 ? "PM" : "AM";
    const dispH = fb.hours % 12 === 0 ? 12 : fb.hours % 12;
    return {
      hours: fb.hours,
      minutes: fb.minutes,
      seconds: fb.seconds,
      timeLabel12h: `${String(dispH).padStart(2, "0")}:${String(fb.minutes).padStart(2, "0")} ${ampm}`
    };
  }
}
function getMandirScheduleInfo(hoursIST, minutesIST, secondsIST, istClockLabel) {
  const totalSec = hoursIST * 3600 + minutesIST * 60 + secondsIST;
  const SEC_05_00 = 5 * 3600;
  const SEC_06_30 = 6 * 3600 + 30 * 60;
  const SEC_12_00 = 12 * 3600;
  const SEC_16_00 = 16 * 3600;
  const SEC_18_30 = 18 * 3600 + 30 * 60;
  const SEC_19_30 = 19 * 3600 + 30 * 60;
  const SEC_20_30 = 20 * 3600 + 30 * 60;
  const SEC_24_00 = 24 * 3600;
  if (totalSec >= SEC_05_00 && totalSec < SEC_12_00) {
    const isMangalAarti = totalSec >= SEC_05_00 && totalSec < SEC_06_30;
    return {
      phase: "morning",
      isScheduledOpen: true,
      badgeHi: "प्रातः दर्शन एवं श्रृंगार",
      timeRangeHi: "05:00 AM – 12:00 PM IST",
      specialHighlightHi: isMangalAarti ? "मंगल आरती लाइव" : null,
      countdownFormatted: formatCountdownHMS(SEC_12_00 - totalSec),
      istClockLabel
    };
  }
  if (totalSec >= SEC_12_00 && totalSec < SEC_16_00) {
    return {
      phase: "vishram",
      isScheduledOpen: false,
      badgeHi: "मध्याह्न विश्राम — पट बंद",
      timeRangeHi: "12:00 PM – 04:00 PM IST",
      specialHighlightHi: null,
      closedHeadlineHi: "॥ मध्याह्न विश्राम काल ॥",
      closedMessageHi: "श्री भगवान मध्याह्न विश्राम/शयन कर रहे हैं — संध्या दर्शन सायं 4:00 बजे खुलेंगे",
      countdownTitleHi: "संध्या दर्शन खुलने में शेष समय (IST)",
      countdownFormatted: formatCountdownHMS(SEC_16_00 - totalSec),
      istClockLabel
    };
  }
  if (totalSec >= SEC_16_00 && totalSec < SEC_20_30) {
    const isSandhyaMahaAarti = totalSec >= SEC_18_30 && totalSec < SEC_19_30;
    return {
      phase: "evening",
      isScheduledOpen: true,
      badgeHi: "संध्या दर्शन",
      timeRangeHi: "04:00 PM – 08:30 PM IST",
      specialHighlightHi: isSandhyaMahaAarti ? "संध्या महाआरती" : null,
      countdownFormatted: formatCountdownHMS(SEC_20_30 - totalSec),
      istClockLabel
    };
  }
  const remainingToMorning = totalSec >= SEC_20_30 ? SEC_24_00 - totalSec + SEC_05_00 : SEC_05_00 - totalSec;
  return {
    phase: "shayan",
    isScheduledOpen: false,
    badgeHi: "रात्रि शयन — पट बंद",
    timeRangeHi: "08:30 PM – 05:00 AM IST",
    specialHighlightHi: null,
    closedHeadlineHi: "॥ रात्रि शयन विश्राम ॥",
    closedMessageHi: "श्री भगवान रात्रि शयन विश्राम कर रहे हैं — प्रातः दर्शन 5:00 बजे खुलेंगे",
    countdownTitleHi: "प्रातः दर्शन खुलने में शेष समय (IST)",
    countdownFormatted: formatCountdownHMS(remainingToMorning),
    istClockLabel
  };
}
const DeityThumbImg = ({ deity }) => {
  const [useFallback, setUseFallback] = reactExports.useState(false);
  const [isBroken, setIsBroken] = reactExports.useState(false);
  reactExports.useEffect(() => {
    setUseFallback(false);
    setIsBroken(false);
  }, [deity.id, deity.primaryImage]);
  const activeSrc = useFallback ? deity.fallbackImage : deity.primaryImage;
  if (isBroken || !activeSrc) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-amber-500/25 via-amber-900/40 to-black/60", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: deity.deityIcon, className: "w-6 h-6" }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "img",
    {
      src: activeSrc,
      alt: deity.hindiName,
      width: 64,
      height: 64,
      loading: "lazy",
      decoding: "async",
      referrerPolicy: "no-referrer",
      className: "w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-300",
      onLoad: (e) => {
        if (e.currentTarget.naturalWidth === 0) {
          if (!useFallback && deity.fallbackImage) {
            setUseFallback(true);
          } else {
            setIsBroken(true);
          }
        }
      },
      onError: () => {
        if (!useFallback && deity.fallbackImage) {
          setUseFallback(true);
        } else {
          setIsBroken(true);
        }
      }
    }
  );
};
const DigitalMandirSection = ({
  onOpenGyanKoshCategory,
  onOpenJaapMala,
  currentUser,
  onUpdateAccount,
  onOpenLoginModal
}) => {
  const { tr } = useLanguage();
  const {
    activeTrack,
    isPlaying,
    isBellRinging,
    currentTime,
    duration,
    isMuted,
    playTrack,
    toggleTrack,
    stopAllAudio,
    playBell,
    seekTo,
    toggleMute
  } = useGlobalAudio();
  const activePhone = currentUser?.phone || getActiveMobilePhone();
  const isLoggedIn = Boolean(activePhone);
  const currentUserRef = reactExports.useRef(currentUser);
  currentUserRef.current = currentUser;
  const onUpdateAccountRef = reactExports.useRef(onUpdateAccount);
  onUpdateAccountRef.current = onUpdateAccount;
  reactExports.useEffect(() => {
    return () => {
      window.setTimeout(() => {
        stopAllAudio();
      }, 0);
    };
  }, [stopAllAudio]);
  const { activeTheme, isFestivalActive, isDefaultAsIs } = useFestiveTheme();
  const [istParts, setIstParts] = reactExports.useState(() => getISTCalendarParts(/* @__PURE__ */ new Date()));
  const [nowMs, setNowMs] = reactExports.useState(() => Date.now());
  const [istClock, setIstClock] = reactExports.useState(() => getStrictISTClockParts(/* @__PURE__ */ new Date()));
  const lastDateKeyRef = reactExports.useRef(istParts.dateKey);
  const userManualSelectionRef = reactExports.useRef(false);
  const [todayDayIndex, setTodayDayIndex] = reactExports.useState(() => istParts.weekdayIndex);
  const todayPanchang = reactExports.useMemo(
    () => buildSingleDayPanchang(istParts.year, istParts.month, istParts.day, true, /* @__PURE__ */ new Date()),
    [istParts.year, istParts.month, istParts.day]
  );
  const praharInfo = reactExports.useMemo(
    () => getMandirScheduleInfo(
      istClock.hours,
      istClock.minutes,
      istClock.seconds,
      istClock.timeLabel12h
    ),
    [istClock.hours, istClock.minutes, istClock.seconds, istClock.timeLabel12h]
  );
  const todayDefaultDeity = reactExports.useMemo(() => {
    const isNavratriWindow = (todayPanchang.hinduMaas === "चैत्र" || todayPanchang.hinduMaas === "आश्विन") && todayPanchang.pakshaShort === "शुक्ल" && todayPanchang.tithiIndex >= 1 && todayPanchang.tithiIndex <= 9;
    const shouldUsePanchangDeity = !isDefaultAsIs && Boolean(activeTheme?.id) || Boolean(todayPanchang.festivalName) || isNavratriWindow;
    if (shouldUsePanchangDeity) {
      return getDeityForFestiveTheme(
        activeTheme?.id || "",
        activeTheme?.nameHi || "",
        todayDayIndex,
        {
          festivalName: todayPanchang.festivalName,
          hinduMaas: todayPanchang.hinduMaas,
          paksha: todayPanchang.pakshaShort,
          tithiIndex: todayPanchang.tithiIndex
        }
      );
    }
    return getDayDeity(todayDayIndex);
  }, [
    activeTheme?.id,
    activeTheme?.nameHi,
    isDefaultAsIs,
    todayDayIndex,
    todayPanchang.festivalName,
    todayPanchang.hinduMaas,
    todayPanchang.pakshaShort,
    todayPanchang.tithiIndex
  ]);
  const [selectedDeity, setSelectedDeity] = reactExports.useState(todayDefaultDeity);
  const [activeDeityTab, setActiveDeityTab] = reactExports.useState(todayDefaultDeity.category);
  reactExports.useEffect(() => {
    if (!userManualSelectionRef.current) {
      setSelectedDeity(todayDefaultDeity);
      setActiveDeityTab(todayDefaultDeity.category);
    }
  }, [todayDefaultDeity]);
  reactExports.useEffect(() => {
    try {
      localStorage.setItem("panditji_custom_mantra_text", selectedDeity.mantra);
    } catch {
    }
  }, [selectedDeity.mantra]);
  const curtainTheme = reactExports.useMemo(
    () => getCurtainThemeForDeity(
      selectedDeity,
      istParts.weekdayIndex,
      todayPanchang.festivalName || activeTheme?.nameHi
    ),
    [selectedDeity, istParts.weekdayIndex, todayPanchang.festivalName, activeTheme?.nameHi]
  );
  const [brokenImages, setBrokenImages] = reactExports.useState({});
  const markImageBroken = reactExports.useCallback((deityId) => {
    setBrokenImages((prev) => prev[deityId] ? prev : { ...prev, [deityId]: true });
  }, []);
  const [sadhana, setSadhana] = reactExports.useState(
    () => getInitialSadhanaState(activePhone)
  );
  const [isDhoopActive, setIsDhoopActive] = reactExports.useState(
    () => Boolean(sadhana.todayRituals.dhoopLit)
  );
  const [sankalpModalOpen, setSankalpModalOpen] = reactExports.useState(false);
  const [sankalpTakenToday, setSankalpTakenToday] = reactExports.useState(() => {
    try {
      return localStorage.getItem("panditji_sankalp_date") === getTodayDateString();
    } catch {
      return false;
    }
  });
  const [yajmanName, setYajmanName] = reactExports.useState(() => {
    try {
      return currentUser?.name || localStorage.getItem("panditji_sankalp_name") || "भक्त यजमान";
    } catch {
      return currentUser?.name || "भक्त यजमान";
    }
  });
  const [yajmanCity, setYajmanCity] = reactExports.useState(
    () => getActivePanchangLocation().hindiName || "भारत"
  );
  const [mandirCardOpen, setMandirCardOpen] = reactExports.useState(false);
  const [mandirCardKind, setMandirCardKind] = reactExports.useState("darshan");
  const [cardAspect, setCardAspect] = reactExports.useState("9:16");
  const [generatedCard, setGeneratedCard] = reactExports.useState(null);
  const [isGeneratingCard, setIsGeneratingCard] = reactExports.useState(false);
  const hasCompletedMalaToday = reactExports.useMemo(() => {
    try {
      const savedMalas = Number(localStorage.getItem("panditji_jaap_malas") || "0");
      return savedMalas > 0 || (currentUser?.jaapStats?.completedMalas || 0) > 0;
    } catch {
      return (currentUser?.jaapStats?.completedMalas || 0) > 0;
    }
  }, [currentUser?.jaapStats?.completedMalas, sadhana.todayRituals.mantraChanted]);
  reactExports.useEffect(() => {
    const init = getInitialSadhanaState(activePhone);
    setSadhana(init);
    setIsDhoopActive(Boolean(init.todayRituals.dhoopLit));
  }, [activePhone]);
  const [ambienceMode, setAmbienceMode] = reactExports.useState(
    () => istClock.hours >= 5 && istClock.hours < 16 ? "morning" : "evening"
  );
  const [isPatOpen, setIsPatOpen] = reactExports.useState(false);
  const [isSwappingDeity, setIsSwappingDeity] = reactExports.useState(false);
  const isSwappingDeityRef = reactExports.useRef(false);
  const [specialDarshanExpiresAt, setSpecialDarshanExpiresAt] = reactExports.useState(null);
  const prevScheduledOpenRef = reactExports.useRef(praharInfo.isScheduledOpen);
  const patTimerRef = reactExports.useRef(null);
  const patSwapTimerRef = reactExports.useRef(null);
  const isSpecialDarshanActive = Boolean(
    !praharInfo.isScheduledOpen && specialDarshanExpiresAt !== null && nowMs < specialDarshanExpiresAt
  );
  const specialDarshanCountdown = reactExports.useMemo(() => {
    if (!specialDarshanExpiresAt) return "05:00";
    const remSec = Math.max(0, Math.ceil((specialDarshanExpiresAt - nowMs) / 1e3));
    const mins = Math.floor(remSec / 60);
    const secs = remSec % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  }, [specialDarshanExpiresAt, nowMs]);
  reactExports.useEffect(() => {
    const tick = window.setInterval(() => {
      const now = /* @__PURE__ */ new Date();
      setNowMs(now.getTime());
      setIstClock(getStrictISTClockParts(now));
    }, 1e3);
    return () => window.clearInterval(tick);
  }, []);
  reactExports.useEffect(() => {
    if (specialDarshanExpiresAt !== null && nowMs >= specialDarshanExpiresAt) {
      setSpecialDarshanExpiresAt(null);
      if (!praharInfo.isScheduledOpen) {
        setIsPatOpen(false);
        setIsAartiSpinning(false);
        setBlessingToast(
          "विशेष दर्शन अवधि पूर्ण — श्री भगवान के विश्राम हेतु पट पुनः बंद हो गए।"
        );
      }
    }
  }, [nowMs, praharInfo.isScheduledOpen, specialDarshanExpiresAt]);
  reactExports.useEffect(() => {
    if (prevScheduledOpenRef.current !== praharInfo.isScheduledOpen) {
      prevScheduledOpenRef.current = praharInfo.isScheduledOpen;
      setSpecialDarshanExpiresAt(null);
      if (praharInfo.isScheduledOpen) {
        setAmbienceMode(praharInfo.phase === "morning" ? "morning" : "evening");
        setIsPatOpen(true);
      } else {
        setIsPatOpen(false);
        setIsAartiSpinning(false);
      }
    }
  }, [praharInfo.isScheduledOpen, praharInfo.phase]);
  reactExports.useEffect(() => {
    let midnightTimer = null;
    const syncISTDateAndPrahar = (forceMidnightRoll = false) => {
      const now = /* @__PURE__ */ new Date();
      const nextParts = getISTCalendarParts(now);
      const nextClock = getStrictISTClockParts(now);
      setIstParts(nextParts);
      setIstClock(nextClock);
      setNowMs(now.getTime());
      const nextAmbience = nextClock.hours >= 5 && nextClock.hours < 16 ? "morning" : "evening";
      setAmbienceMode(nextAmbience);
      if (forceMidnightRoll || nextParts.dateKey !== lastDateKeyRef.current) {
        lastDateKeyRef.current = nextParts.dateKey;
        userManualSelectionRef.current = false;
        setTodayDayIndex(nextParts.weekdayIndex);
        const fresh = getInitialSadhanaState(activePhone);
        setSadhana(fresh);
        setIsDhoopActive(Boolean(fresh.todayRituals.dhoopLit));
        try {
          setSankalpTakenToday(localStorage.getItem("panditji_sankalp_date") === nextParts.dateKey);
        } catch {
          setSankalpTakenToday(false);
        }
      }
    };
    const scheduleMidnight = () => {
      if (midnightTimer !== null) window.clearTimeout(midnightTimer);
      const msUntilMidnight = getMsUntilNextISTMidnight(/* @__PURE__ */ new Date());
      midnightTimer = window.setTimeout(() => {
        syncISTDateAndPrahar(true);
        scheduleMidnight();
      }, msUntilMidnight);
    };
    const handleVisibilityOrFocus = () => {
      if (document.visibilityState === "hidden") return;
      syncISTDateAndPrahar(false);
    };
    const handleCustomMidnight = () => syncISTDateAndPrahar(true);
    scheduleMidnight();
    window.addEventListener("panditji_midnight_refresh", handleCustomMidnight);
    document.addEventListener("visibilitychange", handleVisibilityOrFocus);
    window.addEventListener("focus", handleVisibilityOrFocus);
    return () => {
      if (midnightTimer !== null) window.clearTimeout(midnightTimer);
      window.removeEventListener("panditji_midnight_refresh", handleCustomMidnight);
      document.removeEventListener("visibilitychange", handleVisibilityOrFocus);
      window.removeEventListener("focus", handleVisibilityOrFocus);
    };
  }, [activePhone]);
  reactExports.useEffect(() => {
    const initialClock = getStrictISTClockParts(/* @__PURE__ */ new Date());
    const initialSchedule = getMandirScheduleInfo(
      initialClock.hours,
      initialClock.minutes,
      initialClock.seconds,
      initialClock.timeLabel12h
    );
    const t = window.setTimeout(() => {
      if (initialSchedule.isScheduledOpen) {
        setIsPatOpen(true);
      } else {
        setIsPatOpen(false);
      }
    }, 240);
    return () => {
      window.clearTimeout(t);
      if (patTimerRef.current) window.clearTimeout(patTimerRef.current);
      if (patSwapTimerRef.current) window.clearTimeout(patSwapTimerRef.current);
      if (aartiTimerRef.current) window.clearTimeout(aartiTimerRef.current);
    };
  }, []);
  const [bellRingTick, setBellRingTick] = reactExports.useState(0);
  const [isAartiSpinning, setIsAartiSpinning] = reactExports.useState(false);
  const aartiTimerRef = reactExports.useRef(null);
  const [showAartiDrawer, setShowAartiDrawer] = reactExports.useState(false);
  const [blessingToast, setBlessingToast] = reactExports.useState(null);
  const [playbarMode, setPlaybarMode] = reactExports.useState("aarti");
  const activeAartiItem = reactExports.useMemo(() => {
    return AARTI_CHALISA_LIST.find((a) => a.id === selectedDeity.aartiId) || AARTI_CHALISA_LIST[0];
  }, [selectedDeity]);
  const deityAudioTracks = reactExports.useMemo(() => {
    return {
      aarti: {
        id: `mandir-aarti-${selectedDeity.id}`,
        title: activeAartiItem.title,
        subtitle: `${selectedDeity.hindiName} • सम्पूर्ण आरती व ध्यान`,
        deityId: selectedDeity.id,
        deityName: selectedDeity.hindiName,
        category: "aarti",
        lyricsText: `${selectedDeity.hindiName} की पावन आरती। ${activeAartiItem.lyrics.join(" ")}। सम्पूर्ण भावार्थ: ${activeAartiItem.meaning}`,
        frequency: 432,
        durationSeconds: 210
      },
      mantra: {
        id: `mandir-mantra-${selectedDeity.id}`,
        title: `${selectedDeity.hindiName} — वैदिक बीज मंत्र`,
        subtitle: selectedDeity.mantra,
        deityId: selectedDeity.id,
        deityName: selectedDeity.hindiName,
        category: "mantra",
        lyricsText: `${selectedDeity.hindiName} का दिव्य ध्यान मंत्र। ${selectedDeity.mantra}। अर्थ: ${selectedDeity.mantraMeaning}। श्लोक: ${selectedDeity.shloka}। भावार्थ: ${selectedDeity.shlokaMeaning || selectedDeity.significance}`,
        frequency: 528,
        durationSeconds: 180
      },
      ambient: {
        id: "mandir-ambient-flute",
        title: "मंदिर बांसुरी धुन एवं अखण्ड ॐ नाद",
        subtitle: "राग भूपाली बांसुरी व तानपुरा ध्यान ध्वनि",
        deityId: selectedDeity.id,
        deityName: selectedDeity.hindiName,
        category: "ambient",
        frequency: 432,
        durationSeconds: 300
      }
    };
  }, [selectedDeity, activeAartiItem]);
  const currentPlaybarTrack = deityAudioTracks[playbarMode];
  const isCurrentPlaybarTrackPlaying = isPlaying && activeTrack?.id === currentPlaybarTrack.id;
  const isAmbientFluteActive = isPlaying && activeTrack?.id === deityAudioTracks.ambient.id;
  const isMantraSpeaking = isPlaying && activeTrack?.id === deityAudioTracks.mantra.id;
  const canvasRef = reactExports.useRef(null);
  const petalsRef = reactExports.useRef([]);
  const animFrameIdRef = reactExports.useRef(null);
  const updateCanvasSize = reactExports.useCallback(() => {
    window.requestAnimationFrame(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      const nextW = Math.round(rect.width * dpr);
      const nextH = Math.round(rect.height * dpr);
      if (canvas.width !== nextW) canvas.width = nextW;
      if (canvas.height !== nextH) canvas.height = nextH;
    });
  }, []);
  reactExports.useEffect(() => {
    updateCanvasSize();
    const t = window.setTimeout(updateCanvasSize, 120);
    window.addEventListener("resize", updateCanvasSize);
    let ro = null;
    if (typeof ResizeObserver !== "undefined" && canvasRef.current) {
      ro = new ResizeObserver(() => updateCanvasSize());
      ro.observe(canvasRef.current);
    }
    return () => {
      window.clearTimeout(t);
      window.removeEventListener("resize", updateCanvasSize);
      if (ro) ro.disconnect();
    };
  }, [updateCanvasSize]);
  reactExports.useEffect(() => {
    let lastTime = performance.now();
    const loop = (nowTime) => {
      const dt = Math.min((nowTime - lastTime) / 1e3, 0.1);
      lastTime = nowTime;
      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext("2d");
        if (ctx) {
          const dpr = window.devicePixelRatio || 1;
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          const particles = petalsRef.current;
          for (let i = particles.length - 1; i >= 0; i--) {
            const p = particles[i];
            const bottomY = canvas.height / dpr - 72;
            const hasLanded = p.y >= bottomY;
            if (!hasLanded) {
              const windFlutter = Math.sin(nowTime * 32e-4 + p.angle * 1.4) * 0.55;
              p.x += (p.vx + windFlutter) * 60 * dt;
              p.y += p.vy * 60 * dt;
              p.angle += p.vAngle * 60 * dt;
              p.flip += p.vFlip * 60 * dt;
            } else {
              p.vy *= 0.25;
              p.vx *= 0.4;
              p.opacity -= 0.011 * (60 * dt);
            }
            if (p.opacity <= 0.01 || p.y > canvas.height / dpr + 40) {
              particles.splice(i, 1);
              continue;
            }
            ctx.save();
            ctx.translate(p.x * dpr, p.y * dpr);
            ctx.rotate(p.angle);
            ctx.scale(Math.cos(p.flip), 1);
            ctx.globalAlpha = Math.max(0, Math.min(1, p.opacity));
            if (p.type === "marigold") {
              const grad = ctx.createRadialGradient(0, 0, 1, 0, 0, p.size * dpr);
              grad.addColorStop(0, "#fef08a");
              grad.addColorStop(0.4, "#f59e0b");
              grad.addColorStop(1, "#ea580c");
              ctx.fillStyle = grad;
              ctx.beginPath();
              ctx.ellipse(0, 0, p.size * dpr * 0.75, p.size * dpr * 1.3, 0, 0, Math.PI * 2);
              ctx.fill();
            } else if (p.type === "rose") {
              const grad = ctx.createRadialGradient(0, -p.size * 0.2 * dpr, 1, 0, 0, p.size * dpr);
              grad.addColorStop(0, "#fda4af");
              grad.addColorStop(0.45, "#e11d48");
              grad.addColorStop(1, "#881337");
              ctx.fillStyle = grad;
              ctx.beginPath();
              ctx.arc(0, 0, p.size * dpr, 0, Math.PI * 2);
              ctx.fill();
            } else if (p.type === "belpatra") {
              ctx.fillStyle = "#16a34a";
              ctx.beginPath();
              ctx.ellipse(0, 0, p.size * dpr * 0.5, p.size * dpr * 1.4, 0, 0, Math.PI * 2);
              ctx.fill();
            } else {
              ctx.fillStyle = "#fbbf24";
              ctx.beginPath();
              ctx.arc(0, 0, p.size * dpr * 0.5, 0, Math.PI * 2);
              ctx.fill();
            }
            ctx.restore();
          }
        }
      }
      animFrameIdRef.current = requestAnimationFrame(loop);
    };
    animFrameIdRef.current = requestAnimationFrame(loop);
    return () => {
      if (animFrameIdRef.current) cancelAnimationFrame(animFrameIdRef.current);
    };
  }, []);
  const showToast = reactExports.useCallback((msg) => {
    setBlessingToast(msg);
    window.setTimeout(() => {
      setBlessingToast((curr) => curr === msg ? null : curr);
    }, 3200);
  }, []);
  const markSadhanaAction = reactExports.useCallback(
    (actionKey) => {
      let earnedFirstCompletionPunya = false;
      setSadhana((prev) => {
        const today = getTodayDateString();
        const isNewDay = prev.lastActiveDate !== today;
        let nextStreak = prev.streakDays;
        if (isNewDay) {
          const last = new Date(prev.lastActiveDate);
          const curr = new Date(today);
          const diffDays = Math.ceil(
            Math.abs(curr.getTime() - last.getTime()) / (1e3 * 60 * 60 * 24)
          );
          if (diffDays === 1) {
            nextStreak = prev.streakDays + 1;
          } else if (diffDays > 1) {
            nextStreak = 1;
          }
        } else if (!prev.todayCompleted) {
          nextStreak = prev.streakDays > 0 ? prev.streakDays : 1;
        }
        const nextTodayRituals = { ...prev.todayRituals };
        if (typeof nextTodayRituals[actionKey] === "number") {
          nextTodayRituals[actionKey] += 1;
        } else {
          nextTodayRituals[actionKey] = true;
        }
        const completed = Boolean(
          nextTodayRituals.diyaLit || nextTodayRituals.dhoopLit || nextTodayRituals.bellRungCount > 0 || nextTodayRituals.aartiPerformed
        );
        const nextState = {
          streakDays: nextStreak,
          totalLifetimeSadhana: prev.totalLifetimeSadhana + 1,
          lastActiveDate: today,
          todayRituals: nextTodayRituals,
          todayCompleted: completed,
          unlockedBadges: Array.from(/* @__PURE__ */ new Set([...prev.unlockedBadges, "आरम्भ साधक"]))
        };
        if (nextStreak >= 7 && !nextState.unlockedBadges.includes("सप्ताह व्रत सिद्ध")) {
          nextState.unlockedBadges.push("सप्ताह व्रत सिद्ध");
        }
        if (nextStreak >= 21 && !nextState.unlockedBadges.includes("संकल्प सिद्ध")) {
          nextState.unlockedBadges.push("संकल्प सिद्ध");
        }
        saveSadhanaState(nextState);
        if (!prev.todayCompleted && completed) {
          earnedFirstCompletionPunya = true;
        }
        return nextState;
      });
      if (earnedFirstCompletionPunya) {
        window.setTimeout(() => {
          const usr = currentUserRef.current;
          const updateFn = onUpdateAccountRef.current;
          if (usr && updateFn) {
            updateFn({
              ...usr,
              punyaPoints: (usr.punyaPoints || 0) + 1
            });
          }
        }, 0);
      }
    },
    []
  );
  const triggerPushpanjali = reactExports.useCallback(() => {
    vedicAudio.playPushpanjaliSound(0.7);
    updateCanvasSize();
    const canvas = canvasRef.current;
    const width = canvas ? canvas.width / (window.devicePixelRatio || 1) : 420;
    const newPetals = [];
    const count = 48;
    for (let i = 0; i < count; i++) {
      const typeChoice = Math.random();
      const type = typeChoice < 0.44 ? "marigold" : typeChoice < 0.78 ? "rose" : typeChoice < 0.9 ? "belpatra" : "gold_dust";
      newPetals.push({
        x: width * 0.1 + Math.random() * (width * 0.8),
        y: -8 - Math.random() * 110,
        vx: (Math.random() - 0.5) * 2,
        vy: 1.7 + Math.random() * 2.6,
        size: type === "gold_dust" ? 4 + Math.random() * 4 : 7 + Math.random() * 9,
        angle: Math.random() * Math.PI * 2,
        vAngle: (Math.random() - 0.5) * 0.08,
        flip: Math.random() * Math.PI,
        vFlip: 0.05 + Math.random() * 0.08,
        type,
        opacity: 0.96,
        decay: 2e-3
      });
    }
    petalsRef.current.push(...newPetals);
    markSadhanaAction("flowersCount");
    showToast(
      tr(
        "पुष्प वर्षा व पुष्पांजलि अर्पित! प्रभु आपकी मनोकामना पूर्ण करें।",
        "Pushpanjali offered! May the Divine bless you."
      )
    );
  }, [markSadhanaAction, showToast, tr, updateCanvasSize]);
  const handleToggleDiya = reactExports.useCallback(() => {
    const nextDiya = !sadhana.todayRituals.diyaLit;
    if (nextDiya) {
      vedicAudio.playDiyaLightSound(0.75);
      showToast(
        tr(
          "अखण्ड ज्योति प्रज्वलित हुई! आपका अंतर्मन प्रकाशित हो।",
          "Akhand Diya lit! May your inner light shine."
        )
      );
      markSadhanaAction("diyaLit");
    } else {
      vedicAudio.playClickSpark(0.3);
      setSadhana((prev) => {
        const updated = {
          ...prev,
          todayRituals: { ...prev.todayRituals, diyaLit: false }
        };
        saveSadhanaState(updated);
        return updated;
      });
      showToast(
        tr("अखण्ड दीपक शांत किया गया (पुनः जलाने हेतु स्पर्श करें)", "Diya turned off")
      );
    }
  }, [sadhana.todayRituals.diyaLit, markSadhanaAction, showToast, tr]);
  const handleToggleDhoop = reactExports.useCallback(() => {
    const nextDhoop = !isDhoopActive;
    setIsDhoopActive(nextDhoop);
    if (nextDhoop) {
      vedicAudio.playDiyaLightSound(0.65);
      showToast(
        tr(
          "सुगंधित गुग्गुल-चन्दन धूप प्रज्वलित! मंदिर प्रांगण सुवासित हुआ।",
          "Sugandhit Dhoop lit! Sacred incense fragrance invoked."
        )
      );
      markSadhanaAction("dhoopLit");
    } else {
      vedicAudio.playClickSpark(0.25);
      setSadhana((prev) => {
        const updated = {
          ...prev,
          todayRituals: { ...prev.todayRituals, dhoopLit: false }
        };
        saveSadhanaState(updated);
        return updated;
      });
      showToast(
        tr("सुगंधित धूप/अगरबत्ती बंद की गई", "Incense turned off")
      );
    }
  }, [isDhoopActive, markSadhanaAction, showToast, tr]);
  const handleRingBell = reactExports.useCallback(() => {
    setBellRingTick((prev) => prev + 1);
    playBell();
    markSadhanaAction("bellRungCount");
    showToast(
      tr(
        "पावन मंदिर घंटी नाद! सकारात्मक ऊर्जा का संचार हुआ।",
        "Holy Temple Bell resonated! Positive energy awakened."
      )
    );
  }, [playBell, markSadhanaAction, showToast, tr]);
  const handleOpenSpecialDarshan = reactExports.useCallback(() => {
    setBellRingTick((prev) => prev + 1);
    playBell();
    setSpecialDarshanExpiresAt(Date.now() + 5 * 60 * 1e3);
    setIsPatOpen(true);
    showToast(
      tr(
        "🙏 विशेष अनुरोध पर दिव्य दर्शन हेतु पट खुल गए (५ मिनट तक खुले रहेंगे)।",
        "Special Darshan curtains opened for 5 minutes with temple bell."
      )
    );
  }, [playBell, showToast, tr]);
  const handleCloseSpecialDarshan = reactExports.useCallback(() => {
    vedicAudio.playClickSpark(0.25);
    setSpecialDarshanExpiresAt(null);
    setIsPatOpen(false);
    setIsAartiSpinning(false);
    showToast(
      tr(
        "मंदिर के पट श्री भगवान के विश्राम हेतु पुनः बंद किए गए।",
        "Sanctum curtains closed for Bhagwan Vishram."
      )
    );
  }, [showToast, tr]);
  const handlePerformAarti = reactExports.useCallback(() => {
    if (!praharInfo.isScheduledOpen && !isPatOpen) {
      setBellRingTick((prev) => prev + 1);
      playBell();
      setSpecialDarshanExpiresAt(Date.now() + 5 * 60 * 1e3);
    }
    setIsPatOpen(true);
    setIsAartiSpinning(true);
    setPlaybarMode("aarti");
    playTrack(deityAudioTracks.aarti);
    markSadhanaAction("aartiPerformed");
    showToast(
      tr(
        `${selectedDeity.hindiName} की दिव्य पंचमुखी आरती आरम्भ! प्रभु की कृपा आप पर सदा रहे।`,
        `Divine Panchmukhi Aarti of ${selectedDeity.name} started!`
      )
    );
    if (aartiTimerRef.current) window.clearTimeout(aartiTimerRef.current);
    aartiTimerRef.current = window.setTimeout(() => {
      setIsAartiSpinning(false);
    }, 8400);
  }, [
    deityAudioTracks.aarti,
    isPatOpen,
    markSadhanaAction,
    playBell,
    playTrack,
    praharInfo.isScheduledOpen,
    selectedDeity,
    showToast,
    tr
  ]);
  const handleBlowShankh = reactExports.useCallback(() => {
    vedicAudio.playShankh();
    showToast(
      tr(
        "ॐ शंखनाद! समस्त अमंगल व वास्तु दोष दूर हों।",
        "Sacred Shankhnaad! Auspicious vibrations invoked."
      )
    );
  }, [showToast, tr]);
  const handleToggleMantraVoice = reactExports.useCallback(() => {
    setPlaybarMode("mantra");
    toggleTrack(deityAudioTracks.mantra);
    markSadhanaAction("mantraChanted");
  }, [deityAudioTracks.mantra, markSadhanaAction, toggleTrack]);
  const handleToggleAmbientAudio = reactExports.useCallback(() => {
    setPlaybarMode("ambient");
    if (isAmbientFluteActive) {
      stopAllAudio();
      showToast(tr("पृष्ठभूमि संगीत बंद किया गया", "Ambient audio muted"));
    } else {
      playTrack(deityAudioTracks.ambient);
      showToast(
        tr("शांत मंदिर बांसुरी व ॐ नाद आरम्भ हुआ", "Soothing Temple Flute & Om Chant started")
      );
    }
  }, [deityAudioTracks.ambient, isAmbientFluteActive, playTrack, showToast, stopAllAudio, tr]);
  const handleSelectDeity = reactExports.useCallback(
    (deity, isManualSelection = true) => {
      userManualSelectionRef.current = isManualSelection;
      vedicAudio.playClickSpark(0.25);
      if (isPlaying && activeTrack?.category !== "ambient") {
        stopAllAudio();
      }
      if (typeof Image !== "undefined" && deity.primaryImage) {
        const preloadImg = new Image();
        preloadImg.src = deity.primaryImage;
      }
      if (patSwapTimerRef.current) {
        window.clearTimeout(patSwapTimerRef.current);
        patSwapTimerRef.current = null;
      }
      if (patTimerRef.current) {
        window.clearTimeout(patTimerRef.current);
        patTimerRef.current = null;
      }
      const shouldStayOpen = praharInfo.isScheduledOpen || isSpecialDarshanActive;
      if (deity.id === selectedDeity.id) {
        isSwappingDeityRef.current = false;
        setIsSwappingDeity(false);
        if (shouldStayOpen) {
          setIsPatOpen(true);
        }
        return;
      }
      if (isPatOpen || isSwappingDeityRef.current) {
        isSwappingDeityRef.current = true;
        setIsSwappingDeity(true);
        setIsPatOpen(false);
        patSwapTimerRef.current = window.setTimeout(() => {
          setSelectedDeity(deity);
          setActiveDeityTab(deity.category);
          patTimerRef.current = window.setTimeout(() => {
            isSwappingDeityRef.current = false;
            setIsSwappingDeity(false);
            if (shouldStayOpen) {
              setIsPatOpen(true);
            } else {
              showToast(
                tr(
                  `${deity.hindiName} गर्भगृह में विराजमान हुए — विशेष दर्शन हेतु पट खोलें।`,
                  `${deity.name} selected — tap Special Darshan to open curtains.`
                )
              );
            }
          }, 140);
        }, 740);
        return;
      }
      isSwappingDeityRef.current = false;
      setIsSwappingDeity(false);
      setSelectedDeity(deity);
      setActiveDeityTab(deity.category);
      if (shouldStayOpen) {
        patTimerRef.current = window.setTimeout(() => {
          setIsPatOpen(true);
        }, 160);
      } else {
        showToast(
          tr(
            `${deity.hindiName} गर्भगृह में विराजमान हुए — विशेष दर्शन हेतु पट खोलें।`,
            `${deity.name} selected — tap Special Darshan to open curtains.`
          )
        );
      }
    },
    [
      activeTrack?.category,
      isPatOpen,
      isPlaying,
      isSpecialDarshanActive,
      praharInfo.isScheduledOpen,
      selectedDeity.id,
      showToast,
      stopAllAudio,
      tr
    ]
  );
  const handleSwipeDeity = reactExports.useCallback(
    (direction) => {
      const idx = SACRED_DEITIES_LIST.findIndex((d) => d.id === selectedDeity.id);
      const safeIdx = idx >= 0 ? idx : 0;
      const nextIdx = (safeIdx + direction + SACRED_DEITIES_LIST.length) % SACRED_DEITIES_LIST.length;
      const nextDeity = SACRED_DEITIES_LIST[nextIdx];
      if (nextDeity) {
        handleSelectDeity(nextDeity, true);
      }
    },
    [handleSelectDeity, selectedDeity.id]
  );
  const handleTogglePat = reactExports.useCallback(() => {
    if (patSwapTimerRef.current) {
      window.clearTimeout(patSwapTimerRef.current);
      patSwapTimerRef.current = null;
    }
    if (patTimerRef.current) {
      window.clearTimeout(patTimerRef.current);
      patTimerRef.current = null;
    }
    isSwappingDeityRef.current = false;
    setIsSwappingDeity(false);
    if (!praharInfo.isScheduledOpen) {
      if (isPatOpen) {
        handleCloseSpecialDarshan();
      } else {
        handleOpenSpecialDarshan();
      }
      return;
    }
    vedicAudio.playClickSpark(0.25);
    setIsPatOpen((prev) => !prev);
  }, [
    handleCloseSpecialDarshan,
    handleOpenSpecialDarshan,
    isPatOpen,
    praharInfo.isScheduledOpen
  ]);
  const handleChangeAmbience = reactExports.useCallback(
    (mode) => {
      vedicAudio.playClickSpark(0.25);
      setAmbienceMode(mode);
      showToast(
        mode === "morning" ? tr("प्रातः दिव्य दर्शन — स्वर्णिम आभा सक्रिय", "Morning Divine Darshan ambience active") : tr("संध्या महाआरती — दीपमय भक्ति वातावरण सक्रिय", "Evening Maha-Aarti ambience active")
      );
    },
    [showToast, tr]
  );
  const handleConfirmSankalp = reactExports.useCallback(() => {
    vedicAudio.playCrispTempleBell(0.75);
    const todayStr = getTodayDateString();
    try {
      localStorage.setItem("panditji_sankalp_date", todayStr);
      localStorage.setItem("panditji_sankalp_name", yajmanName.trim() || "भक्त यजमान");
    } catch {
    }
    setSankalpTakenToday(true);
    setSankalpModalOpen(false);
    markSadhanaAction("mantraChanted");
    showToast(
      tr(
        `"${yajmanName.trim() || "भक्त"}" का आज का वैदिक पूजा संकल्प ${selectedDeity.hindiName} के श्रीचरणों में समर्पित हुआ!`,
        `Vedic Sankalp dedicated to ${selectedDeity.name}!`
      )
    );
  }, [markSadhanaAction, selectedDeity.hindiName, selectedDeity.name, showToast, tr, yajmanName]);
  const renderMandirShareCard = reactExports.useCallback(
    async (kind, aspect) => {
      setIsGeneratingCard(true);
      try {
        const cleanName = yajmanName.trim();
        const isDefaultName = !cleanName || cleanName === "भक्त यजमान";
        const blessingTitle = kind === "blessing" ? `${selectedDeity.hindiName} का दिव्य आशीर्वाद` : `आज के पावन श्री डिजिटल मन्दिर दर्शन`;
        const blessingMessage = kind === "blessing" ? `${!isDefaultName ? `${cleanName} जी, ` : ""}${selectedDeity.significance} प्रभु की असीम कृपा से आपके परिवार में सुख, शांति, उत्तम स्वास्थ्य और समृद्धि का वास हो।` : `${selectedDeity.subTitle} — ${selectedDeity.symbolDescription} आज के पावन दर्शन व आरती का पुण्य लाभ प्राप्त करें।`;
        const card = await generateVedicShareCard(
          {
            variant: "mandir",
            badge: kind === "blessing" ? "दिव्य आशीर्वाद पत्र" : "आज के पावन मन्दिर दर्शन",
            title: selectedDeity.hindiName,
            subtitle: selectedDeity.subTitle,
            message: blessingMessage,
            shareUrl: "https://www.panditjionline.online/digital-mandir",
            fileNameSlug: `panditji-mandir-${selectedDeity.id}-${kind}`,
            mandirData: {
              deityName: selectedDeity.hindiName,
              deitySubtitle: selectedDeity.subTitle,
              deityImageSrc: selectedDeity.primaryImage,
              deityFallbackSrc: selectedDeity.fallbackImage,
              deityIcon: selectedDeity.deityIcon,
              panchangDateLine: `${todayPanchang.formattedDateHindi} • ${todayPanchang.vaarHindi}`,
              tithiLine: `${todayPanchang.hinduMaas} ${todayPanchang.paksha} ${todayPanchang.tithiName}${todayPanchang.festivalName ? ` • ${todayPanchang.festivalName}` : ""}`,
              blessingTitle,
              blessingMessage,
              mantraLine: selectedDeity.mantra,
              devoteeName: !isDefaultName ? cleanName : void 0,
              cardKind: kind
            }
          },
          aspect
        );
        setGeneratedCard(card);
      } catch (err) {
        console.error("Mandir card error:", err);
        showToast(tr("कार्ड निर्माण में त्रुटि हुई, कृपया पुनः प्रयास करें।", "Failed to generate card"));
      } finally {
        setIsGeneratingCard(false);
      }
    },
    [selectedDeity, showToast, todayPanchang, tr, yajmanName]
  );
  const openMandirCardModal = reactExports.useCallback(
    (kind) => {
      vedicAudio.playClickSpark(0.25);
      setMandirCardKind(kind);
      setMandirCardOpen(true);
      void renderMandirShareCard(kind, cardAspect);
    },
    [cardAspect, renderMandirShareCard]
  );
  const handleDownloadMandirCard = reactExports.useCallback(() => {
    if (!generatedCard) return;
    const link = document.createElement("a");
    link.href = generatedCard.dataUrl;
    link.download = generatedCard.fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast(tr("दिव्य दर्शन कार्ड डाउनलोड हो गया!", "Darshan Card downloaded!"));
  }, [generatedCard, showToast, tr]);
  const handleNativeShareMandirCard = reactExports.useCallback(async () => {
    if (!generatedCard) return;
    const shareTitle = `${selectedDeity.hindiName} — श्री डिजिटल मन्दिर दर्शन`;
    const shareText = `आज ${todayPanchang.formattedDateHindi} (${todayPanchang.tithiName}) को ${selectedDeity.hindiName} के पावन दर्शन व आरती करें:
मंत्र: ${selectedDeity.mantra}
https://www.panditjionline.online/digital-mandir`;
    try {
      if (navigator.share && generatedCard.blob) {
        const file = new File([generatedCard.blob], generatedCard.fileName, { type: "image/png" });
        if (!navigator.canShare || navigator.canShare({ files: [file] })) {
          await navigator.share({ title: shareTitle, text: shareText, files: [file] });
          return;
        }
      }
      if (navigator.share) {
        await navigator.share({
          title: shareTitle,
          text: shareText,
          url: "https://www.panditjionline.online/digital-mandir"
        });
        return;
      }
    } catch {
    }
    const waUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
  }, [generatedCard, selectedDeity.hindiName, selectedDeity.mantra, todayPanchang.formattedDateHindi, todayPanchang.tithiName]);
  const isTodaySpecialDeity = selectedDeity.id === todayDefaultDeity.id;
  const isDiyaLit = sadhana.todayRituals.diyaLit;
  const isSanctumImageBroken = Boolean(brokenImages[selectedDeity.id]);
  const showBlessingHighlight = Boolean(sadhana.todayRituals.aartiPerformed) || hasCompletedMalaToday || sankalpTakenToday;
  const filteredCategoryDeities = reactExports.useMemo(
    () => SACRED_DEITIES_LIST.filter((d) => d.category === activeDeityTab),
    [activeDeityTab]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: `relative w-full max-w-full overflow-x-hidden text-amber-100 min-h-screen py-3 sm:py-8 px-1.5 sm:px-6 transition-colors duration-700 ${ambienceMode === "morning" ? "bg-[#170e06]" : "bg-[#090604]"}`,
      children: [
        blessingToast && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed top-20 left-1/2 -translate-x-1/2 z-50 max-w-[92vw] px-4 py-2.5 rounded-full bg-gradient-to-r from-amber-900/95 via-yellow-900/95 to-amber-950/95 border border-amber-400 text-yellow-200 text-xs sm:text-sm font-bold shadow-[0_10px_35px_rgba(212,175,55,0.4)] animate-bounce backdrop-blur-md flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-4 h-4 text-amber-300 flex-shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: blessingToast })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `absolute top-12 left-1/2 -translate-x-1/2 w-[92vw] max-w-4xl h-[500px] rounded-full blur-[100px] pointer-events-none transition-all duration-700 ${ambienceMode === "morning" ? "bg-gradient-to-b from-amber-400/30 via-orange-500/15 to-transparent" : "bg-gradient-to-b from-amber-600/20 via-orange-700/10 to-transparent"}`
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto space-y-6 relative z-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: `relative rounded-2xl sm:rounded-3xl border-2 p-2 sm:p-6 pt-4 sm:pt-7 shadow-[0_20px_60px_rgba(0,0,0,0.9)] overflow-hidden text-center transition-colors duration-700 ${ambienceMode === "morning" ? "bg-gradient-to-b from-[#301909] via-[#211207] to-[#160b04] border-[#f59e0b]/80" : "bg-gradient-to-b from-[#1e1008] via-[#140b05] to-[#0c0703] border-[#d4af37]/70"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardFestiveLightStrip, { variant: "banner", archCount: 8 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 inset-x-0 h-10 bg-gradient-to-b from-amber-500/15 to-transparent pointer-events-none" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-2 mb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "dhwaja", className: "w-4 h-4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-3.5 sm:px-4 py-1 rounded-full bg-gradient-to-r from-amber-950 via-[#36210e] to-amber-950 border border-[#d4af37] text-yellow-300 text-xs sm:text-sm font-extrabold tracking-wider font-vedic shadow-lg inline-flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "swastika", className: "w-3.5 h-3.5" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr("श्री डिजिटल मन्दिर प्रांगण", "Shri Digital Mandir Sanctum") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "swastika", className: "w-3.5 h-3.5" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "dhwaja", className: "w-4 h-4" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-amber-500/15 border border-amber-400/40 text-[11px] font-bold text-amber-300 mb-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: isFestivalActive ? activeTheme.deityIcon : selectedDeity.deityIcon, className: "w-3.5 h-3.5" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: isFestivalActive ? `${activeTheme.subDayLabelHi || activeTheme.nameHi} • विशेष गर्भगृह दर्शन` : isTodaySpecialDeity ? tr(`आज का वार: ${selectedDeity.hindiDayName} विशेष दर्शन`, `Today's Presiding Deity (${selectedDeity.dayName})`) : `${selectedDeity.hindiDayName} पूज्य देव` })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl sm:text-3xl font-extrabold font-vedic text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-amber-300 to-yellow-500 drop-shadow-md", children: selectedDeity.hindiName }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs sm:text-sm text-amber-200/90 mt-1 max-w-lg mx-auto font-medium", children: [
                  isFestivalActive ? activeTheme.bannerGreetingHi : selectedDeity.subTitle,
                  " — ",
                  tr("नित्य दर्शन, आरती, घंटी नाद व दिव्य साधना", "Daily Darshan & Sacred Rituals")
                ] }),
                isFestivalActive && activeTheme.sacredMantra && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2.5 max-w-xl mx-auto p-2.5 rounded-2xl bg-black/45 border border-amber-400/45 flex flex-col sm:flex-row items-center justify-between gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-extrabold text-yellow-300 uppercase tracking-wider inline-flex items-center gap-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "lotus", className: "w-3.5 h-3.5" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                        activeTheme.subDayLabelHi || activeTheme.nameHi,
                        " — विशेष सिद्ध मंत्र:"
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs sm:text-sm font-extrabold font-vedic text-amber-100 block break-words leading-relaxed mt-0.5", children: [
                      "“",
                      activeTheme.sacredMantra,
                      "”"
                    ] })
                  ] }),
                  onOpenJaapMala && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => {
                        try {
                          window.__PJ_PRELOAD_FESTIVE_MANTRA__ = activeTheme.sacredMantra;
                          localStorage.setItem("panditji_custom_mantra_text", activeTheme.sacredMantra);
                          localStorage.setItem("panditji_custom_mantra_active", "true");
                        } catch {
                        }
                        vedicAudio.playCrispTempleBell(0.8);
                        onOpenJaapMala();
                      },
                      className: "px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 text-slate-950 font-black text-[11px] shrink-0 cursor-pointer shadow-md inline-flex items-center gap-1.5",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "mala", tone: "inherit", className: "w-3.5 h-3.5" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "१०८ पर्व मंत्र जप करें" })
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex flex-wrap items-center justify-center gap-2.5 pt-3 border-t border-amber-800/40", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: handleToggleAmbientAudio,
                      className: `px-3.5 py-2 rounded-xl border text-xs font-bold transition-all cursor-pointer flex items-center gap-2 shadow-md ${isAmbientFluteActive ? "bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 border-yellow-300" : "bg-slate-900/90 text-amber-200 border-amber-800/70 hover:border-amber-500"}`,
                      children: isAmbientFluteActive ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Volume2, { className: "w-4 h-4 animate-pulse" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr("बांसुरी व ॐ नाद चालू", "Flute & Om: ON") })
                      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(VolumeX, { className: "w-4 h-4 text-amber-400" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr("मंदिर बांसुरी संगीत सुनें", "Play Temple Flute") })
                      ] })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => {
                        vedicAudio.playClickSpark(0.25);
                        setSankalpModalOpen(true);
                      },
                      className: `px-3.5 py-2 rounded-xl border text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 shadow-md ${sankalpTakenToday ? "bg-emerald-950/85 border-emerald-400/70 text-emerald-200" : "bg-gradient-to-r from-amber-950/90 to-[#2b1707] border-amber-500/70 text-yellow-200 hover:border-yellow-300"}`,
                      children: [
                        sankalpTakenToday ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-4 h-4 text-emerald-300" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollText, { className: "w-4 h-4 text-amber-300" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: sankalpTakenToday ? tr("संकल्प सिद्ध (पुनः देखें)", "Sankalp Taken") : tr("वैदिक पूजा संकल्प लें", "Take Puja Sankalp") })
                      ]
                    }
                  ),
                  !isTodaySpecialDeity && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => handleSelectDeity(todayDefaultDeity, false),
                      className: "px-3 py-2 rounded-xl bg-amber-950/80 hover:bg-amber-900 border border-amber-600/60 text-amber-200 text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "w-3.5 h-3.5 text-amber-400" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr(`आज के देव (${todayDefaultDeity.hindiDayName})`, `Today's Deity`) })
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  DigitalMandirSanctum,
                  {
                    selectedDeity,
                    curtainTheme,
                    praharInfo,
                    isSanctumImageBroken,
                    onImageBroken: markImageBroken,
                    onSwipePrev: () => handleSwipeDeity(-1),
                    onSwipeNext: () => handleSwipeDeity(1),
                    ambienceMode,
                    onChangeAmbience: handleChangeAmbience,
                    isPatOpen,
                    isSwappingDeity,
                    onTogglePat: handleTogglePat,
                    isSpecialDarshanActive,
                    specialDarshanCountdown,
                    onOpenSpecialDarshan: handleOpenSpecialDarshan,
                    onCloseSpecialDarshan: handleCloseSpecialDarshan,
                    isBellRinging,
                    bellRingTick,
                    bellRungCount: sadhana.todayRituals.bellRungCount,
                    onRingBell: handleRingBell,
                    isAartiSpinning,
                    isDiyaLit,
                    isDhoopActive,
                    flowersOfferedCount: sadhana.todayRituals.flowersCount,
                    onToggleDiya: handleToggleDiya,
                    onToggleDhoop: handleToggleDhoop,
                    onOfferFlowers: triggerPushpanjali,
                    canvasRef,
                    tr
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 mb-2 flex flex-wrap items-center justify-center gap-2.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => openMandirCardModal("darshan"),
                      className: "px-4 py-2 rounded-xl bg-gradient-to-r from-[#2c1908] via-[#3a200b] to-[#2c1908] hover:from-amber-900 hover:to-amber-950 border border-[#d4af37]/75 text-yellow-200 text-xs sm:text-sm font-bold shadow-md transition-all cursor-pointer flex items-center gap-2",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { className: "w-4 h-4 text-theme-primary", strokeWidth: 1.5 }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr("आज के दर्शन शेयर करें", "Share Today’s Darshan") })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => openMandirCardModal("blessing"),
                      className: `px-4 py-2 rounded-xl border text-xs sm:text-sm font-extrabold shadow-md transition-all cursor-pointer flex items-center gap-2 ${showBlessingHighlight ? "bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-slate-950 border-yellow-200 shadow-[0_0_24px_rgba(245,158,11,0.45)] animate-pulse" : "bg-amber-950/75 hover:bg-amber-900/80 text-amber-200 border-amber-500/60"}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: `w-4 h-4 ${showBlessingHighlight ? "text-slate-950" : "text-theme-primary"}`, strokeWidth: 1.5 }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr("दिव्य आशीर्वाद कार्ड डाउनलोड करें", "Download Blessing Card") })
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 sm:grid-cols-5 gap-2.5 pt-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: handleToggleDiya,
                      className: `p-3 rounded-2xl border font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer hover:scale-[1.02] active:scale-95 flex flex-col items-center justify-center gap-1 ${isDiyaLit ? "bg-gradient-to-b from-amber-900/90 to-yellow-950 border-amber-400 text-yellow-200 shadow-[0_0_20px_rgba(245,158,11,0.3)]" : "bg-gradient-to-b from-amber-950/50 to-[#100b05] border-amber-800/60 text-amber-200"}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: `w-4 h-4 ${isDiyaLit ? "animate-pulse text-yellow-300 fill-amber-400" : "text-amber-400"}` }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: isDiyaLit ? tr("दीपक प्रज्वलित (बंद करें)", "Diya ON (Turn Off)") : tr("दीपक जलाएं", "Light Diya") }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-amber-300/80", children: isDiyaLit ? tr("अखण्ड ज्योति चालू", "Flame Lit") : tr("अखण्ड ज्योति जलाएं", "Sacred Lamp") })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: handleToggleDhoop,
                      className: `p-3 rounded-2xl border font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer hover:scale-[1.02] active:scale-95 flex flex-col items-center justify-center gap-1 ${isDhoopActive ? "bg-gradient-to-b from-orange-950/90 to-amber-950 border-orange-400 text-yellow-200 shadow-[0_0_20px_rgba(249,115,22,0.3)]" : "bg-gradient-to-b from-amber-950/50 to-[#100b05] border-amber-800/60 text-amber-200"}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Wind, { className: `w-4 h-4 ${isDhoopActive ? "animate-pulse text-orange-300" : "text-amber-400"}` }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: isDhoopActive ? tr("धूप चालू (बंद करें)", "Dhoop ON (Turn Off)") : tr("सुगंधित धूप", "Light Dhoop") }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-amber-300/80", children: isDhoopActive ? tr("अगरबत्ती प्रज्वलित", "Incense Lit") : tr("गुग्गुल-चन्दन", "Incense") })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: handleRingBell,
                      className: `p-3 rounded-2xl border font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer hover:scale-[1.02] active:scale-95 flex flex-col items-center justify-center gap-1 ${isBellRinging ? "bg-gradient-to-b from-yellow-800/90 to-amber-950 border-yellow-300 text-yellow-100" : "bg-gradient-to-b from-yellow-950/60 to-[#120d06] border-[#d4af37]/60 text-amber-100"}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Bell,
                          {
                            className: `w-4 h-4 text-yellow-300 ${isBellRinging ? "animate-bell-swing" : ""}`
                          },
                          isBellRinging ? `btn-bell-${bellRingTick}` : "btn-bell-idle"
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr("घंटी बजाएं", "Ring Bell") }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-amber-300/80", children: tr("पीतल घंटी नाद", "Temple Chime") })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: triggerPushpanjali,
                      className: "p-3 rounded-2xl bg-gradient-to-b from-rose-950/80 to-[#120509] border border-rose-500/50 text-rose-200 font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer hover:scale-[1.02] active:scale-95 flex flex-col items-center justify-center gap-1",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "lotus", tone: "inherit", className: "w-4 h-4 text-rose-300" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr("पुष्पांजलि अर्पण", "Offer Flowers") }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-rose-300/80", children: tr("पुष्प वर्षा", "Petal Shower") })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: handlePerformAarti,
                      className: "col-span-2 sm:col-span-1 p-3 rounded-2xl bg-gradient-to-b from-amber-600/30 via-amber-950/80 to-[#100a06] border border-amber-400/70 text-yellow-200 font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer hover:scale-[1.02] active:scale-95 flex flex-col items-center justify-center gap-1",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: `w-4 h-4 text-yellow-300 ${isAartiSpinning ? "animate-spin" : ""}` }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: isAartiSpinning ? tr("आरती हो रही है...", "Aarti Active...") : tr("आरती उतारें", "Perform Aarti") }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-amber-300/80", children: tr("थाली परिक्रमा", "Circular Aarti") })
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 rounded-2xl bg-gradient-to-r from-[#1c1107] via-[#261709] to-[#170e05] border border-[#d4af37]/65 p-3.5 sm:p-4 text-left shadow-[0_10px_30px_rgba(0,0,0,0.75)]", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-amber-800/40", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-400/50 flex items-center justify-center text-amber-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Music, { className: `w-4 h-4 ${isCurrentPlaybarTrackPlaying ? "animate-pulse text-yellow-300" : ""}` }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-extrabold uppercase tracking-wider text-amber-400", children: tr("लाइव आरती व मंत्र प्लेयर", "Live Aarti & Mantra Playbar") }),
                          isCurrentPlaybarTrackPlaying && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-400/50 text-emerald-300 text-[10px] font-bold", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr("चल रहा है", "Playing") })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm font-bold text-yellow-200 truncate max-w-[230px] sm:max-w-md", children: currentPlaybarTrack.title })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1.5 bg-black/50 p-1 rounded-xl border border-amber-900/50", children: [
                      { id: "aarti", label: tr("आरती", "Aarti") },
                      { id: "mantra", label: tr("बीज मंत्र", "Mantra") },
                      { id: "ambient", label: tr("बांसुरी धुन", "Flute") }
                    ].map((tab) => {
                      const active = playbarMode === tab.id;
                      return /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          type: "button",
                          onClick: () => {
                            setPlaybarMode(tab.id);
                            if (isPlaying) {
                              playTrack(deityAudioTracks[tab.id]);
                            }
                          },
                          className: `px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${active ? "bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 shadow" : "text-amber-200/80 hover:text-yellow-300"}`,
                          children: tab.label
                        },
                        tab.id
                      );
                    }) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex flex-col sm:flex-row sm:items-center gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between sm:justify-start gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          type: "button",
                          onClick: () => toggleTrack(currentPlaybarTrack),
                          className: `px-4 py-2 rounded-xl font-extrabold text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer shadow-md ${isCurrentPlaybarTrackPlaying ? "bg-emerald-500 hover:bg-emerald-400 text-slate-950" : "bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 hover:brightness-110 text-slate-950"}`,
                          children: isCurrentPlaybarTrackPlaying ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Pause, { className: "w-4 h-4 fill-current" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr("रोकें (Pause)", "Pause") })
                          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "w-4 h-4 fill-current" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: playbarMode === "aarti" ? tr("आरती चलाएं", "Play Aarti") : playbarMode === "mantra" ? tr("मंत्र सुनें", "Play Mantra") : tr("धुन चलाएं", "Play Flute") })
                          ] })
                        }
                      ),
                      isPlaying && /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          type: "button",
                          onClick: () => {
                            stopAllAudio();
                            setIsAartiSpinning(false);
                            if (aartiTimerRef.current) {
                              window.clearTimeout(aartiTimerRef.current);
                              aartiTimerRef.current = null;
                            }
                          },
                          className: "p-2 rounded-xl bg-amber-950/90 hover:bg-red-950/80 border border-amber-700/60 text-amber-200 hover:text-red-200 transition-colors cursor-pointer",
                          title: tr("ऑडियो रीसेट करें (Stop & Reset)", "Stop & Reset to 00:00"),
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Square, { className: "w-4 h-4 fill-current" })
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          type: "button",
                          onClick: toggleMute,
                          className: "p-2 rounded-xl bg-amber-950/80 hover:bg-amber-900 border border-amber-700/50 text-amber-200 transition-colors cursor-pointer",
                          title: isMuted ? tr("अनम्यूट करें", "Unmute") : tr("म्यूट करें", "Mute"),
                          children: isMuted ? /* @__PURE__ */ jsxRuntimeExports.jsx(VolumeX, { className: "w-4 h-4 text-rose-400" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Volume2, { className: "w-4 h-4 text-amber-300" })
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex items-center gap-2.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-mono text-amber-300 tabular-nums w-10 text-right", children: formatAudioTime(isCurrentPlaybarTrackPlaying ? currentTime : 0) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "input",
                        {
                          type: "range",
                          min: 0,
                          max: currentPlaybarTrack.durationSeconds || duration || 180,
                          value: isCurrentPlaybarTrackPlaying ? currentTime : 0,
                          disabled: !isCurrentPlaybarTrackPlaying,
                          onChange: (e) => seekTo(Number(e.target.value)),
                          "aria-label": tr("ऑडियो प्रगति बार", "Audio progress"),
                          className: `w-full h-1.5 bg-amber-950 rounded-lg appearance-none accent-amber-400 ${isCurrentPlaybarTrackPlaying ? "cursor-pointer" : "cursor-not-allowed opacity-55"}`
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-mono text-amber-400/80 tabular-nums w-10", children: formatAudioTime(currentPlaybarTrack.durationSeconds || duration) })
                    ] })
                  ] })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl bg-gradient-to-br from-[#18110b] to-[#0f0c08] border border-[#d4af37]/45 p-4 sm:p-6 shadow-xl space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-base sm:text-lg font-bold font-vedic text-amber-100", children: tr("अन्य देवी-देवताओं के दर्शन व पूजा", "Darshan of Sacred Deities") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-amber-300/80", children: tr(
                    "अपने इष्ट देव का चयन करें (या गर्भगृह पर स्वाइप करें) — नित्य, नवदुर्गा व पर्व विशेष अवतार",
                    "Select your Ishta Devta or swipe inside the Sanctum"
                  ) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-yellow-300 bg-yellow-950/90 px-3.5 py-1.5 rounded-full border border-yellow-400/60 self-start sm:self-auto font-bold shadow-sm flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-3.5 h-3.5 text-amber-400" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: todayPanchang.festivalName ? `${todayPanchang.festivalName} • ${todayDefaultDeity.hindiName}` : tr(`आज का वार: ${todayDefaultDeity.hindiDayName}`, `Today: ${todayDefaultDeity.dayName}`) })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap items-center gap-2 border-b border-amber-900/40 pb-3", children: [
                {
                  id: "daily_vaar",
                  label: tr("नित्य व वार देव (१०)", "Daily & Vaar (10)"),
                  icon: "temple"
                },
                {
                  id: "navdurga",
                  label: tr("नवदुर्गा — ९ देवियाँ", "Navdurga (9)"),
                  icon: "lotus"
                },
                {
                  id: "festival_special",
                  label: tr("पर्व एवं विशेष अवतार (५)", "Festival Avatars (5)"),
                  icon: "sparkles"
                }
              ].map((tab) => {
                const isActiveTab = activeDeityTab === tab.id;
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => setActiveDeityTab(tab.id),
                    className: `px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 border ${isActiveTab ? "bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 border-yellow-200 shadow-md" : "bg-[#120c07] text-amber-200/85 border-amber-800/50 hover:border-amber-500/70"}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: tab.icon, tone: isActiveTab ? "inherit" : "theme", className: "w-3.5 h-3.5" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tab.label })
                    ]
                  },
                  tab.id
                );
              }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5 sm:gap-3 pt-1", children: filteredCategoryDeities.map((deity) => {
                const isSelected = selectedDeity.id === deity.id;
                const isPrimaryToday = deity.id === todayDefaultDeity.id;
                const isWeekdayToday = !isPrimaryToday && deity.category === "daily_vaar" && deity.dayIndex === todayDayIndex && deity.dayName !== "Special";
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => handleSelectDeity(deity, true),
                    className: `relative p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-2.5 shadow-md group ${isSelected ? "bg-gradient-to-b from-amber-900/80 via-[#2a190b] to-[#170e06] border-[#d4af37] ring-2 ring-[#d4af37]/80 shadow-[0_0_25px_rgba(212,175,55,0.3)]" : isPrimaryToday ? "bg-gradient-to-b from-[#241609] to-[#120b05] border-amber-500/70 hover:border-yellow-400" : isWeekdayToday ? "bg-gradient-to-b from-[#1c1208] to-[#100a05] border-amber-700/60 hover:border-yellow-400" : "bg-[#120c07]/90 hover:bg-[#1c130a] border-amber-900/50 hover:border-amber-600/60"}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2 w-full", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: `w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden border border-[#d4af37]/80 ring-1 ring-amber-400/25 flex-shrink-0 bg-gradient-to-br ${deity.bannerGradient} shadow-lg flex items-center justify-center relative`,
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(DeityThumbImg, { deity })
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-end gap-1", children: [
                          isPrimaryToday && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-extrabold text-[10px] shadow-sm", children: tr("आज", "Today") }),
                          isWeekdayToday && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 rounded-full bg-amber-950/90 border border-amber-500/50 text-amber-200 font-bold text-[10px]", children: tr("वार देव", "Vaar") }),
                          isSelected && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-bold text-yellow-300 flex items-center gap-1", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr("दर्शन", "Active") })
                          ] })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs sm:text-sm font-bold text-amber-100 group-hover:text-yellow-300 font-vedic leading-snug line-clamp-2", children: deity.hindiName }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-amber-300/85 font-medium mt-0.5 flex items-center gap-1.5", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: deity.deityIcon, className: "w-3.5 h-3.5" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: deity.hindiDayName })
                        ] })
                      ] })
                    ]
                  },
                  deity.id
                );
              }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              DigitalMandirDanpatr,
              {
                onOfferSuccess: (amt) => {
                  showToast(
                    tr(
                      `₹${amt} गुप्त दान संकल्प हेतु UPI ऐप खुल रहा है! श्री बांके बिहारी जी आपकी मनोकामना पूर्ण करें।`,
                      `Opening UPI app for ₹${amt} Sacred Danpatr offering! May the Divine bless you.`
                    )
                  );
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(FestiveHairlineDivider, { variant: "section", className: "rounded-full my-4 shadow-sm" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3.5 sm:p-4 rounded-2xl bg-gradient-to-br from-[#1c1208] via-[#150d06] to-[#0f0904] border border-amber-600/50 flex items-center gap-3 shadow-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr from-amber-600 to-orange-500 text-slate-950 flex items-center justify-center flex-shrink-0 shadow-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "w-5 h-5 sm:w-6 sm:h-6 fill-current animate-pulse" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-amber-300 font-bold uppercase tracking-wider", children: tr("भक्ति संकल्प स्ट्रीक", "Bhakti Streak") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-base sm:text-lg font-extrabold text-yellow-300 font-mono leading-tight mt-0.5", children: [
                    sadhana.streakDays,
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-amber-200", children: tr("दिन लगातार", "Days") })
                  ] }),
                  !isLoggedIn && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: onOpenLoginModal,
                      className: "text-[10px] text-amber-400 hover:text-yellow-300 underline font-semibold mt-0.5 block cursor-pointer",
                      children: tr("नया यूज़र (0) — लॉगिन करें", "New User (0) — Login")
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3.5 sm:p-4 rounded-2xl bg-gradient-to-br from-[#1a130c] via-[#120d08] to-[#0c0805] border border-amber-600/50 flex items-center gap-3 shadow-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr from-yellow-500 to-amber-600 text-slate-950 flex items-center justify-center flex-shrink-0 shadow-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "w-5 h-5 sm:w-6 sm:h-6 fill-current" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-amber-300 font-bold uppercase tracking-wider", children: tr("कुल जीवन साधना", "Lifetime Sadhana") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-base sm:text-lg font-extrabold text-amber-100 font-mono leading-tight mt-0.5", children: [
                    sadhana.totalLifetimeSadhana,
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-amber-300/80", children: tr("बार", "Times") })
                  ] }),
                  !isLoggedIn ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: onOpenLoginModal,
                      className: "text-[10px] text-amber-400 hover:text-yellow-300 underline font-semibold mt-0.5 block cursor-pointer",
                      children: tr("नया यूज़र (0) — लॉगिन करें", "New User (0) — Login")
                    }
                  ) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-emerald-400 font-semibold block mt-0.5", children: tr("सहेजा गया डेटा", "Saved Account") })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3.5 sm:p-4 rounded-2xl bg-gradient-to-br from-[#241228] via-[#190b1c] to-[#100613] border border-purple-500/60 flex items-center gap-3 shadow-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr from-purple-500 to-indigo-600 text-white flex items-center justify-center flex-shrink-0 shadow-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-5 h-5 sm:w-6 sm:h-6" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-purple-300 font-bold tracking-wide", children: tr(`आज का वार: ${todayDefaultDeity.hindiDayName}`, `Today: ${todayDefaultDeity.dayName}`) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs sm:text-sm font-extrabold text-yellow-300 leading-snug mt-0.5", children: todayDefaultDeity.hindiName }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-purple-200/90 font-semibold mt-0.5", children: tr("आज के मुख्य पूज्य देव", "Presiding Deity Today") })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3.5 sm:p-4 rounded-2xl bg-gradient-to-br from-[#0c2419] via-[#071911] to-[#04100b] border border-emerald-500/60 flex items-center gap-3 shadow-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: `w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md ${sadhana.todayCompleted ? "bg-emerald-500 text-slate-950 font-bold" : "bg-emerald-950 border border-emerald-500/60 text-emerald-400"}`,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-5 h-5 sm:w-6 sm:h-6" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-emerald-300 font-bold tracking-wide", children: tr("दैनिक संकल्प", "Daily Sankalp") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs sm:text-sm font-extrabold text-white leading-snug mt-0.5", children: sadhana.todayCompleted ? tr("आज की साधना संपन्न", "Completed") : tr("दीपक / धूप / घंटी बजाएं", "Light Diya / Ring Bell") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-emerald-200/90 font-semibold mt-0.5", children: sadhana.todayCompleted ? tr("पुण्य लाभ प्राप्त हुआ", "Sadhana Complete") : tr("मन्दिर में पूजा आरम्भ करें", "Perform Ritual") })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl bg-gradient-to-br from-[#1a130b] via-[#120d08] to-[#0c0906] border border-[#d4af37]/45 p-5 sm:p-6 shadow-xl space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-3 border-b border-amber-900/40 pb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-9 h-9 rounded-lg icon-box-theme border flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "lotus", className: "w-5 h-5" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base sm:text-lg font-bold font-vedic text-yellow-300", children: tr(`${selectedDeity.hindiName} का दिव्य ध्यान मन्त्र व श्लोक`, `Divine Mantra & Shloka`) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-amber-300/80", children: selectedDeity.shlokaRef })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: handleBlowShankh,
                      className: "px-3 py-1.5 rounded-xl bg-amber-950/80 hover:bg-amber-900 border border-amber-600/60 text-amber-200 text-xs font-semibold cursor-pointer transition-all flex items-center gap-1.5",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "shankh", className: "w-3.5 h-3.5" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr("शंखनाद", "Shankh") })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: handleToggleMantraVoice,
                      className: `px-3.5 py-1.5 rounded-xl border text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${isMantraSpeaking ? "bg-amber-500 text-slate-950 border-yellow-300" : "bg-amber-900/60 text-yellow-300 border-amber-500/60 hover:bg-amber-900"}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Volume2, { className: `w-4 h-4 ${isMantraSpeaking ? "animate-pulse" : ""}` }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: isMantraSpeaking ? tr("रोकें", "Stop") : tr("मंत्र सुनें", "Listen") })
                      ]
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-2xl bg-black/50 border border-amber-800/40 space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase font-bold text-amber-400 tracking-wider", children: tr("वैदिक बीज मन्त्र", "Vedic Bija Mantra") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base sm:text-lg font-bold font-vedic text-amber-100 leading-relaxed", children: selectedDeity.mantra }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs sm:text-sm text-amber-200/90 leading-relaxed italic pt-2 border-t border-amber-900/30", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-amber-300 not-italic font-semibold", children: tr("भावार्थ: ", "Meaning: ") }),
                  selectedDeity.mantraMeaning
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-2xl bg-[#140e09]/80 border border-amber-900/50 space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase font-bold text-yellow-400 tracking-wider", children: tr("पावन स्तुति श्लोक", "Sacred Stuti Shloka") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm font-semibold font-vedic text-amber-200 leading-relaxed", children: selectedDeity.shloka }),
                selectedDeity.shlokaMeaning && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-amber-100/90 leading-relaxed italic pt-2 border-t border-amber-900/30", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-yellow-300 not-italic font-semibold", children: tr("श्लोक अर्थ (भावार्थ): ", "Shloka Meaning: ") }),
                  selectedDeity.shlokaMeaning
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-2 border-t border-amber-900/30 flex flex-wrap items-center justify-between text-xs text-amber-300/90 gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: tr("पुण्य फल: ", "Merit: ") }),
                    selectedDeity.significance
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: tr("प्रिय भोग: ", "Prasad: ") }),
                    selectedDeity.favPrasad
                  ] })
                ] })
              ] }),
              onOpenJaapMala && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-2 p-3.5 rounded-xl bg-amber-950/60 border border-amber-800/50", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs sm:text-sm text-amber-200", children: tr(
                  "इस मन्त्र की १०८ मनका रुद्राक्ष माला जप करें:",
                  "Chant 108 Rudraksha Jaap Mala:"
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: onOpenJaapMala,
                    className: "px-3.5 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs cursor-pointer transition-colors whitespace-nowrap shadow",
                    children: tr("१०८ जप माला खोलें", "Open 108 Jaap Mala")
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl bg-gradient-to-br from-[#19110a] to-[#0e0a06] border border-amber-700/50 p-5 sm:p-6 shadow-xl", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => setShowAartiDrawer((prev) => !prev),
                  className: "w-full flex items-center justify-between text-left cursor-pointer",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-amber-500/20 text-yellow-400 border border-amber-400/30 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-5 h-5" }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-base sm:text-lg font-bold font-vedic text-yellow-300", children: tr(
                          `${activeAartiItem.title} (सम्पूर्ण पाठ व अर्थ)`,
                          `${activeAartiItem.title} (Complete Text)`
                        ) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-amber-300/80", children: activeAartiItem.tagline })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 shrink-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-amber-400 font-bold hidden sm:inline", children: showAartiDrawer ? tr("संक्षिप्त करें", "Collapse") : tr("सम्पूर्ण पाठ पढ़ें", "Read Aarti") }),
                      showAartiDrawer ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-5 h-5 text-amber-400" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-5 h-5 text-amber-400" })
                    ] })
                  ]
                }
              ),
              showAartiDrawer && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 pt-4 border-t border-amber-900/50 space-y-4 animate-fadeIn", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-2 px-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-bold text-amber-300 font-vedic inline-flex items-center gap-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "scroll", className: "w-3.5 h-3.5" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr("सम्पूर्ण प्रामाणिक पाठ:", "Complete Sacred Text:") })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => {
                        setPlaybarMode("aarti");
                        playTrack(deityAudioTracks.aarti);
                      },
                      className: "px-3 py-1.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-400/50 text-yellow-300 text-xs font-bold flex items-center gap-1.5 cursor-pointer transition-all",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Volume2, { className: "w-3.5 h-3.5" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr("सम्पूर्ण आरती व अर्थ सुनें", "Listen to Full Aarti & Meaning") })
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 sm:p-5 rounded-2xl bg-black/70 border border-amber-800/50 max-h-[520px] overflow-y-auto space-y-2.5 scrollbar-thin scrollbar-thumb-amber-600/40", children: activeAartiItem.lyrics.map((line, idx) => {
                  const isHeading = line.startsWith("॥");
                  const isDoha = line.startsWith("दोहा:") || line.startsWith("सोरठा:");
                  return /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: `text-xs sm:text-sm font-vedic leading-relaxed ${isHeading ? "text-yellow-300 font-extrabold bg-amber-950/60 px-3 py-1.5 rounded-lg border border-amber-600/40 text-center my-2" : isDoha ? "text-amber-200 font-bold bg-amber-950/35 px-3 py-2 rounded-lg border border-amber-800/40" : "text-amber-100"}`,
                      children: line
                    },
                    idx
                  );
                }) }),
                activeAartiItem.meaning && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 sm:p-5 rounded-2xl bg-amber-950/45 border border-amber-600/45 space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("h5", { className: "text-xs sm:text-sm font-extrabold font-vedic text-yellow-300 flex items-center gap-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-4 h-4 text-amber-400 shrink-0" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr("सम्पूर्ण हिन्दी अर्थ एवं भावार्थ:", "Complete Meaning & Essence:") })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm text-amber-100/95 leading-relaxed whitespace-pre-line font-vedic", children: activeAartiItem.meaning })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between text-xs text-amber-300/90 gap-3 p-3.5 rounded-xl bg-amber-950/60 border border-amber-900/40", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "block", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: tr("महत्व: ", "Significance: ") }),
                      activeAartiItem.significance
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "block text-amber-200/80", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: tr("पूजा विधि व शुभ दिन: ", "Puja Vidhi & Auspicious Day: ") }),
                      activeAartiItem.vidhi,
                      " (",
                      activeAartiItem.shubhDay,
                      ")"
                    ] })
                  ] }),
                  onOpenGyanKoshCategory && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => onOpenGyanKoshCategory("aarti-chalisa"),
                      className: "text-amber-400 hover:text-yellow-300 font-bold cursor-pointer underline flex items-center gap-1 shrink-0",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr("अन्य सभी आरती व चालीसा देखें", "View All Aartis & Chalisas") })
                    }
                  )
                ] })
              ] })
            ] })
          ] })
        ] }),
        sankalpModalOpen && typeof document !== "undefined" && reactDomExports.createPortal(
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-[10000] flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-md", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-lg rounded-3xl bg-gradient-to-b from-[#231409] via-[#170d05] to-[#0e0803] border-2 border-[#d4af37] shadow-[0_25px_70px_rgba(0,0,0,0.95)] p-5 sm:p-6 text-amber-100 relative max-h-[92vh] overflow-y-auto", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setSankalpModalOpen(false),
                "aria-label": "बंद करें",
                className: "absolute top-3.5 right-3.5 p-2 rounded-full bg-amber-950/90 hover:bg-amber-900 border border-amber-500/50 text-amber-200 cursor-pointer",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-1.5 mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/50 text-yellow-300 text-[11px] font-bold", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollText, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr("शास्त्रीय वैदिक पूजा संकल्प", "Authentic Vedic Puja Sankalp") })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-lg sm:text-xl font-extrabold font-vedic text-yellow-300", children: [
                selectedDeity.hindiName,
                " आराधना संकल्प"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-amber-200/80", children: "आज के शुद्ध दृक गणित पंचांग के अनुसार अपना नाम व स्थान जोड़कर संकल्प लें" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[11px] font-bold text-amber-300 mb-1", children: "यजमान का नाम" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "text",
                    value: yajmanName,
                    onChange: (e) => setYajmanName(e.target.value),
                    placeholder: "अपना नाम लिखें...",
                    className: "w-full px-3 py-2 rounded-xl bg-black/60 border border-amber-600/60 text-amber-100 text-xs sm:text-sm focus:outline-none focus:border-yellow-400"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[11px] font-bold text-amber-300 mb-1", children: "निवास नगर / क्षेत्र" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "text",
                    value: yajmanCity,
                    onChange: (e) => setYajmanCity(e.target.value),
                    placeholder: "शहर का नाम...",
                    className: "w-full px-3 py-2 rounded-xl bg-black/60 border border-amber-600/60 text-amber-100 text-xs sm:text-sm focus:outline-none focus:border-yellow-400"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-2xl bg-black/55 border border-amber-700/50 space-y-2.5 text-xs sm:text-sm leading-relaxed", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-extrabold text-yellow-400 uppercase tracking-wider", children: "संस्कृत वैदिक संकल्प पाठ:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-vedic text-yellow-100 font-semibold", children: [
                "ॐ विष्णुर्विष्णुर्विष्णुः। अद्य ब्रह्मणोऽह्नि द्वितीयपरार्धे श्रीश्वेतवाराहकल्पे वैवस्वतमन्वन्तरे अष्टाविंशतितमे कलियुगे कलिप्रथमचरणे जम्बूद्वीपे भारतवर्षे भरतखण्डे ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-yellow-300", children: yajmanCity || "भारत" }),
                " नाम्नि स्थाने, विक्रम संवत् ",
                /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { className: "text-yellow-300", children: [
                  todayPanchang.vikramSamvat,
                  " (",
                  todayPanchang.vikramSamvatsarName,
                  ")"
                ] }),
                ", ",
                todayPanchang.ayana,
                "े, ",
                todayPanchang.ritu,
                " ऋतौ, ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-yellow-300", children: todayPanchang.hinduMaas }),
                " मासे, ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-yellow-300", children: todayPanchang.paksha }),
                ", ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-yellow-300", children: todayPanchang.tithiName }),
                " तिथौ, ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-yellow-300", children: todayPanchang.vaarHindi }),
                " वासरे, ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-yellow-300", children: todayPanchang.nakshatra }),
                " नक्षत्रे, मम (",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-yellow-300", children: yajmanName.trim() || "भक्त यजमान" }),
                ") सकल परिवारस्य सुख-शान्ति-आरोग्य-सौभाग्य सिद्ध्यर्थं अद्य ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-yellow-300", children: selectedDeity.hindiName }),
                " प्रीत्यर्थं पूजनं, ध्यानं, स्तुतिं च अहं करिष्ये॥"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-2 border-t border-amber-900/40 text-xs text-amber-200/90", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "सरल हिन्दी भावार्थ:" }),
                " आज ",
                todayPanchang.formattedDateHindi,
                " (",
                todayPanchang.hinduMaas,
                " ",
                todayPanchang.paksha,
                " ",
                todayPanchang.tithiName,
                ", ",
                todayPanchang.vaarHindi,
                ", ",
                todayPanchang.nakshatra,
                " नक्षत्र) को मैं ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: yajmanName.trim() || "भक्त यजमान" }),
                " (",
                yajmanCity || "भारत",
                " निवासी) अपने समस्त परिवार के कल्याण, उत्तम स्वास्थ्य व शांति हेतु ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: selectedDeity.hindiName }),
                " की पावन पूजा व आरती का संकल्प लेता/लेती हूँ।"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex flex-wrap items-center justify-end gap-2.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setSankalpModalOpen(false),
                  className: "px-4 py-2 rounded-xl bg-amber-950/80 border border-amber-700/60 text-amber-200 text-xs font-bold cursor-pointer",
                  children: "बंद करें"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: handleConfirmSankalp,
                  className: "px-5 py-2 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-slate-950 font-extrabold text-xs sm:text-sm shadow-lg cursor-pointer flex items-center gap-1.5",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-4 h-4" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "संकल्प समर्पित करें (ॐ तत्सत्)" })
                  ]
                }
              )
            ] })
          ] }) }),
          document.body
        ),
        mandirCardOpen && typeof document !== "undefined" && reactDomExports.createPortal(
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-[10000] flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-md", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-md rounded-3xl bg-gradient-to-b from-[#231409] via-[#150c05] to-[#0c0703] border-2 border-[#d4af37] shadow-[0_25px_75px_rgba(0,0,0,0.95)] p-4 sm:p-5 text-amber-100 relative max-h-[94vh] overflow-y-auto", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setMandirCardOpen(false),
                "aria-label": "बंद करें",
                className: "absolute top-3 right-3 p-2 rounded-full bg-amber-950/90 hover:bg-amber-900 border border-amber-500/50 text-amber-200 cursor-pointer",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4", strokeWidth: 1.5 })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-1 mb-3 pr-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-base sm:text-lg font-extrabold font-vedic text-yellow-300 inline-flex items-center justify-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: mandirCardKind === "blessing" ? "sparkles" : "temple", className: "w-4 h-4" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: mandirCardKind === "blessing" ? "दिव्य आशीर्वाद कार्ड" : "आज के पावन दर्शन कार्ड" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-amber-200/80", children: [
                selectedDeity.hindiName,
                " • ",
                todayPanchang.tithiName,
                " • QR कोड सहित"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center gap-2 mb-3", children: [
              { id: "9:16", label: "Status / Reel (9:16)" },
              { id: "1:1", label: "Square Post (1:1)" }
            ].map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  setCardAspect(opt.id);
                  void renderMandirShareCard(mandirCardKind, opt.id);
                },
                className: `px-3 py-1.5 rounded-xl text-[11px] font-bold border cursor-pointer transition-all ${cardAspect === opt.id ? "bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 border-yellow-200" : "bg-black/50 text-amber-200 border-amber-700/60 hover:border-amber-400"}`,
                children: opt.label
              },
              opt.id
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl bg-black/60 border border-amber-700/50 p-2 flex items-center justify-center min-h-[260px]", children: isGeneratingCard ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-16 text-center space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-7 h-7 text-theme-primary animate-spin mx-auto", strokeWidth: 1.5 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-amber-200 font-semibold", children: "दिव्य दर्शन कार्ड तैयार हो रहा है..." })
            ] }) : generatedCard ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: generatedCard.dataUrl,
                alt: "Mandir Darshan Card",
                width: 1080,
                height: cardAspect === "9:16" ? 1920 : 1080,
                loading: "lazy",
                decoding: "async",
                className: "max-h-[48vh] w-auto rounded-xl shadow-lg object-contain"
              }
            ) : null }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex flex-wrap items-center justify-center gap-2.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  disabled: !generatedCard || isGeneratingCard,
                  onClick: handleDownloadMandirCard,
                  className: "flex-1 min-w-[140px] px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-slate-950 font-extrabold text-xs sm:text-sm shadow-lg cursor-pointer disabled:opacity-50 flex items-center justify-center gap-1.5",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-4 h-4", strokeWidth: 1.5 }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "PNG डाउनलोड करें" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  disabled: !generatedCard || isGeneratingCard,
                  onClick: handleNativeShareMandirCard,
                  className: "flex-1 min-w-[140px] px-4 py-2.5 rounded-xl bg-[#16A34A] hover:bg-[#15803D] text-white font-extrabold text-xs sm:text-sm shadow-lg cursor-pointer disabled:opacity-50 flex items-center justify-center gap-1.5",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(VedicWhatsAppSvg, { className: "w-4 h-4" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "WhatsApp / शेयर करें" })
                  ]
                }
              )
            ] })
          ] }) }),
          document.body
        )
      ]
    }
  );
};
export {
  DigitalMandirSection
};
