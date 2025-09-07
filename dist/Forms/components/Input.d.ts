import '../../../styles/forms.style.css';
import type { InputProps } from './formComponents';
/**
 * A polymorphic input component that renders different input types based on the specified type.
 *
 * Acts as a factory component that delegates to specialized input components
 * while maintaining a consistent API. Handles type-specific value conversions
 * and callback signatures.
 *
 * @param type - The input type to render (text, date, email, file, number, password, phone, checkbox)
 * @param styleType - Optional CSS class name(s) for custom styling of the input element
 * @param props - Additional props passed to the underlying input component
 *
 * @example
 * // Text input
 * <Input
 *   type="text"
 *   name="username"
 *   label="Username"
 *   value={username}
 *   onChange={(value) => setUsername(value)}
 *   styleType="futuristic"
 * />
 *
 * @example
 * // Checkbox input
 * <Input
 *   type="checkbox"
 *   name="agreeToTerms"
 *   label="I agree to the terms"
 *   checked={agreed}
 *   onChange={(value) => setAgreed(value)}
 * />
 *
 * @example
 * // File input
 * <Input
 *   type="file"
 *   name="avatar"
 *   label="Profile picture"
 *   onChange={(file) => setAvatar(file)}
 *   accept="image/*"
 * />
 *
 * @remarks
 * The component handles type-specific value conversions:
 * - String-based inputs: text, email, password, phone, date
 * - Number input: numeric values
 * - File input: File objects or null
 * - Checkbox: boolean values
 *
 * Each input type delegates to a specialized component with proper TypeScript typing.
 */
export declare const Input: React.FC<InputProps>;
//# sourceMappingURL=Input.d.ts.map