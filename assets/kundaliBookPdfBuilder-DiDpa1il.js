import{a6 as ot,o as ft,t as _t}from"./index-DROdB2cM.js";import{e as Bt,b as Ut,s as Mt,c as Ot,g as Wt,w as Kt}from"./pdfReportExporter-Du0nbwyg.js";import{R as bt,G as Qt,C as lt,T as Vt,a as vt}from"./SampurnKundaliSection-RmWkr1Tl.js";import{Q as Yt}from"./browser-BoY_g0kb.js";import"./vendor-react-C3naJICA.js";import"./vendor-pdf-DEj_dQtj.js";import"./vendor-icons-DaVTQOF8.js";import"./panchang-core-TH1HXJAY.js";import"./vendor-astronomy-Dp-T7uki.js";import"./seo-core-Ca4yS4tj.js";import"./VedicDateInput-B3DcecwM.js";import"./VedicTripleCheckBadge-hJqqUNBq.js";import"./vedicTripleCheck-rdxlNQNj.js";import"./BirthPlaceGpsButton-D_4y3ola.js";const t={saffron:"#FF6F00",saffronDeep:"#C2410C",saffronSoft:"#FFF3E0",templeGold:"#D4AF37",templeGoldDark:"#9A6B11",templeGoldSoft:"#FDF5DF",cosmicNavy:"#0F172A",cosmicNavySoft:"#1E293B",warmIvory:"#FFF9ED",pureIvory:"#FFFDF8",inkPrimary:"#1E293B",inkMuted:"#475569",emerald:"#047857",emeraldSoft:"#ECFDF5",crimson:"#B91C1C",crimsonSoft:"#FEF2F2",borderGold:"#D4AF37",borderMuted:"#E7D5AE"},T={website:"https://www.panditjionline.online",websiteDisplay:"www.panditjionline.online",youtube:ot.youtubeUrl,youtubeHandle:ot.youtubeHandle,whatsapp:`https://wa.me/${ot.whatsappNumber}?text=${encodeURIComponent("नमस्ते आचार्य पण्डित शशांक शर्मा जी, मैंने पण्डित जी ऑनलाइन की बृहत् जन्म कुंडली पुस्तक PDF डाउनलोड की है। कृपया मार्गदर्शन प्रदान करें।")}`,phoneDisplay:ot.displayPhone,founderHi:"आचार्य पण्डित शशांक शर्मा",locationHi:ot.location,email:ot.email},Ct="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="120">
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
    </svg>`);let wt=null;async function Jt(){return ft.startsWith("data:image/")?ft:typeof window>"u"||typeof fetch!="function"?Ct:(wt||(wt=(async()=>{const e=["/pwa-192x192.png","/apple-touch-icon.png","/pandit-shashank-sharma.jpg"];for(const s of e)try{const n=new AbortController,r=window.setTimeout(()=>n.abort(),1600),c=await fetch(s,{signal:n.signal,cache:"force-cache"});if(window.clearTimeout(r),!c.ok)continue;const g=await c.blob(),a=await new Promise(l=>{const p=new FileReader;p.onloadend=()=>l(typeof p.result=="string"?p.result:""),p.onerror=()=>l(""),p.readAsDataURL(g)});if(a.startsWith("data:image/"))return a}catch{}return Ct})()),wt)}function Pt(e){return e&&e.startsWith("data:image/")?e:ft.startsWith("data:image/")?ft:Ct}function at(e,s,n=2){const r=Pt(s);return`
    <div style="width: ${e}px; height: ${e}px; border-radius: 50%; padding: ${n}px; background: linear-gradient(135deg, #FDE047 0%, ${t.templeGold} 52%, ${t.saffron} 100%); box-shadow: 0 2px 8px rgba(15, 23, 42, 0.28); flex-shrink: 0; align-self: center; display: flex; align-items: center; justify-content: center; overflow: hidden;">
      <img src="${r}" alt="PANDIT JI ONLINE Logo" width="${e-n*2}" height="${e-n*2}" style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover; object-position: center; display: block; background: ${t.cosmicNavy};" />
    </div>
  `}let kt=null;async function Ft(e,s=t.cosmicNavy,n="#FFFFFF"){try{return await Yt.toDataURL(e,{errorCorrectionLevel:"M",margin:1,width:220,color:{dark:s,light:n}})}catch{return""}}async function ut(){return kt||(kt=(async()=>{const[e,s,n,r]=await Promise.all([Ft(T.website,"#0F172A","#FFFDF8"),Ft(T.youtube,"#0F172A","#FFFDF8"),Ft(T.whatsapp,"#0F172A","#FFFDF8"),Jt()]);return{websiteQrDataUrl:e,youtubeQrDataUrl:s,whatsappQrDataUrl:n,appLogoDataUrl:r}})()),kt}const qt={after_charts_b:{slot:"after_charts_b",badgeHi:"PANDIT JI ONLINE • निःशुल्क वैदिक सेवाएँ",titleHi:"दैनिक दृक् गणित पंचांग, चौघड़िया एवं सटीक राशिफल — प्रतिदिन प्रातः",bodyHi:"तिथि, नक्षत्र, योग, करण, अभिजीत मुहूर्त, राहुकाल और चंद्र-आधारित दैनिक, साप्ताहिक व मासिक राशिफल अपने मोबाइल पर बिल्कुल निःशुल्क देखें।",highlightsHi:["दृक् गणित लाहिड़ी पंचांग","दैनिक/मासिक राशिफल","शुभ मुहूर्त व व्रत-त्योहार"],ctaHi:"QR स्कैन करें या विज़िट करें:",urlLabel:T.websiteDisplay,qrKey:"websiteQrDataUrl",accentColor:t.saffron},after_vargas_c:{slot:"after_vargas_c",badgeHi:"PANDIT JI ONLINE • पारिवारिक ज्योतिष मंच",titleHi:"निःशुल्क सम्पूर्ण जन्म कुंडली पुस्तक एवं 36 गुण विवाह मिलान",bodyHi:"परिवार के किसी भी सदस्य की वैदिक जन्म कुंडली, 16 षोडशवर्ग, मांगलिक परीक्षण और अष्टकूट 36 गुण विवाह मिलान कुछ ही सेकंड में तैयार करें।",highlightsHi:["निःशुल्क जन्म कुंडली पुस्तक","36 गुण अष्टकूट मिलान","भारत व विदेश टाइमज़ोन समर्थन"],ctaHi:"ऑनलाइन सेवा खोलें:",urlLabel:T.websiteDisplay,qrKey:"websiteQrDataUrl",accentColor:t.templeGoldDark},after_ashtakavarga_e:{slot:"after_ashtakavarga_e",badgeHi:"PANDIT JI ONLINE • डिजिटल सनातन मंदिर",titleHi:"डिजिटल मंदिर, आरती-चालीसा संग्रह एवं 108 रुद्राक्ष मंत्र जप",bodyHi:"अपने इष्टदेव की प्रतिदिन आरती, प्रामाणिक चालीसा, स्तोत्र पाठ और 108 मनकों वाला डिजिटल मंत्र जप काउंटर — घर या यात्रा में कहीं भी भक्ति का साथ।",highlightsHi:["डिजिटल आरती व दर्शन","108 रुद्राक्ष जप काउंटर","संपूर्ण चालीसा एवं स्तोत्र"],ctaHi:"डिजिटल मंदिर में प्रवेश करें:",urlLabel:T.websiteDisplay,qrKey:"websiteQrDataUrl",accentColor:t.saffron},after_gochar_g:{slot:"after_gochar_g",badgeHi:"PANDIT JI ONLINE OFFICIAL • YOUTUBE",titleHi:"आचार्य पण्डित शशांक शर्मा से जुड़ें — YouTube ज्योतिष एवं धर्म चैनल",bodyHi:"ग्रह गोचर विश्लेषण, प्रमुख व्रत-त्योहारों के सटीक मुहूर्त, वैदिक पूजन विधि और सरल ज्योतिष ज्ञान के प्रामाणिक वीडियो देखने हेतु चैनल से जुड़ें।",highlightsHi:["दैनिक पंचांग व व्रत विधि","ग्रह गोचर मार्गदर्शन","सरल सात्विक वैदिक उपाय"],ctaHi:"YouTube चैनल स्कैन करें:",urlLabel:`youtube.com/${T.youtubeHandle}`,qrKey:"youtubeQrDataUrl",accentColor:t.crimson},back_cover_i:{slot:"back_cover_i",badgeHi:"प्रामाणिक वैदिक परामर्श • PANDIT JI ONLINE",titleHi:"व्यक्तिगत कुंडली विश्लेषण, विवाह मिलान एवं वैदिक अनुष्ठान परामर्श",bodyHi:"यदि आप विवाह, संतान, व्यवसाय, सरकारी नौकरी, ग्रह-शांति पूजा या रत्न चयन पर प्रत्यक्ष ज्योतिषीय मार्गदर्शन चाहते हैं, तो आचार्य पण्डित शशांक शर्मा जी से सीधे संपर्क करें।",highlightsHi:[`सम्पर्क / WhatsApp: ${T.phoneDisplay}`,T.locationHi,T.websiteDisplay],ctaHi:"वेबसाइट / WhatsApp स्कैन करें:",urlLabel:T.websiteDisplay,qrKey:"websiteQrDataUrl",accentColor:t.saffron}};function G(e){return String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function rt(e,s,n){if(n&&e!=="back_cover_i")return"";const r=qt[e],c=s[r.qrKey]||s.websiteQrDataUrl,g=at(42,s.appLogoDataUrl,2);return n&&e==="back_cover_i"?`
      <div class="book-banner-slot">
        <div class="book-banner" style="margin: 0; width: 100%; background: ${t.pureIvory}; border: 1.8px solid ${t.templeGold}; border-radius: 11px; padding: 12px 15px; display: flex; align-items: center; justify-content: space-between; gap: 14px;">
          <div style="display: flex; align-items: center; gap: 12px; flex: 1; min-width: 0;">
            ${g}
            <div style="display: flex; flex-direction: column; justify-content: center; flex: 1; min-width: 0;">
              <div style="font-size: 8.8px; font-weight: 800; letter-spacing: 0; color: ${t.saffronDeep}; line-height: 1.3;">
                पण्डित जी ऑनलाइन (PANDIT JI ONLINE) • सत्यापित वैदिक जन्म पत्रिका
              </div>
              <div style="font-size: 11.5px; font-weight: 800; color: ${t.cosmicNavy}; margin-top: 2px; line-height: 1.3;">
                ${G(T.founderHi)} • ${G(T.locationHi)}
              </div>
              <div style="font-size: 9.2px; color: ${t.inkMuted}; margin-top: 3px; line-height: 1.45;">
                सम्पर्क / WhatsApp: <b style="color:${t.cosmicNavy};">${G(T.phoneDisplay)}</b> &nbsp;|&nbsp; वेबसाइट: <b style="color:${t.saffronDeep};">${G(T.websiteDisplay)}</b>
              </div>
            </div>
          </div>
          ${c?`<div style="flex-shrink: 0; align-self: center; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; background: #ffffff; border: 1.2px solid ${t.templeGold}; border-radius: 8px; padding: 4px;">
                   <img src="${c}" alt="Pandit Ji Online QR" style="width: 62px; height: 62px; display: block; margin: 0 auto;" />
                   <div style="font-size: 7px; font-weight: 800; color: ${t.cosmicNavy}; margin-top: 3px; line-height: 1.2;">${G(T.websiteDisplay)}</div>
                 </div>`:""}
        </div>
      </div>
    `:`
    <div class="book-banner-slot">
      <div class="book-banner" style="margin: 0; width: 100%; background: linear-gradient(135deg, ${t.cosmicNavy} 0%, #17243D 72%, #241910 100%); border: 2px solid ${t.templeGold}; border-radius: 12px; padding: 12px 15px; color: ${t.warmIvory}; display: flex; align-items: center; justify-content: space-between; gap: 14px; box-shadow: 0 3px 12px rgba(15, 23, 42, 0.16);">
        <div style="display: flex; align-items: center; gap: 12px; flex: 1; min-width: 0;">
          ${g}
          <div style="display: flex; flex-direction: column; justify-content: center; flex: 1; min-width: 0;">
            <div class="book-banner-badge" data-badge-bg="${r.accentColor}" style="display: inline-flex; align-items: center; justify-content: center; align-self: flex-start; min-height: 18px; padding: 2px 10px; line-height: 1.15; background: ${r.accentColor}; color: #FFFFFF; font-size: 8px; font-weight: 800; letter-spacing: 0; border-radius: 999px; margin-bottom: 5px; box-sizing: border-box; text-align: center;"><span class="book-banner-badge-text" style="display: inline-block; line-height: 1.15;">${G(r.badgeHi)}</span></div>
            <div style="font-size: 11.8px; font-weight: 800; color: #FDE68A; line-height: 1.35;">
              ${G(r.titleHi)}
            </div>
            <div style="font-size: 8.8px; color: #F1F5F9; line-height: 1.48; margin-top: 3px;">
              ${G(r.bodyHi)}
            </div>
            <div class="book-banner-pills" style="display: flex; flex-wrap: wrap; align-items: center; gap: 6px; margin-top: 6px;">
              ${r.highlightsHi.map(a=>`<span class="book-banner-pill" style="display: inline-flex; align-items: center; justify-content: center; font-size: 7.9px; font-weight: 700; line-height: 1.2; color: #FFF9ED; background: rgba(212, 175, 55, 0.18); border: 1px solid rgba(212, 175, 55, 0.55); padding: 4px 8px; border-radius: 4px; box-sizing: border-box; vertical-align: middle;">✦ ${G(a)}</span>`).join("")}
            </div>
            <div style="font-size: 8.2px; color: #FCD34D; margin-top: 5px; font-weight: 700; line-height: 1.3;">
              ${G(r.ctaHi)} <span style="color: #FFFFFF; font-family: monospace;">${G(r.urlLabel)}</span>
            </div>
          </div>
        </div>

        ${c?`<div style="flex-shrink: 0; align-self: center; display: flex; flex-direction: column; align-items: center; justify-content: center; background: #FFFDF8; border: 2px solid ${t.templeGold}; border-radius: 8px; padding: 5px; text-align: center; width: 84px;">
                 <img src="${c}" alt="QR Code" style="width: 70px; height: 70px; display: block; margin: 0 auto;" />
                 <div style="font-size: 7px; font-weight: 800; color: ${t.cosmicNavy}; margin-top: 3px; line-height: 1.2;">स्कैन करें</div>
               </div>`:""}
      </div>
    </div>
  `}function Xt(e,s){if(s)return rt("back_cover_i",e,!0);const n=at(54,e.appLogoDataUrl,2.5);return`
    <div class="book-banner-slot">
      <div class="book-banner" style="margin: 0; width: 100%; background: linear-gradient(135deg, ${t.cosmicNavy} 0%, #16223A 65%, #2B170A 100%); border: 2px solid ${t.templeGold}; border-radius: 13px; padding: 15px 17px; color: ${t.warmIvory}; display: flex; align-items: center; justify-content: space-between; gap: 14px;">
        <div style="display: flex; align-items: center; gap: 13px; flex: 1; min-width: 0;">
          ${n}
          <div style="display: flex; flex-direction: column; justify-content: center; flex: 1; min-width: 0;">
            <div style="font-size: 8.6px; font-weight: 800; color: ${t.templeGold}; letter-spacing: 0; line-height: 1.3;">
              ॥ सही समय, सटीक ज्ञान — पण्डित जी ऑनलाइन की पहचान ॥
            </div>
            <div style="font-size: 13.5px; font-weight: 800; color: #FFFFFF; margin-top: 3px; line-height: 1.3;">
              ${G(T.founderHi)} • वैदिक ज्योतिष एवं पूजन परामर्श
            </div>
            <div style="font-size: 9px; color: #E2E8F0; line-height: 1.5; margin-top: 4px;">
              विवाह, करियर, संतान, व्यवसाय, ग्रह-शांति पूजा, रत्न-रुद्राक्ष चयन अथवा जन्म कुंडली के किसी भी विशेष प्रश्न पर प्रामाणिक शास्त्रीय परामर्श के लिए संपर्क करें।
            </div>
            <div style="margin-top: 7px; font-size: 8.8px; color: #FDE68A; line-height: 1.55;">
              <div><b>वेबसाइट:</b> ${G(T.websiteDisplay)} &nbsp;|&nbsp; <b>YouTube:</b> ${G(T.youtubeHandle)}</div>
              <div><b>फ़ोन / WhatsApp:</b> ${G(T.phoneDisplay)} &nbsp;|&nbsp; <b>स्थान:</b> ${G(T.locationHi)}</div>
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
  `}const P="'Noto Sans Devanagari', 'Nirmala UI', 'Mangal', 'Kohinoor Devanagari', system-ui, -apple-system, sans-serif";function ct(e){return String(e??"").replace(/\$([^$]+)\$/g,"$1").replace(/\\\(([^)]+)\\\)/g,"$1").replace(/\\\[([^\]]+)\\\]/g,"$1").replace(/\^?\{\\circ\}|\^\\circ|\\circ|\\degree|\\deg\b/g,"°").replace(/\^?\{\\prime\\prime\}|\\prime\\prime|\\second\b/g,'"').replace(/\^?\{\\prime\}|\\prime/g,"'").replace(/\\cdot/g,"·").replace(/\\times/g,"×").replace(/(\d{1,3})\s*°\s*(\d{1,2})\s*['′]\s*(\d{1,2})\s*["″]/g,`$1° $2' $3"`)}function i(e){return ct(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}const dt="display: inline-flex; align-items: center; justify-content: center; line-height: 1.15; padding-top: 4px; padding-bottom: 4px; vertical-align: middle; box-sizing: border-box; text-align: center;",nt="display: inline-block; line-height: 1.15;",Zt=T.websiteDisplay.replace(/\s+/g,"");function xt(e=t.saffronDeep){return`<span style="white-space: nowrap; display: inline-block; letter-spacing: 0; font-family: monospace; font-weight: 800; color: ${e};">${i(Zt)}</span>`}function te(e){return e.map(s=>({houseNumber:s.houseNumber,rashiNumber:s.rashiNumber,rashiName:s.rashiNameHi,bhavaTitle:`भाव ${s.houseNumber}`,planets:s.planets.map(n=>({shortHindi:n.shortHindi,chartLabel:`${n.shortHindi}${n.isRetrograde?"*":""}${n.isCombust?"^":""}`,degInt:n.degInt,hindiName:n.hindiName,degree:n.fullDMS,fullDegreeDMS:n.fullDMS,statusBadge:"madhyam"}))}))}function ee(e,s,n){const r={1:{rx:50,ry:41.5,px:50,py:25.5,maxPerLine:2},2:{rx:25.5,ry:19.5,px:25.5,py:9.8,maxPerLine:2},3:{rx:19.4,ry:25.5,px:10.6,py:25.5,maxPerLine:1,isSide:!0},4:{rx:41.5,ry:50,px:24.5,py:50,maxPerLine:2},5:{rx:19.4,ry:74.5,px:10.6,py:74.5,maxPerLine:1,isSide:!0},6:{rx:25.5,ry:80.5,px:25.5,py:90.2,maxPerLine:2},7:{rx:50,ry:58.5,px:50,py:74.5,maxPerLine:2},8:{rx:74.5,ry:80.5,px:74.5,py:90.2,maxPerLine:2},9:{rx:80.6,ry:74.5,px:89.4,py:74.5,maxPerLine:1,isSide:!0},10:{rx:58.5,ry:50,px:75.5,py:50,maxPerLine:2},11:{rx:80.6,ry:25.5,px:89.4,py:25.5,maxPerLine:1,isSide:!0},12:{rx:74.5,ry:19.5,px:74.5,py:9.8,maxPerLine:2}},c=e.map(g=>{const a=r[g.houseNumber];if(!a)return"";const l=g.planets||[],p=l.length>=3,d=a.isSide?l.length>=4?2:1:p?3:a.maxPerLine,y=l.map(v=>a.isSide||p?v.shortHindi||v.chartLabel:`${v.chartLabel||v.shortHindi}${String(v.degInt).padStart(2,"0")}`),b=[];for(let v=0;v<y.length;v+=d)b.push(y.slice(v,v+d).join(" "));const m=a.isSide?b.length>=3?3.2:3.7:b.length>=3?3.5:4,$=a.isSide?b.length>=3?2.8:3.2:p?3.1:3.5,F=b.map((v,D)=>{const k=(D-(b.length-1)/2)*m;return`<text x="${a.px}" y="${(a.py+k).toFixed(2)}" dy="-0.06em" text-anchor="middle" dominant-baseline="central" fill="${t.cosmicNavy}" font-size="${$}" font-weight="800" font-family="${P}">${i(v)}</text>`}).join(""),w=g.houseNumber===1?`<text x="50" y="13.5" dy="-0.06em" text-anchor="middle" dominant-baseline="central" fill="${t.saffronDeep}" font-size="3.2" font-weight="800" font-family="${P}">${typeof n=="number"?`लग्न ${String(n).padStart(2,"0")}°`:"लग्न"}</text>`:"";return`
        <text x="${a.rx}" y="${a.ry}" text-anchor="middle" dominant-baseline="central" fill="${t.saffron}" font-size="3.7" font-weight="800" font-family="monospace">${g.rashiNumber}</text>
        ${w}
        ${F}
      `}).join("");return`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="${s}" height="${s}" style="width:${s}px;height:${s}px;display:block;margin:0 auto;">
      <rect x="1.5" y="1.5" width="97" height="97" rx="2.5" fill="${t.warmIvory}" stroke="${t.templeGold}" stroke-width="1.4" />
      <rect x="3.2" y="3.2" width="93.6" height="93.6" rx="1.2" fill="none" stroke="${t.saffron}" stroke-opacity="0.38" stroke-width="0.45" />
      <line x1="1.5" y1="1.5" x2="98.5" y2="98.5" stroke="${t.templeGoldDark}" stroke-width="0.8" />
      <line x1="98.5" y1="1.5" x2="1.5" y2="98.5" stroke="${t.templeGoldDark}" stroke-width="0.8" />
      <polygon points="50,1.5 98.5,50 50,98.5 1.5,50" fill="none" stroke="${t.templeGoldDark}" stroke-width="0.9" />
      <text x="50" y="50.4" dy="-0.06em" text-anchor="middle" dominant-baseline="central" fill="${t.templeGold}" fill-opacity="0.22" font-size="7" font-weight="800">ॐ</text>
      ${c}
    </svg>
  `}function ie(e,s,n,r){const c={};e.forEach(d=>{c[d.rashiNumber]=d});const g=[{rashi:12,label:"12 मीन",col:0,row:0},{rashi:1,label:"1 मेष",col:1,row:0},{rashi:2,label:"2 वृष",col:2,row:0},{rashi:3,label:"3 मि",col:3,row:0},{rashi:4,label:"4 कर्क",col:3,row:1},{rashi:5,label:"5 सिंह",col:3,row:2},{rashi:6,label:"6 कन्या",col:3,row:3},{rashi:7,label:"7 तुला",col:2,row:3},{rashi:8,label:"8 वृश्चि",col:1,row:3},{rashi:9,label:"9 धनु",col:0,row:3},{rashi:10,label:"10 मकर",col:0,row:2},{rashi:11,label:"11 कुंभ",col:0,row:1}],a=24,l=2,p=g.map(d=>{const y=l+d.col*a,b=l+d.row*a,m=c[d.rashi],$=m?.houseNumber===1,w=(m?.planets||[]).map(k=>k.shortHindi||k.chartLabel),v=[];for(let k=0;k<w.length;k+=2)v.push(w.slice(k,k+2).join(" "));const D=v.map((k,z)=>{const H=b+12+(z-(v.length-1)/2)*3.6;return`<text x="${y+a/2}" y="${H.toFixed(1)}" dy="-0.06em" text-anchor="middle" dominant-baseline="central" fill="${t.cosmicNavy}" font-size="3.2" font-weight="800" font-family="${P}">${i(k)}</text>`}).join("");return`
        <rect x="${y}" y="${b}" width="${a}" height="${a}" fill="${$?"#FFF3E0":t.warmIvory}" stroke="${t.templeGoldDark}" stroke-width="0.68" />
        <text x="${y+1.6}" y="${b+3.4}" dy="-0.06em" dominant-baseline="central" fill="${t.saffronDeep}" font-size="2.6" font-weight="700" font-family="${P}">${i(d.label)}</text>
        ${$?`<text x="${y+a-1.5}" y="${b+3.4}" dy="-0.06em" text-anchor="end" dominant-baseline="central" fill="${t.emerald}" font-size="2.5" font-weight="800" font-family="${P}">${typeof r=="number"?`लग्न ${r}°`:"लग्न"}</text>`:""}
        ${D}
        <text x="${y+a-1.5}" y="${b+a-2.2}" dy="-0.04em" text-anchor="end" dominant-baseline="central" fill="${t.inkMuted}" font-size="2.35" font-family="monospace">भा.${m?.houseNumber||""}</text>
      `}).join("");return`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="${s}" height="${s}" style="width:${s}px;height:${s}px;display:block;margin:0 auto;">
      <rect x="1" y="1" width="98" height="98" rx="2" fill="${t.pureIvory}" stroke="${t.templeGold}" stroke-width="1.25" />
      <rect x="${l+a}" y="${l+a}" width="${a*2}" height="${a*2}" fill="${t.templeGoldSoft}" stroke="${t.templeGold}" stroke-width="0.7" />
      <text x="50" y="44.2" dy="-0.06em" text-anchor="middle" dominant-baseline="central" fill="${t.saffron}" font-size="8" font-weight="800">ॐ</text>
      <text x="50" y="54.0" dy="-0.06em" text-anchor="middle" dominant-baseline="central" fill="${t.cosmicNavy}" font-size="3.3" font-weight="800" font-family="${P}">${i(n)}</text>
      <text x="50" y="60.2" dy="-0.06em" text-anchor="middle" dominant-baseline="central" fill="${t.inkMuted}" font-size="2.5" font-family="${P}">दक्षिण भारतीय चक्र</text>
      ${p}
    </svg>
  `}function ae(e,s,n,r,c){return s==="south"?ie(e,n,r,c):ee(e,n,c)}function Ht(e,s,n,r,c,g){const a=Math.min(g,r/2,c/2);e.beginPath(),e.moveTo(s+a,n),e.lineTo(s+r-a,n),e.quadraticCurveTo(s+r,n,s+r,n+a),e.lineTo(s+r,n+c-a),e.quadraticCurveTo(s+r,n+c,s+r-a,n+c),e.lineTo(s+a,n+c),e.quadraticCurveTo(s,n+c,s,n+c-a),e.lineTo(s,n+a),e.quadraticCurveTo(s,n,s+a,n),e.closePath()}function Q(e,s,n,r){const c=e.textBaseline;e.textBaseline="alphabetic";const g=e.measureText(s),a=g.actualBoundingBoxAscent,l=g.actualBoundingBoxDescent;Number.isFinite(a)&&Number.isFinite(l)&&a>0?e.fillText(s,n,r+(a-l)/2):(e.textBaseline="middle",e.fillText(s,n,r)),e.textBaseline=c}function oe(e,s,n){if(typeof document>"u")return"";try{const c=Math.max(240,Math.round(s*3)),g=c,a=c/100,l=document.createElement("canvas");l.width=c,l.height=g;const p=l.getContext("2d");if(!p)return"";p.fillStyle=t.warmIvory,p.fillRect(0,0,c,g),Ht(p,1.5*a,1.5*a,97*a,97*a,2.5*a),p.fillStyle=t.warmIvory,p.fill(),p.lineWidth=1.4*a,p.strokeStyle=t.templeGold,p.stroke(),Ht(p,3.2*a,3.2*a,93.6*a,93.6*a,1.2*a),p.lineWidth=.45*a,p.strokeStyle="rgba(255, 111, 0, 0.38)",p.stroke(),p.beginPath(),p.moveTo(1.5*a,1.5*a),p.lineTo(98.5*a,98.5*a),p.moveTo(98.5*a,1.5*a),p.lineTo(1.5*a,98.5*a),p.lineWidth=.85*a,p.strokeStyle=t.templeGoldDark,p.stroke(),p.beginPath(),p.moveTo(50*a,1.5*a),p.lineTo(98.5*a,50*a),p.lineTo(50*a,98.5*a),p.lineTo(1.5*a,50*a),p.closePath(),p.lineWidth=.95*a,p.strokeStyle=t.templeGoldDark,p.stroke(),p.textAlign="center",p.fillStyle="rgba(212, 175, 55, 0.22)",p.font=`800 ${(7*a).toFixed(1)}px ${P}`,Q(p,"ॐ",50*a,50.2*a);const d={1:{rx:50,ry:41.5,px:50,py:25.5,maxPerLine:2},2:{rx:25.5,ry:19.5,px:25.5,py:9.8,maxPerLine:2},3:{rx:19.4,ry:25.5,px:10.6,py:25.5,maxPerLine:1,isSide:!0},4:{rx:41.5,ry:50,px:24.5,py:50,maxPerLine:2},5:{rx:19.4,ry:74.5,px:10.6,py:74.5,maxPerLine:1,isSide:!0},6:{rx:25.5,ry:80.5,px:25.5,py:90.2,maxPerLine:2},7:{rx:50,ry:58.5,px:50,py:74.5,maxPerLine:2},8:{rx:74.5,ry:80.5,px:74.5,py:90.2,maxPerLine:2},9:{rx:80.6,ry:74.5,px:89.4,py:74.5,maxPerLine:1,isSide:!0},10:{rx:58.5,ry:50,px:75.5,py:50,maxPerLine:2},11:{rx:80.6,ry:25.5,px:89.4,py:25.5,maxPerLine:1,isSide:!0},12:{rx:74.5,ry:19.5,px:74.5,py:9.8,maxPerLine:2}};for(const b of e){const m=d[b.houseNumber];if(!m)continue;if(p.fillStyle=t.saffron,p.font=`800 ${(3.7*a).toFixed(1)}px monospace`,Q(p,String(b.rashiNumber),m.rx*a,m.ry*a),b.houseNumber===1){p.fillStyle=t.saffronDeep,p.font=`800 ${(3.2*a).toFixed(1)}px ${P}`;const H=typeof n=="number"?`लग्न ${String(n).padStart(2,"0")}°`:"लग्न";Q(p,H,50*a,13.5*a)}const $=b.planets||[];if($.length===0)continue;const F=$.length>=3,w=m.isSide?$.length>=4?2:1:F?3:m.maxPerLine,v=$.map(H=>m.isSide||F?H.shortHindi||H.chartLabel:`${H.chartLabel||H.shortHindi}${String(H.degInt).padStart(2,"0")}`),D=[];for(let H=0;H<v.length;H+=w)D.push(v.slice(H,H+w).join(" "));const k=m.isSide?D.length>=3?3.2:3.7:D.length>=3?3.5:4,z=m.isSide?D.length>=3?2.8:3.2:F?3.1:3.5;p.fillStyle=t.cosmicNavy,p.font=`800 ${(z*a).toFixed(1)}px ${P}`,D.forEach((H,R)=>{const j=(R-(D.length-1)/2)*k;Q(p,ct(H),m.px*a,(m.py+j)*a)})}const y=l.toDataURL("image/png");return l.width=0,l.height=0,y.startsWith("data:image/png;base64,")?y:""}catch{return""}}function ne(e,s,n,r){if(typeof document>"u")return"";try{const g=Math.max(240,Math.round(s*3)),a=g,l=g/100,p=document.createElement("canvas");p.width=g,p.height=a;const d=p.getContext("2d");if(!d)return"";d.fillStyle=t.pureIvory,d.fillRect(0,0,g,a),Ht(d,1*l,1*l,98*l,98*l,2*l),d.fillStyle=t.pureIvory,d.fill(),d.lineWidth=1.25*l,d.strokeStyle=t.templeGold,d.stroke();const y=24,b=2;d.fillStyle=t.templeGoldSoft,d.fillRect((b+y)*l,(b+y)*l,y*2*l,y*2*l),d.lineWidth=.7*l,d.strokeStyle=t.templeGold,d.strokeRect((b+y)*l,(b+y)*l,y*2*l,y*2*l),d.textAlign="center",d.fillStyle=t.saffron,d.font=`800 ${(8*l).toFixed(1)}px ${P}`,Q(d,"ॐ",50*l,44.2*l),d.fillStyle=t.cosmicNavy,d.font=`800 ${(3.2*l).toFixed(1)}px ${P}`,Q(d,ct(n),50*l,54*l),d.fillStyle=t.inkMuted,d.font=`600 ${(2.5*l).toFixed(1)}px ${P}`,Q(d,"दक्षिण भारतीय चक्र",50*l,60.2*l);const m={};e.forEach(w=>{m[w.rashiNumber]=w});const $=[{rashi:12,label:"12 मीन",col:0,row:0},{rashi:1,label:"1 मेष",col:1,row:0},{rashi:2,label:"2 वृष",col:2,row:0},{rashi:3,label:"3 मि",col:3,row:0},{rashi:4,label:"4 कर्क",col:3,row:1},{rashi:5,label:"5 सिंह",col:3,row:2},{rashi:6,label:"6 कन्या",col:3,row:3},{rashi:7,label:"7 तुला",col:2,row:3},{rashi:8,label:"8 वृश्चि",col:1,row:3},{rashi:9,label:"9 धनु",col:0,row:3},{rashi:10,label:"10 मकर",col:0,row:2},{rashi:11,label:"11 कुंभ",col:0,row:1}];for(const w of $){const v=b+w.col*y,D=b+w.row*y,k=m[w.rashi],z=k?.houseNumber===1;d.fillStyle=z?"#FFF3E0":t.warmIvory,d.fillRect(v*l,D*l,y*l,y*l),d.lineWidth=.68*l,d.strokeStyle=t.templeGoldDark,d.strokeRect(v*l,D*l,y*l,y*l),d.textAlign="left",d.fillStyle=t.saffronDeep,d.font=`700 ${(2.6*l).toFixed(1)}px ${P}`,Q(d,w.label,(v+1.5)*l,(D+3.4)*l),z&&(d.textAlign="right",d.fillStyle=t.emerald,d.font=`800 ${(2.5*l).toFixed(1)}px ${P}`,Q(d,typeof r=="number"?`लग्न ${r}°`:"लग्न",(v+y-1.4)*l,(D+3.4)*l));const R=(k?.planets||[]).map(E=>E.shortHindi||E.chartLabel),j=[];for(let E=0;E<R.length;E+=2)j.push(R.slice(E,E+2).join(" "));d.textAlign="center",d.fillStyle=t.cosmicNavy,d.font=`800 ${(3.2*l).toFixed(1)}px ${P}`,j.forEach((E,U)=>{const Y=D+12+(U-(j.length-1)/2)*3.6;Q(d,ct(E),(v+y/2)*l,Y*l)}),d.textAlign="right",d.fillStyle=t.inkMuted,d.font=`600 ${(2.35*l).toFixed(1)}px monospace`,Q(d,`भा.${k?.houseNumber||""}`,(v+y-1.4)*l,(D+y-2.2)*l)}const F=p.toDataURL("image/png");return p.width=0,p.height=0,F.startsWith("data:image/png;base64,")?F:""}catch{return""}}function Dt(e,s,n,r,c,g){if(c&&typeof document<"u"){const a=s==="south"?ne(e,n,r,g):oe(e,n,g);if(a)return`<img src="${a}" alt="${i(r)}" width="${n}" height="${n}" style="width:${n}px;height:${n}px;display:block;margin:0 auto;" />`}return ae(e,s,n,r,g)}function A(e,s,n){return`
    <div style="display: table; width: 100%; box-sizing: border-box; padding-bottom: 7px; margin-bottom: 10px; border-bottom: 2px solid ${t.templeGold};">
      <div style="display: table-cell; vertical-align: middle; text-align: left; padding-right: 10px;">
        <div style="display: table;">
          <div style="display: table-cell; vertical-align: middle; padding-right: 9px;">
            ${at(28,n,1.8)}
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
        <span class="book-pill" style="${dt} background: ${t.cosmicNavy}; color: #FDE68A; border: 1.2px solid ${t.templeGold}; font-size: 8.1px; font-weight: 800; padding-left: 11px; padding-right: 11px; border-radius: 999px; white-space: nowrap;">
          <span style="${nt}">${i(e)}</span>
        </span>
      </div>
    </div>
  `}function N(e,s,n){const r=n&&n.includes("PANDIT JI ONLINE")?" letter-spacing: 0; word-spacing: 3px;":"";return`
    <div class="book-section-bar" style="display: table; width: 100%; box-sizing: border-box; background: linear-gradient(90deg, ${t.cosmicNavy} 0%, #1E293B 100%); border-left: 4.5px solid ${t.saffron}; border-bottom: 1.8px solid ${t.templeGold}; border-radius: 7px; padding: 5.5px 11px; margin: 8px 0 8px 0; overflow: visible;">
      <div style="display: table-cell; vertical-align: middle; text-align: left; color: ${t.warmIvory}; font-size: 10.6px; font-weight: 800; line-height: 1.28; padding-right: 8px;">
        <span style="display: block; line-height: 1.28;"><span style="color: ${t.templeGold}; margin-right: 5px;">${i(e)}.</span>${i(s)}</span>
      </div>
      ${n?`<div style="display: table-cell; vertical-align: middle; text-align: right; white-space: nowrap; width: 1%;"><span class="book-pill" style="${dt} background: rgba(212, 175, 55, 0.16); border: 1px solid rgba(212, 175, 55, 0.5); color: #FDE68A; font-size: 7.8px; font-weight: 700; padding-left: 9px; padding-right: 9px; border-radius: 999px; white-space: nowrap;${r}"><span style="${nt}${r}">${i(n)}</span></span></div>`:""}
    </div>
  `}function q(e){const s=Vt[e],n=s.keyPoints.map(r=>`<span style="display: block; margin-top: 2.5px;"><b style="color: ${t.saffronDeep};">• ${i(r.term.hi)}:</b> ${i(r.meaning.hi)}</span>`).join("");return`
    <div class="book-card" style="background: ${t.saffronSoft}; border: 1.2px solid ${t.templeGold}; border-radius: 8px; padding: 7.5px 10px; margin: 8px 0 6px 0; font-size: 8.3px; color: ${t.inkPrimary}; line-height: 1.48;">
      <div style="font-weight: 800; color: ${t.cosmicNavy}; font-size: 8.8px; margin-bottom: 2.5px;">
        ✦ इसे कैसे समझें? — ${i(s.triggerTitle.hi)}
      </div>
      <div>${i(s.whatItShows.hi)}</div>
      ${n}
      <div style="margin-top: 3.5px; color: ${t.emerald}; font-weight: 700;">
        ध्यान दें: ${i(s.practicalTip.hi)}
      </div>
    </div>
  `}function Nt(e,s,n){return`
    <div class="book-card" style="background: ${t.saffronSoft}; border: 1.2px solid ${t.templeGold}; border-radius: 8px; padding: 7.5px 10px; margin: 8px 0 6px 0; font-size: 8.3px; color: ${t.inkPrimary}; line-height: 1.48;">
      <div style="font-weight: 800; color: ${t.cosmicNavy}; font-size: 8.8px; margin-bottom: 2.5px;">
        ✦ इसे कैसे समझें? — ${i(e)}
      </div>
      <div>${i(s)}</div>
      <div style="margin-top: 3.5px; color: ${t.emerald}; font-weight: 700;">
        व्यावहारिक सुझाव: ${i(n)}
      </div>
    </div>
  `}function St(e,s,n){return`
    <div style="display: flex; align-items: center; gap: 6px; width: 100%;">
      <div style="flex: 1; height: 8px; background: #EFE3C6; border-radius: 999px; overflow: hidden; border: 0.8px solid #D9C495;">
        <div style="width: ${Math.max(4,Math.min(100,Math.round(e)))}%; height: 100%; background: ${s}; border-radius: 999px;"></div>
      </div>
      ${n?`<span style="font-size: 7.6px; font-weight: 800; font-family: monospace; color: ${t.cosmicNavy}; min-width: 34px; text-align: right;">${i(n)}</span>`:""}
    </div>
  `}const Et=[{id:"sun",hi:"सूर्य",short:"सू"},{id:"moon",hi:"चंद्र",short:"चं"},{id:"mars",hi:"मंगल",short:"मं"},{id:"mercury",hi:"बुध",short:"बु"},{id:"jupiter",hi:"गुरु",short:"गु"},{id:"venus",hi:"शुक्र",short:"शु"},{id:"saturn",hi:"शनि",short:"श"}],se={sun:["moon","mars","jupiter"],moon:["sun","mercury"],mars:["sun","moon","jupiter"],mercury:["sun","venus"],jupiter:["sun","moon","mars"],venus:["mercury","saturn"],saturn:["mercury","venus"]},le={sun:["venus","saturn"],moon:[],mars:["mercury"],mercury:["moon"],jupiter:["mercury","venus"],venus:["sun","moon"],saturn:["sun","moon","mars"]};function re(e){const s={},n={सूर्य:"sun",चंद्र:"moon",चन्द्र:"moon",मंगल:"mars",बुध:"mercury",गुरु:"jupiter",बृहस्पति:"jupiter",शुक्र:"venus",शनि:"saturn"};for(const r of e.planets){const c=Object.keys(n).find(g=>r.hindiName.includes(g));c&&(s[n[c]]=r.rashiNumber)}return Et.map(r=>{const c=Et.map(g=>{if(r.id===g.id)return{label:"स्वयं",color:t.inkMuted,bg:"#F1ECE0"};const a=se[r.id].includes(g.id)?1:le[r.id].includes(g.id)?-1:0,l=s[r.id]||1,d=((s[g.id]||1)-l+12)%12+1,y=[2,3,4,10,11,12].includes(d),b=a+(y?1:-1);return b>=2?{label:"अति मित्र",color:"#065F46",bg:"#D1FAE5"}:b===1?{label:"मित्र",color:"#047857",bg:"#ECFDF5"}:b===0?{label:"सम",color:"#92400E",bg:"#FEF3C7"}:b===-1?{label:"शत्रु",color:"#B45309",bg:"#FFEDD5"}:{label:"अति शत्रु",color:"#991B1B",bg:"#FEE2E2"}});return{grahaHi:r.hi,cells:c}})}function de(e){const s=e.phase1Astronomy?.spaceTime.year||parseInt((e.input.dob||"1995").slice(0,4),10)||1995,n=e.panchang.moonRashiNumber||1,c=e.planets.find(w=>w.hindiName.includes("शनि"))?.rashiNumber||1,g=(n+10)%12+1,a=n,l=n%12+1,p=w=>bt[w-1]?.nameHi||String(w),d=29.457/12,y=(g-c+12)%12;let b=Math.round(s+y*d);b-s>27&&(b-=29);const m=[],$=["प्रथम आवर्तन","द्वितीय आवर्तन","तृतीय आवर्तन"],F=[{name:"उदय चरण (प्रथम ढाई वर्ष)",rashi:g,guidance:"व्यय नियंत्रण, नई जिम्मेदारियाँ, यात्राएँ व आधार-निर्माण का समय।"},{name:"शिखर चरण (मध्य ढाई वर्ष)",rashi:a,guidance:"परिश्रम की परीक्षा, आत्म-अनुशासन, धैर्य व मानसिक दृढ़ता का काल।"},{name:"अस्त चरण (अंतिम ढाई वर्ष)",rashi:l,guidance:"धीरे-धीरे राहत, संचित परिश्रम का स्थायी फल व आर्थिक सुधार।"}];for(let w=0;w<3;w++){const v=Math.round(b+w*29.46);F.forEach((D,k)=>{const z=Math.round(v+k*d),H=Math.round(v+(k+1)*d);if(H<s)return;const R=Math.max(s,z),j=Math.max(0,R-s),E=Math.max(j+1,H-s);j>92||m.push({cycleLabel:$[w],phaseLabel:D.name,saturnRashi:`${p(D.rashi)} (${D.rashi})`,approxPeriod:`${R} – ${H}`,ageSpan:`${j}–${E} वर्ष`,guidanceHi:D.guidance})})}return m}const ce={सूर्य:"प्रशासनिक सम्मान, पिता-सहयोग, आत्मविश्वास व पदोन्नति के संकेत।",चंद्र:"मानसिक संतुलन, पारिवारिक सुख, जनसंपर्क एवं यात्रा लाभ।",मंगल:"साहस, भूमि-भवन कार्य, तकनीकी प्रगति व ऊर्जावान निर्णय।",राहु:"नवीन अवसर, तकनीकी/विदेश विस्तार व सतर्क विवेक की आवश्यकता।",गुरु:"ज्ञान-वृद्धि, शुभ मांगलिक कार्य, संतान सुख व आर्थिक स्थिरता।",शनि:"धैर्यपूर्वक कर्म, अनुशासन, दीर्घकालिक स्थायी निर्माण व न्याय।",बुध:"बौद्धिक विकास, व्यवसाय-संवाद, शिक्षा व लेखन-लाभ का काल।",केतु:"आध्यात्मिक साधना, शोध, एकांत चिंतन व गूढ़ ज्ञान की प्राप्ति।",शुक्र:"सुख-सुविधा, कला, वैवाहिक सौहार्द, वाहन एवं समृद्धि के योग।"},pe={सूर्य:"आत्मा, मान-सम्मान, पिता, नेतृत्व क्षमता और राजकीय कार्यों का कारक ग्रह।",चंद्र:"मन, माता, भावनात्मक स्थिरता, जल तत्व, जनसंपर्क और मानसिक सुख का कारक।",मंगल:"साहस, पराक्रम, भूमि-संपत्ति, तकनीकी दक्षता और भ्रातृ-सुख का कारक ग्रह।",बुध:"बुद्धि, वाणी, व्यापार, गणित, संवाद कौशल और तार्किक निर्णय शक्ति का कारक।",गुरु:"ज्ञान, धर्म, संतान, भाग्य, धन-वृद्धि और गुरु-कृपा का परम शुभ कारक ग्रह।",शुक्र:"वैवाहिक सुख, कला, सौंदर्य, वाहन, ऐश्वर्य और रचनात्मक समृद्धि का कारक।",शनि:"कर्म, अनुशासन, आयु, न्याय, सेवा भाव और दीर्घकालिक स्थायी सफलता का कारक।",राहु:"नवीन सोच, आधुनिक तकनीक, विदेश यात्रा, शोध और तीव्र महत्वाकांक्षा का कारक।",केतु:"मोक्ष, वैराग्य, सूक्ष्म अंतर्ज्ञान, आध्यात्मिक उन्नति और मंत्र-साधना का कारक।"},he=[{graha:"सूर्य",mantra:"ॐ ह्रां ह्रीं ह्रौं सः सूर्याय नमः",daan:"गेहूँ, गुड़, ताम्र पात्र, लाल वस्त्र",day:"रविवार"},{graha:"चंद्र",mantra:"ॐ श्रां श्रीं श्रौं सः चन्द्रमसे नमः",daan:"चावल, दूध, मिश्री, श्वेत वस्त्र",day:"सोमवार"},{graha:"मंगल",mantra:"ॐ क्रां क्रीं क्रौं सः भौमाय नमः",daan:"मसूर दाल, गुड़, लाल फल",day:"मंगलवार"},{graha:"बुध",mantra:"ॐ ब्रां ब्रीं ब्रौं सः बुधाय नमः",daan:"हरी मूंग, पालक, हरा वस्त्र, पुस्तकें",day:"बुधवार"},{graha:"गुरु",mantra:"ॐ ग्रां ग्रीं ग्रौं सः गुरवे नमः",daan:"चना दाल, हल्दी, पीला वस्त्र, धार्मिक ग्रंथ",day:"गुरुवार"},{graha:"शुक्र",mantra:"ॐ द्रां द्रीं द्रौं सः शुक्राय नमः",daan:"दही, घी, खीर, श्वेत मिष्ठान्न",day:"शुक्रवार"},{graha:"शनि",mantra:"ॐ प्रां प्रीं प्रौं सः शनैश्चराय नमः",daan:"काले तिल, सरसों तेल, काली उड़द, कंबल",day:"शनिवार"},{graha:"राहु",mantra:"ॐ भ्रां भ्रीं भ्रौं सः राहवे नमः",daan:"सतनाजा, कंबल, पक्षियों को दाना",day:"बुधवार / शनिवार"},{graha:"केतु",mantra:"ॐ स्त्रां स्त्रीं स्त्रौं सः केतवे नमः",daan:"तिल, ऊनी वस्त्र, श्वान को भोजन",day:"मंगलवार / शनिवार"}];function At(e){return ct(e).replace(/ॐ\s*स्रां\s*स्रीं\s*स्रौं\s*सः\s*केतवे\s*नमः/g,"ॐ स्त्रां स्त्रीं स्त्रौं सः केतवे नमः").replace(/ॐ\s*श्रां\s*श्रीं\s*श्रौं\s*सः\s*चंद्रमसे\s*नमः/g,"ॐ श्रां श्रीं श्रौं सः चन्द्रमसे नमः")}function Tt(e,s,n,r=!1){const{cleanMode:c,chartStyle:g}=n,a=s.appLogoDataUrl,l=`${e.input.name} • जन्म: ${e.input.formattedDob}, ${e.input.formattedTime} • ${e.input.birthPlace}`,p=e.mahadashas.find(o=>o.isCurrent)||e.mahadashas[0],d=e.phase1Astronomy,y=e.shadbalaBhava,b=e.phase2Jyotish,m=[],$=Dt(e.lagnaChart,g,258,`लग्न (${e.panchang.lagnaName})`,r,e.panchang.lagnaDegInt),F=`
    <div style="width: 100%; height: 100%; box-sizing: border-box; display: flex; flex-direction: column; justify-content: space-between; background: ${t.warmIvory}; border: 3.5px solid ${t.templeGold}; border-radius: 14px; padding: 14px 16px; position: relative; box-shadow: inset 0 0 0 2px #FFFDF8, inset 0 0 0 3.5px rgba(255, 111, 0, 0.35);">
      <!-- Top Cosmic Deep Navy Royal Masthead with Centered Real App Logo -->
      <div style="background: linear-gradient(135deg, ${t.cosmicNavy} 0%, #162440 68%, #2C1608 100%); border: 2px solid ${t.templeGold}; border-radius: 12px; padding: 11px 16px 13px 16px; text-align: center; color: ${t.warmIvory};">
        <div style="display: block; font-size: 10px; font-weight: 800; color: ${t.templeGold}; letter-spacing: 0; line-height: 1.25; padding-top: 2px; padding-bottom: 4px;">
          ॥ श्री गणेशाय नमः ॥ &nbsp;•&nbsp; ॥ सर्वे भवन्तु सुखिनः ॥
        </div>
        <div style="display: table; margin: 7px auto 0 auto;">
          <div style="display: table-cell; vertical-align: middle; padding-right: 14px;">
            ${at(58,a,2.8)}
          </div>
          <div style="display: table-cell; vertical-align: middle; text-align: left;">
            <div style="display: block; font-size: 20px; font-weight: 900; color: #FDE68A; letter-spacing: 0; line-height: 1.3; padding-bottom: 2px;">पण्डित जी ऑनलाइन</div>
            <div style="display: block; font-size: 9.2px; font-weight: 800; color: #F8FAFC; letter-spacing: 0; word-spacing: 2px; margin-top: 7px; line-height: 1.35;"><span style="display: inline-block; margin-right: 4px;">PANDIT</span><span style="display: inline-block; margin-right: 4px;">JI</span><span style="display: inline-block; margin-right: 5px;">ONLINE</span>— प्रामाणिक वैदिक ज्योतिष महा-ग्रंथ</div>
          </div>
        </div>
        <div style="margin-top: 10px; text-align: center;">
          <span class="book-pill" style="display: inline-flex; align-items: center; justify-content: center; line-height: 1.15; padding: 4px 16px; vertical-align: middle; box-sizing: border-box; text-align: center; background: rgba(255, 111, 0, 0.24); border: 1.2px solid ${t.templeGold}; color: #FDE68A; font-size: 8.8px; font-weight: 800; border-radius: 999px;">
            <span style="${nt}">सम्पूर्ण बृहत् जन्म कुंडली पुस्तक • दृक् गणित लाहिड़ी अयनांश</span>
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
        ${$}
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
          <div style="display: block; font-size: 11px; font-weight: 800; margin-top: 3px; line-height: 1.28;">${i(p?.planet||"-")}</div>
          <div style="display: block; font-size: 7.6px; color: #6EE7B7; margin-top: 3px; line-height: 1.28;">${i(p?.startYear)}–${i(p?.endYear)}</div>
        </div>
      </div>

      <!-- Cover Bottom Brand Strip + Real QR Code (Zero Overlap) -->
      <div style="background: ${t.templeGoldSoft}; border: 1.6px solid ${t.templeGold}; border-radius: 10px; padding: 9px 13px; display: flex; align-items: center; justify-content: space-between; gap: 12px;">
        <div style="flex: 1; font-size: 8.8px; color: ${t.inkPrimary}; line-height: 1.5;">
          <div style="font-weight: 900; color: ${t.cosmicNavy}; font-size: 10.5px;">
            मार्गदर्शक: ${i(T.founderHi)} (वैदिक ज्योतिषाचार्य एवं कर्मकाण्ड विशेषज्ञ)
          </div>
          <div>${i(T.locationHi)}</div>
          <div>सम्पर्क / WhatsApp: <b>${i(T.phoneDisplay)}</b> &nbsp;|&nbsp; वेबसाइट: ${xt(t.saffronDeep)}</div>
        </div>
        ${s.websiteQrDataUrl?`<div style="background:#FFFFFF; border: 1.6px solid ${t.templeGold}; border-radius: 8px; padding: 4px; text-align:center; flex-shrink:0;">
                 <img src="${s.websiteQrDataUrl}" alt="Pandit Ji Online QR" style="width: 60px; height: 60px; display:block;" />
                 <div style="font-size: 6.8px; font-weight: 800; color: ${t.cosmicNavy}; margin-top: 2px;">स्कैन करें</div>
               </div>`:""}
      </div>
    </div>
  `;m.push({sectionCode:"COVER",sectionTag:"मुख्य आवरण (Cover)",isCover:!0,html:F});const w=[["जन्म वार (सूर्योदयात्)",`${e.panchang.vaar} (स्वामी: ${e.panchang.vaarLord})`,"जन्म लग्न",`${e.panchang.lagnaName} (${e.panchang.lagnaDegreeDMS})`],["तिथि एवं पक्ष",`${e.panchang.tithi} • ${e.panchang.paksha}`,"लग्नेश (Lagna Lord)",e.panchang.lagnaLord],["जन्म नक्षत्र एवं चरण",`${e.panchang.nakshatraName} (चरण ${e.panchang.nakshatraPada})`,"चंद्र राशि एवं स्वामी",`${e.panchang.moonRashiName} (${e.panchang.moonRashiLord})`],["नक्षत्र स्वामी",e.panchang.nakshatraLord,"सूर्य राशि एवं स्वामी",`${e.panchang.sunRashiName} (${e.panchang.sunRashiLord})`],["योग एवं करण",`${e.panchang.yoga} योग • ${e.panchang.karana} करण`,"प्रचलित नाम राशि",e.panchang.naamRashi],["स्थानीय सूर्योदय / सूर्यास्त",d?`${d.birthPanchang.sunriseHi} / ${d.birthPanchang.sunsetHi}`:"स्थानीय सूर्योदय आधारित","टाइमज़ोन / UTC",`${e.input.timeZone||"Asia/Kolkata"} (${e.input.utcOffsetFormatted||"UTC+05:30"})`],["गण एवं नाड़ी",`${e.panchang.gana} गण • ${e.panchang.nadi} नाड़ी`,"योनि एवं वर्ण",`${e.panchang.yoni} • ${e.panchang.varna}`],["वश्य एवं तत्व",`${e.panchang.vashya} • ${e.panchang.tatva}`,"पाया (Paya)",e.panchang.paya],["इष्टदेव",e.lucky.ishtaDevta,"शुभ अंक व वार",`${e.lucky.luckyNumbers} • ${e.lucky.luckyDays}`],["शुभ रंग एवं दिशा",`${e.lucky.luckyColors} • ${e.lucky.luckyDirection}`,"अयनांश (लाहिड़ी)",`${e.input.ayanamsaDMS} • True Node`]],v=e.input.warningsHi&&e.input.warningsHi.length>0?`<div class="book-card" style="margin-top: 10px; background: #FEF2F2; border: 1.5px solid #F59E0B; border-radius: 8px; padding: 9px 12px; font-size: 8.6px; color: #7C2D12; line-height: 1.55;">
           <b style="color:#B45309;">⚠ जन्म-समय / टाइमज़ोन / संधि सूचना:</b>
           ${e.input.warningsHi.map(o=>`<div style="margin-top:3px;">• ${i(o)}</div>`).join("")}
         </div>`:`<div class="book-card" style="margin-top: 10px; background: ${t.emeraldSoft}; border: 1.2px solid #10B981; border-radius: 8px; padding: 9px 12px; font-size: 8.6px; color: #065F46; line-height: 1.55;">
           <b>✓ सटीक खगोलीय सत्यापन:</b> यह जन्मपत्री ऐतिहासिक IANA टाइमज़ोन (${i(e.input.timeZone||"Asia/Kolkata")}), दृक् गणित लाहिड़ी चित्रा पक्ष अयनांश (${i(e.input.ayanamsaDMS)}) तथा True Node मानक पर आधारित है।
         </div>`,D=`
    ${A("खण्ड A1 : जन्म पंचांग एवं अवकहड़ा चक्र",l,a)}
    ${N("A1","जन्म पंचांग, खगोलीय विवरण एवं अवकहड़ा चक्र (Birth Panchang & Avakahada)","दृक् गणित सिंक्रनाइज़्ड")}
    <table class="book-table" style="font-size: 8.8px; width: 100%; box-sizing: border-box; table-layout: fixed;">
      <thead>
        <tr>
          <th style="width: 22%; padding: 5.5px 9px;">पंचांग अंग</th>
          <th style="width: 28%; padding: 5.5px 9px;">विवरण</th>
          <th style="width: 22%; padding: 5.5px 9px;">अवकहड़ा अंग</th>
          <th style="width: 28%; padding: 5.5px 9px;">विवरण</th>
        </tr>
      </thead>
      <tbody>
        ${w.map((o,h)=>`
            <tr style="background:${h%2===0?"#FFFDF8":"#FEF6E4"};">
              <td style="font-weight:800; color:${t.saffronDeep}; padding: 7px 9px;">${i(o[0])}</td>
              <td style="font-weight:700; padding: 7px 9px;">${i(o[1])}</td>
              <td style="font-weight:800; color:${t.saffronDeep}; padding: 7px 9px;">${i(o[2])}</td>
              <td style="font-weight:700; padding: 7px 9px;">${i(o[3])}</td>
            </tr>`).join("")}
      </tbody>
    </table>
    ${v}
    ${Nt("जन्म पंचांग और अवकहड़ा चक्र का महत्व","वैदिक ज्योतिष में जन्म तिथि, वार, नक्षत्र, योग और करण व्यक्ति के मूल स्वभाव तथा जीवन की लय दर्शाते हैं। सूर्योदय से पूर्व जन्म होने पर वैदिक वार पूर्व दिवस का माना जाता है। अवकहड़ा चक्र (गण, नाड़ी, योनि, वर्ण, वश्य, पाया) विवाह गुण मिलान और नामाक्षर चयन का आधार होता है।","विवाह मिलान एवं दशा गणना में जन्म के समय चंद्रमा की राशि (जन्म राशि) और नक्षत्र चरण को सदैव प्रधान माना जाता है।")}
  `;m.push({sectionCode:"A",sectionTag:"खण्ड A : जन्म पंचांग व अवकहड़ा",html:D});const k=g==="south"?vt.south.summary.hi:vt.north.summary.hi,z=`
    ${A("खण्ड A2 : सरल कुंडली मार्गदर्शिका (1–12 राशि बनाम भाव)",l,a)}
    ${N("A2","कुंडली कैसे पढ़ें? — 1–12 राशि बनाम भाव एवं ग्रह संकेत कुंजी","सामान्य जन के लिए सरल गाइड")}
    <div class="book-card" style="background: ${t.pureIvory}; border: 1.5px solid ${t.templeGold}; border-radius: 10px; padding: 12px 14px; font-size: 9px; line-height: 1.58; color: ${t.inkPrimary};">
      <div style="font-weight: 900; color: ${t.cosmicNavy}; font-size: 10.5px; margin-bottom: 4px;">
        1) ${i(vt.heading.hi)}
      </div>
      <div>${i(k)}</div>

      <div style="margin-top: 12px; font-weight: 800; color: ${t.saffronDeep}; font-size: 9.5px;">
        2) 1 से 12 राशि अंक सूची एवं उनके स्वामी ग्रह (12 Rashis & Lords):
      </div>
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 7px; margin-top: 6px;">
        ${bt.map(o=>`<div style="background:${t.warmIvory}; border:1px solid ${t.borderMuted}; border-radius:6px; padding:6px 9px; font-size:8.6px;">
               <b style="color:${t.saffronDeep};">${o.number}. ${i(o.nameHi)}</b>
               <span style="color:${t.inkMuted};"> (${i(o.nameEn)})</span>
               <div style="font-size:8px; color:${t.cosmicNavy}; margin-top:1px;">स्वामी: <b>${i(o.lordHi)}</b></div>
             </div>`).join("")}
      </div>

      <div style="margin-top: 12px; font-weight: 800; color: ${t.saffronDeep}; font-size: 9.5px;">
        3) चार्ट में प्रयुक्त ग्रह संक्षिप्ताक्षर एवं विशेष चिह्न (Planet Legend):
      </div>
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 7px; margin-top: 6px;">
        ${Qt.map(o=>`<div style="background:${t.warmIvory}; border:1px solid ${t.borderMuted}; border-radius:6px; padding:6px 9px; font-size:8.6px; line-height:1.45;">
               <b style="color:${t.cosmicNavy};">${i(o.shortHi)} / ${i(o.shortEn)}</b> = ${i(o.fullHi)} (${i(o.fullEn)})
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
  `;m.push({sectionCode:"A2",sectionTag:"खण्ड A : सरल कुंडली गाइड",html:z});const H=(o,h,S,x,f)=>`
    <div class="book-chart-box" style="background: ${t.pureIvory}; border: 1.6px solid ${t.templeGold}; border-radius: 11px; padding: 10px 12px; text-align: center;">
      <div style="font-size: 10.6px; font-weight: 900; color: ${t.cosmicNavy}; margin-bottom: 7px; line-height: 1.3;">${i(o)}</div>
      ${Dt(h,g,x,o,r,f)}
      <div style="margin-top: 8px; padding-top: 7px; border-top: 1px dashed ${t.borderMuted}; font-size: 8.4px; color: ${t.inkPrimary}; line-height: 1.48; text-align: left;">
        ${i(S)}
      </div>
    </div>
  `,R=`
    ${A("खण्ड B1 : जन्म लग्न (D-1) एवं नवांश कुंडली (D-9)",l,a)}
    ${N("B1","प्रमुख आधार चक्र — जन्म लग्न कुंडली (D-1) एवं नवांश कुंडली (D-9)",g==="south"?"दक्षिण भारतीय प्रारूप":"उत्तर भारतीय प्रारूप")}
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-top: 8px;">
      ${H(`जन्म लग्न कुंडली (D-1) — ${e.panchang.lagnaName}`,e.lagnaChart,lt.lagna_d1.shortPurpose.hi,290,e.panchang.lagnaDegInt)}
      ${H(`नवांश कुंडली (D-9) — ${d?.shodashavarga.find(o=>o.spec.id==="D9")?.ascendantRashiNameHi||e.navamsaChart[0]?.rashiName||""}`,e.navamsaChart,lt.navamsha_d9.shortPurpose.hi,290)}
    </div>
    <div style="display: block; margin-top: 12px; padding: 4px 12px 8px 12px; background: ${t.templeGoldSoft}; border: 1.2px solid ${t.templeGold}; border-radius: 8px; font-size: 8.4px; color: ${t.cosmicNavy}; text-align: center; font-weight: 700; line-height: 1.25;">
      ग्रह कुंजी: सू=सूर्य • चं=चंद्र • मं=मंगल • बु=बुध • गु=गुरु • शु=शुक्र • श=शनि • रा=राहु • के=केतु &nbsp;|&nbsp; * वक्री &nbsp;|&nbsp; ^ अस्त &nbsp;|&nbsp; 1–12 अंक = राशि संख्या
    </div>
    ${Nt("लग्न (D-1) और नवांश (D-9) साथ क्यों देखे जाते हैं?","जन्म लग्न कुंडली (D-1) जीवन रूपी वृक्ष का तना और मूल संरचना है, जबकि नवांश कुंडली (D-9) उस वृक्ष का फल है। यदि कोई ग्रह D-1 में सामान्य दिखे परंतु D-9 में स्वराशि, उच्च या मित्र राशि (अथवा वर्गोत्तम — दोनों में एक ही राशि) में हो, तो वह जीवन के मध्य व उत्तरार्ध में अत्यंत शुभ फल देता है।","वैवाहिक जीवन, जीवनसाथी के स्वभाव और ग्रहों के वास्तविक आंतरिक बल के लिए नवांश कुंडली (D-9) का विश्लेषण अनिवार्य माना गया है।")}
  `;m.push({sectionCode:"B",sectionTag:"खण्ड B : लग्न व नवांश (D-1, D-9)",html:R});const j=`
    ${A("खण्ड B2 : चंद्र, सूर्य एवं श्रीपति भाव चलित कुंडली",l,a)}
    ${N("B2","सुदर्शन एवं भाव चलित चक्र — चंद्र, सूर्य व वास्तविक MC आधारित श्रीपति चलित","संपूर्ण त्रि-दृष्टि विश्लेषण")}
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 6px;">
      ${H(`चंद्र कुंडली (Chandra) — ${e.panchang.moonRashiName}`,e.chandraChart,lt.chandra.shortPurpose.hi,228)}
      ${H(`सूर्य कुंडली (Surya) — ${e.panchang.sunRashiName}`,e.suryaChart||e.lagnaChart,lt.surya.shortPurpose.hi,228)}
    </div>
    <div style="margin-top: 10px; display: grid; grid-template-columns: 1fr 1.15fr; gap: 12px; align-items: stretch;">
      ${H("श्रीपति भाव चलित कुंडली (Sripati Bhava Chalit)",e.bhavaChalitChart||e.lagnaChart,lt.bhava_chalit.shortPurpose.hi,210,e.panchang.lagnaDegInt)}
      <div class="book-card" style="background: ${t.pureIvory}; border: 1.4px solid ${t.templeGold}; border-radius: 10px; padding: 11px 13px; font-size: 8.6px; line-height: 1.55; color: ${t.inkPrimary}; display: flex; flex-direction: column; justify-content: center;">
        <div style="font-size: 10px; font-weight: 900; color: ${t.cosmicNavy}; border-bottom: 1px solid ${t.borderMuted}; padding-bottom: 5px; margin-bottom: 7px;">
          ✦ इसे कैसे समझें? — तीन चार्ट का समन्वय
        </div>
        <div><b style="color:${t.saffronDeep};">• चंद्र कुंडली:</b> मन, भावना, दैनिक गोचर (राशिफल) और साढ़ेसाती का आधार चंद्र कुंडली है।</div>
        <div style="margin-top:5px;"><b style="color:${t.saffronDeep};">• सूर्य कुंडली:</b> आत्मबल, करियर प्रतिष्ठा, प्रशासनिक योग और पिता के साथ संबंध सूर्य कुंडली से देखे जाते हैं।</div>
        <div style="margin-top:5px;"><b style="color:${t.saffronDeep};">• श्रीपति भाव चलित:</b> वास्तविक Midheaven (MC) से गणना करने पर कुछ ग्रह लग्न चार्ट के बजाय अगले या पिछले भाव का फल दे सकते हैं — यही सूक्ष्म अंतर चलित कुंडली दर्शाती है।</div>
      </div>
    </div>
    ${rt("after_charts_b",s,c)}
  `;m.push({sectionCode:"B2",sectionTag:"खण्ड B : चंद्र, सूर्य व चलित",html:j});const E=`
    ${A("खण्ड C1 : नवग्रह स्पष्ट तालिका (9 Planets Longitude)",l,a)}
    ${N("C1","नवग्रह स्पष्ट तालिका — राशि, अंश-कला-विकला, नक्षत्र-पद, अवस्था एवं चलित भाव","लाहिड़ी अयनांश + True Node")}
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
        ${e.planets.map((o,h)=>{const x=d?.planets[h]?.bhavaChalitHouse??o.houseInLagna;return`
            <tr style="background:${h%2===0?"#FFFDF8":"#FEF6E4"};">
              <td style="font-weight:800; color:${t.cosmicNavy}; padding: 7px 6px;">${i(o.hindiName)} (${i(o.shortHindi)})</td>
              <td style="font-weight:700; padding: 7px 6px;">${i(o.rashiName)}</td>
              <td style="text-align:center; font-weight:800; color:${t.saffronDeep};">${o.houseInLagna}</td>
              <td style="text-align:center; font-weight:800; color:${x!==o.houseInLagna?t.crimson:t.emerald};">${x}</td>
              <td style="font-family:monospace; font-weight:700;">${i(o.fullDegreeDMS)}</td>
              <td>${i(o.nakshatra)} (चरण ${o.pada})</td>
              <td style="font-weight:700; color:${o.statusBadge==="shubh"?t.emerald:o.statusBadge==="upay"?t.crimson:t.saffronDeep};">${i(o.dignity)}</td>
              <td>${o.isRetrograde?"वक्री (*) ":""}${o.isCombust?"अस्त (^) ":""}${!o.isRetrograde&&!o.isCombust?"मार्गी":""}</td>
            </tr>`}).join("")}
      </tbody>
    </table>
    ${q("navagraha")}
    <div class="book-card" style="margin-top: 8px; background: ${t.pureIvory}; border: 1.2px solid ${t.templeGold}; border-radius: 8px; padding: 9px 12px; font-size: 8.5px; line-height: 1.52;">
      <b style="color:${t.cosmicNavy};">ग्रह अवस्था संक्षेप:</b>
      0°–6° बाल/मृत (राशि अनुसार), 12°–18° युवा अवस्था (पूर्ण फलदायी), 29°–30° राशि संधि। यदि लग्न भाव और चलित भाव भिन्न हों (लाल रंग), तो ग्रह का भाव-फल चलित भाव के अनुसार भी विचारणीय होता है।
    </div>
  `;m.push({sectionCode:"C1",sectionTag:"खण्ड C : नवग्रह स्पष्ट तालिका",html:E});const U=Ot(e),Y=re(e),O=`
    ${A("खण्ड C2 : श्रीपति भाव संधि एवं पंचधा मैत्री चक्र",l,a)}
    ${N("C2","श्रीपति द्वादश भाव स्फुट एवं संधि (True MC-Based 12 Bhava Cusps)","आरंभ • मध्य • अंत")}
    <table class="book-table" style="font-size: 8px;">
      <thead>
        <tr>
          <th style="width: 24%;">भाव</th>
          <th style="width: 22%;">राशि (स्वामी)</th>
          <th style="width: 18%;">भाव मध्य (Cusp)</th>
          <th style="width: 36%;">भाव संधि विस्तार (आरंभ – अंत)</th>
        </tr>
      </thead>
      <tbody>
        ${U.map((o,h)=>`
            <tr style="background:${h%2===0?"#FFFDF8":"#FEF6E4"};">
              <td style="font-weight:800; color:${t.cosmicNavy};">${i(o.bhavaName)}</td>
              <td>${i(o.rashiName)} (${i(o.rashiLord)})</td>
              <td style="font-family:monospace; font-weight:700; color:${t.emerald};">${i(o.madhyaDMS)}</td>
              <td style="font-family:monospace;">${i(o.sandhiStartDMS)} – ${i(o.sandhiEndDMS)}</td>
            </tr>`).join("")}
      </tbody>
    </table>

    ${N("C2b","ग्रह पंचधा मैत्री चक्र (नैसर्गिक + तात्कालिक मैत्री तालिका)","अति मित्र से अति शत्रु")}
    <table class="book-table" style="font-size: 7.9px; text-align:center;">
      <thead>
        <tr>
          <th style="width: 13%; text-align:left;">ग्रह</th>
          ${Et.map(o=>`<th style="width: 12.4%; text-align:center;">${i(o.hi)}</th>`).join("")}
        </tr>
      </thead>
      <tbody>
        ${Y.map(o=>`
            <tr>
              <td style="text-align:left; font-weight:800; color:${t.cosmicNavy}; background:#FEF6E4;">${i(o.grahaHi)}</td>
              ${o.cells.map(h=>`<td style="font-weight:800; color:${h.color}; background:${h.bg};">${i(h.label)}</td>`).join("")}
            </tr>`).join("")}
      </tbody>
    </table>
    ${q("bhava_sphut")}
  `;m.push({sectionCode:"C2",sectionTag:"खण्ड C : भाव संधि व मैत्री चक्र",html:O});const W=d?.shodashavarga||[];if(W.length>0){const o=["sun","moon","mars","mercury","jupiter","venus","saturn","rahu","ketu"],h={sun:"सूर्य",moon:"चंद्र",mars:"मंगल",mercury:"बुध",jupiter:"गुरु",venus:"शुक्र",saturn:"शनि",rahu:"राहु",ketu:"केतु"},S=u=>bt[(u||1)-1]?.nameHi.slice(0,3)||String(u),x=`
      ${A("खण्ड C3 : सम्पूर्ण 16 षोडशवर्ग सारणी (D1–D60)",l,a)}
      ${N("C3","सम्पूर्ण 16 षोडशवर्ग ग्रह राशि सारणी (All 16 BPHS Shodashavarga D1–D60)","बृहत् पाराशर होरा मानक")}
      <table class="book-table" style="font-size: 7.9px;">
        <thead>
          <tr>
            <th style="width: 15%;">वर्ग कुंडली</th>
            <th style="width: 8%; text-align:center;">लग्न</th>
            ${o.map(u=>`<th style="width: 7.3%; text-align:center;">${h[u]}</th>`).join("")}
            <th style="width: 11.3%; text-align:center;">संवेदनशीलता</th>
          </tr>
        </thead>
        <tbody>
          ${W.map((u,C)=>{const _=u.spec.birthTimeSensitivity==="low"?"स्थिर":u.spec.birthTimeSensitivity==="moderate"?"मध्यम":u.spec.birthTimeSensitivity==="high"?"उच्च":"अति सूक्ष्म";return`
                <tr style="background:${C%2===0?"#FFFDF8":"#FEF6E4"};">
                  <td style="font-weight:800; color:${t.cosmicNavy};">${i(u.spec.id)} ${i(u.spec.nameHi)}</td>
                  <td style="text-align:center; font-weight:800; color:${t.saffronDeep};">${u.ascendantRashiNumber}-${i(S(u.ascendantRashiNumber))}</td>
                  ${o.map($t=>{const mt=u.planetRashis[$t];return`<td style="text-align:center; font-family:monospace;">${mt}-${i(S(mt))}</td>`}).join("")}
                  <td style="text-align:center; font-weight:700; color:${u.spec.birthTimeSensitivity==="critical"?t.crimson:t.inkMuted};">${_}</td>
                </tr>`}).join("")}
        </tbody>
      </table>
      ${q("navamsha_shodashavarga")}
    `;m.push({sectionCode:"C3",sectionTag:"खण्ड C : 16 षोडशवर्ग सारणी",html:x});const f=[{code:"C4",range:[0,4],title:"षोडशवर्ग चक्र (भाग 1/4) — D-1 लग्न, D-2 होरा, D-3 द्रेष्काण एवं D-4 चतुर्थांश",banner:!1},{code:"C5",range:[4,8],title:"षोडशवर्ग चक्र (भाग 2/4) — D-7 सप्तांश, D-9 नवांश, D-10 दशमांश एवं D-12 द्वादशांश",banner:!1},{code:"C6",range:[8,12],title:"षोडशवर्ग चक्र (भाग 3/4) — D-16 षोडशांश, D-20 विंशांश, D-24 चतुर्विंशांश एवं D-27 सप्तविंशांश",banner:!1},{code:"C7",range:[12,16],title:"षोडशवर्ग चक्र (भाग 4/4) — D-30 त्रिंशांश, D-40 खवेदांश, D-45 अक्षवेदांश एवं D-60 षष्ट्यांश",banner:!0}];for(const u of f){const C=W.slice(u.range[0],u.range[1]);if(C.length===0)continue;const _=u.banner?216:246,$t=C.map(J=>{const Rt=te(J.houses),Gt=J.spec.birthTimeSensitivity==="critical"?" • अति समय-संवेदनशील":J.spec.birthTimeSensitivity==="high"?" • समय-संवेदनशील":"";return`
            <div class="book-chart-box" style="background: ${t.pureIvory}; border: 1.5px solid ${t.templeGold}; border-radius: 10px; padding: 9px 10px; text-align: center;">
              <div style="font-size: 9.8px; font-weight: 900; color: ${t.cosmicNavy};">
                ${i(J.spec.id)} — ${i(J.spec.nameHi)} (${i(J.ascendantRashiNameHi)})
              </div>
              <div style="font-size: 7.7px; color: ${t.saffronDeep}; font-weight: 700; margin: 2px 0 6px 0;">
                विषय: ${i(J.spec.significationHi)}${i(Gt)}
              </div>
              ${Dt(Rt,g,_,`${J.spec.id} ${J.spec.nameHi}`,r)}
            </div>
          `}).join(""),mt=`
        ${A(`खण्ड ${u.code} : 16 षोडशवर्ग कुंडली चक्र`,l,a)}
        ${N(u.code,u.title,"प्रति पृष्ठ 4 बड़े वर्ग चक्र")}
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 6px;">
          ${$t}
        </div>
        <div style="display: block; margin-top: 8px; padding: 4px 10px 6px 10px; background: ${t.templeGoldSoft}; border: 1px solid ${t.templeGold}; border-radius: 7px; font-size: 7.9px; color: ${t.cosmicNavy}; text-align: center; font-weight: 700; line-height: 1.25;">
          1–12 अंक = राशि संख्या • सू=सूर्य, चं=चंद्र, मं=मंगल, बु=बुध, गु=गुरु, शु=शुक्र, श=शनि, रा=राहु, के=केतु
        </div>
        ${u.banner?rt("after_vargas_c",s,c):""}
      `;m.push({sectionCode:u.code,sectionTag:`खण्ड ${u.code} : षोडशवर्ग चार्ट्स`,html:mt})}}if(y){const o=y.planets.map(f=>{const u=Math.min(100,Math.round(f.totalRupas/Math.max(1,f.requiredRupas*1.45)*100)),C=f.strengthRatio>=1.15?"linear-gradient(90deg, #059669, #10B981)":f.meetsMinimum?"linear-gradient(90deg, #D97706, #F59E0B)":"linear-gradient(90deg, #DC2626, #F97316)";return`
          <div style="display: grid; grid-template-columns: 78px 1fr 110px; align-items: center; gap: 10px; padding: 5px 8px; background: #FFFDF8; border: 1px solid ${t.borderMuted}; border-radius: 7px;">
            <div style="font-size: 9px; font-weight: 800; color: ${t.cosmicNavy};">${i(f.hindiName)} (#${f.rank})</div>
            ${St(u,C,`${f.totalRupas.toFixed(2)} रूप`)}
            <div style="font-size: 7.9px; font-weight: 800; text-align: right; color: ${f.meetsMinimum?t.emerald:t.crimson};">
              ${f.meetsMinimum?"✓ पुष्ट":"सामान्य"} (${(f.strengthRatio*100).toFixed(0)}%)
            </div>
          </div>`}).join(""),h=`
      ${A("खण्ड D1 : 6-अंगी पाराशरी षड्बल एवं शक्ति ग्राफ",l,a)}
      ${N("D1","6-अंगी पाराशरी षड्बल तालिका (विरूप व रूप — BPHS अध्याय 27)","1 रूप = 60 विरूप")}
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
          ${y.planets.map((f,u)=>`
              <tr style="background:${u%2===0?"#FFFDF8":"#FEF6E4"};">
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

      ${N("D1b","सप्तग्रह षड्बल शक्ति तुलना (Colored Strength Bars)","न्यूनतम अपेक्षित बल के सापेक्ष")}
      <div style="display: flex; flex-direction: column; gap: 6px; margin-top: 6px;">
        ${o}
      </div>
      ${q("shadbala")}
    `;m.push({sectionCode:"D",sectionTag:"खण्ड D : 6-अंगी पाराशरी षड्बल",html:h});const S=Math.max(8,...y.bhavas.map(f=>f.totalRupas)),x=`
      ${A("खण्ड D2 : इष्ट-कष्ट फल एवं द्वादश भाव बल",l,a)}
      ${N("D2a","सप्तग्रह इष्ट फल बनाम कष्ट फल (Ishta & Kashta Phala)","शुभत्व एवं संघर्ष अनुपात")}
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
          ${y.planets.map((f,u)=>{const C=Math.round(f.ishtaPhala/Math.max(1,f.ishtaPhala+f.kashtaPhala)*100);return`
              <tr style="background:${u%2===0?"#FFFDF8":"#FEF6E4"};">
                <td style="font-weight:800; color:${t.cosmicNavy};">${i(f.hindiName)}</td>
                <td style="text-align:right; font-family:monospace; font-weight:800; color:${t.emerald};">${f.ishtaPhala.toFixed(1)}</td>
                <td style="text-align:right; font-family:monospace; font-weight:700; color:${t.crimson};">${f.kashtaPhala.toFixed(1)}</td>
                <td>${St(C,C>=50?"#059669":"#D97706",`${C}% शुभ`)}</td>
                <td style="font-weight:700; color:${f.ishtaPhala>=f.kashtaPhala?t.emerald:t.saffronDeep};">${f.ishtaPhala>=f.kashtaPhala?"शुभ फल प्रधान":"परिश्रम उपरांत फल"}</td>
              </tr>`}).join("")}
        </tbody>
      </table>

      ${N("D2b","द्वादश भाव बल तालिका (12-House Parashari Bhava Bala)","भावाधिपति + दिग् + दृक् बल")}
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
          ${y.bhavas.map((f,u)=>{const C=Math.round(f.totalRupas/S*100),_=f.rank<=4?"#059669":f.rank<=8?"#D97706":"#C2410C";return`
              <tr style="background:${u%2===0?"#FFFDF8":"#FEF6E4"};">
                <td style="font-weight:800; color:${t.cosmicNavy};">${f.houseNumber}. ${i(f.bhavaTitleHi)}</td>
                <td>${i(f.rashiNameHi)} (${i(f.lordHindi)})</td>
                <td style="text-align:right; font-family:monospace;">${f.bhavadhipatiBala.toFixed(1)}</td>
                <td style="text-align:right; font-family:monospace;">${f.bhavaDigBala.toFixed(1)}</td>
                <td style="text-align:right; font-family:monospace; color:${f.bhavaDrishtiBala>=0?t.emerald:t.crimson};">${f.bhavaDrishtiBala>=0?"+":""}${f.bhavaDrishtiBala.toFixed(1)}</td>
                <td>${St(C,_,f.totalRupas.toFixed(2))}</td>
                <td style="font-weight:700; color:${f.rank<=4?t.emerald:t.inkPrimary};">#${f.rank} ${i(f.gradeHi.split(" ")[0])}</td>
              </tr>`}).join("")}
        </tbody>
      </table>
      ${q("bhava_bala")}
    `;m.push({sectionCode:"D2",sectionTag:"खण्ड D : इष्ट-कष्ट व भाव बल",html:x})}const I=e.ashtakavarga;if(I){const o=Array.from({length:6},(S,x)=>{const f=e.lagnaChart[x],u=e.lagnaChart[x+6],C=f?I.sarvashtakavarga[f.rashiNumber-1]??28:28,_=u?I.sarvashtakavarga[u.rashiNumber-1]??28:28;return`
        <tr style="background:${x%2===0?"#FFFDF8":"#FEF6E4"};">
          <td style="font-weight:800;">भाव ${x+1} (${i(f?.rashiName||"")})</td>
          <td style="font-weight:800; color:${C>=28?t.emerald:t.saffronDeep};">${C} बिंदु — ${C>=30?"अति पुष्ट":C>=28?"संतुलित शुभ":"अतिरिक्त प्रयास"}</td>
          <td style="font-weight:800;">भाव ${x+7} (${i(u?.rashiName||"")})</td>
          <td style="font-weight:800; color:${_>=28?t.emerald:t.saffronDeep};">${_} बिंदु — ${_>=30?"अति पुष्ट":_>=28?"संतुलित शुभ":"अतिरिक्त प्रयास"}</td>
        </tr>`}).join(""),h=`
      ${A("खण्ड E : अष्टकवर्ग एवं सर्वाष्टकवर्ग (337 बिंदु)",l,a)}
      ${N("E1","सप्तग्रह भिन्नाष्टकवर्ग (BAV) एवं सर्वाष्टकवर्ग (SAV) सारणी",`कुल योग: ${I.totalBindusSum} बिंदु`)}
      <table class="book-table" style="font-size: 8px; text-align:center;">
        <thead>
          <tr>
            <th style="width: 16%; text-align:left;">ग्रह / वर्ग</th>
            ${bt.map(S=>`<th style="width: 6.4%; text-align:center;">${S.number}<br/>${i(S.nameHi.slice(0,3))}</th>`).join("")}
            <th style="width: 7.2%; text-align:right;">योग</th>
          </tr>
        </thead>
        <tbody>
          ${Object.entries(I.planetBindus).map(([S,x],f)=>{const u=x.reduce((C,_)=>C+_,0);return`
                <tr style="background:${f%2===0?"#FFFDF8":"#FEF6E4"};">
                  <td style="text-align:left; font-weight:800; color:${t.cosmicNavy};">${i(S)}</td>
                  ${x.map(C=>`<td style="font-family:monospace; font-weight:${C>=5?800:600}; color:${C>=5?t.emerald:C<=2?t.crimson:t.inkPrimary};">${C}</td>`).join("")}
                  <td style="text-align:right; font-family:monospace; font-weight:800;">${u}</td>
                </tr>`}).join("")}
          <tr style="background:${t.templeGoldSoft}; font-weight:900;">
            <td style="text-align:left; color:${t.cosmicNavy};">सर्वाष्टकवर्ग (SAV)</td>
            ${I.sarvashtakavarga.map(S=>`<td style="font-family:monospace; color:${S>=30?t.emerald:S<25?t.crimson:t.saffronDeep};">${S}</td>`).join("")}
            <td style="text-align:right; font-family:monospace; color:${t.cosmicNavy};">${I.totalBindusSum}</td>
          </tr>
        </tbody>
      </table>

      ${N("E2","द्वादश भावों में सर्वाष्टकवर्ग बिंदु स्थिति","28+ बिंदु = शुभ व फलदायी")}
      <table class="book-table" style="font-size: 8.1px;">
        <colgroup>
          <col style="width: 21%;" />
          <col style="width: 29%;" />
          <col style="width: 21%;" />
          <col style="width: 29%;" />
        </colgroup>
        <tbody>${o}</tbody>
      </table>
      <div class="book-card" style="margin-top:6px; background:${t.pureIvory}; border:1.2px solid ${t.templeGold}; border-radius:7px; padding:7px 10px; font-size:8.2px; line-height:1.45;">
        <div><b style="color:${t.emerald};">✦ सर्वाधिक प्रबल राशियाँ (30+ बिंदु):</b> ${i(I.strongestRashis.join(" • ")||"—")}</div>
        <div style="margin-top:2px;"><b style="color:${t.saffronDeep};">✦ अतिरिक्त ध्यान योग्य राशियाँ (&lt;28 बिंदु):</b> ${i(I.weakestRashis.join(" • ")||"—")}</div>
      </div>
      ${q("ashtakavarga")}
      ${rt("after_ashtakavarga_e",s,c)}
    `;m.push({sectionCode:"E",sectionTag:"खण्ड E : अष्टकवर्ग (337 बिंदु)",html:h})}const M=b?.vimshottari,st=`
    ${A("खण्ड F1 : विंशोत्तरी महादशा चक्र एवं 4-स्तरीय सक्रिय दशा",l,a)}
    ${N("F1","विंशोत्तरी महादशा (120 वर्षीय चक्र) एवं वर्तमान सक्रिय 4-स्तरीय दशा",M?M.balanceAtBirthHi:"जन्म नक्षत्र आधारित")}
    ${M?`<div style="display:grid; grid-template-columns: repeat(4, 1fr); gap: 7px; margin-bottom: 8px;">
             ${[["वर्तमान महादशा",M.activeMahadasha],["वर्तमान अंतर्दशा",M.activeAntardasha],["वर्तमान प्रत्यंतर",M.activePratyantardasha],["वर्तमान सूक्ष्म दशा",M.activeSookshmadasha]].map(([o,h])=>`
                 <div class="book-cover-pillar-card" style="display: flex; flex-direction: column; justify-content: center; background:${t.cosmicNavy}; color:${t.warmIvory}; border:1.3px solid ${t.templeGold}; border-radius:8px; padding:6px 9px; box-sizing:border-box;">
                   <div style="display:block; font-size:7.6px; color:#FCD34D; font-weight:700; line-height:1.25;">${i(o)}</div>
                   <div style="display:block; font-size:11px; font-weight:800; margin-top:3px; line-height:1.25;">${i(h.lordHindi)}</div>
                   <div style="display:block; font-size:7.3px; color:#CBD5E1; font-family:monospace; margin-top:3px; line-height:1.25;">${i(h.startDateHi)} – ${i(h.endDateHi)}</div>
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
        ${e.mahadashas.map((o,h)=>`
            <tr style="background:${o.isCurrent?t.emeraldSoft:h%2===0?"#FFFDF8":"#FEF6E4"};">
              <td style="font-weight:800; color:${o.isCurrent?t.emerald:t.cosmicNavy};">${i(o.planet)}${o.isCurrent?" ★":""}</td>
              <td style="text-align:center; font-family:monospace;">${o.years}</td>
              <td style="font-family:monospace; font-weight:700;">${i(o.startYear)} – ${i(o.endYear)}</td>
              <td>${i(o.prediction)}</td>
            </tr>`).join("")}
      </tbody>
    </table>

    ${M&&M.activeAntardashaPratyantars.length>0?`
          ${N("F1b",`वर्तमान सक्रिय प्रत्यंतर दशा (${M.activeMahadasha.lordHindi} – ${M.activeAntardasha.lordHindi})`,"सूक्ष्म काल गणना")}
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
              ${M.activeAntardashaPratyantars.map((o,h)=>`
                  <tr style="background:${o.isCurrent?t.emeraldSoft:h%2===0?"#FFFDF8":"#FEF6E4"};">
                    <td style="font-weight:800; color:${o.isCurrent?t.emerald:t.cosmicNavy};">${i(o.lordHindi)}${o.isCurrent?" (सक्रिय)":""}</td>
                    <td style="font-family:monospace;">${i(o.startDateHi)}</td>
                    <td style="font-family:monospace;">${i(o.endDateHi)}</td>
                    <td style="text-align:right; font-family:monospace;">${o.durationDays} दिन</td>
                  </tr>`).join("")}
            </tbody>
          </table>`:""}
    ${q("dasha_vimshottari")}
  `;if(m.push({sectionCode:"F1",sectionTag:"खण्ड F : विंशोत्तरी महादशा",html:st}),M&&M.mahadashas.length>0){const o=M.mahadashas.slice(0,9),h=[{code:"F2",tag:"खण्ड F2 : विंशोत्तरी अंतर्दशा (भाग 1/4)",items:o.slice(0,2)},{code:"F3",tag:"खण्ड F3 : विंशोत्तरी अंतर्दशा (भाग 2/4)",items:o.slice(2,4)},{code:"F4",tag:"खण्ड F4 : विंशोत्तरी अंतर्दशा (भाग 3/4)",items:o.slice(4,6)},{code:"F5",tag:"खण्ड F5 : विंशोत्तरी अंतर्दशा (भाग 4/4)",items:o.slice(6,9)}];for(const S of h){if(S.items.length===0)continue;const x=S.items.length>=3,f=S.items.map(u=>`
          <div style="margin-bottom: ${x?7:12}px;">
            ${N(`${u.lordHindi} महादशा`,`${u.lordHindi} महादशा के अंतर्गत सभी 9 अंतर्दशाएँ (${u.startDateHi} – ${u.endDateHi})`,u.isCurrent?"★ वर्तमान सक्रिय महादशा":`${u.durationYears.toFixed(1)} वर्ष`)}
            <div style="font-size: ${x?7.6:8.2}px; color: ${t.saffronDeep}; font-weight: 700; margin-bottom: 4px; padding: 0 2px;">
              महादशा प्रभाव: ${i(u.effectHi)}
            </div>
            <table class="book-table" style="font-size: ${x?7.1:8}px;">
              <thead>
                <tr>
                  <th style="width: 17%;">अंतर्दशा</th>
                  <th style="width: 18%;">आरंभ तिथि</th>
                  <th style="width: 18%;">समाप्ति तिथि</th>
                  <th style="width: 47%;">प्रमुख फल संकेत</th>
                </tr>
              </thead>
              <tbody>
                ${u.antardashas.map((C,_)=>`
                    <tr style="background:${C.isCurrent?t.emeraldSoft:_%2===0?"#FFFDF8":"#FEF6E4"};">
                      <td style="font-weight:800; color:${C.isCurrent?t.emerald:t.cosmicNavy};">${i(u.lordHindi)} – ${i(C.lordHindi)}${C.isCurrent?" ★":""}</td>
                      <td style="font-family:monospace;">${i(C.startDateHi)}</td>
                      <td style="font-family:monospace;">${i(C.endDateHi)}</td>
                      <td>${i(ce[C.lordHindi]||"संतुलित कर्म व धैर्य से शुभ परिणाम।")}</td>
                    </tr>`).join("")}
              </tbody>
            </table>
          </div>
        `).join("");m.push({sectionCode:S.code,sectionTag:S.tag,html:`
          ${A(S.tag,l,a)}
          ${f}
        `})}}if(b){const o=`
      ${A("खण्ड F6 : 36-वर्षीय योगिनी दशा एवं जैमिनी चर दशा",l,a)}
      ${N("F6a","योगिनी दशा चक्र (36-वर्षीय पाराशरी प्रणाली)",`सक्रिय: ${b.yogini.activeMahadasha.yoginiNameHi} → ${b.yogini.activeAntardasha.yoginiNameHi}`)}
      <table class="book-table" style="font-size: 7.7px;">
        <thead>
          <tr>
            <th style="width: 21%;">योगिनी (स्वामी)</th>
            <th style="width: 8%; text-align:center;">वर्ष</th>
            <th style="width: 11%;">प्रकृति</th>
            <th style="width: 27%;">दिनांक अवधि</th>
            <th style="width: 33%;">संकेत</th>
          </tr>
        </thead>
        <tbody>
          ${b.yogini.mahadashas.slice(0,10).map((h,S)=>`
              <tr style="background:${h.isCurrent?t.emeraldSoft:S%2===0?"#FFFDF8":"#FEF6E4"};">
                <td style="font-weight:800; color:${h.isCurrent?t.emerald:t.cosmicNavy};">${i(h.yoginiNameHi)} (${i(h.lordHindi)})${h.isCurrent?" ★":""}</td>
                <td style="text-align:center; font-family:monospace;">${h.years}</td>
                <td style="font-weight:700; color:${h.natureHi==="शुभ"?t.emerald:h.natureHi==="मिश्रित"?t.saffronDeep:t.crimson};">${i(h.natureHi)}</td>
                <td style="font-family:monospace;">${i(h.startDateHi)} – ${i(h.endDateHi)}</td>
                <td>${i(h.effectHi)}</td>
              </tr>`).join("")}
        </tbody>
      </table>

      ${N("F6b","जैमिनी सप्त चर कारक (AK–DK) एवं राशि चर दशा",`सक्रिय: ${b.jaimini.activeMahadasha.rashiNameHi} → ${b.jaimini.activeAntardasha.rashiNameHi}`)}
      <div style="display:grid; grid-template-columns: repeat(4, 1fr); gap: 6px; margin-bottom: 7px;">
        ${b.jaimini.karakas.map(h=>`
            <div style="background:${t.pureIvory}; border:1.1px solid ${t.templeGold}; border-radius:6px; padding:5px 7px; font-size:7.6px;">
              <div style="font-weight:800; color:${t.saffronDeep};">${i(h.code)} • ${i(h.nameHi)}</div>
              <div style="font-weight:800; color:${t.cosmicNavy}; font-size:8.6px;">${i(h.planetHindi)} <span style="font-family:monospace; font-weight:600; color:${t.inkMuted};">(${i(h.degDMS)})</span></div>
            </div>`).join("")}
      </div>
      <table class="book-table" style="font-size: 7.6px;">
        <thead>
          <tr>
            <th style="width: 21%;">चर दशा राशि</th>
            <th style="width: 15%;">स्वामी</th>
            <th style="width: 9%; text-align:center;">वर्ष</th>
            <th style="width: 31%;">अवधि</th>
            <th style="width: 24%;">नियम नोट</th>
          </tr>
        </thead>
        <tbody>
          ${b.jaimini.charaDasha.slice(0,8).map((h,S)=>`
              <tr style="background:${h.isCurrent?t.emeraldSoft:S%2===0?"#FFFDF8":"#FEF6E4"};">
                <td style="font-weight:800;">${h.rashiNumber}. ${i(h.rashiNameHi)}${h.isCurrent?" ★":""}</td>
                <td>${i(h.effectiveLordHindi)}</td>
                <td style="text-align:center; font-family:monospace;">${h.durationYears}</td>
                <td style="font-family:monospace;">${i(h.startDateHi)} – ${i(h.endDateHi)}</td>
                <td>${i(h.lordStrengthRuleNoteHi)}</td>
              </tr>`).join("")}
        </tbody>
      </table>
      ${q("dasha_yogini")}
    `;m.push({sectionCode:"F6",sectionTag:"खण्ड F : योगिनी एवं जैमिनी दशा",html:o})}const pt=e.deepAnalysis?.allTwelveBhavas||[],ht=o=>o.map(h=>`
        <div class="book-card" style="background: ${t.pureIvory}; border: 1.3px solid ${t.templeGold}; border-left: 4px solid ${h.strengthLabel==="प्रबल"?t.emerald:h.strengthLabel==="शुभ"?t.saffron:t.templeGoldDark}; border-radius: 8px; padding: 9px 11px; margin-bottom: 8px;">
          <div style="display: table; width: 100%; margin-bottom: 4px;">
            <div style="display: table-cell; vertical-align: middle; text-align: left; font-size: 9.8px; font-weight: 900; color: ${t.cosmicNavy}; padding-right: 8px;">
              भाव ${h.house} — ${i(h.bhavaName)} (${i(h.rashi)} राशि)
            </div>
            <div style="display: table-cell; vertical-align: middle; text-align: right; white-space: nowrap; width: 1%;">
              <span class="book-pill" style="${dt} font-size: 7.8px; font-weight: 800; padding-left: 9px; padding-right: 9px; border-radius: 999px; white-space: nowrap; background: ${h.strengthLabel==="प्रबल"?t.emeraldSoft:t.saffronSoft}; color: ${h.strengthLabel==="प्रबल"?t.emerald:t.saffronDeep};">
                <span style="${nt}">स्थिति: ${i(h.strengthLabel)}</span>
              </span>
            </div>
          </div>
          <div style="font-size: 8.1px; color: ${t.saffronDeep}; font-weight: 700; margin-bottom: 3px;">
            भावेश: ${i(h.lord)} (स्थित भाव: ${h.lordPlacementHouse}) &nbsp;|&nbsp; स्थित ग्रह: ${i(h.occupants||"रिक्त (भावेश व दृष्टि से फल)")}
          </div>
          <div style="font-size: 8.6px; color: ${t.inkPrimary}; line-height: 1.52;">
            ${i(h.prediction)}
          </div>
        </div>`).join(""),V=`
    ${A("खण्ड G1 : द्वादश भाव फल (प्रथम से षष्ठ भाव)",l,a)}
    ${N("G1","द्वादश भाव फल विश्लेषण — भाव 1 से भाव 6 (तनु, धन, पराक्रम, सुख, संतान, शत्रु)",`${e.panchang.lagnaName} लग्न`)}
    ${ht(pt.slice(0,6))}
    ${Nt("भाव फल कैसे पढ़ें?","प्रत्येक भाव का फल तीन आधारों पर देखा जाता है: (1) उस भाव की राशि व स्वामी (भावेश) की स्थिति, (2) भाव में बैठे ग्रह, और (3) उस भाव पर पड़ने वाली शुभ या क्रूर ग्रहों की दृष्टि। रिक्त भाव का अर्थ अशुभ नहीं होता — उसका फल भावेश की स्थिति से मिलता है।","प्रबल व शुभ भाव जीवन के उन क्षेत्रों को दर्शाते हैं जहाँ कम प्रयास में भी उत्तम सफलता मिलती है।")}
  `;m.push({sectionCode:"G1",sectionTag:"खण्ड G : द्वादश भाव फल (1–6)",html:V});const X=`
    ${A("खण्ड G2 : द्वादश भाव फल (सप्तम से द्वादश भाव)",l,a)}
    ${N("G2","द्वादश भाव फल विश्लेषण — भाव 7 से भाव 12 (विवाह, आयु, भाग्य, कर्म, लाभ, व्यय)",`${e.panchang.lagnaName} लग्न`)}
    ${ht(pt.slice(6,12))}
  `;m.push({sectionCode:"G2",sectionTag:"खण्ड G : द्वादश भाव फल (7–12)",html:X});const K=o=>{const h=Object.entries(pe).find(([S])=>o.hindiName.includes(S))?.[1]||"जन्म कुंडली में विशिष्ट कर्मफल व जीवन दिशा प्रदान करने वाला ग्रह।";return`
      <div class="book-card" style="background: ${t.pureIvory}; border: 1.3px solid ${t.templeGold}; border-radius: 9px; padding: 10px 12px; margin-bottom: 9px;">
        <div style="display: table; width: 100%; border-bottom: 1px solid ${t.borderMuted}; padding-bottom: 4px; margin-bottom: 5px;">
          <div style="display: table-cell; vertical-align: middle; text-align: left; font-size: 10px; font-weight: 900; color: ${t.cosmicNavy}; padding-right: 8px;">
            ✦ ${i(o.hindiName)} विचार — ${i(o.rashiName)} राशि, भाव ${o.houseInLagna} (${i(o.fullDegreeDMS)})
          </div>
          <div style="display: table-cell; vertical-align: middle; text-align: right; white-space: nowrap; width: 1%;">
            <span class="book-pill" style="${dt} font-size: 7.8px; font-weight: 800; padding-left: 9px; padding-right: 9px; border-radius: 999px; white-space: nowrap; background: ${o.statusBadge==="shubh"?t.emeraldSoft:o.statusBadge==="upay"?t.crimsonSoft:t.saffronSoft}; color: ${o.statusBadge==="shubh"?t.emerald:o.statusBadge==="upay"?t.crimson:t.saffronDeep};">
              <span style="${nt}">${i(o.dignity)}${o.isRetrograde?" • वक्री":""}${o.isCombust?" • अस्त":""}</span>
            </span>
          </div>
        </div>
        <div style="font-size: 8.2px; color: ${t.saffronDeep}; font-weight: 700; margin-bottom: 3px;">
          नक्षत्र: ${i(o.nakshatra)} (चरण ${o.pada}) &nbsp;|&nbsp; कारकत्व: ${i(h)}
        </div>
        <div style="font-size: 8.6px; color: ${t.inkPrimary}; line-height: 1.52;">
          ${i(o.houseEffect||`${o.hindiName} आपकी कुंडली के ${o.houseInLagna}वें भाव में ${o.rashiName} राशि में स्थित होकर ${o.dignity} अवस्था में फल प्रदान कर रहे हैं।`)}
        </div>
      </div>`},B=`
    ${A("खण्ड G3 : नवग्रह विचार (सूर्य से गुरु तक)",l,a)}
    ${N("G3","नवग्रह विचार (भाग 1/2) — सूर्य, चंद्र, मंगल, बुध एवं गुरु का विस्तृत प्रभाव","भाव एवं अवस्था आधारित")}
    ${e.planets.slice(0,5).map(K).join("")}
  `;m.push({sectionCode:"G3",sectionTag:"खण्ड G : नवग्रह विचार (1–5)",html:B});const tt=`
    ${A("खण्ड G4 : नवग्रह विचार (शुक्र से केतु) एवं शुभ राजयोग",l,a)}
    ${N("G4a","नवग्रह विचार (भाग 2/2) — शुक्र, शनि, राहु एवं केतु","भाव एवं अवस्था आधारित")}
    ${e.planets.slice(5,9).map(K).join("")}
    ${N("G4b","कुंडली में निर्मित प्रमुख शास्त्रीय योग एवं राजयोग",`${e.rajYogas.length} योग पहचानित`)}
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
      ${e.rajYogas.slice(0,6).map(o=>`
          <div class="book-card" style="background:${t.pureIvory}; border:1.2px solid ${t.templeGold}; border-radius:8px; padding:7.5px 9.5px; font-size:8px; line-height:1.45;">
            <div style="display:table; width:100%;">
              <div style="display:table-cell; vertical-align:middle; text-align:left; padding-right:4px;"><b style="color:${t.cosmicNavy}; font-size:8.8px;">${i(o.name)}</b></div>
              <div style="display:table-cell; vertical-align:middle; text-align:right; white-space:nowrap; width:1%;"><span class="book-pill" style="${dt} padding-left: 7px; padding-right: 7px; border-radius: 999px; background: ${t.emeraldSoft}; color:${t.emerald}; font-weight:800; font-size:7.4px; white-space: nowrap;"><span style="${nt}">${i(o.strength)}</span></span></div>
            </div>
            <div style="color:${t.saffronDeep}; font-size:7.4px; margin-top:1px;">${i(o.sanskritRule)}</div>
            <div style="margin-top:3px; color:${t.inkPrimary};">${i(o.description)}</div>
          </div>`).join("")}
    </div>
  `;if(m.push({sectionCode:"G4",sectionTag:"खण्ड G : नवग्रह व राजयोग",html:tt}),b){const o=`
      ${A("खण्ड G5 : 5 शास्त्रीय दोष एवं परिहार (भंग) परीक्षण",l,a)}
      ${N("G5","नियम-आधारित 5 प्रमुख दोष परीक्षण — मंगल, कालसर्प, पितृ, ग्रहण एवं केमद्रुम","परिहार नियमों सहित निष्पक्ष विश्लेषण")}
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
          ${b.yogasAndDoshas.doshas.allList.map((x,f)=>{const u=x.effectiveStatus==="दोष मुक्त",C=x.pariharRulesHi.length>0?`<div style="margin-top:3px; color:${t.emerald}; font-weight:700;">✓ परिहार नियम: ${i(x.pariharRulesHi.join("; "))}</div>`:"";return`
                <tr style="background:${f%2===0?"#FFFDF8":"#FEF6E4"};">
                  <td style="font-weight:800; color:${t.cosmicNavy}; padding: 8px 7px;">${i(x.nameHi)}${x.subTypeHi?`<div style="font-size:7.4px; color:${t.inkMuted}; margin-top:2px;">${i(x.subTypeHi)}</div>`:""}</td>
                  <td style="font-weight:800; padding: 8px 7px; color:${u?t.emerald:x.effectiveStatus==="आंशिक / परिहार युक्त"?t.saffronDeep:t.crimson};">${i(x.effectiveStatus)}</td>
                  <td style="padding: 8px 7px; line-height:1.48;">${i(x.explanationHi)}${C}</td>
                  <td style="padding: 8px 7px; line-height:1.48;">${i(x.remedyHi)}</td>
                </tr>`}).join("")}
        </tbody>
      </table>
      ${q("dosha_parihar_gochar")}
    `;m.push({sectionCode:"G5",sectionTag:"खण्ड G : 5 दोष व परिहार",html:o});const h=de(e),S=`
      ${A("खण्ड G6 : सम्पूर्ण जीवन साढ़ेसाती एवं लाइव ग्रह गोचर",l,a)}
      ${N("G6a",`सम्पूर्ण जीवन शनि साढ़ेसाती आवर्तन तालिका (${e.panchang.moonRashiName} चंद्र राशि)`,b.liveGochar.sadeSatiLabelHi)}
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
          ${h.slice(0,9).map((x,f)=>`
              <tr style="background:${f%2===0?"#FFFDF8":"#FEF6E4"};">
                <td style="font-weight:800; color:${t.cosmicNavy};">${i(x.cycleLabel)}</td>
                <td style="font-weight:700; color:${t.saffronDeep};">${i(x.phaseLabel)}</td>
                <td>${i(x.saturnRashi)}</td>
                <td style="font-family:monospace; font-weight:700;">${i(x.approxPeriod)}</td>
                <td style="font-family:monospace;">${i(x.ageSpan)}</td>
                <td>${i(x.guidanceHi)}</td>
              </tr>`).join("")}
        </tbody>
      </table>

      ${N("G6b",`लाइव निरयण ग्रह गोचर (${b.liveGochar.computedAtDateHi})`,"चंद्र एवं लग्न सापेक्ष")}
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
          ${b.liveGochar.grahaRows.map((x,f)=>`
              <tr style="background:${f%2===0?"#FFFDF8":"#FEF6E4"};">
                <td style="font-weight:800;">${i(x.nameHi)}${x.isRetrograde?" (व)":""}${x.isCombust?" (अ)":""}</td>
                <td style="font-family:monospace;">${i(x.currentRashiNameHi)} ${i(x.degDMS)}</td>
                <td style="text-align:center; font-weight:800; color:${t.emerald};">${x.houseFromNatalMoon}</td>
                <td style="text-align:center; font-weight:700;">${x.houseFromNatalLagna}</td>
                <td style="font-weight:700; color:${x.hasVedha?t.saffronDeep:x.isFavorableFromMoon?t.emerald:t.inkMuted};">${x.hasVedha?`वेध (${i(x.vedhaByHi.join(", "))})`:x.isFavorableFromMoon?"शुभ गोचर":"सामान्य"}</td>
                <td>${i(x.effectSummaryHi)}</td>
              </tr>`).join("")}
        </tbody>
      </table>
      ${rt("after_gochar_g",s,c)}
    `;m.push({sectionCode:"G6",sectionTag:"खण्ड G : साढ़ेसाती एवं लाइव गोचर",html:S})}const et=Wt(e),gt=`
    ${A("खण्ड H1 : शुद्ध सात्विक वैदिक उपाय, रत्न एवं रुद्राक्ष",l,a)}
    ${N("H1a","लग्नेश आधारित प्रामाणिक रत्न, रुद्राक्ष एवं भाग्यवर्धक तत्व",`${e.panchang.lagnaName} लग्न`)}
    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 9px; margin-bottom: 9px;">
      <div class="book-card" style="background:${t.pureIvory}; border:1.4px solid ${t.templeGold}; border-radius:9px; padding:9px 11px; font-size:8.3px; line-height:1.5;">
        <div style="font-weight:800; color:${t.saffronDeep};">जीवन रत्न एवं भाग्य रत्न</div>
        <div style="font-weight:900; color:${t.cosmicNavy}; font-size:9.5px; margin-top:2px;">${i(et.jeevanRatna)}</div>
        <div style="margin-top:3px;"><b>भाग्य रत्न:</b> ${i(et.bhagyaRatna)}</div>
        <div><b>धारण विधि:</b> ${i(et.metalAndFinger)}</div>
      </div>
      <div class="book-card" style="background:${t.pureIvory}; border:1.4px solid ${t.templeGold}; border-radius:9px; padding:9px 11px; font-size:8.3px; line-height:1.5;">
        <div style="font-weight:800; color:${t.saffronDeep};">कल्याणकारी रुद्राक्ष</div>
        <div style="font-weight:900; color:${t.cosmicNavy}; font-size:9.5px; margin-top:2px;">${i(et.primaryRudraksha)}</div>
        <div style="margin-top:2px; font-size:7.9px;"><b>सहायक:</b> ${i(et.secondaryRudraksha)}</div>
        <div style="margin-top:3px;"><b>इष्टदेव:</b> ${i(e.lucky.ishtaDevta)}</div>
        <div><b>शुभ वार / रंग:</b> ${i(e.lucky.luckyDays)} • ${i(e.lucky.luckyColors)}</div>
      </div>
      <div class="book-card" style="background:${t.pureIvory}; border:1.4px solid ${t.templeGold}; border-radius:9px; padding:9px 11px; font-size:8.3px; line-height:1.55;">
        <div style="font-weight:800; color:${t.saffronDeep};">दैनिक सिद्ध बीज मंत्र</div>
        <div style="font-weight:900; color:${t.emerald}; font-size:9px; margin-top:4px; line-height:1.65; padding: 2px 0;">${i(At(e.lucky.beejMantra))}</div>
        <div style="margin-top:4px;"><b>शुभ अंक व दिशा:</b> ${i(e.lucky.luckyNumbers)} • ${i(e.lucky.luckyDirection)}</div>
      </div>
    </div>

    ${N("H1b","व्यक्तिगत शुद्ध सात्विक वैदिक उपाय (कोई तांत्रिक या भय-आधारित क्रिया नहीं)","धार्मिक, सरल एवं शास्त्रसम्मत")}
    <div class="book-card" style="background:${t.pureIvory}; border:1.3px solid ${t.templeGold}; border-radius:9px; padding:10px 13px; font-size:8.4px; line-height:1.62; margin-bottom: 9px;">
      ${e.remedies.upayList.slice(0,6).map((o,h)=>`<div style="margin-top:${h===0?0:4.5}px;"><b style="color:${t.saffronDeep};">${h+1}.</b> ${i(At(o))}</div>`).join("")}
    </div>

    ${N("H1c","नवग्रह सात्विक मंत्र एवं दान संदर्भ तालिका","आवश्यकतानुसार जप व दान")}
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
        ${he.map((o,h)=>`
          <tr style="background:${h%2===0?"#FFFDF8":"#FEF6E4"};">
            <td style="font-weight:800; color:${t.cosmicNavy}; padding: 6px 7px; line-height: 1.55;">${i(o.graha)}</td>
            <td style="font-weight:700; color:${t.emerald}; padding: 6px 7px; line-height: 1.65;">${i(o.mantra)}</td>
            <td style="padding: 6px 7px; line-height: 1.5;">${i(o.daan)}</td>
            <td style="font-weight:700; color:${t.saffronDeep}; padding: 6px 7px; line-height: 1.5;">${i(o.day)}</td>
          </tr>`).join("")}
      </tbody>
    </table>
  `;m.push({sectionCode:"H",sectionTag:"खण्ड H : शुद्ध सात्विक वैदिक उपाय",html:gt});const L=[{title:e.predictions.personality.title,body:e.predictions.personality.summary,extra:e.predictions.personality.keyTraits.join(" • ")},{title:e.predictions.career.title,body:e.predictions.career.summary,extra:e.predictions.career.peakYears},{title:e.predictions.wealth.title,body:e.predictions.wealth.summary,extra:e.predictions.wealth.highlights.join(" • ")},{title:e.predictions.marriage.title,body:e.predictions.marriage.summary,extra:`जीवनसाथी स्वभाव: ${e.predictions.marriage.spouseNature}`},{title:e.predictions.education.title,body:e.predictions.education.summary},{title:e.predictions.health.title,body:e.predictions.health.summary,extra:e.predictions.health.careAreas.join(" • ")}],it=`
    ${A("खण्ड H2 : सम्पूर्ण जीवन फलादेश एवं प्रमुख समय-सीमा",l,a)}
    ${N("H2a","जीवन के 6 प्रमुख क्षेत्रों का संतुलित वैदिक मार्गदर्शन",`${e.panchang.lagnaName} लग्न • ${e.panchang.moonRashiName} राशि`)}
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 9px;">
      ${L.map(o=>`
          <div class="book-card" style="background:${t.pureIvory}; border:1.3px solid ${t.templeGold}; border-radius:9px; padding:9px 11px; font-size:8.2px; line-height:1.48;">
            <div style="font-weight:900; color:${t.cosmicNavy}; font-size:9.2px; border-bottom:1px solid ${t.borderMuted}; padding-bottom:3.5px; margin-bottom:4.5px;">
              ✦ ${i(o.title)}
            </div>
            <div style="color:${t.inkPrimary};">${i(o.body)}</div>
            ${o.extra?`<div style="margin-top:4.5px; color:${t.saffronDeep}; font-weight:700; font-size:7.8px;">${i(o.extra)}</div>`:""}
          </div>`).join("")}
    </div>

    ${b&&b.lifeTimeline.length>0?`
          ${N("H2b","प्रमुख जीवन समय-सीमा एवं आवर्तन मील के पत्थर (Life Timeline)","महादशा, गुरु व शनि आवर्तन")}
          <table class="book-table" style="font-size: 7.7px;">
            <thead>
              <tr>
                <th style="width: 15%;">आयु / वर्ष</th>
                <th style="width: 33%;">चरण शीर्षक</th>
                <th style="width: 52%;">संक्षिप्त मार्गदर्शन</th>
              </tr>
            </thead>
            <tbody>
              ${b.lifeTimeline.filter(o=>o.phaseType!=="ANTARDASHA").slice(0,7).map((o,h)=>`
                  <tr style="background:${o.isCurrent?t.emeraldSoft:h%2===0?"#FFFDF8":"#FEF6E4"};">
                    <td style="font-family:monospace; font-weight:800;">${o.startAge}–${o.endAge} वर्ष</td>
                    <td style="font-weight:800; color:${o.isCurrent?t.emerald:t.cosmicNavy};">${i(o.titleHi)}</td>
                    <td>${i(o.summaryHi)}</td>
                  </tr>`).join("")}
            </tbody>
          </table>`:""}
  `;m.push({sectionCode:"H2",sectionTag:"खण्ड H : जीवन फलादेश व समयरेखा",html:it});const Z=`
    ${A("खण्ड I : आचार्य आशीर्वचन, प्रामाणिकता मुहर एवं समापन",l,a)}
    ${N("I1","जीवन के प्रबल पक्ष एवं विशेष सावधानियाँ","व्यक्तिगत सारांश")}
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 12px;">
      <div class="book-card" style="background: ${t.emeraldSoft}; border: 1.3px solid #10B981; border-radius: 9px; padding: 10px 12px; font-size: 8.5px; line-height: 1.55;">
        <div style="font-weight: 900; color: #065F46; font-size: 9.5px; margin-bottom: 5px;">✓ प्रमुख शक्तियाँ (Strengths)</div>
        ${(e.remedies.strengths.length>0?e.remedies.strengths:["लग्नेश व त्रिकोण भावों की शुभ स्थिति से जीवन में निरंतर उन्नति।"]).slice(0,5).map(o=>`<div style="margin-top:3px;">• ${i(o)}</div>`).join("")}
      </div>
      <div class="book-card" style="background: ${t.saffronSoft}; border: 1.3px solid ${t.templeGold}; border-radius: 9px; padding: 10px 12px; font-size: 8.5px; line-height: 1.55;">
        <div style="font-weight: 900; color: ${t.saffronDeep}; font-size: 9.5px; margin-bottom: 5px;">✦ विवेकपूर्ण सावधानियाँ (Precautions)</div>
        ${(e.remedies.precautions.length>0?e.remedies.precautions:["महत्वपूर्ण निर्णयों में धैर्य, सात्विक आहार और दशा-गोचर का ध्यान रखें।"]).slice(0,5).map(o=>`<div style="margin-top:3px;">• ${i(o)}</div>`).join("")}
      </div>
    </div>

    ${N("I2","आचार्य पण्डित शशांक शर्मा का आशीर्वचन एवं गणना प्रामाणिकता प्रमाण-पत्र","PANDIT JI ONLINE")}
    <div class="book-card" style="background: ${t.pureIvory}; border: 1.8px solid ${t.templeGold}; border-radius: 11px; padding: 14px 16px; text-align: center;">
      <div style="display: flex; justify-content: center; margin-bottom: 8px;">
        ${at(56,a,2.5)}
      </div>
      <div style="font-size: 11.5px; font-weight: 900; color: ${t.saffronDeep};">
        ॥ स्वस्ति प्रजाभ्यः परिपालयन्तां न्यायेन मार्गेण महीं महीशाः ॥
      </div>
      <div style="font-size: 9px; color: ${t.inkPrimary}; line-height: 1.65; margin-top: 8px; text-align: justify;">
        प्रिय यजमान <b>${i(e.input.name)}</b> जी, यह सम्पूर्ण 30-पृष्ठीय बृहत् वैदिक जन्म कुंडली पुस्तक पूर्ण खगोलीय शुद्धता — <b>दृक् गणित लाहिड़ी चित्रा पक्ष अयनांश (${i(e.input.ayanamsaDMS)}), True Node, वास्तविक MC आधारित श्रीपति भाव चलित, BPHS सत्यापित 16 षोडशवर्ग, 6-अंगी पाराशरी षड्बल, 337-बिंदु अष्टकवर्ग एवं विंशोत्तरी/योगिनी/जैमिनी दशा प्रणाली</b> पर आधारित है। वैदिक ज्योतिष हमें जीवन के संभावित अवसरों और चुनौतियों का प्रकाश दिखाता है; सद्कर्म, धैर्य और ईश्वर-भक्ति से प्रत्येक समय को मंगलमय बनाया जा सकता है।
      </div>
      <div style="margin-top: 10px; padding-top: 9px; border-top: 1px dashed ${t.templeGold}; display: flex; align-items: center; justify-content: space-between; font-size: 8.4px; color: ${t.cosmicNavy};">
        <div style="text-align: left;">
          <b>प्रमाणित संस्थान:</b> पण्डित जी ऑनलाइन (PANDIT JI ONLINE)<br/>
          <b>वेबसाइट:</b> ${xt(t.saffronDeep)}
        </div>
        <div style="text-align: right;">
          <b>${i(T.founderHi)}</b><br/>
          <span style="color:${t.inkMuted};">${i(T.locationHi)}</span>
        </div>
      </div>
    </div>

    ${Xt(s,c)}
  `;return m.push({sectionCode:"I",sectionTag:"खण्ड I : आशीर्वचन एवं समापन",html:Z}),m}const zt=`
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
    font-family: ${P};
    font-synthesis: none;
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
    padding: 10px 0;
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
`;function It(e,s,n){return e.isCover?`
      <div class="vedic-book-a4-page" style="padding: 16px 18px;">
        <div class="vedic-book-a4-body--cover">${e.html}</div>
      </div>
    `:`
    <div class="vedic-book-a4-page">
      <div class="vedic-book-a4-body${e.html.includes("book-banner-slot")||e.html.includes('class="book-banner"')?" vedic-book-a4-body--has-banner":""}">${e.html}</div>
      <div class="vedic-book-a4-footer">
        <span>पण्डित जी ऑनलाइन (PANDIT JI ONLINE) • ${i(T.founderHi)} • ${xt(t.inkMuted)}</span>
        <span style="color:${t.cosmicNavy}; font-weight:800; white-space: nowrap;">पृष्ठ ${s} / ${n}</span>
      </div>
    </div>
  `}function Lt(e,s){if(s==="hi")return;const r=(e.ownerDocument||document).createTreeWalker(e,NodeFilter.SHOW_TEXT),c=[];let g;for(;g=r.nextNode();)g.nodeType===Node.TEXT_NODE&&g.nodeValue&&/[\u0900-\u097F]/.test(g.nodeValue)&&c.push(g);for(const a of c)a.nodeValue&&(a.nodeValue=_t(a.nodeValue,s))}async function ge(e){const s=e.ownerDocument||document,n=Array.from(e.querySelectorAll("svg"));for(const r of n)try{const c=parseFloat(r.getAttribute("width")||"240")||240,g=parseFloat(r.getAttribute("height")||"240")||240,a=r.cloneNode(!0);a.setAttribute("xmlns","http://www.w3.org/2000/svg"),a.setAttribute("width",String(c)),a.setAttribute("height",String(g));const l=new XMLSerializer().serializeToString(a),p="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(l),d=await new Promise(y=>{const b=new Image,m=window.setTimeout(()=>y(""),1800);b.onload=()=>{window.clearTimeout(m);try{const $=document.createElement("canvas");$.width=Math.max(120,Math.round(c*2.6)),$.height=Math.max(120,Math.round(g*2.6));const F=$.getContext("2d");if(F){F.fillStyle=t.warmIvory,F.fillRect(0,0,$.width,$.height),F.drawImage(b,0,0,$.width,$.height);const w=$.toDataURL("image/png");$.width=0,$.height=0,y(w);return}}catch{}y("")},b.onerror=()=>{window.clearTimeout(m),y("")},b.src=p});if(d){const y=s.createElement("img");y.src=d,y.width=c,y.height=g,y.style.cssText=`width:${c}px;height:${g}px;display:block;margin:0 auto;`,r.parentNode?.replaceChild(y,r)}}catch{}}function me(e,s,n,r,c,g){const a=Math.max(0,Math.min(g,r/2,c/2));e.beginPath(),e.moveTo(s+a,n),e.lineTo(s+r-a,n),e.arcTo(s+r,n,s+r,n+a,a),e.arcTo(s+r,n+c,s+r-a,n+c,a),e.lineTo(s+a,n+c),e.arcTo(s,n+c,s,n+c-a,a),e.arcTo(s,n,s+a,n,a),e.closePath()}function ye(e){const s=e.ownerDocument||document,n=Array.from(e.querySelectorAll(".book-banner-badge, .book-pill, .book-banner-pill"));if(!n.length)return;const r=4;for(const c of n)try{const g=(c.textContent||"").replace(/\s+/g," ").trim();if(!g)continue;const a=c.classList.contains("book-banner-badge"),l=s.defaultView?.getComputedStyle(c),p=c.getBoundingClientRect(),d=Math.max(7,parseFloat(l?.fontSize||(a?"8":"8.2"))||8),y=l?.fontWeight||"800",b=l?.color||"#FFFFFF",m=l?.whiteSpace==="nowrap";if(!a&&!m&&p.height>d*3.6)continue;const $=c.getAttribute("data-badge-bg")||(l&&l.backgroundColor&&l.backgroundColor!=="rgba(0, 0, 0, 0)"?l.backgroundColor:a?"#FF6F00":"rgba(15, 23, 42, 0.9)"),F=parseFloat(l?.borderTopWidth||"0")||0,w=l?.borderTopColor||"transparent",v=parseFloat(l?.borderTopLeftRadius||"999")||0,D=Math.max(6,Math.round(parseFloat(l?.paddingLeft||(a?"10":"9"))||9)),k=s.createElement("canvas"),z=k.getContext("2d");if(!z)continue;const H=`${y} ${d}px ${P}`;z.font=H;const R=z.measureText(g),j=Math.ceil(Math.max(R.width,(R.actualBoundingBoxLeft||0)+(R.actualBoundingBoxRight||0))),E=a?Math.max(19,Math.round(p.height||19)):Math.max(19,Math.round(p.height||d+11)),U=Math.max(40,j+28),Y=E+18;k.width=Math.round(U*r),k.height=Math.round(Y*r),z.save(),z.scale(r,r),z.font=H,z.fillStyle=b,z.textAlign="center",z.textBaseline="middle",z.fillText(g,U/2,Y/2),z.restore();let O=k.width,W=-1,I=k.height,M=-1;try{const it=z.getImageData(0,0,k.width,k.height).data,Z=k.width,o=k.height;for(let h=0;h<o;h++){const S=h*Z*4;for(let x=0;x<Z;x++)it[S+x*4+3]>20&&(x<O&&(O=x),x>W&&(W=x),h<I&&(I=h),h>M&&(M=h))}}catch{}const st=W>=O&&M>=I,pt=st?(W-O+1)/r:j,ht=st?(M-I+1)/r:d*1.25,V=Math.max(E,Math.ceil(ht+7+F*2)),X=Math.ceil(Math.max(pt+D*2+F*2,a?0:p.width||0)),K=s.createElement("canvas");K.width=Math.round(X*r),K.height=Math.round(V*r);const B=K.getContext("2d");if(!B){k.width=0,k.height=0;continue}B.save(),B.scale(r,r);const tt=F>0?F/2:0,et=v>=V/2?V/2:v;if(me(B,tt,tt,X-tt*2,V-tt*2,Math.max(0,et-tt)),B.fillStyle=$,B.fill(),F>0&&w&&w!=="transparent"&&w!=="rgba(0, 0, 0, 0)"&&(B.lineWidth=F,B.strokeStyle=w,B.stroke()),B.restore(),st){const L=(O+W)/2,it=(I+M)/2,Z=Math.round((K.width-1)/2-L),o=Math.round((K.height-1)/2-it);B.drawImage(k,Z,o)}else{B.save(),B.scale(r,r),B.font=H,B.fillStyle=b,B.textAlign="center",B.textBaseline="alphabetic";const L=B.measureText(g),it=L.actualBoundingBoxAscent>0?L.actualBoundingBoxAscent:d*.72,Z=L.actualBoundingBoxDescent>=0?L.actualBoundingBoxDescent:d*.2;B.fillText(g,X/2,V/2+(it-Z)/2),B.restore()}const gt=K.toDataURL("image/png");if(k.width=0,k.height=0,K.width=0,K.height=0,gt){const L=s.createElement("img");L.className=a?"book-banner-badge-img":"book-pill-img",L.src=gt,L.alt=g,L.width=X,L.height=V,a?L.style.cssText=`width:${X}px;height:${V}px;display:block;align-self:flex-start;margin-bottom:5px;flex-shrink:0;`:L.style.cssText=`width:${X}px;height:${V}px;display:inline-block;vertical-align:middle;flex-shrink:0;`,c.parentNode?.replaceChild(L,c)}}catch{}}async function jt(e){await Kt(e,1600)}async function be(e){const s=Array.from(e.querySelectorAll("img"));await Promise.all(s.map(n=>new Promise(r=>{const c=()=>{typeof n.decode=="function"?n.decode().then(()=>r()).catch(()=>r()):r()};if(n.complete&&n.naturalWidth>0){c();return}const g=window.setTimeout(r,900);n.onload=()=>{window.clearTimeout(g),c()},n.onerror=()=>{window.clearTimeout(g),r()}})))}async function fe(e,s={}){const n={cleanMode:!!s.cleanMode,chartStyle:s.chartStyle||"north",language:s.language||"hi"},r=await ut(),c=Tt(e,r,n),g=`PanditJiOnline_Kundali_Book_${Mt(e.input.name)}`,a=c.map((m,$)=>`
      <section class="vector-print-page${!m.isCover&&(m.html.includes("book-banner-slot")||m.html.includes('class="book-banner"'))?" vector-print-page--has-banner":""}">
        ${m.html}
        ${m.isCover?"":`<div style="margin-top: 8px; border-top: 1px solid ${t.templeGold}; padding-top: 4px; display: flex; align-items: center; justify-content: space-between; font-size: 7.7px; font-weight: 700; color: ${t.inkMuted};">
                 <span>पण्डित जी ऑनलाइन (PANDIT JI ONLINE) • ${i(T.founderHi)} • ${xt(t.inkMuted)}</span>
                 <span style="white-space: nowrap;">पृष्ठ ${$+1} / ${c.length}</span>
               </div>`}
      </section>`).join(""),l=`<!DOCTYPE html>
<html lang="${n.language==="hi"?"hi":"en"}">
<head>
  <meta charset="utf-8" />
  <title>${i(g)}</title>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;600;700;800;900&display=swap" />
  <style>${zt}</style>
</head>
<body>
  <div id="vector-book-root">${a}</div>
</body>
</html>`,p=document.getElementById("panditji-vector-print-iframe");p&&p.remove();const d=document.createElement("iframe");d.id="panditji-vector-print-iframe",d.style.cssText="position:fixed;right:0;bottom:0;width:0;height:0;border:0;opacity:0;pointer-events:none;",document.body.appendChild(d);const y=d.contentDocument||d.contentWindow?.document;if(!y)return!1;y.open(),y.write(l),y.close();const b=y.getElementById("vector-book-root");return b&&n.language!=="hi"&&Lt(b,n.language),await jt(y),setTimeout(()=>{try{d.contentWindow?.focus(),d.contentWindow?.print()}catch{}setTimeout(()=>{document.body.contains(d)&&document.body.removeChild(d)},6e4)},450),!0}function Be(){typeof window>"u"||(ut().catch(()=>{}),Bt().catch(()=>{}))}function yt(){return new Promise(e=>{typeof window<"u"&&typeof window.requestAnimationFrame=="function"?window.requestAnimationFrame(()=>window.setTimeout(e,16)):window.setTimeout(e,16)})}function xe(e,s){let n=Math.max(1,e),r=4,c=4,g=null;const a=document.createElement("div");a.id="panditji-book-pdf-progress",a.style.cssText=`
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
    font-family: ${P};
    color: #FFF9ED;
  `,a.innerHTML=`
    <div style="display:flex; align-items:center; gap:10px;">
      ${at(34,s,1.8)}
      <div style="flex:1; min-width:0;">
        <div style="font-size:12px; font-weight:800; color:#FDE68A;">4K वैदिक कुंडली पुस्तक तैयार हो रही है</div>
        <div id="pj-pdf-prog-text" style="font-size:11px; color:#E2E8F0; margin-top:2px; font-weight:700;">कुंडली डेटा व QR तैयार हो रहे हैं...</div>
      </div>
      <div id="pj-pdf-prog-pct" style="font-size:12px; font-weight:900; color:#FBBF24; font-family:monospace;">4%</div>
    </div>
    <div style="margin-top:9px; width:100%; height:7px; background:rgba(255,255,255,0.14); border-radius:999px; overflow:hidden; border:1px solid rgba(212,175,55,0.45);">
      <div id="pj-pdf-prog-fill" style="width:4%; height:100%; background:linear-gradient(90deg, ${t.saffron}, ${t.templeGold}, #FDE047); border-radius:999px; transition:width 180ms ease-out;"></div>
    </div>
  `;const l=(m,$)=>{const F=Math.max(r,Math.min(100,Math.round(m)));r=F;const w=a.querySelector("#pj-pdf-prog-text"),v=a.querySelector("#pj-pdf-prog-pct"),D=a.querySelector("#pj-pdf-prog-fill");$&&w&&(w.textContent=$),v&&(v.textContent=`${F}%`),D&&(D.style.width=`${F}%`)},p=()=>{g!==null&&(window.clearInterval(g),g=null)},d=()=>{g===null&&(g=window.setInterval(()=>{r<c&&l(r+1)},280))},y=(m,$,F)=>{l(m,$),c=Math.max(r,Math.min(99,Math.round(F??m))),c>r&&d()};return{root:a,setStage:y,updatePage:(m,$,F)=>{$>0&&(n=$);const w=28+(m-1)/n*68,v=28+m/n*68;if(F==="start"){const D=Math.max(r,Math.round(w+.35*(v-w))),k=Math.min(96,Math.max(D,Math.floor(v)));y(D,`पृष्ठ ${m} / ${n} तैयार हो रहा है...`,k)}else{const D=Math.min(96,Math.round(v));y(D,`पृष्ठ ${m} / ${n} तैयार`,D)}},stop:p}}function ue(e,s,n,r,c,g,a){const l=document.getElementById("panditji-book-pdf-ready-modal");l&&l.remove();const p=(e.size/(1024*1024)).toFixed(2),d=document.createElement("div");d.id="panditji-book-pdf-ready-modal",d.style.cssText="position:fixed;inset:0;z-index:2147483647;background:rgba(15,23,42,0.82);backdrop-filter:blur(5px);display:flex;align-items:center;justify-content:center;padding:16px;";const y=document.createElement("div");y.style.cssText=`width:100%;max-width:440px;background:${t.warmIvory};border:2.5px solid ${t.templeGold};border-radius:18px;padding:20px;box-shadow:0 24px 60px rgba(0,0,0,0.55);color:${t.cosmicNavy};font-family:${P};text-align:center;`,y.innerHTML=`
    <div style="display:flex; justify-content:center; margin-bottom:8px;">
      ${at(52,a,2.5)}
    </div>
    <div style="font-size:16px;font-weight:900;color:${t.cosmicNavy};">4K बृहत् कुंडली पुस्तक PDF तैयार है</div>
    <div style="font-size:11.5px;color:${t.saffronDeep};font-weight:700;margin-top:4px;">
      ${i(r.input.name)} • ${g} पृष्ठ • ${p} MB • ${c.cleanMode?"Clean PDF मोड":"ब्रांडेड वैदिक पुस्तक"}
    </div>
    <div style="font-size:10.5px;color:${t.inkMuted};margin-top:6px;line-height:1.5;">
      यदि ऑटो-डाउनलोड शुरू न हुआ हो, तो नीचे दिए गए बटन पर टैप करके तुरंत सेव या WhatsApp पर शेयर करें।
    </div>
    <div style="display:flex;flex-direction:column;gap:8px;margin-top:14px;">
      <a id="pj-book-dl-link" href="${s}" download="${i(n)}" style="display:block;width:100%;padding:11px 14px;border-radius:12px;background:linear-gradient(90deg,${t.saffron},${t.templeGold});color:#FFFFFF;font-weight:900;font-size:13px;text-decoration:none;box-shadow:0 6px 16px rgba(255,111,0,0.3);">
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
  `,d.appendChild(y),document.body.appendChild(d);const b=()=>{d.remove(),setTimeout(()=>URL.revokeObjectURL(s),6e4)};y.querySelector("#pj-book-close-btn")?.addEventListener("click",b),d.addEventListener("click",m=>{m.target===d&&b()}),y.querySelector("#pj-book-share-btn")?.addEventListener("click",async()=>{try{const m=new File([e],n,{type:"application/pdf"});if(navigator.canShare&&navigator.canShare({files:[m]})){await navigator.share({files:[m],title:`${r.input.name} — Janam Kundali Book`,text:`पण्डित जी ऑनलाइन बृहत् जन्म कुंडली पुस्तक (${T.websiteDisplay})`}),b();return}}catch{}y.querySelector("#pj-book-dl-link")?.click()}),y.querySelector("#pj-book-vector-btn")?.addEventListener("click",()=>{b(),fe(r,c)})}async function Me(e,s={}){const n={cleanMode:!!s.cleanMode,chartStyle:s.chartStyle||"north",language:s.language||"hi"},c=xe(30,Pt());document.body.appendChild(c.root),c.setStage(8,"PDF इंजन व QR कोड तैयार हो रहे हैं...",18),await yt();let g,a=null,l=null;try{const[b,m]=await Promise.all([ut(),Bt()]);g=b,a=m.jsPDF,l=m.html2canvas}catch(b){throw c.stop(),document.body.contains(c.root)&&document.body.removeChild(c.root),b}if(typeof a!="function"||typeof l!="function")throw c.stop(),document.body.contains(c.root)&&document.body.removeChild(c.root),new Error("PDF libraries failed to initialize");c.setStage(20,"वैदिक फ़ॉन्ट व लेआउट तैयार हो रहा है...",23);const p=794,d=1123,y=document.createElement("iframe");y.id="panditji-book-pdf-capture-iframe",y.style.cssText=`position:fixed;left:-9999px;top:0;width:${p}px;height:${d}px;border:0;margin:0;padding:0;z-index:-1;pointer-events:none;background:${t.warmIvory};`,document.body.appendChild(y);try{const b=y.contentDocument||y.contentWindow?.document;if(!b)throw new Error("Could not create capture iframe document");b.open(),b.write(`<!DOCTYPE html>
<html lang="hi">
<head>
  <meta charset="utf-8" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;600;700;800;900&display=swap" />
  <style>${zt}</style>
</head>
<body style="margin:0;padding:0;background:${t.warmIvory};">
  <div id="book-pdf-host" style="width:${p}px;height:${d}px;overflow:hidden;"></div>
</body>
</html>`),b.close();const m=b.getElementById("book-pdf-host");if(!m)throw new Error("Book PDF host missing");await jt(b),c.setStage(24,"30 पृष्ठ व उच्च-गुणवत्ता कुंडली चार्ट बन रहे हैं...",27),await yt();const $=Tt(e,g,n,!0);c.setStage(28,`पृष्ठ 1 / ${$.length} तैयार हो रहा है...`,30),await yt();const F=new a({orientation:"portrait",unit:"mm",format:"a4",compress:!0}),v=typeof window<"u"&&(window.innerWidth<768||typeof navigator<"u"&&typeof navigator.hardwareConcurrency=="number"&&navigator.hardwareConcurrency<=4)?1.75:2;for(let E=0;E<$.length;E++){c.updatePage(E+1,$.length,"start"),m.innerHTML=It($[E],E+1,$.length);const U=m.querySelector(".vedic-book-a4-page");if(!U)continue;n.language!=="hi"&&Lt(U,n.language),await ge(U),ye(U),await be(U),await new Promise(I=>setTimeout(I,E===0?20:8));const Y=document.fonts;Y?.ready&&await Y.ready;const O=await l(U,{scale:v,useCORS:!0,allowTaint:!1,imageTimeout:2500,backgroundColor:t.warmIvory,width:p,height:d,windowWidth:p,windowHeight:d,logging:!1,onclone:I=>{Ut(I,".vedic-book-a4-page")}}),W=O.toDataURL("image/jpeg",.85);E>0&&F.addPage(),F.addImage(W,"JPEG",0,0,210,297,void 0,"FAST"),O.width=0,O.height=0,m.innerHTML="",c.updatePage(E+1,$.length,"done")}c.setStage(98,"कुंडली पुस्तक PDF फ़ाइल सेव हो रही है...",99),await yt();const D=Mt(e.input.name),k=n.cleanMode?"_Clean":"",z=`PanditJiOnline_Kundali_Book_${D}${k}.pdf`,H=F.output("arraybuffer"),R=new Blob([H],{type:"application/pdf"}),j=URL.createObjectURL(R);c.setStage(100,"कुंडली पुस्तक PDF तैयार है!");try{const E=document.createElement("a");E.href=j,E.download=z,E.style.display="none",document.body.appendChild(E),E.click(),setTimeout(()=>{document.body.contains(E)&&document.body.removeChild(E)},2e3)}catch{}return ue(R,j,z,e,n,$.length,g.appLogoDataUrl),!0}finally{c.stop(),document.body.contains(y)&&document.body.removeChild(y),document.body.contains(c.root)&&document.body.removeChild(c.root)}}async function Pe(e,s={}){const n={cleanMode:!!s.cleanMode,chartStyle:s.chartStyle||"north",language:s.language||"hi"},r=await ut(),c=Tt(e,r,n),g=c.map((a,l)=>It(a,l+1,c.length));return{pages:c,sharedCss:zt,qrs:r,wrappedDiscretePages:g}}export{Pe as buildKundaliBookPayload,Me as downloadKundaliBookPDF,Be as prewarmKundaliBookPdfAssets,fe as printKundaliBookVectorPDF};
