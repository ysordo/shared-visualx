import type { HTMLInputTypeAttribute } from 'react';
import React from 'react';
import { Button, Input, RadioGroup, Select, TextArea } from '../Forms';
import {
  typeofInput,
  type RenderSchema,
  type TSchema,
} from './schemaManager.t';

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
export class SchemaManager {
  constructor(protected schema: TSchema) {}

  protected Generate({
    element,
    data,
    onChange,
    style,
    key,
  }: ISchemaGenerate): RenderSchema {
    if (!element) {
      return null;
    }

    const [tag, props] = Object.entries(element as Record<string, any>)[0];

    if (
      tag === 'button' ||
      props.type === 'button' ||
      props.type === 'submit' ||
      props.type === 'reset' ||
      tag === 'submit' ||
      tag === 'reset'
    ) {
      return (
        <Button
          {...props}
          type={props.type ?? tag}
          key={key}
          styleType={style}
        />
      );
    }

    if (tag === 'textarea' || props.type === 'textarea') {
      return (
        <TextArea
          {...props}
          onChange={(_val) => onChange({ key: props.name, value: _val })}
          value={data[props.name]}
          key={key}
          styleType={style}
        />
      );
    }
    if (tag === 'select' || props.type === 'select') {
      return (
        <Select
          {...props}
          onChange={(_val) => onChange({ key: props.name, value: _val })}
          value={data[props.name]}
          key={key}
        />
      );
    }
    if (
      tag === 'input' ||
      typeofInput.includes(tag as never) ||
      typeofInput.includes(props.type as never)
    ) {
      if (tag === 'checkbox' || props.type === 'checkbox') {
        return (
          <Input
            {...props}
            onChange={(_val) => onChange({ key: props.name, value: _val })}
            value={data[props.name]}
            key={key}
            styleType={style}
          />
        );
      }
      if (tag === 'radio-group' || props.type === 'radio-group') {
        return (
          <RadioGroup
            {...props}
            onChange={(_val) => onChange({ key: props.name, value: _val })}
            value={data[props.name]}
            key={key}
            styleType={style}
          />
        );
      }
      return (
        <Input
          {...props}
          type={
            (props.type as HTMLInputTypeAttribute) ??
            (tag as HTMLInputTypeAttribute)
          }
          onChange={(_val) => onChange({ key: props.name, value: _val })}
          value={data[props.name]}
          key={key}
          styleType={style}
        />
      );
    }
    if (tag === 'radio-group') {
      return (
        <RadioGroup
          {...props}
          onChange={(_val) => onChange({ key: props.name, value: _val })}
          value={data[props.name]}
          key={key}
          styleType={style}
        />
      );
    }

    if (props.children) {
      if (typeof props.children === 'string') {
        return React.createElement(tag, { ...props, key }, props.children);
      }

      return React.createElement(
        tag,
        { ...props, children: undefined, key },
        (props.children as unknown[]).map((child, idx) =>
          this.Generate({
            data,
            onChange,
            key: `${idx}`,
            element: child,
            style,
          })
        )
      );
    }
    return React.createElement(tag, {
      ...props,
      key,
    });
  }
}
