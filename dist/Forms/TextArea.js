import { jsx as _jsx } from "react/jsx-runtime";
import { InputContainer } from './InputContainer';
import '../../styles/globals.css';
export const TextArea = ({ name, label, value, onChange, placeholder, styleType }) => (_jsx(InputContainer, { name: name, label: label, children: _jsx("textarea", { value: value, placeholder: placeholder, onChange: (e) => onChange(e.target.value), className: `${styleType}` }) }));
//# sourceMappingURL=TextArea.js.map