/**
 * Button component props
 * @interface ButtonProps
 * @property {string} children - The button text
 * @property {() => void} [onClick] - Click event handler
 * @property {'button' | 'submit' | 'reset'} [type] - Button type
 * @property {'futuristic' | 'simple'} [styleType] - Style type
 * @property {string} [className] - Additional CSS classes
 */
interface ButtonProps {
  children: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  styleType?: 'futuristic' | 'simple';
  className?: string;
}

/**
 * Input component props
 * @interface InputProps
 * @property {'text' | 'date' | 'email' | 'file' | 'number' | 'password' | 'phone'} type - The type of input
 * @property {string} name - The name of the input
 * @property {string} label - The label for the input
 * @property {string | number} [value] - The value of the input
 * @property {(value: string | number | File | null) => void} [onChange] - Change event handler
 * @property {string} [placeholder] - Placeholder text
 * @property {'futuristic' | 'simple'} [styleType] - Style type
 * @property {string} [className] - Additional CSS classes
 */
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

/**
 * Specific input type props
 * @interface CheckboxProps
 * @interface InputTextProps
 * @interface InputDateProps
 * @interface InputEmailProps
 * @interface InputFileProps
 * @interface InputNumberProps
 * @interface InputPasswordProps
 * @interface InputPhoneProps
 * @property {string} name - The name of the input
 * @property {string} label - The label for the input
 * @property {string | number} value - The value of the input
 * @property {(value: string | number | File | null) => void} onChange - Change event handler
 * @property {string} [placeholder] - Placeholder text (for text, email, number, password, phone)
 * @property {'futuristic' | 'simple'} [styleType] - Style type
 * @property {string} [className] - Additional CSS classes
 */
export namespace InputTypes {
  interface CheckboxProps {
  name: string;
  label: string;
  checked: boolean;
  styleType?: 'futuristic' | 'simple';
  className?: string;
  onChange: (checked: boolean) => void;
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

}