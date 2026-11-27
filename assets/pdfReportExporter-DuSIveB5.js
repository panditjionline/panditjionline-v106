const Ye=(e,i=Ye,t=i.f||(i.f=["assets/jspdf.es.min-DGgkrMK7.js","assets/vendor-react-DwUEwgAQ.js"]))=>e.map(n=>t[n]);import{_ as Oe}from"./vendor-react-DwUEwgAQ.js";import{a as We,u as G,s as X,v as J,q as Zt}from"./panchang-core-DobwkCWw.js";import{B as K,i as B,t as oe}from"./index-9msyLtvB.js";import{P as ei,s as ti}from"./phalitDeduplicator-BGvyKkly.js";import{Q as qe}from"./browser-Ban-Atb5.js";const N={saffron:"#FF6F00",saffronDeep:"#C2410C",saffronSoft:"#FFF3E0",templeGold:"#D4AF37",templeGoldDark:"#9A6B11",templeGoldSoft:"#FDF5DF",cosmicNavy:"#0F172A",cosmicNavySoft:"#1E293B",warmIvory:"#FFF9ED",pureIvory:"#FFFDF8",inkPrimary:"#1E293B",inkMuted:"#475569",emerald:"#047857",emeraldSoft:"#ECFDF5",crimson:"#B91C1C",crimsonSoft:"#FEF2F2",borderGold:"#D4AF37",borderMuted:"#E7D5AE"},w={website:"https://www.panditjionline.online",websiteDisplay:"www.panditjionline.online",youtube:K.youtubeUrl,youtubeHandle:K.youtubeHandle,whatsapp:`https://wa.me/${K.whatsappNumber}?text=${encodeURIComponent("नमस्ते आचार्य पण्डित शशांक शर्मा जी, मैंने पण्डित जी ऑनलाइन की बृहत् जन्म कुंडली पुस्तक PDF डाउनलोड की है। कृपया मार्गदर्शन प्रदान करें।")}`,phoneDisplay:K.displayPhone,founderHi:"आचार्य पण्डित शशांक शर्मा",locationHi:K.location,email:K.email},we="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="120">
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
    </svg>`);let ke=null;async function ii(){return B.startsWith("data:image/")?B:typeof window>"u"||typeof fetch!="function"?we:(ke||(ke=(async()=>{const e=["/pandit-shashank-sharma.jpg","/pandit-photo.jpg","/pwa-192x192.png","/apple-touch-icon.png"];for(const i of e)try{const t=new AbortController,n=window.setTimeout(()=>t.abort(),1600),r=await fetch(i,{signal:t.signal,cache:"force-cache"});if(window.clearTimeout(n),!r.ok)continue;const a=await r.blob(),s=await new Promise(p=>{const l=new FileReader;l.onloadend=()=>p(typeof l.result=="string"?l.result:""),l.onerror=()=>p(""),l.readAsDataURL(a)});if(s.startsWith("data:image/"))return s}catch{}return we})()),ke)}function Ve(e){return e&&(e.startsWith("data:image/")||e.startsWith("/"))?e:B.length>0&&(B.startsWith("data:image/")||typeof window<"u")?B:we}function Fe(e,i,t=2){const n=Ve(i),r=n.startsWith("data:")?"":` onerror="this.onerror=null;this.src='/pandit-photo.jpg';"`;return`
    <div style="width: ${e}px; height: ${e}px; border-radius: 50%; padding: ${t}px; background: linear-gradient(135deg, #FDE047 0%, ${N.templeGold} 52%, ${N.saffron} 100%); box-shadow: 0 2px 10px rgba(0, 0, 0, 0.35); flex-shrink: 0; align-self: center; display: flex; align-items: center; justify-content: center; overflow: hidden; box-sizing: border-box;">
      <img src="${n}"${r} alt="पण्डित जी ऑनलाइन (Pandit Ji Online)" width="${e-t*2}" height="${e-t*2}" style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover; object-position: center; display: block; background: ${N.cosmicNavy};" />
    </div>
  `}function Q(e,i=68,t="#0F172A",n="#FFFFFF"){const r=(e||w.website).trim()||w.website,a=qe.create(r,{errorCorrectionLevel:"M"}),s=a.modules.size,p=2,l=s+p*2,c=[];for(let g=0;g<s;g++)for(let m=0;m<s;m++)a.modules.get(g,m)&&c.push(`M${m+p} ${g+p}h1v1h-1z`);return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${l} ${l}" width="${i}" height="${i}" shape-rendering="crispEdges" role="img" aria-label="QR Code for ${T(r)}" style="width:${i}px;height:${i}px;display:block;margin:0 auto;"><rect width="${l}" height="${l}" fill="${n}"/><path d="${c.join("")}" fill="${t}"/></svg>`}let Ne=null;async function Se(e,i=N.cosmicNavy,t="#FFFFFF"){try{return await qe.toDataURL(e,{errorCorrectionLevel:"M",margin:1,width:220,color:{dark:i,light:t}})}catch{const n=Q(e,220,i,t);return`data:image/svg+xml;charset=utf-8,${encodeURIComponent(n)}`}}async function ai(){return Ne||(Ne=(async()=>{const[e,i,t,n]=await Promise.all([Se(w.website,"#0F172A","#FFFDF8"),Se(w.youtube,"#0F172A","#FFFDF8"),Se(w.whatsapp,"#0F172A","#FFFDF8"),ii()]);return{websiteQrDataUrl:e,youtubeQrDataUrl:i,whatsappQrDataUrl:t,appLogoDataUrl:n}})()),Ne}const oi={after_charts_b:{slot:"after_charts_b",badgeHi:"PANDIT JI ONLINE • निःशुल्क वैदिक सेवाएँ",titleHi:"दैनिक दृक् गणित पंचांग, चौघड़िया एवं सटीक राशिफल — प्रतिदिन प्रातः",bodyHi:"तिथि, नक्षत्र, योग, करण, अभिजीत मुहूर्त, राहुकाल और चंद्र-आधारित दैनिक, साप्ताहिक व मासिक राशिफल अपने मोबाइल पर बिल्कुल निःशुल्क देखें।",highlightsHi:["दृक् गणित लाहिड़ी पंचांग","दैनिक/मासिक राशिफल","शुभ मुहूर्त व व्रत-त्योहार"],ctaHi:"QR स्कैन करें या विज़िट करें:",urlLabel:w.websiteDisplay,qrUrl:w.website,qrKey:"websiteQrDataUrl",accentColor:N.saffron},after_vargas_c:{slot:"after_vargas_c",badgeHi:"PANDIT JI ONLINE • पारिवारिक ज्योतिष मंच",titleHi:"निःशुल्क सम्पूर्ण जन्म कुंडली पुस्तक एवं 36 गुण विवाह मिलान",bodyHi:"परिवार के किसी भी सदस्य की वैदिक जन्म कुंडली, 16 षोडशवर्ग, मांगलिक परीक्षण और अष्टकूट 36 गुण विवाह मिलान कुछ ही सेकंड में तैयार करें।",highlightsHi:["निःशुल्क जन्म कुंडली पुस्तक","36 गुण अष्टकूट मिलान","भारत व विदेश टाइमज़ोन समर्थन"],ctaHi:"ऑनलाइन सेवा खोलें:",urlLabel:w.websiteDisplay,qrUrl:w.website,qrKey:"websiteQrDataUrl",accentColor:N.templeGoldDark},after_ashtakavarga_e:{slot:"after_ashtakavarga_e",badgeHi:"PANDIT JI ONLINE • डिजिटल सनातन मंदिर",titleHi:"डिजिटल मंदिर, आरती-चालीसा संग्रह एवं 108 रुद्राक्ष मंत्र जप",bodyHi:"अपने इष्टदेव की प्रतिदिन आरती, प्रामाणिक चालीसा, स्तोत्र पाठ और 108 मनकों वाला डिजिटल मंत्र जप काउंटर — घर या यात्रा में कहीं भी भक्ति का साथ।",highlightsHi:["डिजिटल आरती व दर्शन","108 रुद्राक्ष जप काउंटर","संपूर्ण चालीसा एवं स्तोत्र"],ctaHi:"डिजिटल मंदिर में प्रवेश करें:",urlLabel:w.websiteDisplay,qrUrl:w.website,qrKey:"websiteQrDataUrl",accentColor:N.saffron},after_gochar_g:{slot:"after_gochar_g",badgeHi:"PANDIT JI ONLINE OFFICIAL • वैदिक मंच एवं YOUTUBE",titleHi:"आचार्य पण्डित शशांक शर्मा से जुड़ें — लाइव पंचांग, गोचर एवं धर्म चैनल",bodyHi:"ग्रह गोचर विश्लेषण, प्रमुख व्रत-त्योहारों के सटीक मुहूर्त, वैदिक पूजन विधि और सरल ज्योतिष ज्ञान हेतु हमारी आधिकारिक वेबसाइट एवं चैनल से जुड़ें।",highlightsHi:["दैनिक पंचांग व व्रत विधि","ग्रह गोचर मार्गदर्शन","सरल सात्विक वैदिक उपाय"],ctaHi:"ऑनलाइन मंच स्कैन करें:",urlLabel:`${w.websiteDisplay} • YouTube: ${w.youtubeHandle}`,qrUrl:w.website,qrKey:"websiteQrDataUrl",accentColor:N.crimson},back_cover_i:{slot:"back_cover_i",badgeHi:"प्रामाणिक वैदिक परामर्श • PANDIT JI ONLINE",titleHi:"व्यक्तिगत कुंडली विश्लेषण, विवाह मिलान एवं वैदिक अनुष्ठान परामर्श",bodyHi:"यदि आप विवाह, संतान, व्यवसाय, सरकारी नौकरी, ग्रह-शांति पूजा या रत्न चयन पर प्रत्यक्ष ज्योतिषीय मार्गदर्शन चाहते हैं, तो आचार्य पण्डित शशांक शर्मा जी से सीधे संपर्क करें।",highlightsHi:[`सम्पर्क / WhatsApp: ${w.phoneDisplay}`,w.locationHi,w.websiteDisplay],ctaHi:"वेबसाइट / WhatsApp स्कैन करें:",urlLabel:w.websiteDisplay,qrUrl:w.website,qrKey:"websiteQrDataUrl",accentColor:N.saffron}};function T(e){return String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Ge(e,i,t){if(t&&e!=="back_cover_i")return"";const n=oi[e],r=Q(n.qrUrl||w.website,68,"#0F172A","#FFFFFF"),a=Q(w.website,62,"#0F172A","#FFFFFF"),s=Fe(42,i.appLogoDataUrl,2);return t&&e==="back_cover_i"?`
      <div class="book-banner-slot">
        <div class="book-banner" style="margin: 0; width: 100%; background: ${N.pureIvory}; border: 1.8px solid ${N.templeGold}; border-radius: 11px; padding: 12px 15px; display: flex; align-items: center; justify-content: space-between; gap: 14px;">
          <div style="display: flex; align-items: center; gap: 12px; flex: 1; min-width: 0;">
            ${s}
            <div style="display: flex; flex-direction: column; justify-content: center; flex: 1; min-width: 0;">
              <div style="font-size: 8.8px; font-weight: 800; letter-spacing: 0; color: ${N.saffronDeep}; line-height: 1.3;">
                पण्डित जी ऑनलाइन (PANDIT JI ONLINE) • सत्यापित वैदिक जन्म पत्रिका
              </div>
              <div style="font-size: 11.5px; font-weight: 800; color: ${N.cosmicNavy}; margin-top: 2px; line-height: 1.3;">
                ${T(w.founderHi)} • ${T(w.locationHi)}
              </div>
              <div style="font-size: 9.2px; color: ${N.inkMuted}; margin-top: 3px; line-height: 1.45;">
                सम्पर्क / WhatsApp: <b style="color:${N.cosmicNavy};">${T(w.phoneDisplay)}</b> &nbsp;|&nbsp; वेबसाइट: <b style="color:${N.saffronDeep};">${T(w.websiteDisplay)}</b>
              </div>
            </div>
          </div>
          <div style="flex-shrink: 0; align-self: center; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; background: #ffffff; border: 1.2px solid ${N.templeGold}; border-radius: 8px; padding: 4px; width: 78px;">
            ${a}
            <div style="font-size: 6.8px; font-weight: 800; color: ${N.cosmicNavy}; margin-top: 3px; line-height: 1.2;">स्कैन करें</div>
          </div>
        </div>
      </div>
    `:`
    <div class="book-banner-slot">
      <div class="book-banner" style="margin: 0; width: 100%; background: linear-gradient(135deg, ${N.cosmicNavy} 0%, #17243D 72%, #241910 100%); border: 2px solid ${N.templeGold}; border-radius: 12px; padding: 12px 15px; color: ${N.warmIvory}; display: flex; align-items: center; justify-content: space-between; gap: 14px; box-shadow: 0 3px 12px rgba(15, 23, 42, 0.16);">
        <div style="display: flex; align-items: center; gap: 12px; flex: 1; min-width: 0;">
          ${s}
          <div style="display: flex; flex-direction: column; justify-content: center; flex: 1; min-width: 0;">
            <div class="book-banner-badge" data-badge-bg="${n.accentColor}" style="display: inline-flex; align-items: center; justify-content: center; align-self: flex-start; min-height: 18px; padding: 2px 10px; line-height: 1.15; background: ${n.accentColor}; color: #FFFFFF; font-size: 8px; font-weight: 800; letter-spacing: 0; border-radius: 999px; margin-bottom: 5px; box-sizing: border-box; text-align: center;"><span class="book-banner-badge-text" style="display: inline-block; line-height: 1.15;">${T(n.badgeHi)}</span></div>
            <div style="font-size: 11.8px; font-weight: 800; color: #FDE68A; line-height: 1.35;">
              ${T(n.titleHi)}
            </div>
            <div style="font-size: 8.8px; color: #F1F5F9; line-height: 1.48; margin-top: 3px;">
              ${T(n.bodyHi)}
            </div>
            <div class="book-banner-pills" style="display: flex; flex-wrap: wrap; align-items: center; gap: 6px; margin-top: 6px;">
              ${n.highlightsHi.map(p=>`<span class="book-banner-pill" style="display: inline-flex; align-items: center; justify-content: center; font-size: 7.9px; font-weight: 700; line-height: 1.2; color: #FFF9ED; background: rgba(212, 175, 55, 0.18); border: 1px solid rgba(212, 175, 55, 0.55); padding: 4px 8px; border-radius: 4px; box-sizing: border-box; vertical-align: middle;">✦ ${T(p)}</span>`).join("")}
            </div>
            <div style="font-size: 8.2px; color: #FCD34D; margin-top: 5px; font-weight: 700; line-height: 1.3;">
              ${T(n.ctaHi)} <span style="color: #FFFFFF; font-variant-numeric: tabular-nums;">${T(n.urlLabel)}</span>
            </div>
          </div>
        </div>

        <div style="flex-shrink: 0; align-self: center; display: flex; flex-direction: column; align-items: center; justify-content: center; background: #FFFFFF; border: 2px solid ${N.templeGold}; border-radius: 8px; padding: 5px; text-align: center; width: 84px;">
          ${r}
          <div style="font-size: 7px; font-weight: 800; color: ${N.cosmicNavy}; margin-top: 3px; line-height: 1.2;">स्कैन करें</div>
        </div>
      </div>
    </div>
  `}function ri(e,i){if(i)return Ge("back_cover_i",e,!0);const t=Fe(54,e.appLogoDataUrl,2.5),n=Q(w.website,64,"#0F172A","#FFFFFF"),r=Q(w.whatsapp,64,"#064E3B","#FFFFFF");return`
    <div class="book-banner-slot">
      <div class="book-banner" style="margin: 0; width: 100%; background: linear-gradient(135deg, ${N.cosmicNavy} 0%, #16223A 65%, #2B170A 100%); border: 2px solid ${N.templeGold}; border-radius: 13px; padding: 15px 17px; color: ${N.warmIvory}; display: flex; align-items: center; justify-content: space-between; gap: 14px;">
        <div style="display: flex; align-items: center; gap: 13px; flex: 1; min-width: 0;">
          ${t}
          <div style="display: flex; flex-direction: column; justify-content: center; flex: 1; min-width: 0;">
            <div style="font-size: 8.6px; font-weight: 800; color: ${N.templeGold}; letter-spacing: 0; line-height: 1.3;">
              ॥ सही समय, सटीक ज्ञान — पण्डित जी ऑनलाइन की पहचान ॥
            </div>
            <div style="font-size: 13.5px; font-weight: 800; color: #FFFFFF; margin-top: 3px; line-height: 1.3;">
              ${T(w.founderHi)} • वैदिक ज्योतिष एवं पूजन परामर्श
            </div>
            <div style="font-size: 9px; color: #E2E8F0; line-height: 1.5; margin-top: 4px;">
              विवाह, करियर, संतान, व्यवसाय, ग्रह-शांति पूजा, रत्न-रुद्राक्ष चयन अथवा जन्म कुंडली के किसी भी विशेष प्रश्न पर प्रामाणिक शास्त्रीय परामर्श के लिए संपर्क करें।
            </div>
            <div style="margin-top: 7px; font-size: 8.8px; color: #FDE68A; line-height: 1.55;">
              <div><b>वेबसाइट:</b> ${T(w.websiteDisplay)} &nbsp;|&nbsp; <b>YouTube:</b> ${T(w.youtubeHandle)}</div>
              <div><b>फ़ोन / WhatsApp:</b> ${T(w.phoneDisplay)} &nbsp;|&nbsp; <b>स्थान:</b> ${T(w.locationHi)}</div>
            </div>
          </div>
        </div>

        <div style="display: flex; align-items: center; justify-content: center; gap: 8px; flex-shrink: 0; align-self: center;">
          <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; background: #FFFFFF; border: 1.8px solid ${N.templeGold}; border-radius: 8px; padding: 4px; text-align: center; width: 78px;">
            ${n}
            <div style="font-size: 7px; font-weight: 800; color: ${N.cosmicNavy}; margin-top: 3px; line-height: 1.2;">वेबसाइट खोलें</div>
          </div>
          <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; background: #FFFFFF; border: 1.8px solid #10B981; border-radius: 8px; padding: 4px; text-align: center; width: 78px;">
            ${r}
            <div style="font-size: 7px; font-weight: 800; color: #047857; margin-top: 3px; line-height: 1.2;">WhatsApp परामर्श</div>
          </div>
        </div>
      </div>
    </div>
  `}function Xe(e){const i=String(e||"").trim();if(!i)return"—";const t=i.match(/^(\d{4})[-/](\d{1,2})[-/](\d{1,2})$/);if(t)return`${t[3].padStart(2,"0")}-${t[2].padStart(2,"0")}-${t[1]}`;const n=i.match(/^(\d{1,2})[-/](\d{1,2})[-/](\d{4})$/);return n?`${n[1].padStart(2,"0")}-${n[2].padStart(2,"0")}-${n[3]}`:i}function ni(e){return String(e??"").replace(/\$([^$]+)\$/g,"$1").replace(/\^?\{\\circ\}|\\circ|\\degree|\\deg\b|º/g,"°").replace(/\^?\{\\prime\\prime\}|\\prime\\prime|″|”|“/g,'"').replace(/\^?\{\\prime\}|\\prime|′|’|‘/g,"'").replace(/(\d{1,3})\s*°\s*(\d{1,2})\s*'\s*(\d{1,2})\s*"/g,`$1° $2' $3"`).replace(/(\d{1,3})\s*°\s*(\d{1,2})\s*'/g,"$1° $2'").trim()}function U(e){return String(e??"").normalize("NFC").replace(/परिहार\s+परिहार/gu,"परिहार")}function Je(e,i){const t=String(e||"").split(" ")[0].normalize("NFC").trim(),n=ni(i);return`<span class="pj-h2c-no-lift" style="font-family: 'Noto Sans Devanagari', 'Nirmala UI', 'Mangal', sans-serif; font-weight: 700; direction: ltr; unicode-bidi: isolate;">${o(t)}</span>&nbsp;<span class="pj-h2c-no-lift" style="font-family: 'Segoe UI', 'Liberation Sans', 'Helvetica Neue', Arial, sans-serif; font-variant-numeric: tabular-nums; font-weight: 700; direction: ltr; unicode-bidi: isolate; white-space: nowrap;">(${o(n)})</span>`}function Ke(e,i){const t=String(e||"").split(" ")[0].normalize("NFC").trim(),n=String(i||"").normalize("NFC").trim(),r=n.match(/^([^(]+?)\s*(\([^)]+\))$/),a=r?`<span style="display:inline-block; font-weight:700; margin-left:3px;">${o(r[1].trim())}</span><span style="display:inline-block; font-weight:700; margin-left:2.5px;">${o(r[2].trim())}</span>`:`<span style="display:inline-block; font-weight:700; margin-left:3px;">${o(n)}</span>`;return`<div class="pj-h2c-no-lift" style="font-weight:800; font-size:8.2px; line-height:1.35; direction:ltr; unicode-bidi:isolate;">${o(t)}</div><div class="pj-h2c-no-lift" style="font-size:7.65px; line-height:1.38; margin-top:1.5px; white-space:nowrap; direction:ltr; unicode-bidi:isolate;"><span style="display:inline-block; margin-right:1.5px;">(</span><span style="display:inline-block;">स्वामी:</span>${a}<span style="display:inline-block; margin-left:1.5px;">)</span></div>`}const Qe={सूर्य:{friends:["चन्द्र","चंद्र","मंगल","गुरु"],neutral:["बुध"],enemies:["शुक्र","शनि","राहु","केतु"]},चन्द्र:{friends:["सूर्य","बुध"],neutral:["मंगल","गुरु","शुक्र","शनि"],enemies:["राहु","केतु"]},चंद्र:{friends:["सूर्य","बुध"],neutral:["मंगल","गुरु","शुक्र","शनि"],enemies:["राहु","केतु"]},मंगल:{friends:["सूर्य","चन्द्र","चंद्र","गुरु"],neutral:["शुक्र","शनि"],enemies:["बुध","राहु","केतु"]},बुध:{friends:["सूर्य","शुक्र","राहु"],neutral:["मंगल","गुरु","शनि"],enemies:["चन्द्र","चंद्र","केतु"]},गुरु:{friends:["सूर्य","चन्द्र","चंद्र","मंगल"],neutral:["शनि","केतु"],enemies:["बुध","शुक्र","राहु"]},शुक्र:{friends:["बुध","शनि","राहु"],neutral:["मंगल","गुरु"],enemies:["सूर्य","चन्द्र","चंद्र","केतु"]},शनि:{friends:["बुध","शुक्र","राहु"],neutral:["गुरु"],enemies:["सूर्य","चन्द्र","चंद्र","मंगल","केतु"]},राहु:{friends:["बुध","शुक्र","शनि"],neutral:["गुरु"],enemies:["सूर्य","चन्द्र","चंद्र","मंगल"]},केतु:{friends:["मंगल","गुरु"],neutral:["बुध","शुक्र","शनि"],enemies:["सूर्य","चन्द्र","चंद्र"]}},Ze={1:"मंगल",2:"शुक्र",3:"बुध",4:"चन्द्र",5:"सूर्य",6:"बुध",7:"शुक्र",8:"मंगल",9:"गुरु",10:"शनि",11:"शनि",12:"गुरु"},di={1:"mars",2:"venus",3:"mercury",4:"moon",5:"sun",6:"mercury",7:"venus",8:"mars",9:"jupiter",10:"saturn",11:"saturn",12:"jupiter"},li=["केतु","शुक्र","सूर्य","चन्द्र","मंगल","राहु","गुरु","शनि","बुध"];function Z(e){const i=String(e||"गुरु").split(" ")[0].trim();return i==="चंद्र"?"चन्द्र":i}function re(e,i){const t=Z(e),n=Z(i);if(t===n)return{relation:"स्वग्रह / एक ही स्वामी (अति उत्तम मित्र)",color:"#047857",harmonyNote:"दोनों राशियों/ग्रहों का स्वामी एक ही होने से पूर्ण वैचारिक एवं आत्मिक एकरूपता।",score:2};const r=Qe[t],a=Qe[n],s=r?.friends.includes(n)?1:r?.enemies.includes(n)?-1:0,p=a?.friends.includes(t)?1:a?.enemies.includes(t)?-1:0,l=s+p;return l>=2?{relation:"नैसर्गिक मित्र (Natural Friends — परस्पर मित्र)",color:"#047857",harmonyNote:"परस्पर घनिष्ठ नैसर्गिक मित्रता — दांपत्य में सहज प्रेम, सम्मान व सहयोग।",score:l}:l===1?{relation:"मित्र + सम (Mitra — शुभ समन्वय)",color:"#047857",harmonyNote:"एक पक्ष मित्र व दूसरा सम होने से गृहस्थ जीवन में उत्तम सामंजस्य।",score:l}:l===0?{relation:"सम भाव (Neutral — संतुलित संबंध)",color:"#b45309",harmonyNote:"मध्यम/सम संबंध — आपसी संवाद एवं समझदारी से सुखद निर्वाह।",score:l}:{relation:"वैचारिक भिन्नता (शांति उपाय कल्पनीय)",color:"#be123c",harmonyNote:"स्वाभाविक दृष्टिकोण में अंतर — धैर्य एवं इष्ट आराधना से सामंजस्य स्थापित करें।",score:l}}function ge(e,i){const t=String(e||"").trim();return t?t.includes(i)?t:`${t} ${i}`:i}function et(e,i){const t=e.navamsaChart?.[0],n=t?.rashiNumber||e.panchang.lagnaNumber||1,r=t?.rashiName||e.phase1Astronomy?.shodashavarga?.find(s=>s.spec.id==="D9")?.ascendantRashiNameHi||i,a=Ze[n]||"गुरु";return{rashiName:r,rashiNumber:n,lordHi:a}}function tt(e){const i=Zt.findIndex(t=>t===e||e.includes(t.split(" ")[0]));return li[(i>=0?i:0)%9]}function it(e,i){const t=J(e.id,i);return t.isDebilitated&&t.isCancelled?'<span style="color:#047857;font-size:7.6px;font-weight:700;">अवस्था: नीच (नीचभंग युक्त)</span>':t.isDebilitated?'<span style="color:#be123c;font-size:7.6px;font-weight:700;">अवस्था: नीच (Debilitated)</span>':e.isExalted||e.dignity.includes("स्वगृही")?`<span style="color:#047857;font-size:7.6px;font-weight:700;">अवस्था: ${o(e.dignity)}</span>`:`<span style="color:#475569;font-size:7.6px;">अवस्था: ${o(e.dignity)}</span>`}function ne(e,i){if(!e)return"संतुलित";const t=J(e.id,i);return t.isDebilitated&&t.isCancelled?"नीचभंग युक्त (सबल)":t.isDebilitated?"नीचस्थ (उपाय अपेक्षित)":e.isExalted?"उच्चस्थ (अति बली)":e.dignity.includes("स्वगृही")?"स्वगृही (बली)":e.dignity.includes("मित्र")?"मित्र राशि में शुभ":"मध्यम/सम बल"}function H(e,i){const t=e.lagnaChart?.[i-1],n=t?.rashiNumber||(e.panchang.lagnaNumber+i-2)%12+1,r=t?.rashiName?.split(" ")[0]||"मेष",a=Ze[n]||"गुरु",s=di[n]||"jupiter",p=e.planets.find(h=>h.id===s),l=p?J(p.id,e):{isDebilitated:!1,isCancelled:!1},c=p?[1,2,4,5,7,9,10,11].includes(p.houseInLagna):!1,g=!!(p&&(p.isExalted||p.dignity.includes("स्वगृही")||p.dignity.includes("मित्र")||l.isCancelled||c)&&!(l.isDebilitated&&!l.isCancelled)),m=p?`${a} (${G(p.houseInLagna)}, ${ne(p,e)})`:`${a}`;return{rashiName:r,lordHi:a,lordPlanet:p,isStrong:g,label:m}}function si(e,i){const t=new Date().getFullYear(),n=x=>{const y=x.mahadashas||[],D=y.filter(j=>j.endYear>=t&&j.startYear<=t+12);if(D.length>0)return D.slice(0,2);const L=y.find(j=>j.isCurrent);return L?[L]:y.slice(0,2)},r=(x,y)=>{const D=Z(x.planet),L=y.planets.find(I=>Z(I.hindiName)===D);let j=0;if(["गुरु","शुक्र","बुध","चन्द्र"].includes(D)&&(j+=2),L){const I=J(L.id,y);(L.isExalted||L.dignity.includes("स्वगृही")||I.isCancelled)&&(j+=2),[1,2,4,5,7,9,10,11].includes(L.houseInLagna)&&(j+=2),I.isDebilitated&&!I.isCancelled&&(j-=2)}return j},a=n(e),s=n(i),p=e.mahadashas.find(x=>x.isCurrent)||a[0],l=i.mahadashas.find(x=>x.isCurrent)||s[0],c=a.find(x=>x!==p),g=s.find(x=>x!==l),m=p?r(p,e):1,h=l?r(l,i):1,k=c?r(c,e):-1,u=g?r(g,i):-1,v=p?`${p.planet.split(" ")[0]}${p.currentAntardasha?`–${p.currentAntardasha.split(" ")[0]}`:""} (${Math.floor(p.startYear)}–${Math.floor(p.endYear)})`:"शुभ महादशा",$=l?`${l.planet.split(" ")[0]}${l.currentAntardasha?`–${l.currentAntardasha.split(" ")[0]}`:""} (${Math.floor(l.startYear)}–${Math.floor(l.endYear)})`:"शुभ महादशा",F=m+h,S=Math.min(c?Math.ceil(c.startYear):t+3,g?Math.ceil(g.startYear):t+3);if(F>=5){const x=Math.min(Math.max(t+4,Math.floor(Math.min(p?.endYear||t+5,l?.endYear||t+5))),t+6);return{windowText:`${t}–${x} (तत्काल प्रभाव से शुभ स्वर्ण काल)`,detailText:`वर की वर्तमान ${v} तथा वधू की ${$} दोनों सकारात्मक हैं — विवाह के प्रथम १–४ वर्षों में ही करियर, गृहस्थ स्थायित्व व भाग्योदय की स्पष्ट गति दिखेगी।`}}if(k>m||u>h){const x=Math.max(t+1,Math.min(S,t+4)),y=x+4,D=c&&k>m?`वर की आगामी ${c.planet.split(" ")[0]} महादशा (${Math.ceil(c.startYear)} से)`:g?`वधू की आगामी ${g.planet.split(" ")[0]} महादशा (${Math.ceil(g.startYear)} से)`:`${x} से आगामी अंतरदशा`;return{windowText:`${x}–${y} (दशा परिवर्तन उपरांत विशेष भाग्योदय)`,detailText:`वर्तमान में वर (${v}) व वधू (${$}) की दशाएं नींव तैयार कर रही हैं; ${D} प्रारंभ होते ही आर्थिक उन्नति, संतान सुख व गृहस्थ समृद्धि में तीव्र उछाल आएगा।`}}const f=t+1,b=t+5;return{windowText:`${f}–${b} (क्रमिक उन्नति व स्थिर भाग्योदय)`,detailText:`वर की ${v} एवं वधू की ${$} में शुभ अंतरदशाओं (गुरु/शुक्र/बुध) के संयोग से विवाह के १२–१८ माह बाद से निरंतर प्रगति, गृह-वाहन सुख व पारिवारिक स्थायित्व प्राप्त होगा।`}}function at(e){const i=e.boyKundali||We(e.boyName||"वर",e.boyDob||"1996-03-10",e.boyTime||"10:55",e.boyPlace||"रुद्रपुर, उत्तराखण्ड"),t=e.girlKundali||We(e.girlName||"वधू",e.girlDob||"1998-11-15",e.girlTime||"14:15",e.girlPlace||"रुद्रपुर, उत्तराखण्ड"),n=e.deepMatchInsights,r=et(i,e.boyRashi),a=et(t,e.girlRashi),s=`वर: <b style="color:#7c2d12;">${o(e.boyName)}</b> (${o(e.boyRashi)}) &nbsp;&bull;&nbsp; वधू: <b style="color:#7c2d12;">${o(e.girlName)}</b> (${o(e.girlRashi)})`,p=e.koots[0],l=e.koots[1],c=e.koots[2],g=e.koots[3],m=e.koots.find(d=>d.hindiName.includes("मैत्री")||d.name.includes("Maitri"))||e.koots[4],h=e.koots.find(d=>d.hindiName.includes("गण")||d.name.includes("Gana"))||e.koots[5],k=e.koots.find(d=>d.hindiName.includes("भकूट")||d.name.includes("Bhakoot"))||e.koots[6],u=e.koots.find(d=>d.hindiName.includes("नाड़ी")||d.name.includes("Nadi"))||e.koots[7],v=p?.obtainedPoints??0,$=l?.obtainedPoints??0,F=c?.obtainedPoints??0,S=g?.obtainedPoints??0,f=m?.obtainedPoints??0,b=h?.obtainedPoints??0,x=k?.obtainedPoints??0,y=u?.obtainedPoints??0,D=y===0,L=x===0,j=b<5,I=e.boyRashi===e.girlRashi&&e.boyNakshatra!==e.girlNakshatra,Pe=e.boyNakshatra===e.girlNakshatra&&e.boyPada!==e.girlPada,ee=D&&(I||Pe),W=Z(e.boyRashiLord)===Z(e.girlRashiLord)||f>=4,ze=re(e.boyRashiLord,e.girlRashiLord),_=re(i.panchang.lagnaLord,t.panchang.lagnaLord),le=re(r.lordHi,a.lordHi),je=tt(e.boyNakshatra),Me=tt(e.girlNakshatra),ht=re(je,Me),Re=e.manglikStatus.boyManglik?"#be123c":e.manglikStatus.boyRawManglik?"#b45309":"#047857",Te=e.manglikStatus.girlManglik?"#be123c":e.manglikStatus.girlRawManglik?"#b45309":"#047857",xt=e.manglikStatus.boyMarsHouseVenus??e.manglikStatus.boyMarsHouseMoon,bt=e.manglikStatus.girlMarsHouseVenus??e.manglikStatus.girlMarsHouseMoon,fe=ge(h?.boyValue,"गण"),me=ge(h?.girlValue,"गण"),Ae=ge(u?.boyValue,"नाड़ी"),Le=ge(u?.girlValue,"नाड़ी"),ft=`
    ${Y("बृहत् ३६ गुण मिलान एवं वैदिक विवाह मेलापक महा-पत्रिका (7-Page Report)","दृक् गणित, लाहिड़ी चित्रापक्ष अयनांश एवं बृहत् पाराशर होरा शास्त्र पर आधारित",s)}

    <div style="background: linear-gradient(90deg, #fff6e0 0%, #fde8bf 100%); border: 2px solid #b45309; border-radius: 6px; padding: 7px 12px 9px 12px; margin-bottom: 8px; width: 100%; box-sizing: border-box;">
      <table style="width: 100%; table-layout: fixed; border-collapse: collapse;">
        <tr>
          <td style="width: 72%; vertical-align: middle; text-align: left; padding-right: 10px;">
            <div style="font-size: 9px; color: #9a3412; font-weight: 800; letter-spacing: 0.3px;">अष्टकूट ३६ गुण मिलान सर्वोच्च निर्णय (Overall Matchmaking Verdict)</div>
            <div style="font-size: 13px; font-weight: 900; color: #7c2d12; margin-top: 2px; line-height: 1.3;">
              ${o(e.overallVerdict)} &bull; <span style="color: #047857;">${e.compatibilityPercentage}% वैवाहिक अनुकूलता</span>
            </div>
            <div style="font-size: 8.6px; color: #1e293b; margin-top: 2.5px; line-height: 1.35;">
              ${o(e.verdictDescription)}
            </div>
          </td>
          <td style="width: 28%; vertical-align: middle; text-align: right;">
            <div style="background: #fffdf9; border: 2px solid #b45309; border-radius: 6px; padding: 6px 8px 8px 8px; text-align: center;">
              <div style="font-size: 18px; font-weight: 900; color: #7c2d12; line-height: 1.15;">${e.totalScore} / 36</div>
              <div style="font-size: 8.4px; color: #047857; font-weight: 800; margin-top: 2px;">प्राप्त अष्टकूट गुण (${e.compatibilityPercentage}%)</div>
              <div style="font-size: 7.7px; color: #334155; margin-top: 1px;">शास्त्रोक्त न्यूनतम मानक: 18 गुण</div>
            </div>
          </td>
        </tr>
      </table>
    </div>

    ${A("१. वर एवं वधू का संपूर्ण जन्म पंचांग व ज्योतिषीय विवरण (Groom & Bride Astro Profile)","पृष्ठ १ : मुख्य विवरण")}
    <div style="display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: 10px; align-items: stretch; width: 100%; margin-bottom: 8px; box-sizing: border-box;">
      <div style="min-width: 0; width: 100%; height: 100%; background: #fffdf9; border: 1.5px solid #d97706; border-radius: 6px; padding: 7px 10px 9px 10px; box-sizing: border-box; display: flex; flex-direction: column;">
        <div style="font-size: 10px; font-weight: 900; color: #7c2d12; border-bottom: 1px solid #d97706; padding-bottom: 4px; margin-bottom: 5px;">
          वर पत्रिका विवरण (Groom): ${o(e.boyName)}
        </div>
        <table style="width: 100%; table-layout: fixed; border-collapse: collapse; font-size: 8.3px; font-family: 'Noto Sans Devanagari', 'Nirmala UI', 'Mangal', sans-serif;">
          <colgroup>
            <col style="width: 40%;" />
            <col style="width: 60%;" />
          </colgroup>
          <tr><td style="padding: 2px 4px 2px 0; color: #9a3412; font-weight: 700; vertical-align: top;">जन्म तिथि व समय:</td><td style="padding: 2px 0; color: #1e293b; font-variant-numeric: tabular-nums; vertical-align: top;">${o(Xe(e.boyDob||i.input.formattedDob))} &bull; ${o(e.boyTime||i.input.formattedTime)}</td></tr>
          <tr><td style="padding: 2px 4px 2px 0; color: #9a3412; font-weight: 700; vertical-align: top;">जन्म स्थान:</td><td style="padding: 2px 0; color: #1e293b; vertical-align: top;">${o(e.boyPlace||i.input.birthPlace)}</td></tr>
          <tr><td style="padding: 2px 4px 2px 0; color: #9a3412; font-weight: 700; vertical-align: top;">जन्म लग्न व स्वामी:</td><td style="padding: 2px 0; color: #047857; font-weight: 700; vertical-align: top;">${o(e.boyLagna)} (${o(i.panchang.lagnaLord)})</td></tr>
          <tr><td style="padding: 2px 4px 2px 0; color: #9a3412; font-weight: 700; vertical-align: top;">चन्द्र राशि व राशिपति:</td><td style="padding: 2px 0; color: #7c2d12; font-weight: 700; vertical-align: top;">${o(e.boyRashi)} (${o(e.boyRashiLord)})</td></tr>
          <tr><td style="padding: 2px 4px 2px 0; color: #9a3412; font-weight: 700; vertical-align: top;">जन्म नक्षत्र व चरण:</td><td style="padding: 2px 0; color: #1e293b; vertical-align: top;">${o(e.boyNakshatra)} (चरण ${e.boyPada})</td></tr>
          <tr><td style="padding: 2px 4px 2px 0; color: #9a3412; font-weight: 700; vertical-align: top;">वर्ण / वश्य / योनि:</td><td style="padding: 2px 0; color: #334155; vertical-align: top;">${o(p?.boyValue)} / ${o(l?.boyValue)} / ${o(g?.boyValue)}</td></tr>
          <tr><td style="padding: 2px 4px 2px 0; color: #9a3412; font-weight: 700; vertical-align: top;">गण एवं नाड़ी:</td><td style="padding: 2px 0; color: #7c2d12; font-weight: 600; vertical-align: top;">${o(fe)} &bull; ${o(Ae)}</td></tr>
          <tr><td style="padding: 2px 4px 2px 0; color: #9a3412; font-weight: 700; vertical-align: top;">मांगलिक विचार:</td><td class="pj-h2c-no-lift" style="padding: 2px 0; color: ${Re}; font-weight: 700; line-height: 1.3; vertical-align: top;">${o(U(e.manglikStatus.boySeverity))} <span style="color:#475569;font-weight:600;">(लग्न से ${G(e.manglikStatus.boyMarsHouseLagna)})</span></td></tr>
        </table>
      </div>
      <div style="min-width: 0; width: 100%; height: 100%; background: #fffdf9; border: 1.5px solid #d97706; border-radius: 6px; padding: 6px 10px 8px 10px; box-sizing: border-box; display: flex; flex-direction: column;">
        <div style="font-size: 9.8px; font-weight: 800; color: #7c2d12; border-bottom: 1px solid #d97706; padding-bottom: 3.5px; margin-bottom: 4px;">
          वधू पत्रिका विवरण (Bride): ${o(e.girlName)}
        </div>
        <table style="width: 100%; table-layout: fixed; border-collapse: collapse; font-size: 8.2px; font-family: 'Noto Sans Devanagari', 'Nirmala UI', 'Mangal', sans-serif;">
          <colgroup>
            <col style="width: 40%;" />
            <col style="width: 60%;" />
          </colgroup>
          <tr><td style="padding: 2px 4px 2px 0; color: #9a3412; font-weight: 700; vertical-align: top;">जन्म तिथि व समय:</td><td style="padding: 2px 0; color: #1e293b; font-variant-numeric: tabular-nums; vertical-align: top;">${o(Xe(e.girlDob||t.input.formattedDob))} &bull; ${o(e.girlTime||t.input.formattedTime)}</td></tr>
          <tr><td style="padding: 2px 4px 2px 0; color: #9a3412; font-weight: 700; vertical-align: top;">जन्म स्थान:</td><td style="padding: 2px 0; color: #1e293b; vertical-align: top;">${o(e.girlPlace||t.input.birthPlace)}</td></tr>
          <tr><td style="padding: 2px 4px 2px 0; color: #9a3412; font-weight: 700; vertical-align: top;">जन्म लग्न व स्वामी:</td><td style="padding: 2px 0; color: #047857; font-weight: 700; vertical-align: top;">${o(e.girlLagna)} (${o(t.panchang.lagnaLord)})</td></tr>
          <tr><td style="padding: 2px 4px 2px 0; color: #9a3412; font-weight: 700; vertical-align: top;">चन्द्र राशि व राशिपति:</td><td style="padding: 2px 0; color: #7c2d12; font-weight: 700; vertical-align: top;">${o(e.girlRashi)} (${o(e.girlRashiLord)})</td></tr>
          <tr><td style="padding: 2px 4px 2px 0; color: #9a3412; font-weight: 700; vertical-align: top;">जन्म नक्षत्र व चरण:</td><td style="padding: 2px 0; color: #1e293b; vertical-align: top;">${o(e.girlNakshatra)} (चरण ${e.girlPada})</td></tr>
          <tr><td style="padding: 2px 4px 2px 0; color: #9a3412; font-weight: 700; vertical-align: top;">वर्ण / वश्य / योनि:</td><td style="padding: 2px 0; color: #334155; vertical-align: top;">${o(p?.girlValue)} / ${o(l?.girlValue)} / ${o(g?.girlValue)}</td></tr>
          <tr><td style="padding: 2px 4px 2px 0; color: #9a3412; font-weight: 700; vertical-align: top;">गण एवं नाड़ी:</td><td style="padding: 2px 0; color: #7c2d12; font-weight: 600; vertical-align: top;">${o(me)} &bull; ${o(Le)}</td></tr>
          <tr><td style="padding: 2px 4px 2px 0; color: #9a3412; font-weight: 700; vertical-align: top;">मांगलिक विचार:</td><td class="pj-h2c-no-lift" style="padding: 2px 0; color: ${Te}; font-weight: 700; line-height: 1.3; vertical-align: top;">${o(U(e.manglikStatus.girlSeverity))} <span style="color:#475569;font-weight:600;">(लग्न से ${G(e.manglikStatus.girlMarsHouseLagna)})</span></td></tr>
        </table>
      </div>
    </div>

    ${A("२. वर एवं वधू की लग्न (D-1) एवं नवमांश (D-9) कुंडली चक्र","स्पष्ट 2×2 उत्तर भारतीय हीरक शैली")}
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; width: 100%; margin-bottom: 8px; box-sizing: border-box;">
      <div>
        ${xe(i.lagnaChart,"वर लग्न (D-1)",`${e.boyName} (${e.boyLagna})`,204)}
      </div>
      <div>
        ${xe(i.navamsaChart,"वर नवमांश (D-9)",`नवांश लग्न: ${r.rashiName}`,204)}
      </div>
      <div>
        ${xe(t.lagnaChart,"वधू लग्न (D-1)",`${e.girlName} (${e.girlLagna})`,204)}
      </div>
      <div>
        ${xe(t.navamsaChart,"वधू नवमांश (D-9)",`नवांश लग्न: ${a.rashiName}`,204)}
      </div>
    </div>

    ${A("३. मेलापक महा-पत्रिका कार्यकारी सारांश (Executive Matchmaking Summary)","शास्त्रोक्त निष्कर्ष")}
    <div style="background: #fef8ec; border: 1.5px solid #b45309; border-radius: 6px; padding: 6px 10px 9px 10px; font-size: 8.3px; color: #1e293b; line-height: 1.4;">
      <div><b style="color: #7c2d12;">&bull; अष्टकूट गुण योग:</b> कुल ३६ गुणों में से <b style="color:#047857;">${e.totalScore} गुण (${e.compatibilityPercentage}%)</b> प्राप्त हुए हैं। शास्त्रानुसार १८ से अधिक गुण विवाह हेतु शुभ तथा २४ से अधिक गुण उत्तम कोटि के माने जाते हैं।</div>
      <div style="margin-top: 2.5px;"><b style="color: #7c2d12;">&bull; राशि स्वामी एवं सप्तम भाव समन्वय:</b> ${o(e.planetaryHarmony.rashiLordRelation)} &bull; ${o(e.planetaryHarmony.seventhHouseSummary)}</div>
      <div class="pj-h2c-no-lift" style="margin-top: 2.5px;"><b style="color: #7c2d12;">&bull; मांगलिक (कुज) व परिहार निर्णय:</b> ${o(U(e.manglikStatus.description))}</div>
    </div>
  `,mt=e.koots.map((d,R)=>{const P=d.status==="favorable"?"शुभ / उत्तम":d.status==="moderate"?"मध्यम / परिहार्य":"दोष / विचारणीय",C=d.status==="favorable"?"#047857":d.status==="moderate"?"#b45309":"#be123c",ve=d.hindiName?d.hindiName.replace(/^\d+\.\s*/,`${R+1}. `):`${R+1}. ${d.name}`;return`
        <tr style="background: ${R%2===0?"#fffdf9":"#fef7e6"};">
          <td style="padding: 4.5px 7px 7px 7px; border: 1px solid #d97706; color: #7c2d12; font-weight: 800; font-size: 8.8px; line-height: 1.32; width: 18%;">
            ${o(ve)}<br/>
            <span style="font-size: 7.7px; color: #475569; font-weight: 600;">${o(d.meaning)}</span>
          </td>
          <td style="padding: 4.5px 7px 7px 7px; border: 1px solid #d97706; color: #1e293b; font-weight: 700; font-size: 8.6px; line-height: 1.32; width: 12%;">${o(d.boyValue)}</td>
          <td style="padding: 4.5px 7px 7px 7px; border: 1px solid #d97706; color: #9a3412; font-weight: 700; font-size: 8.6px; line-height: 1.32; width: 12%;">${o(d.girlValue)}</td>
          <td style="padding: 4.5px 7px 7px 7px; border: 1px solid #d97706; color: #334155; text-align: center; font-weight: 700; font-size: 8.8px; width: 8%;">${d.maxPoints}</td>
          <td style="padding: 4.5px 7px 7px 7px; border: 1px solid #d97706; color: #7c2d12; text-align: center; font-weight: 900; font-size: 9.6px; width: 8%;">${d.obtainedPoints}</td>
          <td style="padding: 4.5px 7px 7px 7px; border: 1px solid #d97706; color: ${C}; font-weight: 800; text-align: center; font-size: 8.3px; width: 11%;">${o(P)}</td>
          <td style="padding: 4.5px 7px 7px 7px; border: 1px solid #d97706; color: #1e293b; font-size: 8.3px; line-height: 1.34; width: 31%;">
            ${o(d.verdict)}
            ${d.remedy?`<div style="color:#9a3412;font-size:7.8px;margin-top:2px;"><b>उपाय:</b> ${o(d.remedy)}</div>`:""}
          </td>
        </tr>
      `}).join(""),ut=`
    ${Y("अष्टकूट ३६ गुणों की प्रमाणिक गणना एवं शास्त्रोक्त फल सारणी","पृष्ठ २ : अष्टकूट सारणी",s,!0)}

    ${A("४. अष्टकूट (वर्ण, वश्य, तारा, योनि, मैत्री, गण, भकूट, नाड़ी) ३६ गुण सारणी",`प्राप्त गुण: ${e.totalScore} / 36`)}
    <table style="width: 100%; border-collapse: collapse; margin-bottom: 8px; table-layout: fixed;">
      <thead>
        <tr style="background: #fdecc8;">
          <th style="padding: 4px 7px 7px 7px; border: 1px solid #b45309; color: #7c2d12; font-size: 8.6px; text-align: left; width: 18%;">कूट एवं कारक क्षेत्र</th>
          <th style="padding: 4px 7px 7px 7px; border: 1px solid #b45309; color: #7c2d12; font-size: 8.6px; text-align: left; width: 12%;">वर (${o(e.boyName)})</th>
          <th style="padding: 4px 7px 7px 7px; border: 1px solid #b45309; color: #7c2d12; font-size: 8.6px; text-align: left; width: 12%;">वधू (${o(e.girlName)})</th>
          <th style="padding: 4px 7px 7px 7px; border: 1px solid #b45309; color: #7c2d12; font-size: 8.6px; text-align: center; width: 8%;">पूर्णांक</th>
          <th style="padding: 4px 7px 7px 7px; border: 1px solid #b45309; color: #7c2d12; font-size: 8.6px; text-align: center; width: 8%;">प्राप्तांक</th>
          <th style="padding: 4px 7px 7px 7px; border: 1px solid #b45309; color: #7c2d12; font-size: 8.6px; text-align: center; width: 11%;">निर्णय</th>
          <th style="padding: 4px 7px 7px 7px; border: 1px solid #b45309; color: #7c2d12; font-size: 8.6px; text-align: left; width: 31%;">शास्त्रोक्त फल एवं जीवन पर प्रभाव</th>
        </tr>
      </thead>
      <tbody>
        ${mt}
        <tr style="background: #fef0c7;">
          <td colspan="3" style="padding: 5px 7px 7px 7px; border: 1px solid #b45309; color: #7c2d12; font-weight: 900; font-size: 9px; text-align: right;">कुल अष्टकूट गुण मिलान योग (Total Ashtakoot Score):</td>
          <td style="padding: 5px 7px 7px 7px; border: 1px solid #b45309; color: #1e293b; font-weight: 900; font-size: 9.2px; text-align: center;">36</td>
          <td style="padding: 5px 7px 7px 7px; border: 1px solid #b45309; color: #7c2d12; font-weight: 900; font-size: 10.2px; text-align: center;">${e.totalScore}</td>
          <td colspan="2" style="padding: 5px 7px 7px 7px; border: 1px solid #b45309; color: #047857; font-weight: 900; font-size: 9px;">${o(e.overallVerdict)} (${e.compatibilityPercentage}% अनुकूलता)</td>
        </tr>
      </tbody>
    </table>

    ${A("५. अष्टकूट श्रेणी वर्गीकरण एवं मुहूर्त चिंतामणि प्रमाण","शास्त्रीय मानदंड")}
    <table style="width: 100%; table-layout: fixed; border-collapse: collapse; margin-bottom: 6px; font-size: 8.4px;">
      <thead>
        <tr style="background: #fdecc8;">
          <th style="padding: 3.5px 6px 6px 6px; border: 1px solid #b45309; color: #7c2d12; text-align: left; width: 22%;">गुण श्रेणी (Score Range)</th>
          <th style="padding: 3.5px 6px 6px 6px; border: 1px solid #b45309; color: #7c2d12; text-align: left; width: 23%;">शास्त्रीय कोटि</th>
          <th style="padding: 3.5px 6px 6px 6px; border: 1px solid #b45309; color: #7c2d12; text-align: left; width: 55%;">दांपत्य फलित एवं शास्त्र सम्मत निर्देश</th>
        </tr>
      </thead>
      <tbody>
        <tr style="background: ${e.totalScore>=28?"#ecfdf5":"#fffdf9"};">
          <td style="padding: 3.5px 6px 6px 6px; border: 1px solid #d97706; color: #047857; font-weight: 800;">28 से 36 गुण (78%–100%)</td>
          <td style="padding: 3.5px 6px 6px 6px; border: 1px solid #d97706; color: #1e293b; font-weight: 700;">सर्वोत्तम (Uttam Melapak)</td>
          <td style="padding: 3.5px 6px 6px 6px; border: 1px solid #d97706; color: #334155;">अखंड सौभाग्य, उत्तम संतान, प्रगाढ़ मानसिक व आध्यात्मिक सामंजस्य।</td>
        </tr>
        <tr style="background: ${e.totalScore>=24&&e.totalScore<28?"#ecfdf5":"#fef7e6"};">
          <td style="padding: 3.5px 6px 6px 6px; border: 1px solid #d97706; color: #047857; font-weight: 800;">24 से 27.5 गुण (66%–77%)</td>
          <td style="padding: 3.5px 6px 6px 6px; border: 1px solid #d97706; color: #1e293b; font-weight: 700;">अति शुभ (Shreshtha)</td>
          <td style="padding: 3.5px 6px 6px 6px; border: 1px solid #d97706; color: #334155;">सुखद गृहस्थ जीवन, विवाह पश्चात् भाग्योदय एवं पारिवारिक समृद्धि।</td>
        </tr>
        <tr style="background: ${e.totalScore>=18&&e.totalScore<24?"#fffbeb":"#fffdf9"};">
          <td style="padding: 3.5px 6px 6px 6px; border: 1px solid #d97706; color: #b45309; font-weight: 800;">18 से 23.5 गुण (50%–65%)</td>
          <td style="padding: 3.5px 6px 6px 6px; border: 1px solid #d97706; color: #1e293b; font-weight: 700;">मध्यम शुभ (Madhyam)</td>
          <td style="padding: 3.5px 6px 6px 6px; border: 1px solid #d97706; color: #334155;">शास्त्र सम्मत विवाह योग्य; ग्रह मैत्री व परिहार के साथ शुभ फलदायी।</td>
        </tr>
        <tr style="background: ${e.totalScore<18?"#fff1f2":"#fef7e6"};">
          <td style="padding: 3.5px 6px 6px 6px; border: 1px solid #d97706; color: #be123c; font-weight: 800;">18 गुण से कम (&lt;50%)</td>
          <td style="padding: 3.5px 6px 6px 6px; border: 1px solid #d97706; color: #1e293b; font-weight: 700;">परिहार एवं शांति अपेक्षित</td>
          <td style="padding: 3.5px 6px 6px 6px; border: 1px solid #d97706; color: #334155;">राशिपति मैत्री, नवांश बल एवं विशेष वैदिक शांति अनुष्ठान के उपरांत ही विचारणीय।</td>
        </tr>
      </tbody>
    </table>
  `,yt=(()=>{if(!j)return`
        <div style="margin-top: 3px; background: #ecfdf5; border-left: 3px solid #047857; padding: 4px 7px; color: #1e293b;">
          <b style="color:#047857;">गण कूट स्थिति (दोष-मुक्त):</b> वर (${o(fe)}) एवं वधू (${o(me)}) में ${b}/6 गुण प्राप्त हैं। गण दोष अनुपस्थित होने से किसी विशेष गण परिहार की आवश्यकता नहीं है।
        </div>
      `;if(W)return`
        <div style="margin-top: 3px; background: #ecfdf5; border-left: 3px solid #047857; padding: 4px 7px; color: #334155;">
          <b style="color:#047857;">शास्त्रोक्त गण दोष परिहार सिद्ध:</b> <i>“ग्रहमैत्री च राशीनां ताराभकूटशुद्धितः। गणदोषो न वक्तव्यः॥”</i> — राशिपति <b>${o(e.boyRashiLord)}</b> व <b>${o(e.girlRashiLord)}</b> के मध्य <b>${o(ze.relation)}</b> संबंध (मैत्री अंक: <b>${f}/5</b>) होने से गण दोष का शास्त्रसम्मत परिहार पूर्णतः लागू होता है।
        </div>
      `;const d=[];return ht.score>=1&&d.push(`नक्षत्रेश मैत्री (${je}–${Me}: शुभ)`),_.score>=1&&d.push(`लग्नेश मैत्री (${i.panchang.lagnaLord}–${t.panchang.lagnaLord}: शुभ)`),le.score>=1&&d.push(`नवांश लग्नेश समन्वय (${r.lordHi}–${a.lordHi})`),x===7&&y===8&&d.push("भकूट (7/7) व नाड़ी (8/8) पूर्ण शुद्ध"),`
      <div style="margin-top: 3px; background: #fff7ed; border-left: 3px solid #b45309; padding: 4px 7px; color: #334155;">
        <b style="color:#9a3412;">गण दोष मूल्यांकन एवं सामंजस्य मार्गदर्शिका:</b> राशिपति मैत्री (<b>${f}/5</b> — ${o(ze.relation)}) न्यून होने से राशिपति-मैत्री आधारित गण परिहार लागू नहीं होता। ${d.length>0?`हालांकि सहायक सकारात्मक तत्व (<b>${o(d.join(", "))}</b>) दीर्घकालिक स्थायित्व में सहयोगी हैं। `:""}स्वभाव व निर्णय-शैली में अंतर के सामंजस्य हेतु शांत संवाद, धैर्य तथा विवाह पूर्व गणपति अथर्वशीर्ष पाठ एवं शिव-पार्वती अभिषेक श्रेयस्कर रहेगा।
      </div>
    `})(),vt=L?W?`
        <div style="margin-top: 3px; background: #ecfdf5; border-left: 3px solid #047857; padding: 4px 7px; color: #334155;">
          <b style="color:#047857;">शास्त्रोक्त भकूट परिहार सिद्ध:</b> <i>“एकराश्यधिपत्ये तु मित्रत्वे राश्यधीशयोः। खेटमैत्र्यां भकूटस्थो दोषो नश्यति निश्चितम्॥”</i><br/>
          &bull; <b>निर्णय:</b> वर राशिपति (<b>${o(e.boyRashiLord)}</b>) व वधू राशिपति (<b>${o(e.girlRashiLord)}</b>) परस्पर मित्र/एक (मैत्री: <b>${f}/5</b>) होने से भकूट दोष का पूर्ण परिहार सिद्ध है।
        </div>
      `:`
      <div style="margin-top: 3px; background: #fff1f2; border-left: 3px solid #be123c; padding: 4px 7px; color: #334155;">
        <b style="color:#be123c;">भकूट दोष शांति निर्देश:</b> राशि स्वामियों (<b>${o(e.boyRashiLord)}</b> व <b>${o(e.girlRashiLord)}</b>) में मैत्री न्यून (<b>${f}/5</b>) होने से राशिपति भकूट परिहार लागू नहीं होता। ${le.score>=1?`नवांश लग्नेश (${o(r.lordHi)}–${o(a.lordHi)}) आंशिक सहयोग दे रहे हैं; `:""}विवाह पूर्व श्री लक्ष्मीनारायण हवन, गौरी-शंकर अभिषेक एवं राशिपति शांति जप अवश्य कराएं।
      </div>
    `:`
        <div style="margin-top: 3px; background: #ecfdf5; border-left: 3px solid #047857; padding: 4px 7px; color: #1e293b;">
          <b style="color:#047857;">भकूट निर्णय (पूर्णतः शुद्ध):</b> वर (${o(e.boyRashi.split(" ")[0])}) एवं वधू (${o(e.girlRashi.split(" ")[0])}) के मध्य शुभ राशि अंतराल होने से <b>7/7 पूर्ण गुण</b> प्राप्त हैं — कोई भकूट दोष उपस्थित नहीं है।
        </div>
      `,$t=n?.extendedKoots?.length?n.extendedKoots.map((d,R)=>{const P=d.status==="शुभ"?"#047857":d.status==="मध्यम"?"#b45309":"#be123c";return`
            <tr style="background: ${R%2===0?"#fffdf9":"#fef7e6"};">
              <td style="padding: 3px 6px 5.5px 6px; border: 1px solid #d97706; color: #7c2d12; font-weight: 800; width: 22%;">${o(d.name)}</td>
              <td style="padding: 3px 6px 5.5px 6px; border: 1px solid #d97706; color: #1e293b; width: 21%;">${o(d.boyDetail)} / ${o(d.girlDetail)}</td>
              <td style="padding: 3px 6px 5.5px 6px; border: 1px solid #d97706; color: ${P}; font-weight: 800; text-align: center; width: 12%;">${o(d.status)}</td>
              <td style="padding: 3px 6px 5.5px 6px; border: 1px solid #d97706; color: #334155; width: 45%;">${o(d.detail)}</td>
            </tr>
          `}).join(""):`
      <tr style="background: #fffdf9;">
        <td style="padding: 3px 6px; border: 1px solid #d97706; color: #7c2d12; font-weight: 800; width: 22%;">१. वर्ण कूट (${v}/1)</td>
        <td colspan="3" style="padding: 3px 6px; border: 1px solid #d97706; color: #1e293b;">वर (${o(p?.boyValue)}) एवं वधू (${o(p?.girlValue)}) — ${o(p?.verdict)}</td>
      </tr>
      <tr style="background: #fef7e6;">
        <td style="padding: 3px 6px; border: 1px solid #d97706; color: #7c2d12; font-weight: 800;">२. वश्य व योनि कूट</td>
        <td colspan="3" style="padding: 3px 6px; border: 1px solid #d97706; color: #1e293b;">वश्य (${$}/2) &bull; तारा (${F}/3) &bull; योनि (${S}/4)</td>
      </tr>
    `,wt=`
    ${Y("गण-भकूट परिहार मीमांसा एवं रज्जु, वेध, महेन्द्र, स्त्री-दीर्घ विशेष परीक्षण","पृष्ठ ३ : गण, भकूट व विशेष कूट",s,!0)}

    ${A("६. गण कूट (6 गुण) का विस्तृत स्वभाव एवं परिहार विश्लेषण",`प्राप्त गुण: ${b} / 6`)}
    <div style="background: #fffdf9; border: 1.5px solid #d97706; border-radius: 6px; padding: 6px 10px 8px 10px; margin-bottom: 6px; font-size: 8.2px; color: #1e293b; line-height: 1.38;">
      <table style="width: 100%; table-layout: fixed; border-collapse: collapse; margin-bottom: 4px;">
        <tr style="background: #fef7e6;">
          <td style="padding: 3px 7px; border: 1px solid #d97706; width: 34%;"><b style="color:#7c2d12;">वर का गण:</b> ${o(fe)}</td>
          <td style="padding: 3px 7px; border: 1px solid #d97706; width: 34%;"><b style="color:#7c2d12;">वधू का गण:</b> ${o(me)}</td>
          <td style="padding: 3px 7px; border: 1px solid #d97706; width: 32%;"><b style="color:#7c2d12;">गण अंक:</b> <span style="color:${j?"#be123c":"#047857"};font-weight:900;">${b} / 6 गुण</span></td>
        </tr>
      </table>
      <div><b style="color: #7c2d12;">&bull; गण फलित:</b> ${o(h?.verdict)}</div>
      ${yt}
    </div>

    ${A("७. भकूट कूट (7 गुण) एवं द्वादश राशि संबंध व परिहार निर्णय",`प्राप्त गुण: ${x} / 7`)}
    <div style="background: #fffdf9; border: 1.5px solid #d97706; border-radius: 6px; padding: 6px 10px 8px 10px; margin-bottom: 6px; font-size: 8.2px; color: #1e293b; line-height: 1.38;">
      <table style="width: 100%; table-layout: fixed; border-collapse: collapse; margin-bottom: 4px;">
        <tr style="background: #fef7e6;">
          <td style="padding: 3px 7px; border: 1px solid #d97706; width: 35%;"><b style="color:#7c2d12;">वर चन्द्र राशि:</b> ${o(e.boyRashi)} (${o(e.boyRashiLord)})</td>
          <td style="padding: 3px 7px; border: 1px solid #d97706; width: 35%;"><b style="color:#7c2d12;">वधू चन्द्र राशि:</b> ${o(e.girlRashi)} (${o(e.girlRashiLord)})</td>
          <td style="padding: 3px 7px; border: 1px solid #d97706; width: 30%;"><b style="color:#7c2d12;">भकूट अंक:</b> <span style="color:${L?"#be123c":"#047857"};font-weight:900;">${x} / 7 गुण</span></td>
        </tr>
      </table>
      <div><b style="color: #7c2d12;">&bull; भकूट कूट फलित:</b> ${o(k?.verdict)}</div>
      ${vt}
    </div>

    ${A("८. दक्षिण-उत्तर विशेष मेलापक: रज्जु, वेध, महेन्द्र एवं स्त्री-दीर्घ कूट परीक्षा","३६ गुण से आगे सूक्ष्म जांच")}
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
        ${$t}
      </tbody>
    </table>
  `,kt=i.planets.map((d,R)=>{const P=t.planets[R],C=re(d.rashiLord,P?.rashiLord||"गुरु");return`
        <tr style="background: ${R%2===0?"#fffdf9":"#fef7e6"};">
          <td class="pj-h2c-no-lift" style="padding: 4px 5px 6px 5px; border: 1px solid #d97706; color: #7c2d12; font-weight: 800; font-size: 8.2px; width: 13%; line-height: 1.44; direction: ltr; unicode-bidi: isolate;">${o(d.hindiName.normalize("NFC"))}</td>
          <td class="pj-h2c-no-lift" style="padding: 4px 5px 6px 5px; border: 1px solid #d97706; color: #1e293b; font-size: 7.9px; width: 23.5%; line-height: 1.46; direction: ltr; unicode-bidi: isolate;">
            ${Ke(d.rashiName,d.rashiLord)}
          </td>
          <td class="pj-h2c-no-lift" style="padding: 4px 5px 6px 5px; border: 1px solid #d97706; color: #9a3412; font-size: 7.9px; width: 23.5%; line-height: 1.46; direction: ltr; unicode-bidi: isolate;">
            ${P?Ke(P.rashiName,P.rashiLord):"—"}
          </td>
          <td class="pj-h2c-no-lift" style="padding: 4px 5px 6px 5px; border: 1px solid #d97706; color: ${C.color}; font-weight: 800; font-size: 8px; width: 20%; line-height: 1.44;">${o(C.relation)}</td>
          <td class="pj-h2c-no-lift" style="padding: 4px 5px 6px 5px; border: 1px solid #d97706; color: #334155; font-size: 7.9px; width: 20%; line-height: 1.44;">${o(C.harmonyNote)}</td>
        </tr>
      `}).join(""),Ft=`
    ${Y("नाड़ी दोष सूक्ष्म मीमांसा एवं नवग्रह मैत्री (9-Planet Graha Maitri) तुलना","पृष्ठ ४ : नाड़ी एवं ग्रह मैत्री",s,!0)}

    ${A("९. नाड़ी कूट (Nadi Koot — 8 गुण) का विस्तृत आयुर्वेदिक व ज्योतिषीय विश्लेषण",`प्राप्त गुण: ${y} / 8`)}
    <div style="background: #fffdf9; border: 1.5px solid #d97706; border-radius: 6px; padding: 6px 10px 9px 10px; margin-bottom: 8px; font-size: 8.4px; color: #1e293b; line-height: 1.42;">
      <table style="width: 100%; table-layout: fixed; border-collapse: collapse; margin-bottom: 5px;">
        <tr style="background: #fef7e6;">
          <td style="padding: 4px 8px; border: 1px solid #d97706; width: 33%;"><b style="color:#7c2d12;">वर की नाड़ी:</b> ${o(Ae)}</td>
          <td style="padding: 4px 8px; border: 1px solid #d97706; width: 33%;"><b style="color:#7c2d12;">वधू की नाड़ी:</b> ${o(Le)}</td>
          <td style="padding: 4px 8px; border: 1px solid #d97706; width: 34%;"><b style="color:#7c2d12;">नाड़ी प्राप्तांक:</b> <span style="color:${D?"#be123c":"#047857"};font-weight:900;">${y} / 8 गुण</span></td>
        </tr>
      </table>
      <div><b style="color: #7c2d12;">&bull; त्रि-नाड़ी विज्ञान:</b> अष्टकूट में सर्वाधिक ८ गुण नाड़ी कूट के होते हैं। <b>आदि नाड़ी (वात प्रकृति)</b>, <b>मध्य नाड़ी (पित्त प्रकृति)</b> एवं <b>अन्त्य नाड़ी (कफ प्रकृति)</b> वर-वधू के शारीरिक त्रिदोष संतुलन, आनुवंशिक स्वास्थ्य एवं संतान सुख का निर्धारण करती हैं।</div>
      <div style="margin-top: 4px; background: #fef8ec; border-left: 3px solid #b45309; padding: 5px 8px; color: #334155;">
        ${D?`<b style="color:#7c2d12;">पीयूषधारा एवं मुहूर्त चिंतामणि के प्रामाणिक नाड़ी परिहार सूत्र:</b><br/>
               <i>“एकराशिः पृथक् तारा एकतारा पृथग्गृहम्। एकर्क्षं भिन्नपादं च नाड़ीदोषो न विद्यते॥”</i><br/>
               १. <b>एक राशि - भिन्न नक्षत्र</b>, २. <b>एक नक्षत्र - भिन्न राशि</b> अथवा ३. <b>एक नक्षत्र - भिन्न चरण (Pada)</b> होने पर नाड़ी दोष निरस्त होता है।<br/>
               &bull; <b style="color:#7c2d12;">अंतिम नाड़ी निर्णय:</b> ${I?"वर और वधू की राशि एक किंतु नक्षत्र भिन्न होने से शास्त्रोक्त नाड़ी दोष परिहार पूर्णतः मान्य है।":Pe?"वर और वधू का नक्षत्र एक किंतु चरण भिन्न होने से शास्त्रोक्त नाड़ी दोष परिहार मान्य है।":"एक ही नाड़ी होने से विवाह पूर्व स्वर्ण-नाड़ी दान, गोदान, अन्नदान एवं सवा लाख महामृत्युंजय मंत्र जाप कराना अनिवार्य है।"}`:'<b style="color:#047857;">अंतिम नाड़ी निर्णय (पूर्णतः शुद्ध):</b> वर एवं वधू की नाड़ी भिन्न होने से <b>८/८ पूर्ण गुण</b> प्राप्त हैं — नाड़ी दोष पूर्णतः अनुपस्थित है तथा श्रेष्ठ संतान व आरोग्य योग है।'}
      </div>
    </div>

    ${A("१०. नवग्रह राशि-स्वामी मैत्री तुलना सारणी (9-Planet Graha Maitri Comparison Table)",`चन्द्र मैत्री: ${f} / 5`)}
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
        ${kt}
      </tbody>
    </table>
  `,Nt=i.planets.map((d,R)=>{const P=t.planets[R],C=i.kpSystem?.planets?.find($e=>$e.planet===d.hindiName)?.starLord||d.rashiLord,ve=t.kpSystem?.planets?.find($e=>$e.planet===P?.hindiName)?.starLord||P?.rashiLord||"—";return`
        <tr style="background: ${R%2===0?"#fffdf9":"#fef7e6"};">
          <td class="pj-h2c-no-lift" style="padding: 4px 6px 6px 6px; border: 1px solid #d97706; color: #7c2d12; font-weight: 800; font-size: 8.3px; width: 14%; line-height: 1.46; font-family: 'Noto Sans Devanagari', 'Nirmala UI', 'Mangal', sans-serif; overflow: visible;">
            ${o(d.hindiName.normalize("NFC"))}
          </td>
          <td class="pj-h2c-no-lift" style="padding: 4px 6px 6px 6px; border: 1px solid #d97706; color: #1e293b; font-size: 8.1px; width: 21%; line-height: 1.46; font-family: 'Noto Sans Devanagari', 'Nirmala UI', 'Mangal', sans-serif; overflow: visible; direction: ltr; unicode-bidi: isolate;">
            ${Je(d.rashiName,d.fullDegreeDMS)}<br/>
            ${it(d,i)}
          </td>
          <td class="pj-h2c-no-lift" style="padding: 4px 6px 6px 6px; border: 1px solid #d97706; color: #047857; font-size: 8.1px; width: 22%; line-height: 1.46; font-family: 'Noto Sans Devanagari', 'Nirmala UI', 'Mangal', sans-serif; overflow: visible;">
            ${G(d.houseInLagna)} &bull; ${o(d.nakshatra.split(" ")[0].normalize("NFC"))} (च.${d.pada})<br/>
            <span style="color:#334155;font-size:7.6px;">नक्षत्रेश: ${o(C.normalize("NFC"))}</span>
          </td>
          <td class="pj-h2c-no-lift" style="padding: 4px 6px 6px 6px; border: 1px solid #d97706; color: #9a3412; font-size: 8.1px; width: 21%; line-height: 1.46; font-family: 'Noto Sans Devanagari', 'Nirmala UI', 'Mangal', sans-serif; overflow: visible; direction: ltr; unicode-bidi: isolate;">
            ${P?`${Je(P.rashiName,P.fullDegreeDMS)}<br/>${it(P,t)}`:"—"}
          </td>
          <td class="pj-h2c-no-lift" style="padding: 4px 6px 6px 6px; border: 1px solid #d97706; color: #be123c; font-size: 8.1px; width: 22%; line-height: 1.46; font-family: 'Noto Sans Devanagari', 'Nirmala UI', 'Mangal', sans-serif; overflow: visible;">
            ${P?`${G(P.houseInLagna)} &bull; ${o(P.nakshatra.split(" ")[0].normalize("NFC"))} (च.${P.pada})<br/><span style="color:#334155;font-size:7.6px;">नक्षत्रेश: ${o(ve.normalize("NFC"))}</span>`:"—"}
          </td>
        </tr>
      `}).join(""),Ce=n?.pariharChecks?.length?n.pariharChecks.map(d=>`<b>${o(U(d.doshaName))}:</b> ${o(U(d.status))}`).join(" &nbsp;|&nbsp; "):"",St=`
    ${Y("वर एवं वधू की नवग्रह स्पष्ट स्थिति, मांगलिक परिहार व नवांश (D-9) तुलना","पृष्ठ ५ : नवग्रह एवं कुज तुलना",s,!0)}

    ${A("११. वर एवं वधू की संपूर्ण नवग्रह स्थिति तुलना सारणी (Groom vs Bride Planetary Placements)","नवग्रह भाव व नीचभंग जांच")}
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
        ${Nt}
      </tbody>
    </table>

    ${A("१२. द्विपक्षीय मांगलिक (कुज) दोष, शास्त्रोक्त परिहार एवं नवांश (D-9) क्रॉस-चेक",e.manglikStatus.manglikMatch?"कुज समन्वय शुभ":"मंगल परिहार विचारणीय")}
    <div style="background: #fffdf9; border: 1.5px solid #d97706; border-radius: 6px; padding: 6px 10px 8px 10px; font-size: 8px; color: #1e293b; line-height: 1.38;">
      <table style="width: 100%; table-layout: fixed; border-collapse: collapse; margin-bottom: 4px;">
        <tr style="background: #fef7e6;">
          <td class="pj-h2c-no-lift" style="padding: 3.5px 8px; border: 1px solid #d97706; width: 50%; vertical-align: top;">
            <b style="color:#7c2d12;">वर मांगलिक स्थिति:</b> <span style="color:${Re};font-weight:800;">${o(U(e.manglikStatus.boySeverity))}</span><br/>
            <span style="color:#475569;font-size:7.6px;">लग्न: ${X(e.manglikStatus.boyMarsHouseLagna)}, चन्द्र: ${X(e.manglikStatus.boyMarsHouseMoon)}, शुक्र: ${X(xt)} भाव</span>
          </td>
          <td class="pj-h2c-no-lift" style="padding: 3.5px 8px; border: 1px solid #d97706; width: 50%; vertical-align: top;">
            <b style="color:#7c2d12;">वधू मांगलिक स्थिति:</b> <span style="color:${Te};font-weight:800;">${o(U(e.manglikStatus.girlSeverity))}</span><br/>
            <span style="color:#475569;font-size:7.6px;">लग्न: ${X(e.manglikStatus.girlMarsHouseLagna)}, चन्द्र: ${X(e.manglikStatus.girlMarsHouseMoon)}, शुक्र: ${X(bt)} भाव</span>
          </td>
        </tr>
      </table>
      <div class="pj-h2c-no-lift"><b style="color: #7c2d12;">&bull; मांगलिक व परिहार निर्णय:</b> ${o(U(e.manglikStatus.description))}</div>
      <div style="margin-top: 2px;"><b style="color: #7c2d12;">&bull; सप्तम भाव व गुरु-शुक्र बल:</b> ${o(e.planetaryHarmony.seventhHouseSummary)} &bull; ${o(e.planetaryHarmony.jupiterVenusSummary)}</div>
      ${Ce?`<div style="margin-top: 3px; background: #fef8ec; border-left: 3px solid #b45309; padding: 3px 6px; color: #7c2d12;"><b>शास्त्रोक्त परिहार सार:</b> ${Ce}</div>`:""}
      ${n?.navamshaCrossCheck?`<div style="margin-top: 2.5px;"><b style="color: #047857;">&bull; नवांश (D-9) व दशा संधि परीक्षण:</b> ${o(n.navamshaCrossCheck)}</div>`:""}
    </div>
  `,q=i.planets.find(d=>d.id==="jupiter"),V=t.planets.find(d=>d.id==="jupiter");i.planets.find(d=>d.id==="venus"),t.planets.find(d=>d.id==="venus");const ue=H(i,7),ye=H(t,7),se=H(i,2),Ee=H(t,2),He=H(i,4),Be=H(t,4),Dt=H(i,5),Pt=H(t,5),pe=H(i,11),ce=H(t,11),zt=!!q&&(q.isExalted||q.dignity.includes("स्वगृही")||q.dignity.includes("मित्र")||J("jupiter",i).isCancelled),jt=!!V&&(V.isExalted||V.dignity.includes("स्वगृही")||V.dignity.includes("मित्र")||J("jupiter",t).isCancelled),te=Number((v+f+b).toFixed(1)),ie=Number(($+S).toFixed(1)),ae=Number((F+x).toFixed(1)),E=[];x===7&&E.push("भकूट (7/7 पूर्ण शुभ)"),y===8&&E.push("नाड़ी (8/8 पूर्ण शुद्ध)"),F>=3&&E.push("तारा (3/3 श्रेष्ठ)"),(zt||jt)&&E.push("बली गुरु का शुभ संरक्षण"),le.score>=1&&E.push(`नवांश (D-9) समन्वय (${r.rashiName.split(" ")[0]}–${a.rashiName.split(" ")[0]})`),_.score>=1&&E.push("लग्नेश मैत्री");const Mt=te>=9?`वर्ण (${v}/1), ग्रह मैत्री (${f}/5) एवं गण (${b}/6) का कुल योग श्रेष्ठ (${te}/12) है। वर-वधू के विचारों, जीवन-दृष्टि एवं निर्णय-शैली में सहज तालमेल, आदर व प्रगाढ़ मानसिक संतुलन रहेगा।`:te>=4?`वर्ण (${v}/1), ग्रह मैत्री (${f}/5) एवं गण (${b}/6) का योग मध्यम (${te}/12) है। कुछ विषयों में दृष्टिकोण भिन्न हो सकता है, किंतु शांत संवाद, आपसी सम्मान और ${E.length>0?E.slice(0,2).join(" व "):"धैर्य"} के सहारे सुदृढ़ समझ विकसित होगी।`:`वर्ण (${v}/1), ग्रह मैत्री (${f}/5) एवं गण (${b}/6) का योग न्यून (${te}/12) होने से विवाह के प्रारंभिक वर्षों में स्वभाव, प्राथमिकताओं व निर्णय-शैली में वैचारिक भिन्नता स्पष्ट रूप से रह सकती है। ${E.length>0?`सकारात्मक पक्ष यह है कि ${E.slice(0,3).join(", ")} इस रिश्ते को दीर्घकालिक स्थिरता प्रदान कर रहे हैं। `:""}अहंकार व त्वरित प्रतिक्रिया से बचकर खुले संवाद को प्राथमिकता देना इस विवाह की कुंजी रहेगी।`,Rt=ie>=4.5?`वश्य (${$}/2) व योनि (${S}/4) का योग प्रबल (${ie}/6) है तथा वर सप्तमेश ${ue.label} व वधू सप्तमेश ${ye.label} से दांपत्य में गहरा आकर्षण, भावनात्मक जुड़ाव एवं निष्ठा रहेगी।`:ie>=2.5?`वश्य (${$}/2) व योनि (${S}/4) का योग संतुलित (${ie}/6) है। वर सप्तमेश ${ue.lordHi} व वधू सप्तमेश ${ye.lordHi} के समन्वय से समय के साथ स्नेह, विश्वास व दांपत्य सहजता उत्तरोत्तर बढ़ेगी।`:`वश्य (${$}/2) व योनि (${S}/4) का योग न्यून (${ie}/6) है, अतः भावनात्मक व शारीरिक सामंजस्य विकसित होने में प्रारंभिक धैर्य आवश्यक रहेगा। नवांश लग्न (${r.rashiName.split(" ")[0]}–${a.rashiName.split(" ")[0]}) और एक-दूसरे की भावनाओं के प्रति संवेदनशीलता से दांपत्य सुदृढ़ होगा।`,Tt=ae>=8.5?`तारा (${F}/3) व भकूट (${x}/7) का प्रभाव अत्यंत शुभ (${ae}/10) है। विवाह पश्चात् संयुक्त भाग्योदय, आय में वृद्धि, संपत्ति-वाहन सुख तथा करियर में उल्लेखनीय उन्नति के प्रबल योग हैं।`:ae>=5?`तारा (${F}/3) व भकूट (${x}/7) का योग मध्यम-शुभ (${ae}/10) है। अनुशासित आर्थिक नियोजन और ${pe.isStrong||ce.isStrong?"मजबूत एकादश भाव":"परस्पर सहयोग"} से विवाह उपरांत क्रमिक समृद्धि व स्थिरता प्राप्त होगी।`:`तारा (${F}/3) व भकूट (${x}/7) का योग न्यून (${ae}/10) होने से आर्थिक निर्णयों व निवेश में जल्दबाजी से बचें। संयुक्त बजट अनुशासन तथा श्री लक्ष्मीनारायण पूजन से आर्थिक स्थिरता सुनिश्चित होगी।`,At=f>=4?`राशि स्वामियों (${e.boyRashiLord} एवं ${e.girlRashiLord}, मैत्री ${f}/5) में उत्तम मित्रता से दोनों परिवारों के मध्य सहज सौहार्द, मान-सम्मान एवं मांगलिक वातावरण बना रहेगा।`:f>=2.5||_.score>=1?`राशि मैत्री (${f}/5) मध्यम है, किंतु ${_.score>=1?`लग्नेश (${i.panchang.lagnaLord}–${t.panchang.lagnaLord}) की शुभ मित्रता`:"वर-वधू के चतुर्थ भाव संतुलन"} से ससुराल व पारिवारिक संबंध संतुलित एवं सम्मानजनक रहेंगे।`:`राशि स्वामियों (${e.boyRashiLord}–${e.girlRashiLord}, मैत्री ${f}/5) में वैचारिक अंतर होने से दोनों परिवारों की जीवनशैली व अपेक्षाओं में प्रारंभिक भिन्नता संभव है। विनम्र वाणी, बड़ों के सम्मान और पारिवारिक मामलों में संतुलित सीमाओं से घर में शांति बनी रहेगी।`,Ue=n?.extendedKoots?.find(d=>d.name.includes("महेन्द्र"))?.status==="शुभ",Lt=y===8?`नाड़ी कूट पूर्णतः शुद्ध (8/8)${Ue?" एवं महेन्द्र कूट सिद्ध":""} होने के साथ वर के गुरु (${ne(q,i)}) व वधू के गुरु (${ne(V,t)}) की स्थिति स्वस्थ, तेजस्वी संतान सुख एवं दीर्घायु आरोग्य का प्रबल संकेत देती है।`:ee?"नाड़ी अंक 0/8 होने पर भी शास्त्रोक्त नाड़ी परिहार लागू है। संतान व आरोग्य पक्ष संतुलित रहेगा; सामान्य स्वास्थ्य सतर्कता, गुरु कृपा एवं गौरी-शंकर आराधना से उत्तम संतान सुख प्राप्त होगा।":"समान नाड़ी दोष (0/8) सक्रिय होने से संतान व स्वास्थ्य पक्ष के प्रति विशेष सजगता आवश्यक है। विवाह पूर्व शास्त्रोक्त नाड़ी शांति, महामृत्युंजय अनुष्ठान तथा आधुनिक चिकित्सकीय परामर्श अवश्य लें।",M=new ei(`milan|${e.boyDob}|${e.girlDob}|${e.totalScore}`);M.register(e.manglikStatus.description||""),M.register(e.verdictDescription||"");const Ct=[["१. मानसिक एवं वैचारिक सामंजस्य (Mental & Temperament Harmony)",M.deduplicateParagraph(Mt,"milan","p1")],["२. दांपत्य प्रेम एवं सप्तम भाव/नवांश बल (Marital Intimacy & Bond)",M.deduplicateParagraph(Rt,"milan","p2")],["३. विवाहोपरांत भाग्योदय एवं आर्थिक समृद्धि (Post-Marriage Fortune)",M.deduplicateParagraph(Tt,"milan","p3")],["४. पारिवारिक समरसता एवं कुटुम्ब सौख्य (Family & In-Laws Harmony)",M.deduplicateParagraph(At,"milan","p4")],["५. संतान सुख, वंश वृद्धि एवं आरोग्य (Progeny & Vitality)",M.deduplicateParagraph(Lt,"milan","p5")]].map(d=>`
      <div style="background: #fffdf9; border: 1px solid #d97706; border-radius: 5px; padding: 4px 8px 6px 8px; margin-bottom: 4.5px;">
        <div style="font-size: 8.5px; font-weight: 800; color: #7c2d12;">${o(d[0])}</div>
        <div style="font-size: 8px; color: #1e293b; line-height: 1.34;">${o(d[1])}</div>
      </div>
    `).join("");M.register("विवाह पूर्व वर-वधू के नाम से भगवान शिव-पार्वती का रुद्राभिषेक एवं श्री लक्ष्मीनारायण पूजन कराने से अखंड सौभाग्य प्राप्त होता है।");const Ie=(()=>{const d=[];return D&&!ee&&d.push("नाड़ी दोष शांति हेतु महामृत्युंजय मंत्र जाप व स्वर्ण-नाड़ी दान कराएं।"),L&&!W&&d.push("भकूट शांति हेतु श्री लक्ष्मीनारायण हवन एवं राशि स्वामियों का जप कराएं।"),j&&!W&&d.push("गण भिन्नता के सामंजस्य हेतु गणपति अथर्वशीर्ष पाठ एवं शिव-पार्वती पूजन करें।"),e.manglikStatus.manglikMatch||d.push("सक्रिय मांगलिक प्रभाव हेतु कुंभ/पीपल विवाह व मंगल चंडिका शांति कराएं।"),d.length===0?"सभी प्रमुख कूट एवं मांगलिक परिहार अनुकूल हैं; विवाह पूर्व गणपति एवं कुलदेवता पूजन पर्याप्त है।":d.join(" ")})();M.register(Ie);const Et=(()=>{const d=(n?.practicalRemedies||[]).filter(P=>{const C=P.trim();return!(!C||C.includes("रुद्राभिषेक")||D&&!ee&&C.includes("नाड़ी दोष")||L&&!W&&C.includes("भकूट दोष")||j&&!W&&C.includes("गण भिन्नता")||!e.manglikStatus.manglikMatch&&C.includes("कुंभ विवाह"))}),R=M.deduplicateBullets(d,"milan","sec15");return R.length===1&&R.push(M.claimFromBank("milan",Math.round(e.totalScore)%12,"sec15-extra")),R.slice(0,3)})().map((d,R)=>`<div><b style="color:#7c2d12;">${R+1}.</b> ${o(d)}</div>`).join(""),Ht=`
    ${Y("वैवाहिक भविष्यफल, शुभ विवाह मुहूर्त मार्गदर्शिका एवं वैदिक पूजा विधान","पृष्ठ ६ : फलित, मुहूर्त व उपाय",s,!0)}

    ${A("१३. पंच-स्तरीय यथार्थ वैवाहिक जीवन भविष्यफल (5-Pillar Matrimonial Predictions)","अंक व ग्रह बल आधारित फलित")}
    <div style="margin-bottom: 6px;">
      ${Ct}
    </div>

    ${A("१४. शुभ विवाह मुहूर्त एवं दीर्घायु निष्कर्ष (Marriage Timing & Muhurat Guidelines)","लग्न एवं तारा शुद्धि")}
    <table style="width: 100%; table-layout: fixed; border-collapse: collapse; margin-bottom: 6px; font-size: 8.1px;">
      <tbody>
        <tr style="background: #fffdf9;">
          <td style="padding: 3.5px 7px 5.5px 7px; border: 1px solid #d97706; color: #7c2d12; font-weight: 800; width: 26%;">शुभ सौर मास एवं नक्षत्र</td>
          <td style="padding: 3.5px 7px 5.5px 7px; border: 1px solid #d97706; color: #1e293b; width: 74%;">रोहिणी, मृगशिरा, मघा, उत्तराफाल्गुनी, हस्त, स्वाति, अनुराधा, मूल, उत्तराषाढ़ा, उत्तराभाद्रपद एवं रेवती नक्षत्र विवाह हेतु सर्वश्रेष्ठ हैं।</td>
        </tr>
        <tr style="background: #fef7e6;">
          <td style="padding: 3.5px 7px 5.5px 7px; border: 1px solid #d97706; color: #7c2d12; font-weight: 800;">त्रिबल शुद्धि व विवाह लग्न</td>
          <td style="padding: 3.5px 7px 5.5px 7px; border: 1px solid #d97706; color: #047857; font-weight: 700;">वर लग्न (${o(e.boyLagna)}) व वधू लग्न (${o(e.girlLagna)}) से अष्टम शुद्धि सहित शुभ गोधूलि/अभिजित लग्न चुनें।</td>
        </tr>
        ${n?.marriageTimingAndLongevity?`<tr style="background: #fffdf9;">
                <td style="padding: 3.5px 7px 5.5px 7px; border: 1px solid #d97706; color: #7c2d12; font-weight: 800;">संबंध स्थिरता व समय सार</td>
                <td style="padding: 3.5px 7px 5.5px 7px; border: 1px solid #d97706; color: #1e293b;">${o(n.marriageTimingAndLongevity)}</td>
              </tr>`:""}
      </tbody>
    </table>

    ${A("१५. सुखी दांपत्य हेतु शास्त्रोक्त वैदिक पूजा एवं सरल उपाय (Remedial Suggestions)","मंगलमय गृहस्थ कवच")}
    <table style="width: 100%; table-layout: fixed; border-collapse: collapse; font-size: 8.1px;">
      <tbody>
        <tr style="background: #fffdf9;">
          <td style="padding: 3.5px 7px 5.5px 7px; border: 1px solid #d97706; color: #7c2d12; font-weight: 800; width: 26%;">१. गौरी-शंकर एवं रुद्राभिषेक</td>
          <td style="padding: 3.5px 7px 5.5px 7px; border: 1px solid #d97706; color: #1e293b; width: 74%;">विवाह पूर्व वर-वधू के नाम से भगवान शिव-पार्वती का रुद्राभिषेक एवं श्री लक्ष्मीनारायण पूजन कराने से अखंड सौभाग्य प्राप्त होता है।</td>
        </tr>
        <tr style="background: #fef7e6;">
          <td style="padding: 3.5px 7px 5.5px 7px; border: 1px solid #d97706; color: #7c2d12; font-weight: 800;">२. विशेष दोष निवारण विधान</td>
          <td style="padding: 3.5px 7px 5.5px 7px; border: 1px solid #d97706; color: #9a3412; font-weight: 600;">${o(Ie)}</td>
        </tr>
        <tr style="background: #fffdf9;">
          <td style="padding: 3.5px 7px 5.5px 7px; border: 1px solid #d97706; color: #7c2d12; font-weight: 800;">३. व्यावहारिक व वैदिक उपाय</td>
          <td style="padding: 3.5px 7px 5.5px 7px; border: 1px solid #d97706; color: #047857; font-weight: 600; line-height: 1.35;">${Et}</td>
        </tr>
      </tbody>
    </table>
  `,_e=si(i,t),Bt=f+b+$>=9?{badge:"अत्यंत शुभ तालमेल",color:"#047857",bg:"#ecfdf5"}:f+b+$>=5?{badge:"संतुलित — संवाद से श्रेष्ठ",color:"#b45309",bg:"#fffbeb"}:{badge:"प्रारंभिक प्रयास व धैर्य अपेक्षित",color:"#be123c",bg:"#fff1f2"},Ut=f+b+$>=9?`वर की चन्द्र राशि ${e.boyRashi.split(" ")[0]} व वधू की ${e.girlRashi.split(" ")[0]} है; ग्रह मैत्री (${f}/5), गण (${b}/6) व वश्य (${$}/2) तीनों प्रबल हैं। दोनों के बीच सहज भावनात्मक समझ, प्रेम और विचारों की स्पष्ट एकरूपता रहेगी।`:f+b+$>=5?`ग्रह मैत्री (${f}/5), गण (${b}/6) व वश्य (${$}/2) का योग मध्यम है। कुछ निर्णयों में दृष्टिकोण भिन्न हो सकते हैं, किंतु सम्मानजनक संवाद और धैर्य से समय के साथ मजबूत मानसिक जुड़ाव स्थापित होगा।`:`वर (${e.boyRashi.split(" ")[0]}) व वधू (${e.girlRashi.split(" ")[0]}) की ग्रह मैत्री (${f}/5), गण (${b}/6) व वश्य (${$}/2) न्यून होने से प्रारंभिक वर्षों में स्वभाव व सोचने के ढंग में अंतर स्पष्ट रहेगा। ${E.length>0?`${E.slice(0,2).join(" व ")} इस रिश्ते को मजबूत आधार दे रहे हैं — `:""}अहंकार छोड़ने और शांत संवाद रखने से गृहस्थ जीवन सुखमय बनेगा।`,It=x===7&&(se.isStrong||Ee.isStrong||pe.isStrong||ce.isStrong)?{badge:"उत्तम आर्थिक भाग्योदय",color:"#047857",bg:"#ecfdf5"}:x===7||pe.isStrong||ce.isStrong?{badge:"क्रमिक व स्थिर उन्नति",color:"#b45309",bg:"#fffbeb"}:{badge:"नियोजित प्रबंधन आवश्यक",color:"#be123c",bg:"#fff1f2"},_t=`भकूट कूट (${x}/7), वर के द्वितीयेश ${se.lordHi} (${se.lordPlanet?G(se.lordPlanet.houseInLagna):"शुभ"}) व एकादशेश ${pe.lordHi} तथा वधू के द्वितीयेश ${Ee.lordHi} व एकादशेश ${ce.lordHi} के अनुसार ${x===7?"विवाह के पश्चात् संयुक्त आय, करियर स्थायित्व और बचत-संपत्ति में स्पष्ट वृद्धि होगी। दोनों के सहयोग से आर्थिक लक्ष्य आसानी से पूर्ण होंगे।":"धन-संचय व निवेश में पारदर्शी संयुक्त योजना बनाना आवश्यक रहेगा; भकूट परिहार/लक्ष्मीनारायण पूजन से आर्थिक स्थिरता दृढ़ होगी।"}`,Yt=y===8?{badge:"पूर्ण अनुकूल व आरोग्यप्रद",color:"#047857",bg:"#ecfdf5"}:ee?{badge:"परिहार सहित संतुलित",color:"#b45309",bg:"#fffbeb"}:{badge:"नाड़ी शांति अनिवार्य",color:"#be123c",bg:"#fff1f2"},Ot=`नाड़ी कूट (${y}/8), महेन्द्र कूट (${Ue?"शुभ/सिद्ध":"सामान्य"}), वर पंचमेश ${Dt.lordHi} व वधू पंचमेश ${Pt.lordHi} तथा गुरु बल (वर: ${ne(q,i)}, वधू: ${ne(V,t)}) से स्पष्ट है कि ${y===8?"जैविक अनुकूलता, स्वास्थ्य रक्षा एवं स्वस्थ-बुद्धिमान संतान सुख के श्रेष्ठ योग बने हुए हैं।":ee?"नाड़ी परिहार उपलब्ध होने से स्वास्थ्य व संतान पक्ष सुरक्षित रहेगा; गुरु कृपा से सुखद संतान प्राप्ति होगी।":"एक नाड़ी दोष होने से विवाह पूर्व महामृत्युंजय जप, स्वर्ण-नाड़ी दान और स्वास्थ्य जांच कराना अनिवार्य है।"}`,Wt=e.manglikStatus.manglikMatch?{badge:"मांगलिक सुरक्षित व स्थायी",color:"#047857",bg:"#ecfdf5"}:{badge:"मंगल शांति अपेक्षित",color:"#be123c",bg:"#fff1f2"},qt=U(`वर (${e.manglikStatus.boySeverity}) एवं वधू (${e.manglikStatus.girlSeverity}) के साथ वर सप्तमेश ${ue.label}, वधू सप्तमेश ${ye.label} तथा नवांश लग्न (${r.rashiName.split(" ")[0]} व ${a.rashiName.split(" ")[0]} — ${le.relation.split("(")[0].trim()}) के परीक्षण से ${e.manglikStatus.manglikMatch?"मांगलिक दोष की कोई बाधा नहीं है (परिहार सिद्ध/दोष-मुक्त) तथा दीर्घकालिक वैवाहिक स्थायित्व सुदृढ़ है।":"एकपक्षीय सक्रिय मंगल हेतु विवाह पूर्व कुंभ/पीपल विवाह व मंगल शांति कराने के पश्चात् वैवाहिक स्थायित्व सुरक्षित होगा।"}`),Vt=_.score>=1&&(He.isStrong||Be.isStrong)?{badge:"मधुर व सम्मानजनक संबंध",color:"#047857",bg:"#ecfdf5"}:_.score>=0||f>=3?{badge:"संतुलित पारिवारिक तालमेल",color:"#b45309",bg:"#fffbeb"}:{badge:"संवेदनशील संवाद अपेक्षित",color:"#be123c",bg:"#fff1f2"},Gt=`वर लग्नेश ${i.panchang.lagnaLord} व वधू लग्नेश ${t.panchang.lagnaLord} (${_.relation.split("(")[0].trim()}), चतुर्थ भाव स्वामी (${He.lordHi}/${Be.lordHi}) एवं द्वितीय भाव कुटुम्ब योग के अनुसार ${_.score>=1?"ससुराल पक्ष व दोनों परिवारों में परस्पर सम्मान, आत्मीयता और सुखद पारिवारिक सहयोग बना रहेगा।":"दोनों परिवारों की परंपरा व स्वभाव में हल्का अंतर रह सकता है; मधुर वाणी, बड़ों के आदर और स्पष्ट संवाद से पारिवारिक सौहार्द सदैव बना रहेगा।"}`,Xt={badge:_e.windowText,color:"#047857",bg:"#ecfdf5"},Jt=_e.detailText,Kt=[{q:"प्रश्न 1: आपसी तालमेल और मानसिक समझ कैसी रहेगी?",status:Bt,a:M.deduplicateParagraph(Ut,"milan","qa1")},{q:"प्रश्न 2: करियर और आर्थिक भाग्योदय कैसा रहेगा?",status:It,a:M.deduplicateParagraph(_t,"finance","qa2")},{q:"प्रश्न 3: संतान सुख और स्वास्थ्य अनुकूलता कैसी है?",status:Yt,a:M.deduplicateParagraph(Ot,"health","qa3")},{q:"प्रश्न 4: मांगलिक स्थिति और वैवाहिक स्थायित्व कैसा है?",status:Wt,a:M.deduplicateParagraph(qt,"milan","qa4")},{q:"प्रश्न 5: ससुराल व पारिवारिक संबंध कैसे रहेंगे?",status:Vt,a:M.deduplicateParagraph(Gt,"family","qa5")},{q:"प्रश्न 6: विवाह के बाद सबसे शुभ समय कब शुरू होगा?",status:Xt,a:M.deduplicateParagraph(Jt,"dasha","qa6")}].map(d=>`
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
    `).join(""),Qt=`
    ${Y("वर-वधू के 6 प्रमुख वैवाहिक सवालों के सीधे, सरल एवं शास्त्रोक्त जवाब","पृष्ठ 7 : वैवाहिक प्रश्नोत्तरी (Q&A)",s,!0)}

    ${A("16. वर-वधू के 6 प्रमुख वैवाहिक सवालों के सीधे जवाब (Direct Marriage Q&A)","कुंडली व दशा आधारित सटीक उत्तर")}
    <div style="margin-bottom: 10px;">
      ${Kt}
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
        ${Q(w.website,62,"#0F172A","#FFFFFF")}
        <div style="font-size: 6.8px; font-weight: 800; color: #7c2d12; margin-top: 2px; line-height: 1.15;">स्कैन करें</div>
      </div>
    </div>
  `;return[ft,ut,wt,Ft,St,Ht,Qt]}let he=null;function ot(e,i=5e3){return new Promise((t,n)=>{const r=document.querySelector(`script[src="${e}"]`);if(r){if(r.__loaded){t();return}if(r.__failed)r.remove();else{const p=window.setTimeout(()=>{n(new Error(`Timeout loading ${e}`))},i);r.addEventListener("load",()=>{window.clearTimeout(p),t()},{once:!0}),r.addEventListener("error",()=>{window.clearTimeout(p),n(new Error(`Failed to load ${e}`))},{once:!0});return}}const a=document.createElement("script");a.src=e,a.async=!0;const s=window.setTimeout(()=>{a.__failed=!0,a.remove(),n(new Error(`Timeout loading ${e}`))},i);a.onload=()=>{window.clearTimeout(s),a.__loaded=!0,t()},a.onerror=()=>{window.clearTimeout(s),a.__failed=!0,a.remove(),n(new Error(`Failed to load ${e}`))},document.head.appendChild(a)})}async function rt(){const e=window;return(e.jspdf?.jsPDF||e.jsPDF)&&e.html2canvas?{jsPDF:e.jspdf?.jsPDF||e.jsPDF,html2canvas:e.html2canvas}:(he||(he=(async()=>{try{try{const[t,n]=await Promise.all([Oe(()=>import("./jspdf.es.min-DGgkrMK7.js").then(s=>s.j),Ye([0,1])),Oe(()=>import("./html2canvas.esm-B0tyYwQk.js"),[])]),r=t?.jsPDF||t?.default?.jsPDF||t?.default,a=n?.default||n;if(typeof r=="function"&&typeof a=="function")return{jsPDF:r,html2canvas:a}}catch{}const i=[["https://cdn.jsdelivr.net/npm/jspdf@2.5.2/dist/jspdf.umd.min.js","https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js"],["https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js","https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"],["https://unpkg.com/jspdf@2.5.2/dist/jspdf.umd.min.js","https://unpkg.com/html2canvas@1.4.1/dist/html2canvas.min.js"]];for(const[t,n]of i)try{const r=[];e.jspdf?.jsPDF||e.jsPDF||r.push(ot(t)),e.html2canvas||r.push(ot(n)),r.length>0&&await Promise.all(r);const a=e.jspdf?.jsPDF||e.jsPDF,s=e.html2canvas;if(typeof a=="function"&&typeof s=="function")return{jsPDF:a,html2canvas:s}}catch{}throw new Error("PDF libraries did not initialize")}catch(i){throw he=null,i}})()),he)}const z={appName:"पण्डित जी ऑनलाइन (Pandit Ji Online)",guideTitle:"मुख्य ज्योतिषाचार्य एवं संस्थापक:",guideName:"आचार्य पण्डित शशांक शर्मा (वैदिक पुरोहित एवं ज्योतिषाचार्य)",guideAddress:"रुद्रपुर, ऊधम सिंह नगर, उत्तराखण्ड (भारत)",contactPhone:"+91 7017279043",website:"www.panditjionline.online",websiteFull:"https://www.panditjionline.online",email:"internetwebhelp24@gmail.com"};function o(e){return ti(String(e??"")).normalize("NFC").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}const nt={अ:"a",आ:"aa",इ:"i",ई:"ee",उ:"u",ऊ:"oo",ऋ:"ri",ए:"e",ऐ:"ai",ओ:"o",औ:"au",क:"k",ख:"kh",ग:"g",घ:"gh",च:"ch",छ:"chh",ज:"j",झ:"jh",ट:"t",ठ:"th",ड:"d",ढ:"dh",ण:"n",त:"t",थ:"th",द:"d",ध:"dh",न:"n",प:"p",फ:"ph",ब:"b",भ:"bh",म:"m",य:"y",र:"r",ल:"l",व:"v",श:"sh",ष:"sh",स:"s",ह:"h","ा":"a","ि":"i","ी":"ee","ु":"u","ू":"oo","ृ":"ri","े":"e","ै":"ai","ो":"o","ौ":"au","ं":"n","ँ":"n","ः":"h","्":"","०":"0","१":"1","२":"2","३":"3","४":"4","५":"5","६":"6","७":"7","८":"8","९":"9"};function de(e){const i=String(e||"Yajman").trim();let t="";for(const n of i)nt[n]!==void 0?t+=nt[n]:/[A-Za-z0-9_.-]/.test(n)?t+=n:/\s/.test(n)&&(t+="_");return t.replace(/_+/g,"_").replace(/^_+|_+$/g,"")||"Yajman"}const dt=[{name:"प्रथम (तनु/लग्न भाव)",karaka:"सूर्य (देह, व्यक्तित्व, आयु, यश)"},{name:"द्वितीय (धन/कुटुम्ब भाव)",karaka:"गुरु (संचित धन, वाणी, परिवार)"},{name:"तृतीय (सहज/पराक्रम भाव)",karaka:"मंगल (साहस, छोटे भाई-बहन, पुरुषार्थ)"},{name:"चतुर्थ (सुख/मातृ भाव)",karaka:"चन्द्र/बुध (माता, भूमि, भवन, वाहन)"},{name:"पंचम (संतान/विद्या भाव)",karaka:"गुरु (शिक्षा, बुद्धि, संतान, पूर्वपुण्य)"},{name:"षष्ठ (रिपु/रोग भाव)",karaka:"मंगल/शनि (रोग, ऋण, शत्रु, प्रतिस्पर्धा)"},{name:"सप्तम (जाया/विवाह भाव)",karaka:"शुक्र (जीवनसाथी, वैवाहिक सुख, व्यापार)"},{name:"अष्टम (आयु/मृत्यु भाव)",karaka:"शनि (दीर्घायु, गुप्त विद्या, आकस्मिक घटना)"},{name:"नवम (भाग्य/धर्म भाव)",karaka:"गुरु/सूर्य (भाग्य, धर्म, गुरु, तीर्थयात्रा)"},{name:"दशम (कर्म/राज्य भाव)",karaka:"सूर्य/बुध/गुरु/शनि (आजीविका, पद-प्रतिष्ठा, पिता)"},{name:"एकादश (लाभ/आय भाव)",karaka:"गुरु (आय, मनोकामना पूर्ति, ज्येष्ठ भ्राता)"},{name:"द्वादश (व्यय/मोक्ष भाव)",karaka:"शनि/केतु (व्यय, विदेश यात्रा, मोक्ष, शैया सुख)"}],lt={1:"मंगल",2:"शुक्र",3:"बुध",4:"चन्द्र",5:"सूर्य",6:"बुध",7:"शुक्र",8:"मंगल",9:"गुरु",10:"शनि",11:"शनि",12:"गुरु"};function De(e){const i=(e%30+30)%30,t=Math.floor(i),n=(i-t)*60,r=Math.floor(n),a=Math.round((n-r)*60);return`${String(t).padStart(2,"0")}° ${String(r).padStart(2,"0")}′ ${String(Math.min(59,a)).padStart(2,"0")}″`}function pi(e){const i=e.phase1Astronomy?.sripatiBhavas;if(i&&i.length===12)return i.map((r,a)=>{const s=dt[a]||{name:`भाव ${r.houseNumber}`,karaka:"सामान्य"},p=e.planets.filter(c=>r.occupantIds.includes(c.id)),l=p.length>0?p.map(c=>`${c.hindiName} (${c.degInt}°)`).join(", "):"— (भाव रिक्त)";return{houseNumber:r.houseNumber,bhavaName:s.name,significator:s.karaka,rashiName:`${r.madhyaRashiNameHi} (${r.madhyaRashiNumber})`,rashiLord:lt[r.madhyaRashiNumber]||"गुरु",madhyaDMS:r.madhyaDMS,sandhiStartDMS:r.sandhiStartDMS,sandhiEndDMS:r.sandhiEndDMS,planets:l}});const t=e.panchang.lagnaDegreeDMS.match(/(\d+)°\s*(\d+)/),n=t?parseInt(t[1],10)+parseInt(t[2],10)/60:e.panchang.lagnaDegInt||15.25;return e.lagnaChart.map((r,a)=>{const s=dt[a]||{name:`भाव ${r.houseNumber}`,karaka:"सामान्य"},p=(n%30+30)%30,l=((p-15)%30+30)%30,c=((p+15)%30+30)%30,g=r.planets&&r.planets.length>0?r.planets.map(m=>`${m.hindiName} (${m.degInt}°)`).join(", "):"— (भाव रिक्त)";return{houseNumber:r.houseNumber,bhavaName:s.name,significator:s.karaka,rashiName:`${r.rashiName} (${r.rashiNumber})`,rashiLord:lt[r.rashiNumber]||"गुरु",madhyaDMS:De(p),sandhiStartDMS:De(l),sandhiEndDMS:De(c),planets:g}})}function ci(e,i){if(i)return i.planets.map(a=>{const s=e.find(l=>l.id===a.id);let p="बली (Strong)";return a.gradeHi.includes("अति बली")?p="अति बली (Exalted/Strong)":a.gradeHi.includes("बली")?p="बली (Strong)":a.gradeHi.includes("मध्यम")?p="मध्यम (Moderate)":p="निर्बल (Needs Remedy)",{planet:s?.hindiName||a.hindiName,englishName:a.englishName,sthanaBala:Math.round(a.sthanaBala.total),digBala:Math.round(a.digBala),cheshtaBala:Math.round(a.cheshtaBala),naisargikaBala:Math.round(a.naisargikaBala),kalaBala:Math.round(a.kalaBala.total),drikBala:Math.round(a.drikBala),totalVirupas:Math.round(a.totalVirupas),totalRupas:`${a.totalRupas.toFixed(2)} रूप`,requiredRupas:`${a.requiredRupas.toFixed(2)} रूप`,strengthPct:Math.min(100,a.strengthPct),grade:p,remedyHint:a.remedyHintHi}});const t={सूर्य:60,चंद्र:51.4,चन्द्र:51.4,शुक्र:42.9,गुरु:34.3,बुध:25.7,मंगल:17.1,शनि:8.6,राहु:30,केतु:30},n={सूर्य:"6.50 रूप",चंद्र:"6.00 रूप",चन्द्र:"6.00 रूप",मंगल:"5.00 रूप",बुध:"7.00 रूप",गुरु:"6.50 रूप",शुक्र:"5.50 रूप",शनि:"5.00 रूप",राहु:"5.00 रूप",केतु:"5.00 रूप"},r={गुरु:1,बुध:1,सूर्य:10,मंगल:10,शनि:7,चंद्र:4,चन्द्र:4,शुक्र:4,राहु:10,केतु:4};return e.map(a=>{let s=135;a.dignity.includes("उच्च")?s=195:a.dignity.includes("स्वगृही")?s=176:a.dignity.includes("मित्र")?s=154:a.dignity.includes("सम")?s=132:a.dignity.includes("शत्रु")?s=108:a.dignity.includes("नीच")&&(s=86);const p=r[a.hindiName]||1,l=Math.min(Math.abs(a.houseInLagna-p),12-Math.abs(a.houseInLagna-p)),c=Math.round(60-l*8.5),g=a.isRetrograde?54:a.isCombust?22:42,m=t[a.hindiName]||30,h=92+a.pada*6,k=[1,4,5,7,9,10,11].includes(a.houseInLagna)?24:14,u=Math.round(s+c+g+m+h+k),v=(u/60).toFixed(2),$=Math.min(99,Math.max(42,Math.round(u/440*100)));let F="बली (Strong)",S="शुभ फलप्रद स्थिति — नित्य इष्ट स्मरण पर्याप्त";return $>=84?(F="अति बली (Exalted/Strong)",S="पूर्ण राजयोगकारी बल — श्रेष्ठ नेतृत्व एवं उन्नति"):$>=68?(F="बली (Strong)",S="अनुकूल ग्रह बल — कार्यसिद्धि एवं स्थिर प्रगति"):$>=55?(F="मध्यम (Moderate)",S=`${a.hindiName} के बीज मंत्र का नित्य १०८ जप शुभदायी`):(F="निर्बल (Needs Remedy)",S=`${a.hindiName} शांति दान एवं वैदिक जप अनुष्ठान आवश्यक`),{planet:a.hindiName,englishName:a.name,sthanaBala:s,digBala:c,cheshtaBala:g,naisargikaBala:Math.round(m),kalaBala:h,drikBala:k,totalVirupas:u,totalRupas:`${v} रूप`,requiredRupas:n[a.hindiName]||"5.50 रूप",strengthPct:$,grade:F,remedyHint:S}})}function gi(e){const i=e.panchang.lagnaName.split(" ")[0],t=e.lucky,n={मेष:{jeevanRatna:"मूंगा (Red Coral) — लग्नेश मंगल हेतु",bhagyaRatna:"पुखराज (Yellow Sapphire) — भाग्येश गुरु हेतु",ishtaRatna:"माणिक्य (Ruby) — पंचमेश सूर्य हेतु",avoidStones:"नीलम, पन्ना एवं हीरा बिना परामर्श न पहनें",primaryRudraksha:"३ मुखी रुद्राक्ष (अग्नि देव स्वरूप — मंगल बलवर्धक)",secondaryRudraksha:"५ मुखी + १ मुखी रुद्राक्ष (गुरु एवं सूर्य कृपा हेतु)",rudrakshaMantra:"ॐ क्लीं नमः ॥ ॐ अं अङ्गारकाय नमः ॥",rudrakshaBenefits:"आत्मविश्वास, भूमि-भवन लाभ, रक्तचाप संतुलन एवं मंगल दोष शांति।"},वृषभ:{jeevanRatna:"हीरा / ओपल (Diamond / White Fire Opal) — लग्नेश शुक्र हेतु",bhagyaRatna:"नीलम (Blue Sapphire) — भाग्येश एवं कर्मेश शनि हेतु",ishtaRatna:"पन्ना (Emerald) — पंचमेश बुध हेतु",avoidStones:"पुखराज, मूंगा एवं मोती धारण न करें",primaryRudraksha:"६ मुखी रुद्राक्ष (भगवान कार्तिकेय एवं शुक्र कृपा हेतु)",secondaryRudraksha:"७ मुखी + ४ मुखी रुद्राक्ष (लक्ष्मी-शनि एवं बुध बल हेतु)",rudrakshaMantra:"ॐ ह्रीं हुं नमः ॥ ॐ शुं शुक्राय नमः ॥",rudrakshaBenefits:"वैवाहिक सुख, ऐश्वर्य, व्यापारिक उन्नति एवं कला/धन वृद्धि।"},मिथुन:{jeevanRatna:"पन्ना (Natural Emerald) — लग्नेश बुध हेतु",bhagyaRatna:"नीलम (Blue Sapphire) — भाग्येश शनि हेतु",ishtaRatna:"हीरा / ओपल (Diamond / Opal) — पंचमेश शुक्र हेतु",avoidStones:"मूंगा, माणिक्य एवं पुखराज से परहेज करें",primaryRudraksha:"४ मुखी रुद्राक्ष (ब्रह्मा देव स्वरूप — बुध प्रज्ञा वर्धक)",secondaryRudraksha:"६ मुखी + गणेश रुद्राक्ष (विद्या, वाणी एवं व्यापार सिद्धि)",rudrakshaMantra:"ॐ ह्रीं नमः ॥ ॐ बुं बुधाय नमः ॥",rudrakshaBenefits:"तीव्र बुद्धि, वाणी प्रभाव, व्यापारिक निर्णय क्षमता एवं नसों की मजबूती।"},कर्क:{jeevanRatna:"सच्चा मोती (Natural South Sea Pearl) — लग्नेश चन्द्र हेतु",bhagyaRatna:"पुखराज (Yellow Sapphire) — भाग्येश गुरु हेतु",ishtaRatna:"मूंगा (Red Coral) — दशमेश/पंचमेश योगकारक मंगल हेतु",avoidStones:"नीलम, हीरा एवं पन्ना धारण न करें",primaryRudraksha:"२ मुखी रुद्राक्ष (अर्धनारीश्वर स्वरूप — चन्द्र मानसिक शांति हेतु)",secondaryRudraksha:"३ मुखी + ५ मुखी रुद्राक्ष (योगकारक मंगल एवं गुरु बल हेतु)",rudrakshaMantra:"ॐ नमः ॥ ॐ सों सोमाय नमः ॥",rudrakshaBenefits:"मानसिक शांति, पारिवारिक सामंजस्य, राज्यकृपा एवं अचल संपत्ति लाभ।"},सिंह:{jeevanRatna:"माणिक्य (Burmese Ruby) — लग्नेश सूर्य हेतु",bhagyaRatna:"मूंगा (Red Coral) — भाग्येश व चतुर्थेश योगकारक मंगल हेतु",ishtaRatna:"पुखराज (Yellow Sapphire) — पंचमेश गुरु हेतु",avoidStones:"नीलम एवं हीरा कभी धारण न करें",primaryRudraksha:"१ मुखी अथवा १२ मुखी रुद्राक्ष (भगवान सूर्य एवं शिव तेज हेतु)",secondaryRudraksha:"३ मुखी + ५ मुखी रुद्राक्ष (मंगल-गुरु राजयोग बल हेतु)",rudrakshaMantra:"ॐ ह्रीं नमः ॥ ॐ घृणि सूर्याय नमः ॥",rudrakshaBenefits:"प्रशासनिक तेज, राजकीय सम्मान, उच्च पद प्राप्ति एवं हृदय/नेत्र बल।"},कन्या:{jeevanRatna:"पन्ना (Emerald) — लग्नेश एवं कर्मेश बुध हेतु",bhagyaRatna:"हीरा / ओपल (Diamond / Opal) — भाग्येश शुक्र हेतु",ishtaRatna:"नीलम (Blue Sapphire) — पंचमेश शनि हेतु",avoidStones:"मूंगा, मोती एवं माणिक्य धारण न करें",primaryRudraksha:"४ मुखी रुद्राक्ष (बुध-ब्रह्मा कृपा एवं बौद्धिक तेज हेतु)",secondaryRudraksha:"६ मुखी + ७ मुखी रुद्राक्ष (भाग्येश शुक्र एवं पंचमेश शनि हेतु)",rudrakshaMantra:"ॐ ह्रीं नमः ॥ ॐ बुं बुधाय नमः ॥",rudrakshaBenefits:"वाणिज्य-व्यापार में अपार लाभ, शिक्षा में श्रेष्ठता एवं धन संचय।"},तुला:{jeevanRatna:"हीरा / सफेद पुखराज / ओपल — लग्नेश शुक्र हेतु",bhagyaRatna:"पन्ना (Emerald) — भाग्येश बुध हेतु",ishtaRatna:"नीलम (Blue Sapphire) — चतुर्थेश/पंचमेश योगकारक शनि हेतु",avoidStones:"माणिक्य, मूंगा एवं पुखराज से परहेज करें",primaryRudraksha:"६ मुखी रुद्राक्ष (शुक्र एवं कार्तिकेय कृपा हेतु)",secondaryRudraksha:"७ मुखी + ४ मुखी रुद्राक्ष (योगकारक शनि एवं भाग्येश बुध हेतु)",rudrakshaMantra:"ॐ ह्रीं हुं नमः ॥ ॐ शुं शुक्राय नमः ॥",rudrakshaBenefits:"दाम्पत्य सुख, भौतिक वैभव, न्यायिक विजय एवं शनि-शुक्र राजयोग।"},वृश्चिक:{jeevanRatna:"मूंगा (Red Coral) — लग्नेश मंगल हेतु",bhagyaRatna:"सच्चा मोती (Natural Pearl) — भाग्येश चन्द्र हेतु",ishtaRatna:"पुखराज (Yellow Sapphire) एवं माणिक्य (Ruby) — गुरु व सूर्य हेतु",avoidStones:"पन्ना, हीरा एवं नीलम धारण न करें",primaryRudraksha:"३ मुखी रुद्राक्ष (मंगल तेज एवं साहस वृद्धि हेतु)",secondaryRudraksha:"२ मुखी + ५ मुखी रुद्राक्ष (भाग्येश चन्द्र एवं धनेश गुरु हेतु)",rudrakshaMantra:"ॐ क्लीं नमः ॥ ॐ अं अङ्गारकाय नमः ॥",rudrakshaBenefits:"शत्रु विजय, आकस्मिक धन लाभ, साहस एवं गूढ़ विद्या में सिद्धि।"},धनु:{jeevanRatna:"पुखराज (Ceylon Yellow Sapphire) — लग्नेश गुरु हेतु",bhagyaRatna:"माणिक्य (Ruby) — भाग्येश सूर्य हेतु",ishtaRatna:"मूंगा (Red Coral) — पंचमेश मंगल हेतु",avoidStones:"नीलम एवं हीरा धारण न करें",primaryRudraksha:"५ मुखी रुद्राक्ष (कालाग्नि रुद्र स्वरूप — बृहस्पति कृपा हेतु)",secondaryRudraksha:"१२ मुखी + ३ मुखी रुद्राक्ष (सूर्य एवं मंगल राजयोग बल हेतु)",rudrakshaMantra:"ॐ ह्रीं नमः ॥ ॐ बृं बृहस्पतये नमः ॥",rudrakshaBenefits:"आध्यात्मिक तेज, उच्च शिक्षा, राज्य सम्मान एवं संतान सुख।"},मकर:{jeevanRatna:"नीलम (Ceylon Blue Sapphire) — लग्नेश शनि हेतु",bhagyaRatna:"पन्ना (Emerald) — भाग्येश बुध हेतु",ishtaRatna:"हीरा / ओपल (Diamond / Opal) — योगकारक शुक्र हेतु",avoidStones:"मूंगा, मोती एवं माणिक्य धारण न करें",primaryRudraksha:"७ मुखी रुद्राक्ष (महालक्ष्मी एवं शनि कृपा हेतु)",secondaryRudraksha:"६ मुखी + ४ मुखी रुद्राक्ष (योगकारक शुक्र एवं भाग्येश बुध हेतु)",rudrakshaMantra:"ॐ हुं नमः ॥ ॐ शं शनैश्चराय नमः ॥",rudrakshaBenefits:"स्थायी संपत्ति, उद्योग-व्यापार में सफलता, शनि पीड़ा मुक्ति एवं दीर्घायु।"},कुंभ:{jeevanRatna:"नीलम (Blue Sapphire) — लग्नेश शनि हेतु",bhagyaRatna:"हीरा / ओपल (Diamond / Opal) — चतुर्थेश/भाग्येश योगकारक शुक्र हेतु",ishtaRatna:"पन्ना (Emerald) — पंचमेश बुध हेतु",avoidStones:"मूंगा, मोती एवं पुखराज बिना परामर्श न पहनें",primaryRudraksha:"७ मुखी रुद्राक्ष (लग्नेश शनि एवं सप्तमातृका कृपा हेतु)",secondaryRudraksha:"६ मुखी + ४ मुखी रुद्राक्ष (भाग्येश शुक्र एवं पंचमेश बुध हेतु)",rudrakshaMantra:"ॐ हुं नमः ॥ ॐ शं शनैश्चराय नमः ॥",rudrakshaBenefits:"नवाचार, शोध, राजयोग प्राप्ति, आर्थिक स्थिरता एवं मानसिक एकाग्रता।"},कुम्भ:{jeevanRatna:"नीलम (Blue Sapphire) — लग्नेश शनि हेतु",bhagyaRatna:"हीरा / ओपल (Diamond / Opal) — चतुर्थेश/भाग्येश योगकारक शुक्र हेतु",ishtaRatna:"पन्ना (Emerald) — पंचमेश बुध हेतु",avoidStones:"मूंगा, मोती एवं पुखराज बिना परामर्श न पहनें",primaryRudraksha:"७ मुखी रुद्राक्ष (लग्नेश शनि एवं सप्तमातृका कृपा हेतु)",secondaryRudraksha:"६ मुखी + ४ मुखी रुद्राक्ष (भाग्येश शुक्र एवं पंचमेश बुध हेतु)",rudrakshaMantra:"ॐ हुं नमः ॥ ॐ शं शनैश्चराय नमः ॥",rudrakshaBenefits:"नवाचार, शोध, राजयोग प्राप्ति, आर्थिक स्थिरता एवं मानसिक एकाग्रता।"},मीन:{jeevanRatna:"पुखराज (Yellow Sapphire) — लग्नेश एवं कर्मेश गुरु हेतु",bhagyaRatna:"मूंगा (Red Coral) — भाग्येश व धनेश मंगल हेतु",ishtaRatna:"सच्चा मोती (Natural Pearl) — पंचमेश चन्द्र हेतु",avoidStones:"पन्ना, हीरा एवं नीलम धारण न करें",primaryRudraksha:"५ मुखी रुद्राक्ष (देवगुरु बृहस्पति एवं शिव कृपा हेतु)",secondaryRudraksha:"३ मुखी + २ मुखी रुद्राक्ष (भाग्येश मंगल एवं पंचमेश चन्द्र हेतु)",rudrakshaMantra:"ॐ ह्रीं नमः ॥ ॐ बृं बृहस्पतये नमः ॥",rudrakshaBenefits:"सुख-शांति, ज्ञान-विज्ञान, प्रचुर धन-धान्य एवं आध्यात्मिक उन्नति।"}},r=n[i]||n.मेष;return{jeevanRatna:r.jeevanRatna||t.ratnaName,bhagyaRatna:r.bhagyaRatna||"पुखराज (Yellow Sapphire)",ishtaRatna:r.ishtaRatna||t.uparatnaName,uparatna:t.uparatnaName,weightRatti:"५.२५ से ६.२५ रत्ती (शरीर के वजन के १०वें भाग के अनुसार)",metalAndFinger:t.ratnaMetalAndFinger,wearingDayAndTime:`${t.luckyDays} को प्रातः शुक्ल पक्ष में सूर्योदय के १ घंटे के भीतर (शुभ होरा में)`,pranaPratishthaMantra:t.beejMantra,avoidStones:r.avoidStones||"नीलम व गोमेद बिना कुंडली सूक्ष्म परीक्षण न पहनें",primaryRudraksha:r.primaryRudraksha||t.rudraksha,secondaryRudraksha:r.secondaryRudraksha||"३ मुखी + ७ मुखी रुद्राक्ष",rudrakshaMantra:r.rudrakshaMantra||"ॐ नमः शिवाय ॥",rudrakshaBenefits:r.rudrakshaBenefits||"नवग्रह संतुलन, आरोग्य एवं मानसिक शांति।"}}function xe(e,i,t,n=200){const r="'Noto Sans Devanagari', 'Nirmala UI', 'Mangal', sans-serif",a={1:{rashiX:50,rashiY:43.2,pX:50,pY:25.5,maxPerLine:2,maxWidthU:27,maxHeightU:17},2:{rashiX:25,rashiY:20.8,pX:25,pY:9.6,maxPerLine:2,isOuterTriangle:!0,maxWidthU:23,maxHeightU:11.2},3:{rashiX:20.8,rashiY:25.5,pX:9.4,pY:25.5,maxPerLine:1,isSideTriangle:!0,isOuterTriangle:!0,maxWidthU:13,maxHeightU:15.5},4:{rashiX:43.2,rashiY:50,pX:24,pY:50,maxPerLine:2,maxWidthU:27,maxHeightU:17},5:{rashiX:20.8,rashiY:74.5,pX:9.4,pY:74.5,maxPerLine:1,isSideTriangle:!0,isOuterTriangle:!0,maxWidthU:13,maxHeightU:15.5},6:{rashiX:25,rashiY:79.2,pX:25,pY:90.4,maxPerLine:2,isOuterTriangle:!0,maxWidthU:23,maxHeightU:11.2},7:{rashiX:50,rashiY:56.8,pX:50,pY:74.5,maxPerLine:2,maxWidthU:27,maxHeightU:17},8:{rashiX:75,rashiY:79.2,pX:75,pY:90.4,maxPerLine:2,isOuterTriangle:!0,maxWidthU:23,maxHeightU:11.2},9:{rashiX:79.2,rashiY:74.5,pX:90.6,pY:74.5,maxPerLine:1,isSideTriangle:!0,isOuterTriangle:!0,maxWidthU:13,maxHeightU:15.5},10:{rashiX:56.8,rashiY:50,pX:76,pY:50,maxPerLine:2,maxWidthU:27,maxHeightU:17},11:{rashiX:79.2,rashiY:25.5,pX:90.6,pY:25.5,maxPerLine:1,isSideTriangle:!0,isOuterTriangle:!0,maxWidthU:13,maxHeightU:15.5},12:{rashiX:75,rashiY:20.8,pX:75,pY:9.6,maxPerLine:2,isOuterTriangle:!0,maxWidthU:23,maxHeightU:11.2}};let s="";for(const p of e){const l=a[p.houseNumber];if(!l)continue;const c=p.planets||[],g=c.length>=3,m=l.isSideTriangle?c.length>=4?2:1:c.length>=5?3:g?2:l.maxPerLine,h=c.map(b=>l.isSideTriangle||g?`${b.shortHindi||b.chartLabel}`:`${b.chartLabel||b.shortHindi}`),k=[];for(let b=0;b<h.length;b+=m)k.push(h.slice(b,b+m).join(" "));s+=`
      <text x="${l.rashiX}" y="${l.rashiY}" text-anchor="middle" dominant-baseline="central" fill="#b45309" font-size="3.1" font-weight="800" font-family="${r}">${p.rashiNumber}</text>
    `;const u=Math.max(1,...k.map(b=>Array.from(b).length)),v=l.isSideTriangle?k.length>=3?2.15:2.55:l.isOuterTriangle?k.length>=2?2.35:2.8:h.length>3?2.45:2.95,$=l.maxWidthU/Math.max(4,u*.66),F=l.maxHeightU/Math.max(1,k.length*1.24),S=Number(Math.max(1.85,Math.min(v,$,F)).toFixed(2)),f=Number((S*1.18).toFixed(2));k.forEach((b,x)=>{const y=(x-(k.length-1)/2)*f;s+=`
        <text x="${l.pX}" y="${(l.pY+y).toFixed(2)}" dy="-0.05em" text-anchor="middle" dominant-baseline="central" fill="${x===0?"#7c2d12":"#1e293b"}" font-size="${S}" font-weight="800" font-family="${r}">${o(b)}</text>
      `})}return`
    <div style="width: 100%; background: #fffdf9; border: 1.5px solid #b45309; border-radius: 6px; padding: 5px 7px 7px 7px; text-align: center; box-sizing: border-box; font-family: ${r}; overflow: visible;">
      <div style="font-size: 9.2px; font-weight: 800; color: #7c2d12; margin-bottom: 1.5px; line-height: 1.38;">${o(i)}</div>
      <div style="font-size: 7.9px; color: #475569; margin-bottom: 5px; line-height: 1.34; font-weight: 600;">${o(t)}</div>
      <div style="width: 100%; max-width: ${n}px; margin: 0 auto;">
        <svg class="vedic-chart-svg" viewBox="0 0 100 100" width="100%" height="auto" preserveAspectRatio="xMidYMid meet" style="display: block; width: 100%; height: auto; margin: 0 auto; background: #fffbeb; border: 1.5px solid #9a3412; border-radius: 4px; overflow: visible;">
          <rect x="1.5" y="1.5" width="97" height="97" fill="none" stroke="#9a3412" stroke-width="0.8" />
          <rect x="3" y="3" width="94" height="94" fill="none" stroke="#d97706" stroke-opacity="0.38" stroke-width="0.35" />
          <line x1="1.5" y1="1.5" x2="98.5" y2="98.5" stroke="#b45309" stroke-width="0.6" />
          <line x1="98.5" y1="1.5" x2="1.5" y2="98.5" stroke="#b45309" stroke-width="0.6" />
          <polygon points="50,1.5 98.5,50 50,98.5 1.5,50" fill="none" stroke="#9a3412" stroke-width="0.7" />
          <text x="50" y="50.4" dy="-0.06em" text-anchor="middle" dominant-baseline="central" fill="#b45309" fill-opacity="0.14" font-size="5.6" font-weight="bold" font-family="${r}">ॐ</text>
          ${s}
        </svg>
      </div>
    </div>
  `}function Y(e,i,t,n=!1){const r=`<img src="${B}" alt="Pandit Ji Online" style="width: 30px; height: 30px; min-width: 30px; max-width: 30px; border-radius: 50%; object-fit: cover; border: 1.5px solid #D4AF37; background: #0F172A; display: block;" />`,a=`<img src="${B}" alt="Pandit Ji Online" style="width: 40px; height: 40px; min-width: 40px; max-width: 40px; border-radius: 50%; object-fit: cover; border: 2px solid #D4AF37; background: #0F172A; display: block; margin: 0 auto;" />`;return n?`
      <table style="width: 100%; table-layout: fixed; border-collapse: collapse; background: linear-gradient(90deg, #fff6e0 0%, #fde8bf 100%); border: 1.5px solid #b45309; border-radius: 6px; margin-bottom: 6px; box-sizing: border-box;">
        <tr>
          <td style="padding: 4px 4px 4px 8px; vertical-align: middle; width: 38px;">
            ${r}
          </td>
          <td style="padding: 3.5px 6px 7px 4px; vertical-align: middle; text-align: left; width: 53%;">
            <div style="font-size: 8.8px; font-weight: 800; color: #9a3412; line-height: 1.3;">॥ श्री गणेशाय नमः ॥ &bull; ${o(z.appName)} (${o(i)})</div>
            <div style="font-size: 11px; font-weight: 900; color: #7c2d12; line-height: 1.32; margin-top: 1px;">${o(e)}</div>
          </td>
          <td style="padding: 3.5px 9px 7px 6px; vertical-align: middle; text-align: right; width: 41%;">
            <div style="font-size: 8.5px; color: #1e293b; font-weight: 700; line-height: 1.32;">${t}</div>
            <div style="font-size: 7.8px; color: #78350f; margin-top: 1.5px; line-height: 1.28; font-weight: 600;">आचार्य पण्डित शशांक शर्मा &bull; ${o(z.contactPhone)} &bull; ${o(z.website)}</div>
          </td>
        </tr>
      </table>
    `:`
    <div style="background: linear-gradient(135deg, #fff8e6 0%, #fde7bc 100%); border: 2.5px double #b45309; border-radius: 6px; padding: 6px 10px 8px 10px; margin-bottom: 6px; text-align: center; box-sizing: border-box; width: 100%;">
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 3px;">
        <tr>
          <td style="width: 48px; vertical-align: middle; text-align: left;">${a}</td>
          <td style="vertical-align: middle; text-align: center;">
            <div style="font-size: 9.6px; font-weight: 800; color: #9a3412; letter-spacing: 0.3px; margin-bottom: 2px; line-height: 1.3;">
              ॥ ॐ श्री गणेशाय नमः ॥ &bull; ॥ श्री गुरुभ्यो नमः ॥ &bull; ${o(z.appName)}
            </div>
            <div class="milan-status-pill" style="display: inline-flex; align-items: center; justify-content: center; line-height: 1.1; vertical-align: middle; background: #7c2d12; border: 1px solid #b45309; color: #fffbeb; font-size: 8.3px; font-weight: 700; padding: 3px 10px 5px 10px; border-radius: 3px; margin-bottom: 2.5px; box-sizing: border-box;">
              ${o(i)}
            </div>
            <div style="font-size: 14px; font-weight: 900; color: #7c2d12; margin-bottom: 2px; line-height: 1.28;">
              ${o(e)}
            </div>
            <div style="font-size: 9.4px; color: #1e293b; font-weight: 700; line-height: 1.32;">
              ${t}
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
  `}function hi(e,i){return`
    <table style="width: 100%; table-layout: fixed; border-collapse: collapse; font-size: 8.2px; color: #334155; box-sizing: border-box; line-height: 1.32;">
      <tr>
        <td style="padding: 0 0 3px 0; text-align: left; vertical-align: middle; width: 82%; white-space: nowrap;">
          <b style="color: #7c2d12;">पण्डित जी ऑनलाइन (${o(z.website)})</b> &bull; आचार्य पण्डित शशांक शर्मा &bull; WhatsApp: <b style="color:#1e293b;">${o(z.contactPhone)}</b> &bull; ${o(z.email)}
        </td>
        <td style="padding: 0 0 3px 0; text-align: right; vertical-align: middle; width: 18%; color: #7c2d12; font-weight: 800; white-space: nowrap;">
          पृष्ठ ${e} / ${i}
        </td>
      </tr>
    </table>
  `}function A(e,i){return`
    <table style="width: 100%; table-layout: fixed; border-collapse: collapse; margin-bottom: 4.5px; background: linear-gradient(90deg, #fff3d6 0%, #fde9c4 100%); border-left: 4px solid #9a3412; border-top: 1px solid #d97706; border-right: 1px solid #d97706; border-bottom: 1px solid #d97706; border-radius: 4px; box-sizing: border-box;">
      <tr>
        <td style="padding: 2.5px 8px 6px 8px; font-size: 9.4px; font-weight: 800; color: #7c2d12; vertical-align: middle; text-align: left; width: ${i?"68%":"100%"}; line-height: 1.3;">
          ${o(e)}
        </td>
        ${i?`
        <td style="padding: 2.5px 8px 5px 8px; text-align: right; vertical-align: middle; width: 32%; white-space: nowrap;">
          <span class="milan-status-pill" style="display: inline-flex; align-items: center; justify-content: center; line-height: 1.1; vertical-align: middle; font-size: 8px; color: #7c2d12; background: #fffdf9; padding: 3px 10px 5px 10px; border-radius: 3px; border: 1px solid #b45309; white-space: nowrap; font-weight: 700; box-sizing: border-box;">
            ${o(i)}
          </span>
        </td>`:""}
      </tr>
    </table>
  `}const O="'Noto Sans Devanagari', 'Noto Sans Bengali', 'Noto Sans Gujarati', 'Noto Sans Tamil', 'Noto Sans Telugu', 'Noto Sans Kannada', 'Noto Sans Malayalam', 'Noto Sans Gurmukhi', 'Noto Sans', 'Segoe UI', Arial, sans-serif";function xi(e){if(typeof document>"u"||!["bn","pa","ta","te","kn","ml","gu"].includes(e))return;const i="vedic-pdf-regional-fonts";if(document.getElementById(i))return;const t=document.createElement("link");t.id=i,t.rel="stylesheet",t.href="https://fonts.googleapis.com/css2?family=Noto+Sans+Bengali:wght@400;700&family=Noto+Sans+Gujarati:wght@400;700&family=Noto+Sans+Gurmukhi:wght@400;700&family=Noto+Sans+Tamil:wght@400;700&family=Noto+Sans+Telugu:wght@400;700&family=Noto+Sans+Kannada:wght@400;700&family=Noto+Sans+Malayalam:wght@400;700&display=swap",document.head.appendChild(t)}const bi=[["सू","Su"],["चं","Mo"],["मं","Ma"],["बु","Me"],["गु","Ju"],["शु","Ve"],["श","Sa"],["रा","Ra"],["के","Ke"],["च","Mo"],["(व*)","(R)"],["(अ^)","(C)"]];function st(e,i){if(i==="hi")return;const t=document.createTreeWalker(e,NodeFilter.SHOW_TEXT),n=[];let r=t.nextNode();for(;r;)n.push(r),r=t.nextNode();for(const a of n){const s=a.nodeValue||"";if(!s.trim()||s.trim()==="ॐ")continue;const p=a.parentElement;if(p&&p.closest("svg.vedic-chart-svg")){if(i==="en"||i==="hinglish"){let l=s;for(const[c,g]of bi)l.includes(c)&&(l=l.split(c).join(g));a.nodeValue=oe(l,i)}else a.nodeValue=oe(s,i);continue}a.nodeValue=oe(s,i)}}function pt(e,i,t){return`
    <div class="vedic-pdf-page" style="width: 794px; min-width: 794px; max-width: 794px; height: 1123px; min-height: 1123px; max-height: 1123px; background: #faf4e8; color: #1e293b; padding: 15px 18px 16px 18px; box-sizing: border-box; overflow: hidden; font-family: ${O}; position: relative;">
      <div class="vedic-pdf-frame" style="width: 758px; height: 1090px; max-height: 1090px; border: 2.5px double #b45309; border-radius: 8px; padding: 9px 12px 36px 12px; background: #fffdf9; box-sizing: border-box; overflow: hidden; position: relative;">
        <div class="vedic-pdf-body" style="width: 100%; height: 1036px; max-height: 1036px; box-sizing: border-box; overflow: hidden;">
          ${e}
        </div>
        <div class="vedic-pdf-footer" style="position: absolute; bottom: 6px; left: 14px; right: 14px; height: 26px; box-sizing: border-box; border-top: 1px solid #d97706; padding: 3px 2px 3px 2px; background: #fff9ee;">
          ${hi(i,t)}
        </div>
      </div>
    </div>
  `}async function fi(e,i){const t=Array.from(e.querySelectorAll("svg"));if(t.length===0)return;const n=[];for(const r of t)try{r.setAttribute("xmlns","http://www.w3.org/2000/svg");const a=(r.getAttribute("viewBox")||"0 0 100 100").trim().split(/[\s,]+/).map(Number),s=a[2]&&a[2]>0?a[2]:100,p=a[3]&&a[3]>0?a[3]:100,l=680,c=Math.round(l*p/s);r.setAttribute("width",String(l)),r.setAttribute("height",String(c));const g=Array.from(r.querySelectorAll("text"));for(const v of g)v.getAttribute("font-family")||v.setAttribute("font-family","'Noto Sans Devanagari', 'Noto Sans', Arial, sans-serif");const m=new XMLSerializer().serializeToString(r),h=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(m)}`,k=i.createElement("img");k.width=l,k.height=c,k.style.cssText="display: block !important; width: 100% !important; height: auto !important; margin: 0 auto !important; background: #fffbeb !important; border: 1.5px solid #9a3412 !important; border-radius: 4px !important; box-sizing: border-box !important;";const u=new Promise(v=>{const $=setTimeout(()=>v(),260);k.onload=()=>{clearTimeout($),v()},k.onerror=()=>{clearTimeout($),v()}});k.src=h,n.push(u),r.parentNode?.replaceChild(k,r)}catch{}await Promise.all(n)}function be(e,i,t="hi"){if(typeof document>"u")return;const n=document.getElementById("vedic-direct-print-iframe");n&&n.parentNode&&n.parentNode.removeChild(n);const r=document.createElement("iframe");r.id="vedic-direct-print-iframe",r.style.cssText="position: fixed; right: 0; bottom: 0; width: 1px; height: 1px; border: 0; opacity: 0.01; pointer-events: none; z-index: -1;",document.body.appendChild(r);const a=r.contentDocument||r.contentWindow?.document;if(!a)return;const s=e.map((p,l)=>`<div class="vedic-print-page-sheet" style="page-break-after: ${l<e.length-1?"always":"auto"}; break-after: ${l<e.length-1?"page":"auto"}; margin: 0 auto;">${pt(p,l+1,e.length)}</div>`).join(`
`);a.open(),a.write(`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>${o(i.replace(/\.pdf$/i,""))}</title>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;600;700;800&display=swap" />
  <style>
    @page { size: A4 portrait; margin: 0; }
    html, body { margin: 0; padding: 0; background: #faf4e8; color: #1e293b; font-family: ${O}; -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
    .vedic-pdf-page, .vedic-pdf-page * { box-sizing: border-box !important; -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
    .vedic-pdf-page table { width: 100%; max-width: 100%; table-layout: fixed; }
    .vedic-pdf-page th, .vedic-pdf-page td { word-wrap: break-word; overflow-wrap: anywhere; vertical-align: middle; }
  </style>
</head>
<body>${s}</body>
</html>`),a.close(),t!=="hi"&&a.body&&st(a.body,t),setTimeout(()=>{try{r.contentWindow?.focus(),r.contentWindow?.print()}catch{window.print()}},350)}function mi(e){const i=new Uint8Array(e),t=32768,n=[];for(let r=0;r<i.length;r+=t){const a=i.subarray(r,r+t);n.push(String.fromCharCode.apply(null,a))}return btoa(n.join(""))}function ui(e,i,t,n,r,a){if(typeof document>"u")return;const s=document.getElementById("vedic-pdf-ready-modal");s&&s.parentNode&&s.parentNode.removeChild(s);const p=(()=>{try{return window.self!==window.top}catch{return!0}})(),l=(D,L,j)=>a==="hi"?D:a==="en"?L:a==="hinglish"?j:oe(D,a),c=document.createElement("div");c.id="vedic-pdf-ready-modal",c.style.cssText="position: fixed; inset: 0; z-index: 999999; background: rgba(5, 8, 17, 0.82); backdrop-filter: blur(6px); display: flex; align-items: center; justify-content: center; padding: 16px; font-family: "+O+";";const g=(e.size/(1024*1024)).toFixed(2),m=/milan|36_gun/i.test(n),h=document.createElement("div");h.style.cssText="width: 100%; max-width: 440px; background: linear-gradient(155deg, color-mix(in srgb, var(--theme-bg, #0F172A) 72%, var(--theme-primary, #B45309) 28%) 0%, color-mix(in srgb, var(--theme-bg, #0F172A) 84%, var(--theme-accent, #F59E0B) 16%) 100%) !important; border: 1.5px solid color-mix(in srgb, var(--theme-primary, #D97706) 50%, #F59E0B 30%) !important; border-radius: 20px; padding: 22px 20px; box-shadow: 0 26px 64px rgba(0,0,0,0.72), inset 0 1px 0 rgba(255,253,247,0.14); text-align: center; color: #FFFDF7; position: relative; box-sizing: border-box;";const k=document.createElement("button");k.type="button",k.setAttribute("aria-label","Close"),k.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',k.style.cssText="position: absolute; top: 12px; right: 12px; width: 30px; height: 30px; border-radius: 999px; border: 1px solid color-mix(in srgb, var(--theme-primary, #D97706) 48%, #F59E0B 30%); background: color-mix(in srgb, var(--theme-bg, #0F172A) 68%, var(--theme-primary, #B45309) 32%); color: #FFFDF7; display: flex; align-items: center; justify-content: center; cursor: pointer;";const u=()=>{c.parentNode&&c.parentNode.removeChild(c),setTimeout(()=>{URL.revokeObjectURL(i)},6e4)};k.onclick=u,c.onclick=D=>{D.target===c&&u()};const v=document.createElement("div");v.style.cssText="display: flex; justify-content: center; margin-bottom: 10px;",v.innerHTML=`
    <div style="width:54px;height:54px;border-radius:50%;padding:2.5px;background:linear-gradient(135deg,#FDE047 0%,#D4AF37 52%,#FF6F00 100%);box-shadow:0 4px 14px rgba(0,0,0,0.45);display:flex;align-items:center;justify-content:center;overflow:hidden;box-sizing:border-box;">
      <img src="${B}" onerror="this.onerror=null;this.src='/pandit-photo.jpg';" alt="पण्डित जी ऑनलाइन (Pandit Ji Online)" style="width:100%;height:100%;border-radius:50%;object-fit:cover;display:block;background:#0F172A;" />
    </div>
  `;const $=document.createElement("h3");$.style.cssText="margin: 0 0 6px 0; font-size: 16.5px; font-weight: 900; color: #FFFDF7; line-height: 1.35; text-shadow: 0 1px 2px rgba(0,0,0,0.35);",$.innerText=m?l("36-गुण मिलान PDF तैयार है","36-Gun Milan PDF is Ready","36-Gun Milan PDF Taiyar Hai"):l("पण्डित जी ऑनलाइन • वैदिक महा-पत्रिका PDF तैयार है","Pandit Ji Online • Vedic Maha-Patrika PDF Ready","Pandit Ji Online • Vedic Maha-Patrika PDF Taiyar Hai");const F=document.createElement("div");F.style.cssText="display: inline-block; background: color-mix(in srgb, var(--theme-bg, #0F172A) 66%, var(--theme-primary, #B45309) 34%); border: 1px solid color-mix(in srgb, var(--theme-primary, #D97706) 44%, #F59E0B 28%); color: color-mix(in srgb, var(--theme-accent, #FDE68A) 52%, #FFFDF7 48%); font-size: 11.5px; font-weight: 800; padding: 4px 12px; border-radius: 999px; margin-bottom: 10px;",F.innerText=l(`${r.length} पृष्ठ • ${g} MB • शाही प्रिंट-रेडी PDF`,`${r.length} Pages • ${g} MB • Royal Print-Ready PDF`,`${r.length} Pages • ${g} MB • Print-Ready PDF`);const S=document.createElement("p");S.style.cssText="margin: 0 0 14px 0; font-size: 11.5px; color: #F1F5F9; line-height: 1.55;",S.innerText=l("आपकी PDF फाइल फोन के Downloads में सेव हो रही है। दोबारा सेव करने के लिए नीचे बटन पर टैप करें या सीधे WhatsApp पर शेयर करें:","Your PDF file is saving to your Downloads folder. Tap below to save again or share directly on WhatsApp:","Aapki PDF file phone ke Downloads me save ho rahi hai. Dobara save karne ke liye neeche button par tap karein ya WhatsApp par share karein:");const f=document.createElement("a");f.href=t||i,p&&t&&(f.target="_blank",f.rel="noopener noreferrer"),f.download=n,f.style.cssText="display: flex; align-items: center; justify-content: center; gap: 8px; width: 100%; padding: 12px 16px; border-radius: 12px; background: linear-gradient(135deg, color-mix(in srgb, var(--theme-primary, #D97706) 80%, #F59E0B 20%) 0%, color-mix(in srgb, var(--theme-accent, #F59E0B) 68%, var(--theme-primary, #B45309) 32%) 100%); color: #FFFDF7; font-weight: 900; font-size: 13.5px; text-decoration: none; border: 1px solid color-mix(in srgb, var(--theme-accent, #FDE68A) 52%, #FFFDF7 24%); box-shadow: 0 8px 22px rgba(0,0,0,0.4); text-shadow: 0 1px 2px rgba(0,0,0,0.45); margin-bottom: 9px; box-sizing: border-box; cursor: pointer;",f.innerText=l(`⬇ अभी PDF फाइल डाउनलोड / सेव करें (${g} MB)`,`⬇ Download / Save PDF File Now (${g} MB)`,`⬇ Abhi PDF File Download / Save Karein (${g} MB)`),f.onclick=()=>{setTimeout(()=>{c.parentNode&&c.parentNode.removeChild(c)},1800)};const b=document.createElement("button");b.type="button",b.style.cssText="display: flex; align-items: center; justify-content: center; gap: 8px; width: 100%; padding: 11px 16px; border-radius: 12px; background: linear-gradient(135deg, #047857 0%, #059669 100%); color: #FFFDF7; font-weight: 800; font-size: 12.5px; border: 1px solid rgba(110, 231, 183, 0.42); box-shadow: 0 6px 16px rgba(4, 120, 87, 0.35); margin-bottom: 9px; box-sizing: border-box; cursor: pointer;",b.innerText=l("📲 WhatsApp / फोन पर सीधे PDF शेयर करें","📲 Share PDF directly on WhatsApp / Phone","📲 WhatsApp / Phone par seedhe PDF Share karein"),b.onclick=async()=>{try{const D=new File([e],n,{type:"application/pdf"});if(navigator.canShare&&navigator.canShare({files:[D]})){await navigator.share({files:[D],title:n.replace(/\.pdf$/i,""),text:"पण्डित जी ऑनलाइन — वैदिक ज्योतिष महा-पत्रिका PDF (www.panditjionline.online • +91 7017279043)"}),u();return}}catch{}f.click()};const x=document.createElement("button");x.type="button",x.style.cssText="display: flex; align-items: center; justify-content: center; gap: 6px; width: 100%; padding: 9.5px 14px; border-radius: 12px; background: color-mix(in srgb, var(--theme-bg, #0F172A) 66%, var(--theme-primary, #B45309) 34%); color: color-mix(in srgb, var(--theme-accent, #FDE68A) 52%, #FFFDF7 48%); font-weight: 800; font-size: 12px; border: 1px solid color-mix(in srgb, var(--theme-primary, #D97706) 48%, #F59E0B 30%); margin-bottom: 9px; box-sizing: border-box; cursor: pointer;",x.innerText=l("🖨 सीधे प्रिंट करें (Print / Save as PDF)","🖨 Direct Print / Save as PDF","🖨 Seedhe Print / Save as PDF karein"),x.onclick=()=>{u(),be(r,n,a)};const y=document.createElement("button");y.type="button",y.style.cssText="display: flex; align-items: center; justify-content: center; width: 100%; padding: 9px 14px; border-radius: 12px; background: color-mix(in srgb, var(--theme-bg, #0F172A) 74%, var(--theme-primary, #B45309) 26%); color: #F1F5F9; font-weight: 700; font-size: 12px; border: 1px solid color-mix(in srgb, var(--theme-primary, #D97706) 40%, rgba(255,253,247,0.22)); box-sizing: border-box; cursor: pointer;",y.innerText=l("बंद करें","Close","Band Karein"),y.onclick=u,h.appendChild(k),h.appendChild(v),h.appendChild($),h.appendChild(F),h.appendChild(S),h.appendChild(f),h.appendChild(b),h.appendChild(x),h.appendChild(y),c.appendChild(h),document.body.appendChild(c)}async function yi(e,i,t,n="hi"){const r=i.endsWith(".pdf")?i:`${i}.pdf`;try{const a=e.output("arraybuffer"),s=new Blob([a],{type:"application/pdf"}),p=URL.createObjectURL(s),l=(()=>{try{return window.self!==window.top}catch{return!0}})();let c=null;if(l&&a.byteLength<28e5)try{const g=mi(a),m=await fetch("/api/pdf-download",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({filename:r,base64:g})});if(m.ok){const h=await m.json();h?.ok&&typeof h.downloadUrl=="string"&&(c=h.downloadUrl)}}catch{}try{if(c){const g=document.createElement("iframe");g.style.display="none",g.src=c,document.body.appendChild(g),setTimeout(()=>{document.body.contains(g)&&document.body.removeChild(g)},15e3)}else{const g=document.createElement("a");g.href=p,g.download=r,g.style.display="none",document.body.appendChild(g),g.click(),setTimeout(()=>{document.body.contains(g)&&document.body.removeChild(g)},2e3)}}catch{}ui(s,p,c,r,t,n)}catch{try{e.save(r)}catch{be(t,r,n)}}}async function ct(e,i=3500){const t=[],n=r=>{const a=r?.fonts;if(a){if(typeof a.load=="function"){const s="ॐ ह्रां ह्रीं ह्रौं श्रां श्रीं श्रौं क्रां क्रीं क्रौं ब्रां ब्रीं ब्रौं ग्रां ग्रीं ग्रौं द्रां द्रीं द्रौं प्रां प्रीं प्रौं भ्रां भ्रीं भ्रौं स्रां स्रीं स्रौं मं रा मंगल राहु चन्द्रमसे शनैश्चराय नमः लग्न राशि नक्षत्र मेष वृषभ मिथुन कर्क सिंह कन्या तुला वृश्चिक धनु मकर कुंभ कुम्भ मीन दिन ०१२३४५६७८९ 0123456789 (Libra Pisces Virgo Aquarius)";for(const p of["400","500","600","700","800","900"])t.push(a.load(`${p} 12px "Noto Sans Devanagari"`,s).catch(()=>{}));t.push(a.load('400 13px "Noto Sans Symbols 2"',"★☆✦•°′″").catch(()=>{}))}a.ready&&t.push(a.ready.catch(()=>{}))}};typeof document<"u"&&n(document),e&&e!==document&&n(e),t.length>0&&await Promise.race([Promise.all(t),new Promise(r=>setTimeout(r,i))])}function gt(e,i=".vedic-book-a4-page, .vedic-pdf-page"){try{const t="pj-h2c-devanagari-root-fix";if(!e.getElementById(t)){const a=e.createElement("style");a.id=t,a.textContent=`
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
      `,(e.head||e.documentElement).appendChild(a)}const n=Array.from(e.querySelectorAll(i));if(n.length===0)return;const r=new Set(["STYLE","SCRIPT","NOSCRIPT","SVG","TITLE","TEXTAREA","OPTION"]);for(const a of n){const s=[],p=e.createTreeWalker(a,NodeFilter.SHOW_TEXT);let l;for(;l=p.nextNode();){const c=l;if(!c.nodeValue||!c.nodeValue.trim())continue;const g=c.parentElement;g&&(r.has(g.tagName)||g.closest("svg, .pj-h2c-devanagari-lift, .pj-h2c-no-lift")||s.push(c))}for(const c of s){const g=c.parentElement;if(!g)continue;const m=e.createElement("span");m.className="pj-h2c-devanagari-lift",m.style.position="relative",m.style.top="-2px",g.insertBefore(m,c),m.appendChild(c)}}}catch{}}async function vi(e,i,t="hi"){xi(t);const{jsPDF:n,html2canvas:r}=await rt(),a=new n({orientation:"portrait",unit:"mm",format:"a4",compress:!0}),s=210,p=297,l=`
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
        font-family: ${O} !important;
        font-synthesis: none !important;
        line-height: 1.35;
      }
      .vedic-pdf-page,
      .vedic-pdf-page * {
        box-sizing: border-box !important;
        font-family: ${O} !important;
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
        font-family: ${O} !important;
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
  `,c=document.createElement("iframe");c.id="vedic-pdf-clean-iframe",c.style.cssText="position:fixed;left:-9999px;top:0;width:794px;height:1123px;border:0;margin:0;padding:0;z-index:-1;pointer-events:none;background:#faf4e8;";const g=u=>{const v=`पृष्ठ ${u} / ${e.length} तैयार हो रहा है...`;return t==="hi"?v:t==="en"?`Preparing Page ${u} / ${e.length}...`:t==="hinglish"?`Page ${u} / ${e.length} taiyar ho raha hai...`:oe(v,t)},m=/milan|36_gun/i.test(i)?t==="en"?"Preparing 36-Gun Vivah Milan PDF":"36 गुण विवाह मिलान तैयार हो रहा है":"PANDIT JI ONLINE • 4K वैदिक PDF",h=document.createElement("div");h.id="vedic-pdf-progress-badge",h.style.cssText=`position:fixed;top:16px;left:50%;transform:translateX(-50%);z-index:999999;background:linear-gradient(155deg, color-mix(in srgb, var(--theme-bg, #0F172A) 72%, var(--theme-primary, #B45309) 28%) 0%, color-mix(in srgb, var(--theme-bg, #0F172A) 84%, var(--theme-accent, #F59E0B) 16%) 100%) !important;border:1.5px solid color-mix(in srgb, var(--theme-primary, #D97706) 50%, #F59E0B 30%) !important;color:#FFFDF7;padding:12px 16px;border-radius:16px;width:min(92vw,408px);box-shadow:0 20px 48px rgba(0,0,0,0.62), inset 0 1px 0 rgba(255,253,247,0.12);font-family:${O};box-sizing:border-box;`,h.innerHTML=`
    <div style="display:flex;align-items:center;gap:11px;margin-bottom:9px;">
      <div style="width:36px;height:36px;border-radius:50%;padding:1.8px;background:linear-gradient(135deg,#FDE047 0%,#D4AF37 52%,#FF6F00 100%);box-shadow:0 2px 10px rgba(0,0,0,0.35);flex-shrink:0;display:flex;align-items:center;justify-content:center;overflow:hidden;box-sizing:border-box;">
        <img src="${B}" onerror="this.onerror=null;this.src='/pandit-photo.jpg';" alt="पण्डित जी ऑनलाइन (Pandit Ji Online)" style="width:100%;height:100%;border-radius:50%;object-fit:cover;display:block;background:#0F172A;" />
      </div>
      <div style="flex:1;min-width:0;">
        <div style="font-size:12px;font-weight:800;color:#FFFDF7;line-height:1.3;">${m}</div>
        <div id="vedic-pdf-progress-text" style="font-size:11px;font-weight:600;color:#F1F5F9;margin-top:2px;">${g(1)}</div>
      </div>
      <div id="vedic-pdf-progress-pct" style="font-size:12px;font-weight:900;color:color-mix(in srgb, var(--theme-accent, #FDE68A) 52%, #FFFDF7 48%);min-width:34px;text-align:right;font-family:monospace;">0%</div>
    </div>
    <div style="width:100%;height:7px;background:color-mix(in srgb, var(--theme-bg, #0F172A) 65%, rgba(255,253,247,0.16) 35%);border-radius:999px;overflow:hidden;border:1px solid color-mix(in srgb, var(--theme-primary, #D97706) 45%, #F59E0B 25%);">
      <div id="vedic-pdf-progress-fill" style="width:4%;height:100%;background:linear-gradient(90deg, var(--theme-primary, #FF6F00), var(--theme-accent, #D4AF37), #FDE68A);border-radius:999px;transition:width 0.18s ease-out;"></div>
    </div>
  `;const k=u=>{const v=Math.min(100,Math.round(u/Math.max(1,e.length)*100)),$=h.querySelector("#vedic-pdf-progress-text"),F=h.querySelector("#vedic-pdf-progress-pct"),S=h.querySelector("#vedic-pdf-progress-fill");$&&($.innerText=g(u)),F&&(F.innerText=`${v}%`),S&&(S.style.width=`${Math.max(4,v)}%`)};document.body.appendChild(c),document.body.appendChild(h);try{const u=c.contentDocument||c.contentWindow?.document;if(!u)throw new Error("Could not initialize clean PDF iframe document");u.open(),u.write(`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;600;700;800&display=swap" />
  ${l}
</head>
<body style="margin:0;padding:0;background:#faf4e8;color:#1e293b;">
  <div id="vedic-pdf-render-host" style="width:794px;height:1123px;margin:0;padding:0;background:#faf4e8;overflow:hidden;"></div>
</body>
</html>`),u.close();const v=u.getElementById("vedic-pdf-render-host");if(!v)throw new Error("Could not find PDF render host in clean iframe");await ct(u,1600);const $=2.25;for(let F=0;F<e.length;F++){k(F+1),v.innerHTML=pt(e[F],F+1,e.length);const S=v.querySelector(".vedic-pdf-page");if(!S)continue;t!=="hi"&&st(S,t),await fi(S,u);const f=Array.from(S.querySelectorAll("img"));f.length>0&&await Promise.race([Promise.all(f.map(y=>y.complete?Promise.resolve():new Promise(D=>{y.onload=()=>D(),y.onerror=()=>D()}))),new Promise(y=>setTimeout(y,350))]),await new Promise(y=>setTimeout(y,10)),F>0&&a.addPage("a4","portrait"),document.fonts?.ready&&await document.fonts.ready;const b=await r(S,{scale:$,useCORS:!0,allowTaint:!0,logging:!1,backgroundColor:"#faf4e8",x:0,y:0,scrollX:0,scrollY:0,width:794,height:1123,windowWidth:794,windowHeight:1123,onclone:y=>{gt(y,".vedic-pdf-page")}});a.setFillColor(250,244,232),a.rect(0,0,s,p,"F");const x=b.toDataURL("image/jpeg",.86);a.addImage(x,"JPEG",0,0,s,p,void 0,"FAST"),b.width=0,b.height=0,v.innerHTML=""}return await yi(a,i,e,t),!0}catch(u){return console.error("Error rendering Vedic PDF, opening direct print fallback:",u),be(e,i,t),!0}finally{document.body.contains(h)&&document.body.removeChild(h),document.body.contains(c)&&document.body.removeChild(c)}}async function $i(e,i="kundali-milan-full-report-container",t="hi"){const n=at(e),r=de(e.boyName),a=de(e.girlName),s=t==="hi"?"":`_${t.toUpperCase()}`,p=`Brihat_36_Gun_Milan_${r}_and_${a}${s}_PanditJiOnline`;return vi(n,p,t)}function wi(e,i="hi"){const t=at(e),n=de(e.boyName),r=de(e.girlName),a=i==="hi"?"":`_${i.toUpperCase()}`,s=`Brihat_36_Gun_Milan_${n}_and_${r}${a}_PanditJiOnline`;be(t,s,i)}export{w as P,N as V,ci as a,Fe as b,pi as c,$i as d,Ge as e,ri as f,gi as g,ai as h,Ve as i,rt as j,gt as k,wi as p,de as s,ct as w};
