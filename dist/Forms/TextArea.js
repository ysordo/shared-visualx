import { jsx as _jsx } from "react/jsx-runtime";
import { InputContainer } from './InputContainer';
export const TextArea = ({ name, label, value, onChange, placeholder, }) => (_jsx(InputContainer, { name: name, label: label, children: _jsx("textarea", { value: value, placeholder: placeholder, onChange: (e) => onChange(e.target.value) }) }));
//# sourceMappingURL=TextArea.js.map