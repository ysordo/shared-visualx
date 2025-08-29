import { Form } from '../Form';
import { Rendered } from '../../core/SchemaManager';
import type { TData, TSchema, TStyle } from '../../core/schemaManager.t';
import type { FormPropsDom, IFormRendered } from './form';
import React from 'react';

export class FormRendered
  extends React.Component<
    FormPropsDom & {
      schema: TSchema;
      initialization: TData;
      style?: TStyle;
    }
  >
  implements IFormRendered
{
  private _render: Rendered | null = null;
  private style?: TStyle;
  state: TData = {};

  constructor(
    props: FormPropsDom & {
      schema: TSchema;
      initialization: TData;
      style?: TStyle;
    }
  ) {
    super(props);
    const { initialization, schema, style } = props;
    this.state = initialization || {};
    this._render = schema ? new Rendered(schema) : null;
    this.style = style;
  }

  private onChange(e: { key: string; value: unknown }): void {
    this.setState((prev) => ({ ...prev, [e.key]: e.value }));
  }

  public doom({ onSubmit, ...props }: Omit<FormPropsDom, 'update'>) {
    return (
      this._render && (
        <Form onSubmit={onSubmit} {...props}>
          <this._render.Doom
            style={this.style}
            data={this.state}
            onChange={({ key, value }) => {
              this.onChange({ key, value });
            }}
          />
        </Form>
      )
    );
  }
  componentDidUpdate(_: any, prevState: TData) {
    if (prevState !== this.state) {
      this.props.update(this.state, {});
    }
  }
  render() {
    if(!this.props.schema){return null;}
    return this.doom({ ...this.props });
  }
}
