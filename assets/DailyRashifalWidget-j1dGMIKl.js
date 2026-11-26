const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/dailyRashifalEngine-JyJx31y8.js","assets/panchang-core-24ia-akc.js","assets/vendor-astronomy-C8JZdkQu.js","assets/drikGanitaRashifalEngine-fnpcD7FF.js","assets/weeklyRashifalEngine-Bt9CVUst.js","assets/monthlyRashifalEngine-Dn0LNh4n.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from "./vendor-pdf-CpPyS1re.js";
import { r as reactExports, j as jsxRuntimeExports } from "./vendor-react-CCbeDaYX.js";
import { C as getCalculationViewingMode, H as getActiveProfile, I as getVedicDetailsFromName, J as generateSampurnKundali, c as getActivePanchangLocation, g as getISTCalendarParts, o as buildFastSingleDayPanchang, V as VAAR_LIST, K as HINDI_MONTH_SHORT, L as formatUserSalutation, b as buildSingleDayPanchang, p as resolveBhadraRahuFreeShreshthaSamay, M as resolveHindiCityDisplayName, j as resolvePrimarySamvatsaraForLocation, E as setCalculationViewingMode, A as getMsUntilNextISTMidnight } from "./panchang-core-24ia-akc.js";
import { u as useLanguage, v as vedicAudio, b as useFestiveTheme, r as resolvePanchangRoyalThemeForDay, s as setLivePageCardPayload, d as scrollToResultById, V as VedicRashiIcon, e as ShareableVedicCardButton } from "./index-AQ5SI3vl.js";
import { V as VedicDateInput } from "./VedicDateInput-QzCgtRnr.js";
import { u as useVedicValidation, V as VedicTripleCheckBadge } from "./VedicTripleCheckBadge-B_j2EZJj.js";
import { g as getDailySarvajanHitayaRemedyHi, f as formatHindiHouseOrdinal, a as formatEnglishHouseOrdinal, b as buildRashifalSaralArthaHi } from "./drikGanitaRashifalEngine-fnpcD7FF.js";
import { getFestiveLightPalette, CardFestiveLightStrip } from "./FestiveLightsJhalar-Bu-YA1w5.js";
import { d as deduplicateAndPolishProse, s as splitIntoSentences, h as hasSemanticConceptOverlap, a as haveSameConcludingClause, b as stripAnyRemedyLeadPrefix, c as cleanIntraSentenceHindiRepetitions, m as mapAppLanguageToLocale, e as defaultTextIntelligenceEngine, f as stripPersonalSalutation, g as buildFullSingleRashiPost, i as buildAll12RashisPost, j as shareProfessionalPostOnWhatsApp, k as shareProfessionalPostOnFacebook, l as copyPostToClipboard, n as shareProfessionalPostNative } from "./professionalSocialPostBuilder-DF74SzUH.js";
import { S as Sparkles, w as BookOpen, ax as ChevronUp, al as ChevronDown, aa as Bell, ap as Sun, a5 as CircleCheck, Q as VolumeX, T as Volume2, a9 as Flame, g as Star, ay as Telescope, az as Type, a8 as Compass, x as Calendar, aq as Moon, aA as ChevronLeft, am as ChevronRight, ao as RotateCcw, ah as LoaderCircle, a4 as TriangleAlert, t as MessageCircle, $ as Share2, Y as Copy, X, r as Briefcase, aB as TrendingUp, aC as Heart, p as GraduationCap, n as ShieldCheck, aD as Megaphone, e as Smartphone, aE as Lightbulb, aF as FileText, C as Check } from "./vendor-icons-Bk5Rg8-9.js";
import "./vendor-astronomy-C8JZdkQu.js";
import "./seo-core-DnNehtWz.js";
import "./vedicTripleCheck-C0ip0Qtr.js";
const TWELVE_RASHI_CAREER_ACTIONS = {
  1: {
    strongHi: "नौकरी में नेतृत्व व नई ज़िम्मेदारी मिलने के संकेत हैं; व्यापार में तकनीकी या फील्ड विस्तार की पहल लाभप्रद रहेगी।",
    balancedHi: "नौकरीपेशा जातक लक्ष्य-आधारित कार्यसूची बनाकर आगे बढ़ें; व्यापारियों को पुराने ऑर्डर समय पर निपटाने से साख बढ़ेगी।",
    cautionHi: "नौकरी में वरिष्ठों से तीखी बहस से बचें और व्यापार में उधार या बड़े सौदे लिखित शर्तों के बिना न करें।",
    strongEn: "Workplace leadership and fresh responsibilities favor salaried professionals; business owners benefit from technical or field expansion.",
    balancedEn: "Salaried professionals should prioritize milestone-based execution, while merchants build goodwill by delivering pending orders on time.",
    cautionEn: "Avoid sharp disagreements with supervisors at work, and verify written terms before extending trade credit.",
    strongSa: "कार्यक्षेत्रे नेतृत्वलाभः नूतनदायित्वं च सम्भाव्यते; व्यापारे तकनीकीविस्तारः लाभकरः।",
    balancedSa: "नियमितकार्यसूच्या वृत्तिस्थैर्यं वर्धते; व्यापारे पूर्वकार्याणां समयपूर्णता प्रतिष्ठादात्री।",
    cautionSa: "कार्यस्थले वरिष्ठैः सह विवादं परिहरेत्; व्यापारे लिखितप्रमाणं विना ऋणव्यवहारं न कुर्यात्।"
  },
  2: {
    strongHi: "नौकरी में पदोन्नति या वेतन-वार्ता अनुकूल रहेगी; व्यवसाय में स्थायी ग्राहक व दीर्घकालिक अनुबंध से आय मजबूत होगी।",
    balancedHi: "नौकरी में निरंतर गुणवत्ता बनाए रखें; व्यापारियों को स्टॉक प्रबंधन और नकदी-प्रवाह संतुलित रखने से स्थिर लाभ मिलेगा।",
    cautionHi: "कार्यस्थल पर ज़िद के बजाय लचीलापन अपनाएँ; व्यवसाय में अचानक बड़े पूँजी-निवेश को अभी टालना सुरक्षित है।",
    strongEn: "Appraisal or compensation discussions look constructive at work; businesses gain steady revenue from loyal clients and long-term contracts.",
    balancedEn: "Maintain consistent quality in salaried roles; traders benefit from disciplined inventory control and healthy cash-flow tracking.",
    cautionEn: "Choose adaptability over rigidity with colleagues, and postpone sudden heavy capital outlays in business.",
    strongSa: "वृत्तौ पदोन्नतिसंकेतः वेतनवृद्धिश्च; व्यापारे स्थायीग्राहकैः दीर्घानुबन्धैश्च अर्थलाभः।",
    balancedSa: "कार्यगुणवत्तया मानवृद्धिः; व्यापारे संग्रहसन्तुलनेन धनप्रवाहः स्थिरो भवति।",
    cautionSa: "कार्यस्थले आग्रहं त्यक्त्वा समन्वयं कुर्यात्; व्यापारे आकस्मिकं बृहन्निवेशं स्थगयेत्।"
  },
  3: {
    strongHi: "नौकरी में संवाद, प्रेजेंटेशन व मार्केटिंग कौशल से सराहना मिलेगी; व्यापार में नए संपर्क और डिजिटल डील्स सफल होंगी।",
    balancedHi: "ऑफिस में ईमेल व दस्तावेज़ स्पष्ट रखें; व्यवसाय में ग्राहकों की प्रतिक्रिया सुनकर सेवा सुधारने से नए अवसर खुलेंगे।",
    cautionHi: "नौकरी में एक साथ कई अधूरे काम न फैलाएँ; व्यापार में मौखिक वादों पर भरोसा करने से पहले कागज़ी पुष्टि करें।",
    strongEn: "Communication, presentations, and client outreach shine at work; digital deals and new networking channels expand business.",
    balancedEn: "Keep workplace documentation crisp; merchants can unlock fresh demand by acting on customer feedback.",
    cautionEn: "Avoid scattering focus across too many unfinished tasks at work, and confirm business commitments in writing.",
    strongSa: "संवादकौशलेन कार्यस्थले प्रशंसा; व्यापारे नूतनसम्पर्कैः अनुबन्धाः सिद्ध्यन्ति।",
    balancedSa: "कार्यालये लेख्यस्पष्टता श्रेष्ठा; ग्राहकसन्तोषेण व्यापारवृद्धिः भवति।",
    cautionSa: "अनेककार्येषु चित्तविक्षेपं परिहरेत्; व्यापारे मौखिकवचनात् पूर्वं लिखितपुष्टिं कुर्यात्।"
  },
  4: {
    strongHi: "नौकरी में टीम-प्रबंधन व सहकर्मियों के सहयोग से महत्वपूर्ण प्रोजेक्ट पूरा होगा; सेवा, खाद्य या रियल-एस्टेट व्यापार में अच्छी प्रगति होगी।",
    balancedHi: "ऑफिस के वातावरण में शांत समन्वय रखें; व्यापारियों को पुराने विश्वसनीय सप्लायर्स के साथ काम बढ़ाना उपयोगी रहेगा।",
    cautionHi: "कार्यक्षेत्र की आलोचना को व्यक्तिगत न लें; व्यवसाय में भावनात्मक निर्णय के बजाय लाभ-हानि के आंकड़ों पर भरोसा करें।",
    strongEn: "Team coordination helps complete flagship projects at work; hospitality, service, and property-linked businesses show solid progress.",
    balancedEn: "Foster calm collaboration with teammates; business owners gain stability by strengthening ties with trusted suppliers.",
    cautionEn: "Do not take workplace feedback personally; base business decisions on hard numbers rather than emotion.",
    strongSa: "सहयोगेन मुख्यपरियोजना सिद्धिं प्राप्नोति; सेवा-गृहनिर्माणव्यापारे च उन्नतिः।",
    balancedSa: "कार्यस्थले शान्तसमन्वयः हितकरः; विश्वस्तसहयोगिभिः व्यापारस्थैर्यं वर्धते।",
    cautionSa: "कार्यालोचनां मनसि न धारयेत्; व्यापारे भावुकतायाः अपेक्षया लाभहानिगणनां पश्येत्।"
  },
  5: {
    strongHi: "नौकरी में प्रशासनिक दक्षता व निर्णय क्षमता से उच्चाधिकारियों का विश्वास जीतेगा; व्यापार में ब्रांड प्रतिष्ठा और बड़े ऑर्डर बढ़ेंगे।",
    balancedHi: "ऑफिस में टीम को श्रेय देकर साथ चलें; व्यवसाय में गुणवत्ता व पैकेजिंग पर ध्यान देने से ग्राहक संतुष्टि बढ़ेगी।",
    cautionHi: "कार्यस्थल पर अहंकार-टकराव से दूरी रखें; व्यापार में जोखिमपूर्ण साझेदारी या दिखावटी खर्च से बचें।",
    strongEn: "Administrative clarity wins leadership confidence in salaried roles; stronger brand reputation attracts higher-value business orders.",
    balancedEn: "Share credit generously with your team at work; upgrading presentation and service quality raises repeat business.",
    cautionEn: "Steer clear of ego clashes at the office, and avoid vanity spending or unverified partnerships in business.",
    strongSa: "प्रशासनदक्षतया उच्चाधिकारिणां विश्वासप्राप्तिः; व्यापारे प्रतिष्ठावृद्धिः बृहत्कायाणि च।",
    balancedSa: "सहकर्मिभिः सह सम्मानव्यवहारः श्रेष्ठः; गुणवत्तावर्धनेन व्यापारः समृद्ध्यति।",
    cautionSa: "कार्यस्थले अहङ्कारसंघर्षं त्यजेत्; व्यापारे व्यर्थव्ययं परिहरेत्।"
  },
  6: {
    strongHi: "नौकरी में विश्लेषण, अकाउंट्स, ऑडिट या तकनीकी सूक्ष्मता से विशेष पहचान मिलेगी; व्यापार में लागत-नियंत्रण से शुद्ध मुनाफा बढ़ेगा।",
    balancedHi: "कार्यस्थल पर समयबद्ध रिपोर्टिंग और डेटा सटीकता रखें; व्यापारियों को बकाया वसूली व बिलिंग व्यवस्थित करने से लाभ होगा।",
    cautionHi: "ऑफिस में छोटी त्रुटियों पर अत्यधिक तनाव न लें; व्यवसाय में टैक्स या अनुपालन कागज़ात की दोबारा जाँच अवश्य करें।",
    strongEn: "Analytical rigor, auditing, and technical accuracy earn recognition at work; disciplined cost control lifts business margins.",
    balancedEn: "Prioritize timely reporting and clean data at the office; merchants improve liquidity by streamlining invoicing and receivables.",
    cautionEn: "Avoid over-stressing over minor imperfections at work, and double-check compliance or tax paperwork in business.",
    strongSa: "विश्लेषणदक्षतया तकनीकीशुद्धतया च कार्यस्थले सम्मानः; व्यापारे व्ययनियन्त्रणेन लाभः।",
    balancedSa: "समयबद्धकार्यसम्पादनेन विश्वासः वर्धते; व्यापारे लेखाव्यवस्थां सुदृढां कुर्यात्।",
    cautionSa: "क्षुद्रत्रुटिषु अत्यधिकचिन्तां त्यजेत्; व्यापारपत्राणां पुनःपरीक्षणं करणीयम्।"
  },
  7: {
    strongHi: "नौकरी में क्लाइंट-डीलिंग व मध्यस्थता से बड़े अवसर मिलेंगे; साझेदारी, डिज़ाइन या परामर्श व्यापार में लाभदायक अनुबंध होंगे।",
    balancedHi: "ऑफिस में संतुलित व्यवहार और स्पष्ट समयसीमा तय करें; व्यवसाय में साझेदारों के साथ पारदर्शी हिसाब-किताब रखें।",
    cautionHi: "कार्यक्षेत्र में निर्णय टालने की प्रवृत्ति छोड़ें; व्यापार में किसी तीसरे पक्ष के भरोसे बड़ा सौदा अधूरा न छोड़ें।",
    strongEn: "Client relations and diplomatic negotiation open doors at work; partnerships, design, and advisory businesses close favorable deals.",
    balancedEn: "Set balanced timelines with coworkers; maintain transparent accounting with business partners.",
    cautionEn: "Avoid indecisiveness on key office deliverables, and do not leave major trade agreements dependent on third-party assurances.",
    strongSa: "सौहार्दपूर्णव्यवहारेण कार्यस्थले नूतनाः अवसराः; साझेदारीव्यापारे च शुभानुबन्धः।",
    balancedSa: "सन्तुलितसमयनियमेन कार्यसिद्धिः; व्यापारे पारदर्शिता विश्वासं वर्धयति।",
    cautionSa: "निर्णयविलम्बं परिहरेत्; व्यापारे अन्यभरोसे मुख्यव्यवहारं न स्थापयेत्।"
  },
  8: {
    strongHi: "नौकरी में शोध, डेटा-सुरक्षा या जटिल समस्या-समाधान से वरिष्ठ प्रभावित होंगे; व्यवसाय में रणनीतिक बदलाव से रुका हुआ लाभ खुलेगा।",
    balancedHi: "कार्यस्थल की योजनाओं को परिपक्व होने तक गोपनीय रखें; व्यापारियों को पुराने संपर्कों से दोबारा संवाद करने पर अच्छा काम मिलेगा।",
    cautionHi: "ऑफिस की गुटबाज़ी व अफवाहों से दूर रहें; व्यापार में उधारी या जोखिम भरे शॉर्टकट से नुकसान हो सकता है।",
    strongEn: "Deep research and complex problem-solving impress leadership; a strategic pivot unlocks stalled business revenues.",
    balancedEn: "Keep nascent workplace plans confidential until finalized; reconnecting with past clients brings fresh business leads.",
    cautionEn: "Stay completely away from office politics, and avoid risky shortcuts or unbacked credit in business.",
    strongSa: "गहनशोधेन जटिलकार्यसमाधानेन च प्रतिष्ठा; व्यापारे रणनीतिकपरिवर्तनेन अर्थलाभः।",
    balancedSa: "कार्ययोजनां परिपक्वावस्थापर्यन्तं गोपनीयां रक्षेत्; पूर्वसम्पर्कैः व्यापारवृद्धिः।",
    cautionSa: "कार्यालयविवादात् दूरं तिष्ठेत्; व्यापारे जोखिमयुक्तं शीघ्रमार्गं त्यजेत्।"
  },
  9: {
    strongHi: "नौकरी में उच्च प्रशिक्षण, परामर्श या बाहरी प्रोजेक्ट से तरक्की के योग हैं; व्यापार में नए शहर, ऑनलाइन विस्तार या शिक्षा-क्षेत्र से लाभ होगा।",
    balancedHi: "ऑफिस में अनुभवियों के मार्गदर्शन से कठिन कार्य सरल होंगे; व्यवसाय में दीर्घकालिक ब्रांड निर्माण पर निवेश करें।",
    cautionHi: "कार्यस्थल पर अति-आत्मविश्वास में तथ्य न छोड़ें; व्यापारिक यात्रा या विस्तार से पहले बजट की व्यावहारिक समीक्षा करें।",
    strongEn: "Higher training, advisory work, or cross-regional projects accelerate career growth; outstation or online channels expand business.",
    balancedEn: "Leverage senior mentorship to simplify complex office tasks; invest steadily in long-term business credibility.",
    cautionEn: "Guard against overconfidence with operational details, and review budgets pragmatically before business expansion.",
    strongSa: "प्रशिक्षणेन परामर्शकार्येण च वृत्त्युन्नतिः; व्यापारे नूतनक्षेत्रविस्तारात् लाभः।",
    balancedSa: "ज्येष्ठमार्गदर्शनेन कठिनकार्यं सरलं भवति; व्यापारे दीर्घदृष्टिः फलदात्री।",
    cautionSa: "अत्यात्मविश्वासेन तथ्योपेक्षां न कुर्यात्; व्यापारविस्तारात् पूर्वं व्ययगणनां कुर्यात्।"
  },
  10: {
    strongHi: "नौकरी में कठोर परिश्रम का ठोस प्रतिफल और स्थायी पद-प्रतिष्ठा मिलेगी; निर्माण, प्रशासन या उद्योग व्यापार में मजबूत ऑर्डर आएँगे।",
    balancedHi: "ऑफिस में अनुशासित कार्यशैली व समयबद्ध डिलीवरी से विश्वसनीयता बढ़ेगी; व्यापारियों को क्रमिक विस्तार की नीति अपनानी चाहिए।",
    cautionHi: "कार्यभार का दबाव स्वास्थ्य पर न आने दें; व्यवसाय में सरकारी नियमों व अनुबंध की समयसीमा में ढिलाई न बरतें।",
    strongEn: "Consistent diligence earns tangible recognition and career durability; industrial, operations, and infrastructure businesses see strong demand.",
    balancedEn: "Disciplined execution and punctual delivery elevate workplace trust; favor steady, step-by-step business growth.",
    cautionEn: "Do not let heavy workloads erode rest, and stay strictly on schedule with regulatory and contractual obligations.",
    strongSa: "सततपरिश्रमेण स्थायीप्रतिष्ठा कार्यसिद्धिः च; उद्योग-निर्माणव्यापारे च उत्तमलाभः।",
    balancedSa: "अनुशासितकार्यशैल्या विश्वासः दृढो भवति; व्यापारे क्रमिकविस्तारः श्रेयः।",
    cautionSa: "अत्यधिककार्यभारेण स्वास्थ्यम् उपेक्षेत् न; व्यापारनियमेषु समयपालनं कुर्यात्।"
  },
  11: {
    strongHi: "नौकरी में नवाचार, ऑटोमेशन या टीम-नेटवर्क से तेज प्रगति होगी; स्टार्टअप, आईटी या सामूहिक व्यापार में उल्लेखनीय लाभ के योग हैं।",
    balancedHi: "ऑफिस में नए कौशल सीखने और स्मार्ट टूल्स अपनाने से कार्यक्षमता बढ़ेगी; व्यापार में नेटवर्किंग से उपयोगी साझेदार मिलेंगे।",
    cautionHi: "कार्यस्थल पर केवल विचारों तक सीमित न रहकर क्रियान्वयन पूरा करें; व्यवसाय में अनजान स्कीमों से दूर रहें।",
    strongEn: "Innovation, automation, and strong peer networks propel career progress; tech, startup, and community-driven ventures gain traction.",
    balancedEn: "Upskilling and modern workflows boost daily output; purposeful networking brings valuable business collaborators.",
    cautionEn: "Pair creative ideas with disciplined follow-through at work, and steer clear of untested business schemes.",
    strongSa: "नवाचारेण आधुनिककौशलेन च वृत्तौ शीघ्रप्रगतिः; तकनीकीव्यापारे च विशेषलाभः।",
    balancedSa: "नूतनकौशलशिक्षणेन कार्यक्षमता वर्धते; सद्सम्पर्कैः व्यापारसहयोगः लभ्यते।",
    cautionSa: "केवलविचारे न स्थित्वा क्रियान्वयनं पूर्णं कुर्यात्; अपरिचितव्यापारयोजनां त्यजेत्।"
  },
  12: {
    strongHi: "नौकरी में रचनात्मक प्रोजेक्ट, सेवा-क्षेत्र या विदेशी संपर्क से सम्मान मिलेगा; आयात-निर्यात, कला या परामर्श व्यापार में शुभ वृद्धि होगी।",
    balancedHi: "ऑफिस में शांत एकाग्रता से जटिल काम समय पर निपटाएँ; व्यापारियों को ग्राहक-विश्वास और पारदर्शी सेवा पर ध्यान देना चाहिए।",
    cautionHi: "कार्यस्थल पर अस्पष्ट निर्देशों को पहले स्पष्ट कर लें; व्यापार में किसी पर आँख मूँदकर भरोसा कर भुगतान न करें।",
    strongEn: "Creative projects, service roles, and international collaborations shine; export, arts, and consulting businesses see auspicious growth.",
    balancedEn: "Calm focus helps finish intricate office assignments cleanly; merchants build loyalty through transparent customer care.",
    cautionEn: "Clarify ambiguous workplace instructions early, and avoid blind trust in financial disbursements.",
    strongSa: "रचनात्मककार्येण वैदेशिकसम्पर्केण च सम्मानः; कला-परामर्शव्यापारे च शुभोन्नतिः।",
    balancedSa: "शान्तैकाग्रतया जटिलकार्यसिद्धिः; व्यापारे पारदर्शीसेवा विश्वासं जनयति।",
    cautionSa: "अस्पष्टनिर्देशान् पूर्वं स्पष्टीकुर्यात्; व्यापारे विचारं विना धनव्ययं न कुर्यात्।"
  }
};
function getPracticalCareerAction(rashiNumber, careerScore, locale) {
  const idx = Math.max(1, Math.min(12, Math.round(rashiNumber || 1)));
  const profile = TWELVE_RASHI_CAREER_ACTIONS[idx] || TWELVE_RASHI_CAREER_ACTIONS[1];
  const tier = careerScore >= 76 ? "strong" : careerScore >= 60 ? "balanced" : "caution";
  const loc = locale.toLowerCase();
  if (loc.startsWith("en")) {
    return tier === "strong" ? profile.strongEn : tier === "balanced" ? profile.balancedEn : profile.cautionEn;
  }
  if (loc.startsWith("sa")) {
    return tier === "strong" ? profile.strongSa : tier === "balanced" ? profile.balancedSa : profile.cautionSa;
  }
  return tier === "strong" ? profile.strongHi : tier === "balanced" ? profile.balancedHi : profile.cautionHi;
}
const TWELVE_RASHI_DOMAIN_VOICES = {
  1: {
    wealthNuanceHi: "धनेश शुक्र के अनुरूप तात्कालिक खर्च पर संयम रखकर स्थिर बचत व संचित कोष को प्राथमिकता दें।",
    familyNuanceHi: "परिवार व जीवनसाथी के साथ जोशीले संवाद में विनम्रता रखने से गृहस्थी में मधुरता बढ़ेगी।",
    healthNuanceHi: "लग्नेश मंगल की ऊष्मा को संतुलित रखने हेतु पित्त-संतुलन, पर्याप्त जल और प्रातः हल्का व्यायाम लाभकारी रहेगा।"
  },
  2: {
    wealthNuanceHi: "धनेश बुध के विवेक से सुरक्षित निवेश, भूमि-संचय और वित्तीय लेखा-जोखा पूर्णतः स्पष्ट रखें।",
    familyNuanceHi: "कुटुम्ब के साथ सहज आतिथ्य व धैर्यपूर्ण संवाद से रिश्तों में विश्वास और स्थायित्व गहरा होगा।",
    healthNuanceHi: "कंठ, गर्दन और कफ-संतुलन हेतु गुनगुना जल व समयबद्ध सात्त्विक भोजन अनुकूल रहेगा।"
  },
  3: {
    wealthNuanceHi: "धनेश चंद्रमा की प्रवृत्ति को समझते हुए भावनात्मक खरीदारी टालें और आय के नए स्रोतों पर योजनाबद्ध काम करें।",
    familyNuanceHi: "भाई-बंधुओं व जीवनसाथी से खुला संवाद करने से किसी भी संभावित गलतफहमी का तुरंत समाधान होगा।",
    healthNuanceHi: "स्नायु-तंत्र व श्वसन की स्फूर्ति हेतु प्राणायाम और स्क्रीन-समय सीमित रखना हितकारी है।"
  },
  4: {
    wealthNuanceHi: "धनेश सूर्य के संबल से पारिवारिक संपत्ति और दीर्घकालिक सुरक्षा निधि को सुदृढ़ करने पर ध्यान दें।",
    familyNuanceHi: "घरेलू संवेदनशील विषयों पर बिना संकोच शांत और स्पष्ट संवाद करना रिश्तों को और गहरा बनाएगा।",
    healthNuanceHi: "पाचन व मानसिक शांति के लिए हल्का सुपाच्य आहार और रात्रि में समय पर विश्राम श्रेष्ठ रहेगा।"
  },
  5: {
    wealthNuanceHi: "धनेश बुध के अनुसार प्रतिष्ठा से जुड़े अनावश्यक प्रदर्शन खर्च रोककर सुविचारित निवेश को बढ़ावा दें।",
    familyNuanceHi: "वरिष्ठजनों का सम्मान और जीवनसाथी के विचारों को महत्व देने से घर में सौहार्दपूर्ण वातावरण रहेगा।",
    healthNuanceHi: "हृदय, नेत्र व रीढ़ की स्फूर्ति हेतु प्रातः सूर्य-दर्शन, स्ट्रेचिंग और पर्याप्त जल सेवन करें।"
  },
  6: {
    wealthNuanceHi: "धनेश शुक्र के संकेत से बजट की सूक्ष्म समीक्षा कर बकाया वसूली और बचत को संतुलित रखें।",
    familyNuanceHi: "रिश्तों में अति-आलोचना से बचकर सहयोगात्मक व्यवहार अपनाने से पारिवारिक सुख बढ़ेगा।",
    healthNuanceHi: "उदर व पाचन-तंत्र की सुगमता हेतु रेशेदार आहार और नियमित समय पर भोजन सर्वोत्तम है।"
  },
  7: {
    wealthNuanceHi: "धनेश मंगल के प्रभाव में साझेदारी के लेन-देन हेतु लिखित पारदर्शिता और संतुलित निवेश रखें।",
    familyNuanceHi: "दांपत्य व सामाजिक मेल-जोल में समभाव रखने से परस्पर स्नेह और सहयोग में वृद्धि होगी।",
    healthNuanceHi: "कमर व जल-संतुलन के लिए पर्याप्त पानी पिएँ और कार्य के बीच हल्का विश्राम अवश्य लें।"
  },
  8: {
    wealthNuanceHi: "धनेश गुरु के मार्गदर्शन में बीमा, रुके दावों या पुराने निवेश की समीक्षा कर विवेकपूर्ण निर्णय लें।",
    familyNuanceHi: "अंतरंग संबंधों में शंका त्यागकर सरल और स्पष्ट संवाद करने से पारिवारिक सामंजस्य मजबूत होगा।",
    healthNuanceHi: "ऊर्जा-संतुलन व रक्त-शुद्धि हेतु ध्यान, सात्त्विक भोजन और अत्यधिक मसालेदार आहार से परहेज रखें।"
  },
  9: {
    wealthNuanceHi: "धनेश शनि के अनुशासन से शुभ कार्यों पर संतुलित व्यय और दीर्घकालिक बचत का तालमेल रखें।",
    familyNuanceHi: "धर्म-संस्कृति व गुरुजनों के सान्निध्य से परिवार में उत्साह और सकारात्मक विचार प्रबल रहेंगे।",
    healthNuanceHi: "जांघों, जोड़ों व यकृत की सक्रियता हेतु प्रातः भ्रमण और संयमित दिनचर्या अत्यंत लाभदायक है।"
  },
  10: {
    wealthNuanceHi: "धनेश शनि के स्थायित्व से परिश्रम द्वारा अर्जित आय को सुरक्षित साधनों व क्रमबद्ध पूँजी में लगाएँ।",
    familyNuanceHi: "व्यस्त कार्यसूची के बीच भी परिवार व बुजुर्गों को समय देने से घर में आत्मीयता बनी रहेगी।",
    healthNuanceHi: "घुटनों, अस्थियों व जोड़ों की देखभाल हेतु हल्का योगाभ्यास और पर्याप्त नींद आवश्यक है।"
  },
  11: {
    wealthNuanceHi: "धनेश गुरु की कृपा से तकनीकी या नेटवर्क स्रोतों से प्राप्त आय को व्यवस्थित बजट अनुशासन में सहेजें।",
    familyNuanceHi: "मित्रों व परिजनों के साथ रचनात्मक विचार साझा करने से संबंधों में नई ताजगी व सहयोग मिलेगा।",
    healthNuanceHi: "पिंडलियों, रक्त-संचार व मानसिक विश्राम हेतु नियमित टहलना और गहरी श्वास का अभ्यास करें।"
  },
  12: {
    wealthNuanceHi: "धनेश मंगल के प्रभाव को साधते हुए आकस्मिक खर्चों पर अंकुश लगाएँ और सुरक्षित कोष को प्राथमिकता दें।",
    familyNuanceHi: "परिवार में भावुकता के बजाय व्यावहारिक सहानुभूति रखने से संबंध शांत और स्नेहिल रहेंगे।",
    healthNuanceHi: "पैरों के आराम, शांत निद्रा और प्रातः ध्यान-साधना से शारीरिक व मानसिक स्फूर्ति बनी रहेगी।"
  }
};
function refineRashifalSectionsForUi(input) {
  try {
    let removedDuplicateCount = 0;
    const normalizedRashiNum = ((Math.round(input.rashiNumber) - 1) % 12 + 12) % 12 + 1;
    const domainVoice = TWELVE_RASHI_DOMAIN_VOICES[normalizedRashiNum] || TWELVE_RASHI_DOMAIN_VOICES[1];
    const card1Seen = /* @__PURE__ */ new Set();
    const lagnaRes = deduplicateAndPolishProse(input.lagnaMentalText, card1Seen);
    const eduRes = deduplicateAndPolishProse(input.educationText, card1Seen);
    const baseHealthRes = deduplicateAndPolishProse(input.healthText, card1Seen);
    const baseHealthSentenceCount = splitIntoSentences(baseHealthRes.text).length;
    const shouldAppendHealthNuance = baseHealthSentenceCount < 2 && !hasSemanticConceptOverlap(baseHealthRes.text, domainVoice.healthNuanceHi);
    const healthVoiceRes = shouldAppendHealthNuance ? deduplicateAndPolishProse(domainVoice.healthNuanceHi, card1Seen) : { text: "", removedDuplicates: 0 };
    const healthCombined = [baseHealthRes.text, healthVoiceRes.text].filter(Boolean).join(" ").trim();
    removedDuplicateCount += lagnaRes.removedDuplicates + eduRes.removedDuplicates + baseHealthRes.removedDuplicates + healthVoiceRes.removedDuplicates;
    const card3Seen = /* @__PURE__ */ new Set();
    const baseCareerRes = deduplicateAndPolishProse(input.careerText, card3Seen);
    const practicalCareerAction = getPracticalCareerAction(
      normalizedRashiNum,
      input.careerScore,
      "hi-IN"
    );
    const hasJobOrBizCoverage = /नौकरी|ऑफिस|कार्यस्थल|व्यापार|व्यवसाय|वृत्ति/u.test(baseCareerRes.text);
    const careerStems = (txt) => new Set(
      txt.replace(/[^\u0900-\u097F\s-]/gu, " ").split(/\s+/).map((w) => w.trim()).filter((w) => w.length >= 4).map((w) => w.slice(0, 5))
    );
    const baseStems = careerStems(baseCareerRes.text);
    const candStems = careerStems(practicalCareerAction);
    let sharedStemCount = 0;
    candStems.forEach((st) => {
      if (baseStems.has(st)) sharedStemCount += 1;
    });
    const careerOverlapsBase = hasJobOrBizCoverage && (sharedStemCount >= 3 || hasSemanticConceptOverlap(baseCareerRes.text, practicalCareerAction, 0.25));
    const actionRes = careerOverlapsBase ? { text: "", removedDuplicates: 1 } : deduplicateAndPolishProse(practicalCareerAction, card3Seen);
    const careerCombined = [baseCareerRes.text, actionRes.text].filter(Boolean).join(" ").trim();
    const baseWealthRes = deduplicateAndPolishProse(input.wealthText, card3Seen);
    const shouldAppendWealthNuance = splitIntoSentences(baseWealthRes.text).length < 2 && !hasSemanticConceptOverlap(baseWealthRes.text, domainVoice.wealthNuanceHi);
    const wealthVoiceRes = shouldAppendWealthNuance ? deduplicateAndPolishProse(domainVoice.wealthNuanceHi, card3Seen) : { text: "", removedDuplicates: 0 };
    const wealthCombined = [baseWealthRes.text, wealthVoiceRes.text].filter(Boolean).join(" ").trim();
    removedDuplicateCount += baseCareerRes.removedDuplicates + actionRes.removedDuplicates + baseWealthRes.removedDuplicates + wealthVoiceRes.removedDuplicates;
    const familySeen = new Set(card3Seen);
    const baseFamilyRes = deduplicateAndPolishProse(input.familyText, familySeen);
    let safeBaseFamily = baseFamilyRes.text;
    if (safeBaseFamily && haveSameConcludingClause(wealthCombined, safeBaseFamily)) {
      const famSentences = splitIntoSentences(safeBaseFamily);
      if (famSentences.length > 1) {
        safeBaseFamily = famSentences.slice(0, -1).join(" ").trim();
        removedDuplicateCount += 1;
      }
    }
    const shouldAppendFamilyNuance = splitIntoSentences(safeBaseFamily).length < 2 && !hasSemanticConceptOverlap(safeBaseFamily, domainVoice.familyNuanceHi);
    const familyVoiceRes = shouldAppendFamilyNuance ? deduplicateAndPolishProse(domainVoice.familyNuanceHi, familySeen) : { text: "", removedDuplicates: 0 };
    const familyCombined = [safeBaseFamily, familyVoiceRes.text].filter(Boolean).join(" ").trim();
    removedDuplicateCount += baseFamilyRes.removedDuplicates + familyVoiceRes.removedDuplicates;
    const remedyRes = deduplicateAndPolishProse(input.remedyText);
    const remedyBodyForShare = stripAnyRemedyLeadPrefix(remedyRes.text || input.remedyText);
    const periodRemedyPrefix = input.period === "daily" ? "आज का उपाय: " : input.period === "weekly" ? "सप्ताह का उपाय: " : "मास का उपाय: ";
    const cleanRemedyWithSingleLead = remedyBodyForShare ? `${periodRemedyPrefix}${remedyBodyForShare}` : cleanIntraSentenceHindiRepetitions(input.remedyText);
    removedDuplicateCount += remedyRes.removedDuplicates;
    return {
      careerText: careerCombined || input.careerText,
      wealthText: wealthCombined || input.wealthText,
      familyText: familyCombined || input.familyText,
      educationText: eduRes.text || input.educationText,
      healthText: healthCombined || input.healthText,
      remedyText: cleanRemedyWithSingleLead || input.remedyText,
      remedyBodyForShare: remedyBodyForShare || stripAnyRemedyLeadPrefix(input.remedyText),
      lagnaMentalText: lagnaRes.text || input.lagnaMentalText,
      removedDuplicateCount
    };
  } catch {
    return {
      careerText: input.careerText,
      wealthText: input.wealthText,
      familyText: input.familyText,
      educationText: input.educationText,
      healthText: input.healthText,
      remedyText: input.remedyText,
      remedyBodyForShare: stripAnyRemedyLeadPrefix(input.remedyText),
      lagnaMentalText: input.lagnaMentalText,
      removedDuplicateCount: 0
    };
  }
}
function toRashifalNormalizerInput(req) {
  if (req.period === "daily" && req.dailyOut) {
    const planets = req.dailyOut.astronomicalBasis.planets;
    const findHouse = (id) => planets.find((p) => p.id === id)?.houseFromMoon;
    const primaryMoonHouse = req.dailyOut.moonTransit.primaryHouse;
    return {
      careerScore: req.dailyOut.scores.career,
      payload: {
        period: "daily",
        dateKey: req.dailyOut.panchangContext.dateKey,
        rashiNumber: req.rashiNumber,
        rashiNameHi: req.rashiNameHi,
        rashiNameEn: req.rashiNameEn,
        moonHouse: primaryMoonHouse,
        hasMoonSignChange: req.dailyOut.moonTransit.sandhiSplit.hasSignChange,
        eveningMoonHouse: req.dailyOut.moonTransit.sandhiSplit.eveningHouse,
        jupiterHouse: findHouse("jupiter"),
        saturnHouse: findHouse("saturn"),
        marsHouse: findHouse("mars"),
        venusHouse: findHouse("venus"),
        mercuryHouse: findHouse("mercury"),
        isMoonInChandrashtama: primaryMoonHouse === 8,
        isSaturnSadeSatiOrDhaiya: Boolean(
          req.dailyOut.sadeSatiStatusHi && !req.dailyOut.sadeSatiStatusHi.includes("प्रभाव नहीं") && !req.dailyOut.sadeSatiStatusHi.includes("मुक्त")
        ),
        tarabala: req.dailyOut.tarabala ? {
          taraNumber: req.dailyOut.tarabala.taraNumber,
          taraNameHi: req.dailyOut.tarabala.taraNameHi,
          isFavorable: req.dailyOut.tarabala.isFavorable
        } : null,
        timezone: req.dailyOut.location.timezone,
        engineVersion: "rashifal-daily-v2"
      }
    };
  }
  if (req.period === "weekly" && req.weeklyOut) {
    const planets = req.weeklyOut.astronomicalBasis.planetsMidWeek;
    const findHouse = (id) => planets.find((p) => p.id === id)?.houseFromMoon;
    const firstMoonHouse = req.weeklyOut.moonJourney.dayByDay[0]?.moonHouseFromRashi || 1;
    return {
      careerScore: req.weeklyOut.scores.career,
      payload: {
        period: "weekly",
        dateKey: req.weeklyOut.weekSpan.weekStartDateKey,
        rashiNumber: req.rashiNumber,
        rashiNameHi: req.rashiNameHi,
        rashiNameEn: req.rashiNameEn,
        moonHouse: firstMoonHouse,
        jupiterHouse: findHouse("jupiter"),
        saturnHouse: findHouse("saturn"),
        marsHouse: findHouse("mars"),
        venusHouse: findHouse("venus"),
        mercuryHouse: findHouse("mercury"),
        isMoonInChandrashtama: firstMoonHouse === 8,
        isSaturnSadeSatiOrDhaiya: Boolean(
          req.weeklyOut.sadeSatiStatusHi && !req.weeklyOut.sadeSatiStatusHi.includes("प्रभाव नहीं") && !req.weeklyOut.sadeSatiStatusHi.includes("मुक्त")
        ),
        tarabala: null,
        timezone: req.weeklyOut.location.timezone,
        engineVersion: "rashifal-weekly-v2"
      }
    };
  }
  if (req.period === "monthly" && req.monthlyOut) {
    const planets = req.monthlyOut.astronomicalBasis.planetsMidMonth;
    const findHouse = (id) => planets.find((p) => p.id === id)?.houseFromMoon;
    const moonHouse = findHouse("moon") || 1;
    return {
      careerScore: req.monthlyOut.scores.career,
      payload: {
        period: "monthly",
        dateKey: req.monthlyOut.monthSpan.monthKey,
        rashiNumber: req.rashiNumber,
        rashiNameHi: req.rashiNameHi,
        rashiNameEn: req.rashiNameEn,
        moonHouse,
        jupiterHouse: findHouse("jupiter"),
        saturnHouse: findHouse("saturn"),
        marsHouse: findHouse("mars"),
        venusHouse: findHouse("venus"),
        mercuryHouse: findHouse("mercury"),
        isMoonInChandrashtama: moonHouse === 8,
        isSaturnSadeSatiOrDhaiya: Boolean(
          req.monthlyOut.sadeSatiStatusHi && !req.monthlyOut.sadeSatiStatusHi.includes("प्रभाव नहीं") && !req.monthlyOut.sadeSatiStatusHi.includes("मुक्त")
        ),
        tarabala: null,
        timezone: req.monthlyOut.location.timezone,
        engineVersion: "rashifal-monthly-v2"
      }
    };
  }
  return {
    careerScore: 70,
    payload: {
      period: req.period,
      rashiNumber: req.rashiNumber,
      rashiNameHi: req.rashiNameHi,
      rashiNameEn: req.rashiNameEn,
      moonHouse: 1
    }
  };
}
function buildCareerSectionHeading(locale) {
  const loc = locale.toLowerCase();
  if (loc.startsWith("en")) return "Career, Business & Practical Guidance";
  if (loc.startsWith("sa")) return "वृत्ति-व्यापारफलं व्यावहारिकनिर्देशश्च";
  return "करियर, नौकरी व व्यापार (व्यावहारिक फल)";
}
async function generateRashifalGuidance(req) {
  const resolvedLocale = mapAppLanguageToLocale(req.locale || "hi-IN");
  const mode = req.mode ?? "STANDARD";
  const audience = req.audience ?? "GENERAL";
  const engine = req.engine ?? defaultTextIntelligenceEngine;
  try {
    const { payload, careerScore } = toRashifalNormalizerInput(req);
    const baseResult = await engine.generateText("rashifal", payload, {
      locale: resolvedLocale,
      mode,
      audience
    });
    const practicalCareerBody = getPracticalCareerAction(
      req.rashiNumber,
      careerScore,
      resolvedLocale
    );
    const careerPolarity = careerScore >= 76 ? "AUSPICIOUS" : careerScore >= 60 ? "NEUTRAL" : "CAUTION";
    const practicalCareerSection = {
      domain: "career_business_action",
      heading: buildCareerSectionHeading(resolvedLocale),
      body: practicalCareerBody,
      polarity: careerPolarity,
      evidenceStatus: "RULE_SUPPORTED",
      appliedRuleIds: [`RAS_CAREER_ACTION_R${req.rashiNumber}`]
    };
    const mergedSections = [
      ...baseResult.sections,
      practicalCareerSection
    ];
    const summary = baseResult.status === "INSUFFICIENT_DATA" || !baseResult.summary.trim() ? practicalCareerBody : mode === "SHORT" ? baseResult.summary : `${baseResult.summary} ${practicalCareerBody}`.trim();
    return {
      usedLegacyFallback: baseResult.status === "INSUFFICIENT_DATA",
      result: {
        ...baseResult,
        summary,
        sections: mergedSections
      }
    };
  } catch {
    const fallbackBody = getPracticalCareerAction(req.rashiNumber, 70, resolvedLocale);
    return {
      usedLegacyFallback: true,
      result: {
        module: "rashifal",
        locale: resolvedLocale,
        mode,
        audience,
        rulePackVersion: "fallback",
        status: "PARTIALLY_SUPPORTED",
        summary: fallbackBody,
        sections: [
          {
            domain: "career_business_action",
            heading: buildCareerSectionHeading(resolvedLocale),
            body: fallbackBody,
            polarity: "NEUTRAL",
            evidenceStatus: "PARTIALLY_SUPPORTED",
            appliedRuleIds: []
          }
        ],
        references: [],
        trace: {
          appliedRuleIds: [],
          excludedRuleIds: [],
          deduplicatedConceptKeys: [],
          warnings: ["FALLBACK_USED"],
          cacheHit: false
        }
      }
    };
  }
}
const WEEKLY_FALLBACK_SUBHASHITS = [
  {
    sanskrit: "उद्यमेन हि सिध्यन्ति कार्याणि न मनोरथैः। न हि सुप्तस्य सिंहस्य प्रविशन्ति मुखे मृगाः॥",
    source: "हितोपदेश / महाभारत परंपरा (साप्ताहिक पुरुषार्थ सुभाषित)",
    meaning: "समस्त कार्य केवल इच्छा करने से नहीं बल्कि निरंतर परिश्रम और सही समय पर किए गए पुरुषार्थ से सिद्ध होते हैं; सोते हुए सिंह के मुख में मृग स्वयं प्रवेश नहीं करता।"
  },
  {
    sanskrit: "धृतिः क्षमा दमोऽस्तेयं शौचमिन्द्रियनिग्रहः। धीर्विद्या सत्यमक्रोधो दशकं धर्मलक्षणम्॥",
    source: "मनुस्मृति ६.९२ (साप्ताहिक धर्म एवं संयम सुभाषित)",
    meaning: "धैर्य, क्षमा, आत्मसंयम, अस्तेय, पवित्रता, इन्द्रिय-निग्रह, सद्बुद्धि, विद्या, सत्य और अक्रोध—ये दस गुण जीवन और सप्ताह को मंगलमय बनाते हैं।"
  },
  {
    sanskrit: "योगः कर्मसु कौशलम्। समत्वं योग उच्यते॥",
    source: "श्रीमद्भगवद्गीता २.४८-५० (साप्ताहिक कर्मयोग सुभाषित)",
    meaning: "सफलता और असफलता में समभाव रखते हुए अपने कर्तव्य का पूर्ण कुशलता व निष्ठा से निर्वाह करना ही श्रेष्ठ कर्मयोग है।"
  }
];
function selectWeeklyContextualSubhashit(weekDays, dateSeed = 0) {
  const combinedFest = weekDays.map((d) => `${d.festivalName || ""} ${d.festivalDescription || ""}`).join(" | ");
  const combinedTithi = weekDays.map((d) => d.tithiName || "").join(" | ");
  const festWithoutDevDiwali = combinedFest.replace(/देव\s*दीपावली/gu, "");
  if (/दीपावली|दिवाली|महालक्ष्मी पूजन|लक्ष्मी पूजा/u.test(festWithoutDevDiwali)) {
    return {
      sanskrit: "सर्वमङ्गलमाङ्गल्ये शिवे सर्वार्थसाधिके। शरण्ये त्र्यम्बके गौरि नारायणि नमोऽस्तु ते॥",
      source: "मार्कण्डेय पुराण — दीपावली महापर्व सप्ताह विशेष",
      meaning: "इस पावन दीपावली सप्ताह में समस्त मंगल प्रदान करने वाली भगवती महालक्ष्मी एवं नारायणी को नमन है; माँ लक्ष्मी सबके गृह-परिवार में सुख, शांति व श्री-समृद्धि का वास करें।"
    };
  }
  if (/देव\s*दीपावली|कार्तिक\s*पूर्णिमा/u.test(combinedFest)) {
    return {
      sanskrit: "गङ्गे च यमुने चैव गोदावरि सरस्वति। नर्मदे सिन्धु कावेरि जलेऽस्मिन् सन्निधिं कुरु॥",
      source: "पावन वैदिक सुभाषित — कार्तिक पूर्णिमा एवं देव दीपावली सप्ताह विशेष",
      meaning: "इस पावन कार्तिक पूर्णिमा एवं देव दीपावली सप्ताह में पवित्र नदियों के स्नान, दीपदान एवं भगवान श्रीहरि व देवाधिदेव महादेव के स्मरण से समस्त गृह-परिवार में आलोक, सुख व कल्याण का वास हो।"
    };
  }
  if (/नवरात्रि|दुर्गाष्टमी|महानवमी|विजयादशमी|दशहरा|शैलपुत्री|सिद्धिदात्री/u.test(combinedFest)) {
    return {
      sanskrit: "या देवी सर्वभूतेषु शक्तिरूपेण संस्थिता। नमस्तस्यै नमस्तस्यै नमस्तस्यै नमो नमः॥",
      source: "दुर्गा सप्तशती — नवरात्रि एवं शक्ति उपासना सप्ताह विशेष",
      meaning: "समस्त प्राणियों में शक्ति, बुद्धि और करुणा के रूप में विराजमान आदिशक्ति माँ दुर्गा इस पावन सप्ताह में समस्त बाधाओं का हरण कर शुभ सिद्धि प्रदान करें।"
    };
  }
  if (/महाशिवरात्रि|शिवरात्रि/u.test(combinedFest)) {
    return {
      sanskrit: "कर्पूरगौरं करुणावतारं संसारसारं भुजगेन्द्रहारम्। सदावसन्तं हृदयारविन्दे भवं भवानीसहितं नमामि॥",
      source: "पावन शिव स्तुति — महाशिवरात्रि पावन सप्ताह विशेष",
      meaning: "करुणा के साक्षात् अवतार और भक्तों के हृदय-कमल में निवास करने वाले भगवान शिव एवं माता भवानी इस शिवरात्रि सप्ताह में कल्याण एवं अभय प्रदान करें।"
    };
  }
  if (/जन्माष्टमी|कृष्ण जन्मोत्सव|गीता जयंती/u.test(combinedFest)) {
    return {
      sanskrit: "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत। अभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम्॥",
      source: "श्रीमद्भगवद्गीता ४.७ — श्रीकृष्ण जन्माष्टमी / गीता पर्व सप्ताह विशेष",
      meaning: "धर्म की रक्षा और सज्जनों के कल्याण हेतु अवतरित होने वाले भगवान श्रीकृष्ण इस पावन सप्ताह में विवेक, आनंद और धर्मनिष्ठा प्रदान करें।"
    };
  }
  if (/राम नवमी|हनुमान जयंती|हनुमान जन्मोत्सव/u.test(combinedFest)) {
    return {
      sanskrit: "मनोजवं मारुततुल्यवेगं जितेन्द्रियं बुद्धिमतां वरिष्ठम्। वातात्मजं वानरयूथमुख्यं श्रीरामदूतं शरणं प्रपद्ये॥",
      source: "श्री हनुमत् स्तवन — श्रीराम नवमी / हनुमत् पर्व सप्ताह विशेष",
      meaning: "बुद्धिमानों में श्रेष्ठ, जितेन्द्रिय और महाबलशाली श्रीरामदूत हनुमान जी की कृपा से इस सप्ताह के समस्त कार्य निर्विघ्न एवं सफल हों।"
    };
  }
  if (/होली|होलिका दहन|धुलेंडी|रंगपंचमी/u.test(combinedFest)) {
    return {
      sanskrit: "मङ्गलं भगवान् विष्णुः मङ्गलं गरुडध्वजः। मङ्गलं पुण्डरीकाक्षः मङ्गलायतनो हरिः॥",
      source: "विष्णु पुराण — होलिकोत्सव एवं भक्त प्रह्लाद स्मरण सप्ताह विशेष",
      meaning: "भक्त प्रह्लाद की रक्षा करने वाले मंगलमय भगवान श्रीहरि इस होलिकोत्सव सप्ताह में समस्त अमंगल का नाश कर जीवन में प्रेम, सौहार्द और आनंद भरें।"
    };
  }
  if (/रक्षाबंधन|रक्षा बन्धन|श्रावणी/u.test(combinedFest)) {
    return {
      sanskrit: "येन बद्धो बली राजा दानवेन्द्रो महाबलः। तेन त्वामपि बध्नामि रक्षे मा चल मा चल॥",
      source: "भविष्य पुराण — रक्षाबंधन एवं श्रावणी पर्व सप्ताह विशेष",
      meaning: "पवित्र रक्षासूत्र की मर्यादा के साथ इस पावन सप्ताह में पारिवारिक स्नेह, परस्पर विश्वास और आजीवन सुरक्षा का भाव अडिग बना रहे।"
    };
  }
  if (/गणेश चतुर्थी|संकष्टी|विनायक चतुर्थी/u.test(combinedFest)) {
    return {
      sanskrit: "वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ। निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥",
      source: "मुद्गल पुराण — श्री गणेश चतुर्थी / संकष्टी व्रत सप्ताह विशेष",
      meaning: "करोड़ों सूर्यों के समान तेजस्वी विघ्नहर्ता भगवान श्रीगणेश इस सप्ताह के प्रत्येक शुभ संकल्प और कर्म को निर्विघ्न पूर्ण करें।"
    };
  }
  if (/धनतेरस|गोवर्धन|भाई दूज|तुलसी विवाह|देवउठनी|देव प्रबोधनी/u.test(combinedFest)) {
    return {
      sanskrit: "महाप्रसादजननी सर्वसौभाग्यवर्धिनी। आधिव्याधिहरा नित्यं तुलसी त्वं नमोऽस्तु ते॥",
      source: "पावन तुलसी वंदना — कार्तिक पर्व एवं सौभाग्य सप्ताह विशेष",
      meaning: "सौभाग्य को बढ़ाने वाली और समस्त आधिव्याधि का हरण करने वाली भगवती तुलसी व श्रीहरि इस पावन सप्ताह में उत्तम आरोग्य और समृद्धि प्रदान करें।"
    };
  }
  if (/मकर संक्रांति|संक्रान्ति|संक्रांति|छठ पूजा|सूर्य षष्ठी/u.test(combinedFest)) {
    return {
      sanskrit: "जपाकुसुमसंकाशं काश्यपेयं महाद्युतिम्। तमोऽरिं सर्वपापघ्नं प्रणतोऽस्मि दिवाकरम्॥",
      source: "नवग्रह स्तोत्रम् — सूर्य संक्रांति एवं तेजस्विता सप्ताह विशेष",
      meaning: "अंधकार व दोषों का नाश करने वाले महातेजस्वी भगवान सूर्यदेव इस संक्रांति सप्ताह में यश, ऊर्जा और उत्तम स्वास्थ्य प्रदान करें।"
    };
  }
  if (/बसंत पंचमी|वसंत पंचमी|सरस्वती पूजा/u.test(combinedFest)) {
    return {
      sanskrit: "या कुन्देन्दुतुषारहारधवला या शुभ्रवस्त्रावृता। सा मां पातु सरस्वती भगवती निःशेषजाड्यापहा॥",
      source: "श्री सरस्वती वंदना — वसंत पंचमी विद्या-पर्व सप्ताह विशेष",
      meaning: "अज्ञान का समूल नाश करने वाली भगवती माँ सरस्वती इस पावन सप्ताह में निर्मल विद्या, वाणी-माधुर्य और सद्बुद्धि प्रदान करें।"
    };
  }
  if (/अक्षय तृतीया|परशुराम जयंती|गुरु पूर्णिमा|व्यास पूर्णिमा/u.test(combinedFest)) {
    return {
      sanskrit: "गुरुर्ब्रह्मा गुरुर्विष्णुः गुरुर्देवो महेश्वरः। गुरुः साक्षात् परं ब्रह्म तस्मै श्रीगुरवे नमः॥",
      source: "स्कन्द पुराण (गुरु गीता) — पावन पर्व सप्ताह विशेष",
      meaning: "सद्गुरु और ईश्वर के आशीर्वाद से इस शुभ सप्ताह में किया गया प्रत्येक दान, तप और सत्कर्म अक्षय पुण्य प्रदान करता है।"
    };
  }
  if (/एकादशी/u.test(combinedFest) || /एकादशी/u.test(combinedTithi)) {
    return {
      sanskrit: "एकादश्यां निराहारः स्थित्वाऽहं परेऽहनि। भोक्ष्यामि पुण्डरीकाक्ष शरणं मे भवाच्युत॥",
      source: "पद्म पुराण / नारद पुराण — एकादशी व्रत सप्ताह विशेष",
      meaning: "इस सप्ताह में आने वाले पावन एकादशी व्रत के प्रभाव से मन शुद्ध होता है और भगवान श्रीहरि की कृपा से परिवार में धर्म, शांति व समृद्धि बढ़ती है।"
    };
  }
  if (/प्रदोष/u.test(combinedFest)) {
    return {
      sanskrit: "त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम्। उर्वारुकमिव बन्धनान्मृत्योर्मुक्षीय माऽमृतात्॥",
      source: "ऋग्वेद ७.५९.१२ — प्रदोष व्रत एवं शिव कृपा सप्ताह विशेष",
      meaning: "इस सप्ताह के पावन प्रदोष व्रत में देवाधिदेव महादेव की आराधना से रोग, शोक व भय का शमन होकर पुष्टि और दीर्घायु की प्राप्ति होती है।"
    };
  }
  if (/पूर्णिमा|सत्यनारायण/u.test(combinedFest) || /पूर्णिमा/u.test(combinedTithi)) {
    return {
      sanskrit: "शान्ताकारं भुजगशयनं पद्मनाभं सुरेशम्। वन्दे विष्णुं भवभयहरं सर्वलोकैकनाथम्॥",
      source: "श्री विष्णु सहस्रनाम — पूर्णिमा एवं सत्यनारायण व्रत सप्ताह विशेष",
      meaning: "इस सप्ताह की पावन पूर्णिमा पर सर्वलोकनाथ भगवान श्रीहरि के स्मरण से मानसिक शांति, सौभाग्य और कार्यों में पूर्णता प्राप्त होती है।"
    };
  }
  if (/अमावस्या|पितृ/u.test(combinedFest) || /अमावस्या/u.test(combinedTithi)) {
    return {
      sanskrit: "देवताभ्यः पितृभ्यश्च महायोगिभ्य एव च। नमः स्वाहायै स्वधायै नित्यमेव नमो नमः॥",
      source: "गरुड़ पुराण — अमावस्या एवं पितृ तर्पण सप्ताह विशेष",
      meaning: "इस सप्ताह की अमावस्या पर देवताओं व पितरों के श्रद्धापूर्वक स्मरण तथा दान-पुण्य से कुल में शांति और बाधाओं का निवारण होता है।"
    };
  }
  const idx = Math.abs(dateSeed) % WEEKLY_FALLBACK_SUBHASHITS.length;
  return WEEKLY_FALLBACK_SUBHASHITS[idx];
}
const MONTHLY_HINDU_MASA_SUBHASHITS = [
  {
    pattern: /अधिक|पुरुषोत्तम|मलमास/u,
    entry: {
      sanskrit: "यस्मात् क्षरमतीतोऽहमक्षरादपि चोत्तमः। अतोऽस्मि लोके वेदे च प्रथितः पुरुषोत्तमः॥",
      source: "श्रीमद्भगवद्गीता १५.१८ — पुरुषोत्तम (अधिक) मास महात्म्य",
      meaning: "क्षर और अक्षर दोनों से परे सर्वश्रेष्ठ भगवान श्री पुरुषोत्तम इस पावन अधिक मास के स्वामी हैं; इस मास में जप, तप व सत्संग अनंत फलदायी होते हैं।"
    }
  },
  {
    pattern: /चैत्र|Chaitra/iu,
    entry: {
      sanskrit: "सर्वमङ्गलमाङ्गल्ये शिवे सर्वार्थसाधिके। शरण्ये त्र्यम्बके गौरि नारायणि नमोऽस्तु ते॥",
      source: "दुर्गा सप्तशती — चैत्र मास (नवसंवत्सर एवं वासंतिक शक्ति महात्म्य)",
      meaning: "सृष्टि के आरंभ और नवसंवत्सर के पावन चैत्र मास में आदिशक्ति माँ दुर्गा व श्रीराम की कृपा से नया संकल्प, उत्तम स्वास्थ्य और शुभ आरंभ सिद्ध होता है।"
    }
  },
  {
    pattern: /वैशाख|Vaishakha|Vaisakha/iu,
    entry: {
      sanskrit: "न माधवसमो मासो न कृतेन युगं समम्। न च वेदसमं शास्त्रं न तीर्थं गङ्गया समम्॥",
      source: "स्कन्द पुराण — वैशाख (माधव) मास महात्म्य",
      meaning: "भगवान माधव (श्रीविष्णु) के इस पावन वैशाख मास के समान कोई पुण्यदायी मास नहीं; इस माह जलदान, प्रातः स्नान और हरि-स्मरण से अक्षय सुख मिलता है।"
    }
  },
  {
    pattern: /ज्येष्ठ|Jyeshtha/iu,
    entry: {
      sanskrit: "आदित्यहृदयं पुण्यं सर्वशत्रुविनाशनम्। जयावहं जपेन्नित्यमक्षयं परमं शिवम्॥",
      source: "वाल्मीकि रामायण (आदित्य हृदय स्तोत्र) — ज्येष्ठ मास सूर्य एवं जल-सेवा महात्म्य",
      meaning: "प्रचंड तेज वाले ज्येष्ठ मास में भगवान सूर्यदेव व श्री हनुमान जी की उपासना तथा प्यासे को जल-सेवा करने से बल, विजय और आरोग्य की प्राप्ति होती है।"
    }
  },
  {
    pattern: /आषाढ़|आषाढ|Ashadha/iu,
    entry: {
      sanskrit: "गुरुर्ब्रह्मा गुरुर्विष्णुः गुरुर्देवो महेश्वरः। गुरुः साक्षात् परं ब्रह्म तस्मै श्रीगुरवे नमः॥",
      source: "स्कन्द पुराण (गुरु गीता) — आषाढ़ मास (देवशयनी एवं गुरु-तत्त्व महात्म्य)",
      meaning: "साधना, सद्गुरु कृपा और चातुर्मास प्रारंभ के पावन आषाढ़ मास में गुरु-वंदना व श्रीहरि भक्ति से ज्ञान, संयम और जीवन की सही दिशा प्राप्त होती है।"
    }
  },
  {
    pattern: /श्रावण|सावन|Shravana|Sawan/iu,
    entry: {
      sanskrit: "कर्पूरगौरं करुणावतारं संसारसारं भुजगेन्द्रहारम्। सदावसन्तं हृदयारविन्दे भवं भवानीसहितं नमामि॥",
      source: "पावन शिव स्तुति — श्रावण मास देवाधिदेव महादेव महात्म्य",
      meaning: "भगवान शिव के परम प्रिय श्रावण मास में रुद्राभिषेक, बिल्वपत्र अर्पण और श्रद्धापूर्वक शिव-स्मरण से समस्त संकट दूर होकर सुख-सौभाग्य की वर्षा होती है।"
    }
  },
  {
    pattern: /भाद्रपद|भादो|Bhadrapada/iu,
    entry: {
      sanskrit: "वसुदेवसुतं देवं कंसचाणूरमर्दनम्। देवकीपरमानन्दं कृष्णं वन्दे जगद्गुरुम्॥",
      source: "श्रीकृष्णाष्टकम् — भाद्रपद मास (श्रीकृष्ण एवं श्रीगणेश कृपा महात्म्य)",
      meaning: "जगद्गुरु भगवान श्रीकृष्ण और विघ्नहर्ता श्रीगणेश की भक्ति से परिपूर्ण भाद्रपद मास में सत्य, भक्ति और विवेक के मार्ग पर चलने से समस्त विघ्न शांत होते हैं।"
    }
  },
  {
    pattern: /आश्विन|क्वार|Ashwin|Ashvina/iu,
    entry: {
      sanskrit: "या देवी सर्वभूतेषु शक्तिरूपेण संस्थिता। नमस्तस्यै नमस्तस्यै नमस्तस्यै नमो नमः॥",
      source: "दुर्गा सप्तशती — आश्विन मास (शारदीय नवरात्रि एवं पितृ-आशीर्वाद महात्म्य)",
      meaning: "पितरों के आशीर्वाद और आदिशक्ति माँ दुर्गा की उपासना के पावन आश्विन मास में श्रद्धा, संयम और शक्ति-आराधना से जीवन में विजय व ऐश्वर्य बढ़ता है।"
    }
  },
  {
    pattern: /कार्तिक|Kartika|Kartik/iu,
    entry: {
      sanskrit: "दामोदरं पद्मनाभं केशवं गरुडध्वजम्। कार्तिके पूजयेद्भक्त्या सर्वपापप्रणाशनम्॥",
      source: "पद्म पुराण — कार्तिक (दामोदर) मास महात्म्य",
      meaning: "भगवान श्री दामोदर, माँ महालक्ष्मी और तुलसी पूजन को समर्पित पावन कार्तिक मास में दीपदान और भक्ति-साधना से दरिद्रता दूर होकर अखंड समृद्धि प्राप्त होती है।"
    }
  },
  {
    pattern: /मार्गशीर्ष|अगहन|Margashirsha/iu,
    entry: {
      sanskrit: "बृहत्साम तथा साम्नां गायत्री छन्दसामहम्। मासानां मार्गशीर्षोऽहमृतूनां कुसुमाकरः॥",
      source: "श्रीमद्भगवद्गीता १०.३५ — मार्गशीर्ष मास श्रीकृष्ण विभूति महात्म्य",
      meaning: 'भगवान श्रीकृष्ण ने स्वयं कहा है कि "मासों में मैं मार्गशीर्ष हूँ"; इस पावन मास में गीता पाठ और भगवन्नाम संकीर्तन से परम शांति व सिद्धि मिलती है।'
    }
  },
  {
    pattern: /पौष|पूस|Pausha|Poush/iu,
    entry: {
      sanskrit: "जपाकुसुमसंकाशं काश्यपेयं महाद्युतिम्। तमोऽरिं सर्वपापघ्नं प्रणतोऽस्मि दिवाकरम्॥",
      source: "नवग्रह स्तोत्रम् — पौष मास भगवान सूर्यदेव (भग-आदित्य) महात्म्य",
      meaning: "भगवान सूर्यदेव के भग-आदित्य स्वरूप को समर्पित पौष मास में प्रातः सूर्य को अर्घ्य देने और गरम वस्त्र/अन्न दान से तेज, आरोग्य और सौभाग्य बढ़ता है।"
    }
  },
  {
    pattern: /माघ|Magha/iu,
    entry: {
      sanskrit: "गङ्गे च यमुने चैव गोदावरि सरस्वति। नर्मदे सिन्धु कावेरि जलेऽस्मिन् सन्निधिं कुरु॥",
      source: "पद्म पुराण — माघ मास (पावन स्नान, दान एवं सरस्वती महात्म्य)",
      meaning: "तीर्थस्नान, तिल-दान और विद्या की अधिष्ठात्री माँ सरस्वती की कृपा से समृद्ध माघ मास में संयम व सत्कर्म से समस्त पापों का क्षय और बुद्धि-विवेक का उदय होता है।"
    }
  },
  {
    pattern: /फाल्गुन|फागुन|Phalguna/iu,
    entry: {
      sanskrit: "आनन्दं ब्रह्मणो विद्वान् न बिभेति कुतश्चन। ॐ नमो भगवते रुद्राय नमः॥",
      source: "तैत्तिरीय उपनिषद् / शिव पुराण — फाल्गुन मास (शिव-भक्ति एवं वसंत आनंद महात्म्य)",
      meaning: "भगवान शिव की महाशिवरात्रि और वसंत-आनंद के पावन फाल्गुन मास में द्वेष त्यागकर भक्ति, उत्साह और प्रेम-सौहार्द अपनाने से जीवन मंगलमय बनता है।"
    }
  }
];
function selectMonthlyContextualSubhashit(hinduMaasName, dateSeed = 0) {
  const cleanMaas = (hinduMaasName || "").trim();
  for (const item of MONTHLY_HINDU_MASA_SUBHASHITS) {
    if (item.pattern.test(cleanMaas)) {
      return item.entry;
    }
  }
  const idx = Math.abs(dateSeed) % WEEKLY_FALLBACK_SUBHASHITS.length;
  return WEEKLY_FALLBACK_SUBHASHITS[idx];
}
const LOCALE_OPTIONS = [
  { code: "hi-IN", label: "हिन्दी" },
  { code: "en-IN", label: "English" },
  { code: "sa-IN", label: "संस्कृतम्" }
];
const MODE_OPTIONS = [
  { code: "SHORT", labelHi: "संक्षिप्त", labelEn: "Brief", labelSa: "संक्षिप्तम्" },
  { code: "STANDARD", labelHi: "मानक", labelEn: "Standard", labelSa: "मानकम्" },
  { code: "DETAILED", labelHi: "विस्तृत", labelEn: "Detailed", labelSa: "विस्तृतम्" }
];
function getPolarityClass(polarity) {
  switch (polarity) {
    case "AUSPICIOUS":
      return {
        box: "border-emerald-500/30 bg-emerald-950/30",
        title: "text-emerald-300"
      };
    case "CAUTION":
      return {
        box: "border-rose-500/30 bg-rose-950/30",
        title: "text-rose-300"
      };
    case "MIXED":
      return {
        box: "border-amber-400/35 bg-amber-950/35",
        title: "text-amber-200"
      };
    default:
      return {
        box: "border-amber-500/25 bg-slate-900/60",
        title: "text-amber-300"
      };
  }
}
const RashifalShastricGuidanceCard = ({
  period,
  rashiNumber,
  rashiNameHi,
  rashiNameEn,
  dailyOut,
  weeklyOut,
  monthlyOut
}) => {
  const { language } = useLanguage();
  const [locale, setLocale] = reactExports.useState(
    () => language === "en" ? "en-IN" : "hi-IN"
  );
  const [mode, setMode] = reactExports.useState("STANDARD");
  const [expanded, setExpanded] = reactExports.useState(false);
  const [guidance, setGuidance] = reactExports.useState(null);
  reactExports.useEffect(() => {
    if (language === "en") setLocale("en-IN");
    else if (language === "hi") setLocale("hi-IN");
  }, [language]);
  reactExports.useEffect(() => {
    let cancelled = false;
    generateRashifalGuidance({
      period,
      rashiNumber,
      rashiNameHi,
      rashiNameEn,
      dailyOut,
      weeklyOut,
      monthlyOut,
      locale,
      mode,
      audience: mode === "DETAILED" ? "SCHOLAR" : "GENERAL"
    }).then((out) => {
      if (!cancelled) setGuidance(out.result);
    });
    return () => {
      cancelled = true;
    };
  }, [period, rashiNumber, rashiNameHi, rashiNameEn, dailyOut, weeklyOut, monthlyOut, locale, mode]);
  if (!guidance || !guidance.summary) return null;
  const isEn = locale === "en-IN";
  const isSa = locale === "sa-IN";
  const periodLabel = isEn ? period === "daily" ? "Daily" : period === "weekly" ? "Weekly" : "Monthly" : isSa ? period === "daily" ? "दैनिक" : period === "weekly" ? "साप्ताहिक" : "मासिक" : period === "daily" ? "दैनिक" : period === "weekly" ? "साप्ताहिक" : "मासिक";
  const title = isEn ? `${rashiNameEn} ${periodLabel} Shastric Gochar & Career Summary` : isSa ? `${rashiNameHi}राशेः ${periodLabel}शास्त्रीयगोचरविवेचनम्` : `${rashiNameHi} राशि — ${periodLabel} शास्त्रीय गोचर एवं व्यावसायिक सार`;
  const toggleText = expanded ? isEn ? "Hide Shastric Breakdown" : isSa ? "विस्तारं संक्षिपेत्" : "विस्तृत गोचर विश्लेषण संक्षिप्त करें" : isEn ? `View Shastric Breakdown (${guidance.sections.length})` : isSa ? `विस्तृतगोचरविश्लेषणं पश्यतु (${guidance.sections.length})` : `विस्तृत शास्त्रीय गोचर विश्लेषण देखें (${guidance.sections.length})`;
  const sourcesTitle = isEn ? "Classical Sources" : isSa ? "शास्त्रीयप्रमाणानि" : "शास्त्रीय संदर्भ";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-amber-500/35 bg-gradient-to-br from-[#23190d]/95 via-[#18120c]/95 to-[#100d09]/95 p-3.5 sm:p-4 space-y-2.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-4 h-4 text-amber-400 shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "text-xs sm:text-sm font-extrabold text-amber-200", children: title })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex rounded-lg bg-slate-900/90 p-0.5 border border-amber-700/40 text-[10px] sm:text-[11px]", children: LOCALE_OPTIONS.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setLocale(opt.code),
            className: `px-2 py-0.5 rounded font-bold cursor-pointer transition-colors ${locale === opt.code ? "bg-amber-500 text-slate-950" : "text-amber-200/80 hover:text-amber-100"}`,
            children: opt.label
          },
          opt.code
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex rounded-lg bg-slate-900/90 p-0.5 border border-amber-700/40 text-[10px] sm:text-[11px]", children: MODE_OPTIONS.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setMode(opt.code),
            className: `px-2 py-0.5 rounded font-semibold cursor-pointer transition-colors ${mode === opt.code ? "bg-amber-400/25 text-amber-200 border border-amber-400/40" : "text-slate-300/80 hover:text-amber-100"}`,
            children: isEn ? opt.labelEn : isSa ? opt.labelSa : opt.labelHi
          },
          opt.code
        )) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm leading-relaxed text-amber-50/95", children: guidance.summary }),
    guidance.sections.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: () => setExpanded((prev) => !prev),
          className: "inline-flex items-center gap-1.5 text-xs font-bold text-amber-300 hover:text-amber-200 cursor-pointer transition-colors",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-3.5 h-3.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: toggleText }),
            expanded ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-3.5 h-3.5" })
          ]
        }
      ),
      expanded && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2.5 space-y-2.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-2.5", children: guidance.sections.map((section) => {
          const cls = getPolarityClass(section.polarity);
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: `rounded-lg border p-2.5 ${cls.box}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-xs font-bold mb-1 ${cls.title}`, children: section.heading }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs leading-relaxed text-amber-50/90", children: section.body })
              ]
            },
            section.domain
          );
        }) }),
        guidance.references.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-2 border-t border-amber-500/20 flex flex-wrap items-center gap-1.5 text-[11px] text-amber-200/80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-amber-300", children: [
            sourcesTitle,
            ":"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: guidance.references.map((r) => r.sourceName).join(" • ") })
        ] })
      ] })
    ] })
  ] });
};
const TWELVE_RASHIS = [
  {
    id: "mesh",
    hindiName: "मेष",
    englishName: "Aries",
    symbol: "",
    element: "अग्नि तत्त्व",
    nature: "चर राशि",
    swami: "मंगल देव",
    aradhyaDev: "श्री हनुमान जी एवं भगवान कार्तिकेय",
    nakshatras: "अश्विनी (4 चरण), भरणी (4 चरण), कृत्तिका (1 चरण)",
    ratna: "मूंगा रत्न",
    dhatu: "तांबा एवं स्वर्ण",
    mitraRashi: "सिंह, धनु, कर्क, मीन",
    letters: "चू, चे, चो, ला, ली, लू, ले, लो, अ",
    beejMantra: "ॐ क्रां क्रीं क्रौं सः भौमाय नमः॥"
  },
  {
    id: "vrishabh",
    hindiName: "वृषभ",
    englishName: "Taurus",
    symbol: "",
    element: "पृथ्वी तत्त्व",
    nature: "स्थिर राशि",
    swami: "शुक्र देव",
    aradhyaDev: "माँ महालक्ष्मी एवं माता दुर्गा",
    nakshatras: "कृत्तिका (3 चरण), रोहिणी (4 चरण), मृगशिरा (2 चरण)",
    ratna: "हीरा / ओपल रत्न",
    dhatu: "चांदी एवं प्लैटिनम",
    mitraRashi: "कन्या, मकर, मिथुन, कुम्भ",
    letters: "ई, ऊ, ए, ओ, वा, वी, वू, वे, वो",
    beejMantra: "ॐ द्रां द्रीं द्रौं सः शुक्राय नमः॥"
  },
  {
    id: "mithun",
    hindiName: "मिथुन",
    englishName: "Gemini",
    symbol: "",
    element: "वायु तत्त्व",
    nature: "द्विस्वभाव राशि",
    swami: "बुध देव",
    aradhyaDev: "भगवान श्री गणेश एवं श्री विष्णु",
    nakshatras: "मृगशिरा (2 चरण), आर्द्रा (4 चरण), पुनर्वसु (3 चरण)",
    ratna: "पन्ना रत्न",
    dhatu: "कांसा एवं स्वर्ण",
    mitraRashi: "तुला, कुम्भ, वृषभ, सिंह",
    letters: "का, की, कू, घ, ङ, छ, के, को, हा",
    beejMantra: "ॐ ब्रां ब्रीं ब्रौं सः बुधाय नमः॥"
  },
  {
    id: "kark",
    hindiName: "कर्क",
    englishName: "Cancer",
    symbol: "",
    element: "जल तत्त्व",
    nature: "चर राशि",
    swami: "चन्द्र देव",
    aradhyaDev: "भगवान आशुतोष शिवशंकर एवं माँ गौरी",
    nakshatras: "पुनर्वसु (1 चरण), पुष्य (4 चरण), आश्लेषा (4 चरण)",
    ratna: "सच्चा मोती रत्न",
    dhatu: "चांदी",
    mitraRashi: "वृश्चिक, मीन, मेष, सिंह",
    letters: "ही, हू, हे, हो, डा, डी, डू, डे, डो",
    beejMantra: "ॐ श्रां श्रीं श्रौं सः चन्द्रमसे नमः॥"
  },
  {
    id: "simha",
    hindiName: "सिंह",
    englishName: "Leo",
    symbol: "",
    element: "अग्नि तत्त्व",
    nature: "स्थिर राशि",
    swami: "सूर्य देव",
    aradhyaDev: "भगवान सूर्यनारायण एवं श्री राम",
    nakshatras: "मघा (4 चरण), पूर्वाफाल्गुनी (4 चरण), उत्तराफाल्गुनी (1 चरण)",
    ratna: "माणिक्य रत्न",
    dhatu: "स्वर्ण एवं तांबा",
    mitraRashi: "मेष, धनु, कर्क, वृश्चिक",
    letters: "मा, मी, मू, मे, मो, टा, टी, टू, टे",
    beejMantra: "ॐ ह्रां ह्रीं ह्रौं सः सूर्याय नमः॥"
  },
  {
    id: "kanya",
    hindiName: "कन्या",
    englishName: "Virgo",
    symbol: "",
    element: "पृथ्वी तत्त्व",
    nature: "द्विस्वभाव राशि",
    swami: "बुध देव",
    aradhyaDev: "भगवान श्री गणेश एवं माँ गायत्री",
    nakshatras: "उत्तराफाल्गुनी (3 चरण), हस्त (4 चरण), चित्रा (2 चरण)",
    ratna: "पन्ना रत्न",
    dhatu: "चांदी एवं स्वर्ण",
    mitraRashi: "वृषभ, मकर, मिथुन, तुला",
    letters: "टो, पा, पी, पू, ष, ण, ठ, पे, पो",
    beejMantra: "ॐ ब्रां ब्रीं ब्रौं सः बुधाय नमः॥"
  },
  {
    id: "tula",
    hindiName: "तुला",
    englishName: "Libra",
    symbol: "",
    element: "वायु तत्त्व",
    nature: "चर राशि",
    swami: "शुक्र देव",
    aradhyaDev: "माँ महालक्ष्मी एवं संतोषी माता",
    nakshatras: "चित्रा (2 चरण), स्वाति (4 चरण), विशाखा (3 चरण)",
    ratna: "हीरा / जरकन रत्न",
    dhatu: "चांदी एवं प्लैटिनम",
    mitraRashi: "मिथुन, कुम्भ, वृषभ, मकर",
    letters: "रा, री, रू, रे, रो, ता, ती, तू, ते",
    beejMantra: "ॐ द्रां द्रीं द्रौं सः शुक्राय नमः॥"
  },
  {
    id: "vrishchik",
    hindiName: "वृश्चिक",
    englishName: "Scorpio",
    symbol: "",
    element: "जल तत्त्व",
    nature: "स्थिर राशि",
    swami: "मंगल देव",
    aradhyaDev: "श्री हनुमान जी एवं काल भैरव",
    nakshatras: "विशाखा (1 चरण), अनुराधा (4 चरण), ज्येष्ठा (4 चरण)",
    ratna: "सिंदूरी मूंगा रत्न",
    dhatu: "तांबा",
    mitraRashi: "कर्क, मीन, सिंह, धनु",
    letters: "तो, ना, नी, नू, ने, नो, या, यी, यू",
    beejMantra: "ॐ क्रां क्रीं क्रौं सः भौमाय नमः॥"
  },
  {
    id: "dhanu",
    hindiName: "धनु",
    englishName: "Sagittarius",
    symbol: "",
    element: "अग्नि तत्त्व",
    nature: "द्विस्वभाव राशि",
    swami: "देवगुरु बृहस्पति",
    aradhyaDev: "भगवान श्री हरि विष्णु एवं दत्तात्रेय",
    nakshatras: "मूल (4 चरण), पूर्वाषाढ़ा (4 चरण), उत्तराषाढ़ा (1 चरण)",
    ratna: "पुखराज रत्न",
    dhatu: "स्वर्ण एवं पीतल",
    mitraRashi: "मेष, सिंह, कर्क, मीन",
    letters: "ये, यो, भा, भी, भू, धा, फा, ढा, भे",
    beejMantra: "ॐ ग्रां ग्रीं ग्रौं सः गुरवे नमः॥"
  },
  {
    id: "makar",
    hindiName: "मकर",
    englishName: "Capricorn",
    symbol: "",
    element: "पृथ्वी तत्त्व",
    nature: "चर राशि",
    swami: "शनि देव",
    aradhyaDev: "न्याय के देवता शनि देव एवं श्री हनुमान",
    nakshatras: "उत्तराषाढ़ा (3 चरण), श्रवण (4 चरण), धनिष्ठा (2 चरण)",
    ratna: "नीलम / कटैला रत्न",
    dhatu: "लोहा एवं पंचधातु",
    mitraRashi: "वृषभ, कन्या, तुला, कुम्भ",
    letters: "भो, जा, जी, खी, खू, खे, खो, गा, गी",
    beejMantra: "ॐ प्रां प्रीं प्रौं सः शनैश्चराय नमः॥"
  },
  {
    id: "kumbh",
    hindiName: "कुम्भ",
    englishName: "Aquarius",
    symbol: "",
    element: "वायु तत्त्व",
    nature: "स्थिर राशि",
    swami: "शनि देव",
    aradhyaDev: "भगवान शिव एवं शनि महाराज",
    nakshatras: "धनिष्ठा (2 चरण), शतभिषा (4 चरण), पूर्वाभाद्रपद (3 चरण)",
    ratna: "नीलम / लाजवर्त रत्न",
    dhatu: "अष्टधातु एवं लोहा",
    mitraRashi: "मिथुन, तुला, वृषभ, मकर",
    letters: "गू, गे, गो, सा, सी, सू, से, सो, दा",
    beejMantra: "ॐ प्रां प्रीं प्रौं सः शनैश्चराय नमः॥"
  },
  {
    id: "meen",
    hindiName: "मीन",
    englishName: "Pisces",
    symbol: "",
    element: "जल तत्त्व",
    nature: "द्विस्वभाव राशि",
    swami: "देवगुरु बृहस्पति",
    aradhyaDev: "भगवान श्री लक्ष्मी-नारायण एवं गुरुदेव",
    nakshatras: "पूर्वाभाद्रपद (1 चरण), उत्तराभाद्रपद (4 चरण), रेवती (4 चरण)",
    ratna: "पुखराज / सुनहला रत्न",
    dhatu: "स्वर्ण",
    mitraRashi: "कर्क, वृश्चिक, मेष, धनु",
    letters: "दी, दू, थ, झ, ञ, दे, दो, चा, ची",
    beejMantra: "ॐ ग्रां ग्रीं ग्रौं सः गुरवे नमः॥"
  }
];
const DAILY_SHLOKAS = [
  {
    sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन। मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥",
    source: "श्रीमद्भगवद्गीता २.४७",
    meaning: "तुम्हारा अधिकार केवल अपने श्रेष्ठ कर्तव्य-कर्म करने में है, उसके फलों में कभी नहीं। इसलिए तुम न तो कर्मफल के प्रति आसक्त हो और न ही कर्म का त्याग करने में तुम्हारी रुचि हो।"
  },
  {
    sanskrit: "श्रद्धावान् लभते ज्ञानं तत्परः संयतेन्द्रियः। ज्ञानं लब्ध्वा परां शान्तिमचिरेणाधिगच्छति॥",
    source: "श्रीमद्भगवद्गीता ४.३९",
    meaning: "श्रद्धा रखने वाला, अपनी इन्द्रियों को वश में रखने वाला और साधन-परायण मनुष्य ही परम ज्ञान को प्राप्त करता है, तथा ज्ञान प्राप्त करके वह शीघ्र ही परम आध्यात्मिक शांति को पा लेता है।"
  },
  {
    sanskrit: "सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः। सर्वे भद्राणि पश्यन्तु मा कश्चिद्दुःखभाग्भवेत्॥",
    source: "बृहदारण्यक उपनिषद् / सनातन कल्याण मंत्र",
    meaning: "संसार के सभी प्राणी सुखी रहें, सभी निरोगी (स्वस्थ) रहें, सभी प्राणी चारों ओर शुभ एवं मंगलमय दर्शन करें और किसी भी प्राणी को कभी कोई दुःख न हो।"
  },
  {
    sanskrit: "आयुः प्रजां धनं विद्यां स्वर्गं मोक्षं सुखानि च। प्रयच्छन्ति तथा राज्यं प्रीता नृणां पितामहाः॥",
    source: "विष्णु धर्मोत्तर पुराण / हरिवंश पुराण",
    meaning: "नित्य सात्त्विक साधना, धर्मपालन तथा प्रसन्न हुए इष्टदेव व पितृगण मनुष्यों को दीर्घायु, उत्तम संतान, धन-धान्य, विद्या, सुख, राज्य (पद-प्रतिष्ठा) और मोक्ष प्रदान करते हैं।"
  },
  {
    sanskrit: "यत्र योगेश्वरः कृष्णो यत्र पार्थो धनुर्धरः। तत्र श्रीर्विजयो भूतिर्ध्रुवा नीतिर्मतिर्मम॥",
    source: "श्रीमद्भगवद्गीता १८.७८",
    meaning: "जहाँ योगेश्वर भगवान श्रीकृष्ण (धर्म एवं ईश्वर की कृपा) हैं और जहाँ धनुर्धारी अर्जुन (अथक पुरुषार्थ व कर्तव्यनिष्ठा) हैं, वहीं पर लक्ष्मी, विजय, ऐश्वर्य और अटल नीति सदा विराजती है।"
  }
];
function selectContextualSubhashit(dayPanchang, dateSeed) {
  const fest = `${dayPanchang.festivalName || ""} ${dayPanchang.festivalDescription || ""}`;
  const tithi = dayPanchang.tithiName || "";
  if (/भाई दूज|भैया दूज|यम द्वितीया|चित्रगुप्त/u.test(fest)) {
    return {
      sanskrit: "भ्रातस्तवानुजाताहं भुंक्ष्व भक्तमिदं शुभम्। प्रीतये यमराजस्य यमुनाया विशेषतः॥",
      source: "भविष्य पुराण / स्कन्द पुराण (भैया दूज — यम द्वितीया महात्म्य)",
      meaning: "हे भ्राता! मैं आपकी स्नेहमयी भगिनी हूँ; यमराज एवं यमुना जी की प्रसन्नता तथा आपकी दीर्घायु, आरोग्य व अखंड सौभाग्य के लिए इस शुभ अन्न व तिलक को स्वीकार करें।"
    };
  }
  if (/गोवर्धन|अन्नकूट/u.test(fest)) {
    return {
      sanskrit: "गोवर्धनधराधार गोकुलत्राणकारक। विष्णुबाहुकृतोच्छ्राय गवां कोटिप्रदो भव॥",
      source: "गर्ग संहिता / पद्म पुराण (गोवर्धन पूजा महात्म्य)",
      meaning: "गोकुल की रक्षा करने वाले और भगवान श्रीकृष्ण की भुजाओं द्वारा धारण किए गए हे गिरिराज गोवर्धन! आप हमें कोटि-कोटि गौ-धन, सुख और समृद्धि प्रदान करें।"
    };
  }
  if (/देव\s*दीपावली|कार्तिक\s*पूर्णिमा/u.test(fest)) {
    return {
      sanskrit: "शान्ताकारं भुजगशयनं पद्मनाभं सुरेशं, विश्वाधारं गगनसदृशं मेघवर्णं शुभाङ्गम्। कर्पूरगौरं करुणावतारं संसारसारं भुजगेन्द्रहारम्, हरिहरौ सदा वन्दे सर्वलोकैकनाथौ॥",
      source: "स्कन्द पुराण / श्री विष्णु-शिव स्तुति (कार्तिक पूर्णिमा एवं देव दीपावली महात्म्य)",
      meaning: "पावन कार्तिक पूर्णिमा एवं देव दीपावली के महापर्व पर भगवान श्रीहरि विष्णु एवं देवाधिदेव महादेव को वंदन है; पवित्र स्नान, दीपदान और भक्ति से समस्त लोकों में आलोक, धर्म और मंगल का वास हो।"
    };
  }
  const festWithoutDevDiwali = fest.replace(/देव\s*दीपावली/gu, "");
  if (/दीपावली|दिवाली|महालक्ष्मी पूजन|लक्ष्मी पूजा/u.test(festWithoutDevDiwali)) {
    return {
      sanskrit: "सर्वमङ्गलमाङ्गल्ये शिवे सर्वार्थसाधिके। शरण्ये त्र्यम्बके गौरि नारायणि नमोऽस्तु ते॥",
      source: "मार्कण्डेय पुराण / श्री महालक्ष्मी स्तुति (दीपावली महात्म्य)",
      meaning: "सब प्रकार का मंगल प्रदान करने वाली और समस्त मनोरथों को सिद्ध करने वाली भगवती महालक्ष्मी एवं नारायणी को नमन है; माँ लक्ष्मी हमारे घर-परिवार को सुख व ऐश्वर्य से आलोकित करें।"
    };
  }
  if (/धनतेरस|धन्वन्तरि|धन्वंतरि/u.test(fest)) {
    return {
      sanskrit: "ॐ नमो भगवते वासुदेवाय धन्वन्तरये अमृतकलशहस्ताय सर्वभयविनाशाय सर्वरोगनिवारणाय श्रीमहाविष्णवे नमः॥",
      source: "श्रीमद्भागवत महापुराण (भगवान धन्वन्तरि स्तोत्र)",
      meaning: "हाथ में अमृत कलश धारण करने वाले और समस्त रोगों व भयों का नाश करने वाले भगवान धन्वन्तरि स्वरूप श्री महाविष्णु को प्रणाम है; आप सबको उत्तम आरोग्य व सुख-संपदा प्रदान करें।"
    };
  }
  if (/रक्षाबंधन|रक्षा बन्धन|श्रावणी उपाकर्म/u.test(fest)) {
    return {
      sanskrit: "येन बद्धो बली राजा दानवेन्द्रो महाबलः। तेन त्वामपि बध्नामि रक्षे मा चल मा चल॥",
      source: "भविष्य पुराण (रक्षासूत्र वैदिक मंत्र)",
      meaning: "जिस रक्षासूत्र से महाबली दानवेंद्र राजा बलि को बांधा गया था, उसी पवित्र सूत्र से मैं तुम्हें बांधती हूँ; हे रक्षे! तुम अडिग रहो और सदैव कल्याण व रक्षा करो।"
    };
  }
  if (/नवरात्रि|दुर्गाष्टमी|महानवमी|विजयादशमी|दशहरा|शैलपुत्री|सिद्धिदात्री/u.test(fest)) {
    return {
      sanskrit: "या देवी सर्वभूतेषु शक्तिरूपेण संस्थिता। नमस्तस्यै नमस्तस्यै नमस्तस्यै नमो नमः॥",
      source: "दुर्गा सप्तशती (मार्कण्डेय पुराण)",
      meaning: "जो भगवती जगदम्बा समस्त प्राणियों में शक्ति, बुद्धि और करुणा के रूप में विराजमान हैं, उन आदिशक्ति माँ दुर्गा को बारंबार प्रणाम है।"
    };
  }
  const udayaTithiOnly = tithi.split(/[,(—]|फिर|तत्पश्चात/u)[0].trim();
  const isUdayaEkadashi = /एकादशी/u.test(udayaTithiOnly) && !/दशमी/u.test(udayaTithiOnly);
  if (isUdayaEkadashi || /एकादशी/u.test(fest) && !/दशमी/u.test(udayaTithiOnly)) {
    return {
      sanskrit: "एकादश्यां निराहारः स्थित्वाऽहं परेऽहनि। भोक्ष्यामि पुण्डरीकाक्ष शरणं मे भवाच्युत॥",
      source: "नारद पुराण / पद्म पुराण (एकादशी व्रत महात्म्य)",
      meaning: "हे कमलनयन भगवान श्री हरि अच्युत! एकादशी के पावन दिन संयम, जप और भक्ति के साथ मैं आपकी शरण में हूँ; आप समस्त पापों का हरण कर घर-परिवार में धर्म व सुख-शांति प्रदान करें।"
    };
  }
  if (/महाशिवरात्रि|शिवरात्रि|प्रदोष/u.test(fest)) {
    return {
      sanskrit: "कर्पूरगौरं करुणावतारं संसारसारं भुजगेन्द्रहारम्। सदावसन्तं हृदयारविन्दे भवं भवानीसहितं नमामि॥",
      source: "पावन शिव स्तुति",
      meaning: "कर्पूर के समान गौर वर्ण वाले, करुणा के साक्षात् अवतार और भक्तों के हृदय-कमल में सदा निवास करने वाले भगवान शिव एवं माता भवानी को मैं श्रद्धापूर्वक नमन करता हूँ।"
    };
  }
  if (/गणेश चतुर्थी|संकष्टी|विनायक चतुर्थी/u.test(fest)) {
    return {
      sanskrit: "वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ। निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥",
      source: "मुद्गल पुराण (श्री गणेश स्तोत्र)",
      meaning: "घुमावदार सूंड वाले, विशाल शरीर वाले और करोड़ों सूर्यों के समान तेजस्वी हे भगवान श्री गणेश! मेरे समस्त शुभ कार्यों को सदा निर्विघ्न पूर्ण करें।"
    };
  }
  if (/राम नवमी|हनुमान जयंती|हनुमान जन्मोत्सव|सुंदरकांड/u.test(fest)) {
    return {
      sanskrit: "मनोजवं मारुततुल्यवेगं जितेन्द्रियं बुद्धिमतां वरिष्ठम्। वातात्मजं वानरयूथमुख्यं श्रीरामदूतं शरणं प्रपद्ये॥",
      source: "श्री हनुमत् स्तवन (वाल्मीकि रामायण परंपरा)",
      meaning: "मन के समान तीव्र गति और वायु के समान वेग वाले, जितेन्द्रिय, बुद्धिमानों में श्रेष्ठ पवनपुत्र श्रीरामदूत हनुमान जी की मैं शरण लेता हूँ।"
    };
  }
  if (/जन्माष्टमी|कृष्ण जन्मोत्सव|गीता जयंती/u.test(fest)) {
    return {
      sanskrit: "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत। अभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम्॥",
      source: "श्रीमद्भगवद्गीता ४.७",
      meaning: "हे भारत! जब-जब धर्म की हानि और अधर्म की वृद्धि होती है, तब-तब सज्जनों के कल्याण और धर्म की स्थापना के लिए मैं साक्षात् प्रकट होता हूँ।"
    };
  }
  if (/गोपाष्टमी/u.test(fest)) {
    return {
      sanskrit: "नमो गोभ्यः श्रीमतीभ्यः सौरभेयीभ्य एव च। नमो ब्रह्मसुताभ्यश्च पवित्राभ्यो नमो नमः॥",
      source: "महाभारत अनुशासन पर्व / स्कन्द पुराण (गोपाष्टमी गौ-वंदना)",
      meaning: "सौभाग्य एवं लक्ष्मी रूपिणी, सुरभि कुल की पावन गौ-माताओं और ब्रह्माजी की पवित्र पुत्रियों को हमारा बारंबार श्रद्धापूर्वक प्रणाम है।"
    };
  }
  if (/अक्षय नवमी|आंवला नवमी/u.test(fest)) {
    return {
      sanskrit: "धात्रीदेवि नमस्तुभ्यं सर्वपापक्षयङ्करि। पुत्रान् देहि महाप्राज्ञे यशो देहि धनं तथा॥",
      source: "पद्म पुराण — कार्तिक महात्म्य (अक्षय नवमी धात्री स्तुति)",
      meaning: "समस्त पापों का क्षय करने वाली और अक्षय पुण्य प्रदान करने वाली हे धात्री (आंवला) देवी! आपको नमस्कार है; हमें उत्तम संतान, यश, आरोग्य एवं अक्षय सुख-संपदा प्रदान करें।"
    };
  }
  if (/तुलसी विवाह|देवउठनी|देव प्रबोधनी/u.test(fest)) {
    return {
      sanskrit: "महाप्रसादजननी सर्वसौभाग्यवर्धिनी। आधिव्याधिहरा नित्यं तुलसी त्वं नमोऽस्तु ते॥",
      source: "श्री तुलसी महारानी स्तुति",
      meaning: "महाप्रसाद की जननी, अखंड सौभाग्य को बढ़ाने वाली और समस्त मानसिक व शारीरिक रोगों का हरण करने वाली हे माँ तुलसी! आपको नित्य प्रणाम है।"
    };
  }
  if (/मकर संक्रांति|संक्रान्ति|संक्रांति|छठ पूजा|सूर्य षष्ठी/u.test(fest)) {
    return {
      sanskrit: "जपाकुसुमसंकाशं काश्यपेयं महाद्युतिम्। तमोऽरिं सर्वपापघ्नं प्रणतोऽस्मि दिवाकरम्॥",
      source: "नवग्रह स्तोत्रम् (महर्षि व्यास विरचित — सूर्य संक्रांति एवं सूर्य उपासना)",
      meaning: "गुड़हल के पुष्प के समान अरुण आभा वाले, महर्षि कश्यप के पुत्र, अंधकार व पापों का नाश करने वाले महातेजस्वी भगवान सूर्यदेव को मैं प्रणाम करता हूँ।"
    };
  }
  if (/बसंत पंचमी|वसंत पंचमी|सरस्वती पूजा/u.test(fest)) {
    return {
      sanskrit: "या कुन्देन्दुतुषारहारधवला या शुभ्रवस्त्रावृता, या वीणावरदण्डमण्डितकरा या श्वेतपद्मासना। या ब्रह्माच्युतशंकरप्रभृतिभिर्देवैः सदा वन्दिता, सा मां पातु सरस्वती भगवती निःशेषजाड्यापहा॥",
      source: "श्री सरस्वती वंदना (पद्म पुराण)",
      meaning: "जो कुंद के फूल, चंद्रमा और हिम के समान श्वेत हैं, शुभ्र वस्त्र धारण करती हैं, जिनके हाथ वीणा से सुशोभित हैं और जो श्वेत कमल पर विराजमान हैं; ब्रह्मा, विष्णु और महेश आदि देवता जिनकी सदा वंदना करते हैं, वे अज्ञान का समूल नाश करने वाली भगवती सरस्वती हमारी रक्षा करें और निर्मल विद्या व विवेक प्रदान करें।"
    };
  }
  if (/पूर्णिमा|सत्यनारायण/u.test(fest) || /पूर्णिमा/u.test(tithi)) {
    return {
      sanskrit: "शान्ताकारं भुजगशयनं पद्मनाभं सुरेशं, विश्वाधारं गगनसदृशं मेघवर्णं शुभाङ्गम्। लक्ष्मीकान्तं कमलनयनं योगिभिर्ध्यानगम्यं, वन्दे विष्णुं भवभयहरं सर्वलोकैकनाथम्॥",
      source: "श्री विष्णु सहस्रनाम स्तोत्रम् (पूर्णिमा महात्म्य)",
      meaning: "जिनकी आकृति परम शांत है, जो शेषनाग की शैय्या पर शयन करते हैं, जिनकी नाभि में कमल है, जो देवताओं के भी ईश्वर और संपूर्ण विश्व के आधार हैं; आकाश के समान सर्वव्यापी, मेघ के समान श्याम वर्ण वाले, लक्ष्मीपति, कमलनयन और संसार के भय का नाश करने वाले सर्वलोकनाथ भगवान श्री हरि विष्णु की मैं वंदना करता हूँ।"
    };
  }
  if (/अमावस्या|पितृ/u.test(fest) || /अमावस्या/u.test(tithi)) {
    return {
      sanskrit: "देवताभ्यः पितृभ्यश्च महायोगिभ्य एव च। नमः स्वाहायै स्वधायै नित्यमेव नमो नमः॥",
      source: "गरुड़ पुराण / वायु पुराण (पितृ स्तोत्र)",
      meaning: "समस्त देवताओं, पितरों एवं महायोगियों को तथा स्वाहा और स्वधा देवी को हमारा नित्य श्रद्धापूर्वक प्रणाम है; पितरों के आशीर्वाद से कुल में सुख-शांति बनी रहे।"
    };
  }
  const tithiRotIdx = Math.abs(dateSeed + (dayPanchang.tithiIndex || 0));
  if (/त्रयोदशी/u.test(tithi)) {
    const trayodashiPool = [
      {
        sanskrit: "कर्पूरगौरं करुणावतारं संसारसारं भुजगेन्द्रहारम्। सदावसन्तं हृदयारविन्दे भवं भवानीसहितं नमामि॥",
        source: "पावन शिव स्तुति — त्रयोदशी प्रदोष संयोग",
        meaning: "कर्पूर के समान गौर वर्ण वाले, करुणा के साक्षात् अवतार और भक्तों के हृदय-कमल में सदा निवास करने वाले भगवान शिव एवं माता भवानी को मैं श्रद्धापूर्वक नमन करता हूँ।"
      },
      {
        sanskrit: "त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम्। उर्वारुकमिव बन्धनान्मृत्योर्मुक्षीय मामृतात्॥",
        source: "ऋग्वेद ७.५९.१२ (महामृत्युंजय मंत्र — त्रयोदशी शिव उपासना)",
        meaning: "तीनों लोकों के स्वामी, सुगंधि व पुष्टि को बढ़ाने वाले महादेव की हम उपासना करते हैं; वे हमें समस्त भय, रोग और बंधनों से मुक्त कर आरोग्य व अमरत्व प्रदान करें।"
      }
    ];
    return trayodashiPool[tithiRotIdx % trayodashiPool.length];
  }
  if (/चतुर्थी/u.test(tithi)) {
    return {
      sanskrit: "शुक्लाम्बरधरं विष्णुं शशिवर्णं चतुर्भुजम्। प्रसन्नवदनं ध्यायेत् सर्वविघ्नोपशान्तये॥",
      source: "गणेश वंदना — चतुर्थी तिथि महात्म्य",
      meaning: "श्वेत वस्त्र धारण करने वाले, चंद्रमा के समान सौम्य कांति वाले और प्रसन्न मुख वाले भगवान श्री गणेश का समस्त विघ्नों की शांति हेतु हम ध्यान करते हैं।"
    };
  }
  if (/अष्टमी|नवमी/u.test(tithi)) {
    return {
      sanskrit: "या देवी सर्वभूतेषु बुद्धिरूपेण संस्थिता। नमस्तस्यै नमस्तस्यै नमस्तस्यै नमो नमः॥",
      source: "दुर्गा सप्तशती (अध्याय ५) — अष्टमी/नवमी शक्ति वंदना",
      meaning: "जो भगवती जगदम्बा समस्त प्राणियों में सद्बुद्धि, विवेक व तेज के रूप में विराजमान हैं, उन आदिशक्ति माँ दुर्गा को बारंबार प्रणाम है।"
    };
  }
  const weekdayShlokaPools = {
    0: [
      {
        sanskrit: "जपाकुसुमसंकाशं काश्यपेयं महाद्युतिम्। तमोऽरिं सर्वपापघ्नं प्रणतोऽस्मि दिवाकरम्॥",
        source: "नवग्रह स्तोत्रम् — रविवार भगवान सूर्यदेव उपासना",
        meaning: "गुड़हल के पुष्प के समान अरुण आभा वाले, महर्षि कश्यप के पुत्र, अंधकार व पापों का नाश करने वाले महातेजस्वी भगवान सूर्यदेव को मैं प्रणाम करता हूँ।"
      },
      {
        sanskrit: "आदित्यहृदयं पुण्यं सर्वशत्रुविनाशनम्। जयावहं जपेन्नित्यमक्षयं परमं शिवम्॥",
        source: "वाल्मीकि रामायण (आदित्य हृदय स्तोत्र — रविवार विशेष)",
        meaning: "परम पवित्र आदित्य हृदय स्तोत्र समस्त बाधाओं का नाशक, विजय प्रदान करने वाला तथा अक्षय तेज व कल्याण देने वाला है।"
      },
      {
        sanskrit: "उद्यमेन हि सिध्यन्ति कार्याणि न मनोरथैः। न हि सुप्तस्य सिंहस्य प्रविशन्ति मुखे मृगाः॥",
        source: "हितोपदेश / सुभाषित रत्नाकर — रविवार कर्म-तेज सुभाषित",
        meaning: "केवल इच्छा करने से नहीं, अपितु निरंतर पुरुषार्थ और परिश्रम से ही कार्य सिद्ध होते हैं; जैसे सोते हुए सिंह के मुख में मृग स्वयं प्रवेश नहीं करता।"
      }
    ],
    1: [
      {
        sanskrit: "कर्पूरगौरं करुणावतारं संसारसारं भुजगेन्द्रहारम्। सदावसन्तं हृदयारविन्दे भवं भवानीसहितं नमामि॥",
        source: "पावन शिव स्तुति — सोमवार भगवान शिव एवं माता भवानी वंदना",
        meaning: "कर्पूर के समान गौर वर्ण वाले, करुणा के साक्षात् अवतार और भक्तों के हृदय-कमल में सदा निवास करने वाले भगवान शिव एवं माता भवानी को मैं श्रद्धापूर्वक नमन करता हूँ।"
      },
      {
        sanskrit: "दधिशङ्खतुषाराभं क्षीरोदार्णवसम्भवम्। नमामि शशिनं सोमं शम्भोर्मुकुटभूषणम्॥",
        source: "नवग्रह स्तोत्रम् — सोमवार चंद्र देव स्तुति",
        meaning: "दही, शंख और हिम के समान श्वेत आभा वाले, क्षीरसागर से प्रकट हुए और भगवान शिव के मुकुट के आभूषण चंद्रदेव को मैं प्रणाम करता हूँ।"
      },
      {
        sanskrit: "प्रसादे सर्वदुःखानां हानिरस्योपजायते। प्रसन्नचेतसो ह्याशु बुद्धिः पर्यवतिष्ठते॥",
        source: "श्रीमद्भगवद्गीता २.६५ — सोमवार मन-शांति सुभाषित",
        meaning: "अंतःकरण की प्रसन्नता और शांति प्राप्त होने पर समस्त दुःखों का अंत हो जाता है तथा शांत चित्त वाले साधक की बुद्धि शीघ्र ही स्थिर हो जाती है।"
      }
    ],
    2: [
      {
        sanskrit: "मनोजवं मारुततुल्यवेगं जितेन्द्रियं बुद्धिमतां वरिष्ठम्। वातात्मजं वानरयूथमुख्यं श्रीरामदूतं शरणं प्रपद्ये॥",
        source: "श्री हनुमत् स्तवन — मंगलवार संकटमोचन श्री हनुमान उपासना",
        meaning: "मन के समान तीव्र गति और वायु के समान वेग वाले, जितेन्द्रिय, बुद्धिमानों में श्रेष्ठ पवनपुत्र श्रीरामदूत हनुमान जी की मैं शरण लेता हूँ।"
      },
      {
        sanskrit: "धरणीगर्भसम्भूतं विद्युत्कान्तिसमप्रभम्। कुमारं शक्तिहस्तं तं मङ्गलं प्रणमाम्यहम्॥",
        source: "नवग्रह स्तोत्रम् — मंगलवार भूमिपुत्र मंगल देव वंदना",
        meaning: "पृथ्वी के गर्भ से उत्पन्न, विद्युत के समान कांतिमान तथा हाथ में शक्ति धारण करने वाले मंगलदेव को मैं श्रद्धापूर्वक प्रणाम करता हूँ।"
      },
      {
        sanskrit: "उद्धरेदात्मनात्मानं नात्मानमवसादयेत्। आत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मनः॥",
        source: "श्रीमद्भगवद्गीता ६.५ — मंगलवार आत्मबल सुभाषित",
        meaning: "मनुष्य को अपने साहस व विवेक से स्वयं अपना उद्धार करना चाहिए और कभी निराश नहीं होना चाहिए, क्योंकि अपना मन ही अपना सर्वश्रेष्ठ मित्र है।"
      }
    ],
    3: [
      {
        sanskrit: "वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ। निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥",
        source: "मुद्गल पुराण — बुधवार विघ्नहर्ता श्री गणेश वंदना",
        meaning: "घुमावदार सूंड वाले, विशाल शरीर वाले और करोड़ों सूर्यों के समान तेजस्वी हे भगवान श्री गणेश! मेरे समस्त शुभ कार्यों को सदा निर्विघ्न पूर्ण करें।"
      },
      {
        sanskrit: "प्रियङ्गुकलिकाश्यामं रूपेणाप्रतिमं बुधम्। सौम्यं सौम्यगुणोपेतं तं बुधं प्रणमाम्यहम्॥",
        source: "नवग्रह स्तोत्रम् — बुधवार बुद्धिदाता बुध देव स्तुति",
        meaning: "प्रियंगु की कली के समान श्याम, अनुपम सौंदर्य व सौम्य गुणों से युक्त बुद्धि के अधिष्ठाता बुधदेव को मैं नमन करता हूँ।"
      },
      {
        sanskrit: "सत्यं ब्रूयात् प्रियं ब्रूयात् न ब्रूयात् सत्यमप्रियम्। प्रियं च नानृतं ब्रूयात् एष धर्मः सनातनः॥",
        source: "मनुस्मृति ४.१३८ — बुधवार सद्वाणी सुभाषित",
        meaning: "सदा सत्य और मधुर वचन बोलने चाहिए; अप्रिय सत्य या असत्य प्रिय वचन न बोलना ही सनातन धर्म की श्रेष्ठ मर्यादा है।"
      }
    ],
    4: [
      {
        sanskrit: "देवानां च ऋषीणां च गुरुं काञ्चनसन्निभम्। बुद्धिभूतं त्रिलोकेशं तं नमामि बृहस्पतिम्॥",
        source: "नवग्रह स्तोत्रम् — गुरुवार देवगुरु बृहस्पति वंदना",
        meaning: "देवताओं और ऋषियों के परम गुरु, स्वर्ण के समान कान्तिमान, बुद्धि के साक्षात् स्वरूप एवं तीनों लोकों के स्वामी देवगुरु बृहस्पति को मैं श्रद्धापूर्वक प्रणाम करता हूँ।"
      },
      {
        sanskrit: "गुरुर्ब्रह्मा गुरुर्विष्णुः गुरुर्देवो महेश्वरः। गुरुः साक्षात् परब्रह्म तस्मै श्रीगुरवे नमः॥",
        source: "गुरु गीता (स्कन्द पुराण) — गुरुवार सद्गुरु वंदना",
        meaning: "गुरु ही ब्रह्मा, विष्णु और महेश हैं तथा साक्षात् परब्रह्म स्वरूप हैं; ज्ञान व सन्मार्ग दिखाने वाले श्री सद्गुरुदेव को सादर प्रणाम है।"
      },
      {
        sanskrit: "विद्या ददाति विनयं विनयाद्याति पात्रताम्। पात्रत्वाद्धनमाप्नोति धनाद्धर्मं ततः सुखम्॥",
        source: "हितोपदेश — गुरुवार विद्या एवं विवेक सुभाषित",
        meaning: "सच्ची विद्या विनम्रता देती है, विनम्रता से योग्यता आती है, योग्यता से सद्-अर्थ की प्राप्ति होती है और धर्मयुक्त अर्थ से स्थायी सुख मिलता है।"
      }
    ],
    5: [
      {
        sanskrit: "सर्वमङ्गलमाङ्गल्ये शिवे सर्वार्थसाधिके। शरण्ये त्र्यम्बके गौरि नारायणि नमोऽस्तु ते॥",
        source: "दुर्गा सप्तशती (अध्याय ११) — शुक्रवार भगवती गौरी एवं नारायणी स्तुति",
        meaning: "सब प्रकार का मंगल प्रदान करने वाली, कल्याणकारी, समस्त मनोरथों को सिद्ध करने वाली, शरणागतवत्सला एवं त्रिनेत्रा भगवती गौरी एवं नारायणी को मेरा बारंबार नमन है।"
      },
      {
        sanskrit: "हिमकुन्दमृणालाभं दैत्यानां परमं गुरुम्। सर्वशास्त्रप्रवक्तारं भार्गवं प्रणमाम्यहम्॥",
        source: "नवग्रह स्तोत्रम् — शुक्रवार शुक्र देव स्तुति",
        meaning: "हिम, कुंद और कमलनाल के समान श्वेत कांति वाले तथा समस्त शास्त्रों के ज्ञाता भृगुपुत्र शुक्राचार्य को मैं प्रणाम करता हूँ।"
      },
      {
        sanskrit: "नमस्तेऽस्तु महामाये श्रीपीठे सुरपूजिते। शङ्खचक्रगदाहस्ते महालक्ष्मि नमोऽस्तु ते॥",
        source: "महालक्ष्मी अष्टकम् — शुक्रवार श्री लक्ष्मी वंदना",
        meaning: "श्रीपीठ पर विराजमान, देवताओं द्वारा पूजित तथा शंख, चक्र व गदा धारण करने वाली हे माँ महालक्ष्मी! आपको बारंबार प्रणाम है।"
      }
    ],
    6: [
      {
        sanskrit: "नीलांजनसमाभासं रविपुत्रं यमाग्रजम्। छायामार्तण्डसम्भूतं तं नमामि शनैश्चरम्॥",
        source: "नवग्रह स्तोत्रम् — शनिवार कर्मफलदाता श्री शनैश्चर देव वंदना",
        meaning: "नीले अंजन के समान आभा वाले, भगवान सूर्य एवं छाया के पुत्र तथा यमराज के अग्रज कर्मफलदाता श्री शनैश्चर देव को मैं श्रद्धापूर्वक प्रणाम करता हूँ।"
      },
      {
        sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन। मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥",
        source: "श्रीमद्भगवद्गीता २.४७ — शनिवार निष्काम कर्म सुभाषित",
        meaning: "तुम्हारा अधिकार केवल निष्ठापूर्वक कर्म करने में है, फल की चिंता में नहीं; निरंतर सत्कर्म और धैर्य से ही स्थायी सिद्धि मिलती है।"
      },
      {
        sanskrit: "यत्र योगेश्वरः कृष्णो यत्र पार्थो धनुर्धरः। तत्र श्रीर्विजयो भूतिर्ध्रुवा नीतिर्मतिर्मम॥",
        source: "श्रीमद्भगवद्गीता १८.७८ — शनिवार धर्म एवं पुरुषार्थ सुभाषित",
        meaning: "जहाँ योगेश्वर भगवान श्रीकृष्ण (ईश्वर की कृपा) और धनुर्धारी अर्जुन (अथक पुरुषार्थ) हैं, वहीं श्री, विजय, ऐश्वर्य और अटल नीति विराजती है।"
      }
    ]
  };
  if (typeof dayPanchang.weekdayIndex === "number" && weekdayShlokaPools[dayPanchang.weekdayIndex]) {
    const pool = weekdayShlokaPools[dayPanchang.weekdayIndex];
    const weekCycle = Math.floor(Math.abs(dateSeed) / 7) + (dayPanchang.tithiIndex || 0);
    return pool[Math.abs(weekCycle) % pool.length];
  }
  return DAILY_SHLOKAS[Math.abs(dateSeed) % DAILY_SHLOKAS.length];
}
const CHANDRA_BHAVA_DESCRIPTIONS = [
  {
    bhavaName: "प्रथम (लग्न) भाव में चन्द्र गोचर",
    chandrabal: "अत्यंत शुभ चंद्रबल (प्रथम भाव)",
    tarabal: "सम्पत तारा (धन व यश प्रदायक)",
    gocharSummary: "आज चन्द्रमा आपकी अपनी ही राशि (प्रथम केंद्र भाव) में गोचरस्थ हैं। इससे आत्मबल, चेहरे पर तेज, मानसिक प्रसन्नता और राजकीय सम्मान में वृद्धि का प्रबल योग बन रहा है।"
  },
  {
    bhavaName: "द्वितीय (धन व वाणी) भाव में चन्द्र गोचर",
    chandrabal: "मध्यम शुभ चंद्रबल (द्वितीय भाव)",
    tarabal: "क्षेम तारा (कल्याणकारी)",
    gocharSummary: "आज चन्द्रमा आपकी राशि से द्वितीय धन भाव में संचरण कर रहे हैं। मधुर वाणी से कार्य सधेंगे, कुटुम्ब का सहयोग मिलेगा तथा संचित कोष के प्रबंधन पर ध्यान रहेगा।"
  },
  {
    bhavaName: "तृतीय (पराक्रम व भ्रातृ) भाव में चन्द्र गोचर",
    chandrabal: "अत्यंत शुभ चंद्रबल (तृतीय पराक्रम भाव)",
    tarabal: "साधक तारा (कार्य सिद्धि)",
    gocharSummary: "आज चन्द्रमा आपकी राशि से तृतीय पराक्रम भाव में गोचर कर रहे हैं। साहस एवं पुरुषार्थ से कार्य आगे बढ़ेंगे, छोटी यात्राएं सार्थक रहेंगी और मित्रों से सहयोग मिलेगा।"
  },
  {
    bhavaName: "चतुर्थ (सुख, भूमि व मातृ) भाव में चन्द्र गोचर",
    chandrabal: "संयमशील चंद्र गोचर (सावधानी आवश्यक — चतुर्थ भाव)",
    tarabal: "मित्र तारा (सहयोग प्रदायक)",
    gocharSummary: "आज चन्द्रमा आपकी राशि से चतुर्थ भाव में स्थित हैं। माता के स्वास्थ्य व सुख-सुविधा का ध्यान रखें तथा घरेलू कार्यों व पारिवारिक सामंजस्य में शांत चित्त से व्यवहार करें।"
  },
  {
    bhavaName: "पंचम (विद्या, बुद्धि व संतान) भाव में चन्द्र गोचर",
    chandrabal: "मध्यम शुभ चंद्रबल (पंचम त्रिकोण भाव)",
    tarabal: "परम मित्र तारा (अति-अनुकूल)",
    gocharSummary: "आज चन्द्रमा आपकी राशि से पंचम त्रिकोण भाव में विराजमान हैं। बौद्धिक क्षमता प्रखर रहेगी, संतान पक्ष से हर्ष प्राप्त होगा और सही निर्णयों से धन-लाभ के अवसर बनेंगे।"
  },
  {
    bhavaName: "षष्ठ (विजय, कार्यसिद्धि व संयम) भाव में चन्द्र गोचर",
    chandrabal: "शुभ चंद्रबल (विजय व कार्यसिद्धि भाव — स्वास्थ्य व विवाद में संयम रखें)",
    tarabal: "साधक तारा (विजय व कार्यसिद्धि)",
    gocharSummary: "आज चन्द्रमा आपकी राशि से षष्ठ भाव में गोचर कर रहे हैं। कार्यक्षेत्र व प्रतिस्पर्धा में विजय मिलेगी, किंतु अनावश्यक विवाद से बचें तथा पाचन व खान-पान में संयम रखें।"
  },
  {
    bhavaName: "सप्तम (दांपत्य व साझेदारी) भाव में चन्द्र गोचर",
    chandrabal: "अत्यंत शुभ चंद्रबल (सप्तम केंद्र भाव)",
    tarabal: "साधक तारा (व्यापार वृद्धि)",
    gocharSummary: "आज चन्द्रमा आपकी राशि से सप्तम केंद्र भाव में पूर्ण दृष्टि डाल रहे हैं। दैनिक व्यापार में विशेष उछाल, साझेदारी में लाभ और जीवनसाथी के साथ मधुर सामंजस्य स्थापित होगा।"
  },
  {
    bhavaName: "अष्टम (आयु, संयम व गुप्त चिंतन) भाव में चन्द्र गोचर",
    chandrabal: "संयमशील चंद्र गोचर (सावधानी आवश्यक — अष्टम भाव)",
    tarabal: "क्षेम तारा (इष्ट कृपा से रक्षा)",
    gocharSummary: "आज चन्द्रमा आपकी राशि से अष्टम भाव में हैं। आज वाहन सावधानी से चलाएं, कार्यक्षेत्र में नया जोखिम न लें तथा आध्यात्मिक जप व शांत चित्त से मानसिक शांति बनाए रखें।"
  },
  {
    bhavaName: "नवम (भाग्य, धर्म व गुरु) भाव में चन्द्र गोचर",
    chandrabal: "मध्यम शुभ चंद्रबल (नवम भाग्य त्रिकोण भाव)",
    tarabal: "मित्र तारा (धर्म व पुण्य वृद्धि)",
    gocharSummary: "आज चन्द्रमा आपकी राशि से नवम भाग्य त्रिकोण में गोचर कर रहे हैं। भाग्य का भरपूर साथ मिलेगा, धार्मिक अनुष्ठान में रुचि बढ़ेगी और वरिष्ठजनों की कृपा से बड़ी बाधा दूर होगी।"
  },
  {
    bhavaName: "दशम (कर्म, राज्य व पद-प्रतिष्ठा) भाव में चन्द्र गोचर",
    chandrabal: "अत्यंत शुभ चंद्रबल (दशम कर्म केंद्र भाव)",
    tarabal: "सम्पत तारा (पद-प्रतिष्ठा लाभ)",
    gocharSummary: "आज चन्द्रमा आपकी राशि से दशम कर्म केंद्र में गोचरस्थ हैं। राज्यपक्ष, उच्चाधिकारियों और व्यापारिक जगत में आपके निर्णय की सराहना होगी तथा मान-प्रतिष्ठा में वृद्धि होगी।"
  },
  {
    bhavaName: "एकादश (लाभ, आय व मनोकामना पूर्ति) भाव में चन्द्र गोचर",
    chandrabal: "अत्यंत शुभ चंद्रबल (एकादश लाभ भाव)",
    tarabal: "परम मित्र तारा (सर्वार्थ सिद्धि)",
    gocharSummary: "आज चन्द्रमा आपकी राशि से एकादश लाभ भाव में गोचर कर रहे हैं। आय के नए स्रोत खुलेंगे, रुका हुआ धन वापस मिलने का योग है तथा दीर्घकालीन मनोकामना पूर्ण होगी।"
  },
  {
    bhavaName: "द्वादश (व्यय, यात्रा व संयम) भाव में चन्द्र गोचर",
    chandrabal: "संयमशील चंद्र गोचर (सावधानी आवश्यक — द्वादश भाव)",
    tarabal: "क्षेम तारा (दान-पुण्य से शुभता)",
    gocharSummary: "आज चन्द्रमा आपकी राशि से द्वादश भाव में संचरण कर रहे हैं। आज फिजूलखर्ची पर नियंत्रण रखें, यात्रा में सतर्कता बरतें और रात्रि में पर्याप्त नींद व विश्राम लें।"
  }
];
const FAVORITE_RASHI_STORAGE_KEY = "panditji_favorite_rashi_id";
const DARSHAN_STREAK_STORAGE_KEY = "panditji_daily_darshan_streak";
const DARSHAN_LAST_DATE_KEY = "panditji_daily_darshan_last_date";
function getDailyStreakInfo(now = /* @__PURE__ */ new Date()) {
  try {
    const todayIso = getISTCalendarParts(now).dateKey;
    const lastDate = localStorage.getItem(DARSHAN_LAST_DATE_KEY);
    const rawStreak = parseInt(localStorage.getItem(DARSHAN_STREAK_STORAGE_KEY) || "1", 10);
    let streak = Number.isFinite(rawStreak) && rawStreak > 0 ? rawStreak : 1;
    if (lastDate !== todayIso) {
      if (lastDate) {
        const prev = new Date(lastDate);
        const curr = new Date(todayIso);
        const diffDays = Math.round((curr.getTime() - prev.getTime()) / (1e3 * 60 * 60 * 24));
        if (diffDays === 1) {
          streak += 1;
        } else if (diffDays > 1) {
          streak = 1;
        }
      }
      localStorage.setItem(DARSHAN_LAST_DATE_KEY, todayIso);
      localStorage.setItem(DARSHAN_STREAK_STORAGE_KEY, String(streak));
    }
    return { streak, blessedToday: true };
  } catch {
    return { streak: 1, blessedToday: true };
  }
}
const findRashiFromText = (rashiText) => {
  if (!rashiText) return void 0;
  const clean = rashiText.trim().toLowerCase().replace(/कुंभ/g, "कुम्भ");
  return TWELVE_RASHIS.find(
    (r) => clean.includes(r.hindiName.toLowerCase()) || clean.includes(r.englishName.toLowerCase()) || clean === r.id
  );
};
const NAKSHATRA_LOOKUP_27 = [
  { idx: 0, hi: "अश्विनी", en: "ashwini" },
  { idx: 1, hi: "भरणी", en: "bharani" },
  { idx: 2, hi: "कृत्तिका", en: "krittika" },
  { idx: 3, hi: "रोहिणी", en: "rohini" },
  { idx: 4, hi: "मृगशिरा", en: "mrigashira" },
  { idx: 5, hi: "आर्द्रा", en: "ardra" },
  { idx: 6, hi: "पुनर्वसु", en: "punarvasu" },
  { idx: 7, hi: "पुष्य", en: "pushya" },
  { idx: 8, hi: "आश्लेषा", en: "ashlesha" },
  { idx: 9, hi: "मघा", en: "magha" },
  { idx: 10, hi: "पूर्वाफाल्गुनी", en: "purva phalguni" },
  { idx: 11, hi: "उत्तराफाल्गुनी", en: "uttara phalguni" },
  { idx: 12, hi: "हस्त", en: "hasta" },
  { idx: 13, hi: "चित्रा", en: "chitra" },
  { idx: 14, hi: "स्वाती", en: "swati" },
  { idx: 15, hi: "विशाखा", en: "vishakha" },
  { idx: 16, hi: "अनुराधा", en: "anuradha" },
  { idx: 17, hi: "ज्येष्ठा", en: "jyeshtha" },
  { idx: 18, hi: "मूल", en: "mula" },
  { idx: 19, hi: "पूर्वाषाढ़ा", en: "purva ashadha" },
  { idx: 20, hi: "उत्तराषाढ़ा", en: "uttara ashadha" },
  { idx: 21, hi: "श्रवण", en: "shravana" },
  { idx: 22, hi: "धनिष्ठा", en: "dhanishtha" },
  { idx: 23, hi: "शतभिषा", en: "shatabhisha" },
  { idx: 24, hi: "पूर्वाभाद्रपद", en: "purva bhadrapada" },
  { idx: 25, hi: "उत्तराभाद्रपद", en: "uttara bhadrapada" },
  { idx: 26, hi: "रेवती", en: "revati" }
];
const resolveNakshatraIndexFromName = (name) => {
  if (!name) return null;
  const clean = name.trim().toLowerCase().replace(/\s*नक्षत्र\s*/g, "").replace(/स्वाति/g, "स्वाती").replace(/मृगशीर्ष/g, "मृगशिरा").replace(/पूर्वा\s*फाल्गुनी/g, "पूर्वाफाल्गुनी").replace(/उत्तरा\s*फाल्गुनी/g, "उत्तराफाल्गुनी").replace(/पूर्वा\s*भाद्रपद/g, "पूर्वाभाद्रपद").replace(/उत्तरा\s*भाद्रपद/g, "उत्तराभाद्रपद");
  const found = NAKSHATRA_LOOKUP_27.find(
    (n) => clean.includes(n.hi) || clean.includes(n.en)
  );
  return found ? found.idx : null;
};
const shiftDateKeyByDays = (dateKey, deltaDays) => {
  const [y, m, d] = dateKey.split("-").map((n) => parseInt(n, 10));
  const dt = new Date(Date.UTC(y || 2026, (m || 1) - 1, (d || 1) + deltaDays));
  const year = dt.getUTCFullYear();
  const month = dt.getUTCMonth() + 1;
  const day = dt.getUTCDate();
  return {
    year,
    month,
    day,
    dateKey: `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`,
    weekdayIndex: dt.getUTCDay()
  };
};
const shiftYearMonthByMonths = (year, month, deltaMonths) => {
  const totalMonths = year * 12 + (month - 1) + deltaMonths;
  return {
    year: Math.floor(totalMonths / 12),
    month: (totalMonths % 12 + 12) % 12 + 1
  };
};
const resolveRashiIdFromPathname = () => {
  if (typeof window === "undefined") return null;
  const cleanPath = (window.location.pathname || "").replace(/\/+$/, "").toLowerCase();
  const match = cleanPath.match(/^\/([a-z]+)-(?:(?:saptahik|masik)-)?rashifal$/);
  if (!match) return null;
  const rawSlug = match[1] === "singh" ? "simha" : match[1];
  const found = TWELVE_RASHIS.find((r) => r.id === rawSlug);
  return found ? found.id : null;
};
const resolveForecastModeFromPathname = () => {
  if (typeof window === "undefined") return null;
  const cleanPath = (window.location.pathname || "").replace(/\/+$/, "").toLowerCase();
  if (cleanPath === "/saptahik-rashifal" || /^\/[a-z]+-saptahik-rashifal$/.test(cleanPath)) {
    return "weekly";
  }
  if (cleanPath === "/masik-rashifal" || /^\/[a-z]+-masik-rashifal$/.test(cleanPath)) {
    return "monthly";
  }
  if (cleanPath === "/rashifal" || cleanPath === "/dainik-rashifal" || /^\/[a-z]+-rashifal$/.test(cleanPath)) {
    return "daily";
  }
  return null;
};
const VIMSHOTTARI_ORDER_HI = [
  { planet: "केतु", years: 7 },
  { planet: "शुक्र", years: 20 },
  { planet: "सूर्य", years: 6 },
  { planet: "चंद्रमा", years: 10 },
  { planet: "मंगल", years: 7 },
  { planet: "राहु", years: 18 },
  { planet: "गुरु", years: 16 },
  { planet: "शनि", years: 19 },
  { planet: "बुध", years: 17 }
];
function normalizeVimshottariPlanetIdx(name) {
  const s = (name || "").toLowerCase();
  if (s.includes("केतु") || s.includes("ketu")) return 0;
  if (s.includes("शुक्र") || s.includes("venus")) return 1;
  if (s.includes("सूर्य") || s.includes("sun")) return 2;
  if (s.includes("चंद्र") || s.includes("चन्द्र") || s.includes("moon")) return 3;
  if (s.includes("मंगल") || s.includes("mars")) return 4;
  if (s.includes("राहु") || s.includes("rahu")) return 5;
  if (s.includes("गुरु") || s.includes("बृहस्पति") || s.includes("jupiter")) return 6;
  if (s.includes("शनि") || s.includes("saturn")) return 7;
  if (s.includes("बुध") || s.includes("mercury")) return 8;
  return -1;
}
function resolveVimshottariDashaAtDate(mahadashas, targetDateIso) {
  if (!mahadashas || mahadashas.length === 0) return null;
  const parts = targetDateIso.split("-").map((n) => parseInt(n, 10));
  if (parts.length !== 3 || parts.some(Number.isNaN)) return null;
  const [ty, tm, td] = parts;
  const targetDecYear = ty + (tm - 1) / 12 + (td - 1) / 365.25;
  const firstStart = mahadashas[0].startYear;
  const lastEnd = mahadashas[mahadashas.length - 1].endYear;
  if (targetDecYear < firstStart || targetDecYear > lastEnd) {
    return {
      mahadashaPlanet: "",
      antardashaPlanet: "",
      isWithinLifespan: false
    };
  }
  const activeMaha = mahadashas.find((d) => targetDecYear >= d.startYear && targetDecYear < d.endYear) || mahadashas[mahadashas.length - 1];
  const mahaIdx = normalizeVimshottariPlanetIdx(activeMaha.planet);
  if (mahaIdx < 0) {
    return {
      mahadashaPlanet: activeMaha.planet,
      antardashaPlanet: activeMaha.currentAntardasha?.split("(")[0]?.trim() || activeMaha.planet,
      isWithinLifespan: true
    };
  }
  const fullMahaYears = VIMSHOTTARI_ORDER_HI[mahaIdx].years;
  const fullMahaStart = activeMaha.endYear - fullMahaYears;
  let cursor = fullMahaStart;
  let activeAntar = VIMSHOTTARI_ORDER_HI[mahaIdx].planet;
  for (let i = 0; i < 9; i++) {
    const aObj = VIMSHOTTARI_ORDER_HI[(mahaIdx + i) % 9];
    const antarDur = fullMahaYears * aObj.years / 120;
    const antarEnd = cursor + antarDur;
    if (targetDecYear >= cursor && targetDecYear < antarEnd) {
      activeAntar = aObj.planet;
      break;
    }
    cursor = antarEnd;
    if (i === 8) activeAntar = aObj.planet;
  }
  return {
    mahadashaPlanet: VIMSHOTTARI_ORDER_HI[mahaIdx].planet,
    antardashaPlanet: activeAntar,
    isWithinLifespan: true
  };
}
const DailyRashifalWidget = ({
  onAskPanditInChat,
  onOpenMantraJaap,
  currentUser
}) => {
  const { tr, language, localizeVedicText } = useLanguage();
  const [selectedRashiId, setSelectedRashiId] = reactExports.useState(() => {
    try {
      const urlRashi = resolveRashiIdFromPathname();
      if (urlRashi) return urlRashi;
      const mode = getCalculationViewingMode();
      const name = currentUser?.name || getActiveProfile()?.name || "";
      const dob = currentUser?.dob || getActiveProfile()?.dob || "";
      const time = currentUser?.birthTime || getActiveProfile()?.birthTime || "10:00";
      const place = currentUser?.birthPlace || getActiveProfile()?.birthPlace || "रुद्रपुर";
      if (mode === "name_rashi" && name) {
        const nameAstro = getVedicDetailsFromName(name);
        const found = findRashiFromText(nameAstro.rashi);
        if (found) return found.id;
      } else if (dob) {
        const kundali = generateSampurnKundali(name || "यजमान", dob, time, place);
        const found = findRashiFromText(kundali.panchang.moonRashiName);
        if (found) return found.id;
      }
      if (currentUser && currentUser.rashi) {
        const found = findRashiFromText(currentUser.rashi);
        if (found) return found.id;
      }
      const activeProf2 = getActiveProfile();
      if (activeProf2 && activeProf2.rashi) {
        const found = findRashiFromText(activeProf2.rashi);
        if (found) return found.id;
      }
      const saved = localStorage.getItem(FAVORITE_RASHI_STORAGE_KEY);
      if (saved && TWELVE_RASHIS.some((r) => r.id === saved)) {
        return saved;
      }
    } catch {
    }
    return "mesh";
  });
  const [forecastMode, setForecastMode] = reactExports.useState(
    () => resolveForecastModeFromPathname() || "daily"
  );
  const [calcViewingMode, setCalcViewingMode] = reactExports.useState(getCalculationViewingMode);
  const [dailyOffsetDays, setDailyOffsetDays] = reactExports.useState(0);
  const [weeklyOffsetWeeks, setWeeklyOffsetWeeks] = reactExports.useState(0);
  const [customWeeklyDateKey, setCustomWeeklyDateKey] = reactExports.useState(null);
  const [monthlyOffsetMonths, setMonthlyOffsetMonths] = reactExports.useState(0);
  const [activeForecastLoc, setActiveForecastLoc] = reactExports.useState(
    () => getActivePanchangLocation()
  );
  const [dailyEngineRes, setDailyEngineRes] = reactExports.useState(null);
  const [weeklyEngineRes, setWeeklyEngineRes] = reactExports.useState(null);
  const [monthlyEngineRes, setMonthlyEngineRes] = reactExports.useState(null);
  const [engineLoading, setEngineLoading] = reactExports.useState(true);
  const [engineRetryTick, setEngineRetryTick] = reactExports.useState(0);
  const [all12RashisPostText, setAll12RashisPostText] = reactExports.useState("");
  const [all12Loading, setAll12Loading] = reactExports.useState(false);
  const [bellRinging, setBellRinging] = reactExports.useState(false);
  const [copiedRashifalLink, setCopiedRashifalLink] = reactExports.useState(false);
  const [copiedFullPostMode, setCopiedFullPostMode] = reactExports.useState(null);
  const [socialShareBanner, setSocialShareBanner] = reactExports.useState(null);
  const [socialPostTab, setSocialPostTab] = reactExports.useState("single");
  const [showPostPreviewBox, setShowPostPreviewBox] = reactExports.useState(false);
  const [activeSpeechId, setActiveSpeechId] = reactExports.useState(
    () => vedicAudio.getActiveSpeechId()
  );
  const [streakInfo, setStreakInfo] = reactExports.useState(
    () => getDailyStreakInfo(/* @__PURE__ */ new Date())
  );
  const [istParts, setIstParts] = reactExports.useState(() => getISTCalendarParts(/* @__PURE__ */ new Date()));
  reactExports.useEffect(() => {
    const unsubSpeech = vedicAudio.subscribeSpeech((id) => {
      setActiveSpeechId(id);
    });
    const handleLocationSync = () => {
      try {
        setActiveForecastLoc(getActivePanchangLocation());
      } catch {
      }
    };
    const handleProfileUpdate = () => {
      try {
        const mode = getCalculationViewingMode();
        setCalcViewingMode(mode);
        const urlMode = resolveForecastModeFromPathname();
        if (urlMode) {
          setForecastMode(urlMode);
        }
        const urlRashi = resolveRashiIdFromPathname();
        if (urlRashi) {
          setSelectedRashiId(urlRashi);
          return;
        }
        const isUserLoggedIn = Boolean(currentUser && (currentUser.name || currentUser.dob));
        const activeProf2 = isUserLoggedIn ? getActiveProfile() : null;
        const name = currentUser?.name || activeProf2?.name || "";
        const dob = currentUser?.dob || activeProf2?.dob || "";
        const time = currentUser?.birthTime || activeProf2?.birthTime || "10:00";
        const place = currentUser?.birthPlace || activeProf2?.birthPlace || "रुद्रपुर";
        if (!isUserLoggedIn || !name && !dob) {
          return;
        }
        let targetRashiName = "";
        if (mode === "name_rashi" && name) {
          const nameAstro = getVedicDetailsFromName(name);
          targetRashiName = nameAstro.rashi || "";
        } else if (dob) {
          const kundali = generateSampurnKundali(name || "यजमान", dob, time, place);
          targetRashiName = kundali.panchang.moonRashiName || "";
        }
        if (targetRashiName) {
          const found = findRashiFromText(targetRashiName);
          if (found) {
            setSelectedRashiId(found.id);
          }
        }
      } catch {
      }
    };
    handleProfileUpdate();
    window.addEventListener("panditji_active_profile_updated", handleProfileUpdate);
    window.addEventListener("display_preference_changed", handleProfileUpdate);
    window.addEventListener("popstate", handleProfileUpdate);
    window.addEventListener("panditji_panchang_location_changed", handleLocationSync);
    window.addEventListener("storage", handleLocationSync);
    return () => {
      unsubSpeech();
      window.removeEventListener("panditji_active_profile_updated", handleProfileUpdate);
      window.removeEventListener("display_preference_changed", handleProfileUpdate);
      window.removeEventListener("popstate", handleProfileUpdate);
      window.removeEventListener("panditji_panchang_location_changed", handleLocationSync);
      window.removeEventListener("storage", handleLocationSync);
    };
  }, [currentUser?.phone, currentUser?.name, currentUser?.dob]);
  reactExports.useEffect(() => {
    let midnightTimer = null;
    const syncDaily = () => {
      const now = /* @__PURE__ */ new Date();
      const nextParts = getISTCalendarParts(now);
      setIstParts((prev) => {
        if (prev.dateKey !== nextParts.dateKey) {
          setStreakInfo(getDailyStreakInfo(now));
          return nextParts;
        }
        if (prev.timeString12h !== nextParts.timeString12h) {
          return nextParts;
        }
        return prev;
      });
    };
    const scheduleMidnight = () => {
      if (midnightTimer !== null) window.clearTimeout(midnightTimer);
      const msUntilMidnight = getMsUntilNextISTMidnight(/* @__PURE__ */ new Date());
      midnightTimer = window.setTimeout(() => {
        const now = /* @__PURE__ */ new Date();
        setIstParts(getISTCalendarParts(now));
        setStreakInfo(getDailyStreakInfo(now));
        scheduleMidnight();
      }, msUntilMidnight);
    };
    syncDaily();
    scheduleMidnight();
    const timer = window.setInterval(syncDaily, 3e4);
    const handleVisibility = () => {
      if (document.visibilityState === "visible") {
        syncDaily();
      }
    };
    const handleGlobalMidnight = () => syncDaily();
    document.addEventListener("visibilitychange", handleVisibility);
    window.addEventListener("panditji_midnight_refresh", handleGlobalMidnight);
    return () => {
      window.clearInterval(timer);
      if (midnightTimer !== null) window.clearTimeout(midnightTimer);
      document.removeEventListener("visibilitychange", handleVisibility);
      window.removeEventListener("panditji_midnight_refresh", handleGlobalMidnight);
    };
  }, []);
  const { activeTheme, areLightsActive } = useFestiveTheme();
  const festivePalette = reactExports.useMemo(
    () => getFestiveLightPalette(activeTheme),
    [activeTheme]
  );
  const handleSelectRashi = (id) => {
    try {
      vedicAudio.playClickSpark(0.2);
    } catch {
    }
    setSelectedRashiId(id);
    try {
      localStorage.setItem(FAVORITE_RASHI_STORAGE_KEY, id);
    } catch {
    }
  };
  const handleRingTempleBell = () => {
    setBellRinging(true);
    try {
      vedicAudio.playTempleBell(0.8);
      window.setTimeout(() => {
        vedicAudio.playShankh();
      }, 300);
    } catch {
    }
    window.setTimeout(() => {
      setBellRinging(false);
    }, 1200);
  };
  const isLoggedIn = Boolean(
    currentUser && (currentUser.name || currentUser.dob || currentUser.phone)
  );
  const activeProf = isLoggedIn ? getActiveProfile() : null;
  const userProfileName = currentUser?.name || activeProf?.name || "";
  const userProfileDob = currentUser?.dob || activeProf?.dob || "";
  const userProfileTime = currentUser?.birthTime || activeProf?.birthTime || "10:00";
  const userProfilePlace = currentUser?.birthPlace || activeProf?.birthPlace || "रुद्रपुर";
  const liveNowIst = getISTCalendarParts(/* @__PURE__ */ new Date());
  const effectiveIst = istParts.year >= liveNowIst.year ? istParts : liveNowIst;
  const targetDailyDate = reactExports.useMemo(
    () => shiftDateKeyByDays(effectiveIst.dateKey, dailyOffsetDays),
    [effectiveIst.dateKey, dailyOffsetDays]
  );
  const targetWeeklyAnchor = reactExports.useMemo(
    () => customWeeklyDateKey ? shiftDateKeyByDays(customWeeklyDateKey, 0) : shiftDateKeyByDays(effectiveIst.dateKey, weeklyOffsetWeeks * 7),
    [effectiveIst.dateKey, weeklyOffsetWeeks, customWeeklyDateKey]
  );
  const targetMonthlyPeriod = reactExports.useMemo(
    () => shiftYearMonthByMonths(effectiveIst.year, effectiveIst.month, monthlyOffsetMonths),
    [effectiveIst.year, effectiveIst.month, monthlyOffsetMonths]
  );
  const activeTargetDateKey = forecastMode === "daily" ? targetDailyDate.dateKey : forecastMode === "weekly" ? targetWeeklyAnchor.dateKey : `${String(targetMonthlyPeriod.year).padStart(4, "0")}-${String(targetMonthlyPeriod.month).padStart(2, "0")}-15`;
  const [draftDateKey, setDraftDateKey] = reactExports.useState(activeTargetDateKey);
  reactExports.useEffect(() => {
    setDraftDateKey(activeTargetDateKey);
  }, [activeTargetDateKey]);
  const handleApplyDraftDate = (overrideIso) => {
    const isoDate = (overrideIso || draftDateKey || "").trim();
    const parts = isoDate.split("-").map((n) => parseInt(n, 10));
    if (parts.length !== 3 || parts.some(Number.isNaN)) return;
    const [y, m, d] = parts;
    if (y < 1600 || y > 2500) return;
    const todayUtc = Date.UTC(effectiveIst.year, effectiveIst.month - 1, effectiveIst.day);
    const pickedUtc = Date.UTC(y, m - 1, d);
    const diffDays = Math.round((pickedUtc - todayUtc) / 864e5);
    if (forecastMode === "daily") {
      setDailyOffsetDays(diffDays);
    } else if (forecastMode === "weekly") {
      setCustomWeeklyDateKey(isoDate);
      setWeeklyOffsetWeeks(Math.round(diffDays / 7));
    } else {
      setMonthlyOffsetMonths((y - effectiveIst.year) * 12 + (m - effectiveIst.month));
    }
  };
  const userDobDetails = reactExports.useMemo(() => {
    const empty = {
      rashi: null,
      nakshatraIdx: null,
      personalContext: null,
      activeDashaSummaryHi: null
    };
    if (!userProfileDob) return empty;
    const mapGrahaName = (raw) => {
      if (!raw) return null;
      const s = raw.toLowerCase();
      if (s.includes("सूर्य") || s.includes("sun")) return "sun";
      if (s.includes("चंद्र") || s.includes("चन्द्र") || s.includes("moon")) return "moon";
      if (s.includes("मंगल") || s.includes("mars")) return "mars";
      if (s.includes("बुध") || s.includes("mercury")) return "mercury";
      if (s.includes("गुरु") || s.includes("बृहस्पति") || s.includes("jupiter")) return "jupiter";
      if (s.includes("शुक्र") || s.includes("venus")) return "venus";
      if (s.includes("शनि") || s.includes("saturn")) return "saturn";
      if (s.includes("राहु") || s.includes("rahu")) return "rahu";
      if (s.includes("केतु") || s.includes("ketu")) return "ketu";
      return null;
    };
    try {
      const k = generateSampurnKundali(userProfileName || "यजमान", userProfileDob, userProfileTime, userProfilePlace);
      const datedDasha = resolveVimshottariDashaAtDate(k.mahadashas, activeTargetDateKey);
      const fallbackDasha = k.mahadashas?.find((d) => d.isCurrent) || k.mahadashas?.[0];
      const activeMahaLabel = datedDasha?.isWithinLifespan ? datedDasha.mahadashaPlanet : datedDasha && !datedDasha.isWithinLifespan ? void 0 : fallbackDasha?.planet;
      const activeAntarLabel = datedDasha?.isWithinLifespan ? datedDasha.antardashaPlanet : datedDasha && !datedDasha.isWithinLifespan ? void 0 : fallbackDasha?.currentAntardasha;
      const mahadashaLord = mapGrahaName(activeMahaLabel);
      const antardashaLord = mapGrahaName(activeAntarLabel);
      const moonBavBySign = k.ashtakavarga?.planetBindus?.["चंद्र"] || k.ashtakavarga?.planetBindus?.["चंद्रमा"] || null;
      const savBySign = k.ashtakavarga?.sarvashtakavarga || null;
      const personalContext = mahadashaLord || antardashaLord || moonBavBySign ? {
        mahadashaLord,
        antardashaLord,
        mahadashaLabelHi: activeMahaLabel,
        antardashaLabelHi: activeAntarLabel,
        moonBavBySign,
        savBySign
      } : null;
      const activeDashaSummaryHi = activeMahaLabel && activeAntarLabel ? `${activeMahaLabel} महादशा • ${activeAntarLabel} अंतर्दशा` : datedDasha && !datedDasha.isWithinLifespan ? "चयनित तिथि जन्म-अवधि के बाहर है (गोचर आधारित फलादेश)" : null;
      return {
        rashi: findRashiFromText(k.panchang.moonRashiName) || null,
        nakshatraIdx: resolveNakshatraIndexFromName(k.panchang.nakshatraName),
        personalContext,
        activeDashaSummaryHi
      };
    } catch {
      return empty;
    }
  }, [userProfileName, userProfileDob, userProfileTime, userProfilePlace, activeTargetDateKey]);
  const userDobRashi = userDobDetails.rashi;
  const userNameRashi = reactExports.useMemo(() => {
    if (!userProfileName) return null;
    try {
      const n = getVedicDetailsFromName(userProfileName);
      return findRashiFromText(n.rashi) || null;
    } catch {
      return null;
    }
  }, [userProfileName]);
  const userActiveModeRashi = calcViewingMode === "name_rashi" ? userNameRashi : userDobRashi;
  const currentRashiIndex = Math.max(
    0,
    TWELVE_RASHIS.findIndex((r) => r.id === selectedRashiId)
  );
  const currentRashi = TWELVE_RASHIS[currentRashiIndex] || TWELVE_RASHIS[0];
  const rashiNumber = currentRashiIndex + 1;
  const { validation: rashifalValidation } = useVedicValidation(
    {
      rashiId: selectedRashiId,
      forecastMode,
      dateKey: activeTargetDateKey
    },
    "rashifal"
  );
  const todayDayPanchang = reactExports.useMemo(
    () => buildFastSingleDayPanchang(
      targetDailyDate.year,
      targetDailyDate.month,
      targetDailyDate.day,
      true,
      /* @__PURE__ */ new Date(),
      activeForecastLoc
    ),
    [targetDailyDate.year, targetDailyDate.month, targetDailyDate.day, activeForecastLoc]
  );
  const vaarName = VAAR_LIST[targetDailyDate.weekdayIndex]?.full || todayDayPanchang.vaarHindi || "शुक्रवार";
  const monthHindi = HINDI_MONTH_SHORT[targetDailyDate.month - 1] || "नवंबर";
  const todayFormatted = `${vaarName}, ${targetDailyDate.day} ${monthHindi} ${targetDailyDate.year}`;
  const targetMonthLabelFallbackHi = `${HINDI_MONTH_SHORT[targetMonthlyPeriod.month - 1] || ""} ${targetMonthlyPeriod.year}`;
  const activeUserName = (isLoggedIn ? currentUser?.name || activeProf?.name || "" : "").trim();
  const isViewingOwnModeRashi = Boolean(userActiveModeRashi && selectedRashiId === userActiveModeRashi.id);
  const userSalutation = activeUserName && isViewingOwnModeRashi ? `${formatUserSalutation(activeUserName, currentUser?.salutationPreference)}: ` : "";
  const effectiveBirthNakshatraIndex = null;
  const effectivePersonalContext = null;
  reactExports.useEffect(() => {
    let cancelled = false;
    setEngineLoading(true);
    const runActiveEngine = async () => {
      try {
        if (forecastMode === "daily") {
          const mod = await __vitePreload(() => import("./dailyRashifalEngine-JyJx31y8.js"), true ? __vite__mapDeps([0,1,2,3]) : void 0);
          if (cancelled) return;
          const res = mod.generateDailyRashifal({
            rashi: rashiNumber,
            date: targetDailyDate.dateKey,
            location: activeForecastLoc,
            birthNakshatraIndex: effectiveBirthNakshatraIndex,
            personalContext: effectivePersonalContext,
            bypassCache: engineRetryTick > 0
          });
          if (!cancelled) {
            setDailyEngineRes(res);
          }
        } else if (forecastMode === "weekly") {
          const mod = await __vitePreload(() => import("./weeklyRashifalEngine-Bt9CVUst.js"), true ? __vite__mapDeps([4,1,2,3]) : void 0);
          if (cancelled) return;
          const res = mod.generateWeeklyRashifal({
            rashi: rashiNumber,
            anchorDate: targetWeeklyAnchor.dateKey,
            location: activeForecastLoc,
            personalContext: effectivePersonalContext,
            bypassCache: engineRetryTick > 0
          });
          if (!cancelled) {
            setWeeklyEngineRes(res);
          }
        } else {
          const mod = await __vitePreload(() => import("./monthlyRashifalEngine-Dn0LNh4n.js"), true ? __vite__mapDeps([5,1,2,3]) : void 0);
          if (cancelled) return;
          const res = mod.generateMonthlyRashifal({
            rashi: rashiNumber,
            year: targetMonthlyPeriod.year,
            month: targetMonthlyPeriod.month,
            location: activeForecastLoc,
            personalContext: effectivePersonalContext,
            bypassCache: engineRetryTick > 0
          });
          if (!cancelled) {
            setMonthlyEngineRes(res);
          }
        }
      } catch (err) {
        if (!cancelled) {
          const fallbackErr = {
            status: "unavailable",
            data: null,
            errorCode: "ENGINE_CHUNK_LOAD_ERROR",
            userMessageHi: 'राशिफल गणना मॉड्यूल लोड करने में अस्थायी समस्या आई है। कृपया "पुनः प्रयास करें" बटन दबाएँ।',
            userMessageEn: "Temporary issue loading the horoscope calculation module. Please press Retry.",
            technicalReason: err instanceof Error ? err.message : String(err)
          };
          if (forecastMode === "daily") setDailyEngineRes(fallbackErr);
          else if (forecastMode === "weekly") setWeeklyEngineRes(fallbackErr);
          else setMonthlyEngineRes(fallbackErr);
        }
      } finally {
        if (!cancelled) {
          setEngineLoading(false);
        }
      }
    };
    const win = window;
    let idleId = null;
    let fallbackTimer = null;
    if (typeof win.requestIdleCallback === "function") {
      idleId = win.requestIdleCallback(() => {
        if (!cancelled) runActiveEngine();
      }, { timeout: 600 });
    } else {
      fallbackTimer = window.setTimeout(() => {
        if (!cancelled) runActiveEngine();
      }, 120);
    }
    return () => {
      cancelled = true;
      if (idleId !== null) win.cancelIdleCallback?.(idleId);
      if (fallbackTimer !== null) window.clearTimeout(fallbackTimer);
    };
  }, [
    forecastMode,
    rashiNumber,
    targetDailyDate.dateKey,
    targetWeeklyAnchor.dateKey,
    targetMonthlyPeriod.year,
    targetMonthlyPeriod.month,
    activeForecastLoc.id,
    activeForecastLoc.lat,
    activeForecastLoc.lon,
    activeForecastLoc.timezone,
    effectiveBirthNakshatraIndex,
    effectivePersonalContext,
    engineRetryTick
  ]);
  const activeEngineRes = forecastMode === "daily" ? dailyEngineRes : forecastMode === "weekly" ? weeklyEngineRes : monthlyEngineRes;
  const dailyOut = dailyEngineRes?.status === "ok" ? dailyEngineRes.data : null;
  const weeklyOut = weeklyEngineRes?.status === "ok" ? weeklyEngineRes.data : null;
  const monthlyOut = monthlyEngineRes?.status === "ok" ? monthlyEngineRes.data : null;
  const dateSeed = targetDailyDate.year * 1e3 + targetDailyDate.month * 35 + targetDailyDate.day;
  const todayShloka = reactExports.useMemo(
    () => selectContextualSubhashit(todayDayPanchang, dateSeed),
    [todayDayPanchang, dateSeed]
  );
  const weeklyShloka = reactExports.useMemo(() => {
    if (forecastMode !== "weekly") {
      return todayShloka;
    }
    const startKey = weeklyOut?.weekSpan.weekStartDateKey || targetWeeklyAnchor.dateKey;
    const parts = startKey.split("-").map((n) => parseInt(n, 10));
    if (parts.length === 3 && !parts.some(Number.isNaN)) {
      const startUtc = new Date(Date.UTC(parts[0], parts[1] - 1, parts[2]));
      const weekDays = [];
      for (let offset = 0; offset < 7; offset += 1) {
        const cur = new Date(startUtc.getTime() + offset * 864e5);
        const dayP = buildSingleDayPanchang(
          cur.getUTCFullYear(),
          cur.getUTCMonth() + 1,
          cur.getUTCDate(),
          true,
          /* @__PURE__ */ new Date(),
          activeForecastLoc
        );
        weekDays.push({
          festivalName: dayP.festivalName,
          festivalDescription: dayP.festivalDescription,
          tithiName: dayP.tithiName
        });
      }
      const weekSeed = parts[0] * 100 + parts[1] * 10 + parts[2];
      return selectWeeklyContextualSubhashit(weekDays, weekSeed);
    }
    return selectWeeklyContextualSubhashit([todayDayPanchang], dateSeed);
  }, [forecastMode, todayShloka, weeklyOut?.weekSpan.weekStartDateKey, targetWeeklyAnchor.dateKey, activeForecastLoc, todayDayPanchang, dateSeed]);
  const targetMonthHinduMaasInfo = reactExports.useMemo(() => {
    if (forecastMode !== "monthly") {
      return {
        primaryMaas: (todayDayPanchang.hinduMaas || "").trim(),
        labelHi: todayDayPanchang.hinduMaas,
        vikramSamvat: todayDayPanchang.vikramSamvat,
        shakaSamvat: todayDayPanchang.shakaSamvat
      };
    }
    const y = targetMonthlyPeriod.year;
    const m = targetMonthlyPeriod.month;
    const nowRef = /* @__PURE__ */ new Date();
    const startP = buildSingleDayPanchang(y, m, 1, true, nowRef, activeForecastLoc);
    const midP = buildSingleDayPanchang(y, m, 15, true, nowRef, activeForecastLoc);
    const lastDay = new Date(Date.UTC(y, m, 0)).getUTCDate();
    const endP = buildSingleDayPanchang(y, m, lastDay, true, nowRef, activeForecastLoc);
    const uniqueMonths = [];
    for (const p of [startP, midP, endP]) {
      const nm = (p.hinduMaas || "").trim();
      if (nm && !uniqueMonths.includes(nm)) uniqueMonths.push(nm);
    }
    return {
      primaryMaas: (midP.hinduMaas || todayDayPanchang.hinduMaas || "").trim(),
      labelHi: uniqueMonths.length > 0 ? uniqueMonths.join(" — ") : todayDayPanchang.hinduMaas,
      vikramSamvat: midP.vikramSamvat || todayDayPanchang.vikramSamvat,
      shakaSamvat: midP.shakaSamvat || todayDayPanchang.shakaSamvat
    };
  }, [forecastMode, targetMonthlyPeriod.year, targetMonthlyPeriod.month, activeForecastLoc, todayDayPanchang]);
  const targetWeekPanchangInfo = reactExports.useMemo(() => {
    if (forecastMode !== "weekly") {
      return {
        vikramSamvat: todayDayPanchang.vikramSamvat,
        shakaSamvat: todayDayPanchang.shakaSamvat,
        hinduMaas: todayDayPanchang.hinduMaas
      };
    }
    const startKey = weeklyOut?.weekSpan.weekStartDateKey || targetWeeklyAnchor.dateKey;
    const parts = startKey.split("-").map((n) => parseInt(n, 10));
    if (parts.length === 3 && !parts.some(Number.isNaN)) {
      const midUtc = new Date(Date.UTC(parts[0], parts[1] - 1, parts[2]) + 3 * 864e5);
      const midP = buildSingleDayPanchang(
        midUtc.getUTCFullYear(),
        midUtc.getUTCMonth() + 1,
        midUtc.getUTCDate(),
        true,
        /* @__PURE__ */ new Date(),
        activeForecastLoc
      );
      return {
        vikramSamvat: midP.vikramSamvat || todayDayPanchang.vikramSamvat,
        shakaSamvat: midP.shakaSamvat || todayDayPanchang.shakaSamvat,
        hinduMaas: (midP.hinduMaas || todayDayPanchang.hinduMaas || "").trim()
      };
    }
    return {
      vikramSamvat: todayDayPanchang.vikramSamvat,
      shakaSamvat: todayDayPanchang.shakaSamvat,
      hinduMaas: todayDayPanchang.hinduMaas
    };
  }, [forecastMode, weeklyOut?.weekSpan.weekStartDateKey, targetWeeklyAnchor.dateKey, activeForecastLoc, todayDayPanchang]);
  const monthlyShloka = reactExports.useMemo(() => {
    if (forecastMode !== "monthly") {
      return todayShloka;
    }
    const monthSeed = targetMonthlyPeriod.year * 12 + targetMonthlyPeriod.month;
    return selectMonthlyContextualSubhashit(targetMonthHinduMaasInfo.primaryMaas, monthSeed);
  }, [forecastMode, todayShloka, targetMonthHinduMaasInfo.primaryMaas, targetMonthlyPeriod.year, targetMonthlyPeriod.month]);
  const activeShloka = forecastMode === "weekly" ? weeklyShloka : forecastMode === "monthly" ? monthlyShloka : todayShloka;
  const dailySarvajanHitaya = reactExports.useMemo(
    () => getDailySarvajanHitayaRemedyHi(
      todayDayPanchang.weekdayIndex,
      todayDayPanchang.tithiName,
      todayDayPanchang.festivalName
    ),
    [todayDayPanchang.weekdayIndex, todayDayPanchang.tithiName, todayDayPanchang.festivalName]
  );
  const activePlanetsList = forecastMode === "daily" ? dailyOut?.astronomicalBasis.planets : forecastMode === "weekly" ? weeklyOut?.astronomicalBasis.planetsMidWeek : monthlyOut?.astronomicalBasis.planetsMidMonth;
  const moonBhava = forecastMode === "daily" ? dailyOut?.moonTransit.primaryHouse || 1 : forecastMode === "weekly" ? weeklyOut?.moonJourney.dayByDay[0]?.moonHouseFromRashi || 1 : 1;
  const guruBhava = activePlanetsList?.find((p) => p.id === "jupiter")?.houseFromMoon || 1;
  const shaniBhava = activePlanetsList?.find((p) => p.id === "saturn")?.houseFromMoon || 1;
  const activeAyanamshaDMS = forecastMode === "daily" ? dailyOut?.astronomicalBasis.ayanamshaDMS || "24°14′" : forecastMode === "weekly" ? weeklyOut?.astronomicalBasis.ayanamshaDMS || "24°14′" : monthlyOut?.astronomicalBasis.ayanamshaDMS || "24°14′";
  const chandraBhavaIndex = (moonBhava - 1 + 12) % 12;
  const chandraGochar = CHANDRA_BHAVA_DESCRIPTIONS[chandraBhavaIndex] || CHANDRA_BHAVA_DESCRIPTIONS[0];
  const forecastData = reactExports.useMemo(() => {
    const shreshthaSamayInfo = resolveBhadraRahuFreeShreshthaSamay(todayDayPanchang, 0);
    if (forecastMode === "daily" && dailyOut) {
      const sal = (txt) => userSalutation ? `${userSalutation}${txt}` : txt;
      const nums = dailyOut.luckyAttributes.luckyNumbers;
      const luckyNumber2 = nums[0] || 1;
      const allyNumber2 = nums[1] || nums[0] || 9;
      const luckyNumbersDisplay2 = dailyOut.luckyAttributes.luckyNumbersDisplay || nums.slice(0, 3).join(", ") || `${luckyNumber2}, ${allyNumber2}`;
      const remedyCombined = `${dailyOut.remedy.primaryRemedyHi} ${dailyOut.remedy.lifestyleTipHi}`.trim();
      const activeRashiNum = Math.max(1, TWELVE_RASHIS.findIndex((r) => r.id === currentRashi.id) + 1);
      const refined = refineRashifalSectionsForUi({
        rashiNumber: activeRashiNum,
        period: "daily",
        careerScore: dailyOut.scores.career,
        careerText: dailyOut.sections.careerHi,
        wealthText: dailyOut.sections.financeHi,
        familyText: dailyOut.sections.loveFamilyHi,
        educationText: dailyOut.sections.educationHi,
        healthText: dailyOut.sections.healthHi,
        remedyText: remedyCombined,
        lagnaMentalText: dailyOut.sections.mindsetHi
      });
      const gocharSummaryLine = `आपकी राशि: ${currentRashi.hindiName} राशि (स्वामी: ${currentRashi.swami}) • ${dailyOut.moonTransit.sandhiSplit.summaryHi}`;
      const transitNote = [
        dailyOut.summaryHi,
        dailyOut.sadeSatiStatusHi ? `शनि स्थिति: ${dailyOut.sadeSatiStatusHi}।` : "",
        dailyOut.astronomicalBasis.activeConjunctionsHi.length > 0 ? `प्रमुख ग्रह युति: ${dailyOut.astronomicalBasis.activeConjunctionsHi.join("; ")}।` : ""
      ].filter(Boolean).join(" ");
      const abhijitKV = todayDayPanchang.kalVedhaReport?.abhijit;
      const abhijitPureSec = (abhijitKV?.pureSubIntervalsSec || []).reduce(
        (sum, [s, e]) => sum + Math.max(0, e - s),
        0
      );
      const hasHardAbhijitOverlap = Boolean(
        abhijitKV?.hasCollision && (abhijitKV.collidingNamesHi || []).some(
          (n) => /राहुकाल|यमगण्ड|दुर्मुहूर्त|भद्रा/i.test(n)
        )
      );
      const isAbhijitNominalRemainder = hasHardAbhijitOverlap && !abhijitKV?.isFullyEclipsed && abhijitPureSec > 0 && abhijitPureSec < 600;
      const isAbhijitEclipsedToday = Boolean(
        abhijitKV?.isFullyEclipsed || todayDayPanchang.abhijitConflict?.isFullyPolluted || todayDayPanchang.abhijitConflict?.isWednesdayProhibited || isAbhijitNominalRemainder || String(todayDayPanchang.abhijitMuhurat || "").includes("पूर्णतः वर्जित")
      );
      const pureAbhijitSubWindowHi = !isAbhijitEclipsedToday && hasHardAbhijitOverlap ? abhijitKV?.pureRemainingHi || todayDayPanchang.abhijitConflict?.pureRemainingWindowHi || null : null;
      const safeDailyFavorableTimeHi = isAbhijitEclipsedToday ? shreshthaSamayInfo.detailedBestTime : pureAbhijitSubWindowHi ? `शुद्ध अभिजित (${pureAbhijitSubWindowHi})` : dailyOut.timeWindows.favorableWindowHi || shreshthaSamayInfo.detailedBestTime;
      const safeCardFavorableTimeHi = isAbhijitEclipsedToday ? shreshthaSamayInfo.cardBestTime : pureAbhijitSubWindowHi ? `शुद्ध अभिजित (${pureAbhijitSubWindowHi})` : dailyOut.timeWindows.favorableWindowHi || shreshthaSamayInfo.cardBestTime;
      return {
        headlineHi: dailyOut.headlineHi,
        careerText: sal(refined.careerText),
        wealthText: sal(refined.wealthText),
        familyText: sal(refined.familyText),
        wealthFamilySummary: `${refined.wealthText} ${refined.familyText}`,
        educationText: sal(refined.educationText),
        healthText: sal(refined.healthText),
        remedyText: sal(refined.remedyText),
        lagnaMentalText: refined.lagnaMentalText,
        transitImpactText: transitNote,
        sixLevelStamp: `दृक-गणित लाहिड़ी अयनांश (${dailyOut.astronomicalBasis.ayanamshaDMS}) • True Node • ${dailyOut.location.nameHi}`,
        doToday1: isAbhijitEclipsedToday ? "आज अभिजित मुहूर्त बाधित होने के कारण महत्वपूर्ण कार्य व बातचीत हेतु राहुकाल-मुक्त शुभ चौघड़िया का चयन करें।" : pureAbhijitSubWindowHi ? `आज के शुद्ध अभिजित मुहूर्त (${pureAbhijitSubWindowHi}) में महत्वपूर्ण कार्य, संवाद व योजनाएँ पूर्ण करें।` : dailyOut.doListHi[0] || "सुबह के सकारात्मक समय में प्राथमिकता वाले कार्य पूर्ण करें।",
        doToday2: dailyOut.doListHi[1] || "वरिष्ठों व परिजनों के साथ शांत और स्पष्ट संवाद रखें।",
        dontToday1: dailyOut.dontListHi[0] || "आवेग में आकर बड़े आर्थिक या व्यावसायिक निर्णय न लें।",
        dontToday2: dailyOut.dontListHi[1] || "विवाद या अनावश्यक जल्दबाजी से दूरी बनाए रखें।",
        luckyColor: dailyOut.luckyAttributes.luckyColorHi,
        avoidColor: dailyOut.luckyAttributes.avoidColorHi,
        luckyTime: safeDailyFavorableTimeHi,
        cardLuckyTime: safeCardFavorableTimeHi,
        cautionTime: dailyOut.timeWindows.cautionWindowHi || todayDayPanchang.rahuKaal,
        luckyDirection: dailyOut.luckyAttributes.favorableDirectionHi,
        luckyReasoningHi: dailyOut.luckyAttributes.reasoningHi,
        luckyNumber: luckyNumber2,
        allyNumber: allyNumber2,
        luckyNumbersDisplay: luckyNumbersDisplay2,
        careerScore: dailyOut.scores.career,
        wealthScore: dailyOut.scores.finance,
        familyScore: dailyOut.scores.loveFamily,
        educationScore: dailyOut.scores.education,
        healthScore: dailyOut.scores.health,
        chandraGochar: {
          ...chandraGochar,
          chandrabal: dailyOut.moonTransit.chandrabalaLabelHi,
          tarabal: dailyOut.tarabala ? dailyOut.tarabala.taraNameHi : "",
          gocharSummary: gocharSummaryLine
        },
        dateRangeHi: dailyOut.panchangContext.dateFormattedHi || todayFormatted,
        dateRangeEn: targetDailyDate.dateKey,
        sadeSatiStatusHi: dailyOut.sadeSatiStatusHi
      };
    }
    if (forecastMode === "weekly" && weeklyOut) {
      const sal = (txt) => userSalutation ? `${userSalutation}${txt}` : txt;
      const nums = weeklyOut.luckyAttributes.luckyNumbers;
      const luckyNumber2 = nums[0] || 1;
      const allyNumber2 = nums[1] || nums[0] || 9;
      const luckyNumbersDisplay2 = weeklyOut.luckyAttributes.luckyNumbersDisplay || nums.slice(0, 3).join(", ") || `${luckyNumber2}, ${allyNumber2}`;
      const favDaysHi = weeklyOut.favorableDays.map((d) => `${d.weekdayHi} (${d.shortDateHi})`).join(", ") || "संपूर्ण सप्ताह संतुलित";
      const modDaysHi = weeklyOut.moderateDays.map((d) => `${d.weekdayHi} (${d.shortDateHi})`).join(", ") || "";
      const cautDaysHi = weeklyOut.cautionDays.map((d) => `${d.weekdayHi} (${d.shortDateHi})`).join(", ") || "सामान्य संयम";
      const bestPhase = weeklyOut.phases.find((p) => p.tone === "FAVORABLE") || weeklyOut.phases[0];
      const remedyCombined = `${weeklyOut.remedy.primaryRemedyHi} ${weeklyOut.remedy.lifestyleTipHi}`.trim();
      const activeRashiNum = Math.max(1, TWELVE_RASHIS.findIndex((r) => r.id === currentRashi.id) + 1);
      const refined = refineRashifalSectionsForUi({
        rashiNumber: activeRashiNum,
        period: "weekly",
        careerScore: weeklyOut.scores.career,
        careerText: weeklyOut.sections.careerHi,
        wealthText: weeklyOut.sections.financeHi,
        familyText: weeklyOut.sections.loveFamilyHi,
        educationText: weeklyOut.sections.educationHi,
        healthText: weeklyOut.sections.healthHi,
        remedyText: remedyCombined,
        lagnaMentalText: weeklyOut.mentalOutlookHi || weeklyOut.weeklyThemeHi
      });
      const transitNote = [
        weeklyOut.weeklyThemeHi,
        weeklyOut.planetaryEvents.summaryNotesHi.slice(0, 2).join(" "),
        weeklyOut.sadeSatiStatusHi ? `शनि प्रभाव: ${weeklyOut.sadeSatiStatusHi}।` : ""
      ].filter(Boolean).join(" ");
      return {
        headlineHi: weeklyOut.headlineHi,
        careerText: sal(refined.careerText),
        wealthText: sal(refined.wealthText),
        familyText: sal(refined.familyText),
        wealthFamilySummary: `${refined.wealthText} ${refined.familyText}`,
        educationText: sal(refined.educationText),
        healthText: sal(refined.healthText),
        remedyText: sal(refined.remedyText),
        lagnaMentalText: refined.lagnaMentalText,
        transitImpactText: transitNote,
        sixLevelStamp: `साप्ताहिक दृक-गणित (सोमवार–रविवार) • लाहिड़ी (${weeklyOut.astronomicalBasis.ayanamshaDMS}) • True Node`,
        doToday1: weeklyOut.weeklyStrategyHi[0] || "अनुकूल दिनों में प्रमुख निर्णयों व मुलाकातों की योजना बनाएं।",
        doToday2: weeklyOut.weeklyStrategyHi[1] || "नियमित दिनचर्या व परिवार के साथ संतुलित संवाद रखें।",
        dontToday1: weeklyOut.cautionsHi[0] || "सावधानी के दिनों में जोखिमपूर्ण निवेश या विवाद से बचें।",
        dontToday2: weeklyOut.cautionsHi[1] || "अधूरी जानकारी पर कोई बड़ा अनुबंध न करें।",
        luckyColor: weeklyOut.luckyAttributes.luckyColorHi,
        avoidColor: weeklyOut.luckyAttributes.avoidColorHi,
        luckyTime: favDaysHi,
        cardLuckyTime: favDaysHi,
        cautionTime: cautDaysHi,
        luckyDirection: weeklyOut.luckyAttributes.favorableDirectionHi,
        luckyReasoningHi: weeklyOut.luckyAttributes.reasoningHi,
        luckyNumber: luckyNumber2,
        allyNumber: allyNumber2,
        luckyNumbersDisplay: luckyNumbersDisplay2,
        careerScore: weeklyOut.scores.career,
        wealthScore: weeklyOut.scores.finance,
        familyScore: weeklyOut.scores.loveFamily,
        educationScore: weeklyOut.scores.education,
        healthScore: weeklyOut.scores.health,
        chandraGochar: {
          ...chandraGochar,
          chandrabal: weeklyOut.allSevenDaysSummaryHi || bestPhase?.labelHi || "साप्ताहिक संतुलन",
          tarabal: "",
          gocharSummary: `चन्द्र गोचर पथ (${weeklyOut.weekSpan.rangeLabelHi}): ${weeklyOut.moonJourney.signsWithHousesLabelHi || weeklyOut.moonJourney.signsTransitedLabelHi}`
        },
        dateRangeHi: weeklyOut.weekSpan.rangeLabelHi,
        dateRangeEn: weeklyOut.weekSpan.rangeLabelEn,
        sadeSatiStatusHi: weeklyOut.sadeSatiStatusHi,
        weeklyFavDaysHi: favDaysHi,
        weeklyModDaysHi: modDaysHi,
        weeklyCautDaysHi: cautDaysHi,
        weeklyBestPhaseHi: bestPhase ? `${bestPhase.labelHi} (${bestPhase.daysSpanHi})` : "",
        weeklyMoonPathHi: weeklyOut.moonJourney.signsWithHousesLabelHi || weeklyOut.moonJourney.signsTransitedLabelHi
      };
    }
    if (forecastMode === "monthly" && monthlyOut) {
      const sal = (txt) => userSalutation ? `${userSalutation}${txt}` : txt;
      const nums = monthlyOut.luckyAttributes.luckyNumbers;
      const luckyNumber2 = nums[0] || 1;
      const allyNumber2 = nums[1] || nums[0] || 9;
      const luckyNumbersDisplay2 = monthlyOut.luckyAttributes.luckyNumbersDisplay || nums.slice(0, 3).join(", ") || `${luckyNumber2}, ${allyNumber2}`;
      const favWindowsHi = monthlyOut.favorableDatesHi.join(", ") || "शुक्ल पक्ष व मध्य मास अनुकूल";
      const modWindowsHi = (monthlyOut.moderateDatesHi || []).join(", ") || "";
      const cautWindowsHi = monthlyOut.cautionDatesHi.join(", ") || "सामान्य संतुलन";
      const remedyCombined = `${monthlyOut.remedy.primaryRemedyHi} ${monthlyOut.remedy.lifestyleTipHi}`.trim();
      const activeRashiNum = Math.max(1, TWELVE_RASHIS.findIndex((r) => r.id === currentRashi.id) + 1);
      const refined = refineRashifalSectionsForUi({
        rashiNumber: activeRashiNum,
        period: "monthly",
        careerScore: monthlyOut.scores.career,
        careerText: monthlyOut.sections.careerHi,
        wealthText: monthlyOut.sections.financeHi,
        familyText: monthlyOut.sections.loveFamilyHi,
        educationText: monthlyOut.sections.educationHi,
        healthText: monthlyOut.sections.healthHi,
        remedyText: remedyCombined,
        lagnaMentalText: monthlyOut.mentalOutlookHi || monthlyOut.monthlyOverviewHi
      });
      const transitNote = [
        monthlyOut.monthlyOverviewHi,
        monthlyOut.majorTransits.timelineHighlightsHi.slice(0, 2).join(" ")
      ].filter(Boolean).join(" ");
      return {
        headlineHi: monthlyOut.headlineHi,
        careerText: sal(refined.careerText),
        wealthText: sal(refined.wealthText),
        familyText: sal(refined.familyText),
        wealthFamilySummary: `${refined.wealthText} ${refined.familyText}`,
        educationText: sal(refined.educationText),
        healthText: sal(refined.healthText),
        remedyText: sal(refined.remedyText),
        lagnaMentalText: refined.lagnaMentalText,
        transitImpactText: transitNote,
        sixLevelStamp: `मासिक महा-गोचर (दृक-गणित लाहिड़ी ${monthlyOut.astronomicalBasis.ayanamshaDMS}) • True Node`,
        doToday1: monthlyOut.monthlyStrategyHi[0] || "शुभ तिथियों में दीर्घकालिक करियर व वित्तीय योजनाएँ आरंभ करें।",
        doToday2: monthlyOut.monthlyStrategyHi[1] || "संक्रांति व प्रमुख ग्रह बदलावों के अनुरूप कार्यशैली व्यवस्थित रखें।",
        dontToday1: monthlyOut.cautionsHi[0] || "सावधानी तिथियों में जल्दबाज़ी व बड़े जोखिमपूर्ण निवेश से बचें।",
        dontToday2: monthlyOut.cautionsHi[1] || "स्वास्थ्य और पारिवारिक संवाद की उपेक्षा न करें।",
        luckyColor: monthlyOut.luckyAttributes.luckyColorHi,
        avoidColor: monthlyOut.luckyAttributes.avoidColorHi,
        luckyTime: favWindowsHi,
        cardLuckyTime: favWindowsHi,
        cautionTime: cautWindowsHi,
        luckyDirection: monthlyOut.luckyAttributes.favorableDirectionHi,
        luckyReasoningHi: monthlyOut.luckyAttributes.reasoningHi,
        luckyNumber: luckyNumber2,
        allyNumber: allyNumber2,
        luckyNumbersDisplay: luckyNumbersDisplay2,
        careerScore: monthlyOut.scores.career,
        wealthScore: monthlyOut.scores.finance,
        familyScore: monthlyOut.scores.loveFamily,
        educationScore: monthlyOut.scores.education,
        healthScore: monthlyOut.scores.health,
        chandraGochar: {
          ...chandraGochar,
          chandrabal: `${monthlyOut.monthSpan.monthLabelHi} गोचर`,
          tarabal: "",
          gocharSummary: monthlyOut.sankranti.summaryHi
        },
        dateRangeHi: monthlyOut.monthSpan.monthLabelHi,
        dateRangeEn: monthlyOut.monthSpan.monthLabelEn,
        sadeSatiStatusHi: monthlyOut.sadeSatiStatusHi,
        monthlyFavDatesHi: favWindowsHi,
        monthlyModDatesHi: modWindowsHi,
        monthlyCautDatesHi: cautWindowsHi,
        monthlySankrantiShortHi: monthlyOut.sankranti.hasSankranti ? `${monthlyOut.sankranti.toSignNameHi} संक्रांति (${monthlyOut.sankranti.dateFormattedHi || ""})` : `${monthlyOut.sankranti.fromSignNameHi} सूर्य गोचर`
      };
    }
    return {
      headlineHi: `${currentRashi.hindiName} राशिफल तैयार हो रहा है...`,
      careerText: "वैदिक दृक-गणित गोचर गणना तैयार हो रही है...",
      wealthText: "",
      familyText: "",
      wealthFamilySummary: "",
      educationText: "",
      healthText: "",
      remedyText: `राशि स्वामी ${currentRashi.swami} के बीज मंत्र का जप करें।`,
      lagnaMentalText: "ग्रह गोचर विश्लेषण लोड हो रहा है...",
      transitImpactText: "लाहिड़ी अयनांश एवं True Node के अनुसार ग्रह स्थिति की गणना की जा रही है...",
      sixLevelStamp: `दृक-गणित लाहिड़ी • True Node • ${activeForecastLoc.hindiName}`,
      doToday1: "शांति व सकारात्मक संकल्प के साथ कार्य प्रारंभ करें।",
      doToday2: "संयम और स्पष्ट संवाद बनाए रखें।",
      dontToday1: "जल्दबाजी में बड़े निर्णय न लें।",
      dontToday2: "अनावश्यक तनाव व विवाद से दूर रहें।",
      luckyColor: "स्वर्णिम पीला",
      avoidColor: "गहरा काला",
      luckyTime: shreshthaSamayInfo.detailedBestTime,
      cardLuckyTime: shreshthaSamayInfo.cardBestTime,
      cautionTime: todayDayPanchang.rahuKaal,
      luckyDirection: "पूर्व एवं उत्तर दिशा",
      luckyReasoningHi: "",
      luckyNumber: 3,
      allyNumber: 9,
      luckyNumbersDisplay: "3, 9, 1",
      careerScore: 78,
      wealthScore: 76,
      familyScore: 79,
      educationScore: 77,
      healthScore: 78,
      chandraGochar: {
        ...chandraGochar,
        tarabal: "",
        gocharSummary: `${currentRashi.hindiName} राशि गोचर गणना`
      },
      dateRangeHi: forecastMode === "monthly" ? targetMonthLabelFallbackHi : todayFormatted,
      dateRangeEn: targetDailyDate.dateKey,
      sadeSatiStatusHi: ""
    };
  }, [
    forecastMode,
    dailyOut,
    weeklyOut,
    monthlyOut,
    userSalutation,
    currentRashi,
    todayDayPanchang,
    chandraGochar,
    todayFormatted,
    targetDailyDate.dateKey,
    targetMonthLabelFallbackHi,
    activeForecastLoc.hindiName
  ]);
  const {
    careerText,
    wealthText,
    familyText,
    educationText,
    healthText,
    remedyText,
    lagnaMentalText,
    transitImpactText,
    sixLevelStamp,
    doToday1,
    doToday2,
    dontToday1,
    dontToday2,
    luckyColor,
    avoidColor,
    luckyTime,
    cardLuckyTime,
    luckyDirection,
    luckyNumber,
    allyNumber,
    luckyNumbersDisplay,
    careerScore,
    wealthScore,
    familyScore,
    educationScore,
    healthScore
  } = forecastData;
  const dailyPeriodBadgeHi = dailyOffsetDays === 0 ? "आज का दैनिक राशिफल" : dailyOffsetDays === -1 ? "कल का दैनिक राशिफल" : dailyOffsetDays === 1 ? "आने वाले कल का दैनिक राशिफल" : `${targetDailyDate.day} ${monthHindi} ${targetDailyDate.year} का दैनिक राशिफल`;
  const weeklyPeriodBadgeHi = !customWeeklyDateKey && weeklyOffsetWeeks === 0 ? "इस सप्ताह का साप्ताहिक राशिफल" : !customWeeklyDateKey && weeklyOffsetWeeks === -1 ? "पिछले सप्ताह का साप्ताहिक राशिफल" : !customWeeklyDateKey && weeklyOffsetWeeks === 1 ? "अगले सप्ताह का साप्ताहिक राशिफल" : `${weeklyOut?.weekSpan.rangeLabelHi || targetWeeklyAnchor.dateKey} का साप्ताहिक राशिफल`;
  const modeTitleLabel = forecastMode === "daily" ? tr(dailyPeriodBadgeHi, dailyOffsetDays === 0 ? "Today's Daily Horoscope" : `Daily Horoscope (${targetDailyDate.dateKey})`) : forecastMode === "weekly" ? tr(weeklyPeriodBadgeHi, weeklyOffsetWeeks === 0 ? "This Week's Weekly Horoscope" : "Weekly Horoscope") : tr(
    `${monthlyOut?.monthSpan.monthLabelHi || targetMonthLabelFallbackHi} का मासिक राशिफल`,
    `${monthlyOut?.monthSpan.monthLabelEn || targetMonthLabelFallbackHi} Monthly Horoscope`
  );
  const displayRashiName = language === "en" || language === "hinglish" ? `${currentRashi.englishName} (${currentRashi.hindiName})` : `${currentRashi.hindiName} राशि`;
  const activeCanonicalShareUrl = "https://www.panditjionline.online/rashifal";
  const fullSingleRashiPostText = reactExports.useMemo(() => {
    const cleanCareer = stripPersonalSalutation(careerText, userSalutation);
    const cleanWealth = stripPersonalSalutation(wealthText, userSalutation);
    const cleanFamily = stripPersonalSalutation(familyText, userSalutation);
    const cleanEducation = stripPersonalSalutation(educationText, userSalutation);
    const cleanHealth = stripPersonalSalutation(healthText, userSalutation);
    const cleanRemedy = stripPersonalSalutation(remedyText, userSalutation);
    const activePostVikramSamvat = forecastMode === "weekly" ? targetWeekPanchangInfo.vikramSamvat : forecastMode === "monthly" ? targetMonthHinduMaasInfo.vikramSamvat : todayDayPanchang.vikramSamvat;
    const activePostShakaSamvat = forecastMode === "weekly" ? targetWeekPanchangInfo.shakaSamvat : forecastMode === "monthly" ? targetMonthHinduMaasInfo.shakaSamvat : todayDayPanchang.shakaSamvat;
    const activePostHinduMaas = forecastMode === "weekly" ? targetWeekPanchangInfo.hinduMaas : forecastMode === "monthly" ? targetMonthHinduMaasInfo.primaryMaas : todayDayPanchang.hinduMaas;
    return buildFullSingleRashiPost({
      mode: forecastMode,
      todayFormatted: forecastMode === "daily" ? todayFormatted : forecastData.dateRangeHi || todayFormatted,
      vikramSamvat: activePostVikramSamvat,
      shakaSamvat: activePostShakaSamvat,
      hinduMaas: activePostHinduMaas,
      paksha: dailyOut?.panchangContext.pakshaHi || todayDayPanchang.paksha,
      tithiShort: dailyOut?.panchangContext.tithiHi || todayDayPanchang.tithiName,
      tithiEndTime: todayDayPanchang.tithiEndTime,
      nakshatra: dailyOut?.panchangContext.nakshatraHi || todayDayPanchang.nakshatra,
      nakshatraEndTime: todayDayPanchang.nakshatraEndTime,
      yoga: dailyOut?.panchangContext.yogaHi || todayDayPanchang.yoga,
      yogaEndTime: todayDayPanchang.yogaEndTime,
      karana: todayDayPanchang.karana,
      karanaEndTime: todayDayPanchang.karanaEndTime,
      chandraRashi: dailyOut?.moonTransit.primarySignNameHi || todayDayPanchang.chandraRashi,
      suryaRashi: todayDayPanchang.suryaRashi,
      rashiHindiName: currentRashi.hindiName,
      rashiEnglishName: currentRashi.englishName,
      rashiSymbol: currentRashi.symbol,
      rashiNakshatras: currentRashi.nakshatras,
      swami: currentRashi.swami,
      deity: currentRashi.aradhyaDev,
      element: currentRashi.element,
      nature: currentRashi.nature,
      aksharas: currentRashi.letters,
      ratna: `${currentRashi.ratna} (${currentRashi.dhatu})`,
      compatibleRashis: currentRashi.mitraRashi,
      beejMantra: currentRashi.beejMantra,
      chandrabal: forecastData.chandraGochar?.chandrabal || chandraGochar.chandrabal,
      // 100% Rashi-wide 3-Nakshatra Tarabala mapped to today's transit Moon Nakshatra
      tarabal: dailyOut?.rashiTarabala?.summaryLineHi || "",
      gocharSummary: forecastData.chandraGochar?.gocharSummary || chandraGochar.gocharSummary,
      lagnaMentalText,
      transitImpactText,
      careerText: cleanCareer,
      wealthText: cleanWealth,
      familyText: cleanFamily,
      educationText: cleanEducation,
      healthText: cleanHealth,
      remedyText: cleanRemedy,
      careerScore,
      wealthScore,
      loveScore: familyScore,
      educationScore,
      healthScore,
      luckyNumber: luckyNumbersDisplay || `${luckyNumber}, ${allyNumber}`,
      luckyColor,
      favorableDirection: luckyDirection,
      luckyTime,
      abhijitMuhurat: todayDayPanchang.abhijitMuhurat,
      rahuKaal: dailyOut?.timeWindows.cautionWindowHi || todayDayPanchang.rahuKaal,
      dishaShool: dailyOut?.panchangContext.dishaShoolHi || todayDayPanchang.dishaShool,
      dishaShoolRemedy: todayDayPanchang.dishaShoolRemedy,
      todayDoText: `• ${doToday1}
• ${doToday2}`,
      todayDontText: `• ${dontToday1}
• ${dontToday2}`,
      subhashitSanskrit: activeShloka.sanskrit,
      subhashitMeaning: activeShloka.meaning,
      sarvajanHitayaRemedyHi: forecastMode === "daily" ? dailySarvajanHitaya.remedyHi : void 0,
      weekStartDate: weeklyOut?.weekSpan.weekStartDateKey,
      weekEndDate: weeklyOut?.weekSpan.weekEndDateKey,
      weeklyMoonSignsSummary: weeklyOut?.moonJourney.signsTransitedLabelHi,
      weeklyPlanetarySummary: weeklyOut?.planetaryEvents.globalPlanetarySummaryHi?.length ? weeklyOut.planetaryEvents.globalPlanetarySummaryHi.join(" • ") : weeklyOut?.planetaryEvents.summaryNotesHi.join(" • "),
      weeklyFavorableDays: forecastData.weeklyFavDaysHi,
      weeklyModerateDays: forecastData.weeklyModDaysHi,
      weeklyCautionDays: forecastData.weeklyCautDaysHi,
      gregorianMonthYear: monthlyOut?.monthSpan.monthLabelHi,
      hinduLunarMonths: targetMonthHinduMaasInfo.labelHi,
      monthlyPlanetarySummary: monthlyOut?.majorTransits.globalTimelineHighlightsHi?.length ? monthlyOut.majorTransits.globalTimelineHighlightsHi.join(" • ") : monthlyOut?.majorTransits.timelineHighlightsHi.join(" • "),
      monthlySankrantiSummary: monthlyOut?.sankranti.globalSummaryHi || monthlyOut?.sankranti.summaryHi,
      monthlyFavorableWindow: forecastData.monthlyFavDatesHi,
      monthlyModerateDays: forecastData.monthlyModDatesHi,
      hasDeepawaliAmavasya: monthlyOut?.hasDeepawaliAmavasya,
      monthlyMajorParvasNoteHi: monthlyOut?.majorParvasNoteHi
    }, language);
  }, [
    forecastMode,
    todayFormatted,
    todayDayPanchang,
    targetWeekPanchangInfo,
    targetMonthHinduMaasInfo,
    dailyOut,
    weeklyOut,
    monthlyOut,
    currentRashi,
    moonBhava,
    chandraGochar,
    forecastData,
    lagnaMentalText,
    transitImpactText,
    sixLevelStamp,
    careerText,
    wealthText,
    familyText,
    educationText,
    healthText,
    remedyText,
    userSalutation,
    careerScore,
    wealthScore,
    familyScore,
    educationScore,
    healthScore,
    luckyNumber,
    allyNumber,
    luckyNumbersDisplay,
    luckyColor,
    avoidColor,
    luckyDirection,
    luckyTime,
    doToday1,
    doToday2,
    dontToday1,
    dontToday2,
    activeShloka,
    dailySarvajanHitaya,
    targetMonthHinduMaasInfo.labelHi,
    language
  ]);
  const generateAll12PostLazily = reactExports.useCallback(async () => {
    setAll12Loading(true);
    try {
      if (forecastMode === "daily") {
        const mod2 = await __vitePreload(() => import("./dailyRashifalEngine-JyJx31y8.js"), true ? __vite__mapDeps([0,1,2,3]) : void 0);
        const all122 = mod2.generateAll12DailyRashifal({
          date: targetDailyDate.dateKey,
          location: activeForecastLoc
        });
        const items2 = TWELVE_RASHIS.map((rItem, rIdx) => {
          const res = all122[rItem.id];
          const d = res?.status === "ok" ? res.data : null;
          const refined = refineRashifalSectionsForUi({
            rashiNumber: rIdx + 1,
            period: "daily",
            careerScore: d?.scores.career || 76,
            careerText: d?.sections.careerHi || "",
            wealthText: d?.sections.financeHi || "",
            familyText: d?.sections.loveFamilyHi || "",
            educationText: d?.sections.educationHi || "",
            healthText: d?.sections.healthHi || "",
            remedyText: d ? d.remedy.primaryRemedyHi : "",
            lagnaMentalText: d?.headlineHi || ""
          });
          return {
            rashiHindiName: rItem.hindiName,
            rashiEnglishName: rItem.englishName,
            rashiSymbol: rItem.symbol,
            swami: rItem.swami,
            aksharas: rItem.letters,
            moonBhava: d?.moonTransit.primaryHouse || 1,
            chandrabal: d?.moonTransit.chandrabalaLabelHi || "संतुलित",
            gocharSummary: d?.moonTransit.sandhiSplit.summaryHi || "",
            transitHighlight: d?.moonTransit.chandrabalaLabelHi || "संतुलित",
            careerText: refined.careerText,
            wealthText: refined.wealthText,
            familyText: refined.familyText,
            educationText: refined.educationText,
            healthText: refined.healthText,
            remedyText: refined.remedyBodyForShare,
            beejMantra: rItem.beejMantra,
            luckyNumber: d?.luckyAttributes.luckyNumbersDisplay || "3, 9, 1",
            luckyColor: d?.luckyAttributes.luckyColorHi || "पीला",
            favorableDirection: d?.luckyAttributes.favorableDirectionHi || "पूर्व",
            overallScore: d?.scores.overall || 78
          };
        });
        const built2 = buildAll12RashisPost({
          mode: "daily",
          todayFormatted,
          vikramSamvat: todayDayPanchang.vikramSamvat,
          shakaSamvat: todayDayPanchang.shakaSamvat,
          hinduMaas: todayDayPanchang.hinduMaas,
          paksha: todayDayPanchang.paksha,
          tithiName: todayDayPanchang.tithiName,
          tithiEndTime: todayDayPanchang.tithiEndTime,
          nakshatra: todayDayPanchang.nakshatra,
          nakshatraEndTime: todayDayPanchang.nakshatraEndTime,
          yoga: todayDayPanchang.yoga,
          yogaEndTime: todayDayPanchang.yogaEndTime,
          karana: todayDayPanchang.karana,
          karanaEndTime: todayDayPanchang.karanaEndTime,
          chandraRashi: todayDayPanchang.chandraRashi,
          suryaRashi: todayDayPanchang.suryaRashi,
          sunrise: todayDayPanchang.sunrise,
          sunset: todayDayPanchang.sunset,
          abhijitMuhurat: todayDayPanchang.abhijitMuhurat,
          rahuKaal: todayDayPanchang.rahuKaal,
          dishaShool: todayDayPanchang.dishaShool,
          dishaShoolRemedy: todayDayPanchang.dishaShoolRemedy,
          subhashitSanskrit: activeShloka.sanskrit,
          subhashitSource: activeShloka.source,
          subhashitMeaning: activeShloka.meaning,
          sarvajanHitayaRemedyHi: dailySarvajanHitaya.remedyHi,
          items: items2
        }, language);
        setAll12RashisPostText(built2);
        return built2;
      }
      if (forecastMode === "weekly") {
        const mod2 = await __vitePreload(() => import("./weeklyRashifalEngine-Bt9CVUst.js"), true ? __vite__mapDeps([4,1,2,3]) : void 0);
        const all122 = mod2.generateAll12WeeklyRashifal({
          anchorDate: targetWeeklyAnchor.dateKey,
          location: activeForecastLoc
        });
        const firstOk2 = Object.values(all122).find((r) => r.status === "ok");
        const w0 = firstOk2?.status === "ok" ? firstOk2.data : null;
        const items2 = TWELVE_RASHIS.map((rItem, rIdx) => {
          const res = all122[rItem.id];
          const w = res?.status === "ok" ? res.data : null;
          const favStr = w?.favorableDays.map((x) => x.weekdayHi).join(", ") || "संतुलित";
          const modStr = w?.moderateDays.map((x) => x.weekdayHi).join(", ") || "";
          const cautStr = w?.cautionDays.map((x) => x.weekdayHi).join(", ") || "";
          const sevenDayHighlight = w?.allSevenDaysSummaryHi || [
            `शुभ दिन: ${favStr}`,
            modStr ? `मध्यम दिन: ${modStr}` : "",
            cautStr ? `सावधानी: ${cautStr}` : ""
          ].filter(Boolean).join(" • ");
          const refined = refineRashifalSectionsForUi({
            rashiNumber: rIdx + 1,
            period: "weekly",
            careerScore: w?.scores.career || 76,
            careerText: w?.sections.careerHi || "",
            wealthText: w?.sections.financeHi || "",
            familyText: w?.sections.loveFamilyHi || "",
            educationText: w?.sections.educationHi || "",
            healthText: w?.sections.healthHi || "",
            remedyText: w ? w.remedy.primaryRemedyHi : "",
            lagnaMentalText: w?.headlineHi || ""
          });
          return {
            rashiHindiName: rItem.hindiName,
            rashiEnglishName: rItem.englishName,
            rashiSymbol: rItem.symbol,
            swami: rItem.swami,
            aksharas: rItem.letters,
            moonBhava: w?.moonJourney.dayByDay[0]?.moonHouseFromRashi || 1,
            chandrabal: sevenDayHighlight,
            gocharSummary: w?.moonJourney.signsWithHousesLabelHi || w?.moonJourney.signsTransitedLabelHi || "",
            transitHighlight: sevenDayHighlight,
            careerText: refined.careerText,
            wealthText: refined.wealthText,
            familyText: refined.familyText,
            educationText: refined.educationText,
            healthText: refined.healthText,
            remedyText: refined.remedyBodyForShare,
            beejMantra: rItem.beejMantra,
            luckyNumber: w?.luckyAttributes.luckyNumbersDisplay || "3, 9, 1",
            luckyColor: w?.luckyAttributes.luckyColorHi || "पीला",
            favorableDirection: w?.luckyAttributes.favorableDirectionHi || "पूर्व",
            overallScore: w?.scores.overall || 78
          };
        });
        const built2 = buildAll12RashisPost({
          mode: "weekly",
          todayFormatted: w0?.weekSpan.rangeLabelHi || todayFormatted,
          vikramSamvat: targetWeekPanchangInfo.vikramSamvat,
          shakaSamvat: targetWeekPanchangInfo.shakaSamvat,
          hinduMaas: targetWeekPanchangInfo.hinduMaas,
          paksha: todayDayPanchang.paksha,
          tithiName: todayDayPanchang.tithiName,
          tithiEndTime: todayDayPanchang.tithiEndTime,
          nakshatra: todayDayPanchang.nakshatra,
          nakshatraEndTime: todayDayPanchang.nakshatraEndTime,
          yoga: todayDayPanchang.yoga,
          yogaEndTime: todayDayPanchang.yogaEndTime,
          karana: todayDayPanchang.karana,
          karanaEndTime: todayDayPanchang.karanaEndTime,
          chandraRashi: todayDayPanchang.chandraRashi,
          suryaRashi: todayDayPanchang.suryaRashi,
          sunrise: todayDayPanchang.sunrise,
          sunset: todayDayPanchang.sunset,
          abhijitMuhurat: todayDayPanchang.abhijitMuhurat,
          rahuKaal: todayDayPanchang.rahuKaal,
          dishaShool: todayDayPanchang.dishaShool,
          dishaShoolRemedy: todayDayPanchang.dishaShoolRemedy,
          subhashitSanskrit: activeShloka.sanskrit,
          subhashitSource: activeShloka.source,
          subhashitMeaning: activeShloka.meaning,
          items: items2,
          weekStartDate: w0?.weekSpan.weekStartDateKey,
          weekEndDate: w0?.weekSpan.weekEndDateKey,
          weeklyMoonSignsSummary: w0?.moonJourney.signsTransitedLabelHi,
          weeklyPlanetarySummary: w0?.planetaryEvents.globalPlanetarySummaryHi.join(" • ")
        }, language);
        setAll12RashisPostText(built2);
        return built2;
      }
      const mod = await __vitePreload(() => import("./monthlyRashifalEngine-Dn0LNh4n.js"), true ? __vite__mapDeps([5,1,2,3]) : void 0);
      const all12 = mod.generateAll12MonthlyRashifal({
        year: targetMonthlyPeriod.year,
        month: targetMonthlyPeriod.month,
        location: activeForecastLoc
      });
      const firstOk = Object.values(all12).find((r) => r.status === "ok");
      const m0 = firstOk?.status === "ok" ? firstOk.data : null;
      const items = TWELVE_RASHIS.map((rItem, rIdx) => {
        const res = all12[rItem.id];
        const m = res?.status === "ok" ? res.data : null;
        const refined = refineRashifalSectionsForUi({
          rashiNumber: rIdx + 1,
          period: "monthly",
          careerScore: m?.scores.career || 76,
          careerText: m?.sections.careerHi || "",
          wealthText: m?.sections.financeHi || "",
          familyText: m?.sections.loveFamilyHi || "",
          educationText: m?.sections.educationHi || "",
          healthText: m?.sections.healthHi || "",
          remedyText: m ? m.remedy.primaryRemedyHi : "",
          lagnaMentalText: m?.monthlyOverviewHi || ""
        });
        return {
          rashiHindiName: rItem.hindiName,
          rashiEnglishName: rItem.englishName,
          rashiSymbol: rItem.symbol,
          swami: rItem.swami,
          aksharas: rItem.letters,
          moonBhava: 1,
          chandrabal: m?.favorableDatesHi.join(", ") || "संतुलित",
          gocharSummary: m?.sankranti.summaryHi || "",
          transitHighlight: m?.favorableDatesHi.length ? `शुभ तिथियाँ: ${m.favorableDatesHi.join(", ")}` : "संतुलित मास",
          careerText: refined.careerText,
          wealthText: refined.wealthText,
          familyText: refined.familyText,
          educationText: refined.educationText,
          healthText: refined.healthText,
          remedyText: refined.remedyBodyForShare,
          beejMantra: rItem.beejMantra,
          luckyNumber: m?.luckyAttributes.luckyNumbersDisplay || "3, 9, 1",
          luckyColor: m?.luckyAttributes.luckyColorHi || "पीला",
          favorableDirection: m?.luckyAttributes.favorableDirectionHi || "पूर्व",
          overallScore: m?.scores.overall || 78
        };
      });
      const built = buildAll12RashisPost({
        mode: "monthly",
        todayFormatted: m0?.monthSpan.monthLabelHi || targetMonthLabelFallbackHi,
        vikramSamvat: targetMonthHinduMaasInfo.vikramSamvat,
        shakaSamvat: targetMonthHinduMaasInfo.shakaSamvat,
        hinduMaas: targetMonthHinduMaasInfo.primaryMaas,
        paksha: todayDayPanchang.paksha,
        tithiName: todayDayPanchang.tithiName,
        tithiEndTime: todayDayPanchang.tithiEndTime,
        nakshatra: todayDayPanchang.nakshatra,
        nakshatraEndTime: todayDayPanchang.nakshatraEndTime,
        yoga: todayDayPanchang.yoga,
        yogaEndTime: todayDayPanchang.yogaEndTime,
        karana: todayDayPanchang.karana,
        karanaEndTime: todayDayPanchang.karanaEndTime,
        chandraRashi: todayDayPanchang.chandraRashi,
        suryaRashi: todayDayPanchang.suryaRashi,
        sunrise: todayDayPanchang.sunrise,
        sunset: todayDayPanchang.sunset,
        abhijitMuhurat: todayDayPanchang.abhijitMuhurat,
        rahuKaal: todayDayPanchang.rahuKaal,
        dishaShool: todayDayPanchang.dishaShool,
        dishaShoolRemedy: todayDayPanchang.dishaShoolRemedy,
        subhashitSanskrit: activeShloka.sanskrit,
        subhashitSource: activeShloka.source,
        subhashitMeaning: activeShloka.meaning,
        items,
        gregorianMonthYear: m0?.monthSpan.monthLabelHi,
        hinduLunarMonths: targetMonthHinduMaasInfo.labelHi,
        monthlyPlanetarySummary: m0?.majorTransits.globalTimelineHighlightsHi.join(" • "),
        monthlySankrantiSummary: m0?.sankranti.globalSummaryHi,
        monthlyMajorParvasNoteHi: m0?.majorParvasNoteHi
      }, language);
      setAll12RashisPostText(built);
      return built;
    } finally {
      setAll12Loading(false);
    }
  }, [
    forecastMode,
    targetDailyDate.dateKey,
    targetWeeklyAnchor.dateKey,
    targetMonthlyPeriod.year,
    targetMonthlyPeriod.month,
    activeForecastLoc,
    todayFormatted,
    todayDayPanchang,
    targetWeekPanchangInfo,
    activeShloka,
    dailySarvajanHitaya,
    targetMonthHinduMaasInfo,
    targetMonthLabelFallbackHi,
    language
  ]);
  reactExports.useEffect(() => {
    setAll12RashisPostText("");
    if (showPostPreviewBox && socialPostTab === "all12") {
      generateAll12PostLazily();
    }
  }, [
    showPostPreviewBox,
    socialPostTab,
    forecastMode,
    targetDailyDate.dateKey,
    targetWeeklyAnchor.dateKey,
    targetMonthlyPeriod.year,
    targetMonthlyPeriod.month,
    activeForecastLoc.id,
    language,
    generateAll12PostLazily
  ]);
  const resolveActiveSocialPostText = async () => {
    if (socialPostTab === "single") return fullSingleRashiPostText;
    if (all12RashisPostText) return all12RashisPostText;
    return generateAll12PostLazily();
  };
  const liveRashifalCardPayload = reactExports.useMemo(() => {
    const cleanRashiNakshatras = currentRashi.nakshatras.replace(/\s*\([^)]*\)/g, "").trim();
    const cardDateStr = forecastMode === "daily" ? forecastData.dateRangeHi || todayDayPanchang.formattedDateHindi : forecastData.dateRangeHi || todayDayPanchang.formattedDateHindi;
    const activePeriodSlug = forecastMode === "daily" ? targetDailyDate.dateKey : forecastMode === "weekly" ? weeklyOut?.weekSpan.weekStartDateKey || targetWeeklyAnchor.dateKey : monthlyOut?.monthSpan.monthKey || `${targetMonthlyPeriod.year}-${String(targetMonthlyPeriod.month).padStart(2, "0")}`;
    return {
      variant: "rashifal",
      badge: `${currentRashi.hindiName} राशिफल (${cardDateStr})`,
      title: `${displayRashiName} — ${modeTitleLabel}`,
      subtitle: `स्वामी: ${currentRashi.swami} • ${currentRashi.element} • राशि नक्षत्र: ${cleanRashiNakshatras}`,
      dateOrLocation: `शुभ अंक: ${luckyNumbersDisplay || `${luckyNumber}, ${allyNumber}`} • रंग: ${luckyColor}`,
      rashifalData: {
        mode: forecastMode,
        rashiName: currentRashi.hindiName,
        rashiEn: currentRashi.englishName,
        symbol: currentRashi.symbol,
        swami: currentRashi.swami,
        element: currentRashi.element,
        nakshatra: cleanRashiNakshatras,
        todayGocharNakshatra: forecastMode === "daily" ? dailyOut?.panchangContext.nakshatraHi || todayDayPanchang.nakshatra : void 0,
        dateHindi: cardDateStr,
        vaarHindi: vaarName,
        tithiName: dailyOut?.panchangContext.tithiHi || todayDayPanchang.tithiName,
        festivalName: todayDayPanchang.festivalName || void 0,
        modeLabel: modeTitleLabel,
        careerScore,
        wealthScore,
        familyScore,
        educationScore,
        healthScore,
        careerSummary: stripPersonalSalutation(careerText, userSalutation),
        wealthFamilySummary: forecastData.wealthFamilySummary || `${stripPersonalSalutation(wealthText, userSalutation)} ${stripPersonalSalutation(familyText, userSalutation)} स्वास्थ्य: ${stripPersonalSalutation(healthText, userSalutation)}`,
        remedySummary: stripPersonalSalutation(remedyText, userSalutation),
        luckyNumber: luckyNumbersDisplay || `${luckyNumber}, ${allyNumber}`,
        luckyColor,
        luckyDirection,
        luckyTime: cardLuckyTime || luckyTime,
        ratna: currentRashi.ratna,
        gocharNote: forecastData.chandraGochar?.gocharSummary || chandraGochar.gocharSummary
      },
      highlights: [
        { label: "करियर एवं धन योग", value: `करियर: ${careerScore}% | धन: ${wealthScore}%` },
        { label: "परिवार व शिक्षा", value: `परिवार: ${familyScore}% | शिक्षा: ${educationScore}%` },
        {
          label: forecastMode === "daily" ? "शुभ समय" : forecastMode === "weekly" ? "सप्ताह के शुभ दिवस" : "मासिक शुभ तिथियाँ",
          value: `${cardLuckyTime || luckyTime} • ${luckyDirection}`
        },
        {
          label: forecastMode === "daily" ? "वैदिक उपाय" : forecastMode === "weekly" ? "सप्ताह का वैदिक उपाय" : "मास का विशेष वैदिक उपाय",
          value: stripPersonalSalutation(remedyText, userSalutation)
        }
      ],
      message: stripPersonalSalutation(careerText, userSalutation),
      shareUrl: activeCanonicalShareUrl,
      fileNameSlug: `${currentRashi.id}-${forecastMode}-rashifal-${activePeriodSlug}`
    };
  }, [
    forecastMode,
    currentRashi,
    todayDayPanchang.formattedDateHindi,
    todayDayPanchang.nakshatra,
    todayDayPanchang.tithiName,
    todayDayPanchang.festivalName,
    vaarName,
    dailyOut?.panchangContext.nakshatraHi,
    dailyOut?.panchangContext.tithiHi,
    weeklyOut?.weekSpan.weekStartDateKey,
    monthlyOut?.monthSpan.monthKey,
    targetDailyDate.dateKey,
    targetWeeklyAnchor.dateKey,
    targetMonthlyPeriod.year,
    targetMonthlyPeriod.month,
    forecastData.dateRangeHi,
    forecastData.wealthFamilySummary,
    forecastData.chandraGochar?.gocharSummary,
    displayRashiName,
    modeTitleLabel,
    luckyNumber,
    allyNumber,
    luckyNumbersDisplay,
    luckyColor,
    careerScore,
    wealthScore,
    familyScore,
    educationScore,
    healthScore,
    careerText,
    wealthText,
    familyText,
    healthText,
    remedyText,
    userSalutation,
    luckyDirection,
    luckyTime,
    cardLuckyTime,
    chandraGochar.gocharSummary,
    activeCanonicalShareUrl
  ]);
  const fallbackAll12CardPayload = reactExports.useMemo(() => {
    const cardDateStr = forecastData.dateRangeHi || todayDayPanchang.formattedDateHindi;
    const pakshaLabel = dailyOut?.panchangContext.pakshaHi || todayDayPanchang.paksha;
    const tithiLabel = dailyOut?.panchangContext.tithiHi || todayDayPanchang.tithiName;
    const nakshatraLabel = dailyOut?.panchangContext.nakshatraHi || todayDayPanchang.nakshatra;
    const activePeriodSlug = forecastMode === "daily" ? targetDailyDate.dateKey : forecastMode === "weekly" ? weeklyOut?.weekSpan.weekStartDateKey || targetWeeklyAnchor.dateKey : monthlyOut?.monthSpan.monthKey || `${targetMonthlyPeriod.year}-${String(targetMonthlyPeriod.month).padStart(2, "0")}`;
    const modeHeadline = forecastMode === "daily" ? "12 राशियों का दैनिक महा-राशिफल" : forecastMode === "weekly" ? "12 राशियों का साप्ताहिक महा-राशिफल" : "12 राशियों का मासिक महा-राशिफल";
    return {
      variant: "all12rashifal",
      badge: `${vaarName} विशेष • 12 राशि महा-कार्ड`,
      title: modeHeadline,
      subtitle: `${cardDateStr} • ${todayDayPanchang.hinduMaas}, ${pakshaLabel} ${tithiLabel.replace(/^(?:शुक्ल|कृष्ण)(?:\s+पक्ष)?\s+/u, "").trim()}`,
      dateOrLocation: `${cardDateStr} • ${resolveHindiCityDisplayName(activeForecastLoc) || "भारत"}`,
      all12RashifalData: {
        mode: forecastMode,
        modeLabel: modeTitleLabel,
        dateHindi: cardDateStr,
        vaarHindi: vaarName,
        panchangLine: `${todayDayPanchang.hinduMaas}, ${pakshaLabel} ${tithiLabel.replace(/^(?:शुक्ल|कृष्ण)(?:\s+पक्ष)?\s+/u, "").trim()} • नक्षत्र: ${nakshatraLabel}`,
        festivalName: todayDayPanchang.festivalName || void 0,
        tithiName: tithiLabel,
        items: TWELVE_RASHIS.map((r) => ({
          rashiKey: r.id,
          rashiNameHi: r.hindiName,
          rashiNameEn: r.englishName,
          overallScore: 78,
          summaryHi: "संतुलित गोचर और शुभ प्रयासों से प्रगति के संकेत।",
          luckyNumber: "3",
          luckyColor: "पीला"
        }))
      },
      highlights: [],
      message: `${cardDateStr} — सभी 12 राशियों (मेष से मीन) का शुद्ध दृक्-गणित वैदिक फलकथन।`,
      shareUrl: activeCanonicalShareUrl,
      fileNameSlug: `all-12-rashifal-${forecastMode}-${activePeriodSlug}`
    };
  }, [
    forecastMode,
    forecastData.dateRangeHi,
    todayDayPanchang.formattedDateHindi,
    todayDayPanchang.hinduMaas,
    todayDayPanchang.paksha,
    todayDayPanchang.tithiName,
    todayDayPanchang.nakshatra,
    todayDayPanchang.festivalName,
    dailyOut?.panchangContext.pakshaHi,
    dailyOut?.panchangContext.tithiHi,
    dailyOut?.panchangContext.nakshatraHi,
    weeklyOut?.weekSpan.weekStartDateKey,
    monthlyOut?.monthSpan.monthKey,
    targetDailyDate.dateKey,
    targetWeeklyAnchor.dateKey,
    targetMonthlyPeriod.year,
    targetMonthlyPeriod.month,
    vaarName,
    modeTitleLabel,
    activeForecastLoc,
    activeCanonicalShareUrl
  ]);
  const resolveAll12CardPayload = reactExports.useCallback(async () => {
    const cleanMahapostPrefix = (raw) => (raw || "").replace(/[\r\n]+/g, " ").replace(/^[^:ः।\n]{2,55}(?:दैनिक|साप्ताहिक|मासिक)\s*राशिफल(?:\s*\([^)]*\))?\s*[:ः—-]\s*/u, "").replace(/^[A-Za-z\s]{2,35}(?:Daily|Weekly|Monthly)\s*(?:Horoscope|Rashifal)(?:\s*\([^)]*\))?\s*[:—-]\s*/i, "").replace(/\([^)]*(?:AM|PM|\d{1,2}:\d{2})[^)]*\)/gi, "").replace(/\.{2,}|…/g, "").replace(/\s+/g, " ").trim();
    const tightenAdviceSentence = (s) => s.replace(
      /^(?:आज\s+)?[^\s।]+(?:\s+[^\s।]+)?\s+नक्षत्र\s+व\s+[^\s।]+(?:\s+[^\s।]+)?\s+के\s+योग\s+में\s+/u,
      "आज "
    ).replace(/\s+/g, " ").trim();
    const extractCompleteSentences = (txt) => txt.split(/(?<=[।॥!?])\s+/u).map((s) => s.replace(/\.{2,}|…/g, "").trim()).filter((s) => s.length >= 6).map((s) => /[।॥.!?]$/.test(s) ? s : `${s}।`);
    const buildMahapostSummary = (primary, advice, fallback, secondaryAdvice) => {
      const primarySentences = extractCompleteSentences(cleanMahapostPrefix(primary));
      const adviceSentences = extractCompleteSentences(cleanMahapostPrefix(advice)).map(tightenAdviceSentence);
      const secondaryAdviceSentences = extractCompleteSentences(cleanMahapostPrefix(secondaryAdvice)).map(
        tightenAdviceSentence
      );
      const fallbackSentences = extractCompleteSentences(cleanMahapostPrefix(fallback));
      const s1 = primarySentences[0] || fallbackSentences[0] || "";
      const candidatePool = [
        primarySentences[1],
        adviceSentences[0],
        secondaryAdviceSentences[0],
        fallbackSentences[0]
      ].filter((cand) => Boolean(cand && cand !== s1));
      if (!s1) {
        return "संतुलित दिवस और सकारात्मक प्रयासों से प्रगति बनेगी। धैर्य व स्पष्ट योजना से मुख्य कार्य पूर्ण करें।";
      }
      for (const cand of candidatePool) {
        const combined = `${s1} ${cand}`;
        const words = combined.split(/\s+/).filter(Boolean).length;
        if (words <= 28) return combined;
      }
      if (candidatePool.length > 0) {
        const shortest = [...candidatePool].sort(
          (a, b) => a.split(/\s+/).filter(Boolean).length - b.split(/\s+/).filter(Boolean).length
        )[0];
        return `${s1} ${shortest}`;
      }
      return `${s1} धैर्य व स्पष्ट योजना से आज के प्रमुख कार्य पूर्ण करें।`;
    };
    const pakshaLabel = dailyOut?.panchangContext.pakshaHi || todayDayPanchang.paksha;
    const rawTithiLabel = dailyOut?.panchangContext.tithiHi || todayDayPanchang.tithiName;
    const maasBase = (todayDayPanchang.hinduMaas || "").replace(/\s*मास\s*$/u, "").trim();
    const cleanTithiLabel = (rawTithiLabel || "").replace(maasBase ? new RegExp(`^${maasBase}(?:\\s*मास)?\\s+`, "u") : /^$/, "").replace(/^(?:शुक्ल|कृष्ण)(?:\s+पक्ष)?\s+/u, "").trim();
    const nakshatraLabel = dailyOut?.panchangContext.nakshatraHi || todayDayPanchang.nakshatra;
    const panchangLine = `${todayDayPanchang.hinduMaas}, ${pakshaLabel} ${cleanTithiLabel} • नक्षत्र: ${nakshatraLabel}`;
    if (forecastMode === "daily") {
      const mod2 = await __vitePreload(() => import("./dailyRashifalEngine-JyJx31y8.js"), true ? __vite__mapDeps([0,1,2,3]) : void 0);
      const all122 = mod2.generateAll12DailyRashifal({
        date: targetDailyDate.dateKey,
        location: activeForecastLoc
      });
      const items2 = TWELVE_RASHIS.map((rItem) => {
        const res = all122[rItem.id];
        const d = res?.status === "ok" ? res.data : null;
        return {
          rashiKey: rItem.id,
          rashiNameHi: rItem.hindiName,
          rashiNameEn: rItem.englishName,
          overallScore: d?.scores.overall || 78,
          summaryHi: buildMahapostSummary(
            d?.headlineHi,
            d?.doListHi?.[1] || d?.doListHi?.[0],
            d?.sections.careerHi,
            d?.remedy?.lifestyleTipHi || d?.doListHi?.[0]
          ),
          luckyNumber: (d?.luckyAttributes.luckyNumbersDisplay || "3").split(",")[0].trim(),
          luckyColor: (d?.luckyAttributes.luckyColorHi || "पीला").split(/[,/•]/)[0].trim()
        };
      });
      const cardDateStr2 = forecastData.dateRangeHi || todayDayPanchang.formattedDateHindi;
      return {
        ...fallbackAll12CardPayload,
        all12RashifalData: {
          mode: "daily",
          modeLabel: modeTitleLabel,
          dateHindi: cardDateStr2,
          vaarHindi: vaarName,
          panchangLine,
          festivalName: todayDayPanchang.festivalName || void 0,
          tithiName: cleanTithiLabel,
          items: items2
        },
        fileNameSlug: `all-12-rashifal-daily-${targetDailyDate.dateKey}`
      };
    }
    if (forecastMode === "weekly") {
      const mod2 = await __vitePreload(() => import("./weeklyRashifalEngine-Bt9CVUst.js"), true ? __vite__mapDeps([4,1,2,3]) : void 0);
      const all122 = mod2.generateAll12WeeklyRashifal({
        anchorDate: targetWeeklyAnchor.dateKey,
        location: activeForecastLoc
      });
      const firstOk2 = Object.values(all122).find((r) => r.status === "ok");
      const w0 = firstOk2?.status === "ok" ? firstOk2.data : null;
      const items2 = TWELVE_RASHIS.map((rItem) => {
        const res = all122[rItem.id];
        const w = res?.status === "ok" ? res.data : null;
        return {
          rashiKey: rItem.id,
          rashiNameHi: rItem.hindiName,
          rashiNameEn: rItem.englishName,
          overallScore: w?.scores.overall || 78,
          summaryHi: buildMahapostSummary(w?.headlineHi, w?.remedy?.lifestyleTipHi, w?.sections.careerHi),
          luckyNumber: (w?.luckyAttributes.luckyNumbersDisplay || "3").split(",")[0].trim(),
          luckyColor: (w?.luckyAttributes.luckyColorHi || "पीला").split(/[,/•]/)[0].trim()
        };
      });
      const cardDateStr2 = w0?.weekSpan.rangeLabelHi || forecastData.dateRangeHi || todayDayPanchang.formattedDateHindi;
      const weekPanchangLine = `${targetWeekPanchangInfo.hinduMaas} • विक्रम संवत ${targetWeekPanchangInfo.vikramSamvat} • शक संवत ${targetWeekPanchangInfo.shakaSamvat}`;
      return {
        ...fallbackAll12CardPayload,
        subtitle: `${cardDateStr2} • ${weekPanchangLine}`,
        all12RashifalData: {
          mode: "weekly",
          modeLabel: modeTitleLabel,
          dateHindi: cardDateStr2,
          vaarHindi: "",
          panchangLine: weekPanchangLine,
          festivalName: void 0,
          tithiName: cleanTithiLabel,
          items: items2
        },
        fileNameSlug: `all-12-rashifal-weekly-${w0?.weekSpan.weekStartDateKey || targetWeeklyAnchor.dateKey}`
      };
    }
    const mod = await __vitePreload(() => import("./monthlyRashifalEngine-Dn0LNh4n.js"), true ? __vite__mapDeps([5,1,2,3]) : void 0);
    const all12 = mod.generateAll12MonthlyRashifal({
      year: targetMonthlyPeriod.year,
      month: targetMonthlyPeriod.month,
      location: activeForecastLoc
    });
    const firstOk = Object.values(all12).find((r) => r.status === "ok");
    const m0 = firstOk?.status === "ok" ? firstOk.data : null;
    const items = TWELVE_RASHIS.map((rItem) => {
      const res = all12[rItem.id];
      const m = res?.status === "ok" ? res.data : null;
      return {
        rashiKey: rItem.id,
        rashiNameHi: rItem.hindiName,
        rashiNameEn: rItem.englishName,
        overallScore: m?.scores.overall || 78,
        summaryHi: buildMahapostSummary(m?.monthlyOverviewHi, m?.remedy?.lifestyleTipHi, m?.sections.careerHi),
        luckyNumber: (m?.luckyAttributes.luckyNumbersDisplay || "3").split(",")[0].trim(),
        luckyColor: (m?.luckyAttributes.luckyColorHi || "पीला").split(/[,/•]/)[0].trim()
      };
    });
    const cardDateStr = m0?.monthSpan.monthLabelHi || targetMonthLabelFallbackHi;
    const monthPanchangLine = `${targetMonthHinduMaasInfo.labelHi} • संवत ${targetMonthHinduMaasInfo.vikramSamvat}`;
    return {
      ...fallbackAll12CardPayload,
      subtitle: `${cardDateStr} • ${monthPanchangLine}`,
      all12RashifalData: {
        mode: "monthly",
        modeLabel: modeTitleLabel,
        dateHindi: cardDateStr,
        vaarHindi: "",
        panchangLine: monthPanchangLine,
        festivalName: void 0,
        tithiName: cleanTithiLabel,
        items
      },
      fileNameSlug: `all-12-rashifal-monthly-${m0?.monthSpan.monthKey || `${targetMonthlyPeriod.year}-${String(targetMonthlyPeriod.month).padStart(2, "0")}`}`
    };
  }, [
    forecastMode,
    targetDailyDate.dateKey,
    targetWeeklyAnchor.dateKey,
    targetMonthlyPeriod.year,
    targetMonthlyPeriod.month,
    activeForecastLoc,
    forecastData.dateRangeHi,
    todayDayPanchang.formattedDateHindi,
    todayDayPanchang.hinduMaas,
    todayDayPanchang.paksha,
    todayDayPanchang.tithiName,
    todayDayPanchang.nakshatra,
    todayDayPanchang.festivalName,
    dailyOut?.panchangContext.pakshaHi,
    dailyOut?.panchangContext.tithiHi,
    dailyOut?.panchangContext.nakshatraHi,
    vaarName,
    modeTitleLabel,
    targetMonthLabelFallbackHi,
    targetMonthHinduMaasInfo.labelHi,
    targetMonthHinduMaasInfo.vikramSamvat,
    targetWeekPanchangInfo.hinduMaas,
    targetWeekPanchangInfo.vikramSamvat,
    targetWeekPanchangInfo.shakaSamvat,
    fallbackAll12CardPayload
  ]);
  const selectedDateThemeOverride = reactExports.useMemo(() => {
    const preset = resolvePanchangRoyalThemeForDay(todayDayPanchang);
    return {
      id: preset.id,
      nameHi: preset.nameHi,
      bgBase: preset.bgBase,
      cardSurface: preset.cardSurface,
      accentPrimary: preset.accentPrimary,
      accentSecondary: preset.accentSecondary
    };
  }, [todayDayPanchang]);
  const resolveAll12BatchPayloads = reactExports.useCallback(async () => {
    const formatDDMMYYYY = (iso) => {
      const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec((iso || "").trim());
      return m ? `${m[3]}-${m[2]}-${m[1]}` : iso.replace(/[^0-9-]/g, "") || "today";
    };
    const tithiLabel = dailyOut?.panchangContext.tithiHi || todayDayPanchang.tithiName;
    const gocharNakshatraLabel = dailyOut?.panchangContext.nakshatraHi || todayDayPanchang.nakshatra;
    if (forecastMode === "daily") {
      const mod2 = await __vitePreload(() => import("./dailyRashifalEngine-JyJx31y8.js"), true ? __vite__mapDeps([0,1,2,3]) : void 0);
      const all122 = mod2.generateAll12DailyRashifal({
        date: targetDailyDate.dateKey,
        location: activeForecastLoc
      });
      const cardDateStr2 = forecastData.dateRangeHi || todayDayPanchang.formattedDateHindi;
      const payloads2 = TWELVE_RASHIS.map((rItem, idx) => {
        const res = all122[rItem.id];
        const d = res?.status === "ok" ? res.data : null;
        const cleanNaks = rItem.nakshatras.replace(/\s*\([^)]*\)/g, "").trim();
        const numsDisplay = d?.luckyAttributes.luckyNumbersDisplay || d?.luckyAttributes.luckyNumbers?.slice(0, 3).join(", ") || "3, 9";
        const lColor = d?.luckyAttributes.luckyColorHi || "स्वर्णिम पीला";
        const lDir = d?.luckyAttributes.favorableDirectionHi || "पूर्व दिशा";
        const lTime = d?.timeWindows.favorableWindowHi || cardLuckyTime || luckyTime;
        const cScore = d?.scores.career ?? 78;
        const wScore = d?.scores.finance ?? 76;
        const fScore = d?.scores.loveFamily ?? 79;
        const eScore = d?.scores.education ?? 77;
        const hScore = d?.scores.health ?? 78;
        const refined = refineRashifalSectionsForUi({
          rashiNumber: idx + 1,
          period: "daily",
          careerScore: cScore,
          careerText: d?.sections.careerHi || "कर्मक्षेत्र में संतुलित और सकारात्मक प्रगति के संकेत हैं।",
          wealthText: d?.sections.financeHi || "आर्थिक संतुलन और अनुशासित व्यय लाभकारी रहेगा।",
          familyText: d?.sections.loveFamilyHi || "परिवार और संबंधों में सौहार्द बना रहेगा।",
          educationText: d?.sections.educationHi || "अध्ययन व एकाग्रता में स्थिरता रहेगी।",
          healthText: d?.sections.healthHi || "संतुलित दिनचर्या से स्वास्थ्य अनुकूल रहेगा।",
          remedyText: d ? `${d.remedy.primaryRemedyHi} ${d.remedy.lifestyleTipHi}`.trim() : `राशि स्वामी ${rItem.swami} के बीज मंत्र का जप करें।`,
          lagnaMentalText: d?.sections.mindsetHi || ""
        });
        return {
          variant: "rashifal",
          badge: `${rItem.hindiName} राशिफल (${cardDateStr2})`,
          title: `${rItem.hindiName} राशि (${rItem.englishName}) — ${modeTitleLabel}`,
          subtitle: `स्वामी: ${rItem.swami} • ${rItem.element} • राशि नक्षत्र: ${cleanNaks}`,
          dateOrLocation: `शुभ अंक: ${numsDisplay} • रंग: ${lColor}`,
          rashifalData: {
            mode: "daily",
            rashiName: rItem.hindiName,
            rashiEn: rItem.englishName,
            symbol: rItem.symbol,
            swami: rItem.swami,
            element: rItem.element,
            nakshatra: cleanNaks,
            todayGocharNakshatra: d?.panchangContext.nakshatraHi || gocharNakshatraLabel,
            dateHindi: cardDateStr2,
            vaarHindi: vaarName,
            tithiName: d?.panchangContext.tithiHi || tithiLabel,
            festivalName: todayDayPanchang.festivalName || void 0,
            modeLabel: modeTitleLabel,
            careerScore: cScore,
            wealthScore: wScore,
            familyScore: fScore,
            educationScore: eScore,
            healthScore: hScore,
            careerSummary: refined.careerText,
            wealthFamilySummary: `${refined.wealthText} ${refined.familyText}`,
            remedySummary: refined.remedyText,
            luckyNumber: numsDisplay,
            luckyColor: lColor,
            luckyDirection: lDir,
            luckyTime: lTime,
            ratna: rItem.ratna,
            gocharNote: d?.moonTransit.sandhiSplit.summaryHi || `${rItem.hindiName} राशि दैनिक गोचर`
          },
          highlights: [
            { label: "करियर एवं धन योग", value: `करियर: ${cScore}% | धन: ${wScore}%` },
            { label: "परिवार व शिक्षा", value: `परिवार: ${fScore}% | शिक्षा: ${eScore}%` },
            { label: "शुभ समय", value: `${lTime} • ${lDir}` },
            { label: "वैदिक उपाय", value: refined.remedyText }
          ],
          message: refined.careerText,
          shareUrl: activeCanonicalShareUrl,
          fileNameSlug: `${rItem.id}-daily-rashifal-${targetDailyDate.dateKey}`
        };
      });
      return {
        payloads: payloads2,
        zipDateDDMMYYYY: formatDDMMYYYY(targetDailyDate.dateKey)
      };
    }
    if (forecastMode === "weekly") {
      const mod2 = await __vitePreload(() => import("./weeklyRashifalEngine-Bt9CVUst.js"), true ? __vite__mapDeps([4,1,2,3]) : void 0);
      const all122 = mod2.generateAll12WeeklyRashifal({
        anchorDate: targetWeeklyAnchor.dateKey,
        location: activeForecastLoc
      });
      const firstOk2 = Object.values(all122).find((r) => r.status === "ok");
      const w0 = firstOk2?.status === "ok" ? firstOk2.data : null;
      const cardDateStr2 = w0?.weekSpan.rangeLabelHi || forecastData.dateRangeHi || todayDayPanchang.formattedDateHindi;
      const weekSlug = w0?.weekSpan.weekStartDateKey || targetWeeklyAnchor.dateKey;
      const payloads2 = TWELVE_RASHIS.map((rItem, idx) => {
        const res = all122[rItem.id];
        const w = res?.status === "ok" ? res.data : null;
        const cleanNaks = rItem.nakshatras.replace(/\s*\([^)]*\)/g, "").trim();
        const numsDisplay = w?.luckyAttributes.luckyNumbersDisplay || w?.luckyAttributes.luckyNumbers?.slice(0, 3).join(", ") || "3, 9";
        const lColor = w?.luckyAttributes.luckyColorHi || "स्वर्णिम पीला";
        const lDir = w?.luckyAttributes.favorableDirectionHi || "पूर्व दिशा";
        const favDaysHi = w?.favorableDays.map((d) => `${d.weekdayHi} (${d.shortDateHi})`).join(", ") || "संपूर्ण सप्ताह संतुलित";
        const cScore = w?.scores.career ?? 78;
        const wScore = w?.scores.finance ?? 76;
        const fScore = w?.scores.loveFamily ?? 79;
        const eScore = w?.scores.education ?? 77;
        const hScore = w?.scores.health ?? 78;
        const refined = refineRashifalSectionsForUi({
          rashiNumber: idx + 1,
          period: "weekly",
          careerScore: cScore,
          careerText: w?.sections.careerHi || "इस सप्ताह करियर में योजनाबद्ध प्रयासों से सफलता मिलेगी।",
          wealthText: w?.sections.financeHi || "आर्थिक पक्ष में संतुलन और बचत पर ध्यान लाभप्रद रहेगा।",
          familyText: w?.sections.loveFamilyHi || "पारिवारिक सहयोग और आपसी संवाद मधुर रहेगा।",
          educationText: w?.sections.educationHi || "अध्ययन में निरंतरता बनाए रखें।",
          healthText: w?.sections.healthHi || "नियमित दिनचर्या से स्वास्थ्य स्थिर रहेगा।",
          remedyText: w ? `${w.remedy.primaryRemedyHi} ${w.remedy.lifestyleTipHi}`.trim() : `राशि स्वामी ${rItem.swami} के मंत्र का जप करें।`,
          lagnaMentalText: w?.mentalOutlookHi || ""
        });
        return {
          variant: "rashifal",
          badge: `${rItem.hindiName} राशिफल (${cardDateStr2})`,
          title: `${rItem.hindiName} राशि (${rItem.englishName}) — ${modeTitleLabel}`,
          subtitle: `स्वामी: ${rItem.swami} • ${rItem.element} • राशि नक्षत्र: ${cleanNaks}`,
          dateOrLocation: `शुभ अंक: ${numsDisplay} • रंग: ${lColor}`,
          rashifalData: {
            mode: "weekly",
            rashiName: rItem.hindiName,
            rashiEn: rItem.englishName,
            symbol: rItem.symbol,
            swami: rItem.swami,
            element: rItem.element,
            nakshatra: cleanNaks,
            dateHindi: cardDateStr2,
            vaarHindi: vaarName,
            tithiName: tithiLabel,
            festivalName: todayDayPanchang.festivalName || void 0,
            modeLabel: modeTitleLabel,
            careerScore: cScore,
            wealthScore: wScore,
            familyScore: fScore,
            educationScore: eScore,
            healthScore: hScore,
            careerSummary: refined.careerText,
            wealthFamilySummary: `${refined.wealthText} ${refined.familyText}`,
            remedySummary: refined.remedyText,
            luckyNumber: numsDisplay,
            luckyColor: lColor,
            luckyDirection: lDir,
            luckyTime: favDaysHi,
            ratna: rItem.ratna,
            gocharNote: w?.moonJourney.signsWithHousesLabelHi || `${rItem.hindiName} साप्ताहिक गोचर`
          },
          highlights: [
            { label: "करियर एवं धन योग", value: `करियर: ${cScore}% | धन: ${wScore}%` },
            { label: "परिवार व शिक्षा", value: `परिवार: ${fScore}% | शिक्षा: ${eScore}%` },
            { label: "सप्ताह के शुभ दिवस", value: `${favDaysHi} • ${lDir}` },
            { label: "सप्ताह का वैदिक उपाय", value: refined.remedyText }
          ],
          message: refined.careerText,
          shareUrl: activeCanonicalShareUrl,
          fileNameSlug: `${rItem.id}-weekly-rashifal-${weekSlug}`
        };
      });
      return {
        payloads: payloads2,
        zipDateDDMMYYYY: formatDDMMYYYY(weekSlug)
      };
    }
    const mod = await __vitePreload(() => import("./monthlyRashifalEngine-Dn0LNh4n.js"), true ? __vite__mapDeps([5,1,2,3]) : void 0);
    const all12 = mod.generateAll12MonthlyRashifal({
      year: targetMonthlyPeriod.year,
      month: targetMonthlyPeriod.month,
      location: activeForecastLoc
    });
    const firstOk = Object.values(all12).find((r) => r.status === "ok");
    const m0 = firstOk?.status === "ok" ? firstOk.data : null;
    const cardDateStr = m0?.monthSpan.monthLabelHi || targetMonthLabelFallbackHi;
    const monthKey = m0?.monthSpan.monthKey || `${targetMonthlyPeriod.year}-${String(targetMonthlyPeriod.month).padStart(2, "0")}`;
    const payloads = TWELVE_RASHIS.map((rItem, idx) => {
      const res = all12[rItem.id];
      const m = res?.status === "ok" ? res.data : null;
      const cleanNaks = rItem.nakshatras.replace(/\s*\([^)]*\)/g, "").trim();
      const numsDisplay = m?.luckyAttributes.luckyNumbersDisplay || m?.luckyAttributes.luckyNumbers?.slice(0, 3).join(", ") || "3, 9";
      const lColor = m?.luckyAttributes.luckyColorHi || "स्वर्णिम पीला";
      const lDir = m?.luckyAttributes.favorableDirectionHi || "पूर्व दिशा";
      const favDatesHi = m?.favorableDatesHi.join(", ") || "शुक्ल पक्ष व मध्य मास अनुकूल";
      const cScore = m?.scores.career ?? 78;
      const wScore = m?.scores.finance ?? 76;
      const fScore = m?.scores.loveFamily ?? 79;
      const eScore = m?.scores.education ?? 77;
      const hScore = m?.scores.health ?? 78;
      const refined = refineRashifalSectionsForUi({
        rashiNumber: idx + 1,
        period: "monthly",
        careerScore: cScore,
        careerText: m?.sections.careerHi || "इस माह करियर में दीर्घकालिक स्थिरता और उन्नति के योग हैं।",
        wealthText: m?.sections.financeHi || "वित्तीय प्रबंधन और बचत से आर्थिक पक्ष मजबूत रहेगा।",
        familyText: m?.sections.loveFamilyHi || "परिवार में सामंजस्य और सुखद वातावरण रहेगा।",
        educationText: m?.sections.educationHi || "अध्ययन व प्रतियोगी परीक्षाओं में परिश्रम सफल होगा।",
        healthText: m?.sections.healthHi || "संयमित आहार-विहार से स्वास्थ्य उत्तम रहेगा।",
        remedyText: m ? `${m.remedy.primaryRemedyHi} ${m.remedy.lifestyleTipHi}`.trim() : `राशि स्वामी ${rItem.swami} के बीज मंत्र का जप करें।`,
        lagnaMentalText: m?.mentalOutlookHi || ""
      });
      return {
        variant: "rashifal",
        badge: `${rItem.hindiName} राशिफल (${cardDateStr})`,
        title: `${rItem.hindiName} राशि (${rItem.englishName}) — ${modeTitleLabel}`,
        subtitle: `स्वामी: ${rItem.swami} • ${rItem.element} • राशि नक्षत्र: ${cleanNaks}`,
        dateOrLocation: `शुभ अंक: ${numsDisplay} • रंग: ${lColor}`,
        rashifalData: {
          mode: "monthly",
          rashiName: rItem.hindiName,
          rashiEn: rItem.englishName,
          symbol: rItem.symbol,
          swami: rItem.swami,
          element: rItem.element,
          nakshatra: cleanNaks,
          dateHindi: cardDateStr,
          vaarHindi: vaarName,
          tithiName: tithiLabel,
          festivalName: todayDayPanchang.festivalName || void 0,
          modeLabel: modeTitleLabel,
          careerScore: cScore,
          wealthScore: wScore,
          familyScore: fScore,
          educationScore: eScore,
          healthScore: hScore,
          careerSummary: refined.careerText,
          wealthFamilySummary: `${refined.wealthText} ${refined.familyText}`,
          remedySummary: refined.remedyText,
          luckyNumber: numsDisplay,
          luckyColor: lColor,
          luckyDirection: lDir,
          luckyTime: favDatesHi,
          ratna: rItem.ratna,
          gocharNote: m?.sankranti.summaryHi || `${rItem.hindiName} मासिक गोचर`
        },
        highlights: [
          { label: "करियर एवं धन योग", value: `करियर: ${cScore}% | धन: ${wScore}%` },
          { label: "परिवार व शिक्षा", value: `परिवार: ${fScore}% | शिक्षा: ${eScore}%` },
          { label: "मासिक शुभ तिथियाँ", value: `${favDatesHi} • ${lDir}` },
          { label: "मास का विशेष वैदिक उपाय", value: refined.remedyText }
        ],
        message: refined.careerText,
        shareUrl: activeCanonicalShareUrl,
        fileNameSlug: `${rItem.id}-monthly-rashifal-${monthKey}`
      };
    });
    return {
      payloads,
      zipDateDDMMYYYY: `${String(targetMonthlyPeriod.month).padStart(2, "0")}-${targetMonthlyPeriod.year}`
    };
  }, [
    forecastMode,
    targetDailyDate.dateKey,
    targetWeeklyAnchor.dateKey,
    targetMonthlyPeriod.year,
    targetMonthlyPeriod.month,
    activeForecastLoc,
    forecastData.dateRangeHi,
    todayDayPanchang.formattedDateHindi,
    todayDayPanchang.tithiName,
    todayDayPanchang.nakshatra,
    todayDayPanchang.festivalName,
    dailyOut?.panchangContext.tithiHi,
    dailyOut?.panchangContext.nakshatraHi,
    vaarName,
    modeTitleLabel,
    cardLuckyTime,
    luckyTime,
    targetMonthLabelFallbackHi,
    activeCanonicalShareUrl
  ]);
  reactExports.useEffect(() => {
    setLivePageCardPayload("rashifal", liveRashifalCardPayload);
    return () => setLivePageCardPayload("rashifal", null);
  }, [liveRashifalCardPayload]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 sm:space-y-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#1a0f07] via-[#131b2e] to-[#1a0f07] border border-amber-500/50 p-4 sm:p-5 shadow-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3.5 min-w-0 flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: handleRingTempleBell,
            className: `w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-amber-500 via-yellow-400 to-amber-600 p-[2px] shadow-[0_0_20px_rgba(251,191,36,0.4)] flex-shrink-0 cursor-pointer transition-transform ${bellRinging ? "scale-110 ring-4 ring-yellow-300/60" : "hover:scale-105"}`,
            title: tr("मंदिर की घंटी एवं शंख ध्वनि बजाएं", "Ring Temple Bell & Shankh"),
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full h-full rounded-[14px] bg-[#1c0f06] flex flex-col items-center justify-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Bell,
                {
                  className: `w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 ${bellRinging ? "animate-bounce" : ""}`
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-bold text-amber-200 mt-0.5", children: tr("घंटी बजाएं", "Ring Bell") })
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-500/20 border border-amber-400/50 text-amber-200 text-[10px] sm:text-[11px] font-bold", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "w-3 h-3 text-yellow-400" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: forecastMode === "daily" ? tr("आज का वैदिक सुविचार एवं दैनिक दर्शन", "Today's Sacred Vedic Subhashit & Darshan") : forecastMode === "weekly" ? tr("साप्ताहिक पावन वैदिक सुभाषित एवं दर्शन", "Weekly Sacred Vedic Subhashit & Guidance") : tr("मासिक पावन वैदिक सुभाषित एवं दर्शन", "Monthly Sacred Vedic Subhashit & Guidance") })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-950/90 border border-emerald-500/50 text-emerald-300 text-[10px] sm:text-[11px] font-bold", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3 h-3 text-emerald-400" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr(`दैनिक साधना दिवस: #${streakInfo.streak}`, `Daily Sadhana Streak: #${streakInfo.streak}`) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm sm:text-base font-bold font-vedic text-yellow-300 mt-1.5 leading-snug", children: [
            "“",
            activeShloka.sanskrit,
            "”",
            forecastMode !== "weekly" && activeShloka.source && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] font-sans font-semibold text-amber-400/90", children: [
                "— ",
                activeShloka.source.replace(/\s*\(यजुर्वेदिक परंपरा\)/gu, "").trim()
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-amber-100/90 mt-0.5 leading-relaxed", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-amber-300", children: tr("भावार्थ:", "Meaning:") }),
            " ",
            activeShloka.meaning
          ] }),
          forecastMode === "daily" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 pt-2 border-t border-amber-500/25", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-amber-100/95 leading-relaxed", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-yellow-300", children: tr(`${dailySarvajanHitaya.headingHi}:`, `${dailySarvajanHitaya.headingEn}:`) }),
            " ",
            tr(dailySarvajanHitaya.remedyHi, dailySarvajanHitaya.remedyEn)
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 w-full lg:w-auto justify-end flex-shrink-0 border-t lg:border-t-0 border-amber-900/30 pt-2.5 lg:pt-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => {
              vedicAudio.playTempleBell(0.55);
              vedicAudio.toggleSpeakText(
                `पावन वैदिक सुभाषित। ${activeShloka.sanskrit}। भावार्थ: ${activeShloka.meaning}`,
                "daily-shloka-speech"
              );
            },
            className: `flex-1 sm:flex-initial px-3.5 py-2 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer transition-all ${activeSpeechId === "daily-shloka-speech" ? "bg-emerald-600 text-slate-950 border-emerald-300 shadow-lg" : "bg-amber-500/20 hover:bg-amber-500/30 border-amber-400/50 text-amber-200"}`,
            children: activeSpeechId === "daily-shloka-speech" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(VolumeX, { className: "w-3.5 h-3.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr("श्लोक रोकें", "Stop Shloka") })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Volume2, { className: "w-3.5 h-3.5 text-yellow-400" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr("श्लोक सुनें", "Listen Shloka") })
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: handleRingTempleBell,
            className: "flex-1 sm:flex-initial px-3.5 py-2 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-400/50 text-amber-200 text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer transition-all",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "w-3.5 h-3.5 text-yellow-400" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr("शंख व घंटी ध्वनि", "Shankh & Bell") })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: onOpenMantraJaap,
            className: "flex-1 sm:flex-initial px-3.5 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-yellow-400 hover:to-amber-400 text-slate-950 text-xs font-extrabold flex items-center justify-center gap-1.5 shadow-md cursor-pointer transition-all",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "w-3.5 h-3.5 text-slate-950" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr("दैनिक 108 जप करें", "Daily 108 Jaap") })
            ]
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#141c2f] via-[#0e1525] to-[#1a1008] border-2 border-amber-500/50 p-4 sm:p-6 shadow-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col lg:flex-row lg:items-center justify-between gap-3 border-b border-amber-800/40 pb-4 mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "p-1.5 rounded-lg bg-amber-500/20 text-amber-400 border border-amber-500/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-4 h-4 fill-amber-400" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(VedicTripleCheckBadge, { validation: rashifalValidation, size: "sm", label: "३-स्तरीय वैदिक गोचर सत्यापन" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-lg sm:text-2xl font-extrabold font-vedic text-amber-100", children: (() => {
              const displayName = currentUser?.name || getActiveProfile()?.name;
              if (language === "en" || language === "hinglish") {
                return displayName && isViewingOwnModeRashi ? `${displayName}'s ${displayRashiName} — ${modeTitleLabel}` : `${displayRashiName} — ${modeTitleLabel}`;
              }
              if (displayName && isViewingOwnModeRashi) {
                return `${displayName} जी की ${currentRashi.hindiName} राशि का ${modeTitleLabel}`;
              }
              if (forecastMode === "daily") {
                return dailyOffsetDays === 0 ? `आज का ${currentRashi.hindiName} राशिफल (${currentRashi.englishName} Rashifal) — ${modeTitleLabel}` : `${currentRashi.hindiName} राशिफल (${currentRashi.englishName} Rashifal) — ${modeTitleLabel}`;
              }
              return `${currentRashi.hindiName} राशिफल (${currentRashi.englishName} Rashifal) — ${modeTitleLabel}`;
            })() })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-amber-300/85 mt-1", children: (() => {
            const dailyPrimarySamvat = resolvePrimarySamvatsaraForLocation(todayDayPanchang, activeForecastLoc);
            const displayLocHi = resolveHindiCityDisplayName(activeForecastLoc.hindiName);
            if (forecastMode === "daily") {
              const pakshaDisplay = dailyOut?.panchangContext.pakshaHi || todayDayPanchang.paksha;
              const rawTithiDisplay = dailyOut?.panchangContext.tithiHi || todayDayPanchang.tithiName;
              const maasBase = (todayDayPanchang.hinduMaas || "").replace(/\s*मास\s*$/u, "").trim();
              const cleanTithiDisplay = rawTithiDisplay.replace(maasBase ? new RegExp(`^${maasBase}(?:\\s*मास)?\\s+`, "u") : /^$/, "").replace(/^(?:शुक्ल|कृष्ण)(?:\s+पक्ष)?\s+/u, "").trim();
              return localizeVedicText(
                `${todayFormatted} • ${displayLocHi} • ${dailyPrimarySamvat.headerLineHi} • ${todayDayPanchang.hinduMaas}, ${pakshaDisplay} ${cleanTithiDisplay} • ${tr("नक्षत्र:", "Nakshatra:")} ${dailyOut?.panchangContext.nakshatraHi || todayDayPanchang.nakshatra} • ${tr("चन्द्र राशि:", "Moon Sign:")} ${dailyOut?.moonTransit.primarySignNameHi || todayDayPanchang.chandraRashi} • ${tr("लाहिड़ी अयनांश:", "Lahiri Ayanamsa:")} ${activeAyanamshaDMS}`
              );
            }
            if (forecastMode === "weekly") {
              return localizeVedicText(
                `अवधि (सोम–रवि): ${weeklyOut?.weekSpan.rangeLabelHi || forecastData.dateRangeHi} • ${displayLocHi} • ${tr("चन्द्र गोचर:", "Moon Transit:")} ${weeklyOut?.moonJourney.signsTransitedLabelHi || ""} • ${tr("लाहिड़ी अयनांश:", "Lahiri Ayanamsa:")} ${activeAyanamshaDMS}`
              );
            }
            return localizeVedicText(
              `मास: ${monthlyOut?.monthSpan.monthLabelHi || targetMonthLabelFallbackHi} • ${displayLocHi} • ${monthlyOut?.sankranti.summaryHi || ""} • ${tr("लाहिड़ी अयनांश:", "Lahiri Ayanamsa:")} ${activeAyanamshaDMS}`
            );
          })() }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex flex-wrap items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center bg-slate-950/95 p-1 rounded-xl border border-amber-500/50 shadow-inner", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    try {
                      vedicAudio.playClickSpark(0.2);
                    } catch {
                    }
                    setCalculationViewingMode("astronomical");
                    setCalcViewingMode("astronomical");
                    if (userDobRashi) {
                      setSelectedRashiId(userDobRashi.id);
                      try {
                        localStorage.setItem(FAVORITE_RASHI_STORAGE_KEY, userDobRashi.id);
                      } catch {
                      }
                    }
                  },
                  className: `px-2.5 py-1 rounded-lg text-[11px] font-extrabold transition-all cursor-pointer flex items-center gap-1 ${calcViewingMode === "astronomical" ? "bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 shadow" : "text-amber-200/80 hover:text-yellow-300"}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Telescope, { className: "w-3.5 h-3.5 shrink-0", strokeWidth: 1.5 }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: userDobRashi ? tr(
                      `जन्मांक / कुंडली अनुसार (${userDobRashi.hindiName})`,
                      `By Birth Chart (${userDobRashi.englishName})`
                    ) : tr("जन्मांक / जन्म कुंडली", "By Birth Chart") })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    try {
                      vedicAudio.playClickSpark(0.2);
                    } catch {
                    }
                    setCalculationViewingMode("name_rashi");
                    setCalcViewingMode("name_rashi");
                    if (userNameRashi) {
                      setSelectedRashiId(userNameRashi.id);
                      try {
                        localStorage.setItem(FAVORITE_RASHI_STORAGE_KEY, userNameRashi.id);
                      } catch {
                      }
                    }
                  },
                  className: `px-2.5 py-1 rounded-lg text-[11px] font-extrabold transition-all cursor-pointer flex items-center gap-1 ${calcViewingMode === "name_rashi" ? "bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 shadow" : "text-amber-200/80 hover:text-yellow-300"}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Type, { className: "w-3.5 h-3.5 shrink-0", strokeWidth: 1.5 }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: userNameRashi ? tr(
                      `नाम राशि अनुसार (${userNameRashi.hindiName})`,
                      `By Name Rashi (${userNameRashi.englishName})`
                    ) : tr("प्रचलित नाम राशि", "By Name Rashi") })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-950/90 border border-amber-500/50 text-amber-200 text-[11px] font-bold", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Compass, { className: "w-3.5 h-3.5 text-yellow-400" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: userActiveModeRashi ? !isViewingOwnModeRashi ? tr(
                `चयनित राशि: ${currentRashi.hindiName} (${currentRashi.englishName}) • आपकी ${calcViewingMode === "name_rashi" ? "नाम" : "जन्म"} राशि: ${userActiveModeRashi.hindiName}`,
                `Selected Rashi: ${currentRashi.englishName} • Your ${calcViewingMode === "name_rashi" ? "Name" : "Birth"} Rashi: ${userActiveModeRashi.englishName}`
              ) : calcViewingMode === "name_rashi" ? tr(
                `नाम '${userProfileName}' आधारित नाम राशि गोचर (${currentRashi.hindiName})`,
                `Name Rashi Transit based on '${userProfileName}' (${currentRashi.englishName})`
              ) : tr(
                `जन्मांक (DOB विवरण) आधारित शुद्ध चंद्र राशि गोचर (${currentRashi.hindiName})`,
                `Pure Moon Sign Transit based on Birth Details (${currentRashi.englishName})`
              ) : tr(
                `चयनित राशि: ${currentRashi.hindiName} (${currentRashi.englishName}) • ${forecastMode === "daily" ? "दैनिक" : forecastMode === "weekly" ? "साप्ताहिक" : "मासिक"} गोचर फलादेश`,
                `Selected: ${currentRashi.englishName} (${currentRashi.hindiName}) • ${forecastMode === "daily" ? "Daily" : forecastMode === "weekly" ? "Weekly" : "Monthly"} Transit Forecast`
              ) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-start lg:items-end gap-2 self-start lg:self-center flex-shrink-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center bg-slate-950/90 p-1 rounded-2xl border border-amber-500/50 shadow-inner", children: [
            { id: "daily", label: tr("दैनिक राशिफल", "Daily Horoscope"), Icon: Sun },
            { id: "weekly", label: tr("साप्ताहिक राशिफल", "Weekly Horoscope"), Icon: Calendar },
            { id: "monthly", label: tr("मासिक राशिफल", "Monthly Horoscope"), Icon: Moon }
          ].map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => {
                setForecastMode(tab.id);
                scrollToResultById("selected-rashi-details-card", tab.label, 100);
              },
              className: `px-3 py-1.5 rounded-xl text-xs font-extrabold transition-all cursor-pointer inline-flex items-center gap-1.5 ${forecastMode === tab.id ? "bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 shadow-md" : "text-amber-200/80 hover:text-yellow-300"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(tab.Icon, { className: "w-3.5 h-3.5 shrink-0", strokeWidth: 1.5 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tab.label })
              ]
            },
            tab.id
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex flex-wrap items-center gap-1 bg-slate-950/90 p-1 rounded-xl border border-amber-500/40 shadow-inner", children: forecastMode === "daily" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setDailyOffsetDays((d) => d - 1),
                className: "p-1 rounded-lg text-amber-300 hover:bg-amber-500/20 cursor-pointer transition-colors",
                title: tr("एक दिन पहले", "Previous Day"),
                "aria-label": "Previous Day",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-3.5 h-3.5" })
              }
            ),
            [
              { offset: -1, label: tr("कल", "Yesterday") },
              { offset: 0, label: tr("आज", "Today") },
              { offset: 1, label: tr("आने वाला कल", "Tomorrow") }
            ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setDailyOffsetDays(item.offset),
                className: `px-2.5 py-1 rounded-lg text-[11px] font-extrabold transition-all cursor-pointer ${dailyOffsetDays === item.offset ? "bg-amber-500/30 border border-amber-400/70 text-yellow-200 shadow-sm" : "text-amber-200/75 hover:text-yellow-300"}`,
                children: item.label
              },
              item.offset
            )),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setDailyOffsetDays((d) => d + 1),
                className: "p-1 rounded-lg text-amber-300 hover:bg-amber-500/20 cursor-pointer transition-colors",
                title: tr("एक दिन आगे", "Next Day"),
                "aria-label": "Next Day",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3.5 h-3.5" })
              }
            )
          ] }) : forecastMode === "weekly" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  if (customWeeklyDateKey) {
                    setCustomWeeklyDateKey(shiftDateKeyByDays(customWeeklyDateKey, -7).dateKey);
                  } else {
                    setWeeklyOffsetWeeks((w) => w - 1);
                  }
                },
                className: "p-1 rounded-lg text-amber-300 hover:bg-amber-500/20 cursor-pointer transition-colors",
                title: tr("पिछला सप्ताह", "Previous Week"),
                "aria-label": "Previous Week",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-3.5 h-3.5" })
              }
            ),
            [
              { offset: -1, label: tr("पिछला सप्ताह", "Last Week") },
              { offset: 0, label: tr("यह सप्ताह", "This Week") },
              { offset: 1, label: tr("अगला सप्ताह", "Next Week") }
            ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  setCustomWeeklyDateKey(null);
                  setWeeklyOffsetWeeks(item.offset);
                },
                className: `px-2.5 py-1 rounded-lg text-[11px] font-extrabold transition-all cursor-pointer ${!customWeeklyDateKey && weeklyOffsetWeeks === item.offset ? "bg-amber-500/30 border border-amber-400/70 text-yellow-200 shadow-sm" : "text-amber-200/75 hover:text-yellow-300"}`,
                children: item.label
              },
              item.offset
            )),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  if (customWeeklyDateKey) {
                    setCustomWeeklyDateKey(shiftDateKeyByDays(customWeeklyDateKey, 7).dateKey);
                  } else {
                    setWeeklyOffsetWeeks((w) => w + 1);
                  }
                },
                className: "p-1 rounded-lg text-amber-300 hover:bg-amber-500/20 cursor-pointer transition-colors",
                title: tr("अगला सप्ताह", "Next Week"),
                "aria-label": "Next Week",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3.5 h-3.5" })
              }
            )
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setMonthlyOffsetMonths((m) => m - 1),
                className: "p-1 rounded-lg text-amber-300 hover:bg-amber-500/20 cursor-pointer transition-colors",
                title: tr("पिछला माह", "Previous Month"),
                "aria-label": "Previous Month",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-3.5 h-3.5" })
              }
            ),
            [
              { offset: -1, label: tr("पिछला माह", "Last Month") },
              { offset: 0, label: tr("यह माह", "This Month") },
              { offset: 1, label: tr("अगला माह", "Next Month") }
            ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setMonthlyOffsetMonths(item.offset),
                className: `px-2.5 py-1 rounded-lg text-[11px] font-extrabold transition-all cursor-pointer ${monthlyOffsetMonths === item.offset ? "bg-amber-500/30 border border-amber-400/70 text-yellow-200 shadow-sm" : "text-amber-200/75 hover:text-yellow-300"}`,
                children: item.label
              },
              item.offset
            )),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setMonthlyOffsetMonths((m) => m + 1),
                className: "p-1 rounded-lg text-amber-300 hover:bg-amber-500/20 cursor-pointer transition-colors",
                title: tr("अगला माह", "Next Month"),
                "aria-label": "Next Month",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3.5 h-3.5" })
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex flex-wrap items-center gap-1.5 bg-slate-950/90 px-2 py-1 rounded-xl border border-amber-500/40 shadow-inner", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex flex-nowrap items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                VedicDateInput,
                {
                  value: draftDateKey,
                  minYear: 1600,
                  maxYear: 2500,
                  variant: "dark",
                  ariaLabel: tr("राशिफल तिथि चयन (1600–2500 ई.)", "Rashifal Date Picker (1600–2500 AD)"),
                  onChange: (isoDate) => {
                    if (isoDate) setDraftDateKey(isoDate);
                  },
                  onEnterPress: (iso) => handleApplyDraftDate(iso)
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => handleApplyDraftDate(),
                  className: "h-8 px-2.5 rounded-lg bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-slate-950 text-xs font-extrabold shadow-sm cursor-pointer transition-colors shrink-0",
                  title: tr("चयनित तिथि का राशिफल देखें", "View Rashifal for selected date"),
                  children: tr("देखें", "View")
                }
              )
            ] }),
            (forecastMode === "daily" && dailyOffsetDays !== 0 || forecastMode === "weekly" && (weeklyOffsetWeeks !== 0 || Boolean(customWeeklyDateKey)) || forecastMode === "monthly" && monthlyOffsetMonths !== 0) && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => {
                  setDailyOffsetDays(0);
                  setWeeklyOffsetWeeks(0);
                  setCustomWeeklyDateKey(null);
                  setMonthlyOffsetMonths(0);
                },
                className: "h-8 px-2 rounded-lg bg-amber-500/20 hover:bg-amber-500/35 border border-amber-400/60 text-yellow-200 text-[11px] font-extrabold inline-flex items-center gap-1 cursor-pointer transition-colors shrink-0",
                title: tr("आज की वास्तविक तिथि पर लौटें", "Return to Today"),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "w-3 h-3 shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr("आज पर लौटें", "Return to Today") })
                ]
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-2 mb-4", children: TWELVE_RASHIS.map((rashi, rIdx) => {
        const isSelected = rashi.id === selectedRashiId;
        const cornerBulbColor = festivePalette.bulbs[rIdx % 4];
        const phaseClass = rIdx % 3 === 0 ? "festive-bulb-a" : rIdx % 3 === 1 ? "festive-bulb-b" : "festive-bulb-c";
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => {
              handleSelectRashi(rashi.id);
              scrollToResultById("selected-rashi-details-card", `${rashi.hindiName} सम्पूर्ण राशिफल`, 100);
            },
            className: `relative overflow-hidden p-2 sm:p-2.5 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-1 ${isSelected ? "bg-gradient-to-b from-amber-400 via-amber-500 to-yellow-500 text-slate-950 border-yellow-200 font-extrabold shadow-[0_0_15px_rgba(251,191,36,0.4)] scale-[1.03]" : "bg-slate-900/85 hover:bg-amber-950/60 text-amber-100 border-amber-800/40 hover:border-amber-500/60 font-semibold"}`,
            children: [
              areLightsActive && /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: isSelected ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  "aria-hidden": "true",
                  className: "absolute top-0.5 inset-x-2 flex items-center justify-between pointer-events-none",
                  children: [0, 1, 2].map((bIdx) => {
                    const bc = festivePalette.bulbs[(rIdx + bIdx) % 4];
                    return /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "w-1.5 h-1.5 rounded-full festive-bulb-a",
                        style: {
                          backgroundColor: bc,
                          boxShadow: `0 0 6px 1px ${bc}`
                        }
                      },
                      bIdx
                    );
                  })
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  "aria-hidden": "true",
                  className: `absolute top-1 right-1 w-1.5 h-1.5 rounded-full pointer-events-none ${phaseClass}`,
                  style: {
                    backgroundColor: cornerBulbColor,
                    boxShadow: `0 0 5px 1px ${cornerBulbColor}`
                  }
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                VedicRashiIcon,
                {
                  rashi: rashi.id,
                  className: `w-5 h-5 sm:w-6 sm:h-6 shrink-0 ${isSelected ? "text-slate-950" : "text-amber-300"}`
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs sm:text-sm leading-tight", children: language === "en" || language === "hinglish" ? rashi.englishName : rashi.hindiName }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: `text-[9px] leading-none hidden sm:block ${isSelected ? "text-slate-900 font-bold" : "text-slate-400"}`,
                  children: language === "en" || language === "hinglish" ? rashi.hindiName : rashi.swami.split(" ")[0]
                }
              )
            ]
          },
          rashi.id
        );
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          id: "selected-rashi-details-card",
          className: "relative overflow-hidden mt-4 rounded-2xl bg-slate-950/90 border border-amber-500/45 p-4 sm:p-6 pt-6 sm:pt-7 space-y-5 scroll-mt-24",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardFestiveLightStrip, { variant: "banner", archCount: 8 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap items-center justify-between gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/50 text-amber-200 text-[11px] font-extrabold", children: engineLoading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-3.5 h-3.5 text-yellow-300 animate-spin shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr("वैदिक दृक-गणित गोचर गणना तैयार हो रही है...", "Calculating Drik-Ganita Vedic transit...") })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3.5 h-3.5 text-amber-300 shrink-0", strokeWidth: 1.5 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: forecastData.headlineHi || "चयनित राशि का सम्पूर्ण फलादेश यहाँ नीचे तैयार है" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-3.5 h-3.5 text-amber-300 shrink-0", strokeWidth: 1.5 })
            ] }) }) }),
            activeEngineRes?.status === "unavailable" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-2xl bg-rose-950/50 border border-rose-500/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2.5 text-xs sm:text-sm text-rose-100", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-5 h-5 text-rose-400 shrink-0 mt-0.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-extrabold text-rose-200", children: tr("राशिफल अस्थायी रूप से अनुपलब्ध है", "Horoscope Temporarily Unavailable") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-0.5 text-rose-100/90", children: activeEngineRes.userMessageHi })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => setEngineRetryTick((t) => t + 1),
                  className: "px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-yellow-400 text-slate-950 text-xs font-extrabold inline-flex items-center gap-1.5 shrink-0 cursor-pointer",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "w-3.5 h-3.5" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr("पुनः प्रयास करें", "Retry") })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-amber-900/40 pb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-amber-500/30 to-yellow-500/10 border-2 border-amber-400/60 flex items-center justify-center text-yellow-300 shadow-inner flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(VedicRashiIcon, { rashi: currentRashi.id, className: "w-8 h-8 sm:w-9 sm:h-9 text-yellow-300" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-xl sm:text-2xl font-extrabold font-vedic text-amber-100", children: [
                      displayRashiName,
                      " — ",
                      modeTitleLabel
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] px-2.5 py-0.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 font-bold", children: [
                      tr("राशि स्वामी:", "Sign Lord:"),
                      " ",
                      localizeVedicText(currentRashi.swami)
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] px-2.5 py-0.5 rounded-full bg-emerald-950/90 border border-emerald-500/40 text-emerald-300 font-bold", children: [
                      currentRashi.element,
                      " • ",
                      currentRashi.nature
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-amber-200/90", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-amber-400", children: tr("नामाक्षर:", "Name Letters:") }),
                    " ",
                    currentRashi.letters,
                    "  | ",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-amber-400", children: tr("नक्षत्र एवं चरण:", "Nakshatras:") }),
                    " ",
                    localizeVedicText(currentRashi.nakshatras)
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-amber-300/85", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-yellow-300", children: tr("आराध्य देव:", "Ishta Devta:") }),
                    " ",
                    currentRashi.aradhyaDev,
                    "  | ",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-yellow-300", children: tr("शुभ रत्न:", "Lucky Gem:") }),
                    " ",
                    currentRashi.ratna,
                    " (",
                    currentRashi.dhatu,
                    ")  | ",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-yellow-300", children: tr("मित्र राशियां:", "Friendly Signs:") }),
                    " ",
                    localizeVedicText(currentRashi.mitraRashi)
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 self-start lg:self-center flex-shrink-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      if (activeSpeechId !== "rashi-full-rashifal") {
                        vedicAudio.playTempleBell(0.55);
                      }
                      vedicAudio.toggleSpeakText(
                        `${currentRashi.hindiName} राशि का ${modeTitleLabel}। राशि स्वामी ${currentRashi.swami} हैं। ${forecastData.chandraGochar?.gocharSummary || chandraGochar.gocharSummary} व्यापार एवं करियर: ${careerText} आर्थिक लाभ: ${wealthText} पारिवारिक जीवन: ${familyText} अचूक वैदिक उपाय: ${remedyText}`,
                        "rashi-full-rashifal"
                      );
                    },
                    className: `px-3.5 py-2 rounded-xl border text-xs font-bold flex items-center gap-1.5 cursor-pointer transition-all ${activeSpeechId === "rashi-full-rashifal" ? "bg-emerald-500 text-slate-950 border-emerald-300 shadow-lg font-extrabold" : "bg-amber-500/20 hover:bg-amber-500/30 border-amber-400/50 text-amber-200"}`,
                    children: activeSpeechId === "rashi-full-rashifal" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(VolumeX, { className: "w-3.5 h-3.5" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr("राशिफल चल रहा है (रोकें)", "Playing Horoscope (Stop)") })
                    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Volume2, { className: "w-3.5 h-3.5 text-yellow-400" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr("राशिफल सुनें", "Listen Horoscope") })
                    ] })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => onAskPanditInChat(
                      `पण्डित जी, मेरी राशि ${currentRashi.hindiName} (${currentRashi.englishName}) है। ${modeTitleLabel} (${forecastData.dateRangeHi}), ग्रह गोचर (चन्द्र ${dailyOut?.moonTransit.sandhiSplit.hasSignChange && dailyOut.moonTransit.sandhiSplit.eveningHouse ? `${formatHindiHouseOrdinal(dailyOut.moonTransit.sandhiSplit.morningHouse)} व ${formatHindiHouseOrdinal(dailyOut.moonTransit.sandhiSplit.eveningHouse)}` : formatHindiHouseOrdinal(moonBhava)}, गुरु ${formatHindiHouseOrdinal(guruBhava)}, शनि ${formatHindiHouseOrdinal(shaniBhava)} भाव) के अनुसार मेरे करियर, धन, परिवार और भाग्योदय के लिए शास्त्रोक्त मार्गदर्शन व उपाय बताएं।`
                    ),
                    className: "px-3.5 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-yellow-400 hover:to-amber-400 text-slate-950 text-xs font-extrabold flex items-center gap-1.5 shadow-md cursor-pointer transition-all",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-3.5 h-3.5" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr("पण्डित जी से पूछें", "Ask Pandit Ji") })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  ShareableVedicCardButton,
                  {
                    payload: liveRashifalCardPayload,
                    resolveMahapostPayload: resolveAll12CardPayload,
                    resolveAll12BatchPayloads,
                    selectedDateThemeOverride,
                    buttonLabel: "इमेज कार्ड शेयर / डाउनलोड",
                    compact: true
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: async () => {
                      await shareProfessionalPostOnWhatsApp(fullSingleRashiPostText);
                      setSocialShareBanner(
                        `${currentRashi.hindiName} राशि का सम्पूर्ण 5-स्तरीय राशिफल WhatsApp पर शेयर के लिए तैयार है (तथा क्लिपबोर्ड में कॉपी भी हो गया है)!`
                      );
                    },
                    className: "px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-extrabold flex items-center gap-1.5 shadow-md cursor-pointer transition-all",
                    title: tr("WhatsApp पर पूरा राशिफल व लिंक शेयर करें", "Share Full Rashifal & Link on WhatsApp"),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { className: "w-3.5 h-3.5" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr("पूरा राशिफल WhatsApp", "Full WhatsApp Share") })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: async () => {
                      await shareProfessionalPostOnFacebook(
                        fullSingleRashiPostText,
                        activeCanonicalShareUrl
                      );
                      setSocialShareBanner(
                        tr(
                          `${currentRashi.hindiName} राशि का पूरा राशिफल आपके फोन में कॉपी (Copy) हो चुका है! अब खुले हुए Facebook बॉक्स में बस उंगली दबाकर 'Paste (पेस्ट)' कर दें — नीचे फोटो कार्ड अपने आप आ जाएगा!`,
                          `Full ${currentRashi.englishName} (${currentRashi.hindiName}) horoscope copied! Long-press and tap 'Paste' in the Facebook box that opens.`,
                          `${currentRashi.englishName} Rashi ka poora rashifal Copy ho gaya hai! Ab Facebook box mein Paste kar dein.`
                        )
                      );
                    },
                    className: "px-3.5 py-2 rounded-xl bg-[#1877F2] hover:bg-[#166fe5] text-white text-xs font-extrabold flex items-center gap-1.5 shadow-md cursor-pointer transition-all",
                    title: tr("Facebook पर पूरा राशिफल व लिंक पोस्ट करें", "Post Full Rashifal & Link on Facebook"),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "w-3.5 h-3.5 fill-current", viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr("पूरा राशिफल Facebook पोस्ट", "Full Facebook Post") })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: async () => {
                      await copyPostToClipboard(fullSingleRashiPostText);
                      setCopiedRashifalLink(true);
                      setCopiedFullPostMode("single");
                      setSocialShareBanner(
                        tr(
                          `${currentRashi.hindiName} राशि का पूरा राशिफल (5 स्तंभ, शुभ अंक, उपाय व लिंक सहित) कॉपी हो गया है! अब आप Facebook, WhatsApp या Instagram कहीं भी Paste कर सकते हैं।`,
                          `Full ${currentRashi.englishName} (${currentRashi.hindiName}) horoscope (5 pillars, lucky numbers, remedies & link) copied! Paste anywhere on WhatsApp, Facebook or Instagram.`,
                          `${currentRashi.englishName} Rashi ka poora rashifal copy ho gaya hai! Ab WhatsApp ya Facebook par Paste kar sakte hain.`
                        )
                      );
                      window.setTimeout(() => setCopiedRashifalLink(false), 3500);
                    },
                    className: "px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-amber-500/50 text-amber-200 text-xs font-bold flex items-center gap-1.5 cursor-pointer transition-all",
                    title: tr("इस राशि का पूरा राशिफल टेक्स्ट व लिंक कॉपी करें", "Copy full horoscope text & link"),
                    children: copiedRashifalLink ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3.5 h-3.5 text-emerald-400" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-300", children: tr("पूरा राशिफल कॉपी हुआ!", "Full Post Copied!") })
                    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "w-3.5 h-3.5 text-amber-400" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr("पूरा राशिफल कॉपी करें", "Copy Full Horoscope") })
                    ] })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      setSocialPostTab("all12");
                      setShowPostPreviewBox(true);
                      scrollToResultById("rashifal-professional-social-studio", "12 राशियों का महा-राशिफल पोस्ट स्टूडियो", 90);
                    },
                    className: "px-3 py-2 rounded-xl bg-gradient-to-r from-amber-700/80 via-yellow-600/80 to-amber-700/80 hover:from-amber-600 hover:to-yellow-500 border border-yellow-300/60 text-white text-xs font-extrabold flex items-center gap-1.5 shadow-md cursor-pointer transition-all",
                    title: `मेष से मीन सभी 12 राशियों का ${forecastMode === "daily" ? "दैनिक" : forecastMode === "weekly" ? "साप्ताहिक" : "मासिक"} पूरा राशिफल एक साथ Facebook/WhatsApp पर पोस्ट करें`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3.5 h-3.5 text-yellow-200" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr("12 राशियों का महा-पोस्ट", "All 12 Rashis Post") })
                    ]
                  }
                )
              ] })
            ] }),
            socialShareBanner && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3.5 rounded-2xl bg-gradient-to-r from-emerald-950/95 via-slate-900 to-amber-950/90 border-2 border-emerald-400/70 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 animate-fadeIn", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2.5 text-xs sm:text-sm font-bold text-emerald-200 leading-relaxed", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-5 h-5 text-emerald-400 shrink-0 mt-0.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: socialShareBanner })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => setSocialShareBanner(null),
                  className: "px-3 py-1 rounded-xl bg-slate-950/80 hover:bg-slate-800 border border-emerald-400/40 text-emerald-200 text-xs font-bold shrink-0 self-end sm:self-center cursor-pointer inline-flex items-center gap-1",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "समझ गया" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3.5 h-3.5", strokeWidth: 1.5 })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-2xl bg-gradient-to-r from-amber-950/55 via-slate-900/95 to-indigo-950/45 border border-amber-500/40 space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "w-4 h-4 text-yellow-400" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "text-xs sm:text-sm font-extrabold text-yellow-300 uppercase tracking-wider", children: forecastMode === "daily" ? tr(
                    `दैनिक चन्द्र गोचर एवं चन्द्रबल (${activeForecastLoc.hindiName}: ${todayFormatted})`,
                    `Daily Moon Transit & Chandrabal (${activeForecastLoc.name || activeForecastLoc.hindiName}: ${targetDailyDate.dateKey})`
                  ) : forecastMode === "weekly" ? tr(
                    `साप्ताहिक ग्रह गोचर एवं चन्द्र-पथ विश्लेषण (${weeklyOut?.weekSpan.rangeLabelHi || forecastData.dateRangeHi})`,
                    `Weekly Planetary Transit & Moon Path (${weeklyOut?.weekSpan.rangeLabelEn || forecastData.dateRangeEn})`
                  ) : tr(
                    `मासिक महा-गोचर एवं दीर्घकालिक पराशरी प्रभाव (${monthlyOut?.monthSpan.monthLabelHi || targetMonthLabelFallbackHi})`,
                    `Monthly Grand Transit & Parashari Influence (${monthlyOut?.monthSpan.monthLabelEn || targetMonthLabelFallbackHi})`
                  ) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap items-center gap-1.5", children: forecastMode === "daily" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-200 text-[11px] font-bold", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "w-3 h-3 text-amber-300", strokeWidth: 1.5 }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                      tr("चन्द्र", "Moon"),
                      ":",
                      " ",
                      dailyOut?.moonTransit.sandhiSplit.hasSignChange && dailyOut.moonTransit.sandhiSplit.eveningHouse ? language === "en" ? `${formatEnglishHouseOrdinal(dailyOut.moonTransit.sandhiSplit.morningHouse)} → ${formatEnglishHouseOrdinal(dailyOut.moonTransit.sandhiSplit.eveningHouse)} House` : `${formatHindiHouseOrdinal(dailyOut.moonTransit.sandhiSplit.morningHouse)} → ${formatHindiHouseOrdinal(dailyOut.moonTransit.sandhiSplit.eveningHouse)} भाव` : language === "en" ? `${formatEnglishHouseOrdinal(moonBhava)} House` : `${formatHindiHouseOrdinal(moonBhava)} भाव`
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "px-2.5 py-0.5 rounded-full bg-emerald-950/90 border border-emerald-500/40 text-emerald-300 text-[11px] font-bold", children: [
                    tr("चन्द्रबल", "Chandrabal"),
                    ": ",
                    localizeVedicText(dailyOut?.moonTransit.chandrabalaLabelHi || chandraGochar.chandrabal)
                  ] }),
                  dailyOut?.rashiTarabala && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "px-2.5 py-0.5 rounded-full bg-indigo-950/90 border border-indigo-400/40 text-indigo-200 text-[11px] font-bold", children: [
                    tr("नक्षत्र तारा (गोचर)", "Nakshatra Tara (Transit)"),
                    ": ",
                    localizeVedicText(dailyOut.rashiTarabala.summaryLineHi)
                  ] }),
                  isLoggedIn && isViewingOwnModeRashi && calcViewingMode === "astronomical" && userDobDetails.activeDashaSummaryHi && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "px-2.5 py-0.5 rounded-full bg-amber-950/90 border border-yellow-400/50 text-yellow-200 text-[11px] font-bold", children: [
                    tr("विंशोत्तरी दशा (चयनित तिथि):", "Vimshottari Dasha (Selected Date):"),
                    " ",
                    localizeVedicText(userDobDetails.activeDashaSummaryHi)
                  ] })
                ] }) : forecastMode === "weekly" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-yellow-300 text-[11px] font-bold", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "w-3 h-3 text-yellow-300", strokeWidth: 1.5 }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                      tr("चन्द्र गोचर:", "Moon Path:"),
                      " ",
                      localizeVedicText(weeklyOut?.moonJourney.signsTransitedLabelHi || "")
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-950/90 border border-emerald-500/40 text-emerald-300 text-[11px] font-bold", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3 h-3 text-emerald-300", strokeWidth: 1.5 }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                      tr("श्रेष्ठ चरण:", "Best Phase:"),
                      " ",
                      localizeVedicText(forecastData.weeklyBestPhaseHi || "")
                    ] })
                  ] }),
                  weeklyOut?.personalCoordination && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2.5 py-0.5 rounded-full bg-amber-950/90 border border-amber-400/45 text-amber-200 text-[11px] font-bold", children: localizeVedicText(weeklyOut.personalCoordination.badgeHi) })
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-yellow-500/20 border border-yellow-400/40 text-yellow-300 text-[11px] font-bold", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-3 h-3 text-yellow-300", strokeWidth: 1.5 }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                      tr("गुरु", "Jupiter"),
                      ": ",
                      language === "en" ? `${guruBhava}th House` : `${formatHindiHouseOrdinal(guruBhava)} भाव`
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-indigo-950/90 border border-indigo-400/40 text-indigo-300 text-[11px] font-bold", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Compass, { className: "w-3 h-3 text-indigo-300", strokeWidth: 1.5 }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                      tr("शनि", "Saturn"),
                      ": ",
                      language === "en" ? `${shaniBhava}th House` : `${formatHindiHouseOrdinal(shaniBhava)} भाव`
                    ] })
                  ] }),
                  monthlyOut?.sankranti.hasSankranti && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-purple-950/90 border border-purple-400/40 text-purple-300 text-[11px] font-bold", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "w-3 h-3 text-purple-300", strokeWidth: 1.5 }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                      monthlyOut.sankranti.toSignNameHi,
                      " संक्रांति (",
                      monthlyOut.sankranti.dateFormattedHi,
                      ")"
                    ] })
                  ] }),
                  monthlyOut?.personalCoordination && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2.5 py-0.5 rounded-full bg-amber-950/90 border border-amber-400/45 text-amber-200 text-[11px] font-bold", children: localizeVedicText(monthlyOut.personalCoordination.badgeHi) })
                ] }) })
              ] }),
              (() => {
                const saral = buildRashifalSaralArthaHi({
                  mode: forecastMode,
                  moonHouse: moonBhava,
                  chandrabalLabelHi: dailyOut?.moonTransit.chandrabalaLabelHi || chandraGochar.chandrabal,
                  tarabalSummaryHi: dailyOut?.rashiTarabala?.summaryLineHi || dailyOut?.tarabala?.taraNameHi || "",
                  careerScore,
                  wealthScore,
                  familyScore,
                  healthScore,
                  samvat: dailyOut?.panchangContext.samvat ?? Number(todayDayPanchang?.vikramSamvat || 2083),
                  tithiIndex: dailyOut?.panchangContext.tithiIndex ?? Number(todayDayPanchang?.tithiIndex || 1),
                  nakshatraIndex: dailyOut?.panchangContext.nakshatraIndex,
                  moonPada: dailyOut?.panchangContext.moonPada ?? 1,
                  yogaIndex: dailyOut?.panchangContext.yogaIndex,
                  tithiHi: dailyOut?.panchangContext.tithiHi || todayDayPanchang?.tithiName,
                  nakshatraHi: dailyOut?.panchangContext.nakshatraHi || todayDayPanchang?.nakshatra,
                  yogaHi: dailyOut?.panchangContext.yogaHi || todayDayPanchang?.yoga,
                  rashiNumber: Math.max(1, TWELVE_RASHIS.findIndex((r) => r.id === currentRashi.id) + 1)
                });
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  forecastMode === "daily" && (dailyOut?.rashiTarabala || dailyOut?.tarabala) && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-indigo-200/80 leading-snug", children: saral.tarabalHi }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs sm:text-sm text-amber-100/95 leading-relaxed", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { className: "text-amber-300", children: [
                      tr("शास्त्रोक्त गोचर फल", "Scriptural Transit Impact"),
                      " (",
                      modeTitleLabel,
                      "):"
                    ] }),
                    " ",
                    forecastMode === "daily" && dailyOut ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      language === "en" ? localizeVedicText(dailyOut.moonTransit.sandhiSplit.summaryHi) : dailyOut.moonTransit.sandhiSplit.summaryHi,
                      " ",
                      language === "en" ? localizeVedicText(dailyOut.summaryHi) : dailyOut.summaryHi
                    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: language === "en" ? localizeVedicText(transitImpactText) : transitImpactText })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-amber-200/75 leading-snug", children: saral.chandrabalGocharHi })
                ] });
              })(),
              forecastMode === "daily" && dailyOut?.moonTransit.sandhiSplit.hasSignChange && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 rounded-xl bg-indigo-950/50 border border-indigo-400/40 text-[11px] sm:text-xs text-indigo-100 leading-relaxed", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-yellow-300", children: tr("चन्द्र राशि परिवर्तन (संधि विभाजन):", "Intraday Moon Sign Change:") }),
                " ",
                dailyOut.moonTransit.sandhiSplit.summaryHi
              ] }),
              forecastMode === "weekly" && weeklyOut && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2.5 pt-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-2.5", children: weeklyOut.phases.map((phase) => {
                  const toneStyle = phase.tone === "FAVORABLE" ? "bg-emerald-950/35 border-emerald-500/40" : phase.tone === "CAUTION" ? "bg-rose-950/35 border-rose-500/40" : "bg-slate-900/75 border-amber-700/40";
                  const titleStyle = phase.tone === "FAVORABLE" ? "text-emerald-300" : phase.tone === "CAUTION" ? "text-rose-300" : "text-amber-300";
                  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-2.5 rounded-xl border ${toneStyle} space-y-1`, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[11px] font-extrabold ${titleStyle}`, children: phase.labelHi }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-amber-200/80 font-semibold", children: phase.daysSpanHi })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-amber-100/90 leading-relaxed", children: phase.guidanceHi })
                  ] }, phase.phaseId);
                }) }),
                weeklyOut.planetaryEvents.summaryNotesHi.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: weeklyOut.planetaryEvents.summaryNotesHi.slice(0, 4).map((note, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "span",
                  {
                    className: "px-2.5 py-1 rounded-lg bg-slate-900/90 border border-amber-500/35 text-[11px] text-amber-200 font-medium",
                    children: [
                      "• ",
                      note
                    ]
                  },
                  idx
                )) })
              ] }),
              forecastMode === "monthly" && monthlyOut && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2.5 pt-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5", children: monthlyOut.weekByWeekRoadmap.map((wk) => {
                  const toneStyle = wk.tone === "FAVORABLE" ? "bg-emerald-950/35 border-emerald-500/40" : wk.tone === "CAUTION" ? "bg-rose-950/35 border-rose-500/40" : "bg-slate-900/75 border-amber-700/40";
                  const titleStyle = wk.tone === "FAVORABLE" ? "text-emerald-300" : wk.tone === "CAUTION" ? "text-rose-300" : "text-amber-300";
                  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-2.5 rounded-xl border ${toneStyle} space-y-1`, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[11px] font-extrabold ${titleStyle}`, children: wk.labelHi }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-amber-200/80 font-semibold", children: wk.dateSpanHi })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-amber-100/90 leading-relaxed", children: wk.guidanceHi })
                  ] }, wk.weekNumber);
                }) }),
                monthlyOut.majorTransits.timelineHighlightsHi.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: monthlyOut.majorTransits.timelineHighlightsHi.slice(0, 5).map((note, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "span",
                  {
                    className: "px-2.5 py-1 rounded-lg bg-slate-900/90 border border-amber-500/35 text-[11px] text-amber-200 font-medium",
                    children: [
                      "• ",
                      note
                    ]
                  },
                  idx
                )) })
              ] })
            ] }),
            (() => {
              const periodPrefix = forecastMode === "daily" ? tr("आज का", "Today's") : forecastMode === "weekly" ? tr("साप्ताहिक", "Weekly") : tr("मासिक", "Monthly");
              return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 rounded-xl bg-amber-950/40 border border-amber-700/40 text-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-amber-400 font-semibold block", children: [
                    periodPrefix,
                    " ",
                    tr("शुभ अंक", "Lucky No.")
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono font-extrabold text-sm sm:text-base text-yellow-300 mt-0.5 block", children: luckyNumbersDisplay || `${luckyNumber}, ${allyNumber}` })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 rounded-xl bg-amber-950/40 border border-amber-700/40 text-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-amber-400 font-semibold block", children: [
                    periodPrefix,
                    " ",
                    tr("शुभ रंग", "Lucky Color")
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-[11px] text-amber-100 mt-0.5 block leading-tight", children: localizeVedicText(luckyColor) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 rounded-xl bg-rose-950/35 border border-rose-700/40 text-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-rose-300 font-semibold block", children: [
                    periodPrefix,
                    " ",
                    tr("वर्जित रंग", "Avoid Color")
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-[11px] text-rose-100 mt-0.5 block leading-tight", children: localizeVedicText(avoidColor) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-700/40 text-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-emerald-400 font-semibold block", children: tr("अनुकूल दिशा", "Lucky Direction") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-[11px] text-emerald-200 mt-0.5 block leading-tight", children: localizeVedicText(luckyDirection) })
                ] }),
                forecastMode === "daily" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 rounded-xl bg-indigo-950/40 border border-indigo-700/40 text-center", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-indigo-300 font-semibold block", children: tr("सर्वश्रेष्ठ शुभ समय", "Best Auspicious Time") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-[10px] text-indigo-100 mt-0.5 block leading-tight", children: localizeVedicText(luckyTime) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 rounded-xl bg-red-950/35 border border-[#FF6B6B]/50 text-center", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-[#FF6B6B] font-semibold block", children: tr("राहुकाल (सावधानी)", "Rahu Kaal (Avoid)") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-[10px] text-[#FF8A80] mt-0.5 block leading-tight", children: localizeVedicText(forecastData.cautionTime || todayDayPanchang.rahuKaal) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 rounded-xl bg-purple-950/35 border border-purple-700/40 text-center", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-purple-300 font-semibold block", children: tr("अभिजित मुहूर्त", "Abhijit Muhurat") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-[10px] text-purple-100 mt-0.5 block leading-tight", children: localizeVedicText(todayDayPanchang.abhijitMuhurat) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 rounded-xl bg-teal-950/35 border border-teal-700/40 text-center", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-teal-300 font-semibold block", children: tr("दिशाशूल", "Disha Shool") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-[10px] text-teal-100 mt-0.5 block leading-tight", children: localizeVedicText(dailyOut?.panchangContext.dishaShoolHi || todayDayPanchang.dishaShool) })
                  ] })
                ] }) : forecastMode === "weekly" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 rounded-xl bg-indigo-950/40 border border-indigo-700/40 text-center", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-indigo-300 font-semibold block", children: tr("शुभ व मध्यम दिवस", "Favorable & Moderate") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-[10px] text-indigo-100 mt-0.5 block leading-tight", children: [
                      localizeVedicText(forecastData.weeklyFavDaysHi || luckyTime),
                      forecastData.weeklyModDaysHi ? ` • ${tr("मध्यम:", "Mod:")} ${localizeVedicText(forecastData.weeklyModDaysHi)}` : ""
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 rounded-xl bg-red-950/35 border border-[#FF6B6B]/50 text-center", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-[#FF6B6B] font-semibold block", children: tr("सावधानी के दिन", "Caution Days") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-[10px] text-[#FF8A80] mt-0.5 block leading-tight", children: localizeVedicText(forecastData.weeklyCautDaysHi || "सामान्य संतुलन") })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 rounded-xl bg-purple-950/35 border border-purple-700/40 text-center", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-purple-300 font-semibold block", children: tr("चन्द्र गोचर पथ", "Moon Transit Path") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-[10px] text-purple-100 mt-0.5 block leading-tight", children: localizeVedicText(forecastData.weeklyMoonPathHi || "") })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 rounded-xl bg-teal-950/35 border border-teal-700/40 text-center", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-teal-300 font-semibold block", children: tr("श्रेष्ठ सप्ताह चरण", "Best Week Phase") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-[10px] text-teal-100 mt-0.5 block leading-tight", children: localizeVedicText(forecastData.weeklyBestPhaseHi || "") })
                  ] })
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 rounded-xl bg-indigo-950/40 border border-indigo-700/40 text-center", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-indigo-300 font-semibold block", children: tr("मासिक शुभ तिथियाँ", "Favorable Dates") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-[10px] text-indigo-100 mt-0.5 block leading-tight", children: localizeVedicText(forecastData.monthlyFavDatesHi || luckyTime) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 rounded-xl bg-red-950/35 border border-[#FF6B6B]/50 text-center", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-[#FF6B6B] font-semibold block", children: tr("सावधानी तिथियाँ", "Caution Dates") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-[10px] text-[#FF8A80] mt-0.5 block leading-tight", children: localizeVedicText(forecastData.monthlyCautDatesHi || "सामान्य संयम") })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 rounded-xl bg-purple-950/35 border border-purple-700/40 text-center", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-purple-300 font-semibold block", children: tr("सूर्य संक्रांति", "Solar Sankranti") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-[10px] text-purple-100 mt-0.5 block leading-tight", children: localizeVedicText(forecastData.monthlySankrantiShortHi || "") })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 rounded-xl bg-teal-950/35 border border-teal-700/40 text-center", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-teal-300 font-semibold block", children: tr("विक्रम / शक संवत", "Vikram & Shaka") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-[10px] text-teal-100 mt-0.5 block leading-tight", children: language === "en" ? `VS ${forecastMode === "monthly" ? targetMonthHinduMaasInfo.vikramSamvat : targetWeekPanchangInfo.vikramSamvat} • SS ${forecastMode === "monthly" ? targetMonthHinduMaasInfo.shakaSamvat : targetWeekPanchangInfo.shakaSamvat}` : `वि.सं. ${forecastMode === "monthly" ? targetMonthHinduMaasInfo.vikramSamvat : targetWeekPanchangInfo.vikramSamvat} • शक ${forecastMode === "monthly" ? targetMonthHinduMaasInfo.shakaSamvat : targetWeekPanchangInfo.shakaSamvat}` })
                  ] })
                ] })
              ] });
            })(),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-xl bg-slate-900/90 border border-amber-900/35", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs mb-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-amber-200 font-semibold flex items-center gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "w-3.5 h-3.5 text-amber-400" }),
                    " ",
                    tr("करियर व व्यापार", "Career & Business")
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono font-bold text-amber-300", children: [
                    careerScore,
                    "%"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-1.5 rounded-full bg-slate-800 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "h-full rounded-full bg-gradient-to-r from-amber-500 to-yellow-400",
                    style: { width: `${careerScore}%` }
                  }
                ) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-xl bg-slate-900/90 border border-emerald-900/35", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs mb-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-emerald-200 font-semibold flex items-center gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-3.5 h-3.5 text-emerald-400" }),
                    " ",
                    tr("धन व आर्थिक लाभ", "Wealth & Finance")
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono font-bold text-emerald-300", children: [
                    wealthScore,
                    "%"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-1.5 rounded-full bg-slate-800 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-400",
                    style: { width: `${wealthScore}%` }
                  }
                ) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-xl bg-slate-900/90 border border-rose-900/35", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs mb-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-rose-200 font-semibold flex items-center gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "w-3.5 h-3.5 text-rose-400" }),
                    " ",
                    tr("प्रेम व दांपत्य सुख", "Love & Harmony")
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono font-bold text-rose-300", children: [
                    familyScore,
                    "%"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-1.5 rounded-full bg-slate-800 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "h-full rounded-full bg-gradient-to-r from-rose-500 to-amber-400",
                    style: { width: `${familyScore}%` }
                  }
                ) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-xl bg-slate-900/90 border border-indigo-900/35", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs mb-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-indigo-200 font-semibold flex items-center gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "w-3.5 h-3.5 text-indigo-400" }),
                    " ",
                    tr("शिक्षा व संतान", "Education & Family")
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono font-bold text-indigo-300", children: [
                    educationScore,
                    "%"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-1.5 rounded-full bg-slate-800 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-400",
                    style: { width: `${educationScore}%` }
                  }
                ) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-xl bg-slate-900/90 border border-sky-900/35 col-span-2 sm:col-span-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs mb-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sky-200 font-semibold flex items-center gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-3.5 h-3.5 text-sky-400" }),
                    " ",
                    tr("स्वास्थ्य व ऊर्जा", "Health & Vitality")
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono font-bold text-sky-300", children: [
                    healthScore,
                    "%"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-1.5 rounded-full bg-slate-800 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "h-full rounded-full bg-gradient-to-r from-sky-500 to-emerald-400",
                    style: { width: `${healthScore}%` }
                  }
                ) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-amber-200/75 text-center leading-relaxed", children: tr(
              "नोट: शुभता प्रतिशत (%) केवल सांकेतिक आकलन है; मुख्य फल शास्त्रीय ग्रह गोचर एवं चंद्रबल पर आधारित है।",
              "Note: Auspiciousness percentage (%) is only an indicative score; the primary forecast is grounded in classical planetary transits and Moon strength."
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3.5 sm:p-4 rounded-xl bg-slate-900/80 border border-amber-800/40 space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h5", { className: "text-xs sm:text-sm font-bold text-amber-300 flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-4 h-4 text-amber-400" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: forecastMode === "daily" ? tr("१. राशि स्वामी, चंद्रबल एवं मानसिक-आध्यात्मिक स्थिति", "1. Sign Lord, Moon Transit & Spiritual Wellbeing") : forecastMode === "weekly" ? tr("१. राशि स्वामी, साप्ताहिक चंद्र गति एवं मानसिक स्थिति", "1. Sign Lord, Weekly Moon Path & Mental State") : tr("१. राशि स्वामी, गुरु-शनि बल एवं मासिक मानसिक स्थिति", "1. Sign Lord, Slow Planets & Monthly Outlook") })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm text-amber-100/95 leading-relaxed", children: language === "en" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  localizeVedicText(lagnaMentalText),
                  " ",
                  localizeVedicText(educationText),
                  " ",
                  localizeVedicText(healthText)
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  lagnaMentalText,
                  " ",
                  educationText,
                  " ",
                  healthText
                ] }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3.5 sm:p-4 rounded-xl bg-slate-900/80 border border-indigo-800/40 space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h5", { className: "text-xs sm:text-sm font-bold text-indigo-300 flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Compass, { className: "w-4 h-4 text-indigo-400" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr("२. प्रमुख ग्रहों का गोचर एवं चंद्रबल का सूक्ष्म प्रभाव", "2. Key Planetary Transits & Lunar Impact") })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm text-amber-100/95 leading-relaxed", children: language === "en" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  localizeVedicText(transitImpactText),
                  " ",
                  localizeVedicText(forecastData.chandraGochar?.gocharSummary || chandraGochar.gocharSummary)
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  transitImpactText,
                  " ",
                  forecastData.chandraGochar?.gocharSummary || chandraGochar.gocharSummary
                ] }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3.5 sm:p-4 rounded-xl bg-slate-900/80 border border-emerald-800/40 space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h5", { className: "text-xs sm:text-sm font-bold text-emerald-300 flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "w-4 h-4 text-emerald-400" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr("३. करियर, आजीविका, व्यवसाय एवं धन योग", "3. Career, Livelihood, Business & Wealth Yoga") })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm text-amber-100/95 leading-relaxed", children: language === "en" ? `${localizeVedicText(careerText)} ${localizeVedicText(wealthText)}` : `${careerText} ${wealthText}` })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3.5 sm:p-4 rounded-xl bg-slate-900/80 border border-rose-800/40 space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h5", { className: "text-xs sm:text-sm font-bold text-rose-300 flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "w-4 h-4 text-rose-400" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr("४. पारिवारिक सौख्य, दांपत्य जीवन एवं संबंध", "4. Family Harmony, Marital Life & Relationships") })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm text-amber-100/95 leading-relaxed", children: language === "en" ? localizeVedicText(familyText) : familyText })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              RashifalShastricGuidanceCard,
              {
                period: forecastMode,
                rashiNumber: Math.max(1, TWELVE_RASHIS.findIndex((r) => r.id === currentRashi.id) + 1),
                rashiNameHi: currentRashi.hindiName,
                rashiNameEn: currentRashi.englishName,
                dailyOut,
                weeklyOut,
                monthlyOut
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-amber-200/75 px-1 leading-snug", children: buildRashifalSaralArthaHi({
              mode: forecastMode,
              moonHouse: moonBhava,
              chandrabalLabelHi: dailyOut?.moonTransit.chandrabalaLabelHi || chandraGochar.chandrabal,
              tarabalSummaryHi: dailyOut?.rashiTarabala?.summaryLineHi || dailyOut?.tarabala?.taraNameHi || "",
              careerScore,
              wealthScore,
              familyScore,
              healthScore,
              samvat: dailyOut?.panchangContext.samvat ?? Number(todayDayPanchang?.vikramSamvat || 2083),
              tithiIndex: dailyOut?.panchangContext.tithiIndex ?? Number(todayDayPanchang?.tithiIndex || 1),
              nakshatraIndex: dailyOut?.panchangContext.nakshatraIndex,
              moonPada: dailyOut?.panchangContext.moonPada ?? 1,
              yogaIndex: dailyOut?.panchangContext.yogaIndex,
              tithiHi: dailyOut?.panchangContext.tithiHi || todayDayPanchang?.tithiName,
              nakshatraHi: dailyOut?.panchangContext.nakshatraHi || todayDayPanchang?.nakshatra,
              yogaHi: dailyOut?.panchangContext.yogaHi || todayDayPanchang?.yoga,
              rashiNumber: Math.max(1, TWELVE_RASHIS.findIndex((r) => r.id === currentRashi.id) + 1)
            }).fivePillarSummaryHi }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-3.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-3.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-600/35 space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("h6", { className: "text-xs font-extrabold text-emerald-300 uppercase tracking-wider flex items-center gap-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 text-emerald-400" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: forecastMode === "daily" ? tr("आज क्या करें (शुभ करणीय कार्य)", "Today's Recommended Actions (Do's)") : forecastMode === "weekly" ? tr("इस सप्ताह क्या करें (शुभ साप्ताहिक रणनीति)", "Weekly Recommended Strategy (Do's)") : tr("इस माह के मुख्य संकल्प (मासिक नियम)", "Monthly Aspirations & Guidelines (Do's)") })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1.5 text-xs text-emerald-100/95 leading-relaxed", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-400 font-bold", children: "•" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: language === "en" ? localizeVedicText(doToday1) : doToday1 })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-400 font-bold", children: "•" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: language === "en" ? localizeVedicText(doToday2) : doToday2 })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3.5 rounded-xl bg-rose-950/30 border border-rose-600/35 space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("h6", { className: "text-xs font-extrabold text-rose-300 uppercase tracking-wider flex items-center gap-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-4 h-4 text-rose-400" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: forecastMode === "daily" ? tr("आज क्या न करें (ज्योतिषीय सावधानी)", "Astrological Cautions (Don'ts)") : forecastMode === "weekly" ? tr("इस सप्ताह क्या न करें (साप्ताहिक सावधानी)", "Weekly Cautions (Don'ts)") : tr("इस माह इनसे बचें (मासिक वर्जित कार्य)", "Monthly Cautions to Avoid (Don'ts)") })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1.5 text-xs text-rose-100/95 leading-relaxed", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-rose-400 font-bold", children: "•" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: language === "en" ? localizeVedicText(dontToday1) : dontToday1 })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-rose-400 font-bold", children: "•" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: language === "en" ? localizeVedicText(dontToday2) : dontToday2 })
                    ] })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3.5 sm:p-4 rounded-xl bg-gradient-to-b from-amber-950/60 to-slate-900 border border-amber-500/45 flex flex-col justify-between gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] font-bold text-yellow-300 uppercase tracking-wider flex items-center gap-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Compass, { className: "w-3.5 h-3.5 text-amber-400" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr("५. शास्त्रोक्त वैदिक उपाय, विशेष मंत्र जप, रत्न-रुद्राक्ष एवं दान विधान", "5. Vedic Remedies, Mantra Jaap, Gemstones & Charity") })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-amber-100/95 mt-1.5 leading-relaxed", children: [
                    language === "en" ? localizeVedicText(remedyText) : remedyText,
                    " ",
                    tr("शुभ रत्न:", "Auspicious Gemstone:"),
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: localizeVedicText(currentRashi.ratna) }),
                    " (",
                    localizeVedicText(currentRashi.dhatu),
                    ")।"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2.5 pt-2.5 border-t border-amber-800/40", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-amber-400 font-semibold block", children: tr(`राशि स्वामी (${currentRashi.swami}) वैदिक बीज मंत्र:`, `Sign Lord (${localizeVedicText(currentRashi.swami)}) Vedic Beej Mantra:`) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs sm:text-sm font-bold font-vedic text-yellow-300 block mt-0.5", children: currentRashi.beejMantra })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 pt-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => {
                        if (activeSpeechId !== "rashi-beej-mantra") {
                          vedicAudio.playTempleBell(0.65);
                        }
                        vedicAudio.toggleSpeakText(
                          `राशि स्वामी ${currentRashi.swami} का सिद्ध बीज मंत्र। ${currentRashi.beejMantra}। ${currentRashi.beejMantra}`,
                          "rashi-beej-mantra"
                        );
                      },
                      className: `flex-1 py-2 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer transition-all ${activeSpeechId === "rashi-beej-mantra" ? "bg-emerald-500 text-slate-950 border-emerald-300 font-extrabold shadow-md" : "bg-amber-500/20 hover:bg-amber-500/30 border-amber-400/50 text-amber-200"}`,
                      children: activeSpeechId === "rashi-beej-mantra" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(VolumeX, { className: "w-3.5 h-3.5" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr("मंत्र रोकें", "Stop Mantra") })
                      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Volume2, { className: "w-3.5 h-3.5 text-amber-400" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr("बीज मंत्र सुनें", "Listen Beej Mantra") })
                      ] })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: onOpenMantraJaap,
                      className: "flex-1 py-2 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-yellow-400 hover:to-amber-400 text-slate-950 text-xs font-extrabold flex items-center justify-center gap-1.5 cursor-pointer shadow-sm",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "w-3.5 h-3.5" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr("108 जप करें", "108 Jaap Mala") })
                      ]
                    }
                  )
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                id: "rashifal-professional-social-studio",
                className: "mt-4 p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-[#1e1208] via-[#11192e] to-[#190f24] border-2 border-amber-400/60 shadow-2xl space-y-4 scroll-mt-24",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col lg:flex-row lg:items-center justify-between gap-3 border-b border-amber-700/40 pb-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/20 border border-amber-400/50 text-yellow-300 text-[11px] font-extrabold mb-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3.5 h-3.5 text-yellow-400" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr(
                          "फेसबुक (Facebook) एवं व्हाट्सएप (WhatsApp) राशिफल शेयर",
                          "Facebook & WhatsApp Rashifal Share",
                          "Facebook & WhatsApp Rashifal Share"
                        ) })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("h5", { className: "text-base sm:text-lg font-extrabold font-vedic text-amber-100 flex items-center gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Megaphone, { className: "w-4 h-4 text-yellow-400 shrink-0", strokeWidth: 1.5 }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: forecastMode === "daily" ? tr(
                          "आज का पूरा राशिफल Facebook व WhatsApp पर पोस्ट करें",
                          "Post Today's Complete Horoscope on Facebook & WhatsApp",
                          "Aaj Ka Poora Rashifal Facebook & WhatsApp Par Post Karein"
                        ) : forecastMode === "weekly" ? tr(
                          "इस सप्ताह का साप्ताहिक राशिफल Facebook व WhatsApp पर पोस्ट करें",
                          "Post Weekly Horoscope on Facebook & WhatsApp",
                          "Is Saptah Ka Rashifal Facebook & WhatsApp Par Post Karein"
                        ) : tr(
                          "इस मास का मासिक राशिफल Facebook व WhatsApp पर पोस्ट करें",
                          "Post Monthly Horoscope on Facebook & WhatsApp",
                          "Is Maas Ka Rashifal Facebook & WhatsApp Par Post Karein"
                        ) })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-amber-200/85 mt-0.5", children: language === "en" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                        "Share the complete 5-pillar horoscope for ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: displayRashiName }),
                        " or the",
                        " ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "All 12 Signs (Aries to Pisces) mega post" }),
                        " in one click:"
                      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                        "एक क्लिक में ",
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { children: [
                          currentRashi.hindiName,
                          " राशि का पूरा 5-स्तरीय राशिफल"
                        ] }),
                        " या",
                        " ",
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { children: [
                          "सभी 12 राशियों (मेष से मीन) का",
                          " ",
                          forecastMode === "daily" ? "आज का" : forecastMode === "weekly" ? "साप्ताहिक" : "मासिक",
                          " महा-राशिफल"
                        ] }),
                        " ",
                        "शेयर करें:"
                      ] }) })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center bg-slate-950/90 p-1 rounded-xl border border-amber-500/50 self-start lg:self-center shrink-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          type: "button",
                          onClick: () => setSocialPostTab("single"),
                          className: `px-3 py-1.5 rounded-lg text-xs font-extrabold cursor-pointer transition-all ${socialPostTab === "single" ? "bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 shadow" : "text-amber-200 hover:text-yellow-300"}`,
                          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(VedicRashiIcon, { rashi: currentRashi.id, className: "w-4 h-4 shrink-0" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: language === "en" ? `${currentRashi.englishName} (${currentRashi.hindiName}) Full Post` : `${currentRashi.hindiName} राशि (पूरा पोस्ट)` })
                          ] })
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "button",
                        {
                          type: "button",
                          onClick: () => setSocialPostTab("all12"),
                          className: `px-3 py-1.5 rounded-lg text-xs font-extrabold cursor-pointer transition-all inline-flex items-center gap-1.5 ${socialPostTab === "all12" ? "bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 shadow" : "text-amber-200 hover:text-yellow-300"}`,
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3.5 h-3.5 shrink-0", strokeWidth: 1.5 }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr(
                              "सभी 12 राशियां (मेष–मीन महा-पोस्ट)",
                              "All 12 Signs (Aries–Pisces Mega Post)",
                              "Sabhi 12 Rashiyan (Mesh–Meen Mega Post)"
                            ) })
                          ]
                        }
                      )
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    ShareableVedicCardButton,
                    {
                      payload: liveRashifalCardPayload,
                      resolveMahapostPayload: resolveAll12CardPayload,
                      resolveAll12BatchPayloads,
                      selectedDateThemeOverride,
                      buttonLabel: "इमेज कार्ड शेयर / डाउनलोड",
                      className: "w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-400 to-orange-400 hover:from-amber-400 hover:to-yellow-300 text-slate-950 font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 cursor-pointer transition-all"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "button",
                      {
                        type: "button",
                        onClick: async () => {
                          const targetText = await resolveActiveSocialPostText();
                          await shareProfessionalPostOnFacebook(
                            targetText,
                            activeCanonicalShareUrl
                          );
                          setCopiedFullPostMode(socialPostTab);
                          setSocialShareBanner(
                            socialPostTab === "single" ? tr(
                              `${currentRashi.hindiName} राशि का पूरा राशिफल कॉपी हो चुका है! अब खुले हुए Facebook बॉक्स में बस 'Paste (पेस्ट)' कर दें — नीचे फोटो कार्ड अपने आप जुड़ जाएगा!`,
                              `Full ${currentRashi.englishName} horoscope copied! Long-press and tap 'Paste' in the Facebook box that opens.`,
                              `${currentRashi.englishName} ka poora rashifal copy ho gaya hai! Ab Facebook box mein Paste kar dein.`
                            ) : tr(
                              `सभी 12 राशियों (मेष से मीन) का ${forecastMode === "daily" ? "दैनिक" : forecastMode === "weekly" ? "साप्ताहिक" : "मासिक"} सम्पूर्ण महा-राशिफल कॉपी हो चुका है! अब खुले हुए Facebook बॉक्स में बस 'Paste (पेस्ट)' कर दें!`,
                              `Complete 12-Sign horoscope (Aries to Pisces) copied! Long-press and tap 'Paste' in the Facebook box that opens.`,
                              `Sabhi 12 Rashiyon ka maha-rashifal copy ho gaya hai! Ab Facebook box mein Paste kar dein.`
                            )
                          );
                        },
                        className: "py-2.5 px-3.5 rounded-xl bg-[#1877F2] hover:bg-[#166fe5] text-white text-xs sm:text-sm font-extrabold flex items-center justify-center gap-2 shadow-lg cursor-pointer transition-all",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "w-4 h-4 fill-current shrink-0", viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" }) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: socialPostTab === "single" ? language === "en" ? `Post ${currentRashi.englishName} on Facebook` : `Facebook पर ${currentRashi.hindiName} पोस्ट करें` : tr(
                            "Facebook पर 12 राशियां पोस्ट करें",
                            "Post 12 Signs on Facebook",
                            "Facebook Par 12 Rashiyan Post Karein"
                          ) })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "button",
                      {
                        type: "button",
                        onClick: async () => {
                          const targetText = await resolveActiveSocialPostText();
                          await shareProfessionalPostOnWhatsApp(targetText);
                          setCopiedFullPostMode(socialPostTab);
                        },
                        className: "py-2.5 px-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-extrabold flex items-center justify-center gap-2 shadow-lg cursor-pointer transition-all",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { className: "w-4 h-4 shrink-0" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: socialPostTab === "single" ? language === "en" ? `Send ${currentRashi.englishName} on WhatsApp` : `WhatsApp पर ${currentRashi.hindiName} भेजें` : tr(
                            "WhatsApp पर 12 राशियां भेजें",
                            "Share 12 Signs on WhatsApp",
                            "WhatsApp Par 12 Rashiyan Bhejein"
                          ) })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: async () => {
                          const targetText = await resolveActiveSocialPostText();
                          await copyPostToClipboard(targetText);
                          setCopiedFullPostMode(socialPostTab);
                          setSocialShareBanner(
                            socialPostTab === "single" ? tr(
                              `${currentRashi.hindiName} राशि का पूरा राशिफल पोस्ट कॉपी हो गया है! अब Facebook ऐप या पेज खोलकर सीधा Paste कर दें।`,
                              `Full ${currentRashi.englishName} horoscope post copied! Open WhatsApp or Facebook and paste directly.`,
                              `${currentRashi.englishName} ka poora rashifal post copy ho gaya hai!`
                            ) : tr(
                              `सभी 12 राशियों (मेष से मीन) का ${forecastMode === "daily" ? "दैनिक" : forecastMode === "weekly" ? "साप्ताहिक" : "मासिक"} पूरा महा-राशिफल कॉपी हो गया है! अब Facebook ऐप या पेज खोलकर सीधा Paste कर दें।`,
                              `Complete 12-Sign horoscope (Aries to Pisces) copied! Open WhatsApp or Facebook and paste directly.`,
                              `Sabhi 12 Rashiyon ka poora maha-rashifal copy ho gaya hai!`
                            )
                          );
                        },
                        className: "py-2.5 px-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-yellow-400 hover:to-amber-400 text-slate-950 text-xs sm:text-sm font-extrabold flex items-center justify-center gap-2 shadow-lg cursor-pointer transition-all",
                        children: copiedFullPostMode === socialPostTab ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 text-slate-950 shrink-0" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr("पूरा पोस्ट कॉपी हो गया!", "Full Post Copied!", "Poora Post Copy Ho Gaya!") })
                        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "w-4 h-4 text-slate-950 shrink-0" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: socialPostTab === "single" ? tr("पूरा राशिफल कॉपी (Copy) करें", "Copy Full Horoscope", "Poora Rashifal Copy Karein") : tr("12 राशियों का पोस्ट कॉपी करें", "Copy All 12 Signs Post", "12 Rashiyon Ka Post Copy Karein") })
                        ] })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "button",
                      {
                        type: "button",
                        onClick: async () => {
                          const targetText = await resolveActiveSocialPostText();
                          const res = await shareProfessionalPostNative(
                            socialPostTab === "single" ? language === "en" ? `${currentRashi.englishName} — ${modeTitleLabel}` : `${currentRashi.hindiName} राशि — ${modeTitleLabel}` : tr(
                              `${forecastMode === "daily" ? "दैनिक" : forecastMode === "weekly" ? "साप्ताहिक" : "मासिक"} सम्पूर्ण महा-राशिफल (मेष से मीन 12 राशियां)`,
                              `Complete ${forecastMode === "daily" ? "Daily" : forecastMode === "weekly" ? "Weekly" : "Monthly"} Mega Horoscope (All 12 Signs)`
                            ),
                            targetText,
                            activeCanonicalShareUrl
                          );
                          if (res === "copied") {
                            setShowPostPreviewBox((prev) => !prev);
                          }
                        },
                        className: "py-2.5 px-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-amber-400/50 text-amber-200 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 cursor-pointer transition-all",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Smartphone, { className: "w-4 h-4 text-yellow-400 shrink-0", strokeWidth: 1.5 }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr(
                            "मोबाइल ऐप शेयर / पोस्ट देखें",
                            "Mobile App Share / Preview",
                            "Mobile App Share / Post Dekhein"
                          ) })
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-1 text-[11px] text-amber-200/90", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-start gap-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Lightbulb, { className: "w-3.5 h-3.5 text-yellow-400 shrink-0 mt-0.5", strokeWidth: 1.5 }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: language === "en" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Facebook Share Tip:" }),
                        " Tapping the blue or yellow button automatically",
                        " ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "copies" }),
                        " the full horoscope — just long-press and tap ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Paste" }),
                        " when Facebook opens!"
                      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Facebook शेयर टिप:" }),
                        " ऊपर नीले या पीले बटन को दबाते ही पूरा राशिफल अपने आप",
                        " ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Copy" }),
                        " हो जाता है — Facebook खुलने पर बस उंगली दबाकर ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Paste" }),
                        " कर दें!"
                      ] }) })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "button",
                      {
                        type: "button",
                        onClick: () => setShowPostPreviewBox((prev) => !prev),
                        className: "inline-flex items-center gap-1 text-yellow-300 hover:underline font-extrabold shrink-0 self-start sm:self-center cursor-pointer",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: showPostPreviewBox ? tr("पोस्ट प्रीव्यू छुपाएं", "Hide Post Preview", "Post Preview Chhupayein") : tr("पूरा तैयार पोस्ट यहाँ देखें", "View Ready Post Here", "Poora Taiyar Post Yahan Dekhein") }),
                          showPostPreviewBox ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-3.5 h-3.5", strokeWidth: 1.5 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-3.5 h-3.5", strokeWidth: 1.5 })
                        ]
                      }
                    )
                  ] }),
                  showPostPreviewBox && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3.5 rounded-xl bg-slate-950/95 border border-amber-500/40 space-y-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2 border-b border-amber-900/40 pb-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 text-xs font-extrabold text-yellow-300", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-3.5 h-3.5 text-yellow-300 shrink-0", strokeWidth: 1.5 }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: socialPostTab === "single" ? language === "en" ? `Ready ${currentRashi.englishName} Horoscope Post (Ready to Paste):` : `${currentRashi.hindiName} राशि का तैयार राशिफल पोस्ट (Ready to Paste):` : tr(
                          "सभी 12 राशियों (मेष–मीन) का तैयार महा-राशिफल पोस्ट (Ready to Paste):",
                          "Ready Mega Horoscope Post for All 12 Signs (Ready to Paste):"
                        ) })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          type: "button",
                          onClick: async () => {
                            const targetText = await resolveActiveSocialPostText();
                            await copyPostToClipboard(targetText);
                            setCopiedFullPostMode(socialPostTab);
                          },
                          className: "inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-500 text-slate-950 text-[11px] font-black cursor-pointer",
                          children: copiedFullPostMode === socialPostTab ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-3 h-3", strokeWidth: 1.5 }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr("कॉपी हो गया", "Copied", "Copy Ho Gaya") })
                          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "w-3 h-3", strokeWidth: 1.5 }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr("कॉपी करें", "Copy", "Copy Karein") })
                          ] })
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "text-[11px] sm:text-xs text-amber-100/95 font-sans whitespace-pre-wrap leading-relaxed max-h-72 overflow-y-auto p-2 rounded-lg bg-slate-900/90 border border-amber-900/30 select-all", children: socialPostTab === "single" ? fullSingleRashiPostText : all12Loading ? "सभी 12 राशियों का दृक-गणित महा-राशिफल तैयार किया जा रहा है..." : all12RashisPostText || "प्रीव्यू तैयार हो रहा है..." })
                  ] })
                ]
              }
            )
          ]
        }
      )
    ] })
  ] });
};
export {
  DailyRashifalWidget,
  TWELVE_RASHIS
};
