import React from 'react';
import PropTypes from 'prop-types';

export class Tabs extends React.Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired
  }

  state = {
    activeTab: this.props.children[0].props.label
  }

  onClickTabItem = (tab) => {
    this.setState({ activeTab: tab })
  }

  render() {
    const {
      onClickTabItem,
      props: {
        children,
        animation = false,
      },
      state: {
        activeTab
      }
    } = this;

    return(
      <div className="tabs">
        <div className="tab-list">
          <div className="row">
            {children.map((child, i) => {
              const { label } = child.props;

              return (
                <Tab
                  activeTab={activeTab}
                  key={i}
                  label={label}
                  onClick={onClickTabItem}
                />
              );
            })}
          </div>

          <div className="tab-content">
            {children.map(child => {
              if(child.props.label !== activeTab) return undefined;
              return child.props.children;
            })}
          </div>
        </div>
      </div>
    )
  }
}

export class Tab extends React.Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  onClick = () => {
    const { label, onClick } = this.props;
    onClick(label);
    console.log(label);
  }

  render() {
    const {
      onClick,
      props: {
        activeTab,
        label,
      },
    } = this;

    let className="tab-list-item"

    if(activeTab === label) {
      className += ' tab-list-active';
    }

    return(
      <div
        className={className}
        onClick={onClick}
      >
        {label}
      </div>
    )
  }
}
