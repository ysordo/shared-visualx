import type { HTMLElementType, HTMLInputTypeAttribute, JSX } from 'react';
export declare const typeofInput: readonly ["checkbox", "color", "date", "datetime-local", "email", "file", "hidden", "image", "month", "number", "password", "radio", "range", "search", "tel", "text", "time", "url", "week"];
export type TData = Record<string, unknown>;
export type TSchema = Record<HTMLElementType | HTMLInputTypeAttribute, unknown>;
export type RenderSchema = JSX.Element | null;
export type TStyle = 'futuristic' | 'simple' & undefined;
export type TFChange<T = void> = (e: {
    key: string;
    value: unknown;
}) => T;
//# sourceMappingURL=schemaManager.t.d.ts.map