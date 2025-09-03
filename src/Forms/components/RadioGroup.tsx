import React from 'react';
import '../../../styles/forms.style.css';
import type { InputTypes } from './formComponents';

/**
 * RadioGroup Component
 * @param options - Array of radio button options
 * @param value - The currently selected value
 * @param styleType - Optional style type for the radio buttons
 * @param className - Optional additional class names for the radio buttons
 * @param onChange - Function to call when the selected value changes
 * @returns A group of styled radio button inputs
 */
export const RadioGroup: React.FC<InputTypes.RadioGroupProps> = ({
  options,
  value,
  styleType,
  className = '',
  onChange,
}) => (
  <div className="flex flex-col gap-2">
    {options.map((opt) => (
      <label
        key={opt.value}
        htmlFor={opt.value}
        className={`${styleType} ${className}`}>
        <input
          type="radio"
          name={opt.value}
          id={opt.value}
          value={opt.value}
          checked={value === opt.value}
          onChange={() => onChange(opt.value === value ? '' : opt.value)}
        />
        {opt.label}
      </label>
    ))}
  </div>
);
