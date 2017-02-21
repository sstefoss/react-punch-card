import React from 'react';
import classNames from 'classNames';
import Punch from './punch';

export default class Cells extends React.Component {

  static propTypes = {
    cols: React.PropTypes.array.isRequired,
    rows: React.PropTypes.array.isRequired,
    data: React.PropTypes.array.isRequired,
    punchRadius: React.PropTypes.number,
    width: React.PropTypes.number.isRequired,
    rowHeight: React.PropTypes.number.isRequired,
    xAxisHeight: React.PropTypes.number.isRequired,
    cyMult: React.PropTypes.func.isRequired,
    yAxisWidth: React.PropTypes.number,
    yAxisPadding: React.PropTypes.number,
    getValue: React.PropTypes.func,
    component: React.PropTypes.node,
  }

  render() {
    const {rows, cols, data, width, punchRadius, rowHeight, xAxisHeight, cyMult, yAxisWidth, yAxisPadding, getValue, component} = this.props;
    const child = component ? component : <Punch />;
    const radiusMult = punchRadius / 100;
    const widthMult = (width + yAxisPadding - yAxisWidth) / cols.length;

    return (
      <g className='punch-card__data'>{rows.map((row, i) => {
        return (
          <g key={`${i}`} className='punch-card__data-row'>{cols.map((col, j) => {
            const key = `${i}.${j}`;
            const value = getValue(data[i][j]);
            const r = value ? value * radiusMult : 0;
            const className = classNames('punch-card__punch');
            const cy = cyMult(i, rowHeight, xAxisHeight, punchRadius);
            const cx = (j * widthMult) + yAxisWidth + punchRadius;
            const punchProps = Object.assign({}, {
              key,
              className,
              cy,
              cx,
              r,
              data: data[i][j]
            });

            return React.cloneElement(child, { ...punchProps});
          })}
          </g>
        );
      })}</g>
    );
  }
}
