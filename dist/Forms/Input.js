import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const Input = (props) => {
    switch (props.type) {
        case 'text':
            return (_jsx(InputText, { label: props.label, value: props.value, onChange: props.onChange, placeholder: props.placeholder }));
        case 'date':
            return (_jsx(InputDate, { label: props.label, value: props.value, onChange: props.onChange }));
        case 'email':
            return (_jsx(InputEmail, { label: props.label, value: props.value, onChange: props.onChange, placeholder: props.placeholder }));
        case 'file':
            return (_jsx(InputFile, { label: props.label, onChange: props.onChange }));
        case 'number':
            return (_jsx(InputNumber, { label: props.label, value: props.value, onChange: props.onChange, placeholder: props.placeholder }));
        case 'password':
            return (_jsx(InputPassword, { label: props.label, value: props.value, onChange: props.onChange, placeholder: props.placeholder }));
        case 'phone':
            return (_jsx(InputPhone, { label: props.label, value: props.value, onChange: props.onChange, placeholder: props.placeholder }));
        default:
            return null;
    }
};
const InputText = ({ label, value, onChange, placeholder, }) => (_jsxs("div", { children: [_jsx("label", { children: label }), _jsx("input", { type: "text", value: value, placeholder: placeholder, onChange: (e) => onChange(e.target.value) })] }));
const InputDate = ({ label, value, onChange }) => (_jsxs("div", { children: [_jsx("label", { children: label }), _jsx("input", { type: "date", value: value, onChange: (e) => onChange(e.target.value) })] }));
const InputEmail = ({ label, value, onChange, placeholder, }) => (_jsxs("div", { children: [_jsx("label", { children: label }), _jsx("input", { type: "email", value: value, placeholder: placeholder, onChange: (e) => onChange(e.target.value) })] }));
const InputFile = ({ label, onChange }) => (_jsxs("div", { children: [_jsx("label", { children: label }), _jsx("input", { type: "file", onChange: (e) => onChange(e.target.files ? e.target.files[0] : null) })] }));
const InputNumber = ({ label, value, onChange, placeholder, }) => (_jsxs("div", { children: [_jsx("label", { children: label }), _jsx("input", { type: "number", value: value, placeholder: placeholder, onChange: (e) => onChange(Number(e.target.value)) })] }));
const InputPassword = ({ label, value, onChange, placeholder, }) => (_jsxs("div", { children: [_jsx("label", { children: label }), _jsx("input", { type: "password", value: value, placeholder: placeholder, onChange: (e) => onChange(e.target.value) })] }));
const InputPhone = ({ label, value, onChange, placeholder, }) => (_jsxs("div", { children: [_jsx("label", { children: label }), _jsx("input", { type: "tel", value: value, placeholder: placeholder, onChange: (e) => onChange(e.target.value) })] }));
//# sourceMappingURL=Input.js.map