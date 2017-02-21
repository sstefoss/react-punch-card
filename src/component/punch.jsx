import React from 'react';
import './style';

export default class Punch extends React.Component {

  static propTypes = {
    className: React.PropTypes.string,
    data: React.PropTypes.any,
    cx: React.PropTypes.number,
    cy: React.PropTypes.number,
    r: React.PropTypes.number,
  }

  render() {
    return (
      <circle {...this.props} />
    );
  }
}
