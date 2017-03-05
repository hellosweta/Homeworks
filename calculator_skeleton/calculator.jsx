import React from 'react';

class Calculator extends React.Component{
  constructor(props){
    super(props);
    this.state = { num1: "", num2: "", result: 0 };
    this.num1 = "";
    this.num2 = "";
    this.setNum1 = this.setNum1.bind(this);
    this.add = this.add.bind(this);
  }


  render(){
    return (
      <div>
        <h1>{this.state.result}</h1>
          <label>
            First Input:
            <input type="text" value={this.state.num1} onChange={this.setNum1()} />
          </label>
          <label>
            Second Input:
            <input type="text" value={this.state.num2} onChange={this.setNum2()} />
          </label>
          <button onClick={this.add}>+
          </button>
          <button
            onClick={this.reset}>Reset!
          </button>
      </div>
    );
  }

  setNum1() {

    this.setState({ num1: this.state.value });
  }

  setNum2(){
    this.setState({ num2: this.state.value });

  }

  add(e){
    e.preventDefault();
    this.setState({ result: parseInt(this.state.num1) + parseInt(this.state.num2)});
    // The current values for num1 and num2 should be properly updated and stored within the state of your component. Create functions to handle adding, subtracting, multiplying, and dividing, and use setState() to set this.state.result to the correct result.
  }
}

export default Calculator;
// import React from 'react';
//
// class Calculator extends React.Component {
//   constructor(props) {
//     super(props);
//     // your code here
//   }
//
//   // your code here
//
//   render() {
//     return (
//       <div>
//         <h1>Hello World</h1> // replace this with your code
//       </div>
//     );
//   }
// }
//
// export default Calculator;
