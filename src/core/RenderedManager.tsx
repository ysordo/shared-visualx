import { SchemaManager } from './SchemaManager';
import type { RenderSchema, TSchema } from './schemaManager.t';

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
export class Rendered extends SchemaManager implements IDoomRendered {
  constructor(schema: TSchema) {
    super(schema);
  }

  public Doom({ ...props }: IRendered): RenderSchema {
    return (
      <>
        {Object.entries(this.schema).map(
          ([key, value]: [string, unknown], index: number) =>
            this?.Generate?.({
              key: `${index}`,
              element: { [key]: value },
              ...props,
            })
        )}
      </>
    );
  }
}
