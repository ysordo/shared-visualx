import {
  type HTMLElementType,
  type HTMLInputTypeAttribute,
  useState,
} from 'react';
import type { FormPropsDom } from '../Forms/core/form';
import { FormRendered } from '../Forms/core/FormManager';
import type { TData, TStyle } from '../core/schemaManager.t';

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
export function useForm(
  initialization: { [key: string]: unknown },
  schema: Record<HTMLElementType | HTMLInputTypeAttribute, unknown>,
  styleType?: TStyle
): [
  React.FC<FormPropsDom>,
  Record<string, unknown>,
  Record<string, string | null>
] {
  const [errors, setErrors] = useState<Record<string, string | null>>({});
  const [values, setValues] = useState<TData>(initialization);

  function Form({ onSubmit, ...props }: Omit<FormPropsDom, 'update'>) {
    return (
      <FormRendered
        initialization={initialization}
        schema={schema}
        update={(value, error) => {
          setValues(value);
          setErrors(error);
        }}
        onSubmit={(val, err) => {
          onSubmit(val, err);
        }}
        style={styleType}
        {...props}
      />
    );
  }

  return [Form, values, errors];
}
