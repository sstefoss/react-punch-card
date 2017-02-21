import React from 'react';
import ReactDOM from 'react-dom';
import Punch from './punch';
import XAxis from './xAxis';
import YAxis from './yAxis';
import Cells from './cells';
import './style';

const cyMult = (i, rowHeight, xAxisHeight, punchRadius) => (i * rowHeight) + xAxisHeight + punchRadius;

export default class Card extends React.Component {

  static propTypes = {
    cols: React.PropTypes.array.isRequired,
    rows: React.PropTypes.array.isRequired,
    punchRadius: React.PropTypes.number,
    data: React.PropTypes.array.isRequired,
    onMouseOver: React.PropTypes.func,
    onClick: React.PropTypes.func,
    xAxisHeight: React.PropTypes.number,
    xAxisPadding: React.PropTypes.number,
    yAxisWidth: React.PropTypes.number,
    yAxisPadding: React.PropTypes.number,
    getValue: React.PropTypes.func
  }

  static defaultProps = {
    xAxisHeight: 42,
    xAxisPadding: 10,
    yAxisWidth: 85,
    yAxisPadding: 20,
    punchRadius: 16,
    getValue: data => data,
  }

  render() {
    const {
      rows,
      cols,
      data,
      punchRadius,
      xAxisHeight,
      yAxisWidth,
      xAxisPadding,
      yAxisPadding,
      getValue
    } = this.props;
    const rowHeight = (punchRadius * 2) + xAxisPadding;
    const colWidth = (punchRadius * 2) + yAxisPadding;

    // calculate svg width & height
    const height = xAxisHeight + (rows.length * rowHeight);
    const width = yAxisWidth + (cols.length * colWidth) - yAxisPadding;

    return (
      <svg
        className='punch-card'
        width={width}
        height={height}>
        <XAxis
          width={width}
          data={cols}
          yAxisWidth={yAxisWidth}
          punchRadius={punchRadius}
          yAxisPadding={yAxisPadding}
        />
        <YAxis
          ref={ref => this.yAxis = ref}
          height={height}
          data={rows}
          cyMult={cyMult}
          rowHeight={rowHeight}
          xAxisHeight={xAxisHeight}
          punchRadius={punchRadius}
        />
        <Cells
          width={width}
          height={height}
          rows={rows}
          cols={cols}
          data={data}
          rowHeight={rowHeight}
          xAxisHeight={xAxisHeight}
          yAxisWidth={yAxisWidth}
          yAxisPadding={yAxisPadding}
          punchRadius={punchRadius}
          getValue={getValue}
          cyMult={cyMult}
        />
      </svg>
    );
  }
}
