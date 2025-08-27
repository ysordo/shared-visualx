'use client';
import { InputContainer } from './InputContainer';
import '../../styles/globals.css';

/**
 * Input Component Props
 * @param type - The type of input (text, date, email, file, number, password, phone)
 * @param name - The name of the input
 * @param label - The label to display for the input
 * @param value - The current value of the input
 * @param onChange - Function to call when the input value changes
 * @param placeholder - Placeholder text for the input
 * @param className - Optional additional class names for the input
 * @param styleType - Optional style type for the input
 * @returns A styled input element based on the specified type
 */
export const Input: React.FC<InputProps> = ({
  type,
  styleType,
  ...props
}) => {
  switch (type) {
    case 'text':
      return (
        <InputText
          {...props}
          styleType={styleType}
          value={props.value as string}
          onChange={props.onChange as (value: string) => void}
        />
      );
    case 'date':
      return (
        <InputDate
          {...props}
          styleType={styleType}
          value={props.value as string}
          onChange={props.onChange as (value: string) => void}
        />
      );
    case 'email':
      return (
        <InputEmail
          {...props}
          styleType={styleType}
          value={props.value as string}
          onChange={props.onChange as (value: string) => void}
        />
      );
    case 'file':
      return (
        <InputFile
          {...props}
          styleType={styleType}
          onChange={props.onChange as (file: File | null) => void}
        />
      );
    case 'number':
      return (
        <InputNumber
          {...props}
          styleType={styleType}
          value={props.value as number}
          onChange={props.onChange as (value: number) => void}
        />
      );
    case 'password':
      return (
        <InputPassword
          {...props}
          styleType={styleType}
          value={props.value as string}
          onChange={props.onChange as (value: string) => void}
        />
      );
    case 'phone':
      return (
        <InputPhone
          {...props}
          styleType={styleType}
          value={props.value as string}
          onChange={props.onChange as (value: string) => void}
        />
      );
    default:
      return null;
  }
};

const InputText: React.FC<InputTextProps> = ({
  name,
  label,
  value,
  styleType,
  onChange,
  placeholder,
  className,
}) => (
  <InputContainer name={name} label={label}>
    <input
      className={`${
        styleType ?? ''
      } ${className ?? ''}`}
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
  </InputContainer>
);

const InputDate: React.FC<InputDateProps> = ({
  name,
  label,
  value,
  styleType,
  onChange,
  className,
}) => (
  <InputContainer name={name} label={label}>
    <input
      className={`${
        styleType ?? ''
      } ${className ?? ''}`}
      type="date"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </InputContainer>
);

const InputEmail: React.FC<InputEmailProps> = ({
  name,
  label,
  value,
  styleType,
  onChange,
  placeholder,
  className,
}) => (
  <InputContainer name={name} label={label}>
    <input
      className={`${
        styleType ?? ''
      } ${className ?? ''}`}
      type="email"
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
  </InputContainer>
);

const InputFile: React.FC<InputFileProps> = ({
  name,
  label,
  styleType,
  onChange,
  className,
}) => (
  <InputContainer name={name} label={label}>
    <input
      className={`${
        styleType ?? ''
      } ${className ?? ''}`}
      type="file"
      onChange={(e) => onChange(e.target.files ? e.target.files[0] : null)}
    />
  </InputContainer>
);

const InputNumber: React.FC<InputNumberProps> = ({
  name,
  label,
  value,
  styleType,
  onChange,
  placeholder,
  className,
}) => (
  <InputContainer name={name} label={label}>
    <input
      className={`${
        styleType ?? ''
      } ${className ?? ''}`}
      type="number"
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(Number(e.target.value))}
    />
  </InputContainer>
);

const InputPassword: React.FC<InputPasswordProps> = ({
  name,
  label,
  value,
  styleType,
  onChange,
  placeholder,
  className,
}) => (
  <InputContainer name={name} label={label}>
    <input
      className={`${
        styleType ?? ''
      } ${className ?? ''}`}
      type="password"
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
  </InputContainer>
);

const InputPhone: React.FC<InputPhoneProps> = ({
  name,
  label,
  value,
  styleType,
  onChange,
  placeholder,
  className,
}) => (
  <InputContainer name={name} label={label}>
    <input
      className={`${
        styleType ?? ''
      } ${className ?? ''}`}
      type="tel"
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
  </InputContainer>
);
