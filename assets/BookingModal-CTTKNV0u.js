import { r as reactExports, j as jsxRuntimeExports } from "./vendor-react-CCbeDaYX.js";
import { V as VedicDateInput } from "./VedicDateInput-QzCgtRnr.js";
import { m as PUJA_SERVICES, P as PanditPortrait, a as SacredIcon } from "./index-CUAFR0Uq.js";
import { g as getISTCalendarParts } from "./panchang-core-WfwKNTXG.js";
import { B as BirthPlaceGpsButton } from "./BirthPlaceGpsButton-DI_gV5_v.js";
import { X, a5 as CircleCheck, t as MessageCircle, at as Tag, n as ShieldCheck, a2 as Clock, C as Check, u as Phone, a1 as MapPin } from "./vendor-icons-Bk5Rg8-9.js";
import "./vendor-pdf-CpPyS1re.js";
import "./seo-core-uu9B2jSm.js";
import "./vendor-astronomy-C8JZdkQu.js";
const BookingModal = ({
  isOpen,
  onClose,
  preSelectedService,
  onBookingSuccess,
  currentUser
}) => {
  const [selectedServiceId, setSelectedServiceId] = reactExports.useState("kundali-paramarsh");
  const [bookingType, setBookingType] = reactExports.useState("phone_consultation");
  const [date, setDate] = reactExports.useState("");
  const [timeSlot, setTimeSlot] = reactExports.useState("07:30 AM - प्रातःकाल (Pratahkaal)");
  const [yajmanName, setYajmanName] = reactExports.useState("");
  const [phone, setPhone] = reactExports.useState("");
  const [localityRudrapur, setLocalityRudrapur] = reactExports.useState("");
  const [customAddress, setCustomAddress] = reactExports.useState("");
  const [birthDate, setBirthDate] = reactExports.useState("");
  const [birthTime, setBirthTime] = reactExports.useState("");
  const [birthPlace, setBirthPlace] = reactExports.useState("");
  const [specialNotes, setSpecialNotes] = reactExports.useState("");
  const [confirmedBooking, setConfirmedBooking] = reactExports.useState(null);
  reactExports.useEffect(() => {
    const tmrw = new Date(Date.now() + 24 * 60 * 60 * 1e3);
    setDate(getISTCalendarParts(tmrw).dateKey);
  }, []);
  reactExports.useEffect(() => {
    if (isOpen) {
      setConfirmedBooking(null);
    }
  }, [isOpen]);
  reactExports.useEffect(() => {
    if (isOpen) {
      if (currentUser && currentUser.phone) {
        setPhone(currentUser.phone || "");
        setYajmanName(currentUser.name || "");
        setLocalityRudrapur(currentUser.localityRudrapur || "");
        setBirthDate(currentUser.dob || "");
        setBirthTime(currentUser.birthTime || "");
        setBirthPlace(currentUser.birthPlace || "");
      } else {
        setPhone("");
        setYajmanName("");
        setLocalityRudrapur("");
        setBirthDate("");
        setBirthTime("");
        setBirthPlace("");
      }
    }
  }, [isOpen, currentUser]);
  reactExports.useEffect(() => {
    if (preSelectedService) {
      setSelectedServiceId(preSelectedService.id);
      if (preSelectedService.category === "jyotish_kundali") {
        setBookingType("phone_consultation");
      } else {
        setBookingType("in_person_rudrapur");
      }
    }
  }, [preSelectedService]);
  if (!isOpen) return null;
  const currentService = PUJA_SERVICES.find((s) => s.id === selectedServiceId) || PUJA_SERVICES[0];
  const isKundaliService = currentService.category === "jyotish_kundali";
  const getWhatsAppBookingUrl = (b) => {
    const text = `*पण्डित जी ऑनलाइन - नवीन पूजा/परामर्श बुकिंग*
----------------------------------------
*बुकिंग आईडी:* ${b.id}
*अनुष्ठान / परामर्श:* ${currentService.hindiName} (${b.serviceName})
*निर्धारित दक्षिणा (Offer):* ${currentService.baseDakshina} *(मूल ${currentService.originalDakshina} - ${currentService.discountPercentage}% छूट)*
*प्रकार:* ${b.bookingType === "in_person_rudrapur" ? "घर पर पूजा (रुद्रपुर, उत्तराखंड)" : "व्यक्तिगत फोन / वीडियो कॉल परामर्श"}
*दिनांक:* ${b.date}
*मुहूर्त समय:* ${b.timeSlot}
----------------------------------------
*यजमान नाम:* ${b.yajmanName}
*मोबाइल नंबर:* ${b.phone}
${b.bookingType === "in_person_rudrapur" ? `*रुद्रपुर क्षेत्र:* ${b.localityRudrapur}
*घर का पता:* ${b.address || "रुद्रपुर"}` : "*माध्यम:* फोन / व्हाट्सएप वीडियो कॉल"}
${b.birthDate ? `*जन्म विवरण:* ${b.birthDate} | ${b.birthTime || "समय नहीं"} | ${b.birthPlace || "स्थान नहीं"}` : ""}
${b.specialNotes ? `*विशेष प्रार्थना / प्रश्न:* ${b.specialNotes}` : ""}
----------------------------------------
राधे राधे पण्डित शशांक शर्मा जी! कृपया मेरी यह बुकिंग स्वीकृत करें।`;
    return `https://wa.me/917017279043?text=${encodeURIComponent(text)}`;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const booking = {
      id: `PJO-${Date.now().toString().slice(-6)}`,
      serviceId: currentService.id,
      serviceName: currentService.name,
      bookingType,
      date,
      timeSlot,
      yajmanName,
      phone,
      localityRudrapur: bookingType === "in_person_rudrapur" ? localityRudrapur : void 0,
      address: bookingType === "in_person_rudrapur" ? customAddress : "फोन / व्हाट्सएप कॉल परामर्श",
      birthDate: isKundaliService ? birthDate : void 0,
      birthTime: isKundaliService ? birthTime : void 0,
      birthPlace: isKundaliService ? birthPlace : void 0,
      specialNotes,
      status: "confirmed",
      createdAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    fetch("/api/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(booking)
    }).catch(() => {
    });
    setConfirmedBooking(booking);
    onBookingSuccess(booking);
    const directWhatsAppUrl = getWhatsAppBookingUrl(booking);
    const linkEl = document.createElement("a");
    linkEl.href = directWhatsAppUrl;
    linkEl.target = "_blank";
    linkEl.rel = "noopener noreferrer";
    document.body.appendChild(linkEl);
    linkEl.click();
    document.body.removeChild(linkEl);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex flex-col items-center justify-start p-2.5 sm:p-5 pt-12 sm:pt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full max-w-2xl bg-[#0d1322] border border-amber-600/40 rounded-2xl shadow-2xl overflow-hidden my-4 sm:my-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-amber-950 via-[#1c120a] to-amber-950 px-4 sm:px-5 py-3.5 sm:py-4 border-b border-amber-700/40 flex items-center justify-between gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5 sm:gap-3 min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(PanditPortrait, { size: "sm", showBadge: false }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base sm:text-lg font-bold font-vedic text-amber-100 leading-snug", children: "वैदिक पूजा एवं ज्योतिष परामर्श बुकिंग" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] sm:text-xs text-emerald-300 font-medium truncate", children: "सीधे पं. शशांक शर्मा जी के WhatsApp (7017279043) पर गोपनीय बुकिंग" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: onClose,
          className: "p-1.5 rounded-lg text-slate-400 hover:text-amber-200 hover:bg-amber-900/40 transition-colors flex-shrink-0 cursor-pointer",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5" })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 sm:p-6 max-h-[82vh] overflow-y-auto", children: confirmedBooking ? (
      /* Confirmation Receipt View */
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5 animate-fadeIn", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-4 bg-emerald-950/25 border border-emerald-500/40 rounded-2xl p-4 sm:p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-12 h-12 text-emerald-400 mx-auto mb-2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg sm:text-xl font-bold font-vedic text-emerald-200", children: "आपकी बुकिंग पण्डित जी के WhatsApp पर तैयार है!" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs sm:text-sm text-emerald-300/80 mt-1", children: [
            "बुकिंग संदर्भ संख्या: ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono font-bold text-amber-300", children: confirmedBooking.id })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-300 mt-2 max-w-md mx-auto", children: "आपकी बुकिंग पूरी तरह गोपनीय है और किसी अन्य यूजर को दिखाई नहीं देगी। यदि WhatsApp अपने आप नहीं खुला है, तो नीचे दिए गए हरे बटन पर क्लिक करके सीधे पण्डित शशांक शर्मा जी को संदेश भेजें।" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl bg-slate-900/80 border border-amber-900/40 text-xs sm:text-sm space-y-2.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap justify-between gap-2 border-b border-slate-800 pb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-400", children: "अनुष्ठान / सेवा:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-amber-200 text-right", children: currentService.hindiName })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap justify-between items-center gap-2 border-b border-slate-800 pb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-400", children: "निर्धारित दक्षिणा (शुल्क):" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-slate-500 line-through font-mono", children: currentService.originalDakshina }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-extrabold text-emerald-400 font-mono text-sm sm:text-base", children: currentService.baseDakshina }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold", children: [
                currentService.discountPercentage,
                "% छूट"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap justify-between gap-2 border-b border-slate-800 pb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-400", children: "प्रकार:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-amber-300 text-right", children: confirmedBooking.bookingType === "in_person_rudrapur" ? "गृह पूजा (रुद्रपुर में आपके घर पर)" : "फोन / वीडियो कॉल परामर्श" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap justify-between gap-2 border-b border-slate-800 pb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-400", children: "दिनांक एवं समय:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium text-amber-100 text-right", children: [
              confirmedBooking.date,
              " • ",
              confirmedBooking.timeSlot
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap justify-between gap-2 border-b border-slate-800 pb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-400", children: "यजमान का नाम:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-amber-100 text-right", children: confirmedBooking.yajmanName })
          ] }),
          confirmedBooking.localityRudrapur && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap justify-between gap-2 border-b border-slate-800 pb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-400", children: "रुद्रपुर क्षेत्र:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-amber-100 text-right", children: confirmedBooking.localityRudrapur })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-3 pt-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: getWhatsAppBookingUrl(confirmedBooking),
              target: "_blank",
              rel: "noopener noreferrer",
              className: "flex-1 flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-bold text-sm shadow-lg transition-all",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-5 h-5 flex-shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "सीधे पण्डित जी के WhatsApp पर भेजें" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: onClose,
              className: "px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-sm transition-all cursor-pointer",
              children: "बंद करें"
            }
          )
        ] })
      ] })
    ) : (
      /* Booking Form */
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            onClick: () => {
              setSelectedServiceId("kundali-paramarsh");
              setBookingType("phone_consultation");
            },
            className: `p-3.5 sm:p-4 rounded-2xl border cursor-pointer transition-all ${selectedServiceId === "kundali-paramarsh" ? "bg-gradient-to-r from-amber-950 via-[#221307] to-emerald-950 border-emerald-400 shadow-[0_0_25px_rgba(16,185,129,0.35)] ring-2 ring-emerald-400/50" : "bg-gradient-to-r from-amber-950/90 via-[#1b1008] to-slate-900 border-amber-500/80 hover:border-yellow-300 shadow-lg hover:scale-[1.01]"}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-black bg-gradient-to-r from-emerald-400 to-teal-400 text-slate-950 uppercase tracking-wider animate-pulse flex items-center gap-1 shadow-sm", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "havan", size: "w-3 h-3", tone: "dark" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "90% महा छूट ऑफर" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-amber-300 font-bold", children: "सीमित समय विशेष दक्षिणा" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm sm:text-base font-extrabold font-vedic text-yellow-200", children: "व्यक्तिगत ज्योतिष एवं सम्पूर्ण कुंडली परामर्श (1-on-1)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-amber-200/90", children: "आचार्य पण्डित शशांक शर्मा जी से फोन/वीडियो कॉल पर जन्मपत्री, भविष्यफल व अचूक वैदिक उपाय" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center sm:flex-col justify-between sm:items-end gap-2 flex-shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-amber-900/40", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-slate-400 line-through font-mono", children: "₹1,000" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg sm:text-2xl font-black text-emerald-400 font-mono tracking-tight", children: "मात्र ₹100" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/40", children: "90% बचत" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: `px-3 py-1.5 rounded-xl font-extrabold text-xs transition-all flex items-center gap-1.5 shadow-md ${selectedServiceId === "kundali-paramarsh" ? "bg-emerald-500 text-slate-950" : "bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950"}`,
                    children: selectedServiceId === "kundali-paramarsh" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3.5 h-3.5 text-slate-950", strokeWidth: 1.5 }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "ऑफर सक्रिय है (मात्र ₹100)" })
                    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { className: "w-3.5 h-3.5 text-slate-950", strokeWidth: 1.5 }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "यह 90% ऑफर चुनें (मात्र ₹100)" })
                    ] })
                  }
                )
              ] })
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 sm:p-3 rounded-xl bg-emerald-950/30 border border-emerald-500/30 flex items-center gap-2 text-[11px] sm:text-xs text-emerald-200", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-4 h-4 text-emerald-400 flex-shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "100% गोपनीय बुकिंग:" }),
            " आपकी जानकारी किसी अन्य को नहीं दिखेगी, सीधे पण्डित शशांक शर्मा जी के WhatsApp (",
            /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "7017279043" }),
            ") पर जाएगी।"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold text-amber-300", children: "पूजा / अनुष्ठान / परामर्श चयन करें" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "select",
            {
              value: selectedServiceId,
              onChange: (e) => {
                const newId = e.target.value;
                setSelectedServiceId(newId);
                const found = PUJA_SERVICES.find((s) => s.id === newId);
                if (found?.category === "jyotish_kundali") {
                  setBookingType("phone_consultation");
                } else {
                  setBookingType("in_person_rudrapur");
                }
              },
              className: "w-full bg-slate-900 border border-amber-900/60 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-amber-100 focus:outline-none focus:border-amber-500",
              children: [
                ...PUJA_SERVICES.filter((s) => s.id === "kundali-paramarsh"),
                ...PUJA_SERVICES.filter((s) => s.id !== "kundali-paramarsh")
              ].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: s.id, children: [
                s.id === "kundali-paramarsh" ? "[90% महा छूट] " : "",
                s.baseDakshina,
                " — ",
                s.hindiName.split(" (")[0],
                " (",
                s.discountPercentage,
                "% छूट)"
              ] }, s.id))
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 sm:p-3.5 rounded-xl bg-gradient-to-r from-amber-950/70 via-slate-900 to-emerald-950/50 border border-amber-500/50 space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { className: "w-4 h-4 text-amber-400 flex-shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-amber-200", children: "निर्धारित दक्षिणा / शुल्क (Payment):" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-slate-400 line-through font-mono", children: currentService.originalDakshina }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base sm:text-lg font-extrabold text-emerald-400 font-mono bg-emerald-950/70 px-2.5 py-0.5 rounded-lg border border-emerald-500/40 whitespace-nowrap", children: currentService.baseDakshina })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-2 text-[11px] text-amber-300/80 border-t border-amber-900/40 pt-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3 text-amber-400 flex-shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  "अवधि: ",
                  currentService.duration
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-emerald-300 font-semibold inline-flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-3.5 h-3.5 shrink-0", strokeWidth: 1.5 }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  currentService.discountPercentage,
                  "% विशेष छूट लागू (कोई अग्रिम ऑनलाइन पेमेंट कटौती नहीं)"
                ] })
              ] })
            ] })
          ] })
        ] }),
        isKundaliService ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3.5 rounded-xl bg-amber-950/30 border border-amber-600/40 space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold text-amber-300", children: "परामर्श माध्यम चुनें (Consultation Medium)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => setBookingType("phone_consultation"),
                className: `p-2.5 rounded-xl text-left border transition-all text-xs cursor-pointer flex items-center gap-2 ${bookingType === "phone_consultation" ? "bg-amber-500 text-slate-950 font-bold border-amber-400" : "bg-slate-900 text-amber-200 border-amber-900/60 hover:bg-slate-800"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-4 h-4 flex-shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block font-bold", children: "फोन / व्हाट्सएप कॉल" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] opacity-80 block", children: "घर बैठे सीधा परामर्श (मात्र ₹100)" })
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => setBookingType("in_person_rudrapur"),
                className: `p-2.5 rounded-xl text-left border transition-all text-xs cursor-pointer flex items-center gap-2 ${bookingType === "in_person_rudrapur" ? "bg-amber-500 text-slate-950 font-bold border-amber-400" : "bg-slate-900 text-amber-200 border-amber-900/60 hover:bg-slate-800"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-4 h-4 flex-shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block font-bold", children: "प्रत्यक्ष भेंट (रुद्रपुर)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] opacity-80 block", children: "पण्डित जी से आमने-सामने" })
                  ] })
                ]
              }
            )
          ] })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3.5 rounded-xl bg-amber-950/30 border border-amber-600/40 flex items-start gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 rounded-lg bg-amber-500/20 text-amber-400 flex-shrink-0 mt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-4 h-4 text-amber-400" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-amber-200 block", children: "आयोजन स्थल: आपके घर पर (रुद्रपुर, उत्तराखण्ड)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-amber-300/80 mt-0.5", children: "पण्डित शशांक शर्मा जी स्वयं सम्पूर्ण वैदिक सामग्री व विधि-विधान सहित आपके घर पधारकर पूजा सम्पन्न कराएंगे।" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold text-amber-300 mb-1", children: "इच्छित तिथि (Date)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              VedicDateInput,
              {
                required: true,
                value: date,
                onChange: (iso) => setDate(iso),
                ariaLabel: "इच्छित तिथि"
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold text-amber-300 mb-1", children: "शुभ समय स्लॉट (Muhurat Slot)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "select",
              {
                value: timeSlot,
                onChange: (e) => setTimeSlot(e.target.value),
                className: "w-full bg-slate-900 border border-amber-900/60 rounded-xl px-3 py-2 text-sm text-amber-100 focus:outline-none focus:border-amber-500",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "07:30 AM - प्रातःकाल (Pratahkaal Shubh Muhurat)", children: "07:30 AM - प्रातःकाल (Pratahkaal)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "11:45 AM - अभिजित मुहूर्त (Abhijit Muhurat)", children: "11:45 AM - अभिजित मुहूर्त (अति शुभ)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "04:30 PM - सायंकाल संध्या (Sandhya Kaal)", children: "04:30 PM - सायंकाल संध्या" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "07:00 PM - रात्रिकालीन अनुष्ठान (Night Anushthan)", children: "07:00 PM - रात्रिकालीन अनुष्ठान" })
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold text-amber-300 mb-1", children: "यजमान का नाम *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                required: true,
                placeholder: "उदा. राहुल शर्मा",
                value: yajmanName,
                onChange: (e) => setYajmanName(e.target.value),
                className: "w-full bg-slate-900 border border-amber-900/60 rounded-xl px-3 py-2 text-sm text-amber-100 focus:outline-none focus:border-amber-500"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold text-amber-300 mb-1", children: "मोबाइल / WhatsApp *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "tel",
                required: true,
                placeholder: "उदा. 98370XXXXX",
                value: phone,
                onChange: (e) => setPhone(e.target.value),
                className: "w-full bg-slate-900 border border-amber-900/60 rounded-xl px-3 py-2 text-sm text-amber-100 focus:outline-none focus:border-amber-500"
              }
            )
          ] })
        ] }),
        bookingType === "in_person_rudrapur" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-xl bg-slate-900/90 border border-amber-900/40 space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-xs font-semibold text-amber-400", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-3.5 h-3.5 text-amber-400 flex-shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "क्षेत्र (Chetr):" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                placeholder: "अपना क्षेत्र खुद लिखें (उदा. इंदिरा कॉलोनी, आवास विकास...)",
                value: localityRudrapur,
                onChange: (e) => setLocalityRudrapur(e.target.value),
                className: "w-full bg-slate-950 border border-amber-900/60 rounded-lg px-2.5 py-2 text-xs text-amber-100 placeholder:text-slate-400 font-medium"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                placeholder: "मकान नं, गली, लैंडमार्क...",
                value: customAddress,
                onChange: (e) => setCustomAddress(e.target.value),
                className: "w-full bg-slate-950 border border-amber-900/60 rounded-lg px-2.5 py-2 text-xs text-amber-100 placeholder:text-slate-500"
              }
            )
          ] })
        ] }),
        isKundaliService && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-xl bg-amber-950/20 border border-amber-700/30 space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-amber-300 block", children: "कुंडली विश्लेषण हेतु जन्म विवरण (वैकल्पिक यदि उपलब्ध हो):" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              VedicDateInput,
              {
                compact: true,
                value: birthDate,
                onChange: (iso) => setBirthDate(iso),
                ariaLabel: "जन्म तिथि"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "time",
                placeholder: "जन्म समय",
                value: birthTime,
                onChange: (e) => setBirthTime(e.target.value),
                className: "w-full bg-slate-900 border border-amber-900/40 rounded-lg p-2 text-xs text-amber-100"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-stretch gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  placeholder: "जन्म स्थान (शहर/राज्य)",
                  value: birthPlace,
                  onChange: (e) => setBirthPlace(e.target.value),
                  className: "flex-1 min-w-0 bg-slate-900 border border-amber-900/40 rounded-lg p-2 text-xs text-amber-100 placeholder:text-slate-500"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                BirthPlaceGpsButton,
                {
                  size: "xs",
                  onSelectPlace: (place) => setBirthPlace(place)
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold text-amber-300 mb-1", children: "विशेष मन्नत / संकल्प विवरण (Special Notes)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "textarea",
            {
              rows: 2,
              placeholder: "उदा. नए मकान की नींव पूजा, या विशेष स्वास्थ्य शांति हेतु...",
              value: specialNotes,
              onChange: (e) => setSpecialNotes(e.target.value),
              className: "w-full bg-slate-900 border border-amber-900/60 rounded-xl px-3 py-2 text-xs text-amber-100 placeholder:text-slate-500 focus:outline-none focus:border-amber-500"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-2 flex flex-wrap items-center justify-end gap-3 border-t border-amber-900/40", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: onClose,
              className: "px-4 py-2.5 rounded-xl text-xs sm:text-sm text-slate-400 hover:text-slate-200 cursor-pointer",
              children: "रद्द करें"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "submit",
              className: "flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-green-500 hover:from-emerald-500 hover:to-green-400 text-slate-950 font-extrabold text-xs sm:text-sm shadow-lg shadow-emerald-600/30 transition-all cursor-pointer",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-4 h-4 flex-shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  "सीधे WhatsApp पर बुकिंग भेजें (",
                  currentService.baseDakshina,
                  ")"
                ] })
              ]
            }
          )
        ] })
      ] })
    ) })
  ] }) });
};
export {
  BookingModal
};
