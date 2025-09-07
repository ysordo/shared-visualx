import React from 'react';
import '../../../styles/forms.style.css';
import type { InputTypes } from './formComponents';

/**
 * A radio button group component for single selection from multiple options.
 *
 * Renders a group of radio buttons with labels in a vertical layout by default.
 * Provides consistent styling and accessibility features for radio inputs.
 *
 * @param options - Array of radio option objects with value and label properties
 * @param value - The currently selected value (controlled component pattern)
 * @param styleType - Optional CSS class name(s) to customize radio button styling
 * @param className - Optional additional CSS class name(s) for the container
 * @param onChange - Callback function invoked when a radio option is selected
 *
 * @example
 * // Basic usage with options
 * <RadioGroup
 *   options={[
 *     { value: 'option1', label: 'Option One' },
 *     { value: 'option2', label: 'Option Two' },
 *     { value: 'option3', label: 'Option Three' }
 *   ]}
 *   value={selectedOption}
 *   onChange={(value) => setSelectedOption(value)}
 * />
 *
 * @example
 * // With custom styling
 * <RadioGroup
 *   options={paymentOptions}
 *   value={paymentMethod}
 *   onChange={handlePaymentChange}
 *   styleType="p-3 border rounded-lg hover:bg-gray-50"
 *   className="space-y-3"
 * />
 *
 * @remarks
 * The component uses flexbox for layout with a column direction and gap spacing.
 * Each radio button is wrapped in a label element for better accessibility.
 */
export const RadioGroup: React.FC<InputTypes.RadioGroupProps> = ({
  options,
  value,
  styleType,
  className = '',
  onChange,
}) => (
  <div className="flex flex-col gap-2">
    {options.map((opt) => (
      <label
        key={opt.value}
        htmlFor={opt.value}
        className={`${styleType} ${className}`}>
        <input
          type="radio"
          name={opt.value}
          id={opt.value}
          value={opt.value}
          checked={value === opt.value}
          onChange={() => onChange(opt.value)}
        />
        {opt.label}
      </label>
    ))}
  </div>
);
