import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * Input Container Component
 * @param label - The label to display for the input
 * @param name - The name of the input
 * @param children - The input element to be wrapped
 * @returns A styled container with a label and input element
 */
export const InputContainer = ({ label, name, children }) => (_jsxs("div", { className: "flex flex-col gap-0 mb-4", children: [_jsx("label", { className: "font-medium text-sm", htmlFor: name, children: label }), _jsx("div", { className: "ml-2", children: children })] }));
//# sourceMappingURL=InputContainer.js.map