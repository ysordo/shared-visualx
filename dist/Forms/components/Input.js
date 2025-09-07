'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
require("../../../styles/forms.style.css");
const Text_1 = require("./I/Text");
const Date_1 = require("./I/Date");
const Email_1 = require("./I/Email");
const File_1 = require("./I/File");
const Number_1 = require("./I/Number");
const Password_1 = require("./I/Password");
const Phone_1 = require("./I/Phone");
const Checkbox_1 = require("./I/Checkbox");
/**
 * A polymorphic input component that renders different input types based on the specified type.
 *
 * Acts as a factory component that delegates to specialized input components
 * while maintaining a consistent API. Handles type-specific value conversions
 * and callback signatures.
 *
 * @param type - The input type to render (text, date, email, file, number, password, phone, checkbox)
 * @param styleType - Optional CSS class name(s) for custom styling of the input element
 * @param props - Additional props passed to the underlying input component
 *
 * @example
 * // Text input
 * <Input
 *   type="text"
 *   name="username"
 *   label="Username"
 *   value={username}
 *   onChange={(value) => setUsername(value)}
 *   styleType="futuristic"
 * />
 *
 * @example
 * // Checkbox input
 * <Input
 *   type="checkbox"
 *   name="agreeToTerms"
 *   label="I agree to the terms"
 *   checked={agreed}
 *   onChange={(value) => setAgreed(value)}
 * />
 *
 * @example
 * // File input
 * <Input
 *   type="file"
 *   name="avatar"
 *   label="Profile picture"
 *   onChange={(file) => setAvatar(file)}
 *   accept="image/*"
 * />
 *
 * @remarks
 * The component handles type-specific value conversions:
 * - String-based inputs: text, email, password, phone, date
 * - Number input: numeric values
 * - File input: File objects or null
 * - Checkbox: boolean values
 *
 * Each input type delegates to a specialized component with proper TypeScript typing.
 */
const Input = ({ type, styleType, ...props }) => {
    switch (type) {
        case 'text':
            return ((0, jsx_runtime_1.jsx)(Text_1.InputText, { ...props, styleType: styleType, value: props.value, onChange: props.onChange }));
        case 'date':
            return ((0, jsx_runtime_1.jsx)(Date_1.InputDate, { ...props, styleType: styleType, value: props.value, onChange: props.onChange }));
        case 'email':
            return ((0, jsx_runtime_1.jsx)(Email_1.InputEmail, { ...props, styleType: styleType, value: props.value, onChange: props.onChange }));
        case 'file':
            return ((0, jsx_runtime_1.jsx)(File_1.InputFile, { ...props, styleType: styleType, onChange: props.onChange }));
        case 'number':
            return ((0, jsx_runtime_1.jsx)(Number_1.InputNumber, { ...props, styleType: styleType, value: props.value, onChange: props.onChange }));
        case 'password':
            return ((0, jsx_runtime_1.jsx)(Password_1.InputPassword, { ...props, styleType: styleType, value: props.value, onChange: props.onChange }));
        case 'phone':
            return ((0, jsx_runtime_1.jsx)(Phone_1.InputPhone, { ...props, styleType: styleType, value: props.value, onChange: props.onChange }));
        case 'checkbox':
            return ((0, jsx_runtime_1.jsx)(Checkbox_1.Checkbox, { ...props, styleType: styleType, checked: props.value, onChange: props.onChange }));
        default:
            return null;
    }
};
exports.Input = Input;
//# sourceMappingURL=Input.js.map