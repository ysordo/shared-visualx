import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const Checkbox = ({ label, checked, onChange }) => (_jsx("div", { children: _jsxs("label", { children: [_jsx("input", { type: "checkbox", checked: checked, onChange: e => onChange(e.target.checked) }), label] }) }));
//# sourceMappingURL=Checkbox.js.map