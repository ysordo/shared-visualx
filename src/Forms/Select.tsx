import React from 'react';
import { InputContainer } from './InputContainer';

interface SelectProps {
  name: string;
  label: string;
  options: { value: string; text: string }[];
  value: string;
  onChange: (value: string) => void;
}

export const Select: React.FC<SelectProps> = ({
  name,
  label,
  options,
  value,
  onChange,
}) => (
  <InputContainer name={name} label={label}>
    <select name={name} value={value} onChange={(e) => onChange(e.target.value)}>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.text}
        </option>
      ))}
    </select>
  </InputContainer>
);
