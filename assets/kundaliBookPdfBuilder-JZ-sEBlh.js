import{am as be,aI as fe}from"./panchang-core-DrvLbm9a.js";import{g as ye,R as At,G as xe,C as It,T as $e,a as Kt}from"./SampurnKundaliSection-B4pYTFah.js";import{translateVedicHindiToEnglish as ve}from"./vedicTranslatorEngine-CWK0xvi8.js";import{V as t,P as wt,b as Pt,e as Rt,c as we,g as ke,f as Fe,h as Gt,i as De,j as oe,k as He,s as se,w as Ne}from"./pdfReportExporter-DOLBqXao.js";import{P as Se,s as Le}from"./phalitDeduplicator-C_PknbvQ.js";import"./vendor-astronomy-C8JZdkQu.js";import"./boot-core-MmqtFwXf.js";import"./vendor-react-GnNhYla_.js";import"./VedicDateInput-CyHMCxY4.js";import"./vendor-icons-CHRhCh18.js";import"./index-Peo_6SoZ.js";import"./VedicTripleCheckBadge-LUxmp0uI.js";import"./vedicTripleCheck-BTBiCfUQ.js";import"./ShareableVedicCardButton-it3L-c8k.js";import"./BirthPlaceGpsButton-CoWAZ5um.js";import"./livePageCardResolver-CXHjdEa8.js";import"./browser-BD-G2ddJ.js";const Ce={1:"mars",2:"venus",3:"mercury",4:"moon",5:"sun",6:"mercury",7:"venus",8:"mars",9:"jupiter",10:"saturn",11:"saturn",12:"jupiter"},Xt=["मेष","वृषभ","मिथुन","कर्क","सिंह","कन्या","तुला","वृश्चिक","धनु","मकर","कुंभ","मीन"],at={sun:"सूर्य",moon:"चंद्र",mars:"मंगल",mercury:"बुध",jupiter:"गुरु",venus:"शुक्र",saturn:"शनि",rahu:"राहु",ketu:"केतु"},Ct={sun:"ॐ घृणि सूर्याय नमः",moon:"ॐ सों सोमाय नमः",mars:"ॐ अं अंगारकाय नमः",mercury:"ॐ बुं बुधाय नमः",jupiter:"ॐ बृं बृहस्पतये नमः",venus:"ॐ शुं शुक्राय नमः",saturn:"ॐ शं शनैश्चराय नमः",rahu:"ॐ रां राहवे नमः",ketu:"ॐ कें केतवे नमः"},re={sun:{planetId:"sun",planetHi:"सूर्य",gemHi:"माणिक्य (Ruby)",uparatnaHi:"लाल गार्नेट / सूर्यकांत",rattiHi:"5.25 से 6.25 रत्ती",metalHi:"सोना या तांबा",fingerHi:"अनामिका (Ring Finger)",dayHi:"शुक्ल पक्ष का रविवार",timingHi:"सूर्योदय के 1 घंटे के भीतर (प्रातः 6:30–8:00)",mantraHi:Ct.sun,purificationHi:"कच्चा दूध, गंगाजल एवं शहद से स्नान कर धूप-दीप दिखाएं",avoidWarnHi:"अहंकार, रक्तचाप, पिता/वरिष्ठों से तनाव और अनावश्यक सरकारी विवाद बढ़ सकते हैं।"},moon:{planetId:"moon",planetHi:"चंद्र",gemHi:"सच्चा मोती (Natural Pearl)",uparatnaHi:"मूनस्टोन (चंद्रमणि)",rattiHi:"5.25 से 7.25 रत्ती",metalHi:"चांदी (Silver)",fingerHi:"कनिष्ठा (Little Finger)",dayHi:"शुक्ल पक्ष का सोमवार",timingHi:"प्रातः सूर्योदय पश्चात या संध्या चंद्रोदय काल",mantraHi:Ct.moon,purificationHi:"कच्चा गाय का दूध, गंगाजल एवं तुलसी दल/अक्षत से शुद्ध करें",avoidWarnHi:"मानसिक अस्थिरता, भावनात्मक उलझन, सर्दी-कफ एवं अनिर्णय की प्रवृत्ति बढ़ सकती है।"},mars:{planetId:"mars",planetHi:"मंगल",gemHi:"त्रिकोणीय/अंडाकार मूंगा (Red Coral)",uparatnaHi:"लाल हकीक / तांबा छल्ला",rattiHi:"6.25 से 8.25 रत्ती",metalHi:"तांबा या सोना",fingerHi:"अनामिका (Ring Finger)",dayHi:"शुक्ल पक्ष का मंगलवार",timingHi:"सूर्योदय के 1–2 घंटे के भीतर",mantraHi:Ct.mars,purificationHi:"कच्चा दूध, गंगाजल एवं लाल पुष्प अर्पित कर शुद्ध करें",avoidWarnHi:"क्रोध, जल्दबाजी, रक्त/चोट संबंधी समस्या, कर्ज अथवा भूमि-विवाद की संभावना बढ़ सकती है।"},mercury:{planetId:"mercury",planetHi:"बुध",gemHi:"पन्ना (Emerald)",uparatnaHi:"पेरीडॉट / हरा ओनिक्स",rattiHi:"5.25 से 6.25 रत्ती",metalHi:"सोना या चांदी",fingerHi:"कनिष्ठा (Little Finger)",dayHi:"शुक्ल पक्ष का बुधवार",timingHi:"प्रातः सूर्योदय के 2 घंटे के भीतर",mantraHi:Ct.mercury,purificationHi:"कच्चा दूध, गंगाजल एवं दूर्वा/तुलसी दल से शुद्ध करें",avoidWarnHi:"व्यापारिक निर्णय में भ्रम, त्वचा/स्नायु संवेदनशीलता और संवाद में अनावश्यक गलतफहमी हो सकती है।"},jupiter:{planetId:"jupiter",planetHi:"गुरु",gemHi:"पीला पुखराज (Yellow Sapphire)",uparatnaHi:"सुनहला (Citrine) / पीला टोपाज",rattiHi:"5.25 से 6.25 रत्ती",metalHi:"सोना या पीतल",fingerHi:"तर्जनी (Index Finger)",dayHi:"शुक्ल पक्ष का गुरुवार",timingHi:"प्रातः सूर्योदय के 1–2 घंटे के भीतर",mantraHi:Ct.jupiter,purificationHi:"कच्चा दूध, गंगाजल, हल्दी व पीले पुष्प से शुद्ध करें",avoidWarnHi:"वजन/लिवर की समस्या, अत्यधिक आशावाद से आर्थिक चूक और अनावश्यक व्यय बढ़ सकते हैं।"},venus:{planetId:"venus",planetHi:"शुक्र",gemHi:"ओपल या सफेद जरकन / हीरा (Opal / Diamond)",uparatnaHi:"स्फटिक / सफेद पुखराज",rattiHi:"6.25 से 8.25 रत्ती (ओपल) / 0.5–1 कैरेट (हीरा)",metalHi:"चांदी या प्लैटिनम",fingerHi:"मध्यमा या अनामिका उंगली",dayHi:"शुक्ल पक्ष का शुक्रवार",timingHi:"प्रातः सूर्योदय के 1–2 घंटे के भीतर",mantraHi:Ct.venus,purificationHi:"कच्चा दूध, गंगाजल, दही व श्वेत पुष्प से शुद्ध करें",avoidWarnHi:"विलासिता में अनावश्यक खर्च, शुगर/हार्मोन असंतुलन एवं संबंधों में अस्थिरता आ सकती है।"},saturn:{planetId:"saturn",planetHi:"शनि",gemHi:"नीलम (Blue Sapphire — 3 दिन परीक्षण उपरांत)",uparatnaHi:"नीली / जामुनिया (Amethyst)",rattiHi:"5.25 से 6.25 रत्ती",metalHi:"पंचधातु या चांदी",fingerHi:"मध्यमा (Middle Finger)",dayHi:"शुक्ल पक्ष का शनिवार",timingHi:"सूर्यास्त के पश्चात या प्रातः शनि होरा में",mantraHi:Ct.saturn,purificationHi:"कच्चा दूध, गंगाजल एवं काले तिल के जल से शुद्ध करें",avoidWarnHi:"बिना अनुकूलता धारण करने पर कार्यों में विलंब, जोड़ों में दर्द, कर्ज या अचानक हानि हो सकती है।"}};function le(e,r){return(e-1+(r-1))%12+1}function it(e,r){return Ce[le(e,r)]||"jupiter"}function Ut(e,r){const n=[];for(let l=1;l<=12;l++)it(e,l)===r&&n.push(l);return n}function K(e,r){return e.planets.find(n=>n.id===r)}function Dt(e,r){const n=e.ashtakavarga;if(!n)return 28;if(n.bhavaSarvashtakavarga&&typeof n.bhavaSarvashtakavarga[r-1]=="number")return n.bhavaSarvashtakavarga[r-1];const l=((e.panchang.lagnaNumber||1)-1+12)%12;return n.sarvashtakavarga[(l+(r-1))%12]??28}function _t(e,r){const n=e.shadbalaBhava?.planets.find(l=>l.id===r);return n?n.strengthRatio:1}function jt(e,r){if(r==="rahu"||r==="ketu")return"mixed";const n=Ut(e,r),l=n.some(p=>[4,7,10].includes(p)),c=n.some(p=>[5,9].includes(p));return l&&c?"yogakaraka":n.includes(1)?"lagna":c?"trikona":n.length>0&&n.every(p=>[6,8,12].includes(p))?"dusthana":l?"kendra":"mixed"}function je(e,r){const{esc:n,buildBookPageHeader:l,buildSectionTitleBar:c,personHeader:p,appLogo:d}=r,i=e.panchang.lagnaNumber||1,w=it(i,1),s=it(i,5),m=it(i,9),y=K(e,w),b=K(e,s),$=K(e,m),D=[];for(const v of e.rajYogas||[])D.push({title:v.name,line1:v.description,line2:`शास्त्रीय आधार: ${v.sanskritRule} — यह योग जीवन में सम्मान, प्रगति और स्थिरता को निरंतर बल देता है।`,score:v.strength==="प्रबल योग"?95:85});for(const v of e.planets){const j=jt(i,v.id),S=_t(e,v.id),W=v.hindiName.split(" ")[0];if(j==="yogakaraka"||v.isExalted||v.dignity.includes("स्वगृही")||S>=1.25){const V=(j==="yogakaraka"?35:0)+(v.isExalted?35:v.dignity.includes("स्वगृही")?28:0)+Math.round(S*20)+([1,4,5,7,9,10,11].includes(v.houseInLagna)?15:0);D.push({title:`${W} की ${v.isExalted?"उच्चस्थ":v.dignity.includes("स्वगृही")?"स्वगृही":j==="yogakaraka"?"योगकारक":"अति पुष्ट"} स्थिति (भाव ${v.houseInLagna})`,line1:`${W} आपकी कुंडली के ${v.houseInLagna}वें भाव में ${v.rashiName.split(" ")[0]} राशि (${v.dignity}) में बैठकर अत्यंत प्रबल बल दे रहे हैं।`,line2:"इनकी दशा-अंतर्दशा व गोचर के दौरान करियर, निर्णय क्षमता और आर्थिक स्थिरता में स्पष्ट उछाल देखने को मिलेगा।",score:V})}}const L=Array.from({length:12},(v,j)=>({house:j+1,pts:Dt(e,j+1)})).sort((v,j)=>j.pts-v.pts);if(L[0]&&L[0].pts>=30){const v=L[0],j=e.lagnaChart[v.house-1]?.bhavaTitle||`भाव ${v.house}`;D.push({title:`सर्वाष्टकवर्ग में ${v.house}वें भाव का सर्वाधिक बल (${v.pts} बिंदु)`,line1:`आपकी कुंडली के ${j} को 337-बिंदु अष्टकवर्ग में ${v.pts} शुभ बिंदु मिले हैं (28 से ऊपर अति शुभ माना जाता है)।`,line2:"इस भाव से जुड़े कार्यों में कम संघर्ष में भी स्थायी और संतोषजनक परिणाम प्राप्त होने के प्रबल संकेत हैं।",score:70+v.pts})}const P=[],E=new Set;for(const v of D.sort((j,S)=>S.score-j.score)){const j=v.title.slice(0,16);if(!E.has(j)&&(E.add(j),P.push(v),P.length===3))break}for(;P.length<3;)P.push({title:`${e.panchang.lagnaName} लग्न एवं ${e.panchang.moonRashiName} चंद्र राशि का संतुलन`,line1:`आपकी जन्मपत्री में लग्नेश ${e.panchang.lagnaLord} तथा चंद्र राशि स्वामी ${e.panchang.moonRashiLord} व्यक्तित्व को व्यावहारिक और धैर्यवान बनाते हैं।`,line2:"सही योजना, अनुशासन और निरंतर कर्म से जीवन के मध्य भाग में उल्लेखनीय उन्नति सुनिश्चित है।",score:60});const k=[],x=v=>{const j=v.hindiName.split(" ")[0],S=v.rashiName.split(" ")[0],W=v.houseInLagna;switch(v.id){case"mars":return{title:`मंगल का अस्त (^) प्रभाव — भाव ${W} (${S})`,line1:`मंगल ${S} राशि (${W}वें भाव) में सूर्य के निकट अस्त होने से ऊर्जा, साहस या भूमि-संपत्ति संबंधी निर्णयों में कभी-कभी भीतरी अधीरता अथवा परिणाम में विलंब अनुभव हो सकता है।`,line2:"सावधानी: आवेश में संपत्ति/कर्ज या तकनीकी निर्णय न लें; नियमित व्यायाम, मंगलवार को हनुमान चालीसा पाठ व मसूर दान से मंगल का शुभ पराक्रम जागृत रहेगा।"};case"saturn":return{title:`शनि का अस्त (^) प्रभाव — भाव ${W} (${S})`,line1:`शनि ${S} राशि (${W}वें भाव) में सूर्य-सान्निध्य से अस्त होने पर कठिन परिश्रम के बाद भी वरिष्ठों से श्रेय मिलने में समय लग सकता है तथा कार्यभार का दबाव बढ़ सकता है।`,line2:"सावधानी: पिता या उच्चाधिकारियों से अहं-टकराव से बचें, दीर्घकालिक अनुशासन बनाए रखें और शनिवार सायं पीपल के नीचे तिल के तेल का दीपक जलाएं।"};case"mercury":return{title:`बुध का अस्त (^) प्रभाव — भाव ${W} (${S})`,line1:`बुध ${S} राशि (${W}वें भाव) में सूर्य के अति समीप होने से विचारों में तीव्रता तो रहती है, पर जल्दबाजी में संवाद या लिखित अनुबंध में सूक्ष्म चूक की संभावना बनती है।`,line2:"सावधानी: किसी भी वित्तीय/व्यापारिक कागज पर हस्ताक्षर से पूर्व दो बार जांचें; बुधवार को हरी मूंग दान व श्री विष्णु सहस्रनाम श्रवण लाभकारी रहेगा।"};case"jupiter":return{title:`गुरु का अस्त (^) प्रभाव — भाव ${W} (${S})`,line1:`देवगुरु बृहस्पति ${S} राशि (${W}वें भाव) में अस्त होने से मार्गदर्शक निर्णय या आर्थिक विस्तार में स्पष्ट दृष्टि बनाए रखने हेतु अतिरिक्त विवेक आवश्यक होता है।`,line2:"सावधानी: बिना पूर्ण मूल्यांकन बड़ी वित्तीय गारंटी न दें; गुरुजनों का सम्मान करें तथा गुरुवार को हल्दी/चना दाल दान व गायत्री जप करें।"};case"venus":return{title:`शुक्र का अस्त (^) प्रभाव — भाव ${W} (${S})`,line1:`शुक्र ${S} राशि (${W}वें भाव) में सूर्य-समीप होने से पारिवारिक अपेक्षाओं, दांपत्य संवेदनशीलता या सुख-सुविधाओं के व्यय में असंतुलन आ सकता है।`,line2:"सावधानी: रिश्तों में विनम्र संवाद और बजट अनुशासन रखें; शुक्रवार को श्वेत वस्तु/खीर दान व महालक्ष्मी स्तुति से सुख-सौहार्द बढ़ेगा।"};case"moon":return{title:`चंद्र का अस्त (^) / अमावस्या सान्निध्य — भाव ${W} (${S})`,line1:`चंद्रमा ${S} राशि (${W}वें भाव) में सूर्य के निकट होने से मन अत्यधिक संवेदनशील रह सकता है तथा भावनात्मक उतार-चढ़ाव निर्णय को प्रभावित कर सकते हैं।`,line2:"सावधानी: प्रातः प्राणायाम, पर्याप्त नींद और सोमवार को शिवलिंग पर जल अर्पण से मानसिक एकाग्रता व शांति सुदृढ़ होगी।"};default:return{title:`${j} का अस्त (^) प्रभाव — भाव ${W} (${S})`,line1:`${j} ${S} राशि (${W}वें भाव) में सूर्य के अत्यंत निकट होने से इस भाव के फलों को पूर्ण रूप से प्रकट होने में संयमित प्रयास की आवश्यकता रहती है।`,line2:"सावधानी: इस भाव से जुड़े बड़े निर्णय शांत चिंतन व अनुभवी सलाह से लें और संबंधित ग्रह के सात्विक मंत्र का अभ्यास करें।"}}};for(const v of e.planets){const j=v.hindiName.split(" ")[0];if(v.isDebilitated)k.push({title:`${j} का नीच राशि प्रभाव (भाव ${v.houseInLagna})`,line1:`${j} ${v.rashiName.split(" ")[0]} राशि में संवेदनशील स्थिति में हैं, जिससे इस भाव के फल प्रारंभ में धीमे मिल सकते हैं।`,line2:"सावधानी: इस क्षेत्र में जल्दबाजी से बचें; धैर्यपूर्वक अभ्यास और संबंधित सात्विक दान से यही ग्रह शानदार परिपक्व फल देगा।",priority:95});else if(v.isCombust){const S=x(v);k.push({title:S.title,line1:S.line1,line2:S.line2,priority:85})}}const C=e.phase2Jyotish?.yogasAndDoshas.doshas.allList||[];for(const v of C)v.effectiveStatus!=="दोष मुक्त"&&k.push({title:`${v.nameHi} (${v.effectiveStatus})`,line1:`${v.explanationHi.slice(0,145)}${v.explanationHi.length>145?"...":""}`,line2:`सरल समाधान: ${v.remedyHi}`,priority:v.effectiveStatus==="प्रबल सक्रिय"?92:78});const M=e.phase2Jyotish?.liveGochar.sadeSatiPhase;M&&M!=="NONE"&&k.push({title:`शनि गोचर अनुशासन काल (${e.phase2Jyotish?.liveGochar.sadeSatiLabelHi})`,line1:"वर्तमान में शनि गोचर आपको अनुशासन, समय-प्रबंधन और यथार्थवादी योजना अपनाने की प्रेरणा दे रहा है।",line2:"सावधानी: उधार/जोखिम भरे निवेश से बचें; शनिवार को पीपल के नीचे दीपक व हनुमान चालीसा पाठ से मानसिक शांति रहेगी।",priority:88});const R=L[L.length-1];if(R&&R.pts<26){const v=e.lagnaChart[R.house-1]?.bhavaTitle||`भाव ${R.house}`;k.push({title:`${R.house}वें भाव में अतिरिक्त प्रयास संकेत (${R.pts} SAV बिंदु)`,line1:`अष्टकवर्ग में ${v} के बिंदु औसत (28) से कम हैं, जिसका अर्थ है कि इस विषय में व्यवस्थित योजना आवश्यक है।`,line2:"सावधानी: इस भाव से जुड़े बड़े कदम सोच-समझकर और शुभ दशा/गोचर में उठाने से परिणाम सहज व सकारात्मक रहेंगे।",priority:72})}const h=[],z=new Set;for(const v of k.sort((j,S)=>S.priority-j.priority)){const j=v.title.slice(0,16);if(!z.has(j)&&(z.add(j),h.push(v),h.length===3))break}const I=[{title:"भावनात्मक निर्णयों में संयम एवं धैर्य",line1:"किसी भी बड़े आर्थिक या पारिवारिक निर्णय को तात्कालिक आवेश के बजाय शांत मन और तथ्यों के आधार पर लें।",line2:"सावधानी: महत्वपूर्ण समझौतों से पूर्व लिखित स्पष्टता रखें और परिवार के वरिष्ठों का मार्गदर्शन लें।",priority:50},{title:"स्वास्थ्य व दिनचर्या में नियमितता",line1:"कार्य की व्यस्तता के बीच नियमित योग, प्राणायाम और संतुलित सात्विक भोजन आपकी ऊर्जा को दीर्घकाल तक बनाए रखेगा।",line2:"सावधानी: रात्रि जागरण और तनाव से बचें; प्रातःकाल का सूर्य प्रकाश आपके लग्न बल को स्वतः बढ़ाता है।",priority:45},{title:"दशा-गोचर के अनुरूप समय प्रबंधन",line1:"हर वर्ष एक जैसा नहीं होता — अनुकूल दशा में विस्तार करें और मध्यम समय में कौशल व बचत मजबूत करें।",line2:"सावधानी: इस पुस्तक के 5-वर्षीय रोडमैप को देखकर अपने प्रमुख लक्ष्यों की समय-सारणी तय करें।",priority:40}];for(const v of I){if(h.length>=3)break;h.push(v)}const N=at[w]||e.panchang.lagnaLord.split(" ")[0],F=at[s]||"पंचमेश",A=at[m]||"नवमेश",O=`आपका व्यक्तित्व (${e.panchang.lagnaName} लग्न, लग्नेश ${N} — भाव ${y?.houseInLagna||1}), आपकी सृजनशील बुद्धि (पंचमेश ${F} — भाव ${b?.houseInLagna||5}) और आपका भाग्योदय (नवमेश ${A} — भाव ${$?.houseInLagna||9}) एक स्पष्ट सूत्र देते हैं: "${e.panchang.tatva} तत्व की अपनी स्वाभाविक शक्ति को अनुशासन और सत्यनिष्ठा से जोड़ें, ${e.lucky.ishtaDevta} के स्मरण से प्रत्येक शुभ कार्य प्रारंभ करें, और दूसरों की नकल के बजाय अपने मौलिक विवेक पर चलें — यही आपके जीवन की स्थायी समृद्धि और सम्मान का मूल मंत्र है।"`;return{sectionCode:"EX",sectionTag:"1-मिनट सार (Executive Summary)",html:`
    ${l("डिजिटल ज्योतिषाचार्य सार : कुंडली का 1-मिनट सार (Executive Summary)",p,d)}
    ${c("EX","कुंडली का 1-मिनट सार (Executive Summary) — एक दृष्टि में संपूर्ण जीवन-दिशा",`${e.panchang.lagnaName} लग्न • ${e.panchang.moonRashiName} राशि`)}

    <div class="book-card" style="background: ${t.emeraldSoft}; border: 1.5px solid #10B981; border-radius: 10px; padding: 10px 13px; margin-bottom: 10px; page-break-inside: avoid;">
      <div style="font-size: 10.2px; font-weight: 900; color: #065F46; margin-bottom: 6px; border-bottom: 1px dashed #34D399; padding-bottom: 4px;">
        ✦ आपकी कुंडली के शीर्ष 3 सबसे प्रबल योग एवं शुभ शक्तियाँ (Top 3 Strengths)
      </div>
      ${P.map((v,j)=>`
          <div style="background: #FFFFFF; border: 1px solid #A7F3D0; border-left: 4px solid #059669; border-radius: 7px; padding: 7px 10px; margin-top: ${j===0?0:7}px; page-break-inside: avoid;">
            <div style="font-size: 9.2px; font-weight: 900; color: ${t.cosmicNavy};">${j+1}. ${n(v.title)}</div>
            <div style="font-size: 8.3px; color: ${t.inkPrimary}; line-height: 1.48; margin-top: 2px;">${n(v.line1)}</div>
            <div style="font-size: 8.1px; color: #065F46; font-weight: 700; line-height: 1.45; margin-top: 2px;">${n(v.line2)}</div>
          </div>`).join("")}
    </div>

    <div class="book-card" style="background: ${t.saffronSoft}; border: 1.5px solid ${t.templeGold}; border-radius: 10px; padding: 10px 13px; margin-bottom: 10px; page-break-inside: avoid;">
      <div style="font-size: 10.2px; font-weight: 900; color: ${t.saffronDeep}; margin-bottom: 6px; border-bottom: 1px dashed ${t.templeGold}; padding-bottom: 4px;">
        ✦ शीर्ष 3 ध्यान देने योग्य विषय एवं व्यावहारिक सावधानियाँ (Top 3 Precautions)
      </div>
      ${h.map((v,j)=>`
          <div style="background: #FFFFFF; border: 1px solid ${t.borderMuted}; border-left: 4px solid ${t.saffron}; border-radius: 7px; padding: 7px 10px; margin-top: ${j===0?0:7}px; page-break-inside: avoid;">
            <div style="font-size: 9.2px; font-weight: 900; color: ${t.cosmicNavy};">${j+1}. ${n(v.title)}</div>
            <div style="font-size: 8.3px; color: ${t.inkPrimary}; line-height: 1.48; margin-top: 2px;">${n(v.line1)}</div>
            <div style="font-size: 8.1px; color: ${t.saffronDeep}; font-weight: 700; line-height: 1.45; margin-top: 2px;">${n(v.line2)}</div>
          </div>`).join("")}
    </div>

    <div class="book-card" style="background: linear-gradient(135deg, ${t.cosmicNavy} 0%, #1E293B 100%); border: 2px solid ${t.templeGold}; border-radius: 10px; padding: 11px 14px; color: ${t.warmIvory}; page-break-inside: avoid;">
      <div style="font-size: 10px; font-weight: 900; color: #FDE68A; margin-bottom: 5px;">
        ★ आपका व्यक्तिगत जीवन सफलता मंत्र (लग्नेश ${n(N)} + पंचमेश ${n(F)} + नवमेश ${n(A)} समन्वय)
      </div>
      <div style="font-size: 8.5px; color: #F8FAFC; line-height: 1.62;">
        ${n(O)}
      </div>
      <div style="margin-top: 6px; padding-top: 5px; border-top: 1px dashed rgba(212, 175, 55, 0.5); font-size: 7.8px; color: #FCD34D; font-weight: 700; text-align: right;">
        — ${n(wt.founderHi)} (पण्डित जी ऑनलाइन)
      </div>
    </div>
  `}}function ze(e,r){const{esc:n,buildBookPageHeader:l,buildSectionTitleBar:c,personHeader:p,appLogo:d}=r,i=e.panchang.lagnaNumber||1,w=e.phase2Jyotish,s=w?.vimshottari,m=w?.liveGochar,y=s?.activeMahadasha,b=s?.activeAntardasha,$=y?.lordId||"jupiter",D=b?.lordId||"mercury",L=K(e,$),P=K(e,D),E=jt(i,$),k=jt(i,D),x=m?.grahaRows.find(F=>F.id==="saturn"),C=m?.grahaRows.find(F=>F.id==="jupiter"),M=E==="yogakaraka"||E==="lagna"||E==="trikona",R=k==="yogakaraka"||k==="lagna"||k==="trikona",h=!!C?.isFavorableFromMoon,z=!!x?.isFavorableFromMoon,I=[{title:"1. करियर एवं व्यापार (Career & Business)",icon:"◆",tone:M||h?"प्रगति एवं विस्तार का काल":"स्थिर कर्म व कौशल निर्माण काल",color:M||h?t.emerald:t.saffronDeep,outlook:`वर्तमान में ${y?.lordHindi||"मुख्य"} महादशा (भाव ${L?.houseInLagna||1}) और ${b?.lordHindi||"सक्रिय"} अंतर्दशा (भाव ${P?.houseInLagna||10}) के साथ गोचर गुरु आपकी चंद्र राशि से ${C?.houseFromNatalMoon||5}वें (लग्न से ${C?.houseFromNatalLagna||5}वें) और शनि चंद्र से ${x?.houseFromNatalMoon||10}वें (लग्न से ${x?.houseFromNatalLagna||10}वें) भाव में हैं। अगले 6–12 महीनों में ${M||R?"नई जिम्मेदारियां, पदोन्नति या व्यवसाय विस्तार के स्पष्ट अवसर बनेंगे; आपकी कार्यक्षमता की सराहना होगी।":"निरंतर परिश्रम और धैर्य से नींव मजबूत होगी; जल्दबाजी में नौकरी या बड़ा साझेदारी परिवर्तन टालना समझदारी होगी।"}`,action:h?"सलाह: नए प्रोजेक्ट या कौशल उन्नयन की शुरुआत करने के लिए यह 6–12 माह अत्यंत अनुकूल हैं।":"सलाह: वर्तमान कार्यस्थल पर गुणवत्ता व अनुशासन बढ़ाएं; कागजी अनुबंध ध्यानपूर्वक पढ़ें।"},{title:"2. धन-संपत्ति एवं निवेश (Finance & Wealth)",icon:"◆",tone:h&&z?"सुदृढ़ धनागमन एवं बचत योग":h||M?"संतुलित आय व क्रमिक वृद्धि":"बजट अनुशासन व सुरक्षित निवेश काल",color:h?t.emerald:t.saffronDeep,outlook:`आपकी कुंडली के धन भाव (SAV ${Dt(e,2)} बिंदु) व लाभ भाव (SAV ${Dt(e,11)} बिंदु) पर सक्रिय ${b?.lordHindi||""} अंतर्दशा व गुरु गोचर (${C?.currentRashiNameHi||""}) का सीधा प्रभाव है। ${h?"अटके हुए धन की प्राप्ति, आय के नए स्रोत और परिवार में शुभ निवेश के सुंदर संकेत बन रहे हैं।":"आय नियमित रहेगी, परंतु आकस्मिक घरेलू या व्यावसायिक व्यय बढ़ सकते हैं; सट्टेबाजी या उच्च जोखिम वाले निवेश से दूरी रखें।"}`,action:"सलाह: मासिक आय का कम से कम 20% सुरक्षित बचत में रखें और किसी को बिना लिखित सुरक्षा बड़ा कर्ज न दें।"},{title:"3. स्वास्थ्य एवं मानसिक ऊर्जा (Health & Vitality)",icon:"◆",tone:m?.sadeSatiPhase&&m.sadeSatiPhase!=="NONE"?"दिनचर्या व विश्राम पर विशेष ध्यान":"संतुलित ऊर्जा एवं उत्साह",color:m?.sadeSatiPhase&&m.sadeSatiPhase!=="NONE"?t.crimson:t.emerald,outlook:`शनि गोचर (${x?.currentRashiNameHi||""}, चंद्र से ${x?.houseFromNatalMoon||1}वां भाव — ${m?.sadeSatiLabelHi||"सामान्य"}) तथा जन्म नाड़ी (${e.panchang.nadi}) के अनुसार अगले 6–12 महीनों में ${z&&!L?.isDebilitated?"आपका मनोबल और शारीरिक स्फूर्ति अच्छी बनी रहेगी; पुरानी थकान से राहत मिलेगी।":"कार्यभार के कारण तनाव, नींद की कमी या पाचन/जोड़ों की थकान महसूस हो सकती है, जिसे नियमित व्यायाम से आसानी से नियंत्रित किया जा सकता है।"}`,action:"सलाह: प्रतिदिन 20 मिनट प्राणायाम/टहलना, पर्याप्त जल सेवन और समय पर रात्रि भोजन को अनिवार्य नियम बनाएं।"},{title:"4. परिवार एवं दांपत्य सुख (Family & Relationships)",icon:"◆",tone:h||D==="venus"||D==="jupiter"?"मधुर सामंजस्य व मांगलिक योग":"संवाद व धैर्य से मधुरता",color:h||D==="venus"||D==="jupiter"?t.emerald:t.saffronDeep,outlook:`देवगुरु बृहस्पति का ${C?.houseFromNatalLagna||5}वें लग्न भाव में गोचर तथा ${y?.lordHindi||""}–${b?.lordHindi||""} दशा अवधि परिवार में ${h||D==="venus"||D==="jupiter"?"आपसी स्नेह, शुभ उत्सव, तीर्थयात्रा और जीवनसाथी के साथ बेहतर तालमेल के योग बना रही है।":"व्यस्तता के कारण संवाद की कमी ला सकती है; छोटी बातों को तूल न दें और परिवार के साथ गुणवत्तापूर्ण समय बिताएं।"}`,action:"सलाह: सप्ताह में एक दिन परिवार के साथ शांत संवाद व सात्विक पूजन करें — इससे घर का वातावरण सकारात्मक रहेगा।"}];return{sectionCode:"DJ1",sectionTag:"वर्तमान समय विश्लेषण (दशा + गोचर)",html:`
    ${l("डिजिटल ज्योतिषाचार्य : वर्तमान समय का सटीक विश्लेषण",p,d)}
    ${c("DJ1","वर्तमान समय का सटीक विश्लेषण — सक्रिय दशा + लाइव गुरु/शनि गोचर समन्वय",`आकलन तिथि: ${m?.computedAtDateHi||"आज"}`)}

    <div class="book-card" style="background: ${t.cosmicNavy}; color: ${t.warmIvory}; border: 1.8px solid ${t.templeGold}; border-radius: 10px; padding: 9px 13px; margin-bottom: 10px; page-break-inside: avoid;">
      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; font-size: 8px; text-align: center;">
        <div style="background: rgba(255,255,255,0.08); border: 1px solid rgba(212,175,55,0.45); border-radius: 7px; padding: 6px;">
          <div style="color:#FCD34D; font-weight:700;">सक्रिय महादशा</div>
          <div style="font-size: 10px; font-weight: 900; margin-top: 2px;">${n(y?.lordHindi||"—")}</div>
          <div style="color:#CBD5E1; font-size:7.2px; white-space:nowrap;">${n(y?.endDateHi||"")} तक</div>
        </div>
        <div style="background: rgba(255,255,255,0.08); border: 1px solid rgba(212,175,55,0.45); border-radius: 7px; padding: 6px;">
          <div style="color:#FCD34D; font-weight:700;">सक्रिय अंतर्दशा</div>
          <div style="font-size: 10px; font-weight: 900; margin-top: 2px;">${n(b?.lordHindi||"—")}</div>
          <div style="color:#CBD5E1; font-size:7.2px; white-space:nowrap;">${n(b?.endDateHi||"")} तक</div>
        </div>
        <div style="background: rgba(255,255,255,0.08); border: 1px solid rgba(212,175,55,0.45); border-radius: 7px; padding: 6px;">
          <div style="color:#FCD34D; font-weight:700;">लाइव गुरु गोचर</div>
          <div style="font-size: 9.5px; font-weight: 900; margin-top: 2px;">${n(C?.currentRashiNameHi||"—")}</div>
          <div style="color:#6EE7B7; font-size:7.2px;">चंद्र ${C?.houseFromNatalMoon||"-"}वां • लग्न ${C?.houseFromNatalLagna||"-"}वां</div>
        </div>
        <div style="background: rgba(255,255,255,0.08); border: 1px solid rgba(212,175,55,0.45); border-radius: 7px; padding: 6px;">
          <div style="color:#FCD34D; font-weight:700;">लाइव शनि गोचर</div>
          <div style="font-size: 9.5px; font-weight: 900; margin-top: 2px;">${n(x?.currentRashiNameHi||"—")}</div>
          <div style="color:#FDE68A; font-size:7.2px;">चंद्र ${x?.houseFromNatalMoon||"-"}वां • लग्न ${x?.houseFromNatalLagna||"-"}वां</div>
        </div>
      </div>
      <div style="margin-top: 7px; font-size: 8.1px; color: #E2E8F0; line-height: 1.48; text-align: center;">
        <b>द्वि-गोचर सक्रियता:</b> ${n(m?.doubleTransitSummaryHi||"गुरु एवं शनि का संयुक्त गोचर जीवन के प्रमुख लक्ष्यों को दिशा दे रहा है।")}
      </div>
    </div>

    <div style="display: flex; flex-direction: column; gap: 9px;">
      ${I.map(F=>`
          <div class="book-card" style="background: ${t.pureIvory}; border: 1.4px solid ${t.templeGold}; border-left: 4.5px solid ${F.color}; border-radius: 9px; padding: 9px 12px; page-break-inside: avoid;">
            <div style="display: table; width: 100%; margin-bottom: 4px;">
              <div style="display: table-cell; font-size: 9.8px; font-weight: 900; color: ${t.cosmicNavy};">${F.icon} ${n(F.title)}</div>
              <div style="display: table-cell; text-align: right; font-size: 8px; font-weight: 800; color: ${F.color}; white-space: nowrap;">${n(F.tone)}</div>
            </div>
            <div style="font-size: 8.4px; color: ${t.inkPrimary}; line-height: 1.54;">${n(F.outlook)}</div>
            <div style="margin-top: 5px; padding: 4px 8px; background: ${t.warmIvory}; border-radius: 5px; font-size: 8px; font-weight: 800; color: ${t.saffronDeep}; line-height: 1.45;">
              ${n(F.action)}
            </div>
          </div>`).join("")}
    </div>
  `}}function Ee(e,r){const{esc:n,buildBookPageHeader:l,buildSectionTitleBar:c,personHeader:p,appLogo:d}=r,i=e.panchang.lagnaNumber||1,w=it(i,10),s=it(i,7),m=it(i,6),y=it(i,2),b=it(i,11),$=it(i,4),D=it(i,5),L=it(i,9),P=it(i,12),E=it(i,8),k=it(i,1),x=K(e,w),C=K(e,s),M=K(e,m),R=K(e,y),h=K(e,b),z=K(e,$),I=K(e,D),N=K(e,L),F=K(e,P),A=K(e,E),O=K(e,k),q=K(e,"mercury"),v=K(e,"saturn"),j=K(e,"venus"),S=K(e,"jupiter"),W=K(e,"mars"),V=K(e,"rahu"),Y=K(e,"moon"),ot=(_t(e,"mercury")>=1?2:0)+([1,2,7,10,11].includes(C?.houseInLagna||0)?2:0)+(Dt(e,7)>=28?1:0)+(q&&[1,2,7,10,11].includes(q.houseInLagna)?2:0),pt=(_t(e,"saturn")>=1?2:0)+([1,6,10,11].includes(M?.houseInLagna||0)?2:0)+(Dt(e,6)>=28?1:0)+(v&&[1,6,10,11].includes(v.houseInLagna)?2:0),gt=ot>pt+1?"स्वतंत्र व्यापार, परामर्श या उद्यमिता में विशेष सफलता":pt>ot+1?"उच्च सेवा, कॉर्पोरेट/प्रशासनिक नौकरी व विशेषज्ञ पद अधिक अनुकूल":"नौकरी के साथ अनुभव लेकर आगे स्वतंत्र कार्य/व्यवसाय — दोनों में श्रेष्ठ संतुलन",X=Dt(e,2),st=Dt(e,11),Z=X>=28&&st>=28?"अत्यंत सुदृढ़ धन संचय एवं बहु-स्रोत आय योग":st>=28?"नियमित अच्छी आमदनी — व्यवस्थित बचत से स्थायी समृद्धि":"अनुशासित वित्तीय योजना व दीर्घकालिक निवेश से स्थिर संपत्ति निर्माण",ct=Dt(e,4),rt=e.phase1Astronomy?.shodashavarga.find(u=>u.spec.id==="D4")?.ascendantRashiNameHi||Xt[le(i,4)-1],nt=ct>=28||z&&[1,4,5,9,10,11].includes(z.houseInLagna),kt=e.deepAnalysis?.navamshaAndCareerDepth.d9Lagna||e.navamsaChart[0]?.rashiName||"",yt=e.doshaAnalysis.manglik.isManglik?"कुंडली में मंगल प्रभाव होने से विवाह पूर्व अष्टकूट व मंगल मिलान अवश्य कराएं।":"कुंडली मांगलिक बाधा से मुक्त/परिहार युक्त है, जो वैवाहिक सामंजस्य के लिए शुभ संकेत है।",Nt=e.phase1Astronomy?.shodashavarga.find(u=>u.spec.id==="D7"),mt=e.phase1Astronomy?.shodashavarga.find(u=>u.spec.id==="D24"),St=Dt(e,5),ht=[N&&[9,12].includes(N.houseInLagna),F&&[1,9,10,12].includes(F.houseInLagna),V&&[1,4,7,9,10,12].includes(V.houseInLagna),Y&&[7,9,12].includes(Y.houseInLagna)].filter(Boolean).length,Mt=ht>=2?"विदेश यात्रा, विदेशी कंपनी/आय या जन्मस्थान से दूर बड़ी सफलता के प्रबल योग":ht===1?"कार्य या तीर्थ हेतु विदेश/दूरस्थ यात्राओं के अच्छे अवसर":"स्वदेश अथवा अपने गृह-क्षेत्र में ही अधिक स्थिर और सम्मानजनक उन्नति के योग",zt=e.panchang.nadi.includes("आदि")?"वात प्रकृति (आदि नाड़ी) — जोड़ों, गैस, अनिद्रा व त्वचा की नमी का ध्यान रखें":e.panchang.nadi.includes("मध्य")?"पित्त प्रकृति (मध्य नाड़ी) — एसिडिटी, अधिक गर्मी, रक्तचाप व नेत्र विश्राम का ध्यान रखें":"कफ प्रकृति (अन्त्य नाड़ी) — सर्दी-जुकाम, साइनस, श्वसन व वजन संतुलन का ध्यान रखें",xt=Date.now(),$t=e.phase1Astronomy?.spaceTime.utcEpochMs||xt-(e.input.ageYears||25)*365.2425*864e5,Lt=e.phase2Jyotish?.vimshottari;let lt="आगामी शुभ त्रिकोण/योगकारक दशा काल",vt="आपकी कुंडली के शुभ ग्रहों की आगामी दशा में करियर, धन और प्रतिष्ठा का उत्कर्ष होगा।";if(Lt){let u=-999,f=null;const H=B=>{const G=jt(i,B),J=K(e,B),Ft=_t(e,B);let et=G==="yogakaraka"?40:G==="lagna"?32:G==="trikona"?30:G==="kendra"?20:G==="dusthana"?-15:8;return J?.isExalted?et+=20:J?.dignity.includes("स्वगृही")?et+=15:J?.isDebilitated&&(et-=15),J&&[1,4,5,9,10,11].includes(J.houseInLagna)&&(et+=10),et+=Math.round((Ft-1)*15),et};for(const B of Lt.mahadashas){if(B.endUtcMs<xt)continue;const G=H(B.lordId);for(const J of B.antardashas){if(J.endUtcMs<xt||(J.startUtcMs-$t)/(365.2425*864e5)>82)continue;const et=G*.6+H(J.lordId)*.4;if(et>u){u=et;const Tt=Math.max(0,Number(((J.startUtcMs-$t)/(365.2425*864e5)).toFixed(1))),Vt=Math.max(Tt,Number(((J.endUtcMs-$t)/(365.2425*864e5)).toFixed(1)));f={title:`${B.lordHindi} महादशा – ${J.lordHindi} अंतर्दशा`,startHi:J.startDateHi,endHi:J.endDateHi,ageStart:Tt,ageEnd:Vt,reason:`इस काल में महादशा स्वामी ${B.lordHindi} एवं अंतर्दशा स्वामी ${J.lordHindi} आपकी कुंडली के शुभ भावों को संयुक्त रूप से सक्रिय करेंगे`}}}}f&&(lt=`${f.title} (${f.startHi} → ${f.endHi} • आयु ${f.ageStart}–${f.ageEnd} वर्ष)`,vt=`${f.reason}। यह अवधि आपके जीवन में बड़ा पद, स्थायी संपत्ति, वित्तीय उछाल और सामाजिक सम्मान दिलाने वाला प्रमुख स्वर्णिम चरण सिद्ध होगी।`)}const ut=m===k?`लग्नेश ${at[k]} (भाव ${O?.houseInLagna||1})`:`षष्ठेश ${at[m]} (भाव ${M?.houseInLagna||6})`,o=(()=>{const u=[`लग्नेश ${at[k]} (${O?.dignity||"संतुलित"}, भाव ${O?.houseInLagna||1})`];return m!==k&&u.push(`षष्ठेश ${at[m]} (भाव ${M?.houseInLagna||6})`),E!==k&&E!==m&&u.push(`अष्टमेश ${at[E]} (भाव ${A?.houseInLagna||8})`),u.join(", ")})(),g=[{qNo:1,question:"नौकरी बेहतर है या स्वयं का व्यापार (Job vs Business)?",badge:gt,answer:`दशमेश ${at[w]} (भाव ${x?.houseInLagna||10}, ${x?.dignity||"संतुलित"}), सप्तमेश ${at[s]} (भाव ${C?.houseInLagna||7}), ${ut} तथा बुध/शनि के षड्बल तुलना से स्पष्ट है कि आपके लिए "${gt}" सर्वाधिक लाभकारी रहेगा। दशमांश (D-10 लग्न: ${e.deepAnalysis?.navamshaAndCareerDepth.d10Lagna||e.panchang.lagnaName}) भी कर्म-क्षेत्र में निरंतर प्रतिष्ठा व नेतृत्व की पुष्टि करता है।`},{qNo:2,question:"धन संचय, आय और आर्थिक स्थिरता कैसी रहेगी?",badge:`धन भाव SAV: ${X} • लाभ भाव SAV: ${st}`,answer:`आपकी कुंडली में द्वितीय (धन) भाव में ${X} अष्टकवर्ग बिंदु व धनेश ${at[y]} (भाव ${R?.houseInLagna||2}) तथा एकादश (लाभ) भाव में ${st} बिंदु व लाभेश ${at[b]} (भाव ${h?.houseInLagna||11}) स्थित हैं। निष्कर्ष: ${Z}। आय बढ़ने के साथ व्यवस्थित बचत व स्थायी संपत्ति में निवेश आपको आर्थिक रूप से पूर्ण सुरक्षित बनाएगा।`},{qNo:3,question:"अपना घर (अचल संपत्ति) और वाहन सुख कैसा मिलेगा?",badge:`चतुर्थ भाव SAV: ${ct} • D-4 लग्न: ${rt}`,answer:`चतुर्थ (सुख-भवन) भाव में ${ct} बिंदु, चतुर्थेश ${at[$]} (भाव ${z?.houseInLagna||4}), भूमि कारक मंगल (भाव ${W?.houseInLagna||1}) व वाहन कारक शुक्र (भाव ${j?.houseInLagna||1}) तथा चतुर्थांश (D-4 लग्न: ${rt}) के अनुसार ${nt?"स्वयं के सुंदर आवास, भूखंड और उत्तम वाहन सुख के प्रबल योग हैं। चतुर्थेश/शुक्र की दशा में संपत्ति निर्माण विशेष रूप से सफल होगा।":"परिश्रम और सुव्यवस्थित बचत के बल पर जीवन के मध्य चरण में स्थायी मकान व वाहन सुख अवश्य प्राप्त होगा; संपत्ति क्रय में कागजी जांच पूर्ण रखें।"}`},{qNo:4,question:"विवाह, जीवनसाथी का स्वभाव और दांपत्य सुख कैसा रहेगा?",badge:`सप्तमेश: ${at[s]} • D-9 लग्न: ${kt.split(" ")[0]||""}`,answer:`सप्तम भाव के स्वामी ${at[s]} (भाव ${C?.houseInLagna||7}, ${C?.dignity||""}), विवाह कारक शुक्र (भाव ${j?.houseInLagna||7}) व गुरु (भाव ${S?.houseInLagna||5}) और नवांश कुंडली (D-9 लग्न: ${kt}) से संकेत मिलता है कि जीवनसाथी समझदार, सहयोगी एवं परिवार-प्रेमी होंगे। ${yt}`},{qNo:5,question:"संतान सुख और उच्च शिक्षा की स्थिति कैसी रहेगी?",badge:`पंचम भाव SAV: ${St} • D-7: ${Nt?.ascendantRashiNameHi||"शुभ"} • D-24: ${mt?.ascendantRashiNameHi||"शुभ"}`,answer:`पंचम भाव के स्वामी ${at[D]} (भाव ${I?.houseInLagna||5}, SAV ${St} बिंदु), संतान-ज्ञान कारक देवगुरु बृहस्पति (भाव ${S?.houseInLagna||5}), सप्तांश (D-7 लग्न: ${Nt?.ascendantRashiNameHi||"शुभ"}) व चतुर्विंशांश (D-24 लग्न: ${mt?.ascendantRashiNameHi||"शुभ"}) के समन्वय से आपकी ग्रहणशीलता, व्यावहारिक विद्या और संतान-संस्कार अत्यंत सकारात्मक रहेंगे।`},{qNo:6,question:"क्या विदेश यात्रा, विदेशी आय या दूर स्थान में बसने का योग है?",badge:ht>=2?"प्रबल विदेश / दूरस्थ योग":ht===1?"आंशिक यात्रा योग":"स्वदेश प्रधान उन्नति",answer:`नवमेश ${at[L]} (भाव ${N?.houseInLagna||9}), द्वादशेश ${at[P]} (भाव ${F?.houseInLagna||12}), राहु (भाव ${V?.houseInLagna||1}) तथा चंद्रमा (भाव ${Y?.houseInLagna||1}) की स्थिति स्पष्ट करती है: "${Mt}"। राहु या द्वादशेश/नवमेश की अंतर्दशा में दूरस्थ संपर्क व ऑनलाइन/वैश्विक मंच से विशेष लाभ मिलेगा।`},{qNo:7,question:"स्वास्थ्य की दृष्टि से किन बातों का विशेष ध्यान रखें?",badge:`${e.panchang.nadi} • लग्नेश भाव ${O?.houseInLagna||1}`,answer:`आपकी जन्म नाड़ी (${e.panchang.nadi}) के अनुसार: ${zt}। ${o} बताते हैं कि नियमित योग, तनाव-नियंत्रण और मौसमी खानपान अनुशासन से आप दीर्घायु व स्वस्थ रहेंगे।`},{qNo:8,question:'मेरे जीवन का "स्वर्णिम काल (Golden Period)" कब आएगा?',badge:"दशा-बल आधारित सर्वोत्तम चरण",answer:`आपकी विंशोत्तरी दशा, ग्रहों के षड्बल और योगकारक/त्रिकोण स्वामित्व के समग्र विश्लेषण के अनुसार आपका प्रमुख स्वर्णिम काल है: ${lt}। ${vt}`}],T=(u,f,H,B)=>({sectionCode:u,sectionTag:f,html:`
      ${l(`डिजिटल ज्योतिषाचार्य : 8 बड़े सवालों के सीधे जवाब (${H})`,p,d)}
      ${c(u,`आपके जीवन के 8 बड़े सवालों के सीधे, सरल जवाब (${H})`,"जटिल शब्दावली से मुक्त स्पष्ट मार्गदर्शन")}
      <div style="display: flex; flex-direction: column; gap: 11px; margin-top: 4px;">
        ${B.map(G=>`
            <div class="book-card" style="background: ${t.pureIvory}; border: 1.5px solid ${t.templeGold}; border-left: 4.5px solid ${t.saffron}; border-radius: 10px; padding: 10px 13px; page-break-inside: avoid;">
              <div style="display: table; width: 100%; border-bottom: 1px dashed ${t.borderMuted}; padding-bottom: 5px; margin-bottom: 6px;">
                <div style="display: table-cell; vertical-align: middle; font-size: 10px; font-weight: 900; color: ${t.cosmicNavy}; padding-right: 8px;">
                  प्रश्न ${G.qNo}. ${n(G.question)}
                </div>
                <div style="display: table-cell; vertical-align: middle; text-align: right; white-space: nowrap; width: 1%;">
                  <span style="display: inline-block; background: ${t.emeraldSoft}; color: #065F46; border: 1px solid #34D399; border-radius: 999px; padding: 2.5px 9px; font-size: 7.4px; font-weight: 800; line-height: 1.25;">${n(G.badge)}</span>
                </div>
              </div>
              <div style="font-size: 8.6px; color: ${t.inkPrimary}; line-height: 1.58;">
                <b style="color:${t.saffronDeep};">सीधा उत्तर:</b> ${n(G.answer)}
              </div>
            </div>`).join("")}
      </div>
    `});return[T("DJ2","8 बड़े सवाल (प्रश्न 1–4)","भाग 1/2 : प्रश्न 1 से 4",g.slice(0,4)),T("DJ3","8 बड़े सवाल (प्रश्न 5–8)","भाग 2/2 : प्रश्न 5 से 8",g.slice(4,8))]}function Me(e,r){const{esc:n,buildBookPageHeader:l,buildSectionTitleBar:c,personHeader:p,appLogo:d}=r,i=Date.now(),w=new Date(i).getFullYear(),s=e.panchang.lagnaNumber||1,m=e.panchang.moonRashiNumber||1,y=e.phase2Jyotish?.vimshottari,b=e.phase2Jyotish?.liveGochar,$={1:"आत्मचिंतन, स्वास्थ्य नियम और दीर्घकालिक दिशा तय करने का समय बनता है",2:"धन-संचय, वाणी प्रभाव और परिवार में मांगलिक कार्यों के सुंदर योग बनते हैं",3:"नए संपर्क, छोटी यात्राओं और स्वप्रयास से कार्य विस्तार का योग बनता है",4:"गृह-सुख, वाहन/संपत्ति योजना और पारिवारिक स्थिरता पर ध्यान केंद्रित रहता है",5:"विद्या, संतान सुख, सृजनशील सफलता और विवेकपूर्ण निवेश में विशेष लाभ मिलता है",6:"प्रतिस्पर्धा में विजय, सेवा-अनुशासन और ऋण/विवाद समाधान के अवसर बनते हैं",7:"दांपत्य सौहार्द, व्यापारिक साझेदारी और सामाजिक प्रतिष्ठा में स्पष्ट वृद्धि होती है",8:"गहन शोध, आध्यात्मिक परिपक्वता और आर्थिक निर्णयों में सतर्कता की अपेक्षा रहती है",9:"भाग्योदय, वरिष्ठों का आशीर्वाद, तीर्थयात्रा और बड़े अवसरों की प्राप्ति होती है",10:"कर्म-क्षेत्र में पदोन्नति, नई जिम्मेदारी और व्यावसायिक पहचान सुदृढ़ होती है",11:"बहु-स्रोत आय, रुके धन की प्राप्ति और महत्वाकांक्षाओं की पूर्ति का प्रबल योग बनता है",12:"विदेश/बाहरी संपर्क, दान-पुण्य और व्यय के सुनियोजित प्रबंधन पर बल रहता है"},D={1:"जन्म-शनि (साढ़ेसाती मध्य) होने से स्वास्थ्य, धैर्य और समय-प्रबंधन को सर्वोच्च प्राथमिकता दें",2:"साढ़ेसाती उत्तरार्ध में वाणी-संयम, सुरक्षित बचत और पारिवारिक संवाद से स्थायी लाभ उठाएं",3:"तृतीय भाव के परम शुभ शनि गोचर का लाभ उठाकर साहसी विस्तार, नया प्रोजेक्ट व नेटवर्किंग आगे बढ़ाएं",4:"चतुर्थ ढैय्या में माता/गृह-संपत्ति व कार्यस्थल के कागजात की पूरी जांच के बाद ही बड़ा निर्णय लें",5:"पंचम शनि में सट्टेबाजी टालकर कौशल उन्नयन, शोध और संतान/शिक्षा योजना को सुव्यवस्थित करें",6:"षष्ठ भाव के अत्यंत शुभ शनि गोचर में करियर-लक्ष्य, प्रतिस्पर्धा व पुराने ऋण समाप्ति पर जोर दें",7:"सप्तम शनि में व्यापारिक साझेदारी व वैवाहिक संवाद में पारदर्शिता और लिखित स्पष्टता बनाए रखें",8:"अष्टम ढैय्या में जोखिम भरे निवेश व उधार से दूर रहें तथा नियमित योग-साधना को नियम बनाएं",9:"नवम शनि में दीर्घकालिक लक्ष्य, उच्च प्रशिक्षण व धर्मसम्मत कर्म से भाग्योदय की नींव मजबूत करें",10:"दशम शनि में कड़ी मेहनत, अनुशासन और प्रशासनिक कौशल से स्थायी पद-प्रतिष्ठा अर्जित करें",11:"एकादश भाव के श्रेष्ठ लाभकारी शनि गोचर में संपत्ति क्रय, आय विस्तार और बड़े निवेश साकार करें",12:"साढ़ेसाती प्रथम चरण में अनावश्यक व्यय पर नियंत्रण रखें और विदेश/ऑनलाइन अवसरों की योजना बनाएं"},L={sun:"नेतृत्व, राजकीय/प्रशासनिक कार्य व आत्मसम्मान",moon:"मानसिक शांति, जनसंपर्क, गृह-सुख व रचनात्मकता",mars:"पराक्रम, तकनीकी दक्षता, भूमि-संपत्ति व ऊर्जा",mercury:"व्यापार, संवाद, लेखन, वित्त व विश्लेषणात्मक कौशल",jupiter:"ज्ञान, धन-वृद्धि, संतान/शिक्षा व शुभ मांगलिक उन्नति",venus:"सुख-सुविधा, कला, वाहन-ऐश्वर्य व दांपत्य/साझेदारी सौहार्द",saturn:"दीर्घकालिक करियर निर्माण, अनुशासन, सेवा व स्थायी संपत्ति",rahu:"नवीन तकनीक, दूरस्थ/विदेशी संपर्क व तीव्र महत्वाकांक्षा",ketu:"गहन शोध, विशेषज्ञता, आध्यात्मिक एकाग्रता व सूक्ष्म विवेक"},P=(h,z)=>{const I=Ut(s,h),N=L[h]||"कर्म एवं व्यक्तिगत विकास";if(h==="rahu"||h==="ketu")return{houseClause:`${K(e,h)?.houseInLagna||1}वें भाव स्थित ${z} अंतर्दशा (${N})`,natureTone:h==="rahu"?"अप्रत्याशित अवसर, नवाचार और बाहरी नेटवर्क को सक्रिय करती है":"गहन एकाग्रता, शोध और अनावश्यक उलझनों से मुक्ति दिलाती है",actionFocus:h==="rahu"?"आधुनिक तकनीक व दूरस्थ संपर्क का लाभ लें, पर भ्रामक सौदों से बचें":"विशेषज्ञ कौशल निखारें और शांत विवेक से निर्णय लें"};const F=jt(s,h),A=I.some(q=>q===2||q===7)&&!I.includes(1)&&!I.some(q=>q===5||q===9),O=I.length>0?`भाव ${I.join("/")}`:"प्रमुख भाव";return F==="yogakaraka"?{houseClause:`योगकारक ${z} अंतर्दशा (${O} स्वामी — ${N})`,natureTone:"राजयोगकारी उन्नति, पदोन्नति और स्थायी समृद्धि का मार्ग खोलती है",actionFocus:"इस उच्च फलदायी चरण में करियर विस्तार, संपत्ति या बड़े लक्ष्य प्राथमिकता से साधें"}:F==="lagna"?{houseClause:`लग्नेश ${z} अंतर्दशा (${O} स्वामी — ${N})`,natureTone:"व्यक्तिगत पहचान, आत्मविश्वास और स्वास्थ्य-स्फूर्ति को सीधे बल देती है",actionFocus:"स्वयं के नेतृत्व, ब्रांड/प्रतिष्ठा निर्माण और महत्वपूर्ण पहल को आगे बढ़ाएं"}:F==="trikona"?{houseClause:`त्रिकोणेश ${z} अंतर्दशा (${O} स्वामी — ${N})`,natureTone:"भाग्य-सहयोग, विद्या/संतान सुख और सृजनशील समृद्धि प्रदान करती है",actionFocus:"शिक्षा, सृजनशील निवेश और शुभ मांगलिक योजनाओं को गति दें"}:F==="dusthana"?{houseClause:`दुःस्थान स्वामी ${z} अंतर्दशा (${O} — ${N})`,natureTone:"सामान्य से अधिक परिश्रम, प्रतिस्पर्धा या बाहरी बदलाव के बाद परिपक्व लाभ देती है",actionFocus:"कर्ज/विवाद व आवेगी बदलाव से बचें; अनुशासित दिनचर्या और व्यय नियंत्रण रखें"}:A?{houseClause:`धन/साझेदारी (${O}) स्वामी ${z} अंतर्दशा (${N})`,natureTone:"आर्थिक लेन-देन व साझेदारी में सक्रियता के साथ स्वास्थ्य सजगता की मांग करती है",actionFocus:"वित्तीय अनुबंध स्पष्ट रखें, कुटुम्ब सौहार्द बढ़ाएं और नियमित स्वास्थ्य जांच कराएं"}:F==="kendra"?{houseClause:`केंद्रेश ${z} अंतर्दशा (${O} स्वामी — ${N})`,natureTone:"कार्यक्षेत्र, गृह-सुख और व्यावहारिक उत्तरदायित्वों को सुदृढ़ बनाती है",actionFocus:"व्यावसायिक ढांचे को मजबूत करें और निरंतर कर्म से स्थायी परिणाम पाएं"}:{houseClause:`उपचय/लाभ (${O}) स्वामी ${z} अंतर्दशा (${N})`,natureTone:"निरंतर प्रयास से आय, पराक्रम और व्यावहारिक नेटवर्क में क्रमिक वृद्धि करती है",actionFocus:"लगातार कौशल अभ्यास, नेटवर्किंग और अनुशासित बचत पर ध्यान केंद्रित करें"}},E=Array.from({length:5},(h,z)=>{const I=w+z,N=z===0,F=N?i:Date.UTC(I,5,15,6,30,0);let A="मुख्य",O="सक्रिय",q="jupiter",v="mercury";if(y)if(N)A=y.activeMahadasha.lordHindi,O=y.activeAntardasha.lordHindi,q=y.activeMahadasha.lordId,v=y.activeAntardasha.lordId;else{const lt=y.mahadashas.find(ut=>F>=ut.startUtcMs&&F<ut.endUtcMs)||y.activeMahadasha,vt=lt.antardashas.find(ut=>F>=ut.startUtcMs&&F<ut.endUtcMs)||lt.antardashas[0];A=lt.lordHindi,O=vt.lordHindi,q=lt.lordId,v=vt.lordId}const j=N?b?.grahaRows.find(lt=>lt.id==="jupiter"):void 0,S=N?b?.grahaRows.find(lt=>lt.id==="saturn"):void 0,W=j&&S?null:be(F),V=j?j.currentRashiNumber:W.grahas.jupiter.signNumber,Y=S?S.currentRashiNumber:W.grahas.saturn.signNumber,ot=j?j.houseFromNatalMoon:(V-m+12)%12+1,pt=S?S.houseFromNatalMoon:(Y-m+12)%12+1,gt=[2,5,7,9,11].includes(ot),X=[3,6,11].includes(pt),st=[1,2,4,8,12].includes(pt),Z=jt(s,q),ct=jt(s,v);let tt=3;Z==="yogakaraka"||Z==="lagna"||Z==="trikona"?tt+=.65:Z==="dusthana"&&(tt-=.55),ct==="yogakaraka"||ct==="lagna"||ct==="trikona"?tt+=.55:ct==="dusthana"&&(tt-=.45),gt&&(tt+=.7),X&&(tt+=.45),st&&(tt-=.45);const rt=Math.min(5,Math.max(2,Math.round(tt))),nt=rt>=4?"#059669":rt===3?"#D97706":"#C2410C",kt=`${"★".repeat(rt)}${"☆".repeat(5-rt)}`,yt=Array.from({length:5},(lt,vt)=>{const ut=vt<rt,o=8+vt*17,g=[`${o},1.6`,`${(o+1.6).toFixed(1)},5.8`,`${(o+6.1).toFixed(1)},6.0`,`${(o+2.6).toFixed(1)},8.8`,`${(o+3.8).toFixed(1)},13.2`,`${o},10.7`,`${(o-3.8).toFixed(1)},13.2`,`${(o-2.6).toFixed(1)},8.8`,`${(o-6.1).toFixed(1)},6.0`,`${(o-1.6).toFixed(1)},5.8`].join(" ");return ut?`<polygon points="${g}" fill="${nt}" stroke="${nt}" stroke-width="0.6" stroke-linejoin="round" />`:`<polygon points="${g}" fill="#FFFDF8" stroke="#64748B" stroke-width="1.35" stroke-linejoin="round" />`}).join(""),Nt=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 84 16" width="84" height="16" role="img" aria-label="${kt}" style="display:inline-block; vertical-align:middle; width:84px; height:16px;">${yt}</svg>`,mt=Xt[V-1],St=Xt[Y-1],ht=P(v,O),Mt=$[ot]||"संतुलित प्रगति व स्थिरता बनती है",zt=D[pt]||"धैर्यपूर्वक कर्म व अनुशासन बनाए रखें",xt=N?`वर्तमान सक्रिय ${A} महादशा में ${ht.houseClause} ${ht.natureTone}।`:`वर्ष ${I} में ${A} महादशा के अंतर्गत ${ht.houseClause} ${ht.natureTone}।`,$t=`गोचर गुरु (${mt}, चंद्र से ${ot}वां) के प्रभाव से ${Mt}।`,Lt=`कार्य-योजना: ${zt}; साथ ही ${ht.actionFocus}।`;return{year:I,dashaKey:`${q}-${v}`,dashaLabel:`${A} – ${O}`,jupRashiHi:mt,jupFromMoon:ot,satRashiHi:St,satFromMoon:pt,jupFavorable:gt,satFavorable:X,transitNote:`गुरु: ${mt} (${ot}) • शनि: ${St} (${pt})`,stars:rt,starHtml:Nt,yearLead:xt,transitClause:$t,actionClause:Lt,summary:`${xt} ${$t} ${Lt}`}}),k=new Map,x=new Set,C=E.map(h=>{const z=k.get(h.dashaKey)||0;k.set(h.dashaKey,z+1);let I=h.actionClause;if(z>0||x.has(I)){const N=[`कार्य-योजना: वर्ष ${h.year} में गोचर गुरु के ${h.jupRashiHi} (${h.jupFromMoon}वां भाव) परिवर्तन के अनुरूप ${h.jupFavorable?"विस्तार, नए अनुबंध व दीर्घकालिक संपत्ति/करियर निवेश को प्राथमिकता दें":"नए जोखिम टालकर कौशल उन्नयन, वित्तीय समेकन और वर्तमान दायित्वों की गुणवत्ता बढ़ाएं"} तथा शनि (${h.satRashiHi}, ${h.satFromMoon}वां भाव) हेतु नियमित अनुशासन रखें।`,`कार्य-योजना: ${h.dashaLabel} के इस द्वितीय चरण (${h.year}) में पूर्व वर्ष की नींव को परिणाम में बदलें — गोचर गुरु (${h.jupRashiHi}, ${h.jupFromMoon}वां) व शनि (${h.satRashiHi}, ${h.satFromMoon}वां) के समन्वय से ${h.satFavorable?"टीम नेतृत्व, आय-स्रोत विविधीकरण व लक्षित बचत पर ध्यान दें":"खर्च-नियंत्रण, स्वास्थ्य अनुशासन और प्रमुख निर्णयों में वरिष्ठ सलाह को प्राथमिकता दें"}।`,`कार्य-योजना: वर्ष ${h.year} में ${h.jupRashiHi} के गुरु (${h.jupFromMoon}वां भाव) व ${h.satRashiHi} के शनि (${h.satFromMoon}वां भाव) की गति के अनुसार अधूरे लक्ष्यों को पूर्ण करें, पारिवारिक तालमेल बढ़ाएं और दीर्घकालिक सुरक्षा कोष सुदृढ़ करें।`];I=N[(z-1+h.jupFromMoon)%N.length]}return x.add(I),{...h,summary:`${h.yearLead} ${h.transitClause} ${I}`}}),M='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="10" height="10" role="img" aria-label="★" style="display:inline-block; vertical-align:-1px; width:10px; height:10px; margin-left:1px;"><polygon points="8,1.4 9.7,5.7 14.3,5.9 10.7,8.8 11.9,13.4 8,10.8 4.1,13.4 5.3,8.8 1.7,5.9 6.3,5.7" fill="#D97706" stroke="#D97706" stroke-width="0.5" stroke-linejoin="round" /></svg>',R=`
    ${l(`डिजिटल ज्योतिषाचार्य : 5-वर्षीय वार्षिक रोडमैप (${w}–${w+4})`,p,d)}
    ${c("DJ4",`आने वाले 5 वर्षों का वार्षिक रोडमैप (${w} से ${w+4})`,"विंशोत्तरी अंतर्दशा + गुरु/शनि गोचर आधारित")}

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
        ${C.map((h,z)=>`
            <tr style="background:${z===0?t.emeraldSoft:z%2===0?"#FFFDF8":"#FEF6E4"}; page-break-inside: avoid;">
              <td style="text-align:center; font-weight:900; font-size: 9.8px; color:${t.cosmicNavy}; white-space: nowrap;">${h.year}${z===0?'<div style="font-size:6.8px; color:#059669;">वर्तमान</div>':""}</td>
              <td style="padding: 8px 7px;">
                <div style="font-weight:800; color:${t.saffronDeep};">${n(h.dashaLabel)}</div>
                <div style="font-size:7.3px; color:${t.inkMuted}; margin-top:2px;">${n(h.transitNote)}</div>
              </td>
              <td class="pj-h2c-no-lift" style="text-align:center; white-space: nowrap; padding: 7px 4px;">
                <div class="pj-h2c-no-lift" style="display:flex; align-items:center; justify-content:center; min-height:17px;">${h.starHtml}</div>
                <div style="font-size: 7.4px; font-weight: 800; color: ${t.cosmicNavy}; margin-top: 3px;">${h.stars} / 5 स्टार</div>
              </td>
              <td style="padding: 8px 8px; line-height: 1.52; color: ${t.inkPrimary};">${n(h.summary)}</td>
            </tr>`).join("")}
      </tbody>
    </table>

    <div class="book-card" style="margin-top: 10px; background: ${t.pureIvory}; border: 1.4px solid ${t.templeGold}; border-radius: 9px; padding: 10px 13px; font-size: 8.3px; line-height: 1.58; page-break-inside: avoid;">
      <div style="font-weight: 900; color: ${t.cosmicNavy}; font-size: 9.4px; margin-bottom: 4px;">
        <span class="pj-h2c-no-lift" style="font-family:'Noto Sans Symbols','Noto Sans Symbols 2','DejaVu Sans','Segoe UI Symbol','Arial Unicode MS',sans-serif; color:${t.saffronDeep};">✦</span> 5-वर्षीय रोडमैप का सही उपयोग कैसे करें?
      </div>
      <div>• <b>4${M} या 5${M} वाले वर्ष (विस्तार काल):</b> नया व्यवसाय, संपत्ति क्रय, विवाह, पदोन्नति या बड़ा निवेश इन वर्षों में प्राथमिकता से करें।</div>
      <div style="margin-top:3px;">• <b>3${M} वाले वर्ष (निर्माण काल):</b> शिक्षा, कौशल उन्नयन, टीम निर्माण और स्थिर बचत पर ध्यान केंद्रित करें।</div>
      <div style="margin-top:3px;">• <b>2${M} वाले वर्ष (संरक्षण काल):</b> किसी से विवाद या जोखिम भरे ऋण से दूर रहें, स्वास्थ्य व आध्यात्मिक साधना को मजबूत बनाएं।</div>
    </div>
  `;return{sectionCode:"DJ4",sectionTag:`5-वर्षीय रोडमैप (${w}–${w+4})`,html:R}}function Ie(e,r){const{esc:n,buildBookPageHeader:l,buildSectionTitleBar:c,personHeader:p,appLogo:d}=r,i=e.panchang.lagnaNumber||1,w=it(i,1),s=it(i,5),m=it(i,9),y=[],b=e.shadbalaBhava?.planets||[],$=new Set,D=[{id:w,role:"जीवन रत्न (लग्नेश — प्रथम भाव)",isLagna:!0},{id:s,role:"विद्या / बुद्धि रत्न (पंचमेश — पंचम भाव)",isLagna:!1},{id:m,role:"भाग्य रत्न (नवमेश — नवम भाव)",isLagna:!1}];for(const x of D){if($.has(x.id))continue;const C=re[x.id];if(!C)continue;const M=Ut(i,x.id),R=M.filter(V=>[6,8,12].includes(V));if(!x.isLagna&&M.every(V=>[6,8,12].includes(V)))continue;$.add(x.id);const h=K(e,x.id),z=b.find(V=>V.id===x.id),I=z?Math.round((z.strengthRatio||z.totalRupas/Math.max(1,z.requiredRupas))*100):null,N=!!h?.isCombust,F=!!h?.isDebilitated,A=I!==null&&I>105&&!N&&!F,O=N||F||I!==null&&I<=105,q=[];N&&q.push(`जन्म कुंडली में ${C.planetHi} सूर्य से अस्त हैं${I!==null?` (षड्बल: ${I}%)`:""} — बलवर्धन हेतु रत्न धारण एवं बीज मंत्र जप विशेष लाभप्रद है`),F&&q.push(`जन्म कुंडली में ${C.planetHi} नीचस्थ हैं — रत्न धारण से पूर्व 3 दिन परीक्षण करें अथवा बीज मंत्र जप व सात्विक दान से बल संवर्धन करें`),A?q.push(`षड्बल में पहले से पूर्णतः बली (${I}% — आवश्यक न्यूनतम से अधिक, अ-अस्त व अ-नीचस्थ) होने के कारण ${C.gemHi} रत्न धारण अनावश्यक है; इसके स्थान पर ${C.planetHi} के मंत्र जप, इष्ट उपासना एवं सात्विक दान को प्राथमिकता देना शास्त्रसम्मत है`):!N&&!F&&I!==null&&q.push(`वर्तमान षड्बल ${I}% होने से शुभ फल वृद्धि हेतु विधिवत अभिमंत्रित ${C.gemHi} धारण करना सहायक रहेगा`),R.length>0&&!x.isLagna&&q.push(`भाव ${R.join("/")} का सह-स्वामित्व होने से पहले 3 दिन परीक्षण करें`);const v=N||F?`प्राथमिक रत्न / बलवर्धन (${N?"अस्त ग्रह":"नीचस्थ"}${I!==null?` • षड्बल ${I}%`:""})`:O?`अनुशंसित रत्न${I!==null?` • षड्बल ${I}%`:""}`:A?`धारण अनावश्यक • षड्बल बली (${I}%) — मंत्र जप व दान श्रेष्ठ`:"शुभ त्रिकोण रत्न",j=A?"#9A3412":"#065F46",S=A?"#FFF7ED":"#ECFDF5",W=N?0:F?1:O?2:A?4:3;y.push({roleLabel:x.role,spec:C,shadbalaPct:I,needsStrengthening:O,isWellFortified:A,priorityBadgeHi:v,priorityBadgeColor:j,priorityBadgeBg:S,cautionNote:q.length>0?q.join(" • "):void 0,sortRank:W})}y.sort((x,C)=>x.sortRank-C.sortRank);const L=[6,8,12],P=[],E=new Set;for(const x of L){const C=it(i,x);if(E.has(C)||C===w||$.has(C))continue;const M=re[C];if(!M)continue;E.add(C);const R=Ut(i,C).filter(h=>[6,8,12].includes(h));P.push({planetHi:M.planetHi,dusthanaHousesLabel:R.map(h=>`${h}वां भाव`).join(" व "),gemHi:M.gemHi,warningHi:M.avoidWarnHi})}return{sectionCode:"DJ5",sectionTag:"रत्न व उपाय व्यावहारिक विधि",html:`
    ${l("डिजिटल ज्योतिषाचार्य : रत्न एवं उपाय — पूर्ण व्यावहारिक विधि",p,d)}
    ${c("DJ5a",`शुभ त्रिकोण रत्न एवं षड्बल आधारित चयन (${e.panchang.lagnaName} लग्न)`,"षड्बल, अस्त/नीच एवं त्रिकोण स्वामित्व पर आधारित")}

    <div style="display: flex; flex-direction: column; gap: 8px; margin-bottom: 10px;">
      ${y.map((x,C)=>`
          <div class="book-card" style="background: ${t.pureIvory}; border: 1.4px solid ${t.templeGold}; border-left: 4.5px solid ${x.needsStrengthening?"#059669":"#D97706"}; border-radius: 9px; padding: 7.5px 11px; page-break-inside: avoid;">
            <div style="display: table; width: 100%; border-bottom: 1px solid ${t.borderMuted}; padding-bottom: 4px; margin-bottom: 5px;">
              <div style="display: table-cell; font-size: 9.2px; font-weight: 900; color: ${t.cosmicNavy}; vertical-align: middle;">
                ${C+1}. ${n(x.spec.gemHi)} — <span style="color:${t.saffronDeep};">${n(x.roleLabel)}</span>
              </div>
              <div style="display: table-cell; text-align: right; vertical-align: middle; white-space: nowrap;">
                <span style="display: inline-block; background: ${x.priorityBadgeBg}; border: 1px solid ${x.priorityBadgeColor}; color: ${x.priorityBadgeColor}; border-radius: 4px; padding: 1.5px 6px; font-size: 7.1px; font-weight: 800;">${n(x.priorityBadgeHi)}</span>
              </div>
            </div>
            ${x.isWellFortified?`<div style="font-size: 7.9px; line-height: 1.46; color: #9A3412; background: #FFF7ED; border: 1px solid #FDBA74; border-radius: 5px; padding: 4.5px 8px;">
                    <b>• धारण विधि:</b> लागू नहीं (ग्रह षड्बल में पहले से अति बली होने के कारण रत्न धारण वर्जित/अनावश्यक है)
                  </div>`:`<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 3.5px 12px; font-size: 7.9px; line-height: 1.44; color: ${t.inkPrimary};">
                    <div><b>• वजन (रत्ती) व उपरत्न:</b> ${n(x.spec.rattiHi)} • उपरत्न: ${n(x.spec.uparatnaHi)}</div>
                    <div><b>• धातु एवं उंगली:</b> ${n(x.spec.metalHi)} में ${n(x.spec.fingerHi)}</div>
                    <div><b>• शुभ वार व समय:</b> ${n(x.spec.dayHi)} • ${n(x.spec.timingHi)}</div>
                    <div><b>• शुद्धिकरण विधि:</b> ${n(x.spec.purificationHi)}</div>
                  </div>`}
            <div style="margin-top: 4.5px; padding: 4.5px 8px; background: ${t.emeraldSoft}; border: 1px solid #A7F3D0; border-radius: 6px; font-size: 8.1px; color: #065F46; font-weight: 700; line-height: 1.6; overflow: visible;">
              ${x.isWellFortified?"सप्तवार/दैनिक जप मंत्र (108 बार जप)":"प्राण-प्रतिष्ठा मंत्र (108 बार जप)"}: <span class="book-beej-mantra" style="font-weight: 700; color: #065F46;">${n(Ct[x.spec.planetId]||x.spec.mantraHi)}</span>
            </div>
            ${x.cautionNote?`<div style="margin-top: 3.5px; font-size: 7.4px; color: ${x.needsStrengthening?"#065F46":t.saffronDeep}; font-weight: 700; line-height: 1.42;">शास्त्रीय विवेचन: ${n(x.cautionNote)}</div>`:""}
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
        ${P.length>0?P.map((x,C)=>`
                  <tr style="background:${C%2===0?"#FEF2F2":"#FFF7ED"}; page-break-inside: avoid;">
                    <td style="font-weight:800; color:${t.crimson};">${n(x.planetHi)}</td>
                    <td style="font-weight:700; color:${t.cosmicNavy};">${n(x.dusthanaHousesLabel)}</td>
                    <td style="font-weight:800; color:${t.crimson};">${n(x.gemHi)}</td>
                    <td style="line-height: 1.46;">${n(x.warningHi)}</td>
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
  `}}const U="'Noto Sans Devanagari', 'Nirmala UI', 'Mangal', 'Kohinoor Devanagari', system-ui, -apple-system, sans-serif";function dt(e){return Le(String(e??"").replace(/\$([^$]+)\$/g,"$1").replace(/\\\(([^)]+)\\\)/g,"$1").replace(/\\\[([^\]]+)\\\]/g,"$1").replace(/\^?\{\\circ\}|\^\\circ|\\circ|\\degree|\\deg\b/g,"°").replace(/\^?\{\\prime\\prime\}|\\prime\\prime|\\second\b/g,'"').replace(/\^?\{\\prime\}|\\prime/g,"'").replace(/\\cdot/g,"·").replace(/\\times/g,"×").replace(/(\d{1,3})\s*°\s*(\d{1,2})\s*['′]\s*(\d{1,2})\s*["″]/g,`$1° $2' $3"`))}function a(e){return dt(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}const Bt="display: inline-flex; align-items: center; justify-content: center; line-height: 1.15; padding-top: 4px; padding-bottom: 4px; vertical-align: middle; box-sizing: border-box; text-align: center;",Et="display: inline-block; line-height: 1.15;",Pe=wt.websiteDisplay.replace(/\s+/g,"");function Ot(e=t.saffronDeep){return`<span style="white-space: nowrap; display: inline-block; letter-spacing: 0; font-family: monospace; font-weight: 800; color: ${e};">${a(Pe)}</span>`}function Be(e){return e.map(r=>({houseNumber:r.houseNumber,rashiNumber:r.rashiNumber,rashiName:r.rashiNameHi,bhavaTitle:`भाव ${r.houseNumber}`,planets:r.planets.map(n=>({shortHindi:n.shortHindi,chartLabel:n.chartLabel||fe(n),degInt:n.degInt,hindiName:n.hindiName,degree:n.fullDMS,fullDegreeDMS:n.fullDMS,statusBadge:"madhyam"}))}))}function Te(e,r,n,l=!1){const c={1:{rx:50,ry:43.2,px:50,py:28.4,maxPerLine:2,maxWidthU:25.5,maxHeightU:15.2},2:{rx:25,ry:21.2,px:25,py:9.8,maxPerLine:2,isOuterTri:!0,maxWidthU:21.5,maxHeightU:11},3:{rx:21.8,ry:25.5,px:11.4,py:25.5,maxPerLine:1,isSide:!0,maxWidthU:13.8,maxHeightU:15.8},4:{rx:43.2,ry:50,px:23.8,py:50,maxPerLine:2,maxWidthU:25.5,maxHeightU:16},5:{rx:21.8,ry:74.5,px:11.4,py:74.5,maxPerLine:1,isSide:!0,maxWidthU:13.8,maxHeightU:15.8},6:{rx:25,ry:78.8,px:25,py:90.2,maxPerLine:2,isOuterTri:!0,maxWidthU:21.5,maxHeightU:11},7:{rx:50,ry:56.8,px:50,py:73.8,maxPerLine:2,maxWidthU:25.5,maxHeightU:16},8:{rx:75,ry:78.8,px:75,py:90.2,maxPerLine:2,isOuterTri:!0,maxWidthU:21.5,maxHeightU:11},9:{rx:78.2,ry:74.5,px:88.6,py:74.5,maxPerLine:1,isSide:!0,maxWidthU:13.8,maxHeightU:15.8},10:{rx:56.8,ry:50,px:76.2,py:50,maxPerLine:2,maxWidthU:25.5,maxHeightU:16},11:{rx:78.2,ry:25.5,px:88.6,py:25.5,maxPerLine:1,isSide:!0,maxWidthU:13.8,maxHeightU:15.8},12:{rx:75,ry:21.2,px:75,py:9.8,maxPerLine:2,isOuterTri:!0,maxWidthU:21.5,maxHeightU:11}},p=l?Number(Math.min(.68,1.5/Math.max(150,r)*100).toFixed(2)):0,d=e.map(i=>{const w=c[i.houseNumber];if(!w)return"";const s=i.planets||[],m=s.length>=3,y=w.isSide?s.length>=5?2:1:s.length>=5?3:m?2:w.maxPerLine,b=s.map(F=>{const A=(F.chartLabel||F.shortHindi||"").trim(),O=String(F.degInt??0).padStart(2,"0");return/\d$/.test(A)?A:`${A}${O}`}),$=[];for(let F=0;F<b.length;F+=y)$.push(b.slice(F,F+y).join(" "));const D=Math.max(1,...$.map(F=>Array.from(F).length)),L=w.isSide?$.length>=4?2:$.length>=3?2.2:2.45:w.isOuterTri?$.length>=2?2.25:2.6:m?2.4:2.85,P=Math.max(l?1.35:1.5,L-p),E=l?.82:.9,k=l?.74:.68,x=l?1.14:1.24,C=w.maxWidthU*E/Math.max(4,D*k),M=w.maxHeightU/Math.max(1,$.length*x),h=Number(Math.max(l?1.18:1.5,Math.min(P,C,M)).toFixed(2)),z=Number((h*(l?1.07:1.16)).toFixed(2)),I=$.map((F,A)=>{const O=(A-($.length-1)/2)*z;return`<text x="${w.px}" y="${(w.py+O).toFixed(2)}" dy="-0.05em" text-anchor="middle" dominant-baseline="central" fill="${t.cosmicNavy}" font-size="${h}" font-weight="700" font-family="${U}">${a(F)}</text>`}).join(""),N=i.houseNumber===1?`<text x="50" y="11.4" dy="-0.05em" text-anchor="middle" dominant-baseline="central" fill="${t.saffronDeep}" font-size="2.8" font-weight="800" font-family="${U}">${typeof n=="number"?`लग्न ${String(n).padStart(2,"0")}°`:"लग्न"}</text>`:"";return`
        <text x="${w.rx}" y="${w.ry}" text-anchor="middle" dominant-baseline="central" fill="${t.saffron}" font-size="3.15" font-weight="800" font-family="${U}">${i.rashiNumber}</text>
        ${N}
        ${I}
      `}).join("");return`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="${r}" height="${r}" style="width:${r}px;height:${r}px;display:block;margin:0 auto;overflow:visible;">
      <rect x="1.5" y="1.5" width="97" height="97" rx="2.5" fill="${t.warmIvory}" stroke="${t.templeGold}" stroke-width="1.4" />
      <rect x="3.2" y="3.2" width="93.6" height="93.6" rx="1.2" fill="none" stroke="${t.saffron}" stroke-opacity="0.38" stroke-width="0.45" />
      <line x1="1.5" y1="1.5" x2="98.5" y2="98.5" stroke="${t.templeGoldDark}" stroke-width="0.8" />
      <line x1="98.5" y1="1.5" x2="1.5" y2="98.5" stroke="${t.templeGoldDark}" stroke-width="0.8" />
      <polygon points="50,1.5 98.5,50 50,98.5 1.5,50" fill="none" stroke="${t.templeGoldDark}" stroke-width="0.9" />
      <text x="50" y="50.4" dy="-0.06em" text-anchor="middle" dominant-baseline="central" fill="${t.templeGold}" fill-opacity="0.22" font-size="7" font-weight="800" font-family="${U}">ॐ</text>
      ${d}
    </svg>
  `}function Ae(e,r,n,l){const c={};e.forEach(s=>{c[s.rashiNumber]=s});const p=[{rashi:12,label:"12 मीन",col:0,row:0},{rashi:1,label:"1 मेष",col:1,row:0},{rashi:2,label:"2 वृष",col:2,row:0},{rashi:3,label:"3 मि",col:3,row:0},{rashi:4,label:"4 कर्क",col:3,row:1},{rashi:5,label:"5 सिंह",col:3,row:2},{rashi:6,label:"6 कन्या",col:3,row:3},{rashi:7,label:"7 तुला",col:2,row:3},{rashi:8,label:"8 वृश्चि",col:1,row:3},{rashi:9,label:"9 धनु",col:0,row:3},{rashi:10,label:"10 मकर",col:0,row:2},{rashi:11,label:"11 कुंभ",col:0,row:1}],d=24,i=2,w=p.map(s=>{const m=i+s.col*d,y=i+s.row*d,b=c[s.rashi],$=b?.houseNumber===1,L=(b?.planets||[]).map(k=>k.chartLabel||k.shortHindi),P=[];for(let k=0;k<L.length;k+=2)P.push(L.slice(k,k+2).join(" "));const E=P.map((k,x)=>{const C=y+12+(x-(P.length-1)/2)*3.6;return`<text x="${m+d/2}" y="${C.toFixed(1)}" dy="-0.06em" text-anchor="middle" dominant-baseline="central" fill="${t.cosmicNavy}" font-size="3.2" font-weight="800" font-family="${U}">${a(k)}</text>`}).join("");return`
        <rect x="${m}" y="${y}" width="${d}" height="${d}" fill="${$?"#FFF3E0":t.warmIvory}" stroke="${t.templeGoldDark}" stroke-width="0.68" />
        <text x="${m+1.6}" y="${y+3.4}" dy="-0.06em" dominant-baseline="central" fill="${t.saffronDeep}" font-size="2.6" font-weight="700" font-family="${U}">${a(s.label)}</text>
        ${$?`<text x="${m+d-1.5}" y="${y+3.4}" dy="-0.06em" text-anchor="end" dominant-baseline="central" fill="${t.emerald}" font-size="2.5" font-weight="800" font-family="${U}">${typeof l=="number"?`लग्न ${l}°`:"लग्न"}</text>`:""}
        ${E}
        <text x="${m+d-1.5}" y="${y+d-2.2}" dy="-0.04em" text-anchor="end" dominant-baseline="central" fill="${t.inkMuted}" font-size="2.35" font-family="'Noto Sans Devanagari', sans-serif">भा.${b?.houseNumber||""}</text>
      `}).join("");return`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="${r}" height="${r}" style="width:${r}px;height:${r}px;display:block;margin:0 auto;">
      <rect x="1" y="1" width="98" height="98" rx="2" fill="${t.pureIvory}" stroke="${t.templeGold}" stroke-width="1.25" />
      <rect x="${i+d}" y="${i+d}" width="${d*2}" height="${d*2}" fill="${t.templeGoldSoft}" stroke="${t.templeGold}" stroke-width="0.7" />
      <text x="50" y="44.2" dy="-0.06em" text-anchor="middle" dominant-baseline="central" fill="${t.saffron}" font-size="8" font-weight="800">ॐ</text>
      <text x="50" y="54.0" dy="-0.06em" text-anchor="middle" dominant-baseline="central" fill="${t.cosmicNavy}" font-size="3.3" font-weight="800" font-family="${U}">${a(n)}</text>
      <text x="50" y="60.2" dy="-0.06em" text-anchor="middle" dominant-baseline="central" fill="${t.inkMuted}" font-size="2.5" font-family="${U}">दक्षिण भारतीय चक्र</text>
      ${w}
    </svg>
  `}function Qt(e,r,n,l,c,p){const d=Math.min(p,l/2,c/2);e.beginPath(),e.moveTo(r+d,n),e.lineTo(r+l-d,n),e.quadraticCurveTo(r+l,n,r+l,n+d),e.lineTo(r+l,n+c-d),e.quadraticCurveTo(r+l,n+c,r+l-d,n+c),e.lineTo(r+d,n+c),e.quadraticCurveTo(r,n+c,r,n+c-d),e.lineTo(r,n+d),e.quadraticCurveTo(r,n,r+d,n),e.closePath()}function bt(e,r,n,l){const c=e.textBaseline;e.textBaseline="alphabetic";const p=e.measureText(r),d=p.actualBoundingBoxAscent,i=p.actualBoundingBoxDescent;Number.isFinite(d)&&Number.isFinite(i)&&d>0?e.fillText(r,n,l+(d-i)/2):(e.textBaseline="middle",e.fillText(r,n,l)),e.textBaseline=c}function Re(e,r,n,l=!1){if(typeof document>"u")return"";try{const p=Math.max(240,Math.round(r*3)),d=p,i=p/100,w=document.createElement("canvas");w.width=p,w.height=d;const s=w.getContext("2d");if(!s)return"";s.fillStyle=t.warmIvory,s.fillRect(0,0,p,d),Qt(s,1.5*i,1.5*i,97*i,97*i,2.5*i),s.fillStyle=t.warmIvory,s.fill(),s.lineWidth=1.4*i,s.strokeStyle=t.templeGold,s.stroke(),Qt(s,3.2*i,3.2*i,93.6*i,93.6*i,1.2*i),s.lineWidth=.45*i,s.strokeStyle="rgba(255, 111, 0, 0.38)",s.stroke(),s.beginPath(),s.moveTo(1.5*i,1.5*i),s.lineTo(98.5*i,98.5*i),s.moveTo(98.5*i,1.5*i),s.lineTo(1.5*i,98.5*i),s.lineWidth=.85*i,s.strokeStyle=t.templeGoldDark,s.stroke(),s.beginPath(),s.moveTo(50*i,1.5*i),s.lineTo(98.5*i,50*i),s.lineTo(50*i,98.5*i),s.lineTo(1.5*i,50*i),s.closePath(),s.lineWidth=.95*i,s.strokeStyle=t.templeGoldDark,s.stroke(),s.textAlign="center",s.fillStyle="rgba(212, 175, 55, 0.22)",s.font=`800 ${(7*i).toFixed(1)}px ${U}`,bt(s,"ॐ",50*i,50.2*i);const m={1:{rx:50,ry:43.2,px:50,py:28.4,maxPerLine:2,maxWidthU:25.5,maxHeightU:15.2},2:{rx:25,ry:21.2,px:25,py:9.8,maxPerLine:2,isOuterTri:!0,maxWidthU:21.5,maxHeightU:11},3:{rx:21.8,ry:25.5,px:11.4,py:25.5,maxPerLine:1,isSide:!0,maxWidthU:13.8,maxHeightU:15.8},4:{rx:43.2,ry:50,px:23.8,py:50,maxPerLine:2,maxWidthU:25.5,maxHeightU:16},5:{rx:21.8,ry:74.5,px:11.4,py:74.5,maxPerLine:1,isSide:!0,maxWidthU:13.8,maxHeightU:15.8},6:{rx:25,ry:78.8,px:25,py:90.2,maxPerLine:2,isOuterTri:!0,maxWidthU:21.5,maxHeightU:11},7:{rx:50,ry:56.8,px:50,py:73.8,maxPerLine:2,maxWidthU:25.5,maxHeightU:16},8:{rx:75,ry:78.8,px:75,py:90.2,maxPerLine:2,isOuterTri:!0,maxWidthU:21.5,maxHeightU:11},9:{rx:78.2,ry:74.5,px:88.6,py:74.5,maxPerLine:1,isSide:!0,maxWidthU:13.8,maxHeightU:15.8},10:{rx:56.8,ry:50,px:76.2,py:50,maxPerLine:2,maxWidthU:25.5,maxHeightU:16},11:{rx:78.2,ry:25.5,px:88.6,py:25.5,maxPerLine:1,isSide:!0,maxWidthU:13.8,maxHeightU:15.8},12:{rx:75,ry:21.2,px:75,py:9.8,maxPerLine:2,isOuterTri:!0,maxWidthU:21.5,maxHeightU:11}};for(const b of e){const $=m[b.houseNumber];if(!$)continue;if(s.fillStyle=t.saffron,s.font=`800 ${(3.15*i).toFixed(1)}px ${U}`,bt(s,String(b.rashiNumber),$.rx*i,$.ry*i),b.houseNumber===1){s.fillStyle=t.saffronDeep,s.font=`800 ${(2.8*i).toFixed(1)}px ${U}`;const N=typeof n=="number"?`लग्न ${String(n).padStart(2,"0")}°`:"लग्न";bt(s,N,50*i,11.4*i)}const D=b.planets||[];if(D.length===0)continue;const L=D.length>=3,P=$.isSide?D.length>=5?2:1:D.length>=5?3:L?2:$.maxPerLine,E=D.map(N=>{const F=(N.chartLabel||N.shortHindi||"").trim(),A=String(N.degInt??0).padStart(2,"0");return/\d$/.test(F)?F:`${F}${A}`}),k=[];for(let N=0;N<E.length;N+=P)k.push(E.slice(N,N+P).join(" "));const x=l?Number(Math.min(.68,1.5/Math.max(150,r)*100).toFixed(2)):0,C=$.isSide?k.length>=4?2:k.length>=3?2.2:2.45:$.isOuterTri?k.length>=2?2.25:2.6:L?2.4:2.85;let M=Math.max(l?1.35:1.5,C-x);const R=$.maxHeightU/Math.max(1,k.length*(l?1.14:1.24));M=Number(Math.min(M,R).toFixed(2)),s.fillStyle=t.cosmicNavy;const h=$.maxWidthU*i*(l?.82:.9),z=l?1.15:1.45;for(;M>z&&(s.font=`700 ${(M*i).toFixed(1)}px ${U}`,!(Math.max(...k.map(F=>s.measureText(dt(F)).width))<=h));)M=Number((M-.08).toFixed(2));const I=M*(l?1.07:1.16);s.font=`700 ${(M*i).toFixed(1)}px ${U}`,k.forEach((N,F)=>{const A=(F-(k.length-1)/2)*I;bt(s,dt(N),$.px*i,($.py+A)*i)})}const y=w.toDataURL("image/png");return w.width=0,w.height=0,y.startsWith("data:image/png;base64,")?y:""}catch{return""}}function Ge(e,r,n,l){if(typeof document>"u")return"";try{const p=Math.max(240,Math.round(r*3)),d=p,i=p/100,w=document.createElement("canvas");w.width=p,w.height=d;const s=w.getContext("2d");if(!s)return"";s.fillStyle=t.pureIvory,s.fillRect(0,0,p,d),Qt(s,1*i,1*i,98*i,98*i,2*i),s.fillStyle=t.pureIvory,s.fill(),s.lineWidth=1.25*i,s.strokeStyle=t.templeGold,s.stroke();const m=24,y=2;s.fillStyle=t.templeGoldSoft,s.fillRect((y+m)*i,(y+m)*i,m*2*i,m*2*i),s.lineWidth=.7*i,s.strokeStyle=t.templeGold,s.strokeRect((y+m)*i,(y+m)*i,m*2*i,m*2*i),s.textAlign="center",s.fillStyle=t.saffron,s.font=`800 ${(8*i).toFixed(1)}px ${U}`,bt(s,"ॐ",50*i,44.2*i),s.fillStyle=t.cosmicNavy,s.font=`800 ${(3.2*i).toFixed(1)}px ${U}`,bt(s,dt(n),50*i,54*i),s.fillStyle=t.inkMuted,s.font=`600 ${(2.5*i).toFixed(1)}px ${U}`,bt(s,"दक्षिण भारतीय चक्र",50*i,60.2*i);const b={};e.forEach(L=>{b[L.rashiNumber]=L});const $=[{rashi:12,label:"12 मीन",col:0,row:0},{rashi:1,label:"1 मेष",col:1,row:0},{rashi:2,label:"2 वृष",col:2,row:0},{rashi:3,label:"3 मि",col:3,row:0},{rashi:4,label:"4 कर्क",col:3,row:1},{rashi:5,label:"5 सिंह",col:3,row:2},{rashi:6,label:"6 कन्या",col:3,row:3},{rashi:7,label:"7 तुला",col:2,row:3},{rashi:8,label:"8 वृश्चि",col:1,row:3},{rashi:9,label:"9 धनु",col:0,row:3},{rashi:10,label:"10 मकर",col:0,row:2},{rashi:11,label:"11 कुंभ",col:0,row:1}];for(const L of $){const P=y+L.col*m,E=y+L.row*m,k=b[L.rashi],x=k?.houseNumber===1;s.fillStyle=x?"#FFF3E0":t.warmIvory,s.fillRect(P*i,E*i,m*i,m*i),s.lineWidth=.68*i,s.strokeStyle=t.templeGoldDark,s.strokeRect(P*i,E*i,m*i,m*i),s.textAlign="left",s.fillStyle=t.saffronDeep,s.font=`700 ${(2.6*i).toFixed(1)}px ${U}`,bt(s,L.label,(P+1.5)*i,(E+3.4)*i),x&&(s.textAlign="right",s.fillStyle=t.emerald,s.font=`800 ${(2.5*i).toFixed(1)}px ${U}`,bt(s,typeof l=="number"?`लग्न ${l}°`:"लग्न",(P+m-1.4)*i,(E+3.4)*i));const M=(k?.planets||[]).map(h=>h.chartLabel||h.shortHindi),R=[];for(let h=0;h<M.length;h+=2)R.push(M.slice(h,h+2).join(" "));s.textAlign="center",s.fillStyle=t.cosmicNavy,s.font=`800 ${(3.2*i).toFixed(1)}px ${U}`,R.forEach((h,z)=>{const I=E+12+(z-(R.length-1)/2)*3.6;bt(s,dt(h),(P+m/2)*i,I*i)}),s.textAlign="right",s.fillStyle=t.inkMuted,s.font=`600 ${(2.35*i).toFixed(1)}px ${U}`,bt(s,`भा.${k?.houseNumber||""}`,(P+m-1.4)*i,(E+m-2.2)*i)}const D=w.toDataURL("image/png");return w.width=0,w.height=0,D.startsWith("data:image/png;base64,")?D:""}catch{return""}}function Zt(e,r,n,l,c,p,d=!1){if(c&&typeof document<"u"){const i=r==="south"?Ge(e,n,l,p):Re(e,n,p,d);if(i)return`<img src="${i}" alt="${a(l)}" width="${n}" height="${n}" style="width:${n}px;height:${n}px;display:block;margin:0 auto;" />`}return r==="south"?Ae(e,n,l,p):Te(e,n,p,d)}function Q(e,r,n){return`
    <div style="display: table; width: 100%; box-sizing: border-box; padding-bottom: 7px; margin-bottom: 10px; border-bottom: 2px solid ${t.templeGold};">
      <div style="display: table-cell; vertical-align: middle; text-align: left; padding-right: 10px;">
        <div style="display: table;">
          <div style="display: table-cell; vertical-align: middle; padding-right: 9px;">
            ${Pt(28,n,1.8)}
          </div>
          <div style="display: table-cell; vertical-align: middle;">
            <div style="display: block; font-size: 10.5px; font-weight: 800; color: ${t.cosmicNavy}; line-height: 1.25;">
              पण्डित जी ऑनलाइन (PANDIT JI ONLINE) • बृहत् वैदिक जन्म पत्रिका
            </div>
            <div style="display: block; font-size: 8px; color: ${t.saffronDeep}; font-weight: 700; margin-top: 2px; line-height: 1.3;">
              ${a(r)}
            </div>
          </div>
        </div>
      </div>
      <div style="display: table-cell; vertical-align: middle; text-align: right; white-space: nowrap; width: 1%;">
        <span class="book-pill" style="${Bt} background: ${t.cosmicNavy}; color: #FDE68A; border: 1.2px solid ${t.templeGold}; font-size: 8.1px; font-weight: 800; padding-left: 11px; padding-right: 11px; border-radius: 999px; white-space: nowrap;">
          <span style="${Et}">${a(e)}</span>
        </span>
      </div>
    </div>
  `}function _(e,r,n){const l=n&&n.includes("PANDIT JI ONLINE")?" letter-spacing: 0; word-spacing: 3px;":"",c=a(String(r||"").normalize("NFC")).replace(/\(\s*([^()–—-]+?)\s*[–—-]\s*([^()–—-]+?)\s*\)/gu,`<span class="pj-h2c-no-lift" style="display:inline-block; white-space:nowrap; direction:ltr; unicode-bidi:isolate; font-family:${U}; font-weight:700; letter-spacing:0; font-variant-ligatures:normal; color:#FDE68A; margin-left:4px;"><span style="display:inline-block; margin-right:1.5px;">(</span><span style="display:inline-block; letter-spacing:0;">$1</span><span style="display:inline-block; margin:0 3.5px;">–</span><span style="display:inline-block; letter-spacing:0;">$2</span><span style="display:inline-block; margin-left:1.5px;">)</span></span>`);return`
    <div class="book-section-bar pj-h2c-no-lift" style="display: table; width: 100%; box-sizing: border-box; background: linear-gradient(90deg, ${t.cosmicNavy} 0%, #1E293B 100%); border-left: 4.5px solid ${t.saffron}; border-bottom: 1.8px solid ${t.templeGold}; border-radius: 7px; padding: 7px 11px; margin: 8px 0 8px 0; overflow: visible; font-family: ${U};">
      <div class="pj-h2c-no-lift" style="display: table-cell; vertical-align: middle; text-align: left; color: ${t.warmIvory}; font-size: 10.2px; font-weight: 700; line-height: 1.54; padding-right: 8px; overflow: visible; direction: ltr; unicode-bidi: isolate;">
        <span class="pj-h2c-no-lift" style="display: block; line-height: 1.54;"><span style="color: ${t.templeGold}; font-weight: 800; margin-right: 5px;">${a(e)}.</span>${c}</span>
      </div>
      ${n?`<div class="pj-h2c-no-lift" style="display: table-cell; vertical-align: middle; text-align: right; white-space: nowrap; width: 1%;"><span class="book-pill pj-h2c-no-lift" style="${Bt} background: rgba(212, 175, 55, 0.16); border: 1px solid rgba(212, 175, 55, 0.5); color: #FDE68A; font-size: 7.7px; font-weight: 700; padding-left: 9px; padding-right: 9px; border-radius: 999px; white-space: nowrap;${l}"><span style="${Et}${l}">${a(n)}</span></span></div>`:""}
    </div>
  `}function Ht(e){const r=$e[e],n=r.keyPoints.map(l=>`<span style="display: block; margin-top: 2.5px;"><b style="color: ${t.saffronDeep};">• ${a(l.term.hi)}:</b> ${a(l.meaning.hi)}</span>`).join("");return`
    <div class="book-card" style="background: ${t.saffronSoft}; border: 1.2px solid ${t.templeGold}; border-radius: 8px; padding: 7.5px 10px; margin: 8px 0 6px 0; font-size: 8.3px; color: ${t.inkPrimary}; line-height: 1.48;">
      <div style="font-weight: 800; color: ${t.cosmicNavy}; font-size: 8.8px; margin-bottom: 2.5px;">
        ✦ इसे कैसे समझें? — ${a(r.triggerTitle.hi)}
      </div>
      <div>${a(r.whatItShows.hi)}</div>
      ${n}
      <div style="margin-top: 3.5px; color: ${t.emerald}; font-weight: 700;">
        ध्यान दें: ${a(r.practicalTip.hi)}
      </div>
    </div>
  `}function te(e,r,n){return`
    <div class="book-card" style="background: ${t.saffronSoft}; border: 1.2px solid ${t.templeGold}; border-radius: 8px; padding: 7.5px 10px; margin: 8px 0 6px 0; font-size: 8.3px; color: ${t.inkPrimary}; line-height: 1.48;">
      <div style="font-weight: 800; color: ${t.cosmicNavy}; font-size: 8.8px; margin-bottom: 2.5px;">
        ✦ इसे कैसे समझें? — ${a(e)}
      </div>
      <div>${a(r)}</div>
      <div style="margin-top: 3.5px; color: ${t.emerald}; font-weight: 700;">
        व्यावहारिक सुझाव: ${a(n)}
      </div>
    </div>
  `}function ee(e,r,n){return`
    <div style="display: flex; align-items: center; gap: 8px; width: 100%; box-sizing: border-box;">
      <div style="flex: 1; min-width: 0; height: 8px; background: #EFE3C6; border-radius: 999px; overflow: hidden; border: 0.8px solid #D9C495;">
        <div style="width: ${Math.max(4,Math.min(100,Math.round(e)))}%; height: 100%; background: ${r}; border-radius: 999px;"></div>
      </div>
      ${n?`<span style="flex-shrink: 0; white-space: nowrap; padding-left: 4px; font-size: 7.5px; font-weight: 800; font-family: ${U}; font-variant-numeric: tabular-nums; color: ${t.cosmicNavy}; min-width: 54px; text-align: right;">${a(n)}</span>`:""}
    </div>
  `}const ie=[{id:"sun",hi:"सूर्य",short:"सू"},{id:"moon",hi:"चंद्र",short:"चं"},{id:"mars",hi:"मंगल",short:"मं"},{id:"mercury",hi:"बुध",short:"बु"},{id:"jupiter",hi:"गुरु",short:"गु"},{id:"venus",hi:"शुक्र",short:"शु"},{id:"saturn",hi:"शनि",short:"श"}],Ue={sun:["moon","mars","jupiter"],moon:["sun","mercury"],mars:["sun","moon","jupiter"],mercury:["sun","venus"],jupiter:["sun","moon","mars"],venus:["mercury","saturn"],saturn:["mercury","venus"]},_e={sun:["venus","saturn"],moon:[],mars:["mercury"],mercury:["moon"],jupiter:["mercury","venus"],venus:["sun","moon"],saturn:["sun","moon","mars"]};function Oe(e){const r={},n={सूर्य:"sun",चंद्र:"moon",चन्द्र:"moon",मंगल:"mars",बुध:"mercury",गुरु:"jupiter",बृहस्पति:"jupiter",शुक्र:"venus",शनि:"saturn"};for(const l of e.planets){const c=Object.keys(n).find(p=>l.hindiName.includes(p));c&&(r[n[c]]=l.rashiNumber)}return ie.map(l=>{const c=ie.map(p=>{if(l.id===p.id)return{label:"स्वयं",color:t.inkMuted,bg:"#F1ECE0"};const d=Ue[l.id].includes(p.id)?1:_e[l.id].includes(p.id)?-1:0,i=r[l.id]||1,s=((r[p.id]||1)-i+12)%12+1,m=[2,3,4,10,11,12].includes(s),y=d+(m?1:-1);return y>=2?{label:"अति मित्र",color:"#065F46",bg:"#D1FAE5"}:y===1?{label:"मित्र",color:"#047857",bg:"#ECFDF5"}:y===0?{label:"सम",color:"#92400E",bg:"#FEF3C7"}:y===-1?{label:"शत्रु",color:"#B45309",bg:"#FFEDD5"}:{label:"अति शत्रु",color:"#991B1B",bg:"#FEE2E2"}});return{grahaHi:l.hi,cells:c}})}function We(e){const r=e.phase1Astronomy?.spaceTime.year||parseInt((e.input.dob||"1995").slice(0,4),10)||1995,n=e.panchang.moonRashiNumber||1,c=e.planets.find(L=>L.hindiName.includes("शनि"))?.rashiNumber||1,p=(n+10)%12+1,d=n,i=n%12+1,w=L=>At[L-1]?.nameHi||String(L),s=29.457/12,m=(p-c+12)%12;let y=Math.round(r+m*s);y-r>27&&(y-=29);const b=[],$=["प्रथम आवर्तन","द्वितीय आवर्तन","तृतीय आवर्तन"],D=[{name:"उदय चरण (प्रथम ढाई वर्ष)",rashi:p,guidance:"व्यय नियंत्रण, नई जिम्मेदारियाँ, यात्राएँ व आधार-निर्माण का समय।"},{name:"शिखर चरण (मध्य ढाई वर्ष)",rashi:d,guidance:"परिश्रम की परीक्षा, आत्म-अनुशासन, धैर्य व मानसिक दृढ़ता का काल।"},{name:"अस्त चरण (अंतिम ढाई वर्ष)",rashi:i,guidance:"धीरे-धीरे राहत, संचित परिश्रम का स्थायी फल व आर्थिक सुधार।"}];for(let L=0;L<3;L++){const P=Math.round(y+L*29.46);D.forEach((E,k)=>{const x=Math.round(P+k*s),C=Math.round(P+(k+1)*s);if(C<r)return;const M=Math.max(r,x),R=Math.max(0,M-r),h=Math.max(R+1,C-r);R>92||b.push({cycleLabel:$[L],phaseLabel:E.name,saturnRashi:`${w(E.rashi)} (${E.rashi})`,approxPeriod:`${M} – ${C}`,ageSpan:`${R}–${h} वर्ष`,guidanceHi:E.guidance})})}return b}const Ye={सूर्य:"प्रशासनिक सम्मान, पिता-सहयोग, आत्मविश्वास व पदोन्नति के संकेत।",चंद्र:"मानसिक संतुलन, पारिवारिक सुख, जनसंपर्क एवं यात्रा लाभ।",मंगल:"साहस, भूमि-भवन कार्य, तकनीकी प्रगति व ऊर्जावान निर्णय।",राहु:"नवीन अवसर, तकनीकी/विदेश विस्तार व सतर्क विवेक की आवश्यकता।",गुरु:"ज्ञान-वृद्धि, शुभ मांगलिक कार्य, संतान सुख व आर्थिक स्थिरता।",शनि:"धैर्यपूर्वक कर्म, अनुशासन, दीर्घकालिक स्थायी निर्माण व न्याय।",बुध:"बौद्धिक विकास, व्यवसाय-संवाद, शिक्षा व लेखन-लाभ का काल।",केतु:"आध्यात्मिक साधना, शोध, एकांत चिंतन व गूढ़ ज्ञान की प्राप्ति।",शुक्र:"सुख-सुविधा, कला, वैवाहिक सौहार्द, वाहन एवं समृद्धि के योग।"},qe={सूर्य:"आत्मा, मान-सम्मान, पिता, नेतृत्व क्षमता और राजकीय कार्यों का कारक ग्रह।",चंद्र:"मन, माता, भावनात्मक स्थिरता, जल तत्व, जनसंपर्क और मानसिक सुख का कारक।",मंगल:"साहस, पराक्रम, भूमि-संपत्ति, तकनीकी दक्षता और भ्रातृ-सुख का कारक ग्रह।",बुध:"बुद्धि, वाणी, व्यापार, गणित, संवाद कौशल और तार्किक निर्णय शक्ति का कारक।",गुरु:"ज्ञान, धर्म, संतान, भाग्य, धन-वृद्धि और गुरु-कृपा का परम शुभ कारक ग्रह।",शुक्र:"वैवाहिक सुख, कला, सौंदर्य, वाहन, ऐश्वर्य और रचनात्मक समृद्धि का कारक।",शनि:"कर्म, अनुशासन, आयु, न्याय, सेवा भाव और दीर्घकालिक स्थायी सफलता का कारक।",राहु:"नवीन सोच, आधुनिक तकनीक, विदेश यात्रा, शोध और तीव्र महत्वाकांक्षा का कारक।",केतु:"मोक्ष, वैराग्य, सूक्ष्म अंतर्ज्ञान, आध्यात्मिक उन्नति और मंत्र-साधना का कारक।"},Je=[{graha:"सूर्य",mantra:"ॐ घृणि सूर्याय नमः",daan:"गेहूँ, गुड़, ताम्र पात्र, लाल वस्त्र",day:"रविवार"},{graha:"चंद्र",mantra:"ॐ सों सोमाय नमः",daan:"चावल, दूध, मिश्री, श्वेत वस्त्र",day:"सोमवार"},{graha:"मंगल",mantra:"ॐ अं अंगारकाय नमः",daan:"मसूर दाल, गुड़, लाल फल",day:"मंगलवार"},{graha:"बुध",mantra:"ॐ बुं बुधाय नमः",daan:"हरी मूंग, पालक, हरा वस्त्र, पुस्तकें",day:"बुधवार"},{graha:"गुरु",mantra:"ॐ बृं बृहस्पतये नमः",daan:"चना दाल, हल्दी, पीला वस्त्र, धार्मिक ग्रंथ",day:"गुरुवार"},{graha:"शुक्र",mantra:"ॐ शुं शुक्राय नमः",daan:"दही, चावल, खीर, श्वेत मिष्ठान्न",day:"शुक्रवार"},{graha:"शनि",mantra:"ॐ शं शनैश्चराय नमः",daan:"काले तिल, सरसों तेल, काली उड़द, कंबल",day:"शनिवार"},{graha:"राहु",mantra:"ॐ रां राहवे नमः",daan:"सतनाजा, कंबल, पक्षियों को दाना",day:"बुधवार / शनिवार"},{graha:"केतु",mantra:"ॐ कें केतवे नमः",daan:"तिल, ऊनी वस्त्र, श्वान को भोजन",day:"मंगलवार / शनिवार"}],de={sun:"सू",moon:"चं",mars:"मं",mercury:"बु",jupiter:"गु",venus:"शु",saturn:"श",rahu:"रा",ketu:"के"};function ce(e){return dt(e||"").replace(/[º˚]/g,"°").replace(/[′’`]/g,"'").replace(/[″”]/g,'"').replace(/\s+/g," ").trim()}function ft(e){let r=dt(String(e??"")).normalize("NFC");if(!r)return"";for(let n=0;n<4;n++){const l=r.replace(/\(([^()]*?)\s*\(([A-Za-z][A-Za-z0-9\s/.-]{1,28})\)([^()]*?)\)/gu,(c,p,d,i)=>`(${`${p.trim()}${i.trim()?` ${i.trim()}`:""}`.trim()})`);if(l===r)break;r=l}for(let n=0;n<3;n++){const l=r.replace(/\(([^()]+?)\s*\(([^()]+?)\)([^()]*?)\)/gu,(c,p,d,i)=>`(${p.trim()} — ${d.trim()}${i.trim()?` ${i.trim()}`:""})`);if(l===r)break;r=l}return r.replace(/\){2,}/g,")").replace(/\({2,}/g,"(").replace(/\(\s*\)/g,"").replace(/\s{2,}/g," ").trim()}function Wt(e){return dt(e).normalize("NFC").replace(/ॐ\s*ह्रां\s*ह्रीं\s*ह्रौं\s*सः\s*सूर्याय\s*नमः/g,"ॐ घृणि सूर्याय नमः").replace(/ॐ\s*श्रां\s*श्रीं\s*श्रौं\s*सः\s*च[ंन][्]?द्रमसे\s*नमः/g,"ॐ सों सोमाय नमः").replace(/ॐ\s*क्रां\s*क्रीं\s*क्रौं\s*सः\s*भौमाय\s*नमः/g,"ॐ अं अंगारकाय नमः").replace(/ॐ\s*ब्रां\s*ब्रीं\s*ब्रौं\s*सः\s*बुधाय\s*नमः/g,"ॐ बुं बुधाय नमः").replace(/ॐ\s*ग्रां\s*ग्रीं\s*ग्रौं\s*सः\s*गुरवे\s*नमः/g,"ॐ बृं बृहस्पतये नमः").replace(/ॐ\s*द्रां\s*द्रीं\s*द्रौं\s*सः\s*शुक्राय\s*नमः/g,"ॐ शुं शुक्राय नमः").replace(/ॐ\s*प्रां\s*प्रीं\s*प्रौं\s*सः\s*शनैश्चराय\s*नमः/g,"ॐ शं शनैश्चराय नमः").replace(/ॐ\s*भ्रां\s*भ्रीं\s*भ्रौं\s*सः\s*राहवे\s*नमः/g,"ॐ रां राहवे नमः").replace(/ॐ\s*स्?त्रां\s*स्?त्रीं\s*स्?त्रौं\s*सः\s*केतवे\s*नमः/g,"ॐ कें केतवे नमः").replace(/ॐ\s*स्रां\s*स्रीं\s*स्रौं\s*सः\s*केतवे\s*नमः/g,"ॐ कें केतवे नमः").replace(/ॐ\s*केम्\s*केतवे\s*नमः/g,"ॐ कें केतवे नमः").normalize("NFC")}const Ve={जनवरी:1,फरवरी:2,मार्च:3,अप्रैल:4,मई:5,जून:6,जुलाई:7,अगस्त:8,सितंबर:9,सितम्बर:9,अक्टूबर:10,अक्तूबर:10,नवंबर:11,नवम्बर:11,दिसंबर:12,दिसम्बर:12};function pe(e){const r=String(e??"").trim(),n=r.match(/^(\d{1,2})\s+([^\s\d]+)\s+(\d{4})$/u);if(n){const c=parseInt(n[1],10),p=Ve[n[2]]||1;return parseInt(n[3],10)*1e4+p*100+c}const l=r.match(/^(\d{4})[-/](\d{1,2})[-/](\d{1,2})$/);return l?parseInt(l[1],10)*1e4+parseInt(l[2],10)*100+parseInt(l[3],10):null}function ae(e,r,n,l){let c=String(e??"").normalize("NFC").trim(),p=String(r??"").normalize("NFC").trim();if(typeof n=="number"&&typeof l=="number"&&Number.isFinite(n)&&Number.isFinite(l)&&n>l){const d=c;c=p,p=d}else{const d=pe(c),i=pe(p);if(d!==null&&i!==null&&d>i){const w=c;c=p,p=w}}return{startLabel:c,endLabel:p}}function Yt(e){return a(String(e??"").normalize("NFC")).replace(/(\(\s*\d{1,3}°\s*\d{1,2}'(?:\s*\d{1,2}&quot;)?\s*\)|\b\d{1,3}°\s*\d{1,2}'(?:\s*\d{1,2}&quot;)?)/g,`<span class="pj-h2c-no-lift" style="font-family: 'Segoe UI', 'Liberation Sans', 'Helvetica Neue', Arial, sans-serif; font-variant-numeric: tabular-nums; font-weight: 700; direction: ltr; unicode-bidi: isolate; white-space: nowrap;">$1</span>`).replace(/भाव\s+(\d{1,2})\s+व\s+(\d{1,2})/gu,`<span class="pj-h2c-no-lift" style="display: inline-block; white-space: nowrap; direction: ltr; unicode-bidi: isolate;"><span style="display: inline-block; font-family: ${U}; font-weight: 700;">भाव</span><span style="display: inline-block; margin-left: 2.5px; font-family: 'Segoe UI', 'Liberation Sans', 'Helvetica Neue', Arial, sans-serif; font-variant-numeric: tabular-nums; font-weight: 700;">$1</span><span style="display: inline-block; margin: 0 3px; font-family: ${U}; font-weight: 700;">व</span><span style="display: inline-block; font-family: 'Segoe UI', 'Liberation Sans', 'Helvetica Neue', Arial, sans-serif; font-variant-numeric: tabular-nums; font-weight: 700;">$2</span></span>`)}function qt(e,r,n,l=!1){const{cleanMode:c,chartStyle:p}=n,d=r.appLogoDataUrl,i=`${e.input.name} • जन्म: ${e.input.formattedDob}, ${e.input.formattedTime} • ${e.input.birthPlace}`,w=e.mahadashas.find(o=>o.isCurrent)||e.mahadashas[0],s=e.phase1Astronomy,m=e.shadbalaBhava,y=e.phase2Jyotish,b=[],$=new Se(`book|${e.input.dob}|${e.panchang.lagnaNumber}|${e.panchang.moonRashiNumber}`),D={esc:a,buildBookPageHeader:Q,buildSectionTitleBar:_,personHeader:i,appLogo:d},L=ye({nakshatraName:e.panchang.nakshatraName,pada:e.panchang.nakshatraPada,moonSiderealLon:e.planets.find(o=>o.id==="moon")?.siderealLon}),P=Zt(e.lagnaChart,p,258,`लग्न (${e.panchang.lagnaName})`,l,e.panchang.lagnaDegInt),E=`
    <div style="width: 100%; height: 100%; box-sizing: border-box; display: flex; flex-direction: column; justify-content: space-between; background: ${t.warmIvory}; border: 3.5px solid ${t.templeGold}; border-radius: 14px; padding: 14px 16px; position: relative; box-shadow: inset 0 0 0 2px #FFFDF8, inset 0 0 0 3.5px rgba(255, 111, 0, 0.35);">
      <!-- Top Cosmic Deep Navy Royal Masthead with Centered Real App Logo -->
      <div style="background: linear-gradient(135deg, ${t.cosmicNavy} 0%, #162440 68%, #2C1608 100%); border: 2px solid ${t.templeGold}; border-radius: 12px; padding: 11px 16px 13px 16px; text-align: center; color: ${t.warmIvory};">
        <div style="display: block; font-size: 10px; font-weight: 800; color: ${t.templeGold}; letter-spacing: 0; line-height: 1.25; padding-top: 2px; padding-bottom: 4px;">
          ॥ श्री गणेशाय नमः ॥ &nbsp;•&nbsp; ॥ सर्वे भवन्तु सुखिनः ॥
        </div>
        <div style="display: table; margin: 7px auto 0 auto;">
          <div style="display: table-cell; vertical-align: middle; padding-right: 14px;">
            ${Pt(58,d,2.8)}
          </div>
          <div style="display: table-cell; vertical-align: middle; text-align: left;">
            <div style="display: block; font-size: 20px; font-weight: 900; color: #FDE68A; letter-spacing: 0; line-height: 1.3; padding-bottom: 2px;">पण्डित जी ऑनलाइन</div>
            <div style="display: block; font-size: 9.2px; font-weight: 800; color: #F8FAFC; letter-spacing: 0; word-spacing: 2px; margin-top: 7px; line-height: 1.35;"><span style="display: inline-block; margin-right: 4px;">PANDIT</span><span style="display: inline-block; margin-right: 4px;">JI</span><span style="display: inline-block; margin-right: 5px;">ONLINE</span>— प्रामाणिक वैदिक ज्योतिष महा-ग्रंथ</div>
          </div>
        </div>
        <div style="margin-top: 10px; text-align: center;">
          <span class="book-pill" style="display: inline-flex; align-items: center; justify-content: center; line-height: 1.15; padding: 4px 16px; vertical-align: middle; box-sizing: border-box; text-align: center; background: rgba(255, 111, 0, 0.24); border: 1.2px solid ${t.templeGold}; color: #FDE68A; font-size: 8.8px; font-weight: 800; border-radius: 999px;">
            <span style="${Et}">सम्पूर्ण बृहत् जन्म कुंडली पुस्तक • दृक् गणित लाहिड़ी अयनांश</span>
          </span>
        </div>
      </div>

      <!-- Native Name & Birth Metadata Card -->
      <div style="text-align: center; margin: 8px 0 6px 0;">
        <div style="display: block; font-size: 9.5px; font-weight: 800; color: ${t.saffronDeep}; letter-spacing: 0; line-height: 1.25;">
          यजमान / जातक का शुभ नाम
        </div>
        <div style="display: block; font-size: 27px; font-weight: 900; color: ${t.cosmicNavy}; line-height: 1.25; margin-top: 2px;">
          ${a(e.input.name)}
        </div>
        <div style="width: 170px; height: 2.8px; background: linear-gradient(90deg, transparent, ${t.saffron}, ${t.templeGold}, transparent); margin: 5px auto 0 auto;"></div>
      </div>

      <div class="book-cover-meta-card" style="background: ${t.pureIvory}; border: 1.6px solid ${t.templeGold}; border-radius: 10px; padding: 9px 14px; display: grid; grid-template-columns: 1fr 1fr; gap: 6px 14px; font-size: 9.2px; color: ${t.inkPrimary}; line-height: 1.35;">
        <div><b style="color:${t.saffronDeep};">जन्म तिथि:</b> ${a(e.input.formattedDob)} (~${e.input.ageYears} वर्ष)</div>
        <div><b style="color:${t.saffronDeep};">जन्म समय:</b> ${a(e.input.formattedTime)}</div>
        <div><b style="color:${t.saffronDeep};">जन्म स्थान:</b> ${a(e.input.birthPlace)}</div>
        <div><b style="color:${t.saffronDeep};">टाइमज़ोन:</b> ${a(e.input.timeZone||"Asia/Kolkata")} (${a(e.input.utcOffsetFormatted||"UTC+05:30")})${e.input.isDstActive?" • DST":""}</div>
        <div><b style="color:${t.saffronDeep};">अक्षांश / देशांतर:</b> ${e.input.latitude.toFixed(3)}° N, ${e.input.longitude.toFixed(3)}° E</div>
        <div><b style="color:${t.saffronDeep};">अयनांश (लाहिड़ी):</b> ${a(e.input.ayanamsaDMS)} • True Node</div>
      </div>

      <!-- Large Main Lagna D-1 Chart Preview (Exact same block card pattern as Page 4 B1) -->
      <div class="book-chart-box" style="display: block; flex-shrink: 0; width: 288px; margin: 6px auto; background: ${t.pureIvory}; border: 1.8px solid ${t.templeGold}; border-radius: 11px; padding: 8px 12px 10px 12px; text-align: center; box-sizing: border-box;">
        <div style="display: block; font-size: 10.4px; font-weight: 900; color: ${t.cosmicNavy}; padding-top: 3px; padding-bottom: 5px; line-height: 1.28;">
          मुख्य जन्म लग्न कुंडली — ${a(e.panchang.lagnaName)} लग्न (D-1)
        </div>
        ${P}
      </div>

      <!-- 4 Core Identity Pillars (Exact optical vertical centering) -->
      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; margin-bottom: 6px;">
        <div class="book-cover-pillar-card" style="display: flex; flex-direction: column; justify-content: center; background: ${t.cosmicNavy}; color: ${t.warmIvory}; border: 1.2px solid ${t.templeGold}; border-radius: 8px; padding: 6.5px 8px; text-align: center; box-sizing: border-box;">
          <div style="display: block; font-size: 7.8px; color: #FCD34D; font-weight: 700; line-height: 1.28;">जन्म लग्न</div>
          <div style="display: block; font-size: 11px; font-weight: 800; margin-top: 3px; line-height: 1.28;">${a(e.panchang.lagnaName)}</div>
          <div style="display: block; font-size: 7.6px; color: #CBD5E1; margin-top: 3px; line-height: 1.28;">स्वामी: ${a(e.panchang.lagnaLord)}</div>
        </div>
        <div class="book-cover-pillar-card" style="display: flex; flex-direction: column; justify-content: center; background: ${t.cosmicNavy}; color: ${t.warmIvory}; border: 1.2px solid ${t.templeGold}; border-radius: 8px; padding: 6.5px 8px; text-align: center; box-sizing: border-box;">
          <div style="display: block; font-size: 7.8px; color: #FCD34D; font-weight: 700; line-height: 1.28;">चंद्र राशि</div>
          <div style="display: block; font-size: 11px; font-weight: 800; margin-top: 3px; line-height: 1.28;">${a(e.panchang.moonRashiName)}</div>
          <div style="display: block; font-size: 7.6px; color: #CBD5E1; margin-top: 3px; line-height: 1.28;">स्वामी: ${a(e.panchang.moonRashiLord)}</div>
        </div>
        <div class="book-cover-pillar-card" style="display: flex; flex-direction: column; justify-content: center; background: ${t.cosmicNavy}; color: ${t.warmIvory}; border: 1.2px solid ${t.templeGold}; border-radius: 8px; padding: 6.5px 8px; text-align: center; box-sizing: border-box;">
          <div style="display: block; font-size: 7.8px; color: #FCD34D; font-weight: 700; line-height: 1.28;">जन्म नक्षत्र</div>
          <div style="display: block; font-size: 9.2px; font-weight: 800; margin-top: 3px; line-height: 1.32;">${a(e.panchang.nakshatraName)} • चरण ${e.panchang.nakshatraPada} • नामाक्षर: '${a(L.syllableHi)}'</div>
          <div style="display: block; font-size: 7.2px; color: #6EE7B7; margin-top: 2.5px; line-height: 1.25;">स्वामी: ${a(e.panchang.nakshatraLord.split(" (")[0])} (${a(L.syllableEn)})</div>
        </div>
        <div class="book-cover-pillar-card" style="display: flex; flex-direction: column; justify-content: center; background: ${t.cosmicNavy}; color: ${t.warmIvory}; border: 1.2px solid ${t.templeGold}; border-radius: 8px; padding: 6.5px 8px; text-align: center; box-sizing: border-box;">
          <div style="display: block; font-size: 7.8px; color: #FCD34D; font-weight: 700; line-height: 1.28;">वर्तमान महादशा</div>
          <div style="display: block; font-size: 11px; font-weight: 800; margin-top: 3px; line-height: 1.28;">${a(w?.planet||"-")}</div>
          <div style="display: block; font-size: 7.6px; color: #6EE7B7; margin-top: 3px; line-height: 1.28;">${a(w?.startYear)}–${a(w?.endYear)}</div>
        </div>
      </div>

      <!-- Cover Bottom Brand Strip + Real QR Code (Zero Overlap) -->
      <div style="background: ${t.templeGoldSoft}; border: 1.6px solid ${t.templeGold}; border-radius: 10px; padding: 9px 13px; display: flex; align-items: center; justify-content: space-between; gap: 12px;">
        <div style="flex: 1; font-size: 8.8px; color: ${t.inkPrimary}; line-height: 1.5;">
          <div style="font-weight: 900; color: ${t.cosmicNavy}; font-size: 10.5px;">
            मार्गदर्शक: ${a(wt.founderHi)} (वैदिक ज्योतिषाचार्य एवं कर्मकाण्ड विशेषज्ञ)
          </div>
          <div>${a(wt.locationHi)}</div>
          <div>सम्पर्क / WhatsApp: <b>${a(wt.phoneDisplay)}</b> &nbsp;|&nbsp; वेबसाइट: ${Ot(t.saffronDeep)}</div>
        </div>
        ${r.websiteQrDataUrl?`<div style="background:#FFFFFF; border: 1.6px solid ${t.templeGold}; border-radius: 8px; padding: 4px; text-align:center; flex-shrink:0;">
                 <img src="${r.websiteQrDataUrl}" alt="Pandit Ji Online QR" style="width: 60px; height: 60px; display:block;" />
                 <div style="font-size: 6.8px; font-weight: 800; color: ${t.cosmicNavy}; margin-top: 2px;">स्कैन करें</div>
               </div>`:""}
      </div>
    </div>
  `;b.push({sectionCode:"COVER",sectionTag:"मुख्य आवरण (Cover)",isCover:!0,html:E});const k=(o,g)=>{const T=String(o||"").trim();if(!T)return"—";const u=new RegExp(`(?:\\s*${g})+$`,"u");return`${T.replace(u,"").trim()} ${g}`.trim()},x=[["वार (सूर्योदयात्)",`${e.panchang.vaar} (स्वामी: ${e.panchang.vaarLord})`,"जन्म लग्न",`${e.panchang.lagnaName} (${e.panchang.lagnaDegreeDMS})`],["तिथि एवं पक्ष",`${e.panchang.tithi} • ${e.panchang.paksha}`,"लग्नेश (Lagna Lord)",e.panchang.lagnaLord],["नक्षत्र एवं चरण",`${e.panchang.nakshatraName} (चरण ${e.panchang.nakshatraPada})`,"चंद्र राशि एवं स्वामी",`${e.panchang.moonRashiName} (${e.panchang.moonRashiLord})`],["जन्म नक्षत्रानुसार शुभ नामाक्षर",L.avakahadaDetailLabel,"प्रचलित नाम राशि (प्रवेशित नाम से)",e.panchang.naamRashi],["नक्षत्र स्वामी",e.panchang.nakshatraLord,"सूर्य राशि एवं स्वामी",`${e.panchang.sunRashiName} (${e.panchang.sunRashiLord})`],["योग एवं करण",`${k(e.panchang.yoga,"योग")} • ${k(e.panchang.karana,"करण")}`,"सूर्योदय / सूर्यास्त",s?`${s.birthPanchang.sunriseHi} / ${s.birthPanchang.sunsetHi}`:"स्थानीय सूर्योदय आधारित"],["गण एवं नाड़ी",`${k(e.panchang.gana,"गण")} • ${k(e.panchang.nadi,"नाड़ी")}`,"योनि एवं वर्ण",`${e.panchang.yoni} • ${e.panchang.varna}`],["वश्य एवं तत्व",`${e.panchang.vashya} • ${e.panchang.tatva}`,"पाया (Paya)",e.panchang.paya],["इष्टदेव",e.lucky.ishtaDevta,"शुभ अंक व वार",`${e.lucky.luckyNumbers} • ${e.lucky.luckyDays}`],["शुभ रंग एवं दिशा",`${e.lucky.luckyColors} • ${e.lucky.luckyDirection}`,"टाइमज़ोन / UTC",`${e.input.timeZone||"Asia/Kolkata"} (${e.input.utcOffsetFormatted||"UTC+05:30"})`],["जन्म अक्षांश / देशांतर",`${e.input.latitude.toFixed(3)}° N, ${e.input.longitude.toFixed(3)}° E`,"अयनांश (लाहिड़ी)",`${e.input.ayanamsaDMS} • True Node`]],C=e.input.warningsHi&&e.input.warningsHi.length>0?`<div class="book-card" style="margin-top: 10px; background: #FEF2F2; border: 1.5px solid #F59E0B; border-radius: 8px; padding: 9px 12px; font-size: 8.6px; color: #7C2D12; line-height: 1.55;">
           <b style="color:#B45309;">⚠ जन्म-समय / टाइमज़ोन / संधि सूचना:</b>
           ${e.input.warningsHi.map(o=>`<div style="margin-top:3px;">• ${a(o)}</div>`).join("")}
         </div>`:`<div class="book-card" style="margin-top: 10px; background: ${t.emeraldSoft}; border: 1.2px solid #10B981; border-radius: 8px; padding: 9px 12px; font-size: 8.6px; color: #065F46; line-height: 1.55;">
           <b>✓ सटीक खगोलीय सत्यापन:</b> यह जन्मपत्री ऐतिहासिक IANA टाइमज़ोन (${a(e.input.timeZone||"Asia/Kolkata")}), दृक् गणित लाहिड़ी चित्रा पक्ष अयनांश (${a(e.input.ayanamsaDMS)}) तथा True Node मानक पर आधारित है।
         </div>`,M=`
    ${Q("खण्ड A1 : जन्म पंचांग एवं अवकहड़ा चक्र",i,d)}
    ${_("A1","जन्म पंचांग, खगोलीय विवरण एवं अवकहड़ा चक्र (Birth Panchang & Avakahada)","दृक् गणित सिंक्रनाइज़्ड")}
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
        ${x.map((o,g)=>`
            <tr style="background:${g%2===0?"#FFFDF8":"#FEF6E4"};">
              <td style="font-weight:800; color:${t.saffronDeep}; padding: 6.5px 8px; line-height: 1.42; vertical-align: middle; overflow: visible;">${a(o[0])}</td>
              <td style="font-weight:700; padding: 6.5px 8px; line-height: 1.42; vertical-align: middle; overflow: visible;">${a(o[1])}</td>
              <td style="font-weight:800; color:${t.saffronDeep}; padding: 6.5px 8px; line-height: 1.42; vertical-align: middle; overflow: visible;">${a(o[2])}</td>
              <td style="font-weight:700; padding: 6.5px 8px; line-height: 1.42; vertical-align: middle; overflow: visible;">${a(o[3])}</td>
            </tr>`).join("")}
      </tbody>
    </table>
    ${C}
    ${te("जन्म पंचांग और अवकहड़ा चक्र का महत्व","वैदिक ज्योतिष में जन्म तिथि, वार, नक्षत्र, योग और करण व्यक्ति के मूल स्वभाव तथा जीवन की लय दर्शाते हैं। सूर्योदय से पूर्व जन्म होने पर वैदिक वार पूर्व दिवस का माना जाता है। अवकहड़ा चक्र (गण, नाड़ी, योनि, वर्ण, वश्य, पाया) विवाह गुण मिलान और नामाक्षर चयन का आधार होता है।","विवाह मिलान एवं दशा गणना में जन्म के समय चंद्रमा की राशि (जन्म राशि) और नक्षत्र चरण को सदैव प्रधान माना जाता है।")}
  `;b.push({sectionCode:"A",sectionTag:"खण्ड A : जन्म पंचांग व अवकहड़ा",html:M}),b.push(je(e,D));const R=p==="south"?Kt.south.summary.hi:Kt.north.summary.hi,h=`
    ${Q("खण्ड A2 : सरल कुंडली मार्गदर्शिका (1–12 राशि बनाम भाव)",i,d)}
    ${_("A2","कुंडली कैसे पढ़ें? — 1–12 राशि बनाम भाव एवं ग्रह संकेत कुंजी","सामान्य जन के लिए सरल गाइड")}
    <div class="book-card" style="background: ${t.pureIvory}; border: 1.5px solid ${t.templeGold}; border-radius: 10px; padding: 12px 14px; font-size: 9px; line-height: 1.58; color: ${t.inkPrimary};">
      <div style="font-weight: 900; color: ${t.cosmicNavy}; font-size: 10.5px; margin-bottom: 4px;">
        1) ${a(Kt.heading.hi)}
      </div>
      <div>${a(R)}</div>

      <div style="margin-top: 12px; font-weight: 800; color: ${t.saffronDeep}; font-size: 9.5px;">
        2) 1 से 12 राशि अंक सूची एवं उनके स्वामी ग्रह (12 Rashis & Lords):
      </div>
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 7px; margin-top: 6px;">
        ${At.map(o=>`<div style="background:${t.warmIvory}; border:1px solid ${t.borderMuted}; border-radius:6px; padding:6px 9px; font-size:8.6px;">
               <b style="color:${t.saffronDeep};">${o.number}. ${a(o.nameHi)}</b>
               <span style="color:${t.inkMuted};"> (${a(o.nameEn)})</span>
               <div style="font-size:8px; color:${t.cosmicNavy}; margin-top:1px;">स्वामी: <b>${a(o.lordHi)}</b></div>
             </div>`).join("")}
      </div>

      <div style="margin-top: 12px; font-weight: 800; color: ${t.saffronDeep}; font-size: 9.5px;">
        3) चार्ट में प्रयुक्त ग्रह संक्षिप्ताक्षर एवं विशेष चिह्न (Planet Legend):
      </div>
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 7px; margin-top: 6px;">
        ${xe.map(o=>`<div class="book-legend-item" style="background:${t.warmIvory}; border:1px solid ${t.borderMuted}; border-radius:6px; padding:6px 9px; font-size:8.6px; line-height:1.65; color:${t.inkPrimary}; overflow:visible; white-space:nowrap;">
               <span style="font-weight:700; color:${t.cosmicNavy};">${a(o.shortHi.normalize("NFC"))} / ${a(o.shortEn)}</span> = ${a(o.fullHi.normalize("NFC"))} (${a(o.fullEn)})
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
  `;b.push({sectionCode:"A2",sectionTag:"खण्ड A : सरल कुंडली गाइड",html:h});const z=(o,g,T,u,f)=>`
    <div class="book-chart-box" style="background: ${t.pureIvory}; border: 1.6px solid ${t.templeGold}; border-radius: 11px; padding: 10px 12px; text-align: center; overflow: visible;">
      <div style="font-size: 10.2px; font-weight: 900; color: ${t.cosmicNavy}; margin-bottom: 7px; padding-top: 2px; padding-bottom: 2px; line-height: 1.44; overflow: visible;">${a(o)}</div>
      ${Zt(g,p,u,o,l,f)}
      <div style="margin-top: 8px; padding-top: 7px; border-top: 1px dashed ${t.borderMuted}; font-size: 8.4px; color: ${t.inkPrimary}; line-height: 1.48; text-align: left;">
        ${a(T)}
      </div>
    </div>
  `,I=`
    ${Q("खण्ड B1 : जन्म लग्न (D-1) एवं नवांश कुंडली (D-9)",i,d)}
    ${_("B1","प्रमुख आधार चक्र — जन्म लग्न कुंडली (D-1) एवं नवांश कुंडली (D-9)",p==="south"?"दक्षिण भारतीय प्रारूप":"उत्तर भारतीय प्रारूप")}
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-top: 8px;">
      ${z(`जन्म लग्न कुंडली (D-1) — ${e.panchang.lagnaName}`,e.lagnaChart,It.lagna_d1.shortPurpose.hi,290,e.panchang.lagnaDegInt)}
      ${z(`नवांश कुंडली (D-9) — ${s?.shodashavarga.find(o=>o.spec.id==="D9")?.ascendantRashiNameHi||e.navamsaChart[0]?.rashiName||""}`,e.navamsaChart,It.navamsha_d9.shortPurpose.hi,290)}
    </div>
    <div style="display: block; margin-top: 12px; padding: 4px 12px 8px 12px; background: ${t.templeGoldSoft}; border: 1.2px solid ${t.templeGold}; border-radius: 8px; font-size: 8.4px; color: ${t.cosmicNavy}; text-align: center; font-weight: 700; line-height: 1.25;">
      ग्रह कुंजी: सू=सूर्य • चं=चंद्र • मं=मंगल • बु=बुध • गु=गुरु • शु=शुक्र • श=शनि • रा=राहु • के=केतु &nbsp;|&nbsp; * वक्री &nbsp;|&nbsp; ^ अस्त &nbsp;|&nbsp; 1–12 अंक = राशि संख्या
    </div>
    ${te("लग्न (D-1) और नवांश (D-9) साथ क्यों देखे जाते हैं?","जन्म लग्न कुंडली (D-1) जीवन रूपी वृक्ष का तना और मूल संरचना है, जबकि नवांश कुंडली (D-9) उस वृक्ष का फल है। यदि कोई ग्रह D-1 में सामान्य दिखे परंतु D-9 में स्वराशि, उच्च या मित्र राशि (अथवा वर्गोत्तम — दोनों में एक ही राशि) में हो, तो वह जीवन के मध्य व उत्तरार्ध में अत्यंत शुभ फल देता है।","वैवाहिक जीवन, जीवनसाथी के स्वभाव और ग्रहों के वास्तविक आंतरिक बल के लिए नवांश कुंडली (D-9) का विश्लेषण अनिवार्य माना गया है।")}
  `;b.push({sectionCode:"B",sectionTag:"खण्ड B : लग्न व नवांश (D-1, D-9)",html:I});const N=`
    ${Q("खण्ड B2 : चंद्र, सूर्य एवं श्रीपति भाव चलित कुंडली",i,d)}
    ${_("B2","सुदर्शन एवं भाव चलित चक्र — चंद्र, सूर्य व वास्तविक MC आधारित श्रीपति चलित","संपूर्ण त्रि-दृष्टि विश्लेषण")}
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 6px;">
      ${z(`चंद्र कुंडली (Chandra) — ${e.panchang.moonRashiName}`,e.chandraChart,It.chandra.shortPurpose.hi,228)}
      ${z(`सूर्य कुंडली (Surya) — ${e.panchang.sunRashiName}`,e.suryaChart||e.lagnaChart,It.surya.shortPurpose.hi,228)}
    </div>
    <div style="margin-top: 10px; display: grid; grid-template-columns: 1fr 1.15fr; gap: 12px; align-items: stretch;">
      ${z("श्रीपति भाव चलित कुंडली (Sripati Bhava Chalit)",e.bhavaChalitChart||e.lagnaChart,It.bhava_chalit.shortPurpose.hi,210,e.panchang.lagnaDegInt)}
      <div class="book-card" style="background: ${t.pureIvory}; border: 1.4px solid ${t.templeGold}; border-radius: 10px; padding: 11px 13px; font-size: 8.6px; line-height: 1.55; color: ${t.inkPrimary}; display: flex; flex-direction: column; justify-content: center;">
        <div style="font-size: 10px; font-weight: 900; color: ${t.cosmicNavy}; border-bottom: 1px solid ${t.borderMuted}; padding-bottom: 5px; margin-bottom: 7px;">
          ✦ इसे कैसे समझें? — तीन चार्ट का समन्वय
        </div>
        <div><b style="color:${t.saffronDeep};">• चंद्र कुंडली:</b> मन, भावना, दैनिक गोचर (राशिफल) और साढ़ेसाती का आधार चंद्र कुंडली है।</div>
        <div style="margin-top:5px;"><b style="color:${t.saffronDeep};">• सूर्य कुंडली:</b> आत्मबल, करियर प्रतिष्ठा, प्रशासनिक योग और पिता के साथ संबंध सूर्य कुंडली से देखे जाते हैं।</div>
        <div style="margin-top:5px;"><b style="color:${t.saffronDeep};">• श्रीपति भाव चलित:</b> वास्तविक Midheaven (MC) से गणना करने पर कुछ ग्रह लग्न चार्ट के बजाय अगले या पिछले भाव का फल दे सकते हैं — यही सूक्ष्म अंतर चलित कुंडली दर्शाती है।</div>
      </div>
    </div>
    ${Rt("after_charts_b",r,c)}
  `;b.push({sectionCode:"B2",sectionTag:"खण्ड B : चंद्र, सूर्य व चलित",html:N});const F=`
    ${Q("खण्ड C1 : नवग्रह स्पष्ट तालिका (9 Planets Longitude)",i,d)}
    ${_("C1","नवग्रह स्पष्ट तालिका — राशि, अंश-कला-विकला, नक्षत्र-पद, अवस्था एवं चलित भाव","लाहिड़ी अयनांश + True Node")}
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
        ${e.planets.map((o,g)=>{const u=s?.planets[g]?.bhavaChalitHouse??o.houseInLagna,f=(o.shortHindi||de[o.id]||"").trim()||de[o.id]||"",H=dt(o.hindiName||"").normalize("NFC");return`
            <tr style="background:${g%2===0?"#FFFDF8":"#FEF6E4"};">
              <td class="pj-h2c-no-lift" style="font-weight:700; font-size: 8.1px; color:${t.cosmicNavy}; padding: 7px 6px; white-space: nowrap; line-height: 1.5;">${a(H)} <span style="white-space: nowrap;">(${a(f)})</span></td>
              <td style="font-weight:700; padding: 7px 6px;">${a(o.rashiName)}</td>
              <td style="text-align:center; font-weight:800; color:${t.saffronDeep};">${o.houseInLagna}</td>
              <td style="text-align:center; font-weight:800; color:${u!==o.houseInLagna?t.crimson:t.emerald};">${u}</td>
              <td class="pj-h2c-no-lift" style="font-family:'Segoe UI', 'Liberation Sans', Arial, sans-serif; font-variant-numeric: tabular-nums; font-weight:700; white-space: nowrap;">${a(ce(o.fullDegreeDMS))}</td>
              <td>${a(o.nakshatra)} (चरण ${o.pada})</td>
              <td style="font-weight:700; color:${o.statusBadge==="shubh"?t.emerald:o.statusBadge==="upay"?t.crimson:t.saffronDeep};">${a(o.dignity)}</td>
              <td>${o.id==="rahu"||o.id==="ketu"?"स्वाभाविक गति":`${o.isRetrograde?"वक्री (*) ":""}${o.isCombust?"अस्त (^) ":""}${!o.isRetrograde&&!o.isCombust?"मार्गी":""}`}</td>
            </tr>`}).join("")}
      </tbody>
    </table>
    ${Ht("navagraha")}
    <div class="book-card" style="margin-top: 8px; background: ${t.pureIvory}; border: 1.2px solid ${t.templeGold}; border-radius: 8px; padding: 9px 12px; font-size: 8.5px; line-height: 1.52;">
      <b style="color:${t.cosmicNavy};">ग्रह अवस्था संक्षेप:</b>
      0°–6° बाल/मृत (राशि अनुसार), 12°–18° युवा अवस्था (पूर्ण फलदायी), 29°–30° राशि संधि। यदि लग्न भाव और चलित भाव भिन्न हों (लाल रंग), तो ग्रह का भाव-फल चलित भाव के अनुसार भी विचारणीय होता है।
    </div>
  `;b.push({sectionCode:"C1",sectionTag:"खण्ड C : नवग्रह स्पष्ट तालिका",html:F});const A=we(e),O=Oe(e),q=`
    ${Q("खण्ड C2 : श्रीपति भाव संधि एवं पंचधा मैत्री चक्र",i,d)}
    ${_("C2","श्रीपति द्वादश भाव स्फुट एवं संधि (True MC-Based 12 Bhava Cusps)","आरंभ • मध्य • अंत")}
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
        ${A.map((o,g)=>`
            <tr style="background:${g%2===0?"#FFFDF8":"#FEF6E4"};">
              <td style="font-weight:800; color:${t.cosmicNavy}; line-height: 1.44; overflow: visible;">${a(o.bhavaName)}</td>
              <td style="line-height: 1.44; overflow: visible;">${a(o.rashiName)} (${a(o.rashiLord)})</td>
              <td style="font-family:${U}; font-variant-numeric: tabular-nums; font-weight:700; color:${t.emerald}; white-space: nowrap; line-height: 1.48; overflow: visible;">${a(o.madhyaDMS)}</td>
              <td style="font-family:${U}; font-variant-numeric: tabular-nums; white-space: nowrap; direction: ltr; unicode-bidi: isolate; line-height: 1.48; overflow: visible;">${a(o.sandhiStartDMS)} → ${a(o.sandhiEndDMS)}</td>
            </tr>`).join("")}
      </tbody>
    </table>

    ${_("C2b","ग्रह पंचधा मैत्री चक्र (नैसर्गिक + तात्कालिक मैत्री तालिका)","अति मित्र से अति शत्रु")}
    <table class="book-table" style="font-size: 7.9px; text-align:center;">
      <thead>
        <tr>
          <th style="width: 13%; text-align:left;">ग्रह</th>
          ${ie.map(o=>`<th style="width: 12.4%; text-align:center;">${a(o.hi)}</th>`).join("")}
        </tr>
      </thead>
      <tbody>
        ${O.map(o=>`
            <tr>
              <td style="text-align:left; font-weight:800; color:${t.cosmicNavy}; background:#FEF6E4;">${a(o.grahaHi)}</td>
              ${o.cells.map(g=>`<td style="font-weight:800; color:${g.color}; background:${g.bg};">${a(g.label)}</td>`).join("")}
            </tr>`).join("")}
      </tbody>
    </table>
    ${Ht("bhava_sphut")}
  `;b.push({sectionCode:"C2",sectionTag:"खण्ड C : भाव संधि व मैत्री चक्र",html:q});const v=s?.shodashavarga||[];if(v.length>0){const o=["sun","moon","mars","mercury","jupiter","venus","saturn","rahu","ketu"],g={sun:"सूर्य",moon:"चंद्र",mars:"मंगल",mercury:"बुध",jupiter:"गुरु",venus:"शुक्र",saturn:"शनि",rahu:"राहु",ketu:"केतु"},T=H=>At[(H||1)-1]?.nameHi.slice(0,3)||String(H),u=`
      ${Q("खण्ड C3 : सम्पूर्ण 16 षोडशवर्ग सारणी (D1–D60)",i,d)}
      ${_("C3","सम्पूर्ण 16 षोडशवर्ग ग्रह राशि सारणी (All 16 BPHS Shodashavarga D1–D60)","बृहत् पाराशर होरा मानक")}
      <table class="book-table" style="font-size: 7.9px;">
        <thead>
          <tr>
            <th style="width: 15%;">वर्ग कुंडली</th>
            <th style="width: 8%; text-align:center;">लग्न</th>
            ${o.map(H=>`<th style="width: 7.3%; text-align:center;">${g[H]}</th>`).join("")}
            <th style="width: 11.3%; text-align:center;">संवेदनशीलता</th>
          </tr>
        </thead>
        <tbody>
          ${v.map((H,B)=>{const G=H.spec.birthTimeSensitivity==="low"?"स्थिर":H.spec.birthTimeSensitivity==="moderate"?"मध्यम":H.spec.birthTimeSensitivity==="high"?"उच्च":"अति सूक्ष्म";return`
                <tr style="background:${B%2===0?"#FFFDF8":"#FEF6E4"};">
                  <td style="font-weight:800; color:${t.cosmicNavy};">${a(H.spec.id)} ${a(H.spec.nameHi)}</td>
                  <td style="text-align:center; font-weight:800; color:${t.saffronDeep};">${H.ascendantRashiNumber}-${a(T(H.ascendantRashiNumber))}</td>
                  ${o.map(J=>{const Ft=H.planetRashis[J];return`<td style="text-align:center; font-variant-numeric: tabular-nums; white-space: nowrap;">${Ft}-${a(T(Ft))}</td>`}).join("")}
                  <td style="text-align:center; font-weight:700; color:${H.spec.birthTimeSensitivity==="critical"?t.crimson:t.inkMuted};">${G}</td>
                </tr>`}).join("")}
        </tbody>
      </table>
      ${Ht("navamsha_shodashavarga")}
    `;b.push({sectionCode:"C3",sectionTag:"खण्ड C : 16 षोडशवर्ग सारणी",html:u});const f=[{code:"C4",range:[0,4],title:"षोडशवर्ग चक्र (भाग 1/4) — D-1 लग्न, D-2 होरा, D-3 द्रेष्काण एवं D-4 चतुर्थांश",banner:!1},{code:"C5",range:[4,8],title:"षोडशवर्ग चक्र (भाग 2/4) — D-7 सप्तांश, D-9 नवांश, D-10 दशमांश एवं D-12 द्वादशांश",banner:!1},{code:"C6",range:[8,12],title:"षोडशवर्ग चक्र (भाग 3/4) — D-16 षोडशांश, D-20 विंशांश, D-24 चतुर्विंशांश एवं D-27 सप्तविंशांश",banner:!1},{code:"C7",range:[12,16],title:"षोडशवर्ग चक्र (भाग 4/4) — D-30 त्रिंशांश, D-40 खवेदांश, D-45 अक्षवेदांश एवं D-60 षष्ट्यांश",banner:!0}];for(const H of f){const B=v.slice(H.range[0],H.range[1]);if(B.length===0)continue;const G=H.banner?164:210,J=B.map(et=>{const Tt=Be(et.houses),Vt=et.spec.birthTimeSensitivity==="critical"?" • अति समय-संवेदनशील":et.spec.birthTimeSensitivity==="high"?" • समय-संवेदनशील":"";return`
            <div class="book-chart-box" style="background: ${t.pureIvory}; border: 1.5px solid ${t.templeGold}; border-radius: 10px; padding: 13px 10px 10px 10px; text-align: center; overflow: visible; font-family: ${U};">
              <div style="font-size: 9.0px; font-weight: 800; color: ${t.cosmicNavy}; line-height: 1.56; padding-top: 2px; margin-bottom: 3px; overflow: visible;">
                ${a(et.spec.id)} — ${a(et.spec.nameHi)} (${a(et.ascendantRashiNameHi)})
              </div>
              <div style="font-size: 7.35px; color: ${t.saffronDeep}; font-weight: 700; padding-top: 2px; margin: 3px 0 11px 0; line-height: 1.56; overflow: visible;">
                विषय: ${a(et.spec.significationHi)}${a(Vt)}
              </div>
              <div style="padding-top: 2px; overflow: visible;">
                ${Zt(Tt,p,G,`${et.spec.id} ${et.spec.nameHi}`,l,void 0,!0)}
              </div>
            </div>
          `}).join(""),Ft=`
        ${Q(`खण्ड ${H.code} : 16 षोडशवर्ग कुंडली चक्र`,i,d)}
        ${_(H.code,H.title,"प्रति पृष्ठ 4 बड़े वर्ग चक्र")}
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 12px; overflow: visible;">
          ${J}
        </div>
        <div style="display: block; margin-top: 8px; padding: 5px 10px 6px 10px; background: ${t.templeGoldSoft}; border: 1px solid ${t.templeGold}; border-radius: 7px; font-size: 7.8px; color: ${t.cosmicNavy}; text-align: center; font-weight: 700; line-height: 1.35; font-family: ${U};">
          1–12 अंक = राशि संख्या • सू=सूर्य, चं=चंद्र, मं=मंगल, बु=बुध, गु=गुरु, शु=शुक्र, श=शनि, रा=राहु, के=केतु
        </div>
        ${H.banner?Rt("after_vargas_c",r,c):""}
      `;b.push({sectionCode:H.code,sectionTag:`खण्ड ${H.code} : षोडशवर्ग चार्ट्स`,html:Ft})}}if(m){const o=m.planets.map(f=>{const H=Math.min(100,Math.round(f.totalRupas/Math.max(1,f.requiredRupas*1.45)*100)),B=f.strengthRatio>=1.15?"linear-gradient(90deg, #059669, #10B981)":f.meetsMinimum?"linear-gradient(90deg, #D97706, #F59E0B)":"linear-gradient(90deg, #DC2626, #F97316)";return`
          <div style="display: grid; grid-template-columns: 78px 1fr 110px; align-items: center; gap: 10px; padding: 5px 8px; background: #FFFDF8; border: 1px solid ${t.borderMuted}; border-radius: 7px;">
            <div style="font-size: 9px; font-weight: 800; color: ${t.cosmicNavy};">${a(f.hindiName)} (#${f.rank})</div>
            ${ee(H,B,`${f.totalRupas.toFixed(2)} रूप`)}
            <div style="font-size: 7.9px; font-weight: 800; text-align: right; color: ${f.meetsMinimum?t.emerald:t.crimson};">
              ${f.meetsMinimum?"✓ पुष्ट":"सामान्य"} (${(f.strengthRatio*100).toFixed(0)}%)
            </div>
          </div>`}).join(""),g=`
      ${Q("खण्ड D1 : 6-अंगी पाराशरी षड्बल एवं शक्ति ग्राफ",i,d)}
      ${_("D1","6-अंगी पाराशरी षड्बल तालिका (विरूप व रूप — BPHS अध्याय 27)","1 रूप = 60 विरूप")}
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
          ${m.planets.map((f,H)=>`
              <tr style="background:${H%2===0?"#FFFDF8":"#FEF6E4"};">
                <td style="font-weight:800; color:${t.cosmicNavy};">${a(f.hindiName)}</td>
                <td style="text-align:right; font-family:monospace;">${f.sthanaBala.total.toFixed(1)}</td>
                <td style="text-align:right; font-family:monospace;">${f.digBala.toFixed(1)}</td>
                <td style="text-align:right; font-family:monospace;">${f.kalaBala.total.toFixed(1)}</td>
                <td style="text-align:right; font-family:monospace;">${f.cheshtaBala.toFixed(1)}</td>
                <td style="text-align:right; font-family:monospace;">${f.naisargikaBala.toFixed(1)}</td>
                <td style="text-align:right; font-family:monospace; color:${f.drikBala>=0?t.emerald:t.crimson};">${f.drikBala>=0?"+":""}${f.drikBala.toFixed(1)}</td>
                <td style="text-align:right; font-family:monospace; font-weight:800;">${f.totalVirupas.toFixed(1)}</td>
                <td style="text-align:right; font-family:monospace; font-weight:800; color:${f.meetsMinimum?t.emerald:t.saffronDeep};">${f.totalRupas.toFixed(2)} / ${f.requiredRupas.toFixed(1)}</td>
                <td style="font-weight:700;">#${f.rank} ${a(f.gradeHi.split(" ")[0])}</td>
              </tr>`).join("")}
        </tbody>
      </table>

      ${_("D1b","सप्तग्रह षड्बल शक्ति तुलना (Colored Strength Bars)","न्यूनतम अपेक्षित बल के सापेक्ष")}
      <div style="display: flex; flex-direction: column; gap: 6px; margin-top: 6px;">
        ${o}
      </div>
      ${Ht("shadbala")}
    `;b.push({sectionCode:"D",sectionTag:"खण्ड D : 6-अंगी पाराशरी षड्बल",html:g});const T=Math.max(8,...m.bhavas.map(f=>f.totalRupas)),u=`
      ${Q("खण्ड D2 : इष्ट-कष्ट फल एवं द्वादश भाव बल",i,d)}
      ${_("D2a","सप्तग्रह इष्ट फल बनाम कष्ट फल (Ishta & Kashta Phala)","शुभत्व एवं संघर्ष अनुपात")}
      <table class="book-table" style="font-size: 8.2px;">
        <thead>
          <tr>
            <th style="width: 14%;">ग्रह</th>
            <th style="width: 10%; text-align:right;">इष्ट फल</th>
            <th style="width: 10%; text-align:right;">कष्ट फल</th>
            <th style="width: 45%;">इष्ट-कष्ट संतुलन ग्राफ</th>
            <th style="width: 21%;">निष्कर्ष</th>
          </tr>
        </thead>
        <tbody>
          ${m.planets.map((f,H)=>{const B=Math.round(f.ishtaPhala/Math.max(1,f.ishtaPhala+f.kashtaPhala)*100);return`
              <tr style="background:${H%2===0?"#FFFDF8":"#FEF6E4"};">
                <td style="font-weight:800; color:${t.cosmicNavy};">${a(f.hindiName)}</td>
                <td style="text-align:right; font-family:monospace; font-weight:800; color:${t.emerald};">${f.ishtaPhala.toFixed(1)}</td>
                <td style="text-align:right; font-family:monospace; font-weight:700; color:${t.crimson};">${f.kashtaPhala.toFixed(1)}</td>
                <td style="padding-left: 8px; padding-right: 8px;">${ee(B,B>=50?"#059669":"#D97706",`${B}% शुभ`)}</td>
                <td style="font-weight:700; color:${f.ishtaPhala>=f.kashtaPhala?t.emerald:t.saffronDeep};">${f.ishtaPhala>=f.kashtaPhala?"शुभ फल प्रधान":"परिश्रम उपरांत फल"}</td>
              </tr>`}).join("")}
        </tbody>
      </table>

      ${_("D2b","द्वादश भाव बल तालिका (12-House Parashari Bhava Bala)","भावाधिपति + दिग् + दृक् बल")}
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
          ${m.bhavas.map((f,H)=>{const B=Math.round(f.totalRupas/T*100),G=f.rank<=4?"#059669":f.rank<=8?"#D97706":"#C2410C";return`
              <tr style="background:${H%2===0?"#FFFDF8":"#FEF6E4"};">
                <td style="font-weight:800; color:${t.cosmicNavy};">${f.houseNumber}. ${a(f.bhavaTitleHi)}</td>
                <td>${a(f.rashiNameHi)} (${a(f.lordHindi)})</td>
                <td style="text-align:right; font-family:monospace;">${f.bhavadhipatiBala.toFixed(1)}</td>
                <td style="text-align:right; font-family:monospace;">${f.bhavaDigBala.toFixed(1)}</td>
                <td style="text-align:right; font-family:monospace; color:${f.bhavaDrishtiBala>=0?t.emerald:t.crimson};">${f.bhavaDrishtiBala>=0?"+":""}${f.bhavaDrishtiBala.toFixed(1)}</td>
                <td>${ee(B,G,f.totalRupas.toFixed(2))}</td>
                <td style="font-weight:700; color:${f.rank<=4?t.emerald:t.inkPrimary};">#${f.rank} ${a(f.gradeHi.split(" ")[0])}</td>
              </tr>`}).join("")}
        </tbody>
      </table>
      ${Ht("bhava_bala")}
    `;b.push({sectionCode:"D2",sectionTag:"खण्ड D : इष्ट-कष्ट व भाव बल",html:u})}const j=e.ashtakavarga;if(j){const o=((e.panchang.lagnaNumber||1)-1+12)%12,g=Array.from({length:6},(u,f)=>{const H=e.lagnaChart[f],B=e.lagnaChart[f+6],G=j.bhavaSarvashtakavarga?.[f]??j.sarvashtakavarga[(o+f)%12]??28,J=j.bhavaSarvashtakavarga?.[f+6]??j.sarvashtakavarga[(o+f+6)%12]??28;return`
        <tr style="background:${f%2===0?"#FFFDF8":"#FEF6E4"};">
          <td style="font-weight:800;">भाव ${f+1} (${a(H?.rashiName||"")})</td>
          <td style="font-weight:800; color:${G>=28?t.emerald:t.saffronDeep};">${G} बिंदु — ${G>=30?"अति पुष्ट":G>=28?"संतुलित शुभ":"अतिरिक्त प्रयास"}</td>
          <td style="font-weight:800;">भाव ${f+7} (${a(B?.rashiName||"")})</td>
          <td style="font-weight:800; color:${J>=28?t.emerald:t.saffronDeep};">${J} बिंदु — ${J>=30?"अति पुष्ट":J>=28?"संतुलित शुभ":"अतिरिक्त प्रयास"}</td>
        </tr>`}).join(""),T=`
      ${Q("खण्ड E : अष्टकवर्ग एवं सर्वाष्टकवर्ग (337 बिंदु)",i,d)}
      ${_("E1","सप्तग्रह भिन्नाष्टकवर्ग (BAV) एवं सर्वाष्टकवर्ग (SAV) सारणी",`कुल योग: ${j.totalBindusSum} बिंदु`)}
      <table class="book-table" style="font-size: 8px; text-align:center;">
        <thead>
          <tr>
            <th style="width: 16%; text-align:left;">ग्रह / वर्ग</th>
            ${At.map(u=>`<th style="width: 6.4%; text-align:center;">${u.number}<br/>${a(u.nameHi.slice(0,3))}</th>`).join("")}
            <th style="width: 7.2%; text-align:right;">योग</th>
          </tr>
        </thead>
        <tbody>
          ${Object.entries(j.planetBindus).map(([u,f],H)=>{const B=f.reduce((G,J)=>G+J,0);return`
                <tr style="background:${H%2===0?"#FFFDF8":"#FEF6E4"};">
                  <td style="text-align:left; font-weight:800; color:${t.cosmicNavy};">${a(u)}</td>
                  ${f.map(G=>`<td style="font-family:monospace; font-weight:${G>=5?800:600}; color:${G>=5?t.emerald:G<=2?t.crimson:t.inkPrimary};">${G}</td>`).join("")}
                  <td style="text-align:right; font-family:monospace; font-weight:800;">${B}</td>
                </tr>`}).join("")}
          <tr style="background:${t.templeGoldSoft}; font-weight:900;">
            <td style="text-align:left; color:${t.cosmicNavy};">सर्वाष्टकवर्ग (SAV)</td>
            ${j.sarvashtakavarga.map(u=>`<td style="font-family:monospace; color:${u>=30?t.emerald:u<25?t.crimson:t.saffronDeep};">${u}</td>`).join("")}
            <td style="text-align:right; font-family:monospace; color:${t.cosmicNavy};">${j.totalBindusSum}</td>
          </tr>
        </tbody>
      </table>

      ${_("E2","द्वादश भावों में सर्वाष्टकवर्ग बिंदु स्थिति","28+ बिंदु = शुभ व फलदायी")}
      <table class="book-table" style="font-size: 8.1px;">
        <colgroup>
          <col style="width: 21%;" />
          <col style="width: 29%;" />
          <col style="width: 21%;" />
          <col style="width: 29%;" />
        </colgroup>
        <tbody>${g}</tbody>
      </table>
      <div class="book-card" style="margin-top:6px; background:${t.pureIvory}; border:1.2px solid ${t.templeGold}; border-radius:7px; padding:7px 10px; font-size:8.2px; line-height:1.45;">
        <div><b style="color:${t.emerald};">✦ सर्वाधिक प्रबल राशियाँ (30+ बिंदु):</b> ${a(j.strongestRashis.join(" • ")||"—")}</div>
        <div style="margin-top:2px;"><b style="color:${t.saffronDeep};">✦ अतिरिक्त ध्यान योग्य राशियाँ (&lt;28 बिंदु):</b> ${a(j.weakestRashis.join(" • ")||"—")}</div>
      </div>
      ${Ht("ashtakavarga")}
      ${Rt("after_ashtakavarga_e",r,c)}
    `;b.push({sectionCode:"E",sectionTag:"खण्ड E : अष्टकवर्ग (337 बिंदु)",html:T})}const S=y?.vimshottari,W=`
    ${Q("खण्ड F1 : विंशोत्तरी महादशा चक्र एवं 4-स्तरीय सक्रिय दशा",i,d)}
    ${_("F1","विंशोत्तरी महादशा (120 वर्षीय चक्र) एवं वर्तमान सक्रिय 4-स्तरीय दशा",S?S.balanceAtBirthHi:"जन्म नक्षत्र आधारित")}
    ${S?`<div style="display:grid; grid-template-columns: repeat(4, 1fr); gap: 7px; margin-bottom: 8px;">
             ${[["वर्तमान महादशा",S.activeMahadasha],["वर्तमान अंतर्दशा",S.activeAntardasha],["वर्तमान प्रत्यंतर",S.activePratyantardasha],["वर्तमान सूक्ष्म दशा",S.activeSookshmadasha]].map(([o,g])=>`
                 <div class="book-cover-pillar-card" style="display: flex; flex-direction: column; justify-content: center; background:${t.cosmicNavy}; color:${t.warmIvory}; border:1.3px solid ${t.templeGold}; border-radius:8px; padding:6px 9px; box-sizing:border-box;">
                   <div style="display:block; font-size:7.6px; color:#FCD34D; font-weight:700; line-height:1.25;">${a(o)}</div>
                   <div style="display:block; font-size:11px; font-weight:800; margin-top:3px; line-height:1.25;">${a(g.lordHindi)}</div>
                   <div style="display:block; font-size:7.3px; color:#CBD5E1; font-variant-numeric: tabular-nums; margin-top:3px; line-height:1.25;">${a(g.startDateHi)} – ${a(g.endDateHi)}</div>
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
        ${e.mahadashas.map((o,g)=>`
            <tr style="background:${o.isCurrent?t.emeraldSoft:g%2===0?"#FFFDF8":"#FEF6E4"};">
              <td style="font-weight:800; color:${o.isCurrent?t.emerald:t.cosmicNavy};">${a(o.planet)}${o.isCurrent?" ★":""}</td>
              <td style="text-align:center; font-family:monospace;">${o.years}</td>
              <td style="font-family:monospace; font-weight:700;">${a(o.startYear)} – ${a(o.endYear)}</td>
              <td>${a(o.prediction)}</td>
            </tr>`).join("")}
      </tbody>
    </table>

    ${S&&S.activeAntardashaPratyantars.length>0?`
          ${_("F1b",`वर्तमान सक्रिय प्रत्यंतर दशा (${S.activeMahadasha.lordHindi} – ${S.activeAntardasha.lordHindi})`,"सूक्ष्म काल गणना")}
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
              ${S.activeAntardashaPratyantars.map((o,g)=>`
                  <tr style="background:${o.isCurrent?t.emeraldSoft:g%2===0?"#FFFDF8":"#FEF6E4"};">
                    <td style="font-weight:800; color:${o.isCurrent?t.emerald:t.cosmicNavy};">${a(o.lordHindi)}${o.isCurrent?" (सक्रिय)":""}</td>
                    <td style="font-variant-numeric: tabular-nums; white-space: nowrap;">${a(o.startDateHi)}</td>
                    <td style="font-variant-numeric: tabular-nums; white-space: nowrap;">${a(o.endDateHi)}</td>
                    <td style="text-align:right; font-variant-numeric: tabular-nums; white-space: nowrap; font-weight: 700;">${Math.max(1,Math.round(Number(o.durationDays)||0))} दिन</td>
                  </tr>`).join("")}
            </tbody>
          </table>`:""}
    ${Ht("dasha_vimshottari")}
  `;if(b.push({sectionCode:"F1",sectionTag:"खण्ड F : विंशोत्तरी महादशा",html:W}),S&&S.mahadashas.length>0){const o=S.mahadashas.slice(0,9),g=[{code:"F2",tag:"खण्ड F2 : विंशोत्तरी अंतर्दशा (भाग 1/4)",items:o.slice(0,2)},{code:"F3",tag:"खण्ड F3 : विंशोत्तरी अंतर्दशा (भाग 2/4)",items:o.slice(2,4)},{code:"F4",tag:"खण्ड F4 : विंशोत्तरी अंतर्दशा (भाग 3/4)",items:o.slice(4,6)},{code:"F5",tag:"खण्ड F5 : विंशोत्तरी अंतर्दशा (भाग 4/4)",items:o.slice(6,9)}];for(const T of g){if(T.items.length===0)continue;const u=T.items.length>=3,f=T.items.map(H=>`
          <div style="margin-bottom: ${u?5:11}px;">
            ${u?`<div class="book-section-bar" style="display: flex; align-items: center; justify-content: space-between; gap: 8px; background: linear-gradient(90deg, ${t.cosmicNavy} 0%, #1E293B 70%, ${t.saffronDeep} 100%); color: #FFF8E7; padding: 4.5px 10px; border-radius: 6px; margin: 4px 0 3px 0; border-left: 3.5px solid ${t.templeGold};">
                  <div style="display: flex; align-items: center; gap: 7px; min-width: 0;">
                    <span class="pj-h2c-no-lift" style="background: ${t.templeGold}; color: ${t.cosmicNavy}; font-weight: 800; font-size: 7.4px; padding: 1.5px 6px; border-radius: 999px; white-space: nowrap;">${a(H.lordHindi)} महादशा</span>
                    <span class="pj-h2c-no-lift" style="font-weight: 800; font-size: 8.6px; color: #FFFBEB; line-height: 1.3;">${a(H.lordHindi)} महादशा के अंतर्गत सभी 9 अंतर्दशाएँ (${a(H.startDateHi)} – ${a(H.endDateHi)})</span>
                  </div>
                  <span class="pj-h2c-no-lift" style="font-size: 7.2px; font-weight: 700; color: #FDE68A; white-space: nowrap;">${H.isCurrent?"वर्तमान सक्रिय महादशा":`${H.durationYears.toFixed(1)} वर्ष`}</span>
                </div>`:_(`${H.lordHindi} महादशा`,`${H.lordHindi} महादशा के अंतर्गत सभी 9 अंतर्दशाएँ (${H.startDateHi} – ${H.endDateHi})`,H.isCurrent?"वर्तमान सक्रिय महादशा":`${H.durationYears.toFixed(1)} वर्ष`)}
            <div class="pj-h2c-no-lift" style="font-size: ${u?7.2:8.1}px; color: ${t.saffronDeep}; font-weight: 700; margin-bottom: ${u?3:4}px; padding: 0 2px; line-height: 1.35;">
              महादशा प्रभाव: ${a(H.effectHi)}
            </div>
            <table class="book-table" style="font-size: ${u?7:7.9}px; width: 100%; table-layout: fixed; margin-bottom: ${u?2:6}px;">
              <thead>
                <tr>
                  <th style="width: 16%; padding: ${u?"3.5px 6px":"5px 7px"};">अंतर्दशा</th>
                  <th style="width: 16%; padding: ${u?"3.5px 6px":"5px 7px"};">आरंभ तिथि</th>
                  <th style="width: 16%; padding: ${u?"3.5px 6px":"5px 7px"};">समाप्ति तिथि</th>
                  <th style="width: 52%; padding: ${u?"3.5px 6px":"5px 7px"};">प्रमुख फल संकेत</th>
                </tr>
              </thead>
              <tbody>
                ${[...H.antardashas].sort((B,G)=>(B.startUtcMs??0)-(G.startUtcMs??0)).map((B,G)=>{const{startLabel:J,endLabel:Ft}=ae(B.startDateHi,B.endDateHi,B.startUtcMs,B.endUtcMs);return`
                    <tr style="background:${B.isCurrent?t.emeraldSoft:G%2===0?"#FFFDF8":"#FEF6E4"};">
                      <td class="pj-h2c-no-lift" style="font-weight:700; color:${B.isCurrent?t.emerald:t.cosmicNavy}; padding: ${u?"3.2px 6px":"4.8px 7px"}; vertical-align: top; line-height: 1.38; direction: ltr; unicode-bidi: isolate;">
                        <div class="pj-h2c-no-lift" style="display: block; line-height: 1.38; white-space: nowrap;">${a(H.lordHindi)} – ${a(B.lordHindi)}${B.isCurrent?" (सक्रिय)":""}</div>
                      </td>
                      <td class="pj-h2c-no-lift" style="font-variant-numeric: tabular-nums; white-space: nowrap; padding: ${u?"3.2px 6px":"4.8px 7px"}; vertical-align: top; line-height: 1.38; direction: ltr; unicode-bidi: isolate; text-align: left; font-weight: 700;">
                        <div class="pj-h2c-no-lift" style="display: block; line-height: 1.38; direction: ltr; unicode-bidi: isolate;">${a(J)}</div>
                      </td>
                      <td class="pj-h2c-no-lift" style="font-variant-numeric: tabular-nums; white-space: nowrap; padding: ${u?"3.2px 6px":"4.8px 7px"}; vertical-align: top; line-height: 1.38; direction: ltr; unicode-bidi: isolate; text-align: left; font-weight: 700;">
                        <div class="pj-h2c-no-lift" style="display: block; line-height: 1.38; direction: ltr; unicode-bidi: isolate;">${a(Ft)}</div>
                      </td>
                      <td class="pj-h2c-no-lift" style="padding: ${u?"3.2px 6px":"4.8px 7px"}; vertical-align: top; line-height: 1.38;">
                        <div class="pj-h2c-no-lift" style="display: block; line-height: 1.38; word-break: normal; overflow-wrap: break-word;">${a(Ye[B.lordHindi]||"संतुलित कर्म व धैर्य से शुभ परिणाम।")}</div>
                      </td>
                    </tr>`}).join("")}
              </tbody>
            </table>
          </div>
        `).join("");b.push({sectionCode:T.code,sectionTag:T.tag,html:`
          ${Q(T.tag,i,d)}
          ${f}
        `})}}if(y){const o=`
      ${Q("खण्ड F6 : 36-वर्षीय योगिनी दशा एवं जैमिनी चर दशा",i,d)}
      ${_("F6a","योगिनी दशा चक्र (36-वर्षीय पाराशरी प्रणाली)",`सक्रिय: ${y.yogini.activeMahadasha.yoginiNameHi} → ${y.yogini.activeAntardasha.yoginiNameHi}`)}
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
          ${[...y.yogini.mahadashas].sort((g,T)=>(g.startUtcMs??0)-(T.startUtcMs??0)).slice(0,10).map((g,T)=>{const u=String(g.yoginiNameHi||"").replace(/थान्या|धान्य(?!ा)/g,"धान्या").trim(),f=u==="धान्या"?"गुरु":g.lordHindi,H=$.deduplicateParagraph(g.effectHi,"dasha",`yogini|${T}|${u}`),{startLabel:B,endLabel:G}=ae(g.startDateHi,g.endDateHi,g.startUtcMs,g.endUtcMs);return`
              <tr style="background:${g.isCurrent?t.emeraldSoft:T%2===0?"#FFFDF8":"#FEF6E4"};">
                <td class="pj-h2c-no-lift" style="font-weight:800; color:${g.isCurrent?t.emerald:t.cosmicNavy};">${a(u)} (${a(f)})${g.isCurrent?" ★":""}</td>
                <td class="pj-h2c-no-lift" style="text-align:center; font-variant-numeric: tabular-nums;">${g.years}</td>
                <td class="pj-h2c-no-lift" style="font-weight:700; color:${g.natureHi==="शुभ"?t.emerald:g.natureHi==="मिश्रित"?t.saffronDeep:t.crimson};">${a(g.natureHi)}</td>
                <td class="pj-h2c-no-lift" style="white-space: nowrap; font-variant-numeric: tabular-nums; font-weight: 700; direction: ltr; unicode-bidi: isolate; text-align: left;">${a(B)}</td>
                <td class="pj-h2c-no-lift" style="white-space: nowrap; font-variant-numeric: tabular-nums; font-weight: 700; direction: ltr; unicode-bidi: isolate; text-align: left;">${a(G)}</td>
                <td class="pj-h2c-no-lift">${a(H)}</td>
              </tr>`}).join("")}
        </tbody>
      </table>

      ${_("F6b","जैमिनी सप्त चर कारक (AK–DK) एवं राशि चर दशा",`सक्रिय: ${y.jaimini.activeMahadasha.rashiNameHi} → ${y.jaimini.activeAntardasha.rashiNameHi}`)}
      <div style="display:grid; grid-template-columns: repeat(4, 1fr); gap: 6px; margin-bottom: 7px;">
        ${y.jaimini.karakas.map(g=>`
            <div style="background:${t.pureIvory}; border:1.1px solid ${t.templeGold}; border-radius:6px; padding:5px 7px; font-size:7.6px;">
              <div style="font-weight:800; color:${t.saffronDeep};">${a(g.code)} • ${a(g.nameHi)}</div>
              <div class="pj-h2c-no-lift" style="font-weight:800; color:${t.cosmicNavy}; font-size:8.6px;">${a(g.planetHindi)} <span class="pj-h2c-no-lift" style="font-family:'Segoe UI','Liberation Sans',Arial,sans-serif; font-variant-numeric:tabular-nums; font-weight:600; color:${t.inkMuted};">(${a(g.degDMS)})</span></div>
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
          ${y.jaimini.charaDasha.slice(0,8).map((g,T)=>{const{startLabel:u,endLabel:f}=ae(g.startDateHi,g.endDateHi,g.startUtcMs,g.endUtcMs);return`
              <tr style="background:${g.isCurrent?t.emeraldSoft:T%2===0?"#FFFDF8":"#FEF6E4"};">
                <td class="pj-h2c-no-lift" style="font-weight:800;">${g.rashiNumber}. ${a(g.rashiNameHi)}${g.isCurrent?" ★":""}</td>
                <td class="pj-h2c-no-lift">${a(g.effectiveLordHindi)}</td>
                <td class="pj-h2c-no-lift" style="text-align:center; font-family:monospace;">${g.durationYears}</td>
                <td class="pj-h2c-no-lift" style="white-space: nowrap; font-variant-numeric: tabular-nums; font-weight: 700; direction: ltr; unicode-bidi: isolate; text-align: left;">${a(u)}</td>
                <td class="pj-h2c-no-lift" style="white-space: nowrap; font-variant-numeric: tabular-nums; font-weight: 700; direction: ltr; unicode-bidi: isolate; text-align: left;">${a(f)}</td>
                <td class="pj-h2c-no-lift">${a(g.lordStrengthRuleNoteHi)}</td>
              </tr>`}).join("")}
        </tbody>
      </table>
      ${Ht("dasha_yogini")}
    `;b.push({sectionCode:"F6",sectionTag:"खण्ड F : योगिनी एवं जैमिनी दशा",html:o})}const V=e.deepAnalysis?.allTwelveBhavas||[],Y=o=>o.map(g=>`
        <div class="book-card" style="background: ${t.pureIvory}; border: 1.3px solid ${t.templeGold}; border-left: 4px solid ${g.strengthLabel==="प्रबल"?t.emerald:g.strengthLabel==="शुभ"?t.saffron:t.templeGoldDark}; border-radius: 8px; padding: 9px 11px; margin-bottom: 8px;">
          <div style="display: table; width: 100%; margin-bottom: 4px;">
            <div style="display: table-cell; vertical-align: middle; text-align: left; font-size: 9.8px; font-weight: 900; color: ${t.cosmicNavy}; padding-right: 8px;">
              भाव ${g.house} — ${a(g.bhavaName)} (${a(g.rashi)} राशि)
            </div>
            <div style="display: table-cell; vertical-align: middle; text-align: right; white-space: nowrap; width: 1%;">
              <span class="book-pill" style="${Bt} font-size: 7.8px; font-weight: 800; padding-left: 9px; padding-right: 9px; border-radius: 999px; white-space: nowrap; background: ${g.strengthLabel==="प्रबल"?t.emeraldSoft:t.saffronSoft}; color: ${g.strengthLabel==="प्रबल"?t.emerald:t.saffronDeep};">
                <span style="${Et}">स्थिति: ${a(g.strengthLabel)}</span>
              </span>
            </div>
          </div>
          <div style="font-size: 8.1px; color: ${t.saffronDeep}; font-weight: 700; margin-bottom: 3px;">
            भावेश: ${a(g.lord)} (स्थित भाव: ${g.lordPlacementHouse}) &nbsp;|&nbsp; स्थित ग्रह: ${a(g.occupants||"रिक्त (भावेश व दृष्टि से फल)")}
          </div>
          <div style="font-size: 8.6px; color: ${t.inkPrimary}; line-height: 1.52;">
            ${a($.deduplicateParagraph(g.prediction,"gochar",`bhava|${g.house}|${g.rashi}`))}
          </div>
        </div>`).join(""),ot=`
    ${Q("खण्ड G1 : द्वादश भाव फल (प्रथम से षष्ठ भाव)",i,d)}
    ${_("G1","द्वादश भाव फल विश्लेषण — भाव 1 से भाव 6 (तनु, धन, पराक्रम, सुख, संतान, शत्रु)",`${e.panchang.lagnaName} लग्न`)}
    ${Y(V.slice(0,6))}
    ${te("भाव फल कैसे पढ़ें?","प्रत्येक भाव का फल तीन आधारों पर देखा जाता है: (1) उस भाव की राशि व स्वामी (भावेश) की स्थिति, (2) भाव में बैठे ग्रह, और (3) उस भाव पर पड़ने वाली शुभ या क्रूर ग्रहों की दृष्टि। रिक्त भाव का अर्थ अशुभ नहीं होता — उसका फल भावेश की स्थिति से मिलता है।","प्रबल व शुभ भाव जीवन के उन क्षेत्रों को दर्शाते हैं जहाँ कम प्रयास में भी उत्तम सफलता मिलती है।")}
  `;b.push({sectionCode:"G1",sectionTag:"खण्ड G : द्वादश भाव फल (1–6)",html:ot});const pt=`
    ${Q("खण्ड G2 : द्वादश भाव फल (सप्तम से द्वादश भाव)",i,d)}
    ${_("G2","द्वादश भाव फल विश्लेषण — भाव 7 से भाव 12 (विवाह, आयु, भाग्य, कर्म, लाभ, व्यय)",`${e.panchang.lagnaName} लग्न`)}
    ${Y(V.slice(6,12))}
  `;b.push({sectionCode:"G2",sectionTag:"खण्ड G : द्वादश भाव फल (7–12)",html:pt});const gt=o=>{const g=Object.entries(qe).find(([T])=>o.hindiName.includes(T))?.[1]||"जन्म कुंडली में विशिष्ट कर्मफल व जीवन दिशा प्रदान करने वाला ग्रह।";return`
      <div class="book-card pj-h2c-no-lift" style="background: ${t.pureIvory}; border: 1.3px solid ${t.templeGold}; border-radius: 9px; padding: 10px 12px; margin-bottom: 9px;">
        <div style="display: table; width: 100%; border-bottom: 1px solid ${t.borderMuted}; padding-bottom: 4px; margin-bottom: 5px;">
          <div class="pj-h2c-no-lift" style="display: table-cell; vertical-align: middle; text-align: left; font-size: 10px; font-weight: 900; color: ${t.cosmicNavy}; padding-right: 8px; direction: ltr; unicode-bidi: isolate;">
            ✦ ${a(o.hindiName)} विचार — ${a(o.rashiName)} राशि, भाव ${o.houseInLagna} ${Yt(`(${o.fullDegreeDMS})`)}
          </div>
          <div style="display: table-cell; vertical-align: middle; text-align: right; white-space: nowrap; width: 1%;">
            <span class="book-pill pj-h2c-no-lift" style="${Bt} font-size: 7.8px; font-weight: 800; padding-left: 9px; padding-right: 9px; border-radius: 999px; white-space: nowrap; background: ${o.statusBadge==="shubh"?t.emeraldSoft:o.statusBadge==="upay"?t.crimsonSoft:t.saffronSoft}; color: ${o.statusBadge==="shubh"?t.emerald:o.statusBadge==="upay"?t.crimson:t.saffronDeep};">
              <span style="${Et}">${a(o.dignity)}${o.id!=="rahu"&&o.id!=="ketu"&&o.isRetrograde?" • वक्री (*)":""}${o.isCombust?" • अस्त (^)":""}</span>
            </span>
          </div>
        </div>
        <div class="pj-h2c-no-lift" style="font-size: 8.2px; color: ${t.saffronDeep}; font-weight: 700; margin-bottom: 3px;">
          नक्षत्र: ${a(o.nakshatra)} (चरण ${o.pada}) &nbsp;|&nbsp; कारकत्व: ${a(g)}
        </div>
        <div class="pj-h2c-no-lift" style="font-size: 8.6px; color: ${t.inkPrimary}; line-height: 1.54; direction: ltr; unicode-bidi: isolate;">
          ${Yt($.deduplicateParagraph(o.houseEffect||`${o.hindiName} आपकी कुंडली के ${o.houseInLagna}वें भाव में ${o.rashiName} राशि में स्थित होकर ${o.dignity} अवस्था में फल प्रदान कर रहे हैं।`,"gochar",`graha|${o.id}|${o.houseInLagna}`))}
        </div>
      </div>`},X=`
    ${Q("खण्ड G3 : नवग्रह विचार (सूर्य से गुरु तक)",i,d)}
    ${_("G3","नवग्रह विचार (भाग 1/2) — सूर्य, चंद्र, मंगल, बुध एवं गुरु का विस्तृत प्रभाव","भाव एवं अवस्था आधारित")}
    ${e.planets.slice(0,5).map(gt).join("")}
  `;b.push({sectionCode:"G3",sectionTag:"खण्ड G : नवग्रह विचार (1–5)",html:X});const st=`
    ${Q("खण्ड G4 : नवग्रह विचार (शुक्र से केतु) एवं शुभ राजयोग",i,d)}
    ${_("G4a","नवग्रह विचार (भाग 2/2) — शुक्र, शनि, राहु एवं केतु","भाव एवं अवस्था आधारित")}
    ${e.planets.slice(5,9).map(gt).join("")}
    ${_("G4b","कुंडली में निर्मित प्रमुख शास्त्रीय योग एवं राजयोग",`${e.rajYogas.length} योग पहचानित`)}
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
      ${e.rajYogas.slice(0,6).map(o=>`
          <div class="book-card" style="background:${t.pureIvory}; border:1.2px solid ${t.templeGold}; border-radius:8px; padding:7.5px 9.5px; font-size:8px; line-height:1.45;">
            <div style="display:table; width:100%;">
              <div style="display:table-cell; vertical-align:middle; text-align:left; padding-right:4px;"><b style="color:${t.cosmicNavy}; font-size:8.8px;">${a(o.name)}</b></div>
              <div style="display:table-cell; vertical-align:middle; text-align:right; white-space:nowrap; width:1%;"><span class="book-pill" style="${Bt} padding-left: 7px; padding-right: 7px; border-radius: 999px; background: ${t.emeraldSoft}; color:${t.emerald}; font-weight:800; font-size:7.4px; white-space: nowrap;"><span style="${Et}">${a(o.strength)}</span></span></div>
            </div>
            <div style="color:${t.saffronDeep}; font-size:7.4px; margin-top:1px;">${a(o.sanskritRule)}</div>
            <div style="margin-top:3px; color:${t.inkPrimary};">${a(o.description)}</div>
          </div>`).join("")}
    </div>
  `;if(b.push({sectionCode:"G4",sectionTag:"खण्ड G : नवग्रह व राजयोग",html:st}),y){const o=`
      ${Q("खण्ड G5 : 5 शास्त्रीय दोष एवं परिहार (भंग) परीक्षण",i,d)}
      ${_("G5","नियम-आधारित 5 प्रमुख दोष परीक्षण — मंगल, कालसर्प, पितृ, ग्रहण एवं केमद्रुम","परिहार नियमों सहित निष्पक्ष विश्लेषण")}
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
          ${y.yogasAndDoshas.doshas.allList.map((u,f)=>{const H=u.effectiveStatus==="दोष मुक्त",B=u.pariharRulesHi.length>0?`<div style="margin-top:3px; color:${t.emerald}; font-weight:700;">✓ परिहार नियम: ${a(u.pariharRulesHi.join("; "))}</div>`:"";return`
                <tr style="background:${f%2===0?"#FFFDF8":"#FEF6E4"};">
                  <td style="font-weight:800; color:${t.cosmicNavy}; padding: 8px 7px;">${a(u.nameHi)}${u.subTypeHi?`<div style="font-size:7.4px; color:${t.inkMuted}; margin-top:2px;">${a(u.subTypeHi)}</div>`:""}</td>
                  <td style="font-weight:800; padding: 8px 7px; color:${H?t.emerald:u.effectiveStatus==="आंशिक / परिहार युक्त"?t.saffronDeep:t.crimson};">${a(u.effectiveStatus)}</td>
                  <td style="padding: 8px 7px; line-height:1.48;">${a(u.explanationHi)}${B}</td>
                  <td style="padding: 8px 7px; line-height:1.48;">${a(u.remedyHi)}</td>
                </tr>`}).join("")}
        </tbody>
      </table>
      ${Ht("dosha_parihar_gochar")}
    `;b.push({sectionCode:"G5",sectionTag:"खण्ड G : 5 दोष व परिहार",html:o});const g=We(e),T=`
      ${Q("खण्ड G6 : सम्पूर्ण जीवन साढ़ेसाती एवं लाइव ग्रह गोचर",i,d)}
      ${_("G6a",`सम्पूर्ण जीवन शनि साढ़ेसाती आवर्तन तालिका (${e.panchang.moonRashiName} चंद्र राशि)`,y.liveGochar.sadeSatiLabelHi)}
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
          ${g.slice(0,9).map((u,f)=>`
              <tr style="background:${f%2===0?"#FFFDF8":"#FEF6E4"};">
                <td style="font-weight:800; color:${t.cosmicNavy};">${a(u.cycleLabel)}</td>
                <td style="font-weight:700; color:${t.saffronDeep};">${a(u.phaseLabel)}</td>
                <td>${a(u.saturnRashi)}</td>
                <td style="font-variant-numeric: tabular-nums; font-weight:700; white-space: nowrap;">${a(u.approxPeriod)}</td>
                <td style="font-variant-numeric: tabular-nums; white-space: nowrap;">${a(u.ageSpan)}</td>
                <td>${a(u.guidanceHi)}</td>
              </tr>`).join("")}
        </tbody>
      </table>

      ${_("G6b",`लाइव निरयण ग्रह गोचर (${y.liveGochar.computedAtDateHi})`,"चंद्र एवं लग्न सापेक्ष")}
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
          ${y.liveGochar.grahaRows.map((u,f)=>`
              <tr style="background:${f%2===0?"#FFFDF8":"#FEF6E4"};">
                <td class="pj-h2c-no-lift" style="font-weight:700; color:${t.cosmicNavy};">${a(dt(u.nameHi).normalize("NFC"))}${u.id!=="rahu"&&u.id!=="ketu"&&u.isRetrograde?" (व)":""}${u.id!=="moon"&&u.isCombust?" (अ)":""}</td>
                <td class="pj-h2c-no-lift" style="white-space: nowrap; line-height: 1.5; padding: 5.5px 6px; overflow: visible;"><span style="font-family:${U}; font-weight:700; color:${t.cosmicNavy};">${a(dt(u.currentRashiNameHi).normalize("NFC"))}</span>&nbsp;<span style="font-family:'Segoe UI', 'Liberation Sans', Arial, sans-serif; font-variant-numeric: tabular-nums; font-weight:700; font-size:7.35px; color:${t.inkPrimary};">${a(ce(u.degDMS))}</span></td>
                <td style="text-align:center; font-weight:800; color:${t.emerald};">${u.houseFromNatalMoon}</td>
                <td style="text-align:center; font-weight:700;">${u.houseFromNatalLagna}</td>
                <td style="font-weight:700; color:${u.hasVedha?t.saffronDeep:u.isFavorableFromMoon?t.emerald:t.inkMuted};">${u.hasVedha?`वेध (${a(u.vedhaByHi.join(", "))})`:u.isFavorableFromMoon?"शुभ गोचर":"सामान्य"}</td>
                <td>${a(u.effectSummaryHi)}</td>
              </tr>`).join("")}
        </tbody>
      </table>
      ${Rt("after_gochar_g",r,c)}
    `;b.push({sectionCode:"G6",sectionTag:"खण्ड G : साढ़ेसाती एवं लाइव गोचर",html:T})}b.push(ze(e,D));for(const o of Ee(e,D))b.push(o);b.push(Me(e,D));const Z=ke(e),tt={1:"mars",2:"venus",3:"mercury",4:"moon",5:"sun",6:"mercury",7:"venus",8:"mars",9:"jupiter",10:"saturn",11:"saturn",12:"jupiter"}[e.panchang.lagnaNumber]||"venus",rt=e.planets.find(o=>o.id===tt),nt=e.shadbalaBhava?.planets?.find(o=>o.id===tt),kt=nt?Math.round((nt.strengthRatio||nt.totalRupas/Math.max(1,nt.requiredRupas))*100):null,yt=kt!==null&&kt>=120&&!rt?.isCombust&&!rt?.isDebilitated,Nt=(e.panchang.lagnaLord||"लग्नेश").split(" (")[0].trim(),mt=yt?`लग्नेश ${Nt} षड्बल में पहले से अति बली (${kt}%, अ-अस्त) होने के कारण ${Z.jeevanRatna.split(" (")[0]} रत्न धारण अनावश्यक है — इसके स्थान पर ${Nt} के मंत्र जप, इष्टदेव (${e.lucky.ishtaDevta.split(" (")[0]}) उपासना एवं सात्विक दान को प्राथमिकता दें।`:"",St=/रत्न\s*धारण|हीरा|ओपल|माणिक्य|मोती|मूंगा|पन्ना|पुखराज|नीलम|जीवन\s*रत्न/u,ht=(()=>{const o=$.deduplicateBullets(e.remedies.upayList,"remedy",`h1b|${e.panchang.lagnaNumber}`).slice(0,6);if(!yt)return o.map(u=>ft(Wt(u)));let g=!1;const T=o.map(u=>!g&&St.test(u)?(g=!0,ft(mt)):ft(Wt(u)));return g||(T[0]=ft(mt)),T})(),Mt=`
    ${Q("खण्ड H1 : शुद्ध सात्विक वैदिक उपाय, रत्न एवं रुद्राक्ष",i,d)}
    ${_("H1a","लग्नेश आधारित प्रामाणिक रत्न, रुद्राक्ष एवं भाग्यवर्धक तत्व",`${e.panchang.lagnaName} लग्न`)}
    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 9px; margin-bottom: 9px;">
      <div class="book-card" style="background:${t.pureIvory}; border:1.4px solid ${t.templeGold}; border-radius:9px; padding:9px 11px; font-size:8.3px; line-height:1.5;">
        <div style="font-weight:800; color:${t.saffronDeep};">${yt?"लग्नेश रत्न निर्णय (षड्बल आधारित)":"जीवन रत्न एवं भाग्य रत्न"}</div>
        <div style="font-weight:900; color:${t.cosmicNavy}; font-size:9.3px; margin-top:2px;">${yt?`${a(Z.jeevanRatna)} — धारण अनावश्यक (षड्बल ${kt}%)`:a(Z.jeevanRatna)}</div>
        ${yt?`<div style="margin-top:3px; font-size:7.8px; color:#9A3412; font-weight:700;">लग्नेश ${a(Nt)} स्वयं बली व अ-अस्त हैं; मंत्र जप, इष्ट उपासना व सात्विक दान श्रेष्ठ हैं।</div>`:`<div style="margin-top:3px;"><b>भाग्य रत्न:</b> ${a(Z.bhagyaRatna)}</div><div><b>धारण विधि:</b> ${a(Z.metalAndFinger)}</div>`}
      </div>
      <div class="book-card" style="background:${t.pureIvory}; border:1.4px solid ${t.templeGold}; border-radius:9px; padding:9px 11px; font-size:8.3px; line-height:1.5;">
        <div style="font-weight:800; color:${t.saffronDeep};">कल्याणकारी रुद्राक्ष</div>
        <div style="font-weight:900; color:${t.cosmicNavy}; font-size:9.5px; margin-top:2px;">${a(Z.primaryRudraksha)}</div>
        <div style="margin-top:2px; font-size:7.9px;"><b>सहायक:</b> ${a(Z.secondaryRudraksha)}</div>
        <div style="margin-top:3px;"><b>इष्टदेव:</b> ${a(e.lucky.ishtaDevta)}</div>
        <div><b>शुभ वार / रंग:</b> ${a(e.lucky.luckyDays)} • ${a(e.lucky.luckyColors)}</div>
      </div>
      <div class="book-card" style="background:${t.pureIvory}; border:1.4px solid ${t.templeGold}; border-radius:9px; padding:9px 11px; font-size:8.3px; line-height:1.55;">
        <div style="font-weight:800; color:${t.saffronDeep};">दैनिक सिद्ध बीज मंत्र</div>
        <div class="book-beej-mantra" style="font-weight:700; color:${t.emerald}; font-size:9px; margin-top:4px; line-height:1.65; padding: 2px 0; overflow: visible;">
          ${a(Wt(e.lucky.beejMantra))}
        </div>
        <div style="margin-top:4px;"><b>शुभ अंक व दिशा:</b> ${a(e.lucky.luckyNumbers)} • ${a(e.lucky.luckyDirection)}</div>
      </div>
    </div>

    ${_("H1b","व्यक्तिगत शुद्ध सात्विक वैदिक उपाय (कोई तांत्रिक या भय-आधारित क्रिया नहीं)","धार्मिक, सरल एवं शास्त्रसम्मत")}
    <div class="book-card" style="background:${t.pureIvory}; border:1.3px solid ${t.templeGold}; border-radius:9px; padding:10px 13px; font-size:8.4px; line-height:1.62; margin-bottom: 9px;">
      ${ht.map((o,g)=>`<div style="margin-top:${g===0?0:4.5}px;"><b style="color:${t.saffronDeep};">${g+1}.</b> ${a(o)}</div>`).join("")}
    </div>

    ${_("H1c","नवग्रह सात्विक मंत्र एवं दान संदर्भ तालिका","आवश्यकतानुसार जप व दान")}
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
        ${Je.map((o,g)=>`
          <tr style="background:${g%2===0?"#FFFDF8":"#FEF6E4"};">
            <td class="pj-h2c-no-lift" style="font-weight:700; color:${t.cosmicNavy}; padding: 6px 7px; line-height: 1.55; white-space: nowrap;">${a(dt(o.graha).normalize("NFC"))}</td>
            <td class="book-beej-mantra pj-h2c-no-lift" style="font-weight:600; font-size: 8.05px; color:${t.emerald}; padding: 6px 8px; line-height: 1.7; overflow: visible; white-space: nowrap; word-break: keep-all; overflow-wrap: normal;"><span class="pj-h2c-no-lift" style="display: inline-block; white-space: nowrap; direction: ltr; unicode-bidi: isolate;">${a(Wt(o.mantra))}</span></td>
            <td class="pj-h2c-no-lift" style="font-weight:500; color:${t.inkPrimary}; padding: 6px 8px; line-height: 1.55; white-space: normal;">${a(dt(o.daan).normalize("NFC"))}</td>
            <td class="pj-h2c-no-lift" style="font-weight:600; color:${t.saffronDeep}; padding: 6px 7px; line-height: 1.55; white-space: nowrap;">${a(dt(o.day).normalize("NFC"))}</td>
          </tr>`).join("")}
      </tbody>
    </table>
  `;b.push({sectionCode:"H",sectionTag:"खण्ड H : शुद्ध सात्विक वैदिक उपाय",html:Mt}),b.push(Ie(e,D));const zt=e.lagnaChart.find(o=>o.houseNumber===4),xt=e.planets.find(o=>o.id==="moon"),$t=e.planets.find(o=>o.id==="venus"),Lt=zt&&xt&&$t?`चतुर्थ भाव में ${zt.rashiName} राशि, मातृ-मन कारक चन्द्रमा (${xt.rashiName.split(" ")[0]} राशि, भाव ${xt.houseInLagna}) एवं सुख-वैभव कारक शुक्र (${$t.rashiName.split(" ")[0]} राशि, भाव ${$t.houseInLagna}) की वास्तविक D-1 स्थिति पारिवारिक सामंजस्य का मार्गदर्शन करती है।`:"",lt=[{title:e.predictions.personality.title,body:$.deduplicateParagraph(e.predictions.personality.summary,"gochar",`h2a|personality|${e.panchang.lagnaNumber}`),extra:e.predictions.personality.keyTraits.join(" • ")},{title:e.predictions.career.title,body:$.deduplicateParagraph(e.predictions.career.summary,"career",`h2a|career|${e.panchang.lagnaNumber}`),extra:e.predictions.career.peakYears},{title:e.predictions.wealth.title,body:$.deduplicateParagraph(e.predictions.wealth.summary,"finance",`h2a|wealth|${e.panchang.lagnaNumber}`),extra:e.predictions.wealth.highlights.join(" • ")},{title:e.predictions.marriage.title,body:$.deduplicateParagraph(`${e.predictions.marriage.summary}${Lt?` ${Lt}`:""}`,"family",`h2a|family|${e.panchang.lagnaNumber}`),extra:`जीवनसाथी स्वभाव: ${e.predictions.marriage.spouseNature}`},{title:e.predictions.education.title,body:$.deduplicateParagraph(e.predictions.education.summary,"dasha",`h2a|education|${e.panchang.lagnaNumber}`)},{title:e.predictions.health.title,body:$.deduplicateParagraph(e.predictions.health.summary,"health",`h2a|health|${e.panchang.lagnaNumber}`),extra:e.predictions.health.careAreas.join(" • ")}],vt=`
    ${Q("खण्ड H2 : सम्पूर्ण जीवन फलादेश एवं प्रमुख समय-सीमा",i,d)}
    ${_("H2a","जीवन के 6 प्रमुख क्षेत्रों का संतुलित वैदिक मार्गदर्शन",`${e.panchang.lagnaName} लग्न • ${e.panchang.moonRashiName} राशि`)}
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 9px;">
      ${lt.map(o=>`
          <div class="book-card pj-h2c-no-lift" style="background:${t.pureIvory}; border:1.3px solid ${t.templeGold}; border-radius:9px; padding:9px 11px; font-size:8.2px; line-height:1.48;">
            <div class="pj-h2c-no-lift" style="font-weight:900; color:${t.cosmicNavy}; font-size:9.2px; border-bottom:1px solid ${t.borderMuted}; padding-bottom:3.5px; margin-bottom:4.5px;">
              ✦ ${a(ft(o.title))}
            </div>
            <div class="pj-h2c-no-lift" style="color:${t.inkPrimary}; direction: ltr; unicode-bidi: isolate;">${Yt(ft(o.body))}</div>
            ${o.extra?`<div class="pj-h2c-no-lift" style="margin-top:4.5px; color:${t.saffronDeep}; font-weight:700; font-size:7.8px;">${Yt(ft(o.extra))}</div>`:""}
          </div>`).join("")}
    </div>

    ${y&&y.lifeTimeline.length>0?`
          ${_("H2b","प्रमुख जीवन समय-सीमा एवं आवर्तन मील के पत्थर (Life Timeline)","महादशा, गुरु व शनि आवर्तन")}
          <table class="book-table" style="font-size: 7.7px;">
            <thead>
              <tr>
                <th style="width: 15%;">आयु / वर्ष</th>
                <th style="width: 33%;">चरण शीर्षक</th>
                <th style="width: 52%;">संक्षिप्त मार्गदर्शन</th>
              </tr>
            </thead>
            <tbody>
              ${y.lifeTimeline.filter(o=>o.phaseType!=="ANTARDASHA").slice(0,7).map((o,g)=>`
                  <tr style="background:${o.isCurrent?t.emeraldSoft:g%2===0?"#FFFDF8":"#FEF6E4"};">
                    <td style="font-variant-numeric: tabular-nums; font-weight:800; white-space: nowrap;">${o.startAge} – ${o.endAge} वर्ष</td>
                    <td style="font-weight:800; color:${o.isCurrent?t.emerald:t.cosmicNavy};">${a(o.titleHi)}</td>
                    <td>${a(o.summaryHi)}</td>
                  </tr>`).join("")}
            </tbody>
          </table>`:""}
  `;b.push({sectionCode:"H2",sectionTag:"खण्ड H : जीवन फलादेश व समयरेखा",html:vt});const ut=`
    ${Q("खण्ड I : आचार्य आशीर्वचन, प्रामाणिकता मुहर एवं समापन",i,d)}
    ${_("I1","जीवन के प्रबल पक्ष एवं विशेष सावधानियाँ","व्यक्तिगत सारांश")}
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 12px;">
      <div class="book-card" style="background: ${t.emeraldSoft}; border: 1.3px solid #10B981; border-radius: 9px; padding: 10px 12px; font-size: 8.5px; line-height: 1.55;">
        <div style="font-weight: 900; color: #065F46; font-size: 9.5px; margin-bottom: 5px;">✓ प्रमुख शक्तियाँ (Strengths)</div>
        ${$.deduplicateBullets(e.remedies.strengths.length>0?e.remedies.strengths:["लग्नेश व त्रिकोण भावों की शुभ स्थिति से जीवन में निरंतर उन्नति।"],"gochar","i1-str").slice(0,5).map(o=>`<div style="margin-top:3px;">• ${a(o)}</div>`).join("")}
      </div>
      <div class="book-card" style="background: ${t.saffronSoft}; border: 1.3px solid ${t.templeGold}; border-radius: 9px; padding: 10px 12px; font-size: 8.5px; line-height: 1.55;">
        <div style="font-weight: 900; color: ${t.saffronDeep}; font-size: 9.5px; margin-bottom: 5px;">✦ विवेकपूर्ण सावधानियाँ (Precautions)</div>
        ${(()=>{const o=$.deduplicateBullets(e.remedies.precautions.length>0?e.remedies.precautions:["महत्वपूर्ण निर्णयों में धैर्य, सात्विक आहार और दशा-गोचर का ध्यान रखें।"],"remedy","i1-pre").slice(0,5);if(!yt)return o.map(u=>`<div style="margin-top:3px;">• ${a(ft(u))}</div>`).join("");let g=!1;const T=o.map(u=>!g&&St.test(u)?(g=!0,ft(mt)):ft(u));return g||T.splice(0,0,ft(mt)),T.slice(0,5).map(u=>`<div style="margin-top:3px;">• ${a(u)}</div>`).join("")})()}
      </div>
    </div>

    ${_("I2","आचार्य पण्डित शशांक शर्मा का आशीर्वचन एवं गणना प्रामाणिकता प्रमाण-पत्र","PANDIT JI ONLINE")}
    <div class="book-card" style="background: ${t.pureIvory}; border: 1.8px solid ${t.templeGold}; border-radius: 11px; padding: 14px 16px; text-align: center;">
      <div style="display: flex; justify-content: center; margin-bottom: 8px;">
        ${Pt(56,d,2.5)}
      </div>
      <div style="font-size: 11.5px; font-weight: 900; color: ${t.saffronDeep};">
        ॥ स्वस्ति प्रजाभ्यः परिपालयन्तां न्यायेन मार्गेण महीं महीशाः ॥
      </div>
      <div style="font-size: 9px; color: ${t.inkPrimary}; line-height: 1.65; margin-top: 8px; text-align: justify;">
        प्रिय यजमान <b>${a(e.input.name)}</b> जी, यह सम्पूर्ण बृहत् वैदिक जन्म कुंडली पुस्तक पूर्ण खगोलीय शुद्धता — <b>दृक् गणित लाहिड़ी चित्रा पक्ष अयनांश (${a(e.input.ayanamsaDMS)}), True Node, वास्तविक MC आधारित श्रीपति भाव चलित, BPHS सत्यापित 16 षोडशवर्ग, 6-अंगी पाराशरी षड्बल, 337-बिंदु अष्टकवर्ग, विंशोत्तरी/योगिनी/जैमिनी दशा प्रणाली एवं डिजिटल ज्योतिषाचार्य जीवन-मार्गदर्शन</b> पर आधारित है। वैदिक ज्योतिष हमें जीवन के संभावित अवसरों और चुनौतियों का प्रकाश दिखाता है; सद्कर्म, धैर्य और ईश्वर-भक्ति से प्रत्येक समय को मंगलमय बनाया जा सकता है।
      </div>
      <div style="margin-top: 10px; padding-top: 9px; border-top: 1px dashed ${t.templeGold}; display: flex; align-items: center; justify-content: space-between; font-size: 8.4px; color: ${t.cosmicNavy};">
        <div style="text-align: left;">
          <b>प्रमाणित संस्थान:</b> पण्डित जी ऑनलाइन (PANDIT JI ONLINE)<br/>
          <b>वेबसाइट:</b> ${Ot(t.saffronDeep)}
        </div>
        <div style="text-align: right;">
          <b>${a(wt.founderHi)}</b><br/>
          <span style="color:${t.inkMuted};">${a(wt.locationHi)}</span>
        </div>
      </div>
    </div>

    ${Fe(r,c)}
  `;return b.push({sectionCode:"I",sectionTag:"खण्ड I : आशीर्वचन एवं समापन",html:ut}),b.map(o=>({...o,html:o.html.replace(/>([^<]+)</g,(g,T)=>T.includes("))")?`>${T.replace(/\){2,}/g,")")}<`:g)}))}const ne=`
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
`;function he(e,r,n){return e.isCover?`
      <div class="vedic-book-a4-page" style="padding: 16px 18px;">
        <div class="vedic-book-a4-body--cover">${e.html}</div>
      </div>
    `:`
    <div class="vedic-book-a4-page">
      <div class="vedic-book-a4-body${e.html.includes("book-banner-slot")||e.html.includes('class="book-banner"')?" vedic-book-a4-body--has-banner":""}">${e.html}</div>
      <div class="vedic-book-a4-footer">
        <span>पण्डित जी ऑनलाइन (PANDIT JI ONLINE) • ${a(wt.founderHi)} • ${Ot(t.inkMuted)}</span>
        <span style="color:${t.cosmicNavy}; font-weight:800; white-space: nowrap;">पृष्ठ ${r} / ${n}</span>
      </div>
    </div>
  `}function ge(e,r){if(r==="hi")return;const l=(e.ownerDocument||document).createTreeWalker(e,NodeFilter.SHOW_TEXT),c=[];let p;for(;p=l.nextNode();)p.nodeType===Node.TEXT_NODE&&p.nodeValue&&/[\u0900-\u097F]/.test(p.nodeValue)&&c.push(p);for(const d of c)d.nodeValue&&(d.nodeValue=ve(d.nodeValue,r))}async function Ke(e){const r=e.ownerDocument||document,n=Array.from(e.querySelectorAll("svg"));for(const l of n)try{const c=parseFloat(l.getAttribute("width")||"240")||240,p=parseFloat(l.getAttribute("height")||"240")||240,d=l.cloneNode(!0);d.setAttribute("xmlns","http://www.w3.org/2000/svg"),d.setAttribute("width",String(c)),d.setAttribute("height",String(p));const i=new XMLSerializer().serializeToString(d),w="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(i),s=await new Promise(m=>{const y=new Image,b=window.setTimeout(()=>m(""),1800);y.onload=()=>{window.clearTimeout(b);try{const $=document.createElement("canvas");$.width=Math.max(120,Math.round(c*2.6)),$.height=Math.max(120,Math.round(p*2.6));const D=$.getContext("2d");if(D){D.fillStyle=t.warmIvory,D.fillRect(0,0,$.width,$.height),D.drawImage(y,0,0,$.width,$.height);const L=$.toDataURL("image/png");$.width=0,$.height=0,m(L);return}}catch{}m("")},y.onerror=()=>{window.clearTimeout(b),m("")},y.src=w});if(s){const m=r.createElement("img");m.src=s,m.width=c,m.height=p,m.style.cssText=`width:${c}px;height:${p}px;display:block;margin:0 auto;`,l.parentNode?.replaceChild(m,l)}}catch{}}function Xe(e,r,n,l,c,p){const d=Math.max(0,Math.min(p,l/2,c/2));e.beginPath(),e.moveTo(r+d,n),e.lineTo(r+l-d,n),e.arcTo(r+l,n,r+l,n+d,d),e.arcTo(r+l,n+c,r+l-d,n+c,d),e.lineTo(r+d,n+c),e.arcTo(r,n+c,r,n+c-d,d),e.arcTo(r,n,r+d,n,d),e.closePath()}function Qe(e){const r=e.ownerDocument||document,n=Array.from(e.querySelectorAll(".book-banner-badge, .book-pill, .book-banner-pill"));if(!n.length)return;const l=4;for(const c of n)try{const p=(c.textContent||"").replace(/\s+/g," ").trim();if(!p)continue;const d=c.classList.contains("book-banner-badge"),i=r.defaultView?.getComputedStyle(c),w=c.getBoundingClientRect(),s=Math.max(7,parseFloat(i?.fontSize||(d?"8":"8.2"))||8),m=i?.fontWeight||"800",y=i?.color||"#FFFFFF",b=i?.whiteSpace==="nowrap";if(!d&&!b&&w.height>s*3.6)continue;const $=c.getAttribute("data-badge-bg")||(i&&i.backgroundColor&&i.backgroundColor!=="rgba(0, 0, 0, 0)"?i.backgroundColor:d?"#FF6F00":"rgba(15, 23, 42, 0.9)"),D=parseFloat(i?.borderTopWidth||"0")||0,L=i?.borderTopColor||"transparent",P=parseFloat(i?.borderTopLeftRadius||"999")||0,E=Math.max(6,Math.round(parseFloat(i?.paddingLeft||(d?"10":"9"))||9)),k=r.createElement("canvas"),x=k.getContext("2d");if(!x)continue;const C=`${m} ${s}px ${U}`;x.font=C;const M=x.measureText(p),R=Math.ceil(Math.max(M.width,(M.actualBoundingBoxLeft||0)+(M.actualBoundingBoxRight||0))),h=d?Math.max(19,Math.round(w.height||19)):Math.max(19,Math.round(w.height||s+11)),z=Math.max(40,R+28),I=h+18;k.width=Math.round(z*l),k.height=Math.round(I*l),x.save(),x.scale(l,l),x.font=C,x.fillStyle=y,x.textAlign="center",x.textBaseline="middle",x.fillText(p,z/2,I/2),x.restore();let N=k.width,F=-1,A=k.height,O=-1;try{const st=x.getImageData(0,0,k.width,k.height).data,Z=k.width,ct=k.height;for(let tt=0;tt<ct;tt++){const rt=tt*Z*4;for(let nt=0;nt<Z;nt++)st[rt+nt*4+3]>20&&(nt<N&&(N=nt),nt>F&&(F=nt),tt<A&&(A=tt),tt>O&&(O=tt))}}catch{}const q=F>=N&&O>=A,v=q?(F-N+1)/l:R,j=q?(O-A+1)/l:s*1.25,S=Math.max(h,Math.ceil(j+7+D*2)),W=Math.ceil(Math.max(v+E*2+D*2,d?0:w.width||0)),V=r.createElement("canvas");V.width=Math.round(W*l),V.height=Math.round(S*l);const Y=V.getContext("2d");if(!Y){k.width=0,k.height=0;continue}Y.save(),Y.scale(l,l);const ot=D>0?D/2:0,pt=P>=S/2?S/2:P;if(Xe(Y,ot,ot,W-ot*2,S-ot*2,Math.max(0,pt-ot)),Y.fillStyle=$,Y.fill(),D>0&&L&&L!=="transparent"&&L!=="rgba(0, 0, 0, 0)"&&(Y.lineWidth=D,Y.strokeStyle=L,Y.stroke()),Y.restore(),q){const X=(N+F)/2,st=(A+O)/2,Z=Math.round((V.width-1)/2-X),ct=Math.round((V.height-1)/2-st);Y.drawImage(k,Z,ct)}else{Y.save(),Y.scale(l,l),Y.font=C,Y.fillStyle=y,Y.textAlign="center",Y.textBaseline="alphabetic";const X=Y.measureText(p),st=X.actualBoundingBoxAscent>0?X.actualBoundingBoxAscent:s*.72,Z=X.actualBoundingBoxDescent>=0?X.actualBoundingBoxDescent:s*.2;Y.fillText(p,W/2,S/2+(st-Z)/2),Y.restore()}const gt=V.toDataURL("image/png");if(k.width=0,k.height=0,V.width=0,V.height=0,gt){const X=r.createElement("img");X.className=d?"book-banner-badge-img":"book-pill-img",X.src=gt,X.alt=p,X.width=W,X.height=S,d?X.style.cssText=`width:${W}px;height:${S}px;display:block;align-self:flex-start;margin-bottom:5px;flex-shrink:0;`:X.style.cssText=`width:${W}px;height:${S}px;display:inline-block;vertical-align:middle;flex-shrink:0;`,c.parentNode?.replaceChild(X,c)}}catch{}}function Ze(){if(typeof document>"u"||!document.head)return;const e="pj-pdf-noto-devanagari-font";if(document.getElementById(e))return;const r=document.createElement("link");r.id=e,r.rel="stylesheet",r.href="https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;500;600;700;800;900&family=Noto+Sans+Symbols:wght@400;700&family=Noto+Sans+Symbols+2&display=swap",document.head.appendChild(r)}async function me(e){Ze(),await Ne(e,3500)}async function ti(e){const r=Array.from(e.querySelectorAll("img"));await Promise.all(r.map(n=>new Promise(l=>{const c=()=>{typeof n.decode=="function"?n.decode().then(()=>l()).catch(()=>l()):l()};if(n.complete&&n.naturalWidth>0){c();return}const p=window.setTimeout(l,900);n.onload=()=>{window.clearTimeout(p),c()},n.onerror=()=>{window.clearTimeout(p),l()}})))}async function ue(e,r={}){const n={cleanMode:!!r.cleanMode,chartStyle:r.chartStyle||"north",language:r.language||"hi"},l=await Gt(),c=qt(e,l,n),p=`PanditJiOnline_Kundali_Book_${se(e.input.name)}`,d=c.map((b,$)=>`
      <section class="vector-print-page${!b.isCover&&(b.html.includes("book-banner-slot")||b.html.includes('class="book-banner"'))?" vector-print-page--has-banner":""}">
        ${b.html}
        ${b.isCover?"":`<div style="margin-top: 8px; border-top: 1px solid ${t.templeGold}; padding-top: 4px; display: flex; align-items: center; justify-content: space-between; font-size: 7.7px; font-weight: 700; color: ${t.inkMuted};">
                 <span>पण्डित जी ऑनलाइन (PANDIT JI ONLINE) • ${a(wt.founderHi)} • ${Ot(t.inkMuted)}</span>
                 <span style="white-space: nowrap;">पृष्ठ ${$+1} / ${c.length}</span>
               </div>`}
      </section>`).join(""),i=`<!DOCTYPE html>
<html lang="${n.language==="hi"?"hi":"en"}">
<head>
  <meta charset="utf-8" />
  <title>${a(p)}</title>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;500;600;700;800;900&family=Noto+Sans+Symbols:wght@400;700&family=Noto+Sans+Symbols+2&display=swap" />
  <style>${ne}</style>
</head>
<body>
  <div id="vector-book-root">${d}</div>
</body>
</html>`,w=document.getElementById("panditji-vector-print-iframe");w&&w.remove();const s=document.createElement("iframe");s.id="panditji-vector-print-iframe",s.style.cssText="position:fixed;right:0;bottom:0;width:0;height:0;border:0;opacity:0;pointer-events:none;",document.body.appendChild(s);const m=s.contentDocument||s.contentWindow?.document;if(!m)return!1;m.open(),m.write(i),m.close();const y=m.getElementById("vector-book-root");return y&&n.language!=="hi"&&ge(y,n.language),await me(m),setTimeout(()=>{try{s.contentWindow?.focus(),s.contentWindow?.print()}catch{}setTimeout(()=>{document.body.contains(s)&&document.body.removeChild(s)},6e4)},450),!0}function ei(){typeof window>"u"||(Gt().catch(()=>{}),oe().catch(()=>{}))}function Jt(){return new Promise(e=>{typeof window<"u"&&typeof window.requestAnimationFrame=="function"?window.requestAnimationFrame(()=>window.setTimeout(e,16)):window.setTimeout(e,16)})}function ii(e,r){let n=Math.max(1,e),l=4,c=4,p=null;const d=document.createElement("div");d.id="panditji-book-pdf-progress",d.style.cssText=`
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
  `,d.innerHTML=`
    <div style="display:flex; align-items:center; gap:11px;">
      ${Pt(36,r,1.8)}
      <div style="flex:1; min-width:0;">
        <div style="font-size:12px; font-weight:800; color:#FFFDF7; line-height:1.3;">4K वैदिक कुंडली पुस्तक तैयार हो रही है</div>
        <div id="pj-pdf-prog-text" style="font-size:11px; color:#F1F5F9; margin-top:2px; font-weight:600;">कुंडली डेटा व QR तैयार हो रहे हैं...</div>
      </div>
      <div id="pj-pdf-prog-pct" style="font-size:12px; font-weight:900; color:color-mix(in srgb, var(--theme-accent, #FDE68A) 52%, #FFFDF7 48%); font-family:monospace; flex-shrink:0;">4%</div>
    </div>
    <div style="margin-top:9px; width:100%; height:7px; background:color-mix(in srgb, var(--theme-bg, #0F172A) 65%, rgba(255,253,247,0.16) 35%); border-radius:999px; overflow:hidden; border:1px solid color-mix(in srgb, var(--theme-primary, #D97706) 45%, #F59E0B 25%);">
      <div id="pj-pdf-prog-fill" style="width:4%; height:100%; background:linear-gradient(90deg, var(--theme-primary, ${t.saffron}), var(--theme-accent, ${t.templeGold}), #FDE68A); border-radius:999px; transition:width 180ms ease-out;"></div>
    </div>
  `;const i=(b,$)=>{const D=Math.max(l,Math.min(100,Math.round(b)));l=D;const L=d.querySelector("#pj-pdf-prog-text"),P=d.querySelector("#pj-pdf-prog-pct"),E=d.querySelector("#pj-pdf-prog-fill");$&&L&&(L.textContent=$),P&&(P.textContent=`${D}%`),E&&(E.style.width=`${D}%`)},w=()=>{p!==null&&(window.clearInterval(p),p=null)},s=()=>{p===null&&(p=window.setInterval(()=>{l<c&&i(l+1)},280))},m=(b,$,D)=>{i(b,$),c=Math.max(l,Math.min(99,Math.round(D??b))),c>l&&s()};return{root:d,setStage:m,updatePage:(b,$,D)=>{$>0&&(n=$);const L=28+(b-1)/n*68,P=28+b/n*68;if(D==="start"){const E=Math.max(l,Math.round(L+.35*(P-L))),k=Math.min(96,Math.max(E,Math.floor(P)));m(E,`पृष्ठ ${b} / ${n} तैयार हो रहा है...`,k)}else{const E=Math.min(96,Math.round(P));m(E,`पृष्ठ ${b} / ${n} तैयार`,E)}},stop:w}}function ai(e,r,n,l,c,p,d){const i=document.getElementById("panditji-book-pdf-ready-modal");i&&i.remove();const w=(e.size/(1024*1024)).toFixed(2),s=document.createElement("div");s.id="panditji-book-pdf-ready-modal",s.style.cssText="position:fixed;inset:0;z-index:2147483647;background:rgba(5,8,18,0.8);backdrop-filter:blur(7px);display:flex;align-items:center;justify-content:center;padding:16px;";const m=document.createElement("div");m.className="pj-velvet-glass-modal",m.style.cssText=`width:100%;max-width:440px;background:linear-gradient(135deg, rgba(255,255,255,0.095) 0%, rgba(255,253,247,0.02) 34%, transparent 60%), linear-gradient(155deg, var(--theme-velvet-modal-top, rgba(24,20,38,0.88)) 0%, var(--theme-velvet-modal-bottom, rgba(14,16,30,0.92)) 100%) !important;backdrop-filter:blur(12px) saturate(135%);-webkit-backdrop-filter:blur(12px) saturate(135%);border:1px solid var(--theme-velvet-border, rgba(255,223,140,0.36)) !important;border-radius:20px;padding:22px 20px;box-shadow:0 22px 54px rgba(0,0,0,0.62), inset 0 1px 0 rgba(255,255,255,0.18);color:#FFFDF7;font-family:${U};text-align:center;box-sizing:border-box;`,m.innerHTML=`
    <div style="display:flex; justify-content:center; margin-bottom:10px;">
      ${Pt(56,d,2.5)}
    </div>
    <div style="font-size:16.5px;font-weight:900;color:#FFFDF7;line-height:1.35;text-shadow:0 1px 2px rgba(0,0,0,0.35);">4K बृहत् कुंडली पुस्तक PDF तैयार है</div>
    <div style="display:inline-block;margin-top:6px;padding:4px 12px;border-radius:999px;background:var(--theme-velvet-subcard, #1d1a2f);border:1px solid var(--theme-velvet-subborder, rgba(255,223,140,0.26));font-size:11.5px;color:var(--theme-label-safe, #FDE68A);font-weight:800;">
      ${a(l.input.name)} • ${p} पृष्ठ • ${w} MB • ${c.cleanMode?"Clean PDF मोड":"ब्रांडेड वैदिक पुस्तक"}
    </div>
    <div style="font-size:11px;color:#F1F5F9;margin-top:9px;line-height:1.55;">
      यदि ऑटो-डाउनलोड शुरू न हुआ हो, तो नीचे दिए गए बटन पर टैप करके तुरंत सेव या WhatsApp पर शेयर करें।
    </div>
    <div style="display:flex;flex-direction:column;gap:9px;margin-top:15px;">
      <a id="pj-book-dl-link" href="${r}" download="${a(n)}" style="display:block;width:100%;padding:12px 14px;border-radius:12px;background:linear-gradient(135deg, color-mix(in srgb, var(--theme-primary, #D97706) 80%, #F59E0B 20%) 0%, color-mix(in srgb, var(--theme-accent, #F59E0B) 68%, var(--theme-primary, #B45309) 32%) 100%);color:#FFFDF7;font-weight:900;font-size:13px;text-decoration:none;border:1px solid color-mix(in srgb, var(--theme-accent, #FDE68A) 52%, #FFFDF7 24%);box-shadow:0 8px 22px rgba(0,0,0,0.4);text-shadow:0 1px 2px rgba(0,0,0,0.45);box-sizing:border-box;">
        ⬇ अभी कुंडली पुस्तक PDF डाउनलोड करें (${w} MB)
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
  `,s.appendChild(m),document.body.appendChild(s);const y=()=>{s.remove(),setTimeout(()=>URL.revokeObjectURL(r),6e4)};m.querySelector("#pj-book-close-btn")?.addEventListener("click",y),s.addEventListener("click",b=>{b.target===s&&y()}),m.querySelector("#pj-book-share-btn")?.addEventListener("click",async()=>{try{const b=new File([e],n,{type:"application/pdf"});if(navigator.canShare&&navigator.canShare({files:[b]})){await navigator.share({files:[b],title:`${l.input.name} — Janam Kundali Book`,text:`पण्डित जी ऑनलाइन बृहत् जन्म कुंडली पुस्तक (${wt.websiteDisplay})`}),y();return}}catch{}m.querySelector("#pj-book-dl-link")?.click()}),m.querySelector("#pj-book-vector-btn")?.addEventListener("click",()=>{y(),ue(l,c)})}async function ni(e,r={}){const n={cleanMode:!!r.cleanMode,chartStyle:r.chartStyle||"north",language:r.language||"hi"},c=ii(30,De());document.body.appendChild(c.root),c.setStage(8,"PDF इंजन व QR कोड तैयार हो रहे हैं...",18),await Jt();let p,d=null,i=null;try{const[y,b]=await Promise.all([Gt(),oe()]);p=y,d=b.jsPDF,i=b.html2canvas}catch(y){throw c.stop(),document.body.contains(c.root)&&document.body.removeChild(c.root),y}if(typeof d!="function"||typeof i!="function")throw c.stop(),document.body.contains(c.root)&&document.body.removeChild(c.root),new Error("PDF libraries failed to initialize");c.setStage(20,"वैदिक फ़ॉन्ट व लेआउट तैयार हो रहा है...",23);const w=794,s=1123,m=document.createElement("iframe");m.id="panditji-book-pdf-capture-iframe",m.style.cssText=`position:fixed;left:-9999px;top:0;width:${w}px;height:${s}px;border:0;margin:0;padding:0;z-index:-1;pointer-events:none;background:${t.warmIvory};`,document.body.appendChild(m);try{const y=m.contentDocument||m.contentWindow?.document;if(!y)throw new Error("Could not create capture iframe document");y.open(),y.write(`<!DOCTYPE html>
<html lang="hi">
<head>
  <meta charset="utf-8" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;500;600;700;800;900&family=Noto+Sans+Symbols:wght@400;700&family=Noto+Sans+Symbols+2&display=swap" />
  <style>${ne}</style>
</head>
<body style="margin:0;padding:0;background:${t.warmIvory};">
  <div id="book-pdf-host" style="width:${w}px;height:${s}px;overflow:hidden;"></div>
</body>
</html>`),y.close();const b=y.getElementById("book-pdf-host");if(!b)throw new Error("Book PDF host missing");await me(y),c.setStage(24,"30 पृष्ठ व उच्च-गुणवत्ता कुंडली चार्ट बन रहे हैं...",27),await Jt();const $=qt(e,p,n,!0);c.setStage(28,`पृष्ठ 1 / ${$.length} तैयार हो रहा है...`,30),await Jt();const D=new d({orientation:"portrait",unit:"mm",format:"a4",compress:!0}),P=typeof window<"u"&&(window.innerWidth<768||typeof navigator<"u"&&typeof navigator.hardwareConcurrency=="number"&&navigator.hardwareConcurrency<=4)?1.75:2;for(let h=0;h<$.length;h++){c.updatePage(h+1,$.length,"start"),b.innerHTML=he($[h],h+1,$.length);const z=b.querySelector(".vedic-book-a4-page");if(!z)continue;n.language!=="hi"&&ge(z,n.language),await Ke(z),Qe(z),await ti(z),await new Promise(A=>setTimeout(A,h===0?20:8));const I=document.fonts;I?.ready&&await I.ready;const N=await i(z,{scale:P,useCORS:!0,allowTaint:!1,imageTimeout:2500,backgroundColor:t.warmIvory,width:w,height:s,windowWidth:w,windowHeight:s,logging:!1,onclone:A=>{He(A,".vedic-book-a4-page")}}),F=N.toDataURL("image/jpeg",.85);h>0&&D.addPage(),D.addImage(F,"JPEG",0,0,210,297,void 0,"FAST"),N.width=0,N.height=0,b.innerHTML="",c.updatePage(h+1,$.length,"done")}c.setStage(98,"कुंडली पुस्तक PDF फ़ाइल सेव हो रही है...",99),await Jt();const E=se(e.input.name),k=n.cleanMode?"_Clean":"",x=`PanditJiOnline_Kundali_Book_${E}${k}.pdf`,C=D.output("arraybuffer"),M=new Blob([C],{type:"application/pdf"}),R=URL.createObjectURL(M);c.setStage(100,"कुंडली पुस्तक PDF तैयार है!");try{const h=document.createElement("a");h.href=R,h.download=x,h.style.display="none",document.body.appendChild(h),h.click(),setTimeout(()=>{document.body.contains(h)&&document.body.removeChild(h)},2e3)}catch{}return ai(M,R,x,e,n,$.length,p.appLogoDataUrl),!0}finally{c.stop(),document.body.contains(m)&&document.body.removeChild(m),document.body.contains(c.root)&&document.body.removeChild(c.root)}}async function oi(e,r={}){const n={cleanMode:!!r.cleanMode,chartStyle:r.chartStyle||"north",language:r.language||"hi"},l=await Gt(),c=qt(e,l,n),p=c.map((d,i)=>he(d,i+1,c.length));return{pages:c,sharedCss:ne,qrs:l,wrappedDiscretePages:p}}export{qt as buildAllKundaliBookPages,oi as buildKundaliBookPayload,ni as downloadKundaliBookPDF,ei as prewarmKundaliBookPdfAssets,ue as printKundaliBookVectorPDF};
