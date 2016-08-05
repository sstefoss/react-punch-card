import React from 'react';

export default class XAxis extends React.Component {

  static propTypes = {
    data: React.PropTypes.array
  }

  render() {
    const {data} = this.props;
    return (
      <div className='punch-card--xAxis punch-card--row'>
        <div className='punch-card--cols'>{data.map((item, i) => {
          return (
              <div key={`xAxis--${i}`} className='punch-card--xAxis--item'>{data[i]}</div>
            );
          })}
        </div>
      </div>
    );
  }
}
