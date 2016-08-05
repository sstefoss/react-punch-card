import React from 'react';
import {Punch, Tooltip} from '../index';
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

        <div className='punch-card--yAxis'>{rows.map((row, i) => {
          return (
            <div className='punch-card--yAxis--item'>{rows[i]}</div>
          )
        })}</div>

      <div className='punch-card--space'>
        <div className='punch-card--rows'>{rows.map((row, i) => {
          return (
            <div className='punch-card--row'>
              <div className='punch-card--cols'>{cols.map((col, j) => {
                return (
                  <div className='punch-card--col'>
                    <Punch data={data[i][j]}>
                      <Tooltip data={data[i][j]} />
                    </Punch>
                  </div>
                );
              })}</div>
            </div>
          );
        })}</div>
        <div className='punch-card--xAxis punch-card--row'>
            <div className='punch-card--cols'>{cols.map((col, i) => {
              return (
                  <div className='punch-card--xAxis--item'>{cols[i]}</div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
