'use client';
import { jsx as _jsx } from "react/jsx-runtime";
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
export const Input = ({ type, styleType, ...props }) => {
    switch (type) {
        case 'text':
            return (_jsx(InputText, { ...props, styleType: styleType, value: props.value, onChange: props.onChange }));
        case 'date':
            return (_jsx(InputDate, { ...props, styleType: styleType, value: props.value, onChange: props.onChange }));
        case 'email':
            return (_jsx(InputEmail, { ...props, styleType: styleType, value: props.value, onChange: props.onChange }));
        case 'file':
            return (_jsx(InputFile, { ...props, styleType: styleType, onChange: props.onChange }));
        case 'number':
            return (_jsx(InputNumber, { ...props, styleType: styleType, value: props.value, onChange: props.onChange }));
        case 'password':
            return (_jsx(InputPassword, { ...props, styleType: styleType, value: props.value, onChange: props.onChange }));
        case 'phone':
            return (_jsx(InputPhone, { ...props, styleType: styleType, value: props.value, onChange: props.onChange }));
        default:
            return null;
    }
};
const InputText = ({ name, label, value, styleType, onChange, placeholder, className, }) => (_jsx(InputContainer, { name: name, label: label, children: _jsx("input", { className: `${styleType ?? ''} !border !border-[#00F3FF] !rounded-lg ${className ?? ''}`, type: "text", value: value, placeholder: placeholder, onChange: (e) => onChange(e.target.value) }) }));
const InputDate = ({ name, label, value, styleType, onChange, className, }) => (_jsx(InputContainer, { name: name, label: label, children: _jsx("input", { className: `${styleType ?? ''} !border !border-[#00F3FF] !rounded-lg ${className ?? ''}`, type: "date", value: value, onChange: (e) => onChange(e.target.value) }) }));
const InputEmail = ({ name, label, value, styleType, onChange, placeholder, className, }) => (_jsx(InputContainer, { name: name, label: label, children: _jsx("input", { className: `${styleType ?? ''} !border !border-[#00F3FF] !rounded-lg ${className ?? ''}`, type: "email", value: value, placeholder: placeholder, onChange: (e) => onChange(e.target.value) }) }));
const InputFile = ({ name, label, styleType, onChange, className, }) => (_jsx(InputContainer, { name: name, label: label, children: _jsx("input", { className: `${styleType ?? ''} !border !border-[#00F3FF] !rounded-lg ${className ?? ''}`, type: "file", onChange: (e) => onChange(e.target.files ? e.target.files[0] : null) }) }));
const InputNumber = ({ name, label, value, styleType, onChange, placeholder, className, }) => (_jsx(InputContainer, { name: name, label: label, children: _jsx("input", { className: `${styleType ?? ''} !border !border-[#00F3FF] !rounded-lg ${className ?? ''}`, type: "number", value: value, placeholder: placeholder, onChange: (e) => onChange(Number(e.target.value)) }) }));
const InputPassword = ({ name, label, value, styleType, onChange, placeholder, className, }) => (_jsx(InputContainer, { name: name, label: label, children: _jsx("input", { className: `${styleType ?? ''} !border !border-[#00F3FF] !rounded-lg ${className ?? ''}`, type: "password", value: value, placeholder: placeholder, onChange: (e) => onChange(e.target.value) }) }));
const InputPhone = ({ name, label, value, styleType, onChange, placeholder, className, }) => (_jsx(InputContainer, { name: name, label: label, children: _jsx("input", { className: `${styleType ?? ''} !border !border-[#00F3FF] !rounded-lg ${className ?? ''}`, type: "tel", value: value, placeholder: placeholder, onChange: (e) => onChange(e.target.value) }) }));
//# sourceMappingURL=Input.js.map