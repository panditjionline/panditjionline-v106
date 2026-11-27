const Ot=(t,i=Ot,e=i.f||(i.f=["assets/jspdf.es.min-EKeAfboT.js","assets/vendor-react-GnNhYla_.js"]))=>t.map(n=>e[n]);import{_ as Rt}from"./vendor-react-GnNhYla_.js";import{a as qt,u as V,s as K,v as X,q as Ze}from"./panchang-core-pMK8y8QF.js";import{B as J,i as I,t as ot}from"./index-Cxa15uKJ.js";import{P as ti,s as ei}from"./phalitDeduplicator-C_PknbvQ.js";import{Q as Wt}from"./browser-BD-G2ddJ.js";const k={saffron:"#FF6F00",saffronDeep:"#C2410C",saffronSoft:"#FFF3E0",templeGold:"#D4AF37",templeGoldDark:"#9A6B11",templeGoldSoft:"#FDF5DF",cosmicNavy:"#0F172A",cosmicNavySoft:"#1E293B",warmIvory:"#FFF9ED",pureIvory:"#FFFDF8",inkPrimary:"#1E293B",inkMuted:"#475569",emerald:"#047857",emeraldSoft:"#ECFDF5",crimson:"#B91C1C",crimsonSoft:"#FEF2F2",borderGold:"#D4AF37",borderMuted:"#E7D5AE"},v={website:"https://www.panditjionline.online",websiteDisplay:"www.panditjionline.online",youtube:J.youtubeUrl,youtubeHandle:J.youtubeHandle,whatsapp:`https://wa.me/${J.whatsappNumber}?text=${encodeURIComponent("नमस्ते आचार्य पण्डित शशांक शर्मा जी, मैंने पण्डित जी ऑनलाइन की बृहत् जन्म कुंडली पुस्तक PDF डाउनलोड की है। कृपया मार्गदर्शन प्रदान करें।")}`,phoneDisplay:J.displayPhone,founderHi:"आचार्य पण्डित शशांक शर्मा",locationHi:J.location,email:J.email},$t="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="120">
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
    </svg>`);let kt=null;async function ii(){return I.startsWith("data:image/")?I:typeof window>"u"||typeof fetch!="function"?$t:(kt||(kt=(async()=>{const t=["/pandit-shashank-sharma.jpg","/pandit-photo.jpg","/pwa-192x192.png","/apple-touch-icon.png"];for(const i of t)try{const e=new AbortController,n=window.setTimeout(()=>e.abort(),1600),a=await fetch(i,{signal:e.signal,cache:"force-cache"});if(window.clearTimeout(n),!a.ok)continue;const r=await a.blob(),s=await new Promise(l=>{const p=new FileReader;p.onloadend=()=>l(typeof p.result=="string"?p.result:""),p.onerror=()=>l(""),p.readAsDataURL(r)});if(s.startsWith("data:image/"))return s}catch{}return $t})()),kt)}function Gt(t){return t&&(t.startsWith("data:image/")||t.startsWith("/"))?t:I.length>0&&(I.startsWith("data:image/")||typeof window<"u")?I:$t}function Ft(t,i,e=2){const n=Gt(i),a=n.startsWith("data:")?"":` onerror="this.onerror=null;this.src='/pandit-photo.jpg';"`;return`
    <div style="width: ${t}px; height: ${t}px; border-radius: 50%; padding: ${e}px; background: linear-gradient(135deg, #FDE047 0%, ${k.templeGold} 52%, ${k.saffron} 100%); box-shadow: 0 2px 10px rgba(0, 0, 0, 0.35); flex-shrink: 0; align-self: center; display: flex; align-items: center; justify-content: center; overflow: hidden; box-sizing: border-box;">
      <img src="${n}"${a} alt="पण्डित जी ऑनलाइन (Pandit Ji Online)" width="${t-e*2}" height="${t-e*2}" style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover; object-position: center; display: block; background: ${k.cosmicNavy};" />
    </div>
  `}function Q(t,i=68,e="#0F172A",n="#FFFFFF"){const a=(t||v.website).trim()||v.website,r=Wt.create(a,{errorCorrectionLevel:"M"}),s=r.modules.size,l=2,p=s+l*2,c=[];for(let g=0;g<s;g++)for(let b=0;b<s;b++)r.modules.get(g,b)&&c.push(`M${b+l} ${g+l}h1v1h-1z`);return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${p} ${p}" width="${i}" height="${i}" shape-rendering="crispEdges" role="img" aria-label="QR Code for ${H(a)}" style="width:${i}px;height:${i}px;display:block;margin:0 auto;"><rect width="${p}" height="${p}" fill="${n}"/><path d="${c.join("")}" fill="${e}"/></svg>`}let St=null;async function Dt(t,i=k.cosmicNavy,e="#FFFFFF"){try{return await Wt.toDataURL(t,{errorCorrectionLevel:"M",margin:1,width:220,color:{dark:i,light:e}})}catch{const n=Q(t,220,i,e);return`data:image/svg+xml;charset=utf-8,${encodeURIComponent(n)}`}}async function ai(){return St||(St=(async()=>{const[t,i,e,n]=await Promise.all([Dt(v.website,"#0F172A","#FFFDF8"),Dt(v.youtube,"#0F172A","#FFFDF8"),Dt(v.whatsapp,"#0F172A","#FFFDF8"),ii()]);return{websiteQrDataUrl:t,youtubeQrDataUrl:i,whatsappQrDataUrl:e,appLogoDataUrl:n}})()),St}const oi={after_charts_b:{slot:"after_charts_b",badgeHi:"PANDIT JI ONLINE • निःशुल्क वैदिक सेवाएँ",titleHi:"दैनिक दृक् गणित पंचांग, चौघड़िया एवं सटीक राशिफल — प्रतिदिन प्रातः",bodyHi:"तिथि, नक्षत्र, योग, करण, अभिजीत मुहूर्त, राहुकाल और चंद्र-आधारित दैनिक, साप्ताहिक व मासिक राशिफल अपने मोबाइल पर बिल्कुल निःशुल्क देखें।",highlightsHi:["दृक् गणित लाहिड़ी पंचांग","दैनिक/मासिक राशिफल","शुभ मुहूर्त व व्रत-त्योहार"],ctaHi:"QR स्कैन करें या विज़िट करें:",urlLabel:v.websiteDisplay,qrUrl:v.website,qrKey:"websiteQrDataUrl",accentColor:k.saffron},after_vargas_c:{slot:"after_vargas_c",badgeHi:"PANDIT JI ONLINE • पारिवारिक ज्योतिष मंच",titleHi:"निःशुल्क सम्पूर्ण जन्म कुंडली पुस्तक एवं 36 गुण विवाह मिलान",bodyHi:"परिवार के किसी भी सदस्य की वैदिक जन्म कुंडली, 16 षोडशवर्ग, मांगलिक परीक्षण और अष्टकूट 36 गुण विवाह मिलान कुछ ही सेकंड में तैयार करें।",highlightsHi:["निःशुल्क जन्म कुंडली पुस्तक","36 गुण अष्टकूट मिलान","भारत व विदेश टाइमज़ोन समर्थन"],ctaHi:"ऑनलाइन सेवा खोलें:",urlLabel:v.websiteDisplay,qrUrl:v.website,qrKey:"websiteQrDataUrl",accentColor:k.templeGoldDark},after_ashtakavarga_e:{slot:"after_ashtakavarga_e",badgeHi:"PANDIT JI ONLINE • डिजिटल सनातन मंदिर",titleHi:"डिजिटल मंदिर, आरती-चालीसा संग्रह एवं 108 रुद्राक्ष मंत्र जप",bodyHi:"अपने इष्टदेव की प्रतिदिन आरती, प्रामाणिक चालीसा, स्तोत्र पाठ और 108 मनकों वाला डिजिटल मंत्र जप काउंटर — घर या यात्रा में कहीं भी भक्ति का साथ।",highlightsHi:["डिजिटल आरती व दर्शन","108 रुद्राक्ष जप काउंटर","संपूर्ण चालीसा एवं स्तोत्र"],ctaHi:"डिजिटल मंदिर में प्रवेश करें:",urlLabel:v.websiteDisplay,qrUrl:v.website,qrKey:"websiteQrDataUrl",accentColor:k.saffron},after_gochar_g:{slot:"after_gochar_g",badgeHi:"PANDIT JI ONLINE OFFICIAL • वैदिक मंच एवं YOUTUBE",titleHi:"आचार्य पण्डित शशांक शर्मा से जुड़ें — लाइव पंचांग, गोचर एवं धर्म चैनल",bodyHi:"ग्रह गोचर विश्लेषण, प्रमुख व्रत-त्योहारों के सटीक मुहूर्त, वैदिक पूजन विधि और सरल ज्योतिष ज्ञान हेतु हमारी आधिकारिक वेबसाइट एवं चैनल से जुड़ें।",highlightsHi:["दैनिक पंचांग व व्रत विधि","ग्रह गोचर मार्गदर्शन","सरल सात्विक वैदिक उपाय"],ctaHi:"ऑनलाइन मंच स्कैन करें:",urlLabel:`${v.websiteDisplay} • YouTube: ${v.youtubeHandle}`,qrUrl:v.website,qrKey:"websiteQrDataUrl",accentColor:k.crimson},back_cover_i:{slot:"back_cover_i",badgeHi:"प्रामाणिक वैदिक परामर्श • PANDIT JI ONLINE",titleHi:"व्यक्तिगत कुंडली विश्लेषण, विवाह मिलान एवं वैदिक अनुष्ठान परामर्श",bodyHi:"यदि आप विवाह, संतान, व्यवसाय, सरकारी नौकरी, ग्रह-शांति पूजा या रत्न चयन पर प्रत्यक्ष ज्योतिषीय मार्गदर्शन चाहते हैं, तो आचार्य पण्डित शशांक शर्मा जी से सीधे संपर्क करें।",highlightsHi:[`सम्पर्क / WhatsApp: ${v.phoneDisplay}`,v.locationHi,v.websiteDisplay],ctaHi:"वेबसाइट / WhatsApp स्कैन करें:",urlLabel:v.websiteDisplay,qrUrl:v.website,qrKey:"websiteQrDataUrl",accentColor:k.saffron}};function H(t){return String(t??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Vt(t,i,e){if(e&&t!=="back_cover_i")return"";const n=oi[t],a=Q(n.qrUrl||v.website,68,"#0F172A","#FFFFFF"),r=Q(v.website,62,"#0F172A","#FFFFFF"),s=Ft(42,i.appLogoDataUrl,2);return e&&t==="back_cover_i"?`
      <div class="book-banner-slot">
        <div class="book-banner" style="margin: 0; width: 100%; background: ${k.pureIvory}; border: 1.8px solid ${k.templeGold}; border-radius: 11px; padding: 12px 15px; display: flex; align-items: center; justify-content: space-between; gap: 14px;">
          <div style="display: flex; align-items: center; gap: 12px; flex: 1; min-width: 0;">
            ${s}
            <div style="display: flex; flex-direction: column; justify-content: center; flex: 1; min-width: 0;">
              <div style="font-size: 8.8px; font-weight: 800; letter-spacing: 0; color: ${k.saffronDeep}; line-height: 1.3;">
                पण्डित जी ऑनलाइन (PANDIT JI ONLINE) • सत्यापित वैदिक जन्म पत्रिका
              </div>
              <div style="font-size: 11.5px; font-weight: 800; color: ${k.cosmicNavy}; margin-top: 2px; line-height: 1.3;">
                ${H(v.founderHi)} • ${H(v.locationHi)}
              </div>
              <div style="font-size: 9.2px; color: ${k.inkMuted}; margin-top: 3px; line-height: 1.45;">
                सम्पर्क / WhatsApp: <b style="color:${k.cosmicNavy};">${H(v.phoneDisplay)}</b> &nbsp;|&nbsp; वेबसाइट: <b style="color:${k.saffronDeep};">${H(v.websiteDisplay)}</b>
              </div>
            </div>
          </div>
          <div style="flex-shrink: 0; align-self: center; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; background: #ffffff; border: 1.2px solid ${k.templeGold}; border-radius: 8px; padding: 4px; width: 78px;">
            ${r}
            <div style="font-size: 6.8px; font-weight: 800; color: ${k.cosmicNavy}; margin-top: 3px; line-height: 1.2;">स्कैन करें</div>
          </div>
        </div>
      </div>
    `:`
    <div class="book-banner-slot">
      <div class="book-banner" style="margin: 0; width: 100%; background: linear-gradient(135deg, ${k.cosmicNavy} 0%, #17243D 72%, #241910 100%); border: 2px solid ${k.templeGold}; border-radius: 12px; padding: 12px 15px; color: ${k.warmIvory}; display: flex; align-items: center; justify-content: space-between; gap: 14px; box-shadow: 0 3px 12px rgba(15, 23, 42, 0.16);">
        <div style="display: flex; align-items: center; gap: 12px; flex: 1; min-width: 0;">
          ${s}
          <div style="display: flex; flex-direction: column; justify-content: center; flex: 1; min-width: 0;">
            <div class="book-banner-badge" data-badge-bg="${n.accentColor}" style="display: inline-flex; align-items: center; justify-content: center; align-self: flex-start; min-height: 18px; padding: 2px 10px; line-height: 1.15; background: ${n.accentColor}; color: #FFFFFF; font-size: 8px; font-weight: 800; letter-spacing: 0; border-radius: 999px; margin-bottom: 5px; box-sizing: border-box; text-align: center;"><span class="book-banner-badge-text" style="display: inline-block; line-height: 1.15;">${H(n.badgeHi)}</span></div>
            <div style="font-size: 11.8px; font-weight: 800; color: #FDE68A; line-height: 1.35;">
              ${H(n.titleHi)}
            </div>
            <div style="font-size: 8.8px; color: #F1F5F9; line-height: 1.48; margin-top: 3px;">
              ${H(n.bodyHi)}
            </div>
            <div class="book-banner-pills" style="display: flex; flex-wrap: wrap; align-items: center; gap: 6px; margin-top: 6px;">
              ${n.highlightsHi.map(l=>`<span class="book-banner-pill" style="display: inline-flex; align-items: center; justify-content: center; font-size: 7.9px; font-weight: 700; line-height: 1.2; color: #FFF9ED; background: rgba(212, 175, 55, 0.18); border: 1px solid rgba(212, 175, 55, 0.55); padding: 4px 8px; border-radius: 4px; box-sizing: border-box; vertical-align: middle;">✦ ${H(l)}</span>`).join("")}
            </div>
            <div style="font-size: 8.2px; color: #FCD34D; margin-top: 5px; font-weight: 700; line-height: 1.3;">
              ${H(n.ctaHi)} <span style="color: #FFFFFF; font-variant-numeric: tabular-nums;">${H(n.urlLabel)}</span>
            </div>
          </div>
        </div>

        <div style="flex-shrink: 0; align-self: center; display: flex; flex-direction: column; align-items: center; justify-content: center; background: #FFFFFF; border: 2px solid ${k.templeGold}; border-radius: 8px; padding: 5px; text-align: center; width: 84px;">
          ${a}
          <div style="font-size: 7px; font-weight: 800; color: ${k.cosmicNavy}; margin-top: 3px; line-height: 1.2;">स्कैन करें</div>
        </div>
      </div>
    </div>
  `}function ri(t,i){if(i)return Vt("back_cover_i",t,!0);const e=Ft(54,t.appLogoDataUrl,2.5),n=Q(v.website,64,"#0F172A","#FFFFFF"),a=Q(v.whatsapp,64,"#064E3B","#FFFFFF");return`
    <div class="book-banner-slot">
      <div class="book-banner" style="margin: 0; width: 100%; background: linear-gradient(135deg, ${k.cosmicNavy} 0%, #16223A 65%, #2B170A 100%); border: 2px solid ${k.templeGold}; border-radius: 13px; padding: 15px 17px; color: ${k.warmIvory}; display: flex; align-items: center; justify-content: space-between; gap: 14px;">
        <div style="display: flex; align-items: center; gap: 13px; flex: 1; min-width: 0;">
          ${e}
          <div style="display: flex; flex-direction: column; justify-content: center; flex: 1; min-width: 0;">
            <div style="font-size: 8.6px; font-weight: 800; color: ${k.templeGold}; letter-spacing: 0; line-height: 1.3;">
              ॥ सही समय, सटीक ज्ञान — पण्डित जी ऑनलाइन की पहचान ॥
            </div>
            <div style="font-size: 13.5px; font-weight: 800; color: #FFFFFF; margin-top: 3px; line-height: 1.3;">
              ${H(v.founderHi)} • वैदिक ज्योतिष एवं पूजन परामर्श
            </div>
            <div style="font-size: 9px; color: #E2E8F0; line-height: 1.5; margin-top: 4px;">
              विवाह, करियर, संतान, व्यवसाय, ग्रह-शांति पूजा, रत्न-रुद्राक्ष चयन अथवा जन्म कुंडली के किसी भी विशेष प्रश्न पर प्रामाणिक शास्त्रीय परामर्श के लिए संपर्क करें।
            </div>
            <div style="margin-top: 7px; font-size: 8.8px; color: #FDE68A; line-height: 1.55;">
              <div><b>वेबसाइट:</b> ${H(v.websiteDisplay)} &nbsp;|&nbsp; <b>YouTube:</b> ${H(v.youtubeHandle)}</div>
              <div><b>फ़ोन / WhatsApp:</b> ${H(v.phoneDisplay)} &nbsp;|&nbsp; <b>स्थान:</b> ${H(v.locationHi)}</div>
            </div>
          </div>
        </div>

        <div style="display: flex; align-items: center; justify-content: center; gap: 8px; flex-shrink: 0; align-self: center;">
          <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; background: #FFFFFF; border: 1.8px solid ${k.templeGold}; border-radius: 8px; padding: 4px; text-align: center; width: 78px;">
            ${n}
            <div style="font-size: 7px; font-weight: 800; color: ${k.cosmicNavy}; margin-top: 3px; line-height: 1.2;">वेबसाइट खोलें</div>
          </div>
          <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; background: #FFFFFF; border: 1.8px solid #10B981; border-radius: 8px; padding: 4px; text-align: center; width: 78px;">
            ${a}
            <div style="font-size: 7px; font-weight: 800; color: #047857; margin-top: 3px; line-height: 1.2;">WhatsApp परामर्श</div>
          </div>
        </div>
      </div>
    </div>
  `}function Kt(t){const i=String(t||"").trim();if(!i)return"—";const e=i.match(/^(\d{4})[-/](\d{1,2})[-/](\d{1,2})$/);if(e)return`${e[3].padStart(2,"0")}-${e[2].padStart(2,"0")}-${e[1]}`;const n=i.match(/^(\d{1,2})[-/](\d{1,2})[-/](\d{4})$/);return n?`${n[1].padStart(2,"0")}-${n[2].padStart(2,"0")}-${n[3]}`:i}function ni(t){return String(t??"").replace(/\$([^$]+)\$/g,"$1").replace(/\^?\{\\circ\}|\\circ|\\degree|\\deg\b|º/g,"°").replace(/\^?\{\\prime\\prime\}|\\prime\\prime|″|”|“/g,'"').replace(/\^?\{\\prime\}|\\prime|′|’|‘/g,"'").replace(/(\d{1,3})\s*°\s*(\d{1,2})\s*'\s*(\d{1,2})\s*"/g,`$1° $2' $3"`).replace(/(\d{1,3})\s*°\s*(\d{1,2})\s*'/g,"$1° $2'").trim()}function U(t){return String(t??"").normalize("NFC").replace(/परिहार\s+परिहार/gu,"परिहार")}function Xt(t,i){const e=String(t||"").split(" ")[0].normalize("NFC").trim(),n=ni(i);return`<span class="pj-h2c-no-lift" style="font-family: 'Noto Sans Devanagari', 'Nirmala UI', 'Mangal', sans-serif; font-weight: 700; direction: ltr; unicode-bidi: isolate;">${o(e)}</span>&nbsp;<span class="pj-h2c-no-lift" style="font-family: 'Segoe UI', 'Liberation Sans', 'Helvetica Neue', Arial, sans-serif; font-variant-numeric: tabular-nums; font-weight: 700; direction: ltr; unicode-bidi: isolate; white-space: nowrap;">(${o(n)})</span>`}function Jt(t,i){const e=String(t||"").split(" ")[0].normalize("NFC").trim(),n=String(i||"").normalize("NFC").trim(),a=n.match(/^([^(]+?)\s*(\([^)]+\))$/),r=a?`<span style="display:inline-block; font-weight:700; letter-spacing:0; margin-left:3px;">${o(a[1].trim())}</span><span style="display:inline-block; font-weight:700; letter-spacing:0; margin-left:2.5px;">${o(a[2].trim())}</span>`:`<span style="display:inline-block; font-weight:700; letter-spacing:0; margin-left:3px;">${o(n)}</span>`;return`<div class="pj-h2c-no-lift" style="font-weight:800; font-size:8.2px; line-height:1.35; letter-spacing:0; direction:ltr; unicode-bidi:isolate;">${o(e)}</div><div class="pj-h2c-no-lift" style="font-size:7.65px; line-height:1.38; letter-spacing:0; margin-top:1.5px; white-space:nowrap; direction:ltr; unicode-bidi:isolate;"><span style="display:inline-block; margin-right:1.5px;">(</span><span style="display:inline-block; letter-spacing:0;">स्वामी:</span>${r}<span style="display:inline-block; margin-left:1.5px;">)</span></div>`}const Qt={सूर्य:{friends:["चन्द्र","चंद्र","मंगल","गुरु"],neutral:["बुध"],enemies:["शुक्र","शनि","राहु","केतु"]},चन्द्र:{friends:["सूर्य","बुध"],neutral:["मंगल","गुरु","शुक्र","शनि"],enemies:["राहु","केतु"]},चंद्र:{friends:["सूर्य","बुध"],neutral:["मंगल","गुरु","शुक्र","शनि"],enemies:["राहु","केतु"]},मंगल:{friends:["सूर्य","चन्द्र","चंद्र","गुरु"],neutral:["शुक्र","शनि"],enemies:["बुध","राहु","केतु"]},बुध:{friends:["सूर्य","शुक्र","राहु"],neutral:["मंगल","गुरु","शनि"],enemies:["चन्द्र","चंद्र","केतु"]},गुरु:{friends:["सूर्य","चन्द्र","चंद्र","मंगल"],neutral:["शनि","केतु"],enemies:["बुध","शुक्र","राहु"]},शुक्र:{friends:["बुध","शनि","राहु"],neutral:["मंगल","गुरु"],enemies:["सूर्य","चन्द्र","चंद्र","केतु"]},शनि:{friends:["बुध","शुक्र","राहु"],neutral:["गुरु"],enemies:["सूर्य","चन्द्र","चंद्र","मंगल","केतु"]},राहु:{friends:["बुध","शुक्र","शनि"],neutral:["गुरु"],enemies:["सूर्य","चन्द्र","चंद्र","मंगल"]},केतु:{friends:["मंगल","गुरु"],neutral:["बुध","शुक्र","शनि"],enemies:["सूर्य","चन्द्र","चंद्र"]}},Zt={1:"मंगल",2:"शुक्र",3:"बुध",4:"चन्द्र",5:"सूर्य",6:"बुध",7:"शुक्र",8:"मंगल",9:"गुरु",10:"शनि",11:"शनि",12:"गुरु"},di={1:"mars",2:"venus",3:"mercury",4:"moon",5:"sun",6:"mercury",7:"venus",8:"mars",9:"jupiter",10:"saturn",11:"saturn",12:"jupiter"},si=["केतु","शुक्र","सूर्य","चन्द्र","मंगल","राहु","गुरु","शनि","बुध"];function Z(t){const i=String(t||"गुरु").split(" ")[0].trim();return i==="चंद्र"?"चन्द्र":i}function rt(t,i){const e=Z(t),n=Z(i);if(e===n)return{relation:"स्वग्रह / एक ही स्वामी (अति उत्तम मित्र)",color:"#047857",harmonyNote:"दोनों राशियों/ग्रहों का स्वामी एक ही होने से पूर्ण वैचारिक एवं आत्मिक एकरूपता।",score:2};const a=Qt[e],r=Qt[n],s=a?.friends.includes(n)?1:a?.enemies.includes(n)?-1:0,l=r?.friends.includes(e)?1:r?.enemies.includes(e)?-1:0,p=s+l;return p>=2?{relation:"नैसर्गिक मित्र (Natural Friends — परस्पर मित्र)",color:"#047857",harmonyNote:"परस्पर घनिष्ठ नैसर्गिक मित्रता — दांपत्य में सहज प्रेम, सम्मान व सहयोग।",score:p}:p===1?{relation:"मित्र + सम (Mitra — शुभ समन्वय)",color:"#047857",harmonyNote:"एक पक्ष मित्र व दूसरा सम होने से गृहस्थ जीवन में उत्तम सामंजस्य।",score:p}:p===0?{relation:"सम भाव (Neutral — संतुलित संबंध)",color:"#b45309",harmonyNote:"मध्यम/सम संबंध — आपसी संवाद एवं समझदारी से सुखद निर्वाह।",score:p}:{relation:"वैचारिक भिन्नता (शांति उपाय कल्पनीय)",color:"#be123c",harmonyNote:"स्वाभाविक दृष्टिकोण में अंतर — धैर्य एवं इष्ट आराधना से सामंजस्य स्थापित करें।",score:p}}function gt(t,i){const e=String(t||"").trim();return e?e.includes(i)?e:`${e} ${i}`:i}function te(t,i){const e=t.navamsaChart?.[0],n=e?.rashiNumber||t.panchang.lagnaNumber||1,a=e?.rashiName||t.phase1Astronomy?.shodashavarga?.find(s=>s.spec.id==="D9")?.ascendantRashiNameHi||i,r=Zt[n]||"गुरु";return{rashiName:a,rashiNumber:n,lordHi:r}}function ee(t){const i=Ze.findIndex(e=>e===t||t.includes(e.split(" ")[0]));return si[(i>=0?i:0)%9]}function ie(t,i){const e=X(t.id,i);return e.isDebilitated&&e.isCancelled?'<span style="color:#047857;font-size:7.6px;font-weight:700;">अवस्था: नीच (नीचभंग युक्त)</span>':e.isDebilitated?'<span style="color:#be123c;font-size:7.6px;font-weight:700;">अवस्था: नीच (Debilitated)</span>':t.isExalted||t.dignity.includes("स्वगृही")?`<span style="color:#047857;font-size:7.6px;font-weight:700;">अवस्था: ${o(t.dignity)}</span>`:`<span style="color:#475569;font-size:7.6px;">अवस्था: ${o(t.dignity)}</span>`}function nt(t,i){if(!t)return"संतुलित";const e=X(t.id,i);return e.isDebilitated&&e.isCancelled?"नीचभंग युक्त (सबल)":e.isDebilitated?"नीचस्थ (उपाय अपेक्षित)":t.isExalted?"उच्चस्थ (अति बली)":t.dignity.includes("स्वगृही")?"स्वगृही (बली)":t.dignity.includes("मित्र")?"मित्र राशि में शुभ":"मध्यम/सम बल"}function _(t,i){const e=t.lagnaChart?.[i-1],n=e?.rashiNumber||(t.panchang.lagnaNumber+i-2)%12+1,a=e?.rashiName?.split(" ")[0]||"मेष",r=Zt[n]||"गुरु",s=di[n]||"jupiter",l=t.planets.find(u=>u.id===s),p=l?X(l.id,t):{isDebilitated:!1,isCancelled:!1},c=l?[1,2,4,5,7,9,10,11].includes(l.houseInLagna):!1,g=!!(l&&(l.isExalted||l.dignity.includes("स्वगृही")||l.dignity.includes("मित्र")||p.isCancelled||c)&&!(p.isDebilitated&&!p.isCancelled)),b=l?`${r} (${V(l.houseInLagna)}, ${nt(l,t)})`:`${r}`;return{rashiName:a,lordHi:r,lordPlanet:l,isStrong:g,label:b}}function li(t,i){const e=new Date().getFullYear(),n=h=>{const F=h.mahadashas||[],P=F.filter(D=>D.endYear>=e&&D.startYear<=e+12);if(P.length>0)return P.slice(0,2);const j=F.find(D=>D.isCurrent);return j?[j]:F.slice(0,2)},a=(h,F)=>{const P=Z(h.planet),j=F.planets.find(B=>Z(B.hindiName)===P);let D=0;if(["गुरु","शुक्र","बुध","चन्द्र"].includes(P)&&(D+=2),j){const B=X(j.id,F);(j.isExalted||j.dignity.includes("स्वगृही")||B.isCancelled)&&(D+=2),[1,2,4,5,7,9,10,11].includes(j.houseInLagna)&&(D+=2),B.isDebilitated&&!B.isCancelled&&(D-=2)}return D},r=n(t),s=n(i),l=t.mahadashas.find(h=>h.isCurrent)||r[0],p=i.mahadashas.find(h=>h.isCurrent)||s[0],c=r.find(h=>h!==l),g=s.find(h=>h!==p),b=l?a(l,t):1,u=p?a(p,i):1,N=c?a(c,t):-1,S=g?a(g,i):-1,$=l?`${l.planet.split(" ")[0]}${l.currentAntardasha?`–${l.currentAntardasha.split(" ")[0]}`:""} (${Math.floor(l.startYear)}–${Math.floor(l.endYear)})`:"शुभ महादशा",y=p?`${p.planet.split(" ")[0]}${p.currentAntardasha?`–${p.currentAntardasha.split(" ")[0]}`:""} (${Math.floor(p.startYear)}–${Math.floor(p.endYear)})`:"शुभ महादशा",m=b+u,w=Math.min(c?Math.ceil(c.startYear):e+3,g?Math.ceil(g.startYear):e+3);if(m>=5){const h=Math.min(Math.max(e+4,Math.floor(Math.min(l?.endYear||e+5,p?.endYear||e+5))),e+6);return{windowText:`${e}–${h} (तत्काल प्रभाव से शुभ स्वर्ण काल)`,detailText:`वर की वर्तमान ${$} तथा वधू की ${y} दोनों सकारात्मक हैं — विवाह के प्रथम १–४ वर्षों में ही करियर, गृहस्थ स्थायित्व व भाग्योदय की स्पष्ट गति दिखेगी।`}}if(N>b||S>u){const h=Math.max(e+1,Math.min(w,e+4)),F=h+4,P=c&&N>b?`वर की आगामी ${c.planet.split(" ")[0]} महादशा (${Math.ceil(c.startYear)} से)`:g?`वधू की आगामी ${g.planet.split(" ")[0]} महादशा (${Math.ceil(g.startYear)} से)`:`${h} से आगामी अंतरदशा`;return{windowText:`${h}–${F} (दशा परिवर्तन उपरांत विशेष भाग्योदय)`,detailText:`वर्तमान में वर (${$}) व वधू (${y}) की दशाएं नींव तैयार कर रही हैं; ${P} प्रारंभ होते ही आर्थिक उन्नति, संतान सुख व गृहस्थ समृद्धि में तीव्र उछाल आएगा।`}}const f=e+1,x=e+5;return{windowText:`${f}–${x} (क्रमिक उन्नति व स्थिर भाग्योदय)`,detailText:`वर की ${$} एवं वधू की ${y} में शुभ अंतरदशाओं (गुरु/शुक्र/बुध) के संयोग से विवाह के १२–१८ माह बाद से निरंतर प्रगति, गृह-वाहन सुख व पारिवारिक स्थायित्व प्राप्त होगा।`}}function ae(t){const i=t.boyKundali||qt(t.boyName||"वर",t.boyDob||"1996-03-10",t.boyTime||"10:55",t.boyPlace||"रुद्रपुर, उत्तराखण्ड"),e=t.girlKundali||qt(t.girlName||"वधू",t.girlDob||"1998-11-15",t.girlTime||"14:15",t.girlPlace||"रुद्रपुर, उत्तराखण्ड"),n=t.deepMatchInsights,a=te(i,t.boyRashi),r=te(e,t.girlRashi),s=`वर: <b style="color:#7c2d12;">${o(t.boyName)}</b> (${o(t.boyRashi)}) &nbsp;&bull;&nbsp; वधू: <b style="color:#7c2d12;">${o(t.girlName)}</b> (${o(t.girlRashi)})`,l=t.koots[0],p=t.koots[1],c=t.koots[2],g=t.koots[3],b=t.koots.find(d=>d.hindiName.includes("मैत्री")||d.name.includes("Maitri"))||t.koots[4],u=t.koots.find(d=>d.hindiName.includes("गण")||d.name.includes("Gana"))||t.koots[5],N=t.koots.find(d=>d.hindiName.includes("भकूट")||d.name.includes("Bhakoot"))||t.koots[6],S=t.koots.find(d=>d.hindiName.includes("नाड़ी")||d.name.includes("Nadi"))||t.koots[7],$=l?.obtainedPoints??0,y=p?.obtainedPoints??0,m=c?.obtainedPoints??0,w=g?.obtainedPoints??0,f=b?.obtainedPoints??0,x=u?.obtainedPoints??0,h=N?.obtainedPoints??0,F=S?.obtainedPoints??0,P=F===0,j=h===0,D=x<5,B=t.boyRashi===t.girlRashi&&t.boyNakshatra!==t.girlNakshatra,Pt=t.boyNakshatra===t.girlNakshatra&&t.boyPada!==t.girlPada,tt=P&&(B||Pt),q=Z(t.boyRashiLord)===Z(t.girlRashiLord)||f>=4,Mt=rt(t.boyRashiLord,t.girlRashiLord),Y=rt(i.panchang.lagnaLord,e.panchang.lagnaLord),st=rt(a.lordHi,r.lordHi),zt=ee(t.boyNakshatra),jt=ee(t.girlNakshatra),he=rt(zt,jt),Tt=t.manglikStatus.boyManglik?"#be123c":t.manglikStatus.boyRawManglik?"#b45309":"#047857",At=t.manglikStatus.girlManglik?"#be123c":t.manglikStatus.girlRawManglik?"#b45309":"#047857",xe=t.manglikStatus.boyMarsHouseVenus??t.manglikStatus.boyMarsHouseMoon,be=t.manglikStatus.girlMarsHouseVenus??t.manglikStatus.girlMarsHouseMoon,ft=gt(u?.boyValue,"गण"),mt=gt(u?.girlValue,"गण"),Ht=gt(S?.boyValue,"नाड़ी"),Ct=gt(S?.girlValue,"नाड़ी"),fe=`
    ${O("बृहत् ३६ गुण मिलान एवं वैदिक विवाह मेलापक महा-पत्रिका (7-Page Report)","दृक् गणित, लाहिड़ी चित्रापक्ष अयनांश एवं बृहत् पाराशर होरा शास्त्र पर आधारित",s)}

    <div style="background: linear-gradient(90deg, #fff6e0 0%, #fde8bf 100%); border: 2px solid #b45309; border-radius: 6px; padding: 7px 12px 9px 12px; margin-bottom: 8px; width: 100%; box-sizing: border-box;">
      <table style="width: 100%; table-layout: fixed; border-collapse: collapse;">
        <tr>
          <td style="width: 72%; vertical-align: middle; text-align: left; padding-right: 10px;">
            <div style="font-size: 9px; color: #9a3412; font-weight: 800; letter-spacing: 0.3px;">अष्टकूट ३६ गुण मिलान सर्वोच्च निर्णय (Overall Matchmaking Verdict)</div>
            <div style="font-size: 13px; font-weight: 900; color: #7c2d12; margin-top: 2px; line-height: 1.3;">
              ${o(t.overallVerdict)} &bull; <span style="color: #047857;">${t.compatibilityPercentage}% वैवाहिक अनुकूलता</span>
            </div>
            <div style="font-size: 8.6px; color: #1e293b; margin-top: 2.5px; line-height: 1.35;">
              ${o(t.verdictDescription)}
            </div>
          </td>
          <td style="width: 28%; vertical-align: middle; text-align: right;">
            <div style="background: #fffdf9; border: 2px solid #b45309; border-radius: 6px; padding: 6px 8px 8px 8px; text-align: center;">
              <div style="font-size: 18px; font-weight: 900; color: #7c2d12; line-height: 1.15;">${t.totalScore} / 36</div>
              <div style="font-size: 8.4px; color: #047857; font-weight: 800; margin-top: 2px;">प्राप्त अष्टकूट गुण (${t.compatibilityPercentage}%)</div>
              <div style="font-size: 7.7px; color: #334155; margin-top: 1px;">शास्त्रोक्त न्यूनतम मानक: 18 गुण</div>
            </div>
          </td>
        </tr>
      </table>
    </div>

    ${C("१. वर एवं वधू का संपूर्ण जन्म पंचांग व ज्योतिषीय विवरण (Groom & Bride Astro Profile)","पृष्ठ १ : मुख्य विवरण")}
    <div style="display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: 10px; align-items: stretch; width: 100%; margin-bottom: 8px; box-sizing: border-box;">
      <div style="min-width: 0; width: 100%; height: 100%; background: #fffdf9; border: 1.5px solid #d97706; border-radius: 6px; padding: 7px 10px 9px 10px; box-sizing: border-box; display: flex; flex-direction: column;">
        <div style="font-size: 10px; font-weight: 900; color: #7c2d12; border-bottom: 1px solid #d97706; padding-bottom: 4px; margin-bottom: 5px;">
          वर पत्रिका विवरण (Groom): ${o(t.boyName)}
        </div>
        <table style="width: 100%; table-layout: fixed; border-collapse: collapse; font-size: 8.3px; font-family: 'Noto Sans Devanagari', 'Nirmala UI', 'Mangal', sans-serif;">
          <colgroup>
            <col style="width: 40%;" />
            <col style="width: 60%;" />
          </colgroup>
          <tr><td style="padding: 2px 4px 2px 0; color: #9a3412; font-weight: 700; vertical-align: top;">जन्म तिथि व समय:</td><td style="padding: 2px 0; color: #1e293b; font-variant-numeric: tabular-nums; vertical-align: top;">${o(Kt(t.boyDob||i.input.formattedDob))} &bull; ${o(t.boyTime||i.input.formattedTime)}</td></tr>
          <tr><td style="padding: 2px 4px 2px 0; color: #9a3412; font-weight: 700; vertical-align: top;">जन्म स्थान:</td><td style="padding: 2px 0; color: #1e293b; vertical-align: top;">${o(t.boyPlace||i.input.birthPlace)}</td></tr>
          <tr><td style="padding: 2px 4px 2px 0; color: #9a3412; font-weight: 700; vertical-align: top;">जन्म लग्न व स्वामी:</td><td style="padding: 2px 0; color: #047857; font-weight: 700; vertical-align: top;">${o(t.boyLagna)} (${o(i.panchang.lagnaLord)})</td></tr>
          <tr><td style="padding: 2px 4px 2px 0; color: #9a3412; font-weight: 700; vertical-align: top;">चन्द्र राशि व राशिपति:</td><td style="padding: 2px 0; color: #7c2d12; font-weight: 700; vertical-align: top;">${o(t.boyRashi)} (${o(t.boyRashiLord)})</td></tr>
          <tr><td style="padding: 2px 4px 2px 0; color: #9a3412; font-weight: 700; vertical-align: top;">जन्म नक्षत्र व चरण:</td><td style="padding: 2px 0; color: #1e293b; vertical-align: top;">${o(t.boyNakshatra)} (चरण ${t.boyPada})</td></tr>
          <tr><td style="padding: 2px 4px 2px 0; color: #9a3412; font-weight: 700; vertical-align: top;">वर्ण / वश्य / योनि:</td><td style="padding: 2px 0; color: #334155; vertical-align: top;">${o(l?.boyValue)} / ${o(p?.boyValue)} / ${o(g?.boyValue)}</td></tr>
          <tr><td style="padding: 2px 4px 2px 0; color: #9a3412; font-weight: 700; vertical-align: top;">गण एवं नाड़ी:</td><td style="padding: 2px 0; color: #7c2d12; font-weight: 600; vertical-align: top;">${o(ft)} &bull; ${o(Ht)}</td></tr>
          <tr><td style="padding: 2px 4px 2px 0; color: #9a3412; font-weight: 700; vertical-align: top;">मांगलिक विचार:</td><td class="pj-h2c-no-lift" style="padding: 2px 0; color: ${Tt}; font-weight: 700; line-height: 1.3; vertical-align: top;">${o(U(t.manglikStatus.boySeverity))} <span style="color:#475569;font-weight:600;">(लग्न से ${V(t.manglikStatus.boyMarsHouseLagna)})</span></td></tr>
        </table>
      </div>
      <div style="min-width: 0; width: 100%; height: 100%; background: #fffdf9; border: 1.5px solid #d97706; border-radius: 6px; padding: 6px 10px 8px 10px; box-sizing: border-box; display: flex; flex-direction: column;">
        <div style="font-size: 9.8px; font-weight: 800; color: #7c2d12; border-bottom: 1px solid #d97706; padding-bottom: 3.5px; margin-bottom: 4px;">
          वधू पत्रिका विवरण (Bride): ${o(t.girlName)}
        </div>
        <table style="width: 100%; table-layout: fixed; border-collapse: collapse; font-size: 8.2px; font-family: 'Noto Sans Devanagari', 'Nirmala UI', 'Mangal', sans-serif;">
          <colgroup>
            <col style="width: 40%;" />
            <col style="width: 60%;" />
          </colgroup>
          <tr><td style="padding: 2px 4px 2px 0; color: #9a3412; font-weight: 700; vertical-align: top;">जन्म तिथि व समय:</td><td style="padding: 2px 0; color: #1e293b; font-variant-numeric: tabular-nums; vertical-align: top;">${o(Kt(t.girlDob||e.input.formattedDob))} &bull; ${o(t.girlTime||e.input.formattedTime)}</td></tr>
          <tr><td style="padding: 2px 4px 2px 0; color: #9a3412; font-weight: 700; vertical-align: top;">जन्म स्थान:</td><td style="padding: 2px 0; color: #1e293b; vertical-align: top;">${o(t.girlPlace||e.input.birthPlace)}</td></tr>
          <tr><td style="padding: 2px 4px 2px 0; color: #9a3412; font-weight: 700; vertical-align: top;">जन्म लग्न व स्वामी:</td><td style="padding: 2px 0; color: #047857; font-weight: 700; vertical-align: top;">${o(t.girlLagna)} (${o(e.panchang.lagnaLord)})</td></tr>
          <tr><td style="padding: 2px 4px 2px 0; color: #9a3412; font-weight: 700; vertical-align: top;">चन्द्र राशि व राशिपति:</td><td style="padding: 2px 0; color: #7c2d12; font-weight: 700; vertical-align: top;">${o(t.girlRashi)} (${o(t.girlRashiLord)})</td></tr>
          <tr><td style="padding: 2px 4px 2px 0; color: #9a3412; font-weight: 700; vertical-align: top;">जन्म नक्षत्र व चरण:</td><td style="padding: 2px 0; color: #1e293b; vertical-align: top;">${o(t.girlNakshatra)} (चरण ${t.girlPada})</td></tr>
          <tr><td style="padding: 2px 4px 2px 0; color: #9a3412; font-weight: 700; vertical-align: top;">वर्ण / वश्य / योनि:</td><td style="padding: 2px 0; color: #334155; vertical-align: top;">${o(l?.girlValue)} / ${o(p?.girlValue)} / ${o(g?.girlValue)}</td></tr>
          <tr><td style="padding: 2px 4px 2px 0; color: #9a3412; font-weight: 700; vertical-align: top;">गण एवं नाड़ी:</td><td style="padding: 2px 0; color: #7c2d12; font-weight: 600; vertical-align: top;">${o(mt)} &bull; ${o(Ct)}</td></tr>
          <tr><td style="padding: 2px 4px 2px 0; color: #9a3412; font-weight: 700; vertical-align: top;">मांगलिक विचार:</td><td class="pj-h2c-no-lift" style="padding: 2px 0; color: ${At}; font-weight: 700; line-height: 1.3; vertical-align: top;">${o(U(t.manglikStatus.girlSeverity))} <span style="color:#475569;font-weight:600;">(लग्न से ${V(t.manglikStatus.girlMarsHouseLagna)})</span></td></tr>
        </table>
      </div>
    </div>

    ${C("२. वर एवं वधू की लग्न (D-1) एवं नवमांश (D-9) कुंडली चक्र","स्पष्ट 2×2 उत्तर भारतीय हीरक शैली")}
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; width: 100%; margin-bottom: 8px; box-sizing: border-box;">
      <div>
        ${xt(i.lagnaChart,"वर लग्न (D-1)",`${t.boyName} (${t.boyLagna})`,204)}
      </div>
      <div>
        ${xt(i.navamsaChart,"वर नवमांश (D-9)",`नवांश लग्न: ${a.rashiName}`,204)}
      </div>
      <div>
        ${xt(e.lagnaChart,"वधू लग्न (D-1)",`${t.girlName} (${t.girlLagna})`,204)}
      </div>
      <div>
        ${xt(e.navamsaChart,"वधू नवमांश (D-9)",`नवांश लग्न: ${r.rashiName}`,204)}
      </div>
    </div>

    ${C("३. मेलापक महा-पत्रिका कार्यकारी सारांश (Executive Matchmaking Summary)","शास्त्रोक्त निष्कर्ष")}
    <div style="background: #fef8ec; border: 1.5px solid #b45309; border-radius: 6px; padding: 6px 10px 9px 10px; font-size: 8.3px; color: #1e293b; line-height: 1.4;">
      <div><b style="color: #7c2d12;">&bull; अष्टकूट गुण योग:</b> कुल ३६ गुणों में से <b style="color:#047857;">${t.totalScore} गुण (${t.compatibilityPercentage}%)</b> प्राप्त हुए हैं। शास्त्रानुसार १८ से अधिक गुण विवाह हेतु शुभ तथा २४ से अधिक गुण उत्तम कोटि के माने जाते हैं।</div>
      <div style="margin-top: 2.5px;"><b style="color: #7c2d12;">&bull; राशि स्वामी एवं सप्तम भाव समन्वय:</b> ${o(t.planetaryHarmony.rashiLordRelation)} &bull; ${o(t.planetaryHarmony.seventhHouseSummary)}</div>
      <div class="pj-h2c-no-lift" style="margin-top: 2.5px;"><b style="color: #7c2d12;">&bull; मांगलिक (कुज) व परिहार निर्णय:</b> ${o(U(t.manglikStatus.description))}</div>
    </div>
  `,me=t.koots.map((d,A)=>{const M=d.status==="favorable"?"शुभ / उत्तम":d.status==="moderate"?"मध्यम / परिहार्य":"दोष / विचारणीय",L=d.status==="favorable"?"#047857":d.status==="moderate"?"#b45309":"#be123c",vt=d.hindiName?d.hindiName.replace(/^\d+\.\s*/,`${A+1}. `):`${A+1}. ${d.name}`;return`
        <tr style="background: ${A%2===0?"#fffdf9":"#fef7e6"};">
          <td style="padding: 4.5px 7px 7px 7px; border: 1px solid #d97706; color: #7c2d12; font-weight: 800; font-size: 8.8px; line-height: 1.32; width: 18%;">
            ${o(vt)}<br/>
            <span style="font-size: 7.7px; color: #475569; font-weight: 600;">${o(d.meaning)}</span>
          </td>
          <td style="padding: 4.5px 7px 7px 7px; border: 1px solid #d97706; color: #1e293b; font-weight: 700; font-size: 8.6px; line-height: 1.32; width: 12%;">${o(d.boyValue)}</td>
          <td style="padding: 4.5px 7px 7px 7px; border: 1px solid #d97706; color: #9a3412; font-weight: 700; font-size: 8.6px; line-height: 1.32; width: 12%;">${o(d.girlValue)}</td>
          <td style="padding: 4.5px 7px 7px 7px; border: 1px solid #d97706; color: #334155; text-align: center; font-weight: 700; font-size: 8.8px; width: 8%;">${d.maxPoints}</td>
          <td style="padding: 4.5px 7px 7px 7px; border: 1px solid #d97706; color: #7c2d12; text-align: center; font-weight: 900; font-size: 9.6px; width: 8%;">${d.obtainedPoints}</td>
          <td style="padding: 4.5px 7px 7px 7px; border: 1px solid #d97706; color: ${L}; font-weight: 800; text-align: center; font-size: 8.3px; width: 11%;">${o(M)}</td>
          <td style="padding: 4.5px 7px 7px 7px; border: 1px solid #d97706; color: #1e293b; font-size: 8.3px; line-height: 1.34; width: 31%;">
            ${o(d.verdict)}
            ${d.remedy?`<div style="color:#9a3412;font-size:7.8px;margin-top:2px;"><b>उपाय:</b> ${o(d.remedy)}</div>`:""}
          </td>
        </tr>
      `}).join(""),ue=`
    ${O("अष्टकूट ३६ गुणों की प्रमाणिक गणना एवं शास्त्रोक्त फल सारणी","पृष्ठ २ : अष्टकूट सारणी",s,!0)}

    ${C("४. अष्टकूट (वर्ण, वश्य, तारा, योनि, मैत्री, गण, भकूट, नाड़ी) ३६ गुण सारणी",`प्राप्त गुण: ${t.totalScore} / 36`)}
    <table style="width: 100%; border-collapse: collapse; margin-bottom: 8px; table-layout: fixed;">
      <thead>
        <tr style="background: #fdecc8;">
          <th style="padding: 4px 7px 7px 7px; border: 1px solid #b45309; color: #7c2d12; font-size: 8.6px; text-align: left; width: 18%;">कूट एवं कारक क्षेत्र</th>
          <th style="padding: 4px 7px 7px 7px; border: 1px solid #b45309; color: #7c2d12; font-size: 8.6px; text-align: left; width: 12%;">वर (${o(t.boyName)})</th>
          <th style="padding: 4px 7px 7px 7px; border: 1px solid #b45309; color: #7c2d12; font-size: 8.6px; text-align: left; width: 12%;">वधू (${o(t.girlName)})</th>
          <th style="padding: 4px 7px 7px 7px; border: 1px solid #b45309; color: #7c2d12; font-size: 8.6px; text-align: center; width: 8%;">पूर्णांक</th>
          <th style="padding: 4px 7px 7px 7px; border: 1px solid #b45309; color: #7c2d12; font-size: 8.6px; text-align: center; width: 8%;">प्राप्तांक</th>
          <th style="padding: 4px 7px 7px 7px; border: 1px solid #b45309; color: #7c2d12; font-size: 8.6px; text-align: center; width: 11%;">निर्णय</th>
          <th style="padding: 4px 7px 7px 7px; border: 1px solid #b45309; color: #7c2d12; font-size: 8.6px; text-align: left; width: 31%;">शास्त्रोक्त फल एवं जीवन पर प्रभाव</th>
        </tr>
      </thead>
      <tbody>
        ${me}
        <tr style="background: #fef0c7;">
          <td colspan="3" style="padding: 5px 7px 7px 7px; border: 1px solid #b45309; color: #7c2d12; font-weight: 900; font-size: 9px; text-align: right;">कुल अष्टकूट गुण मिलान योग (Total Ashtakoot Score):</td>
          <td style="padding: 5px 7px 7px 7px; border: 1px solid #b45309; color: #1e293b; font-weight: 900; font-size: 9.2px; text-align: center;">36</td>
          <td style="padding: 5px 7px 7px 7px; border: 1px solid #b45309; color: #7c2d12; font-weight: 900; font-size: 10.2px; text-align: center;">${t.totalScore}</td>
          <td colspan="2" style="padding: 5px 7px 7px 7px; border: 1px solid #b45309; color: #047857; font-weight: 900; font-size: 9px;">${o(t.overallVerdict)} (${t.compatibilityPercentage}% अनुकूलता)</td>
        </tr>
      </tbody>
    </table>

    ${C("५. अष्टकूट श्रेणी वर्गीकरण एवं मुहूर्त चिंतामणि प्रमाण","शास्त्रीय मानदंड")}
    <table style="width: 100%; table-layout: fixed; border-collapse: collapse; margin-bottom: 6px; font-size: 8.4px;">
      <thead>
        <tr style="background: #fdecc8;">
          <th style="padding: 3.5px 6px 6px 6px; border: 1px solid #b45309; color: #7c2d12; text-align: left; width: 22%;">गुण श्रेणी (Score Range)</th>
          <th style="padding: 3.5px 6px 6px 6px; border: 1px solid #b45309; color: #7c2d12; text-align: left; width: 23%;">शास्त्रीय कोटि</th>
          <th style="padding: 3.5px 6px 6px 6px; border: 1px solid #b45309; color: #7c2d12; text-align: left; width: 55%;">दांपत्य फलित एवं शास्त्र सम्मत निर्देश</th>
        </tr>
      </thead>
      <tbody>
        <tr style="background: ${t.totalScore>=28?"#ecfdf5":"#fffdf9"};">
          <td style="padding: 3.5px 6px 6px 6px; border: 1px solid #d97706; color: #047857; font-weight: 800;">28 से 36 गुण (78%–100%)</td>
          <td style="padding: 3.5px 6px 6px 6px; border: 1px solid #d97706; color: #1e293b; font-weight: 700;">सर्वोत्तम (Uttam Melapak)</td>
          <td style="padding: 3.5px 6px 6px 6px; border: 1px solid #d97706; color: #334155;">अखंड सौभाग्य, उत्तम संतान, प्रगाढ़ मानसिक व आध्यात्मिक सामंजस्य।</td>
        </tr>
        <tr style="background: ${t.totalScore>=24&&t.totalScore<28?"#ecfdf5":"#fef7e6"};">
          <td style="padding: 3.5px 6px 6px 6px; border: 1px solid #d97706; color: #047857; font-weight: 800;">24 से 27.5 गुण (66%–77%)</td>
          <td style="padding: 3.5px 6px 6px 6px; border: 1px solid #d97706; color: #1e293b; font-weight: 700;">अति शुभ (Shreshtha)</td>
          <td style="padding: 3.5px 6px 6px 6px; border: 1px solid #d97706; color: #334155;">सुखद गृहस्थ जीवन, विवाह पश्चात् भाग्योदय एवं पारिवारिक समृद्धि।</td>
        </tr>
        <tr style="background: ${t.totalScore>=18&&t.totalScore<24?"#fffbeb":"#fffdf9"};">
          <td style="padding: 3.5px 6px 6px 6px; border: 1px solid #d97706; color: #b45309; font-weight: 800;">18 से 23.5 गुण (50%–65%)</td>
          <td style="padding: 3.5px 6px 6px 6px; border: 1px solid #d97706; color: #1e293b; font-weight: 700;">मध्यम शुभ (Madhyam)</td>
          <td style="padding: 3.5px 6px 6px 6px; border: 1px solid #d97706; color: #334155;">शास्त्र सम्मत विवाह योग्य; ग्रह मैत्री व परिहार के साथ शुभ फलदायी।</td>
        </tr>
        <tr style="background: ${t.totalScore<18?"#fff1f2":"#fef7e6"};">
          <td style="padding: 3.5px 6px 6px 6px; border: 1px solid #d97706; color: #be123c; font-weight: 800;">18 गुण से कम (&lt;50%)</td>
          <td style="padding: 3.5px 6px 6px 6px; border: 1px solid #d97706; color: #1e293b; font-weight: 700;">परिहार एवं शांति अपेक्षित</td>
          <td style="padding: 3.5px 6px 6px 6px; border: 1px solid #d97706; color: #334155;">राशिपति मैत्री, नवांश बल एवं विशेष वैदिक शांति अनुष्ठान के उपरांत ही विचारणीय।</td>
        </tr>
      </tbody>
    </table>
  `,ye=(()=>{if(!D)return`
        <div style="margin-top: 3px; background: #ecfdf5; border-left: 3px solid #047857; padding: 4px 7px; color: #1e293b;">
          <b style="color:#047857;">गण कूट स्थिति (दोष-मुक्त):</b> वर (${o(ft)}) एवं वधू (${o(mt)}) में ${x}/6 गुण प्राप्त हैं। गण दोष अनुपस्थित होने से किसी विशेष गण परिहार की आवश्यकता नहीं है।
        </div>
      `;if(q)return`
        <div style="margin-top: 3px; background: #ecfdf5; border-left: 3px solid #047857; padding: 4px 7px; color: #334155;">
          <b style="color:#047857;">शास्त्रोक्त गण दोष परिहार सिद्ध:</b> <i>“ग्रहमैत्री च राशीनां ताराभकूटशुद्धितः। गणदोषो न वक्तव्यः॥”</i> — राशिपति <b>${o(t.boyRashiLord)}</b> व <b>${o(t.girlRashiLord)}</b> के मध्य <b>${o(Mt.relation)}</b> संबंध (मैत्री अंक: <b>${f}/5</b>) होने से गण दोष का शास्त्रसम्मत परिहार पूर्णतः लागू होता है।
        </div>
      `;const d=[];return he.score>=1&&d.push(`नक्षत्रेश मैत्री (${zt}–${jt}: शुभ)`),Y.score>=1&&d.push(`लग्नेश मैत्री (${i.panchang.lagnaLord}–${e.panchang.lagnaLord}: शुभ)`),st.score>=1&&d.push(`नवांश लग्नेश समन्वय (${a.lordHi}–${r.lordHi})`),h===7&&F===8&&d.push("भकूट (7/7) व नाड़ी (8/8) पूर्ण शुद्ध"),`
      <div style="margin-top: 3px; background: #fff7ed; border-left: 3px solid #b45309; padding: 4px 7px; color: #334155;">
        <b style="color:#9a3412;">गण दोष मूल्यांकन एवं सामंजस्य मार्गदर्शिका:</b> राशिपति मैत्री (<b>${f}/5</b> — ${o(Mt.relation)}) न्यून होने से राशिपति-मैत्री आधारित गण परिहार लागू नहीं होता। ${d.length>0?`हालांकि सहायक सकारात्मक तत्व (<b>${o(d.join(", "))}</b>) दीर्घकालिक स्थायित्व में सहयोगी हैं। `:""}स्वभाव व निर्णय-शैली में अंतर के सामंजस्य हेतु शांत संवाद, धैर्य तथा विवाह पूर्व गणपति अथर्वशीर्ष पाठ एवं शिव-पार्वती अभिषेक श्रेयस्कर रहेगा।
      </div>
    `})(),ve=j?q?`
        <div style="margin-top: 3px; background: #ecfdf5; border-left: 3px solid #047857; padding: 4px 7px; color: #334155;">
          <b style="color:#047857;">शास्त्रोक्त भकूट परिहार सिद्ध:</b> <i>“एकराश्यधिपत्ये तु मित्रत्वे राश्यधीशयोः। खेटमैत्र्यां भकूटस्थो दोषो नश्यति निश्चितम्॥”</i><br/>
          &bull; <b>निर्णय:</b> वर राशिपति (<b>${o(t.boyRashiLord)}</b>) व वधू राशिपति (<b>${o(t.girlRashiLord)}</b>) परस्पर मित्र/एक (मैत्री: <b>${f}/5</b>) होने से भकूट दोष का पूर्ण परिहार सिद्ध है।
        </div>
      `:`
      <div style="margin-top: 3px; background: #fff1f2; border-left: 3px solid #be123c; padding: 4px 7px; color: #334155;">
        <b style="color:#be123c;">भकूट दोष शांति निर्देश:</b> राशि स्वामियों (<b>${o(t.boyRashiLord)}</b> व <b>${o(t.girlRashiLord)}</b>) में मैत्री न्यून (<b>${f}/5</b>) होने से राशिपति भकूट परिहार लागू नहीं होता। ${st.score>=1?`नवांश लग्नेश (${o(a.lordHi)}–${o(r.lordHi)}) आंशिक सहयोग दे रहे हैं; `:""}विवाह पूर्व श्री लक्ष्मीनारायण हवन, गौरी-शंकर अभिषेक एवं राशिपति शांति जप अवश्य कराएं।
      </div>
    `:`
        <div style="margin-top: 3px; background: #ecfdf5; border-left: 3px solid #047857; padding: 4px 7px; color: #1e293b;">
          <b style="color:#047857;">भकूट निर्णय (पूर्णतः शुद्ध):</b> वर (${o(t.boyRashi.split(" ")[0])}) एवं वधू (${o(t.girlRashi.split(" ")[0])}) के मध्य शुभ राशि अंतराल होने से <b>7/7 पूर्ण गुण</b> प्राप्त हैं — कोई भकूट दोष उपस्थित नहीं है।
        </div>
      `,we=n?.extendedKoots?.length?n.extendedKoots.map((d,A)=>{const M=d.status==="शुभ"?"#047857":d.status==="मध्यम"?"#b45309":"#be123c";return`
            <tr style="background: ${A%2===0?"#fffdf9":"#fef7e6"};">
              <td style="padding: 3px 6px 5.5px 6px; border: 1px solid #d97706; color: #7c2d12; font-weight: 800; width: 22%;">${o(d.name)}</td>
              <td style="padding: 3px 6px 5.5px 6px; border: 1px solid #d97706; color: #1e293b; width: 21%;">${o(d.boyDetail)} / ${o(d.girlDetail)}</td>
              <td style="padding: 3px 6px 5.5px 6px; border: 1px solid #d97706; color: ${M}; font-weight: 800; text-align: center; width: 12%;">${o(d.status)}</td>
              <td style="padding: 3px 6px 5.5px 6px; border: 1px solid #d97706; color: #334155; width: 45%;">${o(d.detail)}</td>
            </tr>
          `}).join(""):`
      <tr style="background: #fffdf9;">
        <td style="padding: 3px 6px; border: 1px solid #d97706; color: #7c2d12; font-weight: 800; width: 22%;">१. वर्ण कूट (${$}/1)</td>
        <td colspan="3" style="padding: 3px 6px; border: 1px solid #d97706; color: #1e293b;">वर (${o(l?.boyValue)}) एवं वधू (${o(l?.girlValue)}) — ${o(l?.verdict)}</td>
      </tr>
      <tr style="background: #fef7e6;">
        <td style="padding: 3px 6px; border: 1px solid #d97706; color: #7c2d12; font-weight: 800;">२. वश्य व योनि कूट</td>
        <td colspan="3" style="padding: 3px 6px; border: 1px solid #d97706; color: #1e293b;">वश्य (${y}/2) &bull; तारा (${m}/3) &bull; योनि (${w}/4)</td>
      </tr>
    `,$e=`
    ${O("गण-भकूट परिहार मीमांसा एवं रज्जु, वेध, महेन्द्र, स्त्री-दीर्घ विशेष परीक्षण","पृष्ठ ३ : गण, भकूट व विशेष कूट",s,!0)}

    ${C("६. गण कूट (6 गुण) का विस्तृत स्वभाव एवं परिहार विश्लेषण",`प्राप्त गुण: ${x} / 6`)}
    <div style="background: #fffdf9; border: 1.5px solid #d97706; border-radius: 6px; padding: 6px 10px 8px 10px; margin-bottom: 6px; font-size: 8.2px; color: #1e293b; line-height: 1.38;">
      <table style="width: 100%; table-layout: fixed; border-collapse: collapse; margin-bottom: 4px;">
        <tr style="background: #fef7e6;">
          <td style="padding: 3px 7px; border: 1px solid #d97706; width: 34%;"><b style="color:#7c2d12;">वर का गण:</b> ${o(ft)}</td>
          <td style="padding: 3px 7px; border: 1px solid #d97706; width: 34%;"><b style="color:#7c2d12;">वधू का गण:</b> ${o(mt)}</td>
          <td style="padding: 3px 7px; border: 1px solid #d97706; width: 32%;"><b style="color:#7c2d12;">गण अंक:</b> <span style="color:${D?"#be123c":"#047857"};font-weight:900;">${x} / 6 गुण</span></td>
        </tr>
      </table>
      <div><b style="color: #7c2d12;">&bull; गण फलित:</b> ${o(u?.verdict)}</div>
      ${ye}
    </div>

    ${C("७. भकूट कूट (7 गुण) एवं द्वादश राशि संबंध व परिहार निर्णय",`प्राप्त गुण: ${h} / 7`)}
    <div style="background: #fffdf9; border: 1.5px solid #d97706; border-radius: 6px; padding: 6px 10px 8px 10px; margin-bottom: 6px; font-size: 8.2px; color: #1e293b; line-height: 1.38;">
      <table style="width: 100%; table-layout: fixed; border-collapse: collapse; margin-bottom: 4px;">
        <tr style="background: #fef7e6;">
          <td style="padding: 3px 7px; border: 1px solid #d97706; width: 35%;"><b style="color:#7c2d12;">वर चन्द्र राशि:</b> ${o(t.boyRashi)} (${o(t.boyRashiLord)})</td>
          <td style="padding: 3px 7px; border: 1px solid #d97706; width: 35%;"><b style="color:#7c2d12;">वधू चन्द्र राशि:</b> ${o(t.girlRashi)} (${o(t.girlRashiLord)})</td>
          <td style="padding: 3px 7px; border: 1px solid #d97706; width: 30%;"><b style="color:#7c2d12;">भकूट अंक:</b> <span style="color:${j?"#be123c":"#047857"};font-weight:900;">${h} / 7 गुण</span></td>
        </tr>
      </table>
      <div><b style="color: #7c2d12;">&bull; भकूट कूट फलित:</b> ${o(N?.verdict)}</div>
      ${ve}
    </div>

    ${C("८. दक्षिण-उत्तर विशेष मेलापक: रज्जु, वेध, महेन्द्र एवं स्त्री-दीर्घ कूट परीक्षा","३६ गुण से आगे सूक्ष्म जांच")}
    <table style="width: 100%; table-layout: fixed; border-collapse: collapse; font-size: 8px;">
      <thead>
        <tr style="background: #fdecc8;">
          <th style="padding: 3px 6px 5.5px 6px; border: 1px solid #b45309; color: #7c2d12; text-align: left; width: 22%;">विशेष कूट परीक्षा</th>
          <th style="padding: 3px 6px 5.5px 6px; border: 1px solid #b45309; color: #7c2d12; text-align: left; width: 21%;">वर / वधू स्थिति</th>
          <th style="padding: 3px 6px 5.5px 6px; border: 1px solid #b45309; color: #7c2d12; text-align: center; width: 12%;">निर्णय</th>
          <th style="padding: 3px 6px 5.5px 6px; border: 1px solid #b45309; color: #7c2d12; text-align: left; width: 45%;">दाम्पत्य व दीर्घायु प्रभाव</th>
        </tr>
      </thead>
      <tbody>
        ${we}
      </tbody>
    </table>
  `,ke=i.planets.map((d,A)=>{const M=e.planets[A],L=rt(d.rashiLord,M?.rashiLord||"गुरु");return`
        <tr style="background: ${A%2===0?"#fffdf9":"#fef7e6"};">
          <td class="pj-h2c-no-lift" style="padding: 4px 5px 6px 5px; border: 1px solid #d97706; color: #7c2d12; font-weight: 800; font-size: 8.2px; width: 13%; line-height: 1.44; direction: ltr; unicode-bidi: isolate;">${o(d.hindiName.normalize("NFC"))}</td>
          <td class="pj-h2c-no-lift" style="padding: 4px 5px 6px 5px; border: 1px solid #d97706; color: #1e293b; font-size: 7.9px; width: 23.5%; line-height: 1.46; direction: ltr; unicode-bidi: isolate;">
            ${Jt(d.rashiName,d.rashiLord)}
          </td>
          <td class="pj-h2c-no-lift" style="padding: 4px 5px 6px 5px; border: 1px solid #d97706; color: #9a3412; font-size: 7.9px; width: 23.5%; line-height: 1.46; direction: ltr; unicode-bidi: isolate;">
            ${M?Jt(M.rashiName,M.rashiLord):"—"}
          </td>
          <td class="pj-h2c-no-lift" style="padding: 4px 5px 6px 5px; border: 1px solid #d97706; color: ${L.color}; font-weight: 800; font-size: 8px; width: 20%; line-height: 1.44;">${o(L.relation)}</td>
          <td class="pj-h2c-no-lift" style="padding: 4px 5px 6px 5px; border: 1px solid #d97706; color: #334155; font-size: 7.9px; width: 20%; line-height: 1.44;">${o(L.harmonyNote)}</td>
        </tr>
      `}).join(""),Fe=`
    ${O("नाड़ी दोष सूक्ष्म मीमांसा एवं नवग्रह मैत्री (9-Planet Graha Maitri) तुलना","पृष्ठ ४ : नाड़ी एवं ग्रह मैत्री",s,!0)}

    ${C("९. नाड़ी कूट (Nadi Koot — 8 गुण) का विस्तृत आयुर्वेदिक व ज्योतिषीय विश्लेषण",`प्राप्त गुण: ${F} / 8`)}
    <div style="background: #fffdf9; border: 1.5px solid #d97706; border-radius: 6px; padding: 6px 10px 9px 10px; margin-bottom: 8px; font-size: 8.4px; color: #1e293b; line-height: 1.42;">
      <table style="width: 100%; table-layout: fixed; border-collapse: collapse; margin-bottom: 5px;">
        <tr style="background: #fef7e6;">
          <td style="padding: 4px 8px; border: 1px solid #d97706; width: 33%;"><b style="color:#7c2d12;">वर की नाड़ी:</b> ${o(Ht)}</td>
          <td style="padding: 4px 8px; border: 1px solid #d97706; width: 33%;"><b style="color:#7c2d12;">वधू की नाड़ी:</b> ${o(Ct)}</td>
          <td style="padding: 4px 8px; border: 1px solid #d97706; width: 34%;"><b style="color:#7c2d12;">नाड़ी प्राप्तांक:</b> <span style="color:${P?"#be123c":"#047857"};font-weight:900;">${F} / 8 गुण</span></td>
        </tr>
      </table>
      <div><b style="color: #7c2d12;">&bull; त्रि-नाड़ी विज्ञान:</b> अष्टकूट में सर्वाधिक ८ गुण नाड़ी कूट के होते हैं। <b>आदि नाड़ी (वात प्रकृति)</b>, <b>मध्य नाड़ी (पित्त प्रकृति)</b> एवं <b>अन्त्य नाड़ी (कफ प्रकृति)</b> वर-वधू के शारीरिक त्रिदोष संतुलन, आनुवंशिक स्वास्थ्य एवं संतान सुख का निर्धारण करती हैं।</div>
      <div style="margin-top: 4px; background: #fef8ec; border-left: 3px solid #b45309; padding: 5px 8px; color: #334155;">
        ${P?`<b style="color:#7c2d12;">पीयूषधारा एवं मुहूर्त चिंतामणि के प्रामाणिक नाड़ी परिहार सूत्र:</b><br/>
               <i>“एकराशिः पृथक् तारा एकतारा पृथग्गृहम्। एकर्क्षं भिन्नपादं च नाड़ीदोषो न विद्यते॥”</i><br/>
               १. <b>एक राशि - भिन्न नक्षत्र</b>, २. <b>एक नक्षत्र - भिन्न राशि</b> अथवा ३. <b>एक नक्षत्र - भिन्न चरण (Pada)</b> होने पर नाड़ी दोष निरस्त होता है।<br/>
               &bull; <b style="color:#7c2d12;">अंतिम नाड़ी निर्णय:</b> ${B?"वर और वधू की राशि एक किंतु नक्षत्र भिन्न होने से शास्त्रोक्त नाड़ी दोष परिहार पूर्णतः मान्य है।":Pt?"वर और वधू का नक्षत्र एक किंतु चरण भिन्न होने से शास्त्रोक्त नाड़ी दोष परिहार मान्य है।":"एक ही नाड़ी होने से विवाह पूर्व स्वर्ण-नाड़ी दान, गोदान, अन्नदान एवं सवा लाख महामृत्युंजय मंत्र जाप कराना अनिवार्य है।"}`:'<b style="color:#047857;">अंतिम नाड़ी निर्णय (पूर्णतः शुद्ध):</b> वर एवं वधू की नाड़ी भिन्न होने से <b>८/८ पूर्ण गुण</b> प्राप्त हैं — नाड़ी दोष पूर्णतः अनुपस्थित है तथा श्रेष्ठ संतान व आरोग्य योग है।'}
      </div>
    </div>

    ${C("१०. नवग्रह राशि-स्वामी मैत्री तुलना सारणी (9-Planet Graha Maitri Comparison Table)",`चन्द्र मैत्री: ${f} / 5`)}
    <table style="width: 100%; table-layout: fixed; border-collapse: collapse;">
      <thead>
        <tr style="background: #fdecc8;">
          <th style="padding: 3.5px 5px 6px 5px; border: 1px solid #b45309; color: #7c2d12; font-size: 8.2px; text-align: left; width: 13%;">ग्रह (Planet)</th>
          <th style="padding: 3.5px 5px 6px 5px; border: 1px solid #b45309; color: #7c2d12; font-size: 8.2px; text-align: left; width: 23.5%;">वर राशि एवं राशिपति</th>
          <th style="padding: 3.5px 5px 6px 5px; border: 1px solid #b45309; color: #7c2d12; font-size: 8.2px; text-align: left; width: 23.5%;">वधू राशि एवं राशिपति</th>
          <th style="padding: 3.5px 5px 6px 5px; border: 1px solid #b45309; color: #7c2d12; font-size: 8.2px; text-align: left; width: 20%;">परस्पर ग्रह मैत्री संबंध</th>
          <th style="padding: 3.5px 5px 6px 5px; border: 1px solid #b45309; color: #7c2d12; font-size: 8.2px; text-align: left; width: 20%;">दांपत्य समन्वय प्रभाव</th>
        </tr>
      </thead>
      <tbody>
        ${ke}
      </tbody>
    </table>
  `,Se=i.planets.map((d,A)=>{const M=e.planets[A],L=i.kpSystem?.planets?.find(wt=>wt.planet===d.hindiName)?.starLord||d.rashiLord,vt=e.kpSystem?.planets?.find(wt=>wt.planet===M?.hindiName)?.starLord||M?.rashiLord||"—";return`
        <tr style="background: ${A%2===0?"#fffdf9":"#fef7e6"};">
          <td class="pj-h2c-no-lift" style="padding: 4px 6px 6px 6px; border: 1px solid #d97706; color: #7c2d12; font-weight: 800; font-size: 8.3px; width: 14%; line-height: 1.46; font-family: 'Noto Sans Devanagari', 'Nirmala UI', 'Mangal', sans-serif; overflow: visible;">
            ${o(d.hindiName.normalize("NFC"))}
          </td>
          <td class="pj-h2c-no-lift" style="padding: 4px 6px 6px 6px; border: 1px solid #d97706; color: #1e293b; font-size: 8.1px; width: 21%; line-height: 1.46; font-family: 'Noto Sans Devanagari', 'Nirmala UI', 'Mangal', sans-serif; overflow: visible; direction: ltr; unicode-bidi: isolate;">
            ${Xt(d.rashiName,d.fullDegreeDMS)}<br/>
            ${ie(d,i)}
          </td>
          <td class="pj-h2c-no-lift" style="padding: 4px 6px 6px 6px; border: 1px solid #d97706; color: #047857; font-size: 8.1px; width: 22%; line-height: 1.46; font-family: 'Noto Sans Devanagari', 'Nirmala UI', 'Mangal', sans-serif; overflow: visible;">
            ${V(d.houseInLagna)} &bull; ${o(d.nakshatra.split(" ")[0].normalize("NFC"))} (च.${d.pada})<br/>
            <span style="color:#334155;font-size:7.6px;">नक्षत्रेश: ${o(L.normalize("NFC"))}</span>
          </td>
          <td class="pj-h2c-no-lift" style="padding: 4px 6px 6px 6px; border: 1px solid #d97706; color: #9a3412; font-size: 8.1px; width: 21%; line-height: 1.46; font-family: 'Noto Sans Devanagari', 'Nirmala UI', 'Mangal', sans-serif; overflow: visible; direction: ltr; unicode-bidi: isolate;">
            ${M?`${Xt(M.rashiName,M.fullDegreeDMS)}<br/>${ie(M,e)}`:"—"}
          </td>
          <td class="pj-h2c-no-lift" style="padding: 4px 6px 6px 6px; border: 1px solid #d97706; color: #be123c; font-size: 8.1px; width: 22%; line-height: 1.46; font-family: 'Noto Sans Devanagari', 'Nirmala UI', 'Mangal', sans-serif; overflow: visible;">
            ${M?`${V(M.houseInLagna)} &bull; ${o(M.nakshatra.split(" ")[0].normalize("NFC"))} (च.${M.pada})<br/><span style="color:#334155;font-size:7.6px;">नक्षत्रेश: ${o(vt.normalize("NFC"))}</span>`:"—"}
          </td>
        </tr>
      `}).join(""),Lt=n?.pariharChecks?.length?n.pariharChecks.map(d=>`<b>${o(U(d.doshaName))}:</b> ${o(U(d.status))}`).join(" &nbsp;|&nbsp; "):"",De=`
    ${O("वर एवं वधू की नवग्रह स्पष्ट स्थिति, मांगलिक परिहार व नवांश (D-9) तुलना","पृष्ठ ५ : नवग्रह एवं कुज तुलना",s,!0)}

    ${C("११. वर एवं वधू की संपूर्ण नवग्रह स्थिति तुलना सारणी (Groom vs Bride Planetary Placements)","नवग्रह भाव व नीचभंग जांच")}
    <table style="width: 100%; table-layout: fixed; border-collapse: collapse; margin-bottom: 7px; font-family: 'Noto Sans Devanagari', 'Nirmala UI', 'Mangal', sans-serif;">
      <thead>
        <tr style="background: #fdecc8;">
          <th style="padding: 3.5px 6px 6px 6px; border: 1px solid #b45309; color: #7c2d12; font-size: 8.3px; text-align: left; width: 14%;">ग्रह (Planet)</th>
          <th style="padding: 3.5px 6px 6px 6px; border: 1px solid #b45309; color: #7c2d12; font-size: 8.3px; text-align: left; width: 21%;">वर राशि, स्पष्ट अंश व बल</th>
          <th style="padding: 3.5px 6px 6px 6px; border: 1px solid #b45309; color: #7c2d12; font-size: 8.3px; text-align: left; width: 22%;">वर भाव एवं नक्षत्र (चरण)</th>
          <th style="padding: 3.5px 6px 6px 6px; border: 1px solid #b45309; color: #7c2d12; font-size: 8.3px; text-align: left; width: 21%;">वधू राशि, स्पष्ट अंश व बल</th>
          <th style="padding: 3.5px 6px 6px 6px; border: 1px solid #b45309; color: #7c2d12; font-size: 8.3px; text-align: left; width: 22%;">वधू भाव एवं नक्षत्र (चरण)</th>
        </tr>
      </thead>
      <tbody>
        ${Se}
      </tbody>
    </table>

    ${C("१२. द्विपक्षीय मांगलिक (कुज) दोष, शास्त्रोक्त परिहार एवं नवांश (D-9) क्रॉस-चेक",t.manglikStatus.manglikMatch?"कुज समन्वय शुभ":"मंगल परिहार विचारणीय")}
    <div style="background: #fffdf9; border: 1.5px solid #d97706; border-radius: 6px; padding: 6px 10px 8px 10px; font-size: 8px; color: #1e293b; line-height: 1.38;">
      <table style="width: 100%; table-layout: fixed; border-collapse: collapse; margin-bottom: 4px;">
        <tr style="background: #fef7e6;">
          <td class="pj-h2c-no-lift" style="padding: 3.5px 8px; border: 1px solid #d97706; width: 50%; vertical-align: top;">
            <b style="color:#7c2d12;">वर मांगलिक स्थिति:</b> <span style="color:${Tt};font-weight:800;">${o(U(t.manglikStatus.boySeverity))}</span><br/>
            <span style="color:#475569;font-size:7.6px;">लग्न: ${K(t.manglikStatus.boyMarsHouseLagna)}, चन्द्र: ${K(t.manglikStatus.boyMarsHouseMoon)}, शुक्र: ${K(xe)} भाव</span>
          </td>
          <td class="pj-h2c-no-lift" style="padding: 3.5px 8px; border: 1px solid #d97706; width: 50%; vertical-align: top;">
            <b style="color:#7c2d12;">वधू मांगलिक स्थिति:</b> <span style="color:${At};font-weight:800;">${o(U(t.manglikStatus.girlSeverity))}</span><br/>
            <span style="color:#475569;font-size:7.6px;">लग्न: ${K(t.manglikStatus.girlMarsHouseLagna)}, चन्द्र: ${K(t.manglikStatus.girlMarsHouseMoon)}, शुक्र: ${K(be)} भाव</span>
          </td>
        </tr>
      </table>
      <div class="pj-h2c-no-lift"><b style="color: #7c2d12;">&bull; मांगलिक व परिहार निर्णय:</b> ${o(U(t.manglikStatus.description))}</div>
      <div style="margin-top: 2px;"><b style="color: #7c2d12;">&bull; सप्तम भाव व गुरु-शुक्र बल:</b> ${o(t.planetaryHarmony.seventhHouseSummary)} &bull; ${o(t.planetaryHarmony.jupiterVenusSummary)}</div>
      ${Lt?`<div style="margin-top: 3px; background: #fef8ec; border-left: 3px solid #b45309; padding: 3px 6px; color: #7c2d12;"><b>शास्त्रोक्त परिहार सार:</b> ${Lt}</div>`:""}
      ${n?.navamshaCrossCheck?`<div style="margin-top: 2.5px;"><b style="color: #047857;">&bull; नवांश (D-9) व दशा संधि परीक्षण:</b> ${o(n.navamshaCrossCheck)}</div>`:""}
    </div>
  `,W=i.planets.find(d=>d.id==="jupiter"),G=e.planets.find(d=>d.id==="jupiter");i.planets.find(d=>d.id==="venus"),e.planets.find(d=>d.id==="venus");const ut=_(i,7),yt=_(e,7),lt=_(i,2),Et=_(e,2),Bt=_(i,4),_t=_(e,4),Ne=_(i,5),Pe=_(e,5),pt=_(i,11),ct=_(e,11),Me=!!W&&(W.isExalted||W.dignity.includes("स्वगृही")||W.dignity.includes("मित्र")||X("jupiter",i).isCancelled),ze=!!G&&(G.isExalted||G.dignity.includes("स्वगृही")||G.dignity.includes("मित्र")||X("jupiter",e).isCancelled),et=Number(($+f+x).toFixed(1)),it=Number((y+w).toFixed(1)),at=Number((m+h).toFixed(1)),E=[];h===7&&E.push("भकूट (7/7 पूर्ण शुभ)"),F===8&&E.push("नाड़ी (8/8 पूर्ण शुद्ध)"),m>=3&&E.push("तारा (3/3 श्रेष्ठ)"),(Me||ze)&&E.push("बली गुरु का शुभ संरक्षण"),st.score>=1&&E.push(`नवांश (D-9) समन्वय (${a.rashiName.split(" ")[0]}–${r.rashiName.split(" ")[0]})`),Y.score>=1&&E.push("लग्नेश मैत्री");const je=et>=9?`वर्ण (${$}/1), ग्रह मैत्री (${f}/5) एवं गण (${x}/6) का कुल योग श्रेष्ठ (${et}/12) है। वर-वधू के विचारों, जीवन-दृष्टि एवं निर्णय-शैली में सहज तालमेल, आदर व प्रगाढ़ मानसिक संतुलन रहेगा।`:et>=4?`वर्ण (${$}/1), ग्रह मैत्री (${f}/5) एवं गण (${x}/6) का योग मध्यम (${et}/12) है। कुछ विषयों में दृष्टिकोण भिन्न हो सकता है, किंतु शांत संवाद, आपसी सम्मान और ${E.length>0?E.slice(0,2).join(" व "):"धैर्य"} के सहारे सुदृढ़ समझ विकसित होगी।`:`वर्ण (${$}/1), ग्रह मैत्री (${f}/5) एवं गण (${x}/6) का योग न्यून (${et}/12) होने से विवाह के प्रारंभिक वर्षों में स्वभाव, प्राथमिकताओं व निर्णय-शैली में वैचारिक भिन्नता स्पष्ट रूप से रह सकती है। ${E.length>0?`सकारात्मक पक्ष यह है कि ${E.slice(0,3).join(", ")} इस रिश्ते को दीर्घकालिक स्थिरता प्रदान कर रहे हैं। `:""}अहंकार व त्वरित प्रतिक्रिया से बचकर खुले संवाद को प्राथमिकता देना इस विवाह की कुंजी रहेगी।`,Te=it>=4.5?`वश्य (${y}/2) व योनि (${w}/4) का योग प्रबल (${it}/6) है तथा वर सप्तमेश ${ut.label} व वधू सप्तमेश ${yt.label} से दांपत्य में गहरा आकर्षण, भावनात्मक जुड़ाव एवं निष्ठा रहेगी।`:it>=2.5?`वश्य (${y}/2) व योनि (${w}/4) का योग संतुलित (${it}/6) है। वर सप्तमेश ${ut.lordHi} व वधू सप्तमेश ${yt.lordHi} के समन्वय से समय के साथ स्नेह, विश्वास व दांपत्य सहजता उत्तरोत्तर बढ़ेगी।`:`वश्य (${y}/2) व योनि (${w}/4) का योग न्यून (${it}/6) है, अतः भावनात्मक व शारीरिक सामंजस्य विकसित होने में प्रारंभिक धैर्य आवश्यक रहेगा। नवांश लग्न (${a.rashiName.split(" ")[0]}–${r.rashiName.split(" ")[0]}) और एक-दूसरे की भावनाओं के प्रति संवेदनशीलता से दांपत्य सुदृढ़ होगा।`,Ae=at>=8.5?`तारा (${m}/3) व भकूट (${h}/7) का प्रभाव अत्यंत शुभ (${at}/10) है। विवाह पश्चात् संयुक्त भाग्योदय, आय में वृद्धि, संपत्ति-वाहन सुख तथा करियर में उल्लेखनीय उन्नति के प्रबल योग हैं।`:at>=5?`तारा (${m}/3) व भकूट (${h}/7) का योग मध्यम-शुभ (${at}/10) है। अनुशासित आर्थिक नियोजन और ${pt.isStrong||ct.isStrong?"मजबूत एकादश भाव":"परस्पर सहयोग"} से विवाह उपरांत क्रमिक समृद्धि व स्थिरता प्राप्त होगी।`:`तारा (${m}/3) व भकूट (${h}/7) का योग न्यून (${at}/10) होने से आर्थिक निर्णयों व निवेश में जल्दबाजी से बचें। संयुक्त बजट अनुशासन तथा श्री लक्ष्मीनारायण पूजन से आर्थिक स्थिरता सुनिश्चित होगी।`,He=f>=4?`राशि स्वामियों (${t.boyRashiLord} एवं ${t.girlRashiLord}, मैत्री ${f}/5) में उत्तम मित्रता से दोनों परिवारों के मध्य सहज सौहार्द, मान-सम्मान एवं मांगलिक वातावरण बना रहेगा।`:f>=2.5||Y.score>=1?`राशि मैत्री (${f}/5) मध्यम है, किंतु ${Y.score>=1?`लग्नेश (${i.panchang.lagnaLord}–${e.panchang.lagnaLord}) की शुभ मित्रता`:"वर-वधू के चतुर्थ भाव संतुलन"} से ससुराल व पारिवारिक संबंध संतुलित एवं सम्मानजनक रहेंगे।`:`राशि स्वामियों (${t.boyRashiLord}–${t.girlRashiLord}, मैत्री ${f}/5) में वैचारिक अंतर होने से दोनों परिवारों की जीवनशैली व अपेक्षाओं में प्रारंभिक भिन्नता संभव है। विनम्र वाणी, बड़ों के सम्मान और पारिवारिक मामलों में संतुलित सीमाओं से घर में शांति बनी रहेगी।`,It=n?.extendedKoots?.find(d=>d.name.includes("महेन्द्र"))?.status==="शुभ",Ce=F===8?`नाड़ी कूट पूर्णतः शुद्ध (8/8)${It?" एवं महेन्द्र कूट सिद्ध":""} होने के साथ वर के गुरु (${nt(W,i)}) व वधू के गुरु (${nt(G,e)}) की स्थिति स्वस्थ, तेजस्वी संतान सुख एवं दीर्घायु आरोग्य का प्रबल संकेत देती है।`:tt?"नाड़ी अंक 0/8 होने पर भी शास्त्रोक्त नाड़ी परिहार लागू है। संतान व आरोग्य पक्ष संतुलित रहेगा; सामान्य स्वास्थ्य सतर्कता, गुरु कृपा एवं गौरी-शंकर आराधना से उत्तम संतान सुख प्राप्त होगा।":"समान नाड़ी दोष (0/8) सक्रिय होने से संतान व स्वास्थ्य पक्ष के प्रति विशेष सजगता आवश्यक है। विवाह पूर्व शास्त्रोक्त नाड़ी शांति, महामृत्युंजय अनुष्ठान तथा आधुनिक चिकित्सकीय परामर्श अवश्य लें।",T=new ti(`milan|${t.boyDob}|${t.girlDob}|${t.totalScore}`);T.register(t.manglikStatus.description||""),T.register(t.verdictDescription||"");const Le=[["१. मानसिक एवं वैचारिक सामंजस्य (Mental & Temperament Harmony)",T.deduplicateParagraph(je,"milan","p1")],["२. दांपत्य प्रेम एवं सप्तम भाव/नवांश बल (Marital Intimacy & Bond)",T.deduplicateParagraph(Te,"milan","p2")],["३. विवाहोपरांत भाग्योदय एवं आर्थिक समृद्धि (Post-Marriage Fortune)",T.deduplicateParagraph(Ae,"milan","p3")],["४. पारिवारिक समरसता एवं कुटुम्ब सौख्य (Family & In-Laws Harmony)",T.deduplicateParagraph(He,"milan","p4")],["५. संतान सुख, वंश वृद्धि एवं आरोग्य (Progeny & Vitality)",T.deduplicateParagraph(Ce,"milan","p5")]].map(d=>`
      <div style="background: #fffdf9; border: 1px solid #d97706; border-radius: 5px; padding: 4px 8px 6px 8px; margin-bottom: 4.5px;">
        <div style="font-size: 8.5px; font-weight: 800; color: #7c2d12;">${o(d[0])}</div>
        <div style="font-size: 8px; color: #1e293b; line-height: 1.34;">${o(d[1])}</div>
      </div>
    `).join("");T.register("विवाह पूर्व वर-वधू के नाम से भगवान शिव-पार्वती का रुद्राभिषेक एवं श्री लक्ष्मीनारायण पूजन कराने से अखंड सौभाग्य प्राप्त होता है।");const Ut=(()=>{const d=[];return P&&!tt&&d.push("नाड़ी दोष शांति हेतु महामृत्युंजय मंत्र जाप व स्वर्ण-नाड़ी दान कराएं।"),j&&!q&&d.push("भकूट शांति हेतु श्री लक्ष्मीनारायण हवन एवं राशि स्वामियों का जप कराएं।"),D&&!q&&d.push("गण भिन्नता के सामंजस्य हेतु गणपति अथर्वशीर्ष पाठ एवं शिव-पार्वती पूजन करें।"),t.manglikStatus.manglikMatch||d.push("सक्रिय मांगलिक प्रभाव हेतु कुंभ/पीपल विवाह व मंगल चंडिका शांति कराएं।"),d.length===0?"सभी प्रमुख कूट एवं मांगलिक परिहार अनुकूल हैं; विवाह पूर्व गणपति एवं कुलदेवता पूजन पर्याप्त है।":d.join(" ")})();T.register(Ut);const Ee=(()=>{const d=(n?.practicalRemedies||[]).filter(M=>{const L=M.trim();return!(!L||L.includes("रुद्राभिषेक")||P&&!tt&&L.includes("नाड़ी दोष")||j&&!q&&L.includes("भकूट दोष")||D&&!q&&L.includes("गण भिन्नता")||!t.manglikStatus.manglikMatch&&L.includes("कुंभ विवाह"))}),A=T.deduplicateBullets(d,"milan","sec15");return A.length===1&&A.push(T.claimFromBank("milan",Math.round(t.totalScore)%12,"sec15-extra")),A.slice(0,3)})().map((d,A)=>`<div><b style="color:#7c2d12;">${A+1}.</b> ${o(d)}</div>`).join(""),Be=`
    ${O("वैवाहिक भविष्यफल, शुभ विवाह मुहूर्त मार्गदर्शिका एवं वैदिक पूजा विधान","पृष्ठ ६ : फलित, मुहूर्त व उपाय",s,!0)}

    ${C("१३. पंच-स्तरीय यथार्थ वैवाहिक जीवन भविष्यफल (5-Pillar Matrimonial Predictions)","अंक व ग्रह बल आधारित फलित")}
    <div style="margin-bottom: 6px;">
      ${Le}
    </div>

    ${C("१४. शुभ विवाह मुहूर्त एवं दीर्घायु निष्कर्ष (Marriage Timing & Muhurat Guidelines)","लग्न एवं तारा शुद्धि")}
    <table style="width: 100%; table-layout: fixed; border-collapse: collapse; margin-bottom: 6px; font-size: 8.1px;">
      <tbody>
        <tr style="background: #fffdf9;">
          <td style="padding: 3.5px 7px 5.5px 7px; border: 1px solid #d97706; color: #7c2d12; font-weight: 800; width: 26%;">शुभ सौर मास एवं नक्षत्र</td>
          <td style="padding: 3.5px 7px 5.5px 7px; border: 1px solid #d97706; color: #1e293b; width: 74%;">रोहिणी, मृगशिरा, मघा, उत्तराफाल्गुनी, हस्त, स्वाति, अनुराधा, मूल, उत्तराषाढ़ा, उत्तराभाद्रपद एवं रेवती नक्षत्र विवाह हेतु सर्वश्रेष्ठ हैं।</td>
        </tr>
        <tr style="background: #fef7e6;">
          <td style="padding: 3.5px 7px 5.5px 7px; border: 1px solid #d97706; color: #7c2d12; font-weight: 800;">त्रिबल शुद्धि व विवाह लग्न</td>
          <td style="padding: 3.5px 7px 5.5px 7px; border: 1px solid #d97706; color: #047857; font-weight: 700;">वर लग्न (${o(t.boyLagna)}) व वधू लग्न (${o(t.girlLagna)}) से अष्टम शुद्धि सहित शुभ गोधूलि/अभिजित लग्न चुनें।</td>
        </tr>
        ${n?.marriageTimingAndLongevity?`<tr style="background: #fffdf9;">
                <td style="padding: 3.5px 7px 5.5px 7px; border: 1px solid #d97706; color: #7c2d12; font-weight: 800;">संबंध स्थिरता व समय सार</td>
                <td style="padding: 3.5px 7px 5.5px 7px; border: 1px solid #d97706; color: #1e293b;">${o(n.marriageTimingAndLongevity)}</td>
              </tr>`:""}
      </tbody>
    </table>

    ${C("१५. सुखी दांपत्य हेतु शास्त्रोक्त वैदिक पूजा एवं सरल उपाय (Remedial Suggestions)","मंगलमय गृहस्थ कवच")}
    <table style="width: 100%; table-layout: fixed; border-collapse: collapse; font-size: 8.1px;">
      <tbody>
        <tr style="background: #fffdf9;">
          <td style="padding: 3.5px 7px 5.5px 7px; border: 1px solid #d97706; color: #7c2d12; font-weight: 800; width: 26%;">१. गौरी-शंकर एवं रुद्राभिषेक</td>
          <td style="padding: 3.5px 7px 5.5px 7px; border: 1px solid #d97706; color: #1e293b; width: 74%;">विवाह पूर्व वर-वधू के नाम से भगवान शिव-पार्वती का रुद्राभिषेक एवं श्री लक्ष्मीनारायण पूजन कराने से अखंड सौभाग्य प्राप्त होता है।</td>
        </tr>
        <tr style="background: #fef7e6;">
          <td style="padding: 3.5px 7px 5.5px 7px; border: 1px solid #d97706; color: #7c2d12; font-weight: 800;">२. विशेष दोष निवारण विधान</td>
          <td style="padding: 3.5px 7px 5.5px 7px; border: 1px solid #d97706; color: #9a3412; font-weight: 600;">${o(Ut)}</td>
        </tr>
        <tr style="background: #fffdf9;">
          <td style="padding: 3.5px 7px 5.5px 7px; border: 1px solid #d97706; color: #7c2d12; font-weight: 800;">३. व्यावहारिक व वैदिक उपाय</td>
          <td style="padding: 3.5px 7px 5.5px 7px; border: 1px solid #d97706; color: #047857; font-weight: 600; line-height: 1.35;">${Ee}</td>
        </tr>
      </tbody>
    </table>
  `,Yt=li(i,e),_e=f+x+y>=9?{badge:"अत्यंत शुभ तालमेल",color:"#047857",bg:"#ecfdf5"}:f+x+y>=5?{badge:"संतुलित — संवाद से श्रेष्ठ",color:"#b45309",bg:"#fffbeb"}:{badge:"प्रारंभिक प्रयास व धैर्य अपेक्षित",color:"#be123c",bg:"#fff1f2"},Ie=f+x+y>=9?`वर की चन्द्र राशि ${t.boyRashi.split(" ")[0]} व वधू की ${t.girlRashi.split(" ")[0]} है; ग्रह मैत्री (${f}/5), गण (${x}/6) व वश्य (${y}/2) तीनों प्रबल हैं। दोनों के बीच सहज भावनात्मक समझ, प्रेम और विचारों की स्पष्ट एकरूपता रहेगी।`:f+x+y>=5?`ग्रह मैत्री (${f}/5), गण (${x}/6) व वश्य (${y}/2) का योग मध्यम है। कुछ निर्णयों में दृष्टिकोण भिन्न हो सकते हैं, किंतु सम्मानजनक संवाद और धैर्य से समय के साथ मजबूत मानसिक जुड़ाव स्थापित होगा।`:`वर (${t.boyRashi.split(" ")[0]}) व वधू (${t.girlRashi.split(" ")[0]}) की ग्रह मैत्री (${f}/5), गण (${x}/6) व वश्य (${y}/2) न्यून होने से प्रारंभिक वर्षों में स्वभाव व सोचने के ढंग में अंतर स्पष्ट रहेगा। ${E.length>0?`${E.slice(0,2).join(" व ")} इस रिश्ते को मजबूत आधार दे रहे हैं — `:""}अहंकार छोड़ने और शांत संवाद रखने से गृहस्थ जीवन सुखमय बनेगा।`,Ue=h===7&&(lt.isStrong||Et.isStrong||pt.isStrong||ct.isStrong)?{badge:"उत्तम आर्थिक भाग्योदय",color:"#047857",bg:"#ecfdf5"}:h===7||pt.isStrong||ct.isStrong?{badge:"क्रमिक व स्थिर उन्नति",color:"#b45309",bg:"#fffbeb"}:{badge:"नियोजित प्रबंधन आवश्यक",color:"#be123c",bg:"#fff1f2"},Ye=`भकूट कूट (${h}/7), वर के द्वितीयेश ${lt.lordHi} (${lt.lordPlanet?V(lt.lordPlanet.houseInLagna):"शुभ"}) व एकादशेश ${pt.lordHi} तथा वधू के द्वितीयेश ${Et.lordHi} व एकादशेश ${ct.lordHi} के अनुसार ${h===7?"विवाह के पश्चात् संयुक्त आय, करियर स्थायित्व और बचत-संपत्ति में स्पष्ट वृद्धि होगी। दोनों के सहयोग से आर्थिक लक्ष्य आसानी से पूर्ण होंगे।":"धन-संचय व निवेश में पारदर्शी संयुक्त योजना बनाना आवश्यक रहेगा; भकूट परिहार/लक्ष्मीनारायण पूजन से आर्थिक स्थिरता दृढ़ होगी।"}`,Oe=F===8?{badge:"पूर्ण अनुकूल व आरोग्यप्रद",color:"#047857",bg:"#ecfdf5"}:tt?{badge:"परिहार सहित संतुलित",color:"#b45309",bg:"#fffbeb"}:{badge:"नाड़ी शांति अनिवार्य",color:"#be123c",bg:"#fff1f2"},Re=`नाड़ी कूट (${F}/8), महेन्द्र कूट (${It?"शुभ/सिद्ध":"सामान्य"}), वर पंचमेश ${Ne.lordHi} व वधू पंचमेश ${Pe.lordHi} तथा गुरु बल (वर: ${nt(W,i)}, वधू: ${nt(G,e)}) से स्पष्ट है कि ${F===8?"जैविक अनुकूलता, स्वास्थ्य रक्षा एवं स्वस्थ-बुद्धिमान संतान सुख के श्रेष्ठ योग बने हुए हैं।":tt?"नाड़ी परिहार उपलब्ध होने से स्वास्थ्य व संतान पक्ष सुरक्षित रहेगा; गुरु कृपा से सुखद संतान प्राप्ति होगी।":"एक नाड़ी दोष होने से विवाह पूर्व महामृत्युंजय जप, स्वर्ण-नाड़ी दान और स्वास्थ्य जांच कराना अनिवार्य है।"}`,qe=t.manglikStatus.manglikMatch?{badge:"मांगलिक सुरक्षित व स्थायी",color:"#047857",bg:"#ecfdf5"}:{badge:"मंगल शांति अपेक्षित",color:"#be123c",bg:"#fff1f2"},We=U(`वर (${t.manglikStatus.boySeverity}) एवं वधू (${t.manglikStatus.girlSeverity}) के साथ वर सप्तमेश ${ut.label}, वधू सप्तमेश ${yt.label} तथा नवांश लग्न (${a.rashiName.split(" ")[0]} व ${r.rashiName.split(" ")[0]} — ${st.relation.split("(")[0].trim()}) के परीक्षण से ${t.manglikStatus.manglikMatch?"मांगलिक दोष की कोई बाधा नहीं है (परिहार सिद्ध/दोष-मुक्त) तथा दीर्घकालिक वैवाहिक स्थायित्व सुदृढ़ है।":"एकपक्षीय सक्रिय मंगल हेतु विवाह पूर्व कुंभ/पीपल विवाह व मंगल शांति कराने के पश्चात् वैवाहिक स्थायित्व सुरक्षित होगा।"}`),Ge=Y.score>=1&&(Bt.isStrong||_t.isStrong)?{badge:"मधुर व सम्मानजनक संबंध",color:"#047857",bg:"#ecfdf5"}:Y.score>=0||f>=3?{badge:"संतुलित पारिवारिक तालमेल",color:"#b45309",bg:"#fffbeb"}:{badge:"संवेदनशील संवाद अपेक्षित",color:"#be123c",bg:"#fff1f2"},Ve=`वर लग्नेश ${i.panchang.lagnaLord} व वधू लग्नेश ${e.panchang.lagnaLord} (${Y.relation.split("(")[0].trim()}), चतुर्थ भाव स्वामी (${Bt.lordHi}/${_t.lordHi}) एवं द्वितीय भाव कुटुम्ब योग के अनुसार ${Y.score>=1?"ससुराल पक्ष व दोनों परिवारों में परस्पर सम्मान, आत्मीयता और सुखद पारिवारिक सहयोग बना रहेगा।":"दोनों परिवारों की परंपरा व स्वभाव में हल्का अंतर रह सकता है; मधुर वाणी, बड़ों के आदर और स्पष्ट संवाद से पारिवारिक सौहार्द सदैव बना रहेगा।"}`,Ke={badge:Yt.windowText,color:"#047857",bg:"#ecfdf5"},Xe=Yt.detailText,Je=[{q:"प्रश्न 1: आपसी तालमेल और मानसिक समझ कैसी रहेगी?",status:_e,a:T.deduplicateParagraph(Ie,"milan","qa1")},{q:"प्रश्न 2: करियर और आर्थिक भाग्योदय कैसा रहेगा?",status:Ue,a:T.deduplicateParagraph(Ye,"finance","qa2")},{q:"प्रश्न 3: संतान सुख और स्वास्थ्य अनुकूलता कैसी है?",status:Oe,a:T.deduplicateParagraph(Re,"health","qa3")},{q:"प्रश्न 4: मांगलिक स्थिति और वैवाहिक स्थायित्व कैसा है?",status:qe,a:T.deduplicateParagraph(We,"milan","qa4")},{q:"प्रश्न 5: ससुराल व पारिवारिक संबंध कैसे रहेंगे?",status:Ge,a:T.deduplicateParagraph(Ve,"family","qa5")},{q:"प्रश्न 6: विवाह के बाद सबसे शुभ समय कब शुरू होगा?",status:Ke,a:T.deduplicateParagraph(Xe,"dasha","qa6")}].map(d=>`
      <div style="background: #fffdf9; border: 1.4px solid #d97706; border-radius: 6px; padding: 6px 10px 7.5px 10px; margin-bottom: 6.5px;">
        <table style="width: 100%; table-layout: fixed; border-collapse: collapse; margin-bottom: 3px;">
          <tr>
            <td style="width: 67%; font-size: 9px; font-weight: 900; color: #7c2d12; vertical-align: middle;">${o(d.q)}</td>
            <td style="width: 33%; text-align: right; vertical-align: middle;">
              <span class="milan-status-pill" style="display: inline-flex; align-items: center; justify-content: center; line-height: 1.1; vertical-align: middle; text-align: center; background: ${d.status.bg}; border: 1px solid ${d.status.color}; color: ${d.status.color}; border-radius: 4px; padding: 3px 10px 5px 10px; font-size: 7.7px; font-weight: 800; box-sizing: border-box;">${o(d.status.badge)}</span>
            </td>
          </tr>
        </table>
        <div style="font-size: 8.2px; color: #1e293b; line-height: 1.42;">${o(d.a)}</div>
      </div>
    `).join(""),Qe=`
    ${O("वर-वधू के 6 प्रमुख वैवाहिक सवालों के सीधे, सरल एवं शास्त्रोक्त जवाब","पृष्ठ 7 : वैवाहिक प्रश्नोत्तरी (Q&A)",s,!0)}

    ${C("16. वर-वधू के 6 प्रमुख वैवाहिक सवालों के सीधे जवाब (Direct Marriage Q&A)","कुंडली व दशा आधारित सटीक उत्तर")}
    <div style="margin-bottom: 10px;">
      ${Je}
    </div>

    <div style="background: linear-gradient(90deg, #fff6e0 0%, #fde8bf 100%); border: 2px double #b45309; border-radius: 7px; padding: 8px 12px; display: flex; align-items: center; justify-content: space-between; gap: 12px;">
      <div style="flex: 1; min-width: 0; text-align: left;">
        <div style="font-size: 10px; font-weight: 900; color: #7c2d12; margin-bottom: 2.5px;">
          ॥ शुभं भवतु ॥ &bull; ${o(z.appName)} &bull; ${o(z.guideName)}
        </div>
        <div style="font-size: 8.1px; color: #1e293b; line-height: 1.4; font-weight: 600;">
          शुद्ध विवाह मुहूर्त निर्धारण, कुम्भ/विष्णु विवाह, नाड़ी-भकूट शांति अनुष्ठान व वैदिक विवाह संस्कार हेतु संपर्क करें — स्थान: ${o(z.guideAddress)}
        </div>
        <div style="font-size: 8.7px; font-weight: 900; color: #047857; margin-top: 3px;">
          संपर्क / WhatsApp: ${o(z.contactPhone)} &bull; वेबसाइट: ${o(z.websiteFull)} &bull; Email: ${o(z.email)}
        </div>
      </div>
      <div style="flex-shrink: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; background: #FFFFFF; border: 1.6px solid #b45309; border-radius: 7px; padding: 4px; width: 76px; text-align: center;">
        ${Q(v.website,62,"#0F172A","#FFFFFF")}
        <div style="font-size: 6.8px; font-weight: 800; color: #7c2d12; margin-top: 2px; line-height: 1.15;">स्कैन करें</div>
      </div>
    </div>
  `;return[fe,ue,$e,Fe,De,Be,Qe]}let ht=null;function oe(t,i=5e3){return new Promise((e,n)=>{const a=document.querySelector(`script[src="${t}"]`);if(a){if(a.__loaded){e();return}if(a.__failed)a.remove();else{const l=window.setTimeout(()=>{n(new Error(`Timeout loading ${t}`))},i);a.addEventListener("load",()=>{window.clearTimeout(l),e()},{once:!0}),a.addEventListener("error",()=>{window.clearTimeout(l),n(new Error(`Failed to load ${t}`))},{once:!0});return}}const r=document.createElement("script");r.src=t,r.async=!0;const s=window.setTimeout(()=>{r.__failed=!0,r.remove(),n(new Error(`Timeout loading ${t}`))},i);r.onload=()=>{window.clearTimeout(s),r.__loaded=!0,e()},r.onerror=()=>{window.clearTimeout(s),r.__failed=!0,r.remove(),n(new Error(`Failed to load ${t}`))},document.head.appendChild(r)})}async function re(){const t=window;return(t.jspdf?.jsPDF||t.jsPDF)&&t.html2canvas?{jsPDF:t.jspdf?.jsPDF||t.jsPDF,html2canvas:t.html2canvas}:(ht||(ht=(async()=>{try{try{const[e,n]=await Promise.all([Rt(()=>import("./jspdf.es.min-EKeAfboT.js").then(s=>s.j),Ot([0,1])),Rt(()=>import("./html2canvas.esm-DWZSdXKi.js"),[])]),a=e?.jsPDF||e?.default?.jsPDF||e?.default,r=n?.default||n;if(typeof a=="function"&&typeof r=="function")return{jsPDF:a,html2canvas:r}}catch{}const i=[["https://cdn.jsdelivr.net/npm/jspdf@2.5.2/dist/jspdf.umd.min.js","https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js"],["https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js","https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"],["https://unpkg.com/jspdf@2.5.2/dist/jspdf.umd.min.js","https://unpkg.com/html2canvas@1.4.1/dist/html2canvas.min.js"]];for(const[e,n]of i)try{const a=[];t.jspdf?.jsPDF||t.jsPDF||a.push(oe(e)),t.html2canvas||a.push(oe(n)),a.length>0&&await Promise.all(a);const r=t.jspdf?.jsPDF||t.jsPDF,s=t.html2canvas;if(typeof r=="function"&&typeof s=="function")return{jsPDF:r,html2canvas:s}}catch{}throw new Error("PDF libraries did not initialize")}catch(i){throw ht=null,i}})()),ht)}const z={appName:"पण्डित जी ऑनलाइन (Pandit Ji Online)",guideTitle:"मुख्य ज्योतिषाचार्य एवं संस्थापक:",guideName:"आचार्य पण्डित शशांक शर्मा (वैदिक पुरोहित एवं ज्योतिषाचार्य)",guideAddress:"रुद्रपुर, ऊधम सिंह नगर, उत्तराखण्ड (भारत)",contactPhone:"+91 7017279043",website:"www.panditjionline.online",websiteFull:"https://www.panditjionline.online",email:"internetwebhelp24@gmail.com"};function o(t){return ei(String(t??"")).normalize("NFC").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}const ne={अ:"a",आ:"aa",इ:"i",ई:"ee",उ:"u",ऊ:"oo",ऋ:"ri",ए:"e",ऐ:"ai",ओ:"o",औ:"au",क:"k",ख:"kh",ग:"g",घ:"gh",च:"ch",छ:"chh",ज:"j",झ:"jh",ट:"t",ठ:"th",ड:"d",ढ:"dh",ण:"n",त:"t",थ:"th",द:"d",ध:"dh",न:"n",प:"p",फ:"ph",ब:"b",भ:"bh",म:"m",य:"y",र:"r",ल:"l",व:"v",श:"sh",ष:"sh",स:"s",ह:"h","ा":"a","ि":"i","ी":"ee","ु":"u","ू":"oo","ृ":"ri","े":"e","ै":"ai","ो":"o","ौ":"au","ं":"n","ँ":"n","ः":"h","्":"","०":"0","१":"1","२":"2","३":"3","४":"4","५":"5","६":"6","७":"7","८":"8","९":"9"};function dt(t){const i=String(t||"Yajman").trim();let e="";for(const a of i)ne[a]!==void 0?e+=ne[a]:/[A-Za-z0-9_.-]/.test(a)?e+=a:/\s/.test(a)&&(e+="_");return e.replace(/_+/g,"_").replace(/^_+|_+$/g,"")||"Yajman"}const de=[{name:"प्रथम (तनु/लग्न भाव)",karaka:"सूर्य (देह, व्यक्तित्व, आयु, यश)"},{name:"द्वितीय (धन/कुटुम्ब भाव)",karaka:"गुरु (संचित धन, वाणी, परिवार)"},{name:"तृतीय (सहज/पराक्रम भाव)",karaka:"मंगल (साहस, छोटे भाई-बहन, पुरुषार्थ)"},{name:"चतुर्थ (सुख/मातृ भाव)",karaka:"चन्द्र/बुध (माता, भूमि, भवन, वाहन)"},{name:"पंचम (संतान/विद्या भाव)",karaka:"गुरु (शिक्षा, बुद्धि, संतान, पूर्वपुण्य)"},{name:"षष्ठ (रिपु/रोग भाव)",karaka:"मंगल/शनि (रोग, ऋण, शत्रु, प्रतिस्पर्धा)"},{name:"सप्तम (जाया/विवाह भाव)",karaka:"शुक्र (जीवनसाथी, वैवाहिक सुख, व्यापार)"},{name:"अष्टम (आयु/मृत्यु भाव)",karaka:"शनि (दीर्घायु, गुप्त विद्या, आकस्मिक घटना)"},{name:"नवम (भाग्य/धर्म भाव)",karaka:"गुरु/सूर्य (भाग्य, धर्म, गुरु, तीर्थयात्रा)"},{name:"दशम (कर्म/राज्य भाव)",karaka:"सूर्य/बुध/गुरु/शनि (आजीविका, पद-प्रतिष्ठा, पिता)"},{name:"एकादश (लाभ/आय भाव)",karaka:"गुरु (आय, मनोकामना पूर्ति, ज्येष्ठ भ्राता)"},{name:"द्वादश (व्यय/मोक्ष भाव)",karaka:"शनि/केतु (व्यय, विदेश यात्रा, मोक्ष, शैया सुख)"}],se={1:"मंगल",2:"शुक्र",3:"बुध",4:"चन्द्र",5:"सूर्य",6:"बुध",7:"शुक्र",8:"मंगल",9:"गुरु",10:"शनि",11:"शनि",12:"गुरु"};function Nt(t){const i=(t%30+30)%30,e=Math.floor(i),n=(i-e)*60,a=Math.floor(n),r=Math.round((n-a)*60);return`${String(e).padStart(2,"0")}° ${String(a).padStart(2,"0")}′ ${String(Math.min(59,r)).padStart(2,"0")}″`}function pi(t){const i=t.phase1Astronomy?.sripatiBhavas;if(i&&i.length===12)return i.map((a,r)=>{const s=de[r]||{name:`भाव ${a.houseNumber}`,karaka:"सामान्य"},l=t.planets.filter(c=>a.occupantIds.includes(c.id)),p=l.length>0?l.map(c=>`${c.hindiName} (${c.degInt}°)`).join(", "):"— (भाव रिक्त)";return{houseNumber:a.houseNumber,bhavaName:s.name,significator:s.karaka,rashiName:`${a.madhyaRashiNameHi} (${a.madhyaRashiNumber})`,rashiLord:se[a.madhyaRashiNumber]||"गुरु",madhyaDMS:a.madhyaDMS,sandhiStartDMS:a.sandhiStartDMS,sandhiEndDMS:a.sandhiEndDMS,planets:p}});const e=t.panchang.lagnaDegreeDMS.match(/(\d+)°\s*(\d+)/),n=e?parseInt(e[1],10)+parseInt(e[2],10)/60:t.panchang.lagnaDegInt||15.25;return t.lagnaChart.map((a,r)=>{const s=de[r]||{name:`भाव ${a.houseNumber}`,karaka:"सामान्य"},l=(n%30+30)%30,p=((l-15)%30+30)%30,c=((l+15)%30+30)%30,g=a.planets&&a.planets.length>0?a.planets.map(b=>`${b.hindiName} (${b.degInt}°)`).join(", "):"— (भाव रिक्त)";return{houseNumber:a.houseNumber,bhavaName:s.name,significator:s.karaka,rashiName:`${a.rashiName} (${a.rashiNumber})`,rashiLord:se[a.rashiNumber]||"गुरु",madhyaDMS:Nt(l),sandhiStartDMS:Nt(p),sandhiEndDMS:Nt(c),planets:g}})}function ci(t,i){if(i)return i.planets.map(r=>{const s=t.find(p=>p.id===r.id);let l="बली (Strong)";return r.gradeHi.includes("अति बली")?l="अति बली (Exalted/Strong)":r.gradeHi.includes("बली")?l="बली (Strong)":r.gradeHi.includes("मध्यम")?l="मध्यम (Moderate)":l="निर्बल (Needs Remedy)",{planet:s?.hindiName||r.hindiName,englishName:r.englishName,sthanaBala:Math.round(r.sthanaBala.total),digBala:Math.round(r.digBala),cheshtaBala:Math.round(r.cheshtaBala),naisargikaBala:Math.round(r.naisargikaBala),kalaBala:Math.round(r.kalaBala.total),drikBala:Math.round(r.drikBala),totalVirupas:Math.round(r.totalVirupas),totalRupas:`${r.totalRupas.toFixed(2)} रूप`,requiredRupas:`${r.requiredRupas.toFixed(2)} रूप`,strengthPct:Math.min(100,r.strengthPct),grade:l,remedyHint:r.remedyHintHi}});const e={सूर्य:60,चंद्र:51.4,चन्द्र:51.4,शुक्र:42.9,गुरु:34.3,बुध:25.7,मंगल:17.1,शनि:8.6,राहु:30,केतु:30},n={सूर्य:"6.50 रूप",चंद्र:"6.00 रूप",चन्द्र:"6.00 रूप",मंगल:"5.00 रूप",बुध:"7.00 रूप",गुरु:"6.50 रूप",शुक्र:"5.50 रूप",शनि:"5.00 रूप",राहु:"5.00 रूप",केतु:"5.00 रूप"},a={गुरु:1,बुध:1,सूर्य:10,मंगल:10,शनि:7,चंद्र:4,चन्द्र:4,शुक्र:4,राहु:10,केतु:4};return t.map(r=>{let s=135;r.dignity.includes("उच्च")?s=195:r.dignity.includes("स्वगृही")?s=176:r.dignity.includes("मित्र")?s=154:r.dignity.includes("सम")?s=132:r.dignity.includes("शत्रु")?s=108:r.dignity.includes("नीच")&&(s=86);const l=a[r.hindiName]||1,p=Math.min(Math.abs(r.houseInLagna-l),12-Math.abs(r.houseInLagna-l)),c=Math.round(60-p*8.5),g=r.isRetrograde?54:r.isCombust?22:42,b=e[r.hindiName]||30,u=92+r.pada*6,N=[1,4,5,7,9,10,11].includes(r.houseInLagna)?24:14,S=Math.round(s+c+g+b+u+N),$=(S/60).toFixed(2),y=Math.min(99,Math.max(42,Math.round(S/440*100)));let m="बली (Strong)",w="शुभ फलप्रद स्थिति — नित्य इष्ट स्मरण पर्याप्त";return y>=84?(m="अति बली (Exalted/Strong)",w="पूर्ण राजयोगकारी बल — श्रेष्ठ नेतृत्व एवं उन्नति"):y>=68?(m="बली (Strong)",w="अनुकूल ग्रह बल — कार्यसिद्धि एवं स्थिर प्रगति"):y>=55?(m="मध्यम (Moderate)",w=`${r.hindiName} के बीज मंत्र का नित्य १०८ जप शुभदायी`):(m="निर्बल (Needs Remedy)",w=`${r.hindiName} शांति दान एवं वैदिक जप अनुष्ठान आवश्यक`),{planet:r.hindiName,englishName:r.name,sthanaBala:s,digBala:c,cheshtaBala:g,naisargikaBala:Math.round(b),kalaBala:u,drikBala:N,totalVirupas:S,totalRupas:`${$} रूप`,requiredRupas:n[r.hindiName]||"5.50 रूप",strengthPct:y,grade:m,remedyHint:w}})}function gi(t){const i=t.panchang.lagnaName.split(" ")[0],e=t.lucky,n={मेष:{jeevanRatna:"मूंगा (Red Coral) — लग्नेश मंगल हेतु",bhagyaRatna:"पुखराज (Yellow Sapphire) — भाग्येश गुरु हेतु",ishtaRatna:"माणिक्य (Ruby) — पंचमेश सूर्य हेतु",avoidStones:"नीलम, पन्ना एवं हीरा बिना परामर्श न पहनें",primaryRudraksha:"३ मुखी रुद्राक्ष (अग्नि देव स्वरूप — मंगल बलवर्धक)",secondaryRudraksha:"५ मुखी + १ मुखी रुद्राक्ष (गुरु एवं सूर्य कृपा हेतु)",rudrakshaMantra:"ॐ क्लीं नमः ॥ ॐ अं अङ्गारकाय नमः ॥",rudrakshaBenefits:"आत्मविश्वास, भूमि-भवन लाभ, रक्तचाप संतुलन एवं मंगल दोष शांति।"},वृषभ:{jeevanRatna:"हीरा / ओपल (Diamond / White Fire Opal) — लग्नेश शुक्र हेतु",bhagyaRatna:"नीलम (Blue Sapphire) — भाग्येश एवं कर्मेश शनि हेतु",ishtaRatna:"पन्ना (Emerald) — पंचमेश बुध हेतु",avoidStones:"पुखराज, मूंगा एवं मोती धारण न करें",primaryRudraksha:"६ मुखी रुद्राक्ष (भगवान कार्तिकेय एवं शुक्र कृपा हेतु)",secondaryRudraksha:"७ मुखी + ४ मुखी रुद्राक्ष (लक्ष्मी-शनि एवं बुध बल हेतु)",rudrakshaMantra:"ॐ ह्रीं हुं नमः ॥ ॐ शुं शुक्राय नमः ॥",rudrakshaBenefits:"वैवाहिक सुख, ऐश्वर्य, व्यापारिक उन्नति एवं कला/धन वृद्धि।"},मिथुन:{jeevanRatna:"पन्ना (Natural Emerald) — लग्नेश बुध हेतु",bhagyaRatna:"नीलम (Blue Sapphire) — भाग्येश शनि हेतु",ishtaRatna:"हीरा / ओपल (Diamond / Opal) — पंचमेश शुक्र हेतु",avoidStones:"मूंगा, माणिक्य एवं पुखराज से परहेज करें",primaryRudraksha:"४ मुखी रुद्राक्ष (ब्रह्मा देव स्वरूप — बुध प्रज्ञा वर्धक)",secondaryRudraksha:"६ मुखी + गणेश रुद्राक्ष (विद्या, वाणी एवं व्यापार सिद्धि)",rudrakshaMantra:"ॐ ह्रीं नमः ॥ ॐ बुं बुधाय नमः ॥",rudrakshaBenefits:"तीव्र बुद्धि, वाणी प्रभाव, व्यापारिक निर्णय क्षमता एवं नसों की मजबूती।"},कर्क:{jeevanRatna:"सच्चा मोती (Natural South Sea Pearl) — लग्नेश चन्द्र हेतु",bhagyaRatna:"पुखराज (Yellow Sapphire) — भाग्येश गुरु हेतु",ishtaRatna:"मूंगा (Red Coral) — दशमेश/पंचमेश योगकारक मंगल हेतु",avoidStones:"नीलम, हीरा एवं पन्ना धारण न करें",primaryRudraksha:"२ मुखी रुद्राक्ष (अर्धनारीश्वर स्वरूप — चन्द्र मानसिक शांति हेतु)",secondaryRudraksha:"३ मुखी + ५ मुखी रुद्राक्ष (योगकारक मंगल एवं गुरु बल हेतु)",rudrakshaMantra:"ॐ नमः ॥ ॐ सों सोमाय नमः ॥",rudrakshaBenefits:"मानसिक शांति, पारिवारिक सामंजस्य, राज्यकृपा एवं अचल संपत्ति लाभ।"},सिंह:{jeevanRatna:"माणिक्य (Burmese Ruby) — लग्नेश सूर्य हेतु",bhagyaRatna:"मूंगा (Red Coral) — भाग्येश व चतुर्थेश योगकारक मंगल हेतु",ishtaRatna:"पुखराज (Yellow Sapphire) — पंचमेश गुरु हेतु",avoidStones:"नीलम एवं हीरा कभी धारण न करें",primaryRudraksha:"१ मुखी अथवा १२ मुखी रुद्राक्ष (भगवान सूर्य एवं शिव तेज हेतु)",secondaryRudraksha:"३ मुखी + ५ मुखी रुद्राक्ष (मंगल-गुरु राजयोग बल हेतु)",rudrakshaMantra:"ॐ ह्रीं नमः ॥ ॐ घृणि सूर्याय नमः ॥",rudrakshaBenefits:"प्रशासनिक तेज, राजकीय सम्मान, उच्च पद प्राप्ति एवं हृदय/नेत्र बल।"},कन्या:{jeevanRatna:"पन्ना (Emerald) — लग्नेश एवं कर्मेश बुध हेतु",bhagyaRatna:"हीरा / ओपल (Diamond / Opal) — भाग्येश शुक्र हेतु",ishtaRatna:"नीलम (Blue Sapphire) — पंचमेश शनि हेतु",avoidStones:"मूंगा, मोती एवं माणिक्य धारण न करें",primaryRudraksha:"४ मुखी रुद्राक्ष (बुध-ब्रह्मा कृपा एवं बौद्धिक तेज हेतु)",secondaryRudraksha:"६ मुखी + ७ मुखी रुद्राक्ष (भाग्येश शुक्र एवं पंचमेश शनि हेतु)",rudrakshaMantra:"ॐ ह्रीं नमः ॥ ॐ बुं बुधाय नमः ॥",rudrakshaBenefits:"वाणिज्य-व्यापार में अपार लाभ, शिक्षा में श्रेष्ठता एवं धन संचय।"},तुला:{jeevanRatna:"हीरा / सफेद पुखराज / ओपल — लग्नेश शुक्र हेतु",bhagyaRatna:"पन्ना (Emerald) — भाग्येश बुध हेतु",ishtaRatna:"नीलम (Blue Sapphire) — चतुर्थेश/पंचमेश योगकारक शनि हेतु",avoidStones:"माणिक्य, मूंगा एवं पुखराज से परहेज करें",primaryRudraksha:"६ मुखी रुद्राक्ष (शुक्र एवं कार्तिकेय कृपा हेतु)",secondaryRudraksha:"७ मुखी + ४ मुखी रुद्राक्ष (योगकारक शनि एवं भाग्येश बुध हेतु)",rudrakshaMantra:"ॐ ह्रीं हुं नमः ॥ ॐ शुं शुक्राय नमः ॥",rudrakshaBenefits:"दाम्पत्य सुख, भौतिक वैभव, न्यायिक विजय एवं शनि-शुक्र राजयोग।"},वृश्चिक:{jeevanRatna:"मूंगा (Red Coral) — लग्नेश मंगल हेतु",bhagyaRatna:"सच्चा मोती (Natural Pearl) — भाग्येश चन्द्र हेतु",ishtaRatna:"पुखराज (Yellow Sapphire) एवं माणिक्य (Ruby) — गुरु व सूर्य हेतु",avoidStones:"पन्ना, हीरा एवं नीलम धारण न करें",primaryRudraksha:"३ मुखी रुद्राक्ष (मंगल तेज एवं साहस वृद्धि हेतु)",secondaryRudraksha:"२ मुखी + ५ मुखी रुद्राक्ष (भाग्येश चन्द्र एवं धनेश गुरु हेतु)",rudrakshaMantra:"ॐ क्लीं नमः ॥ ॐ अं अङ्गारकाय नमः ॥",rudrakshaBenefits:"शत्रु विजय, आकस्मिक धन लाभ, साहस एवं गूढ़ विद्या में सिद्धि।"},धनु:{jeevanRatna:"पुखराज (Ceylon Yellow Sapphire) — लग्नेश गुरु हेतु",bhagyaRatna:"माणिक्य (Ruby) — भाग्येश सूर्य हेतु",ishtaRatna:"मूंगा (Red Coral) — पंचमेश मंगल हेतु",avoidStones:"नीलम एवं हीरा धारण न करें",primaryRudraksha:"५ मुखी रुद्राक्ष (कालाग्नि रुद्र स्वरूप — बृहस्पति कृपा हेतु)",secondaryRudraksha:"१२ मुखी + ३ मुखी रुद्राक्ष (सूर्य एवं मंगल राजयोग बल हेतु)",rudrakshaMantra:"ॐ ह्रीं नमः ॥ ॐ बृं बृहस्पतये नमः ॥",rudrakshaBenefits:"आध्यात्मिक तेज, उच्च शिक्षा, राज्य सम्मान एवं संतान सुख।"},मकर:{jeevanRatna:"नीलम (Ceylon Blue Sapphire) — लग्नेश शनि हेतु",bhagyaRatna:"पन्ना (Emerald) — भाग्येश बुध हेतु",ishtaRatna:"हीरा / ओपल (Diamond / Opal) — योगकारक शुक्र हेतु",avoidStones:"मूंगा, मोती एवं माणिक्य धारण न करें",primaryRudraksha:"७ मुखी रुद्राक्ष (महालक्ष्मी एवं शनि कृपा हेतु)",secondaryRudraksha:"६ मुखी + ४ मुखी रुद्राक्ष (योगकारक शुक्र एवं भाग्येश बुध हेतु)",rudrakshaMantra:"ॐ हुं नमः ॥ ॐ शं शनैश्चराय नमः ॥",rudrakshaBenefits:"स्थायी संपत्ति, उद्योग-व्यापार में सफलता, शनि पीड़ा मुक्ति एवं दीर्घायु।"},कुंभ:{jeevanRatna:"नीलम (Blue Sapphire) — लग्नेश शनि हेतु",bhagyaRatna:"हीरा / ओपल (Diamond / Opal) — चतुर्थेश/भाग्येश योगकारक शुक्र हेतु",ishtaRatna:"पन्ना (Emerald) — पंचमेश बुध हेतु",avoidStones:"मूंगा, मोती एवं पुखराज बिना परामर्श न पहनें",primaryRudraksha:"७ मुखी रुद्राक्ष (लग्नेश शनि एवं सप्तमातृका कृपा हेतु)",secondaryRudraksha:"६ मुखी + ४ मुखी रुद्राक्ष (भाग्येश शुक्र एवं पंचमेश बुध हेतु)",rudrakshaMantra:"ॐ हुं नमः ॥ ॐ शं शनैश्चराय नमः ॥",rudrakshaBenefits:"नवाचार, शोध, राजयोग प्राप्ति, आर्थिक स्थिरता एवं मानसिक एकाग्रता।"},कुम्भ:{jeevanRatna:"नीलम (Blue Sapphire) — लग्नेश शनि हेतु",bhagyaRatna:"हीरा / ओपल (Diamond / Opal) — चतुर्थेश/भाग्येश योगकारक शुक्र हेतु",ishtaRatna:"पन्ना (Emerald) — पंचमेश बुध हेतु",avoidStones:"मूंगा, मोती एवं पुखराज बिना परामर्श न पहनें",primaryRudraksha:"७ मुखी रुद्राक्ष (लग्नेश शनि एवं सप्तमातृका कृपा हेतु)",secondaryRudraksha:"६ मुखी + ४ मुखी रुद्राक्ष (भाग्येश शुक्र एवं पंचमेश बुध हेतु)",rudrakshaMantra:"ॐ हुं नमः ॥ ॐ शं शनैश्चराय नमः ॥",rudrakshaBenefits:"नवाचार, शोध, राजयोग प्राप्ति, आर्थिक स्थिरता एवं मानसिक एकाग्रता।"},मीन:{jeevanRatna:"पुखराज (Yellow Sapphire) — लग्नेश एवं कर्मेश गुरु हेतु",bhagyaRatna:"मूंगा (Red Coral) — भाग्येश व धनेश मंगल हेतु",ishtaRatna:"सच्चा मोती (Natural Pearl) — पंचमेश चन्द्र हेतु",avoidStones:"पन्ना, हीरा एवं नीलम धारण न करें",primaryRudraksha:"५ मुखी रुद्राक्ष (देवगुरु बृहस्पति एवं शिव कृपा हेतु)",secondaryRudraksha:"३ मुखी + २ मुखी रुद्राक्ष (भाग्येश मंगल एवं पंचमेश चन्द्र हेतु)",rudrakshaMantra:"ॐ ह्रीं नमः ॥ ॐ बृं बृहस्पतये नमः ॥",rudrakshaBenefits:"सुख-शांति, ज्ञान-विज्ञान, प्रचुर धन-धान्य एवं आध्यात्मिक उन्नति।"}},a=n[i]||n.मेष;return{jeevanRatna:a.jeevanRatna||e.ratnaName,bhagyaRatna:a.bhagyaRatna||"पुखराज (Yellow Sapphire)",ishtaRatna:a.ishtaRatna||e.uparatnaName,uparatna:e.uparatnaName,weightRatti:"५.२५ से ६.२५ रत्ती (शरीर के वजन के १०वें भाग के अनुसार)",metalAndFinger:e.ratnaMetalAndFinger,wearingDayAndTime:`${e.luckyDays} को प्रातः शुक्ल पक्ष में सूर्योदय के १ घंटे के भीतर (शुभ होरा में)`,pranaPratishthaMantra:e.beejMantra,avoidStones:a.avoidStones||"नीलम व गोमेद बिना कुंडली सूक्ष्म परीक्षण न पहनें",primaryRudraksha:a.primaryRudraksha||e.rudraksha,secondaryRudraksha:a.secondaryRudraksha||"३ मुखी + ७ मुखी रुद्राक्ष",rudrakshaMantra:a.rudrakshaMantra||"ॐ नमः शिवाय ॥",rudrakshaBenefits:a.rudrakshaBenefits||"नवग्रह संतुलन, आरोग्य एवं मानसिक शांति।"}}function xt(t,i,e,n=200){const a="'Noto Sans Devanagari', 'Nirmala UI', 'Mangal', sans-serif",r={1:{rashiX:50,rashiY:43.2,pX:50,pY:25.5,maxPerLine:2,maxWidthU:27,maxHeightU:17},2:{rashiX:25,rashiY:20.8,pX:25,pY:9.6,maxPerLine:2,isOuterTriangle:!0,maxWidthU:23,maxHeightU:11.2},3:{rashiX:20.8,rashiY:25.5,pX:9.4,pY:25.5,maxPerLine:1,isSideTriangle:!0,isOuterTriangle:!0,maxWidthU:13,maxHeightU:15.5},4:{rashiX:43.2,rashiY:50,pX:24,pY:50,maxPerLine:2,maxWidthU:27,maxHeightU:17},5:{rashiX:20.8,rashiY:74.5,pX:9.4,pY:74.5,maxPerLine:1,isSideTriangle:!0,isOuterTriangle:!0,maxWidthU:13,maxHeightU:15.5},6:{rashiX:25,rashiY:79.2,pX:25,pY:90.4,maxPerLine:2,isOuterTriangle:!0,maxWidthU:23,maxHeightU:11.2},7:{rashiX:50,rashiY:56.8,pX:50,pY:74.5,maxPerLine:2,maxWidthU:27,maxHeightU:17},8:{rashiX:75,rashiY:79.2,pX:75,pY:90.4,maxPerLine:2,isOuterTriangle:!0,maxWidthU:23,maxHeightU:11.2},9:{rashiX:79.2,rashiY:74.5,pX:90.6,pY:74.5,maxPerLine:1,isSideTriangle:!0,isOuterTriangle:!0,maxWidthU:13,maxHeightU:15.5},10:{rashiX:56.8,rashiY:50,pX:76,pY:50,maxPerLine:2,maxWidthU:27,maxHeightU:17},11:{rashiX:79.2,rashiY:25.5,pX:90.6,pY:25.5,maxPerLine:1,isSideTriangle:!0,isOuterTriangle:!0,maxWidthU:13,maxHeightU:15.5},12:{rashiX:75,rashiY:20.8,pX:75,pY:9.6,maxPerLine:2,isOuterTriangle:!0,maxWidthU:23,maxHeightU:11.2}};let s="";for(const l of t){const p=r[l.houseNumber];if(!p)continue;const c=l.planets||[],g=c.length>=3,b=p.isSideTriangle?c.length>=4?2:1:c.length>=5?3:g?2:p.maxPerLine,u=c.map(x=>p.isSideTriangle||g?`${x.shortHindi||x.chartLabel}`:`${x.chartLabel||x.shortHindi}`),N=[];for(let x=0;x<u.length;x+=b)N.push(u.slice(x,x+b).join(" "));s+=`
      <text x="${p.rashiX}" y="${p.rashiY}" text-anchor="middle" dominant-baseline="central" fill="#b45309" font-size="3.1" font-weight="800" font-family="${a}">${l.rashiNumber}</text>
    `;const S=Math.max(1,...N.map(x=>Array.from(x).length)),$=p.isSideTriangle?N.length>=3?2.15:2.55:p.isOuterTriangle?N.length>=2?2.35:2.8:u.length>3?2.45:2.95,y=p.maxWidthU/Math.max(4,S*.66),m=p.maxHeightU/Math.max(1,N.length*1.24),w=Number(Math.max(1.85,Math.min($,y,m)).toFixed(2)),f=Number((w*1.18).toFixed(2));N.forEach((x,h)=>{const F=(h-(N.length-1)/2)*f;s+=`
        <text x="${p.pX}" y="${(p.pY+F).toFixed(2)}" dy="-0.05em" text-anchor="middle" dominant-baseline="central" fill="${h===0?"#7c2d12":"#1e293b"}" font-size="${w}" font-weight="800" font-family="${a}">${o(x)}</text>
      `})}return`
    <div style="width: 100%; background: #fffdf9; border: 1.5px solid #b45309; border-radius: 6px; padding: 5px 7px 7px 7px; text-align: center; box-sizing: border-box; font-family: ${a}; overflow: visible;">
      <div style="font-size: 9.2px; font-weight: 800; color: #7c2d12; margin-bottom: 1.5px; line-height: 1.38;">${o(i)}</div>
      <div style="font-size: 7.9px; color: #475569; margin-bottom: 5px; line-height: 1.34; font-weight: 600;">${o(e)}</div>
      <div style="width: 100%; max-width: ${n}px; margin: 0 auto;">
        <svg class="vedic-chart-svg" viewBox="0 0 100 100" width="100%" height="auto" preserveAspectRatio="xMidYMid meet" style="display: block; width: 100%; height: auto; margin: 0 auto; background: #fffbeb; border: 1.5px solid #9a3412; border-radius: 4px; overflow: visible;">
          <rect x="1.5" y="1.5" width="97" height="97" fill="none" stroke="#9a3412" stroke-width="0.8" />
          <rect x="3" y="3" width="94" height="94" fill="none" stroke="#d97706" stroke-opacity="0.38" stroke-width="0.35" />
          <line x1="1.5" y1="1.5" x2="98.5" y2="98.5" stroke="#b45309" stroke-width="0.6" />
          <line x1="98.5" y1="1.5" x2="1.5" y2="98.5" stroke="#b45309" stroke-width="0.6" />
          <polygon points="50,1.5 98.5,50 50,98.5 1.5,50" fill="none" stroke="#9a3412" stroke-width="0.7" />
          <text x="50" y="50.4" dy="-0.06em" text-anchor="middle" dominant-baseline="central" fill="#b45309" fill-opacity="0.14" font-size="5.6" font-weight="bold" font-family="${a}">ॐ</text>
          ${s}
        </svg>
      </div>
    </div>
  `}function O(t,i,e,n=!1){const a=`<img src="${I}" alt="Pandit Ji Online" style="width: 30px; height: 30px; min-width: 30px; max-width: 30px; border-radius: 50%; object-fit: cover; border: 1.5px solid #D4AF37; background: #0F172A; display: block;" />`,r=`<img src="${I}" alt="Pandit Ji Online" style="width: 40px; height: 40px; min-width: 40px; max-width: 40px; border-radius: 50%; object-fit: cover; border: 2px solid #D4AF37; background: #0F172A; display: block; margin: 0 auto;" />`;return n?`
      <table style="width: 100%; table-layout: fixed; border-collapse: collapse; background: linear-gradient(90deg, #fff6e0 0%, #fde8bf 100%); border: 1.5px solid #b45309; border-radius: 6px; margin-bottom: 6px; box-sizing: border-box;">
        <tr>
          <td style="padding: 4px 4px 4px 8px; vertical-align: middle; width: 38px;">
            ${a}
          </td>
          <td style="padding: 3.5px 6px 7px 4px; vertical-align: middle; text-align: left; width: 53%;">
            <div style="font-size: 8.8px; font-weight: 800; color: #9a3412; line-height: 1.3;">॥ श्री गणेशाय नमः ॥ &bull; ${o(z.appName)} (${o(i)})</div>
            <div style="font-size: 11px; font-weight: 900; color: #7c2d12; line-height: 1.32; margin-top: 1px;">${o(t)}</div>
          </td>
          <td style="padding: 3.5px 9px 7px 6px; vertical-align: middle; text-align: right; width: 41%;">
            <div style="font-size: 8.5px; color: #1e293b; font-weight: 700; line-height: 1.32;">${e}</div>
            <div style="font-size: 7.8px; color: #78350f; margin-top: 1.5px; line-height: 1.28; font-weight: 600;">आचार्य पण्डित शशांक शर्मा &bull; ${o(z.contactPhone)} &bull; ${o(z.website)}</div>
          </td>
        </tr>
      </table>
    `:`
    <div style="background: linear-gradient(135deg, #fff8e6 0%, #fde7bc 100%); border: 2.5px double #b45309; border-radius: 6px; padding: 6px 10px 8px 10px; margin-bottom: 6px; text-align: center; box-sizing: border-box; width: 100%;">
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 3px;">
        <tr>
          <td style="width: 48px; vertical-align: middle; text-align: left;">${r}</td>
          <td style="vertical-align: middle; text-align: center;">
            <div style="font-size: 9.6px; font-weight: 800; color: #9a3412; letter-spacing: 0.3px; margin-bottom: 2px; line-height: 1.3;">
              ॥ ॐ श्री गणेशाय नमः ॥ &bull; ॥ श्री गुरुभ्यो नमः ॥ &bull; ${o(z.appName)}
            </div>
            <div class="milan-status-pill" style="display: inline-flex; align-items: center; justify-content: center; line-height: 1.1; vertical-align: middle; background: #7c2d12; border: 1px solid #b45309; color: #fffbeb; font-size: 8.3px; font-weight: 700; padding: 3px 10px 5px 10px; border-radius: 3px; margin-bottom: 2.5px; box-sizing: border-box;">
              ${o(i)}
            </div>
            <div style="font-size: 14px; font-weight: 900; color: #7c2d12; margin-bottom: 2px; line-height: 1.28;">
              ${o(t)}
            </div>
            <div style="font-size: 9.4px; color: #1e293b; font-weight: 700; line-height: 1.32;">
              ${e}
            </div>
          </td>
          <td style="width: 48px; vertical-align: middle;"></td>
        </tr>
      </table>
      <div style="border-top: 1px solid #d97706; padding-top: 3px; font-size: 8.3px; color: #334155; line-height: 1.32;">
        <b style="color: #7c2d12;">${o(z.guideTitle)}</b> <b style="color:#1e293b;">${o(z.guideName)}</b> &bull;
        <span>स्थान: ${o(z.guideAddress)} &bull; संपर्क/WhatsApp: <b style="color: #7c2d12;">${o(z.contactPhone)}</b> &bull; <b style="color:#9a3412;">${o(z.website)}</b></span>
      </div>
    </div>
  `}function hi(t,i){return`
    <table style="width: 100%; table-layout: fixed; border-collapse: collapse; font-size: 8.2px; color: #334155; box-sizing: border-box; line-height: 1.32;">
      <tr>
        <td style="padding: 0 0 3px 0; text-align: left; vertical-align: middle; width: 82%; white-space: nowrap;">
          <b style="color: #7c2d12;">पण्डित जी ऑनलाइन (${o(z.website)})</b> &bull; आचार्य पण्डित शशांक शर्मा &bull; WhatsApp: <b style="color:#1e293b;">${o(z.contactPhone)}</b> &bull; ${o(z.email)}
        </td>
        <td style="padding: 0 0 3px 0; text-align: right; vertical-align: middle; width: 18%; color: #7c2d12; font-weight: 800; white-space: nowrap;">
          पृष्ठ ${t} / ${i}
        </td>
      </tr>
    </table>
  `}function C(t,i){return`
    <table style="width: 100%; table-layout: fixed; border-collapse: collapse; margin-bottom: 4.5px; background: linear-gradient(90deg, #fff3d6 0%, #fde9c4 100%); border-left: 4px solid #9a3412; border-top: 1px solid #d97706; border-right: 1px solid #d97706; border-bottom: 1px solid #d97706; border-radius: 4px; box-sizing: border-box;">
      <tr>
        <td style="padding: 2.5px 8px 6px 8px; font-size: 9.4px; font-weight: 800; color: #7c2d12; vertical-align: middle; text-align: left; width: ${i?"68%":"100%"}; line-height: 1.3;">
          ${o(t)}
        </td>
        ${i?`
        <td style="padding: 2.5px 8px 5px 8px; text-align: right; vertical-align: middle; width: 32%; white-space: nowrap;">
          <span class="milan-status-pill" style="display: inline-flex; align-items: center; justify-content: center; line-height: 1.1; vertical-align: middle; font-size: 8px; color: #7c2d12; background: #fffdf9; padding: 3px 10px 5px 10px; border-radius: 3px; border: 1px solid #b45309; white-space: nowrap; font-weight: 700; box-sizing: border-box;">
            ${o(i)}
          </span>
        </td>`:""}
      </tr>
    </table>
  `}const R="'Noto Sans Devanagari', 'Noto Sans Bengali', 'Noto Sans Gujarati', 'Noto Sans Tamil', 'Noto Sans Telugu', 'Noto Sans Kannada', 'Noto Sans Malayalam', 'Noto Sans Gurmukhi', 'Noto Sans', 'Segoe UI', Arial, sans-serif";function xi(t){if(typeof document>"u"||!["bn","pa","ta","te","kn","ml","gu"].includes(t))return;const i="vedic-pdf-regional-fonts";if(document.getElementById(i))return;const e=document.createElement("link");e.id=i,e.rel="stylesheet",e.href="https://fonts.googleapis.com/css2?family=Noto+Sans+Bengali:wght@400;700&family=Noto+Sans+Gujarati:wght@400;700&family=Noto+Sans+Gurmukhi:wght@400;700&family=Noto+Sans+Tamil:wght@400;700&family=Noto+Sans+Telugu:wght@400;700&family=Noto+Sans+Kannada:wght@400;700&family=Noto+Sans+Malayalam:wght@400;700&display=swap",document.head.appendChild(e)}const bi=[["सू","Su"],["चं","Mo"],["मं","Ma"],["बु","Me"],["गु","Ju"],["शु","Ve"],["श","Sa"],["रा","Ra"],["के","Ke"],["च","Mo"],["(व*)","(R)"],["(अ^)","(C)"]];function le(t,i){if(i==="hi")return;const e=document.createTreeWalker(t,NodeFilter.SHOW_TEXT),n=[];let a=e.nextNode();for(;a;)n.push(a),a=e.nextNode();for(const r of n){const s=r.nodeValue||"";if(!s.trim()||s.trim()==="ॐ")continue;const l=r.parentElement;if(l&&l.closest("svg.vedic-chart-svg")){if(i==="en"||i==="hinglish"){let p=s;for(const[c,g]of bi)p.includes(c)&&(p=p.split(c).join(g));r.nodeValue=ot(p,i)}else r.nodeValue=ot(s,i);continue}r.nodeValue=ot(s,i)}}function pe(t,i,e){return`
    <div class="vedic-pdf-page" style="width: 794px; min-width: 794px; max-width: 794px; height: 1123px; min-height: 1123px; max-height: 1123px; background: #faf4e8; color: #1e293b; padding: 15px 18px 16px 18px; box-sizing: border-box; overflow: hidden; font-family: ${R}; position: relative;">
      <div class="vedic-pdf-frame" style="width: 758px; height: 1090px; max-height: 1090px; border: 2.5px double #b45309; border-radius: 8px; padding: 9px 12px 36px 12px; background: #fffdf9; box-sizing: border-box; overflow: hidden; position: relative;">
        <div class="vedic-pdf-body" style="width: 100%; height: 1036px; max-height: 1036px; box-sizing: border-box; overflow: hidden;">
          ${t}
        </div>
        <div class="vedic-pdf-footer" style="position: absolute; bottom: 6px; left: 14px; right: 14px; height: 26px; box-sizing: border-box; border-top: 1px solid #d97706; padding: 3px 2px 3px 2px; background: #fff9ee;">
          ${hi(i,e)}
        </div>
      </div>
    </div>
  `}async function fi(t,i){const e=Array.from(t.querySelectorAll("svg"));if(e.length===0)return;const n=[];for(const a of e)try{a.setAttribute("xmlns","http://www.w3.org/2000/svg");const s=(a.getAttribute("viewBox")||"0 0 100 100").trim().split(/[\s,]+/).map(Number),l=s[2]&&s[2]>0?s[2]:100,p=s[3]&&s[3]>0?s[3]:100,c=680,g=Math.round(c*p/l);a.setAttribute("width",String(c)),a.setAttribute("height",String(g));const b=Array.from(a.querySelectorAll("text"));for(const y of b)y.getAttribute("font-family")||y.setAttribute("font-family","'Noto Sans Devanagari', 'Noto Sans', Arial, sans-serif");const u=new XMLSerializer().serializeToString(a),N=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(u)}`,S=i.createElement("img");S.width=c,S.height=g,S.style.cssText="display: block !important; width: 100% !important; height: auto !important; margin: 0 auto !important; background: #fffbeb !important; border: 1.5px solid #9a3412 !important; border-radius: 4px !important; box-sizing: border-box !important;";const $=new Promise(y=>{const m=setTimeout(()=>y(),260);S.onload=()=>{clearTimeout(m),y()},S.onerror=()=>{clearTimeout(m),y()}});S.src=N,n.push($),a.parentNode?.replaceChild(S,a)}catch{}await Promise.all(n)}function bt(t,i,e="hi"){if(typeof document>"u")return;const n=document.getElementById("vedic-direct-print-iframe");n&&n.parentNode&&n.parentNode.removeChild(n);const a=document.createElement("iframe");a.id="vedic-direct-print-iframe",a.style.cssText="position: fixed; right: 0; bottom: 0; width: 1px; height: 1px; border: 0; opacity: 0.01; pointer-events: none; z-index: -1;",document.body.appendChild(a);const r=a.contentDocument||a.contentWindow?.document;if(!r)return;const s=t.map((l,p)=>`<div class="vedic-print-page-sheet" style="page-break-after: ${p<t.length-1?"always":"auto"}; break-after: ${p<t.length-1?"page":"auto"}; margin: 0 auto;">${pe(l,p+1,t.length)}</div>`).join(`
`);r.open(),r.write(`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>${o(i.replace(/\.pdf$/i,""))}</title>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;600;700;800&display=swap" />
  <style>
    @page { size: A4 portrait; margin: 0; }
    html, body { margin: 0; padding: 0; background: #faf4e8; color: #1e293b; font-family: ${R}; -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
    .vedic-pdf-page, .vedic-pdf-page * { box-sizing: border-box !important; -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
    .vedic-pdf-page table { width: 100%; max-width: 100%; table-layout: fixed; }
    .vedic-pdf-page th, .vedic-pdf-page td { word-wrap: break-word; overflow-wrap: anywhere; vertical-align: middle; }
  </style>
</head>
<body>${s}</body>
</html>`),r.close(),e!=="hi"&&r.body&&le(r.body,e),setTimeout(()=>{try{a.contentWindow?.focus(),a.contentWindow?.print()}catch{window.print()}},350)}function mi(t){const i=new Uint8Array(t),e=32768,n=[];for(let a=0;a<i.length;a+=e){const r=i.subarray(a,a+e);n.push(String.fromCharCode.apply(null,r))}return btoa(n.join(""))}function ui(t,i,e,n,a,r){if(typeof document>"u")return;const s=document.getElementById("vedic-pdf-ready-modal");s&&s.parentNode&&s.parentNode.removeChild(s);const l=(()=>{try{return window.self!==window.top}catch{return!0}})(),p=(P,j,D)=>r==="hi"?P:r==="en"?j:r==="hinglish"?D:ot(P,r),c=document.createElement("div");c.id="vedic-pdf-ready-modal",c.style.cssText="position: fixed; inset: 0; z-index: 999999; background: rgba(5, 8, 17, 0.82); backdrop-filter: blur(6px); display: flex; align-items: center; justify-content: center; padding: 16px; font-family: "+R+";";const g=(t.size/(1024*1024)).toFixed(2),b=/milan|36_gun/i.test(n),u=document.createElement("div");u.className="pj-velvet-glass-modal",u.style.cssText="width: 100%; max-width: 440px; background: linear-gradient(135deg, rgba(255,255,255,0.095) 0%, rgba(255,253,247,0.02) 34%, transparent 60%), linear-gradient(155deg, var(--theme-velvet-modal-top, rgba(24,20,38,0.88)) 0%, var(--theme-velvet-modal-bottom, rgba(14,16,30,0.92)) 100%) !important; backdrop-filter: blur(12px) saturate(135%); -webkit-backdrop-filter: blur(12px) saturate(135%); border: 1px solid var(--theme-velvet-border, rgba(255,223,140,0.36)) !important; border-radius: 20px; padding: 22px 20px; box-shadow: 0 22px 54px rgba(0,0,0,0.62), inset 0 1px 0 rgba(255,255,255,0.18); text-align: center; color: #FFFDF7; position: relative; box-sizing: border-box;";const N=document.createElement("button");N.type="button",N.setAttribute("aria-label","Close"),N.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',N.style.cssText="position: absolute; top: 12px; right: 12px; width: 30px; height: 30px; border-radius: 999px; border: 1px solid color-mix(in srgb, var(--theme-primary, #D97706) 48%, #F59E0B 30%); background: color-mix(in srgb, var(--theme-bg, #0F172A) 68%, var(--theme-primary, #B45309) 32%); color: #FFFDF7; display: flex; align-items: center; justify-content: center; cursor: pointer;";const S=()=>{c.parentNode&&c.parentNode.removeChild(c),setTimeout(()=>{URL.revokeObjectURL(i)},6e4)};N.onclick=S,c.onclick=P=>{P.target===c&&S()};const $=document.createElement("div");$.style.cssText="display: flex; justify-content: center; margin-bottom: 10px;",$.innerHTML=`
    <div style="width:54px;height:54px;border-radius:50%;padding:2.5px;background:linear-gradient(135deg,#FDE047 0%,#D4AF37 52%,#FF6F00 100%);box-shadow:0 4px 14px rgba(0,0,0,0.45);display:flex;align-items:center;justify-content:center;overflow:hidden;box-sizing:border-box;">
      <img src="${I}" onerror="this.onerror=null;this.src='/pandit-photo.jpg';" alt="पण्डित जी ऑनलाइन (Pandit Ji Online)" style="width:100%;height:100%;border-radius:50%;object-fit:cover;display:block;background:#0F172A;" />
    </div>
  `;const y=document.createElement("h3");y.style.cssText="margin: 0 0 6px 0; font-size: 16.5px; font-weight: 900; color: #FFFDF7; line-height: 1.35; text-shadow: 0 1px 2px rgba(0,0,0,0.35);",y.innerText=b?p("36-गुण मिलान PDF तैयार है","36-Gun Milan PDF is Ready","36-Gun Milan PDF Taiyar Hai"):p("पण्डित जी ऑनलाइन • वैदिक महा-पत्रिका PDF तैयार है","Pandit Ji Online • Vedic Maha-Patrika PDF Ready","Pandit Ji Online • Vedic Maha-Patrika PDF Taiyar Hai");const m=document.createElement("div");m.style.cssText="display: inline-block; background: var(--theme-velvet-subcard, #1d1a2f); border: 1px solid var(--theme-velvet-subborder, rgba(255,223,140,0.26)); color: var(--theme-label-safe, #FDE68A); font-size: 11.5px; font-weight: 800; padding: 4px 12px; border-radius: 999px; margin-bottom: 10px;",m.innerText=p(`${a.length} पृष्ठ • ${g} MB • शाही प्रिंट-रेडी PDF`,`${a.length} Pages • ${g} MB • Royal Print-Ready PDF`,`${a.length} Pages • ${g} MB • Print-Ready PDF`);const w=document.createElement("p");w.style.cssText="margin: 0 0 14px 0; font-size: 11.5px; color: #F1F5F9; line-height: 1.55;",w.innerText=p("आपकी PDF फाइल फोन के Downloads में सेव हो रही है। दोबारा सेव करने के लिए नीचे बटन पर टैप करें या सीधे WhatsApp पर शेयर करें:","Your PDF file is saving to your Downloads folder. Tap below to save again or share directly on WhatsApp:","Aapki PDF file phone ke Downloads me save ho rahi hai. Dobara save karne ke liye neeche button par tap karein ya WhatsApp par share karein:");const f=document.createElement("a");f.href=e||i,l&&e&&(f.target="_blank",f.rel="noopener noreferrer"),f.download=n,f.style.cssText="display: flex; align-items: center; justify-content: center; gap: 8px; width: 100%; padding: 12px 16px; border-radius: 12px; background: linear-gradient(135deg, color-mix(in srgb, var(--theme-primary, #D97706) 80%, #F59E0B 20%) 0%, color-mix(in srgb, var(--theme-accent, #F59E0B) 68%, var(--theme-primary, #B45309) 32%) 100%); color: #FFFDF7; font-weight: 900; font-size: 13.5px; text-decoration: none; border: 1px solid color-mix(in srgb, var(--theme-accent, #FDE68A) 52%, #FFFDF7 24%); box-shadow: 0 8px 22px rgba(0,0,0,0.4); text-shadow: 0 1px 2px rgba(0,0,0,0.45); margin-bottom: 9px; box-sizing: border-box; cursor: pointer;",f.innerText=p(`⬇ अभी PDF फाइल डाउनलोड / सेव करें (${g} MB)`,`⬇ Download / Save PDF File Now (${g} MB)`,`⬇ Abhi PDF File Download / Save Karein (${g} MB)`),f.onclick=()=>{setTimeout(()=>{c.parentNode&&c.parentNode.removeChild(c)},1800)};const x=document.createElement("button");x.type="button",x.style.cssText="display: flex; align-items: center; justify-content: center; gap: 8px; width: 100%; padding: 11px 16px; border-radius: 12px; background: linear-gradient(135deg, #047857 0%, #059669 100%); color: #FFFDF7; font-weight: 800; font-size: 12.5px; border: 1px solid rgba(110, 231, 183, 0.42); box-shadow: 0 6px 16px rgba(4, 120, 87, 0.35); margin-bottom: 9px; box-sizing: border-box; cursor: pointer;",x.innerText=p("📲 WhatsApp / फोन पर सीधे PDF शेयर करें","📲 Share PDF directly on WhatsApp / Phone","📲 WhatsApp / Phone par seedhe PDF Share karein"),x.onclick=async()=>{try{const P=new File([t],n,{type:"application/pdf"});if(navigator.canShare&&navigator.canShare({files:[P]})){await navigator.share({files:[P],title:n.replace(/\.pdf$/i,""),text:"पण्डित जी ऑनलाइन — वैदिक ज्योतिष महा-पत्रिका PDF (www.panditjionline.online • +91 7017279043)"}),S();return}}catch{}f.click()};const h=document.createElement("button");h.type="button",h.style.cssText="display: flex; align-items: center; justify-content: center; gap: 6px; width: 100%; padding: 9.5px 14px; border-radius: 12px; background: color-mix(in srgb, var(--theme-bg, #0F172A) 66%, var(--theme-primary, #B45309) 34%); color: color-mix(in srgb, var(--theme-accent, #FDE68A) 52%, #FFFDF7 48%); font-weight: 800; font-size: 12px; border: 1px solid color-mix(in srgb, var(--theme-primary, #D97706) 48%, #F59E0B 30%); margin-bottom: 9px; box-sizing: border-box; cursor: pointer;",h.innerText=p("🖨 सीधे प्रिंट करें (Print / Save as PDF)","🖨 Direct Print / Save as PDF","🖨 Seedhe Print / Save as PDF karein"),h.onclick=()=>{S(),bt(a,n,r)};const F=document.createElement("button");F.type="button",F.style.cssText="display: flex; align-items: center; justify-content: center; width: 100%; padding: 9px 14px; border-radius: 12px; background: color-mix(in srgb, var(--theme-bg, #0F172A) 74%, var(--theme-primary, #B45309) 26%); color: #F1F5F9; font-weight: 700; font-size: 12px; border: 1px solid color-mix(in srgb, var(--theme-primary, #D97706) 40%, rgba(255,253,247,0.22)); box-sizing: border-box; cursor: pointer;",F.innerText=p("बंद करें","Close","Band Karein"),F.onclick=S,u.appendChild(N),u.appendChild($),u.appendChild(y),u.appendChild(m),u.appendChild(w),u.appendChild(f),u.appendChild(x),u.appendChild(h),u.appendChild(F),c.appendChild(u),document.body.appendChild(c)}async function yi(t,i,e,n="hi"){const a=i.endsWith(".pdf")?i:`${i}.pdf`;try{const r=t.output("arraybuffer"),s=new Blob([r],{type:"application/pdf"}),l=URL.createObjectURL(s),p=(()=>{try{return window.self!==window.top}catch{return!0}})();let c=null;if(p&&r.byteLength<28e5)try{const g=mi(r),b=await fetch("/api/pdf-download",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({filename:a,base64:g})});if(b.ok){const u=await b.json();u?.ok&&typeof u.downloadUrl=="string"&&(c=u.downloadUrl)}}catch{}try{if(c){const g=document.createElement("iframe");g.style.display="none",g.src=c,document.body.appendChild(g),setTimeout(()=>{document.body.contains(g)&&document.body.removeChild(g)},15e3)}else{const g=document.createElement("a");g.href=l,g.download=a,g.style.display="none",document.body.appendChild(g),g.click(),setTimeout(()=>{document.body.contains(g)&&document.body.removeChild(g)},2e3)}}catch{}ui(s,l,c,a,e,n)}catch{try{t.save(a)}catch{bt(e,a,n)}}}async function ce(t,i=3500){const e=[],n=a=>{const r=a?.fonts;if(r){if(typeof r.load=="function"){const s="ॐ ह्रां ह्रीं ह्रौं श्रां श्रीं श्रौं क्रां क्रीं क्रौं ब्रां ब्रीं ब्रौं ग्रां ग्रीं ग्रौं द्रां द्रीं द्रौं प्रां प्रीं प्रौं भ्रां भ्रीं भ्रौं स्रां स्रीं स्रौं मं रा मंगल राहु चन्द्रमसे शनैश्चराय नमः लग्न राशि नक्षत्र मेष वृषभ मिथुन कर्क सिंह कन्या तुला वृश्चिक धनु मकर कुंभ कुम्भ मीन दिन ०१२३४५६७८९ 0123456789 (Libra Pisces Virgo Aquarius)";for(const l of["400","500","600","700","800","900"])e.push(r.load(`${l} 12px "Noto Sans Devanagari"`,s).catch(()=>{}));e.push(r.load('400 13px "Noto Sans Symbols 2"',"★☆✦•°′″").catch(()=>{}))}r.ready&&e.push(r.ready.catch(()=>{}))}};typeof document<"u"&&n(document),t&&t!==document&&n(t),e.length>0&&await Promise.race([Promise.all(e),new Promise(a=>setTimeout(a,i))])}function ge(t,i=".vedic-book-a4-page, .vedic-pdf-page"){try{const e="pj-h2c-devanagari-root-fix";if(!t.getElementById(e)){const r=t.createElement("style");r.id=e,r.textContent=`
        html, body, ${i}, ${i} * {
          font-synthesis: none !important;
          letter-spacing: 0 !important;
          font-variant-ligatures: normal !important;
          font-feature-settings: "liga" 1, "clig" 1, "kern" 1 !important;
          text-rendering: optimizeLegibility !important;
          -webkit-font-smoothing: antialiased !important;
        }
        table th,
        table td,
        .book-table th,
        .book-table td,
        .vedic-pdf-page th,
        .vedic-pdf-page td,
        .book-section-bar,
        .book-section-bar > div,
        .book-pill,
        .book-banner-badge,
        .book-banner-pill,
        .milan-status-pill {
          vertical-align: middle !important;
        }
        /* Guarantee zero top-edge clipping of upper Devanagari matras when lifting text by -2px */
        table th,
        table td,
        .book-table th,
        .book-table td,
        .vedic-pdf-page th,
        .vedic-pdf-page td,
        .vedic-pdf-body,
        .vedic-book-a4-body,
        .vedic-book-a4-body--cover,
        .book-pill,
        .book-banner-badge,
        .book-banner-pill,
        .milan-status-pill,
        .book-section-bar,
        .book-section-bar > div,
        .book-cover-pillar-card,
        .book-cover-meta-card,
        .book-card,
        .book-chart-box {
          overflow: visible !important;
        }
        .pj-h2c-devanagari-lift {
          position: relative !important;
          top: -2px !important;
          vertical-align: baseline !important;
        }
      `,(t.head||t.documentElement).appendChild(r)}const n=Array.from(t.querySelectorAll(i));if(n.length===0)return;const a=new Set(["STYLE","SCRIPT","NOSCRIPT","SVG","TITLE","TEXTAREA","OPTION"]);for(const r of n){const s=[],l=t.createTreeWalker(r,NodeFilter.SHOW_TEXT);let p;for(;p=l.nextNode();){const c=p;if(!c.nodeValue||!c.nodeValue.trim())continue;const g=c.parentElement;g&&(a.has(g.tagName)||g.closest("svg, .pj-h2c-devanagari-lift, .pj-h2c-no-lift")||s.push(c))}for(const c of s){const g=c.parentElement;if(!g)continue;const b=t.createElement("span");b.className="pj-h2c-devanagari-lift",b.style.position="relative",b.style.top="-2px",g.insertBefore(b,c),b.appendChild(c)}}}catch{}}async function vi(t,i,e="hi"){xi(e);const{jsPDF:r,html2canvas:s}=await re(),l=new r({orientation:"portrait",unit:"mm",format:"a4",compress:!0}),p=210,c=297,g=`
    <style id="vedic-pdf-scoped-style">
      @page {
        size: A4 portrait;
        margin: 0;
      }
      html, body {
        margin: 0 !important;
        padding: 0 !important;
        background-color: #faf4e8 !important;
        color: #1e293b !important;
        font-family: ${R} !important;
        font-synthesis: none !important;
        line-height: 1.35;
      }
      .vedic-pdf-page,
      .vedic-pdf-page * {
        box-sizing: border-box !important;
        font-family: ${R} !important;
        font-synthesis: none !important;
      }
      .vedic-pdf-page {
        width: 794px !important;
        min-width: 794px !important;
        max-width: 794px !important;
        height: 1123px !important;
        min-height: 1123px !important;
        max-height: 1123px !important;
        padding: 15px 18px 16px 18px !important;
        margin: 0 !important;
        background-color: #faf4e8 !important;
        color: #1e293b !important;
        font-family: ${R} !important;
        line-height: 1.35 !important;
        overflow: hidden !important;
      }
      .vedic-pdf-page table {
        width: 100%;
        max-width: 100%;
        table-layout: fixed;
      }
      .vedic-pdf-page th,
      .vedic-pdf-page td {
        word-wrap: break-word;
        overflow-wrap: break-word;
        word-break: normal;
        vertical-align: middle !important;
        overflow: visible;
      }
      .vedic-pdf-page svg,
      .vedic-pdf-page img {
        max-width: 100% !important;
        height: auto !important;
        display: block !important;
      }
    </style>
  `,b=document.createElement("iframe");b.id="vedic-pdf-clean-iframe",b.style.cssText="position:fixed;left:-9999px;top:0;width:794px;height:1123px;border:0;margin:0;padding:0;z-index:-1;pointer-events:none;background:#faf4e8;";const u=m=>{const w=`पृष्ठ ${m} / ${t.length} तैयार हो रहा है...`;return e==="hi"?w:e==="en"?`Preparing Page ${m} / ${t.length}...`:e==="hinglish"?`Page ${m} / ${t.length} taiyar ho raha hai...`:ot(w,e)},S=/milan|36_gun/i.test(i)?e==="en"?"Preparing 36-Gun Vivah Milan PDF":"36 गुण विवाह मिलान तैयार हो रहा है":"PANDIT JI ONLINE • 4K वैदिक PDF",$=document.createElement("div");$.id="vedic-pdf-progress-badge",$.className="pj-velvet-glass-modal",$.style.cssText=`position:fixed;top:16px;left:50%;transform:translateX(-50%);z-index:999999;background:linear-gradient(135deg, rgba(255,255,255,0.09) 0%, transparent 55%), linear-gradient(155deg, var(--theme-velvet-modal-top, rgba(24,20,38,0.88)) 0%, var(--theme-velvet-modal-bottom, rgba(14,16,30,0.92)) 100%) !important;backdrop-filter:blur(12px) saturate(135%);-webkit-backdrop-filter:blur(12px) saturate(135%);border:1px solid var(--theme-velvet-border, rgba(255,223,140,0.36)) !important;color:#FFFDF7;padding:12px 16px;border-radius:16px;width:min(92vw,408px);box-shadow:0 18px 46px rgba(0,0,0,0.58), inset 0 1px 0 rgba(255,255,255,0.18);font-family:${R};box-sizing:border-box;`,$.innerHTML=`
    <div style="display:flex;align-items:center;gap:11px;margin-bottom:9px;">
      <div style="width:36px;height:36px;border-radius:50%;padding:1.8px;background:linear-gradient(135deg,#FDE047 0%,#D4AF37 52%,#FF6F00 100%);box-shadow:0 2px 10px rgba(0,0,0,0.35);flex-shrink:0;display:flex;align-items:center;justify-content:center;overflow:hidden;box-sizing:border-box;">
        <img src="${I}" onerror="this.onerror=null;this.src='/pandit-photo.jpg';" alt="पण्डित जी ऑनलाइन (Pandit Ji Online)" style="width:100%;height:100%;border-radius:50%;object-fit:cover;display:block;background:#0F172A;" />
      </div>
      <div style="flex:1;min-width:0;">
        <div style="font-size:12px;font-weight:800;color:#FFFDF7;line-height:1.3;">${S}</div>
        <div id="vedic-pdf-progress-text" style="font-size:11px;font-weight:600;color:#F1F5F9;margin-top:2px;">${u(1)}</div>
      </div>
      <div id="vedic-pdf-progress-pct" style="font-size:12px;font-weight:900;color:color-mix(in srgb, var(--theme-accent, #FDE68A) 52%, #FFFDF7 48%);min-width:34px;text-align:right;font-family:monospace;">0%</div>
    </div>
    <div style="width:100%;height:7px;background:color-mix(in srgb, var(--theme-bg, #0F172A) 65%, rgba(255,253,247,0.16) 35%);border-radius:999px;overflow:hidden;border:1px solid color-mix(in srgb, var(--theme-primary, #D97706) 45%, #F59E0B 25%);">
      <div id="vedic-pdf-progress-fill" style="width:4%;height:100%;background:linear-gradient(90deg, var(--theme-primary, #FF6F00), var(--theme-accent, #D4AF37), #FDE68A);border-radius:999px;transition:width 0.18s ease-out;"></div>
    </div>
  `;const y=m=>{const w=Math.min(100,Math.round(m/Math.max(1,t.length)*100)),f=$.querySelector("#vedic-pdf-progress-text"),x=$.querySelector("#vedic-pdf-progress-pct"),h=$.querySelector("#vedic-pdf-progress-fill");f&&(f.innerText=u(m)),x&&(x.innerText=`${w}%`),h&&(h.style.width=`${Math.max(4,w)}%`)};document.body.appendChild(b),document.body.appendChild($);try{const m=b.contentDocument||b.contentWindow?.document;if(!m)throw new Error("Could not initialize clean PDF iframe document");m.open(),m.write(`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;600;700;800&display=swap" />
  ${g}
</head>
<body style="margin:0;padding:0;background:#faf4e8;color:#1e293b;">
  <div id="vedic-pdf-render-host" style="width:794px;height:1123px;margin:0;padding:0;background:#faf4e8;overflow:hidden;"></div>
</body>
</html>`),m.close();const w=m.getElementById("vedic-pdf-render-host");if(!w)throw new Error("Could not find PDF render host in clean iframe");await ce(m,1600);const f=2.25;for(let x=0;x<t.length;x++){y(x+1),w.innerHTML=pe(t[x],x+1,t.length);const h=w.querySelector(".vedic-pdf-page");if(!h)continue;e!=="hi"&&le(h,e),await fi(h,m);const F=Array.from(h.querySelectorAll("img"));F.length>0&&await Promise.race([Promise.all(F.map(D=>D.complete?Promise.resolve():new Promise(B=>{D.onload=()=>B(),D.onerror=()=>B()}))),new Promise(D=>setTimeout(D,350))]),await new Promise(D=>setTimeout(D,10)),x>0&&l.addPage("a4","portrait"),document.fonts?.ready&&await document.fonts.ready;const P=await s(h,{scale:f,useCORS:!0,allowTaint:!0,logging:!1,backgroundColor:"#faf4e8",x:0,y:0,scrollX:0,scrollY:0,width:794,height:1123,windowWidth:794,windowHeight:1123,onclone:D=>{ge(D,".vedic-pdf-page")}});l.setFillColor(250,244,232),l.rect(0,0,p,c,"F");const j=P.toDataURL("image/jpeg",.86);l.addImage(j,"JPEG",0,0,p,c,void 0,"FAST"),P.width=0,P.height=0,w.innerHTML=""}return await yi(l,i,t,e),!0}catch(m){return console.error("Error rendering Vedic PDF, opening direct print fallback:",m),bt(t,i,e),!0}finally{document.body.contains($)&&document.body.removeChild($),document.body.contains(b)&&document.body.removeChild(b)}}async function wi(t,i="kundali-milan-full-report-container",e="hi"){const n=ae(t),a=dt(t.boyName),r=dt(t.girlName),s=e==="hi"?"":`_${e.toUpperCase()}`,l=`Brihat_36_Gun_Milan_${a}_and_${r}${s}_PanditJiOnline`;return vi(n,l,e)}function $i(t,i="hi"){const e=ae(t),n=dt(t.boyName),a=dt(t.girlName),r=i==="hi"?"":`_${i.toUpperCase()}`,s=`Brihat_36_Gun_Milan_${n}_and_${a}${r}_PanditJiOnline`;bt(e,s,i)}export{v as P,k as V,ci as a,Ft as b,pi as c,wi as d,Vt as e,ri as f,gi as g,ai as h,Gt as i,re as j,ge as k,$i as p,dt as s,ce as w};
