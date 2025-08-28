/**
 * Input Container Component
 * @param label - The label to display for the input
 * @param name - The name of the input
 * @param children - The input element to be wrapped
 * @returns A styled container with a label and input element
 */
export const InputContainer: React.FC<{
  label: string;
  name: string;
  children: React.ReactNode;
}> = ({ label, name, children }) => (
  <div className="flex flex-col gap-0 mb-4">
    <label className="font-medium text-sm" htmlFor={name}>
      {label}
    </label>
    <div className="ml-2">{children}</div>
  </div>
);
