import React, {Component} from 'react';

export class Exercise1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  generate_data_array = () => {
    return [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];
  }

  get_data_array_spiral = (data) => {
    let result = [];
    let size = data[0].length;
    let contx = 0;
    let conty = 0;

    for(let cont = 0; cont <= (size * size); cont++) {
      if(cont <= 2) {
        result.push(data[contx][conty]);
        if(cont < 2)
          conty++;
      }

      if(cont > 2 && cont < 5){
        contx++;
        result.push(data[contx][conty]);
      }

      if(cont > 5 && cont < 8) {
        conty--;
        result.push(data[contx][conty]);
      }

      if(cont == 8) {
        contx--;
        result.push(data[contx][conty]);
      }
      if(cont == 9){
        conty++;
        result.push(data[contx][conty]);
      }
    }

    console.log(result);
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
