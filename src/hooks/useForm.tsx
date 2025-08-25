import {
  type HTMLElementType,
  type HTMLInputTypeAttribute,
  useState,
  type JSX,
} from 'react';
import { useSchema } from '../core/schema';

export function useForm(
  value: { [key: string]: unknown },
  schema: Record<HTMLElementType | HTMLInputTypeAttribute, unknown>
): [JSX.Element, Record<string, unknown>, Record<string, string | null>] {
  const [errors, setErrors] = useState<Record<string, string | null>>({});
  const [values, renderedForm] = useSchema(
    value,
    schema,
  );

  // Renderizado dinámico de los elementos
  const form = <form>{renderedForm}</form>;

  return [form, values, errors];
}
