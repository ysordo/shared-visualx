'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { Form } from '../Form';
import { Rendered } from '../../core/SchemaManager';
export class FormRendered extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = (e) => {
            this.setState((prev) => ({ ...prev, [e.key]: e.value }));
        };
        this.state = { ...props.initialization };
        this._render = props.schema ? new Rendered(props.schema) : null;
        this.style = props.style;
    }
    componentDidUpdate(_, prevState) {
        if (JSON.stringify(prevState) !== JSON.stringify(this.state)) {
            this.props.update?.(this.state, {});
        }
    }
    render() {
        if (!this._render) {
            return null;
        }
        return (_jsx(Form, { className: this.props.className, onSubmit: (e) => {
                e.preventDefault();
                this.props.onSubmit?.(this.state, {});
            }, children: _jsx(this._render.Doom, { style: this.style, data: this.state, onChange: this.onChange }) }));
    }
}
//# sourceMappingURL=FormManager.js.map