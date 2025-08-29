import type { HTMLInputTypeAttribute } from 'react';
import React from 'react';
import { Button, Input, RadioGroup, Select, TextArea } from '../Forms';
import {
  typeofInput,
  type RenderSchema,
  type TSchema,
} from './schemaManager.t';

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
        (props.children as unknown[]).map((child, idx) => (
          <this.Generate
            data={data}
            onChange={onChange}
            key={`${idx}`}
            element={child}
            style={style}
          />
        ))
      );
    }
    return React.createElement(tag, {
      ...props,
      key,
    });
  }
}

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
