import { jsx as _jsx } from "react/jsx-runtime";
import { Form } from '../Form';
import { Rendered } from '../../core/SchemaManager';
import React from 'react';
export class FormRendered extends React.Component {
    constructor(props) {
        super(props);
        this._render = null;
        this.state = {};
        const { initialization, schema, style } = props;
        this.state = initialization || {};
        this._render = schema ? new Rendered(schema) : null;
        this.style = style;
    }
    onChange(e) {
        this.setState((prev) => ({ ...prev, [e.key]: e.value }));
    }
    doom({ onSubmit, ...props }) {
        return this._render ? (_jsx(Form, { onSubmit: (e) => {
                e.preventDefault();
                onSubmit(this.state, {});
            }, ...props, children: _jsx(this._render.Doom, { style: this.style, data: this.state, onChange: ({ key, value }) => this.onChange({ key, value }) }) })) : null;
    }
    componentDidUpdate(_, prevState) {
        if (JSON.stringify(prevState) !== JSON.stringify(this.state)) {
            this.props.update(this.state, {});
        }
    }
    render() {
        if (!this.props.schema) {
            return null;
        }
        return this.doom({ ...this.props });
    }
}
//# sourceMappingURL=FormManager.js.map