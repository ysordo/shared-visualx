import { useState, useCallback } from 'react';
import type { FormPropsDom } from '../Forms/core/form';
import { FormRendered } from '../Forms/core/FormManager';
import type { TData, TSchema, TStyle } from '../core/schemaManager.t';

/**
 * A custom React hook for managing form state, validation, and rendering.
 *
 * Provides a complete form solution with schema-based rendering, state management,
 * and validation handling. Returns a form component, current values, and error state.
 *
 * @param initialization - Initial values for the form fields
 * @param schema - The schema definition that determines the form structure and field types
 * @param styleType - Optional styling configuration for consistent form element styling
 *
 * @returns A tuple containing:
 *   [0] FormComponent - A ready-to-use form component with built-in state management
 *   [1] values - Current form values as an object
 *   [2] errors - Current validation errors as an object with field names as keys
 *
 * @example
 * // Basic form usage
 * const [FormComponent, values, errors] = useForm(
 *   { username: '', email: '' },
 *   {
 *     username: { type: 'text', name: 'username', label: 'Username' },
 *     email: { type: 'email', name: 'email', label: 'Email' },
 *     submit: { type: 'submit', children: 'Sign Up' }
 *   }
 * );
 *
 * // Render the form
 * <FormComponent onSubmit={(data, errors) => {
 *   console.log('Form data:', data);
 * }} />
 *
 * @example
 * // With custom styling
 * const [StyledForm, values, errors] = useForm(
 *   { search: '' },
 *   {
 *     search: {
 *       type: 'text',
 *       name: 'search',
 *       label: 'Search',
 *       placeholder: 'Enter search term...'
 *     }
 *   },
 *   { input: 'border-2 p-2 rounded-lg', label: 'font-bold' }
 * );
 *
 * @remarks
 * Features:
 * - Automatic form state management with useState
 * - Integrated validation error handling
 * - Schema-based form rendering through FormRendered
 * - Memoized form component for performance optimization
 * - Type-safe form values and errors
 *
 * The hook handles:
 * - Value updates through the form component
 * - Error state propagation
 * - Form submission with current data and errors
 * - Consistent styling across all form elements
 */
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [schema, styleType]
  );

  return [Form, values, errors];
}
