import type { InputTypes } from '../formComponents';
/**
 * A date input field component with label support and customizable styling.
 *
 * Renders a native HTML5 date picker input wrapped with a label container
 * for consistent form layout and accessibility. Provides proper date formatting
 * and browser-native date selection UI.
 *
 * @param name - The unique identifier for the date input, used for id and name attributes
 * @param label - The text label displayed for the date input field
 * @param value - The current date value in YYYY-MM-DD format (controlled component)
 * @param styleType - Optional CSS class name(s) for custom styling of the date input
 * @param onChange - Callback function invoked when the date value changes
 * @param className - Optional additional CSS class name(s) for the input element
 *
 * @example
 * // Basic date input
 * <InputDate
 *   name="birthDate"
 *   label="Date of Birth"
 *   value={birthDate}
 *   onChange={(value) => setBirthDate(value)}
 * />
 *
 * @example
 * // With custom styling
 * <InputDate
 *   name="appointmentDate"
 *   label="Appointment Date"
 *   value={appointmentDate}
 *   onChange={setAppointmentDate}
 *   styleType="futuristic"
 *   className="w-48"
 * />
 *
 * @remarks
 * The component:
 * - Uses the native HTML5 date input type (type="date")
 * - Expects and returns values in YYYY-MM-DD format
 * - Provides browser-native date picker UI where supported
 * - Uses InputContainer for consistent label placement and accessibility
 * - Follows controlled component pattern for state management
 */
export declare const InputDate: React.FC<InputTypes.InputDateProps>;
//# sourceMappingURL=Date.d.ts.map