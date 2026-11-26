import { r as reactExports, j as jsxRuntimeExports } from "./vendor-react-CCbeDaYX.js";
import { u as useLanguage, O as OFFICIAL_YOUTUBE_VIDEOS, P as PanditPortrait, Y as YouTubeLogoIcon } from "./index-CUAFR0Uq.js";
import { S as Sparkles, a9 as Flame, w as BookOpen, a8 as Compass, aC as Heart, aO as ExternalLink, E as Eye, a5 as CircleCheck } from "./vendor-icons-Bk5Rg8-9.js";
import "./vendor-pdf-CpPyS1re.js";
import "./panchang-core-WfwKNTXG.js";
import "./vendor-astronomy-C8JZdkQu.js";
import "./seo-core-uu9B2jSm.js";
const YouTubeFeed = () => {
  const { tr } = useLanguage();
  const [activeCategory, setActiveCategory] = reactExports.useState("all");
  const [selectedVideoModal, setSelectedVideoModal] = reactExports.useState(null);
  const categories = [
    { id: "all", label: tr("सभी वीडियो", "All Videos", "Sabhi Video", "सर्व व्हिडिओ", "બધા વિડિઓ"), icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-4 h-4" }) },
    { id: "puja_vidhi", label: tr("पूजा विधि", "Puja Vidhi", "Puja Vidhi", "पूजा विधी", "પૂજા વિધિ"), icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "w-4 h-4" }) },
    { id: "vrat_tyohar", label: tr("व्रत-त्योहार जानकारी", "Fasts & Festivals", "Vrat-Tyohar Jankari", "व्रत-सण माहिती", "વ્રત-તહેવાર માહિતી"), icon: /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-4 h-4" }) },
    { id: "jyotish_gyan", label: tr("ज्योतिष ज्ञान", "Astrology Wisdom", "Jyotish Gyan", "ज्योतिष ज्ञान", "જ્યોતિષ જ્ઞાન"), icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Compass, { className: "w-4 h-4" }) },
    { id: "pravachan", label: tr("अध्यात्म व गोत्र", "Spirituality & Gotra", "Adhyatma & Gotra", "अध्यात्म व गोत्र", "અધ્યાત્મ અને ગોત્ર"), icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "w-4 h-4" }) }
  ];
  const getCategoryLabel = (catId) => {
    const found = categories.find((c) => c.id === catId);
    return found ? found.label : catId;
  };
  const filteredVideos = activeCategory === "all" ? OFFICIAL_YOUTUBE_VIDEOS : OFFICIAL_YOUTUBE_VIDEOS.filter((v) => v.category === activeCategory);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative overflow-hidden rounded-2xl bg-gradient-to-r from-red-950/70 via-[#1e1014] to-amber-950/70 border border-red-700/40 p-5 sm:p-7 shadow-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row items-center justify-between gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row items-center gap-4 text-center md:text-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(PanditPortrait, { size: "lg", showBadge: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 justify-center md:justify-start", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl sm:text-2xl font-bold font-vedic text-white", children: tr("आचार्य पण्डित शशांक शर्मा", "Acharya Pandit Shashank Sharma", "Acharya Pandit Shashank Sharma") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] px-2 py-0.5 rounded-full bg-red-500/20 text-red-300 border border-red-500/40 font-bold uppercase", children: tr("आधिकारिक यूट्यूब", "Official YouTube", "Official YouTube") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm text-red-200/80 mt-1", children: tr(
            "पण्डित शशांक शर्मा द्वारा प्रमाणित पूजा विधि, व्रत नियम, पंचांग एवं ज्योतिष ज्ञान के नियमित वीडियो।",
            "Regular videos on authentic Puja Vidhi, fast rules, Panchang & Vedic astrology by Pandit Shashank Sharma.",
            "Pandit Shashank Sharma dwara pramanit Puja Vidhi, Vrat Niyam, Panchang aur Jyotish Gyan ke niyamit video."
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-amber-300 font-mono mt-1", children: "youtube.com/@panditjionlineofficial" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: "https://youtube.com/@panditjionlineofficial?sub_confirmation=1",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "flex items-center gap-2 px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm sm:text-base shadow-lg shadow-red-600/30 transition-all cursor-pointer transform hover:-translate-y-0.5",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "p-0.5 rounded bg-white/95 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(YouTubeLogoIcon, { className: "w-4 h-4" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr("चैनल सब्सक्राइब करें", "Subscribe Channel", "Channel Subscribe Karein") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-4 h-4 ml-1" })
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: categories.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: () => setActiveCategory(cat.id),
        className: `flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${activeCategory === cat.id ? "bg-red-600 text-white font-bold shadow-md shadow-red-600/20" : "bg-slate-900/80 text-slate-300 hover:bg-slate-800 border border-slate-800"}`,
        children: [
          cat.icon,
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: cat.label })
        ]
      },
      cat.id
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5", children: filteredVideos.map((video) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex flex-col justify-between bg-gradient-to-b from-[#131b2e] to-[#0c1220] border border-amber-900/30 hover:border-red-600/50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl group",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-video bg-gradient-to-br from-amber-950 via-slate-900 to-red-950 flex flex-col justify-between p-4 border-b border-amber-900/20", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 uppercase", children: getCategoryLabel(video.category) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-slate-300 bg-slate-900/80 px-2 py-0.5 rounded font-mono", children: video.duration })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "self-center my-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 rounded-2xl bg-black/40 backdrop-blur-xs shadow-lg group-hover:scale-110 transition-transform flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(YouTubeLogoIcon, { className: "w-11 h-11" }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-[11px] text-slate-400", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-3 h-3 text-slate-400" }),
                video.views
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: video.publishedDate })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 flex-1 flex flex-col justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm sm:text-base font-bold text-amber-100 group-hover:text-red-300 transition-colors line-clamp-2", children: video.hindiTitle }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-400 mt-1.5 line-clamp-2", children: video.description }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 pt-3 border-t border-slate-800", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-semibold text-amber-400 block mb-1", children: tr("मुख्य शास्त्रोक्त सूत्र:", "Key Vedic Takeaways:", "Mukhya Sutra:") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-0.5 text-[11px] text-slate-300", children: video.keyTakeaways.slice(0, 2).map((takeaway, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-amber-500", children: "•" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: takeaway })
                ] }, idx)) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 pt-3 border-t border-slate-800 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: video.youtubeUrl,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-red-600/20 hover:bg-red-600/30 text-red-200 border border-red-500/40 text-xs font-semibold transition-colors",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(YouTubeLogoIcon, { className: "w-4 h-4" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr("यूट्यूब पर देखें", "Watch on YouTube", "YouTube par dekhein") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-3 h-3 ml-0.5" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => setSelectedVideoModal(video),
                  className: "p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-300 text-xs font-medium transition-colors",
                  title: tr("विवरण देखें", "View Details", "Vivaran dekhein"),
                  children: tr("विवरण", "Details", "Vivaran")
                }
              )
            ] })
          ] })
        ]
      },
      video.id
    )) }),
    selectedVideoModal && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-lg bg-[#0e1424] border border-amber-600/40 rounded-2xl p-6 relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold font-vedic text-amber-100", children: selectedVideoModal.hindiTitle }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-slate-300 mt-3 leading-relaxed", children: selectedVideoModal.description }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 p-3 bg-amber-950/30 rounded-xl border border-amber-900/40", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-amber-300 block mb-2", children: tr("इस वीडियो के मुख्य शास्त्रोक्त बिंदु:", "Key Scriptural Points of this Video:", "Is video ke mukhya bindu:") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1 text-xs text-amber-100/90", children: selectedVideoModal.keyTakeaways.map((k, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3.5 h-3.5 text-theme-primary shrink-0 mt-0.5", strokeWidth: 1.5 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: k })
        ] }, i)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center justify-end gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setSelectedVideoModal(null),
            className: "px-4 py-2 text-xs text-slate-400 hover:text-slate-200",
            children: tr("बंद करें", "Close", "Band Karein")
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: selectedVideoModal.youtubeUrl,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "flex items-center gap-1.5 px-5 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "p-0.5 rounded bg-white/95 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(YouTubeLogoIcon, { className: "w-3.5 h-3.5" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr("यूट्यूब पर पूरा वीडियो देखें", "Watch Full Video on YouTube", "YouTube par pura video dekhein") })
            ]
          }
        )
      ] })
    ] }) })
  ] });
};
export {
  YouTubeFeed
};
