import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
// eslint-disable-next-line no-unused-vars
import calculate from '../logic/calculate';

const DIGITS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
      currentlyDisplayedValue: null,
      justCalculated: true,
    };
    this.handleClick = this.handleClick.bind(this);
    this.updateTotal = this.updateTotal.bind(this);
    this.updateNext = this.updateNext.bind(this);
  }

  updateTotal(val) {
    this.setState(state => ({
      total: state.total ? state.total + val : val,
      currentlyDisplayedValue: state.total ? state.total + val : val,
    }));
  }

  updateNext(val) {
    this.setState(state => ({
      total: state.next ? state.next + val : val,
      currentlyDisplayedValue: state.next ? state.next + val : val,
    }));
  }

  handleClick(buttonName) {
    const { total, next, operation, justCalculated } = this.state;

    if (DIGITS.includes(buttonName)) {
      if (justCalculated) {
        this.setState({ justCalculated: false });
        this.updateTotal(buttonName);
      } else if (total && !operation) {
        this.updateTotal(buttonName);
      } else if (total && operation) {
        this.updateNext(buttonName);
      }
    } else {
      const result = calculate({
        total,
        next,
        operation,
      }, buttonName);
      this.setState({
        total: result.total,
        next: result.next,
        operation: result.operation,
      });
    }
  }

  render() {
    const { currentlyDisplayedValue } = this.state;
    return (
      <div className="app">
        <Display result={currentlyDisplayedValue} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
