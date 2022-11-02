import React, {Component} from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null
    };
    this.handleOperations = this.handleOperations.bind(this);
  };

  handleOperations =(e) => {
    this.setState((state) => calculate(state, e.target.textContent));
  }

  render() {
    const { total, next, operation } = this.state;

    return (
      <div className="calculus">
        <div className="display">
            {next || total || operation || 0 }
        </div>
        <div className="All">
          <div className="row-1">
            <button type="button" onClick={this.handleOperations}>AC</button>
            <button type="button"  onClick={this.handleOperations}>+/-</button>
            <button type="button"  onClick={this.handleOperations}>%</button>
            <button type="button" className="orange"  onClick={this.handleOperations}> ÷</button>
          </div>
          <div className="row-2">
            <button type="button" onClick={this.handleOperations}>7</button>
            <button type="button" onClick={this.handleOperations}>8</button>
            <button type="button" onClick={this.handleOperations}>9</button>
            <button type="button" className="orange" onClick={this.handleOperations}>x</button>
          </div>
          <div className="row-3">
            <button type="button" onClick={this.handleOperations}>4</button>
            <button type="button" onClick={this.handleOperations}>5</button>
            <button type="button" onClick={this.handleOperations}>6</button>
            <button type="button" className="orange" onClick={this.handleOperations}>-</button>
          </div>
          <div className="row-4">
            <button type="button" onClick={this.handleOperations}>1</button>
            <button type="button" onClick={this.handleOperations}>2</button>
            <button type="button" onClick={this.handleOperations}>3</button>
            <button type="button" className="orange" onClick={this.handleOperations}>+</button>
          </div>
          <div className="point">
            <button type="button" className="zero" onClick={this.handleOperations}>0</button>
            <button type="button" className="dot" onClick={this.handleOperations}>.</button>
            <button type="button" className="orange" onClick={this.handleOperations}>=</button>
          </div>
        </div>
      </div>
    );
  }
}
export default Calculator;
