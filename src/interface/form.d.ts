interface ButtonProps {
  children: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  styleType?: 'futuristic' | 'simple';
}

interface CheckboxProps {
  name: string;
  label: string;
  checked: boolean;
  styleType?: 'futuristic' | 'simple';
  className?: string;
  onChange: (checked: boolean) => void;
}

interface InputProps {
  type: 'text' | 'date' | 'email' | 'file' | 'number' | 'password' | 'phone';
  name: string;
  label: string;
  value?: string | number;
  onChange?: (value: string | number | File | null) => void;
  placeholder?: string;
  className?: string;
  styleType?: 'futuristic' | 'simple';
}

interface InputTextProps {
  name: string;
  className?: string;
  styleType?: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

interface InputDateProps {
  name: string;
  className?: string;
  styleType?: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
}

interface InputEmailProps {
  name: string;
  className?: string;
  styleType?: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

interface InputFileProps {
  name: string;
  className?: string;
  styleType?: string;
  label: string;
  onChange: (file: File | null) => void;
}

interface InputNumberProps {
  name: string;
  className?: string;
  styleType?: string;
  label: string;
  value: number;
  onChange: (value: number) => void;
  placeholder?: string;
}

interface InputPasswordProps {
  name: string;
  className?: string;
  styleType?: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

interface InputPhoneProps {
  name: string;
  className?: string;
  styleType?: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

interface RadioOption {
  value: string;
  label: string;
}

interface RadioGroupProps {
  options: RadioOption[];
  value: string;
  styleType?: 'futuristic' | 'simple';
  className?: string;
  onChange: (value: string) => void;
}

interface SelectProps {
  name: string;
  label: string;
  options: { value: string; text: string }[];
  value: string;
  onChange: (value: string) => void;
  styleType?: 'futuristic' | 'simple';
}

interface TextAreaProps {
  name: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  styleType?: 'futuristic' | 'simple';
}