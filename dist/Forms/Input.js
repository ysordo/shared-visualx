'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { InputContainer } from './InputContainer';
import '../../styles/globals.css';
export const Input = ({ type, styleType, ...props }) => {
    switch (type) {
        case 'text':
            return (_jsx(InputText, { ...props, moduleStyle: styleType, value: props.value, onChange: props.onChange }));
        case 'date':
            return (_jsx(InputDate, { ...props, moduleStyle: styleType, value: props.value, onChange: props.onChange }));
        case 'email':
            return (_jsx(InputEmail, { ...props, moduleStyle: styleType, value: props.value, onChange: props.onChange }));
        case 'file':
            return (_jsx(InputFile, { ...props, moduleStyle: styleType, onChange: props.onChange }));
        case 'number':
            return (_jsx(InputNumber, { ...props, moduleStyle: styleType, value: props.value, onChange: props.onChange }));
        case 'password':
            return (_jsx(InputPassword, { ...props, moduleStyle: styleType, value: props.value, onChange: props.onChange }));
        case 'phone':
            return (_jsx(InputPhone, { ...props, moduleStyle: styleType, value: props.value, onChange: props.onChange }));
        default:
            return null;
    }
};
const InputText = ({ name, label, value, moduleStyle, onChange, placeholder, className, }) => (_jsx(InputContainer, { name: name, label: label, children: _jsx("input", { className: `${moduleStyle ?? ''} !border !border-[#00F3FF] !rounded-lg ${className ?? ''}`, type: "text", value: value, placeholder: placeholder, onChange: (e) => onChange(e.target.value) }) }));
const InputDate = ({ name, label, value, moduleStyle, onChange, className, }) => (_jsx(InputContainer, { name: name, label: label, children: _jsx("input", { className: `${moduleStyle ?? ''} !border !border-[#00F3FF] !rounded-lg ${className ?? ''}`, type: "date", value: value, onChange: (e) => onChange(e.target.value) }) }));
const InputEmail = ({ name, label, value, moduleStyle, onChange, placeholder, className, }) => (_jsx(InputContainer, { name: name, label: label, children: _jsx("input", { className: `${moduleStyle ?? ''} !border !border-[#00F3FF] !rounded-lg ${className ?? ''}`, type: "email", value: value, placeholder: placeholder, onChange: (e) => onChange(e.target.value) }) }));
const InputFile = ({ name, label, moduleStyle, onChange, className, }) => (_jsx(InputContainer, { name: name, label: label, children: _jsx("input", { className: `${moduleStyle ?? ''} !border !border-[#00F3FF] !rounded-lg ${className ?? ''}`, type: "file", onChange: (e) => onChange(e.target.files ? e.target.files[0] : null) }) }));
const InputNumber = ({ name, label, value, moduleStyle, onChange, placeholder, className, }) => (_jsx(InputContainer, { name: name, label: label, children: _jsx("input", { className: `${moduleStyle ?? ''} !border !border-[#00F3FF] !rounded-lg ${className ?? ''}`, type: "number", value: value, placeholder: placeholder, onChange: (e) => onChange(Number(e.target.value)) }) }));
const InputPassword = ({ name, label, value, moduleStyle, onChange, placeholder, className, }) => (_jsx(InputContainer, { name: name, label: label, children: _jsx("input", { className: `${moduleStyle ?? ''} !border !border-[#00F3FF] !rounded-lg ${className ?? ''}`, type: "password", value: value, placeholder: placeholder, onChange: (e) => onChange(e.target.value) }) }));
const InputPhone = ({ name, label, value, moduleStyle, onChange, placeholder, className, }) => (_jsx(InputContainer, { name: name, label: label, children: _jsx("input", { className: `${moduleStyle ?? ''} !border !border-[#00F3FF] !rounded-lg ${className ?? ''}`, type: "tel", value: value, placeholder: placeholder, onChange: (e) => onChange(e.target.value) }) }));
//# sourceMappingURL=Input.js.map