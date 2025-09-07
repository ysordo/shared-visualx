import type { InputTypes } from '../formComponents';
/**
 * An email input field component with built-in validation and label support.
 *
 * Renders a specialized email input with native browser validation for email format.
 * Wrapped with a label container for consistent form layout and accessibility.
 *
 * @param name - The unique identifier for the email input, used for id and name attributes
 * @param label - The text label displayed for the email input field
 * @param value - The current email value (controlled component)
 * @param styleType - Optional CSS class name(s) for custom styling of the email input
 * @param onChange - Callback function invoked when the email value changes
 * @param placeholder - Optional placeholder text displayed when the input is empty
 * @param className - Optional additional CSS class name(s) for the input element
 *
 * @example
 * // Basic email input
 * <InputEmail
 *   name="userEmail"
 *   label="Email Address"
 *   value={email}
 *   onChange={(value) => setEmail(value)}
 *   placeholder="example@domain.com"
 * />
 *
 * @example
 * // With custom styling
 * <InputEmail
 *   name="contactEmail"
 *   label="Contact Email"
 *   value={contactEmail}
 *   onChange={setContactEmail}
 *   styleType="futuristic"
 *   className="w-full max-w-md"
 * />
 *
 * @remarks
 * The component:
 * - Uses the native HTML5 email input type (type="email") with built-in validation
 * - Provides browser-native email format validation where supported
 * - Uses InputContainer for consistent label placement and accessibility
 * - Follows controlled component pattern for state management
 * - Supports mobile-friendly email keyboards on touch devices
 */
export declare const InputEmail: React.FC<InputTypes.InputEmailProps>;
//# sourceMappingURL=Email.d.ts.map