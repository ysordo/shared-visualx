import { FormHTMLAttributes, JSX } from "react";

interface FormPropsDom {
  update:(
    _val: Record<string, unknown>,
    _err: Record<string, string | null>
  )=>void;
  onSubmit: (
    _val: Record<string, unknown>,
    _err: Record<string, string | null>
  ) => void;
  className?: string
}
interface FormProps extends FormPropsDom {
    children: JSX.Element;
}
interface IFormRendered {
  doom({onSubmit, ...props}:FormProps): JSX.Element | null;
}