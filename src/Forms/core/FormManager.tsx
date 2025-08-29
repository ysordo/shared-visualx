'use client';
import React from 'react';
import { Form } from '../Form';
import { Rendered } from '../../core/SchemaManager';
import type { TData, TSchema, TStyle } from '../../core/schemaManager.t';
import type { FormPropsDom } from './form';

export class FormRendered extends React.Component<
  FormPropsDom & { schema: TSchema; initialization: TData; style?: TStyle }
> {
  private _render: Rendered | null;
  private style?: TStyle;
  state: TData;

  constructor(
    props: FormPropsDom & {
      schema: TSchema;
      initialization: TData;
      style?: TStyle;
    }
  ) {
    super(props);
    this.state = { ...props.initialization };
    this._render = props.schema ? new Rendered(props.schema) : null;
    this.style = props.style;
  }

  private onChange = (e: { key: string; value: unknown }) => {
    this.setState((prev) => ({ ...prev, [e.key]: e.value }));
  };

  componentDidUpdate(_: any, prevState: TData) {
    if (JSON.stringify(prevState) !== JSON.stringify(this.state)) {
      this.props.update?.(this.state, {});
    }
  }

  render() {
    if (!this._render && !this.props.schema) {
      return null;
    }

    return (
      <Form
        className={this.props.className}
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          this.props.onSubmit?.(this.state, {});
        }}>
        {this?._render?.Doom?.({
          data: this.state,
          onChange: this.onChange,
          style: this.style,
        }) || <></>}
      </Form>
    );
  }
}
