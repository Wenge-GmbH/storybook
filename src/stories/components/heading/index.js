import React from 'react';

export const Heading = ({size, color, children, type}) => {
  switch(type) {
    case 1:
      return <h1 className={size + ' ' + color}>{children}</h1>
    case 2:
      return <h2 className={size + ' ' + color}>{children}</h2>
    case 3:
      return <h3 className={size + ' ' + color}>{children}</h3>
    case 4:
      return <h4 className={size + ' ' + color}>{children}</h4>
    case 5:
      return <h5 className={size + ' ' + color}>{children}</h5>
    case 6:
      return <h6 className={size + ' ' + color}>{children}</h6>
    default:
      return <div>No Type</div>
  }
}

Heading.defaultProps = {
  size: 1,
  color: 'font-main',
}
