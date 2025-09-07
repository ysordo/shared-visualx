'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormRendered = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const Form_1 = require("../Form");
const RenderedManager_1 = require("../../core/RenderedManager");
/**
 * A client-side form component that renders and manages form state based on a schema definition.
 *
 * This component bridges the schema definition with the actual form rendering, handling
 * state management, validation, and form submission.
 *
 * @param schema - The schema definition that determines the form structure and validation rules
 * @param initialization - Initial data values for the form fields
 * @param style - Optional styling configuration for form elements
 * @param update - Callback invoked when form data changes, receives current data and errors
 * @param onSubmit - Callback invoked when form is submitted, receives final data and errors
 * @param className - Optional CSS class for styling the form container
 *
 * @example
 * // Basic usage with schema
 * <FormRendered
 *   schema={userSchema}
 *   initialization={{ name: '', email: '' }}
 *   onSubmit={(data, errors) => {
 *     console.log('Form data:', data);
 *   }}
 *   update={(data, errors) => {
 *     console.log('Field updated:', data);
 *   }}
 * />
 *
 * @example
 * // With custom styling
 * <FormRendered
 *   schema={contactSchema}
 *   initialization={{ subject: '', message: '' }}
 *   style={{ input: 'border-2 p-2', label: 'font-bold' }}
 *   className="bg-gray-100 p-4"
 * />
 */
class FormRendered extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.onChange = (e) => {
            this.setState((prev) => ({ ...prev, [e.key]: e.value }));
        };
        this.state = { ...props.initialization };
        this._render = props.schema ? new RenderedManager_1.Rendered(props.schema) : null;
        this.style = props.style;
    }
    componentDidUpdate(_, prevState) {
        if (JSON.stringify(prevState) !== JSON.stringify(this.state)) {
            this.props.update?.(this.state, {});
        }
    }
    render() {
        if (!this._render && !this.props.schema) {
            return null;
        }
        return ((0, jsx_runtime_1.jsx)(Form_1.Form, { className: this.props.className, onSubmit: (e) => {
                e.preventDefault();
                this.props.onSubmit?.(this.state, {});
            }, children: this?._render?.Doom?.({
                data: this.state,
                onChange: this.onChange,
                style: this.style,
            }) || (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}) }));
    }
}
exports.FormRendered = FormRendered;
//# sourceMappingURL=FormManager.js.map