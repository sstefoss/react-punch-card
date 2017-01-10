import React from 'react';

export default class YAxis extends React.Component {

  static propTypes = {
    data: React.PropTypes.array.isRequired,
    rowHeight: React.PropTypes.number.isRequired,
    punchRadius: React.PropTypes.number.isRequired,
    cyMult: React.PropTypes.func.isRequired,
    xAxisHeight: React.PropTypes.number.isRequired
  }

  render() {
    const {data, rowHeight, xAxisHeight, punchRadius, cyMult} = this.props;
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
