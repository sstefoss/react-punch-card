import React from 'react';
import ReactDOM from 'react-dom';
import {Punch} from '../index';
import XAxis from './xAxis';
import YAxis from './yAxis';
import Cells from './cells';
import './style';

export default class Card extends React.Component {

  static propTypes = {
    width: React.PropTypes.number,
    height: React.PropTypes.number,
    cols: React.PropTypes.array.isRequired,
    rows: React.PropTypes.array.isRequired,
    punchRadius: React.PropTypes.number,
    data: React.PropTypes.array.isRequired,
    onMouseOver: React.PropTypes.func,
    onClick: React.PropTypes.func
  }

  constructor() {
    super();
    this.state = {
      xAxisWidth: 0,
      yAxisWidth: 0
    }
  }

  // static defaultProps = {
  //   width: '980px',
  //   height: '520px'
  // }

  componentDidMount() {
    // console.info(ReactDOM.findDOMNode(this.yAxis));
    this.setState({
      xAxisWidth: (this.cells) ? ReactDOM.findDOMNode(this.cells).clientWidth : 0,
      yAxisWidth: this.yAxis ? ReactDOM.findDOMNode(this.yAxis).clientWidth : 0
    });
  }


  render() {
    const {rows, cols, data, width, height, punchRadius} = this.props;
    const {xAxisWidth, yAxisWidth} = this.state;
    return (
      <svg width={width} height={height} className='punch-card'>
        <XAxis
          width={width}
          data={cols}
        />
        <YAxis
          ref={ref => this.yAxis = ref}
          height={height}
          data={rows}
        />
        <Cells
          width={width}
          height={height}
          rows={rows}
          cols={cols}
          data={data}
          punchRadius={punchRadius}
        />
      </svg>
    );
  }
}
