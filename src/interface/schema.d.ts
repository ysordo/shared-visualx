import { HTMLElementType, HTMLInputTypeAttribute } from "react";

export type ElementType = HTMLElementType | HTMLInputTypeAttribute;
export type ElementObject = {[key: string]: unknown};
export const typeofInput = [
  "button",
  "checkbox",
  "color",
  "date",
  "datetime-local",
  "email",
  "file",
  "hidden",
  "image",
  "month",
  "number",
  "password",
  "radio",
  "range",
  "reset",
  "search",
  "submit",
  "tel",
  "text",
  "time",
  "url",
  "week",
] as const;
interface ISchema {
    value: ElementObject;
    schema: { [key: ElementType]: unknown };
}