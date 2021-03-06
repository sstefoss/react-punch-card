import React, { Component } from 'react';
import PunchCard from './component';
import './style';

const cols = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
const rows = [
  'Dec 5',
  'Dec 12',
  'Dec 19',
  'Dec 26',
];

/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
function getRandomArbitrary() {
  const max = 10;
  const min = 100;
  return Math.random() * (max - min) + min;
}

function createData() {
  const data = new Array();
  for (let i = 0; i < rows.length; i++) {
    data[i] = new Array();
    for (let j = 0; j < cols.length; j ++) {
      data[i][j] = getRandomArbitrary();
    }
  }
  return data;
}

export default class App extends Component {

  render() {
    return (
      <div>
        <div className='container'>
          <PunchCard
            cols={cols}
            rows={rows}
            data={createData()}
          />
        </div>
      </div>
    );
  }
}
