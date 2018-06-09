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
    ]
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
