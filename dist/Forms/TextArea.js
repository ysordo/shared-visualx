import { jsx as _jsx } from "react/jsx-runtime";
import { InputContainer } from './InputContainer';
export const TextArea = ({ label, value, onChange, placeholder, }) => (_jsx(InputContainer, { label: label, children: _jsx("textarea", { value: value, placeholder: placeholder, onChange: (e) => onChange(e.target.value) }) }));
//# sourceMappingURL=TextArea.js.map