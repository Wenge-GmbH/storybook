import React from 'react';

export const Accordion = (props) => (
  <div className="accordion">
    {props.header}
    {props.children}
  </div>
);

export class AccordionPanel extends React.Component {
  state = {
    open: false,
  }

  handleClick = () => {
    this.setState({
      open: this.state.open !== true ? true : false,
    })
    if(this.state.open) {
      this.refs.panel.style.maxHeight = this.refs.panel.scrollHeight + 'px';
    } else {
      this.refs.panel.style.maxHeight = '0px';
    }
  }

  render() {
    return (
      <div className="container-full">
        <div className="panel-header" onClick={this.handleClick}>
          {this.props.header}
        </div>
        <div className={"panel " + this.state.open} ref="panel">
          {this.props.children}
        </div>
      </div>
    );
  }
}
