import type { FormProps } from './core/form';

export const Form: React.FC<
  Omit<FormProps, 'update' | 'onSubmit'> & {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  }
> = ({ onSubmit, className, ...props }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    onSubmit?.(e);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className={`flex flex-col gap-4 p-4 ${className ?? ''}`}
      {...props}
    />
  );
};
