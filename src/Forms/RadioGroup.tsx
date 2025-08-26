import React from 'react';
import '../../styles/globals.css';

interface RadioOption {
  value: string;
  label: string;
}

interface RadioGroupProps {
  name: string;
  options: RadioOption[];
  value: string;
  styleType?: 'futuristic' | 'simple';
  className?: string;
  onChange: (value: string) => void;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  name,
  options,
  value,
  styleType,
  className = '',
  onChange,
}) => (
  <div className="flex flex-col gap-2">
    {options.map((opt) => (
      <label key={opt.value} htmlFor={name} className={`!flex !items-center !gap-2 ${styleType} ${className}`}>
        <input
          type="radio"
          name={name}
          value={opt.value}
          checked={value === opt.value}
          onChange={() => onChange(opt.value)}
          className={`!cursor-pointer !w-5 !h-5 ${
            opt.value === value
              ? 'border-[var(--violet)]'
              : 'border-[var(--base-200)]'
          }`}
        />
        {opt.label}
      </label>
    ))}
  </div>
);
