import{am as xe,aI as $e}from"./panchang-core-C9RgGmju.js";import{B as Ft,i as Tt,t as ve}from"./index-40r_jvcn.js";import{c as we,g as ke,e as se,b as Fe,s as re,w as De}from"./pdfReportExporter-BMLjLBEk.js";import{R as zt,G as He,C as St,T as Ne,a as Gt}from"./SampurnKundaliSection-ek3PmvPD.js";import{Q as Se}from"./browser-BD-G2ddJ.js";import"./vendor-astronomy-C8JZdkQu.js";import"./boot-core-nBQQfNG2.js";import"./vendor-react-GnNhYla_.js";import"./vendor-icons-BmYTKGzL.js";import"./VedicDateInput-CyHMCxY4.js";import"./VedicTripleCheckBadge-CP3juM_c.js";import"./vedicTripleCheck-G6eLyvnO.js";import"./ShareableVedicCardButton-CSThcOU8.js";import"./BirthPlaceGpsButton-C0Qs5tZs.js";import"./livePageCardResolver-BMbZHsfA.js";const t={saffron:"#FF6F00",saffronDeep:"#C2410C",saffronSoft:"#FFF3E0",templeGold:"#D4AF37",templeGoldDark:"#9A6B11",templeGoldSoft:"#FDF5DF",cosmicNavy:"#0F172A",cosmicNavySoft:"#1E293B",warmIvory:"#FFF9ED",pureIvory:"#FFFDF8",inkPrimary:"#1E293B",inkMuted:"#475569",emerald:"#047857",emeraldSoft:"#ECFDF5",crimson:"#B91C1C",crimsonSoft:"#FEF2F2",borderGold:"#D4AF37",borderMuted:"#E7D5AE"},G={website:"https://www.panditjionline.online",websiteDisplay:"www.panditjionline.online",youtube:Ft.youtubeUrl,youtubeHandle:Ft.youtubeHandle,whatsapp:`https://wa.me/${Ft.whatsappNumber}?text=${encodeURIComponent("नमस्ते आचार्य पण्डित शशांक शर्मा जी, मैंने पण्डित जी ऑनलाइन की बृहत् जन्म कुंडली पुस्तक PDF डाउनलोड की है। कृपया मार्गदर्शन प्रदान करें।")}`,phoneDisplay:Ft.displayPhone,founderHi:"आचार्य पण्डित शशांक शर्मा",locationHi:Ft.location,email:Ft.email},_t="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="120">
      <defs>
        <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FDE047"/>
          <stop offset="50%" stop-color="#D4AF37"/>
          <stop offset="100%" stop-color="#FF6F00"/>
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" r="57" fill="#0F172A" stroke="url(#g)" stroke-width="5"/>
      <circle cx="60" cy="60" r="47" fill="none" stroke="#D4AF37" stroke-opacity="0.45" stroke-width="1.5"/>
      <text x="60" y="68" text-anchor="middle" fill="#FDE68A" font-size="46" font-weight="800" font-family="serif">ॐ</text>
    </svg>`);let Ut=null;async function Ce(){return Tt.startsWith("data:image/")?Tt:typeof window>"u"||typeof fetch!="function"?_t:(Ut||(Ut=(async()=>{const e=["/pwa-192x192.png","/apple-touch-icon.png","/pandit-shashank-sharma.jpg"];for(const n of e)try{const i=new AbortController,l=window.setTimeout(()=>i.abort(),1600),c=await fetch(n,{signal:i.signal,cache:"force-cache"});if(window.clearTimeout(l),!c.ok)continue;const u=await c.blob(),o=await new Promise(r=>{const p=new FileReader;p.onloadend=()=>r(typeof p.result=="string"?p.result:""),p.onerror=()=>r(""),p.readAsDataURL(u)});if(o.startsWith("data:image/"))return o}catch{}return _t})()),Ut)}function le(e){return e&&e.startsWith("data:image/")?e:Tt.startsWith("data:image/")?Tt:_t}function vt(e,n,i=2){const l=le(n);return`
    <div style="width: ${e}px; height: ${e}px; border-radius: 50%; padding: ${i}px; background: linear-gradient(135deg, #FDE047 0%, ${t.templeGold} 52%, ${t.saffron} 100%); box-shadow: 0 2px 8px rgba(15, 23, 42, 0.28); flex-shrink: 0; align-self: center; display: flex; align-items: center; justify-content: center; overflow: hidden;">
      <img src="${l}" alt="PANDIT JI ONLINE Logo" width="${e-i*2}" height="${e-i*2}" style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover; object-position: center; display: block; background: ${t.cosmicNavy};" />
    </div>
  `}let Ot=null;async function Wt(e,n=t.cosmicNavy,i="#FFFFFF"){try{return await Se.toDataURL(e,{errorCorrectionLevel:"M",margin:1,width:220,color:{dark:n,light:i}})}catch{return""}}async function At(){return Ot||(Ot=(async()=>{const[e,n,i,l]=await Promise.all([Wt(G.website,"#0F172A","#FFFDF8"),Wt(G.youtube,"#0F172A","#FFFDF8"),Wt(G.whatsapp,"#0F172A","#FFFDF8"),Ce()]);return{websiteQrDataUrl:e,youtubeQrDataUrl:n,whatsappQrDataUrl:i,appLogoDataUrl:l}})()),Ot}const Le={after_charts_b:{slot:"after_charts_b",badgeHi:"PANDIT JI ONLINE • निःशुल्क वैदिक सेवाएँ",titleHi:"दैनिक दृक् गणित पंचांग, चौघड़िया एवं सटीक राशिफल — प्रतिदिन प्रातः",bodyHi:"तिथि, नक्षत्र, योग, करण, अभिजीत मुहूर्त, राहुकाल और चंद्र-आधारित दैनिक, साप्ताहिक व मासिक राशिफल अपने मोबाइल पर बिल्कुल निःशुल्क देखें।",highlightsHi:["दृक् गणित लाहिड़ी पंचांग","दैनिक/मासिक राशिफल","शुभ मुहूर्त व व्रत-त्योहार"],ctaHi:"QR स्कैन करें या विज़िट करें:",urlLabel:G.websiteDisplay,qrKey:"websiteQrDataUrl",accentColor:t.saffron},after_vargas_c:{slot:"after_vargas_c",badgeHi:"PANDIT JI ONLINE • पारिवारिक ज्योतिष मंच",titleHi:"निःशुल्क सम्पूर्ण जन्म कुंडली पुस्तक एवं 36 गुण विवाह मिलान",bodyHi:"परिवार के किसी भी सदस्य की वैदिक जन्म कुंडली, 16 षोडशवर्ग, मांगलिक परीक्षण और अष्टकूट 36 गुण विवाह मिलान कुछ ही सेकंड में तैयार करें।",highlightsHi:["निःशुल्क जन्म कुंडली पुस्तक","36 गुण अष्टकूट मिलान","भारत व विदेश टाइमज़ोन समर्थन"],ctaHi:"ऑनलाइन सेवा खोलें:",urlLabel:G.websiteDisplay,qrKey:"websiteQrDataUrl",accentColor:t.templeGoldDark},after_ashtakavarga_e:{slot:"after_ashtakavarga_e",badgeHi:"PANDIT JI ONLINE • डिजिटल सनातन मंदिर",titleHi:"डिजिटल मंदिर, आरती-चालीसा संग्रह एवं 108 रुद्राक्ष मंत्र जप",bodyHi:"अपने इष्टदेव की प्रतिदिन आरती, प्रामाणिक चालीसा, स्तोत्र पाठ और 108 मनकों वाला डिजिटल मंत्र जप काउंटर — घर या यात्रा में कहीं भी भक्ति का साथ।",highlightsHi:["डिजिटल आरती व दर्शन","108 रुद्राक्ष जप काउंटर","संपूर्ण चालीसा एवं स्तोत्र"],ctaHi:"डिजिटल मंदिर में प्रवेश करें:",urlLabel:G.websiteDisplay,qrKey:"websiteQrDataUrl",accentColor:t.saffron},after_gochar_g:{slot:"after_gochar_g",badgeHi:"PANDIT JI ONLINE OFFICIAL • YOUTUBE",titleHi:"आचार्य पण्डित शशांक शर्मा से जुड़ें — YouTube ज्योतिष एवं धर्म चैनल",bodyHi:"ग्रह गोचर विश्लेषण, प्रमुख व्रत-त्योहारों के सटीक मुहूर्त, वैदिक पूजन विधि और सरल ज्योतिष ज्ञान के प्रामाणिक वीडियो देखने हेतु चैनल से जुड़ें।",highlightsHi:["दैनिक पंचांग व व्रत विधि","ग्रह गोचर मार्गदर्शन","सरल सात्विक वैदिक उपाय"],ctaHi:"YouTube चैनल स्कैन करें:",urlLabel:`youtube.com/${G.youtubeHandle}`,qrKey:"youtubeQrDataUrl",accentColor:t.crimson},back_cover_i:{slot:"back_cover_i",badgeHi:"प्रामाणिक वैदिक परामर्श • PANDIT JI ONLINE",titleHi:"व्यक्तिगत कुंडली विश्लेषण, विवाह मिलान एवं वैदिक अनुष्ठान परामर्श",bodyHi:"यदि आप विवाह, संतान, व्यवसाय, सरकारी नौकरी, ग्रह-शांति पूजा या रत्न चयन पर प्रत्यक्ष ज्योतिषीय मार्गदर्शन चाहते हैं, तो आचार्य पण्डित शशांक शर्मा जी से सीधे संपर्क करें।",highlightsHi:[`सम्पर्क / WhatsApp: ${G.phoneDisplay}`,G.locationHi,G.websiteDisplay],ctaHi:"वेबसाइट / WhatsApp स्कैन करें:",urlLabel:G.websiteDisplay,qrKey:"websiteQrDataUrl",accentColor:t.saffron}};function at(e){return String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Ct(e,n,i){if(i&&e!=="back_cover_i")return"";const l=Le[e],c=n[l.qrKey]||n.websiteQrDataUrl,u=vt(42,n.appLogoDataUrl,2);return i&&e==="back_cover_i"?`
      <div class="book-banner-slot">
        <div class="book-banner" style="margin: 0; width: 100%; background: ${t.pureIvory}; border: 1.8px solid ${t.templeGold}; border-radius: 11px; padding: 12px 15px; display: flex; align-items: center; justify-content: space-between; gap: 14px;">
          <div style="display: flex; align-items: center; gap: 12px; flex: 1; min-width: 0;">
            ${u}
            <div style="display: flex; flex-direction: column; justify-content: center; flex: 1; min-width: 0;">
              <div style="font-size: 8.8px; font-weight: 800; letter-spacing: 0; color: ${t.saffronDeep}; line-height: 1.3;">
                पण्डित जी ऑनलाइन (PANDIT JI ONLINE) • सत्यापित वैदिक जन्म पत्रिका
              </div>
              <div style="font-size: 11.5px; font-weight: 800; color: ${t.cosmicNavy}; margin-top: 2px; line-height: 1.3;">
                ${at(G.founderHi)} • ${at(G.locationHi)}
              </div>
              <div style="font-size: 9.2px; color: ${t.inkMuted}; margin-top: 3px; line-height: 1.45;">
                सम्पर्क / WhatsApp: <b style="color:${t.cosmicNavy};">${at(G.phoneDisplay)}</b> &nbsp;|&nbsp; वेबसाइट: <b style="color:${t.saffronDeep};">${at(G.websiteDisplay)}</b>
              </div>
            </div>
          </div>
          ${c?`<div style="flex-shrink: 0; align-self: center; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; background: #ffffff; border: 1.2px solid ${t.templeGold}; border-radius: 8px; padding: 4px;">
                   <img src="${c}" alt="Pandit Ji Online QR" style="width: 62px; height: 62px; display: block; margin: 0 auto;" />
                   <div style="font-size: 7px; font-weight: 800; color: ${t.cosmicNavy}; margin-top: 3px; line-height: 1.2;">${at(G.websiteDisplay)}</div>
                 </div>`:""}
        </div>
      </div>
    `:`
    <div class="book-banner-slot">
      <div class="book-banner" style="margin: 0; width: 100%; background: linear-gradient(135deg, ${t.cosmicNavy} 0%, #17243D 72%, #241910 100%); border: 2px solid ${t.templeGold}; border-radius: 12px; padding: 12px 15px; color: ${t.warmIvory}; display: flex; align-items: center; justify-content: space-between; gap: 14px; box-shadow: 0 3px 12px rgba(15, 23, 42, 0.16);">
        <div style="display: flex; align-items: center; gap: 12px; flex: 1; min-width: 0;">
          ${u}
          <div style="display: flex; flex-direction: column; justify-content: center; flex: 1; min-width: 0;">
            <div class="book-banner-badge" data-badge-bg="${l.accentColor}" style="display: inline-flex; align-items: center; justify-content: center; align-self: flex-start; min-height: 18px; padding: 2px 10px; line-height: 1.15; background: ${l.accentColor}; color: #FFFFFF; font-size: 8px; font-weight: 800; letter-spacing: 0; border-radius: 999px; margin-bottom: 5px; box-sizing: border-box; text-align: center;"><span class="book-banner-badge-text" style="display: inline-block; line-height: 1.15;">${at(l.badgeHi)}</span></div>
            <div style="font-size: 11.8px; font-weight: 800; color: #FDE68A; line-height: 1.35;">
              ${at(l.titleHi)}
            </div>
            <div style="font-size: 8.8px; color: #F1F5F9; line-height: 1.48; margin-top: 3px;">
              ${at(l.bodyHi)}
            </div>
            <div class="book-banner-pills" style="display: flex; flex-wrap: wrap; align-items: center; gap: 6px; margin-top: 6px;">
              ${l.highlightsHi.map(o=>`<span class="book-banner-pill" style="display: inline-flex; align-items: center; justify-content: center; font-size: 7.9px; font-weight: 700; line-height: 1.2; color: #FFF9ED; background: rgba(212, 175, 55, 0.18); border: 1px solid rgba(212, 175, 55, 0.55); padding: 4px 8px; border-radius: 4px; box-sizing: border-box; vertical-align: middle;">✦ ${at(o)}</span>`).join("")}
            </div>
            <div style="font-size: 8.2px; color: #FCD34D; margin-top: 5px; font-weight: 700; line-height: 1.3;">
              ${at(l.ctaHi)} <span style="color: #FFFFFF; font-family: monospace;">${at(l.urlLabel)}</span>
            </div>
          </div>
        </div>

        ${c?`<div style="flex-shrink: 0; align-self: center; display: flex; flex-direction: column; align-items: center; justify-content: center; background: #FFFDF8; border: 2px solid ${t.templeGold}; border-radius: 8px; padding: 5px; text-align: center; width: 84px;">
                 <img src="${c}" alt="QR Code" style="width: 70px; height: 70px; display: block; margin: 0 auto;" />
                 <div style="font-size: 7px; font-weight: 800; color: ${t.cosmicNavy}; margin-top: 3px; line-height: 1.2;">स्कैन करें</div>
               </div>`:""}
      </div>
    </div>
  `}function Ee(e,n){if(n)return Ct("back_cover_i",e,!0);const i=vt(54,e.appLogoDataUrl,2.5);return`
    <div class="book-banner-slot">
      <div class="book-banner" style="margin: 0; width: 100%; background: linear-gradient(135deg, ${t.cosmicNavy} 0%, #16223A 65%, #2B170A 100%); border: 2px solid ${t.templeGold}; border-radius: 13px; padding: 15px 17px; color: ${t.warmIvory}; display: flex; align-items: center; justify-content: space-between; gap: 14px;">
        <div style="display: flex; align-items: center; gap: 13px; flex: 1; min-width: 0;">
          ${i}
          <div style="display: flex; flex-direction: column; justify-content: center; flex: 1; min-width: 0;">
            <div style="font-size: 8.6px; font-weight: 800; color: ${t.templeGold}; letter-spacing: 0; line-height: 1.3;">
              ॥ सही समय, सटीक ज्ञान — पण्डित जी ऑनलाइन की पहचान ॥
            </div>
            <div style="font-size: 13.5px; font-weight: 800; color: #FFFFFF; margin-top: 3px; line-height: 1.3;">
              ${at(G.founderHi)} • वैदिक ज्योतिष एवं पूजन परामर्श
            </div>
            <div style="font-size: 9px; color: #E2E8F0; line-height: 1.5; margin-top: 4px;">
              विवाह, करियर, संतान, व्यवसाय, ग्रह-शांति पूजा, रत्न-रुद्राक्ष चयन अथवा जन्म कुंडली के किसी भी विशेष प्रश्न पर प्रामाणिक शास्त्रीय परामर्श के लिए संपर्क करें।
            </div>
            <div style="margin-top: 7px; font-size: 8.8px; color: #FDE68A; line-height: 1.55;">
              <div><b>वेबसाइट:</b> ${at(G.websiteDisplay)} &nbsp;|&nbsp; <b>YouTube:</b> ${at(G.youtubeHandle)}</div>
              <div><b>फ़ोन / WhatsApp:</b> ${at(G.phoneDisplay)} &nbsp;|&nbsp; <b>स्थान:</b> ${at(G.locationHi)}</div>
            </div>
          </div>
        </div>

        <div style="display: flex; align-items: center; justify-content: center; gap: 8px; flex-shrink: 0; align-self: center;">
          ${e.websiteQrDataUrl?`<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; background: #FFFDF8; border: 1.8px solid ${t.templeGold}; border-radius: 8px; padding: 4px; text-align: center; width: 78px;">
                   <img src="${e.websiteQrDataUrl}" alt="Website QR" style="width: 66px; height: 66px; display: block; margin: 0 auto;" />
                   <div style="font-size: 7px; font-weight: 800; color: ${t.cosmicNavy}; margin-top: 3px; line-height: 1.2;">वेबसाइट खोलें</div>
                 </div>`:""}
          ${e.whatsappQrDataUrl?`<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; background: #FFFDF8; border: 1.8px solid #10B981; border-radius: 8px; padding: 4px; text-align: center; width: 78px;">
                   <img src="${e.whatsappQrDataUrl}" alt="WhatsApp QR" style="width: 66px; height: 66px; display: block; margin: 0 auto;" />
                   <div style="font-size: 7px; font-weight: 800; color: #047857; margin-top: 3px; line-height: 1.2;">WhatsApp परामर्श</div>
                 </div>`:""}
        </div>
      </div>
    </div>
  `}const Ie={1:"mars",2:"venus",3:"mercury",4:"moon",5:"sun",6:"mercury",7:"venus",8:"mars",9:"jupiter",10:"saturn",11:"saturn",12:"jupiter"},Jt=["मेष","वृषभ","मिथुन","कर्क","सिंह","कन्या","तुला","वृश्चिक","धनु","मकर","कुंभ","मीन"],et={sun:"सूर्य",moon:"चंद्र",mars:"मंगल",mercury:"बुध",jupiter:"गुरु",venus:"शुक्र",saturn:"शनि",rahu:"राहु",ketu:"केतु"},$t={sun:"ॐ घृणि सूर्याय नमः",moon:"ॐ सों सोमाय नमः",mars:"ॐ अं अंगारकाय नमः",mercury:"ॐ बुं बुधाय नमः",jupiter:"ॐ बृं बृहस्पतये नमः",venus:"ॐ शुं शुक्राय नमः",saturn:"ॐ शं शनैश्चराय नमः",rahu:"ॐ रां राहवे नमः",ketu:"ॐ केम् केतवे नमः"},de={sun:{planetId:"sun",planetHi:"सूर्य",gemHi:"माणिक्य (Ruby)",uparatnaHi:"लाल गार्नेट / सूर्यकांत",rattiHi:"5.25 से 6.25 रत्ती",metalHi:"सोना या तांबा",fingerHi:"अनामिका (Ring Finger)",dayHi:"शुक्ल पक्ष का रविवार",timingHi:"सूर्योदय के 1 घंटे के भीतर (प्रातः 6:30–8:00)",mantraHi:$t.sun,purificationHi:"कच्चा दूध, गंगाजल एवं शहद से स्नान कर धूप-दीप दिखाएं",avoidWarnHi:"अहंकार, रक्तचाप, पिता/वरिष्ठों से तनाव और अनावश्यक सरकारी विवाद बढ़ सकते हैं।"},moon:{planetId:"moon",planetHi:"चंद्र",gemHi:"सच्चा मोती (Natural Pearl)",uparatnaHi:"मूनस्टोन (चंद्रमणि)",rattiHi:"5.25 से 7.25 रत्ती",metalHi:"चांदी (Silver)",fingerHi:"कनिष्ठा (Little Finger)",dayHi:"शुक्ल पक्ष का सोमवार",timingHi:"प्रातः सूर्योदय पश्चात या संध्या चंद्रोदय काल",mantraHi:$t.moon,purificationHi:"कच्चा गाय का दूध, गंगाजल एवं तुलसी दल/अक्षत से शुद्ध करें",avoidWarnHi:"मानसिक अस्थिरता, भावनात्मक उलझन, सर्दी-कफ एवं अनिर्णय की प्रवृत्ति बढ़ सकती है।"},mars:{planetId:"mars",planetHi:"मंगल",gemHi:"त्रिकोणीय/अंडाकार मूंगा (Red Coral)",uparatnaHi:"लाल हकीक / तांबा छल्ला",rattiHi:"6.25 से 8.25 रत्ती",metalHi:"तांबा या सोना",fingerHi:"अनामिका (Ring Finger)",dayHi:"शुक्ल पक्ष का मंगलवार",timingHi:"सूर्योदय के 1–2 घंटे के भीतर",mantraHi:$t.mars,purificationHi:"कच्चा दूध, गंगाजल एवं लाल पुष्प अर्पित कर शुद्ध करें",avoidWarnHi:"क्रोध, जल्दबाजी, रक्त/चोट संबंधी समस्या, कर्ज अथवा भूमि-विवाद की संभावना बढ़ सकती है।"},mercury:{planetId:"mercury",planetHi:"बुध",gemHi:"पन्ना (Emerald)",uparatnaHi:"पेरीडॉट / हरा ओनिक्स",rattiHi:"5.25 से 6.25 रत्ती",metalHi:"सोना या चांदी",fingerHi:"कनिष्ठा (Little Finger)",dayHi:"शुक्ल पक्ष का बुधवार",timingHi:"प्रातः सूर्योदय के 2 घंटे के भीतर",mantraHi:$t.mercury,purificationHi:"कच्चा दूध, गंगाजल एवं दूर्वा/तुलसी दल से शुद्ध करें",avoidWarnHi:"व्यापारिक निर्णय में भ्रम, त्वचा/स्नायु संवेदनशीलता और संवाद में अनावश्यक गलतफहमी हो सकती है।"},jupiter:{planetId:"jupiter",planetHi:"गुरु",gemHi:"पीला पुखराज (Yellow Sapphire)",uparatnaHi:"सुनहला (Citrine) / पीला टोपाज",rattiHi:"5.25 से 6.25 रत्ती",metalHi:"सोना या पीतल",fingerHi:"तर्जनी (Index Finger)",dayHi:"शुक्ल पक्ष का गुरुवार",timingHi:"प्रातः सूर्योदय के 1–2 घंटे के भीतर",mantraHi:$t.jupiter,purificationHi:"कच्चा दूध, गंगाजल, हल्दी व पीले पुष्प से शुद्ध करें",avoidWarnHi:"वजन/लिवर की समस्या, अत्यधिक आशावाद से आर्थिक चूक और अनावश्यक व्यय बढ़ सकते हैं।"},venus:{planetId:"venus",planetHi:"शुक्र",gemHi:"ओपल या सफेद जरकन / हीरा (Opal / Diamond)",uparatnaHi:"स्फटिक / सफेद पुखराज",rattiHi:"6.25 से 8.25 रत्ती (ओपल) / 0.5–1 कैरेट (हीरा)",metalHi:"चांदी या प्लैटिनम",fingerHi:"मध्यमा या अनामिका उंगली",dayHi:"शुक्ल पक्ष का शुक्रवार",timingHi:"प्रातः सूर्योदय के 1–2 घंटे के भीतर",mantraHi:$t.venus,purificationHi:"कच्चा दूध, गंगाजल, दही व श्वेत पुष्प से शुद्ध करें",avoidWarnHi:"विलासिता में अनावश्यक खर्च, शुगर/हार्मोन असंतुलन एवं संबंधों में अस्थिरता आ सकती है।"},saturn:{planetId:"saturn",planetHi:"शनि",gemHi:"नीलम (Blue Sapphire — 3 दिन परीक्षण उपरांत)",uparatnaHi:"नीली / जामुनिया (Amethyst)",rattiHi:"5.25 से 6.25 रत्ती",metalHi:"पंचधातु या चांदी",fingerHi:"मध्यमा (Middle Finger)",dayHi:"शुक्ल पक्ष का शनिवार",timingHi:"सूर्यास्त के पश्चात या प्रातः शनि होरा में",mantraHi:$t.saturn,purificationHi:"कच्चा दूध, गंगाजल एवं काले तिल के जल से शुद्ध करें",avoidWarnHi:"बिना अनुकूलता धारण करने पर कार्यों में विलंब, जोड़ों में दर्द, कर्ज या अचानक हानि हो सकती है।"}};function ce(e,n){return(e-1+(n-1))%12+1}function X(e,n){return Ie[ce(e,n)]||"jupiter"}function Pt(e,n){const i=[];for(let l=1;l<=12;l++)X(e,l)===n&&i.push(l);return i}function J(e,n){return e.planets.find(i=>i.id===n)}function yt(e,n){const i=e.ashtakavarga;if(!i)return 28;if(i.bhavaSarvashtakavarga&&typeof i.bhavaSarvashtakavarga[n-1]=="number")return i.bhavaSarvashtakavarga[n-1];const l=((e.panchang.lagnaNumber||1)-1+12)%12;return i.sarvashtakavarga[(l+(n-1))%12]??28}function Mt(e,n){const i=e.shadbalaBhava?.planets.find(l=>l.id===n);return i?i.strengthRatio:1}function wt(e,n){if(n==="rahu"||n==="ketu")return"mixed";const i=Pt(e,n),l=i.some(u=>[4,7,10].includes(u)),c=i.some(u=>[5,9].includes(u));return l&&c?"yogakaraka":i.includes(1)?"lagna":c?"trikona":i.length>0&&i.every(u=>[6,8,12].includes(u))?"dusthana":l?"kendra":"mixed"}function Te(e,n){const{esc:i,buildBookPageHeader:l,buildSectionTitleBar:c,personHeader:u,appLogo:o}=n,r=e.panchang.lagnaNumber||1,p=X(r,1),d=X(r,5),h=X(r,9),m=J(e,p),g=J(e,d),F=J(e,h),H=[];for(const y of e.rajYogas||[])H.push({title:y.name,line1:y.description,line2:`शास्त्रीय आधार: ${y.sanskritRule} — यह योग जीवन में सम्मान, प्रगति और स्थिरता को निरंतर बल देता है।`,score:y.strength==="प्रबल योग"?95:85});for(const y of e.planets){const T=wt(r,y.id),E=Mt(e,y.id),j=y.hindiName.split(" ")[0];if(T==="yogakaraka"||y.isExalted||y.dignity.includes("स्वगृही")||E>=1.25){const Z=(T==="yogakaraka"?35:0)+(y.isExalted?35:y.dignity.includes("स्वगृही")?28:0)+Math.round(E*20)+([1,4,5,7,9,10,11].includes(y.houseInLagna)?15:0);H.push({title:`${j} की ${y.isExalted?"उच्चस्थ":y.dignity.includes("स्वगृही")?"स्वगृही":T==="yogakaraka"?"योगकारक":"अति पुष्ट"} स्थिति (भाव ${y.houseInLagna})`,line1:`${j} आपकी कुंडली के ${y.houseInLagna}वें भाव में ${y.rashiName.split(" ")[0]} राशि (${y.dignity}) में बैठकर अत्यंत प्रबल बल दे रहे हैं।`,line2:"इनकी दशा-अंतर्दशा व गोचर के दौरान करियर, निर्णय क्षमता और आर्थिक स्थिरता में स्पष्ट उछाल देखने को मिलेगा।",score:Z})}}const N=Array.from({length:12},(y,T)=>({house:T+1,pts:yt(e,T+1)})).sort((y,T)=>T.pts-y.pts);if(N[0]&&N[0].pts>=30){const y=N[0],T=e.lagnaChart[y.house-1]?.bhavaTitle||`भाव ${y.house}`;H.push({title:`सर्वाष्टकवर्ग में ${y.house}वें भाव का सर्वाधिक बल (${y.pts} बिंदु)`,line1:`आपकी कुंडली के ${T} को 337-बिंदु अष्टकवर्ग में ${y.pts} शुभ बिंदु मिले हैं (28 से ऊपर अति शुभ माना जाता है)।`,line2:"इस भाव से जुड़े कार्यों में कम संघर्ष में भी स्थायी और संतोषजनक परिणाम प्राप्त होने के प्रबल संकेत हैं।",score:70+y.pts})}const D=[],L=new Set;for(const y of H.sort((T,E)=>E.score-T.score)){const T=y.title.slice(0,16);if(!L.has(T)&&(L.add(T),D.push(y),D.length===3))break}for(;D.length<3;)D.push({title:`${e.panchang.lagnaName} लग्न एवं ${e.panchang.moonRashiName} चंद्र राशि का संतुलन`,line1:`आपकी जन्मपत्री में लग्नेश ${e.panchang.lagnaLord} तथा चंद्र राशि स्वामी ${e.panchang.moonRashiLord} व्यक्तित्व को व्यावहारिक और धैर्यवान बनाते हैं।`,line2:"सही योजना, अनुशासन और निरंतर कर्म से जीवन के मध्य भाग में उल्लेखनीय उन्नति सुनिश्चित है।",score:60});const f=[],$=y=>{const T=y.hindiName.split(" ")[0],E=y.rashiName.split(" ")[0],j=y.houseInLagna;switch(y.id){case"mars":return{title:`मंगल का अस्त (^) प्रभाव — भाव ${j} (${E})`,line1:`मंगल ${E} राशि (${j}वें भाव) में सूर्य के निकट अस्त होने से ऊर्जा, साहस या भूमि-संपत्ति संबंधी निर्णयों में कभी-कभी भीतरी अधीरता अथवा परिणाम में विलंब अनुभव हो सकता है।`,line2:"सावधानी: आवेश में संपत्ति/कर्ज या तकनीकी निर्णय न लें; नियमित व्यायाम, मंगलवार को हनुमान चालीसा पाठ व मसूर दान से मंगल का शुभ पराक्रम जागृत रहेगा।"};case"saturn":return{title:`शनि का अस्त (^) प्रभाव — भाव ${j} (${E})`,line1:`शनि ${E} राशि (${j}वें भाव) में सूर्य-सान्निध्य से अस्त होने पर कठिन परिश्रम के बाद भी वरिष्ठों से श्रेय मिलने में समय लग सकता है तथा कार्यभार का दबाव बढ़ सकता है।`,line2:"सावधानी: पिता या उच्चाधिकारियों से अहं-टकराव से बचें, दीर्घकालिक अनुशासन बनाए रखें और शनिवार सायं पीपल के नीचे तिल के तेल का दीपक जलाएं।"};case"mercury":return{title:`बुध का अस्त (^) प्रभाव — भाव ${j} (${E})`,line1:`बुध ${E} राशि (${j}वें भाव) में सूर्य के अति समीप होने से विचारों में तीव्रता तो रहती है, पर जल्दबाजी में संवाद या लिखित अनुबंध में सूक्ष्म चूक की संभावना बनती है।`,line2:"सावधानी: किसी भी वित्तीय/व्यापारिक कागज पर हस्ताक्षर से पूर्व दो बार जांचें; बुधवार को हरी मूंग दान व श्री विष्णु सहस्रनाम श्रवण लाभकारी रहेगा।"};case"jupiter":return{title:`गुरु का अस्त (^) प्रभाव — भाव ${j} (${E})`,line1:`देवगुरु बृहस्पति ${E} राशि (${j}वें भाव) में अस्त होने से मार्गदर्शक निर्णय या आर्थिक विस्तार में स्पष्ट दृष्टि बनाए रखने हेतु अतिरिक्त विवेक आवश्यक होता है।`,line2:"सावधानी: बिना पूर्ण मूल्यांकन बड़ी वित्तीय गारंटी न दें; गुरुजनों का सम्मान करें तथा गुरुवार को हल्दी/चना दाल दान व गायत्री जप करें।"};case"venus":return{title:`शुक्र का अस्त (^) प्रभाव — भाव ${j} (${E})`,line1:`शुक्र ${E} राशि (${j}वें भाव) में सूर्य-समीप होने से पारिवारिक अपेक्षाओं, दांपत्य संवेदनशीलता या सुख-सुविधाओं के व्यय में असंतुलन आ सकता है।`,line2:"सावधानी: रिश्तों में विनम्र संवाद और बजट अनुशासन रखें; शुक्रवार को श्वेत वस्तु/खीर दान व महालक्ष्मी स्तुति से सुख-सौहार्द बढ़ेगा।"};case"moon":return{title:`चंद्र का अस्त (^) / अमावस्या सान्निध्य — भाव ${j} (${E})`,line1:`चंद्रमा ${E} राशि (${j}वें भाव) में सूर्य के निकट होने से मन अत्यधिक संवेदनशील रह सकता है तथा भावनात्मक उतार-चढ़ाव निर्णय को प्रभावित कर सकते हैं।`,line2:"सावधानी: प्रातः प्राणायाम, पर्याप्त नींद और सोमवार को शिवलिंग पर जल अर्पण से मानसिक एकाग्रता व शांति सुदृढ़ होगी।"};default:return{title:`${T} का अस्त (^) प्रभाव — भाव ${j} (${E})`,line1:`${T} ${E} राशि (${j}वें भाव) में सूर्य के अत्यंत निकट होने से इस भाव के फलों को पूर्ण रूप से प्रकट होने में संयमित प्रयास की आवश्यकता रहती है।`,line2:"सावधानी: इस भाव से जुड़े बड़े निर्णय शांत चिंतन व अनुभवी सलाह से लें और संबंधित ग्रह के सात्विक मंत्र का अभ्यास करें।"}}};for(const y of e.planets){const T=y.hindiName.split(" ")[0];if(y.isDebilitated)f.push({title:`${T} का नीच राशि प्रभाव (भाव ${y.houseInLagna})`,line1:`${T} ${y.rashiName.split(" ")[0]} राशि में संवेदनशील स्थिति में हैं, जिससे इस भाव के फल प्रारंभ में धीमे मिल सकते हैं।`,line2:"सावधानी: इस क्षेत्र में जल्दबाजी से बचें; धैर्यपूर्वक अभ्यास और संबंधित सात्विक दान से यही ग्रह शानदार परिपक्व फल देगा।",priority:95});else if(y.isCombust){const E=$(y);f.push({title:E.title,line1:E.line1,line2:E.line2,priority:85})}}const v=e.phase2Jyotish?.yogasAndDoshas.doshas.allList||[];for(const y of v)y.effectiveStatus!=="दोष मुक्त"&&f.push({title:`${y.nameHi} (${y.effectiveStatus})`,line1:`${y.explanationHi.slice(0,145)}${y.explanationHi.length>145?"...":""}`,line2:`सरल समाधान: ${y.remedyHi}`,priority:y.effectiveStatus==="प्रबल सक्रिय"?92:78});const I=e.phase2Jyotish?.liveGochar.sadeSatiPhase;I&&I!=="NONE"&&f.push({title:`शनि गोचर अनुशासन काल (${e.phase2Jyotish?.liveGochar.sadeSatiLabelHi})`,line1:"वर्तमान में शनि गोचर आपको अनुशासन, समय-प्रबंधन और यथार्थवादी योजना अपनाने की प्रेरणा दे रहा है।",line2:"सावधानी: उधार/जोखिम भरे निवेश से बचें; शनिवार को पीपल के नीचे दीपक व हनुमान चालीसा पाठ से मानसिक शांति रहेगी।",priority:88});const S=N[N.length-1];if(S&&S.pts<26){const y=e.lagnaChart[S.house-1]?.bhavaTitle||`भाव ${S.house}`;f.push({title:`${S.house}वें भाव में अतिरिक्त प्रयास संकेत (${S.pts} SAV बिंदु)`,line1:`अष्टकवर्ग में ${y} के बिंदु औसत (28) से कम हैं, जिसका अर्थ है कि इस विषय में व्यवस्थित योजना आवश्यक है।`,line2:"सावधानी: इस भाव से जुड़े बड़े कदम सोच-समझकर और शुभ दशा/गोचर में उठाने से परिणाम सहज व सकारात्मक रहेंगे।",priority:72})}const w=[],P=new Set;for(const y of f.sort((T,E)=>E.priority-T.priority)){const T=y.title.slice(0,16);if(!P.has(T)&&(P.add(T),w.push(y),w.length===3))break}const U=[{title:"भावनात्मक निर्णयों में संयम एवं धैर्य",line1:"किसी भी बड़े आर्थिक या पारिवारिक निर्णय को तात्कालिक आवेश के बजाय शांत मन और तथ्यों के आधार पर लें।",line2:"सावधानी: महत्वपूर्ण समझौतों से पूर्व लिखित स्पष्टता रखें और परिवार के वरिष्ठों का मार्गदर्शन लें।",priority:50},{title:"स्वास्थ्य व दिनचर्या में नियमितता",line1:"कार्य की व्यस्तता के बीच नियमित योग, प्राणायाम और संतुलित सात्विक भोजन आपकी ऊर्जा को दीर्घकाल तक बनाए रखेगा।",line2:"सावधानी: रात्रि जागरण और तनाव से बचें; प्रातःकाल का सूर्य प्रकाश आपके लग्न बल को स्वतः बढ़ाता है।",priority:45},{title:"दशा-गोचर के अनुरूप समय प्रबंधन",line1:"हर वर्ष एक जैसा नहीं होता — अनुकूल दशा में विस्तार करें और मध्यम समय में कौशल व बचत मजबूत करें।",line2:"सावधानी: इस पुस्तक के 5-वर्षीय रोडमैप को देखकर अपने प्रमुख लक्ष्यों की समय-सारणी तय करें।",priority:40}];for(const y of U){if(w.length>=3)break;w.push(y)}const _=et[p]||e.panchang.lagnaLord.split(" ")[0],B=et[d]||"पंचमेश",Y=et[h]||"नवमेश",q=`आपका व्यक्तित्व (${e.panchang.lagnaName} लग्न, लग्नेश ${_} — भाव ${m?.houseInLagna||1}), आपकी सृजनशील बुद्धि (पंचमेश ${B} — भाव ${g?.houseInLagna||5}) और आपका भाग्योदय (नवमेश ${Y} — भाव ${F?.houseInLagna||9}) एक स्पष्ट सूत्र देते हैं: "${e.panchang.tatva} तत्व की अपनी स्वाभाविक शक्ति को अनुशासन और सत्यनिष्ठा से जोड़ें, ${e.lucky.ishtaDevta} के स्मरण से प्रत्येक शुभ कार्य प्रारंभ करें, और दूसरों की नकल के बजाय अपने मौलिक विवेक पर चलें — यही आपके जीवन की स्थायी समृद्धि और सम्मान का मूल मंत्र है।"`;return{sectionCode:"EX",sectionTag:"1-मिनट सार (Executive Summary)",html:`
    ${l("डिजिटल ज्योतिषाचार्य सार : कुंडली का 1-मिनट सार (Executive Summary)",u,o)}
    ${c("EX","कुंडली का 1-मिनट सार (Executive Summary) — एक दृष्टि में संपूर्ण जीवन-दिशा",`${e.panchang.lagnaName} लग्न • ${e.panchang.moonRashiName} राशि`)}

    <div class="book-card" style="background: ${t.emeraldSoft}; border: 1.5px solid #10B981; border-radius: 10px; padding: 10px 13px; margin-bottom: 10px; page-break-inside: avoid;">
      <div style="font-size: 10.2px; font-weight: 900; color: #065F46; margin-bottom: 6px; border-bottom: 1px dashed #34D399; padding-bottom: 4px;">
        ✦ आपकी कुंडली के शीर्ष 3 सबसे प्रबल योग एवं शुभ शक्तियाँ (Top 3 Strengths)
      </div>
      ${D.map((y,T)=>`
          <div style="background: #FFFFFF; border: 1px solid #A7F3D0; border-left: 4px solid #059669; border-radius: 7px; padding: 7px 10px; margin-top: ${T===0?0:7}px; page-break-inside: avoid;">
            <div style="font-size: 9.2px; font-weight: 900; color: ${t.cosmicNavy};">${T+1}. ${i(y.title)}</div>
            <div style="font-size: 8.3px; color: ${t.inkPrimary}; line-height: 1.48; margin-top: 2px;">${i(y.line1)}</div>
            <div style="font-size: 8.1px; color: #065F46; font-weight: 700; line-height: 1.45; margin-top: 2px;">${i(y.line2)}</div>
          </div>`).join("")}
    </div>

    <div class="book-card" style="background: ${t.saffronSoft}; border: 1.5px solid ${t.templeGold}; border-radius: 10px; padding: 10px 13px; margin-bottom: 10px; page-break-inside: avoid;">
      <div style="font-size: 10.2px; font-weight: 900; color: ${t.saffronDeep}; margin-bottom: 6px; border-bottom: 1px dashed ${t.templeGold}; padding-bottom: 4px;">
        ✦ शीर्ष 3 ध्यान देने योग्य विषय एवं व्यावहारिक सावधानियाँ (Top 3 Precautions)
      </div>
      ${w.map((y,T)=>`
          <div style="background: #FFFFFF; border: 1px solid ${t.borderMuted}; border-left: 4px solid ${t.saffron}; border-radius: 7px; padding: 7px 10px; margin-top: ${T===0?0:7}px; page-break-inside: avoid;">
            <div style="font-size: 9.2px; font-weight: 900; color: ${t.cosmicNavy};">${T+1}. ${i(y.title)}</div>
            <div style="font-size: 8.3px; color: ${t.inkPrimary}; line-height: 1.48; margin-top: 2px;">${i(y.line1)}</div>
            <div style="font-size: 8.1px; color: ${t.saffronDeep}; font-weight: 700; line-height: 1.45; margin-top: 2px;">${i(y.line2)}</div>
          </div>`).join("")}
    </div>

    <div class="book-card" style="background: linear-gradient(135deg, ${t.cosmicNavy} 0%, #1E293B 100%); border: 2px solid ${t.templeGold}; border-radius: 10px; padding: 11px 14px; color: ${t.warmIvory}; page-break-inside: avoid;">
      <div style="font-size: 10px; font-weight: 900; color: #FDE68A; margin-bottom: 5px;">
        ★ आपका व्यक्तिगत जीवन सफलता मंत्र (लग्नेश ${i(_)} + पंचमेश ${i(B)} + नवमेश ${i(Y)} समन्वय)
      </div>
      <div style="font-size: 8.5px; color: #F8FAFC; line-height: 1.62;">
        ${i(q)}
      </div>
      <div style="margin-top: 6px; padding-top: 5px; border-top: 1px dashed rgba(212, 175, 55, 0.5); font-size: 7.8px; color: #FCD34D; font-weight: 700; text-align: right;">
        — ${i(G.founderHi)} (पण्डित जी ऑनलाइन)
      </div>
    </div>
  `}}function ze(e,n){const{esc:i,buildBookPageHeader:l,buildSectionTitleBar:c,personHeader:u,appLogo:o}=n,r=e.panchang.lagnaNumber||1,p=e.phase2Jyotish,d=p?.vimshottari,h=p?.liveGochar,m=d?.activeMahadasha,g=d?.activeAntardasha,F=m?.lordId||"jupiter",H=g?.lordId||"mercury",N=J(e,F),D=J(e,H),L=wt(r,F),f=wt(r,H),$=h?.grahaRows.find(B=>B.id==="saturn"),v=h?.grahaRows.find(B=>B.id==="jupiter"),I=L==="yogakaraka"||L==="lagna"||L==="trikona",S=f==="yogakaraka"||f==="lagna"||f==="trikona",w=!!v?.isFavorableFromMoon,P=!!$?.isFavorableFromMoon,U=[{title:"1. करियर एवं व्यापार (Career & Business)",icon:"◆",tone:I||w?"प्रगति एवं विस्तार का काल":"स्थिर कर्म व कौशल निर्माण काल",color:I||w?t.emerald:t.saffronDeep,outlook:`वर्तमान में ${m?.lordHindi||"मुख्य"} महादशा (भाव ${N?.houseInLagna||1}) और ${g?.lordHindi||"सक्रिय"} अंतर्दशा (भाव ${D?.houseInLagna||10}) के साथ गोचर गुरु आपकी चंद्र राशि से ${v?.houseFromNatalMoon||5}वें (लग्न से ${v?.houseFromNatalLagna||5}वें) और शनि चंद्र से ${$?.houseFromNatalMoon||10}वें (लग्न से ${$?.houseFromNatalLagna||10}वें) भाव में हैं। अगले 6–12 महीनों में ${I||S?"नई जिम्मेदारियां, पदोन्नति या व्यवसाय विस्तार के स्पष्ट अवसर बनेंगे; आपकी कार्यक्षमता की सराहना होगी।":"निरंतर परिश्रम और धैर्य से नींव मजबूत होगी; जल्दबाजी में नौकरी या बड़ा साझेदारी परिवर्तन टालना समझदारी होगी।"}`,action:w?"सलाह: नए प्रोजेक्ट या कौशल उन्नयन की शुरुआत करने के लिए यह 6–12 माह अत्यंत अनुकूल हैं।":"सलाह: वर्तमान कार्यस्थल पर गुणवत्ता व अनुशासन बढ़ाएं; कागजी अनुबंध ध्यानपूर्वक पढ़ें।"},{title:"2. धन-संपत्ति एवं निवेश (Finance & Wealth)",icon:"◆",tone:w&&P?"सुदृढ़ धनागमन एवं बचत योग":w||I?"संतुलित आय व क्रमिक वृद्धि":"बजट अनुशासन व सुरक्षित निवेश काल",color:w?t.emerald:t.saffronDeep,outlook:`आपकी कुंडली के धन भाव (SAV ${yt(e,2)} बिंदु) व लाभ भाव (SAV ${yt(e,11)} बिंदु) पर सक्रिय ${g?.lordHindi||""} अंतर्दशा व गुरु गोचर (${v?.currentRashiNameHi||""}) का सीधा प्रभाव है। ${w?"अटके हुए धन की प्राप्ति, आय के नए स्रोत और परिवार में शुभ निवेश के सुंदर संकेत बन रहे हैं।":"आय नियमित रहेगी, परंतु आकस्मिक घरेलू या व्यावसायिक व्यय बढ़ सकते हैं; सट्टेबाजी या उच्च जोखिम वाले निवेश से दूरी रखें।"}`,action:"सलाह: मासिक आय का कम से कम 20% सुरक्षित बचत में रखें और किसी को बिना लिखित सुरक्षा बड़ा कर्ज न दें।"},{title:"3. स्वास्थ्य एवं मानसिक ऊर्जा (Health & Vitality)",icon:"◆",tone:h?.sadeSatiPhase&&h.sadeSatiPhase!=="NONE"?"दिनचर्या व विश्राम पर विशेष ध्यान":"संतुलित ऊर्जा एवं उत्साह",color:h?.sadeSatiPhase&&h.sadeSatiPhase!=="NONE"?t.crimson:t.emerald,outlook:`शनि गोचर (${$?.currentRashiNameHi||""}, चंद्र से ${$?.houseFromNatalMoon||1}वां भाव — ${h?.sadeSatiLabelHi||"सामान्य"}) तथा जन्म नाड़ी (${e.panchang.nadi}) के अनुसार अगले 6–12 महीनों में ${P&&!N?.isDebilitated?"आपका मनोबल और शारीरिक स्फूर्ति अच्छी बनी रहेगी; पुरानी थकान से राहत मिलेगी।":"कार्यभार के कारण तनाव, नींद की कमी या पाचन/जोड़ों की थकान महसूस हो सकती है, जिसे नियमित व्यायाम से आसानी से नियंत्रित किया जा सकता है।"}`,action:"सलाह: प्रतिदिन 20 मिनट प्राणायाम/टहलना, पर्याप्त जल सेवन और समय पर रात्रि भोजन को अनिवार्य नियम बनाएं।"},{title:"4. परिवार एवं दांपत्य सुख (Family & Relationships)",icon:"◆",tone:w||H==="venus"||H==="jupiter"?"मधुर सामंजस्य व मांगलिक योग":"संवाद व धैर्य से मधुरता",color:w||H==="venus"||H==="jupiter"?t.emerald:t.saffronDeep,outlook:`देवगुरु बृहस्पति का ${v?.houseFromNatalLagna||5}वें लग्न भाव में गोचर तथा ${m?.lordHindi||""}–${g?.lordHindi||""} दशा अवधि परिवार में ${w||H==="venus"||H==="jupiter"?"आपसी स्नेह, शुभ उत्सव, तीर्थयात्रा और जीवनसाथी के साथ बेहतर तालमेल के योग बना रही है।":"व्यस्तता के कारण संवाद की कमी ला सकती है; छोटी बातों को तूल न दें और परिवार के साथ गुणवत्तापूर्ण समय बिताएं।"}`,action:"सलाह: सप्ताह में एक दिन परिवार के साथ शांत संवाद व सात्विक पूजन करें — इससे घर का वातावरण सकारात्मक रहेगा।"}];return{sectionCode:"DJ1",sectionTag:"वर्तमान समय विश्लेषण (दशा + गोचर)",html:`
    ${l("डिजिटल ज्योतिषाचार्य : वर्तमान समय का सटीक विश्लेषण",u,o)}
    ${c("DJ1","वर्तमान समय का सटीक विश्लेषण — सक्रिय दशा + लाइव गुरु/शनि गोचर समन्वय",`आकलन तिथि: ${h?.computedAtDateHi||"आज"}`)}

    <div class="book-card" style="background: ${t.cosmicNavy}; color: ${t.warmIvory}; border: 1.8px solid ${t.templeGold}; border-radius: 10px; padding: 9px 13px; margin-bottom: 10px; page-break-inside: avoid;">
      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; font-size: 8px; text-align: center;">
        <div style="background: rgba(255,255,255,0.08); border: 1px solid rgba(212,175,55,0.45); border-radius: 7px; padding: 6px;">
          <div style="color:#FCD34D; font-weight:700;">सक्रिय महादशा</div>
          <div style="font-size: 10px; font-weight: 900; margin-top: 2px;">${i(m?.lordHindi||"—")}</div>
          <div style="color:#CBD5E1; font-size:7.2px; white-space:nowrap;">${i(m?.endDateHi||"")} तक</div>
        </div>
        <div style="background: rgba(255,255,255,0.08); border: 1px solid rgba(212,175,55,0.45); border-radius: 7px; padding: 6px;">
          <div style="color:#FCD34D; font-weight:700;">सक्रिय अंतर्दशा</div>
          <div style="font-size: 10px; font-weight: 900; margin-top: 2px;">${i(g?.lordHindi||"—")}</div>
          <div style="color:#CBD5E1; font-size:7.2px; white-space:nowrap;">${i(g?.endDateHi||"")} तक</div>
        </div>
        <div style="background: rgba(255,255,255,0.08); border: 1px solid rgba(212,175,55,0.45); border-radius: 7px; padding: 6px;">
          <div style="color:#FCD34D; font-weight:700;">लाइव गुरु गोचर</div>
          <div style="font-size: 9.5px; font-weight: 900; margin-top: 2px;">${i(v?.currentRashiNameHi||"—")}</div>
          <div style="color:#6EE7B7; font-size:7.2px;">चंद्र ${v?.houseFromNatalMoon||"-"}वां • लग्न ${v?.houseFromNatalLagna||"-"}वां</div>
        </div>
        <div style="background: rgba(255,255,255,0.08); border: 1px solid rgba(212,175,55,0.45); border-radius: 7px; padding: 6px;">
          <div style="color:#FCD34D; font-weight:700;">लाइव शनि गोचर</div>
          <div style="font-size: 9.5px; font-weight: 900; margin-top: 2px;">${i($?.currentRashiNameHi||"—")}</div>
          <div style="color:#FDE68A; font-size:7.2px;">चंद्र ${$?.houseFromNatalMoon||"-"}वां • लग्न ${$?.houseFromNatalLagna||"-"}वां</div>
        </div>
      </div>
      <div style="margin-top: 7px; font-size: 8.1px; color: #E2E8F0; line-height: 1.48; text-align: center;">
        <b>द्वि-गोचर सक्रियता:</b> ${i(h?.doubleTransitSummaryHi||"गुरु एवं शनि का संयुक्त गोचर जीवन के प्रमुख लक्ष्यों को दिशा दे रहा है।")}
      </div>
    </div>

    <div style="display: flex; flex-direction: column; gap: 9px;">
      ${U.map(B=>`
          <div class="book-card" style="background: ${t.pureIvory}; border: 1.4px solid ${t.templeGold}; border-left: 4.5px solid ${B.color}; border-radius: 9px; padding: 9px 12px; page-break-inside: avoid;">
            <div style="display: table; width: 100%; margin-bottom: 4px;">
              <div style="display: table-cell; font-size: 9.8px; font-weight: 900; color: ${t.cosmicNavy};">${B.icon} ${i(B.title)}</div>
              <div style="display: table-cell; text-align: right; font-size: 8px; font-weight: 800; color: ${B.color}; white-space: nowrap;">${i(B.tone)}</div>
            </div>
            <div style="font-size: 8.4px; color: ${t.inkPrimary}; line-height: 1.54;">${i(B.outlook)}</div>
            <div style="margin-top: 5px; padding: 4px 8px; background: ${t.warmIvory}; border-radius: 5px; font-size: 8px; font-weight: 800; color: ${t.saffronDeep}; line-height: 1.45;">
              ${i(B.action)}
            </div>
          </div>`).join("")}
    </div>
  `}}function Ae(e,n){const{esc:i,buildBookPageHeader:l,buildSectionTitleBar:c,personHeader:u,appLogo:o}=n,r=e.panchang.lagnaNumber||1,p=X(r,10),d=X(r,7),h=X(r,6),m=X(r,2),g=X(r,11),F=X(r,4),H=X(r,5),N=X(r,9),D=X(r,12),L=X(r,8),f=X(r,1),$=J(e,p),v=J(e,d),I=J(e,h),S=J(e,m),w=J(e,g),P=J(e,F),U=J(e,H),_=J(e,N),B=J(e,D),Y=J(e,L),q=J(e,f),K=J(e,"mercury"),y=J(e,"saturn"),T=J(e,"venus"),E=J(e,"jupiter"),j=J(e,"mars"),Z=J(e,"rahu"),O=J(e,"moon"),st=(Mt(e,"mercury")>=1?2:0)+([1,2,7,10,11].includes(v?.houseInLagna||0)?2:0)+(yt(e,7)>=28?1:0)+(K&&[1,2,7,10,11].includes(K.houseInLagna)?2:0),gt=(Mt(e,"saturn")>=1?2:0)+([1,6,10,11].includes(I?.houseInLagna||0)?2:0)+(yt(e,6)>=28?1:0)+(y&&[1,6,10,11].includes(y.houseInLagna)?2:0),lt=st>gt+1?"स्वतंत्र व्यापार, परामर्श या उद्यमिता में विशेष सफलता":gt>st+1?"उच्च सेवा, कॉर्पोरेट/प्रशासनिक नौकरी व विशेषज्ञ पद अधिक अनुकूल":"नौकरी के साथ अनुभव लेकर आगे स्वतंत्र कार्य/व्यवसाय — दोनों में श्रेष्ठ संतुलन",M=yt(e,2),it=yt(e,11),dt=M>=28&&it>=28?"अत्यंत सुदृढ़ धन संचय एवं बहु-स्रोत आय योग":it>=28?"नियमित अच्छी आमदनी — व्यवस्थित बचत से स्थायी समृद्धि":"अनुशासित वित्तीय योजना व दीर्घकालिक निवेश से स्थिर संपत्ति निर्माण",ct=yt(e,4),s=e.phase1Astronomy?.shodashavarga.find(ot=>ot.spec.id==="D4")?.ascendantRashiNameHi||Jt[ce(r,4)-1],b=ct>=28||P&&[1,4,5,9,10,11].includes(P.houseInLagna),R=e.deepAnalysis?.navamshaAndCareerDepth.d9Lagna||e.navamsaChart[0]?.rashiName||"",k=e.doshaAnalysis.manglik.isManglik?"कुंडली में मंगल प्रभाव होने से विवाह पूर्व अष्टकूट व मंगल मिलान अवश्य कराएं।":"कुंडली मांगलिक बाधा से मुक्त/परिहार युक्त है, जो वैवाहिक सामंजस्य के लिए शुभ संकेत है।",x=e.phase1Astronomy?.shodashavarga.find(ot=>ot.spec.id==="D7"),C=e.phase1Astronomy?.shodashavarga.find(ot=>ot.spec.id==="D24"),z=yt(e,5),W=[_&&[9,12].includes(_.houseInLagna),B&&[1,9,10,12].includes(B.houseInLagna),Z&&[1,4,7,9,10,12].includes(Z.houseInLagna),O&&[7,9,12].includes(O.houseInLagna)].filter(Boolean).length,tt=W>=2?"विदेश यात्रा, विदेशी कंपनी/आय या जन्मस्थान से दूर बड़ी सफलता के प्रबल योग":W===1?"कार्य या तीर्थ हेतु विदेश/दूरस्थ यात्राओं के अच्छे अवसर":"स्वदेश अथवा अपने गृह-क्षेत्र में ही अधिक स्थिर और सम्मानजनक उन्नति के योग",kt=e.panchang.nadi.includes("आदि")?"वात प्रकृति (आदि नाड़ी) — जोड़ों, गैस, अनिद्रा व त्वचा की नमी का ध्यान रखें":e.panchang.nadi.includes("मध्य")?"पित्त प्रकृति (मध्य नाड़ी) — एसिडिटी, अधिक गर्मी, रक्तचाप व नेत्र विश्राम का ध्यान रखें":"कफ प्रकृति (अन्त्य नाड़ी) — सर्दी-जुकाम, साइनस, श्वसन व वजन संतुलन का ध्यान रखें",rt=Date.now(),Ht=e.phase1Astronomy?.spaceTime.utcEpochMs||rt-(e.input.ageYears||25)*365.2425*864e5,It=e.phase2Jyotish?.vimshottari;let te="आगामी शुभ त्रिकोण/योगकारक दशा काल",ee="आपकी कुंडली के शुभ ग्रहों की आगामी दशा में करियर, धन और प्रतिष्ठा का उत्कर्ष होगा।";if(It){let ot=-999,bt=null;const Nt=mt=>{const ht=wt(r,mt),nt=J(e,mt),oe=Mt(e,mt);let ft=ht==="yogakaraka"?40:ht==="lagna"?32:ht==="trikona"?30:ht==="kendra"?20:ht==="dusthana"?-15:8;return nt?.isExalted?ft+=20:nt?.dignity.includes("स्वगृही")?ft+=15:nt?.isDebilitated&&(ft-=15),nt&&[1,4,5,9,10,11].includes(nt.houseInLagna)&&(ft+=10),ft+=Math.round((oe-1)*15),ft};for(const mt of It.mahadashas){if(mt.endUtcMs<rt)continue;const ht=Nt(mt.lordId);for(const nt of mt.antardashas){if(nt.endUtcMs<rt||(nt.startUtcMs-Ht)/(365.2425*864e5)>82)continue;const ft=ht*.6+Nt(nt.lordId)*.4;if(ft>ot){ot=ft;const ne=Math.max(0,Number(((nt.startUtcMs-Ht)/(365.2425*864e5)).toFixed(1))),ye=Math.max(ne,Number(((nt.endUtcMs-Ht)/(365.2425*864e5)).toFixed(1)));bt={title:`${mt.lordHindi} महादशा – ${nt.lordHindi} अंतर्दशा`,startHi:nt.startDateHi,endHi:nt.endDateHi,ageStart:ne,ageEnd:ye,reason:`इस काल में महादशा स्वामी ${mt.lordHindi} एवं अंतर्दशा स्वामी ${nt.lordHindi} आपकी कुंडली के शुभ भावों को संयुक्त रूप से सक्रिय करेंगे`}}}}bt&&(te=`${bt.title} (${bt.startHi} → ${bt.endHi} • आयु ${bt.ageStart}–${bt.ageEnd} वर्ष)`,ee=`${bt.reason}। यह अवधि आपके जीवन में बड़ा पद, स्थायी संपत्ति, वित्तीय उछाल और सामाजिक सम्मान दिलाने वाला प्रमुख स्वर्णिम चरण सिद्ध होगी।`)}const be=h===f?`लग्नेश ${et[f]} (भाव ${q?.houseInLagna||1})`:`षष्ठेश ${et[h]} (भाव ${I?.houseInLagna||6})`,fe=(()=>{const ot=[`लग्नेश ${et[f]} (${q?.dignity||"संतुलित"}, भाव ${q?.houseInLagna||1})`];return h!==f&&ot.push(`षष्ठेश ${et[h]} (भाव ${I?.houseInLagna||6})`),L!==f&&L!==h&&ot.push(`अष्टमेश ${et[L]} (भाव ${Y?.houseInLagna||8})`),ot.join(", ")})(),ie=[{qNo:1,question:"नौकरी बेहतर है या स्वयं का व्यापार (Job vs Business)?",badge:lt,answer:`दशमेश ${et[p]} (भाव ${$?.houseInLagna||10}, ${$?.dignity||"संतुलित"}), सप्तमेश ${et[d]} (भाव ${v?.houseInLagna||7}), ${be} तथा बुध/शनि के षड्बल तुलना से स्पष्ट है कि आपके लिए "${lt}" सर्वाधिक लाभकारी रहेगा। दशमांश (D-10 लग्न: ${e.deepAnalysis?.navamshaAndCareerDepth.d10Lagna||e.panchang.lagnaName}) भी कर्म-क्षेत्र में निरंतर प्रतिष्ठा व नेतृत्व की पुष्टि करता है।`},{qNo:2,question:"धन संचय, आय और आर्थिक स्थिरता कैसी रहेगी?",badge:`धन भाव SAV: ${M} • लाभ भाव SAV: ${it}`,answer:`आपकी कुंडली में द्वितीय (धन) भाव में ${M} अष्टकवर्ग बिंदु व धनेश ${et[m]} (भाव ${S?.houseInLagna||2}) तथा एकादश (लाभ) भाव में ${it} बिंदु व लाभेश ${et[g]} (भाव ${w?.houseInLagna||11}) स्थित हैं। निष्कर्ष: ${dt}। आय बढ़ने के साथ व्यवस्थित बचत व स्थायी संपत्ति में निवेश आपको आर्थिक रूप से पूर्ण सुरक्षित बनाएगा।`},{qNo:3,question:"अपना घर (अचल संपत्ति) और वाहन सुख कैसा मिलेगा?",badge:`चतुर्थ भाव SAV: ${ct} • D-4 लग्न: ${s}`,answer:`चतुर्थ (सुख-भवन) भाव में ${ct} बिंदु, चतुर्थेश ${et[F]} (भाव ${P?.houseInLagna||4}), भूमि कारक मंगल (भाव ${j?.houseInLagna||1}) व वाहन कारक शुक्र (भाव ${T?.houseInLagna||1}) तथा चतुर्थांश (D-4 लग्न: ${s}) के अनुसार ${b?"स्वयं के सुंदर आवास, भूखंड और उत्तम वाहन सुख के प्रबल योग हैं। चतुर्थेश/शुक्र की दशा में संपत्ति निर्माण विशेष रूप से सफल होगा।":"परिश्रम और सुव्यवस्थित बचत के बल पर जीवन के मध्य चरण में स्थायी मकान व वाहन सुख अवश्य प्राप्त होगा; संपत्ति क्रय में कागजी जांच पूर्ण रखें।"}`},{qNo:4,question:"विवाह, जीवनसाथी का स्वभाव और दांपत्य सुख कैसा रहेगा?",badge:`सप्तमेश: ${et[d]} • D-9 लग्न: ${R.split(" ")[0]||""}`,answer:`सप्तम भाव के स्वामी ${et[d]} (भाव ${v?.houseInLagna||7}, ${v?.dignity||""}), विवाह कारक शुक्र (भाव ${T?.houseInLagna||7}) व गुरु (भाव ${E?.houseInLagna||5}) और नवांश कुंडली (D-9 लग्न: ${R}) से संकेत मिलता है कि जीवनसाथी समझदार, सहयोगी एवं परिवार-प्रेमी होंगे। ${k}`},{qNo:5,question:"संतान सुख और उच्च शिक्षा की स्थिति कैसी रहेगी?",badge:`पंचम भाव SAV: ${z} • D-7: ${x?.ascendantRashiNameHi||"शुभ"} • D-24: ${C?.ascendantRashiNameHi||"शुभ"}`,answer:`पंचम भाव के स्वामी ${et[H]} (भाव ${U?.houseInLagna||5}, SAV ${z} बिंदु), संतान-ज्ञान कारक देवगुरु बृहस्पति (भाव ${E?.houseInLagna||5}), सप्तांश (D-7 लग्न: ${x?.ascendantRashiNameHi||"शुभ"}) व चतुर्विंशांश (D-24 लग्न: ${C?.ascendantRashiNameHi||"शुभ"}) के समन्वय से आपकी ग्रहणशीलता, व्यावहारिक विद्या और संतान-संस्कार अत्यंत सकारात्मक रहेंगे।`},{qNo:6,question:"क्या विदेश यात्रा, विदेशी आय या दूर स्थान में बसने का योग है?",badge:W>=2?"प्रबल विदेश / दूरस्थ योग":W===1?"आंशिक यात्रा योग":"स्वदेश प्रधान उन्नति",answer:`नवमेश ${et[N]} (भाव ${_?.houseInLagna||9}), द्वादशेश ${et[D]} (भाव ${B?.houseInLagna||12}), राहु (भाव ${Z?.houseInLagna||1}) तथा चंद्रमा (भाव ${O?.houseInLagna||1}) की स्थिति स्पष्ट करती है: "${tt}"। राहु या द्वादशेश/नवमेश की अंतर्दशा में दूरस्थ संपर्क व ऑनलाइन/वैश्विक मंच से विशेष लाभ मिलेगा।`},{qNo:7,question:"स्वास्थ्य की दृष्टि से किन बातों का विशेष ध्यान रखें?",badge:`${e.panchang.nadi} • लग्नेश भाव ${q?.houseInLagna||1}`,answer:`आपकी जन्म नाड़ी (${e.panchang.nadi}) के अनुसार: ${kt}। ${fe} बताते हैं कि नियमित योग, तनाव-नियंत्रण और मौसमी खानपान अनुशासन से आप दीर्घायु व स्वस्थ रहेंगे।`},{qNo:8,question:'मेरे जीवन का "स्वर्णिम काल (Golden Period)" कब आएगा?',badge:"दशा-बल आधारित सर्वोत्तम चरण",answer:`आपकी विंशोत्तरी दशा, ग्रहों के षड्बल और योगकारक/त्रिकोण स्वामित्व के समग्र विश्लेषण के अनुसार आपका प्रमुख स्वर्णिम काल है: ${te}। ${ee}`}],ae=(ot,bt,Nt,mt)=>({sectionCode:ot,sectionTag:bt,html:`
      ${l(`डिजिटल ज्योतिषाचार्य : 8 बड़े सवालों के सीधे जवाब (${Nt})`,u,o)}
      ${c(ot,`आपके जीवन के 8 बड़े सवालों के सीधे, सरल जवाब (${Nt})`,"जटिल शब्दावली से मुक्त स्पष्ट मार्गदर्शन")}
      <div style="display: flex; flex-direction: column; gap: 11px; margin-top: 4px;">
        ${mt.map(ht=>`
            <div class="book-card" style="background: ${t.pureIvory}; border: 1.5px solid ${t.templeGold}; border-left: 4.5px solid ${t.saffron}; border-radius: 10px; padding: 10px 13px; page-break-inside: avoid;">
              <div style="display: table; width: 100%; border-bottom: 1px dashed ${t.borderMuted}; padding-bottom: 5px; margin-bottom: 6px;">
                <div style="display: table-cell; vertical-align: middle; font-size: 10px; font-weight: 900; color: ${t.cosmicNavy}; padding-right: 8px;">
                  प्रश्न ${ht.qNo}. ${i(ht.question)}
                </div>
                <div style="display: table-cell; vertical-align: middle; text-align: right; white-space: nowrap; width: 1%;">
                  <span style="display: inline-block; background: ${t.emeraldSoft}; color: #065F46; border: 1px solid #34D399; border-radius: 999px; padding: 2.5px 9px; font-size: 7.4px; font-weight: 800; line-height: 1.25;">${i(ht.badge)}</span>
                </div>
              </div>
              <div style="font-size: 8.6px; color: ${t.inkPrimary}; line-height: 1.58;">
                <b style="color:${t.saffronDeep};">सीधा उत्तर:</b> ${i(ht.answer)}
              </div>
            </div>`).join("")}
      </div>
    `});return[ae("DJ2","8 बड़े सवाल (प्रश्न 1–4)","भाग 1/2 : प्रश्न 1 से 4",ie.slice(0,4)),ae("DJ3","8 बड़े सवाल (प्रश्न 5–8)","भाग 2/2 : प्रश्न 5 से 8",ie.slice(4,8))]}function Pe(e,n){const{esc:i,buildBookPageHeader:l,buildSectionTitleBar:c,personHeader:u,appLogo:o}=n,r=Date.now(),p=new Date(r).getFullYear(),d=e.panchang.lagnaNumber||1,h=e.panchang.moonRashiNumber||1,m=e.phase2Jyotish?.vimshottari,g=e.phase2Jyotish?.liveGochar,F={1:"आत्मचिंतन, स्वास्थ्य नियम और दीर्घकालिक दिशा तय करने का समय बनता है",2:"धन-संचय, वाणी प्रभाव और परिवार में मांगलिक कार्यों के सुंदर योग बनते हैं",3:"नए संपर्क, छोटी यात्राओं और स्वप्रयास से कार्य विस्तार का योग बनता है",4:"गृह-सुख, वाहन/संपत्ति योजना और पारिवारिक स्थिरता पर ध्यान केंद्रित रहता है",5:"विद्या, संतान सुख, सृजनशील सफलता और विवेकपूर्ण निवेश में विशेष लाभ मिलता है",6:"प्रतिस्पर्धा में विजय, सेवा-अनुशासन और ऋण/विवाद समाधान के अवसर बनते हैं",7:"दांपत्य सौहार्द, व्यापारिक साझेदारी और सामाजिक प्रतिष्ठा में स्पष्ट वृद्धि होती है",8:"गहन शोध, आध्यात्मिक परिपक्वता और आर्थिक निर्णयों में सतर्कता की अपेक्षा रहती है",9:"भाग्योदय, वरिष्ठों का आशीर्वाद, तीर्थयात्रा और बड़े अवसरों की प्राप्ति होती है",10:"कर्म-क्षेत्र में पदोन्नति, नई जिम्मेदारी और व्यावसायिक पहचान सुदृढ़ होती है",11:"बहु-स्रोत आय, रुके धन की प्राप्ति और महत्वाकांक्षाओं की पूर्ति का प्रबल योग बनता है",12:"विदेश/बाहरी संपर्क, दान-पुण्य और व्यय के सुनियोजित प्रबंधन पर बल रहता है"},H={1:"जन्म-शनि (साढ़ेसाती मध्य) होने से स्वास्थ्य, धैर्य और समय-प्रबंधन को सर्वोच्च प्राथमिकता दें",2:"साढ़ेसाती उत्तरार्ध में वाणी-संयम, सुरक्षित बचत और पारिवारिक संवाद से स्थायी लाभ उठाएं",3:"तृतीय भाव के परम शुभ शनि गोचर का लाभ उठाकर साहसी विस्तार, नया प्रोजेक्ट व नेटवर्किंग आगे बढ़ाएं",4:"चतुर्थ ढैय्या में माता/गृह-संपत्ति व कार्यस्थल के कागजात की पूरी जांच के बाद ही बड़ा निर्णय लें",5:"पंचम शनि में सट्टेबाजी टालकर कौशल उन्नयन, शोध और संतान/शिक्षा योजना को सुव्यवस्थित करें",6:"षष्ठ भाव के अत्यंत शुभ शनि गोचर में करियर-लक्ष्य, प्रतिस्पर्धा व पुराने ऋण समाप्ति पर जोर दें",7:"सप्तम शनि में व्यापारिक साझेदारी व वैवाहिक संवाद में पारदर्शिता और लिखित स्पष्टता बनाए रखें",8:"अष्टम ढैय्या में जोखिम भरे निवेश व उधार से दूर रहें तथा नियमित योग-साधना को नियम बनाएं",9:"नवम शनि में दीर्घकालिक लक्ष्य, उच्च प्रशिक्षण व धर्मसम्मत कर्म से भाग्योदय की नींव मजबूत करें",10:"दशम शनि में कड़ी मेहनत, अनुशासन और प्रशासनिक कौशल से स्थायी पद-प्रतिष्ठा अर्जित करें",11:"एकादश भाव के श्रेष्ठ लाभकारी शनि गोचर में संपत्ति क्रय, आय विस्तार और बड़े निवेश साकार करें",12:"साढ़ेसाती प्रथम चरण में अनावश्यक व्यय पर नियंत्रण रखें और विदेश/ऑनलाइन अवसरों की योजना बनाएं"},N={sun:"नेतृत्व, राजकीय/प्रशासनिक कार्य व आत्मसम्मान",moon:"मानसिक शांति, जनसंपर्क, गृह-सुख व रचनात्मकता",mars:"पराक्रम, तकनीकी दक्षता, भूमि-संपत्ति व ऊर्जा",mercury:"व्यापार, संवाद, लेखन, वित्त व विश्लेषणात्मक कौशल",jupiter:"ज्ञान, धन-वृद्धि, संतान/शिक्षा व शुभ मांगलिक उन्नति",venus:"सुख-सुविधा, कला, वाहन-ऐश्वर्य व दांपत्य/साझेदारी सौहार्द",saturn:"दीर्घकालिक करियर निर्माण, अनुशासन, सेवा व स्थायी संपत्ति",rahu:"नवीन तकनीक, दूरस्थ/विदेशी संपर्क व तीव्र महत्वाकांक्षा",ketu:"गहन शोध, विशेषज्ञता, आध्यात्मिक एकाग्रता व सूक्ष्म विवेक"},D=($,v)=>{const I=Pt(d,$),S=N[$]||"कर्म एवं व्यक्तिगत विकास";if($==="rahu"||$==="ketu")return{houseClause:`${J(e,$)?.houseInLagna||1}वें भाव स्थित ${v} अंतर्दशा (${S})`,natureTone:$==="rahu"?"अप्रत्याशित अवसर, नवाचार और बाहरी नेटवर्क को सक्रिय करती है":"गहन एकाग्रता, शोध और अनावश्यक उलझनों से मुक्ति दिलाती है",actionFocus:$==="rahu"?"आधुनिक तकनीक व दूरस्थ संपर्क का लाभ लें, पर भ्रामक सौदों से बचें":"विशेषज्ञ कौशल निखारें और शांत विवेक से निर्णय लें"};const w=wt(d,$),P=I.some(_=>_===2||_===7)&&!I.includes(1)&&!I.some(_=>_===5||_===9),U=I.length>0?`भाव ${I.join("/")}`:"प्रमुख भाव";return w==="yogakaraka"?{houseClause:`योगकारक ${v} अंतर्दशा (${U} स्वामी — ${S})`,natureTone:"राजयोगकारी उन्नति, पदोन्नति और स्थायी समृद्धि का मार्ग खोलती है",actionFocus:"इस उच्च फलदायी चरण में करियर विस्तार, संपत्ति या बड़े लक्ष्य प्राथमिकता से साधें"}:w==="lagna"?{houseClause:`लग्नेश ${v} अंतर्दशा (${U} स्वामी — ${S})`,natureTone:"व्यक्तिगत पहचान, आत्मविश्वास और स्वास्थ्य-स्फूर्ति को सीधे बल देती है",actionFocus:"स्वयं के नेतृत्व, ब्रांड/प्रतिष्ठा निर्माण और महत्वपूर्ण पहल को आगे बढ़ाएं"}:w==="trikona"?{houseClause:`त्रिकोणेश ${v} अंतर्दशा (${U} स्वामी — ${S})`,natureTone:"भाग्य-सहयोग, विद्या/संतान सुख और सृजनशील समृद्धि प्रदान करती है",actionFocus:"शिक्षा, सृजनशील निवेश और शुभ मांगलिक योजनाओं को गति दें"}:w==="dusthana"?{houseClause:`दुःस्थान स्वामी ${v} अंतर्दशा (${U} — ${S})`,natureTone:"सामान्य से अधिक परिश्रम, प्रतिस्पर्धा या बाहरी बदलाव के बाद परिपक्व लाभ देती है",actionFocus:"कर्ज/विवाद व आवेगी बदलाव से बचें; अनुशासित दिनचर्या और व्यय नियंत्रण रखें"}:P?{houseClause:`धन/साझेदारी (${U}) स्वामी ${v} अंतर्दशा (${S})`,natureTone:"आर्थिक लेन-देन व साझेदारी में सक्रियता के साथ स्वास्थ्य सजगता की मांग करती है",actionFocus:"वित्तीय अनुबंध स्पष्ट रखें, कुटुम्ब सौहार्द बढ़ाएं और नियमित स्वास्थ्य जांच कराएं"}:w==="kendra"?{houseClause:`केंद्रेश ${v} अंतर्दशा (${U} स्वामी — ${S})`,natureTone:"कार्यक्षेत्र, गृह-सुख और व्यावहारिक उत्तरदायित्वों को सुदृढ़ बनाती है",actionFocus:"व्यावसायिक ढांचे को मजबूत करें और निरंतर कर्म से स्थायी परिणाम पाएं"}:{houseClause:`उपचय/लाभ (${U}) स्वामी ${v} अंतर्दशा (${S})`,natureTone:"निरंतर प्रयास से आय, पराक्रम और व्यावहारिक नेटवर्क में क्रमिक वृद्धि करती है",actionFocus:"लगातार कौशल अभ्यास, नेटवर्किंग और अनुशासित बचत पर ध्यान केंद्रित करें"}},L=Array.from({length:5},($,v)=>{const I=p+v,S=v===0,w=S?r:Date.UTC(I,5,15,6,30,0);let P="मुख्य",U="सक्रिय",_="jupiter",B="mercury";if(m)if(S)P=m.activeMahadasha.lordHindi,U=m.activeAntardasha.lordHindi,_=m.activeMahadasha.lordId,B=m.activeAntardasha.lordId;else{const z=m.mahadashas.find(tt=>w>=tt.startUtcMs&&w<tt.endUtcMs)||m.activeMahadasha,W=z.antardashas.find(tt=>w>=tt.startUtcMs&&w<tt.endUtcMs)||z.antardashas[0];P=z.lordHindi,U=W.lordHindi,_=z.lordId,B=W.lordId}const Y=S?g?.grahaRows.find(z=>z.id==="jupiter"):void 0,q=S?g?.grahaRows.find(z=>z.id==="saturn"):void 0,K=Y&&q?null:xe(w),y=Y?Y.currentRashiNumber:K.grahas.jupiter.signNumber,T=q?q.currentRashiNumber:K.grahas.saturn.signNumber,E=Y?Y.houseFromNatalMoon:(y-h+12)%12+1,j=q?q.houseFromNatalMoon:(T-h+12)%12+1,Z=[2,5,7,9,11].includes(E),O=[3,6,11].includes(j),st=[1,2,4,8,12].includes(j),gt=wt(d,_),lt=wt(d,B);let M=3;gt==="yogakaraka"||gt==="lagna"||gt==="trikona"?M+=.65:gt==="dusthana"&&(M-=.55),lt==="yogakaraka"||lt==="lagna"||lt==="trikona"?M+=.55:lt==="dusthana"&&(M-=.45),Z&&(M+=.7),O&&(M+=.45),st&&(M-=.45);const it=Math.min(5,Math.max(2,Math.round(M))),dt=`${"★".repeat(it)}${"☆".repeat(5-it)}`,ct=Jt[y-1],pt=Jt[T-1],s=D(B,U),b=F[E]||"संतुलित प्रगति व स्थिरता बनती है",R=H[j]||"धैर्यपूर्वक कर्म व अनुशासन बनाए रखें",k=S?`वर्तमान सक्रिय ${P} महादशा में ${s.houseClause} ${s.natureTone}।`:`वर्ष ${I} में ${P} महादशा के अंतर्गत ${s.houseClause} ${s.natureTone}।`,x=`गोचर गुरु (${ct}, चंद्र से ${E}वां) के प्रभाव से ${b}।`,C=`कार्य-योजना: ${R}; साथ ही ${s.actionFocus}।`;return{year:I,dashaLabel:`${P} – ${U}`,transitNote:`गुरु: ${ct} (${E}) • शनि: ${pt} (${j})`,stars:it,starStr:dt,summary:`${k} ${x} ${C}`}}),f=`
    ${l(`डिजिटल ज्योतिषाचार्य : 5-वर्षीय वार्षिक रोडमैप (${p}–${p+4})`,u,o)}
    ${c("DJ4",`आने वाले 5 वर्षों का वार्षिक रोडमैप (${p} से ${p+4})`,"विंशोत्तरी अंतर्दशा + गुरु/शनि गोचर आधारित")}

    <table class="book-table" style="font-size: 8.2px; width: 100%; table-layout: fixed;">
      <thead>
        <tr>
          <th style="width: 9%; text-align:center;">वर्ष</th>
          <th style="width: 19%;">सक्रिय अंतर्दशा व गोचर</th>
          <th style="width: 13%; text-align:center;">शुभता रेटिंग</th>
          <th style="width: 59%;">वार्षिक फलादेश एवं व्यावहारिक कार्य-योजना</th>
        </tr>
      </thead>
      <tbody>
        ${L.map(($,v)=>`
            <tr style="background:${v===0?t.emeraldSoft:v%2===0?"#FFFDF8":"#FEF6E4"}; page-break-inside: avoid;">
              <td style="text-align:center; font-weight:900; font-size: 9.8px; color:${t.cosmicNavy}; white-space: nowrap;">${$.year}${v===0?'<div style="font-size:6.8px; color:#059669;">वर्तमान</div>':""}</td>
              <td style="padding: 8px 7px;">
                <div style="font-weight:800; color:${t.saffronDeep};">${i($.dashaLabel)}</div>
                <div style="font-size:7.3px; color:${t.inkMuted}; margin-top:2px;">${i($.transitNote)}</div>
              </td>
              <td style="text-align:center; white-space: nowrap;">
                <div style="font-size: 11px; color: ${$.stars>=4?"#059669":$.stars===3?"#D97706":"#C2410C"}; letter-spacing: 0.5px;">${$.starStr}</div>
                <div style="font-size: 7.4px; font-weight: 800; color: ${t.cosmicNavy}; margin-top: 2px;">${$.stars} / 5 स्टार</div>
              </td>
              <td style="padding: 8px 8px; line-height: 1.52; color: ${t.inkPrimary};">${i($.summary)}</td>
            </tr>`).join("")}
      </tbody>
    </table>

    <div class="book-card" style="margin-top: 10px; background: ${t.pureIvory}; border: 1.4px solid ${t.templeGold}; border-radius: 9px; padding: 10px 13px; font-size: 8.3px; line-height: 1.58; page-break-inside: avoid;">
      <div style="font-weight: 900; color: ${t.cosmicNavy}; font-size: 9.4px; margin-bottom: 4px;">
        ✦ 5-वर्षीय रोडमैप का सही उपयोग कैसे करें?
      </div>
      <div>• <b>4★ या 5★ वाले वर्ष (विस्तार काल):</b> नया व्यवसाय, संपत्ति क्रय, विवाह, पदोन्नति या बड़ा निवेश इन वर्षों में प्राथमिकता से करें।</div>
      <div style="margin-top:3px;">• <b>3★ वाले वर्ष (निर्माण काल):</b> शिक्षा, कौशल उन्नयन, टीम निर्माण और स्थिर बचत पर ध्यान केंद्रित करें।</div>
      <div style="margin-top:3px;">• <b>2★ वाले वर्ष (संरक्षण काल):</b> किसी से विवाद या जोखिम भरे ऋण से दूर रहें, स्वास्थ्य व आध्यात्मिक साधना को मजबूत बनाएं।</div>
    </div>
  `;return{sectionCode:"DJ4",sectionTag:`5-वर्षीय रोडमैप (${p}–${p+4})`,html:f}}function Me(e,n){const{esc:i,buildBookPageHeader:l,buildSectionTitleBar:c,personHeader:u,appLogo:o}=n,r=e.panchang.lagnaNumber||1,p=X(r,1),d=X(r,5),h=X(r,9),m=[],g=new Set,F=[{id:p,role:"जीवन रत्न (लग्नेश — प्रथम भाव)",isLagna:!0},{id:d,role:"विद्या / बुद्धि रत्न (पंचमेश — पंचम भाव)",isLagna:!1},{id:h,role:"भाग्य रत्न (नवमेश — नवम भाव)",isLagna:!1}];for(const f of F){if(g.has(f.id))continue;const $=de[f.id];if(!$)continue;const v=Pt(r,f.id),I=v.filter(P=>[6,8,12].includes(P));if(!f.isLagna&&v.every(P=>[6,8,12].includes(P)))continue;g.add(f.id);const S=J(e,f.id),w=[];I.length>0&&!f.isLagna&&w.push(`भाव ${I.join("/")} का सह-स्वामित्व होने से पहले 3 दिन परीक्षण करें`),S?.isDebilitated&&w.push("जन्म कुंडली में नीच स्थिति के कारण रत्न के स्थान पर मंत्र जप व दान भी उत्तम विकल्प है"),m.push({roleLabel:f.role,spec:$,cautionNote:w.length>0?w.join(" • "):void 0})}const H=[6,8,12],N=[],D=new Set;for(const f of H){const $=X(r,f);if(D.has($)||$===p||g.has($))continue;const v=de[$];if(!v)continue;D.add($);const I=Pt(r,$).filter(S=>[6,8,12].includes(S));N.push({planetHi:v.planetHi,dusthanaHousesLabel:I.map(S=>`${S}वां भाव`).join(" व "),gemHi:v.gemHi,warningHi:v.avoidWarnHi})}return{sectionCode:"DJ5",sectionTag:"रत्न व उपाय व्यावहारिक विधि",html:`
    ${l("डिजिटल ज्योतिषाचार्य : रत्न एवं उपाय — पूर्ण व्यावहारिक विधि",u,o)}
    ${c("DJ5a",`शुभ त्रिकोण रत्न धारण की पूर्ण व्यावहारिक विधि (${e.panchang.lagnaName} लग्न)`,"लग्नेश, पंचमेश एवं नवमेश आधारित")}

    <div style="display: flex; flex-direction: column; gap: 8px; margin-bottom: 10px;">
      ${m.map((f,$)=>`
          <div class="book-card" style="background: ${t.pureIvory}; border: 1.4px solid ${t.templeGold}; border-left: 4.5px solid #059669; border-radius: 9px; padding: 8px 11px; page-break-inside: avoid;">
            <div style="display: table; width: 100%; border-bottom: 1px solid ${t.borderMuted}; padding-bottom: 4px; margin-bottom: 5px;">
              <div style="display: table-cell; font-size: 9.5px; font-weight: 900; color: ${t.cosmicNavy};">
                ${$+1}. ${i(f.spec.gemHi)} — <span style="color:${t.saffronDeep};">${i(f.roleLabel)}</span>
              </div>
              <div style="display: table-cell; text-align: right; font-size: 7.7px; font-weight: 800; color: #065F46; white-space: nowrap;">
                उपरत्न: ${i(f.spec.uparatnaHi)}
              </div>
            </div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 4px 12px; font-size: 8px; line-height: 1.46; color: ${t.inkPrimary};">
              <div><b>• वजन (रत्ती):</b> ${i(f.spec.rattiHi)} (शरीर भार ~10 किग्रा पर 1 रत्ती)</div>
              <div><b>• धातु एवं उंगली:</b> ${i(f.spec.metalHi)} में ${i(f.spec.fingerHi)}</div>
              <div><b>• शुभ वार व समय:</b> ${i(f.spec.dayHi)} • ${i(f.spec.timingHi)}</div>
              <div><b>• शुद्धिकरण विधि:</b> ${i(f.spec.purificationHi)}</div>
            </div>
            <div style="margin-top: 5px; padding: 5px 8px; background: ${t.emeraldSoft}; border: 1px solid #A7F3D0; border-radius: 6px; font-size: 8.3px; color: #065F46; font-weight: 700; line-height: 1.65; overflow: visible;">
              प्राण-प्रतिष्ठा मंत्र (108 बार जप): <span class="book-beej-mantra" style="font-weight: 700; color: #065F46;">${i($t[f.spec.planetId]||f.spec.mantraHi)}</span>
            </div>
            ${f.cautionNote?`<div style="margin-top: 3px; font-size: 7.5px; color: ${t.saffronDeep}; font-weight: 700;">नोट: ${i(f.cautionNote)}</div>`:""}
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
        ${N.length>0?N.map((f,$)=>`
                  <tr style="background:${$%2===0?"#FEF2F2":"#FFF7ED"}; page-break-inside: avoid;">
                    <td style="font-weight:800; color:${t.crimson};">${i(f.planetHi)}</td>
                    <td style="font-weight:700; color:${t.cosmicNavy};">${i(f.dusthanaHousesLabel)}</td>
                    <td style="font-weight:800; color:${t.crimson};">${i(f.gemHi)}</td>
                    <td style="line-height: 1.46;">${i(f.warningHi)}</td>
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
  `}}const Q="'Noto Sans Devanagari', 'Nirmala UI', 'Mangal', 'Kohinoor Devanagari', system-ui, -apple-system, sans-serif";function Lt(e){return String(e??"").replace(/\$([^$]+)\$/g,"$1").replace(/\\\(([^)]+)\\\)/g,"$1").replace(/\\\[([^\]]+)\\\]/g,"$1").replace(/\^?\{\\circ\}|\^\\circ|\\circ|\\degree|\\deg\b/g,"°").replace(/\^?\{\\prime\\prime\}|\\prime\\prime|\\second\b/g,'"').replace(/\^?\{\\prime\}|\\prime/g,"'").replace(/\\cdot/g,"·").replace(/\\times/g,"×").replace(/(\d{1,3})\s*°\s*(\d{1,2})\s*['′]\s*(\d{1,2})\s*["″]/g,`$1° $2' $3"`)}function a(e){return Lt(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}const Et="display: inline-flex; align-items: center; justify-content: center; line-height: 1.15; padding-top: 4px; padding-bottom: 4px; vertical-align: middle; box-sizing: border-box; text-align: center;",Dt="display: inline-block; line-height: 1.15;",Be=G.websiteDisplay.replace(/\s+/g,"");function Bt(e=t.saffronDeep){return`<span style="white-space: nowrap; display: inline-block; letter-spacing: 0; font-family: monospace; font-weight: 800; color: ${e};">${a(Be)}</span>`}function je(e){return e.map(n=>({houseNumber:n.houseNumber,rashiNumber:n.rashiNumber,rashiName:n.rashiNameHi,bhavaTitle:`भाव ${n.houseNumber}`,planets:n.planets.map(i=>({shortHindi:i.shortHindi,chartLabel:i.chartLabel||$e(i),degInt:i.degInt,hindiName:i.hindiName,degree:i.fullDMS,fullDegreeDMS:i.fullDMS,statusBadge:"madhyam"}))}))}function Re(e,n,i){const l={1:{rx:50,ry:41.5,px:50,py:25.5,maxPerLine:2},2:{rx:25.5,ry:19.5,px:25.5,py:9.8,maxPerLine:2},3:{rx:19.4,ry:25.5,px:10.6,py:25.5,maxPerLine:1,isSide:!0},4:{rx:41.5,ry:50,px:24.5,py:50,maxPerLine:2},5:{rx:19.4,ry:74.5,px:10.6,py:74.5,maxPerLine:1,isSide:!0},6:{rx:25.5,ry:80.5,px:25.5,py:90.2,maxPerLine:2},7:{rx:50,ry:58.5,px:50,py:74.5,maxPerLine:2},8:{rx:74.5,ry:80.5,px:74.5,py:90.2,maxPerLine:2},9:{rx:80.6,ry:74.5,px:89.4,py:74.5,maxPerLine:1,isSide:!0},10:{rx:58.5,ry:50,px:75.5,py:50,maxPerLine:2},11:{rx:80.6,ry:25.5,px:89.4,py:25.5,maxPerLine:1,isSide:!0},12:{rx:74.5,ry:19.5,px:74.5,py:9.8,maxPerLine:2}},c=e.map(u=>{const o=l[u.houseNumber];if(!o)return"";const r=u.planets||[],p=r.length>=3,d=o.isSide?r.length>=4?2:1:p?3:o.maxPerLine,h=r.map(D=>o.isSide||p?D.chartLabel||D.shortHindi:`${D.chartLabel||D.shortHindi}${String(D.degInt).padStart(2,"0")}`),m=[];for(let D=0;D<h.length;D+=d)m.push(h.slice(D,D+d).join(" "));const g=o.isSide?m.length>=3?3.2:3.7:m.length>=3?3.5:4,F=o.isSide?m.length>=3?2.75:3.1:p?3:3.45,H=m.map((D,L)=>{const f=(L-(m.length-1)/2)*g;return`<text x="${o.px}" y="${(o.py+f).toFixed(2)}" dy="-0.06em" text-anchor="middle" dominant-baseline="central" fill="${t.cosmicNavy}" font-size="${F}" font-weight="800" font-family="${Q}">${a(D)}</text>`}).join(""),N=u.houseNumber===1?`<text x="50" y="13.5" dy="-0.06em" text-anchor="middle" dominant-baseline="central" fill="${t.saffronDeep}" font-size="3.2" font-weight="800" font-family="${Q}">${typeof i=="number"?`लग्न ${String(i).padStart(2,"0")}°`:"लग्न"}</text>`:"";return`
        <text x="${o.rx}" y="${o.ry}" text-anchor="middle" dominant-baseline="central" fill="${t.saffron}" font-size="3.7" font-weight="800" font-family="monospace">${u.rashiNumber}</text>
        ${N}
        ${H}
      `}).join("");return`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="${n}" height="${n}" style="width:${n}px;height:${n}px;display:block;margin:0 auto;">
      <rect x="1.5" y="1.5" width="97" height="97" rx="2.5" fill="${t.warmIvory}" stroke="${t.templeGold}" stroke-width="1.4" />
      <rect x="3.2" y="3.2" width="93.6" height="93.6" rx="1.2" fill="none" stroke="${t.saffron}" stroke-opacity="0.38" stroke-width="0.45" />
      <line x1="1.5" y1="1.5" x2="98.5" y2="98.5" stroke="${t.templeGoldDark}" stroke-width="0.8" />
      <line x1="98.5" y1="1.5" x2="1.5" y2="98.5" stroke="${t.templeGoldDark}" stroke-width="0.8" />
      <polygon points="50,1.5 98.5,50 50,98.5 1.5,50" fill="none" stroke="${t.templeGoldDark}" stroke-width="0.9" />
      <text x="50" y="50.4" dy="-0.06em" text-anchor="middle" dominant-baseline="central" fill="${t.templeGold}" fill-opacity="0.22" font-size="7" font-weight="800">ॐ</text>
      ${c}
    </svg>
  `}function Ge(e,n,i,l){const c={};e.forEach(d=>{c[d.rashiNumber]=d});const u=[{rashi:12,label:"12 मीन",col:0,row:0},{rashi:1,label:"1 मेष",col:1,row:0},{rashi:2,label:"2 वृष",col:2,row:0},{rashi:3,label:"3 मि",col:3,row:0},{rashi:4,label:"4 कर्क",col:3,row:1},{rashi:5,label:"5 सिंह",col:3,row:2},{rashi:6,label:"6 कन्या",col:3,row:3},{rashi:7,label:"7 तुला",col:2,row:3},{rashi:8,label:"8 वृश्चि",col:1,row:3},{rashi:9,label:"9 धनु",col:0,row:3},{rashi:10,label:"10 मकर",col:0,row:2},{rashi:11,label:"11 कुंभ",col:0,row:1}],o=24,r=2,p=u.map(d=>{const h=r+d.col*o,m=r+d.row*o,g=c[d.rashi],F=g?.houseNumber===1,N=(g?.planets||[]).map(f=>f.chartLabel||f.shortHindi),D=[];for(let f=0;f<N.length;f+=2)D.push(N.slice(f,f+2).join(" "));const L=D.map((f,$)=>{const v=m+12+($-(D.length-1)/2)*3.6;return`<text x="${h+o/2}" y="${v.toFixed(1)}" dy="-0.06em" text-anchor="middle" dominant-baseline="central" fill="${t.cosmicNavy}" font-size="3.2" font-weight="800" font-family="${Q}">${a(f)}</text>`}).join("");return`
        <rect x="${h}" y="${m}" width="${o}" height="${o}" fill="${F?"#FFF3E0":t.warmIvory}" stroke="${t.templeGoldDark}" stroke-width="0.68" />
        <text x="${h+1.6}" y="${m+3.4}" dy="-0.06em" dominant-baseline="central" fill="${t.saffronDeep}" font-size="2.6" font-weight="700" font-family="${Q}">${a(d.label)}</text>
        ${F?`<text x="${h+o-1.5}" y="${m+3.4}" dy="-0.06em" text-anchor="end" dominant-baseline="central" fill="${t.emerald}" font-size="2.5" font-weight="800" font-family="${Q}">${typeof l=="number"?`लग्न ${l}°`:"लग्न"}</text>`:""}
        ${L}
        <text x="${h+o-1.5}" y="${m+o-2.2}" dy="-0.04em" text-anchor="end" dominant-baseline="central" fill="${t.inkMuted}" font-size="2.35" font-family="'Noto Sans Devanagari', sans-serif">भा.${g?.houseNumber||""}</text>
      `}).join("");return`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="${n}" height="${n}" style="width:${n}px;height:${n}px;display:block;margin:0 auto;">
      <rect x="1" y="1" width="98" height="98" rx="2" fill="${t.pureIvory}" stroke="${t.templeGold}" stroke-width="1.25" />
      <rect x="${r+o}" y="${r+o}" width="${o*2}" height="${o*2}" fill="${t.templeGoldSoft}" stroke="${t.templeGold}" stroke-width="0.7" />
      <text x="50" y="44.2" dy="-0.06em" text-anchor="middle" dominant-baseline="central" fill="${t.saffron}" font-size="8" font-weight="800">ॐ</text>
      <text x="50" y="54.0" dy="-0.06em" text-anchor="middle" dominant-baseline="central" fill="${t.cosmicNavy}" font-size="3.3" font-weight="800" font-family="${Q}">${a(i)}</text>
      <text x="50" y="60.2" dy="-0.06em" text-anchor="middle" dominant-baseline="central" fill="${t.inkMuted}" font-size="2.5" font-family="${Q}">दक्षिण भारतीय चक्र</text>
      ${p}
    </svg>
  `}function _e(e,n,i,l,c){return n==="south"?Ge(e,i,l,c):Re(e,i,c)}function Vt(e,n,i,l,c,u){const o=Math.min(u,l/2,c/2);e.beginPath(),e.moveTo(n+o,i),e.lineTo(n+l-o,i),e.quadraticCurveTo(n+l,i,n+l,i+o),e.lineTo(n+l,i+c-o),e.quadraticCurveTo(n+l,i+c,n+l-o,i+c),e.lineTo(n+o,i+c),e.quadraticCurveTo(n,i+c,n,i+c-o),e.lineTo(n,i+o),e.quadraticCurveTo(n,i,n+o,i),e.closePath()}function ut(e,n,i,l){const c=e.textBaseline;e.textBaseline="alphabetic";const u=e.measureText(n),o=u.actualBoundingBoxAscent,r=u.actualBoundingBoxDescent;Number.isFinite(o)&&Number.isFinite(r)&&o>0?e.fillText(n,i,l+(o-r)/2):(e.textBaseline="middle",e.fillText(n,i,l)),e.textBaseline=c}function Ue(e,n,i){if(typeof document>"u")return"";try{const c=Math.max(240,Math.round(n*3)),u=c,o=c/100,r=document.createElement("canvas");r.width=c,r.height=u;const p=r.getContext("2d");if(!p)return"";p.fillStyle=t.warmIvory,p.fillRect(0,0,c,u),Vt(p,1.5*o,1.5*o,97*o,97*o,2.5*o),p.fillStyle=t.warmIvory,p.fill(),p.lineWidth=1.4*o,p.strokeStyle=t.templeGold,p.stroke(),Vt(p,3.2*o,3.2*o,93.6*o,93.6*o,1.2*o),p.lineWidth=.45*o,p.strokeStyle="rgba(255, 111, 0, 0.38)",p.stroke(),p.beginPath(),p.moveTo(1.5*o,1.5*o),p.lineTo(98.5*o,98.5*o),p.moveTo(98.5*o,1.5*o),p.lineTo(1.5*o,98.5*o),p.lineWidth=.85*o,p.strokeStyle=t.templeGoldDark,p.stroke(),p.beginPath(),p.moveTo(50*o,1.5*o),p.lineTo(98.5*o,50*o),p.lineTo(50*o,98.5*o),p.lineTo(1.5*o,50*o),p.closePath(),p.lineWidth=.95*o,p.strokeStyle=t.templeGoldDark,p.stroke(),p.textAlign="center",p.fillStyle="rgba(212, 175, 55, 0.22)",p.font=`800 ${(7*o).toFixed(1)}px ${Q}`,ut(p,"ॐ",50*o,50.2*o);const d={1:{rx:50,ry:41.5,px:50,py:25.5,maxPerLine:2},2:{rx:25.5,ry:19.5,px:25.5,py:9.8,maxPerLine:2},3:{rx:19.4,ry:25.5,px:10.6,py:25.5,maxPerLine:1,isSide:!0},4:{rx:41.5,ry:50,px:24.5,py:50,maxPerLine:2},5:{rx:19.4,ry:74.5,px:10.6,py:74.5,maxPerLine:1,isSide:!0},6:{rx:25.5,ry:80.5,px:25.5,py:90.2,maxPerLine:2},7:{rx:50,ry:58.5,px:50,py:74.5,maxPerLine:2},8:{rx:74.5,ry:80.5,px:74.5,py:90.2,maxPerLine:2},9:{rx:80.6,ry:74.5,px:89.4,py:74.5,maxPerLine:1,isSide:!0},10:{rx:58.5,ry:50,px:75.5,py:50,maxPerLine:2},11:{rx:80.6,ry:25.5,px:89.4,py:25.5,maxPerLine:1,isSide:!0},12:{rx:74.5,ry:19.5,px:74.5,py:9.8,maxPerLine:2}};for(const m of e){const g=d[m.houseNumber];if(!g)continue;if(p.fillStyle=t.saffron,p.font=`800 ${(3.7*o).toFixed(1)}px monospace`,ut(p,String(m.rashiNumber),g.rx*o,g.ry*o),m.houseNumber===1){p.fillStyle=t.saffronDeep,p.font=`800 ${(3.2*o).toFixed(1)}px ${Q}`;const v=typeof i=="number"?`लग्न ${String(i).padStart(2,"0")}°`:"लग्न";ut(p,v,50*o,13.5*o)}const F=m.planets||[];if(F.length===0)continue;const H=F.length>=3,N=g.isSide?F.length>=4?2:1:H?3:g.maxPerLine,D=F.map(v=>g.isSide||H?v.chartLabel||v.shortHindi:`${v.chartLabel||v.shortHindi}${String(v.degInt).padStart(2,"0")}`),L=[];for(let v=0;v<D.length;v+=N)L.push(D.slice(v,v+N).join(" "));const f=g.isSide?L.length>=3?3.2:3.7:L.length>=3?3.5:4,$=g.isSide?L.length>=3?2.65:3.05:H?2.95:3.45;p.fillStyle=t.cosmicNavy,p.font=`800 ${($*o).toFixed(1)}px ${Q}`,L.forEach((v,I)=>{const S=(I-(L.length-1)/2)*f;ut(p,Lt(v),g.px*o,(g.py+S)*o)})}const h=r.toDataURL("image/png");return r.width=0,r.height=0,h.startsWith("data:image/png;base64,")?h:""}catch{return""}}function Oe(e,n,i,l){if(typeof document>"u")return"";try{const u=Math.max(240,Math.round(n*3)),o=u,r=u/100,p=document.createElement("canvas");p.width=u,p.height=o;const d=p.getContext("2d");if(!d)return"";d.fillStyle=t.pureIvory,d.fillRect(0,0,u,o),Vt(d,1*r,1*r,98*r,98*r,2*r),d.fillStyle=t.pureIvory,d.fill(),d.lineWidth=1.25*r,d.strokeStyle=t.templeGold,d.stroke();const h=24,m=2;d.fillStyle=t.templeGoldSoft,d.fillRect((m+h)*r,(m+h)*r,h*2*r,h*2*r),d.lineWidth=.7*r,d.strokeStyle=t.templeGold,d.strokeRect((m+h)*r,(m+h)*r,h*2*r,h*2*r),d.textAlign="center",d.fillStyle=t.saffron,d.font=`800 ${(8*r).toFixed(1)}px ${Q}`,ut(d,"ॐ",50*r,44.2*r),d.fillStyle=t.cosmicNavy,d.font=`800 ${(3.2*r).toFixed(1)}px ${Q}`,ut(d,Lt(i),50*r,54*r),d.fillStyle=t.inkMuted,d.font=`600 ${(2.5*r).toFixed(1)}px ${Q}`,ut(d,"दक्षिण भारतीय चक्र",50*r,60.2*r);const g={};e.forEach(N=>{g[N.rashiNumber]=N});const F=[{rashi:12,label:"12 मीन",col:0,row:0},{rashi:1,label:"1 मेष",col:1,row:0},{rashi:2,label:"2 वृष",col:2,row:0},{rashi:3,label:"3 मि",col:3,row:0},{rashi:4,label:"4 कर्क",col:3,row:1},{rashi:5,label:"5 सिंह",col:3,row:2},{rashi:6,label:"6 कन्या",col:3,row:3},{rashi:7,label:"7 तुला",col:2,row:3},{rashi:8,label:"8 वृश्चि",col:1,row:3},{rashi:9,label:"9 धनु",col:0,row:3},{rashi:10,label:"10 मकर",col:0,row:2},{rashi:11,label:"11 कुंभ",col:0,row:1}];for(const N of F){const D=m+N.col*h,L=m+N.row*h,f=g[N.rashi],$=f?.houseNumber===1;d.fillStyle=$?"#FFF3E0":t.warmIvory,d.fillRect(D*r,L*r,h*r,h*r),d.lineWidth=.68*r,d.strokeStyle=t.templeGoldDark,d.strokeRect(D*r,L*r,h*r,h*r),d.textAlign="left",d.fillStyle=t.saffronDeep,d.font=`700 ${(2.6*r).toFixed(1)}px ${Q}`,ut(d,N.label,(D+1.5)*r,(L+3.4)*r),$&&(d.textAlign="right",d.fillStyle=t.emerald,d.font=`800 ${(2.5*r).toFixed(1)}px ${Q}`,ut(d,typeof l=="number"?`लग्न ${l}°`:"लग्न",(D+h-1.4)*r,(L+3.4)*r));const I=(f?.planets||[]).map(w=>w.chartLabel||w.shortHindi),S=[];for(let w=0;w<I.length;w+=2)S.push(I.slice(w,w+2).join(" "));d.textAlign="center",d.fillStyle=t.cosmicNavy,d.font=`800 ${(3.2*r).toFixed(1)}px ${Q}`,S.forEach((w,P)=>{const U=L+12+(P-(S.length-1)/2)*3.6;ut(d,Lt(w),(D+h/2)*r,U*r)}),d.textAlign="right",d.fillStyle=t.inkMuted,d.font=`600 ${(2.35*r).toFixed(1)}px monospace`,ut(d,`भा.${f?.houseNumber||""}`,(D+h-1.4)*r,(L+h-2.2)*r)}const H=p.toDataURL("image/png");return p.width=0,p.height=0,H.startsWith("data:image/png;base64,")?H:""}catch{return""}}function Yt(e,n,i,l,c,u){if(c&&typeof document<"u"){const o=n==="south"?Oe(e,i,l,u):Ue(e,i,u);if(o)return`<img src="${o}" alt="${a(l)}" width="${i}" height="${i}" style="width:${i}px;height:${i}px;display:block;margin:0 auto;" />`}return _e(e,n,i,l,u)}function V(e,n,i){return`
    <div style="display: table; width: 100%; box-sizing: border-box; padding-bottom: 7px; margin-bottom: 10px; border-bottom: 2px solid ${t.templeGold};">
      <div style="display: table-cell; vertical-align: middle; text-align: left; padding-right: 10px;">
        <div style="display: table;">
          <div style="display: table-cell; vertical-align: middle; padding-right: 9px;">
            ${vt(28,i,1.8)}
          </div>
          <div style="display: table-cell; vertical-align: middle;">
            <div style="display: block; font-size: 10.5px; font-weight: 800; color: ${t.cosmicNavy}; line-height: 1.25;">
              पण्डित जी ऑनलाइन (PANDIT JI ONLINE) • बृहत् वैदिक जन्म पत्रिका
            </div>
            <div style="display: block; font-size: 8px; color: ${t.saffronDeep}; font-weight: 700; margin-top: 2px; line-height: 1.3;">
              ${a(n)}
            </div>
          </div>
        </div>
      </div>
      <div style="display: table-cell; vertical-align: middle; text-align: right; white-space: nowrap; width: 1%;">
        <span class="book-pill" style="${Et} background: ${t.cosmicNavy}; color: #FDE68A; border: 1.2px solid ${t.templeGold}; font-size: 8.1px; font-weight: 800; padding-left: 11px; padding-right: 11px; border-radius: 999px; white-space: nowrap;">
          <span style="${Dt}">${a(e)}</span>
        </span>
      </div>
    </div>
  `}function A(e,n,i){const l=i&&i.includes("PANDIT JI ONLINE")?" letter-spacing: 0; word-spacing: 3px;":"";return`
    <div class="book-section-bar" style="display: table; width: 100%; box-sizing: border-box; background: linear-gradient(90deg, ${t.cosmicNavy} 0%, #1E293B 100%); border-left: 4.5px solid ${t.saffron}; border-bottom: 1.8px solid ${t.templeGold}; border-radius: 7px; padding: 5.5px 11px; margin: 8px 0 8px 0; overflow: visible;">
      <div style="display: table-cell; vertical-align: middle; text-align: left; color: ${t.warmIvory}; font-size: 10.6px; font-weight: 800; line-height: 1.28; padding-right: 8px;">
        <span style="display: block; line-height: 1.28;"><span style="color: ${t.templeGold}; margin-right: 5px;">${a(e)}.</span>${a(n)}</span>
      </div>
      ${i?`<div style="display: table-cell; vertical-align: middle; text-align: right; white-space: nowrap; width: 1%;"><span class="book-pill" style="${Et} background: rgba(212, 175, 55, 0.16); border: 1px solid rgba(212, 175, 55, 0.5); color: #FDE68A; font-size: 7.8px; font-weight: 700; padding-left: 9px; padding-right: 9px; border-radius: 999px; white-space: nowrap;${l}"><span style="${Dt}${l}">${a(i)}</span></span></div>`:""}
    </div>
  `}function xt(e){const n=Ne[e],i=n.keyPoints.map(l=>`<span style="display: block; margin-top: 2.5px;"><b style="color: ${t.saffronDeep};">• ${a(l.term.hi)}:</b> ${a(l.meaning.hi)}</span>`).join("");return`
    <div class="book-card" style="background: ${t.saffronSoft}; border: 1.2px solid ${t.templeGold}; border-radius: 8px; padding: 7.5px 10px; margin: 8px 0 6px 0; font-size: 8.3px; color: ${t.inkPrimary}; line-height: 1.48;">
      <div style="font-weight: 800; color: ${t.cosmicNavy}; font-size: 8.8px; margin-bottom: 2.5px;">
        ✦ इसे कैसे समझें? — ${a(n.triggerTitle.hi)}
      </div>
      <div>${a(n.whatItShows.hi)}</div>
      ${i}
      <div style="margin-top: 3.5px; color: ${t.emerald}; font-weight: 700;">
        ध्यान दें: ${a(n.practicalTip.hi)}
      </div>
    </div>
  `}function qt(e,n,i){return`
    <div class="book-card" style="background: ${t.saffronSoft}; border: 1.2px solid ${t.templeGold}; border-radius: 8px; padding: 7.5px 10px; margin: 8px 0 6px 0; font-size: 8.3px; color: ${t.inkPrimary}; line-height: 1.48;">
      <div style="font-weight: 800; color: ${t.cosmicNavy}; font-size: 8.8px; margin-bottom: 2.5px;">
        ✦ इसे कैसे समझें? — ${a(e)}
      </div>
      <div>${a(n)}</div>
      <div style="margin-top: 3.5px; color: ${t.emerald}; font-weight: 700;">
        व्यावहारिक सुझाव: ${a(i)}
      </div>
    </div>
  `}function Kt(e,n,i){return`
    <div style="display: flex; align-items: center; gap: 6px; width: 100%;">
      <div style="flex: 1; height: 8px; background: #EFE3C6; border-radius: 999px; overflow: hidden; border: 0.8px solid #D9C495;">
        <div style="width: ${Math.max(4,Math.min(100,Math.round(e)))}%; height: 100%; background: ${n}; border-radius: 999px;"></div>
      </div>
      ${i?`<span style="font-size: 7.6px; font-weight: 800; font-family: monospace; color: ${t.cosmicNavy}; min-width: 34px; text-align: right;">${a(i)}</span>`:""}
    </div>
  `}const Qt=[{id:"sun",hi:"सूर्य",short:"सू"},{id:"moon",hi:"चंद्र",short:"चं"},{id:"mars",hi:"मंगल",short:"मं"},{id:"mercury",hi:"बुध",short:"बु"},{id:"jupiter",hi:"गुरु",short:"गु"},{id:"venus",hi:"शुक्र",short:"शु"},{id:"saturn",hi:"शनि",short:"श"}],We={sun:["moon","mars","jupiter"],moon:["sun","mercury"],mars:["sun","moon","jupiter"],mercury:["sun","venus"],jupiter:["sun","moon","mars"],venus:["mercury","saturn"],saturn:["mercury","venus"]},Je={sun:["venus","saturn"],moon:[],mars:["mercury"],mercury:["moon"],jupiter:["mercury","venus"],venus:["sun","moon"],saturn:["sun","moon","mars"]};function Ve(e){const n={},i={सूर्य:"sun",चंद्र:"moon",चन्द्र:"moon",मंगल:"mars",बुध:"mercury",गुरु:"jupiter",बृहस्पति:"jupiter",शुक्र:"venus",शनि:"saturn"};for(const l of e.planets){const c=Object.keys(i).find(u=>l.hindiName.includes(u));c&&(n[i[c]]=l.rashiNumber)}return Qt.map(l=>{const c=Qt.map(u=>{if(l.id===u.id)return{label:"स्वयं",color:t.inkMuted,bg:"#F1ECE0"};const o=We[l.id].includes(u.id)?1:Je[l.id].includes(u.id)?-1:0,r=n[l.id]||1,d=((n[u.id]||1)-r+12)%12+1,h=[2,3,4,10,11,12].includes(d),m=o+(h?1:-1);return m>=2?{label:"अति मित्र",color:"#065F46",bg:"#D1FAE5"}:m===1?{label:"मित्र",color:"#047857",bg:"#ECFDF5"}:m===0?{label:"सम",color:"#92400E",bg:"#FEF3C7"}:m===-1?{label:"शत्रु",color:"#B45309",bg:"#FFEDD5"}:{label:"अति शत्रु",color:"#991B1B",bg:"#FEE2E2"}});return{grahaHi:l.hi,cells:c}})}function Ye(e){const n=e.phase1Astronomy?.spaceTime.year||parseInt((e.input.dob||"1995").slice(0,4),10)||1995,i=e.panchang.moonRashiNumber||1,c=e.planets.find(N=>N.hindiName.includes("शनि"))?.rashiNumber||1,u=(i+10)%12+1,o=i,r=i%12+1,p=N=>zt[N-1]?.nameHi||String(N),d=29.457/12,h=(u-c+12)%12;let m=Math.round(n+h*d);m-n>27&&(m-=29);const g=[],F=["प्रथम आवर्तन","द्वितीय आवर्तन","तृतीय आवर्तन"],H=[{name:"उदय चरण (प्रथम ढाई वर्ष)",rashi:u,guidance:"व्यय नियंत्रण, नई जिम्मेदारियाँ, यात्राएँ व आधार-निर्माण का समय।"},{name:"शिखर चरण (मध्य ढाई वर्ष)",rashi:o,guidance:"परिश्रम की परीक्षा, आत्म-अनुशासन, धैर्य व मानसिक दृढ़ता का काल।"},{name:"अस्त चरण (अंतिम ढाई वर्ष)",rashi:r,guidance:"धीरे-धीरे राहत, संचित परिश्रम का स्थायी फल व आर्थिक सुधार।"}];for(let N=0;N<3;N++){const D=Math.round(m+N*29.46);H.forEach((L,f)=>{const $=Math.round(D+f*d),v=Math.round(D+(f+1)*d);if(v<n)return;const I=Math.max(n,$),S=Math.max(0,I-n),w=Math.max(S+1,v-n);S>92||g.push({cycleLabel:F[N],phaseLabel:L.name,saturnRashi:`${p(L.rashi)} (${L.rashi})`,approxPeriod:`${I} – ${v}`,ageSpan:`${S}–${w} वर्ष`,guidanceHi:L.guidance})})}return g}const qe={सूर्य:"प्रशासनिक सम्मान, पिता-सहयोग, आत्मविश्वास व पदोन्नति के संकेत।",चंद्र:"मानसिक संतुलन, पारिवारिक सुख, जनसंपर्क एवं यात्रा लाभ।",मंगल:"साहस, भूमि-भवन कार्य, तकनीकी प्रगति व ऊर्जावान निर्णय।",राहु:"नवीन अवसर, तकनीकी/विदेश विस्तार व सतर्क विवेक की आवश्यकता।",गुरु:"ज्ञान-वृद्धि, शुभ मांगलिक कार्य, संतान सुख व आर्थिक स्थिरता।",शनि:"धैर्यपूर्वक कर्म, अनुशासन, दीर्घकालिक स्थायी निर्माण व न्याय।",बुध:"बौद्धिक विकास, व्यवसाय-संवाद, शिक्षा व लेखन-लाभ का काल।",केतु:"आध्यात्मिक साधना, शोध, एकांत चिंतन व गूढ़ ज्ञान की प्राप्ति।",शुक्र:"सुख-सुविधा, कला, वैवाहिक सौहार्द, वाहन एवं समृद्धि के योग।"},Ke={सूर्य:"आत्मा, मान-सम्मान, पिता, नेतृत्व क्षमता और राजकीय कार्यों का कारक ग्रह।",चंद्र:"मन, माता, भावनात्मक स्थिरता, जल तत्व, जनसंपर्क और मानसिक सुख का कारक।",मंगल:"साहस, पराक्रम, भूमि-संपत्ति, तकनीकी दक्षता और भ्रातृ-सुख का कारक ग्रह।",बुध:"बुद्धि, वाणी, व्यापार, गणित, संवाद कौशल और तार्किक निर्णय शक्ति का कारक।",गुरु:"ज्ञान, धर्म, संतान, भाग्य, धन-वृद्धि और गुरु-कृपा का परम शुभ कारक ग्रह।",शुक्र:"वैवाहिक सुख, कला, सौंदर्य, वाहन, ऐश्वर्य और रचनात्मक समृद्धि का कारक।",शनि:"कर्म, अनुशासन, आयु, न्याय, सेवा भाव और दीर्घकालिक स्थायी सफलता का कारक।",राहु:"नवीन सोच, आधुनिक तकनीक, विदेश यात्रा, शोध और तीव्र महत्वाकांक्षा का कारक।",केतु:"मोक्ष, वैराग्य, सूक्ष्म अंतर्ज्ञान, आध्यात्मिक उन्नति और मंत्र-साधना का कारक।"},Qe=[{graha:"सूर्य",mantra:"ॐ घृणि सूर्याय नमः",daan:"गेहूँ, गुड़, ताम्र पात्र, लाल वस्त्र",day:"रविवार"},{graha:"चंद्र",mantra:"ॐ सों सोमाय नमः",daan:"चावल, दूध, मिश्री, श्वेत वस्त्र",day:"सोमवार"},{graha:"मंगल",mantra:"ॐ अं अंगारकाय नमः",daan:"मसूर दाल, गुड़, लाल फल",day:"मंगलवार"},{graha:"बुध",mantra:"ॐ बुं बुधाय नमः",daan:"हरी मूंग, पालक, हरा वस्त्र, पुस्तकें",day:"बुधवार"},{graha:"गुरु",mantra:"ॐ बृं बृहस्पतये नमः",daan:"चना दाल, हल्दी, पीला वस्त्र, धार्मिक ग्रंथ",day:"गुरुवार"},{graha:"शुक्र",mantra:"ॐ शुं शुक्राय नमः",daan:"दही, घी, खीर, श्वेत मिष्ठान्न",day:"शुक्रवार"},{graha:"शनि",mantra:"ॐ शं शनैश्चराय नमः",daan:"काले तिल, सरसों तेल, काली उड़द, कंबल",day:"शनिवार"},{graha:"राहु",mantra:"ॐ रां राहवे नमः",daan:"सतनाजा, कंबल, पक्षियों को दाना",day:"बुधवार / शनिवार"},{graha:"केतु",mantra:"ॐ केम् केतवे नमः",daan:"तिल, ऊनी वस्त्र, श्वान को भोजन",day:"मंगलवार / शनिवार"}];function Xt(e){return Lt(e).normalize("NFC").replace(/ॐ\s*ह्रां\s*ह्रीं\s*ह्रौं\s*सः\s*सूर्याय\s*नमः/g,"ॐ घृणि सूर्याय नमः").replace(/ॐ\s*श्रां\s*श्रीं\s*श्रौं\s*सः\s*च[ंन][्]?द्रमसे\s*नमः/g,"ॐ सों सोमाय नमः").replace(/ॐ\s*क्रां\s*क्रीं\s*क्रौं\s*सः\s*भौमाय\s*नमः/g,"ॐ अं अंगारकाय नमः").replace(/ॐ\s*ब्रां\s*ब्रीं\s*ब्रौं\s*सः\s*बुधाय\s*नमः/g,"ॐ बुं बुधाय नमः").replace(/ॐ\s*ग्रां\s*ग्रीं\s*ग्रौं\s*सः\s*गुरवे\s*नमः/g,"ॐ बृं बृहस्पतये नमः").replace(/ॐ\s*द्रां\s*द्रीं\s*द्रौं\s*सः\s*शुक्राय\s*नमः/g,"ॐ शुं शुक्राय नमः").replace(/ॐ\s*प्रां\s*प्रीं\s*प्रौं\s*सः\s*शनैश्चराय\s*नमः/g,"ॐ शं शनैश्चराय नमः").replace(/ॐ\s*भ्रां\s*भ्रीं\s*भ्रौं\s*सः\s*राहवे\s*नमः/g,"ॐ रां राहवे नमः").replace(/ॐ\s*स्?त्रां\s*स्?त्रीं\s*स्?त्रौं\s*सः\s*केतवे\s*नमः/g,"ॐ केम् केतवे नमः").replace(/ॐ\s*स्रां\s*स्रीं\s*स्रौं\s*सः\s*केतवे\s*नमः/g,"ॐ केम् केतवे नमः").replace(/ॐ\s*कें\s*केतवे\s*नमः/g,"ॐ केम् केतवे नमः").normalize("NFC")}function pe(e,n){return`<span class="book-dasha-date" style="white-space: nowrap; direction: ltr; unicode-bidi: isolate; display: inline-block; font-family: monospace;">${a(e)} → ${a(n)}</span>`}function jt(e,n,i,l=!1){const{cleanMode:c,chartStyle:u}=i,o=n.appLogoDataUrl,r=`${e.input.name} • जन्म: ${e.input.formattedDob}, ${e.input.formattedTime} • ${e.input.birthPlace}`,p=e.mahadashas.find(s=>s.isCurrent)||e.mahadashas[0],d=e.phase1Astronomy,h=e.shadbalaBhava,m=e.phase2Jyotish,g=[],F={esc:a,buildBookPageHeader:V,buildSectionTitleBar:A,personHeader:r,appLogo:o},H=Yt(e.lagnaChart,u,258,`लग्न (${e.panchang.lagnaName})`,l,e.panchang.lagnaDegInt),N=`
    <div style="width: 100%; height: 100%; box-sizing: border-box; display: flex; flex-direction: column; justify-content: space-between; background: ${t.warmIvory}; border: 3.5px solid ${t.templeGold}; border-radius: 14px; padding: 14px 16px; position: relative; box-shadow: inset 0 0 0 2px #FFFDF8, inset 0 0 0 3.5px rgba(255, 111, 0, 0.35);">
      <!-- Top Cosmic Deep Navy Royal Masthead with Centered Real App Logo -->
      <div style="background: linear-gradient(135deg, ${t.cosmicNavy} 0%, #162440 68%, #2C1608 100%); border: 2px solid ${t.templeGold}; border-radius: 12px; padding: 11px 16px 13px 16px; text-align: center; color: ${t.warmIvory};">
        <div style="display: block; font-size: 10px; font-weight: 800; color: ${t.templeGold}; letter-spacing: 0; line-height: 1.25; padding-top: 2px; padding-bottom: 4px;">
          ॥ श्री गणेशाय नमः ॥ &nbsp;•&nbsp; ॥ सर्वे भवन्तु सुखिनः ॥
        </div>
        <div style="display: table; margin: 7px auto 0 auto;">
          <div style="display: table-cell; vertical-align: middle; padding-right: 14px;">
            ${vt(58,o,2.8)}
          </div>
          <div style="display: table-cell; vertical-align: middle; text-align: left;">
            <div style="display: block; font-size: 20px; font-weight: 900; color: #FDE68A; letter-spacing: 0; line-height: 1.3; padding-bottom: 2px;">पण्डित जी ऑनलाइन</div>
            <div style="display: block; font-size: 9.2px; font-weight: 800; color: #F8FAFC; letter-spacing: 0; word-spacing: 2px; margin-top: 7px; line-height: 1.35;"><span style="display: inline-block; margin-right: 4px;">PANDIT</span><span style="display: inline-block; margin-right: 4px;">JI</span><span style="display: inline-block; margin-right: 5px;">ONLINE</span>— प्रामाणिक वैदिक ज्योतिष महा-ग्रंथ</div>
          </div>
        </div>
        <div style="margin-top: 10px; text-align: center;">
          <span class="book-pill" style="display: inline-flex; align-items: center; justify-content: center; line-height: 1.15; padding: 4px 16px; vertical-align: middle; box-sizing: border-box; text-align: center; background: rgba(255, 111, 0, 0.24); border: 1.2px solid ${t.templeGold}; color: #FDE68A; font-size: 8.8px; font-weight: 800; border-radius: 999px;">
            <span style="${Dt}">सम्पूर्ण बृहत् जन्म कुंडली पुस्तक • दृक् गणित लाहिड़ी अयनांश</span>
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
        ${H}
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
          <div style="display: block; font-size: 11px; font-weight: 800; margin-top: 3px; line-height: 1.28;">${a(p?.planet||"-")}</div>
          <div style="display: block; font-size: 7.6px; color: #6EE7B7; margin-top: 3px; line-height: 1.28;">${a(p?.startYear)}–${a(p?.endYear)}</div>
        </div>
      </div>

      <!-- Cover Bottom Brand Strip + Real QR Code (Zero Overlap) -->
      <div style="background: ${t.templeGoldSoft}; border: 1.6px solid ${t.templeGold}; border-radius: 10px; padding: 9px 13px; display: flex; align-items: center; justify-content: space-between; gap: 12px;">
        <div style="flex: 1; font-size: 8.8px; color: ${t.inkPrimary}; line-height: 1.5;">
          <div style="font-weight: 900; color: ${t.cosmicNavy}; font-size: 10.5px;">
            मार्गदर्शक: ${a(G.founderHi)} (वैदिक ज्योतिषाचार्य एवं कर्मकाण्ड विशेषज्ञ)
          </div>
          <div>${a(G.locationHi)}</div>
          <div>सम्पर्क / WhatsApp: <b>${a(G.phoneDisplay)}</b> &nbsp;|&nbsp; वेबसाइट: ${Bt(t.saffronDeep)}</div>
        </div>
        ${n.websiteQrDataUrl?`<div style="background:#FFFFFF; border: 1.6px solid ${t.templeGold}; border-radius: 8px; padding: 4px; text-align:center; flex-shrink:0;">
                 <img src="${n.websiteQrDataUrl}" alt="Pandit Ji Online QR" style="width: 60px; height: 60px; display:block;" />
                 <div style="font-size: 6.8px; font-weight: 800; color: ${t.cosmicNavy}; margin-top: 2px;">स्कैन करें</div>
               </div>`:""}
      </div>
    </div>
  `;g.push({sectionCode:"COVER",sectionTag:"मुख्य आवरण (Cover)",isCover:!0,html:N});const D=(s,b)=>{const R=String(s||"").trim();if(!R)return"—";const k=new RegExp(`(?:\\s*${b})+$`,"u");return`${R.replace(k,"").trim()} ${b}`.trim()},L=[["वार (सूर्योदयात्)",`${e.panchang.vaar} (स्वामी: ${e.panchang.vaarLord})`,"जन्म लग्न",`${e.panchang.lagnaName} (${e.panchang.lagnaDegreeDMS})`],["तिथि एवं पक्ष",`${e.panchang.tithi} • ${e.panchang.paksha}`,"लग्नेश (Lagna Lord)",e.panchang.lagnaLord],["नक्षत्र एवं चरण",`${e.panchang.nakshatraName} (चरण ${e.panchang.nakshatraPada})`,"चंद्र राशि एवं स्वामी",`${e.panchang.moonRashiName} (${e.panchang.moonRashiLord})`],["नक्षत्र स्वामी",e.panchang.nakshatraLord,"सूर्य राशि एवं स्वामी",`${e.panchang.sunRashiName} (${e.panchang.sunRashiLord})`],["योग एवं करण",`${D(e.panchang.yoga,"योग")} • ${D(e.panchang.karana,"करण")}`,"प्रचलित नाम राशि",e.panchang.naamRashi],["सूर्योदय / सूर्यास्त",d?`${d.birthPanchang.sunriseHi} / ${d.birthPanchang.sunsetHi}`:"स्थानीय सूर्योदय आधारित","टाइमज़ोन / UTC",`${e.input.timeZone||"Asia/Kolkata"} (${e.input.utcOffsetFormatted||"UTC+05:30"})`],["गण एवं नाड़ी",`${D(e.panchang.gana,"गण")} • ${D(e.panchang.nadi,"नाड़ी")}`,"योनि एवं वर्ण",`${e.panchang.yoni} • ${e.panchang.varna}`],["वश्य एवं तत्व",`${e.panchang.vashya} • ${e.panchang.tatva}`,"पाया (Paya)",e.panchang.paya],["इष्टदेव",e.lucky.ishtaDevta,"शुभ अंक व वार",`${e.lucky.luckyNumbers} • ${e.lucky.luckyDays}`],["शुभ रंग एवं दिशा",`${e.lucky.luckyColors} • ${e.lucky.luckyDirection}`,"अयनांश (लाहिड़ी)",`${e.input.ayanamsaDMS} • True Node`]],f=e.input.warningsHi&&e.input.warningsHi.length>0?`<div class="book-card" style="margin-top: 10px; background: #FEF2F2; border: 1.5px solid #F59E0B; border-radius: 8px; padding: 9px 12px; font-size: 8.6px; color: #7C2D12; line-height: 1.55;">
           <b style="color:#B45309;">⚠ जन्म-समय / टाइमज़ोन / संधि सूचना:</b>
           ${e.input.warningsHi.map(s=>`<div style="margin-top:3px;">• ${a(s)}</div>`).join("")}
         </div>`:`<div class="book-card" style="margin-top: 10px; background: ${t.emeraldSoft}; border: 1.2px solid #10B981; border-radius: 8px; padding: 9px 12px; font-size: 8.6px; color: #065F46; line-height: 1.55;">
           <b>✓ सटीक खगोलीय सत्यापन:</b> यह जन्मपत्री ऐतिहासिक IANA टाइमज़ोन (${a(e.input.timeZone||"Asia/Kolkata")}), दृक् गणित लाहिड़ी चित्रा पक्ष अयनांश (${a(e.input.ayanamsaDMS)}) तथा True Node मानक पर आधारित है।
         </div>`,$=`
    ${V("खण्ड A1 : जन्म पंचांग एवं अवकहड़ा चक्र",r,o)}
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
        ${L.map((s,b)=>`
            <tr style="background:${b%2===0?"#FFFDF8":"#FEF6E4"};">
              <td style="font-weight:800; color:${t.saffronDeep}; padding: 6.5px 8px; line-height: 1.42; vertical-align: middle; overflow: visible;">${a(s[0])}</td>
              <td style="font-weight:700; padding: 6.5px 8px; line-height: 1.42; vertical-align: middle; overflow: visible;">${a(s[1])}</td>
              <td style="font-weight:800; color:${t.saffronDeep}; padding: 6.5px 8px; line-height: 1.42; vertical-align: middle; overflow: visible;">${a(s[2])}</td>
              <td style="font-weight:700; padding: 6.5px 8px; line-height: 1.42; vertical-align: middle; overflow: visible;">${a(s[3])}</td>
            </tr>`).join("")}
      </tbody>
    </table>
    ${f}
    ${qt("जन्म पंचांग और अवकहड़ा चक्र का महत्व","वैदिक ज्योतिष में जन्म तिथि, वार, नक्षत्र, योग और करण व्यक्ति के मूल स्वभाव तथा जीवन की लय दर्शाते हैं। सूर्योदय से पूर्व जन्म होने पर वैदिक वार पूर्व दिवस का माना जाता है। अवकहड़ा चक्र (गण, नाड़ी, योनि, वर्ण, वश्य, पाया) विवाह गुण मिलान और नामाक्षर चयन का आधार होता है।","विवाह मिलान एवं दशा गणना में जन्म के समय चंद्रमा की राशि (जन्म राशि) और नक्षत्र चरण को सदैव प्रधान माना जाता है।")}
  `;g.push({sectionCode:"A",sectionTag:"खण्ड A : जन्म पंचांग व अवकहड़ा",html:$}),g.push(Te(e,F));const v=u==="south"?Gt.south.summary.hi:Gt.north.summary.hi,I=`
    ${V("खण्ड A2 : सरल कुंडली मार्गदर्शिका (1–12 राशि बनाम भाव)",r,o)}
    ${A("A2","कुंडली कैसे पढ़ें? — 1–12 राशि बनाम भाव एवं ग्रह संकेत कुंजी","सामान्य जन के लिए सरल गाइड")}
    <div class="book-card" style="background: ${t.pureIvory}; border: 1.5px solid ${t.templeGold}; border-radius: 10px; padding: 12px 14px; font-size: 9px; line-height: 1.58; color: ${t.inkPrimary};">
      <div style="font-weight: 900; color: ${t.cosmicNavy}; font-size: 10.5px; margin-bottom: 4px;">
        1) ${a(Gt.heading.hi)}
      </div>
      <div>${a(v)}</div>

      <div style="margin-top: 12px; font-weight: 800; color: ${t.saffronDeep}; font-size: 9.5px;">
        2) 1 से 12 राशि अंक सूची एवं उनके स्वामी ग्रह (12 Rashis & Lords):
      </div>
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 7px; margin-top: 6px;">
        ${zt.map(s=>`<div style="background:${t.warmIvory}; border:1px solid ${t.borderMuted}; border-radius:6px; padding:6px 9px; font-size:8.6px;">
               <b style="color:${t.saffronDeep};">${s.number}. ${a(s.nameHi)}</b>
               <span style="color:${t.inkMuted};"> (${a(s.nameEn)})</span>
               <div style="font-size:8px; color:${t.cosmicNavy}; margin-top:1px;">स्वामी: <b>${a(s.lordHi)}</b></div>
             </div>`).join("")}
      </div>

      <div style="margin-top: 12px; font-weight: 800; color: ${t.saffronDeep}; font-size: 9.5px;">
        3) चार्ट में प्रयुक्त ग्रह संक्षिप्ताक्षर एवं विशेष चिह्न (Planet Legend):
      </div>
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 7px; margin-top: 6px;">
        ${He.map(s=>`<div class="book-legend-item" style="background:${t.warmIvory}; border:1px solid ${t.borderMuted}; border-radius:6px; padding:6px 9px; font-size:8.6px; line-height:1.65; color:${t.inkPrimary}; overflow:visible; white-space:nowrap;">
               <span style="font-weight:700; color:${t.cosmicNavy};">${a(s.shortHi.normalize("NFC"))} / ${a(s.shortEn)}</span> = ${a(s.fullHi.normalize("NFC"))} (${a(s.fullEn)})
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
  `;g.push({sectionCode:"A2",sectionTag:"खण्ड A : सरल कुंडली गाइड",html:I});const S=(s,b,R,k,x)=>`
    <div class="book-chart-box" style="background: ${t.pureIvory}; border: 1.6px solid ${t.templeGold}; border-radius: 11px; padding: 10px 12px; text-align: center; overflow: visible;">
      <div style="font-size: 10.2px; font-weight: 900; color: ${t.cosmicNavy}; margin-bottom: 7px; padding-top: 2px; padding-bottom: 2px; line-height: 1.44; overflow: visible;">${a(s)}</div>
      ${Yt(b,u,k,s,l,x)}
      <div style="margin-top: 8px; padding-top: 7px; border-top: 1px dashed ${t.borderMuted}; font-size: 8.4px; color: ${t.inkPrimary}; line-height: 1.48; text-align: left;">
        ${a(R)}
      </div>
    </div>
  `,w=`
    ${V("खण्ड B1 : जन्म लग्न (D-1) एवं नवांश कुंडली (D-9)",r,o)}
    ${A("B1","प्रमुख आधार चक्र — जन्म लग्न कुंडली (D-1) एवं नवांश कुंडली (D-9)",u==="south"?"दक्षिण भारतीय प्रारूप":"उत्तर भारतीय प्रारूप")}
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-top: 8px;">
      ${S(`जन्म लग्न कुंडली (D-1) — ${e.panchang.lagnaName}`,e.lagnaChart,St.lagna_d1.shortPurpose.hi,290,e.panchang.lagnaDegInt)}
      ${S(`नवांश कुंडली (D-9) — ${d?.shodashavarga.find(s=>s.spec.id==="D9")?.ascendantRashiNameHi||e.navamsaChart[0]?.rashiName||""}`,e.navamsaChart,St.navamsha_d9.shortPurpose.hi,290)}
    </div>
    <div style="display: block; margin-top: 12px; padding: 4px 12px 8px 12px; background: ${t.templeGoldSoft}; border: 1.2px solid ${t.templeGold}; border-radius: 8px; font-size: 8.4px; color: ${t.cosmicNavy}; text-align: center; font-weight: 700; line-height: 1.25;">
      ग्रह कुंजी: सू=सूर्य • चं=चंद्र • मं=मंगल • बु=बुध • गु=गुरु • शु=शुक्र • श=शनि • रा=राहु • के=केतु &nbsp;|&nbsp; * वक्री &nbsp;|&nbsp; ^ अस्त &nbsp;|&nbsp; 1–12 अंक = राशि संख्या
    </div>
    ${qt("लग्न (D-1) और नवांश (D-9) साथ क्यों देखे जाते हैं?","जन्म लग्न कुंडली (D-1) जीवन रूपी वृक्ष का तना और मूल संरचना है, जबकि नवांश कुंडली (D-9) उस वृक्ष का फल है। यदि कोई ग्रह D-1 में सामान्य दिखे परंतु D-9 में स्वराशि, उच्च या मित्र राशि (अथवा वर्गोत्तम — दोनों में एक ही राशि) में हो, तो वह जीवन के मध्य व उत्तरार्ध में अत्यंत शुभ फल देता है।","वैवाहिक जीवन, जीवनसाथी के स्वभाव और ग्रहों के वास्तविक आंतरिक बल के लिए नवांश कुंडली (D-9) का विश्लेषण अनिवार्य माना गया है।")}
  `;g.push({sectionCode:"B",sectionTag:"खण्ड B : लग्न व नवांश (D-1, D-9)",html:w});const P=`
    ${V("खण्ड B2 : चंद्र, सूर्य एवं श्रीपति भाव चलित कुंडली",r,o)}
    ${A("B2","सुदर्शन एवं भाव चलित चक्र — चंद्र, सूर्य व वास्तविक MC आधारित श्रीपति चलित","संपूर्ण त्रि-दृष्टि विश्लेषण")}
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 6px;">
      ${S(`चंद्र कुंडली (Chandra) — ${e.panchang.moonRashiName}`,e.chandraChart,St.chandra.shortPurpose.hi,228)}
      ${S(`सूर्य कुंडली (Surya) — ${e.panchang.sunRashiName}`,e.suryaChart||e.lagnaChart,St.surya.shortPurpose.hi,228)}
    </div>
    <div style="margin-top: 10px; display: grid; grid-template-columns: 1fr 1.15fr; gap: 12px; align-items: stretch;">
      ${S("श्रीपति भाव चलित कुंडली (Sripati Bhava Chalit)",e.bhavaChalitChart||e.lagnaChart,St.bhava_chalit.shortPurpose.hi,210,e.panchang.lagnaDegInt)}
      <div class="book-card" style="background: ${t.pureIvory}; border: 1.4px solid ${t.templeGold}; border-radius: 10px; padding: 11px 13px; font-size: 8.6px; line-height: 1.55; color: ${t.inkPrimary}; display: flex; flex-direction: column; justify-content: center;">
        <div style="font-size: 10px; font-weight: 900; color: ${t.cosmicNavy}; border-bottom: 1px solid ${t.borderMuted}; padding-bottom: 5px; margin-bottom: 7px;">
          ✦ इसे कैसे समझें? — तीन चार्ट का समन्वय
        </div>
        <div><b style="color:${t.saffronDeep};">• चंद्र कुंडली:</b> मन, भावना, दैनिक गोचर (राशिफल) और साढ़ेसाती का आधार चंद्र कुंडली है।</div>
        <div style="margin-top:5px;"><b style="color:${t.saffronDeep};">• सूर्य कुंडली:</b> आत्मबल, करियर प्रतिष्ठा, प्रशासनिक योग और पिता के साथ संबंध सूर्य कुंडली से देखे जाते हैं।</div>
        <div style="margin-top:5px;"><b style="color:${t.saffronDeep};">• श्रीपति भाव चलित:</b> वास्तविक Midheaven (MC) से गणना करने पर कुछ ग्रह लग्न चार्ट के बजाय अगले या पिछले भाव का फल दे सकते हैं — यही सूक्ष्म अंतर चलित कुंडली दर्शाती है।</div>
      </div>
    </div>
    ${Ct("after_charts_b",n,c)}
  `;g.push({sectionCode:"B2",sectionTag:"खण्ड B : चंद्र, सूर्य व चलित",html:P});const U=`
    ${V("खण्ड C1 : नवग्रह स्पष्ट तालिका (9 Planets Longitude)",r,o)}
    ${A("C1","नवग्रह स्पष्ट तालिका — राशि, अंश-कला-विकला, नक्षत्र-पद, अवस्था एवं चलित भाव","लाहिड़ी अयनांश + True Node")}
    <table class="book-table" style="font-size: 8.6px;">
      <thead>
        <tr>
          <th style="width: 14%;">ग्रह</th>
          <th style="width: 13%;">राशि</th>
          <th style="width: 8%; text-align:center;">लग्न भाव</th>
          <th style="width: 8%; text-align:center;">चलित भाव</th>
          <th style="width: 15%;">अंश (DMS)</th>
          <th style="width: 18%;">नक्षत्र (चरण)</th>
          <th style="width: 12%;">अवस्था</th>
          <th style="width: 12%;">गति / स्थिति</th>
        </tr>
      </thead>
      <tbody>
        ${e.planets.map((s,b)=>{const k=d?.planets[b]?.bhavaChalitHouse??s.houseInLagna;return`
            <tr style="background:${b%2===0?"#FFFDF8":"#FEF6E4"};">
              <td style="font-weight:800; color:${t.cosmicNavy}; padding: 7px 6px;">${a(s.hindiName)} (${a(s.shortHindi)})</td>
              <td style="font-weight:700; padding: 7px 6px;">${a(s.rashiName)}</td>
              <td style="text-align:center; font-weight:800; color:${t.saffronDeep};">${s.houseInLagna}</td>
              <td style="text-align:center; font-weight:800; color:${k!==s.houseInLagna?t.crimson:t.emerald};">${k}</td>
              <td style="font-family:monospace; font-weight:700;">${a(s.fullDegreeDMS)}</td>
              <td>${a(s.nakshatra)} (चरण ${s.pada})</td>
              <td style="font-weight:700; color:${s.statusBadge==="shubh"?t.emerald:s.statusBadge==="upay"?t.crimson:t.saffronDeep};">${a(s.dignity)}</td>
              <td>${s.id==="rahu"||s.id==="ketu"?"स्वाभाविक गति":`${s.isRetrograde?"वक्री (*) ":""}${s.isCombust?"अस्त (^) ":""}${!s.isRetrograde&&!s.isCombust?"मार्गी":""}`}</td>
            </tr>`}).join("")}
      </tbody>
    </table>
    ${xt("navagraha")}
    <div class="book-card" style="margin-top: 8px; background: ${t.pureIvory}; border: 1.2px solid ${t.templeGold}; border-radius: 8px; padding: 9px 12px; font-size: 8.5px; line-height: 1.52;">
      <b style="color:${t.cosmicNavy};">ग्रह अवस्था संक्षेप:</b>
      0°–6° बाल/मृत (राशि अनुसार), 12°–18° युवा अवस्था (पूर्ण फलदायी), 29°–30° राशि संधि। यदि लग्न भाव और चलित भाव भिन्न हों (लाल रंग), तो ग्रह का भाव-फल चलित भाव के अनुसार भी विचारणीय होता है।
    </div>
  `;g.push({sectionCode:"C1",sectionTag:"खण्ड C : नवग्रह स्पष्ट तालिका",html:U});const _=we(e),B=Ve(e),Y=`
    ${V("खण्ड C2 : श्रीपति भाव संधि एवं पंचधा मैत्री चक्र",r,o)}
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
        ${_.map((s,b)=>`
            <tr style="background:${b%2===0?"#FFFDF8":"#FEF6E4"};">
              <td style="font-weight:800; color:${t.cosmicNavy}; line-height: 1.44; overflow: visible;">${a(s.bhavaName)}</td>
              <td style="line-height: 1.44; overflow: visible;">${a(s.rashiName)} (${a(s.rashiLord)})</td>
              <td style="font-family:monospace; font-weight:700; color:${t.emerald}; white-space: nowrap; line-height: 1.44; overflow: visible;">${a(s.madhyaDMS)}</td>
              <td style="font-family:monospace; white-space: nowrap; direction: ltr; unicode-bidi: isolate; line-height: 1.44; overflow: visible;">${a(s.sandhiStartDMS)} → ${a(s.sandhiEndDMS)}</td>
            </tr>`).join("")}
      </tbody>
    </table>

    ${A("C2b","ग्रह पंचधा मैत्री चक्र (नैसर्गिक + तात्कालिक मैत्री तालिका)","अति मित्र से अति शत्रु")}
    <table class="book-table" style="font-size: 7.9px; text-align:center;">
      <thead>
        <tr>
          <th style="width: 13%; text-align:left;">ग्रह</th>
          ${Qt.map(s=>`<th style="width: 12.4%; text-align:center;">${a(s.hi)}</th>`).join("")}
        </tr>
      </thead>
      <tbody>
        ${B.map(s=>`
            <tr>
              <td style="text-align:left; font-weight:800; color:${t.cosmicNavy}; background:#FEF6E4;">${a(s.grahaHi)}</td>
              ${s.cells.map(b=>`<td style="font-weight:800; color:${b.color}; background:${b.bg};">${a(b.label)}</td>`).join("")}
            </tr>`).join("")}
      </tbody>
    </table>
    ${xt("bhava_sphut")}
  `;g.push({sectionCode:"C2",sectionTag:"खण्ड C : भाव संधि व मैत्री चक्र",html:Y});const q=d?.shodashavarga||[];if(q.length>0){const s=["sun","moon","mars","mercury","jupiter","venus","saturn","rahu","ketu"],b={sun:"सूर्य",moon:"चंद्र",mars:"मंगल",mercury:"बुध",jupiter:"गुरु",venus:"शुक्र",saturn:"शनि",rahu:"राहु",ketu:"केतु"},R=C=>zt[(C||1)-1]?.nameHi.slice(0,3)||String(C),k=`
      ${V("खण्ड C3 : सम्पूर्ण 16 षोडशवर्ग सारणी (D1–D60)",r,o)}
      ${A("C3","सम्पूर्ण 16 षोडशवर्ग ग्रह राशि सारणी (All 16 BPHS Shodashavarga D1–D60)","बृहत् पाराशर होरा मानक")}
      <table class="book-table" style="font-size: 7.9px;">
        <thead>
          <tr>
            <th style="width: 15%;">वर्ग कुंडली</th>
            <th style="width: 8%; text-align:center;">लग्न</th>
            ${s.map(C=>`<th style="width: 7.3%; text-align:center;">${b[C]}</th>`).join("")}
            <th style="width: 11.3%; text-align:center;">संवेदनशीलता</th>
          </tr>
        </thead>
        <tbody>
          ${q.map((C,z)=>{const W=C.spec.birthTimeSensitivity==="low"?"स्थिर":C.spec.birthTimeSensitivity==="moderate"?"मध्यम":C.spec.birthTimeSensitivity==="high"?"उच्च":"अति सूक्ष्म";return`
                <tr style="background:${z%2===0?"#FFFDF8":"#FEF6E4"};">
                  <td style="font-weight:800; color:${t.cosmicNavy};">${a(C.spec.id)} ${a(C.spec.nameHi)}</td>
                  <td style="text-align:center; font-weight:800; color:${t.saffronDeep};">${C.ascendantRashiNumber}-${a(R(C.ascendantRashiNumber))}</td>
                  ${s.map(tt=>{const kt=C.planetRashis[tt];return`<td style="text-align:center; font-variant-numeric: tabular-nums; white-space: nowrap;">${kt}-${a(R(kt))}</td>`}).join("")}
                  <td style="text-align:center; font-weight:700; color:${C.spec.birthTimeSensitivity==="critical"?t.crimson:t.inkMuted};">${W}</td>
                </tr>`}).join("")}
        </tbody>
      </table>
      ${xt("navamsha_shodashavarga")}
    `;g.push({sectionCode:"C3",sectionTag:"खण्ड C : 16 षोडशवर्ग सारणी",html:k});const x=[{code:"C4",range:[0,4],title:"षोडशवर्ग चक्र (भाग 1/4) — D-1 लग्न, D-2 होरा, D-3 द्रेष्काण एवं D-4 चतुर्थांश",banner:!1},{code:"C5",range:[4,8],title:"षोडशवर्ग चक्र (भाग 2/4) — D-7 सप्तांश, D-9 नवांश, D-10 दशमांश एवं D-12 द्वादशांश",banner:!1},{code:"C6",range:[8,12],title:"षोडशवर्ग चक्र (भाग 3/4) — D-16 षोडशांश, D-20 विंशांश, D-24 चतुर्विंशांश एवं D-27 सप्तविंशांश",banner:!1},{code:"C7",range:[12,16],title:"षोडशवर्ग चक्र (भाग 4/4) — D-30 त्रिंशांश, D-40 खवेदांश, D-45 अक्षवेदांश एवं D-60 षष्ट्यांश",banner:!0}];for(const C of x){const z=q.slice(C.range[0],C.range[1]);if(z.length===0)continue;const W=C.banner?182:236,tt=z.map(rt=>{const Ht=je(rt.houses),It=rt.spec.birthTimeSensitivity==="critical"?" • अति समय-संवेदनशील":rt.spec.birthTimeSensitivity==="high"?" • समय-संवेदनशील":"";return`
            <div class="book-chart-box" style="background: ${t.pureIvory}; border: 1.5px solid ${t.templeGold}; border-radius: 10px; padding: 11px 10px 9px 10px; text-align: center; overflow: visible;">
              <div style="font-size: 9.2px; font-weight: 800; color: ${t.cosmicNavy}; line-height: 1.5; padding-top: 4px; margin-bottom: 2px; overflow: visible;">
                ${a(rt.spec.id)} — ${a(rt.spec.nameHi)} (${a(rt.ascendantRashiNameHi)})
              </div>
              <div style="font-size: 7.4px; color: ${t.saffronDeep}; font-weight: 700; padding-top: 3px; margin: 2px 0 7px 0; line-height: 1.48; overflow: visible;">
                विषय: ${a(rt.spec.significationHi)}${a(It)}
              </div>
              ${Yt(Ht,u,W,`${rt.spec.id} ${rt.spec.nameHi}`,l)}
            </div>
          `}).join(""),kt=`
        ${V(`खण्ड ${C.code} : 16 षोडशवर्ग कुंडली चक्र`,r,o)}
        ${A(C.code,C.title,"प्रति पृष्ठ 4 बड़े वर्ग चक्र")}
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 11px; margin-top: 10px; overflow: visible;">
          ${tt}
        </div>
        <div style="display: block; margin-top: 8px; padding: 4px 10px 6px 10px; background: ${t.templeGoldSoft}; border: 1px solid ${t.templeGold}; border-radius: 7px; font-size: 7.9px; color: ${t.cosmicNavy}; text-align: center; font-weight: 700; line-height: 1.25;">
          1–12 अंक = राशि संख्या • सू=सूर्य, चं=चंद्र, मं=मंगल, बु=बुध, गु=गुरु, शु=शुक्र, श=शनि, रा=राहु, के=केतु
        </div>
        ${C.banner?Ct("after_vargas_c",n,c):""}
      `;g.push({sectionCode:C.code,sectionTag:`खण्ड ${C.code} : षोडशवर्ग चार्ट्स`,html:kt})}}if(h){const s=h.planets.map(x=>{const C=Math.min(100,Math.round(x.totalRupas/Math.max(1,x.requiredRupas*1.45)*100)),z=x.strengthRatio>=1.15?"linear-gradient(90deg, #059669, #10B981)":x.meetsMinimum?"linear-gradient(90deg, #D97706, #F59E0B)":"linear-gradient(90deg, #DC2626, #F97316)";return`
          <div style="display: grid; grid-template-columns: 78px 1fr 110px; align-items: center; gap: 10px; padding: 5px 8px; background: #FFFDF8; border: 1px solid ${t.borderMuted}; border-radius: 7px;">
            <div style="font-size: 9px; font-weight: 800; color: ${t.cosmicNavy};">${a(x.hindiName)} (#${x.rank})</div>
            ${Kt(C,z,`${x.totalRupas.toFixed(2)} रूप`)}
            <div style="font-size: 7.9px; font-weight: 800; text-align: right; color: ${x.meetsMinimum?t.emerald:t.crimson};">
              ${x.meetsMinimum?"✓ पुष्ट":"सामान्य"} (${(x.strengthRatio*100).toFixed(0)}%)
            </div>
          </div>`}).join(""),b=`
      ${V("खण्ड D1 : 6-अंगी पाराशरी षड्बल एवं शक्ति ग्राफ",r,o)}
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
          ${h.planets.map((x,C)=>`
              <tr style="background:${C%2===0?"#FFFDF8":"#FEF6E4"};">
                <td style="font-weight:800; color:${t.cosmicNavy};">${a(x.hindiName)}</td>
                <td style="text-align:right; font-family:monospace;">${x.sthanaBala.total.toFixed(1)}</td>
                <td style="text-align:right; font-family:monospace;">${x.digBala.toFixed(1)}</td>
                <td style="text-align:right; font-family:monospace;">${x.kalaBala.total.toFixed(1)}</td>
                <td style="text-align:right; font-family:monospace;">${x.cheshtaBala.toFixed(1)}</td>
                <td style="text-align:right; font-family:monospace;">${x.naisargikaBala.toFixed(1)}</td>
                <td style="text-align:right; font-family:monospace; color:${x.drikBala>=0?t.emerald:t.crimson};">${x.drikBala>=0?"+":""}${x.drikBala.toFixed(1)}</td>
                <td style="text-align:right; font-family:monospace; font-weight:800;">${x.totalVirupas.toFixed(1)}</td>
                <td style="text-align:right; font-family:monospace; font-weight:800; color:${x.meetsMinimum?t.emerald:t.saffronDeep};">${x.totalRupas.toFixed(2)} / ${x.requiredRupas.toFixed(1)}</td>
                <td style="font-weight:700;">#${x.rank} ${a(x.gradeHi.split(" ")[0])}</td>
              </tr>`).join("")}
        </tbody>
      </table>

      ${A("D1b","सप्तग्रह षड्बल शक्ति तुलना (Colored Strength Bars)","न्यूनतम अपेक्षित बल के सापेक्ष")}
      <div style="display: flex; flex-direction: column; gap: 6px; margin-top: 6px;">
        ${s}
      </div>
      ${xt("shadbala")}
    `;g.push({sectionCode:"D",sectionTag:"खण्ड D : 6-अंगी पाराशरी षड्बल",html:b});const R=Math.max(8,...h.bhavas.map(x=>x.totalRupas)),k=`
      ${V("खण्ड D2 : इष्ट-कष्ट फल एवं द्वादश भाव बल",r,o)}
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
          ${h.planets.map((x,C)=>{const z=Math.round(x.ishtaPhala/Math.max(1,x.ishtaPhala+x.kashtaPhala)*100);return`
              <tr style="background:${C%2===0?"#FFFDF8":"#FEF6E4"};">
                <td style="font-weight:800; color:${t.cosmicNavy};">${a(x.hindiName)}</td>
                <td style="text-align:right; font-family:monospace; font-weight:800; color:${t.emerald};">${x.ishtaPhala.toFixed(1)}</td>
                <td style="text-align:right; font-family:monospace; font-weight:700; color:${t.crimson};">${x.kashtaPhala.toFixed(1)}</td>
                <td>${Kt(z,z>=50?"#059669":"#D97706",`${z}% शुभ`)}</td>
                <td style="font-weight:700; color:${x.ishtaPhala>=x.kashtaPhala?t.emerald:t.saffronDeep};">${x.ishtaPhala>=x.kashtaPhala?"शुभ फल प्रधान":"परिश्रम उपरांत फल"}</td>
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
          ${h.bhavas.map((x,C)=>{const z=Math.round(x.totalRupas/R*100),W=x.rank<=4?"#059669":x.rank<=8?"#D97706":"#C2410C";return`
              <tr style="background:${C%2===0?"#FFFDF8":"#FEF6E4"};">
                <td style="font-weight:800; color:${t.cosmicNavy};">${x.houseNumber}. ${a(x.bhavaTitleHi)}</td>
                <td>${a(x.rashiNameHi)} (${a(x.lordHindi)})</td>
                <td style="text-align:right; font-family:monospace;">${x.bhavadhipatiBala.toFixed(1)}</td>
                <td style="text-align:right; font-family:monospace;">${x.bhavaDigBala.toFixed(1)}</td>
                <td style="text-align:right; font-family:monospace; color:${x.bhavaDrishtiBala>=0?t.emerald:t.crimson};">${x.bhavaDrishtiBala>=0?"+":""}${x.bhavaDrishtiBala.toFixed(1)}</td>
                <td>${Kt(z,W,x.totalRupas.toFixed(2))}</td>
                <td style="font-weight:700; color:${x.rank<=4?t.emerald:t.inkPrimary};">#${x.rank} ${a(x.gradeHi.split(" ")[0])}</td>
              </tr>`}).join("")}
        </tbody>
      </table>
      ${xt("bhava_bala")}
    `;g.push({sectionCode:"D2",sectionTag:"खण्ड D : इष्ट-कष्ट व भाव बल",html:k})}const K=e.ashtakavarga;if(K){const s=((e.panchang.lagnaNumber||1)-1+12)%12,b=Array.from({length:6},(k,x)=>{const C=e.lagnaChart[x],z=e.lagnaChart[x+6],W=K.bhavaSarvashtakavarga?.[x]??K.sarvashtakavarga[(s+x)%12]??28,tt=K.bhavaSarvashtakavarga?.[x+6]??K.sarvashtakavarga[(s+x+6)%12]??28;return`
        <tr style="background:${x%2===0?"#FFFDF8":"#FEF6E4"};">
          <td style="font-weight:800;">भाव ${x+1} (${a(C?.rashiName||"")})</td>
          <td style="font-weight:800; color:${W>=28?t.emerald:t.saffronDeep};">${W} बिंदु — ${W>=30?"अति पुष्ट":W>=28?"संतुलित शुभ":"अतिरिक्त प्रयास"}</td>
          <td style="font-weight:800;">भाव ${x+7} (${a(z?.rashiName||"")})</td>
          <td style="font-weight:800; color:${tt>=28?t.emerald:t.saffronDeep};">${tt} बिंदु — ${tt>=30?"अति पुष्ट":tt>=28?"संतुलित शुभ":"अतिरिक्त प्रयास"}</td>
        </tr>`}).join(""),R=`
      ${V("खण्ड E : अष्टकवर्ग एवं सर्वाष्टकवर्ग (337 बिंदु)",r,o)}
      ${A("E1","सप्तग्रह भिन्नाष्टकवर्ग (BAV) एवं सर्वाष्टकवर्ग (SAV) सारणी",`कुल योग: ${K.totalBindusSum} बिंदु`)}
      <table class="book-table" style="font-size: 8px; text-align:center;">
        <thead>
          <tr>
            <th style="width: 16%; text-align:left;">ग्रह / वर्ग</th>
            ${zt.map(k=>`<th style="width: 6.4%; text-align:center;">${k.number}<br/>${a(k.nameHi.slice(0,3))}</th>`).join("")}
            <th style="width: 7.2%; text-align:right;">योग</th>
          </tr>
        </thead>
        <tbody>
          ${Object.entries(K.planetBindus).map(([k,x],C)=>{const z=x.reduce((W,tt)=>W+tt,0);return`
                <tr style="background:${C%2===0?"#FFFDF8":"#FEF6E4"};">
                  <td style="text-align:left; font-weight:800; color:${t.cosmicNavy};">${a(k)}</td>
                  ${x.map(W=>`<td style="font-family:monospace; font-weight:${W>=5?800:600}; color:${W>=5?t.emerald:W<=2?t.crimson:t.inkPrimary};">${W}</td>`).join("")}
                  <td style="text-align:right; font-family:monospace; font-weight:800;">${z}</td>
                </tr>`}).join("")}
          <tr style="background:${t.templeGoldSoft}; font-weight:900;">
            <td style="text-align:left; color:${t.cosmicNavy};">सर्वाष्टकवर्ग (SAV)</td>
            ${K.sarvashtakavarga.map(k=>`<td style="font-family:monospace; color:${k>=30?t.emerald:k<25?t.crimson:t.saffronDeep};">${k}</td>`).join("")}
            <td style="text-align:right; font-family:monospace; color:${t.cosmicNavy};">${K.totalBindusSum}</td>
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
        <tbody>${b}</tbody>
      </table>
      <div class="book-card" style="margin-top:6px; background:${t.pureIvory}; border:1.2px solid ${t.templeGold}; border-radius:7px; padding:7px 10px; font-size:8.2px; line-height:1.45;">
        <div><b style="color:${t.emerald};">✦ सर्वाधिक प्रबल राशियाँ (30+ बिंदु):</b> ${a(K.strongestRashis.join(" • ")||"—")}</div>
        <div style="margin-top:2px;"><b style="color:${t.saffronDeep};">✦ अतिरिक्त ध्यान योग्य राशियाँ (&lt;28 बिंदु):</b> ${a(K.weakestRashis.join(" • ")||"—")}</div>
      </div>
      ${xt("ashtakavarga")}
      ${Ct("after_ashtakavarga_e",n,c)}
    `;g.push({sectionCode:"E",sectionTag:"खण्ड E : अष्टकवर्ग (337 बिंदु)",html:R})}const y=m?.vimshottari,T=`
    ${V("खण्ड F1 : विंशोत्तरी महादशा चक्र एवं 4-स्तरीय सक्रिय दशा",r,o)}
    ${A("F1","विंशोत्तरी महादशा (120 वर्षीय चक्र) एवं वर्तमान सक्रिय 4-स्तरीय दशा",y?y.balanceAtBirthHi:"जन्म नक्षत्र आधारित")}
    ${y?`<div style="display:grid; grid-template-columns: repeat(4, 1fr); gap: 7px; margin-bottom: 8px;">
             ${[["वर्तमान महादशा",y.activeMahadasha],["वर्तमान अंतर्दशा",y.activeAntardasha],["वर्तमान प्रत्यंतर",y.activePratyantardasha],["वर्तमान सूक्ष्म दशा",y.activeSookshmadasha]].map(([s,b])=>`
                 <div class="book-cover-pillar-card" style="display: flex; flex-direction: column; justify-content: center; background:${t.cosmicNavy}; color:${t.warmIvory}; border:1.3px solid ${t.templeGold}; border-radius:8px; padding:6px 9px; box-sizing:border-box;">
                   <div style="display:block; font-size:7.6px; color:#FCD34D; font-weight:700; line-height:1.25;">${a(s)}</div>
                   <div style="display:block; font-size:11px; font-weight:800; margin-top:3px; line-height:1.25;">${a(b.lordHindi)}</div>
                   <div style="display:block; font-size:7.3px; color:#CBD5E1; font-variant-numeric: tabular-nums; margin-top:3px; line-height:1.25;">${a(b.startDateHi)} – ${a(b.endDateHi)}</div>
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
        ${e.mahadashas.map((s,b)=>`
            <tr style="background:${s.isCurrent?t.emeraldSoft:b%2===0?"#FFFDF8":"#FEF6E4"};">
              <td style="font-weight:800; color:${s.isCurrent?t.emerald:t.cosmicNavy};">${a(s.planet)}${s.isCurrent?" ★":""}</td>
              <td style="text-align:center; font-family:monospace;">${s.years}</td>
              <td style="font-family:monospace; font-weight:700;">${a(s.startYear)} – ${a(s.endYear)}</td>
              <td>${a(s.prediction)}</td>
            </tr>`).join("")}
      </tbody>
    </table>

    ${y&&y.activeAntardashaPratyantars.length>0?`
          ${A("F1b",`वर्तमान सक्रिय प्रत्यंतर दशा (${y.activeMahadasha.lordHindi} – ${y.activeAntardasha.lordHindi})`,"सूक्ष्म काल गणना")}
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
              ${y.activeAntardashaPratyantars.map((s,b)=>`
                  <tr style="background:${s.isCurrent?t.emeraldSoft:b%2===0?"#FFFDF8":"#FEF6E4"};">
                    <td style="font-weight:800; color:${s.isCurrent?t.emerald:t.cosmicNavy};">${a(s.lordHindi)}${s.isCurrent?" (सक्रिय)":""}</td>
                    <td style="font-variant-numeric: tabular-nums; white-space: nowrap;">${a(s.startDateHi)}</td>
                    <td style="font-variant-numeric: tabular-nums; white-space: nowrap;">${a(s.endDateHi)}</td>
                    <td style="text-align:right; font-variant-numeric: tabular-nums; white-space: nowrap; font-weight: 700;">${Math.max(1,Math.round(Number(s.durationDays)||0))} दिन</td>
                  </tr>`).join("")}
            </tbody>
          </table>`:""}
    ${xt("dasha_vimshottari")}
  `;if(g.push({sectionCode:"F1",sectionTag:"खण्ड F : विंशोत्तरी महादशा",html:T}),y&&y.mahadashas.length>0){const s=y.mahadashas.slice(0,9),b=[{code:"F2",tag:"खण्ड F2 : विंशोत्तरी अंतर्दशा (भाग 1/4)",items:s.slice(0,2)},{code:"F3",tag:"खण्ड F3 : विंशोत्तरी अंतर्दशा (भाग 2/4)",items:s.slice(2,4)},{code:"F4",tag:"खण्ड F4 : विंशोत्तरी अंतर्दशा (भाग 3/4)",items:s.slice(4,6)},{code:"F5",tag:"खण्ड F5 : विंशोत्तरी अंतर्दशा (भाग 4/4)",items:s.slice(6,9)}];for(const R of b){if(R.items.length===0)continue;const k=R.items.length>=3,x=R.items.map(C=>`
          <div style="margin-bottom: ${k?7:12}px;">
            ${A(`${C.lordHindi} महादशा`,`${C.lordHindi} महादशा के अंतर्गत सभी 9 अंतर्दशाएँ (${C.startDateHi} – ${C.endDateHi})`,C.isCurrent?"★ वर्तमान सक्रिय महादशा":`${C.durationYears.toFixed(1)} वर्ष`)}
            <div style="font-size: ${k?7.6:8.2}px; color: ${t.saffronDeep}; font-weight: 700; margin-bottom: 4px; padding: 0 2px;">
              महादशा प्रभाव: ${a(C.effectHi)}
            </div>
            <table class="book-table" style="font-size: ${k?7.1:8}px;">
              <thead>
                <tr>
                  <th style="width: 17%;">अंतर्दशा</th>
                  <th style="width: 18%;">आरंभ तिथि</th>
                  <th style="width: 18%;">समाप्ति तिथि</th>
                  <th style="width: 47%;">प्रमुख फल संकेत</th>
                </tr>
              </thead>
              <tbody>
                ${C.antardashas.map((z,W)=>`
                    <tr style="background:${z.isCurrent?t.emeraldSoft:W%2===0?"#FFFDF8":"#FEF6E4"};">
                      <td style="font-weight:800; color:${z.isCurrent?t.emerald:t.cosmicNavy};">${a(C.lordHindi)} – ${a(z.lordHindi)}${z.isCurrent?" ★":""}</td>
                      <td style="font-variant-numeric: tabular-nums; white-space: nowrap;">${a(z.startDateHi)}</td>
                      <td style="font-variant-numeric: tabular-nums; white-space: nowrap;">${a(z.endDateHi)}</td>
                      <td>${a(qe[z.lordHindi]||"संतुलित कर्म व धैर्य से शुभ परिणाम।")}</td>
                    </tr>`).join("")}
              </tbody>
            </table>
          </div>
        `).join("");g.push({sectionCode:R.code,sectionTag:R.tag,html:`
          ${V(R.tag,r,o)}
          ${x}
        `})}}if(m){const s=`
      ${V("खण्ड F6 : 36-वर्षीय योगिनी दशा एवं जैमिनी चर दशा",r,o)}
      ${A("F6a","योगिनी दशा चक्र (36-वर्षीय पाराशरी प्रणाली)",`सक्रिय: ${m.yogini.activeMahadasha.yoginiNameHi} → ${m.yogini.activeAntardasha.yoginiNameHi}`)}
      <table class="book-table" style="font-size: 7.5px; width: 100%; table-layout: fixed;">
        <thead>
          <tr>
            <th style="width: 19%;">योगिनी (स्वामी)</th>
            <th style="width: 6%; text-align:center;">वर्ष</th>
            <th style="width: 10%;">प्रकृति</th>
            <th style="width: 34%; white-space: nowrap;">दिनांक अवधि (आरंभ → अंत)</th>
            <th style="width: 31%;">संकेत</th>
          </tr>
        </thead>
        <tbody>
          ${m.yogini.mahadashas.slice(0,10).map((b,R)=>`
              <tr style="background:${b.isCurrent?t.emeraldSoft:R%2===0?"#FFFDF8":"#FEF6E4"};">
                <td style="font-weight:800; color:${b.isCurrent?t.emerald:t.cosmicNavy};">${a(b.yoginiNameHi)} (${a(b.lordHindi)})${b.isCurrent?" ★":""}</td>
                <td style="text-align:center; font-family:monospace;">${b.years}</td>
                <td style="font-weight:700; color:${b.natureHi==="शुभ"?t.emerald:b.natureHi==="मिश्रित"?t.saffronDeep:t.crimson};">${a(b.natureHi)}</td>
                <td style="white-space: nowrap;">${pe(b.startDateHi,b.endDateHi)}</td>
                <td>${a(b.effectHi)}</td>
              </tr>`).join("")}
        </tbody>
      </table>

      ${A("F6b","जैमिनी सप्त चर कारक (AK–DK) एवं राशि चर दशा",`सक्रिय: ${m.jaimini.activeMahadasha.rashiNameHi} → ${m.jaimini.activeAntardasha.rashiNameHi}`)}
      <div style="display:grid; grid-template-columns: repeat(4, 1fr); gap: 6px; margin-bottom: 7px;">
        ${m.jaimini.karakas.map(b=>`
            <div style="background:${t.pureIvory}; border:1.1px solid ${t.templeGold}; border-radius:6px; padding:5px 7px; font-size:7.6px;">
              <div style="font-weight:800; color:${t.saffronDeep};">${a(b.code)} • ${a(b.nameHi)}</div>
              <div style="font-weight:800; color:${t.cosmicNavy}; font-size:8.6px;">${a(b.planetHindi)} <span style="font-family:monospace; font-weight:600; color:${t.inkMuted};">(${a(b.degDMS)})</span></div>
            </div>`).join("")}
      </div>
      <table class="book-table" style="font-size: 7.4px; width: 100%; table-layout: fixed;">
        <thead>
          <tr>
            <th style="width: 18%;">चर दशा राशि</th>
            <th style="width: 12%;">स्वामी</th>
            <th style="width: 7%; text-align:center;">वर्ष</th>
            <th style="width: 35%; white-space: nowrap;">अवधि (आरंभ → अंत)</th>
            <th style="width: 28%;">नियम नोट</th>
          </tr>
        </thead>
        <tbody>
          ${m.jaimini.charaDasha.slice(0,8).map((b,R)=>`
              <tr style="background:${b.isCurrent?t.emeraldSoft:R%2===0?"#FFFDF8":"#FEF6E4"};">
                <td style="font-weight:800;">${b.rashiNumber}. ${a(b.rashiNameHi)}${b.isCurrent?" ★":""}</td>
                <td>${a(b.effectiveLordHindi)}</td>
                <td style="text-align:center; font-family:monospace;">${b.durationYears}</td>
                <td style="white-space: nowrap;">${pe(b.startDateHi,b.endDateHi)}</td>
                <td>${a(b.lordStrengthRuleNoteHi)}</td>
              </tr>`).join("")}
        </tbody>
      </table>
      ${xt("dasha_yogini")}
    `;g.push({sectionCode:"F6",sectionTag:"खण्ड F : योगिनी एवं जैमिनी दशा",html:s})}const E=e.deepAnalysis?.allTwelveBhavas||[],j=s=>s.map(b=>`
        <div class="book-card" style="background: ${t.pureIvory}; border: 1.3px solid ${t.templeGold}; border-left: 4px solid ${b.strengthLabel==="प्रबल"?t.emerald:b.strengthLabel==="शुभ"?t.saffron:t.templeGoldDark}; border-radius: 8px; padding: 9px 11px; margin-bottom: 8px;">
          <div style="display: table; width: 100%; margin-bottom: 4px;">
            <div style="display: table-cell; vertical-align: middle; text-align: left; font-size: 9.8px; font-weight: 900; color: ${t.cosmicNavy}; padding-right: 8px;">
              भाव ${b.house} — ${a(b.bhavaName)} (${a(b.rashi)} राशि)
            </div>
            <div style="display: table-cell; vertical-align: middle; text-align: right; white-space: nowrap; width: 1%;">
              <span class="book-pill" style="${Et} font-size: 7.8px; font-weight: 800; padding-left: 9px; padding-right: 9px; border-radius: 999px; white-space: nowrap; background: ${b.strengthLabel==="प्रबल"?t.emeraldSoft:t.saffronSoft}; color: ${b.strengthLabel==="प्रबल"?t.emerald:t.saffronDeep};">
                <span style="${Dt}">स्थिति: ${a(b.strengthLabel)}</span>
              </span>
            </div>
          </div>
          <div style="font-size: 8.1px; color: ${t.saffronDeep}; font-weight: 700; margin-bottom: 3px;">
            भावेश: ${a(b.lord)} (स्थित भाव: ${b.lordPlacementHouse}) &nbsp;|&nbsp; स्थित ग्रह: ${a(b.occupants||"रिक्त (भावेश व दृष्टि से फल)")}
          </div>
          <div style="font-size: 8.6px; color: ${t.inkPrimary}; line-height: 1.52;">
            ${a(b.prediction)}
          </div>
        </div>`).join(""),Z=`
    ${V("खण्ड G1 : द्वादश भाव फल (प्रथम से षष्ठ भाव)",r,o)}
    ${A("G1","द्वादश भाव फल विश्लेषण — भाव 1 से भाव 6 (तनु, धन, पराक्रम, सुख, संतान, शत्रु)",`${e.panchang.lagnaName} लग्न`)}
    ${j(E.slice(0,6))}
    ${qt("भाव फल कैसे पढ़ें?","प्रत्येक भाव का फल तीन आधारों पर देखा जाता है: (1) उस भाव की राशि व स्वामी (भावेश) की स्थिति, (2) भाव में बैठे ग्रह, और (3) उस भाव पर पड़ने वाली शुभ या क्रूर ग्रहों की दृष्टि। रिक्त भाव का अर्थ अशुभ नहीं होता — उसका फल भावेश की स्थिति से मिलता है।","प्रबल व शुभ भाव जीवन के उन क्षेत्रों को दर्शाते हैं जहाँ कम प्रयास में भी उत्तम सफलता मिलती है।")}
  `;g.push({sectionCode:"G1",sectionTag:"खण्ड G : द्वादश भाव फल (1–6)",html:Z});const O=`
    ${V("खण्ड G2 : द्वादश भाव फल (सप्तम से द्वादश भाव)",r,o)}
    ${A("G2","द्वादश भाव फल विश्लेषण — भाव 7 से भाव 12 (विवाह, आयु, भाग्य, कर्म, लाभ, व्यय)",`${e.panchang.lagnaName} लग्न`)}
    ${j(E.slice(6,12))}
  `;g.push({sectionCode:"G2",sectionTag:"खण्ड G : द्वादश भाव फल (7–12)",html:O});const st=s=>{const b=Object.entries(Ke).find(([R])=>s.hindiName.includes(R))?.[1]||"जन्म कुंडली में विशिष्ट कर्मफल व जीवन दिशा प्रदान करने वाला ग्रह।";return`
      <div class="book-card" style="background: ${t.pureIvory}; border: 1.3px solid ${t.templeGold}; border-radius: 9px; padding: 10px 12px; margin-bottom: 9px;">
        <div style="display: table; width: 100%; border-bottom: 1px solid ${t.borderMuted}; padding-bottom: 4px; margin-bottom: 5px;">
          <div style="display: table-cell; vertical-align: middle; text-align: left; font-size: 10px; font-weight: 900; color: ${t.cosmicNavy}; padding-right: 8px;">
            ✦ ${a(s.hindiName)} विचार — ${a(s.rashiName)} राशि, भाव ${s.houseInLagna} (${a(s.fullDegreeDMS)})
          </div>
          <div style="display: table-cell; vertical-align: middle; text-align: right; white-space: nowrap; width: 1%;">
            <span class="book-pill" style="${Et} font-size: 7.8px; font-weight: 800; padding-left: 9px; padding-right: 9px; border-radius: 999px; white-space: nowrap; background: ${s.statusBadge==="shubh"?t.emeraldSoft:s.statusBadge==="upay"?t.crimsonSoft:t.saffronSoft}; color: ${s.statusBadge==="shubh"?t.emerald:s.statusBadge==="upay"?t.crimson:t.saffronDeep};">
              <span style="${Dt}">${a(s.dignity)}${s.id!=="rahu"&&s.id!=="ketu"&&s.isRetrograde?" • वक्री (*)":""}${s.isCombust?" • अस्त (^)":""}</span>
            </span>
          </div>
        </div>
        <div style="font-size: 8.2px; color: ${t.saffronDeep}; font-weight: 700; margin-bottom: 3px;">
          नक्षत्र: ${a(s.nakshatra)} (चरण ${s.pada}) &nbsp;|&nbsp; कारकत्व: ${a(b)}
        </div>
        <div style="font-size: 8.6px; color: ${t.inkPrimary}; line-height: 1.52;">
          ${a(s.houseEffect||`${s.hindiName} आपकी कुंडली के ${s.houseInLagna}वें भाव में ${s.rashiName} राशि में स्थित होकर ${s.dignity} अवस्था में फल प्रदान कर रहे हैं।`)}
        </div>
      </div>`},gt=`
    ${V("खण्ड G3 : नवग्रह विचार (सूर्य से गुरु तक)",r,o)}
    ${A("G3","नवग्रह विचार (भाग 1/2) — सूर्य, चंद्र, मंगल, बुध एवं गुरु का विस्तृत प्रभाव","भाव एवं अवस्था आधारित")}
    ${e.planets.slice(0,5).map(st).join("")}
  `;g.push({sectionCode:"G3",sectionTag:"खण्ड G : नवग्रह विचार (1–5)",html:gt});const lt=`
    ${V("खण्ड G4 : नवग्रह विचार (शुक्र से केतु) एवं शुभ राजयोग",r,o)}
    ${A("G4a","नवग्रह विचार (भाग 2/2) — शुक्र, शनि, राहु एवं केतु","भाव एवं अवस्था आधारित")}
    ${e.planets.slice(5,9).map(st).join("")}
    ${A("G4b","कुंडली में निर्मित प्रमुख शास्त्रीय योग एवं राजयोग",`${e.rajYogas.length} योग पहचानित`)}
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
      ${e.rajYogas.slice(0,6).map(s=>`
          <div class="book-card" style="background:${t.pureIvory}; border:1.2px solid ${t.templeGold}; border-radius:8px; padding:7.5px 9.5px; font-size:8px; line-height:1.45;">
            <div style="display:table; width:100%;">
              <div style="display:table-cell; vertical-align:middle; text-align:left; padding-right:4px;"><b style="color:${t.cosmicNavy}; font-size:8.8px;">${a(s.name)}</b></div>
              <div style="display:table-cell; vertical-align:middle; text-align:right; white-space:nowrap; width:1%;"><span class="book-pill" style="${Et} padding-left: 7px; padding-right: 7px; border-radius: 999px; background: ${t.emeraldSoft}; color:${t.emerald}; font-weight:800; font-size:7.4px; white-space: nowrap;"><span style="${Dt}">${a(s.strength)}</span></span></div>
            </div>
            <div style="color:${t.saffronDeep}; font-size:7.4px; margin-top:1px;">${a(s.sanskritRule)}</div>
            <div style="margin-top:3px; color:${t.inkPrimary};">${a(s.description)}</div>
          </div>`).join("")}
    </div>
  `;if(g.push({sectionCode:"G4",sectionTag:"खण्ड G : नवग्रह व राजयोग",html:lt}),m){const s=`
      ${V("खण्ड G5 : 5 शास्त्रीय दोष एवं परिहार (भंग) परीक्षण",r,o)}
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
          ${m.yogasAndDoshas.doshas.allList.map((k,x)=>{const C=k.effectiveStatus==="दोष मुक्त",z=k.pariharRulesHi.length>0?`<div style="margin-top:3px; color:${t.emerald}; font-weight:700;">✓ परिहार नियम: ${a(k.pariharRulesHi.join("; "))}</div>`:"";return`
                <tr style="background:${x%2===0?"#FFFDF8":"#FEF6E4"};">
                  <td style="font-weight:800; color:${t.cosmicNavy}; padding: 8px 7px;">${a(k.nameHi)}${k.subTypeHi?`<div style="font-size:7.4px; color:${t.inkMuted}; margin-top:2px;">${a(k.subTypeHi)}</div>`:""}</td>
                  <td style="font-weight:800; padding: 8px 7px; color:${C?t.emerald:k.effectiveStatus==="आंशिक / परिहार युक्त"?t.saffronDeep:t.crimson};">${a(k.effectiveStatus)}</td>
                  <td style="padding: 8px 7px; line-height:1.48;">${a(k.explanationHi)}${z}</td>
                  <td style="padding: 8px 7px; line-height:1.48;">${a(k.remedyHi)}</td>
                </tr>`}).join("")}
        </tbody>
      </table>
      ${xt("dosha_parihar_gochar")}
    `;g.push({sectionCode:"G5",sectionTag:"खण्ड G : 5 दोष व परिहार",html:s});const b=Ye(e),R=`
      ${V("खण्ड G6 : सम्पूर्ण जीवन साढ़ेसाती एवं लाइव ग्रह गोचर",r,o)}
      ${A("G6a",`सम्पूर्ण जीवन शनि साढ़ेसाती आवर्तन तालिका (${e.panchang.moonRashiName} चंद्र राशि)`,m.liveGochar.sadeSatiLabelHi)}
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
          ${b.slice(0,9).map((k,x)=>`
              <tr style="background:${x%2===0?"#FFFDF8":"#FEF6E4"};">
                <td style="font-weight:800; color:${t.cosmicNavy};">${a(k.cycleLabel)}</td>
                <td style="font-weight:700; color:${t.saffronDeep};">${a(k.phaseLabel)}</td>
                <td>${a(k.saturnRashi)}</td>
                <td style="font-variant-numeric: tabular-nums; font-weight:700; white-space: nowrap;">${a(k.approxPeriod)}</td>
                <td style="font-variant-numeric: tabular-nums; white-space: nowrap;">${a(k.ageSpan)}</td>
                <td>${a(k.guidanceHi)}</td>
              </tr>`).join("")}
        </tbody>
      </table>

      ${A("G6b",`लाइव निरयण ग्रह गोचर (${m.liveGochar.computedAtDateHi})`,"चंद्र एवं लग्न सापेक्ष")}
      <table class="book-table" style="font-size: 7.3px;">
        <thead>
          <tr>
            <th style="width: 13%;">ग्रह</th>
            <th style="width: 19%;">वर्तमान राशि व अंश</th>
            <th style="width: 9%; text-align:center;">चंद्र भाव</th>
            <th style="width: 9%; text-align:center;">लग्न भाव</th>
            <th style="width: 16%;">वेध / स्थिति</th>
            <th style="width: 34%;">गोचर प्रभाव</th>
          </tr>
        </thead>
        <tbody>
          ${m.liveGochar.grahaRows.map((k,x)=>`
              <tr style="background:${x%2===0?"#FFFDF8":"#FEF6E4"};">
                <td style="font-weight:800;">${a(k.nameHi)}${k.id!=="rahu"&&k.id!=="ketu"&&k.isRetrograde?" (व)":""}${k.id!=="moon"&&k.isCombust?" (अ)":""}</td>
                <td style="font-variant-numeric: tabular-nums; white-space: nowrap; font-weight: 700;">${a(k.currentRashiNameHi)} ${a(k.degDMS)}</td>
                <td style="text-align:center; font-weight:800; color:${t.emerald};">${k.houseFromNatalMoon}</td>
                <td style="text-align:center; font-weight:700;">${k.houseFromNatalLagna}</td>
                <td style="font-weight:700; color:${k.hasVedha?t.saffronDeep:k.isFavorableFromMoon?t.emerald:t.inkMuted};">${k.hasVedha?`वेध (${a(k.vedhaByHi.join(", "))})`:k.isFavorableFromMoon?"शुभ गोचर":"सामान्य"}</td>
                <td>${a(k.effectSummaryHi)}</td>
              </tr>`).join("")}
        </tbody>
      </table>
      ${Ct("after_gochar_g",n,c)}
    `;g.push({sectionCode:"G6",sectionTag:"खण्ड G : साढ़ेसाती एवं लाइव गोचर",html:R})}g.push(ze(e,F));for(const s of Ae(e,F))g.push(s);g.push(Pe(e,F));const M=ke(e),it=`
    ${V("खण्ड H1 : शुद्ध सात्विक वैदिक उपाय, रत्न एवं रुद्राक्ष",r,o)}
    ${A("H1a","लग्नेश आधारित प्रामाणिक रत्न, रुद्राक्ष एवं भाग्यवर्धक तत्व",`${e.panchang.lagnaName} लग्न`)}
    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 9px; margin-bottom: 9px;">
      <div class="book-card" style="background:${t.pureIvory}; border:1.4px solid ${t.templeGold}; border-radius:9px; padding:9px 11px; font-size:8.3px; line-height:1.5;">
        <div style="font-weight:800; color:${t.saffronDeep};">जीवन रत्न एवं भाग्य रत्न</div>
        <div style="font-weight:900; color:${t.cosmicNavy}; font-size:9.5px; margin-top:2px;">${a(M.jeevanRatna)}</div>
        <div style="margin-top:3px;"><b>भाग्य रत्न:</b> ${a(M.bhagyaRatna)}</div>
        <div><b>धारण विधि:</b> ${a(M.metalAndFinger)}</div>
      </div>
      <div class="book-card" style="background:${t.pureIvory}; border:1.4px solid ${t.templeGold}; border-radius:9px; padding:9px 11px; font-size:8.3px; line-height:1.5;">
        <div style="font-weight:800; color:${t.saffronDeep};">कल्याणकारी रुद्राक्ष</div>
        <div style="font-weight:900; color:${t.cosmicNavy}; font-size:9.5px; margin-top:2px;">${a(M.primaryRudraksha)}</div>
        <div style="margin-top:2px; font-size:7.9px;"><b>सहायक:</b> ${a(M.secondaryRudraksha)}</div>
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
      ${e.remedies.upayList.slice(0,6).map((s,b)=>`<div style="margin-top:${b===0?0:4.5}px;"><b style="color:${t.saffronDeep};">${b+1}.</b> ${a(Xt(s))}</div>`).join("")}
    </div>

    ${A("H1c","नवग्रह सात्विक मंत्र एवं दान संदर्भ तालिका","आवश्यकतानुसार जप व दान")}
    <table class="book-table" style="font-size: 7.8px; width: 100%; box-sizing: border-box; table-layout: fixed;">
      <thead>
        <tr>
          <th style="width: 11%;">ग्रह</th>
          <th style="width: 44%;">प्रामाणिक वैदिक बीज मंत्र</th>
          <th style="width: 30%;">सात्विक दान वस्तुएँ</th>
          <th style="width: 15%;">शुभ वार</th>
        </tr>
      </thead>
      <tbody>
        ${Qe.map((s,b)=>`
          <tr style="background:${b%2===0?"#FFFDF8":"#FEF6E4"};">
            <td style="font-weight:800; color:${t.cosmicNavy}; padding: 6px 7px; line-height: 1.55;">${a(s.graha)}</td>
            <td class="book-beej-mantra" style="font-weight:700; color:${t.emerald}; padding: 6px 7px; line-height: 1.7; overflow: visible;">${a(Xt(s.mantra))}</td>
            <td style="padding: 6px 7px; line-height: 1.5;">${a(s.daan)}</td>
            <td style="font-weight:700; color:${t.saffronDeep}; padding: 6px 7px; line-height: 1.5;">${a(s.day)}</td>
          </tr>`).join("")}
      </tbody>
    </table>
  `;g.push({sectionCode:"H",sectionTag:"खण्ड H : शुद्ध सात्विक वैदिक उपाय",html:it}),g.push(Me(e,F));const dt=[{title:e.predictions.personality.title,body:e.predictions.personality.summary,extra:e.predictions.personality.keyTraits.join(" • ")},{title:e.predictions.career.title,body:e.predictions.career.summary,extra:e.predictions.career.peakYears},{title:e.predictions.wealth.title,body:e.predictions.wealth.summary,extra:e.predictions.wealth.highlights.join(" • ")},{title:e.predictions.marriage.title,body:e.predictions.marriage.summary,extra:`जीवनसाथी स्वभाव: ${e.predictions.marriage.spouseNature}`},{title:e.predictions.education.title,body:e.predictions.education.summary},{title:e.predictions.health.title,body:e.predictions.health.summary,extra:e.predictions.health.careAreas.join(" • ")}],ct=`
    ${V("खण्ड H2 : सम्पूर्ण जीवन फलादेश एवं प्रमुख समय-सीमा",r,o)}
    ${A("H2a","जीवन के 6 प्रमुख क्षेत्रों का संतुलित वैदिक मार्गदर्शन",`${e.panchang.lagnaName} लग्न • ${e.panchang.moonRashiName} राशि`)}
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 9px;">
      ${dt.map(s=>`
          <div class="book-card" style="background:${t.pureIvory}; border:1.3px solid ${t.templeGold}; border-radius:9px; padding:9px 11px; font-size:8.2px; line-height:1.48;">
            <div style="font-weight:900; color:${t.cosmicNavy}; font-size:9.2px; border-bottom:1px solid ${t.borderMuted}; padding-bottom:3.5px; margin-bottom:4.5px;">
              ✦ ${a(s.title)}
            </div>
            <div style="color:${t.inkPrimary};">${a(s.body)}</div>
            ${s.extra?`<div style="margin-top:4.5px; color:${t.saffronDeep}; font-weight:700; font-size:7.8px;">${a(s.extra)}</div>`:""}
          </div>`).join("")}
    </div>

    ${m&&m.lifeTimeline.length>0?`
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
              ${m.lifeTimeline.filter(s=>s.phaseType!=="ANTARDASHA").slice(0,7).map((s,b)=>`
                  <tr style="background:${s.isCurrent?t.emeraldSoft:b%2===0?"#FFFDF8":"#FEF6E4"};">
                    <td style="font-variant-numeric: tabular-nums; font-weight:800; white-space: nowrap;">${s.startAge} – ${s.endAge} वर्ष</td>
                    <td style="font-weight:800; color:${s.isCurrent?t.emerald:t.cosmicNavy};">${a(s.titleHi)}</td>
                    <td>${a(s.summaryHi)}</td>
                  </tr>`).join("")}
            </tbody>
          </table>`:""}
  `;g.push({sectionCode:"H2",sectionTag:"खण्ड H : जीवन फलादेश व समयरेखा",html:ct});const pt=`
    ${V("खण्ड I : आचार्य आशीर्वचन, प्रामाणिकता मुहर एवं समापन",r,o)}
    ${A("I1","जीवन के प्रबल पक्ष एवं विशेष सावधानियाँ","व्यक्तिगत सारांश")}
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 12px;">
      <div class="book-card" style="background: ${t.emeraldSoft}; border: 1.3px solid #10B981; border-radius: 9px; padding: 10px 12px; font-size: 8.5px; line-height: 1.55;">
        <div style="font-weight: 900; color: #065F46; font-size: 9.5px; margin-bottom: 5px;">✓ प्रमुख शक्तियाँ (Strengths)</div>
        ${(e.remedies.strengths.length>0?e.remedies.strengths:["लग्नेश व त्रिकोण भावों की शुभ स्थिति से जीवन में निरंतर उन्नति।"]).slice(0,5).map(s=>`<div style="margin-top:3px;">• ${a(s)}</div>`).join("")}
      </div>
      <div class="book-card" style="background: ${t.saffronSoft}; border: 1.3px solid ${t.templeGold}; border-radius: 9px; padding: 10px 12px; font-size: 8.5px; line-height: 1.55;">
        <div style="font-weight: 900; color: ${t.saffronDeep}; font-size: 9.5px; margin-bottom: 5px;">✦ विवेकपूर्ण सावधानियाँ (Precautions)</div>
        ${(e.remedies.precautions.length>0?e.remedies.precautions:["महत्वपूर्ण निर्णयों में धैर्य, सात्विक आहार और दशा-गोचर का ध्यान रखें।"]).slice(0,5).map(s=>`<div style="margin-top:3px;">• ${a(s)}</div>`).join("")}
      </div>
    </div>

    ${A("I2","आचार्य पण्डित शशांक शर्मा का आशीर्वचन एवं गणना प्रामाणिकता प्रमाण-पत्र","PANDIT JI ONLINE")}
    <div class="book-card" style="background: ${t.pureIvory}; border: 1.8px solid ${t.templeGold}; border-radius: 11px; padding: 14px 16px; text-align: center;">
      <div style="display: flex; justify-content: center; margin-bottom: 8px;">
        ${vt(56,o,2.5)}
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
          <b>वेबसाइट:</b> ${Bt(t.saffronDeep)}
        </div>
        <div style="text-align: right;">
          <b>${a(G.founderHi)}</b><br/>
          <span style="color:${t.inkMuted};">${a(G.locationHi)}</span>
        </div>
      </div>
    </div>

    ${Ee(n,c)}
  `;return g.push({sectionCode:"I",sectionTag:"खण्ड I : आशीर्वचन एवं समापन",html:pt}),g}const Zt=`
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
    font-family: ${Q};
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
    white-space: nowrap;
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
`;function he(e,n,i){return e.isCover?`
      <div class="vedic-book-a4-page" style="padding: 16px 18px;">
        <div class="vedic-book-a4-body--cover">${e.html}</div>
      </div>
    `:`
    <div class="vedic-book-a4-page">
      <div class="vedic-book-a4-body${e.html.includes("book-banner-slot")||e.html.includes('class="book-banner"')?" vedic-book-a4-body--has-banner":""}">${e.html}</div>
      <div class="vedic-book-a4-footer">
        <span>पण्डित जी ऑनलाइन (PANDIT JI ONLINE) • ${a(G.founderHi)} • ${Bt(t.inkMuted)}</span>
        <span style="color:${t.cosmicNavy}; font-weight:800; white-space: nowrap;">पृष्ठ ${n} / ${i}</span>
      </div>
    </div>
  `}function ge(e,n){if(n==="hi")return;const l=(e.ownerDocument||document).createTreeWalker(e,NodeFilter.SHOW_TEXT),c=[];let u;for(;u=l.nextNode();)u.nodeType===Node.TEXT_NODE&&u.nodeValue&&/[\u0900-\u097F]/.test(u.nodeValue)&&c.push(u);for(const o of c)o.nodeValue&&(o.nodeValue=ve(o.nodeValue,n))}async function Xe(e){const n=e.ownerDocument||document,i=Array.from(e.querySelectorAll("svg"));for(const l of i)try{const c=parseFloat(l.getAttribute("width")||"240")||240,u=parseFloat(l.getAttribute("height")||"240")||240,o=l.cloneNode(!0);o.setAttribute("xmlns","http://www.w3.org/2000/svg"),o.setAttribute("width",String(c)),o.setAttribute("height",String(u));const r=new XMLSerializer().serializeToString(o),p="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(r),d=await new Promise(h=>{const m=new Image,g=window.setTimeout(()=>h(""),1800);m.onload=()=>{window.clearTimeout(g);try{const F=document.createElement("canvas");F.width=Math.max(120,Math.round(c*2.6)),F.height=Math.max(120,Math.round(u*2.6));const H=F.getContext("2d");if(H){H.fillStyle=t.warmIvory,H.fillRect(0,0,F.width,F.height),H.drawImage(m,0,0,F.width,F.height);const N=F.toDataURL("image/png");F.width=0,F.height=0,h(N);return}}catch{}h("")},m.onerror=()=>{window.clearTimeout(g),h("")},m.src=p});if(d){const h=n.createElement("img");h.src=d,h.width=c,h.height=u,h.style.cssText=`width:${c}px;height:${u}px;display:block;margin:0 auto;`,l.parentNode?.replaceChild(h,l)}}catch{}}function Ze(e,n,i,l,c,u){const o=Math.max(0,Math.min(u,l/2,c/2));e.beginPath(),e.moveTo(n+o,i),e.lineTo(n+l-o,i),e.arcTo(n+l,i,n+l,i+o,o),e.arcTo(n+l,i+c,n+l-o,i+c,o),e.lineTo(n+o,i+c),e.arcTo(n,i+c,n,i+c-o,o),e.arcTo(n,i,n+o,i,o),e.closePath()}function ti(e){const n=e.ownerDocument||document,i=Array.from(e.querySelectorAll(".book-banner-badge, .book-pill, .book-banner-pill"));if(!i.length)return;const l=4;for(const c of i)try{const u=(c.textContent||"").replace(/\s+/g," ").trim();if(!u)continue;const o=c.classList.contains("book-banner-badge"),r=n.defaultView?.getComputedStyle(c),p=c.getBoundingClientRect(),d=Math.max(7,parseFloat(r?.fontSize||(o?"8":"8.2"))||8),h=r?.fontWeight||"800",m=r?.color||"#FFFFFF",g=r?.whiteSpace==="nowrap";if(!o&&!g&&p.height>d*3.6)continue;const F=c.getAttribute("data-badge-bg")||(r&&r.backgroundColor&&r.backgroundColor!=="rgba(0, 0, 0, 0)"?r.backgroundColor:o?"#FF6F00":"rgba(15, 23, 42, 0.9)"),H=parseFloat(r?.borderTopWidth||"0")||0,N=r?.borderTopColor||"transparent",D=parseFloat(r?.borderTopLeftRadius||"999")||0,L=Math.max(6,Math.round(parseFloat(r?.paddingLeft||(o?"10":"9"))||9)),f=n.createElement("canvas"),$=f.getContext("2d");if(!$)continue;const v=`${h} ${d}px ${Q}`;$.font=v;const I=$.measureText(u),S=Math.ceil(Math.max(I.width,(I.actualBoundingBoxLeft||0)+(I.actualBoundingBoxRight||0))),w=o?Math.max(19,Math.round(p.height||19)):Math.max(19,Math.round(p.height||d+11)),P=Math.max(40,S+28),U=w+18;f.width=Math.round(P*l),f.height=Math.round(U*l),$.save(),$.scale(l,l),$.font=v,$.fillStyle=m,$.textAlign="center",$.textBaseline="middle",$.fillText(u,P/2,U/2),$.restore();let _=f.width,B=-1,Y=f.height,q=-1;try{const it=$.getImageData(0,0,f.width,f.height).data,dt=f.width,ct=f.height;for(let pt=0;pt<ct;pt++){const s=pt*dt*4;for(let b=0;b<dt;b++)it[s+b*4+3]>20&&(b<_&&(_=b),b>B&&(B=b),pt<Y&&(Y=pt),pt>q&&(q=pt))}}catch{}const K=B>=_&&q>=Y,y=K?(B-_+1)/l:S,T=K?(q-Y+1)/l:d*1.25,E=Math.max(w,Math.ceil(T+7+H*2)),j=Math.ceil(Math.max(y+L*2+H*2,o?0:p.width||0)),Z=n.createElement("canvas");Z.width=Math.round(j*l),Z.height=Math.round(E*l);const O=Z.getContext("2d");if(!O){f.width=0,f.height=0;continue}O.save(),O.scale(l,l);const st=H>0?H/2:0,gt=D>=E/2?E/2:D;if(Ze(O,st,st,j-st*2,E-st*2,Math.max(0,gt-st)),O.fillStyle=F,O.fill(),H>0&&N&&N!=="transparent"&&N!=="rgba(0, 0, 0, 0)"&&(O.lineWidth=H,O.strokeStyle=N,O.stroke()),O.restore(),K){const M=(_+B)/2,it=(Y+q)/2,dt=Math.round((Z.width-1)/2-M),ct=Math.round((Z.height-1)/2-it);O.drawImage(f,dt,ct)}else{O.save(),O.scale(l,l),O.font=v,O.fillStyle=m,O.textAlign="center",O.textBaseline="alphabetic";const M=O.measureText(u),it=M.actualBoundingBoxAscent>0?M.actualBoundingBoxAscent:d*.72,dt=M.actualBoundingBoxDescent>=0?M.actualBoundingBoxDescent:d*.2;O.fillText(u,j/2,E/2+(it-dt)/2),O.restore()}const lt=Z.toDataURL("image/png");if(f.width=0,f.height=0,Z.width=0,Z.height=0,lt){const M=n.createElement("img");M.className=o?"book-banner-badge-img":"book-pill-img",M.src=lt,M.alt=u,M.width=j,M.height=E,o?M.style.cssText=`width:${j}px;height:${E}px;display:block;align-self:flex-start;margin-bottom:5px;flex-shrink:0;`:M.style.cssText=`width:${j}px;height:${E}px;display:inline-block;vertical-align:middle;flex-shrink:0;`,c.parentNode?.replaceChild(M,c)}}catch{}}function ei(){if(typeof document>"u"||!document.head)return;const e="pj-pdf-noto-devanagari-font";if(document.getElementById(e))return;const n=document.createElement("link");n.id=e,n.rel="stylesheet",n.href="https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;500;600;700;800;900&display=swap",document.head.appendChild(n)}async function me(e){ei(),await De(e,3500)}async function ii(e){const n=Array.from(e.querySelectorAll("img"));await Promise.all(n.map(i=>new Promise(l=>{const c=()=>{typeof i.decode=="function"?i.decode().then(()=>l()).catch(()=>l()):l()};if(i.complete&&i.naturalWidth>0){c();return}const u=window.setTimeout(l,900);i.onload=()=>{window.clearTimeout(u),c()},i.onerror=()=>{window.clearTimeout(u),l()}})))}async function ue(e,n={}){const i={cleanMode:!!n.cleanMode,chartStyle:n.chartStyle||"north",language:n.language||"hi"},l=await At(),c=jt(e,l,i),u=`PanditJiOnline_Kundali_Book_${re(e.input.name)}`,o=c.map((g,F)=>`
      <section class="vector-print-page${!g.isCover&&(g.html.includes("book-banner-slot")||g.html.includes('class="book-banner"'))?" vector-print-page--has-banner":""}">
        ${g.html}
        ${g.isCover?"":`<div style="margin-top: 8px; border-top: 1px solid ${t.templeGold}; padding-top: 4px; display: flex; align-items: center; justify-content: space-between; font-size: 7.7px; font-weight: 700; color: ${t.inkMuted};">
                 <span>पण्डित जी ऑनलाइन (PANDIT JI ONLINE) • ${a(G.founderHi)} • ${Bt(t.inkMuted)}</span>
                 <span style="white-space: nowrap;">पृष्ठ ${F+1} / ${c.length}</span>
               </div>`}
      </section>`).join(""),r=`<!DOCTYPE html>
<html lang="${i.language==="hi"?"hi":"en"}">
<head>
  <meta charset="utf-8" />
  <title>${a(u)}</title>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;500;600;700;800;900&display=swap" />
  <style>${Zt}</style>
</head>
<body>
  <div id="vector-book-root">${o}</div>
</body>
</html>`,p=document.getElementById("panditji-vector-print-iframe");p&&p.remove();const d=document.createElement("iframe");d.id="panditji-vector-print-iframe",d.style.cssText="position:fixed;right:0;bottom:0;width:0;height:0;border:0;opacity:0;pointer-events:none;",document.body.appendChild(d);const h=d.contentDocument||d.contentWindow?.document;if(!h)return!1;h.open(),h.write(r),h.close();const m=h.getElementById("vector-book-root");return m&&i.language!=="hi"&&ge(m,i.language),await me(h),setTimeout(()=>{try{d.contentWindow?.focus(),d.contentWindow?.print()}catch{}setTimeout(()=>{document.body.contains(d)&&document.body.removeChild(d)},6e4)},450),!0}function ai(){typeof window>"u"||(At().catch(()=>{}),se().catch(()=>{}))}function Rt(){return new Promise(e=>{typeof window<"u"&&typeof window.requestAnimationFrame=="function"?window.requestAnimationFrame(()=>window.setTimeout(e,16)):window.setTimeout(e,16)})}function oi(e,n){let i=Math.max(1,e),l=4,c=4,u=null;const o=document.createElement("div");o.id="panditji-book-pdf-progress",o.style.cssText=`
    position: fixed;
    top: 16px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 999999;
    width: min(92vw, 400px);
    background: linear-gradient(135deg, ${t.cosmicNavy} 0%, #172540 100%);
    border: 2px solid ${t.templeGold};
    border-radius: 16px;
    padding: 12px 16px;
    box-shadow: 0 18px 44px rgba(0, 0, 0, 0.55);
    font-family: ${Q};
    color: #FFF9ED;
  `,o.innerHTML=`
    <div style="display:flex; align-items:center; gap:10px;">
      ${vt(34,n,1.8)}
      <div style="flex:1; min-width:0;">
        <div style="font-size:12px; font-weight:800; color:#FDE68A;">4K वैदिक कुंडली पुस्तक तैयार हो रही है</div>
        <div id="pj-pdf-prog-text" style="font-size:11px; color:#E2E8F0; margin-top:2px; font-weight:700;">कुंडली डेटा व QR तैयार हो रहे हैं...</div>
      </div>
      <div id="pj-pdf-prog-pct" style="font-size:12px; font-weight:900; color:#FBBF24; font-family:monospace;">4%</div>
    </div>
    <div style="margin-top:9px; width:100%; height:7px; background:rgba(255,255,255,0.14); border-radius:999px; overflow:hidden; border:1px solid rgba(212,175,55,0.45);">
      <div id="pj-pdf-prog-fill" style="width:4%; height:100%; background:linear-gradient(90deg, ${t.saffron}, ${t.templeGold}, #FDE047); border-radius:999px; transition:width 180ms ease-out;"></div>
    </div>
  `;const r=(g,F)=>{const H=Math.max(l,Math.min(100,Math.round(g)));l=H;const N=o.querySelector("#pj-pdf-prog-text"),D=o.querySelector("#pj-pdf-prog-pct"),L=o.querySelector("#pj-pdf-prog-fill");F&&N&&(N.textContent=F),D&&(D.textContent=`${H}%`),L&&(L.style.width=`${H}%`)},p=()=>{u!==null&&(window.clearInterval(u),u=null)},d=()=>{u===null&&(u=window.setInterval(()=>{l<c&&r(l+1)},280))},h=(g,F,H)=>{r(g,F),c=Math.max(l,Math.min(99,Math.round(H??g))),c>l&&d()};return{root:o,setStage:h,updatePage:(g,F,H)=>{F>0&&(i=F);const N=28+(g-1)/i*68,D=28+g/i*68;if(H==="start"){const L=Math.max(l,Math.round(N+.35*(D-N))),f=Math.min(96,Math.max(L,Math.floor(D)));h(L,`पृष्ठ ${g} / ${i} तैयार हो रहा है...`,f)}else{const L=Math.min(96,Math.round(D));h(L,`पृष्ठ ${g} / ${i} तैयार`,L)}},stop:p}}function ni(e,n,i,l,c,u,o){const r=document.getElementById("panditji-book-pdf-ready-modal");r&&r.remove();const p=(e.size/(1024*1024)).toFixed(2),d=document.createElement("div");d.id="panditji-book-pdf-ready-modal",d.style.cssText="position:fixed;inset:0;z-index:2147483647;background:rgba(15,23,42,0.82);backdrop-filter:blur(5px);display:flex;align-items:center;justify-content:center;padding:16px;";const h=document.createElement("div");h.style.cssText=`width:100%;max-width:440px;background:${t.warmIvory};border:2.5px solid ${t.templeGold};border-radius:18px;padding:20px;box-shadow:0 24px 60px rgba(0,0,0,0.55);color:${t.cosmicNavy};font-family:${Q};text-align:center;`,h.innerHTML=`
    <div style="display:flex; justify-content:center; margin-bottom:8px;">
      ${vt(52,o,2.5)}
    </div>
    <div style="font-size:16px;font-weight:900;color:${t.cosmicNavy};">4K बृहत् कुंडली पुस्तक PDF तैयार है</div>
    <div style="font-size:11.5px;color:${t.saffronDeep};font-weight:700;margin-top:4px;">
      ${a(l.input.name)} • ${u} पृष्ठ • ${p} MB • ${c.cleanMode?"Clean PDF मोड":"ब्रांडेड वैदिक पुस्तक"}
    </div>
    <div style="font-size:10.5px;color:${t.inkMuted};margin-top:6px;line-height:1.5;">
      यदि ऑटो-डाउनलोड शुरू न हुआ हो, तो नीचे दिए गए बटन पर टैप करके तुरंत सेव या WhatsApp पर शेयर करें।
    </div>
    <div style="display:flex;flex-direction:column;gap:8px;margin-top:14px;">
      <a id="pj-book-dl-link" href="${n}" download="${a(i)}" style="display:block;width:100%;padding:11px 14px;border-radius:12px;background:linear-gradient(90deg,${t.saffron},${t.templeGold});color:#FFFFFF;font-weight:900;font-size:13px;text-decoration:none;box-shadow:0 6px 16px rgba(255,111,0,0.3);">
        ⬇ अभी कुंडली पुस्तक PDF डाउनलोड करें (${p} MB)
      </a>
      <button id="pj-book-share-btn" type="button" style="width:100%;padding:10px 14px;border-radius:12px;background:#047857;color:#FFFFFF;font-weight:800;font-size:12.5px;border:none;cursor:pointer;">
        📲 WhatsApp / मोबाइल शेयर करें
      </button>
      <button id="pj-book-vector-btn" type="button" style="width:100%;padding:9px 14px;border-radius:12px;background:${t.cosmicNavy};color:#FDE68A;font-weight:800;font-size:12px;border:1px solid ${t.templeGold};cursor:pointer;">
        🖨 Searchable Vector Print / Save-as-PDF
      </button>
      <button id="pj-book-close-btn" type="button" style="width:100%;padding:8px;border-radius:10px;background:transparent;color:${t.inkMuted};font-weight:700;font-size:11.5px;border:1px solid ${t.borderMuted};cursor:pointer;">
        बंद करें
      </button>
    </div>
  `,d.appendChild(h),document.body.appendChild(d);const m=()=>{d.remove(),setTimeout(()=>URL.revokeObjectURL(n),6e4)};h.querySelector("#pj-book-close-btn")?.addEventListener("click",m),d.addEventListener("click",g=>{g.target===d&&m()}),h.querySelector("#pj-book-share-btn")?.addEventListener("click",async()=>{try{const g=new File([e],i,{type:"application/pdf"});if(navigator.canShare&&navigator.canShare({files:[g]})){await navigator.share({files:[g],title:`${l.input.name} — Janam Kundali Book`,text:`पण्डित जी ऑनलाइन बृहत् जन्म कुंडली पुस्तक (${G.websiteDisplay})`}),m();return}}catch{}h.querySelector("#pj-book-dl-link")?.click()}),h.querySelector("#pj-book-vector-btn")?.addEventListener("click",()=>{m(),ue(l,c)})}async function si(e,n={}){const i={cleanMode:!!n.cleanMode,chartStyle:n.chartStyle||"north",language:n.language||"hi"},c=oi(30,le());document.body.appendChild(c.root),c.setStage(8,"PDF इंजन व QR कोड तैयार हो रहे हैं...",18),await Rt();let u,o=null,r=null;try{const[m,g]=await Promise.all([At(),se()]);u=m,o=g.jsPDF,r=g.html2canvas}catch(m){throw c.stop(),document.body.contains(c.root)&&document.body.removeChild(c.root),m}if(typeof o!="function"||typeof r!="function")throw c.stop(),document.body.contains(c.root)&&document.body.removeChild(c.root),new Error("PDF libraries failed to initialize");c.setStage(20,"वैदिक फ़ॉन्ट व लेआउट तैयार हो रहा है...",23);const p=794,d=1123,h=document.createElement("iframe");h.id="panditji-book-pdf-capture-iframe",h.style.cssText=`position:fixed;left:-9999px;top:0;width:${p}px;height:${d}px;border:0;margin:0;padding:0;z-index:-1;pointer-events:none;background:${t.warmIvory};`,document.body.appendChild(h);try{const m=h.contentDocument||h.contentWindow?.document;if(!m)throw new Error("Could not create capture iframe document");m.open(),m.write(`<!DOCTYPE html>
<html lang="hi">
<head>
  <meta charset="utf-8" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;500;600;700;800;900&display=swap" />
  <style>${Zt}</style>
</head>
<body style="margin:0;padding:0;background:${t.warmIvory};">
  <div id="book-pdf-host" style="width:${p}px;height:${d}px;overflow:hidden;"></div>
</body>
</html>`),m.close();const g=m.getElementById("book-pdf-host");if(!g)throw new Error("Book PDF host missing");await me(m),c.setStage(24,"30 पृष्ठ व उच्च-गुणवत्ता कुंडली चार्ट बन रहे हैं...",27),await Rt();const F=jt(e,u,i,!0);c.setStage(28,`पृष्ठ 1 / ${F.length} तैयार हो रहा है...`,30),await Rt();const H=new o({orientation:"portrait",unit:"mm",format:"a4",compress:!0}),D=typeof window<"u"&&(window.innerWidth<768||typeof navigator<"u"&&typeof navigator.hardwareConcurrency=="number"&&navigator.hardwareConcurrency<=4)?1.75:2;for(let w=0;w<F.length;w++){c.updatePage(w+1,F.length,"start"),g.innerHTML=he(F[w],w+1,F.length);const P=g.querySelector(".vedic-book-a4-page");if(!P)continue;i.language!=="hi"&&ge(P,i.language),await Xe(P),ti(P),await ii(P),await new Promise(Y=>setTimeout(Y,w===0?20:8));const U=document.fonts;U?.ready&&await U.ready;const _=await r(P,{scale:D,useCORS:!0,allowTaint:!1,imageTimeout:2500,backgroundColor:t.warmIvory,width:p,height:d,windowWidth:p,windowHeight:d,logging:!1,onclone:Y=>{Fe(Y,".vedic-book-a4-page")}}),B=_.toDataURL("image/jpeg",.85);w>0&&H.addPage(),H.addImage(B,"JPEG",0,0,210,297,void 0,"FAST"),_.width=0,_.height=0,g.innerHTML="",c.updatePage(w+1,F.length,"done")}c.setStage(98,"कुंडली पुस्तक PDF फ़ाइल सेव हो रही है...",99),await Rt();const L=re(e.input.name),f=i.cleanMode?"_Clean":"",$=`PanditJiOnline_Kundali_Book_${L}${f}.pdf`,v=H.output("arraybuffer"),I=new Blob([v],{type:"application/pdf"}),S=URL.createObjectURL(I);c.setStage(100,"कुंडली पुस्तक PDF तैयार है!");try{const w=document.createElement("a");w.href=S,w.download=$,w.style.display="none",document.body.appendChild(w),w.click(),setTimeout(()=>{document.body.contains(w)&&document.body.removeChild(w)},2e3)}catch{}return ni(I,S,$,e,i,F.length,u.appLogoDataUrl),!0}finally{c.stop(),document.body.contains(h)&&document.body.removeChild(h),document.body.contains(c.root)&&document.body.removeChild(c.root)}}async function ri(e,n={}){const i={cleanMode:!!n.cleanMode,chartStyle:n.chartStyle||"north",language:n.language||"hi"},l=await At(),c=jt(e,l,i),u=c.map((o,r)=>he(o,r+1,c.length));return{pages:c,sharedCss:Zt,qrs:l,wrappedDiscretePages:u}}export{jt as buildAllKundaliBookPages,ri as buildKundaliBookPayload,si as downloadKundaliBookPDF,ai as prewarmKundaliBookPdfAssets,ue as printKundaliBookVectorPDF};
