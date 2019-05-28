import React, { Component } from 'react';
import './checkbox.min.css';

export class Checkbox extends Component {
  state = {
    checked: false,
  }

  render() {
    return (
      <div className="checkbox">
        <div className="face">
          <div className="sleepy">
            <div className="eyes"></div>
          </div>
          <div className="happy">
            <div className="eyes"></div>
          </div>
        </div>
      </div>
    );
  }
}
