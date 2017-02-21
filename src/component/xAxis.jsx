import React from 'react';
import classNames from 'classNames';

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
        const cn = classNames('punch-card__xAxis-item', {
          'punch-card__xAxis-item--is-inactive': !item.isActive
        });
        return (
          <text
            className={cn}
            textAnchor='middle'
            key={i}
            dy={12}
            dx={(i * widthMult) + yAxisWidth + punchRadius}>
            {item.value}
          </text>
        );
      })}</g>
    );
  }
}
