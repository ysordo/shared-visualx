import '../../../styles/forms.style.css';
import type { InputTypes } from './formComponents';
/**
 * A reusable textarea component with label and customizable styling.
 *
 * Wraps a textarea element with a label and container for consistent form styling.
 * Integrates with the InputContainer component for layout and error handling.
 *
 * @param name - The unique identifier for the textarea, used for the name attribute and label association
 * @param label - The text displayed as the label for the textarea
 * @param value - The current value of the textarea (controlled component)
 * @param onChange - Callback function invoked when the textarea value changes
 * @param placeholder - Optional placeholder text displayed when the textarea is empty
 * @param styleType - Optional CSS class name(s) to apply custom styling to the textarea
 *
 * @example
 * // Basic usage
 * <TextArea
 *   name="description"
 *   label="Product Description"
 *   value={description}
 *   onChange={(value) => setDescription(value)}
 *   placeholder="Enter a detailed description"
 * />
 *
 * @example
 * // With custom styling
 * <TextArea
 *   name="comments"
 *   label="Your Comments"
 *   value={comments}
 *   onChange={handleCommentsChange}
 *   styleType="border-2 p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
 * />
 */
export declare const TextArea: React.FC<InputTypes.TextAreaProps>;
//# sourceMappingURL=TextArea.d.ts.map