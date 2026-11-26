import { r as reactExports, j as jsxRuntimeExports } from "./vendor-react-CCbeDaYX.js";
import { u as useLanguage } from "./index-CUAFR0Uq.js";
import { g as Star, a5 as CircleCheck, aG as Quote, a1 as MapPin, ax as ChevronUp, al as ChevronDown } from "./vendor-icons-Bk5Rg8-9.js";
import "./vendor-pdf-CpPyS1re.js";
import "./panchang-core-WfwKNTXG.js";
import "./vendor-astronomy-C8JZdkQu.js";
import "./seo-core-uu9B2jSm.js";
const YajmanTestimonials = () => {
  const { tr } = useLanguage();
  const [showAllReviews, setShowAllReviews] = reactExports.useState(false);
  const testimonials = [
    {
      id: 1,
      name: tr("रमेश चंद्र जोशी", "Ramesh Chandra Joshi"),
      location: tr("आवास विकास (सेक्टर-2), रुद्रपुर", "Awas Vikas (Sector-2), Rudrapur"),
      service: tr("गृह प्रवेश एवं वास्तु शांति महापूजन", "Griha Pravesh & Vastu Shanti Mahapujan"),
      rating: 5,
      date: tr("अक्टूबर 2026", "October 2026"),
      review: tr(
        "पण्डित शशांक शर्मा जी ने हमारे नए घर में संपूर्ण विधि-विधान और शुद्ध वैदिक मंत्रोच्चार के साथ गृह प्रवेश संपन्न कराया। वास्तु शांति हवन के बाद घर में अत्यंत शांति और सकारात्मक ऊर्जा का अनुभव हो रहा है। पण्डित जी का स्वभाव अत्यंत विनम्र और ज्ञानी है।",
        "Pandit Shashank Sharma Ji performed our Griha Pravesh with complete Vedic rituals and pure mantra chanting. After the Vastu Shanti Havan, our home feels deeply peaceful and positive. Pandit Ji is very humble and knowledgeable."
      )
    },
    {
      id: 2,
      name: tr("अमित वर्मा", "Amit Verma"),
      location: tr("सिविल लाइन्स, रुद्रपुर", "Civil Lines, Rudrapur"),
      service: tr("व्यक्तिगत ज्योतिष एवं कुंडली परामर्श (₹100 ऑफर)", "1-on-1 Astrology & Kundali Consultation (₹100 Offer)"),
      rating: 5,
      date: tr("अक्टूबर 2026", "October 2026"),
      review: tr(
        "मैंने ₹100 वाले विशेष ऑफर में फोन पर 1-on-1 कुंडली परामर्श लिया। पण्डित जी ने मेरी नौकरी और व्यापार को लेकर जो सटीक विश्लेषण दिया, उससे मेरी सारी शंकाएं दूर हो गईं। कोई महंगा आडंबर नहीं, केवल सरल और सात्विक उपाय बताए। बहुत-बहुत आभार!",
        "I took the ₹100 1-on-1 phone Kundali consultation. Pandit Ji gave an accurate analysis of my career and business that cleared all my doubts. No expensive rituals—only simple, Satvik Vedic remedies. Truly grateful!"
      )
    },
    {
      id: 3,
      name: tr("श्रीमती सुनीता तिवारी", "Smt. Sunita Tiwari"),
      location: tr("किच्छा रोड, रुद्रपुर", "Kichha Road, Rudrapur"),
      service: tr("श्री सत्यनारायण कथा एवं 36 गुण मिलान", "Shri Satyanarayan Katha & 36 Gun Milan"),
      rating: 5,
      date: tr("सितंबर 2026", "September 2026"),
      review: tr(
        "मेरी पुत्री के विवाह हेतु कुंडली मिलान और नाड़ी दोष के संबंध में पण्डित जी ने बहुत सुंदर और शास्त्रसम्मत मार्गदर्शन दिया। साथ ही पूर्णिमा पर सत्यनारायण कथा का श्रवण पूरे परिवार के लिए अत्यंत कल्याणकारी रहा। जय श्री राधे कृष्णा!",
        "For my daughter’s marriage, Pandit Ji provided authentic Shastrokta guidance on Kundali matching and Nadi Dosha. Listening to the Satyanarayan Katha on Purnima blessed our entire family. Jai Shri Radhe Krishna!"
      )
    },
    {
      id: 4,
      name: tr("दीपक सिंह रावत", "Deepak Singh Rawat"),
      location: tr("ट्रांजिट कैंप, रुद्रपुर", "Transit Camp, Rudrapur"),
      service: tr("महा रुद्राभिषेक एवं शांति अनुष्ठान", "Maha Rudrabhishek & Shanti Anushthan"),
      rating: 5,
      date: tr("सितंबर 2026", "September 2026"),
      review: tr(
        "श्रावण मास में घर पर पार्थिव शिवलिंग रुद्राभिषेक कराया था। पण्डित जी के मंत्रोच्चार की ध्वनि से पूरा वातावरण शिवमय हो गया। समय पर आगमन और पूरी शुद्धता के साथ पूजन कराया। रुद्रपुर क्षेत्र के लिए पण्डित जी एक वरदान हैं।",
        "We had Parthiv Shivling Rudrabhishek performed at home. Pandit Ji’s pure Vedic chanting filled the entire home with divine Shiva energy. Punctual arrival and complete sanctity."
      )
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#181008] via-[#1c120a] to-[#0e1424] border border-amber-600/40 p-5 sm:p-7 shadow-2xl space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-3 border-b border-amber-800/40 pb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-300 text-xs font-semibold mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-3.5 h-3.5 text-yellow-400 fill-yellow-400" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr("यजमान संतुष्टि एवं प्रामाणिक अनुभव", "Verified Devotee Reviews & Trust") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl sm:text-2xl lg:text-3xl font-extrabold font-vedic text-transparent bg-clip-text bg-gradient-to-r from-yellow-100 via-amber-200 to-amber-400", children: tr("यजमानों के पावन अनुभव एवं समीक्षाएं", "What Devotees Say About Pandit Ji") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm text-amber-200/80 mt-1", children: tr(
          "रुद्रपुर एवं कुमाऊं क्षेत्र के सम्मानित परिवारों का आचार्य पण्डित शशांक शर्मा जी पर अटूट विश्वास",
          "Trusted by thousands of families across Rudrapur & Kumaon for Vedic rituals and Astrology"
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 bg-black/60 px-4 py-2 rounded-2xl border border-amber-500/40 flex-shrink-0 self-start md:self-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-base font-extrabold text-yellow-300 font-mono", children: "5.0 / 5.0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-emerald-300 font-bold", children: tr("१००% संतुष्ट यजमान", "100% Satisfied") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-0.5 text-yellow-400", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-4 h-4 fill-yellow-400" }, i)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5", children: (showAllReviews ? testimonials : testimonials.slice(0, 2)).map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex flex-col justify-between p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-[#131b2e]/90 to-[#0b101c]/90 border border-amber-900/40 hover:border-amber-500/60 transition-all hover:shadow-lg hover:shadow-amber-950/40 group",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1 text-yellow-400", children: [...Array(t.rating)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-3.5 h-3.5 fill-yellow-400" }, i)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-amber-300/70 font-mono", children: t.date })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-1 text-[11px] px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-300 font-medium border border-amber-500/20", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3 h-3 text-emerald-400 flex-shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: t.service })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "w-6 h-6 text-amber-500/20 absolute -top-1 -left-1 pointer-events-none" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs sm:text-sm text-amber-100/90 leading-relaxed pl-3 font-sans", children: [
                '"',
                t.review,
                '"'
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 pt-3 border-t border-amber-900/30 flex items-center justify-between gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xs sm:text-sm font-bold font-vedic text-yellow-200 truncate", children: t.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-[11px] text-amber-300/80 truncate", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-3 h-3 text-amber-400 flex-shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: t.location })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/40 flex-shrink-0", children: tr("सत्यापित यजमान", "Verified Devotee") })
          ] })
        ]
      },
      t.id
    )) }),
    testimonials.length > 2 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 flex justify-center pt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: () => setShowAllReviews((prev) => !prev),
        className: "inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-400/50 text-amber-200 hover:text-yellow-300 text-xs sm:text-sm font-extrabold transition-all cursor-pointer shadow-sm",
        children: showAllReviews ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-4 h-4 text-amber-300" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr("कम दिखाएं (Show Less)", "Show Less Reviews") })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-4 h-4 text-amber-300" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr(`और अनुभव पढ़ें (View All ${testimonials.length})`, `Read More Reviews (${testimonials.length})`) })
        ] })
      }
    ) })
  ] });
};
export {
  YajmanTestimonials
};
