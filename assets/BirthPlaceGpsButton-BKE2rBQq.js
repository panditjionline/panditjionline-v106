import { r as reactExports, j as jsxRuntimeExports, a as reactDomExports } from "./vendor-react-CCbeDaYX.js";
import { ar as detectCurrentBirthPlaceViaGps } from "./panchang-core-24ia-akc.js";
import { ah as LoaderCircle, a5 as CircleCheck, aM as CircleAlert, an as LocateFixed } from "./vendor-icons-Bk5Rg8-9.js";
const BirthPlaceGpsButton = ({
  onSelectPlace,
  size = "sm",
  label,
  className = "",
  title = "वर्तमान GPS लोकेशन से जन्म स्थान भरें"
}) => {
  const [isDetecting, setIsDetecting] = reactExports.useState(false);
  const [status, setStatus] = reactExports.useState("idle");
  const [toastMsg, setToastMsg] = reactExports.useState(null);
  reactExports.useEffect(() => {
    if (status === "idle" && !toastMsg) return;
    const timer = window.setTimeout(() => {
      setStatus("idle");
      setToastMsg(null);
    }, 3600);
    return () => window.clearTimeout(timer);
  }, [status, toastMsg]);
  const handleDetectGps = async () => {
    if (isDetecting) return;
    setIsDetecting(true);
    setStatus("idle");
    setToastMsg(null);
    try {
      const result = await detectCurrentBirthPlaceViaGps();
      onSelectPlace(result.placeName, result.location);
      setStatus("success");
      setToastMsg(`GPS जन्म स्थान सिंक हो गया: ${result.placeName}`);
    } catch (err) {
      setStatus("error");
      setToastMsg(
        err?.message || "लोकेशन प्राप्त नहीं हो सकी — कृपया शहर का नाम लिखें।"
      );
    } finally {
      setIsDetecting(false);
    }
  };
  const sizeClasses = size === "xs" ? "px-2 py-1 text-[10px] rounded-lg gap-1" : size === "md" ? "px-3 py-2 text-xs rounded-xl gap-1.5" : "px-2.5 py-1.5 text-[11px] rounded-xl gap-1";
  const iconClasses = size === "xs" ? "w-3 h-3" : "w-3.5 h-3.5";
  const stateClasses = status === "success" ? "bg-emerald-900/80 border-emerald-400 text-emerald-200" : status === "error" ? "bg-rose-950/80 border-rose-500/70 text-rose-200" : "bg-amber-500/15 hover:bg-amber-500/30 border-amber-500/55 hover:border-amber-300 text-amber-200";
  const displayLabel = isDetecting ? size === "xs" ? "..." : "खोज रहा..." : status === "success" ? size === "xs" ? "GPS" : "सिंक पूर्ण" : label || "GPS";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        onClick: handleDetectGps,
        disabled: isDetecting,
        title,
        "aria-label": title,
        className: `inline-flex items-center justify-center font-extrabold border shrink-0 transition-all cursor-pointer active:scale-95 whitespace-nowrap disabled:opacity-70 ${sizeClasses} ${stateClasses} ${className}`,
        children: [
          isDetecting ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: `${iconClasses} animate-spin text-theme-primary`, strokeWidth: 1.5 }) : status === "success" ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: `${iconClasses} text-emerald-300`, strokeWidth: 1.5 }) : status === "error" ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: `${iconClasses} text-rose-300`, strokeWidth: 1.5 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(LocateFixed, { className: `${iconClasses} text-theme-primary`, strokeWidth: 1.5 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: displayLabel })
        ]
      }
    ),
    toastMsg && typeof document !== "undefined" && reactDomExports.createPortal(
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed bottom-20 sm:bottom-6 left-1/2 -translate-x-1/2 z-[9999] max-w-[92vw] px-4 py-2.5 rounded-2xl shadow-2xl border text-xs sm:text-sm font-bold flex items-center gap-2 pointer-events-none animate-fadeIn backdrop-blur-md bg-slate-950/95 border-amber-500/60 text-amber-100", children: [
        status === "error" ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-4 h-4 text-rose-400 shrink-0", strokeWidth: 1.5 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(LocateFixed, { className: "w-4 h-4 text-emerald-400 shrink-0", strokeWidth: 1.5 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: toastMsg })
      ] }),
      document.body
    )
  ] });
};
export {
  BirthPlaceGpsButton as B
};
