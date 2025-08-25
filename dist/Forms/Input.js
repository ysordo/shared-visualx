import { jsx as _jsx } from "react/jsx-runtime";
import { InputContainer } from './InputContainer';
export const Input = ({ type, styleType = 'simple', ...props }) => {
    switch (type) {
        case 'text':
            return (_jsx(InputText, { ...props, moduleStyle: styleType !== 'simple'
                    ? require(`../styles/${styleType}.module.css`)
                    : null, value: props.value, onChange: props.onChange }));
        case 'date':
            return (_jsx(InputDate, { ...props, moduleStyle: styleType !== 'simple'
                    ? require(`../styles/${styleType}.module.css`)
                    : null, value: props.value, onChange: props.onChange }));
        case 'email':
            return (_jsx(InputEmail, { ...props, moduleStyle: styleType !== 'simple'
                    ? require(`../styles/${styleType}.module.css`)
                    : null, value: props.value, onChange: props.onChange }));
        case 'file':
            return (_jsx(InputFile, { ...props, moduleStyle: styleType !== 'simple'
                    ? require(`../styles/${styleType}.module.css`)
                    : null, onChange: props.onChange }));
        case 'number':
            return (_jsx(InputNumber, { ...props, moduleStyle: styleType !== 'simple'
                    ? require(`../styles/${styleType}.module.css`)
                    : null, value: props.value, onChange: props.onChange }));
        case 'password':
            return (_jsx(InputPassword, { ...props, moduleStyle: styleType !== 'simple'
                    ? require(`../styles/${styleType}.module.css`)
                    : null, value: props.value, onChange: props.onChange }));
        case 'phone':
            return (_jsx(InputPhone, { ...props, moduleStyle: styleType !== 'simple'
                    ? require(`../styles/${styleType}.module.css`)
                    : null, value: props.value, onChange: props.onChange }));
        default:
            return null;
    }
};
const InputText = ({ label, value, moduleStyle, onChange, placeholder, className, }) => (_jsx(InputContainer, { label: label, children: _jsx("input", { className: `${moduleStyle?.st ?? ''} !border !border-[#00F3FF] !rounded-lg ${className ?? ''}`, type: "text", value: value, placeholder: placeholder, onChange: (e) => onChange(e.target.value) }) }));
const InputDate = ({ label, value, moduleStyle, onChange, className, }) => (_jsx(InputContainer, { label: label, children: _jsx("input", { className: `${moduleStyle?.st ?? ''} !border !border-[#00F3FF] !rounded-lg ${className ?? ''}`, type: "date", value: value, onChange: (e) => onChange(e.target.value) }) }));
const InputEmail = ({ label, value, moduleStyle, onChange, placeholder, className, }) => (_jsx(InputContainer, { label: label, children: _jsx("input", { className: `${moduleStyle?.st ?? ''} !border !border-[#00F3FF] !rounded-lg ${className ?? ''}`, type: "email", value: value, placeholder: placeholder, onChange: (e) => onChange(e.target.value) }) }));
const InputFile = ({ label, moduleStyle, onChange, className, }) => (_jsx(InputContainer, { label: label, children: _jsx("input", { className: `${moduleStyle?.st ?? ''} !border !border-[#00F3FF] !rounded-lg ${className ?? ''}`, type: "file", onChange: (e) => onChange(e.target.files ? e.target.files[0] : null) }) }));
const InputNumber = ({ label, value, moduleStyle, onChange, placeholder, className, }) => (_jsx(InputContainer, { label: label, children: _jsx("input", { className: `${moduleStyle?.st ?? ''} !border !border-[#00F3FF] !rounded-lg ${className ?? ''}`, type: "number", value: value, placeholder: placeholder, onChange: (e) => onChange(Number(e.target.value)) }) }));
const InputPassword = ({ label, value, moduleStyle, onChange, placeholder, className, }) => (_jsx(InputContainer, { label: label, children: _jsx("input", { className: `${moduleStyle?.st ?? ''} !border !border-[#00F3FF] !rounded-lg ${className ?? ''}`, type: "password", value: value, placeholder: placeholder, onChange: (e) => onChange(e.target.value) }) }));
const InputPhone = ({ label, value, moduleStyle, onChange, placeholder, className, }) => (_jsx(InputContainer, { label: label, children: _jsx("input", { className: `${moduleStyle?.st ?? ''} !border !border-[#00F3FF] !rounded-lg ${className ?? ''}`, type: "tel", value: value, placeholder: placeholder, onChange: (e) => onChange(e.target.value) }) }));
//# sourceMappingURL=Input.js.map