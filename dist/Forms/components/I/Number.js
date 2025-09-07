"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputNumber = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const InputContainer_1 = require("../InputContainer");
/**
 * A numeric input field component with label support and value conversion.
 *
 * Renders a specialized number input that handles numeric value conversion
 * and provides native browser number input features including stepper controls.
 *
 * @param name - The unique identifier for the number input, used for id and name attributes
 * @param label - The text label displayed for the number input field
 * @param value - The current numeric value (controlled component)
 * @param styleType - Optional CSS class name(s) for custom styling of the number input
 * @param onChange - Callback function invoked when the numeric value changes
 * @param placeholder - Optional placeholder text displayed when the input is empty
 * @param className - Optional additional CSS class name(s) for the input element
 *
 * @example
 * // Basic number input
 * <InputNumber
 *   name="age"
 *   label="Age"
 *   value={age}
 *   onChange={(value) => setAge(value)}
 *   placeholder="Enter your age"
 * />
 *
 * @example
 * // With custom styling and additional attributes
 * <InputNumber
 *   name="quantity"
 *   label="Quantity"
 *   value={quantity}
 *   onChange={setQuantity}
 *   styleType="futuristic"
 *   className="w-24"
 *   min={1}
 *   max={100}
 *   step={1}
 * />
 *
 * @remarks
 * The component:
 * - Uses the native HTML5 number input type (type="number")
 * - Automatically converts string input values to numbers using Number()
 * - Provides browser-native number stepper controls where supported
 * - Uses InputContainer for consistent label placement and accessibility
 * - Supports all native number input attributes (min, max, step, etc.)
 * - Follows controlled component pattern for state management
 */
const InputNumber = ({ name, label, value, styleType, onChange, placeholder, className, }) => ((0, jsx_runtime_1.jsx)(InputContainer_1.InputContainer, { name: name, label: label, children: (0, jsx_runtime_1.jsx)("input", { id: name, className: `${styleType ?? ''} ${className ?? ''}`, type: "number", value: value, placeholder: placeholder, onChange: (e) => onChange(Number(e.target.value)) }) }));
exports.InputNumber = InputNumber;
//# sourceMappingURL=Number.js.map