import React from 'react';
import { InputContainer } from './InputContainer';
import '../../styles/globals.css';
import type { InputTypes } from '../interface/form';

/**
 * Select Component
 * @param name - The name of the select input
 * @param label - The label to display for the select input
 * @param options - Array of options for the select input
 * @param value - The current selected value
 * @param onChange - Function to call when the selected value changes
 * @param styleType - Optional style type for the select input
 * @returns A styled select dropdown element
 */
export const Select: React.FC<InputTypes.SelectProps> = ({
  name,
  label,
  options,
  value,
  onChange,
  styleType,
}) => (
  <InputContainer name={name} label={label}>
    <select
      name={name}
      value={value}
      onChange={(e) => onChange(e.target.value)}>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.text}
        </option>
      ))}
    </select>
  </InputContainer>
);
