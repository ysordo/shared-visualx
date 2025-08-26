import React from 'react';
import '../../styles/globals.css';

interface RadioOption {
  value: string;
  label: string;
  name: string;
}

interface RadioGroupProps {
  options: RadioOption[];
  value: string;
  styleType?: 'futuristic' | 'simple';
  className?: string;
  onChange: (value: string) => void;
}

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
        className={`!flex !items-center !gap-4 !py-1 ${styleType} ${className}`}>
        <input
          type="radio"
          name={opt.value}
          value={opt.value}
          checked={value === opt.value}
          onChange={() => onChange(opt.value)}
          className={`!w-5 !h-5 !rounded-full ${
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
