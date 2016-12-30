import React from 'react';

export default class Cells extends React.Component {

  static propTypes = {
    cols: React.PropTypes.array.isRequired,
    rows: React.PropTypes.array.isRequired,
    data: React.PropTypes.array.isRequired,
    punchRadius: React.PropTypes.number,
  }

  render() {
    const {rows, cols, data, width, height, punchRadius} = this.props;
    const widthOffset = 80;
    const heightOffset = 35;
    const radiusMult = punchRadius / 100;
    const widthMult = (width - widthOffset) / cols.length;
    const heightMult = height / data.length;
    return (
      <g className='punch-card__data'>{rows.map((row, i) => {
        return (
          <g key={`${i}`} className='punch-card__data-row'>{cols.map((col, j) => {
            return (
              <circle
                className='punch-card__punch'
                key={`${i}.${j}`}
                cy={(i * heightMult) + heightOffset} cx={(j * widthMult) + widthOffset}
                r={data[i][j] * radiusMult} />
            );
          })}
          </g>
        );
      })}</g>
    );
  }
}
