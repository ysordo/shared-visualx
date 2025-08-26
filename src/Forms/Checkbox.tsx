import React from 'react';
import '../../styles/globals.css';

interface CheckboxProps {
  name: string;
  label: string;
  checked: boolean;
  styleType?: 'futuristic' | 'simple';
  className?: string;
  onChange: (checked: boolean) => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({ name, label, checked, styleType, className, onChange }) => (
  <div>
    <label
      htmlFor={name}
      className={`${styleType} ${className}`}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={e => onChange(e.target.checked)}
      />
      {label}
    </label>
  </div>
);