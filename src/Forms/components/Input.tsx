'use client';
import '../../../styles/forms.style.css';
import type { InputProps } from './formComponents';
import { InputText } from './I/Text';
import { InputDate } from './I/Date';
import { InputEmail } from './I/Email';
import { InputFile } from './I/File';
import { InputNumber } from './I/Number';
import { InputPassword } from './I/Password';
import { InputPhone } from './I/Phone';
import { Checkbox } from './I/Checkbox';

/**
 * A polymorphic input component that renders different input types based on the specified type.
 *
 * Acts as a factory component that delegates to specialized input components
 * while maintaining a consistent API. Handles type-specific value conversions
 * and callback signatures.
 *
 * @param type - The input type to render (text, date, email, file, number, password, phone, checkbox)
 * @param styleType - Optional CSS class name(s) for custom styling of the input element
 * @param props - Additional props passed to the underlying input component
 *
 * @example
 * // Text input
 * <Input
 *   type="text"
 *   name="username"
 *   label="Username"
 *   value={username}
 *   onChange={(value) => setUsername(value)}
 *   styleType="futuristic"
 * />
 *
 * @example
 * // Checkbox input
 * <Input
 *   type="checkbox"
 *   name="agreeToTerms"
 *   label="I agree to the terms"
 *   checked={agreed}
 *   onChange={(value) => setAgreed(value)}
 * />
 *
 * @example
 * // File input
 * <Input
 *   type="file"
 *   name="avatar"
 *   label="Profile picture"
 *   onChange={(file) => setAvatar(file)}
 *   accept="image/*"
 * />
 *
 * @remarks
 * The component handles type-specific value conversions:
 * - String-based inputs: text, email, password, phone, date
 * - Number input: numeric values
 * - File input: File objects or null
 * - Checkbox: boolean values
 *
 * Each input type delegates to a specialized component with proper TypeScript typing.
 */
export const Input: React.FC<InputProps> = ({ type, styleType, ...props }) => {
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
    case 'checkbox':
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
