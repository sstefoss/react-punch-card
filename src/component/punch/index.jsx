import React from 'react';
import './style';

export default class Punch extends React.Component {

  static propTypes = {
    data: React.PropTypes.number.isRequired
  }

  render() {
    const {data, children} = this.props;
    const size = data * 10;
    return (
      <div className='punch'>
        <div
          className='punch--point'
          style={{width: `${size}%`, height: `${size}%`}}>
          {children}
        </div>
      </div>
    );
  }
}
