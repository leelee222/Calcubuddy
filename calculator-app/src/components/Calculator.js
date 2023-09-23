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
       <div className='night'>
       <div className="display">{this.state.display}</div>
          <button type="button">
            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.83253 15C10.2484 15 12.4549 13.9475 13.9167 12.2229C14.133 11.9678 13.8972 11.5951 13.563 11.656C9.76289 12.349 6.27316 9.55904 6.27316 5.88586C6.27316 3.76998 7.45605 1.82429 9.37857 0.77666C9.67492 0.615176 9.60039 0.184951 9.26365 0.125391C8.79158 0.042039 8.31256 6.84474e-05 7.83253 0C3.50907 0 0 3.35481 0 7.5C0 11.6399 3.50356 15 7.83253 15Z" fill="#fff"/>
            </svg>
          </button>
       </div>
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