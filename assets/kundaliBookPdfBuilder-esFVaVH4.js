import{am as ge,aI as me}from"./panchang-core-DobwkCWw.js";import{t as ue}from"./index-9msyLtvB.js";import{V as t,P as bt,b as jt,e as Tt,c as xe,g as ye,f as be,h as Bt,i as $e,j as ee,k as fe,s as ie,w as ve}from"./pdfReportExporter-DuSIveB5.js";import{R as Pt,G as we,C as Ct,T as ke,a as Ot}from"./SampurnKundaliSection-pCykX9bm.js";import{P as Fe,s as De}from"./phalitDeduplicator-BGvyKkly.js";import"./vendor-astronomy-Dp-T7uki.js";import"./boot-core-CiMsAyI0.js";import"./vendor-react-DwUEwgAQ.js";import"./vendor-icons-Bo8f0eBC.js";import"./browser-Ban-Atb5.js";import"./VedicDateInput-C8hJa62i.js";import"./VedicTripleCheckBadge-DYKutCmz.js";import"./vedicTripleCheck-CS2Xf0Xy.js";import"./ShareableVedicCardButton-CLiTjKFS.js";import"./BirthPlaceGpsButton-B1IvybB0.js";import"./livePageCardResolver-CJVFA9V3.js";const Ne={1:"mars",2:"venus",3:"mercury",4:"moon",5:"sun",6:"mercury",7:"venus",8:"mars",9:"jupiter",10:"saturn",11:"saturn",12:"jupiter"},Jt=["मेष","वृषभ","मिथुन","कर्क","सिंह","कन्या","तुला","वृश्चिक","धनु","मकर","कुंभ","मीन"],it={sun:"सूर्य",moon:"चंद्र",mars:"मंगल",mercury:"बुध",jupiter:"गुरु",venus:"शुक्र",saturn:"शनि",rahu:"राहु",ketu:"केतु"},kt={sun:"ॐ घृणि सूर्याय नमः",moon:"ॐ सों सोमाय नमः",mars:"ॐ अं अंगारकाय नमः",mercury:"ॐ बुं बुधाय नमः",jupiter:"ॐ बृं बृहस्पतये नमः",venus:"ॐ शुं शुक्राय नमः",saturn:"ॐ शं शनैश्चराय नमः",rahu:"ॐ रां राहवे नमः",ketu:"ॐ केम् केतवे नमः"},ae={sun:{planetId:"sun",planetHi:"सूर्य",gemHi:"माणिक्य (Ruby)",uparatnaHi:"लाल गार्नेट / सूर्यकांत",rattiHi:"5.25 से 6.25 रत्ती",metalHi:"सोना या तांबा",fingerHi:"अनामिका (Ring Finger)",dayHi:"शुक्ल पक्ष का रविवार",timingHi:"सूर्योदय के 1 घंटे के भीतर (प्रातः 6:30–8:00)",mantraHi:kt.sun,purificationHi:"कच्चा दूध, गंगाजल एवं शहद से स्नान कर धूप-दीप दिखाएं",avoidWarnHi:"अहंकार, रक्तचाप, पिता/वरिष्ठों से तनाव और अनावश्यक सरकारी विवाद बढ़ सकते हैं।"},moon:{planetId:"moon",planetHi:"चंद्र",gemHi:"सच्चा मोती (Natural Pearl)",uparatnaHi:"मूनस्टोन (चंद्रमणि)",rattiHi:"5.25 से 7.25 रत्ती",metalHi:"चांदी (Silver)",fingerHi:"कनिष्ठा (Little Finger)",dayHi:"शुक्ल पक्ष का सोमवार",timingHi:"प्रातः सूर्योदय पश्चात या संध्या चंद्रोदय काल",mantraHi:kt.moon,purificationHi:"कच्चा गाय का दूध, गंगाजल एवं तुलसी दल/अक्षत से शुद्ध करें",avoidWarnHi:"मानसिक अस्थिरता, भावनात्मक उलझन, सर्दी-कफ एवं अनिर्णय की प्रवृत्ति बढ़ सकती है।"},mars:{planetId:"mars",planetHi:"मंगल",gemHi:"त्रिकोणीय/अंडाकार मूंगा (Red Coral)",uparatnaHi:"लाल हकीक / तांबा छल्ला",rattiHi:"6.25 से 8.25 रत्ती",metalHi:"तांबा या सोना",fingerHi:"अनामिका (Ring Finger)",dayHi:"शुक्ल पक्ष का मंगलवार",timingHi:"सूर्योदय के 1–2 घंटे के भीतर",mantraHi:kt.mars,purificationHi:"कच्चा दूध, गंगाजल एवं लाल पुष्प अर्पित कर शुद्ध करें",avoidWarnHi:"क्रोध, जल्दबाजी, रक्त/चोट संबंधी समस्या, कर्ज अथवा भूमि-विवाद की संभावना बढ़ सकती है।"},mercury:{planetId:"mercury",planetHi:"बुध",gemHi:"पन्ना (Emerald)",uparatnaHi:"पेरीडॉट / हरा ओनिक्स",rattiHi:"5.25 से 6.25 रत्ती",metalHi:"सोना या चांदी",fingerHi:"कनिष्ठा (Little Finger)",dayHi:"शुक्ल पक्ष का बुधवार",timingHi:"प्रातः सूर्योदय के 2 घंटे के भीतर",mantraHi:kt.mercury,purificationHi:"कच्चा दूध, गंगाजल एवं दूर्वा/तुलसी दल से शुद्ध करें",avoidWarnHi:"व्यापारिक निर्णय में भ्रम, त्वचा/स्नायु संवेदनशीलता और संवाद में अनावश्यक गलतफहमी हो सकती है।"},jupiter:{planetId:"jupiter",planetHi:"गुरु",gemHi:"पीला पुखराज (Yellow Sapphire)",uparatnaHi:"सुनहला (Citrine) / पीला टोपाज",rattiHi:"5.25 से 6.25 रत्ती",metalHi:"सोना या पीतल",fingerHi:"तर्जनी (Index Finger)",dayHi:"शुक्ल पक्ष का गुरुवार",timingHi:"प्रातः सूर्योदय के 1–2 घंटे के भीतर",mantraHi:kt.jupiter,purificationHi:"कच्चा दूध, गंगाजल, हल्दी व पीले पुष्प से शुद्ध करें",avoidWarnHi:"वजन/लिवर की समस्या, अत्यधिक आशावाद से आर्थिक चूक और अनावश्यक व्यय बढ़ सकते हैं।"},venus:{planetId:"venus",planetHi:"शुक्र",gemHi:"ओपल या सफेद जरकन / हीरा (Opal / Diamond)",uparatnaHi:"स्फटिक / सफेद पुखराज",rattiHi:"6.25 से 8.25 रत्ती (ओपल) / 0.5–1 कैरेट (हीरा)",metalHi:"चांदी या प्लैटिनम",fingerHi:"मध्यमा या अनामिका उंगली",dayHi:"शुक्ल पक्ष का शुक्रवार",timingHi:"प्रातः सूर्योदय के 1–2 घंटे के भीतर",mantraHi:kt.venus,purificationHi:"कच्चा दूध, गंगाजल, दही व श्वेत पुष्प से शुद्ध करें",avoidWarnHi:"विलासिता में अनावश्यक खर्च, शुगर/हार्मोन असंतुलन एवं संबंधों में अस्थिरता आ सकती है।"},saturn:{planetId:"saturn",planetHi:"शनि",gemHi:"नीलम (Blue Sapphire — 3 दिन परीक्षण उपरांत)",uparatnaHi:"नीली / जामुनिया (Amethyst)",rattiHi:"5.25 से 6.25 रत्ती",metalHi:"पंचधातु या चांदी",fingerHi:"मध्यमा (Middle Finger)",dayHi:"शुक्ल पक्ष का शनिवार",timingHi:"सूर्यास्त के पश्चात या प्रातः शनि होरा में",mantraHi:kt.saturn,purificationHi:"कच्चा दूध, गंगाजल एवं काले तिल के जल से शुद्ध करें",avoidWarnHi:"बिना अनुकूलता धारण करने पर कार्यों में विलंब, जोड़ों में दर्द, कर्ज या अचानक हानि हो सकती है।"}};function oe(e,l){return(e-1+(l-1))%12+1}function et(e,l){return Ne[oe(e,l)]||"jupiter"}function At(e,l){const i=[];for(let s=1;s<=12;s++)et(e,s)===l&&i.push(s);return i}function K(e,l){return e.planets.find(i=>i.id===l)}function vt(e,l){const i=e.ashtakavarga;if(!i)return 28;if(i.bhavaSarvashtakavarga&&typeof i.bhavaSarvashtakavarga[l-1]=="number")return i.bhavaSarvashtakavarga[l-1];const s=((e.panchang.lagnaNumber||1)-1+12)%12;return i.sarvashtakavarga[(s+(l-1))%12]??28}function Rt(e,l){const i=e.shadbalaBhava?.planets.find(s=>s.id===l);return i?i.strengthRatio:1}function Dt(e,l){if(l==="rahu"||l==="ketu")return"mixed";const i=At(e,l),s=i.some(d=>[4,7,10].includes(d)),p=i.some(d=>[5,9].includes(d));return s&&p?"yogakaraka":i.includes(1)?"lagna":p?"trikona":i.length>0&&i.every(d=>[6,8,12].includes(d))?"dusthana":s?"kendra":"mixed"}function He(e,l){const{esc:i,buildBookPageHeader:s,buildSectionTitleBar:p,personHeader:d,appLogo:o}=l,r=e.panchang.lagnaNumber||1,h=et(r,1),m=et(r,5),g=et(r,9),c=K(e,h),x=K(e,m),D=K(e,g),w=[];for(const f of e.rajYogas||[])w.push({title:f.name,line1:f.description,line2:`शास्त्रीय आधार: ${f.sanskritRule} — यह योग जीवन में सम्मान, प्रगति और स्थिरता को निरंतर बल देता है।`,score:f.strength==="प्रबल योग"?95:85});for(const f of e.planets){const j=Dt(r,f.id),L=Rt(e,f.id),B=f.hindiName.split(" ")[0];if(j==="yogakaraka"||f.isExalted||f.dignity.includes("स्वगृही")||L>=1.25){const Y=(j==="yogakaraka"?35:0)+(f.isExalted?35:f.dignity.includes("स्वगृही")?28:0)+Math.round(L*20)+([1,4,5,7,9,10,11].includes(f.houseInLagna)?15:0);w.push({title:`${B} की ${f.isExalted?"उच्चस्थ":f.dignity.includes("स्वगृही")?"स्वगृही":j==="yogakaraka"?"योगकारक":"अति पुष्ट"} स्थिति (भाव ${f.houseInLagna})`,line1:`${B} आपकी कुंडली के ${f.houseInLagna}वें भाव में ${f.rashiName.split(" ")[0]} राशि (${f.dignity}) में बैठकर अत्यंत प्रबल बल दे रहे हैं।`,line2:"इनकी दशा-अंतर्दशा व गोचर के दौरान करियर, निर्णय क्षमता और आर्थिक स्थिरता में स्पष्ट उछाल देखने को मिलेगा।",score:Y})}}const M=Array.from({length:12},(f,j)=>({house:j+1,pts:vt(e,j+1)})).sort((f,j)=>j.pts-f.pts);if(M[0]&&M[0].pts>=30){const f=M[0],j=e.lagnaChart[f.house-1]?.bhavaTitle||`भाव ${f.house}`;w.push({title:`सर्वाष्टकवर्ग में ${f.house}वें भाव का सर्वाधिक बल (${f.pts} बिंदु)`,line1:`आपकी कुंडली के ${j} को 337-बिंदु अष्टकवर्ग में ${f.pts} शुभ बिंदु मिले हैं (28 से ऊपर अति शुभ माना जाता है)।`,line2:"इस भाव से जुड़े कार्यों में कम संघर्ष में भी स्थायी और संतोषजनक परिणाम प्राप्त होने के प्रबल संकेत हैं।",score:70+f.pts})}const H=[],S=new Set;for(const f of w.sort((j,L)=>L.score-j.score)){const j=f.title.slice(0,16);if(!S.has(j)&&(S.add(j),H.push(f),H.length===3))break}for(;H.length<3;)H.push({title:`${e.panchang.lagnaName} लग्न एवं ${e.panchang.moonRashiName} चंद्र राशि का संतुलन`,line1:`आपकी जन्मपत्री में लग्नेश ${e.panchang.lagnaLord} तथा चंद्र राशि स्वामी ${e.panchang.moonRashiLord} व्यक्तित्व को व्यावहारिक और धैर्यवान बनाते हैं।`,line2:"सही योजना, अनुशासन और निरंतर कर्म से जीवन के मध्य भाग में उल्लेखनीय उन्नति सुनिश्चित है।",score:60});const b=[],N=f=>{const j=f.hindiName.split(" ")[0],L=f.rashiName.split(" ")[0],B=f.houseInLagna;switch(f.id){case"mars":return{title:`मंगल का अस्त (^) प्रभाव — भाव ${B} (${L})`,line1:`मंगल ${L} राशि (${B}वें भाव) में सूर्य के निकट अस्त होने से ऊर्जा, साहस या भूमि-संपत्ति संबंधी निर्णयों में कभी-कभी भीतरी अधीरता अथवा परिणाम में विलंब अनुभव हो सकता है।`,line2:"सावधानी: आवेश में संपत्ति/कर्ज या तकनीकी निर्णय न लें; नियमित व्यायाम, मंगलवार को हनुमान चालीसा पाठ व मसूर दान से मंगल का शुभ पराक्रम जागृत रहेगा।"};case"saturn":return{title:`शनि का अस्त (^) प्रभाव — भाव ${B} (${L})`,line1:`शनि ${L} राशि (${B}वें भाव) में सूर्य-सान्निध्य से अस्त होने पर कठिन परिश्रम के बाद भी वरिष्ठों से श्रेय मिलने में समय लग सकता है तथा कार्यभार का दबाव बढ़ सकता है।`,line2:"सावधानी: पिता या उच्चाधिकारियों से अहं-टकराव से बचें, दीर्घकालिक अनुशासन बनाए रखें और शनिवार सायं पीपल के नीचे तिल के तेल का दीपक जलाएं।"};case"mercury":return{title:`बुध का अस्त (^) प्रभाव — भाव ${B} (${L})`,line1:`बुध ${L} राशि (${B}वें भाव) में सूर्य के अति समीप होने से विचारों में तीव्रता तो रहती है, पर जल्दबाजी में संवाद या लिखित अनुबंध में सूक्ष्म चूक की संभावना बनती है।`,line2:"सावधानी: किसी भी वित्तीय/व्यापारिक कागज पर हस्ताक्षर से पूर्व दो बार जांचें; बुधवार को हरी मूंग दान व श्री विष्णु सहस्रनाम श्रवण लाभकारी रहेगा।"};case"jupiter":return{title:`गुरु का अस्त (^) प्रभाव — भाव ${B} (${L})`,line1:`देवगुरु बृहस्पति ${L} राशि (${B}वें भाव) में अस्त होने से मार्गदर्शक निर्णय या आर्थिक विस्तार में स्पष्ट दृष्टि बनाए रखने हेतु अतिरिक्त विवेक आवश्यक होता है।`,line2:"सावधानी: बिना पूर्ण मूल्यांकन बड़ी वित्तीय गारंटी न दें; गुरुजनों का सम्मान करें तथा गुरुवार को हल्दी/चना दाल दान व गायत्री जप करें।"};case"venus":return{title:`शुक्र का अस्त (^) प्रभाव — भाव ${B} (${L})`,line1:`शुक्र ${L} राशि (${B}वें भाव) में सूर्य-समीप होने से पारिवारिक अपेक्षाओं, दांपत्य संवेदनशीलता या सुख-सुविधाओं के व्यय में असंतुलन आ सकता है।`,line2:"सावधानी: रिश्तों में विनम्र संवाद और बजट अनुशासन रखें; शुक्रवार को श्वेत वस्तु/खीर दान व महालक्ष्मी स्तुति से सुख-सौहार्द बढ़ेगा।"};case"moon":return{title:`चंद्र का अस्त (^) / अमावस्या सान्निध्य — भाव ${B} (${L})`,line1:`चंद्रमा ${L} राशि (${B}वें भाव) में सूर्य के निकट होने से मन अत्यधिक संवेदनशील रह सकता है तथा भावनात्मक उतार-चढ़ाव निर्णय को प्रभावित कर सकते हैं।`,line2:"सावधानी: प्रातः प्राणायाम, पर्याप्त नींद और सोमवार को शिवलिंग पर जल अर्पण से मानसिक एकाग्रता व शांति सुदृढ़ होगी।"};default:return{title:`${j} का अस्त (^) प्रभाव — भाव ${B} (${L})`,line1:`${j} ${L} राशि (${B}वें भाव) में सूर्य के अत्यंत निकट होने से इस भाव के फलों को पूर्ण रूप से प्रकट होने में संयमित प्रयास की आवश्यकता रहती है।`,line2:"सावधानी: इस भाव से जुड़े बड़े निर्णय शांत चिंतन व अनुभवी सलाह से लें और संबंधित ग्रह के सात्विक मंत्र का अभ्यास करें।"}}};for(const f of e.planets){const j=f.hindiName.split(" ")[0];if(f.isDebilitated)b.push({title:`${j} का नीच राशि प्रभाव (भाव ${f.houseInLagna})`,line1:`${j} ${f.rashiName.split(" ")[0]} राशि में संवेदनशील स्थिति में हैं, जिससे इस भाव के फल प्रारंभ में धीमे मिल सकते हैं।`,line2:"सावधानी: इस क्षेत्र में जल्दबाजी से बचें; धैर्यपूर्वक अभ्यास और संबंधित सात्विक दान से यही ग्रह शानदार परिपक्व फल देगा।",priority:95});else if(f.isCombust){const L=N(f);b.push({title:L.title,line1:L.line1,line2:L.line2,priority:85})}}const k=e.phase2Jyotish?.yogasAndDoshas.doshas.allList||[];for(const f of k)f.effectiveStatus!=="दोष मुक्त"&&b.push({title:`${f.nameHi} (${f.effectiveStatus})`,line1:`${f.explanationHi.slice(0,145)}${f.explanationHi.length>145?"...":""}`,line2:`सरल समाधान: ${f.remedyHi}`,priority:f.effectiveStatus==="प्रबल सक्रिय"?92:78});const $=e.phase2Jyotish?.liveGochar.sadeSatiPhase;$&&$!=="NONE"&&b.push({title:`शनि गोचर अनुशासन काल (${e.phase2Jyotish?.liveGochar.sadeSatiLabelHi})`,line1:"वर्तमान में शनि गोचर आपको अनुशासन, समय-प्रबंधन और यथार्थवादी योजना अपनाने की प्रेरणा दे रहा है।",line2:"सावधानी: उधार/जोखिम भरे निवेश से बचें; शनिवार को पीपल के नीचे दीपक व हनुमान चालीसा पाठ से मानसिक शांति रहेगी।",priority:88});const C=M[M.length-1];if(C&&C.pts<26){const f=e.lagnaChart[C.house-1]?.bhavaTitle||`भाव ${C.house}`;b.push({title:`${C.house}वें भाव में अतिरिक्त प्रयास संकेत (${C.pts} SAV बिंदु)`,line1:`अष्टकवर्ग में ${f} के बिंदु औसत (28) से कम हैं, जिसका अर्थ है कि इस विषय में व्यवस्थित योजना आवश्यक है।`,line2:"सावधानी: इस भाव से जुड़े बड़े कदम सोच-समझकर और शुभ दशा/गोचर में उठाने से परिणाम सहज व सकारात्मक रहेंगे।",priority:72})}const z=[],I=new Set;for(const f of b.sort((j,L)=>L.priority-j.priority)){const j=f.title.slice(0,16);if(!I.has(j)&&(I.add(j),z.push(f),z.length===3))break}const W=[{title:"भावनात्मक निर्णयों में संयम एवं धैर्य",line1:"किसी भी बड़े आर्थिक या पारिवारिक निर्णय को तात्कालिक आवेश के बजाय शांत मन और तथ्यों के आधार पर लें।",line2:"सावधानी: महत्वपूर्ण समझौतों से पूर्व लिखित स्पष्टता रखें और परिवार के वरिष्ठों का मार्गदर्शन लें।",priority:50},{title:"स्वास्थ्य व दिनचर्या में नियमितता",line1:"कार्य की व्यस्तता के बीच नियमित योग, प्राणायाम और संतुलित सात्विक भोजन आपकी ऊर्जा को दीर्घकाल तक बनाए रखेगा।",line2:"सावधानी: रात्रि जागरण और तनाव से बचें; प्रातःकाल का सूर्य प्रकाश आपके लग्न बल को स्वतः बढ़ाता है।",priority:45},{title:"दशा-गोचर के अनुरूप समय प्रबंधन",line1:"हर वर्ष एक जैसा नहीं होता — अनुकूल दशा में विस्तार करें और मध्यम समय में कौशल व बचत मजबूत करें।",line2:"सावधानी: इस पुस्तक के 5-वर्षीय रोडमैप को देखकर अपने प्रमुख लक्ष्यों की समय-सारणी तय करें।",priority:40}];for(const f of W){if(z.length>=3)break;z.push(f)}const E=it[h]||e.panchang.lagnaLord.split(" ")[0],U=it[m]||"पंचमेश",X=it[g]||"नवमेश",q=`आपका व्यक्तित्व (${e.panchang.lagnaName} लग्न, लग्नेश ${E} — भाव ${c?.houseInLagna||1}), आपकी सृजनशील बुद्धि (पंचमेश ${U} — भाव ${x?.houseInLagna||5}) और आपका भाग्योदय (नवमेश ${X} — भाव ${D?.houseInLagna||9}) एक स्पष्ट सूत्र देते हैं: "${e.panchang.tatva} तत्व की अपनी स्वाभाविक शक्ति को अनुशासन और सत्यनिष्ठा से जोड़ें, ${e.lucky.ishtaDevta} के स्मरण से प्रत्येक शुभ कार्य प्रारंभ करें, और दूसरों की नकल के बजाय अपने मौलिक विवेक पर चलें — यही आपके जीवन की स्थायी समृद्धि और सम्मान का मूल मंत्र है।"`;return{sectionCode:"EX",sectionTag:"1-मिनट सार (Executive Summary)",html:`
    ${s("डिजिटल ज्योतिषाचार्य सार : कुंडली का 1-मिनट सार (Executive Summary)",d,o)}
    ${p("EX","कुंडली का 1-मिनट सार (Executive Summary) — एक दृष्टि में संपूर्ण जीवन-दिशा",`${e.panchang.lagnaName} लग्न • ${e.panchang.moonRashiName} राशि`)}

    <div class="book-card" style="background: ${t.emeraldSoft}; border: 1.5px solid #10B981; border-radius: 10px; padding: 10px 13px; margin-bottom: 10px; page-break-inside: avoid;">
      <div style="font-size: 10.2px; font-weight: 900; color: #065F46; margin-bottom: 6px; border-bottom: 1px dashed #34D399; padding-bottom: 4px;">
        ✦ आपकी कुंडली के शीर्ष 3 सबसे प्रबल योग एवं शुभ शक्तियाँ (Top 3 Strengths)
      </div>
      ${H.map((f,j)=>`
          <div style="background: #FFFFFF; border: 1px solid #A7F3D0; border-left: 4px solid #059669; border-radius: 7px; padding: 7px 10px; margin-top: ${j===0?0:7}px; page-break-inside: avoid;">
            <div style="font-size: 9.2px; font-weight: 900; color: ${t.cosmicNavy};">${j+1}. ${i(f.title)}</div>
            <div style="font-size: 8.3px; color: ${t.inkPrimary}; line-height: 1.48; margin-top: 2px;">${i(f.line1)}</div>
            <div style="font-size: 8.1px; color: #065F46; font-weight: 700; line-height: 1.45; margin-top: 2px;">${i(f.line2)}</div>
          </div>`).join("")}
    </div>

    <div class="book-card" style="background: ${t.saffronSoft}; border: 1.5px solid ${t.templeGold}; border-radius: 10px; padding: 10px 13px; margin-bottom: 10px; page-break-inside: avoid;">
      <div style="font-size: 10.2px; font-weight: 900; color: ${t.saffronDeep}; margin-bottom: 6px; border-bottom: 1px dashed ${t.templeGold}; padding-bottom: 4px;">
        ✦ शीर्ष 3 ध्यान देने योग्य विषय एवं व्यावहारिक सावधानियाँ (Top 3 Precautions)
      </div>
      ${z.map((f,j)=>`
          <div style="background: #FFFFFF; border: 1px solid ${t.borderMuted}; border-left: 4px solid ${t.saffron}; border-radius: 7px; padding: 7px 10px; margin-top: ${j===0?0:7}px; page-break-inside: avoid;">
            <div style="font-size: 9.2px; font-weight: 900; color: ${t.cosmicNavy};">${j+1}. ${i(f.title)}</div>
            <div style="font-size: 8.3px; color: ${t.inkPrimary}; line-height: 1.48; margin-top: 2px;">${i(f.line1)}</div>
            <div style="font-size: 8.1px; color: ${t.saffronDeep}; font-weight: 700; line-height: 1.45; margin-top: 2px;">${i(f.line2)}</div>
          </div>`).join("")}
    </div>

    <div class="book-card" style="background: linear-gradient(135deg, ${t.cosmicNavy} 0%, #1E293B 100%); border: 2px solid ${t.templeGold}; border-radius: 10px; padding: 11px 14px; color: ${t.warmIvory}; page-break-inside: avoid;">
      <div style="font-size: 10px; font-weight: 900; color: #FDE68A; margin-bottom: 5px;">
        ★ आपका व्यक्तिगत जीवन सफलता मंत्र (लग्नेश ${i(E)} + पंचमेश ${i(U)} + नवमेश ${i(X)} समन्वय)
      </div>
      <div style="font-size: 8.5px; color: #F8FAFC; line-height: 1.62;">
        ${i(q)}
      </div>
      <div style="margin-top: 6px; padding-top: 5px; border-top: 1px dashed rgba(212, 175, 55, 0.5); font-size: 7.8px; color: #FCD34D; font-weight: 700; text-align: right;">
        — ${i(bt.founderHi)} (पण्डित जी ऑनलाइन)
      </div>
    </div>
  `}}function Se(e,l){const{esc:i,buildBookPageHeader:s,buildSectionTitleBar:p,personHeader:d,appLogo:o}=l,r=e.panchang.lagnaNumber||1,h=e.phase2Jyotish,m=h?.vimshottari,g=h?.liveGochar,c=m?.activeMahadasha,x=m?.activeAntardasha,D=c?.lordId||"jupiter",w=x?.lordId||"mercury",M=K(e,D),H=K(e,w),S=Dt(r,D),b=Dt(r,w),N=g?.grahaRows.find(E=>E.id==="saturn"),k=g?.grahaRows.find(E=>E.id==="jupiter"),$=S==="yogakaraka"||S==="lagna"||S==="trikona",C=b==="yogakaraka"||b==="lagna"||b==="trikona",z=!!k?.isFavorableFromMoon,I=!!N?.isFavorableFromMoon,W=[{title:"1. करियर एवं व्यापार (Career & Business)",icon:"◆",tone:$||z?"प्रगति एवं विस्तार का काल":"स्थिर कर्म व कौशल निर्माण काल",color:$||z?t.emerald:t.saffronDeep,outlook:`वर्तमान में ${c?.lordHindi||"मुख्य"} महादशा (भाव ${M?.houseInLagna||1}) और ${x?.lordHindi||"सक्रिय"} अंतर्दशा (भाव ${H?.houseInLagna||10}) के साथ गोचर गुरु आपकी चंद्र राशि से ${k?.houseFromNatalMoon||5}वें (लग्न से ${k?.houseFromNatalLagna||5}वें) और शनि चंद्र से ${N?.houseFromNatalMoon||10}वें (लग्न से ${N?.houseFromNatalLagna||10}वें) भाव में हैं। अगले 6–12 महीनों में ${$||C?"नई जिम्मेदारियां, पदोन्नति या व्यवसाय विस्तार के स्पष्ट अवसर बनेंगे; आपकी कार्यक्षमता की सराहना होगी।":"निरंतर परिश्रम और धैर्य से नींव मजबूत होगी; जल्दबाजी में नौकरी या बड़ा साझेदारी परिवर्तन टालना समझदारी होगी।"}`,action:z?"सलाह: नए प्रोजेक्ट या कौशल उन्नयन की शुरुआत करने के लिए यह 6–12 माह अत्यंत अनुकूल हैं।":"सलाह: वर्तमान कार्यस्थल पर गुणवत्ता व अनुशासन बढ़ाएं; कागजी अनुबंध ध्यानपूर्वक पढ़ें।"},{title:"2. धन-संपत्ति एवं निवेश (Finance & Wealth)",icon:"◆",tone:z&&I?"सुदृढ़ धनागमन एवं बचत योग":z||$?"संतुलित आय व क्रमिक वृद्धि":"बजट अनुशासन व सुरक्षित निवेश काल",color:z?t.emerald:t.saffronDeep,outlook:`आपकी कुंडली के धन भाव (SAV ${vt(e,2)} बिंदु) व लाभ भाव (SAV ${vt(e,11)} बिंदु) पर सक्रिय ${x?.lordHindi||""} अंतर्दशा व गुरु गोचर (${k?.currentRashiNameHi||""}) का सीधा प्रभाव है। ${z?"अटके हुए धन की प्राप्ति, आय के नए स्रोत और परिवार में शुभ निवेश के सुंदर संकेत बन रहे हैं।":"आय नियमित रहेगी, परंतु आकस्मिक घरेलू या व्यावसायिक व्यय बढ़ सकते हैं; सट्टेबाजी या उच्च जोखिम वाले निवेश से दूरी रखें।"}`,action:"सलाह: मासिक आय का कम से कम 20% सुरक्षित बचत में रखें और किसी को बिना लिखित सुरक्षा बड़ा कर्ज न दें।"},{title:"3. स्वास्थ्य एवं मानसिक ऊर्जा (Health & Vitality)",icon:"◆",tone:g?.sadeSatiPhase&&g.sadeSatiPhase!=="NONE"?"दिनचर्या व विश्राम पर विशेष ध्यान":"संतुलित ऊर्जा एवं उत्साह",color:g?.sadeSatiPhase&&g.sadeSatiPhase!=="NONE"?t.crimson:t.emerald,outlook:`शनि गोचर (${N?.currentRashiNameHi||""}, चंद्र से ${N?.houseFromNatalMoon||1}वां भाव — ${g?.sadeSatiLabelHi||"सामान्य"}) तथा जन्म नाड़ी (${e.panchang.nadi}) के अनुसार अगले 6–12 महीनों में ${I&&!M?.isDebilitated?"आपका मनोबल और शारीरिक स्फूर्ति अच्छी बनी रहेगी; पुरानी थकान से राहत मिलेगी।":"कार्यभार के कारण तनाव, नींद की कमी या पाचन/जोड़ों की थकान महसूस हो सकती है, जिसे नियमित व्यायाम से आसानी से नियंत्रित किया जा सकता है।"}`,action:"सलाह: प्रतिदिन 20 मिनट प्राणायाम/टहलना, पर्याप्त जल सेवन और समय पर रात्रि भोजन को अनिवार्य नियम बनाएं।"},{title:"4. परिवार एवं दांपत्य सुख (Family & Relationships)",icon:"◆",tone:z||w==="venus"||w==="jupiter"?"मधुर सामंजस्य व मांगलिक योग":"संवाद व धैर्य से मधुरता",color:z||w==="venus"||w==="jupiter"?t.emerald:t.saffronDeep,outlook:`देवगुरु बृहस्पति का ${k?.houseFromNatalLagna||5}वें लग्न भाव में गोचर तथा ${c?.lordHindi||""}–${x?.lordHindi||""} दशा अवधि परिवार में ${z||w==="venus"||w==="jupiter"?"आपसी स्नेह, शुभ उत्सव, तीर्थयात्रा और जीवनसाथी के साथ बेहतर तालमेल के योग बना रही है।":"व्यस्तता के कारण संवाद की कमी ला सकती है; छोटी बातों को तूल न दें और परिवार के साथ गुणवत्तापूर्ण समय बिताएं।"}`,action:"सलाह: सप्ताह में एक दिन परिवार के साथ शांत संवाद व सात्विक पूजन करें — इससे घर का वातावरण सकारात्मक रहेगा।"}];return{sectionCode:"DJ1",sectionTag:"वर्तमान समय विश्लेषण (दशा + गोचर)",html:`
    ${s("डिजिटल ज्योतिषाचार्य : वर्तमान समय का सटीक विश्लेषण",d,o)}
    ${p("DJ1","वर्तमान समय का सटीक विश्लेषण — सक्रिय दशा + लाइव गुरु/शनि गोचर समन्वय",`आकलन तिथि: ${g?.computedAtDateHi||"आज"}`)}

    <div class="book-card" style="background: ${t.cosmicNavy}; color: ${t.warmIvory}; border: 1.8px solid ${t.templeGold}; border-radius: 10px; padding: 9px 13px; margin-bottom: 10px; page-break-inside: avoid;">
      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; font-size: 8px; text-align: center;">
        <div style="background: rgba(255,255,255,0.08); border: 1px solid rgba(212,175,55,0.45); border-radius: 7px; padding: 6px;">
          <div style="color:#FCD34D; font-weight:700;">सक्रिय महादशा</div>
          <div style="font-size: 10px; font-weight: 900; margin-top: 2px;">${i(c?.lordHindi||"—")}</div>
          <div style="color:#CBD5E1; font-size:7.2px; white-space:nowrap;">${i(c?.endDateHi||"")} तक</div>
        </div>
        <div style="background: rgba(255,255,255,0.08); border: 1px solid rgba(212,175,55,0.45); border-radius: 7px; padding: 6px;">
          <div style="color:#FCD34D; font-weight:700;">सक्रिय अंतर्दशा</div>
          <div style="font-size: 10px; font-weight: 900; margin-top: 2px;">${i(x?.lordHindi||"—")}</div>
          <div style="color:#CBD5E1; font-size:7.2px; white-space:nowrap;">${i(x?.endDateHi||"")} तक</div>
        </div>
        <div style="background: rgba(255,255,255,0.08); border: 1px solid rgba(212,175,55,0.45); border-radius: 7px; padding: 6px;">
          <div style="color:#FCD34D; font-weight:700;">लाइव गुरु गोचर</div>
          <div style="font-size: 9.5px; font-weight: 900; margin-top: 2px;">${i(k?.currentRashiNameHi||"—")}</div>
          <div style="color:#6EE7B7; font-size:7.2px;">चंद्र ${k?.houseFromNatalMoon||"-"}वां • लग्न ${k?.houseFromNatalLagna||"-"}वां</div>
        </div>
        <div style="background: rgba(255,255,255,0.08); border: 1px solid rgba(212,175,55,0.45); border-radius: 7px; padding: 6px;">
          <div style="color:#FCD34D; font-weight:700;">लाइव शनि गोचर</div>
          <div style="font-size: 9.5px; font-weight: 900; margin-top: 2px;">${i(N?.currentRashiNameHi||"—")}</div>
          <div style="color:#FDE68A; font-size:7.2px;">चंद्र ${N?.houseFromNatalMoon||"-"}वां • लग्न ${N?.houseFromNatalLagna||"-"}वां</div>
        </div>
      </div>
      <div style="margin-top: 7px; font-size: 8.1px; color: #E2E8F0; line-height: 1.48; text-align: center;">
        <b>द्वि-गोचर सक्रियता:</b> ${i(g?.doubleTransitSummaryHi||"गुरु एवं शनि का संयुक्त गोचर जीवन के प्रमुख लक्ष्यों को दिशा दे रहा है।")}
      </div>
    </div>

    <div style="display: flex; flex-direction: column; gap: 9px;">
      ${W.map(E=>`
          <div class="book-card" style="background: ${t.pureIvory}; border: 1.4px solid ${t.templeGold}; border-left: 4.5px solid ${E.color}; border-radius: 9px; padding: 9px 12px; page-break-inside: avoid;">
            <div style="display: table; width: 100%; margin-bottom: 4px;">
              <div style="display: table-cell; font-size: 9.8px; font-weight: 900; color: ${t.cosmicNavy};">${E.icon} ${i(E.title)}</div>
              <div style="display: table-cell; text-align: right; font-size: 8px; font-weight: 800; color: ${E.color}; white-space: nowrap;">${i(E.tone)}</div>
            </div>
            <div style="font-size: 8.4px; color: ${t.inkPrimary}; line-height: 1.54;">${i(E.outlook)}</div>
            <div style="margin-top: 5px; padding: 4px 8px; background: ${t.warmIvory}; border-radius: 5px; font-size: 8px; font-weight: 800; color: ${t.saffronDeep}; line-height: 1.45;">
              ${i(E.action)}
            </div>
          </div>`).join("")}
    </div>
  `}}function ze(e,l){const{esc:i,buildBookPageHeader:s,buildSectionTitleBar:p,personHeader:d,appLogo:o}=l,r=e.panchang.lagnaNumber||1,h=et(r,10),m=et(r,7),g=et(r,6),c=et(r,2),x=et(r,11),D=et(r,4),w=et(r,5),M=et(r,9),H=et(r,12),S=et(r,8),b=et(r,1),N=K(e,h),k=K(e,m),$=K(e,g),C=K(e,c),z=K(e,x),I=K(e,D),W=K(e,w),E=K(e,M),U=K(e,H),X=K(e,S),q=K(e,b),f=K(e,"mercury"),j=K(e,"saturn"),L=K(e,"venus"),B=K(e,"jupiter"),Y=K(e,"mars"),Z=K(e,"rahu"),O=K(e,"moon"),st=(Rt(e,"mercury")>=1?2:0)+([1,2,7,10,11].includes(k?.houseInLagna||0)?2:0)+(vt(e,7)>=28?1:0)+(f&&[1,2,7,10,11].includes(f.houseInLagna)?2:0),$t=(Rt(e,"saturn")>=1?2:0)+([1,6,10,11].includes($?.houseInLagna||0)?2:0)+(vt(e,6)>=28?1:0)+(j&&[1,6,10,11].includes(j.houseInLagna)?2:0),dt=st>$t+1?"स्वतंत्र व्यापार, परामर्श या उद्यमिता में विशेष सफलता":$t>st+1?"उच्च सेवा, कॉर्पोरेट/प्रशासनिक नौकरी व विशेषज्ञ पद अधिक अनुकूल":"नौकरी के साथ अनुभव लेकर आगे स्वतंत्र कार्य/व्यवसाय — दोनों में श्रेष्ठ संतुलन",J=vt(e,2),V=vt(e,11),at=J>=28&&V>=28?"अत्यंत सुदृढ़ धन संचय एवं बहु-स्रोत आय योग":V>=28?"नियमित अच्छी आमदनी — व्यवस्थित बचत से स्थायी समृद्धि":"अनुशासित वित्तीय योजना व दीर्घकालिक निवेश से स्थिर संपत्ति निर्माण",tt=vt(e,4),ut=e.phase1Astronomy?.shodashavarga.find(nt=>nt.spec.id==="D4")?.ascendantRashiNameHi||Jt[oe(r,4)-1],ot=tt>=28||I&&[1,4,5,9,10,11].includes(I.houseInLagna),Ft=e.deepAnalysis?.navamshaAndCareerDepth.d9Lagna||e.navamsaChart[0]?.rashiName||"",Nt=e.doshaAnalysis.manglik.isManglik?"कुंडली में मंगल प्रभाव होने से विवाह पूर्व अष्टकूट व मंगल मिलान अवश्य कराएं।":"कुंडली मांगलिक बाधा से मुक्त/परिहार युक्त है, जो वैवाहिक सामंजस्य के लिए शुभ संकेत है।",Ht=e.phase1Astronomy?.shodashavarga.find(nt=>nt.spec.id==="D7"),xt=e.phase1Astronomy?.shodashavarga.find(nt=>nt.spec.id==="D24"),n=vt(e,5),u=[E&&[9,12].includes(E.houseInLagna),U&&[1,9,10,12].includes(U.houseInLagna),Z&&[1,4,7,9,10,12].includes(Z.houseInLagna),O&&[7,9,12].includes(O.houseInLagna)].filter(Boolean).length,P=u>=2?"विदेश यात्रा, विदेशी कंपनी/आय या जन्मस्थान से दूर बड़ी सफलता के प्रबल योग":u===1?"कार्य या तीर्थ हेतु विदेश/दूरस्थ यात्राओं के अच्छे अवसर":"स्वदेश अथवा अपने गृह-क्षेत्र में ही अधिक स्थिर और सम्मानजनक उन्नति के योग",v=e.panchang.nadi.includes("आदि")?"वात प्रकृति (आदि नाड़ी) — जोड़ों, गैस, अनिद्रा व त्वचा की नमी का ध्यान रखें":e.panchang.nadi.includes("मध्य")?"पित्त प्रकृति (मध्य नाड़ी) — एसिडिटी, अधिक गर्मी, रक्तचाप व नेत्र विश्राम का ध्यान रखें":"कफ प्रकृति (अन्त्य नाड़ी) — सर्दी-जुकाम, साइनस, श्वसन व वजन संतुलन का ध्यान रखें",y=Date.now(),F=e.phase1Astronomy?.spaceTime.utcEpochMs||y-(e.input.ageYears||25)*365.2425*864e5,T=e.phase2Jyotish?.vimshottari;let G="आगामी शुभ त्रिकोण/योगकारक दशा काल",_="आपकी कुंडली के शुभ ग्रहों की आगामी दशा में करियर, धन और प्रतिष्ठा का उत्कर्ष होगा।";if(T){let nt=-999,yt=null;const zt=gt=>{const pt=Dt(r,gt),rt=K(e,gt),It=Rt(e,gt);let ft=pt==="yogakaraka"?40:pt==="lagna"?32:pt==="trikona"?30:pt==="kendra"?20:pt==="dusthana"?-15:8;return rt?.isExalted?ft+=20:rt?.dignity.includes("स्वगृही")?ft+=15:rt?.isDebilitated&&(ft-=15),rt&&[1,4,5,9,10,11].includes(rt.houseInLagna)&&(ft+=10),ft+=Math.round((It-1)*15),ft};for(const gt of T.mahadashas){if(gt.endUtcMs<y)continue;const pt=zt(gt.lordId);for(const rt of gt.antardashas){if(rt.endUtcMs<y||(rt.startUtcMs-F)/(365.2425*864e5)>82)continue;const It=pt*.6+zt(rt.lordId)*.4;if(It>nt){nt=It;const ft=Math.max(0,Number(((rt.startUtcMs-F)/(365.2425*864e5)).toFixed(1))),he=Math.max(ft,Number(((rt.endUtcMs-F)/(365.2425*864e5)).toFixed(1)));yt={title:`${gt.lordHindi} महादशा – ${rt.lordHindi} अंतर्दशा`,startHi:rt.startDateHi,endHi:rt.endDateHi,ageStart:ft,ageEnd:he,reason:`इस काल में महादशा स्वामी ${gt.lordHindi} एवं अंतर्दशा स्वामी ${rt.lordHindi} आपकी कुंडली के शुभ भावों को संयुक्त रूप से सक्रिय करेंगे`}}}}yt&&(G=`${yt.title} (${yt.startHi} → ${yt.endHi} • आयु ${yt.ageStart}–${yt.ageEnd} वर्ष)`,_=`${yt.reason}। यह अवधि आपके जीवन में बड़ा पद, स्थायी संपत्ति, वित्तीय उछाल और सामाजिक सम्मान दिलाने वाला प्रमुख स्वर्णिम चरण सिद्ध होगी।`)}const ct=g===b?`लग्नेश ${it[b]} (भाव ${q?.houseInLagna||1})`:`षष्ठेश ${it[g]} (भाव ${$?.houseInLagna||6})`,ht=(()=>{const nt=[`लग्नेश ${it[b]} (${q?.dignity||"संतुलित"}, भाव ${q?.houseInLagna||1})`];return g!==b&&nt.push(`षष्ठेश ${it[g]} (भाव ${$?.houseInLagna||6})`),S!==b&&S!==g&&nt.push(`अष्टमेश ${it[S]} (भाव ${X?.houseInLagna||8})`),nt.join(", ")})(),Lt=[{qNo:1,question:"नौकरी बेहतर है या स्वयं का व्यापार (Job vs Business)?",badge:dt,answer:`दशमेश ${it[h]} (भाव ${N?.houseInLagna||10}, ${N?.dignity||"संतुलित"}), सप्तमेश ${it[m]} (भाव ${k?.houseInLagna||7}), ${ct} तथा बुध/शनि के षड्बल तुलना से स्पष्ट है कि आपके लिए "${dt}" सर्वाधिक लाभकारी रहेगा। दशमांश (D-10 लग्न: ${e.deepAnalysis?.navamshaAndCareerDepth.d10Lagna||e.panchang.lagnaName}) भी कर्म-क्षेत्र में निरंतर प्रतिष्ठा व नेतृत्व की पुष्टि करता है।`},{qNo:2,question:"धन संचय, आय और आर्थिक स्थिरता कैसी रहेगी?",badge:`धन भाव SAV: ${J} • लाभ भाव SAV: ${V}`,answer:`आपकी कुंडली में द्वितीय (धन) भाव में ${J} अष्टकवर्ग बिंदु व धनेश ${it[c]} (भाव ${C?.houseInLagna||2}) तथा एकादश (लाभ) भाव में ${V} बिंदु व लाभेश ${it[x]} (भाव ${z?.houseInLagna||11}) स्थित हैं। निष्कर्ष: ${at}। आय बढ़ने के साथ व्यवस्थित बचत व स्थायी संपत्ति में निवेश आपको आर्थिक रूप से पूर्ण सुरक्षित बनाएगा।`},{qNo:3,question:"अपना घर (अचल संपत्ति) और वाहन सुख कैसा मिलेगा?",badge:`चतुर्थ भाव SAV: ${tt} • D-4 लग्न: ${ut}`,answer:`चतुर्थ (सुख-भवन) भाव में ${tt} बिंदु, चतुर्थेश ${it[D]} (भाव ${I?.houseInLagna||4}), भूमि कारक मंगल (भाव ${Y?.houseInLagna||1}) व वाहन कारक शुक्र (भाव ${L?.houseInLagna||1}) तथा चतुर्थांश (D-4 लग्न: ${ut}) के अनुसार ${ot?"स्वयं के सुंदर आवास, भूखंड और उत्तम वाहन सुख के प्रबल योग हैं। चतुर्थेश/शुक्र की दशा में संपत्ति निर्माण विशेष रूप से सफल होगा।":"परिश्रम और सुव्यवस्थित बचत के बल पर जीवन के मध्य चरण में स्थायी मकान व वाहन सुख अवश्य प्राप्त होगा; संपत्ति क्रय में कागजी जांच पूर्ण रखें।"}`},{qNo:4,question:"विवाह, जीवनसाथी का स्वभाव और दांपत्य सुख कैसा रहेगा?",badge:`सप्तमेश: ${it[m]} • D-9 लग्न: ${Ft.split(" ")[0]||""}`,answer:`सप्तम भाव के स्वामी ${it[m]} (भाव ${k?.houseInLagna||7}, ${k?.dignity||""}), विवाह कारक शुक्र (भाव ${L?.houseInLagna||7}) व गुरु (भाव ${B?.houseInLagna||5}) और नवांश कुंडली (D-9 लग्न: ${Ft}) से संकेत मिलता है कि जीवनसाथी समझदार, सहयोगी एवं परिवार-प्रेमी होंगे। ${Nt}`},{qNo:5,question:"संतान सुख और उच्च शिक्षा की स्थिति कैसी रहेगी?",badge:`पंचम भाव SAV: ${n} • D-7: ${Ht?.ascendantRashiNameHi||"शुभ"} • D-24: ${xt?.ascendantRashiNameHi||"शुभ"}`,answer:`पंचम भाव के स्वामी ${it[w]} (भाव ${W?.houseInLagna||5}, SAV ${n} बिंदु), संतान-ज्ञान कारक देवगुरु बृहस्पति (भाव ${B?.houseInLagna||5}), सप्तांश (D-7 लग्न: ${Ht?.ascendantRashiNameHi||"शुभ"}) व चतुर्विंशांश (D-24 लग्न: ${xt?.ascendantRashiNameHi||"शुभ"}) के समन्वय से आपकी ग्रहणशीलता, व्यावहारिक विद्या और संतान-संस्कार अत्यंत सकारात्मक रहेंगे।`},{qNo:6,question:"क्या विदेश यात्रा, विदेशी आय या दूर स्थान में बसने का योग है?",badge:u>=2?"प्रबल विदेश / दूरस्थ योग":u===1?"आंशिक यात्रा योग":"स्वदेश प्रधान उन्नति",answer:`नवमेश ${it[M]} (भाव ${E?.houseInLagna||9}), द्वादशेश ${it[H]} (भाव ${U?.houseInLagna||12}), राहु (भाव ${Z?.houseInLagna||1}) तथा चंद्रमा (भाव ${O?.houseInLagna||1}) की स्थिति स्पष्ट करती है: "${P}"। राहु या द्वादशेश/नवमेश की अंतर्दशा में दूरस्थ संपर्क व ऑनलाइन/वैश्विक मंच से विशेष लाभ मिलेगा।`},{qNo:7,question:"स्वास्थ्य की दृष्टि से किन बातों का विशेष ध्यान रखें?",badge:`${e.panchang.nadi} • लग्नेश भाव ${q?.houseInLagna||1}`,answer:`आपकी जन्म नाड़ी (${e.panchang.nadi}) के अनुसार: ${v}। ${ht} बताते हैं कि नियमित योग, तनाव-नियंत्रण और मौसमी खानपान अनुशासन से आप दीर्घायु व स्वस्थ रहेंगे।`},{qNo:8,question:'मेरे जीवन का "स्वर्णिम काल (Golden Period)" कब आएगा?',badge:"दशा-बल आधारित सर्वोत्तम चरण",answer:`आपकी विंशोत्तरी दशा, ग्रहों के षड्बल और योगकारक/त्रिकोण स्वामित्व के समग्र विश्लेषण के अनुसार आपका प्रमुख स्वर्णिम काल है: ${G}। ${_}`}],Et=(nt,yt,zt,gt)=>({sectionCode:nt,sectionTag:yt,html:`
      ${s(`डिजिटल ज्योतिषाचार्य : 8 बड़े सवालों के सीधे जवाब (${zt})`,d,o)}
      ${p(nt,`आपके जीवन के 8 बड़े सवालों के सीधे, सरल जवाब (${zt})`,"जटिल शब्दावली से मुक्त स्पष्ट मार्गदर्शन")}
      <div style="display: flex; flex-direction: column; gap: 11px; margin-top: 4px;">
        ${gt.map(pt=>`
            <div class="book-card" style="background: ${t.pureIvory}; border: 1.5px solid ${t.templeGold}; border-left: 4.5px solid ${t.saffron}; border-radius: 10px; padding: 10px 13px; page-break-inside: avoid;">
              <div style="display: table; width: 100%; border-bottom: 1px dashed ${t.borderMuted}; padding-bottom: 5px; margin-bottom: 6px;">
                <div style="display: table-cell; vertical-align: middle; font-size: 10px; font-weight: 900; color: ${t.cosmicNavy}; padding-right: 8px;">
                  प्रश्न ${pt.qNo}. ${i(pt.question)}
                </div>
                <div style="display: table-cell; vertical-align: middle; text-align: right; white-space: nowrap; width: 1%;">
                  <span style="display: inline-block; background: ${t.emeraldSoft}; color: #065F46; border: 1px solid #34D399; border-radius: 999px; padding: 2.5px 9px; font-size: 7.4px; font-weight: 800; line-height: 1.25;">${i(pt.badge)}</span>
                </div>
              </div>
              <div style="font-size: 8.6px; color: ${t.inkPrimary}; line-height: 1.58;">
                <b style="color:${t.saffronDeep};">सीधा उत्तर:</b> ${i(pt.answer)}
              </div>
            </div>`).join("")}
      </div>
    `});return[Et("DJ2","8 बड़े सवाल (प्रश्न 1–4)","भाग 1/2 : प्रश्न 1 से 4",Lt.slice(0,4)),Et("DJ3","8 बड़े सवाल (प्रश्न 5–8)","भाग 2/2 : प्रश्न 5 से 8",Lt.slice(4,8))]}function je(e,l){const{esc:i,buildBookPageHeader:s,buildSectionTitleBar:p,personHeader:d,appLogo:o}=l,r=Date.now(),h=new Date(r).getFullYear(),m=e.panchang.lagnaNumber||1,g=e.panchang.moonRashiNumber||1,c=e.phase2Jyotish?.vimshottari,x=e.phase2Jyotish?.liveGochar,D={1:"आत्मचिंतन, स्वास्थ्य नियम और दीर्घकालिक दिशा तय करने का समय बनता है",2:"धन-संचय, वाणी प्रभाव और परिवार में मांगलिक कार्यों के सुंदर योग बनते हैं",3:"नए संपर्क, छोटी यात्राओं और स्वप्रयास से कार्य विस्तार का योग बनता है",4:"गृह-सुख, वाहन/संपत्ति योजना और पारिवारिक स्थिरता पर ध्यान केंद्रित रहता है",5:"विद्या, संतान सुख, सृजनशील सफलता और विवेकपूर्ण निवेश में विशेष लाभ मिलता है",6:"प्रतिस्पर्धा में विजय, सेवा-अनुशासन और ऋण/विवाद समाधान के अवसर बनते हैं",7:"दांपत्य सौहार्द, व्यापारिक साझेदारी और सामाजिक प्रतिष्ठा में स्पष्ट वृद्धि होती है",8:"गहन शोध, आध्यात्मिक परिपक्वता और आर्थिक निर्णयों में सतर्कता की अपेक्षा रहती है",9:"भाग्योदय, वरिष्ठों का आशीर्वाद, तीर्थयात्रा और बड़े अवसरों की प्राप्ति होती है",10:"कर्म-क्षेत्र में पदोन्नति, नई जिम्मेदारी और व्यावसायिक पहचान सुदृढ़ होती है",11:"बहु-स्रोत आय, रुके धन की प्राप्ति और महत्वाकांक्षाओं की पूर्ति का प्रबल योग बनता है",12:"विदेश/बाहरी संपर्क, दान-पुण्य और व्यय के सुनियोजित प्रबंधन पर बल रहता है"},w={1:"जन्म-शनि (साढ़ेसाती मध्य) होने से स्वास्थ्य, धैर्य और समय-प्रबंधन को सर्वोच्च प्राथमिकता दें",2:"साढ़ेसाती उत्तरार्ध में वाणी-संयम, सुरक्षित बचत और पारिवारिक संवाद से स्थायी लाभ उठाएं",3:"तृतीय भाव के परम शुभ शनि गोचर का लाभ उठाकर साहसी विस्तार, नया प्रोजेक्ट व नेटवर्किंग आगे बढ़ाएं",4:"चतुर्थ ढैय्या में माता/गृह-संपत्ति व कार्यस्थल के कागजात की पूरी जांच के बाद ही बड़ा निर्णय लें",5:"पंचम शनि में सट्टेबाजी टालकर कौशल उन्नयन, शोध और संतान/शिक्षा योजना को सुव्यवस्थित करें",6:"षष्ठ भाव के अत्यंत शुभ शनि गोचर में करियर-लक्ष्य, प्रतिस्पर्धा व पुराने ऋण समाप्ति पर जोर दें",7:"सप्तम शनि में व्यापारिक साझेदारी व वैवाहिक संवाद में पारदर्शिता और लिखित स्पष्टता बनाए रखें",8:"अष्टम ढैय्या में जोखिम भरे निवेश व उधार से दूर रहें तथा नियमित योग-साधना को नियम बनाएं",9:"नवम शनि में दीर्घकालिक लक्ष्य, उच्च प्रशिक्षण व धर्मसम्मत कर्म से भाग्योदय की नींव मजबूत करें",10:"दशम शनि में कड़ी मेहनत, अनुशासन और प्रशासनिक कौशल से स्थायी पद-प्रतिष्ठा अर्जित करें",11:"एकादश भाव के श्रेष्ठ लाभकारी शनि गोचर में संपत्ति क्रय, आय विस्तार और बड़े निवेश साकार करें",12:"साढ़ेसाती प्रथम चरण में अनावश्यक व्यय पर नियंत्रण रखें और विदेश/ऑनलाइन अवसरों की योजना बनाएं"},M={sun:"नेतृत्व, राजकीय/प्रशासनिक कार्य व आत्मसम्मान",moon:"मानसिक शांति, जनसंपर्क, गृह-सुख व रचनात्मकता",mars:"पराक्रम, तकनीकी दक्षता, भूमि-संपत्ति व ऊर्जा",mercury:"व्यापार, संवाद, लेखन, वित्त व विश्लेषणात्मक कौशल",jupiter:"ज्ञान, धन-वृद्धि, संतान/शिक्षा व शुभ मांगलिक उन्नति",venus:"सुख-सुविधा, कला, वाहन-ऐश्वर्य व दांपत्य/साझेदारी सौहार्द",saturn:"दीर्घकालिक करियर निर्माण, अनुशासन, सेवा व स्थायी संपत्ति",rahu:"नवीन तकनीक, दूरस्थ/विदेशी संपर्क व तीव्र महत्वाकांक्षा",ketu:"गहन शोध, विशेषज्ञता, आध्यात्मिक एकाग्रता व सूक्ष्म विवेक"},H=(k,$)=>{const C=At(m,k),z=M[k]||"कर्म एवं व्यक्तिगत विकास";if(k==="rahu"||k==="ketu")return{houseClause:`${K(e,k)?.houseInLagna||1}वें भाव स्थित ${$} अंतर्दशा (${z})`,natureTone:k==="rahu"?"अप्रत्याशित अवसर, नवाचार और बाहरी नेटवर्क को सक्रिय करती है":"गहन एकाग्रता, शोध और अनावश्यक उलझनों से मुक्ति दिलाती है",actionFocus:k==="rahu"?"आधुनिक तकनीक व दूरस्थ संपर्क का लाभ लें, पर भ्रामक सौदों से बचें":"विशेषज्ञ कौशल निखारें और शांत विवेक से निर्णय लें"};const I=Dt(m,k),W=C.some(U=>U===2||U===7)&&!C.includes(1)&&!C.some(U=>U===5||U===9),E=C.length>0?`भाव ${C.join("/")}`:"प्रमुख भाव";return I==="yogakaraka"?{houseClause:`योगकारक ${$} अंतर्दशा (${E} स्वामी — ${z})`,natureTone:"राजयोगकारी उन्नति, पदोन्नति और स्थायी समृद्धि का मार्ग खोलती है",actionFocus:"इस उच्च फलदायी चरण में करियर विस्तार, संपत्ति या बड़े लक्ष्य प्राथमिकता से साधें"}:I==="lagna"?{houseClause:`लग्नेश ${$} अंतर्दशा (${E} स्वामी — ${z})`,natureTone:"व्यक्तिगत पहचान, आत्मविश्वास और स्वास्थ्य-स्फूर्ति को सीधे बल देती है",actionFocus:"स्वयं के नेतृत्व, ब्रांड/प्रतिष्ठा निर्माण और महत्वपूर्ण पहल को आगे बढ़ाएं"}:I==="trikona"?{houseClause:`त्रिकोणेश ${$} अंतर्दशा (${E} स्वामी — ${z})`,natureTone:"भाग्य-सहयोग, विद्या/संतान सुख और सृजनशील समृद्धि प्रदान करती है",actionFocus:"शिक्षा, सृजनशील निवेश और शुभ मांगलिक योजनाओं को गति दें"}:I==="dusthana"?{houseClause:`दुःस्थान स्वामी ${$} अंतर्दशा (${E} — ${z})`,natureTone:"सामान्य से अधिक परिश्रम, प्रतिस्पर्धा या बाहरी बदलाव के बाद परिपक्व लाभ देती है",actionFocus:"कर्ज/विवाद व आवेगी बदलाव से बचें; अनुशासित दिनचर्या और व्यय नियंत्रण रखें"}:W?{houseClause:`धन/साझेदारी (${E}) स्वामी ${$} अंतर्दशा (${z})`,natureTone:"आर्थिक लेन-देन व साझेदारी में सक्रियता के साथ स्वास्थ्य सजगता की मांग करती है",actionFocus:"वित्तीय अनुबंध स्पष्ट रखें, कुटुम्ब सौहार्द बढ़ाएं और नियमित स्वास्थ्य जांच कराएं"}:I==="kendra"?{houseClause:`केंद्रेश ${$} अंतर्दशा (${E} स्वामी — ${z})`,natureTone:"कार्यक्षेत्र, गृह-सुख और व्यावहारिक उत्तरदायित्वों को सुदृढ़ बनाती है",actionFocus:"व्यावसायिक ढांचे को मजबूत करें और निरंतर कर्म से स्थायी परिणाम पाएं"}:{houseClause:`उपचय/लाभ (${E}) स्वामी ${$} अंतर्दशा (${z})`,natureTone:"निरंतर प्रयास से आय, पराक्रम और व्यावहारिक नेटवर्क में क्रमिक वृद्धि करती है",actionFocus:"लगातार कौशल अभ्यास, नेटवर्किंग और अनुशासित बचत पर ध्यान केंद्रित करें"}},S=Array.from({length:5},(k,$)=>{const C=h+$,z=$===0,I=z?r:Date.UTC(C,5,15,6,30,0);let W="मुख्य",E="सक्रिय",U="jupiter",X="mercury";if(c)if(z)W=c.activeMahadasha.lordHindi,E=c.activeAntardasha.lordHindi,U=c.activeMahadasha.lordId,X=c.activeAntardasha.lordId;else{const F=c.mahadashas.find(G=>I>=G.startUtcMs&&I<G.endUtcMs)||c.activeMahadasha,T=F.antardashas.find(G=>I>=G.startUtcMs&&I<G.endUtcMs)||F.antardashas[0];W=F.lordHindi,E=T.lordHindi,U=F.lordId,X=T.lordId}const q=z?x?.grahaRows.find(F=>F.id==="jupiter"):void 0,f=z?x?.grahaRows.find(F=>F.id==="saturn"):void 0,j=q&&f?null:ge(I),L=q?q.currentRashiNumber:j.grahas.jupiter.signNumber,B=f?f.currentRashiNumber:j.grahas.saturn.signNumber,Y=q?q.houseFromNatalMoon:(L-g+12)%12+1,Z=f?f.houseFromNatalMoon:(B-g+12)%12+1,O=[2,5,7,9,11].includes(Y),st=[3,6,11].includes(Z),$t=[1,2,4,8,12].includes(Z),dt=Dt(m,U),J=Dt(m,X);let V=3;dt==="yogakaraka"||dt==="lagna"||dt==="trikona"?V+=.65:dt==="dusthana"&&(V-=.55),J==="yogakaraka"||J==="lagna"||J==="trikona"?V+=.55:J==="dusthana"&&(V-=.45),O&&(V+=.7),st&&(V+=.45),$t&&(V-=.45);const at=Math.min(5,Math.max(2,Math.round(V))),tt=at>=4?"#059669":at===3?"#D97706":"#C2410C",ut=`${"★".repeat(at)}${"☆".repeat(5-at)}`,ot=Array.from({length:5},(F,T)=>{const G=T<at,_=8+T*17,ct=[`${_},1.6`,`${(_+1.6).toFixed(1)},5.8`,`${(_+6.1).toFixed(1)},6.0`,`${(_+2.6).toFixed(1)},8.8`,`${(_+3.8).toFixed(1)},13.2`,`${_},10.7`,`${(_-3.8).toFixed(1)},13.2`,`${(_-2.6).toFixed(1)},8.8`,`${(_-6.1).toFixed(1)},6.0`,`${(_-1.6).toFixed(1)},5.8`].join(" ");return G?`<polygon points="${ct}" fill="${tt}" stroke="${tt}" stroke-width="0.6" stroke-linejoin="round" />`:`<polygon points="${ct}" fill="#FFFDF8" stroke="#64748B" stroke-width="1.35" stroke-linejoin="round" />`}).join(""),Ft=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 84 16" width="84" height="16" role="img" aria-label="${ut}" style="display:inline-block; vertical-align:middle; width:84px; height:16px;">${ot}</svg>`,Nt=Jt[L-1],Ht=Jt[B-1],xt=H(X,E),n=D[Y]||"संतुलित प्रगति व स्थिरता बनती है",u=w[Z]||"धैर्यपूर्वक कर्म व अनुशासन बनाए रखें",P=z?`वर्तमान सक्रिय ${W} महादशा में ${xt.houseClause} ${xt.natureTone}।`:`वर्ष ${C} में ${W} महादशा के अंतर्गत ${xt.houseClause} ${xt.natureTone}।`,v=`गोचर गुरु (${Nt}, चंद्र से ${Y}वां) के प्रभाव से ${n}।`,y=`कार्य-योजना: ${u}; साथ ही ${xt.actionFocus}।`;return{year:C,dashaLabel:`${W} – ${E}`,transitNote:`गुरु: ${Nt} (${Y}) • शनि: ${Ht} (${Z})`,stars:at,starHtml:Ft,summary:`${P} ${v} ${y}`}}),b='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="10" height="10" role="img" aria-label="★" style="display:inline-block; vertical-align:-1px; width:10px; height:10px; margin-left:1px;"><polygon points="8,1.4 9.7,5.7 14.3,5.9 10.7,8.8 11.9,13.4 8,10.8 4.1,13.4 5.3,8.8 1.7,5.9 6.3,5.7" fill="#D97706" stroke="#D97706" stroke-width="0.5" stroke-linejoin="round" /></svg>',N=`
    ${s(`डिजिटल ज्योतिषाचार्य : 5-वर्षीय वार्षिक रोडमैप (${h}–${h+4})`,d,o)}
    ${p("DJ4",`आने वाले 5 वर्षों का वार्षिक रोडमैप (${h} से ${h+4})`,"विंशोत्तरी अंतर्दशा + गुरु/शनि गोचर आधारित")}

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
        ${S.map((k,$)=>`
            <tr style="background:${$===0?t.emeraldSoft:$%2===0?"#FFFDF8":"#FEF6E4"}; page-break-inside: avoid;">
              <td style="text-align:center; font-weight:900; font-size: 9.8px; color:${t.cosmicNavy}; white-space: nowrap;">${k.year}${$===0?'<div style="font-size:6.8px; color:#059669;">वर्तमान</div>':""}</td>
              <td style="padding: 8px 7px;">
                <div style="font-weight:800; color:${t.saffronDeep};">${i(k.dashaLabel)}</div>
                <div style="font-size:7.3px; color:${t.inkMuted}; margin-top:2px;">${i(k.transitNote)}</div>
              </td>
              <td class="pj-h2c-no-lift" style="text-align:center; white-space: nowrap; padding: 7px 4px;">
                <div class="pj-h2c-no-lift" style="display:flex; align-items:center; justify-content:center; min-height:17px;">${k.starHtml}</div>
                <div style="font-size: 7.4px; font-weight: 800; color: ${t.cosmicNavy}; margin-top: 3px;">${k.stars} / 5 स्टार</div>
              </td>
              <td style="padding: 8px 8px; line-height: 1.52; color: ${t.inkPrimary};">${i(k.summary)}</td>
            </tr>`).join("")}
      </tbody>
    </table>

    <div class="book-card" style="margin-top: 10px; background: ${t.pureIvory}; border: 1.4px solid ${t.templeGold}; border-radius: 9px; padding: 10px 13px; font-size: 8.3px; line-height: 1.58; page-break-inside: avoid;">
      <div style="font-weight: 900; color: ${t.cosmicNavy}; font-size: 9.4px; margin-bottom: 4px;">
        <span class="pj-h2c-no-lift" style="font-family:'Noto Sans Symbols','Noto Sans Symbols 2','DejaVu Sans','Segoe UI Symbol','Arial Unicode MS',sans-serif; color:${t.saffronDeep};">✦</span> 5-वर्षीय रोडमैप का सही उपयोग कैसे करें?
      </div>
      <div>• <b>4${b} या 5${b} वाले वर्ष (विस्तार काल):</b> नया व्यवसाय, संपत्ति क्रय, विवाह, पदोन्नति या बड़ा निवेश इन वर्षों में प्राथमिकता से करें।</div>
      <div style="margin-top:3px;">• <b>3${b} वाले वर्ष (निर्माण काल):</b> शिक्षा, कौशल उन्नयन, टीम निर्माण और स्थिर बचत पर ध्यान केंद्रित करें।</div>
      <div style="margin-top:3px;">• <b>2${b} वाले वर्ष (संरक्षण काल):</b> किसी से विवाद या जोखिम भरे ऋण से दूर रहें, स्वास्थ्य व आध्यात्मिक साधना को मजबूत बनाएं।</div>
    </div>
  `;return{sectionCode:"DJ4",sectionTag:`5-वर्षीय रोडमैप (${h}–${h+4})`,html:N}}function Ce(e,l){const{esc:i,buildBookPageHeader:s,buildSectionTitleBar:p,personHeader:d,appLogo:o}=l,r=e.panchang.lagnaNumber||1,h=et(r,1),m=et(r,5),g=et(r,9),c=[],x=e.shadbalaBhava?.planets||[],D=new Set,w=[{id:h,role:"जीवन रत्न (लग्नेश — प्रथम भाव)",isLagna:!0},{id:m,role:"विद्या / बुद्धि रत्न (पंचमेश — पंचम भाव)",isLagna:!1},{id:g,role:"भाग्य रत्न (नवमेश — नवम भाव)",isLagna:!1}];for(const b of w){if(D.has(b.id))continue;const N=ae[b.id];if(!N)continue;const k=At(r,b.id),$=k.filter(Y=>[6,8,12].includes(Y));if(!b.isLagna&&k.every(Y=>[6,8,12].includes(Y)))continue;D.add(b.id);const C=K(e,b.id),z=x.find(Y=>Y.id===b.id),I=z?Math.round((z.strengthRatio||z.totalRupas/Math.max(1,z.requiredRupas))*100):null,W=!!C?.isCombust,E=!!C?.isDebilitated,U=I!==null&&I>105&&!W&&!E,X=W||E||I!==null&&I<=105,q=[];W&&q.push(`जन्म कुंडली में ${N.planetHi} सूर्य से अस्त हैं${I!==null?` (षड्बल: ${I}%)`:""} — बलवर्धन हेतु रत्न धारण एवं बीज मंत्र जप विशेष लाभप्रद है`),E&&q.push(`जन्म कुंडली में ${N.planetHi} नीचस्थ हैं — रत्न धारण से पूर्व 3 दिन परीक्षण करें अथवा बीज मंत्र जप व सात्विक दान से बल संवर्धन करें`),U?q.push(`षड्बल में पहले से पूर्णतः बली (${I}% — आवश्यक न्यूनतम से अधिक, अ-अस्त व अ-नीचस्थ) होने के कारण अनावश्यक रत्न धारण के स्थान पर ${N.planetHi} के मंत्र जप एवं सात्विक दान को प्राथमिकता देना शास्त्रसम्मत है`):!W&&!E&&I!==null&&q.push(`वर्तमान षड्बल ${I}% होने से शुभ फल वृद्धि हेतु विधिवत अभिमंत्रित ${N.gemHi} धारण करना सहायक रहेगा`),$.length>0&&!b.isLagna&&q.push(`भाव ${$.join("/")} का सह-स्वामित्व होने से पहले 3 दिन परीक्षण करें`);const f=W||E?`प्राथमिक रत्न / बलवर्धन (${W?"अस्त ग्रह":"नीचस्थ"}${I!==null?` • षड्बल ${I}%`:""})`:X?`अनुशंसित रत्न${I!==null?` • षड्बल ${I}%`:""}`:U?`षड्बल बली (${I}%) — मंत्र जप व दान श्रेष्ठ`:"शुभ त्रिकोण रत्न",j=U?"#9A3412":"#065F46",L=U?"#FFF7ED":"#ECFDF5",B=W?0:E?1:X?2:U?4:3;c.push({roleLabel:b.role,spec:N,shadbalaPct:I,needsStrengthening:X,priorityBadgeHi:f,priorityBadgeColor:j,priorityBadgeBg:L,cautionNote:q.length>0?q.join(" • "):void 0,sortRank:B})}c.sort((b,N)=>b.sortRank-N.sortRank);const M=[6,8,12],H=[],S=new Set;for(const b of M){const N=et(r,b);if(S.has(N)||N===h||D.has(N))continue;const k=ae[N];if(!k)continue;S.add(N);const $=At(r,N).filter(C=>[6,8,12].includes(C));H.push({planetHi:k.planetHi,dusthanaHousesLabel:$.map(C=>`${C}वां भाव`).join(" व "),gemHi:k.gemHi,warningHi:k.avoidWarnHi})}return{sectionCode:"DJ5",sectionTag:"रत्न व उपाय व्यावहारिक विधि",html:`
    ${s("डिजिटल ज्योतिषाचार्य : रत्न एवं उपाय — पूर्ण व्यावहारिक विधि",d,o)}
    ${p("DJ5a",`शुभ त्रिकोण रत्न एवं षड्बल आधारित चयन (${e.panchang.lagnaName} लग्न)`,"षड्बल, अस्त/नीच एवं त्रिकोण स्वामित्व पर आधारित")}

    <div style="display: flex; flex-direction: column; gap: 8px; margin-bottom: 10px;">
      ${c.map((b,N)=>`
          <div class="book-card" style="background: ${t.pureIvory}; border: 1.4px solid ${t.templeGold}; border-left: 4.5px solid ${b.needsStrengthening?"#059669":"#D97706"}; border-radius: 9px; padding: 7.5px 11px; page-break-inside: avoid;">
            <div style="display: table; width: 100%; border-bottom: 1px solid ${t.borderMuted}; padding-bottom: 4px; margin-bottom: 5px;">
              <div style="display: table-cell; font-size: 9.2px; font-weight: 900; color: ${t.cosmicNavy}; vertical-align: middle;">
                ${N+1}. ${i(b.spec.gemHi)} — <span style="color:${t.saffronDeep};">${i(b.roleLabel)}</span>
              </div>
              <div style="display: table-cell; text-align: right; vertical-align: middle; white-space: nowrap;">
                <span style="display: inline-block; background: ${b.priorityBadgeBg}; border: 1px solid ${b.priorityBadgeColor}; color: ${b.priorityBadgeColor}; border-radius: 4px; padding: 1.5px 6px; font-size: 7.1px; font-weight: 800;">${i(b.priorityBadgeHi)}</span>
              </div>
            </div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 3.5px 12px; font-size: 7.9px; line-height: 1.44; color: ${t.inkPrimary};">
              <div><b>• वजन (रत्ती) व उपरत्न:</b> ${i(b.spec.rattiHi)} • उपरत्न: ${i(b.spec.uparatnaHi)}</div>
              <div><b>• धातु एवं उंगली:</b> ${i(b.spec.metalHi)} में ${i(b.spec.fingerHi)}</div>
              <div><b>• शुभ वार व समय:</b> ${i(b.spec.dayHi)} • ${i(b.spec.timingHi)}</div>
              <div><b>• शुद्धिकरण विधि:</b> ${i(b.spec.purificationHi)}</div>
            </div>
            <div style="margin-top: 4.5px; padding: 4.5px 8px; background: ${t.emeraldSoft}; border: 1px solid #A7F3D0; border-radius: 6px; font-size: 8.1px; color: #065F46; font-weight: 700; line-height: 1.6; overflow: visible;">
              प्राण-प्रतिष्ठा मंत्र (108 बार जप): <span class="book-beej-mantra" style="font-weight: 700; color: #065F46;">${i(kt[b.spec.planetId]||b.spec.mantraHi)}</span>
            </div>
            ${b.cautionNote?`<div style="margin-top: 3.5px; font-size: 7.4px; color: ${b.needsStrengthening?"#065F46":t.saffronDeep}; font-weight: 700; line-height: 1.42;">शास्त्रीय विवेचन: ${i(b.cautionNote)}</div>`:""}
          </div>`).join("")}
    </div>

    ${p("DJ5b","किस रत्न से बचें? (वर्जित रत्न एवं सावधानी — Contraindications)","6वें, 8वें व 12वें भाव स्वामियों के रत्न")}
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
        ${H.length>0?H.map((b,N)=>`
                  <tr style="background:${N%2===0?"#FEF2F2":"#FFF7ED"}; page-break-inside: avoid;">
                    <td style="font-weight:800; color:${t.crimson};">${i(b.planetHi)}</td>
                    <td style="font-weight:700; color:${t.cosmicNavy};">${i(b.dusthanaHousesLabel)}</td>
                    <td style="font-weight:800; color:${t.crimson};">${i(b.gemHi)}</td>
                    <td style="line-height: 1.46;">${i(b.warningHi)}</td>
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
  `}}const R="'Noto Sans Devanagari', 'Nirmala UI', 'Mangal', 'Kohinoor Devanagari', system-ui, -apple-system, sans-serif";function lt(e){return De(String(e??"").replace(/\$([^$]+)\$/g,"$1").replace(/\\\(([^)]+)\\\)/g,"$1").replace(/\\\[([^\]]+)\\\]/g,"$1").replace(/\^?\{\\circ\}|\^\\circ|\\circ|\\degree|\\deg\b/g,"°").replace(/\^?\{\\prime\\prime\}|\\prime\\prime|\\second\b/g,'"').replace(/\^?\{\\prime\}|\\prime/g,"'").replace(/\\cdot/g,"·").replace(/\\times/g,"×").replace(/(\d{1,3})\s*°\s*(\d{1,2})\s*['′]\s*(\d{1,2})\s*["″]/g,`$1° $2' $3"`))}function a(e){return lt(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}const Mt="display: inline-flex; align-items: center; justify-content: center; line-height: 1.15; padding-top: 4px; padding-bottom: 4px; vertical-align: middle; box-sizing: border-box; text-align: center;",St="display: inline-block; line-height: 1.15;",Me=bt.websiteDisplay.replace(/\s+/g,"");function Gt(e=t.saffronDeep){return`<span style="white-space: nowrap; display: inline-block; letter-spacing: 0; font-family: monospace; font-weight: 800; color: ${e};">${a(Me)}</span>`}function Le(e){return e.map(l=>({houseNumber:l.houseNumber,rashiNumber:l.rashiNumber,rashiName:l.rashiNameHi,bhavaTitle:`भाव ${l.houseNumber}`,planets:l.planets.map(i=>({shortHindi:i.shortHindi,chartLabel:i.chartLabel||me(i),degInt:i.degInt,hindiName:i.hindiName,degree:i.fullDMS,fullDegreeDMS:i.fullDMS,statusBadge:"madhyam"}))}))}function Ee(e,l,i){const s={1:{rx:50,ry:43.2,px:50,py:28.4,maxPerLine:2,maxWidthU:25.5,maxHeightU:15.2},2:{rx:25,ry:21.2,px:25,py:9.8,maxPerLine:2,isOuterTri:!0,maxWidthU:21.5,maxHeightU:11},3:{rx:21.8,ry:25.5,px:11.4,py:25.5,maxPerLine:1,isSide:!0,maxWidthU:13.8,maxHeightU:15.8},4:{rx:43.2,ry:50,px:23.8,py:50,maxPerLine:2,maxWidthU:25.5,maxHeightU:16},5:{rx:21.8,ry:74.5,px:11.4,py:74.5,maxPerLine:1,isSide:!0,maxWidthU:13.8,maxHeightU:15.8},6:{rx:25,ry:78.8,px:25,py:90.2,maxPerLine:2,isOuterTri:!0,maxWidthU:21.5,maxHeightU:11},7:{rx:50,ry:56.8,px:50,py:73.8,maxPerLine:2,maxWidthU:25.5,maxHeightU:16},8:{rx:75,ry:78.8,px:75,py:90.2,maxPerLine:2,isOuterTri:!0,maxWidthU:21.5,maxHeightU:11},9:{rx:78.2,ry:74.5,px:88.6,py:74.5,maxPerLine:1,isSide:!0,maxWidthU:13.8,maxHeightU:15.8},10:{rx:56.8,ry:50,px:76.2,py:50,maxPerLine:2,maxWidthU:25.5,maxHeightU:16},11:{rx:78.2,ry:25.5,px:88.6,py:25.5,maxPerLine:1,isSide:!0,maxWidthU:13.8,maxHeightU:15.8},12:{rx:75,ry:21.2,px:75,py:9.8,maxPerLine:2,isOuterTri:!0,maxWidthU:21.5,maxHeightU:11}},p=e.map(d=>{const o=s[d.houseNumber];if(!o)return"";const r=d.planets||[],h=r.length>=3,m=o.isSide?r.length>=5?2:1:r.length>=5?3:h?2:o.maxPerLine,g=r.map(k=>{const $=(k.chartLabel||k.shortHindi||"").trim(),C=String(k.degInt??0).padStart(2,"0");return/\d$/.test($)?$:`${$}${C}`}),c=[];for(let k=0;k<g.length;k+=m)c.push(g.slice(k,k+m).join(" "));const x=Math.max(1,...c.map(k=>Array.from(k).length)),D=o.isSide?c.length>=4?2:c.length>=3?2.2:2.45:o.isOuterTri?c.length>=2?2.25:2.6:h?2.4:2.85,w=o.maxWidthU*.9/Math.max(4,x*.68),M=o.maxHeightU/Math.max(1,c.length*1.24),H=Number(Math.max(1.5,Math.min(D,w,M)).toFixed(2)),S=Number((H*1.16).toFixed(2)),b=c.map((k,$)=>{const C=($-(c.length-1)/2)*S;return`<text x="${o.px}" y="${(o.py+C).toFixed(2)}" dy="-0.05em" text-anchor="middle" dominant-baseline="central" fill="${t.cosmicNavy}" font-size="${H}" font-weight="700" font-family="${R}">${a(k)}</text>`}).join(""),N=d.houseNumber===1?`<text x="50" y="11.4" dy="-0.05em" text-anchor="middle" dominant-baseline="central" fill="${t.saffronDeep}" font-size="2.8" font-weight="800" font-family="${R}">${typeof i=="number"?`लग्न ${String(i).padStart(2,"0")}°`:"लग्न"}</text>`:"";return`
        <text x="${o.rx}" y="${o.ry}" text-anchor="middle" dominant-baseline="central" fill="${t.saffron}" font-size="3.15" font-weight="800" font-family="${R}">${d.rashiNumber}</text>
        ${N}
        ${b}
      `}).join("");return`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="${l}" height="${l}" style="width:${l}px;height:${l}px;display:block;margin:0 auto;overflow:visible;">
      <rect x="1.5" y="1.5" width="97" height="97" rx="2.5" fill="${t.warmIvory}" stroke="${t.templeGold}" stroke-width="1.4" />
      <rect x="3.2" y="3.2" width="93.6" height="93.6" rx="1.2" fill="none" stroke="${t.saffron}" stroke-opacity="0.38" stroke-width="0.45" />
      <line x1="1.5" y1="1.5" x2="98.5" y2="98.5" stroke="${t.templeGoldDark}" stroke-width="0.8" />
      <line x1="98.5" y1="1.5" x2="1.5" y2="98.5" stroke="${t.templeGoldDark}" stroke-width="0.8" />
      <polygon points="50,1.5 98.5,50 50,98.5 1.5,50" fill="none" stroke="${t.templeGoldDark}" stroke-width="0.9" />
      <text x="50" y="50.4" dy="-0.06em" text-anchor="middle" dominant-baseline="central" fill="${t.templeGold}" fill-opacity="0.22" font-size="7" font-weight="800" font-family="${R}">ॐ</text>
      ${p}
    </svg>
  `}function Ie(e,l,i,s){const p={};e.forEach(m=>{p[m.rashiNumber]=m});const d=[{rashi:12,label:"12 मीन",col:0,row:0},{rashi:1,label:"1 मेष",col:1,row:0},{rashi:2,label:"2 वृष",col:2,row:0},{rashi:3,label:"3 मि",col:3,row:0},{rashi:4,label:"4 कर्क",col:3,row:1},{rashi:5,label:"5 सिंह",col:3,row:2},{rashi:6,label:"6 कन्या",col:3,row:3},{rashi:7,label:"7 तुला",col:2,row:3},{rashi:8,label:"8 वृश्चि",col:1,row:3},{rashi:9,label:"9 धनु",col:0,row:3},{rashi:10,label:"10 मकर",col:0,row:2},{rashi:11,label:"11 कुंभ",col:0,row:1}],o=24,r=2,h=d.map(m=>{const g=r+m.col*o,c=r+m.row*o,x=p[m.rashi],D=x?.houseNumber===1,w=(x?.planets||[]).map(S=>S.chartLabel||S.shortHindi),M=[];for(let S=0;S<w.length;S+=2)M.push(w.slice(S,S+2).join(" "));const H=M.map((S,b)=>{const N=c+12+(b-(M.length-1)/2)*3.6;return`<text x="${g+o/2}" y="${N.toFixed(1)}" dy="-0.06em" text-anchor="middle" dominant-baseline="central" fill="${t.cosmicNavy}" font-size="3.2" font-weight="800" font-family="${R}">${a(S)}</text>`}).join("");return`
        <rect x="${g}" y="${c}" width="${o}" height="${o}" fill="${D?"#FFF3E0":t.warmIvory}" stroke="${t.templeGoldDark}" stroke-width="0.68" />
        <text x="${g+1.6}" y="${c+3.4}" dy="-0.06em" dominant-baseline="central" fill="${t.saffronDeep}" font-size="2.6" font-weight="700" font-family="${R}">${a(m.label)}</text>
        ${D?`<text x="${g+o-1.5}" y="${c+3.4}" dy="-0.06em" text-anchor="end" dominant-baseline="central" fill="${t.emerald}" font-size="2.5" font-weight="800" font-family="${R}">${typeof s=="number"?`लग्न ${s}°`:"लग्न"}</text>`:""}
        ${H}
        <text x="${g+o-1.5}" y="${c+o-2.2}" dy="-0.04em" text-anchor="end" dominant-baseline="central" fill="${t.inkMuted}" font-size="2.35" font-family="'Noto Sans Devanagari', sans-serif">भा.${x?.houseNumber||""}</text>
      `}).join("");return`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="${l}" height="${l}" style="width:${l}px;height:${l}px;display:block;margin:0 auto;">
      <rect x="1" y="1" width="98" height="98" rx="2" fill="${t.pureIvory}" stroke="${t.templeGold}" stroke-width="1.25" />
      <rect x="${r+o}" y="${r+o}" width="${o*2}" height="${o*2}" fill="${t.templeGoldSoft}" stroke="${t.templeGold}" stroke-width="0.7" />
      <text x="50" y="44.2" dy="-0.06em" text-anchor="middle" dominant-baseline="central" fill="${t.saffron}" font-size="8" font-weight="800">ॐ</text>
      <text x="50" y="54.0" dy="-0.06em" text-anchor="middle" dominant-baseline="central" fill="${t.cosmicNavy}" font-size="3.3" font-weight="800" font-family="${R}">${a(i)}</text>
      <text x="50" y="60.2" dy="-0.06em" text-anchor="middle" dominant-baseline="central" fill="${t.inkMuted}" font-size="2.5" font-family="${R}">दक्षिण भारतीय चक्र</text>
      ${h}
    </svg>
  `}function Te(e,l,i,s,p){return l==="south"?Ie(e,i,s,p):Ee(e,i,p)}function Vt(e,l,i,s,p,d){const o=Math.min(d,s/2,p/2);e.beginPath(),e.moveTo(l+o,i),e.lineTo(l+s-o,i),e.quadraticCurveTo(l+s,i,l+s,i+o),e.lineTo(l+s,i+p-o),e.quadraticCurveTo(l+s,i+p,l+s-o,i+p),e.lineTo(l+o,i+p),e.quadraticCurveTo(l,i+p,l,i+p-o),e.lineTo(l,i+o),e.quadraticCurveTo(l,i,l+o,i),e.closePath()}function mt(e,l,i,s){const p=e.textBaseline;e.textBaseline="alphabetic";const d=e.measureText(l),o=d.actualBoundingBoxAscent,r=d.actualBoundingBoxDescent;Number.isFinite(o)&&Number.isFinite(r)&&o>0?e.fillText(l,i,s+(o-r)/2):(e.textBaseline="middle",e.fillText(l,i,s)),e.textBaseline=p}function Be(e,l,i){if(typeof document>"u")return"";try{const s=Math.max(240,Math.round(l*3)),p=s,d=s/100,o=document.createElement("canvas");o.width=s,o.height=p;const r=o.getContext("2d");if(!r)return"";r.fillStyle=t.warmIvory,r.fillRect(0,0,s,p),Vt(r,1.5*d,1.5*d,97*d,97*d,2.5*d),r.fillStyle=t.warmIvory,r.fill(),r.lineWidth=1.4*d,r.strokeStyle=t.templeGold,r.stroke(),Vt(r,3.2*d,3.2*d,93.6*d,93.6*d,1.2*d),r.lineWidth=.45*d,r.strokeStyle="rgba(255, 111, 0, 0.38)",r.stroke(),r.beginPath(),r.moveTo(1.5*d,1.5*d),r.lineTo(98.5*d,98.5*d),r.moveTo(98.5*d,1.5*d),r.lineTo(1.5*d,98.5*d),r.lineWidth=.85*d,r.strokeStyle=t.templeGoldDark,r.stroke(),r.beginPath(),r.moveTo(50*d,1.5*d),r.lineTo(98.5*d,50*d),r.lineTo(50*d,98.5*d),r.lineTo(1.5*d,50*d),r.closePath(),r.lineWidth=.95*d,r.strokeStyle=t.templeGoldDark,r.stroke(),r.textAlign="center",r.fillStyle="rgba(212, 175, 55, 0.22)",r.font=`800 ${(7*d).toFixed(1)}px ${R}`,mt(r,"ॐ",50*d,50.2*d);const h={1:{rx:50,ry:43.2,px:50,py:28.4,maxPerLine:2,maxWidthU:25.5,maxHeightU:15.2},2:{rx:25,ry:21.2,px:25,py:9.8,maxPerLine:2,isOuterTri:!0,maxWidthU:21.5,maxHeightU:11},3:{rx:21.8,ry:25.5,px:11.4,py:25.5,maxPerLine:1,isSide:!0,maxWidthU:13.8,maxHeightU:15.8},4:{rx:43.2,ry:50,px:23.8,py:50,maxPerLine:2,maxWidthU:25.5,maxHeightU:16},5:{rx:21.8,ry:74.5,px:11.4,py:74.5,maxPerLine:1,isSide:!0,maxWidthU:13.8,maxHeightU:15.8},6:{rx:25,ry:78.8,px:25,py:90.2,maxPerLine:2,isOuterTri:!0,maxWidthU:21.5,maxHeightU:11},7:{rx:50,ry:56.8,px:50,py:73.8,maxPerLine:2,maxWidthU:25.5,maxHeightU:16},8:{rx:75,ry:78.8,px:75,py:90.2,maxPerLine:2,isOuterTri:!0,maxWidthU:21.5,maxHeightU:11},9:{rx:78.2,ry:74.5,px:88.6,py:74.5,maxPerLine:1,isSide:!0,maxWidthU:13.8,maxHeightU:15.8},10:{rx:56.8,ry:50,px:76.2,py:50,maxPerLine:2,maxWidthU:25.5,maxHeightU:16},11:{rx:78.2,ry:25.5,px:88.6,py:25.5,maxPerLine:1,isSide:!0,maxWidthU:13.8,maxHeightU:15.8},12:{rx:75,ry:21.2,px:75,py:9.8,maxPerLine:2,isOuterTri:!0,maxWidthU:21.5,maxHeightU:11}};for(const g of e){const c=h[g.houseNumber];if(!c)continue;if(r.fillStyle=t.saffron,r.font=`800 ${(3.15*d).toFixed(1)}px ${R}`,mt(r,String(g.rashiNumber),c.rx*d,c.ry*d),g.houseNumber===1){r.fillStyle=t.saffronDeep,r.font=`800 ${(2.8*d).toFixed(1)}px ${R}`;const $=typeof i=="number"?`लग्न ${String(i).padStart(2,"0")}°`:"लग्न";mt(r,$,50*d,11.4*d)}const x=g.planets||[];if(x.length===0)continue;const D=x.length>=3,w=c.isSide?x.length>=5?2:1:x.length>=5?3:D?2:c.maxPerLine,M=x.map($=>{const C=($.chartLabel||$.shortHindi||"").trim(),z=String($.degInt??0).padStart(2,"0");return/\d$/.test(C)?C:`${C}${z}`}),H=[];for(let $=0;$<M.length;$+=w)H.push(M.slice($,$+w).join(" "));let S=c.isSide?H.length>=4?2:H.length>=3?2.2:2.45:c.isOuterTri?H.length>=2?2.25:2.6:D?2.4:2.85;const b=c.maxHeightU/Math.max(1,H.length*1.24);S=Number(Math.min(S,b).toFixed(2)),r.fillStyle=t.cosmicNavy;const N=c.maxWidthU*d*.9;for(;S>1.45&&(r.font=`700 ${(S*d).toFixed(1)}px ${R}`,!(Math.max(...H.map($=>r.measureText(lt($)).width))<=N));)S=Number((S-.1).toFixed(2));const k=S*1.16;r.font=`700 ${(S*d).toFixed(1)}px ${R}`,H.forEach(($,C)=>{const z=(C-(H.length-1)/2)*k;mt(r,lt($),c.px*d,(c.py+z)*d)})}const m=o.toDataURL("image/png");return o.width=0,o.height=0,m.startsWith("data:image/png;base64,")?m:""}catch{return""}}function Pe(e,l,i,s){if(typeof document>"u")return"";try{const p=Math.max(240,Math.round(l*3)),d=p,o=p/100,r=document.createElement("canvas");r.width=p,r.height=d;const h=r.getContext("2d");if(!h)return"";h.fillStyle=t.pureIvory,h.fillRect(0,0,p,d),Vt(h,1*o,1*o,98*o,98*o,2*o),h.fillStyle=t.pureIvory,h.fill(),h.lineWidth=1.25*o,h.strokeStyle=t.templeGold,h.stroke();const m=24,g=2;h.fillStyle=t.templeGoldSoft,h.fillRect((g+m)*o,(g+m)*o,m*2*o,m*2*o),h.lineWidth=.7*o,h.strokeStyle=t.templeGold,h.strokeRect((g+m)*o,(g+m)*o,m*2*o,m*2*o),h.textAlign="center",h.fillStyle=t.saffron,h.font=`800 ${(8*o).toFixed(1)}px ${R}`,mt(h,"ॐ",50*o,44.2*o),h.fillStyle=t.cosmicNavy,h.font=`800 ${(3.2*o).toFixed(1)}px ${R}`,mt(h,lt(i),50*o,54*o),h.fillStyle=t.inkMuted,h.font=`600 ${(2.5*o).toFixed(1)}px ${R}`,mt(h,"दक्षिण भारतीय चक्र",50*o,60.2*o);const c={};e.forEach(w=>{c[w.rashiNumber]=w});const x=[{rashi:12,label:"12 मीन",col:0,row:0},{rashi:1,label:"1 मेष",col:1,row:0},{rashi:2,label:"2 वृष",col:2,row:0},{rashi:3,label:"3 मि",col:3,row:0},{rashi:4,label:"4 कर्क",col:3,row:1},{rashi:5,label:"5 सिंह",col:3,row:2},{rashi:6,label:"6 कन्या",col:3,row:3},{rashi:7,label:"7 तुला",col:2,row:3},{rashi:8,label:"8 वृश्चि",col:1,row:3},{rashi:9,label:"9 धनु",col:0,row:3},{rashi:10,label:"10 मकर",col:0,row:2},{rashi:11,label:"11 कुंभ",col:0,row:1}];for(const w of x){const M=g+w.col*m,H=g+w.row*m,S=c[w.rashi],b=S?.houseNumber===1;h.fillStyle=b?"#FFF3E0":t.warmIvory,h.fillRect(M*o,H*o,m*o,m*o),h.lineWidth=.68*o,h.strokeStyle=t.templeGoldDark,h.strokeRect(M*o,H*o,m*o,m*o),h.textAlign="left",h.fillStyle=t.saffronDeep,h.font=`700 ${(2.6*o).toFixed(1)}px ${R}`,mt(h,w.label,(M+1.5)*o,(H+3.4)*o),b&&(h.textAlign="right",h.fillStyle=t.emerald,h.font=`800 ${(2.5*o).toFixed(1)}px ${R}`,mt(h,typeof s=="number"?`लग्न ${s}°`:"लग्न",(M+m-1.4)*o,(H+3.4)*o));const N=(S?.planets||[]).map($=>$.chartLabel||$.shortHindi),k=[];for(let $=0;$<N.length;$+=2)k.push(N.slice($,$+2).join(" "));h.textAlign="center",h.fillStyle=t.cosmicNavy,h.font=`800 ${(3.2*o).toFixed(1)}px ${R}`,k.forEach(($,C)=>{const z=H+12+(C-(k.length-1)/2)*3.6;mt(h,lt($),(M+m/2)*o,z*o)}),h.textAlign="right",h.fillStyle=t.inkMuted,h.font=`600 ${(2.35*o).toFixed(1)}px ${R}`,mt(h,`भा.${S?.houseNumber||""}`,(M+m-1.4)*o,(H+m-2.2)*o)}const D=r.toDataURL("image/png");return r.width=0,r.height=0,D.startsWith("data:image/png;base64,")?D:""}catch{return""}}function _t(e,l,i,s,p,d){if(p&&typeof document<"u"){const o=l==="south"?Pe(e,i,s,d):Be(e,i,d);if(o)return`<img src="${o}" alt="${a(s)}" width="${i}" height="${i}" style="width:${i}px;height:${i}px;display:block;margin:0 auto;" />`}return Te(e,l,i,s,d)}function Q(e,l,i){return`
    <div style="display: table; width: 100%; box-sizing: border-box; padding-bottom: 7px; margin-bottom: 10px; border-bottom: 2px solid ${t.templeGold};">
      <div style="display: table-cell; vertical-align: middle; text-align: left; padding-right: 10px;">
        <div style="display: table;">
          <div style="display: table-cell; vertical-align: middle; padding-right: 9px;">
            ${jt(28,i,1.8)}
          </div>
          <div style="display: table-cell; vertical-align: middle;">
            <div style="display: block; font-size: 10.5px; font-weight: 800; color: ${t.cosmicNavy}; line-height: 1.25;">
              पण्डित जी ऑनलाइन (PANDIT JI ONLINE) • बृहत् वैदिक जन्म पत्रिका
            </div>
            <div style="display: block; font-size: 8px; color: ${t.saffronDeep}; font-weight: 700; margin-top: 2px; line-height: 1.3;">
              ${a(l)}
            </div>
          </div>
        </div>
      </div>
      <div style="display: table-cell; vertical-align: middle; text-align: right; white-space: nowrap; width: 1%;">
        <span class="book-pill" style="${Mt} background: ${t.cosmicNavy}; color: #FDE68A; border: 1.2px solid ${t.templeGold}; font-size: 8.1px; font-weight: 800; padding-left: 11px; padding-right: 11px; border-radius: 999px; white-space: nowrap;">
          <span style="${St}">${a(e)}</span>
        </span>
      </div>
    </div>
  `}function A(e,l,i){const s=i&&i.includes("PANDIT JI ONLINE")?" letter-spacing: 0; word-spacing: 3px;":"",p=a(String(l||"").normalize("NFC")).replace(/\(\s*([^()–-]+?)\s*[–-]\s*([^()–-]+?)\s*\)/gu,`<span class="pj-h2c-no-lift" style="display:inline-block; white-space:nowrap; direction:ltr; unicode-bidi:isolate; font-family:${R}; font-weight:700; color:#FDE68A; margin-left:4px;"><span style="display:inline-block; margin-right:1px;">(</span><span style="display:inline-block;">$1</span><span style="display:inline-block; margin:0 3px;">–</span><span style="display:inline-block;">$2</span><span style="display:inline-block; margin-left:1px;">)</span></span>`);return`
    <div class="book-section-bar pj-h2c-no-lift" style="display: table; width: 100%; box-sizing: border-box; background: linear-gradient(90deg, ${t.cosmicNavy} 0%, #1E293B 100%); border-left: 4.5px solid ${t.saffron}; border-bottom: 1.8px solid ${t.templeGold}; border-radius: 7px; padding: 7px 11px; margin: 8px 0 8px 0; overflow: visible; font-family: ${R};">
      <div class="pj-h2c-no-lift" style="display: table-cell; vertical-align: middle; text-align: left; color: ${t.warmIvory}; font-size: 10.2px; font-weight: 700; line-height: 1.54; padding-right: 8px; overflow: visible; direction: ltr; unicode-bidi: isolate;">
        <span class="pj-h2c-no-lift" style="display: block; line-height: 1.54;"><span style="color: ${t.templeGold}; font-weight: 800; margin-right: 5px;">${a(e)}.</span>${p}</span>
      </div>
      ${i?`<div class="pj-h2c-no-lift" style="display: table-cell; vertical-align: middle; text-align: right; white-space: nowrap; width: 1%;"><span class="book-pill pj-h2c-no-lift" style="${Mt} background: rgba(212, 175, 55, 0.16); border: 1px solid rgba(212, 175, 55, 0.5); color: #FDE68A; font-size: 7.7px; font-weight: 700; padding-left: 9px; padding-right: 9px; border-radius: 999px; white-space: nowrap;${s}"><span style="${St}${s}">${a(i)}</span></span></div>`:""}
    </div>
  `}function wt(e){const l=ke[e],i=l.keyPoints.map(s=>`<span style="display: block; margin-top: 2.5px;"><b style="color: ${t.saffronDeep};">• ${a(s.term.hi)}:</b> ${a(s.meaning.hi)}</span>`).join("");return`
    <div class="book-card" style="background: ${t.saffronSoft}; border: 1.2px solid ${t.templeGold}; border-radius: 8px; padding: 7.5px 10px; margin: 8px 0 6px 0; font-size: 8.3px; color: ${t.inkPrimary}; line-height: 1.48;">
      <div style="font-weight: 800; color: ${t.cosmicNavy}; font-size: 8.8px; margin-bottom: 2.5px;">
        ✦ इसे कैसे समझें? — ${a(l.triggerTitle.hi)}
      </div>
      <div>${a(l.whatItShows.hi)}</div>
      ${i}
      <div style="margin-top: 3.5px; color: ${t.emerald}; font-weight: 700;">
        ध्यान दें: ${a(l.practicalTip.hi)}
      </div>
    </div>
  `}function Kt(e,l,i){return`
    <div class="book-card" style="background: ${t.saffronSoft}; border: 1.2px solid ${t.templeGold}; border-radius: 8px; padding: 7.5px 10px; margin: 8px 0 6px 0; font-size: 8.3px; color: ${t.inkPrimary}; line-height: 1.48;">
      <div style="font-weight: 800; color: ${t.cosmicNavy}; font-size: 8.8px; margin-bottom: 2.5px;">
        ✦ इसे कैसे समझें? — ${a(e)}
      </div>
      <div>${a(l)}</div>
      <div style="margin-top: 3.5px; color: ${t.emerald}; font-weight: 700;">
        व्यावहारिक सुझाव: ${a(i)}
      </div>
    </div>
  `}function Yt(e,l,i){return`
    <div style="display: flex; align-items: center; gap: 6px; width: 100%;">
      <div style="flex: 1; height: 8px; background: #EFE3C6; border-radius: 999px; overflow: hidden; border: 0.8px solid #D9C495;">
        <div style="width: ${Math.max(4,Math.min(100,Math.round(e)))}%; height: 100%; background: ${l}; border-radius: 999px;"></div>
      </div>
      ${i?`<span style="font-size: 7.6px; font-weight: 800; font-family: monospace; color: ${t.cosmicNavy}; min-width: 34px; text-align: right;">${a(i)}</span>`:""}
    </div>
  `}const Qt=[{id:"sun",hi:"सूर्य",short:"सू"},{id:"moon",hi:"चंद्र",short:"चं"},{id:"mars",hi:"मंगल",short:"मं"},{id:"mercury",hi:"बुध",short:"बु"},{id:"jupiter",hi:"गुरु",short:"गु"},{id:"venus",hi:"शुक्र",short:"शु"},{id:"saturn",hi:"शनि",short:"श"}],Ae={sun:["moon","mars","jupiter"],moon:["sun","mercury"],mars:["sun","moon","jupiter"],mercury:["sun","venus"],jupiter:["sun","moon","mars"],venus:["mercury","saturn"],saturn:["mercury","venus"]},Re={sun:["venus","saturn"],moon:[],mars:["mercury"],mercury:["moon"],jupiter:["mercury","venus"],venus:["sun","moon"],saturn:["sun","moon","mars"]};function Ge(e){const l={},i={सूर्य:"sun",चंद्र:"moon",चन्द्र:"moon",मंगल:"mars",बुध:"mercury",गुरु:"jupiter",बृहस्पति:"jupiter",शुक्र:"venus",शनि:"saturn"};for(const s of e.planets){const p=Object.keys(i).find(d=>s.hindiName.includes(d));p&&(l[i[p]]=s.rashiNumber)}return Qt.map(s=>{const p=Qt.map(d=>{if(s.id===d.id)return{label:"स्वयं",color:t.inkMuted,bg:"#F1ECE0"};const o=Ae[s.id].includes(d.id)?1:Re[s.id].includes(d.id)?-1:0,r=l[s.id]||1,h=((l[d.id]||1)-r+12)%12+1,m=[2,3,4,10,11,12].includes(h),g=o+(m?1:-1);return g>=2?{label:"अति मित्र",color:"#065F46",bg:"#D1FAE5"}:g===1?{label:"मित्र",color:"#047857",bg:"#ECFDF5"}:g===0?{label:"सम",color:"#92400E",bg:"#FEF3C7"}:g===-1?{label:"शत्रु",color:"#B45309",bg:"#FFEDD5"}:{label:"अति शत्रु",color:"#991B1B",bg:"#FEE2E2"}});return{grahaHi:s.hi,cells:p}})}function Ue(e){const l=e.phase1Astronomy?.spaceTime.year||parseInt((e.input.dob||"1995").slice(0,4),10)||1995,i=e.panchang.moonRashiNumber||1,s=e.planets.find(w=>w.hindiName.includes("शनि"))?.rashiNumber||1,p=(i+10)%12+1,d=i,o=i%12+1,r=w=>Pt[w-1]?.nameHi||String(w),h=29.457/12,m=(p-s+12)%12;let g=Math.round(l+m*h);g-l>27&&(g-=29);const c=[],x=["प्रथम आवर्तन","द्वितीय आवर्तन","तृतीय आवर्तन"],D=[{name:"उदय चरण (प्रथम ढाई वर्ष)",rashi:p,guidance:"व्यय नियंत्रण, नई जिम्मेदारियाँ, यात्राएँ व आधार-निर्माण का समय।"},{name:"शिखर चरण (मध्य ढाई वर्ष)",rashi:d,guidance:"परिश्रम की परीक्षा, आत्म-अनुशासन, धैर्य व मानसिक दृढ़ता का काल।"},{name:"अस्त चरण (अंतिम ढाई वर्ष)",rashi:o,guidance:"धीरे-धीरे राहत, संचित परिश्रम का स्थायी फल व आर्थिक सुधार।"}];for(let w=0;w<3;w++){const M=Math.round(g+w*29.46);D.forEach((H,S)=>{const b=Math.round(M+S*h),N=Math.round(M+(S+1)*h);if(N<l)return;const k=Math.max(l,b),$=Math.max(0,k-l),C=Math.max($+1,N-l);$>92||c.push({cycleLabel:x[w],phaseLabel:H.name,saturnRashi:`${r(H.rashi)} (${H.rashi})`,approxPeriod:`${k} – ${N}`,ageSpan:`${$}–${C} वर्ष`,guidanceHi:H.guidance})})}return c}const We={सूर्य:"प्रशासनिक सम्मान, पिता-सहयोग, आत्मविश्वास व पदोन्नति के संकेत।",चंद्र:"मानसिक संतुलन, पारिवारिक सुख, जनसंपर्क एवं यात्रा लाभ।",मंगल:"साहस, भूमि-भवन कार्य, तकनीकी प्रगति व ऊर्जावान निर्णय।",राहु:"नवीन अवसर, तकनीकी/विदेश विस्तार व सतर्क विवेक की आवश्यकता।",गुरु:"ज्ञान-वृद्धि, शुभ मांगलिक कार्य, संतान सुख व आर्थिक स्थिरता।",शनि:"धैर्यपूर्वक कर्म, अनुशासन, दीर्घकालिक स्थायी निर्माण व न्याय।",बुध:"बौद्धिक विकास, व्यवसाय-संवाद, शिक्षा व लेखन-लाभ का काल।",केतु:"आध्यात्मिक साधना, शोध, एकांत चिंतन व गूढ़ ज्ञान की प्राप्ति।",शुक्र:"सुख-सुविधा, कला, वैवाहिक सौहार्द, वाहन एवं समृद्धि के योग।"},qe={सूर्य:"आत्मा, मान-सम्मान, पिता, नेतृत्व क्षमता और राजकीय कार्यों का कारक ग्रह।",चंद्र:"मन, माता, भावनात्मक स्थिरता, जल तत्व, जनसंपर्क और मानसिक सुख का कारक।",मंगल:"साहस, पराक्रम, भूमि-संपत्ति, तकनीकी दक्षता और भ्रातृ-सुख का कारक ग्रह।",बुध:"बुद्धि, वाणी, व्यापार, गणित, संवाद कौशल और तार्किक निर्णय शक्ति का कारक।",गुरु:"ज्ञान, धर्म, संतान, भाग्य, धन-वृद्धि और गुरु-कृपा का परम शुभ कारक ग्रह।",शुक्र:"वैवाहिक सुख, कला, सौंदर्य, वाहन, ऐश्वर्य और रचनात्मक समृद्धि का कारक।",शनि:"कर्म, अनुशासन, आयु, न्याय, सेवा भाव और दीर्घकालिक स्थायी सफलता का कारक।",राहु:"नवीन सोच, आधुनिक तकनीक, विदेश यात्रा, शोध और तीव्र महत्वाकांक्षा का कारक।",केतु:"मोक्ष, वैराग्य, सूक्ष्म अंतर्ज्ञान, आध्यात्मिक उन्नति और मंत्र-साधना का कारक।"},Oe=[{graha:"सूर्य",mantra:"ॐ घृणि सूर्याय नमः",daan:"गेहूँ, गुड़, ताम्र पात्र, लाल वस्त्र",day:"रविवार"},{graha:"चंद्र",mantra:"ॐ सों सोमाय नमः",daan:"चावल, दूध, मिश्री, श्वेत वस्त्र",day:"सोमवार"},{graha:"मंगल",mantra:"ॐ अं अंगारकाय नमः",daan:"मसूर दाल, गुड़, लाल फल",day:"मंगलवार"},{graha:"बुध",mantra:"ॐ बुं बुधाय नमः",daan:"हरी मूंग, पालक, हरा वस्त्र, पुस्तकें",day:"बुधवार"},{graha:"गुरु",mantra:"ॐ बृं बृहस्पतये नमः",daan:"चना दाल, हल्दी, पीला वस्त्र, धार्मिक ग्रंथ",day:"गुरुवार"},{graha:"शुक्र",mantra:"ॐ शुं शुक्राय नमः",daan:"दही, चावल, खीर, श्वेत मिष्ठान्न",day:"शुक्रवार"},{graha:"शनि",mantra:"ॐ शं शनैश्चराय नमः",daan:"काले तिल, सरसों तेल, काली उड़द, कंबल",day:"शनिवार"},{graha:"राहु",mantra:"ॐ रां राहवे नमः",daan:"सतनाजा, कंबल, पक्षियों को दाना",day:"बुधवार / शनिवार"},{graha:"केतु",mantra:"ॐ केम् केतवे नमः",daan:"तिल, ऊनी वस्त्र, श्वान को भोजन",day:"मंगलवार / शनिवार"}],ne={sun:"सू",moon:"चं",mars:"मं",mercury:"बु",jupiter:"गु",venus:"शु",saturn:"श",rahu:"रा",ketu:"के"};function re(e){return lt(e||"").replace(/[º˚]/g,"°").replace(/[′’`]/g,"'").replace(/[″”]/g,'"').replace(/\s+/g," ").trim()}function Xt(e){return lt(e).normalize("NFC").replace(/ॐ\s*ह्रां\s*ह्रीं\s*ह्रौं\s*सः\s*सूर्याय\s*नमः/g,"ॐ घृणि सूर्याय नमः").replace(/ॐ\s*श्रां\s*श्रीं\s*श्रौं\s*सः\s*च[ंन][्]?द्रमसे\s*नमः/g,"ॐ सों सोमाय नमः").replace(/ॐ\s*क्रां\s*क्रीं\s*क्रौं\s*सः\s*भौमाय\s*नमः/g,"ॐ अं अंगारकाय नमः").replace(/ॐ\s*ब्रां\s*ब्रीं\s*ब्रौं\s*सः\s*बुधाय\s*नमः/g,"ॐ बुं बुधाय नमः").replace(/ॐ\s*ग्रां\s*ग्रीं\s*ग्रौं\s*सः\s*गुरवे\s*नमः/g,"ॐ बृं बृहस्पतये नमः").replace(/ॐ\s*द्रां\s*द्रीं\s*द्रौं\s*सः\s*शुक्राय\s*नमः/g,"ॐ शुं शुक्राय नमः").replace(/ॐ\s*प्रां\s*प्रीं\s*प्रौं\s*सः\s*शनैश्चराय\s*नमः/g,"ॐ शं शनैश्चराय नमः").replace(/ॐ\s*भ्रां\s*भ्रीं\s*भ्रौं\s*सः\s*राहवे\s*नमः/g,"ॐ रां राहवे नमः").replace(/ॐ\s*स्?त्रां\s*स्?त्रीं\s*स्?त्रौं\s*सः\s*केतवे\s*नमः/g,"ॐ केम् केतवे नमः").replace(/ॐ\s*स्रां\s*स्रीं\s*स्रौं\s*सः\s*केतवे\s*नमः/g,"ॐ केम् केतवे नमः").replace(/ॐ\s*कें\s*केतवे\s*नमः/g,"ॐ केम् केतवे नमः").normalize("NFC")}const Je={जनवरी:1,फरवरी:2,मार्च:3,अप्रैल:4,मई:5,जून:6,जुलाई:7,अगस्त:8,सितंबर:9,सितम्बर:9,अक्टूबर:10,अक्तूबर:10,नवंबर:11,नवम्बर:11,दिसंबर:12,दिसम्बर:12};function le(e){const l=String(e??"").trim(),i=l.match(/^(\d{1,2})\s+([^\s\d]+)\s+(\d{4})$/u);if(i){const p=parseInt(i[1],10),d=Je[i[2]]||1;return parseInt(i[3],10)*1e4+d*100+p}const s=l.match(/^(\d{4})[-/](\d{1,2})[-/](\d{1,2})$/);return s?parseInt(s[1],10)*1e4+parseInt(s[2],10)*100+parseInt(s[3],10):null}function Zt(e,l,i,s){let p=String(e??"").normalize("NFC").trim(),d=String(l??"").normalize("NFC").trim();if(typeof i=="number"&&typeof s=="number"&&Number.isFinite(i)&&Number.isFinite(s)&&i>s){const o=p;p=d,d=o}else{const o=le(p),r=le(d);if(o!==null&&r!==null&&o>r){const h=p;p=d,d=h}}return{startLabel:p,endLabel:d}}function Ut(e){return a(String(e??"").normalize("NFC")).replace(/(\(\s*\d{1,3}°\s*\d{1,2}'(?:\s*\d{1,2}&quot;)?\s*\)|\b\d{1,3}°\s*\d{1,2}'(?:\s*\d{1,2}&quot;)?)/g,`<span class="pj-h2c-no-lift" style="font-family: 'Segoe UI', 'Liberation Sans', 'Helvetica Neue', Arial, sans-serif; font-variant-numeric: tabular-nums; font-weight: 700; direction: ltr; unicode-bidi: isolate; white-space: nowrap;">$1</span>`).replace(/भाव\s+(\d{1,2})\s+व\s+(\d{1,2})/gu,`<span class="pj-h2c-no-lift" style="display: inline-block; white-space: nowrap; direction: ltr; unicode-bidi: isolate;"><span style="display: inline-block; font-family: ${R}; font-weight: 700;">भाव</span><span style="display: inline-block; margin-left: 2.5px; font-family: 'Segoe UI', 'Liberation Sans', 'Helvetica Neue', Arial, sans-serif; font-variant-numeric: tabular-nums; font-weight: 700;">$1</span><span style="display: inline-block; margin: 0 3px; font-family: ${R}; font-weight: 700;">व</span><span style="display: inline-block; font-family: 'Segoe UI', 'Liberation Sans', 'Helvetica Neue', Arial, sans-serif; font-variant-numeric: tabular-nums; font-weight: 700;">$2</span></span>`)}function Wt(e,l,i,s=!1){const{cleanMode:p,chartStyle:d}=i,o=l.appLogoDataUrl,r=`${e.input.name} • जन्म: ${e.input.formattedDob}, ${e.input.formattedTime} • ${e.input.birthPlace}`,h=e.mahadashas.find(n=>n.isCurrent)||e.mahadashas[0],m=e.phase1Astronomy,g=e.shadbalaBhava,c=e.phase2Jyotish,x=[],D=new Fe(`book|${e.input.dob}|${e.panchang.lagnaNumber}|${e.panchang.moonRashiNumber}`),w={esc:a,buildBookPageHeader:Q,buildSectionTitleBar:A,personHeader:r,appLogo:o},M=_t(e.lagnaChart,d,258,`लग्न (${e.panchang.lagnaName})`,s,e.panchang.lagnaDegInt),H=`
    <div style="width: 100%; height: 100%; box-sizing: border-box; display: flex; flex-direction: column; justify-content: space-between; background: ${t.warmIvory}; border: 3.5px solid ${t.templeGold}; border-radius: 14px; padding: 14px 16px; position: relative; box-shadow: inset 0 0 0 2px #FFFDF8, inset 0 0 0 3.5px rgba(255, 111, 0, 0.35);">
      <!-- Top Cosmic Deep Navy Royal Masthead with Centered Real App Logo -->
      <div style="background: linear-gradient(135deg, ${t.cosmicNavy} 0%, #162440 68%, #2C1608 100%); border: 2px solid ${t.templeGold}; border-radius: 12px; padding: 11px 16px 13px 16px; text-align: center; color: ${t.warmIvory};">
        <div style="display: block; font-size: 10px; font-weight: 800; color: ${t.templeGold}; letter-spacing: 0; line-height: 1.25; padding-top: 2px; padding-bottom: 4px;">
          ॥ श्री गणेशाय नमः ॥ &nbsp;•&nbsp; ॥ सर्वे भवन्तु सुखिनः ॥
        </div>
        <div style="display: table; margin: 7px auto 0 auto;">
          <div style="display: table-cell; vertical-align: middle; padding-right: 14px;">
            ${jt(58,o,2.8)}
          </div>
          <div style="display: table-cell; vertical-align: middle; text-align: left;">
            <div style="display: block; font-size: 20px; font-weight: 900; color: #FDE68A; letter-spacing: 0; line-height: 1.3; padding-bottom: 2px;">पण्डित जी ऑनलाइन</div>
            <div style="display: block; font-size: 9.2px; font-weight: 800; color: #F8FAFC; letter-spacing: 0; word-spacing: 2px; margin-top: 7px; line-height: 1.35;"><span style="display: inline-block; margin-right: 4px;">PANDIT</span><span style="display: inline-block; margin-right: 4px;">JI</span><span style="display: inline-block; margin-right: 5px;">ONLINE</span>— प्रामाणिक वैदिक ज्योतिष महा-ग्रंथ</div>
          </div>
        </div>
        <div style="margin-top: 10px; text-align: center;">
          <span class="book-pill" style="display: inline-flex; align-items: center; justify-content: center; line-height: 1.15; padding: 4px 16px; vertical-align: middle; box-sizing: border-box; text-align: center; background: rgba(255, 111, 0, 0.24); border: 1.2px solid ${t.templeGold}; color: #FDE68A; font-size: 8.8px; font-weight: 800; border-radius: 999px;">
            <span style="${St}">सम्पूर्ण बृहत् जन्म कुंडली पुस्तक • दृक् गणित लाहिड़ी अयनांश</span>
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
        ${M}
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
          <div style="display: block; font-size: 11px; font-weight: 800; margin-top: 3px; line-height: 1.28;">${a(e.panchang.nakshatraName)}</div>
          <div style="display: block; font-size: 7.6px; color: #6EE7B7; margin-top: 3px; line-height: 1.28;">चरण ${e.panchang.nakshatraPada} • ${a(e.panchang.nakshatraLord)}</div>
        </div>
        <div class="book-cover-pillar-card" style="display: flex; flex-direction: column; justify-content: center; background: ${t.cosmicNavy}; color: ${t.warmIvory}; border: 1.2px solid ${t.templeGold}; border-radius: 8px; padding: 6.5px 8px; text-align: center; box-sizing: border-box;">
          <div style="display: block; font-size: 7.8px; color: #FCD34D; font-weight: 700; line-height: 1.28;">वर्तमान महादशा</div>
          <div style="display: block; font-size: 11px; font-weight: 800; margin-top: 3px; line-height: 1.28;">${a(h?.planet||"-")}</div>
          <div style="display: block; font-size: 7.6px; color: #6EE7B7; margin-top: 3px; line-height: 1.28;">${a(h?.startYear)}–${a(h?.endYear)}</div>
        </div>
      </div>

      <!-- Cover Bottom Brand Strip + Real QR Code (Zero Overlap) -->
      <div style="background: ${t.templeGoldSoft}; border: 1.6px solid ${t.templeGold}; border-radius: 10px; padding: 9px 13px; display: flex; align-items: center; justify-content: space-between; gap: 12px;">
        <div style="flex: 1; font-size: 8.8px; color: ${t.inkPrimary}; line-height: 1.5;">
          <div style="font-weight: 900; color: ${t.cosmicNavy}; font-size: 10.5px;">
            मार्गदर्शक: ${a(bt.founderHi)} (वैदिक ज्योतिषाचार्य एवं कर्मकाण्ड विशेषज्ञ)
          </div>
          <div>${a(bt.locationHi)}</div>
          <div>सम्पर्क / WhatsApp: <b>${a(bt.phoneDisplay)}</b> &nbsp;|&nbsp; वेबसाइट: ${Gt(t.saffronDeep)}</div>
        </div>
        ${l.websiteQrDataUrl?`<div style="background:#FFFFFF; border: 1.6px solid ${t.templeGold}; border-radius: 8px; padding: 4px; text-align:center; flex-shrink:0;">
                 <img src="${l.websiteQrDataUrl}" alt="Pandit Ji Online QR" style="width: 60px; height: 60px; display:block;" />
                 <div style="font-size: 6.8px; font-weight: 800; color: ${t.cosmicNavy}; margin-top: 2px;">स्कैन करें</div>
               </div>`:""}
      </div>
    </div>
  `;x.push({sectionCode:"COVER",sectionTag:"मुख्य आवरण (Cover)",isCover:!0,html:H});const S=(n,u)=>{const P=String(n||"").trim();if(!P)return"—";const v=new RegExp(`(?:\\s*${u})+$`,"u");return`${P.replace(v,"").trim()} ${u}`.trim()},b=[["वार (सूर्योदयात्)",`${e.panchang.vaar} (स्वामी: ${e.panchang.vaarLord})`,"जन्म लग्न",`${e.panchang.lagnaName} (${e.panchang.lagnaDegreeDMS})`],["तिथि एवं पक्ष",`${e.panchang.tithi} • ${e.panchang.paksha}`,"लग्नेश (Lagna Lord)",e.panchang.lagnaLord],["नक्षत्र एवं चरण",`${e.panchang.nakshatraName} (चरण ${e.panchang.nakshatraPada})`,"चंद्र राशि एवं स्वामी",`${e.panchang.moonRashiName} (${e.panchang.moonRashiLord})`],["नक्षत्र स्वामी",e.panchang.nakshatraLord,"सूर्य राशि एवं स्वामी",`${e.panchang.sunRashiName} (${e.panchang.sunRashiLord})`],["योग एवं करण",`${S(e.panchang.yoga,"योग")} • ${S(e.panchang.karana,"करण")}`,"प्रचलित नाम राशि",e.panchang.naamRashi],["सूर्योदय / सूर्यास्त",m?`${m.birthPanchang.sunriseHi} / ${m.birthPanchang.sunsetHi}`:"स्थानीय सूर्योदय आधारित","टाइमज़ोन / UTC",`${e.input.timeZone||"Asia/Kolkata"} (${e.input.utcOffsetFormatted||"UTC+05:30"})`],["गण एवं नाड़ी",`${S(e.panchang.gana,"गण")} • ${S(e.panchang.nadi,"नाड़ी")}`,"योनि एवं वर्ण",`${e.panchang.yoni} • ${e.panchang.varna}`],["वश्य एवं तत्व",`${e.panchang.vashya} • ${e.panchang.tatva}`,"पाया (Paya)",e.panchang.paya],["इष्टदेव",e.lucky.ishtaDevta,"शुभ अंक व वार",`${e.lucky.luckyNumbers} • ${e.lucky.luckyDays}`],["शुभ रंग एवं दिशा",`${e.lucky.luckyColors} • ${e.lucky.luckyDirection}`,"अयनांश (लाहिड़ी)",`${e.input.ayanamsaDMS} • True Node`]],N=e.input.warningsHi&&e.input.warningsHi.length>0?`<div class="book-card" style="margin-top: 10px; background: #FEF2F2; border: 1.5px solid #F59E0B; border-radius: 8px; padding: 9px 12px; font-size: 8.6px; color: #7C2D12; line-height: 1.55;">
           <b style="color:#B45309;">⚠ जन्म-समय / टाइमज़ोन / संधि सूचना:</b>
           ${e.input.warningsHi.map(n=>`<div style="margin-top:3px;">• ${a(n)}</div>`).join("")}
         </div>`:`<div class="book-card" style="margin-top: 10px; background: ${t.emeraldSoft}; border: 1.2px solid #10B981; border-radius: 8px; padding: 9px 12px; font-size: 8.6px; color: #065F46; line-height: 1.55;">
           <b>✓ सटीक खगोलीय सत्यापन:</b> यह जन्मपत्री ऐतिहासिक IANA टाइमज़ोन (${a(e.input.timeZone||"Asia/Kolkata")}), दृक् गणित लाहिड़ी चित्रा पक्ष अयनांश (${a(e.input.ayanamsaDMS)}) तथा True Node मानक पर आधारित है।
         </div>`,k=`
    ${Q("खण्ड A1 : जन्म पंचांग एवं अवकहड़ा चक्र",r,o)}
    ${A("A1","जन्म पंचांग, खगोलीय विवरण एवं अवकहड़ा चक्र (Birth Panchang & Avakahada)","दृक् गणित सिंक्रनाइज़्ड")}
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
        ${b.map((n,u)=>`
            <tr style="background:${u%2===0?"#FFFDF8":"#FEF6E4"};">
              <td style="font-weight:800; color:${t.saffronDeep}; padding: 6.5px 8px; line-height: 1.42; vertical-align: middle; overflow: visible;">${a(n[0])}</td>
              <td style="font-weight:700; padding: 6.5px 8px; line-height: 1.42; vertical-align: middle; overflow: visible;">${a(n[1])}</td>
              <td style="font-weight:800; color:${t.saffronDeep}; padding: 6.5px 8px; line-height: 1.42; vertical-align: middle; overflow: visible;">${a(n[2])}</td>
              <td style="font-weight:700; padding: 6.5px 8px; line-height: 1.42; vertical-align: middle; overflow: visible;">${a(n[3])}</td>
            </tr>`).join("")}
      </tbody>
    </table>
    ${N}
    ${Kt("जन्म पंचांग और अवकहड़ा चक्र का महत्व","वैदिक ज्योतिष में जन्म तिथि, वार, नक्षत्र, योग और करण व्यक्ति के मूल स्वभाव तथा जीवन की लय दर्शाते हैं। सूर्योदय से पूर्व जन्म होने पर वैदिक वार पूर्व दिवस का माना जाता है। अवकहड़ा चक्र (गण, नाड़ी, योनि, वर्ण, वश्य, पाया) विवाह गुण मिलान और नामाक्षर चयन का आधार होता है।","विवाह मिलान एवं दशा गणना में जन्म के समय चंद्रमा की राशि (जन्म राशि) और नक्षत्र चरण को सदैव प्रधान माना जाता है।")}
  `;x.push({sectionCode:"A",sectionTag:"खण्ड A : जन्म पंचांग व अवकहड़ा",html:k}),x.push(He(e,w));const $=d==="south"?Ot.south.summary.hi:Ot.north.summary.hi,C=`
    ${Q("खण्ड A2 : सरल कुंडली मार्गदर्शिका (1–12 राशि बनाम भाव)",r,o)}
    ${A("A2","कुंडली कैसे पढ़ें? — 1–12 राशि बनाम भाव एवं ग्रह संकेत कुंजी","सामान्य जन के लिए सरल गाइड")}
    <div class="book-card" style="background: ${t.pureIvory}; border: 1.5px solid ${t.templeGold}; border-radius: 10px; padding: 12px 14px; font-size: 9px; line-height: 1.58; color: ${t.inkPrimary};">
      <div style="font-weight: 900; color: ${t.cosmicNavy}; font-size: 10.5px; margin-bottom: 4px;">
        1) ${a(Ot.heading.hi)}
      </div>
      <div>${a($)}</div>

      <div style="margin-top: 12px; font-weight: 800; color: ${t.saffronDeep}; font-size: 9.5px;">
        2) 1 से 12 राशि अंक सूची एवं उनके स्वामी ग्रह (12 Rashis & Lords):
      </div>
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 7px; margin-top: 6px;">
        ${Pt.map(n=>`<div style="background:${t.warmIvory}; border:1px solid ${t.borderMuted}; border-radius:6px; padding:6px 9px; font-size:8.6px;">
               <b style="color:${t.saffronDeep};">${n.number}. ${a(n.nameHi)}</b>
               <span style="color:${t.inkMuted};"> (${a(n.nameEn)})</span>
               <div style="font-size:8px; color:${t.cosmicNavy}; margin-top:1px;">स्वामी: <b>${a(n.lordHi)}</b></div>
             </div>`).join("")}
      </div>

      <div style="margin-top: 12px; font-weight: 800; color: ${t.saffronDeep}; font-size: 9.5px;">
        3) चार्ट में प्रयुक्त ग्रह संक्षिप्ताक्षर एवं विशेष चिह्न (Planet Legend):
      </div>
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 7px; margin-top: 6px;">
        ${we.map(n=>`<div class="book-legend-item" style="background:${t.warmIvory}; border:1px solid ${t.borderMuted}; border-radius:6px; padding:6px 9px; font-size:8.6px; line-height:1.65; color:${t.inkPrimary}; overflow:visible; white-space:nowrap;">
               <span style="font-weight:700; color:${t.cosmicNavy};">${a(n.shortHi.normalize("NFC"))} / ${a(n.shortEn)}</span> = ${a(n.fullHi.normalize("NFC"))} (${a(n.fullEn)})
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
  `;x.push({sectionCode:"A2",sectionTag:"खण्ड A : सरल कुंडली गाइड",html:C});const z=(n,u,P,v,y)=>`
    <div class="book-chart-box" style="background: ${t.pureIvory}; border: 1.6px solid ${t.templeGold}; border-radius: 11px; padding: 10px 12px; text-align: center; overflow: visible;">
      <div style="font-size: 10.2px; font-weight: 900; color: ${t.cosmicNavy}; margin-bottom: 7px; padding-top: 2px; padding-bottom: 2px; line-height: 1.44; overflow: visible;">${a(n)}</div>
      ${_t(u,d,v,n,s,y)}
      <div style="margin-top: 8px; padding-top: 7px; border-top: 1px dashed ${t.borderMuted}; font-size: 8.4px; color: ${t.inkPrimary}; line-height: 1.48; text-align: left;">
        ${a(P)}
      </div>
    </div>
  `,I=`
    ${Q("खण्ड B1 : जन्म लग्न (D-1) एवं नवांश कुंडली (D-9)",r,o)}
    ${A("B1","प्रमुख आधार चक्र — जन्म लग्न कुंडली (D-1) एवं नवांश कुंडली (D-9)",d==="south"?"दक्षिण भारतीय प्रारूप":"उत्तर भारतीय प्रारूप")}
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-top: 8px;">
      ${z(`जन्म लग्न कुंडली (D-1) — ${e.panchang.lagnaName}`,e.lagnaChart,Ct.lagna_d1.shortPurpose.hi,290,e.panchang.lagnaDegInt)}
      ${z(`नवांश कुंडली (D-9) — ${m?.shodashavarga.find(n=>n.spec.id==="D9")?.ascendantRashiNameHi||e.navamsaChart[0]?.rashiName||""}`,e.navamsaChart,Ct.navamsha_d9.shortPurpose.hi,290)}
    </div>
    <div style="display: block; margin-top: 12px; padding: 4px 12px 8px 12px; background: ${t.templeGoldSoft}; border: 1.2px solid ${t.templeGold}; border-radius: 8px; font-size: 8.4px; color: ${t.cosmicNavy}; text-align: center; font-weight: 700; line-height: 1.25;">
      ग्रह कुंजी: सू=सूर्य • चं=चंद्र • मं=मंगल • बु=बुध • गु=गुरु • शु=शुक्र • श=शनि • रा=राहु • के=केतु &nbsp;|&nbsp; * वक्री &nbsp;|&nbsp; ^ अस्त &nbsp;|&nbsp; 1–12 अंक = राशि संख्या
    </div>
    ${Kt("लग्न (D-1) और नवांश (D-9) साथ क्यों देखे जाते हैं?","जन्म लग्न कुंडली (D-1) जीवन रूपी वृक्ष का तना और मूल संरचना है, जबकि नवांश कुंडली (D-9) उस वृक्ष का फल है। यदि कोई ग्रह D-1 में सामान्य दिखे परंतु D-9 में स्वराशि, उच्च या मित्र राशि (अथवा वर्गोत्तम — दोनों में एक ही राशि) में हो, तो वह जीवन के मध्य व उत्तरार्ध में अत्यंत शुभ फल देता है।","वैवाहिक जीवन, जीवनसाथी के स्वभाव और ग्रहों के वास्तविक आंतरिक बल के लिए नवांश कुंडली (D-9) का विश्लेषण अनिवार्य माना गया है।")}
  `;x.push({sectionCode:"B",sectionTag:"खण्ड B : लग्न व नवांश (D-1, D-9)",html:I});const W=`
    ${Q("खण्ड B2 : चंद्र, सूर्य एवं श्रीपति भाव चलित कुंडली",r,o)}
    ${A("B2","सुदर्शन एवं भाव चलित चक्र — चंद्र, सूर्य व वास्तविक MC आधारित श्रीपति चलित","संपूर्ण त्रि-दृष्टि विश्लेषण")}
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 6px;">
      ${z(`चंद्र कुंडली (Chandra) — ${e.panchang.moonRashiName}`,e.chandraChart,Ct.chandra.shortPurpose.hi,228)}
      ${z(`सूर्य कुंडली (Surya) — ${e.panchang.sunRashiName}`,e.suryaChart||e.lagnaChart,Ct.surya.shortPurpose.hi,228)}
    </div>
    <div style="margin-top: 10px; display: grid; grid-template-columns: 1fr 1.15fr; gap: 12px; align-items: stretch;">
      ${z("श्रीपति भाव चलित कुंडली (Sripati Bhava Chalit)",e.bhavaChalitChart||e.lagnaChart,Ct.bhava_chalit.shortPurpose.hi,210,e.panchang.lagnaDegInt)}
      <div class="book-card" style="background: ${t.pureIvory}; border: 1.4px solid ${t.templeGold}; border-radius: 10px; padding: 11px 13px; font-size: 8.6px; line-height: 1.55; color: ${t.inkPrimary}; display: flex; flex-direction: column; justify-content: center;">
        <div style="font-size: 10px; font-weight: 900; color: ${t.cosmicNavy}; border-bottom: 1px solid ${t.borderMuted}; padding-bottom: 5px; margin-bottom: 7px;">
          ✦ इसे कैसे समझें? — तीन चार्ट का समन्वय
        </div>
        <div><b style="color:${t.saffronDeep};">• चंद्र कुंडली:</b> मन, भावना, दैनिक गोचर (राशिफल) और साढ़ेसाती का आधार चंद्र कुंडली है।</div>
        <div style="margin-top:5px;"><b style="color:${t.saffronDeep};">• सूर्य कुंडली:</b> आत्मबल, करियर प्रतिष्ठा, प्रशासनिक योग और पिता के साथ संबंध सूर्य कुंडली से देखे जाते हैं।</div>
        <div style="margin-top:5px;"><b style="color:${t.saffronDeep};">• श्रीपति भाव चलित:</b> वास्तविक Midheaven (MC) से गणना करने पर कुछ ग्रह लग्न चार्ट के बजाय अगले या पिछले भाव का फल दे सकते हैं — यही सूक्ष्म अंतर चलित कुंडली दर्शाती है।</div>
      </div>
    </div>
    ${Tt("after_charts_b",l,p)}
  `;x.push({sectionCode:"B2",sectionTag:"खण्ड B : चंद्र, सूर्य व चलित",html:W});const E=`
    ${Q("खण्ड C1 : नवग्रह स्पष्ट तालिका (9 Planets Longitude)",r,o)}
    ${A("C1","नवग्रह स्पष्ट तालिका — राशि, अंश-कला-विकला, नक्षत्र-पद, अवस्था एवं चलित भाव","लाहिड़ी अयनांश + True Node")}
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
        ${e.planets.map((n,u)=>{const P=m?.planets[u]?.bhavaChalitHouse??n.houseInLagna,v=(n.shortHindi||ne[n.id]||"").trim()||ne[n.id]||"",y=lt(n.hindiName||"").normalize("NFC");return`
            <tr style="background:${u%2===0?"#FFFDF8":"#FEF6E4"};">
              <td class="pj-h2c-no-lift" style="font-weight:700; font-size: 8.1px; color:${t.cosmicNavy}; padding: 7px 6px; white-space: nowrap; line-height: 1.5;">${a(y)} <span style="white-space: nowrap;">(${a(v)})</span></td>
              <td style="font-weight:700; padding: 7px 6px;">${a(n.rashiName)}</td>
              <td style="text-align:center; font-weight:800; color:${t.saffronDeep};">${n.houseInLagna}</td>
              <td style="text-align:center; font-weight:800; color:${P!==n.houseInLagna?t.crimson:t.emerald};">${P}</td>
              <td class="pj-h2c-no-lift" style="font-family:'Segoe UI', 'Liberation Sans', Arial, sans-serif; font-variant-numeric: tabular-nums; font-weight:700; white-space: nowrap;">${a(re(n.fullDegreeDMS))}</td>
              <td>${a(n.nakshatra)} (चरण ${n.pada})</td>
              <td style="font-weight:700; color:${n.statusBadge==="shubh"?t.emerald:n.statusBadge==="upay"?t.crimson:t.saffronDeep};">${a(n.dignity)}</td>
              <td>${n.id==="rahu"||n.id==="ketu"?"स्वाभाविक गति":`${n.isRetrograde?"वक्री (*) ":""}${n.isCombust?"अस्त (^) ":""}${!n.isRetrograde&&!n.isCombust?"मार्गी":""}`}</td>
            </tr>`}).join("")}
      </tbody>
    </table>
    ${wt("navagraha")}
    <div class="book-card" style="margin-top: 8px; background: ${t.pureIvory}; border: 1.2px solid ${t.templeGold}; border-radius: 8px; padding: 9px 12px; font-size: 8.5px; line-height: 1.52;">
      <b style="color:${t.cosmicNavy};">ग्रह अवस्था संक्षेप:</b>
      0°–6° बाल/मृत (राशि अनुसार), 12°–18° युवा अवस्था (पूर्ण फलदायी), 29°–30° राशि संधि। यदि लग्न भाव और चलित भाव भिन्न हों (लाल रंग), तो ग्रह का भाव-फल चलित भाव के अनुसार भी विचारणीय होता है।
    </div>
  `;x.push({sectionCode:"C1",sectionTag:"खण्ड C : नवग्रह स्पष्ट तालिका",html:E});const U=xe(e),X=Ge(e),q=`
    ${Q("खण्ड C2 : श्रीपति भाव संधि एवं पंचधा मैत्री चक्र",r,o)}
    ${A("C2","श्रीपति द्वादश भाव स्फुट एवं संधि (True MC-Based 12 Bhava Cusps)","आरंभ • मध्य • अंत")}
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
        ${U.map((n,u)=>`
            <tr style="background:${u%2===0?"#FFFDF8":"#FEF6E4"};">
              <td style="font-weight:800; color:${t.cosmicNavy}; line-height: 1.44; overflow: visible;">${a(n.bhavaName)}</td>
              <td style="line-height: 1.44; overflow: visible;">${a(n.rashiName)} (${a(n.rashiLord)})</td>
              <td style="font-family:${R}; font-variant-numeric: tabular-nums; font-weight:700; color:${t.emerald}; white-space: nowrap; line-height: 1.48; overflow: visible;">${a(n.madhyaDMS)}</td>
              <td style="font-family:${R}; font-variant-numeric: tabular-nums; white-space: nowrap; direction: ltr; unicode-bidi: isolate; line-height: 1.48; overflow: visible;">${a(n.sandhiStartDMS)} → ${a(n.sandhiEndDMS)}</td>
            </tr>`).join("")}
      </tbody>
    </table>

    ${A("C2b","ग्रह पंचधा मैत्री चक्र (नैसर्गिक + तात्कालिक मैत्री तालिका)","अति मित्र से अति शत्रु")}
    <table class="book-table" style="font-size: 7.9px; text-align:center;">
      <thead>
        <tr>
          <th style="width: 13%; text-align:left;">ग्रह</th>
          ${Qt.map(n=>`<th style="width: 12.4%; text-align:center;">${a(n.hi)}</th>`).join("")}
        </tr>
      </thead>
      <tbody>
        ${X.map(n=>`
            <tr>
              <td style="text-align:left; font-weight:800; color:${t.cosmicNavy}; background:#FEF6E4;">${a(n.grahaHi)}</td>
              ${n.cells.map(u=>`<td style="font-weight:800; color:${u.color}; background:${u.bg};">${a(u.label)}</td>`).join("")}
            </tr>`).join("")}
      </tbody>
    </table>
    ${wt("bhava_sphut")}
  `;x.push({sectionCode:"C2",sectionTag:"खण्ड C : भाव संधि व मैत्री चक्र",html:q});const f=m?.shodashavarga||[];if(f.length>0){const n=["sun","moon","mars","mercury","jupiter","venus","saturn","rahu","ketu"],u={sun:"सूर्य",moon:"चंद्र",mars:"मंगल",mercury:"बुध",jupiter:"गुरु",venus:"शुक्र",saturn:"शनि",rahu:"राहु",ketu:"केतु"},P=F=>Pt[(F||1)-1]?.nameHi.slice(0,3)||String(F),v=`
      ${Q("खण्ड C3 : सम्पूर्ण 16 षोडशवर्ग सारणी (D1–D60)",r,o)}
      ${A("C3","सम्पूर्ण 16 षोडशवर्ग ग्रह राशि सारणी (All 16 BPHS Shodashavarga D1–D60)","बृहत् पाराशर होरा मानक")}
      <table class="book-table" style="font-size: 7.9px;">
        <thead>
          <tr>
            <th style="width: 15%;">वर्ग कुंडली</th>
            <th style="width: 8%; text-align:center;">लग्न</th>
            ${n.map(F=>`<th style="width: 7.3%; text-align:center;">${u[F]}</th>`).join("")}
            <th style="width: 11.3%; text-align:center;">संवेदनशीलता</th>
          </tr>
        </thead>
        <tbody>
          ${f.map((F,T)=>{const G=F.spec.birthTimeSensitivity==="low"?"स्थिर":F.spec.birthTimeSensitivity==="moderate"?"मध्यम":F.spec.birthTimeSensitivity==="high"?"उच्च":"अति सूक्ष्म";return`
                <tr style="background:${T%2===0?"#FFFDF8":"#FEF6E4"};">
                  <td style="font-weight:800; color:${t.cosmicNavy};">${a(F.spec.id)} ${a(F.spec.nameHi)}</td>
                  <td style="text-align:center; font-weight:800; color:${t.saffronDeep};">${F.ascendantRashiNumber}-${a(P(F.ascendantRashiNumber))}</td>
                  ${n.map(_=>{const ct=F.planetRashis[_];return`<td style="text-align:center; font-variant-numeric: tabular-nums; white-space: nowrap;">${ct}-${a(P(ct))}</td>`}).join("")}
                  <td style="text-align:center; font-weight:700; color:${F.spec.birthTimeSensitivity==="critical"?t.crimson:t.inkMuted};">${G}</td>
                </tr>`}).join("")}
        </tbody>
      </table>
      ${wt("navamsha_shodashavarga")}
    `;x.push({sectionCode:"C3",sectionTag:"खण्ड C : 16 षोडशवर्ग सारणी",html:v});const y=[{code:"C4",range:[0,4],title:"षोडशवर्ग चक्र (भाग 1/4) — D-1 लग्न, D-2 होरा, D-3 द्रेष्काण एवं D-4 चतुर्थांश",banner:!1},{code:"C5",range:[4,8],title:"षोडशवर्ग चक्र (भाग 2/4) — D-7 सप्तांश, D-9 नवांश, D-10 दशमांश एवं D-12 द्वादशांश",banner:!1},{code:"C6",range:[8,12],title:"षोडशवर्ग चक्र (भाग 3/4) — D-16 षोडशांश, D-20 विंशांश, D-24 चतुर्विंशांश एवं D-27 सप्तविंशांश",banner:!1},{code:"C7",range:[12,16],title:"षोडशवर्ग चक्र (भाग 4/4) — D-30 त्रिंशांश, D-40 खवेदांश, D-45 अक्षवेदांश एवं D-60 षष्ट्यांश",banner:!0}];for(const F of y){const T=f.slice(F.range[0],F.range[1]);if(T.length===0)continue;const G=F.banner?164:210,_=T.map(ht=>{const Lt=Le(ht.houses),Et=ht.spec.birthTimeSensitivity==="critical"?" • अति समय-संवेदनशील":ht.spec.birthTimeSensitivity==="high"?" • समय-संवेदनशील":"";return`
            <div class="book-chart-box" style="background: ${t.pureIvory}; border: 1.5px solid ${t.templeGold}; border-radius: 10px; padding: 13px 10px 10px 10px; text-align: center; overflow: visible; font-family: ${R};">
              <div style="font-size: 9.0px; font-weight: 800; color: ${t.cosmicNavy}; line-height: 1.56; padding-top: 2px; margin-bottom: 3px; overflow: visible;">
                ${a(ht.spec.id)} — ${a(ht.spec.nameHi)} (${a(ht.ascendantRashiNameHi)})
              </div>
              <div style="font-size: 7.35px; color: ${t.saffronDeep}; font-weight: 700; padding-top: 2px; margin: 3px 0 11px 0; line-height: 1.56; overflow: visible;">
                विषय: ${a(ht.spec.significationHi)}${a(Et)}
              </div>
              <div style="padding-top: 2px; overflow: visible;">
                ${_t(Lt,d,G,`${ht.spec.id} ${ht.spec.nameHi}`,s)}
              </div>
            </div>
          `}).join(""),ct=`
        ${Q(`खण्ड ${F.code} : 16 षोडशवर्ग कुंडली चक्र`,r,o)}
        ${A(F.code,F.title,"प्रति पृष्ठ 4 बड़े वर्ग चक्र")}
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 12px; overflow: visible;">
          ${_}
        </div>
        <div style="display: block; margin-top: 8px; padding: 5px 10px 6px 10px; background: ${t.templeGoldSoft}; border: 1px solid ${t.templeGold}; border-radius: 7px; font-size: 7.8px; color: ${t.cosmicNavy}; text-align: center; font-weight: 700; line-height: 1.35; font-family: ${R};">
          1–12 अंक = राशि संख्या • सू=सूर्य, चं=चंद्र, मं=मंगल, बु=बुध, गु=गुरु, शु=शुक्र, श=शनि, रा=राहु, के=केतु
        </div>
        ${F.banner?Tt("after_vargas_c",l,p):""}
      `;x.push({sectionCode:F.code,sectionTag:`खण्ड ${F.code} : षोडशवर्ग चार्ट्स`,html:ct})}}if(g){const n=g.planets.map(y=>{const F=Math.min(100,Math.round(y.totalRupas/Math.max(1,y.requiredRupas*1.45)*100)),T=y.strengthRatio>=1.15?"linear-gradient(90deg, #059669, #10B981)":y.meetsMinimum?"linear-gradient(90deg, #D97706, #F59E0B)":"linear-gradient(90deg, #DC2626, #F97316)";return`
          <div style="display: grid; grid-template-columns: 78px 1fr 110px; align-items: center; gap: 10px; padding: 5px 8px; background: #FFFDF8; border: 1px solid ${t.borderMuted}; border-radius: 7px;">
            <div style="font-size: 9px; font-weight: 800; color: ${t.cosmicNavy};">${a(y.hindiName)} (#${y.rank})</div>
            ${Yt(F,T,`${y.totalRupas.toFixed(2)} रूप`)}
            <div style="font-size: 7.9px; font-weight: 800; text-align: right; color: ${y.meetsMinimum?t.emerald:t.crimson};">
              ${y.meetsMinimum?"✓ पुष्ट":"सामान्य"} (${(y.strengthRatio*100).toFixed(0)}%)
            </div>
          </div>`}).join(""),u=`
      ${Q("खण्ड D1 : 6-अंगी पाराशरी षड्बल एवं शक्ति ग्राफ",r,o)}
      ${A("D1","6-अंगी पाराशरी षड्बल तालिका (विरूप व रूप — BPHS अध्याय 27)","1 रूप = 60 विरूप")}
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
          ${g.planets.map((y,F)=>`
              <tr style="background:${F%2===0?"#FFFDF8":"#FEF6E4"};">
                <td style="font-weight:800; color:${t.cosmicNavy};">${a(y.hindiName)}</td>
                <td style="text-align:right; font-family:monospace;">${y.sthanaBala.total.toFixed(1)}</td>
                <td style="text-align:right; font-family:monospace;">${y.digBala.toFixed(1)}</td>
                <td style="text-align:right; font-family:monospace;">${y.kalaBala.total.toFixed(1)}</td>
                <td style="text-align:right; font-family:monospace;">${y.cheshtaBala.toFixed(1)}</td>
                <td style="text-align:right; font-family:monospace;">${y.naisargikaBala.toFixed(1)}</td>
                <td style="text-align:right; font-family:monospace; color:${y.drikBala>=0?t.emerald:t.crimson};">${y.drikBala>=0?"+":""}${y.drikBala.toFixed(1)}</td>
                <td style="text-align:right; font-family:monospace; font-weight:800;">${y.totalVirupas.toFixed(1)}</td>
                <td style="text-align:right; font-family:monospace; font-weight:800; color:${y.meetsMinimum?t.emerald:t.saffronDeep};">${y.totalRupas.toFixed(2)} / ${y.requiredRupas.toFixed(1)}</td>
                <td style="font-weight:700;">#${y.rank} ${a(y.gradeHi.split(" ")[0])}</td>
              </tr>`).join("")}
        </tbody>
      </table>

      ${A("D1b","सप्तग्रह षड्बल शक्ति तुलना (Colored Strength Bars)","न्यूनतम अपेक्षित बल के सापेक्ष")}
      <div style="display: flex; flex-direction: column; gap: 6px; margin-top: 6px;">
        ${n}
      </div>
      ${wt("shadbala")}
    `;x.push({sectionCode:"D",sectionTag:"खण्ड D : 6-अंगी पाराशरी षड्बल",html:u});const P=Math.max(8,...g.bhavas.map(y=>y.totalRupas)),v=`
      ${Q("खण्ड D2 : इष्ट-कष्ट फल एवं द्वादश भाव बल",r,o)}
      ${A("D2a","सप्तग्रह इष्ट फल बनाम कष्ट फल (Ishta & Kashta Phala)","शुभत्व एवं संघर्ष अनुपात")}
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
          ${g.planets.map((y,F)=>{const T=Math.round(y.ishtaPhala/Math.max(1,y.ishtaPhala+y.kashtaPhala)*100);return`
              <tr style="background:${F%2===0?"#FFFDF8":"#FEF6E4"};">
                <td style="font-weight:800; color:${t.cosmicNavy};">${a(y.hindiName)}</td>
                <td style="text-align:right; font-family:monospace; font-weight:800; color:${t.emerald};">${y.ishtaPhala.toFixed(1)}</td>
                <td style="text-align:right; font-family:monospace; font-weight:700; color:${t.crimson};">${y.kashtaPhala.toFixed(1)}</td>
                <td>${Yt(T,T>=50?"#059669":"#D97706",`${T}% शुभ`)}</td>
                <td style="font-weight:700; color:${y.ishtaPhala>=y.kashtaPhala?t.emerald:t.saffronDeep};">${y.ishtaPhala>=y.kashtaPhala?"शुभ फल प्रधान":"परिश्रम उपरांत फल"}</td>
              </tr>`}).join("")}
        </tbody>
      </table>

      ${A("D2b","द्वादश भाव बल तालिका (12-House Parashari Bhava Bala)","भावाधिपति + दिग् + दृक् बल")}
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
          ${g.bhavas.map((y,F)=>{const T=Math.round(y.totalRupas/P*100),G=y.rank<=4?"#059669":y.rank<=8?"#D97706":"#C2410C";return`
              <tr style="background:${F%2===0?"#FFFDF8":"#FEF6E4"};">
                <td style="font-weight:800; color:${t.cosmicNavy};">${y.houseNumber}. ${a(y.bhavaTitleHi)}</td>
                <td>${a(y.rashiNameHi)} (${a(y.lordHindi)})</td>
                <td style="text-align:right; font-family:monospace;">${y.bhavadhipatiBala.toFixed(1)}</td>
                <td style="text-align:right; font-family:monospace;">${y.bhavaDigBala.toFixed(1)}</td>
                <td style="text-align:right; font-family:monospace; color:${y.bhavaDrishtiBala>=0?t.emerald:t.crimson};">${y.bhavaDrishtiBala>=0?"+":""}${y.bhavaDrishtiBala.toFixed(1)}</td>
                <td>${Yt(T,G,y.totalRupas.toFixed(2))}</td>
                <td style="font-weight:700; color:${y.rank<=4?t.emerald:t.inkPrimary};">#${y.rank} ${a(y.gradeHi.split(" ")[0])}</td>
              </tr>`}).join("")}
        </tbody>
      </table>
      ${wt("bhava_bala")}
    `;x.push({sectionCode:"D2",sectionTag:"खण्ड D : इष्ट-कष्ट व भाव बल",html:v})}const j=e.ashtakavarga;if(j){const n=((e.panchang.lagnaNumber||1)-1+12)%12,u=Array.from({length:6},(v,y)=>{const F=e.lagnaChart[y],T=e.lagnaChart[y+6],G=j.bhavaSarvashtakavarga?.[y]??j.sarvashtakavarga[(n+y)%12]??28,_=j.bhavaSarvashtakavarga?.[y+6]??j.sarvashtakavarga[(n+y+6)%12]??28;return`
        <tr style="background:${y%2===0?"#FFFDF8":"#FEF6E4"};">
          <td style="font-weight:800;">भाव ${y+1} (${a(F?.rashiName||"")})</td>
          <td style="font-weight:800; color:${G>=28?t.emerald:t.saffronDeep};">${G} बिंदु — ${G>=30?"अति पुष्ट":G>=28?"संतुलित शुभ":"अतिरिक्त प्रयास"}</td>
          <td style="font-weight:800;">भाव ${y+7} (${a(T?.rashiName||"")})</td>
          <td style="font-weight:800; color:${_>=28?t.emerald:t.saffronDeep};">${_} बिंदु — ${_>=30?"अति पुष्ट":_>=28?"संतुलित शुभ":"अतिरिक्त प्रयास"}</td>
        </tr>`}).join(""),P=`
      ${Q("खण्ड E : अष्टकवर्ग एवं सर्वाष्टकवर्ग (337 बिंदु)",r,o)}
      ${A("E1","सप्तग्रह भिन्नाष्टकवर्ग (BAV) एवं सर्वाष्टकवर्ग (SAV) सारणी",`कुल योग: ${j.totalBindusSum} बिंदु`)}
      <table class="book-table" style="font-size: 8px; text-align:center;">
        <thead>
          <tr>
            <th style="width: 16%; text-align:left;">ग्रह / वर्ग</th>
            ${Pt.map(v=>`<th style="width: 6.4%; text-align:center;">${v.number}<br/>${a(v.nameHi.slice(0,3))}</th>`).join("")}
            <th style="width: 7.2%; text-align:right;">योग</th>
          </tr>
        </thead>
        <tbody>
          ${Object.entries(j.planetBindus).map(([v,y],F)=>{const T=y.reduce((G,_)=>G+_,0);return`
                <tr style="background:${F%2===0?"#FFFDF8":"#FEF6E4"};">
                  <td style="text-align:left; font-weight:800; color:${t.cosmicNavy};">${a(v)}</td>
                  ${y.map(G=>`<td style="font-family:monospace; font-weight:${G>=5?800:600}; color:${G>=5?t.emerald:G<=2?t.crimson:t.inkPrimary};">${G}</td>`).join("")}
                  <td style="text-align:right; font-family:monospace; font-weight:800;">${T}</td>
                </tr>`}).join("")}
          <tr style="background:${t.templeGoldSoft}; font-weight:900;">
            <td style="text-align:left; color:${t.cosmicNavy};">सर्वाष्टकवर्ग (SAV)</td>
            ${j.sarvashtakavarga.map(v=>`<td style="font-family:monospace; color:${v>=30?t.emerald:v<25?t.crimson:t.saffronDeep};">${v}</td>`).join("")}
            <td style="text-align:right; font-family:monospace; color:${t.cosmicNavy};">${j.totalBindusSum}</td>
          </tr>
        </tbody>
      </table>

      ${A("E2","द्वादश भावों में सर्वाष्टकवर्ग बिंदु स्थिति","28+ बिंदु = शुभ व फलदायी")}
      <table class="book-table" style="font-size: 8.1px;">
        <colgroup>
          <col style="width: 21%;" />
          <col style="width: 29%;" />
          <col style="width: 21%;" />
          <col style="width: 29%;" />
        </colgroup>
        <tbody>${u}</tbody>
      </table>
      <div class="book-card" style="margin-top:6px; background:${t.pureIvory}; border:1.2px solid ${t.templeGold}; border-radius:7px; padding:7px 10px; font-size:8.2px; line-height:1.45;">
        <div><b style="color:${t.emerald};">✦ सर्वाधिक प्रबल राशियाँ (30+ बिंदु):</b> ${a(j.strongestRashis.join(" • ")||"—")}</div>
        <div style="margin-top:2px;"><b style="color:${t.saffronDeep};">✦ अतिरिक्त ध्यान योग्य राशियाँ (&lt;28 बिंदु):</b> ${a(j.weakestRashis.join(" • ")||"—")}</div>
      </div>
      ${wt("ashtakavarga")}
      ${Tt("after_ashtakavarga_e",l,p)}
    `;x.push({sectionCode:"E",sectionTag:"खण्ड E : अष्टकवर्ग (337 बिंदु)",html:P})}const L=c?.vimshottari,B=`
    ${Q("खण्ड F1 : विंशोत्तरी महादशा चक्र एवं 4-स्तरीय सक्रिय दशा",r,o)}
    ${A("F1","विंशोत्तरी महादशा (120 वर्षीय चक्र) एवं वर्तमान सक्रिय 4-स्तरीय दशा",L?L.balanceAtBirthHi:"जन्म नक्षत्र आधारित")}
    ${L?`<div style="display:grid; grid-template-columns: repeat(4, 1fr); gap: 7px; margin-bottom: 8px;">
             ${[["वर्तमान महादशा",L.activeMahadasha],["वर्तमान अंतर्दशा",L.activeAntardasha],["वर्तमान प्रत्यंतर",L.activePratyantardasha],["वर्तमान सूक्ष्म दशा",L.activeSookshmadasha]].map(([n,u])=>`
                 <div class="book-cover-pillar-card" style="display: flex; flex-direction: column; justify-content: center; background:${t.cosmicNavy}; color:${t.warmIvory}; border:1.3px solid ${t.templeGold}; border-radius:8px; padding:6px 9px; box-sizing:border-box;">
                   <div style="display:block; font-size:7.6px; color:#FCD34D; font-weight:700; line-height:1.25;">${a(n)}</div>
                   <div style="display:block; font-size:11px; font-weight:800; margin-top:3px; line-height:1.25;">${a(u.lordHindi)}</div>
                   <div style="display:block; font-size:7.3px; color:#CBD5E1; font-variant-numeric: tabular-nums; margin-top:3px; line-height:1.25;">${a(u.startDateHi)} – ${a(u.endDateHi)}</div>
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
        ${e.mahadashas.map((n,u)=>`
            <tr style="background:${n.isCurrent?t.emeraldSoft:u%2===0?"#FFFDF8":"#FEF6E4"};">
              <td style="font-weight:800; color:${n.isCurrent?t.emerald:t.cosmicNavy};">${a(n.planet)}${n.isCurrent?" ★":""}</td>
              <td style="text-align:center; font-family:monospace;">${n.years}</td>
              <td style="font-family:monospace; font-weight:700;">${a(n.startYear)} – ${a(n.endYear)}</td>
              <td>${a(n.prediction)}</td>
            </tr>`).join("")}
      </tbody>
    </table>

    ${L&&L.activeAntardashaPratyantars.length>0?`
          ${A("F1b",`वर्तमान सक्रिय प्रत्यंतर दशा (${L.activeMahadasha.lordHindi} – ${L.activeAntardasha.lordHindi})`,"सूक्ष्म काल गणना")}
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
              ${L.activeAntardashaPratyantars.map((n,u)=>`
                  <tr style="background:${n.isCurrent?t.emeraldSoft:u%2===0?"#FFFDF8":"#FEF6E4"};">
                    <td style="font-weight:800; color:${n.isCurrent?t.emerald:t.cosmicNavy};">${a(n.lordHindi)}${n.isCurrent?" (सक्रिय)":""}</td>
                    <td style="font-variant-numeric: tabular-nums; white-space: nowrap;">${a(n.startDateHi)}</td>
                    <td style="font-variant-numeric: tabular-nums; white-space: nowrap;">${a(n.endDateHi)}</td>
                    <td style="text-align:right; font-variant-numeric: tabular-nums; white-space: nowrap; font-weight: 700;">${Math.max(1,Math.round(Number(n.durationDays)||0))} दिन</td>
                  </tr>`).join("")}
            </tbody>
          </table>`:""}
    ${wt("dasha_vimshottari")}
  `;if(x.push({sectionCode:"F1",sectionTag:"खण्ड F : विंशोत्तरी महादशा",html:B}),L&&L.mahadashas.length>0){const n=L.mahadashas.slice(0,9),u=[{code:"F2",tag:"खण्ड F2 : विंशोत्तरी अंतर्दशा (भाग 1/4)",items:n.slice(0,2)},{code:"F3",tag:"खण्ड F3 : विंशोत्तरी अंतर्दशा (भाग 2/4)",items:n.slice(2,4)},{code:"F4",tag:"खण्ड F4 : विंशोत्तरी अंतर्दशा (भाग 3/4)",items:n.slice(4,6)},{code:"F5",tag:"खण्ड F5 : विंशोत्तरी अंतर्दशा (भाग 4/4)",items:n.slice(6,9)}];for(const P of u){if(P.items.length===0)continue;const v=P.items.length>=3,y=P.items.map(F=>`
          <div style="margin-bottom: ${v?5:11}px;">
            ${v?`<div class="book-section-bar" style="display: flex; align-items: center; justify-content: space-between; gap: 8px; background: linear-gradient(90deg, ${t.cosmicNavy} 0%, #1E293B 70%, ${t.saffronDeep} 100%); color: #FFF8E7; padding: 4.5px 10px; border-radius: 6px; margin: 4px 0 3px 0; border-left: 3.5px solid ${t.templeGold};">
                  <div style="display: flex; align-items: center; gap: 7px; min-width: 0;">
                    <span class="pj-h2c-no-lift" style="background: ${t.templeGold}; color: ${t.cosmicNavy}; font-weight: 800; font-size: 7.4px; padding: 1.5px 6px; border-radius: 999px; white-space: nowrap;">${a(F.lordHindi)} महादशा</span>
                    <span class="pj-h2c-no-lift" style="font-weight: 800; font-size: 8.6px; color: #FFFBEB; line-height: 1.3;">${a(F.lordHindi)} महादशा के अंतर्गत सभी 9 अंतर्दशाएँ (${a(F.startDateHi)} – ${a(F.endDateHi)})</span>
                  </div>
                  <span class="pj-h2c-no-lift" style="font-size: 7.2px; font-weight: 700; color: #FDE68A; white-space: nowrap;">${F.isCurrent?"वर्तमान सक्रिय महादशा":`${F.durationYears.toFixed(1)} वर्ष`}</span>
                </div>`:A(`${F.lordHindi} महादशा`,`${F.lordHindi} महादशा के अंतर्गत सभी 9 अंतर्दशाएँ (${F.startDateHi} – ${F.endDateHi})`,F.isCurrent?"वर्तमान सक्रिय महादशा":`${F.durationYears.toFixed(1)} वर्ष`)}
            <div class="pj-h2c-no-lift" style="font-size: ${v?7.2:8.1}px; color: ${t.saffronDeep}; font-weight: 700; margin-bottom: ${v?3:4}px; padding: 0 2px; line-height: 1.35;">
              महादशा प्रभाव: ${a(F.effectHi)}
            </div>
            <table class="book-table" style="font-size: ${v?7:7.9}px; width: 100%; table-layout: fixed; margin-bottom: ${v?2:6}px;">
              <thead>
                <tr>
                  <th style="width: 16%; padding: ${v?"3.5px 6px":"5px 7px"};">अंतर्दशा</th>
                  <th style="width: 16%; padding: ${v?"3.5px 6px":"5px 7px"};">आरंभ तिथि</th>
                  <th style="width: 16%; padding: ${v?"3.5px 6px":"5px 7px"};">समाप्ति तिथि</th>
                  <th style="width: 52%; padding: ${v?"3.5px 6px":"5px 7px"};">प्रमुख फल संकेत</th>
                </tr>
              </thead>
              <tbody>
                ${[...F.antardashas].sort((T,G)=>(T.startUtcMs??0)-(G.startUtcMs??0)).map((T,G)=>{const{startLabel:_,endLabel:ct}=Zt(T.startDateHi,T.endDateHi,T.startUtcMs,T.endUtcMs);return`
                    <tr style="background:${T.isCurrent?t.emeraldSoft:G%2===0?"#FFFDF8":"#FEF6E4"};">
                      <td class="pj-h2c-no-lift" style="font-weight:700; color:${T.isCurrent?t.emerald:t.cosmicNavy}; padding: ${v?"3.2px 6px":"4.8px 7px"}; vertical-align: top; line-height: 1.38; direction: ltr; unicode-bidi: isolate;">
                        <div class="pj-h2c-no-lift" style="display: block; line-height: 1.38; white-space: nowrap;">${a(F.lordHindi)} – ${a(T.lordHindi)}${T.isCurrent?" (सक्रिय)":""}</div>
                      </td>
                      <td class="pj-h2c-no-lift" style="font-variant-numeric: tabular-nums; white-space: nowrap; padding: ${v?"3.2px 6px":"4.8px 7px"}; vertical-align: top; line-height: 1.38; direction: ltr; unicode-bidi: isolate; text-align: left; font-weight: 700;">
                        <div class="pj-h2c-no-lift" style="display: block; line-height: 1.38; direction: ltr; unicode-bidi: isolate;">${a(_)}</div>
                      </td>
                      <td class="pj-h2c-no-lift" style="font-variant-numeric: tabular-nums; white-space: nowrap; padding: ${v?"3.2px 6px":"4.8px 7px"}; vertical-align: top; line-height: 1.38; direction: ltr; unicode-bidi: isolate; text-align: left; font-weight: 700;">
                        <div class="pj-h2c-no-lift" style="display: block; line-height: 1.38; direction: ltr; unicode-bidi: isolate;">${a(ct)}</div>
                      </td>
                      <td class="pj-h2c-no-lift" style="padding: ${v?"3.2px 6px":"4.8px 7px"}; vertical-align: top; line-height: 1.38;">
                        <div class="pj-h2c-no-lift" style="display: block; line-height: 1.38; word-break: normal; overflow-wrap: break-word;">${a(We[T.lordHindi]||"संतुलित कर्म व धैर्य से शुभ परिणाम।")}</div>
                      </td>
                    </tr>`}).join("")}
              </tbody>
            </table>
          </div>
        `).join("");x.push({sectionCode:P.code,sectionTag:P.tag,html:`
          ${Q(P.tag,r,o)}
          ${y}
        `})}}if(c){const n=`
      ${Q("खण्ड F6 : 36-वर्षीय योगिनी दशा एवं जैमिनी चर दशा",r,o)}
      ${A("F6a","योगिनी दशा चक्र (36-वर्षीय पाराशरी प्रणाली)",`सक्रिय: ${c.yogini.activeMahadasha.yoginiNameHi} → ${c.yogini.activeAntardasha.yoginiNameHi}`)}
      <table class="book-table" style="font-size: 7.4px; width: 100%; table-layout: fixed; font-family: ${R};">
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
          ${[...c.yogini.mahadashas].sort((u,P)=>(u.startUtcMs??0)-(P.startUtcMs??0)).slice(0,10).map((u,P)=>{const v=String(u.yoginiNameHi||"").replace(/थान्या|धान्य(?!ा)/g,"धान्या").trim(),y=v==="धान्या"?"गुरु":u.lordHindi,F=D.deduplicateParagraph(u.effectHi,"dasha",`yogini|${P}|${v}`),{startLabel:T,endLabel:G}=Zt(u.startDateHi,u.endDateHi,u.startUtcMs,u.endUtcMs);return`
              <tr style="background:${u.isCurrent?t.emeraldSoft:P%2===0?"#FFFDF8":"#FEF6E4"};">
                <td class="pj-h2c-no-lift" style="font-weight:800; color:${u.isCurrent?t.emerald:t.cosmicNavy};">${a(v)} (${a(y)})${u.isCurrent?" ★":""}</td>
                <td class="pj-h2c-no-lift" style="text-align:center; font-variant-numeric: tabular-nums;">${u.years}</td>
                <td class="pj-h2c-no-lift" style="font-weight:700; color:${u.natureHi==="शुभ"?t.emerald:u.natureHi==="मिश्रित"?t.saffronDeep:t.crimson};">${a(u.natureHi)}</td>
                <td class="pj-h2c-no-lift" style="white-space: nowrap; font-variant-numeric: tabular-nums; font-weight: 700; direction: ltr; unicode-bidi: isolate; text-align: left;">${a(T)}</td>
                <td class="pj-h2c-no-lift" style="white-space: nowrap; font-variant-numeric: tabular-nums; font-weight: 700; direction: ltr; unicode-bidi: isolate; text-align: left;">${a(G)}</td>
                <td class="pj-h2c-no-lift">${a(F)}</td>
              </tr>`}).join("")}
        </tbody>
      </table>

      ${A("F6b","जैमिनी सप्त चर कारक (AK–DK) एवं राशि चर दशा",`सक्रिय: ${c.jaimini.activeMahadasha.rashiNameHi} → ${c.jaimini.activeAntardasha.rashiNameHi}`)}
      <div style="display:grid; grid-template-columns: repeat(4, 1fr); gap: 6px; margin-bottom: 7px;">
        ${c.jaimini.karakas.map(u=>`
            <div style="background:${t.pureIvory}; border:1.1px solid ${t.templeGold}; border-radius:6px; padding:5px 7px; font-size:7.6px;">
              <div style="font-weight:800; color:${t.saffronDeep};">${a(u.code)} • ${a(u.nameHi)}</div>
              <div class="pj-h2c-no-lift" style="font-weight:800; color:${t.cosmicNavy}; font-size:8.6px;">${a(u.planetHindi)} <span class="pj-h2c-no-lift" style="font-family:'Segoe UI','Liberation Sans',Arial,sans-serif; font-variant-numeric:tabular-nums; font-weight:600; color:${t.inkMuted};">(${a(u.degDMS)})</span></div>
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
          ${c.jaimini.charaDasha.slice(0,8).map((u,P)=>{const{startLabel:v,endLabel:y}=Zt(u.startDateHi,u.endDateHi,u.startUtcMs,u.endUtcMs);return`
              <tr style="background:${u.isCurrent?t.emeraldSoft:P%2===0?"#FFFDF8":"#FEF6E4"};">
                <td class="pj-h2c-no-lift" style="font-weight:800;">${u.rashiNumber}. ${a(u.rashiNameHi)}${u.isCurrent?" ★":""}</td>
                <td class="pj-h2c-no-lift">${a(u.effectiveLordHindi)}</td>
                <td class="pj-h2c-no-lift" style="text-align:center; font-family:monospace;">${u.durationYears}</td>
                <td class="pj-h2c-no-lift" style="white-space: nowrap; font-variant-numeric: tabular-nums; font-weight: 700; direction: ltr; unicode-bidi: isolate; text-align: left;">${a(v)}</td>
                <td class="pj-h2c-no-lift" style="white-space: nowrap; font-variant-numeric: tabular-nums; font-weight: 700; direction: ltr; unicode-bidi: isolate; text-align: left;">${a(y)}</td>
                <td class="pj-h2c-no-lift">${a(u.lordStrengthRuleNoteHi)}</td>
              </tr>`}).join("")}
        </tbody>
      </table>
      ${wt("dasha_yogini")}
    `;x.push({sectionCode:"F6",sectionTag:"खण्ड F : योगिनी एवं जैमिनी दशा",html:n})}const Y=e.deepAnalysis?.allTwelveBhavas||[],Z=n=>n.map(u=>`
        <div class="book-card" style="background: ${t.pureIvory}; border: 1.3px solid ${t.templeGold}; border-left: 4px solid ${u.strengthLabel==="प्रबल"?t.emerald:u.strengthLabel==="शुभ"?t.saffron:t.templeGoldDark}; border-radius: 8px; padding: 9px 11px; margin-bottom: 8px;">
          <div style="display: table; width: 100%; margin-bottom: 4px;">
            <div style="display: table-cell; vertical-align: middle; text-align: left; font-size: 9.8px; font-weight: 900; color: ${t.cosmicNavy}; padding-right: 8px;">
              भाव ${u.house} — ${a(u.bhavaName)} (${a(u.rashi)} राशि)
            </div>
            <div style="display: table-cell; vertical-align: middle; text-align: right; white-space: nowrap; width: 1%;">
              <span class="book-pill" style="${Mt} font-size: 7.8px; font-weight: 800; padding-left: 9px; padding-right: 9px; border-radius: 999px; white-space: nowrap; background: ${u.strengthLabel==="प्रबल"?t.emeraldSoft:t.saffronSoft}; color: ${u.strengthLabel==="प्रबल"?t.emerald:t.saffronDeep};">
                <span style="${St}">स्थिति: ${a(u.strengthLabel)}</span>
              </span>
            </div>
          </div>
          <div style="font-size: 8.1px; color: ${t.saffronDeep}; font-weight: 700; margin-bottom: 3px;">
            भावेश: ${a(u.lord)} (स्थित भाव: ${u.lordPlacementHouse}) &nbsp;|&nbsp; स्थित ग्रह: ${a(u.occupants||"रिक्त (भावेश व दृष्टि से फल)")}
          </div>
          <div style="font-size: 8.6px; color: ${t.inkPrimary}; line-height: 1.52;">
            ${a(D.deduplicateParagraph(u.prediction,"gochar",`bhava|${u.house}|${u.rashi}`))}
          </div>
        </div>`).join(""),O=`
    ${Q("खण्ड G1 : द्वादश भाव फल (प्रथम से षष्ठ भाव)",r,o)}
    ${A("G1","द्वादश भाव फल विश्लेषण — भाव 1 से भाव 6 (तनु, धन, पराक्रम, सुख, संतान, शत्रु)",`${e.panchang.lagnaName} लग्न`)}
    ${Z(Y.slice(0,6))}
    ${Kt("भाव फल कैसे पढ़ें?","प्रत्येक भाव का फल तीन आधारों पर देखा जाता है: (1) उस भाव की राशि व स्वामी (भावेश) की स्थिति, (2) भाव में बैठे ग्रह, और (3) उस भाव पर पड़ने वाली शुभ या क्रूर ग्रहों की दृष्टि। रिक्त भाव का अर्थ अशुभ नहीं होता — उसका फल भावेश की स्थिति से मिलता है।","प्रबल व शुभ भाव जीवन के उन क्षेत्रों को दर्शाते हैं जहाँ कम प्रयास में भी उत्तम सफलता मिलती है।")}
  `;x.push({sectionCode:"G1",sectionTag:"खण्ड G : द्वादश भाव फल (1–6)",html:O});const st=`
    ${Q("खण्ड G2 : द्वादश भाव फल (सप्तम से द्वादश भाव)",r,o)}
    ${A("G2","द्वादश भाव फल विश्लेषण — भाव 7 से भाव 12 (विवाह, आयु, भाग्य, कर्म, लाभ, व्यय)",`${e.panchang.lagnaName} लग्न`)}
    ${Z(Y.slice(6,12))}
  `;x.push({sectionCode:"G2",sectionTag:"खण्ड G : द्वादश भाव फल (7–12)",html:st});const $t=n=>{const u=Object.entries(qe).find(([P])=>n.hindiName.includes(P))?.[1]||"जन्म कुंडली में विशिष्ट कर्मफल व जीवन दिशा प्रदान करने वाला ग्रह।";return`
      <div class="book-card pj-h2c-no-lift" style="background: ${t.pureIvory}; border: 1.3px solid ${t.templeGold}; border-radius: 9px; padding: 10px 12px; margin-bottom: 9px;">
        <div style="display: table; width: 100%; border-bottom: 1px solid ${t.borderMuted}; padding-bottom: 4px; margin-bottom: 5px;">
          <div class="pj-h2c-no-lift" style="display: table-cell; vertical-align: middle; text-align: left; font-size: 10px; font-weight: 900; color: ${t.cosmicNavy}; padding-right: 8px; direction: ltr; unicode-bidi: isolate;">
            ✦ ${a(n.hindiName)} विचार — ${a(n.rashiName)} राशि, भाव ${n.houseInLagna} ${Ut(`(${n.fullDegreeDMS})`)}
          </div>
          <div style="display: table-cell; vertical-align: middle; text-align: right; white-space: nowrap; width: 1%;">
            <span class="book-pill pj-h2c-no-lift" style="${Mt} font-size: 7.8px; font-weight: 800; padding-left: 9px; padding-right: 9px; border-radius: 999px; white-space: nowrap; background: ${n.statusBadge==="shubh"?t.emeraldSoft:n.statusBadge==="upay"?t.crimsonSoft:t.saffronSoft}; color: ${n.statusBadge==="shubh"?t.emerald:n.statusBadge==="upay"?t.crimson:t.saffronDeep};">
              <span style="${St}">${a(n.dignity)}${n.id!=="rahu"&&n.id!=="ketu"&&n.isRetrograde?" • वक्री (*)":""}${n.isCombust?" • अस्त (^)":""}</span>
            </span>
          </div>
        </div>
        <div class="pj-h2c-no-lift" style="font-size: 8.2px; color: ${t.saffronDeep}; font-weight: 700; margin-bottom: 3px;">
          नक्षत्र: ${a(n.nakshatra)} (चरण ${n.pada}) &nbsp;|&nbsp; कारकत्व: ${a(u)}
        </div>
        <div class="pj-h2c-no-lift" style="font-size: 8.6px; color: ${t.inkPrimary}; line-height: 1.54; direction: ltr; unicode-bidi: isolate;">
          ${Ut(D.deduplicateParagraph(n.houseEffect||`${n.hindiName} आपकी कुंडली के ${n.houseInLagna}वें भाव में ${n.rashiName} राशि में स्थित होकर ${n.dignity} अवस्था में फल प्रदान कर रहे हैं।`,"gochar",`graha|${n.id}|${n.houseInLagna}`))}
        </div>
      </div>`},dt=`
    ${Q("खण्ड G3 : नवग्रह विचार (सूर्य से गुरु तक)",r,o)}
    ${A("G3","नवग्रह विचार (भाग 1/2) — सूर्य, चंद्र, मंगल, बुध एवं गुरु का विस्तृत प्रभाव","भाव एवं अवस्था आधारित")}
    ${e.planets.slice(0,5).map($t).join("")}
  `;x.push({sectionCode:"G3",sectionTag:"खण्ड G : नवग्रह विचार (1–5)",html:dt});const J=`
    ${Q("खण्ड G4 : नवग्रह विचार (शुक्र से केतु) एवं शुभ राजयोग",r,o)}
    ${A("G4a","नवग्रह विचार (भाग 2/2) — शुक्र, शनि, राहु एवं केतु","भाव एवं अवस्था आधारित")}
    ${e.planets.slice(5,9).map($t).join("")}
    ${A("G4b","कुंडली में निर्मित प्रमुख शास्त्रीय योग एवं राजयोग",`${e.rajYogas.length} योग पहचानित`)}
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
      ${e.rajYogas.slice(0,6).map(n=>`
          <div class="book-card" style="background:${t.pureIvory}; border:1.2px solid ${t.templeGold}; border-radius:8px; padding:7.5px 9.5px; font-size:8px; line-height:1.45;">
            <div style="display:table; width:100%;">
              <div style="display:table-cell; vertical-align:middle; text-align:left; padding-right:4px;"><b style="color:${t.cosmicNavy}; font-size:8.8px;">${a(n.name)}</b></div>
              <div style="display:table-cell; vertical-align:middle; text-align:right; white-space:nowrap; width:1%;"><span class="book-pill" style="${Mt} padding-left: 7px; padding-right: 7px; border-radius: 999px; background: ${t.emeraldSoft}; color:${t.emerald}; font-weight:800; font-size:7.4px; white-space: nowrap;"><span style="${St}">${a(n.strength)}</span></span></div>
            </div>
            <div style="color:${t.saffronDeep}; font-size:7.4px; margin-top:1px;">${a(n.sanskritRule)}</div>
            <div style="margin-top:3px; color:${t.inkPrimary};">${a(n.description)}</div>
          </div>`).join("")}
    </div>
  `;if(x.push({sectionCode:"G4",sectionTag:"खण्ड G : नवग्रह व राजयोग",html:J}),c){const n=`
      ${Q("खण्ड G5 : 5 शास्त्रीय दोष एवं परिहार (भंग) परीक्षण",r,o)}
      ${A("G5","नियम-आधारित 5 प्रमुख दोष परीक्षण — मंगल, कालसर्प, पितृ, ग्रहण एवं केमद्रुम","परिहार नियमों सहित निष्पक्ष विश्लेषण")}
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
          ${c.yogasAndDoshas.doshas.allList.map((v,y)=>{const F=v.effectiveStatus==="दोष मुक्त",T=v.pariharRulesHi.length>0?`<div style="margin-top:3px; color:${t.emerald}; font-weight:700;">✓ परिहार नियम: ${a(v.pariharRulesHi.join("; "))}</div>`:"";return`
                <tr style="background:${y%2===0?"#FFFDF8":"#FEF6E4"};">
                  <td style="font-weight:800; color:${t.cosmicNavy}; padding: 8px 7px;">${a(v.nameHi)}${v.subTypeHi?`<div style="font-size:7.4px; color:${t.inkMuted}; margin-top:2px;">${a(v.subTypeHi)}</div>`:""}</td>
                  <td style="font-weight:800; padding: 8px 7px; color:${F?t.emerald:v.effectiveStatus==="आंशिक / परिहार युक्त"?t.saffronDeep:t.crimson};">${a(v.effectiveStatus)}</td>
                  <td style="padding: 8px 7px; line-height:1.48;">${a(v.explanationHi)}${T}</td>
                  <td style="padding: 8px 7px; line-height:1.48;">${a(v.remedyHi)}</td>
                </tr>`}).join("")}
        </tbody>
      </table>
      ${wt("dosha_parihar_gochar")}
    `;x.push({sectionCode:"G5",sectionTag:"खण्ड G : 5 दोष व परिहार",html:n});const u=Ue(e),P=`
      ${Q("खण्ड G6 : सम्पूर्ण जीवन साढ़ेसाती एवं लाइव ग्रह गोचर",r,o)}
      ${A("G6a",`सम्पूर्ण जीवन शनि साढ़ेसाती आवर्तन तालिका (${e.panchang.moonRashiName} चंद्र राशि)`,c.liveGochar.sadeSatiLabelHi)}
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
          ${u.slice(0,9).map((v,y)=>`
              <tr style="background:${y%2===0?"#FFFDF8":"#FEF6E4"};">
                <td style="font-weight:800; color:${t.cosmicNavy};">${a(v.cycleLabel)}</td>
                <td style="font-weight:700; color:${t.saffronDeep};">${a(v.phaseLabel)}</td>
                <td>${a(v.saturnRashi)}</td>
                <td style="font-variant-numeric: tabular-nums; font-weight:700; white-space: nowrap;">${a(v.approxPeriod)}</td>
                <td style="font-variant-numeric: tabular-nums; white-space: nowrap;">${a(v.ageSpan)}</td>
                <td>${a(v.guidanceHi)}</td>
              </tr>`).join("")}
        </tbody>
      </table>

      ${A("G6b",`लाइव निरयण ग्रह गोचर (${c.liveGochar.computedAtDateHi})`,"चंद्र एवं लग्न सापेक्ष")}
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
          ${c.liveGochar.grahaRows.map((v,y)=>`
              <tr style="background:${y%2===0?"#FFFDF8":"#FEF6E4"};">
                <td class="pj-h2c-no-lift" style="font-weight:700; color:${t.cosmicNavy};">${a(lt(v.nameHi).normalize("NFC"))}${v.id!=="rahu"&&v.id!=="ketu"&&v.isRetrograde?" (व)":""}${v.id!=="moon"&&v.isCombust?" (अ)":""}</td>
                <td class="pj-h2c-no-lift" style="white-space: nowrap; line-height: 1.5; padding: 5.5px 6px; overflow: visible;"><span style="font-family:${R}; font-weight:700; color:${t.cosmicNavy};">${a(lt(v.currentRashiNameHi).normalize("NFC"))}</span>&nbsp;<span style="font-family:'Segoe UI', 'Liberation Sans', Arial, sans-serif; font-variant-numeric: tabular-nums; font-weight:700; font-size:7.35px; color:${t.inkPrimary};">${a(re(v.degDMS))}</span></td>
                <td style="text-align:center; font-weight:800; color:${t.emerald};">${v.houseFromNatalMoon}</td>
                <td style="text-align:center; font-weight:700;">${v.houseFromNatalLagna}</td>
                <td style="font-weight:700; color:${v.hasVedha?t.saffronDeep:v.isFavorableFromMoon?t.emerald:t.inkMuted};">${v.hasVedha?`वेध (${a(v.vedhaByHi.join(", "))})`:v.isFavorableFromMoon?"शुभ गोचर":"सामान्य"}</td>
                <td>${a(v.effectSummaryHi)}</td>
              </tr>`).join("")}
        </tbody>
      </table>
      ${Tt("after_gochar_g",l,p)}
    `;x.push({sectionCode:"G6",sectionTag:"खण्ड G : साढ़ेसाती एवं लाइव गोचर",html:P})}x.push(Se(e,w));for(const n of ze(e,w))x.push(n);x.push(je(e,w));const V=ye(e),at=`
    ${Q("खण्ड H1 : शुद्ध सात्विक वैदिक उपाय, रत्न एवं रुद्राक्ष",r,o)}
    ${A("H1a","लग्नेश आधारित प्रामाणिक रत्न, रुद्राक्ष एवं भाग्यवर्धक तत्व",`${e.panchang.lagnaName} लग्न`)}
    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 9px; margin-bottom: 9px;">
      <div class="book-card" style="background:${t.pureIvory}; border:1.4px solid ${t.templeGold}; border-radius:9px; padding:9px 11px; font-size:8.3px; line-height:1.5;">
        <div style="font-weight:800; color:${t.saffronDeep};">जीवन रत्न एवं भाग्य रत्न</div>
        <div style="font-weight:900; color:${t.cosmicNavy}; font-size:9.5px; margin-top:2px;">${a(V.jeevanRatna)}</div>
        <div style="margin-top:3px;"><b>भाग्य रत्न:</b> ${a(V.bhagyaRatna)}</div>
        <div><b>धारण विधि:</b> ${a(V.metalAndFinger)}</div>
      </div>
      <div class="book-card" style="background:${t.pureIvory}; border:1.4px solid ${t.templeGold}; border-radius:9px; padding:9px 11px; font-size:8.3px; line-height:1.5;">
        <div style="font-weight:800; color:${t.saffronDeep};">कल्याणकारी रुद्राक्ष</div>
        <div style="font-weight:900; color:${t.cosmicNavy}; font-size:9.5px; margin-top:2px;">${a(V.primaryRudraksha)}</div>
        <div style="margin-top:2px; font-size:7.9px;"><b>सहायक:</b> ${a(V.secondaryRudraksha)}</div>
        <div style="margin-top:3px;"><b>इष्टदेव:</b> ${a(e.lucky.ishtaDevta)}</div>
        <div><b>शुभ वार / रंग:</b> ${a(e.lucky.luckyDays)} • ${a(e.lucky.luckyColors)}</div>
      </div>
      <div class="book-card" style="background:${t.pureIvory}; border:1.4px solid ${t.templeGold}; border-radius:9px; padding:9px 11px; font-size:8.3px; line-height:1.55;">
        <div style="font-weight:800; color:${t.saffronDeep};">दैनिक सिद्ध बीज मंत्र</div>
        <div class="book-beej-mantra" style="font-weight:700; color:${t.emerald}; font-size:9px; margin-top:4px; line-height:1.65; padding: 2px 0; overflow: visible;">
          ${a(Xt(e.lucky.beejMantra))}
        </div>
        <div style="margin-top:4px;"><b>शुभ अंक व दिशा:</b> ${a(e.lucky.luckyNumbers)} • ${a(e.lucky.luckyDirection)}</div>
      </div>
    </div>

    ${A("H1b","व्यक्तिगत शुद्ध सात्विक वैदिक उपाय (कोई तांत्रिक या भय-आधारित क्रिया नहीं)","धार्मिक, सरल एवं शास्त्रसम्मत")}
    <div class="book-card" style="background:${t.pureIvory}; border:1.3px solid ${t.templeGold}; border-radius:9px; padding:10px 13px; font-size:8.4px; line-height:1.62; margin-bottom: 9px;">
      ${D.deduplicateBullets(e.remedies.upayList,"remedy",`h1b|${e.panchang.lagnaNumber}`).slice(0,6).map((n,u)=>`<div style="margin-top:${u===0?0:4.5}px;"><b style="color:${t.saffronDeep};">${u+1}.</b> ${a(Xt(n))}</div>`).join("")}
    </div>

    ${A("H1c","नवग्रह सात्विक मंत्र एवं दान संदर्भ तालिका","आवश्यकतानुसार जप व दान")}
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
        ${Oe.map((n,u)=>`
          <tr style="background:${u%2===0?"#FFFDF8":"#FEF6E4"};">
            <td class="pj-h2c-no-lift" style="font-weight:700; color:${t.cosmicNavy}; padding: 6px 7px; line-height: 1.55; white-space: nowrap;">${a(lt(n.graha).normalize("NFC"))}</td>
            <td class="book-beej-mantra pj-h2c-no-lift" style="font-weight:600; font-size: 8.05px; color:${t.emerald}; padding: 6px 8px; line-height: 1.7; overflow: visible; white-space: nowrap; word-break: keep-all; overflow-wrap: normal;"><span class="pj-h2c-no-lift" style="display: inline-block; white-space: nowrap; direction: ltr; unicode-bidi: isolate;">${a(Xt(n.mantra))}</span></td>
            <td class="pj-h2c-no-lift" style="font-weight:500; color:${t.inkPrimary}; padding: 6px 8px; line-height: 1.55; white-space: normal;">${a(lt(n.daan).normalize("NFC"))}</td>
            <td class="pj-h2c-no-lift" style="font-weight:600; color:${t.saffronDeep}; padding: 6px 7px; line-height: 1.55; white-space: nowrap;">${a(lt(n.day).normalize("NFC"))}</td>
          </tr>`).join("")}
      </tbody>
    </table>
  `;x.push({sectionCode:"H",sectionTag:"खण्ड H : शुद्ध सात्विक वैदिक उपाय",html:at}),x.push(Ce(e,w));const tt=e.lagnaChart.find(n=>n.houseNumber===4),ut=e.planets.find(n=>n.id==="moon"),ot=e.planets.find(n=>n.id==="venus"),Ft=tt&&ut&&ot?`चतुर्थ भाव में ${tt.rashiName} राशि, मातृ-मन कारक चन्द्रमा (${ut.rashiName.split(" ")[0]} राशि, भाव ${ut.houseInLagna}) एवं सुख-वैभव कारक शुक्र (${ot.rashiName.split(" ")[0]} राशि, भाव ${ot.houseInLagna}) की वास्तविक D-1 स्थिति पारिवारिक सामंजस्य का मार्गदर्शन करती है।`:"",Nt=[{title:e.predictions.personality.title,body:D.deduplicateParagraph(e.predictions.personality.summary,"gochar",`h2a|personality|${e.panchang.lagnaNumber}`),extra:e.predictions.personality.keyTraits.join(" • ")},{title:e.predictions.career.title,body:D.deduplicateParagraph(e.predictions.career.summary,"career",`h2a|career|${e.panchang.lagnaNumber}`),extra:e.predictions.career.peakYears},{title:e.predictions.wealth.title,body:D.deduplicateParagraph(e.predictions.wealth.summary,"finance",`h2a|wealth|${e.panchang.lagnaNumber}`),extra:e.predictions.wealth.highlights.join(" • ")},{title:e.predictions.marriage.title,body:D.deduplicateParagraph(`${e.predictions.marriage.summary}${Ft?` ${Ft}`:""}`,"family",`h2a|family|${e.panchang.lagnaNumber}`),extra:`जीवनसाथी स्वभाव: ${e.predictions.marriage.spouseNature}`},{title:e.predictions.education.title,body:D.deduplicateParagraph(e.predictions.education.summary,"dasha",`h2a|education|${e.panchang.lagnaNumber}`)},{title:e.predictions.health.title,body:D.deduplicateParagraph(e.predictions.health.summary,"health",`h2a|health|${e.panchang.lagnaNumber}`),extra:e.predictions.health.careAreas.join(" • ")}],Ht=`
    ${Q("खण्ड H2 : सम्पूर्ण जीवन फलादेश एवं प्रमुख समय-सीमा",r,o)}
    ${A("H2a","जीवन के 6 प्रमुख क्षेत्रों का संतुलित वैदिक मार्गदर्शन",`${e.panchang.lagnaName} लग्न • ${e.panchang.moonRashiName} राशि`)}
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 9px;">
      ${Nt.map(n=>`
          <div class="book-card pj-h2c-no-lift" style="background:${t.pureIvory}; border:1.3px solid ${t.templeGold}; border-radius:9px; padding:9px 11px; font-size:8.2px; line-height:1.48;">
            <div class="pj-h2c-no-lift" style="font-weight:900; color:${t.cosmicNavy}; font-size:9.2px; border-bottom:1px solid ${t.borderMuted}; padding-bottom:3.5px; margin-bottom:4.5px;">
              ✦ ${a(n.title)}
            </div>
            <div class="pj-h2c-no-lift" style="color:${t.inkPrimary}; direction: ltr; unicode-bidi: isolate;">${Ut(n.body)}</div>
            ${n.extra?`<div class="pj-h2c-no-lift" style="margin-top:4.5px; color:${t.saffronDeep}; font-weight:700; font-size:7.8px;">${Ut(n.extra)}</div>`:""}
          </div>`).join("")}
    </div>

    ${c&&c.lifeTimeline.length>0?`
          ${A("H2b","प्रमुख जीवन समय-सीमा एवं आवर्तन मील के पत्थर (Life Timeline)","महादशा, गुरु व शनि आवर्तन")}
          <table class="book-table" style="font-size: 7.7px;">
            <thead>
              <tr>
                <th style="width: 15%;">आयु / वर्ष</th>
                <th style="width: 33%;">चरण शीर्षक</th>
                <th style="width: 52%;">संक्षिप्त मार्गदर्शन</th>
              </tr>
            </thead>
            <tbody>
              ${c.lifeTimeline.filter(n=>n.phaseType!=="ANTARDASHA").slice(0,7).map((n,u)=>`
                  <tr style="background:${n.isCurrent?t.emeraldSoft:u%2===0?"#FFFDF8":"#FEF6E4"};">
                    <td style="font-variant-numeric: tabular-nums; font-weight:800; white-space: nowrap;">${n.startAge} – ${n.endAge} वर्ष</td>
                    <td style="font-weight:800; color:${n.isCurrent?t.emerald:t.cosmicNavy};">${a(n.titleHi)}</td>
                    <td>${a(n.summaryHi)}</td>
                  </tr>`).join("")}
            </tbody>
          </table>`:""}
  `;x.push({sectionCode:"H2",sectionTag:"खण्ड H : जीवन फलादेश व समयरेखा",html:Ht});const xt=`
    ${Q("खण्ड I : आचार्य आशीर्वचन, प्रामाणिकता मुहर एवं समापन",r,o)}
    ${A("I1","जीवन के प्रबल पक्ष एवं विशेष सावधानियाँ","व्यक्तिगत सारांश")}
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 12px;">
      <div class="book-card" style="background: ${t.emeraldSoft}; border: 1.3px solid #10B981; border-radius: 9px; padding: 10px 12px; font-size: 8.5px; line-height: 1.55;">
        <div style="font-weight: 900; color: #065F46; font-size: 9.5px; margin-bottom: 5px;">✓ प्रमुख शक्तियाँ (Strengths)</div>
        ${D.deduplicateBullets(e.remedies.strengths.length>0?e.remedies.strengths:["लग्नेश व त्रिकोण भावों की शुभ स्थिति से जीवन में निरंतर उन्नति।"],"gochar","i1-str").slice(0,5).map(n=>`<div style="margin-top:3px;">• ${a(n)}</div>`).join("")}
      </div>
      <div class="book-card" style="background: ${t.saffronSoft}; border: 1.3px solid ${t.templeGold}; border-radius: 9px; padding: 10px 12px; font-size: 8.5px; line-height: 1.55;">
        <div style="font-weight: 900; color: ${t.saffronDeep}; font-size: 9.5px; margin-bottom: 5px;">✦ विवेकपूर्ण सावधानियाँ (Precautions)</div>
        ${D.deduplicateBullets(e.remedies.precautions.length>0?e.remedies.precautions:["महत्वपूर्ण निर्णयों में धैर्य, सात्विक आहार और दशा-गोचर का ध्यान रखें।"],"remedy","i1-pre").slice(0,5).map(n=>`<div style="margin-top:3px;">• ${a(n)}</div>`).join("")}
      </div>
    </div>

    ${A("I2","आचार्य पण्डित शशांक शर्मा का आशीर्वचन एवं गणना प्रामाणिकता प्रमाण-पत्र","PANDIT JI ONLINE")}
    <div class="book-card" style="background: ${t.pureIvory}; border: 1.8px solid ${t.templeGold}; border-radius: 11px; padding: 14px 16px; text-align: center;">
      <div style="display: flex; justify-content: center; margin-bottom: 8px;">
        ${jt(56,o,2.5)}
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
          <b>वेबसाइट:</b> ${Gt(t.saffronDeep)}
        </div>
        <div style="text-align: right;">
          <b>${a(bt.founderHi)}</b><br/>
          <span style="color:${t.inkMuted};">${a(bt.locationHi)}</span>
        </div>
      </div>
    </div>

    ${be(l,p)}
  `;return x.push({sectionCode:"I",sectionTag:"खण्ड I : आशीर्वचन एवं समापन",html:xt}),x}const te=`
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
    font-family: ${R};
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
`;function se(e,l,i){return e.isCover?`
      <div class="vedic-book-a4-page" style="padding: 16px 18px;">
        <div class="vedic-book-a4-body--cover">${e.html}</div>
      </div>
    `:`
    <div class="vedic-book-a4-page">
      <div class="vedic-book-a4-body${e.html.includes("book-banner-slot")||e.html.includes('class="book-banner"')?" vedic-book-a4-body--has-banner":""}">${e.html}</div>
      <div class="vedic-book-a4-footer">
        <span>पण्डित जी ऑनलाइन (PANDIT JI ONLINE) • ${a(bt.founderHi)} • ${Gt(t.inkMuted)}</span>
        <span style="color:${t.cosmicNavy}; font-weight:800; white-space: nowrap;">पृष्ठ ${l} / ${i}</span>
      </div>
    </div>
  `}function de(e,l){if(l==="hi")return;const i=(e.ownerDocument||document).createTreeWalker(e,NodeFilter.SHOW_TEXT),s=[];let p;for(;p=i.nextNode();)p.nodeType===Node.TEXT_NODE&&p.nodeValue&&/[\u0900-\u097F]/.test(p.nodeValue)&&s.push(p);for(const d of s)d.nodeValue&&(d.nodeValue=ue(d.nodeValue,l))}async function Ve(e){const l=e.ownerDocument||document,i=Array.from(e.querySelectorAll("svg"));for(const s of i)try{const p=parseFloat(s.getAttribute("width")||"240")||240,d=parseFloat(s.getAttribute("height")||"240")||240,o=s.cloneNode(!0);o.setAttribute("xmlns","http://www.w3.org/2000/svg"),o.setAttribute("width",String(p)),o.setAttribute("height",String(d));const r=new XMLSerializer().serializeToString(o),h="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(r),m=await new Promise(g=>{const c=new Image,x=window.setTimeout(()=>g(""),1800);c.onload=()=>{window.clearTimeout(x);try{const D=document.createElement("canvas");D.width=Math.max(120,Math.round(p*2.6)),D.height=Math.max(120,Math.round(d*2.6));const w=D.getContext("2d");if(w){w.fillStyle=t.warmIvory,w.fillRect(0,0,D.width,D.height),w.drawImage(c,0,0,D.width,D.height);const M=D.toDataURL("image/png");D.width=0,D.height=0,g(M);return}}catch{}g("")},c.onerror=()=>{window.clearTimeout(x),g("")},c.src=h});if(m){const g=l.createElement("img");g.src=m,g.width=p,g.height=d,g.style.cssText=`width:${p}px;height:${d}px;display:block;margin:0 auto;`,s.parentNode?.replaceChild(g,s)}}catch{}}function _e(e,l,i,s,p,d){const o=Math.max(0,Math.min(d,s/2,p/2));e.beginPath(),e.moveTo(l+o,i),e.lineTo(l+s-o,i),e.arcTo(l+s,i,l+s,i+o,o),e.arcTo(l+s,i+p,l+s-o,i+p,o),e.lineTo(l+o,i+p),e.arcTo(l,i+p,l,i+p-o,o),e.arcTo(l,i,l+o,i,o),e.closePath()}function Ke(e){const l=e.ownerDocument||document,i=Array.from(e.querySelectorAll(".book-banner-badge, .book-pill, .book-banner-pill"));if(!i.length)return;const s=4;for(const p of i)try{const d=(p.textContent||"").replace(/\s+/g," ").trim();if(!d)continue;const o=p.classList.contains("book-banner-badge"),r=l.defaultView?.getComputedStyle(p),h=p.getBoundingClientRect(),m=Math.max(7,parseFloat(r?.fontSize||(o?"8":"8.2"))||8),g=r?.fontWeight||"800",c=r?.color||"#FFFFFF",x=r?.whiteSpace==="nowrap";if(!o&&!x&&h.height>m*3.6)continue;const D=p.getAttribute("data-badge-bg")||(r&&r.backgroundColor&&r.backgroundColor!=="rgba(0, 0, 0, 0)"?r.backgroundColor:o?"#FF6F00":"rgba(15, 23, 42, 0.9)"),w=parseFloat(r?.borderTopWidth||"0")||0,M=r?.borderTopColor||"transparent",H=parseFloat(r?.borderTopLeftRadius||"999")||0,S=Math.max(6,Math.round(parseFloat(r?.paddingLeft||(o?"10":"9"))||9)),b=l.createElement("canvas"),N=b.getContext("2d");if(!N)continue;const k=`${g} ${m}px ${R}`;N.font=k;const $=N.measureText(d),C=Math.ceil(Math.max($.width,($.actualBoundingBoxLeft||0)+($.actualBoundingBoxRight||0))),z=o?Math.max(19,Math.round(h.height||19)):Math.max(19,Math.round(h.height||m+11)),I=Math.max(40,C+28),W=z+18;b.width=Math.round(I*s),b.height=Math.round(W*s),N.save(),N.scale(s,s),N.font=k,N.fillStyle=c,N.textAlign="center",N.textBaseline="middle",N.fillText(d,I/2,W/2),N.restore();let E=b.width,U=-1,X=b.height,q=-1;try{const J=N.getImageData(0,0,b.width,b.height).data,V=b.width,at=b.height;for(let tt=0;tt<at;tt++){const ut=tt*V*4;for(let ot=0;ot<V;ot++)J[ut+ot*4+3]>20&&(ot<E&&(E=ot),ot>U&&(U=ot),tt<X&&(X=tt),tt>q&&(q=tt))}}catch{}const f=U>=E&&q>=X,j=f?(U-E+1)/s:C,L=f?(q-X+1)/s:m*1.25,B=Math.max(z,Math.ceil(L+7+w*2)),Y=Math.ceil(Math.max(j+S*2+w*2,o?0:h.width||0)),Z=l.createElement("canvas");Z.width=Math.round(Y*s),Z.height=Math.round(B*s);const O=Z.getContext("2d");if(!O){b.width=0,b.height=0;continue}O.save(),O.scale(s,s);const st=w>0?w/2:0,$t=H>=B/2?B/2:H;if(_e(O,st,st,Y-st*2,B-st*2,Math.max(0,$t-st)),O.fillStyle=D,O.fill(),w>0&&M&&M!=="transparent"&&M!=="rgba(0, 0, 0, 0)"&&(O.lineWidth=w,O.strokeStyle=M,O.stroke()),O.restore(),f){const J=(E+U)/2,V=(X+q)/2,at=Math.round((Z.width-1)/2-J),tt=Math.round((Z.height-1)/2-V);O.drawImage(b,at,tt)}else{O.save(),O.scale(s,s),O.font=k,O.fillStyle=c,O.textAlign="center",O.textBaseline="alphabetic";const J=O.measureText(d),V=J.actualBoundingBoxAscent>0?J.actualBoundingBoxAscent:m*.72,at=J.actualBoundingBoxDescent>=0?J.actualBoundingBoxDescent:m*.2;O.fillText(d,Y/2,B/2+(V-at)/2),O.restore()}const dt=Z.toDataURL("image/png");if(b.width=0,b.height=0,Z.width=0,Z.height=0,dt){const J=l.createElement("img");J.className=o?"book-banner-badge-img":"book-pill-img",J.src=dt,J.alt=d,J.width=Y,J.height=B,o?J.style.cssText=`width:${Y}px;height:${B}px;display:block;align-self:flex-start;margin-bottom:5px;flex-shrink:0;`:J.style.cssText=`width:${Y}px;height:${B}px;display:inline-block;vertical-align:middle;flex-shrink:0;`,p.parentNode?.replaceChild(J,p)}}catch{}}function Ye(){if(typeof document>"u"||!document.head)return;const e="pj-pdf-noto-devanagari-font";if(document.getElementById(e))return;const l=document.createElement("link");l.id=e,l.rel="stylesheet",l.href="https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;500;600;700;800;900&family=Noto+Sans+Symbols:wght@400;700&family=Noto+Sans+Symbols+2&display=swap",document.head.appendChild(l)}async function pe(e){Ye(),await ve(e,3500)}async function Qe(e){const l=Array.from(e.querySelectorAll("img"));await Promise.all(l.map(i=>new Promise(s=>{const p=()=>{typeof i.decode=="function"?i.decode().then(()=>s()).catch(()=>s()):s()};if(i.complete&&i.naturalWidth>0){p();return}const d=window.setTimeout(s,900);i.onload=()=>{window.clearTimeout(d),p()},i.onerror=()=>{window.clearTimeout(d),s()}})))}async function ce(e,l={}){const i={cleanMode:!!l.cleanMode,chartStyle:l.chartStyle||"north",language:l.language||"hi"},s=await Bt(),p=Wt(e,s,i),d=`PanditJiOnline_Kundali_Book_${ie(e.input.name)}`,o=p.map((x,D)=>`
      <section class="vector-print-page${!x.isCover&&(x.html.includes("book-banner-slot")||x.html.includes('class="book-banner"'))?" vector-print-page--has-banner":""}">
        ${x.html}
        ${x.isCover?"":`<div style="margin-top: 8px; border-top: 1px solid ${t.templeGold}; padding-top: 4px; display: flex; align-items: center; justify-content: space-between; font-size: 7.7px; font-weight: 700; color: ${t.inkMuted};">
                 <span>पण्डित जी ऑनलाइन (PANDIT JI ONLINE) • ${a(bt.founderHi)} • ${Gt(t.inkMuted)}</span>
                 <span style="white-space: nowrap;">पृष्ठ ${D+1} / ${p.length}</span>
               </div>`}
      </section>`).join(""),r=`<!DOCTYPE html>
<html lang="${i.language==="hi"?"hi":"en"}">
<head>
  <meta charset="utf-8" />
  <title>${a(d)}</title>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;500;600;700;800;900&family=Noto+Sans+Symbols:wght@400;700&family=Noto+Sans+Symbols+2&display=swap" />
  <style>${te}</style>
</head>
<body>
  <div id="vector-book-root">${o}</div>
</body>
</html>`,h=document.getElementById("panditji-vector-print-iframe");h&&h.remove();const m=document.createElement("iframe");m.id="panditji-vector-print-iframe",m.style.cssText="position:fixed;right:0;bottom:0;width:0;height:0;border:0;opacity:0;pointer-events:none;",document.body.appendChild(m);const g=m.contentDocument||m.contentWindow?.document;if(!g)return!1;g.open(),g.write(r),g.close();const c=g.getElementById("vector-book-root");return c&&i.language!=="hi"&&de(c,i.language),await pe(g),setTimeout(()=>{try{m.contentWindow?.focus(),m.contentWindow?.print()}catch{}setTimeout(()=>{document.body.contains(m)&&document.body.removeChild(m)},6e4)},450),!0}function Xe(){typeof window>"u"||(Bt().catch(()=>{}),ee().catch(()=>{}))}function qt(){return new Promise(e=>{typeof window<"u"&&typeof window.requestAnimationFrame=="function"?window.requestAnimationFrame(()=>window.setTimeout(e,16)):window.setTimeout(e,16)})}function Ze(e,l){let i=Math.max(1,e),s=4,p=4,d=null;const o=document.createElement("div");o.id="panditji-book-pdf-progress",o.style.cssText=`
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
    font-family: ${R};
    color: #FFFDF7;
    box-sizing: border-box;
  `,o.innerHTML=`
    <div style="display:flex; align-items:center; gap:11px;">
      ${jt(36,l,1.8)}
      <div style="flex:1; min-width:0;">
        <div style="font-size:12px; font-weight:800; color:#FFFDF7; line-height:1.3;">4K वैदिक कुंडली पुस्तक तैयार हो रही है</div>
        <div id="pj-pdf-prog-text" style="font-size:11px; color:#F1F5F9; margin-top:2px; font-weight:600;">कुंडली डेटा व QR तैयार हो रहे हैं...</div>
      </div>
      <div id="pj-pdf-prog-pct" style="font-size:12px; font-weight:900; color:color-mix(in srgb, var(--theme-accent, #FDE68A) 52%, #FFFDF7 48%); font-family:monospace; flex-shrink:0;">4%</div>
    </div>
    <div style="margin-top:9px; width:100%; height:7px; background:color-mix(in srgb, var(--theme-bg, #0F172A) 65%, rgba(255,253,247,0.16) 35%); border-radius:999px; overflow:hidden; border:1px solid color-mix(in srgb, var(--theme-primary, #D97706) 45%, #F59E0B 25%);">
      <div id="pj-pdf-prog-fill" style="width:4%; height:100%; background:linear-gradient(90deg, var(--theme-primary, ${t.saffron}), var(--theme-accent, ${t.templeGold}), #FDE68A); border-radius:999px; transition:width 180ms ease-out;"></div>
    </div>
  `;const r=(c,x)=>{const D=Math.max(s,Math.min(100,Math.round(c)));s=D;const w=o.querySelector("#pj-pdf-prog-text"),M=o.querySelector("#pj-pdf-prog-pct"),H=o.querySelector("#pj-pdf-prog-fill");x&&w&&(w.textContent=x),M&&(M.textContent=`${D}%`),H&&(H.style.width=`${D}%`)},h=()=>{d!==null&&(window.clearInterval(d),d=null)},m=()=>{d===null&&(d=window.setInterval(()=>{s<p&&r(s+1)},280))},g=(c,x,D)=>{r(c,x),p=Math.max(s,Math.min(99,Math.round(D??c))),p>s&&m()};return{root:o,setStage:g,updatePage:(c,x,D)=>{x>0&&(i=x);const w=28+(c-1)/i*68,M=28+c/i*68;if(D==="start"){const H=Math.max(s,Math.round(w+.35*(M-w))),S=Math.min(96,Math.max(H,Math.floor(M)));g(H,`पृष्ठ ${c} / ${i} तैयार हो रहा है...`,S)}else{const H=Math.min(96,Math.round(M));g(H,`पृष्ठ ${c} / ${i} तैयार`,H)}},stop:h}}function ti(e,l,i,s,p,d,o){const r=document.getElementById("panditji-book-pdf-ready-modal");r&&r.remove();const h=(e.size/(1024*1024)).toFixed(2),m=document.createElement("div");m.id="panditji-book-pdf-ready-modal",m.style.cssText="position:fixed;inset:0;z-index:2147483647;background:rgba(5,8,18,0.8);backdrop-filter:blur(7px);display:flex;align-items:center;justify-content:center;padding:16px;";const g=document.createElement("div");g.style.cssText=`width:100%;max-width:440px;background:linear-gradient(155deg, color-mix(in srgb, var(--theme-bg, #0F172A) 72%, var(--theme-primary, #B45309) 28%) 0%, color-mix(in srgb, var(--theme-bg, #0F172A) 84%, var(--theme-accent, #F59E0B) 16%) 100%) !important;border:1.5px solid color-mix(in srgb, var(--theme-primary, #D97706) 50%, #F59E0B 30%) !important;border-radius:20px;padding:22px 20px;box-shadow:0 26px 64px rgba(0,0,0,0.72), inset 0 1px 0 rgba(255,253,247,0.14);color:#FFFDF7;font-family:${R};text-align:center;box-sizing:border-box;`,g.innerHTML=`
    <div style="display:flex; justify-content:center; margin-bottom:10px;">
      ${jt(56,o,2.5)}
    </div>
    <div style="font-size:16.5px;font-weight:900;color:#FFFDF7;line-height:1.35;text-shadow:0 1px 2px rgba(0,0,0,0.35);">4K बृहत् कुंडली पुस्तक PDF तैयार है</div>
    <div style="display:inline-block;margin-top:6px;padding:4px 12px;border-radius:999px;background:color-mix(in srgb, var(--theme-bg, #0F172A) 66%, var(--theme-primary, #B45309) 34%);border:1px solid color-mix(in srgb, var(--theme-primary, #D97706) 44%, #F59E0B 28%);font-size:11.5px;color:color-mix(in srgb, var(--theme-accent, #FDE68A) 52%, #FFFDF7 48%);font-weight:800;">
      ${a(s.input.name)} • ${d} पृष्ठ • ${h} MB • ${p.cleanMode?"Clean PDF मोड":"ब्रांडेड वैदिक पुस्तक"}
    </div>
    <div style="font-size:11px;color:#F1F5F9;margin-top:9px;line-height:1.55;">
      यदि ऑटो-डाउनलोड शुरू न हुआ हो, तो नीचे दिए गए बटन पर टैप करके तुरंत सेव या WhatsApp पर शेयर करें।
    </div>
    <div style="display:flex;flex-direction:column;gap:9px;margin-top:15px;">
      <a id="pj-book-dl-link" href="${l}" download="${a(i)}" style="display:block;width:100%;padding:12px 14px;border-radius:12px;background:linear-gradient(135deg, color-mix(in srgb, var(--theme-primary, #D97706) 80%, #F59E0B 20%) 0%, color-mix(in srgb, var(--theme-accent, #F59E0B) 68%, var(--theme-primary, #B45309) 32%) 100%);color:#FFFDF7;font-weight:900;font-size:13px;text-decoration:none;border:1px solid color-mix(in srgb, var(--theme-accent, #FDE68A) 52%, #FFFDF7 24%);box-shadow:0 8px 22px rgba(0,0,0,0.4);text-shadow:0 1px 2px rgba(0,0,0,0.45);box-sizing:border-box;">
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
  `,m.appendChild(g),document.body.appendChild(m);const c=()=>{m.remove(),setTimeout(()=>URL.revokeObjectURL(l),6e4)};g.querySelector("#pj-book-close-btn")?.addEventListener("click",c),m.addEventListener("click",x=>{x.target===m&&c()}),g.querySelector("#pj-book-share-btn")?.addEventListener("click",async()=>{try{const x=new File([e],i,{type:"application/pdf"});if(navigator.canShare&&navigator.canShare({files:[x]})){await navigator.share({files:[x],title:`${s.input.name} — Janam Kundali Book`,text:`पण्डित जी ऑनलाइन बृहत् जन्म कुंडली पुस्तक (${bt.websiteDisplay})`}),c();return}}catch{}g.querySelector("#pj-book-dl-link")?.click()}),g.querySelector("#pj-book-vector-btn")?.addEventListener("click",()=>{c(),ce(s,p)})}async function ei(e,l={}){const i={cleanMode:!!l.cleanMode,chartStyle:l.chartStyle||"north",language:l.language||"hi"},s=Ze(30,$e());document.body.appendChild(s.root),s.setStage(8,"PDF इंजन व QR कोड तैयार हो रहे हैं...",18),await qt();let p,d=null,o=null;try{const[g,c]=await Promise.all([Bt(),ee()]);p=g,d=c.jsPDF,o=c.html2canvas}catch(g){throw s.stop(),document.body.contains(s.root)&&document.body.removeChild(s.root),g}if(typeof d!="function"||typeof o!="function")throw s.stop(),document.body.contains(s.root)&&document.body.removeChild(s.root),new Error("PDF libraries failed to initialize");s.setStage(20,"वैदिक फ़ॉन्ट व लेआउट तैयार हो रहा है...",23);const r=794,h=1123,m=document.createElement("iframe");m.id="panditji-book-pdf-capture-iframe",m.style.cssText=`position:fixed;left:-9999px;top:0;width:${r}px;height:${h}px;border:0;margin:0;padding:0;z-index:-1;pointer-events:none;background:${t.warmIvory};`,document.body.appendChild(m);try{const g=m.contentDocument||m.contentWindow?.document;if(!g)throw new Error("Could not create capture iframe document");g.open(),g.write(`<!DOCTYPE html>
<html lang="hi">
<head>
  <meta charset="utf-8" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;500;600;700;800;900&family=Noto+Sans+Symbols:wght@400;700&family=Noto+Sans+Symbols+2&display=swap" />
  <style>${te}</style>
</head>
<body style="margin:0;padding:0;background:${t.warmIvory};">
  <div id="book-pdf-host" style="width:${r}px;height:${h}px;overflow:hidden;"></div>
</body>
</html>`),g.close();const c=g.getElementById("book-pdf-host");if(!c)throw new Error("Book PDF host missing");await pe(g),s.setStage(24,"30 पृष्ठ व उच्च-गुणवत्ता कुंडली चार्ट बन रहे हैं...",27),await qt();const x=Wt(e,p,i,!0);s.setStage(28,`पृष्ठ 1 / ${x.length} तैयार हो रहा है...`,30),await qt();const D=new d({orientation:"portrait",unit:"mm",format:"a4",compress:!0}),w=typeof window<"u"&&(window.innerWidth<768||typeof navigator<"u"&&typeof navigator.hardwareConcurrency=="number"&&navigator.hardwareConcurrency<=4)?1.75:2;for(let $=0;$<x.length;$++){s.updatePage($+1,x.length,"start"),c.innerHTML=se(x[$],$+1,x.length);const C=c.querySelector(".vedic-book-a4-page");if(!C)continue;i.language!=="hi"&&de(C,i.language),await Ve(C),Ke(C),await Qe(C),await new Promise(E=>setTimeout(E,$===0?20:8));const z=document.fonts;z?.ready&&await z.ready;const I=await o(C,{scale:w,useCORS:!0,allowTaint:!1,imageTimeout:2500,backgroundColor:t.warmIvory,width:r,height:h,windowWidth:r,windowHeight:h,logging:!1,onclone:E=>{fe(E,".vedic-book-a4-page")}}),W=I.toDataURL("image/jpeg",.85);$>0&&D.addPage(),D.addImage(W,"JPEG",0,0,210,297,void 0,"FAST"),I.width=0,I.height=0,c.innerHTML="",s.updatePage($+1,x.length,"done")}s.setStage(98,"कुंडली पुस्तक PDF फ़ाइल सेव हो रही है...",99),await qt();const M=ie(e.input.name),H=i.cleanMode?"_Clean":"",S=`PanditJiOnline_Kundali_Book_${M}${H}.pdf`,b=D.output("arraybuffer"),N=new Blob([b],{type:"application/pdf"}),k=URL.createObjectURL(N);s.setStage(100,"कुंडली पुस्तक PDF तैयार है!");try{const $=document.createElement("a");$.href=k,$.download=S,$.style.display="none",document.body.appendChild($),$.click(),setTimeout(()=>{document.body.contains($)&&document.body.removeChild($)},2e3)}catch{}return ti(N,k,S,e,i,x.length,p.appLogoDataUrl),!0}finally{s.stop(),document.body.contains(m)&&document.body.removeChild(m),document.body.contains(s.root)&&document.body.removeChild(s.root)}}async function ii(e,l={}){const i={cleanMode:!!l.cleanMode,chartStyle:l.chartStyle||"north",language:l.language||"hi"},s=await Bt(),p=Wt(e,s,i),d=p.map((o,r)=>se(o,r+1,p.length));return{pages:p,sharedCss:te,qrs:s,wrappedDiscretePages:d}}export{Wt as buildAllKundaliBookPages,ii as buildKundaliBookPayload,ei as downloadKundaliBookPDF,Xe as prewarmKundaliBookPdfAssets,ce as printKundaliBookVectorPDF};
