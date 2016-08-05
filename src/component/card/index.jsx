import React from 'react';
import {Punch, Tooltip} from '../index';
import XAxis from './xAxis';
import YAxis from './yAxis';
import Cells from './cells';
import './style';

export default class Card extends React.Component {

  static propTypes = {
    cols: React.PropTypes.array.isRequired,
    rows: React.PropTypes.array.isRequired,
    data: React.PropTypes.array.isRequired
  }

  render() {
    const {rows, cols, data} = this.props;
    return (
      <div className='punch-card'>
        <YAxis data={rows} />
        <div className='punch-card--space'>
          <Cells {...this.props} />
          <XAxis data={cols} />
        </div>
      </div>
    );
  }
}
