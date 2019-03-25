import React from 'react';

export const Button = (props) => {
  if(props.primary) {
    return (
      <button
        disabled={props.disabled}
        onClick={props.onClick}
        className={"btn-primary " + props.style}>
        <div className="flexbox justify-center flex-align-center">
          {props.icon}<p>{props.label}</p>
        </div>
      </button>
    )
  }
  else if(props.outline) {
    return (
      <button
        disabled={props.disabled}
        onClick={props.onClick}
        className={"btn-border " + props.style}>
        <div className="flexbox justify-center flex-align-center">
          {props.icon}<p>{props.label}</p>
        </div>
      </button>
    )
  }
  else if(props.plain) {
    return (
      <button
        disabled={props.disabled}
        onClick={props.onClick}
        className={"btn-plain " + props.style}>
        <div className="flexbox justify-center flex-align-center">
          {props.icon}<p>{props.label}</p>
        </div>
      </button>
    )
  }
}
