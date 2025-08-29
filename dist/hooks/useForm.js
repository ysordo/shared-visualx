import { jsx as _jsx } from "react/jsx-runtime";
import { useState, useCallback } from 'react';
import { FormRendered } from '../Forms/core/FormManager';
export function useForm(initialization, schema, styleType) {
    const [errors, setErrors] = useState({});
    const [values, setValues] = useState({ ...initialization });
    const Form = useCallback(({ onSubmit, ...props }) => (_jsx(FormRendered, { initialization: initialization, schema: schema, update: (value, error) => {
            setValues(value);
            setErrors(error);
        }, onSubmit: onSubmit, style: styleType, ...props })), [initialization, schema, styleType]);
    return [Form, values, errors];
}
//# sourceMappingURL=useForm.js.map