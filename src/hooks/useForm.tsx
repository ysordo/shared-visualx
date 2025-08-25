import { useState, type JSX } from 'react';
import type { ElementObject, ISchema } from '../interface/schema';
import { useSchema } from '../core/schema';

export function useForm({ value, schema }: ISchema): [JSX.Element, ElementObject, Record<string, string | null>] {
  const [errors, setErrors] = useState<Record<string, string | null>>({});
  const [values, renderedForm] = useSchema({
    value,
    schema,
  });
  

  // Renderizado dinámico de los elementos
  const form = <form>{renderedForm}</form>;

  return  [form, values, errors];
}
