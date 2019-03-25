import React from 'react';

export const Heading = (props) => {
  switch(props.type) {
    case 1:
      return <h1 className={props.size + ' ' + props.color}>{props.children}</h1>
    case 2:
      return <h2 className={props.size + ' ' + props.color}>{props.children}</h2>
    case 3:
      return <h3 className={props.size + ' ' + props.color}>{props.children}</h3>
    case 4:
      return <h4 className={props.size + ' ' + props.color}>{props.children}</h4>
    case 5:
      return <h5 className={props.size + ' ' + props.color}>{props.children}</h5>
    case 6:
      return <h6 className={props.size + ' ' + props.color}>{props.children}</h6>
    default:
      return <div>No Type</div>
  }
}
