import { HTMLElementType, HTMLInputTypeAttribute } from "react";

export type ElementType = HTMLElementType | HTMLInputTypeAttribute;
export type ElementObject = {[key: string]: unknown};
interface ISchema {
    value: ElementObject;
    schema: { [key: ElementType]: unknown };
}