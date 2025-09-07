import React from 'react';
import type { TData, TSchema, TStyle } from '../../core/schemaManager.t';
import type { FormPropsDom } from './form';
/**
 * A client-side form component that renders and manages form state based on a schema definition.
 *
 * This component bridges the schema definition with the actual form rendering, handling
 * state management, validation, and form submission.
 *
 * @param schema - The schema definition that determines the form structure and validation rules
 * @param initialization - Initial data values for the form fields
 * @param style - Optional styling configuration for form elements
 * @param update - Callback invoked when form data changes, receives current data and errors
 * @param onSubmit - Callback invoked when form is submitted, receives final data and errors
 * @param className - Optional CSS class for styling the form container
 *
 * @example
 * // Basic usage with schema
 * <FormRendered
 *   schema={userSchema}
 *   initialization={{ name: '', email: '' }}
 *   onSubmit={(data, errors) => {
 *     console.log('Form data:', data);
 *   }}
 *   update={(data, errors) => {
 *     console.log('Field updated:', data);
 *   }}
 * />
 *
 * @example
 * // With custom styling
 * <FormRendered
 *   schema={contactSchema}
 *   initialization={{ subject: '', message: '' }}
 *   style={{ input: 'border-2 p-2', label: 'font-bold' }}
 *   className="bg-gray-100 p-4"
 * />
 */
export declare class FormRendered extends React.Component<FormPropsDom & {
    schema: TSchema;
    initialization: TData;
    style?: TStyle;
}> {
    private _render;
    private style?;
    state: TData;
    constructor(props: FormPropsDom & {
        schema: TSchema;
        initialization: TData;
        style?: TStyle;
    });
    private onChange;
    componentDidUpdate(_: any, prevState: TData): void;
    render(): import("react/jsx-runtime").JSX.Element | null;
}
//# sourceMappingURL=FormManager.d.ts.map