import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';
import '.../../../styles/forms.style.css';
/**
 * Checkbox Component
 * @param name - The name of the checkbox input
 * @param label - The label to display next to the checkbox
 * @param checked - Boolean indicating if the checkbox is checked
 * @param styleType - Optional style type for the checkbox
 * @param className - Optional additional class names for the checkbox
 * @param onChange - Function to call when the checkbox state changes
 * @returns A styled checkbox input with a label
 */
export const Checkbox = ({
  name,
  label,
  checked,
  styleType,
  className,
  onChange,
}) =>
  _jsxs('label', {
    htmlFor: name,
    className: `${styleType} ${className}`,
    children: [
      _jsx('input', {
        id: name,
        type: 'checkbox',
        checked: checked,
        onChange: () => onChange(!checked),
      }),
      label,
    ],
  });
//# sourceMappingURL=Checkbox.js.map
