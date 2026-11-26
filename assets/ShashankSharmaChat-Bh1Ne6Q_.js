import { R as React, j as jsxRuntimeExports, r as reactExports } from "./vendor-react-CCbeDaYX.js";
import { a as SacredIcon, u as useLanguage, v as vedicAudio, P as PanditPortrait } from "./index-CUAFR0Uq.js";
import { U as UserAvatar } from "./UserAvatar-DPD6_vjs.js";
import { B as getCalculationViewingMode, G as getActiveProfile, I as generateSampurnKundali, H as getVedicDetailsFromName } from "./panchang-core-WfwKNTXG.js";
import { r as resolveAllGeminiApiKeys, f as fetchAdminGeminiKeysFromCloud, s as setGlobalAdminGeminiKeys, h as handleChatMessage, A as AdminGeminiKeyManager, i as isValidRealGeminiKey, d as decryptKeysPayload } from "./AdminGeminiKeyManager-Cf7qEFhB.js";
import { S as Sparkles, T as Volume2, Q as VolumeX, ag as History, aP as Key, u as Phone, aQ as Youtube, R as RefreshCw, a8 as Compass, ax as ChevronUp, al as ChevronDown, F as ArrowRight, s as User, aq as Moon, a2 as Clock, a7 as Gem, aR as Trash2, aH as CircleQuestionMark, G as Globe, aO as ExternalLink, a5 as CircleCheck, aS as MicOff, i as Mic, c as Send, X } from "./vendor-icons-Bk5Rg8-9.js";
import "./vendor-pdf-CpPyS1re.js";
import "./seo-core-uu9B2jSm.js";
import "./vendor-astronomy-C8JZdkQu.js";
const LOCALIZED_QUICK_CHIPS = {
  hi: [
    "मेरी लग्न, राशि, महादशा व गोचर के अनुसार करियर व धन योग बताएं",
    "विवाह योग, सप्तम भाव एवं मांगलिक दोष का शास्त्रोक्त समाधान",
    "स्वास्थ्य, आत्मबल एवं रोग-मुक्ति हेतु वैदिक उपाय व रुद्राक्ष",
    "शनि साढ़े साती, राहु-केतु गोचर एवं अचूक वैदिक परिहार",
    "मेरे लग्नेश के अनुसार शुभ रत्न, रुद्राक्ष एवं सिद्ध बीज मंत्र",
    "आज का दृक् पंचांग (रुद्रपुर IST) एवं अभिजित शुभ मुहूर्त"
  ],
  en: [
    "Analyze my Career & Finance via Lagna, Mahadasha & Gochar",
    "Marriage timing, 7th House & Manglik Dosha Vedic remedies",
    "Health, vitality & immunity remedies via Lagna & Nakshatra",
    "Shani Sade Sati & Rahu-Ketu transit effects + Shastrokta Upay",
    "Recommend authentic Gemstone, Rudraksha & Beej Mantra for me",
    "Today's Rudrapur IST Panchang & Abhijit Shubh Muhurat"
  ],
  hinglish: [
    "Meri Lagna, Rashi, Mahadasha aur Gochar se Career & Dhan yog batayein",
    "Vivah yog, 7th house aur Manglik Dosha ka shastrokta upay",
    "Health aur mansik shanti ke liye Vedic upay aur Rudraksha",
    "Shani Sade Sati, Rahu-Ketu gochar aur achook Vedic parihar",
    "Mere Lagnesh ke anusar shubh Ratna, Rudraksha aur Beej Mantra",
    "Aaj ka Rudrapur IST Panchang aur Abhijit Shubh Muhurat"
  ],
  mr: [
    "माझ्या लग्न, राशी, महादशा व गोचरनुसार करिअर आणि धन योग सांगा",
    "विवाह योग, सप्तम भाव आणि मांगलिक दोषाचे शास्त्रोक्त उपाय",
    "आरोग्य व मानसिक शांतीसाठी वैदिक उपाय आणि रुद्राक्ष",
    "शनि साडेसाती व राहू-केतू गोचर उपाय सांगा",
    "लग्नेशानुसार शुभ रत्न, रुद्राक्ष आणि बीज मंत्र सांगा",
    "आजचे पंचांग व शुभ मुहूर्त सांगा"
  ],
  gu: [
    "મારા લગ્ન, રાશિ, મહાદશા અને ગોચર મુજબ કરિયર અને ધન યોગ જણાવો",
    "લગ્ન યોગ, સપ્તમ ભાવ અને માંગલિક દોષના શાસ્ત્રોક્ત ઉપાય",
    "સ્વાસ્થ્ય અને માનસિક શાંતિ માટે વૈદિક ઉપાય અને રુદ્રાક્ષ",
    "શનિ સાડાસાતી અને રાહુ-કેતુ ગોચરના ઉપાય જણાવો",
    "લગ્નેશ મુજબ શુભ રત્ન, રુદ્રાક્ષ અને બીજ મંત્ર જણાવો",
    "આજનું પંચાંગ અને શુભ મુહૂર્ત જણાવો"
  ]
};
const GUEST_QUICK_CHIPS = {
  hi: [
    "आज का पंचांग, शुभ मुहूर्त एवं राहुकाल बताएं",
    "अपनी जन्म कुंडली (Lagna, Rashi, Mahadasha) कैसे दिखवाएं?",
    "करियर एवं आर्थिक उन्नति के लिए वैदिक नियम व उपाय",
    "विवाह योग एवं मांगलिक विचार का शास्त्रोक्त समाधान",
    "शनि साढ़े साती एवं राहु-केतु गोचर का सामान्य प्रभाव",
    "ग्रह शांति हेतु सात्विक दैनिक मंत्र एवं पूजा विधि"
  ],
  en: [
    "Today's Panchang, Shubh Muhurat & Rahukal (Rudrapur IST)",
    "How can I get my Birth Kundali (Lagna, Rashi, Dasha) analyzed?",
    "Vedic remedies & principles for Career and Wealth growth",
    "Marriage timing & Manglik Dosha Vedic guidance",
    "General effects of Shani Sade Sati & Rahu-Ketu transit",
    "Satvik daily Mantras and Puja rituals for Graha Shanti"
  ],
  hinglish: [
    "Aaj ka Panchang, Shubh Muhurat aur Rahukal batayein",
    "Apni Janam Kundali (Lagna, Rashi, Mahadasha) kaise check karein?",
    "Career aur Dhan vridhi ke liye Vedic niyam aur upay",
    "Vivah yog aur Manglik dosha ka shastrokta samadhan",
    "Shani Sade Sati aur Rahu-Ketu gochar ka samanya prabhav",
    "Grah shanti ke liye dainik mantra aur pooja vidhi"
  ],
  mr: [
    "आजचे पंचांग, शुभ मुहूर्त व राहूकाळ सांगा",
    "माझी जन्म कुंडली (लग्न, राशी, महादशा) कशी दाखवावी?",
    "करिअर आणि धनवृद्धीसाठी वैदिक नियम व उपाय",
    "विवाह योग आणि मांगलिक दोषाचे शास्त्रीय उपाय",
    "शनि साडेसाती व राहू-केतू गोचरचा प्रभाव",
    "ग्रहशांतीसाठी दैनिक मंत्र आणि पूजा विधी"
  ],
  gu: [
    "આજનું પંચાંગ, શુભ મુહૂર્ત અને રાહુકાળ જણાવો",
    "મારી જન્મ કુંડળી (લગ્ન, રાશિ, મહાદશા) કેવી રીતે જોવડાવવી?",
    "કરિયર અને ધનવૃદ્ધિ માટે વૈદિક નિયમો અને ઉપાય",
    "લગ્ન યોગ અને માંગલિક દોષનું શાસ્ત્રોક્ત સમાધાન",
    "શનિ સાડાસાતી અને રાહુ-કેતુ ગોચરનો સામાન્ય પ્રભાવ",
    "ગ્રહ શાંતિ માટે સાત્વિક દૈનિક મંત્ર અને પૂજા વિધિ"
  ]
};
function getWelcomeMessage(lang) {
  if (lang === "en") {
    return {
      id: "msg-welcome",
      role: "assistant",
      text: `Radhe Radhe! I am **Acharya Pandit Shashank Sharma** ("Pandit Ji Online", Rudrapur).

Using **Classical Parashari, Jaimini (Chara Karakas), and Nakshatra Nadi Principles**, I evaluate your **Lagna, Chandra Rashi, Active Vimshottari Mahadasha/Antardasha, and Live Planetary Gochar** to guide you on **Career, Marriage, Finance, Health, Doshas, and Authentic Vedic Upay (Gemstones, Rudraksha & Mantra Jaap)**.

How may I analyze your horoscope or guide your spiritual journey today?`,
      timestamp: "Always Available"
    };
  }
  if (lang === "hinglish") {
    return {
      id: "msg-welcome",
      role: "assistant",
      text: `Radhe Radhe! Main **Acharya Pandit Shashank Sharma** ("Pandit Ji Online", Rudrapur).

Main **Parashari, Jaimini aur Nadi Jyotish Siddhanton** ke aadhar par aapke **Lagna, Chandra Rashi, Active Mahadasha/Antardasha aur Live Gochar** ka vishleshan karke **Career, Vivah, Dhan, Health, Grah-Dosha aur Shastrokta Upay (Ratna, Rudraksha & Mantra Jaap)** par sateek margdarshan deta hoon.

Bataiye, aaj aap apni Kundali ya jeevan ke kis vishay par parmarsh chahte hain?`,
      timestamp: "Sadaiv Uplabdh"
    };
  }
  return {
    id: "msg-welcome",
    role: "assistant",
    text: `राधे राधे! मैं **आचार्य पण्डित शशांक शर्मा** ("पण्डित जी ऑनलाइन" • रुद्रपुर, उत्तराखण्ड)। 

मैं **बृहत् पराशर होरा शास्त्र, जैमिनी सूत्र एवं नक्षत्र नाड़ी ज्योतिष** के सिद्धांतों के आधार पर आपके **लग्न, चन्द्र राशि, जन्म नक्षत्र, सक्रिय विंशोत्तरी महादशा/अंतर्दशा एवं वर्तमान ग्रह गोचर** का सूक्ष्म विश्लेषण कर **करियर, विवाह, धन, स्वास्थ्य, दोष-निवारण तथा प्रामाणिक वैदिक उपाय (रत्न, रुद्राक्ष व मंत्र जप)** पर सटीक मार्गदर्शन प्रदान करता हूँ।

बताइए, आज आपके मन में क्या ज्योतिषीय जिज्ञासा या संकल्प है?`,
    timestamp: "सदैव उपलब्ध"
  };
}
function sanitizeStoredChatHistory(list) {
  if (!Array.isArray(list)) return [];
  return list.filter((m) => {
    if (!m || !m.text || m.id === "msg-welcome") return false;
    if (m.text.includes("Rudrapur (Uttarakhand) aur sampoorn vishva ke shradhaluon ke kalyanarth") || m.text.includes("पर शास्त्रसम्मत एवं संतुलित वैदिक विचार इस प्रकार है") || m.text.includes("मन को सदैव सकारात्मक और धर्मपरायण रखें") || m.text.includes("का बृहत् पराशर होरा शास्त्र, जैमिनी सूत्र एवं वर्तमान ग्रह गोचर के अनुसार विश्लेषण:")) {
      return false;
    }
    return true;
  }).map((m) => {
    if (m.role !== "assistant") return m;
    const cleanedText = m.text.replace(/\(\s*[०-९0-9]+\s*सूत्रों\s*का\s*क्रॉस-चेक\s*\)/gi, "").replace(/गहन\s*शास्त्रीय\s*सत्यापन\s*(?:\([^)]*\))?\s*:?/gi, "ज्योतिषीय कुंडली विश्लेषण:").replace(/-\s*[१२३४1234]\.\s*([^:\n*]+)\*\*:/g, "- **$1**:").replace(/(\S)\*\*:/g, "$1:**");
    return { ...m, text: cleanedText };
  });
}
function renderFormattedVedicText(text) {
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g);
  return parts.map((part, idx) => {
    if (part.startsWith("**") && part.endsWith("**") && part.length > 4) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "font-extrabold text-amber-300", children: part.slice(2, -2) }, idx);
    }
    if (part.startsWith("`") && part.endsWith("`") && part.length > 2) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          className: "inline-block px-2 py-0.5 my-0.5 rounded-md bg-amber-950/90 border border-amber-500/50 text-yellow-300 font-vedic font-bold",
          children: part.slice(1, -1)
        },
        idx
      );
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(React.Fragment, { children: part }, idx);
  });
}
class ChatErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, errorInfo) {
    console.error("[Jyotish AI Chat ErrorBoundary Caught Fatal Component Error]:", error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 text-center bg-stone-900 border border-amber-500/30 rounded-2xl m-4 text-amber-100", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-bold text-amber-300 text-lg mb-2 flex items-center justify-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "kalash", className: "w-5 h-5 shrink-0", tone: "theme" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "क्षमा करें, चैट सेवा लोड करने में व्यवधान आया" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-stone-300 mb-4", children: "आचार्य जी की सेवा पुनः प्रारंभ करने के लिए कृपया नीचे दिए गए बटन पर क्लिक करें।" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => this.setState({ hasError: false }),
            className: "px-4 py-2 bg-gradient-to-r from-amber-600 to-amber-500 text-slate-950 font-bold rounded-lg shadow-md hover:from-amber-500 hover:to-amber-400 transition-all text-sm cursor-pointer",
            children: "पुनः प्रयास करें (Retry)"
          }
        )
      ] });
    }
    return this.props.children;
  }
}
const ShashankSharmaChatInner = ({
  initialPrompt,
  onNavigateToTab,
  currentUser,
  onUpdateChatMessages,
  onOpenLoginModal,
  isEmbeddedInDrawer = false
}) => {
  const { language, tr } = useLanguage();
  const welcomeMessage = reactExports.useMemo(() => getWelcomeMessage(language), [language]);
  const hasExplicitProfile = Boolean(
    currentUser && (currentUser.dob || currentUser.rashi || currentUser.lagna)
  );
  const quickChips = reactExports.useMemo(() => {
    if (hasExplicitProfile) {
      return LOCALIZED_QUICK_CHIPS[language] || LOCALIZED_QUICK_CHIPS.hi;
    }
    return GUEST_QUICK_CHIPS[language] || GUEST_QUICK_CHIPS.hi;
  }, [hasExplicitProfile, language]);
  const [messages, setMessages] = reactExports.useState(() => {
    const initialWelcome = getWelcomeMessage(language);
    if (currentUser && currentUser.chatMessages && currentUser.chatMessages.length > 0) {
      const cleaned = sanitizeStoredChatHistory(currentUser.chatMessages);
      return [initialWelcome, ...cleaned];
    }
    try {
      const savedGuest = localStorage.getItem("panditji_chat_history_guest");
      if (savedGuest) {
        const parsed = JSON.parse(savedGuest);
        const cleaned = sanitizeStoredChatHistory(parsed);
        if (cleaned.length > 0) {
          return [initialWelcome, ...cleaned];
        }
      }
    } catch {
    }
    return [initialWelcome];
  });
  reactExports.useEffect(() => {
    setMessages((prev) => {
      const rest = prev.filter((m) => m.id !== "msg-welcome");
      return [welcomeMessage, ...rest];
    });
  }, [welcomeMessage]);
  const [input, setInput] = reactExports.useState("");
  const [isLoading, setIsLoading] = reactExports.useState(false);
  const [showHistoryDrawer, setShowHistoryDrawer] = reactExports.useState(false);
  const [isAstroContextExpanded, setIsAstroContextExpanded] = reactExports.useState(false);
  const messagesContainerRef = reactExports.useRef(null);
  const inputRef = reactExports.useRef(null);
  const hasMountedRef = reactExports.useRef(false);
  const lastInitialPromptRef = reactExports.useRef("");
  reactExports.useEffect(() => {
    if (currentUser) {
      const cleaned = sanitizeStoredChatHistory(currentUser.chatMessages || []);
      setMessages([welcomeMessage, ...cleaned]);
    } else {
      try {
        const savedGuest = localStorage.getItem("panditji_chat_history_guest");
        if (savedGuest) {
          const parsed = JSON.parse(savedGuest);
          const cleaned = sanitizeStoredChatHistory(parsed);
          setMessages([welcomeMessage, ...cleaned]);
          return;
        }
      } catch {
      }
      setMessages([welcomeMessage]);
    }
  }, [currentUser?.phone, welcomeMessage]);
  const [activeSpeechId, setActiveSpeechId] = reactExports.useState(
    () => vedicAudio.getActiveSpeechId()
  );
  reactExports.useEffect(() => {
    const unsubSpeech = vedicAudio.subscribeSpeech((id) => {
      setActiveSpeechId(id);
    });
    return unsubSpeech;
  }, []);
  const [isListening, setIsListening] = reactExports.useState(false);
  const [speechError, setSpeechError] = reactExports.useState(null);
  const recognitionRef = reactExports.useRef(null);
  const [autoSpeak, setAutoSpeak] = reactExports.useState(() => {
    try {
      return localStorage.getItem("panditji_auto_speak_chat") === "true";
    } catch {
      return false;
    }
  });
  const toggleAutoSpeak = () => {
    setAutoSpeak((prev) => {
      const next = !prev;
      try {
        localStorage.setItem("panditji_auto_speak_chat", String(next));
      } catch {
      }
      return next;
    });
  };
  const isAdminAccount = Boolean(
    currentUser?.phone && currentUser.phone.replace(/\D/g, "").slice(-10) === "8958499979"
  );
  const [showApiKeyModal, setShowApiKeyModal] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (!isAdminAccount && showApiKeyModal) {
      setShowApiKeyModal(false);
    }
  }, [isAdminAccount, showApiKeyModal]);
  reactExports.useEffect(() => {
    const handleOpenAdminModal = () => {
      if (isAdminAccount) {
        setShowApiKeyModal(true);
      }
    };
    window.addEventListener("panditji_open_admin_key_modal", handleOpenAdminModal);
    const loadGlobalKey = async () => {
      const localMultiKeys = [];
      const storageKeysToRead = [
        "panditji_admin_gemini_keys",
        "panditji_global_gemini_keys_pool_v1",
        "panditji_admin_gemini_keys_slots"
      ];
      for (const sk of storageKeysToRead) {
        try {
          const rawLocal = localStorage.getItem(sk);
          if (rawLocal) {
            const parsed = JSON.parse(rawLocal);
            if (Array.isArray(parsed)) {
              for (const k of parsed) {
                if (isValidRealGeminiKey(k)) {
                  const clean = k.trim();
                  if (!localMultiKeys.includes(clean)) {
                    localMultiKeys.push(clean);
                  }
                }
              }
            }
          }
        } catch {
        }
      }
      if (localMultiKeys.length > 0) {
        setGlobalAdminGeminiKeys(localMultiKeys);
      }
      let serverKeyCount = 0;
      const discoveredRemoteKeys = [];
      try {
        const cloudKeys = await fetchAdminGeminiKeysFromCloud(false);
        for (const ck of cloudKeys) {
          if (isValidRealGeminiKey(ck) && !discoveredRemoteKeys.includes(ck.trim())) {
            discoveredRemoteKeys.push(ck.trim());
          }
        }
      } catch {
      }
      const endpoints = [
        "/api/admin/gemini-key",
        "https://ais-pre-vzln7mn7lygnkockjoehu3-746834689688.asia-east1.run.app/api/admin/gemini-key"
      ];
      for (const ep of endpoints) {
        try {
          const res = await fetch(ep, { method: "GET", headers: { Accept: "application/json" }, cache: "no-store" });
          if (res.ok) {
            const data = await res.json();
            let remoteKeys = [];
            if (typeof data?.encryptedPool === "string" && data.encryptedPool) {
              remoteKeys = decryptKeysPayload(data.encryptedPool);
            }
            if (remoteKeys.length === 0 && Array.isArray(data?.keys)) {
              remoteKeys = data.keys.filter(isValidRealGeminiKey).map((k) => k.trim());
            }
            const fetchedKey = data && isValidRealGeminiKey(data.apiKey) ? data.apiKey.trim() : isValidRealGeminiKey(data) ? data.trim() : remoteKeys[0] || "";
            if (ep === "/api/admin/gemini-key") {
              serverKeyCount = remoteKeys.length || (fetchedKey ? 1 : 0);
            }
            if (remoteKeys.length > 0) {
              for (const rk of remoteKeys) {
                if (!discoveredRemoteKeys.includes(rk)) {
                  discoveredRemoteKeys.push(rk);
                }
              }
            } else if (fetchedKey && !discoveredRemoteKeys.includes(fetchedKey)) {
              discoveredRemoteKeys.push(fetchedKey);
            }
          }
        } catch {
        }
      }
      const finalMergedKeys = Array.from(
        /* @__PURE__ */ new Set([...discoveredRemoteKeys, ...localMultiKeys])
      ).filter(isValidRealGeminiKey).slice(0, 12);
      if (finalMergedKeys.length > 0) {
        setGlobalAdminGeminiKeys(finalMergedKeys);
        try {
          localStorage.setItem("panditji_admin_gemini_keys", JSON.stringify(finalMergedKeys));
          localStorage.setItem("panditji_global_gemini_keys_pool_v1", JSON.stringify(finalMergedKeys));
          localStorage.setItem("panditji_global_gemini_api_key", finalMergedKeys[0]);
          localStorage.setItem("panditji_gemini_api_key", finalMergedKeys[0]);
          window.__PANDITJI_GLOBAL_GEMINI_KEYS__ = finalMergedKeys;
          window.__PANDITJI_GLOBAL_GEMINI_KEY__ = finalMergedKeys[0];
        } catch {
        }
        if (isAdminAccount || serverKeyCount === 0) {
          if (finalMergedKeys.length > serverKeyCount) {
            fetch("/api/admin/gemini-key", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "x-admin-phone": "8958499979"
              },
              body: JSON.stringify({ keys: finalMergedKeys, apiKey: finalMergedKeys[0] })
            }).catch(() => {
            });
          }
        }
      }
    };
    loadGlobalKey();
    return () => {
      window.removeEventListener("panditji_open_admin_key_modal", handleOpenAdminModal);
    };
  }, [isAdminAccount]);
  const toggleListening = () => {
    if (isListening) {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.stop();
        } catch {
        }
      }
      setIsListening(false);
      return;
    }
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setSpeechError(
        tr(
          "आपके ब्राउज़र में वॉइस स्पीच उपलब्ध नहीं है। कृपया लिखकर प्रश्न पूछें।",
          "Voice recognition is not supported in this browser. Please type your query.",
          "Aapke browser mein voice recognition support nahi hai. Kripya type karein."
        )
      );
      setTimeout(() => setSpeechError(null), 4500);
      return;
    }
    try {
      const recognition = new SpeechRecognition();
      recognitionRef.current = recognition;
      recognition.lang = language === "en" ? "en-IN" : "hi-IN";
      recognition.continuous = false;
      recognition.interimResults = true;
      recognition.onstart = () => {
        setIsListening(true);
        setSpeechError(null);
        vedicAudio.playCrispTempleBell(0.5);
      };
      recognition.onresult = (event) => {
        let transcript = "";
        for (let i = event.resultIndex; i < event.results.length; i++) {
          transcript += event.results[i][0].transcript;
        }
        if (transcript) {
          setInput(transcript);
        }
      };
      recognition.onerror = (event) => {
        console.warn("Speech recognition warning:", event.error);
        setIsListening(false);
        if (event.error === "not-allowed") {
          setSpeechError(
            tr(
              "कृपया माइक्रोफोन की अनुमति दें (Allow Mic in browser)।",
              "Please allow microphone permission in your browser.",
              "Kripya microphone ki permission allow karein."
            )
          );
        } else if (event.error !== "no-speech") {
          setSpeechError(
            tr(
              "आवाज स्पष्ट नहीं सुनाई दी, कृपया माइक दबाकर दोबारा बोलें।",
              "Could not hear clearly, please click Mic and speak again.",
              "Aawaz spasht nahi aayi, kripya dobara bolein."
            )
          );
        }
        setTimeout(() => setSpeechError(null), 4500);
      };
      recognition.onend = () => {
        setIsListening(false);
      };
      recognition.start();
    } catch (err) {
      console.error("Speech start error:", err);
      setIsListening(false);
    }
  };
  reactExports.useEffect(() => {
    return () => {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.stop();
        } catch {
        }
      }
    };
  }, []);
  reactExports.useEffect(() => {
    const container = messagesContainerRef.current;
    if (!container) return;
    const rafId = window.requestAnimationFrame(() => {
      const targetHeight = container.scrollHeight;
      if (!hasMountedRef.current) {
        hasMountedRef.current = true;
        container.scrollTop = messages.length <= 1 ? 0 : targetHeight;
        return;
      }
      container.scrollTo({
        top: targetHeight,
        behavior: "smooth"
      });
    });
    return () => window.cancelAnimationFrame(rafId);
  }, [messages, isLoading]);
  reactExports.useEffect(() => {
    if (initialPrompt && initialPrompt !== lastInitialPromptRef.current) {
      lastInitialPromptRef.current = initialPrompt;
      sendMessage(initialPrompt);
    }
  }, [initialPrompt]);
  const persistMessages = (nextMessages) => {
    const historyOnly = sanitizeStoredChatHistory(nextMessages);
    try {
      localStorage.setItem("panditji_chat_history_guest", JSON.stringify(historyOnly));
    } catch {
    }
    if (onUpdateChatMessages) {
      onUpdateChatMessages(historyOnly);
    }
  };
  const [calcViewingMode, setCalcViewingMode] = reactExports.useState(getCalculationViewingMode);
  reactExports.useEffect(() => {
    const handleModeChange = (e) => {
      const mode = e.detail || getCalculationViewingMode();
      setCalcViewingMode(mode);
    };
    window.addEventListener("display_preference_changed", handleModeChange);
    return () => {
      window.removeEventListener("display_preference_changed", handleModeChange);
    };
  }, []);
  const activeAstroContext = reactExports.useMemo(() => {
    const isLoggedIn = Boolean(
      currentUser && (currentUser.dob || currentUser.name || currentUser.phone)
    );
    const activeProf = isLoggedIn ? getActiveProfile() : null;
    const rawDob = currentUser?.dob || (isLoggedIn ? activeProf?.dob : "") || "";
    const hasBirthProfile = Boolean(rawDob && rawDob.trim() !== "");
    const rawName = currentUser?.name || (isLoggedIn ? activeProf?.name : "") || "यजमान";
    const cleanName = rawName.replace(/^(?:हे\s+|श्री\s+|यजमान\s+)+/i, "").replace(/\s+(?:जी|ji)$/i, "").trim() || "यजमान";
    if (!hasBirthProfile) {
      return {
        hasProfile: false,
        name: cleanName,
        dob: "",
        birthTime: "",
        birthPlace: "",
        lagna: "",
        lagnaLord: "",
        rashi: "",
        nakshatra: "",
        dashaLabel: "",
        ratna: "",
        rudraksha: "",
        beejMantra: "",
        calcViewingMode,
        payload: isLoggedIn && cleanName !== "यजमान" ? {
          name: cleanName,
          calcViewingMode
        } : void 0
      };
    }
    const birthTime = currentUser?.birthTime || activeProf?.birthTime || "12:00";
    const birthPlace = currentUser?.birthPlace || activeProf?.birthPlace || "रुद्रपुर, उत्तराखण्ड";
    const report = generateSampurnKundali(cleanName, rawDob, birthTime, birthPlace);
    const activeDasha = report.mahadashas.find((d) => d.isCurrent) || report.mahadashas[0];
    const isNameMode = calcViewingMode === "name_rashi";
    const nameVedic = isNameMode ? getVedicDetailsFromName(cleanName) : null;
    const lagna = nameVedic ? `${nameVedic.rashi} (नाम राशि आधारित)` : activeProf?.lagna || report.panchang.lagnaName;
    const rashi = nameVedic ? nameVedic.rashi : currentUser?.rashi || activeProf?.rashi || report.panchang.moonRashiName;
    const nakshatra = nameVedic ? nameVedic.nakshatra : activeProf?.nakshatra || report.panchang.nakshatraName;
    const dashaLabel = activeDasha ? `${activeDasha.planet} महादशा (${activeDasha.currentAntardasha || "शुक्र"} अंतर्दशा)` : "बृहस्पति महादशा";
    return {
      hasProfile: true,
      name: cleanName,
      dob: rawDob,
      birthTime,
      birthPlace,
      lagna,
      lagnaLord: nameVedic ? nameVedic.rashiLord : report.panchang.lagnaLord,
      rashi,
      nakshatra,
      dashaLabel,
      ratna: report.lucky.ratnaName,
      rudraksha: report.lucky.rudraksha,
      beejMantra: report.lucky.beejMantra,
      calcViewingMode,
      payload: {
        name: cleanName,
        dob: rawDob,
        birthTime,
        birthPlace,
        rashi,
        lagna,
        nakshatra,
        gotra: currentUser?.gotra || activeProf?.gotra,
        calcViewingMode
      }
    };
  }, [
    currentUser?.name,
    currentUser?.phone,
    currentUser?.dob,
    currentUser?.birthTime,
    currentUser?.birthPlace,
    currentUser?.rashi,
    currentUser?.gotra,
    calcViewingMode
  ]);
  const sendMessage = async (textToSend) => {
    const userText = (textToSend || input).trim();
    if (!userText || isLoading) return;
    const nowStr = (/* @__PURE__ */ new Date()).toLocaleString(language === "en" ? "en-IN" : "hi-IN", {
      day: "2-digit",
      month: "short",
      hour: "2-digit",
      minute: "2-digit"
    });
    const userMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      text: userText,
      timestamp: nowStr
    };
    const priorConversation = messages.filter((m) => m && m.id !== "msg-welcome");
    const isFirstTurn = priorConversation.filter((m) => m.role === "user").length === 0;
    const updatedWithUser = [...messages, userMessage];
    setMessages(updatedWithUser);
    persistMessages(updatedWithUser);
    setInput("");
    setIsLoading(true);
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(new Error("Chat request timeout")), 2e4);
    try {
      const historyPayload = priorConversation.slice(-6).map((m) => {
        let text = m.text.replace(/[*#`_~•]+/g, "").replace(/\s+/g, " ").trim();
        if (m.role === "assistant" && text.length > 450) {
          text = text.slice(0, 445).replace(/\s+\S*$/, "") + "...";
        }
        return {
          role: m.role,
          parts: [{ text }]
        };
      });
      let data = null;
      const host = typeof window !== "undefined" ? window.location.hostname || "" : "";
      let clientKeyPool = resolveAllGeminiApiKeys();
      if (clientKeyPool.length === 0) {
        try {
          const syncedCloudKeys = await fetchAdminGeminiKeysFromCloud(false);
          if (syncedCloudKeys.length > 0) {
            setGlobalAdminGeminiKeys(syncedCloudKeys);
            clientKeyPool = resolveAllGeminiApiKeys();
          }
        } catch {
        }
      }
      const requestBodyStr = JSON.stringify({
        message: userText,
        history: historyPayload,
        language,
        userProfile: activeAstroContext.payload,
        apiKeys: clientKeyPool.length > 0 ? clientKeyPool : void 0
      });
      if (clientKeyPool.length > 0) {
        try {
          const directGeminiData = await handleChatMessage(
            userText,
            historyPayload,
            language,
            activeAstroContext.payload,
            clientKeyPool
          );
          if (directGeminiData && typeof directGeminiData.reply === "string" && directGeminiData.reply.trim()) {
            data = directGeminiData;
          }
        } catch {
        }
      }
      if (!data || !data.fromGemini || !data.reply || !data.reply.trim()) {
        try {
          const response = await fetch("/api/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: requestBodyStr,
            signal: controller.signal
          });
          const contentType = response.headers.get("content-type") || "";
          if (response.ok && contentType.includes("application/json")) {
            const parsed = await response.json();
            if (parsed && typeof parsed.reply === "string" && parsed.reply.trim()) {
              if (parsed.fromGemini || !data) {
                data = parsed;
              }
            }
          }
        } catch {
        }
      }
      if (!data || !data.fromGemini || !data.reply || !data.reply.trim()) {
        const backendBase = typeof window !== "undefined" ? window.PANDITJI_CONFIG?.BACKEND_API_BASE || "" : "";
        if (backendBase && !backendBase.includes(host)) {
          try {
            const remoteUrl = `${backendBase.replace(/\/+$/, "")}/api/chat`;
            const remoteRes = await fetch(remoteUrl, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: requestBodyStr,
              signal: controller.signal
            });
            const contentType = remoteRes.headers.get("content-type") || "";
            if (remoteRes.ok && contentType.includes("application/json")) {
              const parsedRemote = await remoteRes.json();
              if (parsedRemote && typeof parsedRemote.reply === "string" && parsedRemote.reply.trim()) {
                if (parsedRemote.fromGemini || !data) {
                  data = parsedRemote;
                }
              }
            }
          } catch {
          }
        }
      }
      if (!data || typeof data.reply !== "string" || !data.reply.trim()) {
        const directOrRemoteData = await handleChatMessage(
          userText,
          historyPayload,
          language,
          activeAstroContext.payload,
          clientKeyPool
        );
        if (directOrRemoteData && typeof directOrRemoteData.reply === "string" && directOrRemoteData.reply.trim()) {
          data = directOrRemoteData;
        }
      }
      clearTimeout(timeoutId);
      const replyText = data?.reply || (isFirstTurn ? tr(
        "राधे राधे! कल्याण हो! आपके प्रश्न का विश्लेषण किया जा रहा है।",
        "Radhe Radhe! Kalyan ho! Analyzing your query according to Vedic Shastras.",
        "Radhe Radhe! Kalyan ho! Aapke prashna ka vishleshan kiya ja raha hai."
      ) : tr(
        "आपके प्रश्न का शास्त्रोक्त विश्लेषण किया जा रहा है।",
        "Analyzing your query according to Vedic Shastras.",
        "Aapke prashna ka shastrokta vishleshan kiya ja raha hai."
      ));
      const assistantMessage = {
        id: `asst-${Date.now()}`,
        role: "assistant",
        text: replyText,
        sources: Array.isArray(data?.sources) ? data.sources : void 0,
        searchGrounded: Boolean(data?.searchGrounded),
        timestamp: (/* @__PURE__ */ new Date()).toLocaleString(language === "en" ? "en-IN" : "hi-IN", {
          day: "2-digit",
          month: "short",
          hour: "2-digit",
          minute: "2-digit"
        })
      };
      const finalMessages = [...updatedWithUser, assistantMessage];
      setMessages(finalMessages);
      persistMessages(finalMessages);
      if (autoSpeak) {
        const cleanSpeakText = replyText.replace(/[*#`_~•]/g, "").replace(/https?:\/\/\S+/g, "").trim();
        vedicAudio.speakVedicText(cleanSpeakText, `chat-msg-${assistantMessage.id}`);
      }
    } catch (err) {
      clearTimeout(timeoutId);
      console.warn("[Jyotish AI Chat] Notice:", err?.message || String(err));
      try {
        const directFallback = await handleChatMessage(
          userText,
          [],
          language,
          activeAstroContext.payload
        );
        const fallbackMessage = {
          id: `asst-${Date.now()}`,
          role: "assistant",
          text: directFallback.reply,
          timestamp: nowStr
        };
        const finalMessages = [...updatedWithUser, fallbackMessage];
        setMessages(finalMessages);
        persistMessages(finalMessages);
        if (autoSpeak) {
          const cleanSpeakText = fallbackMessage.text.replace(/[*#`_~•]/g, "").replace(/https?:\/\/\S+/g, "").trim();
          vedicAudio.speakVedicText(cleanSpeakText, `chat-msg-${fallbackMessage.id}`);
        }
      } catch {
        const effectiveName = activeAstroContext.name || "यजमान";
        const greetingPrefix = isFirstTurn ? `**राधे राधे, ${effectiveName} जी! कल्याण हो!** ` : "";
        const fallbackReplyText = `${greetingPrefix}${effectiveName} जी, आपके प्रश्न ("${userText.slice(0, 60)}") के संदर्भ में: आपकी राशि ${activeAstroContext.rashi || "पत्रिका"} तथा वर्तमान गोचर के अनुसार अपने इष्ट देव का स्मरण करें।`;
        const fallbackMessage = {
          id: `asst-${Date.now()}`,
          role: "assistant",
          text: fallbackReplyText,
          timestamp: nowStr
        };
        const finalMessages = [...updatedWithUser, fallbackMessage];
        setMessages(finalMessages);
        persistMessages(finalMessages);
      }
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    }
  };
  const handleClearChat = () => {
    setMessages([welcomeMessage]);
    persistMessages([welcomeMessage]);
    setShowHistoryDrawer(false);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey && !e.nativeEvent.isComposing) {
      e.preventDefault();
      if (!isLoading && input.trim()) {
        sendMessage();
      }
    }
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!isLoading && input.trim()) {
      sendMessage();
    }
  };
  const savedConversationCount = messages.filter((m) => m.id !== "msg-welcome").length;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: `flex flex-col bg-[#0c1220] overflow-hidden ${isEmbeddedInDrawer ? "h-full min-h-0" : "h-[calc(100dvh-140px)] sm:h-[80vh] min-h-[460px] max-h-[820px] border border-amber-600/40 rounded-2xl shadow-2xl"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `bg-gradient-to-r from-amber-950/90 via-[#19110a] to-[#0d1424] px-3 sm:px-5 border-b border-amber-700/40 flex ${isEmbeddedInDrawer ? "flex-row items-center justify-between py-2 gap-2" : "flex-col sm:flex-row items-start sm:items-center justify-between py-2.5 gap-2.5"} flex-shrink-0 z-20`,
            children: [
              !isEmbeddedInDrawer ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 min-w-0 w-full sm:w-auto flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(PanditPortrait, { size: "md", showBadge: true }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap sm:flex-nowrap", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm sm:text-base font-bold font-vedic text-amber-100 truncate", children: tr(
                      "आचार्य पण्डित शशांक शर्मा (पराशरी • जैमिनी • नाड़ी ज्योतिष)",
                      "Acharya Pandit Shashank Sharma (Parashari • Jaimini • Nadi Jyotish)",
                      "Acharya Pandit Shashank Sharma (Parashari • Jaimini • Nadi Jyotish)",
                      "आचार्य पंडित शशांक शर्मा (पराशरी व नाडी ज्योतिष)",
                      "આચાર્ય પંડિત શશાંક શર્મા (પરાશરી અને નાડી જ્યોતિષ)"
                    ) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30 flex-shrink-0", children: tr("प्रत्यक्ष उपलब्ध", "Active Online", "Sakriya (Online)", "सक्रिय", "સક્રિય") })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-amber-300/80 font-medium truncate", children: currentUser ? tr(
                    `मोबाइल हिस्ट्री सिंक: +91 ${currentUser.phone} (${savedConversationCount} संदेश सुरक्षित)`,
                    `Mobile History Synced: +91 ${currentUser.phone} (${savedConversationCount} messages saved)`,
                    `Mobile History Sync: +91 ${currentUser.phone} (${savedConversationCount} sandesh surakshit)`
                  ) : tr(
                    "चैट हिस्ट्री मोबाइल नंबर से सुरक्षित रखने हेतु लॉगिन करें",
                    "Login with your mobile number to keep chat history permanently synced",
                    "Chat history mobile number se save rakhne ke liye login karein"
                  ) })
                ] })
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-[11px] text-amber-200/90 font-medium min-w-0 flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3.5 h-3.5 text-amber-400 flex-shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: currentUser ? tr(
                  `सुरक्षित संदेश: ${savedConversationCount}`,
                  `Saved: ${savedConversationCount}`,
                  `Surakshit: ${savedConversationCount}`
                ) : tr(
                  "हिस्ट्री सेव हेतु लॉगिन करें",
                  "Login to save history",
                  "Login to save history"
                ) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 sm:gap-2 ml-auto sm:ml-0 flex-shrink-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: toggleAutoSpeak,
                    className: `flex items-center gap-1 px-2.5 py-1.5 rounded-lg border text-xs font-bold transition-all cursor-pointer ${autoSpeak ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/60 shadow-xs" : "bg-slate-900 text-amber-300/70 border-amber-800/40 hover:text-amber-200"}`,
                    title: autoSpeak ? "उत्तर स्वतः वाचन चालू है (Auto Speak Active)" : "उत्तर स्वतः वाचन चालू करें (Auto Speak for Elders)",
                    children: [
                      autoSpeak ? /* @__PURE__ */ jsxRuntimeExports.jsx(Volume2, { className: "w-3.5 h-3.5 text-emerald-400" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(VolumeX, { className: "w-3.5 h-3.5 text-amber-400/60" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden xs:inline text-[11px]", children: autoSpeak ? "ऑटो वॉइस चालू" : "ऑटो वॉइस" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => setShowHistoryDrawer(!showHistoryDrawer),
                    className: "flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-200 border border-amber-500/40 text-xs font-bold transition-colors cursor-pointer",
                    title: tr("चैटबॉट हिस्ट्री देखें", "View Chat History", "Chat History Dekhein"),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(History, { className: "w-3.5 h-3.5 text-amber-400" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                        tr("चैट हिस्ट्री", "Chat History", "Chat History"),
                        " (",
                        savedConversationCount,
                        ")"
                      ] })
                    ]
                  }
                ),
                isAdminAccount && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => setShowApiKeyModal(true),
                    className: "flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 border border-amber-500/40 text-xs font-bold transition-colors cursor-pointer",
                    title: "एडमिन ज्योतिष कुंजी सेटिंग्स (+91 8958499979)",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Key, { className: "w-3.5 h-3.5 text-amber-400" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "कुंजी सेटिंग्स" })
                    ]
                  }
                ),
                !currentUser && onOpenLoginModal && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: onOpenLoginModal,
                    className: "flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/40 text-xs font-bold transition-colors cursor-pointer",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-3.5 h-3.5" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr("लॉगिन", "Login", "Login") })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => onNavigateToTab("youtube"),
                    className: "hidden sm:flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-red-600/20 hover:bg-red-600/30 text-red-300 border border-red-500/30 text-xs font-semibold transition-colors cursor-pointer",
                    title: tr("यूट्यूब ज्ञान वीडियो", "YouTube Vedic Videos", "YouTube Gyan Videos"),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Youtube, { className: "w-3.5 h-3.5 fill-current" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr("यूट्यूब", "YouTube", "YouTube") })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: handleClearChat,
                    className: "p-1.5 rounded-lg text-slate-400 hover:text-rose-300 hover:bg-slate-800 transition-colors cursor-pointer",
                    title: tr("चैट रीसेट करें", "Reset Chat", "Chat Reset Karein"),
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-4 h-4" })
                  }
                )
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-slate-950/95 border-b border-amber-800/40 transition-all flex-shrink-0 z-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-3 sm:px-4 py-1.5 flex items-center justify-between gap-2 text-[11px] min-h-[32px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => setIsAstroContextExpanded(!isAstroContextExpanded),
                className: "flex items-center gap-1.5 text-left text-amber-200 hover:text-yellow-300 font-medium cursor-pointer min-w-0 flex-1 group",
                title: isAstroContextExpanded ? tr("सक्रिय ज्योतिष मूल्यांकन विवरण छुपाएं", "Hide Active Horoscope Context Details") : tr("सक्रिय ज्योतिष मूल्यांकन विवरण दिखाएं", "Show Active Horoscope Context Details"),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Compass, { className: "w-3.5 h-3.5 text-amber-400 flex-shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-yellow-300 whitespace-nowrap", children: activeAstroContext.hasProfile ? tr("ज्योतिष मूल्यांकन:", "Astro Context:") : tr("परामर्श मोड:", "Consultation:") }),
                  activeAstroContext.hasProfile ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "px-2 py-0.5 rounded-full bg-amber-950/80 border border-amber-700/50 text-amber-100 font-semibold text-[10px] truncate max-w-[180px] xs:max-w-[220px] sm:max-w-xs", children: [
                    activeAstroContext.name,
                    " • ",
                    activeAstroContext.lagna,
                    " • ",
                    activeAstroContext.rashi
                  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-900 border border-amber-700/40 text-amber-200/90 font-medium text-[10px] truncate max-w-[180px] xs:max-w-[220px] sm:max-w-xs", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3 h-3 text-theme-primary shrink-0", strokeWidth: 1.5 }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: tr("सामान्य वैदिक परामर्श • पंचांग व गोचर आधारित", "General Guidance • Live Panchang & Gochar") })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-0.5 text-[10px] font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-md border border-amber-500/30 ml-1 flex-shrink-0 group-hover:bg-amber-500/20 transition-colors", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: isAstroContextExpanded ? tr("छुपाएं", "Hide", "Chhipayein") : tr("विवरण देखें", "Details", "Details") }),
                    isAstroContextExpanded ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-3 h-3 text-amber-400" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-3 h-3 text-amber-400" })
                  ] })
                ]
              }
            ),
            activeAstroContext.hasProfile ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => onNavigateToTab("janam-kundali"),
                className: "inline-flex items-center gap-1 text-[10px] font-bold text-amber-400 hover:text-yellow-300 underline cursor-pointer flex-shrink-0",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr("कुंडली चार्ट", "Kundali") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3 h-3 shrink-0", strokeWidth: 1.5 })
                ]
              }
            ) : onOpenLoginModal && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: onOpenLoginModal,
                className: "inline-flex items-center gap-1 text-[10px] font-bold text-amber-300 hover:text-yellow-200 bg-amber-500/15 hover:bg-amber-500/25 px-2.5 py-0.5 rounded-full border border-amber-500/40 cursor-pointer flex-shrink-0 transition-colors",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "om", className: "w-3 h-3 shrink-0", tone: "theme" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr("लॉगिन करें", "Login") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3 h-3 shrink-0", strokeWidth: 1.5 })
                ]
              }
            )
          ] }),
          isAstroContextExpanded && (activeAstroContext.hasProfile ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-3 sm:px-4 pb-2.5 pt-1 border-t border-amber-800/30 bg-[#080d17]/90 flex flex-wrap items-center gap-1.5 text-[10px] animate-fadeIn", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-amber-950/90 border border-amber-600/50 text-amber-100 font-semibold", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-3 h-3 text-theme-primary shrink-0", strokeWidth: 1.5 }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                tr("यजमान:", "User:"),
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-yellow-300", children: activeAstroContext.name }),
                " (",
                activeAstroContext.dob,
                ")"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-amber-950/90 border border-amber-500/50 text-amber-100 font-semibold", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "trishul", className: "w-3 h-3 shrink-0", tone: "theme" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                tr("लग्न:", "Lagna:"),
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-yellow-300", children: activeAstroContext.lagna }),
                " (",
                activeAstroContext.lagnaLord,
                ")"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-indigo-950/90 border border-indigo-400/50 text-indigo-200 font-semibold", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "w-3 h-3 text-theme-primary shrink-0", strokeWidth: 1.5 }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                tr("राशि:", "Rashi:"),
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-yellow-300", children: activeAstroContext.rashi }),
                " (",
                activeAstroContext.nakshatra,
                ")"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-950/90 border border-emerald-500/50 text-emerald-300 font-bold", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3 text-emerald-300 shrink-0", strokeWidth: 1.5 }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                tr("महादशा:", "Mahadasha:"),
                " ",
                activeAstroContext.dashaLabel
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-purple-950/90 border border-purple-500/40 text-purple-200 font-semibold", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Gem, { className: "w-3 h-3 text-theme-primary shrink-0", strokeWidth: 1.5 }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                tr("शुभ रत्न:", "Ratna:"),
                " ",
                activeAstroContext.ratna
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-teal-950/90 border border-teal-500/40 text-teal-200 font-semibold", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "rudraksha", className: "w-3 h-3 shrink-0", tone: "theme" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                tr("रुद्राक्ष:", "Rudraksha:"),
                " ",
                activeAstroContext.rudraksha
              ] })
            ] })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-3 sm:px-4 pb-2.5 pt-1.5 border-t border-amber-800/30 bg-[#080d17]/95 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] animate-fadeIn text-amber-200", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-0.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-semibold text-yellow-300 flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "kalash", className: "w-3.5 h-3.5 shrink-0", tone: "theme" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr(
                  "आप अतिथि (Guest) के रूप में परामर्श ले रहे हैं",
                  "You are consulting as a Guest"
                ) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-amber-300/80 text-[10px]", children: tr(
                "सटीक जन्म लग्न, राशि, विंशोत्तरी महादशा एवं व्यक्तिगत कुंडली फलादेश हेतु कृपया लॉगिन करें या चैट में अपनी जन्म तिथि, समय व स्थान बताएं।",
                "For exact birth Lagna, Rashi, Mahadasha and personal horoscope prediction, please login or provide your DOB, birth time and place in chat."
              ) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-shrink-0", children: [
              onOpenLoginModal && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: onOpenLoginModal,
                  className: "inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-slate-950 font-extrabold text-[10px] rounded-lg shadow cursor-pointer transition-all whitespace-nowrap",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "om", className: "w-3 h-3 shrink-0", tone: "current" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr("लॉगिन करें", "Login Now") })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => onNavigateToTab("janam-kundali"),
                  className: "inline-flex items-center gap-1 px-3 py-1 bg-slate-900 hover:bg-slate-800 text-amber-300 border border-amber-500/40 font-bold text-[10px] rounded-lg cursor-pointer transition-all whitespace-nowrap",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr("कुंडली बनाएं", "Create Kundali") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3 h-3 shrink-0", strokeWidth: 1.5 })
                  ]
                }
              )
            ] })
          ] }))
        ] }),
        showHistoryDrawer && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-slate-950/95 border-b border-amber-700/50 p-3 sm:p-4 max-h-56 overflow-y-auto space-y-2 flex-shrink-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-bold text-amber-300 flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(History, { className: "w-3.5 h-3.5 text-amber-400" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                tr("आपकी चैटबॉट प्रश्नोत्तरी हिस्ट्री", "Your Saved Q&A Chat History", "Aapki Saved Chat History"),
                " ",
                currentUser ? `(+91 ${currentUser.phone})` : tr("(गेस्ट सेशन)", "(Guest Session)", "(Guest Session)")
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => onNavigateToTab("history"),
                  className: "inline-flex items-center gap-1 text-[11px] text-amber-400 hover:underline font-bold cursor-pointer",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr("मेरी सम्पूर्ण हिस्ट्री टैब खोलें", "Open Full History Tab", "Meri Sampoorna History Kholen") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3 h-3 shrink-0", strokeWidth: 1.5 })
                  ]
                }
              ),
              savedConversationCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: handleClearChat,
                  className: "text-[11px] text-rose-400 hover:underline flex items-center gap-1 cursor-pointer",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3 h-3" }),
                    " ",
                    tr("साफ़ करें", "Clear", "Saaf Karein")
                  ]
                }
              )
            ] })
          ] }),
          savedConversationCount === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-400 py-2", children: tr(
            "अभी कोई पुराना संवाद नहीं है। नीचे कोई भी प्रश्न पूछें, वह आपके मोबाइल नंबर के इतिहास में सुरक्षित हो जाएगा।",
            "No past conversation yet. Ask any question below and it will be saved in your history.",
            "Abhi koi purana samvad nahi hai. Niche koi bhi prashna puchein, vah aapki history mein save ho jayega."
          ) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5", children: messages.filter((m) => m.id !== "msg-welcome" && m.role === "user").map((q) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              onClick: () => {
                setInput(q.text);
                setShowHistoryDrawer(false);
              },
              className: "p-2 rounded-lg bg-slate-900 hover:bg-amber-950/40 border border-amber-900/40 flex items-center justify-between gap-2 text-xs text-amber-100 cursor-pointer",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 truncate min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleQuestionMark, { className: "w-3.5 h-3.5 text-theme-primary shrink-0", strokeWidth: 1.5 }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: q.text })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-slate-400 flex-shrink-0", children: q.timestamp })
              ]
            },
            q.id
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            ref: messagesContainerRef,
            className: "flex-1 min-h-0 overflow-y-auto p-3 sm:p-5 space-y-4 bg-radial-gradient",
            children: [
              messages.map((msg) => {
                const isUser = msg.role === "user";
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: `flex items-start gap-2.5 sm:gap-3 ${isUser ? "flex-row-reverse" : "flex-row"}`,
                    children: [
                      isUser ? /* @__PURE__ */ jsxRuntimeExports.jsx(UserAvatar, { currentUser, size: "sm", fallbackName: currentUser?.name || "आप" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PanditPortrait, { size: "xs", showBadge: true }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "div",
                        {
                          className: `max-w-[85%] sm:max-w-[78%] rounded-2xl p-3.5 sm:p-4 text-xs sm:text-sm leading-relaxed ${isUser ? "bg-amber-600 text-slate-950 font-medium rounded-tr-none shadow-md" : "bg-slate-900/95 text-amber-50 border border-amber-700/40 rounded-tl-none shadow-lg"}`,
                          children: [
                            !isUser && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] font-bold text-amber-400 mb-1.5 flex items-center justify-between gap-2", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr("पं. शशांक शर्मा", "Pt. Shashank Sharma", "Pt. Shashank Sharma") }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "button",
                                {
                                  type: "button",
                                  onClick: () => {
                                    const speechId = `chat-msg-${msg.id}`;
                                    if (activeSpeechId !== speechId) {
                                      vedicAudio.playTempleBell(0.45);
                                    }
                                    vedicAudio.toggleSpeakText(msg.text, speechId);
                                  },
                                  className: `px-2 py-0.5 rounded-lg border text-[10px] font-bold inline-flex items-center gap-1 cursor-pointer transition-all ${activeSpeechId === `chat-msg-${msg.id}` ? "bg-emerald-500 text-slate-950 border-emerald-300" : "bg-amber-500/20 hover:bg-amber-500/30 text-amber-200 border-amber-500/40"}`,
                                  children: activeSpeechId === `chat-msg-${msg.id}` ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                                    /* @__PURE__ */ jsxRuntimeExports.jsx(VolumeX, { className: "w-3 h-3" }),
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr("उत्तर रोकें", "Stop Audio", "Audio Rokein") })
                                  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                                    /* @__PURE__ */ jsxRuntimeExports.jsx(Volume2, { className: "w-3 h-3 text-yellow-400" }),
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr("उत्तर सुनें", "Listen Reply", "Uttar Sunein") })
                                  ] })
                                }
                              )
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "whitespace-pre-line", children: isUser ? msg.text : renderFormattedVedicText(msg.text) }),
                            !isUser && msg.sources && msg.sources.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 pt-2.5 border-t border-amber-800/40 space-y-1.5", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-[10px] font-bold text-amber-300/90", children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "w-3 h-3 text-amber-400 flex-shrink-0" }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr(
                                  "लाइव पंचांग एवं ज्योतिष संदर्भ स्रोत (Web Grounded):",
                                  "Live Astrological & Panchang Web Sources:"
                                ) })
                              ] }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: msg.sources.map((src, sIdx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                "a",
                                {
                                  href: src.uri,
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-amber-950/70 hover:bg-amber-900/70 border border-amber-600/40 text-[10px] text-amber-200 hover:text-yellow-300 transition-colors max-w-[230px]",
                                  title: src.title,
                                  children: [
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: src.title }),
                                    /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-2.5 h-2.5 flex-shrink-0 text-amber-400" })
                                  ]
                                },
                                sIdx
                              )) })
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs(
                              "div",
                              {
                                className: `mt-2 text-[10px] flex items-center justify-end gap-1 ${isUser ? "text-amber-950/70" : "text-slate-400"}`,
                                children: [
                                  currentUser && /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3 h-3 inline" }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: msg.timestamp })
                                ]
                              }
                            )
                          ]
                        }
                      )
                    ]
                  },
                  msg.id
                );
              }),
              isLoading && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(PanditPortrait, { size: "xs", showBadge: true }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-slate-900/90 border border-amber-900/40 rounded-2xl rounded-tl-none p-3.5 shadow-lg flex items-center gap-2 text-xs text-amber-300", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex space-x-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "w-2 h-2 bg-amber-400 rounded-full animate-bounce",
                        style: { animationDelay: "0ms" }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "w-2 h-2 bg-amber-400 rounded-full animate-bounce",
                        style: { animationDelay: "150ms" }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "w-2 h-2 bg-amber-400 rounded-full animate-bounce",
                        style: { animationDelay: "300ms" }
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic", children: tr(
                    "पण्डित शशांक शर्मा जी शास्त्र सम्मत विचार कर रहे हैं...",
                    "Acharya Pandit Shashank Sharma is consulting Vedic Shastras...",
                    "Pandit Shashank Sharma Ji shastra sammat vichar kar rahe hain..."
                  ) })
                ] })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-3 py-2 bg-slate-950/80 border-t border-amber-900/30 overflow-x-auto scrollbar-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 whitespace-nowrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] font-semibold text-amber-400/80 flex items-center gap-1 mr-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3 h-3 text-amber-400" }),
            " ",
            tr("त्वरित प्रश्न:", "Quick Questions:", "Twarit Prashna:")
          ] }),
          quickChips.map((chip, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              disabled: isLoading,
              onClick: () => sendMessage(chip),
              className: "text-[11px] px-2.5 py-1 rounded-full bg-slate-900 hover:bg-amber-900/40 text-amber-200/90 border border-amber-900/40 transition-colors flex-shrink-0 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed",
              children: chip
            },
            idx
          ))
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "form",
          {
            onSubmit: handleFormSubmit,
            className: "p-3 sm:p-3.5 bg-slate-950 border-t border-amber-900/50 space-y-2",
            children: [
              speechError && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2 rounded-xl bg-amber-950/80 border border-amber-500/50 text-yellow-300 text-[11px] font-semibold flex items-center gap-1.5 animate-fadeIn", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3.5 h-3.5 text-amber-400 flex-shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: speechError })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    disabled: isLoading,
                    onClick: toggleListening,
                    className: `p-2.5 sm:p-3 rounded-xl border font-bold transition-all cursor-pointer flex-shrink-0 flex items-center justify-center gap-1.5 disabled:opacity-40 disabled:cursor-not-allowed ${isListening ? "bg-rose-600 hover:bg-rose-500 text-white border-rose-300 animate-pulse shadow-lg shadow-rose-600/40" : "bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border-amber-500/50 hover:border-amber-400"}`,
                    title: isListening ? tr("माइक रोकें (सुन रहे हैं...)", "Stop Mic (Listening...)", "Mic Rokein") : tr("बोलकर प्रश्न पूछें (Voice Mic)", "Speak Your Question (Voice Mic)", "Bolkar Puchein"),
                    children: isListening ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(MicOff, { className: "w-4 h-4 animate-bounce" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-extrabold hidden xs:inline", children: "सुन रहे हैं..." })
                    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Mic, { className: "w-4 h-4" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    ref: inputRef,
                    type: "text",
                    value: input,
                    enterKeyHint: "send",
                    autoComplete: "off",
                    onChange: (e) => setInput(e.target.value),
                    onKeyDown: handleKeyDown,
                    placeholder: isLoading ? tr(
                      "आचार्य जी विचार कर रहे हैं...",
                      "Acharya Ji is analyzing according to Vedic Shastras...",
                      "Acharya Ji vichar kar rahe hain..."
                    ) : isListening ? tr("बोलिए, पण्डित जी सुन रहे हैं...", "Listening... please speak your question", "Boliye, sun rahe hain...") : tr(
                      "पण्डित शशांक शर्मा जी से पूछें या माइक दबाकर बोलें...",
                      "Ask Acharya Pandit Shashank Sharma or click Mic to speak...",
                      "Pandit Ji se puchein ya Mic dabakar bolein..."
                    ),
                    className: `flex-1 bg-slate-900 border rounded-xl px-3.5 py-2.5 sm:py-3 text-xs sm:text-sm text-amber-100 placeholder:text-slate-500 focus:outline-none transition-colors ${isListening ? "border-rose-500/80 bg-rose-950/20 ring-1 ring-rose-500/50" : "border-amber-900/60 focus:border-amber-500"}`
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "submit",
                    disabled: !input.trim() || isLoading,
                    className: "p-2.5 sm:p-3 rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-slate-950 font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer shadow-lg shadow-amber-600/30 flex-shrink-0 flex items-center justify-center min-w-[42px]",
                    title: isLoading ? tr("विचार चल रहा है...", "Analyzing query...", "Vichar chal raha hai...") : tr("संदेश भेजें", "Send Message", "Sandesh Bhejein"),
                    children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-4 h-4 animate-spin text-slate-950" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "w-4 h-4" })
                  }
                )
              ] })
            ]
          }
        ),
        isAdminAccount && showApiKeyModal && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#0c1220] border border-amber-500/50 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-4 sm:p-5 text-amber-100 shadow-2xl space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-amber-500/20 pb-2.5 sticky top-0 bg-[#0c1220] z-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Key, { className: "w-5 h-5 text-amber-400" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-sm sm:text-base text-amber-200", children: "१२-कुंजी ऑटो-रोटेशन एवं ज्योतिष चैट सेटिंग्स (Admin: 8958499979)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-emerald-400 font-semibold", children: "केवल एडमिन खाते (+91 8958499979) को दृश्यमान • Key #1 से Key #12 ऑटो-रोटेशन" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => setShowApiKeyModal(false),
                className: "inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-200 text-xs font-bold cursor-pointer",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3.5 h-3.5 shrink-0", strokeWidth: 1.5 }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "बंद करें" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AdminGeminiKeyManager, { currentUser })
        ] }) })
      ]
    }
  );
};
const ShashankSharmaChat = (props) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ChatErrorBoundary, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShashankSharmaChatInner, { ...props }) });
};
export {
  ChatErrorBoundary,
  ShashankSharmaChat
};
