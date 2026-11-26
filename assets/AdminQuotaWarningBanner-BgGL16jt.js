import { r as reactExports, j as jsxRuntimeExports } from "./vendor-react-CCbeDaYX.js";
import { c as cleanMobileNumber } from "./index-CUAFR0Uq.js";
import { a4 as TriangleAlert, F as ArrowRight } from "./vendor-icons-Bk5Rg8-9.js";
import "./vendor-pdf-CpPyS1re.js";
import "./panchang-core-WfwKNTXG.js";
import "./vendor-astronomy-C8JZdkQu.js";
import "./seo-core-uu9B2jSm.js";
const ADMIN_AUTHORIZED_PHONE = "8958499979";
const AdminGlobalQuotaWarningBanner = ({ currentUser, onOpenAdminPanel }) => {
  const isAdmin = Boolean(
    currentUser && cleanMobileNumber(currentUser.phone) === ADMIN_AUTHORIZED_PHONE
  );
  const [allExhausted, setAllExhausted] = reactExports.useState(false);
  const [configuredCount, setConfiguredCount] = reactExports.useState(0);
  reactExports.useEffect(() => {
    if (!isAdmin) {
      setAllExhausted(false);
      return;
    }
    let mounted = true;
    const checkHealth = async () => {
      try {
        const res = await fetch("/api/admin/gemini-key", { method: "GET" });
        if (res.ok && mounted) {
          const data = await res.json();
          setAllExhausted(Boolean(data?.allKeysExhausted));
          const keysArr = Array.isArray(data?.keys) ? data.keys.filter(Boolean) : [];
          setConfiguredCount(keysArr.length);
        }
      } catch {
      }
    };
    checkHealth();
    const timer = window.setInterval(checkHealth, 15e3);
    return () => {
      mounted = false;
      window.clearInterval(timer);
    };
  }, [isAdmin]);
  if (!isAdmin || !allExhausted) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 p-4 rounded-2xl bg-gradient-to-r from-rose-950 via-[#2a080d] to-rose-950 border-2 border-rose-500 text-rose-100 shadow-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 animate-fadeIn", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-6 h-6 text-rose-400 shrink-0 mt-0.5 animate-pulse", strokeWidth: 1.5 }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-extrabold text-xs sm:text-sm text-rose-200", children: [
          "एडमिन अलर्ट (+91 ",
          ADMIN_AUTHORIZED_PHONE,
          "): सभी ",
          configuredCount || 12,
          " Gemini API Keys की कोटा सीमा (429 / Invalid) समाप्त हो गई है!"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] sm:text-xs text-rose-200/85 mt-0.5", children: "आम श्रद्धालुओं के लिए वैदिक शास्त्र बैकअप इंजन सुचारु रूप से कार्य कर रहा है (उन्हें कोई एरर नहीं दिख रहा है)। कृपया 12-Key पैनल में नई API Keys अपडेट करें।" })
      ] })
    ] }),
    onOpenAdminPanel && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        onClick: onOpenAdminPanel,
        className: "px-4 py-2 rounded-xl bg-rose-500 hover:bg-rose-400 text-slate-950 font-black text-xs shrink-0 flex items-center gap-1.5 cursor-pointer shadow-lg transition-all",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "12-API Keys अपडेट करें" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3.5 h-3.5", strokeWidth: 1.5 })
        ]
      }
    )
  ] });
};
export {
  AdminGlobalQuotaWarningBanner
};
