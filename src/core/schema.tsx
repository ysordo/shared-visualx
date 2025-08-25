import type { ChangeEvent, JSX } from 'react';
import {
  typeofInput,
  type ElementObject,
  type ISchema,
} from '../interface/schema';
import React, { useState } from 'react';
import { Input } from '../Forms/Input';
import { TextArea } from '../Forms/TextArea';
import { Select } from '../Forms/Select';
import { Checkbox } from '../Forms/Checkbox';
import { RadioGroup } from '../Forms/RadioGroup';
import { Button } from '../Forms/Button';

function renderElement(
  value: ElementObject,
  element: unknown,
  onChange: (name: string, value: any) => void = () => {},
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
        renderElement(value, child, onChange, `${idx}`)
      )
    );
  }

  if (tag === 'input' || typeofInput.includes(tag as never)) {
    if (tag === 'textarea') {
      return (
        <TextArea
          {...props}
          onChange={(_val) => onChange(props.name, _val)}
          value={value[props.name]}
          key={key}
        />
      );
    }
    if (tag === 'select') {
      return (
        <Select
          {...props}
          onChange={(_val) => onChange(props.name, _val)}
          value={value[props.name]}
          key={key}
        />
      );
    }
    if (tag === 'checkbox') {
      return (
        <Checkbox
          {...props}
          onChange={(_val) => onChange(props.name, _val)}
          value={value[props.name]}
          key={key}
        />
      );
    }
    if(tag === 'button') {
      return <Button {...props} key={key} />;
    }
    return (
      <Input
        {...props}
        onChange={(_val) => onChange(props.name, _val)}
        value={value[props.name]}
        key={key}
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
      />
    );
  }

  return React.createElement(tag, {
    ...props,
    key,
  });
}

export function useSchema({
  value,
  schema,
}: ISchema): [ElementObject, JSX.Element] {
  const [values, setValues] = useState(value);
  const handleChange = (name: string, value: any) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  return [values, <>{renderElement(values, schema, handleChange)}</>];
}
