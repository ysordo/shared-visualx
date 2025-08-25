import React from 'react';
import { InputContainer } from './InputContainer';

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

export const Input: React.FC<InputProps> = (props) => {
  const { type, ...then } = props;
  switch (type) {
    case 'text':
      return (
        <InputText
          {...then}
          moduleStyle={require(`../styles/${props.styleType ?? 'simple'}.module.css`)?? null}
          value={props.value as string}
          onChange={props.onChange as (value: string) => void}
        />
      );
    case 'date':
      return (
        <InputDate
          {...then}
          moduleStyle={require(`../styles/${props.styleType ?? 'simple'}.module.css`)?? null}
          value={props.value as string}
          onChange={props.onChange as (value: string) => void}
        />
      );
    case 'email':
      return (
        <InputEmail
          {...then}
          moduleStyle={require(`../styles/${props.styleType ?? 'simple'}.module.css`)?? null}
          value={props.value as string}
          onChange={props.onChange as (value: string) => void}
        />
      );
    case 'file':
      return (
        <InputFile
          {...then}
          moduleStyle={require(`../styles/${props.styleType ?? 'simple'}.module.css`)?? null}
          onChange={props.onChange as (file: File | null) => void}
        />
      );
    case 'number':
      return (
        <InputNumber
          {...then}
          moduleStyle={require(`../styles/${props.styleType ?? 'simple'}.module.css`)?? null}
          value={props.value as number}
          onChange={props.onChange as (value: number) => void}
        />
      );
    case 'password':
      return (
        <InputPassword
          {...then}
          moduleStyle={require(`../styles/${props.styleType ?? 'simple'}.module.css`)?? null}
          value={props.value as string}
          onChange={props.onChange as (value: string) => void}
        />
      );
    case 'phone':
      return (
        <InputPhone
          {...then}
          moduleStyle={require(`../styles/${props.styleType ?? 'simple'}.module.css`)?? null}
          value={props.value as string}
          onChange={props.onChange as (value: string) => void}
        />
      );
    default:
      return null;
  }
};

interface InputTextProps {
  className?: string;
  moduleStyle: {
    readonly [key: string]: string;
  } | null;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const InputText: React.FC<InputTextProps> = ({
  label,
  value,
  moduleStyle,
  onChange,
  placeholder,
  className,
}) => (
  <InputContainer label={label}>
    <input
      className={`${moduleStyle?.st ?? ''} !border !border-[#00F3FF] !rounded-lg ${className ?? ''}`}
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
  </InputContainer>
);

interface InputDateProps {
  className?: string;
  moduleStyle: {
    readonly [key: string]: string;
  } | null;
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const InputDate: React.FC<InputDateProps> = ({
  label,
  value,
  moduleStyle,
  onChange,
  className,
}) => (
  <InputContainer label={label}>
    <input
      className={`${moduleStyle?.st ?? ''} !border !border-[#00F3FF] !rounded-lg ${className ?? ''}`}
      type="date"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </InputContainer>
);

interface InputEmailProps {
  className?: string;
  moduleStyle: {
    readonly [key: string]: string;
  } | null;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const InputEmail: React.FC<InputEmailProps> = ({
  label,
  value,
  moduleStyle,
  onChange,
  placeholder,
  className,
}) => (
  <InputContainer label={label}>
    <input
      className={`${moduleStyle?.st ?? ''} !border !border-[#00F3FF] !rounded-lg ${className ?? ''}`}
      type="email"
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
  </InputContainer>
);

interface InputFileProps {
  className?: string;
  moduleStyle: {
    readonly [key: string]: string;
  } | null;
  label: string;
  onChange: (file: File | null) => void;
}

const InputFile: React.FC<InputFileProps> = ({
  label,
  moduleStyle,
  onChange,
  className,
}) => (
  <InputContainer label={label}>
    <input
      className={`${moduleStyle?.st ?? ''} !border !border-[#00F3FF] !rounded-lg ${className ?? ''}`}
      type="file"
      onChange={(e) => onChange(e.target.files ? e.target.files[0] : null)}
    />
  </InputContainer>
);

interface InputNumberProps {
  className?: string;
  moduleStyle: {
    readonly [key: string]: string;
  } | null;
  label: string;
  value: number;
  onChange: (value: number) => void;
  placeholder?: string;
}

const InputNumber: React.FC<InputNumberProps> = ({
  label,
  value,
  moduleStyle,
  onChange,
  placeholder,
  className,
}) => (
  <InputContainer label={label}>
    <input
      className={`${moduleStyle?.st ?? ''} !border !border-[#00F3FF] !rounded-lg ${className ?? ''}`}
      type="number"
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(Number(e.target.value))}
    />
  </InputContainer>
);

interface InputPasswordProps {
  className?: string;
  moduleStyle: {
    readonly [key: string]: string;
  } | null;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const InputPassword: React.FC<InputPasswordProps> = ({
  label,
  value,
  moduleStyle,
  onChange,
  placeholder,
  className,
}) => (
  <InputContainer label={label}>
    <input
      className={`${moduleStyle?.st ?? ''} !border !border-[#00F3FF] !rounded-lg ${className ?? ''}`}
      type="password"
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
  </InputContainer>
);

interface InputPhoneProps {
  className?: string;
  moduleStyle: {
    readonly [key: string]: string;
  } | null;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const InputPhone: React.FC<InputPhoneProps> = ({
  label,
  value,
  moduleStyle,
  onChange,
  placeholder,
  className,
}) => (
  <InputContainer label={label}>
    <input
      className={`${moduleStyle?.st ?? ''} !border !border-[#00F3FF] !rounded-lg ${className ?? ''}`}
      type="tel"
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
  </InputContainer>
);
