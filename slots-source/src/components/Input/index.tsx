import React, { ChangeEvent } from 'react';
import style from './input.module.css';
import classnames from 'classnames';

export interface InputProps {
    value: string;
    name: string;
    readonly: boolean;
    highlighted: boolean;
    description?: string;
    onChange?: (name: string, value: string) => void;
}

export default class Input extends React.Component<InputProps> {
  static defaultProps: Partial<InputProps> = {
      value: '',
      name: '',
      readonly: false,
      highlighted: false,
      onChange: () => {}
  };

  constructor(props: InputProps) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onChange(event: ChangeEvent<HTMLInputElement>)
  {
    const value= event.target.value;

    if (!this.props.readonly && this.props.onChange) {
      this.setState({value}, () => this.props.onChange!(this.props.name, value));
    }
  }

  render() {
    const {description, name, highlighted, readonly } = this.props;

    return (
      <div className={style.wrapper}>
        {description &&
          <span className={style.description}>{description}</span>
        }
        <input className={classnames(style.input, highlighted && style.highlighted)}
          name={name}
          readOnly={readonly}
          value={this.props.value}
          onChange={this.onChange}>
        </input>
      </div>
    );
  }
}
