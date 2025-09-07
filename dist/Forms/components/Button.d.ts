import React from 'react';
import '../../../styles/forms.style.css';
import type { ButtonProps } from './formComponents';
/**
 * A versatile button component with customizable styling and behavior.
 *
 * Renders a button element with support for different types (button, submit, reset)
 * and flexible styling options. Suitable for various interactive actions throughout
 * the application.
 *
 * @param children - The content to be displayed inside the button (text, icons, etc.)
 * @param onClick - Callback function invoked when the button is clicked
 * @param type - The button type: 'button', 'submit', or 'reset' (default: 'button')
 * @param styleType - Optional CSS class name(s) for custom styling of the button
 * @param className - Optional additional CSS class name(s) for the button element
 *
 * @example
 * // Basic button
 * <Button onClick={() => console.log('Clicked')}>
 *   Click Me
 * </Button>
 *
 * @example
 * // Submit button with custom styling
 * <Button
 *   type="submit"
 *   styleType="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
 *   className="font-bold"
 * >
 *   Save Changes
 * </Button>
 *
 * @example
 * // Button with icon and text
 * <Button
 *   onClick={handleDownload}
 *   styleType="futuristic"
 * >
 *   <DownloadIcon size={16} />
 *   Download File
 * </Button>
 *
 * @remarks
 * The component:
 * - Supports all three HTML button types (button, submit, reset)
 * - Accepts any valid React node as children for flexible content
 * - Provides both styleType and className props for styling flexibility
 * - Follows HTML5 button semantics and accessibility standards
 * - Can be easily extended with additional props as needed
 */
export declare const Button: React.FC<ButtonProps>;
//# sourceMappingURL=Button.d.ts.map