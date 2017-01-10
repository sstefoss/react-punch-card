import React from 'react';

export default class YAxis extends React.Component {

  static propTypes = {
    data: React.PropTypes.array.isRequired,
    height: React.PropTypes.number.isRequired
  }

  render() {
    const {data, height, rowHeight, xAxisHeight, punchRadius, cyMult} = this.props;
    const heightMult = height / data.length;
    return (
      <g className='punch-card__yAxis'>{data.map((row, i) => {
        const cy = cyMult(i, rowHeight, xAxisHeight, punchRadius);
        return (
          <text key={row} className='punch-card__yAxis-item' dy={cy + 5}>{row}</text>
        );
      })}
      </g>
    );
  }
}
