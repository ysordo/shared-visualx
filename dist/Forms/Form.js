import { jsx as _jsx } from "react/jsx-runtime";
export const Form = ({ onSubmit, className, ...props }) => {
    return (_jsx("form", { onSubmit: () => onSubmit, className: `flex flex-col gap-4 p-4 ${className ?? ''}`, ...props }));
};
//# sourceMappingURL=Form.js.map