import React from "react";

interface InputEmailProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const InputEmail: React.FC<InputEmailProps> = ({
  label,
  value,
  onChange,
  placeholder,
}) => (
  <div>
    <label>{label}</label>
    <input
      type="email"
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);
