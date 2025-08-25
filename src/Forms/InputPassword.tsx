import React from 'react';

interface InputPasswordProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const InputPassword: React.FC<InputPasswordProps> = ({ label, value, onChange, placeholder }) => (
  <div>
    <label>{label}</label>
    <input
      type="password"
      value={value}
      placeholder={placeholder}
      onChange={e => onChange(e.target.value)}
    />
  </div>
);