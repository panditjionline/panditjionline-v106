const zt=(t,i=zt,e=i.f||(i.f=["assets/jspdf.es.min-EKeAfboT.js","assets/vendor-react-GnNhYla_.js"]))=>t.map(s=>e[s]);import{_ as Lt}from"./vendor-react-GnNhYla_.js";import{a as jt,u as Y,s as O,v as V,q as Ae}from"./panchang-core-C9RgGmju.js";import{i as xt,t as U}from"./index-40r_jvcn.js";const Ct={सूर्य:{friends:["चन्द्र","चंद्र","मंगल","गुरु"],neutral:["बुध"],enemies:["शुक्र","शनि","राहु","केतु"]},चन्द्र:{friends:["सूर्य","बुध"],neutral:["मंगल","गुरु","शुक्र","शनि"],enemies:["राहु","केतु"]},चंद्र:{friends:["सूर्य","बुध"],neutral:["मंगल","गुरु","शुक्र","शनि"],enemies:["राहु","केतु"]},मंगल:{friends:["सूर्य","चन्द्र","चंद्र","गुरु"],neutral:["शुक्र","शनि"],enemies:["बुध","राहु","केतु"]},बुध:{friends:["सूर्य","शुक्र","राहु"],neutral:["मंगल","गुरु","शनि"],enemies:["चन्द्र","चंद्र","केतु"]},गुरु:{friends:["सूर्य","चन्द्र","चंद्र","मंगल"],neutral:["शनि","केतु"],enemies:["बुध","शुक्र","राहु"]},शुक्र:{friends:["बुध","शनि","राहु"],neutral:["मंगल","गुरु"],enemies:["सूर्य","चन्द्र","चंद्र","केतु"]},शनि:{friends:["बुध","शुक्र","राहु"],neutral:["गुरु"],enemies:["सूर्य","चन्द्र","चंद्र","मंगल","केतु"]},राहु:{friends:["बुध","शुक्र","शनि"],neutral:["गुरु"],enemies:["सूर्य","चन्द्र","चंद्र","मंगल"]},केतु:{friends:["मंगल","गुरु"],neutral:["बुध","शुक्र","शनि"],enemies:["सूर्य","चन्द्र","चंद्र"]}},Ft={1:"मंगल",2:"शुक्र",3:"बुध",4:"चन्द्र",5:"सूर्य",6:"बुध",7:"शुक्र",8:"मंगल",9:"गुरु",10:"शनि",11:"शनि",12:"गुरु"},He={1:"mars",2:"venus",3:"mercury",4:"moon",5:"sun",6:"mercury",7:"venus",8:"mars",9:"jupiter",10:"saturn",11:"saturn",12:"jupiter"},Ee=["केतु","शुक्र","सूर्य","चन्द्र","मंगल","राहु","गुरु","शनि","बुध"];function R(t){const i=String(t||"गुरु").split(" ")[0].trim();return i==="चंद्र"?"चन्द्र":i}function K(t,i){const e=R(t),s=R(i);if(e===s)return{relation:"स्वग्रह / एक ही स्वामी (अति उत्तम मित्र)",color:"#047857",harmonyNote:"दोनों राशियों/ग्रहों का स्वामी एक ही होने से पूर्ण वैचारिक एवं आत्मिक एकरूपता।",score:2};const r=Ct[e],o=Ct[s],l=r?.friends.includes(s)?1:r?.enemies.includes(s)?-1:0,d=o?.friends.includes(e)?1:o?.enemies.includes(e)?-1:0,p=l+d;return p>=2?{relation:"अति मित्र (Adhi Mitra — सर्वोच्च मैत्री)",color:"#047857",harmonyNote:"परस्पर घनिष्ठ नैसर्गिक मित्रता — दांपत्य में सहज प्रेम, सम्मान व सहयोग।",score:p}:p===1?{relation:"मित्र + सम (Mitra — शुभ समन्वय)",color:"#047857",harmonyNote:"एक पक्ष मित्र व दूसरा सम होने से गृहस्थ जीवन में उत्तम सामंजस्य।",score:p}:p===0?{relation:"सम भाव (Neutral — संतुलित संबंध)",color:"#b45309",harmonyNote:"मध्यम/सम संबंध — आपसी संवाद एवं समझदारी से सुखद निर्वाह।",score:p}:{relation:"वैचारिक भिन्नता (शांति उपाय कल्पनीय)",color:"#be123c",harmonyNote:"स्वाभाविक दृष्टिकोण में अंतर — धैर्य एवं इष्ट आराधना से सामंजस्य स्थापित करें।",score:p}}function it(t,i){const e=String(t||"").trim();return e?e.includes(i)?e:`${e} ${i}`:i}function At(t,i){const e=t.navamsaChart?.[0],s=e?.rashiNumber||t.panchang.lagnaNumber||1,r=e?.rashiName||t.phase1Astronomy?.shodashavarga?.find(l=>l.spec.id==="D9")?.ascendantRashiNameHi||i,o=Ft[s]||"गुरु";return{rashiName:r,rashiNumber:s,lordHi:o}}function Ht(t){const i=Ae.findIndex(e=>e===t||t.includes(e.split(" ")[0]));return Ee[(i>=0?i:0)%9]}function Et(t,i){const e=V(t.id,i);return e.isDebilitated&&e.isCancelled?'<span style="color:#047857;font-size:7.6px;font-weight:700;">अवस्था: नीच (नीचभंग युक्त)</span>':e.isDebilitated?'<span style="color:#be123c;font-size:7.6px;font-weight:700;">अवस्था: नीच (Debilitated)</span>':t.isExalted||t.dignity.includes("स्वगृही")?`<span style="color:#047857;font-size:7.6px;font-weight:700;">अवस्था: ${a(t.dignity)}</span>`:`<span style="color:#475569;font-size:7.6px;">अवस्था: ${a(t.dignity)}</span>`}function G(t,i){if(!t)return"संतुलित";const e=V(t.id,i);return e.isDebilitated&&e.isCancelled?"नीचभंग युक्त (सबल)":e.isDebilitated?"नीचस्थ (उपाय अपेक्षित)":t.isExalted?"उच्चस्थ (अति बली)":t.dignity.includes("स्वगृही")?"स्वगृही (बली)":t.dignity.includes("मित्र")?"मित्र राशि में शुभ":"मध्यम/सम बल"}function C(t,i){const e=t.lagnaChart?.[i-1],s=e?.rashiNumber||(t.panchang.lagnaNumber+i-2)%12+1,r=e?.rashiName?.split(" ")[0]||"मेष",o=Ft[s]||"गुरु",l=He[s]||"jupiter",d=t.planets.find(m=>m.id===l),p=d?V(d.id,t):{isDebilitated:!1,isCancelled:!1},c=d?[1,2,4,5,7,9,10,11].includes(d.houseInLagna):!1,h=!!(d&&(d.isExalted||d.dignity.includes("स्वगृही")||d.dignity.includes("मित्र")||p.isCancelled||c)&&!(p.isDebilitated&&!p.isCancelled)),x=d?`${o} (${Y(d.houseInLagna)}, ${G(d,t)})`:`${o}`;return{rashiName:r,lordHi:o,lordPlanet:d,isStrong:h,label:x}}function Be(t,i){const e=new Date().getFullYear(),s=f=>{const N=f.mahadashas||[],S=N.filter(z=>z.endYear>=e&&z.startYear<=e+12);if(S.length>0)return S.slice(0,2);const T=N.find(z=>z.isCurrent);return T?[T]:N.slice(0,2)},r=(f,N)=>{const S=R(f.planet),T=N.planets.find(F=>R(F.hindiName)===S);let z=0;if(["गुरु","शुक्र","बुध","चन्द्र"].includes(S)&&(z+=2),T){const F=V(T.id,N);(T.isExalted||T.dignity.includes("स्वगृही")||F.isCancelled)&&(z+=2),[1,2,4,5,7,9,10,11].includes(T.houseInLagna)&&(z+=2),F.isDebilitated&&!F.isCancelled&&(z-=2)}return z},o=s(t),l=s(i),d=t.mahadashas.find(f=>f.isCurrent)||o[0],p=i.mahadashas.find(f=>f.isCurrent)||l[0],c=o.find(f=>f!==d),h=l.find(f=>f!==p),x=d?r(d,t):1,m=p?r(p,i):1,u=c?r(c,t):-1,v=h?r(h,i):-1,y=d?`${d.planet.split(" ")[0]}${d.currentAntardasha?`–${d.currentAntardasha.split(" ")[0]}`:""} (${Math.floor(d.startYear)}–${Math.floor(d.endYear)})`:"शुभ महादशा",g=p?`${p.planet.split(" ")[0]}${p.currentAntardasha?`–${p.currentAntardasha.split(" ")[0]}`:""} (${Math.floor(p.startYear)}–${Math.floor(p.endYear)})`:"शुभ महादशा",$=x+m,w=Math.min(c?Math.ceil(c.startYear):e+3,h?Math.ceil(h.startYear):e+3);if($>=5){const f=Math.min(Math.max(e+4,Math.floor(Math.min(d?.endYear||e+5,p?.endYear||e+5))),e+6);return{windowText:`${e}–${f} (तत्काल प्रभाव से शुभ स्वर्ण काल)`,detailText:`वर की वर्तमान ${y} तथा वधू की ${g} दोनों सकारात्मक हैं — विवाह के प्रथम १–४ वर्षों में ही करियर, गृहस्थ स्थायित्व व भाग्योदय की स्पष्ट गति दिखेगी।`}}if(u>x||v>m){const f=Math.max(e+1,Math.min(w,e+4)),N=f+4,S=c&&u>x?`वर की आगामी ${c.planet.split(" ")[0]} महादशा (${Math.ceil(c.startYear)} से)`:h?`वधू की आगामी ${h.planet.split(" ")[0]} महादशा (${Math.ceil(h.startYear)} से)`:`${f} से आगामी अंतरदशा`;return{windowText:`${f}–${N} (दशा परिवर्तन उपरांत विशेष भाग्योदय)`,detailText:`वर्तमान में वर (${y}) व वधू (${g}) की दशाएं नींव तैयार कर रही हैं; ${S} प्रारंभ होते ही आर्थिक उन्नति, संतान सुख व गृहस्थ समृद्धि में तीव्र उछाल आएगा।`}}const b=e+1,k=e+5;return{windowText:`${b}–${k} (क्रमिक उन्नति व स्थिर भाग्योदय)`,detailText:`वर की ${y} एवं वधू की ${g} में शुभ अंतरदशाओं (गुरु/शुक्र/बुध) के संयोग से विवाह के १२–१८ माह बाद से निरंतर प्रगति, गृह-वाहन सुख व पारिवारिक स्थायित्व प्राप्त होगा।`}}function Bt(t){const i=t.boyKundali||jt(t.boyName||"वर",t.boyDob||"1996-03-10",t.boyTime||"10:55",t.boyPlace||"रुद्रपुर, उत्तराखण्ड"),e=t.girlKundali||jt(t.girlName||"वधू",t.girlDob||"1998-11-15",t.girlTime||"14:15",t.girlPlace||"रुद्रपुर, उत्तराखण्ड"),s=t.deepMatchInsights,r=At(i,t.boyRashi),o=At(e,t.girlRashi),l=`वर: <b style="color:#7c2d12;">${a(t.boyName)}</b> (${a(t.boyRashi)}) &nbsp;&bull;&nbsp; वधू: <b style="color:#7c2d12;">${a(t.girlName)}</b> (${a(t.girlRashi)})`,d=t.koots[0],p=t.koots[1],c=t.koots[2],h=t.koots[3],x=t.koots.find(n=>n.hindiName.includes("मैत्री")||n.name.includes("Maitri"))||t.koots[4],m=t.koots.find(n=>n.hindiName.includes("गण")||n.name.includes("Gana"))||t.koots[5],u=t.koots.find(n=>n.hindiName.includes("भकूट")||n.name.includes("Bhakoot"))||t.koots[6],v=t.koots.find(n=>n.hindiName.includes("नाड़ी")||n.name.includes("Nadi"))||t.koots[7],y=d?.obtainedPoints??0,g=p?.obtainedPoints??0,$=c?.obtainedPoints??0,w=h?.obtainedPoints??0,b=x?.obtainedPoints??0,k=m?.obtainedPoints??0,f=u?.obtainedPoints??0,N=v?.obtainedPoints??0,S=N===0,T=f===0,z=k<5,F=t.boyRashi===t.girlRashi&&t.boyNakshatra!==t.girlNakshatra,ft=t.boyNakshatra===t.girlNakshatra&&t.boyPada!==t.girlPada,Q=S&&(F||ft),Z=R(t.boyRashiLord)===R(t.girlRashiLord)||b>=4,ut=K(t.boyRashiLord,t.girlRashiLord),A=K(i.panchang.lagnaLord,e.panchang.lagnaLord),tt=K(r.lordHi,o.lordHi),yt=Ht(t.boyNakshatra),mt=Ht(t.girlNakshatra),Ut=K(yt,mt),$t=t.manglikStatus.boyManglik?"#be123c":t.manglikStatus.boyRawManglik?"#b45309":"#047857",wt=t.manglikStatus.girlManglik?"#be123c":t.manglikStatus.girlRawManglik?"#b45309":"#047857",Kt=t.manglikStatus.boyMarsHouseVenus??t.manglikStatus.boyMarsHouseMoon,Gt=t.manglikStatus.girlMarsHouseVenus??t.manglikStatus.girlMarsHouseMoon,st=it(m?.boyValue,"गण"),lt=it(m?.girlValue,"गण"),vt=it(v?.boyValue,"नाड़ी"),kt=it(v?.girlValue,"नाड़ी"),Jt=`
    ${E("बृहत् ३६ गुण मिलान एवं वैदिक विवाह मेलापक महा-पत्रिका (7-Page Report)","दृक् गणित, लाहिड़ी चित्रापक्ष अयनांश एवं बृहत् पाराशर होरा शास्त्र पर आधारित",l)}

    <div style="background: linear-gradient(90deg, #fff6e0 0%, #fde8bf 100%); border: 2px solid #b45309; border-radius: 6px; padding: 7px 12px 9px 12px; margin-bottom: 8px; width: 100%; box-sizing: border-box;">
      <table style="width: 100%; table-layout: fixed; border-collapse: collapse;">
        <tr>
          <td style="width: 72%; vertical-align: middle; text-align: left; padding-right: 10px;">
            <div style="font-size: 9px; color: #9a3412; font-weight: 800; letter-spacing: 0.3px;">अष्टकूट ३६ गुण मिलान सर्वोच्च निर्णय (Overall Matchmaking Verdict)</div>
            <div style="font-size: 13px; font-weight: 900; color: #7c2d12; margin-top: 2px; line-height: 1.3;">
              ${a(t.overallVerdict)} &bull; <span style="color: #047857;">${t.compatibilityPercentage}% वैवाहिक अनुकूलता</span>
            </div>
            <div style="font-size: 8.6px; color: #1e293b; margin-top: 2.5px; line-height: 1.35;">
              ${a(t.verdictDescription)}
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

    ${M("१. वर एवं वधू का संपूर्ण जन्म पंचांग व ज्योतिषीय विवरण (Groom & Bride Astro Profile)","पृष्ठ १ : मुख्य विवरण")}
    <div style="display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: 10px; align-items: stretch; width: 100%; margin-bottom: 8px; box-sizing: border-box;">
      <div style="min-width: 0; width: 100%; height: 100%; background: #fffdf9; border: 1.5px solid #d97706; border-radius: 6px; padding: 7px 10px 9px 10px; box-sizing: border-box; display: flex; flex-direction: column;">
        <div style="font-size: 10px; font-weight: 900; color: #7c2d12; border-bottom: 1px solid #d97706; padding-bottom: 4px; margin-bottom: 5px;">
          वर पत्रिका विवरण (Groom): ${a(t.boyName)}
        </div>
        <table style="width: 100%; table-layout: fixed; border-collapse: collapse; font-size: 8.3px; font-family: 'Noto Sans Devanagari', 'Nirmala UI', 'Mangal', sans-serif;">
          <colgroup>
            <col style="width: 40%;" />
            <col style="width: 60%;" />
          </colgroup>
          <tr><td style="padding: 2.5px 4px 2.5px 0; color: #9a3412; font-weight: 700; vertical-align: top;">जन्म तिथि व समय:</td><td style="padding: 2.5px 0; color: #1e293b; vertical-align: top;">${a(t.boyDob||i.input.formattedDob)} &bull; ${a(t.boyTime||i.input.formattedTime)}</td></tr>
          <tr><td style="padding: 2.5px 4px 2.5px 0; color: #9a3412; font-weight: 700; vertical-align: top;">जन्म स्थान:</td><td style="padding: 2.5px 0; color: #1e293b; vertical-align: top;">${a(t.boyPlace||i.input.birthPlace)}</td></tr>
          <tr><td style="padding: 2.5px 4px 2.5px 0; color: #9a3412; font-weight: 700; vertical-align: top;">जन्म लग्न व स्वामी:</td><td style="padding: 2.5px 0; color: #047857; font-weight: 700; vertical-align: top;">${a(t.boyLagna)} (${a(i.panchang.lagnaLord)})</td></tr>
          <tr><td style="padding: 2.5px 4px 2.5px 0; color: #9a3412; font-weight: 700; vertical-align: top;">चन्द्र राशि व राशिपति:</td><td style="padding: 2.5px 0; color: #7c2d12; font-weight: 700; vertical-align: top;">${a(t.boyRashi)} (${a(t.boyRashiLord)})</td></tr>
          <tr><td style="padding: 2.5px 4px 2.5px 0; color: #9a3412; font-weight: 700; vertical-align: top;">जन्म नक्षत्र व चरण:</td><td style="padding: 2.5px 0; color: #1e293b; vertical-align: top;">${a(t.boyNakshatra)} (चरण ${t.boyPada})</td></tr>
          <tr><td style="padding: 2.5px 4px 2.5px 0; color: #9a3412; font-weight: 700; vertical-align: top;">वर्ण / वश्य / योनि:</td><td style="padding: 2.5px 0; color: #334155; vertical-align: top;">${a(d?.boyValue)} / ${a(p?.boyValue)} / ${a(h?.boyValue)}</td></tr>
          <tr><td style="padding: 2.5px 4px 2.5px 0; color: #9a3412; font-weight: 700; vertical-align: top;">गण एवं नाड़ी:</td><td style="padding: 2.5px 0; color: #7c2d12; font-weight: 600; vertical-align: top;">${a(st)} &bull; ${a(vt)}</td></tr>
          <tr><td style="padding: 2.5px 4px 2.5px 0; color: #9a3412; font-weight: 700; vertical-align: top;">मांगलिक विचार:</td><td style="padding: 2.5px 0; color: ${$t}; font-weight: 700; line-height: 1.3; vertical-align: top;">${a(t.manglikStatus.boySeverity)} <span style="color:#475569;font-weight:600;">(लग्न से ${Y(t.manglikStatus.boyMarsHouseLagna)})</span></td></tr>
        </table>
      </div>
      <div style="min-width: 0; width: 100%; height: 100%; background: #fffdf9; border: 1.5px solid #d97706; border-radius: 6px; padding: 7px 10px 9px 10px; box-sizing: border-box; display: flex; flex-direction: column;">
        <div style="font-size: 10px; font-weight: 800; color: #7c2d12; border-bottom: 1px solid #d97706; padding-bottom: 4px; margin-bottom: 5px;">
          वधू पत्रिका विवरण (Bride): ${a(t.girlName)}
        </div>
        <table style="width: 100%; table-layout: fixed; border-collapse: collapse; font-size: 8.3px; font-family: 'Noto Sans Devanagari', 'Nirmala UI', 'Mangal', sans-serif;">
          <colgroup>
            <col style="width: 40%;" />
            <col style="width: 60%;" />
          </colgroup>
          <tr><td style="padding: 2.5px 4px 2.5px 0; color: #9a3412; font-weight: 700; vertical-align: top;">जन्म तिथि व समय:</td><td style="padding: 2.5px 0; color: #1e293b; vertical-align: top;">${a(t.girlDob||e.input.formattedDob)} &bull; ${a(t.girlTime||e.input.formattedTime)}</td></tr>
          <tr><td style="padding: 2.5px 4px 2.5px 0; color: #9a3412; font-weight: 700; vertical-align: top;">जन्म स्थान:</td><td style="padding: 2.5px 0; color: #1e293b; vertical-align: top;">${a(t.girlPlace||e.input.birthPlace)}</td></tr>
          <tr><td style="padding: 2.5px 4px 2.5px 0; color: #9a3412; font-weight: 700; vertical-align: top;">जन्म लग्न व स्वामी:</td><td style="padding: 2.5px 0; color: #047857; font-weight: 700; vertical-align: top;">${a(t.girlLagna)} (${a(e.panchang.lagnaLord)})</td></tr>
          <tr><td style="padding: 2.5px 4px 2.5px 0; color: #9a3412; font-weight: 700; vertical-align: top;">चन्द्र राशि व राशिपति:</td><td style="padding: 2.5px 0; color: #7c2d12; font-weight: 700; vertical-align: top;">${a(t.girlRashi)} (${a(t.girlRashiLord)})</td></tr>
          <tr><td style="padding: 2.5px 4px 2.5px 0; color: #9a3412; font-weight: 700; vertical-align: top;">जन्म नक्षत्र व चरण:</td><td style="padding: 2.5px 0; color: #1e293b; vertical-align: top;">${a(t.girlNakshatra)} (चरण ${t.girlPada})</td></tr>
          <tr><td style="padding: 2.5px 4px 2.5px 0; color: #9a3412; font-weight: 700; vertical-align: top;">वर्ण / वश्य / योनि:</td><td style="padding: 2.5px 0; color: #334155; vertical-align: top;">${a(d?.girlValue)} / ${a(p?.girlValue)} / ${a(h?.girlValue)}</td></tr>
          <tr><td style="padding: 2.5px 4px 2.5px 0; color: #9a3412; font-weight: 700; vertical-align: top;">गण एवं नाड़ी:</td><td style="padding: 2.5px 0; color: #7c2d12; font-weight: 600; vertical-align: top;">${a(lt)} &bull; ${a(kt)}</td></tr>
          <tr><td style="padding: 2.5px 4px 2.5px 0; color: #9a3412; font-weight: 700; vertical-align: top;">मांगलिक विचार:</td><td style="padding: 2.5px 0; color: ${wt}; font-weight: 700; line-height: 1.3; vertical-align: top;">${a(t.manglikStatus.girlSeverity)} <span style="color:#475569;font-weight:600;">(लग्न से ${Y(t.manglikStatus.girlMarsHouseLagna)})</span></td></tr>
        </table>
      </div>
    </div>

    ${M("२. वर एवं वधू की लग्न (D-1) एवं नवमांश (D-9) कुंडली चक्र","उत्तर भारतीय हीरक शैली")}
    <table style="width: 100%; table-layout: fixed; border-collapse: separate; border-spacing: 6px 0; margin-bottom: 8px;">
      <tr>
        <td style="width: 25%; vertical-align: top; padding: 0;">
          ${nt(i.lagnaChart,"वर लग्न (D-1)",`${t.boyName} (${t.boyLagna})`,146)}
        </td>
        <td style="width: 25%; vertical-align: top; padding: 0;">
          ${nt(i.navamsaChart,"वर नवमांश (D-9)",`नवांश लग्न: ${r.rashiName}`,146)}
        </td>
        <td style="width: 25%; vertical-align: top; padding: 0;">
          ${nt(e.lagnaChart,"वधू लग्न (D-1)",`${t.girlName} (${t.girlLagna})`,146)}
        </td>
        <td style="width: 25%; vertical-align: top; padding: 0;">
          ${nt(e.navamsaChart,"वधू नवमांश (D-9)",`नवांश लग्न: ${o.rashiName}`,146)}
        </td>
      </tr>
    </table>

    ${M("३. मेलापक महा-पत्रिका कार्यकारी सारांश (Executive Matchmaking Summary)","शास्त्रोक्त निष्कर्ष")}
    <div style="background: #fef8ec; border: 1.5px solid #b45309; border-radius: 6px; padding: 6px 10px 9px 10px; font-size: 8.3px; color: #1e293b; line-height: 1.4;">
      <div><b style="color: #7c2d12;">&bull; अष्टकूट गुण योग:</b> कुल ३६ गुणों में से <b style="color:#047857;">${t.totalScore} गुण (${t.compatibilityPercentage}%)</b> प्राप्त हुए हैं। शास्त्रानुसार १८ से अधिक गुण विवाह हेतु शुभ तथा २४ से अधिक गुण उत्तम कोटि के माने जाते हैं।</div>
      <div style="margin-top: 2.5px;"><b style="color: #7c2d12;">&bull; राशि स्वामी एवं सप्तम भाव समन्वय:</b> ${a(t.planetaryHarmony.rashiLordRelation)} &bull; ${a(t.planetaryHarmony.seventhHouseSummary)}</div>
      <div style="margin-top: 2.5px;"><b style="color: #7c2d12;">&bull; मांगलिक (कुज) व परिहार निर्णय:</b> ${a(t.manglikStatus.description)}</div>
    </div>
  `,Qt=t.koots.map((n,L)=>{const P=n.status==="favorable"?"शुभ / उत्तम":n.status==="moderate"?"मध्यम / परिहार्य":"दोष / विचारणीय",H=n.status==="favorable"?"#047857":n.status==="moderate"?"#b45309":"#be123c",ht=n.hindiName?n.hindiName.replace(/^\d+\.\s*/,`${L+1}. `):`${L+1}. ${n.name}`;return`
        <tr style="background: ${L%2===0?"#fffdf9":"#fef7e6"};">
          <td style="padding: 4.5px 7px 7px 7px; border: 1px solid #d97706; color: #7c2d12; font-weight: 800; font-size: 8.8px; line-height: 1.32; width: 18%;">
            ${a(ht)}<br/>
            <span style="font-size: 7.7px; color: #475569; font-weight: 600;">${a(n.meaning)}</span>
          </td>
          <td style="padding: 4.5px 7px 7px 7px; border: 1px solid #d97706; color: #1e293b; font-weight: 700; font-size: 8.6px; line-height: 1.32; width: 12%;">${a(n.boyValue)}</td>
          <td style="padding: 4.5px 7px 7px 7px; border: 1px solid #d97706; color: #9a3412; font-weight: 700; font-size: 8.6px; line-height: 1.32; width: 12%;">${a(n.girlValue)}</td>
          <td style="padding: 4.5px 7px 7px 7px; border: 1px solid #d97706; color: #334155; text-align: center; font-weight: 700; font-size: 8.8px; width: 8%;">${n.maxPoints}</td>
          <td style="padding: 4.5px 7px 7px 7px; border: 1px solid #d97706; color: #7c2d12; text-align: center; font-weight: 900; font-size: 9.6px; width: 8%;">${n.obtainedPoints}</td>
          <td style="padding: 4.5px 7px 7px 7px; border: 1px solid #d97706; color: ${H}; font-weight: 800; text-align: center; font-size: 8.3px; width: 11%;">${a(P)}</td>
          <td style="padding: 4.5px 7px 7px 7px; border: 1px solid #d97706; color: #1e293b; font-size: 8.3px; line-height: 1.34; width: 31%;">
            ${a(n.verdict)}
            ${n.remedy?`<div style="color:#9a3412;font-size:7.8px;margin-top:2px;"><b>उपाय:</b> ${a(n.remedy)}</div>`:""}
          </td>
        </tr>
      `}).join(""),Zt=`
    ${E("अष्टकूट ३६ गुणों की प्रमाणिक गणना एवं शास्त्रोक्त फल सारणी","पृष्ठ २ : अष्टकूट सारणी",l,!0)}

    ${M("४. अष्टकूट (वर्ण, वश्य, तारा, योनि, मैत्री, गण, भकूट, नाड़ी) ३६ गुण सारणी",`प्राप्त गुण: ${t.totalScore} / 36`)}
    <table style="width: 100%; border-collapse: collapse; margin-bottom: 8px; table-layout: fixed;">
      <thead>
        <tr style="background: #fdecc8;">
          <th style="padding: 4px 7px 7px 7px; border: 1px solid #b45309; color: #7c2d12; font-size: 8.6px; text-align: left; width: 18%;">कूट एवं कारक क्षेत्र</th>
          <th style="padding: 4px 7px 7px 7px; border: 1px solid #b45309; color: #7c2d12; font-size: 8.6px; text-align: left; width: 12%;">वर (${a(t.boyName)})</th>
          <th style="padding: 4px 7px 7px 7px; border: 1px solid #b45309; color: #7c2d12; font-size: 8.6px; text-align: left; width: 12%;">वधू (${a(t.girlName)})</th>
          <th style="padding: 4px 7px 7px 7px; border: 1px solid #b45309; color: #7c2d12; font-size: 8.6px; text-align: center; width: 8%;">पूर्णांक</th>
          <th style="padding: 4px 7px 7px 7px; border: 1px solid #b45309; color: #7c2d12; font-size: 8.6px; text-align: center; width: 8%;">प्राप्तांक</th>
          <th style="padding: 4px 7px 7px 7px; border: 1px solid #b45309; color: #7c2d12; font-size: 8.6px; text-align: center; width: 11%;">निर्णय</th>
          <th style="padding: 4px 7px 7px 7px; border: 1px solid #b45309; color: #7c2d12; font-size: 8.6px; text-align: left; width: 31%;">शास्त्रोक्त फल एवं जीवन पर प्रभाव</th>
        </tr>
      </thead>
      <tbody>
        ${Qt}
        <tr style="background: #fef0c7;">
          <td colspan="3" style="padding: 5px 7px 7px 7px; border: 1px solid #b45309; color: #7c2d12; font-weight: 900; font-size: 9px; text-align: right;">कुल अष्टकूट गुण मिलान योग (Total Ashtakoot Score):</td>
          <td style="padding: 5px 7px 7px 7px; border: 1px solid #b45309; color: #1e293b; font-weight: 900; font-size: 9.2px; text-align: center;">36</td>
          <td style="padding: 5px 7px 7px 7px; border: 1px solid #b45309; color: #7c2d12; font-weight: 900; font-size: 10.2px; text-align: center;">${t.totalScore}</td>
          <td colspan="2" style="padding: 5px 7px 7px 7px; border: 1px solid #b45309; color: #047857; font-weight: 900; font-size: 9px;">${a(t.overallVerdict)} (${t.compatibilityPercentage}% अनुकूलता)</td>
        </tr>
      </tbody>
    </table>

    ${M("५. अष्टकूट श्रेणी वर्गीकरण एवं मुहूर्त चिंतामणि प्रमाण","शास्त्रीय मानदंड")}
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
  `,te=(()=>{if(!z)return`
        <div style="margin-top: 3px; background: #ecfdf5; border-left: 3px solid #047857; padding: 4px 7px; color: #1e293b;">
          <b style="color:#047857;">गण कूट स्थिति (दोष-मुक्त):</b> वर (${a(st)}) एवं वधू (${a(lt)}) में ${k}/6 गुण प्राप्त हैं। गण दोष अनुपस्थित होने से किसी विशेष गण परिहार की आवश्यकता नहीं है।
        </div>
      `;if(Z)return`
        <div style="margin-top: 3px; background: #ecfdf5; border-left: 3px solid #047857; padding: 4px 7px; color: #334155;">
          <b style="color:#047857;">शास्त्रोक्त गण दोष परिहार सिद्ध:</b> <i>“ग्रहमैत्री च राशीनां ताराभकूटशुद्धितः। गणदोषो न वक्तव्यः॥”</i> — राशिपति <b>${a(t.boyRashiLord)}</b> व <b>${a(t.girlRashiLord)}</b> के मध्य <b>${a(ut.relation)}</b> संबंध (मैत्री अंक: <b>${b}/5</b>) होने से गण दोष का शास्त्रसम्मत परिहार पूर्णतः लागू होता है।
        </div>
      `;const n=[];return Ut.score>=1&&n.push(`नक्षत्रेश मैत्री (${yt}–${mt}: शुभ)`),A.score>=1&&n.push(`लग्नेश मैत्री (${i.panchang.lagnaLord}–${e.panchang.lagnaLord}: शुभ)`),tt.score>=1&&n.push(`नवांश लग्नेश समन्वय (${r.lordHi}–${o.lordHi})`),f===7&&N===8&&n.push("भकूट (7/7) व नाड़ी (8/8) पूर्ण शुद्ध"),`
      <div style="margin-top: 3px; background: #fff7ed; border-left: 3px solid #b45309; padding: 4px 7px; color: #334155;">
        <b style="color:#9a3412;">गण दोष मूल्यांकन एवं सामंजस्य मार्गदर्शिका:</b> राशिपति मैत्री (<b>${b}/5</b> — ${a(ut.relation)}) न्यून होने से राशिपति-मैत्री आधारित गण परिहार लागू नहीं होता। ${n.length>0?`हालांकि सहायक सकारात्मक तत्व (<b>${a(n.join(", "))}</b>) दीर्घकालिक स्थायित्व में सहयोगी हैं। `:""}स्वभाव व निर्णय-शैली में अंतर के सामंजस्य हेतु शांत संवाद, धैर्य तथा विवाह पूर्व गणपति अथर्वशीर्ष पाठ एवं शिव-पार्वती अभिषेक श्रेयस्कर रहेगा।
      </div>
    `})(),ee=T?Z?`
        <div style="margin-top: 3px; background: #ecfdf5; border-left: 3px solid #047857; padding: 4px 7px; color: #334155;">
          <b style="color:#047857;">शास्त्रोक्त भकूट परिहार सिद्ध:</b> <i>“एकराश्यधिपत्ये तु मित्रत्वे राश्यधीशयोः। खेटमैत्र्यां भकूटस्थो दोषो नश्यति निश्चितम्॥”</i><br/>
          &bull; <b>निर्णय:</b> वर राशिपति (<b>${a(t.boyRashiLord)}</b>) व वधू राशिपति (<b>${a(t.girlRashiLord)}</b>) परस्पर मित्र/एक (मैत्री: <b>${b}/5</b>) होने से भकूट दोष का पूर्ण परिहार सिद्ध है।
        </div>
      `:`
      <div style="margin-top: 3px; background: #fff1f2; border-left: 3px solid #be123c; padding: 4px 7px; color: #334155;">
        <b style="color:#be123c;">भकूट दोष शांति निर्देश:</b> राशि स्वामियों (<b>${a(t.boyRashiLord)}</b> व <b>${a(t.girlRashiLord)}</b>) में मैत्री न्यून (<b>${b}/5</b>) होने से राशिपति भकूट परिहार लागू नहीं होता। ${tt.score>=1?`नवांश लग्नेश (${a(r.lordHi)}–${a(o.lordHi)}) आंशिक सहयोग दे रहे हैं; `:""}विवाह पूर्व श्री लक्ष्मीनारायण हवन, गौरी-शंकर अभिषेक एवं राशिपति शांति जप अवश्य कराएं।
      </div>
    `:`
        <div style="margin-top: 3px; background: #ecfdf5; border-left: 3px solid #047857; padding: 4px 7px; color: #1e293b;">
          <b style="color:#047857;">भकूट निर्णय (पूर्णतः शुद्ध):</b> वर (${a(t.boyRashi.split(" ")[0])}) एवं वधू (${a(t.girlRashi.split(" ")[0])}) के मध्य शुभ राशि अंतराल होने से <b>7/7 पूर्ण गुण</b> प्राप्त हैं — कोई भकूट दोष उपस्थित नहीं है।
        </div>
      `,ae=s?.extendedKoots?.length?s.extendedKoots.map((n,L)=>{const P=n.status==="शुभ"?"#047857":n.status==="मध्यम"?"#b45309":"#be123c";return`
            <tr style="background: ${L%2===0?"#fffdf9":"#fef7e6"};">
              <td style="padding: 3px 6px 5.5px 6px; border: 1px solid #d97706; color: #7c2d12; font-weight: 800; width: 22%;">${a(n.name)}</td>
              <td style="padding: 3px 6px 5.5px 6px; border: 1px solid #d97706; color: #1e293b; width: 21%;">${a(n.boyDetail)} / ${a(n.girlDetail)}</td>
              <td style="padding: 3px 6px 5.5px 6px; border: 1px solid #d97706; color: ${P}; font-weight: 800; text-align: center; width: 12%;">${a(n.status)}</td>
              <td style="padding: 3px 6px 5.5px 6px; border: 1px solid #d97706; color: #334155; width: 45%;">${a(n.detail)}</td>
            </tr>
          `}).join(""):`
      <tr style="background: #fffdf9;">
        <td style="padding: 3px 6px; border: 1px solid #d97706; color: #7c2d12; font-weight: 800; width: 22%;">१. वर्ण कूट (${y}/1)</td>
        <td colspan="3" style="padding: 3px 6px; border: 1px solid #d97706; color: #1e293b;">वर (${a(d?.boyValue)}) एवं वधू (${a(d?.girlValue)}) — ${a(d?.verdict)}</td>
      </tr>
      <tr style="background: #fef7e6;">
        <td style="padding: 3px 6px; border: 1px solid #d97706; color: #7c2d12; font-weight: 800;">२. वश्य व योनि कूट</td>
        <td colspan="3" style="padding: 3px 6px; border: 1px solid #d97706; color: #1e293b;">वश्य (${g}/2) &bull; तारा (${$}/3) &bull; योनि (${w}/4)</td>
      </tr>
    `,oe=`
    ${E("गण-भकूट परिहार मीमांसा एवं रज्जु, वेध, महेन्द्र, स्त्री-दीर्घ विशेष परीक्षण","पृष्ठ ३ : गण, भकूट व विशेष कूट",l,!0)}

    ${M("६. गण कूट (6 गुण) का विस्तृत स्वभाव एवं परिहार विश्लेषण",`प्राप्त गुण: ${k} / 6`)}
    <div style="background: #fffdf9; border: 1.5px solid #d97706; border-radius: 6px; padding: 6px 10px 8px 10px; margin-bottom: 6px; font-size: 8.2px; color: #1e293b; line-height: 1.38;">
      <table style="width: 100%; table-layout: fixed; border-collapse: collapse; margin-bottom: 4px;">
        <tr style="background: #fef7e6;">
          <td style="padding: 3px 7px; border: 1px solid #d97706; width: 34%;"><b style="color:#7c2d12;">वर का गण:</b> ${a(st)}</td>
          <td style="padding: 3px 7px; border: 1px solid #d97706; width: 34%;"><b style="color:#7c2d12;">वधू का गण:</b> ${a(lt)}</td>
          <td style="padding: 3px 7px; border: 1px solid #d97706; width: 32%;"><b style="color:#7c2d12;">गण अंक:</b> <span style="color:${z?"#be123c":"#047857"};font-weight:900;">${k} / 6 गुण</span></td>
        </tr>
      </table>
      <div><b style="color: #7c2d12;">&bull; गण फलित:</b> ${a(m?.verdict)}</div>
      ${te}
    </div>

    ${M("७. भकूट कूट (7 गुण) एवं द्वादश राशि संबंध व परिहार निर्णय",`प्राप्त गुण: ${f} / 7`)}
    <div style="background: #fffdf9; border: 1.5px solid #d97706; border-radius: 6px; padding: 6px 10px 8px 10px; margin-bottom: 6px; font-size: 8.2px; color: #1e293b; line-height: 1.38;">
      <table style="width: 100%; table-layout: fixed; border-collapse: collapse; margin-bottom: 4px;">
        <tr style="background: #fef7e6;">
          <td style="padding: 3px 7px; border: 1px solid #d97706; width: 35%;"><b style="color:#7c2d12;">वर चन्द्र राशि:</b> ${a(t.boyRashi)} (${a(t.boyRashiLord)})</td>
          <td style="padding: 3px 7px; border: 1px solid #d97706; width: 35%;"><b style="color:#7c2d12;">वधू चन्द्र राशि:</b> ${a(t.girlRashi)} (${a(t.girlRashiLord)})</td>
          <td style="padding: 3px 7px; border: 1px solid #d97706; width: 30%;"><b style="color:#7c2d12;">भकूट अंक:</b> <span style="color:${T?"#be123c":"#047857"};font-weight:900;">${f} / 7 गुण</span></td>
        </tr>
      </table>
      <div><b style="color: #7c2d12;">&bull; भकूट कूट फलित:</b> ${a(u?.verdict)}</div>
      ${ee}
    </div>

    ${M("८. दक्षिण-उत्तर विशेष मेलापक: रज्जु, वेध, महेन्द्र एवं स्त्री-दीर्घ कूट परीक्षा","३६ गुण से आगे सूक्ष्म जांच")}
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
        ${ae}
      </tbody>
    </table>
  `,ie=i.planets.map((n,L)=>{const P=e.planets[L],H=K(n.rashiLord,P?.rashiLord||"गुरु");return`
        <tr style="background: ${L%2===0?"#fffdf9":"#fef7e6"};">
          <td style="padding: 3.5px 6px 6px 6px; border: 1px solid #d97706; color: #7c2d12; font-weight: 800; font-size: 8.3px; width: 15%;">${a(n.hindiName)}</td>
          <td style="padding: 3.5px 6px 6px 6px; border: 1px solid #d97706; color: #1e293b; font-size: 8.2px; width: 22%;">${a(n.rashiName.split(" ")[0])} (स्वामी: <b>${a(n.rashiLord)}</b>)</td>
          <td style="padding: 3.5px 6px 6px 6px; border: 1px solid #d97706; color: #9a3412; font-size: 8.2px; width: 22%;">${P?`${a(P.rashiName.split(" ")[0])} (स्वामी: <b>${a(P.rashiLord)}</b>)`:"—"}</td>
          <td style="padding: 3.5px 6px 6px 6px; border: 1px solid #d97706; color: ${H.color}; font-weight: 800; font-size: 8.2px; width: 21%;">${a(H.relation)}</td>
          <td style="padding: 3.5px 6px 6px 6px; border: 1px solid #d97706; color: #334155; font-size: 8px; width: 20%;">${a(H.harmonyNote)}</td>
        </tr>
      `}).join(""),re=`
    ${E("नाड़ी दोष सूक्ष्म मीमांसा एवं नवग्रह मैत्री (9-Planet Graha Maitri) तुलना","पृष्ठ ४ : नाड़ी एवं ग्रह मैत्री",l,!0)}

    ${M("९. नाड़ी कूट (Nadi Koot — 8 गुण) का विस्तृत आयुर्वेदिक व ज्योतिषीय विश्लेषण",`प्राप्त गुण: ${N} / 8`)}
    <div style="background: #fffdf9; border: 1.5px solid #d97706; border-radius: 6px; padding: 6px 10px 9px 10px; margin-bottom: 8px; font-size: 8.4px; color: #1e293b; line-height: 1.42;">
      <table style="width: 100%; table-layout: fixed; border-collapse: collapse; margin-bottom: 5px;">
        <tr style="background: #fef7e6;">
          <td style="padding: 4px 8px; border: 1px solid #d97706; width: 33%;"><b style="color:#7c2d12;">वर की नाड़ी:</b> ${a(vt)}</td>
          <td style="padding: 4px 8px; border: 1px solid #d97706; width: 33%;"><b style="color:#7c2d12;">वधू की नाड़ी:</b> ${a(kt)}</td>
          <td style="padding: 4px 8px; border: 1px solid #d97706; width: 34%;"><b style="color:#7c2d12;">नाड़ी प्राप्तांक:</b> <span style="color:${S?"#be123c":"#047857"};font-weight:900;">${N} / 8 गुण</span></td>
        </tr>
      </table>
      <div><b style="color: #7c2d12;">&bull; त्रि-नाड़ी विज्ञान:</b> अष्टकूट में सर्वाधिक ८ गुण नाड़ी कूट के होते हैं। <b>आदि नाड़ी (वात प्रकृति)</b>, <b>मध्य नाड़ी (पित्त प्रकृति)</b> एवं <b>अन्त्य नाड़ी (कफ प्रकृति)</b> वर-वधू के शारीरिक त्रिदोष संतुलन, आनुवंशिक स्वास्थ्य एवं संतान सुख का निर्धारण करती हैं।</div>
      <div style="margin-top: 4px; background: #fef8ec; border-left: 3px solid #b45309; padding: 5px 8px; color: #334155;">
        ${S?`<b style="color:#7c2d12;">पीयूषधारा एवं मुहूर्त चिंतामणि के प्रामाणिक नाड़ी परिहार सूत्र:</b><br/>
               <i>“एकराशिः पृथक् तारा एकतारा पृथग्गृहम्। एकर्क्षं भिन्नपादं च नाड़ीदोषो न विद्यते॥”</i><br/>
               १. <b>एक राशि - भिन्न नक्षत्र</b>, २. <b>एक नक्षत्र - भिन्न राशि</b> अथवा ३. <b>एक नक्षत्र - भिन्न चरण (Pada)</b> होने पर नाड़ी दोष निरस्त होता है।<br/>
               &bull; <b style="color:#7c2d12;">अंतिम नाड़ी निर्णय:</b> ${F?"वर और वधू की राशि एक किंतु नक्षत्र भिन्न होने से शास्त्रोक्त नाड़ी दोष परिहार पूर्णतः मान्य है।":ft?"वर और वधू का नक्षत्र एक किंतु चरण भिन्न होने से शास्त्रोक्त नाड़ी दोष परिहार मान्य है।":"एक ही नाड़ी होने से विवाह पूर्व स्वर्ण-नाड़ी दान, गोदान, अन्नदान एवं सवा लाख महामृत्युंजय मंत्र जाप कराना अनिवार्य है।"}`:'<b style="color:#047857;">अंतिम नाड़ी निर्णय (पूर्णतः शुद्ध):</b> वर एवं वधू की नाड़ी भिन्न होने से <b>८/८ पूर्ण गुण</b> प्राप्त हैं — नाड़ी दोष पूर्णतः अनुपस्थित है तथा श्रेष्ठ संतान व आरोग्य योग है।'}
      </div>
    </div>

    ${M("१०. नवग्रह राशि-स्वामी मैत्री तुलना सारणी (9-Planet Graha Maitri Comparison Table)",`चन्द्र मैत्री: ${b} / 5`)}
    <table style="width: 100%; table-layout: fixed; border-collapse: collapse;">
      <thead>
        <tr style="background: #fdecc8;">
          <th style="padding: 3.5px 6px 6px 6px; border: 1px solid #b45309; color: #7c2d12; font-size: 8.3px; text-align: left; width: 15%;">ग्रह (Planet)</th>
          <th style="padding: 3.5px 6px 6px 6px; border: 1px solid #b45309; color: #7c2d12; font-size: 8.3px; text-align: left; width: 22%;">वर राशि एवं राशिपति</th>
          <th style="padding: 3.5px 6px 6px 6px; border: 1px solid #b45309; color: #7c2d12; font-size: 8.3px; text-align: left; width: 22%;">वधू राशि एवं राशिपति</th>
          <th style="padding: 3.5px 6px 6px 6px; border: 1px solid #b45309; color: #7c2d12; font-size: 8.3px; text-align: left; width: 21%;">परस्पर ग्रह मैत्री संबंध</th>
          <th style="padding: 3.5px 6px 6px 6px; border: 1px solid #b45309; color: #7c2d12; font-size: 8.3px; text-align: left; width: 20%;">दांपत्य समन्वय प्रभाव</th>
        </tr>
      </thead>
      <tbody>
        ${ie}
      </tbody>
    </table>
  `,ne=i.planets.map((n,L)=>{const P=e.planets[L],H=i.kpSystem?.planets?.find(gt=>gt.planet===n.hindiName)?.starLord||n.rashiLord,ht=e.kpSystem?.planets?.find(gt=>gt.planet===P?.hindiName)?.starLord||P?.rashiLord||"—";return`
        <tr style="background: ${L%2===0?"#fffdf9":"#fef7e6"};">
          <td style="padding: 3.5px 6px 6px 6px; border: 1px solid #d97706; color: #7c2d12; font-weight: 800; font-size: 8.3px; width: 14%;">
            ${a(n.hindiName)}
          </td>
          <td style="padding: 3.5px 6px 6px 6px; border: 1px solid #d97706; color: #1e293b; font-size: 8.1px; width: 21%; font-family: 'Noto Sans Devanagari', 'Nirmala UI', 'Mangal', sans-serif;">
            <span style="font-weight: 700;">${a(n.rashiName.split(" ")[0])}</span> <span style="font-variant-numeric: tabular-nums;">(${a(n.fullDegreeDMS)})</span><br/>
            ${Et(n,i)}
          </td>
          <td style="padding: 3.5px 6px 6px 6px; border: 1px solid #d97706; color: #047857; font-size: 8.1px; width: 22%; font-family: 'Noto Sans Devanagari', 'Nirmala UI', 'Mangal', sans-serif;">
            ${Y(n.houseInLagna)} &bull; ${a(n.nakshatra.split(" ")[0])} (च.${n.pada})<br/>
            <span style="color:#334155;font-size:7.6px;">नक्षत्रेश: ${a(H)}</span>
          </td>
          <td style="padding: 3.5px 6px 6px 6px; border: 1px solid #d97706; color: #9a3412; font-size: 8.1px; width: 21%; font-family: 'Noto Sans Devanagari', 'Nirmala UI', 'Mangal', sans-serif;">
            ${P?`<span style="font-weight: 700;">${a(P.rashiName.split(" ")[0])}</span> <span style="font-variant-numeric: tabular-nums;">(${a(P.fullDegreeDMS)})</span><br/>${Et(P,e)}`:"—"}
          </td>
          <td style="padding: 3.5px 6px 6px 6px; border: 1px solid #d97706; color: #be123c; font-size: 8.1px; width: 22%; font-family: 'Noto Sans Devanagari', 'Nirmala UI', 'Mangal', sans-serif;">
            ${P?`${Y(P.houseInLagna)} &bull; ${a(P.nakshatra.split(" ")[0])} (च.${P.pada})<br/><span style="color:#334155;font-size:7.6px;">नक्षत्रेश: ${a(ht)}</span>`:"—"}
          </td>
        </tr>
      `}).join(""),St=s?.pariharChecks?.length?s.pariharChecks.map(n=>`<b>${a(n.doshaName)}:</b> ${a(n.status)}`).join(" &nbsp;|&nbsp; "):"",de=`
    ${E("वर एवं वधू की नवग्रह स्पष्ट स्थिति, मांगलिक परिहार व नवांश (D-9) तुलना","पृष्ठ ५ : नवग्रह एवं कुज तुलना",l,!0)}

    ${M("११. वर एवं वधू की संपूर्ण नवग्रह स्थिति तुलना सारणी (Groom vs Bride Planetary Placements)","नवग्रह भाव व नीचभंग जांच")}
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
        ${ne}
      </tbody>
    </table>

    ${M("१२. द्विपक्षीय मांगलिक (कुज) दोष, शास्त्रोक्त परिहार एवं नवांश (D-9) क्रॉस-चेक",t.manglikStatus.manglikMatch?"कुज समन्वय शुभ":"मंगल परिहार विचारणीय")}
    <div style="background: #fffdf9; border: 1.5px solid #d97706; border-radius: 6px; padding: 6px 10px 8px 10px; font-size: 8px; color: #1e293b; line-height: 1.38;">
      <table style="width: 100%; table-layout: fixed; border-collapse: collapse; margin-bottom: 4px;">
        <tr style="background: #fef7e6;">
          <td style="padding: 3.5px 8px; border: 1px solid #d97706; width: 50%; vertical-align: top;">
            <b style="color:#7c2d12;">वर मांगलिक स्थिति:</b> <span style="color:${$t};font-weight:800;">${a(t.manglikStatus.boySeverity)}</span><br/>
            <span style="color:#475569;font-size:7.6px;">लग्न: ${O(t.manglikStatus.boyMarsHouseLagna)}, चन्द्र: ${O(t.manglikStatus.boyMarsHouseMoon)}, शुक्र: ${O(Kt)} भाव</span>
          </td>
          <td style="padding: 3.5px 8px; border: 1px solid #d97706; width: 50%; vertical-align: top;">
            <b style="color:#7c2d12;">वधू मांगलिक स्थिति:</b> <span style="color:${wt};font-weight:800;">${a(t.manglikStatus.girlSeverity)}</span><br/>
            <span style="color:#475569;font-size:7.6px;">लग्न: ${O(t.manglikStatus.girlMarsHouseLagna)}, चन्द्र: ${O(t.manglikStatus.girlMarsHouseMoon)}, शुक्र: ${O(Gt)} भाव</span>
          </td>
        </tr>
      </table>
      <div><b style="color: #7c2d12;">&bull; मांगलिक व परिहार निर्णय:</b> ${a(t.manglikStatus.description)}</div>
      <div style="margin-top: 2px;"><b style="color: #7c2d12;">&bull; सप्तम भाव व गुरु-शुक्र बल:</b> ${a(t.planetaryHarmony.seventhHouseSummary)} &bull; ${a(t.planetaryHarmony.jupiterVenusSummary)}</div>
      ${St?`<div style="margin-top: 3px; background: #fef8ec; border-left: 3px solid #b45309; padding: 3px 6px; color: #7c2d12;"><b>शास्त्रोक्त परिहार सार:</b> ${St}</div>`:""}
      ${s?.navamshaCrossCheck?`<div style="margin-top: 2.5px;"><b style="color: #047857;">&bull; नवांश (D-9) व दशा संधि परीक्षण:</b> ${a(s.navamshaCrossCheck)}</div>`:""}
    </div>
  `,_=i.planets.find(n=>n.id==="jupiter"),I=e.planets.find(n=>n.id==="jupiter");i.planets.find(n=>n.id==="venus"),e.planets.find(n=>n.id==="venus");const pt=C(i,7),ct=C(e,7),et=C(i,2),Nt=C(e,2),Pt=C(i,4),Dt=C(e,4),se=C(i,5),le=C(e,5),at=C(i,11),ot=C(e,11),pe=!!_&&(_.isExalted||_.dignity.includes("स्वगृही")||_.dignity.includes("मित्र")||V("jupiter",i).isCancelled),ce=!!I&&(I.isExalted||I.dignity.includes("स्वगृही")||I.dignity.includes("मित्र")||V("jupiter",e).isCancelled),q=Number((y+b+k).toFixed(1)),X=Number((g+w).toFixed(1)),W=Number(($+f).toFixed(1)),j=[];f===7&&j.push("भकूट (7/7 पूर्ण शुभ)"),N===8&&j.push("नाड़ी (8/8 पूर्ण शुद्ध)"),$>=3&&j.push("तारा (3/3 श्रेष्ठ)"),(pe||ce)&&j.push("बली गुरु का शुभ संरक्षण"),tt.score>=1&&j.push(`नवांश (D-9) समन्वय (${r.rashiName.split(" ")[0]}–${o.rashiName.split(" ")[0]})`),A.score>=1&&j.push("लग्नेश मैत्री");const he=q>=9?`वर्ण (${y}/1), ग्रह मैत्री (${b}/5) एवं गण (${k}/6) का कुल योग श्रेष्ठ (${q}/12) है। वर-वधू के विचारों, जीवन-दृष्टि एवं निर्णय-शैली में सहज तालमेल, आदर व प्रगाढ़ मानसिक संतुलन रहेगा।`:q>=4?`वर्ण (${y}/1), ग्रह मैत्री (${b}/5) एवं गण (${k}/6) का योग मध्यम (${q}/12) है। कुछ विषयों में दृष्टिकोण भिन्न हो सकता है, किंतु शांत संवाद, आपसी सम्मान और ${j.length>0?j.slice(0,2).join(" व "):"धैर्य"} के सहारे सुदृढ़ समझ विकसित होगी।`:`वर्ण (${y}/1), ग्रह मैत्री (${b}/5) एवं गण (${k}/6) का योग न्यून (${q}/12) होने से विवाह के प्रारंभिक वर्षों में स्वभाव, प्राथमिकताओं व निर्णय-शैली में वैचारिक भिन्नता स्पष्ट रूप से रह सकती है। ${j.length>0?`सकारात्मक पक्ष यह है कि ${j.slice(0,3).join(", ")} इस रिश्ते को दीर्घकालिक स्थिरता प्रदान कर रहे हैं। `:""}अहंकार व त्वरित प्रतिक्रिया से बचकर खुले संवाद को प्राथमिकता देना इस विवाह की कुंजी रहेगी।`,ge=X>=4.5?`वश्य (${g}/2) व योनि (${w}/4) का योग प्रबल (${X}/6) है तथा वर सप्तमेश ${pt.label} व वधू सप्तमेश ${ct.label} से दांपत्य में गहरा आकर्षण, भावनात्मक जुड़ाव एवं निष्ठा रहेगी।`:X>=2.5?`वश्य (${g}/2) व योनि (${w}/4) का योग संतुलित (${X}/6) है। वर सप्तमेश ${pt.lordHi} व वधू सप्तमेश ${ct.lordHi} के समन्वय से समय के साथ स्नेह, विश्वास व दांपत्य सहजता उत्तरोत्तर बढ़ेगी।`:`वश्य (${g}/2) व योनि (${w}/4) का योग न्यून (${X}/6) है, अतः भावनात्मक व शारीरिक सामंजस्य विकसित होने में प्रारंभिक धैर्य आवश्यक रहेगा। नवांश लग्न (${r.rashiName.split(" ")[0]}–${o.rashiName.split(" ")[0]}) और एक-दूसरे की भावनाओं के प्रति संवेदनशीलता से दांपत्य सुदृढ़ होगा।`,xe=W>=8.5?`तारा (${$}/3) व भकूट (${f}/7) का प्रभाव अत्यंत शुभ (${W}/10) है। विवाह पश्चात् संयुक्त भाग्योदय, आय में वृद्धि, संपत्ति-वाहन सुख तथा करियर में उल्लेखनीय उन्नति के प्रबल योग हैं।`:W>=5?`तारा (${$}/3) व भकूट (${f}/7) का योग मध्यम-शुभ (${W}/10) है। अनुशासित आर्थिक नियोजन और ${at.isStrong||ot.isStrong?"मजबूत एकादश भाव":"परस्पर सहयोग"} से विवाह उपरांत क्रमिक समृद्धि व स्थिरता प्राप्त होगी।`:`तारा (${$}/3) व भकूट (${f}/7) का योग न्यून (${W}/10) होने से आर्थिक निर्णयों व निवेश में जल्दबाजी से बचें। संयुक्त बजट अनुशासन तथा श्री लक्ष्मीनारायण पूजन से आर्थिक स्थिरता सुनिश्चित होगी।`,be=b>=4?`राशि स्वामियों (${t.boyRashiLord} एवं ${t.girlRashiLord}, मैत्री ${b}/5) में उत्तम मित्रता से दोनों परिवारों के मध्य सहज सौहार्द, मान-सम्मान एवं मांगलिक वातावरण बना रहेगा।`:b>=2.5||A.score>=1?`राशि मैत्री (${b}/5) मध्यम है, किंतु ${A.score>=1?`लग्नेश (${i.panchang.lagnaLord}–${e.panchang.lagnaLord}) की शुभ मित्रता`:"वर-वधू के चतुर्थ भाव संतुलन"} से ससुराल व पारिवारिक संबंध संतुलित एवं सम्मानजनक रहेंगे।`:`राशि स्वामियों (${t.boyRashiLord}–${t.girlRashiLord}, मैत्री ${b}/5) में वैचारिक अंतर होने से दोनों परिवारों की जीवनशैली व अपेक्षाओं में प्रारंभिक भिन्नता संभव है। विनम्र वाणी, बड़ों के सम्मान और पारिवारिक मामलों में संतुलित सीमाओं से घर में शांति बनी रहेगी।`,Mt=s?.extendedKoots?.find(n=>n.name.includes("महेन्द्र"))?.status==="शुभ",fe=N===8?`नाड़ी कूट पूर्णतः शुद्ध (8/8)${Mt?" एवं महेन्द्र कूट सिद्ध":""} होने के साथ वर के गुरु (${G(_,i)}) व वधू के गुरु (${G(I,e)}) की स्थिति स्वस्थ, तेजस्वी संतान सुख एवं दीर्घायु आरोग्य का प्रबल संकेत देती है।`:Q?"नाड़ी अंक 0/8 होने पर भी शास्त्रोक्त नाड़ी परिहार लागू है। संतान व आरोग्य पक्ष संतुलित रहेगा; सामान्य स्वास्थ्य सतर्कता, गुरु कृपा एवं गौरी-शंकर आराधना से उत्तम संतान सुख प्राप्त होगा।":"समान नाड़ी दोष (0/8) सक्रिय होने से संतान व स्वास्थ्य पक्ष के प्रति विशेष सजगता आवश्यक है। विवाह पूर्व शास्त्रोक्त नाड़ी शांति, महामृत्युंजय अनुष्ठान तथा आधुनिक चिकित्सकीय परामर्श अवश्य लें।",ue=[["१. मानसिक एवं वैचारिक सामंजस्य (Mental & Temperament Harmony)",he],["२. दांपत्य प्रेम एवं सप्तम भाव/नवांश बल (Marital Intimacy & Bond)",ge],["३. विवाहोपरांत भाग्योदय एवं आर्थिक समृद्धि (Post-Marriage Fortune)",xe],["४. पारिवारिक समरसता एवं कुटुम्ब सौख्य (Family & In-Laws Harmony)",be],["५. संतान सुख, वंश वृद्धि एवं आरोग्य (Progeny & Vitality)",fe]].map(n=>`
      <div style="background: #fffdf9; border: 1px solid #d97706; border-radius: 5px; padding: 4px 8px 6px 8px; margin-bottom: 4.5px;">
        <div style="font-size: 8.5px; font-weight: 800; color: #7c2d12;">${a(n[0])}</div>
        <div style="font-size: 8px; color: #1e293b; line-height: 1.34;">${a(n[1])}</div>
      </div>
    `).join(""),ye=s?.practicalRemedies?.length?s.practicalRemedies.slice(0,4).map((n,L)=>`<div><b style="color:#7c2d12;">${L+1}.</b> ${a(n)}</div>`).join(""):"<div>गृहस्थ सुख हेतु गौरी-शंकर रुद्राक्ष पूजा स्थान में स्थापित करें तथा “ॐ उमा-महेश्वराभ्यां नमः” का नित्य ११ बार जप करें।</div>",me=(()=>{const n=[];return S&&!Q&&n.push("नाड़ी दोष शांति हेतु महामृत्युंजय मंत्र जाप व स्वर्ण-नाड़ी दान कराएं।"),T&&!Z&&n.push("भकूट शांति हेतु श्री लक्ष्मीनारायण हवन एवं राशि स्वामियों का जप कराएं।"),z&&!Z&&n.push("गण भिन्नता के सामंजस्य हेतु गणपति अथर्वशीर्ष पाठ एवं शिव-पार्वती पूजन करें।"),t.manglikStatus.manglikMatch||n.push("सक्रिय मांगलिक प्रभाव हेतु कुंभ/पीपल विवाह व मंगल चंडिका शांति कराएं।"),n.length===0?"सभी प्रमुख कूट एवं मांगलिक परिहार अनुकूल हैं; विवाह पूर्व गणपति एवं कुलदेवता पूजन पर्याप्त है।":n.join(" ")})(),$e=`
    ${E("वैवाहिक भविष्यफल, शुभ विवाह मुहूर्त मार्गदर्शिका एवं वैदिक पूजा विधान","पृष्ठ ६ : फलित, मुहूर्त व उपाय",l,!0)}

    ${M("१३. पंच-स्तरीय यथार्थ वैवाहिक जीवन भविष्यफल (5-Pillar Matrimonial Predictions)","अंक व ग्रह बल आधारित फलित")}
    <div style="margin-bottom: 6px;">
      ${ue}
    </div>

    ${M("१४. शुभ विवाह मुहूर्त एवं दीर्घायु निष्कर्ष (Marriage Timing & Muhurat Guidelines)","लग्न एवं तारा शुद्धि")}
    <table style="width: 100%; table-layout: fixed; border-collapse: collapse; margin-bottom: 6px; font-size: 8.1px;">
      <tbody>
        <tr style="background: #fffdf9;">
          <td style="padding: 3.5px 7px 5.5px 7px; border: 1px solid #d97706; color: #7c2d12; font-weight: 800; width: 26%;">शुभ सौर मास एवं नक्षत्र</td>
          <td style="padding: 3.5px 7px 5.5px 7px; border: 1px solid #d97706; color: #1e293b; width: 74%;">रोहिणी, मृगशिरा, मघा, उत्तराफाल्गुनी, हस्त, स्वाति, अनुराधा, मूल, उत्तराषाढ़ा, उत्तराभाद्रपद एवं रेवती नक्षत्र विवाह हेतु सर्वश्रेष्ठ हैं।</td>
        </tr>
        <tr style="background: #fef7e6;">
          <td style="padding: 3.5px 7px 5.5px 7px; border: 1px solid #d97706; color: #7c2d12; font-weight: 800;">त्रिबल शुद्धि व विवाह लग्न</td>
          <td style="padding: 3.5px 7px 5.5px 7px; border: 1px solid #d97706; color: #047857; font-weight: 700;">वर लग्न (${a(t.boyLagna)}) व वधू लग्न (${a(t.girlLagna)}) से अष्टम शुद्धि सहित शुभ गोधूलि/अभिजित लग्न चुनें।</td>
        </tr>
        ${s?.marriageTimingAndLongevity?`<tr style="background: #fffdf9;">
                <td style="padding: 3.5px 7px 5.5px 7px; border: 1px solid #d97706; color: #7c2d12; font-weight: 800;">संबंध स्थिरता व समय सार</td>
                <td style="padding: 3.5px 7px 5.5px 7px; border: 1px solid #d97706; color: #1e293b;">${a(s.marriageTimingAndLongevity)}</td>
              </tr>`:""}
      </tbody>
    </table>

    ${M("१५. सुखी दांपत्य हेतु शास्त्रोक्त वैदिक पूजा एवं सरल उपाय (Remedial Suggestions)","मंगलमय गृहस्थ कवच")}
    <table style="width: 100%; table-layout: fixed; border-collapse: collapse; font-size: 8.1px;">
      <tbody>
        <tr style="background: #fffdf9;">
          <td style="padding: 3.5px 7px 5.5px 7px; border: 1px solid #d97706; color: #7c2d12; font-weight: 800; width: 26%;">१. गौरी-शंकर एवं रुद्राभिषेक</td>
          <td style="padding: 3.5px 7px 5.5px 7px; border: 1px solid #d97706; color: #1e293b; width: 74%;">विवाह पूर्व वर-वधू के नाम से भगवान शिव-पार्वती का रुद्राभिषेक एवं श्री लक्ष्मीनारायण पूजन कराने से अखंड सौभाग्य प्राप्त होता है।</td>
        </tr>
        <tr style="background: #fef7e6;">
          <td style="padding: 3.5px 7px 5.5px 7px; border: 1px solid #d97706; color: #7c2d12; font-weight: 800;">२. विशेष दोष निवारण विधान</td>
          <td style="padding: 3.5px 7px 5.5px 7px; border: 1px solid #d97706; color: #9a3412; font-weight: 600;">${a(me)}</td>
        </tr>
        <tr style="background: #fffdf9;">
          <td style="padding: 3.5px 7px 5.5px 7px; border: 1px solid #d97706; color: #7c2d12; font-weight: 800;">३. व्यावहारिक व वैदिक उपाय</td>
          <td style="padding: 3.5px 7px 5.5px 7px; border: 1px solid #d97706; color: #047857; font-weight: 600; line-height: 1.35;">${ye}</td>
        </tr>
      </tbody>
    </table>
  `,Tt=Be(i,e),we=b+k+g>=9?{badge:"अत्यंत शुभ तालमेल",color:"#047857",bg:"#ecfdf5"}:b+k+g>=5?{badge:"संतुलित — संवाद से श्रेष्ठ",color:"#b45309",bg:"#fffbeb"}:{badge:"प्रारंभिक प्रयास व धैर्य अपेक्षित",color:"#be123c",bg:"#fff1f2"},ve=b+k+g>=9?`वर की चन्द्र राशि ${t.boyRashi.split(" ")[0]} व वधू की ${t.girlRashi.split(" ")[0]} है; ग्रह मैत्री (${b}/5), गण (${k}/6) व वश्य (${g}/2) तीनों प्रबल हैं। दोनों के बीच सहज भावनात्मक समझ, प्रेम और विचारों की स्पष्ट एकरूपता रहेगी।`:b+k+g>=5?`ग्रह मैत्री (${b}/5), गण (${k}/6) व वश्य (${g}/2) का योग मध्यम है। कुछ निर्णयों में दृष्टिकोण भिन्न हो सकते हैं, किंतु सम्मानजनक संवाद और धैर्य से समय के साथ मजबूत मानसिक जुड़ाव स्थापित होगा।`:`वर (${t.boyRashi.split(" ")[0]}) व वधू (${t.girlRashi.split(" ")[0]}) की ग्रह मैत्री (${b}/5), गण (${k}/6) व वश्य (${g}/2) न्यून होने से प्रारंभिक वर्षों में स्वभाव व सोचने के ढंग में अंतर स्पष्ट रहेगा। ${j.length>0?`${j.slice(0,2).join(" व ")} इस रिश्ते को मजबूत आधार दे रहे हैं — `:""}अहंकार छोड़ने और शांत संवाद रखने से गृहस्थ जीवन सुखमय बनेगा।`,ke=f===7&&(et.isStrong||Nt.isStrong||at.isStrong||ot.isStrong)?{badge:"उत्तम आर्थिक भाग्योदय",color:"#047857",bg:"#ecfdf5"}:f===7||at.isStrong||ot.isStrong?{badge:"क्रमिक व स्थिर उन्नति",color:"#b45309",bg:"#fffbeb"}:{badge:"नियोजित प्रबंधन आवश्यक",color:"#be123c",bg:"#fff1f2"},Se=`भकूट कूट (${f}/7), वर के द्वितीयेश ${et.lordHi} (${et.lordPlanet?Y(et.lordPlanet.houseInLagna):"शुभ"}) व एकादशेश ${at.lordHi} तथा वधू के द्वितीयेश ${Nt.lordHi} व एकादशेश ${ot.lordHi} के अनुसार ${f===7?"विवाह के पश्चात् संयुक्त आय, करियर स्थायित्व और बचत-संपत्ति में स्पष्ट वृद्धि होगी। दोनों के सहयोग से आर्थिक लक्ष्य आसानी से पूर्ण होंगे।":"धन-संचय व निवेश में पारदर्शी संयुक्त योजना बनाना आवश्यक रहेगा; भकूट परिहार/लक्ष्मीनारायण पूजन से आर्थिक स्थिरता दृढ़ होगी।"}`,Ne=N===8?{badge:"पूर्ण अनुकूल व आरोग्यप्रद",color:"#047857",bg:"#ecfdf5"}:Q?{badge:"परिहार सहित संतुलित",color:"#b45309",bg:"#fffbeb"}:{badge:"नाड़ी शांति अनिवार्य",color:"#be123c",bg:"#fff1f2"},Pe=`नाड़ी कूट (${N}/8), महेन्द्र कूट (${Mt?"शुभ/सिद्ध":"सामान्य"}), वर पंचमेश ${se.lordHi} व वधू पंचमेश ${le.lordHi} तथा गुरु बल (वर: ${G(_,i)}, वधू: ${G(I,e)}) से स्पष्ट है कि ${N===8?"जैविक अनुकूलता, स्वास्थ्य रक्षा एवं स्वस्थ-बुद्धिमान संतान सुख के श्रेष्ठ योग बने हुए हैं।":Q?"नाड़ी परिहार उपलब्ध होने से स्वास्थ्य व संतान पक्ष सुरक्षित रहेगा; गुरु कृपा से सुखद संतान प्राप्ति होगी।":"एक नाड़ी दोष होने से विवाह पूर्व महामृत्युंजय जप, स्वर्ण-नाड़ी दान और स्वास्थ्य जांच कराना अनिवार्य है।"}`,De=t.manglikStatus.manglikMatch?{badge:"मांगलिक सुरक्षित व स्थायी",color:"#047857",bg:"#ecfdf5"}:{badge:"मंगल शांति अपेक्षित",color:"#be123c",bg:"#fff1f2"},Me=`वर (${t.manglikStatus.boySeverity}) एवं वधू (${t.manglikStatus.girlSeverity}) के साथ वर सप्तमेश ${pt.label}, वधू सप्तमेश ${ct.label} तथा नवांश लग्न (${r.rashiName.split(" ")[0]} व ${o.rashiName.split(" ")[0]} — ${tt.relation.split("(")[0].trim()}) के परीक्षण से ${t.manglikStatus.manglikMatch?"मांगलिक दोष की कोई बाधा नहीं है (परिहार सिद्ध/दोष-मुक्त) तथा दीर्घकालिक वैवाहिक स्थायित्व सुदृढ़ है।":"एकपक्षीय सक्रिय मंगल हेतु विवाह पूर्व कुंभ/पीपल विवाह व मंगल शांति कराने के पश्चात् वैवाहिक स्थायित्व सुरक्षित होगा।"}`,Te=A.score>=1&&(Pt.isStrong||Dt.isStrong)?{badge:"मधुर व सम्मानजनक संबंध",color:"#047857",bg:"#ecfdf5"}:A.score>=0||b>=3?{badge:"संतुलित पारिवारिक तालमेल",color:"#b45309",bg:"#fffbeb"}:{badge:"संवेदनशील संवाद अपेक्षित",color:"#be123c",bg:"#fff1f2"},ze=`वर लग्नेश ${i.panchang.lagnaLord} व वधू लग्नेश ${e.panchang.lagnaLord} (${A.relation.split("(")[0].trim()}), चतुर्थ भाव स्वामी (${Pt.lordHi}/${Dt.lordHi}) एवं द्वितीय भाव कुटुम्ब योग के अनुसार ${A.score>=1?"ससुराल पक्ष व दोनों परिवारों में परस्पर सम्मान, आत्मीयता और सुखद पारिवारिक सहयोग बना रहेगा।":"दोनों परिवारों की परंपरा व स्वभाव में हल्का अंतर रह सकता है; मधुर वाणी, बड़ों के आदर और स्पष्ट संवाद से पारिवारिक सौहार्द सदैव बना रहेगा।"}`,Le={badge:Tt.windowText,color:"#047857",bg:"#ecfdf5"},je=Tt.detailText,Ce=[{q:"प्रश्न 1: आपसी तालमेल और मानसिक समझ कैसी रहेगी?",status:we,a:ve},{q:"प्रश्न 2: करियर और आर्थिक भाग्योदय कैसा रहेगा?",status:ke,a:Se},{q:"प्रश्न 3: संतान सुख और स्वास्थ्य अनुकूलता कैसी है?",status:Ne,a:Pe},{q:"प्रश्न 4: मांगलिक स्थिति और वैवाहिक स्थायित्व कैसा है?",status:De,a:Me},{q:"प्रश्न 5: ससुराल व पारिवारिक संबंध कैसे रहेंगे?",status:Te,a:ze},{q:"प्रश्न 6: विवाह के बाद सबसे शुभ समय कब शुरू होगा?",status:Le,a:je}].map(n=>`
      <div style="background: #fffdf9; border: 1.4px solid #d97706; border-radius: 6px; padding: 6px 10px 7.5px 10px; margin-bottom: 6.5px;">
        <table style="width: 100%; table-layout: fixed; border-collapse: collapse; margin-bottom: 3px;">
          <tr>
            <td style="width: 67%; font-size: 9px; font-weight: 900; color: #7c2d12; vertical-align: middle;">${a(n.q)}</td>
            <td style="width: 33%; text-align: right; vertical-align: middle;">
              <span class="milan-status-pill" style="display: inline-flex; align-items: center; justify-content: center; line-height: 1.1; vertical-align: middle; text-align: center; background: ${n.status.bg}; border: 1px solid ${n.status.color}; color: ${n.status.color}; border-radius: 4px; padding: 3px 10px 5px 10px; font-size: 7.7px; font-weight: 800; box-sizing: border-box;">${a(n.status.badge)}</span>
            </td>
          </tr>
        </table>
        <div style="font-size: 8.2px; color: #1e293b; line-height: 1.42;">${a(n.a)}</div>
      </div>
    `).join(""),Fe=`
    ${E("वर-वधू के 6 प्रमुख वैवाहिक सवालों के सीधे, सरल एवं शास्त्रोक्त जवाब","पृष्ठ 7 : वैवाहिक प्रश्नोत्तरी (Q&A)",l,!0)}

    ${M("16. वर-वधू के 6 प्रमुख वैवाहिक सवालों के सीधे जवाब (Direct Marriage Q&A)","कुंडली व दशा आधारित सटीक उत्तर")}
    <div style="margin-bottom: 10px;">
      ${Ce}
    </div>

    <div style="background: linear-gradient(90deg, #fff6e0 0%, #fde8bf 100%); border: 2px double #b45309; border-radius: 6px; padding: 7px 12px 9px 12px; text-align: center;">
      <div style="font-size: 10px; font-weight: 900; color: #7c2d12; margin-bottom: 2.5px;">
        ॥ शुभं भवतु ॥ &bull; ${a(D.appName)} &bull; ${a(D.guideName)}
      </div>
      <div style="font-size: 8.2px; color: #1e293b; line-height: 1.38; font-weight: 600;">
        शुद्ध विवाह मुहूर्त निर्धारण, कुम्भ/विष्णु विवाह, नाड़ी-भकूट शांति अनुष्ठान व वैदिक विवाह संस्कार हेतु संपर्क करें — स्थान: ${a(D.guideAddress)}
      </div>
      <div style="font-size: 9px; font-weight: 900; color: #047857; margin-top: 2.5px;">
        संपर्क / WhatsApp: ${a(D.contactPhone)} &bull; वेबसाइट: ${a(D.websiteFull)} &bull; Email: ${a(D.email)}
      </div>
    </div>
  `;return[Jt,Zt,oe,re,de,$e,Fe]}let rt=null;function _t(t,i=5e3){return new Promise((e,s)=>{const r=document.querySelector(`script[src="${t}"]`);if(r){if(r.__loaded){e();return}if(r.__failed)r.remove();else{const d=window.setTimeout(()=>{s(new Error(`Timeout loading ${t}`))},i);r.addEventListener("load",()=>{window.clearTimeout(d),e()},{once:!0}),r.addEventListener("error",()=>{window.clearTimeout(d),s(new Error(`Failed to load ${t}`))},{once:!0});return}}const o=document.createElement("script");o.src=t,o.async=!0;const l=window.setTimeout(()=>{o.__failed=!0,o.remove(),s(new Error(`Timeout loading ${t}`))},i);o.onload=()=>{window.clearTimeout(l),o.__loaded=!0,e()},o.onerror=()=>{window.clearTimeout(l),o.__failed=!0,o.remove(),s(new Error(`Failed to load ${t}`))},document.head.appendChild(o)})}async function It(){const t=window;return(t.jspdf?.jsPDF||t.jsPDF)&&t.html2canvas?{jsPDF:t.jspdf?.jsPDF||t.jsPDF,html2canvas:t.html2canvas}:(rt||(rt=(async()=>{try{try{const[e,s]=await Promise.all([Lt(()=>import("./jspdf.es.min-EKeAfboT.js").then(l=>l.j),zt([0,1])),Lt(()=>import("./html2canvas.esm-DWZSdXKi.js"),[])]),r=e?.jsPDF||e?.default?.jsPDF||e?.default,o=s?.default||s;if(typeof r=="function"&&typeof o=="function")return{jsPDF:r,html2canvas:o}}catch{}const i=[["https://cdn.jsdelivr.net/npm/jspdf@2.5.2/dist/jspdf.umd.min.js","https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js"],["https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js","https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"],["https://unpkg.com/jspdf@2.5.2/dist/jspdf.umd.min.js","https://unpkg.com/html2canvas@1.4.1/dist/html2canvas.min.js"]];for(const[e,s]of i)try{const r=[];t.jspdf?.jsPDF||t.jsPDF||r.push(_t(e)),t.html2canvas||r.push(_t(s)),r.length>0&&await Promise.all(r);const o=t.jspdf?.jsPDF||t.jsPDF,l=t.html2canvas;if(typeof o=="function"&&typeof l=="function")return{jsPDF:o,html2canvas:l}}catch{}throw new Error("PDF libraries did not initialize")}catch(i){throw rt=null,i}})()),rt)}const D={appName:"पण्डित जी ऑनलाइन (Pandit Ji Online)",guideTitle:"मुख्य ज्योतिषाचार्य एवं संस्थापक:",guideName:"आचार्य पण्डित शशांक शर्मा (वैदिक पुरोहित एवं ज्योतिषाचार्य)",guideAddress:"रुद्रपुर, ऊधम सिंह नगर, उत्तराखण्ड (भारत)",contactPhone:"+91 7017279043",website:"www.panditjionline.online",websiteFull:"https://www.panditjionline.online",email:"internetwebhelp24@gmail.com"};function a(t){return String(t??"").normalize("NFC").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}const Yt={अ:"a",आ:"aa",इ:"i",ई:"ee",उ:"u",ऊ:"oo",ऋ:"ri",ए:"e",ऐ:"ai",ओ:"o",औ:"au",क:"k",ख:"kh",ग:"g",घ:"gh",च:"ch",छ:"chh",ज:"j",झ:"jh",ट:"t",ठ:"th",ड:"d",ढ:"dh",ण:"n",त:"t",थ:"th",द:"d",ध:"dh",न:"n",प:"p",फ:"ph",ब:"b",भ:"bh",म:"m",य:"y",र:"r",ल:"l",व:"v",श:"sh",ष:"sh",स:"s",ह:"h","ा":"a","ि":"i","ी":"ee","ु":"u","ू":"oo","ृ":"ri","े":"e","ै":"ai","ो":"o","ौ":"au","ं":"n","ँ":"n","ः":"h","्":"","०":"0","१":"1","२":"2","३":"3","४":"4","५":"5","६":"6","७":"7","८":"8","९":"9"};function J(t){const i=String(t||"Yajman").trim();let e="";for(const r of i)Yt[r]!==void 0?e+=Yt[r]:/[A-Za-z0-9_.-]/.test(r)?e+=r:/\s/.test(r)&&(e+="_");return e.replace(/_+/g,"_").replace(/^_+|_+$/g,"")||"Yajman"}const Ot=[{name:"प्रथम (तनु/लग्न भाव)",karaka:"सूर्य (देह, व्यक्तित्व, आयु, यश)"},{name:"द्वितीय (धन/कुटुम्ब भाव)",karaka:"गुरु (संचित धन, वाणी, परिवार)"},{name:"तृतीय (सहज/पराक्रम भाव)",karaka:"मंगल (साहस, छोटे भाई-बहन, पुरुषार्थ)"},{name:"चतुर्थ (सुख/मातृ भाव)",karaka:"चन्द्र/बुध (माता, भूमि, भवन, वाहन)"},{name:"पंचम (संतान/विद्या भाव)",karaka:"गुरु (शिक्षा, बुद्धि, संतान, पूर्वपुण्य)"},{name:"षष्ठ (रिपु/रोग भाव)",karaka:"मंगल/शनि (रोग, ऋण, शत्रु, प्रतिस्पर्धा)"},{name:"सप्तम (जाया/विवाह भाव)",karaka:"शुक्र (जीवनसाथी, वैवाहिक सुख, व्यापार)"},{name:"अष्टम (आयु/मृत्यु भाव)",karaka:"शनि (दीर्घायु, गुप्त विद्या, आकस्मिक घटना)"},{name:"नवम (भाग्य/धर्म भाव)",karaka:"गुरु/सूर्य (भाग्य, धर्म, गुरु, तीर्थयात्रा)"},{name:"दशम (कर्म/राज्य भाव)",karaka:"सूर्य/बुध/गुरु/शनि (आजीविका, पद-प्रतिष्ठा, पिता)"},{name:"एकादश (लाभ/आय भाव)",karaka:"गुरु (आय, मनोकामना पूर्ति, ज्येष्ठ भ्राता)"},{name:"द्वादश (व्यय/मोक्ष भाव)",karaka:"शनि/केतु (व्यय, विदेश यात्रा, मोक्ष, शैया सुख)"}],Vt={1:"मंगल",2:"शुक्र",3:"बुध",4:"चन्द्र",5:"सूर्य",6:"बुध",7:"शुक्र",8:"मंगल",9:"गुरु",10:"शनि",11:"शनि",12:"गुरु"};function bt(t){const i=(t%30+30)%30,e=Math.floor(i),s=(i-e)*60,r=Math.floor(s),o=Math.round((s-r)*60);return`${String(e).padStart(2,"0")}° ${String(r).padStart(2,"0")}′ ${String(Math.min(59,o)).padStart(2,"0")}″`}function _e(t){const i=t.phase1Astronomy?.sripatiBhavas;if(i&&i.length===12)return i.map((r,o)=>{const l=Ot[o]||{name:`भाव ${r.houseNumber}`,karaka:"सामान्य"},d=t.planets.filter(c=>r.occupantIds.includes(c.id)),p=d.length>0?d.map(c=>`${c.hindiName} (${c.degInt}°)`).join(", "):"— (भाव रिक्त)";return{houseNumber:r.houseNumber,bhavaName:l.name,significator:l.karaka,rashiName:`${r.madhyaRashiNameHi} (${r.madhyaRashiNumber})`,rashiLord:Vt[r.madhyaRashiNumber]||"गुरु",madhyaDMS:r.madhyaDMS,sandhiStartDMS:r.sandhiStartDMS,sandhiEndDMS:r.sandhiEndDMS,planets:p}});const e=t.panchang.lagnaDegreeDMS.match(/(\d+)°\s*(\d+)/),s=e?parseInt(e[1],10)+parseInt(e[2],10)/60:t.panchang.lagnaDegInt||15.25;return t.lagnaChart.map((r,o)=>{const l=Ot[o]||{name:`भाव ${r.houseNumber}`,karaka:"सामान्य"},d=(s%30+30)%30,p=((d-15)%30+30)%30,c=((d+15)%30+30)%30,h=r.planets&&r.planets.length>0?r.planets.map(x=>`${x.hindiName} (${x.degInt}°)`).join(", "):"— (भाव रिक्त)";return{houseNumber:r.houseNumber,bhavaName:l.name,significator:l.karaka,rashiName:`${r.rashiName} (${r.rashiNumber})`,rashiLord:Vt[r.rashiNumber]||"गुरु",madhyaDMS:bt(d),sandhiStartDMS:bt(p),sandhiEndDMS:bt(c),planets:h}})}function Ie(t,i){if(i)return i.planets.map(o=>{const l=t.find(p=>p.id===o.id);let d="बली (Strong)";return o.gradeHi.includes("अति बली")?d="अति बली (Exalted/Strong)":o.gradeHi.includes("बली")?d="बली (Strong)":o.gradeHi.includes("मध्यम")?d="मध्यम (Moderate)":d="निर्बल (Needs Remedy)",{planet:l?.hindiName||o.hindiName,englishName:o.englishName,sthanaBala:Math.round(o.sthanaBala.total),digBala:Math.round(o.digBala),cheshtaBala:Math.round(o.cheshtaBala),naisargikaBala:Math.round(o.naisargikaBala),kalaBala:Math.round(o.kalaBala.total),drikBala:Math.round(o.drikBala),totalVirupas:Math.round(o.totalVirupas),totalRupas:`${o.totalRupas.toFixed(2)} रूप`,requiredRupas:`${o.requiredRupas.toFixed(2)} रूप`,strengthPct:Math.min(100,o.strengthPct),grade:d,remedyHint:o.remedyHintHi}});const e={सूर्य:60,चंद्र:51.4,चन्द्र:51.4,शुक्र:42.9,गुरु:34.3,बुध:25.7,मंगल:17.1,शनि:8.6,राहु:30,केतु:30},s={सूर्य:"6.50 रूप",चंद्र:"6.00 रूप",चन्द्र:"6.00 रूप",मंगल:"5.00 रूप",बुध:"7.00 रूप",गुरु:"6.50 रूप",शुक्र:"5.50 रूप",शनि:"5.00 रूप",राहु:"5.00 रूप",केतु:"5.00 रूप"},r={गुरु:1,बुध:1,सूर्य:10,मंगल:10,शनि:7,चंद्र:4,चन्द्र:4,शुक्र:4,राहु:10,केतु:4};return t.map(o=>{let l=135;o.dignity.includes("उच्च")?l=195:o.dignity.includes("स्वगृही")?l=176:o.dignity.includes("मित्र")?l=154:o.dignity.includes("सम")?l=132:o.dignity.includes("शत्रु")?l=108:o.dignity.includes("नीच")&&(l=86);const d=r[o.hindiName]||1,p=Math.min(Math.abs(o.houseInLagna-d),12-Math.abs(o.houseInLagna-d)),c=Math.round(60-p*8.5),h=o.isRetrograde?54:o.isCombust?22:42,x=e[o.hindiName]||30,m=92+o.pada*6,u=[1,4,5,7,9,10,11].includes(o.houseInLagna)?24:14,v=Math.round(l+c+h+x+m+u),y=(v/60).toFixed(2),g=Math.min(99,Math.max(42,Math.round(v/440*100)));let $="बली (Strong)",w="शुभ फलप्रद स्थिति — नित्य इष्ट स्मरण पर्याप्त";return g>=84?($="अति बली (Exalted/Strong)",w="पूर्ण राजयोगकारी बल — श्रेष्ठ नेतृत्व एवं उन्नति"):g>=68?($="बली (Strong)",w="अनुकूल ग्रह बल — कार्यसिद्धि एवं स्थिर प्रगति"):g>=55?($="मध्यम (Moderate)",w=`${o.hindiName} के बीज मंत्र का नित्य १०८ जप शुभदायी`):($="निर्बल (Needs Remedy)",w=`${o.hindiName} शांति दान एवं वैदिक जप अनुष्ठान आवश्यक`),{planet:o.hindiName,englishName:o.name,sthanaBala:l,digBala:c,cheshtaBala:h,naisargikaBala:Math.round(x),kalaBala:m,drikBala:u,totalVirupas:v,totalRupas:`${y} रूप`,requiredRupas:s[o.hindiName]||"5.50 रूप",strengthPct:g,grade:$,remedyHint:w}})}function Ye(t){const i=t.panchang.lagnaName.split(" ")[0],e=t.lucky,s={मेष:{jeevanRatna:"मूंगा (Red Coral) — लग्नेश मंगल हेतु",bhagyaRatna:"पुखराज (Yellow Sapphire) — भाग्येश गुरु हेतु",ishtaRatna:"माणिक्य (Ruby) — पंचमेश सूर्य हेतु",avoidStones:"नीलम, पन्ना एवं हीरा बिना परामर्श न पहनें",primaryRudraksha:"३ मुखी रुद्राक्ष (अग्नि देव स्वरूप — मंगल बलवर्धक)",secondaryRudraksha:"५ मुखी + १ मुखी रुद्राक्ष (गुरु एवं सूर्य कृपा हेतु)",rudrakshaMantra:"ॐ क्लीं नमः ॥ ॐ अं अङ्गारकाय नमः ॥",rudrakshaBenefits:"आत्मविश्वास, भूमि-भवन लाभ, रक्तचाप संतुलन एवं मंगल दोष शांति।"},वृषभ:{jeevanRatna:"हीरा / ओपल (Diamond / White Fire Opal) — लग्नेश शुक्र हेतु",bhagyaRatna:"नीलम (Blue Sapphire) — भाग्येश एवं कर्मेश शनि हेतु",ishtaRatna:"पन्ना (Emerald) — पंचमेश बुध हेतु",avoidStones:"पुखराज, मूंगा एवं मोती धारण न करें",primaryRudraksha:"६ मुखी रुद्राक्ष (भगवान कार्तिकेय एवं शुक्र कृपा हेतु)",secondaryRudraksha:"७ मुखी + ४ मुखी रुद्राक्ष (लक्ष्मी-शनि एवं बुध बल हेतु)",rudrakshaMantra:"ॐ ह्रीं हुं नमः ॥ ॐ शुं शुक्राय नमः ॥",rudrakshaBenefits:"वैवाहिक सुख, ऐश्वर्य, व्यापारिक उन्नति एवं कला/धन वृद्धि।"},मिथुन:{jeevanRatna:"पन्ना (Natural Emerald) — लग्नेश बुध हेतु",bhagyaRatna:"नीलम (Blue Sapphire) — भाग्येश शनि हेतु",ishtaRatna:"हीरा / ओपल (Diamond / Opal) — पंचमेश शुक्र हेतु",avoidStones:"मूंगा, माणिक्य एवं पुखराज से परहेज करें",primaryRudraksha:"४ मुखी रुद्राक्ष (ब्रह्मा देव स्वरूप — बुध प्रज्ञा वर्धक)",secondaryRudraksha:"६ मुखी + गणेश रुद्राक्ष (विद्या, वाणी एवं व्यापार सिद्धि)",rudrakshaMantra:"ॐ ह्रीं नमः ॥ ॐ बुं बुधाय नमः ॥",rudrakshaBenefits:"तीव्र बुद्धि, वाणी प्रभाव, व्यापारिक निर्णय क्षमता एवं नसों की मजबूती।"},कर्क:{jeevanRatna:"सच्चा मोती (Natural South Sea Pearl) — लग्नेश चन्द्र हेतु",bhagyaRatna:"पुखराज (Yellow Sapphire) — भाग्येश गुरु हेतु",ishtaRatna:"मूंगा (Red Coral) — दशमेश/पंचमेश योगकारक मंगल हेतु",avoidStones:"नीलम, हीरा एवं पन्ना धारण न करें",primaryRudraksha:"२ मुखी रुद्राक्ष (अर्धनारीश्वर स्वरूप — चन्द्र मानसिक शांति हेतु)",secondaryRudraksha:"३ मुखी + ५ मुखी रुद्राक्ष (योगकारक मंगल एवं गुरु बल हेतु)",rudrakshaMantra:"ॐ नमः ॥ ॐ सों सोमाय नमः ॥",rudrakshaBenefits:"मानसिक शांति, पारिवारिक सामंजस्य, राज्यकृपा एवं अचल संपत्ति लाभ।"},सिंह:{jeevanRatna:"माणिक्य (Burmese Ruby) — लग्नेश सूर्य हेतु",bhagyaRatna:"मूंगा (Red Coral) — भाग्येश व चतुर्थेश योगकारक मंगल हेतु",ishtaRatna:"पुखराज (Yellow Sapphire) — पंचमेश गुरु हेतु",avoidStones:"नीलम एवं हीरा कभी धारण न करें",primaryRudraksha:"१ मुखी अथवा १२ मुखी रुद्राक्ष (भगवान सूर्य एवं शिव तेज हेतु)",secondaryRudraksha:"३ मुखी + ५ मुखी रुद्राक्ष (मंगल-गुरु राजयोग बल हेतु)",rudrakshaMantra:"ॐ ह्रीं नमः ॥ ॐ घृणि सूर्याय नमः ॥",rudrakshaBenefits:"प्रशासनिक तेज, राजकीय सम्मान, उच्च पद प्राप्ति एवं हृदय/नेत्र बल।"},कन्या:{jeevanRatna:"पन्ना (Emerald) — लग्नेश एवं कर्मेश बुध हेतु",bhagyaRatna:"हीरा / ओपल (Diamond / Opal) — भाग्येश शुक्र हेतु",ishtaRatna:"नीलम (Blue Sapphire) — पंचमेश शनि हेतु",avoidStones:"मूंगा, मोती एवं माणिक्य धारण न करें",primaryRudraksha:"४ मुखी रुद्राक्ष (बुध-ब्रह्मा कृपा एवं बौद्धिक तेज हेतु)",secondaryRudraksha:"६ मुखी + ७ मुखी रुद्राक्ष (भाग्येश शुक्र एवं पंचमेश शनि हेतु)",rudrakshaMantra:"ॐ ह्रीं नमः ॥ ॐ बुं बुधाय नमः ॥",rudrakshaBenefits:"वाणिज्य-व्यापार में अपार लाभ, शिक्षा में श्रेष्ठता एवं धन संचय।"},तुला:{jeevanRatna:"हीरा / सफेद पुखराज / ओपल — लग्नेश शुक्र हेतु",bhagyaRatna:"पन्ना (Emerald) — भाग्येश बुध हेतु",ishtaRatna:"नीलम (Blue Sapphire) — चतुर्थेश/पंचमेश योगकारक शनि हेतु",avoidStones:"माणिक्य, मूंगा एवं पुखराज से परहेज करें",primaryRudraksha:"६ मुखी रुद्राक्ष (शुक्र एवं कार्तिकेय कृपा हेतु)",secondaryRudraksha:"७ मुखी + ४ मुखी रुद्राक्ष (योगकारक शनि एवं भाग्येश बुध हेतु)",rudrakshaMantra:"ॐ ह्रीं हुं नमः ॥ ॐ शुं शुक्राय नमः ॥",rudrakshaBenefits:"दाम्पत्य सुख, भौतिक वैभव, न्यायिक विजय एवं शनि-शुक्र राजयोग।"},वृश्चिक:{jeevanRatna:"मूंगा (Red Coral) — लग्नेश मंगल हेतु",bhagyaRatna:"सच्चा मोती (Natural Pearl) — भाग्येश चन्द्र हेतु",ishtaRatna:"पुखराज (Yellow Sapphire) एवं माणिक्य (Ruby) — गुरु व सूर्य हेतु",avoidStones:"पन्ना, हीरा एवं नीलम धारण न करें",primaryRudraksha:"३ मुखी रुद्राक्ष (मंगल तेज एवं साहस वृद्धि हेतु)",secondaryRudraksha:"२ मुखी + ५ मुखी रुद्राक्ष (भाग्येश चन्द्र एवं धनेश गुरु हेतु)",rudrakshaMantra:"ॐ क्लीं नमः ॥ ॐ अं अङ्गारकाय नमः ॥",rudrakshaBenefits:"शत्रु विजय, आकस्मिक धन लाभ, साहस एवं गूढ़ विद्या में सिद्धि।"},धनु:{jeevanRatna:"पुखराज (Ceylon Yellow Sapphire) — लग्नेश गुरु हेतु",bhagyaRatna:"माणिक्य (Ruby) — भाग्येश सूर्य हेतु",ishtaRatna:"मूंगा (Red Coral) — पंचमेश मंगल हेतु",avoidStones:"नीलम एवं हीरा धारण न करें",primaryRudraksha:"५ मुखी रुद्राक्ष (कालाग्नि रुद्र स्वरूप — बृहस्पति कृपा हेतु)",secondaryRudraksha:"१२ मुखी + ३ मुखी रुद्राक्ष (सूर्य एवं मंगल राजयोग बल हेतु)",rudrakshaMantra:"ॐ ह्रीं नमः ॥ ॐ बृं बृहस्पतये नमः ॥",rudrakshaBenefits:"आध्यात्मिक तेज, उच्च शिक्षा, राज्य सम्मान एवं संतान सुख।"},मकर:{jeevanRatna:"नीलम (Ceylon Blue Sapphire) — लग्नेश शनि हेतु",bhagyaRatna:"पन्ना (Emerald) — भाग्येश बुध हेतु",ishtaRatna:"हीरा / ओपल (Diamond / Opal) — योगकारक शुक्र हेतु",avoidStones:"मूंगा, मोती एवं माणिक्य धारण न करें",primaryRudraksha:"७ मुखी रुद्राक्ष (महालक्ष्मी एवं शनि कृपा हेतु)",secondaryRudraksha:"६ मुखी + ४ मुखी रुद्राक्ष (योगकारक शुक्र एवं भाग्येश बुध हेतु)",rudrakshaMantra:"ॐ हुं नमः ॥ ॐ शं शनैश्चराय नमः ॥",rudrakshaBenefits:"स्थायी संपत्ति, उद्योग-व्यापार में सफलता, शनि पीड़ा मुक्ति एवं दीर्घायु।"},कुंभ:{jeevanRatna:"नीलम (Blue Sapphire) — लग्नेश शनि हेतु",bhagyaRatna:"हीरा / ओपल (Diamond / Opal) — चतुर्थेश/भाग्येश योगकारक शुक्र हेतु",ishtaRatna:"पन्ना (Emerald) — पंचमेश बुध हेतु",avoidStones:"मूंगा, मोती एवं पुखराज बिना परामर्श न पहनें",primaryRudraksha:"७ मुखी रुद्राक्ष (लग्नेश शनि एवं सप्तमातृका कृपा हेतु)",secondaryRudraksha:"६ मुखी + ४ मुखी रुद्राक्ष (भाग्येश शुक्र एवं पंचमेश बुध हेतु)",rudrakshaMantra:"ॐ हुं नमः ॥ ॐ शं शनैश्चराय नमः ॥",rudrakshaBenefits:"नवाचार, शोध, राजयोग प्राप्ति, आर्थिक स्थिरता एवं मानसिक एकाग्रता।"},कुम्भ:{jeevanRatna:"नीलम (Blue Sapphire) — लग्नेश शनि हेतु",bhagyaRatna:"हीरा / ओपल (Diamond / Opal) — चतुर्थेश/भाग्येश योगकारक शुक्र हेतु",ishtaRatna:"पन्ना (Emerald) — पंचमेश बुध हेतु",avoidStones:"मूंगा, मोती एवं पुखराज बिना परामर्श न पहनें",primaryRudraksha:"७ मुखी रुद्राक्ष (लग्नेश शनि एवं सप्तमातृका कृपा हेतु)",secondaryRudraksha:"६ मुखी + ४ मुखी रुद्राक्ष (भाग्येश शुक्र एवं पंचमेश बुध हेतु)",rudrakshaMantra:"ॐ हुं नमः ॥ ॐ शं शनैश्चराय नमः ॥",rudrakshaBenefits:"नवाचार, शोध, राजयोग प्राप्ति, आर्थिक स्थिरता एवं मानसिक एकाग्रता।"},मीन:{jeevanRatna:"पुखराज (Yellow Sapphire) — लग्नेश एवं कर्मेश गुरु हेतु",bhagyaRatna:"मूंगा (Red Coral) — भाग्येश व धनेश मंगल हेतु",ishtaRatna:"सच्चा मोती (Natural Pearl) — पंचमेश चन्द्र हेतु",avoidStones:"पन्ना, हीरा एवं नीलम धारण न करें",primaryRudraksha:"५ मुखी रुद्राक्ष (देवगुरु बृहस्पति एवं शिव कृपा हेतु)",secondaryRudraksha:"३ मुखी + २ मुखी रुद्राक्ष (भाग्येश मंगल एवं पंचमेश चन्द्र हेतु)",rudrakshaMantra:"ॐ ह्रीं नमः ॥ ॐ बृं बृहस्पतये नमः ॥",rudrakshaBenefits:"सुख-शांति, ज्ञान-विज्ञान, प्रचुर धन-धान्य एवं आध्यात्मिक उन्नति।"}},r=s[i]||s.मेष;return{jeevanRatna:r.jeevanRatna||e.ratnaName,bhagyaRatna:r.bhagyaRatna||"पुखराज (Yellow Sapphire)",ishtaRatna:r.ishtaRatna||e.uparatnaName,uparatna:e.uparatnaName,weightRatti:"५.२५ से ६.२५ रत्ती (शरीर के वजन के १०वें भाग के अनुसार)",metalAndFinger:e.ratnaMetalAndFinger,wearingDayAndTime:`${e.luckyDays} को प्रातः शुक्ल पक्ष में सूर्योदय के १ घंटे के भीतर (शुभ होरा में)`,pranaPratishthaMantra:e.beejMantra,avoidStones:r.avoidStones||"नीलम व गोमेद बिना कुंडली सूक्ष्म परीक्षण न पहनें",primaryRudraksha:r.primaryRudraksha||e.rudraksha,secondaryRudraksha:r.secondaryRudraksha||"३ मुखी + ७ मुखी रुद्राक्ष",rudrakshaMantra:r.rudrakshaMantra||"ॐ नमः शिवाय ॥",rudrakshaBenefits:r.rudrakshaBenefits||"नवग्रह संतुलन, आरोग्य एवं मानसिक शांति।"}}function nt(t,i,e,s=200){const r={1:{rashiX:50,rashiY:42.2,pX:50,pY:26,maxPerLine:2},2:{rashiX:25.75,rashiY:19.8,pX:25.75,pY:10.2,maxPerLine:2,isOuterTriangle:!0},3:{rashiX:19.6,rashiY:25.75,pX:11.2,pY:25.75,maxPerLine:1,isSideTriangle:!0,isOuterTriangle:!0},4:{rashiX:42.2,rashiY:50,pX:25,pY:50,maxPerLine:2},5:{rashiX:19.6,rashiY:74.25,pX:11.2,pY:74.25,maxPerLine:1,isSideTriangle:!0,isOuterTriangle:!0},6:{rashiX:25.75,rashiY:80.2,pX:25.75,pY:89.8,maxPerLine:2,isOuterTriangle:!0},7:{rashiX:50,rashiY:57.8,pX:50,pY:74,maxPerLine:2},8:{rashiX:74.25,rashiY:80.2,pX:74.25,pY:89.8,maxPerLine:2,isOuterTriangle:!0},9:{rashiX:80.4,rashiY:74.25,pX:88.8,pY:74.25,maxPerLine:1,isSideTriangle:!0,isOuterTriangle:!0},10:{rashiX:57.8,rashiY:50,pX:75,pY:50,maxPerLine:2},11:{rashiX:80.4,rashiY:25.75,pX:88.8,pY:25.75,maxPerLine:1,isSideTriangle:!0,isOuterTriangle:!0},12:{rashiX:74.25,rashiY:19.8,pX:74.25,pY:10.2,maxPerLine:2,isOuterTriangle:!0}};let o="";for(const l of t){const d=r[l.houseNumber];if(!d)continue;const p=l.planets||[],c=p.length>=3,h=d.isSideTriangle?p.length>=4?2:1:c?3:d.maxPerLine,x=p.map(u=>d.isSideTriangle||c?`${u.shortHindi||u.chartLabel}`:`${u.chartLabel||u.shortHindi}`),m=[];for(let u=0;u<x.length;u+=h)m.push(x.slice(u,u+h).join(" "));o+=`
      <text x="${d.rashiX}" y="${d.rashiY}" text-anchor="middle" dominant-baseline="central" fill="#b45309" font-size="3.1" font-weight="800" font-family="monospace">${l.rashiNumber}</text>
    `,m.forEach((u,v)=>{const y=d.isSideTriangle?m.length>=3?2.3:2.7:m.length>=3?2.5:2.9,g=(v-(m.length-1)/2)*y,$=d.isSideTriangle?m.length>=3?"2.0":"2.35":d.isOuterTriangle?x.length>=3?"2.2":"2.55":x.length>3?"2.25":"2.65";o+=`
        <text x="${d.pX}" y="${(d.pY+g).toFixed(2)}" dy="-0.06em" text-anchor="middle" dominant-baseline="central" fill="${v===0?"#7c2d12":"#1e293b"}" font-size="${$}" font-weight="800">${a(u)}</text>
      `})}return`
    <div style="width: 100%; background: #fffdf9; border: 1.5px solid #b45309; border-radius: 6px; padding: 4px 7px 7px 7px; text-align: center; box-sizing: border-box;">
      <div style="font-size: 9.4px; font-weight: 800; color: #7c2d12; margin-bottom: 1.5px; line-height: 1.28;">${a(i)}</div>
      <div style="font-size: 8px; color: #475569; margin-bottom: 5px; line-height: 1.25; font-weight: 600;">${a(e)}</div>
      <div style="width: 100%; max-width: ${s}px; margin: 0 auto;">
        <svg class="vedic-chart-svg" viewBox="0 0 100 100" width="100%" height="auto" preserveAspectRatio="xMidYMid meet" style="display: block; width: 100%; height: auto; margin: 0 auto; background: #fffbeb; border: 1.5px solid #9a3412; border-radius: 4px; overflow: hidden;">
          <rect x="1.5" y="1.5" width="97" height="97" fill="none" stroke="#9a3412" stroke-width="0.8" />
          <rect x="3" y="3" width="94" height="94" fill="none" stroke="#d97706" stroke-opacity="0.38" stroke-width="0.35" />
          <line x1="1.5" y1="1.5" x2="98.5" y2="98.5" stroke="#b45309" stroke-width="0.6" />
          <line x1="98.5" y1="1.5" x2="1.5" y2="98.5" stroke="#b45309" stroke-width="0.6" />
          <polygon points="50,1.5 98.5,50 50,98.5 1.5,50" fill="none" stroke="#9a3412" stroke-width="0.7" />
          <text x="50" y="50.4" dy="-0.06em" text-anchor="middle" dominant-baseline="central" fill="#b45309" fill-opacity="0.14" font-size="5.6" font-weight="bold">ॐ</text>
          ${o}
        </svg>
      </div>
    </div>
  `}function E(t,i,e,s=!1){const r=`<img src="${xt}" alt="Pandit Ji Online" style="width: 30px; height: 30px; min-width: 30px; max-width: 30px; border-radius: 50%; object-fit: cover; border: 1.5px solid #D4AF37; background: #0F172A; display: block;" />`,o=`<img src="${xt}" alt="Pandit Ji Online" style="width: 40px; height: 40px; min-width: 40px; max-width: 40px; border-radius: 50%; object-fit: cover; border: 2px solid #D4AF37; background: #0F172A; display: block; margin: 0 auto;" />`;return s?`
      <table style="width: 100%; table-layout: fixed; border-collapse: collapse; background: linear-gradient(90deg, #fff6e0 0%, #fde8bf 100%); border: 1.5px solid #b45309; border-radius: 6px; margin-bottom: 6px; box-sizing: border-box;">
        <tr>
          <td style="padding: 4px 4px 4px 8px; vertical-align: middle; width: 38px;">
            ${r}
          </td>
          <td style="padding: 3.5px 6px 7px 4px; vertical-align: middle; text-align: left; width: 53%;">
            <div style="font-size: 8.8px; font-weight: 800; color: #9a3412; line-height: 1.3;">॥ श्री गणेशाय नमः ॥ &bull; ${a(D.appName)} (${a(i)})</div>
            <div style="font-size: 11px; font-weight: 900; color: #7c2d12; line-height: 1.32; margin-top: 1px;">${a(t)}</div>
          </td>
          <td style="padding: 3.5px 9px 7px 6px; vertical-align: middle; text-align: right; width: 41%;">
            <div style="font-size: 8.5px; color: #1e293b; font-weight: 700; line-height: 1.32;">${e}</div>
            <div style="font-size: 7.8px; color: #78350f; margin-top: 1.5px; line-height: 1.28; font-weight: 600;">आचार्य पण्डित शशांक शर्मा &bull; ${a(D.contactPhone)} &bull; ${a(D.website)}</div>
          </td>
        </tr>
      </table>
    `:`
    <div style="background: linear-gradient(135deg, #fff8e6 0%, #fde7bc 100%); border: 2.5px double #b45309; border-radius: 6px; padding: 6px 10px 8px 10px; margin-bottom: 6px; text-align: center; box-sizing: border-box; width: 100%;">
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 3px;">
        <tr>
          <td style="width: 48px; vertical-align: middle; text-align: left;">${o}</td>
          <td style="vertical-align: middle; text-align: center;">
            <div style="font-size: 9.6px; font-weight: 800; color: #9a3412; letter-spacing: 0.3px; margin-bottom: 2px; line-height: 1.3;">
              ॥ ॐ श्री गणेशाय नमः ॥ &bull; ॥ श्री गुरुभ्यो नमः ॥ &bull; ${a(D.appName)}
            </div>
            <div class="milan-status-pill" style="display: inline-flex; align-items: center; justify-content: center; line-height: 1.1; vertical-align: middle; background: #7c2d12; border: 1px solid #b45309; color: #fffbeb; font-size: 8.3px; font-weight: 700; padding: 3px 10px 5px 10px; border-radius: 3px; margin-bottom: 2.5px; box-sizing: border-box;">
              ${a(i)}
            </div>
            <div style="font-size: 14px; font-weight: 900; color: #7c2d12; margin-bottom: 2px; line-height: 1.28;">
              ${a(t)}
            </div>
            <div style="font-size: 9.4px; color: #1e293b; font-weight: 700; line-height: 1.32;">
              ${e}
            </div>
          </td>
          <td style="width: 48px; vertical-align: middle;"></td>
        </tr>
      </table>
      <div style="border-top: 1px solid #d97706; padding-top: 3px; font-size: 8.3px; color: #334155; line-height: 1.32;">
        <b style="color: #7c2d12;">${a(D.guideTitle)}</b> <b style="color:#1e293b;">${a(D.guideName)}</b> &bull;
        <span>स्थान: ${a(D.guideAddress)} &bull; संपर्क/WhatsApp: <b style="color: #7c2d12;">${a(D.contactPhone)}</b> &bull; <b style="color:#9a3412;">${a(D.website)}</b></span>
      </div>
    </div>
  `}function Oe(t,i){return`
    <table style="width: 100%; table-layout: fixed; border-collapse: collapse; font-size: 8.2px; color: #334155; box-sizing: border-box; line-height: 1.32;">
      <tr>
        <td style="padding: 0 0 3px 0; text-align: left; vertical-align: middle; width: 82%; white-space: nowrap;">
          <b style="color: #7c2d12;">पण्डित जी ऑनलाइन (${a(D.website)})</b> &bull; आचार्य पण्डित शशांक शर्मा &bull; WhatsApp: <b style="color:#1e293b;">${a(D.contactPhone)}</b> &bull; ${a(D.email)}
        </td>
        <td style="padding: 0 0 3px 0; text-align: right; vertical-align: middle; width: 18%; color: #7c2d12; font-weight: 800; white-space: nowrap;">
          पृष्ठ ${t} / ${i}
        </td>
      </tr>
    </table>
  `}function M(t,i){return`
    <table style="width: 100%; table-layout: fixed; border-collapse: collapse; margin-bottom: 4.5px; background: linear-gradient(90deg, #fff3d6 0%, #fde9c4 100%); border-left: 4px solid #9a3412; border-top: 1px solid #d97706; border-right: 1px solid #d97706; border-bottom: 1px solid #d97706; border-radius: 4px; box-sizing: border-box;">
      <tr>
        <td style="padding: 2.5px 8px 6px 8px; font-size: 9.4px; font-weight: 800; color: #7c2d12; vertical-align: middle; text-align: left; width: ${i?"68%":"100%"}; line-height: 1.3;">
          ${a(t)}
        </td>
        ${i?`
        <td style="padding: 2.5px 8px 5px 8px; text-align: right; vertical-align: middle; width: 32%; white-space: nowrap;">
          <span class="milan-status-pill" style="display: inline-flex; align-items: center; justify-content: center; line-height: 1.1; vertical-align: middle; font-size: 8px; color: #7c2d12; background: #fffdf9; padding: 3px 10px 5px 10px; border-radius: 3px; border: 1px solid #b45309; white-space: nowrap; font-weight: 700; box-sizing: border-box;">
            ${a(i)}
          </span>
        </td>`:""}
      </tr>
    </table>
  `}const B="'Noto Sans Devanagari', 'Noto Sans Bengali', 'Noto Sans Gujarati', 'Noto Sans Tamil', 'Noto Sans Telugu', 'Noto Sans Kannada', 'Noto Sans Malayalam', 'Noto Sans Gurmukhi', 'Noto Sans', 'Segoe UI', Arial, sans-serif";function Ve(t){if(typeof document>"u"||!["bn","pa","ta","te","kn","ml","gu"].includes(t))return;const i="vedic-pdf-regional-fonts";if(document.getElementById(i))return;const e=document.createElement("link");e.id=i,e.rel="stylesheet",e.href="https://fonts.googleapis.com/css2?family=Noto+Sans+Bengali:wght@400;700&family=Noto+Sans+Gujarati:wght@400;700&family=Noto+Sans+Gurmukhi:wght@400;700&family=Noto+Sans+Tamil:wght@400;700&family=Noto+Sans+Telugu:wght@400;700&family=Noto+Sans+Kannada:wght@400;700&family=Noto+Sans+Malayalam:wght@400;700&display=swap",document.head.appendChild(e)}const Re=[["सू","Su"],["चं","Mo"],["मं","Ma"],["बु","Me"],["गु","Ju"],["शु","Ve"],["श","Sa"],["रा","Ra"],["के","Ke"],["च","Mo"],["(व*)","(R)"],["(अ^)","(C)"]];function Rt(t,i){if(i==="hi")return;const e=document.createTreeWalker(t,NodeFilter.SHOW_TEXT),s=[];let r=e.nextNode();for(;r;)s.push(r),r=e.nextNode();for(const o of s){const l=o.nodeValue||"";if(!l.trim()||l.trim()==="ॐ")continue;const d=o.parentElement;if(d&&d.closest("svg.vedic-chart-svg")){if(i==="en"||i==="hinglish"){let p=l;for(const[c,h]of Re)p.includes(c)&&(p=p.split(c).join(h));o.nodeValue=U(p,i)}else o.nodeValue=U(l,i);continue}o.nodeValue=U(l,i)}}function qt(t,i,e){return`
    <div class="vedic-pdf-page" style="width: 794px; min-width: 794px; max-width: 794px; height: 1123px; min-height: 1123px; max-height: 1123px; background: #faf4e8; color: #1e293b; padding: 15px 18px 16px 18px; box-sizing: border-box; overflow: hidden; font-family: ${B}; position: relative;">
      <div class="vedic-pdf-frame" style="width: 758px; height: 1090px; max-height: 1090px; border: 2.5px double #b45309; border-radius: 8px; padding: 9px 12px 36px 12px; background: #fffdf9; box-sizing: border-box; overflow: hidden; position: relative;">
        <div class="vedic-pdf-body" style="width: 100%; height: 1036px; max-height: 1036px; box-sizing: border-box; overflow: hidden;">
          ${t}
        </div>
        <div class="vedic-pdf-footer" style="position: absolute; bottom: 6px; left: 14px; right: 14px; height: 26px; box-sizing: border-box; border-top: 1px solid #d97706; padding: 3px 2px 3px 2px; background: #fff9ee;">
          ${Oe(i,e)}
        </div>
      </div>
    </div>
  `}async function qe(t,i){const e=Array.from(t.querySelectorAll("svg"));if(e.length===0)return;const s=[];for(const r of e)try{r.setAttribute("xmlns","http://www.w3.org/2000/svg");const l=(r.getAttribute("viewBox")||"0 0 100 100").trim().split(/[\s,]+/).map(Number),d=l[2]&&l[2]>0?l[2]:100,p=l[3]&&l[3]>0?l[3]:100,c=680,h=Math.round(c*p/d);r.setAttribute("width",String(c)),r.setAttribute("height",String(h));const x=Array.from(r.querySelectorAll("text"));for(const g of x)g.getAttribute("font-family")||g.setAttribute("font-family","'Noto Sans Devanagari', 'Noto Sans', Arial, sans-serif");const m=new XMLSerializer().serializeToString(r),u=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(m)}`,v=i.createElement("img");v.width=c,v.height=h,v.style.cssText="display: block !important; width: 100% !important; height: auto !important; margin: 0 auto !important; background: #fffbeb !important; border: 1.5px solid #9a3412 !important; border-radius: 4px !important; box-sizing: border-box !important;";const y=new Promise(g=>{const $=setTimeout(()=>g(),260);v.onload=()=>{clearTimeout($),g()},v.onerror=()=>{clearTimeout($),g()}});v.src=u,s.push(y),r.parentNode?.replaceChild(v,r)}catch{}await Promise.all(s)}function dt(t,i,e="hi"){if(typeof document>"u")return;const s=document.getElementById("vedic-direct-print-iframe");s&&s.parentNode&&s.parentNode.removeChild(s);const r=document.createElement("iframe");r.id="vedic-direct-print-iframe",r.style.cssText="position: fixed; right: 0; bottom: 0; width: 1px; height: 1px; border: 0; opacity: 0.01; pointer-events: none; z-index: -1;",document.body.appendChild(r);const o=r.contentDocument||r.contentWindow?.document;if(!o)return;const l=t.map((d,p)=>`<div class="vedic-print-page-sheet" style="page-break-after: ${p<t.length-1?"always":"auto"}; break-after: ${p<t.length-1?"page":"auto"}; margin: 0 auto;">${qt(d,p+1,t.length)}</div>`).join(`
`);o.open(),o.write(`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>${a(i.replace(/\.pdf$/i,""))}</title>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;600;700;800&display=swap" />
  <style>
    @page { size: A4 portrait; margin: 0; }
    html, body { margin: 0; padding: 0; background: #faf4e8; color: #1e293b; font-family: ${B}; -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
    .vedic-pdf-page, .vedic-pdf-page * { box-sizing: border-box !important; -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
    .vedic-pdf-page table { width: 100%; max-width: 100%; table-layout: fixed; }
    .vedic-pdf-page th, .vedic-pdf-page td { word-wrap: break-word; overflow-wrap: anywhere; vertical-align: middle; }
  </style>
</head>
<body>${l}</body>
</html>`),o.close(),e!=="hi"&&o.body&&Rt(o.body,e),setTimeout(()=>{try{r.contentWindow?.focus(),r.contentWindow?.print()}catch{window.print()}},350)}function Xe(t){const i=new Uint8Array(t),e=32768,s=[];for(let r=0;r<i.length;r+=e){const o=i.subarray(r,r+e);s.push(String.fromCharCode.apply(null,o))}return btoa(s.join(""))}function We(t,i,e,s,r,o){if(typeof document>"u")return;const l=document.getElementById("vedic-pdf-ready-modal");l&&l.parentNode&&l.parentNode.removeChild(l);const d=(()=>{try{return window.self!==window.top}catch{return!0}})(),p=(b,k,f)=>o==="hi"?b:o==="en"?k:o==="hinglish"?f:U(b,o),c=document.createElement("div");c.id="vedic-pdf-ready-modal",c.style.cssText="position: fixed; inset: 0; z-index: 999999; background: rgba(5, 8, 17, 0.82); backdrop-filter: blur(6px); display: flex; align-items: center; justify-content: center; padding: 16px; font-family: "+B+";";const h=document.createElement("div");h.style.cssText="width: 100%; max-width: 440px; background: linear-gradient(180deg, #fffdf9 0%, #faf4e8 100%); border: 3px double #b45309; border-radius: 20px; padding: 20px 18px; box-shadow: 0 24px 60px rgba(0,0,0,0.65); text-align: center; color: #1e293b; position: relative;";const x=document.createElement("button");x.type="button",x.setAttribute("aria-label","Close"),x.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',x.style.cssText="position: absolute; top: 10px; right: 12px; width: 30px; height: 30px; border-radius: 999px; border: 1px solid #d97706; background: #fef7e6; color: #7c2d12; display: flex; align-items: center; justify-content: center; cursor: pointer;";const m=()=>{c.parentNode&&c.parentNode.removeChild(c),setTimeout(()=>{URL.revokeObjectURL(i)},6e4)};x.onclick=m,c.onclick=b=>{b.target===c&&m()};const u=document.createElement("div");u.style.cssText="display: inline-block; background: #fef3c7; border: 1px solid #d97706; color: #7c2d12; font-size: 11px; font-weight: 800; padding: 4px 12px; border-radius: 999px; margin-bottom: 8px;",u.innerText=p(`${r.length}-पृष्ठ शाही प्रिंट-रेडी PDF तैयार है`,`${r.length}-Page Royal Print-Ready PDF is Ready`,`${r.length}-Page Print-Ready PDF Taiyar Hai`);const v=document.createElement("h3");v.style.cssText="margin: 0 0 6px 0; font-size: 17px; font-weight: 900; color: #7c2d12; line-height: 1.35;",v.innerText=p("पण्डित जी ऑनलाइन • वैदिक महा-पत्रिका PDF","Pandit Ji Online • Vedic Maha-Patrika PDF","Pandit Ji Online • Vedic Maha-Patrika PDF");const y=document.createElement("p");y.style.cssText="margin: 0 0 14px 0; font-size: 12px; color: #475569; line-height: 1.45;",y.innerText=p("आपकी PDF फाइल फोन के Downloads में सेव हो रही है। दोबारा डाउनलोड करने के लिए हरे बटन पर टैप करें या सीधे WhatsApp पर शेयर करें:","Your PDF file is saving to your Downloads folder. Tap the green button to download again or share directly on WhatsApp:","Aapki PDF file phone ke Downloads me save ho rahi hai. Dobara download karne ke liye green button dabayein ya WhatsApp par share karein:");const g=document.createElement("a");g.href=e||i,d&&e&&(g.target="_blank",g.rel="noopener noreferrer"),g.download=s,g.style.cssText="display: flex; align-items: center; justify-content: center; gap: 8px; width: 100%; padding: 13px 16px; border-radius: 14px; background: linear-gradient(90deg, #059669 0%, #10b981 100%); color: #ffffff; font-weight: 900; font-size: 14px; text-decoration: none; box-shadow: 0 8px 20px rgba(5, 150, 105, 0.35); margin-bottom: 10px; box-sizing: border-box; cursor: pointer;",g.innerText=p("अभी PDF फाइल डाउनलोड / सेव करें (Download PDF)","Download / Save PDF File Now","Abhi PDF File Download / Save Karein"),g.onclick=()=>{setTimeout(()=>{c.parentNode&&c.parentNode.removeChild(c)},1800)};const $=document.createElement("button");$.type="button",$.style.cssText="display: flex; align-items: center; justify-content: center; gap: 8px; width: 100%; padding: 11px 16px; border-radius: 14px; background: linear-gradient(90deg, #d97706 0%, #f59e0b 100%); color: #fffdf9; font-weight: 800; font-size: 13px; border: none; box-shadow: 0 6px 16px rgba(217, 119, 6, 0.28); margin-bottom: 10px; box-sizing: border-box; cursor: pointer;",$.innerText=p("WhatsApp / फोन पर सीधे PDF शेयर करें","Share PDF directly on WhatsApp / Phone","WhatsApp / Phone par seedhe PDF Share karein"),$.onclick=async()=>{try{const b=new File([t],s,{type:"application/pdf"});if(navigator.canShare&&navigator.canShare({files:[b]})){await navigator.share({files:[b],title:s.replace(/\.pdf$/i,""),text:"पण्डित जी ऑनलाइन — वैदिक ज्योतिष महा-पत्रिका PDF (www.panditjionline.online • +91 7017279043)"}),m();return}}catch{}g.click()};const w=document.createElement("button");w.type="button",w.style.cssText="display: flex; align-items: center; justify-content: center; gap: 6px; width: 100%; padding: 9px 14px; border-radius: 12px; background: #fef7e6; color: #7c2d12; font-weight: 700; font-size: 12px; border: 1.5px solid #d97706; box-sizing: border-box; cursor: pointer;",w.innerText=p("सीधे प्रिंट करें (Print / Save as PDF)","Direct Print / Save as PDF","Seedhe Print / Save as PDF karein"),w.onclick=()=>{m(),dt(r,s,o)},h.appendChild(x),h.appendChild(u),h.appendChild(v),h.appendChild(y),h.appendChild(g),h.appendChild($),h.appendChild(w),c.appendChild(h),document.body.appendChild(c)}async function Ue(t,i,e,s="hi"){const r=i.endsWith(".pdf")?i:`${i}.pdf`;try{const o=t.output("arraybuffer"),l=new Blob([o],{type:"application/pdf"}),d=URL.createObjectURL(l),p=(()=>{try{return window.self!==window.top}catch{return!0}})();let c=null;if(p&&o.byteLength<28e5)try{const h=Xe(o),x=await fetch("/api/pdf-download",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({filename:r,base64:h})});if(x.ok){const m=await x.json();m?.ok&&typeof m.downloadUrl=="string"&&(c=m.downloadUrl)}}catch{}try{if(c){const h=document.createElement("iframe");h.style.display="none",h.src=c,document.body.appendChild(h),setTimeout(()=>{document.body.contains(h)&&document.body.removeChild(h)},15e3)}else{const h=document.createElement("a");h.href=d,h.download=r,h.style.display="none",document.body.appendChild(h),h.click(),setTimeout(()=>{document.body.contains(h)&&document.body.removeChild(h)},2e3)}}catch{}We(l,d,c,r,e,s)}catch{try{t.save(r)}catch{dt(e,r,s)}}}async function Xt(t,i=3500){const e=[],s=r=>{const o=r?.fonts;if(o){if(typeof o.load=="function"){const l="ॐ ह्रां ह्रीं ह्रौं श्रां श्रीं श्रौं क्रां क्रीं क्रौं ब्रां ब्रीं ब्रौं ग्रां ग्रीं ग्रौं द्रां द्रीं द्रौं प्रां प्रीं प्रौं भ्रां भ्रीं भ्रौं स्रां स्रीं स्रौं मं रा मंगल राहु चन्द्रमसे शनैश्चराय नमः लग्न राशि नक्षत्र मेष वृषभ मिथुन कर्क सिंह कन्या तुला वृश्चिक धनु मकर कुंभ कुम्भ मीन दिन ०१२३४५६७८९ 0123456789 (Libra Pisces Virgo Aquarius)";for(const d of["400","500","600","700","800","900"])e.push(o.load(`${d} 12px "Noto Sans Devanagari"`,l).catch(()=>{}))}o.ready&&e.push(o.ready.catch(()=>{}))}};typeof document<"u"&&s(document),t&&t!==document&&s(t),e.length>0&&await Promise.race([Promise.all(e),new Promise(r=>setTimeout(r,i))])}function Wt(t,i=".vedic-book-a4-page, .vedic-pdf-page"){try{const e="pj-h2c-devanagari-root-fix";if(!t.getElementById(e)){const o=t.createElement("style");o.id=e,o.textContent=`
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
      `,(t.head||t.documentElement).appendChild(o)}const s=Array.from(t.querySelectorAll(i));if(s.length===0)return;const r=new Set(["STYLE","SCRIPT","NOSCRIPT","SVG","TITLE","TEXTAREA","OPTION"]);for(const o of s){const l=[],d=t.createTreeWalker(o,NodeFilter.SHOW_TEXT);let p;for(;p=d.nextNode();){const c=p;if(!c.nodeValue||!c.nodeValue.trim())continue;const h=c.parentElement;h&&(r.has(h.tagName)||h.closest("svg, .pj-h2c-devanagari-lift, .pj-h2c-no-lift")||l.push(c))}for(const c of l){const h=c.parentElement;if(!h)continue;const x=t.createElement("span");x.className="pj-h2c-devanagari-lift",x.style.position="relative",x.style.top="-2px",h.insertBefore(x,c),x.appendChild(c)}}}catch{}}async function Ke(t,i,e="hi"){Ve(e);const{jsPDF:o,html2canvas:l}=await It(),d=new o({orientation:"portrait",unit:"mm",format:"a4",compress:!0}),p=210,c=297,h=`
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
        font-family: ${B} !important;
        font-synthesis: none !important;
        line-height: 1.35;
      }
      .vedic-pdf-page,
      .vedic-pdf-page * {
        box-sizing: border-box !important;
        font-family: ${B} !important;
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
        font-family: ${B} !important;
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
  `,x=document.createElement("iframe");x.id="vedic-pdf-clean-iframe",x.style.cssText="position:fixed;left:-9999px;top:0;width:794px;height:1123px;border:0;margin:0;padding:0;z-index:-1;pointer-events:none;background:#faf4e8;";const m=y=>{const g=`पृष्ठ ${y} / ${t.length} तैयार हो रहा है...`;return e==="hi"?g:e==="en"?`Preparing Page ${y} / ${t.length}...`:e==="hinglish"?`Page ${y} / ${t.length} taiyar ho raha hai...`:U(g,e)},u=document.createElement("div");u.id="vedic-pdf-progress-badge",u.style.cssText=`position:fixed;top:16px;left:50%;transform:translateX(-50%);z-index:999999;background:linear-gradient(135deg,#0F172A 0%,#1E293B 100%);border:2px solid #D4AF37;color:#FFF9ED;padding:12px 18px;border-radius:16px;min-width:290px;max-width:92vw;box-shadow:0 16px 42px rgba(0,0,0,0.6);font-family:${B};`,u.innerHTML=`
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;">
      <img src="${xt}" alt="Pandit Ji Online" style="width:32px;height:32px;border-radius:50%;object-fit:cover;border:1.5px solid #D4AF37;flex-shrink:0;" />
      <div style="flex:1;min-width:0;">
        <div style="font-size:10.5px;font-weight:800;color:#FDE68A;letter-spacing:0.3px;">PANDIT JI ONLINE • 4K वैदिक PDF</div>
        <div id="vedic-pdf-progress-text" style="font-size:12.5px;font-weight:800;color:#FFFFFF;margin-top:1px;">${m(1)}</div>
      </div>
      <div id="vedic-pdf-progress-pct" style="font-size:12px;font-weight:900;color:#FDE68A;min-width:34px;text-align:right;">0%</div>
    </div>
    <div style="width:100%;height:7px;background:rgba(255,249,237,0.16);border-radius:999px;overflow:hidden;border:1px solid rgba(212,175,55,0.45);">
      <div id="vedic-pdf-progress-fill" style="width:4%;height:100%;background:linear-gradient(90deg,#FF6F00 0%,#D4AF37 100%);border-radius:999px;transition:width 0.18s ease-out;"></div>
    </div>
  `;const v=y=>{const g=Math.min(100,Math.round(y/Math.max(1,t.length)*100)),$=u.querySelector("#vedic-pdf-progress-text"),w=u.querySelector("#vedic-pdf-progress-pct"),b=u.querySelector("#vedic-pdf-progress-fill");$&&($.innerText=m(y)),w&&(w.innerText=`${g}%`),b&&(b.style.width=`${Math.max(4,g)}%`)};document.body.appendChild(x),document.body.appendChild(u);try{const y=x.contentDocument||x.contentWindow?.document;if(!y)throw new Error("Could not initialize clean PDF iframe document");y.open(),y.write(`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;600;700;800&display=swap" />
  ${h}
</head>
<body style="margin:0;padding:0;background:#faf4e8;color:#1e293b;">
  <div id="vedic-pdf-render-host" style="width:794px;height:1123px;margin:0;padding:0;background:#faf4e8;overflow:hidden;"></div>
</body>
</html>`),y.close();const g=y.getElementById("vedic-pdf-render-host");if(!g)throw new Error("Could not find PDF render host in clean iframe");await Xt(y,1600);const $=2.25;for(let w=0;w<t.length;w++){v(w+1),g.innerHTML=qt(t[w],w+1,t.length);const b=g.querySelector(".vedic-pdf-page");if(!b)continue;e!=="hi"&&Rt(b,e),await qe(b,y);const k=Array.from(b.querySelectorAll("img"));k.length>0&&await Promise.race([Promise.all(k.map(S=>S.complete?Promise.resolve():new Promise(T=>{S.onload=()=>T(),S.onerror=()=>T()}))),new Promise(S=>setTimeout(S,350))]),await new Promise(S=>setTimeout(S,10)),w>0&&d.addPage("a4","portrait"),document.fonts?.ready&&await document.fonts.ready;const f=await l(b,{scale:$,useCORS:!0,allowTaint:!0,logging:!1,backgroundColor:"#faf4e8",x:0,y:0,scrollX:0,scrollY:0,width:794,height:1123,windowWidth:794,windowHeight:1123,onclone:S=>{Wt(S,".vedic-pdf-page")}});d.setFillColor(250,244,232),d.rect(0,0,p,c,"F");const N=f.toDataURL("image/jpeg",.86);d.addImage(N,"JPEG",0,0,p,c,void 0,"FAST"),f.width=0,f.height=0,g.innerHTML=""}return await Ue(d,i,t,e),!0}catch(y){return console.error("Error rendering Vedic PDF, opening direct print fallback:",y),dt(t,i,e),!0}finally{document.body.contains(u)&&document.body.removeChild(u),document.body.contains(x)&&document.body.removeChild(x)}}async function Ge(t,i="kundali-milan-full-report-container",e="hi"){const s=Bt(t),r=J(t.boyName),o=J(t.girlName),l=e==="hi"?"":`_${e.toUpperCase()}`,d=`Brihat_36_Gun_Milan_${r}_and_${o}${l}_PanditJiOnline`;return Ke(s,d,e)}function Je(t,i="hi"){const e=Bt(t),s=J(t.boyName),r=J(t.girlName),o=i==="hi"?"":`_${i.toUpperCase()}`,l=`Brihat_36_Gun_Milan_${s}_and_${r}${o}_PanditJiOnline`;dt(e,l,i)}export{Ie as a,Wt as b,_e as c,Ge as d,It as e,Ye as g,Je as p,J as s,Xt as w};
