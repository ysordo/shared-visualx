import React from 'react';
import '../../styles/globals.css';

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
export const Checkbox: React.FC<CheckboxProps> = ({
  name,
  label,
  checked,
  styleType,
  className,
  onChange,
}) => (
  <div>
    <label htmlFor={name} className={`${styleType} ${className}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => onChange(!checked)}
      />
      {label}
    </label>
  </div>
);
