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
    doom({ onSubmit, ...props }: Omit<FormPropsDom, 'update'>): import("react/jsx-runtime").JSX.Element | null;
    componentDidUpdate(_: any, prevState: TData): void;
    render(): import("react/jsx-runtime").JSX.Element | null;
}
//# sourceMappingURL=FormManager.d.ts.map