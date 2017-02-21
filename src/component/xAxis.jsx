import React from 'react';
import classNames from 'classNames';

const COMPONENT = 'punch-card__xAxis';

export default class XAxis extends React.Component {

  static propTypes = {
    data: React.PropTypes.array.isRequired,
    punchRadius: React.PropTypes.number.isRequired,
    width: React.PropTypes.number.isRequired,
    yAxisWidth: React.PropTypes.number,
    yAxisPadding: React.PropTypes.number,
    getValue: React.PropTypes.func,
  }

  render() {
    const {data, width, yAxisWidth, punchRadius, yAxisPadding, getValue} = this.props;
    const widthMult = (width + yAxisPadding - yAxisWidth) / data.length;
    const wrapperCN = classNames(COMPONENT);
    return (
      <g className={wrapperCN}>{data.map((item, i) => {
        const itemCN = classNames(`${COMPONENT}-item`);
        const value = getValue(item);
        const dx = (i * widthMult) + yAxisWidth + punchRadius;

        const itemProps = Object.assign({}, {
          key: i,
          className: itemCN,
          textAnchor: 'middle',
          dy: 12,
          dx
        });

        return (
          <text {...itemProps}>{value}</text>
        );
      })}</g>
    );
  }
}
