import type { InputTypes } from '../formComponents';
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
export declare const InputText: React.FC<InputTypes.InputTextProps>;
//# sourceMappingURL=Text.d.ts.map