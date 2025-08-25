import React from 'react';

interface InputProps {
  type: 'text' | 'date' | 'email' | 'file' | 'number' | 'password' | 'phone';
  name: string;
  label: string;
  value?: string | number;
  onChange?: (value: string | number | File | null) => void;
  placeholder?: string;
}

export const Input: React.FC<InputProps> = (props) => {
  switch (props.type) {
    case 'text':
      return (
        <InputText
          label={props.label}
          value={props.value as string}
          onChange={props.onChange as (value: string) => void}
          placeholder={props.placeholder}
        />
      );
    case 'date':
      return (
        <InputDate
          label={props.label}
          value={props.value as string}
          onChange={props.onChange as (value: string) => void}
        />
      );
    case 'email':
      return (
        <InputEmail
          label={props.label}
          value={props.value as string}
          onChange={props.onChange as (value: string) => void}
          placeholder={props.placeholder}
        />
      );
    case 'file':
      return (
        <InputFile
          label={props.label}
          onChange={props.onChange as (file: File | null) => void}
        />
      );
    case 'number':
      return (
        <InputNumber
          label={props.label}
          value={props.value as number}
          onChange={props.onChange as (value: number) => void}
          placeholder={props.placeholder}
        />
      );
    case 'password':
      return (
        <InputPassword
          label={props.label}
          value={props.value as string}
          onChange={props.onChange as (value: string) => void}
          placeholder={props.placeholder}
        />
      );
    case 'phone':
      return (
        <InputPhone
          label={props.label}
          value={props.value as string}
          onChange={props.onChange as (value: string) => void}
          placeholder={props.placeholder}
        />
      );
    default:
      return null;
  }
};

interface InputTextProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const InputText: React.FC<InputTextProps> = ({
  label,
  value,
  onChange,
  placeholder,
}) => (
  <div>
    <label>{label}</label>
    <input
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);

interface InputDateProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const InputDate: React.FC<InputDateProps> = ({ label, value, onChange }) => (
  <div>
    <label>{label}</label>
    <input
      type="date"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);

interface InputEmailProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const InputEmail: React.FC<InputEmailProps> = ({
  label,
  value,
  onChange,
  placeholder,
}) => (
  <InputContainer label={label}>
    <input
      type="email"
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
  </InputContainer>
);

interface InputFileProps {
  label: string;
  onChange: (file: File | null) => void;
}

const InputFile: React.FC<InputFileProps> = ({ label, onChange }) => (
  <InputContainer label={label}>
    <input
      type="file"
      onChange={(e) => onChange(e.target.files ? e.target.files[0] : null)}
    />
  </InputContainer>
);

interface InputNumberProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  placeholder?: string;
}

const InputNumber: React.FC<InputNumberProps> = ({
  label,
  value,
  onChange,
  placeholder,
}) => (
  <InputContainer label={label}>
    <input
      type="number"
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(Number(e.target.value))}
    />
  </InputContainer>
);

interface InputPasswordProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const InputPassword: React.FC<InputPasswordProps> = ({
  label,
  value,
  onChange,
  placeholder,
}) => (
  <InputContainer label={label}>
    <input
      type="password"
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
  </InputContainer>
);

interface InputPhoneProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const InputPhone: React.FC<InputPhoneProps> = ({
  label,
  value,
  onChange,
  placeholder,
}) => (
  <InputContainer label={label}>
    <input
      type="tel"
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
  </InputContainer>
);

const InputContainer: React.FC<{
  label: string;
  children: React.ReactNode;
}> = ({ label, children }) => (
  <div className="flex flex-col gap-0 mb-4">
    <label className="font-medium text-sm">{label}</label>
    <div className="ml-2">{children}</div>
  </div>
);
