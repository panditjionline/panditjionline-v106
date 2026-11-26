const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ShashankSharmaChat-Bh1Ne6Q_.js","assets/vendor-react-CCbeDaYX.js","assets/index-CUAFR0Uq.js","assets/vendor-pdf-CpPyS1re.js","assets/vendor-icons-Bk5Rg8-9.js","assets/panchang-core-WfwKNTXG.js","assets/vendor-astronomy-C8JZdkQu.js","assets/seo-core-uu9B2jSm.js","assets/index-B0vJS_48.css","assets/UserAvatar-DPD6_vjs.js","assets/AdminGeminiKeyManager-Cf7qEFhB.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from "./vendor-pdf-CpPyS1re.js";
import { r as reactExports, j as jsxRuntimeExports, R as React } from "./vendor-react-CCbeDaYX.js";
import { u as useLanguage, P as PanditPortrait } from "./index-CUAFR0Uq.js";
import { S as Sparkles, t as MessageCircle, a1 as MapPin, X } from "./vendor-icons-Bk5Rg8-9.js";
import "./panchang-core-WfwKNTXG.js";
import "./vendor-astronomy-C8JZdkQu.js";
import "./seo-core-uu9B2jSm.js";
const LazyShashankSharmaChat = React.lazy(
  () => __vitePreload(() => import("./ShashankSharmaChat-Bh1Ne6Q_.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]) : void 0).then((m) => ({ default: m.ShashankSharmaChat }))
);
const FloatingChatDrawer = ({
  onNavigateToTab,
  onOpenBookingWithService,
  currentUser,
  onUpdateChatMessages,
  onOpenLoginModal
}) => {
  const { tr } = useLanguage();
  const [isOpen, setIsOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (!isOpen) return;
    try {
      window.history.pushState(
        { modal: "chat-drawer", isPanditJiApp: true },
        "",
        window.location.pathname + window.location.search
      );
    } catch (e) {
    }
    const handlePop = (e) => {
      setIsOpen(false);
    };
    window.addEventListener("popstate", handlePop);
    return () => {
      window.removeEventListener("popstate", handlePop);
    };
  }, [isOpen]);
  const handleClose = reactExports.useCallback(() => {
    if (typeof window !== "undefined" && window.history.state?.modal === "chat-drawer") {
      window.history.back();
    } else {
      setIsOpen(false);
    }
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    !isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed bottom-[62px] right-2.5 md:bottom-5 md:right-5 z-30 flex items-center pointer-events-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        onClick: () => setIsOpen(true),
        className: "group relative flex items-center gap-1.5 sm:gap-2 pl-1 pr-2.5 py-1 sm:pl-2 sm:pr-4 sm:py-2 rounded-full bg-gradient-to-r from-[#281607]/95 via-[#381f0a]/95 to-[#241406]/95 hover:from-[#361e09] hover:to-[#2e1a08] text-amber-50 font-bold shadow-lg border border-amber-400/90 sm:border-2 hover:border-yellow-300 transition-all duration-200 cursor-pointer backdrop-blur-xs",
        title: tr("पण्डित शशांक शर्मा ज्योतिष चैट खोलें", "Open Pandit Shashank Sharma Jyotish Chat", "Pandit Shashank Sharma Jyotish Chat Kholein"),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(PanditPortrait, { size: "xs", showBadge: false, className: "sm:hidden" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(PanditPortrait, { size: "sm", showBadge: false, className: "hidden sm:inline-flex" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "absolute -bottom-0.5 -right-0.5 w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-emerald-400 ring-1 sm:ring-2 ring-slate-950 flex items-center justify-center",
                title: tr("ऑनलाइन उपलब्ध", "Available Online", "Online Uplabdh")
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative text-left", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "hidden sm:flex items-center gap-1 text-[10px] font-bold text-amber-300 uppercase tracking-wide whitespace-nowrap", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-2.5 h-2.5 text-yellow-400 flex-shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr("वैदिक ज्योतिष परामर्श", "Vedic Astrology Guidance", "Vedic Jyotish Paramarsh") })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] sm:text-sm font-extrabold font-vedic text-amber-100 leading-tight block whitespace-nowrap", children: tr("ज्योतिष चैट", "Jyotish Chat", "Jyotish Chat") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative w-5 h-5 sm:w-8 sm:h-8 rounded-full bg-gradient-to-tr from-amber-600 via-amber-500 to-yellow-400 text-slate-950 flex items-center justify-center shadow-sm flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-3 h-3 sm:w-4 sm:h-4 text-slate-950 fill-slate-950/15" }) })
        ]
      }
    ) }),
    isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:justify-end pt-3 sm:p-5 bg-black/75 backdrop-blur-xs overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full sm:max-w-lg h-[82dvh] max-h-[calc(100dvh-16px)] sm:h-[660px] sm:max-h-[calc(100dvh-40px)] bg-[#0c1220] border-2 border-amber-500/70 rounded-t-3xl sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-slideUp", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-shrink-0 bg-gradient-to-r from-[#241307] via-[#181009] to-[#0f172a] px-3.5 py-2.5 sm:px-4 sm:py-3 border-b border-amber-600/50 flex items-center justify-between gap-2.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5 sm:gap-3 min-w-0 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(PanditPortrait, { size: "sm", showBadge: true, className: "sm:hidden" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(PanditPortrait, { size: "md", showBadge: true, className: "hidden sm:inline-flex" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 flex-wrap", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xs sm:text-base font-extrabold font-vedic text-amber-100 truncate", children: tr("आचार्य पण्डित शशांक शर्मा", "Acharya Pandit Shashank Sharma", "Acharya Pandit Shashank Sharma") }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 text-[9.5px] sm:text-[10px] px-1.5 sm:px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/40 flex-shrink-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" }),
                tr("प्रत्यक्ष", "Online", "Online")
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10.5px] sm:text-[11px] text-amber-300/90 font-medium truncate flex items-center gap-1 mt-0.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-3 h-3 text-amber-400 flex-shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: tr(
                "वैदिक पुरोहित एवं ज्योतिषाचार्य • रुद्रपुर",
                "Vedic Purohit & Jyotishacharya • Rudrapur",
                "Vedic Purohit & Jyotishacharya • Rudrapur"
              ) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-emerald-400/90 block truncate mt-0.5", children: currentUser ? tr(
              `मोबाइल इतिहास सिंक: +91 ${currentUser.phone}`,
              `Mobile History Synced: +91 ${currentUser.phone}`,
              `Mobile History Sync: +91 ${currentUser.phone}`
            ) : tr(
              "तार्किक एवं शास्त्रसम्मत वैदिक ज्योतिष समाधान",
              "Balanced Vedic Guidance (English / Hindi / Hinglish)",
              "Tarkik & Shastrokta Samadhan (Hindi / English / Hinglish)"
            ) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: handleClose,
            className: "p-2 rounded-xl bg-slate-900/90 border border-amber-700/40 text-amber-200 hover:text-white hover:bg-rose-950/70 hover:border-rose-500/50 transition-colors cursor-pointer flex-shrink-0",
            title: tr("चैट विंडो बंद करें", "Close Chat Window", "Chat Window Band Karein"),
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4 sm:w-5 sm:h-5" })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 min-h-0 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        reactExports.Suspense,
        {
          fallback: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full flex flex-col items-center justify-center gap-3 text-amber-200 text-xs font-bold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-full border-2 border-amber-500/30 border-t-amber-400 animate-spin" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "आचार्य शशांक शर्मा ज्योतिष चैट लोड हो रहा है..." })
          ] }),
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            LazyShashankSharmaChat,
            {
              isEmbeddedInDrawer: true,
              onNavigateToTab: (tab) => {
                setIsOpen(false);
                onNavigateToTab(tab);
              },
              onOpenBookingWithService,
              currentUser,
              onUpdateChatMessages,
              onOpenLoginModal
            }
          )
        }
      ) })
    ] }) })
  ] });
};
export {
  FloatingChatDrawer
};
