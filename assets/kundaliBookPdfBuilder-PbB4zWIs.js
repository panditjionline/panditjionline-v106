import{am as ue,aI as be}from"./panchang-core-pMK8y8QF.js";import{t as fe}from"./index-Cxa15uKJ.js";import{V as t,P as xt,b as Lt,e as It,c as ye,g as xe,f as $e,h as Tt,i as ve,j as ae,k as we,s as ne,w as ke}from"./pdfReportExporter-BU8HwZwZ.js";import{R as Mt,G as Fe,C as Et,T as De,a as Ot}from"./SampurnKundaliSection-uJu2lt66.js";import{P as He,s as Ne}from"./phalitDeduplicator-C_PknbvQ.js";import"./vendor-astronomy-C8JZdkQu.js";import"./boot-core-COvNnoF9.js";import"./vendor-react-GnNhYla_.js";import"./vendor-icons-BmYTKGzL.js";import"./browser-BD-G2ddJ.js";import"./VedicDateInput-CyHMCxY4.js";import"./VedicTripleCheckBadge-CGc_5vnd.js";import"./vedicTripleCheck-SPvHMl6w.js";import"./ShareableVedicCardButton-ClRLiMJU.js";import"./BirthPlaceGpsButton-Bvaom9IP.js";import"./livePageCardResolver-xoyLqIMr.js";const Se={1:"mars",2:"venus",3:"mercury",4:"moon",5:"sun",6:"mercury",7:"venus",8:"mars",9:"jupiter",10:"saturn",11:"saturn",12:"jupiter"},Wt=["मेष","वृषभ","मिथुन","कर्क","सिंह","कन्या","तुला","वृश्चिक","धनु","मकर","कुंभ","मीन"],et={sun:"सूर्य",moon:"चंद्र",mars:"मंगल",mercury:"बुध",jupiter:"गुरु",venus:"शुक्र",saturn:"शनि",rahu:"राहु",ketu:"केतु"},Ft={sun:"ॐ घृणि सूर्याय नमः",moon:"ॐ सों सोमाय नमः",mars:"ॐ अं अंगारकाय नमः",mercury:"ॐ बुं बुधाय नमः",jupiter:"ॐ बृं बृहस्पतये नमः",venus:"ॐ शुं शुक्राय नमः",saturn:"ॐ शं शनैश्चराय नमः",rahu:"ॐ रां राहवे नमः",ketu:"ॐ केम् केतवे नमः"},oe={sun:{planetId:"sun",planetHi:"सूर्य",gemHi:"माणिक्य (Ruby)",uparatnaHi:"लाल गार्नेट / सूर्यकांत",rattiHi:"5.25 से 6.25 रत्ती",metalHi:"सोना या तांबा",fingerHi:"अनामिका (Ring Finger)",dayHi:"शुक्ल पक्ष का रविवार",timingHi:"सूर्योदय के 1 घंटे के भीतर (प्रातः 6:30–8:00)",mantraHi:Ft.sun,purificationHi:"कच्चा दूध, गंगाजल एवं शहद से स्नान कर धूप-दीप दिखाएं",avoidWarnHi:"अहंकार, रक्तचाप, पिता/वरिष्ठों से तनाव और अनावश्यक सरकारी विवाद बढ़ सकते हैं।"},moon:{planetId:"moon",planetHi:"चंद्र",gemHi:"सच्चा मोती (Natural Pearl)",uparatnaHi:"मूनस्टोन (चंद्रमणि)",rattiHi:"5.25 से 7.25 रत्ती",metalHi:"चांदी (Silver)",fingerHi:"कनिष्ठा (Little Finger)",dayHi:"शुक्ल पक्ष का सोमवार",timingHi:"प्रातः सूर्योदय पश्चात या संध्या चंद्रोदय काल",mantraHi:Ft.moon,purificationHi:"कच्चा गाय का दूध, गंगाजल एवं तुलसी दल/अक्षत से शुद्ध करें",avoidWarnHi:"मानसिक अस्थिरता, भावनात्मक उलझन, सर्दी-कफ एवं अनिर्णय की प्रवृत्ति बढ़ सकती है।"},mars:{planetId:"mars",planetHi:"मंगल",gemHi:"त्रिकोणीय/अंडाकार मूंगा (Red Coral)",uparatnaHi:"लाल हकीक / तांबा छल्ला",rattiHi:"6.25 से 8.25 रत्ती",metalHi:"तांबा या सोना",fingerHi:"अनामिका (Ring Finger)",dayHi:"शुक्ल पक्ष का मंगलवार",timingHi:"सूर्योदय के 1–2 घंटे के भीतर",mantraHi:Ft.mars,purificationHi:"कच्चा दूध, गंगाजल एवं लाल पुष्प अर्पित कर शुद्ध करें",avoidWarnHi:"क्रोध, जल्दबाजी, रक्त/चोट संबंधी समस्या, कर्ज अथवा भूमि-विवाद की संभावना बढ़ सकती है।"},mercury:{planetId:"mercury",planetHi:"बुध",gemHi:"पन्ना (Emerald)",uparatnaHi:"पेरीडॉट / हरा ओनिक्स",rattiHi:"5.25 से 6.25 रत्ती",metalHi:"सोना या चांदी",fingerHi:"कनिष्ठा (Little Finger)",dayHi:"शुक्ल पक्ष का बुधवार",timingHi:"प्रातः सूर्योदय के 2 घंटे के भीतर",mantraHi:Ft.mercury,purificationHi:"कच्चा दूध, गंगाजल एवं दूर्वा/तुलसी दल से शुद्ध करें",avoidWarnHi:"व्यापारिक निर्णय में भ्रम, त्वचा/स्नायु संवेदनशीलता और संवाद में अनावश्यक गलतफहमी हो सकती है।"},jupiter:{planetId:"jupiter",planetHi:"गुरु",gemHi:"पीला पुखराज (Yellow Sapphire)",uparatnaHi:"सुनहला (Citrine) / पीला टोपाज",rattiHi:"5.25 से 6.25 रत्ती",metalHi:"सोना या पीतल",fingerHi:"तर्जनी (Index Finger)",dayHi:"शुक्ल पक्ष का गुरुवार",timingHi:"प्रातः सूर्योदय के 1–2 घंटे के भीतर",mantraHi:Ft.jupiter,purificationHi:"कच्चा दूध, गंगाजल, हल्दी व पीले पुष्प से शुद्ध करें",avoidWarnHi:"वजन/लिवर की समस्या, अत्यधिक आशावाद से आर्थिक चूक और अनावश्यक व्यय बढ़ सकते हैं।"},venus:{planetId:"venus",planetHi:"शुक्र",gemHi:"ओपल या सफेद जरकन / हीरा (Opal / Diamond)",uparatnaHi:"स्फटिक / सफेद पुखराज",rattiHi:"6.25 से 8.25 रत्ती (ओपल) / 0.5–1 कैरेट (हीरा)",metalHi:"चांदी या प्लैटिनम",fingerHi:"मध्यमा या अनामिका उंगली",dayHi:"शुक्ल पक्ष का शुक्रवार",timingHi:"प्रातः सूर्योदय के 1–2 घंटे के भीतर",mantraHi:Ft.venus,purificationHi:"कच्चा दूध, गंगाजल, दही व श्वेत पुष्प से शुद्ध करें",avoidWarnHi:"विलासिता में अनावश्यक खर्च, शुगर/हार्मोन असंतुलन एवं संबंधों में अस्थिरता आ सकती है।"},saturn:{planetId:"saturn",planetHi:"शनि",gemHi:"नीलम (Blue Sapphire — 3 दिन परीक्षण उपरांत)",uparatnaHi:"नीली / जामुनिया (Amethyst)",rattiHi:"5.25 से 6.25 रत्ती",metalHi:"पंचधातु या चांदी",fingerHi:"मध्यमा (Middle Finger)",dayHi:"शुक्ल पक्ष का शनिवार",timingHi:"सूर्यास्त के पश्चात या प्रातः शनि होरा में",mantraHi:Ft.saturn,purificationHi:"कच्चा दूध, गंगाजल एवं काले तिल के जल से शुद्ध करें",avoidWarnHi:"बिना अनुकूलता धारण करने पर कार्यों में विलंब, जोड़ों में दर्द, कर्ज या अचानक हानि हो सकती है।"}};function se(e,s){return(e-1+(s-1))%12+1}function tt(e,s){return Se[se(e,s)]||"jupiter"}function Pt(e,s){const a=[];for(let l=1;l<=12;l++)tt(e,l)===s&&a.push(l);return a}function J(e,s){return e.planets.find(a=>a.id===s)}function wt(e,s){const a=e.ashtakavarga;if(!a)return 28;if(a.bhavaSarvashtakavarga&&typeof a.bhavaSarvashtakavarga[s-1]=="number")return a.bhavaSarvashtakavarga[s-1];const l=((e.panchang.lagnaNumber||1)-1+12)%12;return a.sarvashtakavarga[(l+(s-1))%12]??28}function Bt(e,s){const a=e.shadbalaBhava?.planets.find(l=>l.id===s);return a?a.strengthRatio:1}function Ht(e,s){if(s==="rahu"||s==="ketu")return"mixed";const a=Pt(e,s),l=a.some(u=>[4,7,10].includes(u)),c=a.some(u=>[5,9].includes(u));return l&&c?"yogakaraka":a.includes(1)?"lagna":c?"trikona":a.length>0&&a.every(u=>[6,8,12].includes(u))?"dusthana":l?"kendra":"mixed"}function Ce(e,s){const{esc:a,buildBookPageHeader:l,buildSectionTitleBar:c,personHeader:u,appLogo:n}=s,r=e.panchang.lagnaNumber||1,h=tt(r,1),d=tt(r,5),p=tt(r,9),m=J(e,h),g=J(e,d),k=J(e,p),H=[];for(const y of e.rajYogas||[])H.push({title:y.name,line1:y.description,line2:`शास्त्रीय आधार: ${y.sanskritRule} — यह योग जीवन में सम्मान, प्रगति और स्थिरता को निरंतर बल देता है।`,score:y.strength==="प्रबल योग"?95:85});for(const y of e.planets){const L=Ht(r,y.id),T=Bt(e,y.id),R=y.hindiName.split(" ")[0];if(L==="yogakaraka"||y.isExalted||y.dignity.includes("स्वगृही")||T>=1.25){const W=(L==="yogakaraka"?35:0)+(y.isExalted?35:y.dignity.includes("स्वगृही")?28:0)+Math.round(T*20)+([1,4,5,7,9,10,11].includes(y.houseInLagna)?15:0);H.push({title:`${R} की ${y.isExalted?"उच्चस्थ":y.dignity.includes("स्वगृही")?"स्वगृही":L==="yogakaraka"?"योगकारक":"अति पुष्ट"} स्थिति (भाव ${y.houseInLagna})`,line1:`${R} आपकी कुंडली के ${y.houseInLagna}वें भाव में ${y.rashiName.split(" ")[0]} राशि (${y.dignity}) में बैठकर अत्यंत प्रबल बल दे रहे हैं।`,line2:"इनकी दशा-अंतर्दशा व गोचर के दौरान करियर, निर्णय क्षमता और आर्थिक स्थिरता में स्पष्ट उछाल देखने को मिलेगा।",score:W})}}const E=Array.from({length:12},(y,L)=>({house:L+1,pts:wt(e,L+1)})).sort((y,L)=>L.pts-y.pts);if(E[0]&&E[0].pts>=30){const y=E[0],L=e.lagnaChart[y.house-1]?.bhavaTitle||`भाव ${y.house}`;H.push({title:`सर्वाष्टकवर्ग में ${y.house}वें भाव का सर्वाधिक बल (${y.pts} बिंदु)`,line1:`आपकी कुंडली के ${L} को 337-बिंदु अष्टकवर्ग में ${y.pts} शुभ बिंदु मिले हैं (28 से ऊपर अति शुभ माना जाता है)।`,line2:"इस भाव से जुड़े कार्यों में कम संघर्ष में भी स्थायी और संतोषजनक परिणाम प्राप्त होने के प्रबल संकेत हैं।",score:70+y.pts})}const z=[],N=new Set;for(const y of H.sort((L,T)=>T.score-L.score)){const L=y.title.slice(0,16);if(!N.has(L)&&(N.add(L),z.push(y),z.length===3))break}for(;z.length<3;)z.push({title:`${e.panchang.lagnaName} लग्न एवं ${e.panchang.moonRashiName} चंद्र राशि का संतुलन`,line1:`आपकी जन्मपत्री में लग्नेश ${e.panchang.lagnaLord} तथा चंद्र राशि स्वामी ${e.panchang.moonRashiLord} व्यक्तित्व को व्यावहारिक और धैर्यवान बनाते हैं।`,line2:"सही योजना, अनुशासन और निरंतर कर्म से जीवन के मध्य भाग में उल्लेखनीय उन्नति सुनिश्चित है।",score:60});const F=[],$=y=>{const L=y.hindiName.split(" ")[0],T=y.rashiName.split(" ")[0],R=y.houseInLagna;switch(y.id){case"mars":return{title:`मंगल का अस्त (^) प्रभाव — भाव ${R} (${T})`,line1:`मंगल ${T} राशि (${R}वें भाव) में सूर्य के निकट अस्त होने से ऊर्जा, साहस या भूमि-संपत्ति संबंधी निर्णयों में कभी-कभी भीतरी अधीरता अथवा परिणाम में विलंब अनुभव हो सकता है।`,line2:"सावधानी: आवेश में संपत्ति/कर्ज या तकनीकी निर्णय न लें; नियमित व्यायाम, मंगलवार को हनुमान चालीसा पाठ व मसूर दान से मंगल का शुभ पराक्रम जागृत रहेगा।"};case"saturn":return{title:`शनि का अस्त (^) प्रभाव — भाव ${R} (${T})`,line1:`शनि ${T} राशि (${R}वें भाव) में सूर्य-सान्निध्य से अस्त होने पर कठिन परिश्रम के बाद भी वरिष्ठों से श्रेय मिलने में समय लग सकता है तथा कार्यभार का दबाव बढ़ सकता है।`,line2:"सावधानी: पिता या उच्चाधिकारियों से अहं-टकराव से बचें, दीर्घकालिक अनुशासन बनाए रखें और शनिवार सायं पीपल के नीचे तिल के तेल का दीपक जलाएं।"};case"mercury":return{title:`बुध का अस्त (^) प्रभाव — भाव ${R} (${T})`,line1:`बुध ${T} राशि (${R}वें भाव) में सूर्य के अति समीप होने से विचारों में तीव्रता तो रहती है, पर जल्दबाजी में संवाद या लिखित अनुबंध में सूक्ष्म चूक की संभावना बनती है।`,line2:"सावधानी: किसी भी वित्तीय/व्यापारिक कागज पर हस्ताक्षर से पूर्व दो बार जांचें; बुधवार को हरी मूंग दान व श्री विष्णु सहस्रनाम श्रवण लाभकारी रहेगा।"};case"jupiter":return{title:`गुरु का अस्त (^) प्रभाव — भाव ${R} (${T})`,line1:`देवगुरु बृहस्पति ${T} राशि (${R}वें भाव) में अस्त होने से मार्गदर्शक निर्णय या आर्थिक विस्तार में स्पष्ट दृष्टि बनाए रखने हेतु अतिरिक्त विवेक आवश्यक होता है।`,line2:"सावधानी: बिना पूर्ण मूल्यांकन बड़ी वित्तीय गारंटी न दें; गुरुजनों का सम्मान करें तथा गुरुवार को हल्दी/चना दाल दान व गायत्री जप करें।"};case"venus":return{title:`शुक्र का अस्त (^) प्रभाव — भाव ${R} (${T})`,line1:`शुक्र ${T} राशि (${R}वें भाव) में सूर्य-समीप होने से पारिवारिक अपेक्षाओं, दांपत्य संवेदनशीलता या सुख-सुविधाओं के व्यय में असंतुलन आ सकता है।`,line2:"सावधानी: रिश्तों में विनम्र संवाद और बजट अनुशासन रखें; शुक्रवार को श्वेत वस्तु/खीर दान व महालक्ष्मी स्तुति से सुख-सौहार्द बढ़ेगा।"};case"moon":return{title:`चंद्र का अस्त (^) / अमावस्या सान्निध्य — भाव ${R} (${T})`,line1:`चंद्रमा ${T} राशि (${R}वें भाव) में सूर्य के निकट होने से मन अत्यधिक संवेदनशील रह सकता है तथा भावनात्मक उतार-चढ़ाव निर्णय को प्रभावित कर सकते हैं।`,line2:"सावधानी: प्रातः प्राणायाम, पर्याप्त नींद और सोमवार को शिवलिंग पर जल अर्पण से मानसिक एकाग्रता व शांति सुदृढ़ होगी।"};default:return{title:`${L} का अस्त (^) प्रभाव — भाव ${R} (${T})`,line1:`${L} ${T} राशि (${R}वें भाव) में सूर्य के अत्यंत निकट होने से इस भाव के फलों को पूर्ण रूप से प्रकट होने में संयमित प्रयास की आवश्यकता रहती है।`,line2:"सावधानी: इस भाव से जुड़े बड़े निर्णय शांत चिंतन व अनुभवी सलाह से लें और संबंधित ग्रह के सात्विक मंत्र का अभ्यास करें।"}}};for(const y of e.planets){const L=y.hindiName.split(" ")[0];if(y.isDebilitated)F.push({title:`${L} का नीच राशि प्रभाव (भाव ${y.houseInLagna})`,line1:`${L} ${y.rashiName.split(" ")[0]} राशि में संवेदनशील स्थिति में हैं, जिससे इस भाव के फल प्रारंभ में धीमे मिल सकते हैं।`,line2:"सावधानी: इस क्षेत्र में जल्दबाजी से बचें; धैर्यपूर्वक अभ्यास और संबंधित सात्विक दान से यही ग्रह शानदार परिपक्व फल देगा।",priority:95});else if(y.isCombust){const T=$(y);F.push({title:T.title,line1:T.line1,line2:T.line2,priority:85})}}const v=e.phase2Jyotish?.yogasAndDoshas.doshas.allList||[];for(const y of v)y.effectiveStatus!=="दोष मुक्त"&&F.push({title:`${y.nameHi} (${y.effectiveStatus})`,line1:`${y.explanationHi.slice(0,145)}${y.explanationHi.length>145?"...":""}`,line2:`सरल समाधान: ${y.remedyHi}`,priority:y.effectiveStatus==="प्रबल सक्रिय"?92:78});const C=e.phase2Jyotish?.liveGochar.sadeSatiPhase;C&&C!=="NONE"&&F.push({title:`शनि गोचर अनुशासन काल (${e.phase2Jyotish?.liveGochar.sadeSatiLabelHi})`,line1:"वर्तमान में शनि गोचर आपको अनुशासन, समय-प्रबंधन और यथार्थवादी योजना अपनाने की प्रेरणा दे रहा है।",line2:"सावधानी: उधार/जोखिम भरे निवेश से बचें; शनिवार को पीपल के नीचे दीपक व हनुमान चालीसा पाठ से मानसिक शांति रहेगी।",priority:88});const S=E[E.length-1];if(S&&S.pts<26){const y=e.lagnaChart[S.house-1]?.bhavaTitle||`भाव ${S.house}`;F.push({title:`${S.house}वें भाव में अतिरिक्त प्रयास संकेत (${S.pts} SAV बिंदु)`,line1:`अष्टकवर्ग में ${y} के बिंदु औसत (28) से कम हैं, जिसका अर्थ है कि इस विषय में व्यवस्थित योजना आवश्यक है।`,line2:"सावधानी: इस भाव से जुड़े बड़े कदम सोच-समझकर और शुभ दशा/गोचर में उठाने से परिणाम सहज व सकारात्मक रहेंगे।",priority:72})}const x=[],I=new Set;for(const y of F.sort((L,T)=>T.priority-L.priority)){const L=y.title.slice(0,16);if(!I.has(L)&&(I.add(L),x.push(y),x.length===3))break}const B=[{title:"भावनात्मक निर्णयों में संयम एवं धैर्य",line1:"किसी भी बड़े आर्थिक या पारिवारिक निर्णय को तात्कालिक आवेश के बजाय शांत मन और तथ्यों के आधार पर लें।",line2:"सावधानी: महत्वपूर्ण समझौतों से पूर्व लिखित स्पष्टता रखें और परिवार के वरिष्ठों का मार्गदर्शन लें।",priority:50},{title:"स्वास्थ्य व दिनचर्या में नियमितता",line1:"कार्य की व्यस्तता के बीच नियमित योग, प्राणायाम और संतुलित सात्विक भोजन आपकी ऊर्जा को दीर्घकाल तक बनाए रखेगा।",line2:"सावधानी: रात्रि जागरण और तनाव से बचें; प्रातःकाल का सूर्य प्रकाश आपके लग्न बल को स्वतः बढ़ाता है।",priority:45},{title:"दशा-गोचर के अनुरूप समय प्रबंधन",line1:"हर वर्ष एक जैसा नहीं होता — अनुकूल दशा में विस्तार करें और मध्यम समय में कौशल व बचत मजबूत करें।",line2:"सावधानी: इस पुस्तक के 5-वर्षीय रोडमैप को देखकर अपने प्रमुख लक्ष्यों की समय-सारणी तय करें।",priority:40}];for(const y of B){if(x.length>=3)break;x.push(y)}const P=et[h]||e.panchang.lagnaLord.split(" ")[0],j=et[d]||"पंचमेश",O=et[p]||"नवमेश",Q=`आपका व्यक्तित्व (${e.panchang.lagnaName} लग्न, लग्नेश ${P} — भाव ${m?.houseInLagna||1}), आपकी सृजनशील बुद्धि (पंचमेश ${j} — भाव ${g?.houseInLagna||5}) और आपका भाग्योदय (नवमेश ${O} — भाव ${k?.houseInLagna||9}) एक स्पष्ट सूत्र देते हैं: "${e.panchang.tatva} तत्व की अपनी स्वाभाविक शक्ति को अनुशासन और सत्यनिष्ठा से जोड़ें, ${e.lucky.ishtaDevta} के स्मरण से प्रत्येक शुभ कार्य प्रारंभ करें, और दूसरों की नकल के बजाय अपने मौलिक विवेक पर चलें — यही आपके जीवन की स्थायी समृद्धि और सम्मान का मूल मंत्र है।"`;return{sectionCode:"EX",sectionTag:"1-मिनट सार (Executive Summary)",html:`
    ${l("डिजिटल ज्योतिषाचार्य सार : कुंडली का 1-मिनट सार (Executive Summary)",u,n)}
    ${c("EX","कुंडली का 1-मिनट सार (Executive Summary) — एक दृष्टि में संपूर्ण जीवन-दिशा",`${e.panchang.lagnaName} लग्न • ${e.panchang.moonRashiName} राशि`)}

    <div class="book-card" style="background: ${t.emeraldSoft}; border: 1.5px solid #10B981; border-radius: 10px; padding: 10px 13px; margin-bottom: 10px; page-break-inside: avoid;">
      <div style="font-size: 10.2px; font-weight: 900; color: #065F46; margin-bottom: 6px; border-bottom: 1px dashed #34D399; padding-bottom: 4px;">
        ✦ आपकी कुंडली के शीर्ष 3 सबसे प्रबल योग एवं शुभ शक्तियाँ (Top 3 Strengths)
      </div>
      ${z.map((y,L)=>`
          <div style="background: #FFFFFF; border: 1px solid #A7F3D0; border-left: 4px solid #059669; border-radius: 7px; padding: 7px 10px; margin-top: ${L===0?0:7}px; page-break-inside: avoid;">
            <div style="font-size: 9.2px; font-weight: 900; color: ${t.cosmicNavy};">${L+1}. ${a(y.title)}</div>
            <div style="font-size: 8.3px; color: ${t.inkPrimary}; line-height: 1.48; margin-top: 2px;">${a(y.line1)}</div>
            <div style="font-size: 8.1px; color: #065F46; font-weight: 700; line-height: 1.45; margin-top: 2px;">${a(y.line2)}</div>
          </div>`).join("")}
    </div>

    <div class="book-card" style="background: ${t.saffronSoft}; border: 1.5px solid ${t.templeGold}; border-radius: 10px; padding: 10px 13px; margin-bottom: 10px; page-break-inside: avoid;">
      <div style="font-size: 10.2px; font-weight: 900; color: ${t.saffronDeep}; margin-bottom: 6px; border-bottom: 1px dashed ${t.templeGold}; padding-bottom: 4px;">
        ✦ शीर्ष 3 ध्यान देने योग्य विषय एवं व्यावहारिक सावधानियाँ (Top 3 Precautions)
      </div>
      ${x.map((y,L)=>`
          <div style="background: #FFFFFF; border: 1px solid ${t.borderMuted}; border-left: 4px solid ${t.saffron}; border-radius: 7px; padding: 7px 10px; margin-top: ${L===0?0:7}px; page-break-inside: avoid;">
            <div style="font-size: 9.2px; font-weight: 900; color: ${t.cosmicNavy};">${L+1}. ${a(y.title)}</div>
            <div style="font-size: 8.3px; color: ${t.inkPrimary}; line-height: 1.48; margin-top: 2px;">${a(y.line1)}</div>
            <div style="font-size: 8.1px; color: ${t.saffronDeep}; font-weight: 700; line-height: 1.45; margin-top: 2px;">${a(y.line2)}</div>
          </div>`).join("")}
    </div>

    <div class="book-card" style="background: linear-gradient(135deg, ${t.cosmicNavy} 0%, #1E293B 100%); border: 2px solid ${t.templeGold}; border-radius: 10px; padding: 11px 14px; color: ${t.warmIvory}; page-break-inside: avoid;">
      <div style="font-size: 10px; font-weight: 900; color: #FDE68A; margin-bottom: 5px;">
        ★ आपका व्यक्तिगत जीवन सफलता मंत्र (लग्नेश ${a(P)} + पंचमेश ${a(j)} + नवमेश ${a(O)} समन्वय)
      </div>
      <div style="font-size: 8.5px; color: #F8FAFC; line-height: 1.62;">
        ${a(Q)}
      </div>
      <div style="margin-top: 6px; padding-top: 5px; border-top: 1px dashed rgba(212, 175, 55, 0.5); font-size: 7.8px; color: #FCD34D; font-weight: 700; text-align: right;">
        — ${a(xt.founderHi)} (पण्डित जी ऑनलाइन)
      </div>
    </div>
  `}}function Le(e,s){const{esc:a,buildBookPageHeader:l,buildSectionTitleBar:c,personHeader:u,appLogo:n}=s,r=e.panchang.lagnaNumber||1,h=e.phase2Jyotish,d=h?.vimshottari,p=h?.liveGochar,m=d?.activeMahadasha,g=d?.activeAntardasha,k=m?.lordId||"jupiter",H=g?.lordId||"mercury",E=J(e,k),z=J(e,H),N=Ht(r,k),F=Ht(r,H),$=p?.grahaRows.find(j=>j.id==="saturn"),v=p?.grahaRows.find(j=>j.id==="jupiter"),C=N==="yogakaraka"||N==="lagna"||N==="trikona",S=F==="yogakaraka"||F==="lagna"||F==="trikona",x=!!v?.isFavorableFromMoon,I=!!$?.isFavorableFromMoon,B=[{title:"1. करियर एवं व्यापार (Career & Business)",icon:"◆",tone:C||x?"प्रगति एवं विस्तार का काल":"स्थिर कर्म व कौशल निर्माण काल",color:C||x?t.emerald:t.saffronDeep,outlook:`वर्तमान में ${m?.lordHindi||"मुख्य"} महादशा (भाव ${E?.houseInLagna||1}) और ${g?.lordHindi||"सक्रिय"} अंतर्दशा (भाव ${z?.houseInLagna||10}) के साथ गोचर गुरु आपकी चंद्र राशि से ${v?.houseFromNatalMoon||5}वें (लग्न से ${v?.houseFromNatalLagna||5}वें) और शनि चंद्र से ${$?.houseFromNatalMoon||10}वें (लग्न से ${$?.houseFromNatalLagna||10}वें) भाव में हैं। अगले 6–12 महीनों में ${C||S?"नई जिम्मेदारियां, पदोन्नति या व्यवसाय विस्तार के स्पष्ट अवसर बनेंगे; आपकी कार्यक्षमता की सराहना होगी।":"निरंतर परिश्रम और धैर्य से नींव मजबूत होगी; जल्दबाजी में नौकरी या बड़ा साझेदारी परिवर्तन टालना समझदारी होगी।"}`,action:x?"सलाह: नए प्रोजेक्ट या कौशल उन्नयन की शुरुआत करने के लिए यह 6–12 माह अत्यंत अनुकूल हैं।":"सलाह: वर्तमान कार्यस्थल पर गुणवत्ता व अनुशासन बढ़ाएं; कागजी अनुबंध ध्यानपूर्वक पढ़ें।"},{title:"2. धन-संपत्ति एवं निवेश (Finance & Wealth)",icon:"◆",tone:x&&I?"सुदृढ़ धनागमन एवं बचत योग":x||C?"संतुलित आय व क्रमिक वृद्धि":"बजट अनुशासन व सुरक्षित निवेश काल",color:x?t.emerald:t.saffronDeep,outlook:`आपकी कुंडली के धन भाव (SAV ${wt(e,2)} बिंदु) व लाभ भाव (SAV ${wt(e,11)} बिंदु) पर सक्रिय ${g?.lordHindi||""} अंतर्दशा व गुरु गोचर (${v?.currentRashiNameHi||""}) का सीधा प्रभाव है। ${x?"अटके हुए धन की प्राप्ति, आय के नए स्रोत और परिवार में शुभ निवेश के सुंदर संकेत बन रहे हैं।":"आय नियमित रहेगी, परंतु आकस्मिक घरेलू या व्यावसायिक व्यय बढ़ सकते हैं; सट्टेबाजी या उच्च जोखिम वाले निवेश से दूरी रखें।"}`,action:"सलाह: मासिक आय का कम से कम 20% सुरक्षित बचत में रखें और किसी को बिना लिखित सुरक्षा बड़ा कर्ज न दें।"},{title:"3. स्वास्थ्य एवं मानसिक ऊर्जा (Health & Vitality)",icon:"◆",tone:p?.sadeSatiPhase&&p.sadeSatiPhase!=="NONE"?"दिनचर्या व विश्राम पर विशेष ध्यान":"संतुलित ऊर्जा एवं उत्साह",color:p?.sadeSatiPhase&&p.sadeSatiPhase!=="NONE"?t.crimson:t.emerald,outlook:`शनि गोचर (${$?.currentRashiNameHi||""}, चंद्र से ${$?.houseFromNatalMoon||1}वां भाव — ${p?.sadeSatiLabelHi||"सामान्य"}) तथा जन्म नाड़ी (${e.panchang.nadi}) के अनुसार अगले 6–12 महीनों में ${I&&!E?.isDebilitated?"आपका मनोबल और शारीरिक स्फूर्ति अच्छी बनी रहेगी; पुरानी थकान से राहत मिलेगी।":"कार्यभार के कारण तनाव, नींद की कमी या पाचन/जोड़ों की थकान महसूस हो सकती है, जिसे नियमित व्यायाम से आसानी से नियंत्रित किया जा सकता है।"}`,action:"सलाह: प्रतिदिन 20 मिनट प्राणायाम/टहलना, पर्याप्त जल सेवन और समय पर रात्रि भोजन को अनिवार्य नियम बनाएं।"},{title:"4. परिवार एवं दांपत्य सुख (Family & Relationships)",icon:"◆",tone:x||H==="venus"||H==="jupiter"?"मधुर सामंजस्य व मांगलिक योग":"संवाद व धैर्य से मधुरता",color:x||H==="venus"||H==="jupiter"?t.emerald:t.saffronDeep,outlook:`देवगुरु बृहस्पति का ${v?.houseFromNatalLagna||5}वें लग्न भाव में गोचर तथा ${m?.lordHindi||""}–${g?.lordHindi||""} दशा अवधि परिवार में ${x||H==="venus"||H==="jupiter"?"आपसी स्नेह, शुभ उत्सव, तीर्थयात्रा और जीवनसाथी के साथ बेहतर तालमेल के योग बना रही है।":"व्यस्तता के कारण संवाद की कमी ला सकती है; छोटी बातों को तूल न दें और परिवार के साथ गुणवत्तापूर्ण समय बिताएं।"}`,action:"सलाह: सप्ताह में एक दिन परिवार के साथ शांत संवाद व सात्विक पूजन करें — इससे घर का वातावरण सकारात्मक रहेगा।"}];return{sectionCode:"DJ1",sectionTag:"वर्तमान समय विश्लेषण (दशा + गोचर)",html:`
    ${l("डिजिटल ज्योतिषाचार्य : वर्तमान समय का सटीक विश्लेषण",u,n)}
    ${c("DJ1","वर्तमान समय का सटीक विश्लेषण — सक्रिय दशा + लाइव गुरु/शनि गोचर समन्वय",`आकलन तिथि: ${p?.computedAtDateHi||"आज"}`)}

    <div class="book-card" style="background: ${t.cosmicNavy}; color: ${t.warmIvory}; border: 1.8px solid ${t.templeGold}; border-radius: 10px; padding: 9px 13px; margin-bottom: 10px; page-break-inside: avoid;">
      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; font-size: 8px; text-align: center;">
        <div style="background: rgba(255,255,255,0.08); border: 1px solid rgba(212,175,55,0.45); border-radius: 7px; padding: 6px;">
          <div style="color:#FCD34D; font-weight:700;">सक्रिय महादशा</div>
          <div style="font-size: 10px; font-weight: 900; margin-top: 2px;">${a(m?.lordHindi||"—")}</div>
          <div style="color:#CBD5E1; font-size:7.2px; white-space:nowrap;">${a(m?.endDateHi||"")} तक</div>
        </div>
        <div style="background: rgba(255,255,255,0.08); border: 1px solid rgba(212,175,55,0.45); border-radius: 7px; padding: 6px;">
          <div style="color:#FCD34D; font-weight:700;">सक्रिय अंतर्दशा</div>
          <div style="font-size: 10px; font-weight: 900; margin-top: 2px;">${a(g?.lordHindi||"—")}</div>
          <div style="color:#CBD5E1; font-size:7.2px; white-space:nowrap;">${a(g?.endDateHi||"")} तक</div>
        </div>
        <div style="background: rgba(255,255,255,0.08); border: 1px solid rgba(212,175,55,0.45); border-radius: 7px; padding: 6px;">
          <div style="color:#FCD34D; font-weight:700;">लाइव गुरु गोचर</div>
          <div style="font-size: 9.5px; font-weight: 900; margin-top: 2px;">${a(v?.currentRashiNameHi||"—")}</div>
          <div style="color:#6EE7B7; font-size:7.2px;">चंद्र ${v?.houseFromNatalMoon||"-"}वां • लग्न ${v?.houseFromNatalLagna||"-"}वां</div>
        </div>
        <div style="background: rgba(255,255,255,0.08); border: 1px solid rgba(212,175,55,0.45); border-radius: 7px; padding: 6px;">
          <div style="color:#FCD34D; font-weight:700;">लाइव शनि गोचर</div>
          <div style="font-size: 9.5px; font-weight: 900; margin-top: 2px;">${a($?.currentRashiNameHi||"—")}</div>
          <div style="color:#FDE68A; font-size:7.2px;">चंद्र ${$?.houseFromNatalMoon||"-"}वां • लग्न ${$?.houseFromNatalLagna||"-"}वां</div>
        </div>
      </div>
      <div style="margin-top: 7px; font-size: 8.1px; color: #E2E8F0; line-height: 1.48; text-align: center;">
        <b>द्वि-गोचर सक्रियता:</b> ${a(p?.doubleTransitSummaryHi||"गुरु एवं शनि का संयुक्त गोचर जीवन के प्रमुख लक्ष्यों को दिशा दे रहा है।")}
      </div>
    </div>

    <div style="display: flex; flex-direction: column; gap: 9px;">
      ${B.map(j=>`
          <div class="book-card" style="background: ${t.pureIvory}; border: 1.4px solid ${t.templeGold}; border-left: 4.5px solid ${j.color}; border-radius: 9px; padding: 9px 12px; page-break-inside: avoid;">
            <div style="display: table; width: 100%; margin-bottom: 4px;">
              <div style="display: table-cell; font-size: 9.8px; font-weight: 900; color: ${t.cosmicNavy};">${j.icon} ${a(j.title)}</div>
              <div style="display: table-cell; text-align: right; font-size: 8px; font-weight: 800; color: ${j.color}; white-space: nowrap;">${a(j.tone)}</div>
            </div>
            <div style="font-size: 8.4px; color: ${t.inkPrimary}; line-height: 1.54;">${a(j.outlook)}</div>
            <div style="margin-top: 5px; padding: 4px 8px; background: ${t.warmIvory}; border-radius: 5px; font-size: 8px; font-weight: 800; color: ${t.saffronDeep}; line-height: 1.45;">
              ${a(j.action)}
            </div>
          </div>`).join("")}
    </div>
  `}}function Ee(e,s){const{esc:a,buildBookPageHeader:l,buildSectionTitleBar:c,personHeader:u,appLogo:n}=s,r=e.panchang.lagnaNumber||1,h=tt(r,10),d=tt(r,7),p=tt(r,6),m=tt(r,2),g=tt(r,11),k=tt(r,4),H=tt(r,5),E=tt(r,9),z=tt(r,12),N=tt(r,8),F=tt(r,1),$=J(e,h),v=J(e,d),C=J(e,p),S=J(e,m),x=J(e,g),I=J(e,k),B=J(e,H),P=J(e,E),j=J(e,z),O=J(e,N),Q=J(e,F),K=J(e,"mercury"),y=J(e,"saturn"),L=J(e,"venus"),T=J(e,"jupiter"),R=J(e,"mars"),W=J(e,"rahu"),V=J(e,"moon"),dt=(Bt(e,"mercury")>=1?2:0)+([1,2,7,10,11].includes(v?.houseInLagna||0)?2:0)+(wt(e,7)>=28?1:0)+(K&&[1,2,7,10,11].includes(K.houseInLagna)?2:0),$t=(Bt(e,"saturn")>=1?2:0)+([1,6,10,11].includes(C?.houseInLagna||0)?2:0)+(wt(e,6)>=28?1:0)+(y&&[1,6,10,11].includes(y.houseInLagna)?2:0),ct=dt>$t+1?"स्वतंत्र व्यापार, परामर्श या उद्यमिता में विशेष सफलता":$t>dt+1?"उच्च सेवा, कॉर्पोरेट/प्रशासनिक नौकरी व विशेषज्ञ पद अधिक अनुकूल":"नौकरी के साथ अनुभव लेकर आगे स्वतंत्र कार्य/व्यवसाय — दोनों में श्रेष्ठ संतुलन",q=wt(e,2),X=wt(e,11),it=q>=28&&X>=28?"अत्यंत सुदृढ़ धन संचय एवं बहु-स्रोत आय योग":X>=28?"नियमित अच्छी आमदनी — व्यवस्थित बचत से स्थायी समृद्धि":"अनुशासित वित्तीय योजना व दीर्घकालिक निवेश से स्थिर संपत्ति निर्माण",rt=wt(e,4),bt=e.phase1Astronomy?.shodashavarga.find(at=>at.spec.id==="D4")?.ascendantRashiNameHi||Wt[se(r,4)-1],st=rt>=28||I&&[1,4,5,9,10,11].includes(I.houseInLagna),Dt=e.deepAnalysis?.navamshaAndCareerDepth.d9Lagna||e.navamsaChart[0]?.rashiName||"",St=e.doshaAnalysis.manglik.isManglik?"कुंडली में मंगल प्रभाव होने से विवाह पूर्व अष्टकूट व मंगल मिलान अवश्य कराएं।":"कुंडली मांगलिक बाधा से मुक्त/परिहार युक्त है, जो वैवाहिक सामंजस्य के लिए शुभ संकेत है।",ft=e.phase1Astronomy?.shodashavarga.find(at=>at.spec.id==="D7"),o=e.phase1Astronomy?.shodashavarga.find(at=>at.spec.id==="D24"),b=wt(e,5),A=[P&&[9,12].includes(P.houseInLagna),j&&[1,9,10,12].includes(j.houseInLagna),W&&[1,4,7,9,10,12].includes(W.houseInLagna),V&&[7,9,12].includes(V.houseInLagna)].filter(Boolean).length,w=A>=2?"विदेश यात्रा, विदेशी कंपनी/आय या जन्मस्थान से दूर बड़ी सफलता के प्रबल योग":A===1?"कार्य या तीर्थ हेतु विदेश/दूरस्थ यात्राओं के अच्छे अवसर":"स्वदेश अथवा अपने गृह-क्षेत्र में ही अधिक स्थिर और सम्मानजनक उन्नति के योग",f=e.panchang.nadi.includes("आदि")?"वात प्रकृति (आदि नाड़ी) — जोड़ों, गैस, अनिद्रा व त्वचा की नमी का ध्यान रखें":e.panchang.nadi.includes("मध्य")?"पित्त प्रकृति (मध्य नाड़ी) — एसिडिटी, अधिक गर्मी, रक्तचाप व नेत्र विश्राम का ध्यान रखें":"कफ प्रकृति (अन्त्य नाड़ी) — सर्दी-जुकाम, साइनस, श्वसन व वजन संतुलन का ध्यान रखें",D=Date.now(),M=e.phase1Astronomy?.spaceTime.utcEpochMs||D-(e.input.ageYears||25)*365.2425*864e5,_=e.phase2Jyotish?.vimshottari;let Y="आगामी शुभ त्रिकोण/योगकारक दशा काल",pt="आपकी कुंडली के शुभ ग्रहों की आगामी दशा में करियर, धन और प्रतिष्ठा का उत्कर्ष होगा।";if(_){let at=-999,yt=null;const Ct=mt=>{const ht=Ht(r,mt),nt=J(e,mt),ee=Bt(e,mt);let vt=ht==="yogakaraka"?40:ht==="lagna"?32:ht==="trikona"?30:ht==="kendra"?20:ht==="dusthana"?-15:8;return nt?.isExalted?vt+=20:nt?.dignity.includes("स्वगृही")?vt+=15:nt?.isDebilitated&&(vt-=15),nt&&[1,4,5,9,10,11].includes(nt.houseInLagna)&&(vt+=10),vt+=Math.round((ee-1)*15),vt};for(const mt of _.mahadashas){if(mt.endUtcMs<D)continue;const ht=Ct(mt.lordId);for(const nt of mt.antardashas){if(nt.endUtcMs<D||(nt.startUtcMs-M)/(365.2425*864e5)>82)continue;const vt=ht*.6+Ct(nt.lordId)*.4;if(vt>at){at=vt;const ie=Math.max(0,Number(((nt.startUtcMs-M)/(365.2425*864e5)).toFixed(1))),me=Math.max(ie,Number(((nt.endUtcMs-M)/(365.2425*864e5)).toFixed(1)));yt={title:`${mt.lordHindi} महादशा – ${nt.lordHindi} अंतर्दशा`,startHi:nt.startDateHi,endHi:nt.endDateHi,ageStart:ie,ageEnd:me,reason:`इस काल में महादशा स्वामी ${mt.lordHindi} एवं अंतर्दशा स्वामी ${nt.lordHindi} आपकी कुंडली के शुभ भावों को संयुक्त रूप से सक्रिय करेंगे`}}}}yt&&(Y=`${yt.title} (${yt.startHi} → ${yt.endHi} • आयु ${yt.ageStart}–${yt.ageEnd} वर्ष)`,pt=`${yt.reason}। यह अवधि आपके जीवन में बड़ा पद, स्थायी संपत्ति, वित्तीय उछाल और सामाजिक सम्मान दिलाने वाला प्रमुख स्वर्णिम चरण सिद्ध होगी।`)}const gt=p===F?`लग्नेश ${et[F]} (भाव ${Q?.houseInLagna||1})`:`षष्ठेश ${et[p]} (भाव ${C?.houseInLagna||6})`,_t=(()=>{const at=[`लग्नेश ${et[F]} (${Q?.dignity||"संतुलित"}, भाव ${Q?.houseInLagna||1})`];return p!==F&&at.push(`षष्ठेश ${et[p]} (भाव ${C?.houseInLagna||6})`),N!==F&&N!==p&&at.push(`अष्टमेश ${et[N]} (भाव ${O?.houseInLagna||8})`),at.join(", ")})(),jt=[{qNo:1,question:"नौकरी बेहतर है या स्वयं का व्यापार (Job vs Business)?",badge:ct,answer:`दशमेश ${et[h]} (भाव ${$?.houseInLagna||10}, ${$?.dignity||"संतुलित"}), सप्तमेश ${et[d]} (भाव ${v?.houseInLagna||7}), ${gt} तथा बुध/शनि के षड्बल तुलना से स्पष्ट है कि आपके लिए "${ct}" सर्वाधिक लाभकारी रहेगा। दशमांश (D-10 लग्न: ${e.deepAnalysis?.navamshaAndCareerDepth.d10Lagna||e.panchang.lagnaName}) भी कर्म-क्षेत्र में निरंतर प्रतिष्ठा व नेतृत्व की पुष्टि करता है।`},{qNo:2,question:"धन संचय, आय और आर्थिक स्थिरता कैसी रहेगी?",badge:`धन भाव SAV: ${q} • लाभ भाव SAV: ${X}`,answer:`आपकी कुंडली में द्वितीय (धन) भाव में ${q} अष्टकवर्ग बिंदु व धनेश ${et[m]} (भाव ${S?.houseInLagna||2}) तथा एकादश (लाभ) भाव में ${X} बिंदु व लाभेश ${et[g]} (भाव ${x?.houseInLagna||11}) स्थित हैं। निष्कर्ष: ${it}। आय बढ़ने के साथ व्यवस्थित बचत व स्थायी संपत्ति में निवेश आपको आर्थिक रूप से पूर्ण सुरक्षित बनाएगा।`},{qNo:3,question:"अपना घर (अचल संपत्ति) और वाहन सुख कैसा मिलेगा?",badge:`चतुर्थ भाव SAV: ${rt} • D-4 लग्न: ${bt}`,answer:`चतुर्थ (सुख-भवन) भाव में ${rt} बिंदु, चतुर्थेश ${et[k]} (भाव ${I?.houseInLagna||4}), भूमि कारक मंगल (भाव ${R?.houseInLagna||1}) व वाहन कारक शुक्र (भाव ${L?.houseInLagna||1}) तथा चतुर्थांश (D-4 लग्न: ${bt}) के अनुसार ${st?"स्वयं के सुंदर आवास, भूखंड और उत्तम वाहन सुख के प्रबल योग हैं। चतुर्थेश/शुक्र की दशा में संपत्ति निर्माण विशेष रूप से सफल होगा।":"परिश्रम और सुव्यवस्थित बचत के बल पर जीवन के मध्य चरण में स्थायी मकान व वाहन सुख अवश्य प्राप्त होगा; संपत्ति क्रय में कागजी जांच पूर्ण रखें।"}`},{qNo:4,question:"विवाह, जीवनसाथी का स्वभाव और दांपत्य सुख कैसा रहेगा?",badge:`सप्तमेश: ${et[d]} • D-9 लग्न: ${Dt.split(" ")[0]||""}`,answer:`सप्तम भाव के स्वामी ${et[d]} (भाव ${v?.houseInLagna||7}, ${v?.dignity||""}), विवाह कारक शुक्र (भाव ${L?.houseInLagna||7}) व गुरु (भाव ${T?.houseInLagna||5}) और नवांश कुंडली (D-9 लग्न: ${Dt}) से संकेत मिलता है कि जीवनसाथी समझदार, सहयोगी एवं परिवार-प्रेमी होंगे। ${St}`},{qNo:5,question:"संतान सुख और उच्च शिक्षा की स्थिति कैसी रहेगी?",badge:`पंचम भाव SAV: ${b} • D-7: ${ft?.ascendantRashiNameHi||"शुभ"} • D-24: ${o?.ascendantRashiNameHi||"शुभ"}`,answer:`पंचम भाव के स्वामी ${et[H]} (भाव ${B?.houseInLagna||5}, SAV ${b} बिंदु), संतान-ज्ञान कारक देवगुरु बृहस्पति (भाव ${T?.houseInLagna||5}), सप्तांश (D-7 लग्न: ${ft?.ascendantRashiNameHi||"शुभ"}) व चतुर्विंशांश (D-24 लग्न: ${o?.ascendantRashiNameHi||"शुभ"}) के समन्वय से आपकी ग्रहणशीलता, व्यावहारिक विद्या और संतान-संस्कार अत्यंत सकारात्मक रहेंगे।`},{qNo:6,question:"क्या विदेश यात्रा, विदेशी आय या दूर स्थान में बसने का योग है?",badge:A>=2?"प्रबल विदेश / दूरस्थ योग":A===1?"आंशिक यात्रा योग":"स्वदेश प्रधान उन्नति",answer:`नवमेश ${et[E]} (भाव ${P?.houseInLagna||9}), द्वादशेश ${et[z]} (भाव ${j?.houseInLagna||12}), राहु (भाव ${W?.houseInLagna||1}) तथा चंद्रमा (भाव ${V?.houseInLagna||1}) की स्थिति स्पष्ट करती है: "${w}"। राहु या द्वादशेश/नवमेश की अंतर्दशा में दूरस्थ संपर्क व ऑनलाइन/वैश्विक मंच से विशेष लाभ मिलेगा।`},{qNo:7,question:"स्वास्थ्य की दृष्टि से किन बातों का विशेष ध्यान रखें?",badge:`${e.panchang.nadi} • लग्नेश भाव ${Q?.houseInLagna||1}`,answer:`आपकी जन्म नाड़ी (${e.panchang.nadi}) के अनुसार: ${f}। ${_t} बताते हैं कि नियमित योग, तनाव-नियंत्रण और मौसमी खानपान अनुशासन से आप दीर्घायु व स्वस्थ रहेंगे।`},{qNo:8,question:'मेरे जीवन का "स्वर्णिम काल (Golden Period)" कब आएगा?',badge:"दशा-बल आधारित सर्वोत्तम चरण",answer:`आपकी विंशोत्तरी दशा, ग्रहों के षड्बल और योगकारक/त्रिकोण स्वामित्व के समग्र विश्लेषण के अनुसार आपका प्रमुख स्वर्णिम काल है: ${Y}। ${pt}`}],te=(at,yt,Ct,mt)=>({sectionCode:at,sectionTag:yt,html:`
      ${l(`डिजिटल ज्योतिषाचार्य : 8 बड़े सवालों के सीधे जवाब (${Ct})`,u,n)}
      ${c(at,`आपके जीवन के 8 बड़े सवालों के सीधे, सरल जवाब (${Ct})`,"जटिल शब्दावली से मुक्त स्पष्ट मार्गदर्शन")}
      <div style="display: flex; flex-direction: column; gap: 11px; margin-top: 4px;">
        ${mt.map(ht=>`
            <div class="book-card" style="background: ${t.pureIvory}; border: 1.5px solid ${t.templeGold}; border-left: 4.5px solid ${t.saffron}; border-radius: 10px; padding: 10px 13px; page-break-inside: avoid;">
              <div style="display: table; width: 100%; border-bottom: 1px dashed ${t.borderMuted}; padding-bottom: 5px; margin-bottom: 6px;">
                <div style="display: table-cell; vertical-align: middle; font-size: 10px; font-weight: 900; color: ${t.cosmicNavy}; padding-right: 8px;">
                  प्रश्न ${ht.qNo}. ${a(ht.question)}
                </div>
                <div style="display: table-cell; vertical-align: middle; text-align: right; white-space: nowrap; width: 1%;">
                  <span style="display: inline-block; background: ${t.emeraldSoft}; color: #065F46; border: 1px solid #34D399; border-radius: 999px; padding: 2.5px 9px; font-size: 7.4px; font-weight: 800; line-height: 1.25;">${a(ht.badge)}</span>
                </div>
              </div>
              <div style="font-size: 8.6px; color: ${t.inkPrimary}; line-height: 1.58;">
                <b style="color:${t.saffronDeep};">सीधा उत्तर:</b> ${a(ht.answer)}
              </div>
            </div>`).join("")}
      </div>
    `});return[te("DJ2","8 बड़े सवाल (प्रश्न 1–4)","भाग 1/2 : प्रश्न 1 से 4",jt.slice(0,4)),te("DJ3","8 बड़े सवाल (प्रश्न 5–8)","भाग 2/2 : प्रश्न 5 से 8",jt.slice(4,8))]}function ze(e,s){const{esc:a,buildBookPageHeader:l,buildSectionTitleBar:c,personHeader:u,appLogo:n}=s,r=Date.now(),h=new Date(r).getFullYear(),d=e.panchang.lagnaNumber||1,p=e.panchang.moonRashiNumber||1,m=e.phase2Jyotish?.vimshottari,g=e.phase2Jyotish?.liveGochar,k={1:"आत्मचिंतन, स्वास्थ्य नियम और दीर्घकालिक दिशा तय करने का समय बनता है",2:"धन-संचय, वाणी प्रभाव और परिवार में मांगलिक कार्यों के सुंदर योग बनते हैं",3:"नए संपर्क, छोटी यात्राओं और स्वप्रयास से कार्य विस्तार का योग बनता है",4:"गृह-सुख, वाहन/संपत्ति योजना और पारिवारिक स्थिरता पर ध्यान केंद्रित रहता है",5:"विद्या, संतान सुख, सृजनशील सफलता और विवेकपूर्ण निवेश में विशेष लाभ मिलता है",6:"प्रतिस्पर्धा में विजय, सेवा-अनुशासन और ऋण/विवाद समाधान के अवसर बनते हैं",7:"दांपत्य सौहार्द, व्यापारिक साझेदारी और सामाजिक प्रतिष्ठा में स्पष्ट वृद्धि होती है",8:"गहन शोध, आध्यात्मिक परिपक्वता और आर्थिक निर्णयों में सतर्कता की अपेक्षा रहती है",9:"भाग्योदय, वरिष्ठों का आशीर्वाद, तीर्थयात्रा और बड़े अवसरों की प्राप्ति होती है",10:"कर्म-क्षेत्र में पदोन्नति, नई जिम्मेदारी और व्यावसायिक पहचान सुदृढ़ होती है",11:"बहु-स्रोत आय, रुके धन की प्राप्ति और महत्वाकांक्षाओं की पूर्ति का प्रबल योग बनता है",12:"विदेश/बाहरी संपर्क, दान-पुण्य और व्यय के सुनियोजित प्रबंधन पर बल रहता है"},H={1:"जन्म-शनि (साढ़ेसाती मध्य) होने से स्वास्थ्य, धैर्य और समय-प्रबंधन को सर्वोच्च प्राथमिकता दें",2:"साढ़ेसाती उत्तरार्ध में वाणी-संयम, सुरक्षित बचत और पारिवारिक संवाद से स्थायी लाभ उठाएं",3:"तृतीय भाव के परम शुभ शनि गोचर का लाभ उठाकर साहसी विस्तार, नया प्रोजेक्ट व नेटवर्किंग आगे बढ़ाएं",4:"चतुर्थ ढैय्या में माता/गृह-संपत्ति व कार्यस्थल के कागजात की पूरी जांच के बाद ही बड़ा निर्णय लें",5:"पंचम शनि में सट्टेबाजी टालकर कौशल उन्नयन, शोध और संतान/शिक्षा योजना को सुव्यवस्थित करें",6:"षष्ठ भाव के अत्यंत शुभ शनि गोचर में करियर-लक्ष्य, प्रतिस्पर्धा व पुराने ऋण समाप्ति पर जोर दें",7:"सप्तम शनि में व्यापारिक साझेदारी व वैवाहिक संवाद में पारदर्शिता और लिखित स्पष्टता बनाए रखें",8:"अष्टम ढैय्या में जोखिम भरे निवेश व उधार से दूर रहें तथा नियमित योग-साधना को नियम बनाएं",9:"नवम शनि में दीर्घकालिक लक्ष्य, उच्च प्रशिक्षण व धर्मसम्मत कर्म से भाग्योदय की नींव मजबूत करें",10:"दशम शनि में कड़ी मेहनत, अनुशासन और प्रशासनिक कौशल से स्थायी पद-प्रतिष्ठा अर्जित करें",11:"एकादश भाव के श्रेष्ठ लाभकारी शनि गोचर में संपत्ति क्रय, आय विस्तार और बड़े निवेश साकार करें",12:"साढ़ेसाती प्रथम चरण में अनावश्यक व्यय पर नियंत्रण रखें और विदेश/ऑनलाइन अवसरों की योजना बनाएं"},E={sun:"नेतृत्व, राजकीय/प्रशासनिक कार्य व आत्मसम्मान",moon:"मानसिक शांति, जनसंपर्क, गृह-सुख व रचनात्मकता",mars:"पराक्रम, तकनीकी दक्षता, भूमि-संपत्ति व ऊर्जा",mercury:"व्यापार, संवाद, लेखन, वित्त व विश्लेषणात्मक कौशल",jupiter:"ज्ञान, धन-वृद्धि, संतान/शिक्षा व शुभ मांगलिक उन्नति",venus:"सुख-सुविधा, कला, वाहन-ऐश्वर्य व दांपत्य/साझेदारी सौहार्द",saturn:"दीर्घकालिक करियर निर्माण, अनुशासन, सेवा व स्थायी संपत्ति",rahu:"नवीन तकनीक, दूरस्थ/विदेशी संपर्क व तीव्र महत्वाकांक्षा",ketu:"गहन शोध, विशेषज्ञता, आध्यात्मिक एकाग्रता व सूक्ष्म विवेक"},z=(v,C)=>{const S=Pt(d,v),x=E[v]||"कर्म एवं व्यक्तिगत विकास";if(v==="rahu"||v==="ketu")return{houseClause:`${J(e,v)?.houseInLagna||1}वें भाव स्थित ${C} अंतर्दशा (${x})`,natureTone:v==="rahu"?"अप्रत्याशित अवसर, नवाचार और बाहरी नेटवर्क को सक्रिय करती है":"गहन एकाग्रता, शोध और अनावश्यक उलझनों से मुक्ति दिलाती है",actionFocus:v==="rahu"?"आधुनिक तकनीक व दूरस्थ संपर्क का लाभ लें, पर भ्रामक सौदों से बचें":"विशेषज्ञ कौशल निखारें और शांत विवेक से निर्णय लें"};const I=Ht(d,v),B=S.some(j=>j===2||j===7)&&!S.includes(1)&&!S.some(j=>j===5||j===9),P=S.length>0?`भाव ${S.join("/")}`:"प्रमुख भाव";return I==="yogakaraka"?{houseClause:`योगकारक ${C} अंतर्दशा (${P} स्वामी — ${x})`,natureTone:"राजयोगकारी उन्नति, पदोन्नति और स्थायी समृद्धि का मार्ग खोलती है",actionFocus:"इस उच्च फलदायी चरण में करियर विस्तार, संपत्ति या बड़े लक्ष्य प्राथमिकता से साधें"}:I==="lagna"?{houseClause:`लग्नेश ${C} अंतर्दशा (${P} स्वामी — ${x})`,natureTone:"व्यक्तिगत पहचान, आत्मविश्वास और स्वास्थ्य-स्फूर्ति को सीधे बल देती है",actionFocus:"स्वयं के नेतृत्व, ब्रांड/प्रतिष्ठा निर्माण और महत्वपूर्ण पहल को आगे बढ़ाएं"}:I==="trikona"?{houseClause:`त्रिकोणेश ${C} अंतर्दशा (${P} स्वामी — ${x})`,natureTone:"भाग्य-सहयोग, विद्या/संतान सुख और सृजनशील समृद्धि प्रदान करती है",actionFocus:"शिक्षा, सृजनशील निवेश और शुभ मांगलिक योजनाओं को गति दें"}:I==="dusthana"?{houseClause:`दुःस्थान स्वामी ${C} अंतर्दशा (${P} — ${x})`,natureTone:"सामान्य से अधिक परिश्रम, प्रतिस्पर्धा या बाहरी बदलाव के बाद परिपक्व लाभ देती है",actionFocus:"कर्ज/विवाद व आवेगी बदलाव से बचें; अनुशासित दिनचर्या और व्यय नियंत्रण रखें"}:B?{houseClause:`धन/साझेदारी (${P}) स्वामी ${C} अंतर्दशा (${x})`,natureTone:"आर्थिक लेन-देन व साझेदारी में सक्रियता के साथ स्वास्थ्य सजगता की मांग करती है",actionFocus:"वित्तीय अनुबंध स्पष्ट रखें, कुटुम्ब सौहार्द बढ़ाएं और नियमित स्वास्थ्य जांच कराएं"}:I==="kendra"?{houseClause:`केंद्रेश ${C} अंतर्दशा (${P} स्वामी — ${x})`,natureTone:"कार्यक्षेत्र, गृह-सुख और व्यावहारिक उत्तरदायित्वों को सुदृढ़ बनाती है",actionFocus:"व्यावसायिक ढांचे को मजबूत करें और निरंतर कर्म से स्थायी परिणाम पाएं"}:{houseClause:`उपचय/लाभ (${P}) स्वामी ${C} अंतर्दशा (${x})`,natureTone:"निरंतर प्रयास से आय, पराक्रम और व्यावहारिक नेटवर्क में क्रमिक वृद्धि करती है",actionFocus:"लगातार कौशल अभ्यास, नेटवर्किंग और अनुशासित बचत पर ध्यान केंद्रित करें"}},N=Array.from({length:5},(v,C)=>{const S=h+C,x=C===0,I=x?r:Date.UTC(S,5,15,6,30,0);let B="मुख्य",P="सक्रिय",j="jupiter",O="mercury";if(m)if(x)B=m.activeMahadasha.lordHindi,P=m.activeAntardasha.lordHindi,j=m.activeMahadasha.lordId,O=m.activeAntardasha.lordId;else{const D=m.mahadashas.find(_=>I>=_.startUtcMs&&I<_.endUtcMs)||m.activeMahadasha,M=D.antardashas.find(_=>I>=_.startUtcMs&&I<_.endUtcMs)||D.antardashas[0];B=D.lordHindi,P=M.lordHindi,j=D.lordId,O=M.lordId}const Q=x?g?.grahaRows.find(D=>D.id==="jupiter"):void 0,K=x?g?.grahaRows.find(D=>D.id==="saturn"):void 0,y=Q&&K?null:ue(I),L=Q?Q.currentRashiNumber:y.grahas.jupiter.signNumber,T=K?K.currentRashiNumber:y.grahas.saturn.signNumber,R=Q?Q.houseFromNatalMoon:(L-p+12)%12+1,W=K?K.houseFromNatalMoon:(T-p+12)%12+1,V=[2,5,7,9,11].includes(R),dt=[3,6,11].includes(W),$t=[1,2,4,8,12].includes(W),ct=Ht(d,j),q=Ht(d,O);let X=3;ct==="yogakaraka"||ct==="lagna"||ct==="trikona"?X+=.65:ct==="dusthana"&&(X-=.55),q==="yogakaraka"||q==="lagna"||q==="trikona"?X+=.55:q==="dusthana"&&(X-=.45),V&&(X+=.7),dt&&(X+=.45),$t&&(X-=.45);const it=Math.min(5,Math.max(2,Math.round(X))),rt=it>=4?"#059669":it===3?"#D97706":"#C2410C",ot=`${"★".repeat(it)}${"☆".repeat(5-it)}`,bt=Array.from({length:5},(D,M)=>{const _=M<it,Y=8+M*17,pt=[`${Y},1.6`,`${(Y+1.6).toFixed(1)},5.8`,`${(Y+6.1).toFixed(1)},6.0`,`${(Y+2.6).toFixed(1)},8.8`,`${(Y+3.8).toFixed(1)},13.2`,`${Y},10.7`,`${(Y-3.8).toFixed(1)},13.2`,`${(Y-2.6).toFixed(1)},8.8`,`${(Y-6.1).toFixed(1)},6.0`,`${(Y-1.6).toFixed(1)},5.8`].join(" ");return _?`<polygon points="${pt}" fill="${rt}" stroke="${rt}" stroke-width="0.6" stroke-linejoin="round" />`:`<polygon points="${pt}" fill="#FFFDF8" stroke="#64748B" stroke-width="1.35" stroke-linejoin="round" />`}).join(""),st=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 84 16" width="84" height="16" role="img" aria-label="${ot}" style="display:inline-block; vertical-align:middle; width:84px; height:16px;">${bt}</svg>`,Dt=Wt[L-1],St=Wt[T-1],ft=z(O,P),o=k[R]||"संतुलित प्रगति व स्थिरता बनती है",b=H[W]||"धैर्यपूर्वक कर्म व अनुशासन बनाए रखें",A=x?`वर्तमान सक्रिय ${B} महादशा में ${ft.houseClause} ${ft.natureTone}।`:`वर्ष ${S} में ${B} महादशा के अंतर्गत ${ft.houseClause} ${ft.natureTone}।`,w=`गोचर गुरु (${Dt}, चंद्र से ${R}वां) के प्रभाव से ${o}।`,f=`कार्य-योजना: ${b}; साथ ही ${ft.actionFocus}।`;return{year:S,dashaLabel:`${B} – ${P}`,transitNote:`गुरु: ${Dt} (${R}) • शनि: ${St} (${W})`,stars:it,starHtml:st,summary:`${A} ${w} ${f}`}}),F='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="10" height="10" role="img" aria-label="★" style="display:inline-block; vertical-align:-1px; width:10px; height:10px; margin-left:1px;"><polygon points="8,1.4 9.7,5.7 14.3,5.9 10.7,8.8 11.9,13.4 8,10.8 4.1,13.4 5.3,8.8 1.7,5.9 6.3,5.7" fill="#D97706" stroke="#D97706" stroke-width="0.5" stroke-linejoin="round" /></svg>',$=`
    ${l(`डिजिटल ज्योतिषाचार्य : 5-वर्षीय वार्षिक रोडमैप (${h}–${h+4})`,u,n)}
    ${c("DJ4",`आने वाले 5 वर्षों का वार्षिक रोडमैप (${h} से ${h+4})`,"विंशोत्तरी अंतर्दशा + गुरु/शनि गोचर आधारित")}

    <table class="book-table" style="font-size: 8.2px; width: 100%; table-layout: fixed;">
      <thead>
        <tr>
          <th style="width: 9%; text-align:center;">वर्ष</th>
          <th style="width: 19%;">सक्रिय अंतर्दशा व गोचर</th>
          <th style="width: 16%; text-align:center;">शुभता रेटिंग</th>
          <th style="width: 56%;">वार्षिक फलादेश एवं व्यावहारिक कार्य-योजना</th>
        </tr>
      </thead>
      <tbody>
        ${N.map((v,C)=>`
            <tr style="background:${C===0?t.emeraldSoft:C%2===0?"#FFFDF8":"#FEF6E4"}; page-break-inside: avoid;">
              <td style="text-align:center; font-weight:900; font-size: 9.8px; color:${t.cosmicNavy}; white-space: nowrap;">${v.year}${C===0?'<div style="font-size:6.8px; color:#059669;">वर्तमान</div>':""}</td>
              <td style="padding: 8px 7px;">
                <div style="font-weight:800; color:${t.saffronDeep};">${a(v.dashaLabel)}</div>
                <div style="font-size:7.3px; color:${t.inkMuted}; margin-top:2px;">${a(v.transitNote)}</div>
              </td>
              <td class="pj-h2c-no-lift" style="text-align:center; white-space: nowrap; padding: 7px 4px;">
                <div class="pj-h2c-no-lift" style="display:flex; align-items:center; justify-content:center; min-height:17px;">${v.starHtml}</div>
                <div style="font-size: 7.4px; font-weight: 800; color: ${t.cosmicNavy}; margin-top: 3px;">${v.stars} / 5 स्टार</div>
              </td>
              <td style="padding: 8px 8px; line-height: 1.52; color: ${t.inkPrimary};">${a(v.summary)}</td>
            </tr>`).join("")}
      </tbody>
    </table>

    <div class="book-card" style="margin-top: 10px; background: ${t.pureIvory}; border: 1.4px solid ${t.templeGold}; border-radius: 9px; padding: 10px 13px; font-size: 8.3px; line-height: 1.58; page-break-inside: avoid;">
      <div style="font-weight: 900; color: ${t.cosmicNavy}; font-size: 9.4px; margin-bottom: 4px;">
        <span class="pj-h2c-no-lift" style="font-family:'Noto Sans Symbols','Noto Sans Symbols 2','DejaVu Sans','Segoe UI Symbol','Arial Unicode MS',sans-serif; color:${t.saffronDeep};">✦</span> 5-वर्षीय रोडमैप का सही उपयोग कैसे करें?
      </div>
      <div>• <b>4${F} या 5${F} वाले वर्ष (विस्तार काल):</b> नया व्यवसाय, संपत्ति क्रय, विवाह, पदोन्नति या बड़ा निवेश इन वर्षों में प्राथमिकता से करें।</div>
      <div style="margin-top:3px;">• <b>3${F} वाले वर्ष (निर्माण काल):</b> शिक्षा, कौशल उन्नयन, टीम निर्माण और स्थिर बचत पर ध्यान केंद्रित करें।</div>
      <div style="margin-top:3px;">• <b>2${F} वाले वर्ष (संरक्षण काल):</b> किसी से विवाद या जोखिम भरे ऋण से दूर रहें, स्वास्थ्य व आध्यात्मिक साधना को मजबूत बनाएं।</div>
    </div>
  `;return{sectionCode:"DJ4",sectionTag:`5-वर्षीय रोडमैप (${h}–${h+4})`,html:$}}function je(e,s){const{esc:a,buildBookPageHeader:l,buildSectionTitleBar:c,personHeader:u,appLogo:n}=s,r=e.panchang.lagnaNumber||1,h=tt(r,1),d=tt(r,5),p=tt(r,9),m=[],g=e.shadbalaBhava?.planets||[],k=new Set,H=[{id:h,role:"जीवन रत्न (लग्नेश — प्रथम भाव)",isLagna:!0},{id:d,role:"विद्या / बुद्धि रत्न (पंचमेश — पंचम भाव)",isLagna:!1},{id:p,role:"भाग्य रत्न (नवमेश — नवम भाव)",isLagna:!1}];for(const $ of H){if(k.has($.id))continue;const v=oe[$.id];if(!v)continue;const C=Pt(r,$.id),S=C.filter(W=>[6,8,12].includes(W));if(!$.isLagna&&C.every(W=>[6,8,12].includes(W)))continue;k.add($.id);const x=J(e,$.id),I=g.find(W=>W.id===$.id),B=I?Math.round((I.strengthRatio||I.totalRupas/Math.max(1,I.requiredRupas))*100):null,P=!!x?.isCombust,j=!!x?.isDebilitated,O=B!==null&&B>105&&!P&&!j,Q=P||j||B!==null&&B<=105,K=[];P&&K.push(`जन्म कुंडली में ${v.planetHi} सूर्य से अस्त हैं${B!==null?` (षड्बल: ${B}%)`:""} — बलवर्धन हेतु रत्न धारण एवं बीज मंत्र जप विशेष लाभप्रद है`),j&&K.push(`जन्म कुंडली में ${v.planetHi} नीचस्थ हैं — रत्न धारण से पूर्व 3 दिन परीक्षण करें अथवा बीज मंत्र जप व सात्विक दान से बल संवर्धन करें`),O?K.push(`षड्बल में पहले से पूर्णतः बली (${B}% — आवश्यक न्यूनतम से अधिक, अ-अस्त व अ-नीचस्थ) होने के कारण अनावश्यक रत्न धारण के स्थान पर ${v.planetHi} के मंत्र जप एवं सात्विक दान को प्राथमिकता देना शास्त्रसम्मत है`):!P&&!j&&B!==null&&K.push(`वर्तमान षड्बल ${B}% होने से शुभ फल वृद्धि हेतु विधिवत अभिमंत्रित ${v.gemHi} धारण करना सहायक रहेगा`),S.length>0&&!$.isLagna&&K.push(`भाव ${S.join("/")} का सह-स्वामित्व होने से पहले 3 दिन परीक्षण करें`);const y=P||j?`प्राथमिक रत्न / बलवर्धन (${P?"अस्त ग्रह":"नीचस्थ"}${B!==null?` • षड्बल ${B}%`:""})`:Q?`अनुशंसित रत्न${B!==null?` • षड्बल ${B}%`:""}`:O?`षड्बल बली (${B}%) — मंत्र जप व दान श्रेष्ठ`:"शुभ त्रिकोण रत्न",L=O?"#9A3412":"#065F46",T=O?"#FFF7ED":"#ECFDF5",R=P?0:j?1:Q?2:O?4:3;m.push({roleLabel:$.role,spec:v,shadbalaPct:B,needsStrengthening:Q,priorityBadgeHi:y,priorityBadgeColor:L,priorityBadgeBg:T,cautionNote:K.length>0?K.join(" • "):void 0,sortRank:R})}m.sort(($,v)=>$.sortRank-v.sortRank);const E=[6,8,12],z=[],N=new Set;for(const $ of E){const v=tt(r,$);if(N.has(v)||v===h||k.has(v))continue;const C=oe[v];if(!C)continue;N.add(v);const S=Pt(r,v).filter(x=>[6,8,12].includes(x));z.push({planetHi:C.planetHi,dusthanaHousesLabel:S.map(x=>`${x}वां भाव`).join(" व "),gemHi:C.gemHi,warningHi:C.avoidWarnHi})}return{sectionCode:"DJ5",sectionTag:"रत्न व उपाय व्यावहारिक विधि",html:`
    ${l("डिजिटल ज्योतिषाचार्य : रत्न एवं उपाय — पूर्ण व्यावहारिक विधि",u,n)}
    ${c("DJ5a",`शुभ त्रिकोण रत्न एवं षड्बल आधारित चयन (${e.panchang.lagnaName} लग्न)`,"षड्बल, अस्त/नीच एवं त्रिकोण स्वामित्व पर आधारित")}

    <div style="display: flex; flex-direction: column; gap: 8px; margin-bottom: 10px;">
      ${m.map(($,v)=>`
          <div class="book-card" style="background: ${t.pureIvory}; border: 1.4px solid ${t.templeGold}; border-left: 4.5px solid ${$.needsStrengthening?"#059669":"#D97706"}; border-radius: 9px; padding: 7.5px 11px; page-break-inside: avoid;">
            <div style="display: table; width: 100%; border-bottom: 1px solid ${t.borderMuted}; padding-bottom: 4px; margin-bottom: 5px;">
              <div style="display: table-cell; font-size: 9.2px; font-weight: 900; color: ${t.cosmicNavy}; vertical-align: middle;">
                ${v+1}. ${a($.spec.gemHi)} — <span style="color:${t.saffronDeep};">${a($.roleLabel)}</span>
              </div>
              <div style="display: table-cell; text-align: right; vertical-align: middle; white-space: nowrap;">
                <span style="display: inline-block; background: ${$.priorityBadgeBg}; border: 1px solid ${$.priorityBadgeColor}; color: ${$.priorityBadgeColor}; border-radius: 4px; padding: 1.5px 6px; font-size: 7.1px; font-weight: 800;">${a($.priorityBadgeHi)}</span>
              </div>
            </div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 3.5px 12px; font-size: 7.9px; line-height: 1.44; color: ${t.inkPrimary};">
              <div><b>• वजन (रत्ती) व उपरत्न:</b> ${a($.spec.rattiHi)} • उपरत्न: ${a($.spec.uparatnaHi)}</div>
              <div><b>• धातु एवं उंगली:</b> ${a($.spec.metalHi)} में ${a($.spec.fingerHi)}</div>
              <div><b>• शुभ वार व समय:</b> ${a($.spec.dayHi)} • ${a($.spec.timingHi)}</div>
              <div><b>• शुद्धिकरण विधि:</b> ${a($.spec.purificationHi)}</div>
            </div>
            <div style="margin-top: 4.5px; padding: 4.5px 8px; background: ${t.emeraldSoft}; border: 1px solid #A7F3D0; border-radius: 6px; font-size: 8.1px; color: #065F46; font-weight: 700; line-height: 1.6; overflow: visible;">
              प्राण-प्रतिष्ठा मंत्र (108 बार जप): <span class="book-beej-mantra" style="font-weight: 700; color: #065F46;">${a(Ft[$.spec.planetId]||$.spec.mantraHi)}</span>
            </div>
            ${$.cautionNote?`<div style="margin-top: 3.5px; font-size: 7.4px; color: ${$.needsStrengthening?"#065F46":t.saffronDeep}; font-weight: 700; line-height: 1.42;">शास्त्रीय विवेचन: ${a($.cautionNote)}</div>`:""}
          </div>`).join("")}
    </div>

    ${c("DJ5b","किस रत्न से बचें? (वर्जित रत्न एवं सावधानी — Contraindications)","6वें, 8वें व 12वें भाव स्वामियों के रत्न")}
    <table class="book-table" style="font-size: 8px; width: 100%; table-layout: fixed;">
      <thead>
        <tr>
          <th style="width: 14%;">ग्रह</th>
          <th style="width: 17%;">दुःस्थान स्वामित्व</th>
          <th style="width: 24%;">वर्जित रत्न (न पहनें)</th>
          <th style="width: 45%;">क्यों बचें? (स्पष्ट कारण)</th>
        </tr>
      </thead>
      <tbody>
        ${z.length>0?z.map(($,v)=>`
                  <tr style="background:${v%2===0?"#FEF2F2":"#FFF7ED"}; page-break-inside: avoid;">
                    <td style="font-weight:800; color:${t.crimson};">${a($.planetHi)}</td>
                    <td style="font-weight:700; color:${t.cosmicNavy};">${a($.dusthanaHousesLabel)}</td>
                    <td style="font-weight:800; color:${t.crimson};">${a($.gemHi)}</td>
                    <td style="line-height: 1.46;">${a($.warningHi)}</td>
                  </tr>`).join(""):'<tr style="background:#FFFDF8;"><td colspan="4" style="text-align:center;">आपकी कुंडली के प्रमुख त्रिकोण स्वामी शुभ हैं; फिर भी बिना परीक्षण कोई भी क्रूर ग्रह रत्न धारण न करें।</td></tr>'}
      </tbody>
    </table>

    <div class="book-card" style="margin-top: 7px; background: ${t.templeGoldSoft}; border: 1.3px solid ${t.templeGold}; border-radius: 8px; padding: 8px 11px; font-size: 7.9px; line-height: 1.52; color: ${t.inkPrimary}; page-break-inside: avoid;">
      <b style="color:${t.cosmicNavy};">✦ रत्न धारण का 4-चरणीय शास्त्रीय नियम:</b>
      (1) सदैव प्राकृतिक व लैब-प्रमाणित रत्न चुनें और नीचे से त्वचा को स्पर्श करने वाली अंगूठी बनवाएं।
      (2) धारण करने से पूर्व रात्रि में रत्न को कच्चे दूध व गंगाजल के पात्र में रखें।
      (3) प्रातः स्नान के पश्चात पूर्व/उत्तर मुख होकर धूप-दीप दिखाएं और ऊपर दिए गए बीज मंत्र का 108 बार जप कर धारण करें।
      (4) वर्जित ग्रहों (6, 8, 12 भाव स्वामी) की शांति के लिए रत्न नहीं, बल्कि केवल <b>सात्विक दान व मंत्र जप</b> सर्वोत्तम होता है।
    </div>
  `}}const U="'Noto Sans Devanagari', 'Nirmala UI', 'Mangal', 'Kohinoor Devanagari', system-ui, -apple-system, sans-serif";function lt(e){return Ne(String(e??"").replace(/\$([^$]+)\$/g,"$1").replace(/\\\(([^)]+)\\\)/g,"$1").replace(/\\\[([^\]]+)\\\]/g,"$1").replace(/\^?\{\\circ\}|\^\\circ|\\circ|\\degree|\\deg\b/g,"°").replace(/\^?\{\\prime\\prime\}|\\prime\\prime|\\second\b/g,'"').replace(/\^?\{\\prime\}|\\prime/g,"'").replace(/\\cdot/g,"·").replace(/\\times/g,"×").replace(/(\d{1,3})\s*°\s*(\d{1,2})\s*['′]\s*(\d{1,2})\s*["″]/g,`$1° $2' $3"`))}function i(e){return lt(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}const zt="display: inline-flex; align-items: center; justify-content: center; line-height: 1.15; padding-top: 4px; padding-bottom: 4px; vertical-align: middle; box-sizing: border-box; text-align: center;",Nt="display: inline-block; line-height: 1.15;",Ie=xt.websiteDisplay.replace(/\s+/g,"");function At(e=t.saffronDeep){return`<span style="white-space: nowrap; display: inline-block; letter-spacing: 0; font-family: monospace; font-weight: 800; color: ${e};">${i(Ie)}</span>`}function Te(e){return e.map(s=>({houseNumber:s.houseNumber,rashiNumber:s.rashiNumber,rashiName:s.rashiNameHi,bhavaTitle:`भाव ${s.houseNumber}`,planets:s.planets.map(a=>({shortHindi:a.shortHindi,chartLabel:a.chartLabel||be(a),degInt:a.degInt,hindiName:a.hindiName,degree:a.fullDMS,fullDegreeDMS:a.fullDMS,statusBadge:"madhyam"}))}))}function Me(e,s,a){const l={1:{rx:50,ry:43.2,px:50,py:28.4,maxPerLine:2,maxWidthU:25.5,maxHeightU:15.2},2:{rx:25,ry:21.2,px:25,py:9.8,maxPerLine:2,isOuterTri:!0,maxWidthU:21.5,maxHeightU:11},3:{rx:21.8,ry:25.5,px:11.4,py:25.5,maxPerLine:1,isSide:!0,maxWidthU:13.8,maxHeightU:15.8},4:{rx:43.2,ry:50,px:23.8,py:50,maxPerLine:2,maxWidthU:25.5,maxHeightU:16},5:{rx:21.8,ry:74.5,px:11.4,py:74.5,maxPerLine:1,isSide:!0,maxWidthU:13.8,maxHeightU:15.8},6:{rx:25,ry:78.8,px:25,py:90.2,maxPerLine:2,isOuterTri:!0,maxWidthU:21.5,maxHeightU:11},7:{rx:50,ry:56.8,px:50,py:73.8,maxPerLine:2,maxWidthU:25.5,maxHeightU:16},8:{rx:75,ry:78.8,px:75,py:90.2,maxPerLine:2,isOuterTri:!0,maxWidthU:21.5,maxHeightU:11},9:{rx:78.2,ry:74.5,px:88.6,py:74.5,maxPerLine:1,isSide:!0,maxWidthU:13.8,maxHeightU:15.8},10:{rx:56.8,ry:50,px:76.2,py:50,maxPerLine:2,maxWidthU:25.5,maxHeightU:16},11:{rx:78.2,ry:25.5,px:88.6,py:25.5,maxPerLine:1,isSide:!0,maxWidthU:13.8,maxHeightU:15.8},12:{rx:75,ry:21.2,px:75,py:9.8,maxPerLine:2,isOuterTri:!0,maxWidthU:21.5,maxHeightU:11}},c=e.map(u=>{const n=l[u.houseNumber];if(!n)return"";const r=u.planets||[],h=r.length>=3,d=n.isSide?r.length>=5?2:1:r.length>=5?3:h?2:n.maxPerLine,p=r.map(v=>{const C=(v.chartLabel||v.shortHindi||"").trim(),S=String(v.degInt??0).padStart(2,"0");return/\d$/.test(C)?C:`${C}${S}`}),m=[];for(let v=0;v<p.length;v+=d)m.push(p.slice(v,v+d).join(" "));const g=Math.max(1,...m.map(v=>Array.from(v).length)),k=n.isSide?m.length>=4?2:m.length>=3?2.2:2.45:n.isOuterTri?m.length>=2?2.25:2.6:h?2.4:2.85,H=n.maxWidthU*.9/Math.max(4,g*.68),E=n.maxHeightU/Math.max(1,m.length*1.24),z=Number(Math.max(1.5,Math.min(k,H,E)).toFixed(2)),N=Number((z*1.16).toFixed(2)),F=m.map((v,C)=>{const S=(C-(m.length-1)/2)*N;return`<text x="${n.px}" y="${(n.py+S).toFixed(2)}" dy="-0.05em" text-anchor="middle" dominant-baseline="central" fill="${t.cosmicNavy}" font-size="${z}" font-weight="700" font-family="${U}">${i(v)}</text>`}).join(""),$=u.houseNumber===1?`<text x="50" y="11.4" dy="-0.05em" text-anchor="middle" dominant-baseline="central" fill="${t.saffronDeep}" font-size="2.8" font-weight="800" font-family="${U}">${typeof a=="number"?`लग्न ${String(a).padStart(2,"0")}°`:"लग्न"}</text>`:"";return`
        <text x="${n.rx}" y="${n.ry}" text-anchor="middle" dominant-baseline="central" fill="${t.saffron}" font-size="3.15" font-weight="800" font-family="${U}">${u.rashiNumber}</text>
        ${$}
        ${F}
      `}).join("");return`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="${s}" height="${s}" style="width:${s}px;height:${s}px;display:block;margin:0 auto;overflow:visible;">
      <rect x="1.5" y="1.5" width="97" height="97" rx="2.5" fill="${t.warmIvory}" stroke="${t.templeGold}" stroke-width="1.4" />
      <rect x="3.2" y="3.2" width="93.6" height="93.6" rx="1.2" fill="none" stroke="${t.saffron}" stroke-opacity="0.38" stroke-width="0.45" />
      <line x1="1.5" y1="1.5" x2="98.5" y2="98.5" stroke="${t.templeGoldDark}" stroke-width="0.8" />
      <line x1="98.5" y1="1.5" x2="1.5" y2="98.5" stroke="${t.templeGoldDark}" stroke-width="0.8" />
      <polygon points="50,1.5 98.5,50 50,98.5 1.5,50" fill="none" stroke="${t.templeGoldDark}" stroke-width="0.9" />
      <text x="50" y="50.4" dy="-0.06em" text-anchor="middle" dominant-baseline="central" fill="${t.templeGold}" fill-opacity="0.22" font-size="7" font-weight="800" font-family="${U}">ॐ</text>
      ${c}
    </svg>
  `}function Pe(e,s,a,l){const c={};e.forEach(d=>{c[d.rashiNumber]=d});const u=[{rashi:12,label:"12 मीन",col:0,row:0},{rashi:1,label:"1 मेष",col:1,row:0},{rashi:2,label:"2 वृष",col:2,row:0},{rashi:3,label:"3 मि",col:3,row:0},{rashi:4,label:"4 कर्क",col:3,row:1},{rashi:5,label:"5 सिंह",col:3,row:2},{rashi:6,label:"6 कन्या",col:3,row:3},{rashi:7,label:"7 तुला",col:2,row:3},{rashi:8,label:"8 वृश्चि",col:1,row:3},{rashi:9,label:"9 धनु",col:0,row:3},{rashi:10,label:"10 मकर",col:0,row:2},{rashi:11,label:"11 कुंभ",col:0,row:1}],n=24,r=2,h=u.map(d=>{const p=r+d.col*n,m=r+d.row*n,g=c[d.rashi],k=g?.houseNumber===1,E=(g?.planets||[]).map(F=>F.chartLabel||F.shortHindi),z=[];for(let F=0;F<E.length;F+=2)z.push(E.slice(F,F+2).join(" "));const N=z.map((F,$)=>{const v=m+12+($-(z.length-1)/2)*3.6;return`<text x="${p+n/2}" y="${v.toFixed(1)}" dy="-0.06em" text-anchor="middle" dominant-baseline="central" fill="${t.cosmicNavy}" font-size="3.2" font-weight="800" font-family="${U}">${i(F)}</text>`}).join("");return`
        <rect x="${p}" y="${m}" width="${n}" height="${n}" fill="${k?"#FFF3E0":t.warmIvory}" stroke="${t.templeGoldDark}" stroke-width="0.68" />
        <text x="${p+1.6}" y="${m+3.4}" dy="-0.06em" dominant-baseline="central" fill="${t.saffronDeep}" font-size="2.6" font-weight="700" font-family="${U}">${i(d.label)}</text>
        ${k?`<text x="${p+n-1.5}" y="${m+3.4}" dy="-0.06em" text-anchor="end" dominant-baseline="central" fill="${t.emerald}" font-size="2.5" font-weight="800" font-family="${U}">${typeof l=="number"?`लग्न ${l}°`:"लग्न"}</text>`:""}
        ${N}
        <text x="${p+n-1.5}" y="${m+n-2.2}" dy="-0.04em" text-anchor="end" dominant-baseline="central" fill="${t.inkMuted}" font-size="2.35" font-family="'Noto Sans Devanagari', sans-serif">भा.${g?.houseNumber||""}</text>
      `}).join("");return`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="${s}" height="${s}" style="width:${s}px;height:${s}px;display:block;margin:0 auto;">
      <rect x="1" y="1" width="98" height="98" rx="2" fill="${t.pureIvory}" stroke="${t.templeGold}" stroke-width="1.25" />
      <rect x="${r+n}" y="${r+n}" width="${n*2}" height="${n*2}" fill="${t.templeGoldSoft}" stroke="${t.templeGold}" stroke-width="0.7" />
      <text x="50" y="44.2" dy="-0.06em" text-anchor="middle" dominant-baseline="central" fill="${t.saffron}" font-size="8" font-weight="800">ॐ</text>
      <text x="50" y="54.0" dy="-0.06em" text-anchor="middle" dominant-baseline="central" fill="${t.cosmicNavy}" font-size="3.3" font-weight="800" font-family="${U}">${i(a)}</text>
      <text x="50" y="60.2" dy="-0.06em" text-anchor="middle" dominant-baseline="central" fill="${t.inkMuted}" font-size="2.5" font-family="${U}">दक्षिण भारतीय चक्र</text>
      ${h}
    </svg>
  `}function Be(e,s,a,l,c){return s==="south"?Pe(e,a,l,c):Me(e,a,c)}function Vt(e,s,a,l,c,u){const n=Math.min(u,l/2,c/2);e.beginPath(),e.moveTo(s+n,a),e.lineTo(s+l-n,a),e.quadraticCurveTo(s+l,a,s+l,a+n),e.lineTo(s+l,a+c-n),e.quadraticCurveTo(s+l,a+c,s+l-n,a+c),e.lineTo(s+n,a+c),e.quadraticCurveTo(s,a+c,s,a+c-n),e.lineTo(s,a+n),e.quadraticCurveTo(s,a,s+n,a),e.closePath()}function ut(e,s,a,l){const c=e.textBaseline;e.textBaseline="alphabetic";const u=e.measureText(s),n=u.actualBoundingBoxAscent,r=u.actualBoundingBoxDescent;Number.isFinite(n)&&Number.isFinite(r)&&n>0?e.fillText(s,a,l+(n-r)/2):(e.textBaseline="middle",e.fillText(s,a,l)),e.textBaseline=c}function Ae(e,s,a){if(typeof document>"u")return"";try{const c=Math.max(240,Math.round(s*3)),u=c,n=c/100,r=document.createElement("canvas");r.width=c,r.height=u;const h=r.getContext("2d");if(!h)return"";h.fillStyle=t.warmIvory,h.fillRect(0,0,c,u),Vt(h,1.5*n,1.5*n,97*n,97*n,2.5*n),h.fillStyle=t.warmIvory,h.fill(),h.lineWidth=1.4*n,h.strokeStyle=t.templeGold,h.stroke(),Vt(h,3.2*n,3.2*n,93.6*n,93.6*n,1.2*n),h.lineWidth=.45*n,h.strokeStyle="rgba(255, 111, 0, 0.38)",h.stroke(),h.beginPath(),h.moveTo(1.5*n,1.5*n),h.lineTo(98.5*n,98.5*n),h.moveTo(98.5*n,1.5*n),h.lineTo(1.5*n,98.5*n),h.lineWidth=.85*n,h.strokeStyle=t.templeGoldDark,h.stroke(),h.beginPath(),h.moveTo(50*n,1.5*n),h.lineTo(98.5*n,50*n),h.lineTo(50*n,98.5*n),h.lineTo(1.5*n,50*n),h.closePath(),h.lineWidth=.95*n,h.strokeStyle=t.templeGoldDark,h.stroke(),h.textAlign="center",h.fillStyle="rgba(212, 175, 55, 0.22)",h.font=`800 ${(7*n).toFixed(1)}px ${U}`,ut(h,"ॐ",50*n,50.2*n);const d={1:{rx:50,ry:43.2,px:50,py:28.4,maxPerLine:2,maxWidthU:25.5,maxHeightU:15.2},2:{rx:25,ry:21.2,px:25,py:9.8,maxPerLine:2,isOuterTri:!0,maxWidthU:21.5,maxHeightU:11},3:{rx:21.8,ry:25.5,px:11.4,py:25.5,maxPerLine:1,isSide:!0,maxWidthU:13.8,maxHeightU:15.8},4:{rx:43.2,ry:50,px:23.8,py:50,maxPerLine:2,maxWidthU:25.5,maxHeightU:16},5:{rx:21.8,ry:74.5,px:11.4,py:74.5,maxPerLine:1,isSide:!0,maxWidthU:13.8,maxHeightU:15.8},6:{rx:25,ry:78.8,px:25,py:90.2,maxPerLine:2,isOuterTri:!0,maxWidthU:21.5,maxHeightU:11},7:{rx:50,ry:56.8,px:50,py:73.8,maxPerLine:2,maxWidthU:25.5,maxHeightU:16},8:{rx:75,ry:78.8,px:75,py:90.2,maxPerLine:2,isOuterTri:!0,maxWidthU:21.5,maxHeightU:11},9:{rx:78.2,ry:74.5,px:88.6,py:74.5,maxPerLine:1,isSide:!0,maxWidthU:13.8,maxHeightU:15.8},10:{rx:56.8,ry:50,px:76.2,py:50,maxPerLine:2,maxWidthU:25.5,maxHeightU:16},11:{rx:78.2,ry:25.5,px:88.6,py:25.5,maxPerLine:1,isSide:!0,maxWidthU:13.8,maxHeightU:15.8},12:{rx:75,ry:21.2,px:75,py:9.8,maxPerLine:2,isOuterTri:!0,maxWidthU:21.5,maxHeightU:11}};for(const m of e){const g=d[m.houseNumber];if(!g)continue;if(h.fillStyle=t.saffron,h.font=`800 ${(3.15*n).toFixed(1)}px ${U}`,ut(h,String(m.rashiNumber),g.rx*n,g.ry*n),m.houseNumber===1){h.fillStyle=t.saffronDeep,h.font=`800 ${(2.8*n).toFixed(1)}px ${U}`;const S=typeof a=="number"?`लग्न ${String(a).padStart(2,"0")}°`:"लग्न";ut(h,S,50*n,11.4*n)}const k=m.planets||[];if(k.length===0)continue;const H=k.length>=3,E=g.isSide?k.length>=5?2:1:k.length>=5?3:H?2:g.maxPerLine,z=k.map(S=>{const x=(S.chartLabel||S.shortHindi||"").trim(),I=String(S.degInt??0).padStart(2,"0");return/\d$/.test(x)?x:`${x}${I}`}),N=[];for(let S=0;S<z.length;S+=E)N.push(z.slice(S,S+E).join(" "));let F=g.isSide?N.length>=4?2:N.length>=3?2.2:2.45:g.isOuterTri?N.length>=2?2.25:2.6:H?2.4:2.85;const $=g.maxHeightU/Math.max(1,N.length*1.24);F=Number(Math.min(F,$).toFixed(2)),h.fillStyle=t.cosmicNavy;const v=g.maxWidthU*n*.9;for(;F>1.45&&(h.font=`700 ${(F*n).toFixed(1)}px ${U}`,!(Math.max(...N.map(x=>h.measureText(lt(x)).width))<=v));)F=Number((F-.1).toFixed(2));const C=F*1.16;h.font=`700 ${(F*n).toFixed(1)}px ${U}`,N.forEach((S,x)=>{const I=(x-(N.length-1)/2)*C;ut(h,lt(S),g.px*n,(g.py+I)*n)})}const p=r.toDataURL("image/png");return r.width=0,r.height=0,p.startsWith("data:image/png;base64,")?p:""}catch{return""}}function Re(e,s,a,l){if(typeof document>"u")return"";try{const u=Math.max(240,Math.round(s*3)),n=u,r=u/100,h=document.createElement("canvas");h.width=u,h.height=n;const d=h.getContext("2d");if(!d)return"";d.fillStyle=t.pureIvory,d.fillRect(0,0,u,n),Vt(d,1*r,1*r,98*r,98*r,2*r),d.fillStyle=t.pureIvory,d.fill(),d.lineWidth=1.25*r,d.strokeStyle=t.templeGold,d.stroke();const p=24,m=2;d.fillStyle=t.templeGoldSoft,d.fillRect((m+p)*r,(m+p)*r,p*2*r,p*2*r),d.lineWidth=.7*r,d.strokeStyle=t.templeGold,d.strokeRect((m+p)*r,(m+p)*r,p*2*r,p*2*r),d.textAlign="center",d.fillStyle=t.saffron,d.font=`800 ${(8*r).toFixed(1)}px ${U}`,ut(d,"ॐ",50*r,44.2*r),d.fillStyle=t.cosmicNavy,d.font=`800 ${(3.2*r).toFixed(1)}px ${U}`,ut(d,lt(a),50*r,54*r),d.fillStyle=t.inkMuted,d.font=`600 ${(2.5*r).toFixed(1)}px ${U}`,ut(d,"दक्षिण भारतीय चक्र",50*r,60.2*r);const g={};e.forEach(E=>{g[E.rashiNumber]=E});const k=[{rashi:12,label:"12 मीन",col:0,row:0},{rashi:1,label:"1 मेष",col:1,row:0},{rashi:2,label:"2 वृष",col:2,row:0},{rashi:3,label:"3 मि",col:3,row:0},{rashi:4,label:"4 कर्क",col:3,row:1},{rashi:5,label:"5 सिंह",col:3,row:2},{rashi:6,label:"6 कन्या",col:3,row:3},{rashi:7,label:"7 तुला",col:2,row:3},{rashi:8,label:"8 वृश्चि",col:1,row:3},{rashi:9,label:"9 धनु",col:0,row:3},{rashi:10,label:"10 मकर",col:0,row:2},{rashi:11,label:"11 कुंभ",col:0,row:1}];for(const E of k){const z=m+E.col*p,N=m+E.row*p,F=g[E.rashi],$=F?.houseNumber===1;d.fillStyle=$?"#FFF3E0":t.warmIvory,d.fillRect(z*r,N*r,p*r,p*r),d.lineWidth=.68*r,d.strokeStyle=t.templeGoldDark,d.strokeRect(z*r,N*r,p*r,p*r),d.textAlign="left",d.fillStyle=t.saffronDeep,d.font=`700 ${(2.6*r).toFixed(1)}px ${U}`,ut(d,E.label,(z+1.5)*r,(N+3.4)*r),$&&(d.textAlign="right",d.fillStyle=t.emerald,d.font=`800 ${(2.5*r).toFixed(1)}px ${U}`,ut(d,typeof l=="number"?`लग्न ${l}°`:"लग्न",(z+p-1.4)*r,(N+3.4)*r));const C=(F?.planets||[]).map(x=>x.chartLabel||x.shortHindi),S=[];for(let x=0;x<C.length;x+=2)S.push(C.slice(x,x+2).join(" "));d.textAlign="center",d.fillStyle=t.cosmicNavy,d.font=`800 ${(3.2*r).toFixed(1)}px ${U}`,S.forEach((x,I)=>{const B=N+12+(I-(S.length-1)/2)*3.6;ut(d,lt(x),(z+p/2)*r,B*r)}),d.textAlign="right",d.fillStyle=t.inkMuted,d.font=`600 ${(2.35*r).toFixed(1)}px ${U}`,ut(d,`भा.${F?.houseNumber||""}`,(z+p-1.4)*r,(N+p-2.2)*r)}const H=h.toDataURL("image/png");return h.width=0,h.height=0,H.startsWith("data:image/png;base64,")?H:""}catch{return""}}function qt(e,s,a,l,c,u){if(c&&typeof document<"u"){const n=s==="south"?Re(e,a,l,u):Ae(e,a,u);if(n)return`<img src="${n}" alt="${i(l)}" width="${a}" height="${a}" style="width:${a}px;height:${a}px;display:block;margin:0 auto;" />`}return Be(e,s,a,l,u)}function Z(e,s,a){return`
    <div style="display: table; width: 100%; box-sizing: border-box; padding-bottom: 7px; margin-bottom: 10px; border-bottom: 2px solid ${t.templeGold};">
      <div style="display: table-cell; vertical-align: middle; text-align: left; padding-right: 10px;">
        <div style="display: table;">
          <div style="display: table-cell; vertical-align: middle; padding-right: 9px;">
            ${Lt(28,a,1.8)}
          </div>
          <div style="display: table-cell; vertical-align: middle;">
            <div style="display: block; font-size: 10.5px; font-weight: 800; color: ${t.cosmicNavy}; line-height: 1.25;">
              पण्डित जी ऑनलाइन (PANDIT JI ONLINE) • बृहत् वैदिक जन्म पत्रिका
            </div>
            <div style="display: block; font-size: 8px; color: ${t.saffronDeep}; font-weight: 700; margin-top: 2px; line-height: 1.3;">
              ${i(s)}
            </div>
          </div>
        </div>
      </div>
      <div style="display: table-cell; vertical-align: middle; text-align: right; white-space: nowrap; width: 1%;">
        <span class="book-pill" style="${zt} background: ${t.cosmicNavy}; color: #FDE68A; border: 1.2px solid ${t.templeGold}; font-size: 8.1px; font-weight: 800; padding-left: 11px; padding-right: 11px; border-radius: 999px; white-space: nowrap;">
          <span style="${Nt}">${i(e)}</span>
        </span>
      </div>
    </div>
  `}function G(e,s,a){const l=a&&a.includes("PANDIT JI ONLINE")?" letter-spacing: 0; word-spacing: 3px;":"",c=i(String(s||"").normalize("NFC")).replace(/\(\s*([^()–—-]+?)\s*[–—-]\s*([^()–—-]+?)\s*\)/gu,`<span class="pj-h2c-no-lift" style="display:inline-block; white-space:nowrap; direction:ltr; unicode-bidi:isolate; font-family:${U}; font-weight:700; letter-spacing:0; font-variant-ligatures:normal; color:#FDE68A; margin-left:4px;"><span style="display:inline-block; margin-right:1.5px;">(</span><span style="display:inline-block; letter-spacing:0;">$1</span><span style="display:inline-block; margin:0 3.5px;">–</span><span style="display:inline-block; letter-spacing:0;">$2</span><span style="display:inline-block; margin-left:1.5px;">)</span></span>`);return`
    <div class="book-section-bar pj-h2c-no-lift" style="display: table; width: 100%; box-sizing: border-box; background: linear-gradient(90deg, ${t.cosmicNavy} 0%, #1E293B 100%); border-left: 4.5px solid ${t.saffron}; border-bottom: 1.8px solid ${t.templeGold}; border-radius: 7px; padding: 7px 11px; margin: 8px 0 8px 0; overflow: visible; font-family: ${U};">
      <div class="pj-h2c-no-lift" style="display: table-cell; vertical-align: middle; text-align: left; color: ${t.warmIvory}; font-size: 10.2px; font-weight: 700; line-height: 1.54; padding-right: 8px; overflow: visible; direction: ltr; unicode-bidi: isolate;">
        <span class="pj-h2c-no-lift" style="display: block; line-height: 1.54;"><span style="color: ${t.templeGold}; font-weight: 800; margin-right: 5px;">${i(e)}.</span>${c}</span>
      </div>
      ${a?`<div class="pj-h2c-no-lift" style="display: table-cell; vertical-align: middle; text-align: right; white-space: nowrap; width: 1%;"><span class="book-pill pj-h2c-no-lift" style="${zt} background: rgba(212, 175, 55, 0.16); border: 1px solid rgba(212, 175, 55, 0.5); color: #FDE68A; font-size: 7.7px; font-weight: 700; padding-left: 9px; padding-right: 9px; border-radius: 999px; white-space: nowrap;${l}"><span style="${Nt}${l}">${i(a)}</span></span></div>`:""}
    </div>
  `}function kt(e){const s=De[e],a=s.keyPoints.map(l=>`<span style="display: block; margin-top: 2.5px;"><b style="color: ${t.saffronDeep};">• ${i(l.term.hi)}:</b> ${i(l.meaning.hi)}</span>`).join("");return`
    <div class="book-card" style="background: ${t.saffronSoft}; border: 1.2px solid ${t.templeGold}; border-radius: 8px; padding: 7.5px 10px; margin: 8px 0 6px 0; font-size: 8.3px; color: ${t.inkPrimary}; line-height: 1.48;">
      <div style="font-weight: 800; color: ${t.cosmicNavy}; font-size: 8.8px; margin-bottom: 2.5px;">
        ✦ इसे कैसे समझें? — ${i(s.triggerTitle.hi)}
      </div>
      <div>${i(s.whatItShows.hi)}</div>
      ${a}
      <div style="margin-top: 3.5px; color: ${t.emerald}; font-weight: 700;">
        ध्यान दें: ${i(s.practicalTip.hi)}
      </div>
    </div>
  `}function Yt(e,s,a){return`
    <div class="book-card" style="background: ${t.saffronSoft}; border: 1.2px solid ${t.templeGold}; border-radius: 8px; padding: 7.5px 10px; margin: 8px 0 6px 0; font-size: 8.3px; color: ${t.inkPrimary}; line-height: 1.48;">
      <div style="font-weight: 800; color: ${t.cosmicNavy}; font-size: 8.8px; margin-bottom: 2.5px;">
        ✦ इसे कैसे समझें? — ${i(e)}
      </div>
      <div>${i(s)}</div>
      <div style="margin-top: 3.5px; color: ${t.emerald}; font-weight: 700;">
        व्यावहारिक सुझाव: ${i(a)}
      </div>
    </div>
  `}function Jt(e,s,a){return`
    <div style="display: flex; align-items: center; gap: 6px; width: 100%;">
      <div style="flex: 1; height: 8px; background: #EFE3C6; border-radius: 999px; overflow: hidden; border: 0.8px solid #D9C495;">
        <div style="width: ${Math.max(4,Math.min(100,Math.round(e)))}%; height: 100%; background: ${s}; border-radius: 999px;"></div>
      </div>
      ${a?`<span style="font-size: 7.6px; font-weight: 800; font-family: monospace; color: ${t.cosmicNavy}; min-width: 34px; text-align: right;">${i(a)}</span>`:""}
    </div>
  `}const Kt=[{id:"sun",hi:"सूर्य",short:"सू"},{id:"moon",hi:"चंद्र",short:"चं"},{id:"mars",hi:"मंगल",short:"मं"},{id:"mercury",hi:"बुध",short:"बु"},{id:"jupiter",hi:"गुरु",short:"गु"},{id:"venus",hi:"शुक्र",short:"शु"},{id:"saturn",hi:"शनि",short:"श"}],Ge={sun:["moon","mars","jupiter"],moon:["sun","mercury"],mars:["sun","moon","jupiter"],mercury:["sun","venus"],jupiter:["sun","moon","mars"],venus:["mercury","saturn"],saturn:["mercury","venus"]},Ue={sun:["venus","saturn"],moon:[],mars:["mercury"],mercury:["moon"],jupiter:["mercury","venus"],venus:["sun","moon"],saturn:["sun","moon","mars"]};function _e(e){const s={},a={सूर्य:"sun",चंद्र:"moon",चन्द्र:"moon",मंगल:"mars",बुध:"mercury",गुरु:"jupiter",बृहस्पति:"jupiter",शुक्र:"venus",शनि:"saturn"};for(const l of e.planets){const c=Object.keys(a).find(u=>l.hindiName.includes(u));c&&(s[a[c]]=l.rashiNumber)}return Kt.map(l=>{const c=Kt.map(u=>{if(l.id===u.id)return{label:"स्वयं",color:t.inkMuted,bg:"#F1ECE0"};const n=Ge[l.id].includes(u.id)?1:Ue[l.id].includes(u.id)?-1:0,r=s[l.id]||1,d=((s[u.id]||1)-r+12)%12+1,p=[2,3,4,10,11,12].includes(d),m=n+(p?1:-1);return m>=2?{label:"अति मित्र",color:"#065F46",bg:"#D1FAE5"}:m===1?{label:"मित्र",color:"#047857",bg:"#ECFDF5"}:m===0?{label:"सम",color:"#92400E",bg:"#FEF3C7"}:m===-1?{label:"शत्रु",color:"#B45309",bg:"#FFEDD5"}:{label:"अति शत्रु",color:"#991B1B",bg:"#FEE2E2"}});return{grahaHi:l.hi,cells:c}})}function Oe(e){const s=e.phase1Astronomy?.spaceTime.year||parseInt((e.input.dob||"1995").slice(0,4),10)||1995,a=e.panchang.moonRashiNumber||1,c=e.planets.find(E=>E.hindiName.includes("शनि"))?.rashiNumber||1,u=(a+10)%12+1,n=a,r=a%12+1,h=E=>Mt[E-1]?.nameHi||String(E),d=29.457/12,p=(u-c+12)%12;let m=Math.round(s+p*d);m-s>27&&(m-=29);const g=[],k=["प्रथम आवर्तन","द्वितीय आवर्तन","तृतीय आवर्तन"],H=[{name:"उदय चरण (प्रथम ढाई वर्ष)",rashi:u,guidance:"व्यय नियंत्रण, नई जिम्मेदारियाँ, यात्राएँ व आधार-निर्माण का समय।"},{name:"शिखर चरण (मध्य ढाई वर्ष)",rashi:n,guidance:"परिश्रम की परीक्षा, आत्म-अनुशासन, धैर्य व मानसिक दृढ़ता का काल।"},{name:"अस्त चरण (अंतिम ढाई वर्ष)",rashi:r,guidance:"धीरे-धीरे राहत, संचित परिश्रम का स्थायी फल व आर्थिक सुधार।"}];for(let E=0;E<3;E++){const z=Math.round(m+E*29.46);H.forEach((N,F)=>{const $=Math.round(z+F*d),v=Math.round(z+(F+1)*d);if(v<s)return;const C=Math.max(s,$),S=Math.max(0,C-s),x=Math.max(S+1,v-s);S>92||g.push({cycleLabel:k[E],phaseLabel:N.name,saturnRashi:`${h(N.rashi)} (${N.rashi})`,approxPeriod:`${C} – ${v}`,ageSpan:`${S}–${x} वर्ष`,guidanceHi:N.guidance})})}return g}const We={सूर्य:"प्रशासनिक सम्मान, पिता-सहयोग, आत्मविश्वास व पदोन्नति के संकेत।",चंद्र:"मानसिक संतुलन, पारिवारिक सुख, जनसंपर्क एवं यात्रा लाभ।",मंगल:"साहस, भूमि-भवन कार्य, तकनीकी प्रगति व ऊर्जावान निर्णय।",राहु:"नवीन अवसर, तकनीकी/विदेश विस्तार व सतर्क विवेक की आवश्यकता।",गुरु:"ज्ञान-वृद्धि, शुभ मांगलिक कार्य, संतान सुख व आर्थिक स्थिरता।",शनि:"धैर्यपूर्वक कर्म, अनुशासन, दीर्घकालिक स्थायी निर्माण व न्याय।",बुध:"बौद्धिक विकास, व्यवसाय-संवाद, शिक्षा व लेखन-लाभ का काल।",केतु:"आध्यात्मिक साधना, शोध, एकांत चिंतन व गूढ़ ज्ञान की प्राप्ति।",शुक्र:"सुख-सुविधा, कला, वैवाहिक सौहार्द, वाहन एवं समृद्धि के योग।"},Ve={सूर्य:"आत्मा, मान-सम्मान, पिता, नेतृत्व क्षमता और राजकीय कार्यों का कारक ग्रह।",चंद्र:"मन, माता, भावनात्मक स्थिरता, जल तत्व, जनसंपर्क और मानसिक सुख का कारक।",मंगल:"साहस, पराक्रम, भूमि-संपत्ति, तकनीकी दक्षता और भ्रातृ-सुख का कारक ग्रह।",बुध:"बुद्धि, वाणी, व्यापार, गणित, संवाद कौशल और तार्किक निर्णय शक्ति का कारक।",गुरु:"ज्ञान, धर्म, संतान, भाग्य, धन-वृद्धि और गुरु-कृपा का परम शुभ कारक ग्रह।",शुक्र:"वैवाहिक सुख, कला, सौंदर्य, वाहन, ऐश्वर्य और रचनात्मक समृद्धि का कारक।",शनि:"कर्म, अनुशासन, आयु, न्याय, सेवा भाव और दीर्घकालिक स्थायी सफलता का कारक।",राहु:"नवीन सोच, आधुनिक तकनीक, विदेश यात्रा, शोध और तीव्र महत्वाकांक्षा का कारक।",केतु:"मोक्ष, वैराग्य, सूक्ष्म अंतर्ज्ञान, आध्यात्मिक उन्नति और मंत्र-साधना का कारक।"},qe=[{graha:"सूर्य",mantra:"ॐ घृणि सूर्याय नमः",daan:"गेहूँ, गुड़, ताम्र पात्र, लाल वस्त्र",day:"रविवार"},{graha:"चंद्र",mantra:"ॐ सों सोमाय नमः",daan:"चावल, दूध, मिश्री, श्वेत वस्त्र",day:"सोमवार"},{graha:"मंगल",mantra:"ॐ अं अंगारकाय नमः",daan:"मसूर दाल, गुड़, लाल फल",day:"मंगलवार"},{graha:"बुध",mantra:"ॐ बुं बुधाय नमः",daan:"हरी मूंग, पालक, हरा वस्त्र, पुस्तकें",day:"बुधवार"},{graha:"गुरु",mantra:"ॐ बृं बृहस्पतये नमः",daan:"चना दाल, हल्दी, पीला वस्त्र, धार्मिक ग्रंथ",day:"गुरुवार"},{graha:"शुक्र",mantra:"ॐ शुं शुक्राय नमः",daan:"दही, चावल, खीर, श्वेत मिष्ठान्न",day:"शुक्रवार"},{graha:"शनि",mantra:"ॐ शं शनैश्चराय नमः",daan:"काले तिल, सरसों तेल, काली उड़द, कंबल",day:"शनिवार"},{graha:"राहु",mantra:"ॐ रां राहवे नमः",daan:"सतनाजा, कंबल, पक्षियों को दाना",day:"बुधवार / शनिवार"},{graha:"केतु",mantra:"ॐ केम् केतवे नमः",daan:"तिल, ऊनी वस्त्र, श्वान को भोजन",day:"मंगलवार / शनिवार"}],re={sun:"सू",moon:"चं",mars:"मं",mercury:"बु",jupiter:"गु",venus:"शु",saturn:"श",rahu:"रा",ketu:"के"};function le(e){return lt(e||"").replace(/[º˚]/g,"°").replace(/[′’`]/g,"'").replace(/[″”]/g,'"').replace(/\s+/g," ").trim()}function Xt(e){return lt(e).normalize("NFC").replace(/ॐ\s*ह्रां\s*ह्रीं\s*ह्रौं\s*सः\s*सूर्याय\s*नमः/g,"ॐ घृणि सूर्याय नमः").replace(/ॐ\s*श्रां\s*श्रीं\s*श्रौं\s*सः\s*च[ंन][्]?द्रमसे\s*नमः/g,"ॐ सों सोमाय नमः").replace(/ॐ\s*क्रां\s*क्रीं\s*क्रौं\s*सः\s*भौमाय\s*नमः/g,"ॐ अं अंगारकाय नमः").replace(/ॐ\s*ब्रां\s*ब्रीं\s*ब्रौं\s*सः\s*बुधाय\s*नमः/g,"ॐ बुं बुधाय नमः").replace(/ॐ\s*ग्रां\s*ग्रीं\s*ग्रौं\s*सः\s*गुरवे\s*नमः/g,"ॐ बृं बृहस्पतये नमः").replace(/ॐ\s*द्रां\s*द्रीं\s*द्रौं\s*सः\s*शुक्राय\s*नमः/g,"ॐ शुं शुक्राय नमः").replace(/ॐ\s*प्रां\s*प्रीं\s*प्रौं\s*सः\s*शनैश्चराय\s*नमः/g,"ॐ शं शनैश्चराय नमः").replace(/ॐ\s*भ्रां\s*भ्रीं\s*भ्रौं\s*सः\s*राहवे\s*नमः/g,"ॐ रां राहवे नमः").replace(/ॐ\s*स्?त्रां\s*स्?त्रीं\s*स्?त्रौं\s*सः\s*केतवे\s*नमः/g,"ॐ केम् केतवे नमः").replace(/ॐ\s*स्रां\s*स्रीं\s*स्रौं\s*सः\s*केतवे\s*नमः/g,"ॐ केम् केतवे नमः").replace(/ॐ\s*कें\s*केतवे\s*नमः/g,"ॐ केम् केतवे नमः").normalize("NFC")}const Ye={जनवरी:1,फरवरी:2,मार्च:3,अप्रैल:4,मई:5,जून:6,जुलाई:7,अगस्त:8,सितंबर:9,सितम्बर:9,अक्टूबर:10,अक्तूबर:10,नवंबर:11,नवम्बर:11,दिसंबर:12,दिसम्बर:12};function de(e){const s=String(e??"").trim(),a=s.match(/^(\d{1,2})\s+([^\s\d]+)\s+(\d{4})$/u);if(a){const c=parseInt(a[1],10),u=Ye[a[2]]||1;return parseInt(a[3],10)*1e4+u*100+c}const l=s.match(/^(\d{4})[-/](\d{1,2})[-/](\d{1,2})$/);return l?parseInt(l[1],10)*1e4+parseInt(l[2],10)*100+parseInt(l[3],10):null}function Qt(e,s,a,l){let c=String(e??"").normalize("NFC").trim(),u=String(s??"").normalize("NFC").trim();if(typeof a=="number"&&typeof l=="number"&&Number.isFinite(a)&&Number.isFinite(l)&&a>l){const n=c;c=u,u=n}else{const n=de(c),r=de(u);if(n!==null&&r!==null&&n>r){const h=c;c=u,u=h}}return{startLabel:c,endLabel:u}}function Rt(e){return i(String(e??"").normalize("NFC")).replace(/(\(\s*\d{1,3}°\s*\d{1,2}'(?:\s*\d{1,2}&quot;)?\s*\)|\b\d{1,3}°\s*\d{1,2}'(?:\s*\d{1,2}&quot;)?)/g,`<span class="pj-h2c-no-lift" style="font-family: 'Segoe UI', 'Liberation Sans', 'Helvetica Neue', Arial, sans-serif; font-variant-numeric: tabular-nums; font-weight: 700; direction: ltr; unicode-bidi: isolate; white-space: nowrap;">$1</span>`).replace(/भाव\s+(\d{1,2})\s+व\s+(\d{1,2})/gu,`<span class="pj-h2c-no-lift" style="display: inline-block; white-space: nowrap; direction: ltr; unicode-bidi: isolate;"><span style="display: inline-block; font-family: ${U}; font-weight: 700;">भाव</span><span style="display: inline-block; margin-left: 2.5px; font-family: 'Segoe UI', 'Liberation Sans', 'Helvetica Neue', Arial, sans-serif; font-variant-numeric: tabular-nums; font-weight: 700;">$1</span><span style="display: inline-block; margin: 0 3px; font-family: ${U}; font-weight: 700;">व</span><span style="display: inline-block; font-family: 'Segoe UI', 'Liberation Sans', 'Helvetica Neue', Arial, sans-serif; font-variant-numeric: tabular-nums; font-weight: 700;">$2</span></span>`)}function Gt(e,s,a,l=!1){const{cleanMode:c,chartStyle:u}=a,n=s.appLogoDataUrl,r=`${e.input.name} • जन्म: ${e.input.formattedDob}, ${e.input.formattedTime} • ${e.input.birthPlace}`,h=e.mahadashas.find(o=>o.isCurrent)||e.mahadashas[0],d=e.phase1Astronomy,p=e.shadbalaBhava,m=e.phase2Jyotish,g=[],k=new He(`book|${e.input.dob}|${e.panchang.lagnaNumber}|${e.panchang.moonRashiNumber}`),H={esc:i,buildBookPageHeader:Z,buildSectionTitleBar:G,personHeader:r,appLogo:n},E=qt(e.lagnaChart,u,258,`लग्न (${e.panchang.lagnaName})`,l,e.panchang.lagnaDegInt),z=`
    <div style="width: 100%; height: 100%; box-sizing: border-box; display: flex; flex-direction: column; justify-content: space-between; background: ${t.warmIvory}; border: 3.5px solid ${t.templeGold}; border-radius: 14px; padding: 14px 16px; position: relative; box-shadow: inset 0 0 0 2px #FFFDF8, inset 0 0 0 3.5px rgba(255, 111, 0, 0.35);">
      <!-- Top Cosmic Deep Navy Royal Masthead with Centered Real App Logo -->
      <div style="background: linear-gradient(135deg, ${t.cosmicNavy} 0%, #162440 68%, #2C1608 100%); border: 2px solid ${t.templeGold}; border-radius: 12px; padding: 11px 16px 13px 16px; text-align: center; color: ${t.warmIvory};">
        <div style="display: block; font-size: 10px; font-weight: 800; color: ${t.templeGold}; letter-spacing: 0; line-height: 1.25; padding-top: 2px; padding-bottom: 4px;">
          ॥ श्री गणेशाय नमः ॥ &nbsp;•&nbsp; ॥ सर्वे भवन्तु सुखिनः ॥
        </div>
        <div style="display: table; margin: 7px auto 0 auto;">
          <div style="display: table-cell; vertical-align: middle; padding-right: 14px;">
            ${Lt(58,n,2.8)}
          </div>
          <div style="display: table-cell; vertical-align: middle; text-align: left;">
            <div style="display: block; font-size: 20px; font-weight: 900; color: #FDE68A; letter-spacing: 0; line-height: 1.3; padding-bottom: 2px;">पण्डित जी ऑनलाइन</div>
            <div style="display: block; font-size: 9.2px; font-weight: 800; color: #F8FAFC; letter-spacing: 0; word-spacing: 2px; margin-top: 7px; line-height: 1.35;"><span style="display: inline-block; margin-right: 4px;">PANDIT</span><span style="display: inline-block; margin-right: 4px;">JI</span><span style="display: inline-block; margin-right: 5px;">ONLINE</span>— प्रामाणिक वैदिक ज्योतिष महा-ग्रंथ</div>
          </div>
        </div>
        <div style="margin-top: 10px; text-align: center;">
          <span class="book-pill" style="display: inline-flex; align-items: center; justify-content: center; line-height: 1.15; padding: 4px 16px; vertical-align: middle; box-sizing: border-box; text-align: center; background: rgba(255, 111, 0, 0.24); border: 1.2px solid ${t.templeGold}; color: #FDE68A; font-size: 8.8px; font-weight: 800; border-radius: 999px;">
            <span style="${Nt}">सम्पूर्ण बृहत् जन्म कुंडली पुस्तक • दृक् गणित लाहिड़ी अयनांश</span>
          </span>
        </div>
      </div>

      <!-- Native Name & Birth Metadata Card -->
      <div style="text-align: center; margin: 8px 0 6px 0;">
        <div style="display: block; font-size: 9.5px; font-weight: 800; color: ${t.saffronDeep}; letter-spacing: 0; line-height: 1.25;">
          यजमान / जातक का शुभ नाम
        </div>
        <div style="display: block; font-size: 27px; font-weight: 900; color: ${t.cosmicNavy}; line-height: 1.25; margin-top: 2px;">
          ${i(e.input.name)}
        </div>
        <div style="width: 170px; height: 2.8px; background: linear-gradient(90deg, transparent, ${t.saffron}, ${t.templeGold}, transparent); margin: 5px auto 0 auto;"></div>
      </div>

      <div class="book-cover-meta-card" style="background: ${t.pureIvory}; border: 1.6px solid ${t.templeGold}; border-radius: 10px; padding: 9px 14px; display: grid; grid-template-columns: 1fr 1fr; gap: 6px 14px; font-size: 9.2px; color: ${t.inkPrimary}; line-height: 1.35;">
        <div><b style="color:${t.saffronDeep};">जन्म तिथि:</b> ${i(e.input.formattedDob)} (~${e.input.ageYears} वर्ष)</div>
        <div><b style="color:${t.saffronDeep};">जन्म समय:</b> ${i(e.input.formattedTime)}</div>
        <div><b style="color:${t.saffronDeep};">जन्म स्थान:</b> ${i(e.input.birthPlace)}</div>
        <div><b style="color:${t.saffronDeep};">टाइमज़ोन:</b> ${i(e.input.timeZone||"Asia/Kolkata")} (${i(e.input.utcOffsetFormatted||"UTC+05:30")})${e.input.isDstActive?" • DST":""}</div>
        <div><b style="color:${t.saffronDeep};">अक्षांश / देशांतर:</b> ${e.input.latitude.toFixed(3)}° N, ${e.input.longitude.toFixed(3)}° E</div>
        <div><b style="color:${t.saffronDeep};">अयनांश (लाहिड़ी):</b> ${i(e.input.ayanamsaDMS)} • True Node</div>
      </div>

      <!-- Large Main Lagna D-1 Chart Preview (Exact same block card pattern as Page 4 B1) -->
      <div class="book-chart-box" style="display: block; flex-shrink: 0; width: 288px; margin: 6px auto; background: ${t.pureIvory}; border: 1.8px solid ${t.templeGold}; border-radius: 11px; padding: 8px 12px 10px 12px; text-align: center; box-sizing: border-box;">
        <div style="display: block; font-size: 10.4px; font-weight: 900; color: ${t.cosmicNavy}; padding-top: 3px; padding-bottom: 5px; line-height: 1.28;">
          मुख्य जन्म लग्न कुंडली — ${i(e.panchang.lagnaName)} लग्न (D-1)
        </div>
        ${E}
      </div>

      <!-- 4 Core Identity Pillars (Exact optical vertical centering) -->
      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; margin-bottom: 6px;">
        <div class="book-cover-pillar-card" style="display: flex; flex-direction: column; justify-content: center; background: ${t.cosmicNavy}; color: ${t.warmIvory}; border: 1.2px solid ${t.templeGold}; border-radius: 8px; padding: 6.5px 8px; text-align: center; box-sizing: border-box;">
          <div style="display: block; font-size: 7.8px; color: #FCD34D; font-weight: 700; line-height: 1.28;">जन्म लग्न</div>
          <div style="display: block; font-size: 11px; font-weight: 800; margin-top: 3px; line-height: 1.28;">${i(e.panchang.lagnaName)}</div>
          <div style="display: block; font-size: 7.6px; color: #CBD5E1; margin-top: 3px; line-height: 1.28;">स्वामी: ${i(e.panchang.lagnaLord)}</div>
        </div>
        <div class="book-cover-pillar-card" style="display: flex; flex-direction: column; justify-content: center; background: ${t.cosmicNavy}; color: ${t.warmIvory}; border: 1.2px solid ${t.templeGold}; border-radius: 8px; padding: 6.5px 8px; text-align: center; box-sizing: border-box;">
          <div style="display: block; font-size: 7.8px; color: #FCD34D; font-weight: 700; line-height: 1.28;">चंद्र राशि</div>
          <div style="display: block; font-size: 11px; font-weight: 800; margin-top: 3px; line-height: 1.28;">${i(e.panchang.moonRashiName)}</div>
          <div style="display: block; font-size: 7.6px; color: #CBD5E1; margin-top: 3px; line-height: 1.28;">स्वामी: ${i(e.panchang.moonRashiLord)}</div>
        </div>
        <div class="book-cover-pillar-card" style="display: flex; flex-direction: column; justify-content: center; background: ${t.cosmicNavy}; color: ${t.warmIvory}; border: 1.2px solid ${t.templeGold}; border-radius: 8px; padding: 6.5px 8px; text-align: center; box-sizing: border-box;">
          <div style="display: block; font-size: 7.8px; color: #FCD34D; font-weight: 700; line-height: 1.28;">जन्म नक्षत्र</div>
          <div style="display: block; font-size: 11px; font-weight: 800; margin-top: 3px; line-height: 1.28;">${i(e.panchang.nakshatraName)}</div>
          <div style="display: block; font-size: 7.6px; color: #6EE7B7; margin-top: 3px; line-height: 1.28;">चरण ${e.panchang.nakshatraPada} • ${i(e.panchang.nakshatraLord)}</div>
        </div>
        <div class="book-cover-pillar-card" style="display: flex; flex-direction: column; justify-content: center; background: ${t.cosmicNavy}; color: ${t.warmIvory}; border: 1.2px solid ${t.templeGold}; border-radius: 8px; padding: 6.5px 8px; text-align: center; box-sizing: border-box;">
          <div style="display: block; font-size: 7.8px; color: #FCD34D; font-weight: 700; line-height: 1.28;">वर्तमान महादशा</div>
          <div style="display: block; font-size: 11px; font-weight: 800; margin-top: 3px; line-height: 1.28;">${i(h?.planet||"-")}</div>
          <div style="display: block; font-size: 7.6px; color: #6EE7B7; margin-top: 3px; line-height: 1.28;">${i(h?.startYear)}–${i(h?.endYear)}</div>
        </div>
      </div>

      <!-- Cover Bottom Brand Strip + Real QR Code (Zero Overlap) -->
      <div style="background: ${t.templeGoldSoft}; border: 1.6px solid ${t.templeGold}; border-radius: 10px; padding: 9px 13px; display: flex; align-items: center; justify-content: space-between; gap: 12px;">
        <div style="flex: 1; font-size: 8.8px; color: ${t.inkPrimary}; line-height: 1.5;">
          <div style="font-weight: 900; color: ${t.cosmicNavy}; font-size: 10.5px;">
            मार्गदर्शक: ${i(xt.founderHi)} (वैदिक ज्योतिषाचार्य एवं कर्मकाण्ड विशेषज्ञ)
          </div>
          <div>${i(xt.locationHi)}</div>
          <div>सम्पर्क / WhatsApp: <b>${i(xt.phoneDisplay)}</b> &nbsp;|&nbsp; वेबसाइट: ${At(t.saffronDeep)}</div>
        </div>
        ${s.websiteQrDataUrl?`<div style="background:#FFFFFF; border: 1.6px solid ${t.templeGold}; border-radius: 8px; padding: 4px; text-align:center; flex-shrink:0;">
                 <img src="${s.websiteQrDataUrl}" alt="Pandit Ji Online QR" style="width: 60px; height: 60px; display:block;" />
                 <div style="font-size: 6.8px; font-weight: 800; color: ${t.cosmicNavy}; margin-top: 2px;">स्कैन करें</div>
               </div>`:""}
      </div>
    </div>
  `;g.push({sectionCode:"COVER",sectionTag:"मुख्य आवरण (Cover)",isCover:!0,html:z});const N=(o,b)=>{const A=String(o||"").trim();if(!A)return"—";const w=new RegExp(`(?:\\s*${b})+$`,"u");return`${A.replace(w,"").trim()} ${b}`.trim()},F=[["वार (सूर्योदयात्)",`${e.panchang.vaar} (स्वामी: ${e.panchang.vaarLord})`,"जन्म लग्न",`${e.panchang.lagnaName} (${e.panchang.lagnaDegreeDMS})`],["तिथि एवं पक्ष",`${e.panchang.tithi} • ${e.panchang.paksha}`,"लग्नेश (Lagna Lord)",e.panchang.lagnaLord],["नक्षत्र एवं चरण",`${e.panchang.nakshatraName} (चरण ${e.panchang.nakshatraPada})`,"चंद्र राशि एवं स्वामी",`${e.panchang.moonRashiName} (${e.panchang.moonRashiLord})`],["नक्षत्र स्वामी",e.panchang.nakshatraLord,"सूर्य राशि एवं स्वामी",`${e.panchang.sunRashiName} (${e.panchang.sunRashiLord})`],["योग एवं करण",`${N(e.panchang.yoga,"योग")} • ${N(e.panchang.karana,"करण")}`,"प्रचलित नाम राशि",e.panchang.naamRashi],["सूर्योदय / सूर्यास्त",d?`${d.birthPanchang.sunriseHi} / ${d.birthPanchang.sunsetHi}`:"स्थानीय सूर्योदय आधारित","टाइमज़ोन / UTC",`${e.input.timeZone||"Asia/Kolkata"} (${e.input.utcOffsetFormatted||"UTC+05:30"})`],["गण एवं नाड़ी",`${N(e.panchang.gana,"गण")} • ${N(e.panchang.nadi,"नाड़ी")}`,"योनि एवं वर्ण",`${e.panchang.yoni} • ${e.panchang.varna}`],["वश्य एवं तत्व",`${e.panchang.vashya} • ${e.panchang.tatva}`,"पाया (Paya)",e.panchang.paya],["इष्टदेव",e.lucky.ishtaDevta,"शुभ अंक व वार",`${e.lucky.luckyNumbers} • ${e.lucky.luckyDays}`],["शुभ रंग एवं दिशा",`${e.lucky.luckyColors} • ${e.lucky.luckyDirection}`,"अयनांश (लाहिड़ी)",`${e.input.ayanamsaDMS} • True Node`]],$=e.input.warningsHi&&e.input.warningsHi.length>0?`<div class="book-card" style="margin-top: 10px; background: #FEF2F2; border: 1.5px solid #F59E0B; border-radius: 8px; padding: 9px 12px; font-size: 8.6px; color: #7C2D12; line-height: 1.55;">
           <b style="color:#B45309;">⚠ जन्म-समय / टाइमज़ोन / संधि सूचना:</b>
           ${e.input.warningsHi.map(o=>`<div style="margin-top:3px;">• ${i(o)}</div>`).join("")}
         </div>`:`<div class="book-card" style="margin-top: 10px; background: ${t.emeraldSoft}; border: 1.2px solid #10B981; border-radius: 8px; padding: 9px 12px; font-size: 8.6px; color: #065F46; line-height: 1.55;">
           <b>✓ सटीक खगोलीय सत्यापन:</b> यह जन्मपत्री ऐतिहासिक IANA टाइमज़ोन (${i(e.input.timeZone||"Asia/Kolkata")}), दृक् गणित लाहिड़ी चित्रा पक्ष अयनांश (${i(e.input.ayanamsaDMS)}) तथा True Node मानक पर आधारित है।
         </div>`,v=`
    ${Z("खण्ड A1 : जन्म पंचांग एवं अवकहड़ा चक्र",r,n)}
    ${G("A1","जन्म पंचांग, खगोलीय विवरण एवं अवकहड़ा चक्र (Birth Panchang & Avakahada)","दृक् गणित सिंक्रनाइज़्ड")}
    <table class="book-table" style="font-size: 8.6px; width: 100%; box-sizing: border-box; table-layout: fixed;">
      <thead>
        <tr>
          <th style="width: 23%; padding: 6px 8px; line-height: 1.38;">पंचांग अंग</th>
          <th style="width: 27%; padding: 6px 8px; line-height: 1.38;">विवरण</th>
          <th style="width: 23%; padding: 6px 8px; line-height: 1.38;">अवकहड़ा अंग</th>
          <th style="width: 27%; padding: 6px 8px; line-height: 1.38;">विवरण</th>
        </tr>
      </thead>
      <tbody>
        ${F.map((o,b)=>`
            <tr style="background:${b%2===0?"#FFFDF8":"#FEF6E4"};">
              <td style="font-weight:800; color:${t.saffronDeep}; padding: 6.5px 8px; line-height: 1.42; vertical-align: middle; overflow: visible;">${i(o[0])}</td>
              <td style="font-weight:700; padding: 6.5px 8px; line-height: 1.42; vertical-align: middle; overflow: visible;">${i(o[1])}</td>
              <td style="font-weight:800; color:${t.saffronDeep}; padding: 6.5px 8px; line-height: 1.42; vertical-align: middle; overflow: visible;">${i(o[2])}</td>
              <td style="font-weight:700; padding: 6.5px 8px; line-height: 1.42; vertical-align: middle; overflow: visible;">${i(o[3])}</td>
            </tr>`).join("")}
      </tbody>
    </table>
    ${$}
    ${Yt("जन्म पंचांग और अवकहड़ा चक्र का महत्व","वैदिक ज्योतिष में जन्म तिथि, वार, नक्षत्र, योग और करण व्यक्ति के मूल स्वभाव तथा जीवन की लय दर्शाते हैं। सूर्योदय से पूर्व जन्म होने पर वैदिक वार पूर्व दिवस का माना जाता है। अवकहड़ा चक्र (गण, नाड़ी, योनि, वर्ण, वश्य, पाया) विवाह गुण मिलान और नामाक्षर चयन का आधार होता है।","विवाह मिलान एवं दशा गणना में जन्म के समय चंद्रमा की राशि (जन्म राशि) और नक्षत्र चरण को सदैव प्रधान माना जाता है।")}
  `;g.push({sectionCode:"A",sectionTag:"खण्ड A : जन्म पंचांग व अवकहड़ा",html:v}),g.push(Ce(e,H));const C=u==="south"?Ot.south.summary.hi:Ot.north.summary.hi,S=`
    ${Z("खण्ड A2 : सरल कुंडली मार्गदर्शिका (1–12 राशि बनाम भाव)",r,n)}
    ${G("A2","कुंडली कैसे पढ़ें? — 1–12 राशि बनाम भाव एवं ग्रह संकेत कुंजी","सामान्य जन के लिए सरल गाइड")}
    <div class="book-card" style="background: ${t.pureIvory}; border: 1.5px solid ${t.templeGold}; border-radius: 10px; padding: 12px 14px; font-size: 9px; line-height: 1.58; color: ${t.inkPrimary};">
      <div style="font-weight: 900; color: ${t.cosmicNavy}; font-size: 10.5px; margin-bottom: 4px;">
        1) ${i(Ot.heading.hi)}
      </div>
      <div>${i(C)}</div>

      <div style="margin-top: 12px; font-weight: 800; color: ${t.saffronDeep}; font-size: 9.5px;">
        2) 1 से 12 राशि अंक सूची एवं उनके स्वामी ग्रह (12 Rashis & Lords):
      </div>
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 7px; margin-top: 6px;">
        ${Mt.map(o=>`<div style="background:${t.warmIvory}; border:1px solid ${t.borderMuted}; border-radius:6px; padding:6px 9px; font-size:8.6px;">
               <b style="color:${t.saffronDeep};">${o.number}. ${i(o.nameHi)}</b>
               <span style="color:${t.inkMuted};"> (${i(o.nameEn)})</span>
               <div style="font-size:8px; color:${t.cosmicNavy}; margin-top:1px;">स्वामी: <b>${i(o.lordHi)}</b></div>
             </div>`).join("")}
      </div>

      <div style="margin-top: 12px; font-weight: 800; color: ${t.saffronDeep}; font-size: 9.5px;">
        3) चार्ट में प्रयुक्त ग्रह संक्षिप्ताक्षर एवं विशेष चिह्न (Planet Legend):
      </div>
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 7px; margin-top: 6px;">
        ${Fe.map(o=>`<div class="book-legend-item" style="background:${t.warmIvory}; border:1px solid ${t.borderMuted}; border-radius:6px; padding:6px 9px; font-size:8.6px; line-height:1.65; color:${t.inkPrimary}; overflow:visible; white-space:nowrap;">
               <span style="font-weight:700; color:${t.cosmicNavy};">${i(o.shortHi.normalize("NFC"))} / ${i(o.shortEn)}</span> = ${i(o.fullHi.normalize("NFC"))} (${i(o.fullEn)})
             </div>`).join("")}
      </div>
      <div style="display: block; margin-top: 10px; padding: 4px 10px 8px 10px; background: ${t.emeraldSoft}; border: 1px solid #10B981; border-radius: 7px; font-size: 8.6px; color: #065F46; font-weight: 700; line-height: 1.3;">
        विशेष संकेत: &nbsp;<b>*</b> = वक्री ग्रह (Retrograde) &nbsp;|&nbsp; <b>^</b> = अस्त ग्रह (Combust) &nbsp;|&nbsp; <b>°</b> = राशि के भीतर अंश (0° से 30°, जैसे 26° 04' 59") &nbsp;|&nbsp; <b>1–12 अंक</b> = राशि संख्या (भाव नहीं)
      </div>

      <div style="margin-top: 12px; font-weight: 800; color: ${t.cosmicNavy}; font-size: 9.5px;">
        4) अपनी कुंडली समझने के 4 सरल नियम:
      </div>
      <div style="margin-top: 5px; display: grid; grid-template-columns: 1fr 1fr; gap: 7px; font-size: 8.5px;">
        <div style="background:#FFFDF8; border:1px solid ${t.borderMuted}; border-radius:6px; padding:7px 9px;"><b>• केंद्र भाव (1, 4, 7, 10):</b> जीवन के चार स्तंभ — शरीर, सुख, विवाह व कर्म।</div>
        <div style="background:#FFFDF8; border:1px solid ${t.borderMuted}; border-radius:6px; padding:7px 9px;"><b>• त्रिकोण भाव (1, 5, 9):</b> सबसे शुभ लक्ष्मी स्थान — बुद्धि, संतान व भाग्य।</div>
        <div style="background:#FFFDF8; border:1px solid ${t.borderMuted}; border-radius:6px; padding:7px 9px;"><b>• उपचय भाव (3, 6, 10, 11):</b> आयु के साथ पराक्रम, विजय व आय बढ़ाने वाले भाव।</div>
        <div style="background:#FFFDF8; border:1px solid ${t.borderMuted}; border-radius:6px; padding:7px 9px;"><b>• दशा + गोचर समन्वय:</b> जन्म कुंडली क्षमता बताती है, दशा-गोचर समय निर्धारित करते हैं।</div>
      </div>
    </div>
  `;g.push({sectionCode:"A2",sectionTag:"खण्ड A : सरल कुंडली गाइड",html:S});const x=(o,b,A,w,f)=>`
    <div class="book-chart-box" style="background: ${t.pureIvory}; border: 1.6px solid ${t.templeGold}; border-radius: 11px; padding: 10px 12px; text-align: center; overflow: visible;">
      <div style="font-size: 10.2px; font-weight: 900; color: ${t.cosmicNavy}; margin-bottom: 7px; padding-top: 2px; padding-bottom: 2px; line-height: 1.44; overflow: visible;">${i(o)}</div>
      ${qt(b,u,w,o,l,f)}
      <div style="margin-top: 8px; padding-top: 7px; border-top: 1px dashed ${t.borderMuted}; font-size: 8.4px; color: ${t.inkPrimary}; line-height: 1.48; text-align: left;">
        ${i(A)}
      </div>
    </div>
  `,I=`
    ${Z("खण्ड B1 : जन्म लग्न (D-1) एवं नवांश कुंडली (D-9)",r,n)}
    ${G("B1","प्रमुख आधार चक्र — जन्म लग्न कुंडली (D-1) एवं नवांश कुंडली (D-9)",u==="south"?"दक्षिण भारतीय प्रारूप":"उत्तर भारतीय प्रारूप")}
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-top: 8px;">
      ${x(`जन्म लग्न कुंडली (D-1) — ${e.panchang.lagnaName}`,e.lagnaChart,Et.lagna_d1.shortPurpose.hi,290,e.panchang.lagnaDegInt)}
      ${x(`नवांश कुंडली (D-9) — ${d?.shodashavarga.find(o=>o.spec.id==="D9")?.ascendantRashiNameHi||e.navamsaChart[0]?.rashiName||""}`,e.navamsaChart,Et.navamsha_d9.shortPurpose.hi,290)}
    </div>
    <div style="display: block; margin-top: 12px; padding: 4px 12px 8px 12px; background: ${t.templeGoldSoft}; border: 1.2px solid ${t.templeGold}; border-radius: 8px; font-size: 8.4px; color: ${t.cosmicNavy}; text-align: center; font-weight: 700; line-height: 1.25;">
      ग्रह कुंजी: सू=सूर्य • चं=चंद्र • मं=मंगल • बु=बुध • गु=गुरु • शु=शुक्र • श=शनि • रा=राहु • के=केतु &nbsp;|&nbsp; * वक्री &nbsp;|&nbsp; ^ अस्त &nbsp;|&nbsp; 1–12 अंक = राशि संख्या
    </div>
    ${Yt("लग्न (D-1) और नवांश (D-9) साथ क्यों देखे जाते हैं?","जन्म लग्न कुंडली (D-1) जीवन रूपी वृक्ष का तना और मूल संरचना है, जबकि नवांश कुंडली (D-9) उस वृक्ष का फल है। यदि कोई ग्रह D-1 में सामान्य दिखे परंतु D-9 में स्वराशि, उच्च या मित्र राशि (अथवा वर्गोत्तम — दोनों में एक ही राशि) में हो, तो वह जीवन के मध्य व उत्तरार्ध में अत्यंत शुभ फल देता है।","वैवाहिक जीवन, जीवनसाथी के स्वभाव और ग्रहों के वास्तविक आंतरिक बल के लिए नवांश कुंडली (D-9) का विश्लेषण अनिवार्य माना गया है।")}
  `;g.push({sectionCode:"B",sectionTag:"खण्ड B : लग्न व नवांश (D-1, D-9)",html:I});const B=`
    ${Z("खण्ड B2 : चंद्र, सूर्य एवं श्रीपति भाव चलित कुंडली",r,n)}
    ${G("B2","सुदर्शन एवं भाव चलित चक्र — चंद्र, सूर्य व वास्तविक MC आधारित श्रीपति चलित","संपूर्ण त्रि-दृष्टि विश्लेषण")}
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 6px;">
      ${x(`चंद्र कुंडली (Chandra) — ${e.panchang.moonRashiName}`,e.chandraChart,Et.chandra.shortPurpose.hi,228)}
      ${x(`सूर्य कुंडली (Surya) — ${e.panchang.sunRashiName}`,e.suryaChart||e.lagnaChart,Et.surya.shortPurpose.hi,228)}
    </div>
    <div style="margin-top: 10px; display: grid; grid-template-columns: 1fr 1.15fr; gap: 12px; align-items: stretch;">
      ${x("श्रीपति भाव चलित कुंडली (Sripati Bhava Chalit)",e.bhavaChalitChart||e.lagnaChart,Et.bhava_chalit.shortPurpose.hi,210,e.panchang.lagnaDegInt)}
      <div class="book-card" style="background: ${t.pureIvory}; border: 1.4px solid ${t.templeGold}; border-radius: 10px; padding: 11px 13px; font-size: 8.6px; line-height: 1.55; color: ${t.inkPrimary}; display: flex; flex-direction: column; justify-content: center;">
        <div style="font-size: 10px; font-weight: 900; color: ${t.cosmicNavy}; border-bottom: 1px solid ${t.borderMuted}; padding-bottom: 5px; margin-bottom: 7px;">
          ✦ इसे कैसे समझें? — तीन चार्ट का समन्वय
        </div>
        <div><b style="color:${t.saffronDeep};">• चंद्र कुंडली:</b> मन, भावना, दैनिक गोचर (राशिफल) और साढ़ेसाती का आधार चंद्र कुंडली है।</div>
        <div style="margin-top:5px;"><b style="color:${t.saffronDeep};">• सूर्य कुंडली:</b> आत्मबल, करियर प्रतिष्ठा, प्रशासनिक योग और पिता के साथ संबंध सूर्य कुंडली से देखे जाते हैं।</div>
        <div style="margin-top:5px;"><b style="color:${t.saffronDeep};">• श्रीपति भाव चलित:</b> वास्तविक Midheaven (MC) से गणना करने पर कुछ ग्रह लग्न चार्ट के बजाय अगले या पिछले भाव का फल दे सकते हैं — यही सूक्ष्म अंतर चलित कुंडली दर्शाती है।</div>
      </div>
    </div>
    ${It("after_charts_b",s,c)}
  `;g.push({sectionCode:"B2",sectionTag:"खण्ड B : चंद्र, सूर्य व चलित",html:B});const P=`
    ${Z("खण्ड C1 : नवग्रह स्पष्ट तालिका (9 Planets Longitude)",r,n)}
    ${G("C1","नवग्रह स्पष्ट तालिका — राशि, अंश-कला-विकला, नक्षत्र-पद, अवस्था एवं चलित भाव","लाहिड़ी अयनांश + True Node")}
    <table class="book-table" style="font-size: 8.4px; width: 100%; table-layout: fixed;">
      <thead>
        <tr>
          <th style="width: 19%;">ग्रह</th>
          <th style="width: 11.5%;">राशि</th>
          <th style="width: 7.5%; text-align:center;">लग्न भाव</th>
          <th style="width: 7.5%; text-align:center;">चलित भाव</th>
          <th style="width: 14%;">अंश (DMS)</th>
          <th style="width: 17.5%;">नक्षत्र (चरण)</th>
          <th style="width: 11%;">अवस्था</th>
          <th style="width: 12%;">गति / स्थिति</th>
        </tr>
      </thead>
      <tbody>
        ${e.planets.map((o,b)=>{const w=d?.planets[b]?.bhavaChalitHouse??o.houseInLagna,f=(o.shortHindi||re[o.id]||"").trim()||re[o.id]||"",D=lt(o.hindiName||"").normalize("NFC");return`
            <tr style="background:${b%2===0?"#FFFDF8":"#FEF6E4"};">
              <td class="pj-h2c-no-lift" style="font-weight:700; font-size: 8.1px; color:${t.cosmicNavy}; padding: 7px 6px; white-space: nowrap; line-height: 1.5;">${i(D)} <span style="white-space: nowrap;">(${i(f)})</span></td>
              <td style="font-weight:700; padding: 7px 6px;">${i(o.rashiName)}</td>
              <td style="text-align:center; font-weight:800; color:${t.saffronDeep};">${o.houseInLagna}</td>
              <td style="text-align:center; font-weight:800; color:${w!==o.houseInLagna?t.crimson:t.emerald};">${w}</td>
              <td class="pj-h2c-no-lift" style="font-family:'Segoe UI', 'Liberation Sans', Arial, sans-serif; font-variant-numeric: tabular-nums; font-weight:700; white-space: nowrap;">${i(le(o.fullDegreeDMS))}</td>
              <td>${i(o.nakshatra)} (चरण ${o.pada})</td>
              <td style="font-weight:700; color:${o.statusBadge==="shubh"?t.emerald:o.statusBadge==="upay"?t.crimson:t.saffronDeep};">${i(o.dignity)}</td>
              <td>${o.id==="rahu"||o.id==="ketu"?"स्वाभाविक गति":`${o.isRetrograde?"वक्री (*) ":""}${o.isCombust?"अस्त (^) ":""}${!o.isRetrograde&&!o.isCombust?"मार्गी":""}`}</td>
            </tr>`}).join("")}
      </tbody>
    </table>
    ${kt("navagraha")}
    <div class="book-card" style="margin-top: 8px; background: ${t.pureIvory}; border: 1.2px solid ${t.templeGold}; border-radius: 8px; padding: 9px 12px; font-size: 8.5px; line-height: 1.52;">
      <b style="color:${t.cosmicNavy};">ग्रह अवस्था संक्षेप:</b>
      0°–6° बाल/मृत (राशि अनुसार), 12°–18° युवा अवस्था (पूर्ण फलदायी), 29°–30° राशि संधि। यदि लग्न भाव और चलित भाव भिन्न हों (लाल रंग), तो ग्रह का भाव-फल चलित भाव के अनुसार भी विचारणीय होता है।
    </div>
  `;g.push({sectionCode:"C1",sectionTag:"खण्ड C : नवग्रह स्पष्ट तालिका",html:P});const j=ye(e),O=_e(e),Q=`
    ${Z("खण्ड C2 : श्रीपति भाव संधि एवं पंचधा मैत्री चक्र",r,n)}
    ${G("C2","श्रीपति द्वादश भाव स्फुट एवं संधि (True MC-Based 12 Bhava Cusps)","आरंभ • मध्य • अंत")}
    <table class="book-table" style="font-size: 7.9px; width: 100%; table-layout: fixed;">
      <thead>
        <tr>
          <th style="width: 22%;">भाव</th>
          <th style="width: 22%;">राशि (स्वामी)</th>
          <th style="width: 18%; white-space: nowrap;">भाव मध्य (Cusp)</th>
          <th style="width: 38%;">भाव संधि विस्तार (आरंभ → अंत)</th>
        </tr>
      </thead>
      <tbody>
        ${j.map((o,b)=>`
            <tr style="background:${b%2===0?"#FFFDF8":"#FEF6E4"};">
              <td style="font-weight:800; color:${t.cosmicNavy}; line-height: 1.44; overflow: visible;">${i(o.bhavaName)}</td>
              <td style="line-height: 1.44; overflow: visible;">${i(o.rashiName)} (${i(o.rashiLord)})</td>
              <td style="font-family:${U}; font-variant-numeric: tabular-nums; font-weight:700; color:${t.emerald}; white-space: nowrap; line-height: 1.48; overflow: visible;">${i(o.madhyaDMS)}</td>
              <td style="font-family:${U}; font-variant-numeric: tabular-nums; white-space: nowrap; direction: ltr; unicode-bidi: isolate; line-height: 1.48; overflow: visible;">${i(o.sandhiStartDMS)} → ${i(o.sandhiEndDMS)}</td>
            </tr>`).join("")}
      </tbody>
    </table>

    ${G("C2b","ग्रह पंचधा मैत्री चक्र (नैसर्गिक + तात्कालिक मैत्री तालिका)","अति मित्र से अति शत्रु")}
    <table class="book-table" style="font-size: 7.9px; text-align:center;">
      <thead>
        <tr>
          <th style="width: 13%; text-align:left;">ग्रह</th>
          ${Kt.map(o=>`<th style="width: 12.4%; text-align:center;">${i(o.hi)}</th>`).join("")}
        </tr>
      </thead>
      <tbody>
        ${O.map(o=>`
            <tr>
              <td style="text-align:left; font-weight:800; color:${t.cosmicNavy}; background:#FEF6E4;">${i(o.grahaHi)}</td>
              ${o.cells.map(b=>`<td style="font-weight:800; color:${b.color}; background:${b.bg};">${i(b.label)}</td>`).join("")}
            </tr>`).join("")}
      </tbody>
    </table>
    ${kt("bhava_sphut")}
  `;g.push({sectionCode:"C2",sectionTag:"खण्ड C : भाव संधि व मैत्री चक्र",html:Q});const K=d?.shodashavarga||[];if(K.length>0){const o=["sun","moon","mars","mercury","jupiter","venus","saturn","rahu","ketu"],b={sun:"सूर्य",moon:"चंद्र",mars:"मंगल",mercury:"बुध",jupiter:"गुरु",venus:"शुक्र",saturn:"शनि",rahu:"राहु",ketu:"केतु"},A=D=>Mt[(D||1)-1]?.nameHi.slice(0,3)||String(D),w=`
      ${Z("खण्ड C3 : सम्पूर्ण 16 षोडशवर्ग सारणी (D1–D60)",r,n)}
      ${G("C3","सम्पूर्ण 16 षोडशवर्ग ग्रह राशि सारणी (All 16 BPHS Shodashavarga D1–D60)","बृहत् पाराशर होरा मानक")}
      <table class="book-table" style="font-size: 7.9px;">
        <thead>
          <tr>
            <th style="width: 15%;">वर्ग कुंडली</th>
            <th style="width: 8%; text-align:center;">लग्न</th>
            ${o.map(D=>`<th style="width: 7.3%; text-align:center;">${b[D]}</th>`).join("")}
            <th style="width: 11.3%; text-align:center;">संवेदनशीलता</th>
          </tr>
        </thead>
        <tbody>
          ${K.map((D,M)=>{const _=D.spec.birthTimeSensitivity==="low"?"स्थिर":D.spec.birthTimeSensitivity==="moderate"?"मध्यम":D.spec.birthTimeSensitivity==="high"?"उच्च":"अति सूक्ष्म";return`
                <tr style="background:${M%2===0?"#FFFDF8":"#FEF6E4"};">
                  <td style="font-weight:800; color:${t.cosmicNavy};">${i(D.spec.id)} ${i(D.spec.nameHi)}</td>
                  <td style="text-align:center; font-weight:800; color:${t.saffronDeep};">${D.ascendantRashiNumber}-${i(A(D.ascendantRashiNumber))}</td>
                  ${o.map(Y=>{const pt=D.planetRashis[Y];return`<td style="text-align:center; font-variant-numeric: tabular-nums; white-space: nowrap;">${pt}-${i(A(pt))}</td>`}).join("")}
                  <td style="text-align:center; font-weight:700; color:${D.spec.birthTimeSensitivity==="critical"?t.crimson:t.inkMuted};">${_}</td>
                </tr>`}).join("")}
        </tbody>
      </table>
      ${kt("navamsha_shodashavarga")}
    `;g.push({sectionCode:"C3",sectionTag:"खण्ड C : 16 षोडशवर्ग सारणी",html:w});const f=[{code:"C4",range:[0,4],title:"षोडशवर्ग चक्र (भाग 1/4) — D-1 लग्न, D-2 होरा, D-3 द्रेष्काण एवं D-4 चतुर्थांश",banner:!1},{code:"C5",range:[4,8],title:"षोडशवर्ग चक्र (भाग 2/4) — D-7 सप्तांश, D-9 नवांश, D-10 दशमांश एवं D-12 द्वादशांश",banner:!1},{code:"C6",range:[8,12],title:"षोडशवर्ग चक्र (भाग 3/4) — D-16 षोडशांश, D-20 विंशांश, D-24 चतुर्विंशांश एवं D-27 सप्तविंशांश",banner:!1},{code:"C7",range:[12,16],title:"षोडशवर्ग चक्र (भाग 4/4) — D-30 त्रिंशांश, D-40 खवेदांश, D-45 अक्षवेदांश एवं D-60 षष्ट्यांश",banner:!0}];for(const D of f){const M=K.slice(D.range[0],D.range[1]);if(M.length===0)continue;const _=D.banner?164:210,Y=M.map(gt=>{const _t=Te(gt.houses),jt=gt.spec.birthTimeSensitivity==="critical"?" • अति समय-संवेदनशील":gt.spec.birthTimeSensitivity==="high"?" • समय-संवेदनशील":"";return`
            <div class="book-chart-box" style="background: ${t.pureIvory}; border: 1.5px solid ${t.templeGold}; border-radius: 10px; padding: 13px 10px 10px 10px; text-align: center; overflow: visible; font-family: ${U};">
              <div style="font-size: 9.0px; font-weight: 800; color: ${t.cosmicNavy}; line-height: 1.56; padding-top: 2px; margin-bottom: 3px; overflow: visible;">
                ${i(gt.spec.id)} — ${i(gt.spec.nameHi)} (${i(gt.ascendantRashiNameHi)})
              </div>
              <div style="font-size: 7.35px; color: ${t.saffronDeep}; font-weight: 700; padding-top: 2px; margin: 3px 0 11px 0; line-height: 1.56; overflow: visible;">
                विषय: ${i(gt.spec.significationHi)}${i(jt)}
              </div>
              <div style="padding-top: 2px; overflow: visible;">
                ${qt(_t,u,_,`${gt.spec.id} ${gt.spec.nameHi}`,l)}
              </div>
            </div>
          `}).join(""),pt=`
        ${Z(`खण्ड ${D.code} : 16 षोडशवर्ग कुंडली चक्र`,r,n)}
        ${G(D.code,D.title,"प्रति पृष्ठ 4 बड़े वर्ग चक्र")}
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 12px; overflow: visible;">
          ${Y}
        </div>
        <div style="display: block; margin-top: 8px; padding: 5px 10px 6px 10px; background: ${t.templeGoldSoft}; border: 1px solid ${t.templeGold}; border-radius: 7px; font-size: 7.8px; color: ${t.cosmicNavy}; text-align: center; font-weight: 700; line-height: 1.35; font-family: ${U};">
          1–12 अंक = राशि संख्या • सू=सूर्य, चं=चंद्र, मं=मंगल, बु=बुध, गु=गुरु, शु=शुक्र, श=शनि, रा=राहु, के=केतु
        </div>
        ${D.banner?It("after_vargas_c",s,c):""}
      `;g.push({sectionCode:D.code,sectionTag:`खण्ड ${D.code} : षोडशवर्ग चार्ट्स`,html:pt})}}if(p){const o=p.planets.map(f=>{const D=Math.min(100,Math.round(f.totalRupas/Math.max(1,f.requiredRupas*1.45)*100)),M=f.strengthRatio>=1.15?"linear-gradient(90deg, #059669, #10B981)":f.meetsMinimum?"linear-gradient(90deg, #D97706, #F59E0B)":"linear-gradient(90deg, #DC2626, #F97316)";return`
          <div style="display: grid; grid-template-columns: 78px 1fr 110px; align-items: center; gap: 10px; padding: 5px 8px; background: #FFFDF8; border: 1px solid ${t.borderMuted}; border-radius: 7px;">
            <div style="font-size: 9px; font-weight: 800; color: ${t.cosmicNavy};">${i(f.hindiName)} (#${f.rank})</div>
            ${Jt(D,M,`${f.totalRupas.toFixed(2)} रूप`)}
            <div style="font-size: 7.9px; font-weight: 800; text-align: right; color: ${f.meetsMinimum?t.emerald:t.crimson};">
              ${f.meetsMinimum?"✓ पुष्ट":"सामान्य"} (${(f.strengthRatio*100).toFixed(0)}%)
            </div>
          </div>`}).join(""),b=`
      ${Z("खण्ड D1 : 6-अंगी पाराशरी षड्बल एवं शक्ति ग्राफ",r,n)}
      ${G("D1","6-अंगी पाराशरी षड्बल तालिका (विरूप व रूप — BPHS अध्याय 27)","1 रूप = 60 विरूप")}
      <table class="book-table" style="font-size: 8.2px;">
        <thead>
          <tr>
            <th style="width: 11%;">ग्रह</th>
            <th style="width: 9%; text-align:right;">स्थान</th>
            <th style="width: 8%; text-align:right;">दिग्</th>
            <th style="width: 9%; text-align:right;">काल</th>
            <th style="width: 8%; text-align:right;">चेष्टा</th>
            <th style="width: 9%; text-align:right;">नैसर्गिक</th>
            <th style="width: 8%; text-align:right;">दृक्</th>
            <th style="width: 11%; text-align:right;">कुल विरूप</th>
            <th style="width: 14%; text-align:right;">रूप / न्यूनतम</th>
            <th style="width: 13%;">श्रेणी</th>
          </tr>
        </thead>
        <tbody>
          ${p.planets.map((f,D)=>`
              <tr style="background:${D%2===0?"#FFFDF8":"#FEF6E4"};">
                <td style="font-weight:800; color:${t.cosmicNavy};">${i(f.hindiName)}</td>
                <td style="text-align:right; font-family:monospace;">${f.sthanaBala.total.toFixed(1)}</td>
                <td style="text-align:right; font-family:monospace;">${f.digBala.toFixed(1)}</td>
                <td style="text-align:right; font-family:monospace;">${f.kalaBala.total.toFixed(1)}</td>
                <td style="text-align:right; font-family:monospace;">${f.cheshtaBala.toFixed(1)}</td>
                <td style="text-align:right; font-family:monospace;">${f.naisargikaBala.toFixed(1)}</td>
                <td style="text-align:right; font-family:monospace; color:${f.drikBala>=0?t.emerald:t.crimson};">${f.drikBala>=0?"+":""}${f.drikBala.toFixed(1)}</td>
                <td style="text-align:right; font-family:monospace; font-weight:800;">${f.totalVirupas.toFixed(1)}</td>
                <td style="text-align:right; font-family:monospace; font-weight:800; color:${f.meetsMinimum?t.emerald:t.saffronDeep};">${f.totalRupas.toFixed(2)} / ${f.requiredRupas.toFixed(1)}</td>
                <td style="font-weight:700;">#${f.rank} ${i(f.gradeHi.split(" ")[0])}</td>
              </tr>`).join("")}
        </tbody>
      </table>

      ${G("D1b","सप्तग्रह षड्बल शक्ति तुलना (Colored Strength Bars)","न्यूनतम अपेक्षित बल के सापेक्ष")}
      <div style="display: flex; flex-direction: column; gap: 6px; margin-top: 6px;">
        ${o}
      </div>
      ${kt("shadbala")}
    `;g.push({sectionCode:"D",sectionTag:"खण्ड D : 6-अंगी पाराशरी षड्बल",html:b});const A=Math.max(8,...p.bhavas.map(f=>f.totalRupas)),w=`
      ${Z("खण्ड D2 : इष्ट-कष्ट फल एवं द्वादश भाव बल",r,n)}
      ${G("D2a","सप्तग्रह इष्ट फल बनाम कष्ट फल (Ishta & Kashta Phala)","शुभत्व एवं संघर्ष अनुपात")}
      <table class="book-table" style="font-size: 8.2px;">
        <thead>
          <tr>
            <th style="width: 15%;">ग्रह</th>
            <th style="width: 12%; text-align:right;">इष्ट फल</th>
            <th style="width: 12%; text-align:right;">कष्ट फल</th>
            <th style="width: 39%;">इष्ट-कष्ट संतुलन ग्राफ</th>
            <th style="width: 22%;">निष्कर्ष</th>
          </tr>
        </thead>
        <tbody>
          ${p.planets.map((f,D)=>{const M=Math.round(f.ishtaPhala/Math.max(1,f.ishtaPhala+f.kashtaPhala)*100);return`
              <tr style="background:${D%2===0?"#FFFDF8":"#FEF6E4"};">
                <td style="font-weight:800; color:${t.cosmicNavy};">${i(f.hindiName)}</td>
                <td style="text-align:right; font-family:monospace; font-weight:800; color:${t.emerald};">${f.ishtaPhala.toFixed(1)}</td>
                <td style="text-align:right; font-family:monospace; font-weight:700; color:${t.crimson};">${f.kashtaPhala.toFixed(1)}</td>
                <td>${Jt(M,M>=50?"#059669":"#D97706",`${M}% शुभ`)}</td>
                <td style="font-weight:700; color:${f.ishtaPhala>=f.kashtaPhala?t.emerald:t.saffronDeep};">${f.ishtaPhala>=f.kashtaPhala?"शुभ फल प्रधान":"परिश्रम उपरांत फल"}</td>
              </tr>`}).join("")}
        </tbody>
      </table>

      ${G("D2b","द्वादश भाव बल तालिका (12-House Parashari Bhava Bala)","भावाधिपति + दिग् + दृक् बल")}
      <table class="book-table" style="font-size: 7.8px;">
        <thead>
          <tr>
            <th style="width: 21%;">भाव</th>
            <th style="width: 16%;">राशि (स्वामी)</th>
            <th style="width: 10%; text-align:right;">अधिपति</th>
            <th style="width: 9%; text-align:right;">दिग्बल</th>
            <th style="width: 9%; text-align:right;">दृक्</th>
            <th style="width: 22%;">शक्ति ग्राफ (रूप)</th>
            <th style="width: 13%;">रैंक</th>
          </tr>
        </thead>
        <tbody>
          ${p.bhavas.map((f,D)=>{const M=Math.round(f.totalRupas/A*100),_=f.rank<=4?"#059669":f.rank<=8?"#D97706":"#C2410C";return`
              <tr style="background:${D%2===0?"#FFFDF8":"#FEF6E4"};">
                <td style="font-weight:800; color:${t.cosmicNavy};">${f.houseNumber}. ${i(f.bhavaTitleHi)}</td>
                <td>${i(f.rashiNameHi)} (${i(f.lordHindi)})</td>
                <td style="text-align:right; font-family:monospace;">${f.bhavadhipatiBala.toFixed(1)}</td>
                <td style="text-align:right; font-family:monospace;">${f.bhavaDigBala.toFixed(1)}</td>
                <td style="text-align:right; font-family:monospace; color:${f.bhavaDrishtiBala>=0?t.emerald:t.crimson};">${f.bhavaDrishtiBala>=0?"+":""}${f.bhavaDrishtiBala.toFixed(1)}</td>
                <td>${Jt(M,_,f.totalRupas.toFixed(2))}</td>
                <td style="font-weight:700; color:${f.rank<=4?t.emerald:t.inkPrimary};">#${f.rank} ${i(f.gradeHi.split(" ")[0])}</td>
              </tr>`}).join("")}
        </tbody>
      </table>
      ${kt("bhava_bala")}
    `;g.push({sectionCode:"D2",sectionTag:"खण्ड D : इष्ट-कष्ट व भाव बल",html:w})}const y=e.ashtakavarga;if(y){const o=((e.panchang.lagnaNumber||1)-1+12)%12,b=Array.from({length:6},(w,f)=>{const D=e.lagnaChart[f],M=e.lagnaChart[f+6],_=y.bhavaSarvashtakavarga?.[f]??y.sarvashtakavarga[(o+f)%12]??28,Y=y.bhavaSarvashtakavarga?.[f+6]??y.sarvashtakavarga[(o+f+6)%12]??28;return`
        <tr style="background:${f%2===0?"#FFFDF8":"#FEF6E4"};">
          <td style="font-weight:800;">भाव ${f+1} (${i(D?.rashiName||"")})</td>
          <td style="font-weight:800; color:${_>=28?t.emerald:t.saffronDeep};">${_} बिंदु — ${_>=30?"अति पुष्ट":_>=28?"संतुलित शुभ":"अतिरिक्त प्रयास"}</td>
          <td style="font-weight:800;">भाव ${f+7} (${i(M?.rashiName||"")})</td>
          <td style="font-weight:800; color:${Y>=28?t.emerald:t.saffronDeep};">${Y} बिंदु — ${Y>=30?"अति पुष्ट":Y>=28?"संतुलित शुभ":"अतिरिक्त प्रयास"}</td>
        </tr>`}).join(""),A=`
      ${Z("खण्ड E : अष्टकवर्ग एवं सर्वाष्टकवर्ग (337 बिंदु)",r,n)}
      ${G("E1","सप्तग्रह भिन्नाष्टकवर्ग (BAV) एवं सर्वाष्टकवर्ग (SAV) सारणी",`कुल योग: ${y.totalBindusSum} बिंदु`)}
      <table class="book-table" style="font-size: 8px; text-align:center;">
        <thead>
          <tr>
            <th style="width: 16%; text-align:left;">ग्रह / वर्ग</th>
            ${Mt.map(w=>`<th style="width: 6.4%; text-align:center;">${w.number}<br/>${i(w.nameHi.slice(0,3))}</th>`).join("")}
            <th style="width: 7.2%; text-align:right;">योग</th>
          </tr>
        </thead>
        <tbody>
          ${Object.entries(y.planetBindus).map(([w,f],D)=>{const M=f.reduce((_,Y)=>_+Y,0);return`
                <tr style="background:${D%2===0?"#FFFDF8":"#FEF6E4"};">
                  <td style="text-align:left; font-weight:800; color:${t.cosmicNavy};">${i(w)}</td>
                  ${f.map(_=>`<td style="font-family:monospace; font-weight:${_>=5?800:600}; color:${_>=5?t.emerald:_<=2?t.crimson:t.inkPrimary};">${_}</td>`).join("")}
                  <td style="text-align:right; font-family:monospace; font-weight:800;">${M}</td>
                </tr>`}).join("")}
          <tr style="background:${t.templeGoldSoft}; font-weight:900;">
            <td style="text-align:left; color:${t.cosmicNavy};">सर्वाष्टकवर्ग (SAV)</td>
            ${y.sarvashtakavarga.map(w=>`<td style="font-family:monospace; color:${w>=30?t.emerald:w<25?t.crimson:t.saffronDeep};">${w}</td>`).join("")}
            <td style="text-align:right; font-family:monospace; color:${t.cosmicNavy};">${y.totalBindusSum}</td>
          </tr>
        </tbody>
      </table>

      ${G("E2","द्वादश भावों में सर्वाष्टकवर्ग बिंदु स्थिति","28+ बिंदु = शुभ व फलदायी")}
      <table class="book-table" style="font-size: 8.1px;">
        <colgroup>
          <col style="width: 21%;" />
          <col style="width: 29%;" />
          <col style="width: 21%;" />
          <col style="width: 29%;" />
        </colgroup>
        <tbody>${b}</tbody>
      </table>
      <div class="book-card" style="margin-top:6px; background:${t.pureIvory}; border:1.2px solid ${t.templeGold}; border-radius:7px; padding:7px 10px; font-size:8.2px; line-height:1.45;">
        <div><b style="color:${t.emerald};">✦ सर्वाधिक प्रबल राशियाँ (30+ बिंदु):</b> ${i(y.strongestRashis.join(" • ")||"—")}</div>
        <div style="margin-top:2px;"><b style="color:${t.saffronDeep};">✦ अतिरिक्त ध्यान योग्य राशियाँ (&lt;28 बिंदु):</b> ${i(y.weakestRashis.join(" • ")||"—")}</div>
      </div>
      ${kt("ashtakavarga")}
      ${It("after_ashtakavarga_e",s,c)}
    `;g.push({sectionCode:"E",sectionTag:"खण्ड E : अष्टकवर्ग (337 बिंदु)",html:A})}const L=m?.vimshottari,T=`
    ${Z("खण्ड F1 : विंशोत्तरी महादशा चक्र एवं 4-स्तरीय सक्रिय दशा",r,n)}
    ${G("F1","विंशोत्तरी महादशा (120 वर्षीय चक्र) एवं वर्तमान सक्रिय 4-स्तरीय दशा",L?L.balanceAtBirthHi:"जन्म नक्षत्र आधारित")}
    ${L?`<div style="display:grid; grid-template-columns: repeat(4, 1fr); gap: 7px; margin-bottom: 8px;">
             ${[["वर्तमान महादशा",L.activeMahadasha],["वर्तमान अंतर्दशा",L.activeAntardasha],["वर्तमान प्रत्यंतर",L.activePratyantardasha],["वर्तमान सूक्ष्म दशा",L.activeSookshmadasha]].map(([o,b])=>`
                 <div class="book-cover-pillar-card" style="display: flex; flex-direction: column; justify-content: center; background:${t.cosmicNavy}; color:${t.warmIvory}; border:1.3px solid ${t.templeGold}; border-radius:8px; padding:6px 9px; box-sizing:border-box;">
                   <div style="display:block; font-size:7.6px; color:#FCD34D; font-weight:700; line-height:1.25;">${i(o)}</div>
                   <div style="display:block; font-size:11px; font-weight:800; margin-top:3px; line-height:1.25;">${i(b.lordHindi)}</div>
                   <div style="display:block; font-size:7.3px; color:#CBD5E1; font-variant-numeric: tabular-nums; margin-top:3px; line-height:1.25;">${i(b.startDateHi)} – ${i(b.endDateHi)}</div>
                 </div>`).join("")}
           </div>`:""}
    <table class="book-table" style="font-size: 8.2px;">
      <thead>
        <tr>
          <th style="width: 15%;">महादशा स्वामी</th>
          <th style="width: 8%; text-align:center;">वर्ष</th>
          <th style="width: 18%;">अवधि</th>
          <th style="width: 59%;">प्रमुख जीवन प्रभाव</th>
        </tr>
      </thead>
      <tbody>
        ${e.mahadashas.map((o,b)=>`
            <tr style="background:${o.isCurrent?t.emeraldSoft:b%2===0?"#FFFDF8":"#FEF6E4"};">
              <td style="font-weight:800; color:${o.isCurrent?t.emerald:t.cosmicNavy};">${i(o.planet)}${o.isCurrent?" ★":""}</td>
              <td style="text-align:center; font-family:monospace;">${o.years}</td>
              <td style="font-family:monospace; font-weight:700;">${i(o.startYear)} – ${i(o.endYear)}</td>
              <td>${i(o.prediction)}</td>
            </tr>`).join("")}
      </tbody>
    </table>

    ${L&&L.activeAntardashaPratyantars.length>0?`
          ${G("F1b",`वर्तमान सक्रिय प्रत्यंतर दशा (${L.activeMahadasha.lordHindi} – ${L.activeAntardasha.lordHindi})`,"सूक्ष्म काल गणना")}
          <table class="book-table" style="font-size: 7.8px;">
            <thead>
              <tr>
                <th style="width: 24%;">प्रत्यंतर स्वामी</th>
                <th style="width: 28%;">आरंभ तिथि</th>
                <th style="width: 28%;">समाप्ति तिथि</th>
                <th style="width: 20%; text-align:right;">अवधि (दिन)</th>
              </tr>
            </thead>
            <tbody>
              ${L.activeAntardashaPratyantars.map((o,b)=>`
                  <tr style="background:${o.isCurrent?t.emeraldSoft:b%2===0?"#FFFDF8":"#FEF6E4"};">
                    <td style="font-weight:800; color:${o.isCurrent?t.emerald:t.cosmicNavy};">${i(o.lordHindi)}${o.isCurrent?" (सक्रिय)":""}</td>
                    <td style="font-variant-numeric: tabular-nums; white-space: nowrap;">${i(o.startDateHi)}</td>
                    <td style="font-variant-numeric: tabular-nums; white-space: nowrap;">${i(o.endDateHi)}</td>
                    <td style="text-align:right; font-variant-numeric: tabular-nums; white-space: nowrap; font-weight: 700;">${Math.max(1,Math.round(Number(o.durationDays)||0))} दिन</td>
                  </tr>`).join("")}
            </tbody>
          </table>`:""}
    ${kt("dasha_vimshottari")}
  `;if(g.push({sectionCode:"F1",sectionTag:"खण्ड F : विंशोत्तरी महादशा",html:T}),L&&L.mahadashas.length>0){const o=L.mahadashas.slice(0,9),b=[{code:"F2",tag:"खण्ड F2 : विंशोत्तरी अंतर्दशा (भाग 1/4)",items:o.slice(0,2)},{code:"F3",tag:"खण्ड F3 : विंशोत्तरी अंतर्दशा (भाग 2/4)",items:o.slice(2,4)},{code:"F4",tag:"खण्ड F4 : विंशोत्तरी अंतर्दशा (भाग 3/4)",items:o.slice(4,6)},{code:"F5",tag:"खण्ड F5 : विंशोत्तरी अंतर्दशा (भाग 4/4)",items:o.slice(6,9)}];for(const A of b){if(A.items.length===0)continue;const w=A.items.length>=3,f=A.items.map(D=>`
          <div style="margin-bottom: ${w?5:11}px;">
            ${w?`<div class="book-section-bar" style="display: flex; align-items: center; justify-content: space-between; gap: 8px; background: linear-gradient(90deg, ${t.cosmicNavy} 0%, #1E293B 70%, ${t.saffronDeep} 100%); color: #FFF8E7; padding: 4.5px 10px; border-radius: 6px; margin: 4px 0 3px 0; border-left: 3.5px solid ${t.templeGold};">
                  <div style="display: flex; align-items: center; gap: 7px; min-width: 0;">
                    <span class="pj-h2c-no-lift" style="background: ${t.templeGold}; color: ${t.cosmicNavy}; font-weight: 800; font-size: 7.4px; padding: 1.5px 6px; border-radius: 999px; white-space: nowrap;">${i(D.lordHindi)} महादशा</span>
                    <span class="pj-h2c-no-lift" style="font-weight: 800; font-size: 8.6px; color: #FFFBEB; line-height: 1.3;">${i(D.lordHindi)} महादशा के अंतर्गत सभी 9 अंतर्दशाएँ (${i(D.startDateHi)} – ${i(D.endDateHi)})</span>
                  </div>
                  <span class="pj-h2c-no-lift" style="font-size: 7.2px; font-weight: 700; color: #FDE68A; white-space: nowrap;">${D.isCurrent?"वर्तमान सक्रिय महादशा":`${D.durationYears.toFixed(1)} वर्ष`}</span>
                </div>`:G(`${D.lordHindi} महादशा`,`${D.lordHindi} महादशा के अंतर्गत सभी 9 अंतर्दशाएँ (${D.startDateHi} – ${D.endDateHi})`,D.isCurrent?"वर्तमान सक्रिय महादशा":`${D.durationYears.toFixed(1)} वर्ष`)}
            <div class="pj-h2c-no-lift" style="font-size: ${w?7.2:8.1}px; color: ${t.saffronDeep}; font-weight: 700; margin-bottom: ${w?3:4}px; padding: 0 2px; line-height: 1.35;">
              महादशा प्रभाव: ${i(D.effectHi)}
            </div>
            <table class="book-table" style="font-size: ${w?7:7.9}px; width: 100%; table-layout: fixed; margin-bottom: ${w?2:6}px;">
              <thead>
                <tr>
                  <th style="width: 16%; padding: ${w?"3.5px 6px":"5px 7px"};">अंतर्दशा</th>
                  <th style="width: 16%; padding: ${w?"3.5px 6px":"5px 7px"};">आरंभ तिथि</th>
                  <th style="width: 16%; padding: ${w?"3.5px 6px":"5px 7px"};">समाप्ति तिथि</th>
                  <th style="width: 52%; padding: ${w?"3.5px 6px":"5px 7px"};">प्रमुख फल संकेत</th>
                </tr>
              </thead>
              <tbody>
                ${[...D.antardashas].sort((M,_)=>(M.startUtcMs??0)-(_.startUtcMs??0)).map((M,_)=>{const{startLabel:Y,endLabel:pt}=Qt(M.startDateHi,M.endDateHi,M.startUtcMs,M.endUtcMs);return`
                    <tr style="background:${M.isCurrent?t.emeraldSoft:_%2===0?"#FFFDF8":"#FEF6E4"};">
                      <td class="pj-h2c-no-lift" style="font-weight:700; color:${M.isCurrent?t.emerald:t.cosmicNavy}; padding: ${w?"3.2px 6px":"4.8px 7px"}; vertical-align: top; line-height: 1.38; direction: ltr; unicode-bidi: isolate;">
                        <div class="pj-h2c-no-lift" style="display: block; line-height: 1.38; white-space: nowrap;">${i(D.lordHindi)} – ${i(M.lordHindi)}${M.isCurrent?" (सक्रिय)":""}</div>
                      </td>
                      <td class="pj-h2c-no-lift" style="font-variant-numeric: tabular-nums; white-space: nowrap; padding: ${w?"3.2px 6px":"4.8px 7px"}; vertical-align: top; line-height: 1.38; direction: ltr; unicode-bidi: isolate; text-align: left; font-weight: 700;">
                        <div class="pj-h2c-no-lift" style="display: block; line-height: 1.38; direction: ltr; unicode-bidi: isolate;">${i(Y)}</div>
                      </td>
                      <td class="pj-h2c-no-lift" style="font-variant-numeric: tabular-nums; white-space: nowrap; padding: ${w?"3.2px 6px":"4.8px 7px"}; vertical-align: top; line-height: 1.38; direction: ltr; unicode-bidi: isolate; text-align: left; font-weight: 700;">
                        <div class="pj-h2c-no-lift" style="display: block; line-height: 1.38; direction: ltr; unicode-bidi: isolate;">${i(pt)}</div>
                      </td>
                      <td class="pj-h2c-no-lift" style="padding: ${w?"3.2px 6px":"4.8px 7px"}; vertical-align: top; line-height: 1.38;">
                        <div class="pj-h2c-no-lift" style="display: block; line-height: 1.38; word-break: normal; overflow-wrap: break-word;">${i(We[M.lordHindi]||"संतुलित कर्म व धैर्य से शुभ परिणाम।")}</div>
                      </td>
                    </tr>`}).join("")}
              </tbody>
            </table>
          </div>
        `).join("");g.push({sectionCode:A.code,sectionTag:A.tag,html:`
          ${Z(A.tag,r,n)}
          ${f}
        `})}}if(m){const o=`
      ${Z("खण्ड F6 : 36-वर्षीय योगिनी दशा एवं जैमिनी चर दशा",r,n)}
      ${G("F6a","योगिनी दशा चक्र (36-वर्षीय पाराशरी प्रणाली)",`सक्रिय: ${m.yogini.activeMahadasha.yoginiNameHi} → ${m.yogini.activeAntardasha.yoginiNameHi}`)}
      <table class="book-table" style="font-size: 7.4px; width: 100%; table-layout: fixed; font-family: ${U};">
        <thead>
          <tr>
            <th style="width: 18%;">योगिनी (स्वामी)</th>
            <th style="width: 6%; text-align:center;">वर्ष</th>
            <th style="width: 10%;">प्रकृति</th>
            <th style="width: 18%; white-space: nowrap;">आरंभ तिथि</th>
            <th style="width: 18%; white-space: nowrap;">समाप्ति तिथि</th>
            <th style="width: 30%;">संकेत</th>
          </tr>
        </thead>
        <tbody>
          ${[...m.yogini.mahadashas].sort((b,A)=>(b.startUtcMs??0)-(A.startUtcMs??0)).slice(0,10).map((b,A)=>{const w=String(b.yoginiNameHi||"").replace(/थान्या|धान्य(?!ा)/g,"धान्या").trim(),f=w==="धान्या"?"गुरु":b.lordHindi,D=k.deduplicateParagraph(b.effectHi,"dasha",`yogini|${A}|${w}`),{startLabel:M,endLabel:_}=Qt(b.startDateHi,b.endDateHi,b.startUtcMs,b.endUtcMs);return`
              <tr style="background:${b.isCurrent?t.emeraldSoft:A%2===0?"#FFFDF8":"#FEF6E4"};">
                <td class="pj-h2c-no-lift" style="font-weight:800; color:${b.isCurrent?t.emerald:t.cosmicNavy};">${i(w)} (${i(f)})${b.isCurrent?" ★":""}</td>
                <td class="pj-h2c-no-lift" style="text-align:center; font-variant-numeric: tabular-nums;">${b.years}</td>
                <td class="pj-h2c-no-lift" style="font-weight:700; color:${b.natureHi==="शुभ"?t.emerald:b.natureHi==="मिश्रित"?t.saffronDeep:t.crimson};">${i(b.natureHi)}</td>
                <td class="pj-h2c-no-lift" style="white-space: nowrap; font-variant-numeric: tabular-nums; font-weight: 700; direction: ltr; unicode-bidi: isolate; text-align: left;">${i(M)}</td>
                <td class="pj-h2c-no-lift" style="white-space: nowrap; font-variant-numeric: tabular-nums; font-weight: 700; direction: ltr; unicode-bidi: isolate; text-align: left;">${i(_)}</td>
                <td class="pj-h2c-no-lift">${i(D)}</td>
              </tr>`}).join("")}
        </tbody>
      </table>

      ${G("F6b","जैमिनी सप्त चर कारक (AK–DK) एवं राशि चर दशा",`सक्रिय: ${m.jaimini.activeMahadasha.rashiNameHi} → ${m.jaimini.activeAntardasha.rashiNameHi}`)}
      <div style="display:grid; grid-template-columns: repeat(4, 1fr); gap: 6px; margin-bottom: 7px;">
        ${m.jaimini.karakas.map(b=>`
            <div style="background:${t.pureIvory}; border:1.1px solid ${t.templeGold}; border-radius:6px; padding:5px 7px; font-size:7.6px;">
              <div style="font-weight:800; color:${t.saffronDeep};">${i(b.code)} • ${i(b.nameHi)}</div>
              <div class="pj-h2c-no-lift" style="font-weight:800; color:${t.cosmicNavy}; font-size:8.6px;">${i(b.planetHindi)} <span class="pj-h2c-no-lift" style="font-family:'Segoe UI','Liberation Sans',Arial,sans-serif; font-variant-numeric:tabular-nums; font-weight:600; color:${t.inkMuted};">(${i(b.degDMS)})</span></div>
            </div>`).join("")}
      </div>
      <table class="book-table" style="font-size: 7.4px; width: 100%; table-layout: fixed;">
        <thead>
          <tr>
            <th style="width: 17%;">चर दशा राशि</th>
            <th style="width: 11%;">स्वामी</th>
            <th style="width: 6%; text-align:center;">वर्ष</th>
            <th style="width: 18%; white-space: nowrap;">आरंभ तिथि</th>
            <th style="width: 18%; white-space: nowrap;">समाप्ति तिथि</th>
            <th style="width: 30%;">नियम नोट</th>
          </tr>
        </thead>
        <tbody>
          ${m.jaimini.charaDasha.slice(0,8).map((b,A)=>{const{startLabel:w,endLabel:f}=Qt(b.startDateHi,b.endDateHi,b.startUtcMs,b.endUtcMs);return`
              <tr style="background:${b.isCurrent?t.emeraldSoft:A%2===0?"#FFFDF8":"#FEF6E4"};">
                <td class="pj-h2c-no-lift" style="font-weight:800;">${b.rashiNumber}. ${i(b.rashiNameHi)}${b.isCurrent?" ★":""}</td>
                <td class="pj-h2c-no-lift">${i(b.effectiveLordHindi)}</td>
                <td class="pj-h2c-no-lift" style="text-align:center; font-family:monospace;">${b.durationYears}</td>
                <td class="pj-h2c-no-lift" style="white-space: nowrap; font-variant-numeric: tabular-nums; font-weight: 700; direction: ltr; unicode-bidi: isolate; text-align: left;">${i(w)}</td>
                <td class="pj-h2c-no-lift" style="white-space: nowrap; font-variant-numeric: tabular-nums; font-weight: 700; direction: ltr; unicode-bidi: isolate; text-align: left;">${i(f)}</td>
                <td class="pj-h2c-no-lift">${i(b.lordStrengthRuleNoteHi)}</td>
              </tr>`}).join("")}
        </tbody>
      </table>
      ${kt("dasha_yogini")}
    `;g.push({sectionCode:"F6",sectionTag:"खण्ड F : योगिनी एवं जैमिनी दशा",html:o})}const R=e.deepAnalysis?.allTwelveBhavas||[],W=o=>o.map(b=>`
        <div class="book-card" style="background: ${t.pureIvory}; border: 1.3px solid ${t.templeGold}; border-left: 4px solid ${b.strengthLabel==="प्रबल"?t.emerald:b.strengthLabel==="शुभ"?t.saffron:t.templeGoldDark}; border-radius: 8px; padding: 9px 11px; margin-bottom: 8px;">
          <div style="display: table; width: 100%; margin-bottom: 4px;">
            <div style="display: table-cell; vertical-align: middle; text-align: left; font-size: 9.8px; font-weight: 900; color: ${t.cosmicNavy}; padding-right: 8px;">
              भाव ${b.house} — ${i(b.bhavaName)} (${i(b.rashi)} राशि)
            </div>
            <div style="display: table-cell; vertical-align: middle; text-align: right; white-space: nowrap; width: 1%;">
              <span class="book-pill" style="${zt} font-size: 7.8px; font-weight: 800; padding-left: 9px; padding-right: 9px; border-radius: 999px; white-space: nowrap; background: ${b.strengthLabel==="प्रबल"?t.emeraldSoft:t.saffronSoft}; color: ${b.strengthLabel==="प्रबल"?t.emerald:t.saffronDeep};">
                <span style="${Nt}">स्थिति: ${i(b.strengthLabel)}</span>
              </span>
            </div>
          </div>
          <div style="font-size: 8.1px; color: ${t.saffronDeep}; font-weight: 700; margin-bottom: 3px;">
            भावेश: ${i(b.lord)} (स्थित भाव: ${b.lordPlacementHouse}) &nbsp;|&nbsp; स्थित ग्रह: ${i(b.occupants||"रिक्त (भावेश व दृष्टि से फल)")}
          </div>
          <div style="font-size: 8.6px; color: ${t.inkPrimary}; line-height: 1.52;">
            ${i(k.deduplicateParagraph(b.prediction,"gochar",`bhava|${b.house}|${b.rashi}`))}
          </div>
        </div>`).join(""),V=`
    ${Z("खण्ड G1 : द्वादश भाव फल (प्रथम से षष्ठ भाव)",r,n)}
    ${G("G1","द्वादश भाव फल विश्लेषण — भाव 1 से भाव 6 (तनु, धन, पराक्रम, सुख, संतान, शत्रु)",`${e.panchang.lagnaName} लग्न`)}
    ${W(R.slice(0,6))}
    ${Yt("भाव फल कैसे पढ़ें?","प्रत्येक भाव का फल तीन आधारों पर देखा जाता है: (1) उस भाव की राशि व स्वामी (भावेश) की स्थिति, (2) भाव में बैठे ग्रह, और (3) उस भाव पर पड़ने वाली शुभ या क्रूर ग्रहों की दृष्टि। रिक्त भाव का अर्थ अशुभ नहीं होता — उसका फल भावेश की स्थिति से मिलता है।","प्रबल व शुभ भाव जीवन के उन क्षेत्रों को दर्शाते हैं जहाँ कम प्रयास में भी उत्तम सफलता मिलती है।")}
  `;g.push({sectionCode:"G1",sectionTag:"खण्ड G : द्वादश भाव फल (1–6)",html:V});const dt=`
    ${Z("खण्ड G2 : द्वादश भाव फल (सप्तम से द्वादश भाव)",r,n)}
    ${G("G2","द्वादश भाव फल विश्लेषण — भाव 7 से भाव 12 (विवाह, आयु, भाग्य, कर्म, लाभ, व्यय)",`${e.panchang.lagnaName} लग्न`)}
    ${W(R.slice(6,12))}
  `;g.push({sectionCode:"G2",sectionTag:"खण्ड G : द्वादश भाव फल (7–12)",html:dt});const $t=o=>{const b=Object.entries(Ve).find(([A])=>o.hindiName.includes(A))?.[1]||"जन्म कुंडली में विशिष्ट कर्मफल व जीवन दिशा प्रदान करने वाला ग्रह।";return`
      <div class="book-card pj-h2c-no-lift" style="background: ${t.pureIvory}; border: 1.3px solid ${t.templeGold}; border-radius: 9px; padding: 10px 12px; margin-bottom: 9px;">
        <div style="display: table; width: 100%; border-bottom: 1px solid ${t.borderMuted}; padding-bottom: 4px; margin-bottom: 5px;">
          <div class="pj-h2c-no-lift" style="display: table-cell; vertical-align: middle; text-align: left; font-size: 10px; font-weight: 900; color: ${t.cosmicNavy}; padding-right: 8px; direction: ltr; unicode-bidi: isolate;">
            ✦ ${i(o.hindiName)} विचार — ${i(o.rashiName)} राशि, भाव ${o.houseInLagna} ${Rt(`(${o.fullDegreeDMS})`)}
          </div>
          <div style="display: table-cell; vertical-align: middle; text-align: right; white-space: nowrap; width: 1%;">
            <span class="book-pill pj-h2c-no-lift" style="${zt} font-size: 7.8px; font-weight: 800; padding-left: 9px; padding-right: 9px; border-radius: 999px; white-space: nowrap; background: ${o.statusBadge==="shubh"?t.emeraldSoft:o.statusBadge==="upay"?t.crimsonSoft:t.saffronSoft}; color: ${o.statusBadge==="shubh"?t.emerald:o.statusBadge==="upay"?t.crimson:t.saffronDeep};">
              <span style="${Nt}">${i(o.dignity)}${o.id!=="rahu"&&o.id!=="ketu"&&o.isRetrograde?" • वक्री (*)":""}${o.isCombust?" • अस्त (^)":""}</span>
            </span>
          </div>
        </div>
        <div class="pj-h2c-no-lift" style="font-size: 8.2px; color: ${t.saffronDeep}; font-weight: 700; margin-bottom: 3px;">
          नक्षत्र: ${i(o.nakshatra)} (चरण ${o.pada}) &nbsp;|&nbsp; कारकत्व: ${i(b)}
        </div>
        <div class="pj-h2c-no-lift" style="font-size: 8.6px; color: ${t.inkPrimary}; line-height: 1.54; direction: ltr; unicode-bidi: isolate;">
          ${Rt(k.deduplicateParagraph(o.houseEffect||`${o.hindiName} आपकी कुंडली के ${o.houseInLagna}वें भाव में ${o.rashiName} राशि में स्थित होकर ${o.dignity} अवस्था में फल प्रदान कर रहे हैं।`,"gochar",`graha|${o.id}|${o.houseInLagna}`))}
        </div>
      </div>`},ct=`
    ${Z("खण्ड G3 : नवग्रह विचार (सूर्य से गुरु तक)",r,n)}
    ${G("G3","नवग्रह विचार (भाग 1/2) — सूर्य, चंद्र, मंगल, बुध एवं गुरु का विस्तृत प्रभाव","भाव एवं अवस्था आधारित")}
    ${e.planets.slice(0,5).map($t).join("")}
  `;g.push({sectionCode:"G3",sectionTag:"खण्ड G : नवग्रह विचार (1–5)",html:ct});const q=`
    ${Z("खण्ड G4 : नवग्रह विचार (शुक्र से केतु) एवं शुभ राजयोग",r,n)}
    ${G("G4a","नवग्रह विचार (भाग 2/2) — शुक्र, शनि, राहु एवं केतु","भाव एवं अवस्था आधारित")}
    ${e.planets.slice(5,9).map($t).join("")}
    ${G("G4b","कुंडली में निर्मित प्रमुख शास्त्रीय योग एवं राजयोग",`${e.rajYogas.length} योग पहचानित`)}
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
      ${e.rajYogas.slice(0,6).map(o=>`
          <div class="book-card" style="background:${t.pureIvory}; border:1.2px solid ${t.templeGold}; border-radius:8px; padding:7.5px 9.5px; font-size:8px; line-height:1.45;">
            <div style="display:table; width:100%;">
              <div style="display:table-cell; vertical-align:middle; text-align:left; padding-right:4px;"><b style="color:${t.cosmicNavy}; font-size:8.8px;">${i(o.name)}</b></div>
              <div style="display:table-cell; vertical-align:middle; text-align:right; white-space:nowrap; width:1%;"><span class="book-pill" style="${zt} padding-left: 7px; padding-right: 7px; border-radius: 999px; background: ${t.emeraldSoft}; color:${t.emerald}; font-weight:800; font-size:7.4px; white-space: nowrap;"><span style="${Nt}">${i(o.strength)}</span></span></div>
            </div>
            <div style="color:${t.saffronDeep}; font-size:7.4px; margin-top:1px;">${i(o.sanskritRule)}</div>
            <div style="margin-top:3px; color:${t.inkPrimary};">${i(o.description)}</div>
          </div>`).join("")}
    </div>
  `;if(g.push({sectionCode:"G4",sectionTag:"खण्ड G : नवग्रह व राजयोग",html:q}),m){const o=`
      ${Z("खण्ड G5 : 5 शास्त्रीय दोष एवं परिहार (भंग) परीक्षण",r,n)}
      ${G("G5","नियम-आधारित 5 प्रमुख दोष परीक्षण — मंगल, कालसर्प, पितृ, ग्रहण एवं केमद्रुम","परिहार नियमों सहित निष्पक्ष विश्लेषण")}
      <table class="book-table" style="font-size: 8.3px;">
        <thead>
          <tr>
            <th style="width: 17%;">दोष नाम</th>
            <th style="width: 16%;">प्रभावी स्थिति</th>
            <th style="width: 40%;">शास्त्रीय विवरण एवं परिहार (अपवाद)</th>
            <th style="width: 27%;">शुद्ध सात्विक उपाय</th>
          </tr>
        </thead>
        <tbody>
          ${m.yogasAndDoshas.doshas.allList.map((w,f)=>{const D=w.effectiveStatus==="दोष मुक्त",M=w.pariharRulesHi.length>0?`<div style="margin-top:3px; color:${t.emerald}; font-weight:700;">✓ परिहार नियम: ${i(w.pariharRulesHi.join("; "))}</div>`:"";return`
                <tr style="background:${f%2===0?"#FFFDF8":"#FEF6E4"};">
                  <td style="font-weight:800; color:${t.cosmicNavy}; padding: 8px 7px;">${i(w.nameHi)}${w.subTypeHi?`<div style="font-size:7.4px; color:${t.inkMuted}; margin-top:2px;">${i(w.subTypeHi)}</div>`:""}</td>
                  <td style="font-weight:800; padding: 8px 7px; color:${D?t.emerald:w.effectiveStatus==="आंशिक / परिहार युक्त"?t.saffronDeep:t.crimson};">${i(w.effectiveStatus)}</td>
                  <td style="padding: 8px 7px; line-height:1.48;">${i(w.explanationHi)}${M}</td>
                  <td style="padding: 8px 7px; line-height:1.48;">${i(w.remedyHi)}</td>
                </tr>`}).join("")}
        </tbody>
      </table>
      ${kt("dosha_parihar_gochar")}
    `;g.push({sectionCode:"G5",sectionTag:"खण्ड G : 5 दोष व परिहार",html:o});const b=Oe(e),A=`
      ${Z("खण्ड G6 : सम्पूर्ण जीवन साढ़ेसाती एवं लाइव ग्रह गोचर",r,n)}
      ${G("G6a",`सम्पूर्ण जीवन शनि साढ़ेसाती आवर्तन तालिका (${e.panchang.moonRashiName} चंद्र राशि)`,m.liveGochar.sadeSatiLabelHi)}
      <table class="book-table" style="font-size: 7.4px;">
        <thead>
          <tr>
            <th style="width: 14%;">आवर्तन</th>
            <th style="width: 24%;">चरण</th>
            <th style="width: 14%;">शनि राशि</th>
            <th style="width: 14%;">अनुमानित वर्ष</th>
            <th style="width: 11%;">आयु</th>
            <th style="width: 23%;">संकेत</th>
          </tr>
        </thead>
        <tbody>
          ${b.slice(0,9).map((w,f)=>`
              <tr style="background:${f%2===0?"#FFFDF8":"#FEF6E4"};">
                <td style="font-weight:800; color:${t.cosmicNavy};">${i(w.cycleLabel)}</td>
                <td style="font-weight:700; color:${t.saffronDeep};">${i(w.phaseLabel)}</td>
                <td>${i(w.saturnRashi)}</td>
                <td style="font-variant-numeric: tabular-nums; font-weight:700; white-space: nowrap;">${i(w.approxPeriod)}</td>
                <td style="font-variant-numeric: tabular-nums; white-space: nowrap;">${i(w.ageSpan)}</td>
                <td>${i(w.guidanceHi)}</td>
              </tr>`).join("")}
        </tbody>
      </table>

      ${G("G6b",`लाइव निरयण ग्रह गोचर (${m.liveGochar.computedAtDateHi})`,"चंद्र एवं लग्न सापेक्ष")}
      <table class="book-table" style="font-size: 7.5px; width: 100%; table-layout: fixed;">
        <thead>
          <tr>
            <th style="width: 13%;">ग्रह</th>
            <th style="width: 22%;">वर्तमान राशि व अंश</th>
            <th style="width: 8%; text-align:center;">चंद्र भाव</th>
            <th style="width: 8%; text-align:center;">लग्न भाव</th>
            <th style="width: 16%;">वेध / स्थिति</th>
            <th style="width: 33%;">गोचर प्रभाव</th>
          </tr>
        </thead>
        <tbody>
          ${m.liveGochar.grahaRows.map((w,f)=>`
              <tr style="background:${f%2===0?"#FFFDF8":"#FEF6E4"};">
                <td class="pj-h2c-no-lift" style="font-weight:700; color:${t.cosmicNavy};">${i(lt(w.nameHi).normalize("NFC"))}${w.id!=="rahu"&&w.id!=="ketu"&&w.isRetrograde?" (व)":""}${w.id!=="moon"&&w.isCombust?" (अ)":""}</td>
                <td class="pj-h2c-no-lift" style="white-space: nowrap; line-height: 1.5; padding: 5.5px 6px; overflow: visible;"><span style="font-family:${U}; font-weight:700; color:${t.cosmicNavy};">${i(lt(w.currentRashiNameHi).normalize("NFC"))}</span>&nbsp;<span style="font-family:'Segoe UI', 'Liberation Sans', Arial, sans-serif; font-variant-numeric: tabular-nums; font-weight:700; font-size:7.35px; color:${t.inkPrimary};">${i(le(w.degDMS))}</span></td>
                <td style="text-align:center; font-weight:800; color:${t.emerald};">${w.houseFromNatalMoon}</td>
                <td style="text-align:center; font-weight:700;">${w.houseFromNatalLagna}</td>
                <td style="font-weight:700; color:${w.hasVedha?t.saffronDeep:w.isFavorableFromMoon?t.emerald:t.inkMuted};">${w.hasVedha?`वेध (${i(w.vedhaByHi.join(", "))})`:w.isFavorableFromMoon?"शुभ गोचर":"सामान्य"}</td>
                <td>${i(w.effectSummaryHi)}</td>
              </tr>`).join("")}
        </tbody>
      </table>
      ${It("after_gochar_g",s,c)}
    `;g.push({sectionCode:"G6",sectionTag:"खण्ड G : साढ़ेसाती एवं लाइव गोचर",html:A})}g.push(Le(e,H));for(const o of Ee(e,H))g.push(o);g.push(ze(e,H));const X=xe(e),it=`
    ${Z("खण्ड H1 : शुद्ध सात्विक वैदिक उपाय, रत्न एवं रुद्राक्ष",r,n)}
    ${G("H1a","लग्नेश आधारित प्रामाणिक रत्न, रुद्राक्ष एवं भाग्यवर्धक तत्व",`${e.panchang.lagnaName} लग्न`)}
    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 9px; margin-bottom: 9px;">
      <div class="book-card" style="background:${t.pureIvory}; border:1.4px solid ${t.templeGold}; border-radius:9px; padding:9px 11px; font-size:8.3px; line-height:1.5;">
        <div style="font-weight:800; color:${t.saffronDeep};">जीवन रत्न एवं भाग्य रत्न</div>
        <div style="font-weight:900; color:${t.cosmicNavy}; font-size:9.5px; margin-top:2px;">${i(X.jeevanRatna)}</div>
        <div style="margin-top:3px;"><b>भाग्य रत्न:</b> ${i(X.bhagyaRatna)}</div>
        <div><b>धारण विधि:</b> ${i(X.metalAndFinger)}</div>
      </div>
      <div class="book-card" style="background:${t.pureIvory}; border:1.4px solid ${t.templeGold}; border-radius:9px; padding:9px 11px; font-size:8.3px; line-height:1.5;">
        <div style="font-weight:800; color:${t.saffronDeep};">कल्याणकारी रुद्राक्ष</div>
        <div style="font-weight:900; color:${t.cosmicNavy}; font-size:9.5px; margin-top:2px;">${i(X.primaryRudraksha)}</div>
        <div style="margin-top:2px; font-size:7.9px;"><b>सहायक:</b> ${i(X.secondaryRudraksha)}</div>
        <div style="margin-top:3px;"><b>इष्टदेव:</b> ${i(e.lucky.ishtaDevta)}</div>
        <div><b>शुभ वार / रंग:</b> ${i(e.lucky.luckyDays)} • ${i(e.lucky.luckyColors)}</div>
      </div>
      <div class="book-card" style="background:${t.pureIvory}; border:1.4px solid ${t.templeGold}; border-radius:9px; padding:9px 11px; font-size:8.3px; line-height:1.55;">
        <div style="font-weight:800; color:${t.saffronDeep};">दैनिक सिद्ध बीज मंत्र</div>
        <div class="book-beej-mantra" style="font-weight:700; color:${t.emerald}; font-size:9px; margin-top:4px; line-height:1.65; padding: 2px 0; overflow: visible;">
          ${i(Xt(e.lucky.beejMantra))}
        </div>
        <div style="margin-top:4px;"><b>शुभ अंक व दिशा:</b> ${i(e.lucky.luckyNumbers)} • ${i(e.lucky.luckyDirection)}</div>
      </div>
    </div>

    ${G("H1b","व्यक्तिगत शुद्ध सात्विक वैदिक उपाय (कोई तांत्रिक या भय-आधारित क्रिया नहीं)","धार्मिक, सरल एवं शास्त्रसम्मत")}
    <div class="book-card" style="background:${t.pureIvory}; border:1.3px solid ${t.templeGold}; border-radius:9px; padding:10px 13px; font-size:8.4px; line-height:1.62; margin-bottom: 9px;">
      ${k.deduplicateBullets(e.remedies.upayList,"remedy",`h1b|${e.panchang.lagnaNumber}`).slice(0,6).map((o,b)=>`<div style="margin-top:${b===0?0:4.5}px;"><b style="color:${t.saffronDeep};">${b+1}.</b> ${i(Xt(o))}</div>`).join("")}
    </div>

    ${G("H1c","नवग्रह सात्विक मंत्र एवं दान संदर्भ तालिका","आवश्यकतानुसार जप व दान")}
    <table class="book-table" style="font-size: 8.0px; width: 100%; box-sizing: border-box; table-layout: fixed;">
      <thead>
        <tr>
          <th style="width: 10%;">ग्रह</th>
          <th style="width: 39%;">प्रामाणिक वैदिक बीज मंत्र</th>
          <th style="width: 34%;">सात्विक दान वस्तुएँ</th>
          <th style="width: 17%;">शुभ वार</th>
        </tr>
      </thead>
      <tbody>
        ${qe.map((o,b)=>`
          <tr style="background:${b%2===0?"#FFFDF8":"#FEF6E4"};">
            <td class="pj-h2c-no-lift" style="font-weight:700; color:${t.cosmicNavy}; padding: 6px 7px; line-height: 1.55; white-space: nowrap;">${i(lt(o.graha).normalize("NFC"))}</td>
            <td class="book-beej-mantra pj-h2c-no-lift" style="font-weight:600; font-size: 8.05px; color:${t.emerald}; padding: 6px 8px; line-height: 1.7; overflow: visible; white-space: nowrap; word-break: keep-all; overflow-wrap: normal;"><span class="pj-h2c-no-lift" style="display: inline-block; white-space: nowrap; direction: ltr; unicode-bidi: isolate;">${i(Xt(o.mantra))}</span></td>
            <td class="pj-h2c-no-lift" style="font-weight:500; color:${t.inkPrimary}; padding: 6px 8px; line-height: 1.55; white-space: normal;">${i(lt(o.daan).normalize("NFC"))}</td>
            <td class="pj-h2c-no-lift" style="font-weight:600; color:${t.saffronDeep}; padding: 6px 7px; line-height: 1.55; white-space: nowrap;">${i(lt(o.day).normalize("NFC"))}</td>
          </tr>`).join("")}
      </tbody>
    </table>
  `;g.push({sectionCode:"H",sectionTag:"खण्ड H : शुद्ध सात्विक वैदिक उपाय",html:it}),g.push(je(e,H));const rt=e.lagnaChart.find(o=>o.houseNumber===4),ot=e.planets.find(o=>o.id==="moon"),bt=e.planets.find(o=>o.id==="venus"),st=rt&&ot&&bt?`चतुर्थ भाव में ${rt.rashiName} राशि, मातृ-मन कारक चन्द्रमा (${ot.rashiName.split(" ")[0]} राशि, भाव ${ot.houseInLagna}) एवं सुख-वैभव कारक शुक्र (${bt.rashiName.split(" ")[0]} राशि, भाव ${bt.houseInLagna}) की वास्तविक D-1 स्थिति पारिवारिक सामंजस्य का मार्गदर्शन करती है।`:"",Dt=[{title:e.predictions.personality.title,body:k.deduplicateParagraph(e.predictions.personality.summary,"gochar",`h2a|personality|${e.panchang.lagnaNumber}`),extra:e.predictions.personality.keyTraits.join(" • ")},{title:e.predictions.career.title,body:k.deduplicateParagraph(e.predictions.career.summary,"career",`h2a|career|${e.panchang.lagnaNumber}`),extra:e.predictions.career.peakYears},{title:e.predictions.wealth.title,body:k.deduplicateParagraph(e.predictions.wealth.summary,"finance",`h2a|wealth|${e.panchang.lagnaNumber}`),extra:e.predictions.wealth.highlights.join(" • ")},{title:e.predictions.marriage.title,body:k.deduplicateParagraph(`${e.predictions.marriage.summary}${st?` ${st}`:""}`,"family",`h2a|family|${e.panchang.lagnaNumber}`),extra:`जीवनसाथी स्वभाव: ${e.predictions.marriage.spouseNature}`},{title:e.predictions.education.title,body:k.deduplicateParagraph(e.predictions.education.summary,"dasha",`h2a|education|${e.panchang.lagnaNumber}`)},{title:e.predictions.health.title,body:k.deduplicateParagraph(e.predictions.health.summary,"health",`h2a|health|${e.panchang.lagnaNumber}`),extra:e.predictions.health.careAreas.join(" • ")}],St=`
    ${Z("खण्ड H2 : सम्पूर्ण जीवन फलादेश एवं प्रमुख समय-सीमा",r,n)}
    ${G("H2a","जीवन के 6 प्रमुख क्षेत्रों का संतुलित वैदिक मार्गदर्शन",`${e.panchang.lagnaName} लग्न • ${e.panchang.moonRashiName} राशि`)}
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 9px;">
      ${Dt.map(o=>`
          <div class="book-card pj-h2c-no-lift" style="background:${t.pureIvory}; border:1.3px solid ${t.templeGold}; border-radius:9px; padding:9px 11px; font-size:8.2px; line-height:1.48;">
            <div class="pj-h2c-no-lift" style="font-weight:900; color:${t.cosmicNavy}; font-size:9.2px; border-bottom:1px solid ${t.borderMuted}; padding-bottom:3.5px; margin-bottom:4.5px;">
              ✦ ${i(o.title)}
            </div>
            <div class="pj-h2c-no-lift" style="color:${t.inkPrimary}; direction: ltr; unicode-bidi: isolate;">${Rt(o.body)}</div>
            ${o.extra?`<div class="pj-h2c-no-lift" style="margin-top:4.5px; color:${t.saffronDeep}; font-weight:700; font-size:7.8px;">${Rt(o.extra)}</div>`:""}
          </div>`).join("")}
    </div>

    ${m&&m.lifeTimeline.length>0?`
          ${G("H2b","प्रमुख जीवन समय-सीमा एवं आवर्तन मील के पत्थर (Life Timeline)","महादशा, गुरु व शनि आवर्तन")}
          <table class="book-table" style="font-size: 7.7px;">
            <thead>
              <tr>
                <th style="width: 15%;">आयु / वर्ष</th>
                <th style="width: 33%;">चरण शीर्षक</th>
                <th style="width: 52%;">संक्षिप्त मार्गदर्शन</th>
              </tr>
            </thead>
            <tbody>
              ${m.lifeTimeline.filter(o=>o.phaseType!=="ANTARDASHA").slice(0,7).map((o,b)=>`
                  <tr style="background:${o.isCurrent?t.emeraldSoft:b%2===0?"#FFFDF8":"#FEF6E4"};">
                    <td style="font-variant-numeric: tabular-nums; font-weight:800; white-space: nowrap;">${o.startAge} – ${o.endAge} वर्ष</td>
                    <td style="font-weight:800; color:${o.isCurrent?t.emerald:t.cosmicNavy};">${i(o.titleHi)}</td>
                    <td>${i(o.summaryHi)}</td>
                  </tr>`).join("")}
            </tbody>
          </table>`:""}
  `;g.push({sectionCode:"H2",sectionTag:"खण्ड H : जीवन फलादेश व समयरेखा",html:St});const ft=`
    ${Z("खण्ड I : आचार्य आशीर्वचन, प्रामाणिकता मुहर एवं समापन",r,n)}
    ${G("I1","जीवन के प्रबल पक्ष एवं विशेष सावधानियाँ","व्यक्तिगत सारांश")}
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 12px;">
      <div class="book-card" style="background: ${t.emeraldSoft}; border: 1.3px solid #10B981; border-radius: 9px; padding: 10px 12px; font-size: 8.5px; line-height: 1.55;">
        <div style="font-weight: 900; color: #065F46; font-size: 9.5px; margin-bottom: 5px;">✓ प्रमुख शक्तियाँ (Strengths)</div>
        ${k.deduplicateBullets(e.remedies.strengths.length>0?e.remedies.strengths:["लग्नेश व त्रिकोण भावों की शुभ स्थिति से जीवन में निरंतर उन्नति।"],"gochar","i1-str").slice(0,5).map(o=>`<div style="margin-top:3px;">• ${i(o)}</div>`).join("")}
      </div>
      <div class="book-card" style="background: ${t.saffronSoft}; border: 1.3px solid ${t.templeGold}; border-radius: 9px; padding: 10px 12px; font-size: 8.5px; line-height: 1.55;">
        <div style="font-weight: 900; color: ${t.saffronDeep}; font-size: 9.5px; margin-bottom: 5px;">✦ विवेकपूर्ण सावधानियाँ (Precautions)</div>
        ${k.deduplicateBullets(e.remedies.precautions.length>0?e.remedies.precautions:["महत्वपूर्ण निर्णयों में धैर्य, सात्विक आहार और दशा-गोचर का ध्यान रखें।"],"remedy","i1-pre").slice(0,5).map(o=>`<div style="margin-top:3px;">• ${i(o)}</div>`).join("")}
      </div>
    </div>

    ${G("I2","आचार्य पण्डित शशांक शर्मा का आशीर्वचन एवं गणना प्रामाणिकता प्रमाण-पत्र","PANDIT JI ONLINE")}
    <div class="book-card" style="background: ${t.pureIvory}; border: 1.8px solid ${t.templeGold}; border-radius: 11px; padding: 14px 16px; text-align: center;">
      <div style="display: flex; justify-content: center; margin-bottom: 8px;">
        ${Lt(56,n,2.5)}
      </div>
      <div style="font-size: 11.5px; font-weight: 900; color: ${t.saffronDeep};">
        ॥ स्वस्ति प्रजाभ्यः परिपालयन्तां न्यायेन मार्गेण महीं महीशाः ॥
      </div>
      <div style="font-size: 9px; color: ${t.inkPrimary}; line-height: 1.65; margin-top: 8px; text-align: justify;">
        प्रिय यजमान <b>${i(e.input.name)}</b> जी, यह सम्पूर्ण बृहत् वैदिक जन्म कुंडली पुस्तक पूर्ण खगोलीय शुद्धता — <b>दृक् गणित लाहिड़ी चित्रा पक्ष अयनांश (${i(e.input.ayanamsaDMS)}), True Node, वास्तविक MC आधारित श्रीपति भाव चलित, BPHS सत्यापित 16 षोडशवर्ग, 6-अंगी पाराशरी षड्बल, 337-बिंदु अष्टकवर्ग, विंशोत्तरी/योगिनी/जैमिनी दशा प्रणाली एवं डिजिटल ज्योतिषाचार्य जीवन-मार्गदर्शन</b> पर आधारित है। वैदिक ज्योतिष हमें जीवन के संभावित अवसरों और चुनौतियों का प्रकाश दिखाता है; सद्कर्म, धैर्य और ईश्वर-भक्ति से प्रत्येक समय को मंगलमय बनाया जा सकता है।
      </div>
      <div style="margin-top: 10px; padding-top: 9px; border-top: 1px dashed ${t.templeGold}; display: flex; align-items: center; justify-content: space-between; font-size: 8.4px; color: ${t.cosmicNavy};">
        <div style="text-align: left;">
          <b>प्रमाणित संस्थान:</b> पण्डित जी ऑनलाइन (PANDIT JI ONLINE)<br/>
          <b>वेबसाइट:</b> ${At(t.saffronDeep)}
        </div>
        <div style="text-align: right;">
          <b>${i(xt.founderHi)}</b><br/>
          <span style="color:${t.inkMuted};">${i(xt.locationHi)}</span>
        </div>
      </div>
    </div>

    ${$e(s,c)}
  `;return g.push({sectionCode:"I",sectionTag:"खण्ड I : आशीर्वचन एवं समापन",html:ft}),g}const Zt=`
  @page {
    size: A4 portrait;
    margin: 9mm 9mm 11mm 9mm;
  }
  * {
    box-sizing: border-box;
    font-synthesis: none;
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
  }
  html, body {
    margin: 0;
    padding: 0;
    background: ${t.warmIvory};
    color: ${t.inkPrimary};
    font-family: ${U};
    font-synthesis: none;
    font-variant-ligatures: normal;
    font-feature-settings: "liga" 1, "clig" 1, "kern" 1;
    text-rendering: optimizeLegibility;
    line-height: 1.35;
  }
  .vedic-book-a4-page {
    width: 794px;
    height: 1123px;
    box-sizing: border-box;
    background: ${t.warmIvory};
    padding: 18px 16px 28px 16px;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    font-synthesis: none;
    font-variant-ligatures: normal;
    font-feature-settings: "liga" 1, "clig" 1, "kern" 1;
    text-rendering: optimizeLegibility;
    line-height: 1.35;
  }
  .vedic-book-a4-body {
    width: 100%;
    box-sizing: border-box;
    padding: 0 14px;
    flex: 1;
    min-height: 0;
    overflow: hidden;
  }
  .vedic-book-a4-body--has-banner {
    display: flex;
    flex-direction: column;
  }
  .vedic-book-a4-body--has-banner > * {
    flex-shrink: 0;
  }
  .vedic-book-a4-body--has-banner > .book-banner-slot {
    flex: 1 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    width: 100%;
    padding: 6px 0;
  }
  .vedic-book-a4-body--cover {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 0;
    flex: 1;
    min-height: 0;
    overflow: hidden;
  }
  .vedic-book-a4-footer {
    position: absolute;
    left: 30px;
    right: 30px;
    bottom: 9px;
    border-top: 1px solid ${t.templeGold};
    padding-top: 4px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    font-size: 7.7px;
    font-weight: 700;
    color: ${t.inkMuted};
  }
  .book-section-bar,
  .book-cover-pillar-card,
  .book-cover-meta-card,
  .book-chart-box,
  .book-card {
    overflow: visible;
  }
  .book-section-bar > div {
    vertical-align: middle;
  }
  .book-pill {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    line-height: 1.2;
    padding-top: 4px;
    padding-bottom: 4px;
    vertical-align: middle;
    box-sizing: border-box;
    text-align: center;
    overflow: visible;
  }
  .book-pill > span {
    display: inline-block;
    line-height: 1.2;
  }
  .book-banner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: 0;
  }
  .book-banner-pills {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  .book-banner .book-banner-badge,
  .book-banner div[style*="border-radius: 999px"] {
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    min-height: 18px !important;
    line-height: 1.15 !important;
    padding: 2px 10px !important;
    box-sizing: border-box !important;
    text-align: center !important;
    overflow: visible !important;
  }
  .book-banner .book-banner-badge > span,
  .book-banner .book-banner-badge-text {
    display: inline-block !important;
    line-height: 1.15 !important;
  }
  .book-banner .book-banner-pill,
  .book-banner span[style*="border-radius: 999px"] {
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    line-height: 1.2 !important;
    padding-top: 4px !important;
    padding-bottom: 4px !important;
    vertical-align: middle !important;
    box-sizing: border-box !important;
    text-align: center !important;
    overflow: visible !important;
  }
  .book-table {
    width: 100%;
    box-sizing: border-box;
    table-layout: fixed;
    border-collapse: collapse;
    border: 1.2px solid ${t.templeGold};
    background: ${t.pureIvory};
    margin-bottom: 6px;
  }
  .book-table thead {
    display: table-header-group;
  }
  .book-table tfoot {
    display: table-footer-group;
  }
  .book-table th {
    background: ${t.cosmicNavy};
    color: #FDE68A;
    font-weight: 800;
    text-align: left;
    padding: 5.5px 7px;
    border: 0.8px solid #334155;
    line-height: 1.3;
    vertical-align: middle;
    overflow: visible;
    box-sizing: border-box;
  }
  .book-table td {
    padding: 5px 7px;
    border: 0.7px solid ${t.borderMuted};
    line-height: 1.38;
    vertical-align: middle;
    overflow: visible;
    word-wrap: break-word;
    overflow-wrap: break-word;
    box-sizing: border-box;
  }
  .book-table tr,
  .book-card,
  .book-chart-box,
  .book-banner {
    break-inside: avoid;
    page-break-inside: avoid;
  }
  .book-dasha-date {
    white-space: nowrap !important;
    direction: ltr !important;
    unicode-bidi: isolate !important;
    display: inline-block;
  }
  .book-beej-mantra {
    line-height: 1.75 !important;
    letter-spacing: 0 !important;
    overflow: visible !important;
    font-variant-ligatures: normal !important;
    font-feature-settings: "liga" 1, "clig" 1, "kern" 1 !important;
    text-rendering: optimizeLegibility !important;
    white-space: normal;
  }
  @media print {
    html, body {
      background: ${t.warmIvory};
    }
    .vector-print-page {
      break-after: page;
      page-break-after: always;
      width: 100%;
      box-sizing: border-box;
      min-height: 274mm;
      background: ${t.warmIvory};
      padding: 2mm 14px 6mm 14px;
    }
    .vector-print-page--has-banner {
      display: flex;
      flex-direction: column;
    }
    .vector-print-page--has-banner > * {
      flex-shrink: 0;
    }
    .vector-print-page--has-banner > .book-banner-slot {
      flex: 1 0 auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: stretch;
      width: 100%;
      padding: 10px 0;
    }
    .vector-print-page:last-child {
      break-after: auto;
      page-break-after: auto;
    }
    .book-table thead {
      display: table-header-group !important;
    }
    .book-table tr,
    .book-card,
    .book-chart-box,
    .book-banner {
      break-inside: avoid !important;
      page-break-inside: avoid !important;
    }
  }
`;function ce(e,s,a){return e.isCover?`
      <div class="vedic-book-a4-page" style="padding: 16px 18px;">
        <div class="vedic-book-a4-body--cover">${e.html}</div>
      </div>
    `:`
    <div class="vedic-book-a4-page">
      <div class="vedic-book-a4-body${e.html.includes("book-banner-slot")||e.html.includes('class="book-banner"')?" vedic-book-a4-body--has-banner":""}">${e.html}</div>
      <div class="vedic-book-a4-footer">
        <span>पण्डित जी ऑनलाइन (PANDIT JI ONLINE) • ${i(xt.founderHi)} • ${At(t.inkMuted)}</span>
        <span style="color:${t.cosmicNavy}; font-weight:800; white-space: nowrap;">पृष्ठ ${s} / ${a}</span>
      </div>
    </div>
  `}function pe(e,s){if(s==="hi")return;const l=(e.ownerDocument||document).createTreeWalker(e,NodeFilter.SHOW_TEXT),c=[];let u;for(;u=l.nextNode();)u.nodeType===Node.TEXT_NODE&&u.nodeValue&&/[\u0900-\u097F]/.test(u.nodeValue)&&c.push(u);for(const n of c)n.nodeValue&&(n.nodeValue=fe(n.nodeValue,s))}async function Je(e){const s=e.ownerDocument||document,a=Array.from(e.querySelectorAll("svg"));for(const l of a)try{const c=parseFloat(l.getAttribute("width")||"240")||240,u=parseFloat(l.getAttribute("height")||"240")||240,n=l.cloneNode(!0);n.setAttribute("xmlns","http://www.w3.org/2000/svg"),n.setAttribute("width",String(c)),n.setAttribute("height",String(u));const r=new XMLSerializer().serializeToString(n),h="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(r),d=await new Promise(p=>{const m=new Image,g=window.setTimeout(()=>p(""),1800);m.onload=()=>{window.clearTimeout(g);try{const k=document.createElement("canvas");k.width=Math.max(120,Math.round(c*2.6)),k.height=Math.max(120,Math.round(u*2.6));const H=k.getContext("2d");if(H){H.fillStyle=t.warmIvory,H.fillRect(0,0,k.width,k.height),H.drawImage(m,0,0,k.width,k.height);const E=k.toDataURL("image/png");k.width=0,k.height=0,p(E);return}}catch{}p("")},m.onerror=()=>{window.clearTimeout(g),p("")},m.src=h});if(d){const p=s.createElement("img");p.src=d,p.width=c,p.height=u,p.style.cssText=`width:${c}px;height:${u}px;display:block;margin:0 auto;`,l.parentNode?.replaceChild(p,l)}}catch{}}function Ke(e,s,a,l,c,u){const n=Math.max(0,Math.min(u,l/2,c/2));e.beginPath(),e.moveTo(s+n,a),e.lineTo(s+l-n,a),e.arcTo(s+l,a,s+l,a+n,n),e.arcTo(s+l,a+c,s+l-n,a+c,n),e.lineTo(s+n,a+c),e.arcTo(s,a+c,s,a+c-n,n),e.arcTo(s,a,s+n,a,n),e.closePath()}function Xe(e){const s=e.ownerDocument||document,a=Array.from(e.querySelectorAll(".book-banner-badge, .book-pill, .book-banner-pill"));if(!a.length)return;const l=4;for(const c of a)try{const u=(c.textContent||"").replace(/\s+/g," ").trim();if(!u)continue;const n=c.classList.contains("book-banner-badge"),r=s.defaultView?.getComputedStyle(c),h=c.getBoundingClientRect(),d=Math.max(7,parseFloat(r?.fontSize||(n?"8":"8.2"))||8),p=r?.fontWeight||"800",m=r?.color||"#FFFFFF",g=r?.whiteSpace==="nowrap";if(!n&&!g&&h.height>d*3.6)continue;const k=c.getAttribute("data-badge-bg")||(r&&r.backgroundColor&&r.backgroundColor!=="rgba(0, 0, 0, 0)"?r.backgroundColor:n?"#FF6F00":"rgba(15, 23, 42, 0.9)"),H=parseFloat(r?.borderTopWidth||"0")||0,E=r?.borderTopColor||"transparent",z=parseFloat(r?.borderTopLeftRadius||"999")||0,N=Math.max(6,Math.round(parseFloat(r?.paddingLeft||(n?"10":"9"))||9)),F=s.createElement("canvas"),$=F.getContext("2d");if(!$)continue;const v=`${p} ${d}px ${U}`;$.font=v;const C=$.measureText(u),S=Math.ceil(Math.max(C.width,(C.actualBoundingBoxLeft||0)+(C.actualBoundingBoxRight||0))),x=n?Math.max(19,Math.round(h.height||19)):Math.max(19,Math.round(h.height||d+11)),I=Math.max(40,S+28),B=x+18;F.width=Math.round(I*l),F.height=Math.round(B*l),$.save(),$.scale(l,l),$.font=v,$.fillStyle=m,$.textAlign="center",$.textBaseline="middle",$.fillText(u,I/2,B/2),$.restore();let P=F.width,j=-1,O=F.height,Q=-1;try{const X=$.getImageData(0,0,F.width,F.height).data,it=F.width,rt=F.height;for(let ot=0;ot<rt;ot++){const bt=ot*it*4;for(let st=0;st<it;st++)X[bt+st*4+3]>20&&(st<P&&(P=st),st>j&&(j=st),ot<O&&(O=ot),ot>Q&&(Q=ot))}}catch{}const K=j>=P&&Q>=O,y=K?(j-P+1)/l:S,L=K?(Q-O+1)/l:d*1.25,T=Math.max(x,Math.ceil(L+7+H*2)),R=Math.ceil(Math.max(y+N*2+H*2,n?0:h.width||0)),W=s.createElement("canvas");W.width=Math.round(R*l),W.height=Math.round(T*l);const V=W.getContext("2d");if(!V){F.width=0,F.height=0;continue}V.save(),V.scale(l,l);const dt=H>0?H/2:0,$t=z>=T/2?T/2:z;if(Ke(V,dt,dt,R-dt*2,T-dt*2,Math.max(0,$t-dt)),V.fillStyle=k,V.fill(),H>0&&E&&E!=="transparent"&&E!=="rgba(0, 0, 0, 0)"&&(V.lineWidth=H,V.strokeStyle=E,V.stroke()),V.restore(),K){const q=(P+j)/2,X=(O+Q)/2,it=Math.round((W.width-1)/2-q),rt=Math.round((W.height-1)/2-X);V.drawImage(F,it,rt)}else{V.save(),V.scale(l,l),V.font=v,V.fillStyle=m,V.textAlign="center",V.textBaseline="alphabetic";const q=V.measureText(u),X=q.actualBoundingBoxAscent>0?q.actualBoundingBoxAscent:d*.72,it=q.actualBoundingBoxDescent>=0?q.actualBoundingBoxDescent:d*.2;V.fillText(u,R/2,T/2+(X-it)/2),V.restore()}const ct=W.toDataURL("image/png");if(F.width=0,F.height=0,W.width=0,W.height=0,ct){const q=s.createElement("img");q.className=n?"book-banner-badge-img":"book-pill-img",q.src=ct,q.alt=u,q.width=R,q.height=T,n?q.style.cssText=`width:${R}px;height:${T}px;display:block;align-self:flex-start;margin-bottom:5px;flex-shrink:0;`:q.style.cssText=`width:${R}px;height:${T}px;display:inline-block;vertical-align:middle;flex-shrink:0;`,c.parentNode?.replaceChild(q,c)}}catch{}}function Qe(){if(typeof document>"u"||!document.head)return;const e="pj-pdf-noto-devanagari-font";if(document.getElementById(e))return;const s=document.createElement("link");s.id=e,s.rel="stylesheet",s.href="https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;500;600;700;800;900&family=Noto+Sans+Symbols:wght@400;700&family=Noto+Sans+Symbols+2&display=swap",document.head.appendChild(s)}async function he(e){Qe(),await ke(e,3500)}async function Ze(e){const s=Array.from(e.querySelectorAll("img"));await Promise.all(s.map(a=>new Promise(l=>{const c=()=>{typeof a.decode=="function"?a.decode().then(()=>l()).catch(()=>l()):l()};if(a.complete&&a.naturalWidth>0){c();return}const u=window.setTimeout(l,900);a.onload=()=>{window.clearTimeout(u),c()},a.onerror=()=>{window.clearTimeout(u),l()}})))}async function ge(e,s={}){const a={cleanMode:!!s.cleanMode,chartStyle:s.chartStyle||"north",language:s.language||"hi"},l=await Tt(),c=Gt(e,l,a),u=`PanditJiOnline_Kundali_Book_${ne(e.input.name)}`,n=c.map((g,k)=>`
      <section class="vector-print-page${!g.isCover&&(g.html.includes("book-banner-slot")||g.html.includes('class="book-banner"'))?" vector-print-page--has-banner":""}">
        ${g.html}
        ${g.isCover?"":`<div style="margin-top: 8px; border-top: 1px solid ${t.templeGold}; padding-top: 4px; display: flex; align-items: center; justify-content: space-between; font-size: 7.7px; font-weight: 700; color: ${t.inkMuted};">
                 <span>पण्डित जी ऑनलाइन (PANDIT JI ONLINE) • ${i(xt.founderHi)} • ${At(t.inkMuted)}</span>
                 <span style="white-space: nowrap;">पृष्ठ ${k+1} / ${c.length}</span>
               </div>`}
      </section>`).join(""),r=`<!DOCTYPE html>
<html lang="${a.language==="hi"?"hi":"en"}">
<head>
  <meta charset="utf-8" />
  <title>${i(u)}</title>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;500;600;700;800;900&family=Noto+Sans+Symbols:wght@400;700&family=Noto+Sans+Symbols+2&display=swap" />
  <style>${Zt}</style>
</head>
<body>
  <div id="vector-book-root">${n}</div>
</body>
</html>`,h=document.getElementById("panditji-vector-print-iframe");h&&h.remove();const d=document.createElement("iframe");d.id="panditji-vector-print-iframe",d.style.cssText="position:fixed;right:0;bottom:0;width:0;height:0;border:0;opacity:0;pointer-events:none;",document.body.appendChild(d);const p=d.contentDocument||d.contentWindow?.document;if(!p)return!1;p.open(),p.write(r),p.close();const m=p.getElementById("vector-book-root");return m&&a.language!=="hi"&&pe(m,a.language),await he(p),setTimeout(()=>{try{d.contentWindow?.focus(),d.contentWindow?.print()}catch{}setTimeout(()=>{document.body.contains(d)&&document.body.removeChild(d)},6e4)},450),!0}function ti(){typeof window>"u"||(Tt().catch(()=>{}),ae().catch(()=>{}))}function Ut(){return new Promise(e=>{typeof window<"u"&&typeof window.requestAnimationFrame=="function"?window.requestAnimationFrame(()=>window.setTimeout(e,16)):window.setTimeout(e,16)})}function ei(e,s){let a=Math.max(1,e),l=4,c=4,u=null;const n=document.createElement("div");n.id="panditji-book-pdf-progress",n.style.cssText=`
    position: fixed;
    top: 16px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 999999;
    width: min(92vw, 408px);
    background: linear-gradient(155deg, color-mix(in srgb, var(--theme-bg, #0F172A) 72%, var(--theme-primary, #B45309) 28%) 0%, color-mix(in srgb, var(--theme-bg, #0F172A) 84%, var(--theme-accent, #F59E0B) 16%) 100%) !important;
    border: 1.5px solid color-mix(in srgb, var(--theme-primary, #D97706) 50%, #F59E0B 30%) !important;
    border-radius: 16px;
    padding: 12px 16px;
    box-shadow: 0 20px 48px rgba(0, 0, 0, 0.62), inset 0 1px 0 rgba(255, 253, 247, 0.12);
    font-family: ${U};
    color: #FFFDF7;
    box-sizing: border-box;
  `,n.innerHTML=`
    <div style="display:flex; align-items:center; gap:11px;">
      ${Lt(36,s,1.8)}
      <div style="flex:1; min-width:0;">
        <div style="font-size:12px; font-weight:800; color:#FFFDF7; line-height:1.3;">4K वैदिक कुंडली पुस्तक तैयार हो रही है</div>
        <div id="pj-pdf-prog-text" style="font-size:11px; color:#F1F5F9; margin-top:2px; font-weight:600;">कुंडली डेटा व QR तैयार हो रहे हैं...</div>
      </div>
      <div id="pj-pdf-prog-pct" style="font-size:12px; font-weight:900; color:color-mix(in srgb, var(--theme-accent, #FDE68A) 52%, #FFFDF7 48%); font-family:monospace; flex-shrink:0;">4%</div>
    </div>
    <div style="margin-top:9px; width:100%; height:7px; background:color-mix(in srgb, var(--theme-bg, #0F172A) 65%, rgba(255,253,247,0.16) 35%); border-radius:999px; overflow:hidden; border:1px solid color-mix(in srgb, var(--theme-primary, #D97706) 45%, #F59E0B 25%);">
      <div id="pj-pdf-prog-fill" style="width:4%; height:100%; background:linear-gradient(90deg, var(--theme-primary, ${t.saffron}), var(--theme-accent, ${t.templeGold}), #FDE68A); border-radius:999px; transition:width 180ms ease-out;"></div>
    </div>
  `;const r=(g,k)=>{const H=Math.max(l,Math.min(100,Math.round(g)));l=H;const E=n.querySelector("#pj-pdf-prog-text"),z=n.querySelector("#pj-pdf-prog-pct"),N=n.querySelector("#pj-pdf-prog-fill");k&&E&&(E.textContent=k),z&&(z.textContent=`${H}%`),N&&(N.style.width=`${H}%`)},h=()=>{u!==null&&(window.clearInterval(u),u=null)},d=()=>{u===null&&(u=window.setInterval(()=>{l<c&&r(l+1)},280))},p=(g,k,H)=>{r(g,k),c=Math.max(l,Math.min(99,Math.round(H??g))),c>l&&d()};return{root:n,setStage:p,updatePage:(g,k,H)=>{k>0&&(a=k);const E=28+(g-1)/a*68,z=28+g/a*68;if(H==="start"){const N=Math.max(l,Math.round(E+.35*(z-E))),F=Math.min(96,Math.max(N,Math.floor(z)));p(N,`पृष्ठ ${g} / ${a} तैयार हो रहा है...`,F)}else{const N=Math.min(96,Math.round(z));p(N,`पृष्ठ ${g} / ${a} तैयार`,N)}},stop:h}}function ii(e,s,a,l,c,u,n){const r=document.getElementById("panditji-book-pdf-ready-modal");r&&r.remove();const h=(e.size/(1024*1024)).toFixed(2),d=document.createElement("div");d.id="panditji-book-pdf-ready-modal",d.style.cssText="position:fixed;inset:0;z-index:2147483647;background:rgba(5,8,18,0.8);backdrop-filter:blur(7px);display:flex;align-items:center;justify-content:center;padding:16px;";const p=document.createElement("div");p.className="pj-velvet-glass-modal",p.style.cssText=`width:100%;max-width:440px;background:linear-gradient(135deg, rgba(255,255,255,0.095) 0%, rgba(255,253,247,0.02) 34%, transparent 60%), linear-gradient(155deg, var(--theme-velvet-modal-top, rgba(24,20,38,0.88)) 0%, var(--theme-velvet-modal-bottom, rgba(14,16,30,0.92)) 100%) !important;backdrop-filter:blur(12px) saturate(135%);-webkit-backdrop-filter:blur(12px) saturate(135%);border:1px solid var(--theme-velvet-border, rgba(255,223,140,0.36)) !important;border-radius:20px;padding:22px 20px;box-shadow:0 22px 54px rgba(0,0,0,0.62), inset 0 1px 0 rgba(255,255,255,0.18);color:#FFFDF7;font-family:${U};text-align:center;box-sizing:border-box;`,p.innerHTML=`
    <div style="display:flex; justify-content:center; margin-bottom:10px;">
      ${Lt(56,n,2.5)}
    </div>
    <div style="font-size:16.5px;font-weight:900;color:#FFFDF7;line-height:1.35;text-shadow:0 1px 2px rgba(0,0,0,0.35);">4K बृहत् कुंडली पुस्तक PDF तैयार है</div>
    <div style="display:inline-block;margin-top:6px;padding:4px 12px;border-radius:999px;background:var(--theme-velvet-subcard, #1d1a2f);border:1px solid var(--theme-velvet-subborder, rgba(255,223,140,0.26));font-size:11.5px;color:var(--theme-label-safe, #FDE68A);font-weight:800;">
      ${i(l.input.name)} • ${u} पृष्ठ • ${h} MB • ${c.cleanMode?"Clean PDF मोड":"ब्रांडेड वैदिक पुस्तक"}
    </div>
    <div style="font-size:11px;color:#F1F5F9;margin-top:9px;line-height:1.55;">
      यदि ऑटो-डाउनलोड शुरू न हुआ हो, तो नीचे दिए गए बटन पर टैप करके तुरंत सेव या WhatsApp पर शेयर करें।
    </div>
    <div style="display:flex;flex-direction:column;gap:9px;margin-top:15px;">
      <a id="pj-book-dl-link" href="${s}" download="${i(a)}" style="display:block;width:100%;padding:12px 14px;border-radius:12px;background:linear-gradient(135deg, color-mix(in srgb, var(--theme-primary, #D97706) 80%, #F59E0B 20%) 0%, color-mix(in srgb, var(--theme-accent, #F59E0B) 68%, var(--theme-primary, #B45309) 32%) 100%);color:#FFFDF7;font-weight:900;font-size:13px;text-decoration:none;border:1px solid color-mix(in srgb, var(--theme-accent, #FDE68A) 52%, #FFFDF7 24%);box-shadow:0 8px 22px rgba(0,0,0,0.4);text-shadow:0 1px 2px rgba(0,0,0,0.45);box-sizing:border-box;">
        ⬇ अभी कुंडली पुस्तक PDF डाउनलोड करें (${h} MB)
      </a>
      <button id="pj-book-share-btn" type="button" style="width:100%;padding:10.5px 14px;border-radius:12px;background:linear-gradient(135deg,#047857 0%,#059669 100%);color:#FFFDF7;font-weight:800;font-size:12.5px;border:1px solid rgba(110,231,183,0.42);box-shadow:0 6px 16px rgba(4,120,87,0.35);cursor:pointer;box-sizing:border-box;">
        📲 WhatsApp / मोबाइल शेयर करें
      </button>
      <button id="pj-book-vector-btn" type="button" style="width:100%;padding:9.5px 14px;border-radius:12px;background:color-mix(in srgb, var(--theme-bg, #0F172A) 66%, var(--theme-primary, #B45309) 34%);color:color-mix(in srgb, var(--theme-accent, #FDE68A) 52%, #FFFDF7 48%);font-weight:800;font-size:12px;border:1px solid color-mix(in srgb, var(--theme-primary, #D97706) 48%, #F59E0B 30%);cursor:pointer;box-sizing:border-box;">
        🖨 Searchable Vector Print / Save-as-PDF
      </button>
      <button id="pj-book-close-btn" type="button" style="width:100%;padding:9px 14px;border-radius:12px;background:color-mix(in srgb, var(--theme-bg, #0F172A) 74%, var(--theme-primary, #B45309) 26%);color:#F1F5F9;font-weight:700;font-size:12px;border:1px solid color-mix(in srgb, var(--theme-primary, #D97706) 40%, rgba(255,253,247,0.22));cursor:pointer;box-sizing:border-box;">
        बंद करें
      </button>
    </div>
  `,d.appendChild(p),document.body.appendChild(d);const m=()=>{d.remove(),setTimeout(()=>URL.revokeObjectURL(s),6e4)};p.querySelector("#pj-book-close-btn")?.addEventListener("click",m),d.addEventListener("click",g=>{g.target===d&&m()}),p.querySelector("#pj-book-share-btn")?.addEventListener("click",async()=>{try{const g=new File([e],a,{type:"application/pdf"});if(navigator.canShare&&navigator.canShare({files:[g]})){await navigator.share({files:[g],title:`${l.input.name} — Janam Kundali Book`,text:`पण्डित जी ऑनलाइन बृहत् जन्म कुंडली पुस्तक (${xt.websiteDisplay})`}),m();return}}catch{}p.querySelector("#pj-book-dl-link")?.click()}),p.querySelector("#pj-book-vector-btn")?.addEventListener("click",()=>{m(),ge(l,c)})}async function ai(e,s={}){const a={cleanMode:!!s.cleanMode,chartStyle:s.chartStyle||"north",language:s.language||"hi"},c=ei(30,ve());document.body.appendChild(c.root),c.setStage(8,"PDF इंजन व QR कोड तैयार हो रहे हैं...",18),await Ut();let u,n=null,r=null;try{const[m,g]=await Promise.all([Tt(),ae()]);u=m,n=g.jsPDF,r=g.html2canvas}catch(m){throw c.stop(),document.body.contains(c.root)&&document.body.removeChild(c.root),m}if(typeof n!="function"||typeof r!="function")throw c.stop(),document.body.contains(c.root)&&document.body.removeChild(c.root),new Error("PDF libraries failed to initialize");c.setStage(20,"वैदिक फ़ॉन्ट व लेआउट तैयार हो रहा है...",23);const h=794,d=1123,p=document.createElement("iframe");p.id="panditji-book-pdf-capture-iframe",p.style.cssText=`position:fixed;left:-9999px;top:0;width:${h}px;height:${d}px;border:0;margin:0;padding:0;z-index:-1;pointer-events:none;background:${t.warmIvory};`,document.body.appendChild(p);try{const m=p.contentDocument||p.contentWindow?.document;if(!m)throw new Error("Could not create capture iframe document");m.open(),m.write(`<!DOCTYPE html>
<html lang="hi">
<head>
  <meta charset="utf-8" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;500;600;700;800;900&family=Noto+Sans+Symbols:wght@400;700&family=Noto+Sans+Symbols+2&display=swap" />
  <style>${Zt}</style>
</head>
<body style="margin:0;padding:0;background:${t.warmIvory};">
  <div id="book-pdf-host" style="width:${h}px;height:${d}px;overflow:hidden;"></div>
</body>
</html>`),m.close();const g=m.getElementById("book-pdf-host");if(!g)throw new Error("Book PDF host missing");await he(m),c.setStage(24,"30 पृष्ठ व उच्च-गुणवत्ता कुंडली चार्ट बन रहे हैं...",27),await Ut();const k=Gt(e,u,a,!0);c.setStage(28,`पृष्ठ 1 / ${k.length} तैयार हो रहा है...`,30),await Ut();const H=new n({orientation:"portrait",unit:"mm",format:"a4",compress:!0}),z=typeof window<"u"&&(window.innerWidth<768||typeof navigator<"u"&&typeof navigator.hardwareConcurrency=="number"&&navigator.hardwareConcurrency<=4)?1.75:2;for(let x=0;x<k.length;x++){c.updatePage(x+1,k.length,"start"),g.innerHTML=ce(k[x],x+1,k.length);const I=g.querySelector(".vedic-book-a4-page");if(!I)continue;a.language!=="hi"&&pe(I,a.language),await Je(I),Xe(I),await Ze(I),await new Promise(O=>setTimeout(O,x===0?20:8));const B=document.fonts;B?.ready&&await B.ready;const P=await r(I,{scale:z,useCORS:!0,allowTaint:!1,imageTimeout:2500,backgroundColor:t.warmIvory,width:h,height:d,windowWidth:h,windowHeight:d,logging:!1,onclone:O=>{we(O,".vedic-book-a4-page")}}),j=P.toDataURL("image/jpeg",.85);x>0&&H.addPage(),H.addImage(j,"JPEG",0,0,210,297,void 0,"FAST"),P.width=0,P.height=0,g.innerHTML="",c.updatePage(x+1,k.length,"done")}c.setStage(98,"कुंडली पुस्तक PDF फ़ाइल सेव हो रही है...",99),await Ut();const N=ne(e.input.name),F=a.cleanMode?"_Clean":"",$=`PanditJiOnline_Kundali_Book_${N}${F}.pdf`,v=H.output("arraybuffer"),C=new Blob([v],{type:"application/pdf"}),S=URL.createObjectURL(C);c.setStage(100,"कुंडली पुस्तक PDF तैयार है!");try{const x=document.createElement("a");x.href=S,x.download=$,x.style.display="none",document.body.appendChild(x),x.click(),setTimeout(()=>{document.body.contains(x)&&document.body.removeChild(x)},2e3)}catch{}return ii(C,S,$,e,a,k.length,u.appLogoDataUrl),!0}finally{c.stop(),document.body.contains(p)&&document.body.removeChild(p),document.body.contains(c.root)&&document.body.removeChild(c.root)}}async function ni(e,s={}){const a={cleanMode:!!s.cleanMode,chartStyle:s.chartStyle||"north",language:s.language||"hi"},l=await Tt(),c=Gt(e,l,a),u=c.map((n,r)=>ce(n,r+1,c.length));return{pages:c,sharedCss:Zt,qrs:l,wrappedDiscretePages:u}}export{Gt as buildAllKundaliBookPages,ni as buildKundaliBookPayload,ai as downloadKundaliBookPDF,ti as prewarmKundaliBookPdfAssets,ge as printKundaliBookVectorPDF};
