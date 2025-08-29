import type { FormPropsDom } from '../Forms/core/form';
import type { TData, TSchema, TStyle } from '../core/schemaManager.t';
export declare function useForm(initialization: TData, schema: TSchema, styleType?: TStyle): [
    React.FC<Omit<FormPropsDom, 'update'>>,
    TData,
    Record<string, string | null>
];
//# sourceMappingURL=useForm.d.ts.map