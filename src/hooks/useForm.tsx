import { useState } from 'react';
import type { ISchema } from '../interface/schema';
import { useSchema } from '../core/schema';

export function useForm({ value, schema }: ISchema): UseFormReturn {
  const [errors, setErrors] = useState<Record<string, string | null>>({});
  const [values, renderedForm] = useSchema({
    value,
    schema,
  });
  

  // Renderizado dinámico de los elementos
  const form = <form>{renderedForm}</form>;

  return { form, values, errors };
}
