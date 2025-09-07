"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputPassword = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const InputContainer_1 = require("../InputContainer");
/**
 * A password input field component with secure text masking and label support.
 *
 * Renders a password input that masks entered text for security purposes.
 * Provides native browser password management features like password saving and generation.
 *
 * @param name - The unique identifier for the password input, used for id and name attributes
 * @param label - The text label displayed for the password input field
 * @param value - The current password value (controlled component)
 * @param styleType - Optional CSS class name(s) for custom styling of the password input
 * @param onChange - Callback function invoked when the password value changes
 * @param placeholder - Optional placeholder text displayed when the input is empty
 * @param className - Optional additional CSS class name(s) for the input element
 *
 * @example
 * // Basic password input
 * <InputPassword
 *   name="password"
 *   label="Password"
 *   value={password}
 *   onChange={(value) => setPassword(value)}
 *   placeholder="Enter your password"
 * />
 *
 * @example
 * // With custom styling and additional attributes
 * <InputPassword
 *   name="confirmPassword"
 *   label="Confirm Password"
 *   value={confirmPassword}
 *   onChange={setConfirmPassword}
 *   styleType="futuristic"
 *   className="w-full max-w-md"
 *   autoComplete="new-password"
 *   minLength={8}
 * />
 *
 * @remarks
 * The component:
 * - Uses the native HTML5 password input type (type="password") with text masking
 * - Supports browser password management features (save, autofill, generate)
 * - Uses InputContainer for consistent label placement and accessibility
 * - Follows controlled component pattern for state management
 * - Supports all native password input attributes (autocomplete, minlength, etc.)
 */
const InputPassword = ({ name, label, value, styleType, onChange, placeholder, className, }) => ((0, jsx_runtime_1.jsx)(InputContainer_1.InputContainer, { name: name, label: label, children: (0, jsx_runtime_1.jsx)("input", { id: name, className: `${styleType ?? ''} ${className ?? ''}`, type: "password", value: value, placeholder: placeholder, onChange: (e) => onChange(e.target.value) }) }));
exports.InputPassword = InputPassword;
//# sourceMappingURL=Password.js.map