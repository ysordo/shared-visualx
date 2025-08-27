import { InputContainer } from './InputContainer';
import '../../styles/globals.css';


export const TextArea: React.FC<TextAreaProps> = ({
  name,
  label,
  value,
  onChange,
  placeholder,
  styleType
}) => (
  <InputContainer name={name} label={label}>
    <textarea
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      className={`${styleType}`}
    />
  </InputContainer>
);
