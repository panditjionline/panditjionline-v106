import{_ as X}from"./vendor-pdf-DEj_dQtj.js";import{I as W}from"./panchang-core-TH1HXJAY.js";import{q as V,t as j}from"./index-B0-60ZKO.js";const K={सूर्य:{friends:["चन्द्र","चंद्र","मंगल","गुरु"],neutral:["बुध"],enemies:["शुक्र","शनि","राहु","केतु"]},चन्द्र:{friends:["सूर्य","बुध"],neutral:["मंगल","गुरु","शुक्र","शनि"],enemies:["राहु","केतु"]},चंद्र:{friends:["सूर्य","बुध"],neutral:["मंगल","गुरु","शुक्र","शनि"],enemies:["राहु","केतु"]},मंगल:{friends:["सूर्य","चन्द्र","चंद्र","गुरु"],neutral:["शुक्र","शनि"],enemies:["बुध","राहु","केतु"]},बुध:{friends:["सूर्य","शुक्र","राहु"],neutral:["मंगल","गुरु","शनि"],enemies:["चन्द्र","चंद्र","केतु"]},गुरु:{friends:["सूर्य","चन्द्र","चंद्र","मंगल"],neutral:["शनि","केतु"],enemies:["बुध","शुक्र","राहु"]},शुक्र:{friends:["बुध","शनि","राहु"],neutral:["मंगल","गुरु"],enemies:["सूर्य","चन्द्र","चंद्र","केतु"]},शनि:{friends:["बुध","शुक्र","राहु"],neutral:["गुरु"],enemies:["सूर्य","चन्द्र","चंद्र","मंगल","केतु"]},राहु:{friends:["बुध","शुक्र","शनि"],neutral:["गुरु"],enemies:["सूर्य","चन्द्र","चंद्र","मंगल"]},केतु:{friends:["मंगल","गुरु"],neutral:["बुध","शुक्र","शनि"],enemies:["सूर्य","चन्द्र","चंद्र"]}};function C(t){const d=String(t||"गुरु").split(" ")[0].trim();return d==="चंद्र"?"चन्द्र":d}function G(t,d){const i=C(t),r=C(d);if(i===r)return{relation:"स्वग्रह / एक ही स्वामी (अति उत्तम मित्र)",color:"#047857",harmonyNote:"दोनों राशियों/ग्रहों का स्वामी एक ही होने से पूर्ण वैचारिक एवं आत्मिक एकरूपता।"};const a=K[i],o=K[r],n=a?.friends.includes(r)?1:a?.enemies.includes(r)?-1:0,s=o?.friends.includes(i)?1:o?.enemies.includes(i)?-1:0,h=n+s;return h>=2?{relation:"अति मित्र (Adhi Mitra — सर्वोच्च मैत्री)",color:"#047857",harmonyNote:"परस्पर घनिष्ठ नैसर्गिक मित्रता — दांपत्य में सहज प्रेम, सम्मान व सहयोग।"}:h===1?{relation:"मित्र + सम (Mitra — शुभ समन्वय)",color:"#047857",harmonyNote:"एक पक्ष मित्र व दूसरा सम होने से गृहस्थ जीवन में उत्तम सामंजस्य।"}:h===0?{relation:"सम भाव (Neutral — संतुलित संबंध)",color:"#b45309",harmonyNote:"मध्यम/सम संबंध — आपसी संवाद एवं समझदारी से सुखद निर्वाह।"}:{relation:"वैचारिक भिन्नता (शांति उपाय कल्पनीय)",color:"#be123c",harmonyNote:"स्वाभाविक दृष्टिकोण में अंतर — धैर्य एवं इष्ट आराधना से सामंजस्य स्थापित करें।"}}function Q(t){const d=t.boyKundali||W(t.boyName||"वर",t.boyDob||"1996-03-10",t.boyTime||"10:55",t.boyPlace||"रुद्रपुर, उत्तराखण्ड"),i=t.girlKundali||W(t.girlName||"वधू",t.girlDob||"1998-11-15",t.girlTime||"14:15",t.girlPlace||"रुद्रपुर, उत्तराखण्ड"),r=t.deepMatchInsights,a=`वर: <b style="color:#7c2d12;">${e(t.boyName)}</b> (${e(t.boyRashi)}) &nbsp;&bull;&nbsp; वधू: <b style="color:#7c2d12;">${e(t.girlName)}</b> (${e(t.girlRashi)})`,o=t.koots[0],n=t.koots[1],s=t.koots[2],h=t.koots[3],c=t.koots.find(l=>l.hindiName.includes("मैत्री")||l.name.includes("Maitri"))||t.koots[4],p=t.koots.find(l=>l.hindiName.includes("गण")||l.name.includes("Gana"))||t.koots[5],x=t.koots.find(l=>l.hindiName.includes("भकूट")||l.name.includes("Bhakoot"))||t.koots[6],f=t.koots.find(l=>l.hindiName.includes("नाड़ी")||l.name.includes("Nadi"))||t.koots[7],b=(f?.obtainedPoints??8)===0,m=(x?.obtainedPoints??7)===0,y=(p?.obtainedPoints??6)===0,g=t.boyRashi===t.girlRashi&&t.boyNakshatra!==t.girlNakshatra,w=t.boyNakshatra===t.girlNakshatra&&t.boyPada!==t.girlPada,u=C(t.boyRashiLord)===C(t.girlRashiLord)||(c?.obtainedPoints??0)>=4,$=`
    ${T("बृहत् ३६ गुण मिलान एवं वैदिक विवाह मेलापक महा-पत्रिका (6-Page Report)","दृक् गणित, लहिरी चित्रापक्ष अयनांश एवं बृहत् पाराशर होरा शास्त्र पर आधारित",a)}

    <div style="background: linear-gradient(90deg, #fff6e0 0%, #fde8bf 100%); border: 2px solid #b45309; border-radius: 6px; padding: 7px 12px 9px 12px; margin-bottom: 8px; width: 100%; box-sizing: border-box;">
      <table style="width: 100%; table-layout: fixed; border-collapse: collapse;">
        <tr>
          <td style="width: 72%; vertical-align: middle; text-align: left; padding-right: 10px;">
            <div style="font-size: 9px; color: #9a3412; font-weight: 800; letter-spacing: 0.3px;">अष्टकूट ३६ गुण मिलान सर्वोच्च निर्णय (Overall Matchmaking Verdict)</div>
            <div style="font-size: 13px; font-weight: 900; color: #7c2d12; margin-top: 2px; line-height: 1.3;">
              ${e(t.overallVerdict)} &bull; <span style="color: #047857;">${t.compatibilityPercentage}% वैवाहिक अनुकूलता</span>
            </div>
            <div style="font-size: 8.6px; color: #1e293b; margin-top: 2.5px; line-height: 1.35;">
              ${e(t.verdictDescription)}
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

    ${P("१. वर एवं वधू का संपूर्ण जन्म पंचांग व ज्योतिषीय विवरण (Groom & Bride Astro Profile)","पृष्ठ १ : मुख्य विवरण")}
    <table style="width: 100%; table-layout: fixed; border-collapse: separate; border-spacing: 8px 0; margin-bottom: 8px;">
      <tr>
        <td style="width: 50%; vertical-align: top; padding: 0;">
          <div style="background: #fffdf9; border: 1.5px solid #d97706; border-radius: 6px; padding: 6px 10px 9px 10px;">
            <div style="font-size: 10px; font-weight: 900; color: #7c2d12; border-bottom: 1px solid #d97706; padding-bottom: 4px; margin-bottom: 5px;">
              वर पत्रिका विवरण (Groom): ${e(t.boyName)}
            </div>
            <table style="width: 100%; border-collapse: collapse; font-size: 8.5px;">
              <tr><td style="padding: 2.5px 0; color: #9a3412; font-weight: 700; width: 42%;">जन्म तिथि व समय:</td><td style="padding: 2.5px 0; color: #1e293b;">${e(t.boyDob||d.input.formattedDob)} • ${e(t.boyTime||d.input.formattedTime)}</td></tr>
              <tr><td style="padding: 2.5px 0; color: #9a3412; font-weight: 700;">जन्म स्थान:</td><td style="padding: 2.5px 0; color: #1e293b;">${e(t.boyPlace||d.input.birthPlace)}</td></tr>
              <tr><td style="padding: 2.5px 0; color: #9a3412; font-weight: 700;">जन्म लग्न व स्वामी:</td><td style="padding: 2.5px 0; color: #047857; font-weight: 800;">${e(t.boyLagna)} (${e(d.panchang.lagnaLord)})</td></tr>
              <tr><td style="padding: 2.5px 0; color: #9a3412; font-weight: 700;">चन्द्र राशि व राशिपति:</td><td style="padding: 2.5px 0; color: #7c2d12; font-weight: 700;">${e(t.boyRashi)} (${e(t.boyRashiLord)})</td></tr>
              <tr><td style="padding: 2.5px 0; color: #9a3412; font-weight: 700;">जन्म नक्षत्र व चरण:</td><td style="padding: 2.5px 0; color: #1e293b;">${e(t.boyNakshatra)} (चरण ${t.boyPada})</td></tr>
              <tr><td style="padding: 2.5px 0; color: #9a3412; font-weight: 700;">वर्ण / वश्य / योनि:</td><td style="padding: 2.5px 0; color: #334155;">${e(o?.boyValue)} / ${e(n?.boyValue)} / ${e(h?.boyValue)}</td></tr>
              <tr><td style="padding: 2.5px 0; color: #9a3412; font-weight: 700;">गण एवं नाड़ी:</td><td style="padding: 2.5px 0; color: #7c2d12; font-weight: 600;">${e(p?.boyValue)} गण • ${e(f?.boyValue)} नाड़ी</td></tr>
              <tr><td style="padding: 2.5px 0; color: #9a3412; font-weight: 700;">मांगलिक विचार:</td><td style="padding: 2.5px 0; color: ${t.manglikStatus.boyManglik?"#be123c":"#047857"}; font-weight: 800;">${e(t.manglikStatus.boySeverity)} (लग्न से ${t.manglikStatus.boyMarsHouseLagna}वां भाव)</td></tr>
            </table>
          </div>
        </td>
        <td style="width: 50%; vertical-align: top; padding: 0;">
          <div style="background: #fffdf9; border: 1.5px solid #d97706; border-radius: 6px; padding: 6px 10px 9px 10px;">
            <div style="font-size: 10px; font-weight: 900; color: #7c2d12; border-bottom: 1px solid #d97706; padding-bottom: 4px; margin-bottom: 5px;">
              वधू पत्रिका विवरण (Bride): ${e(t.girlName)}
            </div>
            <table style="width: 100%; border-collapse: collapse; font-size: 8.5px;">
              <tr><td style="padding: 2.5px 0; color: #9a3412; font-weight: 700; width: 42%;">जन्म तिथि व समय:</td><td style="padding: 2.5px 0; color: #1e293b;">${e(t.girlDob||i.input.formattedDob)} • ${e(t.girlTime||i.input.formattedTime)}</td></tr>
              <tr><td style="padding: 2.5px 0; color: #9a3412; font-weight: 700;">जन्म स्थान:</td><td style="padding: 2.5px 0; color: #1e293b;">${e(t.girlPlace||i.input.birthPlace)}</td></tr>
              <tr><td style="padding: 2.5px 0; color: #9a3412; font-weight: 700;">जन्म लग्न व स्वामी:</td><td style="padding: 2.5px 0; color: #047857; font-weight: 800;">${e(t.girlLagna)} (${e(i.panchang.lagnaLord)})</td></tr>
              <tr><td style="padding: 2.5px 0; color: #9a3412; font-weight: 700;">चन्द्र राशि व राशिपति:</td><td style="padding: 2.5px 0; color: #7c2d12; font-weight: 700;">${e(t.girlRashi)} (${e(t.girlRashiLord)})</td></tr>
              <tr><td style="padding: 2.5px 0; color: #9a3412; font-weight: 700;">जन्म नक्षत्र व चरण:</td><td style="padding: 2.5px 0; color: #1e293b;">${e(t.girlNakshatra)} (चरण ${t.girlPada})</td></tr>
              <tr><td style="padding: 2.5px 0; color: #9a3412; font-weight: 700;">वर्ण / वश्य / योनि:</td><td style="padding: 2.5px 0; color: #334155;">${e(o?.girlValue)} / ${e(n?.girlValue)} / ${e(h?.girlValue)}</td></tr>
              <tr><td style="padding: 2.5px 0; color: #9a3412; font-weight: 700;">गण एवं नाड़ी:</td><td style="padding: 2.5px 0; color: #7c2d12; font-weight: 600;">${e(p?.girlValue)} गण • ${e(f?.girlValue)} नाड़ी</td></tr>
              <tr><td style="padding: 2.5px 0; color: #9a3412; font-weight: 700;">मांगलिक विचार:</td><td style="padding: 2.5px 0; color: ${t.manglikStatus.girlManglik?"#be123c":"#047857"}; font-weight: 800;">${e(t.manglikStatus.girlSeverity)} (लग्न से ${t.manglikStatus.girlMarsHouseLagna}वां भाव)</td></tr>
            </table>
          </div>
        </td>
      </tr>
    </table>

    ${P("२. वर एवं वधू की लग्न (D-1) एवं नवमांश (D-9) कुंडली चक्र","उत्तर भारतीय हीरक शैली")}
    <table style="width: 100%; table-layout: fixed; border-collapse: separate; border-spacing: 6px 0; margin-bottom: 8px;">
      <tr>
        <td style="width: 25%; vertical-align: top; padding: 0;">
          ${A(d.lagnaChart,"वर लग्न (D-1)",`${t.boyName} (${t.boyLagna})`,148)}
        </td>
        <td style="width: 25%; vertical-align: top; padding: 0;">
          ${A(d.navamsaChart,"वर नवमांश (D-9)",`राशि: ${t.boyRashi}`,148)}
        </td>
        <td style="width: 25%; vertical-align: top; padding: 0;">
          ${A(i.lagnaChart,"वधू लग्न (D-1)",`${t.girlName} (${t.girlLagna})`,148)}
        </td>
        <td style="width: 25%; vertical-align: top; padding: 0;">
          ${A(i.navamsaChart,"वधू नवमांश (D-9)",`राशि: ${t.girlRashi}`,148)}
        </td>
      </tr>
    </table>

    ${P("३. मेलापक महा-पत्रिका कार्यकारी सारांश (Executive Matchmaking Summary)","शास्त्रोक्त निष्कर्ष")}
    <div style="background: #fef8ec; border: 1.5px solid #b45309; border-radius: 6px; padding: 6px 10px 9px 10px; font-size: 8.5px; color: #1e293b; line-height: 1.42;">
      <div><b style="color: #7c2d12;">&bull; अष्टकूट गुण योग:</b> कुल ३६ गुणों में से <b style="color:#047857;">${t.totalScore} गुण (${t.compatibilityPercentage}%)</b> प्राप्त हुए हैं। शास्त्रानुसार १८ से अधिक गुण विवाह हेतु शुभ तथा २४ से अधिक गुण उत्तम कोटि के माने जाते हैं।</div>
      <div style="margin-top: 2.5px;"><b style="color: #7c2d12;">&bull; राशि स्वामी एवं सप्तम भाव समन्वय:</b> ${e(t.planetaryHarmony.rashiLordRelation)} &bull; ${e(t.planetaryHarmony.seventhHouseSummary)}</div>
      <div style="margin-top: 2.5px;"><b style="color: #7c2d12;">&bull; मांगलिक दोष समन्वय:</b> ${e(t.manglikStatus.description)}</div>
    </div>
  `,M=t.koots.map((l,S)=>{const v=l.status==="favorable"?"शुभ / उत्तम":l.status==="moderate"?"मध्यम / परिहार्य":"दोष / विचारणीय",z=l.status==="favorable"?"#047857":l.status==="moderate"?"#b45309":"#be123c",I=l.hindiName?l.hindiName.replace(/^\d+\.\s*/,`${S+1}. `):`${S+1}. ${l.name}`;return`
        <tr style="background: ${S%2===0?"#fffdf9":"#fef7e6"};">
          <td style="padding: 4.5px 7px 7px 7px; border: 1px solid #d97706; color: #7c2d12; font-weight: 800; font-size: 8.8px; line-height: 1.32; width: 18%;">
            ${e(I)}<br/>
            <span style="font-size: 7.7px; color: #475569; font-weight: 600;">${e(l.meaning)}</span>
          </td>
          <td style="padding: 4.5px 7px 7px 7px; border: 1px solid #d97706; color: #1e293b; font-weight: 700; font-size: 8.6px; line-height: 1.32; width: 12%;">${e(l.boyValue)}</td>
          <td style="padding: 4.5px 7px 7px 7px; border: 1px solid #d97706; color: #9a3412; font-weight: 700; font-size: 8.6px; line-height: 1.32; width: 12%;">${e(l.girlValue)}</td>
          <td style="padding: 4.5px 7px 7px 7px; border: 1px solid #d97706; color: #334155; text-align: center; font-weight: 700; font-size: 8.8px; width: 8%;">${l.maxPoints}</td>
          <td style="padding: 4.5px 7px 7px 7px; border: 1px solid #d97706; color: #7c2d12; text-align: center; font-weight: 900; font-size: 9.6px; width: 8%;">${l.obtainedPoints}</td>
          <td style="padding: 4.5px 7px 7px 7px; border: 1px solid #d97706; color: ${z}; font-weight: 800; text-align: center; font-size: 8.3px; width: 11%;">${e(v)}</td>
          <td style="padding: 4.5px 7px 7px 7px; border: 1px solid #d97706; color: #1e293b; font-size: 8.3px; line-height: 1.34; width: 31%;">
            ${e(l.verdict)}
            ${l.remedy?`<div style="color:#9a3412;font-size:7.8px;margin-top:2px;"><b>उपाय:</b> ${e(l.remedy)}</div>`:""}
          </td>
        </tr>
      `}).join(""),D=`
    ${T("अष्टकूट ३६ गुणों की प्रमाणिक गणना एवं शास्त्रोक्त फल सारणी","पृष्ठ २ : अष्टकूट सारणी",a,!0)}

    ${P("४. अष्टकूट (वर्ण, वश्य, तारा, योनि, मैत्री, गण, भकूट, नाड़ी) ३६ गुण सारणी",`प्राप्त गुण: ${t.totalScore} / 36`)}
    <table style="width: 100%; border-collapse: collapse; margin-bottom: 8px; table-layout: fixed;">
      <thead>
        <tr style="background: #fdecc8;">
          <th style="padding: 4px 7px 7px 7px; border: 1px solid #b45309; color: #7c2d12; font-size: 8.6px; text-align: left; width: 18%;">कूट एवं कारक क्षेत्र</th>
          <th style="padding: 4px 7px 7px 7px; border: 1px solid #b45309; color: #7c2d12; font-size: 8.6px; text-align: left; width: 12%;">वर (${e(t.boyName)})</th>
          <th style="padding: 4px 7px 7px 7px; border: 1px solid #b45309; color: #7c2d12; font-size: 8.6px; text-align: left; width: 12%;">वधू (${e(t.girlName)})</th>
          <th style="padding: 4px 7px 7px 7px; border: 1px solid #b45309; color: #7c2d12; font-size: 8.6px; text-align: center; width: 8%;">पूर्णांक</th>
          <th style="padding: 4px 7px 7px 7px; border: 1px solid #b45309; color: #7c2d12; font-size: 8.6px; text-align: center; width: 8%;">प्राप्तांक</th>
          <th style="padding: 4px 7px 7px 7px; border: 1px solid #b45309; color: #7c2d12; font-size: 8.6px; text-align: center; width: 11%;">निर्णय</th>
          <th style="padding: 4px 7px 7px 7px; border: 1px solid #b45309; color: #7c2d12; font-size: 8.6px; text-align: left; width: 31%;">शास्त्रोक्त फल एवं जीवन पर प्रभाव</th>
        </tr>
      </thead>
      <tbody>
        ${M}
        <tr style="background: #fef0c7;">
          <td colspan="3" style="padding: 5px 7px 7px 7px; border: 1px solid #b45309; color: #7c2d12; font-weight: 900; font-size: 9px; text-align: right;">कुल अष्टकूट गुण मिलान योग (Total Ashtakoot Score):</td>
          <td style="padding: 5px 7px 7px 7px; border: 1px solid #b45309; color: #1e293b; font-weight: 900; font-size: 9.2px; text-align: center;">36</td>
          <td style="padding: 5px 7px 7px 7px; border: 1px solid #b45309; color: #7c2d12; font-weight: 900; font-size: 10.2px; text-align: center;">${t.totalScore}</td>
          <td colspan="2" style="padding: 5px 7px 7px 7px; border: 1px solid #b45309; color: #047857; font-weight: 900; font-size: 9px;">${e(t.overallVerdict)} (${t.compatibilityPercentage}% अनुकूलता)</td>
        </tr>
      </tbody>
    </table>

    ${P("५. अष्टकूट श्रेणी वर्गीकरण एवं मुहूर्त चिंतामणि प्रमाण","शास्त्रीय मानदंड")}
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
  `,H=G(t.boyRashiLord,t.girlRashiLord),N=r?.extendedKoots?.length?r.extendedKoots.map((l,S)=>{const v=l.status==="शुभ"?"#047857":l.status==="मध्यम"?"#b45309":"#be123c";return`
            <tr style="background: ${S%2===0?"#fffdf9":"#fef7e6"};">
              <td style="padding: 3px 6px 5.5px 6px; border: 1px solid #d97706; color: #7c2d12; font-weight: 800; width: 22%;">${e(l.name)}</td>
              <td style="padding: 3px 6px 5.5px 6px; border: 1px solid #d97706; color: #1e293b; width: 21%;">${e(l.boyDetail)} / ${e(l.girlDetail)}</td>
              <td style="padding: 3px 6px 5.5px 6px; border: 1px solid #d97706; color: ${v}; font-weight: 800; text-align: center; width: 12%;">${e(l.status)}</td>
              <td style="padding: 3px 6px 5.5px 6px; border: 1px solid #d97706; color: #334155; width: 45%;">${e(l.detail)}</td>
            </tr>
          `}).join(""):`
      <tr style="background: #fffdf9;">
        <td style="padding: 3px 6px; border: 1px solid #d97706; color: #7c2d12; font-weight: 800; width: 22%;">१. वर्ण कूट (${o?.obtainedPoints??0}/1)</td>
        <td colspan="3" style="padding: 3px 6px; border: 1px solid #d97706; color: #1e293b;">वर (${e(o?.boyValue)}) एवं वधू (${e(o?.girlValue)}) — ${e(o?.verdict)}</td>
      </tr>
      <tr style="background: #fef7e6;">
        <td style="padding: 3px 6px; border: 1px solid #d97706; color: #7c2d12; font-weight: 800;">२. वश्य व योनि कूट</td>
        <td colspan="3" style="padding: 3px 6px; border: 1px solid #d97706; color: #1e293b;">वश्य (${n?.obtainedPoints??0}/2) &bull; तारा (${s?.obtainedPoints??0}/3) &bull; योनि (${h?.obtainedPoints??0}/4)</td>
      </tr>
    `,L=`
    ${T("गण-भकूट परिहार मीमांसा एवं रज्जु, वेध, महेन्द्र, स्त्री-दीर्घ विशेष परीक्षण","पृष्ठ ३ : गण, भकूट व विशेष कूट",a,!0)}

    ${P("६. गण कूट (6 गुण) का विस्तृत स्वभाव एवं परिहार विश्लेषण",`प्राप्त गुण: ${p?.obtainedPoints??0} / 6`)}
    <div style="background: #fffdf9; border: 1.5px solid #d97706; border-radius: 6px; padding: 6px 10px 8px 10px; margin-bottom: 6px; font-size: 8.2px; color: #1e293b; line-height: 1.38;">
      <table style="width: 100%; table-layout: fixed; border-collapse: collapse; margin-bottom: 4px;">
        <tr style="background: #fef7e6;">
          <td style="padding: 3px 7px; border: 1px solid #d97706; width: 33%;"><b style="color:#7c2d12;">वर का गण:</b> ${e(p?.boyValue)} गण</td>
          <td style="padding: 3px 7px; border: 1px solid #d97706; width: 33%;"><b style="color:#7c2d12;">वधू का गण:</b> ${e(p?.girlValue)} गण</td>
          <td style="padding: 3px 7px; border: 1px solid #d97706; width: 34%;"><b style="color:#7c2d12;">गण अंक:</b> <span style="color:#047857;font-weight:900;">${p?.obtainedPoints??0} / 6 गुण</span></td>
        </tr>
      </table>
      <div><b style="color: #7c2d12;">&bull; गण फलित:</b> ${e(p?.verdict)}</div>
      <div style="margin-top: 3px; background: #fef8ec; border-left: 3px solid #b45309; padding: 4px 7px; color: #334155;">
        <b style="color:#7c2d12;">गण दोष परिहार सूत्र:</b> <i>“ग्रहमैत्री च राशीनां ताराभकूटशुद्धितः। गणदोषो न वक्तव्यः॥”</i> — राशिपति <b>${e(t.boyRashiLord)}</b> व <b>${e(t.girlRashiLord)}</b> के मध्य <b>${e(H.relation)}</b> संबंध है (मैत्री अंक: <b>${c?.obtainedPoints??0}/5</b>)। ${y?u?"राशि स्वामियों की मित्रता से गण दोष परिहार पूर्णतः लागू होता है।":"विवाह पूर्व गणपति अथर्वशीर्ष व शिव-पार्वती पूजन शुभ रहेगा।":"अतः गण कूट पूर्णतः शुभ है।"}
      </div>
    </div>

    ${P("७. भकूट कूट (7 गुण) एवं द्वादश राशि संबंध व परिहार निर्णय",`प्राप्त गुण: ${x?.obtainedPoints??0} / 7`)}
    <div style="background: #fffdf9; border: 1.5px solid #d97706; border-radius: 6px; padding: 6px 10px 8px 10px; margin-bottom: 6px; font-size: 8.2px; color: #1e293b; line-height: 1.38;">
      <table style="width: 100%; table-layout: fixed; border-collapse: collapse; margin-bottom: 4px;">
        <tr style="background: #fef7e6;">
          <td style="padding: 3px 7px; border: 1px solid #d97706; width: 35%;"><b style="color:#7c2d12;">वर चन्द्र राशि:</b> ${e(t.boyRashi)} (${e(t.boyRashiLord)})</td>
          <td style="padding: 3px 7px; border: 1px solid #d97706; width: 35%;"><b style="color:#7c2d12;">वधू चन्द्र राशि:</b> ${e(t.girlRashi)} (${e(t.girlRashiLord)})</td>
          <td style="padding: 3px 7px; border: 1px solid #d97706; width: 30%;"><b style="color:#7c2d12;">भकूट अंक:</b> <span style="color:#047857;font-weight:900;">${x?.obtainedPoints??0} / 7 गुण</span></td>
        </tr>
      </table>
      <div><b style="color: #7c2d12;">&bull; भकूट कूट फलित:</b> ${e(x?.verdict)}</div>
      <div style="margin-top: 3px; background: #fef8ec; border-left: 3px solid #047857; padding: 4px 7px; color: #334155;">
        <b style="color:#047857;">शास्त्रोक्त भकूट परिहार निर्णय:</b> <i>“एकराश्यधिपत्ये तु मित्रत्वे राश्यधीशयोः। खेटमैत्र्यां भकूटस्थो दोषो नश्यति निश्चितम्॥”</i><br/>
        &bull; <b>निर्णय:</b> ${m?u?`वर राशिपति (${t.boyRashiLord}) व वधू राशिपति (${t.girlRashiLord}) परस्पर मित्र/एक होने से भकूट परिहार सिद्ध है।`:"भकूट शांति हेतु विवाह पूर्व श्री लक्ष्मीनारायण हवन एवं राशिपति मंत्र जप करें।":"भकूट पूर्णतः शुद्ध (7/7 गुण) है — कोई दोष नहीं।"}
      </div>
    </div>

    ${P("८. दक्षिण-उत्तर विशेष मेलापक: रज्जु, वेध, महेन्द्र एवं स्त्री-दीर्घ कूट परीक्षा","३६ गुण से आगे सूक्ष्म जांच")}
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
        ${N}
      </tbody>
    </table>
  `,ot=d.planets.map((l,S)=>{const v=i.planets[S],z=G(l.rashiLord,v?.rashiLord||"गुरु");return`
        <tr style="background: ${S%2===0?"#fffdf9":"#fef7e6"};">
          <td style="padding: 3.5px 6px 6px 6px; border: 1px solid #d97706; color: #7c2d12; font-weight: 800; font-size: 8.3px; width: 15%;">${e(l.hindiName)}</td>
          <td style="padding: 3.5px 6px 6px 6px; border: 1px solid #d97706; color: #1e293b; font-size: 8.2px; width: 22%;">${e(l.rashiName.split(" ")[0])} (स्वामी: <b>${e(l.rashiLord)}</b>)</td>
          <td style="padding: 3.5px 6px 6px 6px; border: 1px solid #d97706; color: #9a3412; font-size: 8.2px; width: 22%;">${v?`${e(v.rashiName.split(" ")[0])} (स्वामी: <b>${e(v.rashiLord)}</b>)`:"—"}</td>
          <td style="padding: 3.5px 6px 6px 6px; border: 1px solid #d97706; color: ${z.color}; font-weight: 800; font-size: 8.2px; width: 21%;">${e(z.relation)}</td>
          <td style="padding: 3.5px 6px 6px 6px; border: 1px solid #d97706; color: #334155; font-size: 8px; width: 20%;">${e(z.harmonyNote)}</td>
        </tr>
      `}).join(""),at=`
    ${T("नाड़ी दोष सूक्ष्म मीमांसा एवं नवग्रह मैत्री (9-Planet Graha Maitri) तुलना","पृष्ठ ४ : नाड़ी एवं ग्रह मैत्री",a,!0)}

    ${P("९. नाड़ी कूट (Nadi Koot — 8 गुण) का विस्तृत आयुर्वेदिक व ज्योतिषीय विश्लेषण",`प्राप्त गुण: ${f?.obtainedPoints??0} / 8`)}
    <div style="background: #fffdf9; border: 1.5px solid #d97706; border-radius: 6px; padding: 6px 10px 9px 10px; margin-bottom: 8px; font-size: 8.4px; color: #1e293b; line-height: 1.42;">
      <table style="width: 100%; table-layout: fixed; border-collapse: collapse; margin-bottom: 5px;">
        <tr style="background: #fef7e6;">
          <td style="padding: 4px 8px; border: 1px solid #d97706; width: 33%;"><b style="color:#7c2d12;">वर की नाड़ी:</b> ${e(f?.boyValue)} (वात/पित्त/कफ)</td>
          <td style="padding: 4px 8px; border: 1px solid #d97706; width: 33%;"><b style="color:#7c2d12;">वधू की नाड़ी:</b> ${e(f?.girlValue)} (वात/पित्त/कफ)</td>
          <td style="padding: 4px 8px; border: 1px solid #d97706; width: 34%;"><b style="color:#7c2d12;">नाड़ी प्राप्तांक:</b> <span style="color:${b?"#be123c":"#047857"};font-weight:900;">${f?.obtainedPoints??0} / 8 गुण</span></td>
        </tr>
      </table>
      <div><b style="color: #7c2d12;">&bull; त्रि-नाड़ी विज्ञान:</b> अष्टकूट में सर्वाधिक ८ गुण नाड़ी कूट के होते हैं। <b>आदि नाड़ी (वात प्रकृति)</b>, <b>मध्य नाड़ी (पित्त प्रकृति)</b> एवं <b>अन्त्य नाड़ी (कफ प्रकृति)</b> वर-वधू के शारीरिक त्रिदोष संतुलन, आनुवंशिक स्वास्थ्य एवं संतान सुख का निर्धारण करती हैं।</div>
      <div style="margin-top: 4px; background: #fef8ec; border-left: 3px solid #b45309; padding: 5px 8px; color: #334155;">
        <b style="color:#7c2d12;">पीयूषधारा एवं मुहूर्त चिंतामणि के प्रामाणिक नाड़ी परिहार सूत्र:</b><br/>
        <i>“एकराशिः पृथक् तारा एकतारा पृथग्गृहम्। एकर्क्षं भिन्नपादं च नाड़ीदोषो न विद्यते॥”</i><br/>
        १. <b>एक राशि - भिन्न नक्षत्र</b>, २. <b>एक नक्षत्र - भिन्न राशि</b> अथवा ३. <b>एक नक्षत्र - भिन्न चरण (Pada)</b> होने पर नाड़ी दोष निरस्त होता है।<br/>
        &bull; <b style="color:#7c2d12;">अंतिम नाड़ी निर्णय:</b> ${b?g?"वर और वधू की राशि एक किंतु नक्षत्र भिन्न होने से शास्त्रोक्त नाड़ी दोष परिहार पूर्णतः मान्य है।":w?"वर और वधू का नक्षत्र एक किंतु चरण भिन्न होने से शास्त्रोक्त नाड़ी दोष परिहार मान्य है।":"एक ही नाड़ी होने से विवाह पूर्व स्वर्ण-नाड़ी दान, गोदान, अन्नदान एवं सवा लाख महामृत्युंजय मंत्र जाप कराना अनिवार्य है।":"वर एवं वधू की नाड़ी भिन्न होने से ८/८ पूर्ण गुण प्राप्त हैं — नाड़ी दोष पूर्णतः अनुपस्थित है तथा श्रेष्ठ संतान व आरोग्य योग है।"}
      </div>
    </div>

    ${P("१०. नवग्रह राशि-स्वामी मैत्री तुलना सारणी (9-Planet Graha Maitri Comparison Table)",`चन्द्र मैत्री: ${c?.obtainedPoints??0} / 5`)}
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
        ${ot}
      </tbody>
    </table>
  `,it=d.planets.map((l,S)=>{const v=i.planets[S],z=d.kpSystem?.planets?.find(O=>O.planet===l.hindiName)?.starLord||l.rashiLord,I=i.kpSystem?.planets?.find(O=>O.planet===v?.hindiName)?.starLord||v?.rashiLord||"—";return`
        <tr style="background: ${S%2===0?"#fffdf9":"#fef7e6"};">
          <td style="padding: 3.5px 6px 6px 6px; border: 1px solid #d97706; color: #7c2d12; font-weight: 800; font-size: 8.3px; width: 14%;">
            ${e(l.hindiName)}
          </td>
          <td style="padding: 3.5px 6px 6px 6px; border: 1px solid #d97706; color: #1e293b; font-size: 8.1px; width: 21%;">
            <b>${e(l.rashiName.split(" ")[0])}</b> (${e(l.fullDegreeDMS)})<br/>
            <span style="color:#475569;font-size:7.6px;">अवस्था: ${e(l.dignity)}</span>
          </td>
          <td style="padding: 3.5px 6px 6px 6px; border: 1px solid #d97706; color: #047857; font-size: 8.1px; width: 22%;">
            लग्न भाव ${l.houseInLagna} &bull; ${e(l.nakshatra.split(" ")[0])} (च.${l.pada})<br/>
            <span style="color:#334155;font-size:7.6px;">नक्षत्रेश: ${e(z)}</span>
          </td>
          <td style="padding: 3.5px 6px 6px 6px; border: 1px solid #d97706; color: #9a3412; font-size: 8.1px; width: 21%;">
            ${v?`<b>${e(v.rashiName.split(" ")[0])}</b> (${e(v.fullDegreeDMS)})<br/><span style="color:#475569;font-size:7.6px;">अवस्था: ${e(v.dignity)}</span>`:"—"}
          </td>
          <td style="padding: 3.5px 6px 6px 6px; border: 1px solid #d97706; color: #be123c; font-size: 8.1px; width: 22%;">
            ${v?`लग्न भाव ${v.houseInLagna} &bull; ${e(v.nakshatra.split(" ")[0])} (च.${v.pada})<br/><span style="color:#334155;font-size:7.6px;">नक्षत्रेश: ${e(I)}</span>`:"—"}
          </td>
        </tr>
      `}).join(""),Y=r?.pariharChecks?.length?r.pariharChecks.map(l=>`<b>${e(l.doshaName)}:</b> ${e(l.status)}`).join(" &nbsp;|&nbsp; "):"",dt=`
    ${T("वर एवं वधू की नवग्रह स्पष्ट स्थिति, मांगलिक परिहार व नवांश (D-9) तुलना","पृष्ठ ५ : नवग्रह एवं कुज तुलना",a,!0)}

    ${P("११. वर एवं वधू की संपूर्ण नवग्रह स्थिति तुलना सारणी (Groom vs Bride Planetary Placements)","नवग्रह भाव व नक्षत्र")}
    <table style="width: 100%; table-layout: fixed; border-collapse: collapse; margin-bottom: 7px;">
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
        ${it}
      </tbody>
    </table>

    ${P("१२. द्विपक्षीय मांगलिक (कुज) दोष, शास्त्रोक्त परिहार एवं नवांश (D-9) क्रॉस-चेक",t.manglikStatus.manglikMatch?"कुज समन्वय शुभ":"मंगल परिहार विचारणीय")}
    <div style="background: #fffdf9; border: 1.5px solid #d97706; border-radius: 6px; padding: 6px 10px 8px 10px; font-size: 8.1px; color: #1e293b; line-height: 1.38;">
      <table style="width: 100%; table-layout: fixed; border-collapse: collapse; margin-bottom: 4px;">
        <tr style="background: #fef7e6;">
          <td style="padding: 3.5px 8px; border: 1px solid #d97706; width: 50%;">
            <b style="color:#7c2d12;">वर मांगलिक स्थिति:</b> <span style="color:${t.manglikStatus.boyManglik?"#be123c":"#047857"};font-weight:800;">${e(t.manglikStatus.boySeverity)}</span> (लग्न भाव ${t.manglikStatus.boyMarsHouseLagna}, चन्द्र भाव ${t.manglikStatus.boyMarsHouseMoon})
          </td>
          <td style="padding: 3.5px 8px; border: 1px solid #d97706; width: 50%;">
            <b style="color:#7c2d12;">वधू मांगलिक स्थिति:</b> <span style="color:${t.manglikStatus.girlManglik?"#be123c":"#047857"};font-weight:800;">${e(t.manglikStatus.girlSeverity)}</span> (लग्न भाव ${t.manglikStatus.girlMarsHouseLagna}, चन्द्र भाव ${t.manglikStatus.girlMarsHouseMoon})
          </td>
        </tr>
      </table>
      <div><b style="color: #7c2d12;">&bull; मांगलिक निर्णय:</b> ${e(t.manglikStatus.description)}</div>
      <div style="margin-top: 2px;"><b style="color: #7c2d12;">&bull; सप्तम भाव व गुरु-शुक्र बल:</b> ${e(t.planetaryHarmony.seventhHouseSummary)} &bull; ${e(t.planetaryHarmony.jupiterVenusSummary)}</div>
      ${Y?`<div style="margin-top: 3px; background: #fef8ec; border-left: 3px solid #b45309; padding: 3px 6px; color: #7c2d12;"><b>शास्त्रोक्त परिहार सार:</b> ${Y}</div>`:""}
      ${r?.navamshaCrossCheck?`<div style="margin-top: 2.5px;"><b style="color: #047857;">&bull; नवांश (D-9) व दशा संधि परीक्षण:</b> ${e(r.navamshaCrossCheck)}</div>`:""}
    </div>
  `,rt=[["१. मानसिक एवं वैचारिक सामंजस्य (Mental Harmony)",`वर्ण (${o?.obtainedPoints??1}/1), ग्रह मैत्री (${c?.obtainedPoints??0}/5) एवं गण (${p?.obtainedPoints??0}/6) के अनुसार दोनों में उत्तम समझ, आदर व भावनात्मक संतुलन रहेगा।`],["२. दांपत्य प्रेम एवं सप्तम भाव/नवांश बल (Marital Intimacy)",`वश्य (${n?.obtainedPoints??0}/2) व योनि (${h?.obtainedPoints??0}/4) तथा सप्तमेश की स्थिति से पति-पत्नी के मध्य प्रगाढ़ स्नेह और दीर्घकालिक निष्ठा रहेगी।`],["३. विवाहोपरांत भाग्योदय एवं आर्थिक समृद्धि (Post-Marriage Fortune)",`तारा (${s?.obtainedPoints??0}/3) व भकूट (${x?.obtainedPoints??0}/7) के प्रभाव से विवाह के पश्चात् संयुक्त भाग्योदय, धन-संपत्ति एवं गृह-वाहन सुख में वृद्धि होगी।`],["४. पारिवारिक समरसता एवं कुटुम्ब सौख्य (Family Harmony)",`राशि स्वामियों (${t.boyRashiLord} एवं ${t.girlRashiLord}) के समन्वय से दोनों परिवारों में मान-सम्मान एवं मांगलिक वातावरण बना रहेगा।`],["५. संतान सुख, वंश वृद्धि एवं आरोग्य (Progeny & Vitality)",`नाड़ी कूट (${f?.obtainedPoints??0}/8) एवं पंचमेश गुरु की कृपा से स्वस्थ, तेजस्वी संतान प्राप्ति एवं दीर्घायु सौभाग्य का योग है।`]].map(l=>`
      <div style="background: #fffdf9; border: 1px solid #d97706; border-radius: 5px; padding: 3px 8px 5px 8px; margin-bottom: 3.5px;">
        <div style="font-size: 8.5px; font-weight: 800; color: #7c2d12;">${e(l[0])}</div>
        <div style="font-size: 8px; color: #1e293b; line-height: 1.3;">${e(l[1])}</div>
      </div>
    `).join(""),nt=r?.practicalRemedies?.length?r.practicalRemedies.slice(0,3).map((l,S)=>`<div><b style="color:#7c2d12;">${S+1}.</b> ${e(l)}</div>`).join(""):"<div>गृहस्थ सुख हेतु गौरी-शंकर रुद्राक्ष पूजा स्थान में स्थापित करें तथा “ॐ उमा-महेश्वराभ्यां नमः” का नित्य ११ बार जप करें।</div>",st=`
    ${T("वैवाहिक भविष्यफल, शुभ विवाह मुहूर्त मार्गदर्शिका एवं वैदिक पूजा विधान","पृष्ठ ६ : मुहूर्त एवं उपाय",a,!0)}

    ${P("१३. पंच-स्तरीय वैवाहिक जीवन भविष्यफल (5-Pillar Matrimonial Predictions)","दांपत्य फलित सार")}
    <div style="margin-bottom: 5px;">
      ${rt}
    </div>

    ${P("१४. शुभ विवाह मुहूर्त एवं दीर्घायु निष्कर्ष (Marriage Timing & Muhurat Guidelines)","लग्न एवं तारा शुद्धि")}
    <table style="width: 100%; table-layout: fixed; border-collapse: collapse; margin-bottom: 5px; font-size: 8px;">
      <tbody>
        <tr style="background: #fffdf9;">
          <td style="padding: 3px 7px 5px 7px; border: 1px solid #d97706; color: #7c2d12; font-weight: 800; width: 26%;">शुभ सौर मास एवं नक्षत्र</td>
          <td style="padding: 3px 7px 5px 7px; border: 1px solid #d97706; color: #1e293b; width: 74%;">रोहिणी, मृगशिरा, मघा, उत्तराफाल्गुनी, हस्त, स्वाति, अनुराधा, मूल, उत्तराषाढ़ा, उत्तराभाद्रपद एवं रेवती नक्षत्र विवाह हेतु सर्वश्रेष्ठ हैं।</td>
        </tr>
        <tr style="background: #fef7e6;">
          <td style="padding: 3px 7px 5px 7px; border: 1px solid #d97706; color: #7c2d12; font-weight: 800;">त्रिबल शुद्धि व विवाह लग्न</td>
          <td style="padding: 3px 7px 5px 7px; border: 1px solid #d97706; color: #047857; font-weight: 700;">वर लग्न (${e(t.boyLagna)}) व वधू लग्न (${e(t.girlLagna)}) से अष्टम शुद्धि सहित शुभ गोधूलि/अभिजित लग्न चुनें।</td>
        </tr>
        ${r?.marriageTimingAndLongevity?`<tr style="background: #fffdf9;">
                <td style="padding: 3px 7px 5px 7px; border: 1px solid #d97706; color: #7c2d12; font-weight: 800;">संबंध स्थिरता व समय सार</td>
                <td style="padding: 3px 7px 5px 7px; border: 1px solid #d97706; color: #1e293b;">${e(r.marriageTimingAndLongevity)}</td>
              </tr>`:""}
      </tbody>
    </table>

    ${P("१५. सुखी दांपत्य हेतु शास्त्रोक्त वैदिक पूजा एवं सरल उपाय (Remedial Suggestions)","मंगलमय गृहस्थ कवच")}
    <table style="width: 100%; table-layout: fixed; border-collapse: collapse; margin-bottom: 6px; font-size: 8px;">
      <tbody>
        <tr style="background: #fffdf9;">
          <td style="padding: 3px 7px 5px 7px; border: 1px solid #d97706; color: #7c2d12; font-weight: 800; width: 26%;">१. गौरी-शंकर एवं रुद्राभिषेक</td>
          <td style="padding: 3px 7px 5px 7px; border: 1px solid #d97706; color: #1e293b; width: 74%;">विवाह पूर्व वर-वधू के नाम से भगवान शिव-पार्वती का रुद्राभिषेक एवं श्री लक्ष्मीनारायण पूजन कराने से अखंड सौभाग्य प्राप्त होता है।</td>
        </tr>
        <tr style="background: #fef7e6;">
          <td style="padding: 3px 7px 5px 7px; border: 1px solid #d97706; color: #7c2d12; font-weight: 800;">२. विशेष दोष निवारण विधान</td>
          <td style="padding: 3px 7px 5px 7px; border: 1px solid #d97706; color: #9a3412; font-weight: 600;">${b?"नाड़ी दोष शांति हेतु महामृत्युंजय मंत्र जाप व स्वर्ण-नाड़ी दान कराएं। ":""}${m?"भकूट शांति हेतु राशि स्वामियों का हवन कराएं। ":""}${!b&&!m?"सभी प्रमुख कूट अनुकूल हैं; विवाह पूर्व गणपति एवं कुलदेवता पूजन पर्याप्त है।":""}</td>
        </tr>
        <tr style="background: #fffdf9;">
          <td style="padding: 3px 7px 5px 7px; border: 1px solid #d97706; color: #7c2d12; font-weight: 800;">३. व्यावहारिक व वैदिक उपाय</td>
          <td style="padding: 3px 7px 5px 7px; border: 1px solid #d97706; color: #047857; font-weight: 600; line-height: 1.32;">${nt}</td>
        </tr>
      </tbody>
    </table>

    <div style="background: linear-gradient(90deg, #fff6e0 0%, #fde8bf 100%); border: 2px double #b45309; border-radius: 6px; padding: 6px 12px 8px 12px; text-align: center;">
      <div style="font-size: 10px; font-weight: 900; color: #7c2d12; margin-bottom: 2px;">
        ॥ शुभं भवतु ॥ &bull; ${e(k.appName)} &bull; ${e(k.guideName)}
      </div>
      <div style="font-size: 8.2px; color: #1e293b; line-height: 1.36; font-weight: 600;">
        शुद्ध विवाह मुहूर्त निर्धारण, कुम्भ/विष्णु विवाह, नाड़ी-भकूट शांति अनुष्ठान व वैदिक विवाह संस्कार हेतु संपर्क करें — स्थान: ${e(k.guideAddress)}
      </div>
      <div style="font-size: 9px; font-weight: 900; color: #047857; margin-top: 2px;">
        संपर्क / WhatsApp: ${e(k.contactPhone)} &bull; वेबसाइट: ${e(k.websiteFull)} &bull; Email: ${e(k.email)}
      </div>
    </div>
  `;return[$,D,L,at,dt,st]}let E=null;function U(t,d=5e3){return new Promise((i,r)=>{const a=document.querySelector(`script[src="${t}"]`);if(a){if(a.__loaded){i();return}if(a.__failed)a.remove();else{const s=window.setTimeout(()=>{r(new Error(`Timeout loading ${t}`))},d);a.addEventListener("load",()=>{window.clearTimeout(s),i()},{once:!0}),a.addEventListener("error",()=>{window.clearTimeout(s),r(new Error(`Failed to load ${t}`))},{once:!0});return}}const o=document.createElement("script");o.src=t,o.async=!0;const n=window.setTimeout(()=>{o.__failed=!0,o.remove(),r(new Error(`Timeout loading ${t}`))},d);o.onload=()=>{window.clearTimeout(n),o.__loaded=!0,i()},o.onerror=()=>{window.clearTimeout(n),o.__failed=!0,o.remove(),r(new Error(`Failed to load ${t}`))},document.head.appendChild(o)})}async function lt(){const t=window;return(t.jspdf?.jsPDF||t.jsPDF)&&t.html2canvas?{jsPDF:t.jspdf?.jsPDF||t.jsPDF,html2canvas:t.html2canvas}:(E||(E=(async()=>{try{try{const[i,r]=await Promise.all([X(()=>import("./vendor-pdf-DEj_dQtj.js").then(n=>n.j),[]),X(()=>import("./vendor-pdf-DEj_dQtj.js").then(n=>n.h),[])]),a=i?.jsPDF||i?.default?.jsPDF||i?.default,o=r?.default||r;if(typeof a=="function"&&typeof o=="function")return{jsPDF:a,html2canvas:o}}catch{}const d=[["https://cdn.jsdelivr.net/npm/jspdf@2.5.2/dist/jspdf.umd.min.js","https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js"],["https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js","https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"],["https://unpkg.com/jspdf@2.5.2/dist/jspdf.umd.min.js","https://unpkg.com/html2canvas@1.4.1/dist/html2canvas.min.js"]];for(const[i,r]of d)try{const a=[];t.jspdf?.jsPDF||t.jsPDF||a.push(U(i)),t.html2canvas||a.push(U(r)),a.length>0&&await Promise.all(a);const o=t.jspdf?.jsPDF||t.jsPDF,n=t.html2canvas;if(typeof o=="function"&&typeof n=="function")return{jsPDF:o,html2canvas:n}}catch{}throw new Error("PDF libraries did not initialize")}catch(d){throw E=null,d}})()),E)}const k={appName:"पण्डित जी ऑनलाइन (Pandit Ji Online)",guideTitle:"मुख्य ज्योतिषाचार्य एवं संस्थापक:",guideName:"आचार्य पण्डित शशांक शर्मा (वैदिक पुरोहित एवं ज्योतिषाचार्य)",guideAddress:"रुद्रपुर, उधम सिंह नगर, उत्तराखण्ड (भारत)",contactPhone:"+91 7017279043",website:"www.panditjionline.online",websiteFull:"https://www.panditjionline.online",email:"internetwebhelp24@gmail.com"};function e(t){return String(t??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}const q={अ:"a",आ:"aa",इ:"i",ई:"ee",उ:"u",ऊ:"oo",ऋ:"ri",ए:"e",ऐ:"ai",ओ:"o",औ:"au",क:"k",ख:"kh",ग:"g",घ:"gh",च:"ch",छ:"chh",ज:"j",झ:"jh",ट:"t",ठ:"th",ड:"d",ढ:"dh",ण:"n",त:"t",थ:"th",द:"d",ध:"dh",न:"n",प:"p",फ:"ph",ब:"b",भ:"bh",म:"m",य:"y",र:"r",ल:"l",व:"v",श:"sh",ष:"sh",स:"s",ह:"h","ा":"a","ि":"i","ी":"ee","ु":"u","ू":"oo","ृ":"ri","े":"e","ै":"ai","ो":"o","ौ":"au","ं":"n","ँ":"n","ः":"h","्":"","०":"0","१":"1","२":"2","३":"3","४":"4","५":"5","६":"6","७":"7","८":"8","९":"9"};function B(t){const d=String(t||"Yajman").trim();let i="";for(const a of d)q[a]!==void 0?i+=q[a]:/[A-Za-z0-9_.-]/.test(a)?i+=a:/\s/.test(a)&&(i+="_");return i.replace(/_+/g,"_").replace(/^_+|_+$/g,"")||"Yajman"}const J=[{name:"प्रथम (तनु/लग्न भाव)",karaka:"सूर्य (देह, व्यक्तित्व, आयु, यश)"},{name:"द्वितीय (धन/कुटुम्ब भाव)",karaka:"गुरु (संचित धन, वाणी, परिवार)"},{name:"तृतीय (सहज/पराक्रम भाव)",karaka:"मंगल (साहस, छोटे भाई-बहन, पुरुषार्थ)"},{name:"चतुर्थ (सुख/मातृ भाव)",karaka:"चन्द्र/बुध (माता, भूमि, भवन, वाहन)"},{name:"पंचम (संतान/विद्या भाव)",karaka:"गुरु (शिक्षा, बुद्धि, संतान, पूर्वपुण्य)"},{name:"षष्ठ (रिपु/रोग भाव)",karaka:"मंगल/शनि (रोग, ऋण, शत्रु, प्रतिस्पर्धा)"},{name:"सप्तम (जाया/विवाह भाव)",karaka:"शुक्र (जीवनसाथी, वैवाहिक सुख, व्यापार)"},{name:"अष्टम (आयु/मृत्यु भाव)",karaka:"शनि (दीर्घायु, गुप्त विद्या, आकस्मिक घटना)"},{name:"नवम (भाग्य/धर्म भाव)",karaka:"गुरु/सूर्य (भाग्य, धर्म, गुरु, तीर्थयात्रा)"},{name:"दशम (कर्म/राज्य भाव)",karaka:"सूर्य/बुध/गुरु/शनि (आजीविका, पद-प्रतिष्ठा, पिता)"},{name:"एकादश (लाभ/आय भाव)",karaka:"गुरु (आय, मनोकामना पूर्ति, ज्येष्ठ भ्राता)"},{name:"द्वादश (व्यय/मोक्ष भाव)",karaka:"शनि/केतु (व्यय, विदेश यात्रा, मोक्ष, शैया सुख)"}],Z={1:"मंगल",2:"शुक्र",3:"बुध",4:"चन्द्र",5:"सूर्य",6:"बुध",7:"शुक्र",8:"मंगल",9:"गुरु",10:"शनि",11:"शनि",12:"गुरु"};function R(t){const d=(t%30+30)%30,i=Math.floor(d),r=(d-i)*60,a=Math.floor(r),o=Math.round((r-a)*60);return`${String(i).padStart(2,"0")}° ${String(a).padStart(2,"0")}′ ${String(Math.min(59,o)).padStart(2,"0")}″`}function Pt(t){const d=t.phase1Astronomy?.sripatiBhavas;if(d&&d.length===12)return d.map((a,o)=>{const n=J[o]||{name:`भाव ${a.houseNumber}`,karaka:"सामान्य"},s=t.planets.filter(c=>a.occupantIds.includes(c.id)),h=s.length>0?s.map(c=>`${c.hindiName} (${c.degInt}°)`).join(", "):"— (भाव रिक्त)";return{houseNumber:a.houseNumber,bhavaName:n.name,significator:n.karaka,rashiName:`${a.madhyaRashiNameHi} (${a.madhyaRashiNumber})`,rashiLord:Z[a.madhyaRashiNumber]||"गुरु",madhyaDMS:a.madhyaDMS,sandhiStartDMS:a.sandhiStartDMS,sandhiEndDMS:a.sandhiEndDMS,planets:h}});const i=t.panchang.lagnaDegreeDMS.match(/(\d+)°\s*(\d+)/),r=i?parseInt(i[1],10)+parseInt(i[2],10)/60:t.panchang.lagnaDegInt||15.25;return t.lagnaChart.map((a,o)=>{const n=J[o]||{name:`भाव ${a.houseNumber}`,karaka:"सामान्य"},s=(r%30+30)%30,h=((s-15)%30+30)%30,c=((s+15)%30+30)%30,p=a.planets&&a.planets.length>0?a.planets.map(x=>`${x.hindiName} (${x.degInt}°)`).join(", "):"— (भाव रिक्त)";return{houseNumber:a.houseNumber,bhavaName:n.name,significator:n.karaka,rashiName:`${a.rashiName} (${a.rashiNumber})`,rashiLord:Z[a.rashiNumber]||"गुरु",madhyaDMS:R(s),sandhiStartDMS:R(h),sandhiEndDMS:R(c),planets:p}})}function St(t,d){if(d)return d.planets.map(o=>{const n=t.find(h=>h.id===o.id);let s="बली (Strong)";return o.gradeHi.includes("अति बली")?s="अति बली (Exalted/Strong)":o.gradeHi.includes("बली")?s="बली (Strong)":o.gradeHi.includes("मध्यम")?s="मध्यम (Moderate)":s="निर्बल (Needs Remedy)",{planet:n?.hindiName||o.hindiName,englishName:o.englishName,sthanaBala:Math.round(o.sthanaBala.total),digBala:Math.round(o.digBala),cheshtaBala:Math.round(o.cheshtaBala),naisargikaBala:Math.round(o.naisargikaBala),kalaBala:Math.round(o.kalaBala.total),drikBala:Math.round(o.drikBala),totalVirupas:Math.round(o.totalVirupas),totalRupas:`${o.totalRupas.toFixed(2)} रूप`,requiredRupas:`${o.requiredRupas.toFixed(2)} रूप`,strengthPct:Math.min(100,o.strengthPct),grade:s,remedyHint:o.remedyHintHi}});const i={सूर्य:60,चंद्र:51.4,चन्द्र:51.4,शुक्र:42.9,गुरु:34.3,बुध:25.7,मंगल:17.1,शनि:8.6,राहु:30,केतु:30},r={सूर्य:"6.50 रूप",चंद्र:"6.00 रूप",चन्द्र:"6.00 रूप",मंगल:"5.00 रूप",बुध:"7.00 रूप",गुरु:"6.50 रूप",शुक्र:"5.50 रूप",शनि:"5.00 रूप",राहु:"5.00 रूप",केतु:"5.00 रूप"},a={गुरु:1,बुध:1,सूर्य:10,मंगल:10,शनि:7,चंद्र:4,चन्द्र:4,शुक्र:4,राहु:10,केतु:4};return t.map(o=>{let n=135;o.dignity.includes("उच्च")?n=195:o.dignity.includes("स्वगृही")?n=176:o.dignity.includes("मित्र")?n=154:o.dignity.includes("सम")?n=132:o.dignity.includes("शत्रु")?n=108:o.dignity.includes("नीच")&&(n=86);const s=a[o.hindiName]||1,h=Math.min(Math.abs(o.houseInLagna-s),12-Math.abs(o.houseInLagna-s)),c=Math.round(60-h*8.5),p=o.isRetrograde?54:o.isCombust?22:42,x=i[o.hindiName]||30,f=92+o.pada*6,b=[1,4,5,7,9,10,11].includes(o.houseInLagna)?24:14,m=Math.round(n+c+p+x+f+b),y=(m/60).toFixed(2),g=Math.min(99,Math.max(42,Math.round(m/440*100)));let w="बली (Strong)",u="शुभ फलप्रद स्थिति — नित्य इष्ट स्मरण पर्याप्त";return g>=84?(w="अति बली (Exalted/Strong)",u="पूर्ण राजयोगकारी बल — श्रेष्ठ नेतृत्व एवं उन्नति"):g>=68?(w="बली (Strong)",u="अनुकूल ग्रह बल — कार्यसिद्धि एवं स्थिर प्रगति"):g>=55?(w="मध्यम (Moderate)",u=`${o.hindiName} के बीज मंत्र का नित्य १०८ जप शुभदायी`):(w="निर्बल (Needs Remedy)",u=`${o.hindiName} शांति दान एवं वैदिक जप अनुष्ठान आवश्यक`),{planet:o.hindiName,englishName:o.name,sthanaBala:n,digBala:c,cheshtaBala:p,naisargikaBala:Math.round(x),kalaBala:f,drikBala:b,totalVirupas:m,totalRupas:`${y} रूप`,requiredRupas:r[o.hindiName]||"5.50 रूप",strengthPct:g,grade:w,remedyHint:u}})}function Nt(t){const d=t.panchang.lagnaName.split(" ")[0],i=t.lucky,r={मेष:{jeevanRatna:"मूंगा (Red Coral) — लग्नेश मंगल हेतु",bhagyaRatna:"पुखराज (Yellow Sapphire) — भाग्येश गुरु हेतु",ishtaRatna:"माणिक्य (Ruby) — पंचमेश सूर्य हेतु",avoidStones:"नीलम, पन्ना एवं हीरा बिना परामर्श न पहनें",primaryRudraksha:"३ मुखी रुद्राक्ष (अग्नि देव स्वरूप — मंगल बलवर्धक)",secondaryRudraksha:"५ मुखी + १ मुखी रुद्राक्ष (गुरु एवं सूर्य कृपा हेतु)",rudrakshaMantra:"ॐ क्लीं नमः ॥ ॐ अं अङ्गारकाय नमः ॥",rudrakshaBenefits:"आत्मविश्वास, भूमि-भवन लाभ, रक्तचाप संतुलन एवं मंगल दोष शांति।"},वृषभ:{jeevanRatna:"हीरा / ओपल (Diamond / White Fire Opal) — लग्नेश शुक्र हेतु",bhagyaRatna:"नीलम (Blue Sapphire) — भाग्येश एवं कर्मेश शनि हेतु",ishtaRatna:"पन्ना (Emerald) — पंचमेश बुध हेतु",avoidStones:"पुखराज, मूंगा एवं मोती धारण न करें",primaryRudraksha:"६ मुखी रुद्राक्ष (भगवान कार्तिकेय एवं शुक्र कृपा हेतु)",secondaryRudraksha:"७ मुखी + ४ मुखी रुद्राक्ष (लक्ष्मी-शनि एवं बुध बल हेतु)",rudrakshaMantra:"ॐ ह्रीं हुं नमः ॥ ॐ शुं शुक्राय नमः ॥",rudrakshaBenefits:"वैवाहिक सुख, ऐश्वर्य, व्यापारिक उन्नति एवं कला/धन वृद्धि।"},मिथुन:{jeevanRatna:"पन्ना (Natural Emerald) — लग्नेश बुध हेतु",bhagyaRatna:"नीलम (Blue Sapphire) — भाग्येश शनि हेतु",ishtaRatna:"हीरा / ओपल (Diamond / Opal) — पंचमेश शुक्र हेतु",avoidStones:"मूंगा, माणिक्य एवं पुखराज से परहेज करें",primaryRudraksha:"४ मुखी रुद्राक्ष (ब्रह्मा देव स्वरूप — बुध प्रज्ञा वर्धक)",secondaryRudraksha:"६ मुखी + गणेश रुद्राक्ष (विद्या, वाणी एवं व्यापार सिद्धि)",rudrakshaMantra:"ॐ ह्रीं नमः ॥ ॐ बुं बुधाय नमः ॥",rudrakshaBenefits:"तीव्र बुद्धि, वाणी प्रभाव, व्यापारिक निर्णय क्षमता एवं नसों की मजबूती।"},कर्क:{jeevanRatna:"सच्चा मोती (Natural South Sea Pearl) — लग्नेश चन्द्र हेतु",bhagyaRatna:"पुखराज (Yellow Sapphire) — भाग्येश गुरु हेतु",ishtaRatna:"मूंगा (Red Coral) — दशमेश/पंचमेश योगकारक मंगल हेतु",avoidStones:"नीलम, हीरा एवं पन्ना धारण न करें",primaryRudraksha:"२ मुखी रुद्राक्ष (अर्धनारीश्वर स्वरूप — चन्द्र मानसिक शांति हेतु)",secondaryRudraksha:"३ मुखी + ५ मुखी रुद्राक्ष (योगकारक मंगल एवं गुरु बल हेतु)",rudrakshaMantra:"ॐ नमः ॥ ॐ सों सोमाय नमः ॥",rudrakshaBenefits:"मानसिक शांति, पारिवारिक सामंजस्य, राज्यकृपा एवं अचल संपत्ति लाभ।"},सिंह:{jeevanRatna:"माणिक्य (Burmese Ruby) — लग्नेश सूर्य हेतु",bhagyaRatna:"मूंगा (Red Coral) — भाग्येश व चतुर्थेश योगकारक मंगल हेतु",ishtaRatna:"पुखराज (Yellow Sapphire) — पंचमेश गुरु हेतु",avoidStones:"नीलम एवं हीरा कभी धारण न करें",primaryRudraksha:"१ मुखी अथवा १२ मुखी रुद्राक्ष (भगवान सूर्य एवं शिव तेज हेतु)",secondaryRudraksha:"३ मुखी + ५ मुखी रुद्राक्ष (मंगल-गुरु राजयोग बल हेतु)",rudrakshaMantra:"ॐ ह्रीं नमः ॥ ॐ घृणि सूर्याय नमः ॥",rudrakshaBenefits:"प्रशासनिक तेज, राजकीय सम्मान, उच्च पद प्राप्ति एवं हृदय/नेत्र बल।"},कन्या:{jeevanRatna:"पन्ना (Emerald) — लग्नेश एवं कर्मेश बुध हेतु",bhagyaRatna:"हीरा / ओपल (Diamond / Opal) — भाग्येश शुक्र हेतु",ishtaRatna:"नीलम (Blue Sapphire) — पंचमेश शनि हेतु",avoidStones:"मूंगा, मोती एवं माणिक्य धारण न करें",primaryRudraksha:"४ मुखी रुद्राक्ष (बुध-ब्रह्मा कृपा एवं बौद्धिक तेज हेतु)",secondaryRudraksha:"६ मुखी + ७ मुखी रुद्राक्ष (भाग्येश शुक्र एवं पंचमेश शनि हेतु)",rudrakshaMantra:"ॐ ह्रीं नमः ॥ ॐ बुं बुधाय नमः ॥",rudrakshaBenefits:"वाणिज्य-व्यापार में अपार लाभ, शिक्षा में श्रेष्ठता एवं धन संचय।"},तुला:{jeevanRatna:"हीरा / सफेद पुखराज / ओपल — लग्नेश शुक्र हेतु",bhagyaRatna:"पन्ना (Emerald) — भाग्येश बुध हेतु",ishtaRatna:"नीलम (Blue Sapphire) — चतुर्थेश/पंचमेश योगकारक शनि हेतु",avoidStones:"माणिक्य, मूंगा एवं पुखराज से परहेज करें",primaryRudraksha:"६ मुखी रुद्राक्ष (शुक्र एवं कार्तिकेय कृपा हेतु)",secondaryRudraksha:"७ मुखी + ४ मुखी रुद्राक्ष (योगकारक शनि एवं भाग्येश बुध हेतु)",rudrakshaMantra:"ॐ ह्रीं हुं नमः ॥ ॐ शुं शुक्राय नमः ॥",rudrakshaBenefits:"दाम्पत्य सुख, भौतिक वैभव, न्यायिक विजय एवं शनि-शुक्र राजयोग।"},वृश्चिक:{jeevanRatna:"मूंगा (Red Coral) — लग्नेश मंगल हेतु",bhagyaRatna:"सच्चा मोती (Natural Pearl) — भाग्येश चन्द्र हेतु",ishtaRatna:"पुखराज (Yellow Sapphire) एवं माणिक्य (Ruby) — गुरु व सूर्य हेतु",avoidStones:"पन्ना, हीरा एवं नीलम धारण न करें",primaryRudraksha:"३ मुखी रुद्राक्ष (मंगल तेज एवं साहस वृद्धि हेतु)",secondaryRudraksha:"२ मुखी + ५ मुखी रुद्राक्ष (भाग्येश चन्द्र एवं धनेश गुरु हेतु)",rudrakshaMantra:"ॐ क्लीं नमः ॥ ॐ अं अङ्गारकाय नमः ॥",rudrakshaBenefits:"शत्रु विजय, आकस्मिक धन लाभ, साहस एवं गूढ़ विद्या में सिद्धि।"},धनु:{jeevanRatna:"पुखराज (Ceylon Yellow Sapphire) — लग्नेश गुरु हेतु",bhagyaRatna:"माणिक्य (Ruby) — भाग्येश सूर्य हेतु",ishtaRatna:"मूंगा (Red Coral) — पंचमेश मंगल हेतु",avoidStones:"नीलम एवं हीरा धारण न करें",primaryRudraksha:"५ मुखी रुद्राक्ष (कालाग्नि रुद्र स्वरूप — बृहस्पति कृपा हेतु)",secondaryRudraksha:"१२ मुखी + ३ मुखी रुद्राक्ष (सूर्य एवं मंगल राजयोग बल हेतु)",rudrakshaMantra:"ॐ ह्रीं नमः ॥ ॐ बृं बृहस्पतये नमः ॥",rudrakshaBenefits:"आध्यात्मिक तेज, उच्च शिक्षा, राज्य सम्मान एवं संतान सुख।"},मकर:{jeevanRatna:"नीलम (Ceylon Blue Sapphire) — लग्नेश शनि हेतु",bhagyaRatna:"पन्ना (Emerald) — भाग्येश बुध हेतु",ishtaRatna:"हीरा / ओपल (Diamond / Opal) — योगकारक शुक्र हेतु",avoidStones:"मूंगा, मोती एवं माणिक्य धारण न करें",primaryRudraksha:"७ मुखी रुद्राक्ष (महालक्ष्मी एवं शनि कृपा हेतु)",secondaryRudraksha:"६ मुखी + ४ मुखी रुद्राक्ष (योगकारक शुक्र एवं भाग्येश बुध हेतु)",rudrakshaMantra:"ॐ हुं नमः ॥ ॐ शं शनैश्चराय नमः ॥",rudrakshaBenefits:"स्थायी संपत्ति, उद्योग-व्यापार में सफलता, शनि पीड़ा मुक्ति एवं दीर्घायु।"},कुंभ:{jeevanRatna:"नीलम (Blue Sapphire) — लग्नेश शनि हेतु",bhagyaRatna:"हीरा / ओपल (Diamond / Opal) — चतुर्थेश/भाग्येश योगकारक शुक्र हेतु",ishtaRatna:"पन्ना (Emerald) — पंचमेश बुध हेतु",avoidStones:"मूंगा, मोती एवं पुखराज बिना परामर्श न पहनें",primaryRudraksha:"७ मुखी रुद्राक्ष (लग्नेश शनि एवं सप्तमातृका कृपा हेतु)",secondaryRudraksha:"६ मुखी + ४ मुखी रुद्राक्ष (भाग्येश शुक्र एवं पंचमेश बुध हेतु)",rudrakshaMantra:"ॐ हुं नमः ॥ ॐ शं शनैश्चराय नमः ॥",rudrakshaBenefits:"नवाचार, शोध, राजयोग प्राप्ति, आर्थिक स्थिरता एवं मानसिक एकाग्रता।"},कुम्भ:{jeevanRatna:"नीलम (Blue Sapphire) — लग्नेश शनि हेतु",bhagyaRatna:"हीरा / ओपल (Diamond / Opal) — चतुर्थेश/भाग्येश योगकारक शुक्र हेतु",ishtaRatna:"पन्ना (Emerald) — पंचमेश बुध हेतु",avoidStones:"मूंगा, मोती एवं पुखराज बिना परामर्श न पहनें",primaryRudraksha:"७ मुखी रुद्राक्ष (लग्नेश शनि एवं सप्तमातृका कृपा हेतु)",secondaryRudraksha:"६ मुखी + ४ मुखी रुद्राक्ष (भाग्येश शुक्र एवं पंचमेश बुध हेतु)",rudrakshaMantra:"ॐ हुं नमः ॥ ॐ शं शनैश्चराय नमः ॥",rudrakshaBenefits:"नवाचार, शोध, राजयोग प्राप्ति, आर्थिक स्थिरता एवं मानसिक एकाग्रता।"},मीन:{jeevanRatna:"पुखराज (Yellow Sapphire) — लग्नेश एवं कर्मेश गुरु हेतु",bhagyaRatna:"मूंगा (Red Coral) — भाग्येश व धनेश मंगल हेतु",ishtaRatna:"सच्चा मोती (Natural Pearl) — पंचमेश चन्द्र हेतु",avoidStones:"पन्ना, हीरा एवं नीलम धारण न करें",primaryRudraksha:"५ मुखी रुद्राक्ष (देवगुरु बृहस्पति एवं शिव कृपा हेतु)",secondaryRudraksha:"३ मुखी + २ मुखी रुद्राक्ष (भाग्येश मंगल एवं पंचमेश चन्द्र हेतु)",rudrakshaMantra:"ॐ ह्रीं नमः ॥ ॐ बृं बृहस्पतये नमः ॥",rudrakshaBenefits:"सुख-शांति, ज्ञान-विज्ञान, प्रचुर धन-धान्य एवं आध्यात्मिक उन्नति।"}},a=r[d]||r.मेष;return{jeevanRatna:a.jeevanRatna||i.ratnaName,bhagyaRatna:a.bhagyaRatna||"पुखराज (Yellow Sapphire)",ishtaRatna:a.ishtaRatna||i.uparatnaName,uparatna:i.uparatnaName,weightRatti:"५.२५ से ६.२५ रत्ती (शरीर के वजन के १०वें भाग के अनुसार)",metalAndFinger:i.ratnaMetalAndFinger,wearingDayAndTime:`${i.luckyDays} को प्रातः शुक्ल पक्ष में सूर्योदय के १ घंटे के भीतर (शुभ होरा में)`,pranaPratishthaMantra:i.beejMantra,avoidStones:a.avoidStones||"नीलम व गोमेद बिना कुंडली सूक्ष्म परीक्षण न पहनें",primaryRudraksha:a.primaryRudraksha||i.rudraksha,secondaryRudraksha:a.secondaryRudraksha||"३ मुखी + ७ मुखी रुद्राक्ष",rudrakshaMantra:a.rudrakshaMantra||"ॐ नमः शिवाय ॥",rudrakshaBenefits:a.rudrakshaBenefits||"नवग्रह संतुलन, आरोग्य एवं मानसिक शांति।"}}function A(t,d,i,r=200){const a={1:{rashiX:50,rashiY:42.2,pX:50,pY:26,maxPerLine:2},2:{rashiX:25.75,rashiY:19.8,pX:25.75,pY:10.2,maxPerLine:2,isOuterTriangle:!0},3:{rashiX:19.6,rashiY:25.75,pX:11.2,pY:25.75,maxPerLine:1,isSideTriangle:!0,isOuterTriangle:!0},4:{rashiX:42.2,rashiY:50,pX:25,pY:50,maxPerLine:2},5:{rashiX:19.6,rashiY:74.25,pX:11.2,pY:74.25,maxPerLine:1,isSideTriangle:!0,isOuterTriangle:!0},6:{rashiX:25.75,rashiY:80.2,pX:25.75,pY:89.8,maxPerLine:2,isOuterTriangle:!0},7:{rashiX:50,rashiY:57.8,pX:50,pY:74,maxPerLine:2},8:{rashiX:74.25,rashiY:80.2,pX:74.25,pY:89.8,maxPerLine:2,isOuterTriangle:!0},9:{rashiX:80.4,rashiY:74.25,pX:88.8,pY:74.25,maxPerLine:1,isSideTriangle:!0,isOuterTriangle:!0},10:{rashiX:57.8,rashiY:50,pX:75,pY:50,maxPerLine:2},11:{rashiX:80.4,rashiY:25.75,pX:88.8,pY:25.75,maxPerLine:1,isSideTriangle:!0,isOuterTriangle:!0},12:{rashiX:74.25,rashiY:19.8,pX:74.25,pY:10.2,maxPerLine:2,isOuterTriangle:!0}};let o="";for(const n of t){const s=a[n.houseNumber];if(!s)continue;const h=n.planets||[],c=h.length>=3,p=s.isSideTriangle?h.length>=4?2:1:c?3:s.maxPerLine,x=h.map(b=>s.isSideTriangle||c?`${b.shortHindi||b.chartLabel}`:`${b.chartLabel||b.shortHindi}`),f=[];for(let b=0;b<x.length;b+=p)f.push(x.slice(b,b+p).join(" "));o+=`
      <text x="${s.rashiX}" y="${s.rashiY}" text-anchor="middle" dominant-baseline="central" fill="#b45309" font-size="3.1" font-weight="800" font-family="monospace">${n.rashiNumber}</text>
    `,f.forEach((b,m)=>{const y=s.isSideTriangle?f.length>=3?2.3:2.7:f.length>=3?2.5:2.9,g=(m-(f.length-1)/2)*y,w=s.isSideTriangle?f.length>=3?"2.0":"2.35":s.isOuterTriangle?x.length>=3?"2.2":"2.55":x.length>3?"2.25":"2.65";o+=`
        <text x="${s.pX}" y="${(s.pY+g).toFixed(2)}" dy="-0.06em" text-anchor="middle" dominant-baseline="central" fill="${m===0?"#7c2d12":"#1e293b"}" font-size="${w}" font-weight="800">${e(b)}</text>
      `})}return`
    <div style="width: 100%; background: #fffdf9; border: 1.5px solid #b45309; border-radius: 6px; padding: 4px 7px 7px 7px; text-align: center; box-sizing: border-box;">
      <div style="font-size: 9.4px; font-weight: 800; color: #7c2d12; margin-bottom: 1.5px; line-height: 1.28;">${e(d)}</div>
      <div style="font-size: 8px; color: #475569; margin-bottom: 5px; line-height: 1.25; font-weight: 600;">${e(i)}</div>
      <div style="width: 100%; max-width: ${r}px; margin: 0 auto;">
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
  `}function T(t,d,i,r=!1){const a=`<img src="${V}" alt="Pandit Ji Online" style="width: 30px; height: 30px; min-width: 30px; max-width: 30px; border-radius: 50%; object-fit: cover; border: 1.5px solid #D4AF37; background: #0F172A; display: block;" />`,o=`<img src="${V}" alt="Pandit Ji Online" style="width: 40px; height: 40px; min-width: 40px; max-width: 40px; border-radius: 50%; object-fit: cover; border: 2px solid #D4AF37; background: #0F172A; display: block; margin: 0 auto;" />`;return r?`
      <table style="width: 100%; table-layout: fixed; border-collapse: collapse; background: linear-gradient(90deg, #fff6e0 0%, #fde8bf 100%); border: 1.5px solid #b45309; border-radius: 6px; margin-bottom: 6px; box-sizing: border-box;">
        <tr>
          <td style="padding: 4px 4px 4px 8px; vertical-align: middle; width: 38px;">
            ${a}
          </td>
          <td style="padding: 3.5px 6px 7px 4px; vertical-align: middle; text-align: left; width: 53%;">
            <div style="font-size: 8.8px; font-weight: 800; color: #9a3412; line-height: 1.3;">॥ श्री गणेशाय नमः ॥ &bull; ${e(k.appName)} (${e(d)})</div>
            <div style="font-size: 11px; font-weight: 900; color: #7c2d12; line-height: 1.32; margin-top: 1px;">${e(t)}</div>
          </td>
          <td style="padding: 3.5px 9px 7px 6px; vertical-align: middle; text-align: right; width: 41%;">
            <div style="font-size: 8.5px; color: #1e293b; font-weight: 700; line-height: 1.32;">${i}</div>
            <div style="font-size: 7.8px; color: #78350f; margin-top: 1.5px; line-height: 1.28; font-weight: 600;">आचार्य पण्डित शशांक शर्मा &bull; ${e(k.contactPhone)} &bull; ${e(k.website)}</div>
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
              ॥ ॐ श्री गणेशाय नमः ॥ &bull; ॥ श्री गुरुभ्यो नमः ॥ &bull; ${e(k.appName)}
            </div>
            <div style="display: inline-block; background: #7c2d12; border: 1px solid #b45309; color: #fffbeb; font-size: 8.3px; font-weight: 700; padding: 1px 10px 4.5px 10px; border-radius: 3px; margin-bottom: 2.5px; line-height: 1.28;">
              ${e(d)}
            </div>
            <div style="font-size: 14px; font-weight: 900; color: #7c2d12; margin-bottom: 2px; line-height: 1.28;">
              ${e(t)}
            </div>
            <div style="font-size: 9.4px; color: #1e293b; font-weight: 700; line-height: 1.32;">
              ${i}
            </div>
          </td>
          <td style="width: 48px; vertical-align: middle;"></td>
        </tr>
      </table>
      <div style="border-top: 1px solid #d97706; padding-top: 3px; font-size: 8.3px; color: #334155; line-height: 1.32;">
        <b style="color: #7c2d12;">${e(k.guideTitle)}</b> <b style="color:#1e293b;">${e(k.guideName)}</b> &bull;
        <span>स्थान: ${e(k.guideAddress)} &bull; संपर्क/WhatsApp: <b style="color: #7c2d12;">${e(k.contactPhone)}</b> &bull; <b style="color:#9a3412;">${e(k.website)}</b></span>
      </div>
    </div>
  `}function pt(t,d){return`
    <table style="width: 100%; table-layout: fixed; border-collapse: collapse; font-size: 8.2px; color: #334155; box-sizing: border-box; line-height: 1.32;">
      <tr>
        <td style="padding: 0 0 3px 0; text-align: left; vertical-align: middle; width: 82%; white-space: nowrap;">
          <b style="color: #7c2d12;">पण्डित जी ऑनलाइन (${e(k.website)})</b> &bull; आचार्य पण्डित शशांक शर्मा &bull; WhatsApp: <b style="color:#1e293b;">${e(k.contactPhone)}</b> &bull; ${e(k.email)}
        </td>
        <td style="padding: 0 0 3px 0; text-align: right; vertical-align: middle; width: 18%; color: #7c2d12; font-weight: 800; white-space: nowrap;">
          पृष्ठ ${t} / ${d}
        </td>
      </tr>
    </table>
  `}function P(t,d){return`
    <table style="width: 100%; table-layout: fixed; border-collapse: collapse; margin-bottom: 4.5px; background: linear-gradient(90deg, #fff3d6 0%, #fde9c4 100%); border-left: 4px solid #9a3412; border-top: 1px solid #d97706; border-right: 1px solid #d97706; border-bottom: 1px solid #d97706; border-radius: 4px; box-sizing: border-box;">
      <tr>
        <td style="padding: 2.5px 8px 6px 8px; font-size: 9.4px; font-weight: 800; color: #7c2d12; vertical-align: middle; text-align: left; width: ${d?"68%":"100%"}; line-height: 1.3;">
          ${e(t)}
        </td>
        ${d?`
        <td style="padding: 2.5px 8px 5px 8px; text-align: right; vertical-align: middle; width: 32%; white-space: nowrap;">
          <span style="display: inline-block; font-size: 8px; color: #7c2d12; background: #fffdf9; padding: 1px 8px 4px 8px; border-radius: 3px; border: 1px solid #b45309; vertical-align: middle; line-height: 1.25; white-space: nowrap; font-weight: 700;">
            ${e(d)}
          </span>
        </td>`:""}
      </tr>
    </table>
  `}const F="'Noto Sans Devanagari', 'Noto Sans Bengali', 'Noto Sans Gujarati', 'Noto Sans Tamil', 'Noto Sans Telugu', 'Noto Sans Kannada', 'Noto Sans Malayalam', 'Noto Sans Gurmukhi', 'Noto Sans', 'Segoe UI', Arial, sans-serif";function ct(t){if(typeof document>"u"||!["bn","pa","ta","te","kn","ml","gu"].includes(t))return;const d="vedic-pdf-regional-fonts";if(document.getElementById(d))return;const i=document.createElement("link");i.id=d,i.rel="stylesheet",i.href="https://fonts.googleapis.com/css2?family=Noto+Sans+Bengali:wght@400;700&family=Noto+Sans+Gujarati:wght@400;700&family=Noto+Sans+Gurmukhi:wght@400;700&family=Noto+Sans+Tamil:wght@400;700&family=Noto+Sans+Telugu:wght@400;700&family=Noto+Sans+Kannada:wght@400;700&family=Noto+Sans+Malayalam:wght@400;700&display=swap",document.head.appendChild(i)}const ht=[["सू","Su"],["चं","Mo"],["मं","Ma"],["बु","Me"],["गु","Ju"],["शु","Ve"],["श","Sa"],["रा","Ra"],["के","Ke"],["च","Mo"],["(व*)","(R)"],["(अ^)","(C)"]];function tt(t,d){if(d==="hi")return;const i=document.createTreeWalker(t,NodeFilter.SHOW_TEXT),r=[];let a=i.nextNode();for(;a;)r.push(a),a=i.nextNode();for(const o of r){const n=o.nodeValue||"";if(!n.trim()||n.trim()==="ॐ")continue;const s=o.parentElement;if(s&&s.closest("svg.vedic-chart-svg")){if(d==="en"||d==="hinglish"){let h=n;for(const[c,p]of ht)h.includes(c)&&(h=h.split(c).join(p));o.nodeValue=j(h,d)}else o.nodeValue=j(n,d);continue}o.nodeValue=j(n,d)}}function et(t,d,i){return`
    <div class="vedic-pdf-page" style="width: 794px; min-width: 794px; max-width: 794px; height: 1123px; min-height: 1123px; max-height: 1123px; background: #faf4e8; color: #1e293b; padding: 15px 18px 16px 18px; box-sizing: border-box; overflow: hidden; font-family: ${F}; position: relative;">
      <div class="vedic-pdf-frame" style="width: 758px; height: 1090px; max-height: 1090px; border: 2.5px double #b45309; border-radius: 8px; padding: 9px 12px 36px 12px; background: #fffdf9; box-sizing: border-box; overflow: hidden; position: relative;">
        <div class="vedic-pdf-body" style="width: 100%; height: 1036px; max-height: 1036px; box-sizing: border-box; overflow: hidden;">
          ${t}
        </div>
        <div class="vedic-pdf-footer" style="position: absolute; bottom: 6px; left: 14px; right: 14px; height: 26px; box-sizing: border-box; border-top: 1px solid #d97706; padding: 3px 2px 3px 2px; background: #fff9ee;">
          ${pt(d,i)}
        </div>
      </div>
    </div>
  `}async function xt(t,d){const i=Array.from(t.querySelectorAll("svg"));if(i.length===0)return;const r=[];for(const a of i)try{a.setAttribute("xmlns","http://www.w3.org/2000/svg");const n=(a.getAttribute("viewBox")||"0 0 100 100").trim().split(/[\s,]+/).map(Number),s=n[2]&&n[2]>0?n[2]:100,h=n[3]&&n[3]>0?n[3]:100,c=680,p=Math.round(c*h/s);a.setAttribute("width",String(c)),a.setAttribute("height",String(p));const x=Array.from(a.querySelectorAll("text"));for(const g of x)g.getAttribute("font-family")||g.setAttribute("font-family","'Noto Sans Devanagari', 'Noto Sans', Arial, sans-serif");const f=new XMLSerializer().serializeToString(a),b=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(f)}`,m=d.createElement("img");m.width=c,m.height=p,m.style.cssText="display: block !important; width: 100% !important; height: auto !important; margin: 0 auto !important; background: #fffbeb !important; border: 1.5px solid #9a3412 !important; border-radius: 4px !important; box-sizing: border-box !important;";const y=new Promise(g=>{const w=setTimeout(()=>g(),260);m.onload=()=>{clearTimeout(w),g()},m.onerror=()=>{clearTimeout(w),g()}});m.src=b,r.push(y),a.parentNode?.replaceChild(m,a)}catch{}await Promise.all(r)}function _(t,d,i="hi"){if(typeof document>"u")return;const r=document.getElementById("vedic-direct-print-iframe");r&&r.parentNode&&r.parentNode.removeChild(r);const a=document.createElement("iframe");a.id="vedic-direct-print-iframe",a.style.cssText="position: fixed; right: 0; bottom: 0; width: 1px; height: 1px; border: 0; opacity: 0.01; pointer-events: none; z-index: -1;",document.body.appendChild(a);const o=a.contentDocument||a.contentWindow?.document;if(!o)return;const n=t.map((s,h)=>`<div class="vedic-print-page-sheet" style="page-break-after: ${h<t.length-1?"always":"auto"}; break-after: ${h<t.length-1?"page":"auto"}; margin: 0 auto;">${et(s,h+1,t.length)}</div>`).join(`
`);o.open(),o.write(`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>${e(d.replace(/\.pdf$/i,""))}</title>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;600;700;800&display=swap" />
  <style>
    @page { size: A4 portrait; margin: 0; }
    html, body { margin: 0; padding: 0; background: #faf4e8; color: #1e293b; font-family: ${F}; -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
    .vedic-pdf-page, .vedic-pdf-page * { box-sizing: border-box !important; -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
    .vedic-pdf-page table { width: 100%; max-width: 100%; table-layout: fixed; }
    .vedic-pdf-page th, .vedic-pdf-page td { word-wrap: break-word; overflow-wrap: anywhere; vertical-align: middle; }
  </style>
</head>
<body>${n}</body>
</html>`),o.close(),i!=="hi"&&o.body&&tt(o.body,i),setTimeout(()=>{try{a.contentWindow?.focus(),a.contentWindow?.print()}catch{window.print()}},350)}function gt(t){const d=new Uint8Array(t),i=32768,r=[];for(let a=0;a<d.length;a+=i){const o=d.subarray(a,a+i);r.push(String.fromCharCode.apply(null,o))}return btoa(r.join(""))}function bt(t,d,i,r,a,o){if(typeof document>"u")return;const n=document.getElementById("vedic-pdf-ready-modal");n&&n.parentNode&&n.parentNode.removeChild(n);const s=(()=>{try{return window.self!==window.top}catch{return!0}})(),h=($,M,D)=>o==="hi"?$:o==="en"?M:o==="hinglish"?D:j($,o),c=document.createElement("div");c.id="vedic-pdf-ready-modal",c.style.cssText="position: fixed; inset: 0; z-index: 999999; background: rgba(5, 8, 17, 0.82); backdrop-filter: blur(6px); display: flex; align-items: center; justify-content: center; padding: 16px; font-family: "+F+";";const p=document.createElement("div");p.style.cssText="width: 100%; max-width: 440px; background: linear-gradient(180deg, #fffdf9 0%, #faf4e8 100%); border: 3px double #b45309; border-radius: 20px; padding: 20px 18px; box-shadow: 0 24px 60px rgba(0,0,0,0.65); text-align: center; color: #1e293b; position: relative;";const x=document.createElement("button");x.type="button",x.setAttribute("aria-label","Close"),x.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',x.style.cssText="position: absolute; top: 10px; right: 12px; width: 30px; height: 30px; border-radius: 999px; border: 1px solid #d97706; background: #fef7e6; color: #7c2d12; display: flex; align-items: center; justify-content: center; cursor: pointer;";const f=()=>{c.parentNode&&c.parentNode.removeChild(c),setTimeout(()=>{URL.revokeObjectURL(d)},6e4)};x.onclick=f,c.onclick=$=>{$.target===c&&f()};const b=document.createElement("div");b.style.cssText="display: inline-block; background: #fef3c7; border: 1px solid #d97706; color: #7c2d12; font-size: 11px; font-weight: 800; padding: 4px 12px; border-radius: 999px; margin-bottom: 8px;",b.innerText=h(`${a.length}-पृष्ठ शाही प्रिंट-रेडी PDF तैयार है`,`${a.length}-Page Royal Print-Ready PDF is Ready`,`${a.length}-Page Print-Ready PDF Taiyar Hai`);const m=document.createElement("h3");m.style.cssText="margin: 0 0 6px 0; font-size: 17px; font-weight: 900; color: #7c2d12; line-height: 1.35;",m.innerText=h("पण्डित जी ऑनलाइन • वैदिक महा-पत्रिका PDF","Pandit Ji Online • Vedic Maha-Patrika PDF","Pandit Ji Online • Vedic Maha-Patrika PDF");const y=document.createElement("p");y.style.cssText="margin: 0 0 14px 0; font-size: 12px; color: #475569; line-height: 1.45;",y.innerText=h("आपकी PDF फाइल फोन के Downloads में सेव हो रही है। दोबारा डाउनलोड करने के लिए हरे बटन पर टैप करें या सीधे WhatsApp पर शेयर करें:","Your PDF file is saving to your Downloads folder. Tap the green button to download again or share directly on WhatsApp:","Aapki PDF file phone ke Downloads me save ho rahi hai. Dobara download karne ke liye green button dabayein ya WhatsApp par share karein:");const g=document.createElement("a");g.href=i||d,s&&i&&(g.target="_blank",g.rel="noopener noreferrer"),g.download=r,g.style.cssText="display: flex; align-items: center; justify-content: center; gap: 8px; width: 100%; padding: 13px 16px; border-radius: 14px; background: linear-gradient(90deg, #059669 0%, #10b981 100%); color: #ffffff; font-weight: 900; font-size: 14px; text-decoration: none; box-shadow: 0 8px 20px rgba(5, 150, 105, 0.35); margin-bottom: 10px; box-sizing: border-box; cursor: pointer;",g.innerText=h("अभी PDF फाइल डाउनलोड / सेव करें (Download PDF)","Download / Save PDF File Now","Abhi PDF File Download / Save Karein"),g.onclick=()=>{setTimeout(()=>{c.parentNode&&c.parentNode.removeChild(c)},1800)};const w=document.createElement("button");w.type="button",w.style.cssText="display: flex; align-items: center; justify-content: center; gap: 8px; width: 100%; padding: 11px 16px; border-radius: 14px; background: linear-gradient(90deg, #d97706 0%, #f59e0b 100%); color: #fffdf9; font-weight: 800; font-size: 13px; border: none; box-shadow: 0 6px 16px rgba(217, 119, 6, 0.28); margin-bottom: 10px; box-sizing: border-box; cursor: pointer;",w.innerText=h("WhatsApp / फोन पर सीधे PDF शेयर करें","Share PDF directly on WhatsApp / Phone","WhatsApp / Phone par seedhe PDF Share karein"),w.onclick=async()=>{try{const $=new File([t],r,{type:"application/pdf"});if(navigator.canShare&&navigator.canShare({files:[$]})){await navigator.share({files:[$],title:r.replace(/\.pdf$/i,""),text:"पण्डित जी ऑनलाइन — वैदिक ज्योतिष महा-पत्रिका PDF (www.panditjionline.online • +91 7017279043)"}),f();return}}catch{}g.click()};const u=document.createElement("button");u.type="button",u.style.cssText="display: flex; align-items: center; justify-content: center; gap: 6px; width: 100%; padding: 9px 14px; border-radius: 12px; background: #fef7e6; color: #7c2d12; font-weight: 700; font-size: 12px; border: 1.5px solid #d97706; box-sizing: border-box; cursor: pointer;",u.innerText=h("सीधे प्रिंट करें (Print / Save as PDF)","Direct Print / Save as PDF","Seedhe Print / Save as PDF karein"),u.onclick=()=>{f(),_(a,r,o)},p.appendChild(x),p.appendChild(b),p.appendChild(m),p.appendChild(y),p.appendChild(g),p.appendChild(w),p.appendChild(u),c.appendChild(p),document.body.appendChild(c)}async function ft(t,d,i,r="hi"){const a=d.endsWith(".pdf")?d:`${d}.pdf`;try{const o=t.output("arraybuffer"),n=new Blob([o],{type:"application/pdf"}),s=URL.createObjectURL(n),h=(()=>{try{return window.self!==window.top}catch{return!0}})();let c=null;if(h&&o.byteLength<28e5)try{const p=gt(o),x=await fetch("/api/pdf-download",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({filename:a,base64:p})});if(x.ok){const f=await x.json();f?.ok&&typeof f.downloadUrl=="string"&&(c=f.downloadUrl)}}catch{}try{if(c){const p=document.createElement("iframe");p.style.display="none",p.src=c,document.body.appendChild(p),setTimeout(()=>{document.body.contains(p)&&document.body.removeChild(p)},15e3)}else{const p=document.createElement("a");p.href=s,p.download=a,p.style.display="none",document.body.appendChild(p),p.click(),setTimeout(()=>{document.body.contains(p)&&document.body.removeChild(p)},2e3)}}catch{}bt(n,s,c,a,i,r)}catch{try{t.save(a)}catch{_(i,a,r)}}}async function yt(t,d=1600){const i=[],r=a=>{const o=a?.fonts;if(o){if(typeof o.load=="function"){const n="ॐ श्री गणेशाय नमः लग्न राशि नक्षत्र 0123456789";for(const s of["400","700","800"])i.push(o.load(`${s} 12px "Noto Sans Devanagari"`,n).catch(()=>{}))}o.ready&&i.push(o.ready.catch(()=>{}))}};typeof document<"u"&&r(document),t&&t!==document&&r(t),i.length>0&&await Promise.race([Promise.all(i),new Promise(a=>setTimeout(a,d))])}function mt(t,d=".vedic-book-a4-page, .vedic-pdf-page"){try{const i="pj-h2c-devanagari-root-fix";if(!t.getElementById(i)){const o=t.createElement("style");o.id=i,o.textContent=`
        html, body, ${d}, ${d} * {
          font-synthesis: none !important;
          letter-spacing: 0 !important;
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
        .book-banner-pill {
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
      `,(t.head||t.documentElement).appendChild(o)}const r=Array.from(t.querySelectorAll(d));if(r.length===0)return;const a=new Set(["STYLE","SCRIPT","NOSCRIPT","SVG","TITLE","TEXTAREA","OPTION"]);for(const o of r){const n=[],s=t.createTreeWalker(o,NodeFilter.SHOW_TEXT);let h;for(;h=s.nextNode();){const c=h;if(!c.nodeValue||!c.nodeValue.trim())continue;const p=c.parentElement;p&&(a.has(p.tagName)||p.closest("svg, .pj-h2c-devanagari-lift")||n.push(c))}for(const c of n){const p=c.parentElement;if(!p)continue;const x=t.createElement("span");x.className="pj-h2c-devanagari-lift",x.style.position="relative",x.style.top="-2px",p.insertBefore(x,c),x.appendChild(c)}}}catch{}}async function ut(t,d,i="hi"){ct(i);const{jsPDF:o,html2canvas:n}=await lt(),s=new o({orientation:"portrait",unit:"mm",format:"a4",compress:!0}),h=210,c=297,p=`
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
        font-family: ${F} !important;
        font-synthesis: none !important;
        line-height: 1.35;
      }
      .vedic-pdf-page,
      .vedic-pdf-page * {
        box-sizing: border-box !important;
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
        font-family: ${F} !important;
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
        overflow-wrap: anywhere;
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
  `,x=document.createElement("iframe");x.id="vedic-pdf-clean-iframe",x.style.cssText="position:fixed;left:-9999px;top:0;width:794px;height:1123px;border:0;margin:0;padding:0;z-index:-1;pointer-events:none;background:#faf4e8;";const f=y=>{const g=`पृष्ठ ${y} / ${t.length} तैयार हो रहा है...`;return i==="hi"?g:i==="en"?`Preparing Page ${y} / ${t.length}...`:i==="hinglish"?`Page ${y} / ${t.length} taiyar ho raha hai...`:j(g,i)},b=document.createElement("div");b.id="vedic-pdf-progress-badge",b.style.cssText=`position:fixed;top:16px;left:50%;transform:translateX(-50%);z-index:999999;background:linear-gradient(135deg,#0F172A 0%,#1E293B 100%);border:2px solid #D4AF37;color:#FFF9ED;padding:12px 18px;border-radius:16px;min-width:290px;max-width:92vw;box-shadow:0 16px 42px rgba(0,0,0,0.6);font-family:${F};`,b.innerHTML=`
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;">
      <img src="${V}" alt="Pandit Ji Online" style="width:32px;height:32px;border-radius:50%;object-fit:cover;border:1.5px solid #D4AF37;flex-shrink:0;" />
      <div style="flex:1;min-width:0;">
        <div style="font-size:10.5px;font-weight:800;color:#FDE68A;letter-spacing:0.3px;">PANDIT JI ONLINE • 4K वैदिक PDF</div>
        <div id="vedic-pdf-progress-text" style="font-size:12.5px;font-weight:800;color:#FFFFFF;margin-top:1px;">${f(1)}</div>
      </div>
      <div id="vedic-pdf-progress-pct" style="font-size:12px;font-weight:900;color:#FDE68A;min-width:34px;text-align:right;">0%</div>
    </div>
    <div style="width:100%;height:7px;background:rgba(255,249,237,0.16);border-radius:999px;overflow:hidden;border:1px solid rgba(212,175,55,0.45);">
      <div id="vedic-pdf-progress-fill" style="width:4%;height:100%;background:linear-gradient(90deg,#FF6F00 0%,#D4AF37 100%);border-radius:999px;transition:width 0.18s ease-out;"></div>
    </div>
  `;const m=y=>{const g=Math.min(100,Math.round(y/Math.max(1,t.length)*100)),w=b.querySelector("#vedic-pdf-progress-text"),u=b.querySelector("#vedic-pdf-progress-pct"),$=b.querySelector("#vedic-pdf-progress-fill");w&&(w.innerText=f(y)),u&&(u.innerText=`${g}%`),$&&($.style.width=`${Math.max(4,g)}%`)};document.body.appendChild(x),document.body.appendChild(b);try{const y=x.contentDocument||x.contentWindow?.document;if(!y)throw new Error("Could not initialize clean PDF iframe document");y.open(),y.write(`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;600;700;800&display=swap" />
  ${p}
</head>
<body style="margin:0;padding:0;background:#faf4e8;color:#1e293b;">
  <div id="vedic-pdf-render-host" style="width:794px;height:1123px;margin:0;padding:0;background:#faf4e8;overflow:hidden;"></div>
</body>
</html>`),y.close();const g=y.getElementById("vedic-pdf-render-host");if(!g)throw new Error("Could not find PDF render host in clean iframe");await yt(y,1600);const w=2.25;for(let u=0;u<t.length;u++){m(u+1),g.innerHTML=et(t[u],u+1,t.length);const $=g.querySelector(".vedic-pdf-page");if(!$)continue;i!=="hi"&&tt($,i),await xt($,y);const M=Array.from($.querySelectorAll("img"));M.length>0&&await Promise.race([Promise.all(M.map(N=>N.complete?Promise.resolve():new Promise(L=>{N.onload=()=>L(),N.onerror=()=>L()}))),new Promise(N=>setTimeout(N,350))]),await new Promise(N=>setTimeout(N,10)),u>0&&s.addPage("a4","portrait"),document.fonts?.ready&&await document.fonts.ready;const D=await n($,{scale:w,useCORS:!0,allowTaint:!0,logging:!1,backgroundColor:"#faf4e8",x:0,y:0,scrollX:0,scrollY:0,width:794,height:1123,windowWidth:794,windowHeight:1123,onclone:N=>{mt(N,".vedic-pdf-page")}});s.setFillColor(250,244,232),s.rect(0,0,h,c,"F");const H=D.toDataURL("image/jpeg",.86);s.addImage(H,"JPEG",0,0,h,c,void 0,"FAST"),D.width=0,D.height=0,g.innerHTML=""}return await ft(s,d,t,i),!0}catch(y){return console.error("Error rendering Vedic PDF, opening direct print fallback:",y),_(t,d,i),!0}finally{document.body.contains(b)&&document.body.removeChild(b),document.body.contains(x)&&document.body.removeChild(x)}}async function Dt(t,d="kundali-milan-full-report-container",i="hi"){const r=Q(t),a=B(t.boyName),o=B(t.girlName),n=i==="hi"?"":`_${i.toUpperCase()}`,s=`Brihat_36_Gun_Milan_${a}_and_${o}${n}_PanditJiOnline`;return ut(r,s,i)}function zt(t,d="hi"){const i=Q(t),r=B(t.boyName),a=B(t.girlName),o=d==="hi"?"":`_${d.toUpperCase()}`,n=`Brihat_36_Gun_Milan_${r}_and_${a}${o}_PanditJiOnline`;_(i,n,d)}export{St as a,mt as b,Pt as c,Dt as d,lt as e,Nt as g,zt as p,B as s,yt as w};
