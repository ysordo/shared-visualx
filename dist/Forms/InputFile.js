import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const InputFile = ({ label, onChange }) => (_jsxs("div", { children: [_jsx("label", { children: label }), _jsx("input", { type: "file", onChange: (e) => onChange(e.target.files ? e.target.files[0] : null) })] }));
//# sourceMappingURL=InputFile.js.map