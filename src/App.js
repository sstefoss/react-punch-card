import React, { Component } from 'react';
import {Card} from './component';
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


/**
 * Card component can accept a custom Punch component.
 * Just pass it as child.
 * eg.
 *   <Card
 *      data={createData()}
 *      cols={cols}
 *      rows={rows}>
 *    <MyPunchComponent />
 *  </Card>
 * If you don't set a child, Card will use default Punch.
 */
export default class App extends Component {

  render() {
    return (
      <div>
        <div className='container'>
          <Card
            cols={cols}
            rows={rows}
            data={createData()}
            punchRadius={16}
          />
        </div>
      </div>
    );
  }
}
