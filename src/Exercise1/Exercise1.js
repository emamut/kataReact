import React, {Component} from 'react';

export class Exercise1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  generateDataArray = () => {
    return [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];
  }

  getDataArraySpiral = (data) => {
    let result = [];
    let size = data[0].length;
    let contx = 0;
    let conty = 0;

    for (let cont = 0; cont <= size * size; cont += 1) {
      if (cont <= 2) {
        result.push(data[contx][conty]);
        if (cont < 2) {
          conty += 1;
        }
      }

      if (cont > 2 && cont < 5) {
        contx += 1;
        result.push(data[contx][conty]);
      }

      if (cont > 5 && cont < 8) {
        conty -= 1;
        result.push(data[contx][conty]);
      }

      if (cont === 8) {
        contx -= 1;
        result.push(data[contx][conty]);
      }
      if (cont === 9) {
        conty += 1;
        result.push(data[contx][conty]);
      }
    }
    return result;
  }

  render() {
    return (
      <div className="container">
    Exercise1 page
      </div>
    );
  }
}

export default Exercise1;
