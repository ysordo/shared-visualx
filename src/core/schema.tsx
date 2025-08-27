import type { HTMLElementType, HTMLInputTypeAttribute, JSX } from 'react';
import React, { useState } from 'react';
import { Input } from '../Forms/Input';
import { TextArea } from '../Forms/TextArea';
import { Select } from '../Forms/Select';
import { Checkbox } from '../Forms/Checkbox';
import { RadioGroup } from '../Forms/RadioGroup';
import { Button } from '../Forms/Button';

const typeofInput = [
  'button',
  'checkbox',
  'color',
  'date',
  'datetime-local',
  'email',
  'file',
  'hidden',
  'image',
  'month',
  'number',
  'password',
  'radio',
  'range',
  'reset',
  'search',
  'submit',
  'tel',
  'text',
  'time',
  'url',
  'week',
] as const;

function renderElement(
  value: Record<string, unknown>,
  element: unknown,
  onChange: (name: string, value: unknown) => void = () => {},
  styleType?: string,
  key?: string
): JSX.Element | null {
  if (!element) {
    return null;
  }

  const [tag, props] = Object.entries(element as Record<string, any>)[0];

  if (props.children) {
    if (typeof props.children === 'string') {
      return React.createElement(tag, { ...props, key }, props.children);
    }

    return React.createElement(
      tag,
      { ...props, children: undefined, key },
      (props.children as unknown[]).map((child, idx) =>
        renderElement(value, child, onChange, styleType, `${idx}`)
      )
    );
  }

  if (tag === 'textarea' || props.type === 'textarea') {
    return (
      <TextArea
        {...props}
        onChange={(_val) => onChange(props.name, _val)}
        value={value[props.name]}
        key={key}
        styleType={styleType}
      />
    );
  }
  if (tag === 'select' || props.type === 'select') {
    return (
      <Select
        {...props}
        onChange={(_val) => onChange(props.name, _val)}
        value={value[props.name]}
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
        <Checkbox
          {...props}
          onChange={(_val) => onChange(props.name, _val)}
          value={value[props.name]}
          key={key}
          styleType={styleType}
        />
      );
    }
    if (tag === 'radio-group' || props.type === 'radio-group') {
      return (
        <RadioGroup
          {...props}
          onChange={(_val) => onChange(props.name, _val)}
          value={value[props.name]}
          key={key}
          styleType={styleType}
        />
      );
    }
    if (
      tag === 'button' ||
      props.type === 'button' ||
      props.type === 'submit' ||
      props.type === 'reset' ||
      tag === 'submit' ||
      tag === 'reset'
    ) {
      return <Button {...props} key={key} styleType={styleType} />;
    }
    return (
      <Input
        {...props}
        type={
          (props.type as HTMLInputTypeAttribute) ??
          (tag as HTMLInputTypeAttribute)
        }
        onChange={(_val) => onChange(props.name, _val)}
        value={value[props.name]}
        key={key}
        styleType={styleType}
      />
    );
  }
  if (tag === 'radio-group') {
    return (
      <RadioGroup
        {...props}
        onChange={(_val) => onChange(props.name, _val)}
        value={value[props.name]}
        key={key}
        styleType={styleType}
      />
    );
  }

  return React.createElement(tag, {
    ...props,
    key,
  });
}

export function useSchema(
  value: { [key: string]: unknown },
  schema: Record<HTMLElementType | HTMLInputTypeAttribute, unknown>,
  styleType?: string
): [Record<string, unknown>, JSX.Element] {
  const [values, setValues] = useState(value);
  const handleChange = (name: string, value: unknown) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  return [
    values,
    <>
      {Object.entries(schema).map(([[key, value]], index) =>
        renderElement(
          values,
          { [key]: value },
          handleChange,
          styleType,
          String(index)
        )
      )}
    </>,
  ];
}
