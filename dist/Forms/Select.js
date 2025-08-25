import { jsx as _jsx } from "react/jsx-runtime";
import { InputContainer } from './InputContainer';
export const Select = ({ label, options, value, onChange }) => (_jsx(InputContainer, { label: label, children: _jsx("select", { value: value, onChange: e => onChange(e.target.value), children: options.map(opt => (_jsx("option", { value: opt.value, children: opt.text }, opt.value))) }) }));
//# sourceMappingURL=Select.js.map