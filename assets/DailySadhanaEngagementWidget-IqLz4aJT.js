import { r as reactExports, j as jsxRuntimeExports } from "./vendor-react-CCbeDaYX.js";
import { u as useLanguage, i as getPunyaPoints, j as getSadhanaDays, v as vedicAudio, a as SacredIcon, k as addPunyaPoint } from "./index-CUAFR0Uq.js";
import { g as getISTCalendarParts } from "./panchang-core-WfwKNTXG.js";
import { ad as Landmark, a9 as Flame, x as Calendar, w as BookOpen, S as Sparkles, h as Crown, a as Sprout, a5 as CircleCheck, ae as HeartHandshake, aH as CircleQuestionMark, aI as MessageSquareQuote, F as ArrowRight, a8 as Compass, aa as Bell, aJ as Leaf, $ as Share2, aK as Trophy, R as RefreshCw, C as Check, X, J as ArrowLeft, g as Star, Y as Copy, H as House, r as Briefcase } from "./vendor-icons-Bk5Rg8-9.js";
import "./vendor-pdf-CpPyS1re.js";
import "./seo-core-uu9B2jSm.js";
import "./vendor-astronomy-C8JZdkQu.js";
const VEDIC_QUIZ_BANK = [
  {
    id: "q1",
    categoryHi: "वैदिक ज्योतिष",
    categoryEn: "Vedic Astrology",
    questionHi: "जन्म कुंडली में कुल कितने भाव (Houses) और कितनी राशियां होती हैं?",
    questionEn: "How many Bhavas (Houses) and Rashis (Zodiac Signs) are there in a Janam Kundali?",
    optionsHi: ["९ भाव और ९ राशियां", "१२ भाव और १२ राशियां", "२७ भाव और १२ राशियां", "१६ भाव और १२ राशियां"],
    optionsEn: ["9 Houses & 9 Signs", "12 Houses & 12 Signs", "27 Houses & 12 Signs", "16 Houses & 12 Signs"],
    correctIndex: 1,
    explanationHi: "बृहत् पाराशर होरा शास्त्र के अनुसार भचक्र ३६० अंश का होता है, जिसे १२ राशियों (३०° प्रत्येक) और १२ भावों (तनु, धन, सहज आदि) में विभाजित किया गया है।",
    explanationEn: "According to Brihat Parashara Hora Shastra, the 360° zodiac is divided into 12 Rashis (30° each) and 12 Bhavas."
  },
  {
    id: "q2",
    categoryHi: "पंचांग विज्ञान",
    categoryEn: "Panchang Science",
    questionHi: 'दिन के किस मुहूर्त को प्रायः सभी शुभ कार्यों के लिए "सर्वश्रेष्ठ एवं दोषरहित" माना जाता है?',
    questionEn: "Which daytime Muhurat is revered as universally auspicious for starting good works?",
    optionsHi: ["राहुकाल", "गुलिक काल", "अभिजित मुहूर्त", "यमगण्ड काल"],
    optionsEn: ["Rahukaal", "Gulika Kaal", "Abhijit Muhurat", "Yamaganda Kaal"],
    correctIndex: 2,
    explanationHi: 'मध्याह्न काल के ठीक मध्य में आने वाला "अभिजित मुहूर्त" (लगभग ४८ मिनट) भगवान श्रीहरि विष्णु से संबंधित है और यह अनेक दोषों का नाश करने वाला शुभ समय माना जाता है।',
    explanationEn: "Abhijit Muhurat around local midday (approx. 48 minutes) is presided over by Lord Vishnu and neutralizes most transit flaws."
  },
  {
    id: "q3",
    categoryHi: "सनातन शास्त्र",
    categoryEn: "Sanatan Scriptures",
    questionHi: "रुद्राक्ष या तुलसी की जप माला में मुख्य सुमेरु मनके को छोड़कर कुल कितने मनके होते हैं?",
    questionEn: "Excluding the central Sumeru bead, how many beads are in a traditional Vedic Japa Mala?",
    optionsHi: ["५१ मनके", "१०१ मनके", "१०८ मनके", "१११ मनके"],
    optionsEn: ["51 Beads", "101 Beads", "108 Beads", "111 Beads"],
    correctIndex: 2,
    explanationHi: "२७ नक्षत्रों और उनके ४ चरणों (२७ × ४ = १०८) तथा १२ राशियों और ९ ग्रहों (१२ × ९ = १०८) के ब्रह्माण्डीय सामंजस्य के कारण जप माला में १०८ मनके होते हैं।",
    explanationEn: "108 represents the cosmic harmony of 27 Nakshatras × 4 Padas (108) and 12 Rashis × 9 Navagrahas (108)."
  },
  {
    id: "q4",
    categoryHi: "विवाह ज्योतिष",
    categoryEn: "Marriage Astrology",
    questionHi: "अष्टकूट कुंडली मिलान (३६ गुण) में सर्वाधिक ८ गुण किस कूट के होते हैं?",
    questionEn: "In Ashtakoot Kundali Milan (36 Gunas), which Koota carries the highest weight of 8 points?",
    optionsHi: ["वर्ण कूट (१ गुण)", "भकूट (७ गुण)", "नाड़ी कूट (८ गुण)", "गण कूट (६ गुण)"],
    optionsEn: ["Varna Koota (1 pt)", "Bhakoot (7 pts)", "Nadi Koota (8 pts)", "Gana Koota (6 pts)"],
    correctIndex: 2,
    explanationHi: 'अष्टकूट मिलान में "नाड़ी कूट" सर्वाधिक ८ गुणों का होता है, जो वर-कन्या के स्वास्थ्य, वात-पित्त-कफ संतुलन एवं वंश वृद्धि का प्रतिनिधित्व करता है।',
    explanationEn: "Nadi Koota carries 8 out of 36 Gunas and signifies physiological harmony, vitality, and progeny well-being."
  },
  {
    id: "q5",
    categoryHi: "वास्तु एवं पूजा विधान",
    categoryEn: "Vastu & Puja Vidhi",
    questionHi: "वास्तु शास्त्र के अनुसार घर में पूजा घर (मंदिर) के लिए सबसे पवित्र दिशा कौन सी है?",
    questionEn: "According to Vastu Shastra, which direction is most sacred for the home temple (Puja room)?",
    optionsHi: ["दक्षिण-पश्चिम (नैऋत्य कोण)", "उत्तर-पूर्व (ईशान कोण)", "दक्षिण-पूर्व (आग्नेय कोण)", "उत्तर-पश्चिम (वायव्य कोण)"],
    optionsEn: ["South-West (Nairitya)", "North-East (Ishan Kon)", "South-East (Agneya)", "North-West (Vayavya)"],
    correctIndex: 1,
    explanationHi: 'उत्तर-पूर्व दिशा अर्थात् "ईशान कोण" के स्वामी देवगुरु बृहस्पति एवं भगवान शिव (ईशान) माने गए हैं; अतः मंदिर व साधना के लिए यह सर्वोत्तम स्थान है।',
    explanationEn: "North-East (Ishan Kon) is governed by Jupiter and Lord Shiva (Ishana), making it supreme for meditation and worship."
  },
  {
    id: "q6",
    categoryHi: "नवग्रह विज्ञान",
    categoryEn: "Navagraha Science",
    questionHi: "शनि की साढ़े साती कुल कितने वर्षों की होती है और इसके कितने चरण होते हैं?",
    questionEn: "How long does Shani Sade Sati last in total, and how many phases does it have?",
    optionsHi: ["५ वर्ष (२ चरण)", "७.५ वर्ष (३ चरण)", "२.५ वर्ष (१ चरण)", "१० वर्ष (४ चरण)"],
    optionsEn: ["5 Years (2 Phases)", "7.5 Years (3 Phases)", "2.5 Years (1 Phase)", "10 Years (4 Phases)"],
    correctIndex: 1,
    explanationHi: "शनि देव एक राशि में लगभग ढाई (२.५) वर्ष रहते हैं। जन्म राशि से बारहवीं, प्रथम और द्वितीय राशि में गोचर मिलाकर कुल साढ़े सात (७.५) वर्ष और ३ चरण (उदय, शिखर, अस्त) होते हैं।",
    explanationEn: "Saturn transits each sign for ~2.5 years across the 12th, 1st, and 2nd houses from the Moon sign, totaling 7.5 years in 3 phases."
  },
  {
    id: "q7",
    categoryHi: "रामायण एवं भक्ति",
    categoryEn: "Ramayana & Bhakti",
    questionHi: "श्री रामचरितमानस में गोस्वामी तुलसीदास जी ने कुल कितने काण्ड (अध्याय) रचे हैं?",
    questionEn: "How many Kandas (books/chapters) did Goswami Tulsidas compose in Shri Ramcharitmanas?",
    optionsHi: ["५ काण्ड", "७ काण्ड", "९ काण्ड", "१२ काण्ड"],
    optionsEn: ["5 Kandas", "7 Kandas", "9 Kandas", "12 Kandas"],
    correctIndex: 1,
    explanationHi: "श्री रामचरितमानस में ७ सोपान (काण्ड) हैं: बालकाण्ड, अयोध्याकाण्ड, अरण्यकाण्ड, किष्किन्धाकाण्ड, सुन्दरकाण्ड, लंकाकाण्ड और उत्तरकाण्ड।",
    explanationEn: "Shri Ramcharitmanas consists of 7 Kandas: Bal, Ayodhya, Aranya, Kishkindha, Sundar, Lanka, and Uttar Kanda."
  },
  {
    id: "q8",
    categoryHi: "पंचांग के ५ अंग",
    categoryEn: "5 Limbs of Panchang",
    questionHi: 'हिन्दू "पंचांग" शब्द किन ५ प्रमुख ज्योतिषीय अंगों से मिलकर बना है?',
    questionEn: 'Which 5 astrological limbs constitute the Hindu "Panchang"?',
    optionsHi: [
      "तिथि, वार, नक्षत्र, योग और करण",
      "राशि, लग्न, भाव, दशा और गोचर",
      "सूर्य, चंद्र, मंगल, बुध और गुरु",
      "ऋतु, मास, पक्ष, अयन और संवत्सर"
    ],
    optionsEn: [
      "Tithi, Vaar, Nakshatra, Yoga & Karana",
      "Rashi, Lagna, Bhava, Dasha & Gochar",
      "Sun, Moon, Mars, Mercury & Jupiter",
      "Ritu, Masa, Paksha, Ayana & Samvatsara"
    ],
    correctIndex: 0,
    explanationHi: "पंचांग (पंच + अंग) के ५ अंग हैं—तिथि, वार, नक्षत्र, योग और करण। इन्हीं पांचों की दैनिक गणना से शुभ-अशुभ समय और पर्व निर्धारित होते हैं।",
    explanationEn: 'Panchang literally means "Five Limbs": Tithi (lunar day), Vaar (weekday), Nakshatra (constellation), Yoga, and Karana.'
  },
  {
    id: "q9",
    categoryHi: "नक्षत्र ज्योतिष",
    categoryEn: "Nakshatra Astrology",
    questionHi: "वैदिक ज्योतिष में अश्विनी से लेकर रेवती तक कुल कितने मुख्य नक्षत्र होते हैं?",
    questionEn: "From Ashwini to Revati, how many primary Nakshatras exist in Vedic Astrology?",
    optionsHi: ["१२ नक्षत्र", "१८ नक्षत्र", "२७ नक्षत्र", "३६ नक्षत्र"],
    optionsEn: ["12 Nakshatras", "18 Nakshatras", "27 Nakshatras", "36 Nakshatras"],
    correctIndex: 2,
    explanationHi: "चंद्रमा पृथ्वी की परिक्रमा लगभग २७.३ दिनों में पूर्ण करता है; इसी पथ को अश्विनी से रेवती तक २७ नक्षत्रों (१३°२०' प्रत्येक) में बांटा गया है।",
    explanationEn: "The Moon completes its sidereal orbit in ~27.3 days, dividing the ecliptic into 27 Nakshatras of 13°20' each from Ashwini to Revati."
  }
];
const LIFE_GUIDANCE_ITEMS = [
  {
    id: "career_wealth",
    iconKey: "briefcase",
    titleHi: "व्यापार, करियर व धन वृद्धि",
    titleEn: "Career, Business & Wealth",
    subtitleHi: "नौकरी में उन्नति, व्यापार लाभ और आर्थिक स्थिरता के उपाय",
    subtitleEn: "Vedic guidance for job growth, business prosperity & stability",
    mantraSanskrit: "ॐ श्रीं ह्रीं क्लीं त्रिभुवन महालक्ष्म्यै अस्मांक दारिद्र्य नाशय प्रचुर धन देहि देहि क्लीं ह्रीं श्रीं ॐ॥",
    mantraMeaningHi: "हे त्रिभुवन महालक्ष्मी! हमारे जीवन के अभावों का नाश कर शुभ कर्मों से प्रचुर ऐश्वर्य एवं समृद्धि प्रदान करें।",
    mantraMeaningEn: "O Goddess Mahalakshmi of the three worlds, remove scarcity and bless us with righteous abundance.",
    remedyHi: "प्रातः स्नान के बाद तांबे के लोटे से सूर्य देव को अर्घ्य दें, कार्यस्थल पर उत्तर या पूर्व दिशा की ओर मुख करके बैठें और अपनी जन्म कुंडली के दशम (कर्म) व द्वितीय (धन) भाव की दशा जांचें।",
    remedyEn: "Offer water to Surya Dev in a copper vessel each morning, face East/North while working, and check your 10th & 2nd house Dasha in Janam Kundali.",
    ctaLabelHi: "अपनी कुंडली से करियर योग देखें",
    ctaLabelEn: "Check Career Yoga in Kundali",
    targetType: "tab",
    targetKey: "kundali"
  },
  {
    id: "marriage_milan",
    iconKey: "heart",
    titleHi: "विवाह, कुंडली मिलान व दांपत्य सुख",
    titleEn: "Marriage, Gun Milan & Harmony",
    subtitleHi: "३६ गुण मिलान, मांगलिक दोष निवारण एवं शुभ विवाह मुहूर्त",
    subtitleEn: "36 Gun Milan, Manglik Dosh remedies & auspicious Vivah Muhurat",
    mantraSanskrit: "ॐ कात्यायनि महामाये महायोगिन्यधीश्वरि। नन्दगोपसुतं देवि पतिं मे कुरु ते नमः॥ (कन्या हेतु) / पत्नीं मनोरमां देहि मनोवृत्तानुसारिणीम्। तारिणीं दुर्गसंसारसागरस्य कुलोद्भवाम्॥ (वर हेतु)",
    mantraMeaningHi: "श्लोक अर्थ: हे महामाया माँ कात्यायनी! मुझे भगवान श्रीकृष्ण के समान सुयोग्य पति प्रदान करें (कन्या हेतु)। हे देवि! मुझे मन के अनुकूल चलने वाली, दुर्गम संसार-सागर से पार लगाने वाली और उत्तम कुल में उत्पन्न मनोरम पत्नी प्रदान करें (वर हेतु)।",
    mantraMeaningEn: "Sacred Vedic mantra for timely marriage and harmonious marital bond.",
    remedyHi: "गुरुवार को केले के वृक्ष या भगवान विष्णु-लक्ष्मी का पूजन करें, हल्दी का तिलक लगाएं और विवाह से पूर्व अष्टकूट ३६ गुण एवं नाड़ी-भकूट का सटीक मिलान अवश्य करें।",
    remedyEn: "Worship Lord Vishnu & Maa Lakshmi on Thursdays, apply turmeric Tilak, and verify 36-Guna Ashtakoot compatibility.",
    ctaLabelHi: "३६ गुण कुंडली मिलान खोलें",
    ctaLabelEn: "Open 36-Guna Kundali Milan",
    targetType: "tab",
    targetKey: "milan"
  },
  {
    id: "graha_shani",
    iconKey: "planet",
    titleHi: "शनि साढ़े साती, राहु-केतु व ग्रह शांति",
    titleEn: "Shani Sade Sati & Graha Shanti",
    subtitleHi: "शनि ढैय्या, साढ़े साती, कालसर्प व नवग्रह दोष के प्रमाणिक उपाय",
    subtitleEn: "Authentic remedies for Saturn transit, Rahu-Ketu & Navagraha peace",
    mantraSanskrit: "नीलांजनसमाभासं रविपुत्रं यमाग्रजम्। छायामार्तण्डसम्भूतं तं नमामि शनैश्चरम्॥",
    mantraMeaningHi: "सूर्यपुत्र और छाया के नंदन कर्मफलदाता भगवान शनैश्चर को मैं श्रद्धापूर्वक प्रणाम करता हूँ।",
    mantraMeaningEn: "I bow to Lord Shani Dev, son of Surya and Chhaya, the righteous dispenser of Karma.",
    remedyHi: "शनिवार सायंकाल पीपल के वृक्ष के नीचे सरसों के तेल का दीपक जलाएं, हनुमान चालीसा का पाठ करें और असहाय जनों की सहायता करें। नीचे १-क्लिक में अपनी राशि की शनि साढ़े साती स्थिति जांचें।",
    remedyEn: "Light a mustard oil lamp under a Peepal tree on Saturday evening, recite Hanuman Chalisa, and check your live Sade Sati status below.",
    ctaLabelHi: "शनि साढ़े साती कैलकुलेटर खोलें",
    ctaLabelEn: "Check Shani Sade Sati Status",
    targetType: "gyan",
    targetKey: "shani-sadesati"
  },
  {
    id: "home_vastu",
    iconKey: "home",
    titleHi: "गृह शांति, वास्तु दोष व सुख-समृद्धि",
    titleEn: "Home Peace & Vastu Remedies",
    subtitleHi: "बिना तोड़-फोड़ घर की नकारात्मक ऊर्जा दूर करने के वैदिक उपाय",
    subtitleEn: "Remove negative energy & balance 16 Vastu zones without demolition",
    mantraSanskrit: "ॐ वास्तुपुरुषाय नमः। महाकाली महालक्ष्मी महासरस्वती स्वरूपिण्यै नमः॥",
    mantraMeaningHi: "वास्तु देवता और त्रिदेवी हमारे निवास स्थान में सुख, आरोग्य और सकारात्मक ऊर्जा का संचार करें।",
    mantraMeaningEn: "May Vastu Purusha and the Divine Mother bless our home with peace, health, and harmony.",
    remedyHi: "घर के ईशान कोण (उत्तर-पूर्व) को सदैव स्वच्छ व हल्का रखें, संध्या समय कपूर और लौंग की आरती करें तथा मुख्य द्वार पर स्वस्तिक चिह्न अंकित करें।",
    remedyEn: "Keep the North-East (Ishan Kon) clean and clutter-free, light camphor in the evening, and place an auspicious Swastik at the main entrance.",
    ctaLabelHi: "वास्तु एवं लाल किताब उपाय देखें",
    ctaLabelEn: "Explore Vastu & Lal Kitab Remedies",
    targetType: "gyan",
    targetKey: "vastu"
  },
  {
    id: "mental_peace",
    iconKey: "rudraksha",
    titleHi: "मानसिक शांति, एकाग्रता व इष्ट साधना",
    titleEn: "Mental Peace, Focus & Jaap",
    subtitleHi: "तनाव मुक्ति, सकारात्मक सोच और १०८ मनकों पर मंत्र जप",
    subtitleEn: "Relieve stress and cultivate inner peace with 108-bead Mantra Jaap",
    mantraSanskrit: "ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम्। उर्वारुकमिव बन्धनान् मृत्योर्मुक्षीय मामृतात्॥",
    mantraMeaningHi: "त्रिनेत्रधारी भगवान शिव हमारा पोषण करें और हमें समस्त भय, रोग व बंधनों से मुक्त कर अमृत्व प्रदान करें।",
    mantraMeaningEn: "May the Three-Eyed Lord Shiva nourish us and liberate us from fear and suffering into spiritual peace.",
    remedyHi: "प्रतिदिन ५ मिनट गहरी श्वास लेकर रुद्राक्ष या तुलसी माला पर ११ या १०८ बार अपने इष्ट मंत्र का जप करें और पूर्णिमा/सोमवार को चंद्र दर्शन करें।",
    remedyEn: "Practice 5 minutes of mindful breathing and chant 11 or 108 beads on the Digital Jaap Mala daily.",
    ctaLabelHi: "१०८ रुद्राक्ष जप माला शुरू करें",
    ctaLabelEn: "Start 108 Rudraksha Jaap Mala",
    targetType: "tab",
    targetKey: "jaap"
  },
  {
    id: "shubh_muhurat",
    iconKey: "om",
    titleHi: "आज का शुभ कार्य, वाहन क्रय व नामकरण",
    titleEn: "Today's Shubh Muhurat & Naming",
    subtitleHi: "नया कार्य शुरू करने, वाहन खरीदने या शिशु के नाम अक्षर का विचार",
    subtitleEn: "Auspicious timings for new beginnings, vehicle purchase & baby names",
    mantraSanskrit: "वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ। निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥",
    mantraMeaningHi: "करोड़ों सूर्यों के समान तेजस्वी भगवान श्री गणेश मेरे समस्त शुभ कार्यों को सदैव निर्विघ्न संपन्न करें।",
    mantraMeaningEn: "O Lord Ganesha of radiant splendor, bless all my endeavors with obstacle-free completion.",
    remedyHi: "कोई भी महत्वपूर्ण कार्य राहुकाल को छोड़कर अभिजित मुहूर्त या शुभ/लाभ/अमृत चौघड़िया में ही प्रारंभ करें और घर से निकलने से पूर्व दही-गुड़ या जल ग्रहण करें।",
    remedyEn: "Begin important tasks during Abhijit Muhurat or Shubh/Labh/Amrit Choghadiya while avoiding Rahukaal.",
    ctaLabelHi: "शुभ मुहूर्त व नाम राशि कैलकुलेटर खोलें",
    ctaLabelEn: "Open Shubh Muhurat & Name Rashi Tool",
    targetType: "tab",
    targetKey: "muhurat"
  }
];
const DAILY_SUVICHAR_BANK = [
  {
    id: "s1",
    shlokaSanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन। मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥",
    sourceHi: "श्रीमद्भगवद्गीता (अध्याय २, श्लोक ४७)",
    sourceEn: "Shrimad Bhagavad Gita (2.47)",
    meaningHi: "मनुष्य का अधिकार केवल श्रेष्ठ कर्म करने में है, फल की चिंता में नहीं। इसलिए फल की आसक्ति छोड़कर पूर्ण निष्ठा से अपना कर्तव्य निभाएं।",
    meaningEn: "You have a right to perform your prescribed duties, but not to anxiety over the fruits of action. Stay devoted to righteous effort.",
    sankalpHi: "आज मैं अपने सभी कार्य पूर्ण ईमानदारी, धैर्य और सकारात्मक भाव से करूंगा/करूंगी।",
    sankalpEn: "Today I will perform all my duties with sincerity, patience, and positive energy."
  },
  {
    id: "s2",
    shlokaSanskrit: "उद्यमेन हि सिध्यन्ति कार्याणि न मनोरथैः। न हि सुप्तस्य सिंहस्य प्रविशन्ति मुखे मृगाः॥",
    sourceHi: "हितोपदेश / सुभाषित रत्नभाण्डागार",
    sourceEn: "Hitopadesha / Subhashita",
    meaningHi: "पुरुषार्थ और परिश्रम से ही समस्त कार्य सिद्ध होते हैं, केवल कल्पना करने से नहीं—जैसे सोए हुए सिंह के मुख में शिकार स्वयं प्रवेश नहीं करता।",
    meaningEn: "Success is achieved through dedicated effort, not mere wishful thinking—just as prey does not walk into the mouth of a sleeping lion.",
    sankalpHi: "आज मैं आलस्य का त्याग कर अपने लक्ष्य की ओर एक ठोस कदम बढ़ाऊंगा/बढ़ाऊंगी।",
    sankalpEn: "Today I will overcome procrastination and take one decisive step toward my goal."
  },
  {
    id: "s3",
    shlokaSanskrit: "सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः। सर्वे भद्राणि पश्यन्तु मा कश्चिद्दुःखभाग्भवेत्॥",
    sourceHi: "बृहदारण्यक उपनिषद् / सनातन प्रार्थना",
    sourceEn: "Vedic Peace Invocation",
    meaningHi: "संसार के सभी प्राणी सुखी रहें, सभी निरोगी रहें, सभी का कल्याण हो और किसी को भी दुःख का भागी न बनना पड़े।",
    meaningEn: "May all beings be happy, may all be free from illness, may all witness auspiciousness, and may none suffer.",
    sankalpHi: "आज मैं अपनी वाणी और व्यवहार से परिवार व समाज में प्रेम और शांति फैलाऊंगा/फैलाऊंगी।",
    sankalpEn: "Today I will spread kindness, harmony, and goodwill through my words and actions."
  },
  {
    id: "s4",
    shlokaSanskrit: "विद्या ददाति विनयं विनयाद्याति पात्रताम्। पात्रत्वाद्धनमाप्नोति धनाद्धर्मं ततः सुखम्॥",
    sourceHi: "हितोपदेश (श्लोक ६)",
    sourceEn: "Hitopadesha (Verse 6)",
    meaningHi: "सच्चा ज्ञान विनम्रता देता है, विनम्रता से योग्यता आती है, योग्यता से समृद्धि प्राप्त होती है और समृद्धि से धर्म व सच्चा सुख मिलता है।",
    meaningEn: "True knowledge bestows humility; from humility comes worthiness; from worthiness comes prosperity, righteous action, and lasting happiness.",
    sankalpHi: "आज मैं अहंकार से दूर रहकर विनम्रता और सीखने की भावना को अपनाऊंगा/अपनाऊंगी।",
    sankalpEn: "Today I will embrace humility and continuous learning in every interaction."
  },
  {
    id: "s5",
    shlokaSanskrit: "मङ्गलम् भगवान विष्णुः मङ्गलम् गरुड़ध्वजः। मङ्गलम् पुण्डरीकाक्षः मङ्गलाय तनो हरिः॥",
    sourceHi: "वैदिक मंगलाचरण स्तोत्र",
    sourceEn: "Vedic Mangalacharan Stotra",
    meaningHi: "भगवान श्रीहरि विष्णु मंगलमय हैं, गरुड़ध्वज मंगलमय हैं, कमलनयन भगवान हमारे जीवन के प्रत्येक क्षण को मंगलमय बनाएं।",
    meaningEn: "Auspicious is Lord Vishnu, auspicious is the wielder of Garuda; may the lotus-eyed Lord Hari bless our life with auspiciousness.",
    sankalpHi: "ईश्वर की कृपा पर विश्वास रखते हुए आज मैं हर परिस्थिति में शांत और प्रसन्न रहूंगा/रहूंगी।",
    sankalpEn: "Trusting in Divine grace, I will remain calm, grateful, and joyful today."
  }
];
const SADHANA_STORAGE_PREFIX = "panditji_daily_sadhana_v1_";
const DailySadhanaEngagementWidget = ({
  onNavigateTab,
  onNavigateGyanKosh,
  loggedInUserName
}) => {
  const { tr } = useLanguage();
  const todayDateKey = getISTCalendarParts(/* @__PURE__ */ new Date()).dateKey;
  const [completedTasks, setCompletedTasks] = reactExports.useState(() => {
    try {
      const raw = localStorage.getItem(SADHANA_STORAGE_PREFIX + todayDateKey);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) return parsed;
      }
    } catch {
    }
    return [];
  });
  const [punyaScore, setPunyaScore] = reactExports.useState(() => getPunyaPoints());
  const [sadhanaStreak, setSadhanaStreak] = reactExports.useState(() => getSadhanaDays());
  const [activeView, setActiveView] = reactExports.useState("checklist");
  const [selectedGuidanceId, setSelectedGuidanceId] = reactExports.useState(LIFE_GUIDANCE_ITEMS[0].id);
  const [quizRoundOffset, setQuizRoundOffset] = reactExports.useState(0);
  const [suvicharOffset, setSuvicharOffset] = reactExports.useState(0);
  const [selectedAnswers, setSelectedAnswers] = reactExports.useState({});
  const [toastMsg, setToastMsg] = reactExports.useState(null);
  reactExports.useEffect(() => {
    const syncPunya = () => {
      setPunyaScore(getPunyaPoints());
      setSadhanaStreak(getSadhanaDays());
    };
    window.addEventListener("panditji_punya_updated", syncPunya);
    return () => window.removeEventListener("panditji_punya_updated", syncPunya);
  }, []);
  const showQuickToast = (msg) => {
    setToastMsg(msg);
    window.setTimeout(() => {
      setToastMsg((prev) => prev === msg ? null : prev);
    }, 3200);
  };
  const markTaskComplete = (taskId, punyaReward, labelHi) => {
    if (completedTasks.includes(taskId)) return;
    const next = [...completedTasks, taskId];
    setCompletedTasks(next);
    try {
      localStorage.setItem(SADHANA_STORAGE_PREFIX + todayDateKey, JSON.stringify(next));
    } catch {
    }
    const res = addPunyaPoint(punyaReward);
    setPunyaScore(res.newPoints);
    setSadhanaStreak(getSadhanaDays());
    vedicAudio.playCrispTempleBell(0.7);
    showQuickToast(`${labelHi} पूर्ण! +${punyaReward} पुण्य अंक जुड़े`);
  };
  const spiritualRank = reactExports.useMemo(() => {
    if (punyaScore >= 300) {
      return {
        badgeKey: "crown",
        titleHi: "सनातन धर्म रक्षक",
        titleEn: "Sanatan Dharma Rakshak",
        nextTarget: 500,
        nextTitleHi: "ब्रह्मर्षि साधक",
        nextTitleEn: "Brahmarshi Sadhak"
      };
    }
    if (punyaScore >= 150) {
      return {
        badgeKey: "trishul",
        titleHi: "सिद्ध वैदिक उपासक",
        titleEn: "Siddha Vedic Upasak",
        nextTarget: 300,
        nextTitleHi: "सनातन धर्म रक्षक",
        nextTitleEn: "Sanatan Dharma Rakshak"
      };
    }
    if (punyaScore >= 50) {
      return {
        badgeKey: "diya",
        titleHi: "निष्ठावान भक्त",
        titleEn: "Nishthavan Bhakt",
        nextTarget: 150,
        nextTitleHi: "सिद्ध वैदिक उपासक",
        nextTitleEn: "Siddha Vedic Upasak"
      };
    }
    return {
      badgeKey: "sprout",
      titleHi: "प्रारंभिक साधक",
      titleEn: "Prarambhik Sadhak",
      nextTarget: 50,
      nextTitleHi: "निष्ठावान भक्त",
      nextTitleEn: "Nishthavan Bhakt"
    };
  }, [punyaScore]);
  const todaysQuestions = reactExports.useMemo(() => {
    const seed = todayDateKey.split("").reduce((acc, ch) => acc + ch.charCodeAt(0), 0) + quizRoundOffset * 3;
    const picked = [];
    for (let i = 0; i < 3; i++) {
      const idx = (seed + i * 2) % VEDIC_QUIZ_BANK.length;
      picked.push(VEDIC_QUIZ_BANK[idx]);
    }
    return picked;
  }, [todayDateKey, quizRoundOffset]);
  const todaysSuvichar = reactExports.useMemo(() => {
    const seed = todayDateKey.split("").reduce((acc, ch) => acc + ch.charCodeAt(0), 0) + suvicharOffset;
    return DAILY_SUVICHAR_BANK[seed % DAILY_SUVICHAR_BANK.length];
  }, [todayDateKey, suvicharOffset]);
  const activeGuidanceItem = reactExports.useMemo(
    () => LIFE_GUIDANCE_ITEMS.find((item) => item.id === selectedGuidanceId) || LIFE_GUIDANCE_ITEMS[0],
    [selectedGuidanceId]
  );
  const handleSelectQuizOption = (q, optIndex) => {
    if (selectedAnswers[q.id] !== void 0) return;
    const nextAnswers = { ...selectedAnswers, [q.id]: optIndex };
    setSelectedAnswers(nextAnswers);
    const isCorrect = optIndex === q.correctIndex;
    if (isCorrect) {
      vedicAudio.playCrispTempleBell(0.75);
      const res = addPunyaPoint(5);
      setPunyaScore(res.newPoints);
      showQuickToast(tr("सटीक शास्त्रोक्त उत्तर! +5 पुण्य अंक प्राप्त हुए", "Correct Vedic Answer! +5 Punya Points"));
    } else {
      vedicAudio.playClickSpark(0.35);
    }
    const answeredCount = todaysQuestions.filter((item) => nextAnswers[item.id] !== void 0).length;
    if (answeredCount === 3 && !completedTasks.includes("daily_quiz")) {
      markTaskComplete("daily_quiz", 10, tr("दैनिक धर्म-ज्योतिष प्रश्नोत्तरी", "Daily Dharma Quiz"));
    }
  };
  const correctCountInRound = todaysQuestions.filter(
    (q) => selectedAnswers[q.id] === q.correctIndex
  ).length;
  const answeredCountInRound = todaysQuestions.filter(
    (q) => selectedAnswers[q.id] !== void 0
  ).length;
  const sadhanaSteps = [
    {
      id: "mandir_darshan",
      icon: Landmark,
      title: tr("श्री डिजिटल मंदिर दर्शन व घंटी नाद", "Digital Mandir Darshan & Bell"),
      subtitle: tr("आज के अधिष्ठाता देव की अखण्ड ज्योति व पुष्पांजलि", "Light Akhand Diya & offer flowers to today's Deity"),
      reward: 5,
      ctaLabel: tr("दर्शन करें", "Visit Mandir"),
      onAction: () => {
        markTaskComplete("mandir_darshan", 5, tr("डिजिटल मंदिर दर्शन", "Mandir Darshan"));
        onNavigateTab("mandir");
      }
    },
    {
      id: "mantra_jaap",
      icon: Flame,
      title: tr("नित्य मंत्र जप साधना (११ या १०८ मनके)", "Daily Mantra Jaap (11 or 108 Beads)"),
      subtitle: tr("रुद्राक्ष माला पर गायत्री, महामृत्युंजय या इष्ट मंत्र जप", "Chant Gayatri, Mahamrityunjaya or Ishta Mantra"),
      reward: 5,
      ctaLabel: tr("जप शुरू करें", "Start Jaap"),
      onAction: () => {
        markTaskComplete("mantra_jaap", 5, tr("नित्य मंत्र जप संकल्प", "Mantra Jaap Sankalp"));
        onNavigateTab("jaap");
      }
    },
    {
      id: "panchang_rashifal",
      icon: Calendar,
      title: tr("आज का शुभ चौघड़िया व राशिफल दर्शन", "Check Today's Choghadiya & Rashifal"),
      subtitle: tr("अभिजित मुहूर्त, राहुकाल और अपनी राशि का गोचर फल जानें", "Check Abhijit Muhurat, Rahukaal & your Rashi forecast"),
      reward: 5,
      ctaLabel: tr("राशिफल देखें", "View Rashifal"),
      onAction: () => {
        markTaskComplete("panchang_rashifal", 5, tr("पंचांग एवं राशिफल दर्शन", "Panchang & Rashifal"));
        const el = document.getElementById("daily-rashifal-section");
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        } else {
          onNavigateTab("panchang");
        }
      }
    },
    {
      id: "daily_quiz",
      icon: BookOpen,
      title: tr("दैनिक सनातन एवं ज्योतिष प्रश्नोत्तरी (३ प्रश्न)", "Daily Sanatan & Jyotish Quiz (3 Questions)"),
      subtitle: tr("रोचक शास्त्रोक्त प्रश्नों के उत्तर दें और तुरंत ज्ञान व पुण्य पाएं", "Answer 3 quick Vedic questions & learn Shastric facts"),
      reward: 10,
      ctaLabel: tr("क्विज़ खेलें", "Play Quiz"),
      onAction: () => {
        vedicAudio.playClickSpark(0.4);
        setActiveView("quiz");
      }
    }
  ];
  const renderGuidanceIcon = (iconKey, className = "w-4 h-4") => {
    switch (iconKey) {
      case "briefcase":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: `${className} shrink-0`, strokeWidth: 1.5 });
      case "heart":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(HeartHandshake, { className: `${className} shrink-0`, strokeWidth: 1.5 });
      case "planet":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "navagraha", className: `${className} shrink-0`, tone: "current" });
      case "home":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(House, { className: `${className} shrink-0`, strokeWidth: 1.5 });
      case "rudraksha":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "rudraksha", className: `${className} shrink-0`, tone: "current" });
      case "om":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "om", className: `${className} shrink-0`, tone: "current" });
    }
  };
  const progressPercent = Math.round(completedTasks.length / sadhanaSteps.length * 100);
  const displayYajmanTitle = loggedInUserName?.trim() ? loggedInUserName.trim() : tr("सनातन प्रेमी यजमान", "Devoted Yajman");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      "aria-label": tr("नित्य साधना एवं सनातन प्रश्नोत्तरी", "Daily Sadhana & Sanatan Quiz"),
      className: "relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1b1006] via-[#150c04] to-[#0d0804] border-2 border-amber-500/60 p-4 sm:p-6 shadow-[0_14px_45px_rgba(0,0,0,0.85)]",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-24 -right-24 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" }),
        toastMsg && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 px-4 py-2.5 rounded-2xl bg-gradient-to-r from-emerald-950/95 via-emerald-900/90 to-teal-950/95 border border-emerald-400/60 text-emerald-200 text-xs sm:text-sm font-bold flex items-center justify-between shadow-lg animate-fadeIn", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-4 h-4 text-yellow-300 flex-shrink-0" }),
            toastMsg
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] px-2 py-0.5 rounded-lg bg-emerald-500/20 text-yellow-300 border border-emerald-400/30", children: [
            "कुल पुण्य: ",
            punyaScore
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col lg:flex-row lg:items-center justify-between gap-3 pb-4 border-b border-amber-800/40", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-1.5 mb-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-yellow-300 text-[11px] font-bold", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "w-3.5 h-3.5 text-theme-primary", strokeWidth: 1.5 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr(
                  `${sadhanaStreak} दिन साधना • ${punyaScore} पुण्य अंक`,
                  `${sadhanaStreak}-Day Streak • ${punyaScore} Punya`
                ) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-200 text-[11px] font-bold", children: [
                spiritualRank.badgeKey === "crown" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Crown, { className: "w-3.5 h-3.5 text-yellow-300 shrink-0", strokeWidth: 1.5 }) : spiritualRank.badgeKey === "trishul" ? /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "trishul", className: "w-3.5 h-3.5 shrink-0", tone: "theme" }) : spiritualRank.badgeKey === "diya" ? /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "diya", className: "w-3.5 h-3.5 shrink-0", tone: "theme" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Sprout, { className: "w-3.5 h-3.5 text-emerald-300 shrink-0", strokeWidth: 1.5 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr(
                  `आपकी श्रेणी: ${spiritualRank.titleHi}`,
                  `Your Rank: ${spiritualRank.titleEn}`
                ) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg sm:text-xl font-extrabold font-vedic text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-amber-200 to-amber-400", children: tr(
              "आज का नित्य साधना संकल्प, त्वरित समाधान एवं सनातन क्विज़",
              "Today's Daily Sadhana, 1-Tap Guidance & Sanatan Quiz"
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-amber-200/80 mt-0.5", children: tr(
              "प्रतिदिन २ मिनट की आध्यात्मिक दिनचर्या पूर्ण करें, अपनी समस्या का शास्त्रोक्त उपाय जानें और पुण्य अर्जित करें",
              "Complete your 2-minute spiritual routine, find instant Vedic remedies & earn Punya points"
            ) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-1.5 bg-black/50 p-1.5 rounded-2xl border border-amber-700/50 self-start lg:self-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => {
                  vedicAudio.playClickSpark(0.3);
                  setActiveView("checklist");
                },
                className: `px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-extrabold transition-all cursor-pointer flex items-center gap-1.5 ${activeView === "checklist" ? "bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 shadow-sm" : "text-amber-200/80 hover:text-white"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3.5 h-3.5" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    tr("साधना संकल्प", "Sadhana"),
                    " (",
                    completedTasks.length,
                    "/4)"
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => {
                  vedicAudio.playClickSpark(0.3);
                  setActiveView("guidance");
                },
                className: `px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-extrabold transition-all cursor-pointer flex items-center gap-1.5 ${activeView === "guidance" ? "bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 shadow-sm" : "text-amber-200/80 hover:text-white"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(HeartHandshake, { className: "w-3.5 h-3.5" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr("आज का समाधान", "1-Tap Remedy") })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => {
                  vedicAudio.playClickSpark(0.3);
                  setActiveView("quiz");
                },
                className: `px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-extrabold transition-all cursor-pointer flex items-center gap-1.5 ${activeView === "quiz" ? "bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 shadow-sm" : "text-amber-200/80 hover:text-white"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleQuestionMark, { className: "w-3.5 h-3.5" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr("धर्म-ज्योतिष क्विज़", "Vedic Quiz") })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => {
                  vedicAudio.playClickSpark(0.3);
                  setActiveView("suvichar");
                },
                className: `px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-extrabold transition-all cursor-pointer flex items-center gap-1.5 ${activeView === "suvichar" ? "bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 shadow-sm" : "text-amber-200/80 hover:text-white"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquareQuote, { className: "w-3.5 h-3.5" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr("आज का सुविचार", "Daily Shloka") })
                ]
              }
            )
          ] })
        ] }),
        activeView === "checklist" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-4 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-2 text-xs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center gap-1.5 text-amber-200/90 font-semibold", children: completedTasks.length === 4 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3.5 h-3.5 text-emerald-300 shrink-0", strokeWidth: 1.5 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr("अद्भुत! आज के चारों आध्यात्मिक संकल्प पूर्ण हुए!", "All 4 Daily Sadhana steps completed today!") })
              ] }) : tr(
                `आज की साधना प्रगति: ${completedTasks.length} / 4 चरण पूर्ण`,
                `Today's Sadhana Progress: ${completedTasks.length} / 4 completed`
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-yellow-300", children: tr(
                `अगली श्रेणी (${spiritualRank.nextTitleHi}): ${Math.max(0, spiritualRank.nextTarget - punyaScore)} पुण्य शेष • ${progressPercent}%`,
                `Next Rank (${spiritualRank.nextTitleEn}): ${Math.max(0, spiritualRank.nextTarget - punyaScore)} pts left • ${progressPercent}%`
              ) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-2.5 rounded-full bg-black/60 border border-amber-800/50 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "h-full bg-gradient-to-r from-amber-500 via-yellow-400 to-emerald-400 transition-all duration-500",
                style: { width: `${Math.max(8, progressPercent)}%` }
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: sadhanaSteps.map((step) => {
            const isDone = completedTasks.includes(step.id);
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: `p-3.5 rounded-2xl border transition-all flex items-center justify-between gap-3 ${isDone ? "bg-gradient-to-r from-emerald-950/60 via-[#132218] to-slate-950 border-emerald-500/50" : "bg-gradient-to-r from-[#221409] via-[#1a0f06] to-slate-950 border-amber-700/50 hover:border-amber-400/80"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => isDone ? step.onAction() : markTaskComplete(step.id, step.reward, step.title),
                        title: tr("पूर्ण चिह्नित करें", "Mark Complete"),
                        className: `w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0 border transition-all cursor-pointer ${isDone ? "bg-emerald-500 text-slate-950 border-emerald-300 shadow-[0_0_12px_rgba(16,185,129,0.4)]" : "bg-amber-500/15 text-yellow-300 border border-amber-500/40 hover:bg-amber-500/30"}`,
                        children: isDone ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-5 h-5 text-slate-950", strokeWidth: 1.5 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(step.icon, { className: "w-5 h-5 text-theme-primary", strokeWidth: 1.5 })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 flex-wrap", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "h3",
                          {
                            className: `text-xs sm:text-sm font-bold font-vedic ${isDone ? "text-emerald-200 line-through decoration-emerald-500/60" : "text-amber-100"}`,
                            children: step.title
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] px-1.5 py-0.5 rounded-md bg-amber-500/20 text-yellow-300 border border-amber-400/30 font-bold", children: [
                          "+",
                          step.reward,
                          " पुण्य"
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-amber-200/75 line-clamp-1 mt-0.5", children: step.subtitle })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: step.onAction,
                      className: `px-3 py-2 rounded-xl text-xs font-extrabold flex-shrink-0 flex items-center gap-1 transition-all cursor-pointer ${isDone ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-500/30" : "bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 hover:from-amber-400 hover:to-yellow-300 shadow-sm"}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: isDone ? tr("पुनः खोलें", "Open") : step.ctaLabel }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3.5 h-3.5" })
                      ]
                    }
                  )
                ]
              },
              step.id
            );
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-2 flex flex-wrap items-center justify-between gap-2 border-t border-amber-900/40 text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-amber-300/90 font-semibold flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Compass, { className: "w-3.5 h-3.5 text-amber-400" }),
              tr("त्वरित ज्योतिष व समाधान टूल्स (१-क्लिक):", "Quick 1-Click Vedic Tools:")
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    vedicAudio.playClickSpark(0.35);
                    setActiveView("guidance");
                  },
                  className: "inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/35 text-emerald-200 border border-emerald-500/40 text-[11px] font-bold transition-colors cursor-pointer",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3 h-3 shrink-0", strokeWidth: 1.5 }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr("आपकी समस्या का १-क्लिक उपाय", "1-Tap Problem & Remedy") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3 h-3 shrink-0", strokeWidth: 1.5 })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => onNavigateTab("muhurat"),
                  className: "inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-500/15 hover:bg-amber-500/30 text-yellow-300 border border-amber-500/30 text-[11px] font-bold transition-colors cursor-pointer",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "om", className: "w-3 h-3 shrink-0", tone: "theme" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr("नाम से राशि व रत्न", "Rashi by Name") })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => onNavigateGyanKosh("shani-sadesati"),
                  className: "inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-indigo-500/15 hover:bg-indigo-500/30 text-indigo-200 border border-indigo-500/30 text-[11px] font-bold transition-colors cursor-pointer",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "navagraha", className: "w-3 h-3 shrink-0", tone: "theme" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr("शनि साढ़े साती जांच", "Shani Sade Sati") })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    vedicAudio.playClickSpark(0.35);
                    setActiveView("suvichar");
                  },
                  className: "inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-rose-500/20 hover:bg-rose-500/35 text-rose-200 border border-rose-500/40 text-[11px] font-bold transition-colors cursor-pointer",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "diya", className: "w-3 h-3 shrink-0", tone: "theme" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr("आज का श्लोक व WhatsApp कार्ड", "Daily Shloka Card") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3 h-3 shrink-0", strokeWidth: 1.5 })
                  ]
                }
              )
            ] })
          ] })
        ] }),
        activeView === "guidance" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-4 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-black/40 p-3.5 rounded-2xl border border-amber-700/40", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-xs sm:text-sm font-extrabold text-yellow-300 font-vedic mb-2 flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Compass, { className: "w-4 h-4 text-theme-primary shrink-0", strokeWidth: 1.5 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr("आज आप किस विषय में शास्त्रोक्त मार्गदर्शन व उपाय चाहते हैं? (१-क्लिक चुनें):", "Select your current life question for an instant Shastric Mantra & Remedy:") })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-2", children: LIFE_GUIDANCE_ITEMS.map((item) => {
              const isSelected = item.id === activeGuidanceItem.id;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    vedicAudio.playClickSpark(0.35);
                    setSelectedGuidanceId(item.id);
                  },
                  className: `p-2.5 rounded-xl border text-left transition-all cursor-pointer flex items-center gap-2 ${isSelected ? "bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 border-yellow-200 font-extrabold shadow-md" : "bg-[#1f1208] hover:bg-[#2a180a] text-amber-100 border-amber-700/50"}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-shrink-0", children: renderGuidanceIcon(item.iconKey, "w-4 h-4") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs leading-tight line-clamp-2", children: tr(item.titleHi, item.titleEn) })
                  ]
                },
                item.id
              );
            }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-[#241407] via-[#190e05] to-[#100904] border-2 border-amber-500/60 space-y-3.5 shadow-lg", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-2 border-b border-amber-800/50 pb-2.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-theme-primary", children: renderGuidanceIcon(activeGuidanceItem.iconKey, "w-5 h-5") }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm sm:text-base font-extrabold font-vedic text-yellow-300", children: tr(activeGuidanceItem.titleHi, activeGuidanceItem.titleEn) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-amber-200/80", children: tr(activeGuidanceItem.subtitleHi, activeGuidanceItem.subtitleEn) })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    vedicAudio.playCrispTempleBell(0.8);
                    setTimeout(() => vedicAudio.playShankh(), 250);
                    const res = addPunyaPoint(2);
                    setPunyaScore(res.newPoints);
                    showQuickToast(tr("सिद्ध मंत्र श्रवण एवं संकल्प! +2 पुण्य अंक", "Mantra Sankalp! +2 Punya Points"));
                  },
                  className: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/35 text-yellow-300 border border-amber-400/40 text-xs font-bold cursor-pointer transition-colors",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "w-3.5 h-3.5 text-theme-primary shrink-0", strokeWidth: 1.5 }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr("शंख-घंटी नाद के साथ संकल्प लें (+2 पुण्य)", "Take Sankalp with Bell (+2 Punya)") })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3.5 rounded-xl bg-black/50 border border-amber-600/40 space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "om", className: "w-3.5 h-3.5 shrink-0", tone: "theme" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr("शास्त्रोक्त सिद्ध मंत्र (प्रातः ११ बार जपें):", "Shastric Siddha Mantra (Chant 11 times daily):") })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm sm:text-base font-extrabold font-vedic text-yellow-200 leading-relaxed", children: activeGuidanceItem.mantraSanskrit }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-amber-200/85", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-amber-300", children: tr("भावार्थ:", "Meaning:") }),
                " ",
                tr(activeGuidanceItem.mantraMeaningHi, activeGuidanceItem.mantraMeaningEn)
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3.5 rounded-xl bg-emerald-950/35 border border-emerald-500/40 space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs font-extrabold text-emerald-300 flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Leaf, { className: "w-3.5 h-3.5 text-emerald-300 shrink-0", strokeWidth: 1.5 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr("आचार्य पण्डित शशांक शर्मा जी का व्यावहारिक उपाय:", "Practical Vedic Remedy by Acharya Ji:") })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm text-emerald-100/95 leading-relaxed", children: tr(activeGuidanceItem.remedyHi, activeGuidanceItem.remedyEn) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-2 pt-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    const text = `*पण्डित जी ऑनलाइन - वैदिक समाधान*

*विषय:* ${activeGuidanceItem.titleHi}

*सिद्ध मंत्र:*
${activeGuidanceItem.mantraSanskrit}

*शास्त्रोक्त उपाय:*
${activeGuidanceItem.remedyHi}

निःशुल्क कुंडली, पंचांग व उपाय देखें:
https://www.panditjionline.online`;
                    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
                  },
                  className: "px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-extrabold flex items-center gap-1.5 cursor-pointer shadow-sm",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { className: "w-3.5 h-3.5" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr("यह उपाय WhatsApp पर शेयर करें", "Share Remedy on WhatsApp") })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    if (activeGuidanceItem.targetType === "gyan") {
                      onNavigateGyanKosh(activeGuidanceItem.targetKey);
                    } else {
                      onNavigateTab(activeGuidanceItem.targetKey);
                    }
                  },
                  className: "px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-slate-950 text-xs sm:text-sm font-extrabold flex items-center gap-1.5 cursor-pointer shadow-md",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr(activeGuidanceItem.ctaLabelHi, activeGuidanceItem.ctaLabelEn) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
                  ]
                }
              )
            ] })
          ] })
        ] }),
        activeView === "quiz" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-4 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-2 bg-black/40 px-3.5 py-2.5 rounded-2xl border border-amber-700/40", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs sm:text-sm font-bold text-amber-100", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "w-4 h-4 text-yellow-400" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr(
                `आपका स्कोर: ${correctCountInRound} / ${todaysQuestions.length} सही (${answeredCountInRound}/3 उत्तर दिए)`,
                `Your Score: ${correctCountInRound} / ${todaysQuestions.length} Correct (${answeredCountInRound}/3 Answered)`
              ) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => {
                  vedicAudio.playClickSpark(0.35);
                  setQuizRoundOffset((prev) => prev + 1);
                },
                className: "px-3 py-1 rounded-xl bg-amber-500/20 hover:bg-amber-500/35 text-yellow-300 border border-amber-400/40 text-xs font-bold flex items-center gap-1.5 cursor-pointer transition-colors",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-3.5 h-3.5" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr("नए ३ प्रश्न लाएं", "Next 3 Questions") })
                ]
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3.5", children: todaysQuestions.map((q, idx) => {
            const userChoice = selectedAnswers[q.id];
            const isAnswered = userChoice !== void 0;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "p-4 rounded-2xl bg-gradient-to-b from-[#211308] to-[#120a04] border border-amber-700/50 space-y-3",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-amber-500/20 text-yellow-300 border border-amber-400/30", children: tr(`प्रश्न ${idx + 1} • ${q.categoryHi}`, `Q${idx + 1} • ${q.categoryEn}`) }),
                    isAnswered && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: `inline-flex items-center gap-1 text-xs font-extrabold px-2 py-0.5 rounded-lg ${userChoice === q.correctIndex ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40" : "bg-rose-500/20 text-rose-300 border border-rose-500/40"}`,
                        children: userChoice === q.correctIndex ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-3.5 h-3.5 shrink-0", strokeWidth: 1.5 }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr("सही उत्तर (+5 पुण्य)", "Correct (+5 Punya)") })
                        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3.5 h-3.5 shrink-0", strokeWidth: 1.5 }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr("शास्त्रोक्त उत्तर नीचे देखें", "See Shastric Answer Below") })
                        ] })
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm sm:text-base font-extrabold font-vedic text-amber-50 leading-snug", children: tr(q.questionHi, q.questionEn) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-2", children: q.optionsHi.map((optHi, optIdx) => {
                    const optLabel = tr(optHi, q.optionsEn[optIdx] || optHi);
                    const isThisSelected = userChoice === optIdx;
                    const isThisCorrect = q.correctIndex === optIdx;
                    let btnStyle = "bg-slate-950/80 border-amber-800/60 text-amber-100 hover:border-amber-400 hover:bg-amber-950/40";
                    if (isAnswered) {
                      if (isThisCorrect) {
                        btnStyle = "bg-emerald-950/90 border-emerald-400 text-emerald-200 font-extrabold shadow-[0_0_15px_rgba(16,185,129,0.25)]";
                      } else if (isThisSelected && !isThisCorrect) {
                        btnStyle = "bg-rose-950/80 border-rose-500/70 text-rose-200";
                      } else {
                        btnStyle = "bg-slate-950/40 border-amber-900/30 text-amber-200/50";
                      }
                    }
                    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "button",
                      {
                        type: "button",
                        disabled: isAnswered,
                        onClick: () => handleSelectQuizOption(q, optIdx),
                        className: `p-2.5 sm:p-3 rounded-xl border text-left text-xs sm:text-sm transition-all flex items-center justify-between gap-2 ${isAnswered ? "cursor-default" : "cursor-pointer"} ${btnStyle}`,
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "mr-1.5 text-amber-400", children: ["A.", "B.", "C.", "D."][optIdx] }),
                            optLabel
                          ] }),
                          isAnswered && isThisCorrect && /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 text-emerald-400 flex-shrink-0" })
                        ]
                      },
                      optIdx
                    );
                  }) }),
                  isAnswered && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-xl bg-amber-950/40 border border-amber-500/40 text-xs text-amber-100/95 leading-relaxed", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { className: "text-yellow-300 flex items-center gap-1.5 mb-0.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-3.5 h-3.5 text-theme-primary shrink-0", strokeWidth: 1.5 }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr("शास्त्र प्रमाण एवं व्याख्या:", "Shastric Explanation:") })
                    ] }),
                    tr(q.explanationHi, q.explanationEn)
                  ] })
                ]
              },
              q.id
            );
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-3 pt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => setActiveView("checklist"),
                className: "inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-black/50 hover:bg-black/70 text-amber-200 border border-amber-700/50 text-xs font-bold cursor-pointer",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-3.5 h-3.5 shrink-0", strokeWidth: 1.5 }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr("दैनिक साधना सूची पर वापस जाएं", "Back to Daily Sadhana Checklist") })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    const shareText = `*पण्डित जी ऑनलाइन - दैनिक सनातन एवं ज्योतिष प्रश्नोत्तरी*

