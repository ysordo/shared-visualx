import React from "react";

interface InputDateProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

export const InputDate: React.FC<InputDateProps> = ({
  label,
  value,
  onChange,
}) => (
  <div>
    <label>{label}</label>
    <input
      type="date"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);
