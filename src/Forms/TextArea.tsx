import { InputContainer } from './InputContainer';

interface TextAreaProps {
  name: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const TextArea: React.FC<TextAreaProps> = ({
  name,
  label,
  value,
  onChange,
  placeholder,
}) => (
  <InputContainer name={name} label={label}>
    <textarea
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
  </InputContainer>
);
