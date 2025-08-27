import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import '../../styles/globals.css';
/**
 * RadioGroup Component
 * @param options - Array of radio button options
 * @param value - The currently selected value
 * @param styleType - Optional style type for the radio buttons
 * @param className - Optional additional class names for the radio buttons
 * @param onChange - Function to call when the selected value changes
 * @returns A group of styled radio button inputs
 */
export const RadioGroup = ({ options, value, styleType, className = '', onChange, }) => (_jsx("div", { className: "flex flex-col gap-2", children: options.map((opt) => (_jsxs("label", { htmlFor: opt.value, className: `${styleType} ${className}`, children: [_jsx("input", { type: "radio", name: opt.value, value: opt.value, checked: value === opt.value, onChange: () => onChange(opt.value) }), opt.label] }, opt.value))) }));
//# sourceMappingURL=RadioGroup.js.map