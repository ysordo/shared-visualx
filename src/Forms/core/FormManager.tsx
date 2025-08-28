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
    const { initialization, schema, style } = props;
    super(props);
    this.setState(initialization);
    this._render = new Rendered(schema);
    this.style = style;
  }

  private onChange(e: { key: string; value: unknown }): void {
    this.setState((prev) => ({ ...prev, [e.key]: e.value }));
  }

  public doom({ onSubmit, update, ...props }: FormPropsDom) {
    return (
      this._render && (
        <Form
          onSubmit={onSubmit}
          update={() => update(this.state, {})}
          {...props}>
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
  render() {
    return this.doom({ ...this.props });
  }
}
