import React from 'react';

interface InputNumberProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  placeholder?: string;
}

export const InputNumber: React.FC<InputNumberProps> = ({ label, value, onChange, placeholder }) => (
  <div>
    <label>{label}</label>
    <input
      type="number"
      value={value}
      placeholder={placeholder}
      onChange={e => onChange(Number(e.target.value))}
    />
  </div>
);