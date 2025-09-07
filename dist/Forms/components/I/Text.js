"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputText = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const InputContainer_1 = require("../InputContainer");
/**
 * A text input field component with label support and customizable styling.
 *
 * Renders a standard text input wrapped with a label container for consistent
 * form layout and accessibility. Supports all standard text input attributes.
 *
 * @param name - The unique identifier for the input, used for id and name attributes
 * @param label - The text label displayed for the input field
 * @param value - The current value of the input (controlled component)
 * @param styleType - Optional CSS class name(s) for custom styling of the input element
 * @param onChange - Callback function invoked when the input value changes
 * @param placeholder - Optional placeholder text displayed when the input is empty
 * @param className - Optional additional CSS class name(s) for the input element
 *
 * @example
 * // Basic text input
 * <InputText
 *   name="firstName"
 *   label="First Name"
 *   value={firstName}
 *   onChange={(value) => setFirstName(value)}
 *   placeholder="Enter your first name"
 * />
 *
 * @example
 * // With custom styling
 * <InputText
 *   name="username"
 *   label="Username"
 *   value={username}
 *   onChange={setUsername}
 *   styleType="futuristic"
 *   className="w-full"
 * />
 *
 * @remarks
 * The component:
 * - Uses InputContainer for consistent label placement and spacing
 * - Supports both styleType and className for styling flexibility
 * - Implements proper accessibility practices with label association
 * - Follows controlled component pattern for state management
 */
const InputText = ({ name, label, value, styleType, onChange, placeholder, className, }) => ((0, jsx_runtime_1.jsx)(InputContainer_1.InputContainer, { name: name, label: label, children: (0, jsx_runtime_1.jsx)("input", { id: name, className: `${styleType ?? ''} ${className ?? ''}`, type: "text", value: value, placeholder: placeholder, onChange: (e) => onChange(e.target.value) }) }));
exports.InputText = InputText;
//# sourceMappingURL=Text.js.map