import type { InputTypes } from '../formComponents';
/**
 * A telephone number input field component with label support and phone-specific features.
 *
 * Renders a telephone input that provides optimized keyboard layouts for phone number entry
 * on mobile devices and basic validation for telephone number formats.
 *
 * @param name - The unique identifier for the phone input, used for id and name attributes
 * @param label - The text label displayed for the phone input field
 * @param value - The current phone number value (controlled component)
 * @param styleType - Optional CSS class name(s) for custom styling of the phone input
 * @param onChange - Callback function invoked when the phone number value changes
 * @param placeholder - Optional placeholder text displayed when the input is empty
 * @param className - Optional additional CSS class name(s) for the input element
 *
 * @example
 * // Basic phone input
 * <InputPhone
 *   name="phoneNumber"
 *   label="Phone Number"
 *   value={phoneNumber}
 *   onChange={(value) => setPhoneNumber(value)}
 *   placeholder="(555) 123-4567"
 * />
 *
 * @example
 * // With custom styling and additional attributes
 * <InputPhone
 *   name="mobilePhone"
 *   label="Mobile Phone"
 *   value={mobilePhone}
 *   onChange={setMobilePhone}
 *   styleType="futuristic"
 *   className="w-full"
 *   pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
 *   title="Format: 555-123-4567"
 * />
 *
 * @remarks
 * The component:
 * - Uses the native HTML5 telephone input type (type="tel")
 * - Provides telephone-optimized keyboards on mobile devices
 * - Supports basic pattern validation through the pattern attribute
 * - Uses InputContainer for consistent label placement and accessibility
 * - Follows controlled component pattern for state management
 * - Can be enhanced with phone number formatting libraries if needed
 */
export declare const InputPhone: React.FC<InputTypes.InputPhoneProps>;
//# sourceMappingURL=Phone.d.ts.map