import React from 'react';
import './style';

export default class Punch extends React.Component {

  static propTypes = {
    data: React.PropTypes.number,
    position: React.PropTypes.object,
    onClick: React.PropTypes.func,
    onMouseOver: React.PropTypes.func,
  }

  constructor() {
    super();
    this.onPunchClick = this.onPunchClick.bind(this);
    this.onPunchmouseOver = this.onPunchmouseOver.bind(this);
  }

  onPunchClick(e) {
    const {onClick, position} = this.props;
    if (onClick) {
      onClick(e, {...this.props});
    }
  }

  onPunchmouseOver(e) {
    const {onMouseOver} = this.props;
    if (onMouseOver) {
      onMouseOver(e, {...this.props});
    }
  }

  render() {
    const {data, children} = this.props;
    const size = data * 10;
    const childrenWithProps = React.Children.map(children, child => React.cloneElement(child, {
        data: data
      })
    );
    return (
      <div className='punch'>
        <div
          className='punch--point'
          onClick={this.onPunchClick}
          onMouseOver={this.onPunchmouseOver}
          style={{width: `${size}%`, height: `${size}%`}}>
          {childrenWithProps}
        </div>
      </div>
    );
  }
}
