import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import React, { useState } from 'react';
function renderElement(value, element, onChange = () => { }, key) {
    if (!element) {
        return null;
    }
    const [tag, props] = Object.entries(element)[0];
    if (props.children) {
        if (typeof props.children === 'string') {
            return React.createElement(tag, { ...props, key }, props.children);
        }
        return React.createElement(tag, { ...props, children: undefined, key }, props.children.map((child, idx) => renderElement(value, child, onChange, `${idx}`)));
    }
    return React.createElement(tag, {
        ...props,
        ...(tag === 'input'
            ? {
                value: value[props.name],
                onChange: ({ target }) => {
                    console.log(target.value, target.name);
                    onChange(target.name, target.value);
                },
            }
            : {}),
        key,
    });
}
export function useSchema({ value, schema, }) {
    const [values, setValues] = useState(value);
    const handleChange = (name, value) => {
        setValues((prev) => ({ ...prev, [name]: value }));
    };
    return [values, _jsx(_Fragment, { children: renderElement(values, schema, handleChange) })];
}
//# sourceMappingURL=schema.js.map