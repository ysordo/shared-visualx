import { jsx as _jsx } from "react/jsx-runtime";
import { InputContainer } from './InputContainer';
export const Select = ({ name, label, options, value, onChange, }) => (_jsx(InputContainer, { name: name, label: label, children: _jsx("select", { name: name, value: value, onChange: (e) => onChange(e.target.value), children: options.map((opt) => (_jsx("option", { value: opt.value, children: opt.text }, opt.value))) }) }));
//# sourceMappingURL=Select.js.map