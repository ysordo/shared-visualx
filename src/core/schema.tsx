import type { ChangeEvent, JSX } from 'react';
import type { ElementObject, ISchema } from '../interface/schema';
import React, { useState } from 'react';

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
  return React.createElement(tag, {
    ...props,
    ...(tag === 'input'
      ? {
          value: value[props.name],
          onChange: ({ target }: ChangeEvent<HTMLInputElement>) => {
            console.log(target.value, target.name);
            onChange(target.name, target.value);
          },
        }
      : {}),
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
