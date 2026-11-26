import { j as jsxRuntimeExports } from "./vendor-react-CCbeDaYX.js";
import { u as useLanguage, P as PanditPortrait, a8 as BRAND_CONFIG, Y as YouTubeLogoIcon } from "./index-CUAFR0Uq.js";
import { J as ArrowLeft, S as Sparkles, bc as CircleCheckBig, f as Award, w as BookOpen, a8 as Compass, n as ShieldCheck, a1 as MapPin } from "./vendor-icons-Bk5Rg8-9.js";
import "./vendor-pdf-CpPyS1re.js";
import "./panchang-core-WfwKNTXG.js";
import "./vendor-astronomy-C8JZdkQu.js";
import "./seo-core-uu9B2jSm.js";
const AboutUsPage = ({
  onBackToHome,
  onNavigateToTab,
  onOpenBooking,
  hideH1 = false
}) => {
  const { tr } = useLanguage();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto space-y-6 sm:space-y-8 animate-fadeIn text-slate-200", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3 border-b border-amber-900/40 pb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: () => {
            if (onBackToHome) onBackToHome();
            else if (onNavigateToTab) onNavigateToTab("home");
            window.scrollTo({ top: 0, behavior: "smooth" });
          },
          className: "inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors cursor-pointer",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr("मुख्य पृष्ठ पर वापस जाएं", "Back to Home") })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] sm:text-xs text-amber-300 bg-amber-950/60 px-3 py-1 rounded-full border border-amber-500/40 font-semibold", children: tr("१५+ वर्ष का शास्त्रीय अनुभव", "15+ Years Vedic Experience") })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#241306] via-[#151c2d] to-[#0a0f1d] border-2 border-amber-500/50 p-6 sm:p-8 shadow-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PanditPortrait, { size: "xl", showBadge: true }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] font-bold tracking-widest uppercase text-amber-400 flex items-center justify-center sm:justify-start gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3.5 h-3.5 text-yellow-400" }),
          tr("संस्थापक एवं मुख्य ज्योतिषाचार्य", "Founder & Chief Astrologer")
        ] }),
        hideH1 ? /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl sm:text-3xl font-extrabold font-vedic text-amber-100 mt-1", children: tr("आचार्य पण्डित शशांक शर्मा", "Acharya Pandit Shashank Sharma") }) : /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl sm:text-3xl font-extrabold font-vedic text-amber-100 mt-1", children: tr("आचार्य पण्डित शशांक शर्मा", "Acharya Pandit Shashank Sharma") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm text-amber-300/90 font-medium mt-1", children: tr(
          "वैदिक पुरोहित, ज्योतिषाचार्य एवं कर्मकाण्ड विशेषज्ञ · रुद्रपुर, उत्तराखण्ड",
          "Vedic Purohit, Astrologer & Ritual Specialist · Rudrapur, Uttarakhand"
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-center sm:justify-start gap-2 mt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 text-xs bg-slate-900/80 text-emerald-300 px-3 py-1 rounded-full border border-emerald-500/40 font-medium", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-3.5 h-3.5 text-emerald-400" }),
            tr("१०,०००+ संतुष्ट यजमान", "10,000+ Consulted Yajmans")
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 text-xs bg-slate-900/80 text-amber-300 px-3 py-1 rounded-full border border-amber-500/40 font-medium", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "w-3.5 h-3.5 text-amber-400" }),
            tr("दृक गणित खगोलीय गणना", "Drik Ganit Astronomy Precision")
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 text-xs sm:text-sm leading-relaxed", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-slate-900/60 border border-amber-900/30 rounded-2xl p-5 sm:p-7 space-y-3.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-base sm:text-lg font-bold text-amber-300 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-4 h-4 text-amber-400" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr("हमारा परिचय एवं उद्देश्य (Our Mission & Story)", "Our Mission & Story") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-300", children: tr(
          "पण्डित जी ऑनलाइन (panditjionline.online) की स्थापना आचार्य पण्डित शशांक शर्मा द्वारा सनातन धर्म की प्राचीन वैदिक ज्योतिष विधा, दृक गणित हिन्दू पंचांग और पूजा-अनुष्ठान परंपरा को आधुनिक डिजिटल युग में प्रत्येक व्यक्ति तक सहज, प्रामाणिक और निःशुल्क पहुंचाने के संकल्प के साथ की गई है।",
          "Pandit Ji Online (panditjionline.online) was founded by Acharya Pandit Shashank Sharma with a steadfast dedication to making authentic Vedic astrology, precision Drik Ganit Hindu Panchang, and sacred Puja rituals accessible to everyone globally without commercial exploitation."
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-300", children: tr(
          "आज के समय में जब इंटरनेट पर भ्रामक भविष्यवाणियां और अंधविश्वास फैलाया जाता है, हमारा उद्देश्य तार्किक, शास्त्रसम्मत (वृहत्पाराशर होराशास्त्र, जैमिनी सूत्र, मुहूर्त चिंतामणि) और आधुनिक खगोलीय गणित (NASA JPL & Lahiri Ayanamsha) पर आधारित १००% सटीक ज्योतिषीय गणनाएं उपलब्ध कराना है।",
          "In an era clouded by superficial automated horoscopes and superstitions, our platform is built on authentic classical texts (Brihat Parashara Hora Shastra, Jaimini Sutras, Muhurat Chintamani) coupled with high-precision astronomical ephemeris (Lahiri Ayanamsha) to provide genuinely insightful guidance."
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-slate-900/60 border border-amber-900/30 rounded-2xl p-5 sm:p-7 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-base sm:text-lg font-bold text-amber-300 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Compass, { className: "w-4 h-4 text-amber-400" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr("हमारी मुख्य शास्त्रीय विशेषताएं (Core Astrological Pillars)", "Core Astrological Pillars") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-slate-950/70 p-4 rounded-xl border border-slate-800 space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-bold text-amber-200 text-xs sm:text-sm flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-4 h-4 text-emerald-400" }),
              tr("दृक गणित पंचांग (Drik Ganit Panchang)", "Drik Ganit Panchang")
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-400 text-xs leading-relaxed", children: tr(
              "रुद्रपुर एवं सम्पूर्ण भारत के लिए सूर्योदय, सूर्यास्त, तिथि, नक्षत्र, योग, करण, राहुकाल और चौघड़िया का सेकंड-दर-सेकंड सटीक खगोलीय पंचांग।",
              "Second-by-second accurate planetary timings, Tithi, Nakshatra, Rahukaal, and Choghadiya computed with real astronomical coordinates."
            ) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-slate-950/70 p-4 rounded-xl border border-slate-800 space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-bold text-amber-200 text-xs sm:text-sm flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-4 h-4 text-emerald-400" }),
              tr("३६ गुण मिलान एवं मांगलिक विचार (36 Gun Milan)", "36 Gun Milan & Manglik")
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-400 text-xs leading-relaxed", children: tr(
              "अष्टकूट (वर्ण, वश्य, तारा, योनि, ग्रह मैत्री, गण, भकूट, नाड़ी) गुण मिलान, नाड़ी दोष परिहार और वर-वधू की कुंडली का संपूर्ण वैवाहिक सामंजस्य।",
              "Exhaustive 36-point Ashtakoot compatibility matching, Nadi dosha cancellation rules, and comprehensive marriage harmony analysis."
            ) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-slate-950/70 p-4 rounded-xl border border-slate-800 space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-bold text-amber-200 text-xs sm:text-sm flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-4 h-4 text-emerald-400" }),
              tr("सम्पूर्ण जन्म कुंडली व विंशोत्तरी दशा (Kundali & Dasha)", "Janam Kundali & Mahadasha")
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-400 text-xs leading-relaxed", children: tr(
              "लग्न (D-1), नवमांश (D-9), दशमांश (D-10) कुंडली के साथ १२० वर्षीय विंशोत्तरी महादशा और जीवन के ५ मुख्य क्षेत्रों (कैरियर, वित्त, स्वास्थ्य, विवाह) का फलित।",
              "Comprehensive 16-chart divisional analysis, Vimshottari Mahadasha timeline, and 5-pillar life predictions."
            ) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-slate-950/70 p-4 rounded-xl border border-slate-800 space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-bold text-amber-200 text-xs sm:text-sm flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-4 h-4 text-emerald-400" }),
              tr("वैदिक पूजा एवं कर्मकाण्ड (Vedic Puja & Rituals)", "Vedic Puja & Rituals")
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-400 text-xs leading-relaxed", children: tr(
              "गृह प्रवेश, रुद्राभिषेक, सत्यनारायण महापूजा, नवग्रह शांति और विवाह संस्कार संपूर्ण वैदिक विधि-विधान व शुद्ध सस्वर मंत्रोच्चार के साथ।",
              "Sacred home rituals, Maha Rudrabhishek, Satyanarayan Katha, and Navagraha Shanti performed with pure Vedic mantra chanting."
            ) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-gradient-to-br from-[#1a1408] via-slate-900 to-slate-950 border-2 border-amber-500/40 rounded-2xl p-5 sm:p-7 space-y-3.5 shadow-lg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-base sm:text-lg font-bold text-amber-300 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-5 h-5 text-emerald-400" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr("हमारा नैतिक संकल्प (Our Ethical Commitment)", "Our Ethical Commitment") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-slate-300 pl-4 list-disc text-xs sm:text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-amber-200", children: tr("१००% निःशुल्क सॉफ्टवेयर टूल्स: ", "100% Free Software Tools: ") }),
            tr(
              "पंचांग, कुंडली मिलान, जन्म कुंडली निर्माण और डिजिटल मंदिर का उपयोग सभी भक्तों के लिए हमेशा निःशुल्क है।",
              "Panchang, Kundali Matching, Horoscope generation, and Digital Mandir are forever free for all devotees."
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-amber-200", children: tr("पारदर्शी एवं सात्विक मार्गदर्शन: ", "Satvik & Transparent Remedies: ") }),
            tr(
              "हम किसी भी प्रकार का अंधविश्वास, भय या महंगे रत्न बेचने का प्रपंच नहीं करते। केवल सात्विक मंत्र जप, दान, स्तोत्र पाठ और सदाचार की प्रेरणा देते हैं।",
              "We strictly oppose fear-mongering and commercial superstition. We recommend only Satvik Vedic remedies such as mantra japa, seva, and virtuous conduct."
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-amber-200", children: tr("यजमान डेटा की पूर्ण गोपनीयता: ", "Strict Privacy: ") }),
            tr(
              "आपके जन्म विवरण और संपर्क कभी किसी तीसरे पक्ष को बेचे या साझा नहीं किए जाते।",
              "Your birth records and personal phone numbers are never rented, sold, or shared with third parties."
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-slate-900/60 border border-amber-900/30 rounded-2xl p-5 sm:p-7 space-y-3.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-base sm:text-lg font-bold text-amber-300 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-4 h-4 text-amber-400" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr("संपादकीय मानक एवं खगोलीय गणना नीति (Editorial Policy)", "Editorial Standards & Calculation Methodology") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-300", children: tr(
          "पण्डित जी ऑनलाइन पर प्रकाशित प्रत्येक पंचांग, व्रत-पर्व तिथि, शुभ मुहूर्त एवं धर्म-ज्ञान लेख का प्रकाशन व समीक्षा स्वयं आचार्य पण्डित शशांक शर्मा द्वारा किया जाता है। सभी खगोलीय गणनाएं भारतीय मानक समय (IST) तथा भारत सरकार द्वारा मान्यता प्राप्त लाहिड़ी चित्रापक्ष अयनांश (Lahiri Chitrapaksha Ayanamsha) पर आधारित हैं।",
          "Every Panchang table, festival muhurat, and Dharm-Gyan article published on Pandit Ji Online is authored and reviewed by Acharya Pandit Shashank Sharma using Indian Standard Time (IST) and Lahiri Chitrapaksha Ayanamsha."
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-400 text-xs", children: tr(
          "सुधार एवं तथ्यात्मक सत्यापन: यदि किसी यजमान या पाठक को किसी पंचांग तिथि, क्षेत्रीय परंपरा या लेख में कोई संशोधन सूचित करना हो, तो कृपया नीचे दिए गए आधिकारिक ईमेल या हेल्पलाइन पर संपर्क करें — हमारी संपादकीय टीम २४ घंटे के भीतर शास्त्रोक्त सत्यापन कर उसे अद्यतन करती है।",
          "Corrections & Editorial Feedback: If any reader spots a regional Panchang nuance or textual typo, please reach us via the official email or helpline below; our team verifies against classical scriptures and updates promptly."
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-slate-900/80 border border-amber-500/30 rounded-2xl p-5 sm:p-6 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-base sm:text-lg font-bold text-amber-300 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-4 h-4 text-amber-400" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr("कार्यालय एवं प्रत्यक्ष भेंट का पता (Office Address & Direct Contact)", "Office Address & Direct Contact") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-slate-950 p-3.5 rounded-xl border border-slate-800", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-slate-500 block uppercase font-bold", children: tr("स्थान", "Address") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-200 font-medium mt-1", children: BRAND_CONFIG.location }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-amber-300/80 mt-0.5", children: BRAND_CONFIG.primaryLocality })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-slate-950 p-3.5 rounded-xl border border-slate-800", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-slate-500 block uppercase font-bold", children: tr("हेल्पलाइन", "Helpline") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: `tel:+91${BRAND_CONFIG.phone}`,
                className: "text-xs font-mono font-bold text-emerald-300 hover:underline mt-1 block tabular-nums",
                children: BRAND_CONFIG.displayPhone
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-slate-400 block mt-0.5", children: tr("दैनिक 7:00 AM - 9:30 PM IST", "Daily 7:00 AM - 9:30 PM IST") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-slate-950 p-3.5 rounded-xl border border-slate-800", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-slate-500 block uppercase font-bold", children: tr("ईमेल व यूट्यूब", "Email & Media") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: `mailto:${BRAND_CONFIG.email}`,
                className: "text-xs text-amber-300 hover:underline block truncate mt-1",
                children: BRAND_CONFIG.email
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: BRAND_CONFIG.youtubeUrl,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "text-[11px] text-red-300 hover:underline flex items-center gap-1.5 mt-1 font-medium",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(YouTubeLogoIcon, { className: "w-4 h-4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: BRAND_CONFIG.youtubeHandle })
                ]
              }
            )
          ] })
        ] })
      ] })
    ] })
  ] });
};
export {
  AboutUsPage
};
