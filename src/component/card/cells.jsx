import React from 'react';
import {Punch, Tooltip} from '../';

export default class Cells extends React.Component {

  static propTypes = {
    cols: React.PropTypes.array.isRequired,
    rows: React.PropTypes.array.isRequired,
    data: React.PropTypes.array.isRequired,
    onMouseOver: React.PropTypes.func,
    onClick: React.PropTypes.func
  }

  render() {
    const {rows, cols, data, children, onMouseOver, onClick} = this.props;
    return (
      <div className='punch-card--rows'>{rows.map((row, i) => {
        return (
          <div key={`${i}`} className='punch-card--row'>
            <div className='punch-card--cols'>{cols.map((col, j) => {
              let childrenWithProps = (children) ? React.Children.map(children, child => React.cloneElement(child, {
                  data: data[i][j],
                  position: {y: i, x: j}
                })
              ) : (
                <Punch
                  onClick={onClick}
                  onMouseOver={onMouseOver}
                  data={data[i][j]}
                  position={{y: i, x: j}}>
                  <Tooltip />
                </Punch>
              );

              return (
                <div key={`${i}${j}`} className='punch-card--col'>
                  {childrenWithProps}
                </div>
              );
            })}</div>
          </div>
        );
      })}</div>
    );
  }
}
