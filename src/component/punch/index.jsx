import React from 'react';
import './style';

export default class Punch extends React.Component {

  static propTypes = {
    data: React.PropTypes.number
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
          style={{width: `${size}%`, height: `${size}%`}}>
          {childrenWithProps}
        </div>
      </div>
    );
  }
}
