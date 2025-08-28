import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { createElement as _createElement } from "react";
import React from 'react';
import { Button, Input, RadioGroup, Select, TextArea } from '../Forms';
import { typeofInput, } from './schemaManager.t';
export class SchemaManager {
    constructor(schema) {
        this.schema = schema;
    }
    Generate({ element, data, onChange, style, key, }) {
        if (!element) {
            return null;
        }
        const [tag, props] = Object.entries(element)[0];
        if (tag === 'button' ||
            props.type === 'button' ||
            props.type === 'submit' ||
            props.type === 'reset' ||
            tag === 'submit' ||
            tag === 'reset') {
            return (_createElement(Button, { ...props, type: props.type ?? tag, key: key, styleType: style }));
        }
        if (tag === 'textarea' || props.type === 'textarea') {
            return (_createElement(TextArea, { ...props, onChange: (_val) => onChange({ key: props.name, value: _val }), value: data[props.name], key: key, styleType: style }));
        }
        if (tag === 'select' || props.type === 'select') {
            return (_createElement(Select, { ...props, onChange: (_val) => onChange({ key: props.name, value: _val }), value: data[props.name], key: key }));
        }
        if (tag === 'input' ||
            typeofInput.includes(tag) ||
            typeofInput.includes(props.type)) {
            if (tag === 'checkbox' || props.type === 'checkbox') {
                return (_createElement(Input, { ...props, onChange: (_val) => onChange({ key: props.name, value: _val }), value: data[props.name], key: key, styleType: style }));
            }
            if (tag === 'radio-group' || props.type === 'radio-group') {
                return (_createElement(RadioGroup, { ...props, onChange: (_val) => onChange({ key: props.name, value: _val }), value: data[props.name], key: key, styleType: style }));
            }
            return (_createElement(Input, { ...props, type: props.type ??
                    tag, onChange: (_val) => onChange({ key: props.name, value: _val }), value: data[props.name], key: key, styleType: style }));
        }
        if (tag === 'radio-group') {
            return (_createElement(RadioGroup, { ...props, onChange: (_val) => onChange({ key: props.name, value: _val }), value: data[props.name], key: key, styleType: style }));
        }
        if (props.children) {
            if (typeof props.children === 'string') {
                return React.createElement(tag, { ...props, key }, props.children);
            }
            return React.createElement(tag, { ...props, children: undefined, key }, props.children.map((child, idx) => (_jsx(this.Generate, { data: data, onChange: onChange, element: child, style: style }, `${idx}`))));
        }
        return React.createElement(tag, {
            ...props,
            key,
        });
    }
}
export class Rendered extends SchemaManager {
    constructor(schema) {
        super(schema);
    }
    Doom({ ...props }) {
        return (_jsx(_Fragment, { children: Object.entries(this.schema).map(([key, value], index) => (_jsx(this.Generate, { element: { [key]: value }, ...props }, `${index}`))) }));
    }
}
//# sourceMappingURL=SchemaManager.js.map