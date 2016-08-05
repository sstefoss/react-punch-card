import React from 'react';
import {Punch, Tooltip} from '../';

export default class Cells extends React.Component {

  static propTypes = {
    cols: React.PropTypes.array.isRequired,
    rows: React.PropTypes.array.isRequired,
    data: React.PropTypes.array.isRequired
  }

  render() {
    const {rows, cols, data, children} = this.props;
    console.info(this.props.children);
    return (
      <div className='punch-card--rows'>{rows.map((row, i) => {
        return (
          <div key={`${i}`} className='punch-card--row'>
            <div className='punch-card--cols'>{cols.map((col, j) => {
              let childrenWithProps = (children) ? React.Children.map(children, child => React.cloneElement(child, {
                  data: data[i][j]
                })
              ) : (
                <Punch data={data[i][j]}>
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
