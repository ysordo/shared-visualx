import { jsx as _jsx } from 'react/jsx-runtime';
import '.../../../styles/forms.style.css';
/**
 * Button Component
 * @param label - The text to display on the button
 * @param onClick - Function to call when the button is clicked
 * @param type - The button type (button, submit, reset)
 * @param styleType - Optional style type for the button
 * @returns A styled button element
 */
export const Button = ({
  children,
  onClick,
  type = 'button',
  styleType,
  className,
}) =>
  _jsx('button', {
    type: type,
    onClick: onClick,
    className: `${styleType} ${className}`,
    children: children,
  });
//# sourceMappingURL=Button.js.map
