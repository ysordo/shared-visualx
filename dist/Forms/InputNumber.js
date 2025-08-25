import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const InputNumber = ({ label, value, onChange, placeholder }) => (_jsxs("div", { children: [_jsx("label", { children: label }), _jsx("input", { type: "number", value: value, placeholder: placeholder, onChange: e => onChange(Number(e.target.value)) })] }));
//# sourceMappingURL=InputNumber.js.map