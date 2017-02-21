import React from 'react';
import classNames from 'classNames';

const COMPONENT = 'punch-card__yAxis';

export default class YAxis extends React.Component {

  static propTypes = {
    cyMult: React.PropTypes.func.isRequired,
    data: React.PropTypes.array.isRequired,
    rowHeight: React.PropTypes.number.isRequired,
    punchRadius: React.PropTypes.number.isRequired,
    xAxisHeight: React.PropTypes.number.isRequired,
    getValue: React.PropTypes.func.isRequired
  }

  render() {
    const {data, rowHeight, xAxisHeight, punchRadius, cyMult, getValue} = this.props;
    const wrapperCN = classNames(COMPONENT);
    return (
      <g className={wrapperCN}>{data.map((row, i) => {
        const cy = cyMult(i, rowHeight, xAxisHeight, punchRadius);
        const itemCN = classNames(`${COMPONENT}-item`);
        const value = getValue(row);

        const itemProps = Object.assign({}, {
          key: row,
          className: itemCN,
          dy: cy + 5
        });

        return (
          <text {...itemProps}>{value}</text>
        );
      })}
      </g>
    );
  }
}
