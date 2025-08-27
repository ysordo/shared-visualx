import { jsx as _jsx } from "react/jsx-runtime";
import { useState, } from 'react';
import { useSchema } from '../core/schema';
/**
 * useForm Hook
 * @param value - Initial form values
 * @param schema - Form schema defining the structure and types of form elements
 * @param styleType - Optional style type for the form elements
 * @returns A tuple containing the rendered form JSX, current form values, and validation errors
 */
export function useForm(value, schema, styleType) {
    const [errors, setErrors] = useState({});
    const [values, renderedForm] = useSchema(value, schema, styleType);
    function Form({ onSubmit, }) {
        return (_jsx("form", { onSubmit: (e) => onSubmit(values, errors), children: renderedForm }));
    }
    return [Form, values, errors];
}
//# sourceMappingURL=useForm.js.map