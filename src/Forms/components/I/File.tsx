import type { InputTypes } from '../formComponents';
import { InputContainer } from '../InputContainer';

/**
 * A file upload input component with label support and customizable styling.
 *
 * Renders a file input field that allows users to select and upload files.
 * Provides a clean interface for single file selection with proper event handling.
 *
 * @param name - The unique identifier for the file input, used for id and name attributes
 * @param label - The text label displayed for the file input field
 * @param styleType - Optional CSS class name(s) for custom styling of the file input
 * @param onChange - Callback function invoked when a file is selected, receives File object or null
 * @param className - Optional additional CSS class name(s) for the input element
 *
 * @example
 * // Basic file input
 * <InputFile
 *   name="profilePicture"
 *   label="Upload Profile Picture"
 *   onChange={(file) => handleFileUpload(file)}
 * />
 *
 * @example
 * // With custom styling and accept restrictions
 * <InputFile
 *   name="document"
 *   label="Upload Document"
 *   onChange={handleDocumentUpload}
 *   styleType="futuristic"
 *   className="w-full"
 *   // Additional native input attributes can be passed through
 *   accept=".pdf,.doc,.docx"
 *   multiple={false}
 * />
 *
 * @remarks
 * The component:
 * - Uses the native HTML5 file input type (type="file")
 * - Returns the selected File object or null if no file selected
 * - Supports all native file input attributes (accept, multiple, etc.)
 * - Uses InputContainer for consistent label placement and accessibility
 * - Handles null safety for the files array in the change event
 */
export const InputFile: React.FC<InputTypes.InputFileProps> = ({
  name,
  label,
  styleType,
  onChange,
  className,
}) => (
  <InputContainer name={name} label={label}>
    <input
      id={name}
      className={`${styleType ?? ''} ${className ?? ''}`}
      type="file"
      onChange={(e) => onChange(e.target.files ? e.target.files[0] : null)}
    />
  </InputContainer>
);