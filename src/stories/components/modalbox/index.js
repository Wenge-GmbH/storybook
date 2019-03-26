import React from 'react';
import ReactDOM, { createPortal } from 'react-dom';

export class Modalbox extends React.Component {
  state = {
    open: false,
  }

  onClick = () => {
    this.setState({open: !this.state.open})
  }

  render() {
    const {
      props: {
        children,
        trigger,
        domNode,
      },
      state: {
        open,
      },
    } = this;

    if(open) {
      return (
        <div>
          {children}
        </div>
      )
    }
    return ReactDOM.createPortal(
      <p>test</p>,
      document.getElementById('root')
    );
  }
}

export const Trigger = ({domNode}) => (
  <div id={domNode}>

  </div>
);
