export const InputContainer: React.FC<{
  label: string;
  children: React.ReactNode;
}> = ({ label, children }) => (
  <div className="flex flex-col gap-0 mb-4">
    <label className="font-medium text-sm">{label}</label>
    <div className="ml-2">{children}</div>
  </div>
);
