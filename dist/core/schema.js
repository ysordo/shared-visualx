import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { createElement as _createElement } from "react";
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
];
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
    if (tag === 'textarea' || props.type === 'textarea') {
        return (_createElement(TextArea, { ...props, onChange: (_val) => onChange(props.name, _val), value: value[props.name], key: key }));
    }
    if (tag === 'select' || props.type === 'select') {
        return (_createElement(Select, { ...props, onChange: (_val) => onChange(props.name, _val), value: value[props.name], key: key }));
    }
    if (tag === 'input' ||
        typeofInput.includes(tag) ||
        typeofInput.includes(props.type)) {
        if (tag === 'checkbox' || props.type === 'checkbox') {
            return (_createElement(Checkbox, { ...props, onChange: (_val) => onChange(props.name, _val), value: value[props.name], key: key }));
        }
        if (tag === 'button' ||
            props.type === 'button' ||
            props.type === 'submit' ||
            props.type === 'reset' ||
            tag === 'submit' ||
            tag === 'reset') {
            return _createElement(Button, { ...props, key: key });
        }
        return (_createElement(Input, { ...props, type: props.type ??
                tag, onChange: (_val) => onChange(props.name, _val), value: value[props.name], key: key }));
    }
    if (tag === 'radio-group') {
        return (_createElement(RadioGroup, { ...props, onChange: (_val) => onChange(props.name, _val), value: value[props.name], key: key }));
    }
    return React.createElement(tag, {
        ...props,
        key,
    });
}
export function useSchema(value, schema) {
    const [values, setValues] = useState(value);
    const handleChange = (name, value) => {
        setValues((prev) => ({ ...prev, [name]: value }));
    };
    return [values, _jsx(_Fragment, { children: renderElement(values, schema, handleChange) })];
}
//# sourceMappingURL=schema.js.map