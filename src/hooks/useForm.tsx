import { type HTMLElementType, type HTMLInputTypeAttribute, useState, useCallback } from 'react';
import type { FormPropsDom } from '../Forms/core/form';
import { FormRendered } from '../Forms/core/FormManager';
import type { TData, TStyle, TSchema } from '../core/schemaManager.t';

export function useForm(
  initialization: TData,
  schema: TSchema,
  styleType?: TStyle
): [
  React.FC<Omit<FormPropsDom, 'update'>>,
  TData,
  Record<string, string | null>
] {
  const [errors, setErrors] = useState<Record<string, string | null>>({});
  const [values, setValues] = useState<TData>({ ...initialization });

  const Form: React.FC<Omit<FormPropsDom, 'update'>> = useCallback(
    ({ onSubmit, ...props }) => (
      <FormRendered
        initialization={initialization}
        schema={schema}
        update={(value, error) => {
          setValues(value);
          setErrors(error);
        }}
        onSubmit={onSubmit}
        style={styleType}
        {...props}
      />
    ),
    [initialization, schema, styleType]
  );

  return [Form, values, errors];
}
