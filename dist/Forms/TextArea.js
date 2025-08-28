import { jsx as _jsx } from 'react/jsx-runtime';
import { InputContainer } from './InputContainer';
import '../styles/globals.css';
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
export const TextArea = ({
  name,
  label,
  value,
  onChange,
  placeholder,
  styleType,
}) =>
  _jsx(InputContainer, {
    name: name,
    label: label,
    children: _jsx('textarea', {
      value: value,
      placeholder: placeholder,
      onChange: e => onChange(e.target.value),
      className: `${styleType}`,
    }),
  });
//# sourceMappingURL=TextArea.js.map
