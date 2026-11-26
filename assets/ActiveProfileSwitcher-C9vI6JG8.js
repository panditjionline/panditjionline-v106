import { r as reactExports, j as jsxRuntimeExports } from "./vendor-react-CCbeDaYX.js";
import { H as getActiveProfile, z as setActiveProfile, N as getFamilyVaultProfiles } from "./panchang-core-24ia-akc.js";
import { U as Users, al as ChevronDown, S as Sparkles, a5 as CircleCheck } from "./vendor-icons-Bk5Rg8-9.js";
import "./vendor-astronomy-C8JZdkQu.js";
const ActiveProfileSwitcher = () => {
  const [activeProfile, setActiveProfileState] = reactExports.useState(getActiveProfile());
  const [profiles, setProfiles] = reactExports.useState([]);
  const [isOpen, setIsOpen] = reactExports.useState(false);
  const loadData = () => {
    const allProfiles = getFamilyVaultProfiles();
    setProfiles(allProfiles);
    const current = getActiveProfile();
    if (!current && allProfiles.length > 0) {
      const primary = allProfiles.find((p) => p.isPrimary) || allProfiles[0];
      setActiveProfile(primary);
      setActiveProfileState(primary);
    } else {
      setActiveProfileState(current);
    }
  };
  reactExports.useEffect(() => {
    loadData();
    const handleUpdate = () => loadData();
    window.addEventListener("panditji_vault_updated", handleUpdate);
    window.addEventListener("panditji_active_profile_updated", handleUpdate);
    return () => {
      window.removeEventListener("panditji_vault_updated", handleUpdate);
      window.removeEventListener("panditji_active_profile_updated", handleUpdate);
    };
  }, []);
  if (profiles.length === 0) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        onClick: () => setIsOpen(!isOpen),
        className: "flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-amber-950/80 hover:bg-amber-900/80 border border-amber-500/50 text-amber-200 text-xs font-bold transition-all cursor-pointer shadow-sm",
        title: "सक्रिय व्यक्तिगत प्रोफ़ाइल (Active Profile)",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-3.5 h-3.5 text-amber-400 flex-shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate max-w-[110px] sm:max-w-[140px]", children: activeProfile ? `${activeProfile.name} (${activeProfile.rashi || "राशि"})` : "प्रोफ़ाइल चुनें" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-3 h-3 text-amber-400 flex-shrink-0" })
        ]
      }
    ),
    isOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute left-0 mt-2 w-64 bg-[#0d1322] border border-amber-600/50 rounded-2xl shadow-2xl py-2 z-50 animate-fadeIn", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-3 py-1.5 border-b border-amber-900/40 text-[11px] font-bold text-amber-300 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "परिवार की सक्रिय प्रोफ़ाइल (Auto-Personalized)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3 h-3 text-amber-400" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-h-60 overflow-y-auto py-1", children: profiles.map((p) => {
        const isSelected = activeProfile?.id === p.id;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => {
              setActiveProfile(p);
              setActiveProfileState(p);
              setIsOpen(false);
            },
            className: `w-full text-left px-3 py-2 text-xs flex items-center justify-between transition-colors cursor-pointer ${isSelected ? "bg-amber-600/30 text-amber-200 font-bold border-l-2 border-amber-400" : "text-slate-300 hover:bg-amber-950/40 hover:text-amber-100"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 pr-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold truncate text-amber-100", children: p.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-amber-400/80 truncate", children: [
                  p.rashi ? `${p.rashi} राशि` : "राशि नहीं",
                  " ",
                  p.nakshatra ? `• ${p.nakshatra}` : ""
                ] })
              ] }),
              isSelected && /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 text-amber-400 flex-shrink-0" })
            ]
          },
          p.id
        );
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-3 pt-1.5 border-t border-amber-900/40 text-[10px] text-slate-400 text-center", children: "यहाँ से बदलने पर पूरे ऐप में राशिफल व पंचांग स्वतः बदल जाएंगे।" })
    ] })
  ] });
};
export {
  ActiveProfileSwitcher
};
