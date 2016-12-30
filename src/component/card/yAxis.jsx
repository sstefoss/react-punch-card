import React from 'react';

export default class YAxis extends React.Component {

  static propTypes = {
    data: React.PropTypes.array.isRequired,
    height: React.PropTypes.number.isRequired
  }

  render() {
    const {data, height} = this.props;
    const heightOffset = 40;
    const heightMult = height / data.length;
    return (
      <g className='punch-card__yAxis'>{data.map((row, i) => {
        return (
          <g key={row} className='punch-card__yAxis-item'>
            <text dy={(i * heightMult) + heightOffset}>{row}</text>
          </g>
        );
      })}
      </g>
    );
  }
}
