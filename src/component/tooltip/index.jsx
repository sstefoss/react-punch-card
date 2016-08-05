import React from 'react';
import './style';

export default class Tooltip extends React.Component {
  render() {
    const {data} = this.props;
    const text = `${Math.round(data * 10)} commits`;
    return (
      <div className='punch--tooltip'>{text}</div>
    );
  }
}
