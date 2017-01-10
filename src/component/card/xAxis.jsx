import React from 'react';

export default class XAxis extends React.Component {

  static propTypes = {
    data: React.PropTypes.array.isRequired,
    punchRadius: React.PropTypes.number.isRequired,
    width: React.PropTypes.number.isRequired,
    yAxisWidth: React.PropTypes.number,
    yAxisPadding: React.PropTypes.number,
  }

  render() {
    const {data, width, yAxisWidth, punchRadius, yAxisPadding} = this.props;
    const widthMult = (width + yAxisPadding - yAxisWidth) / data.length;
    return (
      <g className='punch-card__xAxis'>{data.map((item, i) => {
        return (
          <text
            className='punch-card__xAxis-item'
            textAnchor='middle'
            key={i}
            dy={10}
            dx={(i * widthMult) + yAxisWidth + punchRadius}>
            {item}
          </text>
        );
      })}</g>
    );
  }
}
