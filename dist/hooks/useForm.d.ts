import { type HTMLElementType, type HTMLInputTypeAttribute } from 'react';
/**
 * useForm Hook
 * @param value - Initial form values
 * @param schema - Form schema defining the structure and types of form elements
 * @param styleType - Optional style type for the form elements
 * @returns A tuple containing the rendered form JSX, current form values, and validation errors
 */
export declare function useForm(value: {
    [key: string]: unknown;
}, schema: Record<HTMLElementType | HTMLInputTypeAttribute, unknown>, styleType?: 'futuristic' | 'simple'): [
    React.FC<{
        onSubmit: (_val: Record<string, unknown>, _err: Record<string, string | null>) => void;
    }>,
    Record<string, unknown>,
    Record<string, string | null>
];
//# sourceMappingURL=useForm.d.ts.map