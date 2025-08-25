import React from 'react';

interface InputPhoneProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const InputPhone: React.FC<InputPhoneProps> = ({ label, value, onChange, placeholder }) => (
  <div>
    <label>{label}</label>
    <input
      type="tel"
      value={value}
      placeholder={placeholder}
      onChange={e => onChange(e.target.value)}
    />
  </div>
);