import { jsx as _jsx } from "react/jsx-runtime";
export const Form = ({ onSubmit, className, ...props }) => {
    const handleSubmit = (e) => {
        onSubmit?.(e);
    };
    return (_jsx("form", { onSubmit: handleSubmit, className: `flex flex-col gap-4 p-4 ${className ?? ''}`, ...props }));
};
//# sourceMappingURL=Form.js.map