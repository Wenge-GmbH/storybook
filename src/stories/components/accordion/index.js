import React from 'react';
import PropTypes from 'prop-types';

// export const Accordion = ({className, header, children}) => (
//   <div className={"accordion " + className}>
//     {console.log(children)}
//     {header}
//     {children}
//   </div>
// );
//
// Accordion.defaultProps = {
//   className: 'default',
// }

export class Accordion extends React.Component {
  static propTypes = {
    children: instanceOf(Array).isRequired
  }

  state = {
    activePanel: undefined,
  }

  onClickPanel = (panel) => {
    this.setState({ activePanel: panel })
  }

  render() {
    const {
      onClickPanelItem,
      props: {
        children,
      },
      state: {
        activePanel
      }
    } = this;

    return (
      <div>
        {children.map(child => {
          const { label } = child.props;

          return (
            <Panel
              activePanel={activePanel}
              key={label}
              label={label}
              onClick={onClickPanel}
            />
          )
        })}
      </div>
    )
  }
}

class Panel extends React.Component {
  static propTypes = {
    activePanel: PropTypes.string.isRequire,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  }

  onClick = () => {
    const { label, onClick } = this.props;
    onClick(label);
  }
}

// export class AccordionPanel extends React.Component {
//   state = {
//     open: false,
//   }
//
//   handleClick = () => {
//
//     if(this.state.open === false) {
//       this.setState({
//         open: !this.state.open ? true : false,
//       })
//       this.refs.panel.style.maxHeight = this.refs.panel.scrollHeight + 'px';
//     } else {
//       this.setState({
//         open: !this.state.open ? true : false,
//       })
//       this.refs.panel.style.maxHeight = '0px';
//     }
//   }
//
//   render() {
//     const { className, headerStyle, header, contentStyle, children } = this.props;
//
//     return (
//       <div className={"container-full " + className}>
//         <div className={"panel-header " + headerStyle} onClick={this.handleClick}>
//           {header}
//         </div>
//         <div
//           className={"panel " + contentStyle + ' ' + this.state.open} ref="panel"
//         >
//           {children}
//         </div>
//       </div>
//     );
//   }
// }
//
// AccordionPanel.defaultProps = {
//   header: <p>Default Panel Name use prop header</p>,
//   contentStyle: 'default',
//   className: '',
//   headerStyle: 'default'
// }
