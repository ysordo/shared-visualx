interface TextAreaProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const TextArea: React.FC<TextAreaProps> = ({ label, value, onChange, placeholder }) => (
  <div>
    <label>{label}</label>
    <textarea
      value={value}
      placeholder={placeholder}
      onChange={e => onChange(e.target.value)}
    />
  </div>
);