import React from 'react';
import '../`styles/globals.css';
import type { ButtonProps } from './formComponents';

/**
 * Button Component
 * @param label - The text to display on the button
 * @param onClick - Function to call when the button is clicked
 * @param type - The button type (button, submit, reset)
 * @param styleType - Optional style type for the button
 * @returns A styled button element
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
  styleType,
  className,
}) => (
  <button type={type} onClick={onClick} className={`${styleType} ${className}`}>
    {children}
  </button>
);
