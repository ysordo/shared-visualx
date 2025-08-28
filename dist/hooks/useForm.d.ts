import { type HTMLElementType, type HTMLInputTypeAttribute } from 'react';
import type { FormPropsDom } from '../Forms/core/form';
import type { TStyle } from '../core/schemaManager.t';
/**
 * useForm Hook
 * @param value - Initial form values
 * @param schema - Form schema defining the structure and types of form elements
 * @param styleType - Optional style type for the form elements ('futuristic' | 'simple')
 * @returns A tuple containing the rendered form JSX, current form values, and validation errors
 * @example
 * const [Form, values, errors] = useForm(
 *   { username: '', password: '' },
 *   {text: { name: 'username', label: 'Username' }, password: { name: 'password', label: 'Password' }, submit: { children: 'Submit' }},
 *   'futuristic'
 * );
 * return <Form onSubmit={(vals, errs) => console.log(vals, errs)} />;
 * @example schema
 * {
 *   div: { children: [
 *      { text: { name: 'username', label: 'Username' } },
 *      { password: { name: 'password', label: 'Password' } },
 *      { checkbox: { name: 'rememberMe', label: 'Remember Me', checked: false } },
 *   ] },
 *   submit: { children: 'Submit' }
 * }
 * @example value
 * { username: '', password: '', rememberMe: false }
 */
export declare function useForm(initialization: {
    [key: string]: unknown;
}, schema: Record<HTMLElementType | HTMLInputTypeAttribute, unknown>, styleType?: TStyle): [
    React.FC<FormPropsDom>,
    Record<string, unknown>,
    Record<string, string | null>
];
//# sourceMappingURL=useForm.d.ts.map