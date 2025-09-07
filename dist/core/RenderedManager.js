"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rendered = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const SchemaManager_1 = require("./SchemaManager");
/**
 * @class Rendered
 * @extends SchemaManager
 *
 * The rendering engine that processes the schema and generates the complete form UI.
 * Transforms schema entries into React components with proper data binding and event handling.
 *
 * @method Doom - Main rendering method that converts schema to React components
 * @param data - Current form data values for controlled components
 * @param onChange - Callback function for field value changes
 * @param style - Optional CSS class name for consistent styling across components
 *
 * @example
 * // Programmatic form rendering
 * const rendered = new Rendered(formSchema);
 *
 * const formUI = rendered.Doom({
 *   data: currentFormData,
 *   onChange: handleFieldUpdate,
 *   style: 'uniform-styling'
 * });
 */
class Rendered extends SchemaManager_1.SchemaManager {
    constructor(schema) {
        super(schema);
    }
    Doom({ ...props }) {
        return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: Object.entries(this.schema).map(([key, value], index) => this?.Generate?.({
                key: `${index}`,
                element: { [key]: value },
                ...props,
            })) }));
    }
}
exports.Rendered = Rendered;
//# sourceMappingURL=RenderedManager.js.map