import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import '../../styles/globals.css';
export const Checkbox = ({ name, label, checked, styleType, className, onChange }) => (_jsx("div", { children: _jsxs("label", { htmlFor: name, className: `${styleType} ${className}`, children: [_jsx("input", { type: "checkbox", checked: checked, onChange: e => onChange(e.target.checked) }), label] }) }));
//# sourceMappingURL=Checkbox.js.map