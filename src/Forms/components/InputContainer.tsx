import type { JSX } from 'react';

/**
 * A container component for form inputs with consistent labeling and layout.
 *
 * Provides a standardized wrapper for form elements with proper label association
 * and spacing. Ensures accessibility by correctly linking labels to input elements.
 *
 * @param label - The text label displayed for the form field
 * @param name - The unique identifier used to associate the label with the input element
 * @param children - The input element(s) to be wrapped and associated with the label
 *
 * @example
 * // Basic usage with an input
 * <InputContainer label="Email Address" name="email">
 *   <input
 *     type="email"
 *     id="email"
 *     name="email"
 *     value={email}
 *     onChange={(e) => setEmail(e.target.value)}
 *   />
 * </InputContainer>
 *
 * @example
 * // Usage with custom component
 * <InputContainer label="User Bio" name="bio">
 *   <TextArea
 *     name="bio"
 *     value={bio}
 *     onChange={setBio}
 *     placeholder="Tell us about yourself"
 *   />
 * </InputContainer>
 *
 * @remarks
 * The component provides:
 * - Consistent vertical spacing with margin-bottom
 * - Proper label-input association for accessibility
 * - Standardized label styling with font-medium and text-sm
 * - Indented content area for visual hierarchy
 */
export const InputContainer: React.FC<{
  icon?: JSX.Element;
  label?: string;
  name: string;
  children: React.ReactNode;
}> = ({ icon, label, name, children }) => (
  <div className="flex flex-col gap-0 mb-4">
    {label && (
      <label className="font-medium text-sm" htmlFor={name}>
        {label}
      </label>
    )}
    <div className="ml-2 flex gap-2 w-full h-full">
      {icon && icon}
      {children}
    </div>
  </div>
);
