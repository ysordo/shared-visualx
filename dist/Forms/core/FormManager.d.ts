import type { TData, TSchema, TStyle } from '../../core/schemaManager.t';
import type { FormPropsDom, IFormRendered } from './form';
import React from 'react';
export declare class FormRendered extends React.Component<FormPropsDom & {
    schema: TSchema;
    initialization: TData;
    style?: TStyle;
}> implements IFormRendered {
    private _render;
    private style?;
    state: TData;
    constructor(props: FormPropsDom & {
        schema: TSchema;
        initialization: TData;
        style?: TStyle;
    });
    private onChange;
    doom({ onSubmit, update, ...props }: FormPropsDom): import("react/jsx-runtime").JSX.Element | null;
    render(): import("react/jsx-runtime").JSX.Element | null;
}
//# sourceMappingURL=FormManager.d.ts.map