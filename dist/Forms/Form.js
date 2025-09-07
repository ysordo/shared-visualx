"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Form = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
/**
 * A customizable form component with built-in submission handling.
 *
 * This component wraps the native HTML form element and provides a consistent
 * way to handle form submissions in React applications.
 *
 * @param onSubmit - Callback function invoked when the form is submitted.
 *                   Receives the form event as its only argument.
 * @param className - Optional CSS class to extend the component's styling.
 * @param props - All other props are spread onto the underlying form element.
 *
 * @example
 * // Basic usage
 * <Form onSubmit={(e) => {
 *   e.preventDefault();
 *   console.log('Form submitted');
 * }}>
 *   <input type="text" name="username" />
 *   <button type="submit">Submit</button>
 * </Form>
 *
 * @example
 * // With custom styling
 * <Form
 *   onSubmit={handleSubmit}
 *   className="bg-white p-6 rounded shadow-md"
 * >
 *   {/* form fields *\/}
 * </Form>
 */
const Form = ({ onSubmit, className, ...props }) => {
    const handleSubmit = (e) => {
        onSubmit?.(e);
    };
    return ((0, jsx_runtime_1.jsx)("form", { onSubmit: handleSubmit, className: `flex flex-col gap-4 p-4 ${className ?? ''}`, ...props }));
};
exports.Form = Form;
//# sourceMappingURL=Form.js.map