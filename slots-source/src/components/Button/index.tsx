import React from 'react';
import style from './button.module.css';
import classnames from 'classnames';

export interface ButtonProps {
    text: string;
    name: string;
    type: 'variable' | 'default' | 'action';
    disabled?: boolean;
    onClick: (name: string) => void;
}

export default class Button extends React.Component<ButtonProps> {
  static defaultProps: Partial<ButtonProps> = {
      text: '',
      name: '',
      disabled: false,
      type: 'default',
      onClick: () => {}
  };

  onClick() {
    this.props.onClick(this.props.name);
  }

  render() {
    const {name, disabled, type, text} = this.props;
    
    return (
      <button 
        disabled={disabled}
        type="button"
        name={name}
        className={classnames(style.button, style[type])}
        onClick={this.onClick.bind(this)}>
        {text}
      </button>
    );
  }
}
