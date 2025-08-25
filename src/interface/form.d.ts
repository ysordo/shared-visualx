interface UseFormReturn {
  form: JSX.Element;
  values: Record<string, any>;
  errors: Record<string, string | null>;
  //isValid: boolean;
  //handleChange: (name: string, value: any) => void;
}