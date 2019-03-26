import React from 'react';

export const Button = ({disabled, onClick, style, icon, label, primary, outline, plain}) => {
  if(primary) {
    return (
      <button
        disabled={disabled}
        onClick={onClick}
        className={"btn-primary " + style}>
        <div className="flexbox justify-center flex-align-center">
          {icon}<p>{label}</p>
        </div>
      </button>
    )
  }
  else if(outline) {
    return (
      <button
        disabled={disabled}
        onClick={onClick}
        className={"btn-border " + style}>
        <div className="flexbox justify-center flex-align-center">
          {icon}<p>{label}</p>
        </div>
      </button>
    )
  }
  else if(plain) {
    return (
      <button
        disabled={disabled}
        onClick={onClick}
        className={"btn-plain " + style}>
        <div className="flexbox justify-center flex-align-center">
          {icon}<p>{label}</p>
        </div>
      </button>
    )
  }
}

Button.defaultProps = {
  disabled: false,
  label: 'Button Text',
  style: '',
}