मैंने आज के वैदिक ज्योतिष क्विज़ में *${correctCountInRound}/3* सही उत्तर दिए और *${punyaScore} पुण्य अंक* अर्जित किए!

आप भी अपनी जन्म कुंडली, राशिफल व सनातन ज्ञान यहां निःशुल्क देखें:
https://www.panditjionline.online`;
                    window.open(
                      `https://wa.me/?text=${encodeURIComponent(shareText)}`,
                      "_blank",
                      "noopener,noreferrer"
                    );
                  },
                  className: "px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-extrabold flex items-center gap-1.5 cursor-pointer shadow-sm",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { className: "w-3.5 h-3.5" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr("WhatsApp पर स्कोर शेयर करें", "Share Score on WhatsApp") })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    vedicAudio.playClickSpark(0.4);
                    setQuizRoundOffset((prev) => prev + 1);
                  },
                  className: "px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-slate-950 text-xs font-extrabold flex items-center gap-1.5 cursor-pointer shadow-md",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-3.5 h-3.5" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr("अगले ३ नए प्रश्न खेलें", "Play Next 3 Questions") })
                  ]
                }
              )
            ] })
          ] })
        ] }),
        activeView === "suvichar" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-4 space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#2a1506] via-[#1b0d04] to-[#0e0703] border-2 border-amber-400/70 shadow-xl space-y-4 relative overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-2 border-b border-amber-700/50 pb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 text-[11px] font-extrabold px-2.5 py-0.5 rounded-full bg-amber-500/20 text-yellow-300 border border-amber-400/40", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SacredIcon, { name: "diya", className: "w-3.5 h-3.5 shrink-0", tone: "theme" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr("आज का दिव्य श्लोक एवं आशीर्वाद कार्ड", "Daily Vedic Shloka & Blessing Card") })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm sm:text-base font-extrabold text-amber-100 mt-1.5", children: tr(
                `कल्याणमस्तु: ${displayYajmanTitle}`,
                `Divine Blessings for: ${displayYajmanTitle}`
              ) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => {
                  vedicAudio.playClickSpark(0.35);
                  setSuvicharOffset((prev) => prev + 1);
                },
                className: "px-3 py-1.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/35 text-yellow-300 border border-amber-400/40 text-xs font-bold flex items-center gap-1.5 cursor-pointer",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-3.5 h-3.5" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr("अन्य श्लोक देखें", "Next Shloka") })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-2xl bg-black/50 border border-amber-500/40 text-center space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-base sm:text-lg font-extrabold font-vedic text-yellow-300 leading-relaxed", children: [
              "“",
              todaysSuvichar.shlokaSanskrit,
              "”"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] font-bold text-amber-400", children: [
              "— ",
              tr(todaysSuvichar.sourceHi, todaysSuvichar.sourceEn)
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-xs sm:text-sm text-amber-100/95 leading-relaxed", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-yellow-300", children: tr("हिंदी भावार्थ:", "Meaning:") }),
              " ",
              tr(todaysSuvichar.meaningHi, todaysSuvichar.meaningEn)
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-200 text-xs flex items-start gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3.5 h-3.5 text-emerald-300 shrink-0 mt-0.5", strokeWidth: 1.5 }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-emerald-300", children: tr("आज का शुभ संकल्प:", "Today's Positive Affirmation:") }),
                " ",
                tr(todaysSuvichar.sankalpHi, todaysSuvichar.sankalpEn)
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-amber-800/40", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: async () => {
                  const text = `*आज का वैदिक सुविचार (पण्डित जी ऑनलाइन)*

“${todaysSuvichar.shlokaSanskrit}”
— ${todaysSuvichar.sourceHi}

*भावार्थ:* ${todaysSuvichar.meaningHi}

*आज का संकल्प:* ${todaysSuvichar.sankalpHi}

आचार्य पण्डित शशांक शर्मा (रुद्रपुर)
https://www.panditjionline.online`;
                  try {
                    await navigator.clipboard.writeText(text);
                    const res = addPunyaPoint(2);
                    setPunyaScore(res.newPoints);
                    showQuickToast(tr("सुविचार कॉपी हो गया! (+2 पुण्य अंक)", "Shloka Copied! (+2 Punya)"));
                  } catch {
                    showQuickToast(tr("सुविचार तैयार है", "Ready to share"));
                  }
                },
                className: "px-3.5 py-2 rounded-xl bg-amber-500/20 hover:bg-amber-500/35 text-yellow-300 border border-amber-400/40 text-xs font-extrabold flex items-center gap-1.5 cursor-pointer",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "w-3.5 h-3.5" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr("सुविचार कॉपी करें (+2 पुण्य)", "Copy Shloka (+2 Punya)") })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => {
                  const text = `*आज का वैदिक सुविचार एवं आशीर्वाद*

“${todaysSuvichar.shlokaSanskrit}”
— ${todaysSuvichar.sourceHi}

*भावार्थ:* ${todaysSuvichar.meaningHi}

*आज का शुभ संकल्प:* ${todaysSuvichar.sankalpHi}

*पण्डित जी ऑनलाइन (आचार्य पण्डित शशांक शर्मा, रुद्रपुर)*
निःशुल्क कुंडली, पंचांग व डिजिटल मंदिर:
https://www.panditjionline.online`;
                  const res = addPunyaPoint(5);
                  setPunyaScore(res.newPoints);
                  window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
                },
                className: "px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-extrabold flex items-center gap-1.5 cursor-pointer shadow-md",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { className: "w-3.5 h-3.5" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tr("WhatsApp स्टेटस / परिवार को भेजें (+5 पुण्य)", "Share on WhatsApp (+5 Punya)") })
                ]
              }
            )
          ] })
        ] }) })
      ]
    }
  );
};
export {
  DailySadhanaEngagementWidget,
  DailySadhanaEngagementWidget as default
};
