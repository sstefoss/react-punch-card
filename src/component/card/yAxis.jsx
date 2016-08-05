import React from 'react';

export default class YAxis extends React.Component {

  static propTypes = {
    data: React.PropTypes.array.isRequired
  }

  render() {
    const {data} = this.props;
    return (
      <div className='punch-card--yAxis'>{data.map((item, i) => {
        return (
          <div key={`yAxis--${i}`} className='punch-card--yAxis--item'>{data[i]}</div>
        );
      })}</div>
    );
  }
}
