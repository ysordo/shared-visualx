import { InputContainer } from './InputContainer';
import '../../styles/globals.css';
import type { InputTypes } from '../interface/form';

/**
 * TextArea Component
 * @param name - The name of the textarea
 * @param label - The label to display for the textarea
 * @param value - The current value of the textarea
 * @param onChange - Function to call when the textarea value changes
 * @param placeholder - Placeholder text for the textarea
 * @param styleType - Optional style type for the textarea
 * @returns A styled textarea element
 */
export const TextArea: React.FC<InputTypes.TextAreaProps> = ({
  name,
  label,
  value,
  onChange,
  placeholder,
  styleType,
}) => (
  <InputContainer name={name} label={label}>
    <textarea
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      className={`${styleType}`}
    />
  </InputContainer>
);
