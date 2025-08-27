import {
  type HTMLElementType,
  type HTMLInputTypeAttribute,
  useState,
  type JSX,
} from 'react';
import { useSchema } from '../core/schema';

/**
 * useForm Hook
 * @param value - Initial form values
 * @param schema - Form schema defining the structure and types of form elements
 * @param styleType - Optional style type for the form elements
 * @returns A tuple containing the rendered form JSX, current form values, and validation errors
 */
export function useForm(
  value: { [key: string]: unknown },
  schema: Record<HTMLElementType | HTMLInputTypeAttribute, unknown>,
  styleType?: 'futuristic' | 'simple'
): [
  React.FC<{
    onSubmit: (
      _val: Record<string, unknown>,
      _err: Record<string, string | null>
    ) => void;
  }>,
  Record<string, unknown>,
  Record<string, string | null>
] {
  const [errors, setErrors] = useState<Record<string, string | null>>({});
  const [values, renderedForm] = useSchema(value, schema, styleType);

  function Form({
    onSubmit,
  }: {
    onSubmit: (
      _val: Record<string, unknown>,
      _err: Record<string, string | null>
    ) => void;
  }) {
    return (
      <form onSubmit={(e) => onSubmit(values, errors)}>{renderedForm}</form>
    );
  }

  return [Form, values, errors];
}
