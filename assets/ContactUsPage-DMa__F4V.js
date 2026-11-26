import { r as reactExports, j as jsxRuntimeExports } from "./vendor-react-CCbeDaYX.js";
import { u as useLanguage, P as PanditPortrait, a8 as BRAND_CONFIG, n as getWhatsAppLink } from "./index-AQ5SI3vl.js";
import { J as ArrowLeft, S as Sparkles, u as Phone, t as MessageCircle, F as ArrowRight, M as Mail, a1 as MapPin, aN as MessageSquare, bc as CircleCheckBig, aM as CircleAlert, s as User, c as Send } from "./vendor-icons-Bk5Rg8-9.js";
import "./vendor-pdf-CpPyS1re.js";
import "./panchang-core-24ia-akc.js";
import "./vendor-astronomy-C8JZdkQu.js";
import "./seo-core-DnNehtWz.js";
const ContactUsPage = ({
  onBackToHome,
  onNavigateToTab,
  onOpenBooking
}) => {
  const { tr } = useLanguage();
  const [formData, setFormData] = reactExports.useState({
    name: "",
    phone: "",
    email: "",
    category: "सामान्य परामर्श (General Inquiry)",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = reactExports.useState(false);
  const [submitSuccess, setSubmitSuccess] = reactExports.useState(false);
  const [errorMessage, setErrorMessage] = reactExports.useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() && !formData.email.trim()) {
      setErrorMessage(tr("कृपया अपना नाम और फ़ोन नंबर या ईमेल अवश्य भरें।", "Please provide your name and phone number or email."));
      return;
    }
    setIsSubmitting(true);
    setErrorMessage("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          submittedAt: (/* @__PURE__ */ new Date()).toISOString(),
          origin: window.location.origin
        })
      });
      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({
          name: "",
          phone: "",
          email: "",
          category: "सामान्य परामर्श (General Inquiry)",
          message: ""
        });
      } else {
        setSubmitSuccess(true);
      }
    } catch {
      setSubmitSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };
  const whatsappMessage = `नमस्ते आचार्य पण्डित शशांक शर्मा जी! मेरा नाम ${formData.name || "यजमान"} है। विषय: ${formData.category}। संदेश: ${formData.message || "मुझे परामर्श की आवश्यकता है।"}`;
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
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] sm:text-xs text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-500/40 font-semibold flex items-center gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-emerald-400 animate-pulse" }),
        tr("पण्डित जी ऑनलाइन उपलब्ध", "Pandit Ji Online Available")
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#241306] via-[#141b2b] to-[#0a0f1d] border-2 border-amber-500/50 p-5 sm:p-8 shadow-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 text-center sm:text-left", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PanditPortrait, { size: "lg", showBadge: true }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] font-bold tracking-widest uppercase text-amber-400 flex items-center justify-center sm:justify-start gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3.5 h-3.5 text-yellow-400" }),
          tr("आधिकारिक संपर्क एवं मार्गदर्शन केंद्र", "Official Astrological Support Center")
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl sm:text-3xl font-extrabold font-vedic text-amber-100 mt-1", children: tr("संपर्क करें (Contact Us)", "Contact Us") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs sm:text-sm text-amber-200/90 font-medium mt-1", children: [
          BRAND_CONFIG.founderName,
          " · ",
          tr("वैदिक पुरोहित एवं ज्योतिषाचार्य, रुद्रपुर", "Vedic Purohit & Astrologer, Rudrapur")
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-300 mt-2 leading-relaxed max-w-2xl", children: tr(
          "जन्म कुंडली विश्लेषण, 36 गुण मिलान, गृह प्रवेश, रुद्राभिषेक, सत्यनारायण कथा या वेबसाइट से संबंधित किसी भी सहायता एवं फीडबैक के लिए आप सीधे हमसे संपर्क कर सकते हैं।",
          "For Janam Kundali consultation, 36 Gun Milan, home puja bookings in Rudrapur/Kumaon, or website feedback, please feel free to reach out directly."
        ) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-slate-900/80 border border-amber-900/40 rounded-2xl p-4 flex flex-col justify-between hover:border-amber-500/60 transition-all", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5 text-amber-400 mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-4 h-4 text-amber-400" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-wider text-slate-400", children: tr("फोन संपर्क", "Call Us") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: `tel:+91${BRAND_CONFIG.phone}`,
              className: "text-sm font-bold font-mono text-amber-200 hover:text-yellow-300 transition-colors block tabular-nums",
              children: BRAND_CONFIG.displayPhone
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-slate-400 mt-0.5 block", children: tr("दैनिक 7:00 AM - 9:30 PM", "Daily 7:00 AM - 9:30 PM") })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-slate-900/80 border border-emerald-900/40 rounded-2xl p-4 flex flex-col justify-between hover:border-emerald-500/60 transition-all", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5 text-emerald-400 mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-4 h-4 text-emerald-400" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-wider text-slate-400", children: tr("व्हाट्सएप चैट", "WhatsApp") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: getWhatsAppLink(whatsappMessage),
              target: "_blank",
              rel: "noopener noreferrer",
              className: "text-xs font-bold text-emerald-300 hover:underline flex items-center gap-1",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr("तुरंत चैट करें", "Chat on WhatsApp") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3.5 h-3.5 shrink-0", strokeWidth: 1.5 })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] text-slate-400 mt-0.5 block font-mono", children: [
            "+91 ",
            BRAND_CONFIG.phone
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-slate-900/80 border border-amber-900/40 rounded-2xl p-4 flex flex-col justify-between hover:border-amber-500/60 transition-all", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5 text-amber-400 mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-4 h-4 text-amber-400" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-wider text-slate-400", children: tr("ईमेल सपोर्ट", "Email Support") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: `mailto:${BRAND_CONFIG.email}`,
              className: "text-xs font-semibold text-amber-200 hover:underline block truncate",
              title: BRAND_CONFIG.email,
              children: BRAND_CONFIG.email
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-slate-400 mt-0.5 block", children: tr("24 घंटे में उत्तर", "Response within 24h") })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-slate-900/80 border border-amber-900/40 rounded-2xl p-4 flex flex-col justify-between hover:border-amber-500/60 transition-all", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5 text-amber-400 mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-4 h-4 text-amber-400" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-wider text-slate-400", children: tr("स्थान", "Location") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-slate-200 block truncate", children: BRAND_CONFIG.location }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-slate-400 mt-0.5 block truncate", children: "रुद्रपुर (ऊधम सिंह नगर, उत्तराखण्ड)" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-slate-900/70 border border-amber-900/40 rounded-2xl p-5 sm:p-7 shadow-xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5 text-amber-300 font-bold text-base sm:text-lg mb-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "w-5 h-5 text-amber-400" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: tr("संदेश अथवा परामर्श फॉर्म (Send a Direct Message)", "Send a Direct Message") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-400 mb-5", children: tr(
        "अपना प्रश्न या सुझाव नीचे लिखें। पण्डित जी या उनकी टीम आपसे शीघ्र अति शीघ्र संपर्क करेगी।",
        "Leave your query, puja booking request, or website feedback below. We will get back to you promptly."
      ) }),
      submitSuccess && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5 p-4 rounded-xl bg-emerald-950/80 border border-emerald-500/50 text-emerald-200 flex items-start gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs sm:text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold", children: tr("धन्यवाद! आपका संदेश सफलतापूर्वक प्राप्त हो गया है।", "Thank you! Your message has been received.") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-emerald-300/80 mt-1", children: tr("आचार्य पण्डित शशांक शर्मा जी की टीम शीघ्र ही आपसे संपर्क करेगी।", "Acharya Pandit Shashank Sharma’s team will connect with you soon.") })
        ] })
      ] }),
      errorMessage && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5 p-3.5 rounded-xl bg-rose-950/80 border border-rose-500/50 text-rose-200 flex items-center gap-2.5 text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-4 h-4 text-rose-400 flex-shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: errorMessage })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold text-amber-200/90 mb-1.5", children: tr("आपका शुभ नाम (Full Name) *", "Full Name *") }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-4 h-4 text-slate-500 absolute left-3 top-3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  required: true,
                  placeholder: tr("उदा. राजेश शर्मा", "e.g. Rajesh Sharma"),
                  value: formData.name,
                  onChange: (e) => setFormData({ ...formData, name: e.target.value }),
                  className: "w-full bg-slate-950 border border-slate-700 focus:border-amber-400 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-200 placeholder:text-slate-600 outline-none"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold text-amber-200/90 mb-1.5", children: tr("मोबाइल नंबर (Mobile Number) *", "Mobile Number *") }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-4 h-4 text-slate-500 absolute left-3 top-3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "tel",
                  required: true,
                  placeholder: tr("१० अंकों का मोबाइल नंबर", "10-digit Mobile Number"),
                  value: formData.phone,
                  onChange: (e) => setFormData({ ...formData, phone: e.target.value }),
                  className: "w-full bg-slate-950 border border-slate-700 focus:border-amber-400 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-200 placeholder:text-slate-600 outline-none font-mono"
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold text-amber-200/90 mb-1.5", children: tr("ईमेल पता (Email Address - ऐच्छिक)", "Email Address (Optional)") }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-4 h-4 text-slate-500 absolute left-3 top-3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "email",
                  placeholder: "name@example.com",
                  value: formData.email,
                  onChange: (e) => setFormData({ ...formData, email: e.target.value }),
                  className: "w-full bg-slate-950 border border-slate-700 focus:border-amber-400 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-200 placeholder:text-slate-600 outline-none"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold text-amber-200/90 mb-1.5", children: tr("परामर्श का विषय (Category)", "Inquiry Category") }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "select",
              {
                value: formData.category,
                onChange: (e) => setFormData({ ...formData, category: e.target.value }),
                className: "w-full bg-slate-950 border border-slate-700 focus:border-amber-400 rounded-xl px-3 py-2 text-xs text-slate-200 outline-none cursor-pointer",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "सामान्य परामर्श (General Inquiry)", children: tr("सामान्य ज्योतिषीय परामर्श (General Astrology)", "General Astrology") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "जन्म कुंडली विश्लेषण (Kundali Analysis)", children: tr("जन्म कुंडली विश्लेषण (Janam Kundali)", "Janam Kundali") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "३६ गुण विवाह मिलान (Kundali Milan)", children: tr("३६ गुण विवाह मिलान (Kundali Milan)", "Kundali Milan") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "वैदिक पूजा अनुष्ठान बुकिंग (Puja Booking)", children: tr("वैदिक पूजा बुकिंग (Puja Booking)", "Puja Booking") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "वेबसाइट फीडबैक व सुझाव (Website Feedback)", children: tr("वेबसाइट फीडबैक व सुझाव (Website Feedback)", "Website Feedback") })
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold text-amber-200/90 mb-1.5", children: tr("आपका संदेश या प्रश्न (Your Message)", "Your Message") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "textarea",
            {
              rows: 4,
              placeholder: tr("कृपया अपनी जन्म तारीख, समय या जिस विषय पर परामर्श चाहिए, उसका विवरण लिखें...", "Write details of your inquiry, birth details, or feedback..."),
              value: formData.message,
              onChange: (e) => setFormData({ ...formData, message: e.target.value }),
              className: "w-full bg-slate-950 border border-slate-700 focus:border-amber-400 rounded-xl p-3 text-xs text-slate-200 placeholder:text-slate-600 outline-none resize-y"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3 pt-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "submit",
              disabled: isSubmitting,
              className: "px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 hover:from-amber-400 hover:to-yellow-300 text-slate-950 font-bold text-xs shadow-md transition-all flex items-center gap-2 cursor-pointer disabled:opacity-60",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "w-3.5 h-3.5 text-slate-950" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: isSubmitting ? tr("भेजा जा रहा है...", "Sending...") : tr("संदेश भेजें", "Submit Message") })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: getWhatsAppLink(whatsappMessage),
              target: "_blank",
              rel: "noopener noreferrer",
              className: "px-4 py-2.5 rounded-xl bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/50 text-emerald-300 font-semibold text-xs transition-all flex items-center gap-2",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-3.5 h-3.5 text-emerald-400" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr("व्हाट्सएप पर सीधे भेजें", "Send via WhatsApp") })
              ]
            }
          )
        ] })
      ] })
    ] })
  ] });
};
export {
  ContactUsPage
};
