import { jsx as _jsx } from "react/jsx-runtime";
import { useState, } from 'react';
import { useSchema } from '../core/schema';
export function useForm(value, schema) {
    const [errors, setErrors] = useState({});
    const [values, renderedForm] = useSchema(value, schema);
    // Renderizado dinámico de los elementos
    const form = _jsx("form", { children: renderedForm });
    return [form, values, errors];
}
//# sourceMappingURL=useForm.js.map