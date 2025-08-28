import { jsx as _jsx } from "react/jsx-runtime";
import { InputContainer } from './InputContainer';
import '.../../../styles/forms.style.css';
/**
 * Select Component
 * @param name - The name of the select input
 * @param label - The label to display for the select input
 * @param options - Array of options for the select input
 * @param value - The current selected value
 * @param onChange - Function to call when the selected value changes
 * @param styleType - Optional style type for the select input
 * @returns A styled select dropdown element
 */
export const Select = ({ name, label, options, value, onChange, styleType, }) => (_jsx(InputContainer, { name: name, label: label, children: _jsx("select", { id: name, name: name, value: value, className: `${styleType}`, onChange: (e) => onChange(e.target.value), children: options.map((opt) => (_jsx("option", { className: `${styleType}`, value: opt.value, children: opt.text }, opt.value))) }) }));
//# sourceMappingURL=Select.js.map