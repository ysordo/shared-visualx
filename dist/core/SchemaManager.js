"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchemaManager = void 0;
const react_1 = require("react");
const react_2 = __importDefault(require("react"));
const Forms_1 = require("../Forms");
const schemaManager_t_1 = require("./schemaManager.t");
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
class SchemaManager {
    constructor(schema) {
        this.schema = schema;
    }
    Generate({ element, data, onChange, style, key, }) {
        if (!element) {
            return null;
        }
        const [tag, props] = Object.entries(element)[0];
        if (tag === 'button' ||
            props.type === 'button' ||
            props.type === 'submit' ||
            props.type === 'reset' ||
            tag === 'submit' ||
            tag === 'reset') {
            return ((0, react_1.createElement)(Forms_1.Button, { ...props, type: props.type ?? tag, key: key, styleType: style }));
        }
        if (tag === 'textarea' || props.type === 'textarea') {
            return ((0, react_1.createElement)(Forms_1.TextArea, { ...props, onChange: (_val) => onChange({ key: props.name, value: _val }), value: data[props.name], key: key, styleType: style }));
        }
        if (tag === 'select' || props.type === 'select') {
            return ((0, react_1.createElement)(Forms_1.Select, { ...props, onChange: (_val) => onChange({ key: props.name, value: _val }), value: data[props.name], key: key }));
        }
        if (tag === 'input' ||
            schemaManager_t_1.typeofInput.includes(tag) ||
            schemaManager_t_1.typeofInput.includes(props.type)) {
            if (tag === 'checkbox' || props.type === 'checkbox') {
                return ((0, react_1.createElement)(Forms_1.Input, { ...props, onChange: (_val) => onChange({ key: props.name, value: _val }), value: data[props.name], key: key, styleType: style }));
            }
            if (tag === 'radio-group' || props.type === 'radio-group') {
                return ((0, react_1.createElement)(Forms_1.RadioGroup, { ...props, onChange: (_val) => onChange({ key: props.name, value: _val }), value: data[props.name], key: key, styleType: style }));
            }
            return ((0, react_1.createElement)(Forms_1.Input, { ...props, type: props.type ??
                    tag, onChange: (_val) => onChange({ key: props.name, value: _val }), value: data[props.name], key: key, styleType: style }));
        }
        if (tag === 'radio-group') {
            return ((0, react_1.createElement)(Forms_1.RadioGroup, { ...props, onChange: (_val) => onChange({ key: props.name, value: _val }), value: data[props.name], key: key, styleType: style }));
        }
        if (props.children) {
            if (typeof props.children === 'string') {
                return react_2.default.createElement(tag, { ...props, key }, props.children);
            }
            return react_2.default.createElement(tag, { ...props, children: undefined, key }, props.children.map((child, idx) => this.Generate({
                data,
                onChange,
                key: `${idx}`,
                element: child,
                style,
            })));
        }
        return react_2.default.createElement(tag, {
            ...props,
            key,
        });
    }
}
exports.SchemaManager = SchemaManager;
//# sourceMappingURL=SchemaManager.js.map