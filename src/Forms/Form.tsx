import type { FormProps } from './core/form';

/**
 * A customizable form component with built-in submission handling.
 *
 * This component wraps the native HTML form element and provides a consistent
 * way to handle form submissions in React applications.
 *
 * @param onSubmit - Callback function invoked when the form is submitted.
 *                   Receives the form event as its only argument.
 * @param className - Optional CSS class to extend the component's styling.
 * @param props - All other props are spread onto the underlying form element.
 *
 * @example
 * // Basic usage
 * <Form onSubmit={(e) => {
 *   e.preventDefault();
 *   console.log('Form submitted');
 * }}>
 *   <input type="text" name="username" />
 *   <button type="submit">Submit</button>
 * </Form>
 *
 * @example
 * // With custom styling
 * <Form
 *   onSubmit={handleSubmit}
 *   className="bg-white p-6 rounded shadow-md"
 * >
 *   {/* form fields *\/}
 * </Form>
 */
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
