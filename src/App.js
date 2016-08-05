import React, { Component } from 'react';
import {Card} from './component';
import './style';

const rows = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

const cols = [
  '12a',
  '1a',
  '2a',
  '3a',
  '4a',
  '5a',
  '6a',
  '7a',
  '8a',
  '9a',
  '10a',
  '11a',
  '12p',
  '1p',
  '2p',
  '3p',
  '4p',
  '5p',
  '6p',
  '7p',
  '8p',
  '9p',
  '10p',
  '11p'
];

/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
function getRandomArbitrary() {
  const max = 10;
  const min = 0;
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
      <div className='container'>
        <Card
          data={createData()}
          cols={cols}
          rows={rows}/>
      </div>
    );
  }
}
