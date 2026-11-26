import { r as reactExports, j as jsxRuntimeExports } from "./vendor-react-CCbeDaYX.js";
const HINDI_MONTH_OPTIONS = [
  { value: 1, label: "जनवरी", short: "जन" },
  { value: 2, label: "फ़रवरी", short: "फ़र" },
  { value: 3, label: "मार्च", short: "मार्च" },
  { value: 4, label: "अप्रैल", short: "अप्रै" },
  { value: 5, label: "मई", short: "मई" },
  { value: 6, label: "जून", short: "जून" },
  { value: 7, label: "जुलाई", short: "जुला" },
  { value: 8, label: "अगस्त", short: "अग" },
  { value: 9, label: "सितंबर", short: "सित" },
  { value: 10, label: "अक्टूबर", short: "अक्टू" },
  { value: 11, label: "नवंबर", short: "नवं" },
  { value: 12, label: "दिसंबर", short: "दिसं" }
];
function getDaysInGregorianMonth(year, month) {
  const safeYear = Number.isFinite(year) ? year : 2026;
  const safeMonth = Math.min(12, Math.max(1, month || 1));
  if (safeMonth === 2) {
    const isLeap = safeYear % 4 === 0 && safeYear % 100 !== 0 || safeYear % 400 === 0;
    return isLeap ? 29 : 28;
  }
  return [4, 6, 9, 11].includes(safeMonth) ? 30 : 31;
}
function parseIsoParts(raw) {
  if (!raw || typeof raw !== "string") return null;
  const m = raw.trim().match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
  if (!m) return null;
  const year = parseInt(m[1], 10);
  const month = parseInt(m[2], 10);
  const day = parseInt(m[3], 10);
  if (!Number.isFinite(year) || month < 1 || month > 12 || day < 1 || day > 31) return null;
  return { year, month, day };
}
function formatIso(year, month, day) {
  const y = String(year).padStart(4, "0");
  const m = String(month).padStart(2, "0");
  const d = String(day).padStart(2, "0");
  return `${y}-${m}-${d}`;
}
const VedicDateInput = ({
  value,
  onChange,
  minYear: propMinYear,
  maxYear: propMaxYear,
  min,
  max,
  className = "",
  selectClassName = "",
  yearInputClassName = "",
  required = false,
  disabled = false,
  id,
  ariaLabel = "तिथि चयन (1600–2500 ई.)",
  compact = false,
  variant = "dark",
  onEnterPress
}) => {
  const minParts = reactExports.useMemo(() => parseIsoParts(min), [min]);
  const maxParts = reactExports.useMemo(() => parseIsoParts(max), [max]);
  const effectiveMinYear = Math.max(1600, propMinYear ?? minParts?.year ?? 1600);
  const effectiveMaxYear = Math.min(2500, propMaxYear ?? maxParts?.year ?? 2500);
  const parsed = reactExports.useMemo(() => parseIsoParts(value), [value]);
  const fallbackNow = reactExports.useMemo(() => {
    const now = /* @__PURE__ */ new Date();
    return {
      year: Math.min(effectiveMaxYear, Math.max(effectiveMinYear, now.getFullYear())),
      month: now.getMonth() + 1,
      day: now.getDate()
    };
  }, [effectiveMinYear, effectiveMaxYear]);
  const [dayVal, setDayVal] = reactExports.useState(parsed?.day ?? fallbackNow.day);
  const [monthVal, setMonthVal] = reactExports.useState(parsed?.month ?? fallbackNow.month);
  const [yearText, setYearText] = reactExports.useState(
    parsed ? String(parsed.year) : value ? "" : String(fallbackNow.year)
  );
  reactExports.useEffect(() => {
    const next = parseIsoParts(value);
    if (next) {
      setDayVal(next.day);
      setMonthVal(next.month);
      setYearText(String(next.year));
    } else if (!value) {
      setYearText("");
    }
  }, [value]);
  const numericYear = reactExports.useMemo(() => {
    const n = parseInt(yearText, 10);
    if (!Number.isFinite(n)) return parsed?.year ?? fallbackNow.year;
    return n;
  }, [yearText, parsed, fallbackNow.year]);
  const maxDaysInMonth = reactExports.useMemo(
    () => getDaysInGregorianMonth(numericYear, monthVal),
    [numericYear, monthVal]
  );
  const emitDate = (nextYear, nextMonth, nextDay) => {
    const clampedYear = Math.min(effectiveMaxYear, Math.max(effectiveMinYear, nextYear));
    const clampedMonth = Math.min(12, Math.max(1, nextMonth));
    const maxD = getDaysInGregorianMonth(clampedYear, clampedMonth);
    const clampedDay = Math.min(maxD, Math.max(1, nextDay));
    let iso = formatIso(clampedYear, clampedMonth, clampedDay);
    if (min && /^\d{4}-\d{2}-\d{2}$/.test(min) && iso < min) iso = min;
    if (max && /^\d{4}-\d{2}-\d{2}$/.test(max) && iso > max) iso = max;
    const finalParts = parseIsoParts(iso);
    if (finalParts) {
      setDayVal(finalParts.day);
      setMonthVal(finalParts.month);
      setYearText(String(finalParts.year));
    }
    onChange(iso);
    return iso;
  };
  const handleDayChange = (e) => {
    const d = parseInt(e.target.value, 10) || 1;
    setDayVal(d);
    const y = parseInt(yearText, 10);
    if (Number.isFinite(y) && y >= effectiveMinYear && y <= effectiveMaxYear) {
      emitDate(y, monthVal, d);
    } else if (!yearText) {
      emitDate(fallbackNow.year, monthVal, d);
    }
  };
  const handleMonthChange = (e) => {
    const m = parseInt(e.target.value, 10) || 1;
    setMonthVal(m);
    const y = parseInt(yearText, 10);
    const targetY = Number.isFinite(y) && y >= effectiveMinYear && y <= effectiveMaxYear ? y : fallbackNow.year;
    const maxD = getDaysInGregorianMonth(targetY, m);
    const nextD = Math.min(dayVal, maxD);
    setDayVal(nextD);
    if (Number.isFinite(y) && y >= effectiveMinYear && y <= effectiveMaxYear) {
      emitDate(y, m, nextD);
    } else if (!yearText) {
      emitDate(targetY, m, nextD);
    }
  };
  const handleYearChange = (e) => {
    const digitsOnly = e.target.value.replace(/[^\d]/g, "").slice(0, 4);
    setYearText(digitsOnly);
    if (digitsOnly.length === 4) {
      const y = parseInt(digitsOnly, 10);
      if (y >= effectiveMinYear && y <= effectiveMaxYear) {
        emitDate(y, monthVal, dayVal);
      }
    } else if (digitsOnly === "" && !required) {
      onChange("");
    }
  };
  const handleYearBlur = () => {
    if (!yearText) {
      if (required) {
        emitDate(fallbackNow.year, monthVal, dayVal);
      }
      return;
    }
    const y = parseInt(yearText, 10);
    if (!Number.isFinite(y)) {
      emitDate(fallbackNow.year, monthVal, dayVal);
      return;
    }
    const clampedY = Math.min(effectiveMaxYear, Math.max(effectiveMinYear, y));
    emitDate(clampedY, monthVal, dayVal);
  };
  const handleYearKeyDown = (e) => {
    if (e.key === "Enter" && onEnterPress) {
      e.preventDefault();
      const parsedY = parseInt(yearText, 10);
      const targetY = Number.isFinite(parsedY) ? Math.min(effectiveMaxYear, Math.max(effectiveMinYear, parsedY)) : fallbackNow.year;
      const resolvedIso = emitDate(targetY, monthVal, dayVal);
      onEnterPress(resolvedIso);
    }
  };
  const baseControl = variant === "light" ? "bg-white border border-amber-300 text-stone-900 focus:border-amber-600 focus:ring-1 focus:ring-amber-500/40" : "bg-black/45 border border-amber-500/35 text-amber-50 focus:border-amber-400 focus:ring-1 focus:ring-amber-400/40";
  const padClass = "h-8 px-1.5 py-1 text-xs leading-none";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      id,
      role: "group",
      "aria-label": ariaLabel,
      className: `inline-flex flex-nowrap items-center gap-1.5 max-w-full ${className}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "select",
          {
            "aria-label": "दिन (Day)",
            disabled,
            required,
            value: Math.min(dayVal, maxDaysInMonth),
            onChange: handleDayChange,
            className: `w-14 shrink-0 rounded-lg outline-none font-medium tabular-nums cursor-pointer ${padClass} ${baseControl} ${selectClassName}`,
            children: Array.from({ length: maxDaysInMonth }, (_, i) => i + 1).map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "option",
              {
                value: d,
                className: variant === "light" ? "bg-white text-stone-900" : "bg-stone-900 text-amber-50",
                children: String(d).padStart(2, "0")
              },
              d
            ))
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "select",
          {
            "aria-label": "माह (Month)",
            disabled,
            required,
            value: monthVal,
            onChange: handleMonthChange,
            className: `w-24 shrink-0 rounded-lg outline-none font-medium cursor-pointer ${padClass} ${baseControl} ${selectClassName}`,
            children: HINDI_MONTH_OPTIONS.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "option",
              {
                value: m.value,
                className: variant === "light" ? "bg-white text-stone-900" : "bg-stone-900 text-amber-50",
                children: compact ? m.short : m.label
              },
              m.value
            ))
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            inputMode: "numeric",
            pattern: "[0-9]*",
            maxLength: 4,
            "aria-label": `वर्ष (${effectiveMinYear}–${effectiveMaxYear})`,
            placeholder: "वर्ष",
            disabled,
            required,
            value: yearText,
            onChange: handleYearChange,
            onBlur: handleYearBlur,
            onKeyDown: handleYearKeyDown,
            className: `w-20 shrink-0 rounded-lg outline-none font-semibold tabular-nums text-center ${padClass} ${baseControl} ${yearInputClassName}`
          }
        )
      ]
    }
  );
};
export {
  VedicDateInput as V
};
