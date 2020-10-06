import { operate } from './operate';

const ButtonType = {
  OPERATIONS: ['+', '-', '%', 'X', '÷'],
  NEGATIVIZE: '+/-',
  EQUALS: '=',
  ALL_CLEAR: 'AC',
}

const calculate = (calculatorData, buttonName) => {
  const { total, next, operation } = calculatorData;

  switch (buttonName) {
    case ButtonType.NEGATIVIZE:
      return {
        total: total ? total * -1 : null,
        next: next ? next * -1 : null,
        operation,
      };
    case ButtonType.ALL_CLEAR:
      return {
        total: '',
        next: '',
        operation: '',
      };
    case ButtonType.EQUALS:
      return {
        total: operate(total, next, operation),
        next: '',
        operation: '',
      };
    default:
      if (ButtonType.OPERATIONS.includes(buttonName)) {
        return {
          
        }
      }
  }
}