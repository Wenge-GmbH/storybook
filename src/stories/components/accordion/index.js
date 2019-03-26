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
    children: PropTypes.instanceOf(Array).isRequired
  }

  state = {
    activePanel: this.props.children[0].props.label
  }

  onClickPanelItem = (panel) => {
    this.setState({ activePanel: panel })
  }

  render() {
    const {
      onClickPanelItem,
      props: {
        children,
        className,
        toggle = false,
      },
      state: {
        activePanel
      }
    } = this;

    return (
      <div className={"accordion " + className}>
        {children.map((child, i) => {
          const { label } = child.props;

          return (
            <Panel
              toggle={toggle}
              activePanel={activePanel}
              key={i}
              label={label}
              onClick={onClickPanelItem}
            >
              {child.props.children}
            </Panel>
          )
        })}
      </div>
    )
  }
}

class Panel extends React.Component {
  static propTypes = {
    activePanel: PropTypes.string.isRequire,
    label: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
    toggle: PropTypes.bool.isRequired,
  }

  state = {
    open: false,
  }

  onClick = () => {
    const { label, onClick, activePanel } = this.props;
    onClick(label);
  }

  onClickToggle = () => {
    this.setState({open: this.state.open ? false : true})
  }

  render() {
    const {
      onClick,
      onClickToggle,
      props: {
        activePanel,
        label,
        children,
        toggle,
      },
      state: {
        open,
      },
      refs: {
        panel,
      }
    } = this;

    let className="panel"

    if(!toggle) {
      activePanel === label ? className += ' true' : className += ' false';

      if(className === "panel true" && panel !== undefined) {
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
      if(className === "panel false" && panel !== undefined) {
        panel.style.maxHeight = '0px';
      }
    }

    if(toggle) {
      open ? className += ' true' : className += ' false';

      if(open && panel !== undefined) {
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
      if(!open && panel !== undefined) {
        panel.style.maxHeight = '0px';
      }
    }


    return(
      <>
        <div onClick={toggle ? onClickToggle : onClick} className={"panel-header"}>
          {label}
        </div>
        <div ref={'panel'} className={className}>
          {children}
        </div>
      </>
    )
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
