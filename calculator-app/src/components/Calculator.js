// src/Calculator.js
import React, { Component } from 'react';
import '../styles/Calculator.css';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      display: '0',
      currentInput: '',
      previousInput: '',
      operator: null,
    };
  }

  handleNumberClick = (number) => {
    this.setState((prevState) => ({
      currentInput: prevState.currentInput + number,
      display: prevState.currentInput + number,
    }));
  };

  handleOperatorClick = (operator) => {
    this.setState((prevState) => ({
      operator: operator,
      previousInput: prevState.currentInput,
      currentInput: '',
    }));
  };

  handleEqualsClick = () => {
    const { previousInput, currentInput, operator } = this.state;
    if (operator === '+') {
      this.setState({
        display: parseFloat(previousInput) + parseFloat(currentInput),
      });
    } else if (operator === '-') {
      this.setState({
        display: parseFloat(previousInput) - parseFloat(currentInput),
      });
    } else if (operator === '*') {
      this.setState({
        display: parseFloat(previousInput) * parseFloat(currentInput),
      });
    } else if (operator === '/') {
      this.setState({
        display: parseFloat(previousInput) / parseFloat(currentInput),
      });
    }
  };

  handleClearClick = () => {
    this.setState({
      display: '0',
      currentInput: '',
      previousInput: '',
      operator: null,
    });
  };

  render() {
    return (
      <div className="calculator">
        <div className="display">{this.state.display}</div>
        <div className="buttons">
          <button onClick={() => this.handleNumberClick('7')}>7</button>
          <button onClick={() => this.handleNumberClick('8')}>8</button>
          <button onClick={() => this.handleNumberClick('9')}>9</button>
          <button onClick={() => this.handleOperatorClick('+')}>+</button>
          <button onClick={() => this.handleNumberClick('4')}>4</button>
          <button onClick={() => this.handleNumberClick('5')}>5</button>
          <button onClick={() => this.handleNumberClick('6')}>6</button>
          <button onClick={() => this.handleOperatorClick('-')}>-</button>
          <button onClick={() => this.handleNumberClick('1')}>1</button>
          <button onClick={() => this.handleNumberClick('2')}>2</button>
          <button onClick={() => this.handleNumberClick('3')}>3</button>
          <button onClick={() => this.handleOperatorClick('*')}>*</button>
          <button onClick={() => this.handleNumberClick('0')}>0</button>
          <button onClick={() => this.handleEqualsClick()}>=</button>
          <button onClick={() => this.handleClearClick()}>C</button>
          <button onClick={() => this.handleOperatorClick('/')}>/</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
