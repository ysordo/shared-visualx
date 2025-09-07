import type { InputTypes } from '../formComponents';
/**
 * A checkbox component with label support and customizable styling.
 *
 * Renders a standard checkbox input with an associated label for better accessibility
 * and user experience. Supports both controlled and uncontrolled usage patterns.
 *
 * @param name - The unique identifier for the checkbox, used for id and name attributes
 * @param label - The text label displayed next to the checkbox
 * @param checked - The current checked state (controlled component)
 * @param styleType - Optional CSS class name(s) for custom styling of the label container
 * @param className - Optional additional CSS class name(s) for the label element
 * @param onChange - Callback function invoked when the checkbox state changes
 *
 * @example
 * // Basic checkbox
 * <Checkbox
 *   name="termsAgreed"
 *   label="I agree to the terms and conditions"
 *   checked={agreed}
 *   onChange={(value) => setAgreed(value)}
 * />
 *
 * @example
 * // With custom styling
 * <Checkbox
 *   name="newsletter"
 *   label="Subscribe to newsletter"
 *   checked={subscribed}
 *   onChange={setSubscribed}
 *   styleType="futuristic"
 *   className="text-blue-600"
 * />
 *
 * @example
 * // With additional HTML attributes
 * <Checkbox
 *   name="notifications"
 *   label="Enable notifications"
 *   checked={notificationsEnabled}
 *   onChange={setNotificationsEnabled}
 *   disabled={!isOnline}
 *   required={true}
 * />
 *
 * @remarks
 * The component:
 * - Wraps the checkbox input with a label for better accessibility and click target area
 * - Toggles the boolean state automatically when clicked
 * - Supports all standard checkbox HTML attributes (disabled, required, etc.)
 * - Uses a clean, simple implementation without external dependencies
 * - Follows controlled component pattern for state management
 */
export declare const Checkbox: React.FC<InputTypes.CheckboxProps>;
//# sourceMappingURL=Checkbox.d.ts.map