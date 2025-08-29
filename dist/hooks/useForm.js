import { jsx as _jsx } from "react/jsx-runtime";
import { useState, useCallback } from 'react';
import { FormRendered } from '../Forms/core/FormManager';
export function useForm(initialization, schema, styleType) {
    const [values, setValues] = useState({ ...initialization });
    const [errors, setErrors] = useState({});
    const Form = useCallback(({ onSubmit, ...props }) => (_jsx(FormRendered, { initialization: initialization, schema: schema, style: styleType, update: (val, err) => {
            setValues(val);
            setErrors(err);
        }, onSubmit: onSubmit, ...props })), [values, schema, styleType]);
    return [Form, values, errors];
}
//# sourceMappingURL=useForm.js.map