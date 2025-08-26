import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import '../../styles/globals.css';
export const RadioGroup = ({ name, options, value, styleType, className = '', onChange, }) => (_jsx("div", { className: "flex flex-col gap-2", children: options.map((opt) => (_jsxs("label", { htmlFor: name, className: `!flex !items-center !gap-2 ${styleType} ${className}`, children: [_jsx("input", { type: "radio", name: name, value: opt.value, checked: value === opt.value, onChange: () => onChange(opt.value), className: `!cursor-pointer !w-5 !h-5 ${opt.value === value
                    ? 'border-[var(--violet)]'
                    : 'border-[var(--base-200)]'}` }), opt.label] }, opt.value))) }));
//# sourceMappingURL=RadioGroup.js.map