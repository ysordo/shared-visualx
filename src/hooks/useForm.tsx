import { useState, useCallback } from 'react';
import type { FormPropsDom } from '../Forms/core/form';
import { FormRendered } from '../Forms/core/FormManager';
import type { TData, TSchema, TStyle } from '../core/schemaManager.t';

export function useForm(
  initialization: TData,
  schema: TSchema,
  styleType?: TStyle
): [
  React.FC<Omit<FormPropsDom, 'update'>>,
  TData,
  Record<string, string | null>
] {
  const [values, setValues] = useState<TData>({ ...initialization });
  const [errors, setErrors] = useState<Record<string, string | null>>({});

  const Form: React.FC<Omit<FormPropsDom, 'update'>> = useCallback(
    ({ onSubmit, ...props }) => (
      <FormRendered
        initialization={values}
        schema={schema}
        style={styleType}
        update={(val, err) => {
          setValues(val);
          setErrors(err);
        }}
        onSubmit={onSubmit}
        {...props}
      />
    ),
    [values, schema, styleType]
  );

  return [Form, values, errors];
}
