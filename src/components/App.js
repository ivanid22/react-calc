import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate, { ButtonType } from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
      currentlyDisplayedValue: '0',
      justCalculated: true,
    };
    this.handleClick = this.handleClick.bind(this);
    this.updateTotal = this.updateTotal.bind(this);
    this.updateNext = this.updateNext.bind(this);
  }

  updateTotal(val) {
    const { total } = this.state;
    if (val === '0' && total === '0') return;
    this.setState(state => ({
      total: state.total ? state.total + val : val,
      currentlyDisplayedValue: state.total ? state.total + val : val,
    }));
  }

  updateNext(val) {
    const { next } = this.state;
    if (val === '0' && next === '0') return;
    this.setState(state => ({
      next: state.next ? state.next + val : val,
      currentlyDisplayedValue: state.next ? state.next + val : val,
    }));
  }

  handleClick(buttonName) {
    const {
      total, next, operation, justCalculated,
    } = this.state;

    if (ButtonType.DIGITS.includes(buttonName)) {
      if (justCalculated) {
        this.setState({ justCalculated: false, total: null, currentlyDisplayedValue: buttonName });
        this.updateTotal(buttonName);
      } else if (total && !operation) {
        this.updateTotal(buttonName);
      } else if (total && operation) {
        this.updateNext(buttonName);
      }
    } else if (buttonName === '=') {
      const result = calculate({ total, next, operation }, buttonName);
      if (total) {
        this.setState({
          total: result.total,
          next: result.next,
          operation: result.operation,
          justCalculated: true,
          currentlyDisplayedValue: result.total,
        });
      }
    } else if (buttonName === '.') {
      const result = calculate({ total, next, operation }, buttonName);
      this.setState({
        total: result.total,
        next: result.next,
        operation: result.operation,
        currentlyDisplayedValue: result.next ? result.next : result.total,
      });
    } else {
      if (justCalculated && buttonName !== 'AC') return;
      const result = calculate({
        total,
        next,
        operation,
      }, buttonName);
      this.setState({
        total: result.total,
        next: result.next,
        operation: result.operation,
        currentlyDisplayedValue: result.total,
      });
      if (result.calculated) this.setState({ justCalculated: true });
      if (buttonName === 'AC') this.setState({ justCalculated: true, currentlyDisplayedValue: '0' });
    }
  }

  render() {
    const { currentlyDisplayedValue, operation } = this.state;
    return (
      <div className="app">
        <Display result={currentlyDisplayedValue} operation={operation} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
