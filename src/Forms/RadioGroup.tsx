import React from 'react';
import '../../styles/globals.css';

export const RadioGroup: React.FC<RadioGroupProps> = ({
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
          value={opt.value}
          checked={value === opt.value}
          onChange={() => onChange(opt.value)}
        />
        {opt.label}
      </label>
    ))}
  </div>
);
