import React from 'react';

export default class XAxis extends React.Component {

  static propTypes = {
    data: React.PropTypes.array.isRequired,
    width: React.PropTypes.number.isRequired
  }

  render() {
    const {data, width} = this.props;
    const leftOffset = 80;
    const widthMult = (width - leftOffset) / data.length;
    return (
      <g className='punch-card__xAxis'>{data.map((item, i) => {
        return (
          <g key={`${item}.${i}`} className='punch-card__xAxis-item'>
            <text textAnchor='middle' dy={10} dx={(i * widthMult) + leftOffset}>{item}</text>
          </g>
        )
      })}</g>
    );
  }
}
