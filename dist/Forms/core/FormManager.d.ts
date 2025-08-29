import React from 'react';
import type { TData, TSchema, TStyle } from '../../core/schemaManager.t';
import type { FormPropsDom } from './form';
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