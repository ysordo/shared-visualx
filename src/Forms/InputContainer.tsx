export const InputContainer: React.FC<{
  label: string;
  name: string;
  children: React.ReactNode;
}> = ({ label, name, children }) => (
  <div className="flex flex-col gap-0 mb-4">
    <label className="font-medium text-sm" htmlFor={name}>{label}</label>
    <div className="ml-2">{children}</div>
  </div>
);
