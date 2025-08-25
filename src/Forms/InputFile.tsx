import React from "react";

interface InputFileProps {
  label: string;
  onChange: (file: File | null) => void;
}

export const InputFile: React.FC<InputFileProps> = ({ label, onChange }) => (
  <div>
    <label>{label}</label>
    <input
      type="file"
      onChange={(e) => onChange(e.target.files ? e.target.files[0] : null)}
    />
  </div>
);
