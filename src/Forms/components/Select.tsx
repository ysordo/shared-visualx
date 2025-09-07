import React from 'react';
import { InputContainer } from './InputContainer';
import '../../../styles/forms.style.css';
import type { InputTypes } from './formComponents';

/**
 * A customizable select dropdown component with label support.
 *
 * Renders a styled select input with options and integrates with InputContainer
 * for consistent form layout and accessibility features.
 *
 * @param name - The unique identifier used for the select element's name and id attributes
 * @param label - The text label displayed for the select dropdown
 * @param options - Array of option objects to populate the dropdown menu
 * @param value - The currently selected value (controlled component pattern)
 * @param onChange - Callback function invoked when selection changes
 * @param styleType - Optional CSS class name(s) to customize the select and option styling
 *
 * @example
 * // Basic usage with options
 * <Select
 *   name="country"
 *   label="Select Country"
 *   value={selectedCountry}
 *   onChange={(value) => setSelectedCountry(value)}
 *   options={[
 *     { value: 'us', text: 'United States' },
 *     { value: 'ca', text: 'Canada' },
 *     { value: 'uk', text: 'United Kingdom' }
 *   ]}
 * />
 *
 * @example
 * // With custom styling
 * <Select
 *   name="category"
 *   label="Product Category"
 *   value={category}
 *   onChange={handleCategoryChange}
 *   options={categories}
 *   styleType="border-2 p-2 rounded-md bg-white shadow-sm"
 * />
 */
export const Select: React.FC<InputTypes.SelectProps> = ({
  name,
  label,
  options,
  value,
  onChange,
  styleType,
}) => (
  <InputContainer name={name} label={label}>
    <select
      id={name}
      name={name}
      value={value}
      className={`${styleType}`}
      onChange={(e) => onChange(e.target.value)}>
      {options.map((opt) => (
        <option className={`${styleType}`} key={opt.value} value={opt.value}>
          {opt.text}
        </option>
      ))}
    </select>
  </InputContainer>
);
