"use client";
import { InputContainer } from "./InputContainer";
import "../../styles/globals.css";
import type { InputProps, InputTypes } from "./formComponents";

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
export const Input: React.FC<InputProps> = ({ type, styleType, ...props }) => {
  switch (type) {
    case "text":
      return (
        <InputText
          {...props}
          styleType={styleType}
          value={props.value as string}
          onChange={props.onChange as (value: string) => void}
        />
      );
    case "date":
      return (
        <InputDate
          {...props}
          styleType={styleType}
          value={props.value as string}
          onChange={props.onChange as (value: string) => void}
        />
      );
    case "email":
      return (
        <InputEmail
          {...props}
          styleType={styleType}
          value={props.value as string}
          onChange={props.onChange as (value: string) => void}
        />
      );
    case "file":
      return (
        <InputFile
          {...props}
          styleType={styleType}
          onChange={props.onChange as (file: File | null) => void}
        />
      );
    case "number":
      return (
        <InputNumber
          {...props}
          styleType={styleType}
          value={props.value as number}
          onChange={props.onChange as (value: number) => void}
        />
      );
    case "password":
      return (
        <InputPassword
          {...props}
          styleType={styleType}
          value={props.value as string}
          onChange={props.onChange as (value: string) => void}
        />
      );
    case "phone":
      return (
        <InputPhone
          {...props}
          styleType={styleType}
          value={props.value as string}
          onChange={props.onChange as (value: string) => void}
        />
      );
    case "checkbox":
      return (
        <Checkbox
          {...props}
          styleType={styleType}
          checked={props.value as boolean}
          onChange={props.onChange as (value: boolean) => void}
        />
      );
    default:
      return null;
  }
};

/**
 * Individual Input Components
 * Each component handles a specific input type and its associated props
 * @param props - Props specific to the input type
 * @returns A styled input element
 */
const InputText: React.FC<InputTypes.InputTextProps> = ({
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
      id={name}
      className={`${styleType ?? ""} ${className ?? ""}`}
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
  </InputContainer>
);

/**
 * Date Input Component
 * @param props - Props specific to the date input
 * @returns A styled date input element
 */
const InputDate: React.FC<InputTypes.InputDateProps> = ({
  name,
  label,
  value,
  styleType,
  onChange,
  className,
}) => (
  <InputContainer name={name} label={label}>
    <input
      id={name}
      className={`${styleType ?? ""} ${className ?? ""}`}
      type="date"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </InputContainer>
);

/**
 * Email Input Component
 * @param props - Props specific to the email input
 * @returns A styled email input element
 */
const InputEmail: React.FC<InputTypes.InputEmailProps> = ({
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
      id={name}
      className={`${styleType ?? ""} ${className ?? ""}`}
      type="email"
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
  </InputContainer>
);

/**
 * File Input Component
 * @param props - Props specific to the file input
 * @returns A styled file input element
 */
const InputFile: React.FC<InputTypes.InputFileProps> = ({
  name,
  label,
  styleType,
  onChange,
  className,
}) => (
  <InputContainer name={name} label={label}>
    <input
      id={name}
      className={`${styleType ?? ""} ${className ?? ""}`}
      type="file"
      onChange={(e) => onChange(e.target.files ? e.target.files[0] : null)}
    />
  </InputContainer>
);

/**
 * Number Input Component
 * @param props - Props specific to the number input
 * @returns A styled number input element
 */
const InputNumber: React.FC<InputTypes.InputNumberProps> = ({
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
      id={name}
      className={`${styleType ?? ""} ${className ?? ""}`}
      type="number"
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(Number(e.target.value))}
    />
  </InputContainer>
);

/**
 * Password Input Component
 * @param props - Props specific to the password input
 * @returns A styled password input element
 */
const InputPassword: React.FC<InputTypes.InputPasswordProps> = ({
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
      id={name}
      className={`${styleType ?? ""} ${className ?? ""}`}
      type="password"
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
  </InputContainer>
);

/**
 * Phone Input Component
 * @param props - Props specific to the phone input
 * @returns A styled phone input element
 */
const InputPhone: React.FC<InputTypes.InputPhoneProps> = ({
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
      id={name}
      className={`${styleType ?? ""} ${className ?? ""}`}
      type="tel"
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
  </InputContainer>
);

/**
 * Checkbox Component
 * @param name - The name of the checkbox input
 * @param label - The label to display next to the checkbox
 * @param checked - Boolean indicating if the checkbox is checked
 * @param styleType - Optional style type for the checkbox
 * @param className - Optional additional class names for the checkbox
 * @param onChange - Function to call when the checkbox state changes
 * @returns A styled checkbox input with a label
 */
const Checkbox: React.FC<InputTypes.CheckboxProps> = ({
  name,
  label,
  checked,
  styleType,
  className,
  onChange,
}) => (
  <label htmlFor={name} className={`${styleType} ${className}`}>
    <input
      id={name}
      type="checkbox"
      checked={checked}
      onChange={() => onChange(!checked)}
    />
    {label}
  </label>
);
