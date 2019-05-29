import React, { Component } from 'react';
import './checkbox.min.css';

export class Checkbox extends Component {
  state = {
    checked: false,
  }

  handleClick = () => {
    this.setState({
      checked: !this.state.checked,
    })
  }

  render() {
    const { checked } = this.state;
    return (
      <div className={`checkbox ${checked ? 'checked' :  ''}`} onClick={this.handleClick}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72.47 72.47">
          <defs>
            <linearGradient id="face_gradient" data-name="Unbenannter Verlauf 6" x1="85.32" y1="-19.99" x2="-21.5" y2="102.38" gradientUnits="userSpaceOnUse">
              <stop offset="0" stop-color="#fff"/>
              <stop offset="0.66" stop-color="#f4f4f4"/>
              <stop offset="0.96" stop-color="#ededed"/>
            </linearGradient>
          </defs>
          <circle className="face" cx="36.24" cy="36.24" r="36.24"/>
          <g className="sleepy">
            <path className="mouth" d="M31.76,50.62c0,1.7-1.91,3.07-4.28,3.07s-4.27-1.37-4.27-3.07,1.91-1.13,4.27-1.13S31.76,48.93,31.76,50.62Z"/>
            <path className="eye" d="M22.34,36.16c.42,1.64-2.36,3.31-4.72,3.31s-5-2-4.5-3.66,2.14-.34,4.5-.34S21.9,34.43,22.34,36.16Z"/>
            <path className="eye" d="M44.79,36.16c.42,1.64-2.36,3.31-4.73,3.31s-5-2-4.5-3.66,2.14-.34,4.5-.34S44.34,34.43,44.79,36.16Z"/>
          </g>
          <g className="happy">
            <circle className="eye" cx="59.85" cy="29.01" r="3.23"/>
            <circle className="eye" cx="35.85" cy="29.01" r="3.23"/>
            <path className="mouth" d="M34.51,40h26.3a.88.88,0,0,1,.88,1c-.42,2.58-2.6,9.12-14,9.12S34,43.57,33.62,41A.89.89,0,0,1,34.51,40Z"/>
          </g>
        </svg>
      </div>
    );
  }
}
