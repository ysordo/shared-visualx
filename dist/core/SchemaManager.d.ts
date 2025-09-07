import { type RenderSchema, type TSchema } from './schemaManager.t';
/**
 * A schema-driven form generator that dynamically renders UI components based on JSON schema definitions.
 *
 * This system transforms declarative schema configurations into fully functional React form components
 * with built-in state management and validation support.
 *
 * @class SchemaManager
 * @param schema - The JSON schema definition that describes the form structure and field properties
 *
 * @example
 * // Basic schema definition
 * const formSchema = {
 *   username: { type: 'text', name: 'username', label: 'Username' },
 *   email: { type: 'email', name: 'email', label: 'Email Address' },
 *   submit: { type: 'submit', children: 'Create Account' }
 * };
 *
 * const schemaManager = new SchemaManager(formSchema);
 *
 * @example
 * // Using the rendered form
 * <Rendered
 *   schema={formSchema}
 *   data={formData}
 *   onChange={(update) => handleFieldChange(update)}
 *   style="custom-styling-class"
 * />
 *
 * @remarks
 * Supported element types:
 * - Input fields: text, email, password, number, tel, date, file, checkbox
 * - Buttons: button, submit, reset
 * - Select dropdowns
 * - Textareas
 * - Radio groups
 * - Custom HTML elements with children
 *
 * The system automatically handles:
 * - Component rendering based on schema type
 * - Value propagation and change events
 * - Consistent styling through styleType propagation
 * - Key management for React rendering optimization
 */
export declare class SchemaManager {
    protected schema: TSchema;
    constructor(schema: TSchema);
    protected Generate({ element, data, onChange, style, key, }: ISchemaGenerate): RenderSchema;
}
//# sourceMappingURL=SchemaManager.d.ts.map